"use strict";

// Koach Learn course (Yoruba translation of non-profits/nonprofit-ai-program-impact.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "nonprofit-ai-program-impact-yo",
  lang: "yo",
  translationOf: "nonprofit-ai-program-impact",
  category: "Non Profits",
  name: "AI fún Ṣíṣe Ètò àti Fífi Ipa Rẹ̀ Hàn",
  skills: "Kíkọ logic model tó rọrùn, Yíyan ìwọ̀n outcome, Kíkọ ìwádìí kúkúrú fún àwọn olùkópa pẹ̀lú AI, Ṣíṣe àkópọ̀ èsì tí kò ní orúkọ, Kíkọ ìròyìn ipa ojú-ìwé kan",
  outcome: "lo AI láti kọ logic model tó rọrùn fún ètò kan, kọ ìwádìí kúkúrú fún àwọn olùkópa, ṣe àkópọ̀ èsì tí kò ní orúkọ, kí o sì sọ wọ́n di ìròyìn ipa ojú-ìwé kan tó jẹ́ òótọ́ fún ìgbìmọ̀ àti àwọn olùfowópamọ́ rẹ.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn alákòóso ètò, olùṣètò àti olùyọ̀ǹda ní àwọn àjọ aláìlérè àti àwọn àjọ ẹ̀sìn, tí wọ́n ń ṣe ètò, tí wọ́n sì nílò láti fi ìyàtọ̀ tí ètò wọn ń mú wá hàn.",
    "O máa ṣètò ètò kan sí ojú-ìwé kan, yan ohun tí o máa wọ̀n, lo AI láti kọ ìwádìí tó tọ́, ṣe àkópọ̀ èsì láìfi ìsọfúnni àdáni ẹnikẹ́ni hàn, kí o sì kọ ìròyìn ipa tí àwọn olùfowópamọ́ àti ìgbìmọ̀ rẹ lè gbẹ́kẹ̀lé.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì ń kọ́ apá kan nínú ìròyìn ipa rẹ. Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Fún ètò gidi kan, kọ ìròyìn ipa ojú-ìwé kan tí ó ní: logic model tó rọrùn (input, iṣẹ́ tí a ṣe, output, outcome), ìwọ̀n outcome méjì, ìwádìí kúkúrú fún àwọn olùkópa tí o kọ pẹ̀lú AI, àkópọ̀ èsì tí kò ní orúkọ (ìsọfúnni gidi tàbí ti àṣeṣe tí kò ní orúkọ), ìtàn kan tí a sọ pẹ̀lú àṣẹ ẹni náà, àti ẹ̀kọ́ òótọ́ kan tí ẹ kọ́.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn alákòóso ètò, olùṣètò àti olùyọ̀ǹda ní àwọn àjọ aláìlérè àti àwọn àjọ ẹ̀sìn, tí wọ́n ń ṣe ètò, tí wọ́n sì nílò láti fi ìyàtọ̀ tí ètò wọn ń mú wá hàn.",
    startingPoint: "Wọ́n ń ṣe ètò, wọ́n sì ń ka iye nǹkan bí oúnjẹ tí wọ́n pín tàbí ìpàdé tí wọ́n ṣe. Ọ̀pọ̀ kò tíì kọ logic model rí, kò tíì wọ̀n outcome ṣáájú àti lẹ́yìn, tàbí kọ ìròyìn ipa rí.",
    gap: "Àwọn olùfowópamọ́ àti ìgbìmọ̀ ń béèrè fún outcome sí i, kì í ṣe iye nǹkan nìkan. Àwọn akẹ́kọ̀ọ́ nílò ọ̀nà tó rọrùn, tó sì jẹ́ òótọ́ láti ṣètò, wọ̀n, àti ròyìn ìyípadà, kí wọ́n lo AI láti fi àkókò pamọ́, kí wọ́n dáàbò bo ìsọfúnni àdáni àwọn olùkópa, kí gbogbo nọ́mbà sì jẹ́ òótọ́.",
    constraints: [
      "Ẹgbẹ́ kékeré tí kò ní àkókò púpọ̀ fún iṣẹ́ ìsọfúnni (data)",
      "Ìpamọ́ àṣírí: ìwádìí jẹ́ àtinúwá, kò sì ní orúkọ; kò sí orúkọ, ìsọfúnni ìlera tàbí ti ìwé ìrìnnà (immigration) àyàfi tí ó bá pọndandan gan-an tí a sì pa á mọ́ láìléwu",
      "Iye nìkan ni a ń fi sínú irinṣẹ́ AI, kì í ṣe ìdáhùn àdáni gẹ́gẹ́ bí ènìyàn ṣe kọ ọ́",
      "AI máa ń ṣàṣìṣe nínú ìṣirò, nítorí náà a ń ṣàyẹ̀wò gbogbo ìdá-ọgọ́rùn-ún (percent) nínú spreadsheet",
      "Irinṣẹ́ ọ̀fẹ́ bí Google Forms tàbí Microsoft Forms"
    ],
    prerequisites: "\"Ìfihàn sí AI fún Àwọn Àjọ Aláìlérè\", tàbí ìrírí díẹ̀ nínú lílo olùrànlọ́wọ́ AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àkọsílẹ̀ èsì ètò kan", action: "dá àwọn tí ó jẹ́ output àti àwọn tí ó jẹ́ outcome mọ̀", standard: "kí o sì gba ó kéré tán 4 nínú 5 tọ̀nà" },
    { id: "O2", condition: "Tí a bá fún ọ ní àpèjúwe ètò kan tí gbogbo ènìyàn lè rí", action: "kọ logic model ojú-ìwé kan tí ó ní input, iṣẹ́ tí a ṣe, output àti outcome pẹ̀lú ìrànlọ́wọ́ AI", standard: "lẹ́yìn tí o bá ti yọ gbogbo ohun tí ẹ kò ṣe ní tòótọ́ kúrò" },
    { id: "O3", condition: "Tí a bá fún ọ ní outcome kan", action: "yan ìwọ̀n méjì tó rọrùn tí ẹgbẹ́ rẹ lè gbà, tí a ń béèrè ṣáájú àti lẹ́yìn", standard: "tí ó jẹ́ òótọ́, tí ó sì bá àkókò òṣìṣẹ́ àti olùyọ̀ǹda rẹ mu" },
    { id: "O4", condition: "Tí o bá ti ní àwọn ìwọ̀n outcome rẹ", action: "kọ ìwádìí kúkúrú tí kò ní orúkọ, tí ó ní ìbéèrè 5 sí 8, fún àwọn olùkópa pẹ̀lú AI", standard: "láìsí ìbéèrè tí ń darí ìdáhùn, pẹ̀lú àkíyèsí pé ó jẹ́ àtinúwá" },
    { id: "O5", condition: "Tí o bá ní iye ìdáhùn ìwádìí tí kò ní orúkọ", action: "ṣe àkópọ̀ èsì pẹ̀lú AI kí o sì ṣàyẹ̀wò gbogbo percent fúnra rẹ", standard: "láìsí ìsọfúnni kankan tí ó lè fi ẹni kan hàn" },
    { id: "O6", condition: "Tí o bá ní logic model rẹ àti èsì tí o ti ṣàyẹ̀wò", action: "kọ ìròyìn ipa ojú-ìwé kan tí ó ní àìní, ohun tí ẹ ṣe, ohun tí ó yí padà, ìtàn kan àti ẹ̀kọ́ kan tí ẹ kọ́", standard: "láìsí nọ́mbà tàbí ọ̀rọ̀ kankan tí kò sí nínú ìsọfúnni rẹ" }
  ],
  chapters: [
    {
      name: "Orí 1: Ṣíṣètò ohun tí a máa wọ̀n",
      lessons: [
        {
          objectives: ["O1"],
          title: "Output àti outcome: kí ni ìyàtọ̀ wọn?",
          minutes: 4,
          goal: "Mọ ìyàtọ̀ láàárín output àti outcome fún ọ̀kan nínú àwọn ètò rẹ.",
          text: [
            "Output ń ka ohun tí ẹ ṣe: oúnjẹ 300 tí ẹ pín, ìpàdé ìkọ́ni 40, olùyọ̀ǹda 25 tí ẹ kọ́. Outcome ń sọ ohun tí ó yí padà nínú ayé àwọn ènìyàn: àwọn ẹbí kò dààmú mọ́ tó bẹ́ẹ̀ nípa oúnjẹ, àwọn akẹ́kọ̀ọ́ gbé máàkì kíkàwé wọn sókè, àwọn olùyọ̀ǹda rí i pé àwọn ti ṣetán láti ṣe aṣáájú.",
            "Àwọn olùfowópamọ́ àti ìgbìmọ̀ ń béèrè fún outcome sí i, kì í ṣe output nìkan. Outcome ń fi hàn pé iṣẹ́ àjọ yín ń so èso.",
            "AI lè ràn ọ́ lọ́wọ́ láti ronú nípa rẹ̀. Béèrè pé: \"Ètò wa [àpèjúwe tí gbogbo ènìyàn lè rí] ń ṣe [àwọn iṣẹ́]. Kọ àwọn output tí ó ṣeé ṣe àti àwọn outcome kúkúrú tí ó ṣeé ṣe fún àwọn olùkópa.\" Lẹ́yìn náà, yan àwọn tí ó jẹ́ òótọ́ fún ètò rẹ."
          ],
          words: [["Output", "iye ohun tí ètò rẹ ṣe, bí oúnjẹ tí ẹ pín."], ["Outcome", "ìyípadà nínú ayé àwọn ènìyàn nítorí ètò rẹ."], ["Ipa (impact)", "ìyàtọ̀ ńlá, tí ó pẹ́, tí iṣẹ́ rẹ ń mú wá ní àwùjọ."]],
          slides: [
            { title: "Output ń ka ohun tí ẹ ṣe", bullets: ["Oúnjẹ 300 tí ẹ pín", "Ìpàdé ìkọ́ni 40", "Olùyọ̀ǹda 25 tí ẹ kọ́"] },
            { title: "Outcome ń fi ohun tí ó yí padà hàn", bullets: ["Àwọn ẹbí kò dààmú mọ́ tó bẹ́ẹ̀ nípa oúnjẹ", "Àwọn akẹ́kọ̀ọ́ gbé máàkì kíkàwé sókè", "Àwọn olùyọ̀ǹda ṣetán láti ṣe aṣáájú"] },
            { title: "Ní kí AI ro èrò jáde", bullets: ["Àwọn output àti outcome tí ó ṣeé ṣe", "Ìwọ lo máa yan èyí tí ó jẹ́ òótọ́"] }
          ],
          tryIt: "Fún ètò kan, kọ output mẹ́ta àti outcome méjì. Lo AI láti ro èrò jáde, lẹ́yìn náà pa àwọn tí ó jẹ́ òótọ́ fún ètò rẹ nìkan mọ́.",
          youCanNow: "mọ ìyàtọ̀ láàárín output àti outcome fún ètò tìrẹ.",
          quickCheck: [
            { objective: "O1", q: "\"Olùyọ̀ǹda 25 tí a kọ́\" jẹ́ àpẹẹrẹ kí ni?", options: ["Output", "Outcome", "Input", "Ìwádìí"], answer: 0, why: "Output ń ka ohun tí ẹ ṣe; outcome ń sọ ohun tí ó yí padà fún àwọn ènìyàn." },
            { objective: "O1", q: "Ìròyìn rẹ kọ iye oúnjẹ tí ẹ pín nìkan. Olùfowópamọ́ kan béèrè fún outcome. Kí ni o máa fi kún un?", options: ["Iye oúnjẹ sí i", "Ohun tí ó yí padà fún àwọn ẹbí, bí pé wọn kò dààmú mọ́ tó bẹ́ẹ̀ nípa oúnjẹ", "Iye owó oúnjẹ náà", "Àkọsílẹ̀ àwọn olùyọ̀ǹda"], answer: 1, why: "Outcome ń sọ ohun tí ó yí padà fún àwọn ènìyàn nítorí ètò náà." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kíkọ logic model tó rọrùn",
          minutes: 5,
          goal: "Kọ logic model ojú-ìwé kan fún ètò kan pẹ̀lú ìrànlọ́wọ́ AI.",
          text: [
            "Logic model jẹ́ àwòrán ojú-ìwé kan tí ó fi bí ètò rẹ ṣe ń ṣiṣẹ́ hàn: input (ohun tí ẹ fi sínú rẹ̀), iṣẹ́ tí ẹ ṣe (ohun tí ẹ ń ṣe), output (ohun tí ẹ ń kà) àti outcome (ohun tí ó ń yí padà).",
            "Béèrè lọ́wọ́ AI pé: \"Ṣe tábìlì logic model fún ètò yìí: [àpèjúwe tí gbogbo ènìyàn lè rí]. Àwọn ọwọ́n: input, iṣẹ́ tí a ṣe, output, outcome kúkúrú, outcome tí ó pẹ́. Jẹ́ kí àpótí kọ̀ọ̀kan kúrú.\"",
            "Lẹ́yìn náà, tún un ṣe kí ó bá òótọ́ mu. Yọ ohunkóhun tí ẹ kò ṣe kúrò. Logic model jẹ́ ètò tí o lè gbèjà, kì í ṣe àkọsílẹ̀ ohun tí ẹ ń fẹ́ nìkan."
          ],
          steps: ["Ṣàpèjúwe ètò náà ní gbólóhùn mẹ́ta tí gbogbo ènìyàn lè rí.", "Béèrè lọ́wọ́ AI fún tábìlì logic model tí ó ní ọwọ́n márùn-ún.", "Yọ ohunkóhun tí ẹ kò ṣe ní tòótọ́ kúrò.", "Ṣàyẹ̀wò pé outcome kọ̀ọ̀kan so mọ́ iṣẹ́ kan tí ẹ ṣe."],
          words: [["Logic model", "tábìlì ojú-ìwé kan tí ó fi input, iṣẹ́ tí a ṣe, output àti outcome hàn."], ["Input", "ohun tí ẹ fi sínú ètò kan: òṣìṣẹ́, olùyọ̀ǹda, owó, ibi ìṣiṣẹ́."]],
          slides: [
            { title: "Logic model ń fi hàn", bullets: ["Input: ohun tí ẹ fi sínú rẹ̀", "Iṣẹ́ tí a ṣe: ohun tí ẹ ń ṣe", "Output: ohun tí ẹ ń kà", "Outcome: ohun tí ó ń yí padà"] },
            { title: "Béèrè tábìlì lọ́wọ́ AI", bullets: ["Ọwọ́n márùn-ún", "Àpótí kúkúrú"] },
            { title: "Jẹ́ kí ó jẹ́ òótọ́", bullets: ["Yọ ohun tí ẹ kò ṣe kúrò", "Outcome kọ̀ọ̀kan so mọ́ iṣẹ́ kan"] }
          ],
          tryIt: "Kọ tábìlì logic model fún ètò rẹ pẹ̀lú AI, lẹ́yìn náà tún un ṣe títí gbogbo àpótí yóò fi jẹ́ òótọ́.",
          youCanNow: "kọ logic model tó rọrùn, tó sì jẹ́ òótọ́ fún ètò kan.",
          quickCheck: [
            { objective: "O2", q: "Nínú logic model, kí ni \"iṣẹ́ tí a ṣe\" (activities)?", options: ["Ohun tí ẹ ń kà", "Ohun tí ó ń yí padà", "Ohun tí ẹ ń ṣe", "Ohun tí ẹ fi sínú rẹ̀"], answer: 2, why: "Iṣẹ́ tí a ṣe ni ohun tí ẹ ń ṣe; input ni ohun tí ẹ fi sínú, output ni ohun tí ẹ ń kà, outcome ni ohun tí ó ń yí padà." },
            { objective: "O2", q: "Logic model tí AI kọ ní outcome tí ó pẹ́ kan tí ẹ kò ní ọ̀nà kankan láti dé. Kí ni o máa ṣe?", options: ["Pa á mọ́; àwọn olùfowópamọ́ fẹ́ràn àfojúsùn ńlá", "Mú un tóbi sí i", "Dà á kọ sí gbogbo ètò", "Yọ ọ́ kúrò kí logic model lè bá òótọ́ mu"], answer: 3, why: "Logic model jẹ́ ètò tí o lè gbèjà, kì í ṣe àkọsílẹ̀ ohun tí ẹ ń fẹ́ nìkan." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Yíyan ìwọ̀n outcome",
          minutes: 5,
          goal: "Yan ìwọ̀n outcome méjì tí ẹ lè gbà ní tòótọ́.",
          text: [
            "Ìwọ̀n ni bí o ṣe máa mọ̀ pé outcome kan ṣẹlẹ̀. Fún \"àwọn ẹbí kò dààmú mọ́ tó bẹ́ẹ̀ nípa oúnjẹ\", ìwọ̀n kan lè jẹ́: percent àwọn ẹbí tí ó sọ pé àwọn kò dààmú mọ́ tó bẹ́ẹ̀ pé oúnjẹ máa tán, tí a béèrè nígbà ìforúkọsílẹ̀ àti lẹ́yìn oṣù mẹ́ta.",
            "Ìwọ̀n tó dára rọrùn, ẹgbẹ́ rẹ lè gbà á, ó sì jẹ́ òótọ́. Fífi ṣáájú àti lẹ́yìn wé ara wọn lágbára ju bíbéèrè lẹ́ẹ̀kan ṣoṣo lọ.",
            "Béèrè lọ́wọ́ AI pé: \"Dábàá ọ̀nà mẹ́ta tó rọrùn tí àjọ aláìlérè kékeré lè fi wọ̀n outcome yìí: [outcome]. A ní [àkókò òṣìṣẹ́ àti olùyọ̀ǹda].\" Yan méjì tí ẹ lè ṣe ní tòótọ́."
          ],
          steps: ["Yan outcome méjì láti inú logic model rẹ.", "Béèrè lọ́wọ́ AI fún ọ̀nà tó rọrùn láti wọ̀n ọ̀kọ̀ọ̀kan.", "Yan àwọn tí ẹgbẹ́ rẹ lè gbà.", "Ṣètò láti wọ̀n ṣáájú àti lẹ́yìn nígbà tí ó bá ṣeé ṣe."],
          words: [["Ìwọ̀n", "bí o ṣe máa mọ̀ pé outcome kan ṣẹlẹ̀, nígbà púpọ̀ nọ́mbà tàbí percent."], ["Ṣáájú àti lẹ́yìn", "bíbéèrè ìbéèrè kan náà ní ìbẹ̀rẹ̀ àti lẹ́yìn náà, láti rí ìyípadà."]],
          slides: [
            { title: "Ìwọ̀n ń fi outcome hàn", bullets: ["\"Percent àwọn ẹbí tí kò dààmú mọ́ tó bẹ́ẹ̀ nípa oúnjẹ\"", "A béèrè nígbà ìforúkọsílẹ̀ àti lẹ́yìn oṣù mẹ́ta"] },
            { title: "Ìwọ̀n tó dára", bullets: ["Rọrùn", "Ẹgbẹ́ rẹ lè gbà á", "Jẹ́ òótọ́"] },
            { title: "Ṣáájú àti lẹ́yìn", bullets: ["Ó lágbára ju bíbéèrè lẹ́ẹ̀kan lọ", "Ó ń fi ìyípadà hàn bí àkókò ti ń lọ"] }
          ],
          tryIt: "Yan ìwọ̀n outcome méjì fún ètò rẹ, pẹ̀lú àbá AI, kí o sì kọ ìgbà tí o máa gba ọ̀kọ̀ọ̀kan.",
          youCanNow: "yan ìwọ̀n outcome tí ẹgbẹ́ rẹ lè gbà.",
          quickCheck: [
            { objective: "O3", q: "Kí ló dé tí bíbéèrè nígbà ìforúkọsílẹ̀ àti lẹ́yìn náà fi lágbára ju bíbéèrè lẹ́ẹ̀kan lọ?", options: ["Ó ń fi ìyípadà hàn bí àkókò ti ń lọ", "Ó kúrú jù", "Kò nílò àkókò òṣìṣẹ́", "Kò lo nọ́mbà"], answer: 0, why: "Fífi ṣáájú àti lẹ́yìn wé ara wọn ń fi ìyípadà hàn." },
            { objective: "O3", q: "AI dábàá ìwọ̀n mẹ́ta, ṣùgbọ́n ọ̀kan nílò àkókò òṣìṣẹ́ tí ẹ kò ní. Kí ni o máa ṣe?", options: ["Lo gbogbo mẹ́ta bẹ́ẹ̀", "Yan méjì tí ẹ lè gbà ní tòótọ́", "Gba agbaninímọ̀ràn ná", "Má ṣe wọ̀n rárá"], answer: 1, why: "Ẹgbẹ́ rẹ gbọ́dọ̀ lè gba ìwọ̀n tó dára; yan méjì tí ẹ lè ṣe ní tòótọ́." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ṣíṣètò ohun tí a máa wọ̀n",
        questions: [
          { objective: "O1", q: "Èwo ni outcome?", options: ["Àwọn ẹbí kò dààmú mọ́ tó bẹ́ẹ̀ nípa oúnjẹ", "Oúnjẹ 300 tí a pín", "Ìpàdé 40 tí a ṣe", "Olùyọ̀ǹda 25 tí a kọ́"], answer: 0, why: "Outcome jẹ́ ìyípadà nínú ayé àwọn ènìyàn." },
          { objective: "O1", q: "Èwo ni output?", options: ["Àwọn akẹ́kọ̀ọ́ ní ìgboyà sí i", "Ìpàdé ìkọ́ni 40 tí a ṣe", "Àwọn ẹbí ní ìlera sí i", "Àwọn olùyọ̀ǹda ṣetán láti ṣe aṣáájú"], answer: 1, why: "Output ń ka ohun tí ẹ ṣe." },
          { objective: "O2", q: "Logic model tí AI kọ ní iṣẹ́ kan tí ẹ kò ṣe. Kí ni o máa ṣe?", options: ["Pa á mọ́", "Bẹ̀rẹ̀ sí ṣe é ní ìkọ̀kọ̀", "Yọ ọ́ kúrò", "Béèrè lọ́wọ́ olùfowópamọ́"], answer: 2, why: "Logic model gbọ́dọ̀ jẹ́ òótọ́." },
          { objective: "O3", q: "Ètò ìwọ̀n wo ló lágbára jù?", options: ["Béèrè lẹ́ẹ̀kan ní ìparí", "Ṣe àméfò", "Béèrè lọ́wọ́ òṣìṣẹ́ nìkan", "Béèrè ìbéèrè kan náà nígbà ìforúkọsílẹ̀ àti lẹ́yìn oṣù mẹ́ta"], answer: 3, why: "Ṣáájú àti lẹ́yìn ń fi ìyípadà hàn." },
          { objective: "O2", q: "Kí ni input?", options: ["Ohun tí ẹ fi sínú rẹ̀: òṣìṣẹ́, olùyọ̀ǹda, owó, ibi ìṣiṣẹ́", "Ìdáhùn ìwádìí", "Orúkọ àwọn olùfowópamọ́", "Outcome"], answer: 0, why: "Input ni àwọn ohun èlò tí ètò kan ń lò." }
        ]
      }
    },
    {
      name: "Orí 2: Gbígba ìsọfúnni, ṣíṣe àkópọ̀ àti ríròyìn",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kíkọ ìwádìí kúkúrú tó tọ́ fún àwọn olùkópa",
          minutes: 5,
          goal: "Lo AI láti kọ àkọ́pẹrẹ ìwádìí kúkúrú tí ó ń wọ̀n àwọn outcome rẹ.",
          text: [
            "Ìwádìí ń béèrè lọ́wọ́ àwọn olùkópa ohun tí ó yí padà fún wọn. Jẹ́ kí ó kúrú, nǹkan bí ìbéèrè 5 sí 8, ní ọ̀rọ̀ tó rọrùn àti ní àwọn èdè tí wọ́n ń sọ.",
            "Béèrè lọ́wọ́ AI pé: \"Kọ ìwádìí ìbéèrè 6 tí kò ní orúkọ fún àwọn àgbàlagbà nínú ètò oúnjẹ wa láti wọ̀n [outcome]. Lo ọ̀rọ̀ tó rọrùn ní ìpele kíláàsì 6, ìbéèrè aláṣàyàn ni kí ó pọ̀ jù, pẹ̀lú ìbéèrè ṣíṣí kan. Yẹra fún ìbéèrè tí ń darí ìdáhùn.\"",
            "Yọ ìbéèrè èyíkéyìí tí ó béèrè orúkọ, ìsọfúnni ìlera tàbí ipò ìwé ìrìnnà (immigration) kúrò, àyàfi tí ẹ bá nílò rẹ̀ gan-an tí ẹ sì ní ọ̀nà tí kò léwu láti pa á mọ́. Sọ fún àwọn ènìyàn pé ìwádìí náà jẹ́ àtinúwá, kò sì ní nípa lórí iṣẹ́ tí wọ́n ń gbà. Irinṣẹ́ ọ̀fẹ́ bí Google Forms tàbí Microsoft Forms lè gba àwọn ìdáhùn."
          ],
          steps: ["Béèrè lọ́wọ́ AI fún ìwádìí kúkúrú tí kò ní orúkọ, tí ó ń wọ̀n outcome rẹ.", "Tún ìbéèrè èyíkéyìí tí ń darí ìdáhùn kọ.", "Yọ ìbéèrè nípa orúkọ tàbí ìsọfúnni ẹlẹgẹ́ tí ẹ kò nílò kúrò.", "Fi àkíyèsí kún un pé ìwádìí náà jẹ́ àtinúwá.", "Ṣe é nínú irinṣẹ́ fọ́ọ̀mù ọ̀fẹ́."],
          words: [["Ìwádìí (survey)", "àwọn ìbéèrè láti mọ ohun tí àwọn ènìyàn rò tàbí ohun tí wọ́n rí."], ["Láìní orúkọ (anonymous)", "kò sí orúkọ tàbí ìsọfúnni tí ó lè fi ẹni tí ó dáhùn hàn."], ["Ìbéèrè tí ń darí ìdáhùn", "ìbéèrè tí ó ń tì àwọn ènìyàn sí ìdáhùn kan, bí \"Báwo ni ètò wa tó dára yìí ti ràn ọ́ lọ́wọ́ tó?\""]],
          slides: [
            { title: "Jẹ́ kí ó kúrú", bullets: ["Ìbéèrè 5 sí 8", "Ọ̀rọ̀ tó rọrùn, ní èdè àwọn ènìyàn"] },
            { title: "Béèrè lọ́wọ́ AI", bullets: ["Láìní orúkọ, ìpele kíláàsì 6", "Ìbéèrè aláṣàyàn ni kí ó pọ̀ jù, ìbéèrè ṣíṣí kan", "Kò sí ìbéèrè tí ń darí ìdáhùn"] },
            { title: "Dáàbò bo àwọn ènìyàn", bullets: ["Kò sí orúkọ tàbí ìsọfúnni ẹlẹgẹ́ àyàfi tí ó pọndandan", "Àtinúwá ni: kò ní nípa lórí iṣẹ́ tí wọ́n ń gbà"] }
          ],
          tryIt: "Kọ àkọ́pẹrẹ ìwádìí ìbéèrè 6 tí kò ní orúkọ fún ètò rẹ pẹ̀lú AI. Wá ìbéèrè èyíkéyìí tí ń darí ìdáhùn kí o sì tún un kọ, kí o sì fi àkíyèsí àtinúwá kún un.",
          youCanNow: "kọ ìwádìí kúkúrú, tó tọ́, tí kò ní orúkọ fún àwọn olùkópa pẹ̀lú ìrànlọ́wọ́ AI.",
          quickCheck: [
            { objective: "O4", q: "Irú ìbéèrè wo ni ó yẹ kí ó pọ̀ jù nínú ìwádìí náà?", options: ["Ìbéèrè àròkọ gígùn", "Ìbéèrè nípa orúkọ àti àdírẹ́sì", "Ìbéèrè aláṣàyàn ni kí ó pọ̀ jù, pẹ̀lú ìbéèrè ṣíṣí kan", "Bẹ́ẹ̀ni tàbí bẹ́ẹ̀kọ́ nípa àwọn òṣìṣẹ́ nìkan"], answer: 2, why: "Prompt náà béèrè fún ìbéèrè aláṣàyàn ní pàtàkì àti ìbéèrè ṣíṣí kan." },
            { objective: "O4", q: "Ìwádìí tí AI kọ béèrè àìsàn tí olùkópa kọ̀ọ̀kan ní. Kí ni o máa ṣe?", options: ["Pa á mọ́ láti rí ìsọfúnni púpọ̀ sí i", "Sọ ọ́ di dandan", "Béèrè orúkọ wọn pẹ̀lú", "Yọ ọ́ kúrò àyàfi tí ẹ bá nílò rẹ̀ gan-an tí ẹ sì lè pa á mọ́ láìléwu"], answer: 3, why: "Yọ ìbéèrè nípa ìlera tàbí ìwé ìrìnnà kúrò àyàfi tí ó bá pọndandan gan-an tí a sì pa á mọ́ láìléwu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ṣíṣe àkópọ̀ èsì láìfi ẹnikẹ́ni hàn",
          minutes: 5,
          goal: "Ṣe àkópọ̀ èsì ìwádìí tí kò ní orúkọ pẹ̀lú AI, kí o sì ṣàyẹ̀wò àwọn nọ́mbà fúnra rẹ.",
          text: [
            "Kí o tó lo AI lórí èsì, rí i dájú pé ìsọfúnni náà kò ní orúkọ, ọ̀nà ìbánisọ̀rọ̀ tàbí ohunkóhun míì tí ó lè fi ẹnì kan hàn. Tí a bá lè dá ẹgbẹ́ kékeré kan mọ̀ (fún àpẹẹrẹ, àwọn àgbàlagbà mẹ́ta péré tí ń sọ èdè Spanish), pa wọ́n pọ̀ mọ́ àwọn míì tàbí fi àwọn ìsọfúnni yẹn sílẹ̀.",
            "Irinṣẹ́ fọ́ọ̀mù tàbí spreadsheet rẹ lè ka àwọn ìdáhùn fún ọ. Lẹ́yìn náà, o lè lẹ iye náà, kì í ṣe ìdáhùn àdáni bí ènìyàn ṣe kọ ọ́, sínú AI: \"Iye ìdáhùn ìwádìí nìyí: [iye]. Ṣe àkópọ̀ àwọn ohun pàtàkì tí a rí ní kókó 4, kí o sì dábàá àwòrán àtẹ (chart) kan.\"",
            "Ṣàyẹ̀wò gbogbo percent fúnra rẹ nínú spreadsheet. AI sábà máa ń ṣàṣìṣe nínú ìṣirò. Fún àwọn ìdáhùn ṣíṣí, kọ́kọ́ kà wọ́n fúnra rẹ, kí o sì yọ ohunkóhun tí ó lè fi ènìyàn hàn kúrò kí o tó ní kí AI pín wọn sí àwọn kókó-ọ̀rọ̀."
          ],
          steps: ["Yọ orúkọ àti ìsọfúnni tí ó lè fi ènìyàn hàn kúrò.", "Ka àwọn ìdáhùn nínú irinṣẹ́ fọ́ọ̀mù tàbí spreadsheet rẹ.", "Lẹ iye náà sínú AI, kì í ṣe ìdáhùn àdáni bí ènìyàn ṣe kọ ọ́.", "Béèrè fún àkópọ̀ kúkúrú àti èrò fún chart kan.", "Ṣàyẹ̀wò gbogbo percent fúnra rẹ."],
          words: [["Ìsọfúnni (data)", "ohun tí ẹ gbà jọ, bí ìdáhùn ìwádìí."], ["Kókó-ọ̀rọ̀ (theme)", "èrò kan tí ó ń padà wá léraléra nínú àwọn ìdáhùn ṣíṣí."], ["Percent", "ìdá kan nínú 100, bí ènìyàn 60 nínú 100 jẹ́ 60 percent."]],
          slides: [
            { title: "Kọ́kọ́ dáàbò bo àwọn ènìyàn", bullets: ["Kò sí orúkọ tàbí ọ̀nà ìbánisọ̀rọ̀", "A lè dá ẹgbẹ́ kékeré mọ̀: pa wọ́n pọ̀ mọ́ àwọn míì"] },
            { title: "Ka á, lẹ́yìn náà ṣe àkópọ̀", bullets: ["Jẹ́ kí spreadsheet ṣe ìkà náà", "Fún AI ní iye, kì í ṣe ìdáhùn àdáni bí ènìyàn ṣe kọ ọ́"] },
            { title: "Ṣàyẹ̀wò ìṣirò náà", bullets: ["AI máa ń ṣàṣìṣe nínú ìṣirò", "Ṣàyẹ̀wò gbogbo percent fúnra rẹ"] }
          ],
          tryIt: "Lo iye àṣeṣe (fún àpẹẹrẹ, ènìyàn 30 nínú 40 sọ pé àwọn kò dààmú mọ́ tó bẹ́ẹ̀ nípa oúnjẹ). Béèrè lọ́wọ́ AI fún àkópọ̀ kókó 4, lẹ́yìn náà ṣàyẹ̀wò percent kọ̀ọ̀kan pẹ̀lú ẹ̀rọ ìṣirò.",
          youCanNow: "ṣe àkópọ̀ èsì tí kò ní orúkọ pẹ̀lú AI, kí o sì ṣàyẹ̀wò àwọn nọ́mbà.",
          quickCheck: [
            { objective: "O5", q: "Kí ni o máa ṣe pẹ̀lú àwọn ìdáhùn ṣíṣí kí o tó ní kí AI wá àwọn kókó-ọ̀rọ̀?", options: ["Kà wọ́n fúnra rẹ kí o sì yọ ohunkóhun tí ó lè fi ènìyàn hàn kúrò", "Lẹ gbogbo wọn sínú rẹ̀ bí wọ́n ṣe rí", "Pa wọ́n rẹ́", "Fi wọ́n ránṣẹ́ sí olùfowópamọ́"], answer: 0, why: "Kọ́kọ́ ka àwọn ìdáhùn ṣíṣí, kí o sì yọ ohunkóhun tí ó lè fi ènìyàn hàn kúrò." },
            { objective: "O5", q: "Ọkùnrin méjì péré tí ó ju ọmọ ọdún 70 lọ ló kópa, nítorí náà a lè dá wọn mọ̀. Kí ni o máa ṣe?", options: ["Ròyìn wọn lọ́tọ̀ pẹ̀lú orúkọ wọn", "Pa wọ́n pọ̀ mọ́ àwọn míì tàbí fi àwọn ìsọfúnni yẹn sílẹ̀", "Ní kí AI ṣe àméfò ẹni tí wọ́n jẹ́", "Gbé ìdáhùn wọn sórí íńtánẹ́ẹ̀tì"], answer: 1, why: "Tí a bá lè dá ẹgbẹ́ kékeré kan mọ̀, pa wọ́n pọ̀ mọ́ àwọn míì tàbí fi àwọn ìsọfúnni yẹn sílẹ̀." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kíkọ ìròyìn ipa ojú-ìwé kan",
          minutes: 5,
          goal: "Sọ logic model àti èsì rẹ di ìròyìn ipa ojú-ìwé kan tó jẹ́ òótọ́.",
          text: [
            "Ìròyìn ipa ń sọ fún ìgbìmọ̀, àwọn olùfowópamọ́ àti àwùjọ rẹ ohun tí ètò yín ṣe àti ohun tí ó yí padà. Ojú-ìwé kan tó: àìní náà, ohun tí ẹ ṣe (output), ohun tí ó yí padà (outcome pẹ̀lú nọ́mbà), ìtàn kan, àti ohun tí ẹ kọ́.",
            "Béèrè lọ́wọ́ AI pé: \"Lo ìsọfúnni yìí nìkan láti kọ ìròyìn ipa ojú-ìwé kan pẹ̀lú àwọn àkọlé wọ̀nyí: Àìní náà, Ohun tí a ṣe, Ohun tí ó yí padà, Ìtàn kan, Ohun tí a kọ́. [logic model rẹ, àwọn ìwọ̀n, èsì tí o ti ṣàyẹ̀wò, ìtàn tí a sọ pẹ̀lú àṣẹ].\"",
            "Fi ẹ̀kọ́ òótọ́ kan tí ẹ kọ́ kún un. Àwọn olùfowópamọ́ ń gbẹ́kẹ̀lé àwọn àjọ tí ó ń sọ ohun tí kò ṣiṣẹ́ àti bí wọ́n ṣe máa ṣe dára sí i. Má ṣe jẹ́ kí AI fi nọ́mbà tàbí ọ̀rọ̀ tí kò sí nínú ìsọfúnni rẹ kún un láéláé."
          ],
          steps: ["Kó logic model rẹ, àwọn ìwọ̀n, èsì tí o ti ṣàyẹ̀wò àti ìtàn tí a fún ọ ní àṣẹ láti sọ jọ.", "Béèrè lọ́wọ́ AI fún ìròyìn ojú-ìwé kan pẹ̀lú àkọlé márùn-ún, ní lílo ìsọfúnni rẹ nìkan.", "Ṣàyẹ̀wò gbogbo nọ́mbà pẹ̀lú spreadsheet rẹ.", "Fi ẹ̀kọ́ òótọ́ kan tí ẹ kọ́ kún un.", "Ní kí alábàáṣiṣẹ́ kan kà á."],
          words: [["Ìròyìn ipa (impact report)", "ìròyìn kúkúrú nípa ohun tí ètò kan ṣe àti ohun tí ó yí padà."], ["Ẹ̀kọ́ tí a kọ́", "ohun kan tí ẹ ṣàwárí tí yóò ràn yín lọ́wọ́ láti ṣe dára sí i nígbà míì."]],
          slides: [
            { title: "Ojú-ìwé kan, apá márùn-ún", bullets: ["Àìní náà", "Ohun tí a ṣe àti ohun tí ó yí padà", "Ìtàn kan", "Ohun tí a kọ́"] },
            { title: "Béèrè lọ́wọ́ AI", bullets: ["\"Lo ìsọfúnni yìí nìkan...\"", "Àkọlé márùn-ún"] },
            { title: "Dúró lórí òótọ́", bullets: ["Gbogbo nọ́mbà wá láti inú ìsọfúnni rẹ", "Fi ẹ̀kọ́ tí ẹ kọ́ kún un", "Alábàáṣiṣẹ́ kan kà á"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ìròyìn ipa ojú-ìwé kan rẹ pẹ̀lú logic model, ìwọ̀n méjì, ìwádìí rẹ, àkópọ̀ èsì tí kò ní orúkọ, ìtàn kan tí a sọ pẹ̀lú àṣẹ àti ẹ̀kọ́ òótọ́ kan tí ẹ kọ́.",
          youCanNow: "ṣètò, wọ̀n, kí o sì ròyìn ipa ètò kan pẹ̀lú ìrànlọ́wọ́ AI.",
          quickCheck: [
            { objective: "O6", q: "Àkọlé wo ló wà nínú ìròyìn ipa ojú-ìwé kan ti ẹ̀kọ́ yìí?", options: ["Ọ̀rọ̀ aṣínà àwọn olùfowópamọ́", "Owó oṣù òṣìṣẹ́", "Ohun tí a kọ́", "Àdírẹ́sì àwọn olùkópa"], answer: 2, why: "Àwọn àkọlé ni àìní náà, ohun tí a ṣe, ohun tí ó yí padà, ìtàn kan àti ohun tí a kọ́." },
            { objective: "O6", q: "Ìròyìn tí AI kọ fi \"90% àwọn ẹbí rí iṣẹ́\" kún un, èyí tí kò sí nínú ìsọfúnni rẹ. Kí ni o máa ṣe?", options: ["Pa á mọ́; ó dún dáadáa", "Yí i padà sí 80%", "Gbé e lọ sí àkíyèsí ìsàlẹ̀", "Yọ ọ́ kúrò, nítorí AI kò gbọ́dọ̀ fi ọ̀rọ̀ tí kò sí nínú ìsọfúnni rẹ kún un"], answer: 3, why: "Má ṣe jẹ́ kí AI fi nọ́mbà tàbí ọ̀rọ̀ tí kò sí nínú ìsọfúnni rẹ kún un láéláé." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Gbígba ìsọfúnni, ṣíṣe àkópọ̀ àti ríròyìn",
        questions: [
          { objective: "O4", q: "Èwo ni ìbéèrè tí ń darí ìdáhùn?", options: ["\"Ìgbà mélòó ni o dààmú nípa oúnjẹ ní oṣù tó kọjá?\"", "\"Báwo ni ètò wa tó dára gan-an yìí ti ràn ọ́ lọ́wọ́ tó?\"", "\"Ọjọ́ wo ni o máa ń wá?\"", "\"Báwo ni o ṣe gbọ́ nípa wa?\""], answer: 1, why: "Ó ń tì àwọn ènìyàn sí ìdáhùn rere." },
          { objective: "O4", q: "Kí ni o yẹ kí o sọ fún àwọn ènìyàn nípa ìwádìí rẹ?", options: ["Ó jẹ́ dandan kí wọ́n tó gba iṣẹ́", "Kò sí nǹkan kan", "Ó jẹ́ àtinúwá, kò sì ní nípa lórí iṣẹ́ tí wọ́n ń gbà", "A máa gbé ìdáhùn wọn jáde"], answer: 2, why: "Ó yẹ kí ọkàn àwọn ènìyàn balẹ̀ láti dáhùn ní òtítọ́ tàbí láti má dáhùn rárá." },
          { objective: "O5", q: "Kí ni o yẹ kí o lẹ sínú AI láti ṣe àkópọ̀ èsì?", options: ["Ìdáhùn bí wọ́n ṣe rí pẹ̀lú orúkọ", "Nọ́mbà fóònù àwọn olùkópa", "Gbogbo àkọsílẹ̀ àwọn oníbàárà", "Iye láìsí ìsọfúnni tí ó lè fi ènìyàn hàn"], answer: 3, why: "Iye ń dáàbò bo ìsọfúnni àdáni." },
          { objective: "O5", q: "AI sọ pé 30 nínú 40 jẹ́ 80 percent. Kí ni o máa ṣe?", options: ["Ṣàyẹ̀wò rẹ̀ fúnra rẹ: 75 percent ni", "Lò ó", "Sọ ọ́ di 100", "Yọ gbogbo nọ́mbà kúrò"], answer: 0, why: "AI máa ń ṣàṣìṣe nínú ìṣirò; 30 nínú 40 jẹ́ 75 percent." },
          { objective: "O6", q: "Kí ló dé tí a fi ń fi ẹ̀kọ́ tí a kọ́ sínú ìròyìn ipa?", options: ["Láti kún àyè", "Àwọn olùfowópamọ́ ń gbẹ́kẹ̀lé àwọn àjọ olóòótọ́ tí ó ń ṣe dára sí i", "AI ló ní kí a ṣe bẹ́ẹ̀", "Láti fi èsì pamọ́"], answer: 1, why: "Sísọ òótọ́ nípa ohun tí kò ṣiṣẹ́ ń mú ìgbẹ́kẹ̀lé wá." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI fún Ṣíṣe Ètò àti Fífi Ipa Rẹ̀ Hàn",
    questions: [
      { objective: "O1", q: "Output jẹ́:", options: ["Ìyípadà nínú ayé àwọn ènìyàn", "Olùfowópamọ́ kan", "Iye ohun tí ètò rẹ ṣe", "Ìbéèrè ìwádìí kan"], answer: 2, why: "Output ń ka iṣẹ́ tí a ṣe." },
      { objective: "O1", q: "Outcome jẹ́:", options: ["Iye ìwé ìpolówó tí a tẹ̀", "Ìṣúná owó (budget)", "Àdírẹ́sì ọ́fíìsì", "Ìyípadà nínú ayé àwọn ènìyàn nítorí ètò rẹ"], answer: 3, why: "Outcome jẹ́ ìyípadà fún àwọn ènìyàn." },
      { objective: "O1", q: "Kí ló dé tí àwọn olùfowópamọ́ fi ń béèrè fún outcome?", options: ["Outcome ń fi hàn pé iṣẹ́ àjọ náà ń so èso", "Ó rọrùn láti kà", "Ó kúrú jù", "Àwọn olùfowópamọ́ kò fẹ́ràn nọ́mbà"], answer: 0, why: "Outcome ń fi ìyàtọ̀ gidi hàn." },
      { objective: "O2", q: "Èwo ni KÌ Í ṢE apá kan logic model?", options: ["Input", "Ọ̀rọ̀ aṣínà àwọn olùfowópamọ́", "Iṣẹ́ tí a ṣe", "Outcome"], answer: 1, why: "Logic model ní input, iṣẹ́ tí a ṣe, output àti outcome." },
      { objective: "O2", q: "Logic model gbọ́dọ̀ jẹ́:", options: ["Àkọsílẹ̀ ohun tí a ń fẹ́", "Àṣírí", "Ètò tí o lè gbèjà, tí ó jẹ́ òótọ́ sí ohun tí ẹ ń ṣe", "Èyí tí AI nìkan kọ"], answer: 2, why: "Ó gbọ́dọ̀ bá òótọ́ mu." },
      { objective: "O2", q: "Outcome kọ̀ọ̀kan nínú logic model gbọ́dọ̀ so mọ́:", options: ["Olùfowópamọ́ kan", "Àmì àjọ (logo)", "Ọjọ́ ìsinmi kan", "Iṣẹ́ kan tí a ṣe"], answer: 3, why: "Iṣẹ́ tí a ṣe ló ń mú outcome wá." },
      { objective: "O3", q: "Ìwọ̀n tó dára jẹ́:", options: ["Èyí tó rọrùn, tí a lè gbà, tí ó sì jẹ́ òótọ́", "Èyí tó díjú, tí ó sì wọ́n", "Èyí tí kò ṣeé gbà", "Èyí tí a hùmọ̀"], answer: 0, why: "Ẹgbẹ́ rẹ gbọ́dọ̀ lè gbà á." },
      { objective: "O3", q: "Wíwọ̀n ṣáájú àti lẹ́yìn ń ràn ọ́ lọ́wọ́ láti:", options: ["Yẹra fún ìwádìí", "Rí ìyípadà bí àkókò ti ń lọ", "Fo outcome", "Fi èsì pamọ́"], answer: 1, why: "Ìfiwéra ń fi ìyípadà hàn." },
      { objective: "O4", q: "Báwo ni ìwádìí fún àwọn olùkópa ṣe yẹ kí ó gùn tó?", options: ["Ìbéèrè 50", "Ọ̀rọ̀ kan ṣoṣo", "Nǹkan bí ìbéèrè 5 sí 8", "Kò ní òdiwọ̀n"], answer: 2, why: "Ìwádìí kúkúrú máa ń rí ìdáhùn púpọ̀ sí i." },
      { objective: "O4", q: "Ìwádìí tí kò ní orúkọ:", options: ["Ń béèrè orúkọ kíkún", "Wà fún òṣìṣẹ́ nìkan", "Kò ní ìbéèrè kankan", "Kò ní orúkọ tàbí ìsọfúnni tí ó fi ẹni tí ó dáhùn hàn"], answer: 3, why: "Àìní orúkọ ń dáàbò bo àwọn olùkópa." },
      { objective: "O4", q: "Ìbéèrè ìwádìí wo ni ó yẹ kí o yọ kúrò ní ọ̀pọ̀ ìgbà?", options: ["Ipò ìwé ìrìnnà (immigration), àyàfi tí ó bá pọndandan gan-an tí a sì pa á mọ́ láìléwu", "\"Ìgbà mélòó ni o wá?\"", "\"Ṣé ara rẹ balẹ̀ níbí?\"", "\"Kí ni a lè ṣe dára sí i?\""], answer: 0, why: "Ìsọfúnni ẹlẹgẹ́ lè fi àwọn ènìyàn sínú ewu." },
      { objective: "O4", q: "Àwọn irinṣẹ́ ọ̀fẹ́ wo ló lè gba ìdáhùn ìwádìí?", options: ["Ẹ̀rọ ìṣirò", "Google Forms tàbí Microsoft Forms", "Ẹ̀rọ ìtẹ̀wé", "Ẹ̀rọ ìgbaná fóònù"], answer: 1, why: "Irinṣẹ́ fọ́ọ̀mù ń gba ìdáhùn, ó sì ń kà wọ́n." },
      { objective: "O5", q: "A lè dá ẹgbẹ́ kékeré kan mọ̀ nínú èsì rẹ. Ó yẹ kí o:", options: ["Dárúkọ wọn", "Gbé wọn jáde fún gbogbo ènìyàn", "Pa wọ́n pọ̀ mọ́ àwọn míì tàbí fi àwọn ìsọfúnni yẹn sílẹ̀", "Má ka á sí"], answer: 2, why: "Ẹgbẹ́ kékeré lè fi àwọn ènìyàn hàn." },
      { objective: "O5", q: "Ta ló yẹ kí ó ka àwọn ìdáhùn ìwádìí?", options: ["AI tí ń ṣe àméfò", "Olùfowópamọ́ kan", "Kò sí ẹnikẹ́ni", "Irinṣẹ́ fọ́ọ̀mù tàbí spreadsheet rẹ"], answer: 3, why: "Spreadsheet ń kà láìṣàṣìṣe." },
      { objective: "O5", q: "AI máa ń ṣàṣìṣe nínú ìṣirò, nítorí náà ó yẹ kí o:", options: ["Ṣàyẹ̀wò gbogbo percent fúnra rẹ", "Gbẹ́kẹ̀lé e", "Yọ gbogbo nọ́mbà kúrò", "Béèrè lẹ́ẹ̀mejì kí o sì yan ọ̀kan"], answer: 0, why: "Ìwọ ló ni ojúṣe fún àwọn nọ́mbà náà." },
      { objective: "O5", q: "Kókó-ọ̀rọ̀ (theme) nínú àwọn ìdáhùn ṣíṣí jẹ́:", options: ["Àwọ̀ àwòrán", "Èrò kan tí ó ń padà wá léraléra", "Irú olùfowópamọ́ kan", "Orúkọ ètò kan"], answer: 1, why: "Kókó-ọ̀rọ̀ ń ṣe àkópọ̀ àwọn ìdáhùn ṣíṣí." },
      { objective: "O6", q: "Ìròyìn ipa yẹ kí ó jẹ́:", options: ["Ojú-ìwé 100", "Àwòrán nìkan", "Nǹkan bí ojú-ìwé kan pẹ̀lú àìní, ohun tí ẹ ṣe, ohun tí ó yí padà, ìtàn kan àti ẹ̀kọ́", "Ìṣúná owó nìkan"], answer: 2, why: "Ojú-ìwé kan tó yé tó." },
      { objective: "O6", q: "Prompt wo ló ń jẹ́ kí ìròyìn ipa jẹ́ òótọ́?", options: ["\"Mú àwọn nọ́mbà wa tóbi sí i.\"", "\"Hùmọ̀ ìtàn àṣeyọrí kan.\"", "\"Fi àwọn ìṣirò tó yani lẹ́nu kún un.\"", "\"Lo ìsọfúnni yìí nìkan láti kọ...\""], answer: 3, why: "Dídín AI mọ́ ìsọfúnni rẹ ń dènà ọ̀rọ̀ tí a hùmọ̀." },
      { objective: "O6", q: "Ìtàn kan nínú ìròyìn ipa nílò:", options: ["Àṣẹ ẹni náà", "Orúkọ kíkún àti àdírẹ́sì rẹ̀", "Gbajúmọ̀ ènìyàn kan", "Kò nílò nǹkan kan"], answer: 0, why: "Ìtàn nílò ìfọwọ́sí ẹni náà." },
      { objective: "O6", q: "Ta ló yẹ kí ó ka ìròyìn ipa kí ó tó jáde?", options: ["Kò sí ẹnikẹ́ni", "Alábàáṣiṣẹ́ kan", "AI nìkan", "Olùdíje kan"], answer: 1, why: "Ẹni kejì tí ó kà á máa ń rí àṣìṣe." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [0, 3, 6, 8, 12, 17]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Logic model", objective: "O2", notYet: "Ọwọ́n kan kò sí, tàbí ó kọ àwọn ohun tí ètò náà kò ṣe.", meets: "Input, iṣẹ́ tí a ṣe, output àti outcome, gbogbo rẹ̀ jẹ́ òótọ́ sí ètò náà.", exceeds: "Outcome kọ̀ọ̀kan so mọ́ iṣẹ́ kan tí a ṣe kedere." },
      { name: "Ìwọ̀n outcome", objective: "O3", notYet: "Àwọn ìwọ̀n náà jẹ́ output, tàbí a kò lè gbà wọ́n.", meets: "Ìwọ̀n outcome méjì tó rọrùn, tó jẹ́ òótọ́, tí ẹgbẹ́ náà lè gbà.", exceeds: "A béèrè méjèèjì ṣáájú àti lẹ́yìn láti fi ìyípadà hàn." },
      { name: "Ìwádìí tó tọ́", objective: "O4", notYet: "Ìbéèrè tí ń darí ìdáhùn wà, tàbí ó béèrè orúkọ tàbí ìsọfúnni ẹlẹgẹ́ láìnídìí.", meets: "Ìbéèrè 5 sí 8 tó rọrùn, tí kò ní orúkọ, tí ó sì jẹ́ àtinúwá.", exceeds: "A fi í sílẹ̀ ní àwọn èdè tí àwọn olùkópa ń sọ." },
      { name: "Èsì tí kò ní orúkọ, tí a ti ṣàyẹ̀wò", objective: "O5", notYet: "Èsì náà lè fi ẹnì kan hàn, tàbí percent kan kò tọ̀nà.", meets: "Àkópọ̀ láti inú iye láìsí ìsọfúnni tí ó lè fi ènìyàn hàn, a sì ti ṣàyẹ̀wò gbogbo percent.", exceeds: "A pín àwọn ìdáhùn ṣíṣí sí kókó-ọ̀rọ̀ lẹ́yìn tí a ti yọ ìsọfúnni tí ó lè fi ènìyàn hàn kúrò." },
      { name: "Ìròyìn ojú-ìwé kan tó jẹ́ òótọ́", objective: "O6", notYet: "Nọ́mbà tàbí ọ̀rọ̀ kan kò sí nínú ìsọfúnni náà, tàbí ìtàn náà kò ní àṣẹ.", meets: "Ojú-ìwé kan pẹ̀lú àìní, output, outcome, ìtàn tí a ní àṣẹ láti sọ àti ẹ̀kọ́ kan tí a kọ́.", exceeds: "Alábàáṣiṣẹ́ kan ti kà á, ẹ̀kọ́ tí a kọ́ sì sọ bí ètò náà ṣe máa dára sí i." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn ètò tí ó gba ìsọfúnni outcome ṣáájú àti lẹ́yìn láàárín ọjọ́ 90 (ìwádìí àtẹ̀lé)",
      "Àwọn ìròyìn ipa tí a fi hàn ìgbìmọ̀ tàbí olùfowópamọ́ láàárín ọjọ́ 90",
      "Ìtúnṣe ẹ̀bùn owó (grant) tàbí owó tuntun tí àwọn àjọ so mọ́ ìròyìn ipa wọn"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì àti spreadsheet ọ̀fẹ́",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́ àti Google Forms tàbí Microsoft Forms",
      "Àpèjúwe ètò kan tí gbogbo ènìyàn lè rí, àti ìsọfúnni àṣeṣe tí kò ní orúkọ tí ìsọfúnni gidi kò bá tíì ṣetán",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Pèsè ìsọfúnni àṣeṣe tí kò ní orúkọ kí àwọn akẹ́kọ̀ọ́ lè gbìyànjú ṣíṣe àkópọ̀ láìléwu.",
      "Ẹ ṣe ìtòlẹ́sẹẹsẹ output àti outcome gẹ́gẹ́ bí eré ẹgbẹ́ kí ẹ tó ṣe ìdánwò àkọ́kọ́.",
      "Ní kí àwọn akẹ́kọ̀ọ́ jọ ṣàyẹ̀wò percent tí AI ṣírò nínú spreadsheet, kí wọ́n lè rí bí ó ṣe máa ń nílò àtúnṣe tó.",
      "Rán àwọn akẹ́kọ̀ọ́ létí pé ìwádìí gbọ́dọ̀ jẹ́ àtinúwá, kò sì gbọ́dọ̀ nípa lórí iṣẹ́ tí ẹnikẹ́ni ń gbà.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};

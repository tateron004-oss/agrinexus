"use strict";

// Koach Learn course (Yoruba translation of shared/insurance-license-prep.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const SRC = {
  naicDepts: { name: "NAIC: Wá ẹ̀ka ìbánigbófò ti ìpínlẹ̀ rẹ", url: "https://content.naic.org/state-insurance-departments" },
  nipr: { name: "NIPR: National Insurance Producer Registry (béèrè fún ìwé àṣẹ aṣojú, kí o sì tún un ṣe)", url: "https://nipr.com/" },
  tdiAgent: { name: "Ẹ̀ka Ìbánigbófò Texas (Texas Department of Insurance): Ìwé àṣẹ aṣojú", url: "https://www.tdi.texas.gov/agent/index.html" },
  tdiLifeApply: { name: "Ẹ̀ka Ìbánigbófò Texas: Bí a ṣe ń béèrè fún ìwé àṣẹ general lines life, accident, health àti HMO", url: "https://www.tdi.texas.gov/agent/general-life-apply.html" },
  usc1033: { name: "18 U.S.C. 1033 (Cornell Legal Information Institute)", url: "https://www.law.cornell.edu/uscode/text/18/1033" },
  naicUtpa: { name: "NAIC Model Law 880: Òfin Àwọn Ìwà Ìṣòwò Tí Kò Tọ́ (Unfair Trade Practices Act)", url: "https://content.naic.org/sites/default/files/model-law-880.pdf" }
};

module.exports = {
  id: "insurance-license-prep-yo",
  lang: "yo",
  translationOf: "insurance-license-prep",
  category: "Workforce Development",
  name: "Ìmúrasílẹ̀ fún Ìdánwò Ìwé Àṣẹ Aṣojú Ìbánigbófò",
  skills: "Yíyan ìlà ìwé àṣẹ, Wíwá ìgbésẹ̀ ìwé àṣẹ ìpínlẹ̀ rẹ, Ṣíṣàlàyé àwọn ọ̀rọ̀ ìbánigbófò, Ṣíṣírò claim àṣeṣe, Dídá ìwà títà tí kò tọ́ mọ̀, Ṣíṣètò fún ìdánwò",
  outcome: "múra sílẹ̀ fún ìdánwò ìwé àṣẹ aṣojú ìbánigbófò ti ìpínlẹ̀ rẹ: yan ìlà ìwé àṣẹ tó tọ́, wá àwọn ìgbésẹ̀ ìjọba àti àkọsílẹ̀ àkóónú ìdánwò ìpínlẹ̀ rẹ, ṣàlàyé àwọn ọ̀rọ̀ pàtàkì, ṣírò claim àṣeṣe, dá ìwà títà tí kò tọ́ mọ̀, kí o sì tẹ̀lé ètò ìkẹ́kọ̀ọ́ àti ìdánwò tí ó ní ọjọ́.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbàlagbà tí wọ́n fẹ́ ta ìbánigbófò (insurance) gẹ́gẹ́ bí aṣojú tí ó ní ìwé àṣẹ, tí a tún ń pè ní producer: àwọn tí ń wá iṣẹ́, àwọn tí ń yí iṣẹ́ padà, àwọn tí ń padà sílé láti ẹ̀wọ̀n, àwọn ọmọ ogun tẹ́lẹ̀ àti àwọn tí ó fẹ́ ṣí ilé-iṣẹ́ aṣojú tiwọn. Ìpínlẹ̀ kọ̀ọ̀kan ní US ló ń fún aṣojú ìbánigbófò ní ìwé àṣẹ, kì í ṣe ìjọba àpapọ̀ (federal).",
    "O máa kọ́ àwọn ìlà ìwé àṣẹ pàtàkì, bí o ṣe lè wá ìgbésẹ̀ àti àkọsílẹ̀ àkóónú ìdánwò ti ìpínlẹ̀ rẹ, àwọn ọ̀rọ̀ àti èrò pàtàkì tí ìdánwò ń béèrè, bí a ṣe ń ṣírò claim àṣeṣe pẹ̀lú deductible àti ìwọ̀n ààlà, àti àwọn òfin ìwà rere tí ó ń dáàbò bo àwọn oníbàárà. Ní ìparí, o máa kọ ètò ìkẹ́kọ̀ọ́ àti ìdánwò tìrẹ pẹ̀lú ọjọ́ gidi.",
    "Ẹ̀kọ́ yìí ń MÚRA rẹ sílẹ̀ fún ìdánwò. Kò fún ọ ní ìwé àṣẹ, kò sì rọ́pò ẹ̀kọ́ ṣáájú ìwé àṣẹ (prelicensing) tí ìpínlẹ̀ rẹ lè béèrè. Ẹ̀ka ìbánigbófò ìpínlẹ̀ rẹ ló ń ṣe òfin, owó àti ìlànà ìdánwò, wọ́n sì ń yí padà, nítorí náà ẹ̀kọ́ kọ̀ọ̀kan ń tọ́ ọ sí ojú-ewé ìjọba. Kò sí ohunkóhun níbí tí ó jẹ́ ìmọ̀ràn lórí ríra ìbánigbófò tàbí ìdókòwò."
  ],
  finalTask: "Kọ Ètò Ìkẹ́kọ̀ọ́ àti Ìdánwò Ìwé Àṣẹ Ìbánigbófò ojú-ewé kan fún ìpínlẹ̀ rẹ: (1) ìlà ìwé àṣẹ tí o máa gbà àti ìdí rẹ̀; (2) àwọn ìgbésẹ̀ ìjọba ìpínlẹ̀ rẹ ní ìtẹ̀léra (ẹ̀kọ́ ṣáájú ìwé àṣẹ tí ó bá pọndandan, ìdánwò àti ilé-iṣẹ́ ìdánwò, ìka ọwọ́ tàbí àyẹ̀wò ìtàn, ìwé ìbéèrè, appointment), ọ̀kọ̀ọ̀kan pẹ̀lú àdírẹ́sì wẹ́ẹ̀bù ìjọba rẹ̀; (3) àwọn kókó àti ìwọ̀n wọn láti inú àkọsílẹ̀ àkóónú ìdánwò ìpínlẹ̀ rẹ; (4) ètò ìkẹ́kọ̀ọ́ ọ̀sẹ̀ kọ̀ọ̀kan pẹ̀lú ọjọ́, ọjọ́ ìdánwò tí o fojú sí, àti ó kéré tán ọjọ́ ìdánwò àṣeṣe méjì pẹ̀lú àmì tí o fẹ́ gbà; (5) claim àṣeṣe mẹ́ta tí o ṣírò tọ̀nà àti òfin ìwà rere mẹ́ta ní ọ̀rọ̀ ara rẹ.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà ní US tí wọ́n fẹ́ iṣẹ́ aṣojú ìbánigbófò (producer) ní ibùdó ìpè (call center), báńkì, ilé-iṣẹ́ aṣojú tàbí ilé-iṣẹ́ ìbánigbófò, tàbí tí wọ́n fẹ́ ṣí ilé-iṣẹ́ aṣojú tiwọn. Àwùjọ àdàlù ni: àwọn tí ń wá iṣẹ́, àwọn tí ń yí iṣẹ́ padà, àwọn ọmọ ogun tẹ́lẹ̀, àwọn tí ń padà sílé láti ẹ̀wọ̀n, àwọn aṣíkiri àti àwọn oníṣòwò kékeré.",
    startingPoint: "Wọ́n ti ra ìbánigbófò ọkọ̀, ti ilé tí wọ́n ń yá (renters) tàbí ti ìlera rí, ṣùgbọ́n wọn kì í sábà ka ìwé àdéhùn (policy). Wọn kò mọ bí ìwé àṣẹ ṣe ń ṣiṣẹ́, ìwé àṣẹ wo ni kí wọ́n gbà, tàbí àwọn ọ̀rọ̀ tí ìdánwò ń lò. Wọ́n lè ṣe ìṣirò ìdá-ọgọ́rùn-ún (percent) tó rọrùn pẹ̀lú ìrànlọ́wọ́ díẹ̀.",
    gap: "Ọ̀pọ̀ ènìyàn ń sanwó fún ẹ̀kọ́ ṣáájú ìwé àṣẹ tàbí ìdánwò láìmọ ìwé àṣẹ tí ó bá iṣẹ́ náà mu, ohun tí ìpínlẹ̀ wọn ń béèrè, tàbí bí a ṣe kọ́ ìdánwò náà, wọ́n sì ń kùnà tàbí jáwọ́. Mímọ ọ̀nà náà, àwọn ọ̀rọ̀ pàtàkì, ìṣirò claim àti àwọn òfin ìwà rere ń yí ìlànà tí ó dàrú padà sí ètò tí ó ní ọjọ́, ó sì ń ṣamọ̀nà sí iṣẹ́ tí kì í sábà béèrè oyè yunifásítì.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú (nǹkan bí kíláàsì 8); a ṣàlàyé gbogbo ọ̀rọ̀ ìdánwò",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà ilé-ìkàwé; ìwé, gègé àti ẹ̀rọ ìṣirò lásán tó fún gbogbo iṣẹ́",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 4 sí 6",
      "Ìpínlẹ̀ ló ń fúnni ní ìwé àṣẹ: àwọn ìgbésẹ̀, wákàtí ẹ̀kọ́ ṣáájú ìwé àṣẹ, owó, ilé-iṣẹ́ ìdánwò àti àmì ìyege yàtọ̀ síra, nítorí náà akẹ́kọ̀ọ́ ń ṣàyẹ̀wò ojú-ewé ìjọba ìpínlẹ̀ tirẹ̀",
      "Àyẹ̀wò ìtàn: àwọn akẹ́kọ̀ọ́ kan ní àkọsílẹ̀ ẹ̀ṣẹ̀; ẹ̀kọ́ náà ṣàlàyé òfin náà ní òtítọ́, ó sì rán wọn sí ẹ̀ka ìpínlẹ̀ wọn",
      "Kò sí ìmọ̀ràn lórí ìbánigbófò tàbí ìdókòwò tí ẹnikẹ́ni yẹ kí ó rà; iṣẹ́ àṣeṣe ń lo nọ́mbà àhùsọ"
    ],
    prerequisites: "Kò sí. Àwọn akẹ́kọ̀ọ́ tí ó fẹ́ ìrànlọ́wọ́ pẹ̀lú ìṣirò ìdá-ọgọ́rùn-ún lè kọ́kọ́ ṣe \"Ìṣirò Ojoojúmọ́\" (Everyday Math)."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní iṣẹ́ ìbánigbófò tàbí ọjà ìbánigbófò kan", action: "dá ìlà ìwé àṣẹ àti ipa iṣẹ́ tí ó bá a mu mọ̀", standard: "kí o sì gba ó kéré tán 5 nínú àpẹẹrẹ 6 tọ̀nà" },
    { id: "O2", condition: "Fún ìpínlẹ̀ tìrẹ", action: "wá àwọn ìgbésẹ̀ ìwé àṣẹ ìjọba, ilé-iṣẹ́ ìdánwò àti àkọsílẹ̀ àkóónú ìdánwò", standard: "kí o sì kọ ìgbésẹ̀ kọ̀ọ̀kan sílẹ̀ pẹ̀lú àdírẹ́sì wẹ́ẹ̀bù ìjọba rẹ̀" },
    { id: "O3", condition: "Tí a bá fún ọ ní àkọsílẹ̀ àwọn ọ̀rọ̀ àti èrò ìdánwò", action: "ṣàlàyé àwọn ọ̀rọ̀ ìbánigbófò pàtàkì àti àwọn ìlànà àdéhùn ní ọ̀rọ̀ tó rọrùn", standard: "pẹ̀lú ìtumọ̀ tó tọ́ fún ó kéré tán 8 nínú 10" },
    { id: "O4", condition: "Tí a bá fún ọ ní claim àṣeṣe tí ó ní deductible, coinsurance tàbí ìwọ̀n ààlà policy", action: "ṣírò iye tí ilé-iṣẹ́ ìbánigbófò máa san àti iye tí ẹni tí a bánigbófò máa san", standard: "tí ó tọ̀nà dé dọ́là kan lórí claim àṣeṣe 3" },
    { id: "O5", condition: "Tí a bá fún ọ ní ipò títà tàbí iṣẹ́ ìránṣẹ́ kan", action: "dá ìwà tí kò tọ́ tàbí tí ó lòdì sí òfin mọ̀, kí o sì yan ìgbésẹ̀ òtítọ́", standard: "kí o sì gba ó kéré tán 4 nínú ipò 5 tọ̀nà" },
    { id: "O6", condition: "Ní lílo àwọn ìgbésẹ̀ ìjọba àti àkọsílẹ̀ àkóónú ìdánwò ìpínlẹ̀ rẹ", action: "kọ ètò ìkẹ́kọ̀ọ́ àti ìdánwò tí ó ní ọjọ́ fún ìdánwò ìwé àṣẹ rẹ", standard: "tí ó bo gbogbo ìgbésẹ̀ ìjọba, gbogbo kókó inú àkọsílẹ̀ àti ó kéré tán ọjọ́ ìdánwò àṣeṣe méjì" }
  ],
  chapters: [
    {
      name: "Orí 1: Ọ̀nà rẹ sí ìwé àṣẹ ìbánigbófò",
      lessons: [
        {
          title: "Ohun tí aṣojú ń ṣe àti ìlà ìwé àṣẹ tí o nílò",
          objectives: ["O1"],
          minutes: 5,
          goal: "Yan ìlà ìwé àṣẹ tí ó bá iṣẹ́ ìbánigbófò tí o fẹ́ mu.",
          text: [
            "Aṣojú ìbánigbófò, tí òfin ń pè ní producer, ń ta ìbánigbófò, ń wá oníbàárà, tàbí ń ṣe ìdúnàádúrà rẹ̀ fún wọn. Gbogbo ìpínlẹ̀ ló ń béèrè ìwé àṣẹ fún èyí. Aṣojú captive ń tà fún ilé-iṣẹ́ kan ṣoṣo. Aṣojú independent ń tà fún ilé-iṣẹ́ púpọ̀, ó sì sábà máa ń ní òwò kékeré tirẹ̀. Ilé-iṣẹ́ ìbánigbófò kọ̀ọ̀kan tí aṣojú ń tà fún gbọ́dọ̀ tún yàn án (appointment).",
            "Àwọn ìpínlẹ̀ ń fúnni ní ìwé àṣẹ ní ìlà-ìlà (line of authority). Àwọn ìlà pàtàkì mẹ́rin tí ó wọ́pọ̀ jù ni Life (ẹ̀mí), Accident and Health (jàǹbá àti ìlera, tàbí àìsàn), Property (dúkìá) àti Casualty. Ọ̀pọ̀ ènìyàn ń bẹ̀rẹ̀ pẹ̀lú Life àti Health pọ̀, tàbí Property àti Casualty pọ̀. Àwọn ìpínlẹ̀ kan tún ní ìwé àṣẹ Personal Lines tí ó kéré, fún ìbánigbófò ilé àti ọkọ̀ nìkan.",
            "Life ń bo ikú àti àwọn policy ìfipamọ́ owó ìgbà pípẹ́ kan. Accident and Health ń bo owó ìtọ́jú, owó-oṣù nígbà àìlèṣiṣẹ́ (disability income) àti irú ìnáwó bẹ́ẹ̀. Property ń bo ìbàjẹ́ sí nǹkan tí o ní, bí ilé tàbí ọkọ̀. Casualty ń bo liability, ìyẹn owó tí o jẹ́ tí o bá ṣe ẹnìkan léṣe tàbí bà nǹkan rẹ̀ jẹ́.",
            "Àwọn iṣẹ́ ìbánigbófò míì ń lo ìwé àṣẹ mìíràn. Adjuster ń ṣèwádìí claim, ó sì ń yanjú rẹ̀. Títa àwọn ọjà tí ó dà bí ìdókòwò, bí variable annuities, tún nílò ìwé àṣẹ securities. Ṣàyẹ̀wò àkọsílẹ̀ irú ìwé àṣẹ ti ìpínlẹ̀ rẹ kí o tó sanwó fún ẹ̀kọ́ èyíkéyìí."
          ],
          words: [["Producer", "ọ̀rọ̀ òfin fún aṣojú tàbí alágbàtà ìbánigbófò tí ó ní ìwé àṣẹ láti ta ìbánigbófò."], ["Ìlà ìwé àṣẹ (line of authority)", "irú ìbánigbófò tí ìwé àṣẹ rẹ gbà ọ́ láàyè láti tà, bí Life tàbí Property."], ["Appointment", "ìfọwọ́sí ilé-iṣẹ́ ìbánigbófò pé o lè ta àwọn ọjà rẹ̀."], ["Liability", "owó tí òfin sọ pé o jẹ́ ẹnìkan tí o bá ṣe é léṣe tàbí bà dúkìá rẹ̀ jẹ́."], ["Adjuster", "ẹni tí ó ń ṣèwádìí claim ìbánigbófò tí ó sì ń yanjú rẹ̀; ó sábà máa ń jẹ́ ìwé àṣẹ ọ̀tọ̀."]],
          slides: [
            { title: "Àwọn aṣojú ni producer", bullets: ["Wọ́n ń ta, wá oníbàárà tàbí ṣe ìdúnàádúrà ìbánigbófò", "Gbogbo ìpínlẹ̀ ló ń béèrè ìwé àṣẹ", "Ilé-iṣẹ́ kọ̀ọ̀kan tí o ń tà fún gbọ́dọ̀ yàn ọ́ (appointment)"] },
            { title: "Captive tàbí independent", bullets: ["Captive: ń tà fún ilé-iṣẹ́ kan ṣoṣo", "Independent: ń tà fún ilé-iṣẹ́ púpọ̀, ó sábà máa ń ní òwò tirẹ̀"] },
            { title: "Àwọn ìlà pàtàkì mẹ́rin", bullets: ["Life: ń sanwó nígbà tí ẹnìkan bá kú", "Accident and Health: owó ìtọ́jú, àìlèṣiṣẹ́", "Property: ìbàjẹ́ sí nǹkan rẹ", "Casualty: liability nígbà tí o bá ṣe àwọn ẹlòmíì léṣe"] },
            { title: "Ṣàyẹ̀wò kí o tó sanwó", bullets: ["Adjuster nílò ìwé àṣẹ mìíràn", "Àwọn ọjà variable tún nílò ìwé àṣẹ securities", "Kọ́kọ́ wá àkọsílẹ̀ irú ìwé àṣẹ ìpínlẹ̀ rẹ"] }
          ],
          tryIt: "Kọ iṣẹ́ ìbánigbófò mẹ́ta tí o lè béèrè fún sílẹ̀ (fún àpẹẹrẹ aṣojú ibùdó ìpè tí ń ta ìbánigbófò ọkọ̀, òṣìṣẹ́ báńkì tí ń ta ìbánigbófò ẹ̀mí, tàbí ilé-iṣẹ́ aṣojú tìrẹ). Lẹ́gbẹ̀ẹ́ ọ̀kọ̀ọ̀kan, kọ ìlà tàbí àwọn ìlà ìwé àṣẹ tí ó nílò.",
          youCanNow: "sọ ohun tí producer ìbánigbófò ń ṣe, kí o sì yan ìlà ìwé àṣẹ tí ó bá iṣẹ́ kan mu.",
          quickCheck: [
            { objective: "O1", q: "Ìpolówó iṣẹ́ kan sọ pé o máa ta ìbánigbófò ọkọ̀ àti ti ilé. Àwọn ìlà ìwé àṣẹ wo ló bá a mu?", options: ["Life àti Health", "Property àti Casualty", "Securities nìkan", "Adjuster nìkan"], answer: 1, why: "Policy ọkọ̀ àti ilé ń bo ìbàjẹ́ dúkìá àti liability sí àwọn ẹlòmíì, ìyẹn Property àti Casualty." },
            { objective: "O1", q: "Kí ni aṣojú captive?", options: ["Aṣojú tí ń tà fún ilé-iṣẹ́ ìbánigbófò kan ṣoṣo", "Aṣojú tí kò ní ìwé àṣẹ", "Aṣojú tí ń yanjú claim nìkan", "Aṣojú tí ń ṣiṣẹ́ fún ìpínlẹ̀"], answer: 0, why: "Aṣojú captive ń ṣojú ilé-iṣẹ́ kan; aṣojú independent ń ṣojú ọ̀pọ̀." }
          ]
        },
        {
          title: "Wíwá àwọn ìgbésẹ̀ ìwé àṣẹ ìjọba ìpínlẹ̀ rẹ",
          objectives: ["O2"],
          minutes: 6,
          goal: "Wá àwọn ìgbésẹ̀ ìwé àṣẹ, ilé-iṣẹ́ ìdánwò àti àkọsílẹ̀ ìdánwò ìpínlẹ̀ rẹ lórí ojú-ewé ìjọba.",
          text: [
            "Ẹ̀ka ìbánigbófò ìpínlẹ̀ rẹ ló ń ṣe àwọn òfin. Láti wá a, lo ojú-ewé NAIC (National Association of Insurance Commissioners, àjọ àwọn alákòóso ìbánigbófò ìpínlẹ̀) tí ó ní link sí ẹ̀ka gbogbo ìpínlẹ̀. Wá àwọn ojú-ewé tí orúkọ wọn jẹ́ producer licensing, agent licensing tàbí how to apply.",
            "Ọ̀pọ̀ ìpínlẹ̀ ń tẹ̀lé ọ̀nà kan náà: ẹ̀kọ́ ṣáájú ìwé àṣẹ (ọ̀pọ̀ ìpínlẹ̀ ló ń béèrè rẹ̀, kì í ṣe gbogbo wọn), ìdánwò ìpínlẹ̀ tí ilé-iṣẹ́ ìdánwò ń ṣe, ìka ọwọ́ tàbí àyẹ̀wò ìtàn, ìwé ìbéèrè, lẹ́yìn náà appointment láti ọ̀dọ̀ ilé-iṣẹ́ ìbánigbófò. Lẹ́yìn tí o bá gba ìwé àṣẹ, o máa ń tún un ṣe, o sì máa ń ṣe ẹ̀kọ́ títẹ̀síwájú. Fún àpẹẹrẹ, nígbà tí a ṣàyẹ̀wò ní October 2026, Texas ń ṣe ìdánwò rẹ̀ nípasẹ̀ Pearson VUE, ó ń béèrè ìka ọwọ́, ó sì ń gba ìwé ìbéèrè nípasẹ̀ Sircon tàbí NIPR lẹ́yìn tí o bá yege ìdánwò nìkan.",
            "Ilé-iṣẹ́ ìdánwò ń tẹ ìwé ìtọ́sọ́nà olùdánwò (candidate handbook) àti àkọsílẹ̀ àkóónú ìdánwò (content outline) jáde fún ìpínlẹ̀ rẹ. Àkọsílẹ̀ náà ń ṣe àkójọ gbogbo kókó àti iye ìbéèrè tí ó ń wá láti ọ̀kọ̀ọ̀kan. Òun ni irinṣẹ́ ìkẹ́kọ̀ọ́ tó wúlò jù tí o ní, ó sì jẹ́ ọ̀fẹ́.",
            "Tí o bá ní àkọsílẹ̀ ẹ̀ṣẹ̀, sọ òtítọ́ lórí ìwé ìbéèrè. Òfin àpapọ̀ kan (18 U.S.C. 1033) sọ pé ẹni tí wọ́n dá lẹ́bi ẹ̀ṣẹ̀ ńlá (felony) tí ó ní ìwà àìṣòótọ́ tàbí ìwà ìdàlẹ̀ nínú nílò ìyọ̀ǹda ìkọ̀wé láti ọ̀dọ̀ alákòóso ìbánigbófò kí ó tó ṣiṣẹ́ nínú ìbánigbófò. Ẹ̀ka ìpínlẹ̀ rẹ ń ṣàlàyé bí o ṣe lè béèrè. Má ṣe jẹ́ kí ẹni tí ń ta ẹ̀kọ́ sọ fún ọ pé kò jẹ́ nǹkan kan."
          ],
          steps: ["Ṣí ojú-ewé àwọn ẹ̀ka ìbánigbófò ìpínlẹ̀ ti NAIC kí o sì yan ìpínlẹ̀ rẹ.", "Wá ojú-ewé ìwé àṣẹ producer tàbí aṣojú àti àkọsílẹ̀ irú ìwé àṣẹ.", "Kọ ìgbésẹ̀ kọ̀ọ̀kan sílẹ̀: ẹ̀kọ́ ṣáájú ìwé àṣẹ, ìdánwò, ìka ọwọ́, ìwé ìbéèrè, appointment.", "Wá orúkọ ilé-iṣẹ́ ìdánwò kí o sì gba candidate handbook àti content outline ọ̀fẹ́ wálẹ̀.", "Kọ àdírẹ́sì wẹ́ẹ̀bù ìjọba fún ìgbésẹ̀ kọ̀ọ̀kan àti ọjọ́ tí o ṣàyẹ̀wò rẹ̀ sílẹ̀."],
          words: [["NAIC", "National Association of Insurance Commissioners: àjọ àwọn alákòóso ìbánigbófò ìpínlẹ̀."], ["Ẹ̀kọ́ ṣáájú ìwé àṣẹ (prelicensing education)", "ẹ̀kọ́ tí àwọn ìpínlẹ̀ kan ń béèrè kí o tó lè ṣe ìdánwò ìwé àṣẹ."], ["Àkọsílẹ̀ àkóónú (content outline)", "àkọsílẹ̀ àwọn kókó ìdánwò àti iye ìbéèrè tí ó ń wá láti ọ̀kọ̀ọ̀kan."], ["NIPR", "National Insurance Producer Registry: ojú-òpó wẹ́ẹ̀bù tí ọ̀pọ̀ ìpínlẹ̀ ń lò fún ìwé ìbéèrè àti àtúnṣe ìwé àṣẹ."], ["Ẹ̀kọ́ títẹ̀síwájú (continuing education)", "àwọn kíláàsì tí aṣojú tí ó ní ìwé àṣẹ gbọ́dọ̀ ṣe láti tún ìwé àṣẹ wọn ṣe."]],
          slides: [
            { title: "Bẹ̀rẹ̀ láti orísun ìjọba", bullets: ["Ẹ̀ka ìbánigbófò ìpínlẹ̀ rẹ ló ń ṣe òfin", "Wá a láti ojú-ewé ẹ̀ka ìpínlẹ̀ ti NAIC", "Wá producer licensing tàbí agent licensing"] },
            { title: "Ọ̀nà tí ó wọ́pọ̀", bullets: ["Ẹ̀kọ́ ṣáájú ìwé àṣẹ (ọ̀pọ̀ ìpínlẹ̀)", "Ìdánwò ìpínlẹ̀ pẹ̀lú ilé-iṣẹ́ ìdánwò", "Ìka ọwọ́ tàbí àyẹ̀wò ìtàn", "Ìwé ìbéèrè, lẹ́yìn náà appointment láti ọ̀dọ̀ ilé-iṣẹ́"] },
            { title: "Gba àkọsílẹ̀ ọ̀fẹ́ náà", bullets: ["Ilé-iṣẹ́ ìdánwò ń tẹ candidate handbook jáde", "Content outline ń ṣe àkójọ kókó àti iye ìbéèrè", "Kẹ́kọ̀ọ́ gẹ́gẹ́ bí àkọsílẹ̀ náà ṣe sọ"] },
            { title: "Àkọsílẹ̀ ẹ̀ṣẹ̀ kì í ṣe òpin", bullets: ["Sọ òtítọ́ lórí ìwé ìbéèrè", "Àwọn felony kan nílò ìyọ̀ǹda ìkọ̀wé alákòóso", "Béèrè lọ́wọ́ ẹ̀ka ìpínlẹ̀ rẹ bí o ṣe lè ṣe é"] }
          ],
          sources: [SRC.naicDepts, SRC.nipr, SRC.tdiAgent, SRC.tdiLifeApply, SRC.usc1033],
          tryIt: "Ṣí ojú-ewé NAIC, yan ìpínlẹ̀ rẹ kí o sì wá ojú-ewé ìwé àṣẹ producer rẹ̀. Kọ ìgbésẹ̀ ìwé àṣẹ kọ̀ọ̀kan ní ìtẹ̀léra, orúkọ ilé-iṣẹ́ ìdánwò, àti àdírẹ́sì wẹ́ẹ̀bù content outline ìdánwò náà.",
          youCanNow: "wá àwọn ìgbésẹ̀ ìwé àṣẹ ìjọba, ilé-iṣẹ́ ìdánwò àti content outline ìdánwò ìpínlẹ̀ rẹ.",
          quickCheck: [
            { objective: "O2", q: "Níbo ni o ti máa rí àwọn ìgbésẹ̀ ìwé àṣẹ gidi fún ìpínlẹ̀ rẹ?", options: ["Ọ̀rọ̀ kan lórí ìkànnì àjọlò (social media)", "Ìpolówó ẹ̀kọ́ ṣáájú ìwé àṣẹ", "Ojú-ewé ìjọba ẹ̀ka ìbánigbófò ìpínlẹ̀ rẹ", "Ọ̀rẹ́ kan tí ó ní ìwé àṣẹ ní ìpínlẹ̀ mìíràn"], answer: 2, why: "Ẹ̀ka ìbánigbófò ìpínlẹ̀ kọ̀ọ̀kan ló ń ṣe òfin ìwé àṣẹ tirẹ̀, tí ó sì ń tẹ̀ ẹ́ jáde." },
            { objective: "O2", q: "Ìwé ọ̀fẹ́ wo ló ń sọ fún ọ àwọn kókó tí ó wà nínú ìdánwò ìpínlẹ̀ rẹ?", options: ["Bílì ìbánigbófò ọkọ̀", "Declarations page ti policy kan", "Ìwé ìpolówó olùgbaniṣíṣẹ́", "Content outline ìdánwò ti ilé-iṣẹ́ ìdánwò"], answer: 3, why: "Content outline ń ṣe àkójọ gbogbo kókó ìdánwò àti iye ìbéèrè tí ó ń wá láti ọ̀kọ̀ọ̀kan." }
          ]
        },
        {
          title: "Àwọn ọ̀rọ̀ pàtàkì àti bí àdéhùn ìbánigbófò ṣe ń ṣiṣẹ́",
          objectives: ["O3"],
          minutes: 6,
          goal: "Ṣàlàyé àwọn ọ̀rọ̀ ìbánigbófò pàtàkì àti èrò àdéhùn ní ọ̀rọ̀ ara rẹ.",
          text: [
            "Ìbánigbófò ń gbé ewu kúrò lọ́wọ́ ènìyàn lọ sọ́dọ̀ ilé-iṣẹ́ ìbánigbófò. Ẹni tí a bánigbófò (insured) ń san premium. Ní pàṣípààrọ̀, ilé-iṣẹ́ ìbánigbófò (insurer) ṣèlérí láti sanwó fún àwọn àdánù kan. Policy ni àdéhùn tí a kọ sílẹ̀, declarations page sì ń ṣe àkójọ ẹni àti ohun tí a bò, àwọn ìwọ̀n ààlà àti premium.",
            "Àwọn ìdánwò ń béèrè nípa èrò ńlá díẹ̀. Insurable interest: o gbọ́dọ̀ pàdánù owó tí àdánù náà bá ṣẹlẹ̀. Indemnity: ìbánigbófò ń dá ọ padà sí ibi tí o wà tẹ́lẹ̀, kì í ṣe kí o dára ju bẹ́ẹ̀ lọ. Utmost good faith: ẹgbẹ́ méjèèjì gbọ́dọ̀ jẹ́ olóòótọ́, nítorí náà irọ́ lórí ìwé ìbéèrè (misrepresentation) lè sọ ààbò di asán. Underwriting: ilé-iṣẹ́ ìbánigbófò ń ṣàyẹ̀wò ewu náà, ó sì ń pinnu bóyá yóò gbà á àti ní iye wo.",
            "Àdéhùn ni policy ìbánigbófò, nítorí náà ó nílò ìfilọ̀ àti ìgbàwọlé (offer and acceptance), consideration (premium àti ìlérí), àwọn ẹgbẹ́ tí ó lẹ́tọ̀ọ́ (competent parties) àti èrò tí ó bá òfin mu. Ó tún jẹ́ contract of adhesion: ilé-iṣẹ́ ìbánigbófò ló kọ ọ́, oníbàárà sì gbà á bí ó ti rí, nítorí náà ọ̀rọ̀ tí kò yé ni a sábà máa ń túmọ̀ ní ojú rere oníbàárà.",
            "Kọ́ àwọn ọ̀rọ̀ wọ̀nyí pẹ̀lú flash card. Ìdánwò sábà máa ń sọ ìtàn kúkúrú, ó sì máa ń béèrè èrò wo ni ó ń fi hàn."
          ],
          words: [["Premium", "owó tí ẹni tí a bánigbófò ń san fún ààbò."], ["Insurable interest", "pé o máa pàdánù owó gidi tí ìṣẹ̀lẹ̀ tí a bánigbófò bá ṣẹlẹ̀."], ["Indemnity", "sísan àdánù padà kí o lè wà níbi tí o wà tẹ́lẹ̀, kì í ṣe kí o dára ju bẹ́ẹ̀ lọ."], ["Underwriting", "ṣíṣàyẹ̀wò ewu láti pinnu bóyá a máa bánigbófò rẹ̀ àti ní iye wo."], ["Declarations page", "ojú-ewé policy tí ó ń ṣe àkójọ ẹni tí a bò, ohun tí a bò, àwọn ìwọ̀n ààlà àti premium."], ["Contract of adhesion", "àdéhùn tí ẹgbẹ́ kan kọ, tí ẹgbẹ́ kejì sì gbà bí ó ti rí."]],
          slides: [
            { title: "Ìbánigbófò ń gbé ewu", bullets: ["Ẹni tí a bánigbófò ń san premium", "Ilé-iṣẹ́ ìbánigbófò ṣèlérí láti san àdánù tí a bò", "Policy ni àdéhùn náà"] },
            { title: "Èrò ńlá lórí ìdánwò", bullets: ["Insurable interest: o máa pàdánù owó", "Indemnity: padà sí ibi tí o wà tẹ́lẹ̀", "Utmost good faith: ẹgbẹ́ méjèèjì jẹ́ olóòótọ́", "Underwriting: pípinnu bóyá àti ní iye wo"] },
            { title: "Àdéhùn ni policy", bullets: ["Offer and acceptance, consideration", "Àwọn ẹgbẹ́ tí ó lẹ́tọ̀ọ́, èrò tí ó bá òfin mu", "Adhesion: ọ̀rọ̀ tí kò yé ń ṣe oníbàárà lóore"] }
          ],
          tryIt: "Ṣe flash card 10 lórí ìwé tàbí fóònù: ẹ̀gbẹ́ kan ni ọ̀rọ̀ náà (premium, insurable interest, indemnity, underwriting, declarations page, consideration, adhesion, misrepresentation, insured, insurer), ẹ̀gbẹ́ kejì ni ìtumọ̀ ìlà kan ní ọ̀rọ̀ ara rẹ. Dán ara rẹ wò títí o fi gba 8 nínú 10.",
          youCanNow: "ṣàlàyé àwọn ọ̀rọ̀ ìbánigbófò pàtàkì àti àwọn apá àdéhùn ìbánigbófò ní ọ̀rọ̀ tó rọrùn.",
          quickCheck: [
            { objective: "O3", q: "Ọkùnrin kan fẹ́ ra ìbánigbófò iná fún ilé àjèjì kan. Èrò wo ló dá a dúró?", options: ["Indemnity", "Underwriting", "Consideration", "Insurable interest"], answer: 3, why: "Kò ní pàdánù owó kankan tí ilé àjèjì náà bá jóná, nítorí náà kò ní insurable interest." },
            { objective: "O3", q: "Lẹ́yìn olè jíjà tí a bò, ilé-iṣẹ́ ìbánigbófò san iye TV tí wọ́n jí, kì í ṣe TV tí ó tóbi jù. Èrò wo nìyí?", options: ["Indemnity", "Adhesion", "Appointment", "Liability"], answer: 0, why: "Indemnity ń dá ẹni tí a bánigbófò padà sí ibi tí ó wà tẹ́lẹ̀, kì í ṣe kí ó dára ju bẹ́ẹ̀ lọ." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ọ̀nà rẹ sí ìwé àṣẹ ìbánigbófò",
        questions: [
          { objective: "O1", q: "O máa ta policy term life àti ìbánigbófò owó-oṣù àìlèṣiṣẹ́ (disability income). Àwọn ìlà wo ló bá a mu?", options: ["Property àti Casualty", "Life àti Accident and Health", "Personal Lines nìkan", "Adjuster"], answer: 1, why: "Policy ẹ̀mí nílò ìlà Life, disability income sì jẹ́ Accident and Health." },
          { objective: "O1", q: "Kí ni appointment ilé-iṣẹ́ ìbánigbófò ń ṣe?", options: ["Ó rọ́pò ìdánwò ìpínlẹ̀", "Ó fúnni ní ìwé àṣẹ securities", "Ó fọwọ́ sí i ní ìjọba pé o lè ta àwọn ọjà ilé-iṣẹ́ náà", "Ó ń pinnu owó ìwé àṣẹ ìpínlẹ̀ rẹ"], answer: 2, why: "Ìpínlẹ̀ ló ń fúnni ní ìwé àṣẹ; lẹ́yìn náà ilé-iṣẹ́ ìbánigbófò kọ̀ọ̀kan ń yàn ọ́ láti tà fún un." },
          { objective: "O2", q: "Ta ló ń fún àwọn aṣojú ìbánigbófò ní ìwé àṣẹ ní US?", options: ["Ẹ̀ka ìbánigbófò ìpínlẹ̀ kọ̀ọ̀kan", "Ìjọba àpapọ̀ (federal)", "Ilé-iṣẹ́ ìbánigbófò tí o ń ṣiṣẹ́ fún", "Ilé-iṣẹ́ ìdánwò"], answer: 0, why: "Ìpínlẹ̀ kọ̀ọ̀kan ló ń fún producer ìbánigbófò ní ìwé àṣẹ." },
          { objective: "O2", q: "Wọ́n ti dá ọ lẹ́bi felony jìbìtì rí. Kí ni ìgbésẹ̀ àkọ́kọ́ tí ó jẹ́ òtítọ́?", options: ["Fi í sílẹ̀ kúrò lórí ìwé ìbéèrè", "Jáwọ́ nínú iṣẹ́ ìbánigbófò", "Lo orúkọ ọ̀rẹ́ kan", "Béèrè lọ́wọ́ ẹ̀ka ìpínlẹ̀ rẹ bí o ṣe lè béèrè ìyọ̀ǹda ìkọ̀wé alákòóso"], answer: 3, why: "Òfin àpapọ̀ ń béèrè ìyọ̀ǹda ìkọ̀wé fún àwọn ẹ̀ṣẹ̀ kan, ẹ̀ka ìpínlẹ̀ sì ń ṣàlàyé bí a ṣe ń béèrè." },
          { objective: "O3", q: "Lórí ìwé ìbéèrè, olùrà kan fi àìsàn ńlá kan pamọ́. Ìlànà wo ló rú?", options: ["Indemnity", "Insurable interest", "Utmost good faith", "Adhesion"], answer: 2, why: "Ẹgbẹ́ méjèèjì gbọ́dọ̀ jẹ́ olóòótọ́; irọ́ pàtàkì lè sọ ààbò di asán." }
        ]
      }
    },
    {
      name: "Orí 2: Àkóónú ìdánwò àti ìmúrasílẹ̀ fún ìdánwò",
      lessons: [
        {
          title: "Ìpìlẹ̀ Life àti Health àti ìṣirò claim ìlera",
          objectives: ["O3", "O4"],
          minutes: 6,
          goal: "Ṣírò ẹni tí ó máa san kí ni lórí claim ìlera àṣeṣe tí ó ní deductible àti coinsurance.",
          text: [
            "Ìbánigbófò ẹ̀mí: term life ń bo iye ọdún kan pàtó, kò sì ní cash value. Permanent life, bí whole life, lè wà fún gbogbo ayé, ó sì ń kó cash value jọ. Beneficiary ni ẹni tí ó ń gba owó ikú (death benefit); contingent beneficiary ń gbà á tí ẹni àkọ́kọ́ bá ti kú. Policyowner ló ń darí policy, ó sì lè jẹ́ ẹlòmíì yàtọ̀ sí ẹni tí a bánigbófò.",
            "Ìbánigbófò ìlera ní àwọn ọ̀rọ̀ tirẹ̀. Deductible ni ohun tí o ń san lọ́dún kọ̀ọ̀kan kí ètò náà tó bẹ̀rẹ̀ sí í pín ìnáwó. Coinsurance ni ìdá-ọgọ́rùn-ún tí ẹ ń pín lẹ́yìn náà, bí 80/20: ètò náà san 80%, ìwọ sì san 20%. Copay ni iye dọ́là kan pàtó fún ìbẹ̀wò kọ̀ọ̀kan. Out-of-pocket maximum ni iye tó pọ̀ jù tí o máa san lọ́dún kan fún ìtọ́jú tí a bò.",
            "Àṣeṣe nìkan, nọ́mbà àhùsọ: bílì $3,000 tí a bò, deductible $1,000 tí o kò tíì san tán, coinsurance 80/20. O san $1,000 àkọ́kọ́. A pín $2,000 tí ó kù: ètò náà san 80% ($1,600), ìwọ sì san 20% ($400). O san $1,400 lápapọ̀; ètò náà san $1,600. Ṣàyẹ̀wò: $1,400 + $1,600 = $3,000."
          ],
          steps: ["Kọ iye bílì tí a bò.", "Yọ apá deductible tí a kò tíì san kúrò; ẹni tí a bánigbófò ló ń san apá yẹn.", "Pín èyí tí ó kù gẹ́gẹ́ bí ìdá-ọgọ́rùn-ún coinsurance.", "Ro deductible àti coinsurance ẹni tí a bánigbófò pọ̀; dúró ní out-of-pocket maximum.", "Ṣàyẹ̀wò pé ìpín méjèèjì papọ̀ jẹ́ iye bílì náà."],
          words: [["Beneficiary", "ẹni tí ó ń gba owó nígbà tí ẹni tí a bánigbófò bá kú."], ["Cash value", "owó ìfipamọ́ tí ó ń kó jọ nínú policy ẹ̀mí permanent."], ["Deductible", "iye tí o ń san kí ìbánigbófò tó bẹ̀rẹ̀ sí í sanwó."], ["Coinsurance", "ìdá-ọgọ́rùn-ún ìnáwó tí o ń pín pẹ̀lú ètò náà lẹ́yìn deductible."], ["Out-of-pocket maximum", "iye tó pọ̀ jù tí o ń san ní ọdún ètò kan fún ìtọ́jú tí a bò."]],
          slides: [
            { title: "Àwọn ọ̀rọ̀ ìbánigbófò ẹ̀mí", bullets: ["Term: ọdún pàtó, kò sí cash value", "Whole life: fún gbogbo ayé, ń kó cash value jọ", "Beneficiary àti contingent beneficiary"] },
            { title: "Àwọn ọ̀rọ̀ ìbánigbófò ìlera", bullets: ["Deductible: ìwọ ló ń kọ́kọ́ san", "Coinsurance: ìdá-ọgọ́rùn-ún tí a pín, bí 80/20", "Copay: iye pàtó fún ìbẹ̀wò kọ̀ọ̀kan", "Out-of-pocket maximum: ààlà ọdọọdún"] },
            { title: "Claim àṣeṣe (nọ́mbà àhùsọ)", bullets: ["Bílì $3,000, deductible $1,000, 80/20", "Ìwọ: $1,000 + 20% ti $2,000 = $1,400", "Ètò náà: 80% ti $2,000 = $1,600"] }
          ],
          tryIt: "Àṣeṣe nìkan: ṣírò claim yìí lórí ìwé. Bílì $5,000 tí a bò, deductible $500 tí a kò tíì san tán, coinsurance 80/20. Èló ni ẹni tí a bánigbófò máa san, èló sì ni ètò náà máa san? (Ìdáhùn: ẹni tí a bánigbófò $500 + $900 = $1,400; ètò náà $3,600.)",
          youCanNow: "ṣàlàyé àwọn ọ̀rọ̀ pàtàkì ìbánigbófò ẹ̀mí àti ìlera, kí o sì ṣírò claim ìlera tí ó ní deductible àti coinsurance.",
          quickCheck: [
            { objective: "O4", q: "Àṣeṣe nìkan: bílì $2,000 tí a bò, deductible $500 tí a kò tíì san tán, coinsurance 80/20. Kí ni ẹni tí a bánigbófò máa san?", options: ["$400", "$500", "$800", "$1,500"], answer: 2, why: "Deductible $500 pẹ̀lú 20% ti $1,500 tí ó kù ($300) jẹ́ $800." },
            { objective: "O3", q: "Policy ìbánigbófò ẹ̀mí wo ló ń kó cash value jọ?", options: ["Whole life", "Term ọdún mẹ́wàá", "Term ọdún ogún", "Ìbánigbófò jàǹbá ìrìn-àjò"], answer: 0, why: "Àwọn policy permanent bí whole life ń kó cash value jọ; àwọn policy term kì í ṣe bẹ́ẹ̀." }
          ]
        },
        {
          title: "Ìpìlẹ̀ Property àti Casualty àti ìṣirò claim dúkìá",
          objectives: ["O1", "O4"],
          minutes: 6,
          goal: "Ṣírò ohun tí policy dúkìá tàbí liability ọkọ̀ máa san lórí claim àṣeṣe.",
          text: [
            "Àwọn policy dúkìá ń sanwó fún ìbàjẹ́ sí nǹkan tí o ní. Replacement cost ń sanwó láti fi nǹkan tuntun irú kan náà rọ́pò rẹ̀. Actual cash value ń san replacement cost yọ depreciation kúrò (ìdínkù iye nítorí ìlò àti ọjọ́ orí). Àṣeṣe nìkan: àga ìjókòó (sofa) kan jẹ́ $1,200 ní tuntun, depreciation rẹ̀ sì jẹ́ $500, nítorí náà actual cash value rẹ̀ jẹ́ $700. A máa ń yọ deductible kúrò lára ìsanwó.",
            "Ààbò Casualty (liability) ń san àwọn ẹlòmíì nígbà tí òfin bá sọ pé ìwọ lo jẹ̀bi pé o ṣe wọ́n léṣe. A sábà máa ń kọ ìwọ̀n ààlà liability ọkọ̀ ní nọ́mbà mẹ́ta, bí 25/50/25: títí dé $25,000 fún ọgbẹ́ ẹnìkan, títí dé $50,000 fún gbogbo ọgbẹ́ nínú jàǹbá kan, àti títí dé $25,000 fún ìbàjẹ́ dúkìá. Ìpínlẹ̀ rẹ ló ń pinnu iye tó kéré jù; ṣàyẹ̀wò rẹ̀.",
            "Àṣeṣe nìkan: awakọ̀ kan tí ìwọ̀n ààlà rẹ̀ jẹ́ 25/50/25 ṣe ẹnìkan léṣe, bílì ẹni náà sì jẹ́ $40,000. Policy náà san $25,000, ìwọ̀n ààlà ẹnìkọ̀ọ̀kan rẹ̀. Awakọ̀ náà lè ní láti san $15,000 tí ó kù fúnra rẹ̀. Ìdí nìyẹn tí àwọn aṣojú fi ń ṣàlàyé ìwọ̀n ààlà dáadáa."
          ],
          steps: ["Wá iye àdánù náà àti irú ààbò.", "Fún actual cash value, yọ depreciation kúrò lára replacement cost.", "Yọ deductible kúrò.", "Fi wé ìwọ̀n ààlà policy; ilé-iṣẹ́ ìbánigbófò kì í san ju ààlà náà lọ láéláé.", "Ohunkóhun tí ó bá ju ààlà náà lọ, ẹni tí a bánigbófò ló máa san án."],
          words: [["Replacement cost", "iye owó láti fi nǹkan tuntun irú kan náà àti dídára kan náà rọ́pò ohun kan."], ["Actual cash value", "replacement cost yọ depreciation kúrò."], ["Depreciation", "ìdínkù iye nítorí ọjọ́ orí àti ìlò."], ["Ìwọ̀n ààlà policy (policy limit)", "iye tó pọ̀ jù tí ilé-iṣẹ́ ìbánigbófò máa san fún àdánù tí a bò."], ["Split limits", "ìwọ̀n ààlà liability ọkọ̀ tí a kọ ní nọ́mbà mẹ́ta, bí 25/50/25."]],
          slides: [
            { title: "Property: ọ̀nà méjì láti sanwó", bullets: ["Replacement cost: nǹkan tuntun irú kan náà", "Actual cash value: replacement cost yọ depreciation", "A máa ń yọ deductible kúrò lára ìsanwó"] },
            { title: "Casualty: liability sí àwọn ẹlòmíì", bullets: ["Ń sanwó nígbà tí o bá ṣe àwọn ẹlòmíì léṣe lábẹ́ òfin", "Ààlà ọkọ̀ bí 25/50/25", "Ìpínlẹ̀ rẹ ló ń pinnu iye tó kéré jù"] },
            { title: "Claim àṣeṣe (nọ́mbà àhùsọ)", bullets: ["25/50/25, ẹnìkan farapa, bílì $40,000", "Policy san ààlà ẹnìkọ̀ọ̀kan $25,000", "Awakọ̀ náà lè jẹ $15,000 tí ó kù"] }
          ],
          tryIt: "Àṣeṣe nìkan: iná ilé ìdáná kan fa ìbàjẹ́ $18,000 tí a bò. Policy ilé náà ń san replacement cost, deductible jẹ́ $1,000, ààlà ilé (dwelling limit) sì jẹ́ $250,000. Kọ ohun tí ilé-iṣẹ́ ìbánigbófò máa san àti ohun tí onílé máa san. (Ìdáhùn: ilé-iṣẹ́ ìbánigbófò $17,000; onílé $1,000.)",
          youCanNow: "ṣe ìyàtọ̀ láàárín ààbò property àti casualty, kí o sì ṣírò claim àṣeṣe pẹ̀lú depreciation, deductible àti ìwọ̀n ààlà.",
          quickCheck: [
            { objective: "O4", q: "Àṣeṣe nìkan: TV kan jẹ́ $900 ní tuntun, depreciation rẹ̀ sì jẹ́ $300. Kí ni actual cash value rẹ̀?", options: ["$300", "$900", "$1,200", "$600"], answer: 3, why: "Actual cash value jẹ́ replacement cost yọ depreciation: $900 - $300 = $600." },
            { objective: "O1", q: "Oníbàárà kan ṣèèṣì ṣe awakọ̀ tí ó mú ẹrù wá léṣe nílé, wọ́n sì pè é lẹ́jọ́. Irú ààbò wo ló máa dáhùn?", options: ["Life", "Casualty (liability)", "Disability income", "Ìbàjẹ́ dúkìá sí ilé náà"], answer: 1, why: "Ààbò liability ń san àwọn ẹlòmíì nígbà tí òfin bá sọ pé ẹni tí a bánigbófò ló jẹ̀bi pé ó ṣe wọ́n léṣe." }
          ]
        },
        {
          title: "Àwọn òfin ìwà rere àti ètò ìkẹ́kọ̀ọ́ àti ìdánwò rẹ",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Dá ìwà títà tí kò tọ́ mọ̀, kí o sì kọ ètò ìkẹ́kọ̀ọ́ àti ìdánwò tí ó ní ọjọ́.",
          text: [
            "Àwọn ìpínlẹ̀ ní òfin lórí ìwà ìṣòwò tí kò tọ́ (unfair trade practices), gbogbo ìdánwò sì ń béèrè nípa wọn. Misrepresentation ni pípa irọ́ tàbí fífi ohun tí policy ń ṣe pamọ́. Twisting ni fífi irọ́ tàbí àfiwé tí ń ṣini lọ́nà rọ oníbàárà láti fi policy mìíràn rọ́pò tirẹ̀, sí ìpalára rẹ̀. Churning ni rírọ́pò policy léraléra ní pàtàkì láti gba commission tuntun. Rebating ni fífún oníbàárà ní apá kan commission rẹ tàbí ẹ̀bùn kan láti rí títà gbà; ó lòdì sí òfin ní ọ̀pọ̀ ìpínlẹ̀, nítorí náà ṣàyẹ̀wò òfin ìpínlẹ̀ rẹ. Premium tí o gbà jẹ́ ti oníbàárà àti ilé-iṣẹ́ ìbánigbófò: aṣojú ń pa á mọ́ ní ìgbẹ́kẹ̀lé (fiduciary duty), kò sì gbọdọ̀ dà á pọ̀ mọ́ owó tirẹ̀ (commingling).",
            "Ìgbésẹ̀ òtítọ́ rọrùn: sọ òtítọ́ nípa ààbò, fi ohun tí oníbàárà nílò ṣáájú, fi àwọn policy wéra ní òdodo, kọ nǹkan sílẹ̀, kí o sì ya owó premium sọ́tọ̀. Tí kò bá dá ọ lójú, béèrè lọ́wọ́ ọ̀gá rẹ tàbí ẹ̀ka ìpínlẹ̀.",
            "Báyìí, ṣe ètò. Lo content outline ìpínlẹ̀ rẹ láti ṣe àkọsílẹ̀ kókó kọ̀ọ̀kan àti iye ìbéèrè rẹ̀. Fún àwọn kókó tí ó wúwo ní ọjọ́ ìkẹ́kọ̀ọ́ púpọ̀ sí i. Yan ọjọ́ ìdánwò tí o fojú sí, ọjọ́ ìdánwò àṣeṣe méjì tàbí jù bẹ́ẹ̀ lọ, àti àmì tí o fẹ́ gbà. Parí ẹ̀kọ́ ṣáájú ìwé àṣẹ tí ó bá pọndandan kí o tó ṣètò ìdánwò. Ka ìbéèrè ìdánwò kọ̀ọ̀kan lẹ́ẹ̀mejì, kí o sì ṣọ́ra fún ọ̀rọ̀ bí EXCEPT (àyàfi) àti NOT (kì í ṣe).",
            "Iṣẹ́ ìkẹyìn: kọ Ètò Ìkẹ́kọ̀ọ́ àti Ìdánwò ojú-ewé kan rẹ pẹ̀lú ìlà ìwé àṣẹ rẹ, àwọn ìgbésẹ̀ ìjọba ìpínlẹ̀ rẹ pẹ̀lú àdírẹ́sì wẹ́ẹ̀bù, àwọn kókó outline àti ìwọ̀n wọn, ètò ọ̀sẹ̀ kọ̀ọ̀kan tí ó ní ọjọ́, àwọn ọjọ́ ìdánwò àṣeṣe, claim àṣeṣe mẹ́ta àti òfin ìwà rere mẹ́ta."
          ],
          steps: ["Ṣe àkọsílẹ̀ àwọn ìgbésẹ̀ ìjọba ìpínlẹ̀ rẹ ní ìtẹ̀léra pẹ̀lú àdírẹ́sì wẹ́ẹ̀bù wọn.", "Dà kókó outline kọ̀ọ̀kan àti iye ìbéèrè rẹ̀ kọ.", "Fún àwọn kókó tí ó ní ìbéèrè jù ní ọjọ́ ìkẹ́kọ̀ọ́ púpọ̀ sí i.", "Yan ọjọ́ ìdánwò tí o fojú sí àti ó kéré tán ọjọ́ ìdánwò àṣeṣe méjì pẹ̀lú àmì tí o fẹ́ gbà.", "Fi claim àṣeṣe mẹ́ta àti òfin ìwà rere mẹ́ta kún un ní ọ̀rọ̀ ara rẹ."],
          words: [["Misrepresentation", "pípa irọ́ tàbí fífi ohun tí policy ń ṣe tàbí iye rẹ̀ pamọ́."], ["Twisting", "lílo irọ́ tàbí àfiwé tí ń ṣini lọ́nà láti mú oníbàárà rọ́pò policy rẹ̀."], ["Churning", "rírọ́pò policy léraléra ní pàtàkì láti gba commission."], ["Rebating", "fífún oníbàárà ní apá kan commission tàbí ẹ̀bùn láti rí títà gbà; ó lòdì sí òfin ní ọ̀pọ̀ ìpínlẹ̀."], ["Fiduciary", "ẹni tí a gbẹ́kẹ̀ lé láti mójú tó owó ẹlòmíì ní òtítọ́."], ["Commingling", "dída owó premium oníbàárà pọ̀ mọ́ owó tìrẹ."]],
          slides: [
            { title: "Àwọn ìwà tí ìdánwò ń béèrè", bullets: ["Misrepresentation: pípa irọ́ nípa policy", "Twisting: ṣíṣi oníbàárà lọ́nà láti rọ́pò policy", "Churning: rírọ́pò láti gba commission", "Rebating: lòdì sí òfin ní ọ̀pọ̀ ìpínlẹ̀, ṣàyẹ̀wò tìrẹ"] },
            { title: "Owó premium", bullets: ["O ń pa á mọ́ ní ìgbẹ́kẹ̀lé: fiduciary duty", "Má ṣe dà á pọ̀ mọ́ owó tìrẹ láéláé"] },
            { title: "Kọ́ ètò rẹ", bullets: ["Àwọn ìgbésẹ̀ àti àdírẹ́sì wẹ́ẹ̀bù láti ìpínlẹ̀ rẹ", "Kókó outline àti ìwọ̀n wọn", "Ètò ọ̀sẹ̀ tí ó ní ọjọ́ àti ìdánwò àṣeṣe"] },
            { title: "Ní ọjọ́ ìdánwò", bullets: ["Ka ìbéèrè kọ̀ọ̀kan lẹ́ẹ̀mejì", "Ṣọ́ra fún EXCEPT àti NOT", "Mú ìdánimọ̀ (ID) tí handbook béèrè wá"] }
          ],
          sources: [SRC.naicUtpa, SRC.naicDepts],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ Ètò Ìkẹ́kọ̀ọ́ àti Ìdánwò Ìwé Àṣẹ Ìbánigbófò rẹ sórí ojú-ewé kan, ní lílo àwọn ìgbésẹ̀ ìjọba àti content outline ìpínlẹ̀ rẹ, pẹ̀lú ọjọ́ gidi fún ọ̀sẹ̀ ìkẹ́kọ̀ọ́ kọ̀ọ̀kan, ìdánwò àṣeṣe méjì àti ọjọ́ ìdánwò tí o fojú sí.",
          youCanNow: "dá ìwà títà tí kò tọ́ mọ̀, yan ìgbésẹ̀ òtítọ́, kí o sì tẹ̀lé ètò ìkẹ́kọ̀ọ́ àti ìdánwò tí ó ní ọjọ́ fún ìdánwò ìwé àṣẹ rẹ.",
          quickCheck: [
            { objective: "O5", q: "Aṣojú kan sọ fún àgbàlagbà obìnrin kan pé policy àtijọ́ rẹ̀ \"kò wúlò rárá\" kí ó lè ra tuntun tí ó ń sanwó jù fún aṣojú náà. Kí nìyí?", options: ["Underwriting", "Indemnity", "Twisting", "Appointment kan"], answer: 2, why: "Lílo ọ̀rọ̀ tí ń ṣini lọ́nà láti mú oníbàárà rọ́pò policy jẹ́ twisting." },
            { objective: "O6", q: "Outline ìpínlẹ̀ rẹ fún kókó kan ní ìbéèrè tí ó pọ̀ ju àwọn yòókù lọ gan-an. Kí ni o máa ṣe nínú ètò rẹ?", options: ["Fún kókó yẹn ní ọjọ́ ìkẹ́kọ̀ọ́ púpọ̀ sí i", "Fò ó nítorí ó gùn", "Kẹ́kọ̀ọ́ àwọn kókó tí ó kéré jù nìkan", "Má ṣe ka outline sí"], answer: 0, why: "Àwọn kókó tí ó ní ìbéèrè púpọ̀ yẹ fún àkókò ìkẹ́kọ̀ọ́ púpọ̀ sí i." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Àkóónú ìdánwò àti ìmúrasílẹ̀ fún ìdánwò",
        questions: [
          { objective: "O4", q: "Àṣeṣe nìkan: bílì $4,000 tí a bò, a ti san deductible tán, coinsurance 80/20. Kí ni ètò náà máa san?", options: ["$800", "$4,000", "$3,000", "$3,200"], answer: 3, why: "Níwọ̀n bí a ti san deductible tán, ètò náà san 80% ti $4,000, ìyẹn $3,200." },
          { objective: "O4", q: "Àṣeṣe nìkan: ìbàjẹ́ ìjì $12,000 tí a bò, replacement cost, deductible $2,000. Kí ni ilé-iṣẹ́ ìbánigbófò máa san?", options: ["$10,000", "$12,000", "$14,000", "$2,000"], answer: 0, why: "A máa ń yọ deductible kúrò lára àdánù: $12,000 - $2,000 = $10,000." },
          { objective: "O3", q: "Ta ló ń gba owó ikú tí primary beneficiary bá ti kú?", options: ["Aṣojú náà", "Contingent beneficiary", "Ilé-iṣẹ́ ìbánigbófò", "Ìpínlẹ̀"], answer: 1, why: "Contingent beneficiary ló kàn nígbà tí primary beneficiary bá ti kú." },
          { objective: "O5", q: "Oníbàárà kan san premium fún ọ ní owó ní ọwọ́ (cash). Kí ni o máa ṣe pẹ̀lú rẹ̀?", options: ["Fi í sínú àkáǹtì tìrẹ fún ìgbà díẹ̀", "Ná a kí o sì san án padà lẹ́yìn náà", "Mójú tó o gẹ́gẹ́ bí owó ìgbẹ́kẹ̀lé, tí a yà sọ́tọ̀ bí ilé-iṣẹ́ aṣojú rẹ àti ìpínlẹ̀ ṣe ń béèrè", "Fún oníbàárà ní díẹ̀ padà gẹ́gẹ́ bí ọpẹ́"], answer: 2, why: "A ń pa premium mọ́ ní ìgbẹ́kẹ̀lé; dída rẹ̀ pọ̀ mọ́ owó tìrẹ jẹ́ commingling." },
          { objective: "O6", q: "Kí ló yẹ kí ó wà nínú ètò ìkẹ́kọ̀ọ́ àti ìdánwò tó dára?", options: ["Ọjọ́ ìdánwò nìkan", "Àwọn ìgbésẹ̀ ìjọba, kókó outline, ọ̀sẹ̀ ìkẹ́kọ̀ọ́ tí ó ní ọjọ́ àti ìdánwò àṣeṣe", "Àkọsílẹ̀ commission aṣojú náà", "Ìdáhùn tí a dà kọ láti ojú-òpó wẹ́ẹ̀bù kan"], answer: 1, why: "Ètò tí ó pé ń bo àwọn ìgbésẹ̀ ìjọba, kókó outline àti ọjọ́ gidi fún ìkẹ́kọ̀ọ́ àti àṣeṣe." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìmúrasílẹ̀ fún Ìdánwò Ìwé Àṣẹ Aṣojú Ìbánigbófò",
    questions: [
      { objective: "O1", q: "Kí ni ọ̀rọ̀ òfin fún aṣojú ìbánigbófò tí ó ní ìwé àṣẹ, tí ó ń ta ìbánigbófò?", options: ["Producer", "Underwriter", "Adjuster", "Actuary"], answer: 0, why: "Òfin ìpínlẹ̀ ń pe àwọn aṣojú àti alágbàtà tí ó ní ìwé àṣẹ ní producer." },
      { objective: "O1", q: "Báńkì kan gbà ọ́ síṣẹ́ láti ta ìbánigbófò ẹ̀mí àti ààbò àìlèṣiṣẹ́ ìgbà pípẹ́. Àwọn ìlà wo ni o nílò?", options: ["Property àti Casualty", "Personal Lines", "Life àti Accident and Health", "Adjuster"], answer: 2, why: "Policy ẹ̀mí nílò Life, ààbò àìlèṣiṣẹ́ sì jẹ́ Accident and Health." },
      { objective: "O1", q: "Iṣẹ́ wo ló sábà máa ń nílò ìwé àṣẹ ọ̀tọ̀ sí ti aṣojú?", options: ["Títa ìbánigbófò ilé tí a yá (renters)", "Títa term life", "Títa ìbánigbófò ọkọ̀", "Ṣíṣèwádìí àti yíyanjú claim gẹ́gẹ́ bí adjuster"], answer: 3, why: "Adjuster ń ṣèwádìí claim, ó sì ń yanjú rẹ̀, ó sì sábà máa ń nílò ìwé àṣẹ tirẹ̀." },
      { objective: "O2", q: "Ojú-òpó wẹ́ẹ̀bù wo ló ń ràn ọ́ lọ́wọ́ láti rí ẹ̀ka ìbánigbófò gbogbo ìpínlẹ̀?", options: ["Ojú-ewé ẹ̀ka ìbánigbófò ìpínlẹ̀ ti NAIC", "Blog ẹni tí ń ta ẹ̀kọ́", "Ẹgbẹ́ kan lórí ìkànnì àjọlò", "Ojú-òpó ìjíròrò lórí ayélujára"], answer: 0, why: "NAIC, àjọ àwọn alákòóso ìpínlẹ̀, ní link sí ẹ̀ka gbogbo ìpínlẹ̀." },
      { objective: "O2", q: "Ní Texas, nígbà tí a ṣàyẹ̀wò, ìgbà wo ni o lè béèrè fún ìwé àṣẹ general lines?", options: ["Kí o tó ṣe ìdánwò kankan", "Lẹ́yìn tí o bá yege ìdánwò ìpínlẹ̀", "Lẹ́yìn ọdún márùn-ún iṣẹ́ nìkan", "Nípasẹ̀ ilé-iṣẹ́ ìbánigbófò nìkan"], answer: 1, why: "TDI sọ pé kí o kọ́kọ́ yege ìdánwò, lẹ́yìn náà kí o béèrè nípasẹ̀ Sircon tàbí NIPR." },
      { objective: "O2", q: "Ọ̀rẹ́ rẹ sọ pé ẹ̀kọ́ wákàtí 20 pọndandan níbi gbogbo. Kí ni o máa ṣe?", options: ["Gbà á gbọ́", "Sanwó fún ẹ̀kọ́ tí ó gùn jù tí o lè rí", "Ṣàyẹ̀wò ojú-ewé ẹ̀ka ìpínlẹ̀ tìrẹ", "Má ṣe ẹ̀kọ́ kankan"], answer: 2, why: "Òfin ẹ̀kọ́ ṣáájú ìwé àṣẹ yàtọ̀ láti ìpínlẹ̀ kan sí ìkejì, nítorí náà ṣàyẹ̀wò ojú-ewé ìjọba." },
      { objective: "O3", q: "Kí ni premium?", options: ["Iye tí ilé-iṣẹ́ ìbánigbófò ń san lórí claim", "Owó tí ẹni tí a bánigbófò ń san fún ààbò", "Ìwé àṣẹ aṣojú náà", "Ìwọ̀n ààlà policy"], answer: 1, why: "Premium ni ohun tí ẹni tí a bánigbófò ń san láti ra ààbò." },
      { objective: "O3", q: "Ojú-ewé wo nínú policy ló ń ṣe àkójọ ẹni tí a bò, ìwọ̀n ààlà àti premium?", options: ["Lẹ́tà ìfihàn", "Fọ́ọ̀mù claim", "Ìwé ìbéèrè", "Declarations page"], answer: 3, why: "Declarations page ń ṣe àkópọ̀ ẹni àti ohun tí a bò, ìwọ̀n ààlà àti premium." },
      { objective: "O3", q: "Kí ló dé tí a fi sábà máa ń túmọ̀ ọ̀rọ̀ tí kò yé nínú policy ní ojú rere oníbàárà?", options: ["Nítorí pé policy jẹ́ contract of adhesion tí ilé-iṣẹ́ ìbánigbófò kọ", "Nítorí pé aṣojú ló kọ ọ́", "Nítorí pé oníbàárà máa ń tọ̀nà nígbà gbogbo", "Nítorí indemnity"], answer: 0, why: "Ilé-iṣẹ́ ìbánigbófò ló kọ àdéhùn náà, oníbàárà sì gbà á bí ó ti rí, nítorí náà ọ̀rọ̀ tí kò yé ń ṣe oníbàárà lóore." },
      { objective: "O3", q: "Policy ẹ̀mí wo ló ń bo iye ọdún kan pàtó, tí kò sì ní cash value?", options: ["Whole life", "Universal life", "Term life", "Permanent life"], answer: 2, why: "Term life ń bo àkókò pàtó, kò sì ń kó cash value jọ." },
      { objective: "O4", q: "Àṣeṣe nìkan: bílì $6,000 tí a bò, deductible $1,000 tí a kò tíì san tán, coinsurance 80/20. Kí ni ẹni tí a bánigbófò máa san?", options: ["$1,200", "$2,000", "$1,000", "$5,000"], answer: 1, why: "Deductible $1,000 pẹ̀lú 20% ti $5,000 tí ó kù ($1,000) jẹ́ $2,000." },
      { objective: "O4", q: "Àṣeṣe nìkan: awakọ̀ kan tí ààlà rẹ̀ jẹ́ 25/50/25 ṣe ẹnìkan léṣe tí bílì rẹ̀ jẹ́ $30,000. Kí ni policy náà máa san fún ẹni yẹn?", options: ["$30,000", "$50,000", "$5,000", "$25,000"], answer: 3, why: "Ààlà ọgbẹ́ ẹnìkọ̀ọ̀kan jẹ́ $25,000; awakọ̀ náà lè jẹ $5,000 tí ó kù." },
      { objective: "O4", q: "Àṣeṣe nìkan: kọ̀mpútà alágbèérìn (laptop) kan jẹ́ $1,000 ní tuntun, depreciation rẹ̀ jẹ́ $400; deductible jẹ́ $100. Kí ni policy actual cash value máa san?", options: ["$500", "$600", "$900", "$1,000"], answer: 0, why: "Actual cash value jẹ́ $1,000 - $400 = $600, yọ deductible $100 kúrò, ìyẹn $500." },
      { objective: "O4", q: "Iye wo ló ń dé ààlà ohun tí ènìyàn máa san fún ìtọ́jú ìlera tí a bò lọ́dún kan?", options: ["Copay", "Premium", "Out-of-pocket maximum", "Deductible"], answer: 2, why: "Out-of-pocket maximum ni iye tó pọ̀ jù tí ẹni tí a bánigbófò ń san ní ọdún ètò kan fún ìtọ́jú tí a bò." },
      { objective: "O5", q: "Aṣojú kan fún oníbàárà ní gift card $100 kí ó lè ra policy. Kí ni a ń pe èyí?", options: ["Twisting", "Rebating", "Underwriting", "Indemnity"], answer: 1, why: "Fífúnni ní nǹkan olówó láti rí títà gbà jẹ́ rebating, tí ó lòdì sí òfin ní ọ̀pọ̀ ìpínlẹ̀." },
      { objective: "O5", q: "Aṣojú kan ń rọ́pò policy oníbàárà rẹ̀ lọ́dọọdún ní pàtàkì láti gba commission tuntun. Kí nìyí?", options: ["Churning", "Coinsurance", "Appointment", "Utmost good faith"], answer: 0, why: "Rírọ́pò léraléra ní pàtàkì fún commission jẹ́ churning." },
      { objective: "O5", q: "Oníbàárà kan béèrè bóyá policy olówó pọ́ọ́kú kan ń bo ìbàjẹ́ omíyalé (flood), kò sì dá ọ lójú. Kí ni o máa ṣe?", options: ["Sọ pé bẹ́ẹ̀ ni kí títà lè parí", "Yí ọ̀rọ̀ padà", "Sọ pé a máa ń bo flood nígbà gbogbo", "Ṣàyẹ̀wò ọ̀rọ̀ inú policy tàbí béèrè lọ́wọ́ ilé-iṣẹ́ kí o tó dáhùn"], answer: 3, why: "Mímọ̀ọ̀mọ̀ méfò nípa ààbò lè di misrepresentation; kọ́kọ́ ṣàyẹ̀wò kí o sì sọ òtítọ́." },
      { objective: "O6", q: "Kí ni ìgbésẹ̀ àkọ́kọ́ tó dára jù nígbà tí o bá ń kọ́ ètò ìkẹ́kọ̀ọ́ ìdánwò rẹ?", options: ["Ṣètò ìdánwò fún ọ̀la", "Ra ẹ̀kọ́ tí ó wọ́n jù", "Gba àwọn ìgbésẹ̀ ìjọba àti content outline ìdánwò ìpínlẹ̀ rẹ", "Há àwọn ìbéèrè àṣeṣe láìlétò sórí"], answer: 2, why: "Àwọn ìgbésẹ̀ ìjọba àti outline ń fi ohun tí o máa ṣe àti ohun tí o máa kà hàn." },
      { objective: "O6", q: "Àmì ìdánwò àṣeṣe àkọ́kọ́ rẹ kéré sí àmì tí o fẹ́. Kí ni o máa yí padà nínú ètò rẹ?", options: ["Fi ọjọ́ ìkẹ́kọ̀ọ́ kún àwọn kókó outline tí o kò mọ̀ dáadáa jù, kí o sì ṣètò ìdánwò àṣeṣe mìíràn", "Fagi lé ètò náà", "Ṣe ìdánwò gidi lẹ́sẹ̀kẹsẹ̀", "Kẹ́kọ̀ọ́ àwọn kókó tí o ti mọ̀ nìkan"], answer: 0, why: "Ìdánwò àṣeṣe ń fi àwọn kókó tí o kò mọ̀ dáadáa hàn; fi àkókò kún wọn, kí o sì tún dánwò kí ìdánwò gidi tó dé." },
      { objective: "O6", q: "Lórí ìdánwò, ìbéèrè kan béèrè nǹkan wo ni a bò \"EXCEPT\" (àyàfi). Kí ni o yẹ kí o ṣe?", options: ["Yan gbólóhùn òtítọ́ àkọ́kọ́", "Fò ó", "Méfò kíákíá", "Kà á lẹ́ẹ̀mejì kí o sì yan nǹkan tí a KÒ bò"], answer: 3, why: "EXCEPT ń béèrè fún ìdáhùn kan tí kò bá a mu; kíkà á lẹ́ẹ̀mejì ń dènà àṣìṣe àìfiyèsí." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [1, 3, 6, 8, 10, 12, 14, 16, 17] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Ìlà ìwé àṣẹ tó tọ́", objective: "O1", notYet: "Kò dárúkọ ìlà kankan, tàbí ìlà tí kò bá iṣẹ́ náà mu.", meets: "Ó dárúkọ ìlà ìwé àṣẹ tí ó bá iṣẹ́ náà mu, ó sì sọ ìdí rẹ̀.", exceeds: "Ó tún dárúkọ ìlà kejì tàbí ìwé àṣẹ tí akẹ́kọ̀ọ́ lè nílò lẹ́yìn náà àti ìdí rẹ̀." },
      { name: "Àwọn ìgbésẹ̀ ìjọba", objective: "O2", notYet: "Àwọn ìgbésẹ̀ kan kò sí, tàbí wọ́n wá láti inú ìpolówó tàbí lọ́wọ́ ọ̀rẹ́.", meets: "Gbogbo ìgbésẹ̀ láti ojú-ewé ìjọba ìpínlẹ̀ náà, ní ìtẹ̀léra, pẹ̀lú àdírẹ́sì wẹ́ẹ̀bù.", exceeds: "Ó fi ọjọ́ tí ó ṣàyẹ̀wò, handbook ilé-iṣẹ́ ìdánwò àti ìgbésẹ̀ àyẹ̀wò ìtàn èyíkéyìí kún un." },
      { name: "Kókó outline àti àwọn ọ̀rọ̀", objective: "O3", notYet: "Kò sí kókó outline, tàbí ó ṣàlàyé àwọn ọ̀rọ̀ pàtàkì ní àṣìṣe.", meets: "Ó ṣe àkọsílẹ̀ gbogbo kókó outline pẹ̀lú ìwọ̀n rẹ̀, ó sì ṣàlàyé àwọn ọ̀rọ̀ pàtàkì tọ̀nà.", exceeds: "Ó sàmì sí àwọn kókó tí akẹ́kọ̀ọ́ kò mọ̀ dáadáa jù, ó sì ṣe flash card fún wọn." },
      { name: "Claim àṣeṣe", objective: "O4", notYet: "Claim kò tó mẹ́ta, tàbí ìdáhùn kò tọ́.", meets: "Claim àṣeṣe mẹ́ta tí ó ṣírò tọ̀nà, tí ó fi ìgbésẹ̀ kọ̀ọ̀kan hàn.", exceeds: "Àwọn claim náà bo deductible, coinsurance àti ìwọ̀n ààlà policy, ọ̀kọ̀ọ̀kan pẹ̀lú àyẹ̀wò ìṣirò." },
      { name: "Àwọn òfin ìwà rere", objective: "O5", notYet: "Àwọn òfin kò sí tàbí wọn kò tọ́.", meets: "Òfin ìwà rere mẹ́ta tí ó ṣàlàyé tọ̀nà ní ọ̀rọ̀ akẹ́kọ̀ọ́ fúnra rẹ̀.", exceeds: "Òfin kọ̀ọ̀kan ní àpẹẹrẹ kúkúrú ti ìgbésẹ̀ òtítọ́." },
      { name: "Ètò tí ó ní ọjọ́", objective: "O6", notYet: "Kò sí ọjọ́, tàbí kò sí ìdánwò àṣeṣe.", meets: "Ètò ọ̀sẹ̀ kọ̀ọ̀kan pẹ̀lú ọjọ́, ọjọ́ ìdánwò tí ó fojú sí àti ìdánwò àṣeṣe méjì pẹ̀lú àmì tí ó fẹ́ gbà.", exceeds: "Ọjọ́ ìkẹ́kọ̀ọ́ púpọ̀ sí i lọ sí àwọn kókó outline tí ó wúwo jù, pẹ̀lú ọjọ́ ìdánwò àfidípò." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣètò ìdánwò ìwé àṣẹ ìpínlẹ̀ wọn láàárín ọjọ́ 60 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn yege ìdánwò ìpínlẹ̀ tí wọ́n sì gba ìwé àṣẹ (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn rí ìfilọ̀ iṣẹ́ tàbí appointment gẹ́gẹ́ bí aṣojú ìbánigbófò, tàbí pé àwọn ṣí ilé-iṣẹ́ aṣojú tiwọn"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì láti ṣí àwọn ojú-ewé ìjọba ìpínlẹ̀",
      "Ìwé, gègé àti ẹ̀rọ ìṣirò lásán",
      "Content outline ìdánwò àti candidate handbook ti ìpínlẹ̀ akẹ́kọ̀ọ́ (ọ̀fẹ́ láti ọ̀dọ̀ ilé-iṣẹ́ ìdánwò)",
      "Nǹkan bí ìṣẹ́jú 60 sí 75 lápapọ̀, ní àwọn ìpàdé kúkúrú, pẹ̀lú àkókò fún ètò ìkẹyìn"
    ],
    facilitatorNotes: [
      "Pín àwọn akẹ́kọ̀ọ́ sí ẹgbẹ́ gẹ́gẹ́ bí ìpínlẹ̀ wọn tí o bá lè ṣe é, kí ẹ sì jọ ṣí ojú-ewé ìwé àṣẹ ìpínlẹ̀ kọ̀ọ̀kan; má ṣe sọ òfin ìpínlẹ̀ kan bí ẹni pé ó kan gbogbo ibi.",
      "Jẹ́ kí ó yé wọn pé ẹ̀kọ́ yìí ń múra akẹ́kọ̀ọ́ sílẹ̀, kò sì rọ́pò ẹ̀kọ́ ṣáájú ìwé àṣẹ tí ìpínlẹ̀ ń béèrè, kò sì fúnni ní ìwé àṣẹ.",
      "Fún àwọn akẹ́kọ̀ọ́ tí ó ní àkọsílẹ̀ ẹ̀ṣẹ̀, ṣàlàyé òfin ìyọ̀ǹda ìkọ̀wé ní òtítọ́, kí o sì rán wọn sí ẹ̀ka ìpínlẹ̀ wọn; má ṣe méfò nípa ẹjọ́ wọn.",
      "Gbogbo ìṣirò claim ń lo nọ́mbà àhùsọ; má ṣe fúnni ní ìmọ̀ràn lórí policy tí ẹnikẹ́ni yẹ kí ó rà.",
      "Fi rubric ṣe àmì fún ètò ìkẹyìn, kí o sì ṣàyẹ̀wò pé gbogbo ìgbésẹ̀ ní àdírẹ́sì wẹ́ẹ̀bù ìjọba."
    ]
  }
};

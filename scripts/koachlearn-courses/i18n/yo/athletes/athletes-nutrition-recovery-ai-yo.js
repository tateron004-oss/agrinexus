"use strict";

// Koach Learn course (Yoruba translation of athletes/athletes-nutrition-recovery-ai.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// General education only: every health lesson sends the student to a coach, athletic trainer, doctor or registered dietitian. No doses, calorie targets or medical advice.

module.exports = {
  id: "athletes-nutrition-recovery-ai-yo",
  lang: "yo",
  translationOf: "athletes-nutrition-recovery-ai",
  category: "Athletes",
  name: "Oúnjẹ àti Ìmúbọ̀sípò Ara pẹ̀lú AI",
  skills: "Ṣíṣètò oúnjẹ tó péye yí ìdánrawò ká, Ṣíṣètò oúnjẹ àti omi fún ọjọ́ ìdíje, Lílo AI fún àkọsílẹ̀ ọjà àti èrò oúnjẹ, Ṣíṣàkọsílẹ̀ oorun àti ìsinmi, Mímọ ìgbà tí o nílò akọ́ṣẹ́mọṣẹ́",
  outcome: "lo olùrànlọ́wọ́ AI láti ṣètò oúnjẹ tó rọrùn tí ó sì péye fún ọ̀sẹ̀ kan àti ètò ìmúbọ̀sípò ara yí àkókò ìdánrawò rẹ ká, lẹ́yìn náà kí o fi ètò náà han onímọ̀ oúnjẹ (registered dietitian), olùtọ́jú eléré ìdárayá (athletic trainer) tàbí dókítà.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn eléré ìdárayá àti àwọn kóòṣì tí wọ́n fẹ́ mọ ìpìlẹ̀ jíjẹ, mímu àti ìmúbọ̀sípò ara dáadáa, tí wọ́n sì fẹ́ lo AI láti mú ìṣètò rọrùn. Ẹ̀kọ́ gbogbogbò ni, kì í ṣe ìmọ̀ràn ìlera tàbí ti oúnjẹ.",
    "Ara kọ̀ọ̀kan yàtọ̀. Ọjọ́ orí rẹ, eré ìdárayá rẹ, ìlera rẹ àti àfojúsùn rẹ ló ń pinnu ohun tí o nílò. Ìdí nìyí tí ètò tí o máa ṣe níbí fi jẹ́ àkọ́pẹrẹ tí o gbọ́dọ̀ fi han onímọ̀ oúnjẹ, olùtọ́jú eléré ìdárayá rẹ tàbí dókítà rẹ.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì ní iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Lo olùrànlọ́wọ́ AI láti kọ àkọ́pẹrẹ ètò oúnjẹ àti ìmúbọ̀sípò ara fún ọ̀sẹ̀ kan yí àkókò ìdánrawò àti ìdíje rẹ gidi ká: àwo oúnjẹ tó péye, ètò oúnjẹ àti omi fún ọjọ́ ìdíje, àkọsílẹ̀ ọjà tí ó bá owó rẹ mu, àti ètò oorun. Yọ gbogbo ìsọfúnni ìlera àdáni kúrò, lẹ́yìn náà fi ètò náà han onímọ̀ oúnjẹ, olùtọ́jú eléré ìdárayá tàbí dókítà, kí o sì yí i padà gẹ́gẹ́ bí ohun tí wọ́n sọ.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn eléré ìdárayá ilé-ẹ̀kọ́ girama, yunifásítì àti ẹgbẹ́ eré, àti àwọn kóòṣì tí ń ràn wọ́n lọ́wọ́, tí wọ́n fẹ́ jẹun, mu omi, kí ara wọn sì bọ̀ sípò dáadáa, tí wọ́n sì fẹ́ lo AI láti mú ìṣètò rọrùn.",
    startingPoint: "Wọ́n ń jẹun, wọ́n sì ń sùn láàárín àkókò ìdánrawò, kíláàsì àti ìdíje tí ó kún, wọ́n sì ń lo smartphone lójoojúmọ́. Ọ̀pọ̀ ń fo oúnjẹ, wọ́n ń méfò nípa oúnjẹ àti omi ọjọ́ ìdíje, wọn kò sùn tó, wọn kò sì mọ ìgbà tí ara ríro nílò akọ́ṣẹ́mọṣẹ́.",
    gap: "Oúnjẹ, omi àti oorun tí kò tó ń dí eré lọ́wọ́, wọ́n sì ń mú ewu ìpalára àti àìsàn ooru pọ̀ sí i. Ìmọ̀ràn AI tàbí ti orí ayélujára nípa kalori àti àfikún oúnjẹ (supplement) lè léwu. Ètò ọ̀sẹ̀ tó rọrùn tí akọ́ṣẹ́mọṣẹ́ ti ṣàyẹ̀wò ń ran àwọn eléré ìdárayá lọ́wọ́ láti bọ̀ sípò kí wọ́n sì wà ní àlàáfíà.",
    constraints: [
      "Ọ̀rọ̀ tó rọrùn, ní nǹkan bí ìpele kíkàwé kíláàsì 7",
      "Ẹ̀kọ́ gbogbogbò nìkan, kì í ṣe ìmọ̀ràn ìlera tàbí oúnjẹ; iye gangan ń wá láti ọ̀dọ̀ onímọ̀ oúnjẹ, olùtọ́jú eléré ìdárayá tàbí dókítà",
      "Fóònù tàbí kọ̀mpútà tí ó ní olùrànlọ́wọ́ AI ọ̀fẹ́; ètò gbọ́dọ̀ bá owó oúnjẹ àti ilé ìdáná gidi mu",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀",
      "Kò sí ìwé ìtọ́jú, oògùn tàbí ìsọfúnni ìlera àdáni tí a máa fi sínú AI; ìwọ̀n ara àti bí ara ṣe rí jẹ́ ọ̀rọ̀ tí ó nílò ìṣọ́ra"
    ],
    prerequisites: "Kò sí"
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ní lílo oúnjẹ tí o ti ń jẹ tẹ́lẹ̀", action: "to àwo oúnjẹ tó péye tí ó ní carbohydrate, protein, àti èso àti ẹ̀fọ́", standard: "pẹ̀lú gbogbo apá mẹ́ta lórí àwo, àti oúnjẹ agbára púpọ̀ sí i fún ọjọ́ ìdánrawò líle" },
    { id: "O2", condition: "Tí a bá fún ọ ní àkókò tí ìdíje tàbí ìdánrawò líle máa bẹ̀rẹ̀", action: "ṣètò oúnjẹ àti omi ọjọ́ ìdíje láti oúnjẹ ṣáájú rẹ̀ títí dé ìmúbọ̀sípò lẹ́yìn rẹ̀", standard: "pẹ̀lú oúnjẹ àti ìpanu tí o mọ̀, omi ní gbogbo ọjọ́, àti ìpanu ìmúbọ̀sípò tí ó ní carbohydrate àti protein" },
    { id: "O3", condition: "Ní lílo olùrànlọ́wọ́ AI ọ̀fẹ́", action: "ṣe èrò oúnjẹ ọ̀sẹ̀ kan àti àkọsílẹ̀ ọjà tí ó bá àkókò rẹ, owó rẹ àti ilé ìdáná rẹ mu", standard: "pẹ̀lú ara àìgbà oúnjẹ (allergy) tí a sọ ní ọ̀rọ̀ gbogbogbò, láìbéèrè iye kalori, ètò dídín ìwọ̀n ara kù tàbí iye àfikún oúnjẹ" },
    { id: "O4", condition: "Tí a bá fún ọ ní àkókò ìdánrawò àti ìdíje rẹ", action: "ṣètò oorun pẹ̀lú àkókò ìjí, àkókò ìsùn àti àkókò pípa ojú-iboju tí kì í yí padà", standard: "pẹ̀lú ètò náà tí a kọ sílẹ̀ fún ọ̀sẹ̀ kan" },
    { id: "O5", condition: "Tí a bá ṣàlàyé ara ríro, ìrora tàbí ìlù orí fún ọ", action: "ṣàlàyé bóyá ara ríro lásán ni tàbí àmì pé kí o dúró kí o sì sọ fún olùtọ́jú eléré ìdárayá rẹ", standard: "kí o gba gbogbo ọ̀rọ̀ tí ó ní ìrora mímú, wíwú tàbí àmì ìlù orí ní tọ̀nà" },
    { id: "O6", condition: "Ní lílo àkókò rẹ àti olùrànlọ́wọ́ AI", action: "ṣe ètò oúnjẹ àti ìmúbọ̀sípò ara fún ọ̀sẹ̀ kan kí o sì jẹ́ kí onímọ̀ oúnjẹ, olùtọ́jú eléré ìdárayá tàbí dókítà ṣàyẹ̀wò rẹ̀", standard: "pẹ̀lú ìsọfúnni ìlera àdáni tí a yọ kúrò, àti ètò tí a tún ṣe gẹ́gẹ́ bí ìmọ̀ràn wọn" }
  ],
  chapters: [
    {
      name: "Orí 1: Oúnjẹ yí ìdánrawò ká",
      lessons: [
        {
          objectives: ["O1"],
          title: "Àwo oúnjẹ tó péye fún eléré ìdárayá",
          minutes: 5,
          goal: "To àwo oúnjẹ tó péye láti inú oúnjẹ tí o ti ń jẹ tẹ́lẹ̀.",
          text: [
            "Oúnjẹ ń fún ọ ní agbára láti ṣe ìdánrawò, ó sì ń fún ara ní ohun tí ó fi ń bọ̀ sípò. Ọ̀nà tó rọrùn láti ronú nípa oúnjẹ ni àwo tí ó ní apá pàtàkì mẹ́ta: carbohydrate fún agbára (ìrẹsì, pasta, búrẹ́dì, ànàmọ́ tàbí ọ̀dùnkún, èso), protein láti ran iṣan ara lọ́wọ́ láti tún ara rẹ̀ ṣe (ẹyin, ẹ̀wà, ẹja, adìyẹ, yogọ́ọ̀tì), àti èso àti ẹ̀fọ́ fún àwọn fítámì àti mínírà.",
            "Àwọn eléré ìdárayá tí ń ṣe ìdánrawò líle sábà máa ń nílò agbára ju àwọn tí kì í ṣeré lọ, ọjọ́ líle sì sábà máa ń béèrè carbohydrate púpọ̀ sí i. Iye tí o nílò dá lórí ara rẹ, eré rẹ àti ìdánrawò rẹ. Ìdí nìyí tí onímọ̀ oúnjẹ (registered dietitian) fi jẹ́ ẹni tó tọ́ láti sọ iye gangan fún ọ.",
            "Fífo oúnjẹ tàbí yíyọ gbogbo irú oúnjẹ kan kúrò kí o lè rí bákan lè ba eré rẹ àti ìlera rẹ jẹ́. Tí ọ̀rọ̀ oúnjẹ, ìwọ̀n ara tàbí bí ara rẹ ṣe rí bá ń kó ìdààmú bá ọ, bá ẹnìkan tí o fọkàn tán sọ̀rọ̀, àti olùtọ́jú eléré ìdárayá tàbí dókítà rẹ."
          ],
          words: [["Carbohydrate", "oúnjẹ bí ìrẹsì, búrẹ́dì, pasta, ọ̀dùnkún àti èso tí ó ń fúnni ní agbára kíákíá."], ["Protein", "oúnjẹ bí ẹyin, ẹ̀wà, ẹja, ẹran àti yogọ́ọ̀tì tí ó ń ran ara lọ́wọ́ láti tún iṣan ṣe."], ["Onímọ̀ oúnjẹ (registered dietitian, RD tàbí RDN)", "akọ́ṣẹ́mọṣẹ́ nípa oúnjẹ tí ó ní ìwé àṣẹ."]],
          slides: [
            { title: "Apá mẹ́ta àwo oúnjẹ", bullets: ["Carbohydrate: agbára", "Protein: àtúnṣe ara", "Èso àti ẹ̀fọ́: fítámì àti mínírà"] },
            { title: "Ọjọ́ líle, oúnjẹ púpọ̀ sí i", bullets: ["Ọjọ́ ìdánrawò sábà máa ń nílò agbára púpọ̀ sí i", "Iye gangan: béèrè lọ́wọ́ onímọ̀ oúnjẹ"] },
            { title: "Ṣọ́ra fún", bullets: ["Fífo oúnjẹ", "Yíyọ gbogbo irú oúnjẹ kan kúrò", "Ìdààmú nípa oúnjẹ tàbí ara: bá ẹnìkan sọ̀rọ̀"] }
          ],
          sources: [{ name: "Academy of Nutrition and Dietetics: Wá onímọ̀ oúnjẹ", url: "https://www.eatright.org/find-a-nutrition-expert" }],
          tryIt: "Kọ ohun tí o jẹ lánàá fún oúnjẹ kan sílẹ̀. Sàmì sí carbohydrate, protein àti èso tàbí ẹ̀fọ́. Kí ni o lè fi kún un kí ó lè di àwo oúnjẹ tó péye?",
          youCanNow: "to àwo oúnjẹ tó péye tí ó ní carbohydrate, protein, àti èso àti ẹ̀fọ́.",
          quickCheck: [
            { objective: "O1", q: "Kí ni iṣẹ́ pàtàkì protein lórí àwo oúnjẹ eléré ìdárayá?", options: ["Agbára kíákíá", "Ríran iṣan lọ́wọ́ láti tún ara rẹ̀ ṣe", "Fífi fítámì kún un nìkan", "Mímú ara tutù"], answer: 1, why: "Protein ń fún iṣan ní ohun tí ó nílò láti tún ara rẹ̀ ṣe." },
            { objective: "O1", q: "Ọ̀la jẹ́ ọjọ́ ìdánrawò líle. Ìyípadà wo lórí àwo rẹ ló bọ́gbọ́n mu?", options: ["Fo oúnjẹ àárọ̀", "Yọ carbohydrate kúrò", "Fi carbohydrate púpọ̀ sí i kún un fún agbára", "Jẹ ẹ̀fọ́ nìkan"], answer: 2, why: "Ọjọ́ líle sábà máa ń béèrè carbohydrate púpọ̀ sí i fún agbára." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Oúnjẹ àti omi ọjọ́ ìdíje",
          minutes: 5,
          goal: "Ṣètò ohun tí o máa jẹ àti mu, àti ìgbà tí o máa jẹ ẹ́, ní ọjọ́ ìdíje tàbí ìdánrawò líle.",
          text: [
            "Àkókò ṣe pàtàkì. Ọ̀pọ̀ eléré ìdárayá máa ń jẹ oúnjẹ tó péye bí wọ́n ṣe máa ń jẹ ẹ́ ní wákàtí díẹ̀ ṣáájú ìdíje, wọ́n sì máa ń jẹ ìpanu kékeré tó rọrùn nígbà tí àkókò ìbẹ̀rẹ̀ bá sún mọ́, bí èso tàbí biscuit. Oúnjẹ tí o ti mọ̀ ló dára jù ní ọjọ́ ìdíje: má ṣe dán nǹkan tuntun wò.",
            "Omi ṣe pàtàkì ní gbogbo ọjọ́, kì í ṣe nígbà ìdíje nìkan. Mú ìgò omi dání, máa mu omi déédéé, kí o sì mu púpọ̀ sí i nígbà ooru. Òùngbẹ, ìtọ̀ tí ó dúdú, ẹ̀fọ́rí àti iṣan wíwọ (cramps) lè jẹ́ àmì pé o nílò omi púpọ̀ sí i. Tí òòyì bá ń kọ́ ọ, tí ọkàn rẹ kò bá balẹ̀ (ìdàrúdàpọ̀), tàbí tí ara rẹ kò bá yá rárá nínú ooru, pàjáwìrì ni: dúró kí o sì sọ fún kóòṣì tàbí olùtọ́jú eléré ìdárayá rẹ lẹ́sẹ̀kẹsẹ̀.",
            "Lẹ́yìn ìdánrawò líle, jíjẹ oúnjẹ tàbí ìpanu tí ó ní carbohydrate àti protein ń ran ara lọ́wọ́ láti bọ̀ sípò. Olùtọ́jú eléré ìdárayá tàbí onímọ̀ oúnjẹ rẹ lè sọ ohun tí ó bá ara rẹ àti eré rẹ mu fún ọ."
          ],
          steps: ["Kọ àkókò tí ìdíje tàbí ìdánrawò rẹ máa bẹ̀rẹ̀.", "Ṣètò oúnjẹ tó péye bí o ṣe máa ń jẹ ẹ́, ní wákàtí díẹ̀ ṣáájú.", "Ṣètò ìpanu kékeré tí o mọ̀ nígbà tí àkókò ìbẹ̀rẹ̀ bá sún mọ́.", "Ṣètò ìgò omi rẹ fún gbogbo ọjọ́.", "Ṣètò oúnjẹ tàbí ìpanu ìmúbọ̀sípò fún lẹ́yìn rẹ̀."],
          words: [["Omi tó tó nínú ara (hydration)", "níní omi tó pọ̀ tó nínú ara rẹ."], ["Oúnjẹ ìmúbọ̀sípò", "oúnjẹ lẹ́yìn ìdánrawò tí ó ń ran ara lọ́wọ́ láti kún agbára padà kí ó sì tún ara ṣe."]],
          slides: [
            { title: "Ṣáájú ìdíje", bullets: ["Oúnjẹ tó péye ní wákàtí díẹ̀ ṣáájú", "Ìpanu kékeré tí o mọ̀ nígbà tí ìbẹ̀rẹ̀ bá sún mọ́", "Kò sí nǹkan tuntun ní ọjọ́ ìdíje"] },
            { title: "Omi ní gbogbo ọjọ́", bullets: ["Mú ìgò omi dání", "Púpọ̀ sí i nígbà ooru", "Òòyì tàbí ìdàrúdàpọ̀ nínú ooru? Dúró kí o sì sọ fún àwọn òṣìṣẹ́ báyìí"] },
            { title: "Lẹ́yìn rẹ̀", bullets: ["Carbohydrate àti protein", "Béèrè lọ́wọ́ olùtọ́jú eléré ìdárayá rẹ ohun tó bá ọ mu"] }
          ],
          tryIt: "Kọ ètò àkókò ọjọ́ ìdíje fún ìdíje tàbí ìdánrawò líle rẹ tó ń bọ̀: oúnjẹ, ìpanu, omi àti oúnjẹ ìmúbọ̀sípò, pẹ̀lú àkókò fún ọ̀kọ̀ọ̀kan.",
          youCanNow: "ṣètò oúnjẹ àti omi ọjọ́ ìdíje tó rọrùn.",
          quickCheck: [
            { objective: "O2", q: "Ìgbà wo ni ọ̀pọ̀ eléré ìdárayá máa ń jẹ oúnjẹ tó péye wọn ní ọjọ́ ìdíje?", options: ["Wákàtí díẹ̀ ṣáájú ìdíje", "Gẹ́lẹ́ nígbà tí ìdíje bá ń bẹ̀rẹ̀", "Lẹ́yìn ìdíje nìkan", "Ní alẹ́ ọjọ́ tó ṣáájú nìkan"], answer: 0, why: "Oúnjẹ bí o ṣe máa ń jẹ ẹ́ ní wákàtí díẹ̀ ṣáájú, àti ìpanu kékeré nígbà tí ìbẹ̀rẹ̀ bá sún mọ́, ni ètò tí ọ̀pọ̀ ń tẹ̀lé." },
            { objective: "O2", q: "Ọjọ́ gbígbóná ni, o sì ní ìdánrawò gígùn. Kí ni o máa ṣètò?", options: ["Mu omi nígbà tí kóòṣì bá sọ nìkan", "Má mu omi kí iṣan má bàa wọ", "Dúró títí ìdánrawò bá parí kí o tó mu omi", "Mú ìgò omi dání kí o sì máa mu déédéé ní gbogbo ọjọ́, púpọ̀ sí i nínú ooru"], answer: 3, why: "Omi ṣe pàtàkì ní gbogbo ọjọ́, o sì nílò púpọ̀ sí i nínú ooru." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Lílo AI fún èrò oúnjẹ àti àkọsílẹ̀ ọjà",
          minutes: 5,
          goal: "Lo olùrànlọ́wọ́ AI láti ṣe èrò oúnjẹ ọ̀sẹ̀ kan àti àkọsílẹ̀ ọjà tí ó bá owó rẹ mu.",
          text: [
            "Olùrànlọ́wọ́ AI mọ̀ dáadáa nípa èrò oúnjẹ, ọ̀nà síse oúnjẹ àti àkọsílẹ̀ ọjà. Sọ àkókò rẹ, owó rẹ, ilé ìdáná rẹ àti ohun tí o fẹ́ràn fún un. Àpẹẹrẹ: \"Eléré ìdárayá yunifásítì ni mí, mo ní máíkrowéfù (microwave) ní yàrá ilé-ìgbé mi, owó oúnjẹ mi sì jẹ́ $50 lọ́sẹ̀. Ìdánrawò jẹ́ 3-6 pm. Fún mi ní oúnjẹ tó rọrùn tí ó sì péye fún ọjọ́ 7 àti àkọsílẹ̀ ọjà.\"",
            "Sọ fún un nípa ara àìgbà oúnjẹ (allergy) tàbí òfin oúnjẹ ẹ̀sìn tàbí ti àṣà rẹ ní ọ̀rọ̀ gbogbogbò, kí èrò rẹ̀ lè bá ọ mu. Má ṣe fi ìwé ìtọ́jú tàbí orúkọ oògùn rẹ sínú rẹ̀.",
            "Má ṣe béèrè iye kalori, ètò dídín ìwọ̀n ara kù tàbí iye àfikún oúnjẹ (supplement) lọ́wọ́ AI. Àwọn wọ̀nyí dá lórí ìlera rẹ, ìdáhùn náà sì lè jẹ́ àṣìṣe tàbí kí ó léwu. Iṣẹ́ onímọ̀ oúnjẹ tàbí dókítà nìyẹn."
          ],
          steps: ["Sọ àkókò rẹ, owó rẹ àti ilé ìdáná rẹ.", "Sọ oúnjẹ tí o fẹ́ràn àti èyí tí o kì í jẹ.", "Béèrè èrò oúnjẹ tó péye fún ọjọ́ 7.", "Béèrè àkọsílẹ̀ ọjà tí a pín sí apá ilé ìtajà.", "Ṣàyẹ̀wò iye owó ní ilé ìtajà rẹ kí o sì ṣe àtúnṣe."],
          words: [["Owó tí o ṣètò (budget)", "iye owó tí o ti pinnu láti ná."], ["Ara àìgbà oúnjẹ (allergy)", "nígbà tí ara rẹ bá ṣe ohun burúkú sí oúnjẹ kan; ó lè le gan-an."]],
          slides: [
            { title: "Sọ àlàyé fún AI", bullets: ["Àkókò àti owó", "Ilé ìdáná: yàrá ilé-ìgbé, ilé, tàbí kò sí", "Oúnjẹ tí o fẹ́ràn àti èyí tí o kì í jẹ"] },
            { title: "Béèrè fún", bullets: ["Èrò oúnjẹ tó péye fún ọjọ́ 7", "Àkọsílẹ̀ ọjà tí a pín sí apá ilé ìtajà"] },
            { title: "MÁ ṢE béèrè lọ́wọ́ AI fún", bullets: ["Iye kalori tàbí ètò dídín ìwọ̀n ara kù", "Iye àfikún oúnjẹ (supplement)", "Ìmọ̀ràn ìlera"] }
          ],
          tryIt: "Béèrè lọ́wọ́ olùrànlọ́wọ́ AI fún oúnjẹ tó rọrùn tí ó sì péye fún ọjọ́ méje àti àkọsílẹ̀ ọjà fún owó rẹ àti ilé ìdáná rẹ gidi. Ṣàyẹ̀wò iye owó nǹkan mẹ́ta ní ilé ìtajà rẹ.",
          youCanNow: "lo AI láti rí èrò oúnjẹ àti àkọsílẹ̀ ọjà tí ó bá owó rẹ àti àkókò rẹ mu.",
          quickCheck: [
            { objective: "O3", q: "Àlàyé wo ló ń ran olùrànlọ́wọ́ AI lọ́wọ́ láti fún ọ ní èrò oúnjẹ tó wúlò?", options: ["Ìwé ìtọ́jú rẹ", "Àkókò rẹ, owó rẹ àti ilé ìdáná rẹ", "Oògùn rẹ", "Àfojúsùn ìwọ̀n ara rẹ"], answer: 1, why: "Àkókò, owó àti ilé ìdáná ń jẹ́ kí èrò náà bá ayé rẹ mu láìfi ìsọfúnni ìlera àdáni hàn." },
            { objective: "O3", q: "O fẹ́ mọ iye kalori gangan tí o máa jẹ láti dín ìwọ̀n ara kù. Ta ni o máa béèrè lọ́wọ́ rẹ̀?", options: ["Olùrànlọ́wọ́ AI", "Ọmọ ẹgbẹ́ eré rẹ", "Onímọ̀ oúnjẹ tàbí dókítà", "Gbajúmọ̀ orí ìkànnì àjọlò"], answer: 2, why: "Iye kalori dá lórí ìlera rẹ, iṣẹ́ onímọ̀ oúnjẹ tàbí dókítà sì ni." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Oúnjẹ yí ìdánrawò ká",
        questions: [
          { objective: "O1", q: "Kí ni iṣẹ́ pàtàkì carbohydrate fún eléré ìdárayá?", options: ["Àtúnṣe iṣan nìkan", "Fítámì nìkan", "Agbára", "Kò sí nǹkan kan"], answer: 2, why: "Carbohydrate ni orísun agbára kíákíá pàtàkì fún ara." },
          { objective: "O1", q: "Ta ni ẹni tó tọ́ láti sọ iye oúnjẹ gangan fún ọ?", options: ["Onímọ̀ oúnjẹ (registered dietitian)", "Olùrànlọ́wọ́ AI", "Gbajúmọ̀ orí ìkànnì àjọlò", "Ọmọ ẹgbẹ́ eré rẹ"], answer: 0, why: "Àwọn onímọ̀ oúnjẹ ló ń fúnni ní ìmọ̀ràn oúnjẹ fún ẹnìkọ̀ọ̀kan." },
          { objective: "O2", q: "Ní ọjọ́ ìdíje, ìpanu wo ló dára jù?", options: ["Ohun mímu agbára tuntun tí o kò tíì dán wò rí", "Kò sí nǹkan kan ní gbogbo ọjọ́", "Oúnjẹ ọlọ́ràá ńlá gẹ́lẹ́ ṣáájú", "Ìpanu kékeré tí o mọ̀ bí èso"], answer: 3, why: "Oúnjẹ tí o mọ̀ tí ó sì rọrùn ló láìléwu jù ní ọjọ́ ìdíje." },
          { objective: "O2", q: "Òòyì ń kọ́ ọmọ ẹgbẹ́ eré rẹ, ọkàn rẹ̀ kò sì balẹ̀ nígbà ìdánrawò nínú ooru. Kí ni o máa ṣe?", options: ["Sọ fún un pé kí ó tẹ̀síwájú", "Sọ fún kóòṣì tàbí olùtọ́jú eléré ìdárayá lẹ́sẹ̀kẹsẹ̀", "Dúró títí ìdánrawò bá parí", "Fún un ní ohun mímu agbára kí o sì lọ"], answer: 1, why: "Àwọn àmì wọ̀nyí lè jẹ́ pàjáwìrì; àwọn òṣìṣẹ́ gbọ́dọ̀ gbé ìgbésẹ̀ báyìí." },
          { objective: "O3", q: "Ìbéèrè wo ni kò yẹ kí o fi ránṣẹ́ sí olùrànlọ́wọ́ AI?", options: ["Àkọsílẹ̀ ọjà fún owó $50", "Iye àfikún oúnjẹ (supplement) fún ọ", "Èrò oúnjẹ máíkrowéfù", "Ọ̀nà síse oúnjẹ pẹ̀lú ẹ̀wà"], answer: 1, why: "Iye àfikún oúnjẹ dá lórí ìlera rẹ; béèrè lọ́wọ́ onímọ̀ oúnjẹ tàbí dókítà." }
        ]
      }
    },
    {
      name: "Orí 2: Àṣà ìmúbọ̀sípò ara",
      lessons: [
        {
          objectives: ["O4"],
          title: "Oorun: irinṣẹ́ ìmúbọ̀sípò tó dára jù",
          minutes: 5,
          goal: "Ṣe ètò oorun tó rọrùn tí ó bá àkókò rẹ mu.",
          text: [
            "Nígbà oorun ni ara rẹ ń tún ara rẹ̀ ṣe, tí ọpọlọ rẹ sì ń pa ohun tí o kọ́ nígbà ìdánrawò mọ́. Àwọn ọ̀dọ́ sábà máa ń nílò oorun ju àwọn àgbàlagbà lọ, ọ̀pọ̀ eléré ìdárayá kò sì ń sùn tó.",
            "Ètò oorun ń ṣèrànwọ́: àkókò ìsùn àti ìjí tí kì í yí padà, pípa ojú-iboju ṣáájú ìsùn, yàrá tí ó tutù tí ó sì ṣókùnkùn, àti caffeine ní àárọ̀ nìkan. AI lè ràn ọ́ lọ́wọ́ láti ṣe ètò ìsùn yí ìdánrawò àárọ̀ kùtùkùtù tàbí ìdíje alẹ́ ká.",
            "Tí oorun kò bá sábà máa ń kùn ọ́, tí o bá ń hanrun gan-an, tàbí tí ó bá rẹ̀ ọ́ gan-an kódà lẹ́yìn tí o ti sùn, bá dókítà rẹ sọ̀rọ̀."
          ],
          steps: ["Yan àkókò ìjí tí kì í yí padà.", "Ka padà sẹ́yìn dé àkókò ìsùn tí yóò fún ọ ní oorun tó tó.", "Yan àkókò pípa ojú-iboju ṣáájú ìsùn.", "Mu caffeine ní àárọ̀ nìkan.", "Kọ iye wákàtí tí o sùn sílẹ̀ fún ọ̀sẹ̀ kan."],
          words: [["Ètò oorun", "àwọn ìgbésẹ̀ kan náà ní àkókò kan náà ní alẹ́ kọ̀ọ̀kan tí ó ń ràn ọ́ lọ́wọ́ láti sùn."], ["Caffeine", "ohun amúnijí tí ó wà nínú kọfí, tíì, ọtí ẹlẹ́rìndòdò (soda) àti ohun mímu agbára, tí ó lè mú kí o má sùn."]],
          slides: [
            { title: "Ìdí tí oorun fi ṣe pàtàkì", bullets: ["Ara ń tún ara rẹ̀ ṣe", "Ọpọlọ ń pa ọgbọ́n eré mọ́", "Àwọn ọ̀dọ́ nílò ju àwọn àgbàlagbà lọ"] },
            { title: "Ètò tó rọrùn", bullets: ["Àkókò ìsùn àti ìjí kan náà", "Pa ojú-iboju ṣáájú ìsùn", "Yàrá tí ó tutù tí ó sì ṣókùnkùn", "Caffeine ní àárọ̀ nìkan"] },
            { title: "Lọ rí dókítà rẹ tí", bullets: ["Oorun kò bá sábà máa ń kùn ọ́", "O bá ń hanrun gan-an", "Ó bá ń rẹ̀ ọ́ nígbà gbogbo"] }
          ],
          tryIt: "Béèrè lọ́wọ́ olùrànlọ́wọ́ AI pé: \"Mo ní ìdánrawò ní 6 am ní ọjọ́ iṣẹ́, ìdíje sì ń parí ní 9 pm ní ọjọ́ Ẹtì. Ràn mí lọ́wọ́ láti ṣe ètò oorun tó rọrùn.\" Yan àkókò ìsùn rẹ, kí o sì kọ oorun rẹ sílẹ̀ fún alẹ́ mẹ́ta tó ń bọ̀.",
          youCanNow: "ṣe ètò oorun tó rọrùn kí o sì máa ṣàkọsílẹ̀ rẹ̀.",
          quickCheck: [
            { objective: "O4", q: "Èwo ló jẹ́ apá kan ètò oorun tó dára?", options: ["Caffeine ní alẹ́", "Àkókò ìsùn tó yàtọ̀ ní alẹ́ kọ̀ọ̀kan", "Yàrá tí ó mọ́lẹ̀ tí ó sì gbóná", "Àkókò ìsùn àti ìjí tí kì í yí padà"], answer: 3, why: "Àkókò tí kì í yí padà, pípa ojú-iboju, yàrá tí ó tutù tí ó sì ṣókùnkùn àti caffeine ní àárọ̀ ń ran oorun lọ́wọ́." },
            { objective: "O4", q: "Ìdánrawò ń bẹ̀rẹ̀ ní 6 am. Báwo ni o ṣe máa yan àkókò ìsùn rẹ?", options: ["Yan àkókò ìjí rẹ, lẹ́yìn náà ka padà sẹ́yìn dé àkókò ìsùn tí yóò fún ọ ní oorun tó tó", "Sùn nígbàkígbà tí o bá parí lórí fóònù rẹ", "Sùn pẹ́ ní ọjọ́ ìdánrawò", "Má sùn ṣáájú ìdánrawò àárọ̀ kùtùkùtù"], answer: 0, why: "Kíka padà sẹ́yìn láti àkókò ìjí tí kì í yí padà ń fún ọ ní àkókò ìsùn pẹ̀lú oorun tó tó." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ọjọ́ ìsinmi, ara ríro àti ìrora",
          minutes: 5,
          goal: "Dá ara ríro lásán lẹ́yìn ìdánrawò yàtọ̀ sí ìrora tí ó nílò akọ́ṣẹ́mọṣẹ́.",
          text: [
            "Ọjọ́ ìsinmi jẹ́ apá kan ìdánrawò, kì í ṣe ìsinmi kúrò nínú rẹ̀. Kóòṣì rẹ ló ń ṣètò wọn kí ara rẹ lè mọ́ ọn lára kí ó sì lágbára sí i.",
            "Ara ríro lásán dàbí àárẹ̀ iṣan tí kò mú, tí ó tàn ká, ní ọjọ́ kan tàbí méjì lẹ́yìn ìdánrawò líle, ó sì ń dín kù díẹ̀díẹ̀. Ìrora tí ó mú, tí ó wà ní oríkèé tàbí egungun, tí ó ń jẹ́ kí o tiro, tí ó ń fa wíwú, tàbí tí ó ń burú sí i yàtọ̀: dúró kí o sì sọ fún olùtọ́jú eléré ìdárayá rẹ.",
            "Ìpalára orí nílò ìtọ́jú pàtàkì. Tí ohun kan bá lu orí ìwọ tàbí ọmọ ẹgbẹ́ eré rẹ, tí ẹ̀fọ́rí, òòyì tàbí ìdàrúdàpọ̀ bá dé, tàbí tí ara kò bá \"dá\", dúró ṣíṣeré kí o sì sọ fún kóòṣì tàbí olùtọ́jú eléré ìdárayá rẹ. Ẹ̀kọ́ ọ̀fẹ́ HEADS UP ti CDC (àjọ ìlera ìjọba US) ń ṣàlàyé àwọn àmì náà."
          ],
          steps: ["Kíyèsí ibi tí ó ti ń dùn ọ́ àti bí ó ṣe ń dùn ọ́.", "Kò mú, ó tàn ká, ó sì ń dín kù: ara ríro lásán ni.", "Ó mú, ó wà ní oríkèé, wíwú, títiro tàbí ó ń burú sí i: sọ fún olùtọ́jú eléré ìdárayá rẹ.", "Ìlù orí èyíkéyìí tí ó ní àmì: dúró kí o sì sọ fún àwọn òṣìṣẹ́."],
          words: [["Ara ríro", "àárẹ̀ iṣan tí kò mú lẹ́yìn ìdánrawò líle, tí ó ń lọ ní ọjọ́ kan tàbí méjì."], ["Concussion (ìpalára ọpọlọ)", "ìpalára ọpọlọ láti inú ìlù tàbí mímì líle sí orí tàbí ara."]],
          slides: [
            { title: "Ọjọ́ ìsinmi jẹ́ ìdánrawò", bullets: ["Ara rẹ ń mú ara bá a mu ní ọjọ́ ìsinmi", "Tẹ̀lé ètò tí kóòṣì rẹ ṣe"] },
            { title: "Ara ríro àti ìrora", bullets: ["Ara ríro: kò mú, ó tàn ká, ó ń dín kù", "Ìrora: ó mú, oríkèé, wíwú, títiro, ó ń burú sí i"] },
            { title: "Ìlù orí?", bullets: ["Ẹ̀fọ́rí, òòyì, ìdàrúdàpọ̀, ara kò \"dá\"", "Dúró ṣíṣeré kí o sì sọ fún àwọn òṣìṣẹ́", "Kọ́ àwọn àmì: CDC HEADS UP"] }
          ],
          sources: [{ name: "CDC: Ẹ̀kọ́ HEADS UP nípa concussion", url: "https://www.cdc.gov/heads-up/index.html" }],
          tryIt: "Kọ àkọsílẹ̀ méjì: àwọn àmì ara ríro lásán àti àwọn àmì ìrora tí o gbọ́dọ̀ sọ. Lẹ́yìn náà kọ ẹni tí o máa sọ fún nínú ẹgbẹ́ eré rẹ àti bí o ṣe máa kàn sí i.",
          youCanNow: "dá ara ríro lásán yàtọ̀ sí ìrora tí ó nílò olùtọ́jú eléré ìdárayá rẹ, kí o sì mọ ohun tí o máa ṣe lẹ́yìn ìlù orí.",
          quickCheck: [
            { objective: "O5", q: "Èwo ló jẹ́ àmì ìrora tí ó nílò olùtọ́jú eléré ìdárayá rẹ?", options: ["Àárẹ̀ tí kò mú ní ẹsẹ̀ rẹ ní ọjọ́ kejì ìdánrawò líle", "Ìrora mímú ní oríkèé tí ó ń burú sí i", "Ara ríro díẹ̀ tí ó ń lọ ní ọjọ́ méjì", "Ebi lẹ́yìn ìdánrawò"], answer: 1, why: "Ìrora mímú, ìrora oríkèé tàbí egungun, wíwú, títiro tàbí ìrora tí ó ń burú sí i nílò akọ́ṣẹ́mọṣẹ́." },
            { objective: "O5", q: "Ohun kan lu orí ọmọ ẹgbẹ́ eré rẹ, ó sì sọ pé òòyì ń kọ́ òun. Kí ló máa ṣẹlẹ̀?", options: ["Ó máa tẹ̀síwájú tí ó bá fẹ́", "Ó máa sinmi fún eré kan", "Ó máa dúró ṣíṣeré, ìwọ yóò sì sọ fún kóòṣì tàbí olùtọ́jú eléré ìdárayá", "Ó máa mu omi kí ó sì padà wọlé"], answer: 2, why: "Ìlù orí tí ó ní àmì túmọ̀ sí dídúró ṣíṣeré àti sísọ fún àwọn òṣìṣẹ́." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ṣíṣe ètò ìmúbọ̀sípò ara rẹ",
          minutes: 5,
          goal: "Fi oúnjẹ, omi àti oorun sínú ètò ìmúbọ̀sípò ọ̀sẹ̀ kan, kí o sì jẹ́ kí akọ́ṣẹ́mọṣẹ́ ṣàyẹ̀wò rẹ̀.",
          text: [
            "Báyìí, kó gbogbo rẹ̀ papọ̀. Ètò ọ̀sẹ̀ rẹ ní oúnjẹ yí ìdánrawò ká, ètò ọjọ́ ìdíje, àṣà mímu omi àti ètò oorun.",
            "Ní kí olùrànlọ́wọ́ AI kó wọn papọ̀: \"Àkókò ìdánrawò àti ìdíje mi nìyí, owó mi àti ilé ìdáná mi. Ṣe tábìlì ọ̀sẹ̀ kan pẹ̀lú oúnjẹ, ìpanu, ìránnilétí omi àti àkókò ìsùn.\" Kọ́kọ́ yọ gbogbo ìsọfúnni ìlera àdáni kúrò.",
            "Lẹ́yìn náà, mú un lọ bá onímọ̀ oúnjẹ, olùtọ́jú eléré ìdárayá rẹ tàbí dókítà rẹ. Béèrè pé: \"Ṣé èyí bá ara mi àti eré mi mu? Kí ni ìwọ yóò yí padà?\" Ètò tí wọ́n bá ọ tún ṣe ni èyí tí o máa tẹ̀lé. Ilé-ẹ̀kọ́, ẹgbẹ́ eré tàbí ilé ìwòsàn akẹ́kọ̀ọ́ lè so ọ́ pọ̀ mọ́ ọ̀kan."
          ],
          steps: ["Kó àlàyé àkókò rẹ, owó rẹ àti ilé ìdáná rẹ jọ.", "Ní kí AI ṣe tábìlì ọ̀sẹ̀ kan: oúnjẹ, ìpanu, omi, àkókò ìsùn.", "Yọ ìsọfúnni ìlera àdáni kúrò.", "Fi han onímọ̀ oúnjẹ, olùtọ́jú eléré ìdárayá tàbí dókítà.", "Tún un ṣe pẹ̀lú ìmọ̀ràn wọn."],
          words: [["Ètò ìmúbọ̀sípò ara", "ètò ọ̀sẹ̀ rẹ fún oúnjẹ, omi, oorun àti ìsinmi tí ó ń ran ara rẹ lọ́wọ́ láti padà bọ̀ sípò."]],
          slides: [
            { title: "Ètò ìmúbọ̀sípò ara rẹ", bullets: ["Oúnjẹ yí ìdánrawò ká", "Ètò ọjọ́ ìdíje", "Àṣà mímu omi", "Ètò oorun"] },
            { title: "AI ń kọ àkọ́pẹrẹ rẹ̀", bullets: ["Tábìlì ọ̀sẹ̀ kan", "Kò sí ìsọfúnni ìlera àdáni"] },
            { title: "Akọ́ṣẹ́mọṣẹ́ ń ṣàyẹ̀wò rẹ̀", bullets: ["Onímọ̀ oúnjẹ, olùtọ́jú eléré ìdárayá tàbí dókítà", "\"Kí ni ìwọ yóò yí padà?\"", "Tẹ̀lé ètò tí a ti tún ṣe"] }
          ],
          sources: [{ name: "Academy of Nutrition and Dietetics: Wá onímọ̀ oúnjẹ", url: "https://www.eatright.org/find-a-nutrition-expert" }],
          tryIt: "Iṣẹ́ ìkẹyìn: lo olùrànlọ́wọ́ AI láti kọ àkọ́pẹrẹ ètò oúnjẹ àti ìmúbọ̀sípò ara rẹ fún ọ̀sẹ̀ kan, yọ ìsọfúnni ìlera àdáni kúrò, kí o sì fi han onímọ̀ oúnjẹ, olùtọ́jú eléré ìdárayá tàbí dókítà.",
          youCanNow: "ṣe ètò oúnjẹ, omi àti oorun ọ̀sẹ̀ kan pẹ̀lú AI kí o sì jẹ́ kí akọ́ṣẹ́mọṣẹ́ ṣàyẹ̀wò rẹ̀.",
          quickCheck: [
            { objective: "O6", q: "Kí ló wà nínú ètò ìmúbọ̀sípò ara ọ̀sẹ̀ kan rẹ?", options: ["Oúnjẹ àti ìpanu, ìránnilétí omi àti àkókò ìsùn", "Ìdánrawò rẹ nìkan", "Àkókò ìdíje rẹ nìkan", "Àkọsílẹ̀ àfikún oúnjẹ (supplement)"], answer: 0, why: "Ètò náà kó oúnjẹ, omi àti oorun papọ̀ yí àkókò rẹ ká." },
            { objective: "O6", q: "Olùtọ́jú eléré ìdárayá rẹ dábàá ìyípadà sí ètò tí AI kọ fún ọ. Kí ni o máa ṣe?", options: ["Tẹ̀lé ti AI", "Ní kí AI bá a jiyàn", "Lo ìdajì ọ̀kọ̀ọ̀kan", "Tún ètò náà ṣe pẹ̀lú ìmọ̀ràn wọn kí o sì tẹ̀lé èyí tuntun"], answer: 3, why: "Ètò tí akọ́ṣẹ́mọṣẹ́ bá ọ tún ṣe ni èyí tí o máa tẹ̀lé." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Àṣà ìmúbọ̀sípò ara",
        questions: [
          { objective: "O4", q: "Kí ló dé tí oorun fi ṣe pàtàkì fún eléré ìdárayá?", options: ["Kò ṣe pàtàkì", "Ó ń rọ́pò ìdánrawò", "Fún ìwọ̀n ara nìkan", "Ara ń tún ara rẹ̀ ṣe, ọpọlọ sì ń pa ọgbọ́n eré mọ́"], answer: 3, why: "Nígbà oorun ni àtúnṣe ara àti ẹ̀kọ́ ń ṣẹlẹ̀." },
          { objective: "O4", q: "Èwo ló jẹ́ apá kan ètò oorun tó dára?", options: ["Pípa ojú-iboju ṣáájú ìsùn", "Ohun mímu agbára ní alẹ́", "Àkókò ìsùn tó yàtọ̀ ní alẹ́ kọ̀ọ̀kan", "Fóònù lórí ibùsùn títí oorun yóò fi kùn ọ́"], answer: 0, why: "Pípa ojú-iboju ṣáájú ìsùn ń ràn ọ́ lọ́wọ́ láti sùn." },
          { objective: "O5", q: "Orúnkún rẹ ní ìrora mímú àti wíwú lẹ́yìn ìdánrawò. Kí ni o máa ṣe?", options: ["Fojú fò ó", "Béèrè ìtọ́jú lọ́wọ́ AI", "Sọ fún olùtọ́jú eléré ìdárayá rẹ", "Sá eré sí i kí ó lè tú"], answer: 2, why: "Ìrora mímú àti wíwú nílò akọ́ṣẹ́mọṣẹ́." },
          { objective: "O5", q: "Òòyì ń kọ́ ọmọ ẹgbẹ́ eré rẹ, ara rẹ̀ kò sì \"dá\" lẹ́yìn ìlù orí. Kí ló yẹ kí ó ṣẹlẹ̀?", options: ["Kí ó tẹ̀síwájú", "Kí ó sinmi díẹ̀ kí ó sì padà wọlé", "Kí ó béèrè lọ́wọ́ app kan", "Kí ó dúró ṣíṣeré kí ẹ sì sọ fún àwọn òṣìṣẹ́"], answer: 3, why: "Ó lè jẹ́ concussion: dúró kí o sì sọ fún kóòṣì tàbí olùtọ́jú eléré ìdárayá." },
          { objective: "O6", q: "Ta ló yẹ kí ó ṣàyẹ̀wò ètò ìmúbọ̀sípò tí AI kọ fún ọ?", options: ["Ẹnikẹ́ni ní abala ọ̀rọ̀ ìwòye lórí ayélujára", "Onímọ̀ oúnjẹ, olùtọ́jú eléré ìdárayá tàbí dókítà", "AI náà lẹ́ẹ̀kan sí i", "Kò sí ẹnìkan"], answer: 1, why: "Akọ́ṣẹ́mọṣẹ́ lè mú ètò náà bá ara rẹ àti eré rẹ mu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Oúnjẹ àti Ìmúbọ̀sípò Ara pẹ̀lú AI",
    questions: [
      { objective: "O1", q: "Oúnjẹ wo ló jẹ́ protein ní pàtàkì?", options: ["Ìrẹsì", "Àpù (apple)", "Ẹyin", "Búrẹ́dì"], answer: 2, why: "Ẹyin jẹ́ oúnjẹ protein." },
      { objective: "O1", q: "Apá pàtàkì mẹ́ta àwo oúnjẹ tó péye ni:", options: ["Carbohydrate, protein, èso àti ẹ̀fọ́", "Súìtì, ọtí ẹlẹ́rìndòdò, ìpanu díndín", "Protein nìkan", "Ẹ̀fọ́ nìkan"], answer: 0, why: "Apá mẹ́ta yẹn ń bójú tó agbára, àtúnṣe ara àti fítámì." },
      { objective: "O1", q: "Ọjọ́ ìdánrawò líle sábà máa ń béèrè:", options: ["Oúnjẹ agbára púpọ̀ sí i", "Fífo oúnjẹ", "Kò sí omi", "Ìpanu nìkan"], answer: 0, why: "Ìdánrawò púpọ̀ sábà máa ń túmọ̀ sí pé o nílò agbára púpọ̀ sí i." },
      { objective: "O1", q: "Ọ̀rọ̀ oúnjẹ tàbí bí ara rẹ ṣe rí ń kó ìdààmú bá ọ. O yẹ kí o:", options: ["Dẹ́kun jíjẹun", "Fi pamọ́", "Bá ẹnìkan tí o fọkàn tán sọ̀rọ̀, àti olùtọ́jú eléré ìdárayá tàbí dókítà rẹ", "Béèrè ètò oúnjẹ lọ́wọ́ AI"], answer: 2, why: "Àwọn ìdààmú wọ̀nyí yẹ fún ìrànlọ́wọ́ gidi." },
      { objective: "O2", q: "Ní ọjọ́ ìdíje, jẹ:", options: ["Oúnjẹ tuntun pátápátá", "Oúnjẹ tí o ti mọ̀", "Kò sí nǹkan ní gbogbo ọjọ́", "Àfikún oúnjẹ tuntun"], answer: 1, why: "Oúnjẹ tí o mọ̀ ló láìléwu jù." },
      { objective: "O2", q: "Ìgbà wo ló yẹ kí o mu omi?", options: ["Nígbà ìdíje nìkan", "Kì í ṣe ṣáájú ìdíje láéláé", "Nígbà tí wọ́n bá sọ fún ọ nìkan", "Ní gbogbo ọjọ́, púpọ̀ sí i nínú ooru"], answer: 3, why: "Mímu omi jẹ́ àṣà gbogbo ọjọ́." },
      { objective: "O2", q: "Èwo ló lè jẹ́ àmì pé o nílò omi púpọ̀ sí i?", options: ["Ara tí ó sinmi dáadáa", "Èrò tí ó yé kedere", "Ìtọ̀ tí ó dúdú àti ẹ̀fọ́rí", "Oorun tó dára"], answer: 2, why: "Ìtọ̀ tí ó dúdú, ẹ̀fọ́rí àti iṣan wíwọ lè fihàn pé omi kò tó nínú ara." },
      { objective: "O2", q: "Lẹ́yìn ìdánrawò líle, ìpanu ìmúbọ̀sípò ní:", options: ["Omi nìkan", "Súìtì nìkan", "Kò sí nǹkan", "Carbohydrate àti protein"], answer: 3, why: "Carbohydrate ń kún agbára padà; protein ń ran àtúnṣe ara lọ́wọ́." },
      { objective: "O3", q: "Kí ló yẹ kí o sọ fún AI láti rí èrò oúnjẹ tó wúlò?", options: ["Àkókò rẹ, owó rẹ àti ilé ìdáná rẹ", "Ìwé ìtọ́jú rẹ", "Ọ̀rọ̀ aṣínà rẹ", "Káàdì báńkì rẹ"], answer: 0, why: "Àwọn àlàyé yẹn ń jẹ́ kí èrò náà bá ayé rẹ mu." },
      { objective: "O3", q: "Èwo ni kò yẹ kí o béèrè lọ́wọ́ AI?", options: ["Ọ̀nà síse oúnjẹ máíkrowéfù", "Iye kalori fún dídín ìwọ̀n ara kù", "Àkọsílẹ̀ ọjà", "Èrò oúnjẹ pẹ̀lú ẹ̀wà"], answer: 1, why: "Iye kalori dá lórí ìlera rẹ; béèrè lọ́wọ́ onímọ̀ oúnjẹ." },
      { objective: "O3", q: "Báwo ló ṣe yẹ kí o sọ nípa ara àìgbà oúnjẹ (allergy) fún AI?", options: ["Nípa fífi ìwé ìtọ́jú rẹ sínú rẹ̀", "Nípa títẹ ọ̀rọ̀ tí dókítà rẹ kọ", "Ní ọ̀rọ̀ gbogbogbò, bí \"kò sí ẹ̀pà\"", "Má ṣe sọ ọ́"], answer: 2, why: "Ọ̀rọ̀ gbogbogbò ń fún ọ ní èrò tí kò léwu láìfi ìwé ìtọ́jú hàn." },
      { objective: "O3", q: "Lẹ́yìn tí AI bá ṣe àkọsílẹ̀ ọjà, o yẹ kí o:", options: ["Ṣàyẹ̀wò iye owó ní ilé ìtajà rẹ", "Gba iye owó náà gbọ́", "Ra gbogbo nǹkan lẹ́ẹ̀mejì", "Gbé e sórí ayélujára"], answer: 0, why: "AI kò lè mọ iye owó gidi ní ilé ìtajà rẹ." },
      { objective: "O3", q: "Àfikún oúnjẹ (supplement) léwu nítorí:", options: ["Wọ́n máa ń lòdì sí òfin nígbà gbogbo", "Ọ̀fẹ́ ni wọ́n", "Àwọn kóòṣì ló ń tà wọ́n", "FDA (àjọ ìjọba US) kì í ṣàyẹ̀wò wọn kí wọ́n tó tà wọ́n, àwọn kan sì ní ohun tí a kà léèwọ̀"], answer: 3, why: "USADA (àjọ US tí ń gbógun ti oògùn olóró nínú eré ìdárayá) kìlọ̀ nípa àfikún oúnjẹ tí a ti bà jẹ́ tàbí tí àkọlé rẹ̀ kò tọ́." },
      { objective: "O4", q: "Èwo ló ń ràn ọ́ lọ́wọ́ láti sùn?", options: ["Caffeine ní alẹ́", "Yàrá tí ó tutù tí ó sì ṣókùnkùn", "Wíwo fóònù lórí ibùsùn", "Àkókò ìsùn tó yàtọ̀ ní alẹ́ kọ̀ọ̀kan"], answer: 1, why: "Yàrá tí ó tutù tí ó sì ṣókùnkùn ń ran oorun lọ́wọ́." },
      { objective: "O4", q: "Ó máa ń rẹ̀ ọ́ gan-an nígbà gbogbo kódà lẹ́yìn tí o ti sùn. O yẹ kí o:", options: ["Mu ohun mímu agbára púpọ̀ sí i", "Bá dókítà rẹ sọ̀rọ̀", "Fojú fò ó", "Ṣe ìdánrawò líle sí i"], answer: 1, why: "Àárẹ̀ tí kò lọ jẹ́ ìdí láti rí dókítà." },
      { objective: "O5", q: "Ọjọ́ ìsinmi jẹ́:", options: ["Ìmẹ́lẹ́", "Èèwọ̀", "Fún àwọn tí ó farapa nìkan", "Apá kan ìdánrawò"], answer: 3, why: "Ara rẹ ń mú ara bá a mu, ó sì ń lágbára sí i ní ọjọ́ ìsinmi." },
      { objective: "O5", q: "Èwo ló dàbí ara ríro lásán?", options: ["Àárẹ̀ iṣan tí kò mú tí ó ń lọ ní ọjọ́ kan tàbí méjì", "Ìrora mímú ní oríkèé", "Wíwú àti títiro", "Ìrora tí ó ń burú sí i"], answer: 0, why: "Ara ríro lásán kò mú, ó sì ń lọ." },
      { objective: "O5", q: "Níbo ni o ti lè kọ́ àwọn àmì concussion lọ́fẹ̀ẹ́?", options: ["Àwòrán ẹ̀rín kan lórí ayélujára", "Ìpolówó ohun mímu eré ìdárayá", "CDC HEADS UP", "Kò sí ibì kankan"], answer: 2, why: "CDC ń pèsè ẹ̀kọ́ HEADS UP lọ́fẹ̀ẹ́." },
      { objective: "O6", q: "Kí o tó fi ètò rẹ sínú AI, yọ:", options: ["Àkókò ìdánrawò", "Owó rẹ", "Oúnjẹ tí o fẹ́ràn jù", "Ìsọfúnni ìlera àdáni"], answer: 3, why: "Ìsọfúnni ìlera gbọ́dọ̀ wà ní àdáni." },
      { objective: "O6", q: "Ètò tí o yẹ kí o tẹ̀lé ni:", options: ["Àkọ́pẹrẹ àkọ́kọ́ ti AI", "Èyí tí a tún ṣe pẹ̀lú onímọ̀ oúnjẹ, olùtọ́jú eléré ìdárayá tàbí dókítà", "Ètò gbajúmọ̀ orí ìkànnì àjọlò", "Ètò alátakò rẹ"], answer: 1, why: "Akọ́ṣẹ́mọṣẹ́ ń mú ètò náà bá ọ mu." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [1, 4, 8, 9, 13, 16, 18, 19]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Oúnjẹ tó péye", objective: "O1", notYet: "Oúnjẹ fo gbogbo irú oúnjẹ kan, tàbí kò sí oúnjẹ yí ìdánrawò ká.", meets: "Gbogbo oúnjẹ pàtàkì ní carbohydrate, protein, àti èso tàbí ẹ̀fọ́.", exceeds: "Oúnjẹ agbára púpọ̀ sí i wà fún ọjọ́ líle, oúnjẹ náà sì jẹ́ èyí tí eléré ìdárayá náà ti fẹ́ràn tẹ́lẹ̀." },
      { name: "Ètò ọjọ́ ìdíje", objective: "O2", notYet: "Kò sí àkókò, kò sí ètò omi, tàbí oúnjẹ tuntun ní ọjọ́ ìdíje.", meets: "Oúnjẹ tí ó mọ̀ ní wákàtí díẹ̀ ṣáájú, ìpanu kékeré nígbà tí ìbẹ̀rẹ̀ bá sún mọ́, omi ní gbogbo ọjọ́ àti ìpanu ìmúbọ̀sípò lẹ́yìn rẹ̀.", exceeds: "Ó ní ètò fún ooru àti àwọn àmì ìkìlọ̀ tí ó túmọ̀ sí dúró kí o sì sọ fún àwọn òṣìṣẹ́." },
      { name: "Àkọsílẹ̀ ọjà tí ó bá owó mu", objective: "O3", notYet: "Kò sí àkọsílẹ̀ ọjà, tàbí ètò náà béèrè iye kalori tàbí iye àfikún oúnjẹ lọ́wọ́ AI.", meets: "Àkọsílẹ̀ ọjà tí ó bá owó àti ilé ìdáná tí a sọ mu, pẹ̀lú ara àìgbà oúnjẹ tí a sọ ní ọ̀rọ̀ gbogbogbò.", exceeds: "A ti ṣàyẹ̀wò iye owó ní ilé ìtajà eléré ìdárayá náà, a sì ti tún àkọsílẹ̀ náà ṣe." },
      { name: "Ètò oorun", objective: "O4", notYet: "Kò sí àkókò ìjí tàbí àkókò ìsùn tí kì í yí padà.", meets: "Àkókò ìjí, àkókò ìsùn àti àkókò pípa ojú-iboju tí kì í yí padà, tí ó bá àkókò rẹ̀ mu.", exceeds: "A ti kọ wákàtí oorun sílẹ̀ fún ọ̀sẹ̀ kan, a sì ti tún ètò náà ṣe yí ìdánrawò àárọ̀ kùtùkùtù tàbí ìdíje alẹ́ ká." },
      { name: "Àyẹ̀wò akọ́ṣẹ́mọṣẹ́", objective: "O6", notYet: "A kò fi ètò náà han akọ́ṣẹ́mọṣẹ́, tàbí ó ní ìsọfúnni ìlera àdáni nínú.", meets: "A yọ ìsọfúnni àdáni kúrò, a fi ètò náà han onímọ̀ oúnjẹ, olùtọ́jú eléré ìdárayá tàbí dókítà, a sì tún un ṣe pẹ̀lú ìmọ̀ràn wọn.", exceeds: "Eléré ìdárayá náà kọ ohun tí a yí padà àti ìdí rẹ̀ sílẹ̀." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí iṣẹ́ ìkẹyìn tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn ń tẹ̀lé ètò oúnjẹ àti oorun tí a ti ṣàyẹ̀wò ní ọjọ́ 30 lẹ́yìn náà (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn bá onímọ̀ oúnjẹ, olùtọ́jú eléré ìdárayá tàbí dókítà sọ̀rọ̀ nípa ètò wọn",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn sọ fún àwọn òṣìṣẹ́ nípa ìrora mímú, àmì àìsàn ooru tàbí ìlù orí dípò kí wọ́n máa ṣeré lọ"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́ (ChatGPT, Microsoft Copilot tàbí Google Gemini)",
      "Àkókò ìdánrawò àti ìdíje rẹ, owó oúnjẹ ọ̀sẹ̀ rẹ àti àlàyé ilé ìdáná rẹ",
      "Ọ̀nà láti kàn sí onímọ̀ oúnjẹ, olùtọ́jú eléré ìdárayá, ilé ìwòsàn akẹ́kọ̀ọ́ tàbí dókítà",
      "Nǹkan bí ìṣẹ́jú 60, pẹ̀lú àkókò láti pàdé akọ́ṣẹ́mọṣẹ́ náà"
    ],
    facilitatorNotes: [
      "Sọ kedere pé ẹ̀kọ́ gbogbogbò ni èyí; má ṣe fún ẹnìkọ̀ọ̀kan ní ìmọ̀ràn nípa kalori, ìwọ̀n ara tàbí àfikún oúnjẹ níwájú ẹgbẹ́.",
      "Ṣọ́ra pẹ̀lú ọ̀rọ̀ ìwọ̀n ara àti bí ara ṣe rí: má ṣe wọn ìwọ̀n eléré ìdárayá kankan tàbí fi wọ́n wé ara wọn, kí o sì mọ ẹni tí o máa rán ẹnìkan lọ sọ́dọ̀ rẹ̀ tí nǹkan bá ń ṣe é.",
      "Ṣètò ọ̀nà láti rí onímọ̀ oúnjẹ, olùtọ́jú eléré ìdárayá tàbí ilé ìwòsàn akẹ́kọ̀ọ́ ṣáájú iṣẹ́ ìkẹyìn, kí gbogbo eléré ìdárayá lè jẹ́ kí wọ́n ṣàyẹ̀wò ètò wọn.",
      "Ṣe àtúnyẹ̀wò àwọn àmì àìsàn ooru àti ìlù orí pẹ̀lú gbogbo ẹgbẹ́, kí o sì rí i dájú pé àwọn eléré ìdárayá mọ ẹni tí wọ́n máa sọ fún.",
      "Bọ̀wọ̀ fún owó oúnjẹ, ara àìgbà oúnjẹ, àti òfin oúnjẹ àṣà tàbí ẹ̀sìn nígbà tí o bá ń pín àpẹẹrẹ oúnjẹ."
    ]
  }
};

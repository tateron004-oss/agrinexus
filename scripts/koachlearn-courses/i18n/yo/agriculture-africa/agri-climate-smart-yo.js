"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-climate-smart.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_CSA = { name: "FAO: Ìwé ìtọ́kasí iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu (Climate-Smart Agriculture Sourcebook)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };
const KMD = { name: "Kenya Meteorological Department (àsọtẹ́lẹ̀ àsìkò, ìròyìn ojú-ọjọ́ fún àgbẹ̀)", url: "https://meteo.go.ke" };
const NIMET = { name: "Àjọ Ojú-ọjọ́ Nàìjíríà (NiMet)", url: "https://nimet.gov.ng" };
const CGIAR_MAIZE = { name: "CGIAR: Àgbàdo tó bá ojú-ọjọ́ mu (tó lè fara da ọ̀gbẹlẹ̀)", url: "https://www.cgiar.org/innovations/climate-smart-maize/" };
const ICIPE_PUSHPULL = { name: "icipe: Ọ̀nà push-pull dá kòkòrò fall armyworm dúró", url: "https://www.icipe.org/news/icipe-push-pull-technology-halts-fall-armyworm-rampage" };
const FAO_EO = { name: "FAO GIEWS: Wíwo ilẹ̀ láti ojú sátẹ́láìtì (àmì ọ̀gbẹlẹ̀ àti ewéko)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };

module.exports = {
  id: "agri-climate-smart-yo",
  lang: "yo",
  translationOf: "agri-climate-smart",
  category: "Agriculture (Africa)",
  name: "Iṣẹ́ Àgbẹ̀ Tó Bá Ojú-ọjọ́ Mu",
  skills: "Ṣíṣàlàyé iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu, Kíka àsọtẹ́lẹ̀ àsìkò ti ìjọba, Ṣíṣàkọsílẹ̀ àwọn ewu ojú-ọjọ́ oko rẹ, Yíyan ọ̀nà ìtọ́jú ilẹ̀ àti omi, Yíyan irè oko àti orísìí tó lè fara dà á, Lílo igi, ẹran ọ̀sìn àti ìdánilójú (insurance) láti pín ewu",
  outcome: "kọ ètò iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu fún oko tìrẹ, kí o sì bẹ̀rẹ̀ rẹ̀: àwọn ewu ojú-ọjọ́ tí oko náà ń dojú kọ jálẹ̀ ọdún, ohun tí àsọtẹ́lẹ̀ àsìkò ti ìjọba sọ, àti àwọn ọ̀nà ilẹ̀, omi, irè oko, igi, ẹran ọ̀sìn àti ìdánilójú tí o máa lò ní àsìkò yìí.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀ kékeré, àwọn ọ̀dọ́ àgbẹ̀, àwọn òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ (extension officer) àti àwọn olórí ẹgbẹ́ àgbẹ̀ ní Kenya, Nàìjíríà àti káàkiri Áfíríkà, tí wọ́n ń rí ọ̀dá tó gùn jù, òjò tó le jù, ooru tó pọ̀ jù àti àwọn kòkòrò tuntun, tí wọ́n sì fẹ́ ọ̀nà gidi láti jẹ́ kí ìkórè àti owó tó ń wọlé dúró sán-ún.",
    "Orí 1 ń ràn ọ́ lọ́wọ́ láti mọ ewu ojú-ọjọ́ lórí oko tìrẹ: ohun tí iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu túmọ̀ sí, bí o ṣe lè ka àsọtẹ́lẹ̀ àsìkò láti ọ̀dọ̀ àjọ ojú-ọjọ́ orílẹ̀-èdè rẹ, àti bí o ṣe lè ya kàlẹ́ńdà ewu ojú-ọjọ́ tó rọrùn. Orí 2 dá lórí àwọn ọ̀nà iṣẹ́: dídá ilẹ̀ àti omi dúró sórí oko, yíyan irè oko àti orísìí tó lè fara dà á, àti lílo igi, ẹran ọ̀sìn àti ìdánilójú láti pín ewu.",
    "Oko kọ̀ọ̀kan yàtọ̀. Lo ẹ̀kọ́ yìí pẹ̀lú ìmọ̀ràn òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀, ilé ìtajà ohun èlò oko àti ẹran (agrovet) tàbí ilé ìwádìí, kí o sì kọ́kọ́ dán ọ̀nà tuntun wò lórí ilẹ̀ kékeré. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ kan lórí oko rẹ. Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Kọ ètò iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu ní ojú-ewé kan fún oko rẹ (tàbí oko àpẹẹrẹ bí éékà 2 àgbàdo àti ẹ̀wà ní Machakos, tàbí éékà 3 ọkà bàbà àti ẹ̀wà (cowpea) ní Kano): kàlẹ́ńdà ewu ojú-ọjọ́ oṣù dé oṣù, ohun tí àsọtẹ́lẹ̀ àsìkò ti ìjọba fún àsìkò yìí sọ àti ọjọ́ tí o kà á, àti ó kéré tán ọ̀nà márùn-ún tí o máa lò (ó kéré tán ọ̀kan fún ilẹ̀ àti omi, ọ̀kan fún irè oko àti orísìí, àti ọ̀kan fún pínpín ewu), pẹ̀lú ìgbà tí o máa bẹ̀rẹ̀ ọ̀kọ̀ọ̀kan àti bí o ṣe máa mọ̀ bóyá ó ṣiṣẹ́.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀ kékeré, àwọn ọ̀dọ́ àgbẹ̀, àwọn òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ àti àwọn olórí ẹgbẹ́ àgbẹ̀ ní Kenya, Nàìjíríà àti káàkiri Áfíríkà tí wọ́n ń dojú kọ ọ̀dá tó gùn jù, òjò tó le jù, ooru tó pọ̀ jù àti àwọn kòkòrò tuntun.",
    startingPoint: "Wọ́n mọ ilẹ̀ wọn, irè oko wọn àti àwọn àsìkò wọn dáadáa, ọ̀pọ̀ nínú wọn sì ti ń lo àwọn ọ̀nà iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu láìpè wọ́n ní orúkọ yẹn. Díẹ̀ ló ń ka àsọtẹ́lẹ̀ àsìkò ti ìjọba, tí wọ́n ń ya kàlẹ́ńdà ewu ojú-ọjọ́, tàbí tí wọ́n ń ṣètò ọ̀nà láti pín ewu jálẹ̀ àsìkò kan.",
    gap: "Òjò tó ń yí padà àti àwọn kòkòrò tuntun ń jẹ́ kí ìkórè àti owó tó ń wọlé má dúró sán-ún. Àwọn àgbẹ̀ nílò láti ka àsọtẹ́lẹ̀ ti ìjọba, rí àwọn àkókò ewu nínú ọdún wọn, kí wọ́n sì yan àwọn ọ̀nà ilẹ̀, omi, irè oko, igi, ẹran ọ̀sìn àti ìdánilójú tó bá oko wọn mu, kí wọ́n dán wọn wò kí wọ́n tó lò wọ́n níbi gbogbo.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; ọ̀pọ̀ akẹ́kọ̀ọ́ ń lo Gẹ̀ẹ́sì gẹ́gẹ́ bí èdè kejì",
      "Ẹ̀rọ: fóònù lásán, rédíò tàbí ìwé ìròyìn ìdálẹ́kọ̀ọ́ àgbẹ̀; smartphone ń ṣèrànwọ́ ṣùgbọ́n kò pọn dandan",
      "Owó àti iṣẹ́ ọwọ́: bẹ̀rẹ̀ pẹ̀lú àwọn ọ̀nà tí kò wọ́n, tí a dán wò lórí ilẹ̀ kékeré",
      "Àsọtẹ́lẹ̀, orísìí irúgbìn, ìdánilójú àti àwọn àjọ alábòójútó yàtọ̀ láti orílẹ̀-èdè kan sí òmíràn: akẹ́kọ̀ọ́ ń ṣàyẹ̀wò KMD, NiMet tàbí àjọ ojú-ọjọ́ orílẹ̀-èdè wọn, àwọn òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ àti àwọn olùtajà tó ní ìwé àṣẹ",
      "Àkókò: akẹ́kọ̀ọ́ ń ṣe ẹ̀kọ́ láàárín iṣẹ́ oko àti àwọn àsìkò"
    ],
    prerequisites: "Kò sí."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àwọn ọ̀nà tí a ń lò lórí oko rẹ tàbí ní abúlé rẹ", action: "ṣàlàyé àwọn èròǹgbà mẹ́ta iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu, kí o sì ṣèdájọ́ bóyá ọ̀nà kọ̀ọ̀kan bá ojú-ọjọ́ mu", standard: "kí o dárúkọ èròǹgbà tí ọ̀nà kọ̀ọ̀kan ń ràn lọ́wọ́" },
    { id: "O2", condition: "Kí àsìkò òjò tó bẹ̀rẹ̀", action: "wá àsọtẹ́lẹ̀ àsìkò ti àjọ ojú-ọjọ́ orílẹ̀-èdè rẹ, kí o sì kọ ìyípadà méjì tí ó túmọ̀ sí fún ètò rẹ", standard: "kí o kọ ohun tí ó sọ, ọjọ́ tí o kà á, àti pé àǹfààní ló ń fúnni, kì í ṣe ìlérí" },
    { id: "O3", condition: "Fún oko tìrẹ tàbí oko àpẹẹrẹ", action: "ya kàlẹ́ńdà ewu ojú-ọjọ́ oṣù dé oṣù, kí o sì fa àyíká yí àwọn àkókò ewu ká", standard: "pẹ̀lú àwọn àsìkò, iṣẹ́ oko, àwọn ewu àti ó kéré tán àkókò ewu méjì tí a sàmì sí" },
    { id: "O4", condition: "Ní ìbámu pẹ̀lú bí ilẹ̀ oko rẹ ṣe tẹ̀ àti bí omi ṣe ń ṣàn lórí rẹ̀", action: "yan àwọn ọ̀nà ìtọ́jú ilẹ̀ àti omi tó bá a mu, kí o sì ṣètò ìdánwò kékeré", standard: "kí o fi ibi tí o dán wò wé ọ̀nà tí o máa ń lò" },
    { id: "O5", condition: "Ní ìbámu pẹ̀lú irè oko rẹ pàtàkì àti àwọn ewu àdúgbò", action: "yan àwọn orísìí tí a fọwọ́ sí tó lè fara da ọ̀gbẹlẹ̀ tàbí tó máa ń tètè gbó, irè oko kan tó le kojú ọ̀gbẹlẹ̀, àti ọ̀nà gbíngbìn tó ń dín ewu kù", standard: "kí o ra irúgbìn lọ́wọ́ àwọn olùtajà tí a forúkọ wọn sílẹ̀ nìkan" },
    { id: "O6", condition: "Yàtọ̀ sí irè oko rẹ pàtàkì", action: "ṣètò ó kéré tán ọ̀nà kan láti pín ewu pẹ̀lú igi, oúnjẹ àti omi ẹran ọ̀sìn, tàbí ìdánilójú (insurance)", standard: "kí o ṣàyẹ̀wò ohun tó ń mú ìdánilójú sanwó, àti pé ilé-iṣẹ́ ìdánilójú náà ní ìwé àṣẹ" }
  ],
  chapters: [
    {
      name: "Orí 1: Mímọ ewu ojú-ọjọ́ lórí oko rẹ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ohun tí iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu túmọ̀ sí",
          minutes: 5,
          goal: "Ṣàlàyé àwọn èròǹgbà mẹ́ta iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu, kí o sì ṣèdájọ́ bóyá ọ̀nà kan bá ojú-ọjọ́ mu.",
          text: [
            "Iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu (climate-smart agriculture, CSA) jẹ́ ọ̀nà yíyan iṣẹ́ oko pẹ̀lú ìyípadà ojú-ọjọ́ lọ́kàn. FAO (Àjọ Oúnjẹ àti Iṣẹ́ Àgbẹ̀ ti Àjọ Àgbáyé) ṣàpèjúwe èròǹgbà mẹ́ta: mú èso oko àti owó tó ń wọlé pọ̀ sí i lọ́nà tí yóò pẹ́; ran oko àti ìdílé lọ́wọ́ láti mú ara bá ìyípadà mu kí wọ́n sì le kojú ìpayà ojú-ọjọ́; àti dín èéfín afẹ́fẹ́ tí ń mú ayé gbóná kù tàbí mú un kúrò níbi tí ó bá ṣeé ṣe.",
            "FAO tẹnu mọ́ ọn pé ọ̀nà kan kò ní láti ṣe gbogbo mẹ́ta. Fún ọ̀pọ̀ àgbẹ̀ kékeré, oúnjẹ àti owó ló ṣáájú; dídín èéfín kù jẹ́ àfikún èrè. Ọ̀nà kan bá ojú-ọjọ́ mu tí ó bá bá oko rẹ mu, tí ó sì ń jẹ́ kí oko náà méso jù, kí ó sì le kojú ìpayà jù.",
            "Àpẹẹrẹ tí àwọn àgbẹ̀ ní Áfíríkà ti ń lò: ìbòlẹ̀ (mulch) àti ìtúlẹ̀ díẹ̀ láti jẹ́ kí ilẹ̀ tutù, kòtò gbíngbìn àti adágún omi, orísìí tó lè fara da ọ̀gbẹlẹ̀ tàbí tó máa ń tètè gbó, gbígbin àgbàdo pọ̀ mọ́ ẹ̀wà tàbí ẹ̀wà (cowpea), push-pull fún kòkòrò inú igi àgbàdo àti fall armyworm, igi lórí oko, oúnjẹ ẹran tó dára jù, àti ìdánilójú fún irè oko tàbí ẹran ọ̀sìn."
          ],
          words: [["Iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu (CSA)", "iṣẹ́ oko tí ó ń mú èso pọ̀ sí i, tí ó ń ran oko lọ́wọ́ láti bá ìyípadà ojú-ọjọ́ mu, tí ó sì ń dín èéfín kù níbi tí ó bá ṣeé ṣe."], ["Ìfaradà (resilience)", "agbára oko àti ìdílé láti kojú ìpayà bí ọ̀gbẹlẹ̀, kí wọ́n sì tètè padà bọ̀ sípò."], ["Mímú ara bá a mu (adaptation)", "yíyí ọ̀nà iṣẹ́ oko rẹ padà láti kojú ojú-ọjọ́ tó ń yí padà."]],
          slides: [
            { title: "Èròǹgbà mẹ́ta (FAO)", bullets: ["Mú èso oko àti owó tó ń wọlé pọ̀ sí i", "Mú ara bá a mu, kí o sì le kojú ìpayà", "Dín èéfín kù níbi tí ó bá ṣeé ṣe"] },
            { title: "Kì í ṣe gbogbo mẹ́ta lẹ́ẹ̀kan", bullets: ["Oúnjẹ àti owó ló ṣáájú", "Dídín èéfín kù jẹ́ àfikún èrè", "Ó bá oko rẹ mu + ó le kojú ìpayà = ó bá ojú-ọjọ́ mu"] },
            { title: "Àpẹẹrẹ ní Áfíríkà", bullets: ["Ìbòlẹ̀, ìtúlẹ̀ díẹ̀, kòtò gbíngbìn, adágún omi", "Orísìí tó fara da ọ̀gbẹlẹ̀, gbígbin irè pọ̀, push-pull", "Igi lórí oko, oúnjẹ ẹran, ìdánilójú"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Kọ ọ̀nà mẹ́ta tí a ti ń lò lórí oko rẹ tàbí ní abúlé rẹ sílẹ̀. Fún ọ̀kọ̀ọ̀kan, kọ èwo nínú èròǹgbà mẹ́ta CSA tí ó ń ràn lọ́wọ́ (èso oko, ìfaradà, èéfín).",
          youCanNow: "ṣàlàyé àwọn èròǹgbà mẹ́ta iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu, kí o sì ṣèdájọ́ bóyá ọ̀nà kan bá ojú-ọjọ́ mu.",
          quickCheck: [
            { objective: "O1", q: "Èwo ni ọ̀nà tó bá ojú-ọjọ́ mu tí àwọn àgbẹ̀ ní Áfíríkà ti ń lò?", options: ["Ìbòlẹ̀ (mulch) láti jẹ́ kí ilẹ̀ tutù", "Sísun gbogbo pàǹtírí irè oko", "Gbígbin irè kan ṣoṣo lọ́dọọdún", "Títúlẹ̀ oko ní ọ̀pọ̀ ìgbà"], answer: 0, why: "Ìbòlẹ̀ ń jẹ́ kí ilẹ̀ tutù kí ó sì wà ní bíbò, ó sì ń ran èso oko àti ìfaradà lọ́wọ́." },
            { objective: "O1", q: "Ọ̀nà kan ń mú èso oko rẹ pọ̀ sí i, ó sì ń ràn ọ́ lọ́wọ́ láti la ọ̀dá já, ṣùgbọ́n kò dín èéfín kù. Ṣé ó bá ojú-ọjọ́ mu?", options: ["Rárá; ó gbọ́dọ̀ ṣe gbogbo mẹ́ta", "Bẹ́ẹ̀ ni, tí ó bá bá oko rẹ mu tí ó sì ń mú èso àti ìfaradà dára sí i", "Kìkì tí ìjọba bá fọwọ́ sí i", "Kìkì tí ó bá jẹ́ tuntun"], answer: 1, why: "FAO sọ pé ọ̀nà kan kò ní láti dé gbogbo èròǹgbà mẹ́ta; fún àgbẹ̀ kékeré, oúnjẹ àti owó ló ṣáájú." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kíka àsọtẹ́lẹ̀ àsìkò ti ìjọba",
          minutes: 5,
          goal: "Wá àsọtẹ́lẹ̀ àsìkò ti àjọ ojú-ọjọ́ orílẹ̀-èdè rẹ, kí o sì lò ó láti ṣètò àsìkò náà.",
          text: [
            "Kí àsìkò òjò kọ̀ọ̀kan tó bẹ̀rẹ̀, àwọn àjọ ojú-ọjọ́ orílẹ̀-èdè máa ń gbé àsọtẹ́lẹ̀ àsìkò jáde: bóyá òjò máa ju ti àtẹ̀yìnwá lọ, máa dà bí ti àtẹ̀yìnwá, tàbí kò ní tó ti àtẹ̀yìnwá, àti ìgbà tí ó lè bẹ̀rẹ̀ àti tí ó lè parí. Ní Kenya, Kenya Meteorological Department (KMD) ń gbé àsọtẹ́lẹ̀ àsìkò àti ìròyìn ojú-ọjọ́ fún àgbẹ̀ jáde. Ní Nàìjíríà, Àjọ Ojú-ọjọ́ Nàìjíríà (NiMet) ń gbé àsọtẹ́lẹ̀ ojú-ọjọ́ àsìkò jáde. Àwọn orílẹ̀-èdè míì ní àjọ tiwọn; wọ́n tún máa ń sọ ọ̀pọ̀ àsọtẹ́lẹ̀ lórí rédíò, àwọn òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ náà sì máa ń sọ wọ́n.",
            "Àsọtẹ́lẹ̀ àsìkò ń fúnni ní àǹfààní, kì í ṣe ìlérí. \"Kò tó ti àtẹ̀yìnwá\" túmọ̀ sí pé àǹfààní pọ̀ jù pé òjò máa kéré ju ti tẹ́lẹ̀ lọ ní agbègbè rẹ, kì í ṣe pé ọ̀gbẹlẹ̀ dájú. Lò ó láti ṣàtúnṣe, má fi gbogbo nǹkan wewu: fún àpẹẹrẹ yan orísìí tó máa ń tètè gbó, gbìn ní ọjọ́ tó tọ́, ṣètò ìkórè omi òjò, tàbí dín ilẹ̀ irè tó ń mu omi púpọ̀ kù.",
            "Lo àsọtẹ́lẹ̀ ọjọ́ díẹ̀ (àwọn ọjọ́ díẹ̀ tó ń bọ̀) fún ìpinnu ojoojúmọ́, bí ìgbà tí o máa gbìn lẹ́yìn tí òjò bá bẹ̀rẹ̀, ìgbà tí o máa fín oògùn tàbí fi ajílẹ̀ kún un, àti ìgbà tí o máa kórè kí o sì sá a."
          ],
          steps: ["Wá ojú-òpó wẹ́ẹ̀bù, ètò rédíò tàbí ìwé ìròyìn ìdálẹ́kọ̀ọ́ àgbẹ̀ ti àjọ ojú-ọjọ́ orílẹ̀-èdè rẹ.", "Ka àsọtẹ́lẹ̀ àsìkò fún county tàbí ìpínlẹ̀ rẹ.", "Kọ sílẹ̀: ó ju ti àtẹ̀yìnwá, ó dà bí i, tàbí kò tó; ìgbà tí a retí pé òjò máa bẹ̀rẹ̀ àti parí.", "Kọ ìyípadà méjì tí o máa ṣe nítorí rẹ̀.", "Ṣàyẹ̀wò àsọtẹ́lẹ̀ ọjọ́ díẹ̀ fún ọjọ́ gbíngbìn, fífi ajílẹ̀ kún un àti ìkórè."],
          words: [["Àsọtẹ́lẹ̀ àsìkò", "ìfojúsọ́nà òjò àti ooru fún àsìkò tó ń bọ̀, tí a fún ní àǹfààní."], ["Ìbẹ̀rẹ̀ òjò (onset)", "ìbẹ̀rẹ̀ àsìkò òjò."], ["Ìròyìn ojú-ọjọ́ fún àgbẹ̀ (agrometeorological bulletin)", "ìròyìn ojú-ọjọ́ tí a kọ fún àwọn àgbẹ̀, tí ó so ojú-ọjọ́ mọ́ irè oko."]],
          slides: [
            { title: "Àsọtẹ́lẹ̀ àsìkò ti ìjọba", bullets: ["Kenya: Kenya Meteorological Department (KMD)", "Nàìjíríà: NiMet", "Lórí rédíò àti láti ọ̀dọ̀ òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀"] },
            { title: "Àǹfààní, kì í ṣe ìlérí", bullets: ["Ó ju ti àtẹ̀yìnwá, ó dà bí i, tàbí kò tó", "Ìgbà tí a retí pé òjò máa bẹ̀rẹ̀ àti parí", "Ṣàtúnṣe; má fi gbogbo nǹkan wewu"] },
            { title: "Lò ó", bullets: ["Orísìí tó ń tètè gbó tí òjò kò bá tó", "Ṣètò ìkórè omi òjò", "Àsọtẹ́lẹ̀ ọjọ́ díẹ̀ fún iṣẹ́ ojoojúmọ́"] }
          ],
          sources: [KMD, NIMET],
          tryIt: "Wá àsọtẹ́lẹ̀ àsìkò tuntun jù fún agbègbè rẹ láti ọ̀dọ̀ KMD, NiMet tàbí àjọ ojú-ọjọ́ orílẹ̀-èdè rẹ. Kọ ohun tí ó sọ, ọjọ́ tí o kà á, àti ìyípadà méjì tí o máa ṣe sí ètò rẹ.",
          youCanNow: "wá àsọtẹ́lẹ̀ àsìkò ti ìjọba, kí o sì lò ó láti ṣàtúnṣe ètò àsìkò rẹ.",
          quickCheck: [
            { objective: "O2", q: "Kí ni àsọtẹ́lẹ̀ àsìkò ń sọ fún ọ?", options: ["Iye òjò gan-an tí yóò rọ̀ lójoojúmọ́", "Iye owó àgbàdo", "Bóyá òjò lè ju ti àtẹ̀yìnwá, dà bí i, tàbí kò tó", "Irúgbìn tí o máa rà"], answer: 2, why: "Àsọtẹ́lẹ̀ àsìkò ń fúnni ní àǹfààní òjò tó ju, tó dà bí, tàbí tí kò tó ti àtẹ̀yìnwá, àti ìgbà tí òjò lè bẹ̀rẹ̀ àti parí." },
            { objective: "O2", q: "Àsọtẹ́lẹ̀ sọ pé òjò lè dá ní kùtùkùtù. Ìyípadà wo ló bọ́gbọ́n mu?", options: ["Gbin orísìí tó ń pẹ́ gbó", "Gbìn pẹ́ ju ti àtẹ̀yìnwá lọ gan-an", "Má ṣe nǹkan kan", "Yan orísìí tó ń tètè gbó"], answer: 3, why: "Orísìí tó ń tètè gbó lè gbó kí òjò tó dá." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Yíya kàlẹ́ńdà ewu ojú-ọjọ́ oko rẹ",
          minutes: 5,
          goal: "Ya kàlẹ́ńdà oṣù dé oṣù ti àwọn ewu ojú-ọjọ́ tí oko rẹ ń dojú kọ.",
          text: [
            "Kàlẹ́ńdà ewu ojú-ọjọ́ ń gbé irè oko àti ẹran ọ̀sìn rẹ sí ẹ̀gbẹ́ àwọn ewu oṣù kọ̀ọ̀kan. Ya ìlà ìnàró 12 fún àwọn oṣù. Ní ìlà àkọ́kọ́, kọ àwọn àsìkò rẹ (òjò gígùn, òjò kúkúrú, ẹ̀ẹ̀rùn, tàbí àsìkò òjò àti ẹ̀ẹ̀rùn ní ọ̀pọ̀ ibi ní Nàìjíríà). Nísàlẹ̀, kọ ohun tí o ń ṣe ní oṣù kọ̀ọ̀kan: ìmúrasílẹ̀ ilẹ̀, gbíngbìn, kíkọ èpò, fífi ajílẹ̀ kún un, ìkórè, sísá, títà, àti ìgbà tí ẹran nílò oúnjẹ àti omi jù.",
            "Lẹ́yìn náà sàmì sí àwọn ewu: òjò tó pẹ́ bẹ̀rẹ̀ tàbí tó tètè dá, ọ̀dá láàárín àsìkò òjò, ìjì líle àti omíyalé, ooru nígbà tí irè ń yọ òdòdó, kòkòrò àti àrùn tó ń tẹ̀lé ojú-ọjọ́ (fall armyworm, aphid, àrùn olu nígbà òjò), àti àdánù lẹ́yìn ìkórè nígbà tí a bá kó ọkà tó tutù pamọ́.",
            "Wá àwọn àkókò ewu: àwọn oṣù tí iṣẹ́ pàtàkì kan bá pàdé ewu ńlá, bí àgbàdo tó ń yọ òdòdó ní oṣù tí ọ̀dá sábà máa ń wà. Ibẹ̀ ni àwọn ọ̀nà tó bá ojú-ọjọ́ mu ti ń ṣèrànwọ́ jù. Béèrè lọ́wọ́ àwọn àgbẹ̀ àgbàlagbà bí ìlànà náà ṣe yí padà láti ọdún dé ọdún."
          ],
          steps: ["Ya ìlà ìnàró oṣù 12; kọ àwọn àsìkò rẹ.", "Kọ iṣẹ́ oko rẹ àti ohun tí ẹran nílò ní oṣù kọ̀ọ̀kan.", "Sàmì sí àwọn ewu ojú-ọjọ́ àti kòkòrò tó ń tẹ̀lé ojú-ọjọ́.", "Fa àyíká yí àwọn àkókò ewu ká, níbi tí iṣẹ́ pàtàkì ti pàdé ewu ńlá.", "Béèrè lọ́wọ́ àwọn àgbẹ̀ àgbàlagbà ohun tí ó ti yí padà."],
          words: [["Ọ̀dá (dry spell)", "ọjọ́ tàbí ọ̀sẹ̀ tí òjò tó wúlò kò rọ̀ láàárín àsìkò òjò."], ["Àkókò ewu", "ìgbà tí iṣẹ́ oko pàtàkì bá pàdé ewu ojú-ọjọ́ tó ga."]],
          slides: [
            { title: "Ìlà ìnàró méjìlá", bullets: ["Àwọn àsìkò lókè", "Iṣẹ́ oko àti ohun tí ẹran nílò ní oṣù kọ̀ọ̀kan"] },
            { title: "Sàmì sí àwọn ewu", bullets: ["Òjò tó pẹ́ bẹ̀rẹ̀, tó tètè dá, ọ̀dá", "Ìjì, omíyalé, ooru nígbà òdòdó", "Kòkòrò tó ń tẹ̀lé ojú-ọjọ́, ìpamọ́ tó tutù"] },
            { title: "Wá àwọn àkókò ewu", bullets: ["Iṣẹ́ pàtàkì pàdé ewu ńlá", "Ibi tí ọ̀nà CSA ti ń ṣèrànwọ́ jù", "Béèrè lọ́wọ́ àwọn àgbẹ̀ àgbàlagbà ohun tó yí padà"] }
          ],
          sources: [FAO_EO],
          tryIt: "Ya kàlẹ́ńdà ewu ojú-ọjọ́ fún oko rẹ sórí ìwé tàbí sínú spreadsheet lórí fóònù. Fa àyíká yí ó kéré tán àkókò ewu méjì ká.",
          youCanNow: "ya kàlẹ́ńdà ewu ojú-ọjọ́ fún oko rẹ, kí o sì wá àwọn àkókò ewu rẹ̀.",
          quickCheck: [
            { objective: "O3", q: "Kí ló ń lọ sí àwọn ìlà tó wà nísàlẹ̀ àwọn oṣù lórí kàlẹ́ńdà ewu ojú-ọjọ́?", options: ["Iṣẹ́ oko rẹ, ohun tí ẹran nílò àti àwọn ewu", "Iye owó ọjà nìkan", "Ọjọ́ ìbí àwọn ẹbí rẹ", "Àpapọ̀ iye òjò nìkan"], answer: 0, why: "Kàlẹ́ńdà náà ń gbé iṣẹ́ oko àti ohun tí ẹran nílò sí ẹ̀gbẹ́ àwọn ewu oṣù kọ̀ọ̀kan." },
            { objective: "O3", q: "O ń kó àgbàdo pamọ́ ní oṣù tí òjò sábà máa ń rọ̀. Kí ni o máa sàmì sí?", options: ["Kò sí nǹkan; ìpamọ́ kò léwu", "Ewu àdánù lẹ́yìn ìkórè nítorí ọkà tó tutù", "Ewu ọ̀gbẹlẹ̀", "Iṣẹ́ gbíngbìn"], answer: 1, why: "Ọkà tí a kó pamọ́ ní tútù ní oṣù òjò jẹ́ ewu àdánù lẹ́yìn ìkórè." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Mímọ ewu ojú-ọjọ́ lórí oko rẹ",
        questions: [
          { objective: "O1", q: "Èwo ni ọ̀kan lára èròǹgbà mẹ́ta FAO fún iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu?", options: ["Lo kẹ́míkà tó pọ̀ jù lọ", "Ran oko lọ́wọ́ láti mú ara bá a mu kí ó sì le kojú ìpayà", "Gbin irè kan ṣoṣo", "Gé gbogbo igi lulẹ̀"], answer: 1, why: "CSA ń wá èso oko, mímú ara bá a mu àti ìfaradà, àti dídín èéfín kù níbi tí ó bá ṣeé ṣe." },
          { objective: "O1", q: "Ṣé ọ̀nà tó bá ojú-ọjọ́ mu gbọ́dọ̀ dé gbogbo èròǹgbà mẹ́ta lẹ́ẹ̀kan náà?", options: ["Bẹ́ẹ̀ ni, nígbà gbogbo", "Ní Kenya nìkan", "Rárá; ó yẹ kí ó bá oko mu kí ó sì mú èso àti ìfaradà dára sí i", "Lórí oko ńlá nìkan"], answer: 2, why: "FAO sọ pé ọ̀nà kan kò ní láti dé gbogbo èròǹgbà; oúnjẹ àti owó ló ṣáájú." },
          { objective: "O2", q: "Àsọtẹ́lẹ̀ àsìkò sọ pé \"òjò kò ní tó ti àtẹ̀yìnwá\". Èyí túmọ̀ sí:", options: ["Àǹfààní pọ̀ jù pé òjò máa kéré ju ti tẹ́lẹ̀ lọ", "Ó dájú pé òjò kò ní rọ̀", "Ó dájú pé omíyalé máa wà", "Kò sí ohun tó wúlò"], answer: 0, why: "Àsọtẹ́lẹ̀ àsìkò ń fúnni ní àǹfààní, kì í ṣe ìdánilójú." },
          { objective: "O2", q: "Níbo ni àgbẹ̀ ní Nàìjíríà yẹ kí ó ti wá àsọtẹ́lẹ̀ àsìkò ti ìjọba?", options: ["Àhesọ ní ọjà", "Kàlẹ́ńdà ọdún tó kọjá", "Àjèjì kan lórí ìkànnì àjọlò", "NiMet tàbí àsọtẹ́lẹ̀ rẹ̀ tí òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ àti rédíò ń sọ"], answer: 3, why: "NiMet ni àjọ ojú-ọjọ́ ti ìjọba Nàìjíríà." },
          { objective: "O3", q: "Àkókò ewu lórí kàlẹ́ńdà ewu ojú-ọjọ́ ni:", options: ["Ìgbà tí iṣẹ́ oko pàtàkì bá pàdé ewu ojú-ọjọ́ tó ga", "Ibi tí a ti ń ta irè oko", "Irú kòkòrò kan", "Oṣù tí kò sí iṣẹ́ oko"], answer: 0, why: "Àwọn àkókò ewu ń fi ibi tí àwọn ọ̀nà iṣẹ́ ti ń ṣèrànwọ́ jù hàn." }
        ]
      }
    },
    {
      name: "Orí 2: Àwọn ọ̀nà iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Dídá ilẹ̀ àti omi dúró sórí oko",
          minutes: 6,
          goal: "Yan àwọn ọ̀nà ìtọ́jú ilẹ̀ àti omi tó bá oko rẹ àti bí ilẹ̀ rẹ ṣe tẹ̀ mu.",
          text: [
            "Ilẹ̀ tó ní ìlera ń di omi mú jù, ó sì ń bọ́ irè oko la ọ̀dá já. Ìlànà mẹ́ta iṣẹ́ àgbẹ̀ ìpamọ́ ilẹ̀ (conservation agriculture) ń ṣèrànwọ́: dà ilẹ̀ rú díẹ̀ bí ó ti lè ṣeé ṣe tó (ìtúlẹ̀ díẹ̀), jẹ́ kí ó wà ní bíbò (pàǹtírí irè oko tàbí ìbòlẹ̀ dípò sísun ún), kí o sì máa pààrọ̀ irè tàbí gbìn wọ́n pọ̀ (fún àpẹẹrẹ àgbàdo pẹ̀lú ẹ̀wà, ẹ̀wà (cowpea) tàbí òtílí). Fi ìgbẹ́ ẹran tàbí ajílẹ̀ àdánidá (compost) kún un láti mú ọ̀rá ilẹ̀ pọ̀ sí i.",
            "Gba omi òjò ní ibi tí ó ti rọ̀. Kòtò gbíngbìn tàbí kòtò kékeré (tí a ń pè ní zai ní agbègbè Sahel) ń kó omi àti ìgbẹ́ ẹran jọ yí ohun ọ̀gbìn kọ̀ọ̀kan ká. Ebè tí a so pọ̀ (tied ridges) àti ògiri ilẹ̀ tí ó tẹ̀lé ìtẹ̀ ilẹ̀ (contour bunds) ń dá omi dúró kí ó má ṣàn lọ. Lórí ilẹ̀ tó tẹ̀, àtẹ̀gùn ilẹ̀ (terrace) bí fanya juu ní Kenya, ìlà koríko àti igi tí a gbìn tẹ̀lé ìtẹ̀ ilẹ̀ ń dá ìwọ́lẹ̀ dúró. Adágún omi (water pan) àti gbígba omi láti orí òrùlé ń pa omi mọ́ fún ẹran, ibi ìtọ́jú irúgbìn àti ọgbà ilé.",
            "Bẹ̀rẹ̀ kékeré: dán ọ̀nà kan wò lórí apá kan oko, fi í wé ọ̀nà tí o máa ń lò, kí o sì pa èyí tó ṣiṣẹ́ mọ́. Béèrè lọ́wọ́ òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ fún àwòṣe àdúgbò àti iye iṣẹ́ ọwọ́ tí ó nílò."
          ],
          steps: ["Dẹ́kun sísun pàǹtírí irè oko; fi í sílẹ̀ bí ìbòlẹ̀.", "Dín ìtúlẹ̀ kù níbi tí o ti lè ṣàkóso èpò.", "Pààrọ̀ irè tàbí gbìn wọ́n pọ̀ pẹ̀lú irè ẹlẹ́wà (legume).", "Gba omi òjò: kòtò gbíngbìn, ebè tí a so pọ̀, ògiri ilẹ̀ tí ó tẹ̀lé ìtẹ̀ ilẹ̀.", "Lórí ilẹ̀ tó tẹ̀: àtẹ̀gùn ilẹ̀, ìlà koríko, igi tí a gbìn tẹ̀lé ìtẹ̀ ilẹ̀.", "Kọ́kọ́ dán an wò lórí ilẹ̀ kékeré, kí o sì fi wé ọ̀nà àtijọ́."],
          words: [["Iṣẹ́ àgbẹ̀ ìpamọ́ ilẹ̀ (conservation agriculture)", "iṣẹ́ oko pẹ̀lú dídà ilẹ̀ rú díẹ̀, ìbòlẹ̀ tí kì í kúrò, àti pípààrọ̀ irè oko."], ["Ìbòlẹ̀ (mulch)", "ìpele pàǹtírí irè oko, koríko tàbí ewé lórí ilẹ̀ láti jẹ́ kí ó ní ọ̀rinrin, kí ó má sì gbóná jù."], ["Kòtò zai / kòtò gbíngbìn", "kòtò kékeré tí ó ń kó omi òjò àti ìgbẹ́ ẹran jọ yí ohun ọ̀gbìn ká."], ["Fanya juu", "àtẹ̀gùn ilẹ̀ ti Kenya tí a ń ṣe nípa jíju erùpẹ̀ sókè láti inú kòtò láti ṣe ògiri."]],
          slides: [
            { title: "Ilẹ̀ tó ní ìlera ń di omi mú", bullets: ["Ìtúlẹ̀ díẹ̀", "Jẹ́ kí ilẹ̀ wà ní bíbò: ìbòlẹ̀, má sun ún", "Pààrọ̀ irè tàbí gbìn wọ́n pọ̀ pẹ̀lú irè ẹlẹ́wà"] },
            { title: "Gba omi òjò ní ibi tí ó ti rọ̀", bullets: ["Kòtò gbíngbìn àti kòtò kékeré (zai)", "Ebè tí a so pọ̀ àti ògiri ilẹ̀ tí ó tẹ̀lé ìtẹ̀ ilẹ̀", "Adágún omi àti gbígba omi láti orí òrùlé"] },
            { title: "Dáàbò bo ilẹ̀ tó tẹ̀", bullets: ["Àtẹ̀gùn ilẹ̀ bí fanya juu", "Ìlà koríko àti igi tí a gbìn tẹ̀lé ìtẹ̀ ilẹ̀"] },
            { title: "Bẹ̀rẹ̀ kékeré", bullets: ["Dán an wò lórí apá kan oko", "Fi í wé ọ̀nà tí o máa ń lò", "Béèrè lọ́wọ́ òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ fún àwòṣe àdúgbò"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Rìn yí oko rẹ ká lẹ́yìn òjò tàbí wò ó báyìí. Sàmì sí ibi tí omi ti ń ṣàn lọ, ibi tí erùpẹ̀ ti ń wọ́ lọ, àti ibi tí omi ti ń dúró. Yan ọ̀nà ìtọ́jú ilẹ̀ tàbí omi kan fún ibì kan, kí o sì kọ bí o ṣe máa dán an wò.",
          youCanNow: "yan àwọn ọ̀nà ìtọ́jú ilẹ̀ àti omi tí ó ń pa ọ̀rinrin àti erùpẹ̀ mọ́ sórí oko rẹ, kí o sì dán wọn wò.",
          quickCheck: [
            { objective: "O4", q: "Kí ni ebè tí a so pọ̀ àti ògiri ilẹ̀ tí ó tẹ̀lé ìtẹ̀ ilẹ̀ wà fún?", options: ["Kíkó ọkà pamọ́", "Bíbọ́ ẹran", "Dídá omi dúró kí ó má ṣàn kúrò lórí oko", "Sísàmì sí ààlà oko"], answer: 2, why: "Wọ́n ń di omi òjò mú sórí oko kí ó lè wọ inú ilẹ̀ dípò kí ó ṣàn lọ." },
            { objective: "O4", q: "Omi ń sáré lọ sísàlẹ̀ oko rẹ tó tẹ̀ lẹ́yìn òjò, ó sì ń gbé erùpẹ̀ lọ. Kí ni o máa yàn?", options: ["Túlẹ̀ lókè sí ìsàlẹ̀ ìtẹ̀ ilẹ̀", "Sun pàǹtírí irè oko", "Fi ilẹ̀ sílẹ̀ ní òfìfo", "Ìlà koríko tàbí àtẹ̀gùn ilẹ̀ tí ó tẹ̀lé ìtẹ̀ ilẹ̀"], answer: 3, why: "Àtẹ̀gùn ilẹ̀ àti ìlà koríko tí ó tẹ̀lé ìtẹ̀ ilẹ̀ ń dá ìwọ́lẹ̀ dúró lórí ilẹ̀ tó tẹ̀." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Yíyan irè oko àti orísìí tó lè fara dà á",
          minutes: 5,
          goal: "Yan irè oko, orísìí àti ọ̀nà gbíngbìn tó ń dín ewu ojú-ọjọ́ kù.",
          text: [
            "Orísìí ṣe pàtàkì. CIMMYT, ilé ìwádìí àgbàdo ti CGIAR, àti àwọn alábàáṣiṣẹ́ rẹ̀ ti ṣe àwọn orísìí àgbàdo tó lè fara da ọ̀gbẹlẹ̀, tí wọ́n ti gbé jáde ní ọ̀pọ̀ orílẹ̀-èdè ní ìhà gúúsù aṣálẹ̀ Sahara ní Áfíríkà; CGIAR ròyìn pé wọ́n lè so èso tó pọ̀ ju àwọn orísìí àtijọ́ lọ ní kedere nígbà ọ̀gbẹlẹ̀. Ẹ̀wà àti àgbàdo tó ń tètè gbó ń bọ́ lọ́wọ́ ọ̀gbẹlẹ̀ ìparí àsìkò. Béèrè lọ́wọ́ agrovet tàbí òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ èwo nínú àwọn orísìí tí a fọwọ́ sí ló bá agbègbè rẹ mu, kí o sì ra irúgbìn tí a fọwọ́ sí (certified seed) lọ́wọ́ àwọn olùtajà tí a forúkọ wọn sílẹ̀.",
            "Irè oko náà ṣe pàtàkì. Ọkà bàbà, jéró, ẹ̀gẹ́, ẹ̀wà (cowpea) àti òtílí ń fara da ọ̀gbẹlẹ̀ ju àgbàdo lọ ní ọ̀pọ̀ agbègbè. Gbígbin ju irè kan lọ, àti gbígbin wọ́n pọ̀, ń pín ewu: tí ọ̀kan bá kùnà, òmíràn lè ṣe dáadáa.",
            "Kòkòrò ń yí padà pẹ̀lú ojú-ọjọ́. Push-pull, tí icipe (ilé ìwádìí kòkòrò àgbáyé ní Kenya) ṣe pẹ̀lú àwọn alábàáṣiṣẹ́, ń gbin àgbàdo tàbí ọkà bàbà pọ̀ mọ́ desmodium, ó sì ń gbin koríko Napier tàbí Brachiaria yí i ká; icipe ròyìn pé ó ń dín ìbàjẹ́ láti ọ̀dọ̀ kòkòrò inú igi àgbàdo (stemborer), èpò striga àti fall armyworm kù gan-an. Pín àkókò gbíngbìn sí abala kékeré, kí o sì gbìn láìjáfara nígbà tí òjò bá bẹ̀rẹ̀ dáadáa."
          ],
          steps: ["Béèrè lọ́wọ́ òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ tàbí agrovet fún orísìí tí a fọwọ́ sí tó lè fara da ọ̀gbẹlẹ̀ tàbí tó ń tètè gbó fún agbègbè rẹ.", "Ra irúgbìn tí a fọwọ́ sí lọ́wọ́ olùtajà tí a forúkọ rẹ̀ sílẹ̀.", "Fi irè kan tó le kojú ọ̀gbẹlẹ̀ kún un (ọkà bàbà, ẹ̀gẹ́, ẹ̀wà (cowpea), òtílí).", "Gbin irè pọ̀ láti pín ewu; ronú nípa push-pull fún àgbàdo tàbí ọkà bàbà.", "Gbìn láìjáfara nígbà tí òjò bá bẹ̀rẹ̀ dáadáa; pín gbíngbìn sí abala kékeré."],
          words: [["Orísìí tó lè fara da ọ̀gbẹlẹ̀", "orísìí irè oko tí a ṣe kí ó lè so èso jù àwọn míì lọ nígbà tí omi kò tó."], ["Tó ń tètè gbó", "tó máa ń ṣetán fún ìkórè kíákíá, kí ó lè bọ́ lọ́wọ́ ọ̀gbẹlẹ̀ ìparí àsìkò."], ["Irúgbìn tí a fọwọ́ sí (certified seed)", "irúgbìn tí àjọ irúgbìn ti ìjọba ti yẹ̀ wò fún mímọ́ àti dídára rẹ̀."], ["Push-pull", "ọ̀nà kan tí desmodium ti ń lé kòkòrò kúrò lára àgbàdo tàbí ọkà bàbà, tí koríko ẹ̀gbẹ́ oko sì ń fà wọ́n lọ."]],
          slides: [
            { title: "Orísìí", bullets: ["Àgbàdo tó lè fara da ọ̀gbẹlẹ̀ (CGIAR/CIMMYT)", "Àgbàdo àti ẹ̀wà tó ń tètè gbó", "Irúgbìn tí a fọwọ́ sí láti ọ̀dọ̀ olùtajà tí a forúkọ wọn sílẹ̀"] },
            { title: "Irè oko", bullets: ["Ọkà bàbà, jéró, ẹ̀gẹ́, ẹ̀wà (cowpea), òtílí", "Ju irè kan lọ ń pín ewu"] },
            { title: "Kòkòrò àti àkókò", bullets: ["Push-pull: desmodium + koríko ẹ̀gbẹ́ oko (icipe)", "Gbìn láìjáfara nígbà tí òjò bá bẹ̀rẹ̀ dáadáa", "Pín gbíngbìn sí abala kékeré"] }
          ],
          sources: [CGIAR_MAIZE, ICIPE_PUSHPULL],
          tryIt: "Fún irè oko rẹ pàtàkì, wá orísìí kan tí a fọwọ́ sí tó lè fara da ọ̀gbẹlẹ̀ tàbí tó ń tètè gbó tí wọ́n ń tà nítòsí rẹ (béèrè lọ́wọ́ agrovet tàbí òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀), kí o sì yan irè kan tó le kojú ọ̀gbẹlẹ̀ láti fi kún un. Kọ ibi tí o máa gbin ọ̀kọ̀ọ̀kan sí.",
          youCanNow: "yan irè oko, orísìí àti ọ̀nà gbíngbìn tó ń dín ewu ojú-ọjọ́ oko rẹ kù.",
          quickCheck: [
            { objective: "O5", q: "Kí ló dé tí orísìí tó ń tètè gbó fi ń ṣèrànwọ́ ní agbègbè gbígbẹ?", options: ["Wọ́n lè bọ́ lọ́wọ́ ọ̀gbẹlẹ̀ ìparí àsìkò", "Wọ́n nílò omi púpọ̀ sí i", "Kòkòrò kì í mú wọn láéláé", "Wọn kò nílò irúgbìn"], answer: 0, why: "Irè tó ń tètè gbó máa ń parí kí ọ̀gbẹlẹ̀ ìparí àsìkò tó dé." },
            { objective: "O5", q: "Àgbàdo rẹ sábà máa ń kùnà ní ọdún ọ̀gbẹlẹ̀. Kí ló máa fún ọ ní ààbò àfikún?", options: ["Gbin àgbàdo púpọ̀ sí i nìkan", "Fi irè tó le kojú ọ̀gbẹlẹ̀ bí ọkà bàbà tàbí ẹ̀wà (cowpea) kún un", "Gbìn lẹ́yìn gbogbo ènìyàn", "Ra irúgbìn tí a kò fọwọ́ sí ní ọjà"], answer: 1, why: "Gbígbin ju irè kan lọ, pẹ̀lú èyí tó le kojú ọ̀gbẹlẹ̀, ń pín ewu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Igi, ẹran ọ̀sìn àti ìdánilójú: pínpín ewu",
          minutes: 6,
          goal: "Fi ó kéré tán ọ̀nà kan láti pín ewu kún un yàtọ̀ sí irè oko rẹ pàtàkì, lẹ́yìn náà kọ ètò rẹ.",
          text: [
            "Igi lórí oko (agroforestry) ń fúnni ní ibòji, ààbò lọ́wọ́ afẹ́fẹ́, oúnjẹ ẹran, èso, igi ìdáná àti pákó, ó ń dáàbò bo ilẹ̀, ó sì ń kó èròjà carbon pamọ́. Igi eléso bí mángòrò àti píà (avocado), igi tí ó ń fi nitrogen kún ilẹ̀, àti igi ààlà lè fi owó tí kò gbára lé òjò àsìkò kan ṣoṣo kún un.",
            "Ẹran ọ̀sìn lè jẹ́ ààbò, ṣùgbọ́n wọ́n náà ń jìyà nígbà ọ̀gbẹlẹ̀. Gbin oúnjẹ ẹran kí o sì kó o pamọ́ (Napier, Brachiaria, pàǹtírí irè oko, koríko gbígbẹ), dáàbò bo orísun omi, yan irú ẹran tó le, kí o sì jẹ́ kí iye ẹran bá oúnjẹ tí o lè gbìn tàbí rà mu. Ẹran kékeré bí ewúrẹ́ àti adìẹ lè rọrùn láti tọ́jú la ọdún ọ̀gbẹlẹ̀ já.",
            "Ìdánilójú (insurance) ń gbé apá kan ewu lọ sọ́dọ̀ ilé-iṣẹ́ ìdánilójú. Ìdánilójú tó dá lórí ojú-ọjọ́ (weather-index) àti tó dá lórí èso agbègbè (area-yield) ń sanwó nígbà tí òjò tàbí èso agbègbè bá wà nísàlẹ̀ ìpele kan tí a ti fi lélẹ̀, wọ́n sì ń tà wọ́n ní àwọn agbègbè kan nípasẹ̀ ẹgbẹ́ àjùmọ̀ṣe (cooperative), olùtajà ohun èlò oko tàbí owó orí fóònù (mobile money). Béèrè lọ́wọ́ ẹgbẹ́ àjùmọ̀ṣe rẹ tàbí òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀, ka ohun tó ń mú wọn sanwó, kí o sì ṣàyẹ̀wò pé àjọ alábòójútó ìdánilójú ti fún ilé-iṣẹ́ náà ní ìwé àṣẹ (ní Kenya ni Insurance Regulatory Authority, ní Nàìjíríà ni NAICOM). Ẹgbẹ́ àjọ (savings groups) àti owó tó ń wọlé láti ọ̀nà púpọ̀ náà ń pín ewu."
          ],
          steps: ["Yan igi tó bá oko rẹ mu: eléso, oúnjẹ ẹran, ààlà tàbí èyí tó ń fi nitrogen kún ilẹ̀.", "Ṣètò oúnjẹ àti omi fún ẹran la ẹ̀ẹ̀rùn já.", "Jẹ́ kí iye ẹran bá oúnjẹ tí o lè gbìn tàbí rà mu.", "Béèrè nípa ìdánilójú weather-index tàbí area-yield; ka ohun tó ń mú wọn sanwó; ṣàyẹ̀wò pé ilé-iṣẹ́ ìdánilójú náà ní ìwé àṣẹ.", "Kọ ètò iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu rẹ."],
          words: [["Igi lórí oko (agroforestry)", "gbígbin igi pọ̀ mọ́ irè oko tàbí ẹran ọ̀sìn lórí ilẹ̀ kan náà."], ["Oúnjẹ ẹran (fodder)", "ewéko tí a gbìn tàbí tí a kó pamọ́ láti bọ́ ẹran."], ["Ìdánilójú tó dá lórí ojú-ọjọ́ (weather-index insurance)", "ìdánilójú tí ó ń sanwó nígbà tí ìwọ̀n ojú-ọjọ́ kan, bí òjò, bá wà nísàlẹ̀ ìpele kan tí a ti fi lélẹ̀."], ["Ohun tó ń mú ìdánilójú sanwó (payout trigger)", "ipò tí ó ń mú kí ilé-iṣẹ́ ìdánilójú sanwó."]],
          slides: [
            { title: "Igi lórí oko", bullets: ["Ibòji, ààbò lọ́wọ́ afẹ́fẹ́, oúnjẹ ẹran, èso, igi ìdáná", "Ó ń dáàbò bo ilẹ̀, ó ń kó carbon pamọ́", "Owó tó ju ti àsìkò kan lọ"] },
            { title: "Ẹran ọ̀sìn bí ààbò", bullets: ["Gbin oúnjẹ ẹran kí o sì kó o pamọ́", "Dáàbò bo omi, yan irú ẹran tó le", "Iye ẹran tó bá oúnjẹ mu"] },
            { title: "Ìdánilójú àti ìfowópamọ́", bullets: ["Ìdánilójú weather-index àti area-yield", "Ka ohun tó ń mú wọn sanwó", "Ṣàyẹ̀wò pé ilé-iṣẹ́ ìdánilójú ní ìwé àṣẹ"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu rẹ ní ojú-ewé kan: kàlẹ́ńdà ewu, àsọtẹ́lẹ̀ àsìkò yìí àti ọjọ́ tí o kà á, àti ó kéré tán ọ̀nà márùn-ún (ilẹ̀ àti omi, irè oko àti orísìí, pínpín ewu), pẹ̀lú ọjọ́ ìbẹ̀rẹ̀ àti bí o ṣe máa ṣèdájọ́ àṣeyọrí.",
          youCanNow: "lo igi, ẹran ọ̀sìn, ìdánilójú àti ìfowópamọ́ láti pín ewu ojú-ọjọ́, kí o sì kọ ètò iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu tó pé fún oko rẹ.",
          quickCheck: [
            { objective: "O6", q: "Kí ni agroforestry (igi lórí oko)?", options: ["Gígé igi fún èédú", "Gbígbin igi nìkan", "Gbígbin igi pọ̀ mọ́ irè oko tàbí ẹran ọ̀sìn", "Rírà pákó"], answer: 2, why: "Agroforestry túmọ̀ sí igi lórí oko pẹ̀lú irè oko tàbí ẹran." },
            { objective: "O6", q: "Ẹ̀ẹ̀rùn ń bọ̀, o sì ń sin ewúrẹ́ àti màlúù. Kí ni o máa ṣètò?", options: ["Ra ẹran púpọ̀ sí i", "Ta gbogbo oúnjẹ ẹran", "Pa orísun omi tì", "Oúnjẹ àti omi, pẹ̀lú iye ẹran tó bá oúnjẹ mu"], answer: 3, why: "Ṣíṣètò oúnjẹ àti omi, àti jíjẹ́ kí iye ẹran bá oúnjẹ mu, ń dáàbò bo ẹran nígbà ọ̀gbẹlẹ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Àwọn ọ̀nà iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu",
        questions: [
          { objective: "O4", q: "Èwo ni ìlànà iṣẹ́ àgbẹ̀ ìpamọ́ ilẹ̀?", options: ["Sun pàǹtírí lẹ́yìn ìkórè", "Túlẹ̀ jinlẹ̀ ní gbogbo àsìkò", "Jẹ́ kí ilẹ̀ wà ní bíbò pẹ̀lú ìbòlẹ̀ tàbí pàǹtírí irè oko", "Gbin irè kan náà títí láé"], answer: 2, why: "Ìbòlẹ̀ ń pa ọ̀rinrin mọ́, ó sì ń dáàbò bo ilẹ̀ lọ́wọ́ ìwọ́lẹ̀." },
          { objective: "O4", q: "Kòtò gbíngbìn (zai) ń ṣèrànwọ́ nítorí pé wọ́n:", options: ["Ń kó omi òjò àti ìgbẹ́ ẹran jọ yí ohun ọ̀gbìn kọ̀ọ̀kan ká", "Ń lé ẹyẹ lọ", "Ń jẹ́ kí ìkórè yára", "Ń rọ́pò irúgbìn"], answer: 0, why: "Wọ́n ń kó omi àti oúnjẹ ilẹ̀ jọ síbi tí gbòǹgbò wà." },
          { objective: "O5", q: "Níbo ni o yẹ kí o ti ra irúgbìn orísìí tó lè fara da ọ̀gbẹlẹ̀?", options: ["Lọ́wọ́ olùtajà èyíkéyìí lẹ́gbẹ̀ẹ́ ọ̀nà", "Ní ibi ìpamọ́ ọkà aládùúgbò", "Láti inú ọkà tí a rà ní ọjà", "Lọ́wọ́ olùtajà tí a forúkọ rẹ̀ sílẹ̀ tí ó ń ta irúgbìn tí a fọwọ́ sí"], answer: 3, why: "A ti yẹ irúgbìn tí a fọwọ́ sí wò fún mímọ́ àti dídára rẹ̀." },
          { objective: "O5", q: "Nínú push-pull, kí ni desmodium ń ṣe?", options: ["Ó ń fa kòkòrò wọ inú àgbàdo", "Ó ń lé kòkòrò kúrò lára àgbàdo tàbí ọkà bàbà", "Ó ń rọ́pò ajílẹ̀ pátápátá", "Ó ń bọ́ ẹyẹ"], answer: 1, why: "Desmodium ń lé kòkòrò lọ; koríko ẹ̀gbẹ́ oko ń fà wọ́n jáde." },
          { objective: "O6", q: "Kí o tó ra ìdánilójú weather-index, o yẹ kí o:", options: ["Ka ohun tó ń mú wọn sanwó, kí o sì ṣàyẹ̀wò pé ilé-iṣẹ́ ìdánilójú ní ìwé àṣẹ", "San owó fún ẹni àkọ́kọ́ tó béèrè", "Fún wọn ní PIN owó orí fóònù rẹ", "Rà á fún àwọn aládùúgbò"], answer: 0, why: "Mọ ìgbà tí ó máa sanwó, kí o sì rí i dájú pé ilé-iṣẹ́ ìdánilójú náà jẹ́ ojúlówó." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Iṣẹ́ Àgbẹ̀ Tó Bá Ojú-ọjọ́ Mu",
    questions: [
      { objective: "O1", q: "Iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu ni:", options: ["Iṣẹ́ oko pẹ̀lú ẹ̀rọ nìkan", "Yíyan ọ̀nà tí ó ń mú èso pọ̀ sí i, tí ó ń mú ìfaradà wá, tí ó sì ń dín èéfín kù níbi tí ó bá ṣeé ṣe", "Iṣẹ́ oko ní ìlú ńlá nìkan", "Irú ajílẹ̀ kan"], answer: 1, why: "Bẹ́ẹ̀ ni FAO ṣe ṣàpèjúwe CSA." },
      { objective: "O1", q: "Fún ọ̀pọ̀ àgbẹ̀ kékeré, èròǹgbà CSA wo ló sábà máa ń ṣáájú?", options: ["Dídín èéfín kù", "Rírà drone", "Oúnjẹ tó tó àti owó tó ń wọlé", "Kíkó ọjà lọ sí òkèèrè"], answer: 2, why: "FAO ṣàkíyèsí pé oúnjẹ àti owó ló ṣáájú; dídín èéfín kù sábà máa ń jẹ́ àfikún èrè." },
      { objective: "O1", q: "Ìfaradà (resilience) túmọ̀ sí:", options: ["Agbára láti kojú ìpayà kí o sì padà bọ̀ sípò", "Gbígbìn pẹ́", "Lílo omi púpọ̀ sí i", "Irú ilẹ̀ kan"], answer: 0, why: "Oko tó ní ìfaradà máa ń padà bọ̀ sípò lẹ́yìn ọ̀gbẹlẹ̀ tàbí omíyalé." },
      { objective: "O2", q: "Àsọtẹ́lẹ̀ àsìkò ti ìjọba Kenya ń wá láti ọ̀dọ̀:", options: ["KCAA", "NiMet", "Ilé-iṣẹ́ irúgbìn kan", "Kenya Meteorological Department (KMD)"], answer: 3, why: "KMD ló ń gbé àsọtẹ́lẹ̀ àsìkò àti ìròyìn ojú-ọjọ́ fún àgbẹ̀ jáde." },
      { objective: "O2", q: "Ó yẹ kí a lo àsọtẹ́lẹ̀ àsìkò láti:", options: ["Fi gbogbo nǹkan wewu lórí irè kan", "Ṣàtúnṣe ètò, bí yíyan orísìí tó ń tètè gbó", "Pa ọjọ́ gbíngbìn tì", "Dẹ́kun iṣẹ́ oko"], answer: 1, why: "Àsọtẹ́lẹ̀ ń fúnni ní àǹfààní; ṣàtúnṣe pẹ̀lú ọgbọ́n." },
      { objective: "O3", q: "Ìbẹ̀rẹ̀ òjò (onset) túmọ̀ sí:", options: ["Ìparí ìkórè", "Kòkòrò kan", "Ìbẹ̀rẹ̀ àsìkò òjò", "Ajílẹ̀ kan"], answer: 2, why: "Onset ni ìgbà tí òjò bá bẹ̀rẹ̀." },
      { objective: "O3", q: "Ọ̀dá (dry spell) ni:", options: ["Ọjọ́ tàbí ọ̀sẹ̀ tí òjò tó wúlò kò rọ̀ láàárín àsìkò òjò", "Omíyalé", "Alẹ́ tútù", "Ọjọ́ ọjà"], answer: 0, why: "Ọ̀dá láàárín àsìkò lè ba irè oko jẹ́ ní àwọn ìpele pàtàkì." },
      { objective: "O3", q: "Àgbàdo tó ń yọ òdòdó ní oṣù tí ọ̀dá sábà máa ń wà jẹ́:", options: ["Àǹfààní ọjà", "Àmì rere", "Ọ̀nà gbíngbìn", "Àkókò ewu"], answer: 3, why: "Ìpele pàtàkì tí ó pàdé ewu tó ga jẹ́ àkókò ewu." },
      { objective: "O4", q: "Sísun pàǹtírí irè oko:", options: ["Jẹ́ ìlànà iṣẹ́ àgbẹ̀ ìpamọ́ ilẹ̀", "Ń fi ilẹ̀ sílẹ̀ ní òfìfo, ó sì ń sọ ọ̀rá ilẹ̀ nù", "Ń jẹ́ kí ilẹ̀ di omi mú jù", "Bá ojú-ọjọ́ mu"], answer: 1, why: "Pàǹtírí tí a fi sílẹ̀ bí ìbòlẹ̀ ń dáàbò bo ilẹ̀, ó sì ń bọ́ ọ." },
      { objective: "O4", q: "Ìtúlẹ̀ díẹ̀ (minimum tillage) túmọ̀ sí:", options: ["Títúlẹ̀ lẹ́ẹ̀mejì", "Àìkọ èpò", "Dídà ilẹ̀ rú díẹ̀ bí ó ti lè ṣeé ṣe tó", "Gbígbin igi nìkan"], answer: 2, why: "Dídà ilẹ̀ rú díẹ̀ ń dáàbò bo ìṣètò ilẹ̀ àti ọ̀rinrin rẹ̀." },
      { objective: "O4", q: "Ọ̀nà wo ló ń dá ìwọ́lẹ̀ dúró lórí ilẹ̀ tó tẹ̀?", options: ["Àtẹ̀gùn ilẹ̀ bí fanya juu, àti ìlà koríko tí ó tẹ̀lé ìtẹ̀ ilẹ̀", "Títúlẹ̀ tààrà sísàlẹ̀ òkè", "Yíyọ gbogbo koríko kúrò", "Sísun ilẹ̀ tó tẹ̀"], answer: 0, why: "Àtẹ̀gùn ilẹ̀ àti ìlà tí ó tẹ̀lé ìtẹ̀ ilẹ̀ ń dín ìyára omi kù, wọ́n sì ń di erùpẹ̀ mú." },
      { objective: "O4", q: "Adágún omi (water pan) ni:", options: ["Ìkòkò ìdáná", "Pańpẹ́ kòkòrò", "Àpò irúgbìn", "Adágún tí a gbẹ́ tí ó ń pa omi òjò mọ́"], answer: 3, why: "Adágún omi ń pa omi mọ́ fún ẹran àti fún bíbomirin kékeré." },
      { objective: "O5", q: "CGIAR ròyìn pé àwọn orísìí àgbàdo tó lè fara da ọ̀gbẹlẹ̀:", options: ["Nílò omi púpọ̀ sí i", "Lè so èso tó pọ̀ ju àwọn orísìí àtijọ́ lọ ní kedere nígbà ọ̀gbẹlẹ̀", "Kò ṣeé gbìn ní Áfíríkà", "Jẹ́ ọ̀kan náà pẹ̀lú àgbàdo lásán"], answer: 1, why: "A ṣe wọ́n kí wọ́n lè ṣe dáadáa jù nígbà tí omi kò tó." },
      { objective: "O5", q: "Irè wo ló sábà máa ń fara da ọ̀gbẹlẹ̀ ju àgbàdo lọ?", options: ["Ìrẹsì inú omi", "Ìrèké", "Ọkà bàbà", "Tíì"], answer: 2, why: "Ọkà bàbà jẹ́ irè ọkà tó le kojú ọ̀gbẹlẹ̀." },
      { objective: "O5", q: "Gbígbin àgbàdo pọ̀ mọ́ ẹ̀wà tàbí ẹ̀wà (cowpea):", options: ["Ń pín ewu, ó sì ń fi irè ẹlẹ́wà kún un", "Máa ń dín owó tó ń wọlé kù nígbà gbogbo", "Kò gbà láyè", "Nílò drone"], answer: 0, why: "Irè méjì ń pín ewu; irè ẹlẹ́wà ń fi nitrogen kún ilẹ̀." },
      { objective: "O5", q: "Nínú push-pull, koríko ẹ̀gbẹ́ oko:", options: ["Ń lé kòkòrò lọ", "Ni a ń kórè fún títà sí òkèèrè", "Ni a ń fín oògùn sí", "Ń fa kòkòrò kúrò lára irè oko"], answer: 3, why: "Koríko Napier tàbí Brachiaria ẹ̀gbẹ́ oko ń fa kòkòrò lọ." },
      { objective: "O6", q: "Agroforestry (igi lórí oko) túmọ̀ sí:", options: ["Gígé igbó lulẹ̀ fún irè oko", "Gbígbin igi pọ̀ mọ́ irè oko tàbí ẹran ọ̀sìn", "Gbígbin òdòdó nìkan", "Rírà pákó"], answer: 1, why: "Igi lórí oko ń fi owó, ibòji àti ààbò ilẹ̀ kún un." },
      { objective: "O6", q: "Nígbà ọ̀gbẹlẹ̀, àwọn olùsin ẹran yẹ kí wọ́n:", options: ["Máa fi ẹran kún un", "Ta gbogbo oúnjẹ ẹran", "Ṣètò oúnjẹ àti omi, kí wọ́n sì jẹ́ kí iye ẹran bá oúnjẹ mu", "Dẹ́kun fífún ẹran ní omi"], answer: 2, why: "Ṣíṣètò oúnjẹ àti omi ń jẹ́ kí ẹran wà láàyè la ẹ̀ẹ̀rùn já." },
      { objective: "O6", q: "Ohun tó ń mú ìdánilójú weather-index sanwó (payout trigger) ni:", options: ["Ipò tí ó ń mú kí ilé-iṣẹ́ ìdánilójú sanwó", "Iye owó irúgbìn", "Irú ìbọn kan", "Àdírẹ́sì ilé-iṣẹ́ ìdánilójú"], answer: 0, why: "Ó ń sọ ìgbà tí ìdánilójú náà máa sanwó." },
      { objective: "O4", q: "Kí o tó lo ọ̀nà tuntun kan lórí gbogbo oko rẹ, o yẹ kí o:", options: ["Lò ó níbi gbogbo lẹ́ẹ̀kan náà", "Pa ìmọ̀ràn òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ tì", "Dúró fún ọdún mẹ́wàá", "Dán an wò lórí ilẹ̀ kékeré kí o sì fi wé ọ̀nà àtijọ́"], answer: 3, why: "Ìdánwò kékeré ń fi hàn bóyá ó ṣiṣẹ́ lórí oko rẹ." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      3,
      6,
      7,
      10,
      12,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Kàlẹ́ńdà ewu ojú-ọjọ́",
        objective: "O3",
        notYet: "Oṣù, iṣẹ́ tàbí ewu kò sí níbẹ̀, tàbí kò sí àkókò ewu kankan.",
        meets: "Oṣù méjìlá pẹ̀lú àwọn àsìkò, iṣẹ́ oko, àwọn ewu àti ó kéré tán àkókò ewu méjì tí a fa àyíká yí ká.",
        exceeds: "Ó ní ohun tí àwọn àgbẹ̀ àgbàlagbà sọ pé ó ti yí padà."
      },
      {
        name: "Àsọtẹ́lẹ̀ àsìkò",
        objective: "O2",
        notYet: "Kò sí àsọtẹ́lẹ̀, tàbí kò sí ọjọ́ tàbí orísun.",
        meets: "Ohun tí àsọtẹ́lẹ̀ ìjọba fún àsìkò yìí sọ, orísun rẹ̀ àti ọjọ́ tí a kà á.",
        exceeds: "Ó fi ìyípadà méjì tí a ṣe sí ètò nítorí àsọtẹ́lẹ̀ náà hàn."
      },
      {
        name: "Ọ̀nà ìtọ́jú ilẹ̀ àti omi",
        objective: "O4",
        notYet: "Kò sí ọ̀nà ìtọ́jú ilẹ̀ tàbí omi.",
        meets: "Ó kéré tán ọ̀nà ìtọ́jú ilẹ̀ tàbí omi kan tó bá oko mu, pẹ̀lú ọjọ́ ìbẹ̀rẹ̀.",
        exceeds: "A ṣètò rẹ̀ bí ìdánwò kékeré tí a fi wé ọ̀nà àtijọ́."
      },
      {
        name: "Irè oko àti orísìí",
        objective: "O5",
        notYet: "Kò sí ọ̀nà irè oko tàbí orísìí.",
        meets: "Ó kéré tán ọ̀nà orísìí tàbí irè oko kan tó ń dín ewu kù, pẹ̀lú irúgbìn tí a fọwọ́ sí láti ọ̀dọ̀ olùtajà tí a forúkọ rẹ̀ sílẹ̀.",
        exceeds: "Ó tún ní gbígbin irè pọ̀ tàbí push-pull níbi tí ó bá bá a mu."
      },
      {
        name: "Pínpín ewu",
        objective: "O6",
        notYet: "Kò sí ọ̀nà láti pín ewu yàtọ̀ sí irè oko pàtàkì.",
        meets: "Ó kéré tán ọ̀nà igi, ẹran ọ̀sìn tàbí ìdánilójú kan, pẹ̀lú ọjọ́ ìbẹ̀rẹ̀.",
        exceeds: "Fún ìdánilójú, ó dárúkọ ohun tó ń mú wọn sanwó, ó sì ṣàyẹ̀wò pé ilé-iṣẹ́ ìdánilójú náà ní ìwé àṣẹ."
      },
      {
        name: "Ọ̀nà márùn-ún àti òdiwọ̀n àṣeyọrí",
        objective: "O1",
        notYet: "Ọ̀nà tí kò tó márùn-ún, tàbí kò sí ọ̀nà láti ṣèdájọ́ àṣeyọrí.",
        meets: "Ó kéré tán ọ̀nà márùn-ún, pẹ̀lú ìgbà tí a máa bẹ̀rẹ̀ ọ̀kọ̀ọ̀kan àti bí a ṣe máa mọ̀ bóyá ó ṣiṣẹ́.",
        exceeds: "Ó kọ èwo nínú èròǹgbà iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu tí ọ̀nà kọ̀ọ̀kan ń ràn lọ́wọ́."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn àgbẹ̀ tí wọ́n lo ó kéré tán ọ̀nà tuntun méjì tó bá ojú-ọjọ́ mu ní àsìkò yìí (ìwádìí àtẹ̀lé)",
      "Ìkórè àti owó tó ń wọlé tí a fi wé ti àsìkò ọ̀gbẹlẹ̀ tàbí àsìkò líle kan láìpẹ́, gẹ́gẹ́ bí àwọn àgbẹ̀ tàbí alábàáṣiṣẹ́ ṣe ròyìn",
      "Àwọn àgbẹ̀ tí wọ́n ń ṣàyẹ̀wò àsọtẹ́lẹ̀ àsìkò ti ìjọba kí wọ́n tó gbìn, tàbí tí wọ́n gba ìdánilójú irè oko tàbí ẹran ọ̀sìn tó ní ìwé àṣẹ"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí rédíò láti gba àsọtẹ́lẹ̀ àsìkò, tàbí ìwé ìròyìn ìdálẹ́kọ̀ọ́ àgbẹ̀",
      "Ìwé àti gègé (tàbí spreadsheet lórí fóònù) fún kàlẹ́ńdà ewu ojú-ọjọ́ àti ètò",
      "Àǹfààní láti rìn yí oko akẹ́kọ̀ọ́ tàbí oko àpẹẹrẹ ká",
      "Nọ́mbà òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ tàbí agrovet fún orísìí àti àwòṣe àdúgbò",
      "Nǹkan bí ìṣẹ́jú 60 ẹ̀kọ́, pẹ̀lú àkókò lórí oko fún rírìn yí i ká àti ètò"
    ],
    facilitatorNotes: [
      "Ṣe ìpàdé pẹ̀lú àwọn ẹgbẹ́ àgbẹ̀ kí àsìkò tó bẹ̀rẹ̀, kí ètò lè ṣetán kí gbíngbìn tó bẹ̀rẹ̀.",
      "Ẹ jọ ka àsọtẹ́lẹ̀ ìjọba tuntun jù, kí o sì ṣàlàyé pé àǹfààní ló ń fúnni, kì í ṣe ìlérí.",
      "Kọ́kọ́ ya kàlẹ́ńdà ewu ojú-ọjọ́ kan fún gbogbo ẹgbẹ́, lẹ́yìn náà jẹ́ kí àgbẹ̀ kọ̀ọ̀kan ya tirẹ̀; pe àwọn àgbẹ̀ àgbàlagbà láti sọ ohun tó ti yí padà.",
      "Gba àwọn àgbẹ̀ níyànjú láti dán ọ̀nà tuntun wò ní kékeré, kí o sì pe òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ fún àwòṣe àti orísìí àdúgbò.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};

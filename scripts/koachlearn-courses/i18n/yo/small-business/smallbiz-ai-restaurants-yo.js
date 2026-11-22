"use strict";

// Koach Learn course (Yoruba translation of small-business/smallbiz-ai-restaurants.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FDA_ALLERGENS = { name: "FDA: Àwọn àléjì oúnjẹ (àwọn oúnjẹ mẹ́sàn-án pàtàkì tó ń fa àléjì)", url: "https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies" };
const FDA_CODE = { name: "FDA: Food Code (àwọn òfin ààbò oúnjẹ)", url: "https://www.fda.gov/food/retail-food-protection/fda-food-code" };
const FTC_REVIEWS = { name: "FTC: Òfin nípa àyẹ̀wò àti ẹ̀rí àwọn oníbàárà, ìbéèrè àti ìdáhùn", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };

module.exports = {
  id: "smallbiz-ai-restaurants-yo",
  lang: "yo",
  translationOf: "smallbiz-ai-restaurants",
  category: "Small Business",
  name: "AI fún Ilé Oúnjẹ",
  skills: "Kíkọ àpèjúwe oúnjẹ fún mẹ́nù, Ṣíṣe àtẹ àléjì láti inú ìlànà oúnjẹ, Ṣíṣe àkọsílẹ̀ ìgbáradì àti ti rírà, Ṣíṣe ètò iṣẹ́ òṣìṣẹ́, Dídáhùn àyẹ̀wò oníbàárà, Ṣíṣètò oúnjẹ àkànṣe",
  outcome: "lo AI láti bójú tó iṣẹ́ ọ́fíìsì ilé oúnjẹ kékeré tàbí ọkọ̀ oúnjẹ: kọ àpèjúwe oúnjẹ fún mẹ́nù, ṣe àtẹ àléjì láti inú ìlànà oúnjẹ tìrẹ kí o sì ṣàyẹ̀wò rẹ̀, ṣe àkọsílẹ̀ ìgbáradì àti ti rírà láti inú ọjà tí o tà, ṣe ètò iṣẹ́ òṣìṣẹ́ tó tọ́, kí o sì dáhùn àyẹ̀wò oníbàárà pẹ̀lú òtítọ́.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn olùní, àwọn alákòóso àti àwọn alásè ní ilé oúnjẹ kékeré, kafé, ọkọ̀ oúnjẹ, àwọn tó ń se oúnjẹ fún ayẹyẹ àti ilé ìdáná ìbílẹ̀. Ọ̀pọ̀ àwọn akẹ́kọ̀ọ́ wa ń ṣiṣẹ́ ní ilé oúnjẹ ẹbí àti ti àwọn ẹ̀yà kékeré, níbi tí olùní fúnra rẹ̀ ti ń se oúnjẹ, ń ra ọjà, tí ó sì ń gbé fóònù.",
    "O máa lo olùrànlọ́wọ́ AI ọ̀fẹ́ àti spreadsheet (àtẹ ìṣirò) láti fi àkókò pamọ́ nínú kíkọ̀wé, ṣíṣètò àti iṣẹ́ ìwé. Àwọn òfin ààbò oúnjẹ àti ti àléjì wá láti orísun ìjọba àti ẹ̀ka ìlera ìjọba ìbílẹ̀ rẹ, kì í ṣe láti AI; ẹ̀kọ́ yìí máa fi ibi tí o ti lè wò wọ́n hàn ọ́.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì ní iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Ṣe àpò irinṣẹ́ ilé oúnjẹ rẹ: àpèjúwe mẹ́nù fún oúnjẹ márùn-ún, àtẹ àléjì fún oúnjẹ márùn-ún yẹn tí o ṣe láti inú ìlànà oúnjẹ gidi rẹ àti àmì ìsọfúnni lára ọjà (tí o ti fi wé àwọn oúnjẹ mẹ́sàn-án pàtàkì tó ń fa àléjì ti FDA), àkọsílẹ̀ ìgbáradì àti àkọsílẹ̀ rírà fún ọ̀sẹ̀ kan láti inú ọjà tí o tà, ètò iṣẹ́ òṣìṣẹ́ àkọ́kọ́, àti ìdáhùn sí àyẹ̀wò rere kan àti búburú kan.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn olùní, àwọn alákòóso àti àwọn alásè ní ilé oúnjẹ kékeré, kafé, ọkọ̀ oúnjẹ, àwọn tó ń se oúnjẹ fún ayẹyẹ àti ilé ìdáná ìbílẹ̀. Ọ̀pọ̀ lára wọn jẹ́ ti ẹbí àti ti àwọn ẹ̀yà kékeré, níbi tí olùní fúnra rẹ̀ ti ń se oúnjẹ, ń ra ọjà, tí ó sì ń gbé fóònù.",
    startingPoint: "Wọ́n mọ oúnjẹ sè, wọ́n lè darí iṣẹ́ ìyípo kan, wọ́n sì lè gba ìbéèrè oníbàárà. Ọ̀pọ̀ ń lo fóònù àti ẹ̀rọ ìtajà (POS), ṣùgbọ́n wọn kò ní ìrírí púpọ̀ tàbí kankan pẹ̀lú olùrànlọ́wọ́ AI tàbí àgbékalẹ̀ ìṣirò spreadsheet.",
    gap: "Kíkọ̀wé, ṣíṣètò àti iṣẹ́ ìwé ń jẹ àkókò tí olùní kò ní. Àwọn akẹ́kọ̀ọ́ nílò láti lo AI láti fi àkókò yẹn pamọ́, kí ìsọfúnni àléjì, òfin iṣẹ́ àti ìdáhùn àyẹ̀wò sì máa jẹ́ òtítọ́ tó péye, nítorí àṣìṣe lè pa oníbàárà lára tàbí rú òfin.",
    constraints: [
      "Àkókò: àwọn olùní ń ṣiṣẹ́ fún wákàtí gígùn, nítorí náà ẹ̀kọ́ kọ̀ọ̀kan jẹ́ nǹkan bí ìṣẹ́jú 5",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà ọ́fíìsì kan tí gbogbo ènìyàn ń lò ni wọ́n sábà máa ní",
      "Àwọn òfin ààbò oúnjẹ àti àléjì wá láti FDA àti ẹ̀ka ìlera ìbílẹ̀, kì í ṣe láti AI",
      "Àwọn òfin iṣẹ́ nípa ìsinmi, àfikún àkókò (overtime) àti àwọn ọmọdé yàtọ̀ láti ìpínlẹ̀ sí ìpínlẹ̀ àti láti ìlú sí ìlú",
      "Àṣírí: má ṣe fi nọ́mbà Social Security, owó oṣù pẹ̀lú orúkọ tàbí àkọsílẹ̀ àdáni nípa òṣìṣẹ́ sínú irinṣẹ́ AI"
    ],
    prerequisites: "Kò sí. Àwọn akẹ́kọ̀ọ́ tí wọ́n jẹ́ tuntun sí olùrànlọ́wọ́ AI lè kọ́kọ́ ṣe ẹ̀kọ́ ìfihàn sí AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àwọn èròjà gidi àti ọ̀nà síse oúnjẹ kan", action: "kọ àpèjúwe kúkúrú fún mẹ́nù pẹ̀lú ìrànlọ́wọ́ AI kí o sì yọ ohunkóhun tí kì í ṣe òtítọ́ kúrò", standard: "kí gbogbo ọ̀rọ̀ èròjà bá ìlànà oúnjẹ rẹ mu" },
    { id: "O2", condition: "Ní lílo ìlànà oúnjẹ tìrẹ àti àmì ìsọfúnni lára ọjà tí o ń rà", action: "ṣe àtẹ àléjì tí ó sàmì sí àwọn oúnjẹ mẹ́sàn-án pàtàkì tó ń fa àléjì ti FDA fún oúnjẹ kọ̀ọ̀kan", standard: "kí ènìyàn kejì ti ṣàyẹ̀wò oúnjẹ kọ̀ọ̀kan" },
    { id: "O3", condition: "Tí o bá mọ iye tí o ń tà lójúmọ́ ní àpapọ̀ àti iye ìpín nínú ìsè kan", action: "ṣe àkọsílẹ̀ ìgbáradì àti àkọsílẹ̀ rírà ọ̀sẹ̀ kan nínú spreadsheet", standard: "kí iye ìsè jẹ́ èyí tí a ti kà sókè, tí a sì ti ṣàtúnṣe fún ayẹyẹ, òpin ọ̀sẹ̀ àti ojú ọjọ́" },
    { id: "O4", condition: "Tí o bá mọ wákàtí iṣẹ́ rẹ, àwọn ìyípo iṣẹ́, àti orúkọ àkọ́kọ́ àti àkókò tí òṣìṣẹ́ kọ̀ọ̀kan wà", action: "ṣe ètò iṣẹ́ òṣìṣẹ́ ọ̀sẹ̀ kan pẹ̀lú AI kí o sì ṣàyẹ̀wò bóyá ó bo gbogbo àkókò, ó tọ́, ó sì bá òfin iṣẹ́ mu", standard: "láìsí ìsọfúnni àdáni òṣìṣẹ́ kankan nínú prompt" },
    { id: "O5", condition: "Tí oníbàárà bá béèrè ìbéèrè tàbí kọ àyẹ̀wò rere tàbí búburú", action: "kọ ìdáhùn tó jẹ́jẹ́, tó sì jẹ́ òtítọ́ pẹ̀lú ìrànlọ́wọ́ AI", standard: "kí gbogbo ọ̀rọ̀ jẹ́ òtítọ́, láìsí àyẹ̀wò èké tàbí èyí tí a sanwó fún" },
    { id: "O6", condition: "Tí o bá ní èròjà tó pọ̀ jù tàbí ti àsìkò", action: "ṣètò oúnjẹ àkànṣe ọ̀sẹ̀ kan, ṣírò iye owó àwo kan, kí o sì fi iye owó tí ó ní èrè lé e", standard: "kí a ti ṣàyẹ̀wò àléjì, kí a sì ti fi oúnjẹ àkànṣe náà kún àkọsílẹ̀ ìgbáradì" }
  ],
  chapters: [
    {
      name: "Orí 1: Mẹ́nù, àléjì àti àkọsílẹ̀ ilé ìdáná",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kíkọ àpèjúwe oúnjẹ fún mẹ́nù",
          minutes: 5,
          goal: "Kọ àpèjúwe mẹ́nù tó kúrú, tó dùn ún gbọ́, tó sì péye pẹ̀lú ìrànlọ́wọ́ AI.",
          text: [
            "Àpèjúwe mẹ́nù tó dára sọ ohun tó wà nínú oúnjẹ, bí a ṣe sè é, àti ìdí tí ó fi jẹ́ àkànṣe, ní ọ̀rọ̀ 10 sí 25. \"Ìrẹsì jọ̀lọ́ọ̀fù tí a sè díẹ̀díẹ̀ nínú ọbẹ̀ tòmátò àti ata, pẹ̀lú dòdò àti itan adìẹ yíyan.\"",
            "Fún AI ní àwọn èròjà gidi àti ọ̀nà síse: \"Kọ àpèjúwe mẹ́nù ọ̀rọ̀ 20 fún: ọbẹ̀ curry ẹran ewúrẹ́ pẹ̀lú egungun, tí a sè fún wákàtí 4 pẹ̀lú ata rodo, thyme àti ànàmọ́ (potato), pẹ̀lú ìrẹsì funfun. Ọ̀rọ̀ tó rọrùn, tó sì gbóná.\" Béèrè fún ẹ̀dà mẹ́ta kí o sì yan ọ̀kan.",
            "Ṣàyẹ̀wò rẹ̀. AI lè fi èròjà tí o kò lò kún un (\"pẹ̀lú cashew\") tàbí ọ̀rọ̀ bí \"organic\" tàbí \"a ṣe é nínú ilé\" tí kì í ṣe òtítọ́. Èròjà tí kò tọ́ lórí mẹ́nù lè pa ẹni tó ní àléjì lára."
          ],
          steps: ["Kọ àwọn èròjà gidi àti ọ̀nà síse sílẹ̀.", "Béèrè lọ́wọ́ AI fún àpèjúwe kúkúrú mẹ́ta.", "Yan ọ̀kan kí o sì ṣàyẹ̀wò gbogbo ọ̀rọ̀ èròjà.", "Yọ ohunkóhun tí kì í ṣe òtítọ́ kúrò, bí \"organic\"."],
          words: [["Àpèjúwe mẹ́nù", "ọ̀rọ̀ kúkúrú lábẹ́ orúkọ oúnjẹ tí ó sọ fún oníbàárà ohun tí ó jẹ́."]],
          slides: [
            { title: "Àpèjúwe tó dára", bullets: ["Ohun tó wà nínú rẹ̀", "Bí a ṣe sè é", "Ìdí tí ó fi jẹ́ àkànṣe, ní ọ̀rọ̀ 10 sí 25"] },
            { title: "Fún AI ní ìlànà oúnjẹ gidi", bullets: ["Èròjà àti ọ̀nà síse", "Béèrè fún ẹ̀dà mẹ́ta"] },
            { title: "Ṣàyẹ̀wò gbogbo ọ̀rọ̀", bullets: ["Kò sí èròjà tí o kò lò", "Kò sí \"organic\" tàbí \"a ṣe é nínú ilé\" àyàfi tí ó bá jẹ́ òtítọ́", "Èròjà tí kò tọ́ lè pa oníbàárà tó ní àléjì lára"] }
          ],
          tryIt: "Kọ àpèjúwe mẹ́nù fún márùn-ún nínú oúnjẹ rẹ pẹ̀lú ìrànlọ́wọ́ AI. Fi gbogbo ọ̀rọ̀ èròjà wé ìlànà oúnjẹ rẹ.",
          youCanNow: "kọ àpèjúwe mẹ́nù tó péye, tó sì fani mọ́ra pẹ̀lú ìrànlọ́wọ́ AI.",
          quickCheck: [
            { objective: "O1", q: "Kí ni nǹkan mẹ́ta tí àpèjúwe mẹ́nù tó dára máa ń sọ?", options: ["Ohun tó wà nínú oúnjẹ, bí a ṣe sè é, àti ìdí tí ó fi jẹ́ àkànṣe", "Iye owó, orúkọ alásè àti bí àwo ṣe tóbi tó", "Kalori, ẹni tó ta ọjà àti ọjọ́", "Orúkọ oúnjẹ nìkan ní lẹ́tà ńlá"], answer: 0, why: "Ẹ̀kọ́ náà sọ pé àpèjúwe tó dára sọ ohun tó wà nínú rẹ̀, bí a ṣe sè é àti ìdí tí ó fi jẹ́ àkànṣe." },
            { objective: "O1", q: "AI kọ \"tortilla organic tí a ṣe nínú ilé\" ṣùgbọ́n tortilla lásán ni o ń rà. Kí ni o máa ṣe?", options: ["Fi í sílẹ̀ nítorí ó dún dáadáa", "Yọ \"a ṣe é nínú ilé\" àti \"organic\" kúrò nítorí wọn kì í ṣe òtítọ́", "Fi ọ̀rọ̀ míì bí \"artisan\" kún un", "Ní kí AI kọ ọ́ ní lẹ́tà ńlá"], answer: 1, why: "Ọ̀rọ̀ mẹ́nù gbọ́dọ̀ jẹ́ òtítọ́, nítorí náà o yọ ohunkóhun tí AI fi kún un tí o kò ṣe kúrò." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ṣíṣe àtẹ àléjì láìléwu",
          minutes: 6,
          goal: "Ṣe àtẹ àléjì láti inú ìlànà oúnjẹ àti àmì ìsọfúnni tìrẹ, kí o sì ṣàyẹ̀wò rẹ̀ fúnra rẹ.",
          text: [
            "FDA (àjọ ìjọba US tó ń bójú tó oúnjẹ àti oògùn) ka oúnjẹ mẹ́sàn-án pàtàkì tó ń fa àléjì: wàrà, ẹyin, ẹja, ẹja ìkarahun bí edé àti akan, èso igi (tree nuts), ẹ̀pà, àlìkámà (wheat), sóyà àti ẹ̀gúsí ìtálẹ̀ (sesame). Àwọn oníbàárà tó ní àléjì gbẹ́kẹ̀lé ọ láti mọ ohun tó wà nínú oúnjẹ kọ̀ọ̀kan.",
            "Ṣe àtẹ kan: àwọn oúnjẹ sísàlẹ̀ ní ẹ̀gbẹ́, àwọn àléjì mẹ́sàn-án sì ní òkè. Kún un láti inú ìlànà oúnjẹ gidi rẹ ÀTI àmì ìsọfúnni lára gbogbo ohun tí o ń rà, nítorí ọbẹ̀, àdàlù èròjà ata àti búrẹ́dì sábà máa ń fi àléjì pamọ́. AI lè ràn ọ́ lọ́wọ́ láti ṣètò àtẹ náà kí ó sì rán ọ létí èròjà tí ó sábà máa ń ní àléjì, ṣùgbọ́n kò mọ ọjà àwọn tó ń tà fún ọ. Ìwọ àti àwọn àmì ìsọfúnni rẹ ló mọ̀ ọ́n.",
            "Ṣe àtúnṣe àtẹ náà nígbàkúùgbà tí ìlànà oúnjẹ tàbí ẹni tó ń tà fún ọ bá yí padà. Kọ́ àwọn òṣìṣẹ́ láti sọ pé \"Ẹ jẹ́ kí n ṣàyẹ̀wò\" kí wọ́n sì béèrè lọ́wọ́ ilé ìdáná, wọn kò gbọ́dọ̀ fi ọ̀rọ̀ dá. Ẹ̀ka ìlera ìbílẹ̀ rẹ àti FDA Food Code ní àwọn òfin nípa ààbò oúnjẹ àti mímọ̀ nípa àléjì; ṣàyẹ̀wò ohun tó kàn ọ́ níbi tí o wà."
          ],
          steps: ["Kọ àwọn oúnjẹ rẹ àti gbogbo èròjà inú ọ̀kọ̀ọ̀kan sílẹ̀.", "Ka àmì ìsọfúnni lára gbogbo èròjà tí o rà.", "Sàmì sí ọ̀kọ̀ọ̀kan nínú àléjì mẹ́sàn-án fún oúnjẹ kọ̀ọ̀kan.", "Jẹ́ kí ènìyàn kejì ṣàyẹ̀wò àtẹ náà.", "Ṣe àtúnṣe rẹ̀ nígbà tí ìlànà oúnjẹ tàbí ẹni tó ń tà fún ọ bá yí padà."],
          words: [["Àléjì (allergen)", "oúnjẹ tí ó lè fa àléjì tó le gan-an fún àwọn ènìyàn kan."], ["Ìkànra àléjì (cross-contact)", "nígbà tí àléjì bá wọ inú oúnjẹ míì láti ara ibi tí a jọ ń lò, epo tàbí irinṣẹ́."], ["Food Code", "àpẹẹrẹ àwọn òfin ààbò oúnjẹ ti FDA tí ọ̀pọ̀ ìpínlẹ̀ àti agbègbè ń tẹ̀lé."]],
          slides: [
            { title: "Àwọn àléjì mẹ́sàn-án pàtàkì ti FDA", bullets: ["Wàrà, ẹyin, ẹja, ẹja ìkarahun bí edé", "Èso igi (tree nuts), ẹ̀pà, àlìkámà", "Sóyà, ẹ̀gúsí ìtálẹ̀ (sesame)"] },
            { title: "Ṣe àtẹ náà láti inú òtítọ́", bullets: ["Oúnjẹ ní ẹ̀gbẹ́, àléjì ní òkè", "Ìlànà oúnjẹ rẹ ÀTI gbogbo àmì ìsọfúnni èròjà", "AI ṣètò àtẹ náà; kò mọ àwọn tó ń tà fún ọ"] },
            { title: "Jẹ́ kí ó máa tọ̀nà", bullets: ["Ènìyàn kejì ṣàyẹ̀wò rẹ̀", "Ṣe àtúnṣe tí ìlànà oúnjẹ tàbí ẹni tó ń tà bá yí padà", "Òṣìṣẹ́ kì í fi ọ̀rọ̀ dá: \"Ẹ jẹ́ kí n ṣàyẹ̀wò\""] },
            { title: "Òfin níbi tí o wà", bullets: ["Ẹ̀ka ìlera ìbílẹ̀ rẹ", "FDA Food Code"] }
          ],
          sources: [FDA_ALLERGENS, FDA_CODE],
          tryIt: "Ní kí AI ṣètò àtẹ àléjì òfo fún oúnjẹ márùn-ún pẹ̀lú àwọn àléjì mẹ́sàn-án gẹ́gẹ́ bí ọ̀wọ́n. Kún un fúnra rẹ láti inú ìlànà oúnjẹ àti àmì ìsọfúnni èròjà rẹ, lẹ́yìn náà jẹ́ kí ẹnìkan ṣàyẹ̀wò rẹ̀.",
          youCanNow: "ṣe àtẹ àléjì kí o sì máa tún un ṣe láti inú ìlànà oúnjẹ àti àmì ìsọfúnni tìrẹ.",
          quickCheck: [
            { objective: "O2", q: "Kí ló wà ní òkè àtẹ àléjì nínú ẹ̀kọ́ yìí?", options: ["Iye owó rẹ", "Orúkọ àwọn tó ń tà fún ọ", "Àwọn àléjì mẹ́sàn-án pàtàkì", "Orúkọ àwọn òṣìṣẹ́ rẹ"], answer: 2, why: "Àwọn oúnjẹ wà ní ẹ̀gbẹ́, àwọn àléjì mẹ́sàn-án sì wà ní òkè." },
            { objective: "O2", q: "Ẹni tó ń tà fún ọ yí irú àdàlù èròjà ata tí o ń lò padà. Kí ni o máa ṣe?", options: ["Kò sí nǹkan, àdàlù èròjà ata kì í ní àléjì", "Béèrè lọ́wọ́ AI bóyá irú tuntun náà ní àléjì kí o sì gbà á gbọ́", "Dúró títí oníbàárà yóò fi béèrè", "Ka àmì ìsọfúnni tuntun náà kí o sì ṣe àtúnṣe àtẹ náà"], answer: 3, why: "AI kò mọ ọjà àwọn tó ń tà fún ọ; o máa ṣe àtúnṣe àtẹ náà láti inú àmì ìsọfúnni tuntun." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Àkọsílẹ̀ ìgbáradì àti ti rírà láti inú ọjà tí o tà",
          minutes: 5,
          goal: "Ṣe àkọsílẹ̀ ìgbáradì àti àkọsílẹ̀ rírà ọ̀sẹ̀ kan láti inú iye ọjà tí o tà.",
          text: [
            "Gbígbáradì jù ń sọ oúnjẹ nù; gbígbáradì kéré jù túmọ̀ sí \"ẹ má bínú, ó ti tán\". Bẹ̀rẹ̀ pẹ̀lú iye oúnjẹ kọ̀ọ̀kan tí o ń tà lójúmọ́. Ẹ̀rọ ìtajà (POS) rẹ lè fi èyí hàn, tàbí kí o máa kọ ọ́ sílẹ̀ lọ́nà tó rọrùn.",
            "Nínú spreadsheet: Oúnjẹ, Iye tí a ń tà lójúmọ́ ní àpapọ̀, Ìpín nínú ìsè kan, Iye ìsè tí a nílò. Lẹ́yìn náà kọ èròjà fún ìpín kan láti mọ ohun tí o máa rà. Béèrè lọ́wọ́ AI fún ìrànlọ́wọ́ pẹ̀lú àgbékalẹ̀ ìṣirò: \"Kọ àgbékalẹ̀ Google Sheets láti ka iye ìsè tí a nílò sókè: iye tí a ń tà ní àpapọ̀ pín sí ìpín nínú ìsè kan.\" (=ROUNDUP(B2/C2,0) jẹ́ ọ̀nà kan.)",
            "Ṣe àtúnṣe fún ohun tí o mọ̀: òpin ọ̀sẹ̀, ayẹyẹ, ojú ọjọ́, ọjọ́ ìsinmi. AI lè dábàá bí àkọsílẹ̀ ìgbáradì ṣe máa rí àti àkọsílẹ̀ àyẹ̀wò, ṣùgbọ́n àwọn nọ́mbà àti ìrírí rẹ ló ń pinnu iye."
          ],
          steps: ["Wá iye tí a ń tà lójúmọ́ ní àpapọ̀ fún oúnjẹ kọ̀ọ̀kan.", "Fi ìpín nínú ìsè kan kún un kí o sì fi ROUNDUP ṣírò iye ìsè.", "Kọ èròjà fún ìpín kan kí o sì ṣírò àpapọ̀ ohun tí o máa rà.", "Ṣe àtúnṣe fún òpin ọ̀sẹ̀, ayẹyẹ àti ojú ọjọ́."],
          words: [["Àkọsílẹ̀ ìgbáradì (prep list)", "àkọsílẹ̀ ohun tí ilé ìdáná gbọ́dọ̀ múra sílẹ̀ kí iṣẹ́ tó bẹ̀rẹ̀."], ["Ìpele tó yẹ (par level)", "iye ohun kan tí o fẹ́ kí ó wà lọ́wọ́ rẹ ní ìbẹ̀rẹ̀ iṣẹ́."], ["Ìsè kan (batch)", "síse ìlànà oúnjẹ kan lẹ́ẹ̀kan, tí ó ń mú iye ìpín kan jáde."]],
          slides: [
            { title: "Ìfiṣòfò àbí títán", bullets: ["Gbígbáradì jù ń sọ oúnjẹ nù", "Gbígbáradì kéré jù ń já oníbàárà kulẹ̀", "Bẹ̀rẹ̀ láti iye tí o tà fún oúnjẹ kọ̀ọ̀kan"] },
            { title: "Ìwé ìgbáradì tó rọrùn", bullets: ["Oúnjẹ, iye tí a tà lójúmọ́, ìpín nínú ìsè kan", "Iye ìsè = ROUNDUP(iye tí a tà / ìpín, 0)", "Èròjà fún ìpín kan -> àkọsílẹ̀ rírà"] },
            { title: "Lo ohun tí o mọ̀", bullets: ["Òpin ọ̀sẹ̀, ayẹyẹ, ojú ọjọ́", "AI ń ràn ọ́ lọ́wọ́ pẹ̀lú ìṣètò; ìwọ ló ń pinnu iye"] }
          ],
          tryIt: "Ṣe ìwé ìgbáradì fún oúnjẹ márùn-ún pẹ̀lú iye tí a tà lójúmọ́, ìpín nínú ìsè kan àti àgbékalẹ̀ ROUNDUP fún iye ìsè. Sọ ọ́ di àkọsílẹ̀ rírà fún ọ̀sẹ̀ kan.",
          youCanNow: "ṣe àkọsílẹ̀ ìgbáradì àti ti rírà láti inú iye ọjà tí o tà fúnra rẹ.",
          quickCheck: [
            { objective: "O3", q: "Ìṣòro wo ni gbígbáradì jù máa ń fà?", options: ["Oúnjẹ tí a sọ nù", "Kí oúnjẹ kan tán", "Wákàtí ìṣílẹ̀kùn tó gùn jù", "Owó ilé tó ga jù"], answer: 0, why: "Ẹ̀kọ́ náà sọ pé gbígbáradì jù ń sọ oúnjẹ nù, gbígbáradì kéré jù sì túmọ̀ sí kí oúnjẹ tán." },
            { objective: "O3", q: "Ayẹyẹ ńlá kan wà nínú ìlú ní òpin ọ̀sẹ̀ yìí. Kí ni o máa ṣe pẹ̀lú àkọsílẹ̀ ìgbáradì rẹ?", options: ["Lo àwọn nọ́mbà tí o máa ń lò gẹ́lẹ́", "Fi kún iye náà gẹ́gẹ́ bí ohun tí o mọ̀", "Jẹ́ kí AI pinnu iye láìsí àtúnṣe", "Dẹ́kun ṣíṣe àkọsílẹ̀ ìgbáradì"], answer: 1, why: "O máa ṣe àtúnṣe fún ayẹyẹ, òpin ọ̀sẹ̀ àti ojú ọjọ́, nítorí ìrírí rẹ ló ń pinnu iye." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Mẹ́nù, àléjì àti àkọsílẹ̀ ilé ìdáná",
        questions: [
          { objective: "O1", q: "Àpèjúwe mẹ́nù tí AI kọ fi \"pẹ̀lú cashew\" kún un, ṣùgbọ́n kò sí cashew nínú oúnjẹ rẹ. Kí ni o máa ṣe?", options: ["Fi í sílẹ̀; ó dún dáadáa", "Yọ ọ́ kúrò", "Fi cashew kún oúnjẹ náà", "Má ṣe kà á sí"], answer: 1, why: "Èròjà tí kò tọ́ lè pa oníbàárà tó ní àléjì lára, ó sì ń ṣi gbogbo ènìyàn lọ́nà." },
          { objective: "O2", q: "Oúnjẹ pàtàkì mélòó tó ń fa àléjì ni FDA kà?", options: ["Ogún", "Mẹ́ta", "Mẹ́rìnlá", "Mẹ́sàn-án"], answer: 3, why: "FDA ka mẹ́sàn-án, títí kan ẹ̀gúsí ìtálẹ̀ (sesame)." },
          { objective: "O2", q: "Níbo ni ìsọfúnni àléjì inú àtẹ rẹ ti wá?", options: ["Láti inú ìlànà oúnjẹ rẹ àti àmì ìsọfúnni lára ohun tí o rà", "Láti inú ìfojúdá AI", "Láti inú mẹ́nù olùdíje", "Láti ọ̀dọ̀ àwọn oníbàárà"], answer: 0, why: "Ìlànà oúnjẹ àti àmì ìsọfúnni rẹ nìkan ló ń fi ohun tó wà nínú oúnjẹ rẹ hàn gidi." },
          { objective: "O2", q: "Oníbàárà béèrè bóyá sesame wà nínú oúnjẹ kan, kò sì dá ọ lójú. O máa:", options: ["Béèrè lọ́wọ́ AI", "Fi ọ̀rọ̀ dá pé kò sí", "Sọ pé \"Ẹ jẹ́ kí n ṣàyẹ̀wò\" kí o sì béèrè lọ́wọ́ ilé ìdáná àti àtẹ", "Sọ pé kò sí wàhálà"], answer: 2, why: "Má ṣe fi ọ̀rọ̀ dá rárá nípa àléjì." },
          { objective: "O3", q: "O ń tà 22 lójúmọ́, ìsè kan sì ń mú 8 jáde. Pẹ̀lú ROUNDUP, ìsè mélòó?", options: ["2", "3", "4", "22"], answer: 1, why: "22 / 8 = 2.75, tí a kà sókè sí 3." }
        ]
      }
    },
    {
      name: "Orí 2: Òṣìṣẹ́, oníbàárà àti ìdàgbàsókè",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ṣíṣe ètò iṣẹ́ òṣìṣẹ́",
          minutes: 5,
          goal: "Ṣe ètò iṣẹ́ ọ̀sẹ̀ kan pẹ̀lú ìrànlọ́wọ́ AI, lẹ́yìn náà ṣàyẹ̀wò rẹ̀ pẹ̀lú àwọn òfin rẹ.",
          text: [
            "Fún AI ní òtítọ́: wákàtí iṣẹ́ rẹ, iye ènìyàn tí o nílò ní ìyípo kọ̀ọ̀kan, àkókò tí òṣìṣẹ́ kọ̀ọ̀kan wà àti iṣẹ́ rẹ̀, àti àwọn òfin rẹ. \"Ṣe ètò iṣẹ́ ọ̀sẹ̀ kan fún ilé oúnjẹ taco mi, tí ó ń ṣí láti 11 sí 9, Tuesday sí Sunday. Mo nílò alásè 2 àti òṣìṣẹ́ iwájú 2 ní ọ̀sán àti alẹ́. Àkókò tí wọ́n wà nìyí: [orúkọ àkọ́kọ́ nìkan].\"",
            "Ṣàyẹ̀wò ètò náà fúnra rẹ. Rí i dájú pé ó tọ́, ó bo àwọn àkókò tí èrò pọ̀, ó sì tẹ̀lé òfin iṣẹ́ nípa ìsinmi, àfikún àkókò (overtime) àti àwọn ọmọdé. Àwọn òfin yẹn yàtọ̀ gẹ́gẹ́ bí ìpínlẹ̀ àti ìlú rẹ; ṣàyẹ̀wò lọ́dọ̀ ẹ̀ka iṣẹ́ ìpínlẹ̀ rẹ tàbí ọ̀jọ̀gbọ́n kan. AI kò mọ̀ wọ́n dáadáa tó láti gbẹ́kẹ̀lé.",
            "Má ṣe fi nọ́mbà Social Security, owó oṣù pẹ̀lú orúkọ tàbí àkọsílẹ̀ àdáni nípa òṣìṣẹ́ sínú irinṣẹ́ AI. Orúkọ àkọ́kọ́ àti àkókò tí wọ́n wà ti tó."
          ],
          steps: ["Kọ àwọn ìyípo iṣẹ́ àti iye ènìyàn tí o nílò sílẹ̀.", "Kọ orúkọ àkọ́kọ́ àwọn òṣìṣẹ́ pẹ̀lú àkókò tí wọ́n wà àti iṣẹ́ wọn.", "Béèrè lọ́wọ́ AI fún ètò àkọ́kọ́.", "Ṣàyẹ̀wò bóyá ó tọ́, ó bo gbogbo àkókò, ó sì bá òfin iṣẹ́ ìpínlẹ̀ rẹ mu.", "Gbé ètò ìkẹyìn kalẹ̀ fún gbogbo ènìyàn láti rí."],
          words: [["Àkókò tí òṣìṣẹ́ wà (availability)", "àwọn ọjọ́ àti àkókò tí òṣìṣẹ́ lè ṣiṣẹ́."], ["Àfikún àkókò (overtime)", "wákàtí àfikún tí òfin iṣẹ́ lè béèrè pé kí a san owó tó ga jù fún."], ["Bíbo àkókò (coverage)", "níní òṣìṣẹ́ tó tó ní ìyípo kọ̀ọ̀kan."]],
          slides: [
            { title: "Fún AI ní òtítọ́", bullets: ["Wákàtí àti iye òṣìṣẹ́ tí o nílò ní ìyípo kọ̀ọ̀kan", "Orúkọ àkọ́kọ́, àkókò tí wọ́n wà àti iṣẹ́ wọn"] },
            { title: "Ìwọ ló ń ṣàyẹ̀wò ètò náà", bullets: ["Ó tọ́, ó sì bo àwọn àkókò tí èrò pọ̀", "Ìsinmi, overtime àti àwọn ọmọdé: ṣàyẹ̀wò òfin ìpínlẹ̀ rẹ"] },
            { title: "Pa ìsọfúnni òṣìṣẹ́ mọ́", bullets: ["Kò sí SSN tàbí owó oṣù pẹ̀lú orúkọ", "Orúkọ àkọ́kọ́ àti àkókò tí wọ́n wà ti tó"] }
          ],
          tryIt: "Ṣe ètò iṣẹ́ ọ̀sẹ̀ tó ń bọ̀ pẹ̀lú AI ní lílo orúkọ àkọ́kọ́ àti àkókò tí wọ́n wà. Ṣàyẹ̀wò bóyá ó bo gbogbo àkókò, ó sì tọ́, kí o sì kọ ibi tí o máa ti ṣàyẹ̀wò òfin ìsinmi àti overtime ìpínlẹ̀ rẹ.",
          youCanNow: "ṣe ètò iṣẹ́ òṣìṣẹ́ pẹ̀lú AI kí o sì ṣàyẹ̀wò rẹ̀ pẹ̀lú ohun tí o nílò àti òfin iṣẹ́.",
          quickCheck: [
            { objective: "O4", q: "Òtítọ́ wo ni AI nílò láti ṣe ètò iṣẹ́?", options: ["Nọ́mbà Social Security àti owó oṣù àwọn òṣìṣẹ́", "Orúkọ ilé oúnjẹ nìkan", "Wákàtí iṣẹ́ rẹ, iye ènìyàn tí o nílò ní ìyípo kọ̀ọ̀kan, àti àkókò tí òṣìṣẹ́ wà àti iṣẹ́ wọn", "Àkọsílẹ̀ àdáni nípa òṣìṣẹ́ kọ̀ọ̀kan"], answer: 2, why: "Wákàtí, ohun tí ìyípo nílò, àkókò tí wọ́n wà àti iṣẹ́ wọn ti tó; ìsọfúnni àdáni kò gbọ́dọ̀ wọ inú rẹ̀." },
            { objective: "O4", q: "Ètò tí AI ṣe fi ọmọ ọdún 16 sí ìyípo alẹ́ tó pẹ́. Kí ni o máa ṣe?", options: ["Gbé e kalẹ̀ bí ó ṣe wà", "Béèrè lọ́wọ́ AI bóyá ó bá òfin mu kí o sì gba ìdáhùn gbọ́", "Yọ òṣìṣẹ́ náà kúrò nínú ètò títí láé", "Ṣàyẹ̀wò òfin ìpínlẹ̀ rẹ fún àwọn ọmọdé kí o sì tún ètò náà ṣe"], answer: 3, why: "Òfin nípa àwọn ọmọdé yàtọ̀ gẹ́gẹ́ bí ìpínlẹ̀, nítorí náà o máa ṣàyẹ̀wò wọn kí o sì tún ètò náà ṣe fúnra rẹ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Dídáhùn àyẹ̀wò àti ọ̀rọ̀ oníbàárà",
          minutes: 5,
          goal: "Dáhùn àyẹ̀wò àti ìbéèrè tí oníbàárà sábà máa ń béèrè kíákíá àti pẹ̀lú òtítọ́.",
          text: [
            "Àwọn oníbàárà máa ń béèrè nǹkan kan náà: wákàtí iṣẹ́, ibi ìgbọ́kọ̀sí, ìfipamọ́ àyè, oúnjẹ fún ayẹyẹ, oúnjẹ láìsí ẹran (vegan), àléjì. Lo AI láti sọ ìdáhùn gidi rẹ di ìdáhùn kúkúrú tí o lè lẹ̀ mọ́ ibikíbi. Fún ìbéèrè nípa àléjì, máa tọ́ka sí àtẹ àléjì tí o ti ṣàyẹ̀wò àti àwọn òṣìṣẹ́ rẹ nígbà gbogbo.",
            "Fún àyẹ̀wò: dúpẹ́ fún àyẹ̀wò rere ní ṣókí kí o sì dárúkọ oúnjẹ náà. Fún àyẹ̀wò búburú, fara balẹ̀, tọrọ àforíjìn fún ohun tó ṣẹlẹ̀, sọ ohun tí o ń tún ṣe, kí o sì pè wọ́n láti kàn sí ọ. Má ṣe jiyàn ní gbangba. Tí inú bá ń bí ọ, jẹ́ kí AI kọ ẹ̀dà tó jẹ́jẹ́, lẹ́yìn náà ṣàyẹ̀wò pé gbogbo ọ̀rọ̀ jẹ́ òtítọ́.",
            "Má ṣe kọ àyẹ̀wò èké rárá, má sì sanwó fún àyẹ̀wò rere nìkan. Òfin FTC (àjọ ìjọba US tó ń dáàbò bo oníbàárà) lórí àyẹ̀wò oníbàárà ka èyí léèwọ̀, títí kan àyẹ̀wò èké tí AI kọ."
          ],
          steps: ["Kọ ìdáhùn gidi sí àwọn ìbéèrè tí oníbàárà sábà máa ń béèrè.", "Béèrè lọ́wọ́ AI láti sọ wọ́n di ìdáhùn kúkúrú tí o lè lẹ̀.", "Fi AI kọ ìdáhùn àyẹ̀wò pẹ̀lú ìfarabalẹ̀, lẹ́yìn náà ṣàyẹ̀wò wọn.", "Má ṣe kọ àyẹ̀wò èké tàbí ra àyẹ̀wò rárá."],
          words: [["Àyẹ̀wò (review)", "ìdíwọ̀n àti ọ̀rọ̀ tí oníbàárà kọ ní gbangba."], ["Oúnjẹ fún ayẹyẹ (catering)", "pípèsè oúnjẹ fún ayẹyẹ kan, yàtọ̀ sí jíjẹun nínú ilé oúnjẹ lásán."]],
          slides: [
            { title: "Ìdáhùn tí o lè lẹ̀", bullets: ["Wákàtí, ibi ìgbọ́kọ̀sí, ìfipamọ́ àyè, oúnjẹ ayẹyẹ", "Ìbéèrè àléjì: lo àtẹ tí o ti ṣàyẹ̀wò"] },
            { title: "Ìdáhùn sí àyẹ̀wò", bullets: ["Rere: dúpẹ́ lọ́wọ́ wọn, dárúkọ oúnjẹ náà", "Búburú: fara balẹ̀, tọrọ àforíjìn, tún un ṣe, pè wọ́n", "Ṣàyẹ̀wò pé gbogbo ọ̀rọ̀ jẹ́ òtítọ́"] },
            { title: "Kò sí àyẹ̀wò èké", bullets: ["Òfin FTC ka àyẹ̀wò èké léèwọ̀", "Títí kan èyí tí AI kọ"] }
          ],
          sources: [FTC_REVIEWS],
          tryIt: "Ní kí AI kọ ìdáhùn sí àyẹ̀wò rere kan àti búburú kan (gidi tàbí àpẹẹrẹ, bí oúnjẹ tútù ní ọjọ́ Friday tí èrò pọ̀). Rí i dájú pé gbogbo ọ̀rọ̀ jẹ́ òtítọ́, ó sì dún bí ìwọ.",
          youCanNow: "dáhùn ìbéèrè àti àyẹ̀wò oníbàárà kíákíá, pẹ̀lú ìfarabalẹ̀ àti òtítọ́.",
          quickCheck: [
            { objective: "O5", q: "Báwo ni o ṣe yẹ kí o dáhùn àyẹ̀wò rere?", options: ["Dúpẹ́ lọ́wọ́ wọn ní ṣókí kí o sì dárúkọ oúnjẹ náà", "Má ṣe kà á sí", "Fún wọn lówó fún àyẹ̀wò míì", "Kọ ìtàn gígùn nípa ilé oúnjẹ rẹ"], answer: 0, why: "Ẹ̀kọ́ náà sọ pé kí o dúpẹ́ fún àyẹ̀wò rere ní ṣókí kí o sì dárúkọ oúnjẹ náà." },
            { objective: "O5", q: "Inú ń bí ọ nípa àyẹ̀wò búburú tí kò tọ́. Kí ni o máa ṣe?", options: ["Bá oníbàárà jiyàn ní gbangba", "Jẹ́ kí AI kọ ìdáhùn tó jẹ́jẹ́, lẹ́yìn náà ṣàyẹ̀wò pé gbogbo ọ̀rọ̀ jẹ́ òtítọ́", "Kọ àyẹ̀wò rere èké láti bò ó mọ́lẹ̀", "Pa ojú-ìwé iṣẹ́ rẹ rẹ́"], answer: 1, why: "AI lè ràn ọ́ lọ́wọ́ láti fara balẹ̀, ìwọ sì ń ṣàyẹ̀wò pé ìdáhùn jẹ́ òtítọ́; o kò gbọ́dọ̀ jiyàn ní gbangba tàbí kọ àyẹ̀wò èké." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ṣíṣètò oúnjẹ àkànṣe pẹ̀lú ohun tí o ní",
          minutes: 5,
          goal: "Ṣètò oúnjẹ àkànṣe ọ̀sẹ̀ kan tí ó dín ìfiṣòfò kù, tí ó sì ní èrè.",
          text: [
            "Oúnjẹ àkànṣe lè ta ọjà tó pọ̀ jù kí ó tó bàjẹ́, dán oúnjẹ tuntun wò, kí ó sì mú àwọn oníbàárà déédéé padà wá. Wo ohun tí o rà jù tàbí ohun tó wà ní àsìkò.",
            "Béèrè lọ́wọ́ AI: \"Mo ní ọ̀gẹ̀dẹ̀ àgbagbà, ẹ̀wà dúdú àti itan adìẹ tó pọ̀ jù lọ́sẹ̀ yìí. Dábàá oúnjẹ àkànṣe mẹ́ta tó bá mẹ́nù Caribbean mi mu, tí ó sì lo àwọn wọ̀nyí jù lọ.\" Yan ọ̀kan, ṣírò iye owó rẹ̀ (èròjà fún àwo kan), kí o sì fi iye owó tí ó ní èrè lé e.",
            "Kọ àpèjúwe oúnjẹ àkànṣe náà, ṣàyẹ̀wò àléjì rẹ̀ pẹ̀lú ọ̀nà àtẹ rẹ, fi kún àkọsílẹ̀ ìgbáradì rẹ, kí o sì gbé e jáde pẹ̀lú fọ́tò oúnjẹ gidi náà."
          ],
          steps: ["Kọ èròjà tó pọ̀ jù tàbí ti àsìkò sílẹ̀.", "Béèrè lọ́wọ́ AI fún èrò oúnjẹ àkànṣe tó bá mẹ́nù rẹ mu.", "Ṣírò iye owó àwo kan kí o sì fi iye owó tí ó ní èrè lé e.", "Ṣàyẹ̀wò àléjì kí o sì fi kún àkọsílẹ̀ ìgbáradì.", "Gbé e jáde pẹ̀lú fọ́tò gidi."],
          words: [["Iye owó àwo kan (plate cost)", "iye owó èròjà tó wà nínú ìpín oúnjẹ kan."], ["Ìpín ọgọ́rùn-ún owó oúnjẹ (food cost percentage)", "iye owó àwo kan pín sí iye owó lórí mẹ́nù, ní ìlọ́po 100."]],
          slides: [
            { title: "Ìdí tí a fi ń ṣe oúnjẹ àkànṣe", bullets: ["Lo ọjà tó pọ̀ jù kí ó tó bàjẹ́", "Dán oúnjẹ tuntun wò", "Mú àwọn oníbàárà déédéé padà wá"] },
            { title: "AI fún èrò tuntun", bullets: ["Kọ ohun tí o ní jù sílẹ̀", "Béèrè fún oúnjẹ àkànṣe tó bá mẹ́nù rẹ mu"] },
            { title: "Kí o tó gbé e jáde", bullets: ["Ṣírò iye owó àwo kí o sì fi iye owó lé e", "Ṣàyẹ̀wò àléjì; fi kún àkọsílẹ̀ ìgbáradì", "Lo fọ́tò gidi"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣe àpò irinṣẹ́ ilé oúnjẹ rẹ: àpèjúwe mẹ́nù márùn-ún, àtẹ àléjì láti inú ìlànà oúnjẹ àti àmì ìsọfúnni rẹ, àkọsílẹ̀ ìgbáradì àti ti rírà fún ọ̀sẹ̀ kan, ètò iṣẹ́ àkọ́kọ́, ìdáhùn àyẹ̀wò méjì, àti oúnjẹ àkànṣe kan pẹ̀lú iye owó àwo rẹ̀.",
          youCanNow: "lo AI nínú ìṣètò, iṣẹ́ ìwé àti ìbánisọ̀rọ̀ pẹ̀lú oníbàárà ní ilé oúnjẹ rẹ, láìléwu.",
          quickCheck: [
            { objective: "O6", q: "Kí ni ìdí kan láti ṣe oúnjẹ àkànṣe?", options: ["Láti fi kún iye owó gbogbo nǹkan", "Láti lo wákàtí òṣìṣẹ́ tán", "Láti ta ọjà tó pọ̀ jù kí ó tó bàjẹ́", "Láti yẹra fún ṣíṣàyẹ̀wò àléjì"], answer: 2, why: "Oúnjẹ àkànṣe lè ta ọjà tó pọ̀ jù, dán oúnjẹ tuntun wò, kí ó sì mú àwọn oníbàárà déédéé padà wá." },
            { objective: "O6", q: "AI dábàá oúnjẹ àkànṣe mẹ́ta láti inú ọ̀gẹ̀dẹ̀ àgbagbà tó pọ̀ jù. Kí ni o máa ṣe tẹ̀lé e?", options: ["Gbé gbogbo mẹ́tẹ̀ẹ̀ta jáde lẹ́sẹ̀kẹsẹ̀ pẹ̀lú fọ́tò láti orí íńtánẹ́ẹ̀tì", "Ní kí AI pinnu iye owó", "Má ṣe ṣírò iye owó nítorí ọ̀sẹ̀ kan péré ni", "Yan ọ̀kan, ṣírò iye owó àwo kí o sì fi iye owó tí ó ní èrè lé e"], answer: 3, why: "O máa ṣírò iye owó àwo kí o sì fi iye owó tí ó ní èrè lé e, lẹ́yìn náà ṣàyẹ̀wò àléjì kí o sì fi kún àkọsílẹ̀ ìgbáradì." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Òṣìṣẹ́, oníbàárà àti ìdàgbàsókè",
        questions: [
          { objective: "O4", q: "Níbo ni o ti máa ṣàyẹ̀wò òfin ìsinmi àti overtime?", options: ["Lọ́dọ̀ ẹ̀ka iṣẹ́ ìpínlẹ̀ rẹ tàbí ọ̀jọ̀gbọ́n kan", "Nínú ètò tí AI kọ", "Lọ́dọ̀ oníbàárà kan", "Nínú ọ̀rọ̀ kan lórí ẹ̀rọ ayélujára alásopọ̀"], answer: 0, why: "Òfin iṣẹ́ yàtọ̀ gẹ́gẹ́ bí ìpínlẹ̀ àti ìlú rẹ." },
          { objective: "O4", q: "Ìsọfúnni òṣìṣẹ́ wo ló yẹ kí ó wọ inú prompt ètò iṣẹ́ AI?", options: ["Àdírẹ́sì ilé", "Nọ́mbà Social Security", "Owó oṣù pẹ̀lú orúkọ", "Orúkọ àkọ́kọ́ àti àkókò tí wọ́n wà"], answer: 3, why: "Ohun tí a nílò nìkan, kò sí ohun àdáni." },
          { objective: "O5", q: "Oníbàárà kọ̀wé béèrè bóyá kò sí ẹ̀pà nínú oúnjẹ kan. Ìdáhùn rẹ gbọ́dọ̀ dá lórí:", options: ["Ìfojúdá AI", "Àtẹ àléjì tí o ti ṣàyẹ̀wò àti àwọn òṣìṣẹ́ rẹ", "Fọ́tò mẹ́nù", "Ohun tí o rántí nìkan"], answer: 1, why: "Ìdáhùn nípa àléjì wá láti inú àtẹ tí o ti ṣàyẹ̀wò." },
          { objective: "O5", q: "Lábẹ́ òfin FTC, èwo ni a kà léèwọ̀?", options: ["Kíkọ àyẹ̀wò èké pẹ̀lú AI", "Dídúpẹ́ lọ́wọ́ ẹni tó kọ àyẹ̀wò", "Dídáhùn àyẹ̀wò búburú", "Bíbéèrè lọ́wọ́ oníbàárà fún àyẹ̀wò òtítọ́"], answer: 0, why: "Àyẹ̀wò èké, títí kan èyí tí AI kọ, ni a kà léèwọ̀." },
          { objective: "O6", q: "Oúnjẹ àkànṣe kan lo èròjà $3.50, a sì ń tà á ní $14. Kí ni ìpín ọgọ́rùn-ún owó oúnjẹ?", options: ["14%", "25%", "35%", "50%"], answer: 1, why: "3.50 / 14 = 0.25, tàbí 25%." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI fún Ilé Oúnjẹ",
    questions: [
      { objective: "O1", q: "Àpèjúwe mẹ́nù tó dára jẹ́ nǹkan bí:", options: ["Ọ̀rọ̀ 200", "Ọ̀rọ̀ 10 sí 25", "Lẹ́tà kan", "Ojú-ìwé kan gbáko"], answer: 1, why: "A máa ń ka àpèjúwe kúkúrú kíákíá." },
      { objective: "O1", q: "Kí ni o máa fún AI láti kọ àpèjúwe mẹ́nù?", options: ["Kò sí nǹkan", "Ìsọfúnni ilé ìfowópamọ́ rẹ", "Orúkọ àwọn oníbàárà", "Èròjà gidi àti ọ̀nà síse"], answer: 3, why: "Òtítọ́ gidi ló ń mú àpèjúwe tó péye wá." },
      { objective: "O1", q: "Kí ló dé tí o fi gbọ́dọ̀ ṣàyẹ̀wò gbogbo ọ̀rọ̀ èròjà tí AI kọ?", options: ["Kò pọn dandan", "Láti mú un gùn sí i", "Fún sípẹ́lì nìkan", "Èròjà tí kò tọ́ lè pa oníbàárà tó ní àléjì lára"], answer: 3, why: "Ìpéye jẹ́ ọ̀rọ̀ ààbò." },
      { objective: "O2", q: "Èwo ni ọ̀kan nínú àwọn àléjì mẹ́sàn-án pàtàkì ti FDA?", options: ["Ìrẹsì", "Sesame (ẹ̀gúsí ìtálẹ̀)", "Àgbàdo", "Adìẹ"], answer: 1, why: "A fi sesame kún un gẹ́gẹ́ bí ìkẹsàn-án." },
      { objective: "O2", q: "Kí ló dé tí o fi gbọ́dọ̀ ka àmì ìsọfúnni lára gbogbo èròjà tí o rà?", options: ["Fún ìgbádùn", "Láti mọ iye owó", "Ọbẹ̀ àti àdàlù èròjà lè fi àléjì pamọ́", "Kò pọn dandan"], answer: 2, why: "Àléjì tó farapamọ́ wọ́pọ̀ nínú èròjà tí a ti ṣe tán." },
      { objective: "O2", q: "Ìgbà wo ni o gbọ́dọ̀ ṣe àtúnṣe àtẹ àléjì rẹ?", options: ["Nígbà tí ìlànà oúnjẹ tàbí ẹni tó ń tà fún ọ bá yí padà", "Lẹ́ẹ̀kan ní ọdún mẹ́wàá", "Rárá", "Lẹ́yìn ẹ̀sùn nìkan"], answer: 0, why: "Àwọn ìyípadà lè mú àléjì tuntun wá." },
      { objective: "O2", q: "Kí ni ìkànra àléjì (cross-contact)?", options: ["Ìpè fóònù", "Òṣìṣẹ́ méjì tó ń sọ̀rọ̀", "Àléjì tí ó wọ inú oúnjẹ míì láti ara irinṣẹ́ tàbí epo tí a jọ ń lò", "Ìyípadà mẹ́nù"], answer: 2, why: "Ibi tí a jọ ń lò lè tan àléjì ká." },
      { objective: "O2", q: "Ta ló ń ṣe òfin ààbò oúnjẹ fún ilé oúnjẹ rẹ?", options: ["Ẹ̀ka ìlera ìbílẹ̀ rẹ, tí ó sábà máa ń dá lórí FDA Food Code", "AI", "Àwọn oníbàárà rẹ", "Ojú-òpó àyẹ̀wò kan"], answer: 0, why: "Àwọn àjọ ìjọba ló ń ṣe òfin." },
      { objective: "O3", q: "Àkọsílẹ̀ ìgbáradì ni:", options: ["Ètò iṣẹ́ òṣìṣẹ́", "Ohun tí ilé ìdáná gbọ́dọ̀ múra sílẹ̀ kí iṣẹ́ tó bẹ̀rẹ̀", "Àyẹ̀wò", "Fọ́ọ̀mù owó orí"], answer: 1, why: "Ó ń darí ìgbáradì ilé ìdáná." },
      { objective: "O3", q: "=ROUNDUP(B2/C2,0) máa ń fún ọ ní:", options: ["Àléjì", "Èrè", "Wákàtí òṣìṣẹ́", "Iye ìsè odindi tí a nílò, tí a kà sókè"], answer: 3, why: "Ó ń ka iye ìsè sókè." },
      { objective: "O3", q: "Ta ló ń pinnu iye ìgbáradì ìkẹyìn?", options: ["Ìwọ, láti inú nọ́mbà àti ìrírí rẹ", "AI nìkan", "Ẹni tó ń tà fún ọ", "Àwọn oníbàárà"], answer: 0, why: "AI ń ràn ọ́ lọ́wọ́ pẹ̀lú ìṣètò; ìwọ ló ń pinnu iye." },
      { objective: "O3", q: "Èwo ni ìdí tó dára láti ṣe àtúnṣe ìgbáradì?", options: ["Kò sí", "Irú lẹ́tà tuntun", "Nítorí AI sọ bẹ́ẹ̀", "Ayẹyẹ kan ní àdúgbò ní òpin ọ̀sẹ̀ yìí"], answer: 3, why: "Ayẹyẹ máa ń yí iye oníbàárà padà." },
      { objective: "O4", q: "Ètò iṣẹ́ tí AI kọ fún òṣìṣẹ́ kan ní ìyípo 7. O máa:", options: ["Má ṣe kà á sí", "Gbé e kalẹ̀", "Ṣàyẹ̀wò bóyá ó tọ́ àti òfin iṣẹ́, lẹ́yìn náà tún un ṣe", "Ní kí òṣìṣẹ́ náà fi iṣẹ́ sílẹ̀"], answer: 2, why: "O máa ṣàyẹ̀wò gbogbo ètò tí AI kọ." },
      { objective: "O4", q: "Ṣé AI jẹ́ orísun tí a lè gbẹ́kẹ̀lé fún òfin overtime ìpínlẹ̀ rẹ?", options: ["Bẹ́ẹ̀ni, nígbà gbogbo", "Rárá, ṣàyẹ̀wò lọ́dọ̀ ẹ̀ka iṣẹ́ ìpínlẹ̀", "Ní òpin ọ̀sẹ̀ nìkan", "Fún àwọn ọmọdé nìkan"], answer: 1, why: "Òfin iṣẹ́ nílò orísun ìjọba." },
      { objective: "O5", q: "Àyẹ̀wò búburú kan ráhùn nípa oúnjẹ tútù. Ìdáhùn tó dára máa:", options: ["Fúnni lówó fún àyẹ̀wò tó dára jù", "Jiyàn ní gbangba", "Ṣàfihàn ìsọfúnni oníbàárà", "Tọrọ àforíjìn, sọ ohun tí o ń tún ṣe, kí ó sì pè wọ́n láti kàn sí ọ"], answer: 3, why: "Ìdáhùn tó jẹ́jẹ́, tó sì jẹ́ òtítọ́ ń kọ́ ìgbẹ́kẹ̀lé." },
      { objective: "O5", q: "Sísan owó fún oníbàárà kìkì tí wọ́n bá fún ọ ní ìràwọ̀ 5 jẹ́:", options: ["Dandan", "Ọgbọ́n ìpolówó", "Ohun tí òfin àyẹ̀wò FTC kà léèwọ̀", "Kò burú"], answer: 2, why: "Èrè tí a so mọ́ ọ̀rọ̀ rere nìkan ni a kà léèwọ̀." },
      { objective: "O6", q: "Ọ̀nà tó dára láti lo oúnjẹ àkànṣe ni láti:", options: ["Lo ọjà tó pọ̀ jù kí ó tó bàjẹ́", "Fi oúnjẹ àtijọ́ pamọ́", "Fi kún gbogbo iye owó", "Fo àyẹ̀wò àléjì"], answer: 0, why: "Oúnjẹ àkànṣe ń dín ìfiṣòfò kù." },
      { objective: "O6", q: "Kí ni iye owó àwo kan (plate cost)?", options: ["Iye owó àwọn àwo", "Iye owó èròjà nínú ìpín oúnjẹ kan", "Owó ilé", "Owó ẹ̀bùn (tip)"], answer: 1, why: "Ó jẹ́ iye owó èròjà fún àwo kan." },
      { objective: "O6", q: "Kí o tó gbé oúnjẹ àkànṣe jáde, o gbọ́dọ̀:", options: ["Fo ìṣirò iye owó", "Ṣàyẹ̀wò àléjì kí o sì fi kún àkọsílẹ̀ ìgbáradì", "Lo fọ́tò oúnjẹ míì láti orí íńtánẹ́ẹ̀tì", "Ṣèlérí pé organic ni"], answer: 1, why: "Ààbò àti ìṣètò ló ń kọ́kọ́ wá." },
      { objective: "O6", q: "Ìpín ọgọ́rùn-ún owó oúnjẹ (food cost percentage) ni:", options: ["Iye owó àwo kan pín sí iye owó lórí mẹ́nù, ní ìlọ́po 100", "Owó ilé pín sí iye tí a tà", "Owó ẹ̀bùn ní ìlọ́po iye òṣìṣẹ́", "Iye owó pẹ̀lú owó orí"], answer: 0, why: "Ó fi iye nínú owó oúnjẹ tí ó jẹ́ ti èròjà hàn." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      1,
      3,
      6,
      9,
      12,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Àpèjúwe mẹ́nù tó péye",
        objective: "O1",
        notYet: "Àpèjúwe kan dárúkọ èròjà tàbí ọ̀rọ̀ tí kò sí nínú oúnjẹ náà.",
        meets: "Àpèjúwe kúkúrú márùn-ún, tí gbogbo ọ̀rọ̀ èròjà bá ìlànà oúnjẹ mu.",
        exceeds: "Ọ̀kọ̀ọ̀kan tún sọ bí a ṣe sè oúnjẹ náà àti ìdí tí ó fi jẹ́ àkànṣe."
      },
      {
        name: "Àtẹ àléjì tí a ti ṣàyẹ̀wò",
        objective: "O2",
        notYet: "A da àtẹ náà kọ láti ọ̀dọ̀ AI, tàbí oúnjẹ kan tàbí àléjì kan kò sí níbẹ̀.",
        meets: "A ti sàmì sí àléjì mẹ́sàn-án fún gbogbo oúnjẹ márùn-ún láti inú ìlànà oúnjẹ àti àmì ìsọfúnni, ènìyàn kejì sì ti ṣàyẹ̀wò rẹ̀.",
        exceeds: "Ó kọ èròjà tí a rà tí ó fi àléjì pamọ́ sílẹ̀, àti ìgbà tí a ṣe àtúnṣe àtẹ náà kẹ́yìn."
      },
      {
        name: "Àkọsílẹ̀ ìgbáradì àti ti rírà",
        objective: "O3",
        notYet: "A fi ọ̀rọ̀ dá iye, tàbí a kò ka iye ìsè sókè.",
        meets: "Àkọsílẹ̀ ìgbáradì àti ti rírà ọ̀sẹ̀ kan tí a ṣe láti inú iye tí a tà, pẹ̀lú iye ìsè tí a kà sókè.",
        exceeds: "A ti ṣàtúnṣe iye fún ayẹyẹ, òpin ọ̀sẹ̀ tàbí ojú ọjọ́ kan tí a dárúkọ."
      },
      {
        name: "Ètò iṣẹ́ tó tọ́, tí a ti ṣàyẹ̀wò",
        objective: "O4",
        notYet: "Ètò náà fi ìyípo kan tí èrò pọ̀ sí sílẹ̀ láìní òṣìṣẹ́ tó tó, tàbí ó lo ìsọfúnni àdáni òṣìṣẹ́.",
        meets: "Ó bo gbogbo ìyípo lọ́nà tó tọ́, ó lo orúkọ àkọ́kọ́ nìkan, ó sì kọ ibi tí a ti ṣàyẹ̀wò òfin iṣẹ́.",
        exceeds: "Ó tún kọ ìsinmi àti òfin èyíkéyìí fún àwọn ọmọdé láti orísun ìpínlẹ̀."
      },
      {
        name: "Ìdáhùn àyẹ̀wò tó jẹ́ òtítọ́",
        objective: "O5",
        notYet: "Ìdáhùn kan ń jiyàn, ó ṣe ìlérí èké, tàbí ó fúnni ní ẹ̀bùn fún àyẹ̀wò.",
        meets: "A dáhùn àyẹ̀wò rere kan àti búburú kan pẹ̀lú ìfarabalẹ̀, pẹ̀lú ọ̀rọ̀ òtítọ́ nìkan.",
        exceeds: "Ìdáhùn sí àyẹ̀wò búburú dárúkọ àtúnṣe gidi kan, ó sì pe oníbàárà láti kàn sí ọ."
      },
      {
        name: "Oúnjẹ àkànṣe tí a ti ṣírò owó rẹ̀",
        objective: "O6",
        notYet: "Oúnjẹ àkànṣe náà kò ní iye owó àwo tàbí iye owó títà.",
        meets: "Oúnjẹ àkànṣe kan pẹ̀lú iye owó àwo, iye owó títà tí ó ní èrè, àti àyẹ̀wò àléjì.",
        exceeds: "A tún fi kún àkọsílẹ̀ ìgbáradì, ó sì lo ọjà tó pọ̀ jù tàbí ti àsìkò."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn olùní tí wọ́n sọ pé wọ́n ń lo àtẹ àléjì àti àkọsílẹ̀ ìgbáradì wọn nínú ilé ìdáná láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn olùní tí wọ́n sọ pé oúnjẹ tí wọ́n ń sọ nù dín kù tàbí pé nǹkan kò fi bẹ́ẹ̀ tán mọ́ láàárín ọjọ́ 30",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ ilé iṣẹ́ kékeré míì ní Koach Learn láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́ àti spreadsheet ọ̀fẹ́ bí Google Sheets",
      "Ìlànà oúnjẹ tìrẹ, àmì ìsọfúnni èròjà àti iye ọjà tí o tà fún ọ̀sẹ̀ kan",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, ìdánrawò, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ní kí àwọn olùní mú ìlànà oúnjẹ àti àmì ìsọfúnni gidi wá, tàbí lo àpẹẹrẹ, kí a lè ṣe àtẹ àléjì láti inú ìsọfúnni gidi.",
      "Tẹnu mọ́ ọn pé òfin àléjì, ààbò oúnjẹ àti iṣẹ́ wá láti FDA, ẹ̀ka ìlera ìbílẹ̀ àti ẹ̀ka iṣẹ́ ìpínlẹ̀, kì í ṣe láti AI.",
      "Rán àwọn akẹ́kọ̀ọ́ létí láti lo orúkọ àkọ́kọ́ nìkan fún òṣìṣẹ́, kí wọ́n má sì tẹ nọ́mbà Social Security tàbí owó oṣù pẹ̀lú orúkọ rárá.",
      "Ṣètò ìpàdé ní ìta àkókò tí èrò pọ̀ jù, fún àpẹẹrẹ ní àárín ọ̀sán.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};

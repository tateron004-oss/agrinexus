"use strict";

// Koach Learn course (Yoruba translation of workforce/workforce-ai-new-workforce.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const BLS_OOH = { name: "Àjọ Ìṣirò Iṣẹ́ ti United States (BLS): Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" };
const CAREERONESTOP = { name: "CareerOneStop (Ẹ̀ka Iṣẹ́ ti United States): wá ẹ̀kọ́ àti American Job Centers", url: "https://www.careeronestop.org/" };

module.exports = {
  id: "workforce-ai-new-workforce-yo",
  lang: "yo",
  translationOf: "workforce-ai-new-workforce",
  category: "Workforce Development",
  name: "AI nínú Ayé Iṣẹ́ Tuntun",
  skills: "Mímọ bí AI ṣe ń yí iṣẹ́ padà, Pípín iṣẹ́ rẹ sí àwọn iṣẹ́ kékeré, Dídá àwọn iṣẹ́ tí AI lè ràn lọ́wọ́ mọ̀, Wíwá ìsọfúnni tó ṣeé gbẹ́kẹ̀ lé nípa ọjọ́ iwájú iṣẹ́, Ṣíṣe ètò ọjọ́ 90 láti kọ́ ọgbọ́n tuntun, Sísọ̀rọ̀ nípa ọgbọ́n AI rẹ pẹ̀lú agbanisíṣẹ́",
  outcome: "pín iṣẹ́ rẹ (èyí tí o ń ṣe tàbí èyí tí o fẹ́) sí àwọn iṣẹ́ kékeré, sàmì sí àwọn tí AI lè ràn lọ́wọ́ àti àwọn tí ó nílò ọgbọ́n ènìyàn, wá ọjọ́ iwájú iṣẹ́ rẹ lórí orísun ìjọba, kí o sì sọ ọ́ di ètò ọjọ́ 90 láti kọ́ ọgbọ́n tuntun, àti ọ̀nà kúkúrú tó jẹ́ òótọ́ láti sọ ọgbọ́n AI rẹ fún agbanisíṣẹ́.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn tí ń wá iṣẹ́ àti àwọn òṣìṣẹ́ tí wọ́n ń gbọ́ léraléra pé AI máa yí iṣẹ́ padà, tí wọ́n sì fẹ́ mọ ohun tí ó túmọ̀ sí fún wọn: àwọn òṣìṣẹ́ ilé ìkẹ́rùsí àti ìkó ẹrù, àwọn òṣìṣẹ́ ilé ìtajà àti iṣẹ́ oníbàárà, àwọn òṣìṣẹ́ ọ́fíìsì, àwọn olùrànlọ́wọ́ ní ẹ̀ka ìlera, àwọn oníṣẹ́ ọwọ́ àti àwọn awakọ̀.",
    "O máa kọ́ bí AI ṣe sábà máa ń yí àwọn iṣẹ́ kékeré padà dípò gbogbo iṣẹ́ kan, o máa wo iṣẹ́ rẹ ní ọ̀kọ̀ọ̀kan, o máa wá ìsọfúnni tó ṣeé gbẹ́kẹ̀ lé nípa iṣẹ́ rẹ, o sì máa ṣe ètò tó ṣeé ṣe láti kọ́ ọgbọ́n tí yóò jẹ́ kí o máa wúlò. Ní ìparí, o máa ṣe àṣeṣe bí o ṣe lè sọ̀rọ̀ nípa ọgbọ́n AI nínú ìfọ̀rọ̀wánilẹ́nuwò tàbí pẹ̀lú ọ̀gá rẹ.",
    "A kò sọ àsọtẹ́lẹ̀ iṣẹ́ wo ni yóò pòórá, kò sì sí ẹ̀kọ́ kankan tí ó lè ṣèlérí iṣẹ́ tàbí àlékún owó oṣù. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí.",
    "Àwọn orísun ìjọba tí a dárúkọ jẹ́ ti United States (Amẹ́ríkà). Tí o bá ń gbé ní orílẹ̀-èdè míì, tún wá iṣẹ́ ìjọba fún wíwá iṣẹ́ àti ìṣirò iṣẹ́ ti orílẹ̀-èdè rẹ."
  ],
  finalTask: "Ṣe ètò iṣẹ́ AI tìrẹ: àkọsílẹ̀ àwọn iṣẹ́ kékeré nínú iṣẹ́ rẹ (èyí tí o ń ṣe tàbí èyí tí o fẹ́), kí ọ̀kọ̀ọ̀kan ní àmì \"AI lè ràn lọ́wọ́\", \"ọgbọ́n ènìyàn\" tàbí \"méjèèjì\"; òtítọ́ mẹ́ta nípa iṣẹ́ rẹ láti inú BLS Occupational Outlook Handbook; ètò ọjọ́ 90 láti kọ́ ọgbọ́n mẹ́ta, pẹ̀lú orísun ọ̀fẹ́ àti àkókò ọ̀sẹ̀ kọ̀ọ̀kan; àti ìdáhùn ìṣẹ́jú-àáyá 30 tó jẹ́ òótọ́, tó sì ṣe kedere sí \"Báwo ni o ṣe ń lo AI nínú iṣẹ́ rẹ?\".",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn tí ń wá iṣẹ́ àti àwọn àgbàlagbà tí ń ṣiṣẹ́ tí wọ́n ń gbọ́ léraléra pé AI máa yí iṣẹ́ padà: àwọn òṣìṣẹ́ ilé ìkẹ́rùsí àti ìkó ẹrù, àwọn òṣìṣẹ́ ilé ìtajà àti iṣẹ́ oníbàárà, àwọn òṣìṣẹ́ ọ́fíìsì, àwọn olùrànlọ́wọ́ ní ẹ̀ka ìlera, àwọn oníṣẹ́ ọwọ́ àti àwọn awakọ̀.",
    startingPoint: "Wọ́n mọ iṣẹ́ wọn dáadáa, wọ́n sì lè lo smartphone tàbí kọ̀mpútà. Ọ̀pọ̀ ń ṣàníyàn tàbí kò dá wọn lójú nípa AI, wọn kò tíì wo ìsọfúnni ìjọba nípa ọjọ́ iwájú iṣẹ́, wọn kò sì ní ètò tí wọ́n kọ sílẹ̀ láti kọ́ ọgbọ́n tuntun.",
    gap: "AI ń yí àwọn iṣẹ́ kékeré tí ó ń gba àkókò padà nínú ọ̀pọ̀ iṣẹ́. Àwọn akẹ́kọ̀ọ́ nílò láti rí èwo nínú iṣẹ́ wọn ni AI lè ràn lọ́wọ́ àti èwo ló nílò ọgbọ́n ènìyàn, ṣàyẹ̀wò ọjọ́ iwájú iṣẹ́ wọn lórí orísun ìjọba, kí wọ́n sì tẹ̀lé ètò tó ṣeé ṣe láti kọ́ ọgbọ́n tí wọ́n lè ṣàlàyé ní òótọ́ fún agbanisíṣẹ́.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a kò retí ìmọ̀ ẹ̀rọ kankan tẹ́lẹ̀",
      "Ẹ̀rọ: smartphone tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì; ọ̀pọ̀ ń lo kọ̀mpútà ilé-ìkàwé tàbí ti American Job Center",
      "Àkókò: ẹ̀kọ́ tí ó gba nǹkan bí ìṣẹ́jú 5, àti ètò wákàtí díẹ̀ lọ́sẹ̀ tí ó bá iṣẹ́ àti ẹbí mu",
      "Ìsọfúnni àdáni àti òfin ilé-iṣẹ́: kò sí ìsọfúnni àdáni tàbí àṣírí ilé-iṣẹ́ nínú irinṣẹ́ AI; òfin AI agbanisíṣẹ́ ló ṣáájú",
      "Nọ́mbà ọjọ́ iwájú iṣẹ́ máa ń wá láti ojú-ewé BLS ti ìjọba, kì í ṣe láti ọ̀dọ̀ AI"
    ],
    prerequisites: "Kò sí. Àwọn akẹ́kọ̀ọ́ tí kò tíì lo olùrànlọ́wọ́ AI rí lè ṣe \"Essential AI Tools for the Workplace\" pẹ̀lú ẹ̀kọ́ yìí."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí o bá wo iṣẹ́ tí o ń ṣe báyìí tàbí èyí tí o ṣe kẹ́yìn", action: "kọ ó kéré tán iṣẹ́ kékeré mẹ́jọ nínú iṣẹ́ náà sílẹ̀, kí o sì ṣàlàyé bí AI ṣe ń kan àwọn iṣẹ́ kékeré dípò gbogbo iṣẹ́ kan", standard: "ní ọ̀rọ̀ ara rẹ" },
    { id: "O2", condition: "Tí o bá ní àkọsílẹ̀ àwọn iṣẹ́ kékeré rẹ", action: "sàmì sí iṣẹ́ kọ̀ọ̀kan pé \"AI lè ràn lọ́wọ́\", \"ọgbọ́n ènìyàn\" tàbí \"méjèèjì\"", standard: "kí gbogbo iṣẹ́ ní àmì, kí ìwọ fúnra rẹ sì ṣe ìpinnu ìkẹyìn" },
    { id: "O3", condition: "Fún iṣẹ́ tí o ń ṣe tàbí èyí tí o fẹ́", action: "wá ọjọ́ iwájú iṣẹ́ náà nínú BLS Occupational Outlook Handbook, kí o sì wá American Job Center tó súnmọ́ ọ jù", standard: "pẹ̀lú òtítọ́ mẹ́ta tí o mú láti ojú-ewé ìjọba" },
    { id: "O4", condition: "Tí o bá ní ìpolówó iṣẹ́ gidi mẹ́ta fún iṣẹ́ tí o fẹ́", action: "yan ọgbọ́n mẹ́ta láti kọ́, kí o sì ṣàlàyé ìdí tí ọ̀kọ̀ọ̀kan fi ṣe pàtàkì", standard: "pẹ̀lú ọgbọ́n irinṣẹ́ AI kan, ọgbọ́n iṣẹ́ rẹ kan àti ọgbọ́n ènìyàn kan" },
    { id: "O5", condition: "Fún ọgbọ́n mẹ́ta rẹ", action: "kọ ètò ọjọ́ 90 láti kọ́ ọgbọ́n tuntun, pẹ̀lú orísun, àkókò ọ̀sẹ̀ kọ̀ọ̀kan àti ẹ̀rí fún ọgbọ́n kọ̀ọ̀kan", standard: "kí ọ̀sẹ̀ méjì àkọ́kọ́ ẹ̀kọ́ ti wà nínú kàlẹ́ńdà rẹ" },
    { id: "O6", condition: "Nígbà tí agbanisíṣẹ́ bá béèrè bí o ṣe ń lo AI", action: "fún un ní ìdáhùn ìṣẹ́jú-àáyá 30 tí ó tẹ̀lé Iṣẹ́-Irinṣẹ́-Àyẹ̀wò-Èsì", standard: "tí ó jẹ́ òótọ́, tí ó ṣe kedere, tí ó sì tẹ̀lé òfin AI agbanisíṣẹ́ rẹ" }
  ],
  chapters: [
    {
      name: "Orí 1: Bí AI ṣe ń yí iṣẹ́ padà",
      lessons: [
        {
          objectives: ["O1"],
          title: "AI ń yí àwọn iṣẹ́ kékeré padà, kì í ṣe gbogbo iṣẹ́ nìkan",
          minutes: 5,
          goal: "Ṣàlàyé bí AI ṣe ń kan àwọn iṣẹ́ kékeré inú iṣẹ́ kan.",
          text: [
            "Iṣẹ́ kọ̀ọ̀kan jẹ́ àkójọpọ̀ àwọn iṣẹ́ kékeré. Olùgbàlejò ní ilé ìwòsàn ń gbé fóònù, ń ṣètò àkókò ìpàdé, ń ṣàyẹ̀wò ìbánigbófò, ń kí àwọn aláìsàn, ó sì ń tu àwọn tí ọkàn wọn kò balẹ̀ nínú. Olórí ní ilé ìkẹ́rùsí ń ṣètò ìyípo iṣẹ́, ń tọpinpin ẹrù, ń kọ́ àwọn òṣìṣẹ́ tuntun, ó sì ń yanjú ìṣòro níbi iṣẹ́.",
            "Àwọn irinṣẹ́ AI mọ àwọn iṣẹ́ kan dáadáa: kíkọ àkọ́pẹrẹ ọ̀rọ̀, ṣíṣe àkópọ̀, wíwá nǹkan nínú ìsọfúnni, kíkún fọ́ọ̀mù, títò nǹkan àti rírí àpẹẹrẹ tí ó ń tún ara rẹ̀ ṣe. Wọn kò lágbára nínú àwọn míì: iṣẹ́ ọwọ́ àti ti ara, mímọ ohun tí ń ṣẹlẹ̀ láàárín àwọn ènìyàn, kíkọ́ ìgbẹ́kẹ̀lé, bíbá nǹkan tuntun lò, àti gbígba ojúṣe.",
            "Nítorí náà, nínú ọ̀pọ̀ iṣẹ́, AI ń yí àwọn iṣẹ́ kékeré tí ó ń gba àkókò padà. Àwọn tí wọ́n kọ́ bí a ṣe ń lo AI fún iṣẹ́ àtúnṣe-ojoojúmọ́ sábà máa ń ní àkókò sí i fún iṣẹ́ tí ó nílò ènìyàn, èyí sì lè jẹ́ kí wọ́n wúlò jù."
          ],
          words: [["Iṣẹ́ kékeré (task)", "apá kan iṣẹ́ nínú iṣẹ́ kan, bí ṣíṣètò àkókò ìpàdé."], ["Iṣẹ́ àtúnṣe-ojoojúmọ́ (routine task)", "iṣẹ́ tí a ń ṣe ní ọ̀nà kan náà léraléra."], ["Upskilling", "kíkọ́ ọgbọ́n tuntun láti ṣe iṣẹ́ rẹ dáadáa sí i tàbí láti gòkè."]],
          slides: [
            { title: "Iṣẹ́ jẹ́ àkójọpọ̀ iṣẹ́ kékeré", bullets: ["Olùgbàlejò: fóònù, àkókò ìpàdé, ìbánigbófò, kíkí ènìyàn", "Olórí ilé ìkẹ́rùsí: ìyípo iṣẹ́, ẹrù, kíkọ́ òṣìṣẹ́, ìṣòro"] },
            { title: "Ohun tí AI mọ̀ ṣe dáadáa", bullets: ["Kíkọ àkọ́pẹrẹ àti ṣíṣe àkópọ̀", "Wíwá nǹkan àti kíkún fọ́ọ̀mù", "Títò nǹkan àti rírí àpẹẹrẹ"] },
            { title: "Ohun tí ènìyàn ṣe dáadáa jù", bullets: ["Iṣẹ́ ọwọ́ àti ti ara", "Mímọ ohun tí ń ṣẹlẹ̀ láàárín ènìyàn àti kíkọ́ ìgbẹ́kẹ̀lé", "Bíbá nǹkan tuntun lò; gbígba ojúṣe"] }
          ],
          tryIt: "Kọ orúkọ iṣẹ́ tí o ń ṣe báyìí tàbí èyí tí o ṣe kẹ́yìn, kí o sì kọ ó kéré tán iṣẹ́ kékeré mẹ́jọ tí o ń ṣe (tàbí tí o ṣe) ní ọ̀sẹ̀ lásán.",
          youCanNow: "ṣàlàyé bí AI ṣe ń kan àwọn iṣẹ́ kékeré inú iṣẹ́ kan.",
          quickCheck: [
            { objective: "O1", q: "Kí ni iṣẹ́ jẹ́, nígbà tí o bá ń ronú nípa bí AI ṣe ń yí iṣẹ́ padà?", options: ["Iṣẹ́ kékeré kan ṣoṣo", "Orúkọ iṣẹ́ nìkan", "Àkójọpọ̀ àwọn iṣẹ́ kékeré", "Àkọsílẹ̀ àwọn irinṣẹ́"], answer: 2, why: "Iṣẹ́ jẹ́ àkójọpọ̀ àwọn iṣẹ́ kékeré, AI sì ń yí àwọn kan padà ju àwọn míì lọ." },
            { objective: "O1", q: "O fẹ́ mọ bí AI ṣe lè kan iṣẹ́ rẹ. Kí ni o máa kọ́kọ́ ṣe?", options: ["Kọ àwọn iṣẹ́ kékeré tí o ń ṣe ní ọ̀sẹ̀ lásán sílẹ̀", "Fi iṣẹ́ sílẹ̀ kí o sì wá iṣẹ́ tuntun", "Béèrè lọ́wọ́ AI bóyá yóò gba ipò rẹ", "Má ṣe kọbi ara sí AI rárá"], answer: 0, why: "Kíkọ àwọn iṣẹ́ kékeré rẹ sílẹ̀ ń fi hàn èwo ni AI lè ràn lọ́wọ́ àti èwo ló dá lé ọ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Sísàmì sí iṣẹ́ rẹ: AI lè ràn lọ́wọ́, ọgbọ́n ènìyàn, tàbí méjèèjì",
          minutes: 5,
          goal: "Pín àwọn iṣẹ́ kékeré inú iṣẹ́ rẹ ní ìbámu pẹ̀lú ibi tí AI ti lè ràn lọ́wọ́.",
          text: [
            "Mú àkọsílẹ̀ iṣẹ́ rẹ kí o sì sàmì sí ọ̀kọ̀ọ̀kan. \"AI lè ràn lọ́wọ́\": kíkọ ímeèlì, ṣíṣe àkọsílẹ̀ àyẹ̀wò, ṣíṣe àkópọ̀ ìlànà gígùn. \"Ọgbọ́n ènìyàn\": títu oníbàárà tí inú ń bí nínú lójúkojú, gbígbé àti kíkó ẹrù láìléwu, títún ẹ̀rọ ṣe. \"Méjèèjì\": kíkọ ìròyìn níbi tí AI ti kọ àkọ́pẹrẹ tí ìwọ sì ṣàyẹ̀wò òtítọ́, tàbí ṣíṣètò àkókò iṣẹ́ níbi tí AI ti dábàá tí ìwọ sì pinnu.",
            "O lè ní kí olùrànlọ́wọ́ AI ràn ọ́ lọ́wọ́ láti ronú: \"Mo jẹ́ olórí ìyípo iṣẹ́ ní ilé ìtajà. Àwọn iṣẹ́ mi nìyí. Èwo ni olùrànlọ́wọ́ AI lè ràn lọ́wọ́, báwo sì ni?\" Lẹ́yìn náà lo ìdájọ́ ara rẹ; o mọ iṣẹ́ náà ju u lọ.",
            "Wo àwọn iṣẹ́ \"ọgbọ́n ènìyàn\". Àwọn wọ̀nyí ni agbára tí o máa mú dàgbà, tí o sì máa sọ̀rọ̀ nípa rẹ̀ pẹ̀lú agbanisíṣẹ́: ìbánisọ̀rọ̀, ìṣiṣẹ́pọ̀, yíyanjú ìṣòro, ààbò, ìtọ́jú ènìyàn."
          ],
          steps: ["Sàmì sí iṣẹ́ kọ̀ọ̀kan: AI lè ràn lọ́wọ́, ọgbọ́n ènìyàn, tàbí méjèèjì.", "Béèrè èrò lọ́wọ́ olùrànlọ́wọ́ AI, lẹ́yìn náà pinnu fúnra rẹ.", "Fa òbìrí yí iṣẹ́ \"AI lè ràn lọ́wọ́\" méjì ká láti gbìyànjú ní oṣù yìí.", "Fa ìlà sí ìsàlẹ̀ àwọn iṣẹ́ \"ọgbọ́n ènìyàn\" tí o lágbára jù nínú rẹ̀."],
          words: [["Ọgbọ́n ènìyàn (human skills)", "ọgbọ́n bí ìbánisọ̀rọ̀, ìṣiṣẹ́pọ̀, ìdájọ́ àti ìtọ́jú ènìyàn tí ènìyàn ń ṣe dáadáa jù; a tún ń pè wọ́n ní soft skills tàbí durable skills."]],
          slides: [
            { title: "Àmì mẹ́ta", bullets: ["AI lè ràn lọ́wọ́: ímeèlì, àkọsílẹ̀ àyẹ̀wò, àkópọ̀", "Ọgbọ́n ènìyàn: títu ènìyàn nínú, gbígbé ẹrù láìléwu, títún nǹkan ṣe", "Méjèèjì: AI kọ àkọ́pẹrẹ, ìwọ ṣàyẹ̀wò kí o sì pinnu"] },
            { title: "Béèrè lọ́wọ́ AI, lẹ́yìn náà pinnu", bullets: ["\"Èwo nínú iṣẹ́ mi ni AI lè ràn lọ́wọ́?\"", "O mọ iṣẹ́ náà ju u lọ"] },
            { title: "Agbára rẹ", bullets: ["Ìbánisọ̀rọ̀ àti ìṣiṣẹ́pọ̀", "Yíyanjú ìṣòro àti ààbò", "Ìtọ́jú ènìyàn àti ìdájọ́"] }
          ],
          tryIt: "Sàmì sí gbogbo iṣẹ́ inú àkọsílẹ̀ rẹ. Fa òbìrí yí iṣẹ́ \"AI lè ràn lọ́wọ́\" méjì tí o máa gbìyànjú ní oṣù yìí ká, kí o sì fa ìlà sí ìsàlẹ̀ iṣẹ́ ọgbọ́n ènìyàn méjì tí o lágbára jù nínú rẹ̀.",
          youCanNow: "pín àwọn iṣẹ́ kékeré inú iṣẹ́ rẹ sí ibi tí AI ti lè ràn lọ́wọ́ àti ibi tí ọgbọ́n ènìyàn rẹ ti ṣe pàtàkì jù.",
          quickCheck: [
            { objective: "O2", q: "Iṣẹ́ wo ló jẹ́ ọgbọ́n ènìyàn?", options: ["Dída nọ́mbà kọ sínú fọ́ọ̀mù", "Kíkọ ìròyìn ojoojúmọ́ kan náà", "Títò ímeèlì ní ìbámu pẹ̀lú ọjọ́", "Títu oníbàárà tí inú ń bí nínú"], answer: 3, why: "Kíkọ́ ìgbẹ́kẹ̀lé àti títu ènìyàn nínú dá lé ọgbọ́n ènìyàn." },
            { objective: "O2", q: "AI sàmì sí iṣẹ́ rẹ \"bíbá ẹ̀sùn oníbàárà lò\" pé \"AI lè ràn lọ́wọ́\" nìkan. O kò gbà. Kí ni o máa ṣe?", options: ["Gba àmì tí AI fi sí i", "Ṣe ìpinnu ìkẹyìn fúnra rẹ; ó lè jẹ́ \"méjèèjì\"", "Pa iṣẹ́ náà rẹ́", "Béèrè lọ́wọ́ AI míì títí yóò fi gbà"], answer: 1, why: "Ìwọ lo mọ iṣẹ́ rẹ jù, nítorí náà ìwọ ló ń ṣe ìpinnu ìkẹyìn lórí àmì kọ̀ọ̀kan." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Wíwá ìsọfúnni tó ṣeé gbẹ́kẹ̀ lé nípa iṣẹ́ rẹ",
          minutes: 5,
          goal: "Wá ọjọ́ iwájú iṣẹ́ rẹ lórí orísun ìjọba.",
          text: [
            "Àwọn àkọlé ìròyìn nípa AI àti iṣẹ́ sábà máa ń dẹ́rù bani tàbí kí wọ́n fi kún un. Dípò bẹ́ẹ̀, lo orísun ìjọba tí ó dá lórí ìṣirò. Ní US, Bureau of Labor Statistics (BLS) ń tẹ Occupational Outlook Handbook jáde ní bls.gov/ooh. Fún ọgọ́rọ̀ọ̀rún iṣẹ́, ó ń fi hàn ohun tí iṣẹ́ náà ní nínú, ẹ̀kọ́ tí wọ́n sábà máa ń nílò, owó oṣù àti bí iye iṣẹ́ náà ṣe máa yí padà lọ́jọ́ iwájú.",
            "Wá iṣẹ́ rẹ, lẹ́yìn náà kọ sílẹ̀: ohun tí àwọn òṣìṣẹ́ ń ṣe, bí a ṣe ń di ọ̀kan lára wọn, owó oṣù àárín (median pay), àti ọjọ́ iwájú iṣẹ́ náà. Wo àwọn iṣẹ́ tó jọ ọ́ pẹ̀lú; wọ́n lè fi ìgbésẹ̀ tó kàn hàn ọ́.",
            "CareerOneStop, láti ọ̀dọ̀ Ẹ̀ka Iṣẹ́ ti US (US Department of Labor), ń ràn ọ́ lọ́wọ́ láti wá ètò ẹ̀kọ́ àti American Job Center tó wà nítòsí rẹ, tí ó lè fúnni ní iṣẹ́ ìrànlọ́wọ́ iṣẹ́ ọ̀fẹ́. Ní kí AI ṣàlàyé ohunkóhun tí kò yé ọ lórí àwọn ojú-ewé wọ̀nyí, ṣùgbọ́n mú àwọn nọ́mbà láti ojú-ewé náà fúnra rẹ̀."
          ],
          steps: ["Lọ sí bls.gov/ooh kí o sì wá iṣẹ́ rẹ.", "Kọ sílẹ̀: ohun tí wọ́n ń ṣe, bí a ṣe ń di ọ̀kan lára wọn, owó oṣù àárín, ọjọ́ iwájú.", "Ṣàyẹ̀wò iṣẹ́ méjì tó jọ ọ́.", "Wá American Job Center tó wà nítòsí rẹ lórí CareerOneStop."],
          words: [["BLS", "Bureau of Labor Statistics: àjọ ìjọba US tí ó ń tẹ ìsọfúnni nípa iṣẹ́ àti owó oṣù jáde."], ["Ọjọ́ iwájú iṣẹ́ (job outlook)", "bí a ṣe retí pé iye iṣẹ́ nínú irú iṣẹ́ kan yóò yí padà."], ["Owó oṣù àárín (median pay)", "owó oṣù tí ó wà ní àárín: ìdajì ń gbà jù u lọ, ìdajì ń gbà kéré sí i."]],
          slides: [
            { title: "Má ṣe tẹ̀lé ariwo ìròyìn", bullets: ["Lo orísun ìjọba tí ó dá lórí ìṣirò", "BLS Occupational Outlook Handbook: bls.gov/ooh"] },
            { title: "Ohun tí o máa kọ sílẹ̀", bullets: ["Ohun tí àwọn òṣìṣẹ́ ń ṣe", "Bí a ṣe ń di ọ̀kan lára wọn", "Owó oṣù àárín àti ọjọ́ iwájú iṣẹ́"] },
            { title: "Ìrànlọ́wọ́ ọ̀fẹ́ nítòsí rẹ", bullets: ["CareerOneStop: ẹ̀kọ́ àti ibùdó iṣẹ́", "American Job Centers ń fúnni ní iṣẹ́ ìrànlọ́wọ́ iṣẹ́", "Mú nọ́mbà láti ojú-ewé náà, kì í ṣe láti AI"] }
          ],
          sources: [BLS_OOH, CAREERONESTOP],
          tryIt: "Wá iṣẹ́ tí o ń ṣe tàbí èyí tí o fẹ́ lórí bls.gov/ooh. Kọ òtítọ́ mẹ́ta láti ojú-ewé náà, lẹ́yìn náà wá American Job Center tó súnmọ́ ọ jù lórí CareerOneStop.",
          youCanNow: "rí ìsọfúnni tó ṣeé gbẹ́kẹ̀ lé nípa ọjọ́ iwájú àti ẹ̀kọ́ fún iṣẹ́ rẹ.",
          quickCheck: [
            { objective: "O3", q: "Kí ni Occupational Outlook Handbook ń fi hàn?", options: ["Ohun tí àwọn òṣìṣẹ́ ń ṣe, bí a ṣe ń di ọ̀kan lára wọn, owó oṣù àti ọjọ́ iwájú", "Àwọn iṣẹ́ tí ó ṣí sílẹ̀ nítòsí rẹ lónìí", "Credit score rẹ", "Èrò àwọn ènìyàn nípa ilé-iṣẹ́"], answer: 0, why: "OOH láti ọ̀dọ̀ BLS ń ṣàpèjúwe iṣẹ́ kọ̀ọ̀kan, owó oṣù rẹ̀ àti ọjọ́ iwájú rẹ̀." },
            { objective: "O3", q: "AI sọ fún ọ pé iṣẹ́ rẹ máa pọ̀ sí i ní 30%. Kí ni o máa ṣe?", options: ["Sọ ọ́ fún àwọn ọ̀rẹ́", "Ṣètò iṣẹ́ ayé rẹ lé e lórí", "Ṣàyẹ̀wò nọ́mbà náà lórí ojú-ewé BLS ti ìjọba", "Má ṣe kọbi ara sí ìsọfúnni iṣẹ́ kankan"], answer: 2, why: "Nọ́mbà ọjọ́ iwájú iṣẹ́ máa ń wá láti ojú-ewé ìjọba, kì í ṣe láti AI." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Bí AI ṣe ń yí iṣẹ́ padà",
        questions: [
          { objective: "O1", q: "Nínú ọ̀pọ̀ iṣẹ́, ohun tí AI ń yí padà jù ni:", options: ["Kò sí nǹkan rárá", "Àwọn iṣẹ́ kékeré tí ó ń gba àkókò", "Gbogbo iṣẹ́ kékeré pátápátá", "Orúkọ iṣẹ́ nìkan"], answer: 1, why: "AI ń kan àwọn iṣẹ́ kékeré inú iṣẹ́." },
          { objective: "O2", q: "Iṣẹ́ wo ni AI sábà máa ń ṣe dáadáa?", options: ["Títún forklift ṣe", "Títu oníbàárà tí inú ń bí nínú lójúkojú", "Gbígbé àpótí láìléwu", "Kíkọ àkọ́pẹrẹ ímeèlì ojoojúmọ́"], answer: 3, why: "Kíkọ àkọ́pẹrẹ ọ̀rọ̀ jẹ́ agbára àwọn irinṣẹ́ AI." },
          { objective: "O2", q: "Kíkọ ìròyìn níbi tí AI ti kọ àkọ́pẹrẹ tí ìwọ sì ṣàyẹ̀wò òtítọ́ ní àmì:", options: ["Méjèèjì", "Ọgbọ́n ènìyàn nìkan", "AI nìkan", "Kò sí ọ̀kankan"], answer: 0, why: "AI ń ràn lọ́wọ́, ènìyàn sì ń ṣàyẹ̀wò." },
          { objective: "O3", q: "Níbo ni o ti lè rí ọjọ́ iwájú iṣẹ́ kan ní US láti ọ̀dọ̀ ìjọba?", options: ["Àmọ̀ràn AI", "Fídíò tí ó gbajúmọ̀", "BLS Occupational Outlook Handbook", "Ibi ìfọ̀rọ̀sílẹ̀ lórí ayélujára"], answer: 2, why: "BLS ló ń tẹ ìsọfúnni ìjọba nípa ọjọ́ iwájú iṣẹ́ jáde." },
          { objective: "O3", q: "Kí ni American Job Center lè fúnni?", options: ["Owó yíyá", "Iṣẹ́ tí a ṣèlérí", "Iṣẹ́ ìrànlọ́wọ́ iṣẹ́ ọ̀fẹ́ àti ìsọfúnni nípa ẹ̀kọ́", "Oyè yunifásítì"], answer: 2, why: "Wọ́n ń fúnni ní iṣẹ́ ìrànlọ́wọ́ iṣẹ́; kò sí ìlérí." }
        ]
      }
    },
    {
      name: "Orí 2: Ṣíṣe ètò rẹ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Yíyan ọgbọ́n mẹ́ta láti kọ́",
          minutes: 5,
          goal: "Yan ọgbọ́n mẹ́ta tí ó bá iṣẹ́ rẹ àti àwọn àfojúsùn rẹ mu.",
          text: [
            "Yan àdàpọ̀: ọgbọ́n irinṣẹ́ AI kan, ọgbọ́n kan fún iṣẹ́ rẹ, àti ọgbọ́n ènìyàn kan. Àpẹẹrẹ fún òṣìṣẹ́ ilé ìkẹ́rùsí tí ó fẹ́ di olórí: (1) lílo olùrànlọ́wọ́ AI láti kọ àkọsílẹ̀ ìyípo iṣẹ́ tó yé, (2) kíkọ́ ètò kọ̀mpútà ilé ìkẹ́rùsí àti ìpìlẹ̀ ìṣàkóso ẹrù, (3) kíkọ́ àti títọ́ àwọn òṣìṣẹ́ tuntun.",
            "Lo ohun tí o ti rí: apá \"How to become one\" (bí a ṣe ń di ọ̀kan lára wọn) lórí BLS, ìpolówó iṣẹ́ fún iṣẹ́ tí o fẹ́, àti àkọsílẹ̀ iṣẹ́ rẹ. Ọgbọ́n tí ó farahàn nínú ọ̀pọ̀ ìpolówó iṣẹ́ yẹ láti kọ́.",
            "Ní kí AI ràn ọ́ lọ́wọ́ láti fi wọ́n wéra: \"Ìpolówó iṣẹ́ márùn-ún fún olórí ilé ìkẹ́rùsí nìyí. Ọgbọ́n wo ló farahàn jù?\" Lẹ ìpolówó nìkan sínú rẹ̀, kò sí nǹkan àdáni."
          ],
          steps: ["Kó ìpolówó iṣẹ́ mẹ́ta sí márùn-ún jọ fún iṣẹ́ tí o fẹ́.", "Kọ àwọn ọgbọ́n tí wọ́n béèrè jù sílẹ̀.", "Yan ọgbọ́n irinṣẹ́ AI kan, ọgbọ́n iṣẹ́ rẹ kan àti ọgbọ́n ènìyàn kan.", "Kọ ìdí tí ọ̀kọ̀ọ̀kan fi ṣe pàtàkì."],
          words: [["Ìpolówó iṣẹ́ (job posting)", "ìkéde iṣẹ́ tí ó ń sọ ojúṣe àti ọgbọ́n tí wọ́n nílò."], ["Ọgbọ́n iṣẹ́ rẹ (field skill)", "ọgbọ́n tí ó jẹ́ ti irú iṣẹ́ rẹ pàtó, bí ètò ìṣàkóso ẹrù tàbí ọ̀rọ̀ ìṣègùn."]],
          slides: [
            { title: "Yan àdàpọ̀ mẹ́ta", bullets: ["Ọgbọ́n irinṣẹ́ AI kan", "Ọgbọ́n iṣẹ́ rẹ kan", "Ọgbọ́n ènìyàn kan"] },
            { title: "Ibi tí o máa wò", bullets: ["\"How to become one\" lórí BLS", "Ìpolówó iṣẹ́ fún iṣẹ́ tí o fẹ́", "Àkọsílẹ̀ iṣẹ́ tìrẹ"] },
            { title: "AI lè fi ìpolówó wéra", bullets: ["\"Ọgbọ́n wo ló farahàn jù?\"", "Lẹ ìpolówó nìkan, kò sí nǹkan àdáni"] }
          ],
          tryIt: "Wá ìpolówó iṣẹ́ mẹ́ta fún iṣẹ́ tí o fẹ́. Béèrè lọ́wọ́ AI ọgbọ́n wo ló farahàn jù, lẹ́yìn náà yan ọgbọ́n mẹ́ta rẹ kí o sì kọ ìdí tí ọ̀kọ̀ọ̀kan fi ṣe pàtàkì.",
          youCanNow: "yan ọgbọ́n mẹ́ta láti kọ́ ní ìbámu pẹ̀lú ìpolówó iṣẹ́ gidi àti àwọn àfojúsùn rẹ.",
          quickCheck: [
            { objective: "O4", q: "Èwo ni àdàpọ̀ ọgbọ́n mẹ́ta tó dára láti kọ́?", options: ["Irinṣẹ́ AI mẹ́ta", "Ọgbọ́n irinṣẹ́ AI kan, ọgbọ́n iṣẹ́ rẹ kan àti ọgbọ́n ènìyàn kan", "Ọgbọ́n mẹ́ta tí o ti ní tẹ́lẹ̀", "Mẹ́ta èyíkéyìí láti inú ìpolówó"], answer: 1, why: "Àdàpọ̀ ń bo lílo AI, iṣẹ́ rẹ àti ọgbọ́n ènìyàn tí AI kò lè rọ́pò." },
            { objective: "O4", q: "O fẹ́ mọ ọgbọ́n tí àwọn agbanisíṣẹ́ ń fẹ́ fún iṣẹ́ tí o fẹ́. Kí ni o máa ṣe?", options: ["Méfò", "Béèrè lọ́wọ́ ọ̀rẹ́ tí ó ń ṣe iṣẹ́ míì", "Yan ọgbọ́n tí ó dún bí èyí tí ó le jù", "Ka ìpolówó iṣẹ́ gidi kí o sì wo ọgbọ́n tí ó farahàn jù"], answer: 3, why: "Ọgbọ́n tí ó farahàn nínú ọ̀pọ̀ ìpolówó gidi yẹ láti kọ́." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ṣíṣe ètò ọjọ́ 90 láti kọ́ ọgbọ́n tuntun",
          minutes: 5,
          goal: "Sọ ọgbọ́n mẹ́ta rẹ di ètò ọjọ́ 90 tó ṣeé ṣe.",
          text: [
            "Ètò ló ń jẹ́ kí ẹ̀kọ́ ṣẹlẹ̀. Fún ọgbọ́n kọ̀ọ̀kan, kọ: orísun ọ̀fẹ́ tàbí olówó pọ́ọ́kú, àkókò ọ̀sẹ̀ kọ̀ọ̀kan, àti ọ̀nà láti fi hàn pé o ti kọ́ ọ. Ẹ̀rí lè jẹ́ ìwé-ẹ̀rí (certificate), iṣẹ́ àkànṣe, àpẹẹrẹ iṣẹ́ rẹ, tàbí kí ọ̀gá rẹ rí i tí o ń ṣe é.",
            "Àwọn orísun ọ̀fẹ́ ni ilé-ìkàwé tó wà nítòsí rẹ (ọ̀pọ̀ ń fúnni ní ẹ̀kọ́ orí ayélujára ọ̀fẹ́), American Job Centers, community colleges (kọ́lẹ́ẹ̀jì ìjọba ládùúgbò), ẹ̀kọ́ láti ọ̀dọ̀ agbanisíṣẹ́, àti ẹ̀kọ́ ọ̀fẹ́ láti ọ̀dọ̀ àwọn ilé-iṣẹ́ ẹ̀rọ ńlá. Ṣàyẹ̀wò owó àti àlàyé lórí ojú-òpó wẹ́ẹ̀bù gidi ti ọ̀kọ̀ọ̀kan.",
            "Jẹ́ kí ó kéré: wákàtí méjì tàbí mẹ́ta lọ́sẹ̀ dára ju ètò ńlá tí o máa pa tì. Lo olùrànlọ́wọ́ AI láti ṣe ètò àkókò ọ̀sẹ̀ kọ̀ọ̀kan àti láti bi ọ́ ní ìbéèrè, kí o sì máa fi ọgbọ́n AI ṣe iṣẹ́ gidi níbi iṣẹ́ tí agbanisíṣẹ́ rẹ bá gbà."
          ],
          steps: ["Fún ọgbọ́n kọ̀ọ̀kan: orísun, àkókò ọ̀sẹ̀ kọ̀ọ̀kan, ẹ̀rí.", "Ṣàyẹ̀wò owó àti àlàyé orísun kọ̀ọ̀kan lórí ojú-òpó wẹ́ẹ̀bù gidi rẹ̀.", "Fi àkókò ẹ̀kọ́ ọ̀sẹ̀ kọ̀ọ̀kan sínú kàlẹ́ńdà rẹ.", "Ṣàtúnyẹ̀wò rẹ̀ ní ọjọ́ 30, 60 àti 90."],
          words: [["Ẹ̀rí ọgbọ́n", "nǹkan tí ó fi hàn pé o lè ṣe é: ìwé-ẹ̀rí, iṣẹ́ àkànṣe tàbí àpẹẹrẹ iṣẹ́."], ["Community college", "kọ́lẹ́ẹ̀jì ìjọba ládùúgbò ní US tí ó ní ẹ̀kọ́ àti ìwé-ẹ̀rí olówó pọ́ọ́kú."]],
          slides: [
            { title: "Fún ọgbọ́n kọ̀ọ̀kan", bullets: ["Orísun ọ̀fẹ́ tàbí olówó pọ́ọ́kú", "Àkókò ọ̀sẹ̀ kọ̀ọ̀kan", "Ọ̀nà láti fi hàn pé o mọ̀ ọ́n"] },
            { title: "Ibi ọ̀fẹ́ láti kẹ́kọ̀ọ́", bullets: ["Ẹ̀kọ́ orí ayélujára ti ilé-ìkàwé", "American Job Centers àti community colleges", "Ẹ̀kọ́ láti ọ̀dọ̀ agbanisíṣẹ́"] },
            { title: "Jẹ́ kí ó kéré", bullets: ["Wákàtí 2-3 lọ́sẹ̀ tí o lè máa ṣe", "AI ń ṣe ètò àkókò, ó sì ń bi ọ́ ní ìbéèrè", "Ṣàtúnyẹ̀wò ní ọjọ́ 30, 60 àti 90"] }
          ],
          sources: [CAREERONESTOP],
          tryIt: "Kọ ètò ọjọ́ 90 rẹ: fún ọ̀kọ̀ọ̀kan nínú ọgbọ́n mẹ́ta rẹ, orísun, àkókò ọ̀sẹ̀ kọ̀ọ̀kan àti ẹ̀rí. Fi àkókò ẹ̀kọ́ ọ̀sẹ̀ méjì àkọ́kọ́ sínú kàlẹ́ńdà rẹ.",
          youCanNow: "ṣe ètò ọjọ́ 90 tó ṣeé ṣe láti kọ́ ọgbọ́n tuntun mẹ́ta.",
          quickCheck: [
            { objective: "O5", q: "Èwo ni ẹ̀rí ọgbọ́n?", options: ["Sísọ pé o mọ̀ ọ́n dáadáa", "Wíwo fídíò kan", "Ìwé-ẹ̀rí, iṣẹ́ àkànṣe tàbí àpẹẹrẹ iṣẹ́", "Fífi ẹ̀kọ́ kan pamọ́ sí bookmark"], answer: 2, why: "Ẹ̀rí jẹ́ nǹkan tí o lè fi hàn, bí ìwé-ẹ̀rí, iṣẹ́ àkànṣe tàbí àpẹẹrẹ iṣẹ́." },
            { objective: "O5", q: "O ń ṣiṣẹ́ ní kíkún. Ètò ẹ̀kọ́ wo ni o máa kọ?", options: ["Wákàtí 2 sí 3 lọ́sẹ̀, tí ó wà nínú kàlẹ́ńdà rẹ", "Wákàtí 10 ní alẹ́ kọ̀ọ̀kan", "Kẹ́kọ̀ọ́ nígbà tí ó bá wù ọ́", "Kẹ́kọ̀ọ́ ní ọ̀sẹ̀ tó ṣáájú ìfọ̀rọ̀wánilẹ́nuwò nìkan"], answer: 0, why: "Àkókò kékeré tí ó ń lọ déédéé nínú kàlẹ́ńdà rẹ ni ètò tí ó ṣeé ṣe jù kí ó ṣiṣẹ́." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Sísọ̀rọ̀ nípa ọgbọ́n AI pẹ̀lú agbanisíṣẹ́",
          minutes: 5,
          goal: "Fún wọn ní ìdáhùn kúkúrú, tó jẹ́ òótọ́, tó sì ṣe kedere nípa bí o ṣe ń lo AI níbi iṣẹ́.",
          text: [
            "Àwọn agbanisíṣẹ́ ń béèrè sí i pé, \"Báwo ni o ṣe ń lo AI?\" Ìdáhùn tó lágbára ṣe kedere, ó jẹ́ òótọ́, ó sì fi ìdájọ́ hàn. Lo ìlànà yìí: Iṣẹ́, Irinṣẹ́, Àyẹ̀wò, Èsì.",
            "Àpẹẹrẹ: \"Mo ń lo Microsoft Copilot láti kọ àkọ́pẹrẹ àkọsílẹ̀ òpin ìyípo iṣẹ́ mi (iṣẹ́ àti irinṣẹ́). Mo máa ń fi iye ẹrù wé ìròyìn scanner kí n tó fi ránṣẹ́ (àyẹ̀wò). Ó ń dín nǹkan bí ìṣẹ́jú 15 kù fún mi ní ìyípo kọ̀ọ̀kan, olórí tó kàn sì ń rí àkọsílẹ̀ tó yé jù (èsì).\"",
            "Má ṣe sọ àsọdùn láéláé. Má ṣe sọ pé o ní ọgbọ́n tí o kò ní, kí o sì tẹ̀lé òfin AI agbanisíṣẹ́ rẹ: má ṣe fi àṣírí ilé-iṣẹ́ tàbí ìsọfúnni oníbàárà sínú irinṣẹ́ AI. Fífi hàn pé o mọ ààlà rẹ̀ jẹ́ apá kan ọgbọ́n náà."
          ],
          steps: ["Yan iṣẹ́ gidi kan tí o ti lo AI fún (tàbí tí o ti fi ṣe àṣeṣe).", "Sọ iṣẹ́ náà, irinṣẹ́ náà, bí o ṣe ṣàyẹ̀wò rẹ̀, àti èsì.", "Jẹ́ kí ó jẹ́ nǹkan bí ìṣẹ́jú-àáyá 30.", "Ṣe àṣeṣe rẹ̀ sókè."],
          words: [["Òfin AI (AI policy)", "àwọn òfin agbanisíṣẹ́ nípa bí òṣìṣẹ́ ṣe lè lo irinṣẹ́ AI."], ["Àṣírí ilé-iṣẹ́ (confidential information)", "ìsọfúnni ilé-iṣẹ́ tàbí ti oníbàárà tí a kò gbọdọ̀ pín sí ẹ̀yìn ilé-iṣẹ́."]],
          slides: [
            { title: "Iṣẹ́, Irinṣẹ́, Àyẹ̀wò, Èsì", bullets: ["Ohun tí o ṣe", "Irinṣẹ́ AI wo", "Bí o ṣe ṣàyẹ̀wò rẹ̀", "Ohun tí ó mú dára sí i"] },
            { title: "Àpẹẹrẹ", bullets: ["\"Mo ń lo Copilot láti kọ àkọ́pẹrẹ àkọsílẹ̀ òpin ìyípo iṣẹ́.", "Mo ń fi iye ẹrù wé ìròyìn scanner.", "Ó ń dín ìṣẹ́jú 15 kù ní ìyípo kọ̀ọ̀kan.\""] },
            { title: "Fi ìdájọ́ hàn", bullets: ["Má ṣe sọ àsọdùn nípa ọgbọ́n rẹ láéláé", "Tẹ̀lé òfin AI agbanisíṣẹ́ rẹ", "Pa àṣírí ilé-iṣẹ́ mọ́ kúrò nínú AI"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: parí ètò iṣẹ́ AI rẹ: àkọsílẹ̀ iṣẹ́ tí ó ní àmì, òtítọ́ mẹ́ta láti BLS, ètò ọjọ́ 90 rẹ, àti ìdáhùn Iṣẹ́-Irinṣẹ́-Àyẹ̀wò-Èsì ìṣẹ́jú-àáyá 30 tí o máa fi ṣe àṣeṣe sókè.",
          youCanNow: "ṣètò ìdàgbàsókè rẹ nínú ayé iṣẹ́ tí AI ti yí padà, kí o sì sọ̀rọ̀ nípa ọgbọ́n AI rẹ ní òótọ́ pẹ̀lú agbanisíṣẹ́.",
          quickCheck: [
            { objective: "O6", q: "Nínú ìdáhùn Iṣẹ́-Irinṣẹ́-Àyẹ̀wò-Èsì, kí ni Èsì?", options: ["Orúkọ irinṣẹ́ AI náà", "Bí o ṣe ṣàyẹ̀wò iṣẹ́ AI", "Ohun tí o béèrè lọ́wọ́ AI", "Ohun tí ó dára sí i nítorí iṣẹ́ rẹ"], answer: 3, why: "Èsì ni àbájáde, bí àkókò tí o dín kù tàbí àṣìṣe tí ó dín kù." },
            { objective: "O6", q: "Olùfọ̀rọ̀wánilẹ́nuwò béèrè bóyá o ti lo AI láti ṣe ìròyìn. Ẹ̀ẹ̀mejì péré ni o ti gbìyànjú rẹ̀. Kí ni o máa sọ?", options: ["Sọ pé o jẹ́ ògbóǹtarìgì", "Ṣàlàyé ìgbà méjèèjì ní òótọ́: iṣẹ́ náà, irinṣẹ́, bí o ṣe ṣàyẹ̀wò àti èsì", "Sọ pé o kò gbọ́ nípa AI rí", "Yí ọ̀rọ̀ padà"], answer: 1, why: "Ìdáhùn tó jẹ́ òótọ́ tó sì ṣe kedere ń kọ́ ìgbẹ́kẹ̀lé; má ṣe sọ pé o ní ọgbọ́n tí o kò ní láéláé." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ṣíṣe ètò rẹ",
        questions: [
          { objective: "O4", q: "Àdàpọ̀ ọgbọ́n mẹ́ta tó dára ni:", options: ["Ọgbọ́n irinṣẹ́ AI kan, ọgbọ́n iṣẹ́ rẹ kan, ọgbọ́n ènìyàn kan", "App mẹ́ta èyíkéyìí", "Ọgbọ́n AI nìkan", "Kò sí ọ̀kankan"], answer: 0, why: "Àdàpọ̀ ń jẹ́ kí o wà ní ìwọ̀ntúnwọ̀nsì, kí o sì wúlò." },
          { objective: "O4", q: "Níbo ni o ti lè rí ọgbọ́n tí àwọn agbanisíṣẹ́ ń fẹ́?", options: ["Àwàdà orí ayélujára", "Àsọtẹ́lẹ̀ ìràwọ̀", "Àmọ̀ràn AI", "Ìpolówó iṣẹ́ gidi fún iṣẹ́ tí o fẹ́"], answer: 3, why: "Ìpolówó iṣẹ́ ń kọ ọgbọ́n tí wọ́n nílò sílẹ̀." },
          { objective: "O5", q: "Ètò wo ló ṣeé ṣe jù kí ó ṣiṣẹ́?", options: ["Wákàtí 40 ní òpin ọ̀sẹ̀ yìí nìkan", "Wákàtí 2-3 lọ́sẹ̀, nínú kàlẹ́ńdà rẹ", "Nígbàkígbà tí ó bá wù ọ́", "Kò sí ètò"], answer: 1, why: "Ètò kékeré tí ó ń lọ déédéé ló máa ń parí." },
          { objective: "O6", q: "Nínú Iṣẹ́, Irinṣẹ́, Àyẹ̀wò, Èsì, \"Àyẹ̀wò\" túmọ̀ sí:", options: ["Bí o ṣe fìdí iṣẹ́ AI múlẹ̀", "Owó oṣù rẹ", "Ṣẹ́ẹ̀kì báńkì", "Wíwo ímeèlì"], answer: 0, why: "Ṣíṣàyẹ̀wò ń fi ìdájọ́ hàn." },
          { objective: "O6", q: "Èwo ni o KÒ gbọdọ̀ ṣe nígbà tí o bá ń ṣàlàyé ọgbọ́n AI rẹ?", options: ["Sọ bí o ṣe ń ṣàyẹ̀wò iṣẹ́", "Fún wọn ní àpẹẹrẹ pàtó", "Sọ pé o ní ọgbọ́n tí o kò ní", "Tẹ̀lé òfin agbanisíṣẹ́ rẹ"], answer: 2, why: "Òótọ́ ṣe pàtàkì." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI nínú Ayé Iṣẹ́ Tuntun",
    questions: [
      { objective: "O1", q: "Ọ̀nà tó dára jù láti ronú nípa iṣẹ́ ni pé ó jẹ́:", options: ["Iṣẹ́ kékeré kan ṣoṣo", "Àkójọpọ̀ àwọn iṣẹ́ kékeré", "Orúkọ iṣẹ́ nìkan", "Owó oṣù"], answer: 1, why: "Iṣẹ́ ní ọ̀pọ̀ iṣẹ́ kékeré nínú." },
      { objective: "O1", q: "Èwo ni iṣẹ́ àtúnṣe-ojoojúmọ́?", options: ["Dídarí ìpàdé ẹgbẹ́", "Títu aláìsàn tí ẹ̀rù ń bà nínú", "Bíbá pàjáwìrì tuntun pátápátá lò", "Kíkọ ìròyìn ojoojúmọ́ kan náà"], answer: 3, why: "Iṣẹ́ àtúnṣe-ojoojúmọ́ máa ń tún ara rẹ̀ ṣe ní ọ̀nà kan náà." },
      { objective: "O1", q: "Kí ni upskilling?", options: ["Irú AI kan", "Fífi iṣẹ́ sílẹ̀", "Ṣíṣiṣẹ́ wákàtí díẹ̀ sí i", "Kíkọ́ ọgbọ́n tuntun láti ṣe dáadáa sí i tàbí láti gòkè"], answer: 3, why: "Upskilling ń kọ́ ọgbọ́n tuntun." },
      { objective: "O2", q: "Èwo ni ọgbọ́n ènìyàn?", options: ["Títò spreadsheet", "Kíkọ́ ìgbẹ́kẹ̀lé pẹ̀lú àwọn oníbàárà", "Ṣíṣe àkópọ̀ ìwé kan", "Ṣíṣàyẹ̀wò sípẹ́lì"], answer: 1, why: "Kíkọ́ ìgbẹ́kẹ̀lé jẹ́ agbára ènìyàn." },
      { objective: "O2", q: "Nígbà tí AI bá sàmì sí iṣẹ́ rẹ, ta ló ń ṣe ìpinnu ìkẹyìn?", options: ["Aládùúgbò rẹ", "AI", "Ìwọ", "Kò sí ẹnìkan"], answer: 2, why: "Ìwọ lo mọ iṣẹ́ náà jù." },
      { objective: "O2", q: "Kí ló dé tí o fi máa fa ìlà sí ìsàlẹ̀ iṣẹ́ ọgbọ́n ènìyàn rẹ?", options: ["Agbára ni wọ́n tí o máa mú dàgbà, tí o sì máa sọ̀rọ̀ nípa rẹ̀", "Láti pa wọ́n rẹ́", "Láti fi wọ́n pamọ́", "Wọn kò ṣe pàtàkì"], answer: 0, why: "Ọgbọ́n ènìyàn máa ń wúlò nígbà gbogbo." },
      { objective: "O3", q: "BLS dúró fún:", options: ["Basic Labor Service", "Business Learning System", "Bureau of Labor Statistics", "Board of Licensed Skills"], answer: 2, why: "BLS ń tẹ ìsọfúnni iṣẹ́ jáde." },
      { objective: "O3", q: "Occupational Outlook Handbook ń fi hàn:", options: ["Ohun tí àwọn òṣìṣẹ́ ń ṣe, bí a ṣe ń di ọ̀kan lára wọn, owó oṣù àti ọjọ́ iwájú", "Ìròyìn àwọn olókìkí", "Ìmọ̀ràn ọjà ìpín (stock)", "Ìlànà oúnjẹ sísè"], answer: 0, why: "Àwọn wọ̀nyẹn ni àwọn apá pàtàkì rẹ̀." },
      { objective: "O3", q: "Níbo ni o yẹ kí o ti mú nọ́mbà ọjọ́ iwájú iṣẹ́?", options: ["Àkópọ̀ AI láìṣàyẹ̀wò", "Ojú-ewé ìjọba", "Àkọlé ìròyìn", "Àhesọ ọ̀rọ̀"], answer: 1, why: "AI lè ṣì nọ́mbà sọ." },
      { objective: "O3", q: "CareerOneStop wá láti ọ̀dọ̀:", options: ["Ilé-iṣẹ́ fóònù kan", "Ìkànnì àjọlò kan", "Báńkì kan", "US Department of Labor (Ẹ̀ka Iṣẹ́ ti US)"], answer: 3, why: "Orísun ti Department of Labor ni." },
      { objective: "O4", q: "Ọgbọ́n tí ó farahàn nínú ọ̀pọ̀ ìpolówó iṣẹ́:", options: ["Yẹ láti kọ́", "Kò ṣe pàtàkì", "Lòdì sí òfin", "Ti di àtijọ́"], answer: 0, why: "Ó hàn gbangba pé àwọn agbanisíṣẹ́ ń fẹ́ wọn." },
      { objective: "O4", q: "Nígbà tí o bá ń lẹ ìpolówó iṣẹ́ sínú AI, fi èyí sílẹ̀:", options: ["Àkọsílẹ̀ ọgbọ́n", "Ọ̀rọ̀ inú ìpolówó", "Orúkọ iṣẹ́ náà", "Ìsọfúnni àdáni rẹ"], answer: 3, why: "Pa àwọn nǹkan àdáni mọ́ kúrò nínú rẹ̀." },
      { objective: "O5", q: "Èwo ni ẹ̀rí ọgbọ́n?", options: ["Àhesọ ọ̀rọ̀", "Ìfẹ́ ọkàn", "Ìwé-ẹ̀rí, iṣẹ́ àkànṣe tàbí àpẹẹrẹ iṣẹ́", "Ọ̀rọ̀ lórí ìkànnì àjọlò tí ó sọ pé o mọ̀ ọ́n"], answer: 2, why: "Ẹ̀rí ń fi ohun tí o lè ṣe hàn." },
      { objective: "O5", q: "Níbo ni o ti sábà lè rí ẹ̀kọ́ orí ayélujára ọ̀fẹ́?", options: ["Ìpolówó tí ó yọ jáde lójijì", "Ilé-ìkàwé tó wà nítòsí rẹ", "Ímeèlì spam", "Kò sí ibì kankan"], answer: 1, why: "Ọ̀pọ̀ ilé-ìkàwé ń fúnni ní ẹ̀kọ́ ọ̀fẹ́." },
      { objective: "O5", q: "Ìgbà wo ni o yẹ kí o ṣàtúnyẹ̀wò ètò ọjọ́ 90 rẹ?", options: ["Ní wákàtí kọ̀ọ̀kan", "Láéláé", "Ní ọjọ́ 1 nìkan", "Ní ọjọ́ 30, 60 àti 90"], answer: 3, why: "Àtúnyẹ̀wò déédéé ń jẹ́ kí o máa tẹ̀síwájú." },
      { objective: "O6", q: "Ìdáhùn tó dára nípa ọgbọ́n AI jẹ́:", options: ["Èyí tí a dà kọ láti ojú-òpó wẹ́ẹ̀bù", "Èyí tí kò ṣe kedere tí ó sì ń gbéra ga", "Èyí tí ó ṣe kedere tí ó sì jẹ́ òótọ́", "Àhùsọ"], answer: 2, why: "Ìdáhùn tó ṣe kedere tó sì jẹ́ òótọ́ ń kọ́ ìgbẹ́kẹ̀lé." },
      { objective: "O6", q: "Èwo ló yẹ nínú ìdáhùn Iṣẹ́-Irinṣẹ́-Àyẹ̀wò-Èsì?", options: ["\"Mo máa ń fi iye ẹrù wé ìròyìn scanner.\"", "\"AI ló ń ṣe gbogbo iṣẹ́ mi.\"", "\"Mo máa ń lẹ ìsọfúnni oníbàárà sínú chatbot.\"", "\"Mi kì í ṣàyẹ̀wò nǹkan kan.\""], answer: 0, why: "Ó fi bí o ṣe ń fìdí nǹkan múlẹ̀ hàn." },
      { objective: "O6", q: "Kí o tó lo AI níbi iṣẹ́, o yẹ kí o mọ̀:", options: ["Ọ̀rọ̀ aṣínà alábàáṣiṣẹ́ rẹ", "Òfin AI agbanisíṣẹ́ rẹ", "Nọ́mbà káàdì àwọn oníbàárà", "Kò sí nǹkan"], answer: 1, why: "Òfin ló ń sọ ohun tí a gbà láàyè." },
      { objective: "O6", q: "Àṣírí ilé-iṣẹ́ gbọdọ̀:", options: ["Wọ inú chatbot èyíkéyìí", "Wà níta irinṣẹ́ AI àyàfi tí agbanisíṣẹ́ rẹ bá gbà", "Wà lórí ayélujára", "Wà fún àwọn ọ̀rẹ́"], answer: 1, why: "A gbọdọ̀ dáàbò bò ó." },
      { objective: "O6", q: "Kí ni ẹ̀kọ́ yìí ṣèlérí nípa iṣẹ́?", options: ["Kò sí nǹkan; ó ń ràn ọ́ lọ́wọ́ láti ṣètò àti láti kọ́ ọgbọ́n", "Iṣẹ́ tí a ṣèlérí", "Àlékún owó oṣù tí a ṣèlérí", "Ìgbéga ní ipò"], answer: 0, why: "Kò sí ẹ̀kọ́ tí ó lè ṣèlérí àbájáde." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [0, 3, 4, 7, 10, 12, 14, 15, 17]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Àkọsílẹ̀ iṣẹ́ tí ó ní àmì",
        objective: "O2",
        notYet: "Iṣẹ́ kò tó mẹ́jọ, tàbí iṣẹ́ kò ní àmì.",
        meets: "Ó kéré tán iṣẹ́ mẹ́jọ, ọ̀kọ̀ọ̀kan ní àmì \"AI lè ràn lọ́wọ́\", \"ọgbọ́n ènìyàn\" tàbí \"méjèèjì\".",
        exceeds: "Òbìrí wà yí iṣẹ́ \"AI lè ràn lọ́wọ́\" méjì ká láti gbìyànjú, ìlà sì wà ní ìsàlẹ̀ agbára ọgbọ́n ènìyàn méjì."
      },
      {
        name: "Òtítọ́ ìjọba nípa iṣẹ́ náà",
        objective: "O3",
        notYet: "Òtítọ́ kò sí, tàbí láti AI ni wọ́n ti wá.",
        meets: "Òtítọ́ mẹ́ta nípa iṣẹ́ náà láti inú BLS Occupational Outlook Handbook.",
        exceeds: "Ó tún dárúkọ American Job Center tó súnmọ́ jù àti iṣẹ́ ìrànlọ́wọ́ kan tí ó ń ṣe."
      },
      {
        name: "Ètò ọjọ́ 90",
        objective: "O5",
        notYet: "Àwọn ọgbọ́n kò ní orísun, àkókò tàbí ẹ̀rí.",
        meets: "Ọgbọ́n mẹ́ta, ọ̀kọ̀ọ̀kan ní orísun ọ̀fẹ́, àkókò ọ̀sẹ̀ kọ̀ọ̀kan àti ẹ̀rí, pẹ̀lú àtúnyẹ̀wò ní ọjọ́ 30, 60 àti 90.",
        exceeds: "Ọ̀sẹ̀ méjì àkọ́kọ́ ẹ̀kọ́ ti wà nínú kàlẹ́ńdà akẹ́kọ̀ọ́."
      },
      {
        name: "Ìdáhùn AI ìṣẹ́jú-àáyá 30",
        objective: "O6",
        notYet: "Ìdáhùn náà kò ṣe kedere, tàbí ó sọ pé akẹ́kọ̀ọ́ ní ọgbọ́n tí kò ní.",
        meets: "Ìdáhùn Iṣẹ́-Irinṣẹ́-Àyẹ̀wò-Èsì tó jẹ́ òótọ́, tí a sọ sókè ní nǹkan bí ìṣẹ́jú-àáyá 30.",
        exceeds: "Ìdáhùn náà ní nọ́mbà tàbí èsì pàtó kan."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣì ń tẹ̀lé ètò ọjọ́ 90 wọn ní ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n gba ìwé-ẹ̀rí tàbí tí wọ́n parí ẹ̀kọ́ kan láti inú ètò wọn láàárín ọjọ́ 90",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n rí iṣẹ́ tuntun, ìgbéga tàbí àlékún owó oṣù láàárín oṣù 6"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Smartphone tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́: ChatGPT, Microsoft Copilot tàbí Google Gemini",
      "Àwọn ojú-òpó wẹ́ẹ̀bù ọ̀fẹ́ bls.gov/ooh àti CareerOneStop, àti ìpolówó iṣẹ́ gidi mẹ́ta",
      "Ìwé, app àkọsílẹ̀ tàbí kàlẹ́ńdà fún àkọsílẹ̀ iṣẹ́ àti ètò ọjọ́ 90",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ní ibùdó iṣẹ́ tàbí ẹgbẹ́ níbi iṣẹ́: ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ sàmì sí àkọsílẹ̀ iṣẹ́ ní méjì-méjì kí àwọn akẹ́kọ̀ọ́ lè ṣàyẹ̀wò àmì ara wọn.",
      "Sọ òótọ́ pé ẹ̀kọ́ náà kò ṣèlérí iṣẹ́; ó ń ran àwọn akẹ́kọ̀ọ́ lọ́wọ́ láti ṣètò àti láti kọ́ ọgbọ́n.",
      "Rán àwọn akẹ́kọ̀ọ́ létí láti tẹ̀lé òfin AI agbanisíṣẹ́ wọn, kí wọ́n sì pa àṣírí ilé-iṣẹ́ mọ́ kúrò nínú irinṣẹ́ AI.",
      "Jẹ́ kí àwọn akẹ́kọ̀ọ́ sọ ìdáhùn ìṣẹ́jú-àáyá 30 wọn sókè fún alábàáṣiṣẹ́ kan.",
      "Fi rubric ṣe àmì fún ètò iṣẹ́ AI, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};

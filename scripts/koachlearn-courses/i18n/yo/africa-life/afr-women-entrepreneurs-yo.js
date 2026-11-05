"use strict";

// Koach Learn course (Yoruba translation of africa-life/afr-women-entrepreneurs.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const UNWOMEN = { name: "UN Women: ìfún-obìnrin-lágbára nínú ọrọ̀ ajé (iṣẹ́ ìtọ́jú ilé tí a kì í sanwó fún, àǹfààní sí dúkìá àti owó ìṣòwò)", url: "https://www.unwomen.org/en/what-we-do/economic-empowerment" };
const WEF = { name: "Women Enterprise Fund, Kenya (owó ìjọba fún òwò àwọn obìnrin)", url: "https://wef.co.ke/" };
const SMEDAN = { name: "SMEDAN, Nàìjíríà: ìforúkọsílẹ̀ ọ̀fẹ́, SME Digital Academy àti àwọn ètò bí Women In Self-employment Programme", url: "https://smedan.gov.ng/" };
const DERFJ = { name: "DER/FJ, Senegal: Délégation générale à l'Entreprenariat Rapide des Femmes et des Jeunes (ìforúkọsílẹ̀ òwò, ìdálẹ́kọ̀ọ́ àti owó ìṣòwò)", url: "https://der.sn/" };
const GEA = { name: "Ghana Enterprises Agency: ìrànlọ́wọ́ fún òwò kékeré àti àárín", url: "https://gea.gov.gh/" };
const AFAWA = { name: "African Development Bank (Báńkì Ìdàgbàsókè Áfíríkà): AFAWA, Affirmative Finance Action for Women in Africa", url: "https://www.afdb.org/en/topics-and-sectors/initiatives-partnerships/affirmative-finance-action-for-women-in-africa" };

module.exports = {
  id: "afr-women-entrepreneurs-yo",
  lang: "yo",
  translationOf: "afr-women-entrepreneurs",
  category: "Africa: Life and Work",
  name: "Àwọn Obìnrin Oníṣòwò: Bíbẹ̀rẹ̀ àti Mímú Òwò Dàgbà",
  skills: "Yíyan èrò òwò tó bá ayé rẹ mu, Dídán èrò wò pẹ̀lú oníbàárà gidi, Fífi iye owó tó ń mú èrè wá àti sísan owó fún ara rẹ, Ṣíṣètò àkókò àti ìrànlọ́wọ́ ẹbí, Wíwá owó ìṣòwò àti ìrànlọ́wọ́ láìléwu, Kíkọ́ àwọn alájọṣe àti ètò ìdàgbàsókè",
  outcome: "bẹ̀rẹ̀ tàbí mú òwò kékeré tó bá ayé rẹ mu dàgbà: yan èrò kan, dán an wò pẹ̀lú oníbàárà gidi, fi iye owó tó ń mú èrè wá kí o sì san owó fún ara rẹ, ṣètò ọ̀sẹ̀ rẹ pẹ̀lú ìrànlọ́wọ́ tí o nílò, wá owó ìṣòwò àti ìrànlọ́wọ́ tí kò léwu, kí o sì kọ ètò ìdàgbàsókè oṣù mẹ́fà.",
  about: [
    "Àwọn obìnrin ló ń ṣe ọ̀pọ̀ nínú òwò kékeré káàkiri Áfíríkà: ní ọjà, ní ilé ìṣerun, ní ilé ìdáná, ní oko, ní ṣọ́ọ̀bù àti lórí ayélujára. Ọ̀pọ̀ ń ṣe é nígbà tí wọ́n ń tọ́jú ọmọ àti ẹbí, wọn kì í sì í sábà rí gbèsè, ilẹ̀ àti àkókò tó pọ̀ tó. Ẹ̀kọ́ yìí wà fún àwọn obìnrin ní Kenya, Nàìjíríà, Ghana, Senegal, Cameroon, Egypt àti káàkiri Áfíríkà tí wọ́n fẹ́ bẹ̀rẹ̀ òwò tàbí mú kí èyí tí wọ́n ní mú owó púpọ̀ sí i wá.",
    "O máa yan èrò tó bá ọgbọ́n rẹ, àkókò rẹ àti ohun tí àwọn ènìyàn nítòsí ń rà mu, dán an wò lọ́nà tí kò wọ́n kí o tó ná owó púpọ̀, fi iye owó sí ọjà rẹ kí ó lè mú èrè wá kí ó sì san owó fún ọ, ṣètò ọ̀sẹ̀ rẹ àti ìrànlọ́wọ́ tí o nílò nílé, wá owó ìṣòwò àti àwọn ètò ìrànlọ́wọ́ kí o sì ṣàyẹ̀wò pé wọ́n jẹ́ gidi, kí o sì kọ́ àwọn alájọṣe àti ètò oṣù mẹ́fà.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" fún òwò tìrẹ. Àpẹẹrẹ lásán ni gbogbo iye owó. Ẹ̀kọ́ yìí ń ṣàlàyé àwọn ọ̀nà tó wà; kì í ṣe ìmọ̀ràn owó. Fún àlàyé sí i, wo àwọn ẹ̀kọ́ lórí ẹgbẹ́ àjọ (savings groups), títà lórí ayélujára àti fífi orúkọ òwò sílẹ̀ nínú ẹ̀ka yìí."
  ],
  finalTask: "Kọ ètò òwò ojú-ewé kan fún ara rẹ: èrò tí o yàn pẹ̀lú àwọn máàkì rẹ̀, ohun tí o kọ́ nígbà tí o dán an wò pẹ̀lú oníbàárà gidi, iye owó ìnáwó, iye owó títà àti èrè ọjà kan àti iye tí o máa san fún ara rẹ, ètò àkókò ọ̀sẹ̀ pẹ̀lú àwọn tí ó ń ràn ọ́ lọ́wọ́, ọ̀nà owó ìṣòwò tàbí ìrànlọ́wọ́ kan tí o ṣàyẹ̀wò lórí ojú-òpó wẹ́ẹ̀bù rẹ̀ gidi, àti àfojúsùn mẹ́ta fún oṣù mẹ́fà tó ń bọ̀ pẹ̀lú olùtọ́sọ́nà tàbí ẹgbẹ́ kan tí o máa kàn sí.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn obìnrin káàkiri Áfíríkà, ní ìlú àti ní abúlé, tí wọ́n ní òwò kékeré tàbí tí wọ́n fẹ́ bẹ̀rẹ̀ ọ̀kan: àwọn oníṣòwò ọjà, àwọn alásè, àwọn télọ̀, àwọn onídìrí, àwọn àgbẹ̀ tí ń ṣe ọjà tí wọ́n sì ń tà á, àwọn olóṣọ̀ọ́bù àti àwọn tí ń tà lórí ayélujára. Ọjọ́ orí àti ẹ̀kọ́ wọn yàtọ̀ síra gan-an; ọ̀pọ̀ jẹ́ ìyá àti olùtọ́jú.",
    startingPoint: "Ọ̀pọ̀ ti ń rí owó díẹ̀ láti títà tàbí láti ọgbọ́n kan, ọ̀pọ̀ sì wà nínú ẹgbẹ́ àjọ. Díẹ̀ ló ń dán èrò wò kí wọ́n tó náwó, ló ń ṣírò gbogbo ìnáwó ọjà wọn, ló ń san iye owó kan pàtó fún ara wọn, tàbí ló ń kọ àfojúsùn sílẹ̀. Àwọn kan kò ní àṣẹ lórí owó tí wọ́n ń pa, tàbí wọn kì í fi PIN owó orí fóònù wọn pamọ́.",
    gap: "Àwọn obìnrin oníṣòwò sábà máa ń ní àkókò tí kò tó, àǹfààní owó ìṣòwò tí kò pọ̀ àti àwọn alájọṣe òwò díẹ̀, ọ̀pọ̀ òwò sì ń wà ní kékeré tàbí ń kógbá wọlé nítorí pé iye owó títà kò bo ìnáwó tàbí iṣẹ́ ti pọ̀ jù fún olówó rẹ̀. Àwọn akẹ́kọ̀ọ́ nílò láti yan èrò àti láti dán an wò lọ́gbọ́n, fi iye owó tó ń mú èrè wá, ṣètò àkókò àti ìrànlọ́wọ́ wọn, dé ọ̀dọ̀ owó ìṣòwò àti ètò gidi láìléwu, kí wọ́n sì dàgbà nípasẹ̀ àwọn alájọṣe.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; ọ̀pọ̀ akẹ́kọ̀ọ́ ń sọ Gẹ̀ẹ́sì gẹ́gẹ́ bí èdè kejì (ẹ̀kọ́ náà tún wà ní Faransé àti Lárúbáwá)",
      "Àkókò: iṣẹ́ ìtọ́jú ẹbí àti iṣẹ́ ilé pọ̀; ẹ̀kọ́ ìṣẹ́jú 4 sí 6 tí ó bá a mu",
      "Ẹ̀rọ: fóònù lásán, nígbà míì tí a ń lò pẹ̀lú ẹbí; data wọ́n",
      "Owó: owó ìnáwó kékeré; kò sí ìmọ̀ràn owó; orúkọ ètò àti àwọn òfin rẹ̀ ń yí padà, nítorí náà àwọn akẹ́kọ̀ọ́ ń ṣàyẹ̀wò ojú-òpó wẹ́ẹ̀bù gidi",
      "Ààbò: jìbìtì tí ń béèrè owó lọ́wọ́ obìnrin kí wọ́n tó fún wọn ní ẹ̀bùn owó tàbí gbèsè; àwọn obìnrin kan ń dojú kọ ìfúnpá tàbí ìdarí lórí owó wọn"
    ],
    prerequisites: "Kò sí. Ó máa wúlò: \"Ẹgbẹ́ Àjọ àti Microfinance\" nínú ẹ̀ka yìí."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Tí o bá ní èrò òwò méjì tàbí mẹ́ta", action: "fún èrò kọ̀ọ̀kan ní máàkì lórí ọgbọ́n rẹ, àkókò, owó ìbẹ̀rẹ̀ àti ohun tí àwọn ènìyàn nítòsí ń rà, kí o sì yan ọ̀kan", standard: "ní lílo máàkì kan náà fún gbogbo èrò àti kíkọ ìdí tí èyí tó borí fi bá ọ mu" },
    { id: "O2", condition: "Kí o tó ná èyí tó pọ̀ jù nínú owó rẹ sórí èrò tuntun", action: "dán èrò náà wò pẹ̀lú ọjà díẹ̀ àti ó kéré tán oníbàárà gidi mẹ́wàá", standard: "ní kíkọ iye àwọn tó rà, iye owó tí wọ́n san àti ìyípadà kan tí o máa ṣe sílẹ̀" },
    { id: "O3", condition: "Tí o bá mọ ìnáwó ọjà tàbí iṣẹ́ kan", action: "ṣírò ìnáwó ọjà kọ̀ọ̀kan, fi iye owó títà tó ní èrè, kí o sì pinnu iye tí o máa san fún ara rẹ", standard: "pẹ̀lú gbogbo ìnáwó nínú rẹ̀ àti ìṣírò tó tọ̀nà" },
    { id: "O4", condition: "Tí o bá mọ iṣẹ́ òwò àti iṣẹ́ ilé rẹ fún ọ̀sẹ̀ kan", action: "ṣe ètò àkókò ọ̀sẹ̀ tí ó fi wákàtí òwò, iṣẹ́ ìtọ́jú ẹbí àti àwọn tí ó máa ràn ọ́ lọ́wọ́ hàn", standard: "tí ó kéré tán ẹnì kan nínú ẹbí tàbí olùrànlọ́wọ́ kan ti gbà sí" },
    { id: "O5", condition: "Nígbà tí o bá ń wá gbèsè, ẹ̀bùn owó tàbí ètò ìrànlọ́wọ́", action: "ṣàyẹ̀wò pé ìfilọ̀ náà jẹ́ gidi lórí ojú-òpó wẹ́ẹ̀bù rẹ̀ gidi, kí o sì di àṣẹ lórí owó àti PIN rẹ mú", standard: "láìsan \"owó ìṣètò\" (processing fee) kankan fún àjèjì àti láìfi PIN rẹ han ẹnikẹ́ni" },
    { id: "O6", condition: "Fún oṣù mẹ́fà tó ń bọ̀", action: "kọ àfojúsùn òwò mẹ́ta tí a lè díwọ̀n, kí o sì dárúkọ olùtọ́sọ́nà, ẹgbẹ́ tàbí àjọ kan tí o máa kàn sí", standard: "pẹ̀lú nọ́mbà àti ọjọ́ fún àfojúsùn kọ̀ọ̀kan" }
  ],
  chapters: [
    {
      name: "Orí 1: Bíbẹ̀rẹ̀ dáadáa",
      lessons: [
        {
          title: "Yíyan òwò tó bá ayé rẹ mu",
          objectives: ["O1"],
          minutes: 5,
          goal: "Fún èrò òwò méjì tàbí mẹ́ta ní máàkì kí o sì yan èyí tó bá ọ mu jù.",
          text: [
            "Òwò tó dára jù fún ọ ni èyí tí àwọn ènìyàn nítòsí ń fẹ́, tí ó ń lo ọgbọ́n tí o ní, tí ó sì bá àkókò àti owó tí o ní gan-an mu. Òwò tí ó nílò kí o wà ní ọjà láti agogo 5 àárọ̀ lè má bá ọ mu tí o bá ń gbé àwọn ọmọ lọ sí ilé-ìwé.",
            "Kọ èrò méjì tàbí mẹ́ta. Fún ọ̀kọ̀ọ̀kan ní máàkì láti 1 (kò dára) sí 3 (ó dára) lórí nǹkan mẹ́rin: ọgbọ́n rẹ, àkókò tí ó nílò ní ìfiwéra pẹ̀lú àkókò tí o ní, owó ìbẹ̀rẹ̀ ní ìfiwéra pẹ̀lú owó tí o ní, àti ìbéèrè ọjà nítòsí (ṣé àwọn ènìyàn ń ra èyí nítòsí, ṣé àyè sì wà fún olùtajà kan sí i?). Ṣe àròpọ̀ àwọn máàkì náà.",
            "Àpẹẹrẹ: Halima ní Kaduna fún èrò mẹ́ta ní máàkì. Títa ohun mímu kunu nítòsí ilé-ìwé: ọgbọ́n 3, àkókò 2, owó 3, ìbéèrè 3 = 11. Iṣẹ́ télọ̀: ọgbọ́n 2, àkókò 2, owó 1, ìbéèrè 2 = 7. Títa káàdì ìpè: ọgbọ́n 2, àkókò 3, owó 2, ìbéèrè 1 = 8 (ọ̀pọ̀ olùtajà ti wà). Ó yan ohun mímu náà. Aïcha ní Dakar lè fún ilé ìtajà oúnjẹ dídùn thiakry, irun dídì àti ṣọ́ọ̀bù kékeré ní máàkì ní ọ̀nà kan náà.",
            "Máàkì ń ràn ọ́ lọ́wọ́ láti ronú; wọn kì í pinnu fún ọ. Tún béèrè lọ́wọ́ ara rẹ: ṣé iṣẹ́ yìí máa wù mí, ṣé mo sì lè mú un dàgbà lọ́jọ́ iwájú?"
          ],
          steps: ["Kọ èrò méjì tàbí mẹ́ta.", "Fún ọ̀kọ̀ọ̀kan ní máàkì 1 sí 3 lórí ọgbọ́n, àkókò, owó ìbẹ̀rẹ̀ àti ìbéèrè ọjà nítòsí.", "Ṣe àròpọ̀ àwọn máàkì.", "Yan ọ̀kan kí o sì kọ ìdí tí ó fi bá ayé rẹ mu."],
          words: [["Owó ìbẹ̀rẹ̀", "owó tí o nílò láti bẹ̀rẹ̀: irinṣẹ́, ọjà àkọ́kọ́, ìsọ̀ tàbí ìwé àṣẹ."], ["Ìbéèrè ọjà (demand)", "iye àwọn ènìyàn tí wọ́n fẹ́ ra nǹkan kan, àti iye tí wọ́n fẹ́ rà."]],
          slides: [
            { title: "Òwò tó bá ọ mu", bullets: ["Àwọn ènìyàn nítòsí ń fẹ́ ẹ", "Ó ń lo ọgbọ́n tí o ní", "Ó bá àkókò àti owó tí o ní gan-an mu"] },
            { title: "Fún èrò kọ̀ọ̀kan ní máàkì 1 sí 3", bullets: ["Ọgbọ́n rẹ", "Àkókò tí ó nílò àti àkókò tí o ní", "Owó ìbẹ̀rẹ̀ àti owó tí o ní", "Ìbéèrè ọjà nítòsí"] },
            { title: "Àpẹẹrẹ: Halima ní Kaduna", bullets: ["Ohun mímu kunu nítòsí ilé-ìwé: 11", "Iṣẹ́ télọ̀: 7", "Káàdì ìpè: 8, olùtajà ti pọ̀ jù"] },
            { title: "Lẹ́yìn náà béèrè lọ́wọ́ ara rẹ", bullets: ["Ṣé iṣẹ́ yìí máa wù mí?", "Ṣé mo lè mú un dàgbà lọ́jọ́ iwájú?"] }
          ],
          tryIt: "Kọ èrò òwò méjì tàbí mẹ́ta. Fún ọ̀kọ̀ọ̀kan ní máàkì 1 sí 3 lórí ọgbọ́n, àkókò, owó ìbẹ̀rẹ̀ àti ìbéèrè ọjà nítòsí, ṣe àròpọ̀ wọn, kí o sì kọ gbólóhùn kan lórí ìdí tí èrò tó borí fi bá ayé rẹ mu.",
          youCanNow: "fi máàkì tó rọrùn wé àwọn èrò òwò, kí o sì yan èyí tó bá ayé rẹ mu.",
          quickCheck: [
            { objective: "O1", q: "Nǹkan mẹ́rin wo ni o máa fi fún èrò kọ̀ọ̀kan ní máàkì?", options: ["Àwọ̀, orúkọ, àmì ìdánimọ̀, ìtóbi ṣọ́ọ̀bù", "Ọgbọ́n, àkókò, owó ìbẹ̀rẹ̀ àti ìbéèrè ọjà nítòsí", "Ohun tí àwọn ọ̀rẹ́ fẹ́ràn, ojú ọjọ́, orin, aṣọ àṣà", "Iye owó tí ó lè mú wá nìkan"], answer: 1, why: "Ọgbọ́n, àkókò, owó àti ìbéèrè ọjà ń fi hàn bóyá èrò kan bá ọ àti ọjà rẹ mu." },
            { objective: "O1", q: "Èrò kan ní máàkì gíga lórí ọgbọ́n, ṣùgbọ́n olùtajà mẹ́wàá ti wà ní òpópónà rẹ. Máàkì wo ló kéré?", options: ["Ọgbọ́n", "Àkókò", "Ìbéèrè ọjà nítòsí", "Owó ìbẹ̀rẹ̀"], answer: 2, why: "Tí olùtajà bá pọ̀ nítòsí, àyè kò pọ̀ fún ẹnì kan sí i, nítorí náà ìbéèrè ọjà kéré." }
          ]
        },
        {
          title: "Dídán èrò rẹ wò pẹ̀lú oníbàárà gidi",
          objectives: ["O2"],
          minutes: 5,
          goal: "Dán èrò kan wò pẹ̀lú ọjà díẹ̀ àti ó kéré tán oníbàárà gidi mẹ́wàá kí o tó ná owó púpọ̀.",
          text: [
            "Ọ̀pọ̀ òwò ń kùnà nítorí pé olówó rẹ̀ ná gbogbo owó tí ó ti fi pamọ́ kí ó tó mọ̀ bóyá àwọn ènìyàn máa rà. Kọ́kọ́ dán an wò ní kékeré: ṣe tàbí ra ọjà díẹ̀, fi í lọ̀ àwọn oníbàárà gidi, kí o sì wo ohun tó ṣẹlẹ̀.",
            "Ṣe ọjà díẹ̀, fún àpẹẹrẹ ife zobo 20, aṣọ 5 tàbí ìpàdé irun dídì 10. Fi í lọ̀ ó kéré tán ènìyàn mẹ́wàá tí kì í ṣe ẹbí tímọ́tímọ́. Kọ sílẹ̀: iye àwọn tó rà, iye owó tí wọ́n san, ohun tí wọ́n fẹ́ràn, àti ohun tí wọ́n béèrè fún. Ohun tí àwọn ènìyàn ṣe ṣe pàtàkì ju ọ̀rọ̀ dídùn lọ: \"Màá rà á lọ́sẹ̀ tó ń bọ̀\" kì í ṣe títà.",
            "Àpẹẹrẹ: Esther ní Kisumu dán ọṣẹ olómi wò. Ó ṣe ìgò 15, ó ta 12 ní KES 150 (iye owó àpẹẹrẹ), oníbàárà mẹ́ta sì béèrè fún ìgò tó tóbi jù. Ìyípadà rẹ̀: fi ìgò ńlá kún un. Obìnrin kan ní Alexandria tí ó ń dán ẹ̀fọ́ àti èso tí a fi iyọ̀ sè nílé wò lè ṣe bákan náà pẹ̀lú àwọn aládùúgbò àti ṣọ́ọ̀bù kékeré kan.",
            "Lẹ́yìn ìdánwò, pinnu: tẹ̀ síwájú, yí nǹkan kan padà, tàbí gbìyànjú èrò rẹ tó kàn. Ìdánwò tí kò yọrí kì í náni ní owó púpọ̀, ó sì ń gbà ọ́ lọ́wọ́ àdánù ńlá."
          ],
          steps: ["Ṣe tàbí ra ọjà díẹ̀.", "Fi í lọ̀ ó kéré tán ènìyàn mẹ́wàá tí kì í ṣe ẹbí tímọ́tímọ́.", "Kọ iye àwọn tó rà, iye owó, ohun tí wọ́n fẹ́ràn àti ohun tí wọ́n béèrè fún.", "Pinnu: tẹ̀ síwájú, yí nǹkan kan padà, tàbí gbìyànjú èrò tó kàn."],
          words: [["Ọjà díẹ̀ fún ìdánwò", "iye kékeré tí a ṣe tàbí rà láti fi dánwò kí a tó ṣe púpọ̀ sí i."], ["Ìdánwò", "gbígbìyànjú èrò kan ní kékeré láti kẹ́kọ̀ọ́ kí o tó ná owó púpọ̀."]],
          slides: [
            { title: "Dán an wò kí o tó ná owó púpọ̀", bullets: ["Má ṣe kọ́kọ́ ná gbogbo owó tí o fi pamọ́", "Ṣe ọjà díẹ̀", "Fi í lọ̀ àwọn oníbàárà gidi"] },
            { title: "Kọ sílẹ̀", bullets: ["Iye àwọn tó rà", "Iye owó tí wọ́n san", "Ohun tí wọ́n fẹ́ràn àti ohun tí wọ́n béèrè"] },
            { title: "Ìṣe ju ọ̀rọ̀ dídùn lọ", bullets: ["\"Màá rà á lọ́sẹ̀ tó ń bọ̀\" kì í ṣe títà", "Ka títà gidi", "Béèrè lọ́wọ́ àwọn tí kì í ṣe ẹbí tímọ́tímọ́"] },
            { title: "Lẹ́yìn ìdánwò", bullets: ["Tẹ̀ síwájú", "Yí nǹkan kan padà", "Tàbí gbìyànjú èrò tó kàn"] }
          ],
          tryIt: "Ṣètò ìdánwò fún èrò tí o yàn: ọjà díẹ̀ tí o máa ṣe, iye owó tí o máa gbìyànjú, àti ènìyàn mẹ́wàá tí o máa fi í lọ̀ ní ọ̀sẹ̀ yìí. Lẹ́yìn ìdánwò, kọ iye àwọn tó rà àti ìyípadà kan tí o máa ṣe.",
          youCanNow: "dán èrò òwò wò lọ́nà tí kò wọ́n pẹ̀lú oníbàárà gidi, kí o sì pinnu ohun tí o máa ṣe tẹ̀lé e.",
          quickCheck: [
            { objective: "O2", q: "Kí ni ẹ̀rí tó dára jù pé àwọn oníbàárà fẹ́ ọjà rẹ?", options: ["Ìyá rẹ sọ pé ó dára", "Àwọn ọ̀rẹ́ sọ pé àwọn máa rà á lóṣù tó ń bọ̀", "Ìwọ fẹ́ràn rẹ̀ gan-an", "Àwọn tí kì í ṣe ẹbí sanwó fún un"], answer: 3, why: "Títà gidi fún oníbàárà gidi ló ń fi ìbéèrè ọjà tòótọ́ hàn." },
            { objective: "O2", q: "Ìdánwò rẹ ta 3 nínú ọjà 20. Kí ni ìgbésẹ̀ tó dára tó kàn?", options: ["Béèrè lọ́wọ́ àwọn tó rà ohun tí o máa yí padà, yí nǹkan kan padà, kí o sì tún dán an wò", "Ná gbogbo owó tí o fi pamọ́ sórí ọjà púpọ̀ sí i", "Fi òwò sílẹ̀ títí láé", "Sọ iye owó di ìlọ́po méjì"], answer: 0, why: "Ìdánwò tí kò lágbára jẹ́ ẹ̀kọ́ tí kò wọ́n: kẹ́kọ̀ọ́, yí nǹkan kan padà kí o sì tún gbìyànjú." }
          ]
        },
        {
          title: "Iye owó tó ń mú èrè wá àti sísan owó fún ara rẹ",
          objectives: ["O3"],
          minutes: 6,
          goal: "Ṣírò ìnáwó ọjà kọ̀ọ̀kan, fi iye owó tó ní èrè, kí o sì pinnu iye tí o máa san fún ara rẹ.",
          text: [
            "Ọ̀pọ̀ obìnrin ń ta ọjà ní owó tí ó kéré jù, pàápàá fún àwọn aládùúgbò, wọ́n sì ń ṣiṣẹ́ kára láìsí èrè gidi. Ka gbogbo ìnáwó: èròjà tàbí ohun èlò, ohun ìpọ́nlé, ọkọ̀, èédú tàbí gáàsì, data fóònù, owó ìsọ̀, àti àkókò tìrẹ.",
            "Ìnáwó ọjà kọ̀ọ̀kan = àpapọ̀ ìnáwó ọjà tí a ṣe pọ̀ pín sí iye ọjà náà. Lẹ́yìn náà fi èrè kún un. Àpẹẹrẹ láti Kumasi: Abena ṣe meat pie 40. Ìyẹ̀fun, ẹran, epo àti gáàsì jẹ́ GHS 160, àpò jẹ́ GHS 10, ọkọ̀ sì jẹ́ GHS 10: GHS 180 lápapọ̀, ìyẹn GHS 4.50 fún pie kọ̀ọ̀kan. Ó ń tà á ní GHS 7 (iye owó àpẹẹrẹ), nítorí náà pie kọ̀ọ̀kan ń mú èrè GHS 2.50 wá. Wo iye tí àwọn olùtajà irú rẹ̀ ń tà láti mọ̀ bóyá àwọn oníbàárà máa san iye owó rẹ.",
            "San owó fún ara rẹ. Pinnu iye owó kan pàtó tí o máa mú láti inú òwò lọ́sẹ̀ọ̀sẹ̀, kí o sì fi èyí tó kù sílẹ̀ nínú òwò fún ọjà àti ìdàgbàsókè. Tí o bá mú gbogbo rẹ̀, òwò kò lè dàgbà; tí o kò bá mú nǹkan kan, iṣẹ́ ọ̀fẹ́ lò ń ṣe. Kọ iye tí o mú sínú àkọsílẹ̀ rẹ.",
            "Tí iye owó rẹ kò bá bo ìnáwó rẹ, yí nǹkan kan padà: ìwọ̀n tó kéré jù, olùpèsè tó dára jù, rírà ní ọ̀pọ̀ pẹ̀lú àwọn mìíràn, tàbí iye owó tó ga jù fún ọjà tó dára jù."
          ],
          steps: ["Kọ gbogbo ìnáwó ọjà kan tí o ṣe pọ̀, pẹ̀lú ọkọ̀, epo, data àti owó ìsọ̀.", "Pín àpapọ̀ náà sí iye ọjà láti rí ìnáwó ọjà kọ̀ọ̀kan.", "Fi èrè kún un láti mọ iye owó títà; fi wé ti àwọn olùtajà irú rẹ̀.", "Pinnu iye owó kan pàtó lọ́sẹ̀ọ̀sẹ̀ tí o máa san fún ara rẹ; fi èyí tó kù sílẹ̀ nínú òwò."],
          words: [["Ìnáwó ọjà kọ̀ọ̀kan", "àpapọ̀ ìnáwó ọjà tí a ṣe pọ̀ pín sí iye ọjà tí a ṣe."], ["Èrè", "owó tó ṣẹ́kù lẹ́yìn tí a ti san gbogbo ìnáwó."], ["Sísan owó fún ara rẹ", "iye owó kan pàtó tí olówó òwò ń mú, kí èyí tó kù lè wà fún ọjà àti ìdàgbàsókè."]],
          slides: [
            { title: "Ka gbogbo ìnáwó", bullets: ["Ohun èlò àti ohun ìpọ́nlé", "Ọkọ̀, epo, data, owó ìsọ̀", "Àkókò tìrẹ"] },
            { title: "Ìnáwó ọjà kọ̀ọ̀kan", bullets: ["Àpapọ̀ ìnáwó / iye ọjà", "Abena: GHS 180 / pie 40 = GHS 4.50", "Ó ń tà á ní GHS 7 = èrè GHS 2.50 (àpẹẹrẹ)"] },
            { title: "San iye owó kan pàtó fún ara rẹ", bullets: ["Mú iye kan pàtó lọ́sẹ̀ọ̀sẹ̀", "Fi èyí tó kù sílẹ̀ fún ọjà àti ìdàgbàsókè", "Kọ ọ́ sínú àkọsílẹ̀ rẹ"] },
            { title: "Iye owó ti kéré jù?", bullets: ["Ìwọ̀n tó kéré jù tàbí olùpèsè tó dára jù", "Ra ní ọ̀pọ̀ pẹ̀lú àwọn mìíràn", "Iye owó tó ga jù fún ọjà tó dára jù"] }
          ],
          tryIt: "Yan ọjà kan. Kọ gbogbo ìnáwó ọjà kan tí o ṣe pọ̀, ṣírò ìnáwó ọjà kọ̀ọ̀kan, fi iye owó tó ní èrè, kí o sì pinnu iye tí o máa san fún ara rẹ lọ́sẹ̀ọ̀sẹ̀.",
          youCanNow: "fi iye owó sí ọjà kí ó lè mú èrè wá, kí o sì san iye owó kan pàtó fún ara rẹ.",
          quickCheck: [
            { objective: "O3", q: "Àpò 20 tí a ṣe pọ̀ ná 10,000 NGN lápapọ̀. Kí ni ìnáwó àpò kọ̀ọ̀kan?", options: ["200 NGN", "20 NGN", "500 NGN", "10,000 NGN"], answer: 2, why: "10,000 pín sí 20 jẹ́ 500 NGN fún àpò kọ̀ọ̀kan." },
            { objective: "O3", q: "Kí ló dé tí o fi máa san iye owó kan pàtó fún ara rẹ dípò kí o mú gbogbo owó?", options: ["Kí o má baà rí nǹkan kan láéláé", "Kí owó lè wà nínú òwò fún ọjà àti ìdàgbàsókè", "Kí àwọn oníbàárà lè san púpọ̀ sí i", "Gbogbo báńkì ló ní kí a ṣe bẹ́ẹ̀"], answer: 1, why: "Iye owó kan pàtó ń san owó fún ọ, ó sì ń fi owó sílẹ̀ kí òwò lè máa lọ kí ó sì dàgbà." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Bíbẹ̀rẹ̀ dáadáa",
        questions: [
          { objective: "O1", q: "Èrò A ní máàkì 11, èrò B sì ní 7, ṣùgbọ́n èrò A kò wù ọ́ rárá. Kí ni o máa ṣe?", options: ["Máa yan máàkì tó ga jù nígbà gbogbo", "Má ṣe yan èyíkéyìí kí o sì dúró", "Tún máàkì fún wọn títí B yóò fi borí", "Lo máàkì láti ronú, kí o sì tún béèrè bóyá iṣẹ́ náà máa wù ọ́"], answer: 3, why: "Máàkì ń ràn ọ́ lọ́wọ́ láti ronú; kí iṣẹ́ náà wù ọ́ náà ṣe pàtàkì." },
          { objective: "O2", q: "Ta ni o máa fi ọjà ìdánwò rẹ lọ̀?", options: ["Ó kéré tán ènìyàn mẹ́wàá tí kì í ṣe ẹbí tímọ́tímọ́", "Ọkọ rẹ nìkan", "Ọ̀rẹ́ tímọ́tímọ́ rẹ nìkan", "Kò sí ẹnìkan; kàn méfò"], answer: 0, why: "Àwọn oníbàárà gidi ń fún ọ ní ìdáhùn tòótọ́ nípasẹ̀ ohun tí wọ́n rà." },
          { objective: "O2", q: "Kí ló dé tí a fi ń fi ọjà díẹ̀ dánwò?", options: ["Láti ná owó púpọ̀ sí i", "Láti kẹ́kọ̀ọ́ kí o tó ná owó púpọ̀", "Nítorí pé ọjà púpọ̀ lòdì sí òfin", "Láti yẹra fún àwọn oníbàárà"], answer: 1, why: "Ìdánwò kékeré kì í wọ́n, ó sì ń fi hàn bóyá àwọn ènìyàn máa rà." },
          { objective: "O3", q: "Ìnáwó wo ni ọ̀pọ̀ olùtajà máa ń gbàgbé?", options: ["Èròjà pàtàkì", "Ọjà náà fúnra rẹ̀", "Ọkọ̀, epo, data àti àkókò tiwọn", "Iye owó títà"], answer: 2, why: "Àwọn ìnáwó kékeré bí ọkọ̀ àti epo máa ń pọ̀ sí i, wọ́n sì ń jẹ èrè run." },
          { objective: "O3", q: "Ìnáwó ọjà kọ̀ọ̀kan jẹ́ GHS 4.50, iye owó títà sì jẹ́ GHS 7. Kí ni èrè ọjà kọ̀ọ̀kan?", options: ["GHS 11.50", "GHS 7", "GHS 4.50", "GHS 2.50"], answer: 3, why: "7 yọ 4.50 jẹ́ 2.50." }
        ]
      }
    },
    {
      name: "Orí 2: Dídàgbà ní agbára",
      lessons: [
        {
          title: "Wíwá àkókò: ẹbí, ìtọ́jú àti ìrànlọ́wọ́",
          objectives: ["O4"],
          minutes: 5,
          goal: "Ṣe ètò àkókò ọ̀sẹ̀ pẹ̀lú wákàtí òwò, iṣẹ́ ìtọ́jú ẹbí àti àwọn tí ó ń ràn ọ́ lọ́wọ́.",
          text: [
            "Ní ọ̀pọ̀ ibi, àwọn obìnrin ló ń ṣe èyí tó pọ̀ jù nínú iṣẹ́ ìtọ́jú ilé tí a kì í sanwó fún: oúnjẹ sísè, ìmọ́tótó, pípọn omi, àti títọ́jú ọmọ, aláìsàn àti àgbàlagbà. UN Women (àjọ Àgbáyé fún àwọn obìnrin) sọ pé èyí ń fi àkókò díẹ̀ sílẹ̀ fún àwọn obìnrin láti ṣe iṣẹ́ tí a ń sanwó fún. Òwò náà nílò àkókò, nítorí náà ṣètò rẹ̀.",
            "Ya ọ̀sẹ̀ kan: ọjọ́ méje àti àárọ̀, ọ̀sán àti alẹ́. Sàmì sí iṣẹ́ ìtọ́jú ẹbí, lẹ́yìn náà wákàtí òwò rẹ: rírà ọjà, ṣíṣe ọjà, títà, dídáhùn ọ̀rọ̀ àti àkọsílẹ̀. Wá ibi tí wọ́n ti kọlu ara wọn àti àyè tó ṣófo.",
            "Lẹ́yìn náà béèrè fún ìrànlọ́wọ́. Bá ọkọ tàbí alábàáṣègbéyàwó rẹ, àwọn ọmọ tó ti dàgbà, arábìnrin tàbí aládùúgbò sọ̀rọ̀ nípa pínpín iṣẹ́ bí pípọn omi, gbígbé ọmọ lọ sí ilé-ìwé tàbí oúnjẹ sísè ní ọjọ́ ọjà tí iṣẹ́ pọ̀. Àwọn obìnrin kan ń ṣe pàṣípààrọ̀ ìtọ́jú ọmọ pẹ̀lú àwọn ìyá mìíràn, tàbí kí wọ́n ṣiṣẹ́ nítòsí ilé ní àwọn ọjọ́ kan. Àpẹẹrẹ: Mariam ní Yaoundé ń tà ní ọjà ní ọjọ́ Ìṣẹ́gun, Ẹtì àti Àbámẹ́ta; arábìnrin rẹ̀ ń tọ́jú àwọn ọmọ ní àárọ̀ àwọn ọjọ́ náà, Mariam sì ń bá a dí irun rẹ̀ ní ìpadà.",
            "Fi ètò náà han ẹbí rẹ kí ẹ sì gbà á pọ̀. Tọ́jú ara rẹ náà: ìsinmi àti ìlera ló ń jẹ́ kí òwò máa lọ."
          ],
          steps: ["Ya ọjọ́ méje pẹ̀lú àárọ̀, ọ̀sán àti alẹ́.", "Sàmì sí iṣẹ́ ìtọ́jú ẹbí àti iṣẹ́ ilé.", "Sàmì sí wákàtí òwò: rírà, ṣíṣe, títà, ọ̀rọ̀, àkọsílẹ̀.", "Wá ibi tí wọ́n ti kọlu ara wọn, kí o sì ní kí ẹnì kan nínú ẹbí tàbí olùrànlọ́wọ́ bá ọ pín iṣẹ́.", "Ẹ jọ gbà sí ètò náà, kí ẹ sì fi ìsinmi sí i."],
          words: [["Iṣẹ́ ìtọ́jú ilé tí a kì í sanwó fún", "iṣẹ́ nílé tí a kì í sanwó fún, bí oúnjẹ sísè, ìmọ́tótó àti títọ́jú ọmọ, aláìsàn àti àgbàlagbà."], ["Pàṣípààrọ̀ ìtọ́jú ọmọ", "àwọn ìyá tí ń gba ara wọn lọ́wọ́ láti tọ́jú ọmọ ara wọn ní àyè-àyè."]],
          slides: [
            { title: "Àkókò rẹ jẹ́ apá kan òwò náà", bullets: ["Àwọn obìnrin ló ń ṣe èyí tó pọ̀ jù nínú iṣẹ́ ìtọ́jú tí a kì í sanwó fún", "Òwò náà nílò àkókò", "Nítorí náà ṣètò rẹ̀"] },
            { title: "Ya ọ̀sẹ̀ rẹ", bullets: ["Ọjọ́ méje: àárọ̀, ọ̀sán, alẹ́", "Sàmì sí iṣẹ́ ìtọ́jú ẹbí", "Sàmì sí wákàtí òwò", "Wá ibi tí wọ́n ti kọlu ara wọn"] },
            { title: "Béèrè fún ìrànlọ́wọ́", bullets: ["Alábàáṣègbéyàwó, ọmọ tó ti dàgbà, arábìnrin, aládùúgbò", "Ẹ pín omi pípọn, gbígbé ọmọ lọ sí ilé-ìwé, oúnjẹ sísè", "Ṣe pàṣípààrọ̀ ìtọ́jú ọmọ pẹ̀lú àwọn ìyá mìíràn"] },
            { title: "Ẹ jọ gbà á pọ̀", bullets: ["Fi ètò náà han ẹbí rẹ", "Fi ìsinmi àti ìlera sí i"] }
          ],
          tryIt: "Ya ètò àkókò ọ̀sẹ̀ rẹ pẹ̀lú iṣẹ́ ìtọ́jú ẹbí àti wákàtí òwò. Sàmì sí ibi kan tí wọ́n ti kọlu ara wọn, kọ ẹni tí ó lè ràn ọ́ lọ́wọ́ níbẹ̀, kí o sì bá ẹni náà sọ̀rọ̀ ní ọ̀sẹ̀ yìí.",
          youCanNow: "ṣètò ọ̀sẹ̀ rẹ kí òwò rẹ àti iṣẹ́ ìtọ́jú ẹbí lè bá ara wọn mu, pẹ̀lú ìrànlọ́wọ́ tí o nílò.",
          quickCheck: [
            { objective: "O4", q: "Ọjọ́ ọjà rẹ kọlu àkókò gbígbé ọmọ lọ sí ilé-ìwé. Kí ni ìgbésẹ̀ tó dára?", options: ["Ní kí ẹnì kan nínú ẹbí tàbí ìyá mìíràn bá ọ pín gbígbé ọmọ lọ sí ilé-ìwé", "Pa òwò náà tì", "Má ṣe lọ sí ọjà mọ́ láéláé", "Fi àwọn ọmọ sílẹ̀ láìsí ẹnì kan"], answer: 0, why: "Pínpín iṣẹ́ ń fún ọ ní àkókò fún òwò láìṣe ẹbí ní ìpalára." },
            { objective: "O4", q: "Kí ló dé tí o fi máa fi ètò àkókò rẹ han ẹbí rẹ?", options: ["Láti tọrọ àṣẹ láti wà láàyè", "Kí wọ́n lè gbà sí i kí wọ́n sì ràn ọ́ lọ́wọ́", "Kí wọ́n lè gba owó rẹ", "Kò ṣe pàtàkì"], answer: 1, why: "Nígbà tí ẹbí bá gbà sí ètò náà, ó ṣeé ṣe jù kí wọ́n ràn ọ́ lọ́wọ́." }
          ],
          sources: [UNWOMEN]
        },
        {
          title: "Wíwá owó àti ìrànlọ́wọ́ láìléwu",
          objectives: ["O5"],
          minutes: 6,
          goal: "Ṣàyẹ̀wò pé gbèsè, ẹ̀bùn owó tàbí ètò kan jẹ́ gidi, kí o sì di àṣẹ lórí owó rẹ mú.",
          text: [
            "Àwọn ètò wà fún àwọn obìnrin àti òwò kékeré. Àpẹẹrẹ: Women Enterprise Fund ní Kenya, owó ìjọba fún òwò àwọn obìnrin; SMEDAN ní Nàìjíríà, tí ìforúkọsílẹ̀ ọ̀fẹ́ rẹ̀ ń ṣí àwọn ètò bí Women In Self-employment Programme sílẹ̀; DER/FJ ní Senegal, tí ó ń pèsè ìdálẹ́kọ̀ọ́, ìforúkọsílẹ̀ òwò àti owó ìṣòwò fún àwọn obìnrin àti ọ̀dọ́; Ghana Enterprises Agency; àti ètò AFAWA ti African Development Bank (Báńkì Ìdàgbàsókè Áfíríkà), tí ó ń bá àwọn báńkì àti ayánilówó ṣiṣẹ́ kí wọ́n lè yá àwọn obìnrin lówó. Ẹgbẹ́ àjọ àti microfinance ní ẹ̀kọ́ tiwọn.",
            "Orúkọ, òfin àti ọjọ́ tí ètò ń ṣí sílẹ̀ ń yí padà, nítorí náà máa ṣàyẹ̀wò lórí ojú-òpó wẹ́ẹ̀bù gidi tàbí ọ́fíìsì ètò náà nígbà gbogbo. Àwọn onjìbìtì ń ṣe bí ẹni pé àwọn ń fún obìnrin ní ẹ̀bùn owó àti gbèsè, wọ́n sì ń kọ́kọ́ béèrè \"owó ìṣètò\" tàbí \"owó ìforúkọsílẹ̀\". Ètò gidi ń sọ owó rẹ̀ fún ọ lórí ojú-òpó wẹ́ẹ̀bù rẹ̀ gidi; má ṣe san owó fún àjèjì láéláé láti gba ẹ̀bùn owó.",
            "Di àṣẹ lórí owó rẹ mú. Ní nọ́mbà owó orí fóònù (mobile money) tàbí àkáǹtì ní orúkọ ara rẹ, kí o sì fi PIN rẹ pamọ́ fún gbogbo ènìyàn, títí kan ẹbí. Ilé-iṣẹ́ gidi kì í béèrè PIN rẹ láéláé. Tí ẹnì kan bá ń fi agbára tàbí ìhalẹ̀ gba owó tí o pa, ìlòkulò ni; bá ẹni tí o gbẹ́kẹ̀ lé, ẹgbẹ́ obìnrin tàbí iṣẹ́ ìrànlọ́wọ́ àdúgbò sọ̀rọ̀.",
            "Kí o tó yá owó, mọ àpapọ̀ iye tí o máa san padà, ìgbà tí o máa san án, àti ohun tí ó máa ṣẹlẹ̀ tí o bá pẹ́. Yá owó fún ohun tí ó máa mú owó wá, kì í ṣe láti bo ìnáwó ilé ojoojúmọ́."
          ],
          steps: ["Wá ojú-òpó wẹ́ẹ̀bù gidi tàbí ọ́fíìsì ètò náà.", "Ṣàyẹ̀wò ohun tí ó ń pèsè, àwọn tí ó lè forúkọ sílẹ̀, ọjọ́ tí ó ṣí sílẹ̀ àti owó rẹ̀.", "Kọ ẹnikẹ́ni tí ó bá ní kí o san owó sí àkáǹtì àjèjì.", "Ní nọ́mbà owó orí fóònù tàbí àkáǹtì ní orúkọ ara rẹ àti PIN tí o fi pamọ́.", "Kí o tó yá owó, kọ àpapọ̀ iye tí o máa san padà, ìgbà wo, àti òfin tí o bá pẹ́."],
          words: [["Ẹ̀bùn owó (grant)", "owó tí a fúnni fún ète kan tí a kò ní san padà."], ["Gbèsè (loan)", "owó tí a yá tí a gbọ́dọ̀ san padà, nígbà gbogbo pẹ̀lú owó èlé (interest)."], ["Jìbìtì owó-ìṣáájú (advance-fee scam)", "ẹ̀tàn tí ẹnì kan ti ń ṣèlérí owó ṣùgbọ́n tí ó ní kí o kọ́kọ́ san owó kan."]],
          slides: [
            { title: "Ìrànlọ́wọ́ fún òwò àwọn obìnrin", bullets: ["Kenya: Women Enterprise Fund", "Nàìjíríà: àwọn ètò SMEDAN", "Senegal: DER/FJ; Ghana: Ghana Enterprises Agency", "AFAWA ti AfDB: ń ṣiṣẹ́ nípasẹ̀ báńkì àti ayánilówó"] },
            { title: "Ṣàyẹ̀wò pé ó jẹ́ gidi", bullets: ["Ojú-òpó wẹ́ẹ̀bù gidi tàbí ọ́fíìsì nìkan", "Àwọn tí ó lè forúkọ sílẹ̀, ọjọ́ àti owó", "Má ṣe san owó fún àjèjì láéláé láti gba ẹ̀bùn owó"] },
            { title: "Di àṣẹ lórí owó rẹ mú", bullets: ["Àkáǹtì tàbí nọ́mbà owó orí fóònù ní orúkọ rẹ", "PIN ní ìkọ̀kọ̀ fún gbogbo ènìyàn, kódà ẹbí", "Ilé-iṣẹ́ gidi kì í béèrè PIN rẹ láéláé"] },
            { title: "Kí o tó yá owó", bullets: ["Àpapọ̀ iye tí o máa san padà àti ìgbà wo", "Ohun tí ó máa ṣẹlẹ̀ tí o bá pẹ́", "Yá owó láti pa owó, kì í ṣe fún ìnáwó ojoojúmọ́"] }
          ],
          tryIt: "Yan ètò kan láti inú ẹ̀kọ́ yìí tàbí èyí tí o mọ̀. Wá ojú-òpó wẹ́ẹ̀bù gidi tàbí ọ́fíìsì rẹ̀, kí o sì kọ ohun tí ó ń pèsè, àwọn tí ó lè forúkọ sílẹ̀, bóyá ó ṣí sílẹ̀ báyìí, àti ọjọ́ tí o ṣàyẹ̀wò rẹ̀.",
          youCanNow: "wá ìrànlọ́wọ́ fún òwò rẹ, ṣàyẹ̀wò pé ó jẹ́ gidi, kí o sì di àṣẹ lórí owó tìrẹ mú.",
          quickCheck: [
            { objective: "O5", q: "Ọ̀rọ̀ kan sọ pé o ti jẹ ẹ̀bùn owó òwò obìnrin; kọ́kọ́ san \"owó ìṣètò\" 5,000 KES. Kí ni èyí?", options: ["Ìgbésẹ̀ ètò lásán", "Jìbìtì ni; ṣàyẹ̀wò ojú-òpó gidi kí o má sì san owó fún àjèjì", "Gbèsè tí o gbọ́dọ̀ gbà", "Owó orí"], answer: 1, why: "Bíbéèrè owó kí a tó fúnni ní ẹ̀bùn owó jẹ́ jìbìtì owó-ìṣáájú tí a mọ̀ dáadáa." },
            { objective: "O5", q: "Ta ni ó yẹ kí ó mọ PIN owó orí fóònù rẹ?", options: ["Ọkọ rẹ", "Oníbàárà rẹ tó dára jù", "Aṣojú tí ó pè ọ́", "Ìwọ nìkan"], answer: 3, why: "PIN rẹ ń dáàbò bo owó rẹ; ilé-iṣẹ́ gidi kì í béèrè rẹ̀." }
          ],
          sources: [WEF, SMEDAN, DERFJ, GEA, AFAWA]
        },
        {
          title: "Àwọn alájọṣe, olùtọ́sọ́nà àti ètò ìdàgbàsókè oṣù mẹ́fà",
          objectives: ["O6"],
          minutes: 5,
          goal: "Kọ àfojúsùn mẹ́ta tí a lè díwọ̀n fún oṣù mẹ́fà kí o sì dárúkọ olùtọ́sọ́nà tàbí ẹgbẹ́ kan tí o máa kàn sí.",
          text: [
            "Ọ̀pọ̀ obìnrin ń dàgbà kíákíá pẹ̀lú àwọn mìíràn: olùtọ́sọ́nà tí ó ti ṣe é rí, ẹgbẹ́ àwọn obìnrin oníṣòwò, ẹgbẹ́ ọjà tàbí ẹgbẹ́ oníṣẹ́, ẹgbẹ́ alájọṣe (cooperative), chamber of commerce (ẹgbẹ́ àwọn oníṣòwò ìlú) tàbí ibùdó ìrànlọ́wọ́ òwò. Wọ́n ń pín oníbàárà, olùpèsè, ìmọ̀ràn àti ìgboyà.",
            "Olùtọ́sọ́nà (mentor) ni ẹni tí ó ní ìrírí jù ọ́ lọ tí ó ń fún ọ ní ìmọ̀ràn. Béèrè ìmọ̀ràn ìṣẹ́jú 20 lọ́wọ́ obìnrin kan tí o ń wò bí àwòkọ́ṣe, pẹ̀lú ìbéèrè méjì tó yé. Darapọ̀ mọ́ ẹgbẹ́ kan níbi tí àwọn oníbàárà tàbí olùpèsè rẹ ti ń pàdé. Lọ sí ìfihàn ọjà (trade fair) tàbí ọjọ́ ọjà ní ìlú ńlá nígbà tí o bá lè ṣe é.",
            "Lẹ́yìn náà kọ àfojúsùn mẹ́ta fún oṣù mẹ́fà tó ń bọ̀. Jẹ́ kí ọ̀kọ̀ọ̀kan ṣeé díwọ̀n, pẹ̀lú nọ́mbà àti ọjọ́: \"Ta ìgò ọṣẹ 60 lọ́sẹ̀ kí oṣù March tó parí\", \"Fi GHS 500 pamọ́ fún ẹ̀rọ ìránṣọ kejì kí oṣù June tó dé\" (iye owó àpẹẹrẹ), \"Rí oníbàárà ṣọ́ọ̀bù tuntun márùn-ún kí oṣù May tó dé\". Ṣàyẹ̀wò àwọn àfojúsùn rẹ lẹ́ẹ̀kan lóṣù kí o sì kọ ohun tí o ṣe.",
            "Àpẹẹrẹ: Ngozi ní Enugu, tí ó ń ta àpò Ankara, darapọ̀ mọ́ ẹgbẹ́ àwọn obìnrin oníṣòwò, ó rí olùtọ́sọ́nà kan tí ó ń kó àpò lọ sí òkè òkun, ó sì kọ àfojúsùn fún títà, owó ìfipamọ́ àti ìsọ̀ àkọ́kọ́ rẹ̀ ní ìfihàn ọjà."
          ],
          steps: ["Kọ àwọn ènìyàn àti ẹgbẹ́ tí ó lè ràn ọ́ lọ́wọ́: olùtọ́sọ́nà, ẹgbẹ́, ẹgbẹ́ alájọṣe, ibùdó ìrànlọ́wọ́.", "Yan ọ̀kan tí o máa kàn sí lóṣù yìí, pẹ̀lú ìbéèrè méjì tó yé.", "Kọ àfojúsùn mẹ́ta, ọ̀kọ̀ọ̀kan pẹ̀lú nọ́mbà àti ọjọ́.", "Ṣàyẹ̀wò àwọn àfojúsùn rẹ lẹ́ẹ̀kan lóṣù kí o sì kọ ohun tí o ṣe."],
          words: [["Olùtọ́sọ́nà (mentor)", "ẹni tí ó ní ìrírí tí ó ń fún ọ ní ìmọ̀ràn àti ìrànlọ́wọ́."], ["Àfojúsùn tí a lè díwọ̀n", "àfojúsùn tí ó ní nọ́mbà àti ọjọ́, kí o lè mọ̀ bóyá o ti dé ibẹ̀."], ["Ẹgbẹ́ (association)", "àkójọ àwọn ènìyàn tí wọ́n ń ṣe iṣẹ́ kan náà tàbí tí wọ́n wà nínú ipò kan náà, tí wọ́n sì ń ran ara wọn lọ́wọ́."]],
          slides: [
            { title: "Dàgbà pẹ̀lú àwọn mìíràn", bullets: ["Olùtọ́sọ́nà àti ẹgbẹ́ àwọn obìnrin", "Ẹgbẹ́ oníṣẹ́, ẹgbẹ́ alájọṣe, chamber of commerce", "Ibùdó ìrànlọ́wọ́ òwò"] },
            { title: "Wá olùtọ́sọ́nà", bullets: ["Obìnrin kan tí o ń wò bí àwòkọ́ṣe", "Béèrè ìṣẹ́jú 20", "Mú ìbéèrè méjì tó yé lọ́wọ́"] },
            { title: "Àfojúsùn mẹ́ta tí a lè díwọ̀n", bullets: ["Ọ̀kọ̀ọ̀kan pẹ̀lú nọ́mbà àti ọjọ́", "Títà, owó ìfipamọ́, oníbàárà tuntun", "Ṣàyẹ̀wò wọn lẹ́ẹ̀kan lóṣù"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò òwò ojú-ewé kan pẹ̀lú èrò tí o fún ní máàkì, èsì ìdánwò rẹ, iye owó àti èrè, iye tí o ń san fún ara rẹ, ètò àkókò ọ̀sẹ̀ rẹ, ọ̀nà ìrànlọ́wọ́ kan tí o ṣàyẹ̀wò, àfojúsùn oṣù mẹ́fà mẹ́ta àti olùtọ́sọ́nà tàbí ẹgbẹ́ kan tí o máa kàn sí.",
          youCanNow: "kọ́ àwọn alájọṣe kí o sì kọ ètò ìdàgbàsókè oṣù mẹ́fà pẹ̀lú àfojúsùn tí a lè díwọ̀n.",
          quickCheck: [
            { objective: "O6", q: "Àfojúsùn wo ni a lè díwọ̀n?", options: ["\"Ṣe dáadáa sí i\"", "\"Di olókìkí\"", "\"Ta aṣọ 40 lóṣù kí oṣù June tó parí\"", "\"Ṣiṣẹ́ kára\""], answer: 2, why: "Ó ní nọ́mbà àti ọjọ́, nítorí náà o lè ṣàyẹ̀wò bóyá o ti dé ibẹ̀." },
            { objective: "O6", q: "Báwo ni o ṣe máa béèrè ìrànlọ́wọ́ lọ́wọ́ ẹni tí ó lè di olùtọ́sọ́nà rẹ?", options: ["Béèrè ìṣẹ́jú 20 pẹ̀lú ìbéèrè méjì tó yé", "Ní kí ó fún ọ ní owó", "Ní kí ó máa ṣe òwò rẹ fún ọ", "Má ṣe béèrè láéláé; dúró dè é"], answer: 0, why: "Ìbéèrè kúkúrú tó yé ń bọ̀wọ̀ fún àkókò rẹ̀, ó sì ń mú ìmọ̀ràn tó wúlò wá." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Dídàgbà ní agbára",
        questions: [
          { objective: "O4", q: "Kí ni iṣẹ́ ìtọ́jú ilé tí a kì í sanwó fún?", options: ["Iṣẹ́ ní báńkì", "Iṣẹ́ nílé tí a kì í sanwó fún, bí oúnjẹ sísè àti títọ́jú ọmọ", "Títà ní ọjà", "Iṣẹ́ ìjọba"], answer: 1, why: "Iṣẹ́ ìtọ́jú tí a kì í sanwó fún ni iṣẹ́ ilé àti ìtọ́jú tí ó ń gba àkókò ṣùgbọ́n tí kò mú owó wá." },
          { objective: "O4", q: "Ètò àkókò ọ̀sẹ̀ gbọ́dọ̀ fi hàn:", options: ["Wákàtí òwò nìkan", "Ìsinmi nìkan", "Wákàtí òwò, iṣẹ́ ìtọ́jú ẹbí àti àwọn tí ó ń ràn ọ́ lọ́wọ́", "Àkókò ilé-ìwé àwọn ọmọ rẹ nìkan"], answer: 2, why: "Rírí gbogbo rẹ̀ pọ̀ ń fi ibi tí wọ́n ti kọlu ara wọn àti ibi tí o ti nílò ìrànlọ́wọ́ hàn." },
          { objective: "O5", q: "Níbo ni o ti máa ṣàyẹ̀wò bóyá ètò gbèsè fún obìnrin jẹ́ gidi?", options: ["Ojú-òpó wẹ́ẹ̀bù gidi tàbí ọ́fíìsì rẹ̀", "Ọ̀rọ̀ tí wọ́n dárí sí ọ (forwarded)", "Àjèjì lórí fóònù", "Ọ̀rọ̀ lórí ìkànnì àjọlò"], answer: 0, why: "Orísun gidi nìkan ló ń fi ètò tòótọ́, ọjọ́ rẹ̀ àti owó rẹ̀ hàn." },
          { objective: "O5", q: "Kí o tó yá owó, kí ni o gbọ́dọ̀ mọ̀?", options: ["Orúkọ ayánilówó nìkan", "Bí o ṣe máa yára rí i gbà nìkan", "Kò sí nǹkan; kàn fọwọ́ sí i", "Àpapọ̀ iye tí o máa san padà, ìgbà wo, àti ohun tí ó máa ṣẹlẹ̀ tí o bá pẹ́"], answer: 3, why: "Mímọ gbogbo iye owó àti òfin ìpẹ́ ń dáàbò bò ọ́ lọ́wọ́ gbèsè tí o kò lè san." },
          { objective: "O6", q: "Ìgbà mélòó ni o yẹ kí o máa ṣàyẹ̀wò àfojúsùn oṣù mẹ́fà rẹ?", options: ["Láéláé", "Lẹ́ẹ̀kan lóṣù", "Ní ìparí oṣù mẹ́fà nìkan", "Lẹ́ẹ̀kan ní ọdún mẹ́wàá"], answer: 1, why: "Àyẹ̀wò oṣooṣù ń fi ìlọsíwájú hàn ní kùtùkùtù, kí o lè yí ọ̀nà padà." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Àwọn Obìnrin Oníṣòwò: Bíbẹ̀rẹ̀ àti Mímú Òwò Dàgbà",
    questions: [
      { objective: "O1", q: "Òwò tó dára fún ọ ni èyí tí:", options: ["Ó bá ọgbọ́n, àkókò, owó àti ìbéèrè ọjà nítòsí rẹ mu", "Aládùúgbò rẹ ti ń ṣe dáadáa", "Ó nílò owó tó pọ̀ jù", "Ó lókìkí jù"], answer: 0, why: "Òwò tó bá ọ àti ọjà rẹ mu ló ṣeé ṣe jù kí ó pẹ́." },
      { objective: "O1", q: "Owó ìbẹ̀rẹ̀ túmọ̀ sí:", options: ["Èrè rẹ lọ́sẹ̀", "Owó tí o nílò láti bẹ̀rẹ̀", "Iye owó tí àwọn oníbàárà ń san", "Gbèsè tí o gbọ́dọ̀ yá"], answer: 1, why: "Ó jẹ́ owó fún irinṣẹ́, ọjà àkọ́kọ́, ìsọ̀ tàbí ìwé àṣẹ." },
      { objective: "O1", q: "Kí ló dé tí a fi ń fún èrò kọ̀ọ̀kan ní máàkì lórí nǹkan mẹ́rin kan náà?", options: ["Láti mú kí ó gùn sí i", "Kí gbogbo èrò lè borí", "Kí o lè fi àwọn èrò wé ara wọn lọ́nà tó tọ́", "Nítorí pé báńkì nílò rẹ̀"], answer: 2, why: "Máàkì kan náà fún gbogbo èrò ń jẹ́ kí ìfiwéra tọ́." },
      { objective: "O2", q: "\"Màá rà á lọ́sẹ̀ tó ń bọ̀\" láti ẹnu ọ̀rẹ́ kan jẹ́:", options: ["Títà", "Àdéhùn", "Gbèsè", "Kì í ṣe títà síbẹ̀; ka rírà gidi"], answer: 3, why: "Rírà gidi nìkan ló ń fi ìbéèrè ọjà hàn." },
      { objective: "O2", q: "Nígbà ìdánwò, o máa kọ sílẹ̀:", options: ["Iye àwọn tó rà, iye owó, àti ohun tí wọ́n fẹ́ràn àti tí wọ́n béèrè", "Ìnáwó rẹ nìkan", "Kò sí nǹkan", "Orúkọ àwọn ọ̀rẹ́ rẹ nìkan"], answer: 0, why: "Àkọsílẹ̀ wọ̀nyí ń fi ìbéèrè ọjà àti ohun tí o lè mú dára sí i hàn." },
      { objective: "O2", q: "Lẹ́yìn ìdánwò o lè:", options: ["Jáwọ́ nìkan", "Tẹ̀ síwájú, yí nǹkan kan padà, tàbí gbìyànjú èrò tó kàn", "Ná gbogbo owó tí o fi pamọ́ nìkan", "Sọ iye owó di ìlọ́po méjì nìkan"], answer: 1, why: "Ìdánwò ń ràn ọ́ lọ́wọ́ láti yan ìgbésẹ̀ rẹ tó kàn lọ́gbọ́n." },
      { objective: "O3", q: "Ìnáwó ọjà kọ̀ọ̀kan ni:", options: ["Iye owó tí o ń retí", "Iye owó aládùúgbò rẹ", "Àpapọ̀ ìnáwó pín sí iye ọjà", "Èrè rẹ"], answer: 2, why: "Pínpín ìnáwó sí iye ọjà ń fi ìnáwó ọ̀kọ̀ọ̀kan hàn." },
      { objective: "O3", q: "Ọjà tí a ṣe pọ̀ ná 30,000 XAF, ó sì mú ọjà 60 jáde. Ìnáwó ọjà kọ̀ọ̀kan ni:", options: ["600 XAF", "60 XAF", "1,800 XAF", "500 XAF"], answer: 3, why: "30,000 pín sí 60 jẹ́ 500 XAF." },
      { objective: "O3", q: "Tí iye owó rẹ kò bá bo ìnáwó rẹ, o lè:", options: ["Yí ìwọ̀n tàbí olùpèsè padà, ra ní ọ̀pọ̀ pẹ̀lú àwọn mìíràn, tàbí gbé iye owó sókè fún ọjà tó dára", "Máa tà ní àdánù títí láé", "Dẹ́kun kíkọ ìnáwó sílẹ̀", "Yá owó láti bò ó lọ́sẹ̀ọ̀sẹ̀"], answer: 0, why: "Yíyí ìnáwó tàbí iye owó padà ni ọ̀nà láti padà sí èrè." },
      { objective: "O3", q: "Sísan iye owó kan pàtó fún ara rẹ lọ́sẹ̀ọ̀sẹ̀ túmọ̀ sí:", options: ["Mímú gbogbo owó", "Kíkọ̀ láti mú nǹkan kan láéláé", "Mímú iye kan pàtó kí o sì fi èyí tó kù sílẹ̀ fún òwò", "Sísan owó fún àwọn oníbàárà rẹ"], answer: 2, why: "Iye owó kan pàtó ń san owó fún ọ, ó sì ń jẹ́ kí owó wà nínú òwò." },
      { objective: "O4", q: "UN Women sọ pé iṣẹ́ ìtọ́jú ilé tí a kì í sanwó fún:", options: ["Gbogbo ènìyàn ló ń ṣe é dọ́gba", "Ń fi àkókò díẹ̀ sílẹ̀ fún ọ̀pọ̀ obìnrin láti ṣe iṣẹ́ tí a ń sanwó fún", "Kò sí", "Ìjọba ló ń sanwó fún un"], answer: 1, why: "Àwọn obìnrin ló ń ṣe èyí tó pọ̀ jù nínú iṣẹ́ ìtọ́jú tí a kì í sanwó fún, èyí sì ń dín àkókò wọn fún òwò kù." },
      { objective: "O4", q: "Pàṣípààrọ̀ ìtọ́jú ọmọ ni:", options: ["Àwọn ìyá tí ń gba ara wọn lọ́wọ́ láti tọ́jú ọmọ ara wọn", "Títa aṣọ ọmọdé", "Owó ilé-ìwé", "Àkáǹtì báńkì"], answer: 0, why: "Gbígba ara wọn lọ́wọ́ ń fún ìyá kọ̀ọ̀kan ní àkókò fún iṣẹ́ rẹ̀." },
      { objective: "O4", q: "Ètò àkókò rẹ tún gbọ́dọ̀ ní:", options: ["Kò sí ìsinmi rárá", "Iṣẹ́ nìkan", "Ètò àwọn aládùúgbò rẹ", "Ìsinmi àti ìlera"], answer: 3, why: "Ìsinmi ló ń jẹ́ kí ìwọ àti òwò rẹ máa lọ." },
      { objective: "O5", q: "Ẹ̀bùn owó (grant) ni:", options: ["Gbèsè tí owó èlé rẹ̀ ga", "Owó tí a fúnni fún ète kan tí o kò ní san padà", "Owó tí o máa kọ́kọ́ san", "Owó orí"], answer: 1, why: "A kì í san ẹ̀bùn owó padà; a máa ń san gbèsè padà." },
      { objective: "O5", q: "Ẹnì kan béèrè owó kí ó tó fún ọ ní ẹ̀bùn owó fún obìnrin. Èyí ṣeé ṣe jù kí ó jẹ́:", options: ["Ìgbésẹ̀ lásán", "Òfin báńkì", "Jìbìtì owó-ìṣáájú", "Owó orí ìjọba"], answer: 2, why: "Àwọn ètò gidi ń kéde owó wọn lórí ojú-òpó wẹ́ẹ̀bù gidi; àwọn àjèjì tí ń béèrè owó jẹ́ onjìbìtì." },
      { objective: "O5", q: "Ta ni ó yẹ kí ó mọ PIN owó orí fóònù rẹ?", options: ["Ìwọ nìkan", "Alábàáṣègbéyàwó rẹ", "Ẹni tí ó pè ọ́ láti ilé-iṣẹ́ náà", "Àkọ́bí rẹ"], answer: 0, why: "PIN rẹ ń dáàbò bo owó rẹ; fi í pamọ́ fún gbogbo ènìyàn." },
      { objective: "O5", q: "AFAWA, láti African Development Bank, ní pàtàkì:", options: ["Ń yá obìnrin kọ̀ọ̀kan lówó lórí WhatsApp", "Ń gba owó lọ́wọ́ obìnrin lórí fóònù", "Ń rọ́pò gbogbo ẹgbẹ́ àjọ", "Ń bá àwọn báńkì àti ayánilówó ṣiṣẹ́ kí wọ́n lè yá àwọn obìnrin lówó sí i"], answer: 3, why: "AFAWA ń ṣiṣẹ́ nípasẹ̀ àwọn ilé-iṣẹ́ owó láti mú kí yíyá àwọn obìnrin lówó pọ̀ sí i." },
      { objective: "O6", q: "Olùtọ́sọ́nà (mentor) ni:", options: ["Oníbàárà tí ó jẹ ọ́ lówó", "Ẹni tí ó ní ìrírí tí ó ń fúnni ní ìmọ̀ràn", "Òṣìṣẹ́ owó orí", "Gbèsè"], answer: 1, why: "Olùtọ́sọ́nà ń pín ìrírí rẹ̀ láti ràn ọ́ lọ́wọ́ láti dàgbà." },
      { objective: "O6", q: "Àfojúsùn wo ló ní nọ́mbà àti ọjọ́?", options: ["\"Dàgbà sí i\"", "\"Di ẹni tó dára jù\"", "\"Fi NGN 50,000 pamọ́ fún fíríìsà kí oṣù July tó dé\"", "\"Gbìyànjú sí i\""], answer: 2, why: "Nọ́mbà àti ọjọ́ ló ń jẹ́ kí àfojúsùn ṣeé díwọ̀n." },
      { objective: "O6", q: "Dídarapọ̀ mọ́ ẹgbẹ́ obìnrin tàbí ẹgbẹ́ oníṣẹ́ lè ràn ọ́ lọ́wọ́ láti:", options: ["Rí oníbàárà, olùpèsè, ìmọ̀ràn àti ìrànlọ́wọ́", "Yẹra fún gbogbo oníbàárà", "Fi àkọsílẹ̀ rẹ sílẹ̀", "Má nílò ètò láéláé"], answer: 0, why: "Àwọn ẹgbẹ́ ń pín àwọn alájọṣe, ìmọ̀ àti ìwúrí." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 6, 7, 10, 14, 15, 18] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Èrò tí a yàn", objective: "O1", notYet: "Èrò kan láìsí máàkì, tàbí máàkì láìsí ìdí.", meets: "Èrò méjì tàbí mẹ́ta tí a fún ní máàkì lórí ọgbọ́n, àkókò, owó àti ìbéèrè ọjà, pẹ̀lú ìdí tí èyí tó borí fi bá a mu.", exceeds: "Ó tún kọ bí èrò náà ṣe lè dàgbà lọ́jọ́ iwájú." },
      { name: "Èrò tí a dán wò", objective: "O2", notYet: "Kò sí ìdánwò, tàbí ẹbí nìkan ni a béèrè lọ́wọ́ wọn.", meets: "Ọjà díẹ̀ tí a fi lọ̀ ó kéré tán oníbàárà gidi mẹ́wàá, pẹ̀lú títà, iye owó àti ìyípadà kan tí a kọ sílẹ̀.", exceeds: "A ṣe ìyípadà náà, a sì tún un dán wò lẹ́ẹ̀kejì." },
      { name: "Iye owó, èrè àti owó tí a ń san fún ara ẹni", objective: "O3", notYet: "Àwọn ìnáwó kan kò sí, ìṣírò kò tọ́, tàbí kò sí iye tí a máa san fún ara ẹni.", meets: "Gbogbo ìnáwó wà níbẹ̀, ìnáwó ọjà kọ̀ọ̀kan tọ̀nà, iye owó títà ní èrè, iye owó kan pàtó sì wà lọ́sẹ̀ọ̀sẹ̀ fún ara ẹni.", exceeds: "A fi iye owó wé ti àwọn olùtajà irú rẹ̀, pẹ̀lú ètò tí ìnáwó bá gbé sókè." },
      { name: "Ètò àkókò àti ìrànlọ́wọ́", objective: "O4", notYet: "Kò sí ètò àkókò, tàbí kò sí ẹni tí a dárúkọ pé ó máa ràn wá lọ́wọ́.", meets: "Ètò ọ̀sẹ̀ pẹ̀lú wákàtí òwò, iṣẹ́ ìtọ́jú ẹbí àti àwọn tí ó ń ṣèrànwọ́, tí ó kéré tán ẹnì kan ti gbà sí.", exceeds: "Ó ní ìsinmi àti olùrànlọ́wọ́ àfidípò." },
      { name: "Owó ìṣòwò àti ìrànlọ́wọ́ tí a ṣàyẹ̀wò láìléwu", objective: "O5", notYet: "Ọ̀nà kan láti inú ọ̀rọ̀ tí wọ́n dárí síni tàbí láti ọ̀dọ̀ àjèjì, tàbí a fi PIN han ẹnì kan.", meets: "Ọ̀nà kan tí a ṣàyẹ̀wò lórí ojú-òpó wẹ́ẹ̀bù gidi rẹ̀, pẹ̀lú àwọn tí ó lè forúkọ sílẹ̀ àti ọjọ́ tí a ṣàyẹ̀wò rẹ̀; owó wà ní orúkọ ara ẹni.", exceeds: "Ó tún kọ àpapọ̀ iye tí a máa san padà, ìgbà wo, àti òfin ìpẹ́ fún gbèsè èyíkéyìí." },
      { name: "Àfojúsùn àti àwọn alájọṣe", objective: "O6", notYet: "Àfojúsùn tí kò ṣe kedere, tàbí kò sí olùtọ́sọ́nà tàbí ẹgbẹ́ tí a dárúkọ.", meets: "Àfojúsùn mẹ́ta pẹ̀lú nọ́mbà àti ọjọ́, àti olùtọ́sọ́nà tàbí ẹgbẹ́ kan tí a máa kàn sí.", exceeds: "A ti kàn sí ẹni náà, a sì ti ṣètò àyẹ̀wò oṣooṣù àkọ́kọ́." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ òwò tàbí dán òwò wò, tàbí tí wọ́n fi ọjà kan kún un, láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn ń san iye owó kan pàtó fún ara wọn, tí wọ́n sì ń kọ àkọsílẹ̀ lẹ́yìn oṣù mẹ́ta",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n dé ó kéré tán ọ̀kan nínú àfojúsùn oṣù mẹ́fà wọn, tí wọn kò sì sọ pé àwọn pàdánù owó sí jìbìtì ẹ̀bùn owó tàbí gbèsè"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Ìwé, gègé àti ẹ̀rọ ìṣirò (ẹ̀rọ ìṣirò orí fóònù dára)",
      "Fóònù láti ṣàyẹ̀wò ojú-òpó wẹ́ẹ̀bù gidi àwọn ètò",
      "Ohun èlò fún ọjà ìdánwò díẹ̀ (èyí tí akẹ́kọ̀ọ́ fúnra rẹ̀ yàn)",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú, pẹ̀lú ọ̀sẹ̀ kan tàbí méjì láti ṣe ìdánwò"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ẹ̀kọ́ náà pẹ̀lú ẹgbẹ́ obìnrin, ẹgbẹ́ àjọ tàbí ẹgbẹ́ alájọṣe; ẹ pàdé ní àkókò tí ó bá àwọn ìyá mu, kí ẹ sì gba àwọn ọmọ ọwọ́ láàyè nínú yàrá.",
      "Kí ẹ̀kọ́ tó bẹ̀rẹ̀, ṣàyẹ̀wò àwọn ètò fún obìnrin àti òwò kékeré tí ó ṣí sílẹ̀ ní orílẹ̀-èdè rẹ lórí ojú-òpó wẹ́ẹ̀bù gidi wọn, kí o sì mú àwọn àdírẹ́sì náà wá.",
      "Má ṣe ní kí àwọn akẹ́kọ̀ọ́ fi PIN, iye owó inú àkáǹtì tàbí ìsọfúnni àkáǹtì hàn láéláé. Ẹ fi àwọn ọ̀rọ̀ àròsọ kọ́ bí a ṣe ń dá jìbìtì ẹ̀bùn owó àti gbèsè mọ̀.",
      "Àwọn akẹ́kọ̀ọ́ kan lè máa dojú kọ ìfúnpá tàbí ìdarí lórí owó wọn nílé; ẹ sọ̀rọ̀ nípa rẹ̀ pẹ̀lú ìṣọ́ra, ní ìkọ̀kọ̀, kí ẹ sì mọ àwọn iṣẹ́ ìrànlọ́wọ́ obìnrin àdúgbò tí ẹ lè tọ́ wọn lọ.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};

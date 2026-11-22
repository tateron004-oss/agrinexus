"use strict";

// Koach Learn course (Yoruba translation of shared/ai-customer-experience.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-customer-experience-yo",
  lang: "yo",
  translationOf: "ai-customer-experience",
  category: "Small Business",
  name: "AI fún Ìrírí Oníbàárà",
  skills: "Yíya àwòrán ìrìn-àjò oníbàárà, Kíkọ àpẹẹrẹ ìdáhùn pẹ̀lú AI, Dídáhùn reviews àti ẹ̀dùn ọkàn oníbàárà, Ṣíṣàyẹ̀wò èsì oníbàárà pẹ̀lú AI, Ṣíṣe iṣẹ́ fún ẹnì kọ̀ọ̀kan láìba ìpamọ́ jẹ́, Ṣíṣe ètò ìtẹ̀síwájú",
  outcome: "ya àwòrán bí àwọn oníbàárà tàbí àwọn tí o ń sìn ṣe ń rí àjọ rẹ, lo AI láti kọ ìdáhùn kíákíá tó ní ìfẹ́ sí ìbéèrè, reviews àti ẹ̀dùn ọkàn, pín èsì oníbàárà sí àwọn ìṣòro tó ga jù, kí o sì sọ wọ́n di ètò ìtẹ̀síwájú ọjọ́ 30.",
  about: [
    "Ìrírí oníbàárà ni bí ènìyàn ṣe ń nímọ̀lára ní gbogbo ìgbà tí wọ́n bá ń bá ọ ṣe nǹkan: wíwá ọ rí, bíbéèrè ìbéèrè, rírà tàbí gbígba ìrànlọ́wọ́, àti ohun tó ṣẹlẹ̀ lẹ́yìn náà. Oníbàárà tó láyọ̀ máa ń padà wá, wọ́n sì ń sọ fún ọ̀rẹ́; àwọn tí inú wọn kò dùn máa ń lọ ní ìdákẹ́jẹ́ tàbí kọ review búburú.",
    "Ẹ̀kọ́ yìí wà fún àwọn tó ni iṣẹ́ òwò kékeré àti òṣìṣẹ́ wọn, àti fún àwọn àjọ aláìlérè (nonprofit) tí \"oníbàárà\" wọn jẹ́ àwọn tí wọ́n ń sìn, ẹbí, olùfúnni àti olùyọ̀ǹda ara ẹni. Àpẹẹrẹ ni ṣọ́ọ̀bù onígbàjámọ̀, ilé-iṣẹ́ àtúnṣe ilé, tábìlì ìgbàlejò ilé-ìwòsàn àti ibi ìpínfúnni oúnjẹ (food bank).",
    "O máa lo àwọn olùrànlọ́wọ́ AI ọ̀fẹ́ bí ChatGPT, Microsoft Copilot tàbí Google Gemini láti kọ ìdáhùn àti láti ṣàyẹ̀wò èsì oníbàárà, nígbà tí ènìyàn ṣì ń darí. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\", ìdánwò ìmọ̀ lẹ́yìn orí kọ̀ọ̀kan àti ìdánwò ìbéèrè 20 ní ìparí."
  ],
  finalTask: "Fún àjọ gidi tàbí ti àṣeṣe, ṣe àpò irinṣẹ́ ìrírí oníbàárà: àwòrán ìrìn-àjò oníbàárà tí o ti sàmì sí ibi mẹ́ta tó lágbára kéré jù, àpẹẹrẹ ìdáhùn márùn-ún (ìbéèrè tó wọ́pọ̀, review rere, review búburú, ẹ̀dùn ọkàn, àtẹ̀lé), àkópọ̀ èsì oníbàárà láti inú ọ̀rọ̀ gidi tàbí àpẹẹrẹ tó kéré tán 15 tí a pín sí àwọn ìṣòro tó ga jù, àti ètò ìtẹ̀síwájú ọjọ́ 30 tí ìgbésẹ̀ kọ̀ọ̀kan ní ẹni tó ń bójú tó ọ̀kan àti òṣùwọ̀n kan.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn tó ni iṣẹ́ òwò kékeré àti òṣìṣẹ́ tó ń bá oníbàárà sọ̀rọ̀ tààrà, àti àwọn tó ń sìn àwọn ènìyàn, ẹbí, olùfúnni tàbí olùyọ̀ǹda ara ẹni ní àwọn àjọ aláìlérè àti àjọ àdúgbò.",
    startingPoint: "Wọ́n ń bá oníbàárà sọ̀rọ̀ lójoojúmọ́ lórí fóònù, text, email, social media tàbí lójú ara wọn, wọ́n sì lè máa ka reviews lórí ayélujára. Díẹ̀ lára wọn ló ti ya àwòrán ìrìn-àjò oníbàárà, lo àpẹẹrẹ ìdáhùn, pín èsì sí kókó ọ̀rọ̀ tàbí tọpa ìtẹ̀síwájú.",
    gap: "Ìdáhùn tó lọ́ra, tí kò ní ìfẹ́ tàbí tí kò tọ́, àti ẹ̀dùn ọkàn tí a kò dá lóhùn, ń mú kí oníbàárà lọ, wọ́n sì ń ba reviews jẹ́. Àwọn akẹ́kọ̀ọ́ nílò láti lo AI láti dáhùn kíákíá pẹ̀lú ìfẹ́, kẹ́kọ̀ọ́ láti inú èsì oníbàárà, kí wọ́n sì ṣe àtúnṣe kan tí a lè wọ̀n lẹ́ẹ̀kan, nígbà tí wọ́n ń dáàbò bo ìpamọ́ oníbàárà tí wọ́n sì ń sọ òtítọ́.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà; kọ̀mpútà rọrùn jù fún ìwé àti fún pínpín èsì oníbàárà",
      "Ìpamọ́: kò sí orúkọ, nọ́mbà fóònù, ìsọfúnni ìlera tàbí àkọsílẹ̀ oníbàárà tí a ó fi sínú àwọn irinṣẹ́ AI gbogbogbò",
      "Òtítọ́: kò sí review èké, a sì ń sọ fún oníbàárà nígbà tí wọ́n bá ń bá AI sọ̀rọ̀",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 5, nǹkan bí ìṣẹ́jú 60 lápapọ̀ pẹ̀lú àkókò láti ṣe àpò irinṣẹ́ náà"
    ],
    prerequisites: "Kò sí. Àwọn tí kò tíì lo olùrànlọ́wọ́ AI rí lè kọ́kọ́ ṣe ẹ̀kọ́ ìfihàn sí AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Fún àjọ gidi tàbí ti àṣeṣe", action: "ya àwòrán ìrìn-àjò oníbàárà láti ìgbà tí wọ́n rí ọ títí dé lẹ́yìn náà, kí o sì sàmì sí ibi mẹ́ta tó lágbára kéré jù", standard: "pẹ̀lú ohun tí oníbàárà ń ṣe àti bí ó ṣe ń nímọ̀lára ní ìgbésẹ̀ kọ̀ọ̀kan" },
    { id: "O2", condition: "Tí o bá ní ìbéèrè márùn-ún tó wọ́pọ̀ jù àti àwọn òtítọ́ gidi", action: "kọ àpẹẹrẹ ìdáhùn tí AI kọ́kọ́ kọ, ní ọ̀nà ìsọ̀rọ̀ tìrẹ", standard: "tí o ṣe fún ẹnì kọ̀ọ̀kan tí o sì ṣàyẹ̀wò òtítọ́ rẹ̀ kí o tó lò ó nígbàkúùgbà" },
    { id: "O3", condition: "Tí o bá ní review rere kan, review búburú kan àti ẹ̀dùn ọkàn kan", action: "kọ ìdáhùn tó farabalẹ̀ tó sì wúlò, pẹ̀lú gbọ́, tọrọ àforíjì, yanjú, tẹ̀lé e", standard: "láìsí ìsọfúnni àdáni kankan nínú ìdáhùn gbangba" },
    { id: "O4", condition: "Tí o bá ní ọ̀rọ̀ oníbàárà tó kéré tán 15 tí a ti yọ ìsọfúnni àdáni kúrò", action: "pín àwọn ọ̀rọ̀ náà sí kókó ọ̀rọ̀ pẹ̀lú AI, kí o sì to ìṣòro mẹ́ta tó ga jù", standard: "lẹ́yìn tí o ti ṣàyẹ̀wò ọ̀rọ̀ díẹ̀ nínú kókó kọ̀ọ̀kan" },
    { id: "O5", condition: "Fún ọ̀rọ̀ ìdúpẹ́, ìránnilétí tàbí àtẹ̀lé", action: "kọ àpẹẹrẹ ọ̀rọ̀ tí a ṣe fún ẹnì kọ̀ọ̀kan pẹ̀lú àmì ìdúrópò, tó ń dáàbò bo ìpamọ́ tó sì jẹ́ òtítọ́", standard: "sí àwọn tí wọ́n gbà láti gbọ́ láti ọ̀dọ̀ rẹ nìkan, pẹ̀lú ọ̀nà láti bá ènìyàn sọ̀rọ̀" },
    { id: "O6", condition: "Tí o bá ní ìṣòro mẹ́ta tó ga jù", action: "ṣe ètò ìtẹ̀síwájú ọjọ́ 30", standard: "pẹ̀lú ìgbésẹ̀ kan, ẹni tó ń bójú tó ọ̀kan àti òṣùwọ̀n kan fún ìṣòro kọ̀ọ̀kan" }
  ],
  chapters: [
    {
      name: "Orí 1: Rírí àwọn oníbàárà rẹ àti dídá wọn lóhùn",
      lessons: [
        {
          objectives: ["O1"],
          title: "Yíya àwòrán ìrìn-àjò oníbàárà",
          minutes: 5,
          goal: "Ya àwòrán ìrìn-àjò oníbàárà kí o sì sàmì sí àwọn ibi tó lágbára kéré jù.",
          text: [
            "Àwòrán ìrìn-àjò oníbàárà ń to gbogbo ìgbésẹ̀ tí ènìyàn ń gbà pẹ̀lú rẹ lẹ́sẹẹsẹ: rírí ọ (bí wọ́n ṣe rí ọ), bíbéèrè (ìkànsí àkọ́kọ́), ìpinnu, rírà tàbí gbígba iṣẹ́, àti lẹ́yìn náà (àtẹ̀lé, review, pípadà wá).",
            "Ní ìgbésẹ̀ kọ̀ọ̀kan, kọ ohun tí oníbàárà ń ṣe, bí ó ṣe ń nímọ̀lára, àti ohun tó lè lọ ní àìtọ́. Fún ibi ìpínfúnni oúnjẹ: ẹbí kan rí àkókò ìṣísílẹ̀ lórí ayélujára, wọ́n pè láti béèrè ìbéèrè, wọ́n dúró ní ìlà, wọ́n gba oúnjẹ, wọ́n sì ń ronú ìgbà tí wọn yóò padà wá.",
            "AI lè ràn ọ́ lọ́wọ́ láti rí àwọn ìgbésẹ̀ tí o gbàgbé. Béèrè pé: \"Mo ní iṣẹ́ àtúnṣe ilé. To gbogbo ìgbésẹ̀ tí oníbàárà ń gbà láti ìgbà tó kọ́kọ́ wá wa títí dé lẹ́yìn iṣẹ́ náà, àti ohun tó lè bí i nínú ní ìgbésẹ̀ kọ̀ọ̀kan.\" Lẹ́yìn náà, fi wé ohun tí o ń rí lójoojúmọ́."
          ],
          steps: ["To àwọn ìgbésẹ̀: rírí ọ, bíbéèrè, ìpinnu, rírà tàbí gbígba, lẹ́yìn náà.", "Ní ìgbésẹ̀ kọ̀ọ̀kan, kọ ohun tí oníbàárà ń ṣe àti bí ó ṣe ń nímọ̀lára.", "Béèrè lọ́wọ́ AI ohun tó lè bí wọn nínú ní ìgbésẹ̀ kọ̀ọ̀kan.", "Sàmì sí ibi mẹ́ta tó lágbára kéré jù."],
          words: [["Ìrírí oníbàárà", "bí ènìyàn ṣe ń nímọ̀lára ní gbogbo ìgbà tí wọ́n bá ń bá àjọ kan ṣe nǹkan."], ["Àwòrán ìrìn-àjò", "àwòrán ìrírí oníbàárà ní ìgbésẹ̀ kọ̀ọ̀kan."], ["Ibi ìpàdé (touchpoint)", "ìgbàkígbà tí oníbàárà bá bá ọ ṣe nǹkan: ìpè, ìfiránṣẹ́ lórí ayélujára, ìbẹ̀wò, email."]],
          slides: [
            { title: "Ìrìn-àjò náà", bullets: ["Rírí ọ, bíbéèrè, ìpinnu", "Rírà tàbí gbígba iṣẹ́", "Lẹ́yìn náà: àtẹ̀lé àti pípadà wá"] },
            { title: "Ní ìgbésẹ̀ kọ̀ọ̀kan", bullets: ["Ohun tí wọ́n ń ṣe", "Bí wọ́n ṣe ń nímọ̀lára", "Ohun tó lè lọ ní àìtọ́"] },
            { title: "Lo AI láti rí àlàfo", bullets: ["Béèrè ohun tó lè bí oníbàárà nínú", "Fi wé ohun tí o ń rí", "Sàmì sí ibi mẹ́ta tó lágbára kéré jù"] }
          ],
          tryIt: "Ya àwòrán ìrìn-àjò fún àjọ gidi tàbí ti àṣeṣe pẹ̀lú ìgbésẹ̀ tó kéré tán márùn-ún. Lo AI láti rí ohun tó ń bí oníbàárà nínú tí o gbàgbé, kí o sì sàmì sí ibi mẹ́ta tó lágbára kéré jù.",
          youCanNow: "ya àwòrán ìrìn-àjò oníbàárà kí o sì rí ibi tí ìrírí náà ti ń bàjẹ́.",
          quickCheck: [
            { objective: "O1", q: "Ìgbésẹ̀ wo nínú ìrìn-àjò oníbàárà ló jẹ mọ́ àtẹ̀lé, reviews àti pípadà wá?", options: ["Lẹ́yìn náà", "Rírí ọ", "Bíbéèrè", "Ìpinnu"], answer: 0, why: "Ìgbésẹ̀ \"lẹ́yìn náà\" ní àtẹ̀lé, reviews àti ìbẹ̀wò padà nínú." },
            { objective: "O1", q: "AI to ohun tó ń bí oníbàárà nínú fún àwòrán ìrìn-àjò iṣẹ́ ìmọ́tótó rẹ. Kí ni o máa fi àkọsílẹ̀ náà ṣe?", options: ["Dà á kọ gẹ́gẹ́ bí àwòrán ìkẹyìn rẹ", "Pa á rẹ́; AI kò lè ṣe ìrànlọ́wọ́", "Fi wé ohun tí o ń rí lójoojúmọ́ kí o sì pa èyí tó jẹ́ òtítọ́ mọ́", "Fi ránṣẹ́ sí àwọn oníbàárà"], answer: 2, why: "AI lè tọ́ka sí àwọn ìgbésẹ̀ tí o gbàgbé, ṣùgbọ́n ìrírí ojoojúmọ́ rẹ ló ń fìdí wọn múlẹ̀." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kíkọ ìdáhùn kíákíá tó ní ìfẹ́ pẹ̀lú AI",
          minutes: 5,
          goal: "Ṣe àpẹẹrẹ ìdáhùn pẹ̀lú AI fún àwọn ìbéèrè tí o ń gbà jù.",
          text: [
            "Ìdáhùn kíákíá ṣe pàtàkì. Àpẹẹrẹ ìdáhùn (template) jẹ́ ìdáhùn tí a ti múra sílẹ̀ tí o ń tún ṣe fún ẹnì kọ̀ọ̀kan. AI lè kọ àpẹẹrẹ ìdáhùn ní ọ̀nà ìsọ̀rọ̀ rẹ láàárín ìṣẹ́jú-àáyá díẹ̀.",
            "Fún AI ní àlàyé tó péye: àjọ rẹ, ọ̀nà ìsọ̀rọ̀ rẹ àti àwọn òtítọ́. \"Kọ ìdáhùn onínúure fún ṣọ́ọ̀bù onígbàjámọ̀ sí ìbéèrè 'Ṣé ẹ ń gba àwọn tó wá láìṣe àdéhùn?' Òtítọ́: a ń gba àwọn tó wá láìṣe àdéhùn láti Tuesday sí Thursday, a nílò àdéhùn ní Friday àti Saturday, ẹ ṣe àdéhùn lórí ojú-òpó wẹ́ẹ̀bù wa. Kí ó má ju ọ̀rọ̀ 50 lọ.\"",
            "Máa ṣe é fún ẹni náà nígbà gbogbo kí o tó fi ránṣẹ́: lo orúkọ ẹni náà, dáhùn gẹ́lẹ́ ohun tí wọ́n béèrè, kí o sì ṣàyẹ̀wò àwọn òtítọ́. Ìdáhùn tó dún bí ẹ̀rọ tàbí tí ó sọ àkókò tí kò tọ́ máa ń ṣe ìpalára ju ìrànlọ́wọ́ lọ."
          ],
          steps: ["To ìbéèrè márùn-ún tó wọ́pọ̀ jù.", "Fún AI ní ọ̀nà ìsọ̀rọ̀ rẹ àti òtítọ́ gidi fún ọ̀kọ̀ọ̀kan.", "Béèrè àpẹẹrẹ ìdáhùn kúkúrú tó ní ìfẹ́.", "Fi àwọn àpẹẹrẹ ìdáhùn pamọ́ sínú ìwé kan.", "Ṣe é fún ẹni náà kí o sì ṣàyẹ̀wò òtítọ́ nígbàkúùgbà tí o bá lo ọ̀kan."],
          words: [["Àpẹẹrẹ ìdáhùn (template)", "ìdáhùn tí a ti múra sílẹ̀ tí o ń tún ṣe fún ẹnì kọ̀ọ̀kan."], ["Ṣíṣe é fún ẹni náà (personalize)", "yíyí ọ̀rọ̀ padà kí ó bá ẹni pàtó náà mu."]],
          slides: [
            { title: "Ìyára ṣe pàtàkì", bullets: ["Àpẹẹrẹ ìdáhùn ń jẹ́ kí o dáhùn kíákíá", "AI ń kọ wọ́n láàárín ìṣẹ́jú-àáyá díẹ̀"] },
            { title: "Fún AI ní òtítọ́", bullets: ["Ọ̀nà ìsọ̀rọ̀ rẹ", "Àwọn òtítọ́ gidi", "Iye ọ̀rọ̀ tí kò gbọdọ̀ kọjá"] },
            { title: "Ṣe é fún ẹni náà nígbà gbogbo", bullets: ["Lo orúkọ wọn", "Dáhùn gẹ́lẹ́ ohun tí wọ́n béèrè", "Ṣàyẹ̀wò àwọn òtítọ́"] }
          ],
          tryIt: "Lo AI láti kọ àpẹẹrẹ ìdáhùn fún ìbéèrè mẹ́ta tí oníbàárà ń béèrè jù. Fi wọ́n pamọ́, lẹ́yìn náà ṣe ọ̀kan fún oníbàárà àròsọ kan.",
          youCanNow: "ṣe àpẹẹrẹ ìdáhùn pẹ̀lú AI kí o sì ṣe é fún ẹnì kọ̀ọ̀kan.",
          quickCheck: [
            { objective: "O2", q: "Kí ni o yẹ kí o fún AI kí àpẹẹrẹ ìdáhùn lè péye?", options: ["Nọ́mbà fóònù àwọn oníbàárà", "Ọ̀nà ìsọ̀rọ̀ rẹ àti àwọn òtítọ́ gidi", "Ọ̀rọ̀ \"ìdáhùn\" nìkan", "Ojú-òpó wẹ́ẹ̀bù olùdíje rẹ"], answer: 1, why: "Ọ̀nà ìsọ̀rọ̀ rẹ àti òtítọ́ gidi ń jẹ́ kí AI kọ ìdáhùn tó tọ́ tó sì dún bí ìwọ." },
            { objective: "O2", q: "Oníbàárà kan tí orúkọ rẹ̀ ń jẹ́ Ana béèrè nípa ibi ìgbọ́kọ̀sí. O ní àpẹẹrẹ ìdáhùn. Kí ni o máa ṣe?", options: ["Fi àpẹẹrẹ ìdáhùn náà ránṣẹ́ bí ó ti rí gẹ́lẹ́", "Fojú fo ìbéèrè náà", "Fi gbogbo àpẹẹrẹ ìdáhùn rẹ ránṣẹ́ sí i", "Fi orúkọ rẹ̀ kún un, dáhùn gẹ́lẹ́ ohun tí ó béèrè kí o sì ṣàyẹ̀wò òtítọ́"], answer: 3, why: "Ṣe é fún ẹni náà kí o sì ṣàyẹ̀wò òtítọ́ nígbàkúùgbà tí o bá lo àpẹẹrẹ ìdáhùn." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Dídáhùn reviews àti ẹ̀dùn ọkàn oníbàárà",
          minutes: 6,
          goal: "Dáhùn review rere, review búburú àti ẹ̀dùn ọkàn pẹ̀lú ìfarabalẹ̀ àti ìrànlọ́wọ́.",
          text: [
            "Reviews wà ní gbangba, nítorí náà ìdáhùn rẹ wà fún gbogbo ẹni tó ń kà á, kì í ṣe fún ẹni tó kọ ọ́ nìkan. Dúpẹ́ lọ́wọ́ àwọn tó kọ review rere kí o sì mẹ́nu ba nǹkan pàtó kan. Fún review búburú, farabalẹ̀, tọrọ àforíjì fún ìrírí wọn, má ṣe jiyàn, kí o sì ní kí ẹ yanjú rẹ̀ ní ìkọ̀kọ̀ pẹ̀lú nọ́mbà fóònù tàbí email.",
            "Fún ẹ̀dùn ọkàn, lo ọ̀nà tó rọrùn yìí: gbọ́, tọrọ àforíjì, yanjú, tẹ̀lé e. Béèrè lọ́wọ́ AI pé: \"Ràn mí lọ́wọ́ láti dáhùn ẹ̀dùn ọkàn yìí. Ọ̀nà: gbà á, tọrọ àforíjì, fún wọn ní àtúnṣe yìí: [àtúnṣe rẹ], pè wọ́n láti kàn sí [email].\"",
            "Má ṣe pín ìsọfúnni àdáni nínú ìdáhùn gbangba láéláé, bí ọjọ́ àdéhùn, ìsọfúnni ìlera tàbí ohun tí ẹnìkan rà. Má ṣe fi review èké sí orí ayélujára tàbí sanwó fún un láéláé. Tí review kan bá ní ìhalẹ̀ tàbí ẹ̀sùn èké, tẹ̀lé ọ̀nà ìròyìn ti ojú-òpó náà."
          ],
          steps: ["Ka review náà lẹ́ẹ̀mejì kí o sì dúró díẹ̀ tí inú bá ń bí ọ.", "Dúpẹ́ lọ́wọ́ wọn (rere) tàbí gbà á kí o sì tọrọ àforíjì (búburú).", "Fún wọn ní àtúnṣe pàtó tàbí ọ̀nà láti sọ̀rọ̀ ní ìkọ̀kọ̀.", "Pa ìsọfúnni àdáni mọ́ kúrò nínú ìdáhùn gbangba.", "Tẹ̀lé e láti rí i dájú pé a ti yanjú rẹ̀."],
          words: [["Review", "ọ̀rọ̀ àti ìdíyelé tí ẹnìkan kọ ní gbangba nípa iṣẹ́ òwò kan."], ["Ní ìkọ̀kọ̀ (offline)", "kúrò ní ojú-òpó gbangba, bí lórí fóònù tàbí email àdáni."]],
          slides: [
            { title: "Ìdáhùn wà ní gbangba", bullets: ["Gbogbo ènìyàn ló ń kà wọ́n", "Dúpẹ́ lọ́wọ́ àwọn tó kọ review rere ní pàtó"] },
            { title: "Review búburú", bullets: ["Farabalẹ̀, má ṣe jiyàn", "Tọrọ àforíjì fún ìrírí wọn", "Ní kí ẹ yanjú rẹ̀ ní ìkọ̀kọ̀"] },
            { title: "Ọ̀nà fún ẹ̀dùn ọkàn", bullets: ["Gbọ́, tọrọ àforíjì, yanjú, tẹ̀lé e", "Kò sí ìsọfúnni àdáni ní gbangba", "Kò sí review èké, láéláé"] }
          ],
          tryIt: "Kọ ìdáhùn pẹ̀lú ìrànlọ́wọ́ AI sí review rere kan, review búburú kan àti ẹ̀dùn ọkàn kan (gidi tàbí àròsọ). Ṣàyẹ̀wò ọ̀kọ̀ọ̀kan pé ó farabalẹ̀ àti pé kò sí ìsọfúnni àdáni nínú rẹ̀.",
          youCanNow: "dáhùn reviews àti ẹ̀dùn ọkàn pẹ̀lú ìfarabalẹ̀ àti ìrànlọ́wọ́, láìpín ìsọfúnni àdáni.",
          quickCheck: [
            { objective: "O3", q: "Kí ló yẹ kí ìdáhùn sí review rere ní?", options: ["Kóòdù ẹ̀dínwó fún gbogbo ènìyàn", "Àríyànjiyàn nípa iye ìràwọ̀", "Ọpẹ́ àti nǹkan pàtó kan láti inú review wọn", "Ọjọ́ àdéhùn oníbàárà náà"], answer: 2, why: "Dúpẹ́ lọ́wọ́ wọn kí o sì mẹ́nu ba nǹkan pàtó kí ìdáhùn náà lè dà bí ti gidi." },
            { objective: "O3", q: "Ẹnìkan kọ sí orí ayélujára pé ilé-ìwòsàn rẹ mú òun dúró fún wákàtí kan. Báwo ni o ṣe máa dáhùn ní gbangba?", options: ["Gbà á, tọrọ àforíjì kí o sì ní kí ẹ sọ̀rọ̀ ní ìkọ̀kọ̀ lórí fóònù tàbí email", "Ṣàlàyé àdéhùn wọn àti ìdí ìṣègùn tí wọ́n fi dúró", "Sọ pé wọ́n ṣàṣìṣe", "Pa ojú-òpó iṣẹ́ òwò rẹ rẹ́"], answer: 0, why: "Farabalẹ̀, tọrọ àforíjì, ní kí ẹ yanjú rẹ̀ ní ìkọ̀kọ̀ kí o sì pa ìsọfúnni àdáni mọ́." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Rírí àwọn oníbàárà rẹ àti dídá wọn lóhùn",
        questions: [
          { objective: "O1", q: "Kí ni àwòrán ìrìn-àjò oníbàárà ń fihàn?", options: ["Ọ̀nà ọkọ̀ akẹ́rù ìfijíṣẹ́ rẹ nìkan", "Owó tó wà nínú àkáǹtì báńkì rẹ", "Gbogbo ìgbésẹ̀ tí oníbàárà ń gbà pẹ̀lú rẹ", "Àkókò iṣẹ́ àwọn òṣìṣẹ́"], answer: 2, why: "Ó ń to ìgbésẹ̀ kọ̀ọ̀kan àti bí oníbàárà ṣe ń nímọ̀lára." },
          { objective: "O1", q: "Èwo ni ibi ìpàdé (touchpoint)?", options: ["Ìpè fóònù pẹ̀lú oníbàárà", "Àwọ̀ ògiri ọ́fíìsì rẹ nìkan", "Ìwé owó-orí rẹ", "Ìwé owó olùpèsè ọjà"], answer: 0, why: "Ibi ìpàdé ni ìgbàkígbà tí oníbàárà bá bá ọ ṣe nǹkan." },
          { objective: "O2", q: "Kí ni o gbọ́dọ̀ ṣe nígbà gbogbo kí o tó fi ìdáhùn tí AI kọ ránṣẹ́?", options: ["Fi ránṣẹ́ láìkà á", "Fi emoji púpọ̀ sí i", "Yọ orúkọ oníbàárà kúrò", "Ṣe é fún ẹni náà kí o sì ṣàyẹ̀wò àwọn òtítọ́"], answer: 3, why: "Ìdáhùn tó jẹ́ ti ẹni náà tó sì péye ń mú ìgbẹ́kẹ̀lé wá." },
          { objective: "O3", q: "Oníbàárà kan kọ review pẹ̀lú ìbínú. Kí ni ìgbésẹ̀ àkọ́kọ́ tó dára jù?", options: ["Jiyàn ní gbangba", "Farabalẹ̀, tọrọ àforíjì fún ìrírí wọn kí o sì ní kí ẹ yanjú rẹ̀ ní ìkọ̀kọ̀", "Fi ìsọfúnni àdéhùn wọn sí orí ayélujára", "Fojú fò ó títí láé"], answer: 1, why: "Ìdáhùn tó farabalẹ̀ tó sì wúlò ń fi han àwọn òǹkàwé pé o bìkítà." },
          { objective: "O3", q: "Èwo ni kò gbọdọ̀ hàn nínú ìdáhùn gbangba sí review láéláé?", options: ["\"Ẹ ṣeun\"", "Ìsọfúnni ìlera oníbàárà náà", "Ìfilọ̀ láti sọ̀rọ̀ lórí fóònù", "Orúkọ iṣẹ́ òwò rẹ"], answer: 1, why: "Ìsọfúnni àdáni kò gbọdọ̀ wà nínú ìdáhùn gbangba." }
        ]
      }
    },
    {
      name: "Orí 2: Kíkẹ́kọ̀ọ́ láti inú èsì oníbàárà àti ṣíṣe àtúnṣe",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ṣíṣàyẹ̀wò èsì oníbàárà pẹ̀lú AI",
          minutes: 6,
          goal: "Lo AI láti pín ọ̀rọ̀ oníbàárà sí kókó ọ̀rọ̀ kí o sì rí àwọn ìṣòro tó ga jù.",
          text: [
            "Èsì oníbàárà (feedback) wà ní ọ̀pọ̀ ibi: reviews, ìwádìí, email, ọ̀rọ̀ lórí social media àti àkọsílẹ̀ láti ọ̀dọ̀ òṣìṣẹ́. Kíka gbogbo rẹ̀ fúnra rẹ máa ń gba ọ̀pọ̀ wákàtí. AI lè pín in láàárín ìṣẹ́jú díẹ̀.",
            "Kó ọ̀rọ̀ tó kéré tán 15 jọ sínú ìwé kan. Yọ orúkọ, nọ́mbà fóònù àti ìsọfúnni àdáni míì kúrò. Lẹ́yìn náà béèrè pé: \"Pín àwọn ọ̀rọ̀ yìí sí kókó ọ̀rọ̀. Fún kókó kọ̀ọ̀kan, ka iye ọ̀rọ̀ tó mẹ́nu bà á, sọ bóyá ó jẹ́ rere tàbí búburú, kí o sì fún mi ní àpẹẹrẹ ọ̀rọ̀ kan.\"",
            "Ṣàyẹ̀wò iṣẹ́ AI: ka ọ̀rọ̀ díẹ̀ nínú kókó kọ̀ọ̀kan láti rí i dájú pé wọ́n wà ní ibi tó tọ́. AI lè ka iye ní àìtọ́ tàbí da ìṣòro tó yàtọ̀ pọ̀. Èsì rẹ̀ ni àkọsílẹ̀ ìṣòro tó ga jù, tí a tò gẹ́gẹ́ bí ìgbà mélòó tí wọ́n ń yọjú àti bí wọ́n ṣe ń ba ìrírí náà jẹ́ tó."
          ],
          steps: ["Kó ọ̀rọ̀ tó kéré tán 15 jọ láti reviews, ìwádìí àti email.", "Yọ orúkọ àti ìsọfúnni àdáni kúrò.", "Ní kí AI pín wọn sí kókó ọ̀rọ̀ pẹ̀lú iye àti àpẹẹrẹ.", "Ṣàyẹ̀wò ọ̀rọ̀ díẹ̀ nínú kókó kọ̀ọ̀kan.", "To ìṣòro mẹ́ta tó ga jù."],
          words: [["Èsì oníbàárà (feedback)", "ohun tí àwọn oníbàárà ń sọ fún ọ nípa ìrírí wọn."], ["Kókó ọ̀rọ̀ (theme)", "ọ̀rọ̀ kan tó ń yọjú léraléra."], ["Ìmọ̀lára ọ̀rọ̀ (sentiment)", "bóyá ọ̀rọ̀ kan jẹ́ rere, búburú tàbí ààrin."]],
          slides: [
            { title: "Èsì oníbàárà wà níbi gbogbo", bullets: ["Reviews, ìwádìí, email", "Ọ̀rọ̀ lórí social media, àkọsílẹ̀ òṣìṣẹ́"] },
            { title: "Jẹ́ kí AI pín in", bullets: ["Kọ́kọ́ yọ ìsọfúnni àdáni kúrò", "Béèrè kókó ọ̀rọ̀, iye, ìmọ̀lára àti àpẹẹrẹ kan"] },
            { title: "Ṣàyẹ̀wò kí o sì tò ó", bullets: ["Ṣàyẹ̀wò kókó kọ̀ọ̀kan díẹ̀", "Tò ó gẹ́gẹ́ bí ìgbà mélòó àti bí ó ṣe ń ṣe ìpalára tó"] }
          ],
          tryIt: "Kó ọ̀rọ̀ gidi tàbí àpẹẹrẹ tó kéré tán 15 jọ, yọ ìsọfúnni àdáni kúrò, kí o sì ní kí AI pín wọn sí kókó ọ̀rọ̀. Ṣàyẹ̀wò èsì náà díẹ̀ kí o sì kọ ìṣòro mẹ́ta tó ga jù sílẹ̀.",
          youCanNow: "sọ òkìtì ọ̀rọ̀ oníbàárà di àkọsílẹ̀ ìṣòro tó ga jù tí a ti tò lẹ́sẹẹsẹ.",
          quickCheck: [
            { objective: "O4", q: "Kí nìdí tí o fi gbọ́dọ̀ ṣàyẹ̀wò díẹ̀ nínú àwọn kókó ọ̀rọ̀ tí AI ṣe?", options: ["AI máa ń tọ̀nà nígbà gbogbo", "Láti mú kí àkọsílẹ̀ náà gùn sí i", "Láti dá orúkọ àwọn oníbàárà padà sí i", "AI lè ka iye ní àìtọ́ tàbí da ìṣòro tó yàtọ̀ pọ̀"], answer: 3, why: "Kíka ọ̀rọ̀ díẹ̀ nínú kókó kọ̀ọ̀kan ń jẹ́ kí o rí àṣìṣe AI nínú kíka iye àti ìṣòro tí ó dà pọ̀." },
            { objective: "O4", q: "Ọ̀rọ̀ mẹ́jọ mẹ́nu ba ìdáhùn tó lọ́ra, méjì sì mẹ́nu ba ibi ìgbọ́kọ̀sí. Èwo ni o máa tò sí òkè?", options: ["Ibi ìgbọ́kọ̀sí, nítorí ó rọrùn jù", "Ìdáhùn tó lọ́ra, nítorí àwọn ènìyàn púpọ̀ ló mẹ́nu bà á", "Kò sí ọ̀kan; fojú fo méjèèjì", "Èyí tí AI bá kọ́kọ́ kọ"], answer: 1, why: "To àwọn ìṣòro gẹ́gẹ́ bí ìgbà mélòó tí wọ́n ń yọjú àti bí wọ́n ṣe ń ṣe ìpalára tó." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ṣíṣe iṣẹ́ fún ẹnì kọ̀ọ̀kan láìpàdánù ìgbẹ́kẹ̀lé",
          minutes: 5,
          goal: "Lo AI láti ṣe ọ̀rọ̀ fún ẹnì kọ̀ọ̀kan nígbà tí o ń dáàbò bo ìpamọ́ oníbàárà tí o sì ń sọ òtítọ́.",
          text: [
            "Ohun kékeré tí a ṣe fún ẹnì kọ̀ọ̀kan ń jẹ́ kí ènìyàn mọ̀ pé a ka wọ́n sí: ẹ̀dínwó ọjọ́ ìbí, ìránnilétí kí àdéhùn tó kàn tó dé, tàbí ìwé ìdúpẹ́ sí olùfúnni tó mẹ́nu ba ètò tí ó ṣètìlẹ́yìn fún.",
            "AI lè ràn ọ́ lọ́wọ́ láti kọ àwọn ọ̀rọ̀ yìí fún ọ̀pọ̀ ènìyàn láti inú àpẹẹrẹ ìdáhùn kan. Fún un ní ìsọfúnni tó nílò nìkan, bí orúkọ àkọ́kọ́ àti irú iṣẹ́, kì í ṣe gbogbo àkọsílẹ̀. Lo ètò oníbàárà tàbí irinṣẹ́ email tìrẹ láti fi orúkọ sínú rẹ̀, dípò kí o fi àkọsílẹ̀ oníbàárà sínú irinṣẹ́ AI gbogbogbò.",
            "Sọ òtítọ́: tí chatbot tàbí AI bá ń dá oníbàárà lóhùn, sọ bẹ́ẹ̀. Jẹ́ kí ó rọrùn láti bá ènìyàn sọ̀rọ̀. Fi ọ̀rọ̀ ránṣẹ́ sí àwọn tí wọ́n gbà láti gbọ́ láti ọ̀dọ̀ rẹ nìkan, kí o sì jẹ́ kí ó rọrùn láti jáde kúrò (opt out)."
          ],
          steps: ["Yan àkókò àdáni kan: ìdúpẹ́, ìránnilétí tàbí àtẹ̀lé.", "Ní kí AI kọ àpẹẹrẹ ìdáhùn pẹ̀lú àmì ìdúrópò bí [Orúkọ àkọ́kọ́].", "Fi orúkọ kún un pẹ̀lú irinṣẹ́ email tàbí ti oníbàárà tìrẹ.", "Sọ kedere nígbà tí oníbàárà bá ń bá AI sọ̀rọ̀.", "Máa fúnni ní ọ̀nà láti bá ènìyàn sọ̀rọ̀ nígbà gbogbo."],
          words: [["Àmì ìdúrópò (placeholder)", "àmì bí [Orúkọ àkọ́kọ́] tí a ó fi ìsọfúnni gidi rọ́pò."], ["Jáde kúrò (opt out)", "yíyàn láti má gba ọ̀rọ̀ mọ́."]],
          slides: [
            { title: "Ohun àdáni kékeré", bullets: ["Ìdúpẹ́ àti ìránnilétí", "Mẹ́nu ba ohun tó ṣe pàtàkì sí wọn"] },
            { title: "Dáàbò bo ìpamọ́", bullets: ["Lo àmì ìdúrópò bí [Orúkọ àkọ́kọ́]", "Fi orúkọ sínú rẹ̀ nínú irinṣẹ́ tìrẹ", "Kò sí àkọsílẹ̀ oníbàárà nínú irinṣẹ́ AI gbogbogbò"] },
            { title: "Sọ òtítọ́", bullets: ["Sọ nígbà tí AI bá ń dáhùn", "Ó rọrùn láti bá ènìyàn sọ̀rọ̀", "Ó rọrùn láti jáde kúrò"] }
          ],
          tryIt: "Kọ àpẹẹrẹ ọ̀rọ̀ ìdúpẹ́ tàbí àtẹ̀lé fún ẹnì kọ̀ọ̀kan pẹ̀lú AI, lílo àmì ìdúrópò. Ṣàyẹ̀wò pé kò béèrè ìsọfúnni àdáni kankan àti pé ó fúnni ní ọ̀nà láti bá ènìyàn sọ̀rọ̀.",
          youCanNow: "ṣe ọ̀rọ̀ oníbàárà fún ẹnì kọ̀ọ̀kan pẹ̀lú AI nígbà tí o ń dáàbò bo ìpamọ́ tí o sì ń sọ òtítọ́.",
          quickCheck: [
            { objective: "O5", q: "Kí ni ọ̀nà tí kò léwu jù láti fi ìwé ìdúpẹ́ ránṣẹ́ sí olùfúnni 200?", options: ["Lo àpẹẹrẹ ìdáhùn pẹ̀lú [Orúkọ àkọ́kọ́] kí o sì fi orúkọ sínú rẹ̀ nínú irinṣẹ́ email tìrẹ", "Fi gbogbo àkọsílẹ̀ olùfúnni sínú irinṣẹ́ AI ọ̀fẹ́", "Fi ọwọ́ kọ ìwé kọ̀ọ̀kan láìṣàyẹ̀wò", "Fi gbogbo orúkọ wọn sí orí social media"], answer: 0, why: "Fi orúkọ sínú rẹ̀ nínú irinṣẹ́ tìrẹ kí àkọsílẹ̀ olùfúnni má baà wọ inú irinṣẹ́ AI gbogbogbò." },
            { objective: "O5", q: "Chatbot lórí ojú-òpó wẹ́ẹ̀bù rẹ ń dáhùn ìbéèrè oníbàárà. Kí ni o gbọ́dọ̀ fi kún un?", options: ["Orúkọ òṣìṣẹ́ èké", "Kò sí nǹkan; oníbàárà kò fẹ́ mọ̀", "Àkíyèsí kedere pé AI ni, àti ọ̀nà láti bá ènìyàn sọ̀rọ̀", "Ìbéèrè fún nọ́mbà káàdì"], answer: 2, why: "Sísọ òtítọ́ pé AI ni àti fífúnni ní ènìyàn láti bá sọ̀rọ̀ ń mú ìgbẹ́kẹ̀lé wá." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Sísọ òye di ètò ìtẹ̀síwájú ọjọ́ 30",
          minutes: 5,
          goal: "Sọ àwọn ìṣòro tó ga jù di ètò ọjọ́ 30 pẹ̀lú ẹni tó ń bójú tó àti òṣùwọ̀n.",
          text: [
            "Òye kò wúlò àyàfi tí nǹkan kan bá yí padà. Fún ìṣòro mẹ́ta tó ga jù kọ̀ọ̀kan, yan ìgbésẹ̀ kan tí o lè gbé láàárín ọjọ́ 30. Àpẹẹrẹ: \"Àwọn oníbàárà sọ pé wọ́n ń dúró pẹ́ jù fún iye owó iṣẹ́ (quote)\" di \"Fi quote kọ̀ọ̀kan ránṣẹ́ láàárín wákàtí 24 pẹ̀lú àpẹẹrẹ quote tí AI kọ.\"",
            "Fún ìgbésẹ̀ kọ̀ọ̀kan ní ẹni tó ń bójú tó o àti òṣùwọ̀n: nọ́mbà tí yóò fi hàn bóyá ó ṣiṣẹ́, bí àkókò ìdáhùn ààrin, ìdíyelé review, ìbẹ̀wò padà tàbí ẹ̀dùn ọkàn ní ọ̀sẹ̀ kan.",
            "Sọ fún àwọn oníbàárà ohun tí o yí padà: \"Ẹ sọ fún wa, a gbọ́.\" Lẹ́yìn ọjọ́ 30, ṣàyẹ̀wò àwọn òṣùwọ̀n, pa ohun tó ṣiṣẹ́ mọ́, kí o sì yan ìṣòro tó kàn."
          ],
          steps: ["Kọ ìgbésẹ̀ kan fún ìṣòro tó ga jù kọ̀ọ̀kan.", "Fún ìgbésẹ̀ kọ̀ọ̀kan ní ẹni tó ń bójú tó o.", "Yan òṣùwọ̀n kan fún ọ̀kọ̀ọ̀kan.", "Kọ nọ́mbà ìbẹ̀rẹ̀ sílẹ̀.", "Tún ṣàyẹ̀wò lẹ́yìn ọjọ́ 30 kí o sì sọ ohun tó yí padà."],
          words: [["Òye (insight)", "ìmọ̀ tó wúlò tó wá láti inú ṣíṣe àyẹ̀wò ìsọfúnni."], ["Òṣùwọ̀n (measure)", "nọ́mbà tó ń fi hàn bóyá àyípadà kan ṣiṣẹ́."]],
          slides: [
            { title: "Láti òye sí ìgbésẹ̀", bullets: ["Ìgbésẹ̀ kan fún ìṣòro tó ga jù kọ̀ọ̀kan", "Èyí tí a lè ṣe láàárín ọjọ́ 30"] },
            { title: "Ẹni tó ń bójú tó àti òṣùwọ̀n", bullets: ["Ta ni yóò ṣe é", "Àkókò ìdáhùn, ìdíyelé, ìbẹ̀wò padà, ẹ̀dùn ọkàn"] },
            { title: "Parí àyíká náà", bullets: ["\"Ẹ sọ fún wa, a gbọ́\"", "Ṣàyẹ̀wò ní ọjọ́ 30", "Yan ìṣòro tó kàn"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò ìtẹ̀síwájú ọjọ́ 30 fún ìṣòro mẹ́ta tó ga jù rẹ, pẹ̀lú ìgbésẹ̀, ẹni tó ń bójú tó o, òṣùwọ̀n àti nọ́mbà ìbẹ̀rẹ̀ fún ọ̀kọ̀ọ̀kan. Fi kún àwòrán ìrìn-àjò, àpẹẹrẹ ìdáhùn àti àkópọ̀ èsì oníbàárà rẹ láti parí àpò irinṣẹ́ ìrírí oníbàárà rẹ.",
          youCanNow: "wá, tún ṣe, kí o sì wọn àwọn ìṣòro ìrírí oníbàárà pẹ̀lú ìrànlọ́wọ́ AI.",
          quickCheck: [
            { objective: "O6", q: "Kí ni òṣùwọ̀n nínú ètò ìtẹ̀síwájú?", options: ["Ẹni tó ń darí", "Nọ́mbà tó ń fi hàn bóyá ìgbésẹ̀ náà ṣiṣẹ́", "Orúkọ oníbàárà", "Ọjọ́ tí o bẹ̀rẹ̀ iṣẹ́ òwò náà"], answer: 1, why: "Òṣùwọ̀n jẹ́ nọ́mbà, bí àkókò ìdáhùn ààrin, tó ń fi hàn bóyá ìgbésẹ̀ náà ṣiṣẹ́." },
            { objective: "O6", q: "Àwọn oníbàárà sọ pé àwọn kò rí àkókò ìṣísílẹ̀ rẹ. Kí ni ìgbésẹ̀ ọjọ́ 30 tó dára?", options: ["Dúró wò bóyá yóò dára sí i", "Ní kí AI kọ reviews nípa àkókò ìṣísílẹ̀ rẹ", "Yọ àkókò ìṣísílẹ̀ kúrò pátápátá", "Fi àkókò ìṣísílẹ̀ sí gbogbo ojú-ìwé àti profile, pẹ̀lú ẹni tó ń bójú tó o àti òṣùwọ̀n"], answer: 3, why: "Ìṣòro tó ga jù kọ̀ọ̀kan ní ìgbésẹ̀ kan tó yé, ẹni tó ń bójú tó o àti òṣùwọ̀n." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Kíkẹ́kọ̀ọ́ láti inú èsì oníbàárà àti ṣíṣe àtúnṣe",
        questions: [
          { objective: "O4", q: "Kí o tó fi ọ̀rọ̀ oníbàárà sínú AI, o yẹ kí o:", options: ["Fi nọ́mbà fóònù wọn kún un", "Fi nọ́mbà káàdì wọn kún un", "Má ṣe nǹkan kan", "Yọ orúkọ àti ìsọfúnni àdáni kúrò"], answer: 3, why: "Ìpamọ́ ló ṣáájú." },
          { objective: "O4", q: "AI pín ọ̀rọ̀ sí kókó ọ̀rọ̀. Kí ni o yẹ kí o ṣe tẹ̀lé e?", options: ["Ṣàyẹ̀wò ọ̀rọ̀ díẹ̀ nínú kókó kọ̀ọ̀kan", "Gbẹ́kẹ̀lé e pátápátá", "Pa àwọn ọ̀rọ̀ náà rẹ́", "Fi àwọn kókó ọ̀rọ̀ sí gbangba pẹ̀lú orúkọ"], answer: 0, why: "AI lè ka iye ní àìtọ́ tàbí da ìṣòro pọ̀." },
          { objective: "O5", q: "Kí ni àmì ìdúrópò?", options: ["Review èké", "Irú ẹ̀dùn ọkàn kan", "Àmì bí [Orúkọ àkọ́kọ́] tí a fi ìsọfúnni gidi rọ́pò", "Ọ̀rọ̀ aṣínà oníbàárà"], answer: 2, why: "Àmì ìdúrópò ń jẹ́ kí o ṣe ọ̀rọ̀ fún ẹnì kọ̀ọ̀kan láìléwu." },
          { objective: "O5", q: "Chatbot ń dá àwọn oníbàárà rẹ lóhùn. Kí ni o yẹ kí o sọ fún wọn?", options: ["Pé òṣìṣẹ́ gidi ni", "Kò sí nǹkan", "Kí wọ́n dẹ́kun bíbéèrè ìbéèrè", "Pé AI ni, àti bí wọ́n ṣe lè bá ènìyàn sọ̀rọ̀"], answer: 3, why: "Òtítọ́ ń mú ìgbẹ́kẹ̀lé wá." },
          { objective: "O6", q: "Èwo ni òṣùwọ̀n tó dára fún ìgbésẹ̀ \"fi quote ránṣẹ́ láàárín wákàtí 24\"?", options: ["Iye ewéko inú ọ́fíìsì", "Ọjọ́ orí ẹni tó ni iṣẹ́ òwò", "Àkókò ààrin tí ó ń gbà láti fi quote ránṣẹ́", "Àwọ̀ ojú-òpó wẹ́ẹ̀bù"], answer: 2, why: "Òṣùwọ̀n gbọ́dọ̀ fi hàn bóyá ìgbésẹ̀ náà ṣiṣẹ́." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI fún Ìrírí Oníbàárà",
    questions: [
      { objective: "O1", q: "Ìrírí oníbàárà ni:", options: ["Iye owó nìkan", "Bí ènìyàn ṣe ń nímọ̀lára ní gbogbo ìgbà tí wọ́n bá ń bá ọ ṣe nǹkan", "Ojú-òpó wẹ́ẹ̀bù rẹ nìkan", "Owó oṣù àwọn òṣìṣẹ́ rẹ"], answer: 1, why: "Ó kan gbogbo ibi ìpàdé." },
      { objective: "O1", q: "Èwo ni ìgbésẹ̀ àkọ́kọ́ nínú ìrìn-àjò oníbàárà?", options: ["Rírí ọ: bí wọ́n ṣe rí ọ", "Kíkọ review", "Sísanwó", "Pípadà wá"], answer: 0, why: "Ìrìn-àjò náà bẹ̀rẹ̀ nígbà tí wọ́n bá rí ọ." },
      { objective: "O1", q: "Fún àjọ aláìlérè, \"oníbàárà\" lè jẹ́:", options: ["Àwọn tó ń sanwó rajà nìkan", "Ìgbìmọ̀ olùdarí nìkan", "Àwọn tí wọ́n ń sìn, ẹbí, olùfúnni àti olùyọ̀ǹda ara ẹni", "Kò sí ẹnìkan"], answer: 2, why: "Ẹnikẹ́ni tí àjọ náà ń sìn tàbí tí ó gbára lé." },
      { objective: "O1", q: "AI lè ran àwòrán ìrìn-àjò lọ́wọ́ nípa:", options: ["Dídábàá ohun tó ń bí oníbàárà nínú tí o lè ti gbàgbé", "Rírọ́pò àwọn oníbàárà rẹ", "Gbígba nọ́mbà káàdì", "Kíkọ review èké"], answer: 0, why: "Ó ń mú èrò wá; ìwọ ni yóò fi wé ohun tó ń ṣẹlẹ̀ gan-an." },
      { objective: "O2", q: "Àpẹẹrẹ ìdáhùn (template) ni:", options: ["Àdéhùn òfin", "Ìwádìí", "Ojú-òpó reviews", "Ìdáhùn tí a ti múra sílẹ̀ tí o ń tún ṣe fún ẹnì kọ̀ọ̀kan"], answer: 3, why: "Àpẹẹrẹ ìdáhùn ń mú kí ìdáhùn yára." },
      { objective: "O2", q: "Kí ni o yẹ kí o fún AI nígbà tó bá ń kọ àpẹẹrẹ ìdáhùn?", options: ["Ọ̀rọ̀ aṣínà oníbàárà", "Ọ̀nà ìsọ̀rọ̀ rẹ àti àwọn òtítọ́ gidi", "Kò sí nǹkan", "Reviews olùdíje rẹ"], answer: 1, why: "Òtítọ́ àti ọ̀nà ìsọ̀rọ̀ ń mú ìdáhùn tó péye tó sì dún bí tìrẹ wá." },
      { objective: "O2", q: "Àpẹẹrẹ ìdáhùn AI sọ pé o ń ṣí ní 8 am, ṣùgbọ́n 9 ni o ń ṣí. Kí ni o máa ṣe?", options: ["Fi ránṣẹ́ bẹ́ẹ̀", "Tún òtítọ́ náà ṣe kí o tó lò ó", "Yí àkókò ìṣísílẹ̀ rẹ padà", "Dá oníbàárà lẹ́bi"], answer: 1, why: "Máa ṣàyẹ̀wò òtítọ́ nígbà gbogbo." },
      { objective: "O3", q: "Ta ni ìdáhùn gbangba sí review wà fún gan-an?", options: ["Ẹni tó kọ review nìkan", "Kò sí ẹnìkan", "Ẹni tó ni ojú-òpó reviews", "Gbogbo ẹni tó ń ka àwọn reviews"], answer: 3, why: "Àwọn oníbàárà ọjọ́ iwájú ń ka ìdáhùn rẹ." },
      { objective: "O3", q: "Ọ̀nà fún ẹ̀dùn ọkàn nínú ẹ̀kọ́ yìí ni:", options: ["Gbọ́, tọrọ àforíjì, yanjú, tẹ̀lé e", "Jiyàn, sẹ́, pa rẹ́, fojú fò", "Dúró, dúró, dúró, dúró", "Dá gbogbo owó padà nígbà gbogbo"], answer: 0, why: "Ọ̀nà yẹn ń sọ ẹ̀dùn ọkàn di ìgbẹ́kẹ̀lé." },
      { objective: "O3", q: "Kíkọ reviews fún iṣẹ́ òwò tìrẹ fúnra rẹ jẹ́:", options: ["Ọgbọ́n tó dára", "Ohun tí a pàṣẹ", "Ẹ̀tàn, a kò sì gbọdọ̀ ṣe é láéláé", "Ó dára tí AI bá kọ ọ́"], answer: 2, why: "Review èké ń ṣi àwọn oníbàárà lọ́nà." },
      { objective: "O3", q: "Review kan ní ìhalẹ̀ nínú. O yẹ kí o:", options: ["Halẹ̀ mọ́ wọn padà", "Fi àdírẹ́sì wọn sí orí ayélujára", "Fojú fo gbogbo reviews", "Lo ọ̀nà ìròyìn ti ojú-òpó náà"], answer: 3, why: "Àwọn ojú-òpó ní ọ̀nà fún ọ̀rọ̀ ìkà." },
      { objective: "O4", q: "Ọ̀rọ̀ mélòó ni ẹ̀kọ́ náà dábàá pé kí o kó jọ fún àyẹ̀wò?", options: ["1 gẹ́lẹ́", "Kò sí", "Ó kéré tán 15", "Ó kéré tán 10,000"], answer: 2, why: "Ọ̀rọ̀ 15 tàbí jù bẹ́ẹ̀ lọ ń fi àpẹẹrẹ gidi hàn." },
      { objective: "O4", q: "Kókó ọ̀rọ̀ (theme) ni:", options: ["Ìrísí ojú-òpó wẹ́ẹ̀bù", "Ọ̀rọ̀ kan tó ń yọjú léraléra", "Ẹ̀dùn ọkàn kan ṣoṣo", "Kóòdù ẹ̀dínwó"], answer: 1, why: "Kókó ọ̀rọ̀ ń fi àwọn ìṣòro tó wọ́pọ̀ hàn." },
      { objective: "O4", q: "Ìmọ̀lára ọ̀rọ̀ (sentiment) túmọ̀ sí:", options: ["Bóyá ọ̀rọ̀ kan jẹ́ rere, búburú tàbí ààrin", "Bí ọ̀rọ̀ kan ṣe gùn tó", "Ẹni tó kọ ọ́", "Ọjọ́ rẹ̀"], answer: 0, why: "Ìmọ̀lára ọ̀rọ̀ ni ìmọ̀lára tó wà lẹ́yìn ọ̀rọ̀ náà." },
      { objective: "O4", q: "Ó yẹ kí a to àwọn ìṣòro tó ga jù gẹ́gẹ́ bí:", options: ["Ètò álífábẹ́ẹ̀tì", "Ẹni tó ráhùn jùlọ", "Ìgbà mélòó tí wọ́n ń yọjú àti bí wọ́n ṣe ń ṣe ìpalára tó", "Yíyàn láìròtẹ́lẹ̀"], answer: 2, why: "Ìgbà mélòó àti ìpalára ń fi ohun tó ṣáájú hàn." },
      { objective: "O5", q: "Ọ̀nà tí kò léwu jù láti fi orúkọ oníbàárà sínú ọ̀pọ̀ ọ̀rọ̀ ni:", options: ["Lo àmì ìdúrópò kí o sì fi orúkọ sínú rẹ̀ nínú irinṣẹ́ email tàbí ti oníbàárà tìrẹ", "Fi gbogbo àkọsílẹ̀ oníbàárà sínú irinṣẹ́ AI gbogbogbò", "Ṣe àfojúdi orúkọ wọn", "Fi àkọsílẹ̀ náà sí gbangba"], answer: 0, why: "Irinṣẹ́ tìrẹ ń jẹ́ kí ìsọfúnni oníbàárà wà lábẹ́ àkóso rẹ." },
      { objective: "O5", q: "O yẹ kí o fi ọ̀rọ̀ ránṣẹ́ sí àwọn oníbàárà tí:", options: ["Kò fún ọ ní ọ̀nà ìkànsí wọn rí", "Ní kí o dẹ́kun", "O rí lórí ayélujára", "Gbà láti gbọ́ láti ọ̀dọ̀ rẹ"], answer: 3, why: "Ìyọ̀ǹda ṣe pàtàkì, a sì gbọ́dọ̀ bọ̀wọ̀ fún àwọn tó jáde kúrò." },
      { objective: "O6", q: "Ìgbésẹ̀ ìtẹ̀síwájú kọ̀ọ̀kan nílò:", options: ["Logo tuntun", "Ẹni tó ń bójú tó o àti òṣùwọ̀n", "Ọ́fíìsì tó tóbi jù", "Kò sí nǹkan"], answer: 1, why: "Ẹni tó ń bójú tó ń jẹ́ kí ó ṣẹlẹ̀; òṣùwọ̀n ń fi hàn bóyá ó ṣiṣẹ́." },
      { objective: "O6", q: "\"Ẹ sọ fún wa, a gbọ́\" jẹ́ ọ̀nà láti:", options: ["Fi àwọn ìṣòro pamọ́", "Fi ohun tí o yí padà han àwọn oníbàárà", "Béèrè ọ̀rọ̀ aṣínà", "Fi kún iye owó"], answer: 1, why: "Píparí àyíká náà ń mú kí oníbàárà dúró tì ọ́." },
      { objective: "O6", q: "Lẹ́yìn ọjọ́ 30, o yẹ kí o:", options: ["Dẹ́kun gbígbọ́ ọ̀rọ̀ oníbàárà", "Pa ètò náà rẹ́", "Má ṣàyẹ̀wò láéláé", "Ṣàyẹ̀wò àwọn òṣùwọ̀n, pa ohun tó ṣiṣẹ́ mọ́, kí o sì yan ìṣòro tó kàn"], answer: 3, why: "Ìtẹ̀síwájú jẹ́ àyíká tó ń tún ara rẹ̀ ṣe." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      1,
      4,
      6,
      8,
      9,
      12,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Àwòrán ìrìn-àjò",
        objective: "O1",
        notYet: "Àwọn ìgbésẹ̀ kan kò sí, tàbí a kò sàmì sí àwọn ibi tó lágbára kéré jù.",
        meets: "Gbogbo ìgbésẹ̀ márùn-ún pẹ̀lú ohun tí oníbàárà ń ṣe àti bí ó ṣe ń nímọ̀lára, a sì sàmì sí ibi mẹ́ta tó lágbára kéré jù.",
        exceeds: "Ibi aláìlágbára kọ̀ọ̀kan so mọ́ èsì oníbàárà gidi tàbí ohun tí òṣìṣẹ́ kan rí."
      },
      {
        name: "Àpẹẹrẹ ìdáhùn",
        objective: "O2",
        notYet: "Àpẹẹrẹ ìdáhùn kò tó márùn-ún, tàbí ọ̀kan ní òtítọ́ tí kò tọ́.",
        meets: "Àpẹẹrẹ ìdáhùn márùn-ún (ìbéèrè, review rere, review búburú, ẹ̀dùn ọkàn, àtẹ̀lé) pẹ̀lú òtítọ́ gidi àti ọ̀nà ìsọ̀rọ̀ tó ní ìfẹ́.",
        exceeds: "Àpẹẹrẹ ìdáhùn kọ̀ọ̀kan ní àmì ìdúrópò àti àkíyèsí nípa ohun tí a ó ṣe fún ẹni náà."
      },
      {
        name: "Ìdáhùn sí reviews àti ẹ̀dùn ọkàn",
        objective: "O3",
        notYet: "Ìdáhùn kan ń jiyàn, ń dá ẹ̀bi, tàbí ń pín ìsọfúnni àdáni.",
        meets: "Àwọn ìdáhùn farabalẹ̀, wọ́n tọrọ àforíjì níbi tó yẹ, wọ́n sì fúnni ní àtúnṣe tàbí ọ̀nà láti sọ̀rọ̀ ní ìkọ̀kọ̀.",
        exceeds: "Ó ní ìgbésẹ̀ àtẹ̀lé láti ṣàyẹ̀wò pé a ti yanjú ìṣòro náà."
      },
      {
        name: "Àkópọ̀ èsì oníbàárà",
        objective: "O4",
        notYet: "Ọ̀rọ̀ kò tó 15, tàbí orúkọ ṣì wà nínú rẹ̀.",
        meets: "Ọ̀rọ̀ tó kéré tán 15 tí a ti yọ ìsọfúnni àdáni kúrò, tí a pín sí kókó ọ̀rọ̀, tí a sì to ìṣòro mẹ́ta tó ga jù.",
        exceeds: "Ó fi àwọn kókó ọ̀rọ̀ tí a ṣàyẹ̀wò hàn àti àṣìṣe AI èyíkéyìí tí a tún ṣe."
      },
      {
        name: "Ètò ọjọ́ 30",
        objective: "O6",
        notYet: "Àwọn ìgbésẹ̀ kò ní ẹni tó ń bójú tó wọn tàbí òṣùwọ̀n.",
        meets: "Ìgbésẹ̀ kan, ẹni tó ń bójú tó o àti òṣùwọ̀n kan fún ìṣòro tó ga jù kọ̀ọ̀kan, pẹ̀lú nọ́mbà ìbẹ̀rẹ̀.",
        exceeds: "Ó sọ bí a ó ṣe sọ fún àwọn oníbàárà ohun tó yí padà."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àkókò ìdáhùn ààrin sí ìbéèrè oníbàárà, ṣáájú ẹ̀kọ́ náà àti ọjọ́ 30 lẹ́yìn rẹ̀",
      "Ìdíyelé review ààrin àti iye ẹ̀dùn ọkàn ní ọ̀sẹ̀ kan, ṣáájú àti ọjọ́ 60 lẹ́yìn",
      "Àwọn àjọ tí wọ́n parí ó kéré tán àyíká ìtẹ̀síwájú ọjọ́ 30 kan (ìwádìí àtẹ̀lé)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́ (ChatGPT, Microsoft Copilot tàbí Google Gemini)",
      "Ìwé kan fún àpẹẹrẹ ìdáhùn, àti spreadsheet tàbí ìwé kan fún àkópọ̀ èsì oníbàárà àti ètò náà",
      "Ọ̀rọ̀ oníbàárà gidi tàbí àpẹẹrẹ tó kéré tán 15 tí a ti yọ ìsọfúnni àdáni kúrò",
      "Nǹkan bí ìṣẹ́jú 60 fún ẹ̀kọ́ àti ìdánwò, pẹ̀lú àkókò láti ṣe àpò irinṣẹ́ náà"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ ṣe orí kan ní ìpàdé kọ̀ọ̀kan; ẹ kọ àpẹẹrẹ ìdáhùn kan àti ìdáhùn sí ẹ̀dùn ọkàn kan lórí ojú-iboju tí gbogbo yín ń wò.",
      "Pèsè àpẹẹrẹ ọ̀rọ̀ oníbàárà fún àwọn akẹ́kọ̀ọ́ tí kò tíì ní èsì oníbàárà gidi.",
      "Ṣàyẹ̀wò pé a ti yọ orúkọ, nọ́mbà fóònù àti ìsọfúnni ìlera kúrò kí ọ̀rọ̀ èyíkéyìí tó wọ inú AI.",
      "Ṣe eré oníbàárà tí inú ń bí kí àwọn akẹ́kọ̀ọ́ lè fi ohùn rara ṣe àṣeṣe gbọ́, tọrọ àforíjì, yanjú, tẹ̀lé e.",
      "Fi rubric ṣe àmì fún àpò irinṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};

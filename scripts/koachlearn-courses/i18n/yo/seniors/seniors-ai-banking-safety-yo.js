"use strict";

// Koach Learn course (Yoruba translation of seniors/seniors-ai-banking-safety.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "seniors-ai-banking-safety-yo",
  lang: "yo",
  translationOf: "seniors-ai-banking-safety",
  category: "Seniors and Technology",
  name: "AI àti Ààbò Nínú Báńkì Orí Íńtánẹ́ẹ̀tì",
  skills: "Gbígba app gidi ti báńkì rẹ, Wíwọlé láìléwu pẹ̀lú ìfìdímúlẹ̀ ìgbésẹ̀ méjì, Ṣíṣètò ìkìlọ̀ àkáǹtì, Dídá jìbìtì báńkì tí ó ń lo AI mọ̀, Lílo app ìsanwó láìléwu, Mímọ ohun tí o máa ṣe tí nǹkan bá bàjẹ́",
  outcome: "wọlé sínú app tàbí ojú-ìwé wẹ́ẹ̀bù gidi ti báńkì rẹ láìléwu, tan ìkìlọ̀ fún àkáǹtì rẹ, dá ìpè tàbí ọ̀rọ̀ \"báńkì\" èké mọ̀, kí o sì mọ ẹni tí o máa pè gan-an tí nǹkan bá bàjẹ́.",
  about: [
    "Báńkì orí íńtánẹ́ẹ̀tì ń jẹ́ kí o wo iye owó tí ó wà nínú àkáǹtì rẹ, rí àwọn ìsanwó, kí o sì san owó ìnáwó láìlọ sí ẹ̀ka báńkì. Ẹ̀kọ́ yìí wà fún àwọn àgbàlagbà tí wọ́n fẹ́ lò ó pẹ̀lú ìgboyà, kí wọ́n sì wà láìléwu lọ́wọ́ àwọn jìbìtì tí wọ́n ń lo AI báyìí láti dún àti láti rí bí báńkì rẹ.",
    "O máa gba app gidi ti báńkì rẹ, wọlé láìléwu, ṣètò ìkìlọ̀ kí o lè kíyèsí ohunkóhun tí kò wọ́pọ̀, kọ́ àwọn ẹ̀tàn tí àwọn tí ń díbọ́n pé \"báńkì\" ni wọ́n ń lò, lo app ìsanwó pẹ̀lú ìṣọ́ra, kí o sì ṣe ètò fún ohun tí o máa ṣe tí nǹkan bá bàjẹ́.",
    "Ẹ̀kọ́ yìí kò fún ọ ní ìmọ̀ràn nípa owó, a kò sì ní ní kí o tẹ ìsọfúnni àkáǹtì rẹ gidi síbí tàbí sínú olùrànlọ́wọ́ AI láéláé. Ẹnìkan nínú ẹbí tí o fọkàn tán lè jókòó tì ọ́ nígbà ìṣètò. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún. Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́."
  ],
  finalTask: "Wọlé sínú app tàbí ojú-ìwé wẹ́ẹ̀bù gidi ti báńkì rẹ, tan ìkìlọ̀ méjì ó kéré tán (bí èyí fún ìrajà ńlá àti fún owó tí ó kù díẹ̀), kọ nọ́mbà fóònù báńkì rẹ láti ẹ̀yìn káàdì rẹ sórí káàdì ààbò rẹ, kí o sì lo àmì mẹ́rin náà láti ṣe ìdájọ́ àpẹẹrẹ ọ̀rọ̀ text \"báńkì\" kan.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà ní Amẹ́ríkà (United States) tí wọ́n ní àkáǹtì ní báńkì tàbí credit union, tí wọ́n ń bẹ̀rẹ̀ tàbí tí wọ́n ti ń lo báńkì orí íńtánẹ́ẹ̀tì àti app ìsanwó, tí ẹbí wọn tàbí báńkì wọn sábà máa ń gbà wọ́n níyànjú.",
    startingPoint: "Wọ́n ń lo káàdì debit tàbí credit àti smartphone. Àwọn kan ti ń lo báńkì orí íńtánẹ́ẹ̀tì; àwọn míì ń lọ sí ẹ̀ka báńkì tàbí ń pè lórí fóònù nìkan. Ọ̀pọ̀ kò dá wọn lójú bí wọ́n ṣe lè mọ app tàbí ìpè báńkì gidi yàtọ̀ sí èké.",
    gap: "Báńkì orí íńtánẹ́ẹ̀tì ń dín ìrìn àjò kù, ó sì ń ràn wá lọ́wọ́ láti rí ìṣòro ní kùtùkùtù, ṣùgbọ́n àwọn àgbàlagbà ni àwọn jìbìtì ń dojú kọ jù pẹ̀lú ìpè báńkì èké, text èké àti jìbìtì app ìsanwó, owó tí a sì fi app ránṣẹ́ ṣòro láti gbà padà. Wíwọlé láìléwu, ìkìlọ̀, dídá èké mọ̀ àti mímọ ẹni tí a máa pè ń dáàbò bo owó tí wọ́n ti tọ́jú.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn, gbólóhùn kúkúrú àti ìgbésẹ̀ tó tóbi, tó sì rọrùn",
      "Ẹ̀rọ: smartphone tàbí kọ̀mpútà; app àti àkójọ (menu) báńkì kọ̀ọ̀kan yàtọ̀ síra",
      "Àkókò: nǹkan bí ìṣẹ́jú 5 fún ẹ̀kọ́ kọ̀ọ̀kan láìkánjú",
      "Àṣírí: a kò pín ọ̀rọ̀ aṣínà gidi, nọ́mbà àkáǹtì tàbí kóòdù kankan nínú kíláàsì",
      "Ìsọfúnni àwọn àjọ ìjọba Amẹ́ríkà àti nọ́mbà ìrànlọ́wọ́ lè yí padà; àwọn akẹ́kọ̀ọ́ máa ṣàyẹ̀wò ojú-ìwé wẹ́ẹ̀bù ìjọba"
    ],
    prerequisites: "Ẹ̀kọ́ \"Ààbò AI àti Mímọ Jìbìtì fún Àwọn Àgbàlagbà\" wúlò láti kọ́kọ́ ṣe, ṣùgbọ́n kò pọn dandan."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pẹ̀lú fóònù tàbí kọ̀mpútà rẹ", action: "ṣí app tàbí ojú-ìwé wẹ́ẹ̀bù gidi ti báńkì rẹ láti inú app store tàbí àdírẹ́sì tí ó wà lórí ìwé àkọsílẹ̀ àkáǹtì rẹ", standard: "láìlo link nínú text tàbí email láéláé" },
    { id: "O2", condition: "Nígbà tí o bá ń wọlé sínú báńkì orí íńtánẹ́ẹ̀tì", action: "lo ọ̀rọ̀ aṣínà gígùn tí o kò lò níbòmíì àti ìfìdímúlẹ̀ ìgbésẹ̀ méjì, kí o sì jáde lórí kọ̀mpútà tí ọ̀pọ̀ ń lò", standard: "láìfi ọ̀rọ̀ aṣínà tàbí kóòdù rẹ han ẹnikẹ́ni" },
    { id: "O3", condition: "Nínú app tàbí ojú-ìwé wẹ́ẹ̀bù báńkì rẹ", action: "tan ìkìlọ̀ fún ìrajà ńlá, owó tí ó kù díẹ̀ àti ìyípadà nínú ìsọfúnni wíwọlé", standard: "pẹ̀lú ìkìlọ̀ méjì ó kéré tán ní títàn" },
    { id: "O4", condition: "Tí ìpè tàbí ọ̀rọ̀ kan bá sọ pé báńkì rẹ ni", action: "dá àwọn àmì ìbánisọ̀rọ̀ báńkì èké mọ̀, kí o sì pe nọ́mbà tí ó wà lẹ́yìn káàdì rẹ", standard: "láìfi kóòdù, ọ̀rọ̀ aṣínà tàbí owó kankan sílẹ̀" },
    { id: "O5", condition: "Kí o tó fi owó ránṣẹ́ pẹ̀lú app ìsanwó", action: "ṣàyẹ̀wò orúkọ àti nọ́mbà ẹni náà, kí o sì fi ránṣẹ́ sí àwọn tí o mọ̀ ní ojúkojú nìkan", standard: "láìsan owó fún ẹni tí ó kọ́kọ́ kàn sí ọ láéláé" },
    { id: "O6", condition: "Tí wọ́n bá jí owó tàbí ìsọfúnni rẹ", action: "pe báńkì rẹ, yí ọ̀rọ̀ aṣínà rẹ padà, kí o sì fi ẹjọ́ sùn sí àwọn ibi tó tọ́", standard: "ní kíákíá, bẹ̀rẹ̀ pẹ̀lú nọ́mbà tí ó wà lórí káàdì rẹ" }
  ],
  chapters: [
    {
      name: "Orí 1: Lílo báńkì orí íńtánẹ́ẹ̀tì láìléwu",
      lessons: [
        {
          objectives: ["O1"],
          title: "Gbígba app tàbí ojú-ìwé wẹ́ẹ̀bù gidi ti báńkì rẹ",
          minutes: 5,
          goal: "Wá app tàbí ojú-ìwé wẹ́ẹ̀bù gidi ti báńkì rẹ kí o sì ṣí i láìjẹ́ kí èké tàn ọ́ jẹ.",
          text: [
            "Àwọn jìbìtì máa ń ṣe app àti ojú-ìwé wẹ́ẹ̀bù báńkì èké tí ó rí bí gidi. AI ń jẹ́ kí àwọn ẹ̀dà wọ̀nyí rí dáadáa sí i. Nítorí náà, bẹ̀rẹ̀ láti ibi tí o fọkàn tán.",
            "Fún app: ṣí app store gidi lórí fóònù rẹ, wá orúkọ báńkì rẹ gan-an, kí o sì ṣàyẹ̀wò pé báńkì rẹ ló gbé app náà jáde. Tí kò bá dá ọ lójú, ojú-ìwé wẹ́ẹ̀bù gidi ti báńkì rẹ tàbí òṣìṣẹ́ ní ẹ̀ka báńkì lè sọ orúkọ app náà gan-an fún ọ. Fún ojú-ìwé wẹ́ẹ̀bù: tẹ àdírẹ́sì báńkì rẹ fúnra rẹ, tàbí lo àdírẹ́sì tí a tẹ̀ sórí ìwé àkọsílẹ̀ àkáǹtì rẹ (statement). Má ṣe lo link nínú text tàbí email láti dé ọ̀dọ̀ báńkì rẹ.",
            "Báńkì rẹ tún lè ràn ọ́ lọ́wọ́ láti ṣètò báńkì orí íńtánẹ́ẹ̀tì ní ẹ̀ka báńkì tàbí lórí fóònù, pẹ̀lú nọ́mbà tí ó wà lẹ́yìn káàdì rẹ."
          ],
          steps: ["Ṣí app store gidi.", "Wá orúkọ báńkì rẹ gan-an.", "Ṣàyẹ̀wò pé báńkì rẹ ló gbé app náà jáde.", "Lórí kọ̀mpútà, tẹ àdírẹ́sì láti ìwé àkọsílẹ̀ àkáǹtì rẹ fúnra rẹ.", "Má ṣe lo link nínú text tàbí email láti dé ọ̀dọ̀ báńkì rẹ láéláé."],
          words: [["Báńkì orí íńtánẹ́ẹ̀tì (online banking)", "lílo app tàbí ojú-ìwé wẹ́ẹ̀bù báńkì rẹ láti wo àkáǹtì rẹ kí o sì ṣàkóso rẹ̀."], ["App èké", "app tí a ṣe kí ó rí bí gidi kí wọ́n lè jí ìsọfúnni rẹ."]],
          slides: [
            { title: "Èké rí bí gidi", bullets: ["App àti ojú-ìwé wẹ́ẹ̀bù báńkì èké wà", "AI ń jẹ́ kí wọ́n rí dáadáa sí i"] },
            { title: "Gba app gidi", bullets: ["App store gidi nìkan", "Wá orúkọ báńkì náà gan-an", "Ṣàyẹ̀wò pé báńkì rẹ ló gbé e jáde"] },
            { title: "Lọ sí ojú-ìwé wẹ́ẹ̀bù gidi", bullets: ["Tẹ àdírẹ́sì náà fúnra rẹ", "Lo èyí tí ó wà lórí ìwé àkọsílẹ̀ àkáǹtì rẹ", "Kì í ṣe láti link nínú text tàbí email"] }
          ],
          tryIt: "Wo ìwé àkọsílẹ̀ àkáǹtì báńkì rẹ tàbí káàdì báńkì rẹ, kí o sì wá àdírẹ́sì ojú-ìwé wẹ́ẹ̀bù àti nọ́mbà fóònù báńkì rẹ. Kọ wọ́n sórí káàdì kan tí o máa tọ́jú sílé.",
          youCanNow: "wá app tàbí ojú-ìwé wẹ́ẹ̀bù gidi ti báńkì rẹ láti ibi tí o fọkàn tán.",
          quickCheck: [
            { objective: "O1", q: "Níbo ni a tẹ àdírẹ́sì ojú-ìwé wẹ́ẹ̀bù gidi ti báńkì rẹ sí?", options: ["Nínú text láti nọ́mbà tí o kò mọ̀", "Nínú ìpolówó tí ó yọ sórí ojú-iboju", "Lórí ìwé àkọsílẹ̀ àkáǹtì báńkì rẹ", "Nínú email tí ó ní kí o ṣàtúnṣe ìsọfúnni rẹ"], answer: 2, why: "Tẹ àdírẹ́sì láti ìwé àkọsílẹ̀ àkáǹtì rẹ fúnra rẹ dípò lílo link." },
            { objective: "O1", q: "O rí app méjì tí wọ́n ní orúkọ báńkì rẹ nínú app store. Kí ni o máa ṣàyẹ̀wò?", options: ["Èwo ni báńkì rẹ gbé jáde", "Èwo ni àmì rẹ̀ mọ́lẹ̀ jù", "Èwo ni ó tuntun jù", "Èwo ni ọ̀fẹ́"], answer: 0, why: "Ṣàyẹ̀wò pé báńkì rẹ ló gbé app náà jáde; béèrè lọ́wọ́ báńkì rẹ tí kò bá dá ọ lójú." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Wíwọlé láìléwu",
          minutes: 6,
          goal: "Wọlé pẹ̀lú ọ̀rọ̀ aṣínà tó lágbára àti ìfìdímúlẹ̀ ìgbésẹ̀ méjì, kí o sì jáde láìléwu.",
          text: [
            "Ọ̀rọ̀ aṣínà rẹ gbọ́dọ̀ gùn, kí ó sì ṣòro láti fojú inú mọ̀: gbólóhùn tí ó ní ọ̀pọ̀ ọ̀rọ̀ tí kò jọra ṣiṣẹ́ dáadáa. Lò ó fún báńkì rẹ nìkan. Tọ́jú rẹ̀ sí ibi tí ó ní ààbò nílé tàbí nínú password manager, kì í ṣe nínú àkọsílẹ̀ lásán lórí fóònù rẹ, má sì fi han ẹnikẹ́ni láéláé.",
            "Ìfìdímúlẹ̀ ìgbésẹ̀ méjì (two-step tàbí two-factor) ń fi àyẹ̀wò kejì kún un, nígbà púpọ̀ kóòdù tí a fi text ránṣẹ́ sí fóònù rẹ tàbí ìbéèrè nínú app. Kódà tí ẹnìkan bá mọ ọ̀rọ̀ aṣínà rẹ, kò lè wọlé láìsí kóòdù náà. Tan án nínú ètò ààbò (security settings) app náà, tàbí ní kí báńkì rẹ ràn ọ́ lọ́wọ́.",
            "Báńkì rẹ kò ní pè ọ́ tàbí fi text ránṣẹ́ láéláé láti béèrè kóòdù náà. Ẹnikẹ́ni tí ó bá béèrè rẹ̀ jẹ́ jìbìtì. Ọ̀pọ̀ app tún ń jẹ́ kí o wọlé pẹ̀lú ìka ọwọ́ rẹ tàbí ojú rẹ, èyí tí ó ní ààbò, tí ó sì rọrùn. Lórí kọ̀mpútà tí ọ̀pọ̀ ń lò tàbí ti ilé ìkàwé, má ṣe fi ọ̀rọ̀ aṣínà rẹ pamọ́ síbẹ̀, kí o sì jáde nígbà tí o bá parí."
          ],
          steps: ["Yan ọ̀rọ̀ aṣínà gígùn tí o kò lò níbòmíì, bí ọ̀pọ̀ ọ̀rọ̀ tí kò jọra.", "Tọ́jú rẹ̀ sí ibi tí ó ní ààbò, kì í ṣe nínú àkọsílẹ̀ lásán.", "Tan ìfìdímúlẹ̀ ìgbésẹ̀ méjì.", "Má ṣe fi kóòdù náà han ẹnikẹ́ni láéláé.", "Jáde lórí kọ̀mpútà tí ọ̀pọ̀ ń lò."],
          words: [["Ìfìdímúlẹ̀ ìgbésẹ̀ méjì (two-step verification)", "àyẹ̀wò kejì, bí kóòdù tí a fi text ránṣẹ́, tí o nílò láti wọlé."], ["Password manager", "app tí ó ń tọ́jú àwọn ọ̀rọ̀ aṣínà rẹ láìléwu."]],
          slides: [
            { title: "Ọ̀rọ̀ aṣínà tó lágbára", bullets: ["Gígùn: ọ̀pọ̀ ọ̀rọ̀ tí kò jọra", "Fún báńkì rẹ nìkan", "Tí a tọ́jú dáadáa, tí a kò fi han ẹnikẹ́ni"] },
            { title: "Ìfìdímúlẹ̀ ìgbésẹ̀ méjì", bullets: ["Kóòdù tàbí ìbéèrè nínú app gẹ́gẹ́ bí àyẹ̀wò kejì", "Ó ń dá olè tí ó mọ ọ̀rọ̀ aṣínà rẹ dúró", "Tan án nínú security settings"] },
            { title: "Òfin wúrà", bullets: ["Báńkì rẹ kì í béèrè kóòdù náà láéláé", "Ẹnikẹ́ni tí ó bá béèrè rẹ̀ jẹ́ jìbìtì"] },
            { title: "Kọ̀mpútà tí ọ̀pọ̀ ń lò", bullets: ["Má ṣe fi ọ̀rọ̀ aṣínà rẹ pamọ́ síbẹ̀", "Jáde nígbà tí o bá parí"] }
          ],
          tryIt: "Pẹ̀lú ẹnìkan nínú ẹbí tàbí òṣìṣẹ́ báńkì tí o bá fẹ́, ṣí app tàbí ojú-ìwé wẹ́ẹ̀bù báńkì rẹ kí o sì ṣàyẹ̀wò pé ìfìdímúlẹ̀ ìgbésẹ̀ méjì wà ní títàn. Tí kò bá sí, tan án. Má ṣe fi kóòdù kankan han ẹnikẹ́ni, kódà àwa.",
          youCanNow: "wọlé láìléwu pẹ̀lú ọ̀rọ̀ aṣínà tó lágbára àti ìfìdímúlẹ̀ ìgbésẹ̀ méjì.",
          quickCheck: [
            { objective: "O2", q: "Kí ni ìfìdímúlẹ̀ ìgbésẹ̀ méjì?", options: ["Títẹ ọ̀rọ̀ aṣínà rẹ lẹ́ẹ̀mejì", "Àyẹ̀wò kejì, bí kóòdù tí a fi text ránṣẹ́, lẹ́yìn ọ̀rọ̀ aṣínà rẹ", "Wíwọlé lórí fóònù méjì", "Owó tí báńkì ń gbà"], answer: 1, why: "Ó ń fi àyẹ̀wò kejì kún un, nítorí náà ọ̀rọ̀ aṣínà nìkan kò tó láti wọlé." },
            { objective: "O2", q: "O nílò ọ̀rọ̀ aṣínà báńkì tuntun. Èwo ló dára jù?", options: ["Ọjọ́ ìbí rẹ", "\"password123\"", "Ọ̀rọ̀ aṣínà kan náà tí o ń lò fún email", "Gbólóhùn tí ó ní ọ̀pọ̀ ọ̀rọ̀ tí kò jọra, fún báńkì rẹ nìkan"], answer: 3, why: "Gbólóhùn gígùn tí o kò lò níbòmíì, tí ó ní ọ̀rọ̀ tí kò jọra, lágbára, ó sì ṣòro láti fojú inú mọ̀." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ṣíṣètò ìkìlọ̀ láti rí ìṣòro ní kùtùkùtù",
          minutes: 5,
          goal: "Tan ìkìlọ̀ àkáǹtì kí o lè kíyèsí ohun tí kò wọ́pọ̀ ní kíákíá.",
          text: [
            "Ìkìlọ̀ (alerts) jẹ́ ọ̀rọ̀ tí báńkì rẹ ń fi ránṣẹ́ sí ọ ní text, email tàbí ìfitónilétí app nígbà tí nǹkan bá ṣẹlẹ̀ nínú àkáǹtì rẹ: ìrajà ńlá, owó tí ó kù díẹ̀, ẹni tuntun tí o ń sanwó fún (payee) tàbí ìyípadà ọ̀rọ̀ aṣínà.",
            "Nínú app tàbí ojú-ìwé wẹ́ẹ̀bù báńkì náà, wá Alerts tàbí Notifications, tí ó sábà máa ń wà lábẹ́ profile tàbí settings rẹ. Tan ìkìlọ̀ fún ìrajà tí ó ju iye kan tí o yàn lọ, fún owó tí ó kù díẹ̀, àti fún ìyípadà èyíkéyìí nínú ìsọfúnni wíwọlé rẹ.",
            "Nígbà tí ìkìlọ̀ bá dé fún nǹkan tí o kò ṣe, má ṣe dá a lóhùn, má sì pe nọ́mbà tí ó wà nínú rẹ̀. Ṣí app báńkì rẹ fúnra rẹ, tàbí pe nọ́mbà tí ó wà lẹ́yìn káàdì rẹ."
          ],
          steps: ["Ṣí app tàbí ojú-ìwé wẹ́ẹ̀bù báńkì rẹ.", "Wá Alerts tàbí Notifications.", "Tan ìkìlọ̀ fún ìrajà ńlá, owó tí ó kù díẹ̀ àti ìyípadà wíwọlé.", "Tí ìkìlọ̀ bá fi nǹkan tí o kò ṣe hàn, pe nọ́mbà tí ó wà lórí káàdì rẹ."],
          words: [["Ìkìlọ̀ (alert)", "ọ̀rọ̀ láti ọ̀dọ̀ báńkì rẹ nípa ohun tí ó ṣẹlẹ̀ nínú àkáǹtì rẹ."], ["Payee", "ẹni tàbí ilé-iṣẹ́ tí o ń fi owó ránṣẹ́ sí."]],
          slides: [
            { title: "Ìkìlọ̀ ń rí ìṣòro ní kùtùkùtù", bullets: ["Ìrajà ńlá", "Owó tí ó kù díẹ̀", "Payee tuntun tàbí ìyípadà ọ̀rọ̀ aṣínà"] },
            { title: "Tan wọ́n", bullets: ["Wá Alerts tàbí Notifications", "Yan iye owó tìrẹ", "Text, email tàbí app"] },
            { title: "Nǹkan tí o kò ṣe?", bullets: ["Má ṣe dá a lóhùn tàbí pe nọ́mbà inú rẹ̀", "Ṣí app náà fúnra rẹ", "Tàbí pe nọ́mbà tí ó wà lórí káàdì rẹ"] }
          ],
          tryIt: "Tan ìkìlọ̀ méjì ó kéré tán nínú app tàbí ojú-ìwé wẹ́ẹ̀bù báńkì rẹ: ọ̀kan fún ìrajà tí ó ju iye tí o yàn lọ, àti ọ̀kan fún owó tí ó kù díẹ̀.",
          youCanNow: "ṣètò ìkìlọ̀ báńkì kí o sì dáhùn láìléwu nígbà tí ọ̀kan bá dé.",
          quickCheck: [
            { objective: "O3", q: "Kí ni ìkìlọ̀ báńkì?", options: ["Ọ̀rọ̀ láti ọ̀dọ̀ báńkì rẹ nígbà tí nǹkan bá ṣẹlẹ̀ nínú àkáǹtì rẹ", "Ìpolówó ọjà", "Ìpè láti ẹ̀ka jìbìtì", "Ìwé àkọsílẹ̀ àkáǹtì lórí bébà"], answer: 0, why: "Ìkìlọ̀ ń sọ fún ọ nípa ohun tí ó ṣẹlẹ̀, bí ìrajà ńlá tàbí owó tí ó kù díẹ̀." },
            { objective: "O3", q: "Ìkìlọ̀ kan sọ pé o yí ọ̀rọ̀ aṣínà rẹ padà, ṣùgbọ́n o kò ṣe bẹ́ẹ̀. Kí ni o máa ṣe?", options: ["Dá ìkìlọ̀ náà lóhùn", "Pe nọ́mbà tí ó wà nínú ìkìlọ̀ náà", "Má kọbi ara sí i", "Ṣí app báńkì rẹ fúnra rẹ tàbí pe nọ́mbà tí ó wà lórí káàdì rẹ"], answer: 3, why: "Má ṣe dá a lóhùn tàbí pe nọ́mbà inú ìkìlọ̀ náà; kàn sí báńkì rẹ fúnra rẹ." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Lílo báńkì orí íńtánẹ́ẹ̀tì láìléwu",
        questions: [
          { objective: "O1", q: "Text kan ní link láti \"ṣàtúnṣe ìsọfúnni báńkì rẹ\". Báwo lo ṣe máa dé ọ̀dọ̀ báńkì rẹ?", options: ["Fi ọ̀rọ̀ aṣínà rẹ dá a lóhùn", "Tẹ link náà", "Tẹ àdírẹ́sì náà fúnra rẹ tàbí lo app gidi", "Pe nọ́mbà tí ó wà nínú text náà"], answer: 2, why: "Link nínú text lè mú ọ lọ sí ojú-ìwé wẹ́ẹ̀bù èké." },
          { objective: "O1", q: "Báwo lo ṣe lè mọ̀ pé app báńkì kan jẹ́ gidi?", options: ["Ó wà nínú app store gidi, báńkì rẹ sì ló gbé e jáde", "Ó wá láti inú ìpolówó tí ó yọ", "Àjèjì kan ló fi ránṣẹ́", "Ó ní àwòrán tó rẹwà"], answer: 0, why: "Ṣàyẹ̀wò app store àti ẹni tí ó gbé e jáde." },
          { objective: "O2", q: "Kí ni ìfìdímúlẹ̀ ìgbésẹ̀ méjì ń fi kún un?", options: ["Ọ̀rọ̀ aṣínà kejì láti pín", "Àkáǹtì báńkì kejì", "Owó ọ̀fẹ́", "Àyẹ̀wò kejì, bí kóòdù tí a fi text ránṣẹ́"], answer: 3, why: "Ó ń dá olè tí ó mọ ọ̀rọ̀ aṣínà rẹ nìkan dúró." },
          { objective: "O2", q: "Ẹnìkan pè ọ́, ó sọ pé láti báńkì rẹ ni òun ti ń pè, ó sì béèrè kóòdù tí wọ́n ṣẹ̀ṣẹ̀ fi text ránṣẹ́ sí ọ. O máa:", options: ["Kà á fún un", "Gbé fóònù sílẹ̀; báńkì rẹ kì í béèrè kóòdù náà láéláé", "Fi text rẹ̀ ránṣẹ́ sí i", "Fún un ní ìdajì rẹ̀"], answer: 1, why: "Ẹnikẹ́ni tí ó bá béèrè kóòdù náà jẹ́ jìbìtì." },
          { objective: "O3", q: "Ìkìlọ̀ kan fi ìrajà tí o kò ṣe hàn. O máa:", options: ["Dá ìkìlọ̀ náà lóhùn", "Pe nọ́mbà tí ó wà lẹ́yìn káàdì rẹ", "Pe nọ́mbà tí ó wà nínú ìkìlọ̀ náà", "Má kọbi ara sí i"], answer: 1, why: "Lo nọ́mbà tí o ti fọkàn tán tẹ́lẹ̀." }
        ]
      }
    },
    {
      name: "Orí 2: Dídá jìbìtì mọ̀ àti wíwà ní ààbò",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ìpè àti ọ̀rọ̀ báńkì èké tí ó ń lo AI",
          minutes: 5,
          goal: "Dá ìpè tàbí ọ̀rọ̀ \"ẹ̀ka jìbìtì báńkì\" èké mọ̀.",
          text: [
            "Jìbìtì kan tí ó wọ́pọ̀: ìpè tàbí text kan sọ pé ẹ̀ka tí ó ń gbógun ti jìbìtì (fraud department) ní báńkì rẹ ni, àti pé ìṣòro wà nínú àkáǹtì rẹ. Orúkọ báńkì rẹ lè fara hàn lórí fóònù rẹ gẹ́gẹ́ bí ẹni tí ó ń pè, AI sì lè jẹ́ kí ohùn àti ọ̀rọ̀ wọn dún bí ti àwọn akọ́ṣẹ́mọṣẹ́.",
            "Lẹ́yìn náà wọ́n máa ní kí o ṣe nǹkan kan: ka kóòdù fún wọn, \"fìdí\" ọ̀rọ̀ aṣínà rẹ \"múlẹ̀\", gbé owó rẹ lọ sí \"àkáǹtì ààbò\", gba owó lọ́wọ́ láti fún ẹni tí wọ́n rán wá (courier), tàbí ra gift card. Àwọn wọ̀nyí ni àmì jìbìtì tí FTC (àjọ ìjọba Amẹ́ríkà tí ó ń dáàbò bo àwọn oníbàárà) kọ: díbọ́n, ìṣòro, ìkánjú, àti ọ̀nà ìsanwó tí kò wọ́pọ̀. FTC sọ pé àjọ gidi kò ní sọ fún ọ láéláé pé kí o gbé owó rẹ kúrò láti dáàbò bò ó.",
            "Ohun tí o máa ṣe: gbé fóònù sílẹ̀. Lẹ́yìn náà pe nọ́mbà tí ó wà lẹ́yìn káàdì rẹ fúnra rẹ. Tí ọ̀rọ̀ náà bá jẹ́ òótọ́, báńkì náà máa mọ̀ nípa rẹ̀."
          ],
          steps: ["Kíyèsí: \"báńkì\" kan kàn sí ọ nípa ìṣòro kan.", "Kíyèsí: wọ́n béèrè kóòdù, ọ̀rọ̀ aṣínà, gbígbé owó, owó lọ́wọ́ tàbí gift card.", "Gbé fóònù sílẹ̀ tàbí dá ìdáhùn dúró.", "Pe nọ́mbà tí ó wà lẹ́yìn káàdì rẹ fúnra rẹ."],
          words: [["Spoofing", "mímú kí orúkọ tàbí nọ́mbà ilé-iṣẹ́ gidi fara hàn lórí fóònù rẹ fún ìpè èké."], ["Jìbìtì àkáǹtì ààbò (safe account scam)", "ẹ̀tàn tí ó ní kí o gbé owó rẹ lọ láti \"dáàbò bò ó\", tí ó sì ń lọ tààrà sọ́dọ̀ jìbìtì."]],
          slides: [
            { title: "Ìpè jìbìtì èké", bullets: ["\"Ẹ̀ka jìbìtì báńkì yín ni èyí\"", "Orúkọ ẹni tí ó ń pè lè jẹ́ èké", "AI ń jẹ́ kí ó dún bí akọ́ṣẹ́mọṣẹ́"] },
            { title: "Ohun tí wọ́n ń béèrè", bullets: ["Kóòdù tàbí ọ̀rọ̀ aṣínà", "Gbé owó lọ sí \"àkáǹtì ààbò\"", "Owó lọ́wọ́ fún courier, tàbí gift card"] },
            { title: "Ohun tí o máa ṣe", bullets: ["Gbé fóònù sílẹ̀", "Pe nọ́mbà tí ó wà lórí káàdì rẹ", "Tí ó bá jẹ́ òótọ́, báńkì máa mọ̀"] }
          ],
          sources: [{ name: "FTC: Bí a ṣe lè yẹra fún jìbìtì", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Béèrè lọ́wọ́ olùrànlọ́wọ́ AI: \"Kí ni àwọn àmì tí ó fi hàn pé ìpè láti ẹ̀ka jìbìtì báńkì mi jẹ́ èké?\" Fi ìdáhùn rẹ̀ wé ẹ̀kọ́ yìí, kí o sì kọ mẹ́ta tí o rò pé ó ṣe pàtàkì jù sórí káàdì rẹ.",
          youCanNow: "dá ìpè tàbí ọ̀rọ̀ báńkì èké mọ̀ kí o sì ṣàyẹ̀wò rẹ̀ láìléwu.",
          quickCheck: [
            { objective: "O4", q: "Kí ló túmọ̀ sí nígbà tí orúkọ báńkì rẹ bá fara hàn lórí fóònù gẹ́gẹ́ bí ẹni tí ó ń pè?", options: ["Ìpè náà jẹ́ gidi dájú", "Kò dájú; orúkọ ẹni tí ó ń pè lè jẹ́ èké", "Báńkì rẹ ń tì", "O gbọ́dọ̀ pe nọ́mbà kan náà padà"], answer: 1, why: "Àwọn jìbìtì lè mú kí orúkọ báńkì rẹ fara hàn lórí fóònù rẹ." },
            { objective: "O4", q: "Ẹni kan tí ó sọ pé láti \"ẹ̀ka jìbìtì\" ni òun ti ń pè ní kí o gbé owó tí o ti tọ́jú lọ sí àkáǹtì ààbò lónìí. Kí ni o máa ṣe?", options: ["Gbé e lọ kíákíá", "Fún un ní ọ̀rọ̀ aṣínà rẹ kí ó ṣàyẹ̀wò", "Gbé fóònù sílẹ̀ kí o sì pe nọ́mbà tí ó wà lẹ́yìn káàdì rẹ", "Gba owó lọ́wọ́ fún courier wọn"], answer: 2, why: "Àjọ gidi kì í sọ fún ọ láéláé pé kí o gbé owó kúrò láti dáàbò bò ó; gbé fóònù sílẹ̀ kí o sì pe báńkì rẹ fúnra rẹ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Lílo app ìsanwó pẹ̀lú ìṣọ́ra",
          minutes: 5,
          goal: "Fi owó ránṣẹ́ pẹ̀lú app ìsanwó sí àwọn tí o mọ̀ tí o sì fọkàn tán nìkan.",
          text: [
            "App ìsanwó (bí Zelle, Venmo, PayPal àti Cash App) ń jẹ́ kí o fi owó ránṣẹ́ láti fóònù rẹ. Wọ́n wúlò fún sísan owó padà fún ẹnìkan nínú ẹbí, ṣùgbọ́n owó náà sábà máa ń lọ lẹ́sẹ̀kẹsẹ̀, ó sì lè ṣòro gan-an láti gbà padà.",
            "Fi owó ránṣẹ́ sí àwọn tí o mọ̀ ní ojúkojú nìkan. Tún orúkọ, nọ́mbà fóònù tàbí email ṣàyẹ̀wò kí o tó fi ránṣẹ́. Má ṣe sanwó fún àjèjì láéláé, tàbí fún olùtajà orí íńtánẹ́ẹ̀tì tí o kò mọ̀, tàbí fún ẹnikẹ́ni tí ó kọ́kọ́ kàn sí ọ tí ó sọ pé báńkì rẹ ni, ìjọba ni tàbí ilé-iṣẹ́ kan ni.",
            "Ṣọ́ra fún ẹ̀tàn \"ìsanwó tí ó ṣèèṣì\": àjèjì kan fi owó ránṣẹ́ sí ọ, ó sì ní kí o fi í ránṣẹ́ padà. Má ṣe fi í ránṣẹ́; kàn sí báńkì rẹ tàbí ilé-iṣẹ́ app náà nípasẹ̀ app tàbí ojú-ìwé wẹ́ẹ̀bù gidi wọn."
          ],
          steps: ["Sanwó fún àwọn tí o mọ̀ ní ojúkojú nìkan.", "Tún orúkọ àti nọ́mbà ṣàyẹ̀wò kí o tó fi ránṣẹ́.", "Má ṣe sanwó fún ẹni tí ó kọ́kọ́ kàn sí ọ láéláé.", "Tí àjèjì kan bá \"ṣèèṣì\" sanwó fún ọ, kàn sí báńkì rẹ tàbí app náà, má ṣe fi owó ránṣẹ́ padà."],
          words: [["App ìsanwó", "app tí ó ń fi owó ránṣẹ́ láti fóònù rẹ sí ẹlòmíì."], ["Ìfiránṣẹ́ lẹ́sẹ̀kẹsẹ̀ (instant transfer)", "owó tí ó ń lọ lójú ẹsẹ̀, tí ó sì ṣòro láti dá padà."]],
          slides: [
            { title: "Ó wúlò, ṣùgbọ́n ó yára", bullets: ["Zelle, Venmo, PayPal, Cash App", "Owó ń lọ lẹ́sẹ̀kẹsẹ̀", "Ó ṣòro láti gbà padà"] },
            { title: "Lílò láìléwu", bullets: ["Àwọn tí o mọ̀ ní ojúkojú nìkan", "Tún orúkọ àti nọ́mbà ṣàyẹ̀wò", "Má ṣe sanwó fún ẹni tí ó kọ́kọ́ kàn sí ọ láéláé"] },
            { title: "\"Ẹ jọ̀ọ́, mo ṣèèṣì fi ránṣẹ́ sí yín\"", bullets: ["Má ṣe fi owó ránṣẹ́ padà", "Kàn sí báńkì rẹ tàbí app náà"] }
          ],
          sources: [{ name: "FTC: Bí a ṣe lè yẹra fún jìbìtì (àmì ewu nínú ìsanwó)", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Kọ sórí káàdì rẹ: \"Mo ń lo app ìsanwó pẹ̀lú àwọn tí mo mọ̀ ní ojúkojú nìkan. N kì í sanwó fún ẹnikẹ́ni tí ó kọ́kọ́ kàn sí mi láéláé.\"",
          youCanNow: "lo app ìsanwó láìléwu kí o sì yẹra fún àwọn ẹ̀tàn app ìsanwó tí ó wọ́pọ̀.",
          quickCheck: [
            { objective: "O5", q: "Kí ló dé tí o fi gbọ́dọ̀ ṣọ́ra pẹ̀lú app ìsanwó?", options: ["Wọ́n ń gba owó ìnáwó ńlá", "Wọ́n ń ṣiṣẹ́ ní báńkì nìkan", "Wọ́n lọ́ra", "Owó sábà máa ń lọ lẹ́sẹ̀kẹsẹ̀, ó sì ṣòro láti gbà padà"], answer: 3, why: "Owó app ìsanwó ń yára lọ, ó sì ṣòro gan-an láti gbà padà." },
            { objective: "O5", q: "O fẹ́ san $20 padà fún ọmọ ẹ̀gbọ́n rẹ obìnrin pẹ̀lú app. Kí ni o máa ṣe kí o tó tẹ Send?", options: ["Tún orúkọ àti nọ́mbà fóònù rẹ̀ ṣàyẹ̀wò", "Fi ránṣẹ́ sí orúkọ àkọ́kọ́ tí ó fara hàn", "Fi owó tí ó pọ̀ jù ránṣẹ́ kí ó lè tó", "Ní kí àjèjì kan bá ọ fi ránṣẹ́"], answer: 0, why: "Títún orúkọ àti nọ́mbà ṣàyẹ̀wò ń dènà kí owó má lọ sọ́dọ̀ ẹni tí kò tọ́." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Tí nǹkan bá bàjẹ́",
          minutes: 5,
          goal: "To àwọn ìgbésẹ̀ tí o máa gbé kíákíá tí wọ́n bá jí owó tàbí ìsọfúnni rẹ.",
          text: [
            "Ṣe kíákíá. Pe báńkì rẹ lẹ́sẹ̀kẹsẹ̀ pẹ̀lú nọ́mbà tí ó wà lẹ́yìn káàdì rẹ. Sọ ohun tí ó ṣẹlẹ̀ fún wọn. Ní kí wọ́n dá ìsanwó dúró tàbí dá a padà tí ó bá ṣeé ṣe, yí ọ̀rọ̀ aṣínà rẹ padà, kí o sì máa ṣọ́ àkáǹtì rẹ.",
            "Lẹ́yìn náà fi ẹjọ́ sùn. Fi ẹjọ́ jìbìtì náà sùn sí Federal Trade Commission ní ReportFraud.ftc.gov. Tí ẹnìkan bá ń lo ìdánimọ̀ rẹ, lọ sí IdentityTheft.gov fún ètò ìmúbọ̀sípò ọ̀fẹ́. Tí o bá ti pé ọmọ ọdún 60 tàbí jù bẹ́ẹ̀ lọ, National Elder Fraud Hotline (nọ́mbà ìrànlọ́wọ́ fún jìbìtì àgbàlagbà) jẹ́ ọ̀fẹ́: 833-FRAUD-11 (833-372-8311).",
            "Ṣọ́ra fún jìbìtì kejì: àwọn tí ó ń pè láti \"gba\" owó rẹ padà fún owó iṣẹ́ sábà máa ń jẹ́ jìbìtì pẹ̀lú. Kò sì sí ìtìjú nínú kí jìbìtì dojú kọ ọ́. Sísọ fún ẹnìkan nínú ẹbí tí o fọkàn tán ń dáàbò bo ìwọ àti àwọn míì."
          ],
          steps: ["Pe báńkì rẹ lẹ́sẹ̀kẹsẹ̀ lórí nọ́mbà tí ó wà lórí káàdì rẹ.", "Yí ọ̀rọ̀ aṣínà rẹ padà.", "Fi ẹjọ́ sùn ní ReportFraud.ftc.gov.", "Lo IdentityTheft.gov tí wọ́n bá lo ìdánimọ̀ rẹ.", "Ọmọ ọdún 60 sókè: pe 833-372-8311.", "Má kọbi ara sí ẹnikẹ́ni tí ó ń fẹ́ gba owó padà fún owó iṣẹ́."],
          words: [["Olè ìdánimọ̀ (identity theft)", "nígbà tí ẹnìkan bá ń lo ìsọfúnni àdáni rẹ láti díbọ́n pé òun ni ọ́."], ["Jìbìtì ìgbàpadà (recovery scam)", "ẹ̀tàn tí àwọn jìbìtì ti ń sọ pé àwọn máa gba owó tí wọ́n jí padà fún owó iṣẹ́."]],
          slides: [
            { title: "Ṣe kíákíá", bullets: ["Pe báńkì rẹ lórí nọ́mbà tí ó wà lórí káàdì rẹ", "Ní kí wọ́n dá ìsanwó dúró tàbí dá a padà", "Yí ọ̀rọ̀ aṣínà rẹ padà"] },
            { title: "Fi ẹjọ́ sùn", bullets: ["ReportFraud.ftc.gov", "IdentityTheft.gov", "Ọmọ ọdún 60 sókè: 833-FRAUD-11 (833-372-8311)"] },
            { title: "Ṣọ́ra fún jìbìtì kejì", bullets: ["Owó iṣẹ́ láti \"gba\" owó padà = jìbìtì", "Kò sí ìtìjú: sọ fún ẹni tí o fọkàn tán"] }
          ],
          sources: [{ name: "FTC: Fi ẹjọ́ jìbìtì sùn", url: "https://reportfraud.ftc.gov/" }, { name: "FTC: Ohun tí ó yẹ kí o mọ̀ nípa olè ìdánimọ̀", url: "https://consumer.ftc.gov/articles/what-know-about-identity-theft" }, { name: "DOJ Office for Victims of Crime: National Elder Fraud Hotline", url: "https://ovc.ojp.gov/program/stop-elder-fraud/providing-help-restoring-hope" }],
          tryIt: "Iṣẹ́ ìkẹyìn: wọlé sínú app tàbí ojú-ìwé wẹ́ẹ̀bù gidi ti báńkì rẹ, tan ìkìlọ̀ méjì, kọ nọ́mbà báńkì rẹ láti ẹ̀yìn káàdì rẹ sórí káàdì ààbò rẹ, kí o sì fi àmì mẹ́rin náà ṣe ìdájọ́ àpẹẹrẹ text yìí: \"ÌKÌLỌ̀ BÁŃKÌ: A ti ti àkáǹtì yín pa. Ẹ fìdí rẹ̀ múlẹ̀ báyìí ní link yìí, bí bẹ́ẹ̀ kọ́ a máa pa á rẹ́ lónìí.\"",
          youCanNow: "lo báńkì orí íńtánẹ́ẹ̀tì láìléwu, dá ìbánisọ̀rọ̀ báńkì èké mọ̀, lo app ìsanwó pẹ̀lú ìṣọ́ra, kí o sì ṣe kíákíá tí nǹkan bá bàjẹ́.",
          quickCheck: [
            { objective: "O6", q: "Kí ni IdentityTheft.gov ń fún ọ?", options: ["Owó yíyá (loan)", "Ètò ìmúbọ̀sípò ọ̀fẹ́ tí ẹnìkan bá ń lo ìdánimọ̀ rẹ", "Àkáǹtì báńkì tuntun", "Ìbánigbófò (insurance)"], answer: 1, why: "IdentityTheft.gov ń fún ọ ní ètò ìmúbọ̀sípò ọ̀fẹ́." },
            { objective: "O6", q: "O ṣẹ̀ṣẹ̀ mọ̀ pé o fi owó ránṣẹ́ sí jìbìtì kan. Kí ni ìgbésẹ̀ àkọ́kọ́ rẹ?", options: ["Dúró fún ọ̀sẹ̀ kan", "Pe jìbìtì náà padà", "Pe báńkì rẹ lẹ́sẹ̀kẹsẹ̀ lórí nọ́mbà tí ó wà lórí káàdì rẹ", "San owó fún ilé-iṣẹ́ kan kí ó gbà á padà"], answer: 2, why: "Ṣe kíákíá: kọ́kọ́ pe báńkì rẹ, lẹ́yìn náà fi ẹjọ́ jìbìtì náà sùn." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Dídá jìbìtì mọ̀ àti wíwà ní ààbò",
        questions: [
          { objective: "O4", q: "Orúkọ báńkì rẹ fara hàn lórí fóònù gẹ́gẹ́ bí ẹni tí ó ń pè. Ṣé ìyẹn fi hàn pé ìpè náà jẹ́ gidi?", options: ["Tí wọ́n bá mọ orúkọ rẹ nìkan", "Bẹ́ẹ̀ ni, nígbà gbogbo", "Ní òwúrọ̀ nìkan", "Rárá, orúkọ ẹni tí ó ń pè lè jẹ́ èké"], answer: 3, why: "Spoofing ń ṣe orúkọ ẹni tí ó ń pè èké." },
          { objective: "O4", q: "Ẹni tí ó ń pè sọ fún ọ pé kí o gbé owó tí o ti tọ́jú lọ sí \"àkáǹtì ààbò\". Èyí jẹ́:", options: ["Jìbìtì", "Ìṣe báńkì tí ó wọ́pọ̀", "Ohun tí òfin béèrè", "Ìmọ̀ràn tó dára"], answer: 0, why: "Àjọ gidi kì í ní kí o gbé owó kúrò láti dáàbò bò ó láéláé." },
          { objective: "O5", q: "Ta ni o yẹ kí o fi owó ránṣẹ́ sí pẹ̀lú app ìsanwó?", options: ["Àwọn olùtajà orí íńtánẹ́ẹ̀tì tí o kò mọ̀", "Ẹnikẹ́ni tí ó bá béèrè", "Àwọn tí o mọ̀ ní ojúkojú nìkan", "Àwọn tí ó ń pè láti \"ìjọba\""], answer: 2, why: "Owó app ìsanwó ṣòro láti gbà padà." },
          { objective: "O5", q: "Àjèjì kan \"ṣèèṣì\" fi owó ránṣẹ́ sí ọ, ó sì ní kí o fi í ránṣẹ́ padà. O máa:", options: ["Fún un ní ọ̀rọ̀ aṣínà rẹ", "Fi í ránṣẹ́ padà lẹ́sẹ̀kẹsẹ̀", "Fi ìlọ́po méjì ránṣẹ́", "Kàn sí báńkì rẹ tàbí app náà dípò bẹ́ẹ̀"], answer: 3, why: "Ẹ̀tàn tí ó wọ́pọ̀ ni èyí; jẹ́ kí báńkì bójú tó o." },
          { objective: "O6", q: "Ẹnìkan sọ pé òun máa gba owó tí wọ́n jí lọ́wọ́ rẹ padà fún owó iṣẹ́. Èyí ṣeé ṣe kí ó jẹ́:", options: ["Báńkì rẹ", "Ètò ìjọba", "Jìbìtì míì", "Ìrànlọ́wọ́ ọ̀fẹ́"], answer: 2, why: "Jìbìtì ìgbàpadà ń dojú kọ àwọn tí jìbìtì ti tàn jẹ tẹ́lẹ̀." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI àti Ààbò Nínú Báńkì Orí Íńtánẹ́ẹ̀tì",
    questions: [
      { objective: "O1", q: "Báńkì orí íńtánẹ́ẹ̀tì ń jẹ́ kí o:", options: ["Tẹ owó jáde", "Wo àkáǹtì rẹ kí o sì ṣàkóso rẹ̀ lórí app tàbí ojú-ìwé wẹ́ẹ̀bù", "Má san owó ìnáwó kankan", "Má lo ọ̀rọ̀ aṣínà"], answer: 1, why: "Báńkì rẹ ni, lórí fóònù tàbí kọ̀mpútà rẹ." },
      { objective: "O1", q: "Ibi tí ó ní ààbò láti gba app báńkì rẹ ni:", options: ["App store gidi, tí báńkì rẹ gbé e jáde", "Link nínú text", "Ìpolówó tí ó yọ", "Fáìlì tí a so mọ́ email"], answer: 0, why: "App store gidi àti àwọn tí ó gbé app jáde ṣeé fọkàn tán." },
      { objective: "O1", q: "Níbo lo ti lè rí àdírẹ́sì ojú-ìwé wẹ́ẹ̀bù gidi ti báńkì rẹ?", options: ["Lórí ìwé àkọsílẹ̀ àkáǹtì rẹ tàbí káàdì rẹ", "Nínú text láti ọ̀dọ̀ àjèjì", "Nínú ìpolówó tí ó yọ", "Nínú ọ̀rọ̀ ìdáhùn lórí ìkànnì àjọlò"], answer: 0, why: "Ìwé àkọsílẹ̀ àkáǹtì àti káàdì rẹ wá láti ọ̀dọ̀ báńkì." },
      { objective: "O2", q: "Ọ̀rọ̀ aṣínà tó lágbára ni:", options: ["Ọjọ́ ìbí rẹ", "Gígùn, bí ọ̀pọ̀ ọ̀rọ̀ tí kò jọra, tí o ń lò fún báńkì rẹ nìkan", "\"password\"", "Orúkọ ẹran ọ̀sìn rẹ"], answer: 1, why: "Ọ̀rọ̀ aṣínà gígùn tí o kò lò níbòmíì ṣòro láti fojú inú mọ̀." },
      { objective: "O2", q: "Níbo ni o KÒ gbọ́dọ̀ tọ́jú ọ̀rọ̀ aṣínà báńkì rẹ sí?", options: ["Sí ibi tí ó ní ààbò nílé", "Nínú password manager", "Nínú àkọsílẹ̀ lásán lórí fóònù rẹ", "Nínú ọpọlọ rẹ"], answer: 2, why: "Àkọsílẹ̀ lásán kò ní ààbò." },
      { objective: "O2", q: "Ìfìdímúlẹ̀ ìgbésẹ̀ méjì ń dáàbò bò ọ́ nítorí pé:", options: ["Ó ń mú ọ̀rọ̀ aṣínà kúrò", "Ó ń pín ọ̀rọ̀ aṣínà rẹ", "Ó ń pa ìkìlọ̀", "Olè nílò kóòdù náà àti ọ̀rọ̀ aṣínà rẹ"], answer: 3, why: "Àyẹ̀wò kejì ń dí olè lọ́nà." },
      { objective: "O2", q: "Ṣé báńkì rẹ máa ń pè láti béèrè kóòdù tí ó fi text ránṣẹ́ sí ọ?", options: ["Ní ọjọ́ ọdún nìkan", "Bẹ́ẹ̀ ni, ní ọ̀sẹ̀ kọ̀ọ̀kan", "Rárá", "Fún àkáǹtì ńlá nìkan"], answer: 2, why: "Ẹnikẹ́ni tí ó bá béèrè kóòdù náà jẹ́ jìbìtì." },
      { objective: "O2", q: "Lórí kọ̀mpútà ilé ìkàwé lẹ́yìn tí o bá lo báńkì, o gbọ́dọ̀:", options: ["Jáde, kí o má sì fi ọ̀rọ̀ aṣínà rẹ pamọ́", "Fi í sílẹ̀ ní wíwọlé", "Fi ọ̀rọ̀ aṣínà pamọ́", "Kọ ọ̀rọ̀ aṣínà sílẹ̀ síbẹ̀"], answer: 0, why: "Èyí ń dènà ẹni tí ó tẹ̀lé ọ láti wọlé." },
      { objective: "O3", q: "Ìkìlọ̀ báńkì ń sọ fún ọ nípa:", options: ["App tuntun", "Ojú ọjọ́", "Èsì eré ìdárayá", "Ohun tí ó ṣẹlẹ̀ nínú àkáǹtì rẹ, bí ìrajà ńlá"], answer: 3, why: "Ìkìlọ̀ ń tọ́ka sí ohun tí ó ṣẹlẹ̀ nínú àkáǹtì." },
      { objective: "O3", q: "Ìkìlọ̀ tí ó wúlò láti tàn ni:", options: ["Àwàdà ojoojúmọ́", "Owó tí ó kù díẹ̀", "Ìpolówó ọjà", "Kò sí"], answer: 1, why: "Ìkìlọ̀ owó tí ó kù díẹ̀ ń dènà ìṣòro." },
      { objective: "O3", q: "Ìkìlọ̀ kan fi owó tí o kò ná hàn. O máa pe:", options: ["Nọ́mbà tí ó wà nínú ìkìlọ̀ náà", "Nọ́mbà tí ó wà lẹ́yìn káàdì rẹ", "Ọ̀rẹ́ ọ̀rẹ́ rẹ", "Kò sí ẹni tí o máa pè"], answer: 1, why: "Lo nọ́mbà tí o ti fọkàn tán tẹ́lẹ̀." },
      { objective: "O4", q: "\"Spoofing\" túmọ̀ sí:", options: ["Ìkìlọ̀ báńkì", "Irú àkáǹtì ìfowópamọ́ kan", "Password manager", "Ṣíṣe orúkọ ẹni tí ó ń pè èké"], answer: 3, why: "Ìpè spoofing máa ń rí bí ẹni pé láti báńkì rẹ ló ti wá." },
      { objective: "O4", q: "Ẹni tí ó sọ pé láti \"ẹ̀ka jìbìtì\" ni òun ti ń pè ní kí o gba owó lọ́wọ́ fún courier. Èyí jẹ́:", options: ["Jìbìtì", "Ìṣe báńkì tí ó wọ́pọ̀", "Òfin owó orí", "Ohun ààbò"], answer: 0, why: "Báńkì kì í rán courier wá gba owó lọ́wọ́ rẹ." },
      { objective: "O4", q: "Kí ni o máa ṣe pẹ̀lú ìpè báńkì tí o fura sí?", options: ["Fún wọn ní kóòdù", "Dúró lórí ìpè náà", "Gbé fóònù sílẹ̀ kí o sì pe nọ́mbà tí ó wà lórí káàdì rẹ", "Gbé owó rẹ lọ"], answer: 2, why: "Pípè padà lórí nọ́mbà tí o fọkàn tán ń fi òtítọ́ hàn." },
      { objective: "O5", q: "Owó app ìsanwó:", options: ["Ń gba oṣù kan", "Ṣeé dá padà nígbà gbogbo", "Ọ̀fẹ́ ni láti dá a padà", "Sábà máa ń lọ lẹ́sẹ̀kẹsẹ̀, ó sì ṣòro láti gbà padà"], answer: 3, why: "Ìdí nìyẹn tí o fi máa ń sanwó fún àwọn tí o mọ̀ nìkan." },
      { objective: "O5", q: "Kí o tó fi owó ránṣẹ́ pẹ̀lú app, o gbọ́dọ̀:", options: ["Má ṣàyẹ̀wò", "Fi ránṣẹ́ kíákíá", "Tún orúkọ àti nọ́mbà ṣàyẹ̀wò", "Ní kí àjèjì náà fìdí rẹ̀ múlẹ̀"], answer: 2, why: "Àṣìṣe kékeré nínú títẹ̀ lè fi owó ránṣẹ́ sí ẹni tí kò tọ́." },
      { objective: "O6", q: "Tí wọ́n bá jí owó, ìpè ÀKỌ́KỌ́ ni sí:", options: ["Jìbìtì náà", "Báńkì rẹ, pẹ̀lú nọ́mbà tí ó wà lórí káàdì rẹ", "Ilé-iṣẹ́ ìgbàpadà", "Nọ́mbà inú ìpolówó tí ó yọ"], answer: 1, why: "Báńkì rẹ lè dá ìsanwó dúró tàbí dá a padà." },
      { objective: "O6", q: "Níbo ni o ti máa fi ẹjọ́ jìbìtì sùn sí FTC?", options: ["ReportFraud.ftc.gov", "Ọ̀rọ̀ lórí ìkànnì àjọlò", "Ojú-ìwé wẹ́ẹ̀bù jìbìtì náà", "Ìdáhùn sí text"], answer: 0, why: "Ojú-ìwé ìfẹjọ́sùn FTC ni." },
      { objective: "O6", q: "IdentityTheft.gov ń fún ọ ní:", options: ["Ètò ìmúbọ̀sípò ọ̀fẹ́", "Àkáǹtì báńkì tuntun", "Owó ọ̀fẹ́", "Ọ̀rọ̀ aṣínà"], answer: 0, why: "Ó ń tọ́ ọ sọ́nà láti bọ̀sípò lẹ́yìn olè ìdánimọ̀." },
      { objective: "O6", q: "Nọ́mbà National Elder Fraud Hotline ni:", options: ["Nọ́mbà kan láti inú text jìbìtì", "833-372-8311", "411", "0"], answer: 1, why: "DOJ (Ẹ̀ka Ìdájọ́ Amẹ́ríkà) ló ń ṣiṣẹ́ 833-FRAUD-11 (833-372-8311)." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      1,
      3,
      5,
      8,
      11,
      13,
      14,
      16
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "App tàbí ojú-ìwé wẹ́ẹ̀bù gidi",
        objective: "O1",
        notYet: "Ó wọlé nípasẹ̀ link nínú ọ̀rọ̀ tàbí app tí kì í ṣe gidi.",
        meets: "Ó wọlé nípasẹ̀ app gidi láti app store tàbí àdírẹ́sì tí ó tẹ̀ láti ìwé àkọsílẹ̀ àkáǹtì.",
        exceeds: "Ó lè fi hàn bí a ṣe ń ṣàyẹ̀wò pé báńkì ló gbé app náà jáde."
      },
      {
        name: "Wíwọlé láìléwu",
        objective: "O2",
        notYet: "Ọ̀rọ̀ aṣínà kúrú, ó ti lò ó níbòmíì, tàbí ó kọ ọ́ sínú àkọsílẹ̀ lásán lórí fóònù.",
        meets: "Ó wọlé pẹ̀lú ọ̀rọ̀ aṣínà tó lágbára, ìfìdímúlẹ̀ ìgbésẹ̀ méjì sì wà ní títàn.",
        exceeds: "Ó ń wọlé pẹ̀lú ìka ọwọ́ tàbí ojú, tàbí password manager, ó sì mọ̀ pé báńkì kì í béèrè kóòdù náà láéláé."
      },
      {
        name: "Ìkìlọ̀ wà ní títàn",
        objective: "O3",
        notYet: "Ìkìlọ̀ tí ó wà ní títàn kò tó méjì.",
        meets: "Ìkìlọ̀ méjì ó kéré tán wà ní títàn, bí ìrajà ńlá àti owó tí ó kù díẹ̀.",
        exceeds: "Ó tún tan ìkìlọ̀ fún ìyípadà wíwọlé tàbí ọ̀rọ̀ aṣínà."
      },
      {
        name: "Nọ́mbà báńkì lórí káàdì ààbò",
        objective: "O6",
        notYet: "Kò sí nọ́mbà, tàbí nọ́mbà tí ó dà kọ láti inú ọ̀rọ̀ kan.",
        meets: "Nọ́mbà báńkì láti ẹ̀yìn káàdì wà lórí káàdì ààbò.",
        exceeds: "Ó tún kọ ReportFraud.ftc.gov àti, tí ó bá ti pé ọmọ ọdún 60 tàbí jù bẹ́ẹ̀ lọ, Elder Fraud Hotline."
      },
      {
        name: "Ìdájọ́ àpẹẹrẹ text",
        objective: "O4",
        notYet: "Kò kíyèsí pé àpẹẹrẹ text \"báńkì\" náà jẹ́ jìbìtì.",
        meets: "Ó ṣe ìdájọ́ àpẹẹrẹ text náà dáadáa, ó sì dárúkọ àwọn àmì tí ó rí.",
        exceeds: "Ó sọ ohun tí ó máa ṣe tẹ̀lé e gan-an: má ṣe dá a lóhùn, pe nọ́mbà tí ó wà lórí káàdì."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege nínú iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ní ìkìlọ̀ báńkì méjì ó kéré tán àti ìfìdímúlẹ̀ ìgbésẹ̀ méjì ní títàn nígbà ìwádìí ìtẹ̀lé ọjọ́ 30",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ròyìn pé wọ́n dá ìpè tàbí ọ̀rọ̀ báńkì èké mọ̀, tí wọ́n sì kọ̀ ọ́ sílẹ̀",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ Seniors and Technology míì láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Smartphone tàbí kọ̀mpútà pẹ̀lú app tàbí ojú-ìwé wẹ́ẹ̀bù báńkì akẹ́kọ̀ọ́ fúnra rẹ̀",
      "Káàdì báńkì akẹ́kọ̀ọ́ (fún nọ́mbà tí ó wà lẹ́yìn rẹ̀ nìkan) àti káàdì ààbò òfìfo",
      "Àpẹẹrẹ text \"báńkì\" tí a tẹ̀ sórí bébà fún iṣẹ́ ìkẹyìn",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú láìkánjú: ẹ̀kọ́, ìdánrawò, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Má ṣe wo, béèrè tàbí tẹ ọ̀rọ̀ aṣínà, nọ́mbà àkáǹtì tàbí kóòdù akẹ́kọ̀ọ́ láéláé; àwọn akẹ́kọ̀ọ́ máa wọlé ní ìkọ̀kọ̀.",
      "App báńkì kọ̀ọ̀kan yàtọ̀; gba àwọn akẹ́kọ̀ọ́ níyànjú láti ní kí báńkì wọn tàbí ẹ̀ka báńkì ràn wọ́n lọ́wọ́ láti ṣètò ìkìlọ̀.",
      "Lo àpẹẹrẹ ọ̀rọ̀ tí a hùmọ̀ fún ìdánrawò, kí ẹ sì ṣe eré ìdánrawò ìpè ẹ̀ka jìbìtì èké.",
      "Ìsọfúnni nọ́mbà ìrànlọ́wọ́ lè yí padà; ṣàyẹ̀wò ReportFraud.ftc.gov àti ojú-ìwé wẹ́ẹ̀bù Elder Fraud Hotline kí ìpàdé tó bẹ̀rẹ̀.",
      "Fi rubric ṣe àmì iṣẹ́ ìkẹyìn, kí o sì fún wọn ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};

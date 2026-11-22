"use strict";

// Koach Learn course (Yoruba translation of veterans/veterans-ai-financial-personal.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "veterans-ai-financial-personal-yo",
  lang: "yo",
  translationOf: "veterans-ai-financial-personal",
  category: "Veterans (military)",
  name: "AI fún Àṣeyọrí nínú Owó àti Ìgbésí Ayé",
  skills: "Lílo AI láìléwu fún ìbéèrè nípa owó, Ṣíṣe ìṣúná oṣooṣù ti ìgbésí ayé ará ìlú, Ṣíṣètò fún ìyípadà owó oṣù lẹ́yìn iṣẹ́ ológun, Dídá jìbìtì owó tí wọ́n ń darí sí àwọn ológun àtijọ́ mọ̀, Ṣíṣe àfojúsùn àti ètò ọ̀sẹ̀, Wíwá ìrànlọ́wọ́ owó ọ̀fẹ́ láti orísun ìjọba",
  outcome: "ṣe ìṣúná oṣooṣù tó rọrùn fún ìgbésí ayé ará ìlú àti ètò ọ̀sẹ̀ pẹ̀lú ìrànlọ́wọ́ olùrànlọ́wọ́ AI, ní lílo nọ́mbà tí a ṣe ní ìyípo láìsí ìsọfúnni àkáǹtì àdáni, kí o sì ṣàyẹ̀wò ìbéèrè owó pẹ̀lú orísun ìjọba.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn ológun àtijọ́ (veterans) àti àwọn ológun tí wọ́n ń kúrò nínú iṣẹ́, tí wọ́n fẹ́ ṣàkóso owó àti ìgbésí ayé ojoojúmọ́ lẹ́yìn iṣẹ́ ológun. Owó oṣù, ilé gbígbé àti ètò ojoojúmọ́ máa ń yí padà nígbà tí o bá kúrò nínú iṣẹ́ ológun, ètò tó dára sì ń mú ìyípadà yẹn rọrùn.",
    "O máa lo olùrànlọ́wọ́ AI ọ̀fẹ́ bí olùrànlọ́wọ́ ètò: láti ṣe ìṣúná, láti ṣètò fún owó tí o máa pàdánù àti èyí tí o máa rí, láti dá jìbìtì mọ̀, láti ṣe àfojúsùn àti láti ṣe ètò ọ̀sẹ̀. O máa kọ́ ohun tí o kò gbọdọ̀ tẹ sínú AI láéláé, àti ibi tí o ti lè rí ìrànlọ́wọ́ owó ọ̀fẹ́ láti orísun ìjọba.",
    "Ẹ̀kọ́ yìí kò fúnni ní ìmọ̀ràn ìdókòwò. AI jẹ́ olùrànlọ́wọ́, kì í ṣe olùdámọ̀ràn owó: máa ṣàyẹ̀wò ìpinnu owó pẹ̀lú orísun ìjọba tàbí akọ́ṣẹ́mọṣẹ́ tó tóótun nígbà gbogbo. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Lo olùrànlọ́wọ́ AI láti ṣe ìṣúná oṣooṣù ojú-ewé kan fún ìgbésí ayé ará ìlú pẹ̀lú nọ́mbà ìyípo (owó tó ń wọlé, ohun tí o nílò, ohun tí o fẹ́, ìfowópamọ́ àti sísan gbèsè), pẹ̀lú ìlà kan fún ìyípadà owó lẹ́yìn iṣẹ́ ológun, àti ètò ọ̀sẹ̀ tí ó ní àkókò àfojúsùn mẹ́ta. Ṣàyẹ̀wò pé kò sí nọ́mbà àkáǹtì tàbí ìsọfúnni àdáni nínú rẹ̀, kí o sì kọ ìbéèrè owó kan tí o máa mú lọ sí orísun ìjọba tàbí olùdámọ̀ràn.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn ológun àtijọ́ àti àwọn ológun tí wọ́n ń kúrò nínú iṣẹ́, tí wọ́n ń ṣàkóso owó àti ìgbésí ayé ojoojúmọ́ lẹ́yìn iṣẹ́ ológun, tí ọ̀pọ̀ wọn sì ní ẹbí. Ọ̀pọ̀ ń kúrò láti owó oṣù ológun, owó ìrànlọ́wọ́ (allowances) àti ètò tí a ti ṣe sílẹ̀, sí owó oṣù ará ìlú àti ètò tiwọn fúnra wọn.",
    startingPoint: "Wọ́n lè lo smartphone tàbí kọ̀mpútà àti ẹ̀rọ ìṣirò. Ọ̀pọ̀ ti gba owó oṣù rí, ṣùgbọ́n wọn kò tíì ṣe ìṣúná ará ìlú láti ìbẹ̀rẹ̀, díẹ̀ nínú wọn ló sì ti lo olùrànlọ́wọ́ AI fún ṣíṣètò.",
    gap: "Owó oṣù, owó ilé àti ètò ojoojúmọ́ máa ń yí padà nígbà tí iṣẹ́ ológun bá parí, àwọn onjìbìtì owó sì ń dojú kọ àwọn ológun àtijọ́. Àwọn akẹ́kọ̀ọ́ nílò ìṣúná tó rọrùn, ètò ọ̀sẹ̀ àti àfojúsùn tó yé, tí wọ́n fi olùrànlọ́wọ́ AI ṣe láìpín ìsọfúnni àdáni, wọ́n sì nílò láti mọ ibi tí wọ́n ti lè mú ìbéèrè owó lọ fún ìrànlọ́wọ́ ọ̀fẹ́ láti orísun ìjọba.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a kò retí ìmọ̀ ìṣúná kankan",
      "Ẹ̀rọ: smartphone tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì, pẹ̀lú ẹ̀rọ ìṣirò",
      "Ìpamọ́ ìsọfúnni: nọ́mbà ìyípo nìkan; kò sí nọ́mbà àkáǹtì, káàdì, Social Security tàbí fáìlì VA nínú prompt AI kankan",
      "Kò sí ìmọ̀ràn ìdókòwò: a ń ṣàyẹ̀wò ìpinnu owó pẹ̀lú orísun ìjọba tàbí akọ́ṣẹ́mọṣẹ́ tó tóótun",
      "Àkókò: ẹ̀kọ́ nǹkan bí ìṣẹ́jú 5 tí ó bá àkókò ìpàdé ìyípadà iṣẹ́, iṣẹ́ àti ẹbí mu"
    ],
    prerequisites: "Kò sí. Àwọn akẹ́kọ̀ọ́ tí kò tíì lo olùrànlọ́wọ́ AI rí lè kọ́kọ́ ṣe \"Ìfihàn sí AI àti Ọjọ́ Iwájú Iṣẹ́\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Nígbà tí o bá ní ìbéèrè nípa owó", action: "béèrè ìbéèrè náà lọ́wọ́ olùrànlọ́wọ́ AI ní lílo nọ́mbà ìyípo láìsí ìsọfúnni àdáni", standard: "láìpín nọ́mbà àkáǹtì, káàdì tàbí ìdánimọ̀ kankan" },
    { id: "O2", condition: "Ní lílo nọ́mbà ìyípo tìrẹ", action: "ṣe tábìlì ìṣúná oṣooṣù ará ìlú pẹ̀lú olùrànlọ́wọ́ AI, pẹ̀lú ìlà kan fún ìnáwó tí ó yí padà lẹ́yìn iṣẹ́ ológun", standard: "pẹ̀lú àròpọ̀ tí o fúnra rẹ ṣàyẹ̀wò lórí ẹ̀rọ ìṣirò" },
    { id: "O3", condition: "Tí a bá fún ọ ní ọ̀rọ̀ tàbí ìfilọ̀ kan nípa owó tàbí àǹfààní", action: "dá àwọn àmì ìkìlọ̀ jìbìtì mọ̀ kí o sì yan ìdáhùn tí kò léwu", standard: "láìsan owó kankan àti láìpín kóòdù tàbí ìsọfúnni àdáni" },
    { id: "O4", condition: "Fún owó àti ìgbésí ayé lẹ́yìn iṣẹ́ ológun", action: "kọ àfojúsùn mẹ́ta tí ó ní nọ́mbà àti ọjọ́, kí o sì pín ọ̀kan sí ìgbésẹ̀ ọ̀sẹ̀ pẹ̀lú AI", standard: "kí gbogbo àfojúsùn ṣeé díwọ̀n, kí ó sì ní ọjọ́" },
    { id: "O5", condition: "Ní lílo àwọn àfojúsùn rẹ", action: "ṣe ètò ọ̀sẹ̀ tí ó ní àkókò àfojúsùn mẹ́ta, pẹ̀lú àyẹ̀wò ìṣúná ọ̀sẹ̀", standard: "kí o sì máa ṣàyẹ̀wò rẹ̀, kí o sì máa tún un ṣe ní ọ̀sẹ̀ kọ̀ọ̀kan" },
    { id: "O6", condition: "Tí a bá fún ọ ní ìbéèrè owó kan", action: "yan orísun ìjọba tàbí olùdámọ̀ràn tó tọ́, kí o sì kọ ìbéèrè náà sílẹ̀", standard: "ní ṣíṣàyẹ̀wò ìdáhùn owó AI kí o tó ṣe ohunkóhun" }
  ],
  chapters: [
    {
      name: "Orí 1: Owó lẹ́yìn iṣẹ́ ológun",
      lessons: [
        {
          objectives: ["O1"],
          title: "Lílo AI láìléwu fún ìbéèrè nípa owó",
          minutes: 4,
          goal: "Béèrè ìbéèrè owó lọ́wọ́ olùrànlọ́wọ́ AI láìléwu, láìsí ìsọfúnni àdáni.",
          text: [
            "Olùrànlọ́wọ́ AI lè ṣàlàyé àwọn ọ̀rọ̀ owó, ṣe tábìlì ìṣúná, fi àwọn àṣàyàn tí o fún un wéra, kí ó sì yí àkọsílẹ̀ owó-ìsan tí ó rúdurùdu padà sí ètò. Olùrànlọ́wọ́ tó yára, tó sì ní sùúrù ni.",
            "Kì í ṣe olùdámọ̀ràn owó. Kò mọ gbogbo ipò rẹ, ó lè ṣàṣìṣe nípa òfin àti nọ́mbà, ìsọfúnni rẹ̀ sì lè ti di àtijọ́. Lò ó láti lóye nǹkan àti láti ṣètò; ṣàyẹ̀wò ìpinnu pẹ̀lú orísun ìjọba tàbí olùdámọ̀ràn tó tóótun.",
            "Má ṣe tẹ nọ́mbà Social Security rẹ (nọ́mbà ìdánimọ̀ ìjọba US), nọ́mbà DD-214 rẹ (ìwé ìkúrò nínú iṣẹ́ ológun) tàbí nọ́mbà fáìlì VA (ẹ̀ka ìjọba US fún àwọn ológun àtijọ́), nọ́mbà báńkì tàbí káàdì, orúkọ wíwọlé àkáǹtì tàbí ọ̀rọ̀ aṣínà sínú AI láéláé. Lo nọ́mbà ìyípo dípò rẹ̀: \"owó ilé nǹkan bí $1,200\" ni gbogbo ohun tí ó nílò."
          ],
          steps: ["Pinnu ohun tí o fẹ́: àlàyé, tábìlì tàbí ètò.", "Lo nọ́mbà ìyípo, láìsí ìsọfúnni àkáǹtì.", "Béèrè ìbéèrè náà.", "Sàmì sí òfin, iye èlé tàbí ọjọ́ ìparí èyíkéyìí láti ṣàyẹ̀wò pẹ̀lú orísun ìjọba."],
          words: [["Ìṣúná (budget)", "ètò bí owó rẹ ṣe ń wọlé àti bí ó ṣe ń jáde ní oṣù kọ̀ọ̀kan."], ["Nọ́mbà ìyípo", "nọ́mbà tó súnmọ́, tó rọrùn bí $1,200 dípò iye gangan tí ó so mọ́ àkáǹtì kan."]],
          slides: [
            { title: "AI lè ràn ọ́ lọ́wọ́ láti", bullets: ["Ṣàlàyé àwọn ọ̀rọ̀ owó", "Ṣe tábìlì ìṣúná", "Yí àkọsílẹ̀ owó-ìsan padà sí ètò"] },
            { title: "AI kì í ṣe", bullets: ["Olùdámọ̀ràn owó", "Ẹni tí ó máa ń tọ̀nà tàbí tí ìsọfúnni rẹ̀ jẹ́ tuntun nígbà gbogbo", "Ẹni tí ó ń pinnu: ìwọ ni"] },
            { title: "Má ṣe tẹ wọ̀nyí láéláé", bullets: ["Nọ́mbà SSN, DD-214 tàbí fáìlì VA", "Nọ́mbà báńkì tàbí káàdì, orúkọ wíwọlé, ọ̀rọ̀ aṣínà", "Lo nọ́mbà ìyípo dípò rẹ̀"] }
          ],
          tryIt: "Béèrè lọ́wọ́ olùrànlọ́wọ́ AI: \"Ṣàlàyé ìyàtọ̀ láàárín ohun tí a nílò àti ohun tí a fẹ́ nínú ìṣúná oṣooṣù, pẹ̀lú àpẹẹrẹ mẹ́ta fún ọ̀kọ̀ọ̀kan.\" Ṣàyẹ̀wò pé kò sí ìsọfúnni àdáni nínú prompt rẹ kí o tó fi ránṣẹ́.",
          youCanNow: "béèrè ìbéèrè owó lọ́wọ́ olùrànlọ́wọ́ AI láìléwu, kí o sì mọ ohun tí o máa ṣàyẹ̀wò níbòmíì.",
          quickCheck: [
            { objective: "O1", q: "Kí ni ọ̀nà tí kò léwu jù láti sọ fún AI nípa owó ọkọ̀ tí ò ń san?", options: ["Tẹ nọ́mbà àkáǹtì gbèsè rẹ", "Gbé àwòrán ìwé àkọsílẹ̀ báńkì rẹ sókè", "Tẹ nọ́mbà káàdì rẹ kí ó lè ṣàyẹ̀wò", "\"Owó ọkọ̀ nǹkan bí $350 lóṣù\""], answer: 3, why: "Nọ́mbà ìyípo ń fún AI ní ohun tí ó nílò láìsí ìsọfúnni àdáni kankan." },
            { objective: "O1", q: "AI ṣàlàyé òfin owó kan, ó sì fúnni ní iye èlé kan. Kí ni o máa ṣe?", options: ["Lò ó lẹ́sẹ̀kẹsẹ̀", "Ṣàyẹ̀wò òfin àti iye èlé náà pẹ̀lú orísun ìjọba", "Béèrè lọ́wọ́ àjèjì kan lórí ayélujára", "Má ṣe ka ìdáhùn AI kankan sí mọ́ láéláé"], answer: 1, why: "AI lè ṣàlàyé, ṣùgbọ́n a gbọdọ̀ ṣàyẹ̀wò òfin àti iye èlé pẹ̀lú orísun ìjọba." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ṣíṣe ìṣúná oṣooṣù ti ìgbésí ayé ará ìlú",
          minutes: 6,
          goal: "Ṣe tábìlì ìṣúná oṣooṣù pẹ̀lú olùrànlọ́wọ́ AI ní lílo nọ́mbà ìyípo.",
          text: [
            "Nígbà tí o wà nínú iṣẹ́ ológun, wọ́n lè ti bójú tó àwọn ìnáwó kan tàbí kí wọ́n san wọ́n bí owó ìrànlọ́wọ́ (allowances), bí owó ilé àti owó oúnjẹ, àti ìtọ́jú ìlera nípasẹ̀ TRICARE (ètò ìlera ológun US). Nígbà tí o bá kúrò nínú iṣẹ́, ọ̀pọ̀ nínú wọn máa yí padà tàbí dúró. Ìṣúná ará ìlú rẹ gbọdọ̀ bójú tó wọn láti inú owó oṣù tàbí àǹfààní rẹ. Ṣàyẹ̀wò owó ìkẹyìn àti àǹfààní tìrẹ pẹ̀lú ọ́fíìsì ìṣúná rẹ, DFAS (ẹ̀ka tí ó ń san owó ológun) tàbí VA dípò kí o méfò.",
            "Bẹ̀rẹ̀ pẹ̀lú ẹgbẹ́ mẹ́rin: owó tó ń wọlé (owó oṣù, àǹfààní), ohun tí o nílò (owó ilé, iná àti omi, oúnjẹ, ìrìnnà, ìbánigbófò, ìlera), ohun tí o fẹ́ (jíjẹun níta, owó ìforúkọsílẹ̀ oṣooṣù), àti ìfowópamọ́ àti sísan gbèsè. Ní kí AI ṣe tábìlì náà kí ó sì ṣe àròpọ̀ ẹgbẹ́ kọ̀ọ̀kan.",
            "Àpẹẹrẹ prompt: \"Ṣe tábìlì ìṣúná oṣooṣù. Owó tó ń wọlé nǹkan bí $3,800. Owó ilé $1,200, iná àti omi $200, oúnjẹ ọjà $450, owó ọkọ̀ $350, epo $160, fóònù $70, ìbánigbófò $150, jíjẹun níta $200, ìforúkọsílẹ̀ oṣooṣù $40. Fi àròpọ̀ àti ohun tó kù hàn.\""
          ],
          steps: ["Kọ owó tó ń wọlé lóṣooṣù sílẹ̀ pẹ̀lú nọ́mbà ìyípo.", "Kọ ohun tí o nílò, ohun tí o fẹ́, ìfowópamọ́ àti sísan gbèsè sílẹ̀.", "Ní kí AI ṣe tábìlì pẹ̀lú àròpọ̀ àti ohun tó kù.", "Fi àwọn ìnáwó tí wọ́n bójú tó nígbà iṣẹ́ ológun tí wọn kò bójú tó mọ́ kún un.", "Ṣàyẹ̀wò ìṣirò náà fúnra rẹ pẹ̀lú ẹ̀rọ ìṣirò."],
          words: [["Owó ìrànlọ́wọ́ (allowance)", "owó tí wọ́n ń san nínú iṣẹ́ ológun fún ìnáwó bí ilé tàbí oúnjẹ."], ["Ohun tí o nílò", "ìnáwó tí o gbọdọ̀ san láti gbé ayé àti láti ṣiṣẹ́, bí owó ilé."], ["Ohun tí o fẹ́", "ìnáwó tí o lè dín kù, bí jíjẹun níta."]],
          slides: [
            { title: "Ohun tí ó ń yí padà lẹ́yìn iṣẹ́ ológun", bullets: ["Owó ìrànlọ́wọ́ bí ti ilé àti oúnjẹ lè dúró", "Ètò ìlera lè yí padà", "Ṣàyẹ̀wò owó oṣù àti àǹfààní tìrẹ lọ́dọ̀ ìjọba"] },
            { title: "Ẹgbẹ́ mẹ́rin nínú ìṣúná", bullets: ["Owó tó ń wọlé", "Ohun tí o nílò", "Ohun tí o fẹ́", "Ìfowópamọ́ àti sísan gbèsè"] },
            { title: "Jẹ́ kí AI ṣe tábìlì náà", bullets: ["Fún un ní nọ́mbà ìyípo", "Béèrè àròpọ̀ àti ohun tó kù", "Ṣàyẹ̀wò ìṣirò náà fúnra rẹ"] }
          ],
          tryIt: "Ní kí olùrànlọ́wọ́ AI ṣe tábìlì ìṣúná oṣooṣù rẹ pẹ̀lú nọ́mbà ìyípo. Fi ìlà kan kún un fún ìnáwó tí wọ́n bójú tó nígbà tí o wà nínú iṣẹ́ ológun. Ṣàyẹ̀wò àwọn àròpọ̀ pẹ̀lú ẹ̀rọ ìṣirò.",
          youCanNow: "ṣe tábìlì ìṣúná oṣooṣù ará ìlú pẹ̀lú nọ́mbà ìyípo, kí o sì ṣàyẹ̀wò àwọn àròpọ̀ rẹ̀.",
          quickCheck: [
            { objective: "O2", q: "Kí ni ìyàtọ̀ láàárín ohun tí o nílò àti ohun tí o fẹ́ nínú ìṣúná?", options: ["Ohun tí o nílò jẹ́ ohun tí o gbọdọ̀ san, bí owó ilé; ohun tí o fẹ́ jẹ́ ohun tí o lè dín kù", "Ohun tí o nílò jẹ́ ohunkóhun tí o fẹ́ràn", "Ohun tí o fẹ́ máa ń wọ́n jù nígbà gbogbo", "Kò sí ìyàtọ̀"], answer: 0, why: "Ohun tí o nílò jẹ́ ìnáwó tí o gbọdọ̀ san; ohun tí o fẹ́ jẹ́ àṣàyàn tí o lè dín kù tí owó bá há." },
            { objective: "O2", q: "Tábìlì ìṣúná AI sọ pé àròpọ̀ rẹ jẹ́ $2,950, ṣùgbọ́n àwọn ìlà dà bí ẹni pé wọ́n pọ̀ jù bẹ́ẹ̀ lọ. Kí ni o máa ṣe?", options: ["Gba àròpọ̀ AI gbọ́", "Pa tábìlì náà rẹ́", "Ṣe àròpọ̀ àwọn ìlà fúnra rẹ lórí ẹ̀rọ ìṣirò kí o sì tún àròpọ̀ náà ṣe", "Yí àròpọ̀ náà sí $3,000"], answer: 2, why: "AI lè ṣàṣìṣe nínú ìṣirò, nítorí náà ìwọ fúnra rẹ ni o máa ṣàyẹ̀wò àwọn àròpọ̀." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Dídá jìbìtì owó tí wọ́n ń darí sí àwọn ológun àtijọ́ mọ̀",
          minutes: 5,
          goal: "Dá àwọn àmì ìkìlọ̀ jìbìtì owó mọ̀, kí o sì mọ ohun tí o máa ṣe.",
          text: [
            "Àwọn onjìbìtì ń dojú kọ àwọn ológun àtijọ́ nítorí àǹfààní àti owó ìfẹ̀yìntì wọn. Àwọn pańpẹ́ tí ó wọ́pọ̀ ni ìfilọ̀ láti \"ra\" owó ìfẹ̀yìntì tàbí àǹfààní ọjọ́ iwájú rẹ fún owó odidi báyìí (pension advance), àwọn tí ó ń gba owó láti fi ẹ̀sùn (claim) VA sílẹ̀ tàbí láti \"gbé\" ìpele (rating) rẹ sókè, ìfilọ̀ iṣẹ́ ayédèrú, àti ìpè tí ó ń ṣe bí ẹni pé VA ni.",
            "Consumer Financial Protection Bureau (CFPB, ẹ̀ka ìjọba US tí ó ń dáàbò bo àwọn ènìyàn nínú ọ̀rọ̀ owó) ń kìlọ̀ fún àwọn ológun àti ológun àtijọ́ nípa pension advance, ó sì ń ṣàlàyé ẹ̀tọ́ owó rẹ. Àwọn onjìbìtì náà ti ń lo AI báyìí, láti kọ ọ̀rọ̀ tí ó dà bí gidi, kódà láti ṣe àfarawé ohùn.",
            "Àwọn àmì ìkìlọ̀: wọ́n ń kán ọ lójú, wọ́n ń béèrè owó ṣáájú, wọ́n ń béèrè gift card tàbí wire transfer (fífi owó ránṣẹ́ ní kíákíá), tàbí wọ́n ń béèrè kóòdù tí wọ́n fi ránṣẹ́ sí fóònù rẹ. Dúró, gé ìpè náà, kí o sì pe padà pẹ̀lú nọ́mbà tí o fúnra rẹ rí lórí va.gov tàbí ojú-òpó gidi náà. O tún lè lẹ ọ̀rọ̀ tí ó fura sí sínú AI kí o sì béèrè \"Kí ni àwọn àmì ìkìlọ̀ nínú èyí?\", lẹ́yìn tí o bá ti yọ ìsọfúnni àdáni rẹ kúrò."
          ],
          steps: ["Ṣàkíyèsí kíkán ọ lójú, owó ṣáájú, gift card, wire transfer tàbí ìbéèrè kóòdù.", "Dúró, má ṣe san tàbí pín ohunkóhun.", "Wá nọ́mbà gidi fúnra rẹ kí o sì pe padà.", "Yọ ìsọfúnni àdáni kúrò, lẹ́yìn náà ní kí AI tọ́ka sí àwọn àmì ìkìlọ̀.", "Fi ẹjọ́ sùn tí o bá ti pàdánù owó."],
          words: [["Pension advance", "ìfilọ̀ láti san owó odidi fún ọ báyìí ní pàṣípààrọ̀ fún owó ìfẹ̀yìntì tàbí àǹfààní ọjọ́ iwájú rẹ, tí ó sábà máa ń wọ́n gan-an."], ["Jìbìtì", "ẹ̀tàn láti jí owó tàbí ìsọfúnni."]],
          slides: [
            { title: "Àwọn pańpẹ́ tí ó wọ́pọ̀", bullets: ["Ìfilọ̀ pension advance", "Owó láti fi ẹ̀sùn VA sílẹ̀ tàbí láti \"gbé\" ìpele sókè", "Ìfilọ̀ iṣẹ́ ayédèrú àti ìpè VA ayédèrú"] },
            { title: "Àwọn àmì ìkìlọ̀", bullets: ["Wọ́n ń kán ọ lójú", "Owó ṣáájú, gift card tàbí wire transfer", "Wọ́n ń béèrè kóòdù tí wọ́n fi ránṣẹ́ sí fóònù rẹ"] },
            { title: "Ohun tí o máa ṣe", bullets: ["Dúró. Má ṣe san tàbí pín nǹkan", "Pe padà pẹ̀lú nọ́mbà tí o fúnra rẹ rí", "Ní kí AI tọ́ka sí àwọn àmì ìkìlọ̀"] }
          ],
          sources: [{ name: "Consumer Financial Protection Bureau: Ìgbésí ayé owó ológun (Military financial lifecycle)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Kọ àpẹẹrẹ kúkúrú ọ̀rọ̀ jìbìtì kan tí ó ń fi \"gbígbé ìpele VA rẹ sókè fún owó\" lọni. Ní kí olùrànlọ́wọ́ AI kọ àwọn àmì ìkìlọ̀ rẹ̀ sílẹ̀. Lẹ́yìn náà kọ ohun tí o máa ṣe tí o bá gbà á.",
          youCanNow: "dá àwọn àmì ìkìlọ̀ jìbìtì owó tí wọ́n ń darí sí àwọn ológun àtijọ́ mọ̀, kí o sì dáhùn láìléwu.",
          quickCheck: [
            { objective: "O3", q: "Èwo ni àmì ìkìlọ̀ jìbìtì?", options: ["Lẹ́tà tí o ní kí VA fi ránṣẹ́", "Àkọsílẹ̀ oṣooṣù báńkì rẹ lásán", "Kíkán ọ lójú láti sanwó, pẹ̀lú gift card tàbí owó ṣáájú", "Fọ́ọ̀mù ọ̀fẹ́ lórí va.gov"], answer: 2, why: "Kíkán ọ lójú àti bíbéèrè gift card tàbí owó ṣáájú jẹ́ àmì jìbìtì tí a mọ̀ dáadáa." },
            { objective: "O3", q: "Text kan sọ pé àǹfààní rẹ máa dúró àyàfi tí o bá fi kóòdù tí o ṣẹ̀ṣẹ̀ gbà ránṣẹ́. Kí ni o máa ṣe?", options: ["Fi kóòdù náà ránṣẹ́ kíákíá", "Fèsì láti béèrè ẹni tí wọ́n jẹ́", "Fi ìdajì kóòdù náà ránṣẹ́", "Má ṣe fèsì; kàn sí VA pẹ̀lú nọ́mbà tí o fúnra rẹ rí"], answer: 3, why: "Àwọn ẹ̀ka ìjọba gidi kì í béèrè kóòdù rẹ; o máa kàn sí wọn pẹ̀lú nọ́mbà tí o fúnra rẹ rí." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Owó lẹ́yìn iṣẹ́ ológun",
        questions: [
          { objective: "O1", q: "Kí ni o yẹ kí o tẹ sínú AI nígbà tí o bá ń béèrè ìrànlọ́wọ́ ìṣúná?", options: ["Nọ́mbà àkáǹtì báńkì rẹ", "\"Owó ilé nǹkan bí $1,200\"", "Nọ́mbà Social Security rẹ", "Ọ̀rọ̀ aṣínà báńkì orí ayélujára rẹ"], answer: 1, why: "Nọ́mbà ìyípo ń fún AI ní ohun tí ó nílò láìsí ìsọfúnni àdáni." },
          { objective: "O1", q: "Ọ̀nà tó dára jù láti lo AI fún owó ni láti:", options: ["Ṣe ìpinnu ìkẹyìn fún ọ", "Yan ìdókòwò fún ọ", "Ṣàlàyé, ṣètò àti ṣe ètò tí o máa ṣàyẹ̀wò lẹ́yìn náà", "Pa ọ̀rọ̀ aṣínà rẹ mọ́"], answer: 2, why: "AI ń ràn ọ́ lọ́wọ́ láti lóye àti láti ṣètò; ìwọ ló ń ṣàyẹ̀wò ìpinnu pẹ̀lú orísun ìjọba." },
          { objective: "O2", q: "Kí ló dé tí ìṣúná ará ìlú fi nílò àwọn ìlà tí ìṣúná ológun lè má ní?", options: ["Àwọn ará ìlú kì í san owó ilé", "Owó orí kéré sí i", "Nítorí AI sọ bẹ́ẹ̀", "Àwọn owó ìrànlọ́wọ́ àti ìnáwó tí wọ́n bójú tó kan máa ń yí padà tàbí dúró lẹ́yìn iṣẹ́ ológun"], answer: 3, why: "Wọ́n lè ti bójú tó ìnáwó bí ilé tàbí san án bí owó ìrànlọ́wọ́ nígbà iṣẹ́ ológun." },
          { objective: "O3", q: "Ẹnìkan fẹ́ fún ọ ní owó báyìí fún owó ìfẹ̀yìntì ọjọ́ iwájú rẹ. Èyí jẹ́:", options: ["Pension advance, tí CFPB ń kìlọ̀ nípa rẹ̀", "Owó oṣù lásán", "Àǹfààní VA", "Owó orí tí wọ́n dá padà"], answer: 0, why: "CFPB ń kìlọ̀ fún àwọn ológun àti ológun àtijọ́ nípa ìfilọ̀ pension advance." },
          { objective: "O3", q: "Ẹnìkan pè, ó sọ pé láti VA ni òun ti ń pè, ó sì béèrè kóòdù tí wọ́n fi ránṣẹ́ sí fóònù rẹ. O máa:", options: ["Ka kóòdù náà fún wọn", "Gé ìpè náà kí o sì pe VA pẹ̀lú nọ́mbà tí o fúnra rẹ rí", "Fún wọn ní SSN rẹ dípò rẹ̀", "Fi gift card ránṣẹ́"], answer: 1, why: "Àwọn ọ́fíìsì gidi kì í béèrè kóòdù yẹn; pe padà pẹ̀lú nọ́mbà tí o mọ̀ pé ó jẹ́ gidi." }
        ]
      }
    },
    {
      name: "Orí 2: Àfojúsùn, ètò ọ̀sẹ̀ àti ìrànlọ́wọ́ gidi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ṣíṣe àfojúsùn fún owó àti ìgbésí ayé",
          minutes: 5,
          goal: "Kọ àfojúsùn mẹ́ta tó yé tí ó ní nọ́mbà àti ọjọ́, kí o sì pín ọ̀kan sí ìgbésẹ̀ pẹ̀lú AI.",
          text: [
            "Àfojúsùn máa ń ṣiṣẹ́ nígbà tí ó bá ṣe kedere, tí ó ṣeé díwọ̀n, tí ó sì ní ọjọ́: \"Fi $1,000 pamọ́ fún pàjáwìrì kí ó tó di 31 March\" dára ju \"fi owó púpọ̀ sí i pamọ́\" lọ. Bẹ́ẹ̀ náà ló rí fún àfojúsùn ìgbésí ayé: \"parí ẹ̀kọ́ ìwé-ẹ̀rí mi kí ó tó di June\" tàbí \"sáré lẹ́ẹ̀mẹta lọ́sẹ̀\".",
            "Kọ àfojúsùn mẹ́ta: àfojúsùn owó kan, àfojúsùn iṣẹ́ tàbí ẹ̀kọ́ kan, àti àfojúsùn ìlera tàbí ẹbí kan. Lẹ́yìn náà ní kí AI pín ọ̀kan sí ìgbésẹ̀ ọ̀sẹ̀: \"Pín àfojúsùn yìí sí ìgbésẹ̀ ọ̀sẹ̀: fi $1,000 pamọ́ kí ó tó di 31 March. Mo lè dín nǹkan bí $60 kù lọ́sẹ̀ láti inú jíjẹun níta àti ìforúkọsílẹ̀ oṣooṣù.\"",
            "Consumer Financial Protection Bureau ní àwọn irinṣẹ́ ọ̀fẹ́ fún àwọn ológun, pẹ̀lú ìwé iṣẹ́ fún ṣíṣe àfojúsùn. Lò ó pẹ̀lú ètò AI rẹ."
          ],
          steps: ["Kọ àfojúsùn owó kan, àfojúsùn iṣẹ́ kan, àti àfojúsùn ìlera tàbí ẹbí kan.", "Fún ọ̀kọ̀ọ̀kan ní nọ́mbà àti ọjọ́.", "Ní kí AI pín àfojúsùn kan sí ìgbésẹ̀ ọ̀sẹ̀.", "Fi ìgbésẹ̀ àkọ́kọ́ sínú kàlẹ́ńdà rẹ."],
          words: [["Owó pàjáwìrì", "owó tí a fi pamọ́ fún ìnáwó òjijì bí àtúnṣe ọkọ̀."], ["Ṣeé díwọ̀n", "o lè kà á, nítorí náà o máa mọ ìgbà tí ó bá parí."]],
          slides: [
            { title: "Àfojúsùn tí ó ń ṣiṣẹ́", bullets: ["Ó ṣe kedere", "Ó ṣeé díwọ̀n: nọ́mbà kan", "Ọjọ́ kan"] },
            { title: "Àfojúsùn mẹ́ta", bullets: ["Owó", "Iṣẹ́ tàbí ẹ̀kọ́", "Ìlera tàbí ẹbí"] },
            { title: "Pín in sí wẹ́wẹ́", bullets: ["Ní kí AI fún ọ ní ìgbésẹ̀ ọ̀sẹ̀", "Fi ìgbésẹ̀ àkọ́kọ́ sínú kàlẹ́ńdà rẹ", "CFPB ní ìwé iṣẹ́ ọ̀fẹ́ fún ṣíṣe àfojúsùn"] }
          ],
          sources: [{ name: "Consumer Financial Protection Bureau: Ìgbésí ayé owó ológun (ìwé iṣẹ́ fún ṣíṣe àfojúsùn)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Kọ àfojúsùn mẹ́ta rẹ pẹ̀lú nọ́mbà àti ọjọ́. Ní kí olùrànlọ́wọ́ AI pín àfojúsùn owó rẹ sí ìgbésẹ̀ ọ̀sẹ̀.",
          youCanNow: "kọ àfojúsùn tó yé, kí o sì pín ọ̀kan sí ìgbésẹ̀ ọ̀sẹ̀ pẹ̀lú ìrànlọ́wọ́ AI.",
          quickCheck: [
            { objective: "O4", q: "Kí ló ń mú kí àfojúsùn yé?", options: ["Ó dún bí ohun ńlá", "Ó ní nọ́mbà àti ọjọ́", "Kò ní ọjọ́ ìparí", "Ẹlòmíì ló kọ ọ́"], answer: 1, why: "Nọ́mbà àti ọjọ́ ń jẹ́ kí o rí bóyá o ti dé àfojúsùn náà." },
            { objective: "O4", q: "O fẹ́ fi $600 pamọ́ ní oṣù 3. Kí ni o máa fún AI kí ó lè pín in sí ìgbésẹ̀?", options: ["Àfojúsùn náà, ọjọ́ náà àti iye tí o lè fi sí i lóòótọ́", "Orúkọ wíwọlé báńkì rẹ", "Ọ̀rọ̀ náà \"fi pamọ́\" nìkan", "Nọ́mbà Social Security rẹ"], answer: 0, why: "Àfojúsùn, ọjọ́ àti iye tí ó ṣeé ṣe ń jẹ́ kí AI ṣe ìgbésẹ̀ ọ̀sẹ̀ tó wúlò." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ṣíṣe ètò ọ̀sẹ̀",
          minutes: 5,
          goal: "Ṣe ètò ọ̀sẹ̀ tí ó ní àkókò àfojúsùn mẹ́ta pẹ̀lú olùrànlọ́wọ́ AI.",
          text: [
            "Ìgbésí ayé ológun ń lọ ní ìbámu pẹ̀lú ètò àkókò. Ìgbésí ayé ará ìlú kì í sábà rí bẹ́ẹ̀, ọ̀pọ̀ ológun àtijọ́ sì sọ pé pípàdánù ètò yẹn wà lára ohun tó le jù nínú ìyípadà náà. O lè ṣe ètò tìrẹ.",
            "Fún AI ní àwọn àkókò tí kò ṣeé yí padà àti àwọn àfojúsùn rẹ: \"Mo ń ṣiṣẹ́ láti agogo 8 sí 5 láti ọjọ́ Ajé dé ọjọ́ Ẹtì. Àwọn àfojúsùn mi: kẹ́kọ̀ọ́ fún ìwé-ẹ̀rí mi fún wákàtí 4 lọ́sẹ̀, ṣe eré ìdárayá lẹ́ẹ̀mẹta lọ́sẹ̀, ṣàyẹ̀wò ìṣúná mi lẹ́ẹ̀kan lọ́sẹ̀. Ṣe ètò ọ̀sẹ̀ tó rọrùn bí tábìlì.\"",
            "Jẹ́ kí ó ṣeé ṣe. Fi àkókò ìsinmi àti àkókò ẹbí sílẹ̀. Ṣàyẹ̀wò ètò náà ní ọjọ́ Àìkú kọ̀ọ̀kan kí o sì tún un ṣe; ètò jẹ́ ètò títí ìgbà tí ó bá pàdé ayé gidi, o sì máa ń yí padà bí ó ti yẹ."
          ],
          steps: ["Kọ àwọn àkókò tí kò ṣeé yí padà sílẹ̀: iṣẹ́, ilé-ẹ̀kọ́, ẹbí.", "Kọ àfojúsùn mẹ́ta rẹ láti Ẹ̀kọ́ 4 sílẹ̀.", "Ní kí AI ṣe tábìlì ètò ọ̀sẹ̀.", "Fi àkókò ìsinmi àti àkókò ẹbí kún un.", "Ṣàyẹ̀wò rẹ̀ kí o sì tún un ṣe ní ọ̀sẹ̀ kọ̀ọ̀kan."],
          words: [["Ètò ọ̀sẹ̀ (routine)", "àwọn nǹkan tí o ń ṣe ní àkókò kan náà ní ọ̀sẹ̀ kọ̀ọ̀kan."], ["Àkókò àfojúsùn (time block)", "àkókò kan tí o yà sọ́tọ̀ lórí kàlẹ́ńdà rẹ fún iṣẹ́ kan."]],
          slides: [
            { title: "Tún ètò rẹ kọ́", bullets: ["Ìgbésí ayé ológun ní ètò àkókò", "Ìgbésí ayé ará ìlú kì í sábà ní", "O lè ṣe ètò tìrẹ"] },
            { title: "Ní kí AI ṣe tábìlì ọ̀sẹ̀", bullets: ["Àwọn àkókò rẹ tí kò ṣeé yí padà", "Àkókò àfojúsùn mẹ́ta rẹ", "Àkókò ìsinmi àti ti ẹbí"] },
            { title: "Ṣàyẹ̀wò rẹ̀ lọ́sẹ̀ọ̀sẹ̀", bullets: ["Wò ó ní ọjọ́ Àìkú kọ̀ọ̀kan", "Tún ohun tí kò ṣiṣẹ́ ṣe", "Yí padà bí ó ti yẹ, bí nínú ètò èyíkéyìí"] }
          ],
          tryIt: "Ní kí olùrànlọ́wọ́ AI ṣe ètò ọ̀sẹ̀ rẹ pẹ̀lú àkókò àfojúsùn mẹ́ta, pẹ̀lú àyẹ̀wò ìṣúná ọ̀sẹ̀ kan. Fi í sínú kàlẹ́ńdà fóònù rẹ tàbí tẹ̀ ẹ́ jáde.",
          youCanNow: "ṣe ètò ọ̀sẹ̀ tí ó ṣeé ṣe, tí ó sì ní àkókò fún àwọn àfojúsùn rẹ.",
          quickCheck: [
            { objective: "O5", q: "Kí ni àkókò àfojúsùn nínú ètò ọ̀sẹ̀?", options: ["Ọ̀sẹ̀ tí kò ní ètò kankan", "Ìrántí láti san owó fún onjìbìtì", "Àkọsílẹ̀ gbogbo iṣẹ́ tí o ti ṣe rí", "Àkókò kan ní ọ̀sẹ̀ kọ̀ọ̀kan láti ṣiṣẹ́ lórí àfojúsùn kan"], answer: 3, why: "Àkókò àfojúsùn jẹ́ àkókò tí o yà sọ́tọ̀ ní ọjọ́ kan déédéé láti tẹ̀síwájú lórí àfojúsùn kan." },
            { objective: "O5", q: "O fo àkókò àfojúsùn méjì ní ọ̀sẹ̀ yìí nítorí àwọn ìpàdé. Kí ni o máa ṣe?", options: ["Ṣàyẹ̀wò ètò náà kí o sì gbé àwọn àkókò náà sí ìgbà tí ó rọ̀ ọ́ lọ́rùn", "Jáwọ́ nínú ètò náà", "Fi àkókò márùn-ún míì kún un", "Má ṣe ṣètò ìpàdé mọ́ láéláé"], answer: 0, why: "Ètò ọ̀sẹ̀ máa ń ṣiṣẹ́ nígbà tí o bá ń ṣàyẹ̀wò rẹ̀ lọ́sẹ̀ọ̀sẹ̀, tí o sì ń tún un ṣe láti bá ayé gidi mu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rírí ìrànlọ́wọ́ owó ọ̀fẹ́ láti orísun ìjọba",
          minutes: 5,
          goal: "Yan orísun ìjọba tó tọ́ fún ìbéèrè owó kan, kí o sì kọ ìbéèrè náà sílẹ̀.",
          text: [
            "Àwọn ìbéèrè owó kan nílò ènìyàn tàbí ìdáhùn ìjọba: àǹfààní VA àti owó sísan, gbèsè, owó orí, ìṣòro credit (ìtàn gbèsè), àṣàyàn ìfẹ̀yìntì, tàbí ohunkóhun tó jẹ mọ́ òfin. AI lè ràn ọ́ lọ́wọ́ láti kọ ìbéèrè náà kedere, ṣùgbọ́n kò yẹ kí ó jẹ́ ìdáhùn ìkẹyìn.",
            "Ìrànlọ́wọ́ ọ̀fẹ́ láti orísun ìjọba ni: VA (va.gov) fún àǹfààní àti owó sísan VA; Military OneSource, tí ó ń fúnni ní ìdámọ̀ràn owó ọ̀fẹ́ fún àwọn ológun àti àwọn ẹbí wọn tí ó yẹ (wo ìtọ́sọ́nà ẹ̀tọ́ wọn láti mọ̀ bóyá o ṣì yẹ lẹ́yìn tí o kúrò nínú iṣẹ́); àti Consumer Financial Protection Bureau (consumerfinance.gov) fún ẹ̀tọ́ owó rẹ àti fún fífi ẹjọ́ sùn.",
            "Ìdókòwò àti àkáǹtì ìfẹ̀yìntì jẹ́ ìpinnu ti ara ẹni. Ẹ̀kọ́ yìí kò dábàá èyíkéyìí. Bá akọ́ṣẹ́mọṣẹ́ tó tóótun tí o gbẹ́kẹ̀ lé sọ̀rọ̀, kí o sì ṣọ́ra fún ẹnikẹ́ni tí ó ń ṣèlérí èrè ńlá ní kíákíá."
          ],
          steps: ["Kọ ìbéèrè owó rẹ ní gbólóhùn kan tàbí méjì.", "Ní kí AI ràn ọ́ lọ́wọ́ láti mú un yé, láìsí ìsọfúnni àdáni.", "Yan orísun tó tọ́: VA, Military OneSource tàbí CFPB.", "Kàn sí wọn pẹ̀lú nọ́mbà tàbí ojú-òpó tí o fúnra rẹ rí."],
          words: [["Ìdámọ̀ràn owó", "ìrànlọ́wọ́ ọ̀fẹ́ tàbí olówó pọ́ọ́kú láti ọ̀dọ̀ olùdámọ̀ràn tí a kọ́ láti ṣètò owó àti láti yanjú ìṣòro owó."], ["CFPB", "Consumer Financial Protection Bureau: ẹ̀ka ìjọba U.S. tí ó ń dáàbò bo àwọn ènìyàn nínú ọ̀rọ̀ owó."]],
          slides: [
            { title: "Àwọn ìbéèrè kan nílò ìdáhùn ìjọba", bullets: ["Àǹfààní àti owó sísan VA", "Gbèsè, owó orí àti ìṣòro credit", "Ìbéèrè nípa ìfẹ̀yìntì àti òfin"] },
            { title: "Ìrànlọ́wọ́ ọ̀fẹ́ láti orísun ìjọba", bullets: ["va.gov fún àǹfààní VA", "Ìdámọ̀ràn owó Military OneSource", "consumerfinance.gov fún ẹ̀tọ́ owó"] },
            { title: "Kò sí ìmọ̀ràn ìdókòwò níbí", bullets: ["Ìdókòwò jẹ́ ìpinnu ti ara ẹni", "Bá akọ́ṣẹ́mọṣẹ́ tó tóótun sọ̀rọ̀", "Ṣọ́ra fún ìlérí ńlá, kíákíá"] }
          ],
          sources: [
            { name: "Military OneSource: Ìdámọ̀ràn owó (Financial counseling)", url: "https://www.militaryonesource.mil/benefits/financial-counseling/" },
            { name: "Consumer Financial Protection Bureau: Ìgbésí ayé owó ológun (Military financial lifecycle)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" },
            { name: "VA: Iṣẹ́ àti ìgbanisíṣẹ́ (àǹfààní àti ìdámọ̀ràn VA)", url: "https://www.va.gov/careers-employment/" }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: parí ètò ojú-ewé kan rẹ: ìṣúná oṣooṣù rẹ láti Ẹ̀kọ́ 2 pẹ̀lú ìlà ìyípadà owó, ètò ọ̀sẹ̀ rẹ pẹ̀lú àkókò àfojúsùn mẹ́ta, àti ìbéèrè owó kan pẹ̀lú orísun ìjọba tí o máa mú un lọ. Ṣàyẹ̀wò pé kò sí nọ́mbà àkáǹtì tàbí ìsọfúnni àdáni nínú rẹ̀.",
          youCanNow: "yan orísun ìjọba ọ̀fẹ́ tó tọ́ fún ìbéèrè owó kan, kí o sì mú ìbéèrè tó yé lọ bá a.",
          quickCheck: [
            { objective: "O6", q: "Kí ló dé tí o fi máa kọ ìbéèrè owó rẹ sílẹ̀ kí o tó kàn sí orísun ìjọba?", options: ["Kí o lè fi í sórí ayélujára", "Kí o lè béèrè lọ́wọ́ ibi tó tọ́ ní kedere, kí o sì rí ìdáhùn tó wúlò", "Kí AI lè dáhùn rẹ̀ dípò wọn", "Kí o má bàa nílò láti béèrè mọ́"], answer: 1, why: "Ìbéèrè tí a kọ sílẹ̀ kedere ń ran olùdámọ̀ràn tàbí ẹ̀ka ìjọba lọ́wọ́ láti fún ọ ní ìdáhùn tó tọ́." },
            { objective: "O6", q: "O ní ìbéèrè nípa owó sísan VA rẹ. Níbo ni o máa mú un lọ?", options: ["Ẹgbẹ́ kan lórí ìkànnì àjọlò", "Olùrànlọ́wọ́ AI nìkan", "VA ní va.gov", "Ẹni tí ó pè ọ́ tí ó fẹ́ ràn ọ́ lọ́wọ́"], answer: 2, why: "VA fúnra rẹ̀ ni ìbéèrè nípa owó sísan VA máa ń lọ." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Àfojúsùn, ètò ọ̀sẹ̀ àti ìrànlọ́wọ́ gidi",
        questions: [
          { objective: "O4", q: "Èwo ni àfojúsùn tó dára jù?", options: ["\"Fi owó púpọ̀ sí i pamọ́\"", "\"Mọ bí a ṣe ń ná owó dáadáa sí i\"", "\"Fi $1,000 pamọ́ fún pàjáwìrì kí ó tó di 31 March\"", "\"Ra ilé ní ọjọ́ kan\""], answer: 2, why: "Ó ṣe kedere, ó ṣeé díwọ̀n, ó sì ní ọjọ́." },
          { objective: "O5", q: "Ọ̀pọ̀ ológun àtijọ́ ń ṣàárò ètò lẹ́yìn iṣẹ́ ológun. Kí ló ń ṣèrànwọ́?", options: ["Kíkọ̀ láti ṣètò rárá", "Jíjẹ́ kí AI máa darí ayé rẹ", "Ṣíṣiṣẹ́ ní gbogbo wákàtí", "Ṣíṣe ètò ọ̀sẹ̀ àti ṣíṣàyẹ̀wò rẹ̀"], answer: 3, why: "Ètò ọ̀sẹ̀ tí ó ṣeé ṣe, tí o ń ṣàyẹ̀wò lọ́sẹ̀ọ̀sẹ̀, ń mú ètò padà wá." },
          { objective: "O5", q: "Ètò ọ̀sẹ̀ rẹ kò ṣiṣẹ́ ní ọ̀sẹ̀ yìí. O máa:", options: ["Ṣàyẹ̀wò rẹ̀ kí o sì tún un ṣe", "Jáwọ́ nínú ètò ọ̀sẹ̀", "Fi wákàtí iṣẹ́ púpọ̀ sí i kún un", "Pa kàlẹ́ńdà rẹ rẹ́"], answer: 0, why: "A máa ń tún ètò ṣe bí a ṣe ń kọ́ ohun tí ó ń ṣiṣẹ́." },
          { objective: "O6", q: "Orísun wo ló ń fúnni ní ìdámọ̀ràn owó ọ̀fẹ́ fún àwọn ológun?", options: ["Ìpolówó tí ó yọ jáde lójijì", "Military OneSource", "Ilé-iṣẹ́ pension advance", "Chatbot AI èyíkéyìí"], answer: 1, why: "Military OneSource ń fúnni ní ìdámọ̀ràn owó ọ̀fẹ́ fún àwọn ológun àti àwọn ẹbí wọn tí ó yẹ." },
          { objective: "O6", q: "AI dábàá ìdókòwò kan pàtó. Kí ni o yẹ kí o ṣe?", options: ["Rà á báyìí", "Sọ fún àwọn ọ̀rẹ́ láti rà á", "Kà á sí ohun tí a kò tíì ṣàyẹ̀wò, kí o sì bá akọ́ṣẹ́mọṣẹ́ tó tóótun sọ̀rọ̀", "Fi gbogbo owó tí o ti fi pamọ́ sínú rẹ̀"], answer: 2, why: "Ìdókòwò jẹ́ ìpinnu ti ara ẹni; AI kì í ṣe olùdámọ̀ràn owó." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI fún Àṣeyọrí nínú Owó àti Ìgbésí Ayé",
    questions: [
      { objective: "O1", q: "Olùrànlọ́wọ́ AI lè ràn ọ́ lọ́wọ́ pẹ̀lú owó nípa:", options: ["Pípa ọ̀rọ̀ aṣínà rẹ mọ́", "Ṣíṣàlàyé àwọn ọ̀rọ̀ àti ṣíṣe tábìlì ìṣúná", "Ṣíṣèlérí èrè", "Fífi ẹ̀sùn VA rẹ sílẹ̀ fún ọ"], answer: 1, why: "Ṣíṣàlàyé àti ṣíṣètò jẹ́ iṣẹ́ tí kò léwu, tí ó sì wúlò fún AI." },
      { objective: "O1", q: "Èwo ni kò léwu láti tẹ sínú AI?", options: ["Nọ́mbà DD-214 rẹ", "Nọ́mbà káàdì rẹ", "Ọ̀rọ̀ aṣínà rẹ", "\"Oúnjẹ ọjà nǹkan bí $450 lóṣù\""], answer: 3, why: "Nọ́mbà ìyípo láìsí ìsọfúnni àkáǹtì kò léwu." },
      { objective: "O1", q: "Ìdáhùn owó AI nípa òfin àti iye èlé yẹ kí a:", options: ["Ṣàyẹ̀wò rẹ̀ pẹ̀lú orísun ìjọba", "Gbà á gbọ́ nítorí ó dún bí ó dá a lójú", "Fi í sórí ayélujára", "Kọ̀ ọ́ sílẹ̀ pátápátá"], answer: 0, why: "AI lè ṣàṣìṣe tàbí kí ìsọfúnni rẹ̀ ti di àtijọ́ nípa òfin àti iye èlé." },
      { objective: "O2", q: "Ìṣúná ni:", options: ["Gbèsè kan", "Fọ́ọ̀mù owó orí", "Ètò fún owó tó ń wọlé àti tó ń jáde ní oṣù kọ̀ọ̀kan", "Àkáǹtì báńkì"], answer: 2, why: "Ìṣúná ń ṣètò owó tó ń wọlé àti ìnáwó." },
      { objective: "O2", q: "Èwo ni ohun tí o nílò?", options: ["Ìforúkọsílẹ̀ fún wíwo fíìmù", "Owó ilé", "Jíjẹun níta", "Eré fídíò tuntun"], answer: 1, why: "Owó ilé jẹ́ ìnáwó tí o gbọdọ̀ san láti gbé ayé." },
      { objective: "O2", q: "Lẹ́yìn tí o bá kúrò nínú iṣẹ́ ológun, àwọn ìnáwó wo ni o lè máa san fúnra rẹ báyìí?", options: ["Kò sí", "Tíkẹ́ẹ̀tì sinimá nìkan", "Ẹ̀bùn nìkan", "Ìnáwó tí wọ́n ti bójú tó rí tàbí tí wọ́n san bí owó ìrànlọ́wọ́, bí ilé"], answer: 3, why: "Owó ìrànlọ́wọ́ àti àwọn ìnáwó tí wọ́n bójú tó lè yí padà tàbí dúró lẹ́yìn iṣẹ́ ológun." },
      { objective: "O2", q: "Níbo ni o yẹ kí o ti fìdí owó ìkẹyìn àti àǹfààní tìrẹ múlẹ̀?", options: ["Ọ́fíìsì ìṣúná rẹ, DFAS tàbí VA", "Ọ̀rọ̀ kan lórí ìkànnì àjọlò", "Ìméfò AI", "Text láti ọ̀dọ̀ àjèjì"], answer: 0, why: "Àwọn ọ́fíìsì ìjọba ní nọ́mbà gidi tìrẹ." },
      { objective: "O2", q: "Lẹ́yìn tí AI bá ṣe tábìlì ìṣúná rẹ, o yẹ kí o:", options: ["Gba àwọn àròpọ̀ gbọ́", "Ṣàyẹ̀wò ìṣirò náà fúnra rẹ", "Fi í ránṣẹ́ sí àwọn àjèjì", "Fi orúkọ wíwọlé báńkì rẹ kún un"], answer: 1, why: "AI lè ṣàṣìṣe nínú ìṣirò; ṣàyẹ̀wò pẹ̀lú ẹ̀rọ ìṣirò." },
      { objective: "O3", q: "Ìfilọ̀ \"pension advance\" jẹ́:", options: ["Ètò VA kan", "Owó orí tí wọ́n dá padà", "Owó odidi báyìí fún owó sísan ọjọ́ iwájú rẹ, tí ó sábà máa ń wọ́n gan-an", "Owó ọ̀fẹ́"], answer: 2, why: "CFPB ń kìlọ̀ nípa irú ìfilọ̀ bẹ́ẹ̀." },
      { objective: "O3", q: "Ẹnìkan ń gba owó ṣáájú láti \"gbé ìpele VA rẹ sókè\". Èyí jẹ́:", options: ["Ohun lásán", "Ohun tí ó pọndandan", "Òfin VA", "Àmì ìkìlọ̀ jìbìtì"], answer: 3, why: "Owó ṣáájú àti ìlérí jẹ́ àmì jìbìtì tí ó wọ́pọ̀." },
      { objective: "O3", q: "Ọ̀rọ̀ kan ń kán ọ lójú láti sanwó pẹ̀lú gift card. O máa:", options: ["Dúró, o kò sì ní san", "Sanwó kíákíá", "Pín SSN rẹ", "Fún wọn ní kóòdù kan"], answer: 0, why: "Kíkán ọ lójú àti gift card jẹ́ àmì jìbìtì tí a mọ̀ dáadáa." },
      { objective: "O3", q: "Kí o tó lẹ ọ̀rọ̀ tí o fura sí sínú AI, o yẹ kí o:", options: ["Fi nọ́mbà àkáǹtì rẹ kún un", "Yọ ìsọfúnni àdáni rẹ kúrò", "Fi í ránṣẹ́ sí àwọn ọ̀rẹ́", "Fèsì sí ẹni tí ó fi ránṣẹ́"], answer: 1, why: "Yọ ìsọfúnni àdáni kúrò, lẹ́yìn náà ní kí AI wá àwọn àmì ìkìlọ̀." },
      { objective: "O4", q: "Àfojúsùn tó dára ní:", options: ["Kò ní ọjọ́", "Kò ní nọ́mbà", "Nọ́mbà àti ọjọ́", "Ìmọ̀lára nìkan"], answer: 2, why: "Àfojúsùn tí ó ṣe kedere, tí ó ṣeé díwọ̀n, tí ó sì ní ọjọ́ máa ń di ṣíṣe." },
      { objective: "O4", q: "Ẹ̀ka ìjọba wo ló ní ìwé iṣẹ́ ọ̀fẹ́ fún ṣíṣe àfojúsùn fún àwọn ológun?", options: ["Ilé-iṣẹ́ pension advance", "Oníṣòwò ọkọ̀", "App crypto kan", "Consumer Financial Protection Bureau"], answer: 3, why: "Ojú-ewé owó ológun CFPB ní link sí ìwé iṣẹ́ fún ṣíṣe àfojúsùn." },
      { objective: "O4", q: "Nígbà tí o bá ń ní kí AI pín àfojúsùn sí ìgbésẹ̀, fi wọ̀nyí kún un:", options: ["Àfojúsùn náà, ọjọ́ náà àti iye tí o lè fi sí i lóòótọ́", "Ọ̀rọ̀ aṣínà báńkì rẹ", "Nọ́mbà Social Security rẹ", "Kò sí nǹkan"], answer: 0, why: "Àlàyé tó yé ń mú ètò tí ó ṣeé ṣe wá." },
      { objective: "O5", q: "Ètò ọ̀sẹ̀ yẹ kí ó ní:", options: ["Iṣẹ́ nìkan", "Àkókò àfojúsùn pẹ̀lú àkókò ìsinmi àti ti ẹbí", "Kò sí ìsinmi", "Wíwo ojú-iboju nìkan"], answer: 1, why: "Ètò ọ̀sẹ̀ tí ó ṣeé ṣe ń ṣe déédéé láàárín àfojúsùn àti ìsinmi." },
      { objective: "O5", q: "Ìgbà mélòó ni o yẹ kí o ṣàyẹ̀wò ètò ọ̀sẹ̀ rẹ?", options: ["Láéláé", "Lẹ́ẹ̀kan lọ́dún", "Ní ọ̀sẹ̀ kọ̀ọ̀kan", "Nígbà tí nǹkan bá dà rú nìkan"], answer: 2, why: "Àyẹ̀wò ọ̀sẹ̀ ń jẹ́ kí o tún ohun tí kò ṣiṣẹ́ ṣe." },
      { objective: "O6", q: "Èwo ni ibi tó tọ́ fún ìbéèrè nípa owó sísan VA rẹ?", options: ["Ìpolówó tí ó yọ jáde lójijì", "Ojú-òpó ìjíròrò èyíkéyìí", "Chatbot AI nìkan", "VA ní va.gov"], answer: 3, why: "VA ni orísun ìjọba fún àǹfààní VA." },
      { objective: "O6", q: "Ṣé ẹ̀kọ́ yìí dábàá ìdókòwò?", options: ["Rárá; bá akọ́ṣẹ́mọṣẹ́ tó tóótun sọ̀rọ̀", "Bẹ́ẹ̀ni, crypto", "Bẹ́ẹ̀ni, ìpín ilé-iṣẹ́ èyíkéyìí", "Bẹ́ẹ̀ni, pension advance"], answer: 0, why: "Ẹ̀kọ́ yìí kò fúnni ní ìmọ̀ràn ìdókòwò." },
      { objective: "O6", q: "Ẹnìkan ṣèlérí èrè ìdókòwò ńlá ní kíákíá. O yẹ kí o:", options: ["Dókòwò lẹ́sẹ̀kẹsẹ̀", "Ṣọ́ra kí o sì ṣàyẹ̀wò pẹ̀lú akọ́ṣẹ́mọṣẹ́ tó tóótun", "Fún wọn ní orúkọ wíwọlé àkáǹtì rẹ", "Yá owó láti dókòwò"], answer: 1, why: "Ìlérí ńlá, kíákíá jẹ́ àmì ìkìlọ̀." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      1,
      3,
      5,
      9,
      10,
      12,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Ìṣúná oṣooṣù",
        objective: "O2",
        notYet: "Owó tó ń wọlé, ohun tí o nílò, ohun tí o fẹ́, ìfowópamọ́ tàbí sísan gbèsè kò sí níbẹ̀, tàbí àwọn àròpọ̀ kò tọ̀nà.",
        meets: "Gbogbo apá márùn-ún wà níbẹ̀ pẹ̀lú nọ́mbà ìyípo, a sì ti ṣàyẹ̀wò àwọn àròpọ̀ lórí ẹ̀rọ ìṣirò.",
        exceeds: "Akẹ́kọ̀ọ́ lè sọ ohun tí ó fẹ́ tí òun máa kọ́kọ́ dín kù tí owó bá há."
      },
      {
        name: "Ìlà ìyípadà owó",
        objective: "O2",
        notYet: "Kò sí ìlà fún ìnáwó tàbí owó oṣù tí ó yí padà lẹ́yìn iṣẹ́ ológun.",
        meets: "Ìlà kan fi ìnáwó tí wọ́n bójú tó nígbà iṣẹ́ ológun tàbí ìyípadà owó oṣù lẹ́yìn iṣẹ́ ológun hàn.",
        exceeds: "Akẹ́kọ̀ọ́ kọ ibi tí ó ti fìdí owó ìkẹyìn tàbí àǹfààní rẹ̀ múlẹ̀ sílẹ̀."
      },
      {
        name: "Ètò ọ̀sẹ̀",
        objective: "O5",
        notYet: "Ètò ọ̀sẹ̀ náà ní àkókò àfojúsùn tí ó kéré sí mẹ́ta, tàbí kò ní àyẹ̀wò ìṣúná.",
        meets: "Àkókò àfojúsùn mẹ́ta, pẹ̀lú àyẹ̀wò ìṣúná ọ̀sẹ̀, àti àkókò ìsinmi àti ti ẹbí.",
        exceeds: "Ètò ọ̀sẹ̀ náà wà lórí kàlẹ́ńdà fóònù tàbí a ti tẹ̀ ẹ́ jáde, pẹ̀lú ọjọ́ kan pàtó láti ṣàyẹ̀wò rẹ̀."
      },
      {
        name: "Kò sí ìsọfúnni àdáni",
        objective: "O1",
        notYet: "Ètò náà tàbí prompt kan ní nọ́mbà àkáǹtì, káàdì tàbí ìdánimọ̀.",
        meets: "Kò sí nọ́mbà àkáǹtì tàbí ìsọfúnni àdáni níbìkíbi.",
        exceeds: "Akẹ́kọ̀ọ́ lè fi àwọn prompt pẹ̀lú nọ́mbà ìyípo tí ó lò hàn."
      },
      {
        name: "Ìbéèrè fún orísun ìjọba",
        objective: "O6",
        notYet: "Kò sí ìbéèrè owó, tàbí kò dárúkọ orísun kankan.",
        meets: "Ìbéèrè owó kan tó yé àti orísun ìjọba tàbí olùdámọ̀ràn tó tọ́ fún un.",
        exceeds: "Akẹ́kọ̀ọ́ ti ṣètò ìpàdé tàbí ti kàn sí orísun náà."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn ṣì ń lo ìṣúná àti ètò ọ̀sẹ̀ wọn ní ọjọ́ 30 lẹ́yìn náà (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n kàn sí orísun owó ọ̀fẹ́ ti ìjọba, bí Military OneSource tàbí VA, láàárín ọjọ́ 30",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn dá ọ̀rọ̀ tàbí ìfilọ̀ jìbìtì mọ̀, tí wọ́n sì yẹra fún un"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Smartphone tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì, àti ẹ̀rọ ìṣirò",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́: ChatGPT, Microsoft Copilot tàbí Google Gemini",
      "Ìwé, app àkọsílẹ̀ tàbí spreadsheet fún ìṣúná, àti kàlẹ́ńdà fóònù fún ètò ọ̀sẹ̀",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Kí àṣeṣe kankan tó bẹ̀rẹ̀, fi bí a ṣe ń ṣe nọ́mbà ìyípo hàn, kí o sì rán àwọn akẹ́kọ̀ọ́ létí pé wọn kò gbọdọ̀ tẹ nọ́mbà àkáǹtì, káàdì, Social Security tàbí fáìlì VA sínú AI láéláé.",
      "Má ṣe fúnni ní ìmọ̀ràn ìdókòwò; darí ìpinnu owó sí Military OneSource, VA tàbí akọ́ṣẹ́mọṣẹ́ tó tóótun.",
      "Lo text jìbìtì àhùsọ nínú kíláàsì; má ṣe ní kí àwọn akẹ́kọ̀ọ́ pín ọ̀rọ̀ gidi tí ó ní ìsọfúnni àdáni láéláé.",
      "Fi rubric ṣe àmì fún ètò ojú-ewé kan ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan.",
      "Ọkọ tàbí aya tàbí àwọn ẹbí lè dara pọ̀ mọ́ ẹ̀kọ́ ìṣúná tí akẹ́kọ̀ọ́ bá fẹ́."
    ]
  }
};

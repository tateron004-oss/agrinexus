"use strict";

// Koach Learn course (Yoruba translation of shared/ai-integration-strategy.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-integration-strategy-yo",
  lang: "yo",
  translationOf: "ai-integration-strategy",
  category: "Athletes",
  name: "Ọ̀nà láti Mú AI Wọ inú Àjọ Rẹ",
  skills: "Ṣíṣàyẹ̀wò ìmúrasílẹ̀ fún AI, Gbígbé àfojúsùn kalẹ̀ tó bá iṣẹ́ àjọ mu, Kíkọ òfin lílo AI, Ṣíṣàkóso ewu AI, Dídarí àwọn ènìyàn nínú ìyípadà, Ṣíṣe ètò ọjọ́ 90",
  outcome: "kọ ètò ọjọ́ 90 láti mú AI wọ inú àjọ kan: àyẹ̀wò ìmúrasílẹ̀, àfojúsùn tó bá iṣẹ́ àjọ náà mu, òfin lílo AI ojú-ewé kan, àyẹ̀wò ewu, ètò ìdálẹ́kọ̀ọ́ àti ìbánisọ̀rọ̀, àti ètò ìgbésẹ̀ tí ó ní olùdarí àti ọjọ́ fún ìgbésẹ̀ kọ̀ọ̀kan.",
  about: [
    "Lílo irinṣẹ́ AI kan rọrùn. Ṣùgbọ́n mímú AI wọ inú gbogbo àjọ kan, kí àwọn ènìyàn lè lò ó dáadáa, láìléwu àti fún ìdí tó tọ́, nílò ètò. Ẹ̀kọ́ yìí fún ọ ní ètò yẹn, ní ìgbésẹ̀ kọ̀ọ̀kan.",
    "Ó wà fún àwọn eléré ìdárayá tí ń kọ́ orúkọ (brand) tàbí òwò, àti àwọn ẹgbẹ́, ilé-ẹ̀kọ́ eré ìdárayá àti líìgì tó yí wọn ká; fún àwọn olóhun òwò kékeré; àti fún àwọn olórí àti ìgbìmọ̀ àjọ aláìlérè. Àpẹẹrẹ ni ilé-ẹ̀kọ́ bọ́ọ̀lù-àpẹ̀rẹ̀ (basketball) fún ọ̀dọ́, òwò ìdálẹ́kọ̀ọ́ àti ìròyìn eléré ìdárayá ògbóǹtarìgì, ilé oúnjẹ ẹbí àti àjọ aláìlérè àdúgbò.",
    "Bí o ṣe ń lọ, o máa kọ ètò AI ọjọ́ 90 gidi fún àjọ kan. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Kọ ètò ọjọ́ 90 láti mú AI wọ inú àjọ gidi kan tàbí àjọ àṣeṣe (fún àpẹẹrẹ òwò orúkọ eléré ìdárayá, ilé-ẹ̀kọ́ eré ìdárayá, òwò kékeré tàbí àjọ aláìlérè). Fi àmì ìmúrasílẹ̀ sí i, àfojúsùn mẹ́ta tó bá iṣẹ́ àjọ mu, òfin lílo AI ojú-ewé kan, tábìlì ewu, ètò ìdálẹ́kọ̀ọ́ àti ìbánisọ̀rọ̀, àti ètò ìgbésẹ̀ tí ó ní olùdarí àti ọjọ́ fún ìgbésẹ̀ kọ̀ọ̀kan.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn eléré ìdárayá tí ń ṣe òwò orúkọ wọn, àti àwọn kóòṣì, olùdarí ilé-ẹ̀kọ́ eré ìdárayá, aṣojú (agent) àti òṣìṣẹ́ tó yí wọn ká, pẹ̀lú àwọn olórí òwò kékeré àti àjọ aláìlérè tí wọ́n gbọ́dọ̀ pinnu bí àjọ wọn ṣe máa lo AI.",
    startingPoint: "Wọ́n mọ ẹgbẹ́, orúkọ tàbí àjọ wọn dáadáa, àwọn kan sì ti ń lo irinṣẹ́ AI fúnra wọn. Díẹ̀ nínú wọn ló ti kọ òfin, tábìlì ewu tàbí ètò ìyípadà rí, tàbí mú irinṣẹ́ tuntun wá fún gbogbo ẹgbẹ́ kan.",
    gap: "Àwọn òṣìṣẹ́ àti àwọn eléré ti ń lo AI tẹ́lẹ̀, nígbà púpọ̀ láìsí òfin kankan, ìsọfúnni àdáni nípa ìlera, àdéhùn (contract) tàbí ti àwọn ọmọdé sì lè jò jáde. Àwọn akẹ́kọ̀ọ́ nílò ètò ọjọ́ 90 tó wúlò tí ó so AI mọ́ iṣẹ́ àjọ, tí ó gbé òfin tó yé kalẹ̀, tí ó ṣàkóso ewu, tí ó sì mú àwọn ènìyàn lọ́wọ́, kí AI lè ṣèrànwọ́ dípò kí ó dá wàhálà òfin, ìsọfúnni àdáni tàbí ìgbẹ́kẹ̀lé sílẹ̀.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn; a máa ṣàlàyé àwọn ọ̀rọ̀ ètò nígbà àkọ́kọ́ tí wọ́n bá fara hàn",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà; ìwé (document) tàbí spreadsheet fún ètò náà",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 5, nǹkan bí ìṣẹ́jú 60 lápapọ̀, pẹ̀lú àkókò láti kọ ètò náà",
      "Ìsọfúnni àdáni: ìsọfúnni ìlera àti iṣẹ́ eléré, ìsọfúnni àwọn ọmọdé, àdéhùn àti àkọsílẹ̀ àwọn olùfúnni ní ààbò",
      "Kò sí ìmọ̀ràn òfin: ọ̀rọ̀ àdéhùn, ìgbọ̀wọ́ (endorsement) àti òfin ìsọfúnni lọ sọ́dọ̀ agbẹjọ́rò tó yẹ"
    ],
    prerequisites: "Kò sí. \"AI nínú Òwò: Ọ̀nà àti Ìlò\" (AI in Business: Strategies and Applications) jẹ́ ẹ̀kọ́ àkọ́kọ́ tó wúlò."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Fún àjọ gidi kan tàbí àjọ àṣeṣe", action: "fún ìmúrasílẹ̀ rẹ̀ fún AI ní àmì láti 1 sí 5 nínú ìdarí, ènìyàn, data, ìlànà iṣẹ́ àti òfin", standard: "pẹ̀lú gbólóhùn ẹ̀rí kan fún àmì kọ̀ọ̀kan àti àtúnṣe kan fún àwọn méjì tó kéré jù" },
    { id: "O2", condition: "Tí a bá fún ọ ní iṣẹ́ àjọ náà (mission)", action: "kọ àfojúsùn SMART mẹ́ta fún AI tí ó ń ṣiṣẹ́ fún iṣẹ́ àjọ náà", standard: "tí ọ̀kọ̀ọ̀kan ní nọ́mbà àti ọjọ́" },
    { id: "O3", condition: "Fún àwọn ènìyàn tí yóò lo AI", action: "kọ òfin lílo AI ojú-ewé kan", standard: "tí ó sọ nípa àwọn irinṣẹ́ tí a fọwọ́ sí, ohun tí kò gbọdọ̀ wọ inú rẹ̀ láé, àyẹ̀wò ènìyàn, sísọ pé a lo AI, àti ẹni tí a lè bi" },
    { id: "O4", condition: "Fún ìlò AI kọ̀ọ̀kan tí a ń gbèrò", action: "ṣe tábìlì ewu pẹ̀lú Govern, Map, Measure àti Manage", standard: "pẹ̀lú bí ó ṣe lè ṣẹlẹ̀ tó, bí ó ṣe burú tó, ọ̀nà ìdènà, àti ẹni tí ń ṣàyẹ̀wò rẹ̀ fún ewu kọ̀ọ̀kan" },
    { id: "O5", condition: "Fún ẹgbẹ́ tí yóò bẹ̀rẹ̀ sí lo AI", action: "kọ ètò ìdálẹ́kọ̀ọ́ àti ìbánisọ̀rọ̀", standard: "tí ó sọ ìdí, kí ni, àti àǹfààní tí ó wà fún wọn, tí ó sì dárúkọ ó kéré tán ẹnì kan gẹ́gẹ́ bí aṣíwájú AI" },
    { id: "O6", condition: "Tí o bá ní àfojúsùn, òfin, ewu àti ètò ìdálẹ́kọ̀ọ́ rẹ", action: "ṣe ètò ìgbésẹ̀ ọjọ́ 90 ní ìpele mẹ́ta", standard: "pẹ̀lú olùdarí àti ọjọ́ ìparí fún ìgbésẹ̀ kọ̀ọ̀kan" }
  ],
  chapters: [
    {
      name: "Orí 1: Mímúra sílẹ̀ fún AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ṣíṣàyẹ̀wò bí àjọ rẹ ṣe múra sílẹ̀ fún AI tó",
          minutes: 5,
          goal: "Fún ìmúrasílẹ̀ àjọ kan fún AI ní àmì nínú apá márùn-ún.",
          text: [
            "Kí o tó ra irinṣẹ́, ṣàyẹ̀wò ìmúrasílẹ̀. Ọ̀pọ̀ ìgbìyànjú AI máa ń kùnà, kì í ṣe nítorí pé irinṣẹ́ náà burú, ṣùgbọ́n nítorí pé àwọn ènìyàn, data tàbí òfin kò tíì ṣetán.",
            "Fún apá márùn-ún ní àmì láti 1 (kò ṣetán) sí 5 (ó ṣetán). Ìdarí: ṣé àwọn olórí ṣe àtìlẹ́yìn, tí wọ́n sì ya àkókò sọ́tọ̀? Ènìyàn: ṣé àwọn òṣìṣẹ́, eléré tàbí olùyọ̀ǹda ní ọgbọ́n ẹ̀rọ ìpìlẹ̀? Data: ṣé ìsọfúnni rẹ wà létòlétò, tí a sì fi pamọ́ láìléwu? Ìlànà iṣẹ́: ṣé a ti kọ àwọn iṣẹ́ pàtàkì rẹ sílẹ̀? Òfin: ṣé o ní òfin ìsọfúnni àdáni àti ààbò?",
            "Àmì tó kéré kì í ṣe ìdí láti dúró. Ó ń fi ibi tí o máa bẹ̀rẹ̀ hàn ọ́. Òwò eléré ìdárayá tí ó mọ̀ nípa ìkànnì àjọlò (social media) dáadáa, ṣùgbọ́n tí àkọsílẹ̀ rẹ̀ rí wúruwùru, lè bẹ̀rẹ̀ nípa títo àwọn fáìlì létòlétò kí ó tó lo AI lórí wọn."
          ],
          steps: ["Fún ìdarí, ènìyàn, data, ìlànà iṣẹ́ àti òfin ní àmì láti 1 sí 5.", "Kọ gbólóhùn ẹ̀rí kan fún àmì kọ̀ọ̀kan.", "Fa àyíká yí àwọn àmì méjì tó kéré jù ká.", "Kọ àtúnṣe kan sílẹ̀ fún àmì kékeré kọ̀ọ̀kan."],
          words: [["Ìmúrasílẹ̀ (readiness)", "bí àjọ kan ṣe ṣetán tó láti bẹ̀rẹ̀ nǹkan tuntun."], ["Data", "ìsọfúnni tí àjọ kan ń tọ́jú, bí ètò àkókò, àkọsílẹ̀ àti fáìlì."]],
          slides: [
            { title: "Ìdí tí a fi ń ṣàyẹ̀wò ìmúrasílẹ̀", bullets: ["Irinṣẹ́ kì í sábà fa ìkùnà", "Ènìyàn, data tàbí òfin tí kò ṣetán ló ń fà á"] },
            { title: "Fún apá márùn-ún ní àmì, 1 sí 5", bullets: ["Ìdarí àti ènìyàn", "Data àti ìlànà iṣẹ́", "Òfin fún ìsọfúnni àdáni àti ààbò"] },
            { title: "Àmì kékeré ń fi ibi ìbẹ̀rẹ̀ hàn", bullets: ["Kọ́kọ́ tún àwọn ohun ìpìlẹ̀ ṣe", "Àpẹẹrẹ: to fáìlì létòlétò kí o tó lo AI lórí wọn"] }
          ],
          tryIt: "Yan àjọ gidi kan tàbí àjọ àṣeṣe. Fún ìmúrasílẹ̀ rẹ̀ ní àmì nínú apá márùn-ún pẹ̀lú gbólóhùn ẹ̀rí kan fún ọ̀kọ̀ọ̀kan, kí o sì dárúkọ àtúnṣe àkọ́kọ́ fún àwọn méjì tó kéré jù.",
          youCanNow: "fún ìmúrasílẹ̀ àjọ kan fún AI ní àmì, kí o sì rí ibi tí o máa bẹ̀rẹ̀.",
          quickCheck: [
            { objective: "O1", q: "Ìbéèrè wo ló ń ṣàyẹ̀wò apá ìmúrasílẹ̀ \"ìlànà iṣẹ́\"?", options: ["Ṣé àwọn olórí ṣe àtìlẹ́yìn fún AI?", "Ṣé a ti kọ àwọn iṣẹ́ pàtàkì rẹ sílẹ̀?", "Ṣé a fi data pamọ́ láìléwu?", "Ṣé o ní òfin ìsọfúnni àdáni?"], answer: 1, why: "Ìlànà iṣẹ́ ń béèrè bóyá a ti kọ àwọn iṣẹ́ pàtàkì sílẹ̀." },
            { objective: "O1", q: "Ilé-ẹ̀kọ́ eré ìdárayá rẹ gba 2 nínú data àti 5 nínú ènìyàn. Kí ni o máa ṣe?", options: ["Dá ìgbìyànjú AI dúró pátápátá", "Ra irinṣẹ́ AI tó ga jù lọ lẹ́sẹ̀kẹsẹ̀", "Má ka àmì data sí", "Bẹ̀rẹ̀ nípa títún apá data ṣe, bí títo àkọsílẹ̀ létòlétò"], answer: 3, why: "Àmì kékeré ń fi ibi ìbẹ̀rẹ̀ hàn, kì í ṣe ìdí láti dúró." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Gbígbé àfojúsùn AI kalẹ̀ tó bá iṣẹ́ àjọ mu",
          minutes: 5,
          goal: "Kọ àfojúsùn AI mẹ́ta tí a lè díwọ̀n, tí ó ń ṣiṣẹ́ fún iṣẹ́ àjọ náà.",
          text: [
            "AI gbọ́dọ̀ ṣiṣẹ́ fún iṣẹ́ àjọ (mission), kì í ṣe kí iṣẹ́ àjọ máa ṣiṣẹ́ fún AI. Bẹ̀rẹ̀ pẹ̀lú ìdí tí àjọ náà fi wà: láti kọ́ àwọn eléré ọ̀dọ́, láti mú orúkọ dàgbà, láti pèsè oúnjẹ, láti ta ọjà tó dára.",
            "Lẹ́yìn náà béèrè ibi tí AI ti lè ran iṣẹ́ yẹn lọ́wọ́: àkókò púpọ̀ sí i pẹ̀lú àwọn eléré tàbí oníbàárà, ìdáhùn kíákíá sí àwọn ẹbí tàbí oníbàárà, lílo data dáadáa, owó tí ó dín kù. Sọ ọ̀kọ̀ọ̀kan di àfojúsùn tí a lè díwọ̀n: \"Dín àkókò iṣẹ́ ọ́fíìsì ọ̀sẹ̀ àwọn kóòṣì kù láti wákàtí 6 sí 3 kí oṣù March tó parí.\"",
            "Lo àyẹ̀wò SMART: ó ṣe pàtó (specific), a lè díwọ̀n rẹ̀ (measurable), ó ṣeé ṣe (achievable), ó bá iṣẹ́ àjọ mu (relevant), ó sì ní àkókò (time-bound). Àfojúsùn mẹ́ta tó fún ọjọ́ 90."
          ],
          steps: ["Kọ iṣẹ́ àjọ náà ní gbólóhùn kan.", "Kọ ọ̀nà mẹ́ta tí AI lè gbà ṣe àtìlẹ́yìn fún un.", "Sọ ọ̀kọ̀ọ̀kan di àfojúsùn SMART pẹ̀lú nọ́mbà àti ọjọ́."],
          words: [["Iṣẹ́ àjọ (mission)", "ìdí pàtàkì tí àjọ kan fi wà."], ["Àfojúsùn SMART", "àfojúsùn tí ó ṣe pàtó, tí a lè díwọ̀n, tí ó ṣeé ṣe, tí ó bá iṣẹ́ àjọ mu, tí ó sì ní àkókò."]],
          slides: [
            { title: "Iṣẹ́ àjọ ló kọ́kọ́", bullets: ["AI ń ṣiṣẹ́ fún iṣẹ́ àjọ", "Kì í ṣe ní ọ̀nà kejì"] },
            { title: "Ibi tí AI ti lè ṣèrànwọ́", bullets: ["Àkókò púpọ̀ sí i pẹ̀lú eléré tàbí oníbàárà", "Ìdáhùn kíákíá", "Owó tí ó dín kù, lílo data dáadáa"] },
            { title: "Àfojúsùn SMART", bullets: ["Ó ṣe pàtó, a lè díwọ̀n rẹ̀, ó ṣeé ṣe", "Ó bá iṣẹ́ àjọ mu, ó ní àkókò", "Àfojúsùn mẹ́ta fún ọjọ́ 90"] }
          ],
          tryIt: "Kọ iṣẹ́ àjọ náà ní gbólóhùn kan àti àfojúsùn AI SMART mẹ́ta tí ó ṣe àtìlẹ́yìn fún un.",
          youCanNow: "gbé àfojúsùn AI tí a lè díwọ̀n kalẹ̀ tí ó ń ṣiṣẹ́ fún iṣẹ́ àjọ kan.",
          quickCheck: [
            { objective: "O2", q: "Nínú SMART, kí ni \"R\" túmọ̀ sí?", options: ["Ó bá iṣẹ́ àjọ mu (relevant)", "Kíákíá (rapid)", "Àtúnṣe (repeated)", "Òfin béèrè fún un (required by law)"], answer: 0, why: "Àfojúsùn SMART bá iṣẹ́ àjọ náà mu." },
            { objective: "O2", q: "Orúkọ eléré ìdárayá kan fẹ́ \"lo AI púpọ̀ sí i\". Báwo ni o ṣe máa sọ ọ́ di àfojúsùn SMART?", options: ["\"Lo ọ̀pọ̀ irinṣẹ́ AI.\"", "\"Jẹ́ orúkọ tó dára jù lórí ayélujára.\"", "\"Dá ímeèlì àwọn olólùfẹ́ àti onígbọ̀wọ́ lóhùn láàárín wákàtí 24, dípò ọjọ́ 3, kí oṣù June tó parí.\"", "\"Gbìyànjú AI lọ́jọ́ kan.\""], answer: 2, why: "Ó ṣe pàtó, a lè díwọ̀n rẹ̀, ó bá iṣẹ́ àjọ mu, ó sì ní ọjọ́." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kíkọ òfin lílo AI ojú-ewé kan",
          minutes: 6,
          goal: "Kọ òfin lílo AI kúkúrú tí ó sọ ohun tí a gbà láàyè, ohun tí a kò gbà, àti ẹni tí a lè bi.",
          text: [
            "Òfin lílo AI jẹ́ àwọn òfin kúkúrú nípa bí àwọn ènìyàn inú àjọ ṣe ń lo AI. Láìsí rẹ̀, àwọn ènìyàn á máa fojú dá a, ẹnì kan sì lè fi ìsọfúnni àdáni eléré, oníbàárà tàbí olùfúnni sínú irinṣẹ́ ọ̀fẹ́.",
            "Jẹ́ kí ó jẹ́ ojú-ewé kan, kí ó sì sọ nípa: àwọn irinṣẹ́ tí a fọwọ́ sí; ohun tí kò gbọdọ̀ wọ inú AI láé (àkọsílẹ̀ ìlera, nọ́mbà Social Security àti báńkì, àdéhùn àdáni, ìsọfúnni àwọn ọmọdé, ọ̀rọ̀ aṣínà); àyẹ̀wò ènìyàn kí a tó gbé ohunkóhun tí AI ṣe jáde tàbí fi ránṣẹ́; òtítọ́ nípa lílo AI níbi tí ó ti ṣe pàtàkì; àti ẹni tí a lè bi ní ìbéèrè.",
            "Fi àwọn òfin pàtàkì fún iṣẹ́ rẹ kún un. Àwọn àjọ eré ìdárayá gbọ́dọ̀ dáàbò bo ìsọfúnni ìlera àti iṣẹ́ eléré àti ìsọfúnni àwọn ọmọdé. Àwọn àjọ aláìlérè gbọ́dọ̀ dáàbò bo àkọsílẹ̀ olùfúnni àti oníbàárà. Gba ìmọ̀ràn òfin fún àdéhùn, ìgbọ̀wọ́ àti òfin ìsọfúnni tí ó kàn ọ́."
          ],
          steps: ["Kọ àwọn irinṣẹ́ AI tí a fọwọ́ sí sílẹ̀.", "Kọ ìsọfúnni tí kò gbọdọ̀ wọ inú AI láé sílẹ̀.", "Béèrè pé kí ènìyàn kan ṣàyẹ̀wò ohun tí AI ṣe kí a tó fi ránṣẹ́ tàbí gbé e jáde.", "Sọ ìgbà tí a gbọ́dọ̀ sọ pé a lo AI.", "Dárúkọ ẹni tí a lè bi ní ìbéèrè.", "Yan ọjọ́ láti tún òfin náà wò."],
          words: [["Òfin (policy)", "òfin tí a kọ sílẹ̀ tí gbogbo ènìyàn inú àjọ ń tẹ̀lé."], ["Àyẹ̀wò ènìyàn", "ènìyàn kan tí ń ṣàyẹ̀wò ohun tí AI ṣe kí a tó lò ó."]],
          slides: [
            { title: "Ìdí tí a fi nílò òfin", bullets: ["Àwọn ènìyàn kò ní fojú dá a mọ́", "Ìsọfúnni àdáni kò ní wọ inú irinṣẹ́ ọ̀fẹ́"] },
            { title: "Ojú-ewé kan sọ nípa", bullets: ["Àwọn irinṣẹ́ tí a fọwọ́ sí", "Ohun tí kò gbọdọ̀ wọ inú AI láé", "Àyẹ̀wò ènìyàn àti ẹni tí a lè bi"] },
            { title: "Òfin pàtàkì fún iṣẹ́ kọ̀ọ̀kan", bullets: ["Eré ìdárayá: ìsọfúnni ìlera eléré, àwọn ọmọdé", "Àjọ aláìlérè: àkọsílẹ̀ olùfúnni àti oníbàárà", "Ìmọ̀ràn òfin fún àdéhùn àti òfin ìsọfúnni"] }
          ],
          tryIt: "Kọ òfin lílo AI ojú-ewé kan fún àjọ rẹ pẹ̀lú gbogbo apá mẹ́fà. Ní kí olùrànlọ́wọ́ AI ṣàyẹ̀wò rẹ̀ fún ohunkóhun tí kò yé, lẹ́yìn náà ṣàtúnṣe rẹ̀ fúnra rẹ.",
          youCanNow: "kọ òfin lílo AI kúkúrú tí ó ń dáàbò bo àwọn ènìyàn àti data.",
          quickCheck: [
            { objective: "O3", q: "Kí ló dé tí àjọ kan fi nílò òfin lílo AI?", options: ["Láti fòfin de gbogbo ẹ̀rọ ìgbàlódé", "Láti mú kí irinṣẹ́ AI jẹ́ ọ̀fẹ́", "Láti rọ́pò ìwé òfin òṣìṣẹ́", "Kí àwọn ènìyàn má fojú dá a, kí wọ́n sì má fi ìsọfúnni àdáni sínú irinṣẹ́ AI"], answer: 3, why: "Láìsí òfin, àwọn ènìyàn á máa fojú dá a, ìsọfúnni àdáni eléré, oníbàárà tàbí olùfúnni sì lè jò jáde." },
            { objective: "O3", q: "Kóòṣì kan fẹ́ kí AI kọ àkọ́pẹrẹ àdéhùn ìgbọ̀wọ́ (sponsorship). Kí ni òfin rẹ gbọ́dọ̀ sọ?", options: ["Fi àkọ́pẹrẹ AI ránṣẹ́ sí onígbọ̀wọ́ lẹ́sẹ̀kẹsẹ̀", "Gba ìmọ̀ràn òfin lórí àdéhùn; ènìyàn kan ṣàyẹ̀wò ohunkóhun tí AI ṣe", "Kò sí òfin kankan fún àdéhùn", "Fi gbogbo àdéhùn àdáni náà sínú irinṣẹ́ AI ọ̀fẹ́"], answer: 1, why: "Àdéhùn nílò ìmọ̀ràn òfin, ènìyàn kan sì gbọ́dọ̀ ṣàyẹ̀wò ohun tí AI ṣe." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Mímúra sílẹ̀ fún AI",
        questions: [
          { objective: "O1", q: "Kí ló dé tí a fi ń ṣàyẹ̀wò ìmúrasílẹ̀ kí a tó ra irinṣẹ́ AI?", options: ["Irinṣẹ́ máa ń burú nígbà gbogbo", "Òfin béèrè fún un", "Ènìyàn, data tàbí òfin tí kò ṣetán ló ń fa ọ̀pọ̀ ìkùnà", "Láti ná owó púpọ̀ sí i"], answer: 2, why: "Àìmúrasílẹ̀, kì í ṣe irinṣẹ́, ló sábà máa ń fa wàhálà." },
          { objective: "O1", q: "Àkọsílẹ̀ ilé-ẹ̀kọ́ eré ìdárayá kan rí wúruwùru, ó sì fọ́nká. Kí ni ìgbésẹ̀ àkọ́kọ́ tó gbọ́n?", options: ["To àwọn fáìlì létòlétò kí o tó lo AI lórí wọn", "Fi gbogbo rẹ̀ sínú AI bí ó ṣe wà", "Pa AI tì", "Ra irinṣẹ́ tó wọ́n jù lọ"], answer: 0, why: "Data tó wà létòlétò ń mú kí AI wúlò, kí ó sì ní ààbò jù." },
          { objective: "O2", q: "Èwo ni àfojúsùn SMART?", options: ["\"Lo AI púpọ̀ sí i\"", "\"Jẹ́ ti ìgbàlódé\"", "\"Gbìyànjú nǹkan\"", "\"Dín àkókò iṣẹ́ ọ́fíìsì ọ̀sẹ̀ àwọn kóòṣì kù láti wákàtí 6 sí 3 kí oṣù March tó parí\""], answer: 3, why: "Ó ṣe pàtó, a lè díwọ̀n rẹ̀, ó sì ní àkókò." },
          { objective: "O3", q: "Kí ni òfin lílo AI gbọ́dọ̀ sọ nípa àkọsílẹ̀ ìlera eléré?", options: ["Fi wọ́n síbikíbi", "Wọn kò gbọdọ̀ wọ inú irinṣẹ́ AI tí a kò fọwọ́ sí fún wọn láé", "Gbé wọn sórí ayélujára", "Pín wọn fún àwọn onígbọ̀wọ́"], answer: 1, why: "Ìsọfúnni ìlera jẹ́ àdáni, a sì gbọ́dọ̀ dáàbò bò ó." },
          { objective: "O3", q: "Ta ló yẹ kí ó ṣàyẹ̀wò ohun tí AI ṣe kí a tó gbé e jáde?", options: ["Kò sí ẹnì kankan", "Ènìyàn kan", "AI fúnra rẹ̀ nìkan", "Olùtẹ̀lé èyíkéyìí lórí ayélujára"], answer: 1, why: "Àyẹ̀wò ènìyàn jẹ́ òfin pàtàkì nínú òfin lílo AI." }
        ]
      }
    },
    {
      name: "Orí 2: Mímú AI wọlé láìléwu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ṣíṣàkóso ewu AI pẹ̀lú ìlànà tó rọrùn",
          minutes: 5,
          goal: "Ṣe tábìlì ewu fún ìlò AI kan, kí o sì fi ọ̀nà ìdènà kan sí ewu kọ̀ọ̀kan.",
          text: [
            "Ilé-iṣẹ́ ìjọba U.S. tí a ń pè ní National Institute of Standards and Technology (NIST) ṣe ìlànà ọ̀fẹ́ fún ṣíṣàkóso ewu AI (AI Risk Management Framework), tí kò jẹ́ dandan. Iṣẹ́ pàtàkì mẹ́rin rẹ̀ ni Govern, Map, Measure àti Manage. O lè lò wọ́n ní ọ̀rọ̀ tó rọrùn, kódà nínú àjọ kékeré.",
            "Govern (ìdarí): ta ló ń ṣe ojúṣe, àti kí ni àwọn òfin (òfin lílo AI rẹ). Map (yíyàwòrán): fún ìlò AI kọ̀ọ̀kan, kí ló lè ṣẹlẹ̀ tí kò dáa, ta ló sì lè farapa. Measure (wíwọ̀n): bí o ṣe máa kíyèsí wàhálà, bí ṣíṣàyẹ̀wò àwọn ìdáhùn díẹ̀ lẹ́ẹ̀kọ̀ọ̀kan. Manage (ṣíṣàkóso): ohun tí o máa ṣe nípa ewu kọ̀ọ̀kan, bí àyẹ̀wò ènìyàn tàbí kí a má lo AI fún iṣẹ́ yẹn.",
            "Àwọn ewu AI tó wọ́pọ̀: òtítọ́ tí kò tọ́, jíjò ìsọfúnni àdáni, ṣíṣe àìdọ́gba sí àwọn ènìyàn, wàhálà ẹ̀tọ́ àdàkọ (copyright) àti bíba orúkọ rere jẹ́. Kọ ọ̀kọ̀ọ̀kan sínú tábìlì ewu pẹ̀lú bí ó ṣe lè ṣẹlẹ̀ tó, bí ó ṣe máa burú tó, àti ọ̀nà ìdènà."
          ],
          steps: ["Kọ ìlò AI kọ̀ọ̀kan tí a ń gbèrò sílẹ̀.", "Fún ọ̀kọ̀ọ̀kan, kọ ohun tí ó lè ṣẹlẹ̀ tí kò dáa àti ẹni tí ó lè farapa.", "Fún bí ó ṣe lè ṣẹlẹ̀ tó àti bí ó ṣe máa burú tó ní ìdíwọ̀n: kékeré, àárín tàbí ńlá.", "Fi ọ̀nà ìdènà kan sí ewu kọ̀ọ̀kan.", "Dárúkọ ẹni tí ń ṣàyẹ̀wò pé ọ̀nà ìdènà náà ń ṣiṣẹ́."],
          words: [["NIST", "U.S. National Institute of Standards and Technology, ilé-iṣẹ́ ìjọba Amẹ́ríkà tí ó ń tẹ ìlànà ẹ̀rọ àti ìtọ́sọ́nà jáde."], ["Tábìlì ewu", "àkọsílẹ̀ àwọn ewu pẹ̀lú bí ọ̀kọ̀ọ̀kan ṣe lè ṣẹlẹ̀ tó àti bí ó ṣe burú tó, àti ohun tí o máa ṣe nípa rẹ̀."]],
          slides: [
            { title: "NIST AI RMF: iṣẹ́ mẹ́rin", bullets: ["Govern: ipa àti òfin", "Map: ohun tí ó lè ṣẹlẹ̀ tí kò dáa", "Measure: bí o ṣe máa kíyèsí", "Manage: ohun tí o máa ṣe nípa rẹ̀"] },
            { title: "Àwọn ewu AI tó wọ́pọ̀", bullets: ["Òtítọ́ tí kò tọ́ àti jíjò data", "Ṣíṣe àìdọ́gba sí àwọn ènìyàn", "Ẹ̀tọ́ àdàkọ àti orúkọ rere"] },
            { title: "Tábìlì ewu tó rọrùn", bullets: ["Ewu, bí ó ṣe lè ṣẹlẹ̀ tó, bí ó ṣe burú tó", "Ọ̀nà ìdènà àti ẹni tí ń ṣàyẹ̀wò rẹ̀"] }
          ],
          sources: [{ name: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
          tryIt: "Ṣe tábìlì ewu fún ìlò AI méjì nínú ètò rẹ, pẹ̀lú ó kéré tán ewu mẹ́ta fún ọ̀kọ̀ọ̀kan, ìdíwọ̀n bí ó ṣe lè ṣẹlẹ̀ tó àti bí ó ṣe burú tó, ọ̀nà ìdènà kan àti ẹni tí ń ṣàyẹ̀wò rẹ̀.",
          youCanNow: "ya àwọn ewu AI, kí o sì fi ọ̀nà ìdènà sí wọn pẹ̀lú iṣẹ́ mẹ́rin NIST.",
          quickCheck: [
            { objective: "O4", q: "Nínú ìlànà NIST, iṣẹ́ wo ló jẹ mọ́ ohun tí o máa ṣe nípa ewu kọ̀ọ̀kan?", options: ["Govern", "Map", "Manage", "Measure"], answer: 2, why: "Manage ni ìgbésẹ̀ tí o gbé lórí ewu kọ̀ọ̀kan, bí àyẹ̀wò ènìyàn." },
            { objective: "O4", q: "AI máa kọ àkọ́pẹrẹ ìròyìn ìpalára (injury) fún àwọn òbí. Ọ̀nà ìdènà wo ló bá ewu òtítọ́ tí kò tọ́ mu?", options: ["Olùkọ́ eré (trainer) tàbí kóòṣì kan ṣàyẹ̀wò ìròyìn kọ̀ọ̀kan kí a tó fi ránṣẹ́", "Fi wọ́n ránṣẹ́ kíákíá sí i", "Fi irinṣẹ́ AI míì kún un", "Má sọ nǹkankan fún àwọn òbí mọ́"], answer: 0, why: "Àyẹ̀wò ènìyàn kí a tó fi ránṣẹ́ ń ṣàkóso ewu òtítọ́ tí kò tọ́." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Dídarí àwọn ènìyàn nínú ìyípadà náà",
          minutes: 5,
          goal: "Kọ ètò ìdálẹ́kọ̀ọ́ àti ìbánisọ̀rọ̀ tí ó ń ran àwọn ènìyàn lọ́wọ́ láti gba AI.",
          text: [
            "Àwọn ènìyàn máa ń ṣàníyàn nípa AI: Ṣé yóò gba iṣẹ́ mi? Ṣé màá dàbí òmùgọ̀? Ṣé a gbà á láàyè? Tí a bá pa àwọn àníyàn yẹn tì, gbogbo nǹkan á máa lọ díẹ̀díẹ̀. Sọ̀rọ̀ nípa wọn ní gbangba.",
            "Sọ ìdí (iṣẹ́ àjọ àti àfojúsùn), kí ni (àwọn irinṣẹ́ àti òfin wo), àti àǹfààní tí ó wà fún wọn (iṣẹ́ ọ́fíìsì tí ó dín kù, àkókò púpọ̀ sí i fún ìdálẹ́kọ̀ọ́ eré, oníbàárà tàbí ẹbí). Dárúkọ àwọn aṣíwájú AI: ènìyàn kan tàbí méjì tí wọ́n kọ́kọ́ kọ́ ọ, tí wọ́n sì ń ran àwọn míì lọ́wọ́.",
            "Kọ́ wọn díẹ̀díẹ̀: ìpàdé ìṣẹ́jú 30 tí wọ́n ti máa fọwọ́ ṣe é fún irinṣẹ́ kọ̀ọ̀kan, ìwé ìrànlọ́wọ́ ojú-ewé kan tí ó ní àwọn prompt tó dára, àti ibì kan láti béèrè ìbéèrè. Ẹ ṣe àjọyọ̀ àṣeyọrí àkọ́kọ́ nínú ìpàdé ẹgbẹ́."
          ],
          steps: ["Kọ ọ̀rọ̀ kúkúrú: ìdí, kí ni, àti àǹfààní tí ó wà fún wọn.", "Yan aṣíwájú AI kan tàbí méjì.", "Ṣètò ìpàdé ìdálẹ́kọ̀ọ́ ìṣẹ́jú 30 tí wọ́n ti máa fọwọ́ ṣe é.", "Ṣe ìwé ìrànlọ́wọ́ prompt ojú-ewé kan.", "Pín àwọn àṣeyọrí àkọ́kọ́ nínú ìpàdé."],
          words: [["Ìṣàkóso ìyípadà (change management)", "ríran àwọn ènìyàn lọ́wọ́ láti kúrò nínú ọ̀nà iṣẹ́ àtijọ́ lọ sí tuntun."], ["Aṣíwájú AI (AI champion)", "ọmọ ẹgbẹ́ kan tí ó kọ́kọ́ kọ́ ọ, tí ó sì ń ran àwọn míì lọ́wọ́."]],
          slides: [
            { title: "Sọ̀rọ̀ nípa àwọn àníyàn", bullets: ["Ṣé yóò gba iṣẹ́ mi?", "Ṣé màá dàbí òmùgọ̀?", "Ṣé a gbà á láàyè?"] },
            { title: "Sọ̀rọ̀ ní kedere", bullets: ["Ìdí: iṣẹ́ àjọ àti àfojúsùn", "Kí ni: irinṣẹ́ àti òfin", "Àǹfààní tí ó wà fún wọn"] },
            { title: "Kọ́ wọn díẹ̀díẹ̀", bullets: ["Ìpàdé ìṣẹ́jú 30 tí wọ́n ti máa fọwọ́ ṣe é", "Ìwé ìrànlọ́wọ́ prompt àti àwọn aṣíwájú AI", "Ṣe àjọyọ̀ àṣeyọrí àkọ́kọ́"] }
          ],
          tryIt: "Kọ ìkéde gbólóhùn márùn-ún sí ẹgbẹ́ rẹ, àwọn eléré, òṣìṣẹ́ tàbí olùyọ̀ǹda nípa ètò AI náà, àti ètò ìdálẹ́kọ̀ọ́ fún oṣù àkọ́kọ́.",
          youCanNow: "ṣètò ìdálẹ́kọ̀ọ́ àti ìbánisọ̀rọ̀ tí ó ń ran àwọn ènìyàn lọ́wọ́ láti gba AI.",
          quickCheck: [
            { objective: "O5", q: "Kí ni ìwé ìrànlọ́wọ́ prompt?", options: ["Àkọsílẹ̀ àwọn òṣìṣẹ́ tí a lé jáde", "Àkọsílẹ̀ ojú-ewé kan ti àwọn prompt tó dára tí àwọn ènìyàn lè dà kọ", "Ìdánwò láti fún òṣìṣẹ́ ní máàkì", "Ọ̀nà ìkọ̀kọ̀ láti yẹ òfin sílẹ̀"], answer: 1, why: "Ìwé ojú-ewé kan ti àwọn prompt tó dára ń ran àwọn ènìyàn lọ́wọ́ láti bẹ̀rẹ̀ kíákíá." },
            { objective: "O5", q: "Ẹ̀rù ń ba àwọn òṣìṣẹ́, wọ́n sì ń yẹra fún irinṣẹ́ AI tuntun náà. Kí ni o máa ṣe?", options: ["Fipá mú wọn láti lò ó láìsí ìdálẹ́kọ̀ọ́", "Dúró kí wọ́n mọ̀ ọ́n fúnra wọn", "Yọ irinṣẹ́ náà kúrò láìsọ fún ẹnikẹ́ni", "Sọ̀rọ̀ nípa àníyàn ní gbangba, ṣe ìpàdé kúkúrú tí wọ́n ti máa fọwọ́ ṣe é, kí o sì pín àṣeyọrí àkọ́kọ́"], answer: 3, why: "Ọ̀rọ̀ ní gbangba, ìdálẹ́kọ̀ọ́ kékeré tí a fọwọ́ ṣe, àti àṣeyọrí àkọ́kọ́ ń ran àwọn ènìyàn lọ́wọ́ láti gba AI." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ṣíṣe ètò ìgbésẹ̀ ọjọ́ 90",
          minutes: 5,
          goal: "Sọ àfojúsùn, òfin, ewu àti ìdálẹ́kọ̀ọ́ di ètò ìgbésẹ̀ ọjọ́ 90 pẹ̀lú olùdarí àti ọjọ́.",
          text: [
            "Ètò ìgbésẹ̀ (roadmap) ń to gbogbo nǹkan létòlétò pẹ̀lú ọjọ́. Pín ọjọ́ 90 sí ìpele mẹ́ta ti ọjọ́ 30. Ọjọ́ 1-30: ìpìlẹ̀ (a fọwọ́ sí òfin, a to fáìlì létòlétò, a kọ́ àwọn aṣíwájú). Ọjọ́ 31-60: ìdánwò kékeré (pilot) (a dán ìlò AI kékeré kan tàbí méjì wò pẹ̀lú ìdíwọ̀n). Ọjọ́ 61-90: àtúnyẹ̀wò àti ìfẹ̀sí (pinnu ohun tí a máa tọ́jú, fẹ̀ sí i tàbí dá dúró).",
            "Ìgbésẹ̀ kọ̀ọ̀kan nílò olùdarí àti ọjọ́ ìparí. Ìgbésẹ̀ tí kò ní olùdarí kì í sábà ṣẹlẹ̀.",
            "Ṣètò ìpàdé àyẹ̀wò ní ọ̀sẹ̀ méjì-méjì àti àtúnyẹ̀wò ní ọjọ́ 90 lórí àwọn àfojúsùn SMART rẹ. Lẹ́yìn náà kọ ètò ọjọ́ 90 tó kàn. Àwọn irinṣẹ́ AI àti òfin ń yí padà kíákíá, nítorí náà tún òfin náà wò ó kéré tán ní oṣù mẹ́fà-mẹ́fà."
          ],
          steps: ["Ọjọ́ 1-30: ìpìlẹ̀.", "Ọjọ́ 31-60: ìdánwò kékeré pẹ̀lú ìdíwọ̀n.", "Ọjọ́ 61-90: àtúnyẹ̀wò, lẹ́yìn náà fẹ̀ sí i tàbí dá dúró.", "Fún ìgbésẹ̀ kọ̀ọ̀kan ní olùdarí àti ọjọ́.", "Ṣètò ìpàdé àyẹ̀wò ní ọ̀sẹ̀ méjì-méjì àti àtúnyẹ̀wò ọjọ́ 90."],
          words: [["Ètò ìgbésẹ̀ (roadmap)", "ètò tí ó ń fi àwọn ìgbésẹ̀ hàn létòlétò pẹ̀lú ọjọ́."], ["Olùdarí (owner)", "ẹni tí ó ń ṣe ojúṣe láti rí i pé ìgbésẹ̀ kan parí."]],
          slides: [
            { title: "Ìpele mẹ́ta ti ọjọ́ 30", bullets: ["1-30: ìpìlẹ̀", "31-60: ìdánwò kékeré", "61-90: àtúnyẹ̀wò àti ìfẹ̀sí"] },
            { title: "Olùdarí àti ọjọ́", bullets: ["Ìgbésẹ̀ kọ̀ọ̀kan ní olùdarí", "Ìgbésẹ̀ kọ̀ọ̀kan ní ọjọ́ ìparí"] },
            { title: "Jẹ́ kí ó máa lọ", bullets: ["Ìpàdé àyẹ̀wò ní ọ̀sẹ̀ méjì-méjì", "Àtúnyẹ̀wò ọjọ́ 90 lórí àfojúsùn", "Tún òfin wò ní oṣù mẹ́fà-mẹ́fà"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣe ètò ìgbésẹ̀ ọjọ́ 90 rẹ nínú tábìlì pẹ̀lú ìpele, ìgbésẹ̀, olùdarí àti ọjọ́, kí o sì so àmì ìmúrasílẹ̀, àfojúsùn, òfin, tábìlì ewu àti ètò ìdálẹ́kọ̀ọ́ rẹ mọ́ ọn láti parí ètò AI rẹ.",
          youCanNow: "kọ ètò ọjọ́ 90 pípé láti mú AI wọ inú àjọ kan láìléwu.",
          quickCheck: [
            { objective: "O6", q: "Kí ló ń ṣẹlẹ̀ ní ọjọ́ 61-90 nínú ètò ìgbésẹ̀?", options: ["Tún àwọn ìdánwò kékeré wò, kí o sì pinnu ohun tí a máa tọ́jú, fẹ̀ sí i tàbí dá dúró", "Kọ iṣẹ́ àjọ náà", "Ra gbogbo irinṣẹ́", "Kọ́ àwọn aṣíwájú àkọ́kọ́"], answer: 0, why: "Ìpele ìkẹyìn ń tún àwọn ìdánwò kékeré wò, ó sì ń fẹ̀ wọ́n sí i tàbí dá wọn dúró." },
            { objective: "O6", q: "Ètò ìgbésẹ̀ rẹ sọ pé \"kọ́ àwọn òṣìṣẹ́\" láìsí orúkọ tàbí ọjọ́. Kí ni o máa fi kún un?", options: ["Kò sí nǹkankan; yóò ṣẹlẹ̀", "Àlàyé tó gùn sí i", "Olùdarí àti ọjọ́ ìparí", "Ètò ìgbésẹ̀ kejì"], answer: 2, why: "Ìgbésẹ̀ tí kò ní olùdarí àti ọjọ́ kì í sábà parí." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Mímú AI wọlé láìléwu",
        questions: [
          { objective: "O4", q: "Kí ni iṣẹ́ pàtàkì mẹ́rin ti ìlànà NIST AI Risk Management Framework?", options: ["Buy, Build, Sell, Repeat", "Plan, Do, Check, Act", "Read, Write, Test, Ship", "Govern, Map, Measure, Manage"], answer: 3, why: "NIST dárúkọ Govern, Map, Measure àti Manage." },
          { objective: "O4", q: "Ṣé òfin sọ pé àwọn àjọ kékeré gbọ́dọ̀ lo ìlànà NIST AI Risk Management Framework?", options: ["Rárá, NIST sọ pé kì í ṣe dandan", "Bẹ́ẹ̀ ni, pẹ̀lú owó ìtanràn ńlá", "Fún àwọn eléré ìdárayá nìkan", "Ní Kenya nìkan"], answer: 0, why: "NIST ṣàpèjúwe rẹ̀ gẹ́gẹ́ bí ohun tí a lè lò láìjẹ́ dandan." },
          { objective: "O5", q: "Kóòṣì kan ń ṣàníyàn pé AI yóò gba iṣẹ́ òun. Kí ni ìdáhùn tó dára jù?", options: ["Má kà á sí", "Sọ fún un pé kí ó dákẹ́ ìbéèrè", "Ṣàlàyé ní gbangba bí AI ṣe ń dá àkókò sílẹ̀ fún ìdálẹ́kọ̀ọ́ eré àti ohun tí kò ní yí padà", "Fi ètò náà pamọ́"], answer: 2, why: "Sísọ̀rọ̀ nípa àníyàn ní gbangba ń mú kí àwọn ènìyàn gba AI kíákíá." },
          { objective: "O5", q: "Kí ni aṣíwájú AI?", options: ["AI tí ó ń borí nínú eré", "Gbajúmọ̀ orí ayélujára tí a sanwó fún", "Irinṣẹ́ tó wọ́n jù lọ", "Ọmọ ẹgbẹ́ kan tí ó kọ́kọ́ kọ́ ọ, tí ó sì ń ran àwọn míì lọ́wọ́"], answer: 3, why: "Àwọn aṣíwájú ń tan ọgbọ́n àti ìgboyà kálẹ̀." },
          { objective: "O6", q: "Ìgbésẹ̀ kan nínú ètò ìgbésẹ̀ kò ní olùdarí. Kí ló sábà máa ń ṣẹlẹ̀?", options: ["Ó máa parí ṣáájú àkókò", "AI ló máa ṣe é", "Kò ní parí", "Kò sí ohun tí yóò yí padà"], answer: 2, why: "Ìgbésẹ̀ nílò olùdarí kí ó tó lè ṣẹlẹ̀." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ọ̀nà láti Mú AI Wọ inú Àjọ Rẹ",
    questions: [
      { objective: "O1", q: "Ọ̀pọ̀ ìgbìyànjú AI máa ń kùnà nítorí pé:", options: ["Àwọn irinṣẹ́ kì í ṣiṣẹ́ rárá", "Àwọn ènìyàn, data tàbí òfin kò tíì ṣetán", "AI lòdì sí òfin", "Kọ̀mpútà ń lọ́ra jù"], answer: 1, why: "Àìmúrasílẹ̀ ló ń fa ọ̀pọ̀ ìkùnà." },
      { objective: "O1", q: "Èwo ló jẹ́ ọ̀kan nínú apá ìmúrasílẹ̀ márùn-ún?", options: ["Data", "Àwọ̀ ẹgbẹ́", "Bí ọ́fíìsì ṣe tóbi tó", "Iye ọjà ìpín (stock)"], answer: 0, why: "Ìdarí, ènìyàn, data, ìlànà iṣẹ́ àti òfin." },
      { objective: "O1", q: "Àmì ìmúrasílẹ̀ tó kéré túmọ̀ sí:", options: ["Dúró títí láé", "Má kà á sí", "Bẹ̀rẹ̀ nípa títún apá yẹn ṣe", "Ra irinṣẹ́ púpọ̀ sí i"], answer: 2, why: "Àmì kékeré ń fi ibi ìbẹ̀rẹ̀ hàn." },
      { objective: "O2", q: "Àfojúsùn AI gbọ́dọ̀ so mọ́:", options: ["Iṣẹ́ àjọ náà", "Ohun tí àwọn olùdíje ń gbé jáde", "Àṣà tuntun jù lọ", "Kò sí nǹkan pàtó"], answer: 0, why: "AI ń ṣiṣẹ́ fún iṣẹ́ àjọ." },
      { objective: "O2", q: "SMART dúró fún:", options: ["Simple, modern, automatic, rapid, technical", "Smart, mobile, AI, robot, tech", "Sales, marketing, admin, retail, tax", "Specific, measurable, achievable, relevant, time-bound"], answer: 3, why: "Ìwọ̀nyí ni àyẹ̀wò SMART márùn-ún: ó ṣe pàtó, a lè díwọ̀n rẹ̀, ó ṣeé ṣe, ó bá iṣẹ́ àjọ mu, ó ní àkókò." },
      { objective: "O2", q: "Àfojúsùn mélòó ni ẹ̀kọ́ yìí dábàá fún ọjọ́ 90?", options: ["Ọgbọ̀n", "Mẹ́ta", "Ọgọ́rùn-ún", "Òdo"], answer: 1, why: "Àfojúsùn mẹ́ta ń jẹ́ kí ètò náà dojú kọ ohun pàtàkì." },
      { objective: "O3", q: "Òfin lílo AI jẹ́:", options: ["Kọ́kọ́rọ́ ìwé àṣẹ sọ́fítíwọ̀ (license key)", "Àwọn òfin kúkúrú nípa bí àwọn ènìyàn ṣe ń lo AI", "Ètò ìbánigbófò", "Ìpolówó ọjà lórí ayélujára"], answer: 1, why: "Ó ń sọ ohun tí a gbà láàyè àti ohun tí a kò gbà fún àwọn ènìyàn." },
      { objective: "O3", q: "Èwo ni kò gbọdọ̀ wọ inú irinṣẹ́ AI tí a kò fọwọ́ sí láé?", options: ["Ètò àkókò ìdánrawò lásán", "Ọjọ́ ìṣẹ̀lẹ̀ tí gbogbo ènìyàn mọ̀", "Àpẹẹrẹ ọ̀rọ̀ fún ìkànnì àjọlò", "Ìsọfúnni ìlera eléré tí ó jẹ́ ọmọdé"], answer: 3, why: "Ìsọfúnni ìlera àti ti àwọn ọmọdé jẹ́ àdáni gan-an." },
      { objective: "O3", q: "Níbo ni àjọ kan ti gbọ́dọ̀ gba ìmọ̀ràn lórí àdéhùn ìgbọ̀wọ́ àti òfin ìsọfúnni?", options: ["Lọ́dọ̀ agbẹjọ́rò tó yẹ", "Lọ́dọ̀ AI èyíkéyìí", "Nínú ọ̀rọ̀ àsọyé lórí ìkànnì àjọlò", "Lọ́dọ̀ olùdíje"], answer: 0, why: "Ìbéèrè òfin nílò ògbóǹtarìgì." },
      { objective: "O4", q: "Nínú ọ̀rọ̀ NIST, pípinnu ẹni tí ń ṣe ojúṣe àti àwọn òfin jẹ́:", options: ["Map", "Measure", "Govern", "Manage"], answer: 2, why: "Govern jẹ mọ́ ipa àti òfin." },
      { objective: "O4", q: "Kíkọ ohun tí ó lè ṣẹlẹ̀ tí kò dáa pẹ̀lú ìlò AI kọ̀ọ̀kan sílẹ̀ jẹ́:", options: ["Govern", "Manage", "Measure", "Map"], answer: 3, why: "Map ń dá àwọn ewu mọ̀ àti ẹni tí ó lè farapa." },
      { objective: "O4", q: "Ṣíṣàyẹ̀wò àwọn ìdáhùn AI díẹ̀ lọ́sẹ̀ọ̀sẹ̀ jẹ́ àpẹẹrẹ:", options: ["Govern", "Map", "Measure", "Iṣẹ́ àjọ (mission)"], answer: 2, why: "Measure ni bí o ṣe máa kíyèsí wàhálà." },
      { objective: "O4", q: "Tábìlì ewu ní:", options: ["Iye owó irinṣẹ́ náà nìkan", "Ewu, bí ó ṣe lè ṣẹlẹ̀ tó, bí ó ṣe burú tó, ọ̀nà ìdènà àti ẹni tí ń ṣàyẹ̀wò", "Ìṣirò iṣẹ́ àwọn eléré", "Orúkọ àkáǹtì ìkànnì àjọlò"], answer: 1, why: "Àwọn òpó wọ̀nyí ń jẹ́ kí a lè ṣàkóso ewu." },
      { objective: "O4", q: "Èwo ló jẹ́ ewu AI tó wọ́pọ̀?", options: ["Ṣíṣe àìdọ́gba sí àwọn ènìyàn", "Àkókò ọ̀fẹ́ tí ó pọ̀ jù", "Ìdáhùn tó dára sí i", "Owó tí ó dín kù"], answer: 0, why: "AI lè ṣe àìdọ́gba sí àwọn ènìyàn tí a kò bá ṣàyẹ̀wò rẹ̀." },
      { objective: "O5", q: "\"Àǹfààní tí ó wà fún mi\" nínú ìbánisọ̀rọ̀ ìyípadà túmọ̀ sí:", options: ["Owó ẹ̀bùn nìkan", "Èrè ẹni tí ń ta irinṣẹ́ náà", "Bí AI ṣe ń ran àwọn ènìyàn tí a ní kí wọ́n lò ó lọ́wọ́", "Àpólà nínú òfin"], answer: 2, why: "Àwọn ènìyàn ń gba ìyípadà nígbà tí wọ́n bá rí àǹfààní rẹ̀." },
      { objective: "O5", q: "Ọ̀nà tó dára láti kọ́ òṣìṣẹ́ nípa AI ni:", options: ["Ìpàdé kúkúrú tí wọ́n ti máa fọwọ́ ṣe é àti ìwé ìrànlọ́wọ́ prompt", "Ìkọ́ni ọjọ́ mẹ́ta láìsí ìdánrawò", "Kò sí ìdálẹ́kọ̀ọ́", "Ìwé ìkéde láìsí àpẹẹrẹ"], answer: 0, why: "Ìdálẹ́kọ̀ọ́ kékeré tí a fọwọ́ ṣe ló dára jù." },
      { objective: "O6", q: "Ọjọ́ 1-30 nínú ètò ìgbésẹ̀ dojú kọ:", options: ["Fífẹ̀ sí i níbi gbogbo", "Àtúnyẹ̀wò ìkẹyìn", "Lílé òṣìṣẹ́ kúrò", "Ìpìlẹ̀: òfin, fáìlì, àwọn aṣíwájú"], answer: 3, why: "Ìpìlẹ̀ ló kọ́kọ́." },
      { objective: "O6", q: "Ọjọ́ 31-60 nínú ètò ìgbésẹ̀ dojú kọ:", options: ["Kíkọ iṣẹ́ àjọ", "Ìdánwò kékeré pẹ̀lú ìdíwọ̀n", "Kò sí nǹkankan", "Rírà gbogbo irinṣẹ́"], answer: 1, why: "Ìpele àárín ń dán ìlò AI wò." },
      { objective: "O6", q: "Ìgbà mélòó ni ìpàdé àyẹ̀wò gbọ́dọ̀ wáyé nínú ọjọ́ 90 náà?", options: ["Lẹ́ẹ̀kan lọ́dún", "Ní ọ̀sẹ̀ méjì-méjì", "Láé", "Ní wákàtí kọ̀ọ̀kan"], answer: 1, why: "Ìpàdé àyẹ̀wò déédéé ń jẹ́ kí ètò náà máa lọ dáadáa." },
      { objective: "O6", q: "Ìgbà mélòó ni a gbọ́dọ̀ tún òfin AI wò?", options: ["Láé", "Ní ọdún mẹ́wàá-mẹ́wàá", "Lẹ́yìn ìtìjú ńlá nìkan", "Ó kéré tán ní oṣù mẹ́fà-mẹ́fà"], answer: 3, why: "Àwọn irinṣẹ́ AI àti òfin ń yí padà kíákíá." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      2,
      3,
      4,
      7,
      9,
      12,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Ìmúrasílẹ̀ àti àfojúsùn",
        objective: "O2",
        notYet: "Kò sí àmì ìmúrasílẹ̀, tàbí àfojúsùn kò ní nọ́mbà tàbí ọjọ́.",
        meets: "Àmì ìmúrasílẹ̀ nínú apá márùn-ún àti àfojúsùn SMART mẹ́ta tó bá iṣẹ́ àjọ mu.",
        exceeds: "Àfojúsùn kọ̀ọ̀kan so mọ́ apá ìmúrasílẹ̀ kékeré kan tí yóò tún ṣe tàbí wá ọ̀nà yí i ká."
      },
      {
        name: "Òfin lílo AI",
        objective: "O3",
        notYet: "Kò sọ ohun tí kò gbọdọ̀ wọ inú AI láé, tàbí kò sí àyẹ̀wò ènìyàn.",
        meets: "Ojú-ewé kan pẹ̀lú àwọn irinṣẹ́ tí a fọwọ́ sí, ohun tí kò gbọdọ̀ wọlé láé, àyẹ̀wò ènìyàn, sísọ pé a lo AI, àti ẹni tí a lè bi.",
        exceeds: "Ó fi òfin fún iṣẹ́ náà kún un, bí ìsọfúnni ìlera eléré àti àwọn ọmọdé, àti ọjọ́ àtúnyẹ̀wò."
      },
      {
        name: "Tábìlì ewu",
        objective: "O4",
        notYet: "A kọ àwọn ewu sílẹ̀ láìsí ọ̀nà ìdènà.",
        meets: "Ìlò AI kọ̀ọ̀kan ní àwọn ewu pẹ̀lú bí ó ṣe lè ṣẹlẹ̀ tó, bí ó ṣe burú tó, ọ̀nà ìdènà àti ẹni tí ń ṣàyẹ̀wò.",
        exceeds: "Ó sọ nípa òtítọ́ tí kò tọ́, jíjò data àti ṣíṣe àìdọ́gba, ó sì so wọ́n mọ́ Govern, Map, Measure àti Manage."
      },
      {
        name: "Ìdálẹ́kọ̀ọ́ àti ìbánisọ̀rọ̀",
        objective: "O5",
        notYet: "Kò sí ètò láti sọ fún àwọn ènìyàn tàbí láti kọ́ wọn.",
        meets: "Ọ̀rọ̀ tí ó sọ ìdí, kí ni, àti àǹfààní tí ó wà fún wọn, àwọn aṣíwájú, àti ìpàdé ìdálẹ́kọ̀ọ́ kúkúrú.",
        exceeds: "Ó ní ìwé ìrànlọ́wọ́ prompt àti ọ̀nà láti pín àṣeyọrí àkọ́kọ́."
      },
      {
        name: "Ètò ìgbésẹ̀ ọjọ́ 90",
        objective: "O6",
        notYet: "Àwọn ìgbésẹ̀ kò ní olùdarí tàbí ọjọ́.",
        meets: "Ìpele mẹ́ta ti ọjọ́ 30, ìgbésẹ̀ kọ̀ọ̀kan pẹ̀lú olùdarí àti ọjọ́, àti ìpàdé àyẹ̀wò ní ọ̀sẹ̀ méjì-méjì.",
        exceeds: "Ó ní àtúnyẹ̀wò ọjọ́ 90 lórí àwọn àfojúsùn SMART àti ọjọ́ àtúnyẹ̀wò òfin."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege nínú iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn àjọ tí wọ́n fọwọ́ sí òfin lílo AI láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn àjọ tí wọ́n dé ó kéré tán àfojúsùn SMART kan ní ọjọ́ 90",
      "Àwọn àjọ tí wọ́n sọ pé kò sí ìṣẹ̀lẹ̀ jíjò ìsọfúnni àdáni láti inú lílo AI láàárín ọjọ́ 90 náà"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì",
      "Irinṣẹ́ ìwé àti spreadsheet (Google Docs àti Sheets tàbí Word àti Excel) fún ètò náà",
      "Àwọn ojú-ewé ọ̀fẹ́ ti NIST AI Risk Management Framework, tí kò jẹ́ dandan, fún kíkà síwájú",
      "Nǹkan bí ìṣẹ́jú 60 fún àwọn ẹ̀kọ́ àti ìdánwò, pẹ̀lú àkókò láti kọ ètò ọjọ́ 90"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ kọ́ orí kan ní ìpàdé kọ̀ọ̀kan; ẹ kún àpẹẹrẹ àmì ìmúrasílẹ̀ kan lórí ojú-iboju tí gbogbo ènìyàn ń wò.",
      "Lo àpẹẹrẹ láti inú ayé ẹgbẹ́ náà: orúkọ eléré ìdárayá, ilé-ẹ̀kọ́ eré ìdárayá, òwò kékeré tàbí àjọ aláìlérè.",
      "Rán àwọn akẹ́kọ̀ọ́ létí pé ìsọfúnni ìlera eléré, ìsọfúnni àwọn ọmọdé àti àdéhùn nílò àbójútó àfikún, àti pé ìbéèrè òfin lọ sọ́dọ̀ agbẹjọ́rò.",
      "Jẹ́ kí àwọn akẹ́kọ̀ọ́ pàṣípààrọ̀ òfin àti tábìlì ewu wọn pẹ̀lú ẹnì kejì fún àyẹ̀wò kíákíá.",
      "Fún ètò ìkẹyìn ní máàkì pẹ̀lú rubric, kí o sì fún wọn ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};

"use strict";

// Koach Learn course (Yoruba translation of youth/youth-ai-music.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "youth-ai-music-yo",
  lang: "yo",
  translationOf: "youth-ai-music",
  category: "Youth",
  name: "Ṣíṣe Orin pẹ̀lú AI",
  skills: "Ṣíṣe beat nínú sítúdíò orin ọ̀fẹ́ lórí ayélujára, Wíwá èrò ọ̀rọ̀ orin pẹ̀lú AI, Kíkọ́ ètò orin, Bíbọ̀wọ̀ fún ẹ̀tọ́ àṣẹ-ìkọ̀wé àti ohùn ènìyàn, Gbígbé orin jáde àti pínpín in láìléwu",
  outcome: "ṣe orin tuntun tìrẹ kúkúrú (nǹkan bí ìṣẹ́jú-àáyá 60) nínú sítúdíò orin ọ̀fẹ́ lórí ayélujára, kí o lo AI láti wá èrò àti ọ̀rọ̀ orin, pẹ̀lú ètò orin tó yé, láìsí orin tí a dà kọ tàbí ohùn tí a ṣe àfarawé rẹ̀, àti àkọsílẹ̀ ìdúpẹ́ (credit) tí ó sọ bí o ṣe lo AI.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn ọ̀dọ́ tí wọ́n fẹ́ràn orin, tí wọ́n sì fẹ́ ṣe orin tiwọn, kódà tí wọn kò bá tíì mọ ohun èlò orin kankan. O lè ṣe é lórí fóònù tàbí kọ̀mpútà ilé-ìwé tàbí ilé-ìkàwé.",
    "O máa ṣe beat nínú BandLab, sítúdíò orin ọ̀fẹ́ lórí ayélujára, o máa lo olùrànlọ́wọ́ AI láti wá èrò àti ọ̀rọ̀ orin, o máa kọ́ àwọn apá orin, o sì máa kọ́ àwọn òfin nípa àṣẹ-ìkọ̀wé (copyright) àti lílo ohùn ènìyàn míì. Ní ìparí, o máa gbé orin kúkúrú jáde, o sì máa pín in láìléwu.",
    "Àwọn òfin BandLab sọ pé olùlò gbọ́dọ̀ jẹ́ ọmọ ọdún 13 ó kéré tán, àti pé ẹni tí kò tíì pé ọdún 18 nílò àṣẹ òbí tàbí alágbàtọ́. Ṣàyẹ̀wò òfin ọjọ́ orí gbogbo irinṣẹ́ tí o bá lò, ṣàyẹ̀wò òfin ilé-ìwé rẹ nípa AI, kí o sì fi òbí tàbí alágbàtọ́ sí i nígbà tí o bá ń forúkọ sílẹ̀. Ẹ̀kọ́ kọ̀ọ̀kan parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\", ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Ṣe orin tuntun tìrẹ tí ó tó nǹkan bí ìṣẹ́jú-àáyá 60 nínú sítúdíò ọ̀fẹ́ lórí ayélujára: beat, intro, verse àti chorus. Lo olùrànlọ́wọ́ AI láti wá kókó ọ̀rọ̀ àti ó kéré tán ìlà mẹ́rin ọ̀rọ̀ orin, lẹ́yìn náà tún wọn kọ ní ọ̀rọ̀ ara rẹ. Má ṣe lo orin tí a dà kọ tàbí ẹ̀dà AI ti ohùn ènìyàn gidi. Gbé e jáde (export), kí o sì kọ àkọsílẹ̀ ìdúpẹ́ kúkúrú tí ó sọ ohun tí o ṣe àti bí o ṣe lo AI.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn ọ̀dọ́ tí wọ́n fẹ́ràn orin, tí wọ́n sì fẹ́ ṣe orin tiwọn, pẹ̀lú àwọn tí wọn kò tíì mọ ohun èlò orin kankan.",
    startingPoint: "Wọ́n ń gbọ́ orin lójoojúmọ́, wọ́n sì mọ àwọn orin tí wọ́n fẹ́ràn. Ọ̀pọ̀ jù lọ kò tíì ṣe beat rí, kò tíì ṣètò orin rí, kò sì tíì kọ́ òfin nípa àṣẹ-ìkọ̀wé, sample àti ohùn AI.",
    gap: "Àwọn irinṣẹ́ orin AI ń jẹ́ kí ó rọrùn láti da orin tàbí ohùn kọ láìmọ̀ pé kò tọ́, àti pé títẹ prompt nìkan kò sọ ẹnìkan di olùdá orin. Àwọn ọ̀dọ́ nílò láti ṣe orin tuntun fúnra wọn, láti lo AI fún wíwá èrò nìkan, kí wọ́n sì pín iṣẹ́ wọn pẹ̀lú òtítọ́ àti láìléwu.",
    constraints: [
      "Òfin ọjọ́ orí: BandLab àti àwọn irinṣẹ́ míì ní ọjọ́ orí tó kéré jù, wọ́n sì nílò àṣẹ òbí tàbí alágbàtọ́ fún àwọn tí kò tíì pé ọdún 18",
      "Òfin AI ilé-ìwé fún kíláàsì orin",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà ilé-ìwé tàbí ilé-ìkàwé tí ó ní browser; irinṣẹ́ ọ̀fẹ́ nìkan",
      "Àṣẹ-ìkọ̀wé àti ẹ̀tọ́ ohùn: kò sí orin tí a dà kọ, sample láìsí àṣẹ, tàbí ẹ̀dà AI ti ohùn gidi",
      "Ìkọ̀kọ̀ nígbà pínpín: kò sí orúkọ kíkún, ilé-ìwé tàbí ibi tí o wà nínú ohun tí o fi síta gbangba"
    ],
    prerequisites: "Kò sí."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Nígbà tí o bá ń ronú nípa orin tí o ń gbọ́ àti èyí tí o ń ṣe", action: "ṣàlàyé bí a ṣe ń lo AI nínú orin àti àwọn òfin ìpìlẹ̀ tí o máa tẹ̀lé", standard: "kí o sì dárúkọ ìlò mẹ́ta àti òfin nípa dída nǹkan kọ, ohùn, ọjọ́ orí àti òtítọ́" },
    { id: "O2", condition: "Nígbà tí o bá ń lo sítúdíò ọ̀fẹ́ lórí ayélujára bí BandLab, pẹ̀lú àṣẹ òbí tàbí alágbàtọ́", action: "ṣe beat onígbọ̀n mẹ́rin (4 bars) pẹ̀lú ìlù àti ohùn míì kan ní tempo tí ó bá ìmọ̀lára orin mu", standard: "tí ó ń dún láìdáwọ́dúró" },
    { id: "O3", condition: "Tí o bá ní kókó ọ̀rọ̀ kan láti inú ayé rẹ", action: "lo AI láti wá àwòrán ọ̀rọ̀ àti ọ̀rọ̀ tó ń dún bákan náà (rhyme), lẹ́yìn náà kọ ìlà mẹ́rin ọ̀rọ̀ orin ní ọ̀rọ̀ ara rẹ", standard: "tí àwọn ìlà náà bá beat mu nígbà tí o bá kà wọ́n sókè" },
    { id: "O4", condition: "Tí o bá ní beat àti ọ̀rọ̀ orin rẹ", action: "ṣètò orin náà sí intro, verse àti chorus", standard: "tí ó gùn tó nǹkan bí ìṣẹ́jú-àáyá 60, tí apá kọ̀ọ̀kan sì dún yàtọ̀ díẹ̀" },
    { id: "O5", condition: "Fún gbogbo ohùn àti ìró nínú orin rẹ", action: "pinnu bóyá ìró tàbí ohùn kọ̀ọ̀kan ṣeé lò, kí o sì yọ ohunkóhun tí o kò lè fi hàn pé a gbà láàyè kúrò", standard: "láìsí orin tí a dà kọ, sample tí kò ní àṣẹ tàbí ẹ̀dà AI ti ohùn gidi" },
    { id: "O6", condition: "Nígbà tí orin náà bá ti parí", action: "ṣe ìwọ̀ntúnwọ̀nsì ohùn (mix), gbé orin náà jáde kí o sì kọ àkọsílẹ̀ ìdúpẹ́ tí ó jẹ́ òtítọ́", standard: "kí o pín in níbi tí ẹbí rẹ gbà nìkan, kí o sì pa ìsọfúnni àdáni rẹ mọ́" }
  ],
  chapters: [
    {
      name: "Orí 1: Ṣíṣe orin pẹ̀lú AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Bí a ṣe ń lo AI nínú orin, àti àwọn òfin ìpìlẹ̀",
          minutes: 4,
          goal: "Ṣàlàyé ọ̀nà mẹ́ta tí a ń gbà lo AI nínú orin àti àwọn òfin tí o máa tẹ̀lé.",
          text: [
            "A ń lo AI nínú orin ní ọ̀pọ̀ ọ̀nà: àwọn app tí ó ń dábàá chord tàbí ìlànà ìlù, àwọn irinṣẹ́ tí ó ń mú ohùn tí a gbà sílẹ̀ mọ́, àwọn olùrànlọ́wọ́ bí ChatGPT, Microsoft Copilot tàbí Google Gemini tí ó ń ràn ọ́ lọ́wọ́ láti wá èrò ọ̀rọ̀ orin, àti àwọn ẹ̀rọ tí ó ń ṣe odindi orin láti inú prompt ọ̀rọ̀.",
            "Nínú ẹ̀kọ́ yìí, AI ni alábàáṣiṣẹ́ rẹ fún wíwá èrò. Ìwọ lo ń ṣe àwọn ìpinnu pàtàkì. Èyí ṣe pàtàkì fún ẹ̀kọ́, ó sì ṣe pàtàkì lábẹ́ òfin pẹ̀lú: U.S. Copyright Office (ọ́fíìsì àṣẹ-ìkọ̀wé ìjọba Amẹ́ríkà) ti sọ pé títẹ prompt nìkan kò tó láti sọ ọ́ di olùdá ohun tí AI ṣe. Ọ̀rọ̀ tìrẹ, ìró tìrẹ àti ètò tìrẹ ló ka.",
            "Àwọn òfin ìpìlẹ̀: má ṣe da orin ẹlòmíì kọ, má ṣe lo ẹ̀dà AI ti ohùn olórin gidi tàbí ti ọmọ kíláàsì rẹ, ṣàyẹ̀wò òfin ọjọ́ orí irinṣẹ́ kọ̀ọ̀kan, tẹ̀lé òfin AI ilé-ìwé rẹ fún kíláàsì orin, kí o sì sọ òtítọ́ nípa bí o ṣe lo AI."
          ],
          words: [["Ẹ̀rọ ṣíṣe orin AI (AI music generator)", "irinṣẹ́ tí ó ń ṣe orin láti inú àpèjúwe ọ̀rọ̀."], ["Olùdá (author)", "ẹni tí ó ṣe iṣẹ́ kan, tí ó sì lè ní àṣẹ-ìkọ̀wé rẹ̀."], ["Prompt", "ohun tí o tẹ láti béèrè nǹkan lọ́wọ́ AI."]],
          slides: [
            { title: "AI nínú orin", bullets: ["Ó ń dábàá chord àti ìlànà ìlù", "Ó ń mú ohùn tí a gbà sílẹ̀ mọ́", "Ó ń ràn ọ́ lọ́wọ́ láti wá èrò ọ̀rọ̀ orin", "Ó ń ṣe orin láti inú prompt"] },
            { title: "AI ni alábàáṣiṣẹ́ rẹ", bullets: ["Ìwọ lo ń ṣe àwọn ìpinnu pàtàkì", "Prompt nìkan kò sọ ọ́ di olùdá", "Ọ̀rọ̀ àti ìró tìrẹ ló ka"] },
            { title: "Àwọn òfin ìpìlẹ̀", bullets: ["Kò sí orin tí a dà kọ", "Kò sí ẹ̀dà AI ti ohùn ènìyàn gidi", "Ṣàyẹ̀wò òfin ọjọ́ orí àti òfin ilé-ìwé", "Sọ òtítọ́ nípa lílo AI"] }
          ],
          sources: [{ name: "U.S. Copyright Office: Copyright and Artificial Intelligence, Part 2 (copyrightability)", url: "https://www.copyright.gov/newsnet/2025/1060.html" }, { name: "U.S. Copyright Office: Copyright and AI", url: "https://www.copyright.gov/ai/" }],
          tryIt: "Kọ orúkọ orin kan tí o fẹ́ràn àti nǹkan mẹ́ta tí o fẹ́ràn nípa rẹ̀ (beat, ìmọ̀lára, ọ̀rọ̀ rẹ̀). Àwọn wọ̀nyí ni èrò tí o lè kẹ́kọ̀ọ́ láti inú rẹ̀ láìda orin náà kọ.",
          youCanNow: "dárúkọ àwọn ọ̀nà tí a ń gbà lo AI nínú orin, kí o sì ṣàlàyé àwọn òfin láti lò ó lọ́nà tó tọ́.",
          quickCheck: [
            { objective: "O1", q: "Èwo ni ọ̀nà kan tí a ń gbà lo AI nínú orin?", options: ["Irinṣẹ́ tí ó ń mú ohùn tí a gbà sílẹ̀ mọ́", "Títún gìtá ṣe pẹ̀lú ọwọ́", "Títẹ tíkẹ́ẹ̀tì eré orin", "Kíkọ́ ẹ̀rọ agbóhùnsáfẹ́fẹ́ (speaker)"], answer: 0, why: "AI ń dábàá chord, ó ń mú ohùn mọ́, ó ń ràn ọ́ lọ́wọ́ pẹ̀lú ọ̀rọ̀ orin, ó sì lè ṣe orin." },
            { objective: "O1", q: "Ẹ̀rọ ṣíṣe orin kan ṣe odindi orin láti inú prompt ìlà kan tí o kọ. Ṣé o lè pè é ní iṣẹ́ tìrẹ pátápátá?", options: ["Bẹ́ẹ̀ ni, prompt ló sọ ọ́ di olùdá", "Bẹ́ẹ̀ ni, tí o bá yí orúkọ rẹ̀ padà", "Rárá; prompt nìkan kò tó, nítorí náà ṣe àwọn ìpinnu pàtàkì fúnra rẹ", "Tí kò bá sí ẹni tó béèrè nìkan"], answer: 2, why: "U.S. Copyright Office sọ pé títẹ prompt nìkan kò tó láti sọ ọ́ di olùdá." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ṣíṣe beat àkọ́kọ́ rẹ nínú sítúdíò ọ̀fẹ́ lórí ayélujára",
          minutes: 6,
          goal: "Ṣí sítúdíò ọ̀fẹ́ lórí ayélujára kí o sì ṣe beat onígbọ̀n mẹ́rin pẹ̀lú ìlù àti ohùn míì kan.",
          text: [
            "BandLab jẹ́ app orin ọ̀fẹ́ àti ojú-òpó wẹ́ẹ̀bù tí ó ní sítúdíò lórí ayélujára fún ṣíṣe orin. O lè lò ó nínú browser ní bandlab.com tàbí nínú app rẹ̀ láti ilé ìtajà app gidi. O nílò àkáǹtì, nítorí náà fi òbí tàbí alágbàtọ́ sí i nígbà tí o bá ń forúkọ sílẹ̀.",
            "A ń ka orin ní beat àti bar. Ọ̀pọ̀ orin pop àti hip-hop ní beat 4 nínú bar kan. Loop jẹ́ apá orin kúkúrú tí ó ń tún ara rẹ̀ ṣe. Ọ̀pọ̀ beat máa ń bẹ̀rẹ̀ pẹ̀lú loop ìlù, lẹ́yìn náà bass, lẹ́yìn náà ohùn kan sí i bí keys tàbí gìtá.",
            "Àwọn mẹ́nù máa ń yí padà, nítorí náà wá àwọn ìṣe wọ̀nyí: bẹ̀rẹ̀ project tuntun, fi track kún un, yan ohun èlò orin tàbí wo àwọn loop, fa loop sórí track, kí o sì tẹ play. Yí tempo (ìyára) padà kí ó bá ìmọ̀lára mu: lọ́ra fún ìtura, yára fún ayọ̀ àti agbára (hype)."
          ],
          steps: ["Pẹ̀lú òbí tàbí alágbàtọ́, forúkọ sílẹ̀ fún BandLab tàbí sítúdíò ọ̀fẹ́ míì lórí ayélujára.", "Bẹ̀rẹ̀ project tuntun.", "Fi track ìlù kún un, nípa lílo loop tàbí títẹ ìlànà ìlù tó rọrùn.", "Fi track bass tàbí keys tí ó bá ìlù mu kún un.", "Ṣètò tempo, jẹ́ kí ó gùn tó bar 4, kí o sì tẹ play."],
          words: [["Beat", "ìlù tí ó ń lọ déédéé nínú orin; ó tún túmọ̀ sí orin kúkúrú tí kò ní ọ̀rọ̀."], ["Bar", "àkójọ beat, tí ó sábà máa ń jẹ́ 4."], ["Loop", "apá orin kúkúrú tí ó ń tún ara rẹ̀ ṣe."], ["Tempo", "bí orin ṣe ń yára tó, tí a ń kà ní beat lóòrèkan ìṣẹ́jú (BPM)."]],
          slides: [
            { title: "Sítúdíò ọ̀fẹ́ lórí ayélujára", bullets: ["BandLab: browser tàbí app gidi", "Forúkọ sílẹ̀ pẹ̀lú òbí tàbí alágbàtọ́", "Lábẹ́ òfin BandLab, olùlò gbọ́dọ̀ jẹ́ ọmọ ọdún 13 sókè"] },
            { title: "Beat, bar àti loop", bullets: ["Ọ̀pọ̀ orin: beat 4 nínú bar kan", "Loop jẹ́ apá kúkúrú tí ó ń tún ara rẹ̀ ṣe", "Bẹ̀rẹ̀ pẹ̀lú ìlù, lẹ́yìn náà bass, lẹ́yìn náà ọ̀kan sí i"] },
            { title: "Ṣe beat rẹ", bullets: ["Project tuntun, fi track kún un", "Yan loop tàbí ohun èlò orin", "Ṣètò tempo kí o sì tẹ play"] }
          ],
          sources: [{ name: "BandLab Terms of Use (age and parent permission)", url: "https://bandlabtechnologies.com/policies/bandlab-terms-of-use/" }],
          tryIt: "Ṣe beat onígbọ̀n mẹ́rin (4 bars) pẹ̀lú ìlù àti ohùn míì kan. Gbìyànjú tempo méjì tí ó yàtọ̀, kí o sì mú èyí tí ó bá ìmọ̀lára tí o fẹ́ mu.",
          youCanNow: "ṣí sítúdíò ọ̀fẹ́ lórí ayélujára kí o sì ṣe beat kúkúrú láti inú track àti loop.",
          quickCheck: [
            { objective: "O2", q: "Kí ni bar nínú orin?", options: ["Ìró tí ó ga", "Irú ìlù kan", "App fún gbígba ohùn sílẹ̀", "Àkójọ beat, tí ó sábà jẹ́ 4 nínú pop àti hip-hop"], answer: 3, why: "A ń ka orin ní beat àti bar, ọ̀pọ̀ orin pop àti hip-hop sì ní beat 4 nínú bar kan." },
            { objective: "O2", q: "Beat rẹ yẹ kí ó ní agbára (hype), ṣùgbọ́n ó ń dún bí ẹni tí oorun ń kùn. Kí ni o máa yí padà?", options: ["Dín ohùn rẹ̀ kù", "Mú tempo yára sí i", "Pa ìlù rẹ́", "Fi bar ìdákẹ́rọ́rọ́ sí i"], answer: 1, why: "Tempo ni ìyára: yára fún hype, lọ́ra fún ìtura." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Wíwá èrò ọ̀rọ̀ orin pẹ̀lú AI",
          minutes: 5,
          goal: "Lo AI láti wá kókó ọ̀rọ̀ àti rhyme, lẹ́yìn náà kọ ọ̀rọ̀ orin ní ọ̀rọ̀ ara rẹ.",
          text: [
            "Bẹ̀rẹ̀ pẹ̀lú kókó ọ̀rọ̀ kan láti inú ayé rẹ: ọjọ́ àkọ́kọ́ ní ilé-ìwé tuntun, iṣẹ́ ìgbà ẹ̀ẹ̀rùn, ọ̀rẹ́ tí ó ń kó lọ, wíwọ inú ẹgbẹ́ eré ìdárayá. Ìmọ̀lára gidi máa ń ṣe orin tó dára ju èyí tí ó jẹ́ gbogbogbò lọ.",
            "Béèrè èrò lọ́wọ́ AI, kì í ṣe orin tí ó ti parí: \"Fún mi ní àwòrán àti gbólóhùn 10 nípa ọjọ́ ìkẹyìn ìsinmi kí n tó wọ ilé-ìwé gíga\" tàbí \"Fún mi ní ọ̀rọ̀ tí ó ń dún bí 'late' àti 'wait'.\" Lẹ́yìn náà yan ohun tí o fẹ́ràn kí o sì kọ àwọn ìlà náà fúnra rẹ.",
            "Ka sílébù kí ọ̀rọ̀ lè bá beat mu. Ka àwọn ìlà rẹ sókè lórí beat. Tí ìlà kan bá kún jù, yọ ọ̀rọ̀ kúrò. Ọ̀rọ̀ orin rẹ gbọ́dọ̀ dún bí ìwọ."
          ],
          steps: ["Yan kókó ọ̀rọ̀ kan láti inú ayé rẹ.", "Béèrè àwòrán, gbólóhùn tàbí rhyme lọ́wọ́ AI, kì í ṣe odindi orin.", "Kọ ìlà mẹ́rin ní ọ̀rọ̀ ara rẹ.", "Kà wọ́n sókè lórí beat rẹ.", "Yọ ọ̀rọ̀ kúrò tàbí yí wọn padà títí wọn yóò fi bá a mu."],
          words: [["Ọ̀rọ̀ orin (lyrics)", "àwọn ọ̀rọ̀ inú orin."], ["Kókó ọ̀rọ̀ (theme)", "ohun tí orin dá lé."], ["Sílébù", "ìró kan nínú ọ̀rọ̀; \"o-rin\" ní méjì."]],
          slides: [
            { title: "Bẹ̀rẹ̀ láti inú ayé rẹ", bullets: ["Àkókò tàbí ìmọ̀lára gidi", "Ohun pàtó dára ju ohun gbogbogbò lọ"] },
            { title: "Béèrè èrò, kì í ṣe orin", bullets: ["\"Àwòrán 10 nípa...\"", "\"Rhyme fún 'late'\"", "Ìwọ lo ń yàn, ìwọ lo sì ń kọ"] },
            { title: "Jẹ́ kí ó bá a mu", bullets: ["Ka sílébù", "Kà á lórí beat", "Yọ ọ̀rọ̀ kúrò nínú ìlà tí ó kún jù"] }
          ],
          tryIt: "Yan kókó ọ̀rọ̀ kan, béèrè àwòrán tàbí gbólóhùn 10 nípa rẹ̀ lọ́wọ́ olùrànlọ́wọ́ AI, kí o sì kọ ìlà mẹ́rin ọ̀rọ̀ orin ní ọ̀rọ̀ ara rẹ tí ó bá beat rẹ mu.",
          youCanNow: "wá èrò pẹ̀lú AI kí o sì kọ ọ̀rọ̀ orin tuntun tìrẹ tí ó bá beat mu.",
          quickCheck: [
            { objective: "O3", q: "Kí ni o yẹ kí o béèrè lọ́wọ́ AI nígbà tí o bá ń kọ ọ̀rọ̀ orin?", options: ["Orin tí ó ti parí láti dà kọ", "Ọ̀rọ̀ orin ọ̀rẹ́ rẹ", "Ọ̀rọ̀ orin olókìkí kan", "Èrò bí àwòrán, gbólóhùn tàbí rhyme"], answer: 3, why: "AI ń fúnni ní èrò; ìwọ lo ń kọ àwọn ìlà kí wọ́n lè dún bí ìwọ." },
            { objective: "O3", q: "Ìlà kan kún jù nígbà tí o bá kà á lórí beat. Kí ni o máa ṣe?", options: ["Yọ ọ̀rọ̀ kúrò tàbí yí wọn padà títí yóò fi bá a mu", "Mú gbogbo orin yára sí i", "Fi ọ̀rọ̀ kún un", "Fi í sílẹ̀ kí o sì rap kíákíá"], answer: 0, why: "Kíka sílébù àti yíyọ ọ̀rọ̀ kúrò ń jẹ́ kí ìlà bá beat mu." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ṣíṣe orin pẹ̀lú AI",
        questions: [
          { objective: "O1", q: "Gẹ́gẹ́ bí U.S. Copyright Office ti sọ, ṣé títẹ prompt nìkan tó láti sọ ọ́ di olùdá ohun tí AI ṣe?", options: ["Bẹ́ẹ̀ ni, nígbà gbogbo", "Rárá, prompt nìkan kò tó", "Fún orin nìkan", "Tí o bá sanwó nìkan"], answer: 1, why: "Ọ́fíìsì náà sọ pé fífúnni ní prompt nìkan kò tó." },
          { objective: "O1", q: "Ọ̀rẹ́ kan fẹ́ lo ẹ̀dà AI ti ohùn olórin olókìkí kan nínú orin rẹ. Kí ni o máa ṣe?", options: ["Lò ó", "Lò ó ṣùgbọ́n fi í pamọ́", "Kọ̀ ọ́, kí o sì lo ohùn tìrẹ tàbí ti ẹni tí ó gbà", "Da gbogbo orin náà kọ pẹ̀lú"], answer: 2, why: "Má ṣe lo ohùn ènìyàn gidi láìsí àṣẹ rẹ̀." },
          { objective: "O2", q: "Kí ni loop?", options: ["Apá orin kúkúrú tí ó ń tún ara rẹ̀ ṣe", "Ọ̀rọ̀ orin", "Bọ́tìnnì ohùn", "Irú gbohùngbohùn (microphone) kan"], answer: 0, why: "Loop ń tún ara rẹ̀ ṣe, ó sì jẹ́ ọ̀nà tí ó wọ́pọ̀ láti ṣe beat." },
          { objective: "O2", q: "Kí ni tempo túmọ̀ sí?", options: ["Bí orin ṣe ga tó", "Orúkọ orin", "Iye track tí o ní", "Bí orin ṣe ń yára tó"], answer: 3, why: "Tempo ni ìyára, tí a ń kà ní beat lóòrèkan ìṣẹ́jú." },
          { objective: "O3", q: "Ìbéèrè AI wo ló bá ẹ̀kọ́ yìí mu jù?", options: ["\"Kọ odindi orin mi\"", "\"Fún mi ní àwòrán 10 nípa iṣẹ́ ìgbà ẹ̀ẹ̀rùn àkọ́kọ́ mi\"", "\"Da orin olókìkí kan kọ\"", "\"Kọrin ní ohùn olùkọ́ mi\""], answer: 1, why: "Béèrè èrò lọ́wọ́ AI, lẹ́yìn náà kọ orin náà fúnra rẹ." }
        ]
      }
    },
    {
      name: "Orí 2: Kíkọ́, dídáàbò bo àti pínpín orin rẹ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kíkọ́ ètò orin",
          minutes: 5,
          goal: "Ṣètò orin rẹ sí intro, verse àti chorus.",
          text: [
            "Àwọn apá ni a fi ń kọ́ ọ̀pọ̀ orin. Intro ń ṣí orin. Verse ń sọ ìtàn, ọ̀rọ̀ rẹ̀ sì ń yí padà ní ìgbà kọ̀ọ̀kan. Chorus ni apá tí ó ń wọni lọ́kàn tí ó ń tún ara rẹ̀ ṣe. Orin kúkúrú lè lọ báyìí: intro, verse, chorus.",
            "Jẹ́ kí apá kọ̀ọ̀kan dún yàtọ̀ díẹ̀. Fún àpẹẹrẹ, intro ní keys nìkan, verse fi ìlù kún un, chorus sì fi bass àti melody kún un. Da àwọn apá kọ kí o sì lẹ̀ wọ́n mọ́ (copy àti paste) nínú sítúdíò láti kọ́ orin náà lórí timeline.",
            "O lè béèrè lọ́wọ́ AI: \"Mo ní beat onígbọ̀n mẹ́rin ní 90 BPM. Báwo ni mo ṣe lè ṣètò orin ìṣẹ́jú-àáyá 60 pẹ̀lú intro, verse àti chorus?\" Lẹ́yìn náà gbìyànjú àwọn èrò rẹ̀, kí o sì gbẹ́kẹ̀ lé etí rẹ."
          ],
          steps: ["Ṣètò bí wọ́n ṣe máa tẹ̀lé ara wọn: intro, verse, chorus.", "Da beat rẹ kọ láti ṣe apá kọ̀ọ̀kan.", "Yọ ìró kúrò tàbí fi ìró kún un kí apá kọ̀ọ̀kan lè dún yàtọ̀.", "Fi ọ̀rọ̀ orin rẹ sórí verse àti chorus.", "Tẹ́tí sí gbogbo rẹ̀ kí o sì tún un ṣe."],
          words: [["Intro", "ìbẹ̀rẹ̀ orin."], ["Verse", "apá tí ó ń sọ ìtàn; ọ̀rọ̀ rẹ̀ ń yí padà ní ìgbà kọ̀ọ̀kan."], ["Chorus", "apá tí ó ń wọni lọ́kàn tí ó ń tún ara rẹ̀ ṣe."], ["Ètò orin (arrangement)", "bí a ṣe tò àwọn apá orin tẹ̀lé ara wọn àti bí a ṣe tò wọ́n lé ara wọn."]],
          slides: [
            { title: "Àwọn apá orin", bullets: ["Intro: ó ń ṣí orin", "Verse: ó ń sọ ìtàn", "Chorus: apá tí ó ń wọni lọ́kàn tí ó ń tún ara rẹ̀ ṣe"] },
            { title: "Jẹ́ kí apá kọ̀ọ̀kan yàtọ̀", bullets: ["Intro: ìró díẹ̀", "Verse: fi ìlù kún un", "Chorus: fi bass àti melody kún un"] },
            { title: "Béèrè lọ́wọ́ AI, gbẹ́kẹ̀ lé etí rẹ", bullets: ["Béèrè èrò fún ètò orin", "Gbìyànjú wọn", "Mú ohun tí ó dún dáadáa sí ọ"] }
          ],
          tryIt: "Ṣètò beat rẹ sí intro, verse àti chorus tí ó tó nǹkan bí ìṣẹ́jú-àáyá 60. Fi ìlà mẹ́rin ọ̀rọ̀ orin rẹ kún un gẹ́gẹ́ bí àkọsílẹ̀ ọ̀rọ̀, tàbí gbà wọ́n sílẹ̀ tí o bá fẹ́.",
          youCanNow: "ṣètò orin sí àwọn apá tó yé tí ọ̀kọ̀ọ̀kan ń dún yàtọ̀.",
          quickCheck: [
            { objective: "O4", q: "Kí ni intro orin máa ń ṣe?", options: ["Ó ń tún apá tí ó ń wọni lọ́kàn ṣe", "Ó ń parí orin", "Ó ń ṣí orin", "Ó ń sọ gbogbo ìtàn"], answer: 2, why: "Intro ń ṣí orin ṣáájú verse àti chorus." },
            { objective: "O4", q: "Intro, verse àti chorus rẹ ń dún bákan náà. Kí ni o máa ṣe?", options: ["Yọ ìró kúrò tàbí fi ìró kún un kí apá kọ̀ọ̀kan lè dún yàtọ̀", "Mú ohùn gbogbo apá ga sí i", "Pa chorus rẹ́", "Lo orin míì"], answer: 0, why: "Yíyí ìró tí ó ń dún ní apá kọ̀ọ̀kan padà ń jẹ́ kí ètò orin yé." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Àṣẹ-ìkọ̀wé, sample àti ohùn",
          minutes: 5,
          goal: "Pinnu bóyá ìró tàbí ohùn kan ṣeé lò nínú orin rẹ.",
          text: [
            "Àṣẹ-ìkọ̀wé (copyright) ń dáàbò bo iṣẹ́ tuntun bí orin àti ohùn tí a gbà sílẹ̀. Gẹ́gẹ́ bí U.S. Copyright Office ti sọ, a ti dáàbò bo iṣẹ́ kan ní kété tí a bá ṣe é tí a sì fi í sí ọ̀nà tí ènìyàn lè gbọ́ tàbí rí i, àti pé fífi orúkọ rẹ̀ sílẹ̀ (registration) kì í sábà jẹ́ dandan. Nítorí náà, a ti dáàbò bo ọ̀pọ̀ orin tí o ń gbọ́, orin tí o ṣe sì jẹ́ tìrẹ.",
            "Lílo apá kan nínú ohùn tí ẹlòmíì gbà sílẹ̀ ni a ń pè ní sampling. Má ṣe sample orin àyàfi tí o bá ní àṣẹ tàbí tí ìró náà bá wá láti inú ibi ìkójọ tí ó sọ pé o lè lò ó, bí àwọn loop inú sítúdíò rẹ. Ka àwọn òfin irinṣẹ́ náà.",
            "Ohùn jẹ́ ti ẹni kọ̀ọ̀kan. Má ṣe ṣe tàbí lo ẹ̀dà AI ti ohùn ènìyàn gidi, ìbáà ṣe olórin olókìkí, olùkọ́ tàbí ọmọ kíláàsì rẹ, láìsí àṣẹ tó yé láti ọ̀dọ̀ wọn. Tí o kò bá dá a lójú pé nǹkan kan dára, fi í sílẹ̀ tàbí béèrè lọ́wọ́ olùkọ́ tàbí òbí."
          ],
          steps: ["Béèrè pé: ṣé èmi ni mo ṣe ìró yìí, àbí irinṣẹ́ náà sọ pé mo lè lò ó?", "Tí ó bá wá láti inú orin ẹlòmíì, fi í sílẹ̀ àyàfi tí o bá ní àṣẹ.", "Má ṣe lo ẹ̀dà AI ti ohùn ènìyàn gidi láìsí àṣẹ láéláé.", "Tí o kò bá dá a lójú, fi í sílẹ̀ tàbí béèrè lọ́wọ́ àgbàlagbà tí o gbẹ́kẹ̀ lé."],
          words: [["Àṣẹ-ìkọ̀wé (copyright)", "ẹ̀tọ́ òfin tí olùdá ní láti darí bí a ṣe ń ṣe ẹ̀dà iṣẹ́ rẹ̀."], ["Sample", "apá kan nínú ohùn tí ẹlòmíì gbà sílẹ̀ tí a lò nínú orin tuntun."], ["Ẹ̀dà ohùn (voice clone)", "ẹ̀dà AI ti ohùn ènìyàn gidi."]],
          slides: [
            { title: "Ìpìlẹ̀ àṣẹ-ìkọ̀wé", bullets: ["Ó ń dáàbò bo orin àti ohùn tí a gbà sílẹ̀", "Ó ń bẹ̀rẹ̀ nígbà tí a bá ṣe iṣẹ́ tí a sì fi í sí ọ̀nà tí a lè gbọ́ tàbí rí", "Fífi orúkọ sílẹ̀ kì í sábà jẹ́ dandan"] },
            { title: "Sample", bullets: ["Má ṣe sample orin láìsí àṣẹ", "Loop sítúdíò: ṣàyẹ̀wò òfin irinṣẹ́ náà"] },
            { title: "Ohùn", bullets: ["Kò sí ẹ̀dà AI ti ènìyàn gidi láìsí àṣẹ", "Pẹ̀lú olórin olókìkí, olùkọ́ àti ọmọ kíláàsì", "Kò dá ọ lójú? Fi í sílẹ̀ tàbí béèrè"] }
          ],
          sources: [{ name: "U.S. Copyright Office: Copyright basics FAQ", url: "https://www.copyright.gov/help/faq/faq-general.html" }, { name: "U.S. Copyright Office: Copyright and Artificial Intelligence", url: "https://www.copyright.gov/ai/" }],
          tryIt: "Kọ gbogbo ìró inú orin rẹ sílẹ̀ àti ibi tí ó ti wá: ìwọ lo ṣe é, loop sítúdíò ni, tàbí nǹkan míì. Yọ ohunkóhun tí o kò lè sọ pé ó ṣeé lò kúrò.",
          youCanNow: "ṣàyẹ̀wò gbogbo ìró àti ohùn inú orin rẹ, kí o sì mú àwọn tí a gbà ọ́ láàyè láti lò nìkan.",
          quickCheck: [
            { objective: "O5", q: "Kí ni sampling?", options: ["Gbígba ohùn tìrẹ sílẹ̀", "Lílo apá kan nínú ohùn tí ẹlòmíì gbà sílẹ̀ nínú orin tuntun", "Yíyí tempo padà", "Gbígbé orin jáde"], answer: 1, why: "Sampling túmọ̀ sí lílo apá kan nínú ohùn tí ẹlòmíì gbà sílẹ̀." },
            { objective: "O5", q: "O rí ìró tó dára kan lórí ayélujára ṣùgbọ́n o kò mọ ẹni tí ó ṣe é tàbí bóyá o lè lò ó. Kí ni o máa ṣe?", options: ["Lò ó; kò sí ẹni tí yóò kíyèsí i", "Mú un yára kí ó lè dún yàtọ̀", "Kọ orúkọ ara rẹ bí ẹni tí ó ṣe é", "Fi í sílẹ̀ tàbí béèrè lọ́wọ́ àgbàlagbà tí o gbẹ́kẹ̀ lé"], answer: 3, why: "Tí o kò bá lè sọ pé ìró kan ṣeé lò, fi í sílẹ̀ tàbí béèrè." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mixing, gbígbé jáde àti pínpín láìléwu",
          minutes: 5,
          goal: "Ṣe ìwọ̀ntúnwọ̀nsì orin rẹ, gbé e jáde, kí o sì pín in pẹ̀lú àkọsílẹ̀ ìdúpẹ́ tí ó jẹ́ òtítọ́.",
          text: [
            "Mixing túmọ̀ sí ṣíṣètò bí track kọ̀ọ̀kan ṣe ga tó kí ọ̀kan má bàa bo àwọn yòókù mọ́lẹ̀. Dín ohunkóhun tí ó ga jù kù, kí o sì tẹ́tí sí i lórí headphone àti lórí speaker fóònù.",
            "Lẹ́yìn náà gbé orin náà jáde tàbí fi í pamọ́ gẹ́gẹ́ bí fáìlì ohùn nípa lílo export tàbí download inú sítúdíò. Kọ àkọsílẹ̀ ìdúpẹ́ kúkúrú: orúkọ rẹ tàbí orúkọ olórin rẹ, àkọlé, àti bí o ṣe lo AI, fún àpẹẹrẹ \"AI ràn mí lọ́wọ́ láti wá èrò ọ̀rọ̀ orin; èmi ni mo kọ, tí mo sì ṣètò gbogbo orin àti ọ̀rọ̀ rẹ̀.\"",
            "Pín in láìléwu: fi síta níbi tí ẹbí rẹ gbà nìkan, pa orúkọ kíkún rẹ, ilé-ìwé rẹ àti ibi tí o wà mọ́ tí o bá fi síta gbangba, kí o sì ronú kí o tó ṣí àwọn comment. Tí orin rẹ bá jẹ́ fún ilé-ìwé, tẹ̀lé òfin olùkọ́ rẹ nípa AI."
          ],
          steps: ["Ṣe ìwọ̀ntúnwọ̀nsì ohùn track kọ̀ọ̀kan.", "Tẹ́tí sí i lórí headphone àti lórí speaker fóònù.", "Gbé orin náà jáde tàbí fi í pamọ́ gẹ́gẹ́ bí fáìlì ohùn.", "Kọ àkọsílẹ̀ ìdúpẹ́ tí ó sọ bí o ṣe lo AI.", "Pín in níbi tí ẹbí rẹ gbà nìkan, kí o sì pa ìsọfúnni àdáni mọ́."],
          words: [["Mixing", "ṣíṣe ìwọ̀ntúnwọ̀nsì bí track kọ̀ọ̀kan ṣe ga tó."], ["Export", "fi project rẹ pamọ́ gẹ́gẹ́ bí fáìlì tí àwọn míì lè tẹ́tí sí."], ["Àkọsílẹ̀ ìdúpẹ́ (credit note)", "àkọsílẹ̀ kúkúrú tí ó sọ ẹni tí ó ṣe kí ni."]],
          slides: [
            { title: "Ṣe mixing", bullets: ["Ṣe ìwọ̀ntúnwọ̀nsì ohùn track kọ̀ọ̀kan", "Ṣàyẹ̀wò lórí headphone àti speaker fóònù"] },
            { title: "Gbé jáde kí o sì kọ ìdúpẹ́", bullets: ["Fi pamọ́ gẹ́gẹ́ bí fáìlì ohùn", "Àkọlé àti orúkọ olórin", "Sọ bí o ṣe lo AI"] },
            { title: "Pín in láìléwu", bullets: ["Níbi tí ẹbí rẹ gbà", "Pa orúkọ, ilé-ìwé àti ibi tí o wà mọ́", "Tẹ̀lé òfin AI ilé-ìwé"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: parí orin tuntun tìrẹ ti ìṣẹ́jú-àáyá 60 pẹ̀lú beat, intro, verse àti chorus àti ọ̀rọ̀ orin tìrẹ. Ṣàyẹ̀wò pé gbogbo ìró ṣeé lò, gbé e jáde, kí o sì kọ àkọsílẹ̀ ìdúpẹ́ tí ó sọ bí o ṣe lo AI.",
          youCanNow: "ṣe orin tuntun tìrẹ, ṣe mixing rẹ̀, gbé e jáde kí o sì pín in lọ́nà tó tọ́ àti láìléwu, pẹ̀lú àkọsílẹ̀ ìdúpẹ́ tí ó jẹ́ òtítọ́.",
          quickCheck: [
            { objective: "O6", q: "Kí ni mixing túmọ̀ sí?", options: ["Ṣíṣètò bí track kọ̀ọ̀kan ṣe ga tó kí ọ̀kan má bàa bo àwọn yòókù mọ́lẹ̀", "Fífi ọ̀rọ̀ orin kún un", "Yíyan àkọlé orin", "Gbígbé orin sórí ayélujára"], answer: 0, why: "Mixing ń ṣe ìwọ̀ntúnwọ̀nsì ohùn track kọ̀ọ̀kan." },
            { objective: "O6", q: "O fẹ́ fi orin rẹ síta gbangba. Kí ni o máa pa mọ́?", options: ["Àkọlé orin", "Orúkọ olórin rẹ", "Orúkọ kíkún rẹ, ilé-ìwé rẹ àti ibi tí o wà", "Bí o ṣe lo AI"], answer: 2, why: "Pín in láìléwu nípa pípa ìsọfúnni àdáni mọ́ àti fífi síta níbi tí ẹbí rẹ gbà nìkan." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Kíkọ́, dídáàbò bo àti pínpín orin rẹ",
        questions: [
          { objective: "O4", q: "Apá wo nínú orin ni apá tí ó ń wọni lọ́kàn tí ó ń tún ara rẹ̀ ṣe?", options: ["Intro", "Verse", "Export", "Chorus"], answer: 3, why: "Chorus ni apá tí ó ń tún ara rẹ̀ ṣe (hook)." },
          { objective: "O5", q: "Gẹ́gẹ́ bí U.S. Copyright Office ti sọ, ìgbà wo ni ààbò àṣẹ-ìkọ̀wé ń bẹ̀rẹ̀?", options: ["Nígbà tí a bá ṣe iṣẹ́ kan tí a sì fi í sí ọ̀nà tí ènìyàn lè gbọ́ tàbí rí i", "Lẹ́yìn fífi orúkọ sílẹ̀ nìkan", "Lẹ́yìn ọdún 10", "Fún olórin olókìkí nìkan"], answer: 0, why: "Ààbò ń bẹ̀rẹ̀ nígbà tí a bá ṣe iṣẹ́ náà tí a sì fi í sí ọ̀nà tí a lè gbọ́ tàbí rí." },
          { objective: "O5", q: "O fẹ́ lo ìṣẹ́jú-àáyá 5 nínú orin olókìkí kan nínú beat rẹ. Kí ni o máa ṣe?", options: ["Lò ó; ó kúrú", "Fi í sílẹ̀ àyàfi tí o bá ní àṣẹ", "Yí ìyára rẹ̀ padà kí ẹnìkan má bàa kíyèsí i", "Kọ orúkọ olórin náà kí o sì lò ó"], answer: 1, why: "Sample orin tí a dáàbò bò nílò àṣẹ." },
          { objective: "O6", q: "Kí ni mixing?", options: ["Kíkọ ọ̀rọ̀ orin", "Fífi orúkọ sílẹ̀ fún app", "Ṣíṣe ìwọ̀ntúnwọ̀nsì ohùn track kọ̀ọ̀kan", "Yíyan kókó ọ̀rọ̀"], answer: 2, why: "Mixing ń ṣe ìwọ̀ntúnwọ̀nsì bí apá kọ̀ọ̀kan ṣe ga tó." },
          { objective: "O6", q: "Àkọsílẹ̀ ìdúpẹ́ wo ló jẹ́ òtítọ́?", options: ["\"A kò lo AI\" nígbà tí a lò ó", "\"AI ràn mí lọ́wọ́ láti wá èrò ọ̀rọ̀ orin; èmi ni mo ṣe orin àti ọ̀rọ̀ rẹ̀\"", "Kò sí àkọsílẹ̀ kankan fún iṣẹ́ ilé-ìwé", "\"Olórin olókìkí kan ló ṣe é\""], answer: 1, why: "Ó sọ ní kedere bí a ṣe lo AI." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ṣíṣe Orin pẹ̀lú AI",
    questions: [
      { objective: "O1", q: "Èwo ni ọ̀nà kan tí a ń gbà lo AI nínú orin?", options: ["Dídábàá chord tàbí ìlànà ìlù", "Rírọ́pò etí rẹ", "Fífọwọ́ sí àdéhùn ilé-iṣẹ́ orin fún ọ", "Níní àwọn orin rẹ"], answer: 0, why: "Àwọn irinṣẹ́ AI lè dábàá èrò orin." },
      { objective: "O1", q: "Nínú ẹ̀kọ́ yìí, iṣẹ́ AI ni láti jẹ́:", options: ["Ẹni tí ó ń kọ orin fún ọ ní ìkọ̀kọ̀", "Alábàáṣiṣẹ́ rẹ fún wíwá èrò", "Ọ̀gá rẹ", "Agbẹjọ́rò rẹ"], answer: 1, why: "Ìwọ lo ń ṣe àwọn ìpinnu pàtàkì." },
      { objective: "O1", q: "Kí ni U.S. Copyright Office sọ nípa prompt nìkan?", options: ["Ó ń sọ ọ́ di olùdá", "Kò bófin mu", "Kò tó láti sọ ọ́ di olùdá", "Fún àgbàlagbà nìkan ni"], answer: 2, why: "Fífúnni ní prompt nìkan kò tó láti di olùdá." },
      { objective: "O2", q: "Lábẹ́ òfin BandLab, olùlò gbọ́dọ̀ jẹ́ ọmọ ọdún tí ó kéré tán:", options: ["8", "10", "21", "13, pẹ̀lú àṣẹ òbí tí kò bá tíì pé 18"], answer: 3, why: "Òfin náà sọ pé 13 sókè, pẹ̀lú àṣẹ òbí tàbí alágbàtọ́ fún àwọn ọmọdé." },
      { objective: "O2", q: "Beat mélòó ló wà nínú bar kan nínú ọ̀pọ̀ orin pop àti hip-hop?", options: ["1", "4", "12", "100"], answer: 1, why: "Beat mẹ́rin nínú bar kan ló wọ́pọ̀ jù." },
      { objective: "O2", q: "Ọ̀nà tó dára láti tẹ̀lé nígbà tí o bá ń ṣe beat ni:", options: ["Ohùn akọrin nìkan", "Ìlù, lẹ́yìn náà bass, lẹ́yìn náà ìró kan sí i", "Gbé e jáde lákọ̀ọ́kọ́", "Ìró mẹ́wàá lẹ́ẹ̀kan náà"], answer: 1, why: "Bíbẹ̀rẹ̀ pẹ̀lú ìlù àti bass ń fúnni ní ìpìlẹ̀ tó lágbára." },
      { objective: "O2", q: "O fẹ́ ìmọ̀lára ìtura àti ìfọ̀kànbalẹ̀. Ó ṣeé ṣe kí o:", options: ["Mú tempo yára gan-an", "Fi ìró agogo ìdágìrì tí ó ga kún un", "Lo tempo tí ó lọ́ra", "Pa ìlù rẹ́"], answer: 2, why: "Tempo tí ó lọ́ra sábà máa ń dún bí ìfọ̀kànbalẹ̀." },
      { objective: "O3", q: "Kókó ọ̀rọ̀ wo ló ṣeé ṣe jù kí ó ṣe orin tó lágbára?", options: ["\"Nǹkan\"", "\"Ayé lápapọ̀\"", "\"Nǹkan ń ṣẹlẹ̀\"", "\"Kíkó ẹrù kúrò nínú àpótí mi ní ọjọ́ ìkẹyìn kíláàsì 8\""], answer: 3, why: "Àkókò pàtó àti gidi ń ṣe ọ̀rọ̀ orin tó lágbára." },
      { objective: "O3", q: "Ìbéèrè AI tó dára fún ọ̀rọ̀ orin ni:", options: ["\"Fún mi ní ọ̀rọ̀ tí ó ń dún bí 'late'\"", "\"Kọ odindi orin, màá sì fi orúkọ mi sí i\"", "\"Da ọ̀rọ̀ orin olókìkí kan kọ\"", "\"Lo ìwé ìrántí ọ̀rẹ́ mi\""], answer: 0, why: "Bíbéèrè èrò lásán ń jẹ́ kí kíkọ jẹ́ tìrẹ." },
      { objective: "O3", q: "Ìlà kan kún jù fún beat. Kí ni o máa ṣe?", options: ["Mú gbogbo orin yára sí i", "Yọ ọ̀rọ̀ kúrò títí yóò fi bá a mu", "Fi ọ̀rọ̀ kún un", "Pa chorus rẹ́"], answer: 1, why: "Yíyọ ọ̀rọ̀ kúrò ń jẹ́ kí ìlà bá ìlù mu." },
      { objective: "O4", q: "Verse orin:", options: ["Kò ní ọ̀rọ̀ rárá", "Ń jẹ́ bákan náà ní ìgbà gbogbo", "Ń sọ ìtàn, ọ̀rọ̀ rẹ̀ sì ń yí padà", "Ni fáìlì export"], answer: 2, why: "Verse ń gbé ìtàn, ọ̀rọ̀ rẹ̀ sì ń yí padà." },
      { objective: "O4", q: "Báwo ni o ṣe lè jẹ́ kí chorus yọ jáde?", options: ["Jẹ́ kí ó dákẹ́", "Pa beat rẹ́", "Lo ìró kan náà bí intro", "Fi ìró kún un, bí bass àti melody"], answer: 3, why: "Fífi ìró kún un ń jẹ́ kí chorus dún bí ó ti tóbi sí i." },
      { objective: "O4", q: "AI fún ọ ní èrò fún ètò orin. Lẹ́yìn náà o:", options: ["Gbìyànjú wọn kí o sì gbẹ́kẹ̀ lé etí rẹ", "Gbọ́dọ̀ lo gbogbo wọn", "Gbọ́dọ̀ kọ gbogbo wọn sílẹ̀", "Fi wọ́n síta bí orin rẹ"], answer: 0, why: "Ìwọ ni ẹni tí ó ń ṣe àwọn ìpinnu ọnà." },
      { objective: "O5", q: "Ṣé fífi orúkọ sílẹ̀ (registration) jẹ́ dandan kí orin rẹ tó ní ààbò àṣẹ-ìkọ̀wé?", options: ["Bẹ́ẹ̀ ni, nígbà gbogbo", "Rárá, kì í sábà jẹ́ dandan", "Ní òpin ọ̀sẹ̀ nìkan", "Fún orin ilé-ìwé nìkan"], answer: 1, why: "Copyright Office sọ pé fífi orúkọ sílẹ̀ kì í sábà jẹ́ dandan." },
      { objective: "O5", q: "Sample ni:", options: ["Ìgbìyànjú ọ̀fẹ́", "Irú gbohùngbohùn (microphone) kan", "Apá kan nínú ohùn tí ẹlòmíì gbà sílẹ̀ tí a lò nínú orin tuntun", "Èrò ọ̀rọ̀ orin"], answer: 2, why: "Sampling ń lo apá kan nínú ohùn tí a ti gbà sílẹ̀." },
      { objective: "O5", q: "AI lè ṣe ẹ̀dà ohùn ọmọ kíláàsì rẹ fún chorus rẹ. Kí ni òfin?", options: ["Ṣe é láti yà wọ́n lẹ́nu", "Ṣe é tí ó bá dún dáadáa", "Ṣe é lórí kọ̀mpútà ilé-ìwé nìkan", "Pẹ̀lú àṣẹ tó yé láti ọ̀dọ̀ wọn nìkan"], answer: 3, why: "Ohùn jẹ́ ti ẹni kọ̀ọ̀kan; gba àṣẹ tó yé tàbí má ṣe lò ó." },
      { objective: "O5", q: "O kò dá a lójú pé ìró kan ṣeé lò. Ìpinnu tí kò léwu jù ni:", options: ["Fi í sílẹ̀ tàbí béèrè lọ́wọ́ àgbàlagbà tí o gbẹ́kẹ̀ lé", "Lò ó kí o sì retí pé kò sí nǹkan", "Fi í pamọ́ sínú mix", "Yí orúkọ fáìlì padà"], answer: 0, why: "Tí kò bá dá ọ lójú, fi í sílẹ̀ tàbí béèrè." },
      { objective: "O6", q: "Kí ló dé tí o fi ń tẹ́tí sí i lórí headphone àti speaker fóònù?", options: ["Òfin ló sọ bẹ́ẹ̀", "Láti ṣàyẹ̀wò pé mix náà dún dáadáa lórí ẹ̀rọ ọ̀tọ̀ọ̀tọ̀", "Láti mú un ga sí i", "Láti gbé e jáde"], answer: 1, why: "Mix máa ń dún yàtọ̀ lórí ẹ̀rọ ọ̀tọ̀ọ̀tọ̀." },
      { objective: "O6", q: "Nígbà tí o bá ń fi orin rẹ síta gbangba, o yẹ kí o pa èyí mọ́:", options: ["Àkọlé orin", "Orúkọ olórin rẹ", "Orúkọ kíkún rẹ, ilé-ìwé rẹ àti ibi tí o wà", "Irú orin (genre)"], answer: 2, why: "Ìsọfúnni àdáni gbọ́dọ̀ wà ní ìkọ̀kọ̀ lórí ayélujára." },
      { objective: "O6", q: "Orin rẹ jẹ́ fún kíláàsì orin. Nípa AI, o yẹ kí o:", options: ["Fi pamọ́ pé o lò ó", "Ní kí AI kọ àkọsílẹ̀ tí ó sọ pé a kò lo AI", "Fo àkọsílẹ̀ ìdúpẹ́ dá", "Tẹ̀lé òfin olùkọ́ rẹ kí o sì sọ bí o ṣe lò ó"], answer: 3, why: "Sísọ òtítọ́ nípa lílo AI jẹ́ apá kan òfin ilé-ìwé." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [0, 2, 4, 6, 8, 10, 13, 14, 17, 18]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Beat",
        objective: "O2",
        notYet: "Kò sí ìlù, tàbí ìró kan ṣoṣo ló wà.",
        meets: "Beat tí ó ní ìlù àti ó kéré tán ìró míì kan ní tempo tí ó bá ìmọ̀lára mu.",
        exceeds: "Akẹ́kọ̀ọ́ lè ṣàlàyé ìdí tí ó fi yan tempo yẹn."
      },
      {
        name: "Ètò orin",
        objective: "O4",
        notYet: "Kò sí intro, verse tàbí chorus tó yé.",
        meets: "Nǹkan bí ìṣẹ́jú-àáyá 60 pẹ̀lú intro, verse àti chorus tí ó dún yàtọ̀ díẹ̀.",
        exceeds: "Chorus yọ jáde ní kedere, fún àpẹẹrẹ pẹ̀lú bass tàbí melody tí a fi kún un."
      },
      {
        name: "Ọ̀rọ̀ orin tìrẹ",
        objective: "O3",
        notYet: "Kò sí ọ̀rọ̀ orin, tàbí a dà á kọ láti inú AI.",
        meets: "Ó kéré tán ìlà mẹ́rin ní ọ̀rọ̀ akẹ́kọ̀ọ́ fúnra rẹ̀ tí ó bá beat mu.",
        exceeds: "Ọ̀rọ̀ orin lo kókó ọ̀rọ̀ gidi láti inú ayé akẹ́kọ̀ọ́, ó sì fi hàn àwọn èrò AI tí a yí padà."
      },
      {
        name: "Tuntun, ó sì ṣeé lò",
        objective: "O5",
        notYet: "Ó lo orin tí a dà kọ, sample tí kò ní àṣẹ tàbí ẹ̀dà AI ti ohùn gidi.",
        meets: "Akẹ́kọ̀ọ́ ló ṣe gbogbo ìró tàbí sítúdíò gbà á láàyè, kò sì sí ohùn gidi tí a dà kọ.",
        exceeds: "Ó ní àkọsílẹ̀ ìró kọ̀ọ̀kan àti ibi tí ó ti wá."
      },
      {
        name: "Gbígbé jáde àti ìdúpẹ́",
        objective: "O6",
        notYet: "A kò gbé e jáde, tàbí kò sí àkọsílẹ̀ ìdúpẹ́.",
        meets: "A gbé e jáde gẹ́gẹ́ bí fáìlì ohùn pẹ̀lú àkọsílẹ̀ ìdúpẹ́ tí ó sọ bí a ṣe lo AI.",
        exceeds: "A ṣàyẹ̀wò mix lórí headphone àti speaker fóònù, a sì tún un ṣe."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣe orin tuntun kejì láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n pín orin láìléwu pẹ̀lú ẹbí, kíláàsì tàbí àfihàn ètò ọ̀dọ́",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n darapọ̀ mọ́ kíláàsì orin, ẹgbẹ́ orin tàbí ètò orin láàárín ọjọ́ 90"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà ilé-ìwé tàbí ilé-ìkàwé tí ó ní íńtánẹ́ẹ̀tì",
      "Headphone",
      "BandLab tàbí sítúdíò ọ̀fẹ́ míì lórí ayélujára, pẹ̀lú àṣẹ òbí tàbí alágbàtọ́ fún àwọn tí kò tíì pé ọdún 18",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́ tí a gbà akẹ́kọ̀ọ́ láàyè láti lò",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ṣàyẹ̀wò òfin ọjọ́ orí irinṣẹ́ kọ̀ọ̀kan ṣáájú kíláàsì, kí o sì gba àṣẹ òbí tàbí alágbàtọ́ fún fífi orúkọ sílẹ̀; jẹ́ kí àkáǹtì àpẹẹrẹ wà ní sẹpẹ́ tí ó bá pọndandan.",
      "Jẹ́ kí headphone wà kí àwọn akẹ́kọ̀ọ́ lè ṣiṣẹ́ lẹ́gbẹ̀ẹ́ ara wọn nínú yàrá kọ̀mpútà.",
      "Ṣàyẹ̀wò àkọsílẹ̀ ìró akẹ́kọ̀ọ́ kọ̀ọ̀kan ṣáájú export láti mú orin tí a dà kọ, sample tí kò ní àṣẹ tàbí ohùn tí a ṣe ẹ̀dà rẹ̀.",
      "Ṣe ìpàdé ìtẹ́tísí orin nínú ẹgbẹ́ nìkan, pẹ̀lú ìfọwọ́sí àwọn ẹbí kí a tó fi ohunkóhun síta gbangba.",
      "Fi rubric ṣe àmì fún orin náà, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};

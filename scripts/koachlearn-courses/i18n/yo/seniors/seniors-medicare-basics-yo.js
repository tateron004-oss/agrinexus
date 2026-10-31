"use strict";

// Koach Learn course (Yoruba translation of seniors/seniors-medicare-basics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// US-specific course: Medicare, SHIP, CMS, Social Security and 1-800-MEDICARE stay as written; no premium amounts are quoted.

module.exports = {
  id: "seniors-medicare-basics-yo",
  lang: "yo",
  translationOf: "seniors-medicare-basics",
  category: "Seniors and Technology",
  name: "Ìpìlẹ̀ Medicare",
  skills: "Mímọ Part A, B, C àti D, Fífi Original Medicare wé Medicare Advantage, Dídáàbò bo nọ́mbà Medicare rẹ, Wíwá àsìkò ìforúkọsílẹ̀ rẹ, Ṣíṣàyẹ̀wò ètò rẹ ní ìgbà ìwọ́wé kọ̀ọ̀kan, Gbígba ìrànlọ́wọ́ ọ̀fẹ́ lọ́wọ́ SHIP",
  outcome: "ṣàlàyé ohun tí Part A, B, C àti D ń bójú tó, ṣírò àsìkò ìforúkọsílẹ̀ tìrẹ, ṣe àkọsílẹ̀ ohun tí o nílò láti fi àwọn ètò wéra, kí o sì rí ìrànlọ́wọ́ ọ̀fẹ́ tí kò ṣègbè lọ́wọ́ State Health Insurance Assistance Program (SHIP) ìpínlẹ̀ rẹ tàbí 1-800-MEDICARE.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn tí ó ń pé ọmọ ọdún 65, àwọn tí ó ti wà lórí Medicare tí ó sì ń rú wọn lójú, àti àwọn ẹbí tí ó ń ran òbí tàbí òbí-àgbà lọ́wọ́ nípa ìbánigbófò ìlera.",
    "O máa kọ́ ohun tí apá kọ̀ọ̀kan Medicare ń bójú tó, ìyàtọ̀ láàárín Original Medicare àti Medicare Advantage, ìgbà tí o lè forúkọ sílẹ̀ tàbí ṣe àyípadà, bí o ṣe lè dáàbò bo nọ́mbà Medicare rẹ lọ́wọ́ jìbìtì, àti ibi tí o ti lè rí ìrànlọ́wọ́ ọ̀fẹ́ lọ́wọ́ ènìyàn gidi.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí. Àwọn òfin, ọjọ́ àti owó Medicare máa ń yí padà. Máa ṣàyẹ̀wò wọn ní medicare.gov, nípa pípe 1-800-MEDICARE, tàbí lọ́dọ̀ olùgbaninímọ̀ràn SHIP agbègbè rẹ, kí o sì béèrè lọ́wọ́ dókítà tàbí pharmacist rẹ nípa ìtọ́jú tìrẹ."
  ],
  finalTask: "Ṣe ètò Medicare ojú-ìwé kan: àsìkò ìforúkọsílẹ̀ rẹ (àwọn oṣù Initial Enrollment Period rẹ, tàbí ọjọ́ Open Enrollment ọdún yìí tí o bá ti ní Medicare), àwọn apá tí o ní tàbí tí o nílò, àkọsílẹ̀ àwọn dókítà rẹ, oògùn rẹ àti ilé-oògùn (pharmacy) rẹ, ìbéèrè mẹ́ta tí o fẹ́ kí wọ́n dáhùn, àti ìrànlọ́wọ́ ọ̀fẹ́ tí o máa lò (SHIP agbègbè rẹ, medicare.gov àti 1-800-MEDICARE). Lẹ́yìn náà, kàn sí SHIP rẹ tàbí lo irinṣẹ́ ìfiwéra ètò lórí medicare.gov.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn ènìyàn ní United States tí ó ń pé ọmọ ọdún 65 tàbí tí ó ti wà lórí Medicare, àti àwọn ẹbí tí ó ń ràn wọ́n lọ́wọ́. Ọ̀pọ̀ ni àwọn apá, àwọn ọjọ́ ìparí àti ọ̀pọ̀lọpọ̀ ìpè ìtajà àti ìpolówó ìgbà ìwọ́wé kọ̀ọ̀kan ń rú lójú.",
    startingPoint: "Wọ́n mọ̀ pé Medicare wà, ó sì lè jẹ́ pé wọ́n ti ní káàdì. Ọ̀pọ̀ jù lọ kò lè ṣàlàyé Part A sí D, wọn kò mọ àsìkò ìforúkọsílẹ̀ tiwọn, wọn kò tíì lo irinṣẹ́ ìfiwéra ètò medicare.gov rí, wọn kò sì tíì gbọ́ nípa SHIP.",
    gap: "Pípàdánù àsìkò ìforúkọsílẹ̀ lè túmọ̀ sí owó ìtanràn fún pípẹ́ tí kò ní parí títí ayé, ètò tí kò tọ́ sì lè fi àwọn dókítà tàbí oògùn ènìyàn sílẹ̀. Mímọ àwọn apá, ọjọ́ tiwọn, bí a ṣe ń fi àwọn ètò wéra àti ibi tí a ti lè rí ìrànlọ́wọ́ ọ̀fẹ́ tí kò ṣègbè ń dáàbò bo ìlera àti owó wọn, ó sì ń pa wọ́n mọ́ kúrò lọ́wọ́ jìbìtì Medicare.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn, gbólóhùn kúkúrú àti ìgbésẹ̀ ńlá tó rọrùn",
      "Ẹ̀rọ: fóònù fún ìpè, àti kọ̀mpútà tàbí tablet fún medicare.gov tí ó bá wà",
      "Àkókò: nǹkan bí ìṣẹ́jú 5 fún ẹ̀kọ́ kọ̀ọ̀kan, láìkánjú",
      "Owó àti àwọn òfin kan ń yí padà lọ́dọọdún; àwọn akẹ́kọ̀ọ́ ń ṣàyẹ̀wò medicare.gov, ssa.gov tàbí SHIP fún iye owó ti àkókò yìí",
      "Ẹ̀kọ́ náà kò dábàá ètò kankan; a kò gbọdọ̀ tẹ nọ́mbà Medicare sínú AI tàbí fi hàn ẹni tí ó pè ọ́"
    ],
    prerequisites: "Kò sí."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní apá mẹ́rin Medicare", action: "ṣàlàyé ohun tí Part A, B, C àti D ń bójú tó àti ọ̀nà pàtàkì méjì láti gba ìbánigbófò", standard: "kí o sì gba ó kéré tán 4 nínú ìbéèrè 5 tọ̀nà" },
    { id: "O2", condition: "Tí ẹnìkan bá béèrè nọ́mbà Medicare rẹ tàbí tí ìwé àkọsílẹ̀ kan bá fi ìtọ́jú tí o kò gbà rí hàn", action: "dá jìbìtì Medicare mọ̀ kí o sì fi ìròyìn rẹ̀ tó 1-800-MEDICARE létí", standard: "kí o sì fi nọ́mbà rẹ hàn àwọn dókítà rẹ, ilé-oògùn rẹ àti ètò rẹ nìkan" },
    { id: "O3", condition: "Tí o bá mọ oṣù tí o máa pé ọmọ ọdún 65 àti ìbánigbófò iṣẹ́ rẹ", action: "ṣírò Initial Enrollment Period rẹ àti bóyá Special Enrollment Period lè kàn ọ́", standard: "pẹ̀lú oṣù ìbẹ̀rẹ̀ àti ìparí tó tọ̀nà, tí o ti ṣàyẹ̀wò ní ssa.gov, medicare.gov tàbí lọ́dọ̀ SHIP" },
    { id: "O4", condition: "Tí o bá ní àkọsílẹ̀ àwọn dókítà rẹ, oògùn rẹ àti ilé-oògùn rẹ", action: "fi àwọn ètò wéra lórí medicare.gov tàbí pẹ̀lú SHIP nígbà Open Enrollment", standard: "nípa wíwo owó lápapọ̀ fún ọdún kan àti ṣíṣàyẹ̀wò pé àwọn dókítà rẹ wà nínú network" },
    { id: "O5", condition: "Tí o bá ní ìbéèrè nípa Medicare", action: "kàn sí SHIP agbègbè rẹ tàbí 1-800-MEDICARE pẹ̀lú ìbéèrè àti àkọsílẹ̀ rẹ ní sẹpẹ́", standard: "kí o sì kọ ọjọ́, orúkọ ẹni náà àti ìdáhùn sílẹ̀" }
  ],
  chapters: [
    {
      name: "Orí 1: Àwọn apá Medicare",
      lessons: [
        {
          objectives: ["O1"],
          title: "Àwọn tí Medicare wà fún, àti Part A àti B",
          minutes: 5,
          goal: "Sọ àwọn tí ó lè gba Medicare àti ohun tí Part A àti B ń bójú tó.",
          text: [
            "Medicare ni ìbánigbófò ìlera ìjọba US fún àwọn ọmọ ọdún 65 tàbí jù bẹ́ẹ̀ lọ, àwọn tí kò tíì pé 65 tí ó ní àwọn àìlera kan, àti àwọn ènìyàn ọjọ́ orí èyíkéyìí tí ó ní End-Stage Renal Disease (kídìnrín tí ó ti dákẹ́ títí láé). Centers for Medicare & Medicaid Services (CMS) ló ń darí rẹ̀.",
            "Medicare ní àwọn apá, a sì fi lẹ́tà dárúkọ wọn. Part A jẹ́ ìbánigbófò ilé-ìwòsàn. Ó ń ṣèrànwọ́ láti sanwó ìtọ́jú nígbà tí wọ́n bá gbà ọ́ wọlé sí ilé-ìwòsàn, àti hospice àti àwọn ìtọ́jú ilé kan.",
            "Part B jẹ́ ìbánigbófò ìtọ́jú. Ó ń ṣèrànwọ́ láti sanwó ìbẹ̀wò sọ́dọ̀ dókítà, ìtọ́jú outpatient (ìtọ́jú tí o ti padà sílé lọ́jọ́ kan náà), ọ̀pọ̀ àyẹ̀wò àti iṣẹ́ ìdènà àrùn bí àwọn àyẹ̀wò àti abẹ́rẹ́ àjẹsára kan.",
            "Part A àti Part B pọ̀ ni a ń pè ní Original Medicare. Ọ̀pọ̀ ènìyàn kì í san premium oṣooṣù fún Part A tí àwọn tàbí ọkọ tàbí aya wọn bá ti ṣiṣẹ́ tí wọ́n sì ti san owó-orí Medicare fún àkókò tó tó. Ọ̀pọ̀ ènìyàn ń san premium oṣooṣù fún Part B. Premium àti deductible ń yí padà lọ́dọọdún, nítorí náà wo iye ti ọdún yìí lórí medicare.gov tàbí béèrè lọ́wọ́ SHIP."
          ],
          words: [["Medicare", "ètò ìbánigbófò ìlera ìjọba US fún àwọn ọmọ ọdún 65 sókè àti àwọn ọ̀dọ́ kan tí ó ní àìlera."], ["Premium", "owó tí o ń san lóṣooṣù kí o lè ní ìbánigbófò."], ["Deductible", "owó tí o máa san fún ìtọ́jú kí ìbánigbófò tó bẹ̀rẹ̀ sí í sanwó."], ["Outpatient", "ìtọ́jú tí o ti padà sílé lọ́jọ́ kan náà, bí ìbẹ̀wò sọ́dọ̀ dókítà."]],
          slides: [
            { title: "Àwọn tí Medicare wà fún", bullets: ["Àwọn ọmọ ọdún 65 tàbí jù bẹ́ẹ̀ lọ", "Àwọn kan tí kò tíì pé 65 tí ó ní àìlera", "Àwọn tí kídìnrín wọn ti dákẹ́ títí láé"] },
            { title: "Part A: ìbánigbófò ilé-ìwòsàn", bullets: ["Dídúró ní ilé-ìwòsàn nígbà tí wọ́n bá gbà ọ́ wọlé", "Hospice àti àwọn ìtọ́jú ilé kan"] },
            { title: "Part B: ìbánigbófò ìtọ́jú", bullets: ["Ìbẹ̀wò sọ́dọ̀ dókítà àti ìtọ́jú outpatient", "Ọ̀pọ̀ àyẹ̀wò àti iṣẹ́ ìdènà àrùn"] },
            { title: "A + B = Original Medicare", bullets: ["Ọ̀pọ̀ kì í san premium fún Part A", "Ọ̀pọ̀ ń san premium oṣooṣù fún Part B", "Owó ọdún yìí: medicare.gov tàbí SHIP"] }
          ],
          sources: [{ name: "CMS: Medicare (Part A, B àti D, àwọn tí ó lẹ́tọ̀ọ́)", url: "https://www.cms.gov/about-cms/what-we-do/medicare" }],
          tryIt: "Kọ irú ìtọ́jú méjì tí ìwọ tàbí ẹnìkan nínú ẹbí rẹ gbà ní ọdún tó kọjá sílẹ̀, bí dídúró ní ilé-ìwòsàn, àyẹ̀wò ara gbogbo tàbí àyẹ̀wò ẹ̀jẹ̀. Lẹ́gbẹ̀ẹ́ ọ̀kọ̀ọ̀kan, kọ bóyá ó bọ́ sí abẹ́ Part A tàbí Part B.",
          youCanNow: "sọ àwọn tí Medicare wà fún, kí o sì pín ìtọ́jú ojoojúmọ́ sí Part A tàbí Part B.",
          quickCheck: [
            { objective: "O1", q: "Kí ni Original Medicare?", options: ["Part A àti Part B pọ̀", "Part D nìkan", "Ètò Medicare Advantage kan", "Ètò Medigap kan"], answer: 0, why: "Part A (ilé-ìwòsàn) àti Part B (ìtọ́jú) pọ̀ ni a ń pè ní Original Medicare." },
            { objective: "O1", q: "Wọ́n gba aládùúgbò rẹ wọlé sí ilé-ìwòsàn fún ọjọ́ mẹ́ta. Apá wo ló máa ń ṣèrànwọ́ jù lọ láti sanwó dídúró ní ilé-ìwòsàn?", options: ["Part D", "Part B", "Part A", "Kò sí ọ̀kankan nínú wọn"], answer: 2, why: "Part A jẹ́ ìbánigbófò ilé-ìwòsàn fún ìtọ́jú nígbà tí wọ́n bá gbà ọ́ wọlé." }
          ]
        },
        {
          objectives: ["O1","O4"],
          title: "Part C àti D: Medicare Advantage àti ètò oògùn",
          minutes: 5,
          goal: "Ṣàlàyé ìyàtọ̀ láàárín Original Medicare àti ètò Medicare Advantage, àti ohun tí Part D ń bójú tó.",
          text: [
            "Part C ni Medicare Advantage. Ìwọ̀nyí ni ètò láti ọ̀dọ̀ àwọn ilé-iṣẹ́ ìbánigbófò aládàáni tí Medicare ti fọwọ́ sí. Ètò Medicare Advantage ń fún ọ ní gbogbo àǹfààní Part A àti Part B rẹ nínú ètò kan, ọ̀pọ̀ jù lọ sì tún ní ìbánigbófò oògùn. Ọ̀pọ̀ ní network: àkọsílẹ̀ àwọn dókítà àti ilé-ìwòsàn tí wọ́n retí pé kí o lò.",
            "Part D jẹ́ ìbánigbófò oògùn tí dókítà kọ (prescription). Ó wà fún gbogbo ẹni tí ó ní Medicare nípasẹ̀ àwọn ètò aládàáni tí Medicare ti fọwọ́ sí. Àwọn tí ó ní Original Medicare sábà máa ń fi ètò oògùn Part D lọ́tọ̀ kún un.",
            "Nítorí náà, ọ̀nà pàtàkì méjì ló wà. Ọ̀nà kìíní: Original Medicare (A àti B), tí ó sábà máa ń ní ètò oògùn Part D lọ́tọ̀, àwọn kan sì tún ń ra Medicare Supplement Insurance (Medigap) láti ṣèrànwọ́ pẹ̀lú owó tí Original Medicare kò san. Ọ̀nà kejì: ètò Medicare Advantage (Part C) tí ó ko A, B àti D (lọ́pọ̀ ìgbà) pọ̀.",
            "Kò sí ọ̀nà tí ó dára jù fún gbogbo ènìyàn. Ó sinmi lórí àwọn dókítà rẹ, oògùn rẹ, ibi tí o ń gbé àti ibi tí o ń rìnrìn-àjò lọ, àti owó tí o ní. Ohun tí olùgbaninímọ̀ràn SHIP ọ̀fẹ́ ń ràn ọ́ lọ́wọ́ láti fi wéra gan-an nìyẹn."
          ],
          words: [["Medicare Advantage (Part C)", "ètò láti ọ̀dọ̀ ilé-iṣẹ́ aládàáni, tí Medicare fọwọ́ sí, tí ó ní Part A àti Part B, tí ó sì máa ń ní ìbánigbófò oògùn."], ["Part D", "ìbánigbófò oògùn prescription ti Medicare, nípasẹ̀ àwọn ètò aládàáni."], ["Network", "àwọn dókítà, ilé-ìwòsàn àti ilé-oògùn tí ètò kan ń bá ṣiṣẹ́."], ["Medigap", "Medicare Supplement Insurance: ìbánigbófò aládàáni tí ó ń ṣèrànwọ́ láti san owó tí Original Medicare kò san."]],
          slides: [
            { title: "Part C: Medicare Advantage", bullets: ["Ètò aládàáni tí Medicare fọwọ́ sí", "Ó ní A àti B, ọ̀pọ̀ sì ní oògùn", "Ó sábà máa ń lo network àwọn dókítà"] },
            { title: "Part D: oògùn prescription", bullets: ["Ó wà fún gbogbo ẹni tí ó ní Medicare", "Nípasẹ̀ àwọn ètò aládàáni", "A sábà máa ń fi kún Original Medicare"] },
            { title: "Ọ̀nà pàtàkì méjì", bullets: ["Original Medicare + Part D (+ Medigap fún àwọn kan)", "Tàbí ètò Medicare Advantage"] },
            { title: "Èwo ló dára jù fún ọ?", bullets: ["Àwọn dókítà àti oògùn rẹ", "Ibi tí o ń gbé àti ibi tí o ń rìnrìn-àjò lọ", "Owó tí o ní: ní kí SHIP bá ọ fi wéra"] }
          ],
          sources: [{ name: "CMS: Àwọn ètò Medicare Advantage àti Part D", url: "https://www.cms.gov/medicare/enrollment-renewal/health-plans" }],
          tryIt: "Kọ gbogbo dókítà tí o ń rí àti gbogbo oògùn tí o ń lò sílẹ̀, pẹ̀lú ìwọ̀n oògùn kọ̀ọ̀kan, àti ilé-oògùn tí o ń lò. Ní kí ẹnìkan nínú ẹbí rẹ ràn ọ́ lọ́wọ́ tí o bá fẹ́. Pa àkọsílẹ̀ yìí mọ́: òun ni o nílò láti fi àwọn ètò wéra.",
          youCanNow: "ṣàlàyé Part C àti D, ṣàpèjúwe ọ̀nà pàtàkì méjì Medicare, kí o sì ṣe àkọsílẹ̀ tí o nílò láti fi àwọn ètò wéra.",
          quickCheck: [
            { objective: "O1", q: "Kí ni ètò Part D?", options: ["Ìbánigbófò ilé-ìwòsàn", "Ìbánigbófò oògùn prescription láti ọ̀dọ̀ ètò aládàáni tí Medicare fọwọ́ sí", "Ètò fún eyín", "Owó ìfẹ̀yìntì ìjọba"], answer: 1, why: "Part D jẹ́ ìbánigbófò oògùn prescription nípasẹ̀ àwọn ètò aládàáni tí Medicare fọwọ́ sí." },
            { objective: "O1", q: "Ọ̀rẹ́ kan sọ pé ọ̀nà kan, Original Medicare tàbí Medicare Advantage, ló dára jù fún gbogbo ènìyàn. Kí ni o máa sọ?", options: ["Gbà pẹ̀lú rẹ̀ kí o sì yan ọ̀kan yẹn", "Máa yan premium tí ó kéré jù nígbà gbogbo", "Yan ohunkóhun tí ẹni tí ń pè láti tajà bá dábàá", "Ó sinmi lórí àwọn dókítà rẹ, oògùn rẹ, ibi tí o ń gbé àti owó tí o ní"], answer: 3, why: "Kò sí ọ̀nà tí ó dára jù fún gbogbo ènìyàn; olùgbaninímọ̀ràn SHIP ọ̀fẹ́ ń ràn ọ́ lọ́wọ́ láti fi wéra." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Dídáàbò bo káàdì àti nọ́mbà Medicare rẹ",
          minutes: 4,
          goal: "Dá jìbìtì Medicare mọ̀ kí o sì mọ ẹni tí o máa sọ fún.",
          text: [
            "Káàdì Medicare rẹ aláwọ̀ pupa, funfun àti búlù ní nọ́mbà Medicare lórí. Ṣe é bí káàdì ìsanwó (credit card). Fi hàn àwọn dókítà rẹ, ilé-oògùn rẹ àti ètò rẹ, kí o sì pa á mọ́ dáadáa.",
            "Àwọn onjìbìtì máa ń pè, fi ọ̀rọ̀ ránṣẹ́ tàbí kan ilẹ̀kùn, wọ́n á sì díbọ́n pé láti Medicare ni wọ́n ti wá. Wọ́n lè fi nǹkan \"ọ̀fẹ́\" lọ̀ ọ́, bí ohun ìtìlẹ́yìn ara (brace), ohun èlò àyẹ̀wò tàbí káàdì tuntun, tàbí kí wọ́n sọ pé àǹfààní rẹ máa dúró àyàfi tí o bá fún wọn ní nọ́mbà rẹ. Aṣojú Medicare gidi kò ní pè ọ́ lójijì láti béèrè nọ́mbà Medicare rẹ tàbí ìsọfúnni báńkì rẹ.",
            "Ṣàyẹ̀wò àwọn ìwé àkọsílẹ̀ rẹ. Original Medicare ń fi Medicare Summary Notice ránṣẹ́, àwọn ètò sì ń fi Explanation of Benefits ránṣẹ́. Wá ìtọ́jú tí o kò gbà rí. Tí o bá rí ohun tí kò tọ́, tàbí tí ẹni tí ó pè ọ́ bá béèrè nọ́mbà rẹ, fi ìròyìn rẹ̀ tó 1-800-MEDICARE létí.",
            "Tí ọmọ-ọmọ tàbí ọ̀rẹ́ kan bá ń ràn ọ́ lọ́wọ́ lórí ayélujára, jókòó tì wọ́n, lo ojú-òpó wẹ́ẹ̀bù gidi medicare.gov nìkan, má sì tẹ nọ́mbà Medicare rẹ sínú chatbot tàbí ojú-òpó wẹ́ẹ̀bù tí o dé láti inú ọ̀rọ̀ ìránṣẹ́ (text) láéláé."
          ],
          steps: ["Pa káàdì rẹ mọ́ dáadáa, kí o sì fi nọ́mbà náà hàn àwọn dókítà rẹ, ilé-oògùn rẹ àti ètò rẹ nìkan.", "Gé ìpè lójijì tí ó ń béèrè nọ́mbà rẹ.", "Ka Medicare Summary Notice tàbí Explanation of Benefits kọ̀ọ̀kan.", "Fi ohunkóhun tí kò tọ́ tó 1-800-MEDICARE létí."],
          words: [["Medicare Summary Notice", "ìwé àkọsílẹ̀ láti Original Medicare tí ó ń fi ìtọ́jú tí wọ́n gba owó rẹ̀ lórí nọ́mbà rẹ hàn."], ["Explanation of Benefits", "ìwé àkọsílẹ̀ láti ọ̀dọ̀ ètò kan tí ó ń fi owó tí wọ́n béèrè àti owó tí ètò náà san hàn."], ["Jìbìtì", "ẹ̀tàn láti jí owó tàbí ìsọfúnni àdáni."]],
          slides: [
            { title: "Ṣe káàdì rẹ bí káàdì ìsanwó", bullets: ["Fi hàn àwọn dókítà rẹ, ilé-oògùn rẹ àti ètò rẹ", "Pa á mọ́ dáadáa"] },
            { title: "Àmì jìbìtì", bullets: ["Brace, ohun èlò àyẹ̀wò tàbí káàdì tuntun \"ọ̀fẹ́\"", "\"Àǹfààní rẹ máa dúró\"", "Ìpè lójijì tí ó ń béèrè nọ́mbà rẹ"] },
            { title: "Ṣàyẹ̀wò àwọn ìwé àkọsílẹ̀ rẹ", bullets: ["Medicare Summary Notice tàbí Explanation of Benefits", "Wá ìtọ́jú tí o kò gbà rí", "Fi ìṣòro tó 1-800-MEDICARE létí"] }
          ],
          sources: [{ name: "Medicare.gov: Fi jìbìtì tó wọn létí (ṣàyẹ̀wò àwọn ìgbésẹ̀ ti àkókò yìí níbí)", url: "https://www.medicare.gov/fraud" }],
          tryIt: "Wá Medicare Summary Notice tàbí Explanation of Benefits rẹ tí ó dé gbẹ̀yìn (tàbí ní kí ẹnìkan nínú ẹbí rẹ bá ọ wá a). Ṣàyẹ̀wò ìlà mẹ́ta: ṣé ìtọ́jú tí o gbà lóòótọ́ ni ọ̀kọ̀ọ̀kan?",
          youCanNow: "pa nọ́mbà Medicare rẹ mọ́ láìléwu, ka àwọn ìwé àkọsílẹ̀ rẹ láti wá ìṣòro, kí o sì mọ ibi tí o ti máa fi ìròyìn jìbìtì tó wọn létí.",
          quickCheck: [
            { objective: "O2", q: "Kí ni Medicare Summary Notice?", options: ["Owó tí o gbọdọ̀ san lẹ́sẹ̀kẹsẹ̀", "Ìpolówó fún ètò tuntun", "Ìwé àkọsílẹ̀ láti Original Medicare tí ó ń fi ìtọ́jú tí wọ́n béèrè owó rẹ̀ lọ́wọ́ Medicare hàn", "Káàdì Medicare tuntun"], answer: 2, why: "Ṣàyẹ̀wò Medicare Summary Notice tàbí Explanation of Benefits rẹ fún ìtọ́jú tí o kò gbà rí." },
            { objective: "O2", q: "Ọ̀rọ̀ ìránṣẹ́ kan sọ pé àǹfààní Medicare rẹ máa dúró àyàfi tí o bá fi nọ́mbà Medicare rẹ dá a lóhùn. Kí ni o máa ṣe?", options: ["Má ṣe dá a lóhùn, kí o sì fi ìròyìn rẹ̀ tó 1-800-MEDICARE létí", "Dá a lóhùn kíákíá kí àǹfààní rẹ má bàa dúró", "Fi ìdajì nọ́mbà náà ránṣẹ́", "Fi ránṣẹ́ sí àwọn ọ̀rẹ́ rẹ"], answer: 0, why: "Medicare kò ní kàn sí ọ lójijì láti béèrè nọ́mbà rẹ; fi ìròyìn rẹ̀ tó wọn létí." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Àwọn apá Medicare",
        questions: [
          { objective: "O1", q: "Apá Medicare wo ni ìbánigbófò ilé-ìwòsàn?", options: ["Part D", "Part A", "Part B", "Medigap"], answer: 1, why: "Part A ń ṣèrànwọ́ láti sanwó dídúró ní ilé-ìwòsàn, hospice àti àwọn ìtọ́jú ilé kan." },
          { objective: "O1", q: "Ìyá-àgbà rẹ lọ fún àyẹ̀wò ara lọ́dọ̀ dókítà. Apá wo ló sábà máa ń ṣèrànwọ́ láti sanwó?", options: ["Part A", "Part D", "Part B", "Kò sí"], answer: 2, why: "Part B ń bójú tó ìbẹ̀wò sọ́dọ̀ dókítà àti ìtọ́jú outpatient." },
          { objective: "O1", q: "Kí ni Medicare Advantage?", options: ["Ètò aládàáni tí Medicare fọwọ́ sí tí ó ní Part A àti B", "Fóònù ọ̀fẹ́", "Owó Social Security", "Irú ilé-ìwòsàn kan"], answer: 0, why: "Àwọn ètò Part C jẹ́ ètò aládàáni tí ó ko A, B àti ìbánigbófò oògùn (lọ́pọ̀ ìgbà) pọ̀." },
          { objective: "O1", q: "Ibo ni o ti yẹ kí o wá premium Part B ọdún yìí?", options: ["Ọ̀rọ̀ ìránṣẹ́ láti ọ̀dọ̀ àjèjì", "Ìwé ìròyìn ọdún tó kọjá", "Àmọ̀ràn aládùúgbò", "Medicare.gov tàbí olùgbaninímọ̀ràn SHIP rẹ"], answer: 3, why: "Premium ń yí padà lọ́dọọdún; ṣàyẹ̀wò orísun gidi." },
          { objective: "O2", q: "Ẹnìkan pè ọ́, ó sọ pé láti Medicare ni òun ti ń pè, òun sì nílò nọ́mbà Medicare rẹ láti fi brace ọ̀fẹ́ ránṣẹ́. Kí ni o máa ṣe?", options: ["Fún un ní nọ́mbà náà", "Gé ìpè náà kí o sì fi ìròyìn rẹ̀ tó 1-800-MEDICARE létí", "Fún un ní nọ́mbà báńkì rẹ dípò rẹ̀", "Pè é padà lórí nọ́mbà tí ó fún ọ"], answer: 1, why: "Medicare kì í pè lójijì láti béèrè nọ́mbà rẹ; jìbìtì tí ó wọ́pọ̀ ni èyí." }
        ]
      }
    },
    {
      name: "Orí 2: Fífi orúkọ sílẹ̀ lásìkò àti gbígba ìrànlọ́wọ́",
      lessons: [
        {
          objectives: ["O3"],
          title: "Wíwá àsìkò ìforúkọsílẹ̀ rẹ",
          minutes: 6,
          goal: "Ṣírò Initial Enrollment Period tìrẹ kí o sì mọ ohun tí ó máa ṣẹlẹ̀ tí o bá pàdánù rẹ̀.",
          text: [
            "Àǹfààní àkọ́kọ́ rẹ láti forúkọ sílẹ̀ ni Initial Enrollment Period rẹ. Ó gùn tó oṣù 7: ó bẹ̀rẹ̀ ní oṣù 3 ṣáájú oṣù tí o máa pé ọmọ ọdún 65, ó ní oṣù ọjọ́ ìbí rẹ nínú, ó sì parí ní oṣù 3 lẹ́yìn rẹ̀. Àpẹẹrẹ láti CMS: tí o bá pé 65 ní June, àsìkò rẹ jẹ́ láti March títí dé September.",
            "Tí o bá ti ń gba àǹfààní Social Security nígbà tí o bá pé 65, wọ́n sábà máa ń forúkọ rẹ sílẹ̀ fún Part A àti B fúnra wọn. Tí kò bá rí bẹ́ẹ̀, o máa forúkọ sílẹ̀ nípasẹ̀ Social Security. Ṣàyẹ̀wò ssa.gov tàbí pe Social Security láti mọ bí èyí ṣe kàn ọ́.",
            "Tí ìwọ tàbí ọkọ tàbí aya rẹ bá ṣì ń ṣiṣẹ́ tí ẹ sì ní ìbánigbófò ìlera láti iṣẹ́ náà, ó lè ṣeé ṣe fún ọ láti dúró. CMS sọ pé o lè forúkọ sílẹ̀ nígbà tí o ṣì ní ìbánigbófò yẹn, tàbí láàárín oṣù 8 lẹ́yìn tí iṣẹ́ náà tàbí ìbánigbófò náà bá parí, èyí tí ó bá kọ́kọ́ dé. Èyí ni Special Enrollment Period. Béèrè lọ́wọ́ ọ́fíìsì àǹfààní òṣìṣẹ́ níbi iṣẹ́ rẹ àti SHIP kí o tó pinnu láti dúró.",
            "Tí o bá pàdánù àsìkò rẹ tí o kò sì lẹ́tọ̀ọ́ sí Special Enrollment Period, o lè forúkọ sílẹ̀ nígbà General Enrollment Period, láti January 1 sí March 31 lọ́dọọdún, ìbánigbófò rẹ á sì bẹ̀rẹ̀ ní oṣù tí ó tẹ̀lé ìgbà tí o forúkọ sílẹ̀. Ṣùgbọ́n o lè san owó ìtanràn fún pípẹ́ níwọ̀n ìgbà tí o bá ní Part B: CMS sọ pé premium náà lè lọ sókè ní 10% fún odindi àkókò oṣù 12 kọ̀ọ̀kan tí o lè ti ní Part B tí o kò sì ní i. Owó ìtanràn tún lè wà fún àìní ìbánigbófò oògùn; béèrè lọ́wọ́ SHIP tàbí ṣàyẹ̀wò medicare.gov."
          ],
          steps: ["Kọ oṣù tí o máa pé ọmọ ọdún 65.", "Ka oṣù 3 sẹ́yìn àti oṣù 3 síwájú: àsìkò oṣù 7 rẹ nìyẹn.", "Tí o bá ní ìbánigbófò ìlera láti iṣẹ́, béèrè lọ́wọ́ agbanisíṣẹ́ rẹ àti SHIP bóyá o lè dúró.", "Kọ oṣù àkọ́kọ́ àsìkò rẹ sórí kàlẹ́ńdà rẹ.", "Ṣàyẹ̀wò àwọn àlàyé ní ssa.gov, medicare.gov tàbí lọ́dọ̀ SHIP."],
          words: [["Initial Enrollment Period", "àsìkò oṣù 7 àkọ́kọ́ rẹ láti forúkọ sílẹ̀ fún Medicare, ní àyíká ọjọ́ ìbí ọdún 65 rẹ."], ["Special Enrollment Period", "àǹfààní láti forúkọ sílẹ̀ lẹ́yìn àwọn àsìkò tí a mọ̀ nítorí ipò kan nínú ayé, bí pípàdánù ìbánigbófò láti iṣẹ́."], ["General Enrollment Period", "January 1 sí March 31 lọ́dọọdún, fún àwọn tí ó pàdánù àsìkò àkọ́kọ́ wọn."], ["Owó ìtanràn fún pípẹ́ (late enrollment penalty)", "premium tí ó ga jù tí o máa san nítorí pé o pẹ́ kí o tó forúkọ sílẹ̀."]],
          slides: [
            { title: "Initial Enrollment Period: oṣù 7", bullets: ["Oṣù 3 ṣáájú oṣù ọjọ́ ìbí ọdún 65 rẹ", "Oṣù ọjọ́ ìbí rẹ", "Oṣù 3 lẹ́yìn rẹ̀"] },
            { title: "Àpẹẹrẹ", bullets: ["O pé 65 ní June", "Àsìkò: láti March títí dé September"] },
            { title: "Ṣé o ṣì ń ṣiṣẹ́, o sì ní ìbánigbófò iṣẹ́?", bullets: ["Ó lè ṣeé ṣe fún ọ láti dúró", "Forúkọ sílẹ̀ láàárín oṣù 8 lẹ́yìn tí ó bá parí", "Kọ́kọ́ béèrè lọ́wọ́ agbanisíṣẹ́ rẹ àti SHIP"] },
            { title: "Ṣé o pàdánù rẹ̀?", bullets: ["General Enrollment: January 1 sí March 31", "Ìtanràn Part B: tó 10% fún odindi ọdún kọ̀ọ̀kan tí o fi pẹ́", "Ṣàyẹ̀wò ní medicare.gov tàbí lọ́dọ̀ SHIP"] }
          ],
          sources: [
            { name: "CMS: Original Medicare (Part A àti B), ẹ̀tọ́ àti ìforúkọsílẹ̀", url: "https://www.cms.gov/medicare/enrollment-renewal/original-part-a-b" },
            { name: "Social Security: Forúkọ sílẹ̀ fún Medicare", url: "https://www.ssa.gov/medicare/sign-up" }
          ],
          tryIt: "Ṣírò Initial Enrollment Period fún ara rẹ tàbí fún ẹnìkan nínú ẹbí rẹ: kọ oṣù ọjọ́ ìbí, lẹ́yìn náà oṣù àkọ́kọ́ àti oṣù ìkẹyìn àsìkò oṣù 7 náà. Tí ẹni náà bá ti wà lórí Medicare, kọ ọjọ́ General Enrollment Period dípò rẹ̀.",
          youCanNow: "ṣírò Initial Enrollment Period, mọ ìgbà tí o lè dúró, kí o sì mọ iye tí pípẹ́ láti forúkọ sílẹ̀ máa ná ọ.",
          quickCheck: [
            { objective: "O3", q: "Kí ni Initial Enrollment Period?", options: ["Àsìkò oṣù 7 rẹ: oṣù 3 ṣáájú oṣù ọjọ́ ìbí ọdún 65 rẹ, oṣù náà, àti oṣù 3 lẹ́yìn rẹ̀", "Open Enrollment ìgbà ìwọ́wé", "Ìgbàkígbà tí o bá fẹ́", "Ọ̀sẹ̀ kan lẹ́yìn ọjọ́ ìbí rẹ"], answer: 0, why: "Ó gùn tó oṣù 7, oṣù tí o pé 65 sì wà ní àárín rẹ̀." },
            { objective: "O3", q: "O pé 65 ní October, o kò sì ní ìbánigbófò láti iṣẹ́. Àwọn oṣù wo ni àsìkò rẹ?", options: ["October nìkan", "Láti January títí dé March", "October 15 sí December 7", "Láti July títí dé January"], answer: 3, why: "Ka oṣù 3 sẹ́yìn (July) àti oṣù 3 síwájú (January)." }
          ]
        },
        {
          objectives: ["O4"],
          title: "Ṣíṣàyẹ̀wò ìbánigbófò rẹ ní ìgbà ìwọ́wé kọ̀ọ̀kan",
          minutes: 5,
          goal: "Lo àsìkò Open Enrollment ìgbà ìwọ́wé láti ṣàyẹ̀wò bóyá ètò rẹ ṣì bá ọ mu.",
          text: [
            "Àwọn ètò ń yí padà lọ́dọọdún: owó, àwọn oògùn tí wọ́n ń bójú tó, àti àwọn dókítà tí ó wà nínú network. Ní ìgbà ìwọ́wé (fall) kọ̀ọ̀kan, Medicare ní àsìkò Open Enrollment láti October 15 sí December 7. Nígbà yìí, o lè yí ètò Medicare Advantage rẹ tàbí ètò oògùn Part D rẹ padà, tàbí kí o yí láti Original Medicare sí Medicare Advantage tàbí láti Medicare Advantage sí Original Medicare. Àwọn àyípadà ń bẹ̀rẹ̀ ní January 1. Tí ìbánigbófò rẹ bá tẹ́ ọ lọ́rùn, o kò ní láti ṣe nǹkan kan.",
            "Ṣáájú Open Enrollment, àwọn ètò ń fi Annual Notice of Change ránṣẹ́. Kà á láti rí àyípadà nínú premium rẹ, oògùn rẹ àti àwọn dókítà rẹ.",
            "Láti fi àwọn ètò wéra, lo irinṣẹ́ ìfiwéra ètò lórí medicare.gov. Tẹ àwọn oògùn rẹ àti ilé-oògùn rẹ sínú rẹ̀ láti inú àkọsílẹ̀ tí o ṣe ní Ẹ̀kọ́ 2. Wo owó lápapọ̀ fún ọdún kan, kì í ṣe premium oṣooṣù nìkan, kí o sì ṣàyẹ̀wò pé àwọn dókítà rẹ wà nínú network.",
            "Ṣọ́ra fún ìpè ìtajà àti ìpolówó tí ó ń fúnni ní ìfúnpá ní ìgbà ìwọ́wé. Kò sí ẹni tí ó yẹ kí ó fi ipá mú ọ láti yí ètò padà. Olùgbaninímọ̀ràn SHIP jẹ́ ọ̀fẹ́, kì í sì í ta ètò. Àwọn tí ó ní Medicare Advantage lè ní àǹfààní míì láti yí ètò padà ní ìbẹ̀rẹ̀ ọdún; ṣàyẹ̀wò àwọn ọjọ́ náà lórí medicare.gov."
          ],
          steps: ["Ka Annual Notice of Change ètò rẹ nígbà tí ó bá dé.", "Mú àkọsílẹ̀ àwọn dókítà rẹ, oògùn rẹ àti ilé-oògùn rẹ.", "Láàárín October 15 àti December 7, fi àwọn ètò wéra lórí medicare.gov tàbí pẹ̀lú SHIP.", "Ṣàyẹ̀wò owó lápapọ̀ fún ọdún kan àti pé àwọn dókítà rẹ wà nínú network.", "Tí o bá yí ètò padà, kọ ètò tuntun náà àti nọ́mbà ìfìdímúlẹ̀ (confirmation number) sílẹ̀."],
          words: [["Open Enrollment", "October 15 sí December 7 lọ́dọọdún, nígbà tí àwọn tí ó ní Medicare lè yí ètò wọn padà fún ọdún tí ń bọ̀."], ["Annual Notice of Change", "lẹ́tà láti ọ̀dọ̀ ètò rẹ ní ìgbà ìwọ́wé kọ̀ọ̀kan tí ó ń sọ ohun tí ó máa yí padà ní ọdún tí ń bọ̀."], ["Formulary", "àkọsílẹ̀ àwọn oògùn tí ètò kan ń bójú tó."]],
          slides: [
            { title: "Àwọn ètò ń yí padà lọ́dọọdún", bullets: ["Owó, àwọn oògùn tí wọ́n ń bójú tó, network àwọn dókítà", "Ka Annual Notice of Change rẹ"] },
            { title: "Open Enrollment", bullets: ["October 15 sí December 7", "Yí ètò padà; ètò tuntun ń bẹ̀rẹ̀ ní January 1", "Ṣé ó tẹ́ ọ lọ́rùn? O kò ní láti ṣe nǹkan kan"] },
            { title: "Fi wéra lọ́nà tó tọ́", bullets: ["Tẹ àwọn oògùn rẹ àti ilé-oògùn rẹ sínú rẹ̀", "Wo owó lápapọ̀ fún ọdún kan", "Ṣàyẹ̀wò pé àwọn dókítà rẹ wà nínú network"] },
            { title: "Kò sí ìfúnpá", bullets: ["Má fetí sí ìpè ìtajà tí ó ń fúnni ní ìfúnpá", "SHIP jẹ́ ọ̀fẹ́, kì í sì í ta ètò"] }
          ],
          sources: [
            { name: "CMS: Ohun èlò ìkéde Medicare Open Enrollment", url: "https://www.cms.gov/outreach-and-education/reach-out/find-tools-to-help-you-help-others/open-enrollment-outreach-and-media-materials" },
            { name: "Medicare.gov: Wá àwọn ètò kí o sì fi wọ́n wéra", url: "https://www.medicare.gov/plan-compare/" }
          ],
          tryIt: "Kọ ọjọ́ Open Enrollment ọdún yìí sórí kàlẹ́ńdà rẹ. Lẹ́yìn náà, wá Annual Notice of Change ètò rẹ (tàbí ní kí ẹnìkan nínú ẹbí rẹ bá ọ wá a), kí o sì kọ nǹkan kan tí ó máa yí padà ní ọdún tí ń bọ̀ sílẹ̀. Tí o kò bá tíì wà lórí Medicare, kọ àwọn ìbéèrè tí o máa béèrè nípa ètò kan sílẹ̀.",
          youCanNow: "lo àsìkò Open Enrollment ìgbà ìwọ́wé láti ṣàyẹ̀wò ètò rẹ, kí o sì fi àwọn àṣàyàn wéra pẹ̀lú oògùn àti dókítà tìrẹ.",
          quickCheck: [
            { objective: "O4", q: "Kí ni Annual Notice of Change?", options: ["Lẹ́tà láti ọ̀dọ̀ ètò rẹ tí ó ń sọ àwọn àyípadà ọdún tí ń bọ̀", "Owó ìtanràn Medicare", "Káàdì tuntun", "Fọ́ọ̀mù owó-orí"], answer: 0, why: "Àwọn ètò ń fi ránṣẹ́ ṣáájú Open Enrollment kí o lè ṣàyẹ̀wò àyípadà nínú owó, oògùn àti dókítà." },
            { objective: "O4", q: "Ètò oògùn méjì dà bí èyí tó dára. Premium oṣooṣù ọ̀kan kéré jù. Kí ni o máa fi wéra?", options: ["Premium oṣooṣù nìkan", "Owó lápapọ̀ fún ọdún kan pẹ̀lú oògùn rẹ àti ilé-oògùn tìrẹ", "Ètò tí ó ń pè ọ́ jù", "Àmì ìdánimọ̀ (logo) wọn"], answer: 1, why: "Wo owó lápapọ̀ fún ọdún kan, kì í ṣe premium oṣooṣù nìkan." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gbígba ìrànlọ́wọ́ ọ̀fẹ́ lọ́wọ́ SHIP àti Medicare",
          minutes: 5,
          goal: "Kàn sí ìrànlọ́wọ́ Medicare ọ̀fẹ́ tí kò ṣègbè, kí o sì múra sílẹ̀ pẹ̀lú àwọn ìbéèrè rẹ.",
          text: [
            "O kò ní láti dá nìkan wá ojútùú sí Medicare. Gbogbo ìpínlẹ̀ ló ní State Health Insurance Assistance Program, tàbí SHIP. SHIP ń fún ọ ní ìgbaninímọ̀ràn Medicare ní agbègbè rẹ, ẹnì kan sí ẹnì kan, láìsí owó kankan. Àwọn olùgbaninímọ̀ràn kò ṣègbè: wọn kì í ta ìbánigbófò. Wọ́n lè ràn ọ́ lọ́wọ́ láti fi owó àwọn ètò wéra, ṣàyẹ̀wò ìbánigbófò rẹ, ṣàyẹ̀wò network kí wọ́n sì ṣàlàyé àwọn àṣàyàn rẹ. Wá tìrẹ ní shiphelp.org.",
            "Ìrànlọ́wọ́ Medicare fúnra rẹ̀: ojú-òpó wẹ́ẹ̀bù gidi medicare.gov, àti nọ́mbà fóònù 1-800-MEDICARE (1-800-633-4227), tí CMS sọ pé ó ṣí sílẹ̀ fún wákàtí 24 lójúmọ́, ọjọ́ 7 lọ́sẹ̀. Fún ìbéèrè nípa fífi orúkọ sílẹ̀ fún Part A àti B, kàn sí Social Security ní ssa.gov.",
            "Múra sílẹ̀ kí o tó pè: ní káàdì Medicare rẹ nítòsí (má ka nọ́mbà náà fún ẹnikẹ́ni tí ó pè ọ́), àkọsílẹ̀ àwọn dókítà àti oògùn rẹ, àwọn lẹ́tà ètò rẹ, àti àwọn ìbéèrè rẹ tí o ti kọ sílẹ̀. Kọ nǹkan sílẹ̀: ọjọ́, orúkọ ẹni náà àti ohun tí ó sọ.",
            "Ẹnìkan nínú ẹbí rẹ lè darapọ̀ mọ́ ìpè náà pẹ̀lú àṣẹ rẹ. Tí o bá ní kí olùrànlọ́wọ́ AI ṣàlàyé lẹ́tà Medicare kan, kọ́kọ́ yọ orúkọ rẹ, nọ́mbà Medicare rẹ àti ìsọfúnni àdáni míì kúrò, kí o sì tún ṣàyẹ̀wò ìdáhùn náà lọ́dọ̀ SHIP tàbí medicare.gov."
          ],
          steps: ["Lọ sí shiphelp.org kí o sì yan ìpínlẹ̀ rẹ láti wá SHIP agbègbè rẹ.", "Kọ àwọn ìbéèrè rẹ, kí o sì kó àkọsílẹ̀ dókítà àti oògùn rẹ jọ.", "Pe SHIP, tàbí 1-800-MEDICARE, tàbí lo medicare.gov.", "Kọ nǹkan sílẹ̀: ọjọ́, orúkọ àti ìdáhùn.", "Kọ ọjọ́ ìparí tí ó kàn sórí kàlẹ́ńdà rẹ."],
          words: [["SHIP", "State Health Insurance Assistance Program: ìgbaninímọ̀ràn Medicare ọ̀fẹ́ tí kò ṣègbè ní agbègbè rẹ."], ["Tí kò ṣègbè", "tí kò gbìyànjú láti ta nǹkan fún ọ tàbí láti tì ọ́ sí àṣàyàn kan."]],
          slides: [
            { title: "SHIP: ìrànlọ́wọ́ ọ̀fẹ́ ní agbègbè rẹ", bullets: ["Ìgbaninímọ̀ràn Medicare ẹnì kan sí ẹnì kan", "Kò sí owó, kì í ta ìbánigbófò", "Wá tìrẹ ní shiphelp.org"] },
            { title: "Ìrànlọ́wọ́ Medicare fúnra rẹ̀", bullets: ["medicare.gov", "1-800-MEDICARE (1-800-633-4227), 24/7", "Ìbéèrè nípa fífi orúkọ sílẹ̀: ssa.gov"] },
            { title: "Kí o tó pè", bullets: ["Àkọsílẹ̀ dókítà àti oògùn rẹ", "Àwọn lẹ́tà ètò rẹ", "Àwọn ìbéèrè tí o ti kọ sílẹ̀"] },
            { title: "Nígbà ìpè náà", bullets: ["Kọ nǹkan sílẹ̀: ọjọ́, orúkọ, ìdáhùn", "Ẹnìkan nínú ẹbí rẹ lè darapọ̀", "Kọ ọjọ́ ìparí tí ó kàn sórí kàlẹ́ńdà rẹ"] }
          ],
          sources: [
            { name: "SHIP: State Health Insurance Assistance Programs", url: "https://www.shiphelp.org/" },
            { name: "Medicare.gov: Bá ẹnìkan sọ̀rọ̀ (ṣàyẹ̀wò àkókò fóònù níbí)", url: "https://www.medicare.gov/talk-to-someone" }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣe ètò Medicare ojú-ìwé kan rẹ pẹ̀lú àsìkò ìforúkọsílẹ̀ rẹ, àwọn apá tí o ní tàbí tí o nílò, àwọn dókítà rẹ, oògùn rẹ àti ilé-oògùn rẹ, ìbéèrè mẹ́ta, àti nọ́mbà fóònù SHIP rẹ láti shiphelp.org. Lẹ́yìn náà, pe SHIP rẹ láti ṣètò ìpàdé ìgbaninímọ̀ràn, tàbí lo irinṣẹ́ ìfiwéra ètò lórí medicare.gov pẹ̀lú àkọsílẹ̀ oògùn rẹ.",
          youCanNow: "wá ìrànlọ́wọ́ Medicare ọ̀fẹ́ kí o sì kàn sí wọn, kí o sì múra sílẹ̀ pẹ̀lú ètò àti ìbéèrè tìrẹ.",
          quickCheck: [
            { objective: "O5", q: "Kí ni SHIP?", options: ["Ilé-iṣẹ́ ìbánigbófò kan", "Ètò Medicare Advantage kan", "Ètò ìgbaninímọ̀ràn Medicare ọ̀fẹ́ tí kò ṣègbè ní gbogbo ìpínlẹ̀", "Ibùdó ìpè ìtajà"], answer: 2, why: "SHIP ń fúnni ní ìgbaninímọ̀ràn Medicare ọ̀fẹ́ ẹnì kan sí ẹnì kan, kì í sì í ta ìbánigbófò." },
            { objective: "O5", q: "O fẹ́ pe SHIP. Kí ni o máa ní ní sẹpẹ́?", options: ["Kò sí nǹkan; wọ́n mọ ohun gbogbo nípa rẹ", "Káàdì báńkì rẹ", "Àwọn ìbéèrè rẹ, àkọsílẹ̀ dókítà àti oògùn rẹ, àti àwọn lẹ́tà ètò rẹ", "Nọ́mbà Social Security rẹ láti kọ́kọ́ kà sókè"], answer: 2, why: "Múra àwọn ìbéèrè, àkọsílẹ̀ àti lẹ́tà rẹ sílẹ̀, kí o sì kọ nǹkan sílẹ̀ nígbà ìpè náà." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Fífi orúkọ sílẹ̀ lásìkò àti gbígba ìrànlọ́wọ́",
        questions: [
          { objective: "O3", q: "O pé 65 ní June. Ìgbà wo ni Initial Enrollment Period rẹ?", options: ["Ní June nìkan", "January sí March", "October 15 sí December 7", "Láti March títí dé September"], answer: 3, why: "Ó bẹ̀rẹ̀ ní oṣù 3 ṣáájú oṣù ọjọ́ ìbí rẹ, ó sì parí ní oṣù 3 lẹ́yìn rẹ̀." },
          { objective: "O3", q: "Kí ló lè ṣẹlẹ̀ tí o bá pẹ́ láti forúkọ sílẹ̀ fún Part B láìsí Special Enrollment Period?", options: ["O lè san premium tí ó ga jù níwọ̀n ìgbà tí o bá ní Part B", "Kò sí ohun tí ó máa ṣẹlẹ̀", "Wọ́n máa dá owó padà fún ọ", "O kò ní lè gba Medicare láéláé"], answer: 0, why: "CMS sọ pé premium Part B lè lọ sókè ní 10% fún odindi oṣù 12 kọ̀ọ̀kan tí o fi pẹ́." },
          { objective: "O4", q: "Ìgbà wo ni Open Enrollment ìgbà ìwọ́wé ti Medicare?", options: ["January 1 sí March 31", "Oṣù ọjọ́ ìbí rẹ", "October 15 sí December 7", "Ọjọ́kọ́jọ́ tí o bá fẹ́"], answer: 2, why: "Ní ìgbà ìwọ́wé kọ̀ọ̀kan, àwọn tí ó ní Medicare lè yí ètò padà láti October 15 sí December 7." },
          { objective: "O4", q: "Kí ni ọ̀nà tí ó dára jù láti fi àwọn ètò oògùn wéra?", options: ["Yan premium oṣooṣù tí ó kéré jù nìkan", "Tẹ oògùn rẹ àti ilé-oògùn tìrẹ sínú rẹ̀ kí o sì wo owó lápapọ̀ fún ọdún kan", "Yan ètò tí ẹni tí ó pè ọ́ dábàá", "Yan ètò tí ìpolówó rẹ̀ rẹwà jù"], answer: 1, why: "Owó lápapọ̀ fún ọdún kan pẹ̀lú oògùn tìrẹ ló ń fi iye gidi hàn." },
          { objective: "O5", q: "Èwo ni òótọ́ nípa SHIP?", options: ["Ó ń ta ètò ìbánigbófò", "Ó ń gba owó fún ìpè kọ̀ọ̀kan", "Ó ń fúnni ní ìgbaninímọ̀ràn Medicare ọ̀fẹ́ tí kò ṣègbè", "Ó ń ran àwọn tí kò tíì pé 65 nìkan lọ́wọ́"], answer: 2, why: "Ìgbaninímọ̀ràn SHIP jẹ́ ọ̀fẹ́, ní agbègbè rẹ, kò sì ṣègbè." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìpìlẹ̀ Medicare",
    questions: [
      { objective: "O1", q: "Ta ló lè gba Medicare?", options: ["Àwọn tí kò tíì pé 30 nìkan", "Àwọn ọmọ ọdún 65 tàbí jù bẹ́ẹ̀ lọ, àti àwọn ọ̀dọ́ kan tí ó ní àìlera tàbí tí kídìnrín wọn ti dákẹ́", "Àwọn ológun àtijọ́ (veterans) nìkan", "Àwọn tí ó ń gbé lókè òkun nìkan"], answer: 1, why: "Medicare wà fún àwọn ọmọ ọdún 65 sókè, àwọn kan tí ó ní àìlera àti àwọn tí ó ní End-Stage Renal Disease." },
      { objective: "O1", q: "Ohun tí Part B ń bójú tó jù lọ ni:", options: ["Dídúró ní ilé-ìwòsàn", "Oògùn prescription nìkan", "Fífọ eyín nìkan", "Ìbẹ̀wò sọ́dọ̀ dókítà àti ìtọ́jú outpatient"], answer: 3, why: "Part B jẹ́ ìbánigbófò ìtọ́jú fún dókítà àti ìtọ́jú outpatient." },
      { objective: "O1", q: "Original Medicare ni:", options: ["Part A àti Part B", "Part C nìkan", "Part D nìkan", "Ètò aládàáni kan"], answer: 0, why: "Original Medicare túmọ̀ sí Part A àti B pọ̀." },
      { objective: "O1", q: "Ọ̀pọ̀ ènìyàn ń san premium oṣooṣù fún:", options: ["Kò sí nǹkan", "Part A nìkan", "Part B", "Káàdì Medicare wọn"], answer: 2, why: "Ọ̀pọ̀ ènìyàn kì í san premium Part A, ṣùgbọ́n wọ́n ń san ti Part B." },
      { objective: "O1", q: "Part D ń bójú tó:", options: ["Oògùn prescription", "Dídúró ní ilé-ìwòsàn", "Gíláàsì ojú nìkan", "Ilé gbígbé"], answer: 0, why: "Part D jẹ́ ìbánigbófò oògùn prescription ti Medicare." },
      { objective: "O1", q: "Ètò Medicare Advantage sábà máa ń:", options: ["Bójú tó oògùn nìkan", "Ní Part A àti B, ó sì máa ń ní ìbánigbófò oògùn", "Jẹ́ èyí tí báńkì rẹ ń darí", "Rọ́pò Social Security"], answer: 1, why: "Àwọn ètò Part C ń ko A, B àti D (lọ́pọ̀ ìgbà) pọ̀." },
      { objective: "O4", q: "Kí ni network ètò kan?", options: ["Ojú-òpó wẹ́ẹ̀bù rẹ̀", "Nọ́mbà fóònù rẹ̀", "Àwọn dókítà, ilé-ìwòsàn àti ilé-oògùn tí ó ń bá ṣiṣẹ́", "Owó oṣooṣù rẹ̀"], answer: 2, why: "Ọ̀pọ̀ ètò ń retí pé kí o lo network wọn." },
      { objective: "O4", q: "Kí ló yẹ kí o ní ní sẹpẹ́ láti fi àwọn ètò wéra?", options: ["PIN báńkì rẹ", "Ìpolówó inú ìwé ìròyìn", "Kò sí nǹkan", "Àkọsílẹ̀ àwọn dókítà rẹ, oògùn rẹ àti ilé-oògùn rẹ"], answer: 3, why: "Àwọn dókítà àti oògùn tìrẹ ló ń pinnu ètò tí ó bá ọ mu." },
      { objective: "O2", q: "Ẹnìkan pè ọ́, ó ní òun máa fún ọ ní ohun èlò àyẹ̀wò ọ̀fẹ́ tí o bá fún òun ní nọ́mbà Medicare rẹ. Èyí jẹ́:", options: ["Iṣẹ́ Medicare tí ó wọ́pọ̀", "Jìbìtì, ó ṣeé ṣe gan-an", "Àtúngbà oògùn láti ilé-oògùn", "Olùgbaninímọ̀ràn SHIP"], answer: 1, why: "Medicare kì í pè lójijì láti béèrè nọ́mbà rẹ; ẹ̀bùn ọ̀fẹ́ jẹ́ ẹ̀tàn tí ó wọ́pọ̀." },
      { objective: "O2", q: "Medicare Summary Notice rẹ fi kẹ̀kẹ́ arọ (wheelchair) tí o kò gbà rí hàn. Ó yẹ kí o:", options: ["Fi ìròyìn rẹ̀ tó 1-800-MEDICARE létí", "Má kà á sí", "San owó rẹ̀", "Ju ìwé náà nù"], answer: 0, why: "Ìtọ́jú tí o kò gbà rí lè jẹ́ jìbìtì; fi ìròyìn rẹ̀ tó wọn létí." },
      { objective: "O3", q: "Báwo ni Initial Enrollment Period ṣe gùn tó?", options: ["Ọ̀sẹ̀ 1", "Oṣù 1", "Ọdún 1", "Oṣù 7"], answer: 3, why: "Oṣù 3 ṣáájú, oṣù ọjọ́ ìbí àti oṣù 3 lẹ́yìn rẹ̀." },
      { objective: "O3", q: "O ń gba àǹfààní Social Security ṣáájú kí o tó pé 65. Lọ́pọ̀ ìgbà:", options: ["O kò ní lẹ́tọ̀ọ́ láéláé", "Wọ́n máa bù ọ́ ní owó ìtanràn", "Wọ́n máa forúkọ rẹ sílẹ̀ fún Part A àti B fúnra wọn", "Wọ́n máa gbé ọ lọ sí Part D nìkan"], answer: 2, why: "Wọ́n sábà máa ń forúkọ àwọn tí ó ti wà lórí Social Security sílẹ̀ fúnra wọn; ṣàyẹ̀wò ní ssa.gov." },
      { objective: "O3", q: "O jẹ́ ọmọ ọdún 66, o sì ṣì ní ìbánigbófò ìlera láti iṣẹ́ tí o ń ṣe báyìí. Kí ló yẹ kí o ṣe kí o tó pinnu láti dúró fún Part B?", options: ["Kò sí nǹkan; dídúró dára nígbà gbogbo", "Fagi lé ìbánigbófò iṣẹ́ rẹ", "Béèrè lọ́wọ́ ọ́fíìsì àǹfààní òṣìṣẹ́ níbi iṣẹ́ rẹ àti SHIP", "Béèrè lọ́wọ́ ẹni tí ó pè ọ́ láti tajà"], answer: 2, why: "Special Enrollment Period lè kàn ọ́, ṣùgbọ́n kọ́kọ́ ṣàyẹ̀wò ipò rẹ." },
      { objective: "O3", q: "General Enrollment Period jẹ́ láti:", options: ["January 1 sí March 31", "October 15 sí December 7", "Ní ọjọ́ ìbí rẹ nìkan", "June sí August"], answer: 0, why: "CMS fi General Enrollment Period sí January 1 sí March 31 lọ́dọọdún." },
      { objective: "O3", q: "Owó ìtanràn Part B fún pípẹ́ lè gbé premium sókè ní:", options: ["1% lẹ́ẹ̀kan", "50% fún oṣù kan", "Kò sí nǹkan", "10% fún odindi oṣù 12 kọ̀ọ̀kan tí o lè ti ní Part B tí o kò sì ní i"], answer: 3, why: "CMS sọ pé owó ìtanràn náà tó 10% fún odindi àkókò oṣù 12 kọ̀ọ̀kan, níwọ̀n ìgbà tí o bá ní Part B." },
      { objective: "O4", q: "Nígbà Open Enrollment ìgbà ìwọ́wé, o lè:", options: ["Yí nọ́mbà Social Security rẹ padà", "Yí ètò Medicare Advantage tàbí ètò oògùn rẹ padà fún ọdún tí ń bọ̀", "Gba owó lọ́wọ́ Medicare", "Fagi lé Medicare nìkan"], answer: 1, why: "Láti October 15 sí December 7 ni o lè yí ètò padà fún January 1." },
      { objective: "O4", q: "Ní ìgbà ìwọ́wé kọ̀ọ̀kan, ètò rẹ ń fi lẹ́tà kan ránṣẹ́ tí ó ń sọ àwọn àyípadà ọdún tí ń bọ̀. Òun ni:", options: ["Annual Notice of Change", "Káàdì ọjọ́ ìbí", "Ìwé owó-orí", "Ìròyìn nípa gbèsè (credit report)"], answer: 0, why: "Ka Annual Notice of Change ṣáájú Open Enrollment." },
      { objective: "O5", q: "Ibo ni o ti lè rí SHIP agbègbè rẹ?", options: ["Ìpolówó tí ó yọ jáde lójú-iboju (pop-up)", "Ìjápọ̀ (link) inú ọ̀rọ̀ ìránṣẹ́", "shiphelp.org", "Aṣojú ìbánigbófò èyíkéyìí"], answer: 2, why: "shiphelp.org ní SHIP ti gbogbo ìpínlẹ̀." },
      { objective: "O5", q: "O fẹ́ ní kí olùrànlọ́wọ́ AI ṣàlàyé lẹ́tà Medicare kan. Kí ni o máa kọ́kọ́ ṣe?", options: ["Fi nọ́mbà Medicare rẹ sínú rẹ̀", "Fi ìsọfúnni báńkì rẹ kún un", "Fi àwòrán káàdì rẹ ránṣẹ́", "Yọ orúkọ rẹ, nọ́mbà Medicare rẹ àti ìsọfúnni àdáni míì kúrò"], answer: 3, why: "Má fi nọ́mbà àdáni hàn irinṣẹ́ AI láéláé; lẹ́yìn náà ṣàyẹ̀wò lọ́dọ̀ SHIP tàbí medicare.gov." },
      { objective: "O5", q: "Nígbà tí o bá pe SHIP tàbí 1-800-MEDICARE, ìwà rere kan ni láti:", options: ["Gé ìpè kíákíá", "Kọ nǹkan sílẹ̀: ọjọ́, orúkọ àti ìdáhùn", "Ka nọ́mbà rẹ fún ẹnikẹ́ni tí ó pè ọ́", "Gbàgbé àwọn ìbéèrè rẹ"], answer: 1, why: "Àkọsílẹ̀ ń ràn ọ́ lọ́wọ́ láti rántí àti láti tẹ̀lé e." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [1, 4, 7, 8, 10, 14, 15, 17] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Àsìkò ìforúkọsílẹ̀", objective: "O3", notYet: "Kò sí àsìkò, tàbí àwọn oṣù tàbí ọjọ́ náà kò tọ̀nà.", meets: "Àwọn oṣù Initial Enrollment Period tó tọ̀nà, tàbí ọjọ́ Open Enrollment ọdún yìí tí ó bá ti wà lórí Medicare.", exceeds: "Ó kọ bóyá Special Enrollment Period lè kàn án àti ibi tí ó ti ṣàyẹ̀wò rẹ̀." },
      { name: "Àwọn apá tí o ní tàbí tí o nílò", objective: "O1", notYet: "Àwọn apá kan kò sí, tàbí wọ́n dàrú.", meets: "Ó kọ àwọn apá tí o ní tàbí tí o nílò àti ohun tí ọ̀kọ̀ọ̀kan ń bójú tó.", exceeds: "Ó dárúkọ ọ̀nà tí ó ń wò (Original Medicare tàbí Medicare Advantage), àti ìdí rẹ̀." },
      { name: "Ó ti múra láti fi wéra", objective: "O4", notYet: "Kò sí àkọsílẹ̀ dókítà, oògùn tàbí ilé-oògùn.", meets: "Àkọsílẹ̀ àwọn dókítà, oògùn àti ilé-oògùn, tí ó ti ṣetán fún irinṣẹ́ ìfiwéra ètò.", exceeds: "Ó lo irinṣẹ́ náà tàbí SHIP láti fi owó lápapọ̀ fún ọdún kan àti network wéra." },
      { name: "Ìrànlọ́wọ́ ọ̀fẹ́ àti àwọn ìbéèrè", objective: "O5", notYet: "Kò sí ìbéèrè, tàbí kò kọ ìrànlọ́wọ́ ọ̀fẹ́ kankan.", meets: "Ìbéèrè mẹ́ta tó yé àti ìrànlọ́wọ́ ọ̀fẹ́ tí ó máa lò: SHIP agbègbè rẹ̀, medicare.gov àti 1-800-MEDICARE.", exceeds: "Ó kàn sí SHIP tàbí lo medicare.gov, ó sì kọ ọjọ́, orúkọ àti ìdáhùn sílẹ̀." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n kàn sí SHIP wọn tàbí lo irinṣẹ́ ìfiwéra ètò medicare.gov láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n forúkọ sílẹ̀ láàárín àsìkò wọn tí wọn kò sì san owó ìtanràn fún pípẹ́",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n fi ìròyìn jìbìtì Medicare tí wọ́n fura sí tàbí owó tí kò tọ́ tó 1-800-MEDICARE létí"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Ìwé àti gègé fún ètò Medicare ojú-ìwé kan",
      "Àkọsílẹ̀ àwọn dókítà, oògùn àti ilé-oògùn akẹ́kọ̀ọ́",
      "Fóònù, àti kọ̀mpútà tàbí tablet tí ó ní íńtánẹ́ẹ̀tì fún medicare.gov àti shiphelp.org tí ó bá wà",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú láìkánjú: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Má ṣe dábàá ètò kankan tàbí fúnni ní ìmọ̀ràn ìbánigbófò; tọ́ àwọn akẹ́kọ̀ọ́ sí SHIP agbègbè wọn, tí ó jẹ́ ọ̀fẹ́ tí kò sì ṣègbè.",
      "Ṣàyẹ̀wò premium ọdún yìí àti àlàyé Open Enrollment lórí medicare.gov ṣáájú ìpàdé kọ̀ọ̀kan.",
      "Má ṣe ní kí àwọn akẹ́kọ̀ọ́ fi nọ́mbà Medicare wọn hàn láéláé; lo káàdì àpẹẹrẹ fún àṣeṣe.",
      "Pe olùgbaninímọ̀ràn SHIP agbègbè yín wá sí ìpàdé kan tí ó bá ṣeé ṣe, pàápàá ṣáájú October 15.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};

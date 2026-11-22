"use strict";

// Koach Learn course (Yoruba translation of veterans/veterans-va-benefits-gi-bill.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "veterans-va-benefits-gi-bill-yo",
  lang: "yo",
  translationOf: "veterans-va-benefits-gi-bill",
  category: "Veterans (military)",
  name: "Àwọn Àǹfààní VA àti GI Bill",
  skills: "Ṣíṣe àwọn ìwé rẹ ní ṣíṣetán, Fífi ẹ̀sùn àìlera (disability claim) sílẹ̀, Bíbéèrè fún ìtọ́jú ìlera VA, Mímọ̀ nípa GI Bill, Bíbéèrè fún àǹfààní ẹ̀kọ́, Rírí ìrànlọ́wọ́ ọ̀fẹ́ láti ọ̀dọ̀ VSO tí VA fọwọ́ sí",
  outcome: "ṣe ètò ìgbésẹ̀ fún àwọn àǹfààní VA rẹ kí o sì bẹ̀rẹ̀ rẹ̀: kó àwọn ìwé rẹ jọ, béèrè fún owó àìlera, ìtọ́jú ìlera tàbí GI Bill ní ọ̀nà tó tọ́, kí o sì gba ìrànlọ́wọ́ ọ̀fẹ́ láti ọ̀dọ̀ Veterans Service Officer tí VA fọwọ́ sí dípò kí o sanwó fún ẹnìkan láti fi ẹ̀sùn rẹ sílẹ̀.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn ọmọ ogun tẹ́lẹ̀ (veterans), àwọn ọmọ ogun tí wọ́n ń múra láti kúrò nínú iṣẹ́ ológun, àti àwọn ẹbí tí ń ràn wọ́n lọ́wọ́. Ọ̀pọ̀ veterans kì í béèrè fún àǹfààní tí wọ́n ti ṣiṣẹ́ fún rárá, tàbí kí wọ́n dúró fún ọ̀pọ̀ ọdún, nítorí pé ọ̀nà náà dà bí ẹni pé ó rú.",
    "O máa kó àwọn ìwé tí VA ń béèrè jọ, o máa kọ́ àwọn ọ̀nà láti fi ẹ̀sùn àìlera sílẹ̀ àti láti béèrè fún ìtọ́jú ìlera, o máa kọ́ ohun tí GI Bill lè sanwó fún àti bí o ṣe lè béèrè fún un, o sì máa rí aṣojú ọ̀fẹ́ tí VA fọwọ́ sí láti ràn ọ́ lọ́wọ́. O tún máa kọ́ àwọn àmì ìkìlọ̀ àwọn tí ń gba owó láti fi ẹ̀sùn sílẹ̀.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí. Òfin, fọ́ọ̀mù àti àkókò iṣẹ́ VA máa ń yí padà, nítorí náà jẹ́rìí sí wọn lórí va.gov tàbí lọ́dọ̀ aṣojú tí VA fọwọ́ sí kí o tó fi nǹkan sílẹ̀."
  ],
  finalTask: "Ṣe ètò ìgbésẹ̀ àwọn àǹfààní VA rẹ: (1) àkọsílẹ̀ àwọn ìwé rẹ, bẹ̀rẹ̀ pẹ̀lú DD214 rẹ; (2) àǹfààní kọ̀ọ̀kan tí o máa béèrè fún (owó àìlera, ìtọ́jú ìlera, ẹ̀kọ́) àti bí o ṣe máa béèrè; (3) tí o bá máa lo GI Bill, ètò wo, ilé-ìwé tàbí ẹ̀kọ́ iṣẹ́ wo, àti ohun tí o nílò fún un; (4) orúkọ àti ọ̀nà láti kàn sí aṣojú tàbí VSO tí VA fọwọ́ sí tí o rí pẹ̀lú irinṣẹ́ àwárí VA; (5) àmì ìkìlọ̀ mẹ́ta ti ẹni tí kò yẹ kí o sanwó fún láti fi ẹ̀sùn rẹ sílẹ̀. Lẹ́yìn náà gbé ìgbésẹ̀ àkọ́kọ́ lórí àǹfààní kan.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn veterans, àwọn ọmọ ogun tí wọ́n ń múra láti kúrò nínú iṣẹ́ ológun, àti àwọn ẹbí tí ń ràn wọ́n lọ́wọ́. Ọ̀pọ̀ kò tíì béèrè fún àǹfààní tí wọ́n ti ṣiṣẹ́ fún rí, tàbí wọ́n ti dúró fún ọ̀pọ̀ ọdún nítorí pé ọ̀nà náà dà bí ẹni pé ó rú.",
    startingPoint: "Wọ́n lè lo fóònù tàbí kọ̀mpútà, wọ́n sì ní DD214 wọn tàbí wọ́n lè béèrè fún un. Ọ̀pọ̀ jù lọ kò mọ fọ́ọ̀mù tí wọ́n máa lò, bí wọ́n ṣe lè dáàbò bo ọjọ́ ìbẹ̀rẹ̀ ẹ̀sùn, bí àwọn ètò GI Bill ṣe yàtọ̀ síra, tàbí pé ìrànlọ́wọ́ láti ọ̀dọ̀ aṣojú tí a fọwọ́ sí jẹ́ ọ̀fẹ́.",
    gap: "Àwọn veterans ń pàdánù owó àti ìtọ́jú nítorí pé wọn kò béèrè, wọ́n kọjá àkókò, tàbí wọ́n sanwó fún àwọn tí kò yẹ kí wọ́n gba owó láti fi ẹ̀sùn sílẹ̀. Àwọn akẹ́kọ̀ọ́ nílò ètò ìgbésẹ̀ tó yé: ìwé ní ṣíṣetán, ọ̀nà tó tọ́ láti béèrè fún àǹfààní kọ̀ọ̀kan, ètò GI Bill, àti aṣojú ọ̀fẹ́ tí VA fọwọ́ sí.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé àwọn ọ̀rọ̀ VA",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà; a tún sọ̀rọ̀ nípa fọ́ọ̀mù orí ìwé",
      "Àṣírí: kò sí nọ́mbà Social Security, ìsọfúnni ìlera tàbí ìwọlé va.gov nínú AI chatbot tàbí lọ́dọ̀ olùrànlọ́wọ́ tí a kò fọwọ́ sí",
      "Fọ́ọ̀mù, òfin àti nọ́mbà fóònù máa ń yí padà, nítorí náà àwọn akẹ́kọ̀ọ́ ń jẹ́rìí sí wọn lórí va.gov kí wọ́n tó ṣe nǹkan",
      "Ìpinnu ìlera àti ti òfin jẹ́ ti VA tàbí aṣojú tí a fọwọ́ sí, kì í ṣe ti ẹ̀kọ́ yìí"
    ],
    prerequisites: "Kò sí."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Kí o tó béèrè fún àǹfààní VA èyíkéyìí", action: "kó àwọn ìwé tí VA ń béèrè jọ, bẹ̀rẹ̀ pẹ̀lú DD214 rẹ, kí o sì kọ àwọn àǹfààní tí o lè béèrè fún sílẹ̀", standard: "pẹ̀lú àmì sí àwọn ìwé tó sọnù, àti ẹ̀dà tí o fi pamọ́ sí ibi tí kò léwu" },
    { id: "O2", condition: "Fún àwọn àìsàn tí o rò pé ó ní í ṣe pẹ̀lú iṣẹ́ ológun rẹ", action: "yan bí o ṣe máa fi ẹ̀sùn àìlera sílẹ̀ kí o sì kọ ẹ̀rí fún àìsàn kọ̀ọ̀kan sílẹ̀", standard: "ní lílo ọ̀nà ìjọba láti fi sílẹ̀ àti dídáàbò bo ọjọ́ ìbẹ̀rẹ̀ rẹ" },
    { id: "O3", condition: "Ní lílo àkọsílẹ̀ àṣeṣe", action: "ṣètò ìsọfúnni fún ìwé ìbéèrè ìtọ́jú ìlera VA (10-10EZ) kí o sì yan bí o ṣe máa béèrè", standard: "pẹ̀lú ìtàn iṣẹ́ ológun rẹ, ohun eléwu tí o kàn, ìbánigbófò àti owó-oṣù rẹ tí a sàmì sí pé ó ti ṣetán tàbí ó ṣì kù" },
    { id: "O4", condition: "Tí a bá fún ọ ní àfojúsùn iṣẹ́ rẹ", action: "ṣàlàyé àwọn ètò GI Bill pàtàkì àti irú ẹ̀kọ́ méjì tí wọ́n lè sanwó fún", standard: "ní dídárúkọ ẹ̀kọ́ tí ó bá àfojúsùn rẹ mu" },
    { id: "O5", condition: "Tí a bá fún ọ ní ilé-ìwé méjì tàbí ètò ẹ̀kọ́ iṣẹ́ méjì", action: "fi wọ́n wé ara wọn nínú GI Bill Comparison Tool kí o sì ṣètò ìwé ìbéèrè àǹfààní ẹ̀kọ́ rẹ", standard: "pẹ̀lú òtítọ́ méjì nípa ọ̀kọ̀ọ̀kan, àti pé o ti ṣàyẹ̀wò ìwé ìbéèrè rẹ kí o tó fi ránṣẹ́" },
    { id: "O6", condition: "Nígbà tí o bá fẹ́ ìrànlọ́wọ́ pẹ̀lú ẹ̀sùn kan", action: "wá aṣojú ọ̀fẹ́ tí VA fọwọ́ sí kí o sì dá àwọn àmì ìkìlọ̀ ẹni tí kò yẹ kí o sanwó fún mọ̀", standard: "pẹ̀lú orúkọ aṣojú náà, ọ̀nà láti kàn sí i, àti àmì ìkìlọ̀ mẹ́ta tí o kọ sílẹ̀" }
  ],
  chapters: [
    {
      name: "Orí 1: Bíbéèrè fún àwọn àǹfààní VA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ìmúrasílẹ̀: àwọn ìwé rẹ àti àkọsílẹ̀ àwọn àǹfààní rẹ",
          minutes: 5,
          goal: "Kó àwọn ìwé tí VA ń béèrè jọ kí o sì kọ àwọn àǹfààní tí o lè béèrè fún sílẹ̀.",
          text: [
            "Àwọn àǹfààní VA jẹ́ ohun tí o ti ṣiṣẹ́ fún nípasẹ̀ iṣẹ́ ológun rẹ. Àwọn tí ó wọ́pọ̀ ni owó àìlera (disability compensation: owó oṣooṣù fún àwọn àìsàn tí iṣẹ́ ológun fà tàbí tí ó mú burú sí i), ìtọ́jú ìlera VA, àǹfààní ẹ̀kọ́ bí GI Bill, àti Veteran Readiness and Employment (ìmúrasílẹ̀ àti iṣẹ́ fún veterans). Àwọn míì wà, bí ìrànlọ́wọ́ fún owó-yá ilé, owó ìfẹ̀yìntì (pension) àti àǹfààní ìsìnkú. Ọ̀kọ̀ọ̀kan ní òfin tirẹ̀.",
            "Ìwé tó ṣe pàtàkì jù ni DD214 rẹ tàbí àwọn ìwé ìkúrò nínú iṣẹ́ ológun míì. VA ń lò ó láti jẹ́rìí sí iṣẹ́ ológun rẹ. Fi ẹ̀dà rẹ̀ pamọ́ sí ibi tí kò léwu. Tí o kò bá rí tìrẹ, va.gov ṣàlàyé bí o ṣe lè béèrè fún àkọsílẹ̀ iṣẹ́ ológun rẹ.",
            "Àwọn nǹkan míì tí VA lè béèrè: nọ́mbà Social Security rẹ, ìsọfúnni báńkì fún sísan owó tààrà sínú àkáǹtì (direct deposit), àkọsílẹ̀ ìlera rẹ àti orúkọ àwọn dókítà rẹ, ìsọfúnni nípa ọkọ tàbí aya rẹ àti àwọn tí ó gbára lé ọ, káàdì ìbánigbófò, àti owó tí o wọlé ní ọdún tó kọjá fún àwọn ìpinnu ìtọ́jú ìlera kan.",
            "Ṣí àkáǹtì ìwọlé lórí va.gov kí o lè béèrè lórí ayélujára, gbé ìwé sókè (upload), kí o sì ṣàyẹ̀wò ipò rẹ. Lo ojú-òpó ìjọba gidi nìkan. Má ṣe pín ìwọlé rẹ pẹ̀lú ẹnikẹ́ni, má sì tẹ nọ́mbà Social Security rẹ tàbí ìsọfúnni ìlera rẹ sínú AI chatbot láéláé."
          ],
          steps: ["Wá DD214 rẹ tàbí àwọn ìwé ìkúrò míì kí o sì ṣe ẹ̀dà wọn.", "Kó àkọsílẹ̀ ìlera jọ àti àkọsílẹ̀ àwọn dókítà rẹ.", "Kọ àwọn àǹfààní tí o fẹ́ wò sílẹ̀: àìlera, ìtọ́jú ìlera, ẹ̀kọ́, àwọn míì.", "Ṣí àkáǹtì ìwọlé lórí va.gov.", "Fi gbogbo rẹ̀ sínú fódà kan."],
          words: [["DD214", "ìwé tí ó fi iṣẹ́ ológun rẹ hàn àti bí o ṣe kúrò nínú rẹ̀."], ["Owó àìlera (disability compensation)", "owó oṣooṣù tí a kì í gba owó-orí lé lórí, fún àwọn àìsàn tí iṣẹ́ ológun fà tàbí tí ó mú burú sí i."], ["Ẹni tí ó gbára lé ọ (dependent)", "ọkọ tàbí aya, ọmọ tàbí ẹbí míì tí ó gbára lé ọ."]],
          slides: [
            { title: "Àwọn àǹfààní tí o ti ṣiṣẹ́ fún", bullets: ["Owó àìlera (disability compensation)", "Ìtọ́jú ìlera VA", "Ẹ̀kọ́: GI Bill", "Veteran Readiness and Employment, àti àwọn míì"] },
            { title: "Ìwé rẹ tó ṣe pàtàkì jù", bullets: ["DD214 tàbí àwọn ìwé ìkúrò míì", "Fi ẹ̀dà rẹ̀ pamọ́ láìléwu", "Ó sọnù? va.gov ṣàlàyé bí o ṣe lè béèrè fún àkọsílẹ̀"] },
            { title: "Àwọn nǹkan míì tí VA lè béèrè", bullets: ["Àkọsílẹ̀ ìlera àti àwọn dókítà", "Ìsọfúnni ọkọ tàbí aya àti àwọn tí ó gbára lé ọ", "Ìsọfúnni báńkì fún direct deposit"] },
            { title: "Àkáǹtì va.gov rẹ", bullets: ["Béèrè, gbé ìwé sókè kí o sì ṣàyẹ̀wò ipò rẹ lórí ayélujára", "Lo ojú-òpó ìjọba gidi nìkan", "Má ṣe pín ìwọlé rẹ láéláé"] }
          ],
          sources: [{ name: "VA: Bí o ṣe lè fi ẹ̀sùn àìlera VA sílẹ̀", url: "https://www.va.gov/disability/how-to-file-claim/" }],
          tryIt: "Ṣe fódà kan (ti ìwé, tàbí fódà tí kò léwu lórí kọ̀mpútà tìrẹ) kí o sì fi wọ̀nyí sínú rẹ̀, tàbí kọ èyí tó sọnù sílẹ̀: DD214 rẹ, àkọsílẹ̀ ìlera, àkọsílẹ̀ àwọn dókítà rẹ àti ìsọfúnni àwọn tí ó gbára lé ọ. Kọ àwọn àǹfààní tí o fẹ́ wò sílẹ̀.",
          youCanNow: "kó àwọn ìwé tí VA ń béèrè jọ kí o sì kọ àwọn àǹfààní tí o lè béèrè fún sílẹ̀.",
          quickCheck: [
            { objective: "O1", q: "Kí ló dé tí o fi máa fi ẹ̀dà DD214 rẹ pamọ́ sí ibi tí kò léwu?", options: ["Kí o lè fi í sórí ayélujára", "Kí AI lè kà á", "VA ń lò ó láti jẹ́rìí sí iṣẹ́ ológun rẹ, o sì máa nílò rẹ̀ lẹ́ẹ̀kan sí i", "Ó máa ń parí lẹ́yìn ọdún kan"], answer: 2, why: "DD214 rẹ ń jẹ́rìí sí iṣẹ́ ológun rẹ fún ọ̀pọ̀ àǹfààní, nítorí náà fi ẹ̀dà rẹ̀ pamọ́ láìléwu." },
            { objective: "O1", q: "O fẹ́ kí AI chatbot ràn ọ́ lọ́wọ́ láti mọ̀ nípa àwọn àǹfààní rẹ. Kí ni o máa yọ kúrò?", options: ["Nọ́mbà Social Security rẹ àti ìsọfúnni ìlera rẹ", "Orúkọ àǹfààní náà", "Ọ̀rọ̀ náà \"veteran\"", "Ìbéèrè rẹ"], answer: 0, why: "Nọ́mbà àdáni àti ìsọfúnni ìlera kì í wọ inú AI chatbot láéláé." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Fífi ẹ̀sùn owó àìlera sílẹ̀",
          minutes: 6,
          goal: "Yan bí o ṣe máa fi ẹ̀sùn àìlera sílẹ̀ kí o sì dáàbò bo ọjọ́ ìbẹ̀rẹ̀ rẹ.",
          text: [
            "O lè fi ẹ̀sùn àìlera (disability claim) sílẹ̀ lórí ayélujára ní va.gov, nípasẹ̀ ìfìwéránṣẹ́ pẹ̀lú VA Form 21-526EZ, ní ojú ara ní ọ́fíìsì agbègbè VA (regional office), tàbí pẹ̀lú ìrànlọ́wọ́ aṣojú tí VA fọwọ́ sí. VA sọ pé bíbẹ̀rẹ̀ fọ́ọ̀mù orí ayélujára máa ń fi ọjọ́ ìbẹ̀rẹ̀ (effective date) rẹ lélẹ̀ fúnra rẹ̀.",
            "Ọjọ́ ìbẹ̀rẹ̀ rẹ ṣe pàtàkì nítorí pé ó lè pinnu ọjọ́ tí wọ́n máa bẹ̀rẹ̀ sí ka owó rẹ láti. Tí o bá bẹ̀rẹ̀ lórí ayélujára, VA máa lo ọjọ́ tí o bẹ̀rẹ̀ bí ọjọ́ ẹ̀sùn rẹ, bí o bá ti parí rẹ̀ láàárín ọjọ́ 365. Tí o bá fi sílẹ̀ lórí ìwé, o lè kọ́kọ́ fi intent to file (ìfitónilétí pé o máa fi ẹ̀sùn sílẹ̀) ránṣẹ́ láti di ọjọ́ ìbẹ̀rẹ̀ tí ó ṣeé ṣe mú nígbà tí o ń kó ẹ̀rí jọ.",
            "Ẹ̀rí ló ń pinnu bóyá ẹ̀sùn máa yọrí sí rere. VA ń ṣàyẹ̀wò DD214 rẹ tàbí àwọn ìwé ìkúrò àti àkọsílẹ̀ ìtọ́jú rẹ nígbà iṣẹ́ ológun (service treatment records). Fi ohun tí o ní kún un: àkọsílẹ̀ dókítà àdáni, àti ọ̀rọ̀ láti ẹnu rẹ tàbí àwọn tí ó rí bí àìsàn náà ṣe ń kàn ọ́. Kọ gbogbo àìsàn tí o gbà pé ó ní í ṣe pẹ̀lú iṣẹ́ ológun rẹ sílẹ̀.",
            "Lẹ́yìn tí o bá fi sílẹ̀, VA lè ṣètò àyẹ̀wò ìlera fún ọ. Lọ síbẹ̀. Ṣàyẹ̀wò ipò ẹ̀sùn rẹ lórí va.gov. VA ń tẹ àkókò àpapọ̀ tí ó ń gbà láti ṣe iṣẹ́ lórí ẹ̀sùn jáde, èyí sì ń yí padà, nítorí náà wo va.gov fún nọ́mbà tuntun. Tí o kò bá fara mọ́ ìpinnu kan, àwọn ọ̀nà wà láti béèrè fún àtúnyẹ̀wò; aṣojú tí a fọwọ́ sí lè ràn ọ́ lọ́wọ́."
          ],
          steps: ["Pinnu bí o ṣe máa fi sílẹ̀: lórí ayélujára, nípasẹ̀ ìfìwéránṣẹ́ (VA Form 21-526EZ), ní ojú ara, tàbí pẹ̀lú aṣojú tí a fọwọ́ sí.", "Tí o bá ń fi sílẹ̀ lórí ayélujára, bẹ̀rẹ̀ fọ́ọ̀mù náà láti fi ọjọ́ rẹ lélẹ̀, kí o sì parí rẹ̀ láàárín ọjọ́ 365.", "Tí o bá ń fi sílẹ̀ lórí ìwé, ronú nípa kíkọ́kọ́ fi intent to file ránṣẹ́.", "Kọ gbogbo àìsàn sílẹ̀ kí o sì kó ẹ̀rí rẹ jọ.", "Lọ sí àyẹ̀wò VA èyíkéyìí kí o sì ṣàyẹ̀wò ipò rẹ lórí va.gov."],
          words: [["Ọjọ́ ìbẹ̀rẹ̀ (effective date)", "ọjọ́ tí VA ń lò láti pinnu ọjọ́ tí wọ́n máa bẹ̀rẹ̀ sí ka owó àǹfààní rẹ láti."], ["Intent to file", "ìfitónilétí sí VA pé o máa fi ẹ̀sùn sílẹ̀, èyí tí ó lè di ọjọ́ ìbẹ̀rẹ̀ rẹ mú nígbà tí o ń kó ẹ̀rí jọ."], ["Ẹ̀rí", "àkọsílẹ̀ àti ọ̀rọ̀ tí ó ń ti ẹ̀sùn rẹ lẹ́yìn."], ["Service connection", "ìsopọ̀ láàárín àìsàn kan àti iṣẹ́ ológun rẹ."]],
          slides: [
            { title: "Ọ̀nà mẹ́rin láti fi sílẹ̀", bullets: ["Lórí ayélujára ní va.gov", "Nípasẹ̀ ìfìwéránṣẹ́: VA Form 21-526EZ", "Ní ojú ara ní ọ́fíìsì agbègbè VA", "Pẹ̀lú aṣojú tí a fọwọ́ sí"] },
            { title: "Dáàbò bo ọjọ́ ìbẹ̀rẹ̀ rẹ", bullets: ["Ayélujára: ọjọ́ tí o bẹ̀rẹ̀ ló ka bí o bá parí láàárín ọjọ́ 365", "Ìwé: ronú nípa kíkọ́kọ́ fi intent to file ránṣẹ́"] },
            { title: "Ẹ̀rí ló ń jẹ́ kí ẹ̀sùn yọrí", bullets: ["DD214 àti service treatment records", "Àkọsílẹ̀ dókítà àdáni", "Ọ̀rọ̀ láti ẹnu rẹ àti àwọn ẹlẹ́rìí"] },
            { title: "Lẹ́yìn tí o bá fi sílẹ̀", bullets: ["Lọ sí àyẹ̀wò VA rẹ", "Ṣàyẹ̀wò ipò rẹ lórí va.gov", "O kò fara mọ́ ọ? Béèrè lọ́wọ́ aṣojú tí a fọwọ́ sí nípa àtúnyẹ̀wò"] }
          ],
          sources: [{ name: "VA: Bí o ṣe lè fi ẹ̀sùn àìlera VA sílẹ̀", url: "https://www.va.gov/disability/how-to-file-claim/" }],
          tryIt: "Kọ gbogbo àìsàn tí o rò pé ó lè ní í ṣe pẹ̀lú iṣẹ́ ológun rẹ sílẹ̀. Lẹ́gbẹ̀ẹ́ ọ̀kọ̀ọ̀kan, kọ ẹ̀rí kan tí o ní tàbí tí o lè rí. Lẹ́yìn náà pinnu ọ̀nà tí o máa gbà fi sílẹ̀ kí o sì kọ ọ́ sí òkè.",
          youCanNow: "yan bí o ṣe máa fi ẹ̀sùn àìlera sílẹ̀, dáàbò bo ọjọ́ ìbẹ̀rẹ̀ rẹ, kí o sì kó ẹ̀rí jọ fún àìsàn kọ̀ọ̀kan.",
          quickCheck: [
            { objective: "O2", q: "Èwo ni ọ̀nà ìjọba láti fi ẹ̀sùn àìlera sílẹ̀?", options: ["Fífi text ránṣẹ́ sí àjèjì tí ó sọ pé òun máa ràn ọ́ lọ́wọ́", "Fífi í sínú ẹgbẹ́ kan lórí social media", "Fífi email ránṣẹ́ sí ilé-iṣẹ́ tí ń gba ìpín nínú owó rẹ", "Lórí ayélujára ní va.gov"], answer: 3, why: "Fífi sílẹ̀ lórí ayélujára ní va.gov jẹ́ ọ̀kan lára àwọn ọ̀nà ìjọba VA láti fi sílẹ̀." },
            { objective: "O2", q: "O kọ àìsàn orúnkún kan láti iṣẹ́ ológun sílẹ̀. Kí ni o máa kọ lẹ́gbẹ̀ẹ́ rẹ̀?", options: ["Kò sí nǹkan; VA máa rí gbogbo rẹ̀", "Ẹ̀rí kan, bí service treatment records tàbí àkọsílẹ̀ dókítà", "Àméfò ìpele (rating) rẹ", "Ọ̀rọ̀ aṣínà va.gov rẹ"], answer: 1, why: "Àìsàn kọ̀ọ̀kan nílò ẹ̀rí, bí service treatment records tàbí àkọsílẹ̀ dókítà." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Bíbéèrè fún ìtọ́jú ìlera VA",
          minutes: 4,
          goal: "Béèrè fún ìtọ́jú ìlera VA pẹ̀lú ìsọfúnni tó tọ́ ní ṣíṣetán.",
          text: [
            "Ìwé ìbéèrè ìtọ́jú ìlera VA yàtọ̀ sí ti owó àìlera. O máa béèrè pẹ̀lú VA Form 10-10EZ, Application for Health Benefits (ìwé ìbéèrè fún àǹfààní ìlera).",
            "O lè béèrè lórí ayélujára ní va.gov, lórí fóònù nípasẹ̀ hotline àǹfààní ìlera VA ní 877-222-8387 (VA sọ pé ó ṣí láti Monday sí Friday, 8:00 a.m. sí 8:00 p.m. Eastern time), nípasẹ̀ ìfìwéránṣẹ́, tàbí ní ojú ara ní ilé-ìwòsàn tàbí clinic VA. Aṣojú tí a fọwọ́ sí náà lè ràn ọ́ lọ́wọ́.",
            "Ní wọ̀nyí ní ṣíṣetán: DD214 rẹ àti ìtàn iṣẹ́ ológun rẹ, pẹ̀lú ohun olóró tàbí eléwu èyíkéyìí tí o kàn; nọ́mbà Social Security tìrẹ, ti ọkọ tàbí aya rẹ àti ti àwọn tí ó gbára lé ọ tí ó yẹ; àwọn káàdì ìbánigbófò rẹ, pẹ̀lú Medicare tàbí ètò ìbánigbófò ibi iṣẹ́; àti owó tí ìdílé rẹ wọlé ní ọdún tó kọjá. VA sọ pé o lè fi owó-wíwọlé sílẹ̀, ṣùgbọ́n ó lè nílò rẹ̀ láti pinnu ìwé ìbéèrè rẹ.",
            "Àpẹẹrẹ: ọmọ ogun Marine kan tí ó ṣiṣẹ́ ní òkè-òkun ní ikọ́-fée (asthma), ó sì fẹ́ dókítà ìtọ́jú àkọ́kọ́. Ó béèrè fún ìtọ́jú ìlera lórí ayélujára ní ọ̀sẹ̀ kan náà tí ó fi ẹ̀sùn àìlera rẹ̀ sílẹ̀, ó kọ ìtàn ohun eléwu tí ó kàn sílẹ̀, ó sì ṣètò ìpàdé àkọ́kọ́ rẹ̀ nígbà tí wọ́n forúkọ rẹ̀ sílẹ̀."
          ],
          steps: ["Kó DD214 rẹ jọ, ìtàn ohun eléwu tí o kàn, nọ́mbà Social Security àti àwọn káàdì ìbánigbófò.", "Kọ owó tí ìdílé rẹ wọlé ní ọdún tó kọjá sílẹ̀.", "Béèrè lórí ayélujára ní va.gov, lórí fóònù ní 877-222-8387, nípasẹ̀ ìfìwéránṣẹ́, tàbí ní ojú ara.", "Dúró de ìpinnu VA kí o sì ṣètò ìpàdé àkọ́kọ́ rẹ."],
          words: [["VA Form 10-10EZ", "ìwé ìbéèrè fún àǹfààní ìlera VA."], ["Toxic exposure", "kíkan ohun eléwu nígbà iṣẹ́ ológun, bí ihò iná ìdọ̀tí (burn pits), kẹ́míkà tàbí ìtànṣán (radiation)."]],
          slides: [
            { title: "Ìwé ìbéèrè ọ̀tọ̀", bullets: ["Ìtọ́jú ìlera kò jẹ́ ọ̀kan náà pẹ̀lú ẹ̀sùn àìlera", "Fọ́ọ̀mù: VA Form 10-10EZ"] },
            { title: "Àwọn ọ̀nà láti béèrè", bullets: ["Lórí ayélujára ní va.gov", "Fóònù: 877-222-8387", "Ìfìwéránṣẹ́, tàbí ní ojú ara ní ilé-ìwòsàn VA"] },
            { title: "Ní wọ̀nyí ní ṣíṣetán", bullets: ["DD214 àti ìtàn ohun eléwu tí o kàn", "Nọ́mbà Social Security àti káàdì ìbánigbófò", "Owó tí ìdílé rẹ wọlé ní ọdún tó kọjá"] }
          ],
          sources: [{ name: "VA: Bí o ṣe lè béèrè fún ìtọ́jú ìlera VA", url: "https://www.va.gov/health-care/how-to-apply/" }],
          tryIt: "Kún àkọsílẹ̀ àṣeṣe fún 10-10EZ: DD214 (o ní i tàbí o kò ní), ìtàn ohun eléwu tí o kàn, káàdì ìbánigbófò, owó tí ìdílé rẹ wọlé ní ọdún tó kọjá. Sàmì sí ohun tí o ní àti ohun tí o ṣì nílò, kí o sì yan bí o ṣe máa béèrè.",
          youCanNow: "béèrè fún ìtọ́jú ìlera VA pẹ̀lú ìsọfúnni tó tọ́, kí o sì mọ àwọn ọ̀nà láti béèrè.",
          quickCheck: [
            { objective: "O3", q: "Kí ni VA Form 10-10EZ wà fún?", options: ["Fífi ẹ̀sùn àìlera sílẹ̀", "Bíbéèrè fún ìtọ́jú ìlera VA", "Bíbéèrè fún GI Bill", "Yíyan VSO"], answer: 1, why: "10-10EZ ni ìwé ìbéèrè fún ìtọ́jú ìlera VA." },
            { objective: "O3", q: "O ń kún àkọsílẹ̀ ìtọ́jú ìlera rẹ. Kí ni o máa kọ nípa iṣẹ́ ológun rẹ?", options: ["Kò sí nǹkan nípa iṣẹ́ ológun rẹ", "Ipò (rank) rẹ nìkan", "Ibùdó ológun tí o fẹ́ràn jù nìkan", "Ìtàn iṣẹ́ ológun rẹ, pẹ̀lú ohun olóró tàbí eléwu èyíkéyìí tí o kàn"], answer: 3, why: "VA ń béèrè nípa ìtàn iṣẹ́ ológun rẹ àti ohun eléwu tí o kàn nígbà tí o bá béèrè fún ìtọ́jú ìlera." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Bíbéèrè fún àwọn àǹfààní VA",
        questions: [
          { objective: "O1", q: "Ìwé wo ni VA ń lò láti jẹ́rìí sí iṣẹ́ ológun rẹ?", options: ["Ìwé ìwakọ̀ rẹ", "Ìwé owó-oṣù láti iṣẹ́ aráàlú", "DD214 rẹ tàbí àwọn ìwé ìkúrò míì", "Káàdì ọmọ ẹgbẹ́ gym"], answer: 2, why: "VA ń ṣàyẹ̀wò DD214 rẹ tàbí àwọn ìwé ìkúrò." },
          { objective: "O2", q: "O bẹ̀rẹ̀ ẹ̀sùn àìlera lórí ayélujára ṣùgbọ́n o nílò àkókò láti rí àkọsílẹ̀. Àkókò mélòó ni o ní láti parí rẹ̀ kí o sì di ọjọ́ ìbẹ̀rẹ̀ rẹ mú?", options: ["Ọjọ́ 365", "Ọjọ́ 7", "Ọjọ́ 30", "Kò sí ọjọ́ ìbẹ̀rẹ̀"], answer: 0, why: "VA sọ pé ọjọ́ tí o bẹ̀rẹ̀ ló ka bí o bá parí láàárín ọjọ́ 365." },
          { objective: "O2", q: "Kí ni VA Form 21-526EZ wà fún?", options: ["Bíbéèrè fún GI Bill", "Bíbéèrè fún ìtọ́jú ìlera VA", "Yíyí àdírẹ́sì rẹ padà", "Bíbéèrè fún owó àìlera nípasẹ̀ ìfìwéránṣẹ́"], answer: 3, why: "Ó jẹ́ Application for Disability Compensation (ìwé ìbéèrè fún owó àìlera)." },
          { objective: "O3", q: "Fọ́ọ̀mù wo ni a fi ń béèrè fún ìtọ́jú ìlera VA?", options: ["DD214", "VA Form 10-10EZ", "VA Form 22-1990", "W-2"], answer: 1, why: "10-10EZ ni Application for Health Benefits." },
          { objective: "O2", q: "O fi ẹ̀sùn àìlera sílẹ̀. Kí ni o tún yẹ kí o ṣe?", options: ["Lọ sí àyẹ̀wò VA èyíkéyìí tí wọ́n ṣètò fún ọ", "Má ka àwọn lẹ́tà VA", "Sanwó fún ẹnìkan láti mú un yára", "Fi ẹ̀sùn kan náà sílẹ̀ ní ọ̀pọ̀ ìgbà"], answer: 0, why: "Àyẹ̀wò náà jẹ́ apá kan ìpinnu; pípa á tì lè ba ẹ̀sùn rẹ jẹ́." }
        ]
      }
    },
    {
      name: "Orí 2: GI Bill àti ìrànlọ́wọ́ ọ̀fẹ́",
      lessons: [
        {
          objectives: ["O4"],
          title: "Mímọ̀ nípa GI Bill",
          minutes: 5,
          goal: "Dárúkọ àwọn ètò GI Bill pàtàkì kí o sì kọ ohun tí wọ́n lè sanwó fún sílẹ̀.",
          text: [
            "GI Bill ń ràn ọ́ lọ́wọ́ láti sanwó fún ilé-ìwé àti ẹ̀kọ́ iṣẹ́. Ètò pàtàkì lónìí ni Post-9/11 GI Bill (Chapter 33), fún àwọn tí wọ́n ṣiṣẹ́ ológun lójú iṣẹ́ (active duty) lẹ́yìn September 10, 2001. Ó lè ràn ọ́ lọ́wọ́ láti sanwó ilé-ìwé kí ó sì bójú tó àwọn ìnáwó nígbà tí o ń kọ́ iṣẹ́.",
            "Àwọn ètò míì ni Montgomery GI Bill Active Duty (Chapter 30) àti Montgomery GI Bill Selected Reserve (Chapter 1606) fún àwọn ọmọ Reserve àti National Guard. Èyí tí o lè lò dá lórí iṣẹ́ ológun rẹ.",
            "GI Bill kì í ṣe fún yunifásítì ọdún mẹ́rin nìkan. VA kọ àwọn ìlò bí oyè àkọ́kọ́ àti oyè gíga, ètò oyè tí kì í ṣe ti yunifásítì, ẹ̀kọ́ lẹ́nu iṣẹ́ àti iṣẹ́ ọmọ-ẹ̀kọ́ṣẹ́ (apprenticeship), ìdánwò ìwé-àṣẹ àti ìwé-ẹ̀rí, ẹ̀kọ́ wíwa ọkọ̀ òfuurufú, ẹ̀kọ́ orí ayélujára àti àwọn míì. Yellow Ribbon Program lè ràn ọ́ lọ́wọ́ pẹ̀lú owó ilé-ìwé tí Post-9/11 GI Bill kò san, ní àwọn ilé-ìwé tí ó kópa.",
            "Àwọn ọmọ ogun kan lè gbé àǹfààní Post-9/11 tí wọn kò lò fún ọkọ tàbí aya wọn tàbí àwọn ọmọ wọn. Tí o bá ti ní àǹfààní Post-9/11, wo iye tí ó kù fún ọ lórí GI Bill Statement of Benefits rẹ ní va.gov."
          ],
          words: [["GI Bill", "àǹfààní ẹ̀kọ́ VA tí ń ràn ọ́ lọ́wọ́ láti sanwó fún ilé-ìwé tàbí ẹ̀kọ́ iṣẹ́."], ["Post-9/11 GI Bill", "GI Bill fún àwọn tí wọ́n ṣiṣẹ́ ológun lójú iṣẹ́ lẹ́yìn September 10, 2001 (Chapter 33)."], ["Yellow Ribbon Program", "ètò tí ó lè san owó ilé-ìwé tí Post-9/11 GI Bill kò san, ní àwọn ilé-ìwé tí ó kópa."], ["Apprenticeship", "ẹ̀kọ́ lẹ́nu iṣẹ́ tí a ń sanwó fún, fún iṣẹ́ ọwọ́ tí ó nílò ọgbọ́n."]],
          slides: [
            { title: "Àwọn ètò GI Bill pàtàkì", bullets: ["Post-9/11 GI Bill (Chapter 33)", "Montgomery GI Bill Active Duty (Chapter 30)", "Montgomery GI Bill Selected Reserve (Chapter 1606)"] },
            { title: "Kì í ṣe yunifásítì nìkan", bullets: ["Oyè àti àwọn ètò tí kì í ṣe ti yunifásítì", "Apprenticeship àti ẹ̀kọ́ lẹ́nu iṣẹ́", "Ìdánwò ìwé-àṣẹ àti ìwé-ẹ̀rí"] },
            { title: "Ìrànlọ́wọ́ àfikún", bullets: ["Yellow Ribbon: owó ilé-ìwé tí GI Bill kò san", "Gbígbé e fún ọkọ, aya tàbí ọmọ, fún àwọn kan"] },
            { title: "Wo iye tí ó kù fún ọ", bullets: ["GI Bill Statement of Benefits lórí va.gov"] }
          ],
          sources: [{ name: "VA: Nípa àwọn àǹfààní GI Bill", url: "https://www.va.gov/education/about-gi-bill-benefits/" }],
          tryIt: "Kọ iṣẹ́ tí o fẹ́ ṣe sílẹ̀. Lẹ́yìn náà kọ irú ẹ̀kọ́ méjì tí GI Bill lè sanwó fún tí ó lè mú ọ dé ibẹ̀, fún àpẹẹrẹ apprenticeship oníṣẹ́ iná (electrician) àti ètò ìwé-ẹ̀rí, tàbí oyè kan àti ìdánwò ìwé-àṣẹ.",
          youCanNow: "dárúkọ àwọn ètò GI Bill pàtàkì kí o sì so ẹ̀kọ́ tí GI Bill lè sanwó fún pọ̀ mọ́ àfojúsùn iṣẹ́ kan.",
          quickCheck: [
            { objective: "O4", q: "Kí ni orúkọ míì fún Post-9/11 GI Bill?", options: ["Chapter 33", "Form 10-10EZ", "VetCert", "Chapter 1"], answer: 0, why: "Post-9/11 GI Bill ni Chapter 33." },
            { objective: "O4", q: "O fẹ́ di oníṣẹ́ iná (electrician) láìsí oyè yunifásítì ọdún mẹ́rin. Kí ni o máa kọ sínú ètò rẹ?", options: ["GI Bill ń sanwó fún oyè nìkan", "Jáwọ́ nínú GI Bill", "Apprenticeship tàbí ẹ̀kọ́ lẹ́nu iṣẹ́ tí GI Bill lè ràn lọ́wọ́", "San gbogbo rẹ̀ fúnra rẹ"], answer: 2, why: "GI Bill lè ràn lọ́wọ́ pẹ̀lú apprenticeship àti ẹ̀kọ́ lẹ́nu iṣẹ́, kì í ṣe oyè nìkan." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Bíbéèrè fún GI Bill àti yíyan ilé-ìwé",
          minutes: 5,
          goal: "Béèrè fún àǹfààní ẹ̀kọ́ kí o sì fi àwọn ilé-ìwé wé ara wọn kí o tó forúkọ sílẹ̀.",
          text: [
            "Béèrè fún àǹfààní ẹ̀kọ́ lórí ayélujára ní va.gov. Tí o bá béèrè nípasẹ̀ ìfìwéránṣẹ́, lo VA Form 22-1990, Application for VA Education Benefits (ìwé ìbéèrè fún àǹfààní ẹ̀kọ́ VA), fún Post-9/11 GI Bill àti àwọn ètò Montgomery GI Bill. Àwọn ẹbí tí ń lo àǹfààní tí a gbé fún wọn ń lo fọ́ọ̀mù míì, VA Form 22-1990e.",
            "Ní wọ̀nyí ní ṣíṣetán: nọ́mbà Social Security rẹ, ìsọfúnni báńkì fún direct deposit, ìtàn ẹ̀kọ́ àti iṣẹ́ ológun rẹ, àti ìsọfúnni ìpìlẹ̀ nípa ilé-ìwé tàbí ètò ẹ̀kọ́ iṣẹ́ náà. VA sọ pé o kò lè yí ìwé ìbéèrè padà lẹ́yìn tí o bá fi ránṣẹ́, nítorí náà kọ́kọ́ ṣàyẹ̀wò rẹ̀.",
            "VA sọ pé ó máa ń gba nǹkan bí ọjọ́ 30 ní àpapọ̀ láti ṣe iṣẹ́ lórí ìbéèrè ẹ̀kọ́, ṣùgbọ́n wo va.gov fún àkókò lọ́wọ́lọ́wọ́. Nígbà tí wọ́n bá fọwọ́ sí i, VA máa fi Certificate of Eligibility (ìwé-ẹ̀rí ẹ̀tọ́) ránṣẹ́. Fún school certifying official ilé-ìwé rẹ ní ẹ̀dà rẹ̀; a sábà máa ń rí i ní ọ́fíìsì veterans tàbí ọ́fíìsì iṣẹ́ ológun.",
            "Kí o tó forúkọ sílẹ̀, fi àwọn ilé-ìwé wé ara wọn pẹ̀lú GI Bill Comparison Tool ti VA lórí va.gov, kí o sì béèrè lọ́wọ́ ilé-ìwé nípa owó, bí àwọn akẹ́kọ̀ọ́ wọn ṣe ń rí iṣẹ́, àti bóyá wọ́n kópa nínú Yellow Ribbon. Ṣọ́ra fún àwọn ilé-ìwé tí ń kán ọ lójú láti forúkọ sílẹ̀ kíákíá."
          ],
          steps: ["Yan ètò rẹ àti ilé-ìwé tàbí ẹ̀kọ́ iṣẹ́.", "Fi í wé àwọn míì pẹ̀lú GI Bill Comparison Tool lórí va.gov.", "Kó nọ́mbà Social Security rẹ, ìsọfúnni báńkì, ìtàn ẹ̀kọ́ àti iṣẹ́ ológun jọ.", "Béèrè lórí ayélujára, tàbí nípasẹ̀ ìfìwéránṣẹ́ pẹ̀lú VA Form 22-1990.", "Fún school certifying official ilé-ìwé ní Certificate of Eligibility rẹ."],
          words: [["Certificate of Eligibility (COE)", "lẹ́tà VA tí ó fi hàn àǹfààní ẹ̀kọ́ tí o ní àti iye rẹ̀."], ["School certifying official", "ẹni tí ó wà ní ilé-ìwé tí ń sọ fún VA pé o ti forúkọ sílẹ̀."], ["VA Form 22-1990", "Application for VA Education Benefits (ìwé ìbéèrè fún àǹfààní ẹ̀kọ́ VA)."]],
          slides: [
            { title: "Bí o ṣe lè béèrè", bullets: ["Lórí ayélujára ní va.gov", "Nípasẹ̀ ìfìwéránṣẹ́: VA Form 22-1990", "Ẹbí tí ń lo àǹfààní tí a gbé fún wọn: 22-1990e"] },
            { title: "Ní wọ̀nyí ní ṣíṣetán", bullets: ["Nọ́mbà Social Security àti ìsọfúnni báńkì", "Ìtàn ẹ̀kọ́ àti iṣẹ́ ológun", "Ìsọfúnni ilé-ìwé tàbí ètò ẹ̀kọ́"] },
            { title: "Lẹ́yìn tí o bá béèrè", bullets: ["Nǹkan bí ọjọ́ 30 ní àpapọ̀; wo va.gov", "O máa gba Certificate of Eligibility", "Fún school certifying official ilé-ìwé ní i"] },
            { title: "Fi wọ́n wéra kí o tó forúkọ sílẹ̀", bullets: ["GI Bill Comparison Tool lórí va.gov", "Béèrè nípa owó, rírí iṣẹ́ lẹ́yìn ẹ̀kọ́, Yellow Ribbon", "Kúrò níbẹ̀ tí wọ́n bá ń kán ọ lójú láti forúkọ sílẹ̀"] }
          ],
          sources: [
            { name: "VA: Bí o ṣe lè béèrè fún GI Bill àti àwọn àǹfààní tó jẹ mọ́ ọn", url: "https://www.va.gov/education/how-to-apply/" },
            { name: "VA: GI Bill Comparison Tool", url: "https://www.va.gov/education/gi-bill-comparison-tool/" }
          ],
          tryIt: "Mú ilé-ìwé méjì tàbí ètò ẹ̀kọ́ iṣẹ́ méjì fún àfojúsùn iṣẹ́ rẹ. Wá ọ̀kọ̀ọ̀kan nínú GI Bill Comparison Tool lórí va.gov, kí o sì kọ òtítọ́ méjì nípa ọ̀kọ̀ọ̀kan sílẹ̀ àti ìbéèrè kan tí o máa béèrè lọ́wọ́ ọ́fíìsì veterans rẹ̀.",
          youCanNow: "béèrè fún àǹfààní GI Bill, fi àwọn ilé-ìwé wéra kí o tó forúkọ sílẹ̀, kí o sì lo Certificate of Eligibility rẹ.",
          quickCheck: [
            { objective: "O5", q: "Kí ni GI Bill Comparison Tool ń ràn ọ́ lọ́wọ́ láti ṣe?", options: ["Fi ẹ̀sùn àìlera sílẹ̀", "Wá VSO", "Fi àwọn ilé-ìwé àti ètò ẹ̀kọ́ iṣẹ́ wéra kí o tó forúkọ sílẹ̀", "Yí GI Bill rẹ padà lẹ́yìn tí o bá fi ránṣẹ́"], answer: 2, why: "Comparison Tool ń fi òtítọ́ nípa àwọn ilé-ìwé àti ètò hàn kí o lè fi wọ́n wéra." },
            { objective: "O5", q: "O ti parí ìwé ìbéèrè GI Bill rẹ. Kí ni o máa ṣe kí o tó fi ránṣẹ́?", options: ["Ṣàyẹ̀wò rẹ̀ dáadáa, nítorí o kò lè yí i padà lẹ́yìn tí o bá fi ránṣẹ́", "Fi ránṣẹ́ kíákíá kí o sì tún un ṣe lẹ́yìn", "Ní kí àjèjì kan fi ránṣẹ́", "Fi àwọn àyè sílẹ̀ ní òfìfo"], answer: 0, why: "O kò lè yí ìwé ìbéèrè padà lẹ́yìn tí o bá fi ránṣẹ́, nítorí náà kọ́kọ́ ṣàyẹ̀wò rẹ̀." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rírí ìrànlọ́wọ́ ọ̀fẹ́, àti yíyẹra fún àwọn tí ń gba owó láti fi ẹ̀sùn sílẹ̀",
          minutes: 5,
          goal: "Wá aṣojú ọ̀fẹ́ tí VA fọwọ́ sí kí o sì dá àwọn tí kò yẹ kí o sanwó fún mọ̀.",
          text: [
            "O kò ní láti fi ẹ̀sùn sílẹ̀ ní ìwọ nìkan. VA ń fọwọ́ sí oríṣi aṣojú mẹ́ta: aṣojú Veterans Service Organization (VSO), agbẹjọ́rò (attorneys) àti claims agents. VA sọ pé iṣẹ́ aṣojú VSO tí a fọwọ́ sí lórí ẹ̀sùn rẹ jẹ́ ọ̀fẹ́ nígbà gbogbo. Wọ́n lè ràn ọ́ lọ́wọ́ láti kó ẹ̀rí jọ, fi ẹ̀sùn sílẹ̀, béèrè fún àtúnyẹ̀wò ìpinnu, kí wọ́n sì bá VA sọ̀rọ̀ fún ọ. Ọ̀pọ̀ ìpínlẹ̀ àti county náà ní veterans service officers.",
            "Wá ọ̀kan pẹ̀lú irinṣẹ́ VA, \"Find a VA-accredited representative or VSO\", lórí va.gov. VA sọ pé kí o rí i dájú pé ẹnikẹ́ni tí ń ràn ọ́ lọ́wọ́ pẹ̀lú ẹ̀sùn rẹ ti gba ìfọwọ́sí kí o tó yàn wọ́n.",
            "Agbẹjọ́rò àti claims agents lè gba owó, ṣùgbọ́n VA sọ pé lẹ́yìn tí VA bá ti pinnu ẹ̀sùn àkọ́kọ́ rẹ nìkan, àti pẹ̀lú àdéhùn owó tí a fọwọ́ sí nìkan. Èyí túmọ̀ sí pé ẹnikẹ́ni tí ó gba owó lọ́wọ́ rẹ láti fi ẹ̀sùn àkọ́kọ́ rẹ sílẹ̀, tàbí tí ó ṣèlérí ìpele (rating) gíga sí i fún owó, jẹ́ àmì ìkìlọ̀. Àwọn kan tí a kò fọwọ́ sí, tí a máa ń pè ní \"claim sharks\" nígbà míì, ń béèrè ìpín nínú owó ẹ̀yìn (back pay) rẹ ọjọ́ iwájú, ìsọfúnni ìwọlé rẹ, tàbí owó ṣáájú.",
            "Má fún ẹnikẹ́ni ní ìwọlé va.gov rẹ láéláé. Tí o bá gbà pé aṣojú kan ṣe ohun tí kò tọ́ tàbí gba owó tí kò tọ́, o lè kàn sí Office of General Counsel ti VA, o sì gbọ́dọ̀ yára ṣe nǹkan lórí ìjiyàn owó."
          ],
          steps: ["Ṣí irinṣẹ́ VA \"Find a VA-accredited representative or VSO\" lórí va.gov.", "Wá nítòsí rẹ kí o sì yan aṣojú VSO kan (ọ̀fẹ́).", "Jẹ́rìí sí i pé wọ́n ti gba ìfọwọ́sí kí o tó pín nǹkan kan.", "Má sanwó láti fi ẹ̀sùn àkọ́kọ́ sílẹ̀ láéláé, má sì pín ìwọlé va.gov rẹ láéláé.", "Ròyìn ìṣòro sí Office of General Counsel ti VA."],
          words: [["VSO", "Veterans Service Organization: ẹgbẹ́ tí àwọn aṣojú rẹ̀ tí a fọwọ́ sí ń ran veterans lọ́wọ́ pẹ̀lú ẹ̀sùn lọ́fẹ̀ẹ́."], ["Tí a fọwọ́ sí (accredited)", "tí VA ti fọwọ́ sí láti ṣèrànwọ́ pẹ̀lú ẹ̀sùn VA."], ["Claim shark", "ẹni tàbí ilé-iṣẹ́ tí a kò fọwọ́ sí tí ń gba owó lọ́wọ́ veterans láti fi ẹ̀sùn sílẹ̀."]],
          slides: [
            { title: "Ìrànlọ́wọ́ ọ̀fẹ́ wà", bullets: ["Aṣojú VSO tí a fọwọ́ sí jẹ́ ọ̀fẹ́ nígbà gbogbo", "Wọ́n ń kó ẹ̀rí jọ, fi ẹ̀sùn sílẹ̀, wọ́n sì ń bá VA sọ̀rọ̀"] },
            { title: "Wá ọ̀kan", bullets: ["Irinṣẹ́ VA: Find a VA-accredited representative", "Ṣàyẹ̀wò ìfọwọ́sí kí o tó yàn"] },
            { title: "Àwọn àmì ìkìlọ̀", bullets: ["Ó ń gba owó láti fi ẹ̀sùn àkọ́kọ́ rẹ sílẹ̀", "Ó ń ṣèlérí ìpele gíga sí i fún owó", "Ó fẹ́ ìwọlé va.gov rẹ tàbí ìpín nínú owó ẹ̀yìn"] },
            { title: "Dáàbò bo ara rẹ", bullets: ["Má pín ìwọlé va.gov rẹ láéláé", "Ròyìn ìṣòro sí Office of General Counsel ti VA"] }
          ],
          sources: [
            { name: "VA: Ìbéèrè tí wọ́n sábà máa ń béèrè nípa aṣojú tí a fọwọ́ sí", url: "https://www.va.gov/resources/va-accredited-representative-faqs/" },
            { name: "VA: Find a VA-accredited representative or VSO", url: "https://www.va.gov/get-help-from-accredited-representative/find-rep/" }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: lo irinṣẹ́ VA \"Find a VA-accredited representative or VSO\" láti wá aṣojú ọ̀fẹ́ kan nítòsí rẹ kí o sì kọ orúkọ wọn àti bí o ṣe lè kàn sí wọn sílẹ̀. Lẹ́yìn náà parí ètò ìgbésẹ̀ àwọn àǹfààní VA rẹ pẹ̀lú àkọsílẹ̀ ìwé rẹ, àwọn àǹfààní tí o máa béèrè fún àti bí, ètò GI Bill rẹ tí o bá ní, àti àmì ìkìlọ̀ mẹ́ta ti claim sharks. Gbé ìgbésẹ̀ àkọ́kọ́ lórí àǹfààní kan.",
          youCanNow: "wá VSO ọ̀fẹ́ tí a fọwọ́ sí, dá àwọn tí kò yẹ kí o sanwó fún láti fi ẹ̀sùn sílẹ̀ mọ̀, kí o sì bẹ̀rẹ̀ ètò ìgbésẹ̀ àwọn àǹfààní VA rẹ.",
          quickCheck: [
            { objective: "O6", q: "Ta ni VA ń fọwọ́ sí láti ṣèrànwọ́ pẹ̀lú ẹ̀sùn?", options: ["Ẹnikẹ́ni tí ó ní ojú-òpó wẹ́ẹ̀bù", "Ilé-iṣẹ́ èyíkéyìí tí ń polówó fún veterans", "Àwọn ọ̀rẹ́ tí wọ́n ti fi ẹ̀sùn sílẹ̀ rí", "Aṣojú VSO, agbẹjọ́rò àti claims agents"], answer: 3, why: "VA ń fọwọ́ sí aṣojú VSO, agbẹjọ́rò àti claims agents." },
            { objective: "O6", q: "Olùrànlọ́wọ́ kan sọ pé òun máa fi ẹ̀sùn àkọ́kọ́ rẹ sílẹ̀ kíákíá tí o bá pín ìwọlé va.gov rẹ. Kí ni o máa ṣe?", options: ["Pín in láti fi àkókò pamọ́", "Kọ̀, kí o sì wá aṣojú ọ̀fẹ́ tí a fọwọ́ sí pẹ̀lú irinṣẹ́ àwárí VA", "Pín ọ̀rọ̀ aṣínà rẹ nìkan", "Kọ́kọ́ sanwó fún wọn"], answer: 1, why: "Má pín ìwọlé rẹ láéláé; ìrànlọ́wọ́ ọ̀fẹ́ tí a fọwọ́ sí wà nípasẹ̀ irinṣẹ́ àwárí VA." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: GI Bill àti ìrànlọ́wọ́ ọ̀fẹ́",
        questions: [
          { objective: "O4", q: "Ta ni Post-9/11 GI Bill wà fún?", options: ["Ẹnikẹ́ni tí ń gbé ní US", "Àwọn ọ̀gá ológun (officers) nìkan", "Ọkọ tàbí aya nìkan", "Àwọn tí wọ́n ṣiṣẹ́ ológun lójú iṣẹ́ lẹ́yìn September 10, 2001"], answer: 3, why: "VA sọ pé Post-9/11 GI Bill wà fún iṣẹ́ active duty lẹ́yìn September 10, 2001." },
          { objective: "O4", q: "Èwo nínú ìwọ̀nyí ni GI Bill lè ràn lọ́wọ́ láti sanwó fún?", options: ["Owó-yá ọkọ̀", "Apprenticeship tàbí ìdánwò ìwé-àṣẹ", "Owó ilé ní ilé àwọn òbí rẹ", "Owó fóònù rẹ"], answer: 1, why: "VA kọ apprenticeship, ẹ̀kọ́ lẹ́nu iṣẹ́ àti ìdánwò ìwé-àṣẹ mọ́ àwọn ìlò GI Bill." },
          { objective: "O5", q: "Lẹ́yìn tí wọ́n bá fọwọ́ sí GI Bill rẹ, ta ni ó máa gba ẹ̀dà Certificate of Eligibility rẹ?", options: ["Agbaniṣiṣẹ́ ológun (recruiter)", "Onílé rẹ", "School certifying official ilé-ìwé rẹ", "Kò sí ẹnikẹ́ni"], answer: 2, why: "School certifying official ń lò ó láti ròyìn ìforúkọsílẹ̀ rẹ fún VA." },
          { objective: "O6", q: "Iye owó wo ni aṣojú VSO tí a fọwọ́ sí ń gbà láti ràn ọ́ lọ́wọ́ pẹ̀lú ẹ̀sùn rẹ?", options: ["Kò sí; ọ̀fẹ́ ni nígbà gbogbo", "Ìpín nínú owó ẹ̀yìn rẹ", "Owó kan ṣáájú kí wọ́n tó fi sílẹ̀", "Owó oṣù kan"], answer: 0, why: "VA sọ pé iṣẹ́ aṣojú VSO tí a fọwọ́ sí jẹ́ ọ̀fẹ́ nígbà gbogbo." },
          { objective: "O6", q: "Ilé-iṣẹ́ kan sọ pé àwọn máa fi ẹ̀sùn àìlera àkọ́kọ́ rẹ sílẹ̀ fún 20% owó ẹ̀yìn rẹ. Kí ni èyí?", options: ["Owó VA lásán", "Ètò VA kan", "Àmì ìkìlọ̀; lo VSO ọ̀fẹ́ tí a fọwọ́ sí dípò rẹ̀", "Òfin ló ní kí ó rí bẹ́ẹ̀"], answer: 2, why: "A gba owó láàyè lẹ́yìn tí VA bá pinnu ẹ̀sùn àkọ́kọ́ nìkan, pẹ̀lú àdéhùn tí a fọwọ́ sí, àti láti ọ̀dọ̀ agbẹjọ́rò tàbí agent tí a fọwọ́ sí nìkan." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Àwọn Àǹfààní VA àti GI Bill",
    questions: [
      { objective: "O2", q: "Kí ni owó àìlera (disability compensation)?", options: ["Gift card ẹ̀ẹ̀kan", "Owó oṣooṣù fún àwọn àìsàn tí iṣẹ́ ológun fà tàbí tí ó mú burú sí i", "Owó-yá fún ilé-ìwé", "Ìfilọ̀ iṣẹ́"], answer: 1, why: "Ó ń san owó fún veterans nítorí àwọn àìsàn tí ó ní í ṣe pẹ̀lú iṣẹ́ ológun." },
      { objective: "O1", q: "Kí ni o yẹ kí o ṣe pẹ̀lú DD214 rẹ?", options: ["Fi ẹ̀dà rẹ̀ pamọ́ sí ibi tí kò léwu", "Jù ú nù lẹ́yìn tí o bá kúrò nínú iṣẹ́ ológun", "Fi í sórí ayélujára", "Fún ẹnikẹ́ni tí ó bá béèrè ní ojúlówó rẹ̀"], answer: 0, why: "VA ń lò ó láti jẹ́rìí sí iṣẹ́ ológun rẹ, nítorí náà pa á mọ́ láìléwu." },
      { objective: "O1", q: "Níbo ni o yẹ kí o ti béèrè fún àwọn àǹfààní VA lórí ayélujára?", options: ["Ojú-òpó èyíkéyìí tí ó ní àsíá", "Link nínú text", "Ojú-òpó ìjọba gidi va.gov", "Ojú-ewé social media"], answer: 2, why: "Lo ojú-òpó VA gidi nìkan." },
      { objective: "O1", q: "Kí ni o kò gbọ́dọ̀ tẹ sínú AI chatbot LÁÉLÁÉ?", options: ["\"Ṣàlàyé ohun tí effective date jẹ́\"", "\"Ràn mí lọ́wọ́ láti kọ ìbéèrè fún VSO mi\"", "\"Kí ni GI Bill?\"", "Nọ́mbà Social Security rẹ tàbí ìsọfúnni ìlera rẹ"], answer: 3, why: "Pa ìsọfúnni àdáni mọ́ kúrò nínú àwọn irinṣẹ́ AI." },
      { objective: "O2", q: "Èwo NI KÌ Í ṢE ọ̀kan lára àwọn ọ̀nà láti fi ẹ̀sùn àìlera sílẹ̀?", options: ["Lórí ayélujára ní va.gov", "Nípasẹ̀ ìfìwéránṣẹ́ pẹ̀lú VA Form 21-526EZ", "Ní ojú ara ní ọ́fíìsì agbègbè VA", "Nípa fífi text ránṣẹ́ sí àjèjì tí ó sọ pé òun máa ràn ọ́ lọ́wọ́"], answer: 3, why: "Fi sílẹ̀ lórí ayélujára, nípasẹ̀ ìfìwéránṣẹ́, ní ojú ara tàbí pẹ̀lú aṣojú tí a fọwọ́ sí." },
      { objective: "O2", q: "O fẹ́ fi sílẹ̀ lórí ìwé ṣùgbọ́n o nílò àkókò láti kó ẹ̀rí jọ. Kí ló lè ràn ọ́ lọ́wọ́ láti dáàbò bo ọjọ́ ìbẹ̀rẹ̀ rẹ?", options: ["Intent to file", "Dídúró fún ọdún díẹ̀", "Kò fi nǹkan kan sílẹ̀", "Pípe claim shark"], answer: 0, why: "Intent to file lè di ọjọ́ ìbẹ̀rẹ̀ tí ó ṣeé ṣe mú." },
      { objective: "O2", q: "Èwo ni ẹ̀rí tó dára fún ẹ̀sùn àìlera?", options: ["Àméfò nípa ohun tí VA fẹ́", "Service treatment records àti àkọsílẹ̀ dókítà", "Ọ̀rọ̀ kan lórí social media", "Ìpinnu ẹ̀sùn ọ̀rẹ́ kan"], answer: 1, why: "Àkọsílẹ̀ àti ọ̀rọ̀ ẹlẹ́rìí ń ti ẹ̀sùn rẹ lẹ́yìn." },
      { objective: "O2", q: "VA ṣètò àyẹ̀wò fún ẹ̀sùn rẹ. O yẹ kí o:", options: ["Pa á tì", "Rán ẹlòmíì lọ", "Lọ síbẹ̀", "Ní kí claim shark lọ"], answer: 2, why: "Àyẹ̀wò náà jẹ́ apá kan ìpinnu." },
      { objective: "O3", q: "Ìwé ìbéèrè wo ni ìtọ́jú ìlera VA ń lò?", options: ["VA Form 10-10EZ", "VA Form 22-1990", "VA Form 21-526EZ", "DD214"], answer: 0, why: "10-10EZ ni Application for Health Benefits." },
      { objective: "O3", q: "Nígbà tí o bá ń béèrè fún ìtọ́jú ìlera VA, kí ni o yẹ kí o kọ nípa iṣẹ́ ológun rẹ?", options: ["Ipò (rank) rẹ nìkan", "Kò sí nǹkan rárá", "Ibùdó ológun tí o fẹ́ràn jù", "Ìtàn iṣẹ́ ológun rẹ, pẹ̀lú ohun olóró tàbí eléwu èyíkéyìí tí o kàn"], answer: 3, why: "VA ń béèrè fún ìtàn iṣẹ́ ológun àti ohun eléwu tí o kàn." },
      { objective: "O3", q: "Nọ́mbà fóònù wo ni VA kọ fún ìrànlọ́wọ́ láti béèrè fún ìtọ́jú ìlera?", options: ["911", "988", "877-222-8387", "411"], answer: 2, why: "VA kọ 877-222-8387 fún hotline àǹfààní ìlera." },
      { objective: "O4", q: "Orúkọ míì fún Post-9/11 GI Bill ni:", options: ["Chapter 1606", "Chapter 33", "Form 10-10EZ", "DD214"], answer: 1, why: "Post-9/11 GI Bill ni Chapter 33." },
      { objective: "O4", q: "Veteran kan fẹ́ di oníṣẹ́ iná (electrician) láìsí oyè yunifásítì ọdún mẹ́rin. Ṣé GI Bill lè ràn án lọ́wọ́?", options: ["Rárá, yunifásítì ọdún mẹ́rin nìkan ló ń sanwó fún", "Bẹ́ẹ̀ ni, ó lè ràn lọ́wọ́ pẹ̀lú apprenticeship àti ẹ̀kọ́ lẹ́nu iṣẹ́", "Tí ó bá kó lọ sí òkè-òkun nìkan", "Fún àwọn ọ̀gá ológun nìkan"], answer: 1, why: "VA kọ apprenticeship àti ẹ̀kọ́ lẹ́nu iṣẹ́ mọ́ àwọn ìlò GI Bill." },
      { objective: "O4", q: "Yellow Ribbon Program lè:", options: ["San owó ilé rẹ", "Rọ́pò DD214 rẹ", "Mú ẹ̀sùn àìlera yára", "Ràn lọ́wọ́ pẹ̀lú owó ilé-ìwé tí Post-9/11 GI Bill kò san, ní àwọn ilé-ìwé tí ó kópa"], answer: 3, why: "Yellow Ribbon ń ràn lọ́wọ́ pẹ̀lú owó ilé-ìwé tí ó ju ohun tí GI Bill ń san lọ." },
      { objective: "O5", q: "Tí o bá béèrè fún GI Bill nípasẹ̀ ìfìwéránṣẹ́, fọ́ọ̀mù wo ni o máa lò?", options: ["VA Form 22-1990", "VA Form 10-10EZ", "VA Form 21-526EZ", "Fọ́ọ̀mù owó-orí"], answer: 0, why: "VA Form 22-1990 ni Application for VA Education Benefits." },
      { objective: "O5", q: "Kí o tó forúkọ sílẹ̀ ní ilé-ìwé pẹ̀lú GI Bill, o yẹ kí o:", options: ["Forúkọ sílẹ̀ ní ọjọ́ kan náà tí ẹni tí ń wá akẹ́kọ̀ọ́ pè ọ́", "Má fi wọ́n wéra", "Fi í wéra pẹ̀lú GI Bill Comparison Tool kí o sì béèrè nípa owó àti rírí iṣẹ́ lẹ́yìn ẹ̀kọ́", "San owó ìdógò kí o tó ka nǹkan kan"], answer: 2, why: "Fífi wọ́n wéra ní àkọ́kọ́ ń dáàbò bo àǹfààní rẹ." },
      { objective: "O5", q: "Ṣé o lè yí ìwé ìbéèrè GI Bill rẹ padà lẹ́yìn tí o bá fi ránṣẹ́?", options: ["Bẹ́ẹ̀ ni, nígbàkígbà", "Bẹ́ẹ̀ ni, nípa pípe ilé-ìwé", "Ní òpin ọ̀sẹ̀ nìkan", "Rárá, nítorí náà ṣàyẹ̀wò rẹ̀ kí o tó fi ránṣẹ́"], answer: 3, why: "VA sọ pé o kò lè ṣe àtúnṣe lẹ́yìn tí o bá fi ránṣẹ́." },
      { objective: "O6", q: "Èwo nínú ìwọ̀nyí ni VA ti fọwọ́ sí láti ṣèrànwọ́ pẹ̀lú ẹ̀sùn?", options: ["Aṣojú VSO, agbẹjọ́rò àti claims agents", "Ojú-òpó wẹ́ẹ̀bù èyíkéyìí", "Ẹnikẹ́ni tí ó ti ṣiṣẹ́ ológun", "Àwọn tí ń ta ọkọ̀"], answer: 0, why: "Office of General Counsel ti VA ń fọwọ́ sí oríṣi mẹ́ta wọ̀nyí." },
      { objective: "O6", q: "Ìgbà wo ni agbẹjọ́rò tàbí claims agent tí a fọwọ́ sí lè gba owó?", options: ["Kí wọ́n tó fi ẹ̀sùn àkọ́kọ́ rẹ sílẹ̀", "Lẹ́yìn tí VA bá ti pinnu ẹ̀sùn àkọ́kọ́ rẹ nìkan, àti pẹ̀lú àdéhùn owó tí a fọwọ́ sí", "Nígbàkígbà tí wọ́n bá fẹ́", "Kò sí òfin kankan tí ó gbà á láàyè"], answer: 1, why: "VA sọ pé owó lè wá lẹ́yìn ìpinnu àkọ́kọ́ nìkan, pẹ̀lú àdéhùn tí a fọwọ́ sí." },
      { objective: "O6", q: "Ẹnìkan tí ń ràn ọ́ lọ́wọ́ pẹ̀lú ẹ̀sùn rẹ béèrè fún ìwọlé va.gov rẹ. O yẹ kí o:", options: ["Pín in kí wọ́n lè ṣiṣẹ́ kíákíá", "Kọ ọ́ sórí ìwé kékeré fún wọn", "Kọ̀; má pín ìwọlé rẹ láéláé", "Yí i padà sí èyí tó rọrùn"], answer: 2, why: "Má fún ẹnikẹ́ni ní ìwọlé va.gov rẹ láéláé." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [1, 3, 5, 8, 9, 12, 15, 18, 19] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Àkọsílẹ̀ ìwé", objective: "O1", notYet: "Kò sí àkọsílẹ̀, tàbí DD214 kò sí nínú rẹ̀.", meets: "Àkọsílẹ̀ tí ó bẹ̀rẹ̀ pẹ̀lú DD214, pẹ̀lú àmì sí àwọn ìwé tó sọnù.", exceeds: "Ó kọ ibi tí ìwé kọ̀ọ̀kan wà àti bí a ṣe lè rí èyí tó sọnù." },
      { name: "Àwọn àǹfààní àti bí a ṣe ń béèrè", objective: "O2", notYet: "A kọ àwọn àǹfààní sílẹ̀ láìsọ bí a ṣe máa béèrè.", meets: "Àǹfààní kọ̀ọ̀kan (owó àìlera, ìtọ́jú ìlera, ẹ̀kọ́) pẹ̀lú ọ̀nà ìjọba láti béèrè.", exceeds: "Ó sọ bí akẹ́kọ̀ọ́ ṣe máa dáàbò bo ọjọ́ ìbẹ̀rẹ̀ tàbí fọ́ọ̀mù tí yóò lò." },
      { name: "Ètò GI Bill", objective: "O5", notYet: "Kò dárúkọ ètò tàbí ilé-ìwé, tí akẹ́kọ̀ọ́ bá máa lo GI Bill.", meets: "Ètò náà, ilé-ìwé tàbí ẹ̀kọ́ iṣẹ́, àti ohun tí a nílò fún un.", exceeds: "Àṣàyàn méjì tí a fi wéra nínú GI Bill Comparison Tool." },
      { name: "Ìrànlọ́wọ́ ọ̀fẹ́ tí a fọwọ́ sí", objective: "O6", notYet: "Kò sí aṣojú, tàbí ilé-iṣẹ́ tí ń gba owó tí a kò fọwọ́ sí.", meets: "Orúkọ àti ọ̀nà láti kàn sí aṣojú tàbí VSO tí VA fọwọ́ sí, láti inú irinṣẹ́ àwárí VA.", exceeds: "Akẹ́kọ̀ọ́ ti kàn sí wọn tàbí ó ti ṣètò ìpàdé." },
      { name: "Àwọn àmì ìkìlọ̀ claim shark", objective: "O6", notYet: "Àmì ìkìlọ̀ tí kò tó mẹ́ta.", meets: "Àmì ìkìlọ̀ mẹ́ta ti ẹni tí kò yẹ kí a sanwó fún láti fi ẹ̀sùn sílẹ̀.", exceeds: "Akẹ́kọ̀ọ́ ṣàlàyé ìgbà tí agbẹjọ́rò tàbí claims agent tí a fọwọ́ sí lè gba owó." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n fi ó kéré tán ìwé ìbéèrè VA kan tàbí intent to file kan sílẹ̀ láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n kàn sí aṣojú ọ̀fẹ́ tí a fọwọ́ sí tàbí VSO láàárín ọjọ́ 30",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n forúkọ sílẹ̀ fún ẹ̀kọ́ tí GI Bill ń sanwó fún láàárín oṣù 6"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì",
      "Fódà kan (ti ìwé, tàbí fódà tí kò léwu lórí kọ̀mpútà akẹ́kọ̀ọ́ fúnra rẹ̀) fún àwọn ìwé",
      "DD214 akẹ́kọ̀ọ́ tàbí àwọn ìwé ìkúrò míì, tí wọ́n bá ní i",
      "Ojú-òpó va.gov ọ̀fẹ́, pẹ̀lú GI Bill Comparison Tool àti irinṣẹ́ àwárí aṣojú tí a fọwọ́ sí",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Má ṣe gba tàbí wo DD214, àkọsílẹ̀ ìlera tàbí nọ́mbà Social Security àwọn akẹ́kọ̀ọ́ láéláé; àwọn akẹ́kọ̀ọ́ ń pa fódà wọn mọ́ fúnra wọn.",
      "Pe VSO kan tí VA fọwọ́ sí wá sí ìpàdé ìkẹyìn kí àwọn akẹ́kọ̀ọ́ lè pàdé ìrànlọ́wọ́ ọ̀fẹ́ ní ojú ara.",
      "Jẹ́rìí sí fọ́ọ̀mù, nọ́mbà fóònù àti òfin lórí va.gov nígbà ìpàdé, nítorí wọ́n lè yí padà.",
      "Má ṣe fúnni ní ìmọ̀ràn lórí ọ̀ràn ìlera tàbí ti òfin; rán wọn lọ sí VA tàbí aṣojú tí a fọwọ́ sí.",
      "Fi rubric ṣe àmì fún ètò ìgbésẹ̀ náà, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};

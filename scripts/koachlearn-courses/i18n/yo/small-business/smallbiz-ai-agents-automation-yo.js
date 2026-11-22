"use strict";

// Koach Learn course (Yoruba translation of small-business/smallbiz-ai-agents-automation.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "smallbiz-ai-agents-automation-yo",
  lang: "yo",
  translationOf: "smallbiz-ai-agents-automation",
  category: "Small Business",
  name: "AI Agents fún Iṣẹ́ Aládàáṣe nínú Òwò",
  skills: "Mímọ ìyàtọ̀ láàárín iṣẹ́ aládàáṣe àti AI agent, Kíkọ ìgbésẹ̀ iṣẹ́ àtúnṣe ní ọ̀kọ̀ọ̀kan, Ṣíṣe ọ̀nà iṣẹ́ pẹ̀lú ohun ìbẹ̀rẹ̀ àti ìgbésẹ̀, Fífi ìfọwọ́sí ènìyàn kún un, Ṣíṣe àyẹ̀wò pẹ̀lú ìsọfúnni àpẹẹrẹ, Àkọsílẹ̀ àti àbójútó",
  outcome: "ṣe ètò, kọ́, kí o sì dán iṣẹ́ aládàáṣe kékeré kan wò láìléwu fún òwò rẹ, bí yíyí ìbéèrè tuntun láti fọ́ọ̀mù orí ayélujára padà sí ìlà kan nínú spreadsheet, èsì àkọ́pẹrẹ àti ìránnilétí fún ọ, pẹ̀lú ìgbésẹ̀ ìfọwọ́sí ènìyàn kí ohunkóhun tó jáde, àyẹ̀wò pẹ̀lú ìsọfúnni àpẹẹrẹ, àti àkọsílẹ̀ tí o ń yẹ̀wò lọ́sẹ̀ọ̀sẹ̀.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn olùdásílẹ̀ òwò kékeré tí wọ́n ń tún iṣẹ́ kọ̀mpútà kan náà ṣe lójoojúmọ́: dída ìdáhùn fọ́ọ̀mù kọ sínú sheet, fífi ímeèlì àtẹ̀lé kan náà ránṣẹ́, ṣíṣe ìwé owó (invoice), àti títo àwọn ìbéèrè. Àwọn àpẹẹrẹ wá láti ṣọ́ọ̀bù, ilé oúnjẹ, ilé ìṣaralóge, iṣẹ́ ìfọmọ́ àti àtúnṣe, àti ọ́fíìsì kékeré.",
    "O máa kọ́ ìyàtọ̀ láàárín iṣẹ́ aládàáṣe (automation) tó rọrùn àti AI agent, bí o ṣe lè pín iṣẹ́ sí ìgbésẹ̀, bí o ṣe lè ṣe ètò ọ̀nà iṣẹ́ pẹ̀lú ohun ìbẹ̀rẹ̀ (trigger) àti ìgbésẹ̀ (actions), àti bí o ṣe lè kọ́ ọ pẹ̀lú irinṣẹ́ no-code bí Zapier, Make tàbí Microsoft Power Automate, tàbí àwọn ẹ̀yà automation inú irinṣẹ́ tí o ti ń lò tẹ́lẹ̀. Èyí tó ṣe pàtàkì jù: ènìyàn ni yóò máa darí rẹ̀.",
    "Àwọn irinṣẹ́ máa ń yí ojú-ìwé àti iye owó wọn padà nígbà gbogbo, nítorí náà a ṣàlàyé ohun tí o máa ṣe dípò orúkọ àkójọ (menu) gangan; ṣàyẹ̀wò ojú-òpó irinṣẹ́ kọ̀ọ̀kan fún ètò ọ̀fẹ́ rẹ̀ lọ́wọ́lọ́wọ́. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Kọ́ iṣẹ́ aládàáṣe kan tí ó ń ṣiṣẹ́ fún iṣẹ́ gidi tí o máa ń tún ṣe: kọ àwòrán ìgbésẹ̀ (step map), yan ohun ìbẹ̀rẹ̀ àti àwọn ìgbésẹ̀, fi ìgbésẹ̀ ìfọwọ́sí ènìyàn sí iwájú ohunkóhun tí a máa fi ránṣẹ́ tàbí sanwó fún, dán an wò pẹ̀lú àpẹẹrẹ mẹ́ta (kò sí ìsọfúnni oníbàárà gidi), tún ohun tó bàjẹ́ ṣe, kí o sì ṣe àkọsílẹ̀ (log) tó rọrùn àti àyẹ̀wò ọ̀sẹ̀ọ̀sẹ̀. Kọ àlàyé ojú-ìwé kan nípa rẹ̀ kí ẹlòmíì lè yé e tàbí pa á.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn olùdásílẹ̀ òwò kékeré tí wọ́n ń tún iṣẹ́ kọ̀mpútà kan náà ṣe lójoojúmọ́, bí dída ìdáhùn fọ́ọ̀mù kọ sínú sheet, fífi ímeèlì àtẹ̀lé kan náà ránṣẹ́, ṣíṣe ìwé owó àti títo àwọn ìbéèrè, ní ṣọ́ọ̀bù, ilé oúnjẹ, ilé ìṣaralóge, iṣẹ́ ìfọmọ́ àti àtúnṣe, àti ọ́fíìsì kékeré.",
    startingPoint: "Wọ́n ń lo ímeèlì, fọ́ọ̀mù orí ayélujára tàbí irinṣẹ́ ìforúkọsílẹ̀, àti spreadsheet, wọ́n sì lè ti gbìyànjú olùrànlọ́wọ́ AI rí. Ọ̀pọ̀ nínú wọn kò tíì kọ́ iṣẹ́ aládàáṣe rí, wọn kò sì tíì lo irinṣẹ́ automation no-code rí.",
    gap: "Àwọn iṣẹ́ àtúnṣe ń gba ọ̀pọ̀ wákàtí lọ́sẹ̀ọ̀sẹ̀, àṣìṣe sì máa ń wọlé nígbà tí ènìyàn bá rẹ̀wẹ̀sì. Àwọn akẹ́kọ̀ọ́ nílò láti sọ àwọn ìgbésẹ̀ àtìgbàdégbà di aládàáṣe láìléwu, pẹ̀lú ènìyàn tí ó ń fọwọ́ sí ohunkóhun tí a fi ránṣẹ́ tàbí tí a sanwó fún, kí wọ́n lè fi àkókò pamọ́ láìpàdánù àkóso lórí oníbàárà, owó tàbí àkọsílẹ̀.",
    constraints: [
      "Irinṣẹ́ no-code ọ̀fẹ́ tàbí olówó pọ́ọ́kú; ètò ọ̀fẹ́ ní ààlà tí ó ń yí padà, nítorí náà àwọn akẹ́kọ̀ọ́ ń ṣàyẹ̀wò ojú-òpó irinṣẹ́ kọ̀ọ̀kan",
      "Kò sí ìsọfúnni oníbàárà gidi nínú àyẹ̀wò; àpẹẹrẹ nìkan",
      "Ènìyàn ló ń fọwọ́ sí ohunkóhun tí ó ná owó, tí ó fi ọ̀rọ̀ ránṣẹ́ sí oníbàárà, tàbí tí ó yí àkọsílẹ̀ padà",
      "Ààbò: wíwọlé onígbésẹ̀ méjì, ààyè tí ó kéré jù, kò sí nọ́mbà káàdì tàbí ọ̀rọ̀ aṣínà nínú ìgbésẹ̀ AI",
      "Àkókò: nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní ẹ̀kọ́ ìṣẹ́jú 5"
    ],
    prerequisites: "Kí ó rọrùn fún ọ láti lo ímeèlì àti spreadsheet. Àwọn tí wọ́n ṣẹ̀ṣẹ̀ ń kọ́ nípa olùrànlọ́wọ́ AI lè kọ́kọ́ ṣe ẹ̀kọ́ ìfihàn sí AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní iṣẹ́ òwò kan", action: "ṣàlàyé bóyá iṣẹ́ aládàáṣe tí kò yí padà tàbí ìgbésẹ̀ AI ló bá a mu, àti àwọn apá tí ènìyàn máa ṣe", standard: "kí owó, ọ̀rọ̀ sí oníbàárà àti ìyípadà àkọsílẹ̀ wà lọ́wọ́ ènìyàn" },
    { id: "O2", condition: "Tí o bá ní iṣẹ́ kan tí o máa ń tún ṣe lọ́pọ̀ ìgbà", action: "kọ àwòrán ìgbésẹ̀ kí o sì sàmì sí ìgbésẹ̀ kọ̀ọ̀kan gẹ́gẹ́ bí Òfin, Ọ̀rọ̀, Ìpinnu tàbí Owó tàbí fífiránṣẹ́", standard: "pẹ̀lú gbogbo ìgbésẹ̀ tí o ń ṣe lónìí" },
    { id: "O3", condition: "Tí o bá ní àwòrán ìgbésẹ̀ rẹ", action: "ṣe ètò ọ̀nà iṣẹ́ pẹ̀lú ohun ìbẹ̀rẹ̀, àwọn ìgbésẹ̀ àti ìgbésẹ̀ ìfọwọ́sí ènìyàn, tí o yà sórí ìwé", standard: "pẹ̀lú ìfọwọ́sí tí ó wà ṣáájú kí ohunkóhun tó jáde kúrò nínú òwò" },
    { id: "O4", condition: "Nípa lílo irinṣẹ́ automation no-code", action: "kọ́ ọ̀nà iṣẹ́ náà, so àwọn àkáǹtì rẹ pọ̀, kí o sì so àwọn àyè (fields) pọ̀", standard: "kí ìgbésẹ̀ AI gba àwọn àyè tí ó nílò nìkan, kí ó sì fi àkọ́pẹrẹ rẹ̀ ránṣẹ́ sí ọ" },
    { id: "O5", condition: "Tí o bá ní àpẹẹrẹ mẹ́ta tí a hùmọ̀", action: "dán iṣẹ́ aládàáṣe náà wò kí o sì tún ohun tó bàjẹ́ ṣe, ìyípadà kan lẹ́ẹ̀kan", standard: "títí àpẹẹrẹ déédéé, àpẹẹrẹ tí àyè kan kù nínú rẹ̀ àti àpẹẹrẹ ọ̀rọ̀ àjèjì yóò fi yege" },
    { id: "O6", condition: "Nígbà tí iṣẹ́ aládàáṣe náà bá ti bẹ̀rẹ̀ iṣẹ́ gidi", action: "ṣe àkọsílẹ̀ (log), àyẹ̀wò ọ̀sẹ̀ọ̀sẹ̀ àti àlàyé ojú-ìwé kan tí ó sọ bí a ṣe lè pa á", standard: "kí ẹlòmíì lè yé e tàbí dá a dúró" }
  ],
  chapters: [
    {
      name: "Orí 1: Lílóye àti ṣíṣe ètò iṣẹ́ aládàáṣe",
      lessons: [
        {
          objectives: ["O1"],
          title: "Iṣẹ́ aládàáṣe àti AI agent: kí ni ìyàtọ̀?",
          minutes: 5,
          goal: "Ṣàlàyé ìyàtọ̀ láàárín iṣẹ́ aládàáṣe tí kò yí padà àti AI agent, àti ìgbà tí ọ̀kọ̀ọ̀kan bá a mu.",
          text: [
            "Iṣẹ́ aládàáṣe (automation) ń tẹ̀lé àwọn òfin tí kò yí padà tí o fi lélẹ̀: \"Tí ẹnìkan bá fi fọ́ọ̀mù tuntun ránṣẹ́, fi ìlà kan kún sheet mi kí o sì fi ímeèlì ránṣẹ́ sí mi.\" Ó ń ṣe ohun kan náà ní gbogbo ìgbà. A lè mọ ohun tí yóò ṣe, ó sì rọrùn láti ṣàyẹ̀wò.",
            "AI agent jẹ́ ètò AI tí ó lè pinnu díẹ̀ lára àwọn ìgbésẹ̀ tirẹ̀ láti dé ibi àfojúsùn kan, bí kíka ìbéèrè, pípinnu irú ìbéèrè tí ó jẹ́, kíkọ àkọ́pẹrẹ èsì àti yíyan irinṣẹ́ tí yóò lò tẹ̀lé e. Agent rọrùn láti yí padà jù, ṣùgbọ́n a kò lè mọ ohun tí yóò ṣe dáadáa, ó sì lè ṣàṣìṣe bí ẹni tí ó dá a lójú.",
            "Fún òwò kékeré, bẹ̀rẹ̀ pẹ̀lú iṣẹ́ aládàáṣe tí kò yí padà, kí o sì fi AI kún ìgbésẹ̀ kan níbi tí ìfòyemọ̀ pẹ̀lú ọ̀rọ̀ ti ń ṣèrànwọ́, bí kíkọ àkọ́pẹrẹ èsì tàbí títo àwọn ọ̀rọ̀ ìránṣẹ́. Jẹ́ kí ènìyàn máa darí ohunkóhun tí ó ná owó, tí ó fi ọ̀rọ̀ ránṣẹ́ sí oníbàárà, tàbí tí ó yí àkọsílẹ̀ padà."
          ],
          words: [["Iṣẹ́ aládàáṣe (automation)", "àwọn ìgbésẹ̀ tí kò yí padà tí kọ̀mpútà ń ṣe fúnra rẹ̀ nígbà tí nǹkan kan bá ṣẹlẹ̀."], ["AI agent", "ètò AI tí ó lè yan díẹ̀ lára àwọn ìgbésẹ̀ tirẹ̀ láti dé ibi àfojúsùn kan."], ["Ọ̀nà iṣẹ́ (workflow)", "ọ̀wọ́ àwọn ìgbésẹ̀ tí ó ń parí iṣẹ́ kan."]],
          slides: [
            { title: "Iṣẹ́ aládàáṣe", bullets: ["Àwọn òfin tí kò yí padà tí o fi lélẹ̀", "Èsì kan náà ní gbogbo ìgbà", "A mọ ohun tí yóò ṣe, ó sì rọrùn láti ṣàyẹ̀wò"] },
            { title: "AI agent", bullets: ["Ó ń yan díẹ̀ lára àwọn ìgbésẹ̀ tirẹ̀", "Ó rọrùn láti yí padà, ṣùgbọ́n a kò mọ ohun tí yóò ṣe dáadáa", "Ó lè ṣàṣìṣe bí ẹni tí ó dá a lójú"] },
            { title: "Bẹ̀rẹ̀ ní ọ̀nà tó rọrùn", bullets: ["Iṣẹ́ aládàáṣe tí kò yí padà ní àkọ́kọ́", "Fi AI kún ìgbésẹ̀ kíkọ̀wé kan", "Ènìyàn ló ń fọwọ́ sí owó, ọ̀rọ̀ ìránṣẹ́ àti àkọsílẹ̀"] }
          ],
          tryIt: "Kọ iṣẹ́ méjì tí o máa ń tún ṣe nínú òwò rẹ sílẹ̀. Fún ọ̀kọ̀ọ̀kan, kọ bóyá iṣẹ́ aládàáṣe tí kò yí padà lè ṣe é, tàbí bóyá ó nílò ìfòyemọ̀ (ó ṣeé ṣe kí ó jẹ́ ìgbésẹ̀ AI).",
          youCanNow: "ṣàlàyé ìyàtọ̀ láàárín iṣẹ́ aládàáṣe àti AI agent, kí o sì yan èyí tí ó ní ààbò jù.",
          quickCheck: [
            { objective: "O1", q: "Kí ni àléébù AI agent tí a bá fi wé iṣẹ́ aládàáṣe tí kò yí padà?", options: ["A kò mọ ohun tí yóò ṣe dáadáa, ó sì lè ṣàṣìṣe bí ẹni tí ó dá a lójú", "Kò lè lo ọ̀rọ̀ láéláé", "Ní òru nìkan ló ń ṣiṣẹ́", "Kò ná owó kankan"], answer: 0, why: "Agent rọrùn láti yí padà ṣùgbọ́n a kò mọ ohun tí yóò ṣe dáadáa, ó sì lè ṣàṣìṣe bí ẹni tí ó dá a lójú." },
            { objective: "O1", q: "O fẹ́ kí AI máa dá ìbéèrè lóhùn, kí ó sì máa san ìwé owó àwọn olùpèsè fúnra rẹ̀. Kí ló yẹ kí o ṣe?", options: ["Jẹ́ kí AI agent ṣe méjèèjì", "Jẹ́ kí AI kọ àkọ́pẹrẹ èsì, kí ènìyàn sì máa sanwó àti fi ránṣẹ́", "Pa gbogbo iṣẹ́ aládàáṣe", "Jẹ́ kí AI sanwó ṣùgbọ́n kí ó má dáhùn"], answer: 1, why: "Jẹ́ kí ènìyàn máa darí níná owó àti fífi ọ̀rọ̀ ránṣẹ́ sí oníbàárà." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kíkọ ìgbésẹ̀ iṣẹ́ àtúnṣe ní ọ̀kọ̀ọ̀kan",
          minutes: 5,
          goal: "Pín iṣẹ́ àtúnṣe kan sí àwòrán ìgbésẹ̀ tí ó yé.",
          text: [
            "O kò lè sọ ohun tí o kò tíì kọ sílẹ̀ di aládàáṣe. Yan iṣẹ́ kan tí o máa ń ṣe lọ́pọ̀ ìgbà, kí o sì kọ gbogbo ìgbésẹ̀ bí o ṣe ń ṣe é lónìí. Àpẹẹrẹ fún iṣẹ́ ìfọmọ́: (1) ìbéèrè dé láti fọ́ọ̀mù orí ayélujára, (2) mo da orúkọ, àdírẹ́sì àti irú iṣẹ́ kọ sínú sheet mi, (3) mo kọ èsì pẹ̀lú ìwọ̀n iye owó mi, (4) mo fi ìránnilétí kún un láti pe padà, (5) mo fi iye owó (quote) ránṣẹ́.",
            "Sàmì sí ìgbésẹ̀ kọ̀ọ̀kan: Òfin (ó máa ń rí bákan náà), Ọ̀rọ̀ (ó nílò kíkọ̀wé tàbí ìfòyemọ̀), Ìpinnu (ó nílò olùdásílẹ̀), Owó tàbí fífiránṣẹ́ (ó nílò ìfọwọ́sí).",
            "A lè sọ àwọn ìgbésẹ̀ Òfin di aládàáṣe. Àwọn ìgbésẹ̀ Ọ̀rọ̀ lè gba àkọ́pẹrẹ AI. Àwọn ìgbésẹ̀ Ìpinnu àti Owó tàbí fífiránṣẹ́ wà lọ́wọ́ ènìyàn."
          ],
          steps: ["Yan iṣẹ́ kan tí o ń ṣe ó kéré tán lẹ́ẹ̀kan lọ́sẹ̀.", "Kọ gbogbo ìgbésẹ̀ bí o ṣe ń ṣe é báyìí.", "Sàmì sí ọ̀kọ̀ọ̀kan: Òfin, Ọ̀rọ̀, Ìpinnu, Owó tàbí fífiránṣẹ́.", "Fa òbìrí yí àwọn ìgbésẹ̀ Òfin ká láti sọ wọ́n di aládàáṣe ní àkọ́kọ́."],
          words: [["Àwòrán ìgbésẹ̀ (step map)", "àkọsílẹ̀ tí ó ní nọ́mbà fún gbogbo ìgbésẹ̀ inú iṣẹ́ kan."], ["Pẹ̀lú ọwọ́ (manual)", "iṣẹ́ tí ènìyàn ń ṣe fúnra rẹ̀ pẹ̀lú ọwọ́."]],
          slides: [
            { title: "Kọ ọ́ sílẹ̀ kí o tó sọ ọ́ di aládàáṣe", bullets: ["Yan iṣẹ́ kan tí o máa ń ṣe lọ́pọ̀ ìgbà", "Kọ gbogbo ìgbésẹ̀ bí o ṣe ń ṣe é lónìí"] },
            { title: "Sàmì sí ìgbésẹ̀ kọ̀ọ̀kan", bullets: ["Òfin: ó máa ń rí bákan náà", "Ọ̀rọ̀: kíkọ̀wé tàbí ìfòyemọ̀", "Ìpinnu / Owó tàbí fífiránṣẹ́: ènìyàn"] },
            { title: "Ohun tí a sọ di aládàáṣe", bullets: ["Ìgbésẹ̀ Òfin: sọ ọ́ di aládàáṣe", "Ìgbésẹ̀ Ọ̀rọ̀: àkọ́pẹrẹ AI", "Ìgbésẹ̀ Ìpinnu àti owó: ènìyàn"] }
          ],
          tryIt: "Kọ àwòrán ìgbésẹ̀ fún iṣẹ́ àtúnṣe kan nínú òwò rẹ, kí o sì sàmì sí gbogbo ìgbésẹ̀ gẹ́gẹ́ bí Òfin, Ọ̀rọ̀, Ìpinnu tàbí Owó/fífiránṣẹ́.",
          youCanNow: "pín iṣẹ́ àtúnṣe kan sí àwòrán ìgbésẹ̀ tí ó fi ohun tí a lè sọ di aládàáṣe hàn.",
          quickCheck: [
            { objective: "O2", q: "Àwọn ìgbésẹ̀ wo ló wà lọ́wọ́ ènìyàn?", options: ["Àwọn ìgbésẹ̀ Òfin", "Àwọn ìgbésẹ̀ Ọ̀rọ̀", "Àwọn ìgbésẹ̀ Ìpinnu àti Owó tàbí fífiránṣẹ́", "Gbogbo ìgbésẹ̀"], answer: 2, why: "Àwọn ìgbésẹ̀ Ìpinnu àti Owó tàbí fífiránṣẹ́ wà lọ́wọ́ ènìyàn; a lè sọ àwọn ìgbésẹ̀ Òfin di aládàáṣe." },
            { objective: "O2", q: "O fẹ́ sọ bí o ṣe ń bójú tó ìbéèrè tuntun di aládàáṣe. Kí lo máa kọ́kọ́ ṣe?", options: ["Ra irinṣẹ́ tí ó wọ́n jù", "Ní kí AI fojú díwọ̀n bí o ṣe ń ṣiṣẹ́", "Bẹ̀rẹ̀ sí kọ́ ọ lẹ́sẹ̀kẹsẹ̀", "Kọ gbogbo ìgbésẹ̀ sílẹ̀ bí o ṣe ń ṣe é lónìí"], answer: 3, why: "O kò lè sọ ohun tí o kò tíì kọ sílẹ̀ di aládàáṣe." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ṣíṣe ètò ọ̀nà iṣẹ́: ohun ìbẹ̀rẹ̀, ìgbésẹ̀, ìfọwọ́sí",
          minutes: 5,
          goal: "Ṣe ètò ọ̀nà iṣẹ́ pẹ̀lú ohun ìbẹ̀rẹ̀, àwọn ìgbésẹ̀ àti ìgbésẹ̀ ìfọwọ́sí ènìyàn.",
          text: [
            "Gbogbo iṣẹ́ aládàáṣe ní ohun ìbẹ̀rẹ̀ (trigger: ohun tí ó ṣẹlẹ̀ tí ó bẹ̀rẹ̀ rẹ̀) àti àwọn ìgbésẹ̀ (actions: ohun tí ó ṣẹlẹ̀ lẹ́yìn náà). Ohun ìbẹ̀rẹ̀: \"fọ́ọ̀mù tuntun dé\". Àwọn ìgbésẹ̀: \"fi ìlà kan kún sheet\", \"jẹ́ kí AI kọ àkọ́pẹrẹ èsì\", \"fi àkọ́pẹrẹ ránṣẹ́ sí mi fún ìfọwọ́sí\", \"ṣe ìránnilétí nínú kàlẹ́ńdà\".",
            "Fi ìfọwọ́sí ènìyàn sí iwájú ohunkóhun tí ó máa jáde kúrò nínú òwò: ọ̀rọ̀ sí oníbàárà, ìsanwó, ìyípadà iye owó, pípa àkọsílẹ̀ rẹ́. Iṣẹ́ aládàáṣe lè pèsè ohun gbogbo sílẹ̀; ìwọ ni yóò tẹ \"fi ránṣẹ́\".",
            "Kọ́kọ́ yà á sórí ìwé gẹ́gẹ́ bí àpótí àti ọfà. Kọ orúkọ irinṣẹ́ fún àpótí kọ̀ọ̀kan: irinṣẹ́ fọ́ọ̀mù rẹ, Google Sheets tàbí Excel, ìgbésẹ̀ AI, ímeèlì rẹ, kàlẹ́ńdà rẹ. Ṣàyẹ̀wò pé irinṣẹ́ kọ̀ọ̀kan lè so pọ̀ mọ́ iṣẹ́ ìsopọ̀ (connector) tí o fẹ́ lò."
          ],
          steps: ["Kọ ohun ìbẹ̀rẹ̀.", "Kọ àwọn ìgbésẹ̀ ní ìtẹ̀léra.", "Fi ìgbésẹ̀ ìfọwọ́sí sí iwájú ohunkóhun tí a máa fi ránṣẹ́ tàbí sanwó fún.", "Yà á gẹ́gẹ́ bí àpótí àti ọfà.", "Kọ orúkọ irinṣẹ́ fún àpótí kọ̀ọ̀kan kí o sì ṣàyẹ̀wò pé ó ń so pọ̀."],
          words: [["Ohun ìbẹ̀rẹ̀ (trigger)", "ohun tí ó ṣẹlẹ̀ tí ó bẹ̀rẹ̀ iṣẹ́ aládàáṣe."], ["Ìgbésẹ̀ (action)", "iṣẹ́ tí iṣẹ́ aládàáṣe ń ṣe lẹ́yìn ohun ìbẹ̀rẹ̀."], ["Ìgbésẹ̀ ìfọwọ́sí", "ibi tí ènìyàn gbọ́dọ̀ sọ pé bẹ́ẹ̀ ni kí ọ̀nà iṣẹ́ tó tẹ̀síwájú."]],
          slides: [
            { title: "Ohun ìbẹ̀rẹ̀ àti àwọn ìgbésẹ̀", bullets: ["Ohun ìbẹ̀rẹ̀: fọ́ọ̀mù tuntun dé", "Àwọn ìgbésẹ̀: fi ìlà kún un, àkọ́pẹrẹ AI, rán mi létí"] },
            { title: "Ìfọwọ́sí ènìyàn", bullets: ["Kí ọ̀rọ̀ tó jáde kúrò nínú òwò", "Kí ìsanwó, ìyípadà iye owó tàbí píparẹ́ tó ṣẹlẹ̀", "Iṣẹ́ aládàáṣe ń pèsè sílẹ̀; ìwọ ni yóò tẹ \"fi ránṣẹ́\""] },
            { title: "Kọ́kọ́ yà á", bullets: ["Àpótí àti ọfà lórí ìwé", "Kọ orúkọ irinṣẹ́ fún àpótí kọ̀ọ̀kan", "Ṣàyẹ̀wò pé irinṣẹ́ kọ̀ọ̀kan ń so pọ̀"] }
          ],
          tryIt: "Ya ọ̀nà iṣẹ́ fún iṣẹ́ rẹ láti Ẹ̀kọ́ 2: ohun ìbẹ̀rẹ̀, àwọn ìgbésẹ̀, àti ìgbésẹ̀ ìfọwọ́sí. Kọ orúkọ irinṣẹ́ sínú àpótí kọ̀ọ̀kan.",
          youCanNow: "ṣe ètò ọ̀nà iṣẹ́ pẹ̀lú ohun ìbẹ̀rẹ̀, àwọn ìgbésẹ̀ àti ìgbésẹ̀ ìfọwọ́sí ènìyàn.",
          quickCheck: [
            { objective: "O3", q: "Nínú ọ̀nà iṣẹ́, kí ni \"àwọn ìgbésẹ̀\" (actions)?", options: ["Ohun tí ó ṣẹlẹ̀ lẹ́yìn ohun ìbẹ̀rẹ̀", "Ohun tí ó bẹ̀rẹ̀ rẹ̀", "Ọ̀rọ̀ aṣínà rẹ", "Iye owó irinṣẹ́ náà"], answer: 0, why: "Ohun ìbẹ̀rẹ̀ ló ń bẹ̀rẹ̀ iṣẹ́ aládàáṣe; àwọn ìgbésẹ̀ ni ohun tí ó ṣẹlẹ̀ lẹ́yìn náà." },
            { objective: "O3", q: "Nínú ètò rẹ, ìgbésẹ̀ AI ń fi ímeèlì ránṣẹ́ tààrà sí àwọn oníbàárà. Kí lo máa yí padà?", options: ["Kò sí nǹkan; ó ń fi àkókò pamọ́", "Fi àkọ́pẹrẹ ránṣẹ́ sí ọ fún ìfọwọ́sí kí ó tó dé ọ̀dọ̀ oníbàárà", "Yọ ohun ìbẹ̀rẹ̀ kúrò", "Fi ìgbésẹ̀ AI kejì kún un láti ṣàyẹ̀wò èkíní"], answer: 1, why: "Ìfọwọ́sí ènìyàn ń wá ṣáájú kí ohunkóhun tó jáde kúrò nínú òwò." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Lílóye àti ṣíṣe ètò iṣẹ́ aládàáṣe",
        questions: [
          { objective: "O1", q: "Èwo ló ṣàpèjúwe iṣẹ́ aládàáṣe tí kò yí padà jù?", options: ["Ó ń yan àfojúsùn tirẹ̀", "Ó ń tẹ̀lé òfin tí o fi lélẹ̀, ó sì ń ṣe ohun kan náà ní gbogbo ìgbà", "Ènìyàn ni", "Kì í ṣiṣẹ́ láéláé"], answer: 1, why: "Iṣẹ́ aládàáṣe ń tẹ̀lé àwọn òfin tí kò yí padà." },
          { objective: "O1", q: "Èwo ni a lè mọ ohun tí yóò ṣe jù?", options: ["Kò sí èyí tí ó ń ṣiṣẹ́ nínú wọn", "AI agent", "Wọ́n máa ń rí bákan náà nígbà gbogbo", "Iṣẹ́ aládàáṣe tí kò yí padà"], answer: 3, why: "Agent ń yan ìgbésẹ̀, a kò sì lè mọ ohun tí yóò ṣe dáadáa." },
          { objective: "O2", q: "Nínú àwòrán ìgbésẹ̀, a sàmì sí \"fi iye owó (quote) ránṣẹ́\" gẹ́gẹ́ bí:", options: ["Owó tàbí fífiránṣẹ́: ó nílò ìfọwọ́sí", "Òfin: sọ ọ́ di aládàáṣe pátápátá", "Fojú fò ó", "Pa á rẹ́"], answer: 0, why: "Ohunkóhun tí a fi ránṣẹ́ sí oníbàárà nílò ìfọwọ́sí ènìyàn." },
          { objective: "O3", q: "Kí ni ohun ìbẹ̀rẹ̀ (trigger)?", options: ["Ọ̀rọ̀ aṣínà", "Ìgbésẹ̀ ìkẹyìn", "Ohun tí ó ṣẹlẹ̀ tí ó bẹ̀rẹ̀ iṣẹ́ aládàáṣe", "Iye owó"], answer: 2, why: "Ohun ìbẹ̀rẹ̀ ló ń bẹ̀rẹ̀ ọ̀nà iṣẹ́." },
          { objective: "O3", q: "Níbo ni ìgbésẹ̀ ìfọwọ́sí máa wà?", options: ["Kò sí ibì kankan", "Lẹ́yìn tí oníbàárà ti gbà á", "Ṣáájú kí ohunkóhun tó jáde kúrò nínú òwò", "Ní òpin ọdún nìkan"], answer: 2, why: "Fọwọ́ sí i kí o tó fi ránṣẹ́, sanwó tàbí pa nǹkan rẹ́." }
        ]
      }
    },
    {
      name: "Orí 2: Kíkọ́, dídánwò àti ṣíṣiṣẹ́ rẹ̀ láìléwu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kíkọ́ ọ pẹ̀lú irinṣẹ́ no-code",
          minutes: 6,
          goal: "Kọ́ ọ̀nà iṣẹ́ rẹ nínú irinṣẹ́ automation no-code.",
          text: [
            "Irinṣẹ́ no-code ń jẹ́ kí o kọ́ iṣẹ́ aládàáṣe nípa yíyan láti inú àkójọ (menu) dípò kíkọ kóòdù. Àwọn tí ó wọ́pọ̀ ni Zapier, Make àti Microsoft Power Automate. Àwọn app kan tí o ti ń lò tẹ́lẹ̀, bí irinṣẹ́ fọ́ọ̀mù, ìforúkọsílẹ̀ tàbí ímeèlì rẹ, ní iṣẹ́ aládàáṣe tó rọrùn nínú. Ṣàyẹ̀wò ojú-òpó irinṣẹ́ kọ̀ọ̀kan fún ètò ọ̀fẹ́ àti ààlà rẹ̀.",
            "Ọ̀nà náà jọra níbi gbogbo: ṣẹ̀dá iṣẹ́ aládàáṣe tuntun, yan app àti ohun tí ó ṣẹlẹ̀ fún ohun ìbẹ̀rẹ̀, wọlé láti so àkáǹtì rẹ pọ̀, lẹ́yìn náà fi ìgbésẹ̀ kọ̀ọ̀kan kún un kí o sì so àwọn àyè pọ̀ (fún àpẹẹrẹ, \"Name\" inú fọ́ọ̀mù ń lọ sínú ọwọ̀n \"Name\" inú sheet).",
            "Fún ìgbésẹ̀ AI, ọ̀pọ̀ irinṣẹ́ ní ìgbésẹ̀ tí ó ń fi ọ̀rọ̀ ránṣẹ́ sí AI model tí ó sì ń dá àkọ́pẹrẹ padà. Sọ fún un ní pàtó ohun tí yóò kọ, kí o sì fún un ní àwọn àyè tí ó nílò nìkan. Fi àkọ́pẹrẹ náà ránṣẹ́ sí ara rẹ, kì í ṣe tààrà sí oníbàárà."
          ],
          steps: ["Ṣẹ̀dá iṣẹ́ aládàáṣe tuntun nínú irinṣẹ́ tí o yàn.", "Yan app àti ohun tí ó ṣẹlẹ̀ fún ohun ìbẹ̀rẹ̀; so àkáǹtì rẹ pọ̀.", "Fi ìgbésẹ̀ kọ̀ọ̀kan kún un kí o sì so àwọn àyè pọ̀.", "Fi ìgbésẹ̀ àkọ́pẹrẹ AI kún un pẹ̀lú ìtọ́ni tí ó yé àti àwọn àyè tí ó nílò nìkan.", "Fi àkọ́pẹrẹ náà ránṣẹ́ sí ara rẹ fún ìfọwọ́sí."],
          words: [["No-code", "kíkọ́ ètò kọ̀mpútà nípa yíyan nǹkan dípò kíkọ kóòdù."], ["Síso àwọn àyè pọ̀ (field mapping)", "sísọ fún irinṣẹ́ náà ibi tí ìsọfúnni kọ̀ọ̀kan máa lọ."], ["So àkáǹtì pọ̀", "jíjẹ́ kí irinṣẹ́ automation lo ọ̀kan nínú àwọn app rẹ, lẹ́yìn tí o bá wọlé."]],
          slides: [
            { title: "Àwọn irinṣẹ́ no-code", bullets: ["Zapier, Make, Microsoft Power Automate", "Iṣẹ́ aládàáṣe tí ó wà nínú àwọn app tí o ń lò", "Ṣàyẹ̀wò ojú-òpó kọ̀ọ̀kan fún ààlà ètò ọ̀fẹ́"] },
            { title: "Ọ̀nà kan náà", bullets: ["Yan app àti ohun tí ó ṣẹlẹ̀ fún ohun ìbẹ̀rẹ̀", "So àkáǹtì rẹ pọ̀", "Fi àwọn ìgbésẹ̀ kún un kí o sì so àwọn àyè pọ̀"] },
            { title: "Ìgbésẹ̀ AI", bullets: ["Ìtọ́ni tí ó yé", "Àwọn àyè tí ó nílò nìkan", "Àkọ́pẹrẹ ń lọ sọ́dọ̀ rẹ, kì í ṣe sọ́dọ̀ oníbàárà"] }
          ],
          tryIt: "Kọ́ ọ̀nà iṣẹ́ rẹ nínú ètò ọ̀fẹ́ irinṣẹ́ no-code kan (tàbí lórí ìwé tí o kò bá tíì lè forúkọ sílẹ̀): ohun ìbẹ̀rẹ̀, síso àwọn àyè pọ̀ fún ìgbésẹ̀ kọ̀ọ̀kan, àti àkọ́pẹrẹ AI tí a fi ránṣẹ́ sí ọ.",
          youCanNow: "kọ́ ọ̀nà iṣẹ́ onígbésẹ̀ àti ohun ìbẹ̀rẹ̀ nínú irinṣẹ́ automation no-code.",
          quickCheck: [
            { objective: "O4", q: "Kí ni irinṣẹ́ no-code ń jẹ́ kí o ṣe?", options: ["Kọ kóòdù kíákíá", "Gba àkọsílẹ̀ oníbàárà lọ́fẹ̀ẹ́", "Kọ́ iṣẹ́ aládàáṣe nípa yíyan láti inú àkójọ (menu)", "Má ṣe wọlé sínú àwọn app rẹ"], answer: 2, why: "Irinṣẹ́ no-code ń jẹ́ kí o kọ́ iṣẹ́ aládàáṣe láti inú àkójọ dípò kíkọ kóòdù." },
            { objective: "O4", q: "Fọ́ọ̀mù náà ní àyè 12, ṣùgbọ́n AI nílò orúkọ àti irú iṣẹ́ nìkan láti kọ àkọ́pẹrẹ èsì. Kí lo máa fi ránṣẹ́ sí i?", options: ["Gbogbo àyè 12 láti wà láìléwu", "Nọ́mbà káàdì oníbàárà pẹ̀lú", "Kò sí nǹkan", "Orúkọ àti irú iṣẹ́ nìkan"], answer: 3, why: "Fún ìgbésẹ̀ AI ní àwọn àyè tí ó nílò nìkan." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Dídánwò pẹ̀lú ìsọfúnni àpẹẹrẹ àti títún ohun tó bàjẹ́ ṣe",
          minutes: 5,
          goal: "Dán iṣẹ́ aládàáṣe wò pẹ̀lú àpẹẹrẹ, kí o sì tún àṣìṣe ṣe kí o tó bẹ̀rẹ̀ lílò gidi.",
          text: [
            "Má ṣe dán an wò lórí oníbàárà gidi láéláé. Ṣe àpẹẹrẹ mẹ́ta pẹ̀lú orúkọ tí a hùmọ̀ bí \"Test Customer\" àti ímeèlì àyẹ̀wò tí ó jẹ́ tìrẹ. Fi àpẹẹrẹ déédéé kan kún un, ọ̀kan tí àyè kan kù nínú rẹ̀, àti ọ̀kan tí ó ní ọ̀rọ̀ àjèjì (gígùn púpọ̀, èdè míì, emoji).",
            "Ṣe ọ̀kọ̀ọ̀kan kí o sì ṣàyẹ̀wò gbogbo ìgbésẹ̀: ṣé ìlà náà wọ àwọn ọwọ̀n tí ó tọ́? Ṣé àkọ́pẹrẹ AI ní ìtumọ̀, ṣé ó sì dúró lórí ọ̀rọ̀ náà? Ṣé ìfọwọ́sí dé ọ̀dọ̀ rẹ? Ṣé ohunkóhun jáde tí kò yẹ kí ó jáde?",
            "Tún ohun kan ṣe lẹ́ẹ̀kan kí o sì tún dán an wò. Àwọn ìṣòro tí ó wọ́pọ̀: síso àyè pọ̀ lọ́nà tí kò tọ́, ìgbésẹ̀ tí ó kùnà nígbà tí àyè kan ṣófo, àkọ́pẹrẹ AI tí ó ń hùmọ̀ iye owó. Tún ìtọ́ni náà ṣe (\"Lo ìwọ̀n iye owó tí ó wà nínú àyè náà nìkan; má ṣe hùmọ̀ iye owó\") kí o sì tún dán an wò."
          ],
          steps: ["Ṣe àpẹẹrẹ mẹ́ta: déédéé, àyè tí ó kù, ọ̀rọ̀ àjèjì.", "Ṣe ọ̀kọ̀ọ̀kan nínú iṣẹ́ aládàáṣe náà.", "Ṣàyẹ̀wò èsì ìgbésẹ̀ kọ̀ọ̀kan.", "Tún ìṣòro kan ṣe lẹ́ẹ̀kan kí o sì tún dán an wò.", "Bẹ̀rẹ̀ lílò gidi kìkì nígbà tí àwọn mẹ́tẹ̀ẹ̀ta bá yege."],
          words: [["Ìsọfúnni àpẹẹrẹ (sample data)", "ìsọfúnni tí a hùmọ̀ fún àyẹ̀wò."], ["Ọ̀ràn àjèjì (edge case)", "ohun àjèjì tí a fi sínú rẹ̀ tí ó lè ba iṣẹ́ jẹ́, bí àyè tí ó ṣófo."], ["Bẹ̀rẹ̀ lílò gidi (go live)", "tan iṣẹ́ aládàáṣe náà fún iṣẹ́ gidi."]],
          slides: [
            { title: "Dán an wò pẹ̀lú ìsọfúnni tí a hùmọ̀", bullets: ["\"Test Customer\" àti ímeèlì àyẹ̀wò tìrẹ", "Déédéé, àyè tí ó kù, ọ̀rọ̀ àjèjì"] },
            { title: "Ṣàyẹ̀wò gbogbo ìgbésẹ̀", bullets: ["Ṣé àwọn ọwọ̀n tọ́?", "Ṣé àkọ́pẹrẹ AI ní ìtumọ̀, ṣé ó dúró lórí ọ̀rọ̀ náà?", "Ṣé ìfọwọ́sí dé ọ̀dọ̀ rẹ? Ṣé ohunkóhun jáde ní àṣìṣe?"] },
            { title: "Tún ṣe kí o sì tún dán an wò", bullets: ["Àtúnṣe kan lẹ́ẹ̀kan", "Sọ fún ìgbésẹ̀ AI pé kí ó má hùmọ̀ iye owó", "Bẹ̀rẹ̀ lílò gidi nígbà tí àwọn mẹ́tẹ̀ẹ̀ta bá yege"] }
          ],
          tryIt: "Ṣe àpẹẹrẹ mẹ́ta nínú iṣẹ́ aládàáṣe rẹ (tàbí tẹ̀lé wọn kọjá nínú ètò tí o yà sórí ìwé). Kọ ohun tí ó ṣẹlẹ̀ ní ìgbésẹ̀ kọ̀ọ̀kan àti àtúnṣe kan.",
          youCanNow: "dán iṣẹ́ aládàáṣe wò láìléwu, kí o sì tún ìṣòro ṣe kí ó tó kan oníbàárà gidi.",
          quickCheck: [
            { objective: "O5", q: "Èwo ni àpẹẹrẹ tí ó ní ọ̀rọ̀ àjèjì?", options: ["Ọ̀rọ̀ ìránṣẹ́ gígùn púpọ̀ pẹ̀lú emoji", "Ìbéèrè déédéé", "Fọ́ọ̀mù tí ó ṣófo", "Ìbéèrè oníbàárà gidi"], answer: 0, why: "Àpẹẹrẹ ọ̀rọ̀ àjèjì ní ọ̀rọ̀ gígùn púpọ̀, èdè míì tàbí emoji." },
            { objective: "O5", q: "Àyẹ̀wò kan kùnà nígbà tí àyè fóònù ṣófo. Kí lo máa ṣe?", options: ["Bẹ̀rẹ̀ lílò gidi bẹ́ẹ̀ náà", "Tún ìgbésẹ̀ kan yẹn ṣe kí o sì tún dán an wò", "Yí nǹkan márùn-ún padà lẹ́ẹ̀kan náà", "Dán an wò pẹ̀lú oníbàárà gidi nìkan"], answer: 1, why: "Tún ohun kan ṣe lẹ́ẹ̀kan kí o sì tún dán an wò." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ṣíṣiṣẹ́ rẹ̀ láìléwu: àkọsílẹ̀, àbójútó àti ọ̀nà pípa á",
          minutes: 5,
          goal: "Ṣe àkọsílẹ̀ (log), àyẹ̀wò ọ̀sẹ̀ọ̀sẹ̀ àti ọ̀nà láti pa iṣẹ́ aládàáṣe náà.",
          text: [
            "Nígbà tí ó bá ti bẹ̀rẹ̀ iṣẹ́ gidi, máa ṣọ́ ọ. Ọ̀pọ̀ irinṣẹ́ ń fi ìtàn ìṣiṣẹ́ kọ̀ọ̀kan hàn; ṣàyẹ̀wò rẹ̀ lọ́sẹ̀ọ̀sẹ̀ fún àṣìṣe. O tún lè fi ìlà àkọsílẹ̀ kún sheet kan: ọjọ́, ohun tí ó bẹ̀rẹ̀ rẹ̀, ohun tí ó ṣe, ẹni tí ó fọwọ́ sí i.",
            "Kọ àlàyé ojú-ìwé kan: ohun tí iṣẹ́ aládàáṣe náà ń ṣe, ohun ìbẹ̀rẹ̀ àti àwọn ìgbésẹ̀ rẹ̀, àwọn àkáǹtì tí ó ń lò, ẹni tí ó ń fọwọ́ sí i, àti bí a ṣe lè pa á. Fi í sí ibi tí ọmọ ẹbí tàbí òṣìṣẹ́ lè rí i.",
            "Dáàbò bo ààyè wíwọlé: lo wíwọlé onígbésẹ̀ méjì lórí irinṣẹ́ automation àti àwọn àkáǹtì tí a so pọ̀, fún un ní ààyè sí ohun tí ó nílò nìkan, pa nọ́mbà káàdì oníbàárà àti ọ̀rọ̀ aṣínà mọ́ kúrò nínú ìgbésẹ̀ AI, kí o sì yọ ààyè òṣìṣẹ́ kúrò nígbà tí ó bá kúrò lẹ́nu iṣẹ́."
          ],
          steps: ["Ṣàyẹ̀wò ìtàn ìṣiṣẹ́ lọ́sẹ̀ọ̀sẹ̀.", "Fi ìlà àkọsílẹ̀ kún un fún ìṣiṣẹ́ kọ̀ọ̀kan.", "Kọ àlàyé ojú-ìwé kan pẹ̀lú ọ̀nà pípa á.", "Tan wíwọlé onígbésẹ̀ méjì kí o sì dín ààyè kù.", "Máa yẹ̀wò lóṣooṣù bóyá ó ṣì ń fi àkókò pamọ́."],
          words: [["Ìtàn ìṣiṣẹ́ (run history)", "àkọsílẹ̀ tí irinṣẹ́ náà ń tọ́jú fún gbogbo ìgbà tí iṣẹ́ aládàáṣe ṣiṣẹ́."], ["Àkọsílẹ̀ (log)", "àkọsílẹ̀ ohun tí ó ṣẹlẹ̀ àti ìgbà tí ó ṣẹlẹ̀."], ["Ọ̀nà pípa á (off switch)", "ọ̀nà láti pa iṣẹ́ aládàáṣe kíákíá."]],
          slides: [
            { title: "Máa ṣọ́ ọ", bullets: ["Ṣàyẹ̀wò ìtàn ìṣiṣẹ́ lọ́sẹ̀ọ̀sẹ̀", "Àkọsílẹ̀: ọjọ́, ohun ìbẹ̀rẹ̀, ìgbésẹ̀, ẹni tí ó fọwọ́ sí i"] },
            { title: "Àlàyé ojú-ìwé kan", bullets: ["Ohun tí ó ń ṣe àti àwọn àkáǹtì tí ó ń lò", "Ẹni tí ó ń fọwọ́ sí i", "Bí a ṣe lè pa á"] },
            { title: "Dáàbò bo ààyè wíwọlé", bullets: ["Wíwọlé onígbésẹ̀ méjì", "Ààyè tí ó kéré jù tí ó nílò", "Kò sí nọ́mbà káàdì tàbí ọ̀rọ̀ aṣínà nínú ìgbésẹ̀ AI"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: parí iṣẹ́ aládàáṣe rẹ: àwòrán ìgbésẹ̀, ọ̀nà iṣẹ́ pẹ̀lú ìfọwọ́sí, àyẹ̀wò mẹ́ta tí ó yege, àkọsílẹ̀ àti àyẹ̀wò ọ̀sẹ̀ọ̀sẹ̀, àti àlàyé ojú-ìwé kan pẹ̀lú ọ̀nà pípa á.",
          youCanNow: "ṣiṣẹ́ iṣẹ́ aládàáṣe òwò láìléwu pẹ̀lú ìfọwọ́sí, àyẹ̀wò, àkọsílẹ̀ àti ọ̀nà pípa á.",
          quickCheck: [
            { objective: "O6", q: "Kí ló ń wọ ìlà àkọsílẹ̀ nínú ẹ̀kọ́ yìí?", options: ["Nọ́mbà káàdì oníbàárà", "Ọ̀rọ̀ aṣínà rẹ", "Ọjọ́, ohun ìbẹ̀rẹ̀, ohun tí ó ṣe àti ẹni tí ó fọwọ́ sí i", "Ọ̀rọ̀ náà \"ó ti parí\" nìkan"], answer: 2, why: "Ìlà àkọsílẹ̀ ń kọ ọjọ́, ohun ìbẹ̀rẹ̀, ohun tí ó ṣe àti ẹni tí ó fọwọ́ sí i." },
            { objective: "O6", q: "Òṣìṣẹ́ kan tí ó ń ràn ọ́ lọ́wọ́ láti fọwọ́ sí àkọ́pẹrẹ kúrò lẹ́nu iṣẹ́. Kí lo máa ṣe?", options: ["Kò sí nǹkan", "Fún ẹni tuntun ní ọ̀rọ̀ aṣínà rẹ", "Pa wíwọlé onígbésẹ̀ méjì", "Yọ ààyè rẹ̀ kúrò nínú iṣẹ́ aládàáṣe àti àwọn àkáǹtì tí a so pọ̀"], answer: 3, why: "Yọ ààyè òṣìṣẹ́ kúrò nígbà tí ó bá kúrò lẹ́nu iṣẹ́." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Kíkọ́, dídánwò àti ṣíṣiṣẹ́ rẹ̀ láìléwu",
        questions: [
          { objective: "O4", q: "Èwo ni irinṣẹ́ automation no-code?", options: ["Zapier", "Ẹ̀rọ ìkàn-ìwé (stapler)", "Àpótí owó", "Ẹ̀rọ fax"], answer: 0, why: "Zapier ń kọ́ iṣẹ́ aládàáṣe láìsí kóòdù." },
          { objective: "O4", q: "Kí ni síso àwọn àyè pọ̀ (field mapping)?", options: ["Títẹ àwòrán ilẹ̀ jáde", "Yíya àwòrán oko", "Yíyan ọ̀rọ̀ aṣínà", "Sísọ fún irinṣẹ́ náà ibi tí ìsọfúnni kọ̀ọ̀kan máa lọ"], answer: 3, why: "Ó ń so àwọn àyè fọ́ọ̀mù pọ̀ mọ́ àwọn ọwọ̀n sheet." },
          { objective: "O5", q: "Ìsọfúnni wo ló yẹ kí o fi dán an wò?", options: ["Àlàyé oníbàárà gidi", "Àpẹẹrẹ tí a hùmọ̀", "Nọ́mbà káàdì", "Ọ̀rọ̀ wíwọlé báǹkì rẹ"], answer: 1, why: "Má ṣe dán an wò lórí oníbàárà gidi láéláé." },
          { objective: "O5", q: "Àkọ́pẹrẹ AI hùmọ̀ iye owó kan. Kí lo máa tún ṣe?", options: ["Ìtọ́ni ìgbésẹ̀ AI, lẹ́yìn náà tún dán an wò", "Kò sí nǹkan", "Fi ránṣẹ́ bẹ́ẹ̀ náà", "Pa òwò náà rẹ́"], answer: 0, why: "Ìtọ́ni tí ó yé ń dín òtítọ́ tí a hùmọ̀ kù." },
          { objective: "O6", q: "Kí ló dé tí a fi ń kọ àlàyé ojú-ìwé kan pẹ̀lú ọ̀nà pípa á?", options: ["Fún ẹwà", "Láti mú un gùn sí i", "Kí ẹlòmíì lè yé e tàbí dá a dúró", "Kò wúlò"], answer: 2, why: "Ẹnikẹ́ni gbọ́dọ̀ lè pa á kíákíá." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI Agents fún Iṣẹ́ Aládàáṣe nínú Òwò",
    questions: [
      { objective: "O1", q: "AI agent ni:", options: ["Ènìyàn", "Ètò AI tí ó lè yan díẹ̀ lára àwọn ìgbésẹ̀ tirẹ̀", "Òfin tí kò yí padà", "Ẹ̀rọ ìtẹ̀wé"], answer: 1, why: "Agent ń yan ìgbésẹ̀ láti dé ibi àfojúsùn." },
      { objective: "O1", q: "Níbo ló yẹ kí òwò kékeré bẹ̀rẹ̀?", options: ["Sọ ohun gbogbo di aládàáṣe lẹ́ẹ̀kan náà", "Agent tí ó dá dúró pátápátá pẹ̀lú ààyè sí báǹkì", "Kò sí nǹkan", "Iṣẹ́ aládàáṣe tí kò yí padà, lẹ́yìn náà ìgbésẹ̀ AI kan"], answer: 3, why: "Ohun tó rọrùn tí a sì mọ ohun tí yóò ṣe ní àkọ́kọ́." },
      { objective: "O1", q: "Èwo ló yẹ kí ó máa wà lọ́wọ́ ènìyàn nígbà gbogbo?", options: ["Ṣíṣe ìlà kan dáadáa", "Dída fọ́ọ̀mù kọ sínú sheet", "Fífi ìránnilétí kún kàlẹ́ńdà", "Níná owó"], answer: 3, why: "Ìpinnu nípa owó nílò ènìyàn." },
      { objective: "O2", q: "Ìgbésẹ̀ àkọ́kọ́ kí o tó sọ nǹkan di aládàáṣe ni láti:", options: ["Ra irinṣẹ́", "Kọ àwòrán ìgbésẹ̀ iṣẹ́ náà", "Tan án", "Gba ẹnìkan síṣẹ́"], answer: 1, why: "O kò lè sọ ohun tí o kò tíì kọ sílẹ̀ di aládàáṣe." },
      { objective: "O2", q: "Ìgbésẹ̀ \"Òfin\" ni èyí tí:", options: ["Ó jẹ mọ́ owó", "Ó jẹ́ ìpinnu ńlá", "Ó máa ń rí bákan náà nígbà gbogbo", "Kò yé"], answer: 2, why: "A lè sọ àwọn ìgbésẹ̀ Òfin di aládàáṣe." },
      { objective: "O2", q: "Ìgbésẹ̀ \"Ọ̀rọ̀\" lè gba:", options: ["Àkọ́pẹrẹ AI", "Ìsanwó", "Píparẹ́", "Kò sí nǹkan"], answer: 0, why: "AI ń ṣèrànwọ́ pẹ̀lú kíkọ̀wé." },
      { objective: "O3", q: "\"Fọ́ọ̀mù tuntun dé\" jẹ́ àpẹẹrẹ:", options: ["Àkọsílẹ̀", "Ìgbésẹ̀", "Ohun ìbẹ̀rẹ̀", "Ọ̀rọ̀ aṣínà"], answer: 2, why: "Ó ń bẹ̀rẹ̀ ọ̀nà iṣẹ́." },
      { objective: "O3", q: "\"Fi ìlà kan kún sheet\" jẹ́ àpẹẹrẹ:", options: ["Ìgbésẹ̀", "Ohun ìbẹ̀rẹ̀", "Ìfọwọ́sí", "Ọ̀nà pípa á"], answer: 0, why: "Àwọn ìgbésẹ̀ ń tẹ̀lé ohun ìbẹ̀rẹ̀." },
      { objective: "O3", q: "Nínú ọ̀nà iṣẹ́ tí ó ní ààbò, AI ń kọ àkọ́pẹrẹ èsì sí oníbàárà, lẹ́yìn náà:", options: ["Ó ń fi wọ́n ránṣẹ́ tààrà sí oníbàárà", "Ó ń fi wọ́n ránṣẹ́ sí ọ fún ìfọwọ́sí", "Ó ń pa wọ́n rẹ́", "Ó ń gbé wọn jáde fún gbogbo ènìyàn"], answer: 1, why: "Ìwọ ni yóò tẹ \"fi ránṣẹ́\"." },
      { objective: "O3", q: "Kí ló dé tí a fi ń kọ́kọ́ ya ọ̀nà iṣẹ́ sórí ìwé?", options: ["Kò wúlò", "Òfin ló pa á láṣẹ", "Fún ìgbádùn nìkan", "Láti rí gbogbo ìgbésẹ̀ àti irinṣẹ́ kí a tó kọ́ ọ"], answer: 3, why: "Ètò ṣíṣe ń dènà àṣìṣe." },
      { objective: "O4", q: "Nígbà tí o bá so àkáǹtì pọ̀ mọ́ irinṣẹ́ automation, ò ń:", options: ["Jẹ́ kí irinṣẹ́ náà lo app yẹn lẹ́yìn tí o bá wọlé", "Pa app náà rẹ́", "Pín in fún gbogbo ènìyàn", "San owó ìtanràn"], answer: 0, why: "Ìsopọ̀ ń fún irinṣẹ́ náà ní ààyè." },
      { objective: "O4", q: "Kí ló yẹ kí ìgbésẹ̀ AI gbà?", options: ["Ọ̀rọ̀ aṣínà", "Gbogbo ìsọfúnni oníbàárà", "Nọ́mbà káàdì", "Àwọn àyè tí ó nílò nìkan"], answer: 3, why: "Ìsọfúnni tí ó kéré jù tí ó nílò." },
      { objective: "O4", q: "Níbo lo ti máa ṣàyẹ̀wò ààlà ètò ọ̀fẹ́ irinṣẹ́ kan?", options: ["Fídíò àtijọ́ kan", "Ìfojúdíwọ̀n", "Ojú-òpó ìjọba irinṣẹ́ náà", "Olùdíje kan"], answer: 2, why: "Àwọn ètò ń yí padà." },
      { objective: "O5", q: "Ọ̀ràn àjèjì (edge case) ni:", options: ["Igun tábìlì", "Ohun àjèjì tí a fi sínú rẹ̀ tí ó lè ba iṣẹ́ jẹ́", "Àpẹẹrẹ déédéé", "Ọ̀rọ̀ aṣínà"], answer: 1, why: "Dán àwọn ohun àjèjì wò pẹ̀lú." },
      { objective: "O5", q: "Àpẹẹrẹ mélòó ló gbọ́dọ̀ yege kí o tó bẹ̀rẹ̀ lílò gidi nínú ẹ̀kọ́ yìí?", options: ["Ẹgbẹ̀rún kan", "Òdo", "Oníbàárà gidi kan", "Mẹ́ta: déédéé, àyè tí ó kù, ọ̀rọ̀ àjèjì"], answer: 3, why: "Wọ́n bo àwọn ìṣòro tí ó wọ́pọ̀." },
      { objective: "O5", q: "Tún ìṣòro ṣe nípa:", options: ["Fífojú fò wọ́n", "Yíyí ohun gbogbo padà lẹ́ẹ̀kan náà", "Yíyí ohun kan padà lẹ́ẹ̀kan kí o sì tún dán an wò", "Bíbẹ̀rẹ̀ lílò gidi bẹ́ẹ̀ náà"], answer: 2, why: "Àtúnṣe kan lẹ́ẹ̀kan ń fi ohun tí ó ṣiṣẹ́ hàn." },
      { objective: "O6", q: "Ìtàn ìṣiṣẹ́ (run history) ń fi hàn:", options: ["Gbogbo ìgbà tí iṣẹ́ aládàáṣe ṣiṣẹ́", "Ìtàn ẹ̀rọ ìwákiri rẹ", "Ọ̀rọ̀ aṣínà oníbàárà", "Ìwé owó orí"], answer: 0, why: "Ó ń ràn ọ́ lọ́wọ́ láti rí àṣìṣe." },
      { objective: "O6", q: "Ìgbà mélòó ló yẹ kí o máa ṣàyẹ̀wò iṣẹ́ aládàáṣe tí ó ń ṣiṣẹ́ gidi?", options: ["Láéláé", "Ó kéré tán lọ́sẹ̀ọ̀sẹ̀", "Lẹ́ẹ̀kan lẹ́yìn ọdún bíi mélòó kan", "Kìkì nígbà tí oníbàárà bá ṣàròyé"], answer: 1, why: "Àyẹ̀wò déédéé ń mú ìṣòro tètè." },
      { objective: "O6", q: "Wíwọlé onígbésẹ̀ méjì lórí àkáǹtì automation:", options: ["Kò dí ohun tí ó wúlò lọ́wọ́", "Ń jẹ́ kí ó ṣòro láti fọ́ wọlé", "A kò gbà á láàyè", "Ń pín ọ̀rọ̀ aṣínà rẹ"], answer: 1, why: "Ó ń fi àyẹ̀wò kejì kún un." },
      { objective: "O6", q: "Lóṣooṣù, o gbọ́dọ̀ béèrè bóyá iṣẹ́ aládàáṣe náà:", options: ["Ṣì ń fi àkókò pamọ́", "Ní orúkọ tí ó dára", "Ń lo app púpọ̀ sí i", "Gbajúmọ̀"], answer: 0, why: "Tí kò bá ṣèrànwọ́ mọ́, yí i padà tàbí dá a dúró." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 6, 8, 11, 14, 17] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Àwòrán ìgbésẹ̀", objective: "O2", notYet: "Àwọn ìgbésẹ̀ kan kù, tàbí a kò sàmì sí wọn.", meets: "Gbogbo ìgbésẹ̀ iṣẹ́ náà wà nínú rẹ̀, a sì sàmì sí wọn gẹ́gẹ́ bí Òfin, Ọ̀rọ̀, Ìpinnu tàbí Owó tàbí fífiránṣẹ́.", exceeds: "Ó kọ bí ìgbésẹ̀ kọ̀ọ̀kan ṣe ń pẹ́ tó lónìí." },
      { name: "Ètò ọ̀nà iṣẹ́", objective: "O3", notYet: "Kò sí ìgbésẹ̀ ìfọwọ́sí, tàbí nǹkan kan jáde tàbí a sanwó láìsí ènìyàn.", meets: "Ohun ìbẹ̀rẹ̀, àwọn ìgbésẹ̀ àti ìfọwọ́sí ènìyàn kí ohunkóhun tó jáde kúrò nínú òwò.", exceeds: "Àpótí kọ̀ọ̀kan ní orúkọ irinṣẹ́ rẹ̀, a sì ti ṣàyẹ̀wò àwọn ìsopọ̀." },
      { name: "Ó ń ṣiṣẹ́", objective: "O4", notYet: "Iṣẹ́ aládàáṣe náà kò ṣiṣẹ́, tàbí àwọn àyè wọ ibi tí kò tọ́.", meets: "Ó ń ṣiṣẹ́ láti ohun ìbẹ̀rẹ̀, ó so àwọn àyè pọ̀ dáadáa, ó sì ń fi àkọ́pẹrẹ AI ránṣẹ́ sí ọ.", exceeds: "Ìgbésẹ̀ AI ń gba àwọn àyè tí ó nílò nìkan, ó sì ní ìtọ́ni tí ó yé." },
      { name: "A dán an wò, a sì tún un ṣe", objective: "O5", notYet: "A dán an wò lórí ìsọfúnni oníbàárà gidi tàbí pẹ̀lú àpẹẹrẹ tí kò tó mẹ́ta.", meets: "Àpẹẹrẹ déédéé, àyè tí ó kù àti ọ̀rọ̀ àjèjì yege lẹ́yìn àtúnṣe.", exceeds: "Ó kọ ìṣòro kọ̀ọ̀kan tí a rí àti ìyípadà kan tí ó tún un ṣe." },
      { name: "Ṣíṣiṣẹ́ láìléwu", objective: "O6", notYet: "Kò sí àkọsílẹ̀, àyẹ̀wò ọ̀sẹ̀ọ̀sẹ̀ tàbí ọ̀nà láti pa á.", meets: "Àkọsílẹ̀, àyẹ̀wò ọ̀sẹ̀ọ̀sẹ̀ àti àlàyé ojú-ìwé kan pẹ̀lú ọ̀nà pípa á.", exceeds: "Wíwọlé onígbésẹ̀ méjì wà ní títan, a sì dín ààyè kù sí ohun tí ó nílò." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn olùdásílẹ̀ tí iṣẹ́ aládàáṣe wọn ṣì ń ṣiṣẹ́ láìléwu lẹ́yìn ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Wákàtí tí àwọn olùdásílẹ̀ sọ pé àwọn ń fi pamọ́ lọ́sẹ̀ lórí iṣẹ́ tí a sọ di aládàáṣe",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ òwò kékeré Koach Learn míì láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì",
      "Àkáǹtì ọ̀fẹ́ lórí irinṣẹ́ automation no-code, irinṣẹ́ fọ́ọ̀mù àti spreadsheet bí Google Sheets tàbí Excel",
      "Ìwé àti gègé fún àwòrán ìgbésẹ̀ àti yíya ọ̀nà iṣẹ́",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, pẹ̀lú àkókò láti kọ́ ọ àti dán an wò"
    ],
    facilitatorNotes: [
      "Ní kí akẹ́kọ̀ọ́ kọ̀ọ̀kan yan iṣẹ́ àtúnṣe gidi kékeré kan ṣáájú ìpàdé; èyí tí ó kéré dára jù fún iṣẹ́ aládàáṣe àkọ́kọ́.",
      "Lo àpẹẹrẹ tí a hùmọ̀ nìkan àti ímeèlì àyẹ̀wò tí ó jẹ́ ti akẹ́kọ̀ọ́; má ṣe lo ìsọfúnni oníbàárà gidi láéláé.",
      "Kí àwọn akẹ́kọ̀ọ́ tó bẹ̀rẹ̀ sí kọ́ ọ, ṣàyẹ̀wò pé gbogbo ètò ní ìfọwọ́sí ènìyàn kí ohunkóhun tó jáde tàbí kí a tó sanwó.",
      "Ran àwọn akẹ́kọ̀ọ́ lọ́wọ́ láti tan wíwọlé onígbésẹ̀ méjì lórí irinṣẹ́ automation àti àwọn àkáǹtì tí a so pọ̀.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};

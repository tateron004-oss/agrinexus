"use strict";

// Koach Learn course (Yoruba translation of artificial-intelligence/agentic-building-agents.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "agentic-building-agents-yo",
  lang: "yo",
  translationOf: "agentic-building-agents",
  category: "Artificial Intelligence",
  name: "Kíkọ́ Àwọn Agent AI",
  skills: "Kíkọ loop agent ní Python, Ṣíṣe àwọn irinṣẹ́ bí function, Bíbéèrè ìgbésẹ̀ tó kàn lọ́wọ́ model ní JSON, Pípa ìrántí àti àkọsílẹ̀ ìṣiṣẹ́ mọ́, Fífi òdiwọ̀n ìgbésẹ̀ àti ìtọ́jú àṣìṣe kún un",
  outcome: "kọ́ agent AI kékeré tó ń ṣiṣẹ́ ní Python nínú notebook Colab ọ̀fẹ́: loop tí ó ń béèrè ìgbésẹ̀ tó kàn lọ́wọ́ model, tí ó ń lo ọ̀kan nínú irinṣẹ́ méjì tí o kọ, tí ó ń dá èsì padà sí model, tí ó ń dúró ní òdiwọ̀n ìgbésẹ̀, tí ó sì ń kọ gbogbo ìgbésẹ̀ sílẹ̀.",
  about: [
    "Èyí ni ẹ̀kọ́ 3 nínú ètò Design, Build, and Deploy Autonomous AI Agents. O ti ní káàdì ètò agent (ẹ̀kọ́ 1) àti prompt tí o ti dán wò (ẹ̀kọ́ 2). Báyìí o máa kọ́ agent náà fúnra rẹ̀ ní Python lásán, kí o lè rí gbogbo apá rẹ̀ dípò kí framework kan fi wọ́n pamọ́.",
    "Orí 1 kọ́ loop náà: àwọn irinṣẹ́ bí function Python, prompt tí ó ń mú kí model yan ìgbésẹ̀ kan ní JSON, àti kóòdù tí ó ń ṣe ìgbésẹ̀ náà tí ó sì ń dá èsì padà. Orí 2 mú kí ó ṣeé gbẹ́kẹ̀lé: ìrántí, àkọsílẹ̀ ìṣiṣẹ́, òdiwọ̀n ìgbésẹ̀, ìtọ́jú àṣìṣe, àti ìwò kúkúrú sí àwọn framework agent tí o lè lò lẹ́yìn náà.",
    "O nílò àkáǹtì Google fún Colab àti kọ́kọ́rọ́ API model (ìpele ọ̀fẹ́ Gemini API láti ẹ̀kọ́ 2 dára, tàbí model ọ̀fẹ́ tí ó ń ṣiṣẹ́ lórí kọ̀mpútà rẹ pẹ̀lú Ollama). Kóòdù wà ní ìlà kúkúrú nínú àwọn ẹ̀kọ́. Ìdánwò ìmọ̀ kan wà ní òpin orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì parí ẹ̀kọ́ náà."
  ],
  finalTask: "Nínú notebook Colab, kọ́ agent kan pẹ̀lú irinṣẹ́ méjì tí o kọ fúnra rẹ (fún àpẹẹrẹ calculator(expression) àti lookup_note(topic) tí ó ń ka láti inú dictionary Python kékeré ti àwọn àkọsílẹ̀). Fún un ní àfojúsùn yìí: \"Wákàtí mélòó ni màá fi kàwé lóṣù yìí tí mo bá ń kàwé fún ìṣẹ́jú 45 ní ọjọ́ kíláàsì kọ̀ọ̀kan tí ó wà nínú àkọsílẹ̀ mi?\". Agent náà gbọ́dọ̀ yan irinṣẹ́ ní JSON, lò wọ́n, dá èsì padà, dúró ní òdiwọ̀n ìgbésẹ̀ 6, kojú ìdáhùn búburú kan láti ọ̀dọ̀ model láìsí pé ó já, kí ó sì tẹ àkọsílẹ̀ gbogbo ìgbésẹ̀ jáde.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà nínú ètò Design, Build, and Deploy Autonomous AI Agents tí wọ́n ti parí ẹ̀kọ́ 1 àti 2: àwọn oníṣòwò kékeré, àwọn tí ń yí iṣẹ́ padà, àwọn akẹ́kọ̀ọ́ àti òṣìṣẹ́ tí wọ́n fẹ́ kọ́ agent tó ń ṣiṣẹ́ fúnra wọn.",
    startingPoint: "Wọ́n ní káàdì ètò agent àti system prompt tí wọ́n ti dán wò tí ó ń dá JSON padà. Wọ́n lè ṣe ìlà Python kúkúrú nínú Google Colab, wọ́n sì lè pe model pẹ̀lú kọ́kọ́rọ́ API àṣírí, ṣùgbọ́n wọn kò tíì kọ loop agent rí.",
    gap: "Àwọn framework ń fi bí agent ṣe ń ṣiṣẹ́ pamọ́, nítorí náà tí ọ̀kan bá ṣe ohun tí kò tọ́, àwọn olùbẹ̀rẹ̀ kò lè mọ ìdí. Àwọn akẹ́kọ̀ọ́ nílò láti fi ọwọ́ ara wọn kọ́ loop náà, pẹ̀lú irinṣẹ́, ìrántí, àkọsílẹ̀ ìṣiṣẹ́, òdiwọ̀n ìgbésẹ̀ àti ìtọ́jú àṣìṣe, kí agent wọn lè ṣeé gbẹ́kẹ̀lé kí wọ́n sì lè wá àṣìṣe inú rẹ̀ (debug).",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn; kóòdù wà ní ìlà kúkúrú láti dà kọ",
      "Ẹ̀rọ: kọ̀mpútà tí ó ní browser; Colab ọ̀fẹ́ àti ìpele API ọ̀fẹ́ ní òdiwọ̀n",
      "Kò sí ìsọfúnni àdáni tàbí ti oníbàárà nínú irinṣẹ́ tàbí àkọsílẹ̀ àṣeṣe",
      "Kọ́kọ́rọ́ API máa ń wà nínú ètò àṣírí (secret), kì í ṣe nínú notebook láéláé",
      "Àkókò: ẹ̀kọ́ kúkúrú tí ọ̀kọ̀ọ̀kan ní iṣẹ́ àṣeṣe kan"
    ],
    prerequisites: "Ẹ̀kọ́ 1 àti 2 nínú Design, Build, and Deploy Autonomous AI Agents (\"Understanding LLMs and Prompt Engineering\")."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Nínú notebook Colab", action: "kọ irinṣẹ́ méjì bí function Python pẹ̀lú orúkọ tó yé, àpèjúwe ìlà kan àti àyẹ̀wò ohun tí wọ́n gbà", standard: "tí irinṣẹ́ kọ̀ọ̀kan sì ń ṣiṣẹ́ nígbà tí o bá pè é fúnra rẹ" },
    { id: "O2", condition: "Tí o bá ní àwọn irinṣẹ́ rẹ àti àfojúsùn kan", action: "kọ system prompt àti helper ask_model tí ó ń mú kí model fi ìgbésẹ̀ kan dáhùn ní JSON", standard: "kí model lè yan irinṣẹ́ tó tọ́ tàbí ìdáhùn ìkẹyìn" },
    { id: "O3", condition: "Tí model bá ti yan ìgbésẹ̀ kan", action: "kọ loop tí ó ń lo irinṣẹ́ tí a yàn tí ó sì ń dá èsì padà sí model", standard: "títí model yóò fi fúnni ní ìdáhùn ìkẹyìn" },
    { id: "O4", condition: "Nígbà tí agent bá ń ṣiṣẹ́", action: "jẹ́ kí history wà létòlétò kí o sì kọ gbogbo ìgbésẹ̀ sínú àkọsílẹ̀ ìṣiṣẹ́", standard: "pẹ̀lú nọ́mbà ìgbésẹ̀, ìdáhùn gangan, irinṣẹ́, ohun tí a fún un àti èsì fún ìgbésẹ̀ kọ̀ọ̀kan" },
    { id: "O5", condition: "Tí ìdáhùn búburú, àṣìṣe irinṣẹ́ tàbí ìṣiṣẹ́ gígùn bá wáyé", action: "fi òdiwọ̀n ìgbésẹ̀ kún un kí o sì kojú ìdáhùn búburú àti àṣìṣe irinṣẹ́", standard: "kí agent lè padà bọ̀ sípò tàbí dúró kí ó sì ròyìn láìsí pé ó já" },
    { id: "O6", condition: "Tí agent rẹ bá ti parí", action: "dán an wò lórí àfojúsùn lásán àti èyí tí kò ṣeé ṣe, kí o sì ṣàlàyé ìgbà tí framework máa ṣèrànwọ́", standard: "ní ṣíṣe gbogbo ìdánwò márùn-ún àti kíkọ ohun tí o tún ṣe sílẹ̀" }
  ],
  chapters: [
    {
      name: "Orí 1: Loop agent nínú kóòdù",
      lessons: [
        {
          objectives: ["O1"],
          title: "Irinṣẹ́ kò ju function lọ",
          minutes: 5,
          goal: "Kọ irinṣẹ́ méjì bí function Python pẹ̀lú orúkọ àti àpèjúwe tó yé.",
          text: [
            "Fún agent, irinṣẹ́ jẹ́ function tí kóòdù rẹ ń ṣe nígbà tí model bá béèrè. Model kì í ṣe nǹkan kankan fúnra rẹ̀: orúkọ irinṣẹ́ àti ohun tí ó fẹ́ fún un nìkan ni ó ń kọ. Kóòdù rẹ ló ń pinnu bóyá kí ó ṣe é.",
            "Bẹ̀rẹ̀ pẹ̀lú irinṣẹ́ tí kò léwu, tí ó kàn ń kà nìkan (read-only). Calculator kan: def calculator(expression): pẹ̀lú ara tí ó gba nọ́mbà àti + - * / ( ) . nìkan, lẹ́yìn náà ó ṣírò ìdáhùn. Ìwákiri àkọsílẹ̀ kan: NOTES = {'schedule': 'Class days: Mon, Wed, Thu'}, àti def lookup_note(topic): return NOTES.get(topic, 'no note found').",
            "Kó wọn jọ sínú dictionary kí loop lè rí wọn nípa orúkọ: TOOLS = {'calculator': calculator, 'lookup_note': lookup_note}. Kọ àpèjúwe ìlà kan fún ọ̀kọ̀ọ̀kan. Model ń ka àwọn àpèjúwe yẹn láti yan, nítorí náà wọ́n ṣe pàtàkì bí kóòdù náà."
          ],
          steps: ["Kọ irinṣẹ́ kọ̀ọ̀kan bí function Python tí ó gba ohun kan.", "Jẹ́ kí ó láàbò: ṣàyẹ̀wò ohun tí ó gbà kí o tó lò ó.", "Dá ọ̀rọ̀ tí model lè kà padà, pẹ̀lú ọ̀rọ̀ tó yé tí nǹkan bá kùnà.", "Fi àwọn irinṣẹ́ sínú dictionary TOOLS.", "Kọ àpèjúwe ìlà kan fún irinṣẹ́ kọ̀ọ̀kan."],
          words: [["Function", "apá kóòdù tí ó ní orúkọ, tí ó ń gba ohun kan tí ó sì ń dá èsì padà."], ["Dictionary", "àkójọ Python ti orúkọ àti iye wọn ní méjìméjì, bí {'calculator': calculator}."], ["Irinṣẹ́ read-only", "irinṣẹ́ tí ó kàn ń wo nǹkan nìkan, tí kò yí nǹkan kankan padà."]],
          slides: [
            { title: "Irinṣẹ́ jẹ́ function", bullets: ["Model kàn ń dárúkọ irinṣẹ́ àti ohun tí ó fẹ́ fún un", "Kóòdù rẹ ló ń pinnu bóyá kí ó ṣe é"] },
            { title: "Irinṣẹ́ àkọ́bẹ̀rẹ̀ méjì tí kò léwu", bullets: ["calculator(expression): ṣàyẹ̀wò ohun tí ó gbà, ṣírò", "lookup_note(topic): ń ka láti inú dictionary"] },
            { title: "Jẹ́ kí irinṣẹ́ rọrùn láti yàn", bullets: ["TOOLS = {name: function}", "Ìlà kan tó yé tí ó ṣàpèjúwe irinṣẹ́ kọ̀ọ̀kan", "Dá ọ̀rọ̀ tó yé padà tí nǹkan bá kùnà"] }
          ],
          tryIt: "Nínú notebook Colab tuntun, kọ calculator àti lookup_note, fi wọ́n sínú TOOLS, kí o sì dán ọ̀kọ̀ọ̀kan wò nípa pípè é fúnra rẹ: calculator('45*12/60') àti lookup_note('schedule').",
          youCanNow: "kọ irinṣẹ́ tí kò léwu bí function Python kí o sì forúkọ wọn sílẹ̀.",
          quickCheck: [
            { objective: "O1", q: "Nínú agent rẹ, kí ni irinṣẹ́?", options: ["Function Python tí kóòdù rẹ ń ṣe nígbà tí model bá béèrè", "Ètò kan nínú model", "Ojú-òpó wẹ́ẹ̀bù tí model ń lọ fúnra rẹ̀", "Model AI kejì"], answer: 0, why: "Model kàn ń béèrè; kóòdù rẹ ló ń ṣe function náà." },
            { objective: "O1", q: "Irinṣẹ́ lookup_note rẹ gba topic tí kò sí nínú àkọsílẹ̀. Kí ni ó yẹ kí ó ṣe?", options: ["Ṣe àkọsílẹ̀ kan tí ó jọ ọ́ jáde", "Já kí o lè kíyèsí i", "Dá ọ̀rọ̀ tó yé padà pé a kò rí topic náà", "Dá gbogbo dictionary àkọsílẹ̀ padà"], answer: 2, why: "Ọ̀rọ̀ tó yé ń jẹ́ kí model gbìyànjú nǹkan míì dípò kí ó máa fojú dá." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Bíbéèrè ìgbésẹ̀ tó kàn lọ́wọ́ model",
          minutes: 6,
          goal: "Kọ prompt tí ó ń mú kí model fi ìgbésẹ̀ kan dáhùn ní JSON.",
          text: [
            "Model nílò láti mọ àfojúsùn, àwọn irinṣẹ́ àti bí ìdáhùn ṣe gbọ́dọ̀ rí. System prompt rẹ ń to irinṣẹ́ kọ̀ọ̀kan pẹ̀lú àpèjúwe rẹ̀, ó sì sọ pé: fi JSON nìkan dáhùn, yálà {\"tool\": \"name\", \"input\": \"...\"} láti lo irinṣẹ́, tàbí {\"final\": \"...\"} nígbà tí àfojúsùn bá ti ṣẹ.",
            "Fi àwọn òfin láti inú káàdì ètò rẹ kún un: lo àwọn irinṣẹ́ tí a tò nìkan; ìgbésẹ̀ kan ní ìdáhùn kọ̀ọ̀kan; tí èsì irinṣẹ́ bá sọ pé ó kùnà, gbìyànjú ọ̀nà míì; má ṣe hùmọ̀ èsì irinṣẹ́ láéláé.",
            "Kọ helper kan kí ìyókù kóòdù rẹ má bàa bìkítà nípa ilé-iṣẹ́ model tí o ń lò: def ask_model(text): tí ó ń pe model rẹ (dà ìpè náà kọ láti inú quickstart ilé-iṣẹ́ rẹ, bí ti ẹ̀kọ́ 2) tí ó sì ń dá ọ̀rọ̀ ìdáhùn padà. Tí o bá yí ilé-iṣẹ́ padà lẹ́yìn náà, ask_model nìkan ló máa yí padà."
          ],
          steps: ["To orúkọ irinṣẹ́ kọ̀ọ̀kan àti àpèjúwe rẹ̀ sínú system prompt.", "Fi ìrísí ìdáhùn JSON méjì hàn: tool tàbí final.", "Fi àwọn òfin láti inú káàdì ètò rẹ kún un.", "Kọ ask_model(text) tí ó ń dá ọ̀rọ̀ ìdáhùn model padà.", "Dán an wò lẹ́ẹ̀kan pẹ̀lú àfojúsùn náà kí o sì tẹ ìdáhùn jáde."],
          words: [["Ìgbésẹ̀ (action)", "ohun kan tí agent pinnu láti ṣe tẹ̀lé, bí lílo irinṣẹ́ tàbí fífúnni ní ìdáhùn ìkẹyìn."], ["Helper function", "function kékeré tí ó ń fi àwọn kúlẹ̀kúlẹ̀ pamọ́, bí ilé-iṣẹ́ model tí o ń pè."]],
          slides: [
            { title: "Prompt náà sọ fún model", bullets: ["Àfojúsùn náà", "Àwọn irinṣẹ́ àti ohun tí ọ̀kọ̀ọ̀kan ń ṣe", "Ìrísí ìdáhùn JSON gangan"] },
            { title: "Ìrísí ìdáhùn méjì", bullets: ["{\"tool\": \"name\", \"input\": \"...\"}", "{\"final\": \"...\"} nígbà tí àfojúsùn bá ti ṣẹ"] },
            { title: "Òfin láti inú káàdì ètò rẹ", bullets: ["Irinṣẹ́ tí a tò nìkan, ìgbésẹ̀ kan ní ìdáhùn kọ̀ọ̀kan", "Tí irinṣẹ́ bá kùnà, gbìyànjú ọ̀nà míì", "Má ṣe hùmọ̀ èsì irinṣẹ́ láéláé"] },
            { title: "Fi ilé-iṣẹ́ model pamọ́", bullets: ["ask_model(text) ń dá ọ̀rọ̀ ìdáhùn padà", "Yí ilé-iṣẹ́ padà nípa yíyí function kan padà"] }
          ],
          tryIt: "Kọ system prompt àti ask_model. Fi àfojúsùn láti inú iṣẹ́ ìkẹyìn ránṣẹ́ kí o sì tẹ ìdáhùn jáde. Ṣé ó kọ́kọ́ yan lookup_note? Tí kò bá ṣe bẹ́ẹ̀, mú àpèjúwe àwọn irinṣẹ́ dára sí i.",
          youCanNow: "mú kí model yan ìgbésẹ̀ tó kàn ní JSON láti inú àkójọ irinṣẹ́.",
          quickCheck: [
            { objective: "O2", q: "Báwo ni ìdáhùn model ṣe yẹ kí ó rí nígbà tí ó fẹ́ lo irinṣẹ́?", options: ["Ìpínrọ̀ ọ̀rẹ́ tí ó ṣàlàyé ètò rẹ̀", "Ìgbésẹ̀ JSON kan tí ó dárúkọ irinṣẹ́ àti ohun tí ó fẹ́ fún un", "Kóòdù Python ti irinṣẹ́ náà", "Àkọsílẹ̀ gbogbo irinṣẹ́"], answer: 1, why: "Ìgbésẹ̀ JSON kan jẹ́ ohun tí loop rẹ lè kà kí ó sì ṣe." },
            { objective: "O2", q: "Model ń yan calculator ṣáájú kí ó tó ní àwọn ọjọ́ kíláàsì. Kí ni o máa kọ́kọ́ yí padà?", options: ["Yọ calculator kúrò", "Gbé òdiwọ̀n ìgbésẹ̀ sókè", "Yí padà sí framework", "Mú àpèjúwe àwọn irinṣẹ́ dára sí i kí ó lè mọ̀ pé kí ó kọ́kọ́ wo àkọsílẹ̀"], answer: 3, why: "Model ń yan irinṣẹ́ láti inú àpèjúwe wọn, nítorí náà àpèjúwe tó yé ń darí yíyàn rẹ̀." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ṣíṣe loop náà: ṣe é kí o sì dá èsì padà",
          minutes: 6,
          goal: "Kọ loop tí ó ń lo irinṣẹ́ tí a yàn tí ó sì ń dá èsì padà.",
          text: [
            "Loop náà kúrú. history = [] ń di ohun tí ó ti ṣẹlẹ̀ mú. Ní ìgbésẹ̀ kọ̀ọ̀kan: kó ọ̀rọ̀ jọ (system prompt, àfojúsùn, history), pe ask_model, kí o sì ka JSON náà (parse). Tí ó bá ní 'final', tẹ̀ ẹ́ jáde kí o sì dúró. Tí ó bá ní 'tool', wá a nínú TOOLS, lò ó pẹ̀lú input náà, kí o sì fi ìlà kan kún history: ìgbésẹ̀ náà àti èsì rẹ̀.",
            "Dídá èsì padà ni ìgbésẹ̀ \"observe\" (wíwò) láti ẹ̀kọ́ 1. Láìsí i, model máa béèrè ohun kan náà títí láé. Pẹ̀lú rẹ̀, model rí \"lookup_note(schedule) returned: Class days: Mon, Wed, Thu\", ó sì lè pinnu ìgbésẹ̀ tó kàn, bí lílo calculator.",
            "Tí model bá dárúkọ irinṣẹ́ tí kò sí nínú TOOLS, má ṣe já: fi \"Unknown tool: X. Use one of: calculator, lookup_note\" kún history kí o sì máa bá a lọ. Ọ̀rọ̀ tó yé tí a dá padà sí model ni ọ̀nà tí agent fi ń padà bọ̀ sípò látinú àṣìṣe ara rẹ̀."
          ],
          steps: ["history = []", "Kó ọ̀rọ̀ jọ: system prompt, àfojúsùn, history.", "Pe ask_model kí o sì ka JSON náà.", "Tí ó bá jẹ́ 'final': tẹ̀ ẹ́ jáde kí o sì dúró.", "Tí ó bá jẹ́ 'tool': lò ó láti TOOLS kí o sì fi ìgbésẹ̀ àti èsì kún history."],
          words: [["History", "àkọsílẹ̀ tí ń gùn sí i ti àwọn ìgbésẹ̀ àti èsì tí agent ti rí nínú ìṣiṣẹ́ yìí."], ["Observation (àkíyèsí)", "èsì irinṣẹ́ kan, tí a dá padà sí model."]],
          slides: [
            { title: "Ìgbésẹ̀ kọ̀ọ̀kan nínú loop", bullets: ["Kó ọ̀rọ̀ jọ: prompt, àfojúsùn, history", "Béèrè lọ́wọ́ model, ka JSON", "Final? Dúró. Tool? Lò ó."] },
            { title: "Dá èsì padà", bullets: ["Fi ìgbésẹ̀ àti èsì kún history", "Model rí i ní ìgbésẹ̀ tó kàn", "Láìsí i, agent á máa tún ara rẹ̀ ṣe"] },
            { title: "Irinṣẹ́ tí a kò mọ̀?", bullets: ["Má ṣe já", "Sọ fún model irinṣẹ́ tí ó wà", "Jẹ́ kí ó tún gbìyànjú"] }
          ],
          tryIt: "Kọ loop náà kí o sì lò ó lórí àfojúsùn iṣẹ́ ìkẹyìn. Tẹ history jáde lẹ́yìn ìgbésẹ̀ kọ̀ọ̀kan. Ka iye ìgbésẹ̀ tí ó gbà kí ó tó dé ìdáhùn ìkẹyìn.",
          youCanNow: "kọ loop agent tí ó ń lo irinṣẹ́ tí ó sì ń dá èsì padà sí model.",
          quickCheck: [
            { objective: "O3", q: "Kí ni ìgbésẹ̀ observe nínú loop?", options: ["Fífi èsì irinṣẹ́ kún history kí model lè rí i", "Títẹ ìdáhùn ìkẹyìn jáde", "Yíyan irinṣẹ́ tí o máa kọ", "Ṣíṣàyẹ̀wò kọ́kọ́rọ́ API"], answer: 0, why: "Dídá èsì padà ń jẹ́ kí model pinnu ìgbésẹ̀ tó kàn láti inú ohun tí ó ṣẹlẹ̀." },
            { objective: "O3", q: "Agent rẹ ń pe irinṣẹ́ kan náà léraléra. Kí ni ojútùú tí ó ṣeé ṣe jù?", options: ["Fi irinṣẹ́ púpọ̀ sí i kún un", "Rí i dájú pé èsì irinṣẹ́ kọ̀ọ̀kan ń wọ inú history", "Dín system prompt kù", "Lo notebook míì"], answer: 1, why: "Láìsí èsì nínú history, model kò mọ̀ pé ìgbésẹ̀ náà ti ṣẹlẹ̀ tẹ́lẹ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Loop agent nínú kóòdù",
        questions: [
          { objective: "O1", q: "Ta ló ń ṣe irinṣẹ́ gan-an nínú agent?", options: ["Model", "Browser olùlò", "Kóòdù rẹ", "Ojú-òpó wẹ́ẹ̀bù irinṣẹ́ náà"], answer: 2, why: "Model kàn ń dárúkọ irinṣẹ́; kóòdù rẹ ló ń pinnu tí ó sì ń ṣe é." },
          { objective: "O1", q: "Kí ló dé tí irinṣẹ́ kọ̀ọ̀kan nílò àpèjúwe ìlà kan tó yé?", options: ["Model ń kà á láti yan irinṣẹ́ tó tọ́", "Ó ń mú kí kóòdù yára", "Python ló béèrè fún un", "Ó ń fi irinṣẹ́ pamọ́ fún model"], answer: 0, why: "Àpèjúwe ni ọ̀nà tí model fi ń mọ ohun tí irinṣẹ́ kọ̀ọ̀kan wà fún." },
          { objective: "O3", q: "Model dáhùn {\"final\": \"About 27 hours\"}. Kí ni loop máa ṣe?", options: ["Lo calculator", "Bẹ̀rẹ̀ láti ìbẹ̀rẹ̀", "Béèrè ọ̀rọ̀ aṣínà lọ́wọ́ olùlò", "Tẹ ìdáhùn jáde kí ó sì dúró"], answer: 3, why: "Ìdáhùn final túmọ̀ sí pé àfojúsùn ti ṣẹ." },
          { objective: "O2", q: "Kí ni ìdí helper ask_model?", options: ["Láti ṣe irinṣẹ́", "Láti pa kúlẹ̀kúlẹ̀ ilé-iṣẹ́ model mọ́ sí ibì kan", "Láti fi kọ́kọ́rọ́ API sínú kóòdù", "Láti fo loop"], answer: 1, why: "Yíyí ilé-iṣẹ́ padà wá túmọ̀ sí yíyí function kan padà." },
          { objective: "O3", q: "Model béèrè irinṣẹ́ kan tí orúkọ rẹ̀ ń jẹ́ \"search\" tí o kò kọ. Ìdáhùn tó dára jù?", options: ["Já kí o lè kíyèsí i", "Sọ fún model irinṣẹ́ tí ó wà kí o sì máa bá a lọ", "Lo ìwákiri èyíkéyìí tí o bá rí", "Dá agent dúró títí láé"], answer: 1, why: "Èsì tó yé ń jẹ́ kí agent padà bọ̀ sípò." }
        ]
      }
    },
    {
      name: "Orí 2: Mímú kí agent ṣeé gbẹ́kẹ̀lé",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ìrántí àti àkọsílẹ̀ ìṣiṣẹ́",
          minutes: 5,
          goal: "Jẹ́ kí ìrántí ìgbà kúkúrú wà létòlétò kí o sì kọ gbogbo ìgbésẹ̀ sílẹ̀.",
          text: [
            "Ìrántí ìgbà kúkúrú ni àkọsílẹ̀ history tí o ti ní. Ó ń gùn sí i ní ìgbésẹ̀ kọ̀ọ̀kan, gbogbo ohun tí ó wà nínú rẹ̀ sì ń lọ sí model, èyí tí ó ń ná token àti àkókò. Fún ìṣiṣẹ́ gígùn, pa àwọn ìgbésẹ̀ díẹ̀ tó kẹ́yìn mọ́ ní kíkún, kí o sì fi àkópọ̀ ìlà kan rọ́pò àwọn ìgbésẹ̀ àtijọ́.",
            "Ìrántí ìgbà pípẹ́ ni ohunkóhun tí a fi pamọ́ láàárín ìṣiṣẹ́ kan sí òmíràn: fáìlì àkọsílẹ̀, spreadsheet, database kékeré. Fi ohun tí agent nílò gan-an nígbà míì nìkan pamọ́, má sì ṣe fi ìsọfúnni àdáni tí o kò nílò pamọ́ láéláé.",
            "Àkọsílẹ̀ ìṣiṣẹ́ (run log) wà fún ìwọ, kì í ṣe fún model. Fún ìgbésẹ̀ kọ̀ọ̀kan, kọ nọ́mbà ìgbésẹ̀, ìdáhùn gangan ti model, irinṣẹ́ àti input, èsì àti àkókò. Nígbà tí agent bá ṣe ohun àjèjì, log náà máa sọ ìdí fún ọ. Ọ̀nà kan tó rọrùn: log.append({'step': n, 'reply': reply, 'result': result}) kí o sì tẹ̀ ẹ́ jáde ní òpin."
          ],
          words: [["Ìrántí ìgbà kúkúrú", "ohun tí agent ń rí nínú ìṣiṣẹ́ kan: history títí di ìsinsìnyí."], ["Ìrántí ìgbà pípẹ́", "ìsọfúnni tí a fi pamọ́ láàárín ìṣiṣẹ́, bí fáìlì àkọsílẹ̀."], ["Àkọsílẹ̀ ìṣiṣẹ́ (run log)", "àkọsílẹ̀ rẹ ti gbogbo ìgbésẹ̀ tí agent gbé, fún àyẹ̀wò àti wíwá àṣìṣe."]],
          slides: [
            { title: "Ìrántí ìgbà kúkúrú", bullets: ["Àkọsílẹ̀ history, tí a ń fi ránṣẹ́ ní ìgbésẹ̀ kọ̀ọ̀kan", "History gígùn ń ná token àti àkókò", "Ṣe àkópọ̀ àwọn ìgbésẹ̀ àtijọ́"] },
            { title: "Ìrántí ìgbà pípẹ́", bullets: ["A fi pamọ́ láàárín ìṣiṣẹ́: fáìlì tàbí database", "Fi ohun tí a nílò nìkan pamọ́", "Kò sí ìsọfúnni àdáni tí o kò nílò"] },
            { title: "Àkọsílẹ̀ ìṣiṣẹ́", bullets: ["Ìgbésẹ̀, ìdáhùn gangan, irinṣẹ́, input, èsì, àkókò", "Fún ìwọ, kì í ṣe fún model", "Kà á nígbà tí agent bá ṣe ohun àjèjì"] }
          ],
          tryIt: "Fi àkọsílẹ̀ log kún agent rẹ kí o sì kọ ìgbésẹ̀ kọ̀ọ̀kan sínú rẹ̀. Ṣe é, lẹ́yìn náà tẹ log jáde bí tábìlì tó mọ́: ìgbésẹ̀, irinṣẹ́, input, èsì.",
          youCanNow: "ṣàkóso ìrántí agent kí o sì pa àkọsílẹ̀ ìṣiṣẹ́ tí o lè kà mọ́.",
          quickCheck: [
            { objective: "O4", q: "Kí ni ìrántí ìgbà kúkúrú nínú agent rẹ?", options: ["Fáìlì tí a fi pamọ́ títí láé", "Dátà tí a fi kọ́ model", "Àkọsílẹ̀ history fún ìṣiṣẹ́ yìí", "Dictionary àkọsílẹ̀"], answer: 2, why: "Ìrántí ìgbà kúkúrú ni history tí agent ń pa mọ́ nínú ìṣiṣẹ́ kan." },
            { objective: "O4", q: "Agent fúnni ní ìdáhùn àjèjì, o sì fẹ́ mọ ìdí. Kí ni o máa wò?", options: ["Ìdáhùn ìkẹyìn nìkan", "Kọ́kọ́rọ́ API", "Àpèjúwe àwọn irinṣẹ́ nìkan", "Àkọsílẹ̀ ìṣiṣẹ́ ti gbogbo ìgbésẹ̀"], answer: 3, why: "Log náà fi ìdáhùn, irinṣẹ́, input àti èsì kọ̀ọ̀kan hàn, kí o lè rí ibi tí ó ti ṣìnà." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Òdiwọ̀n ìgbésẹ̀, ìdáhùn búburú àti àṣìṣe",
          minutes: 6,
          goal: "Fi òdiwọ̀n ìgbésẹ̀ kún un kí o sì kojú ìdáhùn búburú láti model àti àṣìṣe irinṣẹ́.",
          text: [
            "Gbogbo loop nílò òrùlé: MAX_STEPS = 6 àti for step in range(MAX_STEPS): dípò loop tí ó ń lọ títí láé. Tí ó bá dé òdiwọ̀n náà láìní ìdáhùn ìkẹyìn, dúró kí o sì ròyìn \"Stopped: step limit reached\" pẹ̀lú log náà.",
            "Ìdáhùn búburú máa ń ṣẹlẹ̀: ọ̀rọ̀ àfikún yí JSON ká, kọ́kọ́rọ́ (key) kan sọnù, ìdáhùn òfo. Ka JSON náà nínú try àti except. Tí ó bá kùnà, fi \"Your last reply was not valid JSON. Reply with only JSON.\" kún history kí o sì jẹ́ kí ìgbésẹ̀ tó kàn tún gbìyànjú. Ka iye wọn; tí méjì bá tẹ̀lé ara wọn, dúró.",
            "Irinṣẹ́ náà máa ń kùnà: calculator gba lẹ́tà, fáìlì kan sọnù. Irinṣẹ́ kọ̀ọ̀kan gbọ́dọ̀ mú àṣìṣe tirẹ̀ kí ó sì dá ọ̀rọ̀ tó yé padà bí \"calculator error: only numbers and + - * / allowed\". Model lè tún input rẹ̀ ṣe ní ìgbésẹ̀ tó kàn."
          ],
          steps: ["Ṣètò MAX_STEPS kí o sì ṣe loop pẹ̀lú range(MAX_STEPS).", "Ka ìdáhùn nínú try / except.", "Tí ìdáhùn bá burú, sọ fún model kí o sì máa bá a lọ.", "Dúró lẹ́yìn ìdáhùn búburú méjì tí ó tẹ̀lé ara wọn.", "Jẹ́ kí irinṣẹ́ kọ̀ọ̀kan dá ọ̀rọ̀ àṣìṣe tó yé padà dípò kí ó já."],
          words: [["Òdiwọ̀n ìgbésẹ̀", "iye ìgbésẹ̀ tó pọ̀ jù tí agent lè gbé nínú ìṣiṣẹ́ kan."], ["Exception", "àṣìṣe tí ó ṣẹlẹ̀ nígbà tí ètò ń ṣiṣẹ́; try / except ló ń mú un."]],
          slides: [
            { title: "Máa ṣètò òrùlé nígbà gbogbo", bullets: ["MAX_STEPS = 6", "for step in range(MAX_STEPS):", "Ní òdiwọ̀n: dúró kí o sì ròyìn"] },
            { title: "Ìdáhùn búburú láti model", bullets: ["Ka JSON nínú try / except", "Sọ fún model: fi JSON nìkan dáhùn", "Ìdáhùn búburú méjì tí ó tẹ̀lé ara wọn: dúró"] },
            { title: "Àṣìṣe irinṣẹ́", bullets: ["Irinṣẹ́ kọ̀ọ̀kan ń mú àṣìṣe tirẹ̀", "Dá ọ̀rọ̀ àṣìṣe tó yé padà", "Model tún input rẹ̀ ṣe ní ìgbésẹ̀ tó kàn"] }
          ],
          tryIt: "Dán kóòdù ààbò rẹ wò: fún ìgbà díẹ̀, jẹ́ kí ask_model dá \"hello\" padà ní ìgbésẹ̀ 2, kí o sì fi input 'abc' ránṣẹ́ sí calculator. Ṣàyẹ̀wò pé agent padà bọ̀ sípò, àti pé ó dúró ní òdiwọ̀n ìgbésẹ̀ nígbà tí o bá ṣètò MAX_STEPS = 2.",
          youCanNow: "dá agent dúró kí ó má lọ títí láé kí o sì ràn án lọ́wọ́ láti padà bọ̀ sípò látinú ìdáhùn búburú àti àṣìṣe irinṣẹ́.",
          quickCheck: [
            { objective: "O5", q: "Kí ni MAX_STEPS ń ṣe?", options: ["Ó ń fi òrùlé lé iye ìgbésẹ̀ tí agent lè gbé", "Ó ń mú kí model dáhùn kíákíá", "Ó ń dín iye irinṣẹ́ tí o lè kọ kù", "Ó ń sọ bí log ṣe lè gùn tó"], answer: 0, why: "Òdiwọ̀n ìgbésẹ̀ ń dá ìṣiṣẹ́ tí ì bá máa lọ láìdúró dúró." },
            { objective: "O5", q: "Model dáhùn \"hello\" dípò JSON ní ìgbésẹ̀ kan. Kí ni agent rẹ yẹ kí ó ṣe?", options: ["Já", "Ka \"hello\" sí ìdáhùn ìkẹyìn", "Sọ fún model pé kí ó fi JSON nìkan dáhùn kí ó sì máa bá a lọ", "Bẹ̀rẹ̀ gbogbo ìṣiṣẹ́ láti ìgbésẹ̀ 1"], answer: 2, why: "A lè padà bọ̀ sípò látinú ìdáhùn búburú kan; agent máa dúró lẹ́yìn ìdáhùn búburú tí ó tún ṣẹlẹ̀ léraléra nìkan." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Framework, àti píparí agent àkọ́kọ́ rẹ",
          minutes: 6,
          goal: "Parí agent rẹ kí o sì dán an wò, kí o sì mọ ìgbà tí framework máa ṣèrànwọ́.",
          text: [
            "Framework agent jẹ́ library tí ó ń fún ọ ní loop, ìtọ́jú irinṣẹ́ àti ìrántí tí a ti ṣe sílẹ̀. Àwọn tí a mọ̀ dáadáa ni LangGraph, CrewAI, OpenAI Agents SDK àti Agent Development Kit ti Google, ọ̀pọ̀ ilé-iṣẹ́ model sì ní native tool calling, níbi tí model ti ń dá ìpè irinṣẹ́ tí ó ní ìlànà padà fún ọ. Wọ́n máa ń yí padà lóòrèkóòrè, nítorí náà ka ìwé àlàyé (documentation) iṣẹ́ kọ̀ọ̀kan fúnra rẹ̀ fún ìṣètò lọ́wọ́lọ́wọ́.",
            "Kíkọ́ loop náà fúnra rẹ ní àkọ́kọ́ túmọ̀ sí pé o lóye ohun tí framework ń ṣe fún ọ, o sì lè wá àṣìṣe inú rẹ̀ nígbà tí nǹkan bá yí padà. Ọ̀pọ̀ agent gidi ṣì jẹ́ loop lásán bí tìrẹ.",
            "Kí o tó sọ pé agent rẹ ti parí, dán an wò bí ti ẹ̀kọ́ 2: àfojúsùn mẹ́ta tí ó yẹ kí ó parí, ọ̀kan tí kò lè parí (ó yẹ kí ó sọ bẹ́ẹ̀, kí ó má hùmọ̀ ìdáhùn), àti input búburú kan. Ka log fún ìṣiṣẹ́ kọ̀ọ̀kan."
          ],
          steps: ["Ṣe agent lórí àfojúsùn mẹ́ta tí ó yẹ kí ó parí.", "Ṣe àfojúsùn kan tí kò lè parí: ó yẹ kí ó sọ bẹ́ẹ̀.", "Ṣe input búburú kan.", "Ka log fún ìṣiṣẹ́ kọ̀ọ̀kan.", "Tún àìlera kan ṣe kí o sì tún gbogbo márùn-ún ṣe."],
          words: [["Framework", "library tí a ti ṣe sílẹ̀ tí ó ń ṣe àwọn apá tí ó wọ́pọ̀ nínú ètò fún ọ."], ["Native tool calling", "ẹ̀yà model kan níbi tí model ti ń dá ìbéèrè tí ó ní ìlànà padà láti lo irinṣẹ́."]],
          slides: [
            { title: "Àwọn framework agent", bullets: ["Loop, irinṣẹ́ àti ìrántí tí a ti ṣe sílẹ̀", "LangGraph, CrewAI, OpenAI Agents SDK, Google ADK", "Wọ́n máa ń yí padà: ka ìwé àlàyé tiwọn"] },
            { title: "Ìdí tí o fi máa kọ́kọ́ fi ọwọ́ kọ́ ọ", bullets: ["O lóye ohun tí framework ń ṣe", "O lè wá àṣìṣe inú rẹ̀", "Ọ̀pọ̀ agent gidi jẹ́ loop lásán"] },
            { title: "Dán an wò kí o tó sọ pé ó ti parí", bullets: ["Àfojúsùn mẹ́ta tí ó yẹ kí ó parí", "Ọ̀kan tí kò lè parí: ó yẹ kí ó sọ bẹ́ẹ̀", "Input búburú kan; ka gbogbo log"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: parí agent irinṣẹ́ méjì rẹ lórí àfojúsùn wákàtí ìkàwé pẹ̀lú òdiwọ̀n ìgbésẹ̀ 6, ìdáhùn búburú kan tí ó padà bọ̀ sípò àti log gbogbo ìgbésẹ̀ tí a tẹ̀ jáde. Lẹ́yìn náà ṣe ìdánwò márùn-ún tí ó wà lókè kí o sì kọ gbólóhùn méjì nípa ohun tí o tún ṣe.",
          youCanNow: "kọ́ agent AI tó ń ṣiṣẹ́ ní Python lásán, dán an wò, kí o sì ṣàlàyé rẹ̀.",
          quickCheck: [
            { objective: "O6", q: "Kí ni framework agent?", options: ["Òfin tí ó kọ̀ fún irinṣẹ́", "Loop, irinṣẹ́ àti ìrántí tí a ti ṣe sílẹ̀ tí o lè lò dípò kíkọ tìrẹ", "Model ọ̀fẹ́ kan", "Irú kọ́kọ́rọ́ API kan"], answer: 1, why: "Framework ń kó àwọn apá tí o fi ọwọ́ kọ́ nínú ẹ̀kọ́ yìí jọ." },
            { objective: "O6", q: "O fún agent rẹ ní àfojúsùn tí kò lè dé pẹ̀lú irinṣẹ́ rẹ̀. Kí ni agent tó dára yẹ kí ó ṣe?", options: ["Sọ pé òun kò lè parí kí ó sì fi ohun tí ó gbìyànjú hàn", "Hùmọ̀ ìdáhùn tí ó dún bí òótọ́", "Máa ṣiṣẹ́ lọ títí láé", "Pe irinṣẹ́ tí kò sí"], answer: 0, why: "Agent olóòótọ́ ń ròyìn ohun tí kò lè ṣe dípò kí ó hùmọ̀ nǹkan." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Mímú kí agent ṣeé gbẹ́kẹ̀lé",
        questions: [
          { objective: "O4", q: "Kí ló dé tí a fi ń ṣe àkópọ̀ àwọn ìgbésẹ̀ àtijọ́ nínú ìṣiṣẹ́ gígùn?", options: ["Model kì í gbàgbé nǹkan kankan lọ́nàkọnà", "Ó ń fi àṣìṣe pamọ́", "Python kò lè di àkọsílẹ̀ gígùn mú", "History gígùn ń ná token àti àkókò"], answer: 3, why: "Gbogbo ohun tí ó wà nínú history ni a ń fi ránṣẹ́ ní ìgbésẹ̀ kọ̀ọ̀kan." },
          { objective: "O4", q: "Ta ni àkọsílẹ̀ ìṣiṣẹ́ wà fún jù lọ?", options: ["Ìwọ, láti rí ìdí tí agent fi ṣe ohun tí ó ṣe", "Model", "Ilé-iṣẹ́ API", "Àwọn olùlò míì"], answer: 0, why: "Log wà fún àyẹ̀wò àti wíwá àṣìṣe." },
          { objective: "O5", q: "Kí ni ó yẹ kí ó ṣẹlẹ̀ nígbà tí agent bá dé MAX_STEPS láìní ìdáhùn ìkẹyìn?", options: ["Máa bá a lọ bẹ́ẹ̀", "Hùmọ̀ ìdáhùn ìkẹyìn", "Dúró kí o sì ròyìn pé ó ti dé òdiwọ̀n", "Pa log rẹ́"], answer: 2, why: "Ròyìn pẹ̀lú òtítọ́ kí o sì fi log hàn." },
          { objective: "O5", q: "Calculator gba input 'abc'. Irinṣẹ́ tí a kọ́ dáadáa:", options: ["Mú gbogbo agent já", "Pa notebook rẹ́", "Dá òdo padà ní ìdákẹ́jẹ́ẹ́", "Dá ọ̀rọ̀ àṣìṣe tó yé tí model lè lò padà"], answer: 3, why: "Ọ̀rọ̀ àṣìṣe tó yé ń jẹ́ kí model tún input rẹ̀ ṣe." },
          { objective: "O6", q: "Èwo ni ìdánwò tó dára kí o tó sọ pé agent ti parí?", options: ["Àfojúsùn tí ó dájú pé ó máa parí nìkan", "Kò sí ìdánwò, kàn tú u jáde", "Àfojúsùn tí kò lè parí, láti rí i pé ó sọ bẹ́ẹ̀", "Ṣíṣe é lẹ́ẹ̀kan"], answer: 2, why: "\"Mi ò lè ṣe é\" tí ó jẹ́ òótọ́ dára ju ìdáhùn tí a hùmọ̀ lọ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Kíkọ́ Àwọn Agent AI",
    questions: [
      { objective: "O1", q: "Fún agent, irinṣẹ́ ni:", options: ["Ojú-òpó wẹ́ẹ̀bù kan", "Function tí kóòdù rẹ ń ṣe nígbà tí model bá béèrè", "Model fúnra rẹ̀", "Ọ̀rọ̀ aṣínà kan"], answer: 1, why: "Irinṣẹ́ jẹ́ function; model kàn ń dárúkọ wọn." },
      { objective: "O1", q: "Irú irinṣẹ́ wo ló láàbò jù láti fi bẹ̀rẹ̀?", options: ["Ìwákiri read-only", "Irinṣẹ́ tí ń pa fáìlì rẹ́", "Irinṣẹ́ ìsanwó", "Ohun tí ń fi email ránṣẹ́"], answer: 0, why: "Irinṣẹ́ read-only kì í yí nǹkan kankan padà." },
      { objective: "O1", q: "TOOLS = {'calculator': calculator} ń jẹ́ kí loop:", options: ["Rí irinṣẹ́ nípa orúkọ rẹ̀", "Fo model", "Fi kọ́kọ́rọ́ API pamọ́", "Mú kí model yára"], answer: 0, why: "Dictionary náà so orúkọ mọ́ function." },
      { objective: "O1", q: "Irinṣẹ́ yẹ kí ó ṣàyẹ̀wò input rẹ̀ nítorí pé:", options: ["Python ló béèrè fún un", "Model lè fi ohun tí kò láàbò tàbí tí kò tọ́ ránṣẹ́", "Ó ń dín token kù", "Ó ń fi èsì pamọ́"], answer: 1, why: "Má ṣe gbẹ́kẹ̀lé ohun tí model kọ láìwò." },
      { objective: "O2", q: "Ìdáhùn wo ló túmọ̀ sí pé agent fẹ́ lo irinṣẹ́?", options: ["{\"final\": \"done\"}", "\"hello\"", "{\"tool\": \"calculator\", \"input\": \"2+2\"}", "Ìdáhùn òfo"], answer: 2, why: "Ìrísí tool dárúkọ irinṣẹ́ àti input rẹ̀." },
      { objective: "O2", q: "Òfin kan nínú system prompt tí ó ń ran òtítọ́ lọ́wọ́ ni:", options: ["\"Má ṣe ka ìkùnà sí.\"", "\"Máa dáhùn ní ìgbésẹ̀ kan nígbà gbogbo.\"", "\"Lo irinṣẹ́ èyíkéyìí tí o fẹ́.\"", "\"Má ṣe hùmọ̀ èsì irinṣẹ́ láéláé.\""], answer: 3, why: "Èsì tí a hùmọ̀ jẹ́ ìkùnà tí ó wọ́pọ̀ fún agent." },
      { objective: "O2", q: "ask_model(text) wúlò nítorí pé:", options: ["Ó ń sọ kọ́kọ́rọ́ di gbangba", "Ó ń ṣe àwọn irinṣẹ́", "Ó ń pa kúlẹ̀kúlẹ̀ ilé-iṣẹ́ model mọ́ sí ibì kan", "Ó ń yọ loop kúrò"], answer: 2, why: "Yíyí ilé-iṣẹ́ padà ń yí function yẹn nìkan padà." },
      { objective: "O3", q: "Dídá èsì irinṣẹ́ padà sínú history ni:", options: ["Ìgbésẹ̀ observe", "Ìgbésẹ̀ think", "Trigger", "Ìdáhùn ìkẹyìn"], answer: 0, why: "Wíwo èsì ń jẹ́ kí model yan ìgbésẹ̀ tó kàn." },
      { objective: "O3", q: "Láìdá èsì padà, ó ṣeé ṣe kí agent:", options: ["Parí kíákíá", "Kọ JSON tó dára jù", "Wọ́n kù", "Tún ìgbésẹ̀ kan náà ṣe"], answer: 3, why: "Kò mọ ohun tí ó ṣẹlẹ̀ rí." },
      { objective: "O3", q: "Model dárúkọ irinṣẹ́ tí a kò mọ̀. Loop yẹ kí ó:", options: ["Já", "Sọ orúkọ irinṣẹ́ tó tọ́ fún model kí ó sì máa bá a lọ", "Fi irinṣẹ́ tuntun sórí ẹ̀rọ fúnra rẹ̀", "Fún un ní àṣẹ lórí gbogbo kọ̀mpútà"], answer: 1, why: "Èsì tó yé ń ran agent lọ́wọ́ láti padà bọ̀ sípò." },
      { objective: "O4", q: "Ìrántí ìgbà kúkúrú nínú agent rẹ ni:", options: ["Fáìlì tí a fi pamọ́ títí láé", "Àkọsílẹ̀ history fún ìṣiṣẹ́ yìí", "Àkáǹtì Google rẹ", "Dátà tí a fi kọ́ model"], answer: 1, why: "History ni ohun tí model ń rí nínú ìṣiṣẹ́ yìí." },
      { objective: "O4", q: "Ìrántí ìgbà pípẹ́ yẹ kí ó tọ́jú:", options: ["Gbogbo nǹkan, pẹ̀lú ìsọfúnni àdáni", "Kò sí nǹkan kankan láéláé", "Kọ́kọ́rọ́ API rẹ", "Ohun tí agent nílò nígbà míì nìkan"], answer: 3, why: "Fi ohun tí a nílò nìkan pamọ́; yẹra fún ìsọfúnni àdáni." },
      { objective: "O4", q: "Àkọsílẹ̀ ìṣiṣẹ́ tó dára ń kọ:", options: ["Ìgbésẹ̀, ìdáhùn gangan, irinṣẹ́, input àti èsì", "Ìdáhùn ìkẹyìn nìkan", "Ọ̀rọ̀ aṣínà rẹ", "Kò sí nǹkan kankan"], answer: 0, why: "Ìgbésẹ̀ ní kíkún ń jẹ́ kí o rí ìdí tí nǹkan fi ṣẹlẹ̀." },
      { objective: "O5", q: "for step in range(MAX_STEPS): ń fún agent ní:", options: ["Ìgbésẹ̀ àìlópin", "Irinṣẹ́ púpọ̀ sí i", "Òrùlé lórí iye ìgbésẹ̀", "Model tí ó yára jù"], answer: 2, why: "Loop náà kò lè lọ títí láé." },
      { objective: "O5", q: "Model dáhùn pẹ̀lú ọ̀rọ̀ tí ó yí JSON ká. Agent tó dára:", options: ["Pa òdiwọ̀n ìgbésẹ̀", "Já", "Gba àwọn ọ̀rọ̀ náà bí ìdáhùn", "Sọ fún model pé kí ó fi JSON nìkan dáhùn kí ó sì máa bá a lọ"], answer: 3, why: "Padà bọ̀ sípò lẹ́ẹ̀kan, kí o sì dúró lẹ́yìn ìkùnà tí ó tún ṣẹlẹ̀ léraléra." },
      { objective: "O5", q: "Ìgbà wo ni agent yẹ kí ó dúró lẹ́yìn ìdáhùn búburú?", options: ["Láéláé", "Lẹ́yìn ọ̀rọ̀ àkọ́kọ́", "Lẹ́yìn méjì tí ó tẹ̀lé ara wọn", "Nígbà tí kọ̀mpútà bá kú nìkan"], answer: 2, why: "Ìkùnà tí ó tún ṣẹlẹ̀ léraléra fi hàn pé nǹkan kan ti bàjẹ́." },
      { objective: "O6", q: "Àwọn framework agent:", options: ["Kì í yí padà láéláé", "Ń fúnni ní loop, irinṣẹ́ àti ìrántí tí a ti ṣe sílẹ̀", "Ń mú àìní fún ìdánwò kúrò", "Ni gbogbo agent gbọ́dọ̀ ní"], answer: 1, why: "Wọ́n ń ṣèrànwọ́, ṣùgbọ́n wọ́n máa ń yí padà lóòrèkóòrè, wọ́n sì ṣì nílò ìdánwò." },
      { objective: "O6", q: "Native tool calling túmọ̀ sí:", options: ["Model ń dá ìbéèrè tí ó ní ìlànà padà láti lo irinṣẹ́", "Model ń ṣe kóòdù lórí kọ̀mpútà rẹ fúnra rẹ̀", "O ń fi ọwọ́ tẹ àwọn irinṣẹ́", "Irinṣẹ́ ń ṣiṣẹ́ láìsí kóòdù"], answer: 0, why: "Ilé-iṣẹ́ model ń dá ìpè irinṣẹ́ tí ó ní ìlànà padà, kóòdù rẹ sì ń ṣe é." },
      { objective: "O6", q: "Kí ló dé tí o fi máa kọ́kọ́ fi ọwọ́ kọ́ loop?", options: ["O lóye ohun tí framework ń ṣe, o sì lè wá àṣìṣe inú rẹ̀", "Framework lòdì sí òfin", "Ó máa ń yára jù nígbà gbogbo", "Model ló béèrè fún un"], answer: 0, why: "Mímọ àwọn apá rẹ̀ ló ń jẹ́ kí wíwá àṣìṣe ṣeé ṣe." },
      { objective: "O6", q: "Tí a bá fún un ní àfojúsùn tí kò lè dé, agent tó dára:", options: ["Hùmọ̀ ìdáhùn", "Sọ pé òun kò lè ṣe é kí ó sì fi ohun tí ó gbìyànjú hàn", "Ń yípo títí láé", "Pa log rẹ̀ rẹ́"], answer: 1, why: "Ìkùnà olóòótọ́ dára ju ìdáhùn tí a hùmọ̀ lọ." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 4, 6, 7, 9, 12, 13, 15, 18] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Irinṣẹ́ méjì tó ń ṣiṣẹ́", objective: "O1", notYet: "Irinṣẹ́ kan kò sí, ó ń já, tàbí kò ní àpèjúwe.", meets: "Àwọn irinṣẹ́ méjèèjì ń ṣiṣẹ́, wọ́n ní orúkọ àti àpèjúwe tó yé, wọ́n sì ń ṣàyẹ̀wò input wọn.", exceeds: "Àwọn irinṣẹ́ ń dá ọ̀rọ̀ àṣìṣe tó yé tí model lè lò padà." },
      { name: "Ìgbésẹ̀ ní JSON", objective: "O2", notYet: "Model ń dáhùn ní ọ̀rọ̀ lásán tí loop kò lè kà.", meets: "Model ń yan irinṣẹ́ àti ìdáhùn ìkẹyìn ní JSON.", exceeds: "Prompt náà tún sọ fún model pé kí ó má hùmọ̀ èsì irinṣẹ́ láéláé." },
      { name: "Loop ń dá èsì padà", objective: "O3", notYet: "A kò dá èsì irinṣẹ́ padà, tàbí loop kò dúró rí.", meets: "Loop ń lo irinṣẹ́ tí a yàn, ó ń dá èsì padà, ó sì ń dúró ní ìdáhùn ìkẹyìn.", exceeds: "Ó ń kojú orúkọ irinṣẹ́ tí a kò mọ̀ nípa sísọ fún model irinṣẹ́ tí ó wà." },
      { name: "Òdiwọ̀n ààbò", objective: "O5", notYet: "Kò sí òdiwọ̀n ìgbésẹ̀, tàbí ìdáhùn búburú ń mú agent já.", meets: "Ó ń dúró ní òdiwọ̀n ìgbésẹ̀ 6, ó sì ń padà bọ̀ sípò látinú ìdáhùn búburú kan láti model.", exceeds: "Ó tún ń kojú àṣìṣe irinṣẹ́, ó sì ń dúró lẹ́yìn ìdáhùn búburú méjì tí ó tẹ̀lé ara wọn." },
      { name: "Àkọsílẹ̀ ìṣiṣẹ́", objective: "O4", notYet: "Kò sí log, tàbí àwọn ìgbésẹ̀ kan kò sí nínú rẹ̀.", meets: "Ó ń tẹ log gbogbo ìgbésẹ̀ jáde.", exceeds: "Log náà jẹ́ tábìlì tó mọ́ tí ẹlòmíì lè kà láti ṣàlàyé ìṣiṣẹ́ náà." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n tẹ̀síwájú sí ẹ̀kọ́ 4 nínú ètò agent láàárín ọjọ́ 30",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn kọ́ tàbí ṣàtúnṣe agent kan fún iṣẹ́ gidi láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tí ó ní browser àti íńtánẹ́ẹ̀tì",
      "Àkáǹtì Google ọ̀fẹ́ fún Google Colab",
      "Kọ́kọ́rọ́ API model láti ẹ̀kọ́ 2 (ìpele ọ̀fẹ́ Gemini API) tàbí model ọ̀fẹ́ lórí kọ̀mpútà rẹ pẹ̀lú Ollama",
      "Káàdì ètò àti prompt tí a ti dán wò láti ẹ̀kọ́ 1 àti 2",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ kọ́ loop náà ní ẹ̀kọ́ kan lẹ́ẹ̀kan, kí gbogbo ènìyàn máa ṣe kóòdù lójú ẹsẹ̀.",
      "Ṣàyẹ̀wò pé a fi kọ́kọ́rọ́ API pamọ́ bí secret, àti pé a kò fi hàn lórí ojú-iboju tí gbogbo ènìyàn ń wò láéláé.",
      "Jẹ́ kí irinṣẹ́ àṣeṣe jẹ́ read-only, kí ẹ sì lo àkọsílẹ̀ àrògún, kì í ṣe ìsọfúnni àdáni tàbí ti oníbàárà.",
      "Nígbà tí agent bá ṣe ohun tí kò tọ́, ní kí àwọn akẹ́kọ̀ọ́ ka log ìṣiṣẹ́ wọn sókè kí wọ́n tó yí kóòdù padà.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì ní kí akẹ́kọ̀ọ́ kọ̀ọ̀kan fi ìdáhùn búburú tí ó padà bọ̀ sípò hàn nínú log wọn."
    ]
  }
};

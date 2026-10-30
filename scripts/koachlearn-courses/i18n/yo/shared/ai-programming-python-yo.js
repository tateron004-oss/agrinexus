"use strict";

// Koach Learn course (Yoruba translation of shared/ai-programming-python.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const COLAB = { name: "Google Colab: Àwọn ìbéèrè tí àwọn ènìyàn máa ń béèrè", url: "https://research.google.com/colaboratory/faq.html" };
const HF_PIPELINES = { name: "Hugging Face Transformers: Pipelines", url: "https://huggingface.co/docs/transformers/en/main_classes/pipelines" };
const HF_MODEL = { name: "Hugging Face: model card distilbert-base-uncased-finetuned-sst-2-english", url: "https://huggingface.co/distilbert/distilbert-base-uncased-finetuned-sst-2-english" };

module.exports = {
  id: "ai-programming-python-yo",
  lang: "yo",
  translationOf: "ai-programming-python",
  category: "Youth",
  name: "Kíkọ Ètò AI pẹ̀lú Python fún Àwọn Olùbẹ̀rẹ̀",
  skills: "Lílo library Python nínú Colab, Ṣíṣe chatbot onífin, Ṣíṣí model AI tí a ti kọ́ tẹ́lẹ̀, Lílo AI lórí ọ̀pọ̀ ọ̀rọ̀, Ṣíṣàyẹ̀wò èsì AI",
  outcome: "kọ ètò Python nínú Google Colab tí ó ń lo model AI ọ̀fẹ́ tí a ti kọ́ tẹ́lẹ̀ láti pín àwọn èrò tí a kọ sílẹ̀ sí rere àti búburú, tí ó ń tẹ àkópọ̀ jáde, tí ó sì ń sàmì sí àwọn èsì tí AI kò dá lójú kí ènìyàn lè ṣàyẹ̀wò wọn.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn olùbẹ̀rẹ̀ tí wọ́n mọ Python díẹ̀ (variable, if, list àti loop) tí wọ́n sì fẹ́ ṣe ètò tí ó ń lo AI. Tí o kò bá tíì kọ kóòdù rí, kọ́kọ́ ṣe \"Ìfihàn sí Kíkọ Ètò Kọ̀mpútà pẹ̀lú Python\".",
    "O máa bẹ̀rẹ̀ nípa ṣíṣe chatbot kékeré pẹ̀lú òfin Python lásán, kí o lè rí ohun tí ètò lè ṣe láìsí AI. Lẹ́yìn náà o máa ṣí model AI ọ̀fẹ́ tí a ti kọ́ tẹ́lẹ̀ láti Hugging Face, o sì máa lò ó láti mọ ìmọ̀lára inú àwọn èrò tí a kọ sílẹ̀. Irú irinṣẹ́ yìí ni àwọn ilé-iṣẹ́ ń lò fún àyẹ̀wò èrò oníbàárà àti ìwádìí.",
    "Gbogbo rẹ̀ ń ṣiṣẹ́ nínú Google Colab nínú browser rẹ, lọ́fẹ̀ẹ́. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú kóòdù tí o tẹ̀ fúnra rẹ. Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì parí ẹ̀kọ́ náà."
  ],
  finalTask: "Ṣe ètò tí ó ń to èrò ènìyàn (feedback sorter) nínú Google Colab: kọ list tí ó ní ó kéré tán èrò kúkúrú mẹ́fà (bí àpẹẹrẹ láti ìdánrawò ẹgbẹ́ eré, kíláàsì tàbí ṣọ́ọ̀bù kékeré), lo model sentiment tí a ti kọ́ tẹ́lẹ̀ lórí ọ̀kọ̀ọ̀kan, tẹ èrò kọ̀ọ̀kan jáde pẹ̀lú label àti score rẹ̀, sàmì sí èsì èyíkéyìí tí score rẹ̀ kéré sí 0.80 pẹ̀lú \"check by hand\" (ṣàyẹ̀wò rẹ̀ fúnra rẹ), kí o sì tẹ iye èrò rere àti iye èrò búburú jáde.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn ọ̀dọ́ àti àgbàlagbà tí wọ́n ti kọ Python díẹ̀ tí wọ́n sì fẹ́ fi AI ṣe nǹkan: àwọn akẹ́kọ̀ọ́ ilé-ìwé gíga àti yunifásítì, àwọn ọmọ ẹgbẹ́ kóòdù, àwọn tí ó ń yí iṣẹ́ padà àti àwọn tí ó ń kọ́ṣẹ́.",
    startingPoint: "Wọ́n lè kọ ètò Python kúkúrú kí wọ́n sì ṣe é nínú Google Colab pẹ̀lú variable, if, list, loop àti function. Ọ̀pọ̀ jù lọ kò tíì ṣí library AI rí, kò tíì lo model tí a ti kọ́ tẹ́lẹ̀, kò sì tíì ronú nípa bí model ṣe dá ara rẹ̀ lójú tó tàbí ìgbà tí ènìyàn gbọ́dọ̀ ṣàyẹ̀wò ìdáhùn rẹ̀.",
    gap: "Irinṣẹ́ AI ti wà nínú ọ̀pọ̀ iṣẹ́ àti ọjà báyìí, àwọn agbanisíṣẹ́ sì mọyì àwọn tí ó lè lò ó nínú kóòdù tí wọ́n sì lè ṣàyẹ̀wò rẹ̀ lọ́nà tó yẹ. Láìsí àṣeṣe gidi, àwọn akẹ́kọ̀ọ́ máa ń rò pé idán ni AI tàbí pé kò ṣeé dé, wọn kò sì kọ́ bí a ṣe ń dán ààlà model wò tàbí bí a ṣe ń pa ìsọfúnni àṣírí mọ́.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé àwọn ọ̀rọ̀ bíi library, model, score àti threshold",
      "Ẹ̀rọ: kọ̀mpútà tàbí laptop pẹ̀lú browser wẹ́ẹ̀bù; títẹ kóòdù lórí tablet le",
      "Àkáǹtì àti owó: àkáǹtì Google ọ̀fẹ́ fún Google Colab àti àwọn model Hugging Face ọ̀fẹ́; ohun èlò ọ̀fẹ́ Colab ní ààlà, ó sì lè yí padà",
      "Àkókò: nǹkan bí ìṣẹ́jú 5 sí 6 fún ẹ̀kọ́ kan pẹ̀lú àṣeṣe, nǹkan bí ìṣẹ́jú 60 sí 75 lápapọ̀",
      "Àṣírí: àwọn akẹ́kọ̀ọ́ ń lo èrò tí a hùmọ̀ tàbí tí a gba àṣẹ fún, wọn kì í sì í fi password tàbí API key sínú notebook tí a pín"
    ],
    prerequisites: "Ìfihàn sí Kíkọ Ètò Kọ̀mpútà pẹ̀lú Python (variable, if, list, loop àti function)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Nínú Google Colab", action: "ṣàlàyé bí model AI ṣe yàtọ̀ sí kóòdù onífin, kí o sì ṣí (import) tàbí fi library Python kan sórí ẹ̀rọ", standard: "pẹ̀lú àlàyé gbólóhùn kan tó tọ́, tí library náà sì ṣí láìsí àṣìṣe" },
    { id: "O2", condition: "Tí a bá fún ọ ní ọ̀rọ̀ kókó (keyword) àti ìdáhùn fún chatbot kékeré", action: "lo irinṣẹ́ string àti dictionary láti so ìránṣẹ́ kan pọ̀ mọ́ ìdáhùn tó tọ́", standard: "tí ó ń bá a mu bí lẹ́tà ńlá tàbí kékeré ni, tí ó sì ń fún ìdáhùn àtìgbàdégbà nígbà tí kò sí èyí tí ó bá a mu" },
    { id: "O3", condition: "Tí a bá fún ọ ní function ìdáhùn rẹ", action: "kọ loop ìjíròrò tí ó dúró nígbà tí olùlò bá sọ bye, kí o sì ṣàlàyé ààlà ìdáhùn onífin", standard: "tí loop náà ń dúró lórí bye, pẹ̀lú ó kéré tán àpẹẹrẹ kan tí òfin náà kò lè mú" },
    { id: "O4", condition: "Tí o bá ń lo pipeline Hugging Face", action: "ṣí model sentiment tí a ti kọ́ tẹ́lẹ̀, lò ó lórí gbólóhùn kan kí o sì ka label àti score rẹ̀", standard: "lẹ́yìn tí o ti ka model card, tí o sì ka label àti score náà dáadáa" },
    { id: "O5", condition: "Tí a bá fún ọ ní list àwọn èrò", action: "lo model náà lórí èrò kọ̀ọ̀kan nínú loop, ka iye label kọ̀ọ̀kan kí o sì tẹ àkópọ̀ tó mọ́ jáde", standard: "tí iye náà bá àwọn label mu, tí a sì dín score kù sí ẹ̀sẹ̀ méjì (two decimals)" },
    { id: "O6", condition: "Tí a bá fún ọ ní èsì model náà", action: "sàmì sí èsì tí ó wà lábẹ́ threshold ìdánilójú kí ènìyàn ṣàyẹ̀wò wọn, kí o sì tẹ̀lé ìwà rere nínú lílo AI", standard: "tí gbogbo score lábẹ́ threshold ní àmì \"check by hand\", tí kò sì sí ìsọfúnni àṣírí tàbí key nínú notebook" }
  ],
  chapters: [
    {
      name: "Orí 1: Àwọn ohun ìpìlẹ̀ Python fún AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ohun tí kíkọ ètò AI jẹ́, àti ṣíṣètò Colab",
          minutes: 5,
          goal: "Ṣàlàyé ohun tí model AI jẹ́ kí o sì ṣí library Python kan nínú Colab.",
          text: [
            "Kíkọ ètò lásán túmọ̀ sí pé o kọ gbogbo òfin fúnra rẹ: tí ọ̀rọ̀ náà bá jẹ́ \"hi\", sọ \"hello\". Kíkọ ètò AI túmọ̀ sí pé o ń lo model: ètò tí ó ti kọ́ àwọn àpẹẹrẹ (patterns) láti inú ọ̀pọ̀ àpẹẹrẹ, kí ó lè bójú tó àwọn ọ̀ràn tí o kò kọ òfin fún rí.",
            "O kì í sábà ṣe model láti ìbẹ̀rẹ̀. O ń lo library: kóòdù tí ẹlòmíì ti kọ tí ó sì pín. Nínú Python, o ń ṣí library pẹ̀lú import. Àwọn library AI ọ̀fẹ́ tí ó gbajúmọ̀ ni Hugging Face Transformers (model èdè), scikit-learn (machine learning àtijọ́) àti PyTorch (deep learning).",
            "Google Colab ti ní ọ̀pọ̀ nínú àwọn library wọ̀nyí. Tí ọ̀kan bá sọnù, o máa fi sórí ẹ̀rọ nínú cell kan pẹ̀lú !pip install àti orúkọ rẹ̀. Àmì ! ń sọ fún Colab pé kí ó ṣe àṣẹ ẹ̀rọ (system command) dípò Python. Colab jẹ́ ọ̀fẹ́, ṣùgbọ́n ọ̀pọ̀ ènìyàn ló ń lo kọ̀mpútà rẹ̀, nítorí náà ohun èlò ọ̀fẹ́ ní ààlà, ó sì lè yí padà."
          ],
          steps: ["Ṣí colab.research.google.com kí o sì ṣe notebook tuntun.", "Nínú cell kan, tẹ: import random", "Ìlà tó kàn: print(random.choice([\"rock\", \"paper\", \"scissors\"]))", "Ṣe é ní ìgbà mélòó kan kí o sì wo bí ìdáhùn ṣe ń yí padà.", "Tí import bá kùnà pẹ̀lú \"No module named\", ṣe !pip install <name> nínú cell kan, lẹ́yìn náà tún gbìyànjú."],
          words: [["AI model", "ètò tí ó ti kọ́ àwọn àpẹẹrẹ láti inú ọ̀pọ̀ àpẹẹrẹ, tí ó sì lè méfò lórí dátà tuntun."], ["Library", "kóòdù tí a ti ṣe sílẹ̀ tí o lè ṣí kí o sì lò nínú ètò tìrẹ."], ["import", "ọ̀rọ̀ Python tí ó ń ṣí library."], ["pip", "irinṣẹ́ tí ó ń fi library Python sórí ẹ̀rọ."], ["Rule-based (onífin)", "ètò tí ènìyàn ti fi ọwọ́ kọ gbogbo òfin rẹ̀."]],
          slides: [
            { title: "Òfin àti model", bullets: ["Onífin: o kọ gbogbo òfin", "Model AI: ó kọ́ àwọn àpẹẹrẹ láti inú àpẹẹrẹ", "Model ń bójú tó ọ̀ràn tí o kò kọ òfin fún"] },
            { title: "Library ń ṣe iṣẹ́ tó wúwo", bullets: ["import ń ṣí kóòdù tí a ti ṣe sílẹ̀", "Transformers, scikit-learn, PyTorch", "Gbogbo wọn jẹ́ ọ̀fẹ́ láti lò"] },
            { title: "Ṣíṣètò Colab", bullets: ["Ọ̀pọ̀ library ti wà lórí rẹ̀", "Ọ̀kan sọnù? !pip install <name>", "Ohun èlò ọ̀fẹ́ ní ààlà, ó sì lè yí padà"] }
          ],
          sources: [COLAB],
          tryIt: "Nínú notebook Colab tuntun, ṣí library random kí o sì kọ ètò tí ó ń yan eré ìdárayá, ìpanu tàbí kókó ẹ̀kọ́ kan láìròtẹ́lẹ̀ láti inú list márùn-ún, tí ó sì ń tẹ̀ ẹ́ jáde. Ṣe é ní ìgbà mẹ́ta.",
          youCanNow: "ṣàlàyé ìyàtọ̀ láàárín kóòdù onífin àti model AI, kí o sì ṣí library kan nínú Colab.",
          quickCheck: [
            { objective: "O1", q: "Kí ni library nínú Python?", options: ["List àwọn notebook tí o ti fi pamọ́", "Fódà Google Drive kan", "Kóòdù tí ẹlòmíì ti kọ tí ó sì pín", "Ọ̀rọ̀ àṣìṣe kan"], answer: 2, why: "Library jẹ́ kóòdù tí a ti ṣe sílẹ̀ tí a pín, tí o ń ṣí pẹ̀lú import." },
            { objective: "O1", q: "O fẹ́ lo scikit-learn ṣùgbọ́n o kò mọ̀ bóyá Colab ní i. Kí ni o máa kọ́kọ́ gbìyànjú?", options: ["Ṣe import sklearn, tí ó bá sì sọ \"No module named\", ṣe !pip install scikit-learn", "Tún library náà kọ fúnra rẹ", "Pa notebook náà rẹ́", "Tẹ orúkọ library náà sínú print()"], answer: 0, why: "Colab ti ní ọ̀pọ̀ library; fi !pip sórí ẹ̀rọ nìkan tí import bá kùnà." }
          ]
        },
        {
          objectives: ["O2"],
          title: "String àti dictionary: ọpọlọ chatbot kékeré",
          minutes: 6,
          goal: "Lo dictionary láti so ọ̀rọ̀ kókó inú ìránṣẹ́ pọ̀ mọ́ ìdáhùn.",
          text: [
            "Ètò AI ń ṣiṣẹ́ pẹ̀lú ọ̀pọ̀ ọ̀rọ̀ (text), nítorí náà o nílò irinṣẹ́ string díẹ̀. message.lower() ń sọ ọ̀rọ̀ di lẹ́tà kékeré, kí \"HELLO\" àti \"hello\" lè bá ara wọn mu. \"hours\" in message jẹ́ True tí ọ̀rọ̀ náà bá wà níbikíbi nínú ìránṣẹ́ náà. message.split() ń pín gbólóhùn sí list àwọn ọ̀rọ̀.",
            "Dictionary ń tọ́jú àwọn méjì-méjì: key àti value, nínú àmì àkámọ́ onígbì (curly brackets). replies = {\"hours\": \"We are open 9 to 5.\", \"price\": \"Prices are on our menu page.\"} O ń rí value gbà pẹ̀lú replies[\"hours\"].",
            "Láti ṣe ọpọlọ chatbot, lọ yí dictionary náà ká pẹ̀lú loop: for keyword, answer in replies.items(): if keyword in message: return answer. Tí kò bá sí èyí tí ó bá a mu, dá ìdáhùn àtìgbàdégbà padà bíi \"Sorry, I do not know that yet.\""
          ],
          steps: ["Ṣe dictionary àwọn ọ̀rọ̀ kókó àti ìdáhùn.", "Kọ function reply(message).", "Nínú rẹ̀, ṣe message = message.lower().", "Lọ yí replies.items() ká kí o sì dá ìdáhùn ọ̀rọ̀ kókó àkọ́kọ́ tí a rí padà.", "Lẹ́yìn loop náà, dá ìdáhùn àtìgbàdégbà padà."],
          words: [["String", "ọ̀rọ̀ (text) nínú Python."], ["Dictionary", "àkójọ àwọn méjì-méjì key: value nínú àmì àkámọ́ onígbì."], ["Key", "àmì tí o ń wá nínú dictionary."], ["Value", "ohun tí a tọ́jú sábẹ́ key kan."], [".items()", "ń fún ọ ní gbogbo key àti value inú dictionary, fún loop."]],
          slides: [
            { title: "Irinṣẹ́ ọ̀rọ̀", bullets: ["lower(): \"HELLO\" di \"hello\"", "\"hours\" in message: True tàbí False", "split(): gbólóhùn di list àwọn ọ̀rọ̀"] },
            { title: "Dictionary", bullets: ["{\"hours\": \"Open 9 to 5.\"}", "Wá a pẹ̀lú replies[\"hours\"]", "Key ní apá òsì, value ní apá ọ̀tún"] },
            { title: "Ọpọlọ chatbot", bullets: ["Sọ ìránṣẹ́ di lẹ́tà kékeré", "Lọ yí replies.items() ká", "Dá èyí tí ó kọ́kọ́ bá a mu padà, tàbí ìdáhùn àtìgbàdégbà"] }
          ],
          tryIt: "Kọ reply(message) fún ilé ìdárayá (gym), ilé ìkàwé tàbí ọkọ̀ oúnjẹ àròsọ pẹ̀lú ó kéré tán ọ̀rọ̀ kókó mẹ́rin (bí àpẹẹrẹ hours, price, location, contact). Dán an wò pẹ̀lú ìránṣẹ́ mẹ́ta, pẹ̀lú ọ̀kan tí a kọ ní lẹ́tà ńlá àti ọ̀kan tí kò yẹ kí ó yé e.",
          youCanNow: "lo irinṣẹ́ string àti dictionary láti so ìránṣẹ́ kan pọ̀ mọ́ ìdáhùn tó tọ́.",
          quickCheck: [
            { objective: "O2", q: "Kí ni \"I need help now\".split() ń fúnni?", options: ["\"i need help now\"", "[\"I\", \"need\", \"help\", \"now\"]", "True", "4"], answer: 1, why: "split() ń pín gbólóhùn sí list àwọn ọ̀rọ̀." },
            { objective: "O2", q: "Chatbot rẹ kò rí ọ̀rọ̀ kókó kankan nínú ìránṣẹ́ náà. Kí ni o máa fẹ́ kí ó ṣe?", options: ["Kí ó dákú pẹ̀lú àṣìṣe", "Kí ó tẹ gbogbo ìdáhùn inú dictionary jáde", "Kí ó dá ètò náà dúró", "Kí ó dá ìdáhùn àtìgbàdégbà padà bíi \"Sorry, I do not know that yet.\""], answer: 3, why: "Ìdáhùn àtìgbàdégbà ń bójú tó ìránṣẹ́ tí kò bá ọ̀rọ̀ kókó kankan mu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Mímú chatbot sọ̀rọ̀, àti rírí ààlà rẹ̀",
          minutes: 5,
          goal: "Fi function ìdáhùn rẹ sínú loop tí ó ń bá ni sọ̀rọ̀ títí olùlò yóò fi sọ bye, kí o sì rí ohun tí òfin kò lè ṣe.",
          text: [
            "Chatbot nílò loop: béèrè ìránṣẹ́, tẹ ìdáhùn jáde, kí o sì tún un ṣe. while True: ń tún ṣe títí láé, nítorí náà o máa fi ọ̀nà àbájáde sí i: tí ìránṣẹ́ náà bá jẹ́ \"bye\", tẹ ìdágbére jáde kí o sì lo break láti jáde kúrò nínú loop.",
            "Báyìí, dán an wò bí olùlò gidi ṣe máa ṣe. Tẹ \"when do you open?\" chatbot rẹ sì lè kùnà, nítorí pé \"hours\" ni o kọ, kì í ṣe \"open\". Ọ̀nà tuntun kọ̀ọ̀kan láti sọ nǹkan nílò òfin tuntun. Ìyẹn ni ààlà pàtàkì ti ètò onífin.",
            "Ìdí nìyí tí model AI fi wúlò: model èdè ti kọ́ láti inú mílíọ̀nù gbólóhùn, nítorí náà ó lè lóye ọ̀pọ̀ ọ̀nà láti sọ ohun kan náà. Nínú orí tó kàn, o máa lo ọ̀kan."
          ],
          steps: ["Bẹ̀rẹ̀ pẹ̀lú while True:", "Nínú rẹ̀, gba message = input(\"You: \")", "Tí message.lower() == \"bye\", tẹ ìdágbére jáde kí o sì ṣe break.", "Bí bẹ́ẹ̀ kọ́, print(\"Bot:\", reply(message)).", "Dán an wò pẹ̀lú ọ̀nà márùn-ún tí ó yàtọ̀ láti béèrè ìbéèrè kan náà."],
          words: [["while True", "loop tí ó ń bá a lọ títí nǹkan kan nínú rẹ̀ yóò fi dá a dúró."], ["break", "ń jáde kúrò nínú loop lẹ́sẹ̀kẹsẹ̀."], ["Limit (ààlà)", "nǹkan tí ètò kò lè ṣe dáadáa."]],
          slides: [
            { title: "Loop ìjíròrò", bullets: ["while True: ń bá ìjíròrò lọ", "input() ń gba ìránṣẹ́", "break ń parí ìjíròrò lórí \"bye\""] },
            { title: "Dán an wò bí olùlò gidi", bullets: ["Béèrè ohun kan náà ní ọ̀nà márùn-ún", "Ka iye tí chatbot náà gbà dáadáa"] },
            { title: "Ìdí tí òfin fi ní ààlà", bullets: ["Ọ̀nà tuntun láti sọ nǹkan nílò òfin tuntun", "Model AI ti kọ́ láti inú mílíọ̀nù gbólóhùn", "Ìyẹn ni Orí 2 ń lò"] }
          ],
          tryIt: "Fi function ìdáhùn rẹ láti Ẹ̀kọ́ 2 sínú loop ìjíròrò tí ó parí lórí \"bye\". Béèrè nípa àkókò ìṣísílẹ̀ (hours) ní ọ̀nà márùn-ún tí ó yàtọ̀. Kọ iye tí ó yé chatbot rẹ sílẹ̀, lẹ́yìn náà fi òfin kan kún un láti tún èyí tí ó kùnà ṣe.",
          youCanNow: "ṣe loop chatbot onífin tí ó ṣiṣẹ́, kí o sì ṣàlàyé ìdí tí òfin nìkan fi ní ààlà.",
          quickCheck: [
            { objective: "O3", q: "Kí ni while True: ń ṣe fúnra rẹ̀?", options: ["Ó ń tún ṣe títí láé títí nǹkan bíi break yóò fi dá a dúró", "Ó ń ṣiṣẹ́ lẹ́ẹ̀kan péré", "Ó ń ṣiṣẹ́ nìkan tí olùlò bá sọ bye", "Ó ń ṣí library"], answer: 0, why: "while True ń tún ṣe títí láé, nítorí náà o nílò ọ̀nà àbájáde bíi break." },
            { objective: "O3", q: "Àwọn olùlò ń tẹ \"what time do you close?\" léraléra, chatbot onífin rẹ sì ń kùnà. Kí ni ìyẹn ń sọ fún ọ?", options: ["Chatbot náà ní àṣìṣe títẹ̀", "Colab ti bàjẹ́", "Ọ̀nà tuntun kọ̀ọ̀kan láti sọ nǹkan nílò òfin tuntun, èyí sì ni ààlà chatbot onífin", "Kí àwọn olùlò máa tẹ̀ ní lẹ́tà ńlá"], answer: 2, why: "Chatbot onífin ń bá òfin tí o kọ nìkan mu; model èdè ń bójú tó ọ̀nà púpọ̀ sí i láti sọ nǹkan." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Àwọn ohun ìpìlẹ̀ Python fún AI",
        questions: [
          { objective: "O1", q: "Kí ni ìyàtọ̀ pàtàkì láàárín kóòdù onífin àti model AI?", options: ["Kóòdù onífin máa ń yára jù nígbà gbogbo", "Model kì í lo kóòdù kankan", "Model ti kọ́ àwọn àpẹẹrẹ láti inú àpẹẹrẹ dípò kí a fi ọwọ́ kọ gbogbo òfin rẹ̀", "Kò sí ìyàtọ̀"], answer: 2, why: "Model ń kọ́ àwọn àpẹẹrẹ láti inú dátà; kóòdù onífin nílò kí a kọ gbogbo òfin." },
          { objective: "O1", q: "Cell Colab rẹ sọ \"No module named\" fún library kan. Kí ni o máa ṣe?", options: ["Ṣe !pip install pẹ̀lú orúkọ library náà, lẹ́yìn náà tún import ṣe", "Tún kọ̀mpútà rẹ bẹ̀rẹ̀", "Pa notebook náà rẹ́", "Yí orúkọ variable padà"], answer: 0, why: "pip ń fi library tí ó sọnù sórí ẹ̀rọ." },
          { objective: "O2", q: "replies = {\"hours\": \"Open 9 to 5.\"}. Kí ni replies[\"hours\"]?", options: ["\"hours\"", "Àṣìṣe kan", "True", "\"Open 9 to 5.\""], answer: 3, why: "Wíwá key kan ń fún ọ ní value rẹ̀." },
          { objective: "O2", q: "Kí nìdí tí a fi ń lo message.lower() nínú chatbot?", options: ["Láti mú ọ̀rọ̀ kúrú", "Kí \"HOURS\" àti \"hours\" méjèèjì lè bá a mu", "Láti pa ìránṣẹ́ rẹ́", "Láti túmọ̀ rẹ̀"], answer: 1, why: "Sísọ di lẹ́tà kékeré ń jẹ́ kí ìbámu má wo lẹ́tà ńlá." },
          { objective: "O3", q: "Ọ̀rọ̀ wo ló ń jáde kúrò nínú loop while True?", options: ["exit", "break", "stop", "return to"], answer: 1, why: "break ń jáde kúrò nínú loop lẹ́sẹ̀kẹsẹ̀." }
        ]
      }
    },
    {
      name: "Orí 2: Lílo model AI tí a ti kọ́ tẹ́lẹ̀",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ṣíṣí model tí a ti kọ́ tẹ́lẹ̀ pẹ̀lú Hugging Face",
          minutes: 6,
          goal: "Ṣí model sentiment ọ̀fẹ́ nínú Colab kí o sì lò ó lórí gbólóhùn kan.",
          text: [
            "Model tí a ti kọ́ tẹ́lẹ̀ (pre-trained) ni èyí tí ẹnì kan ti kọ́ tí ó sì pín, kí o lè lò ó lẹ́sẹ̀kẹsẹ̀. Hugging Face jẹ́ ojú-òpó wẹ́ẹ̀bù tí ó ní ẹgbẹẹgbẹ̀rún model ọ̀fẹ́, library Transformers rẹ̀ sì ń ṣí wọn pẹ̀lú ìlà kan.",
            "Irinṣẹ́ tó rọrùn jù ni pipeline. O sọ iṣẹ́ àti model fún un: classifier = pipeline(\"text-classification\", model=\"distilbert/distilbert-base-uncased-finetuned-sst-2-english\"). Model yìí ń ka ọ̀rọ̀ Gẹ̀ẹ́sì, ó sì ń pinnu bóyá ìmọ̀lára (sentiment) rẹ̀ jẹ́ POSITIVE (rere) tàbí NEGATIVE (búburú).",
            "Lò ó bí function: classifier(\"The practice today was great!\"). Ó ń dá list padà tí dictionary wà nínú rẹ̀, bí àpẹẹrẹ [{'label': 'POSITIVE', 'score': 0.99}]. Score ni bí model náà ṣe dá ara rẹ̀ lójú tó, láti 0 sí 1. Ìgbà àkọ́kọ́ tí o bá ṣe é, ó máa gba model náà sílẹ̀ (download), nítorí náà ó máa pẹ́ díẹ̀.",
            "Máa ka ojú-ewé model kan (\"model card\" rẹ̀) nígbà gbogbo kí o tó lò ó: ó ń sọ ohun tí a fi kọ́ model náà, ohun tí ó wà fún, àti ìwé àṣẹ (licence) rẹ̀."
          ],
          steps: ["Nínú cell tuntun: from transformers import pipeline", "Ṣe classifier = pipeline(\"text-classification\", model=\"distilbert/distilbert-base-uncased-finetuned-sst-2-english\")", "Ṣe result = classifier(\"The practice today was great!\")", "print(result[0][\"label\"], result[0][\"score\"])", "Tí transformers kò bá sí, kọ́kọ́ ṣe !pip install transformers."],
          words: [["Pre-trained model", "model tí ẹlòmíì ti kọ́ tẹ́lẹ̀ tí o lè lò lẹ́sẹ̀kẹsẹ̀."], ["Hugging Face", "ojú-òpó wẹ́ẹ̀bù àti àwọn library fún pípín model AI ọ̀fẹ́."], ["pipeline", "irinṣẹ́ Transformers tí ó ń ṣí model fún iṣẹ́ kan pẹ̀lú ìlà kan."], ["Sentiment (ìmọ̀lára)", "ìmọ̀lára inú ọ̀rọ̀ kan: rere tàbí búburú."], ["Score", "bí model náà ṣe dá ara rẹ̀ lójú tó, láti 0 sí 1."], ["Model card", "ojú-ewé tí ó ṣàlàyé ohun tí model ń ṣe, dátà rẹ̀ àti ìwé àṣẹ rẹ̀."]],
          slides: [
            { title: "Model tí a ti kọ́ tẹ́lẹ̀", bullets: ["Ẹlòmíì ti kọ́ ọ tẹ́lẹ̀", "Hugging Face ní ẹgbẹẹgbẹ̀rún, lọ́fẹ̀ẹ́", "Kọ́kọ́ ka model card"] },
            { title: "Ìlà kan láti ṣí i", bullets: ["from transformers import pipeline", "pipeline(\"text-classification\", model=...)", "Ìgbà àkọ́kọ́ ń gba model sílẹ̀"] },
            { title: "Kíka èsì", bullets: ["[{'label': 'POSITIVE', 'score': 0.99}]", "result[0][\"label\"] ni ìmọ̀lára náà", "result[0][\"score\"] ni bí ó ṣe dá a lójú tó"] }
          ],
          sources: [HF_PIPELINES, HF_MODEL],
          tryIt: "Ṣí classifier sentiment náà kí o sì lò ó lórí gbólóhùn mẹ́ta tí o kọ: ọ̀kan tí inú dùn hàn kedere, ọ̀kan tí inú bí hàn kedere, àti ọ̀kan tí ó dàpọ̀ bíi \"The food was good but the wait was long.\" Tẹ label àti score ọ̀kọ̀ọ̀kan jáde kí o sì kíyèsí èyí tí ó dá a lójú jù lọ díẹ̀.",
          youCanNow: "ṣí model tí a ti kọ́ tẹ́lẹ̀ pẹ̀lú pipeline kí o sì ka label àti score rẹ̀.",
          quickCheck: [
            { objective: "O4", q: "Kí ni model card ń sọ fún ọ?", options: ["Password Colab rẹ", "Iye èrò tí o ní", "Iye owó kọ̀mpútà", "Ohun tí a fi kọ́ model náà, ohun tí ó wà fún àti ìwé àṣẹ rẹ̀"], answer: 3, why: "Ka model card kí o tó lo model kan." },
            { objective: "O4", q: "O ṣe classifier náà fún ìgbà àkọ́kọ́, ó sì pẹ́ díẹ̀. Kí ni o máa ṣe?", options: ["Dá a dúró kí o sì jáwọ́", "Dúró; ìgbà àkọ́kọ́ ń gba model náà sílẹ̀", "Tún Python fi sórí ẹ̀rọ", "Fi ọwọ́ yí label padà sí POSITIVE"], answer: 1, why: "Ìgbà àkọ́kọ́ ń gba model náà sílẹ̀, nítorí náà ó máa pẹ́ díẹ̀." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Lílo model náà lórí ọ̀pọ̀ ọ̀rọ̀",
          minutes: 5,
          goal: "Lo loop láti pín list àwọn èrò sí ìsọ̀rí kí o sì ka iye èsì.",
          text: [
            "Ètò gidi ń bójú tó ọ̀pọ̀ ọ̀rọ̀, kì í ṣe ọ̀kan. Fi àwọn èrò rẹ sínú list, lẹ́yìn náà ṣe loop: for comment in comments: result = classifier(comment)[0]. O tún lè fi gbogbo list náà ránṣẹ́ lẹ́ẹ̀kan, classifier(comments), kí o sì gba èsì kan padà fún èrò kọ̀ọ̀kan.",
            "Láti ṣe àkópọ̀, lo àwọn olùkà (counter): positive = 0 àti negative = 0 ṣáájú loop, lẹ́yìn náà fi 1 kún èyí tó tọ́ nínú rẹ̀ gẹ́gẹ́ bí result[\"label\"] ṣe sọ.",
            "Dín score kù kí ó lè rọrùn láti kà: round(result[\"score\"], 2) ń fún ọ ní ẹ̀sẹ̀ méjì lẹ́yìn àmì ìdá. F-string ń tẹ ìlà tó mọ́ jáde: print(f\"{result['label']:8} {round(result['score'], 2)}  {comment}\")."
          ],
          steps: ["Fi ó kéré tán èrò márùn-ún sínú list.", "Ṣe positive = 0 àti negative = 0.", "Lọ yí àwọn èrò náà ká kí o sì pín ọ̀kọ̀ọ̀kan sí ìsọ̀rí.", "Tẹ label, score tí a dín kù àti èrò náà jáde.", "Fi kún counter tó tọ́, lẹ́yìn náà tẹ àpapọ̀ jáde lẹ́yìn loop."],
          words: [["Counter (olùkà)", "variable tí ó ń ka iye ìgbà tí nǹkan kan ṣẹlẹ̀."], ["round()", "ń dín nọ́mbà kù sí iye ẹ̀sẹ̀ kan lẹ́yìn àmì ìdá."], ["Batch", "àkójọ àwọn input tí a bójú tó papọ̀."]],
          slides: [
            { title: "Ọ̀pọ̀ ọ̀rọ̀, loop kan", bullets: ["Fi àwọn èrò sínú list", "for comment in comments:", "result = classifier(comment)[0]"] },
            { title: "Máa ka bí o ṣe ń lọ", bullets: ["positive = 0, negative = 0 ṣáájú loop", "Fi 1 kún counter tó tọ́ nínú rẹ̀", "Tẹ àpapọ̀ jáde lẹ́yìn loop"] },
            { title: "Jẹ́ kí ó rọrùn láti kà", bullets: ["round(score, 2) fún ẹ̀sẹ̀ méjì", "Ìlà kan tó mọ́ fún èrò kọ̀ọ̀kan"] }
          ],
          tryIt: "Kọ èrò mẹ́fà nípa kíláàsì kan, ìdánrawò ẹgbẹ́ eré tàbí ṣọ́ọ̀bù àdúgbò kan. Pín wọn sí ìsọ̀rí nínú loop, tẹ ìlà kan tó mọ́ jáde fún ọ̀kọ̀ọ̀kan, kí o sì tẹ iye èrò rere àti iye èrò búburú jáde.",
          youCanNow: "lo model AI lórí list àwọn ọ̀rọ̀ kí o sì ṣe àkópọ̀ èsì pẹ̀lú counter.",
          quickCheck: [
            { objective: "O5", q: "Kí ni classifier(comments) ń dá padà nígbà tí comments jẹ́ list?", options: ["Èsì kan fún gbogbo list náà", "Àṣìṣe ní gbogbo ìgbà", "Èsì kan fún èrò kọ̀ọ̀kan", "Èsì èrò àkọ́kọ́ nìkan"], answer: 2, why: "Fífi list ránṣẹ́ ń dá èsì kan padà fún èrò kọ̀ọ̀kan." },
            { objective: "O5", q: "Nínú loop rẹ, result[\"label\"] jẹ́ \"POSITIVE\". Kí ni o máa ṣe pẹ̀lú àwọn counter rẹ?", options: ["Fi 1 kún positive", "Fi 1 kún negative", "Dá positive padà sí 0", "Pa èrò náà rẹ́"], answer: 0, why: "Fi 1 kún counter tí ó bá label náà mu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ṣíṣàyẹ̀wò AI àti píparí ètò títo èrò",
          minutes: 6,
          goal: "Sàmì sí èsì tí ìdánilójú rẹ̀ kéré kí ènìyàn ṣàyẹ̀wò wọn, kí o sì parí ètò títo èrò.",
          text: [
            "Model AI máa ń ṣe àṣìṣe. Èyí mọ rere àti búburú nìkan, nítorí náà a fi agbára ti èrò àárín tàbí èyí tí ó dàpọ̀ sínú ọ̀kan nínú wọn. Ó tún lè má mọ ọ̀rọ̀ ẹ̀gàn (sarcasm) (\"Great, another rainy game day.\"), a sì fi àyẹ̀wò fíìmù ní èdè Gẹ̀ẹ́sì kọ́ ọ, nítorí náà ọ̀rọ̀ ìgboro (slang) tàbí èdè míì lè dà á rú.",
            "Ìwà rere kan ni threshold ìdánilójú: tí score bá kéré sí nọ́mbà tí o yàn, bíi 0.80, ètò náà máa sọ \"check by hand\" (ṣàyẹ̀wò rẹ̀ fúnra rẹ) dípò kí ó gbẹ́kẹ̀lé label náà. Ènìyàn ló ń ṣe ìpinnu ìkẹyìn lórí ohunkóhun tí ó ṣe pàtàkì.",
            "Lo AI lọ́nà tó yẹ: má ṣe fi ìránṣẹ́ àṣírí sínú irinṣẹ́ láìgba àṣẹ, má ṣe fi password tàbí API key sínú notebook tí a pín, kí o sì sọ fún àwọn ènìyàn nígbà tí èsì kan bá wá láti ọ̀dọ̀ AI.",
            "O ti ní gbogbo ohun tí o nílò fún iṣẹ́ ìkẹyìn báyìí: list, model, loop, if pẹ̀lú threshold, counter àti ìtẹ̀jáde tó yé."
          ],
          steps: ["Yan threshold kan, bí àpẹẹrẹ THRESHOLD = 0.80.", "Nínú loop, ṣàyẹ̀wò: if result[\"score\"] < THRESHOLD:", "Tẹ \"check by hand\" jáde lẹ́gbẹ̀ẹ́ àwọn èrò wọ̀nyẹn.", "Ka rere àti búburú bí ti tẹ́lẹ̀.", "Tẹ àpapọ̀ jáde àti iye tí ó nílò àyẹ̀wò ènìyàn."],
          words: [["Threshold", "nọ́mbà ààlà tí o yàn; èsì tí ó kéré sí i ń gba ìtọ́jú pàtàkì."], ["Confidence (ìdánilójú)", "bí model ṣe dá ìdáhùn rẹ̀ lójú tó."], ["Sarcasm (ọ̀rọ̀ ẹ̀gàn)", "sísọ òdìkejì ohun tí o ní lọ́kàn, tí model máa ń sábà kùnà láti mọ̀."], ["Human in the loop", "ènìyàn ń ṣàyẹ̀wò èsì AI kí a tó lò wọ́n."]],
          slides: [
            { title: "Model máa ń ṣe àṣìṣe", bullets: ["Rere tàbí búburú nìkan: a fi agbára ti èyí tó dàpọ̀", "Kì í mọ ọ̀rọ̀ ẹ̀gàn àti ọ̀rọ̀ ìgboro", "A fi àyẹ̀wò fíìmù Gẹ̀ẹ́sì kọ́ ọ"] },
            { title: "Lo threshold", bullets: ["THRESHOLD = 0.80", "Score tí ó kéré sí i: \"check by hand\"", "Ènìyàn ló ń ṣe ìpinnu ìkẹyìn"] },
            { title: "Lo AI lọ́nà tó yẹ", bullets: ["Gba àṣẹ fún ìránṣẹ́ àṣírí", "Kò sí password tàbí key nínú notebook tí a pín", "Sọ nígbà tí èsì kan wá láti AI"] }
          ],
          sources: [HF_MODEL],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣe ètò títo èrò. Lo ó kéré tán èrò mẹ́fà, pẹ̀lú ọ̀kan tí ó dàpọ̀ àti ọ̀kan tí ó jẹ́ ẹ̀gàn. Tẹ ọ̀kọ̀ọ̀kan jáde pẹ̀lú label àti score rẹ̀, sàmì sí ohunkóhun tí ó kéré sí 0.80 pẹ̀lú \"check by hand\", kí o sì tẹ àpapọ̀ rere, búburú àti check-by-hand jáde. Lẹ́yìn náà ka àwọn tí a sàmì sí fúnra rẹ kí o sì pinnu.",
          youCanNow: "ṣe ètò AI tí ó ṣiṣẹ́ nínú Python tí ó ń to ọ̀rọ̀, tí ó ń jábọ̀ èsì rẹ̀, tí ó sì ń fi àwọn ọ̀ràn tí kò dá a lójú lé ènìyàn lọ́wọ́.",
          quickCheck: [
            { objective: "O6", q: "Kí nìdí tí model sentiment yìí fi lè ṣi èrò àárín (neutral) gbọ́?", options: ["Nọ́mbà nìkan ló ń kà", "Rere àti búburú nìkan ló mọ̀, nítorí náà a fi agbára ti èrò àárín sínú ọ̀kan", "Ó nílò password", "Ọjọ́ Ẹtì nìkan ló ń ṣiṣẹ́"], answer: 1, why: "Label méjì péré ni model náà ní, nítorí náà a fi agbára ti èrò tí ó dàpọ̀ tàbí ti àárín sínú ọ̀kan." },
            { objective: "O6", q: "Ọ̀rẹ́ kan fẹ́ kí o fi àwọn ìránṣẹ́ àṣírí rẹ̀ sínú ètò títo èrò rẹ. Kí ni o máa ṣe?", options: ["Ṣe é láìbéèrè lọ́wọ́ àwọn tí ó kọ wọ́n", "Fi èsì náà sí orí ẹ̀rọ ayélujára", "Fi API key rẹ sínú notebook kí ó lè yára", "Lo ìránṣẹ́ tí o ní àṣẹ láti lò nìkan, kí o sì sọ pé èsì náà wá láti AI"], answer: 3, why: "Lílo AI lọ́nà tó yẹ túmọ̀ sí gbígba àṣẹ fún ìsọfúnni àṣírí àti sísọ fún àwọn ènìyàn nígbà tí a lo AI." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Lílo model AI tí a ti kọ́ tẹ́lẹ̀",
        questions: [
          { objective: "O4", q: "Kí ni model tí a ti kọ́ tẹ́lẹ̀?", options: ["Model tí o gbọ́dọ̀ kọ́ fún ọ̀sẹ̀ mélòó kan kọ́kọ́", "List òfin tí o kọ", "Ojú-òpó wẹ́ẹ̀bù tí a ń sanwó fún", "Model tí ẹnì kan ti kọ́ tẹ́lẹ̀ tí o lè lò lẹ́sẹ̀kẹsẹ̀"], answer: 3, why: "Model tí a ti kọ́ tẹ́lẹ̀ ti ṣetán láti lò." },
          { objective: "O4", q: "Classifier náà dá [{'label': 'NEGATIVE', 'score': 0.97}] padà. Kí ni 0.97 túmọ̀ sí?", options: ["Model náà dá a lójú gidigidi pé èrò náà jẹ́ búburú", "Ó ka ọ̀rọ̀ 97", "Èrò náà gùn ní 97%", "Ó ná 97 cents"], answer: 0, why: "Score ni ìdánilójú model náà láti 0 sí 1." },
          { objective: "O5", q: "Ìlà wo ló ń gba label láti result = classifier(text)?", options: ["result.label", "result[\"label\"][0]", "result[0][\"label\"]", "label(result)"], answer: 2, why: "Èsì náà jẹ́ list tí dictionary wà nínú rẹ̀, nítorí náà [0] kọ́kọ́, lẹ́yìn náà [\"label\"]." },
          { objective: "O6", q: "Èrò kan gba score 0.55. Pẹ̀lú threshold 0.80, kí ni ètò rẹ máa ṣe?", options: ["Ó máa pa á rẹ́", "Ó máa kà á lẹ́ẹ̀mejì", "Ó máa dá ètò náà dúró", "Ó máa sàmì sí i pẹ̀lú \"check by hand\""], answer: 3, why: "Score tí ó kéré sí threshold ń lọ sọ́dọ̀ ènìyàn." },
          { objective: "O6", q: "Èwo nínú ìwọ̀nyí ni lílo AI lọ́nà tó yẹ?", options: ["Fífi API key rẹ sínú notebook tí o pín", "Lílo ìránṣẹ́ àṣírí àwọn ọmọ kíláàsì láìbéèrè", "Sísọ fún àwọn ènìyàn pé èsì kan wá láti AI àti ṣíṣàyẹ̀wò àwọn tí kò dá a lójú", "Gbígbẹ́kẹ̀lé gbogbo label"], answer: 2, why: "Jíjẹ́ olóòótọ́ àti fífi ènìyàn sínú ìṣàyẹ̀wò ni lílo tó yẹ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Kíkọ Ètò AI pẹ̀lú Python fún Àwọn Olùbẹ̀rẹ̀",
    questions: [
      { objective: "O1", q: "Ọ̀nà tó dára jù láti ṣàpèjúwe model AI ni:", options: ["List àwọn if statement", "Ètò tí ó ti kọ́ àwọn àpẹẹrẹ láti inú ọ̀pọ̀ àpẹẹrẹ", "Irú kíbọ́ọ̀dù kan", "Àdírẹ́sì ojú-òpó wẹ́ẹ̀bù"], answer: 1, why: "Model ń kọ́ àwọn àpẹẹrẹ láti inú dátà." },
      { objective: "O1", q: "Kí ni import ń ṣe nínú Python?", options: ["Ó ń ṣí library kí o lè lo kóòdù rẹ̀", "Ó ń gba fíìmù sílẹ̀", "Ó ń tẹ ọ̀rọ̀ jáde", "Ó ń pa fáìlì rẹ́"], answer: 0, why: "import ń mú library wá sínú ètò rẹ." },
      { objective: "O1", q: "Kí ni ! túmọ̀ sí nínú !pip install transformers nínú Colab?", options: ["Àṣìṣe ni", "Mú un pariwo sí i", "Ṣe èyí gẹ́gẹ́ bí àṣẹ ẹ̀rọ, kì í ṣe Python", "Fi sórí ẹ̀rọ lẹ́ẹ̀mejì"], answer: 2, why: "! ń sọ fún Colab pé kí ó ṣe àṣẹ shell." },
      { objective: "O1", q: "Èwo ló jẹ́ òótọ́ nípa Colab ọ̀fẹ́?", options: ["Ọ̀fẹ́ ni, ṣùgbọ́n ohun èlò rẹ̀ ní ààlà ó sì lè yí padà", "Ohun èlò rẹ̀ kò lópin", "O gbọ́dọ̀ kọ́kọ́ fi sórí ẹ̀rọ", "Lórí fóònù nìkan ló ń ṣiṣẹ́"], answer: 0, why: "Colab sọ pé ohun èlò ọ̀fẹ́ kò dájú, kò sì lópin." },
      { objective: "O2", q: "\"HELP\".lower() ń fúnni ní:", options: ["\"HELP\"", "\"Help\"", "Àṣìṣe kan", "\"help\""], answer: 3, why: "lower() ń sọ gbogbo lẹ́tà di kékeré." },
      { objective: "O2", q: "\"price\" in \"what is the price?\" ń fúnni ní:", options: ["False", "True", "\"price\"", "0"], answer: 1, why: "in ń ṣàyẹ̀wò bóyá ọ̀rọ̀ náà wà nínú text náà." },
      { objective: "O2", q: "Nínú {\"hours\": \"Open 9 to 5.\"}, kí ni \"hours\"?", options: ["Value", "Key", "List kan", "Loop kan"], answer: 1, why: "Apá òsì méjì-méjì náà ni key." },
      { objective: "O3", q: "Chatbot rẹ kò lóye \"when do you open?\" ṣùgbọ́n ó mọ \"hours\". Kí nìdí?", options: ["Colab ti bàjẹ́", "Python kò lè ka ìbéèrè", "Dictionary náà kúrú jù láti ṣiṣẹ́", "Chatbot onífin ń bá òfin tí o kọ nìkan mu"], answer: 3, why: "Ọ̀nà ìsọ̀rọ̀ kọ̀ọ̀kan nílò òfin tirẹ̀ nínú chatbot onífin." },
      { objective: "O3", q: "Nínú loop ìjíròrò, kí ló yẹ kí ó ṣẹlẹ̀ nígbà tí olùlò bá tẹ bye?", options: ["Tẹ ìdágbére jáde kí o sì ṣe break", "Bẹ̀rẹ̀ loop tuntun", "Béèrè password", "Kò sí nǹkankan"], answer: 0, why: "break ń parí loop náà dáadáa." },
      { objective: "O3", q: "Kí nìdí tí model èdè fi wúlò fún chatbot?", options: ["Wọn kì í ṣe àṣìṣe rárá", "Wọn kò nílò kọ̀mpútà", "Wọ́n ń lóye ọ̀pọ̀ ọ̀nà láti sọ ohun kan náà", "Wọ́n ń ṣiṣẹ́ láìsí dátà"], answer: 2, why: "Wọ́n kọ́ láti inú mílíọ̀nù gbólóhùn." },
      { objective: "O4", q: "Kí ni Hugging Face?", options: ["Ìkànnì àjọlò (social media) kan", "Àṣìṣe Python kan", "Eré fídíò kan", "Ojú-òpó àti àwọn library fún pípín model AI ọ̀fẹ́"], answer: 3, why: "Hugging Face ní àwọn model àti library Transformers." },
      { objective: "O4", q: "Ìlà wo ló ń ṣí model sentiment náà?", options: ["import sentiment", "model = load()", "pipeline(\"text-classification\", model=\"distilbert/distilbert-base-uncased-finetuned-sst-2-english\")", "print(\"model\")"], answer: 2, why: "pipeline ń gba iṣẹ́ náà àti orúkọ model." },
      { objective: "O4", q: "Kí nìdí tí ìgbà àkọ́kọ́ tí a ṣe model náà fi pẹ́ jù?", options: ["Colab mọ̀ọ́mọ̀ lọ́ra", "Ó ń gba model náà sílẹ̀", "Ó ń kọ́ ọ láti ìbẹ̀rẹ̀", "Ó ń ṣàyẹ̀wò ímeèlì rẹ"], answer: 1, why: "Àwọn fáìlì model náà ń wọlé (download) ní ìgbà àkọ́kọ́." },
      { objective: "O4", q: "Kí ló yẹ kí o kà kí o tó lo model kan?", options: ["Model card rẹ̀", "Ìtàn browser rẹ", "Àmì Colab", "Kò sí nǹkankan"], answer: 0, why: "Model card ń ṣàlàyé lílo rẹ̀, dátà rẹ̀ àti ìwé àṣẹ rẹ̀." },
      { objective: "O4", q: "Score model sentiment náà ni:", options: ["Bí ọ̀rọ̀ náà ṣe gùn tó", "Iye ọ̀rọ̀ rere", "Bí model náà ṣe dá a lójú tó, láti 0 sí 1", "Máàkì nínú 100"], answer: 2, why: "Score ni ìdánilójú." },
      { objective: "O5", q: "Láti ka iye èrò rere nínú loop, o kọ́kọ́:", options: ["Ṣe positive = 0 ṣáájú loop", "Tẹ positive jáde", "Pa list náà rẹ́", "Ṣe import counter"], answer: 0, why: "Counter ń bẹ̀rẹ̀ láti 0 ṣáájú loop." },
      { objective: "O5", q: "round(0.98765, 2) ń fúnni ní:", options: ["0.98", "0.99", "1", "98"], answer: 1, why: "Tí a bá dín 0.98765 kù sí ẹ̀sẹ̀ méjì, ó di 0.99." },
      { objective: "O6", q: "Èrò wo ni model yìí ṣeé ṣe jù lọ láti ṣì?", options: ["\"I loved it!\"", "\"Great, another rainy game day.\"", "\"This was terrible.\"", "\"Best class ever.\""], answer: 1, why: "Ọ̀rọ̀ ẹ̀gàn ń sọ òdìkejì ohun tí ó ní lọ́kàn, model sì máa ń sábà kùnà láti mọ̀ ọ́n." },
      { objective: "O6", q: "Kí nìdí tí a fi ń lo threshold ìdánilójú?", options: ["Láti mú ètò náà yára", "Láti fi èsì tí kò dájú ránṣẹ́ sí ènìyàn kí ó ṣàyẹ̀wò", "Láti fi èrò búburú pamọ́", "Láti pa score tí ó kéré rẹ́"], answer: 1, why: "Èsì tí ìdánilójú rẹ̀ kéré nílò àyẹ̀wò ènìyàn." },
      { objective: "O6", q: "Èwo ni KÒ láìléwu láti fi sínú notebook tí o pín?", options: ["List àwọn èrò tí a hùmọ̀", "Ìlà àlàyé tí ó bẹ̀rẹ̀ pẹ̀lú #", "Print statement kan", "Password tàbí API key rẹ"], answer: 3, why: "Àṣírí nínú notebook tí a pín ṣeé dà kọ, a sì lè ṣì í lò." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      2,
      5,
      7,
      8,
      10,
      14,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "A ṣí model, a sì lò ó",
        objective: "O4",
        notYet: "Model náà kò ṣí, tàbí kò fún wa ní label tàbí score kankan.",
        meets: "Model sentiment tí a ti kọ́ tẹ́lẹ̀ ń ṣiṣẹ́, ó sì ń fún èrò kọ̀ọ̀kan ní label àti score.",
        exceeds: "Notebook náà kọ ohun tí model card sọ pé a fi kọ́ model náà sílẹ̀."
      },
      {
        name: "Loop àti ìtẹ̀jáde",
        objective: "O5",
        notYet: "Èrò kò tó mẹ́fà, tàbí a kò tẹ èrò kọ̀ọ̀kan jáde pẹ̀lú label àti score rẹ̀.",
        meets: "Ó kéré tán èrò mẹ́fà, a tẹ ọ̀kọ̀ọ̀kan jáde pẹ̀lú label rẹ̀ àti score tí a dín kù.",
        exceeds: "Ìtẹ̀jáde náà tò dáadáa pẹ̀lú f-string."
      },
      {
        name: "Iye",
        objective: "O5",
        notYet: "Iye èrò rere àti búburú kò sí tàbí kò tọ́.",
        meets: "A tẹ iye tó tọ́ ti èrò rere àti búburú jáde.",
        exceeds: "Ó tún tẹ iye tí a sàmì sí pẹ̀lú \"check by hand\" jáde."
      },
      {
        name: "Threshold ìdánilójú",
        objective: "O6",
        notYet: "Kò sí threshold, tàbí a kò sàmì sí score tí ó kéré.",
        meets: "Gbogbo score tí ó kéré sí 0.80 ní àmì \"check by hand\".",
        exceeds: "Ó ní èrò ẹ̀gàn tàbí èyí tí ó dàpọ̀, ó sì ṣàlàyé ìdí tí model fi lè ṣì í."
      },
      {
        name: "Lílo tó yẹ",
        objective: "O6",
        notYet: "Notebook náà ní ìránṣẹ́ àṣírí láìsí àṣẹ, tàbí password tàbí API key.",
        meets: "Èrò tí a hùmọ̀ tàbí tí a gba àṣẹ fún nìkan, kò sì sí password tàbí key nínú notebook.",
        exceeds: "Ó fi àkíyèsí kún un pé AI ló fún wa ní àwọn label, ènìyàn sì ń ṣàyẹ̀wò àwọn tí kò dájú."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric ètò títo èrò",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé wọ́n ṣe tàbí yí ètò AI míì padà láàárín ọjọ́ 30 lẹ́yìn ẹ̀kọ́ náà (ìwádìí ìtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n tẹ̀ síwájú sí ẹ̀kọ́ míì, bí Introduction to Machine Learning tàbí Data Science for Beginners",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n fi ètò títo èrò hàn nínú àkójọ iṣẹ́ (portfolio), kíláàsì, ẹgbẹ́ tàbí ìbéèrè iṣẹ́"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tàbí laptop pẹ̀lú browser wẹ́ẹ̀bù",
      "Àkáǹtì Google ọ̀fẹ́ láti lo Google Colab",
      "Èrò kúkúrú mẹ́fà tàbí jù bẹ́ẹ̀ lọ tí a hùmọ̀, bí àpẹẹrẹ láti ìdánrawò, kíláàsì tàbí ṣọ́ọ̀bù kékeré",
      "Nǹkan bí ìṣẹ́jú 60 sí 75 lápapọ̀, pẹ̀lú àkókò àṣeṣe"
    ],
    facilitatorNotes: [
      "Ṣáájú kíláàsì, gba model náà sílẹ̀ lẹ́ẹ̀kan lórí network kan náà láti rí i pé ó ṣiṣẹ́; network ilé-ìwé máa ń dí gbígba model sílẹ̀ nígbà míì.",
      "Jẹ́ kí àwọn akẹ́kọ̀ọ́ lo èrò tí a hùmọ̀ tàbí èyí tí wọ́n ní àṣẹ láti lò; kì í ṣe ìránṣẹ́ àṣírí gidi rárá.",
      "Rán àwọn akẹ́kọ̀ọ́ létí pé kí wọ́n má ṣe fi password tàbí API key sínú notebook rárá, pàápàá èyí tí wọ́n ń pín.",
      "Ní kí akẹ́kọ̀ọ́ kọ̀ọ̀kan wá èrò kan tí model náà ṣì, kí ẹ sì jíròrò ìdí rẹ̀ papọ̀.",
      "Ohun èlò ọ̀fẹ́ Colab lè tán; tí ìgbà ìṣiṣẹ́ (session) kan bá dúró, fi hàn àwọn akẹ́kọ̀ọ́ bí wọ́n ṣe ń tún so pọ̀ àti bí wọ́n ṣe ń tún àwọn cell ṣe láti òkè."
    ]
  }
};

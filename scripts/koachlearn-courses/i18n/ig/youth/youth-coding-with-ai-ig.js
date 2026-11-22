"use strict";

// Koach Learn course (Igbo translation of youth/youth-coding-with-ai.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "youth-coding-with-ai-ig",
  lang: "ig",
  translationOf: "youth-coding-with-ai",
  category: "Youth",
  name: "Mmalite Ide Koodu na AI",
  skills: "Ịgba Python na notebook n'efu n'ịntanetị, Iji variable na input, Ime mkpebi site n'if, Imegharị ihe site na loop, Ịrịọ AI ka ọ kọwaa ma dozie koodu",
  outcome: "ide ma gbaa obere egwuregwu ajụjụ (quiz) Python na notebook n'efu n'ịntanetị, jiri ngwa enyemaka AI kọwaa koodu ma nyere aka dozie mperi, ma kọwaa ihe ahịrị ọ bụla nke mmemme gị na-eme.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị nọ n'afọ iri na ụma ndị na-edebeghị koodu mgbe ọ bụla, ma ọ bụ ndị nwara otu ugboro ma kwụsị n'ụzọ. Ị chọghị ịma mgbakọ na mwepụ nke ọma. Ị chọrọ ọchịchọ ịmata ihe, na ihe dị ka nkeji ise maka nkuzi ọ bụla.",
    "Ị ga-ede ezi koodu Python na Google Colab, notebook n'efu na-arụ ọrụ na web browser, ya mere ị nwere ike iji kọmputa ụlọ akwụkwọ ma ọ bụ nke ọba akwụkwọ. Ị ga-amụta ihe ndị bụ isi e ji ewu koodu, wee mụta iji ngwa enyemaka AI dị ka onye nkuzi nwere ndidi: ịkọwa koodu, ịchọta mperi na ịtụ aro, ebe gị onwe gị ka bụ onye ghọtara ma dee mmemme ahụ.",
    "Tupu i debanye aha na ngwa ọ bụla, lelee iwu ụlọ akwụkwọ gị gbasara iji AI na afọ ole ngwa ahụ chọrọ, ma gwa nne na nna gị ma ọ bụ onye na-elekọta gị. Nkuzi ọ bụla na-ejedebe n'ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Wuo egwuregwu ajụjụ Python na Google Colab nwere opekata mpe ajụjụ 5 gbasara isiokwu ị hụrụ n'anya (egwuregwu, egwuregwu ịgba bọọlụ, otu egwu, ma ọ bụ isiokwu ụlọ akwụkwọ). Ọ ga-ajụ aha onye na-egwu, jụọ ajụjụ ndị ahụ, debe akara, ma gosi ozi ikpeazụ. Jiri ngwa enyemaka AI kọwaa ma ọ bụ dozie opekata mpe otu akụkụ, wee dee comment n'elu akụkụ ọ bụla na-ekwu n'okwu nke gị ihe ọ na-eme.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nọ n'afọ iri na ụma ndị na-edebeghị koodu mgbe ọ bụla, ma ọ bụ ndị nwara otu ugboro ma kwụsị n'ụzọ, gụnyere ndị na-eche na ha amaghị mgbakọ na mwepụ nke ọma.",
    startingPoint: "Ha na-eji ekwentị, ngwa (app) na egwuregwu kwa ụbọchị ma nwee ike iji web browser. Ha edebeghị ma ọ bụ gbaa mmemme ọ bụla, ma ọ nwere ike ịbụ na ha hụrụ AI ka ọ na-ede koodu n'amaghị otu o si arụ ọrụ.",
    gap: "Ide koodu na-emeghe ụzọ maka ọrụ teknụzụ ma na-eme ka AI ghara ịdị ka ihe omimi, ma ịdepụta koodu AI anaghị akụzi ihe ọ bụla, na-emebikwa iwu ụlọ akwụkwọ n'ọtụtụ klas. Ndị nọ n'afọ iri na ụma kwesịrị ide ma gbaa ezi Python n'onwe ha, jiri AI dị ka onye nkuzi iji kọwaa koodu ma dozie mperi.",
    constraints: [
      "Oke afọ: Colab chọrọ akaụntụ Google, ngwa AI nwekwara afọ kacha nta; nne na nna ma ọ bụ onye nlekọta na-etinye aka maka ndị na-erubeghị afọ 18",
      "Iwu AI nke ụlọ akwụkwọ dị iche iche; ọrụ a na-enye akara nwere ike ọ gaghị ekwe AI",
      "Ngwaọrụ: kọmputa ụlọ akwụkwọ, ọba akwụkwọ ma ọ bụ nke ụlọ nwere web browser; ọ dịghị ihe a ga-awụnye",
      "Nzuzo: etinyela okwuntughe, adreesị, NJ ma ọ bụ nọmba ekwentị na ngwa AI",
      "Ndị mbido: okwu dị mfe, a na-akọwa okwu ọ bụla, ihe dị ka nkeji ise maka nkuzi ọ bụla"
    ],
    prerequisites: "Ọ dịghị. \"Gịnị bụ AI? (maka ndị ntorobịa)\" bụ ihe ọmụmụ mbụ bara uru."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "N'okwu nke gị", action: "ịkọwa ihe koodu na mmemme bụ, na otu esi eji AI dị ka onye nkuzi kama onye na-edere gị ọrụ, n'ime iwu ụlọ akwụkwọ gị", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi" },
    { id: "O2", condition: "Site n'iji akaụntụ Google e kwere ka i jiri", action: "imeghe notebook Google Colab ma gbaa koodu Python na-egosi ederede", standard: "n'enweghị onye nyere gị aka, na ihe ọ gosiri (output) pụtara n'okpuru cell ahụ" },
    { id: "O3", condition: "Mgbe e nyere gị quiz nwere otu ajụjụ ka i wuo", action: "ide Python na-eji variable, input, if na else, na loop", standard: "nke mere na ọ na-arụ ọrụ nke ọma ma azịza ziri ezi ma azịza na-ezighi ezi" },
    { id: "O4", condition: "Mgbe e nyere gị ahịrị koodu ole na ole", action: "ịrịọ ngwa enyemaka AI ka ọ kọwaa koodu ahụ ahịrị n'ahịrị, wee gbanwee otu ihe, buru amụma ihe ga-eme ma gbaa ya", standard: "n'etinyeghị ozi nzuzo ọ bụla" },
    { id: "O5", condition: "Mgbe e nyere gị ozi mperi Python", action: "ịchọta ahịrị nwere nsogbu, dozie mperi ahụ site n'enyemaka AI ma ọ dị mkpa, ma gbaa ndozi ahụ n'onwe gị", standard: "ruo mgbe mmemme ahụ na-arụ ọrụ n'enweghị mperi" },
    { id: "O6", condition: "Na-amalite site n'atụmatụ e dere dị ka comment", action: "iwu egwuregwu quiz nwere ajụjụ 5 otu akụkụ n'otu oge ma kwuo otu i si jiri AI", standard: "nwere aha onye na-egwu, akara, ozi ikpeazụ na comment n'elu akụkụ ọ bụla n'okwu nke gị" }
  ],
  chapters: [
    {
      name: "Isi 1: Ahịrị koodu mbụ gị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe koodu bụ, na ebe AI dabara",
          minutes: 4,
          goal: "Kọwaa ihe mmemme bụ na otu ngwa enyemaka AI nwere ike isi nyere gị aka ịmụta ide koodu.",
          text: [
            "Koodu bụ ndepụta ntụziaka kọmputa na-agbaso kpọmkwem, n'usoro. Mmemme bụ otu ntụziaka ndị ahụ na-arụ otu ọrụ, dị ka egwuregwu, app ma ọ bụ igwe mgbakọ. Python bụ asụsụ koodu a ma ama n'ihi na okwu ya yiri bekee nke ukwuu.",
            "Ngwa enyemaka AI dị ka ChatGPT, Microsoft Copilot na Google Gemini nwere ike ide ma kọwaa koodu. Nke ahụ bara uru, ma ọ bụrụ na i depụtara koodu ị ghọtaghị, ị gaghị amụta ihe ọ bụla, ị gaghịkwa enwe ike idozi ya mgbe ọ mebiri. N'ihe ọmụmụ a, AI bụ onye nkuzi gị, ọ bụghị onye na-edere gị ọrụ.",
            "Ụlọ akwụkwọ nwere iwu dị iche iche gbasara AI. Ụfọdụ klas na-ekwe ya maka omume ma ọ bụghị maka ọrụ a na-enye akara. Lelee iwu onye nkuzi gị mgbe niile, ma kwuo mgbe i jiri AI. Ọtụtụ ngwa AI nwekwara afọ kacha nta, ya mere gụọ usoro ngwa ahụ ma jụọ nne na nna gị ma ọ bụ onye nlekọta gị tupu i debanye aha."
          ],
          words: [["Koodu (code)", "ntụziaka e dere ka kọmputa gbasoo."], ["Mmemme (program)", "otu ntụziaka na-arụ otu ọrụ."], ["Python", "asụsụ koodu a ma ama nke dị mfe ịgụ."]],
          slides: [
            { title: "Koodu bụ ntụziaka", bullets: ["Kọmputa na-agbaso ha kpọmkwem, n'usoro", "Mmemme bụ koodu na-arụ otu ọrụ", "Python yiri bekee nke ukwuu"] },
            { title: "AI bụ onye nkuzi gị", bullets: ["Ọ nwere ike ịkọwa koodu ahịrị n'ahịrị", "Ọ nwere ike inyere aka ịchọta mperi", "Edepụtala koodu ị ghọtaghị"] },
            { title: "Tupu ịmalite", bullets: ["Lelee iwu AI nke ụlọ akwụkwọ gị", "Lelee afọ kacha nta ngwa ahụ chọrọ", "Jụọ nne na nna gị ma ọ bụ onye nlekọta tupu i debanye aha"] }
          ],
          tryIt: "Dee otu obere mmemme ị ga-achọ iwu otu ụbọchị, dị ka quiz gbasara egwuregwu kacha amasị gị ma ọ bụ igwe mgbakọ tip maka ọrụ mbụ gị. Wee dee otu ahịrịokwu banyere otu AI nwere ike isi nyere gị aka ịmụta ya n'emeghị ya maka gị.",
          youCanNow: "ikwu ihe koodu na mmemme bụ, ma kọwaa otu esi eji AI dị ka onye nkuzi kama ụzọ mkpirisi.",
          quickCheck: [
            { objective: "O1", q: "Gịnị mere Python ji bụrụ asụsụ koodu mbụ a ma ama?", options: ["Ọ na-arụ ọrụ naanị na ekwentị", "Ọ chọghị kọmputa", "Okwu ya yiri bekee nke ukwuu", "Ọ na-ede onwe ya"], answer: 2, why: "Okwu Python yiri bekee nke ukwuu, nke na-eme ka ọ dị mfe ịgụ." },
            { objective: "O1", q: "Enyi gị kwuru, \"Naanị mee ka AI dee mmemme gị niile ma nyefee ya.\" Gịnị ka ị ga-ekwu?", options: ["M ga-eji AI dị ka onye nkuzi ma dee koodu ahụ n'onwe m, na-agbaso iwu onye nkuzi m", "Ọ dị mma; ọ dịghị onye ga-ama", "Naanị ma ọ dị ka ihe siri ike", "M ga-edepụta ya ma gbanwee aha ndị ahụ"], answer: 0, why: "Ịdepụta koodu ị ghọtaghị anaghị akụzi ihe ọ bụla, ọ nwekwara ike imebi iwu ụlọ akwụkwọ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịgba koodu Python mbụ gị na Google Colab",
          minutes: 5,
          goal: "Mepee notebook Colab n'efu ma gbaa otu ahịrị Python.",
          text: [
            "Google Colab bụ notebook n'efu na-agba Python na web browser gị. Ị chọghị iwunye ihe ọ bụla. Ị chọrọ akaụntụ Google. Lelee iwu afọ ya, ma ọ bụrụ na ị erubeghị afọ 18, buru ụzọ jụọ nne na nna gị ma ọ bụ onye nlekọta gị; akaụntụ Google nke ụlọ akwụkwọ nwere ike ịrụ ọrụ ma ọ bụrụ na ụlọ akwụkwọ gị kwere Colab.",
            "E ji cell mee notebook. Cell koodu bụ igbe ebe ị na-ede Python. Ị na-pịa bọtịnụ play dị n'akụkụ cell ahụ (ma ọ bụ Shift na Enter) iji gbaa ya, nsonaazụ ya ewee pụta n'okpuru.",
            "Iwu mbụ ọtụtụ ndị na-ede koodu na-amụta bụ print. Ọ na-egosi okwu na ihuenyo. Ederede na-aba n'ime akara nkọwa (quotes), dị ka nke a: print(\"Hello, I am learning Python\")."
          ],
          steps: ["Mepee web browser ma gaa na colab.research.google.com.", "Banye (sign in) site n'akaụntụ Google e kwere ka i jiri.", "Mepụta notebook ọhụrụ.", "Pịa n'ime cell koodu mbụ ma dee: print(\"Hello, I am learning Python\")", "Pịa bọtịnụ play ma ọ bụ Shift na Enter. Gụọ output dị n'okpuru cell ahụ."],
          words: [["Notebook", "peeji ebe ị na-ede ma na-agba koodu n'obere igbe a na-akpọ cell."], ["Cell", "otu igbe na notebook ebe ị na-ede koodu."], ["Output", "ihe mmemme ahụ na-egosi mgbe ọ gbachara."]],
          slides: [
            { title: "Google Colab", bullets: ["Python n'efu na web browser gị", "Ọ dịghị ihe a ga-awụnye", "Ọ chọrọ akaụntụ Google e kwere ka i jiri"] },
            { title: "Notebook na cell", bullets: ["Dee koodu na cell", "Pịa play ma ọ bụ Shift + Enter", "Output na-apụta n'okpuru"] },
            { title: "Iwu mbụ gị", bullets: ["print(\"Hello, I am learning Python\")", "Ederede na-aba n'ime quotes", "print na-egosi ya na ihuenyo"] }
          ],
          tryIt: "Na notebook Colab ọhụrụ, print ahịrị atọ: aha mbụ gị, egwu ma ọ bụ egwuregwu kacha amasị gị, na otu ebumnuche maka ihe ọmụmụ a. Gbaa cell ahụ ma lelee na ahịrị atọ ahụ pụtara.",
          youCanNow: "imeghe notebook Colab, dee Python na cell, gbaa ya, ma gụọ output ya.",
          quickCheck: [
            { objective: "O2", q: "Na Python, gịnị ka print na-eme?", options: ["Ọ na-eziga koodu gị na igwe na-ebipụta akwụkwọ", "Ọ na-egosi okwu ma ọ bụ uru (values) na ihuenyo", "Ọ na-ehichapụ cell", "Ọ na-echekwa notebook"], answer: 1, why: "print na-egosi ederede ma ọ bụ uru n'okpuru cell mgbe ọ gbara." },
            { objective: "O2", q: "Ị dị afọ 14 ma chọọ iji Colab n'ụlọ. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Mepụta akaụntụ nwere afọ ụgha", "Jiri akaụntụ onye ọbịa", "Hapụ Colab", "Lelee iwu afọ ma jụọ nne na nna gị ma ọ bụ onye nlekọta, ma ọ bụ jiri akaụntụ ụlọ akwụkwọ e kwere"], answer: 3, why: "Colab chọrọ akaụntụ Google; lelee iwu ya ma gwa nne na nna gị ma ọ bụ onye nlekọta ma ọ bụrụ na ị erubeghị afọ 18." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Variable, input, if na loop",
          minutes: 6,
          goal: "Jiri variable, rịọ input, mee mkpebi site n'if, ma megharịa ihe site na loop.",
          text: [
            "Variable bụ igbe nwere aha na-echekwa uru (value). score = 0 na-emepụta igbe a na-akpọ score ma tinye 0 n'ime ya. Emesịa, score = score + 1 na-agbakwunye otu akara.",
            "input na-arịọ onye na-egwu ka o dee ihe: name = input(\"What is your name? \"). Ahịrị if na-eme mkpebi: if answer == \"Paris\": print(\"Correct!\") else: print(\"Not quite\"). Akara nhata abụọ pụtara \"bụ otu ihe ahụ\". A na-eji oghere (spaces) akwanye ahịrị ndị dị n'okpuru if na else n'ime; a na-akpọ nke a indentation, Python chọkwara ya.",
            "Loop na-emegharị koodu. for i in range(3): print(\"Go team!\") na-egosi mkpu ahụ ugboro atọ. Echiche anọ ndị a, variable, input, if na loop, ezuola iwu egwuregwu quiz."
          ],
          steps: ["Mee variable: score = 0", "Rịọ input: name = input(\"What is your name? \")", "Mee mkpebi site n'if na else, kwanye ahịrị ndị dị n'okpuru nke ọ bụla n'ime.", "Megharịa ihe site na: for i in range(3):"],
          words: [["Variable", "igbe nwere aha na-echekwa uru."], ["Input", "ihe onye na-eji mmemme na-ede mgbe ọ na-agba."], ["Ahịrị if (if statement)", "koodu na-agba naanị mgbe ihe bụ eziokwu."], ["Loop", "koodu na-emegharị onwe ya."], ["Indentation", "oghere dị na mmalite ahịrị na-egosi ahịrị ndị so ọnụ."]],
          slides: [
            { title: "Variable na-echekwa uru", bullets: ["score = 0", "score = score + 1 na-agbakwunye otu akara"] },
            { title: "Input na if", bullets: ["name = input(\"What is your name? \")", "if answer == \"Paris\": wee print Correct", "== pụtara \"bụ otu ihe ahụ\""] },
            { title: "Loop na-emegharị", bullets: ["for i in range(3): na-emegharị ugboro 3", "Kwanye ahịrị ndị dị n'ime loop n'ime"] },
            { title: "Ihe anọ e ji ewu", bullets: ["Variable, input, if, loop", "Ezuola iwu egwuregwu quiz"] }
          ],
          tryIt: "Dee quiz nwere otu ajụjụ: jụọ aha onye na-egwu, jụọ otu ajụjụ gbasara isiokwu ma ọ bụ egwuregwu kacha amasị gị, ma jiri if na else gosi \"Correct\" ma ọ bụ \"Not quite\". Gbaa ya ugboro abụọ, otu ugboro n'azịza ziri ezi, otu ugboro n'azịza na-ezighi ezi.",
          youCanNow: "iji variable, input, ahịrị if na loop n'obere mmemme Python.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ indentation na Python?", options: ["Ụdị mperi", "Oghere na-akwanye ahịrị n'ime n'okpuru if, else ma ọ bụ loop", "Ahịrị comment", "Bọtịnụ play"], answer: 1, why: "Indentation na-egosi ahịrị ndị dị n'okpuru if, else ma ọ bụ loop, Python chọkwara ya." },
            { objective: "O3", q: "Ị chọrọ ka quiz ahụ gbakwunye otu akara maka azịza ziri ezi. Kedu ahịrị ị ga-ede n'okpuru if?", options: ["score = score + 1", "print(score)", "score == 1", "input(score)"], answer: 0, why: "score = score + 1 na-agbakwunye otu akara n'uru dị na score." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ahịrị koodu mbụ gị",
        questions: [
          { objective: "O1", q: "Gịnị bụ mmemme?", options: ["Otu ntụziaka na-arụ otu ọrụ", "Ụdị keyboard", "Adreesị weebụsaịtị", "Igwe egwuregwu vidiyo"], answer: 0, why: "Mmemme bụ koodu, otu ntụziaka, na-arụ otu ọrụ." },
          { objective: "O1", q: "Klas gị na-ekwe AI maka omume ma ọ bụghị maka ihe omume ụlọ a na-enye akara. Gịnị ka ị ga-eme?", options: ["Jiri AI mee ihe omume ụlọ ahụ n'agbanyeghị", "Jiri AI mee omume ma mee ọrụ a na-enye akara n'onwe gị", "Ekwela ide koodu ọzọ", "Rịọ enyi gị ka o jiri AI mee ya maka gị"], answer: 1, why: "Ịgbaso iwu onye nkuzi gị bụ akụkụ nke iji AI n'eziokwu." },
          { objective: "O2", q: "Na Colab, kedu otu ị ga-esi gbaa cell koodu?", options: ["Mechie browser", "Bipụta peeji ahụ", "Pịa bọtịnụ play ma ọ bụ Shift na Enter", "Malitegharịa kọmputa"], answer: 2, why: "Bọtịnụ play ma ọ bụ Shift na Enter na-agba cell ahụ." },
          { objective: "O3", q: "Gịnị ka score = score + 1 na-eme?", options: ["Ọ na-ehichapụ akara", "Ọ na-egosi okwu score", "Ọ na-arịọ onye na-egwu akara", "Ọ na-agbakwunye otu n'uru dị na score"], answer: 3, why: "Ọ na-ewere akara dị ugbu a ma gbakwunye otu." },
          { objective: "O3", q: "Gịnị ka for i in range(3): na-eme?", options: ["Ọ na-emegharị koodu a kwanyere n'ime ugboro 3", "Ọ na-ajụ ajụjụ 3", "Ọ na-emepụta variable 3", "Ọ na-akwụsị mmemme"], answer: 0, why: "Loop for nwere range(3) na-emegharị koodu dị n'ime ya ugboro atọ." }
        ]
      }
    },
    {
      name: "Isi 2: Ide koodu na onye enyemaka AI",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịrịọ AI ka ọ kọwaa koodu",
          minutes: 5,
          goal: "Rịọ ngwa enyemaka AI ka ọ kọwaa koodu ahịrị n'ahịrị, ma lelee na ị ghọtara ya.",
          text: [
            "Tinye ahịrị koodu ole na ole n'ime ngwa enyemaka AI ma jụọ: \"Kọwaa koodu Python a ahịrị n'ahịrị maka onye mbido. Jiri okwu dị mfe.\" Nkọwa dị mma na-agwa gị ihe ahịrị ọ bụla na-eme na ihe mere o ji eme ya.",
            "Wee nwalee nghọta gị. Gbanwee otu ihe na koodu ahụ, chee ihe ga-eme, ma gbaa ya. Ọ bụrụ na echiche gị ziri ezi, ị ghọtara ya. Ọ bụrụ na ọ bụghị, jụọ AI: \"Agbanwere m nke a ma tụọ anya nke ahụ. Gịnị mere o ji mee ihe ọzọ?\"",
            "Etinyela ozi nzuzo na ngwa AI: ọ bụghị okwuntughe, adreesị ụlọ, nọmba NJ ụlọ akwụkwọ ma ọ bụ nọmba ekwentị. Koodu maka ọrụ klas achọghị nke ọ bụla n'ime ha."
          ],
          steps: ["Depụta ahịrị koodu 3 ruo 10.", "Jụọ: \"Kọwaa koodu Python a ahịrị n'ahịrị maka onye mbido.\"", "Gbanwee otu ihe ma chee ihe ga-eme.", "Gbaa ya ma tụnyere. Jụọ ajụjụ nsochi ma ọ bụrụ na echiche gị ezighi ezi."],
          words: [["Ịkọwa ahịrị n'ahịrị", "ịga na koodu otu ahịrị n'otu oge ma kwuo ihe nke ọ bụla na-eme."]],
          slides: [
            { title: "Rịọ maka nkọwa", bullets: ["Tinye ahịrị ole na ole", "\"Kọwaa nke a ahịrị n'ahịrị maka onye mbido\"", "Rịọ maka okwu dị mfe"] },
            { title: "Nwalee nghọta gị", bullets: ["Gbanwee otu ihe", "Chee ihe ga-eme", "Gbaa ya ma tụnyere"] },
            { title: "Debe ozi nzuzo n'ebe ọ na-adịghị", bullets: ["Ọ bụghị okwuntughe ma ọ bụ nọmba NJ ụlọ akwụkwọ", "Ọ bụghị adreesị ụlọ ma ọ bụ nọmba ekwentị"] }
          ],
          tryIt: "Tinye quiz otu ajụjụ gị site na Nkuzi 3 n'ime ngwa enyemaka AI ma rịọ ya ka ọ kọwaa ahịrị ọ bụla. Wee gbanwee azịza ziri ezi ka ọ bụrụ nke ọhụrụ, chee ihe ga-eme, ma gbaa ya.",
          youCanNow: "inweta nkọwa koodu doro anya ahịrị n'ahịrị site n'AI ma nwalee na ị ghọtara ya n'ezie.",
          quickCheck: [
            { objective: "O4", q: "Gịnị na-eme ka nkọwa koodu AI dị mma?", options: ["Ọ dị ogologo dịka o kwere mee", "Ọ na-enye naanị azịza", "Ọ na-ekwu ihe ahịrị ọ bụla na-eme na ihe mere", "Ọ na-edegharị ihe niile"], answer: 2, why: "Nkọwa dị mma na-ekwu ihe ahịrị ọ bụla na-eme na ihe mere, n'okwu dị mfe." },
            { objective: "O4", q: "Ị gbanwere otu ahịrị, chee ihe ga-eme, mmemme ahụ wee mee ihe ọzọ. Gịnị na-esote?", options: ["Hichapụ mmemme ahụ", "Jụọ AI: \"Agbanwere m nke a ma tụọ anya nke ahụ. Gịnị mere o ji mee ihe ọzọ?\"", "Chee ọzọ n'agbaghị ya", "Tinye okwuntughe gị ka AI wee lelee"], answer: 1, why: "Ajụjụ nsochi na-akọwa ihe ị tụrụ anya na-enyere gị aka ịghọta koodu ahụ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịchọta na idozi mperi site n'AI",
          minutes: 5,
          goal: "Gụọ ozi mperi ma jiri AI nyere aka dozie bug.",
          text: [
            "Bug bụ mperi dị na koodu. Mgbe Python enweghị ike ịgba otu ahịrị, ọ na-egosi ozi mperi. Ahịrị ikpeazụ nke ozi ahụ na-akpọkarị aha nsogbu ahụ, dị ka SyntaxError (e dehiere ihe) ma ọ bụ IndentationError (oghere dị na mmalite ahịrị ezighi ezi). Ọ na-egosikwa nọmba ahịrị ahụ.",
            "Buru ụzọ nwaa n'onwe gị: lelee ahịrị ahụ maka quote, bracket, colon ma ọ bụ oghere na-efu efu. Ọ bụrụ na ị kwụsịrị n'ụzọ, tinye koodu ahụ na ozi mperi zuru oke n'ime ngwa enyemaka AI ma jụọ: \"Gịnị ka mperi a pụtara, kedu otu m ga-esi dozie ya? Kọwaa ihe mere.\"",
            "AI nwekwara ike ime mperi gbasara koodu. Gbaa ụdị e doziri n'onwe gị. Ọ bụrụ na mperi ahụ gbanwere ma ọ bụ ka dị, gwa AI kpọmkwem ihe mere."
          ],
          steps: ["Gụọ ahịrị ikpeazụ nke ozi mperi na nọmba ahịrị ahụ.", "Lelee ahịrị ahụ maka quote, bracket, colon ma ọ bụ oghere na-efu efu.", "Ọ bụrụ na ị kwụsịrị n'ụzọ, tinye koodu na ozi mperi zuru oke n'ime ngwa enyemaka AI.", "Jụọ ihe ọ pụtara na ihe mere ndozi ahụ ji arụ ọrụ.", "Gbaa ndozi ahụ n'onwe gị ma lelee na ọ na-arụ ọrụ."],
          words: [["Bug", "mperi dị na koodu."], ["Ozi mperi (error message)", "ndetu Python na-ekwu ihe mehiere na n'ahịrị ole."], ["Debugging", "ịchọta na idozi bug."]],
          slides: [
            { title: "Bug na-eme onye ọ bụla", bullets: ["Ozi mperi bụ ihe ngosi, ọ bụghị ọdịda", "Gụọ ahịrị ikpeazụ na nọmba ahịrị"] },
            { title: "Buru ụzọ nwaa n'onwe gị", bullets: ["Quote ma ọ bụ bracket na-efu efu?", "Colon na-efu efu mgbe if ma ọ bụ for gasịrị?", "Oghere ezighi ezi na mmalite ahịrị?"] },
            { title: "Wee jụọ AI", bullets: ["Tinye koodu na ozi mperi zuru oke", "Jụọ ihe ọ pụtara na ihe mere ndozi ji arụ ọrụ", "Gbaa ndozi ahụ n'onwe gị"] }
          ],
          tryIt: "Na quiz gị, kpachara anya hichapụ colon dị n'ahịrị if ma gbaa ya. Gụọ mperi ahụ. Rịọ ngwa enyemaka AI ka ọ kọwaa ya, dozie ya, ma gbaa mmemme ahụ ọzọ.",
          youCanNow: "ịgụ ozi mperi Python, chọọ nsogbu ahụ, ma jiri AI ghọta ma dozie bug.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka SyntaxError na-apụtakarị?", options: ["Kọmputa mebiri emebi", "Ịntanetị adịghị", "Azịza gị ezighi ezi", "E dehiere ihe, dị ka quote ma ọ bụ colon na-efu efu"], answer: 3, why: "SyntaxError pụtara na Python enweghị ike ịgụ ihe i dere." },
            { objective: "O5", q: "Python gosiri mperi n'ahịrị 4. Gịnị ka ị ga-ebu ụzọ lelee?", options: ["Ahịrị 4, maka quote, bracket, colon ma ọ bụ oghere na-efu efu", "Naanị ahịrị 1", "Ọsọ ịntanetị gị", "Ọ dịghị ihe; malitegharịa kọmputa"], answer: 0, why: "Ozi ahụ na-egosi nọmba ahịrị; buru ụzọ lelee ahịrị ahụ n'onwe gị." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Iwu egwuregwu quiz gị",
          minutes: 6,
          goal: "Hazie ma wuo egwuregwu quiz nwere ajụjụ 5 site n'enyemaka AI.",
          text: [
            "A na-eji obere akụkụ ewu nnukwu mmemme. Buru ụzọ hazie: ihe mmemme ahụ ga-ebu ụzọ kwuo, ihe ọ ga-ajụ, otu ọ ga-esi debe akara, na ihe ọ ga-ekwu na njedebe. Dee atụmatụ ahụ dị ka comment dị mkpụmkpụ. Comment na-amalite na # ma Python anaghị elebara ya anya.",
            "Wuo otu akụkụ n'otu oge ma gbaa ya mgbe akụkụ ọ bụla gasịrị. Ọ bụrụ na ị chọrọ echiche, jụọ AI: \"Kedu otu m ga-esi mee ka quiz m gwa onye na-egwu akara ya n'ime 5?\" Wee dee ya n'onwe gị ma rịọ AI ka o lelee ya.",
            "Mgbe ọ rụrụ ọrụ, mee ka enyi gị ma ọ bụ onye ezinụlọ gị gwuo ya. Lee ebe ọ na-agbagwoju ha anya, ma mee ka ọ ka mma. Ọ bụrụ na ị na-enyefe ya maka ụlọ akwụkwọ, kwuo otu i si jiri AI."
          ],
          steps: ["Dee atụmatụ dị ka comment #: nnabata, ajụjụ, akara, njedebe.", "Dee koodu nnabata ma jụọ aha onye na-egwu. Gbaa ya.", "Tinye otu ajụjụ nwere if na else na-agbanwe akara. Gbaa ya.", "Tinye ajụjụ anọ ọzọ. Gbaa ya.", "Gosi akara ikpeazụ na ozi. Mee ka mmadụ gwuo ya."],
          words: [["Comment", "ndetu dị na koodu na-amalite na # nke Python anaghị elebara anya."], ["Atụmatụ (plan)", "ndepụta dị mkpụmkpụ nke ihe mmemme gị ga-eme, n'usoro."]],
          slides: [
            { title: "Jiri comment hazie", bullets: ["# welcome", "# ask 5 questions", "# keep score", "# final message"] },
            { title: "Wuo n'obere akụkụ", bullets: ["Tinye otu akụkụ", "Gbaa ya", "Dozie ya, wee tinye nke na-esote"] },
            { title: "AI dị ka onye enyemaka", bullets: ["Rịọ maka echiche, wee dee ya n'onwe gị", "Rịọ AI ka o lelee koodu gị", "Kwuo otu i si jiri AI n'ọrụ ụlọ akwụkwọ"] },
            { title: "Nwalee ya na ezi onye na-egwu", bullets: ["Mee ka enyi gị gwuo ya", "Lee ebe ọ na-agbagwoju ha anya", "Mee ka ọ ka mma"] }
          ],
          tryIt: "Ọrụ ikpeazụ: wuo egwuregwu quiz Python na Colab nwere opekata mpe ajụjụ 5 gbasara isiokwu ị hụrụ n'anya. Jụọ aha onye na-egwu, debe akara, gosi ozi ikpeazụ, jiri AI kọwaa ma ọ bụ dozie otu akụkụ, ma dee comment n'elu akụkụ ọ bụla n'okwu nke gị.",
          youCanNow: "ịhazi, wuo, nwalee ma kọwaa obere mmemme Python, jiri AI dị ka onye enyemaka ọ bụghị onye nnọchi.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ comment na Python?", options: ["Ahịrị na-egosi ederede", "Ụdị loop", "Ahịrị na-amalite na # nke Python anaghị elebara anya", "Ozi mperi"], answer: 2, why: "Comment na-amalite na #; ha bụ ndetu maka ndị mmadụ, ọ bụghị ntụziaka maka Python." },
            { objective: "O6", q: "I mechaala egwuregwu quiz ahụ. Gịnị bụ nzọụkwụ ọzọ dị mma?", options: ["Agbala ya mgbe ọ bụla", "Hichapụ comment ndị ahụ", "Rịọ AI ka o degharịa ya niile", "Mee ka enyi gị gwuo ya ma lee ebe ọ na-agbagwoju ha anya"], answer: 3, why: "Ilele mmadụ ka ọ na-egwu na-egosi gị ihe ị ga-eme ka ọ ka mma." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ide koodu na onye enyemaka AI",
        questions: [
          { objective: "O4", q: "Kedu ụzọ dị mma isi jụọ AI gbasara koodu ị ghọtaghị?", options: ["\"Mee ihe omume ụlọ m\"", "\"Kọwaa koodu Python a ahịrị n'ahịrị maka onye mbido\"", "\"Koodu\"", "\"Mee ka ọ dị ogologo\""], answer: 1, why: "Arịrịọ doro anya maka nkọwa ahịrị n'ahịrị na-enyere gị aka ịmụta." },
          { objective: "O4", q: "Kedu otu ị ga-esi lelee na ị ghọtara koodu n'ezie?", options: ["Gbanwee otu ihe, chee nsonaazụ ya, wee gbaa ya", "Gụọ ya otu ugboro ngwa ngwa", "Hichapụ ya", "Rịọ AI ka o kwuo na ị ghọtara"], answer: 0, why: "Ibu amụma na ịnwale na-egosi ma ị ghọtara n'ezie." },
          { objective: "O5", q: "Python gosiri ozi mperi. Ebee ka ị ga-ebu ụzọ lee?", options: ["Okwu mbụ dị na ihuenyo", "Ebe adreesị nke browser", "Ahịrị ikpeazụ nke ozi ahụ na nọmba ahịrị", "Keyboard"], answer: 2, why: "Ahịrị ikpeazụ na-akpọ aha nsogbu ahụ, nọmba ahịrị na-egosikwa ebe ọ dị." },
          { objective: "O5", q: "AI nyere gị ndozi maka bug gị. Gịnị na-esote?", options: ["Chee na ọ na-arụ ọrụ", "Nyefee ya n'agbaghị ya", "Hichapụ mmemme gị", "Gbaa ya n'onwe gị ma lelee na ọ na-arụ ọrụ"], answer: 3, why: "AI nwere ike ime mperi, ya mere ị na-anwale ndozi ahụ n'onwe gị." },
          { objective: "O6", q: "Na Python, gịnị ka ahịrị na-amalite na # na-eme?", options: ["Ọ bụ comment nke Python anaghị elebara anya", "Ọ na-egosi hashtag", "Ọ na-akwụsị mmemme", "Ọ na-eme loop"], answer: 0, why: "Ahịrị na-amalite na # bụ comment maka ndị mmadụ, ọ bụghị ntụziaka." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite Ide Koodu na AI",
    questions: [
      { objective: "O1", q: "Ihe kacha akọwa koodu bụ:", options: ["Ntụziaka kọmputa na-agbaso kpọmkwem", "Okwuntughe nzuzo", "Ụdị egwu", "Akara ụlọ akwụkwọ"], answer: 0, why: "Koodu bụ ndepụta ntụziaka maka kọmputa." },
      { objective: "O1", q: "Gịnị mere ịdepụta koodu AI ị ghọtaghị ji bụrụ nsogbu?", options: ["Ọ na-adị mkpụmkpụ mgbe niile", "Ị naghị amụta ihe ọ bụla, ị pụghịkwa idozi ya mgbe ọ mebiri", "Kọmputa enweghị ike ịgba koodu AI", "Ọ na-efu ego"], answer: 1, why: "Nghọta bụ nkà ahụ; koodu e depụtara na-ahapụ gị n'ụzọ." },
      { objective: "O1", q: "Tupu i debanye aha na ngwa AI dị ka onye nọ n'afọ iri na ụma, ị kwesịrị:", options: ["Iji ụbọchị ọmụmụ ụgha", "Igosi ndị enyi gị okwuntughe gị", "Ilele afọ kacha nta ngwa ahụ chọrọ ma jụọ nne na nna gị ma ọ bụ onye nlekọta", "Ịghara ịgụ ihe ọ bụla"], answer: 2, why: "Oke afọ na itinye aka nne na nna na-eme ka ị nọrọ n'udo ma n'ime iwu." },
      { objective: "O2", q: "Google Colab na-ekwe ka ị:", options: ["Na-ekiri naanị vidiyo", "Zụta egwuregwu", "Zipu ozi ederede", "Gbaa Python na web browser n'awụnyeghị ihe ọ bụla"], answer: 3, why: "Colab bụ notebook n'efu n'ịntanetị maka ịgba Python." },
      { objective: "O2", q: "Na notebook, cell bụ:", options: ["Igbe ebe ị na-ede ma na-agba koodu", "Batrị ekwentị", "Ụdị mperi", "Loop"], answer: 0, why: "E ji cell nwere koodu mee notebook." },
      { objective: "O2", q: "Kedu ahịrị na-egosi okwu na ihuenyo na Python?", options: ["show Hello", "print(\"Hello\")", "say = Hello", "run Hello"], answer: 1, why: "print nwere ederede n'ime quotes na-egosi ederede ahụ." },
      { objective: "O3", q: "Variable bụ:", options: ["Ozi mperi", "Ụdị weebụsaịtị", "Igbe nwere aha na-echekwa uru", "Loop na-adịghị agwụ agwụ"], answer: 2, why: "Variable na-echekwa uru n'okpuru aha, dị ka score." },
      { objective: "O3", q: "Kedu ahịrị na-arịọ onye na-egwu ka o dee aha ya?", options: ["name = 0", "print(name)", "for name in range(3):", "name = input(\"What is your name? \")"], answer: 3, why: "input na-arịọ onye ọrụ ka o dee ihe." },
      { objective: "O3", q: "Na Python, == pụtara:", options: ["Bụ otu ihe ahụ", "Gbakọọ ọnụ", "Chekwaa uru", "Malite comment"], answer: 0, why: "Akara nhata abụọ na-atụnyere uru abụọ." },
      { objective: "O3", q: "Gịnị mere Python ji elebara indentation anya?", options: ["Ọ na-eme ka koodu nwee agba", "Ọ na-egosi ahịrị ndị dị n'okpuru if ma ọ bụ loop", "Ọ na-echekwa batrị", "Ọ bụ naanị ihe ịchọ mma"], answer: 1, why: "Ahịrị a kwanyere n'ime bụ nke if, else ma ọ bụ loop dị n'elu ha." },
      { objective: "O3", q: "Ị chọrọ iti mkpu \"Go team!\" ugboro 5. Kedu nke kacha mma?", options: ["Ahịrị if", "Comment", "Loop for nwere range(5)", "Variable a na-akpọ team"], answer: 2, why: "Loop na-emegharị koodu ọnụọgụ oge a kapịrị ọnụ." },
      { objective: "O4", q: "Kedu nke dị mma itinye n'ime ngwa enyemaka AI?", options: ["Okwuntughe ụlọ akwụkwọ gị", "Adreesị ụlọ gị", "Nọmba ekwentị gị", "Ahịrị iri nke koodu quiz"], answer: 3, why: "Koodu maka ọrụ enweghị ozi nzuzo ọ bụla n'ime ya." },
      { objective: "O4", q: "Mgbe AI kọwachara koodu gị, ụzọ dị mma isi nwalee nghọta gị bụ:", options: ["Gbanwee otu ihe, buru amụma, ma gbaa ya", "Mechie notebook", "Rịọ naanị maka nkọwa ka ogologo", "Depụta ya n'ime notebook ọzọ n'agbanweghị ihe"], answer: 0, why: "Ibu amụma na ịnwale na-egosi na ị ghọtara ya." },
      { objective: "O5", q: "Bug bụ:", options: ["Ihe ọma mmemme nwere", "Mperi dị na koodu", "Ụdị loop", "Notebook"], answer: 1, why: "Bug bụ mperi; debugging na-edozi ha." },
      { objective: "O5", q: "IndentationError na-apụtakarị:", options: ["Ịntanetị gị adịghị", "Ị chọrọ kọmputa ọhụrụ", "Oghere dị na mmalite ahịrị ezighi ezi", "Mmemme ahụ rụrụ ọrụ"], answer: 2, why: "Ọ na-egosi oghere ezighi ezi na mmalite ahịrị." },
      { objective: "O5", q: "Ị kwụsịrị n'ụzọ n'ihi mperi. Gịnị ka ị kwesịrị itinye n'ime ngwa enyemaka AI?", options: ["Naanị okwu error", "Okwuntughe gị", "Ọ dịghị ihe; hapụ ya", "Koodu ahụ na ozi mperi zuru oke"], answer: 3, why: "Koodu na ozi mperi zuru oke na-enye AI ihe ọ chọrọ iji kọwaa nsogbu ahụ." },
      { objective: "O5", q: "AI tụrụ aro ndozi ma mperi ahụ gbanwere. I kwesịrị:", options: ["Gwa AI kpọmkwem ihe mere ugbu a", "Hapụ ya", "Nyefee ya n'agbanyeghị", "Hichapụ Python"], answer: 0, why: "Ajụjụ nsochi doro anya na-enyere gị na AI aka ịchọta ezi nsogbu ahụ." },
      { objective: "O6", q: "Gịnị bụ nzọụkwụ mbụ kacha mma mgbe ị na-ewu mmemme ka ukwuu?", options: ["Dee ihe niile otu mgbe", "Dee atụmatụ dị mkpụmkpụ dị ka comment", "Rịọ AI ka o dee ya niile", "Hapụ ịnwale"], answer: 1, why: "Atụmatụ na-ekewa mmemme ahụ n'obere akụkụ." },
      { objective: "O6", q: "Gịnị mere ị ga-eji gbaa mmemme gị mgbe ị gbakwunyere obere akụkụ ọ bụla?", options: ["Ọ na-eme ka koodu dị ogologo", "Python chọrọ ya", "Ị na-ahụ mperi n'oge, mgbe ọ dị mfe idozi ha", "Ọ na-echekwa faịlụ ahụ"], answer: 2, why: "Obere nzọụkwụ na-eme ka ọ dị mfe ịchọta bug." },
      { objective: "O6", q: "I jiri AI nyere aka n'ọrụ koodu ụlọ akwụkwọ. Gịnị ka ị kwesịrị ime?", options: ["Zoo ya", "Kwuo na ọ bụ naanị ọrụ gị", "Hichapụ ọrụ ahụ", "Kwuo otu i si jiri AI, na-agbaso iwu onye nkuzi gị"], answer: 3, why: "Ikwu eziokwu gbasara iji AI bụ akụkụ nke ịgbaso iwu ụlọ akwụkwọ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 1, 3, 5, 6, 8, 11, 12, 14, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Mmemme na-arụ ọrụ", objective: "O2", notYet: "Mmemme ahụ anaghị arụ ọrụ na Colab, ma ọ bụ ọ na-akwụsị na mperi.", meets: "Mmemme ahụ na-arụ ọrụ site na mmalite ruo na njedebe na Colab.", exceeds: "Ọ na-ejikwa nke ọma mgbe onye na-egwu dere azịza n'ụzọ ọzọ, dị ka mkpụrụ akwụkwọ ukwu." },
      { name: "Ihe e ji ewu", objective: "O3", notYet: "Input, if na else, ma ọ bụ variable akara na-efu efu.", meets: "Ọ na-ajụ aha onye na-egwu, na-eji if na else maka opekata mpe ajụjụ 5, ma na-edebe akara na variable.", exceeds: "Ọ na-ejikwa loop emegharị otu akụkụ egwuregwu ahụ." },
      { name: "E wuru ya n'akụkụ", objective: "O6", notYet: "Enweghị atụmatụ ma ọ bụ ozi ikpeazụ.", meets: "Atụmatụ dị na comment, ajụjụ ise na ozi ikpeazụ nwere akara.", exceeds: "Enyi gwuru ya, onye na-amụ ihe mekwara ka otu akụkụ ka mma site n'ihe ọ hụrụ." },
      { name: "AI dị ka onye nkuzi", objective: "O4", notYet: "AI dere mmemme ahụ, ma ọ bụ e kwughị maka iji AI.", meets: "AI kọwara ma ọ bụ nyere aka dozie opekata mpe otu akụkụ, onye na-amụ ihe kwukwara otu e si jiri ya.", exceeds: "Onye na-amụ ihe nwere ike igosi mgbanwe o buru amụma ma nwalee mgbe AI kọwachara." },
      { name: "Comment n'okwu nke onwe", objective: "O5", notYet: "Comment adịghị ma ọ bụ e depụtara ha site n'AI.", meets: "Comment dị n'elu akụkụ ọ bụla na-ekwu n'okwu onye na-amụ ihe ihe ọ na-eme.", exceeds: "Ọ na-akọkwa otu bug o doziri na otu o si dozie ya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe wuru mmemme nke abụọ n'onwe ha n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe sonyere n'otu ndị na-ede koodu, klas ma ọ bụ kamp n'ime ụbọchị 90",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ gbasara koodu ma ọ bụ AI n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere web browser na ịntanetị (ụlọ akwụkwọ, ọba akwụkwọ ma ọ bụ ụlọ)",
      "Google Colab, nwere akaụntụ Google e kwere ka onye na-amụ ihe jiri",
      "Ngwa enyemaka AI n'efu e kwere ka onye na-amụ ihe jiri",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Lelee iwu afọ Colab na ngwa AI na ntọala akaụntụ ụlọ akwụkwọ tupu klas; nwee akaụntụ ngosi dị njikere maka ndị na-amụ ihe na-enweghị ike idebanye aha.",
      "Dee koodu ọnụ ozugbo na projector maka Nkuzi 2 na 3 ka ndị mbido nwee ike iso nzọụkwụ ọ bụla.",
      "Kpachara anya wepụ colon ma ọ bụ quote ka onye ọ bụla na-amụ ihe mee omume ịgụ ozi mperi.",
      "Chetara ndị na-amụ ihe ka ha ghara itinye ozi nzuzo na ngwa AI; koodu quiz achọghị nke ọ bụla.",
      "Mee mgbanwe egwuregwu quiz ebe ndị na-amụ ihe na-egwu egwuregwu ibe ha, wee jiri rubric tụọ ha akara."
    ]
  }
};

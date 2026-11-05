"use strict";

// Koach Learn course (Swahili translation of artificial-intelligence/agentic-building-agents.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "agentic-building-agents-sw",
  lang: "sw",
  translationOf: "agentic-building-agents",
  category: "Artificial Intelligence",
  name: "Kujenga Mawakala wa AI",
  skills: "Kuandika mzunguko wa wakala kwa Python, Kufafanua zana kama functions, Kuomba modeli hatua yake inayofuata kwa JSON, Kutunza kumbukumbu na kumbukumbu ya mwendo, Kuweka kikomo cha hatua na kushughulikia makosa",
  outcome: "kujenga wakala mdogo wa AI unaofanya kazi kwa Python katika notebook ya bure ya Colab: mzunguko unaouliza modeli hatua yake inayofuata, unaendesha moja ya zana mbili ulizoandika, unarudisha matokeo kwa modeli, unasimama kwenye kikomo cha hatua, na unaandika kila hatua kwenye kumbukumbu.",
  about: [
    "Hii ni kozi ya 3 ya programu Design, Build, and Deploy Autonomous AI Agents (Kusanifu, Kujenga na Kuzindua Mawakala wa AI Wanaojiendesha). Una kadi ya usanifu (kozi ya 1) na prompt uliyoijaribu (kozi ya 2). Sasa unajenga wakala wenyewe, kwa Python ya kawaida, ili uone kila sehemu inavyofanya kazi badala ya kuificha ndani ya framework.",
    "Sura ya 1 inajenga mzunguko: zana kama functions za Python, prompt inayoifanya modeli ichague hatua kwa JSON, na msimbo unaoendesha hatua hiyo na kurudisha matokeo. Sura ya 2 inamfanya wakala aaminike: kumbukumbu, kumbukumbu ya mwendo (run log), kikomo cha hatua, kushughulikia makosa, na kuangalia frameworks za mawakala unazoweza kutumia baadaye.",
    "Unahitaji akaunti ya Google kwa Colab na ufunguo wa API wa modeli (kiwango cha bure cha Gemini API kutoka kozi ya 2 kinafaa, au modeli ya bure ya ndani kwa Ollama kwenye kompyuta yako mwenyewe). Msimbo unaonyeshwa kama mistari mifupi katika masomo. Jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Katika notebook ya Colab, jenga wakala mwenye zana mbili ulizoandika (kwa mfano calculator(expression) na lookup_note(topic) inayosoma kutoka dictionary ndogo ya Python ya maelezo). Mpe lengo \"How many hours will I study this month if I study 45 minutes on each class day listed in my notes?\" (Nitasoma saa ngapi mwezi huu nikisoma dakika 45 kila siku ya darasa iliyoorodheshwa katika maelezo yangu?). Wakala lazima achague zana kwa JSON, aziendeshe, arudishe matokeo, asimame kwenye kikomo cha hatua 6, ashughulikie jibu moja baya la modeli bila kuanguka, na achapishe kumbukumbu ya kila hatua.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima katika programu Design, Build, and Deploy Autonomous AI Agents waliomaliza kozi ya 1 na ya 2: wamiliki wa biashara ndogo, watu wanaobadilisha kazi, wanafunzi na wafanyakazi wanaotaka kujenga wakala anayefanya kazi wao wenyewe.",
    startingPoint: "Wana kadi ya usanifu wa wakala na system prompt iliyojaribiwa inayorudisha JSON. Wanaweza kuendesha mistari mifupi ya Python katika Google Colab na kuita modeli kwa ufunguo wa siri wa API, lakini hawajaandika mzunguko wa wakala.",
    gap: "Frameworks zinaficha jinsi wakala anavyofanya kazi, kwa hiyo mmoja akikosea, wanaoanza hawawezi kujua kwa nini. Wanafunzi wanahitaji kujenga mzunguko kwa mkono, wenye zana, kumbukumbu, kumbukumbu ya mwendo, kikomo cha hatua na kushughulikia makosa, ili mawakala wao waaminike na waweze kuwatatulia matatizo.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi; msimbo unaonyeshwa kama mistari mifupi ya kunakili",
      "Vifaa: kompyuta yenye kivinjari cha wavuti; Colab ya bure na viwango vya bure vya API vina mipaka",
      "Hakuna data binafsi wala ya wateja katika zana au maelezo ya mazoezi",
      "Funguo za API zinabaki katika mpangilio wa siri, kamwe si ndani ya notebook",
      "Muda: masomo mafupi yenye kazi moja ya mazoezi kila moja"
    ],
    prerequisites: "Kozi ya 1 na ya 2 za Design, Build, and Deploy Autonomous AI Agents (\"Kuelewa LLM na Uhandisi wa Prompt\")."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Katika notebook ya Colab", action: "kuandika zana mbili kama functions za Python zenye majina yaliyo wazi, maelezo ya mstari mmoja na ukaguzi wa input", standard: "kila zana ikifanya kazi unapoiita wewe mwenyewe" },
    { id: "O2", condition: "Ukipewa zana zako na lengo", action: "kuandika system prompt na helper ya ask_model zinazoifanya modeli ijibu kwa hatua moja ya JSON", standard: "ili modeli ichague zana halali au jibu la mwisho" },
    { id: "O3", condition: "Ukipewa hatua iliyochaguliwa na modeli", action: "kuandika mzunguko unaoendesha zana iliyochaguliwa na kurudisha matokeo kwa modeli", standard: "hadi modeli itoe jibu la mwisho" },
    { id: "O4", condition: "Wakala anapoendelea kufanya kazi", action: "kutunza historia ikiwa nadhifu na kuandika kila hatua katika kumbukumbu ya mwendo", standard: "ikiwa na hatua, jibu ghafi, zana, input na matokeo kwa kila hatua" },
    { id: "O5", condition: "Ukipewa jibu baya la modeli, kosa la zana au mwendo mrefu", action: "kuongeza kikomo cha hatua na kushughulikia majibu mabaya na makosa ya zana", standard: "ili wakala ajirekebishe au asimame na kuripoti bila kuanguka" },
    { id: "O6", condition: "Ukipewa wakala wako uliyemaliza", action: "kumjaribu kwa malengo ya kawaida na yasiyowezekana na kueleza wakati framework ingesaidia", standard: "ukiendesha majaribio yote matano na kuandika ulichorekebisha" }
  ],
  chapters: [
    {
      name: "Sura 1: Mzunguko wa wakala katika msimbo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Zana ni functions tu",
          minutes: 5,
          goal: "Andika zana mbili kama functions za Python zenye majina na maelezo yaliyo wazi.",
          text: [
            "Kwa wakala, zana ni function ambayo msimbo wako unaiendesha modeli inapoomba. Modeli yenyewe haiendeshi chochote: inaandika tu jina la zana na input yake. Msimbo wako unaamua kama uiendeshe.",
            "Anza na zana salama zinazosoma tu. Kikokotoo: def calculator(expression): yenye mwili unaoruhusu tarakimu na + - * / ( ) . tu kisha unakokotoa jibu. Kutafuta maelezo: NOTES = {'schedule': 'Class days: Mon, Wed, Thu'}, na def lookup_note(topic): return NOTES.get(topic, 'no note found').",
            "Ziweke pamoja katika dictionary ili mzunguko uzipate kwa jina: TOOLS = {'calculator': calculator, 'lookup_note': lookup_note}. Andika maelezo ya mstari mmoja kwa kila moja. Modeli inasoma maelezo hayo ili kuchagua, kwa hiyo ni muhimu kama msimbo wenyewe."
          ],
          steps: ["Andika kila zana kama function ya Python yenye input moja.", "Ifanye salama: kagua input kabla ya kuitumia.", "Rudisha maandishi ambayo modeli inaweza kusoma, pamoja na ujumbe ulio wazi inaposhindwa.", "Weka zana katika dictionary ya TOOLS.", "Andika maelezo ya mstari mmoja ya kila zana."],
          words: [["Function", "kipande cha msimbo chenye jina kinachopokea input na kurudisha matokeo."], ["Dictionary", "mkusanyiko wa Python wa jozi za jina na thamani, kama {'calculator': calculator}."], ["Zana ya kusoma tu", "zana inayotafuta mambo tu na haibadilishi chochote."]],
          slides: [
            { title: "Zana ni function", bullets: ["Modeli inataja tu zana na input yake", "Msimbo wako unaamua kama uiendeshe"] },
            { title: "Zana mbili salama za kuanzia", bullets: ["calculator(expression): inakagua input, inakokotoa", "lookup_note(topic): inasoma kutoka dictionary"] },
            { title: "Fanya zana ziwe rahisi kuchagua", bullets: ["TOOLS = {name: function}", "Mstari mmoja ulio wazi unaoeleza kila zana", "Rudisha ujumbe ulio wazi inaposhindwa"] }
          ],
          tryIt: "Katika notebook mpya ya Colab, andika calculator na lookup_note, ziweke katika TOOLS, na ujaribu kila moja kwa kuiita wewe mwenyewe: calculator('45*12/60') na lookup_note('schedule').",
          youCanNow: "kuandika zana salama kama functions za Python na kuzisajili kwa jina.",
          quickCheck: [
            { objective: "O1", q: "Katika wakala wako, zana ni nini?", options: ["Function ya Python ambayo msimbo wako unaiendesha modeli inapoomba", "Mpangilio ndani ya modeli", "Tovuti ambayo modeli inaitembelea yenyewe", "Modeli ya pili ya AI"], answer: 0, why: "Modeli inaomba tu; msimbo wako unaendesha function." },
            { objective: "O1", q: "Zana yako ya lookup_note inapokea mada ambayo haimo katika maelezo. Ifanye nini?", options: ["Kubuni maelezo yanayowezekana", "Kuanguka ili ugundue", "Kurudisha ujumbe ulio wazi kwamba mada haikupatikana", "Kurudisha dictionary yote ya maelezo"], answer: 2, why: "Ujumbe ulio wazi unaiwezesha modeli kujaribu kitu kingine badala ya kukisia." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuiomba modeli hatua yake inayofuata",
          minutes: 6,
          goal: "Andika prompt inayoifanya modeli ijibu kwa hatua moja ya JSON.",
          text: [
            "Modeli inahitaji kujua lengo, zana na muundo wa jibu. System prompt yako inaorodhesha kila zana na maelezo yake na inasema: jibu kwa JSON tu, ama {\"tool\": \"name\", \"input\": \"...\"} kutumia zana, au {\"final\": \"...\"} lengo linapofikiwa.",
            "Ongeza sheria kutoka kadi yako ya usanifu: tumia zana zilizoorodheshwa tu; hatua moja kwa kila jibu; matokeo ya zana yakisema imeshindwa, jaribu njia nyingine; usibuni kamwe matokeo ya zana.",
            "Andika helper ili msimbo wako wote usijali unatumia mtoa huduma gani: def ask_model(text): inayoita modeli yako (nakili mwito kutoka quickstart ya mtoa huduma wako, kama katika kozi ya 2) na kurudisha maandishi ya jibu. Ukibadilisha mtoa huduma baadaye, ask_model tu ndiyo inabadilika."
          ],
          steps: ["Orodhesha kila jina la zana na maelezo yake katika system prompt.", "Toa miundo miwili ya jibu la JSON: tool au final.", "Ongeza sheria kutoka kadi yako ya usanifu.", "Andika ask_model(text) inayorudisha maandishi ya jibu la modeli.", "Ijaribu mara moja kwa lengo na uchapishe jibu."],
          words: [["Hatua (action)", "kitu kimoja ambacho wakala anaamua kufanya baadaye, kama kutumia zana au kutoa jibu la mwisho."], ["Helper function", "function ndogo inayoficha maelezo madogo, kama mtoa huduma wa modeli unayemwita."]],
          slides: [
            { title: "Prompt inaiambia modeli", bullets: ["Lengo", "Zana na kila moja inafanya nini", "Miundo halisi ya jibu la JSON"] },
            { title: "Miundo miwili ya jibu", bullets: ["{\"tool\": \"name\", \"input\": \"...\"}", "{\"final\": \"...\"} lengo linapofikiwa"] },
            { title: "Sheria kutoka kadi yako ya usanifu", bullets: ["Zana zilizoorodheshwa tu, hatua moja kwa kila jibu", "Zana ikishindwa, jaribu njia nyingine", "Usibuni kamwe matokeo ya zana"] },
            { title: "Ficha mtoa huduma", bullets: ["ask_model(text) inarudisha maandishi ya jibu", "Badilisha mtoa huduma kwa kubadilisha function moja"] }
          ],
          tryIt: "Andika system prompt na ask_model. Tuma lengo kutoka kazi ya mwisho na uchapishe jibu. Je, ilichagua lookup_note kwanza? Kama sivyo, boresha maelezo ya zana.",
          youCanNow: "kuifanya modeli ichague hatua yake inayofuata kwa JSON kutoka orodha ya zana.",
          quickCheck: [
            { objective: "O2", q: "Jibu la modeli linapaswa kuonekanaje inapotaka zana?", options: ["Aya ya kirafiki inayoeleza mpango wake", "Hatua moja ya JSON inayotaja zana na input yake", "Msimbo wa Python wa zana", "Orodha ya zana zote"], answer: 1, why: "Hatua moja ya JSON ni kitu ambacho mzunguko wako unaweza kusoma na kuendesha." },
            { objective: "O2", q: "Modeli inaendelea kuchagua calculator kabla ya kupata siku za darasa. Ungebadilisha nini kwanza?", options: ["Kuondoa calculator", "Kuongeza kikomo cha hatua", "Kuhamia framework", "Kuboresha maelezo ya zana ili ijue kutafuta maelezo kwanza"], answer: 3, why: "Modeli inachagua zana kutokana na maelezo yake, kwa hiyo maelezo yaliyo wazi zaidi yanaongoza uchaguzi wake." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuendesha mzunguko: kutenda na kurudisha matokeo",
          minutes: 6,
          goal: "Andika mzunguko unaoendesha zana iliyochaguliwa na kurudisha matokeo.",
          text: [
            "Mzunguko ni mfupi. history = [] inashika kilichotokea. Kwa kila hatua: tunga maandishi (system prompt, lengo, historia), ita ask_model, changanua JSON. Ikiwa na 'final', ichapishe na usimame. Ikiwa na 'tool', itafute katika TOOLS, iendeshe kwa input, na uongeze mstari kwenye historia: hatua na matokeo.",
            "Kurudisha matokeo ni hatua ya kuangalia (observe) kutoka kozi ya 1. Bila hiyo modeli ingeomba kitu kile kile milele. Ikiwa nayo, modeli inaona \"lookup_note(schedule) returned: Class days: Mon, Wed, Thu\" na inaweza kuamua hatua inayofuata, kama kutumia calculator.",
            "Modeli ikitaja zana ambayo haimo katika TOOLS, usianguke: ongeza \"Unknown tool: X. Use one of: calculator, lookup_note\" kwenye historia na uendelee. Ujumbe ulio wazi unaorudishwa kwa modeli ndio njia ya wakala kujirekebisha kutokana na makosa yake mwenyewe."
          ],
          steps: ["history = []", "Tunga maandishi: system prompt, lengo, historia.", "Ita ask_model na uchanganue JSON.", "Ikiwa 'final': chapisha na usimame.", "Ikiwa 'tool': iendeshe kutoka TOOLS na uongeze hatua na matokeo kwenye historia."],
          words: [["Historia (history)", "orodha inayoendelea ya hatua na matokeo ambayo wakala ameona katika mwendo huu."], ["Uchunguzi (observation)", "matokeo ya zana, yanayorudishwa kwa modeli."]],
          slides: [
            { title: "Kila hatua ya mzunguko", bullets: ["Tunga maandishi: prompt, lengo, historia", "Uliza modeli, changanua JSON", "Final? Simama. Tool? Iendeshe."] },
            { title: "Rudisha matokeo", bullets: ["Ongeza hatua na matokeo kwenye historia", "Modeli inayaona katika hatua inayofuata", "Bila hayo, wakala anajirudia"] },
            { title: "Zana isiyojulikana?", bullets: ["Usianguke", "Iambie modeli zana zipi zipo", "Iache ijaribu tena"] }
          ],
          tryIt: "Andika mzunguko na uuendeshe kwa lengo la kazi ya mwisho. Chapisha history baada ya kila hatua. Hesabu ilichukua hatua ngapi kufikia jibu la mwisho.",
          youCanNow: "kuandika mzunguko wa wakala unaoendesha zana na kurudisha matokeo kwa modeli.",
          quickCheck: [
            { objective: "O3", q: "Hatua ya kuangalia (observe) katika mzunguko ni ipi?", options: ["Kuongeza matokeo ya zana kwenye historia ili modeli iyaone", "Kuchapisha jibu la mwisho", "Kuchagua zana ipi uandike", "Kukagua ufunguo wa API"], answer: 0, why: "Kurudisha matokeo kunaiwezesha modeli kuamua hatua inayofuata kutokana na kilichotokea." },
            { objective: "O3", q: "Wakala wako anaita zana ile ile tena na tena. Suluhisho linalowezekana zaidi ni lipi?", options: ["Kuongeza zana zaidi", "Kuhakikisha kila matokeo ya zana yanarudishwa kwenye historia", "Kufupisha system prompt", "Kutumia notebook nyingine"], answer: 1, why: "Bila matokeo katika historia, modeli haijui kwamba hatua tayari imeendeshwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Mzunguko wa wakala katika msimbo",
        questions: [
          { objective: "O1", q: "Nani hasa anaendesha zana katika wakala?", options: ["Modeli", "Kivinjari cha mtumiaji", "Msimbo wako", "Tovuti ya zana"], answer: 2, why: "Modeli inataja tu zana; msimbo wako unaamua na kuiendesha." },
          { objective: "O1", q: "Kwa nini kila zana inahitaji maelezo ya mstari mmoja yaliyo wazi?", options: ["Modeli inayasoma ili kuchagua zana sahihi", "Yanafanya msimbo uende haraka zaidi", "Python inayahitaji", "Yanaficha zana kutoka kwa modeli"], answer: 0, why: "Maelezo ndiyo njia ya modeli kujua kila zana ni ya nini." },
          { objective: "O3", q: "Modeli inajibu {\"final\": \"About 27 hours\"}. Mzunguko unafanya nini?", options: ["Unaendesha calculator", "Unaanza upya", "Unamwomba mtumiaji nywila", "Unachapisha jibu na kusimama"], answer: 3, why: "Jibu la final linamaanisha lengo limefikiwa." },
          { objective: "O2", q: "Kusudi la helper ya ask_model ni nini?", options: ["Kuendesha zana", "Kuweka maelezo ya mtoa huduma mahali pamoja", "Kuhifadhi ufunguo wa API ndani ya msimbo", "Kuruka mzunguko"], answer: 1, why: "Kubadilisha mtoa huduma basi kunamaanisha kubadilisha function moja." },
          { objective: "O3", q: "Modeli inaomba zana inayoitwa \"search\" ambayo hukuiandika. Jibu bora ni lipi?", options: ["Kuanguka ili ugundue", "Kuiambia modeli zana zipi zipo na kuendelea", "Kuendesha utafutaji wowote unaoweza kupata", "Kumsimamisha wakala milele"], answer: 1, why: "Maoni yaliyo wazi yanamwezesha wakala kujirekebisha." }
        ]
      }
    },
    {
      name: "Sura 2: Kumfanya wakala aaminike",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kumbukumbu na kumbukumbu ya mwendo",
          minutes: 5,
          goal: "Tunza kumbukumbu ya muda mfupi ikiwa nadhifu na uandike kila hatua.",
          text: [
            "Kumbukumbu ya muda mfupi ni orodha ya historia uliyonayo tayari. Inakua kila hatua, na kila kitu ndani yake kinatumwa kwa modeli, jambo linalogharimu tokeni na muda. Kwa mwendo mrefu, weka hatua chache za mwisho zikiwa kamili na ubadilishe hatua za zamani kwa muhtasari wa mstari mmoja.",
            "Kumbukumbu ya muda mrefu ni chochote kinachohifadhiwa kati ya mwendo mmoja na mwingine: faili ya maelezo, spreadsheet, hifadhidata ndogo. Hifadhi tu kile ambacho wakala anahitaji kweli wakati ujao, na usihifadhi kamwe data binafsi usiyoihitaji.",
            "Kumbukumbu ya mwendo (run log) ni kwa ajili yako, si ya modeli. Kwa kila hatua, andika namba ya hatua, jibu ghafi la modeli, zana na input, matokeo na muda. Wakala akifanya jambo la ajabu, kumbukumbu inakuambia kwa nini. Njia rahisi: log.append({'step': n, 'reply': reply, 'result': result}) na uichapishe mwishoni."
          ],
          words: [["Kumbukumbu ya muda mfupi", "kile ambacho wakala anaona wakati wa mwendo mmoja: historia hadi sasa."], ["Kumbukumbu ya muda mrefu", "taarifa zinazohifadhiwa kati ya mwendo mmoja na mwingine, kama faili ya maelezo."], ["Kumbukumbu ya mwendo (run log)", "rekodi yako ya kila hatua ambayo wakala alichukua, kwa kukagua na kutatua matatizo."]],
          slides: [
            { title: "Kumbukumbu ya muda mfupi", bullets: ["Orodha ya historia, inayotumwa kila hatua", "Historia ndefu inagharimu tokeni na muda", "Fanya muhtasari wa hatua za zamani"] },
            { title: "Kumbukumbu ya muda mrefu", bullets: ["Inahifadhiwa kati ya mwendo: faili au hifadhidata", "Hifadhi kinachohitajika tu", "Hakuna data binafsi usiyoihitaji"] },
            { title: "Kumbukumbu ya mwendo", bullets: ["Hatua, jibu ghafi, zana, input, matokeo, muda", "Ni kwa ajili yako, si ya modeli", "Isome wakala anapofanya mambo ya ajabu"] }
          ],
          tryIt: "Ongeza orodha ya log kwa wakala wako na uandike kila hatua. Muendeshe, kisha uchapishe log kama jedwali nadhifu: hatua, zana, input, matokeo.",
          youCanNow: "kusimamia kumbukumbu ya wakala na kutunza kumbukumbu ya mwendo unayoweza kusoma.",
          quickCheck: [
            { objective: "O4", q: "Kumbukumbu ya muda mfupi katika wakala wako ni nini?", options: ["Faili inayohifadhiwa milele", "Data ya mafunzo ya modeli", "Orodha ya historia ya mwendo huu", "Dictionary ya maelezo"], answer: 2, why: "Kumbukumbu ya muda mfupi ni historia ambayo wakala anaitunza wakati wa mwendo mmoja." },
            { objective: "O4", q: "Wakala ametoa jibu la ajabu na unataka kujua kwa nini. Unaangalia nini?", options: ["Jibu la mwisho tu", "Ufunguo wa API", "Maelezo ya zana tu", "Kumbukumbu ya mwendo ya kila hatua"], answer: 3, why: "Kumbukumbu inaonyesha kila jibu, zana, input na matokeo, kwa hiyo unaweza kuona mahali ilipokosea." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kikomo cha hatua, majibu mabaya na makosa",
          minutes: 6,
          goal: "Ongeza kikomo cha hatua na ushughulikie majibu mabaya ya modeli na makosa ya zana.",
          text: [
            "Kila mzunguko unahitaji dari: MAX_STEPS = 6 na for step in range(MAX_STEPS): badala ya mzunguko unaoenda milele. Ukifika kwenye kikomo bila jibu la mwisho, simama na uripoti \"Stopped: step limit reached\" pamoja na kumbukumbu.",
            "Majibu mabaya hutokea: maneno ya ziada kuzunguka JSON, ufunguo unaokosekana, jibu tupu. Changanua ndani ya try na except. Ikishindwa, ongeza \"Your last reply was not valid JSON. Reply with only JSON.\" kwenye historia na uache hatua inayofuata ijaribu tena. Yahesabu; yakiwa mawili mfululizo, simama.",
            "Zana nazo hushindwa: calculator inapata herufi, faili haipo. Kila zana inapaswa kukamata makosa yake yenyewe na kurudisha ujumbe ulio wazi kama \"calculator error: only numbers and + - * / allowed\". Modeli basi inaweza kurekebisha input yake katika hatua inayofuata."
          ],
          steps: ["Weka MAX_STEPS na uzungushe kwa range(MAX_STEPS).", "Changanua majibu ndani ya try / except.", "Jibu likiwa baya, iambie modeli na uendelee.", "Simama baada ya majibu mabaya mawili mfululizo.", "Fanya kila zana irudishe ujumbe wa kosa ulio wazi badala ya kuanguka."],
          words: [["Kikomo cha hatua", "idadi kubwa zaidi ya hatua ambazo wakala anaruhusiwa kuchukua katika mwendo mmoja."], ["Exception", "kosa linalotokea programu inapoendeshwa; try / except linalikamata."]],
          slides: [
            { title: "Weka dari kila wakati", bullets: ["MAX_STEPS = 6", "for step in range(MAX_STEPS):", "Kwenye kikomo: simama na uripoti"] },
            { title: "Majibu mabaya ya modeli", bullets: ["Changanua ndani ya try / except", "Iambie modeli: jibu kwa JSON tu", "Majibu mabaya mawili mfululizo: simama"] },
            { title: "Makosa ya zana", bullets: ["Kila zana inakamata makosa yake yenyewe", "Rudisha ujumbe wa kosa ulio wazi", "Modeli inarekebisha input yake hatua inayofuata"] }
          ],
          tryIt: "Jaribu msimbo wako wa usalama: kwa muda fanya ask_model irudishe \"hello\" katika hatua ya 2, na utume kwa calculator input 'abc'. Hakikisha wakala anajirekebisha, na kwamba anasimama kwenye kikomo cha hatua unapoweka MAX_STEPS = 2.",
          youCanNow: "kumzuia wakala asizunguke milele na kumsaidia ajirekebishe kutokana na majibu mabaya na makosa ya zana.",
          quickCheck: [
            { objective: "O5", q: "MAX_STEPS inafanya nini?", options: ["Inaweka dari ya idadi ya hatua ambazo wakala anaweza kuchukua", "Inaifanya modeli ijibu haraka zaidi", "Inapunguza idadi ya zana unazoweza kuandika", "Inaweka urefu wa kumbukumbu"], answer: 0, why: "Kikomo cha hatua kinasimamisha mwendo ambao vinginevyo ungeendelea bila mwisho." },
            { objective: "O5", q: "Modeli inajibu \"hello\" badala ya JSON katika hatua moja. Wakala wako afanye nini?", options: ["Kuanguka", "Kuchukulia \"hello\" kama jibu la mwisho", "Kuiambia modeli ijibu kwa JSON tu na kuendelea", "Kuanza mwendo wote upya kutoka hatua ya 1"], answer: 2, why: "Jibu baya moja linaweza kurekebishwa; wakala anasimama tu baada ya majibu mabaya yanayojirudia." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Frameworks, na kumaliza wakala wako wa kwanza",
          minutes: 6,
          goal: "Maliza na ujaribu wakala wako, na ujue wakati framework ingesaidia.",
          text: [
            "Frameworks za mawakala ni maktaba (libraries) zinazokupa mzunguko, kushughulikia zana na kumbukumbu vikiwa tayari. Zinazojulikana ni pamoja na LangGraph, CrewAI, OpenAI Agents SDK na Agent Development Kit ya Google, na watoa huduma wengi wa modeli wanaunga mkono native tool calling, ambapo modeli inakurudishia ombi la zana lenye muundo. Zinabadilika mara kwa mara, kwa hiyo soma nyaraka za kila mradi wenyewe kwa maelekezo ya sasa.",
            "Kujenga mzunguko mwenyewe kwanza kunamaanisha unaelewa kile framework inakufanyia, na unaweza kuitatulia matatizo inapokosea. Mawakala wengi halisi bado ni mzunguko wa kawaida kama wako.",
            "Kabla ya kusema wakala wako amekamilika, mjaribu kama katika kozi ya 2: malengo matatu anayopaswa kumaliza, moja asiloweza (anapaswa kusema hivyo, si kubuni jibu), na input moja mbaya. Soma kumbukumbu ya kila mwendo."
          ],
          steps: ["Endesha wakala kwa malengo matatu anayopaswa kumaliza.", "Endesha lengo moja asiloweza kumaliza: anapaswa kusema hivyo.", "Endesha input moja mbaya.", "Soma kumbukumbu ya kila mwendo.", "Rekebisha udhaifu mmoja na uendeshe yote matano tena."],
          words: [["Framework", "maktaba iliyo tayari inayoshughulikia sehemu za kawaida za programu kwa niaba yako."], ["Native tool calling", "uwezo wa modeli ambapo modeli inarudisha ombi lenye muundo la kutumia zana."]],
          slides: [
            { title: "Frameworks za mawakala", bullets: ["Mzunguko, zana na kumbukumbu vilivyo tayari", "LangGraph, CrewAI, OpenAI Agents SDK, Google ADK", "Zinabadilika mara kwa mara: soma nyaraka zao wenyewe"] },
            { title: "Kwa nini ujenge kwa mkono kwanza", bullets: ["Unaelewa kile framework inafanya", "Unaweza kuitatulia matatizo", "Mawakala wengi halisi ni mzunguko wa kawaida"] },
            { title: "Jaribu kabla ya kusema imekamilika", bullets: ["Malengo matatu anayopaswa kumaliza", "Moja asiloweza kumaliza: anapaswa kusema hivyo", "Input moja mbaya; soma kila kumbukumbu"] }
          ],
          tryIt: "Kazi ya mwisho: maliza wakala wako wa zana mbili kwa lengo la saa za kusoma, kwa kikomo cha hatua 6, jibu baya moja lililorekebishwa na kumbukumbu iliyochapishwa ya kila hatua. Kisha endesha majaribio matano hapo juu na uandike sentensi mbili kuhusu ulichorekebisha.",
          youCanNow: "kujenga, kujaribu na kueleza wakala wa AI anayefanya kazi kwa Python ya kawaida.",
          quickCheck: [
            { objective: "O6", q: "Framework ya mawakala ni nini?", options: ["Sheria inayokataza zana", "Mzunguko, zana na kumbukumbu vilivyo tayari unavyoweza kutumia badala ya kuandika vyako", "Modeli ya bure", "Aina ya ufunguo wa API"], answer: 1, why: "Frameworks zinafunga pamoja sehemu ulizojenga kwa mkono katika kozi hii." },
            { objective: "O6", q: "Unampa wakala wako lengo asiloweza kufikia kwa zana zake. Wakala mzuri afanye nini?", options: ["Kusema hawezi kumaliza na kuonyesha alichojaribu", "Kubuni jibu linalosikika sahihi", "Kuendelea kufanya kazi milele", "Kuita zana ambayo haipo"], answer: 0, why: "Wakala mwaminifu anaripoti asichoweza kufanya badala ya kubuni kitu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kumfanya wakala aaminike",
        questions: [
          { objective: "O4", q: "Kwa nini ufanye muhtasari wa hatua za zamani katika mwendo mrefu?", options: ["Modeli haisahau chochote hata hivyo", "Inaficha makosa", "Python haiwezi kushika orodha ndefu", "Historia ndefu inagharimu tokeni na muda"], answer: 3, why: "Kila kitu katika historia kinatumwa kila hatua." },
          { objective: "O4", q: "Kumbukumbu ya mwendo ni hasa kwa ajili ya nani?", options: ["Wewe, ili uone kwa nini wakala alitenda alivyotenda", "Modeli", "Mtoa huduma wa API", "Watumiaji wengine"], answer: 0, why: "Kumbukumbu ni kwa kukagua na kutatua matatizo." },
          { objective: "O5", q: "Nini kinapaswa kutokea wakala anapofika MAX_STEPS bila jibu la mwisho?", options: ["Kuendelea hata hivyo", "Kubuni jibu la mwisho", "Kusimama na kuripoti kwamba kikomo kimefikiwa", "Kufuta kumbukumbu"], answer: 2, why: "Ripoti kwa uaminifu na uonyeshe kumbukumbu." },
          { objective: "O5", q: "Calculator inapokea input 'abc'. Zana iliyojengwa vizuri:", options: ["Inaangusha wakala wote", "Inafuta notebook", "Inarudisha sifuri kimya kimya", "Inarudisha ujumbe wa kosa ulio wazi ambao modeli inaweza kuutumia"], answer: 3, why: "Ujumbe wa kosa ulio wazi unaiwezesha modeli kurekebisha input yake." },
          { objective: "O6", q: "Lipi ni jaribio zuri kabla ya kusema wakala amekamilika?", options: ["Malengo tu ambayo ana uhakika wa kumaliza", "Hakuna majaribio, mtoe tu", "Lengo asiloweza kumaliza, kuona kama anasema hivyo", "Kumwendesha mara moja"], answer: 2, why: "\"Siwezi\" ya uaminifu ni bora kuliko jibu lililobuniwa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kujenga Mawakala wa AI",
    questions: [
      { objective: "O1", q: "Kwa wakala, zana ni:", options: ["Tovuti", "Function ambayo msimbo wako unaiendesha modeli inapoomba", "Modeli yenyewe", "Nywila"], answer: 1, why: "Zana ni functions; modeli inazitaja tu." },
      { objective: "O1", q: "Aina ipi ya zana ni salama zaidi kuanza nayo?", options: ["Zana ya kutafuta inayosoma tu", "Zana ya kufuta faili", "Zana ya malipo", "Zana ya kutuma barua pepe"], answer: 0, why: "Zana za kusoma tu hazibadilishi chochote." },
      { objective: "O1", q: "TOOLS = {'calculator': calculator} inauwezesha mzunguko:", options: ["Kupata zana kwa jina lake", "Kuruka modeli", "Kuhifadhi ufunguo wa API", "Kuifanya modeli iwe haraka zaidi"], answer: 0, why: "Dictionary inaunganisha majina na functions." },
      { objective: "O1", q: "Zana inapaswa kukagua input yake kwa sababu:", options: ["Python inahitaji hivyo", "Modeli inaweza kutuma kitu kisicho salama au kisicho sahihi", "Inaokoa tokeni", "Inaficha matokeo"], answer: 1, why: "Usiamini kamwe matokeo ya modeli bila kuangalia." },
      { objective: "O2", q: "Jibu lipi linamaanisha wakala anataka kutumia zana?", options: ["{\"final\": \"done\"}", "\"hello\"", "{\"tool\": \"calculator\", \"input\": \"2+2\"}", "Jibu tupu"], answer: 2, why: "Muundo wa tool unataja zana na input yake." },
      { objective: "O2", q: "Sheria inayosaidia uaminifu katika system prompt ni:", options: ["\"Puuza kushindwa.\"", "\"Jibu kila wakati kwa hatua moja.\"", "\"Tumia zana yoyote unayopenda.\"", "\"Usibuni kamwe matokeo ya zana.\""], answer: 3, why: "Matokeo yaliyobuniwa ni kosa la kawaida la mawakala." },
      { objective: "O2", q: "ask_model(text) ina manufaa kwa sababu:", options: ["Inafanya funguo ziwe wazi kwa umma", "Inaendesha zana", "Inaweka maelezo ya mtoa huduma mahali pamoja", "Inaondoa mzunguko"], answer: 2, why: "Kubadilisha mtoa huduma kunabadilisha function hiyo tu." },
      { objective: "O3", q: "Kurudisha matokeo ya zana kwenye historia ni hatua ya:", options: ["Kuangalia (observe)", "Kufikiri (think)", "Kichocheo (trigger)", "Jibu la mwisho"], answer: 0, why: "Kuangalia matokeo kunaiwezesha modeli kuchagua hatua inayofuata." },
      { objective: "O3", q: "Bila kurudisha matokeo, wakala huenda:", options: ["Akamaliza haraka zaidi", "Akaandika JSON bora zaidi", "Akawa wa bei nafuu zaidi", "Akarudia hatua ile ile"], answer: 3, why: "Hajui kamwe kilichotokea." },
      { objective: "O3", q: "Modeli inataja zana isiyojulikana. Mzunguko unapaswa:", options: ["Kuanguka", "Kuiambia modeli majina halali ya zana na kuendelea", "Kusakinisha zana mpya yenyewe", "Kuipa ruhusa kamili ya kompyuta"], answer: 1, why: "Maoni yaliyo wazi yanamsaidia wakala kujirekebisha." },
      { objective: "O4", q: "Kumbukumbu ya muda mfupi katika wakala wako ni:", options: ["Faili inayohifadhiwa milele", "Orodha ya historia ya mwendo huu", "Akaunti yako ya Google", "Data ya mafunzo ya modeli"], answer: 1, why: "Historia ni kile modeli inaona katika mwendo huu." },
      { objective: "O4", q: "Kumbukumbu ya muda mrefu inapaswa kuhifadhi:", options: ["Kila kitu, pamoja na data binafsi", "Hakuna kitu kamwe", "Ufunguo wako wa API", "Kile tu ambacho wakala anahitaji wakati ujao"], answer: 3, why: "Hifadhi kinachohitajika tu; epuka data binafsi." },
      { objective: "O4", q: "Kumbukumbu nzuri ya mwendo inaandika:", options: ["Hatua, jibu ghafi, zana, input na matokeo", "Jibu la mwisho tu", "Nywila yako", "Hakuna kitu"], answer: 0, why: "Hatua kamili zinakuwezesha kuona kwa nini mambo yalitokea." },
      { objective: "O5", q: "for step in range(MAX_STEPS): inampa wakala:", options: ["Hatua zisizo na kikomo", "Zana zaidi", "Dari ya hatua", "Modeli yenye kasi zaidi"], answer: 2, why: "Mzunguko hauwezi kwenda milele." },
      { objective: "O5", q: "Modeli inajibu kwa maneno yanayozunguka JSON. Wakala mzuri:", options: ["Anazima kikomo cha hatua", "Anaanguka", "Anakubali maneno kama jibu", "Anaiambia modeli ijibu kwa JSON tu na kuendelea"], answer: 3, why: "Jirekebishe mara moja, na usimame baada ya kushindwa kunakojirudia." },
      { objective: "O5", q: "Wakala asimame lini baada ya majibu mabaya?", options: ["Kamwe", "Baada ya neno la kwanza", "Baada ya mawili mfululizo", "Tu kompyuta inapozimika"], answer: 2, why: "Kushindwa kunakojirudia kunamaanisha kuna tatizo." },
      { objective: "O6", q: "Frameworks za mawakala:", options: ["Hazibadiliki kamwe", "Zinatoa mzunguko, zana na kumbukumbu vilivyo tayari", "Zinaondoa haja ya kujaribu chochote", "Zinahitajika kwa kila wakala"], answer: 1, why: "Zinasaidia, lakini zinabadilika mara kwa mara na bado zinahitaji kujaribiwa." },
      { objective: "O6", q: "Native tool calling inamaanisha:", options: ["Modeli inarudisha ombi lenye muundo la kutumia zana", "Modeli inaendesha msimbo kwenye kompyuta yako yenyewe", "Unaandika zana kwa mkono", "Zana zinaendeshwa bila msimbo"], answer: 0, why: "Mtoa huduma anarudisha mwito wa zana wenye muundo ambao msimbo wako unaendesha." },
      { objective: "O6", q: "Kwa nini ujenge mzunguko kwa mkono kwanza?", options: ["Unaelewa na unaweza kutatua matatizo ya kile framework inafanya", "Frameworks ni haramu", "Ni haraka zaidi kila wakati", "Modeli zinahitaji hivyo"], answer: 0, why: "Kujua sehemu zake kunawezesha kutatua matatizo." },
      { objective: "O6", q: "Akipewa lengo asiloweza kufikia, wakala mzuri:", options: ["Anabuni jibu", "Anasema hawezi na anaonyesha alichojaribu", "Anazunguka milele", "Anafuta kumbukumbu yake"], answer: 1, why: "Kushindwa kwa uaminifu ni bora kuliko jibu lililobuniwa." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 4, 6, 7, 9, 12, 13, 15, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Zana mbili zinazofanya kazi", objective: "O1", notYet: "Zana moja inakosekana, inaanguka, au haina maelezo.", meets: "Zana zote mbili zinafanya kazi, zina majina na maelezo yaliyo wazi, na zinakagua input yake.", exceeds: "Zana zinarudisha ujumbe wa kosa ulio wazi ambao modeli inaweza kuufanyia kazi." },
      { name: "Hatua kwa JSON", objective: "O2", notYet: "Modeli inajibu kwa maandishi huru ambayo mzunguko hauwezi kusoma.", meets: "Modeli inachagua zana na jibu la mwisho kwa JSON.", exceeds: "Prompt pia inaiambia modeli isibuni kamwe matokeo ya zana." },
      { name: "Mzunguko unarudisha matokeo", objective: "O3", notYet: "Matokeo ya zana hayarudishwi, au mzunguko hauishi kamwe.", meets: "Mzunguko unaendesha zana iliyochaguliwa, unarudisha matokeo na unasimama kwenye jibu la mwisho.", exceeds: "Majina ya zana yasiyojulikana yanashughulikiwa kwa kuiambia modeli zana zipi zipo." },
      { name: "Mipaka ya usalama", objective: "O5", notYet: "Hakuna kikomo cha hatua, au jibu baya linaangusha wakala.", meets: "Anasimama kwenye kikomo cha hatua 6 na anajirekebisha kutokana na jibu baya moja la modeli.", exceeds: "Pia anashughulikia kosa la zana na anasimama baada ya majibu mabaya mawili mfululizo." },
      { name: "Kumbukumbu ya mwendo", objective: "O4", notYet: "Hakuna kumbukumbu, au hatua zinakosekana ndani yake.", meets: "Anachapisha kumbukumbu ya kila hatua.", exceeds: "Kumbukumbu ni jedwali nadhifu ambalo mtu mwingine angeweza kusoma ili kueleza mwendo." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoendelea na kozi ya 4 ya programu ya mawakala ndani ya siku 30",
      "Wanafunzi wanaoripoti kujenga au kurekebisha wakala kwa kazi halisi ndani ya siku 30 (utafiti wa kufuatilia)"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye kivinjari cha wavuti na intaneti",
      "Akaunti ya bure ya Google kwa Google Colab",
      "Ufunguo wa API wa modeli kutoka kozi ya 2 (kiwango cha bure cha Gemini API) au modeli ya bure ya ndani kwa Ollama",
      "Kadi ya usanifu na prompt iliyojaribiwa kutoka kozi ya 1 na ya 2",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha jengeni mzunguko somo moja baada ya jingine huku kila mtu akiendesha msimbo papo hapo.",
      "Hakikisha funguo za API zimehifadhiwa kama siri na hazionyeshwi kamwe kwenye skrini ya pamoja.",
      "Zana za mazoezi ziwe za kusoma tu na tumia maelezo ya kubuni, si data binafsi wala ya wateja.",
      "Wakala anapokosea, waombe wanafunzi wasome kumbukumbu yao ya mwendo kwa sauti kabla ya kubadilisha msimbo.",
      "Pima kazi ya mwisho kwa rubriki, na mwombe kila mwanafunzi aonyeshe jibu baya lililorekebishwa katika kumbukumbu yake."
    ]
  }
};

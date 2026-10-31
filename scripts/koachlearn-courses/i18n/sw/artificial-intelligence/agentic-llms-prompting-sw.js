"use strict";

// Koach Learn course (Swahili translation of artificial-intelligence/agentic-llms-prompting.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "agentic-llms-prompting-sw",
  lang: "sw",
  translationOf: "agentic-llms-prompting",
  category: "Artificial Intelligence",
  name: "Kuelewa LLM na Uhandisi wa Prompt",
  skills: "Kueleza tokeni na muktadha, Kuandika system prompt, Kutumia mifano, Kupata jibu la JSON lenye muundo, Kuita LLM kutoka Python, Kujaribu prompt",
  outcome: "kuandika na kujaribu system prompt ya kuaminika kwa wakala (agent): inataja jukumu, kazi, kanuni na muundo wa jibu pamoja na mfano, inarudisha JSON safi, na umeikagua kwa majaribio matano kutoka daftari fupi la Python.",
  about: [
    "Hii ni kozi ya 2 ya programu ya Design, Build, and Deploy Autonomous AI Agents (kubuni, kujenga na kuzindua mawakala wa AI wanaojiendesha). Modeli iliyo ndani ya kila wakala ni modeli kubwa ya lugha (LLM), na jinsi unavyoipa maelekezo ndiyo inayoamua kama wakala atafanya kazi vizuri. Kozi hii inakufundisha kwa maneno rahisi jinsi LLM zinavyofanya kazi na jinsi ya kuzipa maelekezo mazuri.",
    "Sura ya 1 inahusu jinsi modeli inavyofanya kazi na jinsi ya kuandika prompt imara kwenye chatbot ya bure. Sura ya 2 inahamia Python katika Google Colab, daftari la bure kwenye kivinjari chako, ambapo unaita modeli kutoka kwa msimbo, unaomba JSON na unajaribu prompt yako kama mhandisi.",
    "Msimbo unaonekana kama mistari mifupi katika maandishi ya somo. Unaweza kuinakili kwenye Colab. Kama hujawahi kuandika msimbo, fuata tu; kozi ya \"Introduction to Programming with Python\" ni rafiki mzuri wa kozi hii. Jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andika system prompt kwa kazi moja ya wakala wako kutoka kozi ya 1 (kwa mfano, \"panga ujumbe unaoingia katika: swali, lalamiko, oda, nyingine\"). Lazima itaje jukumu, kazi, kanuni tatu, muundo kamili wa jibu la JSON na mfano mmoja. Iendeshe kutoka daftari la Colab kwa majaribio matano, likiwemo moja la hila, andika kama kila jibu lilikuwa JSON halali na sahihi, na ubadilishe prompt mara moja kurekebisha kosa.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaojenga wakala wao wa kwanza wa AI katika programu ya Design, Build, and Deploy Autonomous AI Agents: wamiliki wa biashara ndogo, watu wanaobadilisha kazi, wanafunzi na wafanyakazi waliomaliza kozi ya 1 na kupanga kazi moja ya wakala.",
    startingPoint: "Wametumia chatbot ya bure na kupanga wakala kwenye karatasi katika kozi ya 1. Wengi wana uzoefu mdogo au hawana kabisa wa kuandika msimbo, na hawajawahi kuita modeli kutoka kwa msimbo.",
    gap: "Wakala anaaminika tu kadiri maelekezo ambayo modeli yake inapata yalivyo mazuri. Wanafunzi wanahitaji kuandika system prompt zilizo wazi, kupata majibu ambayo programu inaweza kusoma, na kujaribu prompt kwa makusudi; la sivyo mawakala wao watafanya mambo yasiyotabirika na kuharibika wanapopata ingizo la ajabu.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi; msimbo unaonyeshwa kama mistari mifupi ya kunakili",
      "Vifaa: kompyuta yenye kivinjari cha wavuti; Google Colab ni bure lakini rasilimali zake hazihakikishwi",
      "Ngazi za bure za API zina mipaka na zinaweza kutumia data, kwa hiyo hakuna data binafsi wala ya wateja katika mazoezi",
      "Funguo za API lazima zibaki siri, nje ya madaftari na picha za skrini",
      "Muda: masomo mafupi yenye kazi moja ya mazoezi kila moja"
    ],
    prerequisites: "Kozi ya kwanza ya Design, Build, and Deploy Autonomous AI Agents. Kozi ya \"Introduction to Programming with Python\" inasaidia kama rafiki wa kozi hii."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa jibu lisilo sahihi lakini lenye uhakika kutoka chatbot", action: "kueleza jinsi tokeni, utabiri na dirisha la muktadha vinavyoweza kufanya LLM isikike sahihi na bado ikosee", standard: "kwa maneno yako mwenyewe, ukitaja angalau sababu mbili" },
    { id: "O2", condition: "Kwa kazi moja ya wakala wako", action: "kuandika system prompt yenye jukumu, kazi, muktadha, kanuni na muundo wa jibu", standard: "kila sehemu ikiwepo na kanuni zinazoweza kukaguliwa" },
    { id: "O3", condition: "Ukipewa system prompt yako", action: "kuongeza mfano mmoja uliofanyiwa kazi na muundo kamili wa jibu la JSON", standard: "ili angalau majibu 4 kati ya 5 yawe JSON halali peke yake yenye funguo sahihi" },
    { id: "O4", condition: "Katika daftari la bure la Google Colab", action: "kuita LLM kutoka Python huku ufunguo wa API ukihifadhiwa kama siri", standard: "jibu likichapishwa na bila ufunguo kuonekana katika msimbo" },
    { id: "O5", condition: "Ukipewa jibu la modeli katika daftari lako", action: "kuchanganua jibu la JSON kuwa data ya Python na kushughulikia jibu baya", standard: "bila msimbo kuanguka kwa jibu tupu au lililoharibika" },
    { id: "O6", condition: "Ukipewa maingizo matano ya majaribio, likiwemo moja la hila", action: "kujaribu prompt, kuandika matokeo na kubadilisha kitu kimoja kurekebisha kosa", standard: "ukiendesha tena kila jaribio baada ya kila badiliko" }
  ],
  chapters: [
    {
      name: "Sura 1: Jinsi LLM zinavyofanya kazi na jinsi ya kuzipa maelekezo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Jinsi LLM inavyoandika: tokeni, utabiri na muktadha",
          minutes: 5,
          goal: "Eleza kwa nini LLM inaweza kusikika sahihi na bado ikosee.",
          text: [
            "LLM inaandika kipande kidogo kimoja cha maandishi kwa wakati. Vipande hivi vinaitwa tokeni: neno fupi, sehemu ya neno refu au alama ya uakifishaji. Katika kila hatua modeli inatabiri tokeni inayofuata inayowezekana, kutokana na kila kitu ilichoona hadi sasa.",
            "Kila kitu ambacho modeli inaweza kuona kwa wakati mmoja ni dirisha lake la muktadha: system prompt, mazungumzo, nyaraka zozote unazobandika na jibu lake hadi sasa. Chochote kilicho nje ya dirisha la muktadha hakipo kwa modeli. Haikumbuki mazungumzo ya zamani isipokuwa app iyaongeze.",
            "Kwa sababu inatabiri maandishi yanayowezekana, LLM inaweza kuandika jibu laini ambalo si kweli. Haitafuti ukweli isipokuwa iwe na zana ya kutafuta. Prompt yako, muktadha unaoipa na ukaguzi unaojenga ndivyo vinavyoifanya iaminike."
          ],
          words: [["Tokeni", "kipande kidogo cha maandishi, mara nyingi sehemu ya neno, ambacho LLM inasoma na kuandika."], ["Dirisha la muktadha", "maandishi yote ambayo modeli inaweza kuona kwa wakati mmoja."], ["Utabiri", "modeli inapochagua tokeni inayofuata inayowezekana kutokana na kilichotangulia."]],
          slides: [
            { title: "LLM inaandika tokeni moja baada ya nyingine", bullets: ["Tokeni ni neno au sehemu ya neno", "Kila hatua inatabiri tokeni inayofuata inayowezekana"] },
            { title: "Dirisha la muktadha", bullets: ["Kila kitu modeli inaona kwa wakati mmoja", "System prompt, mazungumzo, nyaraka, jibu lake", "Kilicho nje ya dirisha hakipo kwake"] },
            { title: "Kwa nini inaweza kukosea", bullets: ["Inatabiri maandishi yanayowezekana, si ukweli uliokaguliwa", "Prompt, muktadha na ukaguzi wako vinaifanya iaminike"] }
          ],
          tryIt: "Kwenye chatbot ya bure, uliza: \"How many letters r are in the word strawberry? Then explain how tokens might make this hard for you.\" (Herufi r ngapi ziko katika neno strawberry? Kisha eleza jinsi tokeni zinavyoweza kufanya hili kuwa gumu kwako.) Andika kama jibu la kwanza lilikuwa sahihi, na kwa nini tokeni ni muhimu.",
          youCanNow: "kueleza tokeni na dirisha la muktadha, na kwa nini LLM inahitaji kukaguliwa.",
          quickCheck: [
            { objective: "O1", q: "LLM inafanya nini inapoandika jibu?", options: ["Inatafuta jibu kwenye hifadhidata iliyokaguliwa", "Inatabiri tokeni zinazofuata zinazowezekana, moja kwa wakati", "Inanakili jibu lililohifadhiwa lililoandikwa na mtu", "Inafanya utafutaji na kusoma tokeo la kwanza"], answer: 1, why: "LLM inatabiri maandishi tokeni moja baada ya nyingine, kwa hiyo inaweza kusikika fasaha bila kukagua ukweli." },
            { objective: "O1", q: "Chatbot inakupa jibu lenye uhakika kuhusu kanuni muhimu kwa kazi yako. Unafanya nini?", options: ["Unalitumia, kwa sababu lilisikika na uhakika", "Unauliza swali lile lile tena hadi ikubali", "Unakagua kanuni hiyo na chanzo cha kuaminika kabla ya kuitumia", "Unabandika jibu kwenye mazungumzo mapya kulithibitisha"], answer: 2, why: "Jibu laini bado linaweza kuwa si sahihi, kwa hiyo ukweli muhimu unahitaji chanzo cha kuaminika." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Sehemu za prompt imara",
          minutes: 6,
          goal: "Andika prompt yenye jukumu, kazi, muktadha, kanuni na muundo wa jibu.",
          text: [
            "Prompt imara ya wakala ina sehemu tano. Jukumu: modeli ni nani (\"Unapanga ujumbe wa wateja kwa duka dogo la mikate.\"). Kazi: kazi hiyo moja. Muktadha: ukweli unaouhitaji. Kanuni: inachopaswa na isichopaswa kufanya. Muundo wa jibu: jinsi jibu linavyopaswa kuonekana hasa.",
            "System prompt inabeba sehemu zinazobaki zile zile kila mara: jukumu, kanuni na muundo. Ujumbe wa mtumiaji (user message) unabeba kinachobadilika kila mara: ujumbe mpya wa kupanga, swali jipya.",
            "Kuwa mahususi na sema cha kufanya. \"Jibu kwa sentensi mbili\" inafanya kazi vizuri kuliko \"usiwe mrefu\". Sema cha kufanya isipokuwa na uhakika: \"Ujumbe usipofaa aina yoyote, tumia other.\" Kanuni hiyo moja inazuia makisio mengi yasiyo sahihi."
          ],
          steps: ["Jukumu: modeli ni nani?", "Kazi: kazi moja iliyo wazi.", "Muktadha: ukweli unaouhitaji.", "Kanuni: lazima, isifanye, na cha kufanya isipokuwa na uhakika.", "Muundo: jinsi jibu linavyoonekana hasa."],
          words: [["System prompt", "maelekezo ya kudumu yanayotumwa pamoja na kila ombi."], ["Ujumbe wa mtumiaji", "sehemu inayobadilika kila mara, kama swali jipya au ingizo jipya."]],
          slides: [
            { title: "Sehemu tano za prompt imara", bullets: ["Jukumu", "Kazi", "Muktadha na kanuni", "Muundo wa jibu"] },
            { title: "System prompt dhidi ya ujumbe wa mtumiaji", bullets: ["System: kinachobaki sawa (jukumu, kanuni, muundo)", "Mtumiaji: kinachobadilika kila mara (ingizo jipya)"] },
            { title: "Andika kanuni zilizo wazi", bullets: ["Sema cha kufanya, si tu cha kutofanya", "Toa kanuni kwa wakati haina uhakika", "Mfano: kama hakuna kinachofaa, tumia \"other\""] }
          ],
          tryIt: "Andika system prompt yenye sehemu tano kwa kazi moja ya wakala wako kutoka kozi ya 1. Ibandike kwenye chatbot ya bure, kisha tuma maingizo matatu tofauti na uone kama inafuata kila kanuni.",
          youCanNow: "kuandika prompt yenye jukumu, kazi, muktadha, kanuni na muundo wa jibu.",
          quickCheck: [
            { objective: "O2", q: "Sehemu ya jukumu katika system prompt ni ipi?", options: ["Funguo kamili za JSON unazotaka zirudi", "Ujumbe ambao mtumiaji anatuma wakati huu", "Orodha ya maingizo ya majaribio", "Modeli inapaswa kujifanya nani, kama mpangaji wa ujumbe wa msaada"], answer: 3, why: "Jukumu linaiambia modeli ni nani kwa kazi hii; sehemu nyingine zinahusu kazi, muktadha, kanuni na muundo." },
            { objective: "O2", q: "Prompt yako inasema \"kuwa msaidizi na mzuri\" na majibu yanatofautiana. Ungebadilisha nini?", options: ["Kuiweka kanuni zilizo wazi ambazo modeli inaweza kufuata na wewe kukagua", "Kuirefusha prompt kwa maneno zaidi ya kirafiki", "Kuondoa kanuni zote ili modeli iamue", "Kubadili kwenda chatbot nyingine"], answer: 0, why: "Maneno yasiyo wazi hayawezi kukaguliwa; kanuni mahususi zinafanya tabia iwe thabiti." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Mifano, hatua na jibu lenye muundo",
          minutes: 5,
          goal: "Tumia mfano na muundo wa JSON kupata majibu ambayo programu inaweza kusoma.",
          text: [
            "Kuonyesha ni bora kuliko kueleza. Mfano mmoja au miwili iliyofanyiwa kazi katika prompt (ingizo na jibu kamili unalotaka) inaboresha matokeo sana. Hii inaitwa few-shot prompting. Zero-shot inamaanisha bila mifano.",
            "Mawakala wanahitaji majibu ambayo msimbo unaweza kusoma, si aya za mazungumzo. Omba JSON, muundo rahisi wa maandishi wa majina na thamani: {\"category\": \"order\", \"urgent\": false}. Sema: \"Jibu kwa JSON peke yake, bila maandishi mengine,\" na onyesha funguo kamili.",
            "Kwa kazi ngumu zaidi, iombe modeli ifanye kazi kwa hatua: kwanza iorodheshe ukweli, kisha iamue. Huduma nyingi za modeli pia zinaweza kulazimisha JSON halali kwa mpangilio unaoitwa structured output (jibu lenye muundo); angalia nyaraka za mtoa huduma wako."
          ],
          words: [["Few-shot prompting", "kuipa modeli mifano michache ya ingizo na jibu sahihi."], ["JSON", "muundo rahisi wa maandishi wa thamani zenye majina ambao programu zinaweza kusoma, kama {\"name\": \"Ana\"}."], ["Structured output", "mpangilio wa modeli unaofanya jibu lifuate muundo kamili."]],
          slides: [
            { title: "Onyesha, usieleze tu", bullets: ["Zero-shot: bila mifano", "Few-shot: mfano mmoja hadi mitatu iliyofanyiwa kazi", "Mifano inaboresha matokeo sana"] },
            { title: "Omba JSON", bullets: ["Programu zinaweza kuisoma", "\"Jibu kwa JSON peke yake, bila maandishi mengine\"", "Onyesha funguo kamili unazotaka"] },
            { title: "Kazi ngumu zaidi", bullets: ["Iombe iorodheshe ukweli, kisha iamue", "Tumia structured output kama mtoa huduma anayo"] }
          ],
          tryIt: "Ongeza mfano mmoja uliofanyiwa kazi na muundo wa JSON kwenye prompt yako kutoka Somo la 2. Tuma maingizo matano. Hesabu majibu mangapi yalikuwa JSON peke yake yenye funguo sahihi.",
          youCanNow: "kutumia mifano na muundo wa JSON kupata majibu ambayo msimbo wako unaweza kusoma.",
          quickCheck: [
            { objective: "O3", q: "Kwa nini uongeze mfano uliofanyiwa kazi kwenye prompt?", options: ["Unaifanya modeli ifanye kazi haraka zaidi", "Unaficha kanuni kutoka kwa mtumiaji", "Unaionyesha modeli aina kamili ya jibu unalotaka", "Unaondoa haja ya jukumu"], answer: 2, why: "Mfano unaionyesha modeli mtindo na muundo wa kunakili." },
            { objective: "O3", q: "Baadhi ya majibu yanarudi kama JSON yenye sentensi ya kirafiki mbele. Ungefanya nini?", options: ["Kuikubali, kwa sababu JSON imo humo mahali fulani", "Kusema katika prompt irudishe JSON peke yake yenye funguo kamili, na kuonyesha mfano", "Kuomba jibu refu zaidi", "Kuondoa muundo wa jibu ili modeli iwe huru"], answer: 1, why: "Msimbo unahitaji JSON peke yake, kwa hiyo prompt lazima iseme hivyo wazi na ionyeshe." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Jinsi LLM zinavyofanya kazi na jinsi ya kuzipa maelekezo",
        questions: [
          { objective: "O1", q: "Tokeni ni nini?", options: ["Nywila ya AI", "Sarafu ya kulipia AI", "Kipande kidogo cha maandishi ambacho modeli inasoma na kuandika", "Aina ya chatbot"], answer: 2, why: "LLM zinafanya kazi kwa tokeni: maneno au sehemu za maneno." },
          { objective: "O1", q: "Ulibandika nyaraka kwenye mazungumzo moja. Kwenye mazungumzo mapya, modeli haiijui. Kwa nini?", options: ["Nyaraka sasa iko nje ya dirisha lake la muktadha", "Modeli imeharibika", "Nyaraka haziruhusiwi", "Inahitaji kompyuta yenye kasi zaidi"], answer: 0, why: "Modeli inaona tu kilicho ndani ya dirisha la muktadha la sasa." },
          { objective: "O2", q: "Sehemu ipi inafaa kuwa katika system prompt?", options: ["Utani wowote", "Ujumbe wa mteja wa leo", "Nywila yako", "Kanuni zinazotumika kila mara"], answer: 3, why: "System prompt inabeba kinachobaki sawa; ujumbe wa mtumiaji unabeba kinachobadilika." },
          { objective: "O2", q: "Kanuni ipi imeandikwa vizuri zaidi?", options: ["\"Usiwe mrefu.\"", "\"Jibu kwa sentensi mbili. Kama huna uhakika, sema: sina uhakika.\"", "\"Jitahidi.\"", "\"Kuwa mzuri.\""], answer: 1, why: "Ni mahususi, inasema cha kufanya, na inasema cha kufanya isipokuwa na uhakika." },
          { objective: "O3", q: "Kwa nini uombe JSON kutoka modeli ya wakala?", options: ["Inaonekana nzuri zaidi", "Modeli haziwezi kuandika aya", "Ni fupi kuandika", "Msimbo wako unaweza kusoma jibu kwa uhakika"], answer: 3, why: "Mawakala wanapitisha majibu kwa msimbo, na msimbo unahitaji muundo uliowekwa." }
        ]
      }
    },
    {
      name: "Sura 2: Kuita na kujaribu LLM kutoka Python",
      lessons: [
        {
          objectives: ["O4"],
          title: "Wito wako wa kwanza wa modeli kutoka Google Colab",
          minutes: 6,
          goal: "Ita LLM kutoka daftari la Python na uchapishe jibu.",
          text: [
            "Google Colab ni daftari la bure la Python linalofanya kazi kwenye kivinjari chako; unahitaji akaunti ya Google. Rasilimali za bure hazihakikishwi na madaftari yasiyotumika yanazimwa baada ya muda, kwa hiyo hifadhi kazi yako. Fungua colab.research.google.com na uunde daftari jipya.",
            "Ili kuita modeli unahitaji ufunguo wa API (API key), nywila ya siri kwa programu. Gemini API ya Google ina ngazi ya bure kwa miradi midogo; unapata ufunguo kutoka Google AI Studio (aistudio.google.com/apikey). Google inasema maudhui ya ngazi ya bure yanaweza kutumika kuboresha bidhaa zake, kwa hiyo usitume kamwe data binafsi au ya wateja kwenye ngazi ya bure.",
            "Mwongozo wa kuanza haraka (quickstart) wa sasa wa Google unaonyesha mistari kama hii: pip install -U google-genai, kisha from google import genai, client = genai.Client(), kisha interaction = client.interactions.create(model='MODEL_NAME', input='Explain an AI agent in one sentence'), kisha print(interaction.output_text). Nakili jina kamili la modeli na msimbo kutoka ukurasa wa quickstart, kwa sababu majina na msimbo hubadilika. Ufunguo unasomwa kutoka kigeu cha mazingira (environment variable) kinachoitwa GEMINI_API_KEY.",
            "Usibandike kamwe ufunguo wako kwenye daftari la pamoja, picha ya skrini au chatbot. Uweke katika mpangilio wa siri, na utengeneze ufunguo mpya ukivuja. Watoa huduma wengine (OpenAI, Anthropic, au modeli ya bure ya ndani kwa Ollama) wanafanya kazi kwa njia ile ile: client, jina la modeli, ingizo na jibu."
          ],
          steps: ["Fungua colab.research.google.com na utengeneze daftari jipya.", "Pata ufunguo wa API kutoka Google AI Studio na uuweke siri.", "Sakinisha maktaba na unakili msimbo wa quickstart.", "Tumia jina la modeli linaloonyeshwa kwenye ukurasa wa quickstart.", "Endesha seli na uchapishe jibu."],
          words: [["API", "njia ya programu moja kuongea na nyingine, kama msimbo wako ukiiomba modeli jibu."], ["Ufunguo wa API", "msimbo wa siri unaoruhusu programu yako kutumia huduma; uutendee kama nywila."], ["Kigeu cha mazingira", "mpangilio uliohifadhiwa nje ya msimbo wako, mara nyingi hutumika kwa siri."]],
          slides: [
            { title: "Colab: Python ya bure kwenye kivinjari", bullets: ["Inahitaji akaunti ya Google", "Rasilimali za bure hazihakikishwi", "Madaftari yasiyotumika yanazimwa: hifadhi kazi yako"] },
            { title: "Kuifanya modeli ijibu", bullets: ["Pata ufunguo wa API kutoka Google AI Studio", "Nakili msimbo na jina la modeli kutoka quickstart", "Client, jina la modeli, ingizo, jibu"] },
            { title: "Linda ufunguo wako", bullets: ["Kamwe kwenye daftari la pamoja au picha ya skrini", "Uweke katika mpangilio wa siri", "Tengeneza ufunguo mpya ukivuja"] },
            { title: "Ngazi ya bure na faragha", bullets: ["Maudhui ya ngazi ya bure yanaweza kutumika kuboresha bidhaa", "Usitume kamwe data binafsi au ya wateja humo"] }
          ],
          sources: [{ name: "Google Colab FAQ", url: "https://research.google.com/colaboratory/faq.html" }, { name: "Gemini API quickstart", url: "https://ai.google.dev/gemini-api/docs/quickstart" }, { name: "Bei na ngazi ya bure ya Gemini API", url: "https://ai.google.dev/gemini-api/docs/pricing" }],
          tryIt: "Tengeneza daftari la Colab, weka ufunguo kwa njia salama na uifanye modeli ijibu: \"Explain an AI agent in one sentence.\" (Eleza wakala wa AI kwa sentensi moja.) Hifadhi daftari kwa jina agent-prompts.",
          youCanNow: "kuita LLM kutoka Python katika daftari la bure na kuweka ufunguo wako wa API siri.",
          quickCheck: [
            { objective: "O4", q: "Google Colab ni nini?", options: ["Daftari la bure la Python linalofanya kazi kwenye kivinjari cha wavuti", "Modeli ya AI ya kulipia", "Mahali pa kuhifadhi nywila", "App ya simu ya kuzungumza na AI"], answer: 0, why: "Colab inakuruhusu kuendesha Python kwenye kivinjari bure, kwa mipaka." },
            { objective: "O4", q: "Unakaribia kushiriki daftari lako. Ufunguo wako wa API umeandikwa katika seli ya msimbo. Unafanya nini?", options: ["Kulishiriki, kwa kuwa marafiki tu wataliona", "Kufifisha ufunguo katika picha ya skrini badala yake", "Kubadilisha jina la kigeu ili iwe vigumu kuupata", "Kuhamisha ufunguo kwenye mpangilio wa siri, na kutengeneza ufunguo mpya kama tayari ulionekana"], answer: 3, why: "Ufunguo ni kama nywila: uweke katika mpangilio wa siri na uubadilishe kama ulivuja." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kutuma system prompt yako na kusoma JSON katika msimbo",
          minutes: 6,
          goal: "Tuma prompt yako kutoka msimbo na ugeuze jibu la JSON kuwa data ya Python.",
          text: [
            "Weka system prompt yako katika kigeu cha Python: SYSTEM = '''You sort messages for a bakery... Reply with only JSON.''' Weka kila ingizo jipya katika kigeu kingine. Njia rahisi zaidi ya kuviunganisha ni kutuma SYSTEM pamoja na ingizo kama maandishi mamoja; watoa huduma wengi pia wana mpangilio tofauti wa maelekezo ya mfumo (system instruction), unaoonyeshwa katika nyaraka zao.",
            "Soma jibu kwa maktaba ya json ya Python: import json, kisha data = json.loads(text). Sasa data['category'] ni thamani ya kawaida ya Python ambayo wakala wako anaweza kuitumia.",
            "Wakati mwingine modeli itaongeza maneno kuzunguka JSON au itakosa ufunguo. Jiandae kwa hilo: funika uchanganuzi kwa try na except, na ukishindwa, jaribu tena mara moja kwa \"Reply with only JSON\" au weka alama kuwa ingizo hilo limeshindwa. Usiruhusu kamwe jibu baya kuangusha wakala au kupita kimya kimya."
          ],
          steps: ["Hifadhi system prompt katika kigeu.", "Tuma system prompt na ingizo kwa modeli.", "Changanua jibu kwa json.loads ndani ya try / except.", "Kagua kwamba funguo unazohitaji zipo.", "Ikishindwa: jaribu tena mara moja, au weka alama kuwa imeshindwa."],
          words: [["Kuchanganua (parse)", "kugeuza maandishi kuwa data ambayo programu inaweza kutumia."], ["try / except", "njia ya Python ya kukamata kosa na kulishughulikia badala ya kuanguka."], ["Kujaribu tena (retry)", "kutuma ombi lile lile tena baada ya kushindwa."]],
          slides: [
            { title: "Prompt katika msimbo", bullets: ["SYSTEM inabeba jukumu, kanuni na muundo", "Kila ingizo jipya linaenda katika kigeu chake"] },
            { title: "Soma JSON", bullets: ["import json", "data = json.loads(text)", "data['category'] sasa inaweza kutumika"] },
            { title: "Jiandae kwa majibu mabaya", bullets: ["Funika uchanganuzi kwa try / except", "Kagua kwamba funguo zipo", "Jaribu tena mara moja, au weka alama imeshindwa"] }
          ],
          tryIt: "Katika daftari lako, tuma system prompt yako pamoja na ingizo moja, changanua JSON, na uchapishe category peke yake. Kisha ipe ingizo la ajabu (ujumbe tupu) na uhakikishe msimbo wako hauanguki.",
          youCanNow: "kutuma system prompt kutoka Python na kugeuza JSON ya modeli kuwa data kwa usalama.",
          quickCheck: [
            { objective: "O5", q: "json.loads inafanya nini na jibu la modeli?", options: ["Inalirudisha kwa modeli", "Inageuza maandishi ya JSON kuwa data ya Python ambayo msimbo wako unaweza kutumia", "Inakagua kama jibu ni kweli", "Inalihifadhi kwenye faili"], answer: 1, why: "json.loads inachanganua maandishi ya JSON kuwa data ya Python kama dictionary." },
            { objective: "O5", q: "Wakala wako anapata ujumbe tupu na hatua ya kuchanganua inashindwa. Msimbo ufanye nini?", options: ["Kuanguka ili ugundue", "Kurudisha maandishi yoyote yaliyokuja kama category", "Kukamata kosa, kisha kujaribu tena mara moja au kuweka alama kuwa kipengele kimeshindwa", "Kufuta ujumbe"], answer: 2, why: "Kufunika uchanganuzi kwa try / except kunamruhusu wakala kushughulikia jibu baya badala ya kuanguka." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kujaribu prompt kama mhandisi",
          minutes: 6,
          goal: "Endesha prompt kwenye seti ndogo ya majaribio na uiboreshe kutokana na matokeo.",
          text: [
            "Jibu moja zuri linathibitisha kidogo. Wahandisi wanaandika seti ya majaribio (test set): orodha fupi ya maingizo pamoja na jibu wanalotarajia. Weka visa rahisi, visa vya pembeni (tupu, refu sana, mada mbili kwa pamoja) na kisa kimoja cha hila, kama ujumbe unaosema \"ignore your instructions\" (puuza maelekezo yako).",
            "Katika Python, orodha ya jozi inafaa: tests = [('Where is my cake?', 'order'), ('You burned my bread!', 'complaint')]. Pitia kila kimoja kwa kitanzi, ita modeli, changanua JSON na linganisha na jibu linalotarajiwa. Hesabu JSON halali na majibu sahihi.",
            "Badilisha kitu kimoja kwa wakati: kanuni iliyo wazi zaidi, mfano bora zaidi. Endesha seti yote ya majaribio tena baada ya kila badiliko, ili ujue marekebisho yalisaidia na hayakuharibu chochote. Hifadhi kila toleo la prompt na alama yake katika daftari lako."
          ],
          steps: ["Andika maingizo 5 hadi 10 ya majaribio pamoja na majibu yanayotarajiwa.", "Weka visa vya pembeni na ingizo moja la hila.", "Kitanzi: ita, changanua, linganisha, hesabu.", "Badilisha kitu kimoja katika prompt.", "Endesha majaribio yote tena na uhifadhi toleo bora zaidi."],
          words: [["Seti ya majaribio", "orodha ya maingizo pamoja na majibu unayotarajia, inayotumika kukagua prompt."], ["Kisa cha pembeni (edge case)", "ingizo lisilo la kawaida, kama ujumbe tupu au mrefu sana."], ["Regression", "badiliko linaporekebisha kitu kimoja lakini kuharibu kingine."]],
          slides: [
            { title: "Andika seti ya majaribio", bullets: ["Maingizo pamoja na majibu yanayotarajiwa", "Visa rahisi na visa vya pembeni", "Ingizo moja la hila la \"ignore your instructions\""] },
            { title: "Iendeshe kwa kitanzi", bullets: ["Ita modeli kwa kila ingizo", "Changanua JSON, linganisha na linalotarajiwa", "Hesabu halali na sahihi"] },
            { title: "Boresha badiliko moja kwa wakati", bullets: ["Kanuni iliyo wazi zaidi au mfano bora zaidi", "Endesha tena kila jaribio baada ya kila badiliko", "Hifadhi matoleo na alama"] }
          ],
          tryIt: "Kazi ya mwisho: andika system prompt yako yenye jukumu, kazi, kanuni tatu, muundo wa JSON na mfano mmoja. Ijaribu katika Colab kwa maingizo matano likiwemo moja la hila, andika JSON halali na sahihi kwa kila moja, badilisha prompt mara moja kurekebisha kosa, na uendeshe tena.",
          youCanNow: "kujaribu na kuboresha prompt kwa seti ndogo ya majaribio, kama wajenzi wa mawakala wanavyofanya.",
          quickCheck: [
            { objective: "O6", q: "Regression ni nini unapojaribu prompt?", options: ["Jaribio linalofaulu mara ya kwanza", "Marekebisho yanayofanya jaribio lililokuwa likifaulu sasa lishindwe", "Ingizo la jaribio lililoandikwa kwa lugha nyingine", "Jibu la polepole zaidi kutoka modeli"], answer: 1, why: "Regression ni badiliko linapoharibu kitu kilichofanya kazi awali." },
            { objective: "O6", q: "Jaribio moja kati ya matano linashindwa. Hatua bora inayofuata ni ipi?", options: ["Kubadilisha kitu kimoja katika prompt na kuendesha tena majaribio yote matano", "Kuandika upya prompt yote kuanzia mwanzo", "Kufuta jaribio linaloshindwa", "Kuendesha tena jaribio linaloshindwa peke yake"], answer: 0, why: "Kubadilisha kitu kimoja na kuendesha tena kila jaribio kunaonyesha badiliko lilirekebisha nini na liliharibu nini." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuita na kujaribu LLM kutoka Python",
        questions: [
          { objective: "O4", q: "Ufunguo wako wa API unapaswa kuwekwa wapi?", options: ["Katika seli ya daftari la pamoja", "Katika picha ya skrini ya kuomba msaada", "Katika mpangilio wa siri au kigeu cha mazingira", "Katika chatbot ili iukumbuke"], answer: 2, why: "Funguo ni nywila za programu na lazima zibaki siri." },
          { objective: "O4", q: "Kwa nini unakili jina la modeli kutoka ukurasa wa quickstart wa mtoa huduma?", options: ["Majina ya modeli na msimbo hubadilika kadiri muda unavyopita", "Inatakiwa na sheria", "Inafanya jibu kuwa fupi zaidi", "Colab haitafanya kazi vinginevyo"], answer: 0, why: "Watoa huduma hubadilisha majina ya modeli na kuziondoa; ukurasa wao ni wa sasa." },
          { objective: "O5", q: "json.loads(text) inashindwa kwa sababu modeli iliongeza maneno. Wakala mzuri:", options: ["Anaanguka", "Anakamata kosa, anajaribu tena mara moja au anaweka alama kuwa imeshindwa", "Anafuta ingizo", "Anatumia maandishi hata hivyo"], answer: 1, why: "Jiandae kwa majibu mabaya ili yasiangushe wala yasipite kimya kimya." },
          { objective: "O6", q: "Kipi kinafaa kuwa katika seti nzuri ya majaribio?", options: ["Visa rahisi, visa vya pembeni na ingizo la hila", "Ingizo moja tu", "Maingizo rahisi tu", "Majibu ambayo modeli tayari ilitoa"], answer: 0, why: "Visa vya pembeni na vya hila vinaonyesha mahali prompt inaharibika." },
          { objective: "O6", q: "Ulibadilisha prompt na jaribio moja sasa linafaulu. Nini kinafuata?", options: ["Kuizindua mara moja", "Kubadilisha vitu vitano zaidi kwa pamoja", "Kufuta majaribio ya zamani", "Kuendesha seti yote ya majaribio tena"], answer: 3, why: "Kuendesha kila kitu tena kunagundua regression." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kuelewa LLM na Uhandisi wa Prompt",
    questions: [
      { objective: "O1", q: "LLM inaandika kwa:", options: ["Kunakili ukurasa wa wavuti", "Kutabiri tokeni moja kwa wakati", "Kumuuliza mtu", "Kutafuta katika orodha ya majibu yaliyowekwa"], answer: 1, why: "Inatabiri tokeni inayofuata inayowezekana, tena na tena." },
      { objective: "O1", q: "Dirisha la muktadha ni:", options: ["Kichupo cha kivinjari", "Bei ya modeli", "Kila kitu ambacho modeli inaweza kuona kwa wakati mmoja", "Rangi za app ya mazungumzo"], answer: 2, why: "Maandishi yaliyo ndani ya dirisha tu ndiyo yaliyopo kwa modeli." },
      { objective: "O1", q: "Kwa nini modeli inaweza kusema jambo lisilo kweli kwa ulaini?", options: ["Imeishiwa na tokeni", "Inadanganya kwa makusudi", "Inatabiri maandishi yanayowezekana badala ya kukagua ukweli", "Ufunguo wake umeisha muda"], answer: 2, why: "Utabiri si ukaguzi wa ukweli isipokuwa zana iongezwe." },
      { objective: "O2", q: "Kipi SI moja ya sehemu tano za prompt imara?", options: ["Nywila yako", "Muundo wa jibu", "Kanuni", "Jukumu"], answer: 0, why: "Nywila hazipaswi kamwe kuwa katika prompt." },
      { objective: "O2", q: "Nini kinapaswa kubadilika kila mara?", options: ["System prompt", "Muundo wa jibu", "Jukumu", "Ujumbe wa mtumiaji"], answer: 3, why: "Ingizo jipya linaenda katika ujumbe wa mtumiaji." },
      { objective: "O2", q: "Kanuni nzuri kwa visa visivyo na uhakika ni:", options: ["\"Kisia.\"", "\"Kama hakuna kinachofaa, tumia other.\"", "\"Usiwe kamwe bila uhakika.\"", "\"Buni kitu.\""], answer: 1, why: "Kuiambia ifanye nini isipokuwa na uhakika kunazuia makisio yasiyo sahihi." },
      { objective: "O3", q: "Few-shot prompting inamaanisha:", options: ["Prompt fupi tu", "Kutuma maombi machache", "Kutumia modeli ndogo", "Kuweka mifano michache iliyofanyiwa kazi"], answer: 3, why: "Mifano ya ingizo na jibu inaiongoza modeli." },
      { objective: "O3", q: "Kipi ni JSON halali?", options: ["category = order", "<category>order", "{\"category\": \"order\"}", "category: order;"], answer: 2, why: "JSON inatumia mabano { }, majina na thamani zilizo ndani ya alama za nukuu." },
      { objective: "O3", q: "Structured output ni:", options: ["Mpangilio wa modeli unaolazimisha muundo kamili", "Jibu refu zaidi", "Aina ya chatbot", "Menyu ya Colab"], answer: 0, why: "Watoa huduma wengi wanaweza kulazimisha JSON halali kwa mpangilio huu; angalia nyaraka." },
      { objective: "O4", q: "Google Colab ni:", options: ["Seva ya kulipia unayopaswa kusakinisha", "Daftari la bure la Python kwenye kivinjari", "App ya simu tu", "Modeli ya AI"], answer: 1, why: "Colab inaendesha madaftari ya Python kwenye kivinjari chako bure." },
      { objective: "O4", q: "Rasilimali za bure za Colab:", options: ["Hazihakikishwi; madaftari yasiyotumika yanazimwa", "Zinahakikishwa na hazina kikomo", "Ni za shule tu", "Ni za wikendi tu"], answer: 0, why: "Colab inasema rasilimali za bure hazihakikishwi." },
      { objective: "O4", q: "Ufunguo wa API unapaswa kutendewa kama:", options: ["Jina la mtumiaji la wazi", "Maoni", "Jina la faili", "Nywila"], answer: 3, why: "Mtu yeyote mwenye ufunguo anaweza kutumia akaunti yako." },
      { objective: "O4", q: "Kwenye ngazi ya bure ya Gemini API hupaswi kutuma:", options: ["Swali la majaribio", "Data binafsi au ya wateja", "Ujumbe wa mfano wa duka la mikate ulioubuni", "\"Habari\""], answer: 1, why: "Maudhui ya ngazi ya bure yanaweza kutumika kuboresha bidhaa za Google." },
      { objective: "O4", q: "Ufunguo wako ulivuja katika picha ya skrini. Unapaswa:", options: ["Kutumaini hakuna aliyeuona", "Kuuweka mtandaoni tena", "Kutengeneza ufunguo mpya na kuacha kutumia wa zamani", "Kuutuma kwa barua pepe kwa huduma kwa wateja"], answer: 2, why: "Ufunguo uliovuja lazima ubadilishwe." },
      { objective: "O5", q: "json.loads inageuza:", options: ["Data kuwa picha", "Python kuwa JavaScript", "Maandishi ya JSON kuwa data ya Python", "Prompt kuwa modeli"], answer: 2, why: "Kuchanganua kunafanya jibu litumike katika msimbo." },
      { objective: "O5", q: "Kufunika uchanganuzi kwa try / except kunamruhusu wakala wako:", options: ["Kushughulikia jibu baya badala ya kuanguka", "Kufanya kazi haraka zaidi", "Kuruka wito wa modeli", "Kuficha ufunguo"], answer: 0, why: "Makosa yanakamatwa na kushughulikiwa." },
      { objective: "O6", q: "Kisa cha pembeni ni:", options: ["Ingizo la kawaida sana", "Jina la modeli", "Jaribio la kwanza", "Ingizo lisilo la kawaida kama ujumbe tupu"], answer: 3, why: "Visa vya pembeni vinajaribu mipaka ya prompt." },
      { objective: "O6", q: "Kwa nini uweke ingizo la \"ignore your instructions\" katika majaribio?", options: ["Kuifanya modeli iwe haraka zaidi", "Kukagua kama prompt inapinga uchomekaji (injection)", "Kuokoa tokeni", "Kwa sababu sheria inasema hivyo"], answer: 1, why: "Mawakala husoma maandishi yasiyoaminika; prompt inapaswa kushikilia kanuni zake." },
      { objective: "O6", q: "Regression ni wakati:", options: ["Modeli inakuwa nafuu zaidi", "Ufunguo unaisha muda", "Majaribio yote yanafaulu", "Marekebisho yanaharibu kitu kilichofanya kazi"], answer: 3, why: "Kuendesha tena majaribio yote kunagundua regression." },
      { objective: "O6", q: "Njia bora ya kuboresha prompt ni:", options: ["Kubadilisha vitu vingi kwa pamoja", "Kutoibadilisha kamwe", "Kubadilisha kitu kimoja na kuendesha tena majaribio yote", "Kuiomba modeli ijipime yenyewe tu"], answer: 2, why: "Badiliko moja kwa wakati linaonyesha kilichosaidia kweli." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 2, 3, 5, 7, 8, 11, 13, 15, 19]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "System prompt kamili", objective: "O2", notYet: "Jukumu, kazi au mojawapo ya kanuni tatu haipo au haiko wazi.", meets: "Inatoa jukumu, kazi na kanuni tatu zilizo wazi.", exceeds: "Kanuni pia zinasema cha kufanya isipokuwa na uhakika au hakuna kinachofaa." },
      { name: "Muundo na mfano", objective: "O3", notYet: "Hakuna muundo kamili wa JSON au hakuna mfano.", meets: "Inataja funguo kamili za JSON na inatoa mfano mmoja uliofanyiwa kazi.", exceeds: "Mfano unalingana na muundo kabisa na majibu mengi ni JSON halali." },
      { name: "Inaendeshwa kutoka Colab kwa usalama", objective: "O4", notYet: "Daftari halifanyi kazi, au ufunguo wa API unaonekana.", meets: "Prompt inaendeshwa kutoka Colab huku ufunguo ukiwa katika mpangilio wa siri.", exceeds: "Daftari ni nadhifu na mtu mwingine anaweza kuliendesha tena kwa ufunguo wake mwenyewe." },
      { name: "Inachanganua majibu kwa usalama", objective: "O5", notYet: "Jibu baya au tupu linaangusha msimbo.", meets: "JSON inachanganuliwa kuwa data na jibu baya linakamatwa.", exceeds: "Vipengele vilivyoshindwa vinawekewa alama wazi ili vipitiwe." },
      { name: "Imejaribiwa na kuboreshwa", objective: "O6", notYet: "Maingizo chini ya matano, hakuna ingizo la hila, au matokeo hayakuandikwa.", meets: "Maingizo matano likiwemo moja la hila, JSON halali na sahihi imeandikwa kwa kila moja, badiliko moja limefanywa na majaribio yote yameendeshwa tena.", exceeds: "Anaweza kueleza kwa nini kosa lilitokea na badiliko lilirekebisha nini." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoendelea na kozi ya 3 ya programu ya mawakala ndani ya siku 30",
      "Wanafunzi wanaoripoti kutumia system prompt iliyojaribiwa katika wakala halisi au kazi halisi ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kwamba hakuna ufunguo wa API uliovuja (utafiti wa kufuatilia)"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye kivinjari cha wavuti na intaneti",
      "Akaunti ya bure ya Google kwa Google Colab",
      "Ufunguo wa bure wa API ya modeli ya AI kutoka tovuti rasmi ya mtoa huduma",
      "Mpango wa wakala kutoka kozi ya 1",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha fanyeni Sura ya 1 kwenye chatbot ya bure kabla mtu yeyote hajafungua Colab.",
      "Iongoze kikundi katika kuhifadhi ufunguo wa API kama siri, na uhakikishe hakuna ufunguo unaoonekana kwenye skrini au katika madaftari ya pamoja.",
      "Wakumbushe wanafunzi wasitume data binafsi au ya wateja kwenye ngazi za bure za API.",
      "Waunganishe wanafunzi ambao hawajawahi kuandika msimbo na mtu aliyewahi, na waombe wanakili mistari ya msimbo kama ilivyo.",
      "Pima kazi ya mwisho kwa rubriki, na mwombe kila mwanafunzi aonyeshe matokeo yake ya majaribio matano."
    ]
  }
};

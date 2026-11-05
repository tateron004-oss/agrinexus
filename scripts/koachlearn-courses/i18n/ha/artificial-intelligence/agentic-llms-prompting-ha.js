"use strict";

// Koach Learn course, Hausa (ha) translation of artificial-intelligence/agentic-llms-prompting.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "agentic-llms-prompting-ha",
  lang: "ha",
  translationOf: "agentic-llms-prompting",
  category: "Artificial Intelligence",
  name: "Fahimtar LLM da Fasahar Rubuta Prompt",
  skills: "Bayanin token da context, Rubuta system prompt, Amfani da misalai, Samun amsar JSON mai tsari, Kiran LLM daga Python, Gwada prompt",
  outcome: "rubuta da gwada system prompt amintacce don wakilin AI (agent): yana faɗin matsayi, aiki, dokoki da tsarin amsa tare da misali, yana mayar da JSON mai tsabta, kuma kun gwada shi kan bayanan gwaji biyar daga ƙaramin notebook na Python.",
  about: [
    "Wannan shi ne kwas na 2 na shirin Design, Build, and Deploy Autonomous AI Agents (Tsarawa, Ginawa da Ƙaddamar da Wakilan AI masu Aiki da Kansu). Samfurin da ke cikin kowane wakili babban samfurin harshe ne (LLM), kuma yadda kuke ba shi umarni ne ke tantance ko wakilin zai yi aiki daidai. Wannan kwas yana koya muku yadda LLM ke aiki da kalmomi masu sauƙi, da yadda ake ba shi umarni mai kyau.",
    "Babi na 1 yana bayanin yadda samfurin ke aiki da yadda ake rubuta prompt mai ƙarfi a chatbot kyauta. Babi na 2 yana komawa Python a Google Colab, notebook kyauta a burauzar intanet ɗinku, inda za ku kira samfuri daga code, ku nemi JSON, kuma ku gwada prompt ɗinku kamar injiniya.",
    "Code yana bayyana a matsayin gajerun layuka a cikin rubutun darasi. Kuna iya kwafe su zuwa Colab. Idan ba ku taɓa rubuta code ba, ku bi a hankali; kwas ɗin \"Gabatarwa ga Shirye-shiryen Kwamfuta da Python\" abokin tafiya ne mai kyau. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas."
  ],
  finalTask: "Ku rubuta system prompt don aiki ɗaya a wakilinku daga kwas na 1 (misali, \"raba saƙo mai shigowa zuwa: tambaya, ƙorafi, oda, wani abu dabam\"). Dole ya ba da matsayi, aikin, dokoki uku, ainihin tsarin amsar JSON da misali ɗaya. Ku gudanar da shi daga notebook na Colab kan bayanan gwaji biyar, har da ɗaya mai wayo, ku rubuta ko kowace amsa JSON ce mai inganci kuma daidai ce, sannan ku canja prompt ɗin sau ɗaya don gyara wata gazawa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke gina wakilin AI na farko a shirin Design, Build, and Deploy Autonomous AI Agents: masu ƙananan kasuwanci, masu sauya sana'a, ɗalibai da ma'aikata da suka gama kwas na 1 kuma suka tsara aiki ɗaya na wakili.",
    startingPoint: "Sun yi amfani da chatbot kyauta kuma sun tsara wakili a takarda a kwas na 1. Yawancinsu ba su da ƙwarewa sosai a rubuta code, ko babu kwata-kwata, kuma ba su taɓa kiran samfuri daga code ba.",
    gap: "Amincin wakili ya dogara ne kan umarnin da samfurinsa ke samu. Masu koyo suna buƙatar rubuta system prompt masu sarari, samun amsoshin da shiri zai iya karantawa, da gwada prompt da gangan; in ba haka ba wakilansu za su yi abin da ba a zata ba, kuma su lalace idan bayanai masu ban mamaki suka shigo.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi; ana nuna code a matsayin gajerun layuka da za a kwafa",
      "Na'urori: kwamfuta mai burauzar intanet; Google Colab kyauta ne amma ba a tabbatar da kayan aikinsa ba",
      "Matakan API na kyauta suna da iyaka kuma suna iya amfani da bayanai, don haka babu bayanan sirri ko na abokan ciniki a atisaye",
      "Dole maɓallan API (API key) su kasance a sirri, ba a cikin notebook ko hoton allo ba",
      "Lokaci: gajerun darussa masu aikin atisaye ɗaya kowanne"
    ],
    prerequisites: "Kwas na farko na Design, Build, and Deploy Autonomous AI Agents. \"Gabatarwa ga Shirye-shiryen Kwamfuta da Python\" abokin tafiya ne mai amfani."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku amsar chatbot da ba daidai ba amma da ƙarfin gwiwa", action: "bayyana yadda token, hasashe (prediction) da context window ke iya sa LLM ya yi kama da daidai amma ya yi kuskure", standard: "da kalmominku, kuna ambaton aƙalla dalilai biyu" },
    { id: "O2", condition: "Don aiki ɗaya a wakilinku", action: "rubuta system prompt mai matsayi, aiki, bayanan baya, dokoki da tsarin amsa", standard: "da kowane sashe a ciki, da dokokin da za a iya dubawa" },
    { id: "O3", condition: "Idan kuna da system prompt ɗinku", action: "ƙara misali ɗaya cikakke da ainihin tsarin amsar JSON", standard: "ta yadda aƙalla 4 cikin amsoshi 5 su zama JSON mai inganci kawai, da maɓallai (keys) daidai" },
    { id: "O4", condition: "A cikin notebook na Google Colab kyauta", action: "kiran LLM daga Python tare da ajiye API key a matsayin sirri (secret)", standard: "an buga amsar, kuma babu maɓalli da ake gani a cikin code" },
    { id: "O5", condition: "Idan kuna da amsar samfuri a notebook ɗinku", action: "mayar da amsar JSON zuwa bayanan Python da kula da amsa marar kyau", standard: "ba tare da code ya rushe ba idan amsa ba komai ko ta lalace" },
    { id: "O6", condition: "Idan aka ba ku bayanan gwaji biyar, har da ɗaya mai wayo", action: "gwada prompt ɗin, rubuta sakamako da canja abu ɗaya don gyara gazawa", standard: "kuna sake gudanar da kowane gwaji bayan kowane canji" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yadda LLM ke aiki da yadda ake ba shi umarni",
      lessons: [
        {
          objectives: ["O1"],
          title: "Yadda LLM ke rubutu: token, hasashe da context",
          minutes: 5,
          goal: "Bayyana dalilin da yasa LLM zai iya yin kama da daidai amma ya yi kuskure.",
          text: [
            "LLM yana rubuta ɗan guntun rubutu ɗaya a lokaci ɗaya. Ana kiran waɗannan gutsuttsura token: gajeriyar kalma, ɓangaren doguwar kalma, ko alamar rubutu. A kowane mataki samfurin yana hasashen token na gaba da ya fi dacewa, daga duk abin da ya gani zuwa yanzu.",
            "Duk abin da samfurin zai iya gani a lokaci ɗaya shi ne context window ɗinsa: system prompt, hirar, duk wasu takardun da kuka liƙa, da amsarsa zuwa yanzu. Duk abin da ke wajen context window ba ya wanzu a wurin samfurin. Ba ya tuna hirarrakin baya sai dai idan manhajar ta ƙara su.",
            "Domin yana hasashen rubutu mai yiwuwa, LLM zai iya rubuta amsa mai santsi amma ta ƙarya. Ba ya duba gaskiya sai dai idan yana da kayan bincike. Prompt ɗinku, bayanan da kuka ba shi, da binciken da kuka gina su ne ke sa ya zama amintacce."
          ],
          words: [["Token", "ɗan guntun rubutu, sau da yawa ɓangaren kalma, da LLM ke karantawa da rubutawa."], ["Context window", "duk rubutun da samfurin zai iya gani a lokaci ɗaya."], ["Hasashe (prediction)", "samfurin yana zaɓar token na gaba mai yiwuwa bisa abin da ya gabata."]],
          slides: [
            { title: "LLM yana rubutu token bayan token", bullets: ["Token kalma ce ko ɓangaren kalma", "Kowane mataki yana hasashen token na gaba mai yiwuwa"] },
            { title: "Context window", bullets: ["Duk abin da samfurin ke gani a lokaci ɗaya", "System prompt, hira, takardu, amsarsa", "Abin da ke waje ba ya wanzu a wurinsa"] },
            { title: "Dalilin da yasa zai iya yin kuskure", bullets: ["Yana hasashen rubutu mai yiwuwa, ba gaskiyar da aka duba ba", "Prompt ɗinku, bayanai da bincike ne ke sa shi amintacce"] }
          ],
          tryIt: "A chatbot kyauta, ku tambaya: \"How many letters r are in the word strawberry? Then explain how tokens might make this hard for you.\" (Harafin r nawa ne a kalmar strawberry? Sannan ka bayyana yadda token zai iya sa wannan ya yi maka wuya.) Ku lura ko amsar farko daidai ce, da dalilin da yasa token ke da muhimmanci.",
          youCanNow: "bayyana token da context window, da dalilin da yasa LLM ke buƙatar a duba shi.",
          quickCheck: [
            { objective: "O1", q: "Me LLM ke yi idan yana rubuta amsa?", options: ["Yana nemo amsar a rumbun bayanai da aka tabbatar", "Yana hasashen token na gaba mai yiwuwa, ɗaya bayan ɗaya", "Yana kwafo amsar da mutum ya rubuta aka ajiye", "Yana bincike yana karanta sakamakon farko"], answer: 1, why: "LLM yana hasashen rubutu token bayan token, don haka zai iya yin magana mai santsi ba tare da duba gaskiya ba." },
            { objective: "O1", q: "Chatbot ya ba da amsa da ƙarfin gwiwa game da wata doka mai muhimmanci a aikinku. Me za ku yi?", options: ["Ku yi amfani da ita, domin ya yi magana kamar ya tabbata", "Ku sake yi masa tambaya ɗaya har ya yarda", "Ku duba dokar a majiya amintacciya kafin ku yi amfani da ita", "Ku liƙa amsar a sabuwar hira don tabbatarwa"], answer: 2, why: "Amsa mai santsi tana iya zama ba daidai ba, don haka bayanai masu muhimmanci suna buƙatar majiya amintacciya." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Sassan prompt mai ƙarfi",
          minutes: 6,
          goal: "Rubuta prompt mai matsayi, aiki, bayanan baya, dokoki da tsarin amsa.",
          text: [
            "Prompt mai ƙarfi don wakili yana da sassa biyar. Matsayi (role): wane ne samfurin (\"Kai ne mai raba saƙonnin abokan ciniki na ƙaramin gidan burodi.\"). Aiki (task): aiki ɗaya kacal. Bayanan baya (context): abubuwan da yake buƙatar sani. Dokoki (rules): abin da dole ya yi da wanda kada ya yi. Tsarin amsa (output format): ainihin yadda amsar za ta kasance.",
            "System prompt yana ɗauke da sassan da ba sa canjawa a kowane gudu: matsayi, dokoki da tsari. Saƙon mai amfani (user message) yana ɗauke da abin da ke canjawa kowane lokaci: sabon saƙon da za a raba, sabuwar tambaya.",
            "Ku faɗi abu a sarari kuma ta hanya mai kyau. \"Ka amsa da jimloli biyu\" ya fi \"kada ka yi tsawo\" aiki. Ku faɗi abin da zai yi idan bai tabbata ba: \"Idan saƙon bai dace da kowane rukuni ba, ka yi amfani da other.\" Wannan doka ɗaya tana hana hasashe marasa kyau da yawa."
          ],
          steps: ["Matsayi: wane ne samfurin?", "Aiki: aiki ɗaya a sarari.", "Bayanan baya: abubuwan da yake buƙata.", "Dokoki: dole, kada, da abin da zai yi idan bai tabbata ba.", "Tsari: ainihin yadda amsar za ta kasance."],
          words: [["System prompt", "umarni na dindindin da ake aikawa tare da kowace buƙata."], ["Saƙon mai amfani (user message)", "sashen da ke canjawa kowane lokaci, kamar sabuwar tambaya ko sabon bayani."]],
          slides: [
            { title: "Sassa biyar na prompt mai ƙarfi", bullets: ["Matsayi", "Aiki", "Bayanan baya da dokoki", "Tsarin amsa"] },
            { title: "System prompt da saƙon mai amfani", bullets: ["System: abin da ba ya canjawa (matsayi, dokoki, tsari)", "Mai amfani: abin da ke canjawa kowane gudu (sabon bayani)"] },
            { title: "Ku rubuta dokoki masu sarari", bullets: ["Ku faɗi abin da zai yi, ba kawai abin da kada ya yi ba", "Ku ba da doka don lokacin da bai tabbata ba", "Misali: idan babu wanda ya dace, ka yi amfani da \"other\""] }
          ],
          tryIt: "Ku rubuta system prompt mai sassa biyar don aiki ɗaya a wakilinku daga kwas na 1. Ku liƙa shi a chatbot kyauta, sannan ku aika bayanai uku dabam-dabam ku ga ko yana bin kowace doka.",
          youCanNow: "rubuta prompt mai matsayi, aiki, bayanan baya, dokoki da tsarin amsa.",
          quickCheck: [
            { objective: "O2", q: "Mene ne sashen matsayi (role) na system prompt?", options: ["Ainihin maɓallan JSON da kuke so a mayar", "Saƙon da mai amfani ya aika a wannan karon", "Jerin bayanan gwaji", "Wane ne samfurin zai zama, kamar mai raba saƙonnin taimako"], answer: 3, why: "Matsayi yana gaya wa samfurin wane ne shi don wannan aikin; sauran sassan suna ɗaukar aiki, bayanan baya, dokoki da tsari." },
            { objective: "O2", q: "Prompt ɗinku yana cewa \"ka zama mai taimako da kirki\" kuma amsoshi suna bambanta. Me za ku canja?", options: ["Ku maye gurbinsa da dokoki masu sarari da samfurin zai iya bi kuma ku iya dubawa", "Ku tsawaita prompt da kalmomi masu daɗi", "Ku cire dukkan dokoki don samfurin ya yanke shawara", "Ku koma wani chatbot dabam"], answer: 0, why: "Kalmomi marasa sarari ba za a iya duba su ba; dokoki masu sarari suna sa halayya ta zama iri ɗaya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Misalai, matakai da amsa mai tsari",
          minutes: 5,
          goal: "Yi amfani da misali da tsarin JSON don samun amsoshin da shiri zai iya karantawa.",
          text: [
            "Nunawa ya fi faɗa. Misali ɗaya ko biyu cikakku a cikin prompt (bayanin shigarwa da ainihin amsar da kuke so) suna inganta sakamako sosai. Ana kiran wannan few-shot prompting. Zero-shot yana nufin babu misali.",
            "Wakilai suna buƙatar amsoshin da code zai iya karantawa, ba dogayen sakin layi na hira ba. Ku nemi JSON, tsarin rubutu mai sauƙi na sunaye da ƙima: {\"category\": \"order\", \"urgent\": false}. Ku ce: \"Ka amsa da JSON kawai, babu wani rubutu,\" kuma ku nuna ainihin maɓallan.",
            "Don ayyuka masu wuya, ku nemi samfurin ya yi aiki mataki-mataki: da farko ya jera bayanan, sannan ya yanke shawara. Yawancin hidimomin samfura kuma suna iya tilasta JSON mai inganci da wani saiti mai suna structured output; ku duba takardun bayani na mai ba ku hidima."
          ],
          words: [["Few-shot prompting", "ba samfurin 'yan misalai na bayanin shigarwa da amsar da ta dace."], ["JSON", "tsarin rubutu mai sauƙi na ƙima masu suna da shirye-shirye ke iya karantawa, kamar {\"name\": \"Ana\"}."], ["Structured output (amsa mai tsari)", "saitin samfuri da ke sa amsar ta bi ainihin tsari."]],
          slides: [
            { title: "Ku nuna, kada ku faɗa kawai", bullets: ["Zero-shot: babu misali", "Few-shot: misalai cikakku ɗaya zuwa uku", "Misalai suna inganta sakamako sosai"] },
            { title: "Ku nemi JSON", bullets: ["Shirye-shirye suna iya karanta shi", "\"Ka amsa da JSON kawai, babu wani rubutu\"", "Ku nuna ainihin maɓallan da kuke so"] },
            { title: "Ayyuka masu wuya", bullets: ["Ku nemi ya jera bayanai, sannan ya yanke shawara", "Ku yi amfani da structured output idan mai ba ku hidima yana da shi"] }
          ],
          tryIt: "Ku ƙara misali ɗaya cikakke da tsarin JSON ga prompt ɗinku na Darasi na 2. Ku aika bayanai biyar. Ku ƙirga amsoshi nawa ne JSON kawai da maɓallai daidai.",
          youCanNow: "amfani da misalai da tsarin JSON don samun amsoshin da code ɗinku zai iya karantawa.",
          quickCheck: [
            { objective: "O3", q: "Me yasa za a ƙara misali cikakke a prompt?", options: ["Yana sa samfurin ya yi sauri", "Yana ɓoye dokoki daga mai amfani", "Yana nuna wa samfurin ainihin irin amsar da kuke so", "Yana kawar da buƙatar matsayi"], answer: 2, why: "Misali yana nuna wa samfurin tsari da salon da zai kwaikwaya." },
            { objective: "O3", q: "Wasu amsoshi suna dawowa a JSON tare da jimlar gaisuwa a gaba. Me za ku yi?", options: ["Ku karɓa, domin JSON yana ciki a wani wuri", "Ku faɗi a cikin prompt ya mayar da JSON kawai da ainihin maɓallai, kuma ku nuna misali", "Ku nemi amsa mai tsawo", "Ku cire tsarin amsa don samfurin ya sami 'yanci"], answer: 1, why: "Code yana buƙatar JSON kawai, don haka dole prompt ya faɗi haka a sarari kuma ya nuna shi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yadda LLM ke aiki da yadda ake ba shi umarni",
        questions: [
          { objective: "O1", q: "Mene ne token?", options: ["Kalmar sirri ta AI", "Tsabar kuɗi don biyan AI", "Ɗan guntun rubutu da samfurin ke karantawa da rubutawa", "Wani nau'in chatbot"], answer: 2, why: "LLM yana aiki da token: kalmomi ko ɓangarorin kalmomi." },
          { objective: "O1", q: "Kun liƙa takarda a wata hira. A sabuwar hira, samfurin bai san ta ba. Me yasa?", options: ["Takardar yanzu tana wajen context window ɗinsa", "Samfurin ya lalace", "Ba a yarda da takardu ba", "Yana buƙatar kwamfuta mafi sauri"], answer: 0, why: "Samfurin yana ganin abin da ke cikin context window na yanzu kawai." },
          { objective: "O2", q: "Wane sashe ne ya dace a system prompt?", options: ["Barkwanci kawai", "Saƙon abokin ciniki na yau", "Kalmar sirrinku", "Dokokin da ke aiki a kowane gudu"], answer: 3, why: "System prompt yana ɗauke da abin da ba ya canjawa; saƙon mai amfani yana ɗauke da abin da ke canjawa." },
          { objective: "O2", q: "Wace doka ce aka fi rubutawa da kyau?", options: ["\"Kada ka yi tsawo.\"", "\"Ka amsa da jimloli biyu. Idan ba ka tabbata ba, ka ce: ban tabbata ba.\"", "\"Ka yi ƙoƙari sosai.\"", "\"Ka zama nagari.\""], answer: 1, why: "Tana da sarari, tana faɗin abin da za a yi, kuma tana faɗin abin da zai yi idan bai tabbata ba." },
          { objective: "O3", q: "Me yasa za a nemi JSON daga samfurin wakili?", options: ["Yana da kyan gani", "Samfura ba sa iya rubuta sakin layi", "Ya fi gajarta a rubuta", "Code ɗinku zai iya karanta amsar da tabbaci"], answer: 3, why: "Wakilai suna tura amsoshi zuwa code, kuma code yana buƙatar tsari tabbatacce." }
        ]
      }
    },
    {
      name: "Babi na 2: Kira da gwada LLM daga Python",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kiran samfuri na farko daga Google Colab",
          minutes: 6,
          goal: "Kira LLM daga notebook na Python ku buga amsar.",
          text: [
            "Google Colab notebook ne na Python kyauta da ke aiki a burauzarku; kuna buƙatar asusun Google. Ba a tabbatar da kayan aiki na kyauta ba, kuma notebook da aka bari ba a amfani da shi yana rufewa da kansa, don haka ku ajiye aikinku. Ku buɗe colab.research.google.com ku ƙirƙiri sabon notebook.",
            "Don kiran samfuri kuna buƙatar API key, kalmar sirri ta shirye-shirye. Gemini API na Google yana da matakin kyauta don ƙananan ayyuka; kuna samun maɓalli daga Google AI Studio (aistudio.google.com/apikey). Google ya ce ana iya amfani da abin da aka aika a matakin kyauta don inganta kayayyakinsa, don haka kada ku taɓa aika bayanan sirri ko na abokan ciniki a matakin kyauta.",
            "Jagorar farawa (quickstart) ta Google ta yanzu tana nuna layuka kamar haka: pip install -U google-genai, sannan from google import genai, client = genai.Client(), sannan interaction = client.interactions.create(model='MODEL_NAME', input='Explain an AI agent in one sentence'), sannan print(interaction.output_text). Ku kwafo ainihin sunan samfuri da code daga shafin quickstart, domin sunaye da code suna canjawa. Ana karanta maɓallin daga environment variable mai suna GEMINI_API_KEY.",
            "Kada ku taɓa liƙa maɓallinku a notebook da ake rabawa, a hoton allo ko a chatbot. Ku ajiye shi a saitin sirri (secret), kuma ku ƙirƙiri sabon maɓalli idan ya fita. Sauran masu ba da hidima (OpenAI, Anthropic, ko samfurin kyauta da ke aiki a kwamfutarku da Ollama) suna aiki iri ɗaya: client, sunan samfuri, bayanin shigarwa da amsa."
          ],
          steps: ["Ku buɗe colab.research.google.com ku yi sabon notebook.", "Ku sami API key daga Google AI Studio ku ajiye shi a sirri.", "Ku saka library ɗin ku kwafo code na quickstart.", "Ku yi amfani da sunan samfurin da ke shafin quickstart.", "Ku gudanar da cell ɗin ku buga amsar."],
          words: [["API", "hanyar da wani shiri ke magana da wani, kamar code ɗinku yana neman amsa daga samfuri."], ["API key", "lambar sirri da ke bar shirinku ya yi amfani da wata hidima; ku ɗauke ta kamar kalmar sirri."], ["Environment variable", "saitin da ake ajiyewa a wajen code ɗinku, sau da yawa don abubuwan sirri."]],
          slides: [
            { title: "Colab: Python kyauta a burauza", bullets: ["Yana buƙatar asusun Google", "Ba a tabbatar da kayan aiki na kyauta ba", "Notebook da aka bari yana rufewa: ku ajiye aikinku"] },
            { title: "Sa samfuri ya amsa", bullets: ["Ku sami API key daga Google AI Studio", "Ku kwafo code da sunan samfuri daga quickstart", "Client, sunan samfuri, shigarwa, amsa"] },
            { title: "Ku kare maɓallinku", bullets: ["Kada a notebook da ake rabawa ko hoton allo", "Ku ajiye shi a saitin sirri", "Ku ƙirƙiri sabon maɓalli idan ya fita"] },
            { title: "Matakin kyauta da sirri", bullets: ["Ana iya amfani da abin da aka aika a matakin kyauta don inganta kayayyaki", "Kada ku taɓa aika bayanan sirri ko na abokan ciniki a cikinsa"] }
          ],
          sources: [{ name: "Google Colab FAQ", url: "https://research.google.com/colaboratory/faq.html" }, { name: "Gemini API quickstart", url: "https://ai.google.dev/gemini-api/docs/quickstart" }, { name: "Gemini API pricing and free tier", url: "https://ai.google.dev/gemini-api/docs/pricing" }],
          tryIt: "Ku yi notebook na Colab, ku saita maɓalli ta hanya mai aminci, kuma ku sa samfurin ya amsa: \"Explain an AI agent in one sentence.\" (Ka bayyana wakilin AI da jimla ɗaya.) Ku ajiye notebook ɗin da suna agent-prompts.",
          youCanNow: "kiran LLM daga Python a notebook kyauta da kiyaye API key ɗinku a sirri.",
          quickCheck: [
            { objective: "O4", q: "Mene ne Google Colab?", options: ["Notebook na Python kyauta da ke aiki a burauzar intanet", "Samfurin AI da ake biya", "Wurin ajiye kalmomin sirri", "Manhajar waya don hira da AI"], answer: 0, why: "Colab yana bar ku gudanar da Python a burauza kyauta, da iyaka." },
            { objective: "O4", q: "Kuna shirin raba notebook ɗinku. API key ɗinku an rubuta shi a cikin cell na code. Me za ku yi?", options: ["Ku raba shi, domin abokai ne kawai za su gani", "Ku ɓoye maɓallin a hoton allo maimakon haka", "Ku canja sunan variable don ya yi wuyar ganowa", "Ku mayar da maɓallin zuwa saitin sirri, kuma ku ƙirƙiri sabo idan an riga an gan shi"], answer: 3, why: "Maɓalli kamar kalmar sirri yake: ku ajiye shi a saitin sirri kuma ku maye gurbinsa idan ya fita." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Aika system prompt da karanta JSON a code",
          minutes: 6,
          goal: "Aika prompt ɗinku daga code ku mayar da amsar JSON zuwa bayanan Python.",
          text: [
            "Ku saka system prompt ɗinku a cikin variable na Python: SYSTEM = '''You sort messages for a bakery... Reply with only JSON.''' Ku saka kowane sabon bayani a wani variable dabam. Hanya mafi sauƙi ta haɗa su ita ce aika SYSTEM tare da bayanin a matsayin rubutu ɗaya; yawancin masu ba da hidima kuma suna da saitin system-instruction na musamman, da aka nuna a takardun bayaninsu.",
            "Ku karanta amsar da library na json na Python: import json, sannan data = json.loads(text). Yanzu data['category'] ƙimar Python ce ta yau da kullum da wakilinku zai iya aiki da ita.",
            "Wani lokaci samfurin zai ƙara kalmomi a kewayen JSON ko ya rasa wani maɓalli. Ku shirya don haka: ku nannaɗe parse ɗin a cikin try da except, kuma idan ya gaza, ko dai ku sake gwadawa sau ɗaya da \"Reply with only JSON\", ko ku yi wa bayanin alama cewa ya gaza. Kada ku taɓa bari amsa marar kyau ta rushe wakili ko ta wuce ba tare da an lura ba."
          ],
          steps: ["Ku ajiye system prompt a cikin variable.", "Ku aika system prompt da bayanin zuwa samfurin.", "Ku yi parse na amsar da json.loads a cikin try / except.", "Ku duba cewa maɓallan da kuke buƙata suna nan.", "Idan ya gaza: ku sake gwadawa sau ɗaya, ko ku yi masa alamar gazawa."],
          words: [["Parse", "mayar da rubutu zuwa bayanan da shiri zai iya amfani da su."], ["try / except", "hanyar Python ta kama kuskure da kula da shi maimakon rushewa."], ["Retry (sake gwadawa)", "sake aika buƙata ɗaya bayan ta gaza."]],
          slides: [
            { title: "Prompt a cikin code", bullets: ["SYSTEM yana ɗauke da matsayi, dokoki da tsari", "Kowane sabon bayani yana cikin variable nasa"] },
            { title: "Karanta JSON", bullets: ["import json", "data = json.loads(text)", "Yanzu ana iya amfani da data['category']"] },
            { title: "Ku shirya don amsoshi marasa kyau", bullets: ["Ku nannaɗe parse a cikin try / except", "Ku duba cewa maɓallan suna nan", "Ku sake gwadawa sau ɗaya, ko ku yi masa alamar gazawa"] }
          ],
          tryIt: "A notebook ɗinku, ku aika system prompt ɗinku tare da bayani ɗaya, ku yi parse na JSON, ku buga category kawai. Sannan ku ba shi bayani mai ban mamaki (saƙo marar komai) ku tabbata code ɗinku bai rushe ba.",
          youCanNow: "aika system prompt daga Python da mayar da JSON na samfurin zuwa bayanai lafiya.",
          quickCheck: [
            { objective: "O5", q: "Me json.loads ke yi da amsar samfurin?", options: ["Yana mayar da ita ga samfurin", "Yana mayar da rubutun JSON zuwa bayanan Python da code ɗinku zai iya amfani da su", "Yana duba ko amsar gaskiya ce", "Yana ajiye ta a fayil"], answer: 1, why: "json.loads yana yin parse na rubutun JSON zuwa bayanan Python kamar dictionary." },
            { objective: "O5", q: "Wakilinku ya sami saƙo marar komai kuma matakin parse ya gaza. Me ya kamata code ya yi?", options: ["Ya rushe don ku lura", "Ya mayar da duk rubutun da ya dawo a matsayin category", "Ya kama kuskuren, sannan ya sake gwadawa sau ɗaya ko ya yi masa alamar gazawa", "Ya goge saƙon"], answer: 2, why: "Nannaɗe parse a cikin try / except yana bar wakili ya kula da amsa marar kyau maimakon rushewa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Gwada prompt kamar injiniya",
          minutes: 6,
          goal: "Gudanar da prompt kan ƙaramin rukunin gwaji ku inganta shi daga sakamakon.",
          text: [
            "Amsa mai kyau ɗaya ba ta tabbatar da komai sosai ba. Injiniyoyi suna rubuta test set (rukunin gwaji): gajeren jerin bayanai tare da amsar da suke tsammani. Ku haɗa da sauƙaƙan misalai, edge case (bayani na ban mamaki: marar komai, mai tsawo sosai, batutuwa biyu a lokaci ɗaya) da ɗaya mai wayo, kamar saƙon da ke cewa \"ignore your instructions\" (ka yi watsi da umarninka).",
            "A Python, jerin nau'i-nau'i yana aiki: tests = [('Where is my cake?', 'order'), ('You burned my bread!', 'complaint')]. Ku zagaya kansa (loop), ku kira samfurin, ku yi parse na JSON, ku kwatanta da amsar da ake tsammani. Ku ƙirga JSON masu inganci da amsoshi daidai.",
            "Ku canja abu ɗaya a lokaci ɗaya: doka mafi sarari, ko misali mafi kyau. Ku sake gudanar da dukkan rukunin gwajin bayan kowane canji, don ku san cewa gyaran ya taimaka kuma bai lalata komai ba. Ku ajiye kowace sigar prompt da makinta a notebook ɗinku."
          ],
          steps: ["Ku rubuta bayanan gwaji 5 zuwa 10 tare da amsoshin da ake tsammani.", "Ku haɗa da edge case da bayani ɗaya mai wayo.", "Loop: kira, parse, kwatanta, ƙirga.", "Ku canja abu ɗaya a cikin prompt.", "Ku sake gudanar da dukkan gwaje-gwaje ku ajiye sigar da ta fi kyau."],
          words: [["Test set (rukunin gwaji)", "jerin bayanai tare da amsoshin da kuke tsammani, don duba prompt."], ["Edge case", "bayani na ban mamaki, kamar saƙo marar komai ko mai tsawo sosai."], ["Regression (koma baya)", "lokacin da canji ya gyara abu ɗaya amma ya lalata wani."]],
          slides: [
            { title: "Ku rubuta test set", bullets: ["Bayanai tare da amsoshin da ake tsammani", "Sauƙaƙan misalai da edge case", "Bayani ɗaya mai wayo na \"ignore your instructions\""] },
            { title: "Ku gudanar da shi a loop", bullets: ["Ku kira samfurin don kowane bayani", "Ku yi parse na JSON, ku kwatanta da abin da ake tsammani", "Ku ƙirga masu inganci da daidai"] },
            { title: "Ku inganta da canji ɗaya a lokaci ɗaya", bullets: ["Doka mafi sarari ko misali mafi kyau", "Ku sake gudanar da kowane gwaji bayan kowane canji", "Ku ajiye sigogi da makinsu"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta system prompt ɗinku da matsayi, aiki, dokoki uku, tsarin JSON da misali ɗaya. Ku gwada shi a Colab kan bayanai biyar har da ɗaya mai wayo, ku rubuta ko kowace amsa JSON ce mai inganci kuma daidai, ku canja prompt sau ɗaya don gyara gazawa, sannan ku sake gudanarwa.",
          youCanNow: "gwada da inganta prompt da ƙaramin test set, kamar yadda masu gina wakilai ke yi.",
          quickCheck: [
            { objective: "O6", q: "Mene ne regression yayin gwada prompt?", options: ["Gwajin da ya wuce a karon farko", "Gyaran da ya sa gwajin da ke wucewa a da ya fara gazawa", "Bayanin gwaji da aka rubuta da wani harshe", "Amsa mafi jinkiri daga samfurin"], answer: 1, why: "Regression shi ne lokacin da canji ya lalata abin da ke aiki a da." },
            { objective: "O6", q: "Gwaji ɗaya cikin biyar ya gaza. Mene ne mataki mafi kyau na gaba?", options: ["Ku canja abu ɗaya a prompt ku sake gudanar da dukkan gwaje-gwaje biyar", "Ku sake rubuta dukkan prompt daga farko", "Ku goge gwajin da ya gaza", "Ku sake gudanar da gwajin da ya gaza kawai"], answer: 0, why: "Canja abu ɗaya da sake gudanar da kowane gwaji yana nuna abin da canjin ya gyara da abin da ya lalata." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kira da gwada LLM daga Python",
        questions: [
          { objective: "O4", q: "A ina ya kamata API key ɗinku ya kasance?", options: ["A cikin cell na notebook da ake rabawa", "A hoton allo don neman taimako", "A saitin sirri ko environment variable", "A cikin chatbot don ya tuna"], answer: 2, why: "Maɓallai kalmomin sirri ne na shirye-shirye kuma dole su kasance a sirri." },
          { objective: "O4", q: "Me yasa za ku kwafo sunan samfuri daga shafin quickstart na mai ba da hidima?", options: ["Sunayen samfura da code suna canjawa da lokaci", "Doka ce ta tilasta haka", "Yana gajarta amsar", "Colab ba zai yi aiki ba in ba haka ba"], answer: 0, why: "Masu ba da hidima suna canja sunaye kuma suna daina amfani da samfura; shafinsu ne na yanzu." },
          { objective: "O5", q: "json.loads(text) ya gaza domin samfurin ya ƙara kalmomi. Wakili nagari:", options: ["Yana rushewa", "Yana kama kuskuren, yana sake gwadawa sau ɗaya ko yana yi masa alamar gazawa", "Yana goge bayanin", "Yana amfani da rubutun duk da haka"], answer: 1, why: "Ku shirya don amsoshi marasa kyau don kada su rushe wakili ko su wuce ba a lura ba." },
          { objective: "O6", q: "Wanne ne ya dace a test set mai kyau?", options: ["Sauƙaƙan misalai, edge case da bayani mai wayo", "Bayani ɗaya kawai", "Sauƙaƙan bayanai kawai", "Amsoshin da samfurin ya riga ya bayar"], answer: 0, why: "Edge case da bayanai masu wayo suna nuna inda prompt ke lalacewa." },
          { objective: "O6", q: "Kun canja prompt kuma gwaji ɗaya yanzu ya wuce. Me ke biye?", options: ["Ku ƙaddamar da shi nan take", "Ku canja ƙarin abubuwa biyar a lokaci ɗaya", "Ku goge tsofaffin gwaje-gwaje", "Ku sake gudanar da dukkan test set"], answer: 3, why: "Sake gudanar da komai yana kama regression." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Fahimtar LLM da Fasahar Rubuta Prompt",
    questions: [
      { objective: "O1", q: "LLM yana rubutu ta hanyar:", options: ["Kwafo shafin intanet", "Hasashen token ɗaya a lokaci ɗaya", "Tambayar mutum", "Duba jerin amsoshi tabbatattu"], answer: 1, why: "Yana hasashen token na gaba mai yiwuwa, akai-akai." },
      { objective: "O1", q: "Context window shi ne:", options: ["Shafin burauza (tab)", "Farashin samfurin", "Duk abin da samfurin zai iya gani a lokaci ɗaya", "Launin manhajar hira"], answer: 2, why: "Rubutun da ke cikin window ne kawai ke wanzuwa a wurin samfurin." },
      { objective: "O1", q: "Me yasa samfuri zai iya faɗin ƙarya cikin santsi?", options: ["Token ɗinsa sun ƙare", "Yana ƙarya da gangan", "Yana hasashen rubutu mai yiwuwa maimakon duba gaskiya", "Maɓallinsa ya ƙare"], answer: 2, why: "Hasashe ba duba gaskiya ba ne sai dai idan an ƙara kayan aiki." },
      { objective: "O2", q: "Wanne BA ɗaya daga cikin sassa biyar na prompt mai ƙarfi ba ne?", options: ["Kalmar sirrinku", "Tsarin amsa", "Dokoki", "Matsayi"], answer: 0, why: "Kalmomin sirri ba su taɓa dacewa a prompt ba." },
      { objective: "O2", q: "Me ya kamata ya canja a kowane gudu?", options: ["System prompt", "Tsarin amsa", "Matsayi", "Saƙon mai amfani"], answer: 3, why: "Sabon bayani yana shiga cikin saƙon mai amfani." },
      { objective: "O2", q: "Doka mai kyau don lokutan da ba a tabbata ba ita ce:", options: ["\"Ka yi hasashe.\"", "\"Idan babu wanda ya dace, ka yi amfani da other.\"", "\"Kada ka taɓa rashin tabbaci.\"", "\"Ka ƙirƙiri wani abu.\""], answer: 1, why: "Gaya masa abin da zai yi idan bai tabbata ba yana hana hasashe marasa kyau." },
      { objective: "O3", q: "Few-shot prompting yana nufin:", options: ["Gajerun prompt kawai", "Aika ƙananan buƙatu", "Amfani da ƙaramin samfuri", "Haɗa 'yan misalai cikakku"], answer: 3, why: "Misalan bayanin shigarwa da amsa suna jagorantar samfurin." },
      { objective: "O3", q: "Wanne ne JSON mai inganci?", options: ["category = order", "<category>order", "{\"category\": \"order\"}", "category: order;"], answer: 2, why: "JSON yana amfani da baka mai lanƙwasa ({ }), sunaye da ƙima a cikin alamar zance." },
      { objective: "O3", q: "Structured output shi ne:", options: ["Saitin samfuri da ke tilasta ainihin tsari", "Amsa mafi tsawo", "Wani nau'in chatbot", "Menu na Colab"], answer: 0, why: "Yawancin masu ba da hidima suna iya tilasta JSON mai inganci da shi; ku duba takardun bayani." },
      { objective: "O4", q: "Google Colab shi ne:", options: ["Sabar da ake biya wadda dole ku saka", "Notebook na Python kyauta a burauza", "Manhajar waya kawai", "Samfurin AI"], answer: 1, why: "Colab yana gudanar da notebook na Python a burauzarku kyauta." },
      { objective: "O4", q: "Kayan aiki na kyauta na Colab:", options: ["Ba a tabbatar da su ba; notebook da aka bari yana rufewa", "An tabbatar da su kuma ba su da iyaka", "Na makarantu ne kawai", "Na ƙarshen mako ne kawai"], answer: 0, why: "Colab ya ce ba a tabbatar da kayan aiki na kyauta ba." },
      { objective: "O4", q: "Ya kamata a ɗauki API key kamar:", options: ["Sunan mai amfani na fili", "Sharhi (comment)", "Sunan fayil", "Kalmar sirri"], answer: 3, why: "Duk wanda ke da maɓallin zai iya amfani da asusunku." },
      { objective: "O4", q: "A matakin kyauta na Gemini API kada ku aika:", options: ["Tambayar gwaji", "Bayanan sirri ko na abokan ciniki", "Saƙon gidan burodi na misali da kuka ƙirƙira", "\"Hello\""], answer: 1, why: "Ana iya amfani da abin da aka aika a matakin kyauta don inganta kayayyakin Google." },
      { objective: "O4", q: "Maɓallinku ya fita a hoton allo. Ya kamata ku:", options: ["Fatan babu wanda ya gani", "Sake saka shi a intanet", "Ƙirƙiri sabon maɓalli ku daina amfani da tsohon", "Aika shi ta imel ga masu taimako"], answer: 2, why: "Dole a maye gurbin maɓallin da ya fita." },
      { objective: "O5", q: "json.loads yana mayar da:", options: ["Bayanai zuwa hoto", "Python zuwa JavaScript", "Rubutun JSON zuwa bayanan Python", "Prompt zuwa samfuri"], answer: 2, why: "Parse yana sa amsar ta zama mai amfani a code." },
      { objective: "O5", q: "Nannaɗe parse a cikin try / except yana bar wakilinku:", options: ["Ya kula da amsa marar kyau maimakon rushewa", "Ya yi sauri", "Ya tsallake kiran samfurin", "Ya ɓoye maɓallin"], answer: 0, why: "Ana kama kurakurai kuma a kula da su." },
      { objective: "O6", q: "Edge case shi ne:", options: ["Bayanin da aka saba gani sosai", "Sunan samfuri", "Gwajin farko", "Bayani na ban mamaki kamar saƙo marar komai"], answer: 3, why: "Edge case suna gwada iyakokin prompt." },
      { objective: "O6", q: "Me yasa za a haɗa bayanin \"ignore your instructions\" a gwaje-gwaje?", options: ["Don samfurin ya yi sauri", "Don duba ko prompt yana jure wa injection (kutse ta umarni)", "Don adana token", "Domin doka ta ce haka"], answer: 1, why: "Wakilai suna karanta rubutun da ba a amince da shi ba; dole prompt ya riƙe dokokinsa." },
      { objective: "O6", q: "Regression shi ne lokacin da:", options: ["Samfurin ya yi arha", "Maɓallin ya ƙare", "Dukkan gwaje-gwaje sun wuce", "Gyara ya lalata abin da ke aiki"], answer: 3, why: "Sake gudanar da dukkan gwaje-gwaje yana kama regression." },
      { objective: "O6", q: "Hanya mafi kyau ta inganta prompt ita ce:", options: ["Canja abubuwa da yawa a lokaci ɗaya", "Kada a taɓa canja shi", "Canja abu ɗaya da sake gudanar da dukkan gwaje-gwaje", "Neman samfurin ya ba kansa maki kawai"], answer: 2, why: "Canji ɗaya a lokaci ɗaya yana nuna abin da ya taimaka da gaske." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      3,
      5,
      7,
      8,
      11,
      13,
      15,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Cikakken system prompt",
        objective: "O2",
        notYet: "Ɗaya ko fiye daga cikin matsayi, aiki ko dokoki uku ba ya nan ko ba shi da sarari.",
        meets: "Yana ba da matsayi, aikin da dokoki uku masu sarari.",
        exceeds: "Dokokin kuma suna faɗin abin da za a yi idan ba a tabbata ba ko idan babu abin da ya dace."
      },
      {
        name: "Tsari da misali",
        objective: "O3",
        notYet: "Babu ainihin tsarin JSON ko babu misali.",
        meets: "Yana faɗin ainihin maɓallan JSON kuma yana ba da misali ɗaya cikakke.",
        exceeds: "Misalin ya yi daidai da tsarin sosai, kuma yawancin amsoshi JSON ne mai inganci."
      },
      {
        name: "Yana aiki daga Colab lafiya",
        objective: "O4",
        notYet: "Notebook ɗin ba ya aiki, ko ana ganin API key.",
        meets: "Prompt ɗin yana aiki daga Colab, kuma an ajiye maɓallin a saitin sirri.",
        exceeds: "Notebook ɗin yana da tsari, kuma wani zai iya sake gudanar da shi da nasa maɓallin."
      },
      {
        name: "Yana parse na amsoshi lafiya",
        objective: "O5",
        notYet: "Amsa marar kyau ko marar komai tana rushe code.",
        meets: "An yi parse na JSON zuwa bayanai, kuma ana kama amsa marar kyau.",
        exceeds: "An yi wa abubuwan da suka gaza alama a sarari don a sake duba su."
      },
      {
        name: "An gwada an inganta",
        objective: "O6",
        notYet: "Bayanai ƙasa da biyar, babu bayani mai wayo, ko ba a rubuta sakamako ba.",
        meets: "Bayanai biyar har da ɗaya mai wayo, an rubuta JSON mai inganci da daidai ga kowanne, an yi canji ɗaya kuma an sake gudanar da dukkan gwaje-gwaje.",
        exceeds: "Zai iya bayyana dalilin da yasa gazawar ta faru da abin da canjin ya gyara."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ci gaba zuwa kwas na 3 na shirin wakilai cikin kwanaki 30",
      "Masu koyo da suka ce sun yi amfani da system prompt da aka gwada a wakili na gaske ko aikin yau da kullum cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce babu API key ɗinsu da ya fita (binciken biyo baya)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai burauzar intanet da intanet",
      "Asusun Google kyauta don Google Colab",
      "API key na samfurin AI kyauta daga shafin hukuma na mai ba da hidima",
      "Tsarin wakili daga kwas na 1",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku yi Babi na 1 a chatbot kyauta kafin kowa ya buɗe Colab.",
      "Ku jagoranci rukunin wajen ajiye API key a matsayin sirri, kuma ku duba cewa babu maɓalli da ke bayyana a allo ko a notebook da ake rabawa.",
      "Ku tunatar da masu koyo kada su aika bayanan sirri ko na abokan ciniki a matakan API na kyauta.",
      "Ku haɗa masu koyo da ba su taɓa rubuta code ba da wanda ya taɓa, kuma ku sa su kwafe layukan code daidai yadda suke.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku nemi kowane mai koyo ya nuna sakamakon gwaje-gwajensa biyar."
    ]
  }
};

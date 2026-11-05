"use strict";

// Koach Learn course, Hausa (ha) translation of youth/youth-simple-chatbots.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "youth-simple-chatbots-ha",
  lang: "ha",
  translationOf: "youth-simple-chatbots",
  category: "Youth",
  name: "Gina Chatbot Masu Sauƙi na AI",
  skills: "Tsara abin da chatbot zai yi, Gina chatbot na kalmomin maɓalli da Python, Rubuta umarnin bot ga mataimakin AI, Gwadawa da tambayoyi na gaske, Sa bot ya zama mai aminci da gaskiya",
  outcome: "gina chatbot mai sauƙi na tambaya da amsa don ƙungiyar makaranta: bot na kalmomin maɓalli da Python wanda ke amsa aƙalla tambayoyi biyar da aka saba yi, da jerin umarni da ke mayar da mataimakin AI kyauta ya zama mai taimakon ƙungiyar, dukansu an gwada su da tambayoyi na gaske, kuma suna da aminci da gaskiya.",
  about: [
    "Wannan kwas na matasa ne da ke son sanin yadda chatbot ke aiki ta hanyar gina ɗaya. Ba ku buƙatar sanin rubuta code; za ku kwafi ƙananan tsare-tsare ku canja su.",
    "Za ku tsara chatbot don wani abu na gaske, kamar ƙungiyar robot ɗinku, ƙungiyar kiɗa ko ƙungiyar wasanni. Da farko za ku gina bot mai sauƙi na kalmomin maɓalli da Python a Google Colab, littafin rubutu (notebook) kyauta da ke aiki a burauzar intanet. Sannan za ku rubuta umarni da ke sa mataimakin AI kyauta kamar ChatGPT, Microsoft Copilot ko Google Gemini ya yi aiki a matsayin mai taimakon ƙungiya, ku kwatanta su biyun. A ƙarshe za ku gwada dukansu ku sa su zama masu aminci da gaskiya.",
    "Google Colab da mataimakan AI suna buƙatar asusu kuma suna da ƙaramin shekaru da ake buƙata. Ku karanta sharuɗɗan kowane kayan aiki, ku bi dokokin AI na makarantarku, kuma ku sa iyaye ko mai kula da ku idan kuna buɗe asusu. Kowane darasi yana ƙarewa da aikin \"Gwada yanzu\", akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku gina chatbot don ƙungiyar makaranta ko ta wasanni. Kashi na 1: bot na kalmomin maɓalli da Python a Google Colab da ke gaishe da mai amfani, yana amsa aƙalla tambayoyi biyar da aka saba yi (kamar lokacin taro, wurin taro da yadda ake shiga), yana cewa \"I don't know, please ask the club advisor\" (ban sani ba, ku tambayi mai ba ƙungiyar shawara) ga duk wani abu dabam, kuma yana tsayawa idan mai amfani ya rubuta bye. Kashi na 2: katin umarni da ke sa mataimakin AI kyauta ya yi aiki a matsayin mai taimakon ƙungiyar. Ku gwada dukansu da tambayoyi 10 na gaske, ku rubuta abin da kowanne ya yi daidai da wanda ya yi kuskure, kuma ku yi gyara ɗaya ga kowanne.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa da ke son fahimtar yadda chatbot ke aiki ta hanyar gina ɗaya don wata ƙungiya ta gaske kamar ƙungiyar makaranta, ta kiɗa ko ta wasanni, ko suna da ilimin rubuta code ko ba su da shi.",
    startingPoint: "Sun yi amfani da chatbot a shafukan intanet, wasanni ko mataimakan AI. Yawancinsu ba su taɓa rubuta code ba, ko tsara aikin bot, ko gwada bot su gyara abin da bai yi aiki ba.",
    gap: "Chatbot suna ko'ina, amma yawancin matasa amfani kawai suke yi da su. Gina bot mai sauƙi na kalmomin maɓalli da mai taimako na AI yana nuna yadda dukansu ke aiki, inda kowanne ke kasawa, da dalilin da yasa dole bot ya kasance mai gaskiya kuma ya kiyaye sirri. Waɗannan ƙwarewa ne na gaske don rubuta code, ayyukan fasaha da hidima ga ƙungiyoyinsu.",
    constraints: [
      "Iyakar shekaru: Google Colab da mataimakan AI suna buƙatar asusu kuma suna da ƙaramin shekaru; iyaye ko mai kula suna shiga cikin buɗe asusu",
      "Dokokin AI da fasaha na makaranta; mai ba ƙungiyar shawara ne ke amincewa da raba bot ɗin",
      "Masu farawa: ƙananan tsare-tsaren code da za a kwafa a canja; kusan minti biyar a kowane darasi",
      "Na'urori: kwamfuta mai burauzar intanet; babu abin da za a saka",
      "Sirri: bot ba za su taɓa neman ko ajiye kalmomin sirri, lambobin waya, adireshi ko lambobin katin shaida ba"
    ],
    prerequisites: "Babu. Kwas ɗin \"Gabatarwa ga Rubuta Code da Taimakon AI\" yana taimakawa amma ba dole ba ne."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku misalan chatbot", action: "bayyana yadda chatbot na kalmomin maɓalli da chatbot na AI ke aiki, da ƙarfi ɗaya da kasawa ɗaya na kowanne", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O2", condition: "Don wata ƙungiya ta gaske", action: "rubuta tsarin bot mai faɗin wanda zai taimaka, amsoshi biyar ko fiye da aka tabbatar, amsar idan bai sani ba, da abin da ba zai taɓa yi ba", standard: "kowace amsa an tabbatar da ita tare da mai ba ƙungiyar shawara" },
    { id: "O3", condition: "Ta amfani da Google Colab", action: "gina chatbot na kalmomin maɓalli da Python mai madauki (loop), amsoshi bisa kalmomin maɓalli, amsar idan bai sani ba da sallama", standard: "ta yadda zai yi aiki kuma ya amsa aƙalla tambayoyi biyar" },
    { id: "O4", condition: "Ta amfani da mataimakin AI kyauta", action: "rubuta katin umarni mai matsayi, bayanan da aka tabbatar, salon magana da iyakoki da ke sa mataimakin ya yi aiki a matsayin mai taimakon ƙungiya", standard: "ta yadda zai tura tambayoyin da bai sani ba ga mai ba da shawara kuma ba zai nemi bayanan sirri ba" },
    { id: "O5", condition: "Idan aka ba ku tambayoyin gwaji 10 na gaske", action: "gwada bot biyun, yi wa kowace amsa alama daidai, kuskure ko ƙirƙirarriya, da gyara abin da ya kasa", standard: "kuna yin aƙalla gyara ɗaya ga kowane bot kuma kuna sake gwadawa" },
    { id: "O6", condition: "Kafin ku raba bot ɗinku", action: "ƙara gaisuwa da ke cewa bot ne, iyakokin sirri da aminci, da samun amincewar mai ba ku shawara", standard: "tambayoyi masu muhimmanci ko waɗanda ba a sani ba suna zuwa ga babba amintacce" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yadda chatbot ke aiki, da bot ɗinku na farko",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne chatbot, da hanyoyi biyu na gina shi",
          minutes: 4,
          goal: "Bayyana bambancin chatbot na kalmomin maɓalli da chatbot na AI.",
          text: [
            "Chatbot shiri ne na kwamfuta da kuke magana da shi ta rubutu ko murya. Kuna ganin su a shafukan intanet (\"Yaya zan taimake ku?\"), a wasanni da a manhajoji.",
            "Akwai manyan nau'i biyu. Chatbot na kalmomin maɓalli yana bin dokokin da mutum ya rubuta: idan saƙon yana da kalmar \"time\" (lokaci), ya amsa da lokacin taro. Yana da sauƙi kuma ana iya hasashen abin da zai yi, amma abin da kuka koya masa kaɗai ya sani. Chatbot na AI yana amfani da large language model (babban tsarin harshe), wanda ya koya daga rubuce-rubuce masu yawan gaske. Yana iya amsa kusan komai da kalmomi na yau da kullum, amma kuma yana iya yin kuskure ko ya ƙirƙiri abubuwa.",
            "A wannan kwas za ku gina dukansu don amfani na gaske, kamar amsa tambayoyin sababbin membobi na ƙungiyarku, don ku ga ƙarfi da kasawar kowanne."
          ],
          words: [["Chatbot", "shirin kwamfuta da kuke magana da shi ta rubutu ko murya."], ["Kalmar maɓalli (keyword)", "kalmar da bot ke nema don yanke yadda zai amsa."], ["Large language model (babban tsarin harshe)", "irin AI da ke bayan mataimaka kamar ChatGPT; ya koyi tsare-tsare daga rubuce-rubuce masu yawan gaske."]],
          slides: [
            { title: "Chatbot shi ne...", bullets: ["Shirin kwamfuta da kuke magana da shi", "A shafukan intanet, wasanni da manhajoji"] },
            { title: "Chatbot na kalmomin maɓalli", bullets: ["Yana bin dokokin da mutum ya rubuta", "Mai sauƙi, ana iya hasashen abin da zai yi", "Abin da kuka koya masa kaɗai ya sani"] },
            { title: "Chatbot na AI", bullets: ["Yana amfani da large language model", "Yana amsa da kalmomi na yau da kullum", "Yana iya yin kuskure ko ya ƙirƙiri abubuwa"] }
          ],
          tryIt: "Ku zaɓi ƙungiya da kuke ciki. Ku rubuta tambayoyi biyar da sababbin membobi suke yawan yi, kamar yaushe kuke taro, a ina, da yadda ake shiga.",
          youCanNow: "bayyana bambancin chatbot na kalmomin maɓalli da na AI, da zaɓar amfani na gaske ga bot.",
          quickCheck: [
            { objective: "O1", q: "Mene ne kasawar chatbot na kalmomin maɓalli?", options: ["Ba a iya hasashen abin da zai yi", "Abin da kuka koya masa kaɗai ya sani", "Yana yawan ƙirƙirar bayanai", "Yana buƙatar large language model"], answer: 1, why: "Bot na kalmomin maɓalli yana bin dokokin da mutum ya rubuta, don haka abin da aka koya masa kaɗai ya sani." },
            { objective: "O1", q: "Kuna buƙatar bot da koyaushe zai ba da lokacin taro ɗaya da aka tabbatar. Wane nau'i ne ya fi aminci?", options: ["Chatbot na AI ba tare da umarni ba", "Babu nau'in da zai iya yin haka", "Bot na wani shafin intanet kawai", "Chatbot na kalmomin maɓalli mai amsar da aka tabbatar"], answer: 3, why: "Bot na kalmomin maɓalli mai sauƙi ne kuma ana iya hasashen sa; bot na AI yana iya yin kuskure ko ya ƙirƙiri abubuwa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Tsara aikin bot ɗinku",
          minutes: 5,
          goal: "Rubuta tsari mai sauƙi: wanda bot zai taimaka, abin da zai amsa da abin da ba zai taɓa yi ba.",
          text: [
            "Bot masu kyau suna da ƙaramin aiki a sarari. Ku rubuta tsarin bot mai sassa huɗu: wanda zai taimaka (misali, sababbin membobin ƙungiyar dara), tambayoyin da zai amsa, amsoshin (da aka tabbatar tare da mai ba ku shawara), da abin da zai faɗa idan bai sani ba.",
            "Ku kuma yanke abin da bot ba zai taɓa yi ba: ba zai taɓa neman kalmomin sirri, lambobin waya ko adireshin gida ba, ba zai yi kamar shi mutum ne na gaske ba, kuma ba zai ba da shawara game da lafiya, kuɗi ko doka ba. Idan akwai shakka, yana tura mutane ga babba na gaske, kamar mai ba ƙungiyar shawara.",
            "Mataimakin AI zai iya taimaka muku tunanin ƙarin tambayoyi: \"Sababbin membobin ƙungiyar dara ta makarantar sakandare za su iya tambayar me? Ka jera 10.\" Sannan ku tabbatar da amsoshin da kanku."
          ],
          steps: ["Ku rubuta wanda bot zai taimaka.", "Ku jera tambayoyi 5 zuwa 10 da zai amsa.", "Ku rubuta gajeriyar amsa da aka tabbatar ga kowace.", "Ku rubuta amsar \"ban sani ba\" da ke tura mutane ga babba na gaske.", "Ku jera abin da bot ba zai taɓa yi ba."],
          words: [["Tsarin bot", "gajeren bayanin abin da bot ke yi da wanda ba ya yi."], ["Amsar idan bai sani ba (fallback)", "abin da bot ke faɗa idan bai san amsa ba."]],
          slides: [
            { title: "Ƙaramin aiki a sarari", bullets: ["Wanda zai taimaka", "Tambayoyi da amsoshin da aka tabbatar", "Abin da zai faɗa idan bai sani ba"] },
            { title: "Ba zai taɓa", bullets: ["Neman kalmomin sirri, lambobin waya ko adireshi", "Yin kamar shi mutum ne na gaske", "Ba da shawarar lafiya, kuɗi ko doka"] },
            { title: "Ku yi tunani tare da AI", bullets: ["Ku nemi ƙarin tambayoyin da za a iya yi", "Ku tabbatar da kowace amsa da kanku"] }
          ],
          tryIt: "Ku rubuta tsarin bot ɗinku: wanda zai taimaka, tambayoyinku biyar da amsoshin da aka tabbatar, amsar idan bai sani ba, da abubuwa uku da ba zai taɓa yi ba. Ku tambayi mataimakin AI ƙarin tambayoyi biyar da wataƙila kun manta.",
          youCanNow: "tsara aikin chatbot, amsoshinsa, amsar idan bai sani ba da dokokin amincinsa.",
          quickCheck: [
            { objective: "O2", q: "Mene ne ke sa aikin bot ya yi kyau?", options: ["Ƙaramin aiki a sarari, kamar amsa tambayoyin sababbin membobi", "Amsa kowace tambaya a duniya", "Ba da shawarar lafiya", "Yin kamar shi ne shugaban ƙungiyar"], answer: 0, why: "Bot masu kyau suna da ƙaramin aiki a sarari." },
            { objective: "O2", q: "AI ya ba da shawarar amsa game da kuɗin ƙungiya don tsarin bot ɗinku. Me za ku yi?", options: ["Ku yi amfani da ita kamar yadda take", "Ku cire kuɗin ƙungiya daga tsarin har abada", "Ku tabbatar da ita tare da mai ba ƙungiyar shawara kafin ku saka ta", "Ku ƙirƙiri wata lamba dabam"], answer: 2, why: "Dole a tabbatar da amsoshin bot tare da mai ba da shawara, ba a ɗauke su daga AI ba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Gina chatbot na kalmomin maɓalli da Python",
          minutes: 6,
          goal: "Gina chatbot na kalmomin maɓalli a Google Colab ku sa shi aiki.",
          text: [
            "Ku buɗe Google Colab a colab.research.google.com, ku shiga da asusun da aka ba ku izinin amfani da shi, sannan ku fara sabon notebook. Bot ɗin yana amfani da madauki (loop) da ke ci gaba da neman saƙonni, da jimlolin if da ke neman kalmomin maɓalli.",
            "Ga tsarin, layi bayan layi: while True: yana fara madauki da ke maimaitawa. A cikinsa, msg = input(\"You: \").lower() yana karanta saƙon da ƙananan haruffa. if \"bye\" in msg: print(\"Bot: See you!\") sannan break yana dakatar da madaukin. elif \"time\" in msg: print(\"Bot: We meet Tuesdays at 3:30.\") yana amsa tambaya ɗaya. else: print(\"Bot: I don't know. Please ask the club advisor.\") ita ce amsar idan bai sani ba. Ku tura layukan da ke cikin madaukin da cikin kowane if ciki (indent).",
            "Ku ƙara elif ɗaya ga kowace tambaya a tsarinku. Idan kun sami kuskure (error), ku karanta layin ƙarshe da lambar layin, ku duba ko an manta da colon (:), alamar zance ko tura layi ciki, kuma idan kun kasa, ku liƙa code ɗin da kuskuren a mataimakin AI ku nemi ya bayyana muku."
          ],
          steps: ["Ku buɗe sabon notebook a Colab.", "Ku rubuta while True: ku tura layuka na gaba ciki.", "Ku karanta saƙon: msg = input(\"You: \").lower()", "Ku ƙara if \"bye\" in msg: tare da print na sallama da break.", "Ku ƙara elif ɗaya ga kowace tambaya, da else don amsar idan bai sani ba. Ku kunna shi ku yi hira da bot ɗinku."],
          words: [["Madauki (loop)", "code da ke maimaitawa; while True yana maimaitawa har sai break."], ["elif", "gajartawar else if: duba wani sharaɗi."], ["break", "yana dakatar da madauki."], [".lower()", "yana mayar da rubutu ƙananan haruffa don \"TIME\" da \"time\" su yi daidai."]],
          slides: [
            { title: "Tsarin code", bullets: ["while True: yana ci gaba da hirar", "msg = input(\"You: \").lower()", "if \"bye\" in msg: yi sallama, sannan break"] },
            { title: "Amsoshi", bullets: ["elif \"time\" in msg: buga lokacin taro", "elif ɗaya ga kowace tambaya", "else: amsar idan bai sani ba"] },
            { title: "Idan ya ƙi aiki", bullets: ["Ku karanta layin ƙarshe na kuskuren", "Ku duba colon, alamomin zance da tura layi ciki", "Ku nemi AI ya bayyana kuskuren"] }
          ],
          tryIt: "Ku gina bot ɗinku na kalmomin maɓalli a Colab mai sallama, aƙalla amsoshi uku daga tsarinku, da amsar idan bai sani ba. Ku yi hira da shi, ku gwada tambaya ɗaya da bai kamata ya sani ba.",
          youCanNow: "gina chatbot na kalmomin maɓalli da Python ku sa shi aiki, mai amsoshi, amsar idan bai sani ba da hanyar tsayawa.",
          quickCheck: [
            { objective: "O3", q: "A bot na Python, me layin else ke yi?", options: ["Yana ƙare shirin", "Yana ba da amsar idan bai sani ba lokacin da babu kalmar maɓalli da ta yi daidai", "Yana karanta saƙon mai amfani", "Yana fara madaukin"], answer: 1, why: "else yana kama duk abin da sauran binciken ba su yi daidai da shi ba." },
            { objective: "O3", q: "Bot ɗinku yana amsa \"time\" amma ba \"TIME\" ba. Me za ku ƙara?", options: [".lower() lokacin karanta saƙon", "Wani break", "while True: na biyu", "Babu komai; ba za a iya gyara shi ba"], answer: 0, why: ".lower() yana mayar da saƙon ƙananan haruffa don duka rubutun biyu su yi daidai." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yadda chatbot ke aiki, da bot ɗinku na farko",
        questions: [
          { objective: "O1", q: "Ta yaya chatbot na kalmomin maɓalli ke yanke abin da zai faɗa?", options: ["Yana karanta tunaninku", "Yana bin dokokin da ke neman kalmomi a saƙonku", "Yana bincika dukan intanet", "Yana tambayar malami"], answer: 1, why: "Bot na kalmomin maɓalli yana bin dokokin da mutum ya rubuta." },
          { objective: "O1", q: "Wanne ne raunin chatbot na AI?", options: ["Yana iya yin kuskure ko ya ƙirƙiri abubuwa", "Jimla ɗaya kawai yake iya faɗa", "Ba ya fahimtar kalmomi na yau da kullum", "Ba ya buƙatar wutar lantarki"], answer: 0, why: "Large language model yana iya ba da amsoshin ƙarya da suke kama da gaskiya." },
          { objective: "O2", q: "Mene ne amsar idan bai sani ba (fallback)?", options: ["Gaisuwar farko", "Kalmar sirri", "Abin da bot ke faɗa idan bai sani ba", "Sunan bot ɗin"], answer: 2, why: "Amsar idan bai sani ba tana kula da tambayoyin da bot ba zai iya amsawa ba." },
          { objective: "O2", q: "Wanne ne bot na ƙungiyarku ba zai TAƁA nema ba?", options: ["Abin da mai amfani ke son sani", "Ko suna son shiga ƙungiyar", "Buɗewar dara da suka fi so", "Adireshin gidansu"], answer: 3, why: "Bot ba zai taɓa tattara bayanan sirri ba." },
          { objective: "O3", q: "A bot na Python, me break ke yi?", options: ["Yana dakatar da madaukin don hirar ta ƙare", "Yana karya kwamfutar", "Yana ƙara sabuwar amsa", "Yana goge notebook ɗin"], answer: 0, why: "break yana ƙare madaukin while." }
        ]
      }
    },
    {
      name: "Babi na 2: Bot masu taimako na AI, gwaji da aminci",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rubuta umarni ga bot mai taimako na AI",
          minutes: 5,
          goal: "Rubuta katin umarni da ke sa mataimakin AI kyauta ya yi aiki a matsayin mai taimakon ƙungiyarku.",
          text: [
            "Kuna iya mayar da mataimakin AI na gama-gari ya zama mai taimako don aiki ɗaya ta hanyar fara hira da umarni a sarari. Wasu kayan aiki suna barin ku ajiye umarni a matsayin bot na musamman (custom bot); menu da dokokin shekaru sun bambanta, don haka ku duba naku. Liƙa umarni a farkon sabuwar hira yana aiki a yawancin mataimaka.",
            "Katin umarni mai kyau yana da: matsayin bot (\"You are the helper for the Lincoln High chess club\", wato kai ne mai taimakon ƙungiyar dara ta Lincoln High), bayanan da zai iya amfani da su (amsoshinku da aka tabbatar), salon maganarsa (mai fara'a, gajerun amsoshi), da iyakokinsa (\"Idan ba ka sani ba, ka ce: ku tambayi Ms. Rivera, mai ba ƙungiyar shawara. Kada ka taɓa neman bayanan sirri.\").",
            "Ku faɗa masa ya yi amfani da bayanan da kuka ba shi kaɗai. Wannan yana rage yiwuwar ya ƙirƙiri lokutan taro ko dokoki."
          ],
          steps: ["Ku rubuta matsayi: wane ne bot ɗin da wanda yake taimakawa.", "Ku liƙa bayananku da amsoshinku da aka tabbatar.", "Ku saita salon magana: mai fara'a, gajerun amsoshi.", "Ku ƙara iyakoki: yi amfani da waɗannan bayanai kaɗai; tura tambayoyin da ba a sani ba ga mai ba da shawara; kada ka taɓa neman bayanan sirri.", "Ku fara sabuwar hira, ku liƙa katin, sannan ku yi tambayar gwaji."],
          words: [["Katin umarni", "dokokin da kuke rubuta wa mataimakin AI a farkon hira."], ["Matsayi (role)", "wane ne bot ɗin zai yi aiki a matsayinsa."], ["Salon magana (tone)", "yadda bot ke magana: mai fara'a, na ladabi, gajere."]],
          slides: [
            { title: "Mayar da mataimaki ya zama mai taimako", bullets: ["Ku liƙa umarni a farkon hira", "Wasu kayan aiki suna ajiye bot na musamman; ku duba naku"] },
            { title: "Katin umarni", bullets: ["Matsayi", "Bayanan da aka tabbatar", "Salon magana", "Iyakoki"] },
            { title: "Yi amfani da waɗannan bayanai kaɗai", bullets: ["Yana rage amsoshin ƙirƙira", "Tambayoyin da ba a sani ba suna zuwa ga mai ba da shawara", "Ba ya taɓa neman bayanan sirri"] }
          ],
          tryIt: "Ku rubuta katin umarni don bot mai taimakon ƙungiyarku. Ku fara sabuwar hira a mataimakin AI kyauta, ku liƙa shi, ku yi tambayoyi uku daga tsarinku da ɗaya da bai kamata ya sani ba.",
          youCanNow: "rubuta umarni a sarari da ke mayar da mataimakin AI kyauta ya zama bot mai taimako mai aiki ɗaya da iyakoki.",
          quickCheck: [
            { objective: "O4", q: "Me layin \"matsayi\" a katin umarni ke yi?", options: ["Yana jera tambayoyin gwaji", "Yana saita nau'in rubutu (font)", "Yana faɗa wa AI wane ne shi da wanda yake taimakawa", "Yana ajiye kalmomin sirri"], answer: 2, why: "Layin matsayi, kamar \"Kai ne mai taimakon ƙungiyar dara\", yana saita aikin bot ɗin." },
            { objective: "O4", q: "Mai taimakon AI ɗinku yana amsa tambayoyi game da aikin gida ma. Me za ku ƙara a katin?", options: ["Ƙarin bayanai game da aikin gida", "Doka cewa ya yi amfani da bayanan ƙungiyar kaɗai ya tura sauran tambayoyi ga mai ba da shawara", "Gaisuwa mafi tsawo", "Babu komai; ƙarin amsoshi ya fi kyau"], answer: 1, why: "Iyakoki suna sa mai taimakon ya tsaya kan aikinsa kuma suna rage yiwuwar ya ƙirƙiri abubuwa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gwadawa da inganta bot ɗinku",
          minutes: 5,
          goal: "Gwada bot biyun da tambayoyi na gaske ku gyara abin da ya kasa.",
          text: [
            "Gwaji yana nufin amfani da bot ɗinku kamar yadda mutane na gaske za su yi. Ku rubuta tambayoyin gwaji 10: biyar ɗin daga tsarinku, wasu kaɗan da aka yi da kalmomi dabam (\"when do y'all meet?\", wato yaushe kuke taro?), ɗaya mai kuskuren rubutu, da ɗaya da bai kamata ya amsa ba.",
            "Ku yi wa bot biyun kowace tambaya, ku yi wa kowace amsa alama daidai, kuskure ko ƙirƙirarriya. Bot na kalmomin maɓalli yana iya kasa gane tambayoyin da aka yi da kalmomi dabam; ku gyara hakan ta hanyar ƙara kalmomin maɓalli. Mai taimakon AI yana iya yin kamar ya yi daidai amma ya ƙirƙiri bayanai; ku gyara hakan ta hanyar matse umarninsa.",
            "Ku nemi aboki ko memba na ƙungiya shi ma ya gwada bot ɗinku. Mutane koyaushe suna tambayar abubuwan da ba ku yi tsammani ba."
          ],
          steps: ["Ku rubuta tambayoyin gwaji 10, har da kalmomi dabam da kuskuren rubutu.", "Ku yi wa bot biyun kowace tambaya.", "Ku yi wa kowace amsa alama daidai, kuskure ko ƙirƙirarriya.", "Bot na kalmomin maɓalli: ƙara kalmomin maɓalli. Mai taimakon AI: matse umarni.", "Ku sa wani dabam ya gwada shi."],
          words: [["Gwaji (testing)", "amfani da shiri da gangan don nemo abin da ba ya aiki."], ["Tambayar gwaji (test case)", "tambaya ɗaya ko shigarwa da kuke amfani da ita don gwada shiri."]],
          slides: [
            { title: "Tambayoyin gwaji 10", bullets: ["Tambayoyin da kuka tsara", "Kalmomi dabam da kuskuren rubutu", "Ɗaya da bai kamata ya amsa ba"] },
            { title: "Ku yi wa kowace amsa alama", bullets: ["Daidai", "Kuskure", "Ƙirƙirarriya"] },
            { title: "Gyara ku sake gwadawa", bullets: ["Bot na kalmomin maɓalli: ƙara kalmomin maɓalli", "Mai taimakon AI: matse umarni", "Ku bar aboki ya gwada shi"] }
          ],
          tryIt: "Ku yi tambayoyin gwaji 10 ɗinku ga bot biyun, ku yi wa kowace amsa alama, ku yi gyara ɗaya ga kowane bot. Ku sake gwadawa don ganin ko gyaran ya yi aiki.",
          youCanNow: "gwada chatbot da tambayoyi na gaske, nemo abin da ya kasa da inganta su.",
          quickCheck: [
            { objective: "O5", q: "Wanne ne ya kamata ya kasance a cikin tambayoyin gwaji masu kyau?", options: ["Tambayoyin da aka kwafa kalma da kalma daga tsarinku kawai", "Tambaya ɗaya kawai", "Tambayoyin da kuka san za su yi aiki", "Tambaya ɗaya da aka yi da kalmomi dabam"], answer: 3, why: "Mutane na gaske suna tambaya da kalmomi dabam kuma suna yin kuskuren rubutu, don haka gwaji ma ya kamata ya yi haka." },
            { objective: "O5", q: "Mai taimakon AI ya ba da ɗakin taro da ya ƙirƙira yana magana kamar ya tabbata. Wace alama za ku yi masa?", options: ["Daidai, domin ya yi magana kamar ya tabbata", "Ƙirƙirarriya, sannan ku matse umarninsa", "Ku tsallake ta", "Daidai, idan ya kusa"], answer: 1, why: "Ku yi wa bayanan da aka ƙirƙira alama ƙirƙirarriya ku gyara umarnin." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Sa bot ɗinku ya zama mai aminci da gaskiya",
          minutes: 5,
          goal: "Ƙara dokokin aminci da gaskiya, sannan ku kammala chatbot na ƙungiyarku.",
          text: [
            "Ya kamata bot ya faɗa cewa shi bot ne. Mutane sun cancanci su san cewa ba mutum na gaske suke magana da shi ba. Ku fara da gaisuwa kamar \"Sannu, ni ne bot na ƙungiyar dara. Ina amsa tambayoyi masu sauƙi. Don wani abu dabam, ku tambayi Ms. Rivera.\"",
            "Ya kamata ya kiyaye sirri: kada ya taɓa nema ko ajiye kalmomin sirri, lambobin waya, adireshi ko lambobin katin shaidar makaranta. Ya kamata ya tsaya kan aikinsa: babu shawarar lafiya, kuɗi, doka ko ta rayuwar mutum, kuma ya tura mutane ga babba amintacce don duk wani abu mai muhimmanci.",
            "Kafin ku raba bot da ƙungiyarku, ku sami amincewar mai ba ku shawara, ku bi dokokin makarantarku game da AI da fasaha, kuma ku sabunta amsoshin idan lokutan taro sun canja."
          ],
          steps: ["Ku ƙara gaisuwa da ke cewa bot ne da abin da yake yi.", "Ku tabbatar ba ya taɓa neman bayanan sirri.", "Ku sa shi ya tura tambayoyi masu muhimmanci ko waɗanda bai sani ba ga babba amintacce.", "Ku sami amincewar mai ba ku shawara kafin ku raba shi.", "Ku sabunta amsoshin idan bayanai sun canja."],
          words: [["Bayyana gaskiya (transparency)", "kasancewa a buɗe da gaskiya, kamar faɗin cewa bot bot ne."], ["Sirri (privacy)", "kiyaye bayanan mutum lafiya."]],
          slides: [
            { title: "Ku faɗi cewa bot ne", bullets: ["Gaisuwa a sarari", "Abin da zai iya da wanda ba zai iya ba", "Wanda za a tambaya don ƙari"] },
            { title: "Ku kiyaye sirri", bullets: ["Babu kalmomin sirri, lambobin waya ko adireshi", "Babu lambobin katin shaidar makaranta"] },
            { title: "Ya tsaya kan aikinsa", bullets: ["Babu shawarar lafiya, kuɗi ko doka", "Tambayoyi masu muhimmanci suna zuwa ga babba amintacce", "Amincewar mai ba da shawara kafin a raba shi"] }
          ],
          tryIt: "Aikin ƙarshe: ku kammala bot ɗinku na kalmomin maɓalli na Python (amsoshi biyar, amsar idan bai sani ba, bye) da katin umarnin mai taimakon AI. Ku ƙara gaisuwa da ke cewa bot ne, ku gwada dukansu da tambayoyi 10, ku rubuta abin da kowanne ya yi daidai da wanda ya yi kuskure, kuma ku yi gyara ɗaya ga kowanne.",
          youCanNow: "gina, gwada da raba chatbot mai sauƙi da ke da amfani, mai aminci kuma mai gaskiya game da kasancewarsa bot.",
          quickCheck: [
            { objective: "O6", q: "Wanne a cikin waɗannan ne bot ɗinku ba zai taɓa nema ba?", options: ["Wace tambaya suke da ita", "Ko suna son lokacin taro", "Ko suna son yin sallama", "Lambar katin shaidarsu ta makaranta"], answer: 3, why: "Bot ba zai taɓa nema ko ajiye kalmomin sirri, lambobin waya, adireshi ko lambobin katin shaida ba." },
            { objective: "O6", q: "Bot ɗinku ya shirya. Me za ku yi kafin ku raba shi da ƙungiyar?", options: ["Ku sami amincewar mai ba da shawara ku bi dokokin makaranta", "Ku saka shi a fili nan take", "Ku cire gaisuwar", "Ku bar shi ya nemi lambobin waya don biyo baya"], answer: 0, why: "Ku sami amincewar mai ba ku shawara ku bi dokokin makaranta kafin ku raba shi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Bot masu taimako na AI, gwaji da aminci",
        questions: [
          { objective: "O4", q: "Me ya kamata ya kasance a katin umarnin mai taimakon AI?", options: ["Kalmar sirrinku", "Matsayi, bayanan da aka tabbatar, salon magana da iyakoki", "Wani labari kawai", "Babu komai; ku fara hira kawai"], answer: 1, why: "Waɗannan sassa huɗu suna sa bot ya mai da hankali kuma suna iyakance shi." },
          { objective: "O4", q: "Me yasa za ku faɗa wa mai taimakon AI ya yi amfani da bayanan da kuka ba shi kaɗai?", options: ["Don ya yi jinkiri", "Don a rage yiwuwar ya ƙirƙiri bayanai", "Don ya yi tsawo", "Doka ce ta tilasta haka"], answer: 1, why: "Iyakoki suna rage amsoshin ƙirƙira." },
          { objective: "O5", q: "Bot ɗinku na kalmomin maɓalli bai gane \"when do y'all meet?\" ba. Ta yaya za ku gyara?", options: ["Ku goge bot ɗin", "Ku cire amsar idan bai sani ba", "Ku ƙara kalmomin maɓalli kamar \"meet\"", "Ku zargi mai amfani"], answer: 2, why: "Ƙarin kalmomin maɓalli suna kama kalmomi dabam." },
          { objective: "O6", q: "Me yasa ya kamata bot ya faɗa cewa shi bot ne?", options: ["Mutane sun cancanci su san ba mutum suke magana da shi ba", "Yana da ban sha'awa", "Yana gajarta code", "Ba a taɓa buƙatar haka ba"], answer: 0, why: "Bayyana gaskiya yana gina amincewa." },
          { objective: "O6", q: "Kafin ku raba bot ɗinku da ƙungiyar, ya kamata ku:", options: ["Ƙara neman lambobin waya", "Tsallake gwaji", "Ɓoye cewa bot ne", "Sami amincewar mai ba da shawara ku bi dokokin makaranta"], answer: 3, why: "Amincewar babba da dokokin makaranta su ne farko." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gina Chatbot Masu Sauƙi na AI",
    questions: [
      { objective: "O1", q: "Chatbot shi ne:", options: ["Shirin kwamfuta da kuke magana da shi ta rubutu ko murya", "Murfin waya", "Wani nau'in hannun robot", "Adireshin shafin intanet"], answer: 0, why: "Chatbot shirye-shirye ne na hira." },
      { objective: "O1", q: "Ƙarfin chatbot na kalmomin maɓalli shi ne:", options: ["Yana iya amsa komai", "Mai sauƙi ne kuma ana iya hasashen abin da zai yi", "Koyaushe yana da sabon tunani", "Yana haɗe da kowane shafin intanet"], answer: 1, why: "Abin da kuka tsara masa kaɗai yake faɗa." },
      { objective: "O1", q: "Large language model shi ne:", options: ["Babban madannin kwamfuta", "Darasi a makaranta", "Irin AI da ke bayan mataimaka kamar ChatGPT", "Kuskure a Python"], answer: 2, why: "Large language model ya koyi tsare-tsare daga rubuce-rubuce masu yawan gaske." },
      { objective: "O2", q: "Wanne ne aiki mafi kyau ga chatbot na farko?", options: ["Ba da shawarar likita", "Kula da asusun banki", "Amsa komai game da duniya", "Amsa tambayoyin sababbin membobi na ƙungiyarku"], answer: 3, why: "Ƙaramin aiki a sarari shi ne mafi kyau." },
      { objective: "O2", q: "Wane ne ya kamata ya tabbatar da amsoshin da ke tsarin bot ɗinku?", options: ["Ku, tare da mai ba ƙungiyar shawara", "Babu kowa", "Baƙo a intanet", "Bot ɗin da kansa"], answer: 0, why: "Dole amsoshi su yi daidai; ku tabbatar tare da mai ba da shawara." },
      { objective: "O2", q: "Me ya kamata bot ɗinku ya yi idan bai sani ba?", options: ["Ya ƙirƙiri amsa", "Ya tura mutane ga babba na gaske kamar mai ba da shawara", "Ya nemi lambar wayarsu", "Ya daina aiki"], answer: 1, why: "Amsar idan bai sani ba mai kyau tana nuna mutum na gaske." },
      { objective: "O3", q: "Me while True: ke yi a Python?", options: ["Yana buga True", "Yana ƙare shirin", "Yana fara madauki da ke maimaitawa har sai break", "Yana yin variable"], answer: 2, why: "while True yana maimaitawa har sai an sami break." },
      { objective: "O3", q: "Me yasa za a yi amfani da .lower() a saƙon mai amfani?", options: ["Don a gajarta shi", "Don a goge shi", "Don a fassara shi", "Don \"TIME\" da \"time\" su yi daidai da kalmar maɓalli ɗaya"], answer: 3, why: "Ƙananan haruffa suna sauƙaƙa daidaitawa." },
      { objective: "O3", q: "Mene ne ma'anar elif?", options: ["Else if: duba wani sharaɗi", "Ƙarshen madauki", "Kuskure", "Fita"], answer: 0, why: "elif yana duba wani sharaɗi bayan if." },
      { objective: "O3", q: "Kun sami kuskure a Python. Mataki na farko mai kyau shi ne:", options: ["Goge notebook ɗin", "Karanta layin ƙarshe da lambar layin", "Sake kunna kwamfutar makaranta", "Haƙura"], answer: 1, why: "Saƙon kuskuren yana nuna inda matsalar take." },
      { objective: "O4", q: "Layin matsayi na katin umarni zai iya cewa:", options: ["\"Ka nemi kalmomin sirri\"", "\"Ka yi kamar kai ne shugaban makaranta\"", "\"You are the helper for the Lincoln High chess club\" (Kai ne mai taimakon ƙungiyar dara ta Lincoln High)", "\"Ka faɗi komai\""], answer: 2, why: "Matsayi yana faɗa wa AI wane ne zai zama da wanda zai taimaka." },
      { objective: "O4", q: "A ina kuke yawan saka umarni ga mai taimakon AI a mataimakin kyauta?", options: ["A saitunan kwamfuta", "A cikin saƙon tes", "A wurin adireshi na burauzarku", "A farkon sabuwar hira"], answer: 3, why: "Liƙa umarni a farkon hira yana aiki a yawancin mataimaka." },
      { objective: "O4", q: "Wace iyaka ce ya kamata a saka a katin umarni?", options: ["\"Kada ka taɓa neman bayanan sirri\"", "\"Ka ƙirƙiri amsa idan ba ka tabbata ba\"", "\"Ka ba da shawarar doka\"", "\"Ka yi kamar kai mutum ne\""], answer: 0, why: "Iyakoki suna sa bot ya kasance mai aminci." },
      { objective: "O5", q: "Gwada bot yana nufin:", options: ["Goge shi", "Amfani da shi da gangan don nemo abin da ba ya aiki", "Raba shi nan take", "Sa shi ya yi tsawo"], answer: 1, why: "Gwaji yana nemo matsaloli kafin masu amfani su gan su." },
      { objective: "O5", q: "Me yasa za a saka tambaya mai kuskuren rubutu a gwajinku?", options: ["Don a karya kwamfutar", "Kuskuren rubutu ya saɓa wa doka", "Mutane na gaske suna yin kuskuren rubutu", "Don bot ya zama marar ladabi"], answer: 2, why: "Ya kamata gwaji ya yi daidai da yadda mutane na gaske ke rubutu." },
      { objective: "O5", q: "Mai taimakon AI ya ƙirƙiri wurin taro. Me za ku gyara?", options: ["Madaukin Python", "Madannin kwamfutarku", "Babu komai", "Ku matse umarninsa don ya yi amfani da bayananku kaɗai"], answer: 3, why: "Umarni mafi matsewa suna rage bayanan ƙirƙira." },
      { objective: "O5", q: "Me yasa aboki zai gwada bot ɗinku?", options: ["Mutane suna tambayar abubuwan da ba ku yi tsammani ba", "Dole abokai su amince da kowane code", "Yana sa bot ya yi sauri", "Ba shi da amfani"], answer: 0, why: "Sababbin masu gwaji suna nemo sababbin matsaloli." },
      { objective: "O6", q: "Gaisuwar bot mai kyau tana cewa:", options: ["\"Ni mutum ne na gaske\"", "\"Sannu, ni ne bot na ƙungiya. Ina amsa tambayoyi masu sauƙi. Don wani abu dabam, ku tambayi mai ba da shawara.\"", "\"Ka faɗa mini adireshinka\"", "Babu komai"], answer: 1, why: "Tana da gaskiya kuma tana bayyana abin da bot ke yi." },
      { objective: "O6", q: "Wani memba na ƙungiya ya tambayi bot ɗinku game da wata babbar matsala ta rayuwarsa. Ya kamata bot ya:", options: ["Ba da shawara duk da haka", "Yi watsi da shi", "Tura shi ga babba amintacce", "Nemi lambar wayarsa"], answer: 2, why: "Tambayoyi masu muhimmanci suna zuwa ga manya na gaske amintattu." },
      { objective: "O6", q: "Ƙungiyar ta canja ranar taronta. Me za ku yi?", options: ["Babu komai", "Ku goge bot ɗin", "Ku faɗa wa membobi cewa bot koyaushe daidai yake", "Ku sabunta amsoshin bot ɗin"], answer: 3, why: "Dole a riƙa sabunta bot." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      4,
      6,
      9,
      10,
      12,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Bot na kalmomin maɓalli yana aiki",
        objective: "O3",
        notYet: "Bot ɗin ba ya aiki, ko yana da amsoshin da ba su kai biyar ba.",
        meets: "Yana aiki a Colab, yana gaishe da mai amfani, yana amsa aƙalla tambayoyi biyar, yana da amsar idan bai sani ba kuma yana tsayawa a bye.",
        exceeds: "Yana kuma gane tambayoyin da aka yi da kalmomi dabam ta ƙarin kalmomin maɓalli."
      },
      {
        name: "Katin mai taimakon AI",
        objective: "O4",
        notYet: "Katin ba shi da matsayi, bayanai ko iyakoki.",
        meets: "Matsayi, bayanan da aka tabbatar, salon magana da iyakoki, kuma yana tura tambayoyin da bai sani ba ga mai ba da shawara.",
        exceeds: "Mai taimakon ya tsaya kan aikinsa a wata tambayar gwaji mai wuya."
      },
      {
        name: "Amsoshin da aka tabbatar",
        objective: "O2",
        notYet: "Ba a tabbatar da amsoshin ba, ko an ɗauke su daga AI.",
        meets: "Kowace amsa a bot biyun an tabbatar da ita tare da mai ba ƙungiyar shawara.",
        exceeds: "Yana da tsarin sabunta amsoshi idan bayanai sun canja."
      },
      {
        name: "Gwaji da gyare-gyare",
        objective: "O5",
        notYet: "Gwaje-gwajen ba su kai 10 ba, ko babu gyara.",
        meets: "Gwaje-gwaje 10 a bot biyun, kowace amsa an yi mata alama daidai, kuskure ko ƙirƙirarriya, da gyara ɗaya ga kowane bot.",
        exceeds: "An sake gwadawa bayan gyaran kuma wani dabam ma ya gwada bot ɗin."
      },
      {
        name: "Mai aminci da gaskiya",
        objective: "O6",
        notYet: "Bot ɗin ba ya faɗin cewa shi bot ne, ko yana neman bayanan sirri.",
        meets: "Gaisuwar tana cewa bot ne, ba ya neman bayanan sirri, kuma tambayoyi masu muhimmanci suna zuwa ga babba amintacce.",
        exceeds: "Mai ba da shawara ya amince a raba shi."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Ƙungiyoyin da ke amfani da bot ɗin mai koyo tare da amincewar mai ba da shawara cikin kwanaki 60",
      "Masu koyo da suka gina wani shiri ko bot da kansu cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka fara wani kwas na Koach Learn na rubuta code ko AI cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai burauzar intanet da intanet",
      "Google Colab da mataimakin AI kyauta, tare da asusun da aka ba mai koyo izinin amfani da su",
      "Tsarin bot a takarda ko a cikin wata takarda ta kwamfuta",
      "Kusan minti 60 gaba ɗaya, da lokacin gwaji"
    ],
    facilitatorNotes: [
      "Ku duba dokokin shekaru na Colab da kayan AI kafin aji; ku tanadi asusun nuni (demo) don masu koyo da ba su kai shekaru ba su iya bin darasin.",
      "Ku rubuta code ɗin bot na kalmomin maɓalli kai tsaye, layi bayan layi, kuma ku bar colon ɗaya da gangan don masu koyo su yi atisayen karanta kurakurai.",
      "Ku sa masu koyo su musanya bot su gwada na juna da tambayoyi masu wuya.",
      "Ku tabbatar babu bot da ke nema ko ajiye bayanan sirri, kuma kowanne yana faɗin cewa shi bot ne.",
      "Ku ba da maki ga bot biyun da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

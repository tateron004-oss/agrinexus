"use strict";

// Koach Learn course, Hausa (ha) translation of youth/youth-coding-with-ai.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// Python code stays exactly as written in the English.

module.exports = {
  id: "youth-coding-with-ai-ha",
  lang: "ha",
  translationOf: "youth-coding-with-ai",
  category: "Youth",
  name: "Gabatarwa ga Rubuta Code da Taimakon AI",
  skills: "Gudanar da Python a notebook kyauta ta intanet, Amfani da variable da input, Yanke shawara da if, Maimaitawa da loop, Neman AI ya bayyana code ya kuma gyara shi",
  outcome: "rubutawa da gudanar da ƙaramin wasan tambayoyi (quiz) na Python a notebook kyauta ta intanet, ta amfani da mataimakin AI don bayyana code da taimakawa wajen gyara kurakurai, da bayyana abin da kowane layi na shirinku yake yi.",
  about: [
    "Wannan kwas ɗin na matasa ne da ba su taɓa rubuta code ba, ko waɗanda suka gwada sau ɗaya suka kasa ci gaba. Ba sai kun ƙware a lissafi ba. Kuna buƙatar sha'awar koyo da kusan minti biyar a kowane darasi.",
    "Za ku rubuta code na Python na gaske a Google Colab, notebook kyauta da ke aiki a burauzar intanet, don haka kuna iya amfani da kwamfutar makaranta ko ta ɗakin karatu. Za ku koyi ginshiƙan code, sannan ku koyi yadda ake amfani da mataimakin AI kamar malami mai haƙuri: don bayyana code, nemo kurakurai da ba da shawarwari, yayin da ku ne kuke fahimta kuma kuke rubuta shirin.",
    "Kafin ku yi rajista a kowane kayan aiki, ku duba dokokin makarantarku game da AI da mafi ƙarancin shekarun kayan aikin, kuma ku haɗa da iyaye ko mai kula da ku. Kowane darasi yana ƙarewa da aikin \"Gwada yanzu\". Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku gina wasan tambayoyi na Python a Google Colab mai aƙalla tambayoyi 5 game da batun da kuke so (wasa, wasanni, ƙungiyar mawaƙa, ko darasin makaranta). Dole ya tambayi sunan mai wasa, ya yi tambayoyin, ya ƙirga maki, kuma ya buga saƙon ƙarshe. Ku yi amfani da mataimakin AI don bayyana ko gyara aƙalla sashe ɗaya, sannan ku rubuta comment a saman kowane sashe da ke faɗin abin da yake yi da kalmominku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa da ba su taɓa rubuta code ba, ko waɗanda suka gwada sau ɗaya suka kasa ci gaba, har da waɗanda ba sa ganin kansu ƙwararru a lissafi.",
    startingPoint: "Suna amfani da waya, manhajoji (apps) da wasanni kowace rana, kuma suna iya amfani da burauzar intanet. Ba su taɓa rubuta ko gudanar da shiri ba, kuma wataƙila sun ga AI yana rubuta code ba tare da sanin yadda yake aiki ba.",
    gap: "Rubuta code yana buɗe ƙofofin ayyukan fasaha kuma yana sa AI ya zama ba abin mamaki ba, amma kwafar code na AI ba ya koyar da komai, kuma yana karya dokokin makaranta a azuzuwa da yawa. Matasa suna buƙatar rubutawa da gudanar da Python na gaske da kansu, suna amfani da AI kamar malami don bayyana code da gyara kurakurai.",
    constraints: [
      "Iyakar shekaru: Colab yana buƙatar asusun Google kuma kayan AI suna da mafi ƙarancin shekaru; ana haɗa iyaye ko mai kula ga waɗanda ba su kai 18 ba",
      "Dokokin AI na makarantu sun bambanta; aikin da ake ba da maki a kai wataƙila ba ya barin amfani da AI",
      "Na'urori: kwamfutar makaranta, ɗakin karatu ko ta gida mai burauzar intanet; babu abin da za a saka",
      "Sirri: kada a liƙa kalmomin sirri (password), adireshi, katin shaida ko lambobin waya a kayan AI",
      "Masu farawa: kalmomi masu sauƙi, ana bayyana kowace kalma ta musamman, kusan minti biyar a kowane darasi"
    ],
    prerequisites: "Babu. Kwas ɗin \"Mene ne AI? (don Matasa)\" kwas ne mai amfani da za a fara da shi."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Da kalmominku", action: "bayyana mene ne code da shiri, da yadda ake amfani da AI kamar malami ba wanda zai yi aikin a madadinku ba, bisa dokokin makarantarku", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O2", condition: "Ta amfani da asusun Google da aka ba ku izinin amfani da shi", action: "buɗe notebook na Google Colab da gudanar da code na Python da ke buga rubutu", standard: "ba tare da taimako ba, kuma sakamakon yana bayyana a ƙarƙashin cell" },
    { id: "O3", condition: "Idan aka ba ku wasan tambaya ɗaya don ku gina", action: "rubuta Python da ke amfani da variable, input, if da else, da loop", standard: "ta yadda zai yi aiki daidai da amsa daidai da kuma amsa ba daidai ba" },
    { id: "O4", condition: "Idan aka ba ku 'yan layukan code", action: "neman mataimakin AI ya bayyana code ɗin layi bayan layi, sannan canja abu ɗaya, hasashen sakamakon da gudanar da shi", standard: "ba tare da liƙa bayanan sirri ba" },
    { id: "O5", condition: "Idan aka ba ku saƙon kuskure (error) na Python", action: "nemo layin da ke da matsala, gyara kuskuren da taimakon AI idan ya zama dole, da gudanar da gyaran da kanku", standard: "har shirin ya yi aiki ba tare da kurakurai ba" },
    { id: "O6", condition: "Farawa daga tsarin da aka rubuta a matsayin comments", action: "gina wasan tambayoyi 5 sashe-sashe da faɗin yadda kuka yi amfani da AI", standard: "da sunan mai wasa, maki, saƙon ƙarshe da comment a saman kowane sashe da kalmominku" }
  ],
  chapters: [
    {
      name: "Babi na 1: Layukanku na farko na code",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne code, da inda AI ya shigo",
          minutes: 4,
          goal: "Bayyana mene ne shiri da yadda mataimakin AI zai iya taimaka muku koyon rubuta code.",
          text: [
            "Code jerin umarni ne da kwamfuta ke bi daidai yadda suke, bisa tsari. Shiri (program) tarin waɗannan umarni ne da ke yin wani aiki, kamar wasa, manhaja ko na'urar lissafi. Python sanannen harshen code ne domin kalmominsa suna kama da Turanci sosai.",
            "Mataimakan AI kamar ChatGPT, Microsoft Copilot da Google Gemini suna iya rubutawa da bayyana code. Wannan yana da amfani, amma idan kun kwafi code da ba ku fahimta ba, ba ku koyi komai ba, kuma ba za ku iya gyara shi idan ya lalace ba. A wannan kwas ɗin, AI malaminku ne, ba wanda zai yi aikin a madadinku ba.",
            "Makarantu suna da dokoki daban-daban game da AI. Wasu azuzuwa suna barin amfani da shi don atisaye amma ba don aikin da ake ba da maki a kai ba. Koyaushe ku duba dokokin malaminku, kuma ku faɗa idan kun yi amfani da AI. Kayan AI da yawa kuma suna da mafi ƙarancin shekaru, don haka ku karanta sharuɗɗan kayan aikin kuma ku tambayi iyaye ko mai kula da ku kafin ku yi rajista."
          ],
          words: [["Code", "umarnin da aka rubuta don kwamfuta ta bi."], ["Shiri (program)", "tarin umarni da ke yin wani aiki."], ["Python", "sanannen harshen code da ke da sauƙin karantawa."]],
          slides: [
            { title: "Code umarni ne", bullets: ["Kwamfuta tana bin su daidai, bisa tsari", "Shiri shi ne code da ke yin wani aiki", "Python yana karantuwa kamar Turanci sosai"] },
            { title: "AI malaminku ne", bullets: ["Yana iya bayyana code layi bayan layi", "Yana iya taimakawa wajen nemo kurakurai", "Kada ku kwafi code da ba ku fahimta ba"] },
            { title: "Kafin ku fara", bullets: ["Ku duba dokokin AI na makarantarku", "Ku duba mafi ƙarancin shekarun kayan aikin", "Ku tambayi iyaye ko mai kula da ku kafin rajista"] }
          ],
          tryIt: "Ku rubuta ƙaramin shiri ɗaya da kuke so ku gina wata rana, kamar wasan tambayoyi game da wasan da kuka fi so, ko na'urar lissafin tukwici (tip) don aikinku na farko. Sannan ku rubuta jimla ɗaya kan yadda AI zai iya taimaka muku koyon sa ba tare da ya yi muku aikin ba.",
          youCanNow: "faɗin mene ne code da shiri, da bayyana yadda ake amfani da AI kamar malami ba gajeriyar hanya ba.",
          quickCheck: [
            { objective: "O1", q: "Me yasa Python sanannen harshen code ne na farko?", options: ["Yana aiki a waya kaɗai", "Ba ya buƙatar kwamfuta", "Kalmominsa suna kama da Turanci sosai", "Yana rubuta kansa"], answer: 2, why: "Kalmomin Python suna kama da Turanci sosai, wanda ke sa ya fi sauƙin karantawa." },
            { objective: "O1", q: "Wani aboki ya ce: \"Ka bar AI kawai ya rubuta dukan shirinka ka miƙa.\" Me za ku ce?", options: ["Zan yi amfani da AI kamar malami kuma in rubuta code ɗin da kaina, bisa dokokin malamina", "Kyakkyawan tunani; ba wanda zai sani", "Sai dai idan yana da wuya", "Zan kwafa amma in canja sunaye"], answer: 0, why: "Kwafar code da ba ku fahimta ba ba ya koyar da komai, kuma yana iya karya dokokin makaranta." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Gudanar da code ɗinku na farko na Python a Google Colab",
          minutes: 5,
          goal: "Buɗe notebook na Colab kyauta da gudanar da layi ɗaya na Python.",
          text: [
            "Google Colab notebook ne kyauta da ke gudanar da Python a burauzar intanet ɗinku. Ba sai kun saka komai ba. Kuna buƙatar asusun Google. Ku duba dokokin shekarunsa, kuma idan ba ku kai 18 ba ku fara tambayar iyaye ko mai kula da ku; asusun Google na makaranta zai iya aiki idan makarantarku ta yarda da Colab.",
            "Notebook yana ƙunshe da cells. Code cell akwati ne inda kuke rubuta Python. Kuna danna maɓallin kunnawa (play) kusa da cell ɗin (ko Shift da Enter) don gudanar da shi, kuma sakamakon yana bayyana a ƙarƙashinsa.",
            "Umarnin farko da yawancin masu rubuta code suke koya shi ne print. Yana nuna kalmomi a kan allo. Rubutu yana shiga cikin alamomin zance (quotes), kamar haka: print(\"Hello, I am learning Python\")."
          ],
          steps: ["Ku buɗe burauzar intanet ku je colab.research.google.com.", "Ku shiga da asusun Google da aka ba ku izinin amfani da shi.", "Ku ƙirƙiri sabon notebook.", "Ku danna cikin code cell na farko ku rubuta: print(\"Hello, I am learning Python\")", "Ku danna maɓallin play ko Shift da Enter. Ku karanta sakamakon a ƙarƙashin cell ɗin."],
          words: [["Notebook", "shafi inda kuke rubutawa da gudanar da code a ƙananan akwatuna da ake kira cells."], ["Cell", "akwati ɗaya a notebook inda kuke rubuta code."], ["Output (sakamako)", "abin da shirin yake nunawa bayan ya gudana."]],
          slides: [
            { title: "Google Colab", bullets: ["Python kyauta a burauzar intanet ɗinku", "Babu abin da za a saka", "Yana buƙatar asusun Google da aka ba ku izini"] },
            { title: "Notebooks da cells", bullets: ["Ku rubuta code a cell", "Ku danna play ko Shift + Enter", "Sakamakon yana bayyana a ƙasa"] },
            { title: "Umarninku na farko", bullets: ["print(\"Hello, I am learning Python\")", "Rubutu yana shiga cikin quotes", "print yana nuna shi a kan allo"] }
          ],
          tryIt: "A sabon notebook na Colab, ku buga layuka uku: sunanku na farko, waƙa ko wasan da kuka fi so, da buri ɗaya na wannan kwas ɗin. Ku gudanar da cell ɗin ku duba cewa layukan uku sun bayyana.",
          youCanNow: "buɗe notebook na Colab, rubuta Python a cell, gudanar da shi, da karanta sakamakon.",
          quickCheck: [
            { objective: "O2", q: "A Python, me print yake yi?", options: ["Yana aika code ɗinku zuwa firinta", "Yana nuna kalmomi ko ƙima a kan allo", "Yana goge cell", "Yana ajiye notebook"], answer: 1, why: "print yana nuna rubutu ko ƙima a ƙarƙashin cell idan ya gudana." },
            { objective: "O2", q: "Kuna da shekara 14 kuma kuna son amfani da Colab a gida. Me za ku fara yi?", options: ["Ku buɗe asusu da shekarun ƙarya", "Ku yi amfani da asusun baƙo", "Ku ƙyale Colab", "Ku duba dokokin shekaru ku tambayi iyaye ko mai kula, ko ku yi amfani da asusun makaranta da aka yarda da shi"], answer: 3, why: "Colab yana buƙatar asusun Google; ku duba dokokinsa kuma ku haɗa da iyaye ko mai kula idan ba ku kai 18 ba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Variables, input, if da loops",
          minutes: 6,
          goal: "Amfani da variable, neman input, yanke shawara da if, da maimaitawa da loop.",
          text: [
            "Variable akwati ne mai suna da ke ajiye ƙima. score = 0 yana yin akwati mai suna score ya saka 0 a ciki. Daga baya, score = score + 1 yana ƙara maki ɗaya.",
            "input yana neman mai wasa ya rubuta wani abu: name = input(\"What is your name? \"). Umarnin if yana yanke shawara: if answer == \"Paris\": print(\"Correct!\") else: print(\"Not quite\"). Alamomin daidai biyu (==) suna nufin \"iri ɗaya ne da\". Ana tura layukan da ke ƙarƙashin if da else ciki da sarari (spaces); ana kiran wannan indentation, kuma Python yana buƙatar sa.",
            "Loop yana maimaita code. for i in range(3): print(\"Go team!\") yana buga kirarin sau uku. Waɗannan abubuwa huɗu, variables, input, if da loops, sun isa don gina wasan tambayoyi."
          ],
          steps: ["Ku yi variable: score = 0", "Ku nemi input: name = input(\"What is your name? \")", "Ku yanke shawara da if da else, kuna tura layukan da ke ƙarƙashin kowanne ciki.", "Ku maimaita wani abu da: for i in range(3):"],
          words: [["Variable", "akwati mai suna da ke ajiye ƙima."], ["Input", "abin da mai amfani ke rubutawa yayin da shirin yake gudana."], ["If statement (umarnin if)", "code da ke gudana ne kawai idan wani abu gaskiya ne."], ["Loop", "code da ke maimaituwa."], ["Indentation", "sarari a farkon layi da ke nuna waɗanne layuka ne suke tare."]],
          slides: [
            { title: "Variables suna ajiye ƙima", bullets: ["score = 0", "score = score + 1 yana ƙara maki"] },
            { title: "Input da if", bullets: ["name = input(\"What is your name? \")", "if answer == \"Paris\": sai a buga Correct", "== yana nufin \"iri ɗaya ne da\""] },
            { title: "Loops suna maimaitawa", bullets: ["for i in range(3): yana maimaitawa sau 3", "Ku tura layukan da ke cikin loop ciki"] },
            { title: "Ginshiƙai huɗu", bullets: ["Variables, input, if, loops", "Sun isa don gina wasan tambayoyi"] }
          ],
          tryIt: "Ku rubuta wasan tambaya ɗaya: ku nemi sunan mai wasa, ku yi tambaya ɗaya game da darasi ko wasan da kuka fi so, kuma ku yi amfani da if da else don buga \"Correct\" ko \"Not quite\". Ku gudanar da shi sau biyu, sau ɗaya da amsa daidai, sau ɗaya kuma da amsa ba daidai ba.",
          youCanNow: "amfani da variable, input, umarnin if da loop a ƙaramin shirin Python.",
          quickCheck: [
            { objective: "O3", q: "Mene ne indentation a Python?", options: ["Wani nau'in kuskure", "Sararin da ke tura layuka ciki a ƙarƙashin if, else ko loop", "Layin comment", "Maɓallin play"], answer: 1, why: "Indentation yana nuna waɗanne layuka ne ke ƙarƙashin if, else ko loop, kuma Python yana buƙatar sa." },
            { objective: "O3", q: "Kuna son wasan ya ƙara maki idan amsa ta yi daidai. Wane layi za ku rubuta a ƙarƙashin if?", options: ["score = score + 1", "print(score)", "score == 1", "input(score)"], answer: 0, why: "score = score + 1 yana ƙara maki ɗaya ga ƙimar da ke cikin score." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Layukanku na farko na code",
        questions: [
          { objective: "O1", q: "Mene ne shiri (program)?", options: ["Tarin umarni da ke yin wani aiki", "Wani nau'in madannai (keyboard)", "Adireshin shafin intanet", "Na'urar wasan bidiyo"], answer: 0, why: "Shiri shi ne code, tarin umarni, da ke yin wani aiki." },
          { objective: "O1", q: "Ajinku yana barin AI don atisaye amma ba don aikin gida da ake ba da maki ba. Me za ku yi?", options: ["Ku yi amfani da AI don aikin gidan duk da haka", "Ku yi amfani da AI don atisaye ku yi aikin da ake ba da maki da kanku", "Kada ku sake rubuta code", "Ku nemi aboki ya yi amfani da AI a madadinku"], answer: 1, why: "Bin dokokin malaminku wani ɓangare ne na amfani da AI da gaskiya." },
          { objective: "O2", q: "A Colab, ta yaya kuke gudanar da code cell?", options: ["Ku rufe burauzar", "Ku buga shafin a takarda", "Ku danna maɓallin play ko Shift da Enter", "Ku sake kunna kwamfutar"], answer: 2, why: "Maɓallin play ko Shift da Enter yana gudanar da cell ɗin." },
          { objective: "O3", q: "Me score = score + 1 yake yi?", options: ["Yana goge maki", "Yana buga kalmar score", "Yana neman mai wasa ya rubuta maki", "Yana ƙara ɗaya ga ƙimar da ke cikin score"], answer: 3, why: "Yana ɗaukar makin da ake da shi ya ƙara ɗaya." },
          { objective: "O3", q: "Me for i in range(3): yake yi?", options: ["Yana maimaita code ɗin da aka tura ciki sau 3", "Yana yin tambayoyi 3", "Yana yin variables 3", "Yana dakatar da shirin"], answer: 0, why: "Loop na for da range(3) yana maimaita code ɗin da ke cikinsa sau uku." }
        ]
      }
    },
    {
      name: "Babi na 2: Rubuta code tare da mataimakin AI",
      lessons: [
        {
          objectives: ["O4"],
          title: "Neman AI ya bayyana code",
          minutes: 5,
          goal: "Neman mataimakin AI ya bayyana wani code layi bayan layi, da tabbatar da cewa kun fahimta.",
          text: [
            "Ku liƙa 'yan layukan code a mataimakin AI ku tambaya: \"Ka bayyana wannan code na Python layi bayan layi ga mai farawa. Ka yi amfani da kalmomi masu sauƙi.\" Kyakkyawan bayani yana faɗa muku abin da kowane layi yake yi da dalilin sa.",
            "Sannan ku gwada fahimtarku. Ku canja abu ɗaya a code ɗin, ku yi hasashen abin da zai faru, sannan ku gudanar da shi. Idan hasashenku ya yi daidai, kun fahimta. Idan ba haka ba, ku tambayi AI: \"Na canja wannan kuma na yi tsammanin wancan. Me yasa ya yi wani abu daban?\"",
            "Kada ku liƙa bayanan sirri a kayan AI: babu kalmomin sirri, adireshin gida, lambobin katin shaidar makaranta ko lambobin waya. Code na aikin aji ba ya buƙatar ko ɗaya daga cikinsu."
          ],
          steps: ["Ku kwafi layukan code 3 zuwa 10.", "Ku tambaya: \"Ka bayyana wannan code na Python layi bayan layi ga mai farawa.\"", "Ku canja abu ɗaya ku yi hasashen abin da zai faru.", "Ku gudanar da shi ku kwatanta. Ku yi tambayar biyo baya idan hasashenku bai yi daidai ba."],
          words: [["Bayyana layi bayan layi", "bin code layi ɗaya a lokaci ɗaya da faɗin abin da kowanne yake yi."]],
          slides: [
            { title: "Ku nemi bayani", bullets: ["Ku liƙa 'yan layuka", "\"Ka bayyana wannan layi bayan layi ga mai farawa\"", "Ku nemi kalmomi masu sauƙi"] },
            { title: "Ku gwada fahimtarku", bullets: ["Ku canja abu ɗaya", "Ku yi hasashen abin da zai faru", "Ku gudanar da shi ku kwatanta"] },
            { title: "Ku hana bayanan sirri shiga", bullets: ["Babu kalmomin sirri ko lambobin katin makaranta", "Babu adireshin gida ko lambar waya"] }
          ],
          tryIt: "Ku liƙa wasanku na tambaya ɗaya daga Darasi na 3 a mataimakin AI ku nemi ya bayyana kowane layi. Sannan ku canja amsar da ta yi daidai zuwa wata sabuwa, ku yi hasashen abin da zai faru, sannan ku gudanar da shi.",
          youCanNow: "samun bayani mai sarari layi bayan layi na code daga AI da gwada cewa kun fahimce shi da gaske.",
          quickCheck: [
            { objective: "O4", q: "Me ke sa bayanin code daga AI ya zama mai kyau?", options: ["Ya yi tsawo iyakar yiwuwa", "Yana ba da amsa kawai", "Yana faɗin abin da kowane layi yake yi da dalilin sa", "Yana sake rubuta komai"], answer: 2, why: "Kyakkyawan bayani yana faɗin abin da kowane layi yake yi da dalilin sa, da kalmomi masu sauƙi." },
            { objective: "O4", q: "Kun canja layi, kun yi hasashen sakamako, amma shirin ya yi wani abu daban. Me za ku yi na gaba?", options: ["Ku goge shirin", "Ku tambayi AI: \"Na canja wannan kuma na yi tsammanin wancan. Me yasa ya yi wani abu daban?\"", "Ku sake hasashe ba tare da gudanar da shi ba", "Ku liƙa kalmar sirrinku don AI ya duba"], answer: 1, why: "Tambayar biyo baya da ke bayyana abin da kuka yi tsammani tana taimaka muku fahimtar code ɗin." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Nemo da gyara kurakurai da AI",
          minutes: 5,
          goal: "Karanta saƙon kuskure da amfani da AI don taimakawa wajen gyara bug.",
          text: [
            "Bug kuskure ne a code. Idan Python ba zai iya gudanar da wani layi ba, yana nuna saƙon kuskure (error message). Layin ƙarshe na saƙon yawanci yana faɗin sunan matsalar, kamar SyntaxError (an rubuta wani abu ba daidai ba) ko IndentationError (sararin da ke farkon layi ba daidai ba ne). Yana kuma nuna lambar layin.",
            "Ku fara gwadawa da kanku: ku duba wannan layin ko akwai alamar zance (quote), baka (bracket), alamar colon (:) ko sarari da ya ɓace. Idan kun kasa, ku liƙa code ɗin da cikakken saƙon kuskuren a mataimakin AI ku tambaya: \"Mene ne ma'anar wannan kuskure, kuma ta yaya zan gyara shi? Ka bayyana dalili.\"",
            "AI ma yana iya yin kuskure game da code. Ku gudanar da sigar da aka gyara da kanku. Idan kuskuren ya canja ko ya ci gaba, ku faɗa wa AI ainihin abin da ya faru."
          ],
          steps: ["Ku karanta layin ƙarshe na saƙon kuskuren da lambar layin.", "Ku duba wannan layin ko akwai quotes, brackets, colons ko sarari da suka ɓace.", "Idan kun kasa, ku liƙa code ɗin da cikakken saƙon kuskuren a mataimakin AI.", "Ku tambayi ma'anarsa da dalilin da yasa gyaran yake aiki.", "Ku gudanar da gyaran da kanku ku duba cewa yana aiki."],
          words: [["Bug", "kuskure a code."], ["Saƙon kuskure (error message)", "rubutun Python da ke faɗin abin da ya lalace da kuma a wane layi."], ["Debugging", "nemo da gyara bugs."]],
          slides: [
            { title: "Bugs suna faruwa ga kowa", bullets: ["Saƙonnin kuskure alamu ne, ba gazawa ba", "Ku karanta layin ƙarshe da lambar layin"] },
            { title: "Ku fara gwadawa da kanku", bullets: ["Quote ko bracket ya ɓace?", "Colon ya ɓace bayan if ko for?", "Sarari ba daidai ba a farkon layi?"] },
            { title: "Sannan ku tambayi AI", bullets: ["Ku liƙa code ɗin da cikakken kuskuren", "Ku tambayi ma'anarsa da dalilin da yasa gyaran yake aiki", "Ku gudanar da gyaran da kanku"] }
          ],
          tryIt: "A wasanku, ku goge colon ɗin da ke bayan layin if da gangan ku gudanar da shi. Ku karanta kuskuren. Ku nemi mataimakin AI ya bayyana shi, ku gyara shi, sannan ku sake gudanar da shirin.",
          youCanNow: "karanta saƙon kuskure na Python, nemo matsalar, da amfani da AI don fahimta da gyara bug.",
          quickCheck: [
            { objective: "O5", q: "Me SyntaxError yawanci yake nufi?", options: ["Kwamfutar ta lalace", "Intanet ya ɗauke", "Amsarku ba daidai ba ce", "An rubuta wani abu ba daidai ba, kamar quote ko colon da ya ɓace"], answer: 3, why: "SyntaxError yana nufin Python ba zai iya karanta wani abu da kuka rubuta ba." },
            { objective: "O5", q: "Python ya nuna kuskure a layi na 4. Me za ku fara dubawa?", options: ["Layi na 4, ko akwai quote, bracket, colon ko sarari da ya ɓace", "Layi na 1 kaɗai", "Saurin intanet ɗinku", "Babu komai; ku sake kunna kwamfutar"], answer: 0, why: "Saƙon yana nuna lambar layi; ku fara duba wannan layin da kanku." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Gina wasanku na tambayoyi",
          minutes: 6,
          goal: "Tsara da gina wasan tambayoyi 5 tare da AI a matsayin mataimaki.",
          text: [
            "Manyan shirye-shirye ana gina su ne daga ƙananan sassa. Ku fara tsarawa: abin da shirin zai fara faɗa, abin da zai tambaya, yadda zai ƙirga maki, da abin da zai faɗa a ƙarshe. Ku rubuta tsarin a matsayin gajerun comments. Comment yana farawa da # kuma Python yana ƙyale shi.",
            "Ku gina sashe ɗaya a lokaci ɗaya, kuma ku gudanar da shi bayan kowane sashe. Idan kuna son ra'ayi, ku tambayi AI: \"Ta yaya zan sa wasana ya faɗa wa mai wasa makinsa cikin 5?\" Sannan ku rubuta shi da kanku ku nemi AI ya duba shi.",
            "Idan ya yi aiki, ku bar aboki ko wani a iyali ya yi wasan. Ku lura da inda suka ruɗe, ku inganta shi. Idan za ku miƙa shi a makaranta, ku faɗi yadda kuka yi amfani da AI."
          ],
          steps: ["Ku rubuta tsari a matsayin # comments: maraba, tambayoyi, maki, ƙarshe.", "Ku rubuta code na maraba ku nemi sunan mai wasa. Ku gudanar da shi.", "Ku ƙara tambaya ɗaya da if da else da ke canja maki. Ku gudanar da shi.", "Ku ƙara ƙarin tambayoyi huɗu. Ku gudanar da shi.", "Ku buga makin ƙarshe da saƙo. Ku bar wani ya yi wasan."],
          words: [["Comment", "rubutu a cikin code da ke farawa da # kuma Python yana ƙyale shi."], ["Tsari (plan)", "gajeren jerin abin da shirinku zai yi, bisa tsari."]],
          slides: [
            { title: "Ku tsara da comments", bullets: ["# welcome", "# ask 5 questions", "# keep score", "# final message"] },
            { title: "Ku gina a ƙananan sassa", bullets: ["Ku ƙara sashe ɗaya", "Ku gudanar da shi", "Ku gyara shi, sannan ku ƙara na gaba"] },
            { title: "AI a matsayin mataimaki", bullets: ["Ku nemi ra'ayoyi, sannan ku rubuta da kanku", "Ku nemi AI ya duba code ɗinku", "Ku faɗi yadda kuka yi amfani da AI a aikin makaranta"] },
            { title: "Ku gwada da mai wasa na gaske", bullets: ["Ku bar aboki ya yi wasan", "Ku lura da inda ya ruɗe", "Ku inganta shi"] }
          ],
          tryIt: "Aikin ƙarshe: ku gina wasan tambayoyi na Python a Colab mai aƙalla tambayoyi 5 game da batun da kuke so. Ku nemi sunan mai wasa, ku ƙirga maki, ku buga saƙon ƙarshe, ku yi amfani da AI don bayyana ko gyara sashe ɗaya, kuma ku rubuta comment a saman kowane sashe da kalmominku.",
          youCanNow: "tsarawa, gina, gwada da bayyana ƙaramin shirin Python, kuna amfani da AI a matsayin mataimaki ba a madadinku ba.",
          quickCheck: [
            { objective: "O6", q: "Mene ne comment a Python?", options: ["Layin da ke buga rubutu", "Wani nau'in loop", "Layin da ke farawa da # kuma Python yana ƙyale shi", "Saƙon kuskure"], answer: 2, why: "Comments suna farawa da # kuma rubutu ne ga mutane, ba umarni ga Python ba." },
            { objective: "O6", q: "Kun gama wasan tambayoyi. Mene ne mataki mai kyau na gaba?", options: ["Kada ku taɓa gudanar da shi", "Ku goge comments", "Ku nemi AI ya sake rubuta komai", "Ku bar aboki ya yi wasan ku lura da inda ya ruɗe"], answer: 3, why: "Lura da wani yana wasa yana nuna muku abin da za ku inganta." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Rubuta code tare da mataimakin AI",
        questions: [
          { objective: "O4", q: "Wace hanya ce mai kyau ta tambayar AI game da code da ba ku fahimta ba?", options: ["\"Ka yi mini aikin gida\"", "\"Ka bayyana wannan code na Python layi bayan layi ga mai farawa\"", "\"Code\"", "\"Ka tsawaita shi\""], answer: 1, why: "Buƙata mai sarari ta bayani layi bayan layi tana taimaka muku koyo." },
          { objective: "O4", q: "Ta yaya za ku tabbatar cewa kun fahimci wani code da gaske?", options: ["Ku canja abu ɗaya, ku yi hasashen sakamako, sannan ku gudanar da shi", "Ku karanta shi sau ɗaya da sauri", "Ku goge shi", "Ku nemi AI ya ce kun fahimta"], answer: 0, why: "Hasashe da gwaji suna nuna ko kun fahimta da gaske." },
          { objective: "O5", q: "Python ya nuna saƙon kuskure. A ina za ku fara dubawa?", options: ["Kalmar farko a kan allo", "Wurin adireshi na burauzar", "Layin ƙarshe na saƙon da lambar layin", "Madannai (keyboard)"], answer: 2, why: "Layin ƙarshe yana faɗin sunan matsalar, kuma lambar layi tana nuna inda take." },
          { objective: "O5", q: "AI ya ba ku gyara don bug ɗinku. Me za ku yi na gaba?", options: ["Ku ɗauka yana aiki", "Ku miƙa shi ba tare da gudanar da shi ba", "Ku goge shirinku", "Ku gudanar da shi da kanku ku duba cewa yana aiki"], answer: 3, why: "AI yana iya yin kuskure, don haka ku ne kuke gwada gyaran da kanku." },
          { objective: "O6", q: "A Python, me layin da ke farawa da # yake yi?", options: ["Comment ne da Python yake ƙyale shi", "Yana buga alamar hashtag", "Yana dakatar da shirin", "Yana yin loop"], answer: 0, why: "Layukan da ke farawa da # comments ne ga mutane, ba umarni ba." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gabatarwa ga Rubuta Code da Taimakon AI",
    questions: [
      { objective: "O1", q: "Mafi kyawun bayanin code shi ne:", options: ["Umarnin da kwamfuta ke bi daidai yadda suke", "Kalmar sirri ta ɓoye", "Wani nau'in waƙa", "Makin makaranta"], answer: 0, why: "Code jerin umarni ne ga kwamfuta." },
      { objective: "O1", q: "Me yasa kwafar code na AI da ba ku fahimta ba matsala ce?", options: ["Koyaushe yana da gajarta sosai", "Ba ku koyi komai ba kuma ba za ku iya gyara shi idan ya lalace ba", "Kwamfutoci ba sa iya gudanar da code na AI", "Yana ci kuɗi"], answer: 1, why: "Fahimta ita ce ƙwarewar; code da aka kwafa yana barin ku a makale." },
      { objective: "O1", q: "Kafin matashi ya yi rajista a kayan AI, ya kamata:", options: ["Ya yi amfani da ranar haihuwa ta ƙarya", "Ya raba kalmar sirrinsa da abokai", "Ya duba mafi ƙarancin shekarun kayan aikin ya tambayi iyaye ko mai kula", "Ya ƙyale karanta komai"], answer: 2, why: "Iyakar shekaru da haɗa iyaye suna kiyaye ku kuma suna sa ku bi dokoki." },
      { objective: "O2", q: "Google Colab yana bar ku:", options: ["Kallon bidiyo kawai", "Sayen wasanni", "Aika saƙonnin tes", "Gudanar da Python a burauzar intanet ba tare da saka komai ba"], answer: 3, why: "Colab notebook ne kyauta ta intanet don gudanar da Python." },
      { objective: "O2", q: "A notebook, cell shi ne:", options: ["Akwati inda kuke rubutawa da gudanar da code", "Batirin waya", "Wani nau'in kuskure", "Loop"], answer: 0, why: "Notebooks suna ƙunshe da cells da ke ɗauke da code." },
      { objective: "O2", q: "Wane layi ne ke nuna kalmomi a kan allo a Python?", options: ["show Hello", "print(\"Hello\")", "say = Hello", "run Hello"], answer: 1, why: "print tare da rubutu a cikin quotes yana nuna rubutun." },
      { objective: "O3", q: "Variable shi ne:", options: ["Saƙon kuskure", "Wani nau'in shafin intanet", "Akwati mai suna da ke ajiye ƙima", "Loop da ba ya ƙarewa"], answer: 2, why: "Variables suna ajiye ƙima a ƙarƙashin suna, kamar score." },
      { objective: "O3", q: "Wane layi ne ke neman mai wasa ya rubuta sunansa?", options: ["name = 0", "print(name)", "for name in range(3):", "name = input(\"What is your name? \")"], answer: 3, why: "input yana neman mai amfani ya rubuta wani abu." },
      { objective: "O3", q: "A Python, == yana nufin:", options: ["Iri ɗaya ne da", "Haɗa wuri ɗaya", "Ajiye ƙima", "Fara comment"], answer: 0, why: "Alamomin daidai biyu suna kwatanta ƙima biyu." },
      { objective: "O3", q: "Me yasa Python yake damuwa da indentation?", options: ["Yana sa code ya yi launi", "Yana nuna waɗanne layuka ne ke ƙarƙashin if ko loop", "Yana ajiye batir", "Ado ne kawai"], answer: 1, why: "Layukan da aka tura ciki suna cikin if, else ko loop da ke samansu." },
      { objective: "O3", q: "Kuna son buga kirarin \"Go team!\" sau 5. Wanne ne ya fi dacewa?", options: ["Umarnin if", "Comment", "Loop na for da range(5)", "Variable mai suna team"], answer: 2, why: "Loop yana maimaita code adadin lokutan da aka ƙayyade." },
      { objective: "O4", q: "Wanne ne lafiya ku liƙa a mataimakin AI?", options: ["Kalmar sirrinku ta makaranta", "Adireshin gidanku", "Lambar wayarku", "Layukan code 10 na wasan tambayoyi"], answer: 3, why: "Code na aiki ba shi da bayanan sirri a ciki." },
      { objective: "O4", q: "Bayan AI ya bayyana code ɗinku, hanya mai kyau ta gwada fahimtarku ita ce:", options: ["Canja abu ɗaya, yin hasashe, sannan gudanar da shi", "Rufe notebook", "Neman bayani mafi tsawo kawai", "Kwafar shi zuwa wani notebook ba tare da canji ba"], answer: 0, why: "Hasashe da gwaji suna tabbatar da cewa kun fahimta." },
      { objective: "O5", q: "Bug shi ne:", options: ["Wani abu mai kyau a shiri", "Kuskure a code", "Wani nau'in loop", "Notebook"], answer: 1, why: "Bugs kurakurai ne; debugging yana gyara su." },
      { objective: "O5", q: "IndentationError yawanci yana nufin:", options: ["Intanet ɗinku ya ɗauke", "Kuna buƙatar sabuwar kwamfuta", "Sararin da ke farkon layi ba daidai ba ne", "Shirin ya yi aiki"], answer: 2, why: "Yana nuna sarari ba daidai ba a farkon layi." },
      { objective: "O5", q: "Kun makale a kan wani kuskure. Me ya kamata ku liƙa a mataimakin AI?", options: ["Kalmar error kaɗai", "Kalmar sirrinku", "Babu komai; ku haƙura", "Code ɗin da cikakken saƙon kuskuren"], answer: 3, why: "Code da cikakken kuskure suna ba AI abin da yake buƙata don bayyana matsalar." },
      { objective: "O5", q: "AI ya ba da shawarar gyara amma kuskuren ya canja. Ya kamata ku:", options: ["Faɗa wa AI ainihin abin da ya faru yanzu", "Haƙura", "Miƙa shi duk da haka", "Goge Python"], answer: 0, why: "Tambayoyin biyo baya masu sarari suna taimaka muku da AI nemo ainihin matsalar." },
      { objective: "O6", q: "Mene ne mataki na farko mafi kyau wajen gina babban shiri?", options: ["Rubuta komai a lokaci ɗaya", "Rubuta gajeren tsari a matsayin comments", "Neman AI ya rubuta duka", "Ƙyale gwaji"], answer: 1, why: "Tsari yana raba shirin zuwa ƙananan sassa." },
      { objective: "O6", q: "Me yasa za ku gudanar da shirinku bayan ƙara kowane ƙaramin sashe?", options: ["Yana sa code ya yi tsawo", "Python yana buƙatar haka", "Kuna gano kurakurai da wuri, lokacin da suke da sauƙin gyarawa", "Yana ajiye fayil ɗin"], answer: 2, why: "Ƙananan matakai suna sa bugs su zama masu sauƙin ganowa." },
      { objective: "O6", q: "Kun yi amfani da AI don taimakawa a aikin code na makaranta. Me ya kamata ku yi?", options: ["Ku ɓoye shi", "Ku ce duka aikinku ne kawai", "Ku goge aikin", "Ku faɗi yadda kuka yi amfani da AI, bisa dokokin malaminku"], answer: 3, why: "Faɗin gaskiya game da amfani da AI wani ɓangare ne na bin dokokin makaranta." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      1,
      3,
      5,
      6,
      8,
      11,
      12,
      14,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Shirin yana aiki",
        objective: "O2",
        notYet: "Shirin ba ya gudana a Colab, ko yana tsayawa da kuskure.",
        meets: "Shirin yana gudana daga farko har ƙarshe a Colab.",
        exceeds: "Yana kuma karɓar amsar da mai wasa ya rubuta ta wata hanya daban, kamar da manyan baƙaƙe."
      },
      {
        name: "Ginshiƙai",
        objective: "O3",
        notYet: "Babu input, if da else, ko variable na maki.",
        meets: "Yana neman sunan mai wasa, yana amfani da if da else don aƙalla tambayoyi 5, kuma yana ajiye maki a variable.",
        exceeds: "Yana kuma amfani da loop don maimaita wani sashe na wasan."
      },
      {
        name: "An gina shi sashe-sashe",
        objective: "O6",
        notYet: "Babu tsari ko saƙon ƙarshe.",
        meets: "Tsari a cikin comments, tambayoyi biyar da saƙon ƙarshe mai maki.",
        exceeds: "Wani aboki ya yi wasan, kuma mai koyo ya inganta sashe ɗaya bisa abin da ya gani."
      },
      {
        name: "AI a matsayin malami",
        objective: "O4",
        notYet: "AI ne ya rubuta shirin, ko ba a faɗi amfani da AI ba.",
        meets: "AI ya bayyana ko ya taimaka wajen gyara aƙalla sashe ɗaya, kuma mai koyo ya faɗi yadda aka yi amfani da shi.",
        exceeds: "Mai koyo zai iya nuna wani canji da ya yi hasashe ya kuma gwada bayan bayanin AI."
      },
      {
        name: "Comments da kalmomin mai koyo",
        objective: "O5",
        notYet: "Babu comments, ko an kwafo su daga AI.",
        meets: "Comment a saman kowane sashe yana faɗin abin da yake yi da kalmomin mai koyo.",
        exceeds: "Yana kuma rubuta bug ɗaya da ya gyara da yadda ya gyara shi."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka gina shiri na biyu da kansu cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka shiga ƙungiyar code, aji ko sansanin koyo cikin kwanaki 90",
      "Masu koyo da suka fara wani kwas na code ko AI na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai burauzar intanet da intanet (ta makaranta, ɗakin karatu ko gida)",
      "Google Colab, tare da asusun Google da aka ba mai koyo izinin amfani da shi",
      "Mataimakin AI kyauta da aka ba mai koyo izinin amfani da shi",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku duba dokokin shekaru na Colab da na kayan AI da saitunan asusun makaranta kafin aji; ku shirya asusun nuni ga masu koyo da ba za su iya yin rajista ba.",
      "Ku rubuta code kai tsaye a kan na'urar majigi (projector) a Darasi na 2 da na 3 don masu farawa su bi kowane mataki.",
      "Ku cire colon ko quote da gangan don kowane mai koyo ya yi atisayen karanta saƙon kuskure.",
      "Ku tunatar da masu koyo kada su taɓa liƙa bayanan sirri a kayan AI; code na wasan tambayoyi ba ya buƙatar ko ɗaya.",
      "Ku shirya musayar wasannin tambayoyi inda masu koyo za su yi wasannin juna, sannan su ba da maki da ma'aunin rubric."
    ]
  }
};

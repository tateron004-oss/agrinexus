"use strict";

// Koach Learn course, Hausa (ha) translation of leadership/edu-ai-multilingual.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "edu-ai-multilingual-ha",
  lang: "ha",
  translationOf: "edu-ai-multilingual",
  category: "Leadership Development",
  name: "AI don Ɗalibai Masu Harsuna Da Yawa",
  skills: "Shirya taimakon harshe da AI, Yin ƙamus na harsuna biyu, Rubuta tsarin jimla bisa matakin harshe, Amfani da fassara lafiya, Kafa tsarin fassara da mutum ke dubawa, Daraja harsunan gida",
  outcome: "amfani da AI don shirya taimakon harshe ga ɗalibai masu harsuna da yawa, wato ƙamus, tsarin jimla bisa matakin harshe da rubutun da aka sauƙaƙa amma suna riƙe da ra'ayoyin ajin, da gudanar da tsarin fassara ga iyalai inda ƙwararren mutum ke duba kowace fassarar AI kafin a aika ta.",
  about: [
    "Wannan kwas ɗin na malaman aji ne, malaman koyar da Turanci (ELD) da na harsuna biyu, masu horar da malamai, jami'an hulɗa da iyalai da shugabannin makaranta da ke hidima ga ɗalibai masu harsuna da yawa da iyalansu. AI zai iya hanzarta shirya taimakon harshe da fassarori, amma kuma yana iya yin kurakurai da za su ruɗa ɗalibai ko su ɓatar da iyalai.",
    "Babi na 1 yana gina taimako a cikin aji: rubutun da aka sauƙaƙa amma suna riƙe da ra'ayoyin, ƙamus na harsuna biyu, da tsarin jimla bisa matakin harshe. Babi na 2 yana magana game da sadarwa da iyalai, tsarin fassara da mutum ke dubawa, sirri, da aikin shugaba wajen daraja harsunan gida.",
    "Jagorancin gwamnatin tarayya game da ɗalibai masu koyon Turanci ya canja kwanan nan; ma'aikatan gundumarku masu kula da ɗalibai masu koyon Turanci da haƙƙin jama'a ne suka san nauyin da ke kanku yanzu. Ku yi amfani da kayan ƙirƙira ko na gama-gari kawai, ba tare da bayanan ɗalibai ba. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku shirya kunshin taimako na harsuna da yawa don darasi ɗaya: rubutun babban darasin da aka sauƙaƙa amma yana riƙe da ra'ayoyin ajin, ƙamus na harsuna biyu mai kalmomi masu muhimmanci 8 zuwa 10 a harshen gida ɗaya da makarantarku ke hidima da shi, tsarin jimla a matakai uku na harshe don babban aikin magana ko rubutu na darasin, da saƙo ɗaya ga iyali da AI ya fassara kuma ƙwararren mai magana da harshen ya duba. Ku rubuta tsarin fassara mai matakai huɗu da makarantarku za ta bi, kuma ku rubuta kowane gyara da mai dubawa ya yi.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Malaman aji, malaman koyar da Turanci (ELD) da na harsuna biyu, masu horar da malamai, jami'an hulɗa da iyalai da shugabannin makaranta a makarantun Amurka da ke hidima ga ɗalibai masu harsuna da yawa da iyalansu.",
    startingPoint: "Suna shirya taimakon harshe da fassarori ga iyalai da hannu ko da kayan fassara kyauta, sau da yawa ba tare da dubawa ba. Wataƙila ba su san wanda ke tabbatar da nauyin da ke kansu ga iyalai masu harsuna da yawa a gundumarsu ba.",
    gap: "AI zai iya hanzarta taimakon harshe da fassarori, amma kurakurai na iya ruɗa ɗalibai ko ɓatar da iyalai, kuma taimakon na iya rage karatun maimakon nauyin harshen. Malamai suna buƙatar taimakon da ke riƙe da ra'ayoyin ajin, tsarin fassara da ƙwararren mutum ke dubawa, da sanin inda za su tabbatar da nauyin da ke kansu.",
    constraints: [
      "Ku yi amfani da kayan ƙirƙira ko na gama-gari kawai, ba tare da bayanan ɗalibai ba",
      "Ƙwararren mai magana da harshen yana duba kowace fassarar AI ga iyalai kafin a aika ta; muhimman al'amura kamar taron ilimi na musamman suna amfani da ƙwararrun masu fassara kamar yadda gundumar ta buƙata",
      "Jagorancin gwamnatin tarayya game da ɗalibai masu koyon Turanci ya canja kwanan nan; ofishin EL na gundumar da jami'in haƙƙin jama'a ne ke tabbatar da nauyin da ke kanku yanzu",
      "Ba a neman ɗalibai su fassara muhimman al'amura ga iyalansu",
      "Lokaci: gajerun darussa da suka dace da ranar koyarwa"
    ],
    prerequisites: "Babu. Kwas ɗin \"AI ga Shugabannin Makaranta da na Ilimi 2: Kayan AI ga Malamai\" farawa ne mai amfani."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku rubutu na matakin aji", action: "sauƙaƙa rubutun da AI don rage nauyin harshe yayin da ra'ayoyin ajin suke nan", standard: "har ya ci gwajin tambayoyi iri ɗaya" },
    { id: "O2", condition: "Don kalmomi masu muhimmanci na darasi ɗaya", action: "yin ƙamus na harsuna biyu mai kalmomi 8 zuwa 10 a harshen gida da makarantarku ke hidima da shi, da alamar kalmomi masu kama (cognates)", standard: "ƙwararren mai magana da harshen ya duba shi, kuma an rubuta kowane gyara" },
    { id: "O3", condition: "Idan aka ba ku babban aikin magana ko rubutu na darasi", action: "rubuta tsarin jimla a matakai uku na harshe tare da jerin kalmomi", standard: "kowane mataki yana neman tunani iri ɗaya" },
    { id: "O4", condition: "Idan aka ba ku saƙo ga iyali", action: "gudanar da tsarin fassara mai matakai huɗu: Turanci mai sauƙi, kayan aikin da aka amince da shi, dubawar ƙwararre, ajiyewa", standard: "ba tare da aika komai ba sai ƙwararren mai magana da harshen ya duba shi" },
    { id: "O5", condition: "Idan tambayoyi suka taso game da nauyin da ke kanku ga iyalai masu harsuna da yawa", action: "gane wanda ke tabbatar da nauyin da ke kanku yanzu a gundumarku, da bayyana buƙatun ɗalibai ga AI a gama-gari kawai", standard: "an rubuta bayanan tuntuɓarsu a shafin tsarin aikinku" },
    { id: "O6", condition: "Don makarantarku", action: "tsara yadda AI zai taimaka wa harsunan gida ba tare da maye gurbin ma'aikata masu harsuna biyu ba", standard: "tare da ma'auni ɗaya na ingantacciyar sadarwa da iyalai" }
  ],
  chapters: [
    {
      name: "Babi na 1: Taimakon harshe a cikin aji",
      lessons: [
        {
          objectives: ["O1"],
          title: "Taimakon harshe da ke riƙe da babban matakin koyo",
          minutes: 5,
          goal: "Sauƙaƙa nauyin harshen rubutu ba tare da rage ra'ayoyin matakin aji ba.",
          text: [
            "Ɗalibai masu harsuna da yawa suna iya tunani a matakin ajinsu yayin da suke koyon Turanci. Manufar taimako ita ce rage nauyin harshe, ba tunani ba. Wato a riƙe muhimman ra'ayoyi, kalmomi da tambayoyi, amma a ƙara bayyanawa: gajerun jimloli, kanun labarai, hotuna, da muhimman kalmomi da aka yi musu rubutu mai kauri tare da ma'anarsu.",
            "Prompt (umarni): \"Ka sauƙaƙa wannan rubutun kimiyya na aji 7 don ɗalibai da ke koyon Turanci a matsakaicin mataki. Ka riƙe kowane muhimmin ra'ayi da waɗannan kalmomin karatu: [jeri]. Ka yi amfani da gajerun jimloli da kanun labarai, ka yi wa kalmomin karatu rubutu mai kauri, ka bayyana ma'anar kowace da Turanci mai sauƙi. Kada ka cire ra'ayoyi.\"",
            "Ku kwatanta rubutun da aka sauƙaƙa da na asali don tabbatar da gaskiyarsa. Gwaji mai kyau: shin ɗalibin da ya karanta rubutun da aka sauƙaƙa zai iya amsa manyan tambayoyi iri ɗaya da ɗalibin da ya karanta na asali?"
          ],
          steps: ["Ku jera muhimman ra'ayoyi da kalmomin karatu.", "Ku nemi AI ya sauƙaƙa bisa matakin harshe, yana riƙe da duka biyun.", "Ku ƙara kanun labarai, hotuna da kalmomi masu kauri tare da ma'anarsu.", "Ku duba gaskiyarsa da na asali.", "Gwaji: za a iya amsa manyan tambayoyi iri ɗaya?"],
          words: [["Ɗalibi mai harsuna da yawa (multilingual learner)", "ɗalibin da ke koyo a cikin harshe fiye da ɗaya, sau da yawa har yanzu yana koyon Turanci."], ["Nauyin harshe (language load)", "wahalar harshen rubutu, daban da wahalar ra'ayoyin."], ["Kalmomin karatu (academic vocabulary)", "kalmomin da ake amfani da su a darussan makaranta, kamar analyze, evidence ko photosynthesis."]],
          slides: [
            { title: "Ku rage harshe, ba tunani ba", bullets: ["Ku riƙe ra'ayoyi, kalmomi, tambayoyi", "Ku ƙara bayyanawa: gajerun jimloli, kanun labarai, hotuna"] },
            { title: "Prompt ɗin", bullets: ["Ku faɗi matakin da kalmomin karatu", "Rubutu mai kauri da ma'anar muhimman kalmomi", "\"Kada ka cire ra'ayoyi\""] },
            { title: "Ku duba shi", bullets: ["Gaskiyarsa idan aka kwatanta da na asali", "Za a iya amsa manyan tambayoyi iri ɗaya?"] }
          ],
          tryIt: "Ku sauƙaƙa rubutu ɗaya na matakin aji da AI don matsakaicin matakin Turanci, kuna riƙe da dukkan muhimman ra'ayoyi. Ku duba shi da gwajin tambayoyi iri ɗaya.",
          youCanNow: "sauƙaƙa rubutu ga ɗalibai masu harsuna da yawa ba tare da rage ra'ayoyin matakin aji ba.",
          quickCheck: [
            { objective: "O1", q: "Mene ne nauyin harshe?", options: ["Wahalar harshen, daban da ra'ayoyin", "Yawan shafukan rubutu", "Yawan ɗaliban da ke magana da wani harshe", "Nauyin littafin karatu"], answer: 0, why: "Rage nauyin harshe yana sa rubutun ya fi sauƙin karantawa ba tare da rage ra'ayoyin ba." },
            { objective: "O1", q: "Rubutun da AI ya sauƙaƙa ya cire wani muhimmin ra'ayi don ya gajarta. Me za ku yi?", options: ["Ku yi amfani da shi; gajere ya fi kyau", "Ku ba ɗalibai masu harsuna da yawa maudu'i mafi sauƙi", "Ku mayar da ra'ayin ku duba da gwajin tambayoyi iri ɗaya", "Ku ce wa ɗalibai su tsallake wannan sashe"], answer: 2, why: "Rubutun da aka sauƙaƙa suna riƙe da muhimman ra'ayoyi don ɗalibai su koya a matakin ajinsu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ƙamus na harsuna biyu da kalmomi masu kama",
          minutes: 5,
          goal: "Yi ƙamus na harsuna biyu da aka duba don muhimman kalmomin darasi.",
          text: [
            "Ƙamus na harsuna biyu yana ba da kowace muhimmiyar kalma da Turanci, ma'ana mai sauƙi, kalmar a harshen gidan ɗalibin, da jimlar misali. AI zai iya rubuta daftarinsa da sauri a harsuna da yawa: \"Ka yi teburin ƙamus na waɗannan kalmomi 10 don kimiyyar aji 5: kalmar Turanci, ma'ana mai sauƙi, fassarar Spanish, jimlar misali da Turanci.\"",
            "Ku nemi AI ya yi alama a kan kalmomi masu kama (cognates), wato kalmomin da suke kama kuma suke da ma'ana ɗaya a harsunan biyu, kamar \"animal\" da \"animal\" ko \"information\" da \"información\", da kuma abokan ƙarya (false friends), wato kalmomin da suke kama amma ma'anarsu ta bambanta. Kalmomi masu kama ƙarfi ne da ɗalibai suke zuwa da shi.",
            "Fassarar AI ta kalma ɗaya na iya zaɓar ma'anar da ba ta dace da darasinku ba (misali kalmar lissafi ko kimiyya da ke da ma'ana ta yau da kullum). Ku sa ƙwararren mai magana da harshen, kamar malamin harsuna biyu ko mai fassara na gundumar, ya duba ƙamus ɗin kafin ɗalibai su yi amfani da shi."
          ],
          steps: ["Ku jera muhimman kalmomi 8-10.", "Ku nemi tebur: kalma, ma'ana, kalmar harshen gida, misali.", "Ku nemi AI ya yi alama a kan kalmomi masu kama da abokan ƙarya.", "Ku sa ƙwararren mai magana da harshen ya duba shi.", "Ku raba shi da ɗalibai kafin darasin."],
          words: [["Ƙamus na harsuna biyu (bilingual glossary)", "jerin muhimman kalmomi tare da ma'anarsu a harsuna biyu."], ["Kalma mai kama (cognate)", "kalmar da ke kama kuma take da kusan ma'ana ɗaya a harsuna biyu."], ["Abokin ƙarya (false friend)", "kalmar da ke kama a harsuna biyu amma ma'anarta ta bambanta."]],
          slides: [
            { title: "Teburin ƙamus", bullets: ["Kalmar Turanci da ma'ana mai sauƙi", "Kalmar harshen gida", "Jimlar misali"] },
            { title: "Kalmomi masu kama ƙarfi ne", bullets: ["Kama ɗaya, ma'ana ɗaya: animal / animal", "Ku kula da abokan ƙarya"] },
            { title: "Ku duba kafin amfani", bullets: ["AI na iya zaɓar ma'anar da ba ta dace da darasin ba", "Malamin harsuna biyu ko mai fassara na gunduma ya duba"] }
          ],
          tryIt: "Ku yi ƙamus na harsuna biyu mai kalmomi 8 zuwa 10 don darasi ɗaya a harshen gida da makarantarku ke hidima da shi, tare da alamar kalmomi masu kama. Ku nemi ƙwararren mai magana da harshen ya duba shi, ku rubuta duk wani gyara.",
          youCanNow: "ƙirƙirar ƙamus na harsuna biyu da ke ginuwa kan harsunan gidan ɗalibai.",
          quickCheck: [
            { objective: "O2", q: "Mene ne abokin ƙarya (false friend)?", options: ["Kalma mai kama da ke da ma'ana ɗaya a harsuna biyu", "Kalmar da ke kama a harsuna biyu amma ma'anarta ta bambanta", "Aboki da ke fassara muku", "Kalmar da ba ta da fassara"], answer: 1, why: "Abokan ƙarya suna kama da kalmomi masu kama amma suna ɓatarwa, don haka suna buƙatar alama." },
            { objective: "O2", q: "AI ya fassara kalmar kimiyya da ma'anarta ta yau da kullum maimakon ma'anarta a darasin. Me za ku yi?", options: ["Ku bar ta; ɗalibai za su gane", "Ku cire kalmar daga ƙamus ɗin", "Ku nemi AI ya ba da ma'ana mafi tsawo", "Ku sa ƙwararren mai magana da harshen ya gyara ta, ku rubuta gyaran"], answer: 3, why: "Fassarar AI ta kalma ɗaya na iya zaɓar ma'anar da ba ta dace da darasinku ba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Tsarin jimla bisa matakin harshe",
          minutes: 5,
          goal: "Rubuta tsarin jimla a matakai uku don aikin magana ko rubutu.",
          text: [
            "Tsarin jimla (sentence frames) yana ba ɗalibai tsarin harshen karatu don su mai da hankali kan ra'ayoyi. Don aiki ɗaya, ɗalibai a matakan Turanci daban-daban suna buƙatar taimako daban-daban. Misalin aiki: bayyana ko wata da'awa tana da shaida da ke goyon bayanta.",
            "Ku nemi AI ya ba da matakai uku. Farko: gajerun tsare-tsare tare da jerin kalmomi (\"The claim is ___. The evidence is ___.\"). Matsakaici: tsare-tsare da kalmomin haɗi (\"The claim is supported because ___. However, ___.\"). Babba: farkon jimloli a buɗe da kalmomin haɗi na karatu (\"Although the evidence suggests ___, it does not fully account for ___.\").",
            "Ku liƙa dukkan matakai uku don ɗalibai su zaɓa kuma su haura. Ku duba cewa kowane mataki yana neman tunani iri ɗaya. Ma'aunin koyar da Turanci na gundumarku da abokan aikinku na ELD za su iya taimaka muku ku daidaita tsare-tsaren da matakan harshe."
          ],
          steps: ["Ku faɗi aikin magana ko rubutun.", "Ku nemi tsare-tsare a matakin farko, matsakaici da babba.", "Ku ƙara jerin kalmomi a matakin farko.", "Ku duba cewa kowane mataki yana neman tunani iri ɗaya.", "Ku liƙa dukkan uku; ku bar ɗalibai su haura."],
          words: [["Tsarin jimla (sentence frame)", "jimla mai gurbi da ke nuna yadda ake gina amsa."], ["Matakin harshe (proficiency level)", "nisan da ɗalibi ya kai wajen koyon Turanci."], ["Kalmar haɗi (connector)", "kalmar da ke haɗa ra'ayoyi, kamar because, however ko although."]],
          slides: [
            { title: "Tsare-tsare suna bar ɗalibai su yi tunani", bullets: ["Tsarin harshen karatu", "Mai da hankali kan ra'ayoyi"] },
            { title: "Matakai uku, tunani ɗaya", bullets: ["Farko: gajerun tsare-tsare, jerin kalmomi", "Matsakaici: kalmomin haɗi", "Babba: farkon jimloli na karatu a buɗe"] },
            { title: "Ku yi amfani da su da kyau", bullets: ["Ku liƙa dukkan uku; ɗalibai su haura", "Ku daidaita matakai tare da abokan aikinku na ELD"] }
          ],
          tryIt: "Ku zaɓi aikin magana ko rubutu daga darasin da ke tafe. Ku yi amfani da AI don rubuta tsare-tsare a matakai uku, ku duba cewa suna neman tunani iri ɗaya, ku ƙara jerin kalmomi.",
          youCanNow: "rubuta tsarin jimla da ke taimaka wa kowane matakin Turanci a cikin aiki ɗaya.",
          quickCheck: [
            { objective: "O3", q: "Mene ne tsarin jimla?", options: ["Hoto a kewayen jimla", "Jerin kalmomin rubutu", "Tsarin amsa mai gurbin da za a cike", "Fassarar jimla"], answer: 2, why: "Tsare-tsare suna nuna wa ɗalibai yadda ake gina amsa." },
            { objective: "O3", q: "Tsarinku na matakin farko yana neman ɗalibai su faɗi launi, amma na babban mataki yana neman su bayyana dalili. Me za ku canja?", options: ["Ku sa kowane mataki ya nemi tunani iri ɗaya da taimako daban", "Babu komai; masu farawa suna buƙatar ra'ayoyi masu sauƙi", "Ku cire matakin farko", "Kada ku ba masu farawa tsari"], answer: 0, why: "Tsare-tsare a kowane mataki suna neman tunani iri ɗaya; taimakon ne kawai ke canjawa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Taimakon harshe a cikin aji",
        questions: [
          { objective: "O1", q: "Taimakon harshe mai kyau yana rage:", options: ["Tunani", "Matakin aji", "Nauyin harshe, yayin da ra'ayoyin suke nan", "Abin da ake sa rai"], answer: 2, why: "Ɗalibai suna iya tunani a matakin ajinsu yayin da suke koyon Turanci." },
          { objective: "O1", q: "Wane gwaji ne ke duba rubutun da aka sauƙaƙa?", options: ["Shin ɗalibai za su iya amsa manyan tambayoyi iri ɗaya kamar da na asali?", "Ya fi gajarta?", "Yana da ƙarin hotuna?", "Yana cikin sabon nau'in rubutu?"], answer: 0, why: "Tambayoyi iri ɗaya na nufin ra'ayoyi iri ɗaya." },
          { objective: "O2", q: "Kalma mai kama (cognate) ita ce:", options: ["Ƙa'idar nahawu", "Kalmar lissafi", "Fassara marar daidai", "Kalmar da ke kama kuma take da kusan ma'ana ɗaya a harsuna biyu"], answer: 3, why: "Kalmomi masu kama ƙarfi ne da ɗalibai suke zuwa da shi." },
          { objective: "O2", q: "Wa ya kamata ya duba ƙamus na harsuna biyu da AI ya yi?", options: ["Babu kowa", "Ƙwararren mai magana da harshen, kamar malamin harsuna biyu ko mai fassara na gunduma", "AI ɗin kuma", "Ɗalibin da ke koyon Turanci"], answer: 1, why: "AI na iya zaɓar ma'anar da ba ta dace da darasin ba." },
          { objective: "O3", q: "Tsarin jimla a matakai uku ya kamata:", options: ["Su nemi tunani daban-daban", "Su zama na masu farawa kawai", "A ɓoye su", "Su nemi tunani iri ɗaya da taimako daban"], answer: 3, why: "Taimako yana canjawa; tunani ba ya canjawa." }
        ]
      }
    },
    {
      name: "Babi na 2: Iyalai, fassara da shugabanci",
      lessons: [
        {
          objectives: ["O4"],
          title: "Tsarin fassara da mutum ke dubawa",
          minutes: 6,
          goal: "Kafa tsarin fassara mai matakai huɗu don saƙonni ga iyalai.",
          text: [
            "Fassarar AI tana da sauri kuma sau da yawa tana da kyau, amma tana yin kurakurai masu muhimmanci: ranaku marasa daidai, salon magana marar dacewa, kalmomin makaranta da ba su da fassara kai tsaye, da kurakurai a harsunan da ba a cika amfani da su ba. Iyalai suna dogara ga abin da makaranta ta turo musu.",
            "Tsari mai matakai huɗu: 1) Ku fara rubuta Turancin cikin harshe mai sauƙi (gajerun jimloli, ba karin magana ko kalmomin sana'a ba); Turanci a sarari yana fassaruwa da kyau. 2) Ku fassara da kayan aikin da aka amince da shi. 3) Ƙwararren mai magana da harshen (mai fassara na gunduma, ma'aikaci mai harsuna biyu ko hidimar da aka ɗauka) ya duba ya gyara. 4) Ku aika, ku ajiye fassarar da aka duba don sake amfani.",
            "Don muhimman saƙonni (ilimi na musamman, ladabtarwa, lafiya da tsaro, haƙƙoƙin shari'a), ku yi amfani da ƙwararrun masu fassarar rubutu ko ta baki kamar yadda gundumarku ta buƙata. Kada ku nemi ɗalibai su fassara muhimman al'amura ga iyalansu."
          ],
          steps: ["Ku fara rubuta Turanci mai sauƙi: ba karin magana ko kalmomin sana'a ba.", "Ku fassara da kayan aikin da aka amince da shi.", "Ƙwararren mai magana da harshen ya duba ya gyara.", "Ku aika, ku ajiye fassarar da aka duba.", "Muhimman saƙonni: ƙwararrun masu fassarar rubutu ko ta baki."],
          words: [["Karin magana (idiom)", "jumlar da ma'anarta ba ta fito daga kalmominta ba, kamar \"touch base\"."], ["Fassara ta baki (interpretation)", "fassara harshen da ake magana da shi, misali a taro."]],
          slides: [
            { title: "Me yasa za a duba fassarar AI", bullets: ["Ranaku da salon magana marasa daidai", "Kalmomin makaranta da ba su da fassara kai tsaye", "Ƙarin kurakurai a harsunan da ba a cika amfani da su ba"] },
            { title: "Matakai huɗu", bullets: ["1 Turanci mai sauƙi da farko", "2 Fassara da kayan aikin da aka amince da shi", "3 Ƙwararren mai magana da harshen ya duba", "4 Aika ku ajiye"] },
            { title: "Muhimman saƙonni", bullets: ["Ilimi na musamman, ladabtarwa, lafiya, haƙƙoƙi", "Ƙwararrun masu fassarar rubutu ko ta baki", "Kada ku taɓa neman ɗalibai su fassara waɗannan"] }
          ],
          tryIt: "Ku rubuta gajeren saƙo ga iyalai game da wani taron makaranta da Turanci mai sauƙi, ku fassara shi da kayan aikin da aka amince da shi, ku nemi ƙwararren mai magana da harshen ya duba shi. Ku rubuta kowane gyara.",
          youCanNow: "gudanar da tsarin fassara inda ƙwararren mutum ke duba kowace fassarar AI.",
          quickCheck: [
            { objective: "O4", q: "Me yasa za a rubuta saƙon da Turanci mai sauƙi kafin a fassara shi?", options: ["Turanci mai sauƙi ya fi gajarta a buga", "Turanci a sarari yana fassaruwa daidai", "Kayan fassara suna karanta Turanci mai sauƙi kawai", "Doka ce ta buƙata"], answer: 1, why: "Rubutun asali a sarari yana rage kurakuran fassara." },
            { objective: "O4", q: "Wani malami yana son ɗalibi ya fassara wa iyayensa takarda game da makin ɗalibin da kansa. Me za ku ba da shawara?", options: ["Ku bar ɗalibin ya fassara ta", "Ku aika ta da Turanci kawai", "Ku yi amfani da AI ku aika ba tare da dubawa ba", "Ku yi amfani da tsarin tare da dubawar ƙwararren mai magana da harshen maimakon haka"], answer: 3, why: "Kada ɗalibai su fassara muhimman al'amura ga iyalansu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Nauyi, sirri da jagoranci na yanzu",
          minutes: 5,
          goal: "Gane wanda ke tabbatar da nauyin makarantarku ga iyalai masu harsuna da yawa da inda za a duba jagoranci na yanzu.",
          text: [
            "Tun da daɗewa makarantu suna da nauyin haƙƙin jama'a na gwamnatin tarayya ga ɗalibai masu koyon Turanci, da na sadarwa da iyayen da ba su iya Turanci sosai ba a harshen da suke fahimta. A watan Agusta 2025, kamar yadda K-12 Dive ya ruwaito, Ma'aikatar Ilimi ta Amurka ta soke wasiƙar haɗin gwiwa ta \"Dear Colleague\" ta 2015 game da ɗalibai masu koyon Turanci, tana cewa ba ta dace da manufofin gwamnatin ba. Wasiƙun \"Dear Colleague\" jagoranci ne, ba doka ba.",
            "Domin jagorancin ya canja, kada ku dogara ga tsofaffin taƙaitawa. Ku tambayi ofishin ɗalibai masu koyon Turanci na gundumarku, jami'in haƙƙin jama'a ko na Title VI, ko lauya, mene ne nauyin da ke kanku yanzu, kuma ku duba jagorancin hukumar ilimi ta jiharku game da ɗalibai masu koyon Turanci, wadda za ta iya kafa nata sharuɗɗan.",
            "Sirri har yanzu yana aiki: matsayin ɗalibi na mai koyon Turanci, asalin harshensa da makin matakin harshensa duk suna cikin bayanan ilimi da FERPA ke kare su. Ku bar su a waje da kayan AI da ba a amince da su ba, kuma ku bayyana buƙatu a gama-gari idan kuna rubuta prompt."
          ],
          steps: ["Kada ku dogara ga tsofaffin taƙaitawar jagorancin EL.", "Ku tambayi ofishin EL na gundumarku ko jami'in haƙƙin jama'a game da nauyin yanzu.", "Ku duba jagorancin EL na hukumar ilimi ta jiharku.", "Ku bar matsayin EL da maki a waje da kayan AI da ba a amince da su ba.", "Ku rubuta prompt da bayanin buƙatu na gama-gari."],
          words: [["Mai koyon Turanci (English learner, EL)", "ɗalibin da aka gane yana buƙatar taimako don koyon Turancin makaranta."], ["Ƙarancin iya Turanci (limited English proficiency, LEP)", "rashin iya karatu, rubutu, magana ko fahimtar Turanci sosai har yanzu don wani yanayi."], ["Soke (rescind)", "janye ko dakatar da wani jagoranci ko shawarar da aka yanke a baya."]],
          slides: [
            { title: "Jagoranci ya canja", bullets: ["An soke wasiƙar Dear Colleague ta EL ta 2015, Agusta 2025", "Jagoranci ba doka ba ne"] },
            { title: "Ku tabbatar da nauyin yanzu", bullets: ["Ofishin EL na gunduma ko jami'in haƙƙin jama'a", "Jagorancin EL na hukumar ilimi ta jiha", "Lauya idan kuna shakka"] },
            { title: "Sirri", bullets: ["Matsayin EL da maki bayanan ilimi ne", "Ku bar su a waje da kayan da ba a amince da su ba", "Ku bayyana buƙatu a gama-gari"] }
          ],
          sources: [{ name: "K-12 Dive: Education Department rescinds English learner guidance (Aug 2025)", url: "https://www.k12dive.com/news/education-department-rescinds-ela-english-learner-guidance-2015-dear-colleague/758163/" }, { name: "FERPA: Protecting Student Privacy", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Ku gano wanda ke amsa tambayoyi game da sadarwa da iyalai masu harsuna da yawa a gundumarku (ofishin EL, jami'in haƙƙin jama'a ko jami'in hulɗa da iyalai), ku rubuta bayanan tuntuɓarsa a shafin tsarin aikinku.",
          youCanNow: "gano nauyin da ke kanku yanzu ga iyalai masu harsuna da yawa, da kiyaye bayanansu a sirri.",
          quickCheck: [
            { objective: "O5", q: "Mene ne wasiƙun \"Dear Colleague\"?", options: ["Jagoranci, ba doka ba", "Sababbin dokokin gwamnatin tarayya", "Wasiƙu ga iyalai", "Kwangilolin gunduma"], answer: 0, why: "Wasiƙun \"Dear Colleague\" suna bayyana yadda hukumomi ke fahimtar doka; jagoranci ne." },
            { objective: "O5", q: "Ba ku da tabbacin abin da makarantarku dole ta bayar a saƙonnin da aka fassara. Wa za ku tambaya?", options: ["Shirin hira na AI", "Labarin jarida", "Ofishin EL na gundumarku ko jami'in haƙƙin jama'a", "Ƙungiyar iyaye a intanet"], answer: 2, why: "Ma'aikatan EL da na haƙƙin jama'a na gunduma sun san nauyin da ke kanku yanzu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Shugabanci da ke ɗaukar harsunan gida a matsayin ƙarfi",
          minutes: 6,
          goal: "Tsara yadda makarantarku za ta yi amfani da AI don daraja harsunan gida, ba don maye gurbin mutane ba.",
          text: [
            "Fassarar AI na iya sa a ga kamar ba a buƙatar ma'aikata masu harsuna biyu da masu fassara ta baki sosai. Akasin haka ne gaskiya: daftarin AI yana hanzarta dubawarsu, kuma ilimin al'adu da al'umma da suke da shi ba za a iya mayar da shi aikin na'ura ba. Ku kare lokacinsu don dubawa da kuma tattaunawar da ta fi muhimmanci.",
            "Ku yi amfani da AI don girmama harsunan gida: ku bar ɗalibai su fara bayyana ra'ayoyi a harshen gidansu sannan su gina Turancin, ku ƙirƙiri ƙamus da kayan maraba a harsunan iyalai, kuma ku gayyaci iyalai su raba iliminsu. Ku guji kayan aiki ko dokokin da ke ɗaukar harsunan gida a matsayin matsala kawai.",
            "Ku haɗa komai a gajeren tsarin makaranta: wane taimako malamai za su yi amfani da shi, tsarin fassara, wa ke dubawa, yadda iyalai ke ba da ra'ayinsu, da yadda za ku san cewa iyalai sun fi samun bayanai (misali halartar taruka ko ɗan bincike a harsunansu)."
          ],
          steps: ["Ku kare lokacin ma'aikata masu harsuna biyu don dubawa da muhimman tattaunawa.", "Ku bar ɗalibai su yi amfani da harsunan gida don gina ra'ayoyi.", "Ku ƙirƙiri kayan maraba a harsunan iyalai.", "Ku rubuta gajeren tsarin makaranta tare da tsarin fassara da masu dubawa.", "Ku auna ko iyalai sun fi samun bayanai."],
          words: [["Bisa ƙarfi (asset-based)", "ganin abin da ɗalibai da iyalai suke zuwa da shi a matsayin ƙarfi, ba gazawa ba."], ["Jami'in hulɗa da iyalai (family liaison)", "ma'aikacin da ke gina alaƙa tsakanin makaranta da iyalai."]],
          slides: [
            { title: "AI yana taimaka wa mutane", bullets: ["Daftari yana hanzarta dubawar ma'aikata masu harsuna biyu", "Ilimin al'adu da al'umma ya kasance na mutane"] },
            { title: "Harsunan gida ƙarfi ne", bullets: ["Tunani a harshen gida, sannan gina Turancin", "Kayan maraba a harsunan iyalai"] },
            { title: "Gajeren tsarin makaranta", bullets: ["Taimako, tsarin fassara, masu dubawa", "Ra'ayin iyalai", "Ma'auni: iyalai sun fi samun bayanai?"] }
          ],
          tryIt: "Aikin ƙarshe: ku gina kunshin taimakonku na harsuna da yawa (rubutu da aka sauƙaƙa, ƙamus na harsuna biyu da aka duba, tsarin jimla a matakai uku, fassara ɗaya ga iyali da aka duba), ku rubuta tsarin fassararku mai matakai huɗu tare da bayanan tuntuɓar mai dubawa, ku rubuta kowane gyara da aka yi.",
          youCanNow: "jagorantar amfani da AI da ke taimaka wa ɗalibai masu harsuna da yawa da iyalansu daidai kuma cikin girmamawa.",
          quickCheck: [
            { objective: "O6", q: "Me ake nufi da \"bisa ƙarfi\" (asset-based) ga ɗalibai masu harsuna da yawa?", options: ["Ganin abin da ɗalibai suke zuwa da shi a matsayin ƙarfi", "Ƙidaya dukiyar makaranta", "Mai da hankali kan abin da ɗalibai suka rasa", "Amfani da Turanci kawai a aji"], answer: 0, why: "Kallo bisa ƙarfi yana ɗaukar harsunan gida a matsayin ƙarfi." },
            { objective: "O6", q: "Wani shugaba ya ce fassarar AI na nufin ba a buƙatar ma'aikata masu harsuna biyu kuma. Me za ku ce?", options: ["Ku yarda; AI ya fi arha", "Ku ba da shawarar maye gurbin jami'an hulɗa da iyalai da shirye-shiryen hira", "Ku dakatar da duk fassara", "Dubawarsu tana sauri, kuma ilimin al'ummarsu har yanzu yana da muhimmanci"], answer: 3, why: "AI yana hanzarta aikin, amma ƙwararrun mutane ne ke duba shi kuma sun san al'ummar." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Iyalai, fassara da shugabanci",
        questions: [
          { objective: "O4", q: "Me yasa za a rubuta Turanci mai sauƙi kafin a fassara?", options: ["AI ba zai iya karanta dogon rubutu ba", "Ya fi gajarta", "Turanci a sarari yana fassaruwa daidai", "Doka ce ta buƙata"], answer: 2, why: "Karin magana da kalmomin sana'a suna kawo kurakuran fassara." },
          { objective: "O4", q: "Saƙo game da taron ilimi na musamman na ɗalibi yana buƙatar fassara. Wace hanya ce mafi kyau?", options: ["Ƙwararrun masu fassara kamar yadda gundumarku ta buƙata", "Ku nemi ɗalibin ya fassara", "Fassarar AI ba tare da dubawa ba", "Ku aika da Turanci kawai"], answer: 0, why: "Muhimman saƙonni suna buƙatar ƙwararrun masu fassara." },
          { objective: "O5", q: "Me ya faru da wasiƙar \"Dear Colleague\" ta 2015 game da ɗalibai masu koyon Turanci a 2025, kamar yadda K-12 Dive ya ruwaito?", options: ["Ta zama doka", "An soke ta", "An fassara ta", "Babu abin da ya faru"], answer: 1, why: "Ma'aikatar ta soke ta a watan Agusta 2025." },
          { objective: "O5", q: "Makin matakin Turanci na ɗalibi:", options: ["Suna cikin bayanan ilimi da FERPA ke kare su", "Bayanan jama'a ne", "Suna lafiya a kowane kayan AI", "Mallakar kamfanin kayan aikin ne"], answer: 0, why: "Bayanan ɗalibai ne." },
          { objective: "O6", q: "Ta yaya fassarar AI ke canja aikin ma'aikata masu harsuna biyu?", options: ["Ba a buƙatar su kuma", "Suna buƙatar duba rubutun haruffa kawai", "Ya kamata ɗalibai su maye gurbinsu", "Dubawarsu tana sauri, kuma ilimin al'ummarsu har yanzu yana da muhimmanci"], answer: 3, why: "Daftarin AI yana taimaka wa mutane; ba ya maye gurbinsu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Ɗalibai Masu Harsuna Da Yawa",
    questions: [
      { objective: "O1", q: "Ɗalibai masu harsuna da yawa suna iya:", options: ["Yin aiki mai sauƙi kawai", "Tunani a matakin ajinsu yayin da suke koyon Turanci", "Ba za su iya amfani da kalmomin karatu ba", "Ba za su iya koyo da AI ba"], answer: 1, why: "Matakin harshe ba matakin tunani ba ne." },
      { objective: "O1", q: "Nauyin harshe yana nufin:", options: ["Yawan harsunan da ake magana", "Nauyin littafin", "Wahalar harshen, daban da ra'ayoyin", "Yawan aikin gida"], answer: 2, why: "Taimako yana rage nauyin harshe, ba ra'ayoyi ba." },
      { objective: "O1", q: "Rubutun da aka sauƙaƙa ya kamata ya riƙe:", options: ["Babu tambayoyi", "Kalmomi masu sauƙi kawai", "Muhimman ra'ayoyi da kalmomin karatu", "Rabin ra'ayoyin"], answer: 2, why: "Manufar koyon ba ta canjawa." },
      { objective: "O1", q: "Kalmomin karatu sun haɗa da kalmomi kamar:", options: ["Evidence da analyze", "Hello da thanks", "Lunch da recess", "Bus da car"], answer: 0, why: "Kalmomin darussan makaranta suna buƙatar koyarwa kai tsaye." },
      { objective: "O2", q: "Ƙamus na harsuna biyu ya haɗa da:", options: ["Maki", "Kalmomin Turanci kawai", "Sunayen ɗalibai", "Kalma, ma'ana, kalmar harshen gida, misali"], answer: 3, why: "Harsunan biyu duka suna gina fahimta." },
      { objective: "O2", q: "Abokin ƙarya (false friend) shi ne:", options: ["Kalma mai kama (cognate)", "Kalmar da ke kama a harsuna biyu amma ma'anarta ta bambanta", "Abokin aji", "Mai fassara"], answer: 1, why: "Ya kamata ɗalibai su kula da su." },
      { objective: "O2", q: "Fassarar AI ta kalma ɗaya na iya:", options: ["Fassara sunaye kawai", "Kasancewa daidai koyaushe", "Rashin amfani kwata-kwata", "Zaɓar ma'anar da ba ta dace da darasinku ba"], answer: 3, why: "Yanayin magana yana da muhimmanci; ku duba su." },
      { objective: "O3", q: "Tsarin jimla:", options: ["Gwajin nahawu ne", "Firam ɗin hoto ne", "Yana nuna tsarin amsa mai gurbi", "Maki ne"], answer: 2, why: "Tsare-tsare suna bar ɗalibai su mai da hankali kan ra'ayoyi." },
      { objective: "O3", q: "Tsarin jimla na matakin farko sau da yawa yana da:", options: ["Jerin kalmomi", "Babu taimako", "Kalmomin haɗi na babban mataki kawai", "Tambayoyi kawai"], answer: 0, why: "Ƙarin taimako a matakan farko." },
      { objective: "O3", q: "Wa ke taimakawa wajen daidaita tsare-tsare da matakan harshe?", options: ["Kamfanin sayar da kaya", "Abokan aiki na ELD da ma'aunin koyar da Turanci", "AI shi kaɗai", "Babu kowa"], answer: 1, why: "Ƙwararru sun san matakan." },
      { objective: "O4", q: "Mataki na 3 na tsarin fassara shi ne:", options: ["Ƙwararren mai magana da harshen ya duba ya gyara", "Aika nan take", "Goge Turancin", "Tambayi ɗalibi"], answer: 0, why: "Dubawar mutum tana kama kurakurai." },
      { objective: "O4", q: "Me yasa za a ajiye fassarorin da aka duba?", options: ["Babu dalili", "Don sayar da su", "Don ɓoye su", "Don sake amfani da fassarori ingantattu"], answer: 3, why: "Fassarorin da aka duba suna rage lokaci a gaba." },
      { objective: "O4", q: "Kada ɗalibai su fassara:", options: ["Kalmomin darasi a aji", "Muhimman al'amura ga iyalansu", "Ra'ayoyinsu", "Sunayen littattafai"], answer: 1, why: "Ba adalci ba ne ga ɗalibin, kuma yana da haɗari ga iyalin." },
      { objective: "O5", q: "Wasiƙun \"Dear Colleague\":", options: ["Hukunce-hukuncen kotu ne", "Dokokin da Majalisar Dokoki ta zartar ne", "Jagoranci ne, ba doka ba", "Dokokin jiha ne"], answer: 2, why: "Ana iya fitar da jagoranci ko a janye shi." },
      { objective: "O5", q: "Don tabbatar da nauyin da ke kanku yanzu ga iyalai masu harsuna da yawa, ku tambayi:", options: ["Kamfanin sayar da kaya", "Shirin hira na AI", "Ofishin EL na gundumarku ko jami'in haƙƙin jama'a", "Kafofin sada zumunta"], answer: 2, why: "Sun san doka da manufofi na yanzu." },
      { objective: "O5", q: "Hukumar ilimi ta jiharku na iya:", options: ["Kafa nata sharuɗɗa game da ɗalibai masu koyon Turanci", "Ba za ta taɓa fitar da jagoranci ba", "Soke dokar haƙƙin jama'a ta tarayya gaba ɗaya", "Hana fassara"], answer: 0, why: "Jihohi suna fitar da nasu jagoranci." },
      { objective: "O5", q: "Idan kuna rubuta wa AI game da buƙatun ɗalibai, ku bayyana su:", options: ["Tare da matsayin biza", "Tare da sunaye da maki", "Tare da adireshin gida", "A gama-gari"], answer: 3, why: "Ku kiyaye bayanan ɗalibai a sirri." },
      { objective: "O6", q: "\"Bisa ƙarfi\" (asset-based) yana nufin:", options: ["Ƙidaya kayan makaranta", "Ganin abin da ɗalibai suke zuwa da shi a matsayin ƙarfi", "Mai da hankali kan gazawa", "Hanyar kasafin kuɗi"], answer: 1, why: "Harsunan gida ƙarfi ne." },
      { objective: "O6", q: "Barin ɗalibai su fara bayyana ra'ayoyi a harshen gidansu:", options: ["Yana maye gurbin koyar da Turanci", "Yana rage saurin koyo", "Ba a yarda da shi ba", "Yana gina fahimta kafin Turancin"], answer: 3, why: "Tunani a harshe mai ƙarfi yana taimaka wa koyo." },
      { objective: "O6", q: "Ma'auni mai kyau na ingantacciyar sadarwa da iyalai shi ne:", options: ["Yawan shafukan da aka aika", "Yawan prompt ɗin AI", "Halartar taruka ko binciken iyalai a harsunansu", "Rahotannin kamfanin kayan aiki"], answer: 2, why: "Ku auna abin da iyalai suke fuskanta a zahiri." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      4,
      5,
      7,
      8,
      10,
      13,
      14,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Rubutu da aka sauƙaƙa",
        objective: "O1",
        notYet: "An rasa muhimman ra'ayoyi ko an sauƙaƙa su har sun ɓace.",
        meets: "Rubutu da aka sauƙaƙa da ke riƙe da ra'ayoyin matakin aji.",
        exceeds: "Ya ci gwajin tambayoyi iri ɗaya kuma yana riƙe da kalmomin karatu tare da taimako."
      },
      {
        name: "Ƙamus na harsuna biyu",
        objective: "O2",
        notYet: "Kalmomi ƙasa da 8, ko ƙwararren mai magana da harshen bai duba shi ba.",
        meets: "Muhimman kalmomi 8 zuwa 10 a harshen gida ɗaya, ƙwararren mai magana da harshen ya duba.",
        exceeds: "An yi alama a kan kalmomi masu kama da abokan ƙarya, tare da misali ga kowace kalma."
      },
      {
        name: "Tsarin jimla",
        objective: "O3",
        notYet: "Ƙasa da matakai uku, ko matakan suna neman tunani daban-daban.",
        meets: "Tsare-tsare a matakai uku na harshe don babban aikin darasin.",
        exceeds: "Kowane mataki yana neman tunani iri ɗaya, kuma tsare-tsaren matakin farko suna da jerin kalmomi."
      },
      {
        name: "Fassara ga iyali da aka duba",
        objective: "O4",
        notYet: "Ƙwararren mai magana da harshen bai duba fassarar ba.",
        meets: "Saƙo ɗaya ga iyali da AI ya fassara kuma ƙwararren mai magana da harshen ya duba, tare da rubuta gyare-gyare.",
        exceeds: "An ajiye fassarar da aka duba don sake amfani."
      },
      {
        name: "Tsarin fassara",
        objective: "O5",
        notYet: "Ƙasa da matakai huɗu, ko babu bayanan tuntuɓar mai dubawa.",
        meets: "Tsarin fassara mai matakai huɗu da makarantarku za ta bi.",
        exceeds: "Ya haɗa da bayanan tuntuɓar mai dubawa da wanda za a tambaya game da nauyi."
      }
    ]
  },
  evaluation: {
    results: [
      "Malaman da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Malaman da suka ce sun yi amfani da rubutun da aka sauƙaƙa, ƙamus ko tsarin jimla tare da ɗalibai masu harsuna da yawa cikin kwanaki 30 (binciken biyo baya)",
      "Makarantun da suka ɗauki tsarin fassara da ƙwararre ke dubawa (binciken biyo baya)",
      "Halartar iyalai a taruka ko sakamakon binciken iyalai a harsunansu"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai intanet da kayan AI da na fassara da gundumar ta amince da su",
      "Rubutu na matakin aji da aiki daga darasin da ke tafe (ba tare da bayanan ɗalibai ba)",
      "Samun ƙwararren mai magana da harshen gida ɗaya da makarantarku ke hidima da shi",
      "Kusan minti 60 gaba ɗaya, tare da lokacin dubawar ƙwararren mai magana da harshen"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku sauƙaƙa rubutu ɗaya a matsayin rukuni ku yi gwajin tambayoyi iri ɗaya.",
      "Ku shirya ƙwararrun masu magana da harsunan tun da wuri don a iya duba kowane ƙamus da fassara.",
      "Ku yi amfani da kayan ƙirƙira ko na gama-gari kawai; ku bayyana buƙatun ɗalibai ga AI a gama-gari kawai.",
      "Ku gayyaci ofishin EL na gundumar ko jami'in haƙƙin jama'a don amsa tambayoyi game da nauyin da ke kanku yanzu.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku nemi jerin gyare-gyaren da mai dubawa ya yi."
    ]
  }
};

"use strict";

// Koach Learn course, Hausa (ha) translation of athletes/athletes-intro-ai-sports.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "athletes-intro-ai-sports-ha",
  lang: "ha",
  translationOf: "athletes-intro-ai-sports",
  category: "Athletes",
  name: "Gabatarwa ga AI a Wasanni",
  skills: "Bayanin abin da AI yake yi a wasanni, Buɗe mataimakin AI kyauta, Rubuta prompt mai sarari game da wasanni, Tabbatar da amsoshin AI, Kiyaye bayananku na sirri da na lafiya",
  outcome: "amfani da mataimakin AI kyauta don yin shirin mako ɗaya na atisaye da karatu bisa jadawalin ƙungiyarku: yin tambaya a sarari, inganta amsar, tabbatar da ita tare da kocinku, da kiyaye bayanan sirri da na lafiya daga cikinta.",
  about: [
    "Wannan kwas ɗin na 'yan wasa ne na makarantar sakandare, na jami'a da waɗanda suka fara sana'ar wasa, da kuma kociyoyi da ke son fara amfani da basirar na'ura (AI) cikin sauƙi. Ba sai kun san fasaha ba.",
    "Za ku koyi inda AI ya riga ya bayyana a wasanni, daga ƙididdigar wasa zuwa nazarin bidiyo da ɗaukar 'yan wasa, da yadda za ku yi amfani da mataimakin AI kyauta da kanku don tsara makonku.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta darasin, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku yi amfani da mataimakin AI kyauta don yin shirin mako ɗaya da ya dace da ainihin jadawalinku na atisaye, wasa da aji. Ku rubuta prompt mai sarari, ku nemi aƙalla gyara biyu, ku cire duk wani bayanin sirri ko na lafiya, sannan ku nuna shirin ga kocinku ko mai kula da lafiyar 'yan wasa (athletic trainer) kafin ku bi shi.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "'Yan wasa na makarantar sakandare da na jami'a, da wasu matasa 'yan wasa a kulob ko wasan sha'awa, waɗanda ke haɗa atisaye, wasanni, aji, wani lokaci kuma aiki, neman ɗaukar su (recruiting) ko NIL (kuɗin amfani da suna da hoto).",
    startingPoint: "Suna amfani da wayoyin zamani, kafofin sada zumunta da manhajojin wasanni kowace rana. Da yawa sun gwada mataimakin AI a sama-sama, amma ba sa rubuta prompt mai sarari, ba sa tabbatar da amsoshi, kuma ba sa tunanin waɗanne bayanan sirri da na lafiya suke bayarwa.",
    gap: "AI zai iya taimakawa 'yan wasa su tsara makonsu, su yi karatu kuma su kasance cikin tsari, amma amsoshi marasa daidai game da atisaye, rauni, abinci ko cancanta (eligibility) za su iya cutar da lafiyarsu ko cancantarsu, kuma masu ɗaukar 'yan wasa na bogi da yarjejeniyoyin kamfanoni na bogi suna neman su. Suna buƙatar amfani da AI da kyau kuma su tabbatar da shi tare da kocinsu, mai kula da lafiyar 'yan wasa ko ofishin ƙa'idoji (compliance office).",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Na'urori: waya, ko kwamfutar makaranta ko ta ɗakin karatu",
      "Lokaci: kusan minti 5 a kowane darasi, a tsakanin atisaye da aji",
      "Dokokin shekaru: masu koyo da ba su kai shekara 18 ba su duba dokokin shekaru na manhajar kuma su tambayi iyaye ko mai kula da su",
      "Lafiya da sirri: babu rahoton rauni, magunguna, kalmomin sirri ko lambobin shaida a cikin prompt; ana tabbatar da shawarar atisaye, lafiya da cancanta tare da ƙwararren da ya dace"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku misalan fasaha a wasanni", action: "gane inda ake amfani da AI a wasanni da abin da ba zai iya yi muku ba", standard: "kuna ambaton aƙalla amfani uku da iyaka ɗaya" },
    { id: "O2", condition: "Ta amfani da wayarku ko kwamfuta", action: "buɗe mataimakin AI kyauta daga manhajarsa ko shafinsa na hukuma, aika saƙon farko, da fita daga asusu a kwamfutar da ake rabawa", standard: "bayan kun duba dokokin shekaru na manhajar" },
    { id: "O3", condition: "Idan kuna da ainihin jadawalinku na atisaye, wasa da aji", action: "rubuta prompt da ke faɗin buƙatarku, halin da kuke ciki da yadda kuke son amsar", standard: "ta yadda amsar farko za ta yi amfani" },
    { id: "O4", condition: "Idan amsar AI ba ta dace da makonku ba", action: "yin tambayoyin biyo baya, canji ɗaya a lokaci ɗaya, don gyara ta", standard: "kuna yin aƙalla gyara biyu" },
    { id: "O5", condition: "Idan amsar AI tana da shawara game da atisaye, lafiya, abinci ko cancanta", action: "tabbatar da ita tare da kocinku, mai kula da lafiyar 'yan wasa, masanin abinci, likita, ofishin ƙa'idoji ko shafin hukuma", standard: "kafin ku bi ta" },
    { id: "O6", condition: "Idan kuna rubuta prompt ko kun sami tayi ta intanet", action: "kiyaye bayanan sirri da na lafiya daga ciki da gane zambar da ake yi wa 'yan wasa", standard: "ba tare da bayar da kalmomin sirri, code, lambobin shaida ko bayanan lafiya ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Inda AI yake bayyana a wasanni",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne AI, da inda kuke ganin sa a wasanni",
          minutes: 4,
          goal: "Ambaci hanyoyi uku da ake amfani da AI a wasanni a yau, da faɗin abin da AI ba zai iya yi ba.",
          text: [
            "AI, ko artificial intelligence (basirar na'ura), yana nufin shirye-shiryen kwamfuta da ke yin ayyukan da yawanci sai mutum, kamar gane tsari, rubuta rubutu ko gane abin da ke cikin bidiyo.",
            "A wasanni kun riga kun gan shi: watsa shirye-shiryen wasa da ke nuna saurin ɗan wasa ko damar ƙwallo ta shiga, manhajojin da ke ƙidaya maimaitawarku (reps) ko bin gudunku, kayan bidiyo da ke yi wa kowane wasa alama, da shafukan ɗaukar 'yan wasa da ke jera 'yan wasa bisa ƙididdigarsu.",
            "AI mataimaki ne, ba koci ba ne, ba likita ba ne, kuma ba alƙalin wasa ba ne. Bai san jikinku, ƙungiyarku ko burinku ba sai kun faɗa masa, kuma yana iya yin kuskure. Kociyoyi da 'yan wasa ne har yanzu ke yanke shawara."
          ],
          words: [["AI", "gajartawar artificial intelligence (basirar na'ura): shirye-shiryen da ke koyon tsari daga bayanai, sannan su yi amfani da shi don amsawa, hasashe ko ƙirƙira."], ["Bayanai (data)", "gaskiya da lambobi, kamar lokaci, maki, maimaitawa ko bidiyo."]],
          slides: [
            { title: "AI a jimla ɗaya", bullets: ["Shirye-shiryen da ke koyon tsari daga bayanai", "Sannan su amsa, su yi hasashe ko su ƙirƙira"] },
            { title: "Inda kuke ganin sa a wasanni", bullets: ["Ƙididdigar talabijin kamar sauri da damar ƙwallo ta shiga", "Manhajojin da ke bin gudu da maimaitawa", "Kayan bidiyo da ke yi wa wasanni alama", "Shafukan ɗaukar 'yan wasa da ke jera su bisa ƙididdiga"] },
            { title: "Abin da AI ba shi ba", bullets: ["Ba kocinku ba ne, ba likita ba ne, ba alƙalin wasa ba ne", "Yana iya yin kuskure, ko da yana magana kamar ya tabbata", "Ku da kocinku ne ke yanke shawara"] }
          ],
          tryIt: "Ku rubuta wurare uku da kuka ga AI ko ƙididdiga masu wayo a wasanku a wannan kakar, misali hoton bayani a talabijin, manhajar motsa jiki ko kayan bidiyo da ƙungiyarku ke amfani da shi.",
          youCanNow: "bayyana mene ne AI, ambaci hanyoyi uku da yake bayyana a wasanni, da faɗin dalilin da yasa mutane ne har yanzu ke yanke shawara.",
          quickCheck: [
            { objective: "O1", q: "Mene ne ma'anar AI?", options: ["Wani nau'in abin sha na 'yan wasa", "Shirye-shiryen kwamfuta da ke yin ayyukan da yawanci sai mutum", "Na'urar atisaye", "Alamar alƙalin wasa"], answer: 1, why: "AI yana nufin shirye-shiryen kwamfuta da ke gane tsari, rubuta rubutu ko gane abin da ke cikin bidiyo." },
            { objective: "O1", q: "Wata manhajar AI ta ce ku canja matsayinku a ƙungiya. Me za ku yi?", options: ["Ku yi magana da kocinku; AI mataimaki ne, ba kocinku ba ne", "Ku canja matsayi nan take", "Ku bar ƙungiyar", "Ku daina sauraron kocinku daga yanzu"], answer: 0, why: "AI bai san ƙungiyarku ko burinku ba; kociyoyi da 'yan wasa ne har yanzu ke yanke shawara." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Buɗe mataimakin AI kyauta",
          minutes: 5,
          goal: "Buɗe mataimakin AI kyauta a wayarku ko kwamfuta, ku aika saƙonku na farko.",
          text: [
            "Mataimakin AI shiri ne na AI da kuke hira da shi da kalmomin yau da kullum. Sanannu masu kyauta su ne ChatGPT, Microsoft Copilot da Google Gemini.",
            "A waya, ku samo manhajar hukuma daga shagon manhajoji (app store), wadda ainihin kamfanin ya yi: OpenAI don ChatGPT, Microsoft don Copilot, Google don Gemini. A kwamfuta, ku buɗe burauzar intanet ku je chatgpt.com, copilot.microsoft.com ko gemini.google.com.",
            "Wasu mataimaka suna buƙatar asusu kuma suna da dokokin shekaru. Idan ba ku kai shekara 18 ba, ku duba dokokin shekaru na manhajar kuma ku fara tambayar iyaye ko mai kula da ku. A kwamfutar makaranta ko wadda ake rabawa, ku fita daga asusu idan kun gama."
          ],
          steps: ["Ku zaɓi wayarku ko kwamfuta.", "Waya: ku saka manhajar hukuma. Kwamfuta: ku rubuta adireshin shafin.", "Ku nemo akwatin saƙo kusa da ƙasan allo.", "Ku rubuta saƙon gaisuwa ku karanta amsar.", "A kwamfutar da ake rabawa, ku fita daga asusu ku rufe burauzar."],
          words: [["Mataimakin AI", "shirin AI da kuke hira da shi ta rubutu ko magana."], ["Burauzar intanet (browser)", "shirin da kuke amfani da shi don ziyartar shafukan intanet, kamar Chrome, Edge ko Safari."]],
          slides: [
            { title: "Mataimakan AI kyauta", bullets: ["ChatGPT (OpenAI)", "Microsoft Copilot", "Google Gemini"] },
            { title: "Yadda ake buɗe ɗaya", bullets: ["Waya: manhajar hukuma daga shagon manhajoji", "Kwamfuta: chatgpt.com, copilot.microsoft.com ko gemini.google.com", "Ku nemo akwatin saƙo a ƙasa"] },
            { title: "Kafin ku fara", bullets: ["Ba ku kai 18 ba? Ku duba dokokin shekaru ku tambayi iyaye", "Kwamfutar da ake rabawa: ku fita daga asusu idan kun gama"] }
          ],
          tryIt: "Ku buɗe mataimakin AI kyauta ɗaya ku rubuta: \"Ina buga [wasanku]. Ka bayyana a gajerun jimloli uku yadda ake amfani da AI a wasana.\" Ku karanta amsar.",
          youCanNow: "buɗe mataimakin AI kyauta, aika saƙo, da barin kwamfutar da ake rabawa lafiya.",
          quickCheck: [
            { objective: "O2", q: "Wane adireshin shafi ne ke buɗe Google Gemini a kwamfuta?", options: ["gemini-free-app.net", "freeai.win", "gemini.google.com", "googleai.gift"], answer: 2, why: "gemini.google.com shi ne adireshin hukuma; ku yi amfani da shafi ko manhajar ainihin kamfanin." },
            { objective: "O2", q: "Kun yi amfani da ChatGPT a kwamfutar ɗakin karatu don tsara makonku. Me za ku yi idan kun gama?", options: ["Ku bar ta a buɗe don abokin ƙungiyarku", "Ku ajiye kalmar sirrinku", "Ku kashe allon kawai", "Ku fita daga asusu ku rufe burauzar"], answer: 3, why: "Fita daga asusu a kwamfutocin da ake rabawa yana hana wasu shiga hirarku da asusunku." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rubuta prompt mai sarari game da wasanni",
          minutes: 5,
          goal: "Rubuta prompt mai buƙatarku, halin da kuke ciki da yadda kuke son amsar.",
          text: [
            "Abin da kuke rubutawa mataimakin AI ana kiransa prompt (umarni). Prompt mai sarari yana kawo amsa mai amfani tun farko.",
            "Prompt mai ƙarfi yana da sassa uku: abin da kuke buƙata, halin da kuke ciki, da yadda kuke son amsar. Misali: \"Ni ɗan wasan ƙwallon ƙafa ne na tsakiya a makarantar sakandare. Ina da atisaye daga Litinin zuwa Alhamis ƙarfe 3:30 zuwa 5:30, da wasa ranar Juma'a. Ka yi mini jadawalin karatu mai sauƙi na makon a kewayen atisaye. Ka sa shi a tebur.\"",
            "Prompt mai rauni kamar \"taimake ni in ƙara ƙwarewa\" yana sa mataimakin ya yi tsammani. Ku ƙara wasan, matsayinku, jadawalinku da tsarin amsar."
          ],
          steps: ["Ku faɗi abin da kuke buƙata.", "Ku ƙara wasanku, matsayinku, matakinku da jadawalinku (ba tare da bayanan sirri ba).", "Ku faɗi tsarin amsar: jeri, tebur, gajerun matakai ko kalmomi masu sauƙi."],
          words: [["Prompt (umarni)", "abin da kuke rubutawa ko faɗa wa mataimakin AI don neman wani abu."], ["Tsari (format)", "yanayin amsar, kamar jeri, tebur ko matakai."]],
          slides: [
            { title: "Sassa uku na prompt mai kyau", bullets: ["1. Abin da kuke buƙata", "2. Wasanku, matsayinku, matakinku da jadawalinku", "3. Tsarin da kuke so"] },
            { title: "Mai rauni da mai sarari", bullets: ["Mai rauni: \"taimake ni in ƙara ƙwarewa\"", "Mai sarari: \"Ni ɗan wasan ƙwallon ƙafa ne na tsakiya, atisaye Litinin-Alhamis...\"", "\"...ka yi jadawalin karatu a tebur\""] },
            { title: "Ku ƙara bayani, ba sirri ba", bullets: ["E: wasa, matsayi, lokutan atisaye", "A'a: cikakken suna, lambar shaidar makaranta, bayanan lafiya"] }
          ],
          tryIt: "Ku rubuta prompt mai sassa uku da ke neman jadawalin karatu ko na ranar hutu a kewayen ainihin makon atisayenku. Ku aika shi ku karanta amsar.",
          youCanNow: "rubuta prompt mai sarari game da wasanni da ke da buƙatarku, halin da kuke ciki da tsarin amsar.",
          quickCheck: [
            { objective: "O3", q: "Mene ne sashen tsari (format) na prompt?", options: ["Yadda kuke son amsar, kamar tebur ko gajeren jeri", "Wasanku", "Sunan kocinku", "Kalmar sirrinku"], answer: 0, why: "Tsarin yana faɗa wa mataimakin yadda zai shirya amsar." },
            { objective: "O3", q: "Kuna son taimako wajen tsara aikin gida a kewayen ƙwallon kwando. Wane prompt ne ya fi kyau?", options: ["\"aikin gida\"", "\"taimake ni in ƙara ƙwarewa\"", "\"ƙwallon kwando\"", "\"Ni ɗan wasan kwando ne na sakandare, ina atisaye ƙarfe 3 zuwa 5 na yamma Litinin zuwa Alhamis, da wasa ranar Juma'a. Ka yi jadawalin aikin gida na makon a tebur.\""], answer: 3, why: "Yana ba da buƙata, halin da ake ciki da tsarin amsa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Inda AI yake bayyana a wasanni",
        questions: [
          { objective: "O1", q: "Wanne ne misalin AI a wasanni?", options: ["Usur (whistle)", "Littafin maki na takarda", "Hoton bayani a talabijin da ke nuna damar ƙwallo ta shiga", "Motar ƙungiya"], answer: 2, why: "Wannan hoton ya fito ne daga shirin da ya koyi tsari daga harbe-harbe masu yawa na baya." },
          { objective: "O1", q: "Wata manhajar AI ta ce ku ci gaba da wasa duk da zafi mai tsanani a gwiwa. Me ya kamata ku yi?", options: ["Ku tsaya ku yi magana da mai kula da lafiyar 'yan wasa ko likita", "Ku bi ta, domin AI ya fi kowa sani", "Ku yi watsi da kocinku", "Ku nemi abokin ƙungiya ya yanke shawara"], answer: 0, why: "AI ba likita ba ne. Tambayoyin zafi da rauni na ƙwararre ne." },
          { objective: "O2", q: "Daga ina ya kamata ku samo manhajar AI don wayarku?", options: ["Hanyar haɗi (link) daga baƙo a saƙonninku (DM)", "Tallar da ke tasowa (pop-up)", "Kowane shafin intanet", "Shagon manhajoji na hukuma, daga ainihin kamfanin"], answer: 3, why: "Shagon manhajoji na hukuma da manhajar ainihin kamfanin su ne zaɓi mai aminci." },
          { objective: "O3", q: "Mene ne sassa uku na prompt mai sarari?", options: ["Suna, makaranta, lambar shaida", "Buƙata, halin da ake ciki, tsari", "Wasa, launin ƙungiya, alamar ƙungiya", "Sannu, don Allah, na gode"], answer: 1, why: "Buƙata, halin da ake ciki da tsari suna ba mataimakin abin da yake buƙata don taimakawa." },
          { objective: "O3", q: "Wane prompt ne zai fi yiwuwa ya kawo amsa mafi amfani?", options: ["\"taimake ni in ƙara ƙwarewa\"", "\"Ni ɗan wasan kwando ne na jami'a mai jagorantar wasa, ina atisaye ƙarfe 6-8 na safe. Ka yi jadawalin aji da hutu na makon a tebur.\"", "\"ƙwallon kwando\"", "\"faɗa mini komai\""], answer: 1, why: "Yana da buƙata, halin da ake ciki da tsarin amsa." }
        ]
      }
    },
    {
      name: "Babi na 2: Amfani da AI da ƙarfin gwiwa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Inganta amsa",
          minutes: 4,
          goal: "Yi amfani da tambayoyin biyo baya don gyara amsa har ta dace da makonku.",
          text: [
            "Amsar farko daftari ce. Mataimakin yana tuna abin da kuka faɗa a baya a cikin hira ɗaya, don haka kuna iya neman canje-canje.",
            "Tambayoyin biyo baya masu amfani ga 'yan wasa: \"Ka mayar da lokacin karatu bayan abincin dare a ranakun wasa.\" \"Ka gajarta shi.\" \"Ka ƙara ranar hutu.\" \"Ka yi amfani da kalmomi masu sauƙi.\" \"Ka bayyana dalilin da yasa ka sa wannan a nan.\"",
            "Ku nemi canji ɗaya a lokaci ɗaya. Idan hirar ta kauce hanya, ku fara sabuwar hira da prompt mafi sarari."
          ],
          steps: ["Ku karanta amsar farko.", "Ku nemo abin da bai dace da ainihin jadawalinku ba.", "Ku nemi canji ɗaya.", "Ku maimaita har ya dace."],
          words: [["Tambayar biyo baya (follow-up)", "buƙata ta biyu da ke ginuwa kan amsar da kuka samu."]],
          slides: [
            { title: "Amsar farko = daftari", bullets: ["Kuna iya neman canje-canje", "Yana tuna hira ɗaya"] },
            { title: "Tambayoyin biyo baya masu aiki", bullets: ["\"Ka ƙara ranar hutu.\"", "\"Ka mayar da lokacin karatu bayan abincin dare a ranakun wasa.\"", "\"Ka bayyana dalilin da yasa ka sa wannan a nan.\""] },
            { title: "Ta kauce hanya?", bullets: ["Canji ɗaya a lokaci ɗaya", "Ko ku fara sabuwar hira da prompt mafi sarari"] }
          ],
          tryIt: "Ku ɗauki jadawalinku daga Darasi na 3. Ku nemi canje-canje biyu, ɗaya bayan ɗaya, don ya dace da ainihin makonku. Ku kwatanta na farko da na ƙarshe.",
          youCanNow: "inganta amsar AI ta hanyar tambayoyin biyo baya masu sarari.",
          quickCheck: [
            { objective: "O4", q: "Me yasa za ku iya neman mataimakin ya canja amsarsa?", options: ["Yana manta kowane saƙo", "Yana tuna abin da kuka faɗa a baya a cikin hira ɗaya", "Shi ne kocinku", "Dole ne ya yarda da ku"], answer: 1, why: "A cikin hira ɗaya mataimakin yana tuna saƙonnin baya, don haka kuna iya neman canje-canje." },
            { objective: "O4", q: "Shirin ya sa karatu mai yawa daidai kafin wasanku na ranar Juma'a. Me za ku aika?", options: ["\"Ba daidai ba.\"", "\"Ka sake farawa ka ƙara.\"", "\"Ka mayar da lokacin karatu na ranar wasa zuwa bayan abincin dare.\"", "Babu komai; ku bi shi duk da haka"], answer: 2, why: "Tambayar biyo baya mai sarari da ke faɗin canji ɗaya tana gyara shirin." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Tabbatar da amsoshin AI tare da kocinku",
          minutes: 5,
          goal: "Gane sassan amsar AI da ke buƙatar tabbatarwa, da tabbatar da su tare da mutumin ko majiyar da ta dace.",
          text: [
            "AI yana iya ƙirƙirar abubuwa ko ya ba da tsofaffin bayanai. Wani lokaci ana kiran wannan hallucination (hasashen ƙarya). A wasanni, wannan zai iya zama doka marar daidai, ƙididdiga ƙirƙirarriya, tsohuwar ranar ɗaukar 'yan wasa ko shawarar atisaye marar aminci.",
            "Koyaushe ku tabbatar da nauyin atisaye, shawarar rauni da lafiya, abinci, ƙarin abinci (supplements), cancanta, ɗaukar 'yan wasa da dokokin NIL. Ku tabbatar tare da kocinku, mai kula da lafiyar 'yan wasa, likita, masanin abinci mai rajista (registered dietitian), ko ofishin ƙa'idoji na makarantarku, da kuma shafukan hukuma kamar ncaa.org.",
            "Kyakkyawar al'ada: ku tambayi mataimakin \"Me ya kamata in sake dubawa tare da kocina?\" Sannan ku tambayi kocinku da gaske."
          ],
          steps: ["Ku yi wa kowace gaskiya, lamba, doka ko shawarar lafiya a cikin amsar alama.", "Ku yanke wanda ya kamata ya tabbatar da ita: koci, mai kula da lafiyar 'yan wasa, likita, masanin abinci ko ofishin ƙa'idoji.", "Ku duba shafukan hukuma don dokoki.", "Idan ba su yi daidai ba, ku bi mutumin ko majiyar hukuma."],
          words: [["Hallucination (hasashen ƙarya)", "lokacin da AI ya rubuta abin da yake kama da gaskiya amma ƙirƙirarre ne."], ["Ofishin ƙa'idoji (compliance office)", "ofishin makaranta da ya san dokokin wasanni, har da dokokin ɗaukar 'yan wasa da na NIL."]],
          slides: [
            { title: "AI yana iya yin kuskure game da", bullets: ["Dokoki da ranakun ɗaukar 'yan wasa", "Ƙididdiga da tarihin nasarori", "Shawarar atisaye, rauni da abinci"] },
            { title: "Wa ke tabbatar da me", bullets: ["Atisaye: koci", "Rauni da lafiya: mai kula da lafiyar 'yan wasa ko likita", "Abinci: masanin abinci mai rajista", "Dokoki da NIL: ofishin ƙa'idoji"] },
            { title: "Kyakkyawar al'ada", bullets: ["Ku tambaya: \"Me ya kamata in sake dubawa?\"", "Sannan ku tabbatar tare da mutum na gaske"] }
          ],
          sources: [{ name: "NCAA: Suna, Hoto da Kamanni (NIL, dokokin 'yan wasan jami'a)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }],
          tryIt: "Ku tambayi mataimakin AI tambaya ɗaya game da dokar wasanku, misali tsayawa nawa (timeouts) kowace ƙungiya take samu. Sannan ku nemo amsar a littafin dokoki na hukuma na gasarku ko ku tambayi kocinku, ku ga ko ta yi daidai.",
          youCanNow: "gane abin da ke buƙatar tabbatarwa a amsar AI, da kai shi ga mutumin ko majiyar hukuma da ta dace.",
          quickCheck: [
            { objective: "O5", q: "Mene ne hallucination na AI?", options: ["Mafarki lokacin ɗan barci", "Maimaita bidiyo", "Amsa mai sauri", "Abin da AI ya ƙirƙira wanda yake kama da gaskiya"], answer: 3, why: "AI yana iya ƙirƙirar dokoki, ƙididdiga ko ranaku da suke kama da na gaske." },
            { objective: "O5", q: "AI ya ba da shawarar wani ƙarin abinci (supplement) don ku murmure da sauri. Wa zai tabbatar da shi?", options: ["Abokin ƙungiya", "Masanin abinci mai rajista, likitanku ko mai kula da lafiyar 'yan wasa", "Shafin intanet na ƙarin abincin", "Babu kowa; AI koyaushe daidai yake"], answer: 1, why: "Dole a tabbatar da ƙarin abinci da shawarar abinci tare da ƙwararren da ya dace, da kuma ofishin ƙa'idoji don cancanta." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kiyaye bayananku na sirri da na lafiya",
          minutes: 5,
          goal: "Yi amfani da AI don aiki na gaske ba tare da bayar da bayanan sirri, na lafiya ko na asusu ba.",
          text: [
            "Kada ku rubuta bayanan sirri a mataimakin AI: kalmomin sirri, lambar Social Security (lambar shaidar Amurka) ko lambobin shaida, adireshin gidanku, bayanan banki, ko bayanan lafiya kamar rahoton rauni, magunguna ko sakamakon gwaje-gwaje.",
            "Har yanzu kuna iya samun taimako. Ku rubuta \"[makarantata]\" ko \"raunin tsokar bayan cinya da mai kula da lafiyar 'yan wasa ke jinyarsa\" a maimakon sunaye da bayanan likita. Ku yi tambayoyi na gama-gari; ku kai tambayoyi na musamman ga ƙwararre.",
            "Ku yi hankali da zambar da ake yi wa 'yan wasa: masu ɗaukar 'yan wasa na bogi, yarjejeniyoyin kamfanoni na bogi da wakilai (agents) na bogi da ke gaggauta ku, ke neman kuɗi tun farko ko ke neman code na shiga asusu. Ku fara tabbatarwa tare da kocinku ko ofishin ƙa'idoji."
          ],
          steps: ["Ku karanta prompt ɗinku kafin ku aika.", "Ku cire sunaye, lambobi, kalmomin sirri da bayanan lafiya.", "Ku yi amfani da madadi kamar \"[makarantata]\".", "Ku ɗauki tayi na gaggawa, kuɗin gaba da neman code a matsayin alamun gargaɗi."],
          words: [["Madadi (placeholder)", "abin da ke tsayawa a madadin bayani na gaske, kamar \"[makarantata]\", don ya kasance a sirri."], ["Zamba", "dabarar satar kuɗi, asusu ko bayanai."]],
          slides: [
            { title: "Kada ku taɓa rubutawa AI", bullets: ["Kalmomin sirri da code na shiga asusu", "Lambobin shaida ko na banki, adireshin gida", "Rahoton rauni, magunguna, sakamakon gwaje-gwaje"] },
            { title: "Ku yi amfani da madadi", bullets: ["\"[makarantata]\" a maimakon sunan", "Tambaya ta gama-gari ga AI, ta musamman ga ƙwararre"] },
            { title: "Zambar da ake yi wa 'yan wasa", bullets: ["Masu ɗaukar 'yan wasa na bogi da wakilai na bogi", "Yarjejeniyoyin kamfanoni na bogi masu neman kuɗi tun farko", "Duk wanda ke neman code na shiga asusu"] }
          ],
          tryIt: "Aikin ƙarshe: ku yi shirinku na mako ɗaya na atisaye da karatu da mataimakin AI. Ku yi amfani da prompt mai sassa uku, ku nemi gyara biyu, ku cire bayanan sirri da na lafiya, sannan ku nuna shirin ga kocinku ko mai kula da lafiyar 'yan wasa.",
          youCanNow: "amfani da AI don tsara makonku yayin da kuke kiyaye bayanan sirri da na lafiya, da gane zambar da ake yi wa 'yan wasa.",
          quickCheck: [
            { objective: "O6", q: "Wane bayani ya kamata ku bar shi a waje daga prompt?", options: ["Lokutan atisayenku", "Wasanku", "Rahoton raunin ku da jerin magungunanku", "Cewa kuna son tebur"], answer: 2, why: "Bayanan lafiya kamar rahoton rauni da magunguna ba sa shiga kayan AI." },
            { objective: "O6", q: "Wani \"wakili\" ya aiko muku da saƙo game da yarjejeniyar kamfani kuma yana neman code na shiga asusu don a gama yau. Me za ku yi?", options: ["Kada ku taɓa bayar da code ɗin, kuma ku tabbatar tare da kocinku ko ofishin ƙa'idoji", "Ku aika code ɗin da sauri", "Ku biya kuɗin don riƙe yarjejeniyar", "Ku ba shi kalmar sirrinku a maimakon haka"], answer: 0, why: "Gaggauta ku da neman code alamun gargaɗi ne na zamba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Amfani da AI da ƙarfin gwiwa",
        questions: [
          { objective: "O4", q: "Shirin AI ba shi da ranar hutu. Mene ne mataki mafi kyau na gaba?", options: ["Ku karɓe shi duk da haka", "Ku goge manhajar", "Ku yi atisaye kowace rana har abada", "Ku tambaya: \"Ka ƙara ranar hutu.\""], answer: 3, why: "Tambayar biyo baya tana neman mataimakin ya canja amsarsa." },
          { objective: "O5", q: "Wa ya kamata ya tabbatar da shawarar AI game da rauni?", options: ["Mai kula da lafiyar 'yan wasa ko likitanku", "Abokin ƙungiya", "AI da kansa", "Sharhi a kafofin sada zumunta"], answer: 0, why: "Tambayoyin lafiya da rauni na ƙwararre ne." },
          { objective: "O5", q: "Mene ne hallucination a AI?", options: ["Mafarki kafin wasa", "Intanet mai jinkiri", "Abin da AI ya ƙirƙira wanda yake kama da gaskiya", "Wani nau'in atisaye"], answer: 2, why: "AI yana iya ƙirƙirar gaskiya, dokoki ko ƙididdiga da suke kama da na gaske." },
          { objective: "O6", q: "Wane bayani ne ya dace a sa a cikin prompt?", options: ["Kalmar sirrinku", "Jerin magungunanku", "Adireshin gidanku", "Lokutan atisayenku"], answer: 3, why: "Lokutan atisaye suna taimaka wa amsar kuma ba sirri ba ne." },
          { objective: "O6", q: "Wani \"mai ɗaukar 'yan wasa\" ya aiko muku da saƙo yana neman kuɗi don aika bidiyon wasanninku ga kociyoyi yau. Me za ku yi?", options: ["Ku biya da sauri kafin damar ta ƙare", "Ku fara tabbatarwa tare da kocinku ko ofishin ƙa'idoji", "Ku aika code na shiga asusu", "Ku aika lambar shaidarku"], answer: 1, why: "Gaggawa da kuɗin gaba alamun gargaɗi ne. Ku tabbatar kafin ku yi komai." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gabatarwa ga AI a Wasanni",
    questions: [
      { objective: "O1", q: "Mafi kyawun bayanin AI shi ne:", options: ["Sabon nau'in ƙwallo", "Alƙalin wasa", "Shirye-shiryen da ke koyon tsari daga bayanai", "Gasar wasanni"], answer: 2, why: "AI yana koyon tsari daga bayanai kuma yana amfani da shi don amsawa ko hasashe." },
      { objective: "O1", q: "Wanne BA amfani da AI ba ne a wasanni?", options: ["Ɗaure igiyar takalminku", "Yi wa wasanni alama a bidiyon wasa", "Bin gudu da manhaja", "Hasashen damar ƙwallo ta shiga"], answer: 0, why: "Ɗaure igiyar takalmi aikin mutum ne; sauran suna amfani da AI." },
      { objective: "O1", q: "Wa ke yanke shawarar ƙarshe game da atisayenku?", options: ["Ku da kocinku", "AI", "Wata manhaja kawai", "Babu kowa"], answer: 0, why: "AI yana taimakawa; mutane ne ke yanke shawara." },
      { objective: "O2", q: "Wanne ne sanannen mataimakin AI kyauta?", options: ["Agogon ƙidayar lokaci (stopwatch)", "Allon maki", "Google Gemini", "Rigar ƙungiya"], answer: 2, why: "Gemini, ChatGPT da Copilot mataimakan AI ne masu kyauta." },
      { objective: "O2", q: "Kuna da shekara 15 kuma kuna son amfani da mataimakin AI. Me za ku fara yi?", options: ["Ku yi ƙarya game da shekarunku", "Ku duba dokokin shekaru na manhajar ku tambayi iyaye ko mai kula da ku", "Ku yi amfani da asusun aboki", "Ku raba kalmar sirrinku"], answer: 1, why: "Mataimaka da yawa suna da dokokin shekaru; ya kamata iyaye su sani." },
      { objective: "O2", q: "A ina kuke yawan rubutawa mataimakin AI?", options: ["Alamar batir", "Kyamara", "Adireshin makarantarku", "Akwatin saƙo kusa da ƙasa"], answer: 3, why: "Akwatin saƙo shi ne inda kuke rubuta prompt ɗinku." },
      { objective: "O2", q: "Bayan amfani da kwamfutar makaranta da ake rabawa, ya kamata ku:", options: ["Ci gaba da kasancewa a cikin asusu", "Ajiye kalmar sirrinku", "Fita daga asusu ku rufe burauzar", "Bar takarda mai kalmar sirrinku"], answer: 2, why: "Fita daga asusu yana kiyaye asusunku." },
      { objective: "O3", q: "Mene ne prompt?", options: ["Atisayen dumama jiki", "Waƙar ƙarfafa ƙungiya", "Tsayawar wasa (timeout)", "Abin da kuke rubutawa ko faɗa wa mataimakin AI"], answer: 3, why: "Prompt ita ce buƙatarku ga AI." },
      { objective: "O3", q: "Wane sashe ne ke faɗa wa AI yadda zai shirya amsar?", options: ["Tsarin, kamar tebur ko jeri", "Lambar rigarku", "Kalmar sirrinku", "Lambar wayar kocinku"], answer: 0, why: "Faɗin tsarin yana kawo amsar a yanayin da kuke buƙata." },
      { objective: "O3", q: "Wane prompt ne ya fi sarari?", options: ["\"atisaye\"", "\"Ni ɗan tseren gajeren zango ne na jami'a, ina atisaye ƙarfe 3-5 na yamma. Ka yi shirin karatu na makon a tebur.\"", "\"taimako\"", "\"wasanni\""], answer: 1, why: "Yana da buƙata, halin da ake ciki da tsari." },
      { objective: "O4", q: "Amsar farko ba ta dace da ranar wasanku ba. Ya kamata ku:", options: ["Haƙura", "Karɓe ta", "Yi tambayar biyo baya don canja ranar wasa", "Biya kuɗin sabuwar manhaja"], answer: 2, why: "Tambayoyin biyo baya suna gyara sassan da ba su dace ba." },
      { objective: "O4", q: "Canje-canje nawa ya kamata ku nema a lokaci ɗaya don abu ya kasance a sarari?", options: ["Ɗaya bayan ɗaya", "Goma", "Babu ko ɗaya", "Duk yawan da za ku iya rubutawa"], answer: 0, why: "Canji ɗaya a lokaci ɗaya yana kiyaye amsar a kan hanya." },
      { objective: "O4", q: "Hira tana ci gaba da kauce hanya. Mataki mai kyau shi ne:", options: ["Rubuta kalmar sirrinku", "Maimaita kalmomi iri ɗaya", "Daina atisaye", "Fara sabuwar hira da prompt mafi sarari"], answer: 3, why: "Sabuwar hira da prompt mafi sarari yawanci tana aiki fiye da haka." },
      { objective: "O5", q: "AI ya ba ku wata doka game da ɗaukar 'yan wasa. Ya kamata ku:", options: ["Saka ta a intanet a matsayin gaskiya", "Tabbatar da ita a ncaa.org ko tare da ofishin ƙa'idoji", "Yi watsi da dukkan dokoki", "Sake tambayar AI ku amince da shi"], answer: 1, why: "Dokoki suna canjawa; ku tabbatar da majiyar hukuma." },
      { objective: "O5", q: "Wane ne mutumin da ya dace ya tabbatar da shirin abinci?", options: ["Wani mai tasiri a kafofin sada zumunta", "Masanin abinci mai rajista", "AI", "Wasan bidiyo"], answer: 1, why: "An horar da masana abinci masu rajista don ba da shawarar abinci." },
      { objective: "O5", q: "Wa ya san dokokin NIL da na ɗaukar 'yan wasa na makarantarku?", options: ["Wurin cin abinci", "Direban mota", "Ƙungiyar abokan hamayya", "Ofishin ƙa'idoji"], answer: 3, why: "Ofishin ƙa'idoji ne ke kula da dokokin wasanni." },
      { objective: "O6", q: "Wanne ne kada ku TAƁA rubutawa mataimakin AI?", options: ["Jerin magungunanku", "Jadawalin atisayenku", "Wasanku", "Matsayinku"], answer: 0, why: "Magunguna da bayanan lafiya sirri ne." },
      { objective: "O6", q: "Ta yaya za ku yi tambaya game da rauni ba tare da bayar da bayanan lafiya ba?", options: ["Ku liƙa rahoton MRI ɗinku", "Ku rubuta bayanan likitanku", "Ku yi tambaya ta gama-gari, ku kai ta musamman ga mai kula da lafiyar 'yan wasa", "Ku raba lambar inshorarku"], answer: 2, why: "Tambayoyi na gama-gari ba laifi ba ne; kulawa ta musamman ta ƙwararre ce." },
      { objective: "O6", q: "Wata yarjejeniyar kamfani tana neman ku biya kuɗi tun farko don shiga. Wannan:", options: ["Ya saba a dukkan yarjejeniyoyi", "NCAA ce ta wajabta shi", "Alama ce mai kyau", "Alamar gargaɗin zamba ce"], answer: 3, why: "Kamfanoni na gaske suna biyan ku; kuɗin gaba alamar zamba ce da aka saba gani." },
      { objective: "O6", q: "Wani yana neman code ɗin da aka turo wayarku ta tes yanzu. Ya kamata ku:", options: ["Karanta masa shi", "Kada ku taɓa bayar da shi", "Saka shi a intanet", "Tura shi ga ƙungiyarku ta tes"], answer: 1, why: "Wannan code yana kare asusunku. Masu ɗaukar 'yan wasa da kamfanoni na gaske ba sa taɓa neman sa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      4,
      7,
      10,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Prompt mai sarari",
        objective: "O3",
        notYet: "Prompt ɗin ba shi da sarari, misali \"yi mini shiri\".",
        meets: "Prompt ɗin yana ba da buƙata, ainihin jadawalinku na atisaye, wasa da aji, da tsarin amsa.",
        exceeds: "Amsar farko ta riga ta dace da yawancin makonku."
      },
      {
        name: "An inganta shi",
        objective: "O4",
        notYet: "An yi amfani da amsar farko kamar yadda take.",
        meets: "An nemi aƙalla gyara biyu, ɗaya bayan ɗaya.",
        exceeds: "Za a iya faɗin abin da kowane canji ya gyara, kamar ranar hutu ko lokacin ranar wasa."
      },
      {
        name: "Babu bayanan sirri da na lafiya",
        objective: "O6",
        notYet: "Prompt ɗin yana da suna, lambar shaida, kalmar sirri ko bayanin lafiya.",
        meets: "Babu bayanan sirri ko na lafiya a cikin prompt ko shirin.",
        exceeds: "An yi amfani da madadi kamar \"[makarantata]\", kuma an bar tambayoyin lafiya ga mai kula da lafiyar 'yan wasa."
      },
      {
        name: "An tabbatar tare da koci",
        objective: "O5",
        notYet: "An bi shirin ba tare da an nuna wa kowa ba.",
        meets: "An nuna shirin ga koci ko mai kula da lafiyar 'yan wasa kafin a bi shi.",
        exceeds: "An canja shirin bisa ra'ayinsu kuma za a iya faɗin abin da ya canja."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce sun yi amfani da shirin da AI ya yi don atisaye da karatu cikin kwanaki 30 (binciken biyo baya)",
      "Kociyoyi ko masu kula da lafiyar 'yan wasa da suka ce 'yan wasa suna tabbatar da shawarar AI tare da su",
      "Masu koyo da suka fara wani kwas na 'Yan Wasa cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani, ko kwamfutar makaranta ko ta ɗakin karatu mai intanet",
      "Mataimakin AI kyauta: ChatGPT, Microsoft Copilot ko Google Gemini",
      "Ainihin jadawalin mai koyo na atisaye, wasa da aji na mako ɗaya",
      "Kusan minti 60 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku duba dokokin shekaru na kowace manhajar AI don rukuninku; masu koyo da ba su kai shekara 18 ba suna buƙatar izinin iyaye ko mai kula da su.",
      "Ku nemi koci ko mai kula da lafiyar 'yan wasa ya duba shirye-shiryen ƙarshe tare da 'yan wasa.",
      "Kada ku taɓa neman 'yan wasa su rubuta rahoton rauni, magunguna ko lambobin shaida a kayan AI.",
      "Ku tattauna zambar masu ɗaukar 'yan wasa na bogi da yarjejeniyoyin kamfanoni na bogi, kuma ku nuna wa 'yan wasa ofishin ƙa'idoji don tambayoyin NIL.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

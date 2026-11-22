"use strict";

// Koach Learn course, Hausa (ha) translation of athletes/athletes-ai-training-performance.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "athletes-ai-training-performance-ha",
  lang: "ha",
  translationOf: "athletes-ai-training-performance",
  category: "Athletes",
  name: "AI don Atisaye da Ƙwazo a Wasanni",
  skills: "Sanya burin atisaye da ake iya aunawa, Rubuta bayanan atisaye, Karanta yanayin atisaye mai sauƙi, Shirya tambayar makon atisaye ga kocinku da AI, Gane shawarar atisaye ta AI marar aminci",
  outcome: "sanya burin ƙwazo ɗaya da ake iya aunawa, rubuta bayanan atisaye na makonni huɗu a takardar lissafi (sheet), amfani da mataimakin AI don taƙaita yanayin, da kawo wa kocinku tambaya mai sarari kuma mai aminci game da atisayenku.",
  about: [
    "Wannan kwas ɗin na 'yan wasa ne da ke son yin atisaye da hikima, da kociyoyi da ke son 'yan wasansu su fahimci lambobinsu. Ilimi ne na gama-gari, ba shirin atisaye ba: kocinku da mai kula da lafiyar 'yan wasa (athletic trainer) ne ke tsara atisayenku.",
    "Za ku sanya burin da za ku iya aunawa, ku bibiyi lambobin da suka dace, ku ga abin da suke nunawa, kuma ku yi amfani da mataimakin AI don tsara bayananku da shirya tattaunawa mafi kyau da kocinku.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku zaɓi buri ɗaya da ake iya aunawa, ku rubuta bayanan atisaye na aƙalla zama huɗu a Google Sheet (kwanan wata, abin da kuka yi, ƙoƙari 1-10, sakamako), ku nemi mataimakin AI ya bayyana yanayin da kalmomi masu sauƙi, sannan ku rubuta tambayoyi uku game da zangon atisayenku na gaba don kai wa kocinku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "'Yan wasan sakandare, na jami'a da na kulob da ke son yin atisaye da hikima, da kociyoyi da ke son 'yan wasansu su fahimci lambobinsu.",
    startingPoint: "Suna yin atisaye akai-akai a ƙarƙashin koci kuma suna amfani da wayar zamani kowace rana. Da yawa suna da buri kamar \"in ƙara sauri\" amma ba su da maƙasudin da ake iya aunawa, ba su da rubutun atisaye na kullum, kuma ba su saba karanta jadawali ko auna shawarar atisaye ta intanet ba.",
    gap: "Ba tare da burin da ake iya aunawa da rubutu mai sauƙi ba, 'yan wasa ba za su iya ganin ko atisaye yana aiki ba, kuma AI ko shirye-shiryen intanet na iya tura shawara marar aminci. Lambobi masu sarari da tambayoyi masu aminci suna inganta tattaunawa da koci kuma suna kare lafiyar ɗan wasa.",
    constraints: [
      "Kalmomi masu sauƙi a kusan matakin karatu na aji 7",
      "Waya ko kwamfuta mai Google Sheets kyauta da mataimakin AI kyauta",
      "Kusan minti 60 na darussa, da makonni huɗu na rubutu tare da atisaye na yau da kullum",
      "Ilimi na gama-gari kawai: koci da mai kula da lafiyar 'yan wasa ne ke tsara atisaye, nauyi da dawowa bayan rauni",
      "Bayanan lafiya da takardun lafiya suna zama a sirri, kuma ba a taɓa liƙa su a mataimakin AI ba"
    ],
    prerequisites: "Babu. Kwas ɗin \"Kayan Aikin AI ga 'Yan Wasa\" zai taimaka idan ba ku taɓa amfani da Google Sheets ba."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku burin atisaye marar sarari", action: "sake rubuta shi a matsayin buri ɗaya da ake iya aunawa mai lamba, kwanan wata da gwaji", standard: "da dukkan sassa huɗu a ciki, kuma kun yarda da burin tare da kocinku" },
    { id: "O2", condition: "Ta amfani da Google Sheets", action: "kafa da kiyaye rubutun atisaye mai Kwanan wata, Zama, Ƙoƙari da Sakamako", standard: "da layi da aka cike bayan kowane zama na aƙalla zama huɗu" },
    { id: "O3", condition: "Idan aka ba ku jadawalin rubutun atisayenku", action: "bayyana yanayin cikin jimla ɗaya ko biyu da kwatanta ƙoƙari da sakamako", standard: "kuna faɗin hanyar da yake bi daidai, kuma kuna duba lissafin AI da kanku" },
    { id: "O4", condition: "Idan aka ba ku jerin ayyukan atisaye", action: "gane waɗanne ayyuka AI zai iya taimakawa da su, da waɗanda na kocinku ko mai kula da lafiyar 'yan wasa ne", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O5", condition: "Idan aka ba ku shawarar atisaye daga AI ko intanet", action: "gane alamun haɗari kamar yin atisaye cikin ciwo, rage ruwa ko ƙarin abinci (supplements) masu haɗari", standard: "kuna gane kowace alamar haɗari, kuma kuna kai ta ga kocinku ko mai kula da lafiyar 'yan wasa maimakon bin ta" },
    { id: "O6", condition: "Ta amfani da burinku, rubutunku da mataimakin AI", action: "rubuta bayanin halin da ake ciki ga koci mai jimloli uku da tambayoyi uku game da zangon atisayenku na gaba", standard: "da kalmominku, ba tare da raba takardun lafiya ba, kuma kuna amfani da amsar kocinku don sabunta shirinku" }
  ],
  chapters: [
    {
      name: "Babi na 1: Buri da bayanai",
      lessons: [
        {
          objectives: ["O1"],
          title: "Sanya burin da za ku iya aunawa",
          minutes: 5,
          goal: "Mayar da burin da ba shi da sarari zuwa wanda ake iya aunawa mai kwanan wata.",
          text: [
            "\"In ƙara sauri\" fata ne kawai. \"In gudu yadi 40 da sauri fiye da yanzu da daƙiƙa 0.1 kafin ƙarshen lokacin shirin kakar wasa, ana auna lokaci ta hanya ɗaya kowane lokaci\" buri ne da za ku iya aunawa.",
            "Burin atisaye mai kyau yana faɗin abu ɗaya, lamba, kwanan wata, da yadda za a auna shi. Ya kamata ku yarda da shi tare da kocinku don ya dace da shirin ƙungiya.",
            "Mataimakin AI zai iya taimaka muku sake rubuta burin da ba shi da sarari. Ku gwada: \"Ka mayar da burina 'in ƙara ƙarfi don ƙwallon ƙafa' zuwa buri ɗaya da ake iya aunawa mai kwanan wata. Ka yi mini tambayoyi idan kana buƙatar ƙarin bayani.\""
          ],
          steps: ["Ku rubuta burinku da kalmominku.", "Ku ƙara lamba ɗaya da za a auna.", "Ku ƙara kwanan wata.", "Ku faɗi yadda da lokacin da za a gwada shi.", "Ku yarda da shi tare da kocinku."],
          words: [["Mai aunuwa (measurable)", "abin da za ku iya ƙirgawa ko auna lokacinsa, don ku san ko ya canja."], ["Lambar farko (baseline)", "lambarku ta farko kafin ku fara atisaye don burin."]],
          slides: [
            { title: "Fata da buri", bullets: ["Fata: \"in ƙara sauri\"", "Buri: \"gudun yadi 40 da sauri da daƙiƙa 0.1 kafin ƙarshen shirin kakar wasa\""] },
            { title: "Buri yana da", bullets: ["Abu ɗaya", "Lamba da kwanan wata", "Yadda za a gwada shi"] },
            { title: "Ku yi amfani da AI don inganta shi", bullets: ["\"Ka mayar da burina zuwa wanda ake iya aunawa\"", "Sannan ku yarda da shi tare da kocinku"] }
          ],
          tryIt: "Ku rubuta buri ɗaya marar sarari. Ku nemi mataimakin AI ya mayar da shi mai aunuwa mai kwanan wata. Ku gyara shi don ya zama gaskiya a gare ku, sannan ku rubuta lambarku ta farko idan kun san ta.",
          youCanNow: "rubuta burin atisaye da ake iya aunawa mai lamba, kwanan wata da gwaji.",
          quickCheck: [
            { objective: "O1", q: "Wane sashe ne ke mayar da \"in ƙara ƙarfi\" zuwa burin da ake iya aunawa?", options: ["Ƙara kalmar \"sosai\"", "Ƙara lamba, kwanan wata da yadda za a gwada shi", "Saka shi a intanet", "Tsawaita shi"], answer: 1, why: "Burin da ake iya aunawa yana faɗin abu ɗaya, lamba, kwanan wata da yadda ake auna shi." },
            { objective: "O1", q: "Kun rubuta burin da ake iya aunawa tare da taimakon AI. Me za ku yi a gaba?", options: ["Ku fara atisaye don shi ku kaɗai", "Ku nemi AI ya amince da shi", "Ku ɓoye shi", "Ku yarda da shi tare da kocinku"], answer: 3, why: "Ya kamata ku yarda da burinku tare da kocinku don ya dace da shirin ƙungiya." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rubuta bayanan atisaye da suka dace",
          minutes: 5,
          goal: "Kafa rubutun atisaye mai sauƙi da za ku ci gaba da yi da gaske.",
          text: [
            "Bayanai suna da amfani ne kawai idan kuna tattara su ta hanya ɗaya kowane lokaci. Rubutu mai sauƙi ya fi manhaja mai ƙawa da kuka daina amfani da ita bayan mako ɗaya.",
            "Shafi (column) huɗu sun isa don farawa: Kwanan wata, Zama (abin da kuka yi), Ƙoƙari (yadda ya yi muku wuya, daga 1 zuwa 10), da Sakamako (lambar burinku). Wasu 'yan wasa suna ƙara awannin barci ko ɗan rubutu.",
            "Kayan da ake sakawa a jiki (wearables) kamar agogo da madaurin bugun zuciya suna iya ƙara bayanai, amma ba cikakku ba ne. Ku ɗauki lambobinsu a matsayin alamu, ba tabbatattun gaskiya ba, kuma ku kiyaye bayanan lafiyarku a sirri."
          ],
          steps: ["Ku buɗe Google Sheets.", "Ku yi shafuka: Kwanan wata, Zama, Ƙoƙari (1-10), Sakamako.", "Ku cike layi ɗaya bayan kowane zama.", "Ku ajiye shi a wuri ɗaya a wayarku don ya ɗauki minti ɗaya kawai."],
          words: [["Ma'aunin ƙoƙari", "maki daga 1 zuwa 10 na yadda zama ya yi muku wuya; kociyoyi sukan kira shi RPE (rating of perceived exertion)."], ["Kayan sakawa a jiki (wearable)", "na'urar da kuke sakawa, kamar agogo, da ke auna abubuwa kamar bugun zuciya ko takawa."]],
          slides: [
            { title: "Mai sauƙi ya fi mai ƙawa", bullets: ["Hanya ɗaya, kowane lokaci", "Minti ɗaya bayan kowane zama"] },
            { title: "Shafuka huɗu", bullets: ["Kwanan wata", "Zama", "Ƙoƙari 1-10", "Sakamako"] },
            { title: "Game da kayan sakawa a jiki", bullets: ["Alamu masu amfani, ba cikakkiyar gaskiya ba", "Ku kiyaye bayanan lafiya a sirri"] }
          ],
          tryIt: "Ku ƙirƙiri rubutun atisayenku a Google Sheets da shafuka huɗu. Ku cike zamanku biyu ko uku na ƙarshe daga tunaninku ko rubuce-rubucenku.",
          youCanNow: "kiyaye rubutun atisaye mai sauƙi da ake yi akai-akai.",
          quickCheck: [
            { objective: "O2", q: "Me ake sakawa a shafin Sakamako na rubutunku?", options: ["Lambar burinku", "Yadda ya yi muku wuya", "Abin da kuka ci", "Sunan kocinku"], answer: 0, why: "Sakamako yana ɗauke da lambar da kuke bibiya don burinku." },
            { objective: "O2", q: "Kuna yawan mantawa da cike rubutunku. Me ya fi taimakawa?", options: ["Ku koma kan manhaja mafi ƙawa", "Ku cike shi sau ɗaya a wata daga tunani", "Ku ajiye shi a wuri ɗaya a wayarku ku cike layi ɗaya nan da nan bayan kowane zama", "Ku daina rubutawa"], answer: 2, why: "Rubutu mai sauƙi da ake cikewa ta hanya ɗaya kowane lokaci shi ne za ku ci gaba da yi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Karanta yanayin atisayenku",
          minutes: 5,
          goal: "Karanta jadawalin bayananku ku bayyana abin da yake nunawa cikin jimla ɗaya ko biyu.",
          text: [
            "Bayan 'yan makonni, ku yi jadawalin shafin Sakamako bisa kwanan wata. Ku duba hanyar da yake bi: sama, ƙasa ko a kwance. Rana ɗaya marar kyau ba ta da ma'ana sosai; ku duba layin gaba ɗaya.",
            "Ku kwatanta Ƙoƙari da Sakamako. Idan ƙoƙari yana ci gaba da hawa amma sakamako yana nan a kwance ko yana sauka, wataƙila kun gaji, kuma wannan abu ne da za ku faɗa wa kocinku.",
            "Kuna iya liƙa teburinku (ba tare da sunaye ko takardun lafiya ba) a mataimakin AI ku tambaya: \"Ka bayyana yanayin waɗannan bayanan atisaye da kalmomi masu sauƙi. Waɗanne tambayoyi ya kamata in yi wa kocina?\" Ku duba lissafinsa da kanku."
          ],
          steps: ["Ku zaɓi Kwanan wata da Sakamako ku saka jadawalin layi (line chart).", "Ku faɗi hanyar: sama, ƙasa ko a kwance.", "Ku kwatanta Ƙoƙari da Sakamako.", "Ku rubuta taƙaitawa ta jimla ɗaya."],
          words: [["Yanayi (trend)", "hanyar da lambobinku ke bi gaba ɗaya a tsawon lokaci."], ["Tsayawa (plateau)", "lokacin da sakamako ya daina ingantuwa na ɗan lokaci."]],
          slides: [
            { title: "Ku duba layin", bullets: ["Sama, ƙasa ko a kwance?", "Rana ɗaya marar kyau ba yanayi ba ce"] },
            { title: "Ƙoƙari da sakamako", bullets: ["Ƙoƙari yana hawa, sakamako a kwance ko yana sauka?", "Wataƙila kun gaji: ku faɗa wa kocinku"] },
            { title: "AI zai iya bayyana shi", bullets: ["Ku liƙa teburin, ba sunaye ko takardun lafiya", "Ku duba lissafinsa da kanku"] }
          ],
          tryIt: "Ku yi jadawalin shafin Sakamako. Ku rubuta jimla ɗaya da ke bayyana yanayin. Sannan ku nemi mataimakin AI ya bayyana shi, ku kwatanta jimlarsa da taku.",
          youCanNow: "yin jadawalin bayanan atisayenku da bayyana yanayin da kalmomi masu sauƙi.",
          quickCheck: [
            { objective: "O3", q: "Me za ku fara dubawa a jadawalin atisayenku?", options: ["Rana guda mafi muni", "Launuka", "Hanyar gaba ɗaya: sama, ƙasa ko a kwance", "Taken jadawalin"], answer: 2, why: "Rana ɗaya marar kyau ba ta da ma'ana sosai; layin gaba ɗaya ne ke nuna yanayin." },
            { objective: "O3", q: "Kuna liƙa teburinku a mataimakin AI. Me za ku fara cirewa?", options: ["Sunaye da takardun lafiya", "Kwanakin wata", "Shafin Sakamako", "Babu komai"], answer: 0, why: "Ku kiyaye sunaye da takardun lafiya daga kayan AI." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Buri da bayanai",
        questions: [
          { objective: "O1", q: "Wanne ne burin da ake iya aunawa?", options: ["In ƙara kyau", "In zama gwarzo", "In ci jefa ƙwallo kyauta 16 cikin 20 kafin 15 ga Janairu, a gwada a atisaye", "In yi aiki tuƙuru"], answer: 2, why: "Yana da lamba, kwanan wata da gwaji." },
          { objective: "O1", q: "Mene ne lambar farko (baseline)?", options: ["Lambarku ta farko kafin ku fara atisaye don burin", "Layin baya na filin wasa", "Ranarku mafi kyau a tarihi", "Matsakaicin ƙungiya"], answer: 0, why: "Lambar farko tana nuna inda kuka fara." },
          { objective: "O2", q: "Wane rubutun atisaye ne ya fi amfani?", options: ["Mai ƙawa da kuka daina bayan mako ɗaya", "Wanda kuke cikewa sau ɗaya a kakar wasa", "Wanda kuke hasashe", "Mai sauƙi da kuke cikewa kowane lokaci"], answer: 3, why: "Bayanai na akai-akai ne ke sa yanayi ya zama mai ma'ana." },
          { objective: "O2", q: "Yaya ya kamata ku ɗauki lambobi daga kayan sakawa a jiki?", options: ["A matsayin cikakkiyar gaskiya", "A matsayin alamu masu amfani da ba cikakku ba", "A matsayin shawarar likita", "A matsayin abin da za a saka a fili"], answer: 1, why: "Kayan sakawa a jiki suna taimakawa amma suna iya kuskure." },
          { objective: "O3", q: "Maki na ƙoƙarinku yana ci gaba da hawa amma lokutanku suna ƙara jinkiri. Me ya kamata ku yi?", options: ["Ku ninka ƙoƙarin atisaye", "Ku faɗa wa kocinku; wataƙila kun gaji", "Ku daina rubutawa", "Ku yi watsi da shi"], answer: 1, why: "Ƙoƙari mai hawa tare da sakamako mai sauka na iya nuna gajiya, wadda ya kamata kocinku ya sani." }
        ]
      }
    },
    {
      name: "Babi na 2: Amfani da AI tare da kocinku",
      lessons: [
        {
          objectives: ["O4"],
          title: "Abin da AI zai iya da wanda ba zai iya yi a atisaye ba",
          minutes: 4,
          goal: "Raba ayyukan atisaye zuwa waɗanda AI zai iya taimakawa da su da waɗanda na kocinku ko mai kula da lafiyar 'yan wasa ne.",
          text: [
            "Mataimakan AI suna da kyau wajen tsarawa: mayar da rubuce-rubuce zuwa tebur, bayanin kalmar atisaye, taƙaita rubutunku, ko rubuta tambayoyi ga kocinku.",
            "Ba su da kyau wajen sanin jikinku. Ba sa iya ganin salon motsinku, tarihin raunukanku ko yadda kuka yi barci, kuma shirye-shiryen gama-gari na intanet ba lallai su dace da shekarunku, matakinku ko lokacin kakar wasa ba.",
            "Don haka ku yi amfani da AI don fahimta da shiryawa, ku bar kocinku da mai kula da lafiyar 'yan wasa su yanke atisayenku, nauyinku da dawowarku bayan rauni."
          ],
          words: [["Nauyin atisaye (training load)", "yawan atisayen da kuke yi da ƙarfinsa a tsawon lokaci."], ["Mai kula da lafiyar 'yan wasa (athletic trainer)", "ƙwararren ma'aikacin lafiya mai lasisi da ke hana raunuka, yana jinyar su, kuma yana taimaka wa 'yan wasa su warke."]],
          slides: [
            { title: "AI yana da kyau wajen", bullets: ["Tsara rubuce-rubuce zuwa tebur", "Bayanin kalmomin atisaye", "Taƙaita rubutunku", "Rubuta tambayoyi ga kocinku"] },
            { title: "AI ba zai iya ba", bullets: ["Ganin salon motsinku", "Sanin tarihin raunukanku", "Sanin yadda kuke ji yau"] },
            { title: "Wane ne ke yanke shawara", bullets: ["Koci: atisaye da nauyi", "Mai kula da lafiyar 'yan wasa: rauni da komawa wasa"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya bayyana kalmar atisaye ɗaya da kuka ji (misali \"periodization\" ko \"deload week\") da kalmomi masu sauƙi. Ku rubuta tambaya ɗaya game da ita ga kocinku.",
          youCanNow: "faɗin waɗanne ayyukan atisaye AI zai iya taimakawa da su, da waɗanda na kocinku ko mai kula da lafiyar 'yan wasa ne.",
          quickCheck: [
            { objective: "O4", q: "Wanne daga cikin waɗannan mataimakin AI zai iya yi da kyau a atisaye?", options: ["Ganin salon motsinku a atisaye", "Sanin tarihin raunukanku", "Yanke shawarar dawowarku bayan rauni", "Bayanin kalmar atisaye"], answer: 3, why: "AI yana da kyau wajen tsarawa da bayani, ba wajen sanin jikinku ba." },
            { objective: "O4", q: "Mataimakin AI ya ba ku shirin ɗaga nauyi mafi nauyi fiye da wanda kocinku ya rubuta. Me za ku yi?", options: ["Ku bi shirin AI", "Ku yi amfani da shi don shirya tambaya, ku bar kocinku ya yanke shawara", "Ku yi shirye-shiryen biyu", "Ku daina ɗaga nauyi"], answer: 1, why: "Ku yi amfani da AI don fahimta da shiryawa; kocinku ne ke yanke atisaye da nauyi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gane shawarar atisaye ta AI marar aminci",
          minutes: 5,
          goal: "Gane alamun haɗari a shawarar atisaye ta AI ko ta intanet.",
          text: [
            "AI da shirye-shiryen intanet suna iya ba da shawarar da ta yi yawa, ta yi sauri, ko ba ta dace da 'yan wasa matasa ko masu rauni ba. Dole ku gane ta.",
            "Alamun haɗari: yin atisaye cikin ciwo mai tsanani; ƙara atisaye da yawa a lokaci ɗaya; rage abinci ko ruwa don cimma nauyin rukuni; ƙarin abinci (supplements) da ke alƙawarin sakamako cikin sauri; \"babu ranakun hutu\"; da duk wani shiri da ya yi watsi da abin da kocinku ya rubuta.",
            "Ƙarin abinci (supplements) suna da haɗari na musamman: hukumar FDA ta Amurka ba ta duba su kafin a sayar da su, kuma wasu suna ɗauke da abubuwan da aka haramta. Ku yi magana da mai kula da lafiyar 'yan wasa ko ƙwararren masanin abinci mai rajista (registered dietitian) kafin ku sha kowanne."
          ],
          steps: ["Ku karanta shawarar a hankali.", "Ku kwatanta ta da jerin alamun haɗari.", "Idan wata alamar haɗari ta bayyana, kada ku bi ta.", "Ku kai ta ga kocinku ko mai kula da lafiyar 'yan wasa."],
          words: [["Alamar haɗari (red flag)", "alamar gargaɗi cewa wani abu ba shi da aminci ko ba daidai ba ne."], ["Ƙarin abinci (supplement)", "ƙwaya, gari ko abin sha da ake sayarwa don ƙara wani abu a abincinku."]],
          slides: [
            { title: "Alamun haɗari", bullets: ["Atisaye cikin ciwo mai tsanani", "Ƙari mai yawa a lokaci ɗaya", "Rage abinci ko ruwa don cimma nauyi", "\"Babu ranakun hutu\""] },
            { title: "Ƙarin abinci (supplements)", bullets: ["FDA ba ta duba su kafin sayarwa", "Wasu suna da abubuwan da aka haramta", "Ku fara tambayar mai kula da lafiyar 'yan wasa ko masanin abinci"] },
            { title: "Idan kun ga ɗaya", bullets: ["Kada ku bi ta", "Ku kai ta ga kocinku ko mai kula da lafiyar 'yan wasa"] }
          ],
          sources: [{ name: "USADA: Supplement Connect (haɗarin ƙarin abinci ga 'yan wasa)", url: "https://www.usada.org/athletes/substances/supplement-connect/" }],
          tryIt: "Ku nemi mataimakin AI \"shirin ƙara sauri cikin makonni biyu\". Ku karanta shi ku zagaye duk alamun haɗari. Ku rubuta abin da za ku tambayi kocinku game da shi.",
          youCanNow: "gane shawarar atisaye marar aminci da kai ta ga mutumin da ya dace.",
          quickCheck: [
            { objective: "O5", q: "Wanne daga cikin waɗannan alamar haɗari ce a shawarar atisaye?", options: ["Ranar hutu ɗaya kowane mako", "Shirin da ya yi daidai da abin da kocinku ya rubuta", "Ƙara atisaye da yawa a lokaci ɗaya", "Motsa jiki kafin atisaye"], answer: 2, why: "Yawa da sauri fiye da kima ɗaya ne daga cikin alamun haɗari a darasin." },
            { objective: "O5", q: "Abokin ƙungiya ya raba muku ƙarin abinci da ke alƙawarin sakamako cikin sauri. Me za ku yi?", options: ["Ku fara magana da mai kula da lafiyar 'yan wasa ko masanin abinci mai rajista", "Ku gwada ɗan kaɗan", "Ku saya idan sharhinsa yana da kyau", "Ku nemi AI ya amince da shi"], answer: 0, why: "FDA ba ta duba ƙarin abinci kafin sayarwa, kuma wasu suna ɗauke da abubuwan da aka haramta." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Shirya tattaunawar atisaye da kocinku",
          minutes: 5,
          goal: "Yi amfani da AI don shirya gajeren bayani mai sarari da tambayoyi uku ga kocinku.",
          text: [
            "Kociyoyi suna da aiki da yawa. Gajeren bayani mai sarari da lambobinku yana inganta tattaunawa: menene burinku, me bayananku ke nunawa, da me kuke son tambaya.",
            "Ku tambayi mataimakin AI: \"Ga burina da rubutun atisayena. Ka rubuta bayani mai jimloli uku ga kocina, ka kuma ba da shawarar tambayoyi uku da zan iya yi game da zangon atisayena na gaba.\" Sannan ku gyara shi don ya yi kama da ku.",
            "Ku kai bayanin ga kocinku fuska da fuska ko ta hanyar da ƙungiyarku ta fi so. Ku saurara, ku rubuta, kuma ku sabunta shirinku da abin da kocinku ya faɗa, ba abin da AI ya faɗa ba."
          ],
          steps: ["Ku liƙa burinku da rubutunku (ba takardun lafiya).", "Ku nemi bayani mai jimloli uku da tambayoyi uku.", "Ku gyara shi da kalmominku.", "Ku raba shi da kocinku ta hanyar da ƙungiyarku ta fi so.", "Ku sabunta shirinku da amsar kocinku."],
          words: [["Zangon atisaye (training block)", "rukunin makonni da ke da babban abin mayar da hankali ɗaya a atisaye."], ["Bayanin halin da ake ciki (update)", "gajeren saƙo da ke faɗin inda kuke yanzu."]],
          slides: [
            { title: "Bayani mai kyau", bullets: ["Burina", "Abin da bayanaina ke nunawa", "Tambayoyina"] },
            { title: "Ku yi amfani da AI don daftari", bullets: ["Bayani mai jimloli uku", "Tambayoyi uku", "Ku gyara shi zuwa kalmominku"] },
            { title: "Sannan", bullets: ["Ku tattauna da kocinku", "Ku rubuta abin da aka faɗa", "Ku bi shirin kocinku"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta aƙalla zama huɗu, ku nemi mataimakin AI ya bayyana yanayinku, sannan ku rubuta bayani mai jimloli uku da tambayoyi uku ga kocinku.",
          youCanNow: "mayar da bayanan atisayenku zuwa bayani mai sarari da tambayoyi ga kocinku.",
          quickCheck: [
            { objective: "O6", q: "Waɗanne abubuwa uku ne bayani mai kyau ga koci ke ɗauke da su?", options: ["Burinku, abin da bayananku ke nunawa da abin da kuke son tambaya", "Kafofin sada zumuntarku, barci da makinku na makaranta", "Lambobin sauran 'yan wasa", "Ranarku mafi kyau kawai"], answer: 0, why: "Gajeren bayani yana ba da burinku, bayananku da tambayoyinku." },
            { objective: "O6", q: "Amsar kocinku ta bambanta da shawarar AI. Me za ku yi?", options: ["Ku bi AI", "Ku tambayi wani AI daban", "Ku yi watsi da su duka biyu", "Ku sabunta shirinku da abin da kocinku ya faɗa"], answer: 3, why: "Ku sabunta shirinku da amsar kocinku, ba abin da AI ya faɗa ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Amfani da AI tare da kocinku",
        questions: [
          { objective: "O4", q: "Wane aiki ne AI yake da kyau a kai a atisaye?", options: ["Ganin salon motsinku fuska da fuska", "Amincewa da dawowarku bayan rauni", "Sanin yadda kuka yi barci", "Taƙaita rubutun atisayenku"], answer: 3, why: "Tsarawa da taƙaitawa ƙarfi ne na AI." },
          { objective: "O4", q: "Wane ne ke yanke shawarar lokacin da za ku dawo bayan rauni?", options: ["Mai kula da lafiyar 'yan wasa ko likitanku", "Mataimakin AI", "Abokin ƙungiya", "Shahararren mai wallafa motsa jiki a intanet"], answer: 0, why: "Komawa wasa shawara ce ta lafiya ga ƙwararru masu cancanta." },
          { objective: "O5", q: "Wace ce alamar haɗari a shawarar atisaye?", options: ["Ranakun hutu kowane mako", "Fara motsa jiki da farko", "Yin atisaye cikin ciwo mai tsanani", "Tambayar kocinku"], answer: 2, why: "Ciwo mai tsanani alama ce ta tsayawa a duba ku." },
          { objective: "O5", q: "Me yasa ƙarin abinci (supplements) ke da haɗari ga 'yan wasa?", options: ["Koyaushe an haramta su", "Kocinku ne ke gwada su", "Ɗanɗanonsu ba shi da daɗi", "FDA ba ta duba su kafin sayarwa, kuma wasu suna da abubuwan da aka haramta"], answer: 3, why: "USADA ta yi gargaɗi cewa ƙarin abinci na iya ɗauke da gurɓata ko lakabin ƙarya." },
          { objective: "O6", q: "Bayan kun tattauna da kocinku, shirin wa za ku bi?", options: ["Na AI", "Na kocinku", "Na wani bidiyo kawai", "Na abokin hamayyarku"], answer: 1, why: "Koci ne ke tsara atisaye; AI yana taimaka muku shiryawa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Atisaye da Ƙwazo a Wasanni",
    questions: [
      { objective: "O1", q: "\"In ƙara sauri\" shi ne:", options: ["Cikakken buri", "Rubutun atisaye", "Fata, ba burin da ake iya aunawa ba", "Wani atisaye na musamman"], answer: 2, why: "Ba shi da lamba, kwanan wata ko gwaji." },
      { objective: "O1", q: "Burin atisaye mai kyau ya haɗa da:", options: ["Abu ɗaya, lamba, kwanan wata da gwaji", "Ji kawai", "Kalmar sirrinku", "Buri goma a lokaci ɗaya"], answer: 0, why: "Waɗannan sassa ne ke sa shi ya zama mai aunuwa." },
      { objective: "O1", q: "Wane ne ya kamata ya yarda da burinku tare da ku?", options: ["Kocinku", "Baƙo a intanet", "AI kaɗai", "Babu kowa"], answer: 0, why: "Ya kamata burinku ya dace da shirin ƙungiya." },
      { objective: "O2", q: "Me ya kamata rubutun atisayenku na farko ya kasance da shi?", options: ["Shafuka hamsin", "Takardun lafiyarku", "Kwanan wata, Zama, Ƙoƙari da Sakamako", "Hotuna kawai"], answer: 2, why: "Shafuka huɗu masu sauƙi sun isa don farawa." },
      { objective: "O2", q: "Ma'aunin ƙoƙari daga 1 zuwa 10 yana auna:", options: ["Tsayinku", "Yadda zama ya yi muku wuya", "Makinku na makaranta", "Mabiyanku"], answer: 1, why: "Maki ne mai sauri na ƙoƙarin da kuka ji." },
      { objective: "O2", q: "Lambobi daga agogo ko madauri su ne:", options: ["Koyaushe daidai", "Gano cuta na likita", "Marasa ma'ana", "Alamu masu amfani da za su iya kuskure"], answer: 3, why: "Kayan sakawa a jiki suna taimakawa, amma ku ɗauke su a matsayin alamu." },
      { objective: "O3", q: "Idan kuna karanta jadawalinku, ya kamata ku mayar da hankali kan:", options: ["Rana guda mafi muni", "Launin jadawalin", "Hanyar da layin ke bi gaba ɗaya", "Jadawalan sauran 'yan wasa"], answer: 2, why: "Yanayi ya fi rana ɗaya muhimmanci." },
      { objective: "O3", q: "Sakamako ya tsaya a kwance na makonni. Ana kiran wannan:", options: ["Gudun gaggawa (sprint)", "Lambar farko (baseline)", "Kayan sakawa a jiki", "Tsayawa (plateau)"], answer: 3, why: "Tsayawa (plateau) lokaci ne da babu ingantuwa." },
      { objective: "O3", q: "Kafin ku liƙa rubutunku a AI, ku cire:", options: ["Sunaye da takardun lafiya", "Kwanakin wata", "Makin ƙoƙari", "Sakamako"], answer: 0, why: "Ku kiyaye bayanan sirri da na lafiya daga kayan AI." },
      { objective: "O3", q: "AI ya ce matsakaicinku ya inganta da daƙiƙa 2. Ya kamata ku:", options: ["Saka shi a intanet", "Duba lissafin da kanku", "Amince da shi gaba ɗaya", "Goge rubutunku"], answer: 1, why: "AI yana iya yin kuskure a lissafi." },
      { objective: "O4", q: "Me AI BA zai iya yi muku ba?", options: ["Bayanin kalmar atisaye", "Mayar da rubuce-rubuce zuwa tebur", "Ganin salon motsinku a atisaye", "Rubuta tambayoyi ga kocinku"], answer: 2, why: "Ba zai iya ganin ku kuna atisaye ba." },
      { objective: "O4", q: "Me mai kula da lafiyar 'yan wasa (athletic trainer) ke yi?", options: ["Yana hana raunuka, yana jinyar su kuma yana taimakawa a warke", "Yana sayar da takalma", "Yana kula da kafofin sada zumunta", "Yana rubuta jadawalin ƙungiya"], answer: 0, why: "Masu kula da lafiyar 'yan wasa ƙwararrun ma'aikatan lafiya ne masu lasisi." },
      { objective: "O5", q: "Wani shirin intanet ya ce ku rage ruwa don cimma nauyin rukuni. Wannan:", options: ["Yana da aminci ga kowa", "Dole ne", "Kyakkyawan ra'ayi ne kafin wasanni", "Alamar haɗari ce"], answer: 3, why: "Rage abinci ko ruwa don cimma nauyi na iya zama mai haɗari." },
      { objective: "O5", q: "Shirin da ke cewa \"babu ranakun hutu\":", options: ["Shi ne mafi kyau don ci gaba", "Alamar haɗari ce", "NCAA ta wajabta shi", "Na yau da kullum ne ga masu farawa"], answer: 1, why: "Hutu ɓangare ne na atisaye; rashin hutu alamar gargaɗi ce." },
      { objective: "O5", q: "Kafin ku sha kowane ƙarin abinci, ku yi magana da:", options: ["Talla", "Mai kula da lafiyar 'yan wasa ko masanin abinci mai rajista", "Abokin ƙungiya", "Babu kowa"], answer: 1, why: "Za su iya bayyana haɗari, har da abubuwan da aka haramta." },
      { objective: "O5", q: "Idan shawarar AI ta saɓa da shirin kocinku, ku:", options: ["Bi AI", "Bar ƙungiyar", "Bi kocinku ku tambaye shi game da ita", "Yi duka biyu"], answer: 2, why: "Kocinku ya san ku da shirin ƙungiya." },
      { objective: "O6", q: "Bayani mai kyau ga koci ya haɗa da:", options: ["Burinku, abin da bayananku ke nunawa, da tambayoyinku", "Ƙorafi kawai", "Doguwar maƙala", "Kalmar sirrinku"], answer: 0, why: "Gajere kuma mai sarari yana taimaka wa kociyoyi masu aiki da yawa." },
      { objective: "O6", q: "Bayan AI ya rubuta daftarin bayaninku, ya kamata ku:", options: ["Aika shi ba tare da karantawa ba", "Saka shi a fili", "Gyara shi zuwa kalmominku", "Aika shi ga abokin hamayya"], answer: 2, why: "Ya kamata ya yi kama da ku kuma ya zama gaskiya." },
      { objective: "O6", q: "Zangon atisaye (training block) shi ne:", options: ["Tubalin katako", "Harbin da aka tare", "Ranar hutu", "Rukunin makonni da ke da babban abin mayar da hankali ɗaya"], answer: 3, why: "Kociyoyi suna tsara atisaye a zango-zango." },
      { objective: "O4", q: "Mafi kyawun amfani da AI a atisaye shi ne:", options: ["Maye gurbin kocinku", "Fahimtar bayananku da shirya tambayoyi mafi kyau", "Gano raunuka", "Zaɓar ƙarin abincinku"], answer: 1, why: "AI yana taimaka muku fahimta da shiryawa; mutane ne ke yanke shawara." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 6, 8, 10, 12, 14, 16] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Burin da ake iya aunawa", objective: "O1", notYet: "Burin ba shi da sarari, ko babu lamba, kwanan wata ko gwaji.", meets: "Abu ɗaya, lamba, kwanan wata da gwaji, kuma an yarda da shi tare da koci.", exceeds: "Yana da lambar farko (baseline) kuma ya dace da wani sashe da aka ambata na shirin kakar wasa ta ƙungiya." },
      { name: "Rubutun atisaye", objective: "O2", notYet: "Ƙasa da zama huɗu, ko wasu shafuka ba sa nan.", meets: "An cike Kwanan wata, Zama, Ƙoƙari da Sakamako na aƙalla zama huɗu.", exceeds: "An rubuta kowane zama a ranar da aka yi shi, tare da ɗan rubutu ko awannin barci." },
      { name: "Taƙaitawar yanayi", objective: "O3", notYet: "Babu jadawali, ko hanyar ba daidai ba ce ko ba a faɗa ba.", meets: "Jadawali da taƙaitawar hanya ta jimla ɗaya ko biyu, tare da kwatanta ƙoƙari da sakamako, kuma an duba lissafin AI.", exceeds: "Ya gane tsayawa (plateau) ko ƙoƙari mai hawa tare da sakamako a kwance, kuma ya mayar da shi tambaya ga koci." },
      { name: "Amfani da AI lafiya", objective: "O5", notYet: "Yana bi ko maimaita shawara mai alamar haɗari, ko yana raba takardun lafiya da AI.", meets: "Ba a bi wata shawara mai alamar haɗari ba, kuma duk abin da ake shakka an kai shi ga koci ko mai kula da lafiyar 'yan wasa.", exceeds: "Yana faɗin takamaiman alamar haɗarin da dalilin da yasa ba ta da aminci yayin da yake kawo ta." },
      { name: "Tambayoyi ga koci", objective: "O6", notYet: "Ƙasa da tambayoyi uku, ko bayanin yana kama da rubutun AI da aka kwafo.", meets: "Bayani mai jimloli uku da tambayoyi uku masu sarari da kalmomin ɗan wasan.", exceeds: "Ɗan wasan yana rubuta amsoshin koci kuma yana sabunta shirin daga gare su." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala aikin ƙarshe kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layi na rubric",
      "Masu koyo da har yanzu suke rubutun atisayensu bayan kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce sun cimma ko suna kusantar burinsu da ake iya aunawa kafin kwanan watan da aka amince",
      "Masu koyo da suka ce sun kai bayani da tambayoyi ga kocinsu, ko sun ƙi shawara marar aminci"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Asusun Google kyauta don Google Sheets",
      "Mataimakin AI kyauta (ChatGPT, Microsoft Copilot ko Google Gemini)",
      "Buri ɗaya da aka yarda da shi tare da kocinku",
      "Kusan minti 60 na darussa, sannan kusan minti ɗaya bayan kowane zama na makonni huɗu"
    ],
    facilitatorNotes: [
      "Ku haɗa kai da babban koci kafin farawa don buri da rubuce-rubuce su dace da shirin ƙungiya; wannan kwas ɗin ba ya tsara atisaye.",
      "Ku koya wa 'yan wasa su cire sunaye da takardun lafiya kafin su liƙa kowane bayani a kayan AI.",
      "Ku tura duk wata tambaya game da ciwo, rauni, nauyin jiki ko ƙarin abinci ga mai kula da lafiyar 'yan wasa ko masanin abinci mai rajista; kada ku amsa ta a cikin rukuni.",
      "Ku fara yin Darussa na 1 zuwa 2, ku bar 'yan wasa su yi rubutu na makonni huɗu, sannan ku yi Darussa na 3 zuwa 6 da aikin ƙarshe.",
      "Ku tsara gajerun ganawa da koci don 'yan wasa su gabatar da bayaninsu da tambayoyinsu."
    ]
  }
};

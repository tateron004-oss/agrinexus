"use strict";

// Koach Learn course, Hausa (ha) translation of leadership/lead-agentic-modern-leaders.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "lead-agentic-modern-leaders-ha",
  lang: "ha",
  translationOf: "lead-agentic-modern-leaders",
  category: "Leadership Development",
  name: "Shugabanci a Zamanin Agentic AI 2: AI ga Shugabanni na Zamani da Kayan AI ga Shugabanni",
  skills: "Mayar da bayanan taro zuwa jerin ayyuka, Rubuta daftarin takardar yanke shawara mai zaɓuɓɓuka da haɗurra, Rubuta saƙonni masu sarari ga ƙungiya, Shiryawa don tattaunawa mai wuya, Zaɓar kayan aikin da aka amince da su, Rubuta jagorar amfani da AI ta shafi ɗaya ga ƙungiya",
  outcome: "amfani da kayan AI a aikinku na shugabanci: mayar da bayanan taro zuwa jerin ayyuka, rubuta daftarin takardar yanke shawara mai zaɓuɓɓuka da haɗurra, da shirya saƙonni ga ƙungiya, da kuma rubuta jagorar amfani da AI ta shafi ɗaya da ƙungiyarku za ta iya bi.",
  about: [
    "Wannan kwas na manajoji ne, masu kula da ma'aikata, shugabannin ƙungiyoyi, da masu ƙananan kasuwanci da ƙungiyoyin sa-kai waɗanda suka gama kwas na 1 ko suka riga suka fahimci tushen AI. Yana magana ne game da aikinku a matsayin shugaba: taro, yanke shawara, sadarwa da mutane.",
    "Babi na 1 yana gina hanyoyin aiki uku na AI da za ku iya maimaitawa kowane mako: bayanan taro zuwa jerin ayyuka, takardar yanke shawara, da saƙonni ga ƙungiya. Babi na 2 yana magana kan sassa masu wuya: amfani da AI don shiryawa tattaunawa da mutane ba tare da ba shi ragamar ba, zaɓar kayan aiki cikin hikima, da rubuta jagorar amfani da AI mai sauƙi ga ƙungiyarku.",
    "Kuna iya amfani da kowane sanannen mataimaki: ChatGPT, Microsoft Copilot, Google Gemini ko Claude. Idan ƙungiyarku ta amince da wani kayan aiki na musamman, ku yi amfani da shi. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku gina akwatin kayan AI na shugaba: ku ajiye prompt uku da kuka gwada kuma za a iya sake amfani da su (bayanan taro zuwa jerin ayyuka, takardar yanke shawara mai zaɓuɓɓuka da haɗurra, saƙon labarai ga ƙungiya), kowanne an yi amfani da shi sau ɗaya kan aiki na gaske bayan an cire bayanan sirri; kuma ku rubuta jagorar amfani da AI ta shafi ɗaya ga ƙungiyarku da ke faɗin kayan aikin da aka amince da su, abin da ba za a taɓa sakawa ba, abin da dole mutum ya duba, da wanda za a tambaya.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manajoji, masu kula da ma'aikata, shugabannin ƙungiyoyi, da masu ƙananan kasuwanci da ƙungiyoyin sa-kai waɗanda suka gama kwas na 1 ko suka riga suka fahimci tushen AI.",
    startingPoint: "Suna iya bayanin AI mai ƙirƙira (generative) da AI mai aiki da kansa (agentic), kuma suna iya ambaton manyan haɗurra ga ƙungiyarsu. Suna amfani da AI lokaci-lokaci, amma ba a hanyoyin aiki da ake maimaitawa don taro, yanke shawara, sadarwa da aikin da ya shafi mutane ba.",
    gap: "Shugabanni suna kashe yawancin makonsu kan bayanai, yanke shawara da saƙonni. Prompt da aka gwada kuma ake sake amfani da su suna adana lokaci, amma sai idan shugabanni sun bar hukunci, tattaunawa da mutane da bayanan sirri a hannun mutane, kuma sun ba ƙungiyarsu jagora mai sarari da za ta bi.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi, ba a ɗauka cewa suna da ilimin fasaha ba",
      "Na'urori: waya ko kwamfuta mai mataimakin AI; ku yi amfani da kayan aikin da ƙungiyarku ta amince da shi",
      "Sirri: ku cire bayanan sirri da na ɓoye kafin ku saka komai a AI",
      "Dokokin sashen ma'aikata (HR), na shari'a da na ƙungiya suna aiki kan shawarwari game da mutane da saƙonni masu muhimmanci",
      "Lokaci: gajerun darussa masu aiki ɗaya da ake yi kan aiki na gaske"
    ],
    prerequisites: "\"Jagoranci a Zamanin Agentic AI 1: Fahimtar AI\", ko fahimtar tushen AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da bayanan wani taro na gaske da aka cire bayanan sirri daga ciki", action: "amfani da prompt da ake sake amfani da shi don mayar da bayanan zuwa shawarwarin da aka yanke, ayyuka masu masu yi da ranaku, da tambayoyin da ba a amsa ba", standard: "kuna duba jerin don ganin duk abin da aka ƙirƙira ko aka manta" },
    { id: "O2", condition: "Idan kuna fuskantar wata shawara ta gaske", action: "rubuta daftarin takardar yanke shawara mai zaɓuɓɓuka, haɗurra da tambayoyin biyo baya, sannan ku rubuta shawarar ƙarshe da kanku", standard: "ba tare da taɓa ba da \"AI ne ya ba da shawara\" a matsayin dalili ba" },
    { id: "O3", condition: "Idan kuna da batutuwa uku don labarai ga ƙungiya", action: "rubuta da gyara saƙo ga ƙungiya don salo, tsawo da masu karatu", standard: "kuna karanta shi da babbar murya kafin ku aika" },
    { id: "O4", condition: "Kafin wata tattaunawa mai wuya da wani mutum", action: "shirya jimlar farawa da tambayoyi tare da AI ta amfani da bayanin gama-gari kawai", standard: "ba tare da sunaye ko bayanan sirri ba, kuma tattaunawar da shawarar suna hannunku" },
    { id: "O5", condition: "Idan akwai kayan AI da ƙungiyarku ke amfani da shi ko take so", action: "kwatanta shi kan bayanai, iko (access) da sharuɗɗan tsari ta amfani da shafukan kamfanin da kansa", standard: "kuna ƙarewa da hukunci na layi ɗaya: a amince, a amince da iyaka, ko ba yanzu ba" },
    { id: "O6", condition: "Don ƙungiyarku", action: "rubuta jagorar amfani da AI ta shafi ɗaya da ajiye prompt ɗinku da kuka gwada a wuri ɗaya", standard: "tana ƙunshe da kayan aikin da aka amince da su, abin da ba za a taɓa sakawa ba, abin da za a duba, bayyanawa, da wanda za a tambaya" }
  ],
  chapters: [
    {
      name: "Babi na 1: Hanyoyin aiki uku na AI ga shugabanni",
      lessons: [
        {
          objectives: ["O1"],
          title: "Bayanan taro zuwa jerin ayyuka",
          minutes: 5,
          goal: "Mayar da bayanan taro marasa tsari zuwa jerin ayyuka mai sarari mai masu yi da ranaku.",
          text: [
            "Sau da yawa taro yana ƙarewa da tunani marar sarari, ba da ayyuka masu sarari ba. AI yana da kyau wajen ba bayanai marasa tsari tsari. Ku saka bayananku (bayan an cire bayanan sirri ko na ɓoye) ku nemi jerin shawarwarin da aka yanke, ayyuka masu wanda zai yi da ranar ƙarshe, da tambayoyin da ba a amsa ba.",
            "Prompt da ake sake amfani da shi: \"Daga waɗannan bayanan taro, ka jera: 1) shawarwarin da aka yanke, 2) ayyuka a tebur mai aiki, wanda zai yi, ranar ƙarshe, 3) tambayoyin da ba a amsa ba. Idan babu wanda zai yi ko rana, ka rubuta MISSING. Kada ka ƙara komai da ba ya cikin bayanan.\" Jimlar ƙarshe tana da muhimmanci: tana hana kayan aikin ƙirƙirar ayyuka.",
            "Manhajojin taro da yawa yanzu suna ba da bayanan taro ko taƙaitawa ta AI. Kafin ku kunna su, ku duba dokar ƙungiyarku kuma ku sanar da mahalarta, domin naɗar mutane da rubuta maganarsu yana tayar da tambayoyi game da izini da sirri."
          ],
          steps: ["Ku cire bayanan sirri ko na ɓoye daga bayanan.", "Ku saka bayanan tare da prompt da ake sake amfani da shi.", "Ku duba kowane aiki da abin da kuka tuna da kuma bayanan.", "Ku cike duk abin da aka rubuta MISSING.", "Ku tura jerin ga mahalarta a ranar."],
          words: [["Aikin da aka amince (action item)", "aikin da aka yarda a kai a taro, mai wanda zai yi da ranar ƙarshe."], ["Prompt da ake sake amfani da shi", "prompt da kuke ajiyewa ku sake amfani da shi don irin wannan aiki."]],
          slides: [
            { title: "Daga bayanai zuwa ayyuka", bullets: ["Shawarwarin da aka yanke", "Ayyuka: aiki, wanda zai yi, ranar ƙarshe", "Tambayoyin da ba a amsa ba"] },
            { title: "Ku hana ƙirƙirar ayyuka", bullets: ["\"Idan babu, ka rubuta MISSING\"", "\"Kada ka ƙara komai da ba ya cikin bayanan\""] },
            { title: "Masu naɗar taro na AI", bullets: ["Ku fara duba dokar ƙungiyarku", "Ku sanar da mahalarta kafin naɗa"] }
          ],
          tryIt: "Ku ɗauki bayanan wani taro na kwanan nan, ku cire bayanan sirri, ku yi amfani da prompt ɗin, sannan ku duba sakamakon. Ku ƙirga duk abin da ya yi kuskure ko ya ƙirƙira.",
          youCanNow: "mayar da bayanan taro zuwa jerin ayyuka da aka duba, mai masu yi da ranaku.",
          quickCheck: [
            { objective: "O1", q: "Me ya kamata prompt mai kyau na bayanan taro ya nemi AI ya jera?", options: ["Wanda ya fi magana", "Shawarwari, ayyuka masu masu yi da ranaku, da tambayoyin da ba a amsa ba", "Taƙaitawar kowace jimla", "Shawarwarin abin ciye-ciye na taro na gaba"], answer: 1, why: "Shawarwari, ayyuka masu masu yi, da tambayoyin da ba a amsa ba su ne abin da ƙungiya ke buƙata bayan taro." },
            { objective: "O1", q: "Jerin ayyukan yana da aikin da babu wanda ya ambata a taron. Me za ku yi?", options: ["Ku bar shi, domin kyakkyawan tunani ne", "Ku ɗora shi a kanku a ɓoye", "Ku cire shi ku ƙara \"Kada ka ƙara komai da ba ya cikin bayanan\" a prompt ɗin", "Ku nemi AI ya bayyana dalili"], answer: 2, why: "Ayyukan da aka ƙirƙira suna kawo ruɗani; dokar prompt ɗin tana hana kayan aikin ƙara su." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Takardar yanke shawara: zaɓuɓɓuka, haɗurra da shawara",
          minutes: 6,
          goal: "Amfani da AI don rubuta daftarin takardar yanke shawara da ke kwatanta zaɓuɓɓuka cikin adalci.",
          text: [
            "Shugabanni suna yanke shawara cikin gaggawa. AI zai iya taimaka muku ku yi tunani mai faɗi, ba ya yanke shawara a madadinku ba. Ku ba shi shawarar, bayanan gaskiya da kuke da su, iyakokinku (kasafin kuɗi, lokaci, mutane) ku nemi zaɓuɓɓuka uku, kowanne da amfaninsa, haɗurransa, kuɗinsa, da abin da dole ku yarda da shi kafin ya zama zaɓi mafi kyau.",
            "Sannan ku ƙalubalance shi: \"Mene ne hujja mafi ƙarfi da ke adawa da zaɓin da na fi so?\" da \"Wane bayani ne ban sani ba?\" Waɗannan tambayoyin biyo baya biyu su ne inda AI ya fi amfani, domin suna fito da abubuwan da ba ku lura da su ba.",
            "Ku ne kuke rubuta shawarar ƙarshe. Ku duba kowace lamba, ku ƙara abin da ku kaɗai kuka sani (mutanenku, tarihinku, ƙimominku) kuma ku ɗauki nauyin shawarar. Kada takardar ta taɓa cewa \"AI ne ya ba da shawara\" a matsayin dalili."
          ],
          steps: ["Ku bayyana shawarar, bayanan gaskiya da iyakoki (ba tare da bayanan sirri ba).", "Ku nemi zaɓuɓɓuka uku masu amfani, haɗurra da kuɗi.", "Ku nemi hujja mafi ƙarfi da ke adawa da zaɓin da kuka fi so.", "Ku tambayi wane bayani ne ya ɓace.", "Ku duba lambobi ku rubuta shawarar da kanku."],
          words: [["Takardar yanke shawara (decision memo)", "gajeriyar takarda da ke bayyana shawara, zaɓuɓɓuka da shawarar da aka bayar."], ["Abin da ba a lura da shi ba (blind spot)", "wani abu mai muhimmanci da ba ku lura da shi ba."]],
          slides: [
            { title: "AI yana faɗaɗa tunani, ku ne ke yanke shawara", bullets: ["Ku ba da shawarar, bayanan gaskiya, iyakoki", "Ku nemi zaɓuɓɓuka uku: amfani, haɗurra, kuɗi"] },
            { title: "Tambayoyin biyo baya biyu masu ƙarfi", bullets: ["\"Hujja mafi ƙarfi da ke adawa da zaɓin da na fi so?\"", "\"Wane bayani ne ban sani ba?\""] },
            { title: "Ku ne ke da nauyin shawarar", bullets: ["Ku duba kowace lamba", "Ku ƙara abin da ku kaɗai kuka sani", "Kada \"AI ne ya ba da shawara\" ya zama dalili"] }
          ],
          tryIt: "Ku zaɓi wata shawara ta gaske da kuke fuskanta (misali, sabon jadawalin aiki, mai kawo kaya ko wani taron biki). Ku yi amfani da prompt ɗin takardar yanke shawara da tambayoyin biyo baya biyun, sannan ku rubuta shawararku a sakin layi ɗaya da kalmominku.",
          youCanNow: "amfani da AI don faɗaɗa tunani kan shawara da rubuta takardar da ke ƙarƙashin ikonku.",
          quickCheck: [
            { objective: "O2", q: "Mene ne mafi kyawun aikin AI a takardar yanke shawara?", options: ["Yanke shawarar ƙarshe", "Zaɓar zaɓin da ƙungiya ta fi so", "Sa hannu a takardar", "Faɗaɗa zaɓuɓɓukanku da fito da abubuwan da ba ku lura da su ba"], answer: 3, why: "AI yana taimaka muku ganin ƙarin zaɓuɓɓuka da haɗurra; shugaba ne ke yanke shawara." },
            { objective: "O2", q: "Kuna da zaɓin da kuka fi so. Wace tambayar biyo baya za ku aika?", options: ["\"Mene ne hujja mafi ƙarfi da ke adawa da zaɓin da na fi so?\"", "\"Ka faɗa mini cewa zaɓina ne mafi kyau.\"", "\"Ka gajarta takardar.\"", "\"Ka zaɓa mini.\""], answer: 0, why: "Neman hujja mafi ƙarfi ta adawa yana gwada zaɓinku cikin adalci." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Sadarwa mai sarari ga ƙungiya",
          minutes: 5,
          goal: "Rubuta da gyara saƙo ga ƙungiya don salo, tsawo da masu karatu.",
          text: [
            "Matsalolin shugabanci da yawa matsalolin sadarwa ne. AI yana taimaka muku rubuta daftarin labarai ga ƙungiya, sanarwa ko saƙon godiya da sauri, sannan ku gyara shi: \"ka gajarta\", \"ka sa ya fi ɗumi\", \"don sabbin ma'aikata\", \"da Turanci mai sauƙi ga waɗanda Turanci ba harshensu na farko ba ne\".",
            "Ku ba shi muhimman batutuwanku a jeri da masu karatunku, ku nemi daftari da muryarku. Ku saka wani tsohon saƙo da kuka rubuta ku ce \"ka bi wannan salon\" don ya yi kama da ku.",
            "Ku karanta shi da babbar murya kafin ku aika. Ku cire duk abin da ba za ku faɗa ido da ido ba. Don labarai masu muhimmanci kamar korar ma'aikata, canjin doka ko haɗari a wurin aiki, AI zai iya taimaka muku tsara shi, amma sashen ma'aikata (HR) ko na shari'a ya kamata su duba kalmomin ƙarshe, kuma ku isar da muhimman labarai ido da ido inda za ku iya."
          ],
          steps: ["Ku rubuta muhimman batutuwanku a jeri.", "Ku faɗi masu karatu da salon.", "Ku nemi daftari; ku ba da tsohon saƙo don ya bi muryarku.", "Ku gyara shi da tambayoyin biyo baya ɗaya ko biyu.", "Ku karanta shi da babbar murya; ku nemi a duba labarai masu muhimmanci."],
          words: [["Salo (tone)", "yadda saƙo yake ji: mai ɗumi, na hukuma, na gaggawa, mai natsuwa."], ["Masu karatu (audience)", "mutanen da za su karanta saƙon."]],
          slides: [
            { title: "Ku rubuta da sauri, sannan ku gyara", bullets: ["Muhimman batutuwa a jeri", "Masu karatu da salo", "\"Ka gajarta\", \"ka sa ya fi ɗumi\", \"Turanci mai sauƙi\""] },
            { title: "Ya yi kama da ku", bullets: ["Ku saka tsohon saƙo da kuka rubuta", "\"Ka bi wannan salon\""] },
            { title: "Kafin ku aika", bullets: ["Ku karanta shi da babbar murya", "Labarai masu muhimmanci: HR ko lauya su duba", "Ku isar da manyan labarai ido da ido"] }
          ],
          tryIt: "Ku rubuta batutuwa uku don labarai na gaske ga ƙungiyarku. Ku yi amfani da AI don rubuta daftari, ku nemi gyara ɗaya, ku karanta shi da babbar murya, sannan ku aika (ko ku ajiye don aikawa).",
          youCanNow: "rubuta da gyara saƙonni ga ƙungiya da AI yayin da kuke riƙe muryarku.",
          quickCheck: [
            { objective: "O3", q: "Ta yaya za ku sa daftarin AI ya yi kama da ku?", options: ["Ku nemi ya yi amfani da harshen hukuma", "Ku saka tsohon saƙo da kuka rubuta ku ce \"ka bi wannan salon\"", "Ku aika ba tare da karantawa ba", "Ku ƙara alamomin motsin rai (!)"], answer: 1, why: "Misalin rubutunku yana nuna wa kayan aikin salonku." },
            { objective: "O3", q: "Labaran ƙungiya da AI ya rubuta sun ninka tsawon da kuke buƙata. Me za ku yi?", options: ["Ku aika duk da haka", "Ku fara sabuwar hira da wani kayan aiki", "Ku goge rabin na biyu", "Ku nemi gyara ɗaya, kamar \"ka gajarta shi zuwa gajerun jimloli biyar\", sannan ku karanta shi da babbar murya"], answer: 3, why: "Tambayar biyo baya ɗaya mai sarari tana gyara tsawo, kuma karantawa da babbar murya tana kama abin da ba za ku faɗa ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Hanyoyin aiki uku na AI ga shugabanni",
        questions: [
          { objective: "O1", q: "Me yasa za a ƙara \"Kada ka ƙara komai da ba ya cikin bayanan\" a prompt ɗin taro?", options: ["Yana ɓoye masu yin ayyuka", "Yana tsawaita jerin", "Yana hana kayan aikin ƙirƙirar ayyuka", "Doka ce ta buƙace shi"], answer: 2, why: "AI yana iya cike giɓi da abubuwan da aka ƙirƙira." },
          { objective: "O1", q: "Kafin ku kunna mai naɗar taro na AI, ya kamata ku:", options: ["Duba doka ku sanar da mahalarta", "Naɗa a ɓoye", "Sanar da shugaba kawai", "Kashe makirufo"], answer: 0, why: "Naɗar mutane yana tayar da tambayoyi game da izini da sirri." },
          { objective: "O2", q: "Wace tambayar biyo baya ce ta fi ƙara amfani ga takardar yanke shawara?", options: ["\"Ka tsawaita ta.\"", "\"Ka ƙara emoji.\"", "\"Ka yi amfani da manyan kalmomi.\"", "\"Mene ne hujja mafi ƙarfi da ke adawa da zaɓin da na fi so?\""], answer: 3, why: "Tana fito da abubuwan da ba ku lura da su ba." },
          { objective: "O2", q: "Wane ne ke rubuta shawarar ƙarshe a takardar yanke shawara?", options: ["AI", "Ku, shugaba", "Mai kawo kaya", "Babu kowa"], answer: 1, why: "Shugabanni ne ke da nauyin shawarwari; AI yana faɗaɗa tunani ne kawai." },
          { objective: "O3", q: "Dole ku sanar da canjin doka da ya shafi albashi. Wace hanya ce ta fi kyau?", options: ["Ku aika daftarin AI da ba a duba ba ta imel", "Ku bar AI ya isar da shi", "Ku ƙi yin sanarwar", "Ku yi amfani da AI don tsara shi, HR ya duba, ku isar ido da ido"], answer: 3, why: "Labarai masu muhimmanci suna buƙatar duban mutum da isarwa ta mutum." }
        ]
      }
    },
    {
      name: "Babi na 2: Mutane, kayan aiki da jagororin ƙungiya",
      lessons: [
        {
          objectives: ["O4"],
          title: "Shiryawa don tattaunawa da mutane ba tare da ba AI ragamar ba",
          minutes: 5,
          goal: "Amfani da AI don shiryawa tattaunawa mai wuya yayin da kuke kiyaye bayanan sirri.",
          text: [
            "Tattaunawa kan ra'ayi game da aiki (feedback), rikici da yadda mutum yake aiki su ne inda shugabanni suka fi son taimako, kuma inda AI ya fi haɗari. Bayanan sirri game da ma'aikaci na ɓoye ne; kada ku saka sunaye, bayanan lafiya, bayanan horo ko makin aiki a kayan AI na jama'a.",
            "Har yanzu kuna iya shiryawa. Ku bayyana halin da ake ciki a gama-gari (\"wani a ƙungiya yakan wuce lokacin ƙarshe, ana son shi, kuma kwanan nan an sami canji a iyalinsa\") ku nemi: jimlar farawa, tambayoyi don fahimtar gefensa, da hanyoyin yarda kan matakai na gaba. Ku nemi ya yi kamar shi ne ɗayan mutumin (role-play) don ku yi atisaye.",
            "Kada ku taɓa barin AI ya yanke shawara kan ɗaukar aiki, horo, albashi ko kora, kuma kada ku taɓa aika ra'ayin da AI ya rubuta ba tare da kun sake rubuta shi da kalmominku ba. Mutane suna gane hakan, kuma amincewa ce za ku rasa."
          ],
          steps: ["Ku bayyana halin da ake ciki a gama-gari, ba tare da sunaye ko bayanan sirri ba.", "Ku nemi jimlar farawa, tambayoyi da zaɓuɓɓukan matakai na gaba.", "Ku yi atisaye da role-play.", "Ku rubuta bayananku da kalmominku.", "Ku bar shawarwari game da mutane a hannun mutane."],
          words: [["Role-play (wasan kwaikwayo)", "yin atisayen tattaunawa da wani (ko AI) da ke yin kamar shi ne ɗayan mutumin."], ["Na ɓoye (confidential)", "bayanan da dole a kiyaye su a sirri, a raba su kawai da mutanen da ke buƙatarsu."]],
          slides: [
            { title: "Ku kiyaye bayanan sirri", bullets: ["Babu sunaye, bayanan lafiya ko na horo", "Babu makin aiki a kayan AI na jama'a"] },
            { title: "Ku shirya a gama-gari", bullets: ["Ku nemi jimlar farawa da tambayoyi masu kyau", "Ku nemi zaɓuɓɓukan matakai na gaba", "Ku yi atisaye da role-play"] },
            { title: "Iyakokin da ba za ku ƙetare ba", bullets: ["AI ba ya yanke shawara kan ɗaukar aiki, albashi ko horo", "Ku sake rubuta ra'ayi da kalmominku"] }
          ],
          tryIt: "Ku yi tunanin wata tattaunawa da kuke buƙatar yi. Ku bayyana ta a gama-gari ba tare da sunaye ba, ku nemi jimlar farawa da tambayoyi uku, sannan ku yi role-play sau ɗaya.",
          youCanNow: "shiryawa don tattaunawa mai wuya da AI yayin da kuke kare sirrin mutane da amincewar da suke yi muku.",
          quickCheck: [
            { objective: "O4", q: "Me za ku iya saka a kayan AI na jama'a lokacin shiryawa tattaunawa kan aikin wani?", options: ["Sunan ma'aikacin da tarihin makinsa", "Bayani na gama-gari ba tare da sunaye ko bayanan sirri ba", "Bayanan lafiyarsa, don ku nuna tausayi", "Dukan fayil ɗinsa na ma'aikata"], answer: 1, why: "Bayani na gama-gari ne kaɗai ke hana bayanan sirrin mutumin shiga kayan aikin." },
            { objective: "O4", q: "AI ya ba da shawarar ainihin abin da za ku faɗa da shawarar da za ku yanke game da wani ma'aikaci. Me za ku yi?", options: ["Ku yi amfani da tunaninsa na jimlar farawa don atisaye, ku yanke shawarar da kanku", "Ku karanta rubutunsa kalma bayan kalma", "Ku bar AI ya aika saƙon", "Ku kwafi shawararsa a bayanan HR"], answer: 0, why: "AI zai iya taimaka muku shiryawa, amma tattaunawar da shawarar suna hannunku." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Zaɓa da amfani da kayan AI cikin hikima",
          minutes: 5,
          goal: "Kwatanta kayan AI kan tambayoyin da suka fi muhimmanci ga ƙungiyarku.",
          text: [
            "Akwai kayan AI da yawa: mataimaka na gama-gari (ChatGPT, Microsoft Copilot, Google Gemini, Claude), mataimaka a cikin kayan aikin da kuke amfani da su (Microsoft 365, Google Workspace, Canva, manhajojin taro), da fasalolin agent da ke iya ɗaukar mataki. Fasaloli da farashi suna canjawa sau da yawa.",
            "Ku yi tambayoyi biyar kafin ƙungiyarku ta fara amfani da ɗaya. Bayanai: shin yana ajiye ko yana koyo daga abin da muke rubutawa, kuma za mu iya kashe hakan? Iko (access): me zai iya karantawa ko yi a tsarinmu? Amincewa: shin ƙungiyarmu ko sashen IT sun amince da shi? Daidaito: shin zai iya nuna majiyoyi? Kuɗi: nawa ne ga kowane mutum, yanzu da lokacin sabuntawa?",
            "Ku nemi amsoshin a shafukan sirri da farashi na kamfanin da kansa da kuma a kwangilarku, ba a talla ba. Tsare-tsaren kasuwanci da na ilimi sau da yawa suna da sharuɗɗan bayanai daban da na tsare-tsaren kyauta na mutum ɗaya; ku karanta su don tsarin da za ku yi amfani da shi a zahiri."
          ],
          steps: ["Ku jera kayan aikin da ƙungiyarku ke amfani da su ko take so.", "Ku duba bayanai: ajiya da koyo daga abin da kuke rubutawa.", "Ku duba iko: me zai iya karantawa ko yi.", "Ku duba amincewa, daidaito da kuɗi.", "Ku yi amfani da shafukan kamfanin da kansa da kwangilarku."],
          words: [["Sharuɗɗan bayanai (data terms)", "dokokin yadda kamfani ke ajiye da amfani da abin da kuke rubutawa."], ["Mataimakin da ke ciki (built-in assistant)", "fasalin AI a cikin kayan aikin da kuke amfani da shi, kamar shirin rubutu."]],
          slides: [
            { title: "Nau'o'in kayan AI", bullets: ["Mataimaka na gama-gari", "Mataimaka a cikin kayan aikin da kuke amfani da su", "Fasalolin agent da ke ɗaukar mataki"] },
            { title: "Tambayoyi biyar", bullets: ["Bayanai: ana ajiyewa ko ana koyo daga su?", "Iko: me zai iya karantawa ko yi?", "Amincewa, daidaito, kuɗi"] },
            { title: "Inda za ku sami amsoshi", bullets: ["Shafukan sirri da farashi na kamfanin", "Kwangilarku", "Sharuɗɗa sun bambanta da tsari: ku duba naku"] }
          ],
          tryIt: "Ku zaɓi kayan AI ɗaya da ƙungiyarku ke amfani da shi ko take so. Ku amsa tambayoyi biyar ɗin ta amfani da shafukan kamfanin da kansa. Ku rubuta hukunci na layi ɗaya: a amince, a amince da iyaka, ko ba yanzu ba.",
          youCanNow: "auna kayan AI kan bayanai, iko, amincewa, daidaito da kuɗi.",
          quickCheck: [
            { objective: "O5", q: "Me tambayar \"iko (access)\" game da kayan AI take tambaya?", options: ["Nawa ne kuɗinsa", "Yaya saurin amsarsa", "Me zai iya karantawa ko yi a tsarinku", "Waɗanne harsuna yake magana"], answer: 2, why: "Iko yana faɗa muku abin da kayan aikin zai iya gani ko canjawa idan wani abu ya lalace." },
            { objective: "O5", q: "Ƙungiyarku tana amfani da tsarin kyauta na mutum ɗaya kuma kuna son sanin ko yana koyo daga bayananku. A ina za ku duba?", options: ["Wani labarin jarida na bara", "Sharuɗɗan sirri na kamfanin da kansa don wannan tsarin", "Tsammanin abokin aiki", "Amsar AI da kansa a hira"], answer: 1, why: "Tsare-tsaren kyauta da na kasuwanci suna iya samun sharuɗɗan bayanai daban, kuma shafukan kamfanin su ne majiya." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rubuta jagorar amfani da AI ta shafi ɗaya ga ƙungiya",
          minutes: 6,
          goal: "Rubuta gajeriyar jagorar amfani da AI da ƙungiyarku za ta iya bi.",
          text: [
            "Jagora ta shafi ɗaya ta fi doka mai tsawo da babu mai karantawa. Tana amsa tambayoyi biyar: Waɗanne kayan aiki za mu iya amfani da su? Me ba za a taɓa sakawa ba? Me dole mutum ya duba kafin ya fita? Yaushe za mu faɗi cewa AI ya taimaka? Wa za mu tambaya?",
            "Ku rubuta ta da kalmomi masu sauƙi da misalai daga aikin ƙungiyarku: \"Kada ku taɓa saka sunayen abokan ciniki, adireshinsu ko bayanan biyansu.\" \"Mutum yana duba kowane bayani, lamba da zance.\" \"Ku sanar da abokin ciniki idan yana hira da AI.\" Idan ƙungiyarku tana da doka ta hukuma, dole jagorarku ta dace a cikinta; ku tuntuɓi HR, IT ko sashen shari'a.",
            "Ku yi amfani da AI don rubuta daftarinta daga bayananku, sannan ku gyara ta sosai. Ku raba ta, ku tambayi ƙungiya abin da bai yi sarari ba, kuma ku sake duba ta bayan 'yan watanni, domin kayan aiki da haɗurra suna ci gaba da canjawa."
          ],
          steps: ["Ku amsa tambayoyi biyar ɗin a gajerun bayanai.", "Ku yi amfani da AI don rubuta shafi ɗaya daga bayananku.", "Ku ƙara misalai na gaske daga aikin ƙungiyarku.", "Ku duba cewa ta dace da duk wata dokar ƙungiya.", "Ku raba ta, ku tambayi abin da bai yi sarari ba, ku sa ranar sake dubawa."],
          words: [["Jagorar amfani da AI", "gajerun dokoki na yadda ƙungiya ke amfani da kayan AI."], ["Bayyanawa (disclosure)", "sanar da mutane cewa AI ya taimaka wajen yin wani abu ko cewa suna magana da AI."]],
          slides: [
            { title: "Tambayoyi biyar, shafi ɗaya", bullets: ["Waɗanne kayan aiki?", "Me ba za a taɓa sakawa ba?", "Me dole mutum ya duba?", "Yaushe za mu bayyana? Wa za mu tambaya?"] },
            { title: "Kalmomi masu sauƙi, misalai na gaske", bullets: ["\"Kada ku taɓa saka bayanan biyan abokan ciniki\"", "\"Mutum yana duba kowane bayani da lamba\""] },
            { title: "Ku sa ta ci gaba da aiki", bullets: ["Ta dace a cikin duk wata doka ta hukuma", "Ku tambayi ƙungiya abin da bai yi sarari ba", "Ku sake duba ta bayan 'yan watanni"] }
          ],
          tryIt: "Aikin ƙarshe: ku ajiye prompt ɗinku uku da kuka gwada (ayyukan taro, takardar yanke shawara, labarai ga ƙungiya) a takarda ɗaya, ku ƙara jagorar amfani da AI ta shafi ɗaya mai kayan aiki, abin da ba za a taɓa sakawa ba, abin da dole a duba, bayyanawa da wanda za a tambaya. Ku raba ta da abokin aiki ɗaya don ra'ayinsa.",
          youCanNow: "jagorantar yadda ƙungiyarku ke amfani da AI a kullum da akwatin kayan aiki da aka gwada da jagora mai sarari ta shafi ɗaya.",
          quickCheck: [
            { objective: "O6", q: "Mene ne ma'anar bayyanawa (disclosure) a jagorar AI ta ƙungiya?", options: ["Raba kalmomin sirrinku da IT", "Jera kowane kayan AI da aka taɓa yi", "Saka prompt ɗinku a intanet", "Sanar da mutane lokacin da AI ya taimaka ko lokacin da suke magana da AI"], answer: 3, why: "Bayyanawa tana sa mutane su san inda aka yi amfani da AI." },
            { objective: "O6", q: "Ƙungiyarku tana da dokar AI ta hukuma. Ta yaya jagorarku ta shafi ɗaya za ta danganta da ita?", options: ["Ta dace a cikinta kuma ta nuna ta", "Ta maye gurbinta da dokoki masu sauƙi", "Ta yi watsi da ita, domin ƙungiyoyi sun bambanta", "Ta kwafe ta kalma bayan kalma, gaba ɗaya"], answer: 0, why: "Jagorar ƙungiya tana ƙara bayanai na aiki amma dole ta kasance cikin dokar ƙungiyar." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Mutane, kayan aiki da jagororin ƙungiya",
        questions: [
          { objective: "O4", q: "Lokacin shiryawa tattaunawa kan aikin wani, me za ku iya saka a kayan AI na jama'a?", options: ["Sunan ma'aikacin da makinsa", "Takardar lafiyarsa", "Bayani na gama-gari ba tare da sunaye ko bayanan sirri ba", "Fayil ɗinsa na horo"], answer: 2, why: "Ku bayyana halin da ake ciki a gama-gari; ku kiyaye bayanan sirri." },
          { objective: "O4", q: "Wace shawara ce kada AI ya taɓa yanke ta?", options: ["Horon ma'aikaci", "Zaɓar lokacin taro", "Zaɓar nau'in rubutu (font)", "Jera abubuwan da za a tattauna a taro"], answer: 0, why: "Shawarwari game da mutane suna hannun mutane." },
          { objective: "O5", q: "A ina ya kamata ku duba ko kayan aiki yana koyo daga bayananku?", options: ["Tallar kayan aikin", "Sharuɗɗan sirri na kamfanin da kansa don tsarinku", "Ra'ayin aboki", "Tambarin (logo) kayan aikin"], answer: 1, why: "Sharuɗɗan hukuma na ainihin tsarinku su ne majiya." },
          { objective: "O6", q: "Mene ne babban amfanin jagorar AI ta shafi ɗaya?", options: ["Mutane suna karanta ta kuma suna bin ta a zahiri", "Tana ƙunshe da kowane hali da zai iya faruwa", "Ba ta taɓa buƙatar sabuntawa", "Tana maye gurbin dukkan dokoki"], answer: 0, why: "Gajerun jagorori masu sauƙi ana amfani da su." },
          { objective: "O6", q: "Sau nawa ya kamata ku sake duba jagorar AI ta ƙungiyarku?", options: ["Ba sau ɗaya ba", "Kowace shekara goma", "Bayan bala'i kawai", "Bayan 'yan watanni, yayin da kayan aiki da haɗurra ke canjawa"], answer: 3, why: "Kayan AI suna canjawa da sauri." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Shugabanci a Zamanin Agentic AI 2: AI ga Shugabanni na Zamani da Kayan AI ga Shugabanni",
    questions: [
      { objective: "O1", q: "Prompt mai kyau na bayanan taro yana neman:", options: ["Waƙa", "Shawarwari, ayyuka masu masu yi da ranaku, tambayoyin da ba a amsa ba", "Albashin kowa", "Sabon tsarin taro kawai"], answer: 1, why: "Wannan tsari yana mayar da bayanai zuwa aiki." },
      { objective: "O1", q: "Idan AI ya jera aiki ba tare da wanda zai yi ba, prompt ɗin ya kamata ya sa ya rubuta:", options: ["Sunanku", "Wani suna kawai", "MISSING", "Babu komai"], answer: 2, why: "Nuna giɓi yana hana ƙirƙirar masu yin ayyuka." },
      { objective: "O1", q: "Kafin ku saka bayanai a AI ya kamata ku:", options: ["Ƙara kalmomin sirri", "Ƙara ƙarin sunaye", "Cire bayanan sirri ko na ɓoye", "Fassara su"], answer: 2, why: "Bayanan sirri ba sa shiga kayan aikin jama'a." },
      { objective: "O2", q: "A takardar yanke shawara, mafi kyawun aikin AI shi ne:", options: ["Faɗaɗa zaɓuɓɓukanku da fito da abubuwan da ba ku lura da su ba", "Yanke shawarar", "Sa hannu a takardar", "Maye gurbin ƙungiyarku"], answer: 0, why: "Ku ne ke yanke shawara; AI yana taimaka muku ku yi tunani mai faɗi." },
      { objective: "O2", q: "\"Wane bayani ne ban sani ba?\" shi ne:", options: ["Umarnin tsara rubutu", "Ɓata lokaci", "Haɗari ga sirri", "Tambayar biyo baya mai amfani da ke fito da abubuwan da ba a lura da su ba"], answer: 3, why: "Tana fito da giɓi a tunaninku." },
      { objective: "O2", q: "Wane dalili ne kada takarda ta taɓa bayarwa?", options: ["\"Ya dace da kasafin kuɗinmu\"", "\"AI ne ya ba da shawara\"", "\"Ya kai lokacin ƙarshe\"", "\"Ƙungiyarmu za ta iya aiwatar da shi\""], answer: 1, why: "Shugabanni ne ke da nauyin dalilansu." },
      { objective: "O3", q: "Don sa daftarin AI ya yi kama da ku:", options: ["Ku yi amfani da wani kayan aiki daban", "Ku ƙara alamomin motsin rai (!)", "Ku nemi kalmomi masu tsawo", "Ku saka tsohon saƙo ku ce \"ka bi wannan salon\""], answer: 3, why: "Misalan rubutunku suna jagorantar salon." },
      { objective: "O3", q: "Karanta saƙo da babbar murya kafin aikawa yana taimaka muku:", options: ["Ƙara kalmomin fasaha masu wuya", "Tsawaita shi", "Cire abin da ba za ku faɗa ido da ido ba", "Tsallake dubawa"], answer: 2, why: "Kunnenku yana kama salon da bai dace ba." },
      { objective: "O3", q: "Don labarai game da korar ma'aikata, AI zai iya taimaka muku:", options: ["Tsara saƙon, tare da duban HR ko sashen shari'a", "Aika shi ba tare da dubawa ba", "Yanke wanda za a kora", "Guje wa sanar da mutane"], answer: 0, why: "Labarai masu muhimmanci suna buƙatar duban mutum." },
      { objective: "O4", q: "Wane bayani ne kada ya taɓa shiga kayan AI na jama'a?", options: ["Tsarin taro na gama-gari", "Bayanan lafiyar wani ma'aikaci", "Ranakun taron jama'a", "Sunan ƙungiyarku"], answer: 1, why: "Bayanan lafiya na ɓoye ne." },
      { objective: "O4", q: "Role-play da AI yana taimaka muku:", options: ["Yin atisayen tattaunawa mai wuya", "Tsallake tattaunawar", "Naɗar ma'aikacin", "Yanke albashi"], answer: 0, why: "Atisaye yana gina ƙarfin gwiwa ba tare da raba bayanan sirri ba." },
      { objective: "O4", q: "Ra'ayin da AI ya rubuta ya kamata a:", options: ["Ɓoye shi daga ma'aikacin", "Aika shi kamar yadda yake", "Saka shi a fili ga jama'a", "Sake rubuta shi da kalmominku"], answer: 3, why: "Mutane suna gane hakan, kuma amincewa tana da muhimmanci." },
      { objective: "O5", q: "Wanne ne mataimakin da ke ciki (built-in)?", options: ["Littafin rubutu na takarda", "Fasalin AI a cikin shirin rubutunku", "Wayar tebur", "Firinta"], answer: 1, why: "Kayan aiki da yawa da aka saba da su yanzu suna da fasalolin AI." },
      { objective: "O5", q: "Tambayar \"bayanai\" game da kayan aiki tana tambaya:", options: ["Shin ya shahara?", "Wane launi ne shi?", "Shin yana ajiye ko yana koyo daga abin da muke rubutawa?", "Maɓalli nawa yake da su?"], answer: 2, why: "Sharuɗɗan bayanai ne ke yanke abin da ke da aminci a rubuta." },
      { objective: "O5", q: "Tambayar \"iko (access)\" tana tambaya:", options: ["Shin ofis a buɗe yake?", "Shin ma'aikata za su iya shiga intanet?", "Me zai iya karantawa ko yi a tsarinmu?", "Wa ke da makullin ƙofa?"], answer: 2, why: "Fasalolin agent suna iya ɗaukar mataki a tsarinku." },
      { objective: "O5", q: "Tsare-tsaren kyauta na mutum ɗaya da tsare-tsaren kasuwanci:", options: ["Suna iya samun sharuɗɗan bayanai daban", "Koyaushe suna da sharuɗɗa iri ɗaya", "Ba sa taɓa ajiye bayanai", "Koyaushe kyauta ne"], answer: 0, why: "Ku karanta sharuɗɗan tsarin da za ku yi amfani da shi." },
      { objective: "O6", q: "Jagorar AI ta shafi ɗaya tana amsa:", options: ["Wanda ke da iko kawai", "Kowace tambayar shari'a", "Farashi kawai", "Waɗanne kayan aiki, me ba za a taɓa sakawa ba, me za a duba, bayyanawa, wa za a tambaya"], answer: 3, why: "Tambayoyi biyar masu sauƙi suna ƙunshe da amfanin yau da kullum." },
      { objective: "O6", q: "Bayyanawa (disclosure) tana nufin:", options: ["Ɓoye amfani da AI", "Sanar da mutane cewa AI ya taimaka ko cewa suna magana da AI", "Goge bayanai", "Raba kalmomin sirri"], answer: 1, why: "Gaskiya game da AI tana gina amincewa." },
      { objective: "O6", q: "Idan ƙungiyarku tana da dokar AI ta hukuma, jagorar ƙungiyarku dole ta:", options: ["Saɓa mata", "Maye gurbinta", "Yi watsi da ita", "Dace a cikinta"], answer: 3, why: "Jagororin ƙungiya suna aiki cikin dokar ƙungiyar." },
      { objective: "O6", q: "Akwatin kayan AI na shugaba ya fi kyau a ajiye shi a matsayin:", options: ["Kalmomin sirrin wasu mutane", "Prompt kawai da kuke mantawa", "Prompt da aka gwada kuma ake sake amfani da su, a wuri ɗaya", "Jerin kowane kayan AI"], answer: 2, why: "Prompt da aka ajiye kuma aka gwada suna sa kyawawan halaye su maimaitu." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [0, 2, 3, 5, 6, 9, 11, 13, 16, 19]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Prompt na ayyukan taro",
        objective: "O1",
        notYet: "Babu prompt da aka ajiye, ko ba a gwada shi kan bayanai na gaske ba.",
        meets: "Prompt da aka ajiye da ke mayar da bayanai zuwa ayyuka masu masu yi da ranaku, an yi amfani da shi sau ɗaya bayan an cire bayanan sirri.",
        exceeds: "Prompt ɗin yana nuna inda babu wanda zai yi aiki, kuma yana hana ƙirƙirar ayyuka."
      },
      {
        name: "Prompt na takardar yanke shawara",
        objective: "O2",
        notYet: "Babu prompt da aka ajiye, ko AI ne ya bayar da shawarar ƙarshe.",
        meets: "Prompt da aka ajiye don zaɓuɓɓuka da haɗurra, an yi amfani da shi sau ɗaya, kuma shugaba ne ya rubuta shawarar ƙarshe.",
        exceeds: "Yana da tambayoyin biyo baya da ke gwada zaɓin da aka fi so."
      },
      {
        name: "Prompt na labarai ga ƙungiya",
        objective: "O3",
        notYet: "Babu prompt da aka ajiye, ko ba a duba saƙon ba.",
        meets: "Prompt da aka ajiye don labarai ga ƙungiya, an yi amfani da shi sau ɗaya kuma an gyara salo ko tsawo.",
        exceeds: "Yana da misalin rubutun shugaban da kansa don a bi salonsa."
      },
      {
        name: "Jagorar AI ta shafi ɗaya",
        objective: "O6",
        notYet: "Babu kayan aikin da aka amince da su, abin da ba za a taɓa sakawa ba, abin da dole a duba, ko wanda za a tambaya.",
        meets: "Shafi ɗaya da ke ƙunshe da kayan aikin da aka amince da su, abin da ba za a taɓa sakawa ba, abin da dole mutum ya duba, da wanda za a tambaya.",
        exceeds: "Tana kuma magana kan bayyanawa, kuma an raba ta da abokin aiki don ra'ayinsa."
      },
      {
        name: "An kiyaye bayanan sirri",
        objective: "O4",
        notYet: "Wani prompt ko misali yana da sunaye ko bayanan sirri.",
        meets: "Babu bayanan sirri ko na ɓoye a kowane prompt da aka ajiye ko misali.",
        exceeds: "Prompt ɗin suna amfani da madadi kamar [ɗan ƙungiya] don su kasance lafiya a sake amfani da su."
      }
    ]
  },
  evaluation: {
    results: [
      "Shugabannin da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Ƙungiyoyin da ke da jagorar amfani da AI ta shafi ɗaya cikin kwanaki 30 (binciken biyo baya)",
      "Shugabannin da suka ce suna adana lokaci kowane mako da prompt ɗinsu da ake sake amfani da su (binciken biyo baya)",
      "Shugabannin da suka ci gaba zuwa kwas na 3 na Shugabanci a Zamanin Agentic AI"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai mataimakin AI; ku yi amfani da wanda ƙungiyarku ta amince da shi",
      "Bayanan wani taro na kwanan nan, wata shawara ta gaske, da labarai ga ƙungiya, bayan an cire bayanan sirri",
      "Takarda (document) don ajiye prompt da jagorar amfani da AI",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku gwada prompt ɗin bayanan taro kai tsaye kan bayanan ƙirƙira kafin shugabanni su yi amfani da nasu.",
      "Ku tunatar da shugabanni su bi dokar AI ta ƙungiyarsu, kuma su sa HR ko sashen shari'a cikin shawarwari game da mutane da labarai masu muhimmanci.",
      "Ku haɗa shugabanni bibbiyu don yin role-play na tattaunawa mai wuya ta amfani da bayani na gama-gari kawai.",
      "Ku sa shugabanni su musanya daftarin jagororin AI ɗinsu, kowanne ya ba da ra'ayi ɗaya.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku duba cewa babu prompt da aka ajiye da ke da bayanan sirri."
    ]
  }
};

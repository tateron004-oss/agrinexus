"use strict";

// Koach Learn course, Hausa (ha) translation of youth/youth-ai-school-success.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "youth-ai-school-success-ha",
  lang: "ha",
  translationOf: "youth-ai-school-success",
  category: "Youth",
  name: "AI don Samun Nasara a Makaranta",
  skills: "Tsara makon karatu, Raba babban aiki zuwa matakai, Fahimtar karatu mai wuya, Samun shawara kan rubutunku, Yin tsarin karatun jarabawa, Amfani da AI bisa dokokin makaranta",
  outcome: "amfani da mataimakin AI kyauta, bisa dokokin makarantarku, don tsara makonku, raba babban aikin makaranta zuwa matakai, fahimtar karatu mai wuya, samun shawara kan rubutun da kuka yi da kanku, da yin tsarin karatu don jarabawa ta gaske.",
  about: [
    "Wannan kwas ɗin na ɗaliban sakandare ne masu shekaru kusan 13 zuwa 18 da ke son makaranta ta daina yi musu nauyi sosai. Yana ɗaukar AI a matsayin mai tsara aiki, mai horarwa da abokin karatu, ba wanda zai yi muku aikinku ba.",
    "Za ku tsara mako na gaske, ku raba babban aiki zuwa ƙananan matakai, ku sami taimako don fahimtar karatu mai wuya, ku sami shawara kan daftarin da kuka rubuta, sannan ku yi tsarin karatu don jarabawa mai zuwa.",
    "Dokoki tukuna: kowace makaranta da kowane malami yana da nasa dokokin game da AI. Ku duba su, ku duba ƙa'idar shekarun kayan aikin, kuma ku yi magana da mahaifi ko mai kula da ku kafin ku buɗe kowane asusu. Ku yi amfani da asusun makarantarku don kayan aikin da makaranta ta amince da su. Kowane darasi yana ɗaukar kusan minti biyar, kuma yana ƙarewa da aikin \"Gwada yanzu\"."
  ],
  finalTask: "Ku zaɓi jarabawa ko aiki na gaske da ke zuwa cikin makonni biyu masu zuwa. Ku yi amfani da AI don yin tsarin karatu na kowace rana da ya dace da azuzuwanku, ayyukanku na waje, da aikinku ko ayyukan gida, sannan ku nemi tambayoyin atisaye 5 da aka ɓoye amsoshinsu, ku amsa su da kanku, ku duba su da rubuce-rubucenku na aji, kuma ku rubuta layi ɗaya kan yadda kuka bi dokokin AI na makarantarku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ɗaliban sakandare masu shekaru kusan 13 zuwa 18 da makaranta ke yi musu nauyi, waɗanda sau da yawa suke haɗa karatu da wasanni, ƙungiyoyi, aikin ɗan lokaci ko ayyukan gida.",
    startingPoint: "Suna amfani da waya da kwamfutocin makaranta kowace rana, kuma wataƙila sun taɓa gwada mataimakin hira. Da yawa suna karatun gaggawa a daren kafin jarabawa, suna jinkirta manyan ayyuka, kuma ba su da tabbas kan irin amfani da AI da makarantarsu ta yarda da shi.",
    gap: "Ɗalibai za su iya amfani da AI don tsara aiki, fahimtar karatu mai wuya da yin karatu mafi kyau, amma amfani da shi don ya yi musu aikinsu na iya zama satar amsa (cheating) kuma yana hana su koyo. Suna buƙatar amfani da AI a matsayin mai tsara aiki, mai horarwa da abokin karatu bisa dokokin makarantarsu, don su riƙa tafiya tare da aji kuma su yi kyau a jarabawa.",
    constraints: [
      "Dokokin AI na makarantu da malamai sun bambanta; dokar malami ga kowane aiki ita ce mai aiki",
      "Iyakar shekaru da izinin mahaifi ko mai kula don sababbin asusu; asusun makaranta don kayan aikin makaranta",
      "Na'urori: waya, kwamfutar makaranta ko ta ɗakin karatu; kayan aiki kyauta kaɗai",
      "Sirri: babu bayanan sirri da za a saka a kayan aikin AI",
      "Jadawali mai cike: darussa na minti 5 da kalmomi masu sauƙi"
    ],
    prerequisites: "Babu. Kwas ɗin \"Mene ne AI? (don Matasa)\" yana taimakon masu koyo da ba su taɓa amfani da mataimakin AI ba."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da ayyukanku, ranakun miƙawa da lokutanku da ba sa canjawa na mako", action: "yin tsarin mako mai sauƙi da AI, da canja shi don ya dace da rayuwarku ta gaske", standard: "aiki mafi wuya a farko, da hutu, kuma an kwafi tsarin a littafin tsari ko kalanda" },
    { id: "O2", condition: "Idan kuna da babban aikin makaranta da ranar miƙa shi", action: "raba aikin zuwa matakai na minti 30 masu ranaku, da duba su da rubric ɗin malami", standard: "kuna gamawa kwana biyu kafin lokaci, kuma kowane sashe da ake buƙata yana ciki" },
    { id: "O3", condition: "Idan kuna da sakin layi mai wuya daga karatun aji", action: "karanta shi da kanku, neman AI ya bayyana shi kuma ya faɗi ma'anar kalmomi masu wuya, sannan sake karanta shi", standard: "kuna rubuta jimla ɗaya daidai da kalmominku game da ma'anarsa" },
    { id: "O4", condition: "Idan kuna da daftarin da kuka rubuta da izinin malaminku", action: "neman AI ya faɗi abubuwa uku da za a inganta maimakon ya sake rubuta shi, da gyara daftarin da kalmominku", standard: "kowane canji ku ne kuka rubuta shi" },
    { id: "O5", condition: "Idan kuna da ranar jarabawa ta gaske, batutuwanta da lokacinku na kowace rana", action: "gina tsarin karatu na kowace rana mai tambayoyin atisaye, amsa su da farko, da duba su da rubuce-rubucenku na aji", standard: "kuna ba da ƙarin lokaci ga tambayoyin da kuka yi kuskure" },
    { id: "O6", condition: "A kowane aiki da za ku iya amfani da AI", action: "bin dokar AI ta malaminku, tabbatar da kowane bayani ko majiya da kanku, da rubuta layi ɗaya kan yadda kuka yi amfani da AI", standard: "ba tare da miƙa aikin da AI ya rubuta wanda ba a yarda da shi ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsara kanku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Tsara makonku na makaranta",
          minutes: 5,
          goal: "Mayar da jerin ayyuka mai rikitarwa zuwa tsarin mako mai sauƙi.",
          text: [
            "Makaranta, atisayen wasa, ƙungiyoyi, aikin ɗan lokaci, ayyukan gida da abokai duk suna neman lokacinku. Mataimakin AI zai iya taimaka muku ku tsara su idan kun ba shi bayanai.",
            "Ku rubuta abin da ake buƙata da ranar miƙa shi, tare da lokutanku da ba sa canjawa kamar atisaye ko aiki. Sannan ku tambaya: \"Ga makona. Ka yi mini tsari mai sauƙi mai lokacin karatu kowace rana, aiki mafi wuya a farko, da hutu. Ya dace da allo ɗaya.\"",
            "Tsarin daftari ne. Ku matsar da abubuwa har ya dace da rayuwarku ta gaske, sannan ku saka shi a littafin tsari (planner), Google Calendar ko manhajar kalandar makarantarku."
          ],
          steps: ["Ku rubuta kowane aiki da ranar miƙa shi.", "Ku ƙara lokutan da ba sa canjawa: aji, atisaye, aiki, iyali.", "Ku nemi AI ya yi tsarin mako mai sauƙi mai hutu.", "Ku canja shi don ya dace da ku, sannan ku kwafe shi a littafin tsari ko kalanda."],
          words: [["Ranar miƙawa (due date)", "ranar da dole a miƙa aiki."], ["Fifita (prioritize)", "yanke abin da za a fara yi domin ya fi muhimmanci ko lokacinsa ya fi kusa."]],
          slides: [
            { title: "Ku ba AI bayanai", bullets: ["Abin da ake buƙata da ranar miƙa shi", "Lokutan atisaye, aiki da iyali"] },
            { title: "Ku nemi tsari mai sauƙi", bullets: ["Lokacin karatu kowace rana", "Aiki mafi wuya a farko", "Da hutu a ciki", "Ya dace da allo ɗaya"] },
            { title: "Ku mayar da shi na gaske", bullets: ["Ku matsar da abubuwa don su dace da rayuwarku", "Ku kwafe shi a littafin tsari ko kalanda"] }
          ],
          tryIt: "Ku rubuta duk abin da ake buƙata a wannan makon da lokutanku da ba sa canjawa. Ku nemi mataimakin AI da aka yarda ku yi amfani da shi ya yi tsarin mako mai sauƙi. Ku canja abu ɗaya don ya dace da rayuwarku, sannan ku kwafe shi a littafin tsari ko kalanda.",
          youCanNow: "gina tsarin mako na gaske tare da taimakon AI.",
          quickCheck: [
            { objective: "O1", q: "Mene ne \"lokutan da ba sa canjawa\" idan kuna tsara makonku?", options: ["Lokutan da ba za ku iya matsarwa ba, kamar aji, atisaye ko aiki", "Lokutan da kuka shirya hutawa", "Ranakun miƙa aikin gida kaɗai", "Lokutan da AI ya zaɓa muku"], answer: 0, why: "Lokutan da ba sa canjawa alƙawura ne da dole tsarin ya dace da su." },
            { objective: "O1", q: "Tsarin AI ya saka lokacin karatu a lokacin aikinku. Me za ku yi?", options: ["Ku ƙi zuwa aiki", "Ku yi watsi da tsarin", "Ku matsar da lokacin karatu don ya dace da jadawalinku na gaske", "Ku nemi AI ya soke aikinku"], answer: 2, why: "Tsarin AI daftari ne; ku ne kuke canja shi don ya dace da rayuwarku ta gaske." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Raba babban aiki zuwa ƙananan matakai",
          minutes: 5,
          goal: "Raba babban aikin makaranta zuwa ƙananan matakai masu ranaku.",
          text: [
            "Manyan ayyuka suna ba da tsoro domin suna kama da abu ɗaya babba. Raba su zuwa ƙananan matakai yana sa su zama masu yiwuwa.",
            "Ku ba AI umarnin aikin (da kalmominku ko ku liƙa su, ba tare da bayanan sirri ba) da ranar miƙawa. Ku tambaya: \"Ka raba wannan zuwa ƙananan matakai da zan iya yi a minti 30 kowanne, da rana ga kowane mataki, kuma in gama kwana biyu kafin lokaci.\"",
            "Ku karanta matakan ku tabbata sun dace da abin da malaminku ya nema. Umarnin malaminku da rubric ɗinsa koyaushe suna gaba da tsarin AI."
          ],
          steps: ["Ku ba da umarnin aikin da ranar miƙawa.", "Ku nemi matakai na minti 30 masu ranaku.", "Ku nemi ya sa ku gama kwana biyu kafin lokaci.", "Ku duba matakan da rubric ɗin malaminku."],
          words: [["Rubric", "jerin abubuwan da malaminku yake amfani da su don ba da maki ga aiki."], ["Muhimmin mataki (milestone)", "ƙaramar manufa a hanyar gama babbar manufa."]],
          slides: [
            { title: "Babban aiki, ƙananan matakai", bullets: ["Manyan ayyuka suna ba da tsoro", "Ƙananan matakai suna da sauƙin yi"] },
            { title: "Ku nemi AI ya raba shi", bullets: ["Matakai na minti 30", "Rana ga kowanne", "Ku gama kwana biyu kafin lokaci"] },
            { title: "Rubric ne ke da magana ta ƙarshe", bullets: ["Ku duba matakai da umarnin aikin", "Dokokin malaminku su ne farko"] }
          ],
          tryIt: "Ku ɗauki babban aiki ɗaya da kuke da shi yanzu ko da kuka yi kwanan nan. Ku nemi AI ya raba shi zuwa matakai na minti 30 masu ranaku. Ku duba su da umarnin aikin, ku gyara duk matakin da bai dace ba.",
          youCanNow: "mayar da babban aikin makaranta zuwa ƙananan matakai masu ranaku.",
          quickCheck: [
            { objective: "O2", q: "Me yasa za ku nemi AI ya sa matakan su gama kwana biyu kafin lokaci?", options: ["Malamai suna ba da ƙarin maki", "Yana gajarta aikin", "AI yana aiki da sauri haka", "Yana bar lokaci don abin da ba a zata ba ko gyare-gyare"], answer: 3, why: "Gamawa da wuri yana ba ku sarari idan wani abu ya ɗauki lokaci fiye da yadda aka tsara." },
            { objective: "O2", q: "Matakan AI sun bar jerin littattafan da aka yi amfani da su (bibliography) da malaminku yake buƙata. Me za ku yi?", options: ["Ku bar shi, domin AI ya fi sani", "Ku ƙara mataki don shi, domin umarnin malami ne ke gaba", "Ku nemi aboki ya yi shi", "Ku fara wani aiki daban"], answer: 1, why: "Umarnin malaminku da rubric ɗinsa koyaushe suna gaba da tsarin AI." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fahimtar karatu mai wuya",
          minutes: 5,
          goal: "Amfani da AI don fahimtar rubutu mai wuya yayin da kuke karanta shi da kanku.",
          text: [
            "Wasu karatuttuka suna da wuya: tsohon harshe, kalmomin kimiyya ko dogayen sakin layi. AI zai iya taimaka muku ku fahimce su, matuƙar har yanzu kuna karanta rubutun.",
            "Ku gwada wannan: ku fara karanta sakin layi. Sannan ku tambayi AI: \"Ka bayyana wannan sakin layi da kalmomi masu sauƙi\" ko \"Mene ne ma'anar waɗannan kalmomi 3?\" ko \"Ka ba ni tambayoyi 3 da zan yi tunani a kai yayin da nake karantawa.\"",
            "Taƙaitawar AI na iya barin wasu abubuwa ko ta yi kuskure, kuma ba za ta maye gurbin karatun aji ba. Ku yi amfani da ita don buɗe rubutun, sannan ku koma ku sake karantawa."
          ],
          steps: ["Ku fara karanta sakin layin da kanku.", "Ku nemi AI ya bayyana shi a sauƙaƙe ko ya faɗi ma'anar kalmomi masu wuya.", "Ku nemi tambayoyi da za su jagoranci karatunku.", "Ku sake karanta sakin layin da sabuwar fahimta."],
          words: [["Taƙaitawa (summary)", "gajeren bayanin manyan abubuwa."], ["Mahallin magana (context)", "kalmomi da tunanin da ke kewaye da wata kalma waɗanda ke taimakawa wajen bayyana ma'anarta."]],
          slides: [
            { title: "Ku fara karantawa", bullets: ["Ku gwada sakin layin da kanku", "Ku yi alama a kalmomin da ba ku sani ba"] },
            { title: "Sannan ku tambayi AI", bullets: ["\"Ka bayyana wannan da kalmomi masu sauƙi\"", "\"Mene ne ma'anar waɗannan kalmomi 3?\"", "\"Ka ba ni tambayoyi da za su jagoranci karatuna\""] },
            { title: "Sannan ku sake karantawa", bullets: ["Taƙaitawar AI na iya barin abubuwa", "Ba ta maye gurbin karatu ba"] }
          ],
          tryIt: "Ku ɗauki sakin layi ɗaya mai wuya daga karatun aji. Ku karanta shi, ku nemi AI ya bayyana shi da kalmomi masu sauƙi ya kuma faɗi ma'anar kalmomi biyu masu wuya, sannan ku sake karanta shi ku rubuta jimla ɗaya da kalmominku game da ma'anarsa.",
          youCanNow: "amfani da AI don buɗe karatu mai wuya, sannan ku fahimce shi da kanku.",
          quickCheck: [
            { objective: "O3", q: "Me yasa taƙaitawar AI ba za ta maye gurbin yin karatun ba?", options: ["Taƙaitawa koyaushe tana da tsawo sosai", "Malamai suna iya ganin allonku", "Tana iya barin abubuwa ko ta yi kuskure", "AI ba ya iya karanta Turanci"], answer: 2, why: "Taƙaitawar AI na iya barin bayanai ko ta yi kuskure a kansu, don haka har yanzu kuna karanta rubutun." },
            { objective: "O3", q: "Kun makale a wani sakin layi cike da kalmomin kimiyya. Mene ne mataki na farko mafi kyau?", options: ["Ku karanta shi da kanku, sannan ku tambayi AI ma'anar kalmomi masu wuya", "Ku nemi AI ya taƙaita littafin gaba ɗaya", "Ku tsallake karatun", "Ku kwafi taƙaitawar AI a rubuce-rubucenku"], answer: 0, why: "Ku fara karantawa, ku yi amfani da AI don buɗe sassa masu wuya, sannan ku sake karantawa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsara kanku",
        questions: [
          { objective: "O1", q: "Me ya kamata ku ba AI don ya taimaka wajen tsara makonku?", options: ["Kalmar sirrinku (password)", "Abin da ake buƙata da lokutanku da ba sa canjawa", "Adireshin gidanku", "Babu komai"], answer: 1, why: "AI yana buƙatar ayyukanku da lokutanku don yin tsari mai amfani." },
          { objective: "O1", q: "AI ya yi tsarin mako da bai dace da jadawalin atisayenku ba. Ku:", options: ["Bi shi duk da haka", "Daina zuwa atisaye", "Goge kalandarku", "Canja shi don ya dace da rayuwarku ta gaske"], answer: 3, why: "Tsarin daftari ne; ku ne kuke sa shi ya dace." },
          { objective: "O2", q: "Mene ne rubric?", options: ["Jerin abubuwan da malaminku yake amfani da su don ba da maki ga aiki", "Wani nau'in wasan wuyar warwarewa", "Manhajar karatu", "Kalmar sirri"], answer: 0, why: "Rubric yana nuna abin da malaminku yake ba da maki a kai." },
          { objective: "O2", q: "Matakan aikin AI sun bar wani sashe da malaminku yake buƙata. Ku:", options: ["Tsallake wannan sashe", "Nemi AI ya ba ku maki", "Ƙara shi, domin umarnin malami ne ke gaba", "Canja ranakun miƙawa"], answer: 2, why: "Umarnin malami su ne farko." },
          { objective: "O3", q: "Mene ne hanya mafi kyau ta amfani da AI da karatu mai wuya?", options: ["Ku tsallake karatun ku yi amfani da taƙaitawar AI kaɗai", "Ku nemi AI ya yi muku jarabawar", "Ku fara karantawa, ku nemi AI ya bayyana, sannan ku sake karantawa", "Kada ku taɓa karanta shi"], answer: 2, why: "AI yana taimaka muku ku fahimta, amma har yanzu ku ne kuke karantawa." }
        ]
      }
    },
    {
      name: "Babi na 2: Rubutu da karatu cikin hikima",
      lessons: [
        {
          objectives: ["O4"],
          title: "Samun shawara kan rubutunku",
          minutes: 5,
          goal: "Neman shawarar AI kan daftarin da kuka rubuta, sannan ku gyara shi da kanku.",
          text: [
            "Rubuta daftarinku da kanku shi ne inda ake koyo. Bayan haka AI zai iya zama kamar mai horarwa: zai iya nuna jimlolin da ba su da sarari, hujjojin da suka ɓace ko kurakuran nahawu.",
            "Ku nemi shawara, ba sake rubutawa ba: \"Ga sakin layina. Kada ka sake rubuta shi. Ka faɗa mini abubuwa 3 da zan inganta da dalilinsu.\" Sannan ku ne kuke yin canje-canjen da kalmominku.",
            "Idan malaminku bai yarda da shawarar AI ba, ku nemi wani taimako: abokin aji, cibiyar rubutu ta makaranta, ko malaminku a lokacin da yake karɓar ɗalibai (office hours)."
          ],
          steps: ["Ku fara rubuta daftarinku da kanku.", "Ku tabbata malaminku ya yarda da shawarar AI.", "Ku nemi abubuwa 3 da za a inganta, ba sake rubutawa ba.", "Ku gyara shi da kalmominku."],
          words: [["Daftari (draft)", "sigar farko ta rubutunku."], ["Gyarawa (revise)", "inganta rubutunku ta hanyar canja tunani, tsari ko kalmomi."]],
          slides: [
            { title: "Ku fara rubutawa", bullets: ["Daftarinku shi ne inda kuke koyo", "AI yana zuwa daga baya, a matsayin mai horarwa"] },
            { title: "Ku nemi shawara, ba sake rubutawa ba", bullets: ["\"Kada ka sake rubuta shi\"", "\"Ka faɗa mini abubuwa 3 da zan inganta da dalilinsu\""] },
            { title: "Ku ne kuke yin canje-canjen", bullets: ["Ku gyara da kalmominku", "Ba a yarda da AI ba? Ku tambayi abokin aji ko malami"] }
          ],
          tryIt: "Ku ɗauki sakin layi da kuka rubuta (idan malaminku ya yarda da shawarar AI). Ku nemi abubuwa 3 da za a inganta ba tare da sake rubutawa ba. Ku yi canje-canjen da kanku, ku kwatanta sigogin biyu.",
          youCanNow: "samun shawara daga AI da gyara rubutunku da kanku.",
          quickCheck: [
            { objective: "O4", q: "Mene ne ma'anar \"shawara, ba sake rubutawa ba\"?", options: ["AI yana rubuta muku sabuwar siga", "AI yana ba da maki ga aikinku", "AI yana goge daftarinku", "AI yana nuna abin da za a inganta, ku kuma kuna yin canje-canjen"], answer: 3, why: "Shawara tana faɗa muku abin da za ku gyara; ku ne kuke gyarawa da kalmominku." },
            { objective: "O4", q: "Malaminku bai yarda da shawarar AI kan wannan maƙala ba. Me za ku yi?", options: ["Ku yi amfani da AI duk da haka", "Ku nemi shawara daga abokin aji, cibiyar rubutu ko malaminku", "Ku miƙa daftarin farko ba tare da karanta shi ba", "Ku sa AI ya sake rubuta shi a ɓoye"], answer: 1, why: "Idan ba a yarda da AI ba, wasu mutane za su iya ba ku shawara." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Yin tsarin karatu don jarabawa",
          minutes: 5,
          goal: "Gina tsarin karatu na kowace rana da tambayoyin atisaye don jarabawa ta gaske.",
          text: [
            "Karatun gaggawa a daren kafin jarabawa yawanci ba ya aiki sosai. Yin ɗan karatu kowace rana da gwada kanku shi ne ke aiki.",
            "Ku faɗa wa AI ranar jarabawa, batutuwan da kuma lokacin da kuke da shi kowace rana: \"Jarabawata ta ilimin halittu (biology) ranar Juma'a ce, kan sel (cells) da DNA. Ina da minti 30 kowace rana. Ka yi tsarin karatu mai ɗan gwaji kowace rana.\"",
            "Ku nemi tambayoyin atisaye da aka ɓoye amsoshinsu, ku amsa su da kanku, sannan ku duba da rubuce-rubucenku na aji ko littafin karatu. Ku ba da ƙarin lokaci ga tambayoyin da kuka yi kuskure."
          ],
          steps: ["Ku faɗa wa AI ranar jarabawa, batutuwa da lokacinku na kowace rana.", "Ku nemi tsari na kowace rana mai atisaye.", "Ku amsa tambayoyin atisaye kafin ku ga amsoshi.", "Ku duba da rubuce-rubucenku, ku mai da hankali kan abin da kuka rasa."],
          words: [["Karatun gaggawa (cramming)", "ƙoƙarin koyon komai daidai kafin jarabawa."], ["Karatun rarrabe (spaced practice)", "yin ɗan karatu a cikin kwanaki da yawa maimakon gaba ɗaya a lokaci ɗaya."]],
          slides: [
            { title: "Kaɗan kowace rana ya fi karatun gaggawa", bullets: ["Ku yi ɗan karatu kowace rana", "Ku gwada kanku yayin da kuke tafiya"] },
            { title: "Ku nemi tsari", bullets: ["Ranar jarabawa da batutuwa", "Mintunan da kuke da su kowace rana", "Ɗan gwaji kowace rana"] },
            { title: "Ku yi atisaye ta hanya madaidaiciya", bullets: ["Ku amsa kafin ku duba", "Ku duba da rubuce-rubucenku", "Ku mai da hankali kan abin da kuka rasa"] }
          ],
          tryIt: "Ku zaɓi jarabawa ta gaske mai zuwa. Ku nemi AI tsarin karatu na kowace rana ta amfani da lokacin da kuke da shi da gaske. Ku yi tambayoyin atisaye na rana ta farko, ku duba su da rubuce-rubucenku.",
          youCanNow: "yin tsarin karatu da yin atisaye da AI don jarabawa ta gaske.",
          quickCheck: [
            { objective: "O5", q: "Me ya fi aiki fiye da karatun gaggawa a daren kafin jarabawa?", options: ["Sake karanta rubuce-rubuce sau ɗaya", "Yin ɗan karatu kowace rana da gwada kanku", "Barci da littafinku", "Karanta tsarin AI kaɗai"], answer: 1, why: "Yin ɗan karatu kowace rana tare da gwada kai yana taimaka muku ku tuna da yawa." },
            { objective: "O5", q: "Kun yi kuskure a tambayoyin atisaye 3 cikin 5 kan sassan sel. Me za ku yi a gaba?", options: ["Ku koma wani sabon batu", "Ku goge tambayoyin", "Ku nemi AI amsoshin ku haddace su", "Ku ba da ƙarin lokaci ga sassan sel, ku duba rubuce-rubucenku"], answer: 3, why: "Ku mai da lokacin karatunku kan abin da kuka rasa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Amfani da AI da gaskiya a makaranta",
          minutes: 5,
          goal: "Bin dokokin AI na makarantarku da faɗin yadda kuka yi amfani da AI.",
          text: [
            "Makarantu suna da dokokin AI daban-daban. Wasu suna yarda da shi don neman tunani da samun shawara, wasu suna son ku faɗi lokacin da kuka yi amfani da shi, wasu kuma sun hana shi a wasu ayyuka. Dokar malaminku ga wannan aikin ita ce mai aiki.",
            "Kada ku taɓa miƙa aikin da AI ya rubuta a matsayin naku idan ba a yarda ba. Yana iya zama satar amsa (cheating), kuma kuna rasa koyon. Idan AI ya taimaka, ku faɗi yadda: \"Na yi amfani da AI don yin tambayoyin atisaye da samun shawara kan sakin layina na biyu.\"",
            "AI zai iya ƙirƙirar bayanai da majiyoyi. Kada ku taɓa kwafar wata magana (quote) ko sunan littafi daga AI a cikin aikinku ba tare da kun nemo shi da kanku ba. Ku kiyaye bayanan sirri daga kayan aikin AI, kuma ku yi amfani da asusun makarantarku don kayan aikin makaranta."
          ],
          steps: ["Ku karanta dokar AI ta malaminku ga wannan aikin.", "Ku yi amfani da AI ta hanyoyin da aka yarda kaɗai.", "Ku rubuta layi ɗaya da ke faɗin yadda kuka yi amfani da shi.", "Ku tabbatar da kowane bayani ko majiya da kanku kafin ku yi amfani da shi."],
          words: [["Gaskiya a karatu (academic integrity)", "yin gaskiya a aikin makaranta: abin da kuka miƙa yana nuna abin da kuka yi."], ["Ambaton majiya (cite)", "faɗin inda bayani ya fito."]],
          slides: [
            { title: "Dokoki sun bambanta", bullets: ["Wasu suna yarda da AI don tunani ko shawara", "Wasu sun hana shi a wasu ayyuka", "Dokar malaminku ita ce mai aiki"] },
            { title: "Ku bayyana taimakon AI a fili", bullets: ["Kada ku taɓa nuna aikin AI a matsayin naku", "Ku faɗi yadda AI ya taimaka, a layi ɗaya"] },
            { title: "Ku tabbatar da bayanai da majiyoyi", bullets: ["AI zai iya ƙirƙirar maganganu da littattafai", "Ku nemo kowace majiya da kanku", "Babu bayanan sirri a AI"] }
          ],
          tryIt: "Aikin ƙarshe: don jarabawa ko aiki na gaske a cikin makonni biyu masu zuwa, ku yi tsarin karatu na kowace rana da AI, ku yi tambayoyin atisaye 5 da aka ɓoye amsoshinsu, ku duba su da rubuce-rubucenku, kuma ku rubuta layi ɗaya kan yadda kuka bi dokokin AI na makarantarku.",
          youCanNow: "amfani da AI a makaranta ta hanyoyin da aka yarda, da gaskiya, kuma da ke taimaka muku ku koya da gaske.",
          quickCheck: [
            { objective: "O6", q: "Dokar AI ta wane ne ke aiki ga wani aiki na musamman?", options: ["Ta abokinku", "Ta kamfanin AI", "Ta malaminku", "Duk wadda ta fi sauƙi"], answer: 2, why: "Makarantu sun bambanta, kuma dokar malaminku ga wannan aikin ita ce mai aiki." },
            { objective: "O6", q: "AI ya ba ku wata magana mai kyau don maƙalarku. Me za ku yi kafin ku yi amfani da ita?", options: ["Ku nemo ta a ainihin majiyar da kanku", "Ku yi amfani da ita; AI ba ya kuskure", "Ku canja wasu kalmomi", "Ku ƙara lambar shafi ta ƙarya"], answer: 0, why: "AI zai iya ƙirƙirar maganganu da majiyoyi, don haka ku fara nemo su da kanku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Rubutu da karatu cikin hikima",
        questions: [
          { objective: "O4", q: "Wace buƙata ce ke kawo shawara mai amfani ba tare da yi muku aikinku ba?", options: ["\"Kada ka sake rubuta shi. Ka faɗa mini abubuwa 3 da zan inganta da dalilinsu.\"", "\"Ka sake rubuta maƙalata\"", "\"Ka rubuta mini shi\"", "\"Ka sa ya zama cikakke\""], answer: 0, why: "Neman shawara yana sa rubutun ya ci gaba da zama naku." },
          { objective: "O4", q: "Malaminku bai yarda da shawarar AI ba. Kuna iya:", options: ["Yin amfani da AI a ɓoye", "Ƙin yin rubutu", "Kwafar aikin aboki", "Tambayar abokin aji, cibiyar rubutu ko malamin"], answer: 3, why: "Wasu mutane za su iya ba da shawara bisa dokoki." },
          { objective: "O5", q: "Mene ne karatun rarrabe (spaced practice)?", options: ["Yin karatu dukan dare kafin jarabawa", "Yin ɗan karatu a cikin kwanaki da yawa", "Ƙin yin karatu", "Yin karatu a sararin samaniya"], answer: 1, why: "Rarraba karatu a cikin kwanaki yana taimaka muku ku tuna." },
          { objective: "O6", q: "AI ya ba ku magana daga wani littafi don maƙalarku. Ya kamata ku:", options: ["Fara nemo maganar a ainihin littafin da kanku", "Kwafe ta a ciki", "Ƙirƙiri lambar shafi", "Tambayi AI ko gaskiya ce"], answer: 0, why: "AI zai iya ƙirƙirar maganganu; ku tabbatar da ainihin majiyar." },
          { objective: "O6", q: "Dokar AI ta wane ne ke aiki ga wani aiki?", options: ["Ta aboki", "Ta kamfanin AI", "Ta malaminku", "Ba ta kowa ba"], answer: 2, why: "Malaminku ne ke kafa dokar ga wannan aikin." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Samun Nasara a Makaranta",
    questions: [
      { objective: "O1", q: "Don tsara makonku da AI, ku rubuta:", options: ["Kalmomin sirrinku", "Ayyuka, ranakun miƙawa da lokutan da ba sa canjawa", "Lambobin wayar abokanku", "Babu komai"], answer: 1, why: "Waɗannan bayanai suna bar AI ya gina tsari na gaske." },
      { objective: "O1", q: "Tsarin mako mai kyau yana da:", options: ["Babu hutu", "Wasannin bidiyo kaɗai", "Komai a daren Lahadi", "Aiki mafi wuya a farko da hutu"], answer: 3, why: "Hutu da fara aiki mai wuya suna taimaka muku ku gama." },
      { objective: "O1", q: "Bayan AI ya yi tsari, ya kamata ku:", options: ["Yi watsi da shi", "Raba shi da baƙi", "Goge shi", "Canja shi don ya dace da rayuwarku ku kwafe shi a kalanda"], answer: 3, why: "Tsarin yana taimakawa ne kawai idan ya dace kuma kuna iya ganinsa." },
      { objective: "O2", q: "Me yasa za a raba babban aiki zuwa matakai?", options: ["Yana ƙara tsawonsa", "Ƙananan matakai suna da sauƙin yi", "Malamai suna ƙin sa", "Doka ce ta tilasta"], answer: 1, why: "Ƙananan matakai suna sa babban aiki ya zama mai sauƙin sarrafawa." },
      { objective: "O2", q: "Buƙata mai kyau don raba aiki ita ce:", options: ["\"aiki\"", "\"Ka yi mini aikina\"", "\"Ka raba wannan zuwa matakai na minti 30 masu ranaku, in gama kwana biyu kafin lokaci\"", "\"Ka sa ya ɓace\""], answer: 2, why: "Tana kafa girman mataki, ranaku da ƙarin lokaci." },
      { objective: "O2", q: "Idan matakan AI da rubric ɗin malaminku ba su yi daidai ba:", options: ["Ku bi rubric", "Ku bi AI", "Kada ku bi ko ɗaya", "Ku tambayi baƙo"], answer: 0, why: "Malaminku yana ba da maki da rubric." },
      { objective: "O3", q: "Idan kuna amfani da AI da karatu mai wuya, da farko:", options: ["Ku tsallaka zuwa taƙaitawa", "Ku karanta sakin layin da kanku", "Ku rufe littafin", "Ku nemi AI amsoshin jarabawar"], answer: 1, why: "Fara karantawa yana nufin AI yana taimaka muku ku fahimta, ba ku tsallake ba." },
      { objective: "O3", q: "Me yasa taƙaitawar AI ba za ta maye gurbin karatun ba?", options: ["Tana da tsawo sosai", "Tana da tsada", "Koyaushe cikakkiya ce", "Tana iya barin abubuwa ko ta yi kuskure"], answer: 3, why: "Taƙaitawa na iya barin ko karkatar da muhimman sassa." },
      { objective: "O3", q: "Wane prompt (umarni) ne ke taimakawa a karatu?", options: ["\"Mene ne ma'anar waɗannan kalmomi 3?\"", "\"Ka rubuta rahoton littafina\"", "\"Ka ba ni makina\"", "\"Ka karanta mini shi har abada\""], answer: 0, why: "Bayanin kalmomi masu wuya yana taimaka muku ku fahimta." },
      { objective: "O4", q: "A ina ne yawancin koyo a rubutu yake faruwa?", options: ["Kwafar rubutun AI", "Buga takardar", "Rubuta daftarinku da kanku da gyara shi", "Zaɓar salon rubutu (font)"], answer: 2, why: "Rubuta daftari da gyara shi suna gina ƙwarewar." },
      { objective: "O4", q: "Idan AI ya ba da shawara, wane ne ke yin canje-canjen?", options: ["AI", "Baƙo", "Ku, da kalmominku", "Babu kowa"], answer: 2, why: "Gyarawa da kanku yana sa aikin ya ci gaba da zama naku." },
      { objective: "O4", q: "Mene ne ma'anar gyarawa (revise)?", options: ["Inganta rubutunku ta hanyar canja shi", "Goge shi", "Buga shi", "Miƙa shi a makare"], answer: 0, why: "Gyarawa ita ce inganta daftari." },
      { objective: "O5", q: "Wace al'adar karatu ce ta fi aiki?", options: ["Karatun gaggawa a daren kafin jarabawa", "Sake karantawa kaɗai", "Rashin yin karatu", "Kaɗan kowace rana tare da gwada kai"], answer: 3, why: "Karatun rarrabe tare da gwada kai yana aiki sosai." },
      { objective: "O5", q: "Wadanne abubuwa uku za ku faɗa wa AI don tsarin karatu?", options: ["Kalmar sirrinku, adireshinku da shekarunku", "Ranar jarabawa, batutuwa da lokacin kowace rana", "Launin da kuka fi so, abinci da waƙa", "Babu komai"], answer: 1, why: "Waɗannan suna bar AI ya gina tsari da ya dace." },
      { objective: "O5", q: "Bayan tambayoyin atisaye, ku ba da ƙarin lokaci ga:", options: ["Waɗanda kuka yi kuskure", "Waɗanda kuka yi daidai", "Babu ko ɗaya", "Sababbin batutuwa na bazata"], answer: 0, why: "Mai da hankali kan kurakurai yana cike giɓi." },
      { objective: "O6", q: "Miƙa aikin da AI ya rubuta idan ba a yarda ba:", options: ["Koyaushe ba laifi ba ne", "Wajibi ne", "Yana iya zama satar amsa (cheating)", "Ƙarin maki ne"], answer: 2, why: "Yana karya dokoki kuma yana tsallake koyo." },
      { objective: "O6", q: "Layi mai kyau game da amfani da AI shi ne:", options: ["Babu komai", "\"Na yi amfani da AI don yin tambayoyin atisaye da samun shawara kan sakin layi na 2\"", "\"AI ya yi komai\" alhali bai yi ba", "\"Ban taɓa amfani da kwamfuta ba\""], answer: 1, why: "Yana faɗin gaskiya game da yadda AI ya taimaka." },
      { objective: "O6", q: "AI ya ba da sunan wani littafi a matsayin majiya don aikinku. Ya kamata ku:", options: ["Kwafe shi a jerinku", "Ƙirƙiri sunan marubuci", "Yi watsi da duk majiyoyi", "Nemo littafin da kanku kafin ku yi amfani da shi"], answer: 3, why: "AI zai iya ƙirƙirar majiyoyi." },
      { objective: "O6", q: "Wane asusu ya kamata ku yi amfani da shi don kayan aikin da makaranta ta amince da su?", options: ["Asusun aboki", "Asusun ƙarya", "Kada a taɓa amfani da asusu", "Asusun makarantarku"], answer: 3, why: "An saita kayan aikin makaranta don asusun makarantarku." },
      { objective: "O6", q: "Kafin ku buɗe asusu a sabuwar manhajar AI, ya kamata ku:", options: ["Yi amfani da kowace ranar haihuwa", "Duba ƙa'idar shekarunta ku yi magana da mahaifi ko mai kula da ku", "Ba ta kalmar sirrin makarantarku", "Tsallake sharuɗɗa"], answer: 1, why: "Ƙa'idojin shekaru da yardar mahaifi ko mai kula su ne farko." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      5,
      6,
      7,
      9,
      10,
      12,
      14,
      15
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Tsarin karatu ya dace da rayuwa ta gaske",
        objective: "O5",
        notYet: "Babu tsari, ko bai kula da azuzuwa, ayyukan waje da aiki ba.",
        meets: "Tsari na kowace rana har zuwa ranar jarabawa da ya dace da lokutan da ba sa canjawa.",
        exceeds: "An canja tsarin bayan rana ta farko bisa abin da aka rasa."
      },
      {
        name: "Tsara lokaci na mako",
        objective: "O1",
        notYet: "Lokacin karatu ba ya kan kalanda ko littafin tsari.",
        meets: "An kwafi lokutan karatu a littafin tsari ko kalanda tare da hutu.",
        exceeds: "An saka batutuwa mafi wuya a farkon kowane zaman karatu."
      },
      {
        name: "Atisaye da dubawa",
        objective: "O5",
        notYet: "An duba amsoshi kafin a gwada, ko ba a duba su ba.",
        meets: "An fara amsa tambayoyin atisaye biyar, sannan aka duba su da rubuce-rubucen aji.",
        exceeds: "An jera amsoshin da ba daidai ba tare da abin da za a ƙara karantawa."
      },
      {
        name: "Amfani da AI da gaskiya",
        objective: "O6",
        notYet: "Babu layi kan amfani da AI, ko an yi amfani da AI ta hanyar da malami bai yarda ba.",
        meets: "Layi ɗaya a sarari kan yadda aka yi amfani da AI, wanda ya dace da dokar malami.",
        exceeds: "Ya kuma ambaci duk bayani ko majiya daga AI da aka tabbatar."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce sun sami mafi kyawun maki a jarabawa ko aiki bayan amfani da tsarin karatunsu (binciken biyo baya na kwanaki 30)",
      "Masu koyo da suka ce sun miƙa manyan ayyuka a kan lokaci a binciken biyo baya na kwanaki 30",
      "Malamai ko shirye-shirye da suka ce matsalolin dokokin AI sun ragu a tsakanin masu koyo"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya, kwamfutar makaranta ko ta ɗakin karatu mai intanet",
      "Mataimakin AI kyauta da aka yarda mai koyo ya yi amfani da shi, zai fi kyau ta asusun makaranta",
      "Littafin tsari (planner), Google Calendar ko manhajar kalandar makaranta",
      "Rubuce-rubucen aji da umarnin jarabawa ko aiki ɗaya na gaske",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku raba dokar AI ta makarantarku a farko, kuma ku nemi masu koyo su zo da dokar kowane malami don jarabawa ko aikin da suka zaɓa.",
      "Ku sa masu koyo su yi amfani da jarabawa ko aiki na gaske mai zuwa don tsarin ya yi amfani nan take.",
      "Ku tunatar da masu koyo kada su taɓa saka bayanan sirri, kuma su yi amfani da asusun makaranta don kayan aikin makaranta.",
      "Ku sake duba bayan mako guda don ganin ko masu koyo sun bi tsarin karatunsu, kuma ku daidaita su tare.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

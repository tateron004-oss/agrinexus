"use strict";

// Koach Learn course, Hausa (ha) translation of youth/youth-ai-music.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "youth-ai-music-ha",
  lang: "ha",
  translationOf: "youth-ai-music",
  category: "Youth",
  name: "Shirya Waƙa da Taimakon AI",
  skills: "Yin bit a situdiyon waƙa kyauta ta intanet, Tunanin baitocin waƙa tare da AI, Gina tsarin waƙa, Girmama haƙƙin mallaka da muryoyin mutane, Fitar da waƙa da raba ta lafiya",
  outcome: "yin gajeriyar waƙarku ta asali (kusan daƙiƙa 60) a situdiyon waƙa kyauta ta intanet, kuna amfani da AI don samun ra'ayoyi da baitoci, da tsarin waƙa a sarari, ba tare da waƙoƙin da aka kwafa ko muryoyin da aka kwaikwaya ba, da bayanin yabo (credit) da ke faɗin yadda kuka yi amfani da AI.",
  about: [
    "Wannan kwas na matasa ne masu son waƙa kuma suke son yin tasu, ko da ba su iya kaɗa wani kayan kiɗa ba tukuna. Kuna iya yin sa a waya, ko a kwamfutar makaranta ko ta ɗakin karatu.",
    "Za ku yi bit a BandLab, situdiyon waƙa kyauta ta intanet, ku yi amfani da mataimakin AI a matsayin abokin tunani don ra'ayoyi da baitoci, ku gina sassan waƙa, kuma ku koyi dokokin haƙƙin mallaka (copyright) da amfani da muryoyin wasu mutane. A ƙarshe za ku fitar da gajeriyar waƙa ku raba ta lafiya.",
    "Sharuɗɗan BandLab sun ce dole mai amfani ya kai shekara 13 aƙalla, kuma masu ƙasa da shekara 18 suna buƙatar izinin iyaye ko mai kula da su. Ku duba dokokin shekaru na kowane kayan aiki da kuke amfani da shi, ku duba dokokin makarantarku game da AI, kuma ku sa iyaye ko mai kula da ku a ciki lokacin da kuke buɗe asusu. Kowane darasi yana ƙarewa da aikin \"Gwada yanzu\", akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku yi waƙar asali ta kusan daƙiƙa 60 a situdiyo kyauta ta intanet: bit, gabatarwa (intro), baiti (verse) da amshi (chorus). Ku yi amfani da mataimakin AI don samun jigo da aƙalla layuka huɗu na baitoci, sannan ku sake rubuta su da kalmominku. Kada ku yi amfani da waƙar da aka kwafa ko kwafin AI na muryar mutum na gaske. Ku fitar da ita, kuma ku rubuta gajeren bayanin yabo da ke faɗin abin da kuka yi da yadda kuka yi amfani da AI.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa masu son waƙa kuma suke son yin tasu, har da waɗanda ba su iya kaɗa kayan kiɗa ba tukuna.",
    startingPoint: "Suna sauraron waƙa kowace rana kuma suna da waƙoƙin da suke so. Yawancinsu ba su taɓa yin bit, tsara waƙa, ko koyon dokokin haƙƙin mallaka, guntun waƙar wasu (samples) da muryoyin AI ba.",
    gap: "Kayan aikin waƙa na AI suna sa ya zama da sauƙi a kwafi waƙoƙi ko muryoyi ba tare da sanin cewa ba daidai ba ne, kuma rubuta prompt kaɗai ba ya sa mutum ya zama marubucin aikin. Matasa suna buƙatar yin waƙar asali da kansu, su yi amfani da AI a matsayin abokin tunani kawai, kuma su raba aikinsu da gaskiya da kuma lafiya.",
    constraints: [
      "Iyakar shekaru: BandLab da sauran kayan aiki suna da mafi ƙarancin shekaru, kuma suna buƙatar izinin iyaye ko mai kula ga masu ƙasa da shekara 18",
      "Dokokin makaranta game da AI a darasin waƙa",
      "Na'urori: waya, ko kwamfutar makaranta ko ta ɗakin karatu mai burauzar intanet; kayan aiki kyauta kawai",
      "Haƙƙin mallaka da haƙƙin murya: babu waƙoƙin da aka kwafa, guntun waƙar wasu ba tare da izini ba, ko kwafin AI na muryoyin gaske",
      "Sirri lokacin rabawa: babu cikakken suna, makaranta ko wurin zama a rubutun da kowa zai gani"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna tunani game da waƙar da kuke ji da wadda kuke yi", action: "bayyana yadda ake amfani da AI a waƙa da dokokin da za ku bi", standard: "kuna ambaton hanyoyi uku da dokoki kan kwafi, muryoyi, iyakar shekaru da gaskiya" },
    { id: "O2", condition: "Ta amfani da situdiyo kyauta ta intanet kamar BandLab, da amincewar iyaye ko mai kula", action: "yin bit mai sanduna 4 da ganguna da wani sauti ɗaya, a gudun da ya dace da yanayin waƙar", standard: "yana kaɗawa ba tare da tsaiko ba" },
    { id: "O3", condition: "Idan kuna da jigo daga rayuwarku", action: "amfani da AI don samun hotuna da kalmomi masu amsa-kuwwa, sannan rubuta layuka huɗu na baitoci da kalmominku", standard: "ta yadda layukan za su dace da bit idan an faɗe su da babbar murya" },
    { id: "O4", condition: "Idan kuna da bit da baitocinku", action: "tsara waƙar zuwa gabatarwa, baiti da amshi", standard: "tsawonta kusan daƙiƙa 60, kuma kowane sashe yana da ɗan bambanci" },
    { id: "O5", condition: "Don kowane sauti da murya a waƙarku", action: "yanke ko kowane sauti ko murya ya halatta a yi amfani da shi, da cire duk abin da ba za ku iya nuna an yarda da shi ba", standard: "babu waƙoƙin da aka kwafa, guntun waƙar wasu marasa lasisi ko kwafin AI na muryoyin gaske" },
    { id: "O6", condition: "Idan waƙar ta kammala", action: "daidaita ƙarar sautuka, fitar da waƙar, da rubuta bayanin yabo na gaskiya", standard: "kuna rabawa ne kawai inda iyalinku suka yarda, kuma kuna kiyaye bayananku na sirri" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yin waƙa da AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Yadda ake amfani da AI a waƙa, da dokokin da za a bi",
          minutes: 4,
          goal: "Bayyana hanyoyi uku da ake amfani da AI a waƙa da dokokin da za ku bi.",
          text: [
            "Ana amfani da AI a waƙa ta hanyoyi da yawa: manhajojin da ke ba da shawarar kordi (chords) ko salon ganguna, kayan aikin da ke gyara rikodi, mataimaka kamar ChatGPT, Microsoft Copilot ko Google Gemini da ke taimakawa wajen tunanin baitoci, da kayan aikin da ke ƙirƙirar cikakkiyar waƙa daga rubutaccen prompt.",
            "A wannan kwas, AI abokin tunaninku ne. Ku ne kuke yanke manyan shawarwarin ƙirƙira. Wannan yana da muhimmanci wajen koyo, kuma yana da muhimmanci a doka ma: Ofishin Haƙƙin Mallaka na Amurka (U.S. Copyright Office) ya ce rubuta prompt kaɗai bai isa ya sa ku zama marubucin abin da AI ya samar ba. Kalmominku, sautukanku da tsarinku su ne ake ƙirgawa.",
            "Dokoki: kada ku kwafi waƙoƙin wasu, kada ku yi amfani da kwafin AI na muryar mawaƙi na gaske ko ta abokin aji, ku duba dokokin shekaru na kowane kayan aiki, ku bi dokokin makarantarku game da AI a darasin waƙa, kuma ku faɗi gaskiya game da yadda kuka yi amfani da AI."
          ],
          words: [["Mai ƙirƙirar waƙa na AI (AI music generator)", "kayan aikin da ke ƙirƙirar waƙa daga rubutaccen bayani."], ["Marubuci (author)", "mutumin da ya ƙirƙiri aiki kuma zai iya mallakar haƙƙinsa."], ["Prompt (umarni)", "abin da kuke rubutawa don neman wani abu daga AI."]],
          slides: [
            { title: "AI a waƙa", bullets: ["Yana ba da shawarar kordi da salon ganguna", "Yana gyara rikodi", "Yana taimakawa wajen tunanin baitoci", "Yana ƙirƙirar waƙoƙi daga prompt"] },
            { title: "AI abokin aikinku ne", bullets: ["Ku ne kuke yanke manyan shawarwarin ƙirƙira", "Prompt kaɗai ba ya sa ku zama marubuci", "Kalmominku da sautukanku su ne ake ƙirgawa"] },
            { title: "Dokoki", bullets: ["Babu waƙoƙin da aka kwafa", "Babu kwafin AI na muryoyin mutane na gaske", "Ku duba dokokin shekaru da na makaranta", "Ku faɗi gaskiya game da amfani da AI"] }
          ],
          sources: [{ name: "U.S. Copyright Office: Copyright and Artificial Intelligence, Part 2 (copyrightability)", url: "https://www.copyright.gov/newsnet/2025/1060.html" }, { name: "U.S. Copyright Office: Copyright and AI", url: "https://www.copyright.gov/ai/" }],
          tryIt: "Ku rubuta sunan waƙar da kuke so da abubuwa uku da kuke so game da ita (bit ɗin, yanayinta, kalmominta). Waɗannan ra'ayoyi ne da za ku iya koya daga gare su ba tare da kwafin waƙar ba.",
          youCanNow: "ambaton hanyoyin da ake amfani da AI a waƙa, da bayyana dokokin amfani da shi cikin adalci.",
          quickCheck: [
            { objective: "O1", q: "Wace ce hanya ɗaya da ake amfani da AI a waƙa?", options: ["Kayan aikin da ke gyara rikodi", "Daidaita garaya (guitar) da hannu", "Buga tikitin wasan waƙa", "Ƙera lasifika"], answer: 0, why: "AI yana ba da shawarar kordi, yana gyara rikodi, yana taimakawa da baitoci, kuma yana iya ƙirƙirar waƙoƙi." },
            { objective: "O1", q: "Wani kayan aiki ya yi cikakkiyar waƙa daga prompt ɗinku na layi ɗaya. Za ku iya cewa aikinku ne gaba ɗaya?", options: ["Ee, prompt ɗin ya sa ku zama marubuci", "Ee, idan kun canja mata suna", "A'a; prompt kaɗai bai isa ba, don haka ku yanke manyan shawarwarin ƙirƙira da kanku", "Sai dai idan ba wanda ya tambaya"], answer: 2, why: "Ofishin Haƙƙin Mallaka na Amurka ya ce rubuta prompt kaɗai bai isa ya sa ku zama marubuci ba." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Yin bit ɗinku na farko a situdiyo kyauta ta intanet",
          minutes: 6,
          goal: "Buɗe situdiyo kyauta ta intanet ku yi bit mai sanduna 4 da ganguna da wani sauti ɗaya.",
          text: [
            "BandLab manhaja ce da shafin intanet kyauta, mai situdiyo ta intanet don yin waƙa. Kuna iya amfani da ita a burauzar intanet a bandlab.com ko a manhajarta daga shagon manhajoji na hukuma. Kuna buƙatar asusu, don haka ku sa iyaye ko mai kula da ku a ciki lokacin da kuke buɗe asusu.",
            "Ana ƙirga waƙa da bugu (beats) da sanduna (bars). Yawancin waƙoƙin pop da hip-hop suna da bugu 4 a kowane sanda. Loop ɗan guntun waƙa ne da ke maimaituwa. Bit da yawa suna farawa da loop na ganguna, sannan a ƙara bass, sannan wani sauti ɗaya kamar fiyano (keys) ko garaya.",
            "Menu suna canjawa lokaci zuwa lokaci, don haka ku nemi waɗannan ayyuka: fara sabon aiki (project), ƙara layin sauti (track), zaɓi kayan kiɗa ko duba loops, ja loop zuwa kan layin sauti, sannan danna kunna (play). Ku canja gudun waƙa (tempo) don ya dace da yanayi: a hankali don natsuwa, da sauri don ƙarfin kuzari."
          ],
          steps: ["Tare da iyaye ko mai kula, ku buɗe asusu a BandLab ko wata situdiyo kyauta ta intanet.", "Ku fara sabon aiki.", "Ku ƙara layin ganguna, ta amfani da loop ko ta hanyar taɓa salo mai sauƙi.", "Ku ƙara layin bass ko fiyano da ya dace da gangunan.", "Ku saita gudun waƙa, ku sa tsawonta ya zama sanduna 4, sannan ku danna kunna."],
          words: [["Bit (beat)", "bugun waƙa da ke tafiya daidai; haka kuma gajeriyar waƙa ba tare da murya ba."], ["Sanda (bar)", "rukunin bugu, yawanci 4."], ["Loop", "ɗan guntun waƙa da ke maimaituwa."], ["Gudun waƙa (tempo)", "saurin waƙa, ana ƙirga shi da bugu a minti ɗaya (BPM)."]],
          slides: [
            { title: "Situdiyo kyauta ta intanet", bullets: ["BandLab: burauzar intanet ko manhaja ta hukuma", "Ku buɗe asusu tare da iyaye ko mai kula", "Dole masu amfani su kai shekara 13+ a sharuɗɗan BandLab"] },
            { title: "Bugu, sanduna da loops", bullets: ["Yawancin waƙoƙi: bugu 4 a sanda", "Loop ɗan guntu ne da ke maimaituwa", "Ku fara da ganguna, sannan bass, sannan wani ɗaya"] },
            { title: "Ku gina bit ɗinku", bullets: ["Sabon aiki, ƙara layin sauti", "Ku zaɓi loop ko kayan kiɗa", "Ku saita gudun waƙa ku danna kunna"] }
          ],
          sources: [{ name: "BandLab Terms of Use (age and parent permission)", url: "https://bandlabtechnologies.com/policies/bandlab-terms-of-use/" }],
          tryIt: "Ku yi bit mai sanduna 4 da ganguna da wani sauti ɗaya. Ku gwada gudu biyu daban-daban, ku riƙe wanda ya dace da yanayin da kuke so.",
          youCanNow: "buɗe situdiyo kyauta ta intanet da gina gajeren bit daga layukan sauti da loops.",
          quickCheck: [
            { objective: "O2", q: "Mene ne sanda (bar) a waƙa?", options: ["Ƙara mai ƙarfi", "Wani nau'in ganga", "Manhajar rikodi", "Rukunin bugu, yawanci 4 a pop da hip-hop"], answer: 3, why: "Ana ƙirga waƙa da bugu da sanduna, kuma yawancin waƙoƙin pop da hip-hop suna da bugu 4 a sanda." },
            { objective: "O2", q: "Bit ɗinku ya kamata ya ji da kuzari, amma yana kama da barci. Me za ku canja?", options: ["Ku rage ƙararsa", "Ku ƙara gudun waƙa", "Ku goge gangunan", "Ku ƙara sanduna na shiru"], answer: 1, why: "Gudun waƙa (tempo) shi ne sauri: da sauri don kuzari, a hankali don natsuwa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Tunanin baitoci tare da AI",
          minutes: 5,
          goal: "Yi amfani da AI don samun jigo da kalmomi masu amsa-kuwwa, sannan ku rubuta baitoci da kalmominku.",
          text: [
            "Ku fara da jigo daga rayuwarku: ranar farko a sabuwar makaranta, aikin lokacin hutu, aboki da ya ƙaura, shiga ƙungiyar wasa. Ji na gaske yana yin waƙoƙi mafi kyau fiye da na gama-gari.",
            "Ku nemi AI ra'ayoyi, ba cikakkiyar waƙa ba: \"Ka ba ni hotuna da kalmomi 10 game da ranar ƙarshe ta hutu kafin sakandare\" ko \"Ka ba ni kalmomin da suke amsa-kuwwa da 'late' da 'wait'.\" Sannan ku zaɓi abin da kuke so ku rubuta layukan da kanku.",
            "Ku ƙirga gaɓoɓin kalma (syllables) don kalmomin su dace da bit. Ku karanta layukanku da babbar murya a kan bit. Idan layi ya cika sosai, ku yanke kalmomi. Baitocinku ya kamata su yi kama da ku."
          ],
          steps: ["Ku zaɓi jigo daga rayuwarku.", "Ku nemi AI hotuna, kalmomi ko kalmomi masu amsa-kuwwa, ba cikakkiyar waƙa ba.", "Ku rubuta layuka huɗu da kalmominku.", "Ku faɗe su da babbar murya a kan bit ɗinku.", "Ku yanke ko ku canja kalmomi har su dace."],
          words: [["Baitoci (lyrics)", "kalmomin waƙa."], ["Jigo (theme)", "abin da waƙa take magana a kai."], ["Gaɓar kalma (syllable)", "bugun sauti ɗaya a cikin kalma; \"mu-sic\" yana da biyu."]],
          slides: [
            { title: "Ku fara da rayuwarku", bullets: ["Wani lokaci ko ji na gaske", "Takamaiman abu ya fi na gama-gari"] },
            { title: "Ku nemi ra'ayoyi, ba waƙa ba", bullets: ["\"Hotuna 10 game da...\"", "\"Kalmomi masu amsa-kuwwa da 'late'\"", "Ku ne kuke zaɓa kuma kuke rubutawa"] },
            { title: "Ku sa ta dace", bullets: ["Ku ƙirga gaɓoɓin kalma", "Ku karanta ta a kan bit", "Ku yanke layukan da suka cika"] }
          ],
          tryIt: "Ku zaɓi jigo, ku nemi mataimakin AI hotuna ko kalmomi 10 game da shi, sannan ku rubuta layuka huɗu na baitoci da kalmominku da suka dace da bit ɗinku.",
          youCanNow: "tunani tare da AI da rubuta baitocinku na asali da suka dace da bit.",
          quickCheck: [
            { objective: "O3", q: "Me ya kamata ku nemi AI lokacin rubuta baitoci?", options: ["Cikakkiyar waƙa don ku kwafa", "Baitocin abokinku", "Kalmomin wata shahararriyar waƙa", "Ra'ayoyi kamar hotuna, kalmomi ko kalmomi masu amsa-kuwwa"], answer: 3, why: "AI yana ba da ra'ayoyi; ku ne kuke rubuta layukan don su yi kama da ku." },
            { objective: "O3", q: "Wani layi ya cika sosai idan kun faɗe shi a kan bit. Me za ku yi?", options: ["Ku yanke ko ku canja kalmomi har ya dace", "Ku ƙara gudun dukan waƙar", "Ku ƙara kalmomi", "Ku bar shi ku yi rap da sauri"], answer: 0, why: "Ƙirga gaɓoɓin kalma da yanke kalmomi suna taimakawa layuka su dace da bit." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yin waƙa da AI",
        questions: [
          { objective: "O1", q: "A cewar Ofishin Haƙƙin Mallaka na Amurka, rubuta prompt kaɗai ya isa ya sa ku zama marubucin abin da AI ya samar?", options: ["Ee, koyaushe", "A'a, prompt kaɗai bai isa ba", "Sai don waƙoƙi kawai", "Sai idan kun biya"], answer: 1, why: "Ofishin ya ce bayar da prompt kawai bai isa ba." },
          { objective: "O1", q: "Aboki yana son ya yi amfani da kwafin AI na muryar wani shahararren mawaƙi a waƙarku. Me za ku yi?", options: ["Ku yi amfani da ita", "Ku yi amfani da ita amma ku ɓoye", "Ku ce a'a, ku yi amfani da muryarku ko ta wanda ya yarda", "Ku kwafi dukan waƙar ma"], answer: 2, why: "Kada ku yi amfani da muryar mutum na gaske ba tare da izini ba." },
          { objective: "O2", q: "Mene ne loop?", options: ["Ɗan guntun waƙa da ke maimaituwa", "Baitocin waƙa", "Maɓallin ƙara", "Wani nau'in makirufo"], answer: 0, why: "Loops suna maimaituwa kuma hanya ce da aka saba amfani da ita don gina bit." },
          { objective: "O2", q: "Mene ne ma'anar gudun waƙa (tempo)?", options: ["Yadda waƙar take da ƙara", "Sunan waƙar", "Yawan layukan sauti da kuke da su", "Yadda waƙar take da sauri"], answer: 3, why: "Gudun waƙa shi ne sauri, ana ƙirga shi da bugu a minti ɗaya." },
          { objective: "O3", q: "Wace buƙata ga AI ce ta fi dacewa da wannan kwas?", options: ["\"Ka rubuta mini dukan waƙata\"", "\"Ka ba ni hotuna 10 game da aikina na farko lokacin hutu\"", "\"Ka kwafi wata shahararriyar waƙa\"", "\"Ka rera da muryar malamina\""], answer: 1, why: "Ku nemi AI ra'ayoyi, sannan ku rubuta waƙar da kanku." }
        ]
      }
    },
    {
      name: "Babi na 2: Gina, kare da raba waƙarku",
      lessons: [
        {
          objectives: ["O4"],
          title: "Gina tsarin waƙa",
          minutes: 5,
          goal: "Tsara waƙarku zuwa gabatarwa, baiti da amshi.",
          text: [
            "Yawancin waƙoƙi ana gina su ne daga sassa. Gabatarwa (intro) tana buɗe waƙar. Baiti (verse) yana ba da labari kuma kalmominsa suna canjawa kowane lokaci. Amshi (chorus) shi ne sashe mai daɗin ji da ke maimaituwa. Gajeriyar waƙa za ta iya tafiya haka: gabatarwa, baiti, amshi.",
            "Ku sa kowane sashe ya ji da ɗan bambanci. Misali, gabatarwa tana da fiyano kawai, baiti yana ƙara ganguna, amshi kuma yana ƙara bass da kari (melody). Ku kwafa ku liƙa sassa a situdiyo don gina waƙar a kan layin lokaci (timeline).",
            "Kuna iya tambayar AI: \"Ina da bit mai sanduna 4 a 90 BPM. Ta yaya zan tsara waƙa ta daƙiƙa 60 mai gabatarwa, baiti da amshi?\" Sannan ku gwada ra'ayoyinsa, ku amince da kunnuwanku."
          ],
          steps: ["Ku tsara jerin: gabatarwa, baiti, amshi.", "Ku kwafi bit ɗinku don yin kowane sashe.", "Ku cire sautuka ko ku ƙara sautuka don kowane sashe ya ji daban.", "Ku saka baitocinku a baiti da amshi.", "Ku kunna dukan waƙar ku gyara."],
          words: [["Gabatarwa (intro)", "farkon waƙa."], ["Baiti (verse)", "sashen da ke ba da labari; kalmominsa suna canjawa kowane lokaci."], ["Amshi (chorus)", "sashe mai daɗin ji da ke maimaituwa."], ["Tsari (arrangement)", "yadda aka jera sassan waƙa kuma aka ɗora su a kan juna."]],
          slides: [
            { title: "Sassan waƙa", bullets: ["Gabatarwa: tana buɗe waƙar", "Baiti: yana ba da labari", "Amshi: sashe mai daɗin ji da ke maimaituwa"] },
            { title: "Ku sa kowane sashe ya bambanta", bullets: ["Gabatarwa: sautuka kaɗan", "Baiti: ƙara ganguna", "Amshi: ƙara bass da kari"] },
            { title: "Ku tambayi AI, ku amince da kunnuwanku", bullets: ["Ku nemi ra'ayoyin tsari", "Ku gwada su", "Ku riƙe abin da yake da daɗi a gare ku"] }
          ],
          tryIt: "Ku tsara bit ɗinku zuwa gabatarwa, baiti da amshi na kusan daƙiƙa 60. Ku ƙara layukanku huɗu na baitoci a matsayin rubutu, ko ku yi rikodin su idan kuna so.",
          youCanNow: "tsara waƙa zuwa sassa masu sarari da kowanne yake ji daban.",
          quickCheck: [
            { objective: "O4", q: "Me gabatarwar (intro) waƙa take yi?", options: ["Tana maimaita sashe mai daɗin ji", "Tana ƙare waƙar", "Tana buɗe waƙar", "Tana ba da dukan labarin"], answer: 2, why: "Gabatarwa tana buɗe waƙar kafin baiti da amshi." },
            { objective: "O4", q: "Gabatarwarku, baitinku da amshinku duk suna jin iri ɗaya. Me za ku yi?", options: ["Ku cire sautuka ko ku ƙara sautuka don kowane sashe ya ji daban", "Ku ƙara ƙarar kowane sashe", "Ku goge amshin", "Ku yi amfani da wata waƙa daban"], answer: 0, why: "Canja sautukan da ke kunnawa a kowane sashe yana sa tsarin ya fito a sarari." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Haƙƙin mallaka, guntun waƙar wasu da muryoyi",
          minutes: 5,
          goal: "Yanke ko wani sauti ko murya ya halatta a yi amfani da shi a waƙarku.",
          text: [
            "Haƙƙin mallaka (copyright) yana kare ayyukan asali kamar waƙoƙi da rikodi. A cewar Ofishin Haƙƙin Mallaka na Amurka, aiki yana samun kariya da zarar an ƙirƙire shi kuma an ajiye shi a yanayin da mutane za su iya ji ko gani, kuma yin rajista yawanci na son rai ne. Don haka yawancin waƙoƙin da kuke ji suna da kariya, kuma waƙar da kuka yi taku ce.",
            "Amfani da guntun rikodin wani ana kiransa sampling. Kada ku ɗauki guntun waƙoƙi sai dai idan kuna da izini ko sautin ya fito daga ɗakin sautuka da ya ce kuna iya amfani da shi, kamar loops da ke cikin situdiyonku. Ku karanta dokokin kayan aikin.",
            "Murya abu ne na kai. Kada ku yi ko ku yi amfani da kwafin AI na muryar mutum na gaske, ko shahararre ne, ko malami, ko abokin aji, ba tare da izininsa a sarari ba. Idan ba ku tabbata ko wani abu ya halatta ba, ku bar shi ko ku tambayi malami ko iyaye."
          ],
          steps: ["Ku tambaya: ni na yi wannan sautin, ko kayan aikin ya ce zan iya amfani da shi?", "Idan ya fito daga waƙar wani, ku bar shi sai dai idan kuna da izini.", "Kada ku taɓa amfani da kwafin AI na muryar mutum na gaske ba tare da izini ba.", "Idan ba ku tabbata ba, ku bar shi ko ku tambayi babba da kuka amince da shi."],
          words: [["Haƙƙin mallaka (copyright)", "haƙƙin doka na mai ƙirƙira don iko kan kwafin aikinsa."], ["Guntun waƙar wani (sample)", "guntun rikodin wani da aka yi amfani da shi a sabuwar waƙa."], ["Kwafin murya (voice clone)", "kwafin AI na muryar mutum na gaske."]],
          slides: [
            { title: "Tushen haƙƙin mallaka", bullets: ["Yana kare waƙoƙi da rikodi", "Yana farawa idan an ƙirƙiri aiki kuma an ajiye shi", "Yin rajista yawanci na son rai ne"] },
            { title: "Guntun waƙar wasu (samples)", bullets: ["Kada ku ɗauki guntun waƙoƙi ba tare da izini ba", "Loops na situdiyo: ku duba dokokin kayan aikin"] },
            { title: "Muryoyi", bullets: ["Babu kwafin AI na mutane na gaske ba tare da izini ba", "Har da shahararru, malamai da abokan aji", "Ba ku tabbata ba? Ku bar shi ko ku tambaya"] }
          ],
          sources: [{ name: "U.S. Copyright Office: Copyright basics FAQ", url: "https://www.copyright.gov/help/faq/faq-general.html" }, { name: "U.S. Copyright Office: Copyright and Artificial Intelligence", url: "https://www.copyright.gov/ai/" }],
          tryIt: "Ku rubuta jerin kowane sauti a waƙarku da inda ya fito: ku kuka yi shi, loop na situdiyo, ko wani abu daban. Ku cire duk abin da ba za ku iya cewa ya halatta ba.",
          youCanNow: "duba kowane sauti da murya a waƙarku da riƙe abin da aka yarda ku yi amfani da shi kawai.",
          quickCheck: [
            { objective: "O5", q: "Mene ne sampling?", options: ["Yin rikodin muryarku", "Amfani da guntun rikodin wani a sabuwar waƙa", "Canja gudun waƙa", "Fitar da waƙa"], answer: 1, why: "Sampling yana nufin amfani da wani sashe na rikodin wani." },
            { objective: "O5", q: "Kun sami wani sauti mai kyau a intanet amma ba ku san wanda ya yi shi ba ko ko kuna iya amfani da shi. Me za ku yi?", options: ["Ku yi amfani da shi; ba wanda zai lura", "Ku ƙara gudunsa don ya ji daban", "Ku ba kanku yabon", "Ku bar shi ko ku tambayi babba da kuka amince da shi"], answer: 3, why: "Idan ba za ku iya cewa sauti ya halatta ba, ku bar shi ko ku tambaya." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Daidaita sautuka, fitar da waƙa da raba ta lafiya",
          minutes: 5,
          goal: "Daidaita waƙarku, ku fitar da ita, ku raba ta da bayanin yabo na gaskiya.",
          text: [
            "Mixing (daidaita sautuka) yana nufin saita ƙarar kowane layin sauti don kada wani ya rufe sauran. Ku rage duk abin da ya yi ƙara sosai, kuma ku saurara a belun kunne (headphones) da kuma lasifikar waya.",
            "Sannan ku fitar ko ku ajiye waƙar a matsayin fayil na sauti ta amfani da zaɓin export ko download na situdiyon. Ku rubuta gajeren bayanin yabo: sunanku ko sunan mawaƙinku, sunan waƙar, da yadda kuka yi amfani da AI, misali \"AI ya taimaka wajen tunanin ra'ayoyin baitoci; ni na rubuta kuma na tsara dukan kiɗa da baitoci.\"",
            "Ku raba lafiya: ku saka ta ne kawai inda iyalinku suka yarda, ku ɓoye cikakken sunanku, makarantarku da wurin zamanku idan kun saka ta inda kowa zai gani, kuma ku yi tunani kafin ku bar mutane su yi sharhi (comments). Idan waƙar ta makaranta ce, ku bi dokokin malaminku game da AI."
          ],
          steps: ["Ku daidaita ƙarar kowane layin sauti.", "Ku saurara a belun kunne da lasifikar waya.", "Ku fitar ko ku ajiye waƙar a matsayin fayil na sauti.", "Ku rubuta bayanin yabo da ke faɗin yadda kuka yi amfani da AI.", "Ku raba ne kawai inda iyalinku suka yarda, kuna kiyaye bayananku na sirri."],
          words: [["Mixing (daidaita sautuka)", "daidaita ƙarar kowane layin sauti."], ["Export (fitarwa)", "ajiye aikinku a matsayin fayil da wasu za su iya kunnawa."], ["Bayanin yabo (credit note)", "gajeren rubutu da ke faɗin wanda ya yi me."]],
          slides: [
            { title: "Ku daidaita sautuka", bullets: ["Ku daidaita ƙarar kowane layin sauti", "Ku duba a belun kunne da lasifikar waya"] },
            { title: "Fitarwa da bayanin yabo", bullets: ["Ku ajiye a matsayin fayil na sauti", "Sunan waƙa da sunan mawaƙi", "Ku faɗi yadda kuka yi amfani da AI"] },
            { title: "Ku raba lafiya", bullets: ["Inda iyalinku suka yarda", "Ku ɓoye suna, makaranta da wurin zama", "Ku bi dokokin makaranta game da AI"] }
          ],
          tryIt: "Aikin ƙarshe: ku kammala waƙarku ta asali ta daƙiƙa 60 mai bit, gabatarwa, baiti da amshi da baitocinku. Ku duba cewa kowane sauti ya halatta, ku fitar da ita, kuma ku rubuta bayanin yabo da ke faɗin yadda kuka yi amfani da AI.",
          youCanNow: "yin waƙa ta asali, daidaita sautukanta, fitar da ita da raba ta cikin adalci da lafiya, da bayanin yabo na gaskiya.",
          quickCheck: [
            { objective: "O6", q: "Mene ne ma'anar mixing?", options: ["Saita ƙarar kowane layin sauti don kada wani ya rufe sauran", "Ƙara baitoci", "Zaɓar sunan waƙa", "Ɗora waƙar a intanet"], answer: 0, why: "Mixing yana daidaita ƙarar kowane layin sauti." },
            { objective: "O6", q: "Kuna son saka waƙarku inda kowa zai gani. Me za ku ɓoye?", options: ["Sunan waƙar", "Sunan mawaƙinku", "Cikakken sunanku, makarantarku da wurin zamanku", "Yadda kuka yi amfani da AI"], answer: 2, why: "Ku raba lafiya ta hanyar ɓoye bayananku na sirri da saka ta ne kawai inda iyalinku suka yarda." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gina, kare da raba waƙarku",
        questions: [
          { objective: "O4", q: "Wane sashe na waƙa ne mai daɗin ji da ke maimaituwa?", options: ["Gabatarwa", "Baiti", "Fitarwa", "Amshi"], answer: 3, why: "Amshi shi ne sashen da ke maimaituwa kuma yake kama kunne." },
          { objective: "O5", q: "Yaushe kariyar haƙƙin mallaka take farawa, a cewar Ofishin Haƙƙin Mallaka na Amurka?", options: ["Idan an ƙirƙiri aiki kuma an ajiye shi a yanayin da mutane za su iya ji ko gani", "Sai bayan yin rajista", "Bayan shekara 10", "Sai don shahararrun mawaƙa"], answer: 0, why: "Kariya tana farawa idan an ƙirƙiri aikin kuma an ajiye shi." },
          { objective: "O5", q: "Kuna son amfani da daƙiƙa 5 na wata shahararriyar waƙa a bit ɗinku. Me za ku yi?", options: ["Ku yi amfani da shi; gajere ne", "Ku bar shi sai dai idan kuna da izini", "Ku canja gudunsa don kada a lura", "Ku ba mawaƙin yabo ku yi amfani da shi"], answer: 1, why: "Ɗaukar guntun waƙa mai kariya yana buƙatar izini." },
          { objective: "O6", q: "Mene ne mixing?", options: ["Rubuta baitoci", "Buɗe asusu a manhaja", "Daidaita ƙarar kowane layin sauti", "Zaɓar jigo"], answer: 2, why: "Mixing yana daidaita yadda kowane sashe yake da ƙara." },
          { objective: "O6", q: "Wane bayanin yabo ne na gaskiya?", options: ["\"Ba a yi amfani da AI ba\" alhali an yi", "\"AI ya taimaka wajen tunanin ra'ayoyin baitoci; kiɗa da baitoci nawa ne\"", "Babu bayani ko kaɗan don aikin makaranta", "\"Wani shahararren mai shirya waƙa ne ya yi\""], answer: 1, why: "Yana faɗin a sarari yadda aka yi amfani da AI." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Shirya Waƙa da Taimakon AI",
    questions: [
      { objective: "O1", q: "Wace ce hanyar da ake amfani da AI a waƙa?", options: ["Ba da shawarar kordi ko salon ganguna", "Maye gurbin kunnuwanku", "Sa hannu a yarjejeniyar kamfanin waƙa a madadinku", "Mallakar waƙoƙinku"], answer: 0, why: "Kayan aikin AI suna iya ba da shawarar ra'ayoyin waƙa." },
      { objective: "O1", q: "A wannan kwas, aikin AI shi ne ya zama:", options: ["Wanda yake rubuta muku a ɓoye", "Abokin tunaninku", "Shugabanku", "Lauyanku"], answer: 1, why: "Ku ne kuke yanke manyan shawarwarin ƙirƙira." },
      { objective: "O1", q: "Me Ofishin Haƙƙin Mallaka na Amurka ya ce game da prompt kaɗai?", options: ["Yana sa ku zama marubuci", "Haramun ne", "Bai isa ya sa ku zama marubuci ba", "Na manya ne kawai"], answer: 2, why: "Bayar da prompt kawai bai isa a ɗauke ku marubuci ba." },
      { objective: "O2", q: "A sharuɗɗan BandLab, dole masu amfani su kai aƙalla shekara:", options: ["8", "10", "21", "13, da izinin iyaye idan ƙasa da 18"], answer: 3, why: "Sharuɗɗan sun ce 13 zuwa sama, da izinin iyaye ko mai kula ga ƙananan yara." },
      { objective: "O2", q: "Yawancin waƙoƙin pop da hip-hop suna da bugu nawa a sanda?", options: ["1", "4", "12", "100"], answer: 1, why: "Bugu huɗu a sanda shi ne aka fi saba da shi." },
      { objective: "O2", q: "Kyakkyawan jerin gina bit shi ne:", options: ["Murya kawai", "Ganguna, sannan bass, sannan wani sauti ɗaya", "Fitarwa da farko", "Sautuka goma a lokaci ɗaya"], answer: 1, why: "Farawa da ganguna da bass yana ba da tushe mai ƙarfi." },
      { objective: "O2", q: "Kuna son yanayi na natsuwa da hutu. Ya kamata ku:", options: ["Sa gudun waƙa ya yi sauri sosai", "Ƙara ƙararrawa masu ƙara", "Yi amfani da gudun waƙa a hankali", "Goge gangunan"], answer: 2, why: "Gudun waƙa a hankali yawanci yana jin natsuwa." },
      { objective: "O3", q: "Wane jigo ne zai fi yiwuwa ya yi waƙa mai ƙarfi?", options: ["\"Abubuwa\"", "\"Rayuwa gaba ɗaya\"", "\"Abubuwa suna faruwa\"", "\"Kwashe kayana daga ma'ajiyata ranar ƙarshe ta aji 8\""], answer: 3, why: "Takamaiman lokuta na gaske suna yin baitoci masu ƙarfi." },
      { objective: "O3", q: "Kyakkyawar buƙata ga AI don baitoci ita ce:", options: ["\"Ka ba ni kalmomin da suke amsa-kuwwa da 'late'\"", "\"Ka rubuta dukan waƙar ni kuma zan sa sunana\"", "\"Ka kwafi kalmomin wata shahararriyar waƙa\"", "\"Ka yi amfani da littafin sirrin abokina\""], answer: 0, why: "Neman ɗanyen ra'ayoyi yana sa rubutun ya kasance naku." },
      { objective: "O3", q: "Wani layi ya cika sosai don bit ɗin. Me za ku yi?", options: ["Ku ƙara gudun dukan waƙar", "Ku yanke kalmomi har ya dace", "Ku ƙara kalmomi", "Ku goge amshin"], answer: 1, why: "Yanke kalmomi yana taimakawa layuka su dace da kari." },
      { objective: "O4", q: "Baitin (verse) waƙa:", options: ["Ba shi da kalmomi ko kaɗan", "Iri ɗaya ne kowane lokaci", "Yana ba da labari, da kalmomin da ke canjawa", "Shi ne fayil ɗin fitarwa"], answer: 2, why: "Baitoci suna ɗauke da labarin kuma kalmominsu suna canjawa." },
      { objective: "O4", q: "Ta yaya za ku sa amshi ya fito fili?", options: ["Ku sa shi shiru", "Ku goge bit ɗin", "Ku yi amfani da sautuka iri ɗaya da na gabatarwa", "Ku ƙara sautuka, kamar bass da kari"], answer: 3, why: "Ƙara sautuka a kan juna yana sa amshi ya ji da girma." },
      { objective: "O4", q: "AI ya ba ku ra'ayoyin tsari. Sannan ku:", options: ["Gwada su ku amince da kunnuwanku", "Dole ku yi amfani da duka", "Dole ku watsar da duka", "Saka su a matsayin waƙarku"], answer: 0, why: "Ku ne kuke yanke shawarwarin ƙirƙira." },
      { objective: "O5", q: "Dole ne a yi rajista kafin waƙarku ta sami kariyar haƙƙin mallaka?", options: ["Ee, koyaushe", "A'a, yin rajista yawanci na son rai ne", "Sai a ƙarshen mako", "Sai don waƙoƙin makaranta"], answer: 1, why: "Ofishin Haƙƙin Mallaka ya ce yin rajista yawanci na son rai ne." },
      { objective: "O5", q: "Guntun waƙar wani (sample) shi ne:", options: ["Gwaji kyauta", "Wani nau'in makirufo", "Guntun rikodin wani da aka yi amfani da shi a sabuwar waƙa", "Ra'ayin baiti"], answer: 2, why: "Sampling yana amfani da wani sashe na rikodin da ke akwai." },
      { objective: "O5", q: "AI zai iya kwafin muryar abokin ajinku don amshinku. Mene ne doka?", options: ["Ku yi shi a matsayin ba-zata", "Ku yi shi idan yana da daɗi", "Ku yi shi a kwamfutocin makaranta kawai", "Sai da izininsa a sarari"], answer: 3, why: "Murya abu ne na kai; ku sami izini a sarari ko kada ku yi amfani da ita." },
      { objective: "O5", q: "Ba ku tabbata ko wani sauti ya halatta ba. Zaɓi mafi aminci shi ne:", options: ["Ku bar shi ko ku tambayi babba da kuka amince da shi", "Ku yi amfani da shi ku yi fata", "Ku ɓoye shi a cikin sauran sautuka", "Ku canja sunan fayil ɗin"], answer: 0, why: "Idan ba ku tabbata ba, ku bar shi ko ku tambaya." },
      { objective: "O6", q: "Me yasa za ku saurara a belun kunne da kuma lasifikar waya?", options: ["Doka ce ta tilasta", "Don duba cewa daidaiton sautuka yana da kyau a na'urori daban-daban", "Don ƙara ƙararta", "Don fitar da ita"], answer: 1, why: "Daidaiton sautuka yana ji daban a na'urori daban-daban." },
      { objective: "O6", q: "Lokacin saka waƙarku inda kowa zai gani, ya kamata ku ɓoye:", options: ["Sunan waƙar", "Sunan mawaƙinku", "Cikakken sunanku, makarantarku da wurin zamanku", "Nau'in waƙar"], answer: 2, why: "Bayanan sirri suna zama a ɓoye a intanet." },
      { objective: "O6", q: "Waƙarku ta darasin waƙa ce. Game da AI, ya kamata ku:", options: ["Ɓoye cewa kun yi amfani da shi", "Nemi AI ya rubuta bayanin da ke cewa babu AI", "Tsallake bayanin yabo", "Bi dokokin malaminku ku faɗi yadda kuka yi amfani da shi"], answer: 3, why: "Faɗin gaskiya game da amfani da AI yana cikin dokokin makaranta." }
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
      8,
      10,
      13,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Bit",
        objective: "O2",
        notYet: "Babu ganguna, ko sauti ɗaya kawai.",
        meets: "Bit mai ganguna da aƙalla wani sauti ɗaya, a gudun da ya dace da yanayin waƙar.",
        exceeds: "Mai koyo zai iya bayyana dalilin da yasa ya zaɓi wannan gudun."
      },
      {
        name: "Tsarin waƙa",
        objective: "O4",
        notYet: "Babu gabatarwa, baiti ko amshi a sarari.",
        meets: "Kusan daƙiƙa 60 mai gabatarwa, baiti da amshi da kowanne yake ji da ɗan bambanci.",
        exceeds: "Amshin yana fitowa fili sosai, misali da ƙarin bass ko kari."
      },
      {
        name: "Baitoci na kai",
        objective: "O3",
        notYet: "Babu baitoci, ko an kwafo su daga AI.",
        meets: "Aƙalla layuka huɗu da kalmomin mai koyo da suka dace da bit.",
        exceeds: "Baitocin suna amfani da jigo na gaske daga rayuwar mai koyo, kuma suna nuna ra'ayoyin AI da aka canja."
      },
      {
        name: "Na asali kuma halal",
        objective: "O5",
        notYet: "Yana amfani da waƙar da aka kwafa, guntun waƙar wani mara lasisi ko kwafin AI na murya ta gaske.",
        meets: "Kowane sauti mai koyo ne ya yi shi ko situdiyon ta yarda da shi, kuma ba a kwafi muryar kowa ba.",
        exceeds: "Yana da jerin kowane sauti da inda ya fito."
      },
      {
        name: "Fitarwa da bayanin yabo",
        objective: "O6",
        notYet: "Ba a fitar da ita ba, ko babu bayanin yabo.",
        meets: "An fitar da ita a matsayin fayil na sauti, da bayanin yabo da ke faɗin yadda aka yi amfani da AI.",
        exceeds: "An duba daidaiton sautuka a belun kunne da lasifikar waya kuma an gyara."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka yi waƙa ta asali ta biyu cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka raba waƙa lafiya da iyalinsu, aji ko taron nuna ayyukan shirin matasa",
      "Masu koyo da suka shiga darasin waƙa, ƙungiya ko shiri cikin kwanaki 90"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya, ko kwamfutar makaranta ko ta ɗakin karatu mai intanet",
      "Belun kunne (headphones)",
      "BandLab ko wata situdiyo kyauta ta intanet, da izinin iyaye ko mai kula ga masu ƙasa da shekara 18",
      "Mataimakin AI kyauta da aka yarda mai koyo ya yi amfani da shi",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku duba dokokin shekaru na kowane kayan aiki kafin darasi, ku tattara izinin iyaye ko masu kula don buɗe asusu; ku shirya asusun nunawa idan ana buƙata.",
      "Ku samar da belun kunne don masu koyo su iya aiki kusa da juna a ɗakin kwamfuta.",
      "Ku duba jerin sautukan kowane mai koyo kafin fitarwa don gano waƙoƙin da aka kwafa, guntun waƙar wasu marasa lasisi ko muryoyin da aka kwaikwaya.",
      "Ku shirya zaman sauraron waƙoƙi a cikin rukunin kawai, da amincewar iyalai kafin a saka komai inda kowa zai gani.",
      "Ku ba da maki ga waƙar da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

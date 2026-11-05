"use strict";

// Koach Learn course, Hausa (ha) translation of entrepreneurs/entrepreneurs-intro-ai.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "entrepreneurs-intro-ai-ha",
  lang: "ha",
  translationOf: "entrepreneurs-intro-ai",
  category: "Entrepreneurs",
  name: "Gabatarwa ga AI don 'Yan Kasuwa",
  skills: "Gane ayyukan kasuwanci da suka dace da AI, Rubuta prompt na kasuwanci, Inganta daftari, Tabbatar da bayanai da lambobi, Kare bayanan kasuwanci da na abokan ciniki",
  outcome: "zaɓar aiki ɗaya na gaske a kasuwancinku, amfani da mataimakin AI kyauta don rubuta daftarinsa na farko, inganta sakamakon da tabbatar da shi, da kiyaye bayanan abokan ciniki da na kuɗi daga cikin hirar.",
  about: [
    "Wannan kwas ɗin na mutanen da ke fara ko faɗaɗa ƙaramin kasuwanci ne: motar sayar da abinci, aikin share-share, shagon gyaran gashi, shagon intanet, aikin ba da shawara, ko ƙaramar sana'a ta gefe da kuke son ta girma.",
    "Za ku koyi abin da mataimakan AI za su iya yi wa mai kasuwanci, yadda ake gano ayyukan makonku da AI zai iya hanzartawa, yadda ake rubuta prompt na kasuwanci a sarari, yadda ake inganta da tabbatar da abin da AI ya ba ku, da yadda ake kare bayanan abokan cinikinku.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta darasin, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\" ta amfani da kasuwancinku. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku zaɓi aiki ɗaya na gaske daga kasuwancinku (misali jerin farashi, imel na maraba ga sababbin abokan ciniki, ko rubutun kafofin sada zumunta na kowane mako). Ku yi amfani da mataimakin AI kyauta don rubuta daftarinsa da prompt na kasuwanci mai sassa uku, ku nemi gyara biyu, ku tabbatar da kowane bayani da lamba da kanku, ku cire duk wani bayanin sirri na abokan ciniki ko na kuɗi, sannan ku ajiye sigar ƙarshe a shirye don amfani.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Mutanen da ke fara ko faɗaɗa ƙaramin kasuwanci, kamar motar sayar da abinci, aikin share-share, shagon gyaran gashi, shagon intanet, aikin ba da shawara ko ƙaramar sana'a ta gefe. Yawancinsu suna yin kowane aiki na kasuwancin da kansu.",
    startingPoint: "Suna yin ayyukan kasuwancinsu da hannu, kuma suna amfani da waya ko kwamfuta kowace rana. Da yawa sun ji labarin mataimakan AI amma ba su taɓa amfani da su don aikin kasuwanci ba, ko sun gwada ba tare da hanya mai sarari ba.",
    gap: "Masu kasuwanci suna rasa sa'o'i kowane mako kan ayyukan rubutu da tsarawa da mataimakin AI zai iya rubuta daftarinsu cikin mintuna. Idan aka yi amfani da AI ba tare da kulawa ba, yana iya sa farashin da ba daidai ba, iƙirarin ƙarya ko bayanan sirri na abokan ciniki da sunan kasuwancin. Masu kasuwanci suna buƙatar hanya mai aminci da za a iya maimaitawa don rubuta daftari, inganta shi da tabbatar da rubutun kasuwanci da AI.",
    constraints: [
      "Kalmomi masu sauƙi; ba a buƙatar ilimin fasaha",
      "Na'urori: waya ko kwamfuta mai mataimakin AI kyauta",
      "Lokaci: kusan minti biyar kowane darasi, a cikin lokacin gudanar da kasuwancin",
      "Iƙirarin talla dole ya zama gaskiya kuma yana da hujja; tambayoyin haraji da lasisi a kai su majiyoyin hukuma ko ƙwararre",
      "Babu lambobin katin abokan ciniki, bayanan banki ko wasu bayanan sirri a kowane prompt"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Da kalmominku", action: "bayyana abin da mataimakin AI zai iya yi da wanda ba zai iya yi wa kasuwanci ba", standard: "har da dalilin da yasa mai kasuwanci yake duba komai kafin ya fita" },
    { id: "O2", condition: "Idan aka ba ku jerin ayyuka goma daga makonku", action: "rarraba ayyukan kasuwancinku na mako zuwa ayyukan da AI zai rubuta daftarinsu, ayyukan da AI zai taimaka muku tunani, da ayyukan da za ku riƙe wa kanku", standard: "kuna zaɓar aiki na farko ɗaya mai aminci kuma mai amfani don AI" },
    { id: "O3", condition: "Idan kuna da aikin da kuka zaɓa", action: "rubuta prompt na kasuwanci mai aiki, bayanin halin da ake ciki da tsari", standard: "ta yadda daftarin farko zai kusa zama mai amfani" },
    { id: "O4", condition: "Idan kuna da daftarin AI na farko", action: "neman gyare-gyare da tambayoyin biyo baya, ɗaya bayan ɗaya, da ƙara bayananku na gaske", standard: "har ya yi kama da kasuwancinku, cikin tambayoyin biyo baya uku ko ƙasa da haka" },
    { id: "O5", condition: "Idan kuna da daftarin da aka inganta", action: "tabbatar da kowane bayani, lamba da iƙirari da bayananku na ajiya ko majiyar hukuma", standard: "kuna cire duk wani iƙirari da ba za ku iya tabbatarwa ba" },
    { id: "O6", condition: "Duk lokacin da kuke amfani da AI don kasuwancin", action: "kiyaye bayanan sirri na abokan ciniki da na kuɗi daga cikin prompt, da gane zambar biyan kuɗi", standard: "kuna amfani da madadi kuma ba ku raba lambar kati, banki ko asusu ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Abin da AI zai iya yi wa kasuwancinku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne AI, a harshen kasuwanci",
          minutes: 4,
          goal: "Bayyana da kalmominku abin da mataimakin AI zai iya yi da wanda ba zai iya yi wa kasuwanci ba.",
          text: [
            "Mataimakin AI shiri ne na kwamfuta da kuke rubuta masa ko ku yi masa magana da kalmomin yau da kullum. Sanannu masu kyauta sun haɗa da ChatGPT, Microsoft Copilot da Google Gemini. Kuna neman wani abu, shi kuma yana rubuta daftari cikin daƙiƙoƙi.",
            "Ga mai kasuwanci, ku ɗauke shi a matsayin mai taimako mai sauri wajen rubuta daftarin farko. Yana da kyau wajen rubuta imel, rubutun kafofin sada zumunta da bayanin kayayyaki, mayar da rubutun gaggawa zuwa tsari, taƙaita dogayen takardu, tunanin sunaye da dabaru, da bayanin kalmomin kasuwanci da ba ku sani ba.",
            "Shi ba akawunku ba ne, ba lauyanku ba ne, kuma ba abokin cinikinku ba ne. Bai san farashinku, abokan cinikinku ko dokokin yankinku ba sai kun faɗa masa, kuma yana iya yin kuskure ko da yana magana kamar ya tabbata. Ku ne masu kasuwancin: ku ne kuke yanke abin da zai fita da sunan kasuwancinku."
          ],
          words: [["Mataimakin AI", "shirin kwamfuta da kuke hira da shi ta rubutu ko magana, wanda yake rubuta amsoshi da daftari."], ["Daftarin farko", "sigar farko ta wani abu da za ku duba ku inganta kafin ku yi amfani da shi."]],
          slides: [
            { title: "AI don kasuwanci = mai taimako mai sauri a daftari", bullets: ["Kuna nema da kalmomin yau da kullum", "Yana rubuta daftari cikin daƙiƙoƙi", "Na kyauta: ChatGPT, Microsoft Copilot, Google Gemini"] },
            { title: "Yana da kyau wajen", bullets: ["Imel, rubutun kafofin sada zumunta, bayanin kayayyaki", "Mayar da rubutun gaggawa zuwa tsari", "Taƙaitawa da tunanin dabaru"] },
            { title: "Shi BA", bullets: ["Akawunku ko lauyanku ba ne", "Ya san farashinku ko abokan cinikinku ba, sai kun faɗa", "Koyaushe daidai yake ba, ko da yana magana kamar ya tabbata"] }
          ],
          tryIt: "Ku rubuta abubuwa uku da kuka yi wa kasuwancinku a makon da ya gabata da suka shafi rubutu, tsarawa ko bayani. Ku zagaye wanda ya fi ɗaukar muku lokaci.",
          youCanNow: "faɗin abin da mataimakin AI zai iya yi wa kasuwanci, da dalilin da yasa har yanzu kuke duba komai kafin ya fita.",
          quickCheck: [
            { objective: "O1", q: "Me mataimakin AI yake buƙata daga gare ku don ya yi rubutu game da kasuwancinku?", options: ["Ainihin farashinku, lokutan aiki da bayananku", "Babu komai; ya riga ya san kasuwancinku", "Kalmar sirrin bankinku", "Tsarin biyan kuɗi"], answer: 0, why: "AI bai san kasuwancinku ba sai kun faɗa masa." },
            { objective: "O1", q: "AI ya rubuta takardar talla (flyer) don shagon gyaran gashinku. Me za ku yi kafin ku buga ta?", options: ["Ku buga ta nan take", "Ku karanta ku duba ta, domin tana fita da sunanku", "Ku bar AI ya buga ta", "Ku fara tura ta ga abokan ciniki"], answer: 1, why: "Mai kasuwanci ne ke da alhakin duk abin da ke da sunan kasuwancin." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Gano ayyukan da AI zai iya hanzartawa",
          minutes: 5,
          goal: "Jera ayyukan makonku da suka dace da AI, da waɗanda ba su dace ba.",
          text: [
            "Mafi kyawun ayyukan farko don AI su ne waɗanda kuke maimaitawa, waɗanda suka shafi kalmomi, kuma inda kuskure yake da sauƙin kamawa kafin kowa ya gani. Misalai: amsa tambayoyin da abokan ciniki suka saba yi, rubuta saƙon kafofin sada zumunta na mako, rubuta daftarin takardar talla, yin jerin abubuwan yi don sabon mataimaki, ko taƙaita dogon imel na mai kawo muku kaya.",
            "Ayyukan da BA su dace a bar wa AI shi kaɗai ba: duk abin da ke aika kuɗi, sa hannu a kwangila, ɗaukar matsayi na shari'a ko na haraji, ko yi wa abokin ciniki alkawari ba tare da kun fara karantawa ba. AI zai iya taimaka muku shiryawa, amma ku ne kuke yanke shawarar ƙarshe.",
            "Hanya mai sauƙi ta rarrabawa: ku rubuta kowane aiki a layi, sannan ku yi masa alama \"AI yana rubuta daftari, ni ina dubawa\", \"AI yana taimaka mini tunani\" ko \"Ni ina yi da kaina\"."
          ],
          steps: ["Ku jera ayyuka goma da kuka yi a makonni biyu da suka gabata.", "Ku yi wa kowanne alama: AI yana rubuta daftari / AI yana taimaka mini tunani / Ni ina yi da kaina.", "Ku zaɓi aikin \"AI yana rubuta daftari\" da ya fi ɗaukar muku lokaci.", "Wannan shi ne aikinku na farko don AI."],
          words: [["Aikin maimaitawa", "aikin da kuke yi akai-akai, kamar amsa tambayar abokin ciniki iri ɗaya."]],
          slides: [
            { title: "Ayyukan farko masu kyau don AI", bullets: ["Kuna maimaita su", "Yawancinsu kalmomi ne", "Kuskure yana da sauƙin kamawa kafin kowa ya gani"] },
            { title: "Misalai", bullets: ["Amsoshin tambayoyin da abokan ciniki suka saba yi", "Saƙon kafofin sada zumunta na mako ko takardar talla", "Jerin abubuwan yi don sabon mataimaki"] },
            { title: "Ku riƙe wa kanku", bullets: ["Aika kuɗi", "Sa hannu a kwangila, zaɓin haraji da na shari'a", "Alkawura ga abokan ciniki da ba ku karanta ba"] },
            { title: "Ku rarraba ayyukanku", bullets: ["AI yana rubuta daftari, ni ina dubawa", "AI yana taimaka mini tunani", "Ni ina yi da kaina"] }
          ],
          tryIt: "Ku yi jerin ayyukanku guda goma ku rarraba su zuwa rukunoni uku. Ku zaɓi aiki ɗaya na \"AI yana rubuta daftari, ni ina dubawa\" da za ku yi amfani da shi a sauran kwas ɗin.",
          youCanNow: "rarraba ayyukan kasuwancinku da zaɓar aiki na farko mai aminci kuma mai amfani don AI.",
          quickCheck: [
            { objective: "O2", q: "Me yake sa aiki ya zama aiki na farko mai kyau don AI?", options: ["Yana tura kuɗi", "Yana buƙatar sa hannu", "Ana maimaita shi, yawancinsa kalmomi ne kuma yana da sauƙin dubawa", "Ya shafi bayanan sirri na abokan ciniki"], answer: 2, why: "Ayyukan rubutu da ake maimaitawa kuma masu sauƙin dubawa nasarori ne masu aminci." },
            { objective: "O2", q: "Wani aiki a jerinku shi ne amincewa da biyan kuɗi ga mai kawo muku kaya. Ta yaya za ku rarraba shi?", options: ["AI yana rubuta daftari, ni ina dubawa", "AI yana yi shi kaɗai", "AI yana taimaka mini tunani", "Ku riƙe shi wa kanku"], answer: 3, why: "Shawarwarin kuɗi suna hannun mai kasuwanci." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rubuta prompt na kasuwanci a sarari",
          minutes: 5,
          goal: "Rubuta prompt na kasuwanci mai sassa uku da zai kawo daftari mai amfani tun farko.",
          text: [
            "Abin da kuke rubutawa mataimakin AI ana kiransa prompt (umarni). Prompt na kasuwanci ya fi aiki idan yana da sassa uku: aikin, bayanin kasuwancin, da tsarin da kuke so.",
            "Misali: \"Ka rubuta gajeren imel na maraba ga sababbin abokan ciniki na aikina na share gidaje a Atlanta. Muna share gidaje kowane mako biyu, kuma abokan ciniki za su iya tura mana tes don canja rana. Ka sa shi ya zama mai fara'a, ƙasa da kalmomi 120, da take (subject) mai sarari.\"",
            "Prompt mai rauni kamar \"rubuta imel\" yana sa mataimakin ya yi tsammani. Bai san kasuwancinku, abokin cinikinku ko salon maganarku ba, don haka daftarin zai zama na gama-gari. Kada ku taɓa sa sunayen abokan ciniki, lambobin waya, lambobin kati ko kalmomin sirri a cikin prompt; kuna iya ƙara su da kanku daga baya."
          ],
          steps: ["Aiki: ku faɗi daidai abin da kuke son a rubuta ko a tsara.", "Bayani: abin da kuke sayarwa, wane ne abokin ciniki, inda kuke, salon maganarku.", "Tsari: tsawo, jeri ko sakin layi, take, matakin karatu.", "Ku karanta prompt ɗin don neman bayanan sirri ku cire su kafin ku aika."],
          words: [["Prompt (umarni)", "abin da kuke rubutawa ko faɗa wa mataimakin AI don neman wani abu."], ["Bayanin halin da ake ciki (context)", "bayanan da AI yake buƙata, kamar abin da kuke sayarwa da wanda kuke sayarwa."]],
          slides: [
            { title: "Sassa uku na prompt na kasuwanci", bullets: ["1. Aiki: abin da kuke so", "2. Bayani: kasuwancinku da abokin cinikinku", "3. Tsari: tsawo, salo, yadda zai kasance"] },
            { title: "Mai rauni da mai sarari", bullets: ["Mai rauni: \"rubuta imel\"", "Mai sarari: imel na maraba, aikin share-share, Atlanta,", "mai fara'a, ƙasa da kalmomi 120, da take"] },
            { title: "Ku bar su a waje da prompt", bullets: ["Sunayen abokan ciniki da lambobin wayarsu", "Lambobin kati da na banki", "Kalmomin sirri"] }
          ],
          tryIt: "Ku rubuta prompt mai sassa uku don aikin da kuka zaɓa a Darasi na 2. Ku aika shi ga mataimakin AI kyauta, ku ajiye daftarin farko.",
          youCanNow: "rubuta prompt na kasuwanci mai aiki, bayani da tsari, da barin bayanan sirri a waje.",
          quickCheck: [
            { objective: "O3", q: "Wane sashe na prompt na kasuwanci ne tsari?", options: ["\"Ƙasa da kalmomi 100 da take\"", "\"Ka rubuta imel na maraba\"", "\"Mu shagon gyaran dabbobi ne a Phoenix\"", "\"Na gode da taimakonka\""], answer: 0, why: "Tsari yana faɗin yadda kuke son amsar: tsawo, yadda za ta kasance ko salo." },
            { objective: "O3", q: "Prompt ɗinku yana cewa \"rubuta saƙo\" kawai. Me za ku ƙara?", options: ["Babu wani abu", "Kasuwancinku, abokan cinikinku, da tsawon da salon da kuke so", "Jerin abokan cinikinku", "Kuɗin da ke asusun bankinku"], answer: 1, why: "Bayani da tsari suna mayar da buƙata marar sarari zuwa daftari mai amfani." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Abin da AI zai iya yi wa kasuwancinku",
        questions: [
          { objective: "O1", q: "Mece ce hanya mafi kyau ta ɗaukar mataimakin AI a kasuwancinku?", options: ["Akawunku", "Madadin tunaninku da hukuncinku", "Mai taimako mai sauri a daftarin farko da kuke dubawa", "Abokin ciniki"], answer: 2, why: "AI yana rubuta daftari da sauri, amma ku ne kuke dubawa da yanke abin da zai fita." },
          { objective: "O2", q: "Wane aiki ne aiki na farko mai kyau da za a ba mataimakin AI?", options: ["Rubuta daftarin saƙon kafofin sada zumunta na mako da za ku fara karantawa", "Biyan mai kawo kaya", "Sa hannu a kwangilar haya", "Zaɓar matsayinku na biyan haraji"], answer: 0, why: "Ana maimaita shi, yawancinsa kalmomi ne, kuma kuskure yana da sauƙin kamawa kafin kowa ya gani." },
          { objective: "O3", q: "Wanne ne prompt na kasuwanci mai sassa uku?", options: ["\"rubuta imel\"", "\"taimake ni\"", "\"abubuwan kasuwanci\"", "\"Imel na maraba ga sababbin abokan cinikin share-share a Atlanta; muna share kowane mako biyu; mai fara'a, ƙasa da kalmomi 120, da take.\""], answer: 3, why: "Yana ba da aikin, bayanin kasuwancin da tsarin." },
          { objective: "O6", q: "Me ya kamata ku bari a waje da prompt?", options: ["Irin kasuwancinku", "Lambar katin abokin ciniki", "Salon maganar da kuke so", "Tsawon da kuke so"], answer: 1, why: "Lambobin kati da sauran bayanan sirri kada su taɓa shiga hirar AI." },
          { objective: "O1", q: "Daftarin AI yana da sunan kasuwancinku. Wane ne ke da alhakinsa?", options: ["Kamfanin AI", "Ku, mai kasuwancin", "Babu kowa", "Abokin ciniki"], answer: 1, why: "Ku ne kuke yanke abin da zai fita da sunan kasuwancinku." }
        ]
      }
    },
    {
      name: "Babi na 2: Amfani da AI lafiya kuma da kyau",
      lessons: [
        {
          objectives: ["O4"],
          title: "Inganta daftari da tambayoyin biyo baya",
          minutes: 4,
          goal: "Mayar da daftarin farko zuwa sigar da za ku yi amfani da ita da gaske, da tambayoyin biyo baya.",
          text: [
            "Amsar farko daftari ce. Mataimakin yana tuna saƙonnin da suka gabata a cikin hira ɗaya, don haka kuna iya neman ya canja abu ɗaya a lokaci ɗaya.",
            "Tambayoyin biyo baya masu amfani don rubutun kasuwanci: \"Ka sa ya yi kama da ƙaramin kasuwancin unguwa.\" \"Ka gajarta shi zuwa kalmomi 80.\" \"Ka ƙara mataki na gaba mai sarari ga abokin ciniki.\" \"Ka ba ni take uku da zan zaɓa.\" \"Ka rubuta shi a matakin karatu mai sauƙi.\"",
            "Ku ƙara bayanan da ku kaɗai kuka sani: ainihin lokutan aikinku, ainihin farashinku da ainihin ƙa'idojinku. Sannan ku karanta shi da babbar murya. Idan bai yi kama da ku ba, ku nemi canji ko ku gyara shi da kanku."
          ],
          steps: ["Ku karanta daftarin farko.", "Ku zaɓi abu ɗaya da kuka fi son a canja.", "Ku nemi wannan canjin.", "Ku ƙara bayananku na gaske.", "Ku karanta shi da babbar murya ku maimaita idan ya cancanta."],
          words: [["Tambayar biyo baya (follow-up)", "buƙata ta biyu a cikin hira ɗaya da ke canja amsar ko ke ginuwa a kanta."], ["Kiran aiki (call to action)", "mataki na gaba mai sarari da kuke son abokin ciniki ya ɗauka, kamar \"Ku tura mana tes don yin rajista\"."]],
          slides: [
            { title: "Amsar farko daftari ce", bullets: ["Ku nemi canji ɗaya a lokaci ɗaya", "Hirar tana tuna abin da kuka faɗa"] },
            { title: "Tambayoyin biyo baya na kasuwanci", bullets: ["\"Ka sa ya yi kama da ƙaramin kasuwancin unguwa.\"", "\"Ka gajarta shi zuwa kalmomi 80.\"", "\"Ka ƙara mataki na gaba mai sarari ga abokin ciniki.\""] },
            { title: "Ku mai da shi naku", bullets: ["Ku ƙara ainihin lokutan aiki, farashi da ƙa'idoji", "Ku karanta shi da babbar murya", "Ku gyara har ya yi kama da ku"] }
          ],
          tryIt: "Ku ɗauki daftarinku daga Darasi na 3. Ku nemi canje-canje biyu, ɗaya bayan ɗaya, sannan ku ƙara bayananku na gaske. Ku kwatanta sigar farko da ta ƙarshe.",
          youCanNow: "inganta daftarin AI da tambayoyin biyo baya, da sa shi ya yi kama da kasuwancinku.",
          quickCheck: [
            { objective: "O4", q: "Mece ce tambayar biyo baya?", options: ["Sabuwar hira game da wani abu dabam", "Tunatarwar biyan kuɗi", "Buƙata ta biyu a cikin hira ɗaya da ke canja amsar", "Ra'ayin abokin ciniki"], answer: 2, why: "Tambayoyin biyo baya suna inganta daftarin da kuke da shi." },
            { objective: "O4", q: "Daftarin yana da kyau amma ya yi tsawo. Me za ku nema a gaba?", options: ["Ku sake farawa a sabuwar hira", "Ku nemi sigogi biyar a lokaci ɗaya", "Ku karɓe shi yadda yake", "\"Ka gajarta shi, ƙasa da kalmomi 80\""], answer: 3, why: "Canji ɗaya mai sarari a lokaci ɗaya yana inganta daftarin." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Tabbatar da bayanai, lambobi da iƙirari",
          minutes: 5,
          goal: "Duba daftarin AI don bayanan da ba daidai ba, lambobin da ba daidai ba da alkawuran da ba za ku iya cikawa ba.",
          text: [
            "AI yana iya ƙirƙirar abubuwa: farashin da ba ku taɓa sakawa ba, dokar da babu ita, jimillar da ba daidai ba, ko iƙirari kamar \"mafi kyau a birnin\" da ba za ku iya tabbatarwa ba. Irin wannan ƙirƙira wani lokaci ana kiranta hallucination (hasashen ƙarya).",
            "Kafin wani abu ya je wurin abokin ciniki, ku duba abubuwa uku. Bayanai: lokutan aiki, farashi, adireshi, ƙa'idoji. Lambobi: jimilloli da kaso (percentages) sun yi daidai? Ku yi lissafin da kanku ko a spreadsheet (takardar lissafi). Iƙirari: za ku iya tabbatar da shi? A Amurka, FTC tana cewa dole talla ta zama gaskiya, ba ta ruɗarwa ba, kuma tana da hujja.",
            "Don tambayoyin haraji, shari'a, lasisi ko kuɗi, ku yi amfani da AI kawai don fahimtar kalmomin, sannan ku tabbatar da majiyar hukuma (sau da yawa shafin .gov) ko ƙwararre kamar akawu ko lauya."
          ],
          steps: ["Ku haskaka kowane bayani, lamba da iƙirari a cikin daftarin.", "Ku tabbatar da bayanai da bayananku na ajiya.", "Ku sake yin kowane lissafi da kanku.", "Ku cire ko ku sassauta duk iƙirarin da ba za ku iya tabbatarwa ba.", "Ku tabbatar da batutuwan haraji, shari'a ko lasisi da majiyar hukuma ko ƙwararre."],
          words: [["Hallucination (hasashen ƙarya)", "lokacin da AI ya rubuta abin da yake kama da gaskiya amma ƙirƙirarre ne."], ["Iƙirari", "abin da kasuwancinku yake cewa gaskiya ne, kamar \"hidima a rana ɗaya\"."], ["FTC", "Federal Trade Commission, hukumar Amurka da ke tilasta dokokin gaskiya a talla."]],
          slides: [
            { title: "AI yana iya ƙirƙirar abubuwa", bullets: ["Farashin da ba ku taɓa sakawa ba", "Dokokin da babu su", "Jimillar da ba daidai ba"] },
            { title: "Ku duba abubuwa uku", bullets: ["Bayanai: lokutan aiki, farashi, ƙa'idoji", "Lambobi: ku sake yin lissafin", "Iƙirari: za ku iya tabbatar da shi?"] },
            { title: "Gaskiya a talla", bullets: ["FTC: dole talla ta zama gaskiya, ba ta ruɗarwa ba", "Iƙirari yana buƙatar hujja a bayansa"] },
            { title: "Haraji, shari'a, lasisi", bullets: ["Ku yi amfani da AI don fahimtar kalmomin", "Ku tabbatar a shafin .gov na hukuma", "Ko ku tambayi akawu ko lauya"] }
          ],
          sources: [{ name: "FTC: Advertising and Marketing Basics (Tushen talla da tallace-tallace)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Ku haskaka kowane bayani, lamba da iƙirari a cikin daftarinku da aka inganta. Ku duba kowanne, ku gyara abin da ba daidai ba, ku cire duk iƙirarin da ba za ku iya tabbatarwa ba.",
          youCanNow: "duba daftarin AI don bayanan da ba daidai ba, lambobin da ba daidai ba da iƙirarin da ba ku da hujjarsa.",
          quickCheck: [
            { objective: "O5", q: "Mene ne hallucination na AI?", options: ["Abin da yake kama da gaskiya amma ƙirƙirarre ne", "Wani nau'in talla", "Intanet mai jinkiri", "Ƙorafin abokin ciniki"], answer: 0, why: "AI yana iya rubuta bayanan ƙirƙira da ke kama da tabbatattu." },
            { objective: "O5", q: "Daftarin yana cewa \"na 1 a birnin\". Ba ku da hujja. Me za ku yi?", options: ["Ku bar shi; yana da daɗin ji", "Ku cire shi ko ku canja shi zuwa abin da yake gaskiya", "Ku ƙara \"wataƙila\"", "Ku tambayi AI ko gaskiya ne"], answer: 1, why: "Iƙirarin talla dole ya zama gaskiya kuma yana da hujja." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kare bayanan abokan ciniki da na kasuwanci",
          minutes: 5,
          goal: "Yi amfani da AI don ayyukan kasuwanci ba tare da raba bayanan sirri na abokan ciniki ko na kuɗi ba.",
          text: [
            "Abin da kuke rubutawa a hirar AI kamfanin da ke gudanar da ita yana iya ajiye shi, kuma a wasu tsare-tsare na kyauta ana iya amfani da shi don inganta AI ɗinsu. Ku karanta saitunan sirri (privacy settings) na kayan aikin, kuma ku ɗauka cewa duk abin da kuka rubuta wani zai iya ganinsa.",
            "Kada ku taɓa rubutawa a hirar AI: sunayen abokan ciniki tare da lambobin wayarsu ko adireshinsu, lambobin kati ko na banki, kalmomin sirri, lambar Social Security ko lambar haraji (tax ID), ko bayanan lafiya na sirri. Ku yi amfani da madadi kamar \"[sunan abokin ciniki]\" ku cike su da kanku daga baya.",
            "Ku kuma yi hankali da zambar da ake yi da AI ga kasuwanci: takardun neman biya (invoice) na bogi, imel da ke kwaikwayon salon mai kawo muku kaya, da kiran waya da muryar wanda kuka sani yana neman biya cikin gaggawa. Kafin ku biya, ku sake kira ta lambar da kuka riga kuka sani gaskiya ce."
          ],
          steps: ["Kafin ku aika prompt, ku karanta shi don neman bayanan sirri.", "Ku maye gurbinsu da madadi kamar \"[sunan abokin ciniki]\".", "Ku duba saitunan sirri ko na bayanai na kayan aikin.", "Ku tabbatar da duk wata buƙatar biya ta gaggawa ta hanyar kiran lambar da kuka riga kuka sani."],
          words: [["Madadi (placeholder)", "abin da ke tsaye a wurin bayani kamar \"[sunan abokin ciniki]\" da za ku maye gurbinsa da ainihin bayanin daga baya, a waje da hirar AI."], ["Zambar takardar biya (invoice)", "takardar neman biya ta bogi da aka yi ta yi kama da ta fito daga ainihin mai kawo kaya."]],
          slides: [
            { title: "Ku ɗauka cewa ana iya ganinsa", bullets: ["Ana iya ajiye hirarraki", "Tsare-tsaren kyauta na iya amfani da hirarraki don inganta AI", "Ku duba saitunan sirri"] },
            { title: "Kada ku taɓa rubutawa AI", bullets: ["Lambobin waya da adireshin abokan ciniki", "Lambobin kati, banki da na haraji", "Kalmomin sirri da bayanan lafiya"] },
            { title: "Ku yi amfani da madadi", bullets: ["\"[sunan abokin ciniki]\", \"[jimillar oda]\"", "Ku cike ainihin bayanan da kanku daga baya"] },
            { title: "Zambar kasuwanci", bullets: ["Takardun biya na bogi da ke kama da na gaske", "Kiran biya na gaggawa da murya da kuka sani", "Ku sake kira ta lambar da kuka sani"] }
          ],
          tryIt: "Aikin ƙarshe: ku kammala aikin kasuwancin da kuka zaɓa. Ku tabbata prompt ɗin da sigar ƙarshe ba su da bayanan sirri na abokan ciniki ko na kuɗi, ku duba kowane bayani, lamba da iƙirari, sannan ku ajiye shi a shirye don amfani.",
          youCanNow: "amfani da AI don aikin kasuwanci na gaske yayin da kuke kare abokan cinikinku, kuɗinku da sunanku.",
          quickCheck: [
            { objective: "O6", q: "Mene ne madadi (placeholder) a cikin prompt?", options: ["Ainihin lambar wayar abokin ciniki", "Kalmar sirri", "Alama kamar [sunan abokin ciniki] a maimakon ainihin bayanai", "Shafi marar rubutu"], answer: 2, why: "Madadi yana ba ku damar samun taimako ba tare da raba bayanan sirri ba." },
            { objective: "O6", q: "Saƙo daga \"bankinku\" yana neman ku tabbatar da lambar asusunku ta hanyar mayar da amsa. Me za ku yi?", options: ["Ku mayar da amsa da lambar", "Ku nemi AI ya mayar muku da amsa", "Ku tura shi ga abokan ciniki", "Ku tuntuɓi bankin ta lambar da kuka riga kuka sani"], answer: 3, why: "Ku yi amfani da hanyar tuntuɓa da kuka riga kuka amince da ita, ba wadda ke cikin saƙon gaggawa ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Amfani da AI lafiya kuma da kyau",
        questions: [
          { objective: "O4", q: "Daftarin AI ya yi kama da na hukuma sosai don ƙaramin shagonku. Me za ku yi?", options: ["Ku yi amfani da shi duk da haka", "Ku goge manhajar AI", "Ku tura shi ga lauya", "Ku tambaya: \"Ka sa ya yi kama da ƙaramin kasuwancin unguwa.\""], answer: 3, why: "Tambayar biyo baya tana neman mataimakin ya canja salon maganar." },
          { objective: "O5", q: "Daftarin AI yana cewa \"a buɗe har ƙarfe 9 na dare\" amma kuna rufewa ƙarfe 7. Me wannan yake nunawa?", options: ["AI yana iya ƙirƙirar bayanai, don haka kuke tabbatar da su", "AI koyaushe daidai yake", "Lokutan aikinku ba daidai ba ne", "Abokin ciniki ba zai lura ba"], answer: 0, why: "AI yana iya ƙirƙirar bayanai; kuna tabbatar da su da bayananku na ajiya." },
          { objective: "O5", q: "Daftarin yana cewa \"mafi araha a jihar\". Ba ku kwatanta farashi ba. Me ya kamata ku yi?", options: ["Ku bar shi, yana da daɗin ji", "Ku ƙara girmansa", "Ku cire shi ko ku canja shi zuwa abin da za ku iya tabbatarwa", "Ku ƙara \"tabbatacce\""], answer: 2, why: "Dole talla ta zama gaskiya kuma tana da hujja." },
          { objective: "O6", q: "Ta yaya ya kamata ku sa sunan abokin ciniki a prompt na AI?", options: ["Ku rubuta cikakken sunansa da lambar wayarsa", "Ku rubuta lambar katinsa ma", "Ku nemi abokin ciniki kalmar sirrinsa", "Ku yi amfani da madadi kamar \"[sunan abokin ciniki]\""], answer: 3, why: "Madadi yana kiyaye bayanan sirri daga cikin hirar." },
          { objective: "O6", q: "Kun sami kira na gaggawa da muryar mai kawo muku kaya yana neman ku biya sabon asusu yau. Me za ku yi?", options: ["Ku biya nan take", "Ku tura bayanan shiga bankinku", "Ku sake kiran mai kawo kayan ta lambar da kuka riga kuka sani", "Ku mayar da amsa da code ɗin da ke wayarku"], answer: 2, why: "AI yana iya kwaikwayon murya; ku tabbatar ta lambar da kuka sani kafin ku biya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gabatarwa ga AI don 'Yan Kasuwa",
    questions: [
      { objective: "O1", q: "Mataimakin AI a kasuwancinku ya fi amfani a matsayin:", options: ["Lauyanku", "Mai taimako mai sauri a daftarin farko", "Bankinku", "Mai yanke shawarar ƙarshe"], answer: 1, why: "Yana rubuta daftari; ku ne kuke dubawa da yanke shawara." },
      { objective: "O1", q: "Wanne ne sanannen mataimakin AI kyauta?", options: ["Google Gemini", "Injin karɓar kuɗi (cash register)", "Firinta", "Akwatin spreadsheet"], answer: 0, why: "Gemini, ChatGPT da Copilot sanannun mataimakan AI ne." },
      { objective: "O1", q: "Wanne a cikin waɗannan mataimakin AI BAI sani ba sai kun faɗa masa?", options: ["Mene ne tsarin kasuwanci (business plan)", "Yadda ake rubuta jeri", "Ainihin farashinku", "Kalmomin kasuwanci da aka saba"], answer: 2, why: "Bai san farashinku, abokan cinikinku ko ƙa'idojinku ba sai kun ba shi." },
      { objective: "O2", q: "Ayyukan farko masu kyau don AI su ne waɗanda:", options: ["Ake maimaitawa, yawancinsu kalmomi ne, kuma suna da sauƙin dubawa", "Suke aika kuɗi", "Suke sa hannu a kwangila", "Suke ɗaukar matsayinku na haraji"], answer: 0, why: "Waɗannan ba su da haɗari sosai kuma suna adana lokaci." },
      { objective: "O2", q: "Wane aiki ya kamata ku riƙe wa kanku?", options: ["Tunanin sunayen shago", "Rubuta daftarin takardar talla", "Yin jerin abubuwan yi", "Amincewa da biyan kuɗi ga mai kawo kaya"], answer: 3, why: "Shawarwarin kuɗi suna hannunku." },
      { objective: "O2", q: "Lokacin rarraba ayyuka, \"AI yana taimaka mini tunani\" yana nufin:", options: ["AI ne yake yanke shawara", "Kuna amfani da AI don tunanin dabaru ko bayani, sannan ku yanke shawara da kanku", "Ba ku taɓa amfani da AI ba", "AI yana aika shi a madadinku"], answer: 1, why: "AI yana taimaka wa tunaninku; ku ne kuke yanke shawara." },
      { objective: "O3", q: "Sassa uku na prompt na kasuwanci su ne:", options: ["Suna, kalmar sirri, adireshi", "Aiki, bayani, tsari", "Sannu, don Allah, na gode", "Farashi, haraji, jimilla"], answer: 1, why: "Aiki, bayani da tsari suna ba AI abin da yake buƙata." },
      { objective: "O3", q: "Wanne ne bayanin kasuwanci (context)?", options: ["\"Ƙasa da kalmomi 100\"", "\"Ka rubuta imel\"", "\"Na gode\"", "\"Mu masu wanke mota ne masu zuwa wurin abokin ciniki a Dallas, muna yi wa iyaye masu aiki yawa hidima\""], answer: 3, why: "Bayani yana bayyana kasuwancinku da abokin cinikinku." },
      { objective: "O3", q: "Wanne ne umarnin tsari?", options: ["\"Ka ba ni jerin gajerun maki 5\"", "\"Muna sayar da kek\"", "\"Abokan cinikinmu ɗalibai ne\"", "\"Muna Legas\""], answer: 0, why: "Tsari yana faɗin yadda amsar za ta kasance." },
      { objective: "O4", q: "Tambayar biyo baya ita ce:", options: ["Sabuwar manhaja", "Ra'ayin abokin ciniki", "Buƙata ta biyu a cikin hira ɗaya da ke canja amsar", "Wani nau'in takardar biya"], answer: 2, why: "Tambayoyin biyo baya suna inganta daftarin mataki-mataki." },
      { objective: "O4", q: "Wace tambayar biyo baya ce ke ƙara kiran aiki (call to action)?", options: ["\"Ka tsawaita shi ba tare da dalili ba.\"", "\"Ka cire duk bayanai.\"", "\"Ka ƙara kalmar sirrina.\"", "\"Ka ƙara mataki na gaba mai sarari, kamar Ku tura mana tes don yin rajista.\""], answer: 3, why: "Kiran aiki yana faɗa wa abokin ciniki abin da zai yi a gaba." },
      { objective: "O4", q: "Me yasa za ku karanta daftari da babbar murya?", options: ["Don AI ya yi sauri", "Don adana batir", "Don duba ko ya yi kama da ku", "Doka ta wajabta"], answer: 2, why: "Jin sa yana taimaka muku kama salon magana da kurakurai." },
      { objective: "O5", q: "\"Hallucination\" na AI shi ne:", options: ["Amsa mai jinkiri", "Abin da yake kama da gaskiya amma ƙirƙirarre ne", "Wani nau'in tambari (logo)", "Ƙorafin abokin ciniki"], answer: 1, why: "AI yana iya ƙirƙirar bayanan da ke kama da na gaske." },
      { objective: "O5", q: "AI ya yi kuskure a jimillar jerin farashinku. Mene ne darasin?", options: ["Ku sake yin lissafin da kanku ko a spreadsheet", "Ku amince da lissafin AI", "Ku ƙara farashinku", "Ku daina sayarwa"], answer: 0, why: "Koyaushe ku duba lambobi kafin ku yi amfani da su." },
      { objective: "O5", q: "A cewar FTC, iƙirarin talla dole ya zama:", options: ["Mai ban dariya", "Wanda AI ya rubuta", "Gaskiya, ba mai ruɗarwa ba, kuma yana da hujja", "Gajere"], answer: 2, why: "Dokokin FTC na gaskiya a talla suna buƙatar haka." },
      { objective: "O5", q: "Don tambayar haraji ko lasisi, AI ya fi amfani don:", options: ["Fahimtar kalmomin kafin ku tabbatar da majiyar hukuma ko ƙwararre", "Yanke shawarar ƙarshe", "Cike takardu a madadinku", "Maye gurbin akawunku"], answer: 0, why: "Ku tabbatar da batutuwan haraji da shari'a da majiyoyin hukuma ko ƙwararru." },
      { objective: "O6", q: "Wanne ne kada a TAƁA sa shi a hirar AI?", options: ["\"Ka sa shi ya fi fara'a\"", "Irin kasuwancinku", "Salon maganar da kuke so", "Lambar katin abokin ciniki"], answer: 3, why: "Lambobin kati bayanan kuɗi ne na sirri." },
      { objective: "O6", q: "Madadi kamar \"[sunan abokin ciniki]\" yana ba ku damar:", options: ["Ɓoye farashi daga abokan ciniki", "Samun taimako ba tare da raba bayanan sirri ba", "Tsallake dubawa", "Biya da sauri"], answer: 1, why: "Ku ne kuke cike ainihin bayanin da kanku daga baya." },
      { objective: "O6", q: "A wasu tsare-tsaren AI na kyauta, hirarrakinku na iya:", options: ["Ɓacewa kafin ku karanta su", "Zama a ajiye kuma a yi amfani da su don inganta AI", "Tafiya ga abokan cinikinku", "Fitowa a buga su"], answer: 1, why: "Shi yasa kuke duba saitunan sirri kuma kuke barin bayanan sirri a waje." },
      { objective: "O6", q: "Imel da ke kama da na mai kawo muku kaya yana neman ku biya sabon asusun banki cikin gaggawa. Mataki mafi kyau?", options: ["Ku biya yanzu", "Ku mayar da amsa da bayanan shiga bankinku", "Ku tura shi ga duk abokan ciniki", "Ku kira mai kawo kayan ta lambar da kuka riga kuka sani"], answer: 3, why: "Takardun biya na bogi sun zama ruwan dare; ku tabbatar ta lambar da kuka sani." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [0, 3, 6, 8, 9, 12, 14, 16, 17]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Prompt na kasuwanci", objective: "O3", notYet: "Prompt ɗin ba shi da sarari, misali \"rubuta imel\".", meets: "Prompt ɗin yana da aiki, bayani game da kasuwancin da tsari.", exceeds: "Yana kuma ambaton abokin ciniki da manufar, kuma daftarin farko ya kusa shiryawa." },
      { name: "An inganta daftarin", objective: "O4", notYet: "An yi amfani da daftarin farko yadda yake.", meets: "An yi gyare-gyare biyu da tambayoyin biyo baya, ɗaya bayan ɗaya, tare da bayanan mai kasuwancin na kansa.", exceeds: "Zai iya faɗin abin da kowane gyara ya gyara, kuma sigar ƙarshe ta yi kama da kasuwancin." },
      { name: "An tabbatar da bayanai da iƙirari", objective: "O5", notYet: "An kwafo farashi, lokacin aiki, jimilla ko iƙirari ba tare da dubawa ba.", meets: "An tabbatar da kowane bayani da lamba; kowane iƙirari gaskiya ne kuma ana iya tabbatar da shi.", exceeds: "Ya rubuta inda ya tabbatar da kowane bayani, kuma an sake yin lissafi a spreadsheet." },
      { name: "An bar bayanan sirri a waje", objective: "O6", notYet: "Prompt ko sigar ƙarshe tana da bayanan kati, banki ko bayanan sirri na abokan ciniki.", meets: "Babu bayanan sirri na abokan ciniki ko na kuɗi; an yi amfani da madadi inda ake buƙata.", exceeds: "Ya kuma duba saitin sirri na kayan aikin AI game da ajiye hirarraki." },
      { name: "A shirye don amfani", objective: "O1", notYet: "Sigar ƙarshe ba ta kammalu ba ko ba a ajiye ta ba.", meets: "An ajiye ta, an duba ta, kuma tana shirye don amfani da aikin da aka zaɓa.", exceeds: "An ajiye ta a matsayin samfuri (template) da mai kasuwancin zai iya sake amfani da shi a gaba." }
    ]
  },
  evaluation: {
    results: [
      "Masu kasuwanci da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu kasuwanci da suka yi amfani da daftarin AI don aikin kasuwanci na gaske cikin kwanaki 30 (binciken biyo baya)",
      "Masu kasuwanci da suka ce sun adana sa'o'i kowane mako a rubutu da tsarawa",
      "Masu koyo da suka fara wani kwas na Koach Learn na 'yan kasuwa cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Mataimakin AI kyauta kamar ChatGPT, Microsoft Copilot ko Google Gemini",
      "Ainihin farashinku, lokutan aiki da bayanan kasuwancinku don tabbatarwa",
      "Kusan minti 60 gaba ɗaya don darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "A wani taron bita, ku sa kowane mai kasuwanci ya kawo aiki ɗaya na gaske ya yi aiki a kansa a duk darussa shida.",
      "Ku tunatar da masu kasuwanci kada su taɓa liƙa lambobin kati, bayanan banki ko jerin abokan ciniki a hirar AI.",
      "Ku haɗa masu kasuwanci biyu-biyu su karanta daftarin juna da babbar murya, su gano iƙirarin da ke buƙatar hujja.",
      "Ku tura tambayoyin haraji da lasisi zuwa majiyoyin hukuma ko ƙwararre, ba AI ba.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

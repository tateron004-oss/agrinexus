"use strict";

// Koach Learn course, Hausa (ha) translation of workforce/workforce-ai-problem-solving.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "workforce-ai-problem-solving-ha",
  lang: "ha",
  translationOf: "workforce-ai-problem-solving",
  category: "Workforce Development",
  name: "AI don Warware Matsaloli da Yanke Shawara",
  skills: "Bayyana matsala a sarari, Nemo tushen matsala da hanyar 5 Whys, Samar da zaɓuɓɓuka da AI, Kwatanta zaɓuɓɓuka da teburin yanke shawara, Duba tunanin AI, Gabatar da shawara",
  outcome: "warware wata matsala ta gaske a wurin aiki mataki-mataki tare da AI a matsayin abokin tunani: rubuta bayanin matsala a sarari, nemo tushen matsalar da hanyar 5 Whys, jera zaɓuɓɓuka, kwatanta su a teburin yanke shawara, duba tunanin AI, da gabatar da shawara mai shafi ɗaya ga manajanku.",
  about: [
    "Wannan kwas ɗin na ma'aikata ne da masu neman aiki da ke son zama mutumin da ke warware matsaloli, ba wanda ke kai rahoto kawai ba: shugabannin rumbun ajiyar kaya da na shago, ma'aikatan taimako a asibiti, ma'aikatan ofis, masu hidimar abokan ciniki da masu sana'o'in hannu. Warware matsaloli yana ɗaya daga cikin ƙwarewar da masu ɗaukar aiki suka fi nema.",
    "Za ku koyi wata hanya mai sauƙi da ke aiki kan kowace matsala, daga dogayen layuka a wurin biya zuwa kayan da ba a kai a lokaci ba ko wani tsari mai ruɗani. Mataimakin AI yana taimaka muku yin tambayoyi mafi kyau, tunanin zaɓuɓɓuka da tsara tunaninku. Ku ne ke kawo bayanan gaskiya, kuma ku ne ke yanke shawara.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Kada ku saka bayanan sirri na kamfani ko na abokan ciniki a kayan AI, kuma ku bi dokokin wurin aikinku."
  ],
  finalTask: "Ku zaɓi wata matsala ta gaske a wurin aiki (ko misali na kusa da gaske) ku shirya shawara mai shafi ɗaya: bayanin matsala mai bayanan gaskiya, tushen matsala da hanyar 5 Whys, aƙalla zaɓuɓɓuka huɗu (wasu daga AI), teburin yanke shawara mai ma'aunai masu nauyi, bayanin abin da kuka duba a tunanin AI, da shawararku tare da matakan farko da yadda za ku auna nasara.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ma'aikata da masu neman aiki da ke son zama mutumin da ke warware matsaloli, ba wanda ke kai rahoto kawai ba: shugabannin rumbun ajiyar kaya da na shago, ma'aikatan taimako a asibiti, ma'aikatan ofis, masu hidimar abokan ciniki da masu sana'o'in hannu.",
    startingPoint: "Suna lura da matsaloli a wurin aiki kuma sau da yawa suna da ra'ayoyi, kuma suna iya amfani da wayar zamani ko kwamfuta. Yawancinsu ba su taɓa amfani da wata hanya mai tsari kamar 5 Whys ko teburin yanke shawara ba, kuma kaɗan ne suka yi amfani da AI a matsayin abokin tunani ko suka duba tunaninsa.",
    gap: "Warware matsaloli yana ɗaya daga cikin ƙwarewar da masu ɗaukar aiki suka fi nema, amma koke marar bayanan gaskiya da gyara marar sanin tushe ba kasafai ake amincewa da su ba. Masu koyo suna buƙatar hanya mataki-mataki, daga bayanin matsala zuwa shawara, da ke amfani da AI don faɗaɗa tunaninsu yayin da suke duba tunaninsa kuma su ne ke da alhakin shawarar.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana nuna hanyoyin mataki-mataki",
      "Na'urori: kwamfuta ko wayar zamani; takardar lissafi (spreadsheet) kyauta tana taimakawa wajen teburin yanke shawara",
      "Sirri da dokoki: babu bayanan sirri na abokan ciniki a kayan AI; dokokin AI na wurin aiki su ne farko",
      "Bayanan gaskiya: ana duba lambobi, ƙa'idoji da dokokin da AI ya bayar da bayanai na gaske, majiyar hukuma ko manaja",
      "Lokaci: darussa na kusan minti 5; tattara bayanai game da matsala ta gaske na iya ɗaukar mako guda"
    ],
    prerequisites: "Babu. Kwas ɗin \"Essential AI Tools for the Workplace\" (Muhimman Kayan AI a Wurin Aiki) yana taimaka wa masu koyo da ba su saba da mataimakan AI ba."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku wani koke marar sarari a wurin aiki", action: "rubuta bayanin matsala a sarari mai bayanan gaskiya, tare da AI yana yi muku tambayoyin da ke ƙara masa sarari", standard: "kuna faɗin mene ne, a ina, yaushe, girmansa, da dalilin da yasa yake da muhimmanci" },
    { id: "O2", condition: "Idan aka ba ku bayanin matsala", action: "amfani da hanyar 5 Whys don nemo tushen matsalar", standard: "kuma kun duba kowane dalilin da AI ya bayar da bayanan gaskiya ko abokan aiki" },
    { id: "O3", condition: "Idan aka ba ku tushen matsala", action: "yin jerin hanyoyin warwarewa ta amfani da AI, abokan aiki da ƙwarewarku", standard: "kuna riƙe aƙalla huɗu da suka dace, har da \"kada a canja komai\"" },
    { id: "O4", condition: "Idan aka ba ku aƙalla zaɓuɓɓuka huɗu", action: "kwatanta zaɓuɓɓukan a teburin yanke shawara mai ma'aunai masu nauyi", standard: "ku ne kuka sa nauyi da maki, kuma jimlar ta yi daidai" },
    { id: "O5", condition: "Idan aka ba ku tunanin AI game da zaɓuɓɓukanku", action: "duba tunanin don ƙirƙirarrun lambobi da dokokin da ba a tabbatar ba, da neman hujjojin da ke adawa da shi", standard: "kuna rubuta aƙalla abubuwa biyu da kuka tabbatar" },
    { id: "O6", condition: "Ta amfani da bincikenku", action: "rubuta shawara mai shafi ɗaya mai matakan farko, ƙaramin gwaji da ma'aunin nasara", standard: "babban abin a layukan farko, kuma da dukkan sassa bakwai" }
  ],
  chapters: [
    {
      name: "Babi na 1: Fahimtar matsalar",
      lessons: [
        {
          objectives: ["O1"],
          title: "Rubuta bayanin matsala a sarari",
          minutes: 5,
          goal: "Mayar da koke marar sarari zuwa bayanin matsala mai sarari da bayanan gaskiya.",
          text: [
            "\"Komai ya lalace\" ba matsala ce da za ku iya warwarewa ba. Bayanin matsala mai sarari yana faɗin abin da ke faruwa, a ina, yaushe, girmansa, da dalilin da yasa yake da muhimmanci. Misali: \"A yammacin ranakun aiki daga ƙarfe 5 zuwa 7 na yamma, abokan ciniki suna jira minti 12 a matsakaici a wurin biya, kuma muna samun koke kusan 5 a mako.\"",
            "Ku yi amfani da bayanan gaskiya da za ku iya gani ko ƙirgawa: lokuta, lambobi, sau nawa. Idan ba ku da lambobi, ku tattara wasu na mako guda.",
            "AI zai iya taimakawa: \"Ga bayanina na farko. Ka yi mini tambayoyi biyar da za su sa ya zama bayanin matsala mafi sarari.\" Amsa waɗannan tambayoyin sau da yawa yana nuna muku abin da kuke buƙatar sani da gaske."
          ],
          steps: ["Ku rubuta matsalar da kalmominku.", "Ku ƙara mene ne, a ina, yaushe, girmansa da dalilin muhimmancinsa.", "Ku maye gurbin hasashe da ƙidaya ko awo.", "Ku nemi AI ya yi muku tambayoyin da ke ƙara sarari, sannan ku sake rubutawa."],
          words: [["Bayanin matsala (problem statement)", "gajeren bayani na gaskiya game da matsala."], ["Bayanai (data)", "abubuwan gaskiya da lambobin da za ku iya ƙirgawa ko aunawa."]],
          slides: [
            { title: "Marar sarari da mai sarari", bullets: ["Marar sarari: \"Komai ya lalace\"", "Mai sarari: mene ne, a ina, yaushe, girmansa, muhimmancinsa"] },
            { title: "Misali", bullets: ["Ranakun aiki, ƙarfe 5-7 na yamma", "Jira na minti 12 a matsakaici a wurin biya", "Koke kusan 5 a mako"] },
            { title: "Ku ƙara masa sarari da AI", bullets: ["\"Ka yi mini tambayoyi biyar don ya ƙara sarari\"", "Ku amsa da bayanan gaskiya, sannan ku sake rubutawa"] }
          ],
          tryIt: "Ku zaɓi wata matsala ta gaske ko misali a wurin aiki. Ku rubuta bayaninta na farko, ku nemi AI tambayoyi biyar da ke ƙara sarari, ku amsa su, sannan ku sake rubuta ta a matsayin bayanin matsala mai sarari.",
          youCanNow: "rubuta bayanin matsala a sarari mai bayanan gaskiya.",
          quickCheck: [
            { objective: "O1", q: "Me bayanin matsala mai sarari ya ƙunsa?", options: ["Wanda za a ɗora wa laifi", "Mene ne, a ina, yaushe, girmansa da dalilin muhimmancinsa", "Yadda kuke ji game da ita kawai", "Maganin da kuka riga kuka so"], answer: 1, why: "Bayani mai sarari yana faɗin gaskiyar matsalar, ba laifi ko magani ba." },
            { objective: "O1", q: "Rubutunku ya ce \"Kaya koyaushe suna jinkiri.\" Me za ku yi a gaba?", options: ["Ku tura shi ga manajanku kamar yadda yake", "Ku ƙara \"sosai\" don ƙarfafawa", "Ku ɗora wa direbobi laifi", "Ku amsa tambayoyin AI masu ƙara sarari ku ƙara bayanai kamar waɗanne ranaku da yawan jinkirin"], answer: 3, why: "Tambayoyi masu ƙara sarari suna mayar da koke marar sarari zuwa bayanan gaskiya da za a iya aiki da su." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Nemo tushen matsala da hanyar 5 Whys",
          minutes: 5,
          goal: "Yi amfani da hanyar 5 Whys don nemo dalilin da ke bayan matsala.",
          text: [
            "Gyara alama kawai yana sa matsalar ta dawo. Hanyar 5 Whys (\"Me yasa?\" sau 5) tana taimaka muku tona har zuwa tushen matsala: ku tambayi \"Me yasa?\" game da matsalar, sannan ku tambayi \"Me yasa?\" game da wannan amsar, kusan sau biyar.",
            "Misali: Dogayen layuka a wurin biya. Me yasa? Na'urar biya ɗaya ce kawai a buɗe ƙarfe 5 na yamma. Me yasa? Aikin wani mai karɓar kuɗi yana ƙarewa ƙarfe 5. Me yasa? An tsara jadawalin aiki don cunkoson safe. Me yasa? Ba wanda ya duba cinikin yamma lokacin da aka yi shi. Tushen matsala: jadawalin bai dace da buƙatar yamma ba.",
            "AI zai iya ba da wasu \"me yasa\" da ba ku yi tunani ba, amma ku da abokan aikinku ne kaɗai kuka san waɗanne ne gaskiya. Ku duba kowace amsa da bayanan gaskiya ko ta hanyar tambayar mutanen da ke yin aikin."
          ],
          steps: ["Ku rubuta bayanin matsalar a sama.", "Ku tambayi \"Me yasa?\" ku rubuta amsar.", "Ku tambayi \"Me yasa?\" game da wannan amsar; ku maimaita kusan sau biyar.", "Ku duba kowace amsa da bayanan gaskiya ko abokan aiki.", "Ku zagaye tushen matsalar."],
          words: [["Tushen matsala (root cause)", "dalili mai zurfi da yasa matsala ke faruwa."], ["Alama (symptom)", "abin da ke nuna akwai matsala, ba dalilinta ba."], ["5 Whys", "hanyar tambayar \"me yasa?\" sau da yawa don nemo tushen matsala."]],
          slides: [
            { title: "Alama da tushen matsala", bullets: ["Gyara alama: matsalar tana dawowa", "Gyara tushen matsala: matsalar tana tafiya"] },
            { title: "Ku tambayi \"Me yasa?\" kusan sau biyar", bullets: ["Layuka sun yi tsawo -> na'urar biya ɗaya a buɗe", "-> aiki yana ƙarewa ƙarfe 5 -> jadawalin na safe ne", "Tushe: jadawalin bai dace da buƙatar yamma ba"] },
            { title: "AI yana ba da shawara, ku kuna tabbatarwa", bullets: ["AI zai iya ba da dalilai masu yiwuwa", "Ku duba kowanne da bayanan gaskiya ko abokan aiki"] }
          ],
          tryIt: "Ku yi hanyar 5 Whys kan matsalarku. Ku nemi AI wasu dalilai masu yiwuwa, sannan ku duba waɗanne ne gaskiya da bayanai ko wani abokin aiki. Ku zagaye tushen matsalar.",
          youCanNow: "nemo tushen matsala ta amfani da hanyar 5 Whys.",
          quickCheck: [
            { objective: "O2", q: "Mene ne bambancin alama da tushen matsala?", options: ["Alama tana nuna akwai matsala; tushen matsala shi ne dalili mai zurfi da yasa take faruwa", "Ma'anarsu ɗaya ce", "Alama koyaushe ta fi girma", "Tushen matsala shi ne abin da abokan ciniki ke koke a kai"], answer: 0, why: "Gyara alamu kawai yana bar matsalar ta dawo; tushen matsala shi ne dalilin da yasa take faruwa." },
            { objective: "O2", q: "AI ya ce tushen matsalar shi ne \"ma'aikata ba su damu ba\". Ba ku tabbata ba. Me za ku yi?", options: ["Ku rubuta shi a matsayin dalili", "Ku faɗa wa manajanku cewa ma'aikata ba su damu ba", "Ku duba shi da bayanan gaskiya ko abokan aiki kafin ku amince da shi", "Ku daina hanyar 5 Whys"], answer: 2, why: "Shawarwarin AI ra'ayoyi ne da za a duba, ba dalilai da aka tabbatar ba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Samar da zaɓuɓɓuka da AI",
          minutes: 5,
          goal: "Yi jerin aƙalla hanyoyin warwarewa huɗu, kuna amfani da AI don faɗaɗa tunaninku.",
          text: [
            "Yawancin mutane suna gaggawar ɗaukar maganin farko. Shawarwari mafi kyau suna fitowa daga kwatanta da yawa. Ku yi niyyar samun aƙalla zaɓuɓɓuka huɗu, har da \"kada a canja komai\" a matsayin ma'aunin farko.",
            "Ku nemi AI ya kawo ra'ayoyi: \"Tushen matsalar shi ne jadawalinmu bai dace da buƙatar yamma ba a wani ƙaramin shagon kayan abinci. Ka ba ni hanyoyin warwarewa takwas, daga masu arha da sauri zuwa manyan canje-canje.\" Yana iya ba da ra'ayoyi kamar canja lokacin hutu, layin biyan kai (self-checkout), ko koya wa masu jera kaya aikin wurin biya.",
            "Ku goge ra'ayoyin da ba su dace da wurin aikinku ba ko waɗanda ba za a taɓa amincewa da su ba, ku ƙara ra'ayoyin abokan aiki. Mutanen da ke yin aikin sau da yawa su ke da ra'ayoyi mafi kyau."
          ],
          steps: ["Ku rubuta tushen matsalar.", "Ku nemi AI zaɓuɓɓuka shida zuwa takwas, daga ƙanana zuwa manya.", "Ku goge waɗanda ba su dace ba.", "Ku ƙara ra'ayoyin abokan aiki.", "Ku riƙe aƙalla huɗu, har da \"kada a canja komai\"."],
          words: [["Zaɓi (option)", "hanyar warwarewa ɗaya mai yiwuwa."], ["Kawo ra'ayoyi (brainstorm)", "jera ra'ayoyi da yawa da sauri ba tare da yanke hukunci a kansu tukuna ba."], ["Ma'aunin farko (baseline)", "abin da ke faruwa idan ba ku canja komai ba."]],
          slides: [
            { title: "Kada ku tsaya a ra'ayin farko", bullets: ["Ku kwatanta aƙalla zaɓuɓɓuka huɗu", "Ku haɗa da \"kada a canja komai\""] },
            { title: "AI yana faɗaɗa tunaninku", bullets: ["Ku ba shi tushen matsalar", "Ku nemi zaɓuɓɓuka daga ƙanana zuwa manya"] },
            { title: "Ku sa ya zama na gaske", bullets: ["Ku goge ra'ayoyin da ba su dace ba", "Ku ƙara ra'ayoyin abokan aiki", "Masu yin aikin sau da yawa su suka fi sani"] }
          ],
          tryIt: "Ku nemi AI zaɓuɓɓuka takwas don gyara tushen matsalarku. Ku goge waɗanda ba su dace ba, ku ƙara ɗaya daga abokin aiki ko daga ƙwarewarku, ku riƙe aƙalla huɗu.",
          youCanNow: "samar da jerin zaɓuɓɓuka na gaske da taimakon AI, kuma ku rage su zuwa waɗanda suka dace.",
          quickCheck: [
            { objective: "O3", q: "Mene ne ma'anar kawo ra'ayoyi (brainstorm)?", options: ["Zaɓar ra'ayin farko", "Yanke hukunci kan kowane ra'ayi da zarar kun ji shi", "Tambayar manajanku kaɗai", "Jera ra'ayoyi da yawa da sauri ba tare da yanke hukunci tukuna ba"], answer: 3, why: "Kawo ra'ayoyi yana tattara ra'ayoyi da yawa da farko; ana yanke hukunci a kansu daga baya." },
            { objective: "O3", q: "AI ya ba ku zaɓuɓɓuka takwas, kuma biyu suna buƙatar kuɗin da shagonku ba shi da su. Me za ku yi?", options: ["Ku riƙe su duka", "Ku goge waɗanda ba su dace ba ku ƙara ɗaya daga abokin aiki", "Ku zaɓi mafi tsada", "Ku nemi AI ƙarin 50"], answer: 1, why: "Kuna riƙe zaɓuɓɓukan da suka dace da wurin aikinku, kuma ku ƙara ra'ayoyin mutanen da ke yin aikin." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Fahimtar matsalar",
        questions: [
          { objective: "O1", q: "Wanne ne bayanin matsala mafi sarari?", options: ["\"Komai ya lalace.\"", "\"Ranakun aiki ƙarfe 5-7 na yamma, jira a wurin biya minti 12 ne a matsakaici, kuma muna samun koke kusan 5 a mako.\"", "\"Abokan ciniki suna da ban haushi.\"", "\"Ku gyara shi.\""], answer: 1, why: "Yana faɗin mene ne, yaushe, girmansa da dalilin muhimmancinsa." },
          { objective: "O2", q: "Mene ne tushen matsala?", options: ["Koke", "Abin farko da kuka lura", "Wani tsiro", "Dalili mai zurfi da yasa matsala ke faruwa"], answer: 3, why: "Gyara tushen matsala yana hana matsalar dawowa." },
          { objective: "O2", q: "A hanyar 5 Whys, AI ya ba da wani dalili. Me za ku yi?", options: ["Ku duba shi da bayanan gaskiya ko abokan aiki", "Ku amince da shi", "Ku yi watsi da duk ra'ayoyin AI", "Ku ɗora wa wani laifi"], answer: 0, why: "Bayanan gaskiya ne kaɗai ke tabbatar da dalili." },
          { objective: "O3", q: "Me yasa za a haɗa da \"kada a canja komai\" a matsayin zaɓi?", options: ["Doka ce ta tilasta shi", "Koyaushe shi ne mafi kyau", "Yana ba da ma'aunin farko da za a kwatanta da shi", "Ba ya taɓa amfani"], answer: 2, why: "Ma'aunin farko yana nuna abin da kowane canji ke kawowa." },
          { objective: "O3", q: "Wane ne sau da yawa ke da ra'ayoyi mafi kyau don gyara matsalar aiki?", options: ["Abokan abokan ciniki", "AI kaɗai", "Mutanen da ke yin aikin", "Babu kowa"], answer: 2, why: "Masu yin aikin sun san cikakkun bayanai." }
        ]
      }
    },
    {
      name: "Babi na 2: Yanke shawara da ba da shawara",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kwatanta zaɓuɓɓuka da teburin yanke shawara",
          minutes: 6,
          goal: "Ba wa zaɓuɓɓuka maki bisa ma'aunai masu nauyi a teburin yanke shawara.",
          text: [
            "Teburin yanke shawara (decision matrix) tebur ne da ke kwatanta zaɓuɓɓuka cikin adalci. Zaɓuɓɓuka suna gefe daga sama zuwa ƙasa; ma'aunai suna sama a kwance. Ma'aunai da aka saba amfani da su: kuɗi, lokacin shiryawa, yadda yake gyara tushen matsalar, tasirinsa kan abokan ciniki, tasirinsa kan abokan aiki, da haɗari.",
            "Ku ba kowane ma'auni nauyi (1 zuwa 3) gwargwadon muhimmancinsa, ku ba kowane zaɓi maki 1 zuwa 5 a kowane ma'auni, ku ninka maki da nauyi, sannan ku haɗa. Mafi girman jimla zaɓi ne mai ƙarfi, ba wanda ya ci kai tsaye ba.",
            "Kuna iya neman AI ya gina tebur maras komai ko takardar lissafi (spreadsheet) mai dabarun lissafi (formulas). Ku ne ke zaɓar nauyi da maki bisa bayanan gaskiya da abin da wurin aikinku ke darajawa. Sannan ku tambaya: shin wanda ya ci yana da ma'ana? Idan ba haka ba, ku duba makinku."
          ],
          steps: ["Ku jera zaɓuɓɓukanku a gefe.", "Ku zaɓi ma'aunai huɗu zuwa shida ku ba kowanne nauyi 1-3.", "Ku ba kowane zaɓi maki 1-5 a kowane ma'auni.", "Ku ninka maki x nauyi sannan ku haɗa.", "Ku duba ko sakamakon yana da ma'ana."],
          words: [["Teburin yanke shawara (decision matrix)", "tebur da ke ba zaɓuɓɓuka maki bisa ma'aunai."], ["Ma'aunai (criteria)", "abubuwan da kuke amfani da su don auna zaɓuɓɓuka, kamar kuɗi ko haɗari."], ["Nauyi (weight)", "yawan muhimmancin ma'auni idan aka kwatanta da sauran."]],
          slides: [
            { title: "Ku shirya teburin", bullets: ["Zaɓuɓɓuka a gefe", "Ma'aunai a sama", "Kuɗi, lokaci, gyara tushe, mutane, haɗari"] },
            { title: "Ku ba da maki", bullets: ["Ku ba kowane ma'auni nauyi 1-3", "Ku ba kowane zaɓi maki 1-5", "Maki x nauyi, sannan ku haɗa"] },
            { title: "Ku ne ke yanke shawara", bullets: ["AI zai iya gina teburin", "Ku ne ke zaɓar nauyi da maki", "Shin wanda ya ci yana da ma'ana?"] }
          ],
          tryIt: "Ku gina teburin yanke shawara don zaɓuɓɓukanku huɗu tare da aƙalla ma'aunai huɗu masu nauyi. Ku yi amfani da AI don shirya teburin ko takardar lissafi, sannan ku cike makin da kanku ku haɗa jimlar.",
          youCanNow: "kwatanta zaɓuɓɓuka cikin adalci da teburin yanke shawara mai nauyi.",
          quickCheck: [
            { objective: "O4", q: "A teburin yanke shawara, mene ne ma'auni?", options: ["Amsar ƙarshe", "Ɗaya daga cikin zaɓuɓɓukan", "Abin da kuke auna zaɓuɓɓuka da shi, kamar kuɗi ko tsaro", "Mutumin da ke yanke shawara"], answer: 2, why: "Ma'aunai su ne abubuwan da kuke ba kowane zaɓi maki a kansu." },
            { objective: "O4", q: "Zaɓi B ya sami maki 3 a sauri (nauyi 2) da maki 5 a kuɗi (nauyi 1). Mene ne jimlarsa ga waɗannan biyu?", options: ["11", "8", "15", "10"], answer: 0, why: "Ku ninka kowane maki da nauyinsa ku haɗa: 3 x 2 + 5 x 1 = 11." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Duba tunanin AI",
          minutes: 5,
          goal: "Gane kurakuran da aka saba gani a tunanin AI kafin ku dogara da shi.",
          text: [
            "AI yana iya magana kamar ya tabbata amma duk da haka ya yi kuskure. Matsalolin da aka saba gani: ƙirƙirarrun bayanai ko lambobi, kurakuran lissafi, ra'ayoyin da ba su kula da dokokin wurin aikinku ko kasafin kuɗinsa ba, da rashin kula da ɓangaren mutane (ƙarfin gwiwar ma'aikata, tsaro, adalci).",
            "Ku nemi AI ya nuna tunaninsa: \"Ka bayyana mataki-mataki dalilin da yasa ka sa zaɓi B na farko.\" Sannan ku nemi ya yi jayayya da ɗaya ɓangaren: \"Mene ne dalilai mafi ƙarfi na RASHIN zaɓar zaɓi B?\" Wannan sau da yawa yana nuna wuraren da ke da rauni.",
            "Ku duba lambobi da kanku, ku duba kowace doka ko ƙa'ida a majiyar hukuma ko wurin manajanku, kuma ku nemi ra'ayin wani abokin aiki. Ku rubuta abin da kuka duba; yana ƙara ƙarfin shawararku."
          ],
          steps: ["Ku nemi AI ya bayyana tunaninsa mataki-mataki.", "Ku nemi hujjoji mafi ƙarfi da ke adawa da zaɓinsa.", "Ku sake duba lambobi da lissafi da kanku.", "Ku duba dokoki a majiyar hukuma ko wurin manajanku.", "Ku nemi ra'ayin abokin aiki, kuma ku rubuta abin da kuka duba."],
          words: [["Tunani (reasoning)", "matakan tunani da ke kai wa ga wani ƙarshe."], ["Mai jayayyar ɗaya ɓangaren (devil's advocate)", "yin jayayya da ɗaya ɓangaren da gangan don gwada wani ra'ayi."]],
          slides: [
            { title: "Tabbaci ba gaskiya ba ne", bullets: ["Ƙirƙirarrun bayanai ko lambobi", "Kurakuran lissafi", "Rashin kula da dokoki, kasafi ko ɓangaren mutane"] },
            { title: "Ku gwada tunanin", bullets: ["\"Ka bayyana mataki-mataki\"", "\"Mene ne dalilan RASHIN zaɓar wannan?\""] },
            { title: "Ku duba ku rubuta", bullets: ["Ku sake duba lambobi da kanku", "Dokoki: majiyar hukuma ko manaja", "Ra'ayin abokin aiki; ku rubuta abin da kuka duba"] }
          ],
          tryIt: "Ku tambayi AI wane zaɓi a cikin naku zai zaɓa da kuma dalili. Sannan ku nemi hujjoji mafi ƙarfi da ke adawa da shi. Ku sake duba lamba ɗaya, ku rubuta abubuwa biyu da kuka tabbatar.",
          youCanNow: "gwada tunanin AI da kama kurakurai kafin ku dogara da shi.",
          quickCheck: [
            { objective: "O5", q: "Wace ce matsala da aka saba gani a tunanin AI?", options: ["Koyaushe yana ƙin amsawa", "Ƙirƙirarrun lambobi da suke kama da na gaske", "Yana amfani da majiyoyin hukuma kaɗai", "Ba zai iya rubuta tebur ba"], answer: 1, why: "AI yana iya ƙirƙirar lambobin da suke kama da daidai, don haka ku sake duba su." },
            { objective: "O5", q: "AI ya ce dokar kamfani ta yarda da ƙarin lokacin aiki (overtime) don gyaranku. Me za ku yi?", options: ["Ku saka shi a shawararku", "Ku ɗauka gaskiya ne", "Ku tambayi AI ko ya tabbata", "Ku duba dokar a majiyar hukuma ko wurin manajanku"], answer: 3, why: "Dokoki da ƙa'idoji suna fitowa daga majiyar hukuma ko manajanku, ba daga AI ba." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Gabatar da shawararku",
          minutes: 5,
          goal: "Rubuta shawara mai shafi ɗaya da manajanku zai iya aiki da ita.",
          text: [
            "Manajoji suna amincewa da shawarwari masu sarari da gajarta. Ku yi amfani da wannan tsari: Matsala (jimla ɗaya ko biyu masu bayanan gaskiya), Tushen matsala, Zaɓuɓɓukan da aka duba, Shawara da dalilinta, Matakan farko, Yadda za mu auna nasara, Haɗari da yadda za a magance su.",
            "Ku sa ta zama shafi ɗaya. Ku nemi AI ya taƙaita daftarinku: \"Ka mayar da wannan shawara mai shafi ɗaya ga manajana, babban abin farko, da kalmomi masu sauƙi.\" Sannan ku duba cewa kowane bayani da lamba sun yi daidai da aikinku.",
            "Ku ba da shawarar ƙaramin gwaji da farko: \"Mu gwada shi na makonni biyu a yammacin Talata da Alhamis, mu auna lokutan jira.\" Ƙaramin gwaji da za a iya aunawa ya fi sauƙin amincewa, kuma yana tabbatar da ra'ayinku."
          ],
          steps: ["Ku rubuta sassa bakwai.", "Ku fara da shawararku a layukan farko.", "Ku nemi AI ya taƙaita ta zuwa shafi ɗaya.", "Ku duba kowane bayani da lamba.", "Ku ba da shawarar ƙaramin gwaji da za a iya aunawa."],
          words: [["Shawara (recommendation)", "zaɓin da kuke ba da shawara da dalilinsa."], ["Gwaji (trial)", "ɗan gajeren gwaji ƙarami na wani canji."], ["Ma'aunin nasara (success measure)", "lambar da ke nuna ko canjin ya yi aiki."]],
          slides: [
            { title: "Tsarin shafi ɗaya", bullets: ["Matsala da tushen matsala", "Zaɓuɓɓuka da shawara", "Matakan farko, ma'aunin nasara, haɗari"] },
            { title: "Ku sa amincewa ta yi sauƙi", bullets: ["Babban abin farko, shafi ɗaya", "AI yana taƙaitawa; ku kuna duba bayanai"] },
            { title: "Ku ba da shawarar ƙaramin gwaji", bullets: ["\"Makonni biyu, yammaci biyu a mako\"", "Ku auna sakamakon", "Ya fi sauƙin amincewa; yana tabbatar da ra'ayin"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta shawararku mai shafi ɗaya da dukkan sassa bakwai, tare da 5 Whys ɗinku da teburin yanke shawara a haɗe, bayanin abin da kuka duba a tunanin AI, da ƙaramin gwaji mai ma'aunin nasara.",
          youCanNow: "warware matsalar wurin aiki mataki-mataki da gabatar da shawarar da manajanku zai iya aiki da ita.",
          quickCheck: [
            { objective: "O6", q: "Mene ne ma'aunin nasara?", options: ["Lambar da ke nuna ko canjin ya yi aiki", "Tsawon rahotonku", "Yawan mutanen da suka so ra'ayin", "Amincewar manajanku"], answer: 0, why: "Ma'aunin nasara lamba ce da kuke bibiya don tabbatar da cewa canjin ya yi aiki." },
            { objective: "O6", q: "Manajanku yana da minti biyu kawai. Ta yaya za ku fara shawararku mai shafi ɗaya?", options: ["Da tarihin matsalar", "Da jerin duk wanda kuka yi magana da shi", "Da shawararku da mataki na farko, a layukan farko", "Da teburin yanke shawara"], answer: 2, why: "Sa babban abin a farko yana bar manajan da ke da aiki da yawa ya yi aiki da shi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Yanke shawara da ba da shawara",
        questions: [
          { objective: "O4", q: "A teburin yanke shawara, mene ne nauyi?", options: ["Yawan muhimmancin ma'auni", "Yawan nauyin akwati", "Makin wani zaɓi", "Kalmar sirri"], answer: 0, why: "Nauyi yana nuna muhimmanci." },
          { objective: "O4", q: "Zaɓi A ya sami maki 4 a kuɗi (nauyi 3) da maki 2 a haɗari (nauyi 2). Jimlarsa ga waɗannan biyu ita ce:", options: ["6", "8", "12", "16"], answer: 3, why: "4 x 3 + 2 x 2 = 12 + 4 = 16." },
          { objective: "O5", q: "Hanya mai kyau ta gwada zaɓin AI ita ce ku tambaya:", options: ["\"Ka tabbata?\" kawai", "\"Mene ne dalilai mafi ƙarfi na RASHIN zaɓar wannan?\"", "Babu komai", "\"Ka zaɓa mini\""], answer: 1, why: "Yin jayayya da ɗaya ɓangaren yana nuna wuraren da ke da rauni." },
          { objective: "O6", q: "A ina babban abin shawara ya kamata ya kasance?", options: ["A layukan farko", "A ƙarshe ƙarshe", "A ƙaramin rubutu na ƙasan shafi", "Babu inda"], answer: 0, why: "Manajoji suna fara karanta farko." },
          { objective: "O6", q: "Me yasa za a ba da shawarar ƙaramin gwaji?", options: ["Saboda ya fi tsada", "Don jinkirta shawarar har abada", "Ya fi sauƙin amincewa kuma yana tabbatar da ra'ayin", "Ba shi da amfani"], answer: 2, why: "Ƙananan gwaje-gwaje da ake iya aunawa suna rage haɗari." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Warware Matsaloli da Yanke Shawara",
    questions: [
      { objective: "O1", q: "Bayanin matsala mai sarari ya ƙunshi:", options: ["Koke kawai", "Mene ne, a ina, yaushe, girmansa da dalilin muhimmancinsa", "Wanda za a ɗora wa laifi", "Magani"], answer: 1, why: "Waɗannan sassa suna sa a iya warware ta." },
      { objective: "O1", q: "Idan ba ku da lambobi game da wata matsala, ya kamata ku:", options: ["Nemi AI ya ƙirƙira su", "Yi hasashe", "Haƙura", "Tattara wasu na mako guda"], answer: 3, why: "Bayanan gaskiya sun fi hasashe." },
      { objective: "O1", q: "Ta yaya AI zai iya taimakawa da bayanin matsala?", options: ["Ba zai iya taimakawa ba", "Ta hanyar ƙirƙirar bayanan", "Ta hanyar yanke shawara a madadinku", "Ta hanyar yi muku tambayoyin da ke ƙara masa sarari"], answer: 3, why: "Tambayoyi masu kyau suna nuna abin da kuke buƙata." },
      { objective: "O2", q: "Alama ita ce:", options: ["Tushen matsala", "Abin da ke nuna akwai matsala, ba dalilinta ba", "Magani", "Kayan aiki"], answer: 1, why: "Alamu suna nuna dalilai masu zurfi." },
      { objective: "O2", q: "A hanyar 5 Whys, kuna tambayar \"Me yasa?\" game da:", options: ["Sau hamsin", "Sau ɗaya kawai", "Kowace amsa, kusan sau biyar", "Babu komai"], answer: 2, why: "Kowane \"me yasa\" yana tona zurfi." },
      { objective: "O2", q: "A misalin wurin biya, tushen matsalar shi ne:", options: ["Jadawalin bai dace da buƙatar yamma ba", "Abokan ciniki suna da jinkiri", "Na'urorin biya sun tsufa", "Ana ruwan sama"], answer: 0, why: "An tsara jadawalin don safe." },
      { objective: "O3", q: "Zaɓuɓɓuka nawa ya kamata ku kwatanta aƙalla?", options: ["Babu", "Ɗaya", "Huɗu, har da kada a canja komai", "Ra'ayin farko na AI kawai"], answer: 2, why: "Kwatanta da yawa yana kawo shawarwari mafi kyau." },
      { objective: "O3", q: "Kawo ra'ayoyi (brainstorm) yana nufin:", options: ["Jera ra'ayoyi da yawa da sauri ba tare da yanke hukunci tukuna ba", "Yanke shawara da sauri", "Yin jayayya", "Rubuta rahoto"], answer: 0, why: "Yanke hukunci yana zuwa daga baya." },
      { objective: "O3", q: "AI ya ba da ra'ayin da wurin aikinku ba zai taɓa amincewa da shi ba. Ku:", options: ["Dage a kansa", "Goge shi", "Ɓoye shi", "Biya shi da kuɗinku"], answer: 1, why: "Ku riƙe zaɓuɓɓuka na gaske." },
      { objective: "O4", q: "Wanne ne ma'aunin teburin yanke shawara da aka saba amfani da shi?", options: ["Yanayin gobe", "Launin da kuka fi so", "Lambar sa'a", "Kuɗi"], answer: 3, why: "Kuɗi muhimmin ma'auni ne." },
      { objective: "O4", q: "Makin teburin a wannan kwas ɗin yana farawa daga:", options: ["1 zuwa 5", "1 zuwa 100", "A zuwa Z", "0 zuwa 1 kawai"], answer: 0, why: "Ma'auni mai sauƙi na 1-5." },
      { objective: "O4", q: "Mafi girman jimla a teburin:", options: ["Ba shi da amfani", "Shi ne amsar kai tsaye", "Koyaushe ba daidai ba ne", "Zaɓi ne mai ƙarfi, wanda har yanzu kuke duba ko yana da ma'ana"], answer: 3, why: "Ku duba cewa sakamakon yana da ma'ana." },
      { objective: "O4", q: "Wane ne ke zaɓar nauyi da maki?", options: ["Lambar da aka zaɓa ba da tunani ba", "AI shi kaɗai", "Ku, bisa bayanan gaskiya da abin da wurin aikinku ke darajawa", "Babu kowa"], answer: 2, why: "Hukunci yana hannunku." },
      { objective: "O5", q: "Wace ce matsalar tunanin AI da aka saba gani?", options: ["Yin hankali fiye da kima koyaushe", "Ƙirƙirarrun lambobi", "Ƙin rubutu", "Lissafi marar kuskure"], answer: 1, why: "AI yana iya ƙirƙirar alƙaluma." },
      { objective: "O5", q: "Dokoki da ƙa'idojin da ke cikin amsar AI ya kamata a duba su a:", options: ["Wurin kowa ba", "Wani AI kaɗai", "Jita-jita", "Majiyar hukuma ko wurin manajanku"], answer: 3, why: "Dokoki suna buƙatar majiya mai iko." },
      { objective: "O5", q: "Me yasa za ku rubuta abin da kuka duba?", options: ["Ba shi da amfani", "Don cike wuri", "Yana ƙara ƙarfin shawararku", "Don ɗora wa AI laifi"], answer: 2, why: "Yana nuna aiki mai kulawa." },
      { objective: "O5", q: "Wanne ne kada a taɓa saka a kayan AI yayin warware matsala?", options: ["Bayanan sirri na abokan ciniki", "Bayanin matsalar gaba ɗaya", "Jerin zaɓuɓɓukanku", "Sunayen ma'aunai"], answer: 0, why: "Bayanan sirri suna zama a waje." },
      { objective: "O6", q: "Shawara mai shafi ɗaya ta ƙunshi:", options: ["Ra'ayinku kawai", "Matsala, tushen matsala, zaɓuɓɓuka, shawara, matakan farko, ma'auni, haɗari", "Kowace imel da kuka tura", "Kalmomin sirri"], answer: 1, why: "Waɗannan sassa suna sa a iya aiki da ita." },
      { objective: "O6", q: "Ma'aunin nasara shi ne:", options: ["Albashinku", "Lambar da ke nuna ko canjin ya yi aiki", "Yabo", "Hasashe"], answer: 1, why: "Ma'aunai suna tabbatar da sakamako." },
      { objective: "O6", q: "Wane gwaji ne ya fi kyau a ba da shawara?", options: ["Makonni biyu a yammaci biyu, ana auna lokutan jira", "Canja komai har abada nan take", "Babu gwaji kuma babu ma'auni", "Canji na sirri"], answer: 0, why: "Ƙananan gwaje-gwaje da ake aunawa suna da sauƙin amincewa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [0, 3, 4, 6, 9, 11, 13, 14, 17, 18]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Bayanin matsala",
        objective: "O1",
        notYet: "Bayanin ba shi da sarari ko babu bayanan gaskiya a ciki.",
        meets: "Yana faɗin mene ne, a ina, yaushe, girmansa da dalilin muhimmancinsa, tare da bayanan gaskiya.",
        exceeds: "Ya haɗa da lambobin da mai koyo ya tattara da kansa."
      },
      {
        name: "Tushen matsala",
        objective: "O2",
        notYet: "Babu 5 Whys, ko an ɗauki dalilin daga AI ba tare da dubawa ba.",
        meets: "Jerin 5 Whys har zuwa tushen matsala da aka duba da bayanan gaskiya ko abokan aiki.",
        exceeds: "Yana nuna waɗanne dalilai da AI ya bayar aka cire, da dalilin hakan."
      },
      {
        name: "Zaɓuɓɓuka da tebur",
        objective: "O4",
        notYet: "Zaɓuɓɓuka ƙasa da huɗu, ko babu teburi mai nauyi.",
        meets: "Aƙalla zaɓuɓɓuka huɗu har da kada a canja komai, an ba su maki a teburi mai aƙalla ma'aunai huɗu masu nauyi, kuma jimlolin sun yi daidai.",
        exceeds: "Mai koyo ya bayyana dalilin da yasa nauyin ya dace da wurin aikinsa."
      },
      {
        name: "An duba tunanin AI",
        objective: "O5",
        notYet: "Babu bayanin abin da aka duba.",
        meets: "Bayanin aƙalla abubuwa biyu da aka tabbatar a tunanin AI, kuma ba a yi amfani da bayanan sirri ba.",
        exceeds: "Ya haɗa da hujjoji mafi ƙarfi da ke adawa da zaɓin da aka ɗauka, da amsar su."
      },
      {
        name: "Shawara",
        objective: "O6",
        notYet: "Babban abin yana ɓoye, ko babu matakai da ma'auni.",
        meets: "Shafi ɗaya mai babban abin a farko, matakan farko, ƙaramin gwaji da ma'aunin nasara.",
        exceeds: "Ya jera haɗari da yadda za a magance su."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka gabatar da shawararsu ga manaja cikin kwanaki 30 (binciken biyo baya)",
      "Shawarwarin da suka kai ga gwaji ko canji a wurin aiki",
      "Masu koyo da suka ce sun sami ƙarin girma, matsayin shugabanci ko sabon aiki cikin watanni 6"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta ko wayar zamani mai intanet",
      "Mataimakin AI kyauta: ChatGPT, Microsoft Copilot ko Google Gemini, ko kayan da wurin aiki ya amince da shi",
      "Takardar lissafi (spreadsheet) kyauta (Google Sheets ko Microsoft Excel ta intanet) ko takarda don teburin yanke shawara",
      "Matsalar aiki ta gaske ko misali na kusa da gaske, kamar lokutan jira a wurin biya",
      "Kusan minti 60 gaba ɗaya, da ƙarin lokaci don tattara bayanai game da matsala ta gaske"
    ],
    facilitatorNotes: [
      "Ku ba da misalin matsala ɗaya na kowa don masu koyo da ba za su iya amfani da ta gaske ba, don kowa ya iya atisayen kowane mataki.",
      "Ku sa ƙananan ƙungiyoyi su yi 5 Whys tare; mutanen da ke yin aikin sau da yawa su ne ke fara ganin tushen matsalar.",
      "Ku tabbatar cewa babu bayanan sirri na abokan ciniki da ke shiga kayan AI yayin atisaye.",
      "Ku sa masu koyo su gabatar da shawararsu mai shafi ɗaya cikin minti biyu ga abokin da ke yin kamar manaja.",
      "Ku ba da maki ga shawarar da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

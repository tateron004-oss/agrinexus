"use strict";

// Koach Learn course, Hausa (ha) translation of non-profits/nonprofit-ai-marketing-outreach.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "nonprofit-ai-marketing-outreach-ha",
  lang: "ha",
  translationOf: "nonprofit-ai-marketing-outreach",
  category: "Non Profits",
  name: "AI don Tallatawa da Isar da Saƙo ga Al'umma",
  skills: "Gane masu sauraronku da saƙonku, Rubuta saƙonnin kafofin sada zumunta da AI, Rubuta daftarin wasiƙar labarai, Sa saƙo ya zama a sarari kuma kowa ya iya amfani da shi, Tsara isar da saƙo na wata ɗaya",
  outcome: "amfani da AI don tsarawa da rubuta daftarin isar da saƙo na wata ɗaya don wani shiri na ƙungiya mai zaman kanta: babban saƙo ɗaya don rukunin masu sauraro ɗaya, saƙonni huɗu na kafofin sada zumunta, gajeren labari na wasiƙar labarai, da takardar sanarwa (flyer) da kalmomi masu sauƙi, duk an duba su, kowa zai iya amfani da su, kuma suna da muryar ƙungiyarku.",
  about: [
    "Wannan kwas ɗin na ma'aikata da masu aikin sa kai ne a ƙungiyoyi masu zaman kansu da na addini, waɗanda ke kula da kafofin sada zumunta, wasiƙun labarai, takardun sanarwa da sanarwar al'umma, sau da yawa tare da sauran ayyukansu.",
    "Za ku koyi faɗin masu sauraronku da saƙonku, sannan ku yi amfani da AI don rubuta saƙonni, wasiƙun labarai da takardun sanarwa da sauri, ku sa su zama a sarari kuma kowa a al'ummarku ya iya amfani da su, kuma ku tsara isar da saƙo na wata ɗaya.",
    "Kowane darasi yana ɗaukar kusan minti biyar, kuma yana ƙarewa da aikin hannu da zai zama wani sashe na tsarin isar da saƙonku. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku yi tsarin isar da saƙo na wata ɗaya don wani shiri ko taro na gaske. Ku sa rukunin masu sauraro ɗaya da babban saƙo ɗaya, saƙonni huɗu na kafofin sada zumunta tare da bayanin hotuna, labarin wasiƙar labarai mai kalmomi 200, da rubutun takardar sanarwa da kalmomi masu sauƙi. Duk a rubuta daftarinsu da AI, a duba gaskiyarsu da sirri, kuma a gyara su don su yi kama da ƙungiyarku. Ku sa su a kan sauƙaƙƙen kalanda na makonni huɗu.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ma'aikata da masu aikin sa kai a ƙungiyoyi masu zaman kansu da na addini waɗanda ke kula da kafofin sada zumunta, wasiƙun labarai, takardun sanarwa da sanarwar al'umma, sau da yawa tare da sauran ayyukansu.",
    startingPoint: "Suna saka saƙo a kafofin sada zumunta kuma suna aika imel ko takardun sanarwa lokaci-lokaci, yawanci cikin gaggawa. Da yawa ba su taɓa tsara isar da saƙo tun da wuri ba, ba su taɓa rubuta bayanin hoto ba, ko amfani da AI don daftari ba.",
    gap: "Isar da saƙo da aka yi cikin gaggawa, marar sarari ko mai wuyar karantawa ba ya kai ga mutanen da shirin yake domin su, har da masu karatu a wani harshe ko masu amfani da mai karanta allo (screen reader). Masu koyo suna buƙatar tsara isar da saƙo na wata ɗaya mai sarari, wanda kowa zai iya amfani da shi, kuma na gaskiya, da sauri da AI, ba tare da jefa sirrin kowa cikin haɗari ba.",
    constraints: [
      "Lokaci: ana yin isar da saƙo tare da sauran ayyuka, don haka kowane darasi kusan minti 5 ne",
      "Sirri: izini a rubuce don hotunan yara da waɗanda ake yi wa hidima; babu bayanan da ke nuna ko wane ne mutum a cikin labarai ba tare da yarjejeniya ba",
      "Mai iya harshen sosai daga al'umma yana duba fassarar AI",
      "Wasiƙun labarai ta imel suna buƙatar hanya a sarari ta daina karɓa (unsubscribe)",
      "Na'urori: waya ko kwamfuta mai kayan aiki kyauta"
    ],
    prerequisites: "\"Gabatarwa ga AI don Ƙungiyoyin Sa-kai\", ko ɗan sanin amfani da mataimakin AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku shiri ɗaya da rukunin masu sauraro ɗaya", action: "rubuta babban saƙo da ke faɗin mene ne shirin, dalilin da yasa yake da muhimmanci a gare su, da abin da za su yi a gaba", standard: "cikin jimla ɗaya ko biyu" },
    { id: "O2", condition: "Idan kuna da babban saƙonku", action: "rubuta daftarin saƙonni huɗu na kafofin sada zumunta da AI: sanarwa, saƙon abin da ke faruwa a bayan fage, saƙon godiya, da tunatarwar dama ta ƙarshe", standard: "kowanne gajere, yana ƙarewa da mataki ɗaya, kuma da hotuna da labarai masu izini kawai" },
    { id: "O3", condition: "Idan kuna da bayanan shirinku", action: "rubuta labarin wasiƙar labarai mai kalmomi 200 da labari ɗaya, lamba ɗaya ta gaskiya, da yadda ake taimakawa", standard: "an duba kowace lamba, suna, kwanan wata da maganar da aka ambato" },
    { id: "O4", condition: "Idan kuna da daftarin isar da saƙo", action: "sake rubuta shi da kalmomi masu sauƙi da rubuta daftarin fassara don al'ummarku", standard: "mai iya harshen sosai ya duba fassarar kafin a raba ta" },
    { id: "O5", condition: "Idan kuna da saƙonninku da takardar sanarwa", action: "rubuta alt text (bayanin hoto) da sa su zama masu sauƙin amfani ga kowa da rubutun ƙasan bidiyo (captions), bambancin launi da hashtag masu sauƙin karantawa", standard: "alt text ɗin ya yi daidai da abin da ke cikin kowane hoto da gaske" },
    { id: "O6", condition: "Idan kuna da sassan isar da saƙonku da ranar taron", action: "yin kalandar isar da saƙo ta makonni huɗu mai mako, hanya, sashe da wanda zai saka", standard: "an duba ranakun da ainihin kalandarku" }
  ],
  chapters: [
    {
      name: "Babi na 1: Saƙo da hanyoyin isarwa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Sanin masu sauraronku da saƙonku",
          minutes: 5,
          goal: "Rubuta babban saƙo ɗaya a sarari don rukunin masu sauraro ɗaya.",
          text: [
            "Isar da saƙo mai kyau yana magana da rukuni ɗaya a lokaci ɗaya. Masu aikin sa kai, masu ba da gudummawa, iyalan da kuke yi wa hidima, 'yan coci ko masallaci, da 'yan kasuwa na yankin, kowannensu yana damuwa da abubuwa daban-daban.",
            "Babban saƙo yana faɗin, cikin jimla ɗaya ko biyu, abin da kuke son rukunin ya sani kuma ya yi. Misali ga iyaye: \"Koyarwar bayan makaranta kyauta za ta fara ranar 8 ga Satumba a cibiyar al'umma. Ku yi rajista kafin 1 ga Satumba don yaronku ya sami wuri.\"",
            "AI zai iya taimaka muku ku inganta shi. Ku tambaya: \"Ga shirinmu: [bayanan da ake iya bayyanawa]. Ka rubuta saƙo mai jimla ɗaya iri uku don [masu sauraro]. Kowanne ya faɗi mene ne, dalilin da yasa yake da muhimmanci a gare su, da abin da za su yi a gaba.\""
          ],
          steps: ["Ku zaɓi shiri ɗaya da rukunin masu sauraro ɗaya.", "Ku rubuta abin da kuke so su sani kuma su yi.", "Ku nemi AI ya ba ku saƙo mai jimla ɗaya iri uku.", "Ku zaɓi mafi sarari ku gyara shi."],
          words: [["Masu sauraro (audience)", "rukunin mutanen da kuke ƙoƙarin isa gare su."], ["Babban saƙo (key message)", "jimla ɗaya ko biyu da kuka fi so masu sauraronku su tuna kuma su yi aiki da su."]],
          slides: [
            { title: "Rukunin masu sauraro ɗaya a lokaci ɗaya", bullets: ["Masu aikin sa kai, masu ba da gudummawa, iyalai, 'yan ƙungiya", "Kowannensu yana damuwa da abubuwa daban-daban"] },
            { title: "Babban saƙo yana faɗin", bullets: ["Mene ne", "Dalilin da yasa yake da muhimmanci a gare su", "Abin da za su yi a gaba"] },
            { title: "Ku inganta shi da AI", bullets: ["Ku nemi saƙo mai jimla ɗaya iri uku", "Ku zaɓi mafi sarari", "Ku gyara shi don ya yi kama da ku"] }
          ],
          tryIt: "Ku zaɓi shiri ɗaya da rukunin masu sauraro ɗaya. Ku yi amfani da AI don samun babban saƙo iri uku, sannan ku rubuta naku na ƙarshe a saman shafin da sunansa \"Tsarin isar da saƙo\".",
          youCanNow: "rubuta babban saƙo a sarari don rukunin masu sauraro ɗaya.",
          quickCheck: [
            { objective: "O1", q: "Me yasa isar da saƙo zai yi magana da rukuni ɗaya a lokaci ɗaya?", options: ["Rukunoni daban-daban suna damuwa da abubuwa daban-daban", "Bugawa ta fi arha", "Kafofin sada zumunta suna yarda da rukuni ɗaya kawai", "Masu ba da gudummawa da masu aikin sa kai mutane ɗaya ne"], answer: 0, why: "Masu aikin sa kai, masu ba da gudummawa, iyalai da 'yan kasuwa, kowannensu yana damuwa da abubuwa daban-daban." },
            { objective: "O1", q: "Saƙonku ga masu aikin sa kai bai faɗi abin da za su yi a gaba ba. Me za ku ƙara?", options: ["Dogon tarihin ƙungiyar", "Mataki ɗaya a sarari, kamar \"Ku yi rajista kafin Juma'a\"", "Ƙarin hashtag", "Jerin dukkan shirye-shirye"], answer: 1, why: "Babban saƙo yana faɗin mene ne, dalilin da yasa yake da muhimmanci, da abin da za a yi a gaba." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rubuta saƙonnin kafofin sada zumunta da AI",
          minutes: 5,
          goal: "Rubuta daftarin saƙonni huɗu na kafofin sada zumunta don shiri ɗaya da AI.",
          text: [
            "Saƙonnin kafofin sada zumunta sun fi aiki idan gajeru ne, suna nuna wani lokaci na gaske, kuma suna ƙarewa da mataki ɗaya a sarari. Kafofi daban-daban sun dace da tsayi daban-daban: saƙon Facebook zai iya yin tsawo, rubutun Instagram yana tafiya tare da hoto, kuma saƙo a kafar gajerun rubutu dole ya yi gajarta.",
            "Ku tambaya: \"Ta amfani da wannan babban saƙo: [saƙo], ka rubuta saƙonni huɗu na kafofin sada zumunta don [kafa] cikin makonni huɗu: sanarwa, saƙon abin da ke faruwa a bayan fage, godiya ga mai aikin sa kai ko mahalarci, da tunatarwar dama ta ƙarshe. Kowanne ƙasa da kalmomi 60, mai fara'a, da kira ɗaya na ɗaukar mataki.\"",
            "Ku yi amfani da hotunanku da izini. Kada ku taɓa saka hotunan yara ko waɗanda ake yi wa hidima ba tare da izini a rubuce ba, kuma kada ku taɓa raba labarin wani da bayanan da za su nuna ko wane ne shi sai dai idan ya yarda."
          ],
          steps: ["Ku ba AI babban saƙonku da kafar.", "Ku nemi nau'ikan saƙo huɗu cikin makonni huɗu.", "Ku gyara kowanne don ya yi kama da ƙungiyarku.", "Ku zaɓi hotunan da kuke da izinin amfani da su."],
          words: [["Kafa (platform)", "hidimar kafofin sada zumunta, kamar Facebook ko Instagram."], ["Rubutun hoto (caption)", "rubutun da ke tafiya tare da saƙon hoto ko bidiyo."], ["Izini (consent)", "yardar mutum, zai fi kyau a rubuce, don a nuna shi ko a ambaci maganarsa."]],
          slides: [
            { title: "Saƙonnin da ke aiki", bullets: ["Gajeru", "Wani lokaci na gaske", "Mataki ɗaya a sarari"] },
            { title: "Nau'ikan saƙo huɗu", bullets: ["Sanarwa", "Abin da ke faruwa a bayan fage", "Godiya", "Tunatarwar dama ta ƙarshe"] },
            { title: "Hotuna da labarai", bullets: ["Ku yi amfani da hotunanku da izini", "Izini a rubuce don yara da waɗanda ake yi wa hidima"] }
          ],
          tryIt: "Ku yi amfani da AI don rubuta daftarin saƙonni huɗu don kafa ɗaya daga babban saƙonku. Ku gyara su ku ƙara su a tsarin isar da saƙonku.",
          youCanNow: "rubuta daftarin jerin saƙonnin kafofin sada zumunta da AI.",
          quickCheck: [
            { objective: "O2", q: "Wane irin saƙo ne dole ya yi gajarta?", options: ["Saƙon Facebook", "Labarin wasiƙar labarai", "Saƙo a kafar gajerun rubutu", "Takardar sanarwa da aka buga"], answer: 2, why: "Saƙo a kafar gajerun rubutu dole ya yi gajarta; saƙon Facebook zai iya yin tsawo." },
            { objective: "O2", q: "Wani mahalarci ya ba da labari mai taɓa zuciya amma bai yarda a ambaci sunansa ba. Yaya za ku saka shi?", options: ["Ku saka shi da sunansa", "Ku saka hotonsa tare da labarin", "Ku saka shi ku tambaye shi daga baya", "Ku raba shi ba tare da bayanan da ke nuna ko wane ne shi ba, ko kada ku raba shi"], answer: 3, why: "Kada ku taɓa raba labarin wani da bayanan da ke nuna ko wane ne shi sai dai idan ya yarda." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rubuta daftarin labarin wasiƙar labarai",
          minutes: 5,
          goal: "Mayar da bayanan shiri zuwa gajeren labarin wasiƙar labarai da AI.",
          text: [
            "Wasiƙun labarai suna sa masu ba da gudummawa, masu aikin sa kai da 'yan ƙungiya su kasance kusa. Gajeren labari yana ba da labari ɗaya: abin da ya faru, wanda ya taimaka (ba tare da bayanan sirri ba), abin da yake nufi ga manufar ƙungiyar, da abin da masu karatu za su iya yi a gaba.",
            "Ku ba AI bayananku: \"Ka mayar da waɗannan bayanai zuwa labarin wasiƙar labarai mai kalmomi 200 don masu goyon bayanmu. Ka yi amfani da kanun labari mai fara'a, gajeren labari ɗaya, lamba ɗaya ta gaskiya, kuma ka ƙare da yadda ake taimakawa: [bayanai].\"",
            "Ku duba lambar da kowane suna da kwanan wata. Ku ƙara maganar da aka ambato kawai idan mutum na gaske ya faɗe ta kuma ya yarda a ambace shi. Idan kuna aika wasiƙun labarai ta imel, ku sa hanya a sarari ta daina karɓa (unsubscribe) kuma ku bi dokokin kayan imel ɗinku."
          ],
          steps: ["Ku rubuta bayanai a taƙaice game da wani lokaci na kwanan nan.", "Ku nemi AI ya rubuta labari mai kalmomi 200 da kanun labari, labari, lamba da yadda ake taimakawa.", "Ku duba kowace gaskiya da kowace maganar da aka ambato.", "Ku ƙara shi a wasiƙar labaranku da hoton da aka ba ku izinin amfani da shi."],
          words: [["Wasiƙar labarai (newsletter)", "sanarwa ta yau da kullum da ake aika wa masu goyon baya ta imel ko a takarda."], ["Daina karɓa (unsubscribe)", "hanyar haɗi (link) da ke bar mutum ya daina karɓar imel ɗinku."]],
          slides: [
            { title: "Labari ɗaya a kowane rubutu", bullets: ["Abin da ya faru", "Wanda ya taimaka, ba tare da bayanan sirri ba", "Abin da masu karatu za su iya yi"] },
            { title: "Prompt ɗin", bullets: ["Kalmomi 200, kanun labari mai fara'a", "Labari ɗaya, lamba ɗaya ta gaskiya", "Ku ƙare da yadda ake taimakawa"] },
            { title: "Kafin aikawa", bullets: ["Ku duba gaskiya da maganganun da aka ambato", "Maganganu na gaske kawai, da yarjejeniya", "Ku sa hanyar haɗi ta daina karɓa (unsubscribe)"] }
          ],
          tryIt: "Ku rubuta layuka biyar na bayanai game da wani lokaci na kwanan nan a shirinku. Ku yi amfani da AI don mayar da su labarin wasiƙar labarai mai kalmomi 200. Ku duba kowace gaskiya.",
          youCanNow: "mayar da bayanan shiri zuwa labarin wasiƙar labarai da aka duba.",
          quickCheck: [
            { objective: "O3", q: "Labarai nawa gajeren rubutun wasiƙar labarai zai bayar?", options: ["Ɗaya", "Biyar", "Babu", "Duk wanda ya isa"], answer: 0, why: "Gajeren rubutu yana ba da labari ɗaya." },
            { objective: "O3", q: "Daftarin AI na wasiƙar labarai ya ƙara maganar wani mai aikin sa kai da bai taɓa faɗa ba. Me za ku yi?", options: ["Ku bar ta; tana da daɗi", "Ku cire ta, ko ku nemi mai aikin sa kan ya ba ku magana ta gaskiya da ya yarda da ita", "Ku canja sunan mai aikin sa kan", "Ku mayar da ita ƙarshe"], answer: 1, why: "Ku ƙara maganar da aka ambato kawai idan mutum na gaske ya faɗe ta kuma ya yarda a ambace shi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Saƙo da hanyoyin isarwa",
        questions: [
          { objective: "O1", q: "Mene ne babban saƙo?", options: ["Jimla ɗaya ko biyu da kuke so masu sauraro su tuna kuma su yi aiki da su", "Cikakken rahotonku na shekara", "Kalmar sirri", "Jerin masu ba da gudummawa"], answer: 0, why: "Babban saƙo gajere ne kuma yana kai ga ɗaukar mataki." },
          { objective: "O1", q: "Wane ne mafi kyawun babban saƙo ga iyaye?", options: ["\"Muna yin abubuwa da yawa.\"", "\"Koyarwa kyauta za ta fara ranar 8 ga Satumba a cibiyar al'umma. Ku yi rajista kafin 1 ga Satumba.\"", "\"Ku ƙara koyo.\"", "\"Ku tallafa mana.\""], answer: 1, why: "Yana faɗin mene ne, dalili, da abin da za a yi a gaba." },
          { objective: "O2", q: "Kuna son saka hoton yara a shirinku. Kuna buƙatar:", options: ["Babu komai", "Matatar hoto (filter)", "Izini a rubuce daga mahaifi ko mai kula da su", "Rubutun hoto daga AI"], answer: 2, why: "Hotunan yara suna buƙatar izini." },
          { objective: "O3", q: "Maganar da aka ambato a labarin wasiƙar labarai ya kamata ta fito daga:", options: ["AI", "Mai aikin sa kai na ƙage", "Shahararren mutum da ba ku taɓa magana da shi ba", "Mutum na gaske da ya yarda a ambace shi"], answer: 3, why: "Maganganun ƙage rashin gaskiya ne." },
          { objective: "O3", q: "Me yasa za a sa hanyar haɗi ta daina karɓa a wasiƙun labarai ta imel?", options: ["Don mutane su iya daina karɓar imel", "Don samun ƙarin gudummawa", "Ado ne kawai", "Don raba bayanai"], answer: 0, why: "Ya kamata mutane su iya fita idan suna so." }
        ]
      }
    },
    {
      name: "Babi na 2: Isa ga kowa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kalmomi masu sauƙi da sauran harsuna",
          minutes: 5,
          goal: "Yi amfani da AI don sake rubuta isar da saƙo da kalmomi masu sauƙi da rubuta daftarin fassara don a duba.",
          text: [
            "Mutane da yawa a al'ummarku suna karatu a harshe na biyu, suna karatu a matakin farko, ko suna da aiki da yawa don haka suna karantawa da sauri. Kalmomi masu sauƙi suna taimakon kowa: gajerun jimloli, kalmomin da aka saba, da abu mafi muhimmanci a farko.",
            "Ku tambaya: \"Ka sake rubuta wannan a matakin karatu na aji 6. Gajerun jimloli. Ka sa kwanan wata, wuri da yadda ake rajista a farko.\" Sannan: \"Ka fassara wannan zuwa Sifaniyanci don iyalai a al'ummarmu.\"",
            "Fassarar AI tana iya yin kuskure ko ta yi sauti mai ban mamaki. Koyaushe ku sa mai iya harshen sosai daga al'ummarku ya duba fassara kafin ku raba ta."
          ],
          steps: ["Ku nemi AI ya sake rubuta rubutunku a matakin karatu na aji 6.", "Ku sa kwanan wata, wuri da mataki a farko.", "Ku nemi fassara zuwa harshen da al'ummarku ke amfani da shi.", "Ku sa mai iya harshen sosai ya duba ta."],
          words: [["Kalmomi masu sauƙi (plain language)", "rubutun da mutane za su fahimta tun karo na farko da suka karanta."], ["Matakin karatu (reading level)", "yadda rubutu yake da sauƙin karantawa; ƙaramin aji ya fi sauƙi."]],
          slides: [
            { title: "Kalmomi masu sauƙi suna taimakon kowa", bullets: ["Gajerun jimloli, kalmomin da aka saba", "Abu mafi muhimmanci a farko"] },
            { title: "Ku tambayi AI", bullets: ["\"Ka sake rubutawa a matakin karatu na aji 6\"", "\"Ka fassara wannan zuwa Sifaniyanci\""] },
            { title: "Ku duba fassara", bullets: ["AI yana iya yin kuskure a cikinsu", "Ɗan al'umma mai iya harshen sosai yana dubawa"] }
          ],
          tryIt: "Ku ɗauki babban saƙonku da saƙo ɗaya. Ku nemi AI ya sake rubuta su da kalmomi masu sauƙi kuma ya fassara su zuwa harshen da al'ummarku ke amfani da shi. Ku rubuta wanda zai iya duba fassarar.",
          youCanNow: "sa isar da saƙo ya zama mai sauƙi da rubuta daftarin fassara don mai iya harshen sosai ya duba.",
          quickCheck: [
            { objective: "O4", q: "Wanne ne sashe na kalmomi masu sauƙi?", options: ["Dogayen jimloli", "Kalmomin fasaha", "Gajerun jimloli da kalmomin da aka saba", "Abu mafi muhimmanci a ƙarshe"], answer: 2, why: "Kalmomi masu sauƙi suna amfani da gajerun jimloli, kalmomin da aka saba, da abu mafi muhimmanci a farko." },
            { objective: "O4", q: "AI ya fassara takardar sanarwarku zuwa harshen Vietnam, kuma babu ma'aikacin da ke iya harshen. Me za ku yi?", options: ["Ku raba ta duk da haka", "Ku nemi AI ya duba fassararsa da kansa", "Ku yi amfani da Turanci kawai", "Ku nemo mai iya harshen sosai daga al'ummarku ya fara duba ta"], answer: 3, why: "Fassarar AI tana iya yin kuskure, don haka mai iya harshen sosai daga al'umma yana duba ta kafin a raba ta." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Sa isar da saƙo ya zama mai sauƙin amfani ga kowa",
          minutes: 4,
          goal: "Rubuta bayanin hotuna da sa saƙonni da takardun sanarwa su zama masu sauƙin amfani ga kowa.",
          text: [
            "Isar da saƙo mai sauƙin amfani ga kowa yana aiki ga makafi ko masu raunin gani, kurame, ko masu amfani da mai karanta allo (screen reader). Alt text gajeren bayanin hoto ne da mai karanta allo ke karantawa da babbar murya.",
            "AI zai iya rubuta daftarin alt text: \"Ka rubuta alt text ƙasa da haruffa 125 don hoton masu aikin sa kai suna rarraba gwangwani a taron tara abinci.\" Ku duba cewa yana bayyana abin da ke cikin hoton da gaske.",
            "Wasu sauƙaƙan nasarori: ku sa rubutun ƙasa (captions) a bidiyo, ku yi amfani da bambancin launi mai ƙarfi a takardun sanarwa, kada ku sa muhimman kalmomi a cikin hoto kawai, kuma ku rubuta hashtag da manyan haruffa (#FeedOurCity) don masu karanta allo su faɗe su daidai."
          ],
          steps: ["Ku rubuta alt text don kowane hoto (AI zai iya rubuta daftari).", "Ku ƙara rubutun ƙasa (captions) a bidiyo.", "Ku yi amfani da bambancin launi mai ƙarfi a takardun sanarwa.", "Ku bar muhimman bayanai a cikin rubutu, ba a cikin hoto kawai ba.", "Ku fara kowace kalma a hashtag da babban harafi."],
          words: [["Alt text", "gajeren bayanin hoto a rubuce, wanda masu karanta allo ke karantawa da babbar murya."], ["Mai karanta allo (screen reader)", "shirin kwamfuta da ke karanta rubutun allo da babbar murya don makafi ko masu raunin gani."], ["Bambancin launi (contrast)", "yadda launin rubutu ya bambanta da launin bayansa."]],
          slides: [
            { title: "Isar da saƙo mai sauƙin amfani ga kowa", bullets: ["Yana aiki ga makafi, masu raunin gani ko kurame", "Alt text yana bayyana hotuna"] },
            { title: "AI yana rubuta daftarin alt text", bullets: ["Ƙasa da haruffa 125", "Ku duba ya yi daidai da hoton"] },
            { title: "Sauƙaƙan nasarori", bullets: ["Rubutun ƙasa (captions) a bidiyo", "Bambancin launi mai ƙarfi", "Muhimman bayanai a rubutu, ba a hoto kawai ba", "#CapitalizeHashtags"] }
          ],
          tryIt: "Ku rubuta alt text don hotunan saƙonninku huɗu: AI ya rubuta daftari, ku kuma ku duba. Ku gyara duk wani hashtag don kowace kalma ta fara da babban harafi.",
          youCanNow: "sa saƙonni da takardun sanarwa su zama masu sauƙin amfani ga kowa da alt text, rubutun ƙasa da tsari mai sarari.",
          quickCheck: [
            { objective: "O5", q: "Wa alt text yake taimakawa?", options: ["Masu amfani da mai karanta allo", "Injunan bincike kawai", "Ma'aikata kawai", "Masu intanet mai sauri"], answer: 0, why: "Mai karanta allo yana karanta alt text da babbar murya don makafi ko masu raunin gani." },
            { objective: "O5", q: "Takardar sanarwarku tana da kwanan wata da wuri a cikin hoto kawai. Me za ku canja?", options: ["Babu komai", "Ku sa muhimman bayanan a cikin rubutu ma", "Ku ƙara girman hoton", "Ku ƙara hotuna"], answer: 1, why: "Masu karanta allo ba za su iya karanta kalmomin da ke cikin hoto ba." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Tsara isar da saƙo na wata ɗaya",
          minutes: 5,
          goal: "Sa sassan isar da saƙonku a kan kalanda ta makonni huɗu.",
          text: [
            "Sauƙaƙƙiyar kalanda tana sa isar da saƙo ya ci gaba ba tare da tsayawa ba. Ku jera makonni huɗu. Ga kowane mako, ku rubuta abin da za a fitar, ta wace hanya, da wanda zai saka shi.",
            "AI zai iya ba da shawarar jadawali: \"Ga sassana: [jeri]. Taronmu yana ranar [kwanan wata]. Ka yi kalandar isar da saƙo ta makonni huɗu a matsayin tebur: mako, hanya, sashe, wanda zai saka.\" Ku duba ranakun da ainihin kalandarku.",
            "Bayan haka, ku duba abin da ya yi aiki: rajista, sharhi, rabawa, amsoshi. Ku ci gaba da yin abin da ya kawo mutane."
          ],
          steps: ["Ku jera sassanku: saƙonni, wasiƙar labarai, takardar sanarwa.", "Ku nemi AI ya yi teburin kalanda na makonni huɗu.", "Ku duba ranakun da ainihin kalandarku.", "Ku sanya wanda zai saka kowane sashe.", "Bayan watan, ku rubuta abin da ya kawo mutane."],
          words: [["Kalandar abubuwan da za a saka (content calendar)", "jadawalin abin da za ku saka ko ku aika, da lokacin."], ["Hanya (channel)", "hanyar da kuke isa ga mutane: kafofin sada zumunta, imel, takardun sanarwa, sanarwa."]],
          slides: [
            { title: "Sauƙaƙƙiyar kalanda", bullets: ["Makonni huɗu", "Abin da za a fitar, a ina, da wanda zai saka"] },
            { title: "Ku nemi AI ya yi tebur", bullets: ["Mako, hanya, sashe, wanda zai saka", "Ku duba ranakun da kanku"] },
            { title: "Ku koya daga sakamako", bullets: ["Rajista, sharhi, rabawa", "Ku riƙe abin da ya kawo mutane"] }
          ],
          tryIt: "Aikin ƙarshe: ku kammala tsarin isar da saƙonku na wata ɗaya. Ku sa babban saƙonku, saƙonni huɗu tare da alt text, labarin wasiƙar labarai da rubutun takardar sanarwa mai kalmomi masu sauƙi a kan kalanda ta makonni huɗu.",
          youCanNow: "tsarawa da rubuta daftarin isar da saƙo na wata ɗaya don ƙungiya mai zaman kanta da AI.",
          quickCheck: [
            { objective: "O6", q: "Me za ku duba bayan wata ɗaya na isar da saƙo?", options: ["Yawan saƙonnin da kuka saka kawai", "Launin takardun sanarwa", "Rajista, sharhi, rabawa da amsoshi", "Saƙonnin wasu ƙungiyoyi"], answer: 2, why: "Ku duba abin da ya yi aiki: rajista, sharhi, rabawa da amsoshi." },
            { objective: "O6", q: "Kalandar AI ta sa tunatarwar dama ta ƙarshe bayan ranar taronku. Me za ku yi?", options: ["Ku yi amfani da ita yadda take", "Ku goge tunatarwar", "Ku saka ta sau biyu", "Ku mayar da ita kafin taron, kuna duba ranakun da ainihin kalandarku"], answer: 3, why: "Ku duba ranakun AI da ainihin kalandarku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Isa ga kowa",
        questions: [
          { objective: "O4", q: "Mene ne kalmomi masu sauƙi?", options: ["Rubutu ba tare da alamomin rubutu ba", "Rubutun da mutane ke fahimta tun karo na farko", "Dogayen jimloli sosai", "Kalmomin fasaha kawai"], answer: 1, why: "Kalmomi masu sauƙi suna da sarari tun karatun farko." },
          { objective: "O4", q: "AI ya fassara takardar sanarwarku zuwa Sifaniyanci. Kafin ku raba ta, ya kamata ku:", options: ["Raba ta nan take", "Sake fassara ta da AI", "Sa mai iya harshen sosai ya duba ta", "Gajarta ta"], answer: 2, why: "Fassarar AI tana iya yin kuskure." },
          { objective: "O5", q: "Mene ne alt text?", options: ["Kalmar sirri ta ajiya", "Saƙo na biyu", "Wani nau'in rubutun haruffa (font)", "Gajeren bayanin hoto da masu karanta allo ke karantawa"], answer: 3, why: "Alt text yana sa hotuna su zama masu sauƙin amfani ga kowa." },
          { objective: "O5", q: "Wane hashtag ne ya fi sauƙi ga mai karanta allo?", options: ["#FeedOurCity", "#feedourcity", "#FEEDOURCITY", "#f_o_c"], answer: 0, why: "Manyan haruffa suna taimakon masu karanta allo su faɗi kowace kalma." },
          { objective: "O6", q: "Mene ne kalandar abubuwan da za a saka?", options: ["Jerin ranakun hutu", "Jadawalin abin da kuke saka ko aikawa, da lokacin", "Jerin ranakun haihuwar masu ba da gudummawa", "Takardar haraji"], answer: 1, why: "Tana sa isar da saƙo ya ci gaba kuma ya kasance cikin tsari." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Tallatawa da Isar da Saƙo ga Al'umma",
    questions: [
      { objective: "O1", q: "Isar da saƙo mai kyau yana magana da:", options: ["Kowa da saƙo iri ɗaya", "Ba kowa musamman ba", "Rukunin masu sauraro ɗaya a lokaci ɗaya", "Kwamitin gudanarwa kawai"], answer: 2, why: "Rukunonin masu sauraro daban-daban suna damuwa da abubuwa daban-daban." },
      { objective: "O1", q: "Babban saƙo ya kamata ya faɗi:", options: ["Dukkan tarihinku", "Tambarinku (logo) kawai", "Kasafin kuɗinku", "Mene ne, dalilin da yasa yake da muhimmanci a gare su, da abin da za su yi a gaba"], answer: 3, why: "Waɗannan sassa suna kai ga ɗaukar mataki." },
      { objective: "O1", q: "Hanya mai kyau ta inganta saƙo da AI ita ce:", options: ["Neman gajeru iri uku da zaɓar mafi sarari", "Neman iri ɗaya mai tsawo sosai", "Neman ya zaɓi masu sauraronku", "Rashin gyarawa"], answer: 0, why: "Kwatanta iri-iri yana taimaka muku ku zaɓa." },
      { objective: "O2", q: "Saƙonnin kafofin sada zumunta sun fi aiki idan:", options: ["Dogaye ne kuma na gama-gari", "Gajeru ne, na gaske, kuma suna ƙarewa da mataki ɗaya", "Babu wani mataki a cikinsu", "Cike suke da kalmomin fasaha"], answer: 1, why: "Saƙonni gajeru kuma masu bayani suna samun amsa." },
      { objective: "O2", q: "Wanne ne ɗaya daga cikin nau'ikan saƙo huɗu a darasin?", options: ["Takardar biyan haraji", "Kwangilar shari'a", "Tunatarwar dama ta ƙarshe", "Sake saita kalmar sirri"], answer: 2, why: "Tunatarwa tana taimakon mutane su ɗauki mataki kafin lokaci ya ƙure." },
      { objective: "O2", q: "Mene ne rubutun hoto (caption)?", options: ["Hula", "Kyautar mai ba da gudummawa", "Adireshin shafin intanet", "Rubutun da ke tafiya tare da hoto ko bidiyo"], answer: 3, why: "Rubutun hoto yana bayyana hoton ko bidiyon." },
      { objective: "O2", q: "Kafin ku raba labarin wani da kuke yi wa hidima, kuna buƙatar:", options: ["Izininsa, kuma babu bayanan da ke nuna ko wane ne shi sai dai idan ya yarda", "Babu komai", "Bayanan bankinsa", "Wata shahararriyar magana"], answer: 0, why: "Labarai suna buƙatar izini da kiyaye sirri." },
      { objective: "O3", q: "Labarin wasiƙar labarai ya kamata ya ba da:", options: ["Kowane taro na shekara", "Labari ɗaya da lamba ɗaya ta gaskiya da yadda ake taimakawa", "Sunayen masu ba da gudummawa kawai", "Babu komai game da manufar ƙungiyar"], answer: 1, why: "Labari ɗaya mai mayar da hankali ya fi sauƙin karantawa." },
      { objective: "O3", q: "Me ya kamata ku duba a daftarin wasiƙar labarai da AI ya rubuta?", options: ["Launin kanun labari kawai", "Babu komai", "Kowace lamba, suna, kwanan wata da maganar da aka ambato", "Yawan kalmomi kawai"], answer: 2, why: "AI yana iya yin kuskure a gaskiyar bayanai." },
      { objective: "O3", q: "Hanyar haɗi ta daina karɓa (unsubscribe) tana bar mutane:", options: ["Su ba da gudummawa sau biyu", "Su yi aikin sa kai", "Su canja kalmar sirrinku", "Su daina karɓar imel ɗinku"], answer: 3, why: "Ya kamata mutane su iya fita idan suna so." },
      { objective: "O4", q: "Wane prompt ne yake sa rubutu ya fi sauƙin karantawa?", options: ["\"Ka sake rubutawa a matakin karatu na aji 6 da gajerun jimloli.\"", "\"Ka sa shi ya fi wuya.\"", "\"Ka ƙara kalmomin fasaha.\"", "\"Ka tsawaita shi.\""], answer: 0, why: "Ƙananan matakan karatu sun fi sauƙi." },
      { objective: "O4", q: "A kalmomi masu sauƙi, me ke zuwa a farko?", options: ["Dogon tarihi", "Abu mafi muhimmanci, kamar kwanan wata, wuri da mataki", "Godiya ga kwamitin gudanarwa", "Bayanan shari'a"], answer: 1, why: "Masu karatu masu aiki da yawa suna ganin muhimman bayanai a farko." },
      { objective: "O4", q: "Wa ya kamata ya duba fassarar AI?", options: ["AI kuma", "Babu kowa", "Mai iya harshen sosai daga al'ummarku", "Wani shafin intanet kawai"], answer: 2, why: "Masu iya harshe sosai suna gano kurakurai." },
      { objective: "O5", q: "Mai karanta allo (screen reader) shi ne:", options: ["Mutumin da ke karanta allo", "Talabijin", "Firinta", "Shirin kwamfuta da ke karanta rubutun allo da babbar murya"], answer: 3, why: "Yana taimakon makafi ko masu raunin gani." },
      { objective: "O5", q: "AI ya rubuta daftarin alt text don wani hoto. Ya kamata ku:", options: ["Duba cewa ya yi daidai da abin da ke cikin hoton da gaske", "Yi amfani da shi ba tare da dubawa ba", "Goge hoton", "Sa shi ya kai kalmomi 500"], answer: 0, why: "AI yana iya bayyana hotuna ba daidai ba." },
      { objective: "O5", q: "Wace sauƙaƙƙiyar nasara ce ta sa bidiyo ya zama mai sauƙin amfani ga kowa?", options: ["Kashe sauti", "Ƙara rubutun ƙasa (captions)", "Tsawaita shi", "Amfani da ƙananan haruffa sosai"], answer: 1, why: "Rubutun ƙasa yana taimakon kurame ko masu kallo ba tare da sauti ba." },
      { objective: "O5", q: "Me yasa za a guji sa muhimman bayanai a cikin hoto kawai?", options: ["Hotuna haramun ne", "Ya fi tsada", "Masu karanta allo ba za su iya karanta kalmomin da ke cikin hoto ba", "Masu ba da gudummawa ba sa son hotuna"], answer: 2, why: "Rubutu a cikin saƙon yana isa ga kowa." },
      { objective: "O6", q: "Teburin kalandar abubuwan da za a saka ya kamata ya haɗa da:", options: ["Launuka kawai", "Yawan kuɗin gudummawa", "Kalmomin sirri", "Mako, hanya, sashe da wanda zai saka"], answer: 3, why: "Wannan yana sa isar da saƙo ya kasance cikin tsari." },
      { objective: "O6", q: "AI ya yi kalandar isar da saƙonku. Kafin ku yi amfani da ita:", options: ["Ku duba ranakunta da ainihin kalandarku", "Ku saka komai yau", "Ku amince da kowace rana", "Ku goge ta"], answer: 0, why: "AI yana iya yin kuskure a ranaku." },
      { objective: "O6", q: "Bayan wata ɗaya na isar da saƙo, ya kamata ku:", options: ["Kada ku taɓa duba sakamako", "Rubuta abin da ya kawo mutane ku ci gaba da yinsa", "Goge dukkan saƙonni", "Dakatar da dukkan isar da saƙo"], answer: 1, why: "Sakamako yana nuna abin da ke aiki." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      3,
      7,
      10,
      14,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Masu sauraro da babban saƙo",
        objective: "O1",
        notYet: "Babu rukunin masu sauraro ɗaya, ko saƙon ba shi da mataki na gaba.",
        meets: "Rukunin masu sauraro ɗaya da saƙo mai jimla ɗaya ko biyu da ke faɗin mene ne, dalili, da abin da za a yi a gaba.",
        exceeds: "Mai koyo ya gwada iri uku kuma zai iya faɗin dalilin da yasa ya zaɓi wannan."
      },
      {
        name: "Saƙonni huɗu na kafofin sada zumunta",
        objective: "O2",
        notYet: "Saƙonni ƙasa da huɗu, ko hoto ko labari ba tare da izini ba.",
        meets: "Gajerun saƙonni huɗu na nau'ikan huɗu, kowanne yana ƙarewa da mataki ɗaya, da izini don dukkan hotuna da labarai.",
        exceeds: "Kowane saƙo ya dace da tsayin kafarsa."
      },
      {
        name: "Labarin wasiƙar labarai",
        objective: "O3",
        notYet: "Ba a duba wata lamba, suna, kwanan wata ko maganar da aka ambato ba.",
        meets: "Kusan kalmomi 200, labari ɗaya, lamba ɗaya ta gaskiya da yadda ake taimakawa, duk an duba su.",
        exceeds: "Yana da magana ta gaske da mutumin ya yarda a ambace shi."
      },
      {
        name: "Mai sauƙi kuma mai sauƙin amfani ga kowa",
        objective: "O5",
        notYet: "Takardar sanarwar tana da wuyar karantawa, ko hotuna ba su da alt text.",
        meets: "Takardar sanarwa da kalmomi masu sauƙi, muhimman bayanai a farko, da alt text ga kowane hoto da ya yi daidai da hoton.",
        exceeds: "Tana kuma da fassara da mai iya harshen sosai ya duba, da hashtag masu sauƙin karantawa."
      },
      {
        name: "Kalanda ta makonni huɗu",
        objective: "O6",
        notYet: "Babu kalanda, ko ranakun ba su yi daidai da ainihin kalanda ba.",
        meets: "Tebur na makonni huɗu mai mako, hanya, sashe da wanda zai saka, an duba ranakun.",
        exceeds: "Yana rubuta yadda za a bi diddigin sakamako bayan watan."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Ƙungiyoyin da suka yi isar da saƙo na wata ɗaya da aka tsara cikin kwanaki 60 (binciken biyo baya)",
      "Rajistar shirye-shirye ko halartar taro da aka bayar da rahoto kafin da bayan watan isar da saƙo",
      "Ƙungiyoyin da suka ƙara alt text da fassara a isar da saƙonsu"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Mataimakin AI kyauta",
      "Bayanan da ake iya bayyanawa na wani shiri ko taro na gaske, da hotunan da kuke da izinin amfani da su",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku sa masu koyo su zaɓi wani shiri ko taro na gaske mai zuwa kafin zaman.",
      "Ku tunatar da masu koyo game da izini a rubuce don hotunan yara da waɗanda ake yi wa hidima.",
      "Ku gayyaci wani ɗan al'umma mai iya harshe sosai don ya duba duk wata fassara da aka yi a zaman.",
      "Ku gwada mai karanta allo a waya tare don masu koyo su ji dalilin da yasa alt text da hashtag suke da muhimmanci.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

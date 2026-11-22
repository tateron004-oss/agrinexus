"use strict";

// Koach Learn course, Hausa (ha) translation of non-profits/nonprofit-ai-strategy.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "nonprofit-ai-strategy-ha",
  lang: "ha",
  translationOf: "nonprofit-ai-strategy",
  category: "Non Profits",
  name: "Gina Tsarin AI ga Ƙungiyarku Mai Zaman Kanta",
  skills: "Nemo ayyukan da suka dace da AI, Jera ra'ayoyi bisa amfani da haɗari, Rubuta dokokin amfani da AI, Shirya ƙaramin gwaji, Auna sakamako da kai rahoto ga kwamitin gudanarwa",
  outcome: "rubuta tsarin AI na shafi ɗaya ga ƙungiyarku mai zaman kanta wanda ke faɗin ayyuka uku da AI zai taimaka da su, dokokin da ma'aikata da masu aikin sa-kai za su bi, gwajin kwanaki 30 mai mutum ɗaya mai kula da shi, da yadda za ku auna ko ya yi aiki.",
  about: [
    "Wannan kwas ɗin na shugabannin ƙungiyoyi ne, fastoci da limamai, mambobin kwamitin gudanarwa, manajojin shirye-shirye da shugabannin masu aikin sa-kai da ke son amfani da AI da gangan, ba kawai haka kawai ba.",
    "Za ku duba inda lokacin ƙungiyarku yake tafiya, ku zaɓi ayyukan da AI ya fi taimakawa da ƙaramin haɗari, ku rubuta dokoki masu sauƙi da ke kare masu ba da gudummawa da mutanen da kuke yi wa hidima, sannan ku shirya ƙaramin gwaji da za ku kai rahotonsa ga kwamitin gudanarwa.",
    "Kowane darasi yana ɗaukar kusan minti biyar, kuma yana ƙarewa da aikin da ke gina sashe ɗaya na tsarinku. Zuwa Darasi na 6 za ku sami cikakken tsarin AI na shafi ɗaya. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku rubuta tsarin AI na shafi ɗaya ga ƙungiyarku mai sassa biyar: (1) manufarku a jimla ɗaya, (2) ayyuka uku da AI zai taimaka da su, an jera su bisa amfani da haɗari, (3) aƙalla dokoki biyar na amfani da AI, har da dokokin sirri, (4) gwajin kwanaki 30 mai mutum ɗaya mai kula da shi, kayan aiki ɗaya da ranar farawa, da (5) ma'auni biyu da za ku kai rahotonsu ga kwamitin gudanarwa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Shugabannin ƙungiyoyi, fastoci da limamai, mambobin kwamitin gudanarwa, manajojin shirye-shirye da shugabannin masu aikin sa-kai na ƙungiyoyi masu zaman kansu da na addini da ke son amfani da AI da gangan, ba kawai haka kawai ba.",
    startingPoint: "Suna jagorantar ƙungiyoyi kuma sun san manufarsu da shirye-shiryensu sosai. Wasu ma'aikata da masu aikin sa-kai sun riga sun fara amfani da kayan AI da kansu, amma ƙungiyar ba ta da tsari ko dokoki na bai ɗaya.",
    gap: "Ba tare da tsari ba, amfani da AI yana warwatse: yana iya jefa bayanan masu ba da gudummawa ko na mutanen da ake yi wa hidima cikin haɗari, ko ya bar ayyukan da zai fi taimakawa manufar. Shugabanni suna buƙatar tsari na shafi ɗaya da ke zaɓar ayyukan da suka dace, ya kafa dokoki, ya yi gwaji lafiya, kuma ya kai rahoton sakamako ga kwamitin gudanarwa.",
    constraints: [
      "Ƙananan kasafin kuɗi: a fi son AI da ke cikin kayan aikin da ƙungiyar take da su",
      "Shugabanni ba su da lokaci sosai, don haka kowane darasi kusan minti 5 ne",
      "Sirri: bayanan masu ba da gudummawa, masu aikin sa-kai da mutanen da ake yi wa hidima ba sa shiga AI; ƙarin dokoki na iya shafar bayanan lafiya, na yara ko na shari'a",
      "AI ba ya taɓa yanke shawarar wanda zai sami hidima, wanda za a ɗauka aiki ko wanda za a ƙi",
      "Amincewa da sa idon kwamitin gudanarwa"
    ],
    prerequisites: "Kwas ɗin \"Gabatarwa ga AI don Ƙungiyoyin Sa-kai\", ko ɗan ƙwarewa wajen amfani da mataimakin AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da manufar ƙungiyarku", action: "bayyana wa kwamitin gudanarwa ko shugabanni dalilin da yasa ƙungiyarku take buƙatar tsarin AI mai sauƙi", standard: "farawa daga manufa, ba daga kayan aiki ba" },
    { id: "O2", condition: "Bayan kun tambayi ma'aikata da masu aikin sa-kai abin da ke cinye makonsu", action: "jera ayyukanku masu maimaituwa da gane waɗanda AI zai iya taimakawa da su da waɗanda za su zauna a hannun mutane", standard: "kuna barin kowace shawara game da mutane a hannun mutane" },
    { id: "O3", condition: "Idan kuna da jerin ayyukan da suka dace da AI", action: "ba kowane aiki maki daga 1 zuwa 3 don amfani da haɗari, da zaɓar guda uku na farko", standard: "kuna sa ayyuka masu babban amfani da ƙaramin haɗari a gaba" },
    { id: "O4", condition: "Don ma'aikatanku da masu aikin sa-kai", action: "rubuta aƙalla dokoki biyar masu sarari na amfani da AI, har da dokokin sirri", standard: "gajeru har su dace a shafi ɗaya, kuma masu sauƙi ga sabon mai aikin sa-kai" },
    { id: "O5", condition: "Idan kuna da ɗaya daga cikin ayyukanku uku na farko", action: "shirya gwajin kwanaki 30 mai kayan aiki ɗaya, mutum ɗaya mai kula da shi, ranar farawa da ma'aunin farko (baseline)", standard: "an auna ma'aunin farko kafin ku fara" },
    { id: "O6", condition: "A ƙarshen gwajin", action: "kwatanta ma'auni biyu da ma'aunin farko da rubuta rahoto na jimloli biyar ga kwamitin gudanarwa", standard: "da shawara a sarari: a ci gaba, a canja, ko a daina" }
  ],
  chapters: [
    {
      name: "Babi na 1: Zaɓar inda AI yake taimakawa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Dalilin da yasa ƙungiya mai zaman kanta take buƙatar tsarin AI",
          minutes: 4,
          goal: "Bayyana wa kwamitin gudanarwa ko shugabanni dalilin da yasa ƙungiyarku take buƙatar tsarin AI mai sauƙi.",
          text: [
            "Wataƙila ma'aikatanku da masu aikin sa-kai sun riga sun fara amfani da kayan AI da kansu, ba tare da dokoki na bai ɗaya ba. Hakan na iya ajiye lokaci, amma kuma yana iya jefa bayanan masu ba da gudummawa ko na mutanen da kuke yi wa hidima cikin haɗari, ko ya kawo rubutun da bai yi kama da ku ba.",
            "Tsarin AI gajeriyar takarda ce da ke faɗin abin da AI yake yi a ƙungiyarku, abin da ba ya yi, wane ne yake yanke shawara, da yadda za ku duba cewa yana taimakawa manufarku.",
            "Tsari mai kyau yana farawa daga manufa, ba daga kayan aiki ba. Tambayar ba \"Wane AI za mu saya?\" ba ce, sai dai \"A ina ƙungiyarmu take ɓata lokacin da zai iya komawa ga mutanen da muke yi wa hidima?\""
          ],
          words: [["Tsarin AI (AI plan)", "gajeriyar takarda da ke faɗin yadda ƙungiyarku za ta yi amfani da AI da yadda ba za ta yi ba."], ["Manufa (mission)", "dalilin da yasa ƙungiyarku take nan, abin da take yi wa hidima."], ["Masu ruwa da tsaki (stakeholders)", "duk wanda aikinku ya shafa: mutanen da ake yi wa hidima, masu ba da gudummawa, masu aikin sa-kai, ma'aikata, kwamitin gudanarwa."]],
          slides: [
            { title: "Me yasa za a yi tsari?", bullets: ["Wataƙila mutane suna amfani da AI babu dokoki", "Sirri da amana suna cikin haɗari", "Tsari yana mayar da amfani mai warwatse zuwa taimako na gaske"] },
            { title: "Tsarin AI yana faɗin", bullets: ["Abin da AI yake yi, da abin da ba ya yi", "Wane ne yake yanke shawara", "Yadda za ku duba cewa yana taimakawa"] },
            { title: "Ku fara daga manufa", bullets: ["Ba \"Wane kayan aiki?\" ba", "Sai dai \"A ina muke ɓata lokaci?\"", "Ku mayar da lokacin ga mutanen da kuke yi wa hidima"] }
          ],
          tryIt: "Ku rubuta manufarku a jimla ɗaya a saman takarda marar rubutu mai taken \"Tsarinmu na AI\". A ƙarƙashinta, ku rubuta jimla ɗaya kan dalilin da yasa ƙungiyarku take buƙatar tsari yanzu.",
          youCanNow: "bayyana dalilin da yasa ƙungiya mai zaman kanta take buƙatar tsarin AI, da fara tsarin daga manufarku.",
          quickCheck: [
            { objective: "O1", q: "Me tsarin AI yake faɗi?", options: ["Abin da AI yake yi, abin da ba ya yi, wane ne yake yanke shawara da yadda za ku duba cewa yana taimakawa", "Wane kamfanin AI za a zuba jari a ciki", "Kalmar sirrin kowane ma'aikaci", "Farashin kayan AI kawai"], answer: 0, why: "Tsari yana faɗin abin da AI yake yi da wanda ba ya yi, wane ne yake yanke shawara da yadda za a duba cewa yana taimakawa manufa." },
            { objective: "O1", q: "Wani mamban kwamitin gudanarwa ya tambaya: \"Wane AI za mu saya?\" Me za ku amsa?", options: ["A sayi wanda ya fi shahara", "Mu fara da tambayar a ina ƙungiyarmu take ɓata lokacin da zai iya komawa ga mutanen da muke yi wa hidima", "A sayi kowane kayan aiki a gani", "A jira har sauran ƙungiyoyi su yanke shawara"], answer: 1, why: "Tsari mai kyau yana farawa daga manufa, ba daga kayan aiki ba." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Duba inda lokacin ƙungiyarku yake tafiya",
          minutes: 5,
          goal: "Jera ayyukan ƙungiyarku masu maimaituwa da gane waɗanda AI zai iya taimakawa da su.",
          text: [
            "AI ya fi taimakawa da ayyukan da ke maimaituwa, masu rubutu ko tsarawa da yawa, kuma masu bin tsari ɗaya. Misalai: tunatarwar mako-mako ga masu aikin sa-kai, wasiƙun godiya ga masu ba da gudummawa, daftarin labarai (newsletter), bayanan taro, taƙaitattun rahotannin tallafi (grant), da amsa tambayoyi iri ɗaya daga jama'a.",
            "Kada AI ya yanke shawara game da mutane: wanda zai sami hidima, wanda za a ɗauka aiki, ko wanda za a ƙi. Waɗannan suna buƙatar hukuncin ɗan adam, adalci da kulawa.",
            "Ku tambayi mutane uku ko huɗu a ƙungiyarku, har da mai aikin sa-kai ɗaya, waɗanne ayyuka ne ke cinye makonsu. Za ku yi mamakin abin da za ku koya."
          ],
          steps: ["Ku jera ayyuka goma da ƙungiyarku take yi kowane mako ko kowane wata.", "Kusa da kowanne, ku rubuta kusan awoyi nawa yake ɗauka.", "Ku yi alama ga ayyukan da ke maimaituwa kuma masu rubutu, tsarawa ko taƙaitawa.", "Ku goge ayyukan da ke yanke wani abu game da mutum."],
          words: [["Aiki mai maimaituwa", "aikin da ake yi ta hanya ɗaya akai-akai, kamar tunatarwar mako-mako."], ["Hukuncin ɗan adam", "shawarar da mutum yake yankewa da kulawa, adalci da sanin halin da ake ciki."]],
          slides: [
            { title: "Ayyuka masu kyau don AI", bullets: ["Suna maimaituwa akai-akai", "Rubutu, tsarawa ko taƙaitawa da yawa", "Suna bin tsari ɗaya"] },
            { title: "Misalai a ƙungiyoyi masu zaman kansu", bullets: ["Tunatarwa ga masu sa-kai da godiya ga masu gudummawa", "Daftarin labarai da bayanan taro", "Amsoshin tambayoyin jama'a da aka saba yi"] },
            { title: "A bar wa mutane", bullets: ["Wanda zai sami hidima", "Wanda za a ɗauka aiki ko a ƙi", "Duk abin da ke buƙatar kulawa da adalci"] }
          ],
          tryIt: "Ku yi jerin ayyuka goma da awoyinsu don ƙungiyarku. Ku yi alama ga waɗanda suka dace da AI, ku goge duk wanda ke yanke shawara game da mutane.",
          youCanNow: "duba ayyukan ƙungiyarku masu maimaituwa da zaɓar ayyukan da suka dace da AI.",
          quickCheck: [
            { objective: "O2", q: "Wane irin aiki ne AI ya fi taimakawa da shi?", options: ["Shawarar wanda zai sami hidima", "Zaɓin wanda za a ɗauka aiki", "Ayyukan da ke maimaituwa, masu rubutu ko tsarawa, kuma masu bin tsari ɗaya", "Hirar kula da mabiya ta addini"], answer: 2, why: "AI ya fi taimakawa da ayyukan rubutu da tsarawa masu maimaituwa da bin tsari ɗaya." },
            { objective: "O2", q: "Wani ya ba da shawarar a yi amfani da AI don zaɓar iyalan da za su shiga shirin abinci. Me za ku ce?", options: ["Eh, ya fi sauri", "Eh, idan AI ya bayyana dalilinsa", "Sai don sababbin iyalai kawai", "A'a; shawara game da mutane tana buƙatar hukuncin ɗan adam"], answer: 3, why: "Kada AI ya yanke shawarar wanda zai sami hidima." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Jera ra'ayoyi bisa amfani da haɗari",
          minutes: 5,
          goal: "Jera ra'ayoyinku na AI ku zaɓi guda uku na farko da za ku fara da su.",
          text: [
            "Don kowane aikin da ya dace da AI, ku yi tambayoyi biyu. Amfani: lokaci ko inganci nawa za mu samu? Haɗari: me zai iya lalacewa, kuma yaya muninsa zai kasance?",
            "Ayyuka masu ƙaramin haɗari da babban amfani suna zuwa farko, misali rubuta daftarin tunatarwa ga masu aikin sa-kai daga bayanan taron jama'a. Ayyuka masu babban haɗari, kamar duk abin da ke da bayanan shari'ar mutum (case notes) ko bayanan lafiya, su jira har ku sami dokoki masu ƙarfi da kayan aiki amintacce da aka amince da shi, ko kuma kada su shiga jerin kwata-kwata.",
            "Ku ba kowanne maki daga 1 (ƙasa) zuwa 3 (sama). Ku fara da babban amfani da ƙaramin haɗari. Ayyuka uku masu kyau sun fi ayyuka goma da aka yi rabi."
          ],
          steps: ["Ku ba kowane aiki makin amfani daga 1 zuwa 3.", "Ku ba kowane aiki makin haɗari daga 1 zuwa 3.", "Ku jera: babban amfani da ƙaramin haɗari a farko.", "Ku zaɓi guda uku na farko."],
          words: [["Amfani (value)", "lokaci, kuɗi ko inganci nawa canji zai kawo."], ["Haɗari (risk)", "abin da zai iya lalacewa da yawan cutarwar da zai yi."]],
          slides: [
            { title: "Tambayoyi biyu ga kowane aiki", bullets: ["Amfani: me za mu samu?", "Haɗari: me zai iya lalacewa?"] },
            { title: "Maki daga 1 zuwa 3", bullets: ["Babban amfani + ƙaramin haɗari = ku fara nan", "Babban haɗari = ku jira dokoki ko ku bar shi"] },
            { title: "Misalai", bullets: ["Ƙaramin haɗari: tunatarwa ga masu sa-kai daga bayanan taron jama'a", "Babban haɗari: duk abin da ke da bayanan shari'ar mutum"] },
            { title: "Ku zaɓi uku", bullets: ["Uku da aka yi da kyau sun fi goma da aka yi rabi"] }
          ],
          tryIt: "Ku ba ayyukan da kuka yi wa alama maki don amfani da haɗari. Ku rubuta guda uku na farko a ƙarƙashin taken \"Inda AI zai taimaka\" a cikin tsarinku.",
          youCanNow: "jera ra'ayoyin AI bisa amfani da haɗari da zaɓar guda uku da za a fara da su.",
          quickCheck: [
            { objective: "O3", q: "A wannan darasi, wane ma'auni ne kuke amfani da shi don ba da makin amfani da haɗari?", options: ["1 (ƙasa) zuwa 3 (sama)", "1 zuwa 100", "Eh ko a'a kawai", "A zuwa F"], answer: 0, why: "Ku ba kowanne maki daga 1 (ƙasa) zuwa 3 (sama)." },
            { objective: "O3", q: "Kuna da ra'ayoyin AI guda goma. Me za ku yi?", options: ["Ku fara dukkan goma lokaci ɗaya", "Ku zaɓi kusan uku masu babban amfani da ƙaramin haɗari", "Ku zaɓi uku mafi haɗari", "Ku bar kowane ma'aikaci ya zaɓi ɗaya"], answer: 1, why: "Ayyuka uku masu kyau sun fi ayyuka goma da aka yi rabi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Zaɓar inda AI yake taimakawa",
        questions: [
          { objective: "O1", q: "Daga ina tsarin AI na ƙungiya mai zaman kanta ya kamata ya fara?", options: ["Daga manufa", "Daga sabon kayan aiki", "Daga farashi mafi arha", "Daga shafin intanet na wata ƙungiya"], answer: 0, why: "Tsari yana farawa daga manufa da inda lokaci zai iya komawa ga mutanen da kuke yi wa hidima." },
          { objective: "O2", q: "Wane aiki ne ya fi dacewa da AI?", options: ["Yanke shawarar wanda zai sami tallafin abinci", "Rubuta daftarin tunatarwar mako-mako ga masu aikin sa-kai", "Zaɓar ma'aikatan da za a ɗauka", "Ƙin wanda ya zo neman hidima"], answer: 1, why: "Ayyukan rubutu masu maimaituwa sun dace da AI; shawarwari game da mutane suna zama a hannun mutane." },
          { objective: "O3", q: "Wani aiki ya sami babban makin amfani da ƙaramin makin haɗari. Me za ku yi?", options: ["Ku bar shi", "Ku jira shekaru biyar", "Ku sa shi kusa da saman jerinku", "Ku ba kwamitin gudanarwa ya rubuta shi"], answer: 2, why: "Ayyuka masu babban amfani da ƙaramin haɗari suna zuwa farko." },
          { objective: "O3", q: "Wani aiki yana da bayanan lafiyar mutanen da kuke yi wa hidima. Yaya za ku jera shi?", options: ["Mafi ƙaramin haɗari", "Ku yi shi farko", "Ku saka shi a fili ga jama'a", "Babban haɗari: ku jira dokoki masu ƙarfi da kayan aiki amintacce, ko ku bar shi"], answer: 3, why: "Bayanan sirri na mutanen da ake yi wa hidima suna da babban haɗari." },
          { objective: "O2", q: "Me yasa za ku tambayi masu aikin sa-kai da ma'aikata abin da ke cinye makonsu?", options: ["Don nemo ayyuka masu maimaituwa na gaske", "Don ɗora laifi", "Don rage masu aikin sa-kai", "Doka ce ta tilasta"], answer: 0, why: "Mutanen da ke yin aikin sun san inda lokaci yake tafiya." }
        ]
      }
    },
    {
      name: "Babi na 2: Dokoki, gwaji da sakamako",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rubuta dokokin AI masu sauƙi",
          minutes: 5,
          goal: "Rubuta aƙalla dokoki biyar masu sarari kan yadda ma'aikatanku da masu aikin sa-kai za su yi amfani da AI.",
          text: [
            "Dokoki suna sa amfani da AI ya zama lafiya. Ku sa su gajeru har su dace a shafi ɗaya, kuma masu sauƙi har sabon mai aikin sa-kai zai iya bi.",
            "Muhimman dokokin da yawancin ƙungiyoyi masu zaman kansu ke buƙata: a yi amfani da kayan aikin da aka amince da su kaɗai; kada a taɓa saka bayanan sirri na masu ba da gudummawa, masu aikin sa-kai ko mutanen da ake yi wa hidima; mutum ya duba komai kafin a aika ko a wallafa; a tabbatar da kowane bayani da lamba; a faɗi gaskiya cewa AI ya taimaka inda hakan yake da muhimmanci; kuma AI ba ya taɓa yanke shawarar wanda zai sami hidima.",
            "Ƙungiyoyin addini na iya ƙara doka cewa wa'azi, addu'o'i da kula da mabiya su kasance na mutum da kansa. Ku tambayi lauya ko kamfanin inshorarku idan kuna kula da bayanan lafiya, na yara ko na shari'a, domin ƙarin dokoki na iya shafarsu."
          ],
          steps: ["Ku jera kayan AI da aka amince da su.", "Ku rubuta dokar sirri: abin da ba zai taɓa shiga AI ba.", "Ku rubuta dokar dubawa: wane ne zai duba kafin wani abu ya fita.", "Ku rubuta dokar shawarwari: AI ba ya taɓa yanke shawara game da mutane.", "Ku ƙara duk dokokin da manufarku take buƙata."],
          words: [["Dokokin amfani da AI (AI use policy)", "rubutattun dokoki kan yadda mutanen ƙungiyarku za su iya amfani da AI."], ["Kayan aiki da aka amince da shi", "kayan AI da shugabanninku suka duba kuma suka yarda a yi amfani da shi."]],
          slides: [
            { title: "Ku sa dokoki gajeru", bullets: ["Shafi ɗaya", "Masu sauƙi ga sabon mai aikin sa-kai"] },
            { title: "Muhimman dokoki", bullets: ["Kayan aikin da aka amince da su kaɗai", "Babu bayanan sirri na masu gudummawa ko mutanen da ake yi wa hidima", "Mutum ya duba kafin abu ya fita", "A tabbatar da kowane bayani da lamba"] },
            { title: "Ƙarin dokoki", bullets: ["AI ba ya taɓa yanke wanda zai sami hidima", "A faɗi gaskiya idan AI ya taimaka", "Ku ƙara dokokin da manufarku take buƙata"] },
            { title: "Ku nemi shawara", bullets: ["Bayanan lafiya, na yara ko na shari'a: ku tambayi lauya ko inshora"] }
          ],
          tryIt: "Ku rubuta aƙalla dokoki biyar a ƙarƙashin taken \"Dokokinmu na AI\" a cikin tsarinku. Ku karanta su ga mai aikin sa-kai ɗaya ku tambaye shi ko akwai abin da bai fito fili ba.",
          youCanNow: "rubuta dokokin amfani da AI masu sauƙi da ƙungiyarku za ta iya bi.",
          quickCheck: [
            { objective: "O4", q: "Yaya tsawon dokokinku na AI ya kamata ya kasance?", options: ["Aƙalla shafuka 20", "Ta baki kawai, ba a rubuta ba", "Gajeru har su dace a shafi ɗaya", "Tsawon kundin tsarin mulkin ƙungiyar"], answer: 2, why: "Ku sa dokoki gajeru har su dace a shafi ɗaya, kuma masu sauƙi ga sabon mai aikin sa-kai." },
            { objective: "O4", q: "Cocinku ko masallacinku yana son doka game da addu'o'i da wa'azi. Me za ta iya cewa?", options: ["AI yana rubuta dukkan wa'azi", "AI yana zaɓar wanda za a ziyarta don addu'a", "Babu komai; wuraren ibada ba sa buƙatar dokoki", "Wa'azi, addu'o'i da kula da mabiya suna zama na mutum da kansa"], answer: 3, why: "Ƙungiyoyin addini na iya ƙara doka cewa waɗannan su kasance na mutum da kansa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Shirya gwajin kwanaki 30",
          minutes: 5,
          goal: "Shirya ƙaramin gwajin AI na kwanaki 30 kan aiki ɗaya mai mutum ɗaya mai kula da shi.",
          text: [
            "Gwaji (pilot) ƙaramin gwaji ne kafin ku canja komai. Ku zaɓi ɗaya daga cikin ayyukanku uku na farko, kayan aiki ɗaya, mutum ɗaya mai kula, da kwanaki 30.",
            "Kafin ku fara, ku auna yadda abubuwa suke tafiya yau. Idan tunatarwa ga masu aikin sa-kai tana ɗaukar awa 3 a mako, ku rubuta haka. Wannan shi ne mafarinku, ko ma'aunin farko (baseline).",
            "Ku riƙe bayanai a lokacin gwajin: lokacin da aka kashe, matsaloli, da abin da mutane suka faɗa. Ku yi amfani da kayan aikin da ƙungiyarku take da shi idan zai yiwu, kamar AI da ke cikin Microsoft 365 ko Google Workspace, don kada ku ƙara kuɗi."
          ],
          steps: ["Ku zaɓi aiki ɗaya daga cikin ayyukanku uku na farko.", "Ku zaɓi kayan aiki ɗaya da aka amince da shi da mutum ɗaya mai kula.", "Ku rubuta ma'aunin farko: lokacin da aikin yake ɗauka yau.", "Ku sa ranar farawa da ranar ƙarewa bayan kwanaki 30.", "Ku riƙe gajerun bayanai kowane mako."],
          words: [["Gwaji (pilot)", "ƙaramin gwaji na ɗan lokaci kafin babban canji."], ["Ma'aunin farko (baseline)", "yadda wani abu yake tafiya yau, an auna shi kafin ku canja shi."], ["Mai kula (owner)", "mutum ɗaya da ke da alhakin gwajin."]],
          slides: [
            { title: "Gwaji ƙaramin gwaji ne", bullets: ["Aiki ɗaya, kayan aiki ɗaya, mai kula ɗaya", "Kwanaki 30"] },
            { title: "Ku auna farko", bullets: ["Ma'aunin farko: lokacin da yake ɗauka yau", "Misali: tunatarwa tana ɗaukar awa 3 a mako"] },
            { title: "A lokacin gwajin", bullets: ["Ku rubuta lokacin da aka kashe", "Ku rubuta matsaloli", "Ku rubuta abin da mutane suka faɗa"] }
          ],
          tryIt: "A ƙarƙashin \"Gwajinmu na kwanaki 30\", ku rubuta aikin, kayan aikin, mai kula, ranar farawa, ranar ƙarewa da ma'aunin farko.",
          youCanNow: "shirya gwajin AI na kwanaki 30 mai mai kula a sarari da ma'aunin farko.",
          quickCheck: [
            { objective: "O5", q: "Waɗanne bayanai za ku riƙe a lokacin gwaji?", options: ["Lokacin da aka kashe, matsaloli da abin da mutane suka faɗa", "Ranar farawa kawai", "Yawan kuɗin da masu gudummawa suka bayar", "Babu komai sai a ƙarshe"], answer: 0, why: "Ku riƙe bayanai kan lokacin da aka kashe, matsaloli da abin da mutane suka faɗa." },
            { objective: "O5", q: "Kuna son fara gwaji kan daftarin labarai (newsletter) mako mai zuwa. Me za ku fara yi?", options: ["Ku sayi sabon kayan AI", "Ku rubuta lokacin da labarai suke ɗauka yau", "Ku fara ba tare da faɗa wa kowa ba", "Ku shirya ayyuka biyar lokaci ɗaya"], answer: 1, why: "Ku fara auna yadda abubuwa suke tafiya yau; wannan shi ne ma'aunin farkonku." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Auna sakamako da kai rahoto ga kwamitin gudanarwa",
          minutes: 5,
          goal: "Zaɓi ma'auni biyu ku kai rahoton sakamakon gwaji a gajeren rahoto ga kwamitin gudanarwa.",
          text: [
            "Ku zaɓi ma'auni biyu: ɗaya don lokaci ko kuɗi (awoyin da aka ajiye a mako) da ɗaya don inganci (ƙarancin kurakurai, ƙarin masu aikin sa-kai da suka yi rajista, saurin amsa wa jama'a, ko abin da masu karatu suka faɗa).",
            "A ƙarshe, ku kwatanta da ma'aunin farkonku. Sannan ku yanke shawara: a ci gaba, a canja, ko a daina. Dainawa sakamako ne mai kyau; kun koyi wani abu ba tare da kashe kuɗi da yawa ba.",
            "Ku kai rahoto ga kwamitin gudanarwa a jimloli biyar: abin da kuka gwada, abin da ya canja, duk wata matsala, ko an bi dokoki, da abin da kuke ba da shawara a gaba. Kwamitin gudanarwa yana kula da manufa, kuɗi, haɗari da amana."
          ],
          steps: ["Ku zaɓi ma'aunin lokaci ɗaya da ma'aunin inganci ɗaya.", "Ku kwatanta ƙarshen gwajin da ma'aunin farkonku.", "Ku yanke shawara: a ci gaba, a canja ko a daina.", "Ku rubuta rahoto na jimloli biyar ga kwamitin gudanarwa."],
          words: [["Ma'auni (measure)", "lamba ko alamar da kuke bibiya don ganin ko wani abu ya yi aiki."], ["Kwamitin gudanarwa (board)", "rukunin mutanen da ke jagorantar ƙungiya mai zaman kanta da sa ido kan shugabanninta."]],
          slides: [
            { title: "Ma'auni biyu", bullets: ["Lokaci: awoyin da aka ajiye kowane mako", "Inganci: kurakurai, rajista, amsoshi, ra'ayoyi"] },
            { title: "Ku yanke shawara", bullets: ["A ci gaba", "A canja", "A daina: har yanzu sakamako ne mai amfani"] },
            { title: "Rahoto na jimloli biyar", bullets: ["Abin da muka gwada da abin da ya canja", "Matsaloli da ko an bi dokoki", "Abin da muke ba da shawara a gaba"] }
          ],
          tryIt: "Aikin ƙarshe: ku kammala tsarinku na AI na shafi ɗaya. Ku ƙara ma'auni biyu, sannan ku haɗa dukkan sassa biyar: manufa, ayyuka uku, dokoki, gwajin kwanaki 30 da ma'aunin da za ku kai rahotonsu ga kwamitin gudanarwa.",
          youCanNow: "rubuta cikakken tsarin AI na shafi ɗaya da kai rahoton sakamako ga kwamitin gudanarwa.",
          quickCheck: [
            { objective: "O6", q: "Wanne ne ma'aunin lokaci ko kuɗi?", options: ["Abin da masu karatu suka faɗa", "Ƙarancin kurakurai", "Awoyin da aka ajiye a mako", "Ƙarin masu aikin sa-kai da suka yi rajista"], answer: 2, why: "Awoyin da aka ajiye a mako suna auna lokaci; sauran suna auna inganci." },
            { objective: "O6", q: "Gwajin ya ajiye lokaci, amma ma'aikata sun karya dokar sirri sau ɗaya. Me zai shiga rahoton kwamitin gudanarwa?", options: ["Lokacin da aka ajiye kawai", "Babu komai; ƙaramin kuskure ne", "Neman ƙarin kuɗi kawai", "Sakamakon, matsalar, ko an bi dokoki da abin da kuke ba da shawara a gaba"], answer: 3, why: "Rahoton yana ƙunshe da abin da kuka gwada, abin da ya canja, matsaloli, ko an bi dokoki da matakai na gaba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Dokoki, gwaji da sakamako",
        questions: [
          { objective: "O4", q: "Wace ce muhimmiyar dokar AI ga ƙungiya mai zaman kanta?", options: ["A saka fayilolin mutanen da ake yi wa hidima don samun amsoshi mafi kyau", "Mutum ya duba komai kafin ya fita", "AI yana zaɓar wanda zai sami hidima", "Kowane kayan aiki ya yi"], answer: 1, why: "Dubawar ɗan adam tana kare inganci da amana." },
          { objective: "O5", q: "Mene ne ma'aunin farko (baseline)?", options: ["Maki na ƙarshe", "Wani nau'in AI", "Yadda aikin yake tafiya yau, kafin canjin", "Kasafin kuɗin kwamitin gudanarwa"], answer: 2, why: "Kuna kwatanta sakamako da ma'aunin farko." },
          { objective: "O5", q: "Yaya girman gwaji na farko ya kamata ya kasance?", options: ["Dukkan ayyuka lokaci ɗaya", "Ba shi da iyakar lokaci", "Dukkan kwamitin gudanarwa", "Aiki ɗaya, kayan aiki ɗaya, mai kula ɗaya, kwanaki 30"], answer: 3, why: "Ƙaramin gwaji yana koya muku abubuwa da arha kuma lafiya." },
          { objective: "O6", q: "Gwajin bai ajiye lokaci ba. Wace shawara ce mai kyau?", options: ["A daina ko a canja shi; kun koyi wani abu", "A ɓoye sakamakon", "A tilasta kowa ya yi amfani da shi", "A ɗora laifi kan masu aikin sa-kai"], answer: 0, why: "Dainawa sakamako ne mai kyau kuma na gaskiya." },
          { objective: "O4", q: "Ƙungiyarku tana kula da bayanan yara. Me ya kamata ku ƙara?", options: ["Babu komai", "Shawara daga lauya ko kamfanin inshora game da ƙarin dokoki", "A saka su a cikin AI", "A raba su ga jama'a"], answer: 1, why: "Ƙarin dokoki na iya shafar bayanan yara, na lafiya da na shari'a." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gina Tsarin AI ga Ƙungiyarku Mai Zaman Kanta",
    questions: [
      { objective: "O1", q: "Tsarin AI na ƙungiya mai zaman kanta shi ne:", options: ["Sayen manhaja", "Taron tara kuɗi", "Gajeriyar takarda kan yadda za ku yi amfani da AI da yadda ba za ku yi ba", "Jerin masu ba da gudummawa"], answer: 2, why: "Yana kafa manufa, dokoki da dubawa don amfani da AI." },
      { objective: "O1", q: "Tambaya ta farko mafi kyau don tsarin AI ita ce:", options: ["Wane kayan aiki ne ya fi shahara?", "Yaya za mu maye gurbin masu aikin sa-kai?", "Nawa sauran ƙungiyoyi suke biya?", "A ina ƙungiyarmu take ɓata lokacin da za mu iya mayarwa ga manufarmu?"], answer: 3, why: "Ku fara da manufa da lokaci, ba da kayan aiki ba." },
      { objective: "O1", q: "Me yasa rashin tsarin AI yake da haɗari?", options: ["Mutane na iya amfani da AI ba tare da dokokin sirri ba", "AI haramun ne", "Masu ba da gudummawa suna tilasta AI", "Ba shi da haɗari"], answer: 0, why: "Amfani ba tare da tsari ba na iya fallasa bayanan sirri." },
      { objective: "O2", q: "Wane aiki ne ya dace da AI?", options: ["Yanke shawarar wanda za a kora daga gida", "Taƙaita dogon rahoton tallafi (grant)", "Ɗaukar sabon fasto ko limami", "Sa hannu a yarjejeniyar haya"], answer: 1, why: "Taƙaitawa aiki ne mai bin tsari; sauran shawarwarin ɗan adam ne." },
      { objective: "O2", q: "Wanne ne ya kamata ya zauna a hannun mutane?", options: ["Rubuta daftarin tunatarwa", "Tsara fasalin labarai (newsletter)", "Yanke shawarar wanda zai sami hidima", "Jera batutuwan taro"], answer: 2, why: "Shawarwari game da mutane suna buƙatar hukuncin ɗan adam." },
      { objective: "O2", q: "Lokacin da kuke duba inda lokaci yake tafiya, ya kamata ku:", options: ["Yi hasashen aiki ɗaya", "Tambayi kwamitin gudanarwa kawai", "Bar masu aikin sa-kai", "Jera ayyuka da awoyin da suke ɗauka"], answer: 3, why: "Awoyi suna nuna inda AI zai fi taimakawa." },
      { objective: "O3", q: "Waɗanne maki biyu kuke amfani da su don jera ra'ayoyi?", options: ["Amfani da haɗari", "Launi da girma", "Farashi da suna", "Shekaru da tsawo"], answer: 0, why: "Babban amfani da ƙaramin haɗari suna zuwa farko." },
      { objective: "O3", q: "Ayyuka nawa ya kamata ku fara da su?", options: ["Kowane aiki", "Kusan uku", "Babu ko ɗaya", "Hamsin"], answer: 1, why: "Uku da aka yi da kyau sun fi goma da aka yi rabi." },
      { objective: "O3", q: "Wane aiki ne mafi ƙaramin haɗari?", options: ["Taƙaita bayanan shari'ar mutanen da ake yi wa hidima", "Nazarin bayanan bankin masu ba da gudummawa", "Tunatarwa ga masu aikin sa-kai daga bayanan taron jama'a", "Rubuta shawarar likita"], answer: 2, why: "Yana amfani da bayanan da ke fili ga jama'a kawai." },
      { objective: "O4", q: "Dokokin amfani da AI ya kamata su kasance:", options: ["Shafuka hamsin", "Na sirri", "An rubuta su da kalmomin shari'a kawai", "Gajeru kuma masu sauƙi ga sabon mai aikin sa-kai"], answer: 3, why: "Dokoki masu sauƙi ana bin su." },
      { objective: "O4", q: "Wace ce dokar sirri?", options: ["Kada a taɓa saka bayanan sirri na masu ba da gudummawa ko mutanen da ake yi wa hidima a cikin AI", "A yi amfani da kowane kayan aiki da kuke so", "A raba kalmomin sirri don ajiye lokaci", "A wallafa labaran mutanen da ake yi wa hidima da sunayensu"], answer: 0, why: "Kare bayanan sirri yana kiyaye amana." },
      { objective: "O4", q: "Mene ne ma'anar \"kayan aiki da aka amince da shi\"?", options: ["Kowane kayan aiki kyauta", "Kayan aikin da shugabanninku suka duba kuma suka yarda da shi", "Kayan aiki mai talla", "Kayan aikin da wani mai ba da gudummawa yake so"], answer: 1, why: "Shugabanni suna duba kayan aikin da aka amince da su don tsaro." },
      { objective: "O5", q: "Gwaji (pilot) shi ne:", options: ["Cikakken fara amfani a ko'ina", "Tallafi (grant)", "Ƙaramin gwaji na ɗan lokaci kafin babban canji", "Zaɓen kwamitin gudanarwa"], answer: 2, why: "Gwaji yana fara jarraba abu da arha." },
      { objective: "O5", q: "Me yasa za a auna ma'aunin farko kafin gwaji?", options: ["Don rage gudun abubuwa", "Domin masu ba da gudummawa sun tambaya", "Ba a buƙatarsa", "Don ku iya kwatanta sakamako bayan haka"], answer: 3, why: "Ba tare da ma'aunin farko ba, ba za ku san ko ya taimaka ba." },
      { objective: "O5", q: "Kowane gwaji yana buƙatar:", options: ["Mai kula ɗaya da ke da alhaki", "Babu wanda ke kula", "Kowane ma'aikaci yana kula", "AI kawai"], answer: 0, why: "Mai kula ɗaya yana sa gwajin ya ci gaba a kan hanya." },
      { objective: "O5", q: "Me yasa za a yi amfani da AI da ke cikin kayan aikin da kuke da su, kamar Microsoft 365 ko Google Workspace?", options: ["Koyaushe cikakke ne", "Yana iya hana ƙarin kuɗi", "Yana raba bayanai da masu ba da gudummawa", "Dole ne"], answer: 1, why: "Amfani da abin da kuke da shi yana rage kuɗi." },
      { objective: "O6", q: "Wanne ne ma'aunin inganci?", options: ["Launin tambarin kayan aikin", "Yawan manhajojin AI da aka saka", "Ƙarin masu aikin sa-kai da suka yi rajista bayan tunatarwa", "Tsawon dokokin"], answer: 2, why: "Ma'aunin inganci yana nuna ko aikin ya inganta." },
      { objective: "O6", q: "Bayan gwajin, zaɓuɓɓukanku uku su ne:", options: ["A ɓoye shi, a ƙyale shi ko a musanta shi", "A sayi ƙarin kayan aiki", "A kori mai kula", "A ci gaba, a canja shi ko a daina shi"], answer: 3, why: "Ku yanke shawara bisa ma'aunin." },
      { objective: "O6", q: "Rahoto mai kyau ga kwamitin gudanarwa shi ne:", options: ["Kusan jimloli biyar a sarari kan sakamako, haɗari da matakai na gaba", "Rahoton fasaha mai shafuka 40", "Babu komai", "Farashin kayan aikin kawai"], answer: 0, why: "Kwamitin gudanarwa yana buƙatar hoto gajere a sarari." },
      { objective: "O6", q: "Kwamitin gudanarwa ya fi kula da:", options: ["Wane AI ne ke da tambari mafi kyau", "Manufa, kuɗi, haɗari da amana", "Yawan prompt da aka rubuta", "Yawan likes a kafofin sada zumunta kawai"], answer: 1, why: "Waɗannan su ne muhimman ayyukan kwamitin gudanarwa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      4,
      6,
      10,
      12,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Manufa a farko",
        objective: "O1",
        notYet: "Babu jimlar manufa, ko tsarin yana farawa daga kayan aiki.",
        meets: "Manufa a jimla ɗaya ce ke buɗe tsarin.",
        exceeds: "Kowane aikin da aka zaɓa yana faɗin yadda yake mayar da lokaci ga manufa."
      },
      {
        name: "Ayyuka uku da aka jera",
        objective: "O3",
        notYet: "Ba a jera ayyukan ba, ko aiki mai babban haɗari ne na farko.",
        meets: "Ayyuka uku da aka ba maki don amfani da haɗari, babban amfani da ƙaramin haɗari a farko.",
        exceeds: "Yana faɗin ayyukan da aka bari da dalilin barin su."
      },
      {
        name: "Dokokin AI a sarari",
        objective: "O4",
        notYet: "Dokokin ba su kai biyar ba, ko babu dokar sirri.",
        meets: "Aƙalla gajerun dokoki biyar, har da sirri, kayan aikin da aka amince da su da dubawar ɗan adam.",
        exceeds: "Yana ƙara dokoki don haɗarin musamman na ƙungiyar, kamar bayanan yara."
      },
      {
        name: "Gwajin kwanaki 30",
        objective: "O5",
        notYet: "Babu mai kula, kayan aiki ko ranar farawa.",
        meets: "Aiki ɗaya, kayan aiki ɗaya, mai kula ɗaya, ranar farawa da ma'aunin farko da aka auna.",
        exceeds: "Yana amfani da kayan aikin da ƙungiyar take da shi, da bayani kan kuɗi."
      },
      {
        name: "Ma'auni don kwamitin gudanarwa",
        objective: "O6",
        notYet: "Babu ma'auni, ko ba za a iya kwatanta ma'aunin da ma'aunin farko ba.",
        meets: "Ma'aunin lokaci ko kuɗi ɗaya da ma'aunin inganci ɗaya.",
        exceeds: "Yana da daftarin rahoto na jimloli biyar ga kwamitin gudanarwa."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Ƙungiyoyin da kwamitin gudanarwarsu ya amince da rubutaccen tsarin AI cikin kwanaki 60 (binciken biyo baya)",
      "Ƙungiyoyin da suka kammala gwajin kwanaki 30 kuma suka kai rahoton awoyin da aka ajiye",
      "Masu koyo da suka fara wani kwas na Koach Learn game da ƙungiyoyi masu zaman kansu cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai intanet da shirin rubutu (word processor)",
      "Rubutun manufarku da jerin ayyukan ƙungiyar na mako-mako",
      "Mataimakin AI kyauta ko wanda ƙungiyarku take da shi, don rubuta daftari",
      "Kusan minti 60 gaba ɗaya, da ƙarin lokacin tattaunawa da ma'aikata da masu aikin sa-kai"
    ],
    facilitatorNotes: [
      "Ya fi aiki idan shugabanni biyu ko uku daga ƙungiya ɗaya suka rubuta tsari ɗaya tare.",
      "Kafin zaman, ku nemi masu koyo su tattara daga ma'aikata da mai aikin sa-kai ɗaya abin da ke cinye makon ƙungiyarsu.",
      "Ku tura masu koyo ga lauya ko kamfanin inshora idan suna kula da bayanan lafiya, na yara ko na shari'a.",
      "Ku sa masu koyo su yi atisayen karanta rahoton jimloli biyar ga kwamitin gudanarwa da babbar murya.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

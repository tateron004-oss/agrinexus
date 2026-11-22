"use strict";

// Koach Learn course, Hausa (ha) translation of non-profits/nonprofit-ai-impact-storytelling.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "nonprofit-ai-impact-storytelling-ha",
  lang: "ha",
  translationOf: "nonprofit-ai-impact-storytelling",
  category: "Non Profits",
  name: "AI don Ba da Labarin Tasirin Ayyukan Jin Ƙai",
  skills: "Samun izini da cikakken bayani, Tattara labari cikin mutunci, Tsara labari da tsari mai sauƙi, Ƙara lambobi na gaskiya, Amfani da AI don rubuta daftari da daidaita labarai, Duba labarai don gaskiya da girmamawa",
  outcome: "samun izini a rubuce daga mutumin da shirinku ke yi wa hidima, tsara labarinsa da tsari mai sauƙi da lamba ɗaya ta gaskiya, amfani da mataimakin AI don rubuta daftari da daidaita shi don wasiƙar labarai (newsletter), saƙon kafofin sada zumunta da rahoton tallafi (grant report), da duba shi don gaskiya da mutunci kafin ku raba shi.",
  about: [
    "Wannan kwas ɗin na ma'aikata, masu aikin sa-kai da shugabannin ƙungiyoyin jin ƙai da na addini ne, waɗanda ke nuna wa masu ba da gudummawa, masu ba da tallafi, membobi da jama'a irin canjin da aikinsu ke kawowa.",
    "Labarai suna motsa mutane su bayar kuma su taimaka, amma labarin na mutanen da ke cikinsa ne. Za ku koyi yadda ake neman izini yadda ya kamata, ba da labari cikin mutunci, goyon bayansa da lambobi na gaskiya, da amfani da AI (kamar ChatGPT, Microsoft Copilot ko Google Gemini) don rubuta daftari da daidaita shi ba tare da saka bayanan sirrin kowa a cikin AI ba.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta darasin, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai ɗan gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku ɗauki labari ɗaya na gaske daga shirinku (da izini a rubuce) ko labarin atisaye da aka ƙirƙira gaba ɗaya. Ku rubuta bayanan da tsarin Kafin, Juyin al'amari, Bayan, sannan ku ƙara lamba ɗaya ta gaskiya daga shirin. Ku yi amfani da AI da madadin suna (placeholder) don rubuta labarin wasiƙar labarai mai kalmomi 150, saƙon kafofin sada zumunta mai kalmomi 40, da sakin layi na rahoton tallafi mai kalmomi 100. Ku duba dukkansu uku da takardar izini da jerin binciken mutunci, kuma ku gyara duk abin da bai wuce ba.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ma'aikata, masu aikin sa-kai da shugabannin ƙungiyoyin jin ƙai da na addini, waɗanda ke nuna wa masu ba da gudummawa, masu ba da tallafi, membobi da jama'a irin canjin da aikinsu ke kawowa.",
    startingPoint: "Suna jin labarai masu ƙarfi daga mutanen da suke yi wa hidima, kuma suna raba wasu a wasiƙun labarai ko saƙonni. Da yawa ba su da tsarin izini a rubuce, kuma ba su yi tunani game da mutunci a cikin kalmomi ko haɗarin amfani da AI da labarai na gaske ba.",
    gap: "Labarai suna motsa masu ba da gudummawa da masu ba da tallafi, amma labarin da aka raba ba tare da izini ba, da kalmomin tausayi, ko da bayanan ƙarya, zai iya cutar da mutumin da kuma amincewar da ake yi wa ƙungiyar. Masu koyo suna buƙatar tsari mai aminci tun daga izini har zuwa bincike na ƙarshe, suna amfani da AI don rubuta daftari da daidaita labarai ba tare da bayyana kowa ba.",
    constraints: [
      "Izini a rubuce da cikakken bayani kafin a yi amfani da kowane labari, hoto ko maganar wani; iyaye ko masu riƙo don yara",
      "Wasu labarai bai kamata a faɗa su ba ko da akwai izini, kamar na waɗanda suka tsira daga cin zarafi ko mutanen da ke da shari'ar shige da fice",
      "Sirri: babu cikakkun sunaye, adireshi, bayanan lafiya ko bayanan shari'a (case notes) a cikin kayan AI",
      "Ana yi wa hotunan da AI ya yi alama, kuma ba a taɓa amfani da su a madadin mutane na gaske da ake yi wa hidima ba",
      "Lokaci: kusan minti 60 gaba ɗaya, a darussa na minti 5"
    ],
    prerequisites: "\"Gabatarwa ga AI don Ƙungiyoyin Sa-kai\", ko ɗan sanin amfani da mataimakin AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Kafin ku yi amfani da labarin wani, hotonsa ko kalmominsa", action: "nema da rubuta izini a rubuce mai cikakken bayani, har da inda za a raba shi da yadda yake son a ambaci sunansa", standard: "an faɗa wa mutumin cewa zai iya ƙi ko ya canja ra'ayi ba tare da ya rasa taimako ba" },
    { id: "O2", condition: "Idan aka ba ku daftarin labari", action: "sake rubuta shi don mutumin ya zama gwarzon labarin, da kalmomin da ke fara ambaton mutum, ba tare da kalmomin tausayi ba", standard: "kuna cire bayanan da za su iya bayyana shi ko su kunyata shi" },
    { id: "O3", condition: "Idan aka ba ku bayanan labari", action: "tsara labarin a matsayin Kafin, Juyin al'amari, Bayan, da ƙara lamba ɗaya ta gaskiya daga shirin", standard: "lambar ta fito daga bayananku da aka tabbatar" },
    { id: "O4", condition: "Idan kuna da bayanan labarinku", action: "rubuta prompt na AI da madadin suna da bayanai na gama-gari don samun daftari", standard: "babu cikakken suna, adireshi, bayanan lafiya ko bayanan shari'a a cikin prompt ɗin" },
    { id: "O5", condition: "Idan aka ba ku daftarin labari ɗaya", action: "daidaita shi zuwa labarin wasiƙar labarai, saƙon kafofin sada zumunta da sakin layi na rahoton tallafi", standard: "kuna amfani da kowane nau'i ne kawai inda takardar izini ta yarda" },
    { id: "O6", condition: "Kafin labari ya fita", action: "duba shi don gaskiya, izini, mutunci da lambobi, da gyara duk abin da bai wuce ba", standard: "kowane bayani ya yi daidai da bayananku da takardar izini" }
  ],
  chapters: [
    {
      name: "Babi na 1: Labarai masu girmama mutane",
      lessons: [
        {
          objectives: ["O1"],
          title: "Izini shi ne na farko",
          minutes: 5,
          goal: "Nema da rubuta izini mai cikakken bayani kafin ku yi amfani da labarin wani, hotonsa ko kalmominsa.",
          text: [
            "Labarin mutum nasa ne. Kafin ku raba shi, ku nemi izini mai cikakken bayani: ya fahimci abin da za ku raba, inda (wasiƙar labarai, shafin intanet, kafofin sada zumunta, rahotannin tallafi), na tsawon lokaci nawa, kuma cewa zai iya ƙi ko ya canja ra'ayi ba tare da ya rasa wani taimako ba.",
            "Ku sami izini a rubuce da takarda mai sauƙi, kuma don yara ku sami izinin iyaye ko mai riƙo. Ku bar mutumin ya zaɓa: sunansa na gaske, sunan farko kawai, ko suna da aka canja; da hoto ko babu hoto. Ku rubuta abin da ya yarda da shi, ku ajiye shi tare da labarin.",
            "Wasu labarai bai kamata a faɗa su ba ko da akwai izini, idan raba su zai iya jefa mutumin cikin haɗari, misali waɗanda suka tsira daga cin zarafi, mutanen da ke da shari'ar shige da fice, ko mutanen da ke murmurewa daga jaraba. Idan kuna shakka, ku tambayi daraktanku. Wataƙila ƙungiyarku tana da nata takardar izini; ku yi amfani da ita. Ku tambayi lauya ko ƙungiyar da ku ke ƙarƙashinta idan kuna buƙatar a duba takardar."
          ],
          steps: ["Ku bayyana abin da za ku raba, inda, da tsawon lokaci.", "Ku bayyana a sarari cewa zai iya ƙi ba tare da ya rasa wani taimako ba.", "Ku bar shi ya zaɓi suna, hoto da bayanai.", "Ku sami sa hannu (iyaye ko mai riƙo don yara).", "Ku ajiye takardar tare da labarin, ku girmama duk wani canjin ra'ayi."],
          words: [["Izini mai cikakken bayani (informed consent)", "amincewa a sarari daga wanda ya fahimci daidai yadda za a yi amfani da labarinsa."], ["Mai riƙo (guardian)", "babban mutum da doka ta ɗora masa alhakin yaro."]],
          slides: [
            { title: "Labarin nasu ne", bullets: ["Ku nemi izini kafin ku raba", "Ƙin yarda ba ya taɓa shafar taimakonsu"] },
            { title: "Izini mai cikakken bayani ya ƙunshi", bullets: ["Abin da za ku raba", "Inda, da tsawon lokaci", "Zaɓin suna da hoto", "'Yancin canja ra'ayi"] },
            { title: "Ku sami shi a rubuce", bullets: ["Takarda mai sauƙi da aka sa hannu", "Iyaye ko mai riƙo don yara", "Ku ajiye ta tare da labarin"] },
            { title: "Lokacin da bai kamata ku raba ba", bullets: ["Idan raba shi zai iya jefa su cikin haɗari", "Idan kuna shakka, ku tambayi daraktanku"] }
          ],
          tryIt: "Ku rubuta jerin binciken izini mai layuka biyar don ƙungiyarku, wanda ya ƙunshi me, ina, tsawon lokaci, zaɓin suna da hoto, da 'yancin ƙin yarda. Ku kwatanta shi da duk wata takarda da ƙungiyarku ke amfani da ita.",
          youCanNow: "nema da rubuta izini mai cikakken bayani kafin ku raba labarin wani.",
          quickCheck: [
            { objective: "O1", q: "Wane zaɓin suna ya kamata a ba mutumin?", options: ["Sunan gaske, sunan farko kawai, ko suna da aka canja", "Cikakken sunansa na hukuma kawai", "Hoto kawai ba tare da suna ba", "Duk abin da ma'aikata suka fi so"], answer: 0, why: "Ku bar mutumin ya zaɓi yadda za a ambace shi, da ko za a yi amfani da hoto." },
            { objective: "O1", q: "Wata da ta tsira daga cin zarafi tana son raba labarinta, amma raba shi zai iya jefa ta cikin haɗari. Me za ku yi?", options: ["Ku raba shi, tun da ta yarda", "Ku tambayi daraktanku, domin wasu labarai bai kamata a faɗa su ba ko da akwai izini", "Ku raba shi da cikakken sunanta", "Ku saka shi a kafofin sada zumunta kawai"], answer: 1, why: "Wasu labarai bai kamata a faɗa su ba ko da akwai izini, idan raba su zai iya jefa mutumin cikin haɗari." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ba da labari cikin mutunci",
          minutes: 5,
          goal: "Sake rubuta labari don mutumin ya zama gwarzo, ba wanda aka zalunta ba.",
          text: [
            "Mutunci yana nufin nuna mutane a matsayin masu iyawa, masu ƙarfinsu da zaɓinsu, ba a matsayin marasa galihu ba. Mutumin shi ne gwarzon labarin; ƙungiyarku ita ce mai taimako.",
            "Ku yi amfani da kalmomin da ke fara ambaton mutum (\"mutumin da ke fama da rashin matsuguni\", ba \"mara gida\" ba). Ku guji kalmomin tausayi kamar \"talaka\", \"mai shan wahala\" ko \"karyayye\". Kada ku ƙara gishiri. Ku yi amfani da kalmominsa na kansa a cikin alamar zance idan ya yarda.",
            "Ku cire bayanan da ba a buƙata ba waɗanda za su iya bayyana shi ko su kunyata shi: ainihin adireshi, bayanan lafiya, matsalolin shari'a, sunayen makarantun yara."
          ],
          steps: ["Ku sa mutumin ya zama babban mai aiki a labarin.", "Ku yi amfani da kalmomin da ke fara ambaton mutum.", "Ku cire kalmomin tausayi da ƙara gishiri.", "Ku cire bayanan da ba a buƙata ba.", "Ku yi amfani da kalmominsa na kansa idan ya yarda."],
          words: [["Mutunci", "nuna mutane da girmamawa, a matsayin masu iyawa masu ƙarfinsu."], ["Kalmomin da ke fara ambaton mutum (people-first language)", "ambaton mutum kafin halin da yake ciki, kamar \"matar da ke fama da rashin matsuguni\"."]],
          slides: [
            { title: "Mutumin shi ne gwarzo", bullets: ["Shi ne ke aiki da zaɓi", "Ƙungiyarku tana taimakawa"] },
            { title: "Kalmomi suna da muhimmanci", bullets: ["Mutum da farko: \"mutumin da ke fama da rashin matsuguni\"", "Babu kalmomin tausayi: talaka, mai shan wahala, karyayye", "Babu ƙara gishiri"] },
            { title: "Ku cire", bullets: ["Ainihin adireshi", "Bayanan lafiya da na shari'a", "Sunayen makarantun yara"] }
          ],
          tryIt: "Ku sake rubuta wannan jimla cikin mutunci: \"Talaka, karyayyiya Maria ba ta da gida kuma ba ta da mai taimako har sai da muka cece ta.\" Ku sa Maria ta zama gwarzo, ku cire kalmomin tausayi.",
          youCanNow: "rubuta game da mutanen da kuke yi wa hidima cikin mutunci da girmamawa.",
          quickCheck: [
            { objective: "O2", q: "A labarin da ke kan mutunci, mene ne matsayin ƙungiyarku?", options: ["Gwarzo", "Wanda aka zalunta", "Mai taimako", "Alƙali"], answer: 2, why: "Mutumin shi ne gwarzo; ƙungiyarku ita ce mai taimako." },
            { objective: "O2", q: "Wani daftari ya ce \"talakar Malama [Suna] tana shan wahala.\" Me za ku yi?", options: ["Ku bar shi; yana motsa masu ba da gudummawa", "Ku ƙara kalmomin tausayi", "Ku tsawaita shi", "Ku cire kalmomin tausayi ku nuna ƙarfinta da zaɓinta"], answer: 3, why: "Ku guji kalmomin tausayi kamar \"talaka\" da \"mai shan wahala\"; ku nuna mutane a matsayin masu iyawa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Tsarin labari mai sauƙi da lamba ɗaya ta gaskiya",
          minutes: 5,
          goal: "Tsara labari a matsayin Kafin, Juyin al'amari, Bayan, da ƙara lamba ɗaya ta gaskiya daga shirin.",
          text: [
            "Tsari mai sauƙi yana sa labari ya zama mai sauƙin bi. Kafin: yadda rayuwa take da abin da mutumin yake so. Juyin al'amari: abin da ya yi, tare da taimakon shirinku. Bayan: abin da ya canja, a fili.",
            "Sannan ku ƙara lamba ɗaya ta gaskiya don nuna cewa labarin wani ɓangare ne na abu mafi girma: \"Maria tana ɗaya daga cikin iyaye 84 da suka kammala shirinmu na koyon sana'a a wannan shekara.\" Ku yi amfani da lambobi daga bayananku, kuma kada ku ƙara lambar ko ku yi hasashe.",
            "Labarin mutum ɗaya yana sa mutane su damu; lambar tana nuna girman tasirinku. Masu ba da tallafi suna son duka biyun."
          ],
          steps: ["Ku rubuta Kafin: rayuwa da buri.", "Ku rubuta Juyin al'amari: abin da ya yi tare da taimakonku.", "Ku rubuta Bayan: canjin da ake gani a fili.", "Ku ƙara lamba ɗaya ta gaskiya daga bayananku.", "Ku tabbatar da lambar da mutumin da ke kula da bayananku."],
          words: [["Tasiri (impact)", "ainihin canjin da aikinku ke kawowa a rayuwar mutane."], ["Sakamako (outcome)", "sakamakon da za a iya auna shi, kamar \"iyaye 84 sun kammala koyo\"."]],
          slides: [
            { title: "Kafin, Juyin al'amari, Bayan", bullets: ["Kafin: rayuwa da buri", "Juyin al'amari: abin da ya yi, taimakonku", "Bayan: canjin da ake gani a fili"] },
            { title: "Ku ƙara lamba ɗaya ta gaskiya", bullets: ["Daga bayananku na kanku", "Babu ƙara lamba ko hasashe"] },
            { title: "Me yasa duka biyun", bullets: ["Labarin yana sa mutane su damu", "Lambar tana nuna girman tasiri"] }
          ],
          tryIt: "Ta amfani da labarin da aka ba da izini ko labarin atisaye da aka ƙirƙira, ku rubuta gajerun layuka uku (Kafin, Juyin al'amari, Bayan) da lamba ɗaya ta gaskiya daga shirinku.",
          youCanNow: "tsara labari da tsari a sarari da goyon bayansa da lamba ta gaskiya.",
          quickCheck: [
            { objective: "O3", q: "Me ke shiga cikin Juyin al'amari?", options: ["Abin da mutumin ya yi, tare da taimakon shirinku", "Adireshin mutumin", "Kasafin kuɗinku", "Jerin masu ba da gudummawa"], answer: 0, why: "Juyin al'amari shi ne abin da ya yi, tare da taimakon shirinku." },
            { objective: "O3", q: "Kuna tsammanin mutane kusan 90 ne suka kammala shirin, amma bayananku sun ce 84. Wace za ku yi amfani da ita?", options: ["Kusan 90, don a ƙara", "84, daga bayananku", "100, don ya yi kama da babba", "Babu lamba ko kaɗan"], answer: 1, why: "Ku yi amfani da lambobi daga bayananku; kada ku ƙara ko ku yi hasashe." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Labarai masu girmama mutane",
        questions: [
          { objective: "O1", q: "Me dole ku samu kafin ku raba labarin wanda kuke yi wa hidima?", options: ["Hoto mai kyau", "Amincewar mai ba da gudummawa", "Izininsa mai cikakken bayani", "Daftarin AI"], answer: 2, why: "Labarin na mutumin ne; dole ya fara yarda." },
          { objective: "O1", q: "Wanda kuke yi wa hidima ya ƙi a raba labarinsa. Me zai faru da taimakonsa?", options: ["Babu abin da zai canja; har yanzu yana samun taimako", "Zai tsaya", "Za a rage shi", "Dole ya biya"], answer: 0, why: "Dole izini ya kasance bisa ra'ayinsa; ƙin yarda ba ya taɓa shafar taimako." },
          { objective: "O2", q: "Wanne ne kalmomin da ke fara ambaton mutum?", options: ["\"mara gida\"", "\"marasa gida\"", "\"talaka karyayye\"", "\"mutumin da ke fama da rashin matsuguni\""], answer: 3, why: "Yana ambaton mutumin kafin halin da yake ciki." },
          { objective: "O3", q: "A tsarin Kafin, Juyin al'amari, Bayan, me ke shiga cikin Bayan?", options: ["Sunan mai ba da gudummawa", "Canjin da ake gani a fili", "Adireshin ƙungiyar", "Kasafin kuɗi"], answer: 1, why: "Bayan yana nuna abin da ya canja." },
          { objective: "O3", q: "Wace lamba ce daidai a yi amfani da ita?", options: ["Hasashen da ke kama da babba", "Lamba daga bayananku, da aka tabbatar", "Lambar da aka ƙara", "Lambar da AI ya ƙirƙira"], answer: 1, why: "Lambobi na gaskiya suna fitowa daga bayananku da aka tabbatar." }
        ]
      }
    },
    {
      name: "Babi na 2: Rubuta daftari da raba labarai da AI",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rubuta daftarin labari da AI, lafiya",
          minutes: 5,
          goal: "Yi amfani da AI don mayar da bayanan labarinku zuwa daftari ba tare da raba bayanan sirri ba.",
          text: [
            "AI zai iya mayar da bayananku na Kafin, Juyin al'amari, Bayan zuwa daftari mai kyau cikin daƙiƙoƙi. Amma kada ku taɓa liƙa cikakken sunan mutum na gaske, adireshinsa, bayanan lafiyarsa ko bayanan shari'arsa a cikin kayan AI. Kayan AI da yawa suna iya ajiye abin da kuka rubuta.",
            "Ku yi amfani da madadin suna da bayanai na gama-gari: \"Ka rubuta labarin wasiƙar labarai mai kalmomi 150. [Suna], uwa da ke renon yara ita kaɗai, tana son aiki mai ɗorewa. Ta kammala shirinmu na koyon sana'a na mako 10, kuma yanzu tana aiki a matsayin mataimakiyar ofishin asibiti. Iyaye 84 ne suka kammala shirin a wannan shekara. Kalmomi masu ɗumi, masu girmamawa, masu fara ambaton mutum, babu kalmomin tausayi.\"",
            "Bayan kun sami daftarin, ku saka bayanai na gaske da kanku, amma waɗanda mutumin ya yarda da su a takardar izini kaɗai."
          ],
          steps: ["Ku fara daga bayananku da aka tsara.", "Ku maye gurbin sunaye da bayanan sirri da madadin suna.", "Ku nemi tsawo, salo da kalmomin da ke fara ambaton mutum.", "Ku nemi canji ɗaya ko biyu.", "Ku ƙara bayanai na gaske da aka yarda da su kaɗai, da kanku."],
          words: [["Madadin suna (placeholder)", "abin da ke riƙe wuri kamar [Suna] da za ku maye gurbinsa daga baya."], ["Daftari (draft)", "rubutu na farko da za ku duba ku inganta."]],
          slides: [
            { title: "Kada ku taɓa liƙawa a AI", bullets: ["Cikakkun sunaye da adireshi", "Bayanan lafiya ko na shari'a", "Bayanan yara"] },
            { title: "Prompt na labari mai aminci", bullets: ["Madadin suna kamar [Suna]", "Bayananku na Kafin, Juyin al'amari, Bayan", "Tsawo, salo, kalmomin da ke fara ambaton mutum"] },
            { title: "Bayan daftarin", bullets: ["Ku ƙara bayanan da suka yarda da su kaɗai", "Ku duba da takardar izini"] }
          ],
          tryIt: "Ku mayar da bayananku daga Darasi na 3 zuwa prompt mai aminci da madadin suna, ku nemi AI ya rubuta labarin wasiƙar labarai mai kalmomi 150. Ku nemi canji ɗaya, sannan ku ƙara bayanan da aka yarda da su kaɗai.",
          youCanNow: "rubuta daftarin labarin tasiri da AI yayin da kuke kare sirrin mutumin.",
          quickCheck: [
            { objective: "O4", q: "Me yasa ake hana sunaye na gaske da bayanan shari'a shiga kayan AI?", options: ["AI ba ya iya karanta sunaye", "Yana tsawaita daftari", "Kayan AI da yawa suna iya ajiye abin da kuka rubuta", "AI yana rubutu da manyan haruffa kawai"], answer: 2, why: "Kayan AI da yawa suna iya ajiye abin da kuka rubuta." },
            { objective: "O4", q: "Mutumin ya yarda a raba sunansa na farko amma ba aikinsa ba. Me za ku ƙara a daftarin AI?", options: ["Cikakken sunansa da aikinsa", "Adireshinsa", "Babu komai ko kaɗan", "Sunansa na farko kawai"], answer: 3, why: "Ku ƙara bayanai na gaske da mutumin ya yarda da su a takardar izini kaɗai." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Daidaita labari ɗaya don masu karatu daban-daban",
          minutes: 5,
          goal: "Mayar da labari ɗaya zuwa rubutun wasiƙar labarai, saƙon kafofin sada zumunta da sakin layi na rahoton tallafi.",
          text: [
            "Masu karatu daban-daban suna buƙatar nau'o'i daban-daban. Masu ba da gudummawa a wasiƙar labarai suna son ɗumi da hanyar taimakawa. Kafofin sada zumunta suna buƙatar gajerun kalmomi da mataki ɗaya a sarari. Rahoton tallafi yana buƙatar bayanai na gaskiya, sakamako, da yadda kuɗin mai ba da tallafin ya taimaka.",
            "Ku nemi AI ya daidaita daftarin: \"Ka mayar da wannan labarin zuwa saƙon kafofin sada zumunta mai kalmomi 40 da kira ɗaya na ɗaukar mataki, da sakin layi na rahoton tallafi mai kalmomi 100 da ke faɗin sakamakon da lambar.\" Ku yi amfani da labarin a wuraren da mutumin ya yarda kaɗai.",
            "Hotunan da AI ya yi kada su taɓa yin kamar mutane ne na gaske da kuke yi wa hidima. Idan kuka yi amfani da hoton da AI ya yi, ku yi masa alama, kuma kada ku yi amfani da shi a madadin wani na gaske da kuke yi wa hidima."
          ],
          steps: ["Ku duba takardar izini don ganin inda za ku iya raba labarin.", "Ku nemi AI ya ba ku gajeren nau'i na kafofin sada zumunta da mataki ɗaya.", "Ku nemi AI ya ba ku nau'in rahoton tallafi da sakamako da lambar.", "Ku kwatanta nau'o'in don gaskiya.", "Ku yi wa duk hoton da AI ya yi alama."],
          words: [["Masu karatu (audience)", "mutanen da za su karanta ko su ga abin da kuke rabawa."], ["Rahoton tallafi (grant report)", "rahoto ga mai ba da tallafi da ke nuna abin da kuɗinsa ya yi."]],
          slides: [
            { title: "Labari ɗaya, nau'o'i uku", bullets: ["Wasiƙar labarai: ɗumi, hanyar taimakawa", "Kafofin sada zumunta: gajere, mataki ɗaya", "Rahoton tallafi: bayanai da sakamako"] },
            { title: "Inda suka yarda kaɗai", bullets: ["Ku fara duba takardar izini", "Yarda da shafin intanet ba yarda da kafofin sada zumunta ba ne"] },
            { title: "Hotunan AI", bullets: ["Kada su taɓa yin kamar mutane na gaske ne", "Ku yi wa hotunan da AI ya yi alama"] }
          ],
          tryIt: "Ku nemi AI ya daidaita labarin wasiƙar labaranku zuwa saƙon kafofin sada zumunta mai kalmomi 40 da sakin layi na rahoton tallafi mai kalmomi 100. Ku duba cewa takardar izini ta yarda da kowane wuri.",
          youCanNow: "daidaita labari ɗaya don masu ba da gudummawa, kafofin sada zumunta da masu ba da tallafi.",
          quickCheck: [
            { objective: "O5", q: "Me masu ba da gudummawa da ke karanta wasiƙar labarai suke so?", options: ["Ɗumi da hanyar taimakawa", "Teburin kasafin kuɗi", "Kalmomin shari'a", "Lambobi kawai"], answer: 0, why: "Masu ba da gudummawa a wasiƙar labarai suna son ɗumi da hanyar taimakawa." },
            { objective: "O5", q: "Ba ku da hoton mutumin na gaske, don haka AI ya yi hoton iyali mai murmushi. Yaya za ku yi amfani da shi?", options: ["Ku ce iyalin da kuka yi wa hidima ne", "Ku yi masa alama cewa AI ne ya yi shi, kada ku nuna shi a matsayin wani na gaske da kuke yi wa hidima", "Ku yi amfani da shi ba tare da alama ba", "Ku saka sunan mutumin a ƙasansa"], answer: 1, why: "Dole a yi wa hotunan da AI ya yi alama, kuma kada su taɓa maye gurbin wani na gaske da kuke yi wa hidima." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Duba labari kafin ya fita",
          minutes: 5,
          goal: "Yi amfani da gajeren jerin bincike don kama kurakurai, bayanan ƙarya da matsalolin mutunci.",
          text: [
            "Wani lokaci AI yana ƙara bayanan da ba gaskiya ba: ƙarin yaro, sunan aikin da mutumin bai taɓa yi ba, maganar da bai taɓa faɗa ba. Waɗannan za su iya cutar da mutumin da amincewar da ake yi wa ƙungiyarku.",
            "Kafin ku raba, ku duba: Gaskiya (shin kowane bayani gaskiya ne kuma yana cikin bayananku?), Izini (shin an yarda da kowane bayani da kowane wuri?), Mutunci (shin mutumin shi ne gwarzo, da kalmomin da ke fara ambaton mutum?), da Lambobi (shin lambar daga bayananku take?). Idan za ku iya, ku bar mutumin ya karanta labarinsa kafin ya fita.",
            "Ku ajiye kwafin rubutun ƙarshe tare da takardar izini, kuma ku cire labarin idan mutumin ya nema."
          ],
          steps: ["Gaskiya: ku kwatanta kowane bayani da bayananku; ku cire duk abin da AI ya ƙara.", "Izini: ku duba kowane bayani da kowane wuri da takardar.", "Mutunci: gwarzo, kalmomin da ke fara ambaton mutum, babu tausayi.", "Lambobi: ku tabbatar daga bayananku.", "Ku bar mutumin ya karanta idan za ku iya, sannan ku ajiye shi tare da takardar izini."],
          words: [["Ƙirƙira (fabrication)", "bayanin ƙarya da aka gabatar kamar gaskiya ne."], ["Jerin bincike (checklist)", "jerin abubuwan da kuke dubawa kowane lokaci."]],
          slides: [
            { title: "AI yana iya ƙara bayanan ƙarya", bullets: ["Ƙarin mutane ko abubuwan da suka faru", "Sunayen ayyuka ko maganganun da ba a faɗa ba"] },
            { title: "Bincike huɗu", bullets: ["Gaskiya", "Izini", "Mutunci", "Lambobi"] },
            { title: "Ku gama da kyau", bullets: ["Ku bar mutumin ya karanta idan za ku iya", "Ku ajiye shi tare da takardar izini", "Ku cire shi idan sun nema"] }
          ],
          tryIt: "Aikin ƙarshe: ku wuce da nau'o'inku uku (wasiƙar labarai, saƙon kafofin sada zumunta, sakin layi na tallafi) ta bincike huɗu. Ku gyara duk abin da bai wuce ba, ku rubuta abin da kuka canja.",
          youCanNow: "duba labaran tasiri don gaskiya, izini, mutunci da lambobi na gaskiya kafin ku raba su.",
          quickCheck: [
            { objective: "O6", q: "Wanne ne ɗaya daga cikin bincike huɗu kafin a raba?", options: ["Tsawo", "Nau'in rubutu (font)", "Izini", "Launi"], answer: 2, why: "Bincike huɗun su ne Gaskiya, Izini, Mutunci da Lambobi." },
            { objective: "O6", q: "Wani iyali ya nemi ku cire labarinsu wata ɗaya bayan an saka shi. Me za ku yi?", options: ["Ku bar shi; sun sa hannu a takardar", "Ku nemi su biya don a cire shi", "Ku canja kalma ɗaya", "Ku cire labarin"], answer: 3, why: "Ku cire labarin idan mutumin ya nema." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Rubuta daftari da raba labarai da AI",
        questions: [
          { objective: "O4", q: "Me yake da aminci a saka a prompt na labari ga AI?", options: ["Bayanan shari'ar wanda kuke yi wa hidima", "Adireshin gidansa", "Bayanan lafiyarsa", "Madadin suna da bayanai na gama-gari"], answer: 3, why: "Madadin suna yana hana bayanan sirri shiga AI." },
          { objective: "O5", q: "Takardar izini ta yarda da shafin intanet amma ba kafofin sada zumunta ba. Me za ku yi?", options: ["Ku yi amfani da labarin a shafin intanet kawai", "Ku saka shi a kafofin sada zumunta duk da haka", "Ku tambayi AI", "Ku canja sunan ku saka shi ko'ina"], answer: 0, why: "Ku raba inda mutumin ya yarda kaɗai." },
          { objective: "O6", q: "AI ya ƙara maganar da mutumin bai taɓa faɗa ba. Me za ku yi?", options: ["Ku bar ta, tana da daɗin ji", "Ku ƙara wasu maganganu", "Ku cire ta", "Ku tambayi mai ba da gudummawa"], answer: 2, why: "Bayanan ƙarya suna lalata amincewa, kuma dole a cire su." },
          { objective: "O5", q: "Wane nau'i ne ke buƙatar sakamako da yadda kuɗin mai ba da tallafi ya taimaka?", options: ["Saƙon kafofin sada zumunta", "Takardar sanarwar taro", "Katin godiya", "Rahoton tallafi"], answer: 3, why: "Masu ba da tallafi suna son sakamakon da ke da alaƙa da tallafinsu." },
          { objective: "O5", q: "Yaya ya kamata a yi amfani da hoton da AI ya yi?", options: ["A nuna shi a matsayin wani na gaske da ake yi wa hidima", "A ɓoye shi a bayan fage", "Da alama, kuma kada ya taɓa maye gurbin wani na gaske da ake yi wa hidima", "A yi amfani da shi don izini"], answer: 2, why: "Kada hotunan AI su yi kamar suna nuna mutane na gaske da kuke yi wa hidima." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Ba da Labarin Tasirin Ayyukan Jin Ƙai",
    questions: [
      { objective: "O1", q: "Labarin wanda kuke yi wa hidima na wane ne?", options: ["Na ƙungiyar", "Na wanda ake yi wa hidimar", "Na mai ba da gudummawa", "Na kayan AI"], answer: 1, why: "Rayuwarsa ce kuma labarinsa ne." },
      { objective: "O1", q: "Izini mai cikakken bayani yana nufin mutumin ya fahimci:", options: ["Abin da za ku raba, inda, da tsawon lokaci", "Cewa za a ɗauki hoto kawai", "Babu komai; sa hannu ya isa", "Kasafin kuɗin ƙungiyar"], answer: 0, why: "Izini yana da cikakken bayani ne kawai idan sun san yadda za a yi amfani da shi." },
      { objective: "O1", q: "Don labarin yaro, wa ke ba da izini?", options: ["Malamin yaron", "Mai aikin sa-kai", "Iyaye ko mai riƙo", "Babu kowa"], answer: 2, why: "Dole iyaye ko mai riƙo su yarda don yaro." },
      { objective: "O1", q: "Wani da ya yarda a watan jiya yanzu yana neman ku cire labarinsa. Ku:", options: ["Cire shi", "Ƙi", "Nemi ya biya", "Gajarta shi"], answer: 0, why: "Mutane suna iya canja ra'ayinsu." },
      { objective: "O1", q: "Yaushe ne ba za a raba labari ba ko da akwai izini?", options: ["Idan ya yi gajarta sosai", "Idan ranar Litinin ce", "Ba ko yaushe", "Idan raba shi zai iya jefa mutumin cikin haɗari"], answer: 3, why: "Tsaro yana gaba da labari mai kyau." },
      { objective: "O2", q: "A labarin da ke kan mutunci, gwarzon shi ne:", options: ["Ƙungiyar", "Mutumin da kuke yi wa hidima", "Mai ba da gudummawa", "AI"], answer: 1, why: "Mutumin ne ke aiki da zaɓi; ku kuna taimakawa." },
      { objective: "O2", q: "Wace kalma ya kamata ku guje wa?", options: ["\"ya kammala\"", "\"karyayye\"", "\"ya zaɓa\"", "\"ya fara\""], answer: 1, why: "\"Karyayye\" kalmar tausayi ce." },
      { objective: "O2", q: "Wane bayani ya kamata a cire yawanci?", options: ["Canjin da ake gani a fili", "Shirin da ya shiga", "Burinsa", "Ainihin adireshinsa"], answer: 3, why: "Adireshi zai iya bayyana mutane ko ya jefa su cikin haɗari." },
      { objective: "O3", q: "Sassa uku na tsarin labarin su ne:", options: ["Kafin, Juyin al'amari, Bayan", "Take, Tambari, Roƙo", "Suna, Adireshi, Waya", "Matsala, Farashi, Riba"], answer: 0, why: "Wannan tsari mai sauƙi yana da sauƙin bi." },
      { objective: "O3", q: "Me yasa za a ƙara lamba ɗaya ta gaskiya?", options: ["Don a tsawaita shi", "Domin AI yana buƙatarta", "Don nuna cewa labarin wani ɓangare ne na tasiri mafi girma", "Don maye gurbin izini"], answer: 2, why: "Lambar tana nuna girman tasirinku." },
      { objective: "O3", q: "Daga ina lambar shirinku ya kamata ta fito?", options: ["Hasashe", "AI", "Shafin intanet na wata ƙungiya mai gasa", "Bayananku na kanku da aka tabbatar"], answer: 3, why: "Lambobi na gaskiya suna fitowa daga bayananku." },
      { objective: "O4", q: "Wane prompt ne yake da aminci?", options: ["\"Maria Lopez, 123 Main St, an gano tana da...\"", "\"Ga bayanan shari'arta...\"", "\"[Suna], uwa da ke renon yara ita kaɗai, ta kammala koyonmu kuma yanzu tana aiki a ofishin asibiti.\"", "\"Ga makarantar ɗanta...\""], answer: 2, why: "Yana amfani da madadin suna kuma babu bayanan sirri." },
      { objective: "O4", q: "Bayan daftarin AI, waɗanne bayanai na gaske za ku ƙara?", options: ["Duk bayanan da kuka sani", "Waɗanda mutumin ya yarda da su kaɗai", "Lambar wayarsa", "Duk abin da AI ya ba da shawara"], answer: 1, why: "Takardar izini ce ke iyakance abin da kuke rabawa." },
      { objective: "O5", q: "Nau'in kafofin sada zumunta ya kamata ya zama:", options: ["Gajere da mataki ɗaya a sarari", "Mai tsawo kamar rahoton tallafi", "Cike da bayanan shari'a", "Ba tare da wani roƙo ba"], answer: 0, why: "Gajerun saƙonni masu mataki ɗaya suna aiki mafi kyau." },
      { objective: "O5", q: "Nau'in rahoton tallafi yana mai da hankali kan:", options: ["Barkwanci", "Kalmomin tausayi", "Bayanai na gaskiya, sakamako da yadda kuɗin ya taimaka", "Adireshin mutumin"], answer: 2, why: "Masu ba da tallafi suna buƙatar sakamako." },
      { objective: "O5", q: "Kafin ku saka labari a kafofin sada zumunta, ku duba:", options: ["Cewa takardar izini ta yarda da kafofin sada zumunta", "Rubutun kalmomi kawai", "Yanayi", "Jerin masu ba da gudummawa"], answer: 0, why: "Izini yana ɗaukar kowane wuri daban." },
      { objective: "O5", q: "An yi wa hoton iyali mai murmushi da AI ya yi alama da \"iyalin da muka yi wa hidima\". Wannan:", options: ["Ba laifi", "Dole ne", "Ya fi hoto na gaske", "Yaudara ce; ku yi masa alama cewa AI ne ya yi shi, kada ku nuna shi a matsayin wani na gaske"], answer: 3, why: "Kada hotunan AI su yi kamar mutane na gaske ne da ake yi wa hidima." },
      { objective: "O6", q: "Wanne ne ɗaya daga cikin bincike huɗu?", options: ["Sauri", "Gaskiya", "Farashi", "Nau'in rubutu (font)"], answer: 1, why: "Gaskiya, Izini, Mutunci da Lambobi su ne bincike huɗu." },
      { objective: "O6", q: "AI ya rubuta cewa wanda kuke yi wa hidima \"yana da yara uku\" amma bayananku sun ce ɗaya. Ku:", options: ["Bar shi", "Gyara shi ya yi daidai da bayananku", "Sake tambayar AI ku amince da shi", "Cire izinin wanda kuke yi wa hidima"], answer: 1, why: "Dole kowane bayani ya yi daidai da bayananku." },
      { objective: "O6", q: "A ina kuke ajiye labarin ƙarshe?", options: ["A cikin hirar AI kawai", "Babu inda", "A rumbun bayanai na jama'a", "Tare da takardar izini da aka sa hannu"], answer: 3, why: "Ajiye su tare yana nuna abin da aka yarda da shi." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      5,
      8,
      11,
      14,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Izini",
        objective: "O1",
        notYet: "Babu izini a rubuce don labari na gaske, ko an yi amfani da bayanin da ba a yarda da shi ba.",
        meets: "Izini a rubuce, ko labarin atisaye da aka ƙirƙira gaba ɗaya, tare da rubuta zaɓin suna da wurare.",
        exceeds: "Mutumin ya karanta labarinsa kafin ya fita."
      },
      {
        name: "Tsari da lamba",
        objective: "O3",
        notYet: "Wani sashe na labarin ya ɓace, ko an yi hasashen lambar.",
        meets: "Kafin, Juyin al'amari da Bayan, da lamba ɗaya daga bayanan da aka tabbatar.",
        exceeds: "Sashen Bayan yana nuna canji a fili da kalmomin mutumin na kansa, da izininsa."
      },
      {
        name: "Prompt na AI mai aminci",
        objective: "O4",
        notYet: "Prompt ɗin yana da cikakken suna, adireshi, bayanan lafiya ko bayanan shari'a.",
        meets: "Prompt ɗin yana amfani da madadin suna da bayanai na gama-gari kaɗai.",
        exceeds: "Yana neman AI ya yi amfani da kalmomin da ke fara ambaton mutum, ba tare da kalmomin tausayi ba."
      },
      {
        name: "Nau'o'i uku",
        objective: "O5",
        notYet: "Wani nau'i ya ɓace, ko an yi amfani da shi inda izini bai yarda ba.",
        meets: "Wasiƙar labarai mai kusan kalmomi 150, saƙon kafofin sada zumunta mai kalmomi 40 da sakin layi na tallafi mai kalmomi 100, kowanne inda izini ya yarda.",
        exceeds: "Kowane nau'i ya dace da masu karatunsa: ɗumi, mataki ɗaya, ko sakamako da tallafi."
      },
      {
        name: "Bincike na ƙarshe",
        objective: "O6",
        notYet: "Akwai sauran bayanin ƙarya, kalmar tausayi ko lambar da ba a tabbatar ba.",
        meets: "Dukkansu uku sun wuce Gaskiya, Izini, Mutunci da Lambobi.",
        exceeds: "Ya jera abin da aka gyara, kuma ya ajiye kwafin ƙarshe tare da takardar izini."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Ƙungiyoyin da suka fara amfani da takardar izinin labari a rubuce cikin kwanaki 60 (binciken biyo baya)",
      "Labaran da aka raba a wasiƙun labarai, saƙonni ko rahotannin tallafi tare da izini a ajiye",
      "Masu koyo da suka fara wani kwas na Koach Learn game da ƙungiyoyin jin ƙai cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Mataimakin AI kyauta",
      "Takardar izinin ƙungiyarku, ko samfurin takarda mai sauƙi",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku yi amfani da labaran atisaye da aka ƙirƙira gaba ɗaya a aji, sai dai idan labarai na gaske suna da izini a rubuce.",
      "Ku yi atisayen ƙungiya na sake rubuta kalmomin tausayi zuwa kalmomin da ke fara ambaton mutum.",
      "Ku kawo takardar izinin ƙungiyar don masu koyo su kwatanta kowane nau'i da abin da aka yarda da shi.",
      "Ku tunatar da masu koyo su tambayi daraktansu kafin su ba da labarin mutanen da za a iya jefa su cikin haɗari.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

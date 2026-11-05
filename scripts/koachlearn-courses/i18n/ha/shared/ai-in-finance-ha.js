"use strict";

// Koach Learn course, Hausa (ha) translation of shared/ai-in-finance.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "ai-in-finance-ha",
  lang: "ha",
  translationOf: "ai-in-finance",
  category: "Small Business",
  name: "AI a Harkokin Kuɗi",
  skills: "Kiyaye bayanan kuɗi lafiya yayin amfani da AI, Rarraba kuɗin shiga da kashe-kashe, Yin kasafin kuɗi na wata, Kwatanta kasafi da abin da ya faru, Hasashen zirga-zirgar kuɗi, Bayanin lambobi",
  outcome: "amfani da mataimakin AI da spreadsheet don rarraba kuɗin shiga da kashe-kashen wata ɗaya, yin kasafin kuɗi ku kwatanta shi da abin da ya faru da gaske, yin hasashen zirga-zirgar kuɗi na makonni 13, da bayanin sakamakon da kalmomi masu sauƙi, ba tare da bayyana bayanan kuɗi na sirri ba.",
  about: [
    "Tambayoyin kuɗi suna hana masu kasuwanci da shugabannin ƙungiyoyin sa-kai barci: Za mu iya biyan albashi? Ina kuɗin suka tafi? Za mu iya ɗaukar sabon ma'aikaci ko fara sabon shiri? Kayan AI za su iya taimaka muku tsara lambobi, gina spreadsheet da bayanin ma'anarsu.",
    "Wannan kwas na masu ƙananan kasuwanci ne, daraktocin ƙungiyoyin sa-kai, ma'ajin kuɗi (treasurer) da masu koyon aikin lissafin kuɗi (bookkeeping). Misalai sun haɗa da motar sayar da abinci, kamfanin share-share, ƙungiyar sa-kai ta wasanni ga matasa, da hidimar abinci ta coci.",
    "Za ku yi amfani da kayan kyauta kamar Google Sheets ko Excel tare da ChatGPT, Microsoft Copilot ko Google Gemini. Za ku yi atisaye da lambobin misali ko waɗanda aka tsabtace, ba lambobin asusu ba. Kowane darasi yana ɗaukar kusan minti biyar tare da aikin \"Gwada yanzu\", gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Wannan kwas ba shawarar haraji, doka ko zuba jari ba ne; don waɗannan, ku ga ƙwararre mai lasisi da irs.gov."
  ],
  finalTask: "Ta amfani da ma'amaloli na wata ɗaya na gaske ko na misali, da aka cire duk lambobin asusu da sunaye, ku gina spreadsheet da ke rarraba kuɗin shiga da kashe-kashe zuwa rukunoni, teburin kasafi da abin da ya faru tare da bayanin bambance-bambance uku mafi girma, da hasashen zirga-zirgar kuɗi na makonni 13 inda aka yi alama a mako mafi ƙaranci. Sannan ku rubuta bayanin kuɗi mai jimloli biyar da kalmomi masu sauƙi ga mai kasuwanci, abokin kasuwanci ko kwamitin gudanarwa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu ƙananan kasuwanci, masu lissafin kuɗi (bookkeeper), manajojin ofis, da ma'ajin kuɗi ko ma'aikatan ƙungiyoyin sa-kai da ke kula da kuɗi amma ba ƙwararrun akawu ba ne.",
    startingPoint: "Suna iya karanta bayanin asusun banki (bank statement) da amfani da waya ko kwamfuta; wasu suna ajiye bayanai a spreadsheet ko manhajar lissafin kuɗi. Kaɗan ne ke yin kasafin kuɗi, hasashen zirga-zirgar kuɗi ko dabarun lissafi (formula), kuma da yawa ba su taɓa amfani da AI lafiya don ayyukan kuɗi ba.",
    gap: "Ƙananan ƙungiyoyi da yawa suna gano matsalar kuɗi a makare, ba sa ganin cajin da aka maimaita ko zamba, kuma suna fama wajen bayanin lambobinsu ga abokan kasuwanci ko kwamitin gudanarwa. Masu koyo suna buƙatar amfani da AI da spreadsheet don rarrabawa, tsarawa, hasashe da bayanin kuɗi, yayin da suke hana bayanan kuɗi na sirri shiga kayan AI kuma suna duba kowace lamba.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi; ana bayanin kalmomin kuɗi a karon farko",
      "Na'urori: kwamfuta ta fi kyau don spreadsheet; wannan aiki yana da wuya a waya",
      "Sirri: babu lambar asusu, routing, kati, Social Security ko lambar haraji (tax ID), kalmomin sirri ko sunayen mutane a kayan AI",
      "Babu shawarar haraji, albashi, doka ko zuba jari: ku tabbatar a irs.gov, hukumar harajin jiha ko ƙwararre mai lasisi",
      "Lokaci: darussa na minti 5, kusan minti 60 gaba ɗaya da ƙarin lokacin gina spreadsheet"
    ],
    prerequisites: "Babu. Ɗan atisayen spreadsheet (rubutu a cikin cell, SUM mai sauƙi) zai taimaka."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku ma'amaloli na wata ɗaya da aka fitar daga banki", action: "shirya bayanan don AI ta hanyar cire lambobin asusu da maye gurbin sunaye da alamomi", standard: "ba tare da wani bayanin kuɗi na sirri ya rage ba, kuma an duba lissafin AI a spreadsheet" },
    { id: "O2", condition: "Idan kuna da ma'amalolinku da aka tsabtace da jerin rukunoni", action: "sanya kowace ma'amala a rukuni da haɗa jimlar kowane rukuni da SUMIF", standard: "ta yadda jimlolin rukunoni suka yi daidai da cikakkiyar jimla" },
    { id: "O3", condition: "Idan kuna da kasafin kuɗi na wata da jimlolin abin da ya faru", action: "yin teburin kasafi da abin da ya faru tare da bambanci (variance) da kashi nawa aka kauce", standard: "tare da bayanin bambance-bambance uku mafi girma, kowanne a jimla ɗaya" },
    { id: "O4", condition: "Idan kuna da kuɗin da ke hannu yau da kuɗin da ake sa ran shigowa da fita", action: "gina hasashen zirga-zirgar kuɗi na makonni 13 da yin alama a mako mafi ƙaranci", standard: "inda kuɗin ƙarshen kowane mako ke komawa farkon mako na gaba" },
    { id: "O5", condition: "Idan kuna da ma'amaloli na wata ɗaya da aka tsabtace da buƙatun biyan kuɗi", action: "gane biyan kuɗin da aka maimaita, kashe-kashen da ba a saba gani ba, da zambar biyan kuɗi", standard: "tare da tabbatar da duk wani canjin bayanan banki ta kiran lambar da kuka riga kuka sani" },
    { id: "O6", condition: "Idan kuna da sakamakon spreadsheet ɗinku", action: "rubuta bayanin kuɗi mai jimloli biyar da kalmomi masu sauƙi da tsara tsawon lokacin ajiye takardu", standard: "inda aka duba kowace lamba da spreadsheet" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsara kuɗi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Amfani da AI a harkokin kuɗi lafiya",
          minutes: 5,
          goal: "Shirya bayanan kuɗi don ku sami taimakon AI ba tare da bayyana bayanan sirri ba.",
          text: [
            "Mataimakan AI suna da kyau wajen dabarun lissafi na spreadsheet (formula), rarrabawa, gano tsari da bayanin kalmomi kamar \"accrual\" ko \"gross margin\". Su ba akawu ba ne, suna iya yin kuskuren lissafi, kuma ba su san dokokin haraji na ainihin halin da kuke ciki ba.",
            "Kada ku taɓa liƙa lambobin banki ko kati, lambobin routing, kalmomin sirri, lambobin Social Security ko na haraji (tax ID), ko sunayen kwastomomi, masu ba da gudummawa ko ma'aikata a kayan AI na gama-gari. A maimakon haka, ku fitar da ma'amaloli zuwa spreadsheet, ku goge waɗannan ginshiƙai (column), ku maye gurbin sunaye da alamomi na gama-gari kamar \"Kwastoma A\" ko \"Mai kawo kaya 1\".",
            "Ku duba lissafin AI da spreadsheet ɗin kansa. Ku nemi AI ya ba ku formula, sannan ku bar spreadsheet ya yi lissafin, ku kuma duba wasu jimloli da hannu. Don tambayoyin haraji, albashi da doka, ku tabbatar a irs.gov, hukumar harajin jiharku ko akawu mai lasisi."
          ],
          steps: ["Ku fitar da ma'amaloli daga bankinku ko manhajar lissafi zuwa spreadsheet.", "Ku goge lambobin asusu da duk wata lambar shaida.", "Ku maye gurbin sunayen mutane da alamomi kamar \"Kwastoma A\".", "Ku yi amfani da AI don formula da bayani, ba don amsar haraji ta ƙarshe ba.", "Ku duba lissafin AI da spreadsheet."],
          words: [["Fitarwa (export)", "ajiye bayanai daga wani shiri zuwa fayil da wani shiri zai iya buɗewa."], ["Ma'amala (transaction)", "motsin kuɗi ɗaya, shiga ko fita, kamar sayarwa ko biyan wani bil."]],
          slides: [
            { title: "AI yana da kyau wajen", bullets: ["Formula na spreadsheet da rarrabawa", "Gano tsari", "Bayanin kalmomin kuɗi"] },
            { title: "Kada ku taɓa liƙawa a AI", bullets: ["Lambobin banki, kati ko routing", "Kalmomin sirri, lambobin SSN da na haraji", "Sunayen kwastomomi, masu gudummawa ko ma'aikata"] },
            { title: "Ku tsabtace, sannan ku duba", bullets: ["Ku goge lambobi, ku sa alamomi a sunaye", "Ku bar spreadsheet ya yi lissafi", "Tambayoyin haraji: irs.gov ko akawu"] }
          ],
          tryIt: "Ku fitar ko ku rubuta ma'amaloli 20 daga wata na gaske ko na misali a spreadsheet. Ku cire kowace lambar asusu, ku maye gurbin sunaye da alamomi.",
          youCanNow: "shirya bayanan kuɗi don taimakon AI ba tare da bayyana bayanan sirri ba.",
          quickCheck: [
            { objective: "O1", q: "Wane ginshiƙi (column) ya kamata ku goge kafin ku liƙa ma'amaloli a kayan AI?", options: ["Kwanan wata", "Adadin kuɗi", "Bayanin abin da aka saya", "Lambar asusu"], answer: 3, why: "Lambobin asusu na sirri ne, kuma kada su taɓa shiga kayan AI na gama-gari." },
            { objective: "O1", q: "Ma'amalolinku suna da sunan wata kwastoma \"Maria Lopez\". Me za ku yi kafin ku nemi taimakon AI?", options: ["Ku bar sunan; AI yana ajiye shi a sirri", "Ku maye gurbinsa da alama kamar \"Kwastoma A\"", "Ku ƙara lambar wayarta ma", "Ku goge dukan ma'amalar"], answer: 1, why: "Maye gurbin sunaye da alamomi yana kare sirri, kuma AI yana iya taimakawa har yanzu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rarraba kuɗin shiga da kashe-kashe zuwa rukunoni",
          minutes: 5,
          goal: "Ku yi amfani da AI don shawarar rukunoni, da spreadsheet don haɗa jimlar kowanne.",
          text: [
            "Rukunoni suna mayar da dogon jerin ma'amaloli zuwa hoto mai sauƙin fahimta. Rukunonin kasuwanci da aka saba: tallace-tallace, kuɗin kayan da ake sayarwa (sinadarai, kayan yin kaya), haya, albashi, talla, manhajoji (software), mota da mai, inshora da kuɗaɗen caji. Ƙungiyoyin sa-kai sau da yawa suna ƙara gudummawa, tallafi (grant), kuɗin shirye-shirye da kuɗin neman gudummawa.",
            "Ku liƙa ginshiƙan bayani da adadin kuɗi da aka tsabtace a mataimakin AI ku tambaya: \"Ka ba da shawarar rukuni ga kowane layi daga wannan jerin: [rukunoninku]. Ka mayar da tebur.\" Sannan ku kwafi teburin zuwa takardarku ku gyara duk wanda ya yi kuskure.",
            "Ku nemi AI ya ba ku formula don haɗa jimlar kowane rukuni. A Google Sheets da Excel duka, SUMIF yana haɗa adadin kuɗin da suka dace da wata alama, misali =SUMIF(C:C, \"Rent\", D:D)."
          ],
          steps: ["Ku rubuta jerin rukunoninku.", "Ku nemi AI ya ba da shawarar rukuni ga kowace ma'amala da aka tsabtace.", "Ku liƙa rukunonin a takardarku ku gyara kurakurai.", "Ku yi amfani da SUMIF don haɗa jimlar kowane rukuni.", "Ku duba cewa jimlolin rukunoni sun yi daidai da cikakkiyar jimla."],
          words: [["Rukuni (category)", "ƙungiyar ma'amaloli masu kama da juna, kamar haya ko talla."], ["SUMIF", "formula na spreadsheet da ke haɗa adadin kuɗin da suka dace da wani sharaɗi."], ["Kuɗin kaya (cost of goods)", "abin da kuke kashewa don yin ko sayen kayan da kuke sayarwa."]],
          slides: [
            { title: "Rukunonin da aka saba", bullets: ["Tallace-tallace, kuɗin kaya, haya, albashi", "Talla, manhajoji, mai, inshora", "Ƙungiyoyin sa-kai: gudummawa, tallafi, shirye-shirye"] },
            { title: "AI ya ba da shawara, ku gyara", bullets: ["Ku liƙa bayani da adadin kuɗi da aka tsabtace", "Ku nemi rukuni daga jerinku", "Ku gyara waɗanda ya yi kuskure"] },
            { title: "Jimla da SUMIF", bullets: ["=SUMIF(C:C, \"Rent\", D:D)", "Jimlolin rukunoni dole su yi daidai da cikakkiyar jimla"] }
          ],
          tryIt: "Ku bar AI ya ba da shawarar rukunoni ga ma'amalolinku 20 da aka tsabtace, ku gyara su, ku haɗa jimlar kowane rukuni da SUMIF. Ku tabbatar jimlolin sun yi daidai da babbar jimla.",
          youCanNow: "rarraba ma'amaloli zuwa rukunoni da haɗa jimlarsu da formula na spreadsheet.",
          quickCheck: [
            { objective: "O2", q: "Me SUMIF yake yi a spreadsheet?", options: ["Yana haɗa adadin kuɗin da suka dace da wata alama", "Yana jera layuka bisa kwanan wata", "Yana goge cell marasa komai", "Yana ƙirga yawan ginshiƙai"], answer: 0, why: "SUMIF yana haɗa adadin kuɗin da alamarsu ta dace, kamar duk layukan haya (Rent)." },
            { objective: "O2", q: "Jimlolin rukunoninku sun kai $4,800, amma cikakkiyar jimla $5,000 ce. Me za ku yi?", options: ["Ku ƙyale bambancin", "Ku canja cikakkiyar jimla zuwa $4,800", "Ku nemo ma'amalolin da ba su da rukuni ko suke da alama mara daidai", "Ku nemi AI ya sa lambobin su yi daidai"], answer: 2, why: "Jimlolin rukunoni ya kamata su yi daidai da cikakkiyar jimla, don haka ku nemo layukan da suka ɓace ko aka yi musu alama ba daidai ba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Yin kasafin kuɗi da kwatanta shi da abin da ya faru",
          minutes: 6,
          goal: "Ku yi kasafin kuɗi na wata da teburin kasafi da abin da ya faru da ke nuna inda kuka kauce.",
          text: [
            "Kasafin kuɗi (budget) shi ne shirinku na kuɗin da zai shigo da wanda zai fita a wani lokaci. Kasafi da abin da ya faru (budget versus actual) yana kwatanta shirin da abin da ya faru da gaske. Bambancin ana kiransa variance.",
            "Ku shirya ginshiƙai: rukuni, kasafi, abin da ya faru, bambanci (abin da ya faru a cire kasafi) da kashi nawa aka kauce. Ku tambayi AI: \"Ka ba ni formula na Google Sheets don variance da kashin variance.\" Sannan ku nemo bambance-bambance mafi girma, a dala da a kashi.",
            "Ku bayyana kowane babban bambanci a jimla ɗaya. \"Mai ya wuce kasafi da $300 domin mun ƙara hanyar kai kaya ta biyu.\" AI zai iya taimaka muku wajen tsara kalmomin bayani, amma ku kaɗai kuka san ainihin dalilai."
          ],
          steps: ["Ku jera rukunoni tare da adadin kasafi na kowanne.", "Ku kawo jimlolin abin da ya faru daga Darasi na 2.", "Ku ƙara bambanci = abin da ya faru a cire kasafi.", "Ku ƙara kashi nawa aka kauce = bambanci a raba da kasafi.", "Ku bayyana bambance-bambance uku mafi girma, kowanne a jimla ɗaya."],
          words: [["Kasafin kuɗi (budget)", "shirin kuɗin da ke shigowa da wanda ke fita."], ["Bambanci (variance)", "bambanci tsakanin kasafi da abin da ya faru da gaske."]],
          slides: [
            { title: "Kasafi da abin da ya faru", bullets: ["Kasafi: shirin", "Abin da ya faru: abin da ya auku da gaske", "Variance: bambancin"] },
            { title: "Ku shirya teburin", bullets: ["Rukuni, kasafi, abin da ya faru", "Bambanci da kashi nawa aka kauce"] },
            { title: "Ku bayyana manyan", bullets: ["Bambance-bambance uku mafi girma", "Jimla ɗaya ga kowanne da ainihin dalili"] }
          ],
          tryIt: "Ku gina teburin kasafi da abin da ya faru na watanku tare da bambanci da kashi nawa aka kauce. Ku bayyana bambance-bambance uku mafi girma, kowanne a jimla ɗaya.",
          youCanNow: "yin kasafin kuɗi, kwatanta shi da ainihin sakamako da bayanin bambance-bambancen.",
          quickCheck: [
            { objective: "O3", q: "A kasafi da abin da ya faru, yaya ake lissafin bambanci (variance) a wannan kwas?", options: ["Kasafi a haɗa da abin da ya faru", "Kasafi a raba da abin da ya faru", "Abin da ya faru a cire kasafi", "Abin da ya faru a ninka da kasafi"], answer: 2, why: "Bambanci shi ne abin da ya faru a cire kasafi." },
            { objective: "O3", q: "Kayan aiki sun wuce kasafi da $200. AI ya ce \"farashi ya tashi\", amma kun san kun sayi ƙari don wani taro. Me za ku rubuta?", options: ["Ainihin dalili: an sayi ƙarin kaya don taron", "Dalilin AI, tunda yana kama da daidai", "Ba dalili ko kaɗan", "Cewa kasafin ne ba daidai ba"], answer: 0, why: "Ku kaɗai kuka san ainihin dalili; AI zai iya taimakawa da kalmomi, ba da gaskiyar abin da ya faru ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsara kuɗi",
        questions: [
          { objective: "O1", q: "Wanne ne kada ku TAƁA liƙawa a kayan AI na gama-gari?", options: ["Jerin rukunoni", "Teburin adadin kuɗi da aka tsabtace", "Lambobin asusun bankinku da na routing", "Tambaya game da ma'anar \"variance\""], answer: 2, why: "Lambobin asusu bayanan kuɗi ne na sirri." },
          { objective: "O1", q: "AI ya ba da jimla da ke kama da ba daidai ba. Me ya kamata ku yi?", options: ["Ku bar spreadsheet ya yi lissafi ku duba da hannu", "Ku amince da AI", "Ku goge bayanan", "Ku tura ta ga kwamitin gudanarwa"], answer: 0, why: "AI yana iya yin kuskuren lissafi; spreadsheet da dubawa da hannu suna tabbatarwa." },
          { objective: "O2", q: "Me =SUMIF(C:C, \"Rent\", D:D) yake yi?", options: ["Yana goge layukan haya", "Yana ƙirga kwastomomi", "Yana jera bisa kwanan wata", "Yana haɗa adadin kuɗin ginshiƙin D inda ginshiƙin C ya ce Rent"], answer: 3, why: "SUMIF yana haɗa adadin kuɗin da suka dace da wani sharaɗi." },
          { objective: "O3", q: "Kasafin mai $500 ne; abin da ya faru $800. Mene ne bambancin?", options: ["$1,300", "Ya wuce da $300", "Ya gaza da $300", "$500"], answer: 1, why: "Abin da ya faru a cire kasafi = 800 - 500 = ya wuce da 300." },
          { objective: "O3", q: "Wane ne ya kamata ya bayyana dalilin da yasa bambanci ya faru?", options: ["AI shi kaɗai", "Ku, ta amfani da abin da ya faru da gaske", "Babu kowa", "Wani shafin intanet na kawai"], answer: 1, why: "Ku kaɗai kuka san ainihin dalilan da ke bayan lambobin." }
        ]
      }
    },
    {
      name: "Babi na 2: Tsara gaba da bayani",
      lessons: [
        {
          objectives: ["O4"],
          title: "Hasashen zirga-zirgar kuɗi na makonni 13 masu zuwa",
          minutes: 6,
          goal: "Ku gina hasashen zirga-zirgar kuɗi na makonni 13 ku gano makon da kuɗi zai fi ƙaranci.",
          text: [
            "Riba da kuɗin hannu ba ɗaya ba ne. Kuna iya samun riba a takarda amma kuɗin hannu ya ƙare idan kwastomomi sun biya a makare ko wani babban bil ya zo. Hasashen zirga-zirgar kuɗi (cash flow forecast) yana nuna lokacin da kuɗi ke shigowa da fita, mako bayan mako.",
            "Hasashen makonni 13 (kusan watanni uku) kayan aiki ne da aka saba. Layuka: kuɗin farko, kuɗin shiga (tallace-tallace, biyan kuɗi, gudummawa, tallafi), kuɗin fita (albashi, haya, masu kawo kaya, biyan bashi), da kuɗin ƙarshe. Kuɗin ƙarshen kowane mako ya zama kuɗin farkon mako na gaba.",
            "Ku nemi AI ya gina samfurin: \"Ka yi teburin hasashen zirga-zirgar kuɗi na makonni 13 don Google Sheets da formula inda kuɗin ƙarshen kowane mako ya zama kuɗin farkon mako na gaba.\" Ku cika lambobin da kuke sa rai, sannan ku nemo mako mafi ƙaranci. A lokacin ne za ku iya buƙatar jinkirta wani saye, bin bashin wani biya, ko shirya line of credit (bashin da banki ke ajiye muku)."
          ],
          steps: ["Ku nemi AI samfurin zirga-zirgar kuɗi na makonni 13 da formula.", "Ku shigar da kuɗin da ke hannu yau a matsayin kuɗin farkon mako na 1.", "Ku shigar da kuɗin shiga da na fita da kuke sa rai na kowane mako.", "Ku duba cewa kuɗin ƙarshe yana komawa mako na gaba.", "Ku yi alama a mako mafi ƙaranci ku shirya masa."],
          words: [["Zirga-zirgar kuɗi (cash flow)", "lokacin da kuɗi ke shigowa da fita."], ["Hasashe (forecast)", "mafi kyawun ƙiyasin lambobin nan gaba."], ["Line of credit", "adadin kuɗin da banki ya amince ya ba ku bashi idan kuna buƙata."]],
          slides: [
            { title: "Riba ba kuɗin hannu ba ce", bullets: ["Biyan kuɗi a makare da manyan bil", "Kuɗi zai iya ƙare muku duk da kuna samun riba"] },
            { title: "Layukan hasashen makonni 13", bullets: ["Kuɗin farko", "Kuɗin shiga da kuɗin fita", "Kuɗin ƙarshe yana komawa mako na gaba"] },
            { title: "Ku nemo mako mafi ƙaranci", bullets: ["Ku jinkirta wani saye", "Ku bi bashin wani biya", "Ku shirya samun kuɗi da wuri"] }
          ],
          tryIt: "Ku gina hasashen zirga-zirgar kuɗi na makonni 13 da taimakon AI. Ku cika lambobi na gaske ko na misali, ku yi alama a mako mafi ƙaranci tare da mataki ɗaya da za ku ɗauka.",
          youCanNow: "gina hasashen zirga-zirgar kuɗi na makonni 13 da shirya wa makon da kuɗi zai fi ƙaranci.",
          quickCheck: [
            { objective: "O4", q: "Me hasashen zirga-zirgar kuɗi yake nunawa?", options: ["Ribarku ta bara", "Lokacin da kuɗi ke shigowa da fita, mako bayan mako", "Makin bashinku (credit score)", "Kuɗin harajinku"], answer: 1, why: "Hasashen zirga-zirgar kuɗi yana nuna kuɗin shiga da fita mako bayan mako." },
            { objective: "O4", q: "Hasashenku ya nuna kuɗi ya gaza sifili a mako na 7. Me za ku iya yi?", options: ["Babu komai; hasashe ne kawai", "Ku ɓoye mako na 7 daga kwamitin gudanarwa", "Ku ƙara kashewa a mako na 6", "Ku jinkirta wani saye, ku bi bashin wani biya, ko ku shirya line of credit"], answer: 3, why: "Mako mafi ƙaranci shi ne lokacin da za ku shirya tun da wuri don cike giɓin." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gano matsaloli da zamba da taimakon AI",
          minutes: 5,
          goal: "Ku yi amfani da AI da dubawa masu sauƙi don gano kashe-kashen da ba a saba gani ba, maimaitattun biyan kuɗi da zamba.",
          text: [
            "AI da spreadsheet za su iya nuna abubuwan da mutum mai yawan aiki zai iya kasa gani: biyan kuɗi da aka maimaita, wani biyan wata-wata (subscription) da kuka manta, tashin gwauron zabi a wani rukuni, ko mai kawo kaya da ba ku sani ba.",
            "Ku tambaya: \"Ka duba wannan tebur da aka tsabtace. Ka jera biyan kuɗin da wataƙila an maimaita, adadin da ba a saba gani ba, da rukunonin da suka canja sosai daga watan jiya.\" Sannan ku bincika kowane abu da kanku.",
            "Ku kula da zambar da ake yi wa kasuwanci da ƙungiyoyin sa-kai: bil na bogi (invoice), imel da ke neman ku canja bayanan bankin mai kawo kaya, da buƙatun biyan kuɗi na gaggawa da suke kama da daga shugaba suka fito. Koyaushe ku tabbatar ta kiran lambar wayar da kuka riga kuka sani. Ku kai rahoton zamba a ReportFraud.ftc.gov (shafin hukumar FTC ta Amurka)."
          ],
          steps: ["Ku nemi AI ya jera biyan kuɗin da wataƙila an maimaita da adadin da ba a saba gani ba.", "Ku kwatanta rukunoni da watan jiya.", "Ku bincika kowace alamar gargaɗi da kanku.", "Ku tabbatar da duk wani canjin bayanan banki ta kiran lambar da kuka sani.", "Ku kai rahoton zamba ga FTC."],
          words: [["Biyan kuɗi da aka maimaita", "biyan bil ɗaya sau biyu."], ["Invoice", "bil da ke neman a biya kuɗi."], ["Zambar biyan kuɗi", "yaudarar wani ya tura kuɗi zuwa wurin da ba daidai ba."]],
          slides: [
            { title: "Abin da AI zai iya nunawa", bullets: ["Biyan kuɗi da aka maimaita", "Subscription da aka manta", "Tashin gaggawa ko masu kawo kaya da ba a sani ba"] },
            { title: "Zambar da ake yi wa kasuwanci", bullets: ["Invoice na bogi", "\"Don Allah ku sabunta bayanan bankinmu\"", "Buƙatun gaggawa da suke kama da daga shugaba"] },
            { title: "Ku kare kuɗin", bullets: ["Ku kira lambar da kuka riga kuka sani", "Ku bincika kowace alamar gargaɗi", "Ku kai rahoto a ReportFraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: ReportFraud.ftc.gov (kai rahoton zamba)", url: "https://reportfraud.ftc.gov/" }, { name: "FTC: Yadda ake gane da guje wa zambar phishing", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" }],
          tryIt: "Ku nemi AI ya duba ma'amalolinku da aka tsabtace don biyan kuɗi da aka maimaita da adadin da ba a saba gani ba. Ku bincika kowace alamar gargaɗi ku rubuta abin da kuka gano.",
          youCanNow: "amfani da AI da dubawa masu sauƙi don gano kashe-kashen da ba a saba gani ba da zambar biyan kuɗi.",
          quickCheck: [
            { objective: "O5", q: "Wace ce zambar da aka saba yi wa kasuwanci da ƙungiyoyin sa-kai?", options: ["Kwastoma da ke biya a kan lokaci", "Biyan haya na wata-wata", "Bayanin asusun banki da ya zo ta wasiƙa", "Imel da ke neman ku canja bayanan bankin mai kawo kaya"], answer: 3, why: "Buƙatar canja bayanan bankin mai kawo kaya zamba ce da aka saba gani." },
            { objective: "O5", q: "AI ya nuna biyan kuɗi biyu masu daidai adadi ga mai kawo kaya ɗaya a rana ɗaya. Me za ku yi?", options: ["Ku ɗauka AI ya yi daidai ku soke duka biyun", "Ku bincika da kanku, kamar duba invoice ɗin", "Ku ƙyale shi", "Ku biya mai kawo kayan sau na uku"], answer: 1, why: "AI yana nuna matsalolin da wataƙila akwai; ku ne kuke bincika kowanne da kanku." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Bayanin lambobi da ajiye takardu da kyau",
          minutes: 5,
          goal: "Ku rubuta bayanin kuɗi da kalmomi masu sauƙi ku san tsawon lokacin da za ku ajiye takardu.",
          text: [
            "Masu kasuwanci, abokan kasuwanci da kwamitocin gudanarwa suna buƙatar gajeren bayani a sarari, ba babban spreadsheet ba. Bayani mai kyau yana da jimloli biyar: nawa ya shigo, nawa ya fita, bambanci mafi girma da dalilinsa, yanayin kuɗi na gaba daga hasashenku, da shawara ko mataki ɗaya da ake buƙata.",
            "Ku nemi AI ya mayar da lambobinku daftari, sannan ku duba kowace lamba da spreadsheet. Ku cire duk abin da AI ya ƙara wanda ba gaskiya ba ne.",
            "Ku ajiye takardu. Hukumar haraji ta Amurka (IRS) ta ce a ajiye takardun da ke tabbatar da kuɗin shiga da ragin haraji (deduction) har sai lokacin iyaka (period of limitations) na wannan takardar haraji ya ƙare, gabaɗaya shekaru 3, da lokaci mafi tsawo a wasu yanayi, kuma aƙalla shekaru 4 don takardun harajin ma'aikata. Ku duba irs.gov ko akawu don halin da kuke ciki."
          ],
          steps: ["Ku rubuta jimloli biyar: shiga, fita, bambanci mafi girma, yanayin kuɗi na gaba, shawarar da ake buƙata.", "Ku bar AI ya gyara kalmomin.", "Ku duba kowace lamba da spreadsheet.", "Ku ajiye spreadsheet da rasit a babban fayil (folder) mai aminci da ke da ajiyar kwafi.", "Ku duba irs.gov don tsawon lokacin ajiye su."],
          words: [["Kwamitin gudanarwa (board)", "ƙungiyar mutanen da ke kula da ƙungiyar sa-kai ko kamfani."], ["Lokacin iyaka (period of limitations)", "lokacin da IRS take da shi don duba ko canja takardar haraji."]],
          slides: [
            { title: "Bayani mai jimloli biyar", bullets: ["Kuɗin shiga da kuɗin fita", "Bambanci mafi girma da dalilinsa", "Yanayin kuɗi na gaba da shawarar da ake buƙata"] },
            { title: "AI ya rubuta daftari, ku tabbatar", bullets: ["Ku duba kowace lamba", "Ku cire duk abin da ba gaskiya ba ne"] },
            { title: "Ajiye takardu (IRS)", bullets: ["Gabaɗaya shekaru 3; fiye da haka a wasu yanayi", "Aƙalla shekaru 4 don takardun harajin ma'aikata", "Ku duba irs.gov ko akawu"] }
          ],
          sources: [{ name: "IRS: Har yaushe zan ajiye takardu? (How long should I keep records?)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records" }],
          tryIt: "Aikin ƙarshe: ku rubuta bayanin kuɗi mai jimloli biyar daga watanku da aka rarraba, teburin kasafi da abin da ya faru, da hasashen makonni 13. Ku duba kowace lamba, sannan ku ajiye dukkan fayiloli a babban fayil mai ajiyar kwafi.",
          youCanNow: "tsarawa, shiryawa da bayanin kuɗin ƙungiya da taimakon AI yayin da kuke kiyaye bayanai lafiya.",
          quickCheck: [
            { objective: "O6", q: "Wanne ya kamata ya kasance a bayanin kuɗi mai jimloli biyar?", options: ["Yanayin kuɗi na gaba daga hasashenku", "Kowace ma'amala ta watan", "Lambobin asusun banki", "Adireshin gidajen ma'aikata"], answer: 0, why: "Bayanin ya ƙunshi shiga, fita, bambanci mafi girma, yanayin kuɗi na gaba da shawarar da ake buƙata." },
            { objective: "O6", q: "Daftarin AI ya ce kuɗin shiga ya ƙaru da 20%, amma takardarku ta nuna 12%. Me za ku yi?", options: ["Ku aika; ya kusa", "Ku mayar da shi 15%", "Ku gyara shi ya yi daidai da spreadsheet kafin ku aika", "Ku cire dukkan lambobi"], answer: 2, why: "Ku duba kowace lamba da spreadsheet ku cire duk abin da ba gaskiya ba ne." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Tsara gaba da bayani",
        questions: [
          { objective: "O4", q: "Me yasa kasuwanci mai riba zai iya ƙarewa da kuɗin hannu?", options: ["Riba koyaushe daidai take da kuɗin hannu", "Bankuna suna riƙe dukan riba", "Ba zai iya faruwa ba", "Biyan kuɗi yana zuwa a makare yayin da bil suke zuwa"], answer: 3, why: "Lokacin shigowa da fitar kuɗi yana da muhimmanci." },
          { objective: "O4", q: "A hasashen zirga-zirgar kuɗi, kuɗin farkon mako mai zuwa daidai yake da:", options: ["Kuɗin ƙarshen wannan makon", "Ribar bara", "Kasafin kuɗi", "Sifili"], answer: 0, why: "Kowane mako yana komawa na gaba." },
          { objective: "O5", q: "Imel daga mai kawo kaya yana neman ku tura biyan kuɗi na gaba zuwa sabon asusun banki. Me za ku yi?", options: ["Ku sabunta shi nan take", "Ku mayar da amsa da bayanan shiga bankinku", "Ku kira mai kawo kayan ta lambar da kuka riga kuka sani don tabbatarwa", "Ku tura shi ga dukan ma'aikata"], answer: 2, why: "Buƙatun canja bayanan banki zamba ce da aka saba gani." },
          { objective: "O6", q: "Me IRS ta ce shi ne lokacin gabaɗaya na ajiye takardun da ke tabbatar da takardar haraji?", options: ["Mako ɗaya", "Kada a taɓa ajiye su", "Daidai shekaru 50", "Gabaɗaya shekaru 3, fiye da haka a wasu yanayi"], answer: 3, why: "Jagorancin IRS ya ba da shekaru 3 a matsayin lokacin gabaɗaya, tare da wasu keɓancewa." },
          { objective: "O6", q: "AI ya rubuta daftarin bayanin kuɗi ga kwamitin gudanarwa. Me dole ku yi kafin ku aika?", options: ["Ku aika ba tare da karantawa ba", "Ku ƙara lambobi don ya yi kyau", "Ku duba kowace lamba da spreadsheet", "Ku goge spreadsheet"], answer: 2, why: "AI yana iya kuskure a lambobi; ku ne kuke tabbatarwa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI a Harkokin Kuɗi",
    questions: [
      { objective: "O1", q: "Wanne ne AI yake da kyau a kai a aikin kuɗi?", options: ["Ba da hukuncin haraji na ƙarshe", "Rubuta formula na spreadsheet da bayanin kalmomi", "Tabbatar da ribar zuba jari", "Sa hannu a takardun banki"], answer: 1, why: "AI yana taimakawa da formula da bayani, ba da amsoshin haraji ko doka na ƙarshe ba." },
      { objective: "O1", q: "Kafin ku liƙa ma'amaloli a AI, ya kamata ku:", options: ["Cire lambobin asusu ku maye gurbin sunaye da alamomi", "Ƙara kalmar sirrinku", "Saka lambobin wayar masu ba da gudummawa", "Ƙara lambobin Social Security"], answer: 0, why: "Bayanan da aka tsabtace suna kare sirri." },
      { objective: "O1", q: "\"Kwastoma A\" a madadin ainihin suna shi ne:", options: ["Kuskuren rubutu", "Rukuni", "Alama da ke kare sirri", "Bambanci (variance)"], answer: 2, why: "Alamomi suna ɓoye sunaye na sirri." },
      { objective: "O1", q: "A ina ya kamata ku tabbatar da tambayar haraji?", options: ["irs.gov, hukumar harajin jiharku ko akawu mai lasisi", "Wani rubutu a kafofin sada zumunta", "Hirar AI kaɗai", "Hasashen aboki"], answer: 0, why: "Majiyoyin hukuma da ƙwararru suna ba da amsoshin haraji amintattu." },
      { objective: "O2", q: "Wanne ne rukunin kuɗin shiga da aka saba gani a ƙungiyar sa-kai?", options: ["Kuɗin kaya", "Mai", "Haya", "Tallafi (grant)"], answer: 3, why: "Tallafi da gudummawa kuɗin shigar ƙungiyar sa-kai ne." },
      { objective: "O2", q: "Mene ne ma'amala (transaction)?", options: ["Wani nau'in kasafi", "Motsin kuɗi ɗaya, shiga ko fita", "Fom na haraji", "Kalmar sirrin banki"], answer: 1, why: "Kowace sayarwa ko biyan kuɗi ma'amala ce." },
      { objective: "O2", q: "Bayan AI ya ba da shawarar rukunoni, ya kamata ku:", options: ["Karɓe su duka", "Gyara duk wanda ya yi kuskure", "Goge takardar", "Aika su ga kwastomomi ta imel"], answer: 1, why: "Shawarwarin AI suna buƙatar dubawa." },
      { objective: "O2", q: "Jimlolin rukunoni ya kamata su:", options: ["Fi cikakkiyar jimla girma", "Zama ba bisa ƙa'ida ba", "Kasance babu komai", "Yi daidai da cikakkiyar jimla"], answer: 3, why: "Wannan dubawa tana kama layukan da suka ɓace ko aka ƙirga sau biyu." },
      { objective: "O3", q: "Kasafin kuɗi shi ne:", options: ["Shirin kuɗin shiga da na fita", "Asusun banki", "Takardar haraji", "Bashi"], answer: 0, why: "Shi ne shirin kuɗi na wani lokaci." },
      { objective: "O3", q: "Kasafin talla $1,000; abin da ya faru $700. Bambancin shi ne:", options: ["Ya wuce kasafi da $300", "$1,700", "Ya gaza kasafi da $300", "$700"], answer: 2, why: "700 - 1,000 = -300, don haka ya gaza da $300." },
      { objective: "O3", q: "Me yasa za a bayyana kowane babban bambanci?", options: ["Don a tsawaita rahoton", "Ba a taɓa buƙata ba", "Don a ɓoye kurakurai", "Don masu yanke shawara su san abin da ya faru da dalilinsa"], answer: 3, why: "Bayani yana mayar da lambobi zuwa shawarwari." },
      { objective: "O4", q: "Makonni nawa hasashen zirga-zirgar kuɗi na wannan kwas yake ɗauka?", options: ["2", "13", "52", "100"], answer: 1, why: "Hasashen makonni 13 yana ɗaukar kusan watanni uku." },
      { objective: "O4", q: "Mako mafi ƙaranci a hasashenku yana faɗa muku:", options: ["Dukan ribarku", "Lokacin da kuɗi zai fi ƙaranci, don ku shirya", "Kuɗin harajinku", "Babu wani abu mai amfani"], answer: 1, why: "Yana nuna lokacin da za a ɗauki mataki tun da wuri." },
      { objective: "O4", q: "Line of credit shi ne:", options: ["Adadin kuɗin da banki ya amince ya ba ku bashi idan kuna buƙata", "Layi a spreadsheet", "Wani nau'in gudummawa", "Ragin haraji"], answer: 0, why: "Zai iya cike ɗan gajeren giɓin kuɗi." },
      { objective: "O5", q: "Me AI zai iya taimakawa wajen nunawa a ma'amalolinku?", options: ["Cacar da za ku ci nan gaba", "Ainihin harajin da ake bin ku", "Biyan kuɗin da wataƙila an maimaita", "Kalmomin sirrin kwastomomi"], answer: 2, why: "AI zai iya gano tsari kamar biyan kuɗi da aka maimaita." },
      { objective: "O5", q: "Imel na gaggawa da yake kama da daga shugabanku yana neman a tura kuɗi (wire) yau. Ya kamata ku:", options: ["Tabbatar ta waya a lambar da kuka riga kuka sani", "Tura shi nan take", "Mayar da amsa da bayanan banki", "Ƙyale shugaban har abada"], answer: 0, why: "Buƙatun biyan kuɗi na gaggawa zamba ce da aka saba gani." },
      { objective: "O5", q: "A ina za ku iya kai rahoton zamba a Amurka?", options: ["Wani dandalin intanet na kawai", "Imel ɗin ɗan damfarar", "Babu inda", "ReportFraud.ftc.gov"], answer: 3, why: "Hukumar FTC tana karɓar rahotannin zamba." },
      { objective: "O6", q: "Bayanin kuɗi mai kyau ga kwamitin gudanarwa shi ne:", options: ["Spreadsheet kawai kamar yadda yake", "Jimloli biyar a sarari tare da muhimman lambobi da shawara", "Rahoto mai shafuka 40", "Babu lambobi ko kaɗan"], answer: 1, why: "Gajere kuma a sarari yana taimaka wa mutane su yanke shawara." },
      { objective: "O6", q: "A cewar IRS, ya kamata a ajiye takardun harajin ma'aikata aƙalla na tsawon:", options: ["Wata 1", "Shekaru 4", "Shekara 1", "Ba lokaci ko kaɗan"], answer: 1, why: "IRS ta ce aƙalla shekaru 4 don takardun harajin ma'aikata." },
      { objective: "O1", q: "Wannan kwas yana ba da shawarar zuba jari.", options: ["Gaskiya: ku sayi abin da AI ya ba da shawara", "Gaskiya: koyaushe ku zuba kuɗin tallafi a jari", "Gaskiya: AI yana zaɓar hannun jari", "Ƙarya: ku ga ƙwararre mai lasisi don haka"], answer: 3, why: "Kwas ɗin yana koyar da kula da kuɗi, ba shawarar zuba jari ba." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [1, 3, 6, 7, 9, 11, 12, 15, 17, 18]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "An cire bayanan sirri", objective: "O1", notYet: "Bayanan har yanzu suna da lambobin asusu, lambobin shaida ko ainihin sunaye.", meets: "An cire duk lambobin asusu da na shaida, an kuma maye gurbin sunaye da alamomi.", exceeds: "Zai iya nuna yadda aka duba lissafin AI a spreadsheet." },
      { name: "Rukunoni da jimloli", objective: "O2", notYet: "Ba a rarraba ma'amaloli ba, ko jimlolin ba su yi daidai da cikakkiyar jimla ba.", meets: "Kowace ma'amala tana da rukuni, SUMIF ya haɗa jimlar kowanne, kuma sun yi daidai da cikakkiyar jimla.", exceeds: "An gano kuma an gyara rukunonin da AI ya yi kuskure, tare da rubutun waɗanne ne." },
      { name: "Kasafi da abin da ya faru", objective: "O3", notYet: "Babu ginshiƙin bambanci, ko ba a bayyana manyan bambance-bambance ba.", meets: "Bambanci da kashi nawa aka kauce ga kowane rukuni, kuma an bayyana uku mafi girma, kowanne a jimla ɗaya.", exceeds: "Kowane bayani yana faɗin abin da za a yi game da shi a wata mai zuwa." },
      { name: "Hasashen makonni 13", objective: "O4", notYet: "Kuɗin ƙarshe ba ya komawa mako na gaba, ko ba a yi alama a mako mafi ƙaranci ba.", meets: "Makonni 13 da kuɗin shiga, kuɗin fita da kuɗin ƙarshe da ke komawa gaba, kuma an yi alama a mako mafi ƙaranci.", exceeds: "Ya haɗa da shiri don mako mafi ƙaranci." },
      { name: "Bayanin kuɗi", objective: "O6", notYet: "Babu shi, ya fi tsawo fiye da yadda ake buƙata, ko yana da lambobin da ba su yi daidai da takardar ba.", meets: "Jimloli biyar: shiga, fita, bambanci mafi girma, yanayin kuɗi na gaba da shawara, duk sun yi daidai da takardar.", exceeds: "Ya isa a sarari ga wanda ba shi da ilimin harkokin kuɗi, kuma yana faɗin inda ake ajiye takardu." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Ƙungiyoyin da ke sabunta teburin kasafi da abin da ya faru da hasashen makonni 13 kowane wata har tsawon watanni uku (binciken biyo baya)",
      "Cajin da aka maimaita, subscription da aka manta ko zambar da aka kama aka dakatar cikin kwanaki 60",
      "Masu kasuwanci ko kwamitocin gudanarwa da suka ce suna samun bayanin kuɗi a sarari kowane wata"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai Google Sheets ko Excel",
      "Mataimakin AI kyauta (ChatGPT, Microsoft Copilot ko Google Gemini)",
      "Ma'amaloli na wata ɗaya da aka fitar daga banki ko manhajar lissafi, ko bayanan misali na kwas ɗin",
      "Kusan minti 60 don darussa da gwaje-gwaje, da ƙarin lokacin gina spreadsheet"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama; ku gina formula na SUMIF da na hasashe a allon da kowa ke gani.",
      "Ku ba da watan misali na ma'amaloli na ƙirƙira ga masu koyo da ba sa son amfani da bayanai na gaske.",
      "Ku duba cewa kowane mai koyo ya cire lambobin asusu da sunaye kafin ya liƙa komai a AI.",
      "Kada ku ba da shawarar haraji, albashi, doka ko zuba jari; ku tura waɗannan tambayoyi zuwa irs.gov, hukumar harajin jiha ko ƙwararre mai lasisi.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

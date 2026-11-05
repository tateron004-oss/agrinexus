"use strict";

// Koach Learn course, Hausa (ha) translation of shared/bookkeeping-basics.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// Spreadsheet formulas, the tab name "Ledger" and the category word "Supplies" inside formulas stay exactly as in the English.

module.exports = {
  id: "bookkeeping-basics-ha",
  lang: "ha",
  translationOf: "bookkeeping-basics",
  category: "Entrepreneurs",
  name: "Tushen Ajiyar Lissafin Kuɗi",
  skills: "Rubuta kuɗin shiga da na fita, Ajiye rasit, Raba kuɗin kasuwanci da na kai, Gina littafin lissafi a spreadsheet, Duba lissafinku da na banki, Karanta lissafin riba da asara",
  outcome: "ajiye sauƙaƙan littafin lissafi a spreadsheet na kuɗin shiga da na fitar kasuwancinku, tare da rasit da ke tabbatar da su, ku duba shi da bayanin asusun banki ko na mobile money, sannan ku karanta lissafin riba da asara na wata ɗaya don ku ga ko kun sami riba.",
  about: [
    "Wannan kwas ɗin na duk wanda ke gudanar da wani abu da kuɗi ke shiga da fita: mai gyaran gashi, mai sayar da abinci, kasuwancin share-share, coci ko ƙungiyar matasa marar riba (nonprofit), manomi mai sayar da ƙwai ko kayan lambu, ko mai ƙaramin kasuwanci a intanet.",
    "Za ku koyi rubuta kowane ciniki da kowane kashe kuɗi, ajiye rasit da ke tabbatar da su, raba kuɗin kasuwanci da kuɗin kanku, kafa sauƙaƙan littafin lissafi a spreadsheet kyauta, duba shi kowane wata, da karanta lissafin riba da asara mai sauƙi.",
    "Kowane darasi yana ɗaukar kusan minti biyar, kuma yana ƙarewa da aikin \"Gwada yanzu\" da za ku yi da lambobinku ko da misali. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Ajiyar lissafi rikodi ce kawai. Don haraji da tambayoyin shari'a, ku yi magana da akanta ko ƙwararren haraji."
  ],
  finalTask: "Ku kafa littafin lissafi a spreadsheet, ku shigar da cinikayyar kasuwanci ta wata ɗaya, ta gaske ko ta misali (aƙalla 10), kowace da kwanan wata, bayani, rukuni, adadi da lambar rasit. Ku duba littafin da bayanin asusun banki ko na mobile money, sannan ku gina lissafin riba da asara na wata ɗaya da ke nuna jimillar kuɗin shiga, kuɗin fita bisa rukuni, da riba ko asara.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Mutanen da ke gudanar da wani abu da kuɗi ke shiga da fita: masu ƙananan kasuwanci, masu sayarwa a kasuwa, manoma masu sayar da amfanin gona, masu ƙaramin kasuwanci a intanet, da ma'aji (treasurer) na coci ko ƙananan ƙungiyoyi marasa riba. Da yawa suna riƙe lissafin kuɗi a kansu, a akwatin kuɗi, ko a asusun kansu ɗaya.",
    startingPoint: "Suna iya sarrafa kuɗi hannu da hannu, mobile money ko asusun banki, kuma suna iya buɗe waya ko kwamfuta. Kaɗan ne ke ajiye rubutaccen lissafi, kuma da yawa ba su taɓa amfani da formula a spreadsheet ba.",
    gap: "Ba tare da rikodi ba, ba za su iya sanin ko kasuwancin yana samun riba ba, waɗanne kaya ne ke kawo kuɗi, ko abin da za su nuna wa mai ba da bashi, mai ba da tallafi (grant) ko ofishin haraji ba. Sauƙaƙan littafin lissafi da rasit, duba shi da bayanin asusu kowane wata, da lissafin riba da asara na wata ɗaya suna cike wannan giɓi.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; lambobi masu sauƙi",
      "Na'urori: waya ko kwamfutar da ake rabawa mai spreadsheet kyauta (Google Sheets ko Excel)",
      "Lokaci: kusan minti 5 kowane darasi, da atisaye da lambobinsu ko da misali",
      "Sirri: kada a saka lambobin asusun banki ko bayanan sirri na kwastomomi a kayan AI",
      "Dokokin haraji sun bambanta a kowace ƙasa; kwas ɗin yana koyar da ajiyar rikodi, tambayoyin haraji kuma na akanta ne"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da spreadsheet ba za su iya fara ɗaukar kwas ɗin \"Excel and Spreadsheets\" (Excel da Spreadsheet)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku jerin kuɗin da ke shiga da fita daga kasuwanci ko ƙungiya marar riba", action: "gane waɗanne ne kuɗin shiga, waɗanne ne kuɗin fita", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O2", condition: "Idan aka ba ku cinikai da sayayyar mako ɗaya", action: "ajiye rasit, invoice ko takardar cinikin yini mai lamba a matsayin shaida ga kowace ciniki", standard: "ta yadda kowane layi a littafin lissafi yana da lambar rasit da za ku iya nemowa" },
    { id: "O3", condition: "Ta amfani da asusun kasuwanci na daban, till na mobile money ko walat", action: "raba kuɗin kasuwanci da kuɗin kanku, da rubuta abin da kuke ɗauka wa kanku a matsayin owner's draw (cirewar mai kasuwanci)", standard: "ba tare da kashe kuɗin kanku ya shiga cikin rikodin kasuwanci ba" },
    { id: "O4", condition: "Ta amfani da spreadsheet kyauta kamar Google Sheets ko Excel", action: "gina littafin lissafi mai ginshiƙai bakwai, ƙayyadaddun rukunoni da formula na ragowar kuɗi mai gudana (running balance)", standard: "ta yadda ragowar kuɗi tana sabuntawa daidai bayan kowace shigarwa" },
    { id: "O5", condition: "Idan kuna da littafin lissafinku da bayanin asusun banki ko na mobile money na wata ɗaya", action: "daidaita (reconcile) littafin lissafi da bayanin asusun, da gyara duk wani bambanci", standard: "har ragowar kuɗin biyu ta yi daidai, la'akari da kuɗi hannu da hannu da biyan kuɗin da bai wuce ba tukuna" },
    { id: "O6", condition: "Idan kuna da shigarwar littafin lissafi ta wata ɗaya", action: "gina lissafin riba da asara da SUMIF da bayyana abin da yake nunawa", standard: "da jimloli daidai da jimloli biyu na gaskiya game da sakamakon" }
  ],
  chapters: [
    {
      name: "Babi na 1: Ajiye rikodi mai kyau",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne ajiyar lissafi, kuma me yasa yake da muhimmanci",
          minutes: 4,
          goal: "Bayyana abin da ajiyar lissafi ke rubutawa, da faɗin nau'o'in kuɗi biyu da yake bibiya.",
          text: [
            "Ajiyar lissafi (bookkeeping) ita ce rubuta duk lokacin da kuɗi ya shiga ko ya fita daga kasuwancinku, a wuri ɗaya, bi da bi. Ba lissafi mai wuya ba ne. Al'ada ce.",
            "Kuɗin da ke shigowa shi ne kuɗin shiga (income): cinikai, biyan kuɗi daga kwastomomi, kuɗaɗen hidima, kuma ga ƙungiya marar riba, gudummawa da tallafi. Kuɗin da ke fita shi ne kuɗin fita (expenses): kayan aiki, kuɗin haya, mai, iri, waya, talla, albashi.",
            "IRS (hukumar haraji ta Amurka) ta ce rikodi mai kyau yana taimaka muku ku lura da ci gaban kasuwancinku, da shirya takardar harajinku. Yana kuma nuna kuɗaɗen da za ku iya cirewa (deduct). Rikodi mai tsabta yana taimaka muku samun bashi, neman tallafi, amsa tambaya daga ofishin haraji, da ganin waɗanne kaya ko hidimomi ne ke kawo kuɗi da gaske.",
            "Misali: wata mata tana sayar da kayan gasa a kasuwar ƙarshen mako. Tana tsammani tana samun riba domin akwatin kuɗi ya cika. Lokacin da ta rubuta fulawa, man shanu, kwalaye da kuɗin kasuwa, sai ta ga cewa ƙananan kek (cupcakes) suna kawo riba, amma burodi da ƙyar yake rufe kuɗinsa. Yanzu za ta iya yanke abin da za ta gasa."
          ],
          words: [["Ajiyar lissafi (bookkeeping)", "ajiye rubutaccen rikodi na duk kuɗin da ke shiga da fita daga kasuwanci."], ["Kuɗin shiga (income)", "kuɗin da ke shigowa: cinikai, kuɗaɗen hidima, gudummawa, tallafi."], ["Kuɗin fita (expense)", "kuɗin da ake kashewa don gudanar da kasuwanci, kamar kayan aiki, haya da mai."], ["Cirewa (deduct)", "rage kuɗin kasuwanci da aka yarda da shi lokacin da kuke lissafin harajin da ake bin ku."]],
          slides: [
            { title: "Ajiyar lissafi al'ada ce", bullets: ["Ku rubuta duk kuɗin da ya shiga da wanda ya fita", "A wuri ɗaya, bi da bi", "Ba lissafi mai wuya ba ne"] },
            { title: "Nau'o'in kuɗi biyu", bullets: ["Kuɗin shiga: cinikai, kuɗaɗen hidima, gudummawa, tallafi", "Kuɗin fita: kayan aiki, haya, mai, iri, albashi"] },
            { title: "Me yasa yake da muhimmanci", bullets: ["Ku ga yadda kasuwancin ke tafiya da gaske", "Ku shirya haraji ku nuna abin da za a cire", "Ku sami bashi da tallafi; ku amsa tambayoyi"] }
          ],
          sources: [{ name: "IRS: Ajiyar rikodi ga ƙananan kasuwanci (Recordkeeping for small businesses)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }],
          tryIt: "Ku yi tunanin kasuwancinku, ko wanda kuke son farawa. Ku rubuta nau'o'in kuɗin shiga guda biyar, da nau'o'in kuɗin fita guda takwas, da zai samu.",
          youCanNow: "faɗin mene ne ajiyar lissafi, raba kuɗi zuwa kuɗin shiga da kuɗin fita, da bayyana dalilin da yasa rikodi yake da muhimmanci.",
          quickCheck: [
            { objective: "O1", q: "Mene ne ajiyar lissafi?", options: ["Rubuta duk lokacin da kuɗi ya shiga ko ya fita, a wuri ɗaya, bi da bi", "Yin lissafi mai wuya sau ɗaya a shekara", "Cike takardar haraji", "Ƙirga akwatin kuɗi da dare"], answer: 0, why: "Darasin ya ce ajiyar lissafi al'ada ce ta rubuta kowane kuɗin shiga da na fita, bi da bi." },
            { objective: "O1", q: "Wata mai gasa kek tana tsammani tana samun riba domin akwatin kuɗi ya cika. Me zai nuna mata waɗanne kaya ne ke kawo kuɗi da gaske?", options: ["Sake ƙirga kuɗin", "Tambayar kwastomomi abin da suke so", "Rubuta kuɗaɗenta, kamar fulawa, kwalaye da kuɗin kasuwa, kusa da cinikinta", "Ƙara farashin komai"], answer: 2, why: "Rubuta kuɗin fita kusa da cinikai ya nuna cewa ƙananan kek suna kawo riba, burodi kuma da ƙyar yake rufe kuɗinsa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ajiye rasit da sauran shaidu",
          minutes: 5,
          goal: "Kafa sauƙaƙan tsari don ajiye kowane rasit da invoice.",
          text: [
            "Kowace shigarwa a littafin lissafinku ya kamata ta kasance da shaida a bayanta. IRS tana kiran waɗannan takardun tallafi (supporting documents). Ga cinikai, sun haɗa da littattafan rasit, invoice, takardun na'urar kuɗi (register tapes) da rikodin ajiyar kuɗi a banki. Ga sayayya da kuɗin fita, sun haɗa da rasit, invoice, bayanin katin banki da rikodin biyan kuɗi ta hanyar lantarki.",
            "Rasit na takarda suna gogewa kuma suna ɓacewa. Tsari mai sauƙi: ku ɗauki hoton kowane rasit a ranar, ku ba shi lamba, ku ajiye shi a fayil na wannan watan, kamar 2026-10. Ku ajiye takardar a ambulan mai sunan watan ɗaya. Ku rubuta lambar rasit a littafin lissafinku, don ku iya nemo shaidar kowane layi.",
            "Tsawon lokacin ajiye rikodi: IRS ta ce ku ajiye su muddin kuna iya buƙatar tabbatar da kuɗin shiga ko abin da aka cire a takardar haraji. Ga takardun haraji da yawa a Amurka, wannan shekara 3 ne, amma wasu lokuta sun fi tsawo, kamar aƙalla shekara 4 ga rikodin harajin ma'aikata. Ku duba shafin IRS don yanayinku. A wajen Amurka, ku duba hukumar haraji ta ƙasarku, kamar Kenya Revenue Authority, ko ku tambayi akanta.",
            "Ga cinikin kuɗi hannu da hannu ba tare da rasit ba, kamar ƙwan da aka sayar a ƙofar gona, ku rubuta sauƙaƙan takardar cinikin yini: kwanan wata, abin da kuka sayar, guda nawa, da jimilla. Wannan takarda ita ce shaidarku."
          ],
          steps: ["Ku yi fayil ɗaya na kowane wata a waya ko kwamfuta, da ambulan ɗaya na kowane wata don takardu.", "Ku ɗauki hoton kowane rasit a ranar.", "Ku ba kowane rasit lamba ku rubuta ta a kan takardar.", "Ku rubuta cinikin kuɗi hannu da hannu a takardar cinikin yini.", "Ku ajiye rikodi muddin hukumar harajinku ta ce, ko ku tambayi akanta."],
          words: [["Rasit (receipt)", "takarda ko rikodin lantarki da ke nuna cewa kun biya ko an biya ku."], ["Invoice", "takardar neman biya da kuke aika wa kwastoma, ko kuke samu daga mai kawo kaya, mai jera abin da aka sayar da farashinsa."], ["Takardar tallafi (supporting document)", "shaidar da ke bayan rikodi a littafin lissafinku, kamar rasit, invoice ko bayanin asusu."]],
          slides: [
            { title: "Kowace shigarwa tana buƙatar shaida", bullets: ["Cinikai: invoice, littattafan rasit, rikodin ajiyar kuɗi", "Kuɗin fita: rasit, invoice, bayanin katin banki"] },
            { title: "Sauƙaƙan tsarin rasit", bullets: ["Ku ɗauki hotonsa a ranar", "Ku ba shi lamba ku ajiye shi bisa wata", "Ku rubuta lambar a littafin lissafinku"] },
            { title: "Cinikin kuɗi ba tare da rasit ba", bullets: ["Ku ajiye takardar cinikin yini", "Kwanan wata, kaya, guda nawa, jimilla"] },
            { title: "Tsawon lokacin ajiye rikodi", bullets: ["Amurka: sau da yawa shekara 3, wasu lokuta fiye", "Rikodin harajin ma'aikata: aƙalla shekara 4", "Ku duba irs.gov, hukumar harajinku ko akanta"] }
          ],
          sources: [
            { name: "IRS: Wane irin rikodi ya kamata in ajiye (What kind of records should I keep)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/what-kind-of-records-should-i-keep" },
            { name: "IRS: Har yaushe zan ajiye rikodi? (How long should I keep records?)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records" }
          ],
          tryIt: "Ku yi fayil na rasit na wannan watan a waya ko kwamfutarku. Ku ɗauki hoton rasit uku da kuke da su (na kasuwanci, ko na yau da kullum don atisaye), ku ba su lamba 1, 2 da 3, ku ajiye su a fayil ɗin.",
          youCanNow: "ajiye rasit, ba su lamba da tsara su, ta yadda kowane rikodi a littafin lissafinku yana da shaida a bayansa.",
          quickCheck: [
            { objective: "O2", q: "Me IRS take kira rasit, invoice da rikodin ajiyar kuɗi?", options: ["Takardun haraji", "Takardun tallafi (supporting documents)", "Littattafan lissafi", "Lissafin riba da asara"], answer: 1, why: "IRS tana kiran takardun da ke tabbatar da kowace shigarwa takardun tallafi." },
            { objective: "O2", q: "Kun biya kuɗin kayan aiki kuma kun sami rasit na takarda. Me za ku yi a ranar?", options: ["Ku saka shi a aljihu don nan gaba", "Ku yar da shi idan kun tuna adadin", "Ku rubuta adadin a hannunku", "Ku ɗauki hotonsa, ku ba shi lamba, ku ajiye shi a fayil na wannan watan"], answer: 3, why: "Ɗaukar hoto da ba rasit lamba a ranar yana hana shi gogewa ko ɓacewa." }
          ]
        },
        {
          objectives: ["O1","O3"],
          title: "Raba kuɗin kasuwanci da kuɗin kanku",
          minutes: 5,
          goal: "Kafa wuri na daban don kuɗin kasuwanci, da biyan kanku da gangan.",
          text: [
            "Idan kuɗin kasuwanci da na kanku sun haɗu a asusu ɗaya ko walat ɗaya, ba za ku iya sanin ko kasuwancin yana samun riba ba. Abincin rana na kasuwanci, sayen kayan abinci na iyali, da odar kayan aiki duk suna kama da juna.",
            "Ku buɗe asusu na daban don kasuwancin: asusun banki ko na credit union (bankin haɗin gwiwa) na kasuwanci, ko asusun mobile money ko till na daban da ake amfani da shi don kasuwanci kawai. Ku saka kowane ciniki a ciki. Ku biya kowane kuɗin kasuwanci daga ciki.",
            "Idan kuna buƙatar kuɗi don kanku, ku tura ƙayyadadden adadi daga asusun kasuwanci zuwa asusun kanku, ku rubuta shi a matsayin owner's draw (cirewar mai kasuwanci) ko albashinku. Wannan ba kuɗin fita na kasuwanci ba ne; ku ne kuke ɗaukar riba. Idan kun taɓa biyan kuɗin kasuwanci da kuɗin kanku, ku rubuta shi a littafin lissafi ku ajiye rasit.",
            "Ƙungiyoyi marasa riba suna da ƙarin mataki ɗaya: idan mai bayarwa ya ba da kuɗi don wani dalili, kamar shirin wasannin matasa, ku bibiye shi don a kashe shi a kan wannan dalili. Ginshiƙi ko rukuni mai sauƙi don shi ya isa a farko."
          ],
          steps: ["Ku buɗe asusun kasuwanci na daban, till na mobile money ko walat.", "Ku saka duk cinikai da gudummawa a ciki.", "Ku biya duk kuɗin kasuwanci daga ciki.", "Ku biya kanku ta tura ƙayyadadden adadi, ku rubuta shi a matsayin owner's draw.", "Idan kun yi amfani da kuɗin kanku don kasuwanci, ku rubuta shi ku ajiye rasit."],
          words: [["Owner's draw (cirewar mai kasuwanci)", "kuɗin da mai kasuwanci yake fitarwa daga kasuwanci don amfanin kansa. Ba kuɗin fita na kasuwanci ba ne."], ["Haɗa kuɗi (commingling)", "haɗa kuɗin kasuwanci da kuɗin kai a asusu ɗaya."], ["Gudummawa mai sharaɗi (restricted donation)", "kyautar da mai bayarwa ya ce dole a yi amfani da ita don wani dalili."]],
          slides: [
            { title: "Kuɗi da aka haɗa yana ɓoye gaskiya", bullets: ["Ba za ku iya sanin ko kasuwancin yana samun riba ba", "Kuɗin kai da na kasuwanci suna kama da juna"] },
            { title: "Ku ba kasuwancin kuɗinsa na kansa", bullets: ["Asusun banki, credit union ko mobile money na daban", "Duk cinikai su shiga, duk kuɗin kasuwanci su fita"] },
            { title: "Ku biya kanku da gangan", bullets: ["Ku tura ƙayyadadden adadi zuwa asusun kanku", "Ku rubuta shi a matsayin owner's draw, ba kuɗin fita ba"] },
            { title: "Ƙungiyoyi marasa riba", bullets: ["Ku bibiyi kyautar da aka bayar don wani dalili", "Ku kashe ta a kan wannan dalili"] }
          ],
          sources: [{ name: "IRS: Ajiyar rikodi ga ƙananan kasuwanci (Recordkeeping for small businesses)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }],
          tryIt: "Ku duba biyan kuɗi 10 na ƙarshe daga asusu ko walat da kuke amfani da shi don kasuwancinku (ko na kanku, don atisaye). Ku sa wa kowanne K don kasuwanci ko S don na kai. Ku rubuta yadda za ku raba su daga yanzu.",
          youCanNow: "raba kuɗin kasuwanci da kuɗin kanku, da biyan kanku ta hanyar da za ku iya bibiya.",
          quickCheck: [
            { objective: "O1", q: "Mene ne owner's draw?", options: ["Kuɗin fita na kasuwanci", "Bashi daga banki", "Kuɗin da kuke turawa daga kasuwanci zuwa kanku, daga riba", "Gudummawa ga kasuwancin"], answer: 2, why: "Owner's draw shi ne ku ɗauki riba; ba kuɗin fita na kasuwanci ba ne." },
            { objective: "O1", q: "Kuna gudanar da kasuwancinku daga asusun kanku kuma ba za ku iya sanin ko yana samun riba ba. Mene ne gyaran farko?", options: ["Ku buɗe asusu na daban ko till na mobile money don kasuwanci kawai", "Ku rage kashe kuɗi a kayan abinci", "Ku daina ajiye rasit", "Ku yi amfani da kuɗi hannu da hannu kawai"], answer: 0, why: "Asusu na daban yana ware kuɗin kasuwanci, don ku ga abin da kasuwancin ke samu da kashewa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Ajiye rikodi mai kyau",
        questions: [
          { objective: "O1", q: "Wanne ne kuɗin fita ga ƙaramar gona?", options: ["Kuɗin sayar da tumatur", "Tallafi daga mai bayarwa", "Biyan kuɗi daga kwastoma", "Iri da taki"], answer: 3, why: "Kuɗin fita su ne kuɗaɗen gudanar da kasuwanci, kamar iri da taki." },
          { objective: "O1", q: "A cewar IRS, rikodi mai kyau yana taimaka muku:", options: ["Kada ku taɓa biyan haraji", "Lura da ci gaban kasuwancinku da shirya takardun haraji", "Kauce wa rubuta rasit", "Samun kayan aiki kyauta"], answer: 1, why: "IRS ta ce rikodi yana taimaka muku lura da kasuwancinku da shirya takardun harajinku." },
          { objective: "O2", q: "Kuna sayar da ƙwai da kuɗi hannu da hannu ba tare da rasit ba. Mece ce shaidarku?", options: ["Takardar cinikin yini mai kwanan wata, kaya, guda nawa da jimilla", "Tunaninku", "Ba a buƙatar komai", "Hoton kajinku"], answer: 0, why: "Rubutacciyar takardar cinikin yini tana rikodin cinikin kuɗi hannu da hannu." },
          { objective: "O2", q: "Me yasa za ku rubuta lambar rasit a littafin lissafinku?", options: ["Tana sa littafin ya yi tsawo", "Banki ne ya buƙace ta", "Don ku iya nemo shaidar kowane layi", "Tana canja jimilla"], answer: 2, why: "Ba da lamba yana haɗa kowane rikodi da shaidarsa." },
          { objective: "O3", q: "Kuna tura kuɗi daga asusun kasuwanci zuwa asusun kanku don biyan kanku. Yaya za ku rubuta shi?", options: ["A matsayin kuɗin fita na kasuwanci", "A matsayin owner's draw", "A matsayin ciniki", "Ba za ku rubuta shi ba"], answer: 1, why: "Kuɗin da mai kasuwanci ke fitarwa owner's draw ne, ba kuɗin fita na kasuwanci ba." }
        ]
      }
    },
    {
      name: "Babi na 2: Littafin lissafinku da ribarku",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kafa sauƙaƙan littafin lissafi a spreadsheet",
          minutes: 6,
          goal: "Gina littafin lissafi a spreadsheet kyauta mai ginshiƙai daidai da ragowar kuɗi mai gudana.",
          text: [
            "Littafin lissafi (ledger) jeri ne na kowane kuɗin shiga da na fita, layi ɗaya ga kowace ciniki. Spreadsheet kyauta kamar Google Sheets ko Microsoft Excel yana aiki sosai, kuma yana tara muku lambobin.",
            "Ku yi amfani da ginshiƙai bakwai: Kwanan wata, Bayani, Rukuni, Kuɗin shiga, Kuɗin fita, Ragowar kuɗi (Balance), Lambar rasit. Ku saka ragowar kuɗinku ta farko a layin farko. A akwatin Ragowar kuɗi na layi na gaba, ku rubuta formula da ke ɗaukar ragowar kuɗin sama, ta ƙara kuɗin shiga, ta cire kuɗin fita. Misali, idan Ragowar kuɗi ginshiƙi F ne, Kuɗin shiga D, Kuɗin fita E, layi na 3 zai zama =F2+D3-E3. Ku kwafi wannan formula zuwa ƙasa.",
            "Ku zaɓi gajeren jerin rukunoni ku yi amfani da kalmomi iri ɗaya kowane lokaci, misali: Cinikai, Gudummawa, Kayan aiki, Haya, Mai, Waya, Talla, Albashi, Owner's draw. Kalmomi iri ɗaya suna sauƙaƙa tara kowane rukuni daga baya.",
            "Mataimakin AI zai iya taimaka muku kafa takardar: ku tambaye shi ya bayyana wata formula, ko ya ba da shawarar rukunoni don irin kasuwancinku. Kada ku saka lambobin asusun banki ko bayanan sirri na kwastomomi."
          ],
          steps: ["Ku buɗe sabon spreadsheet fanko, ku ba shi suna, misali \"2026 Ledger\", ku kira shafi (tab) na farko Ledger.", "Ku rubuta kanun ginshiƙai: Kwanan wata, Bayani, Rukuni, Kuɗin shiga, Kuɗin fita, Ragowar kuɗi, Lambar rasit.", "Ku saka ragowar kuɗinku ta farko a ginshiƙin Ragowar kuɗi na layi na 2.", "A layi na 3 na Ragowar kuɗi, ku rubuta =F2+D3-E3 ku kwafe shi zuwa ƙasa.", "Ku rubuta jerin rukunoninku a gefe ko a shafi na biyu, ku yi amfani da waɗannan kalmomi kawai."],
          words: [["Littafin lissafi (ledger)", "jerin kowane kuɗin shiga da na fita, layi ɗaya ga kowace ciniki."], ["Ciniki (transaction)", "lokaci ɗaya da kuɗi ya motsa: sayarwa, biya, sayayya."], ["Formula", "lissafi a akwatin spreadsheet da ke farawa da =."], ["Rukuni (category)", "lakabi da ke haɗa kuɗi iri ɗaya, kamar Mai ko Kayan aiki."]],
          slides: [
            { title: "Littafin lissafi: layi ɗaya ga kowace ciniki", bullets: ["Kowane kuɗin shiga da na fita", "Spreadsheet kyauta yana yin tarawa"] },
            { title: "Ginshiƙai bakwai", bullets: ["Kwanan wata, Bayani, Rukuni", "Kuɗin shiga, Kuɗin fita", "Ragowar kuɗi, Lambar rasit"] },
            { title: "Ragowar kuɗi mai gudana", bullets: ["Ku fara da ragowar kuɗinku ta farko", "Layi na gaba: =F2+D3-E3", "Ku kwafi formula zuwa ƙasa"] },
            { title: "Kalmomin rukuni iri ɗaya kowane lokaci", bullets: ["Cinikai, Gudummawa, Kayan aiki, Haya, Mai", "Waya, Talla, Albashi, Owner's draw"] }
          ],
          tryIt: "Ku gina littafin lissafi yanzu a Google Sheets ko Excel da ginshiƙai bakwai, ragowar kuɗi ta farko da formula na ragowar kuɗi mai gudana. Ku shigar da cinikai uku na wannan makon, na gaske ko na misali, ku duba cewa ragowar kuɗi tana canjawa daidai.",
          youCanNow: "gina littafin lissafi a spreadsheet mai rukunoni da ragowar kuɗi mai gudana.",
          quickCheck: [
            { objective: "O4", q: "A littafin lissafi, me kowane layi yake ɗauke da shi?", options: ["Wata ɗaya cikakke", "Ciniki ɗaya", "Suna da adireshin kwastoma ɗaya", "Jimillar rukuni ɗaya"], answer: 1, why: "Littafin lissafi yana jera kowane kuɗin shiga da na fita, layi ɗaya ga kowace ciniki." },
            { objective: "O4", q: "Kun rubuta \"kayan aiki\" wani mako, \"kayayyaki\" a mako na gaba, don kuɗaɗe iri ɗaya. Me ya kamata ku yi?", options: ["Ku bar kalmomin biyu", "Ku goge waɗannan layukan", "Ku canja su zuwa kalmar rukuni ɗaya, ku yi amfani da ita kaɗai daga yanzu", "Ku ƙara sabon ginshiƙi ga kowace kalma"], answer: 2, why: "Amfani da kalmomin rukuni iri ɗaya kowane lokaci yana sauƙaƙa tara kowane rukuni daga baya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Rubutu kowane mako da duba lissafi da na banki",
          minutes: 5,
          goal: "Riƙe littafin lissafi a sabunce, da duba shi da bayanin asusun banki ko na mobile money.",
          text: [
            "Ajiyar lissafi ta fi aiki a matsayin ƙaramar al'ada ta kowane mako, misali minti 20 kowace safiyar Litinin. Ku tattara rasit, takardun cinikin yini da invoice na makon, ku shigar da kowanne a matsayin layi a littafin lissafi tare da rukuninsa da lambar rasit.",
            "Sau ɗaya a wata, ku duba littafin lissafinku da bayanin asusun banki, credit union ko mobile money. Ana kiran wannan daidaitawa (reconciling). Ku yi alama a kowane layi a bayanin asusun da ya yi daidai da layi a littafin lissafinku. Duk abin da ke bayanin asusun amma ba ya cikin littafinku, kamar kuɗin cajin banki ko biyan kwastoma da kuka manta, ku ƙara shi. Duk abin da ke littafinku amma ba ya bayanin asusun yana iya zama kuɗi hannu da hannu, ko kuskure da za a gyara.",
            "A ƙarshe, ragowar kuɗi a littafin lissafinku ya kamata ta yi daidai da ragowar kuɗi a bayanin asusun, bayan kun yi la'akari da kuɗin da ke hannunku da biyan kuɗin da bai wuce ba tukuna. Idan ba ta yi daidai ba, ku nemi layin da ya ɓace, lambar da aka rubuta sau biyu, ko lambobin da suka juya, kamar 54 da aka rubuta 45.",
            "Misali: littafin lissafin wata ƙungiyar ƙwallon ƙafa ta matasa marar riba ya yi ƙasa da na banki da dala 15. Ma'ajin ya gano gudummawar dala 15 da ta shigo ta manhajar waya ba a taɓa rubuta ta ba, ya ƙara ta, yanzu sun yi daidai."
          ],
          steps: ["Ku zaɓi lokaci na kowane mako don sabunta littafin lissafi.", "Ku shigar da kowane rasit, takardar cinikin yini da invoice tare da rukuni da lambar rasit.", "Sau ɗaya a wata, ku samo bayanin asusun banki ko na mobile money.", "Ku yi alama a kowane layi a bayanin asusun da ya yi daidai da littafin; ku ƙara waɗanda suka ɓace.", "Ku kwatanta ragowar kuɗin biyu. Idan sun bambanta, ku nemi layukan da suka ɓace, na sau biyu, ko lambobin da suka juya."],
          words: [["Daidaitawa (reconcile)", "duba rikodinku da bayanin asusun banki ko na mobile money, da gyara bambance-bambance."], ["Bayanin asusu (statement)", "jerin cinikayyar da bankinku ko mai ba da mobile money yake ba ku na wani lokaci."], ["Ya wuce (cleared)", "lokacin da biyan kuɗi ya kammala kuma ya bayyana a bayanin asusu."]],
          slides: [
            { title: "Al'ada ta kowane mako", bullets: ["Kusan minti 20, rana ɗaya kowane mako", "Ku shigar da rasit, takardun cinikin yini da invoice"] },
            { title: "Ku daidaita sau ɗaya a wata", bullets: ["Ku samo bayanin asusun banki ko na mobile money", "Ku yi alama a kowane layi da ya yi daidai", "Ku ƙara abin da ya ɓace, kamar kuɗin cajin banki"] },
            { title: "Idan bai yi daidai ba", bullets: ["Layi da ya ɓace", "Lambar da aka rubuta sau biyu", "Lambobin da suka juya: 54 da aka rubuta 45"] }
          ],
          tryIt: "Ku sauke ko ku buɗe bayanin asusun watan da ya gabata na asusun kasuwancinku ko mobile money (ko na kanku, don atisaye). Ku zaɓi layuka biyar a bayanin asusun ku duba cewa kowanne yana cikin littafin lissafinku. Ku ƙara waɗanda suka ɓace.",
          youCanNow: "riƙe littafin lissafinku a sabunce kowane mako, da daidaita shi da bayanin asusunku kowane wata.",
          quickCheck: [
            { objective: "O5", q: "Mene ne ma'anar daidaitawa (reconciling)?", options: ["Yin kasafin kuɗi na wata mai zuwa", "Biyan duk basussukanku", "Rubuta sabon littafin lissafi", "Duba littafin lissafinku da bayanin asusun banki ko na mobile money"], answer: 3, why: "Daidaitawa ita ce yin alama a kowane layi na bayanin asusu bisa littafin lissafinku, da gyara abin da ya ɓace." },
            { objective: "O5", q: "Biyan wani kwastoma yana bayanin asusunku amma ba ya cikin littafin lissafinku. Me za ku yi?", options: ["Ku ƙara shi a littafin lissafi", "Ku yi watsi da shi", "Ku goge shi daga bayanin asusu", "Ku jira har shekara mai zuwa"], answer: 0, why: "Duk abin da ke bayanin asusu amma ya ɓace daga littafin lissafi ana ƙara shi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Karanta sauƙaƙan lissafin riba da asara",
          minutes: 6,
          goal: "Gina lissafin riba da asara na wata ɗaya daga littafin lissafinku, da faɗin abin da yake gaya muku.",
          text: [
            "Lissafin riba da asara, wanda ake kira P&L ko income statement, gajeren taƙaitawa ne na wani lokaci kamar wata ɗaya. Yana nuna jimillar kuɗin shiga, jimillar kuɗin fita bisa rukuni, da bambancinsu. Kuɗin shiga ban da kuɗin fita shi ne riba. Idan kuɗin fita ya fi yawa, asara ce.",
            "Kuna iya yin ɗaya daga littafin lissafinku. A sabon shafi (tab), ku jera kowane rukuni. Kusa da kowanne, ku yi amfani da formula SUMIF don tara wannan rukuni. Misali, =SUMIF(Ledger!C:C,\"Supplies\",Ledger!E:E) tana tara kowane adadin Kuɗin fita da rukuninsa Supplies (kayan aiki) ne, idan shafin littafin lissafinku sunansa Ledger (ginshiƙi C shi ne Rukuni, ginshiƙi E kuma Kuɗin fita). Ku tara rukunonin kuɗin shiga, ku tara rukunonin kuɗin fita, sannan ku cire. Owner's draw ba kuɗin fita ba ne, don haka ku bar shi daga cikin kuɗin fita.",
            "Sannan ku karanta shi. Kun sami riba? Wane kuɗin fita ne mafi girma? Ya ƙaru daga watan da ya gabata? Ga gona, watan girbi ya rufe watannin da babu aiki sosai? Ga ƙungiya marar riba, kuɗin shirye-shirye sun tsaya cikin tallafin?",
            "P&L yana gaya muku yadda kasuwancin ke tafiya. Ba takardar harajinku ba ne. Dokokin haraji ne ke yanke abin da ake ƙirgawa da lokacin, kuma sun bambanta a kowace ƙasa. Ku kai littafin lissafinku, rasit da P&L wurin akanta ko ƙwararren haraji don haraji."
          ],
          steps: ["Ku ƙara sabon shafi mai suna P&L ku jera rukunoninku.", "Kusa da kowane rukuni, ku yi amfani da SUMIF don tara shi daga littafin lissafi.", "Ku tara rukunonin kuɗin shiga da rukunonin kuɗin fita (ku bar owner's draw).", "Ku cire: kuɗin shiga ban da kuɗin fita = riba ko asara.", "Ku rubuta jimloli biyu game da abin da lambobin ke gaya muku."],
          words: [["Lissafin riba da asara (P&L)", "taƙaitawar kuɗin shiga, kuɗin fita da riba ko asara na wani lokaci."], ["Riba", "abin da ya rage idan kuɗin shiga ya fi kuɗin fita."], ["Asara", "idan kuɗin fita ya fi kuɗin shiga."], ["SUMIF", "formula ta spreadsheet da ke tara layukan da suka yi daidai da wani lakabi kawai."]],
          slides: [
            { title: "Riba da asara a layi ɗaya", bullets: ["Kuɗin shiga ban da kuɗin fita = riba", "Kuɗin fita ya fi yawa? Wannan asara ce"] },
            { title: "Ku gina shi daga littafin lissafinku", bullets: ["Ku jera rukunoni a sabon shafi", "Ku yi amfani da SUMIF don tara kowanne", "Ku bar owner's draw daga kuɗin fita"] },
            { title: "Ku karanta shi", bullets: ["Riba ko asara?", "Kuɗin fita mafi girma? Yana ƙaruwa?", "Watanni masu kyau sun rufe na rashin aiki?"] },
            { title: "Ba takardar haraji ba ne", bullets: ["Dokokin haraji ne ke yanke abin da ake ƙirgawa", "Ku kai rikodinku wurin akanta"] }
          ],
          sources: [{ name: "IRS: Ajiyar rikodi ga ƙananan kasuwanci (Recordkeeping for small businesses)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }],
          tryIt: "Aikin ƙarshe: ku shigar da aƙalla cinikai 10 na gaske ko na misali na wata ɗaya a littafin lissafinku, tare da rukunoni da lambobin rasit, ku duba su da bayanin asusu. Sannan ku gina shafin P&L da SUMIF, ku nemo ribarku ko asararku, ku rubuta jimloli biyu game da abin da yake gaya muku.",
          youCanNow: "gina da karanta lissafin riba da asara na wata ɗaya daga littafin lissafinku.",
          quickCheck: [
            { objective: "O6", q: "Me ake kira kuɗin shiga ban da kuɗin fita idan kuɗin shiga ya fi yawa?", options: ["Owner's draw", "Asara", "Riba", "Ragowar kuɗi"], answer: 2, why: "Kuɗin shiga ban da kuɗin fita riba ce; idan kuɗin fita ya fi yawa, asara ce." },
            { objective: "O6", q: "Kuna gina P&L ɗinku. Ina owner's draw zai tafi?", options: ["Cikin rukunin kuɗin fita mafi girma", "Cikin kuɗin shiga", "Cikin kayan aiki", "Ku bar shi daga cikin kuɗin fita"], answer: 3, why: "Owner's draw ba kuɗin fita na kasuwanci ba ne, don haka yana tsayawa a waje da kuɗin fita a P&L." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Littafin lissafinku da ribarku",
        questions: [
          { objective: "O4", q: "Wane rukunin ginshiƙai ne ke yin sauƙaƙan littafin lissafi mai kyau?", options: ["Kwanan wata, Bayani, Rukuni, Kuɗin shiga, Kuɗin fita, Ragowar kuɗi, Lambar rasit", "Suna, Ranar haihuwa, Abin sha'awa", "Jimilla kawai", "Kalmar sirri da lambar katin kwastoma"], answer: 0, why: "Waɗannan ginshiƙai suna rikodin kowace ciniki kuma suna haɗa ta da shaidarta." },
          { objective: "O4", q: "Me yasa za ku yi amfani da kalmomin rukuni iri ɗaya kowane lokaci?", options: ["Spreadsheet ba zai buɗe ba idan ba haka ba", "Don littafin ya yi launi", "Don ku iya tara kowane rukuni daga baya", "Domin banki ne ya buƙata"], answer: 2, why: "Kalmomi iri ɗaya suna bar SUMIF ya tara kowane rukuni daidai." },
          { objective: "O5", q: "Littafin lissafinku ya yi ƙasa da bayanin asusun banki da dala 15. Me za ku fara nema?", options: ["Sabon banki", "Sabuwar manhajar spreadsheet", "Babu komai; ƙananan bambance-bambance ba su da muhimmanci", "Ajiya ko biyan kuɗi da ke bayanin asusu amma ba ya cikin littafin lissafi"], answer: 3, why: "Bambanci yawanci yana nufin layin da ya ɓace, na sau biyu, ko wanda aka rubuta ba daidai ba." },
          { objective: "O6", q: "Kuɗin shiga 2,000 ne, kuɗin fita 1,500, owner's draw kuma 300. Nawa ne riba?", options: ["200", "500", "3,800", "1,500"], answer: 1, why: "Riba ita ce kuɗin shiga ban da kuɗin fita: 2,000 - 1,500 = 500. Owner's draw ba kuɗin fita ba ne." },
          { objective: "O6", q: "Da wa ya kamata ku yi magana game da harajinku?", options: ["Akanta ko ƙwararren haraji", "Baƙo a sharhi a intanet", "Babu kowa; P&L ita ce takardar harajinku", "Kwastomominku"], answer: 0, why: "P&L ba takardar haraji ba ce; akanta ya san dokokin haraji." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tushen Ajiyar Lissafin Kuɗi",
    questions: [
      { objective: "O1", q: "Ajiyar lissafi tana nufin:", options: ["Karanta littattafai game da kasuwanci", "Hasashen ribarku a ƙarshen shekara", "Rubuta duk kuɗin da ke shiga da fita", "Ajiye littafin tarihin rayuwa (diary)"], answer: 2, why: "Ajiyar lissafi tana rikodin kowane kuɗin shiga da na fita." },
      { objective: "O1", q: "Ga ƙungiya marar riba, wanne ne kuɗin shiga?", options: ["Gudummawa", "Kuɗin hayar ofis", "Ciye-ciye ga masu aikin sa-kai", "Tawadar firinta"], answer: 0, why: "Gudummawa da tallafi kuɗi ne da ke shigowa." },
      { objective: "O2", q: "Wanne ne misalin takardar tallafi ga kuɗin fita?", options: ["Tes daga aboki", "Katin kasuwanci", "Jerin abubuwan yinku", "Rasit ko invoice"], answer: 3, why: "IRS ta jera rasit, invoice da bayanin asusu a matsayin shaidar kuɗin fita." },
      { objective: "O2", q: "Wace hanya ce mafi sauƙi don hana rasit na takarda gogewa ko ɓacewa?", options: ["Ku ajiye su a aljihu", "Ku ɗauki hotonsu ku tsara su a ranar", "Ku yar da su bayan mako ɗaya", "Ku ba kwastomomi su"], answer: 1, why: "Hoton ranar, da aka tsara bisa wata, yana kiyaye shaidar." },
      { objective: "O2", q: "Ga takardun haraji da yawa a Amurka, ƙa'idar IRS ta asali ita ce ajiye rikodi na:", options: ["Mako 1", "Shekara 3, fiye a wasu lokuta", "Wata 1", "Ba komai; ba a buƙatar rikodi"], answer: 1, why: "IRS ta ce shekara 3 a yawancin lokuta, da tsawon lokaci a wasu lokuta." },
      { objective: "O2", q: "Ya kamata a ajiye rikodin harajin ma'aikata na aƙalla:", options: ["Wata 1", "Shekara 1", "Shekara 4", "Kwana 10"], answer: 2, why: "IRS ta ce aƙalla shekara 4 bayan ranar da harajin ya cika ko aka biya shi." },
      { objective: "O3", q: "Me yasa za ku ajiye kuɗin kasuwanci a asusunsa ko walat ɗinsa na kansa?", options: ["Don ku iya sanin ko kasuwancin yana samun riba", "Domin haɗa kuɗi abin nishaɗi ne", "Don ku iya kauce wa rasit", "Don ɓoye cinikai"], answer: 0, why: "Kuɗi da aka haɗa yana ɓoye yadda kasuwancin ke tafiya da gaske." },
      { objective: "O3", q: "Kun biya kayan aikin kasuwanci da katin kanku. Me za ku yi?", options: ["Ku manta da shi", "Ku rubuta shi a matsayin ciniki", "Ku yar da rasit ɗin", "Ku rubuta shi a littafin lissafi ku ajiye rasit"], answer: 3, why: "Rubuta shi yana sa littafin ya cika, kuma yana kiyaye shaidar." },
      { objective: "O3", q: "Wani mai bayarwa ya ba da kuɗi don shirin wasannin matasa kawai. Ya kamata ƙungiyar marar riba ta:", options: ["Kashe shi a kan komai", "Mayar da shi nan take", "Kada ta rubuta shi", "Bibiye shi don a kashe shi a kan wannan shirin"], answer: 3, why: "Dole a bibiyi kyautar mai sharaɗi a yi amfani da ita don dalilinta." },
      { objective: "O4", q: "Littafin lissafi yana da:", options: ["Shafi ɗaya ga kowane kwastoma", "Layi ɗaya ga kowace ciniki", "Jimillar shekara kawai", "Kuɗin fita kawai"], answer: 1, why: "Kowace sayarwa, biya ko sayayya layi ne na kanta." },
      { objective: "O4", q: "A spreadsheet, formula tana farawa da:", options: ["#", "$", "=", "?"], answer: 2, why: "Formula a spreadsheet tana farawa da alamar daidai (=)." },
      { objective: "O4", q: "Ragowar kuɗi ginshiƙi F ne, Kuɗin shiga D, Kuɗin fita E. Ragowar kuɗi mai gudana a layi na 3 ita ce:", options: ["=F2+D3-E3", "=D3*E3", "=F2-D3-E3", "=E3"], answer: 0, why: "Ku ɗauki ragowar kuɗin sama, ku ƙara kuɗin shiga, ku cire kuɗin fita." },
      { objective: "O5", q: "Wace al'ada ce mai kyau don riƙe littafin lissafi a sabunce?", options: ["Sabuntawa sau ɗaya a mako a ƙayyadadden lokaci", "Sabuntawa sai ofishin haraji ya rubuto kawai", "Sabuntawa sau ɗaya bayan wasu shekaru", "Ba a taɓa sabuntawa ba"], answer: 0, why: "Ƙaramar al'ada ta kowane mako tana sa rikodi ya cika kuma ya yi sauƙi." },
      { objective: "O5", q: "Daidaitawa (reconciling) tana nufin:", options: ["Sasantawa da kwastoma", "Goge tsofaffin rasit", "Duba littafin lissafinku da bayanin asusun banki ko na mobile money", "Buɗe sabon asusu"], answer: 2, why: "Daidaitawa tana nemo da gyara bambance-bambance tsakanin littafinku da bayanin asusu." },
      { objective: "O5", q: "Kuɗin cajin banki yana bayanin asusu amma ba ya cikin littafin lissafinku. Ya kamata ku:", options: ["Ku yi watsi da shi", "Ku ƙara shi a littafin lissafi", "Ku rufe asusun", "Ku goge bayanin asusun"], answer: 1, why: "Duk abin gaske da ke bayanin asusu ya kamata ya kasance a littafin lissafi." },
      { objective: "O5", q: "Kun rubuta 45 maimakon 54. Wannan irin kuskure shi ne:", options: ["Layi da ya ɓace", "Shigarwa sau biyu", "Sabon rukuni", "Lambobin da suka juya"], answer: 3, why: "Lambobin da suka juya dalili ne da aka saba gani na rashin daidaiton lissafi." },
      { objective: "O6", q: "Lissafin riba da asara yana nuna:", options: ["Ragowar kuɗin bankinku kawai", "Sunayen kwastomominku", "Kuɗin shiga, kuɗin fita da bambancinsu na wani lokaci", "Makin bashinku (credit score)"], answer: 2, why: "P&L yana taƙaita kuɗin shiga, kuɗin fita da riba ko asara." },
      { objective: "O6", q: "Wace formula ce ke tara duk adadin Supplies (kayan aiki) daga littafin lissafi?", options: ["=SUM(Supplies)", "=Supplies+1", "=AVERAGE(C:C)", "=SUMIF(Ledger!C:C,\"Supplies\",Ledger!E:E)"], answer: 3, why: "SUMIF tana tara layukan da rukuninsu Supplies ne kawai." },
      { objective: "O6", q: "Kuɗin fita ya fi kuɗin shiga a wannan watan. Wannan:", options: ["Asara ce", "Riba ce", "Owner's draw ne", "Rasit ne"], answer: 0, why: "Idan kuɗin fita ya fi kuɗin shiga, sakamakon asara ce." },
      { objective: "O6", q: "P&L ɗinku ya shirya. Shin shi ne takardar harajinku?", options: ["E, ku aika shi ofishin haraji kamar yadda yake", "A'a; ku kai rikodinku wurin akanta don haraji", "E, idan yana nuna riba", "Ga ƙungiyoyi marasa riba kawai"], answer: 1, why: "Dokokin haraji ne ke yanke abin da ake ƙirgawa; akanta zai iya shirya harajinku." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      1,
      2,
      6,
      9,
      11,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "An kafa littafin lissafi",
        objective: "O4",
        notYet: "Wasu ginshiƙai ba sa nan, ko ragowar kuɗi ba ta sabuntawa.",
        meets: "Duk ginshiƙai bakwai, ragowar kuɗi ta farko, da ragowar kuɗi mai gudana da ke daidai bayan kowane layi.",
        exceeds: "Yana kuma da ƙayyadadden jerin rukunoni a shafinsa na kansa, da ake amfani da kalmomi iri ɗaya kowane lokaci."
      },
      {
        name: "An raba kuɗin shiga da na fita",
        objective: "O1",
        notYet: "Wasu layuka suna rukunin da bai dace ba, ko ba su da rukuni.",
        meets: "Aƙalla cinikai 10, kowace da rukunin kuɗin shiga ko na fita daidai.",
        exceeds: "An rubuta owner's draw da duk kuɗin kai da aka yi amfani da shi don kasuwanci ta hanyar da ta dace."
      },
      {
        name: "Shaida ga kowane layi",
        objective: "O2",
        notYet: "Wasu layuka ba su da lambar rasit ko shaida.",
        meets: "Kowane layi yana da lambar rasit da ta yi daidai da rasit ko takardar cinikin yini da aka ajiye.",
        exceeds: "Rasit suna fayil na watan, kuma ana ajiye takardun a ambulan mai suna iri ɗaya."
      },
      {
        name: "An duba da bayanin asusu",
        objective: "O5",
        notYet: "Ba a kwatanta littafin lissafi da bayanin asusu ba.",
        meets: "An yi alama a layukan bayanin asusu, an ƙara layukan da suka ɓace, kuma ragowar kuɗi ta yi daidai ko an bayyana bambancin.",
        exceeds: "Zai iya faɗin kowane bambanci da aka samu da yadda aka gyara shi."
      },
      {
        name: "An karanta riba da asara",
        objective: "O6",
        notYet: "Babu P&L, ko jimloli ba daidai ba ne.",
        meets: "P&L mai jimlolin SUMIF, an bar owner's draw a waje, kuma an nuna riba ko asara.",
        exceeds: "Jimloli biyu masu sarari sun faɗi ma'anar lambobin da abu ɗaya da za a canja a wata mai zuwa."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da har yanzu suke sabunta littafin lissafinsu kowane mako kuma suke daidaitawa kowane wata a binciken biyo baya na kwana 30",
      "Masu koyo da suka yi amfani da rikodinsu don neman bashi ko tallafi, ko suka kai su wurin akanta a lokacin haraji",
      "Masu koyo da suka fara wani kwas na kasuwanci na Koach Learn cikin kwana 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai spreadsheet kyauta: Google Sheets ko Microsoft Excel",
      "Rasit na wata ɗaya na gaske ko na misali, da bayanin asusun banki ko na mobile money (ko na misali)",
      "Kyamarar waya don hotunan rasit, da ambulan don rasit na takarda",
      "Kusan minti 60 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku shirya cinikayyar misali ta wata ɗaya da bayanin asusu na misali ga masu koyo da ba sa son amfani da lambobinsu.",
      "Ku gina littafin lissafi da formula na ragowar kuɗi mai gudana tare a allo ɗaya, sannan ku bar masu koyo su kwaikwaya.",
      "Ku tunatar da masu koyo kada su saka lambobin asusu ko bayanan kwastomomi a kayan AI ko allon da ake rabawa.",
      "Kada ku ba da shawarar haraji; ku tura tambayoyin haraji wurin akanta ko hukumar haraji.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

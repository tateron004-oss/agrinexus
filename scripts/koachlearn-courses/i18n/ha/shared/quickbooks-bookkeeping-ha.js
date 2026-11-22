"use strict";

// Koach Learn course, Hausa (ha) translation of shared/quickbooks-bookkeeping.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const CERTIPORT = { name: "Certiport (Pearson VUE): takardun shaidar Intuit, har da QuickBooks Certified User da Intuit Certified Bookkeeping Professional", url: "https://certiport.pearsonvue.com/Certifications/QuickBooks/Certified-User/Overview" };
const ACADEMY = { name: "Intuit Academy (shafin horo da takardun shaida na Intuit)", url: "https://academy.intuit.com/" };
const TESTDRIVE = { name: "Taimakon Intuit QuickBooks: gwada QuickBooks Online (test drive) da yin atisaye", url: "https://quickbooks.intuit.com/learn-support/en-us/help-article/small-business-processes/test-drive-quickbooks-online/L9C12ODlA_US_en_US" };
const PROADVISOR = { name: "Horon QuickBooks ProAdvisor da takardar shaida (na akantoci)", url: "https://quickbooks.intuit.com/accountants/training-certification/" };

module.exports = {
  id: "quickbooks-bookkeeping-ha",
  lang: "ha",
  translationOf: "quickbooks-bookkeeping",
  category: "Workforce Development",
  name: "Ajiyar Lissafin Kuɗi da QuickBooks",
  skills: "Tsara jerin asusu (chart of accounts), Rubuta invoice da biyan kuɗi, Shigar da bill da kashe kuɗi, Daidaita asusun banki, Karanta manyan rahotanni, Shirin samun takardar shaidar QuickBooks",
  outcome: "ajiye lissafin kuɗin ƙaramin kasuwanci a QuickBooks Online na wata ɗaya: raba kuɗi zuwa asusun da ya dace, rubuta sayarwa, biyan kuɗi, bill da kashe kuɗi, daidaita lissafi da banki, fitar da manyan rahotanni, da bin shiri zuwa takardar shaidar QuickBooks.",
  about: [
    "Kusan kowane ƙaramin kasuwanci, coci da ƙungiyar sa-kai (nonprofit) yana buƙatar wanda zai ajiye lissafin kuɗinsa, kuma da yawansu suna amfani da QuickBooks. Ajiyar lissafi (bookkeeping) na iya zama aikin cikakken lokaci, aikin ɗan lokaci da kuke yi daga gida, ko ƙaramin kasuwanci da ke yi wa abokan ciniki da yawa hidima. Wannan kwas na masu neman aiki ne, ma'aikatan ofis da ke son matsayi mafi kyau, masu ƙananan kasuwanci da masu aikin sa-kai a ƙungiyoyi.",
    "Za ku yi atisayen aikin na gaske: jerin asusu, invoice da biyan kuɗin abokan ciniki, bill da kashe kuɗi, bank feed (layukan banki), daidaita banki, rahoton riba da asara da balance sheet, da jerin abubuwan yi na ƙarshen wata. Kuna yin atisaye a QuickBooks Online test drive na Intuit, wani kamfanin misali da kuke buɗewa a burauzar intanet inda babu abin da kuke yi da ake ajiyewa, ko a takarda idan ba ku da kwamfuta.",
    "Kwas ɗin yana shirya ku don aikin ajiyar lissafi da kuma takardun shaidar Intuit kamar QuickBooks Certified User da Intuit Certified Bookkeeping Professional, waɗanda Certiport ke gudanar da jarabawarsu. Ba ya ba da kowace takardar shaida; kuna samun ta ne idan kun ci jarabawar hukuma. Ku duba shafukan hukuma don cikakken bayani da kuɗaɗe na yanzu.",
    "Idan kun riga kun yi kwas ɗin \"Tushen Ajiyar Lissafin Kuɗi\", wannan shi ne mataki na gaba. Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\" da ɗan gwaji mai tambayoyi biyu. Akwai gwajin ilimi bayan kowane babi, jarabawa mai tambayoyi 20 a ƙarshe, da aikin ƙarshe da za ku iya nuna wa mai ɗaukar aiki ko abokin ciniki."
  ],
  finalTask: "Ku yi kundin ƙarshen wata na QuickBooks don wani kasuwancin misali (kamfanin share-share, motar sayar da abinci ko ƙaramar ƙungiyar sa-kai): (1) jerin asusu mai aƙalla asusu 12, kowanne da alamar nau'insa: kuɗin shiga (income), kashe kuɗi (expense), kadara (asset), bashi (liability) ko hannun jarin mai shi (equity); (2) rajistar aƙalla ma'amaloli 10 da kuka shigar a QuickBooks Online test drive ko a takarda (aƙalla invoice 3, biyan kuɗin abokan ciniki 2 da bill ko kashe kuɗi 4), kowanne da kwanan wata, abokin ciniki ko mai sayarwa, asusu da adadi; (3) daidaita banki na watan da ya ƙare da bambanci na sifili, ko rubutaccen bayani na abin da bai yi daidai ba tukuna da dalili; (4) taƙaitaccen sakin layi ɗaya na riba da asarar watan; da (5) shirin takardar shaida na kwanaki 60 mai ranaku: wace takardar shaidar Intuit za ku shirya mata, yaushe za ku duba shafinta na hukuma, da yaushe za ku yi gwaje-gwajen atisaye.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da matasa da ke son aikin ofis ko ajiyar lissafi: masu neman aiki, ma'aikatan ofis da shaguna da ke son ci gaba, masu dawowa gida daga gidan yari, baƙi masu ƙwarewar kasuwanci, masu ƙananan kasuwanci da ke ajiye lissafinsu da kansu, da masu aikin sa-kai da ke kula da kuɗi.",
    startingPoint: "Suna iya amfani da burauzar intanet kuma su yi lissafi na yau da kullum da na'urar lissafi. Wasu sun taɓa ajiye lissafin kuɗi a takarda ko a spreadsheet. Yawancinsu ba su taɓa amfani da QuickBooks ba, ko jin labarin jerin asusu, daidaita banki ko balance sheet.",
    gap: "Masu ɗaukar aiki da abokan ciniki suna son masu ajiyar lissafi da suka riga suka san yadda QuickBooks ke rubuta sayarwa, bill da harkokin banki, kuma za su iya sa lissafi ya yi daidai da banki kowane wata. Ba tare da haka ba, ƙananan kurakurai suna taruwa har su kai ga haraji marar daidai, bill da aka manta da su da invoice da ba a biya ba. Koyon matakan da rahotannin, da samun shiri zuwa takardar shaidar Intuit, yana sa a fi saurin ɗaukar mai koyo aiki, kuma ya iya yi wa abokan cinikinsa hidima.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 7 zuwa 8); ana bayanin kowace kalmar lissafi",
      "Na'urori: kwamfuta ko tablet mai burauzar intanet don test drive; kowane atisaye kuma yana aiki a takarda",
      "Kuɗi: test drive yana buɗewa a burauza ba tare da sayen QuickBooks ba; ba ya ajiye canje-canje, don haka masu koyo suna rubuta bayanai",
      "QuickBooks yana yawan canja fuskokinsa, don haka kwas ɗin yana koyar da ayyuka da sunayen rahotanni, ba ainihin hanyoyin menu ba",
      "Sirri: atisaye yana amfani da kamfanin misali ko lambobin ƙirƙira, ba shiga bankin gaske ko lambobin asusu ba",
      "Dokokin haraji suna canjawa kuma sun bambanta daga wuri zuwa wuri: darussa suna nuna irs.gov ko ƙwararren haraji, ba sa ba da shawarar haraji"
    ],
    prerequisites: "Babu, amma \"Tushen Ajiyar Lissafin Kuɗi\" ko \"Excel and Spreadsheets\" (Excel da Spreadsheets) suna taimaka wa masu koyo da ba su taɓa bin diddigin kuɗin shiga da na fita ba."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku tallar aikin ajiyar lissafi ko buƙatar abokin ciniki", action: "jera manyan ayyukan mai ajiyar lissafi da QuickBooks, da ambaton takardar shaidar Intuit da ta dace da aikin", standard: "kuna ambaton aƙalla ayyuka huɗu da shafin hukuma inda ake duba takardar shaidar" },
    { id: "O2", condition: "Idan aka ba ku jerin harkokin kuɗin wani ƙaramin kasuwanci", action: "raba kowane abu zuwa nau'in asusun da ya dace a jerin asusu", standard: "kuna sanya aƙalla 9 cikin 10 a nau'in asusun da ya dace" },
    { id: "O3", condition: "Idan aka ba ku sayarwa, abokin ciniki da biyan kuɗi", action: "rubuta invoice ko sales receipt da biyan kuɗin abokin ciniki a QuickBooks", standard: "da abokin ciniki, kwanan wata, adadi da asusun kuɗin shiga da suka dace, ba tare da wani invoice da ya rage a buɗe bayan an biya shi ba" },
    { id: "O4", condition: "Idan aka ba ku bill, rasiti da mai sayarwa", action: "shigar da bill, kashe kuɗin da biyan bill a QuickBooks", standard: "da mai sayarwa, kwanan wata, adadi da asusun kashe kuɗi da suka dace, kuma an haɗa rasitin ko an rubuta shi" },
    { id: "O5", condition: "Idan aka ba ku harkokin banki na wata ɗaya da bayanin banki (bank statement)", action: "haɗa layukan bank feed da daidaita asusun banki", standard: "har bambancin ya zama sifili, ko da rubutaccen bayani na abin da bai yi daidai ba tukuna" },
    { id: "O6", condition: "A ƙarshen wata", action: "fitar da bayanin rahoton riba da asara, balance sheet da rahoton invoice da ba a biya ba", standard: "kuna faɗin riba ko asarar watan da waɗanda har yanzu suke da bashi" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsarawa da rubuta sayarwa",
      lessons: [
        {
          title: "Aikin mai ajiyar lissafi da QuickBooks da hanyar zuwa gare shi",
          objectives: ["O1"],
          minutes: 5,
          goal: "Jera manyan ayyukan mai ajiyar lissafi da QuickBooks, ku ambaci takardar shaida da za ta taimaka a ɗauke ku aiki.",
          text: [
            "Mai ajiyar lissafi (bookkeeper) yana rubuta kuɗin kasuwanci don mai shi ya san halin da yake ciki koyaushe. A QuickBooks wannan yana nufin: aika invoice da rubuta biyan kuɗin abokan ciniki, shigar da bill da kashe kuɗi, duba bank feed, daidaita banki kowane wata, fitar da rahotanni, da ajiye rasitoci. Masu ajiyar lissafi suna aiki a kamfani ɗaya, a kamfanin akanta, ko don ƙananan abokan ciniki da yawa a matsayin kasuwancinsu. Coci-coci da ƙungiyoyin sa-kai ma suna buƙatarsu.",
            "QuickBooks Online shi ne nau'in Intuit na intanet, da ake amfani da shi a burauza. QuickBooks Desktop ana saka shi a kwamfuta. Yawancin sababbin abokan cinikin ƙananan kasuwanci suna amfani da QuickBooks Online, don haka wannan kwas yana amfani da shi, amma ra'ayoyin iri ɗaya ne a duka biyun.",
            "Takardun shaidar Intuit biyu sun dace da wannan kwas. QuickBooks Certified User yana nuna cewa kuna iya amfani da QuickBooks. Intuit Certified Bookkeeping Professional yana nuna kun san tushen ajiyar lissafi. Certiport, kamfanin Pearson VUE, ne ke gudanar da jarabawoyin biyu, kuma Intuit Academy tana ba da horo. Akantoci kuma suna iya samun takardar shaidar QuickBooks ProAdvisor. Wannan kwas yana shirya ku ne; ba ya ba da kowace takardar shaida. Kuɗaɗe, sharuɗɗan cancanta da bayanan jarabawa suna canjawa, don haka ku duba shafukan hukuma.",
            "Mai ajiyar lissafi ba mai shirya haraji ba ne, kuma ba certified public accountant (CPA, akanta mai lasisi) ba ne. Ku kuna tsabtace bayanai; tambayoyin haraji ana kai su ga ƙwararren haraji ko irs.gov."
          ],
          words: [["Mai ajiyar lissafi (bookkeeper)", "mutumin da ke rubuta kuɗin shiga da na fita na kasuwanci kuma yana tabbatar bayanan sun yi daidai."], ["QuickBooks Online", "manhajar ajiyar lissafi ta Intuit da ke aiki a burauzar intanet."], ["Takardar shaida (credential)", "satifiket da ke nuna kun ci jarabawar hukuma."], ["Certiport", "kamfanin Pearson VUE da ke gudanar da jarabawoyin takardun shaidar Intuit."], ["CPA", "certified public accountant: akanta mai lasisi da zai iya yin aikin da mai ajiyar lissafi ba zai iya ba, kamar binciken lissafi (audit)."]],
          slides: [
            { title: "Abin da mai ajiyar lissafi da QuickBooks ke yi", bullets: ["Invoice da biyan kuɗin abokan ciniki", "Bill da kashe kuɗi", "Bank feed da daidaita banki kowane wata", "Rahotanni da rasitoci"] },
            { title: "Inda masu ajiyar lissafi ke aiki", bullets: ["Kamfani ɗaya ko kamfanin akanta", "Ƙananan abokan ciniki da yawa, a matsayin kasuwancinku", "Coci-coci da ƙungiyoyin sa-kai"] },
            { title: "Takardun shaida da za su iya taimakawa", bullets: ["QuickBooks Certified User", "Intuit Certified Bookkeeping Professional", "Certiport ke gudanar da jarabawoyin; ku duba shafin hukuma"] },
            { title: "Ku san matsayinku", bullets: ["Ku kuna tsabtace bayanai", "Tambayoyin haraji ga ƙwararren haraji ko irs.gov", "Wannan kwas yana shirya ku; jarabawa ce ke ba da takardar shaida"] }
          ],
          sources: [CERTIPORT, ACADEMY, PROADVISOR],
          tryIt: "Ku nemo tallar aikin ajiyar lissafi ɗaya a intanet (ku nemi \"bookkeeper QuickBooks\" a shafin neman aiki). Ku rubuta ayyuka huɗu da ta lissafa, da ko tana neman takardar shaidar QuickBooks. Sannan ku buɗe shafin Certiport da ke cikin majiyoyi, ku rubuta sunayen takardun shaidar Intuit biyu da suka dace.",
          youCanNow: "jera abin da mai ajiyar lissafi da QuickBooks ke yi, da ambaton takardar shaida da ta dace da aikin.",
          quickCheck: [
            { objective: "O1", q: "Wane aiki ne yake cikin aikin wata-wata na mai ajiyar lissafi?", options: ["Sa hannu a takardar harajin kamfani a matsayin CPA", "Daidaita asusun banki", "Binciken lissafin wani kamfani (audit)", "Ba da shawarar zuba jari"], answer: 1, why: "Daidaita banki kowane wata babban aikin ajiyar lissafi ne." },
            { objective: "O1", q: "Wane ne ke gudanar da jarabawar QuickBooks Certified User?", options: ["Hukumar IRS", "Ofishin ƙwadago na jiharku", "Kowane mai amfani da QuickBooks", "Certiport, a madadin Intuit"], answer: 3, why: "Certiport, kamfanin Pearson VUE, ne ke gudanar da jarabawoyin takardun shaidar Intuit." }
          ]
        },
        {
          title: "Jerin asusu da shigarwa mai ɓangarori biyu",
          objectives: ["O2"],
          minutes: 6,
          goal: "Raba harkokin kuɗin kasuwanci zuwa nau'o'in asusu guda biyar.",
          text: [
            "Jerin asusu (chart of accounts) shi ne jerin kowane wuri da za a iya raba kuɗi a QuickBooks. Kowane asusu yana cikin ɗaya daga cikin nau'o'i biyar. Kuɗin shiga (income): kuɗin da aka samu, kamar sayarwa ko gudummawa. Kashe kuɗi (expenses): kuɗin gudanar da kasuwanci, kamar kayan aiki, haya da mai. Kadarori (assets): abubuwan da kasuwancin ya mallaka ko ake binsa, kamar asusun banki, kayan aiki da kuɗin da abokan ciniki ke ci bashi. Basussuka (liabilities): kuɗin da kasuwancin ke ci bashi, kamar lamuni, katin bashi (credit card) ko bill da ba a biya ba tukuna. Hannun jarin mai shi (equity): rabon mai shi, har da kuɗin da mai shi ya saka ko ya ɗauka.",
            "Kowace shigarwa tana taɓa aƙalla asusu biyu. Ana kiran wannan double-entry bookkeeping (ajiyar lissafi mai ɓangarori biyu). Idan kun aika invoice na $200, kuɗin shiga yana ƙaruwa, kuma kuɗin da abokan ciniki ke binku (accounts receivable) yana ƙaruwa. Idan abokin ciniki ya biya, accounts receivable yana raguwa, banki kuma yana ƙaruwa. QuickBooks yana yi muku ɓangare na biyun idan kun yi amfani da fom ɗin da ya dace, shi ya sa zaɓin fom da asusun da suka dace yake da muhimmanci.",
            "QuickBooks yana ba kowane sabon kamfani jerin asusu na farko bisa irin kasuwancin. Mai ajiyar lissafi yana tsabtace shi: yana ƙara asusun da kasuwancin ke amfani da su da gaske, yana canja sunayen da ba su da sarari, kuma yana ajiye sunaye iri ɗaya kowane wata. Ƙungiyar sa-kai na iya ƙara asusu kamar Gudummawa (Donations), Tallafi (Grants) da Kayan shiri (Program supplies).",
            "A test drive, ku nemi \"chart of accounts\" don buɗe jerin ku ga nau'in kowane asusu."
          ],
          steps: ["Ku buɗe jerin asusu (ku nemo shi idan ba ku gan shi ba).", "Ku karanta nau'in kowane asusu: kuɗin shiga, kashe kuɗi, kadara, bashi ko hannun jarin mai shi.", "Ku ƙara asusun da kasuwancin ke amfani da su da gaske.", "Ku canja sunayen asusun da ba su da sarari don kowa ya fahimta.", "Ku yi amfani da asusu ɗaya koyaushe don irin kuɗi ɗaya."],
          words: [["Jerin asusu (chart of accounts)", "jerin kowane asusu da za a iya raba kuɗi a cikinsa."], ["Kadara (asset)", "abin da kasuwancin ya mallaka ko ake binsa, kamar kuɗi a banki ko kayan aiki."], ["Bashi (liability)", "kuɗin da kasuwancin ke ci bashi, kamar lamuni ko bill da ba a biya ba."], ["Hannun jarin mai shi (equity)", "rabon mai shi a kasuwancin."], ["Accounts receivable (A/R)", "kuɗin da abokan ciniki ke ci bashin kasuwancin."], ["Accounts payable (A/P)", "kuɗin da kasuwancin ke ci bashin masu sayarwa a bill da ba a biya ba tukuna."], ["Double-entry (ɓangarori biyu)", "kowace shigarwa tana canja aƙalla asusu biyu don lissafi ya kasance daidai."]],
          slides: [
            { title: "Nau'o'in asusu guda biyar", bullets: ["Kuɗin shiga da kashe kuɗi", "Kadarori da basussuka", "Equity: rabon mai shi"] },
            { title: "Kowace shigarwa tana da ɓangarori biyu", bullets: ["Invoice: kuɗin shiga ya ƙaru, A/R ya ƙaru", "Biya: A/R ya ragu, banki ya ƙaru", "Fom ɗin da ya dace yana sa QuickBooks ya yi duka biyun"] },
            { title: "Ku tsabtace jerin", bullets: ["Ku ƙara asusun da kasuwancin ke amfani da su", "Ku canja sunayen da ba su da sarari", "Asusu ɗaya don irin kuɗi ɗaya"] },
            { title: "Misalin ƙungiyar sa-kai", bullets: ["Kuɗin shiga: Gudummawa, Tallafi", "Kashe kuɗi: Kayan shiri, Haya"] }
          ],
          tryIt: "A takarda, ku yi layuka biyu: Abu da Nau'in asusu. Ku raba waɗannan abubuwa goma: kayan share-share, kuɗi a asusun banki na kasuwancin, abokin ciniki da ke ci bashin $150, lamunin mota, sayar da aikin share-share, mai shi ya saka $500 don farawa, haya, bashin katin bashi, tallafin da aka bayar (na ƙungiyar sa-kai), da sabuwar injin share ƙura (vacuum). Sannan ku buɗe jerin asusu a test drive ku kwatanta yadda kamfanin misalin ke raba abubuwa makamantan haka.",
          youCanNow: "raba harkokin kuɗi zuwa asusun kuɗin shiga, kashe kuɗi, kadara, bashi da hannun jarin mai shi.",
          quickCheck: [
            { objective: "O2", q: "Kasuwanci yana ci bashin $3,000 na lamunin mota. Wane nau'in asusu ne lamunin?", options: ["Bashi (liability)", "Kuɗin shiga (income)", "Kashe kuɗi (expense)", "Hannun jarin mai shi (equity)"], answer: 0, why: "Kuɗin da kasuwancin ke ci bashi bashi ne (liability)." },
            { objective: "O2", q: "Kuɗin da abokan ciniki har yanzu ke ci bashin kasuwancin ana bin diddiginsa a:", options: ["Accounts payable", "Kashe kuɗin haya", "Accounts receivable", "Hannun jarin mai shi"], answer: 2, why: "Accounts receivable (A/R) shi ne kuɗin da abokan ciniki ke ci bashi." }
          ]
        },
        {
          title: "Invoice, sales receipt da biyan kuɗin abokan ciniki",
          objectives: ["O3"],
          minutes: 6,
          goal: "Rubuta invoice, sales receipt da biyan kuɗin abokin ciniki a QuickBooks.",
          text: [
            "Ku yi amfani da invoice idan abokin ciniki zai biya daga baya. Invoice yana nuna abokin ciniki, kwanan wata, kayayyaki ko ayyuka, adadi da ranar ƙarshe ta biya. Ku yi amfani da sales receipt (rasitin sayarwa) idan abokin ciniki ya biya a lokacin sayarwa, kamar sayarwa a motar abinci. Duka biyun suna rubuta kuɗin shiga; invoice ne kaɗai ke ƙirƙirar kuɗin da ake bi bashi (accounts receivable).",
            "Idan aka biya invoice, ku rubuta biyan a kan wannan invoice. Kada ku ƙirƙiri sabuwar sayarwa, in ba haka ba za a ƙidaya kuɗin shigar sau biyu. Sannan QuickBooks yana nuna cewa an biya invoice ɗin. Idan abokin ciniki ya biya da tsabar kuɗi ko cak, QuickBooks na iya riƙe biyan har sai kun rubuta ajiyar banki (deposit), don ajiyar ta yi daidai da abin da banki ke nunawa.",
            "Ku saka kowane abokin ciniki sau ɗaya da sunansa da bayanan tuntuɓarsa, kuma ku saka kowane kaya ko aiki sau ɗaya da farashinsa da asusun kuɗin shigarsa. Sannan kowane invoice yana amfani da asusu iri ɗaya.",
            "A QuickBooks Online, sababbin fom kamar invoice, sales receipt da biyan kuɗi suna farawa daga maɓallin New (+). A test drive, babu abin da ake ajiyewa, don haka ku rubuta abin da kuka shigar."
          ],
          steps: ["Ku zaɓi fom: invoice (biya daga baya) ko sales receipt (an biya yanzu).", "Ku zaɓi abokin ciniki, ko ku ƙara sabo.", "Ku shigar da kwanan wata, kaya ko aiki, adadi da ranar ƙarshe ta biya.", "Ku ajiye fom ɗin.", "Idan abokin ciniki ya biya invoice, ku rubuta biyan a kan wannan invoice.", "Ku rubuta ajiyar banki idan QuickBooks ya riƙe biyan don ajiya daga baya.", "Ku duba cewa invoice ɗin yanzu yana nuna an biya."],
          words: [["Invoice", "takardar bashi da kuke aika wa abokin ciniki da zai biya daga baya."], ["Sales receipt (rasitin sayarwa)", "rubutun sayarwa da aka biya a lokacin sayarwa."], ["Biyan kuɗin abokin ciniki (customer payment)", "rubutun cewa abokin ciniki ya biya invoice."], ["Ajiyar banki (deposit)", "kuɗin da aka saka a banki, wanda ya kamata ya yi daidai da bayanin banki."]],
          slides: [
            { title: "Invoice ko sales receipt?", bullets: ["Invoice: abokin ciniki zai biya daga baya", "Sales receipt: an biya a lokacin sayarwa", "Invoice ne kaɗai ke ƙirƙirar A/R"] },
            { title: "Ku rubuta biyan a kan invoice", bullets: ["Kada ku taɓa yin sayarwa ta biyu dominsa", "In ba haka ba za a ƙidaya kuɗin shiga sau biyu", "Sannan invoice ɗin yana nuna an biya"] },
            { title: "Ku saka sau ɗaya, ku yi amfani koyaushe", bullets: ["Abokan ciniki da bayanan tuntuɓarsu", "Kayayyaki da ayyuka da farashi da asusun kuɗin shiga"] },
            { title: "Ajiya ta yi daidai da banki", bullets: ["Tsabar kuɗi da cak na iya jira kafin a ajiye su", "Ku rubuta ajiyar don ta yi daidai da bayanin banki"] }
          ],
          sources: [TESTDRIVE],
          tryIt: "Ku buɗe QuickBooks Online test drive (hanyar haɗi tana cikin majiyoyi; ku buɗe ta a taga mai sirri ta burauza). Ku ƙirƙiri invoice na $250 na aikin gyaran lambu ga wani abokin ciniki na misali, mai ranar biya cikin kwanaki 30. Sannan ku karɓi biyan wannan invoice, ku duba cewa invoice ɗin yana nuna an biya. Ku rubuta abokin ciniki, kwanan wata, adadi da asusun kuɗin shiga a takarda, domin test drive ba ya ajiyewa. Ba ku da kwamfuta? Ku zana invoice da biyan a takarda.",
          youCanNow: "rubuta invoice, sales receipt da biyan kuɗin abokin ciniki ta yadda za a ƙidaya kuɗin shiga sau ɗaya kawai.",
          quickCheck: [
            { objective: "O3", q: "Abokin ciniki na motar abinci ya biya a tagar sayarwa. Wane fom za ku yi amfani da shi?", options: ["Invoice", "Bill", "Purchase order (odar saye)", "Sales receipt"], answer: 3, why: "Sales receipt yana rubuta sayarwa da aka biya a lokacin sayarwa." },
            { objective: "O3", q: "Abokin ciniki ya biya invoice na $250. Me za ku rubuta?", options: ["Sabon sales receipt na $250", "Biya a kan wannan invoice", "Bill na $250", "Babu komai; QuickBooks ya sani"], answer: 1, why: "Rubuta biyan a kan invoice yana rufe shi ba tare da ƙidaya kuɗin shiga sau biyu ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsarawa da rubuta sayarwa",
        questions: [
          { objective: "O1", q: "Wace magana ce gaskiya game da wannan kwas?", options: ["Yana shirya ku; jarabawar hukuma ce ke ba da takardar shaida", "Yana ba da QuickBooks Certified User", "Yana mai da ku CPA", "Yana maye gurbin mai shirya haraji"], answer: 0, why: "Kwas ɗin yana shirya ku; Certiport ne ke gudanar da jarabawar da ke ba da takardar shaidar." },
          { objective: "O2", q: "Hayar da aka biya ta shago wane nau'in asusu ne?", options: ["Kadara", "Bashi", "Kashe kuɗi", "Kuɗin shiga"], answer: 2, why: "Haya kuɗin gudanar da kasuwanci ne, don haka kashe kuɗi ce (expense)." },
          { objective: "O2", q: "Mai shi ya saka $500 na kuɗinsa a kasuwancin. Wannan yana zuwa:", options: ["Kuɗin shigar sayarwa", "Hannun jarin mai shi (equity)", "Accounts payable", "Kashe kuɗin kayan aiki"], answer: 1, why: "Kuɗin da mai shi ya saka ɓangare ne na hannun jarinsa, ba kuɗin shiga ba." },
          { objective: "O3", q: "Wani abokin cinikin share-share zai biya cikin kwanaki 30. Wane fom za ku ƙirƙira?", options: ["Sales receipt", "Bill", "Ajiyar banki", "Invoice"], answer: 3, why: "Invoice na abokin ciniki ne da zai biya daga baya." },
          { objective: "O3", q: "Wani mai ajiyar lissafi ya yi sabuwar sayarwa don biyan abokin ciniki maimakon rubuta biyan a kan invoice. Me zai lalace?", options: ["Za a ƙidaya kuɗin shiga sau biyu kuma invoice ɗin zai kasance a buɗe", "Babu abin da zai lalace", "Kuɗin banki zai ragu", "Za a caji abokin ciniki ƙarin kuɗi"], answer: 0, why: "Invoice da sabuwar sayarwa duka suna ƙidaya a matsayin kuɗin shiga, kuma invoice ɗin har yanzu yana kama da ba a biya ba." }
        ]
      }
    },
    {
      name: "Babi na 2: Bill, banki da ƙarshen wata",
      lessons: [
        {
          title: "Bill, kashe kuɗi da masu sayarwa",
          objectives: ["O4"],
          minutes: 6,
          goal: "Shigar da bill, kashe kuɗi da biyan bill tare da mai sayarwa da asusun da suka dace.",
          text: [
            "Mai sayarwa (vendor) shi ne duk wanda kasuwancin ke saye daga gare shi: shagon kayan aiki, mai gida, kamfanin waya. Ku saka kowane mai sayarwa sau ɗaya.",
            "Ku yi amfani da bill idan kasuwancin zai biya daga baya, kamar invoice na mai kawo kaya da ranar biyansa cikin kwanaki 30. Bill yana shiga accounts payable. Idan kun biya shi, ku rubuta biyan bill (bill payment) a kan wannan bill don kada a ƙidaya shi sau biyu. Ku yi amfani da expense (kashe kuɗi) idan kasuwancin ya biya nan take, kamar saye da kati a shagon kayan gini.",
            "Ku zaɓi asusun kashe kuɗi da ya dace da abin da aka saya: Kayan aiki, Mai, Haya, Waya. Ku haɗa hoton rasitin a QuickBooks, ko ku rubuta lambar rasitin a wurin bayani (memo). Rasitoci suna tabbatar da kowane kashe kuɗi idan wani ya tambaya daga baya.",
            "Idan kasuwancin yana biyan 'yan kwangila (contractors), ku karɓi Form W-9 daga kowannensu kafin ku biya, ku kuma yi musu alama a matsayin 'yan kwangila, domin wasu kasuwanci dole su gabatar da rahotannin bayani (information returns) game da su. Dokokin da adadin dala suna canjawa, don haka ku duba irs.gov ko ƙwararren haraji."
          ],
          steps: ["Ku zaɓi mai sayarwa, ko ku ƙara sabo.", "Ku zaɓi bill (biya daga baya) ko expense (an biya yanzu).", "Ku shigar da kwanan wata, adadi da asusun kashe kuɗi da ya dace.", "Ku haɗa rasitin ko ku rubuta lambarsa.", "Idan kun biya bill, ku rubuta biyan bill a kan wannan bill.", "Ku duba cewa bill ɗin yanzu yana nuna an biya."],
          words: [["Mai sayarwa (vendor)", "mutum ko kasuwanci da kasuwancin ke saye daga gare shi."], ["Bill", "rubutun abin da kasuwancin zai biya daga baya."], ["Kashe kuɗi (expense)", "rubutun abin da kasuwancin ya biya nan take."], ["Biyan bill (bill payment)", "rubutun cewa an biya bill."], ["Form W-9", "fom ɗin IRS da ɗan kwangila ke cikewa da sunansa da lambar harajinsa don bayanan kasuwancin."]],
          slides: [
            { title: "Bill ko expense?", bullets: ["Bill: biya daga baya, yana shiga A/P", "Expense: an biya nan take", "Ku biya bill da bill payment, ba sabon expense ba"] },
            { title: "Ku zaɓi asusun da ya dace", bullets: ["Kayan aiki, Mai, Haya, Waya", "Asusu ɗaya koyaushe"] },
            { title: "Shaida ga kowane kashe kuɗi", bullets: ["Ku haɗa hoton rasiti", "Ko ku rubuta lambar rasitin a memo"] },
            { title: "Biyan 'yan kwangila", bullets: ["Ku karɓi Form W-9 kafin ku biya", "Ku yi musu alama a matsayin 'yan kwangila", "Ku duba irs.gov don dokokin gabatarwa na yanzu"] }
          ],
          sources: [{ name: "IRS: Game da Form W-9", url: "https://www.irs.gov/forms-pubs/about-form-w-9" }, TESTDRIVE],
          tryIt: "A test drive ko a takarda, ku shigar da abubuwa uku: bill na kayan aiki na $120 da ranar biyansa cikin kwanaki 30, sayen mai na $45 da aka biya da kati yau, da biyan bill ɗin $120 bayan makonni biyu. Ga kowanne, ku rubuta mai sayarwa, fom ɗin da kuka yi amfani da shi, asusun da adadin. Sannan ku bayyana a jimla ɗaya dalilin da yasa biyan bill ba sabon kashe kuɗi ba ne.",
          youCanNow: "shigar da bill, kashe kuɗi da biyan bill tare da mai sayarwa, asusu da rasitin da suka dace.",
          quickCheck: [
            { objective: "O4", q: "Mai kawo kaya ya aiko da bill mai ranar biya cikin kwanaki 30. Me za ku shigar yau?", options: ["Expense", "Bill", "Invoice", "Sales receipt"], answer: 1, why: "Bill yana rubuta abin da kasuwancin zai biya daga baya." },
            { objective: "O4", q: "Kun biya wannan bill bayan makonni biyu. Me za ku rubuta?", options: ["Sabon expense na adadi ɗaya", "Ajiyar banki", "Biyan bill a kan wannan bill", "Babu komai"], answer: 2, why: "Biyan bill yana rufe bill ɗin ba tare da ƙidaya kuɗin sau biyu ba." }
          ]
        },
        {
          title: "Bank feed da daidaita banki",
          objectives: ["O5"],
          minutes: 6,
          goal: "Haɗa layukan bank feed da shigarwa, ku daidaita asusun banki har bambanci ya zama sifili.",
          text: [
            "QuickBooks zai iya haɗuwa da bankin kasuwancin ya sauko da ma'amalolinsa. Wannan shi ne bank feed. Kowane layi da aka sauko yana jiran ku duba shi. Idan kun riga kun shigar da shi, ku haɗa (match) shi da wannan shigarwa. Idan ba haka ba, ku ƙara shi da wanda aka biya da asusun da suka dace. Kada ku taɓa ƙara layin da aka riga aka shigar, in ba haka ba za a ƙidaya shi sau biyu. Mai kasuwancin ne ke haɗa bankin; mai ajiyar lissafi ba ya taɓa neman kalmar sirrin bankin mai shi.",
            "Daidaita banki (bank reconciliation) yana tabbatar da cewa QuickBooks ya yi daidai da bayanin banki. Sau ɗaya a wata, ku ɗauki bayanin bankin, ku shigar da kuɗin ƙarshe (ending balance) da kwanan watansa, sannan ku yi alama (tick) ga kowace ajiya da biya a QuickBooks da ke kan bayanin. Idan bambancin ya zama sifili, ku kammala daidaitawar.",
            "Idan bambancin bai zama sifili ba, ku nemi dalilan da aka saba: kuɗin banki (fee) ko riba (interest) da ba a shigar ba, shigarwa da aka rubuta da adadin da ba daidai ba, kwafi biyu, ko shigarwa a watan da ba daidai ba. Cak-cak da ba a biya su a banki ba tukuna suna zama ba tare da alama ba; za a biya su a wata mai zuwa.",
            "Kada ku taɓa tilasta daidaitawa zuwa sifili ta hanyar ƙirƙirar shigarwar ƙarya. Idan ba ku iya gano matsalar ba, ku rubuta bayani ku tambayi mai shi ko akanta."
          ],
          steps: ["Ku duba kowane sabon layin bank feed.", "Ku haɗa shi da shigarwar da ke akwai, ko ku ƙara shi da wanda aka biya da asusun da suka dace.", "Ku samo bayanin banki na watan.", "Ku fara daidaitawa ku shigar da kwanan wata da kuɗin ƙarshe na bayanin.", "Ku yi alama ga kowace shigarwa da ke kan bayanin.", "Ku gano ku gyara duk abin da ke hana bambancin zama sifili.", "Ku kammala idan bambancin ya zama sifili, ko ku rubuta bayani ku nemi taimako."],
          words: [["Bank feed", "ma'amalolin banki da QuickBooks ke sauko muku don ku duba."], ["Haɗawa (match)", "haɗa layin banki da aka sauko da shigarwar da ke cikin QuickBooks tun da farko."], ["Daidaitawa (reconcile)", "duba cewa bayananku sun yi daidai da bayanin banki, layi bayan layi."], ["Bambanci (difference)", "tazara tsakanin QuickBooks da bayanin banki lokacin daidaitawa; ya kamata ya zama sifili."], ["Cak da ba a biya ba (uncleared check)", "cak da kuka rubuta wanda banki bai biya ba tukuna."]],
          slides: [
            { title: "Ku duba bank feed", bullets: ["An riga an shigar? Ku haɗa shi", "Ba a shigar ba? Ku ƙara shi da asusun da ya dace", "Kada ku taɓa ƙara layi sau biyu"] },
            { title: "Ku daidaita sau ɗaya a wata", bullets: ["Ku shigar da kwanan wata da kuɗin ƙarshe na bayanin", "Ku yi alama ga kowane layi da ke kan bayanin", "Ku kammala idan bambanci ya zama sifili"] },
            { title: "Idan bai yi daidai ba", bullets: ["Kuɗin banki ko riba da ba a shigar ba", "Adadin da ba daidai ba, kwafi biyu ko watan da ba daidai ba", "Cak-cak da ba a biya ba suna jiran wata mai zuwa"] },
            { title: "Ku kasance masu gaskiya da aminci", bullets: ["Kada ku tilasta shi da shigarwar ƙarya", "Ku rubuta bayani ku nemi taimako", "Kada ku taɓa neman kalmar sirrin bankin mai shi"] }
          ],
          sources: [TESTDRIVE],
          tryIt: "Ku yi bayanin banki na atisaye a takarda: kuɗin farko $1,000; ajiya $250 da $400; biya $120, $45 da $60; kuɗin banki $5; kuɗin ƙarshe $1,420. Rajistarku tana da kowane layi sai kuɗin bankin, da ƙarin cak na $75 da ba a biya ba tukuna. Ku yi alama ga layukan da suka yi daidai, ku gano abin da ke hana bambancin zama sifili, ku rubuta abin da za ku shigar. A test drive, ku buɗe shafin banki ku ga yadda layukan da aka sauko ke jiran a haɗa su ko a ƙara su.",
          youCanNow: "haɗa layukan bank feed da daidaita asusun banki har bambanci ya zama sifili, ko rubuta abin da bai yi daidai ba tukuna.",
          quickCheck: [
            { objective: "O5", q: "Wani layin bank feed biya ne da kuka riga kuka shigar a matsayin biyan bill. Me za ku yi?", options: ["Ku haɗa shi da wannan biyan bill", "Ku ƙara shi a matsayin sabon expense", "Ku goge bill ɗin", "Ku yi watsi da shi har abada"], answer: 0, why: "Haɗawa tana haɗa layin banki da shigarwarku ba tare da ƙidaya shi sau biyu ba." },
            { objective: "O5", q: "Daidaitawarku ta kauce da $5, kuma bayanin banki yana nuna kuɗin banki na $5. Mene ne mataki mafi kyau?", options: ["Ku ƙirƙiri shigarwar ƙarya ta kowane adadi", "Ku tsallake daidaitawa a wannan watan", "Ku canja kuɗin ƙarshe na bayanin", "Ku shigar da kuɗin bankin $5 a matsayin expense"], answer: 3, why: "Kuɗin banki da ba a shigar ba dalili ne da aka saba; shigar da shi yana gyara bambancin cikin gaskiya." }
          ]
        },
        {
          title: "Rahotanni da rufe ƙarshen wata",
          objectives: ["O6"],
          minutes: 6,
          goal: "Fitar da bayanin rahoton riba da asara, balance sheet da rahoton invoice da ba a biya ba.",
          text: [
            "Rahoton riba da asara (profit and loss, P&L) yana nuna kuɗin shiga a cire kashe kuɗi na wani lokaci, kamar wata ɗaya. Idan kuɗin shiga ya fi yawa, kasuwancin ya ci riba; idan kashe kuɗi ya fi yawa, ya yi asara. Balance sheet yana nuna, a rana ɗaya, abin da kasuwancin ke da shi (kadarori), abin da yake ci bashi (basussuka) da rabon mai shi (equity).",
            "Rahoton accounts receivable aging yana nuna waɗanne abokan ciniki har yanzu suke da bashi da yawan jinkirinsu. Rahoton accounts payable aging yana nuna waɗanne bill kasuwancin har yanzu ke ci bashi. Waɗannan rahotanni biyu suna gaya wa mai shi wanda zai kira da abin da zai biya a gaba.",
            "Rufe ƙarshen wata (month-end close) shi ne jerin abubuwan yi da mai ajiyar lissafi ke bi kowane wata: an shigar da duk sayarwa, biya, bill da kashe kuɗi; an duba bank feed; an daidaita kowane asusun banki da na katin bashi; an haɗa rasitoci; an fitar da rahotanni an aika wa mai shi da gajeren bayani. Ƙungiyoyin sa-kai na iya fitar da rahotanni bisa shiri ko tallafi.",
            "Ku fitar da rahotanni daga wurin Reports; ku nemi rahoton da sunansa. Rahoto yana da kyau ne kawai idan shigarwar da ke bayansa sun yi kyau, don haka ku fara daidaitawa."
          ],
          steps: ["Ku gama shigar da sayarwa, biya, bill da kashe kuɗin watan.", "Ku duba bank feed ku daidaita kowane asusun banki da na kati.", "Ku fitar da rahoton riba da asara na watan.", "Ku fitar da balance sheet na ranar ƙarshe ta watan.", "Ku fitar da rahoton accounts receivable aging.", "Ku rubuta wa mai shi gajeren bayani: riba ko asara, waɗanda ke da bashi da bill da ranar biyansu ta kusa."],
          words: [["Riba da asara (profit and loss, P&L)", "rahoton kuɗin shiga a cire kashe kuɗi na wani lokaci; ana kuma kiransa income statement."], ["Balance sheet", "rahoton kadarori, basussuka da hannun jarin mai shi a rana ɗaya."], ["Rahoton aging", "rahoton kuɗin da ake bi bashi, an jera shi bisa yawan kwanakin jinkiri."], ["Rufe ƙarshen wata (month-end close)", "jerin abubuwan yi da ke kammala lissafin wata."]],
          slides: [
            { title: "Riba da asara", bullets: ["Kuɗin shiga a cire kashe kuɗi na wani lokaci", "Riba ko asarar watan"] },
            { title: "Balance sheet", bullets: ["A rana ɗaya", "Kadarori, basussuka da equity"] },
            { title: "Wane ne ke bin wane", bullets: ["A/R aging: abokan ciniki da ke ci bashin kasuwancin", "A/P aging: bill da kasuwancin ke ci bashi"] },
            { title: "Jerin abubuwan yi na ƙarshen wata", bullets: ["An shigar da komai, an duba bank feed", "An daidaita kowane asusun banki da na kati", "An fitar da rahotanni, gajeren bayani ga mai shi"] }
          ],
          sources: [TESTDRIVE],
          tryIt: "A test drive, ku fitar da rahoton riba da asara na watan da ya gabata da rahoton accounts receivable aging. Ku rubuta wa mai shi jimloli uku: jimillar kuɗin shiga da jimillar kashe kuɗin watan, ko an ci riba ko an yi asara, da wane abokin ciniki ne ke da bashi mafi yawa. Ba ku da kwamfuta? Ku yi amfani da aikinku daga darussan baya ku rubuta bayanin a takarda.",
          youCanNow: "fitar da manyan rahotanni, bayyana su ga mai shi da rufe lissafin wata.",
          quickCheck: [
            { objective: "O6", q: "Wane rahoto ne ke nuna ko kasuwancin ya sami kuɗi a watan da ya gabata?", options: ["Balance sheet", "Riba da asara (P&L)", "Jerin masu sayarwa", "Jerin asusu"], answer: 1, why: "Rahoton riba da asara yana nuna kuɗin shiga a cire kashe kuɗi na wani lokaci." },
            { objective: "O6", q: "Mai shi ya tambayi waɗanne abokan ciniki suka yi jinkirin biya. Wane rahoto za ku fitar?", options: ["Accounts payable aging", "Riba da asara", "Accounts receivable aging", "Balance sheet"], answer: 2, why: "Rahoton A/R aging yana jera abokan ciniki da ke da bashi da yawan jinkirinsu." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Bill, banki da ƙarshen wata",
        questions: [
          { objective: "O4", q: "Kun biya $45 na mai da katin kasuwancin yau. Wane fom ne ya dace?", options: ["Bill", "Invoice", "Expense", "Sales receipt"], answer: 2, why: "Expense yana rubuta abin da aka biya nan take." },
          { objective: "O4", q: "Kafin biyan sabon ɗan kwangila, mai ajiyar lissafi mai kulawa yana:", options: ["Karɓar Form W-9 da duba irs.gov don dokokin gabatarwa", "Biya da tsabar kuɗi ba tare da rubutu ba", "Rubuta biyan a matsayin kuɗin shiga", "Neman kalmar sirrin bankin ɗan kwangilar"], answer: 0, why: "W-9 yana ba kasuwancin bayanan ɗan kwangilar don rajistarsa da rahotanninsa." },
          { objective: "O5", q: "Daidaitawa ta ƙi zuwa sifili kuma ba ku iya gano dalili ba. Me za ku yi?", options: ["Ku ƙara shigarwar ƙarya don tilasta ta", "Ku goge tsofaffin shigarwa", "Ku canja kuɗin ƙarshe na bayanin", "Ku rubuta bayani ku tambayi mai shi ko akanta"], answer: 3, why: "Tilastawa tana ɓoye ainihin matsalar; bayani da tambaya suna sa lissafi ya kasance na gaskiya." },
          { objective: "O5", q: "Cak na $75 da kuka rubuta baya kan bayanin bankin wannan watan. A daidaitawa, ku:", options: ["Goge cak ɗin", "Bar shi ba tare da alama ba; ya kamata a biya shi daga baya", "Sake shigar da shi", "Yi masa alama a matsayin kuɗin shiga"], answer: 1, why: "Cak da ba a biya ba yana zama ba tare da alama ba har sai ya bayyana a bayanin banki." },
          { objective: "O6", q: "Balance sheet yana nuna:", options: ["Kadarori, basussuka da equity a rana ɗaya", "Sayarwar watan da ya gabata kawai", "Lambar wayar kowane abokin ciniki", "Layukan bank feed"], answer: 0, why: "Balance sheet hoto ne na kadarori, basussuka da equity a rana ɗaya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Ajiyar Lissafin Kuɗi da QuickBooks",
    questions: [
      { objective: "O1", q: "Wanne ne babban aikin mai ajiyar lissafi da QuickBooks?", options: ["Ba da shawarar shari'a", "Rubuta invoice, bill da harkokin banki", "Sa hannu a binciken lissafi (audit) a matsayin CPA", "Zaɓar wa mai shi hanyoyin zuba jari"], answer: 1, why: "Rubuta sayarwa, bill da harkokin banki daidai shi ne zuciyar aikin." },
      { objective: "O1", q: "A ina ya kamata ku duba bayanai da kuɗaɗen jarabawar QuickBooks Certified User na yanzu?", options: ["Saƙo a kafofin sada zumunta", "Tsofaffin rubuce-rubucen aboki", "Kowane dandalin tattaunawa a intanet", "Shafin hukuma na Certiport na takardun shaidar Intuit"], answer: 3, why: "Kuɗaɗe da bayanan jarabawa suna canjawa, don haka shafin hukuma shi ne wurin dubawa." },
      { objective: "O1", q: "Wani abokin ciniki ya tambaya yadda zai rage harajinsa. A matsayinku na mai ajiyar lissafi, ku:", options: ["Tura shi ga ƙwararren haraji ko irs.gov", "Yi tsammanin amsa", "Canja lambobinsa", "Gaya masa haraji ba dole ba ne"], answer: 0, why: "Mai ajiyar lissafi yana ajiye bayanai; shawarar haraji tana zuwa daga ƙwararren haraji ko IRS." },
      { objective: "O2", q: "Sabuwar injin share ƙura (vacuum) da kasuwancin share-share ya mallaka wane nau'in asusu ne?", options: ["Kuɗin shiga", "Kashe kuɗi", "Kadara", "Bashi"], answer: 2, why: "Kayan aikin da kasuwancin ya mallaka kadara ne (asset)." },
      { objective: "O2", q: "Bashin da ke kan katin bashi na kasuwancin:", options: ["Bashi ne (liability)", "Kadara ne", "Kuɗin shiga ne", "Equity ne"], answer: 0, why: "Kuɗin da kasuwancin ke ci bashi a kati bashi ne (liability)." },
      { objective: "O2", q: "Mene ne ma'anar double-entry bookkeeping?", options: ["Kuna rubuta kowace shigarwa sau biyu", "Dole mutane biyu su amince da kowace shigarwa", "Kuɗin shiga ne kaɗai ake rubutawa", "Kowace shigarwa tana canja aƙalla asusu biyu"], answer: 3, why: "Kowace shigarwa tana da ɓangarori biyu, wanda ke sa lissafi ya kasance daidai." },
      { objective: "O3", q: "Yaushe mai ajiyar lissafi ke amfani da invoice?", options: ["Idan abokin ciniki ya biya a lokacin sayarwa", "Idan abokin ciniki zai biya daga baya", "Idan kasuwancin ya sayi kayan aiki", "Idan banki ya caji kuɗi"], answer: 1, why: "Invoice na abokin ciniki ne da zai biya daga baya." },
      { objective: "O3", q: "Aika invoice na $200 yana ƙara kuɗin shiga da:", options: ["Accounts payable", "Kuɗin banki", "Accounts receivable", "Kashe kuɗin haya"], answer: 2, why: "Invoice yana ƙirƙirar kuɗin da abokin ciniki ke ci bashi: accounts receivable." },
      { objective: "O3", q: "Abokin ciniki ya biya invoice da ke buɗe da cak. Me za ku rubuta?", options: ["Biya a kan wannan invoice, sannan ajiyar banki", "Sabon sales receipt", "Bill", "Sabon invoice"], answer: 0, why: "Rubuta biyan a kan invoice yana rufe shi, kuma ajiyar tana yin daidai da banki." },
      { objective: "O4", q: "Wane ne mai sayarwa (vendor)?", options: ["Abokin ciniki da ke da bashi", "Mai kasuwancin", "Layin bank feed", "Kasuwancin da kuke saye daga gare shi, kamar shagon kayan aiki"], answer: 3, why: "Mai sayarwa shi ne duk wanda kasuwancin ke saye daga gare shi." },
      { objective: "O4", q: "Bill na mai kawo kaya yana da ranar biya cikin kwanaki 30. Idan aka shigar da shi, yana zuwa:", options: ["Accounts receivable", "Accounts payable", "Kuɗin shigar sayarwa", "Hannun jarin mai shi"], answer: 1, why: "Bill da ba a biya ba kuɗi ne da kasuwancin ke ci bashi: accounts payable." },
      { objective: "O4", q: "Me ke tabbatar da kowane kashe kuɗi idan wani ya tambaya daga baya?", options: ["Tsammanin adadin", "Lambar wayar mai sayarwa", "Rasitin da aka haɗa ko aka rubuta lambarsa", "Tunawar mai shi"], answer: 2, why: "Rasitoci su ne shaidar da ke bayan kowane kashe kuɗi." },
      { objective: "O5", q: "Mene ne bank feed?", options: ["Ma'amalolin banki da QuickBooks ke sauko muku don ku duba", "Kuɗin da banki ke caji", "Jerin abokan ciniki", "Kalmar sirrin bankin mai shi"], answer: 0, why: "Bank feed yana kawo layukan banki don a haɗa su ko a ƙara su." },
      { objective: "O5", q: "Ana kammala daidaitawa idan:", options: ["Kun yi alama ga rabin layukan", "Mai shi ya yi farin ciki", "Watan ya ƙare", "Bambancin ya zama sifili"], answer: 3, why: "Bambanci na sifili yana nuna QuickBooks ya yi daidai da bayanin banki." },
      { objective: "O5", q: "Layin banki da aka sauko an riga an shigar da shi a QuickBooks. Sake ƙara shi zai:", options: ["Gyara daidaitawar", "Ƙidaya shi sau biyu", "Rufe watan", "Biya mai sayarwa"], answer: 1, why: "Sake ƙara layin da aka shigar yana ƙirƙirar kwafi biyu; ku haɗa shi maimakon haka." },
      { objective: "O6", q: "Kuɗin shiga ya kai $4,000, kashe kuɗi kuma $3,100 a watan. Rahoton riba da asara yana nuna:", options: ["Asarar $900", "Ribar $7,100", "Ribar $900", "Babu canji"], answer: 2, why: "Kuɗin shiga a cire kashe kuɗi: $4,000 a cire $3,100 ribar $900 ce." },
      { objective: "O6", q: "Kafin fitar da rahotannin ƙarshen wata, ya kamata mai ajiyar lissafi ya fara:", options: ["Daidaita kowane asusun banki da na kati", "Goge tsofaffin invoice", "Aika rahotanni ba tare da dubawa ba", "Canja jerin asusu"], answer: 0, why: "Rahotanni suna da kyau ne kawai idan shigarwar da ke bayansu sun yi kyau, don haka ku fara daidaitawa." },
      { objective: "O6", q: "Wane rahoto ne ke nuna waɗanne bill kasuwancin har yanzu ke ci bashi?", options: ["Riba da asara", "Accounts receivable aging", "Jerin asusu", "Accounts payable aging"], answer: 3, why: "Rahoton A/P aging yana jera bill da ba a biya ba da tsawon lokacin da suka yi a buɗe." },
      { objective: "O2", q: "Me yasa mai ajiyar lissafi zai yi amfani da asusu ɗaya koyaushe don irin kashe kuɗi ɗaya?", options: ["QuickBooks yana caji kan sababbin asusu", "Don rahotanni su kwatanta wata da wata daidai", "Domin ba za a iya canja sunayen asusu ba", "Don bank feed ya tsaya"], answer: 1, why: "Asusun da ba sa canjawa suna sa rahotanni su yi daidai kuma a iya kwatanta su." },
      { objective: "O5", q: "Wani abokin ciniki ya ba ku kalmar sirrin bankinsa ta intanet don ku haɗa bank feed. Me za ku yi?", options: ["Ku karɓa ku ajiye ta a rubutu", "Ku tura wa kanku ita ta tes", "Ku ƙi; mai shi ne zai haɗa bankin ko ya ba ku naku damar shiga", "Ku saka ta a babban fayil da ake rabawa"], answer: 2, why: "Masu ajiyar lissafi ba sa taɓa karɓar kalmar sirrin bankin mai shi; mai shi ne ke haɗa bankin ko ya ƙara ku a matsayin mai amfani." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 5, 6, 9, 12, 13, 15, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Jerin asusu", objective: "O2", notYet: "Asusun ba su kai 12 ba, ko da yawa an yi musu alamar nau'in da ba daidai ba.", meets: "Aƙalla asusu 12, kowanne da nau'in da ya dace, da sunaye masu sarari.", exceeds: "Yana kuma bayyana dalilin da yasa ake buƙatar kowane asusu a wannan kasuwancin, har da asusun ƙungiyar sa-kai ko na irin sana'ar." },
      { name: "Sayarwa da biyan kuɗi", objective: "O3", notYet: "An rubuta biya a matsayin sabuwar sayarwa, ko invoice ba shi da abokin ciniki, kwanan wata ko adadi.", meets: "Aƙalla invoice 3 da biya 2, kowanne da abokin ciniki, kwanan wata, adadi da asusun kuɗin shiga; invoice da aka biya suna nuna an biya.", exceeds: "Yana kuma rubuta ajiyar banki ta kowane biya, kuma yana nuna waɗanne invoice har yanzu suke a buɗe." },
      { name: "Bill da kashe kuɗi", objective: "O4", notYet: "An biya bill da sabon expense, ko shigarwa ba su da asusu ko rasiti.", meets: "Aƙalla bill ko kashe kuɗi 4 da mai sayarwa, kwanan wata, adadi, asusu da rasitin da aka rubuta.", exceeds: "Yana kuma nuna biyan bill da ɗan kwangila da aka saka tare da bayanin W-9." },
      { name: "Daidaita banki", objective: "O5", notYet: "Babu daidaitawa, ko an tilasta ta zuwa sifili da shigarwar ƙarya.", meets: "Daidaitawa ta ƙare da bambanci na sifili, ko tana da bayani na gaskiya na abin da bai yi daidai ba tukuna.", exceeds: "Yana kuma jera abin da ya haddasa kowane bambanci (kuɗin banki, kuskuren rubutu, kwafi biyu, cak da ba a biya ba) da yadda aka gyara shi." },
      { name: "Taƙaitaccen rahoto", objective: "O6", notYet: "Taƙaitaccen bayanin bai da riba ko asara, ko lambobin ba su yi daidai da shigarwar ba.", meets: "Yana faɗin jimillar kuɗin shiga, jimillar kashe kuɗi da riba ko asara, da waɗanda har yanzu suke da bashi.", exceeds: "Yana kuma ambaton bill da ranar biyansu ta kusa da abu ɗaya da mai shi zai iya ɗauka mataki a kai." },
      { name: "Shirin takardar shaida", objective: "O1", notYet: "Ba a ambaci takardar shaida ba, ko babu ranaku.", meets: "Yana ambaton takardar shaidar Intuit, shafin hukuma da za a duba, da ranakun duba shi da na gwaje-gwajen atisaye.", exceeds: "Yana kuma jera masu ɗaukar aiki ko abokan ciniki uku da za a tuntuɓa da ranar tuntuɓar kowannensu." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka zauna jarabawar takardar shaidar Intuit QuickBooks ko ajiyar lissafi cikin kwanaki 90 (binciken biyo baya)",
      "Masu koyo da suka sami aikin ajiyar lissafi, aikin ofis da ke amfani da QuickBooks ko abokin ciniki mai biya na ajiyar lissafi cikin watanni 6",
      "Masu ƙananan kasuwanci da ƙungiyoyin sa-kai a cikin kwas da ke daidaita lissafinsu da kansu kowane wata (binciken biyo baya na kwanaki 30)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta ko tablet mai burauzar intanet don QuickBooks Online test drive kyauta (a buɗe a taga mai sirri); allon waya ya yi ƙanƙanta ga yawancin atisaye",
      "Takarda, alƙalami da na'urar lissafi don rubutun \"Gwada yanzu\", domin test drive ba ya ajiyewa",
      "Kwafin bayanin banki na atisaye da jerin ma'amaloli da aka buga don ƙungiyoyin da ba su da kwamfuta",
      "Kusan minti 75 zuwa 90 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "A ɗakin kwamfuta ko aji: ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama tare da test drive a buɗe a kowane allo.",
      "Test drive yana sake farawa kuma ba ya ajiyewa; ku tunatar da masu koyo su rubuta kowace shigarwa don aikin ƙarshe.",
      "Fuskoki da sunayen menu suna canjawa; idan mai koyo bai iya samun wani abu ba, ku nuna masa akwatin nema maimakon wata ƙayyadaddiyar hanyar menu.",
      "Kada ku taɓa barin masu koyo su rubuta ainihin bayanan shiga banki, lambobin asusu ko bayanan abokan ciniki a atisaye; ku yi amfani da kamfanin misali ko lambobin ƙirƙira.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya.",
      "Kafin masu koyo su yi shirin takardar shaida, ku sa su buɗe shafukan hukuma na Certiport da Intuit Academy da kansu don duba kuɗaɗe da sharuɗɗan cancanta na yanzu."
    ]
  }
};

"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-drones-programs.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const ODPC = { name: "Office of the Data Protection Commissioner (Kenya)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Nigeria Data Protection Commission (NDPC)", url: "https://ndpc.gov.ng" };
const QGIS = { name: "QGIS (free, open-source GIS)", url: "https://qgis.org/" };
const COPERNICUS = { name: "Copernicus Browser (free Sentinel satellite images)", url: "https://browser.dataspace.copernicus.eu/" };
const FAO_ITU_DRONES = { name: "FAO and ITU: E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const KCAA_UAS = { name: "Kenya Civil Aviation Authority (KCAA): Unmanned Aircraft Systems", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const NCAA_P21 = { name: "Nigeria Civil Aviation Authority (NCAA): Nig.CARs 2023 Part 21, Remotely Piloted Aircraft Systems", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };

module.exports = {
  id: "agri-drones-programs-ha",
  lang: "ha",
  translationOf: "agri-drones-programs",
  category: "Agriculture (Africa)",
  name: "Jirage Marasa Matuƙi don Sa Ido a Gona 5: Haɗa Bayanai, GIS da Tsara Shirye-shirye",
  skills: "Tsarawa da ajiye kwafin bayanan jirgi mara matuƙi, Haɗa taswirorin jirgi da layukan GIS da hotunan tauraron ɗan adam, Kare bayanan manoma da samun izininsu, Faɗin manufar shirin sa ido da masu amfani da shi, Tsara ma'aikata, kayan aiki, jadawali da kasafin kuɗi, Auna sakamako da bayar da rahoto",
  outcome: "tsara shirin sa ido a gona da jirage marasa matuƙi (drone) don ƙungiyar manoma: manufarsa, masu amfani da shi, shirin bayanai tare da GIS da kariyar bayanai, ma'aikata, jadawali, kasafin kuɗi, yadda zai biya kansa, da yadda za ku auna sakamako ku bayar da rahoto.",
  about: [
    "Wannan shi ne Kwas na 5 na jerin kwasa-kwasan sa ido da jirage marasa matuƙi (drone). An yi shi ne don manajojin faɗakarwar noma (extension), shugabannin ƙungiyoyin haɗin gwiwa (cooperative) da na ƙungiyoyin manoma, ma'aikatan noma na gundumomi (county) da jihohi, jami'an shirye-shirye na ƙungiyoyi masu zaman kansu (NGO), manajojin kasuwancin noma da 'yan kasuwar jirage marasa matuƙi a Kenya, Najeriya da faɗin Afirka, waɗanda ke son yin sa ido da jirgi a gonaki da yawa, ba guda ɗaya kawai ba.",
    "Babi na 1 game da bayanai ne: sanya sunaye, ajiyewa da ajiye kwafin bayanan jirgi; haɗa taswirorin jirgi da iyakokin gonaki, hotunan tauraron ɗan adam da bayanan gona a GIS; da kare bayanan sirri na manoma bisa dokoki kamar Data Protection Act 2019 na Kenya da Nigeria Data Protection Act 2023. Babi na 2 game da tsara shiri ne: farawa daga matsala ta gaske da masu amfani na gaske, tsara mutane, kayan aiki, tashin jirgi da kuɗi, da tabbatar da cewa shirin yana aiki.",
    "A ƙarshe za ku sami tsarin shiri da za ku iya gabatarwa ga kwamitin ƙungiyar haɗin gwiwa, ofishin gunduma ko na jiha, mai ba da tallafi ko mai zuba jari. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku rubuta tsarin shirin sa ido da jirage marasa matuƙi mai shafi biyu don ƙungiyar haɗin gwiwa ta ƙananan manoma 200 (misali masara da wake a Trans Nzoia, kofi a Nyeri, ko rogo a Jihar Ogun): matsalar da manufar, masu amfani da abin da kowanne zai samu, shirin bayanai (ajiya, layukan GIS, amfani da tauraron ɗan adam, izini da kariyar bayanai), ma'aikata da kayan aiki, jadawalin tashin jirgi na kakar noma ɗaya, kasafin kuɗi mai sauƙi tare da yadda za a biya hidimar, ma'aunan nasara, da yadda za a bayar da rahoton sakamako.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manajojin faɗakarwar noma, shugabannin ƙungiyoyin haɗin gwiwa da na ƙungiyoyin manoma, ma'aikatan noma na gundumomi da jihohi, jami'an shirye-shirye na NGO, manajojin kasuwancin noma da 'yan kasuwar jirage marasa matuƙi a Kenya, Najeriya da faɗin Afirka, waɗanda ke son yin sa ido da jirgi a gonaki da yawa.",
    startingPoint: "Masu koyo za su iya yin taswirar jirgi da karanta ta, kuma sun ga aikin jirgi a gona ɗaya (Kwas na 1 zuwa na 4). Kaɗan ne suka taɓa tsara bayanai daga gonaki ɗaruruwa, haɗa taswirorin jirgi da hotunan tauraron ɗan adam da bayanai a GIS, kula da bayanan sirri na manoma bisa doka, ko tsara shiri da kasafin kuɗinsa da zai ci gaba bayan tallafi ya ƙare.",
    gap: "Ayyukan jirage marasa matuƙi da yawa suna farawa da jirgin maimakon matsala, suna rasa bayanai, ba sa kula da bayanan sirri na manoma yadda ya kamata, ko kuma suna tsayawa idan tallafi ya ƙare. Tsarin shiri mai sarari tare da shirin bayanai, izini, ma'aikata, jadawali, kasafin kuɗi da ma'aunai yana bar ƙungiyar haɗin gwiwa, gunduma ko kamfani su gudanar da hidimar da manoma suka amince da ita kuma take biyan kanta.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi; ana bayanin kowace kalmar bayanai da ta GIS",
      "Na'urori: kwamfutar tafi-da-gidanka (laptop) mai QGIS kyauta da spreadsheet; bayanan jirgi da na tauraron ɗan adam ko misalai",
      "Doka: dokokin kare bayanai sun shafi shirin (Data Protection Act 2019 na Kenya, Nigeria Data Protection Act 2023 ko dokar ƙasar mai koyo)",
      "Dokokin sufurin sama: matuƙa suna buƙatar lasisi, kuma ƙungiyar na iya buƙatar takardar shaidar mai gudanarwa (operator certificate)",
      "Farashi da kuɗaɗe sun bambanta daga ƙasa zuwa ƙasa kuma suna canjawa: masu koyo suna amfani da farashin gaske na yankinsu"
    ],
    prerequisites: "\"Jirage Marasa Matuƙi (Drones) don Sa Ido a Gona 4: Noma Daidai-wa-Daida, Yanayi da Sa Ido kan Dabbobi\", ko ƙwarewa makamanciyar haka da taswirorin jirgi."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Don bayanan jirgi daga gonaki da yawa", action: "tsara manyan fayiloli (folders), ƙa'idar sanya sunaye, rajistar tashin jirgi da ajiyar kwafi ta 3-2-1", standard: "ta amfani da lambar gona (Farm ID) maimakon sunaye, da duba cewa kwafin ajiya suna buɗewa" },
    { id: "O2", condition: "Idan aka ba ku taswirorin jirgi, iyakokin gonaki, hotunan tauraron ɗan adam da bayanan gona", action: "tsara aikin GIS da ke ɗora su a kan juna da haɗa bayanai da gonaki ta lambar ID", standard: "tare da kowane layi a tsarin wuri (coordinate system) iri ɗaya" },
    { id: "O3", condition: "Idan shiri yana tattara bayanan sirri na manoma", action: "rubuta sanarwar neman izini da matakan kare bayanai da suka bi doka", standard: "da ke faɗin abin da ake tattarawa, dalili, wanda zai gani, tsawon lokacin ajiya, da cewa manoma za su iya ƙi" },
    { id: "O4", condition: "Don ƙungiyar manoma", action: "rubuta manufar shiri mai lamba da kwanan wata, da jera masu amfani da abin da kowanne zai samu", standard: "farawa daga matsalar da masu amfani suka damu da ita kuma za su iya ɗaukar mataki a kai" },
    { id: "O5", condition: "Don kakar noma ɗaya ta shirin", action: "tsara ma'aikata, kayan aiki, jadawalin tashin jirgi da kasafin kuɗi, da yadda za a biya hidimar", standard: "har da lasisi, kuɗin sau ɗaya da na gudanarwa, da shiri na bayan kowane tallafi ya ƙare" },
    { id: "O6", condition: "A ƙarshen kakar noma", action: "zaɓar ma'aunan nasara da bayar da rahoton sakamako ga kowane mai amfani", standard: "an kwatanta da yanayin farko (baseline), kuma da gaskiya game da abin da bai yi aiki ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Sarrafa bayanai da haɗa su",
      lessons: [
        {
          objectives: ["O1"],
          title: "Tsarawa, ajiyewa da ajiye kwafin bayanan jirgi",
          minutes: 5,
          goal: "Kafa tsarin manyan fayiloli, sanya sunaye da ajiyar kwafi don bayanan jirgi daga gonaki da yawa.",
          text: [
            "Tashin jirgi ɗaya na yin taswira zai iya kawo hotuna ɗaruruwa da manyan taswirori da dama. A gonaki 200 da kakar noma guda, wannan yana zama fayiloli dubbai. Ba tare da tsari ba, bayanai suna ɓacewa, suna cakuɗewa ko ana rubuta wasu a kan wasu, kuma shirin yana rasa amincewa.",
            "Ku yi amfani da tsarin manyan fayiloli ɗaya mai sarari da ƙa'idar sanya sunaye ɗaya ga kowa: misali Shiri / Farm ID / Field ID / Kwanan wata / raw, processed, reports. Ku yi amfani da lambar gona (Farm ID) maimakon sunan manomi a sunayen fayiloli. Ku riƙe rajista mai sauƙi (spreadsheet) ta kowane tashin jirgi: kwanan wata, Farm ID, fili, matuƙi, jirgi, fayiloli, an sarrafa ko ba a sarrafa ba.",
            "Ku bi ƙa'idar ajiyar kwafi ta 3-2-1: kwafi uku, a nau'ikan ajiya biyu daban-daban (misali laptop da faifan waje), tare da kwafi ɗaya a wani wuri dabam ko a hidimar ajiya ta intanet (cloud) amintacciya. Ku duba cewa kwafin ajiya suna buɗewa. Ku yanke tsawon lokacin da za ku riƙe ɗanyen hotuna, domin suna cika ajiya da sauri."
          ],
          steps: ["Ku amince da tsarin manyan fayiloli ɗaya da ƙa'idar sanya sunaye ɗaya don dukan ƙungiyar.", "Ku ba kowace gona da kowane fili lambar ID; kada ku sa sunaye a sunayen fayiloli.", "Ku riƙe spreadsheet na rajistar tashin jirgi.", "Ajiyar kwafi: kwafi uku, nau'ikan ajiya biyu, ɗaya a wani wuri dabam.", "Ku saita tsawon lokacin riƙe ɗanyen hotuna."],
          words: [["Ɗanyen bayanai (raw data)", "asalin hotuna da bayanan rajista kai tsaye daga jirgin."], ["Ajiyar kwafi (backup)", "ƙarin kwafin bayanai da ake ajiyewa idan asalin ya ɓace."], ["Rajista", "jerin da ke rubuta kowane tashin jirgi da fayilolinsa."]],
          slides: [
            { title: "Bayanai suna ƙaruwa da sauri", bullets: ["Hotuna ɗaruruwa a kowane tashin jirgi", "Fayiloli dubbai a kowace kakar noma", "Bayanan da suka ɓace ko suka cakuɗe suna rage amincewa"] },
            { title: "Tsari ɗaya ga kowa", bullets: ["Shiri / Farm ID / Field ID / Kwanan wata", "Raw, processed, reports", "Lambobin ID, ba sunaye ba, a sunayen fayiloli"] },
            { title: "Ku riƙe rajistar tashin jirgi", bullets: ["Kwanan wata, gona, fili, matuƙi, jirgi", "Fayiloli da matsayin sarrafa su"] },
            { title: "Ajiyar kwafi ta 3-2-1", bullets: ["Kwafi uku", "Nau'ikan ajiya biyu", "Kwafi ɗaya a wani wuri dabam"] }
          ],
          tryIt: "Ku ƙirƙiri tsarin manyan fayiloli a kwamfutarku ko wayarku don misalin shiri mai gonaki uku, sannan ku fara spreadsheet na rajistar tashin jirgi da ginshiƙan wannan darasi. Ku ƙara misalan tashin jirgi biyu.",
          youCanNow: "tsarawa, yi wa rajista da ajiye kwafin bayanan jirgi don shiri mai gonaki da yawa.",
          quickCheck: [
            { objective: "O1", q: "Me yasa za a yanke tsawon lokacin riƙe ɗanyen hotuna?", options: ["Riƙe ɗanyen hotuna haramun ne", "Manoma suna neman su kowace rana", "Ɗanyen hotuna suna cika ajiya da sauri", "Ba za a iya yin taswira da su ba"], answer: 2, why: "Ɗanyen hotuna suna cika ajiya da sauri, don haka shirin yana yanke tsawon lokacin riƙe su." },
            { objective: "O1", q: "Matuƙa biyu suna sanya wa fayiloli sunaye daban-daban don gona ɗaya. Me za ku yi?", options: ["Ku amince da tsarin manyan fayiloli ɗaya da ƙa'idar sunaye ɗaya ga kowa", "Ku bar kowane matuƙi ya yi amfani da nasa tsarin", "Ku yi amfani da sunan manomi a kowane fayil", "Ku goge tsofaffin fayiloli"], answer: 0, why: "Tsarin manyan fayiloli ɗaya mai sarari da ƙa'idar sunaye ɗaya ga kowa suna hana bayanai ɓacewa ko cakuɗewa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Haɗa taswirorin jirgi da GIS, tauraron ɗan adam da bayanan gona",
          minutes: 6,
          goal: "Gina aikin GIS da ke ɗora taswirorin jirgi, iyakokin gonaki, hotunan tauraron ɗan adam da bayanan gona a kan juna.",
          text: [
            "GIS (tsarin bayanan taswira) yana bar ku ɗora nau'ikan bayanai daban-daban a kan taswira ɗaya. Don shiri, layukan tushe su ne iyakokin gonaki (da aka zagaya da GPS na waya ko aka zana a taswirar jirgi) da wuraren gonaki. A samansu akwai taswirorin jirgi (orthomosaic) da taswirorin NDVI, hotunan tauraron ɗan adam kyauta, da bayanai kamar ranar shuka, irin iri, kayan noma da girbi.",
            "Hotunan tauraron ɗan adam na Sentinel-2 kyauta, da ake iya gani a Copernicus Browser, suna zuwa bayan 'yan kwanaki, kusan mita 10 a kowane pixel. Ba su da cikakken bayani don ganin shuka ɗaya, amma suna da kyau don lura da dukan gonaki 200 tsakanin tashin jirgi. Ku yi amfani da tauraron ɗan adam don yanke waɗanne gonaki ke buƙatar ziyarar jirgi, da jirgi don cikakken bayani.",
            "Ku haɗa bayanai da gonaki ta Field ID, don ku iya yin tambayoyi kamar: shin gonakin da suka sami shawarar jirgi sun fi bayar da girbi? QGIS zai iya haɗa (join) spreadsheet da layin gonaki ta ID. Ku yi amfani da tsarin wuri (coordinate system) iri ɗaya ga kowane layi, in ba haka ba ba za su dace da juna ba."
          ],
          steps: ["Ku yi layin iyakokin gonaki mai Field ID ga kowane fili.", "Ku ƙara taswirorin jirgi na filayen da kuka tashi a kansu.", "Ku ƙara hoton tauraron ɗan adam kyauta na yankin a lokaci ɗaya.", "Ku haɗa spreadsheet na bayananku da layin gonaki ta Field ID.", "Ku duba cewa kowane layi ya dace (tsarin wuri iri ɗaya)."],
          words: [["Iyakar gona (field boundary)", "siffa a taswira da ke zagaye fili."], ["Sentinel-2", "taurarin ɗan adam biyu na Turai waɗanda hotunansu kyauta ne; kusan mita 10 a kowane pixel."], ["Haɗawa (join)", "haɗa tebur da siffofin taswira ta amfani da ID ɗaya da suke rabawa."], ["Tsarin wuri (coordinate system)", "ƙa'idar da taswira ke amfani da ita don sanya abubuwa a doron ƙasa; dole layuka su yi amfani da ɗaya don su dace."]],
          slides: [
            { title: "Ku ɗora layukanku a kan juna", bullets: ["Iyakokin gonaki da wuraren gonaki", "Taswirorin jirgi da NDVI", "Hotunan tauraron ɗan adam", "Bayanan shuka, kayan noma da girbi"] },
            { title: "Tauraron ɗan adam tare da jirgi", bullets: ["Sentinel-2: kyauta, bayan 'yan kwanaki, kusan mita 10", "Lura da dukan gonaki tsakanin tashin jirgi", "Tura jirgi inda ake buƙatar cikakken bayani"] },
            { title: "Haɗa bayanai ta Field ID", bullets: ["Haɗa spreadsheet da gonaki a QGIS", "Tambaya: gonakin da aka ba shawara sun fi girbi?", "Tsarin wuri iri ɗaya ga dukan layuka"] }
          ],
          sources: [QGIS, COPERNICUS],
          tryIt: "Ku buɗe Copernicus Browser ku nemo yankinku. Sannan a QGIS, ku zana misalan iyakokin gonaki biyu, ku ba su Field ID, ku haɗa ƙaramin spreadsheet mai ranar shuka da irin iri na kowanne.",
          youCanNow: "haɗa taswirorin jirgi, hotunan tauraron ɗan adam, iyakokin gonaki da bayanan gona a aikin GIS ɗaya.",
          quickCheck: [
            { objective: "O2", q: "Me GIS yake bar ku yi?", options: ["Tuƙa jirgi da kansa", "Ɗora nau'ikan bayanai daban-daban a kan taswira ɗaya", "Cajin batir da sauri", "Biyan manoma ta kuɗin waya"], answer: 1, why: "GIS yana ɗora layuka kamar iyakoki, taswirorin jirgi, hotunan tauraron ɗan adam da bayanai a kan taswira ɗaya." },
            { objective: "O2", q: "Ƙungiyar haɗin gwiwa tana son lura da dukan gonaki 200 kowane mako amma tana da jirgi ɗaya. Me za ku tsara?", options: ["Tashi a kan kowace gona kowace rana", "Barin sa ido gaba ɗaya", "Tashi a kan gonar shugaban kawai", "Amfani da hotunan tauraron ɗan adam kyauta don lura da dukan gonaki, da tura jirgi inda suka nuna matsala"], answer: 3, why: "Tauraron ɗan adam yana lura da dukan gonaki tsakanin tashin jirgi; jirgi yana ba da cikakken bayani inda ake buƙata." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kare bayanan manoma da samun izininsu",
          minutes: 5,
          goal: "Tattara da amfani da bayanan manoma bisa doka, da izini mai sarari da ajiya mai aminci.",
          text: [
            "Shirin sa ido yana riƙe da bayanan sirri: sunaye, lambobin waya, lambobin kuɗin waya (mobile money), wuraren gonaki, girbi da hotunan gidaje. Dokokin kare bayanai sun shafe shi. A Kenya, Office of the Data Protection Commissioner (ODPC) ne ke kula da Data Protection Act 2019, kuma yana yi wa masu sarrafa bayanai (data controllers da processors) rajista. A Najeriya, Nigeria Data Protection Commission (NDPC) ne ke kula da Nigeria Data Protection Act 2023. Sauran ƙasashe suna da nasu dokokin. Ku duba ko dole ƙungiyarku ta yi rajista da abin da doka ta buƙata.",
            "Ku sami izini mai sarari a harshen manomi: abin da kuke tattarawa, dalili, wanda zai gani, tsawon lokacin da za ku riƙe shi, da cewa zai iya ƙi ko ya nemi a cire bayanansa. Ku tattara abin da kuke buƙata kawai. Kada ku raba bayanai da masu saye, masu ba da bashi ko wasu ba tare da izini ba.",
            "Ku kiyaye bayanai lafiya: kalmomin sirri (password) a laptop da wayoyi, iyakance masu shiga, da ajiye bayanan sirri dabam da taswirori inda za a iya. Ya kamata manoma su amfana da bayanansu, kamar taswirorinsu da rahotanninsu, ba wai su bayar da su kawai ba."
          ],
          steps: ["Ku jera bayanan sirri da shirin zai riƙe.", "Ku duba dokar kare bayanai ta ƙasarku da ko dole ku yi rajista.", "Ku rubuta gajeriyar sanarwar neman izini a harshen manomi.", "Ku tattara abin da kuke buƙata kawai; ku ajiye shi da kalmar sirri da iyakance masu shiga.", "Ku ba manoma taswirorinsu da rahotanninsu."],
          words: [["Bayanan sirri", "bayani game da mutumin da za a iya gane shi, kamar suna, lambar waya ko wurin gona."], ["Izini (consent)", "amincewa mai sarari daga mutum, bayan ya fahimci abin da za a yi da bayanansa."], ["Mai sarrafa bayanai (data controller)", "ƙungiyar da ke yanke dalili da yadda ake amfani da bayanan sirri."]],
          slides: [
            { title: "Shirinku yana riƙe bayanan sirri", bullets: ["Sunaye, lambobin waya, lambobin kuɗin waya", "Wuraren gonaki, girbi, hotuna"] },
            { title: "Doka ta shafe shi", bullets: ["Kenya: Data Protection Act 2019, ODPC", "Najeriya: Data Protection Act 2023, NDPC", "Sauran ƙasashe: dokokinsu"] },
            { title: "Izini da ƙananan bayanai", bullets: ["Me, me yasa, wa zai gani, har yaushe", "Manoma za su iya ƙi", "Ku tattara abin da kuke buƙata kawai"] },
            { title: "Ku kiyaye su lafiya da adalci", bullets: ["Kalmomin sirri, iyakance masu shiga", "Ba raba bayanai ba tare da izini ba", "Manoma suna samun taswirorinsu"] }
          ],
          sources: [ODPC, NDPC],
          tryIt: "Ku rubuta sanarwar neman izini mai jimloli biyar don manoman da ke shiga shirin sa ido da jirgi, da kalmomi masu sauƙi (kuma a harshen yanki idan za ku iya): abin da kuke tattarawa, dalili, wanda zai gani, tsawon lokacin riƙewa, da yadda za su ƙi.",
          youCanNow: "tattara da kula da bayanan manoma da izininsu, bisa dokar kare bayanai ta ƙasarku.",
          quickCheck: [
            { objective: "O3", q: "A Kenya, su wane ne ODPC ke yi wa rajista?", options: ["Matuƙan jirage marasa matuƙi", "Dillalan iri", "Masu sayen amfanin gona kawai", "Masu sarrafa bayanai (data controllers da processors)"], answer: 3, why: "ODPC na Kenya yana yi wa data controllers da processors rajista bisa Data Protection Act 2019." },
            { objective: "O3", q: "Wata manomiya ta nemi ku cire bayananta daga shirin. Me za ku yi?", options: ["Ku ƙi, domin bayanan na shirin ne", "Ku girmama buƙatarta ku cire su, kamar yadda sanarwar izini ta ce za ta iya", "Ku fara sayar da su, sannan ku cire su", "Ku yi watsi da buƙatar"], answer: 1, why: "Sanarwar izini tana faɗa wa manoma cewa za su iya ƙi ko su nemi a cire bayanansu." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Sarrafa bayanai da haɗa su",
        questions: [
          { objective: "O1", q: "Me yasa za a yi amfani da Farm ID maimakon sunayen manoma a sunayen fayiloli?", options: ["Sunaye sun yi tsawo sosai", "Yana kare sirri kuma yana sa sunaye su zama iri ɗaya", "Manhaja ba ta iya karanta sunaye", "Jirgin ne ya buƙaci haka"], answer: 1, why: "Lambobin ID suna kare bayanan sirri kuma suna sa fayiloli su kasance cikin tsari." },
          { objective: "O1", q: "Ƙa'idar ajiyar kwafi ta 3-2-1 tana nufin:", options: ["Kwafi uku, nau'ikan ajiya biyu, ɗaya a wani wuri dabam", "Jirage uku, matuƙa biyu, gona ɗaya", "Ajiye kwafi sau ɗaya a shekara uku", "Goge kwafi biyu"], answer: 0, why: "Kwafi da yawa a wurare daban-daban suna kare bayanai daga ɓacewa." },
          { objective: "O2", q: "A shiri, mafi kyawun amfani da hotunan Sentinel-2 kyauta shi ne:", options: ["Ƙidaya shuka ɗaya-ɗaya", "Maye gurbin dukan tashin jirgi", "Karanta sunayen manoma", "Lura da dukan gonaki tsakanin tashin jirgi da zaɓar inda za a tura jirgi"], answer: 3, why: "A kusan mita 10 suna nuna manyan alamu, ba shuka ɗaya-ɗaya ba." },
          { objective: "O2", q: "Layukan taswira biyu ba su dace da juna ba. Dalilin da ya fi yiwuwa shi ne:", options: ["Hotuna sun rufe juna da yawa", "Wayar manomi", "Tsarin wuri (coordinate system) daban-daban", "Gonaki sun yi yawa"], answer: 2, why: "Dole layuka su yi amfani da tsarin wuri ɗaya don su dace." },
          { objective: "O3", q: "Wa ke kula da kariyar bayanai a Kenya?", options: ["Office of the Data Protection Commissioner (ODPC)", "KCAA", "Mai sayar da jirgi", "Majalisar gunduma"], answer: 0, why: "ODPC ne ke kula da Data Protection Act 2019 na Kenya." }
        ]
      }
    },
    {
      name: "Babi na 2: Tsara shirin sa ido da jirage marasa matuƙi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ku fara da matsalar da masu amfani",
          minutes: 5,
          goal: "Rubuta manufar shiri mai sarari da jera masu amfani da abin da kowanne zai samu.",
          text: [
            "Ayyukan jirage marasa matuƙi da yawa suna kasawa domin suna farawa da jirgin, ba da matsalar ba. Ku fara da matsalar da manoma da abokan aikinsu suka damu da ita kuma za su iya ɗaukar mataki a kai: gano tsutsar fall armyworm (FAW) a makare a ƙungiyar masara, rashin daidaiton ingancin shayi a gonakin shayi, rashin tsirowar rogo da kyau a gonakin manoman kwangila, ko ɓarnar ambaliya a gonakin shinkafa.",
            "Ku rubuta jimlar manufa ɗaya mai lamba da kwanan wata, misali: Zuwa ƙarshen damina mai tsawo (long rains) ta 2027, a gano wuraren da fall armyworm ta yi yawa a gonakin membobi 200 cikin mako ɗaya da fara ɓarna, kuma a kai tabbataccen shawara ga kowane manomin da abin ya shafa cikin kwana uku.",
            "Ku jera masu amfani da abin da kowanne zai samu: manoma (taswira da shawara mai sauƙi a wayarsu), jami'an faɗakarwar noma (inda za su fara ziyarta), kwamitin ƙungiyar haɗin gwiwa (taƙaitaccen bayanin kakar noma), masu saye ko masu sarrafa amfanin gona (yawan amfanin gona da ake tsammani, ba tare da bayanan sirri ba sai dai idan manoma sun amince), da ofishin noma na gunduma ko jiha idan abokin aiki ne."
          ],
          steps: ["Ku faɗi matsalar a jimla ɗaya.", "Ku duba cewa masu amfani sun damu da ita kuma za su iya ɗaukar mataki a kai.", "Ku rubuta manufa ɗaya mai lamba da kwanan wata.", "Ku jera kowace ƙungiyar masu amfani da abin da take samu, da ta wace hanya."],
          words: [["Shiri (program)", "hidima mai tsari da ke gudana na wani lokaci don mutane da yawa, ba tashin jirgi sau ɗaya ba."], ["Mai amfani", "mutum ko ƙungiya da ke karɓar sakamakon shirin kuma take ɗaukar mataki a kai."]],
          slides: [
            { title: "Matsala da farko, jirgi daga baya", bullets: ["Matsalar da mutane suka damu da ita", "Kuma za su iya ɗaukar mataki a kai"] },
            { title: "Manufa mai lamba da kwanan wata", bullets: ["Gano wuraren FAW a gonaki 200", "Cikin mako ɗaya da fara ɓarna", "Shawara cikin kwana uku"] },
            { title: "Masu amfani da abin da suke samu", bullets: ["Manoma: taswira da shawara mai sauƙi a waya", "Jami'an faɗakarwa: inda za su fara ziyarta", "Kwamiti da abokan aiki: taƙaitaccen bayanin kakar noma"] }
          ],
          tryIt: "Ku rubuta matsalar, jimlar manufa ɗaya mai lamba da kwanan wata, da tebur na aƙalla ƙungiyoyin masu amfani huɗu da abin da kowacce ke samu, don shirin da za ku iya gudanarwa.",
          youCanNow: "faɗin matsalar shirin jirgi, manufarsa da masu amfani da shi a sarari.",
          quickCheck: [
            { objective: "O4", q: "Me ke sa manufar shiri ta zama a sarari?", options: ["Jimla ɗaya mai lamba da kwanan wata", "Dogon jerin duk abin da jirage za su iya yi", "Sunan kamfanin da ya yi jirgin", "Hoton gonar"], answer: 0, why: "Manufa mai sarari jimla ɗaya ce mai lamba da kwanan wata, don ku san lokacin da aka cimma ta." },
            { objective: "O4", q: "Wani ɗan kwamiti yana son a fara sayen jirage, sannan a nemi amfaninsu daga baya. Wace shawara za ku bayar?", options: ["A sayi jirgi mafi tsada", "A sayi jirage a yanke shawara shekara mai zuwa", "A fara daga matsalar da manoma suka damu da ita kuma za su iya ɗaukar mataki a kai", "A tambayi mai sayar da jirage abin da za a yi"], answer: 2, why: "Ayyukan jirage da yawa suna kasawa domin suna farawa da jirgin, ba da matsalar ba." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Tsara mutane, kayan aiki, jadawali da kuɗi",
          minutes: 6,
          goal: "Tsara ma'aikata, kayan aiki, jadawalin tashin jirgi da kasafin kuɗi na kakar noma ɗaya.",
          text: [
            "Mutane: matuƙa masu lasisi (remote pilots) da masu lura, wanda zai sarrafa da nazarin bayanai, ma'aikatan faɗakarwar noma da za su tabbatar a ƙasa (ground-truth) su ba da shawara, da mai gudanarwa. Idan shirinku yana tashi don wasu ko don kuɗi, ƙungiyarku na iya buƙatar takardar shaidar mai gudanarwa (operator certificate) daga hukumar sufurin sama, kuma kowane matuƙi yana buƙatar lasisin da dokokinku suka buƙata.",
            "Kayan aiki: jirage (da na ajiya), batura na yini guda, cajoji (da hanyar cajin hasken rana ko ta mota inda wutar lantarki ba ta da tabbas), laptop da zai iya sarrafa taswirori, ajiya, wayoyi ko tablet, kayan kariya da sufuri. Jadawali: ku bi kalandar amfanin gona ku yanke tashin jirgi nawa a kowace gona a kowace kakar noma; ku haɗa gonaki bisa yanki don ƙungiya ɗaya ta iya kai wa gonaki da yawa a rana ɗaya.",
            "Kuɗi: ku jera kuɗin sau ɗaya (jirage, laptop, horaswa, lasisi da takardun shaida) da kuɗin gudanarwa (ma'aikata, sufuri, data, gyare-gyare, inshora, kuɗaɗe). Sannan ku yanke yadda za a biya: kuɗi a kowace eka ko hekta da ake karɓa ta kuɗin waya, ɗan kuɗin gudummawa (levy) na ƙungiyar haɗin gwiwa a kan amfanin gona da aka kawo, mai saye ko mai sarrafa amfanin gona da ke amfana, ko tallafin gwamnati ko na mai ba da tallafi na lokacin farawa. Ku tsara abin da zai faru bayan tallafi ya ƙare."
          ],
          steps: ["Ku jera ayyuka da lasisi ko takardun shaida da kowanne ke buƙata.", "Ku jera kayan aiki, har da na ajiya da hanyoyin caji.", "Ku zana jadawalin kakar noma daga kalandar amfanin gona; ku haɗa gonaki bisa yanki.", "Ku jera kuɗin sau ɗaya da na gudanarwa.", "Ku zaɓi yadda za a biya hidimar, da yadda za ta ci gaba bayan kowane tallafi."],
          words: [["Kuɗin sau ɗaya (one-off cost)", "kuɗin da ake biya sau ɗaya, kamar sayen jirgi."], ["Kuɗin gudanarwa (running cost)", "kuɗin da ke maimaituwa, kamar sufuri da albashin ma'aikata."], ["Levy (ɗan kuɗin gudummawa)", "ƙaramin kuɗi da ake karɓa daga membobi, misali a kan kowane kilogiram da aka kawo."]],
          slides: [
            { title: "Mutane", bullets: ["Matuƙa masu lasisi da masu lura", "Mai sarrafa bayanai da mai nazari", "Ma'aikatan faɗakarwa da mai gudanarwa", "Takardar shaidar mai gudanarwa idan dokokinku sun buƙata"] },
            { title: "Kayan aiki", bullets: ["Jirage da na ajiya, batura na yini guda", "Cajin hasken rana ko na mota", "Laptop, ajiya, wayoyi, sufuri"] },
            { title: "Jadawali", bullets: ["Ku bi kalandar amfanin gona", "Tashin jirgi nawa a kowace gona a kowace kaka", "Ku haɗa gonaki bisa yanki"] },
            { title: "Kuɗi", bullets: ["Kuɗin sau ɗaya da na gudanarwa", "Kuɗi a kowace hekta ta kuɗin waya, levy, mai saye, tallafi", "Ku tsara abin da zai faru bayan tallafi"] }
          ],
          sources: [KCAA_UAS, NCAA_P21, FAO_ITU_DRONES],
          tryIt: "Don shirinku daga Darasi na 4, ku rubuta jerin ma'aikata, jerin kayan aiki, jadawalin kakar noma (a waɗanne makonni za ku tashi a ina) da teburin kasafin kuɗi mai sauƙi na kuɗin sau ɗaya da na gudanarwa, tare da yadda za a biya kowanne.",
          youCanNow: "tsara ma'aikata, kayan aiki, jadawali da kasafin kuɗin shirin sa ido da jirage marasa matuƙi.",
          quickCheck: [
            { objective: "O5", q: "Wanne ne kuɗin sau ɗaya a shirin jirgi?", options: ["Sufuri na kowane mako", "Data na kowane wata", "Sayen jirage da laptop", "Albashin ma'aikata"], answer: 2, why: "Kayan aiki kamar jirage da laptop kuɗin sau ɗaya ne; sufuri, data da albashi kuɗin gudanarwa ne." },
            { objective: "O5", q: "Wani mai aikin sa kai ya ce zai tashi jirgi don shirin amma ba shi da lasisin matuƙi. Me za ku yi?", options: ["Kada ku bar shi ya tashi har sai ya sami lasisin da dokoki suka buƙata", "Ku bar shi ya tashi a ƙananan gonaki kawai", "Ku bar shi ya tashi idan mai gudanarwa yana kallo", "Ku bar shi ya tashi a ƙarshen mako"], answer: 0, why: "Kowane matuƙi yana buƙatar lasisin da dokokin ƙasar suka buƙata." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Auna sakamako da bayar da rahoto",
          minutes: 5,
          goal: "Zaɓar ma'aunan nasara da bayar da rahoton sakamako da gaskiya ga manoma da abokan aiki.",
          text: [
            "Shiri ya cancanci ci gaba ne kawai idan yana kawo canji. Ku zaɓi 'yan ma'aunai da suka shafi manufarku: yadda aka gano matsaloli da sauri, manoma nawa suka sami shawara a kan lokaci, nawa suka yi aiki da ita, girbi ko inganci idan aka kwatanta da gonaki ko kakar noma ba tare da shirin ba, da kuɗin kowace gona.",
            "Ku tattara yanayin farko (baseline) kafin ku fara (misali girbin kakar da ta wuce ko lokacin gano matsala), don ku iya kwatantawa. Ku kuma tambayi manoma: shawarar ta kasance a sarari kuma mai amfani, kuma za su biya kuɗinta? Amsoshinsu suna da muhimmanci kamar lambobin.",
            "Ku bayar da rahoto a hanyar da kowane mai amfani zai iya amfani da ita: gajeren saƙo ga manoma, taƙaitaccen bayani na shafi ɗaya tare da taswira ga kwamiti, cikakken rahoto ga abokan aiki. Ku faɗi gaskiya game da abin da bai yi aiki ba. Sannan ku inganta tsarin don kakar noma mai zuwa."
          ],
          steps: ["Ku zaɓi ma'aunai uku zuwa biyar da suka shafi manufar.", "Ku rubuta yanayin farko kafin shirin ya fara.", "Ku tattara ma'aunan da ra'ayoyin manoma a lokacin kakar noma.", "Ku bayar da rahoto a hanyar da ta dace da kowane mai amfani.", "Ku jera abin da za a inganta a kakar noma mai zuwa."],
          words: [["Yanayin farko (baseline)", "halin da ake ciki kafin shirin ya fara, da ake amfani da shi don kwatantawa."], ["Ma'aunin nasara", "lambar da ke nuna ko shirin ya cimma manufarsa."]],
          slides: [
            { title: "Ku auna abin da ke da muhimmanci", bullets: ["Saurin gano matsala", "Manoman da suka sami shawara a kan lokaci, da waɗanda suka yi aiki da ita", "Girbi ko inganci idan aka kwatanta da yanayin farko", "Kuɗin kowace gona"] },
            { title: "Yanayin farko da ra'ayoyi", bullets: ["Ku rubuta yanayin farawa", "Ku tambayi manoma: ya yi amfani? za ku biya?"] },
            { title: "Rahoto da ingantawa", bullets: ["Gajerun saƙonni ga manoma", "Shafi ɗaya da taswira ga kwamiti", "Ku faɗi gaskiya; ku inganta a kakar noma mai zuwa"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta tsarin shirinku mai shafi biyu don ƙungiyar haɗin gwiwa ta ƙananan manoma 200: matsala da manufa, masu amfani, shirin bayanai tare da GIS da izini, ma'aikata da kayan aiki, jadawalin kakar noma, kasafin kuɗi da hanyar biya, ma'aunan nasara tare da yanayin farko, da rahoto.",
          youCanNow: "auna, bayar da rahoto da inganta shirin sa ido da jirage marasa matuƙi, da gabatar da cikakken tsarin shiri.",
          quickCheck: [
            { objective: "O6", q: "Wanne ne misalin yanayin farko (baseline)?", options: ["Burin kakar noma mai zuwa", "Girbin kakar da ta wuce ko lokutan gano matsala, da aka rubuta kafin ku fara", "Farashin jirgin", "Ranar taron kwamiti"], answer: 1, why: "Yanayin farko shi ne halin da ake ciki kafin shirin, don a iya kwatanta sakamako." },
            { objective: "O6", q: "Manoma sun ce taswirorin sun yi daidai amma shawarar tana da wuyar fahimta. Me za ku yi?", options: ["Ku cire shi daga rahoton", "Ku bayar da rahoton taswirori masu kyau kawai", "Ku dakatar da shirin", "Ku bayar da rahotonsa da gaskiya ku canja yadda ake ba da shawara a kakar noma mai zuwa"], answer: 3, why: "Ku faɗi gaskiya game da abin da bai yi aiki ba, sannan ku inganta tsarin don kakar noma mai zuwa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Tsara shirin sa ido da jirage marasa matuƙi",
        questions: [
          { objective: "O4", q: "Me yasa ayyukan jirage marasa matuƙi da yawa suke kasawa?", options: ["Jirage sun yi ƙanƙanta", "Suna farawa da jirgin maimakon matsala ta gaske", "Manoma ba sa son taswirori", "Batura sun yi girma"], answer: 1, why: "Shirye-shirye suna aiki idan suna magance matsalar da masu amfani suka damu da ita." },
          { objective: "O4", q: "Wace ce mafi kyawun manufar shiri?", options: ["Tashi da jirage sosai", "Amfani da fasaha", "Gano wuraren FAW a gonaki 200 cikin mako ɗaya da fara ɓarna zuwa ƙarshen damina mai tsawo ta 2027", "Zama masu ƙirƙira"], answer: 2, why: "Tana da lamba, lokaci da sakamako a sarari." },
          { objective: "O5", q: "Shirinku zai tashi jirgi don manoman da ke biya. Me dole ku duba?", options: ["Ko ƙungiyarku na buƙatar takardar shaidar mai gudanarwa, kuma matuƙa suna buƙatar lasisi", "Launin jirgin kawai", "Yanayin sama kawai", "Babu komai; manoma sun amince"], answer: 0, why: "Tashi don kasuwanci yawanci yana buƙatar takardar shaidar mai gudanarwa da matuƙa masu lasisi." },
          { objective: "O5", q: "Wanne ne kuɗin gudanarwa?", options: ["Sayen jirgi na farko", "Sayen laptop", "Horaswar farko", "Sufuri zuwa gonaki kowane mako"], answer: 3, why: "Kuɗin gudanarwa suna maimaituwa a tsawon shirin." },
          { objective: "O6", q: "Me yasa za a tattara yanayin farko (baseline)?", options: ["Don cike fom", "Don kwatanta sakamako da halin da ake ciki kafin shirin", "Don goge tsofaffin bayanai", "Don zaɓar jirgi"], answer: 1, why: "Ba tare da wurin farawa ba, ba za ku iya nuna canji ba." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Jirage Marasa Matuƙi don Sa Ido a Gona 5: Haɗa Bayanai, GIS da Tsara Shirye-shirye",
    questions: [
      { objective: "O1", q: "Ba tare da tsarin bayanai ba, babban shirin jirgi yana fuskantar haɗarin:", options: ["Fayilolin da suka ɓace, suka cakuɗe ko aka rubuta wasu a kansu", "Taswirori mafi kyau", "Tashin jirgi mafi sauri", "Jirage masu araha"], answer: 0, why: "Fayiloli dubbai suna buƙatar tsari mai sarari." },
      { objective: "O1", q: "Rajistar tashin jirgi tana rubuta:", options: ["Farashin amfanin gona", "Kwanan wata, gona, fili, matuƙi, jirgi, fayiloli da matsayi", "Yanayin sama kawai", "Bayanan bankin manoma"], answer: 1, why: "Tana bin diddigin kowane tashin jirgi da bayanansa." },
      { objective: "O1", q: "Wace ce ƙa'idar manyan fayiloli mai kyau?", options: ["Sunaye barkatai", "Cikakken sunan manomi da lambar wayarsa", "Shiri / Farm ID / Field ID / Kwanan wata", "Komai a babban fayil ɗaya"], answer: 2, why: "Tsari iri ɗaya da ke amfani da ID yana sa bayanai su kasance cikin tsari da sirri." },
      { objective: "O1", q: "A ƙa'idar 3-2-1, 1 ɗin tana nufin:", options: ["Jirgi ɗaya", "Manomi ɗaya", "Rana ɗaya", "Kwafi ɗaya a wani wuri dabam"], answer: 3, why: "Kwafi a wani wuri dabam yana tsira idan aka yi sata, gobara ko lalacewa a ofis." },
      { objective: "O2", q: "A GIS, layukan tushe na shiri yawanci sun haɗa da:", options: ["Iyakokin gonaki da wuraren gonaki", "Fayilolin waƙa", "Hotunan ma'aikata kawai", "Takardun kuɗi (invoices)"], answer: 0, why: "Ana ɗora komai a kan gonaki da filaye." },
      { objective: "O2", q: "Hotunan Sentinel-2 kusan mita nawa ne a kowane pixel?", options: ["0.01", "10", "1,000", "100,000"], answer: 1, why: "Hotunan Sentinel-2 kyauta kusan mita 10 ne a kowane pixel." },
      { objective: "O2", q: "Haɗa spreadsheet da layin gonaki yana buƙatar:", options: ["Launi iri ɗaya", "Jirgi", "ID ɗaya da suke rabawa, kamar Field ID", "Firinta"], answer: 2, why: "ID ɗin yana haɗa kowane layi na tebur da filinsa." },
      { objective: "O2", q: "Wace tambaya ce aikin GIS da aka haɗa zai iya taimakawa a amsa?", options: ["Mene ne kalmar sirrin manomi?", "Mene ne launin jirgin?", "Wa ya ci wasan ƙwallon ƙafa?", "Shin gonakin da suka sami shawarar jirgi sun fi bayar da girbi?"], answer: 3, why: "Haɗa bayanai da gonaki yana ba da damar irin wannan kwatance." },
      { objective: "O3", q: "Wa ke kula da dokar kare bayanai ta Najeriya?", options: ["Nigeria Data Protection Commission (NDPC)", "NCAA", "Kamfanin da ya yi jirgin", "Ƙungiyar haɗin gwiwa"], answer: 0, why: "An kafa NDPC ne bisa Nigeria Data Protection Act 2023." },
      { objective: "O3", q: "Izini na gaske yana nufin manomin:", options: ["Ba a faɗa masa komai ba", "Ya fahimci abin da kuke tattarawa, dalili, wanda zai gani, kuma zai iya ƙi", "Ya sa hannu ba tare da karantawa ba", "Ya bayar da lambar sirrinsa (PIN)"], answer: 1, why: "Dole izini ya kasance da cikakkiyar fahimta kuma ba tare da tilastawa ba." },
      { objective: "O3", q: "Wani mai saye ya nemi jerin sunayen manoma da girbinsu. Ya kamata ku:", options: ["Ku aika nan take", "Ku wallafa shi a bainar jama'a", "Ku raba shi ne kawai da izinin manoma", "Ku sayar da shi"], answer: 2, why: "Ba a raba bayanan sirri ba tare da izini ba." },
      { objective: "O3", q: "Tattara abin da kuke buƙata kawai ana kiransa:", options: ["Tara bayanai barkatai", "Ajiyar kwafi", "Rufe juna (overlap)", "Rage bayanai (data minimisation)"], answer: 3, why: "Ƙarancin bayanai yana nufin ƙarancin haɗari, kuma ƙa'ida ce ta kare bayanai." },
      { objective: "O4", q: "Ya kamata shiri ya fara daga:", options: ["Matsalar da masu amfani suka damu da ita kuma za su iya ɗaukar mataki a kai", "Sabon jirgi", "Tambari (logo)", "Sanarwa ga 'yan jarida"], answer: 0, why: "Shirye-shiryen da suka fara da matsala suna kawo amfani." },
      { objective: "O4", q: "Me manoma suka fi buƙata daga shirin?", options: ["Fayilolin ɗanyen hotuna", "Taswira da shawara mai sauƙi a wayarsu", "Manhajar GIS", "Lasisin matuƙin"], answer: 1, why: "Bayani mai sauƙi da za a iya aiki da shi yana taimaka wa manoma su ɗauki mataki." },
      { objective: "O5", q: "Inda wutar lantarki ba ta da tabbas, ku tsara:", options: ["Rashin batura", "Tashi da daddare kawai", "Cajin hasken rana ko na mota", "Tashin jirgi sau ɗaya a shekara"], answer: 2, why: "Hanyoyin caji suna bar ƙungiya ta ci gaba da tashi a tsawon yini." },
      { objective: "O5", q: "Haɗa gonaki bisa yanki a jadawali yana taimakawa wajen:", options: ["Amfani da ƙarin mai", "Sa taswirori su yi dishi-dishi", "Guje wa lasisi", "Kai wa gonaki da yawa a rana ɗaya"], answer: 3, why: "Ƙarancin tafiya yana nufin ƙarin gonaki a rana da ƙarancin kuɗi." },
      { objective: "O5", q: "Hanya ɗaya ta biyan hidimar jirgi ta ƙungiyar haɗin gwiwa ita ce:", options: ["Ƙaramin kuɗi a kowace hekta da ake biya ta kuɗin waya", "Kyauta har abada ba tare da wani shiri ba", "Sayar da bayanan manoma", "Ƙin yin gyare-gyare"], answer: 0, why: "Kuɗaɗe, levy, masu saye ko tallafi za su iya biyan hidimar da gaskiya." },
      { objective: "O5", q: "Me yasa za a tsara abin da zai faru bayan tallafi ya ƙare?", options: ["Tallafi ba ya ƙarewa", "Don hidimar ta ci gaba idan tallafin ya tsaya", "Don a kashe kuɗi da sauri", "Ba a buƙata"], answer: 1, why: "Shirye-shiryen da suka dogara ga tallafi kawai sukan tsaya." },
      { objective: "O6", q: "Wanne ne ma'aunin nasara?", options: ["Yawan hotunan da jirgi ya ɗauka", "Launin jirgin", "Manoman da suka sami shawara cikin kwana uku da gano matsala", "Girman ofis"], answer: 2, why: "Yana auna sakamakon da masu amfani suka damu da shi." },
      { objective: "O6", q: "Lokacin bayar da rahoto, ya kamata ku:", options: ["Ɓoye abin da bai yi aiki ba", "Aika wa kowa rahoto ɗaya mai shafi 50", "Bayar da rahoto ga mai ba da tallafi kawai", "Faɗi gaskiya ku yi amfani da hanyar da kowane mai amfani zai iya amfani da ita"], answer: 3, why: "Rahotanni na gaskiya da suka dace da masu amfani suna gina amincewa da ingantawa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      4,
      6,
      9,
      10,
      12,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na tsarin ku sake duba shi.",
    criteria: [
      {
        name: "Matsala, manufa da masu amfani",
        objective: "O4",
        notYet: "Ya fara da jirgin, ko manufar ba ta da lamba ko kwanan wata.",
        meets: "Matsala ta gaske, manufa mai lamba da kwanan wata, da kowane mai amfani tare da abin da yake samu.",
        exceeds: "Ya nuna cewa masu amfani sun amince da matsalar, misali daga taron manoma."
      },
      {
        name: "Shirin bayanai",
        objective: "O1",
        notYet: "Babu shirin ajiya, sanya sunaye ko ajiyar kwafi.",
        meets: "Tsarin manyan fayiloli, Farm ID, rajistar tashin jirgi da ajiyar kwafi ta 3-2-1.",
        exceeds: "Ya faɗi tsawon lokacin riƙe ɗanyen hotuna da wanda ke duba kwafin ajiya."
      },
      {
        name: "Amfani da GIS da tauraron ɗan adam",
        objective: "O2",
        notYet: "Babu layukan GIS ko amfani da tauraron ɗan adam.",
        meets: "An jera layukan GIS, an haɗa bayanai ta Field ID, kuma ana amfani da tauraron ɗan adam don zaɓar inda za a tashi.",
        exceeds: "Ya ambaci tambayar da bayanan da aka haɗa za su amsa, kamar girbi da shawara da kuma ba tare da ita ba."
      },
      {
        name: "Izini da kariyar bayanai",
        objective: "O3",
        notYet: "Babu izini ko matakan kare bayanai.",
        meets: "Izini a harshen manomi, rage bayanai, ajiya mai aminci da rashin raba bayanai ba tare da izini ba, bisa dokar da ta dace.",
        exceeds: "Ya duba ko dole ƙungiyar ta yi rajista da hukumar kare bayanai."
      },
      {
        name: "Ma'aikata, jadawali da kasafin kuɗi",
        objective: "O5",
        notYet: "Babu lasisi, jadawali ko yadda za a biya.",
        meets: "Ma'aikata masu lasisi, kayan aiki, jadawalin tashin jirgi na kakar noma, kuɗin sau ɗaya da na gudanarwa, da yadda za a biya hidimar.",
        exceeds: "Ya nuna shiri na bayan kowane tallafi ya ƙare."
      },
      {
        name: "Ma'aunai da rahoto",
        objective: "O6",
        notYet: "Babu ma'aunai ko yanayin farko.",
        meets: "'Yan ma'aunai da suka shafi manufar, yanayin farko, da hanyar rahoto ga kowane mai amfani.",
        exceeds: "Ya haɗa da ra'ayoyin manoma kan ko shawarar ta yi amfani kuma ta cancanci a biya ta."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na tsarin shirin",
      "Masu koyo da suka gabatar da tsarin shirinsu ga kwamitin ƙungiyar haɗin gwiwa, ofishin gunduma ko jiha, mai ba da tallafi ko mai zuba jari cikin kwanaki 90 (binciken biyo baya)",
      "Shirye-shiryen da aka tsara a kwas ɗin da suka fara kakar gwaji tare da rubutaccen izinin manoma",
      "Masu koyo da suka ci gaba zuwa Kwas na 6 na jerin kwasa-kwasan jirage"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Laptop mai QGIS kyauta da spreadsheet",
      "Misalan taswirorin jirgi, iyakokin gonaki da bayanan gona, ko na mai koyo da kansa",
      "Farashin gida na jirage, sufuri, data da inshora, idan akwai",
      "Kusan minti 60 gaba ɗaya, a gajerun zama, da ƙarin lokaci don rubuta tsarin mai shafi biyu"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku yi aiki a kan misalin ƙungiyar haɗin gwiwa ɗaya a matsayin rukuni kafin masu koyo su rubuta nasu tsarin.",
      "Ku yi amfani da Farm ID, ba sunayen manoma na gaske ko lambobinsu ba, a dukan misalan aji.",
      "Ku nemi masu koyo su duba shafin hukumar kare bayanai ta ƙasarsu don ƙa'idojin rajista.",
      "Ku ƙarfafa masu koyo su gwada manufarsu da kasafin kuɗinsu tare da ƙungiyar haɗin gwiwa ta gaske ko abokin aiki kafin su gama.",
      "Ku ba da maki ga tsarin shirin da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

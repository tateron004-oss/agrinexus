"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-risk-management.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// No investment advice and no recommendation to trade. All money figures are examples except the confirmed Cote d'Ivoire cocoa prices.

const KAMIS = { name: "Kenya Agricultural Market Information System (KAMIS), Ma'aikatar Noma ta Kenya: farashin kasuwa", url: "https://kamis.kilimo.go.ke" };
const NBS = { name: "National Bureau of Statistics (Hukumar Ƙididdiga ta Ƙasa), Najeriya: rahoton farashin abinci na kowane wata da hauhawar farashi", url: "https://nigerianstat.gov.ng" };
const CI_COCOA = { name: "Financial Afrik (5 ga Maris 2026): Côte d'Ivoire ta sa farashin koko na tsakiyar kakar a 1,200 FCFA/kg", url: "https://www.financialafrik.com/2026/03/05/cote-divoire-le-prix-de-la-campagne-intermediaire-de-cacao-fixe-a-1-200-fcfa-kg/" };
const PICS = { name: "Jami'ar Purdue: buhunan PICS masu hana iska shiga (Purdue Improved Crop Storage)", url: "https://www.purdue.edu/discoverypark/food/research/pics.php" };
const NCX = { name: "Nigeria Commodity Exchange (NCX): game da mu (Securities and Exchange Commission ta ba ta lasisi)", url: "https://ncx.com.ng/about-us/" };
const GCX = { name: "Ghana Commodity Exchange (GCX), shafin hukuma", url: "https://www.gcx.com.gh" };
const GCX_FIRST = { name: "MyJoyOnline: Ghana Commodity Exchange ta yi cinikinta na farko ta intanet (kwangilar masara ta nan take, 2018)", url: "https://www.myjoyonline.com/ghana-commodity-exchange-executes-first-electronic-trade/" };
const ACRE = { name: "ACRE Africa: inshorar ma'aunin yanayi (wakilin inshora mai izini)", url: "https://acreafrica.com/crop-insurance/weather-index-insurance/" };
const IBLI = { name: "ILRI: Inshorar Dabbobi ta Ma'auni (IBLI) da Shirin Inshorar Dabbobi na Kenya (KLIP)", url: "https://ibli.ilri.org/" };
const ILRI_KLIP = { name: "ILRI: Gwamnatin Kenya tana ba makiyaya inshorar dabbobi ta hotunan tauraron ɗan adam", url: "https://www.ilri.org/news/eyes-sky-kenyas-government-provides-pastoralists-livestock-insurance-through-satellite-imagery" };
const CNAAS = { name: "CNAAS, Kamfanin Inshorar Noma na Ƙasa na Senegal (Compagnie Nationale d'Assurance Agricole du Sénégal)", url: "https://www.cnaas.sn" };
const BCEAO = { name: "BCEAO, Babban Bankin Ƙasashen Yammacin Afirka: manyan alƙaluma, har da hauhawar farashi", url: "https://www.bceao.int/fr/content/principaux-indicateurs-et-taux-directeurs" };
const CBK = { name: "Central Bank of Kenya (Babban Bankin Kenya): hauhawar farashi da cibiyoyi masu lasisi", url: "https://www.centralbank.go.ke" };
const SASRA = { name: "SASRA, Kenya: jerin SACCO masu lasisin karɓar ajiya", url: "https://www.sasra.go.ke/licensed-dt-saccos/" };

module.exports = {
  id: "agri-risk-management-ha",
  lang: "ha",
  translationOf: "agri-risk-management",
  category: "Agriculture (Africa)",
  name: "Sarrafa Haɗarin Noma: Farashi, Yanayi da Inshora",
  skills: "Jera haɗarin gona a rajistar haɗari, Bin diddigin farashi da karanta yanayin kasuwa, Raba haɗari ta hanyar noma iri-iri, sayarwa a matakai da ajiya, Auna kwangilar farashi na gaba da hedging, Duba tayin inshorar ma'auni, Kare ajiyar kuɗi daga hauhawar farashi",
  outcome: "jera da tsara haɗarin da gonarku take fuskanta, bin diddigin farashi da karanta yadda yake tafiya, yanke shawarar lokacin da ajiya da sayarwa a matakai suke da riba, duba kwangilar farashi tsayayye da tayin inshorar ma'auni kafin ku sa hannu, da kare ajiyar kuɗinku daga hauhawar farashi, duka a rubuce a shirin haɗarin gona na shafi ɗaya.",
  about: [
    "Wannan kwas na ƙananan manoma ne da manoman kasuwanci masu girma, makiyaya, matasa masu sana'ar noma, shugabannin ƙungiyoyin haɗin gwiwa (cooperative) da ma'aikatan faɗakarwa (extension) a Kenya, Najeriya, Ghana, Senegal, Côte d'Ivoire da sauran Afirka. Mummunan yanayi, faɗuwar farashi, dabbobi marasa lafiya da tsadar kaya suna iya lalata aikin shekara guda. Ba za ku iya kawar da haɗari ba, amma kuna iya ganin sa tun kafin ya zo, ku raba shi, ku kuma mayar da wani sashe nasa ga wasu.",
    "Babi na 1 game da gani da raba haɗari ne: nau'o'in haɗarin gona da rajistar haɗari, sauyin farashi da yanayin kasuwa, da raba haɗari ta noma iri-iri, sayarwa a matakai da ajiya. Babi na 2 game da mayar da haɗari ga wasu da kare kuɗinku ne: kwangilar farashi na gaba ko tsayayye, ma'anar hedging a kasuwar kayayyaki (commodity exchange), inshorar amfanin gona da dabbobi ta ma'auni, da hauhawar farashi da ajiya.",
    "Wannan kwas yana bayanin yadda kwangiloli, kasuwannin kayayyaki, inshora da ajiya suke aiki, da haɗarinsu. Ba ya ba da shawarar zuba jari, kuma ba ya ba da shawarar yin ciniki a kowace kasuwar kayayyaki. Ku karanta kowace kwangila da takardar inshora gaba ɗaya, ku tabbatar kamfanin yana da lasisi, kuma ku tambayi mai ba da shawara da kuka amince da shi, kamar ƙungiyarku, jami'in faɗakarwa ko lauya, kafin ku sa hannu. Alƙaluman kuɗi misalai ne sai inda aka ba da majiya."
  ],
  finalTask: "Ku rubuta shirin haɗari na shafi ɗaya don gonarku (ko gonar misali): manyan haɗari biyar ɗinku a jere bisa yiwuwa da illa, da mataki ɗaya ga kowanne; rajistar farashi ta mako huɗu don babban amfanin gonarku ko dabbarku daga aƙalla majiyoyi biyu, da yanayin farashin da kuka gani; shirin sayarwa da ke faɗin nawa za ku sayar lokacin girbi da nawa za ku ajiye, tare da farashin daidaito na ajiya; tambayoyin da za ku yi kafin ku sa hannu a kwangilar farashi tsayayye ko ku sayi inshorar ma'auni; da yadda za ku kare ajiyar kuɗinku daga hauhawar farashi.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ƙananan manoma da manoman kasuwanci masu girma, makiyaya, matasa masu sana'ar noma, shugabannin ƙungiyoyin haɗin gwiwa da ma'aikatan faɗakarwa a Kenya, Najeriya, Ghana da ƙasashen Yammacin Afirka masu Faransanci, masu noman amfanin gona kamar masara, shinkafa, dawa, wake, gyaɗa, tumatir, kofi da koko, ko masu kiwon shanu, awaki, aladu, kaji ko kifi.",
    startingPoint: "Sun sani daga gogewa cewa yanayi, farashi da cuta suna iya lalata damina. Yawancinsu suna sayarwa lokacin girbi ga mai saye na farko, suna ajiye kuɗi a hannu, a dabbobi ko a hatsi, kuma ba su taɓa karanta takardar inshora ko kwangilar farashi tsayayye ba. Wasu sun ji labarin kasuwannin kayayyaki ko inshorar ma'auni amma ba su san yadda suke aiki ba.",
    gap: "Ba tare da shiri ba, fari ɗaya, faɗuwar farashi ko ɓarkewar cuta na iya tilasta manoma su sayar da dabbobi da ƙasa, su ci bashi da tsada, ko su bar noma. Manoman da suke bin diddigin farashi, suke raba haɗari, suke karanta sharuɗɗan kwangila da inshora, kuma suke kare ajiyarsu suna farfaɗowa da sauri, kuma masu saye da masu ba da bashi sun fi amincewa da su.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kowace kalmar kuɗi",
      "Na'urori: waya mai sauƙi don farashi ta SMS, rediyo ko kira; littafin rubutu don rajistar farashi",
      "Lokaci: darussa na minti 5 zuwa 6 da suka dace da aikin gona",
      "Inshora, kasuwannin kayayyaki da shirye-shirye sun bambanta a kowace ƙasa kuma suna canjawa; masu koyo suna duba tayin yanzu da hukumar da ke kula",
      "Babu shawarar zuba jari kuma babu shawarar yin ciniki; masu koyo suna tambayar mai ba da shawara da suka amince da shi kafin su sa hannu a komai"
    ],
    prerequisites: "Babu. Kwas ɗin \"Kasuwancin Noma da Sarrafa Gona\" da \"Lissafin Kuɗin Gona da Sarrafa Jari\" (farashin daidaito) suna taimakawa da lissafin."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna tunani game da gonarku da gidanku", action: "jera manyan haɗarin da kuke fuskanta da tsara su a rajistar haɗari bisa yadda suke iya faruwa da yawan ɓarnar da za su yi", standard: "da aƙalla haɗari ɗaya na kowane nau'i (samarwa, kasuwa, kuɗi, dokoki da mutane) da mataki ɗaya ga kowane cikin manyan biyar" },
    { id: "O2", condition: "Don babban amfanin gonarku ko dabbarku, a cikin mako huɗu", action: "rubuta farashi kowane mako daga aƙalla majiyoyi biyu, har da hidimar bayanan kasuwa ta hukuma inda take, da bayyana yanayin farashin", standard: "da kaya ɗaya, matsayi ɗaya da ma'auni ɗaya kowane mako" },
    { id: "O3", condition: "Idan an ba ku girbi, farashin yau, farashin da ake tsammani daga baya da kuɗin ajiya", action: "lissafa farashin daidaito na ajiya da rubuta shirin sayarwa a matakai da raba haɗari", standard: "da lissafi daidai, kuma buƙatun kuɗi na lokacin girbi sun cika" },
    { id: "O4", condition: "Idan an ba ku tayin kwangilar farashi na gaba ko tsayayye", action: "jera sharuɗɗan da za a duba da bayanin abin da za ku samu da abin da za ku rasa, har da yadda hedging a kasuwar kayayyaki take aiki", standard: "kuna ambaton aƙalla sharuɗɗa biyar da riba ɗaya da haɗari ɗaya" },
    { id: "O5", condition: "Idan an ba ku tayin inshorar amfanin gona ko dabbobi ta ma'auni", action: "duba ma'aunin, iyakar biya (trigger), kuɗin inshora (premium), haɗarin rashin daidaito (basis risk) da lasisin kamfanin inshorar", standard: "kafin ku biya, kuna rubuta amsar kowanne" },
    { id: "O6", condition: "Idan kuna da ajiyar kuɗi kuma kun san yawan hauhawar farashi na yanzu", action: "kwatanta aƙalla hanyoyi uku na ajiye kuɗi da zaɓar haɗakarsu da za ta kare su daga hauhawar farashi da sata", standard: "kuna ambaton haɗari ɗaya na kowace hanya, kuma kuna tabbatar da cewa kowace SACCO, banki ko cibiyar ƙananan bashi (microfinance) tana da lasisi" }
  ],
  chapters: [
    {
      name: "Babi na 1: Gani da raba haɗari",
      lessons: [
        {
          title: "Nau'o'in haɗarin gona da rajistar haɗari",
          objectives: ["O1"],
          minutes: 5,
          goal: "Jera manyan haɗarin gonarku ku tsara su a rajistar haɗari mai sauƙi.",
          text: [
            "Haɗarin gona iri biyar ne. Haɗarin samarwa: fari, ambaliya, kwari kamar tsutsar fall armyworm, cututtukan amfanin gona da dabbobi, sata. Haɗarin kasuwa: faɗuwar farashi, masu saye da ba su biya ko ba su zo ɗauka ba, tashin farashin kayan noma. Haɗarin kuɗi: bashin da ba za ku iya biya ba, asarar ajiya, hauhawar farashi, canjin kuɗin waje ga kayan da ake fitarwa kamar kofi da koko. Haɗarin dokoki: sabon haraji, hana fitar da kaya, canjin dokokin ƙasa ko na kasuwa. Haɗarin mutane: rashin lafiya, rauni ko mutuwa a iyali, ko rasa wani muhimmin ma'aikaci.",
            "Rajistar haɗari tebur ne mai layi ɗaya ga kowane haɗari. Ga kowanne, ku ba shi maki na yadda zai iya faruwa (1 kaɗan, 2 matsakaici, 3 da yawa) da yawan ɓarnar da zai yi (1 ƙarama, 2 matsakaiciya, 3 babba). Ku ninka biyun don samun maki daga 1 zuwa 9. Mafi girman maki su ne na farko.",
            "Ga kowane babban haɗari, ku zaɓi mataki: ku guje masa (kada ku shuka tumatir a watan da ya fi ruwa), ku rage shi (irin da ke jure fari, alluran rigakafi kamar yadda likitan dabbobi ya ce, ajiya), ku raba ko ku mayar da shi (inshora, kwangila, ƙungiyar haɗin gwiwa), ko ku karɓe shi ku ajiye kuɗi saboda shi. Ku sake duba rajistar kafin kowace damina."
          ],
          steps: ["Ku jera haɗari na kowane nau'i: samarwa, kasuwa, kuɗi, dokoki, mutane.", "Ku ba kowanne maki na yiwuwa: 1, 2 ko 3.", "Ku ba kowanne maki na ɓarnar da zai yi: 1, 2 ko 3.", "Ku ninka makin ku jera haɗarin.", "Ga manyan biyar, ku zaɓi guje wa, rage, raba ko karɓa, da mataki ɗaya.", "Ku sake duba kafin kowace damina."],
          words: [["Haɗari", "abin da zai iya faruwa kuma ya cutar da gonarku ko kuɗin shigarku."], ["Rajistar haɗari", "tebur da ke jera haɗarinku, yadda kowanne zai iya faruwa da yawan cutarsa, da abin da za ku yi."], ["Yiwuwa", "yadda abu zai iya faruwa."], ["Illa (ɓarna)", "yawan lalacewar da abu zai yi idan ya faru."]],
          slides: [
            { title: "Nau'o'in haɗarin gona biyar", bullets: ["Samarwa: yanayi, kwari, cuta, sata", "Kasuwa: farashi, masu saye, tsadar kayan noma", "Haɗarin kuɗi, dokoki da mutane"] },
            { title: "Ku ba kowane haɗari maki", bullets: ["Yiwuwa 1-3 x illa 1-3 = maki 1-9", "Mafi girman maki na farko"] },
            { title: "Hanyoyi huɗu na fuskantar haɗari", bullets: ["Ku guje masa", "Ku rage shi", "Ku raba ko ku mayar da shi: inshora, kwangila, ƙungiya", "Ku karɓe shi ku ajiye kuɗi saboda shi"] }
          ],
          tryIt: "Ku rubuta rajistar haɗari don gonarku mai aƙalla haɗari takwas da suka shafi dukkan nau'o'i biyar. Ku ba kowanne maki, ku jera su, kuma ku rubuta matakin guje wa, rage, raba ko karɓa ga manyan biyar.",
          youCanNow: "jera haɗarin gonarku, tsara su a jere da zaɓar mataki ga mafi tsanani daga cikinsu.",
          quickCheck: [
            { objective: "O1", q: "Farashin masara ya faɗi da rabi lokacin girbi. Wane irin haɗari ne wannan?", options: ["Haɗarin samarwa", "Haɗarin mutane", "Haɗarin kasuwa", "Haɗarin dokoki"], answer: 2, why: "Canjin farashi haɗarin kasuwa ne." },
            { objective: "O1", q: "Wani haɗari yana da yiwuwa 3 da illa 2. Menene makinsa?", options: ["6", "5", "1", "9"], answer: 0, why: "3 x 2 = 6." }
          ]
        },
        {
          title: "Sauyin farashi da karanta yanayin kasuwa",
          objectives: ["O2"],
          minutes: 6,
          goal: "Ku riƙe rajistar farashi ta kowane mako daga aƙalla majiyoyi biyu ku bayyana yanayin farashin.",
          text: [
            "Farashin amfanin gona da dabbobi yana tashi yana faɗuwa saboda lokaci, yanayi, shigo da kaya da fitar da su, tsadar mai da buƙatar kasuwa. Farashin yawancin abincin yau da kullum ya fi ƙasa lokacin girbi, lokacin da kowa ke sayarwa, kuma ya fi tsada a watannin kafin girbi na gaba. Ko farashin da gwamnati ta sa yana iya canjawa sosai tsakanin kaka: a Côte d'Ivoire, farashin koko da aka tabbatar wa manomi a gona ya kasance CFA franc 2,800 a kowane kg a babbar kakar 2025-2026, kuma gwamnati ta sa shi a 1,200 a kowane kg don tsakiyar kaka daga Maris 2026, bayan farashin koko na duniya ya faɗi.",
            "Ku yi amfani da hidimomin bayanan kasuwa na hukuma inda suke. A Kenya, KAMIS na Ma'aikatar Noma tana wallafa farashin kasuwa. A Najeriya, National Bureau of Statistics (Hukumar Ƙididdiga ta Ƙasa) tana wallafa rahoton farashin abinci na kowane wata a kowace jiha. A Ghana, Ghana Commodity Exchange tana wallafa farashin cinikinta. Ku ƙara da rahoton kasuwa na rediyo, ƙungiyarku, da aƙalla masu saye biyu.",
            "Ku riƙe rajistar farashi: kowane mako, kwanan wata, kasuwa ko majiya, kaya, matsayi da ma'auni (misali buhun masara busasshiya na kg 90), da farashi. Bayan mako huɗu ko fiye, ku duba hanyar da yake bi: yana tashi, yana faɗuwa ko bai canja ba. Ku kwatanta da watanni ɗaya na bara idan za ku iya. Yanayin farashi jagora ne, ba alƙawari ba: farashi na iya juyawa da sauri."
          ],
          steps: ["Ku zaɓi babban kayanku, matsayinsa da ma'auninsa.", "Ku zaɓi aƙalla majiyoyi biyu, har da hidimar hukuma inda take.", "Kowane mako ku rubuta: kwanan wata, majiya, kaya, matsayi, ma'auni, farashi.", "Bayan mako huɗu, ku nuna hanyar: yana tashi, yana faɗuwa ko bai canja ba.", "Ku kwatanta da watanni ɗaya na bara.", "Ku raba rajistar da ƙungiyarku."],
          words: [["Hidimar bayanan kasuwa", "hidimar da ke tattara farashi daga kasuwanni tana rabawa ta shafin intanet, SMS ko rediyo."], ["Yanayin farashi (trend)", "hanyar da farashi yake bi gaba ɗaya a cikin makonni ko watanni da dama."], ["Farashin gona (farmgate)", "farashin da ake biyan manomi a gona, kafin a kai kaya kasuwa."]],
          slides: [
            { title: "Me yasa farashi yake canjawa", bullets: ["Lokaci, yanayi, shigo da fitar da kaya", "Tsadar mai da buƙatar kasuwa", "Sau da yawa ya fi ƙasa lokacin girbi"] },
            { title: "Ko farashin da aka sa yana canjawa", bullets: ["Koko a Côte d'Ivoire: CFA 2,800/kg, babbar kakar 2025-26", "An sa shi a CFA 1,200/kg daga Maris 2026", "Bayan farashin duniya ya faɗi"] },
            { title: "Inda za ku sami farashi", bullets: ["Kenya: KAMIS", "Najeriya: rahoton farashin abinci na NBS na kowane wata", "Ghana: cinikin Commodity Exchange; rediyo; masu saye"] },
            { title: "Rajistar farashinku ta kowane mako", bullets: ["Kwanan wata, majiya, kaya, matsayi, ma'auni, farashi", "Bayan mako 4: yana tashi, yana faɗuwa ko bai canja ba?", "Yanayin farashi jagora ne, ba alƙawari ba"] }
          ],
          sources: [KAMIS, NBS, GCX, CI_COCOA],
          tryIt: "Ku fara rajistar farashi don babban amfanin gonarku ko dabbarku yau. Ku rubuta farashin wannan makon daga majiyoyi biyu, da kaya, matsayi da ma'auni, kuma ku sa tunatarwa a wayarku don rana ɗaya kowane mako.",
          youCanNow: "riƙe rajistar farashi ta kowane mako daga majiyoyin hukuma da na gida da bayyana yanayin farashin.",
          quickCheck: [
            { objective: "O2", q: "Me yasa za ku rubuta matsayi da ma'auni tare da kowane farashi a rajistarku?", options: ["Don rajistar ta yi kama da ta hukuma", "Masu saye suna buƙatar ganin ta", "Ba a buƙatar sa", "Don ku kwatanta abu ɗaya kowane mako"], answer: 3, why: "Ba za a iya kwatanta farashin buhun masara danya na kg 50 da buhun masara busasshiya na kg 90 ba." },
            { objective: "O2", q: "A cikin mako biyar, farashin tumatir a wata kasuwa ya kasance 400, 420, 450, 470, 500 a kowane kwando. Yaya yanayin farashin yake?", options: ["Yana faɗuwa", "Yana tashi", "Bai canja ba", "Ba za a iya sani ba"], answer: 1, why: "Kowane mako farashin ya fi na makon da ya gabata." }
          ]
        },
        {
          title: "Raba haɗari: noma iri-iri, sayarwa a matakai da ajiya",
          objectives: ["O3"],
          minutes: 6,
          goal: "Ku lissafa ko ajiya tana da riba ku rubuta shirin sayarwa a matakai.",
          text: [
            "Noma iri-iri (diversification) yana nufin kada ku sa duk ƙwai a kwando ɗaya: amfanin gona biyu ko fiye masu lokaci ko kasuwa daban-daban, 'yan awaki ko kaji, kifi, bishiyoyi, ko kuɗin shiga daga wajen gona. Idan ɗaya ya lalace, wani na iya ci gaba da kawo kuɗi. Kada ku raba har ku kasa kula da kowanne da kyau.",
            "Sayarwa a matakai tana nufin sayar da sashe na girbi a lokuta daban-daban maimakon sayar da duka lokaci ɗaya. Misali, ku sayar da kashi ɗaya cikin uku lokacin girbi don biyan kuɗin makaranta da basussuka, kashi ɗaya bayan wata biyu, da kashi ɗaya bayan wata huɗu. Ta haka ba za ku sayar da duka a mafi ƙanƙantar farashi ba, kuma ba za ku dogara gaba ɗaya kan farashi mai tsada da ba lallai ya zo ba.",
            "Ajiya tana da riba ne kawai idan farashin baya ya rufe kuɗin ajiya da asara. Farashin daidaito na ajiya = (farashin girbi x buhuna + kuɗin ajiya) / buhunan da za ku sayar daga baya. Misali (lambobin ƙirƙira a shilling na Kenya): buhunan masara 10, farashin girbi 3,000 a kowane buhu, kuɗin ajiya 3,000 na wata huɗu (buhunan da ke hana iska shiga, rumbu, dubawa). Farashin daidaito = (30,000 + 3,000) / 10 = 3,300 a kowane buhu. Idan farashi ya kai 4,200 kun ci riba; idan ya kai 3,200 kawai kun yi asara. Ku ajiye hatsi mai tsabta, busasshe kawai a buhunan da ke hana iska shiga ko a rumbun ajiya mai shaida, kuma ku duba shi don kwari da fumfuna."
          ],
          steps: ["Ku jera me kuma za ku iya nomawa, kiwo ko samun kuɗi da shi don kada lalacewar ɗaya ta karya ku.", "Ku lissafa yawan kuɗin da kuke buƙata lokacin girbi.", "Ku shirya sayar da isasshe lokacin girbi don wannan kuɗi, ku ajiye sauran don sayarwa a matakai.", "Farashin daidaito na ajiya = (farashin girbi x buhuna + kuɗin ajiya) / buhuna.", "Ku kwatanta shi da yanayin farashi a rajistarku.", "Ku ajiye amfanin gona mai tsabta, busasshe kawai cikin aminci, kuma ku riƙa duba shi."],
          words: [["Noma iri-iri (diversification)", "raba aikin gona da kuɗin shiga a ayyuka da dama don kada lalacewar ɗaya ta karya ku."], ["Sayarwa a matakai", "sayar da girbi kashi-kashi a lokuta daban-daban maimakon duka lokaci ɗaya."], ["Farashin daidaito na ajiya", "farashin baya da kuke buƙata don rufe farashin girbin da kuka bari tare da kuɗin ajiya."], ["Buhun da ke hana iska shiga (hermetic)", "buhun ajiya da ba ya barin iska ta shiga, don haka kwari ba sa numfashi, kuma hatsi yana zama lafiya ba tare da magunguna ba."]],
          slides: [
            { title: "Ku yi noma iri-iri", bullets: ["Amfanin gona masu lokaci ko kasuwa daban-daban", "Ƙananan dabbobi, kifi, bishiyoyi, kuɗin shiga daga wajen gona", "Ba da yawa har ku kasa kula da su ba"] },
            { title: "Ku sayar a matakai", bullets: ["Kashi ɗaya cikin uku lokacin girbi don buƙatun kuɗi", "Kashi ɗaya bayan wata 2, kashi ɗaya bayan wata 4", "Ba caca ta duka ko babu kan farashi ba"] },
            { title: "Ajiya tana da riba? (misali KES)", bullets: ["(3,000 x 10 + 3,000) / 10 = 3,300 a kowane buhu", "Farashi 4,200: riba; farashi 3,200: asara", "Ku kwatanta da rajistar farashinku"] },
            { title: "Ku ajiye cikin aminci", bullets: ["Hatsi mai tsabta, busasshe kawai", "Buhunan da ke hana iska shiga ko rumbun ajiya mai shaida", "Ku duba don kwari da fumfuna"] }
          ],
          sources: [PICS],
          tryIt: "Don babban amfanin gonarku, ku rubuta buhuna ko kg nawa kuke tsammani, kuɗi nawa kuke buƙata lokacin girbi, da nawa za ku sayar lokacin girbi, bayan wata biyu da bayan wata huɗu. Ku lissafa farashin daidaito na ajiya don sashen da za ku ajiye.",
          youCanNow: "lissafa ko ajiya tana da riba, shirya sayarwa a matakai da raba haɗari a ayyuka fiye da ɗaya.",
          quickCheck: [
            { objective: "O3", q: "Farashin girbi 5,000 a kowane buhu, buhuna 20, kuɗin ajiya 10,000. Menene farashin daidaito na ajiya?", options: ["5,000", "10,500", "5,500", "500"], answer: 2, why: "(5,000 x 20 + 10,000) / 20 = 110,000 / 20 = 5,500 a kowane buhu." },
            { objective: "O3", q: "Menene babban amfanin sayarwa a matakai?", options: ["Ba za ku sayar da duka a mafi ƙanƙantar farashi ba, ko ku dogara gaba ɗaya kan farashi mai tsada", "Masu saye koyaushe suna biyan ƙari don ƙananan yawa", "Ba za ku taɓa buƙatar ajiya ba", "Yana kawar da duk haɗarin farashi"], answer: 0, why: "Sayarwa kashi-kashi tana raba haɗarin farashi a ranaku da dama." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Gani da raba haɗari",
        questions: [
          { objective: "O1", q: "Wanne ne haɗarin samarwa?", options: ["Sabon harajin fitar da kaya", "Mai saye da ke jinkirin biya", "Hauhawar farashi", "Tsutsar fall armyworm a masararku"], answer: 3, why: "Kwari da yanayi suna shafar abin da kuke samarwa, don haka haɗarin samarwa ne." },
          { objective: "O1", q: "Sayen inshorar ma'auni don fari wace hanya ce ta fuskantar haɗari?", options: ["Guje masa", "Raba shi ko mayar da shi", "Karɓar shi", "Watsi da shi"], answer: 1, why: "Inshora tana mayar da wani sashe na asarar ga kamfanin inshora." },
          { objective: "O2", q: "Wace ce hidimar farashin kasuwa ta hukuma a Kenya?", options: ["KAMIS ta Ma'aikatar Noma", "Matsayin WhatsApp na ɗan kasuwa", "Hasashen maƙwabci", "Rasidin bara"], answer: 0, why: "KAMIS ita ce tsarin bayanan kasuwa na Ma'aikatar Noma." },
          { objective: "O3", q: "Farashin girbi 2,000 a kowane buhu, buhuna 10, kuɗin ajiya 4,000. Farashin baya 2,300 ne. Ajiya tana da riba?", options: ["Eh, domin 2,300 ya fi 2,000", "Eh, ajiya koyaushe tana da riba", "A'a, farashin daidaito 2,400 ne, don haka asara ce", "Ba za a iya lissafawa ba"], answer: 2, why: "(2,000 x 10 + 4,000) / 10 = 2,400; 2,300 bai kai haka ba." },
          { objective: "O3", q: "Wani manomi yana noman tumatir kawai don mai saye ɗaya. Me zai raba haɗarin?", options: ["Ƙara shuka tumatir don mai saye ɗaya", "Ƙara amfanin gona mai lokaci daban da nemo mai saye na biyu", "Sayar da komai ranar girbi", "Daina riƙe rubuce-rubuce"], answer: 1, why: "Amfanin gona na biyu da mai saye na biyu suna nufin lalacewar ɗaya ba za ta ɗauke komai ba." }
        ]
      }
    },
    {
      name: "Babi na 2: Mayar da haɗari da kare kuɗinku",
      lessons: [
        {
          title: "Kwangilar farashi tsayayye, hedging da kasuwannin kayayyaki",
          objectives: ["O4"],
          minutes: 6,
          goal: "Jera sharuɗɗan da za a duba a kwangilar farashi tsayayye ku bayyana ma'anar hedging.",
          text: [
            "Kwangilar farashi na gaba ko tsayayye yarjejeniya ce a yanzu ta sayar da wani yawa da inganci a wani farashi a wata rana a gaba. Kuna samun tabbaci: kun san farashinku kafin girbi, wanda ke taimaka muku tsara abubuwa da karɓar bashi. Kuna rasa wani abu: idan farashin kasuwa ya tashi, har yanzu farashin da aka amince da shi kuke samu. Idan girbinku ya lalace ko kuka sayar wa wani (side-selling), za ku iya karya kwangilar ku biya tara. Kafin ku sa hannu, ku duba: kaya da matsayinsa, yawa, farashi ko yadda ake sa shi, ranar da wurin kai kaya, wanda ke biyan sufuri, gwajin inganci da ƙin karɓa, ranar biya da hanyar biya, da abin da zai faru idan girbi ya lalace ko mai saye bai zo ɗauka ba.",
            "Hedging yana nufin ɗaukar wani matsayi da ke samun riba lokacin da amfanin gonarku ya rasa daraja, don su biyun su daidaita juna. A kasuwar kayayyaki, manyan 'yan kasuwa da masana'antu suna yin haka da futures: kwangiloli na yau da kullum na saye ko sayarwa a gaba a farashin da aka amince da shi yau. Idan farashi ya faɗi, matsayin futures yana samun riba yayin da amfanin gona ke kawo ƙasa; idan farashi ya tashi, matsayin futures yana asara yayin da amfanin gona ke kawo ƙari. Yana buƙatar dillali (broker), ajiyar kuɗi da ake kira margin da za a iya nema ba zato ba tsammani, da ƙwarewa. Yana iya jawo asarar kuɗi, kuma ba abin da za a gwada ba ne ba tare da horo da shawara ba.",
            "A Afirka, Nigeria Commodity Exchange (NCX) tana da lasisi daga Securities and Exchange Commission (Hukumar Kula da Hannayen Jari) ta Najeriya, kuma tana ba da ciniki, gano farashi, ajiya da tantance matsayin kayayyaki. Ghana Commodity Exchange (GCX), da Securities and Exchange Commission ta Ghana ke kula da ita, ta fara cinikin masara na nan take ta intanet a 2018, kuma tana haɗa manoma da rumbunan ajiya masu shaida. Yawancin ƙananan manoma suna kaiwa ga kasuwannin kayayyaki ta ƙungiyar haɗin gwiwa, mai tattara kaya ko rumbun ajiya mai shaida, ba ta yin ciniki da kansu ba. Wannan kwas ba ya ba da shawarar yin ciniki. Duk wanda ya yi muku alƙawarin riba daga cinikin kayayyaki yana iya zama ɗan damfara: ku tabbatar da hukumar kula da hannayen jari."
          ],
          steps: ["Ku karanta kwangilar gaba ɗaya, da babbar murya tare da ƙungiyarku idan zai yiwu.", "Ku duba kaya, matsayi, yawa, farashi, ranar da wurin kai kaya, da sufuri.", "Ku duba gwajin inganci, ƙin karɓa, ranar biya da hanyar biya.", "Ku tambayi abin da zai faru idan girbi ya lalace ko mai saye bai zo ɗauka ba.", "Ku kwatanta farashin tsayayye da farashin daidaitonku da rajistar farashinku.", "Ku tambayi ƙungiyarku, jami'in faɗakarwa ko lauya kafin ku sa hannu."],
          words: [["Kwangilar gaba (forward contract)", "yarjejeniya a yanzu ta sayar da wani yawa a wani farashi a wata rana a gaba."], ["Hedging", "ɗaukar matsayi da ke samun riba lokacin da amfanin gonarku ya rasa daraja, don asarar ta daidaita."], ["Futures", "kwangiloli na yau da kullum da ake ciniki a kasuwar kayayyaki don saye ko sayar da kaya a gaba a farashin da aka amince da shi yanzu."], ["Kasuwar kayayyaki (commodity exchange)", "kasuwa da hukuma ke kula da ita inda masu saye da masu sayarwa ke cinikin amfanin gona da sauran kaya bisa matsayi da dokokin da aka amince da su."], ["Side-selling", "sayar wa wani kayan da aka yi wa wani mai saye alƙawari."]],
          slides: [
            { title: "Kwangilar farashi tsayayye", bullets: ["Yawa, inganci da farashi da aka sa don gaba", "Riba: farashin da aka sani don tsari da karɓar bashi", "Asara: ƙarin kuɗi idan farashi ya tashi"] },
            { title: "Ku duba kowane sharaɗi", bullets: ["Kaya, matsayi, yawa, farashi", "Ranar kai kaya, wuri, sufuri", "Gwajin inganci, ƙin karɓa, biya", "Lalacewar girbi; mai saye bai zo ɗauka ba"] },
            { title: "Ma'anar hedging", bullets: ["Matsayi da ke samun riba idan amfanin gonarku ya rasa daraja", "Futures suna buƙatar dillali, margin da ƙwarewa", "Yana iya jawo asara: ba na masu farawa ba ne"] },
            { title: "Kasuwannin kayayyaki a Afirka", bullets: ["Najeriya: NCX, mai lasisi daga SEC", "Ghana: GCX, cinikin masara na nan take tun 2018", "Yawancin manoma suna shiga ta ƙungiyoyi ko rumbunan ajiya"] }
          ],
          sources: [NCX, GCX, GCX_FIRST],
          tryIt: "Ku ɗauki kwangilar mai saye ta gaske ko ta misali. Ku rubuta kowane cikin sharuɗɗa takwas na matakan da abin da kwangilar ta ce (ko \"babu\"). Sannan ku rubuta abu ɗaya da za ku samu da haɗari ɗaya da za ku ɗauka idan kun sa hannu.",
          youCanNow: "duba kwangilar farashi tsayayye sharaɗi bayan sharaɗi da bayanin ma'anar hedging a kasuwar kayayyaki da dalilin da yasa yake da haɗari.",
          quickCheck: [
            { objective: "O4", q: "Kun sa hannu kan farashi tsayayye na 30,000 a kowane buhu. Ranar kai kaya, farashin kasuwa 36,000 ne. Me za ku samu?", options: ["36,000 a kowane buhu", "33,000 a kowane buhu", "Babu komai", "30,000 a kowane buhu, farashin da aka amince da shi"], answer: 3, why: "Kwangilar farashi tsayayye tana biyan farashin da aka amince da shi ko da kasuwa ta tashi." },
            { objective: "O4", q: "Wani baƙo ya ce zai yi muku cinikin futures da \"riba tabbatacciya\". Me ya kamata ku yi?", options: ["Ku ƙi, ku tabbatar da kamfanin a hukumar kula da hannayen jari", "Ku aika ɗan ajiya kaɗan don gwadawa", "Ku ba shi lambar sirrin kuɗin wayarku (PIN) don ya yi ciniki", "Ku sa hannu da sauri kafin tayin ya ƙare"], answer: 0, why: "Babu wanda zai iya tabbatar da ribar ciniki; wannan alamar zamba ce." }
          ]
        },
        {
          title: "Inshorar amfanin gona da dabbobi ta ma'auni",
          objectives: ["O5"],
          minutes: 6,
          goal: "Duba tayin inshorar ma'auni don ma'auninsa, iyakar biya, kuɗin inshora, haɗarin rashin daidaito da lasisi.",
          text: [
            "Inshora ta yau da kullum tana tura wani ya auna asarar a gonarku. Inshorar ma'auni (index insurance) tana biya ne idan wani ma'auni ya wuce wani mataki da aka sa, wanda ake kira trigger (iyakar biya): misali ruwan sama da tauraron ɗan adam ko tashar yanayi suka auna ya yi ƙasa da na yau da kullum, matsakaicin amfanin gona a yankinku ya faɗi, ko hotunan tauraron ɗan adam suka nuna ciyawar kiwo tana bushewa. Babu wanda ke ziyartar gonarku, don haka za ta iya zama mai rahusa kuma ta biya da sauri.",
            "Misalai: ACRE Africa, wakilin inshora mai izini a Kenya, tana aiki da kamfanonin inshora na gida don ba da inshorar ma'aunin yanayi, ma'aunin amfanin gonar yanki, da inshorar dabbobi ta ma'auni, sau da yawa ana sayar da ita ta ƙungiyoyin manoma kuma ana biya ta kuɗin waya (mobile money). Gwamnatin Kenya tana gudanar da Kenya Livestock Insurance Programme (KLIP), wanda aka fara a 2015 ta amfani da inshorar dabbobi ta ma'auni da aka ƙirƙira tare da ILRI (cibiyar binciken dabbobi ta duniya): gwamnati tana biyan kuɗin inshora ga makiyaya marasa ƙarfi da aka yi wa rajista, kuma ana biya idan hotunan tauraron ɗan adam suka nuna ciyawar kiwo tana lalacewa, don makiyaya su sami kuɗi su ceci dabbobinsu. A Senegal, kamfanin inshorar noma na ƙasa CNAAS yana inshorar amfanin gona da dabbobi kuma yana ba da inshorar ma'auni.",
            "Babban rauninta shi ne haɗarin rashin daidaito (basis risk): ma'aunin bazai yi daidai da gonarku ba. Amfanin gonarku na iya lalacewa saboda ƙanƙara ta gida yayin da ruwan saman yankin ya yi kama da na yau da kullum, don haka babu biya, ko kuma ma'aunin ya kai iyakar biya alhali gonarku ta yi kyau. Kafin ku biya, ku tambaya: wane haɗari aka rufe, wane ma'auni ne kuma a ina ake auna shi, menene iyakar biya, nawa ne biyan, menene kuɗin inshora da ranar ƙarshe ta saye, ta yaya kuma yaushe ake biya, kuma kamfanin inshorar yana da lasisi? (Kenya: Insurance Regulatory Authority; Najeriya: NAICOM; Ghana: National Insurance Commission; ƙasashen CFA franc: CIMA da ofishin inshora na ƙasa.)"
          ],
          steps: ["Ku tambayi wane haɗari aka rufe: fari, ruwan sama da ya yi yawa, asarar amfanin gonar yanki ko lalacewar ciyawar kiwo.", "Ku tambayi menene ma'aunin kuma a ina ake auna shi.", "Ku tambayi iyakar biya da yawan kuɗin biya.", "Ku tambayi kuɗin inshora, ranar ƙarshe ta saye da yadda biya ke isowa gare ku.", "Ku yi tunani game da haɗarin rashin daidaito: ma'aunin zai yi daidai da gonarku?", "Ku tabbatar kamfanin inshora ko wakilin yana da lasisi daga hukumar kula da inshora."],
          words: [["Inshorar ma'auni (index insurance)", "inshora da ke biya idan wani ma'auni da aka auna, kamar ruwan sama ko ciyawar kiwo, ya wuce wani mataki, ba bisa ziyara a gonarku ba."], ["Iyakar biya (trigger)", "matakin ma'auni da ke sa kamfanin inshora ya biya."], ["Kuɗin inshora (premium)", "farashin da kuke biya don samun kariyar inshora."], ["Haɗarin rashin daidaito (basis risk)", "yiwuwar cewa ma'aunin bai yi daidai da abin da ya faru a gonarku da gaske ba."]],
          slides: [
            { title: "Yadda inshorar ma'auni take aiki", bullets: ["Tana biya idan ma'auni ya wuce iyakar biya", "Ruwan sama, amfanin gonar yanki ko ciyawa daga tauraron ɗan adam", "Babu ziyarar gona: mai rahusa da sauri"] },
            { title: "Misalai", bullets: ["ACRE Africa: ma'aunin yanayi, amfanin gonar yanki, dabbobi", "KLIP a Kenya: gwamnati tana biyan kuɗin inshora ga makiyaya", "Senegal: inshorar amfanin gona da dabbobi ta CNAAS"] },
            { title: "Haɗarin rashin daidaito (basis risk)", bullets: ["Ma'aunin bazai yi daidai da gonarku ba", "Ƙanƙara ta gida: asara amma babu biya", "Ku tambayi nisan wurin da ake aunawa"] },
            { title: "Ku tambaya kafin ku biya", bullets: ["Haɗari, ma'auni, iyakar biya, biya", "Kuɗin inshora, ranar ƙarshe, yadda ake biya", "Akwai lasisi? IRA, NAICOM, NIC, CIMA"] }
          ],
          sources: [ACRE, IBLI, ILRI_KLIP, CNAAS],
          tryIt: "Ku tambayi ƙungiyarku, mai sayar da kayan noma ko jami'in faɗakarwa game da wata inshorar ma'auni ɗaya kusa da ku (ko ku yi amfani da misali). Ku rubuta amsoshin tambayoyi takwas na matakan, kuma ku rubuta hanya ɗaya da haɗarin rashin daidaito zai iya shafar gonarku.",
          youCanNow: "duba tayin inshorar ma'auni don ma'auninsa, iyakar biya, kuɗin inshora, haɗarin rashin daidaito da lasisi kafin ku biya.",
          quickCheck: [
            { objective: "O5", q: "Me ke sa inshorar ma'auni ta biya?", options: ["Kamfanin inshora ya ziyarci gonarku", "Ma'aunin ya wuce iyakar biya", "Ku nemi a biya ku", "Duk wata asara da kuka bayar da rahoto"], answer: 1, why: "Inshorar ma'auni tana biya bisa ma'aunin da aka auna, ba bisa ziyarar gona ba." },
            { objective: "O5", q: "Ƙanƙara ta gida ta lalata masararku, amma ma'aunin ruwan saman yankin ya kasance na yau da kullum. Me ake kiran wannan?", options: ["Kuɗin inshora", "Iyakar biya", "Haɗarin rashin daidaito", "Hedging"], answer: 2, why: "Haɗarin rashin daidaito shi ne lokacin da ma'aunin bai yi daidai da abin da ya faru a gonarku ba." }
          ]
        },
        {
          title: "Hauhawar farashi da ajiyar kuɗinku",
          objectives: ["O6"],
          minutes: 5,
          goal: "Kwatanta hanyoyin ajiye kuɗi ku zaɓi haɗakar da za ta kare su daga hauhawar farashi da sata.",
          text: [
            "Hauhawar farashi (inflation) tana nufin farashin abubuwa gaba ɗaya yana tashi, don haka kuɗi ɗaya yana sayen ƙasa da da. Misali: idan farashi ya tashi da 10% a shekara, 10,000 da aka ajiye a gwangwani a gida za su sayi abin da kusan 9,100 ke saye a yau kawai. Ku nemo yawan hauhawar farashi na yanzu daga babban bankinku ko ofishin ƙididdiga (Kenya: Central Bank of Kenya; Najeriya: National Bureau of Statistics; ƙasashen CFA franc a Yammacin Afirka: BCEAO).",
            "Kowace hanyar ajiya tana da haɗari. Kuɗi a gida: mai sauƙin samu, amma yana rasa daraja saboda hauhawar farashi kuma ana iya sace shi. Ƙungiyar ajiya ko VSLA: tana gina ɗabi'a kuma tana iya ba da rabon riba, amma ta dogara ga rubuce-rubuce na gaskiya. Asusun SACCO, banki ko cibiyar ƙananan bashi mai lasisi: ya fi aminci kuma yana iya biyan ruwa (interest), amma ku kwatanta ruwan da hauhawar farashi kuma ku duba kuɗaɗen caji. Dabbobi: suna iya ƙaruwa a daraja, amma suna iya mutuwa saboda fari ko cuta. Hatsin da aka ajiye: farashinsa na iya tashi, amma yana iya lalacewa ko farashinsa ya faɗi. Sayen muhimman kayan noma da wuri: yana guje wa tashin farashi, amma yana buƙatar ajiya mai aminci.",
            "Ku raba ajiyarku a hanyoyi fiye da ɗaya. Ku riƙe kuɗin gaggawa da za ku iya samu da sauri. Ku tabbatar kowace SACCO, banki ko cibiyar ƙananan bashi tana da lasisi (a Kenya, SASRA tana jera SACCO masu lasisin karɓar ajiya). Ku yi hankali ƙwarai da duk wani tsari da ke alƙawarin riba mai yawa da sauri: sau da yawa zamba ne. Wannan darasi yana bayanin yadda ajiya take aiki; ba shawarar zuba jari ba ne. Ku tambayi mai ba da shawara da kuka amince da shi game da halin da kuke ciki."
          ],
          steps: ["Ku nemo yawan hauhawar farashi na yanzu daga babban bankinku ko ofishin ƙididdiga.", "Ku jera inda ajiyarku take yanzu: kuɗi a hannu, ƙungiya, SACCO, banki, dabbobi, hatsi.", "Ku rubuta haɗari ɗaya ga kowanne.", "Ku zaɓi haɗakar aƙalla uku, tare da kuɗin gaggawa da za ku iya samu da sauri.", "Ku tabbatar kowace SACCO, banki ko cibiyar ƙananan bashi tana da lasisi.", "Ku ƙi tsare-tsaren da ke alƙawarin riba mai yawa da sauri."],
          words: [["Hauhawar farashi (inflation)", "tashin farashin abubuwa gaba ɗaya, don haka kuɗi ɗaya yana sayen ƙasa da da."], ["Ruwa (interest)", "kuɗin da banki ko SACCO ke biyan ku saboda ajiyarku, ko wanda kuke biya don karɓar bashi."], ["Kuɗin gaggawa", "ajiyar da aka keɓe don matsaloli na ba zato, kamar rashin lafiya ko lalacewar girbi, da za ku iya samu da sauri."], ["VSLA", "ƙungiyar ajiya da bashi ta ƙauye: ƙungiyar da ke ajiya tare, tana ba membobi bashi, kuma tana raba ajiya da riba."]],
          slides: [
            { title: "Hauhawar farashi tana cinye kuɗi", bullets: ["Farashi ya tashi 10%: 10,000 suna sayen abin da kusan 9,100 ke saye yanzu", "Ku nemo yawan: babban banki ko ofishin ƙididdiga"] },
            { title: "Kowace hanyar ajiya tana da haɗari", bullets: ["Kuɗi a hannu: hauhawar farashi da sata", "Ƙungiya, SACCO, banki: rubuce-rubuce, kuɗin caji, ruwa da hauhawar farashi", "Dabbobi da hatsi: cuta, lalacewa, farashi"] },
            { title: "Ku kare ajiyarku", bullets: ["Ku raba a hanyoyi aƙalla uku", "Ku riƙe kuɗin gaggawa da za ku iya samu", "Ku duba lasisi (Kenya: jerin SASRA)", "Riba mai yawa da sauri? Sau da yawa zamba ce"] }
          ],
          sources: [CBK, NBS, BCEAO, SASRA],
          tryIt: "Aikin ƙarshe: ku rubuta shirin haɗarin gonarku na shafi ɗaya: manyan haɗari biyar da matakansu, rajistar farashi ta mako huɗu da yanayinta, shirin sayarwa da ajiya tare da farashin daidaito na ajiya, tambayoyinku don kwangila da inshorar ma'auni, da haɗakar ajiyarku don fuskantar hauhawar farashi.",
          youCanNow: "kare ajiyarku daga hauhawar farashi ta haɗaka mai lasisi da aka raba, da haɗa dukkan kayan aikin sarrafa haɗarinku a shiri ɗaya.",
          quickCheck: [
            { objective: "O6", q: "Farashi ya tashi da 10% a bana. Me ya faru da 10,000 da aka ajiye a gwangwani a gida?", options: ["Suna sayen ƙasa da yadda suke saye bara", "Suna sayen fiye da da", "Sun zama 11,000", "Babu abin da ya canja"], answer: 0, why: "Kuɗi ɗaya yana sayen ƙasa idan farashi ya tashi." },
            { objective: "O6", q: "Wata ƙungiya ta yi alƙawarin ninka ajiyarku a cikin wata uku. Me wannan ya fi nunawa?", options: ["SACCO mai kyau", "Tayin banki na yau da kullum", "Tallafin gwamnati", "Mai yiwuwa zamba ce: riba mai yawa da sauri alamar gargaɗi ce"], answer: 3, why: "Alƙawarin riba mai yawa da sauri sanannen alamar zamba ne." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Mayar da haɗari da kare kuɗinku",
        questions: [
          { objective: "O4", q: "Me kuke rasawa idan kun sa hannu a kwangilar farashi tsayayye?", options: ["Ƙarin kuɗi idan farashin kasuwa ya tashi", "Ƙasarku", "Dukkan sauran amfanin gonarku", "Babu komai"], answer: 0, why: "Farashin tsayayye ne, don haka ba za ku ci riba ba idan kasuwa ta tashi." },
          { objective: "O4", q: "Wace hukuma ce ke ba Nigeria Commodity Exchange lasisi?", options: ["Nigerian Meteorological Agency (hukumar yanayi)", "Securities and Exchange Commission (hukumar kula da hannayen jari)", "NAFDAC", "Central Bank of Kenya"], answer: 1, why: "NCX ta ce Securities and Exchange Commission ce ta ba ta lasisi." },
          { objective: "O5", q: "Me KLIP a Kenya ke amfani da shi don yanke shawarar lokacin biyan makiyaya?", options: ["Ziyarar likitan dabbobi ga kowane garke", "Farashin shanu a kasuwa", "Hotunan tauraron ɗan adam da ke nuna ciyawar kiwo tana lalacewa", "Yawan dabbobin da aka sayar"], answer: 2, why: "KLIP ta ma'auni ce: ma'aunin ciyawar kiwo daga tauraron ɗan adam yana jawo biya." },
          { objective: "O5", q: "Wace tambaya ce ke duba haɗarin rashin daidaito?", options: ["Wane launi takardar inshorar take?", "Yaya saurin wakilin yake?", "Wa kuma ya saya?", "A ina ake auna ma'aunin kuma yaya nisansa da gonata?"], answer: 3, why: "Yayin da wurin aunawa ya yi nisa, ma'aunin na iya bambanta da gonarku." },
          { objective: "O6", q: "Wace hanya ce mai hankali ta kiyaye ajiya?", options: ["Raba ta a asusu masu lasisi, ƙungiya da sauran hanyoyi, tare da kuɗin gaggawa", "Ajiye duk kuɗi a gwangwani ɗaya", "Sa komai a tsarin da ke alƙawarin riba mafi yawa", "Ba baƙo ɗaya bashin duka"], answer: 0, why: "Raba ajiya a wuraren da aka duba yana rage ɓarnar kowace asara ɗaya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Sarrafa Haɗarin Noma: Farashi, Yanayi da Inshora",
    questions: [
      { objective: "O1", q: "Rashin lafiya a iyali da ke hana aikin gona wane irin haɗari ne?", options: ["Haɗarin kasuwa", "Haɗarin dokoki", "Haɗarin mutane", "Haɗarin samarwa"], answer: 2, why: "Haɗarin da ya shafi mutanen da ke gudanar da gona haɗarin mutane ne." },
      { objective: "O1", q: "Yiwuwa 2 da illa 3 suna ba da makin haɗari na:", options: ["6", "5", "1", "9"], answer: 0, why: "2 x 3 = 6." },
      { objective: "O1", q: "Zaɓin rashin shuka tumatir a watan da ya fi ruwa wace hanya ce?", options: ["Raba shi", "Karɓar shi", "Watsi da shi", "Guje masa"], answer: 3, why: "Kuna guje wa haɗarin ta hanyar rashin ɗaukar sa." },
      { objective: "O1", q: "Yaushe ya kamata ku sake duba rajistar haɗarinku?", options: ["Ba taɓa ba", "Kafin kowace damina", "Bayan bala'i kawai", "Kowace shekara goma"], answer: 1, why: "Haɗari yana canjawa, don haka ku duba kafin yanke shawarwarin kowace damina." },
      { objective: "O2", q: "Farashin yawancin abincin yau da kullum yawanci ya fi ƙasa:", options: ["Kafin shuka", "A watannin yunwa", "Nan da nan bayan girbi", "Ba ya taɓa canjawa"], answer: 2, why: "Lokacin girbi manoma da yawa suna sayarwa lokaci ɗaya, wanda ke sa farashi ya faɗi." },
      { objective: "O2", q: "A Najeriya, wace hukuma ce ke wallafa rahoton farashin abinci na kowane wata a kowace jiha?", options: ["National Bureau of Statistics", "Nigerian Meteorological Agency", "NAFDAC", "Securities and Exchange Commission"], answer: 0, why: "NBS tana wallafa Selected Food Prices Watch (rahoton farashin abinci) kowane wata." },
      { objective: "O2", q: "Me canjin farashin koko a Côte d'Ivoire daga 2,800 zuwa 1,200 CFA franc a kowane kg yake nunawa?", options: ["Farashin tsayayye ba ya taɓa canjawa", "Koko ba shi da haɗari", "'Yan kasuwa ne kaɗai ke fuskantar haɗarin farashi", "Ko farashin da gwamnati ta sa yana iya canjawa sosai tsakanin kaka"], answer: 3, why: "An rage farashin gona bayan farashin koko na duniya ya faɗi." },
      { objective: "O2", q: "Mafi kyawun bayanin yanayin farashi shi ne:", options: ["Alƙawarin farashin wata mai zuwa", "Hanyar da farashi yake bi gaba ɗaya a cikin makonni ko watanni", "Tayin mai saye ɗaya", "Farashin gwamnati"], answer: 1, why: "Yanayin farashi jagora ne daga farashin baya, ba alƙawari ba." },
      { objective: "O3", q: "Noma iri-iri yana nufin:", options: ["Noman mafi kyawun amfanin gonarku kawai", "Sayar da komai lokacin girbi", "Raba aikin gona da kuɗin shiga a ayyuka da dama", "Ƙara karɓar bashi"], answer: 2, why: "Ayyuka da dama suna nufin lalacewar ɗaya ba za ta karya ku ba." },
      { objective: "O3", q: "Farashin girbi 4,000 a kowane buhu, buhuna 10, kuɗin ajiya 2,000. Menene farashin daidaito na ajiya?", options: ["4,200", "4,000", "2,000", "6,000"], answer: 0, why: "(4,000 x 10 + 2,000) / 10 = 4,200 a kowane buhu." },
      { objective: "O3", q: "Kafin ku ajiye hatsi don sayarwa daga baya, ya kamata ku fara:", options: ["Ajiye shi danye don ya riƙe nauyinsa", "Haɗa shi da hatsin bara", "Sayar da abin da zai biya buƙatun kuɗinku lokacin girbi, ku ajiye hatsi mai tsabta, busasshe kawai cikin aminci", "Ajiye duka, ko da kuna buƙatar kuɗi yanzu"], answer: 2, why: "Biyan buƙatun kuɗi da ajiye hatsi mai tsabta, busasshe kawai suna hana sayarwa ta tilas da lalacewa." },
      { objective: "O4", q: "Kwangilar gaba (forward contract) ita ce:", options: ["Bashi daga banki", "Yarjejeniya a yanzu ta sayar da wani yawa a wani farashi a gaba", "Takardar inshora", "Asusun ajiya"], answer: 1, why: "Tana tabbatar da yawa da farashi a yau don sayarwa a gaba." },
      { objective: "O4", q: "Wane sharaɗi ne dole kwangilar farashi tsayayye ta ƙunsa?", options: ["Amfanin gonar da mai saye ya fi so", "Launin buhuna kawai", "Yawan iyalinku", "Abin da zai faru idan girbi ya lalace ko mai saye bai zo ɗauka ba"], answer: 3, why: "Waɗannan yanayi ne ke yanke wa zai ɗauki asarar idan abubuwa suka lalace." },
      { objective: "O4", q: "Me yasa hedging da futures ba na masu farawa ba ne?", options: ["Yana buƙatar dillali, ajiyar margin da ƙwarewa, kuma yana iya jawo asara", "Haramun ne a Afirka", "Yana aiki don koko kawai", "Koyaushe yana kawo riba"], answer: 0, why: "Matsayin futures na iya jawo asara kuma yana buƙatar ajiyar kuɗi ba zato ba tsammani." },
      { objective: "O4", q: "Ta yaya yawancin ƙananan manoma ke kaiwa ga kasuwar kayayyaki kamar GCX?", options: ["Ta cinikin futures a wayoyinsu", "Ta ƙungiyar haɗin gwiwa, mai tattara kaya ko rumbun ajiya mai shaida", "Ta ziyartar kasuwar kowace rana", "Ba za su iya amfani da ita ko kaɗan ba"], answer: 1, why: "Ƙungiyoyi da rumbunan ajiya suna kai kayan manoma kasuwar." },
      { objective: "O5", q: "Inshorar ma'auni tana biya idan:", options: ["Kun bayar da rahoton asara", "Wakili ya ziyarci gonarku", "Ma'aunin da aka auna ya wuce iyakar biya", "An biya kuɗin inshora"], answer: 2, why: "Biya yana bin ma'aunin, ba ziyarar gona ba." },
      { objective: "O5", q: "Wa ke biyan kuɗin inshora a KLIP ta Kenya ga makiyaya marasa ƙarfi da aka yi wa rajista?", options: ["Makiyayan da kansu", "Mai sayen dabbobi", "Banki", "Gwamnati"], answer: 3, why: "KLIP shirin gwamnati ne da ke saya musu kariyar inshorar." },
      { objective: "O5", q: "Kafin ku sayi inshorar ma'auni, ya kamata ku tabbatar kamfanin inshorar yana da lasisi. A Najeriya, hukumar da ke kula ita ce:", options: ["NAICOM", "NAFDAC", "NiMet", "NBS"], answer: 0, why: "NAICOM, National Insurance Commission (Hukumar Inshora ta Ƙasa), ce ke kula da kamfanonin inshora a Najeriya." },
      { objective: "O6", q: "A ina za ku sami yawan hauhawar farashi na yanzu?", options: ["Wani ɗan kasuwa a kasuwa", "Babban bankinku ko ofishin ƙididdiga na ƙasa", "Rubutu a kafofin sada zumunta", "Wakilin inshora"], answer: 1, why: "Manyan bankuna da ofisoshin ƙididdiga suna wallafa alƙaluman hauhawar farashi na hukuma." },
      { objective: "O6", q: "Menene haɗarin ajiye kuɗi a matsayin dabbobi?", options: ["Darajar dabbobi ba ta taɓa canjawa", "Bankuna ba za su karɓe su ba", "Suna iya mutuwa saboda fari ko cuta", "Babu haɗari"], answer: 2, why: "Fari da cuta na iya share ajiyar da aka riƙe a dabbobi." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 1, 5, 7, 9, 11, 13, 15, 16, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na shirin ku sake duba shi.",
    criteria: [
      { name: "Rajistar haɗari", objective: "O1", notYet: "Haɗari ƙasa da biyar, ko ba a ba haɗarin maki ba, ko ba su da matakai.", meets: "Aƙalla haɗari takwas da suka shafi dukkan nau'o'i biyar, da maki, a jere, tare da mataki ga kowane cikin manyan biyar.", exceeds: "Matakan suna da ranaku da kuɗaɗe, kuma shirin ya faɗi lokacin da za a sake duba rajistar." },
      { name: "Rajistar farashi da yanayinsa", objective: "O2", notYet: "Ƙasa da mako huɗu, majiya ɗaya kawai, ko an haɗa ma'auni da matsayi daban-daban.", meets: "Mako huɗu daga aƙalla majiyoyi biyu, kaya ɗaya, matsayi ɗaya da ma'auni ɗaya, tare da bayanin yanayin farashi.", exceeds: "Ya haɗa da hidimar hukuma da watanni ɗaya na bara, kuma ya faɗi abin da yanayin yake nufi ga sayarwa." },
      { name: "Shirin sayarwa da ajiya", objective: "O3", notYet: "Babu farashin daidaito na ajiya, ko an manta da buƙatun kuɗi na lokacin girbi.", meets: "Farashin daidaito na ajiya daidai, buƙatun kuɗi sun cika lokacin girbi, kuma an shirya sayarwa a matakai.", exceeds: "Ya kuma ƙara sana'a ko kasuwa ta biyu don raba haɗari, da matakan ajiya mai aminci." },
      { name: "Tambayoyin kwangila da inshora", objective: "O4", notYet: "Sharuɗɗan kwangila ƙasa da biyar, ko babu tambayoyin inshora.", meets: "Aƙalla sharuɗɗan kwangila takwas da riba ɗaya da haɗari ɗaya, da ma'anar hedging a jimla ɗaya.", exceeds: "Ya kwatanta farashin tsayayye da farashin daidaito da rajistar farashi." },
      { name: "Duba inshorar ma'auni", objective: "O5", notYet: "Ma'auni, iyakar biya, kuɗin inshora ko haɗarin rashin daidaito ya ɓace.", meets: "An amsa ma'auni, iyakar biya, biya, kuɗin inshora, ranar ƙarshe, haɗarin rashin daidaito da duba lasisi duka.", exceeds: "Amsoshin sun fito daga tayi na gaske kusa da gonar, tare da sunan hukumar da ke kula." },
      { name: "Ajiya don fuskantar hauhawar farashi", objective: "O6", notYet: "Hanyar ajiya ɗaya kawai, ko ba a ambaci haɗari ba.", meets: "An kwatanta aƙalla hanyoyi uku, kowanne da haɗarinsa, an rubuta yawan hauhawar farashi kuma an duba lasisi.", exceeds: "Ya haɗa da adadin kuɗin gaggawa da ranar sake duba haɗakar." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layi na rubric na shirin haɗarin gona",
      "Masu koyo da har yanzu suke riƙe rajistar farashi ta kowane mako bayan kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce suna sayarwa a matakai ko suna ajiya cikin aminci maimakon sayar da komai lokacin girbi",
      "Masu koyo da suka ce sun karanta kwangila ko tayin inshora sharaɗi bayan sharaɗi, ko suka ƙi mai ba da bashi, kamfanin inshora ko tsarin ciniki marar lasisi",
      "Ƙungiyoyin haɗin gwiwa abokan aiki sun ce an rage membobin da aka tilasta wa sayar da dabbobi ko ƙasa bayan mummunar damina"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Littafin rubutu da alƙalami, da waya mai sauƙi don farashi ta SMS, kira ko rediyo",
      "Na'urar lissafi ta waya (calculator)",
      "Kwangilar mai saye ta gaske ko ta misali da takardar bayanin inshorar ma'auni daga yankin, idan akwai",
      "Kusan minti 80 gaba ɗaya, a gajerun zama, tare da mako huɗu na rubuta farashi don aikin ƙarshe"
    ],
    facilitatorNotes: [
      "A ƙungiyar manoma ko zaman faɗakarwa: ku yi gwajin farko tare, sannan babi ɗaya a kowane zama; ku fara yin rajistar haɗari a ƙananan ƙungiyoyi.",
      "Ku nemi masu koyo su fara rajistar farashi bayan Darasi na 2 don su sami mako huɗu don aikin ƙarshe; ku tattara farashi a matsayin ƙungiya ku raba su.",
      "Ku gayyaci kamfanin inshora mai lasisi, ƙungiyar haɗin gwiwa ko mai rumbun ajiya don ya bayyana wani kaya na gaske, amma kada ku goyi bayan kowane kamfani; ku bar masu koyo su yi tambayoyin darasin.",
      "Kada ku ba da shawarar yin ciniki a kowace kasuwar kayayyaki ko sayen kowane kayan kuɗi; ku faɗa a sarari cewa kwas ɗin yana bayanin yadda abubuwa suke aiki da haɗarinsu.",
      "Ku ba da maki ga shirin haɗari da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

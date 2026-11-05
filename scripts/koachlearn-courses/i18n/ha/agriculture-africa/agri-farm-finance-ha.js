"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-farm-finance.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const VSLA = { name: "VSL Associates: tsarin VSLA (hannun jari, asusun bashi, asusun taimako, zagaye na shekara ɗaya, rabon kuɗi)", url: "https://www.vsla.net/the-vsla-methodology/" };
const SASRA = { name: "SASRA, Kenya: jerin SACCO masu karɓar ajiya da ke da lasisi", url: "https://www.sasra.go.ke/licensed-dt-saccos/" };
const BCEAO_SFD = { name: "BCEAO: dokokin cibiyoyin ƙananan bashi (systemes financiers decentralises) a ƙasashen XOF", url: "https://www.bceao.int/fr/reglementations/reglementation-des-systemes-financiers-decentralises" };
const CBN_MFB = { name: "Babban Bankin Najeriya (CBN): bankunan ƙananan bashi (microfinance banks)", url: "https://www.cbn.gov.ng/Supervision/Inst-MF.html" };
const NIRSAL = { name: "NIRSAL Plc, Najeriya: bayani gaba ɗaya (lamunin tabbatar da bashin noma ga masu ba da bashi)", url: "https://nirsal.com/who-we-are/overview/" };
const GIRSAL = { name: "Graphic Online, Ghana: GIRSAL ta karrama cibiyoyin kuɗi kan ba da bashin noma", url: "https://www.graphic.com.gh/news/general-news/increasing-lending-support-for-agriculture-sector-girsal-honours-11-financial-institutions-individuals.html" };
const WRSC = { name: "Warehouse Receipt System Council, Kenya (rumbunan ajiya masu takardar shaida da takardun rumbu)", url: "https://www.wrsc.go.ke" };
const GCX_EWR = { name: "MyJoyOnline (31 Oktoba 2019): GCX da ARB Apex Bank sun ƙaddamar da bashi kan takardar rumbu ta intanet", url: "https://www.myjoyonline.com/gcx-arb-apex-bank-launch-gha%C2%A250m-support-for-ghanaian-smallholder-farmers/" };
const GCX_ADEHYEMAN = { name: "Ghana News Agency (Yuni 2023): Adehyeman Savings and Loans da Ghana Commodity Exchange sun haɗa kai don taimakon manoma", url: "https://gna.org.gh/2023/06/adehyeman-ghana-commodity-exchange-partner-to-support-farmers/" };
const OAF = { name: "One Acre Fund: game da mu (bashi, kayan gona da horo; ƙasashe)", url: "https://oneacrefund.org/about-us" };
const ENABLE = { name: "IITA: Sudan ta ƙaddamar da shirin ENABLE Youth (shirin Bankin Raya Afirka na matasan 'yan kasuwar noma)", url: "https://iita.org/news-item/sudan-launches-enable-youth-program/" };
const YEDF = { name: "Youth Enterprise Development Fund, Kenya (bashi ga kasuwancin matasa, har da bashin Agri-Biz)", url: "https://www.youthfund.go.ke" };
const DERFJ = { name: "DER/FJ, Senegal: Delegation generale a l'Entrepreneuriat rapide des Femmes et des Jeunes (hukumar kasuwancin mata da matasa)", url: "https://der.sn" };
const FCCPC = { name: "FCCPC, Najeriya: matsayin rajistar masu ba da bashi ta intanet (manhajojin bashi da aka amince da su)", url: "https://fccpc.gov.ng/registration-status-for-digital-money-lenders-apps/" };
const CBK_DCP = { name: "Babban Bankin Kenya (CBK): kula da bankuna, har da jerin masu ba da bashi ta intanet da ke da lasisi", url: "https://www.centralbank.go.ke/bank-supervision/" };

module.exports = {
  id: "agri-farm-finance-ha",
  lang: "ha",
  translationOf: "agri-farm-finance",
  category: "Agriculture (Africa)",
  name: "Samun Kuɗin Gona: Bashi, Tallafi da Masu Zuba Jari",
  skills: "Lissafin kuɗin da kuke buƙata, Amfani da ƙungiyoyin ajiya, VSLA da SACCO, Kwatanta bashin gona da tsarin biya, Amfani da takardar rumbu da bashin kayan gona, Neman tallafi na gaske da guje wa zamba, Rubuta takardar neman kuɗi mai shafi ɗaya",
  outcome: "lissafa ainihin kuɗin da gonarku ke buƙata da lokacin da ake buƙatarsa, kwatanta ƙungiyoyin ajiya, SACCO, bashi, takardar rumbu, bashin kayan gona da tallafi, gane zambar bashi ko tallafi, da rubuta takardar neman kuɗi mai shafi ɗaya da mai ba da bashi, shiri ko mai zuba jari zai iya amincewa da ita.",
  about: [
    "Wannan kwas na manoma ƙanana ne da manoman kasuwanci masu girma, matasan 'yan kasuwar noma, ƙungiyoyin mata da matasa, shugabannin ƙungiyoyin haɗin gwiwa (cooperative) da jami'an faɗakarwar noma a Kenya, Najeriya, Ghana, Senegal, Cote d'Ivoire da sauran Afirka, waɗanda ke buƙatar kuɗi don fara aiki, ci gaba ko faɗaɗa gonarsu.",
    "Babi na 1 yana magana kan kuɗin da ke kusa da ku: lissafin kuɗin da kuke buƙata da abin da za a yi da shi, ƙungiyoyin ajiya, VSLA da SACCO, da bashin noma daga bankunan ƙananan bashi da bankuna. Babi na 2 yana magana kan wasu ƙofofi: bashi kan takardar rumbu da bashin kayan gona daga masu saye da shirye-shiryen kwangila, tallafi da shirye-shiryen matasa da yadda ake guje wa zamba, da rubuta takardar neman kuɗi mai shafi ɗaya. Yana ginuwa kan kwas ɗin \"Agribusiness and Farm Management\" (Kasuwancin Noma da Sarrafa Gona), wanda ke nuna yadda ake lissafin cikakken kuɗin bashi.",
    "Duk lambobin kuɗi misalai ne na ƙirƙira; kuɗin ruwa, kuɗaɗen caji da shirye-shirye suna canjawa, don haka ku duba tayin na yanzu. Wannan kwas yana bayanin yadda kowane irin kuɗi ke aiki da haɗarinsa. Ba ya ba da shawarar bashi ko ta zuba jari. Ku ci bashi daidai abin da tsarinku ke buƙata kawai, ku karanta kowace yarjejeniya gaba ɗaya, ku tabbatar mai ba da bashin yana da lasisi, kuma ku tambayi mai ba da shawara da kuka amince da shi kamar ƙungiyar haɗin gwiwarku, SACCO, jami'in faɗakarwar noma ko lauya kafin ku sa hannu."
  ],
  finalTask: "Ku rubuta takardar neman kuɗi mai shafi ɗaya don gonarku (ko gonar misali): ko ku su wane ne da gonarku; ainihin abin da kuɗin zai yi, jimlar kuɗin, nawa za ku saka da kanku da gibin da kuke nema; yadda kuɗin zai samar da kuɗi (kuɗin kowane ɗaya, riba ko lokacin dawowar kuɗi); irin kuɗin da kuke nema da dalilin da ya dace; tsarin biya da ya dace da lokacin da kuɗinku ke shigowa; jinginarku ko lamuni; manyan haɗarinku da yadda kuke sarrafa su; da bayananku ko tarihin aikinku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manoma ƙanana da manoman kasuwanci masu girma, matasan 'yan kasuwar noma, ƙungiyoyin mata da matasa, shugabannin ƙungiyoyin haɗin gwiwa da jami'an faɗakarwar noma a Kenya, Najeriya, Ghana da Yammacin Afirka masu magana da Faransanci, waɗanda ke noma ko kiwon dabbobi da kifi, kuma suke son kuɗi don fara aiki, faɗaɗawa ko wuce damina.",
    startingPoint: "Da yawa sun ci bashi daga iyali, chama ko ƙungiyar ajiya, shago ko manhajar bashi ta waya. Kaɗan ne suka shirya kasafin kuɗi a rubuce don bashi, suka kwatanta tayi bisa cikakken kuɗi da ranakun biya, suka yi amfani da takardar rumbu, ko suka duba ko mai ba da bashi ko wani shiri na gaske ne. Wasu sun gamu da tayin tallafi da bashi na bogi.",
    gap: "Sau da yawa manoma suna cin bashin da bai dace ba a adadi, a lokaci da kuma daga wanda bai dace ba, inda biya ke faɗuwa kafin girbi, ko kuma suna rasa kuɗi ga tallafin bogi da manhajojin bashi marasa lasisi. Sanin ainihin gibin kuɗinsu da zaɓuɓɓukan da suka dace yana taimaka musu su ci ƙaramin bashi mai kyau, su yi amfani da ajiyar ƙungiya da bashin da ake biya a girbi, kuma su gabatar da buƙata a sarari da masu ba da bashi da shirye-shirye za su ɗauka da muhimmanci.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kowace kalmar kuɗi",
      "Na'urori: waya mai sauƙi da na'urar lissafi; littafin rubutu don kasafin kuɗi da takardar neman kuɗi",
      "Lokaci: darussa na minti 5 zuwa 6 da suka dace da aikin gona",
      "Kuɗin ruwa, kuɗaɗen caji da shirye-shirye suna canjawa kuma sun bambanta tsakanin ƙasashe: ba a ba da kuɗin ruwa ko wa'adi ba; masu koyo suna duba tayin na yanzu da hukumar kula",
      "Babu shawarar bashi ko ta zuba jari; kada ku taɓa rubuta PIN, kalmomin sirri ko bayanan banki a manhajoji ko kayan AI don atisaye"
    ],
    prerequisites: "Babu. Kwas ɗin \"Agribusiness and Farm Management\" (bayanai, shigowa da fitar kuɗi, kuɗin bashi) da \"Lissafin Kuɗin Gona da Sarrafa Jari\" (kuɗin kowane ɗaya, lokacin dawowar kuɗi) suna taimakawa da lissafi."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku tsarin gona tare da kuɗaɗensa", action: "lissafa jimlar kuɗin da ake buƙata, gudummawarku da gibin kuɗi, a raba su zuwa jarin aiki da kayan aiki, tare da watan da ake buƙatar kowanne", standard: "da lissafi daidai, ba tare da haɗa kuɗin gida ba" },
    { id: "O2", condition: "Idan akwai ƙungiyar ajiya, VSLA ko SACCO da za ku iya shiga", action: "bayyana yadda ajiya, bashi, lamuni da rabon kuɗi ke aiki a cikinta, da jera haɗarinta", standard: "kuna ambaton aƙalla dokoki uku da za ku duba kafin ku shiga" },
    { id: "O3", condition: "Idan aka ba ku tayin bashi biyu", action: "kwatanta cikakken kuɗinsu, jingina da ranakun biya, da zaɓar wanda ya dace da girbinku", standard: "tare da lissafin jimlar biyan kowanne, da duba watannin biya da tsarin kuɗinku" },
    { id: "O4", condition: "Idan aka ba ku tayin takardar rumbu ko bashin kayan gona", action: "jera kuɗaɗensa, abin da dole ku yi, da abin da zai faru idan farashi ko girbi ya faɗi", standard: "kuna ambaton aƙalla sharuɗɗa huɗu da haɗari biyu" },
    { id: "O5", condition: "Idan aka ba ku tayin tallafi, shirin matasa ko bashi", action: "duba shi a shafin intanet na hukuma ko jerin hukumar kula, da gane alamun gargaɗin zamba", standard: "kafin ku biya, ku ba da bayanai ko ku nema" },
    { id: "O6", condition: "Ta amfani da lambobin gonarku", action: "rubuta takardar neman kuɗi mai shafi ɗaya da mai ba da bashi, shiri ko mai zuba jari zai iya tantancewa", standard: "da ke ɗauke da manufa, adadi, gudummawarku, yadda zai samar da kuɗi, biya, jingina da haɗari" }
  ],
  chapters: [
    {
      name: "Babi na 1: Buƙatarku da kuɗin da ke kusa da ku",
      lessons: [
        {
          title: "Kuɗi nawa kuke buƙata, kuma don me",
          objectives: ["O1"],
          minutes: 5,
          goal: "Lissafa jimlar kuɗin da kuke buƙata, gudummawarku da gibin kuɗi, wata-wata.",
          text: [
            "Kafin ku nemi kuɗi, ku rubuta ainihin abin da zai yi. Jarin aiki (working capital) yana biyan zagaye ɗaya na samarwa: iri, taki, abincin dabbobi, 'yan tsaki ko 'ya'yan kifi, kuɗin ma'aikata, aikin likitan dabbobi da sufuri. Yana dawowa idan kun sayar. Kayan aiki da gine-gine (famfo, turke, rumbu) suna daɗewa shekaru da yawa kuma suna dawo da kuɗi a hankali. Masu ba da bashi sau da yawa suna ɗaukar su daban, da tsawon bashi daban, don haka ku jera su daban.",
            "Misali (lambobin ƙirƙira a naira), kajin nama (broiler) a Najeriya: 'yan tsaki, abinci, aikin likitan dabbobi da ma'aikata 1,200,000 (jarin aiki); kwanonin ruwa, kwanonin abinci da gyaran gidan kaji 300,000 (kayan aiki). Jimla 1,500,000. Kun ajiye 500,000. Gibin kuɗi = 1,500,000 - 500,000 = 1,000,000. Wannan gibin, ba jimlar ba, shi ne abin da za ku nema.",
            "Sannan ku saka kowane kuɗi a watan da ake buƙatarsa, ta amfani da tsarin shigowa da fitar kuɗinku, don ku nemi kuɗi lokacin da kuke buƙatarsa, kuma kada ku biya kuɗin ruwa kan kuɗin da ke zaune banza. Ku ajiye ɗan rarar kuɗi don hauhawar farashi. Kada ku haɗa kuɗin gida kamar kuɗin makaranta: ku ci bashi don gona daidai abin da gonar za ta iya biya kawai."
          ],
          steps: ["Ku jera kowane kuɗi a tsarinku.", "Ku yi wa kowanne alama: jarin aiki ko kayan aiki.", "Ku tara su don samun jimlar buƙata.", "Ku cire kuɗin da za ku saka da kanku.", "Abin da ya rage shi ne gibin kuɗinku.", "Ku saka kowane kuɗi a watan da ake buƙatarsa, ku ƙara ɗan rarar kuɗi."],
          words: [["Jarin aiki (working capital)", "kuɗin da ke biyan zagaye ɗaya na samarwa kuma yana dawowa idan kun sayar."], ["Gibin kuɗi (funding gap)", "kuɗin da har yanzu kuke buƙata bayan gudummawarku: jimlar buƙata - kuɗinku."], ["Gudummawarku (own contribution)", "kuɗi ko kayan da kuke saka wa tsarin da kanku."]],
          slides: [
            { title: "Iri biyu na buƙata", bullets: ["Jarin aiki: zagaye ɗaya, yana dawowa a sayarwa", "Kayan aiki da gine-gine: suna daɗewa shekaru, suna dawowa a hankali", "Ku jera su daban"] },
            { title: "Misalin kajin nama (NGN, na ƙirƙira)", bullets: ["Jarin aiki 1,200,000 + kayan aiki 300,000 = 1,500,000", "Kuɗinku 500,000", "Gibin kuɗi 1,000,000: wannan za ku nema"] },
            { title: "Lokaci da horo kan kuɗi", bullets: ["Ku saka kowane kuɗi a watansa", "Ɗan rarar kuɗi don hauhawar farashi", "Babu kuɗin gida a bashin gona"] }
          ],
          tryIt: "Don tsari ɗaya a gonarku, ku jera kowane kuɗi, ku yi masa alama jarin aiki ko kayan aiki, ku tara jimlar, ku cire kuɗinku, sannan ku rubuta gibin kuɗi da watan da ake buƙatar kowane sashe.",
          youCanNow: "lissafa ainihin kuɗin da tsarin gonarku ke buƙata, don me da yaushe, da gibin da kuke buƙatar a cike.",
          quickCheck: [
            { objective: "O1", q: "Tsari yana cin 800,000 kuma kuna da 300,000 na kanku. Nawa ne gibin kuɗi?", options: ["1,100,000", "800,000", "500,000", "300,000"], answer: 2, why: "800,000 - 300,000 = 500,000." },
            { objective: "O1", q: "Wanne ne jarin aiki don tafkin kifi?", options: ["'Ya'yan kifi da abinci na zagaye ɗaya", "Haƙa tafkin", "Famfon ruwa", "Shinge"], answer: 0, why: "Ana amfani da 'ya'yan kifi da abinci a zagaye ɗaya, kuma kuɗin yana dawowa idan an sayar da kifin." }
          ]
        },
        {
          title: "Ƙungiyoyin ajiya, VSLA da SACCO",
          objectives: ["O2"],
          minutes: 6,
          goal: "Bayyana yadda VSLA da SACCO ke aiki, da jera dokokin da za a duba kafin a shiga.",
          text: [
            "Ƙungiyar ajiya da bashi ta ƙauye (VSLA) ƙungiya ce, sau da yawa ta mambobi 10 zuwa 25, da ke haɗuwa kowane mako. A kowane taro mambobi suna sayen hannun jari 1 zuwa 5 a farashin da ƙungiyar ta ƙayyade na shekarar. Ajiya tana shiga asusun bashi. Yawanci mambobi za su iya cin bashi har ninki uku na ajiyarsu na tsawon har watanni uku, suna biyan kuɗin hidima da ƙungiyar ta ƙayyade. Ƙungiyoyi da yawa kuma suna ajiye ƙaramin asusun taimako don gaggawa. Bayan kusan shekara ɗaya, ana biya duk bashi, kuma ana raba kuɗin, har da kuɗin hidima, gwargwadon ajiyar kowane mamba.",
            "SACCO (ƙungiyar haɗin gwiwa ta ajiya da bashi; a Yammacin Afirka masu Faransanci, mutuelle ko caisse) ƙungiyar kuɗi ce mallakar mambobi, sau da yawa mafi girma da tsari. Kuna ajiye kuɗi akai-akai, kuma bashi sau da yawa yana da alaƙa da yawan ajiyarku, kuma yana buƙatar masu lamuni (guarantors): mambobi da suka yi alƙawarin biya idan ba ku biya ba. A Kenya, SASRA tana ba da lasisi ga SACCO masu karɓar ajiya kuma tana fitar da jerinsu. A ƙasashen kuɗin CFA, cibiyoyin ƙananan bashi da ƙungiyoyin bashi suna bin dokokin BCEAO.",
            "Kafin ku shiga, ku duba: kundin tsarin mulki ko dokokin a rubuce, farashin hannun jari ko adadin ajiya, dokokin bashi da kuɗaɗen caji, yadda ake kiyaye kuɗi (akwatin kuɗi mai makullai ko asusu mai lasisi), yadda ake ajiye bayanai da karanta su a fili, da ma'anar zama mai lamuni. Idan kun yi lamunin bashin aboki kuma bai biya ba, kuna iya biya."
          ],
          steps: ["Ku nemi ganin dokokin ƙungiyar a rubuce.", "Ku duba farashin hannun jari ko adadin ajiya da ranakun taro.", "Ku duba girman bashi, tsawonsa da kuɗin hidima.", "Ku duba yadda ake kiyaye kuɗi da bayanai.", "Ku tambayi ma'anar zama mai lamuni a gare ku.", "Don SACCO, ku tabbatar an yi mata rajista ko tana da lasisi."],
          words: [["VSLA", "ƙungiyar ajiya da bashi ta ƙauye: ƙungiya da ke ajiye kuɗi kowane mako, tana ba mambobi bashi, kuma tana raba kuɗi a ƙarshen zagaye."], ["Rabon kuɗi (share-out)", "ranar da ƙungiyar ke biyan dukkan ajiya da riba ga mambobi gwargwadon ajiyarsu."], ["SACCO", "ƙungiyar haɗin gwiwa ta ajiya da bashi: ƙungiya mallakar mambobi da ke karɓar ajiya kuma tana ba da bashi."], ["Mai lamuni (guarantor)", "mutumin da ya yi alƙawarin biyan bashi idan wanda ya ci bashin bai biya ba."]],
          slides: [
            { title: "VSLA: yadda take aiki", bullets: ["Mambobi 10-25 suna haɗuwa kowane mako; suna sayen hannun jari 1-5", "Bashi har ninki 3 na ajiya na tsawon har watanni 3", "Rabon kuɗi bayan kusan shekara ɗaya"] },
            { title: "SACCO", bullets: ["Ƙungiyar haɗin gwiwa ta ajiya da bashi mallakar mambobi", "Bashi yana da alaƙa da ajiya; masu lamuni", "Kenya: ku duba jerin SASRA na masu lasisi"] },
            { title: "Ku duba kafin ku shiga", bullets: ["Dokoki a rubuce; adadin ajiya", "Girman bashi, tsawonsa, kuɗin hidima", "Kiyaye kuɗi da bayanai; ayyukan mai lamuni"] }
          ],
          sources: [VSLA, SASRA, BCEAO_SFD],
          tryIt: "Ku tambayi ƙungiyar ajiya, VSLA ko SACCO kusa da ku (ko ku yi amfani da misalin) dokokinta. Ku rubuta adadin ajiya, girman bashi, tsawon bashi, kuɗin hidima, yadda ake kiyaye kuɗi, da abin da dole mai lamuni ya yi.",
          youCanNow: "bayyana yadda ƙungiyoyin ajiya, VSLA da SACCO ke aiki, da duba dokokinsu kafin ku shiga ko ku yi lamunin bashi.",
          quickCheck: [
            { objective: "O2", q: "A VSLA, yaya ake raba kuɗi a ƙarshen zagaye?", options: ["Daidai wa daida, ko nawa kowa ya ajiye", "Ga shugaba", "Ga wanda ya fi cin bashi", "Gwargwadon ajiyar kowane mamba"], answer: 3, why: "Mambobin da suka sayi hannun jari mafi yawa suna samun kaso mafi girma na jimlar." },
            { objective: "O2", q: "Kun yi lamunin bashin SACCO na aboki kuma ya daina biya. Me zai iya faruwa?", options: ["Babu komai; lamuni al'ada ce kawai", "Kuna iya biyan wani sashe ko duka", "SACCO za ta soke bashin", "Iyalin abokinku za su biya kai tsaye"], answer: 1, why: "Mai lamuni ya yi alƙawarin biya idan wanda ya ci bashin bai biya ba." }
          ]
        },
        {
          title: "Bashin noma daga bankunan ƙananan bashi da bankuna",
          objectives: ["O3"],
          minutes: 6,
          goal: "Kwatanta tayin bashi biyu bisa cikakken kuɗi, jingina da yadda biyan ya dace da girbinku.",
          text: [
            "Bankuna da cibiyoyin ƙananan bashi (microfinance) suna ba da ƙananan bashi, sau da yawa ga ƙungiyoyi; bankunan kasuwanci da na noma suna ba da manyan bashi, sau da yawa da jingina mafi yawa. Ku tambaya ko kuɗin ruwa na wata ne ko na shekara, kuma ko na faɗi ɗaya (flat) ne ko na ragowar bashi (reducing balance). Kuɗin ruwa na faɗi ɗaya yana cajin ruwa kan dukkan adadin a tsawon bashin; na ragowar bashi yana caji ne kawai kan abin da har yanzu kuke bi, don haka lamba ɗaya tana cin ƙasa. Ku ƙara kowane kuɗin caji da na inshora don samun jimlar abin da za ku biya.",
            "Jingina (collateral) ita ce abin da mai ba da bashi zai iya ɗauka idan ba ku biya ba: takardar mallakar ƙasa, abin hawa, kayan aiki, ajiya da mai ba da bashin ke riƙe, lamunin ƙungiya, ko takardar rumbu. Wasu gwamnatoci suna tallafa wa masu ba da bashi da lamunin bashi (credit guarantee), kamar NIRSAL a Najeriya (har kashi 75% na kariya ga masu ba da bashi) da GIRSAL a Ghana. Waɗannan suna kare mai ba da bashi kuma suna iya sa bankuna su fi son ba manoma bashi, amma har yanzu kuna bin dukkan bashin.",
            "Ku daidaita biya da girbinku. Misali (lambobin ƙirƙira a shilin Kenya), cin bashin 100,000 don damina ta masara: Tayi A shi ne 10,000 kowane wata na watanni 12 daga wata mai zuwa, jimla 120,000. Tayi B shi ne biya ɗaya na 112,000 a wata na 6, bayan girbi. B yana cin ƙasa kuma ana biya lokacin da kuɗinku ke shigowa; A yana neman biya kafin ku sayar da komai. Ku nemi lokacin jinkiri (grace period) ko biya a lokacin girbi, kuma ku tabbatar babban banki ya ba mai ba da bashin lasisi."
          ],
          steps: ["Ku tambaya: kuɗin ruwa na wata ne ko na shekara? Na faɗi ɗaya ne ko na ragowar bashi?", "Ku tara kuɗin ruwa, kuɗaɗen caji da inshora don samun jimlar biya.", "Ku tambayi irin jingina ko lamunin da ake buƙata.", "Ku saka ranakun biya a tsarin shigowa da fitar kuɗinku.", "Ku nemi lokacin jinkiri ko biya a lokacin girbi idan ana buƙata.", "Ku tabbatar mai ba da bashin yana da lasisi; ku karanta yarjejeniyar gaba ɗaya."],
          words: [["Kuɗin ruwa na faɗi ɗaya (flat rate)", "kuɗin ruwa da ake caji kan dukkan adadin da aka ci bashi a tsawon bashin, ko da kuna biya."], ["Ragowar bashi (reducing balance)", "kuɗin ruwa da ake caji kan adadin da har yanzu kuke bi kawai."], ["Jingina (collateral)", "wani abu da mai ba da bashi zai iya ɗauka idan ba ku biya ba."], ["Lokacin jinkiri (grace period)", "lokaci a farkon bashi da ba dole ku biya ba."], ["Lamunin bashi (credit guarantee)", "alƙawarin wani ɓangare na uku na rufe wani sashe na asarar mai ba da bashi idan wanda ya ci bashi bai biya ba."]],
          slides: [
            { title: "Ku san kuɗin ruwa", bullets: ["Na wata ne ko na shekara?", "Faɗi ɗaya: ruwa kan dukkan adadin a koyaushe", "Ragowar bashi: kan abin da har yanzu kuke bi kawai"] },
            { title: "Jingina da lamuni", bullets: ["Takardar ƙasa, kayan aiki, ajiya, lamunin ƙungiya", "NIRSAL (Najeriya), GIRSAL (Ghana) suna tallafa wa masu ba da bashi", "Har yanzu kuna bin dukkan bashin"] },
            { title: "Ku daidaita biya da girbi (misali KES)", bullets: ["A: 10,000 x 12 daga wata mai zuwa = 120,000", "B: 112,000 sau ɗaya a wata na 6, bayan girbi", "B yana cin ƙasa kuma ya dace da lokacin shigowar kuɗi"] }
          ],
          sources: [CBN_MFB, NIRSAL, GIRSAL],
          tryIt: "Ku ɗauki tayin bashi biyu na gaske ko na misali. Don kowanne, ku rubuta adadi, kuɗin ruwa (na wata ko na shekara, faɗi ɗaya ko ragowar bashi), kuɗaɗen caji, jimlar biya, jingina da watannin biya. Ku yi alamar watannin biya a tsarin kuɗinku, ku zaɓi wanda ya fi dacewa.",
          youCanNow: "kwatanta tayin bashi bisa cikakken kuɗi, jingina da lokacin biya, da zaɓar wanda ya dace da girbinku.",
          quickCheck: [
            { objective: "O3", q: "Bashi biyu suna nuna lamba ɗaya, 2% a wata. Ɗaya na faɗi ɗaya ne, ɗaya na ragowar bashi. Wanne yawanci yake cin ƙasa?", options: ["Bashin faɗi ɗaya", "Koyaushe kuɗinsu ɗaya ne", "Bashin ragowar bashi", "Ya danganta da launin fom ɗin"], answer: 2, why: "Ragowar bashi yana caji ne kawai kan abin da har yanzu kuke bi, don haka jimlar ruwa ta fi ƙasa." },
            { objective: "O3", q: "Ana sayar da masararku a wata na 6. Wane tsarin biya ne ya fi dacewa?", options: ["Biya kowane mako daga mako na 1", "Biya kowane wata daga wata mai zuwa", "Biya kowace rana", "Lokacin jinkiri tare da biya bayan girbi"], answer: 3, why: "Biya lokacin da kuɗin girbinku ke shigowa yana hana rashin biya da sayarwa ta tilas." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Buƙatarku da kuɗin da ke kusa da ku",
        questions: [
          { objective: "O1", q: "Me yasa za a jera jarin aiki da kayan aiki daban?", options: ["Masu ba da bashi na iya ɗaukar su daban domin suna dawo da kuɗi a lokuta daban", "Yana sa jerin ya yi tsawo", "Kayan aiki ba sa taɓa buƙatar kuɗi", "Babu dalili"], answer: 0, why: "Jarin aiki yana dawowa a zagaye ɗaya; kayan aiki suna dawo da kuɗi a cikin shekaru." },
          { objective: "O1", q: "Ya kamata ku ƙara kuɗin makaranta a takardar neman bashin gona?", options: ["Eh, koyaushe", "Eh, idan mai ba da bashi bai tambaya ba", "A'a, ku ci bashi don gona daidai abin da gonar za ta iya biya kawai", "A lokacin rani kawai"], answer: 2, why: "Kuɗin gida ba ya samar da kuɗi, don haka yana sa bashin gona ya fi wuyar biya." },
          { objective: "O2", q: "A VSLA ta yau da kullum, nawa ne mamba yawanci zai iya ci bashi?", options: ["Kowane adadi", "Har kusan ninki uku na ajiyarsa", "Ajiyarsa kawai", "Ninki goma na ajiyarsa"], answer: 1, why: "Bashin VSLA yawanci ana iyakance shi zuwa kusan ninki uku na ajiyar mamba." },
          { objective: "O2", q: "Wace hukuma ce a Kenya ke ba da lasisi ga SACCO masu karɓar ajiya?", options: ["KALRO", "KAMIS", "Hukumar Yanayi ta Kenya (Kenya Meteorological Department)", "SASRA"], answer: 3, why: "SASRA tana ba da lasisi, tana kula da SACCO masu karɓar ajiya, kuma tana jera su." },
          { objective: "O3", q: "Kun ci bashin 50,000, kuna biyan 5,000 kowane wata na watanni 12, da kuɗin caji 2,000. Nawa ne cikakken kuɗin bashin?", options: ["12,000", "60,000", "10,000", "2,000"], answer: 0, why: "Kuna biyan 60,000 + 2,000 = 62,000, wato 12,000 fiye da abin da kuka ci bashi." }
        ]
      }
    },
    {
      name: "Babi na 2: Wasu ƙofofin kuɗi, da yadda ake nema",
      lessons: [
        {
          title: "Takardar rumbu da bashin kayan gona",
          objectives: ["O4"],
          minutes: 6,
          goal: "Jera kuɗaɗe, ayyuka da haɗarin bashi kan takardar rumbu da tayin bashin kayan gona.",
          text: [
            "Bashi kan takardar rumbu (warehouse receipt): kuna kai amfanin gona mai tsabta, busasshe, da aka tantance matakinsa zuwa rumbun ajiya mai takardar shaida. Ana auna shi a gwada shi, kuma kuna samun takarda da ke tabbatar kun mallaki wannan adadi da inganci. Bankin abokin hulɗa zai iya ba da bashi kan takardar, don ku sami kuɗi yanzu ku sayar daga baya lokacin da farashi zai iya fi kyau; ana biyan bashin daga sayarwar. A Kenya, Warehouse Receipt System Council tana ba rumbunan ajiya takardar shaida. A Ghana, Ghana Commodity Exchange da ARB Apex Bank sun ƙaddamar da bashi kan takardar rumbu ta intanet a 2019, kuma a 2023 wani kamfanin ajiya da bashi ya shiga don ba da bashi kan amfanin gona da manoma ke biya bayan sun sayar. Ku tambayi mai ba da bashi kaso nawa na darajar amfanin gonar zai bayar a bashi, kuma na tsawon wane lokaci.",
            "Kuɗaɗe da haɗari: kuɗin ajiya da na sarrafawa, inshora, kuɗin ruwa da sufuri. Idan farashi ya faɗi maimakon ya tashi, sayarwar ba za ta iya rufe bashin da kuɗaɗen caji ba. Dole amfanin gona ya kai matakin da ake buƙata, don haka rashin busarwa ko tantancewa mai kyau yana rage darajarsa. Ku lissafa farashin da kuke buƙata da hanyar daidaiton ajiya (storage break-even) daga kwas ɗin sarrafa haɗari.",
            "Bashin kayan gona (input credit): mai saye, mai sarrafa amfanin gona, shirin manoman kwangila ko wata ƙungiya tana ba da iri, taki ko 'yan tsaki bashi, sau da yawa tare da horo, kuma kuna biya kaɗan-kaɗan ko a cire kuɗin daga biyan girbinku. One Acre Fund tana aiki haka da manoma a Kenya, Najeriya da wasu ƙasashe. Ku duba: farashin kayan idan aka kwatanta da farashin kuɗi hannu, duk kuɗaɗen caji, nawa ake cirewa a girbi, ko dole ku sayar musu kaɗai, abin da zai faru idan girbi ya lalace, da hukuncin sayar wa wani daban (side-selling)."
          ],
          steps: ["Takardar rumbu: ku nemi rumbun ajiya mai takardar shaida da masu ba da bashi abokan hulɗarsa.", "Ku tambayi kuɗin ajiya, sarrafawa, inshora da na bashi.", "Ku tambayi nawa za ku iya ci bashi kan amfanin gonar da na tsawon wane lokaci.", "Ku lissafa farashin sayarwa da kuke buƙata don biyan komai.", "Bashin kayan gona: ku kwatanta farashin kayan da farashin kuɗi hannu, ku jera kowane kuɗin caji.", "Ku tambayi abin da zai faru idan girbi ya lalace, da ko dole ku sayar musu kaɗai."],
          words: [["Takardar rumbu (warehouse receipt)", "takarda daga rumbun ajiya mai takardar shaida da ke tabbatar kun mallaki amfanin gona da aka ajiye na wani adadi da inganci."], ["Rumbun ajiya mai takardar shaida", "rumbu da aka duba aka amince da shi don ajiye amfanin gona lafiya da ba da takardun rumbu."], ["Bashin kayan gona (input credit)", "iri, taki ko wasu kayan gona da ake bayarwa yanzu a biya daga baya, sau da yawa daga girbi."], ["Shirin manoman kwangila (outgrower scheme)", "tsari inda kamfani ke ba manoma kayan gona da shawarwari, kuma yana sayen amfanin gonarsu."]],
          slides: [
            { title: "Bashi kan takardar rumbu", bullets: ["Ku kai amfanin gona da aka tantance; ku karɓi takarda", "Ku ci bashi kan ta; ku sayar daga baya", "Kenya: WRS Council; Ghana: rumbunan GCX"] },
            { title: "Kuɗaɗe da haɗari", bullets: ["Ajiya, sarrafawa, inshora, kuɗin ruwa", "Farashi zai iya faɗi maimakon ya tashi", "Dole amfanin gona ya kai matakin da ake buƙata"] },
            { title: "Bashin kayan gona", bullets: ["Kaya yanzu, a biya kaɗan-kaɗan ko a girbi", "Masu saye, masu sarrafawa, manoman kwangila, One Acre Fund", "Ku kwatanta da farashin kuɗi hannu; ku jera duk kuɗaɗen caji"] },
            { title: "Ku tambaya kafin ku sa hannu", bullets: ["Me ake cirewa a girbi?", "Dole ku sayar musu kaɗai?", "Me zai faru idan girbi ya lalace?"] }
          ],
          sources: [WRSC, GCX_EWR, GCX_ADEHYEMAN, OAF],
          tryIt: "Ku zaɓi ko dai bashi kan takardar rumbu ko tayin bashin kayan gona kusa da ku (ko na misali). Ku rubuta aƙalla sharuɗɗa huɗu (kuɗaɗe, adadi, tsawo, abin da ake cirewa ko dokokin sayarwa) da haɗari biyu, ku faɗi ko ya dace da gonarku.",
          youCanNow: "bayyana yadda bashi kan takardar rumbu da bashin kayan gona ke aiki, da duba kuɗaɗensu da haɗarinsu kafin ku sa hannu.",
          quickCheck: [
            { objective: "O4", q: "Me takardar rumbu ke tabbatarwa?", options: ["Cewa kun mallaki wani adadi da inganci na amfanin gona da aka ajiye", "Cewa kun biya harajinku", "Cewa farashi zai tashi", "Cewa banki ya amince da bashi"], answer: 0, why: "Takardar shaida ce ta mallakar amfanin gona da aka tantance aka ajiye, wadda mai ba da bashi zai iya karɓa." },
            { objective: "O4", q: "Wani shirin bashin kayan gona yana cire kuɗin kayan daga biyan girbinku. Me dole ku duba?", options: ["Irin iri kawai", "Babu komai; kamfanin ne ke yanke shawara", "Farashin kayan idan aka kwatanta da farashin kuɗi hannu, duk kuɗaɗen caji, da abin da zai faru idan girbi ya lalace", "Ranar horo kawai"], answer: 2, why: "Waɗannan sharuɗɗa ne ke yanke nawa kuke biya da gaske, da wanda zai ɗauki asarar lalacewar amfanin gona." }
          ]
        },
        {
          title: "Tallafi, shirye-shiryen matasa da guje wa zamba",
          objectives: ["O5"],
          minutes: 6,
          goal: "Duba tallafi, shirin matasa ko tayin bashi a majiyar hukuma, da gane alamun zamba.",
          text: [
            "Ba a biyan tallafi (grant) baya, amma akwai gasa a kansa, yana da dokoki kan yadda za ku kashe kuɗin, kuma yana neman rahotanni. Yawancin \"asusun matasa\" a zahiri bashi ne ko horo. Misalan da za ku iya dubawa: shirin ENABLE Youth na Bankin Raya Afirka (African Development Bank) yana horar da kuma tallafa wa matasan 'yan kasuwar noma a ƙasashen Afirka da dama, tare da abokan hulɗa kamar IITA; Youth Enterprise Development Fund na Kenya yana ba da bashi ga kasuwancin matasa, har da bashin Agri-Biz; DER/FJ na Senegal yana ba da kuɗi ga ayyukan mata da matasa, har da na noma, galibi ta hanyar bashi. Shirye-shirye suna buɗewa da rufewa kuma suna canja dokokinsu: koyaushe ku duba a shafin intanet na hukuma ko ofishinsu cewa kiran neman shiga a buɗe yake yanzu kafin ku nema.",
            "'Yan damfara suna kwaikwayon sunaye da tambarin shirye-shirye na gaske a kafofin sada zumunta da WhatsApp. Alamun gargaɗi: dole ku biya kuɗin \"sarrafawa\" ko \"rajista\" kafin ku sami tallafi ko bashi; an \"tabbatar\" da amincewa; ana gaggauta ku; ana neman PIN ɗinku, lambar sirri ta lokaci ɗaya (one-time code) ko hotunan katin shaida ta hira; mai tuntuɓar yana amfani da lambar waya ko imel na kansa; ko manhajar bashi tana son samun damar duk lambobin wayarku. Shirye-shirye na gaske ba sa cajin kuɗi don nema, kuma ba sa taɓa neman PIN ɗinku.",
            "Ku duba kowane mai ba da bashi da manhajar bashi: a Kenya, Babban Bankin Kenya yana fitar da jerin masu ba da bashi ta intanet da ke da lasisi, kuma SASRA tana jera SACCO masu lasisi; a Najeriya, FCCPC tana fitar da rajistar masu ba da bashi ta intanet da aka amince da su, kuma Babban Bankin Najeriya yana ba bankunan ƙananan bashi lasisi; a ƙasashen kuɗin CFA, ku duba da BCEAO ko ofishin ƙananan bashi na ƙasa. Idan kuna shakka, ku tambayi ƙungiyar haɗin gwiwarku ko jami'in faɗakarwar noma."
          ],
          steps: ["Ku nemo shirin a shafin intanet na hukuma ko ofishinsa, ba a rubutun kafofin sada zumunta ba.", "Ku duba cewa kiran neman shiga a buɗe yake yanzu, ku karanta dokokin.", "Kada ku taɓa biyan kuɗi don nema ko don karɓar tallafi.", "Kada ku taɓa ba da PIN ɗinku, lambar sirri ta lokaci ɗaya ko kalmomin sirri.", "Ku duba masu ba da bashi da manhajojin bashi a jerin hukumar kula.", "Ku tambayi ƙungiyar haɗin gwiwarku ko jami'in faɗakarwar noma idan ba ku tabbata ba."],
          words: [["Tallafi (grant)", "kuɗin da ake bayarwa don wata manufa da ba a biya baya, yawanci da dokoki da rahotanni."], ["Kiran neman shiga (call for applications)", "sanarwa cewa wani shiri yana karɓar buƙatu, da ranar farawa da ta ƙarewa."], ["Zamba", "dabarar satar kuɗi ko bayanai."], ["Hukumar kula (regulator)", "hukumar hukuma da ke ba da lasisi da kula da masu ba da bashi, SACCO ko kamfanonin inshora."]],
          slides: [
            { title: "Tallafi da shirye-shiryen matasa", bullets: ["Tallafi: ba a biya baya, amma akwai gasa da dokoki", "Yawancin asusun matasa bashi ne ko horo", "Ku duba kiran a buɗe yake yanzu, a shafin hukuma"] },
            { title: "Misalan da za ku duba", bullets: ["AfDB ENABLE Youth (tare da IITA)", "Kenya: bashin Youth Enterprise Development Fund", "Senegal: DER/FJ don mata da matasa"] },
            { title: "Alamun gargaɗin zamba", bullets: ["Kuɗi don nema ko don karɓar kuɗi", "Amincewa \"tabbatacciya\"; ana gaggauta ku", "Ana neman PIN, code ko hotunan katin shaida ta hira"] },
            { title: "Ku duba hukumar kula", bullets: ["Kenya: CBK masu bashi ta intanet; SASRA SACCO", "Najeriya: FCCPC manhajojin bashi; CBN ƙananan bashi", "Ƙasashen CFA: BCEAO ko ofishin ƙasa"] }
          ],
          sources: [ENABLE, YEDF, DERFJ, CBK_DCP, FCCPC],
          tryIt: "Ku nemo tallafi ɗaya, shirin matasa ko manhajar bashi da kuka ji labari. Ku duba shi a shafin hukuma ko jerin hukumar kula, ku rubuta: na gaske ne, a buɗe yake yanzu, tallafi ne ko bashi, da duk alamun gargaɗin da kuka gani.",
          youCanNow: "duba ko tallafi, shiri ko mai ba da bashi na gaske ne kuma a buɗe yake, da gane alamun gargaɗin zamba.",
          quickCheck: [
            { objective: "O5", q: "Wani saƙon WhatsApp ya ce kun ci tallafin gona kuma dole ku biya kuɗin sarrafawa 5,000. Mene ne wannan?", options: ["Matakin tallafi na yau da kullum", "Alamar gargaɗin zamba", "Dokar gwamnati", "Biyan bashi"], answer: 1, why: "Tallafi na gaske ba sa cajin ku don karɓar kuɗi." },
            { objective: "O5", q: "A Najeriya, a ina za ku duba ko an amince da manhajar bashi?", options: ["Tallar manhajar kanta", "Ra'ayin aboki", "Yawan saukewa", "Rajistar FCCPC ta masu ba da bashi ta intanet"], answer: 3, why: "FCCPC tana fitar da jerin masu ba da bashi ta intanet da aka amince da su." }
          ]
        },
        {
          title: "Rubuta takardar neman kuɗi mai shafi ɗaya",
          objectives: ["O6"],
          minutes: 6,
          goal: "Rubuta takardar neman kuɗi mai shafi ɗaya don gonarku.",
          text: [
            "Takardar neman kuɗi tana faɗa wa mai ba da bashi, shiri ko mai zuba jari abin da kuke buƙata, dalili, da yadda za a biya shi ko zai kawo riba. Ku bar ta shafi ɗaya da kanun labarai a sarari: ko ku su wane ne da gonarku (wuri, ƙasa, ayyuka, shekarun noma); manufa da adadi (jimlar buƙata, gudummawarku, gibin da kuke nema, a raba zuwa jarin aiki da kayan aiki); yadda zai samar da kuɗi (kuɗin kowane ɗaya, riba ko lokacin dawowar kuɗi daga bayananku); irin kuɗin da kuke nema da dalilin da ya dace; tsarin biya wata-wata, da ya dace da shigowa da fitar kuɗinku; jingina ko lamuni; haɗari da yadda kuke sarrafa su (inshora, kwangila, bambanta ayyuka, ajiya); da tarihin aikinku (bayanan da aka ajiye, bashin da aka biya a baya, zama mamba a ƙungiya).",
            "Masu zuba jari sun bambanta da masu ba da bashi. Mai zuba jari yana saka kuɗi don samun kaso na kasuwancin da ribarsa ta gaba (equity, hannun jari), maimakon a biya shi da kuɗin ruwa. Masu zuba jari na hannun jari yawanci suna neman kasuwanci masu girma kamar masu sarrafa amfanin gona ko manyan gonaki masu bayanai da ma'aikata. Kuna ba da wani sashe na mallaka da wani iko, don haka ku nemi shawarar lauya kuma kada ku taɓa sa hannu kan abin da ba ku fahimta ba.",
            "Kafin ku aika, ku duba lambobin sau biyu, ku nemi shugaban ƙungiyar haɗin gwiwa, jami'in faɗakarwar noma ko mai ba da shawara ya karanta ta, kuma ku haɗa bayananku. Kada ku taɓa saka kalmomin sirri, PIN ko cikakkun bayanan banki a cikin takardar; ku ba da su ta hanyar hukuma ta mai ba da bashin kawai."
          ],
          steps: ["Ko ku su wane ne da gonarku.", "Manufa, jimlar buƙata, gudummawarku da gibin.", "Yadda zai samar da kuɗi: kuɗin kowane ɗaya, riba ko lokacin dawowar kuɗi.", "Irin kuɗi da tsarin biya wata-wata.", "Jingina ko lamuni; haɗari da yadda kuke sarrafa su.", "Tarihin aiki; ku duba lambobin, ku nemi mai ba da shawara ya karanta."],
          words: [["Takardar neman kuɗi (funding request)", "gajeriyar takarda da ke neman kuɗi daga mai ba da bashi, shiri ko mai zuba jari, tana nuna manufa, adadi da biya."], ["Hannun jari (equity)", "kaso na mallakar kasuwanci da mai zuba jari ke samu don kuɗinsa."], ["Tarihin aiki (track record)", "shaidar abin da kuka yi a baya, kamar bayanan da aka ajiye da bashin da aka biya."]],
          slides: [
            { title: "Shafi ɗaya, kanun labarai a sarari", bullets: ["Ko ku su wane ne da gonarku", "Manufa, jimlar buƙata, kuɗinku, gibin", "Yadda zai samar da kuɗi: kuɗin kowane ɗaya, riba, dawowar kuɗi"] },
            { title: "Biya da tsaro", bullets: ["Biya wata-wata, da ya dace da shigowar kuɗi", "Jingina ko lamuni", "Haɗari da yadda kuke sarrafa su"] },
            { title: "Masu zuba jari sun bambanta", bullets: ["Kuɗi don kaso na kasuwancin (hannun jari)", "Kuna ba da wani sashe na mallaka da iko", "Ku fara neman shawarar lauya"] },
            { title: "Kafin ku aika", bullets: ["Ku duba lambobi sau biyu; ku haɗa bayanai", "Ku nemi mai ba da shawara ya karanta", "Babu PIN ko kalmomin sirri a takardar"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta takardar neman kuɗi mai shafi ɗaya da manufa, jimlar buƙata, gudummawarku da gibin, yadda zai samar da kuɗi, irin kuɗi da dalili, tsarin biya wata-wata, jingina, haɗari da tarihin aikinku. Ku nemi mutum ɗaya da kuka amince da shi ya karanta.",
          youCanNow: "rubuta takardar neman kuɗi mai shafi ɗaya a sarari, bisa lambobinku, da mai ba da bashi, shiri ko mai zuba jari zai iya tantancewa.",
          quickCheck: [
            { objective: "O6", q: "Wane adadi ya kamata takardarku ta nema?", options: ["Gibin kuɗi bayan gudummawarku", "Jimlar kuɗin, ba tare da la'akari da kuɗinku ba", "Duk abin da mai ba da bashi zai bayar", "Ninki biyu na jimlar don a tsira"], answer: 0, why: "Neman gibin yana nuna jajircewarku kuma yana sa bashin ya zama ƙarami gwargwadon iko." },
            { objective: "O6", q: "Me mai zuba jari na hannun jari ke samu don kuɗinsa?", options: ["Ƙayyadadden kuɗin ruwa na wata kawai", "Babu komai", "Kaso na kasuwancin da ribarsa ta gaba", "Takardar mallakar ƙasarku"], answer: 2, why: "Hannun jari na nufin mallakar wani sashe na kasuwancin." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Wasu ƙofofin kuɗi, da yadda ake nema",
        questions: [
          { objective: "O4", q: "Da bashi kan takardar rumbu, me zai faru idan farashi ya faɗi maimakon ya tashi?", options: ["Banki zai soke bashin", "Sayarwar ba za ta iya rufe bashin da kuɗaɗen caji ba", "Rumbun zai biya bambancin", "Babu abin da zai canja"], answer: 1, why: "Har yanzu kuna bin bashin da kuɗaɗen caji, ko yaya farashin yake." },
          { objective: "O4", q: "Wace doka ce aka saba gani a shirin manoman kwangila ko na bashin kayan gona?", options: ["Ba za ku taɓa biya ba", "Dole ku sayar wa kowa sai su", "Kayan gona kyauta ne koyaushe", "Ana cire kuɗin kayan gona daga biyan girbinku"], answer: 3, why: "Shirye-shirye da yawa suna karɓar kuɗin kayan gona lokacin da suke sayen amfanin gonarku." },
          { objective: "O5", q: "Kafin ku nemi shiga shirin matasan 'yan kasuwar noma, ya kamata ku fara:", options: ["Duba a shafin hukuma cewa kiran a buɗe yake yanzu", "Biyan kuɗin rajista", "Aika PIN ɗinku ga masu shirya shi", "Raba shi a kafofin sada zumunta"], answer: 0, why: "Shirye-shirye suna buɗewa da rufewa; shafin hukuma yana nuna abin da ke na gaske da na yanzu." },
          { objective: "O5", q: "Wata manhajar bashi tana neman samun damar duk lambobin wayarku. Wannan:", options: ["Dokar banki ce ta yau da kullum", "Doka ce ta tilas", "Alamar gargaɗi ce; ku fara duba ko manhajar tana da lasisi", "Alama ce ta mai ba da bashi nagari"], answer: 2, why: "Manhajoji marasa lasisi suna amfani da lambobin waya don kunyata masu bashi; ku duba jerin hukumar kula." },
          { objective: "O6", q: "Wanne ya dace a takardar neman kuɗi mai shafi ɗaya?", options: ["PIN ɗin kuɗin wayarku", "Tsarin biya wata-wata da ya dace da shigowa da fitar kuɗinku", "Shafuka goma na hotuna kawai", "Bashin maƙwabtanku"], answer: 1, why: "Masu ba da bashi suna buƙatar ganin yadda da yaushe za ku biya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Samun Kuɗin Gona: Bashi, Tallafi da Masu Zuba Jari",
    questions: [
      { objective: "O1", q: "Jimlar buƙata 2,000,000; kuɗinku 600,000. Gibin kuɗi shi ne:", options: ["2,600,000", "600,000", "1,400,000", "2,000,000"], answer: 2, why: "2,000,000 - 600,000 = 1,400,000." },
      { objective: "O1", q: "Jarin aiki shi ne kuɗin da:", options: ["Ke biyan zagaye ɗaya na samarwa kuma yana dawowa idan kun sayar", "Ke sayen ƙasa", "Ke biyan kuɗin makaranta", "Ba a taɓa biya ba"], answer: 0, why: "Yana ɗaukar nauyin kayan gona da ma'aikata na zagaye ɗaya." },
      { objective: "O1", q: "Me yasa za a saka kowane kuɗi a watan da ake buƙatarsa?", options: ["Masu ba da bashi suna son dogayen jerin abubuwa", "Don cin bashi fiye da buƙata", "Ba shi da wani bambanci", "Don ku sami kuɗi lokacin da kuke buƙatarsa kuma kada ku biya ruwa kan kuɗin da ke zaune banza"], answer: 3, why: "Lokaci mai kyau yana rage bashi da kuɗin ruwa gwargwadon iko." },
      { objective: "O2", q: "Sau nawa VSLA ta yau da kullum ke haɗuwa?", options: ["Sau ɗaya a shekara", "Kowane mako", "A ranar rabon kuɗi kawai", "Ba ta taɓa haɗuwa ba"], answer: 1, why: "A tarukan mako-mako ne mambobi ke sayen hannun jari da biyan bashi." },
      { objective: "O2", q: "Don me asusun taimako na VSLA yake?", options: ["Biyan shugaba", "Sayen ƙasa", "Gaggawar mambobi", "Bukukuwa kawai"], answer: 2, why: "Asusun taimako yana taimaka wa mambobi a lokacin gaggawa." },
      { objective: "O2", q: "Kafin ku shiga ƙungiyar ajiya, me ya kamata ku duba?", options: ["Dokokinta a rubuce, kuɗaɗen cajin bashi da yadda ake kiyaye kuɗi", "Ko wane ne shugaba kawai", "Wurin taro kawai", "Babu komai"], answer: 0, why: "Dokoki a sarari da kiyaye kuɗi suna kare ajiyarku." },
      { objective: "O3", q: "Kuɗin ruwa na ragowar bashi yana cajin ruwa kan:", options: ["Dukkan adadin a tsawon bashin", "Babu komai", "Kuɗaɗen caji kawai", "Adadin da har yanzu kuke bi kawai"], answer: 3, why: "Yayin da kuke biya, kuɗin ruwa yana raguwa." },
      { objective: "O3", q: "Me shirin lamunin bashi kamar NIRSAL ke yi?", options: ["Soke bashin manoma", "Rufe wani sashe na asarar mai ba da bashi idan wanda ya ci bashi bai biya ba", "Biyan kuɗin ruwan manoma", "Ba da tallafi kyauta"], answer: 1, why: "Yana kare masu ba da bashi don su fi ba da bashi; har yanzu kuna bin dukkan bashin." },
      { objective: "O3", q: "Wanne ne jingina?", options: ["Amfanin gonar da kuka fi so", "Takardar ƙasa ko kayan aiki da mai ba da bashi zai iya ɗauka idan ba ku biya ba", "Lambar wayarku", "Farashin kasuwa"], answer: 1, why: "Jingina tsaro ce ga mai ba da bashi." },
      { objective: "O3", q: "Tayi A: biyan 120,000 kowane wata daga wata mai zuwa. Tayi B: biyan 112,000 sau ɗaya bayan girbi. Ga manomin amfanin gona, B:", options: ["Yana cin fiye kuma bai fi dacewa ba", "Koyaushe haramun ne", "Yana cin ƙasa kuma ana biya lokacin da kuɗin girbi ke shigowa", "Iri ɗaya ne da A"], answer: 2, why: "Jimlar B ta fi ƙasa kuma ana biya lokacin da manomi ke da kuɗi." },
      { objective: "O4", q: "A ina kuke ajiye amfanin gona don samun takardar rumbu?", options: ["Kowane shago", "A gida", "Wurin ɗan kasuwa da kuka haɗu da shi yanzu", "Rumbun ajiya mai takardar shaida"], answer: 3, why: "Rumbunan ajiya masu takardar shaida ne kaɗai ke ba da takardun da masu ba da bashi ke karɓa." },
      { objective: "O4", q: "A Kenya, wace hukuma ce ke ba rumbunan ajiya takardar shaida don takardun rumbu?", options: ["Warehouse Receipt System Council", "KAMIS", "NAFDAC", "Hukumar Yanayi ta Kenya (Kenya Meteorological Department)"], answer: 0, why: "WRS Council tana ba da takardar shaida kuma tana kula da rumbunan ajiya." },
      { objective: "O4", q: "Mene ne sayar wa wani daban (side-selling)?", options: ["Sayarwa a gefen hanya", "Sayar da amfanin gona da aka yi wa wani mai saye alƙawari ga wani daban", "Sayar wa ƙungiyar haɗin gwiwa", "Sayarwa a matakai"], answer: 1, why: "Yana karya yarjejeniyar bashin kayan gona ko kwangila kuma yana iya jawo hukunci." },
      { objective: "O5", q: "Shirin tallafi na gaske:", options: ["Yana neman kuɗi kafin ya biya ku", "Yana neman PIN ɗinku", "Ba ya cajin ku don nema", "Yana tabbatar da amincewa ga kowa"], answer: 2, why: "Kuɗin caji, neman PIN da tabbacin amincewa alamun zamba ne." },
      { objective: "O5", q: "Youth Enterprise Development Fund na Kenya galibi yana ba da:", options: ["Ƙasa kyauta", "Bashi ga kasuwancin matasa", "Inshorar amfanin gona", "Hasashen yanayi"], answer: 1, why: "Yana ba da bashi, har da bashin Agri-Biz, da tallafin kasuwanci." },
      { objective: "O5", q: "A ina ya kamata ku duba manhajar bashi ta intanet ta Kenya?", options: ["Shafinta na kafofin sada zumunta", "Yawan taurarinta", "Rukunin hirar aboki", "Jerin Babban Bankin Kenya na masu ba da bashi ta intanet da ke da lasisi"], answer: 3, why: "CBK tana ba masu ba da bashi ta intanet lasisi kuma tana fitar da jerinsu." },
      { objective: "O6", q: "Wane kanu ne ke nuna wa mai ba da bashi yadda kuɗin zai samar da kuɗi?", options: ["Kuɗin kowane ɗaya, riba ko lokacin dawowar kuɗi", "Launin da kuka fi so", "Sunayen maƙwabtanku", "PIN ɗinku"], answer: 0, why: "Waɗannan lambobi suna nuna kuɗin zai samar da kuɗin shiga don biya." },
      { objective: "O6", q: "Tarihin aikinku a takardar neman kuɗi yana nufin:", options: ["Gudun gudu da kuke yi", "Shaidar abin da kuka yi, kamar bayanan da aka ajiye da bashin da aka biya", "Lambobin wayarku", "Jerin buri"], answer: 1, why: "Aikin da ya gabata yana taimaka wa masu ba da bashi su amince da tsarinku." },
      { objective: "O6", q: "Kafin ku aika takardar neman kuɗi, ya kamata ku:", options: ["Ƙara PIN ɗinku don sauri", "Ƙara girman lambobi", "Duba lambobin sau biyu ku nemi mai ba da shawara ya karanta", "Aika ta ga kowace lamba da kuka samu a intanet"], answer: 2, why: "Lambobin da aka duba da mai karatu na biyu suna sa takardar ta fi ƙarfi da aminci." },
      { objective: "O6", q: "Me kuke bayarwa idan kun karɓi hannun jari daga mai zuba jari?", options: ["Babu komai", "Zama mamba a ƙungiyar ajiyarku", "Duk ƙasarku kai tsaye", "Wani sashe na mallaka da wani iko kan kasuwancin"], answer: 3, why: "Hannun jari na nufin mai zuba jari ya mallaki wani sashe na kasuwancin." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 2, 3, 5, 6, 9, 10, 13, 15, 16] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na takardar ku sake duba shi.",
    criteria: [
      { name: "Buƙata da gibin kuɗi", objective: "O1", notYet: "Adadin hasashe ne, ko an haɗa kuɗin gida.", meets: "Jimlar buƙata, gudummawa da gibi daidai suke, an raba su zuwa jarin aiki da kayan aiki, tare da watanni.", exceeds: "Yana da ɗan rarar kuɗi kuma yana nuna inda kowace lambar kuɗi ta fito." },
      { name: "Irin kuɗin da ya dace", objective: "O2", notYet: "Ba a ba da dalilin irin kuɗin da aka zaɓa ba.", meets: "Ya ambaci irin kuɗin (ƙungiya, SACCO, bashi, takardar rumbu, bashin kayan gona, tallafi ko hannun jari) da dalilin da ya dace.", exceeds: "Ya kwatanta aƙalla zaɓuɓɓuka biyu, har da ajiyar ƙungiya, kuma ya bayyana zaɓin." },
      { name: "Tsarin biya", objective: "O3", notYet: "Babu tsarin biya, ko biya yana faɗuwa kafin kowane kuɗin shiga.", meets: "Biya wata-wata tare da cikakken kuɗi, da ya dace da tsarin shigowa da fitar kuɗi da girbi.", exceeds: "Yana nuna abin da zai faru a mummunar damina da yadda za a ci gaba da biya." },
      { name: "Tsaro da sharuɗɗa", objective: "O4", notYet: "Babu jingina, lamuni ko manyan sharuɗɗa.", meets: "An ambaci jingina ko lamuni, tare da manyan sharuɗɗa da haɗari biyu.", exceeds: "Ya bayyana yadda takardar rumbu, kwangila ko inshora ke rage haɗarin mai ba da bashi." },
      { name: "An duba, kuma lafiya", objective: "O5", notYet: "Ba a duba mai ba da bashi ko shirin ba, ko an saka bayanan sirri kamar PIN.", meets: "An duba mai ba da bashi ko shirin a shafin hukuma ko jerin hukumar kula, kuma babu lambobin sirri.", exceeds: "Ya rubuta ranar da aka duba, da cewa kiran ko tayin a buɗe yake yanzu." },
      { name: "Takardar neman kuɗi mai shafi ɗaya a sarari", objective: "O6", notYet: "Ta fi shafi ɗaya, ko babu manufa, adadi ko yadda za ta samar da kuɗi.", meets: "Shafi ɗaya da ke ɗauke da manufa, adadi, gudummawa, yadda zai samar da kuɗi, biya, jingina, haɗari da tarihin aiki.", exceeds: "Mai ba da shawara ya karanta ta, an haɗa bayanai, kuma an amsa sharhinsa." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka samu \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na takardar neman kuɗi",
      "Masu koyo da suka ce sun shiga ƙungiyar ajiya ko SACCO, ko sun nemi kuɗi da takarda a rubuce, cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce sun zaɓi bashi da ake biya bayan girbi, ko sun ci bashi ƙasa da yadda suka fara tsarawa",
      "Masu koyo da suka ce sun duba mai ba da bashi, manhajar bashi ko tayin tallafi a jerin hukuma, ko sun ƙi zambar kuɗi-don-tallafi",
      "Ƙungiyoyin haɗin gwiwa ko masu ba da bashi abokan hulɗa sun ce sun sami cikakkun takardun nema da ƙarancin rashin biya daga waɗanda suka kammala kwas ɗin"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Littafin rubutu da alƙalami, da waya mai sauƙi mai na'urar lissafi",
      "Tsarin gonar mai koyo, bayanansa da tsarin shigowa da fitar kuɗinsa, ko lambobin misali na kwas ɗin",
      "Tayin bashi na gaske ko na misali, dokokin ƙungiyar ajiya, da takardar bayani kan bashin kayan gona ko takardar rumbu daga yankin, idan akwai",
      "Kusan minti 80 gaba ɗaya, a gajerun zama, da lokacin rubuta takardar neman kuɗi"
    ],
    facilitatorNotes: [
      "A ƙungiyar manoma ko zaman faɗakarwar noma: ku yi gwajin farko tare, sannan babi ɗaya a kowane zama, da ayyukan \"Gwada yanzu\" bibbiyu.",
      "Ku gayyaci SACCO, VSLA ko mai ba da bashi mai lasisi ya bayyana dokokinsa, amma kada ku goyi bayan kowane mai ba da bashi; ku bar masu koyo su yi tambayoyin darasin.",
      "Kafin ku ambaci kowane tallafi ko shirin matasa, ku duba a shafinsa na hukuma cewa a buɗe yake; kada ku taɓa tura hanyoyin haɗi daga kafofin sada zumunta.",
      "Kada ku taɓa neman masu koyo su ba da PIN, kalmomin sirri, lambobin katin shaida ko bayanan banki a atisaye; ku yi amfani da madadi.",
      "Ku ba da maki ga takardar neman kuɗi da rubric, ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya; ku ƙarfafa masu koyo su nuna ta ga ƙungiyar haɗin gwiwarsu ko mai ba da bashinsu."
    ]
  }
};

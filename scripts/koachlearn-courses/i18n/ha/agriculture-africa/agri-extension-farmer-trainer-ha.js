"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-extension-farmer-trainer.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// Safety rule kept: the course never gives drug, vaccine or hormone doses or withdrawal periods; it sends farmers to the vet and the label.

const FAO_FFS = { name: "Dandalin FAO na Makarantun Gona na Manoma (Farmer Field School): bayani gaba ɗaya", url: "https://www.fao.org/farmer-field-schools/overview/en/" };
const IDE_FBA = { name: "iDE: Masu Ba da Shawara kan Kasuwancin Gona (Farm Business Advisors)", url: "https://www.ideglobal.org/story/fbas" };
const GIZ_FBS = { name: "GIZ: Kasuwancin noma mai ɗorewa na ƙananan manoma (Farmer Business School, Afirka ta Yamma da ta Tsakiya)", url: "https://www.giz.de/en/projects/sustainable-smallholder-agribusiness" };
const ICRAF_VFT = { name: "CGIAR / ICRAF: Hanyar masu horar da manoma na sa-kai a Gabashin Afirka", url: "https://cgspace.cgiar.org/handle/10568/123260" };
const NAERLS = { name: "Hukumar Faɗakarwa da Haɗa Bincike na Noma ta Ƙasa (NAERLS), Najeriya", url: "https://www.naerls.gov.ng/" };
const KALRO = { name: "Hukumar Binciken Noma da Kiwo ta Kenya (KALRO)", url: "https://www.kalro.org" };
const PCPB = { name: "Hukumar Kula da Magungunan Ƙwari ta Kenya (Pest Control Products Board): kayayyakin da aka yi wa rajista", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "NAFDAC (Najeriya): rajistar sinadaran noma", url: "https://www.nafdac.gov.ng" };
const ODPC = { name: "Ofishin Kwamishinan Kare Bayanai na Kenya (ODPC)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Hukumar Kare Bayanai ta Najeriya (NDPC)", url: "https://ndpc.gov.ng" };

module.exports = {
  id: "agri-extension-farmer-trainer-ha",
  lang: "ha",
  translationOf: "agri-extension-farmer-trainer",
  category: "Agriculture (Africa)",
  name: "Zama Mai Horar da Manoma: Faɗakarwar Noma da Masu Ba da Shawara kan Kasuwancin Gona",
  skills: "Sanin matsayin kowa a faɗakarwar manoma, Tsara zaman horo na nuna-gwada-tattauna, Gudanar da gonar nuni da zaman makarantar gona, Ba da shawara da gaskiya da tura manomi ga ƙwararre, Samun kuɗi da gaskiya daga kayan noma da hidimomi, Ajiye bayanan horo",
  outcome: "tsara da gudanar da gajeren ranar horo ga manoma a yankinku: darasi na aiki da hannu bisa nunawa, gwadawa da tattaunawa, gonar nuni da ke kwatanta yadda aka saba yi da wata hanya mafi kyau, shawara ta gaskiya da ke sanin lokacin tura manomi ga ƙwararre, da bayanan waɗanda kuka horar da abin da ya canja.",
  about: [
    "Wannan kwas na manoman da ke son koyar da maƙwabtansu ne: manyan manoma (lead farmers), masu horar da manoma na sa-kai, masu son zama Masu Ba da Shawara kan Kasuwancin Gona (FBA), matasan 'yan kasuwar noma, shugabannin ƙungiyoyin haɗin gwiwa da sababbin ma'aikatan faɗakarwar noma a Kenya, Najeriya, Ghana, Côte d'Ivoire, Kamaru da sauran Afirka.",
    "Za ku koyi yadda faɗakarwar noma ke aiki da inda kuka dace, yadda manya suka fi koyo, yadda ake gudanar da gonar nuni da zaman makarantar gona, yadda ake tsara gajeren zaman horo, yadda ake amfani da waya da bidiyo don isa ga ƙarin manoma, yadda ake ba da shawara da hankali da lokacin tura manomi ga ƙwararre, yadda ake samun abin rayuwa da gaskiya ta sayar da kayan noma da hidimomi, da yadda ake ajiye bayanan waɗanda kuka horar da abin da ya canja.",
    "Za ku gama da tsarin darasi da tsarin gonar nuni don ranar horo ta gaske a yankinku. Adadin kuɗi misalai ne kawai. Kowane darasi yana ƙarewa da aiki; akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas."
  ],
  finalTask: "Ku tsara ranar horo ga manoma 15 zuwa 25 a yankinku kan wata hanya ɗaya da kuka sani sosai (misali shuka masara a layi da taki na gargajiya (compost), ajiyar hatsi a buhu mai rufewa sosai (hermetic), ko yi wa kaji allurar rigakafi ta hannun likitan dabbobi). Ku rubuta: (1) tsarin darasi na minti 60 zuwa 90 da ke bin nunawa, gwadawa, tattaunawa, da fasaha ɗaya, kayan aiki, lokuta da yadda za ku tabbatar kowane manomi zai iya yi; (2) tsarin gonar nuni mai gonaki biyu gefe da gefe (yadda aka saba da sabuwar hanya), girmansu ɗaya, da alama a kansu, da abin da za ku rubuta da ranakun ziyarar gona; (3) jerin wuraren tura manoma (likitan dabbobi, ofishin faɗakarwar noma, hukumar kula da kayan noma) da abin da ba za ku ba da shawara a kai ba; (4) takardar rajistar horo da izini da ranar bibiya.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manyan manoma, masu horar da manoma na sa-kai, masu son zama Masu Ba da Shawara kan Kasuwancin Gona, matasan 'yan kasuwar noma, shugabannin ƙungiyoyin haɗin gwiwa da sababbin ma'aikatan faɗakarwar noma a Afirka, har da Kenya, Najeriya, Ghana, Côte d'Ivoire da Kamaru. Yawancinsu manoma ne da ake girmamawa, masu ƙwarewa ta aiki, amma ba su sami horo kan koyarwa ko ba da shawara ba.",
    startingPoint: "Suna iya noma ko kiwo sosai, kuma sau da yawa suna ba maƙwabta shawara ba bisa ƙa'ida ba. Kaɗan ne suka taɓa tsara darasi, suka kafa gonar kwatanci mai adalci, suka ajiye bayanan waɗanda suka koyar, ko suka yi tunanin inda shawararsu za ta tsaya. Wasu suna sayar da kayan noma kuma ba su da tabbas yadda za su yi da adalci.",
    gap: "Ma'aikatan faɗakarwar noma sun yi kaɗan sosai idan aka kwatanta da yawan manoma, don haka masu horar da manoma da masu ba da shawara suna ɗaukar babban nauyi. Ba tare da ƙwarewar koyarwa, iyaka ta gaskiya da bayanai ba, taimakonsu ba ya yin tasiri sosai kuma yana iya cutarwa (yawan magani mara daidai, kayan da ba a yi wa rajista ba, tilasta sayayya). Masu koyo suna buƙatar koyarwa ta yadda za a tuna, ba da shawara lafiya, samun kuɗi da adalci da nuna sakamako.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; kwas ɗin yana nan kuma da Sifaniyanci, Faransanci da Larabci",
      "Na'urori: wayar zamani mai sauƙi; manoman da ake horarwa wataƙila suna da waya mai sauƙi kawai",
      "Wurin horo: horon yana faruwa a gonaki, da ƙananan kayan aiki kuma babu na'urar nuna hoto (projector)",
      "Tsaro: babu yawan maganin dabbobi, allurar rigakafi ko hormone, kuma babu lokacin jira; magungunan ƙwari da aka yi wa rajista kaɗai, kamar yadda label ya ce",
      "Kuɗi: duk adadin kuɗi misalai ne; shawarar samun kuɗi game da adalci ce, ba saka jari ba",
      "Bayanan sirri na ma'aikata da manoma suna da kariya ta dokokin kare bayanai na ƙasa"
    ],
    prerequisites: "Ƙwarewa ta aiki a aƙalla wani nau'in amfanin gona ko kiwo ɗaya. Kwas na amfanin gona ko kiwo daga wannan jerin kwas zai taimake ku shirya abin da za ku koyar."
  },
  // ---- ADDIE: Design (objectives) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku mutanen da ke taimakon manoma a yankinku", action: "bayyana matsayin babban manomi, Mai Ba da Shawara kan Kasuwancin Gona da ma'aikacin faɗakarwar noma, da waɗanda za ku haɗa kai da su", standard: "kuna ambaton mutum ɗaya ko ofishi ɗaya na yankinku ga kowanne inda suke" },
    { id: "O2", condition: "Idan aka ba ku wata hanya ɗaya da kuka sani sosai", action: "tsara zaman horo na minti 60 zuwa 90 da ke bin nunawa, gwadawa, tattaunawa", standard: "da fasaha ɗaya a sarari, lokuta, kayan aiki da hanyar tabbatar kowane manomi zai iya yi" },
    { id: "O3", condition: "Don wata hanya da kuke son manoma su ɗauka", action: "shirya gonar nuni da ke kwatanta yadda aka saba yi da sabuwar hanya", standard: "da gonaki masu girma ɗaya, da alama, da bayanai, da ziyara a ranakun da aka tsara" },
    { id: "O4", condition: "Idan manomi ya nemi shawara a kan abin da ya fi horonku", action: "ba da shawarar da aka horar da ku a kai kaɗai da tura manomin ga ƙwararren da ya dace", standard: "ta amfani da rubutaccen jerin wuraren turawa, ba tare da taɓa ba da yawan magani ko shawarar magungunan ƙwari da ba a yi wa rajista ba" },
    { id: "O5", condition: "Idan kuna sayar da kayan noma ko hidimomi ga manoman da kuke horarwa", action: "bayyana yadda kuke samun kuɗi da dokokin gaskiya da kuke bi", standard: "da rubutattun farashi, bayyana kwamishon, kuma babu tilasta sayayya" },
    { id: "O6", condition: "Bayan kowane horo", action: "rubuta waɗanda kuka horar, a kan me, da sakamakon", standard: "da izini, a ɓoye, da bibiya aƙalla sau ɗaya" }
  ],
  chapters: [
    {
      name: "Babi na 1: Koyar da manoma ta yadda za su tuna",
      lessons: [
        {
          title: "Manyan manoma, Masu Ba da Shawara kan Kasuwancin Gona da ma'aikatan faɗakarwa",
          objectives: ["O1"],
          minutes: 5,
          goal: "Bayyana matsayin kowa a faɗakarwar manoma da faɗin waɗanda za ku haɗa kai da su.",
          text: [
            "Faɗakarwar noma (extension) na nufin taimakon manoma su koyi hanyoyi mafi kyau su yi amfani da su. Ma'aikatan faɗakarwar noma na gwamnati (a Najeriya, Shirye-shiryen Bunƙasa Noma na jihohi (ADP) da NAERLS ke tallafawa; a Kenya, jami'an noma na gundumomi da ke aiki tare da cibiyoyin bincike kamar KALRO) masu ba da shawara ne da aka horar, amma kowannensu yana hidima ga manoma masu yawan gaske. Don haka manoma da kansu suna ɗaukar yawancin koyarwar.",
            "Babban manomi ko mai horar da manoma na sa-kai manomi ne da ake girmamawa wanda ke karɓar nunin aiki a gonarsa kuma yana koyar da maƙwabta, yawanci da horo da tallafin wani shiri ko ofishin faɗakarwa. A Gabashin Afirka, ICRAF da abokan aikinta sun yi amfani da masu horar da manoma na sa-kai sosai, misali a kiwon shanun nono; wani bincike a Uganda ya gano cewa ilimin manoma, yawan nono da kuɗin shigarsu sun ƙaru.",
            "Mai Ba da Shawara kan Kasuwancin Gona (Farm ko Farmer Business Advisor, FBA) ɗan kasuwa ne na yankin da ke sayar da kayan noma da shawara ga manoman kusa, kuma yana samun kuɗi daga kwamishon da kuɗin hidima. iDE tana horar da FBA a Zambiya da Mozambik, kowanne yana hidima ga manoma kusan 80 zuwa 120. A Afirka ta Yamma da ta Tsakiya, Farmer Business School na GIZ ya horar da manoman koko da na abinci a Côte d'Ivoire, Ghana, Togo, Najeriya da Kamaru kan ƙwarewar kasuwancin gona, tare da hukumomin faɗakarwa. Ko mene ne sunan matsayinku, kuna ƙarawa ga aikin ma'aikacin faɗakarwa ne; ba ku maye gurbinsa ba."
          ],
          steps: ["Ku jera waɗanda ke taimakon manoma a yankinku: ofishin faɗakarwa, shirye-shirye, ƙungiyoyin haɗin gwiwa, shagunan kayan noma da na dabbobi (agrovet).", "Ku zaɓi matsayin da ya dace da ku: babban manomi, FBA, ko duka biyu.", "Ku gana da jami'in faɗakarwar noma na yankinku ku bayyana abin da kuke shirin yi.", "Ku rubuta mutum ɗaya da za ku tuntuɓa ga kowane matsayi da lokacin da za ku sake magana."],
          words: [["Faɗakarwar noma (extension)", "hidimomin da ke taimakon manoma su koyi hanyoyi mafi kyau su yi amfani da su."], ["Babban manomi (lead farmer)", "manomi da ake girmamawa wanda ke karɓar nunin aiki kuma yana koyar da maƙwabta, sau da yawa da tallafin wani shiri ko ofishin faɗakarwa."], ["Mai Ba da Shawara kan Kasuwancin Gona (FBA)", "ɗan kasuwa na yankin da ke sayar da kayan noma kuma yana ba manoman kusa shawara don kwamishon ko kuɗin hidima."]],
          slides: [
            { title: "Ma'aikatan faɗakarwar noma", bullets: ["Masu ba da shawara na gwamnati da aka horar", "Najeriya: ADP, NAERLS; Kenya: jami'an gundumomi, KALRO", "Kowanne yana hidima ga manoma masu yawan gaske"] },
            { title: "Manyan manoma da masu horarwa na sa-kai", bullets: ["Suna karɓar nunin aiki, suna koyar da maƙwabta", "An yi amfani da su sosai a Gabashin Afirka (ICRAF, shanun nono)"] },
            { title: "Masu Ba da Shawara kan Kasuwancin Gona", bullets: ["'Yan kasuwa na yankin: kayan noma tare da shawara", "iDE: Zambiya, Mozambik; manoma 80-120 kowanne", "Farmer Business School na GIZ: Afirka ta Yamma da ta Tsakiya"] },
            { title: "Ku yi aiki tare", bullets: ["Kuna ƙarawa ga aikin ma'aikacin faɗakarwa", "Ku fara ganawa da ofishin yankinku"] }
          ],
          sources: [NAERLS, KALRO, ICRAF_VFT, IDE_FBA, GIZ_FBS],
          tryIt: "Ku yi tebur na waɗanda ke taimakon manoma a yankinku: ofishin faɗakarwa, duk wani shiri ko ƙungiyar haɗin gwiwa, da shagon kayan noma ko dillalin kayan noma mafi kusa. Ku rubuta matsayin da za ku ɗauka (babban manomi, FBA ko duka biyu) da mutum ɗaya da za ku tuntuɓa ga kowane matsayi.",
          youCanNow: "bayyana matsayin kowa a faɗakarwar manoma da inda kuka dace.",
          quickCheck: [
            { objective: "O1", q: "Mene ne babban bambanci tsakanin Mai Ba da Shawara kan Kasuwancin Gona da babban manomi na sa-kai?", options: ["FBA yana samun kuɗi daga sayar da kayan noma da hidimomi", "FBA ma'aikacin gwamnati ne", "FBA ba ya taɓa ba da shawara", "FBA yana aiki a birane kaɗai"], answer: 0, why: "FBA 'yan kasuwa ne na yankin da ke samun kuɗi daga kwamishon da kuɗin hidima." },
            { objective: "O1", q: "Kuna shirin fara horar da maƙwabta. Wa za ku fara ganawa da shi?", options: ["Wani mai saye a birni", "Gidan rediyo", "Jami'in faɗakarwar noma na yankinku", "Babu kowa; ku fara kawai"], answer: 2, why: "Aiki tare da faɗakarwar noma yana sa shawararku ta zama ta zamani kuma yana kawo tallafi." }
          ]
        },
        {
          title: "Yadda manya ke koyo, da tsara gajeren zaman horo",
          objectives: ["O2"],
          minutes: 6,
          goal: "Tsara zaman horo na minti 60 zuwa 90 da ke bin nunawa, gwadawa, tattaunawa.",
          text: [
            "Manoma manya sun fi koyo ta yin aiki, daga mutanen da suka amince da su, kan matsalolin da suke da su yanzu. Suna zuwa da ƙwarewa: ku girmama ta, ku tambaye su abin da suke yi yanzu. Dogon jawabi ana mantawa da shi; abin da suka yi da hannunsu ana tuna shi. Ku yi amfani da matakai uku: nunawa (ku nuna fasahar a hankali, kuna bayyana dalili), gwadawa (kowane manomi ya yi yayin da kuke kallo kuna taimakawa), tattaunawa (ƙungiyar ta yi magana kan abin da ta gani, abin da ke da wuya, da ko zai yi aiki a gonakinsu).",
            "Ku koyar da fasaha ɗaya a kowane zama, kamar \"auna da shuka masara a layi da dintsi ɗaya na taki na gargajiya (compost) a kowane rami\", ba \"komai game da masara\" ba. Ku tsara ta: fasahar; kayan aiki don kowa ya gwada; lokuta (misali minti 10 na maraba da abin da kuke yi yanzu, 15 na nunawa, 30 na gwadawa, 20 na tattaunawa, 10 na tsari da dubawa); da yadda za ku tabbatar kowane manomi zai iya yi, kamar kallon kowanne yana shuka ramuka uku daidai.",
            "Ku zaɓi lokacin da ya dace da manoma (bayan aikin safe, ba ranar kasuwa ba), wurin da za su iya kaiwa, da harshen da suke magana. Ku haɗa mata da matasa: ku tambayi wane ne ke yin aikin a gida, ku gayyace su. Ku sa ƙungiyoyi ƙanana ta yadda kowa zai gwada, kusan mutum 15 zuwa 25 ga kowane mai horarwa."
          ],
          steps: ["Ku zaɓi fasaha ɗaya da manoma ke buƙata yanzu.", "Ku tsara nunawa, gwadawa da tattaunawa, da lokuta.", "Ku jera kayan aiki don kowa ya gwada.", "Ku yanke yadda za ku tabbatar kowane manomi zai iya yi.", "Ku zaɓi lokaci, wuri da harshen da suka dace da manoma."],
          words: [["Nunawa, gwadawa, tattaunawa", "hanyar koyarwa: nuna aikin, bar kowa ya yi atisaye, sannan a tattauna shi."], ["Tsarin darasi (lesson plan)", "gajeren rubutaccen tsari na abin da za ku koyar, yadda, da me, da tsawon lokacin kowane sashe."], ["Koyo ta yin aiki", "koyon fasaha ta yin atisaye da hannunku."]],
          slides: [
            { title: "Yadda manya ke koyo", bullets: ["Ta yin aiki, daga mutanen da suka amince da su", "Kan matsalolin da suke da su yanzu", "Ku girmama abin da suka riga suka sani"] },
            { title: "Nunawa, gwadawa, tattaunawa", bullets: ["Nunawa: ku nuna a hankali, ku faɗi dalili", "Gwadawa: kowa ya yi", "Tattaunawa: me ke da wuya, zai yi aiki a nan?"] },
            { title: "Fasaha ɗaya a kowane zama", bullets: ["Misali: layi da taki na gargajiya a kowane rami", "Lokuta, kayan aiki, dubawa ga kowa"] },
            { title: "Ku sauƙaƙa zuwa", bullets: ["Lokaci da wuri masu kyau", "Harshen manoman da kansu", "Ku gayyaci mata da matasa"] }
          ],
          tryIt: "Ku rubuta tsarin darasi don fasaha ɗaya da kuka sani sosai: fasahar a jimla ɗaya, kayan aiki, lokutan nunawa-gwadawa-tattaunawa na minti 60 zuwa 90, da yadda za ku tabbatar kowane manomi zai iya yi.",
          youCanNow: "tsara gajeren zaman horo da ke koyar da fasaha ɗaya ta nunawa, gwadawa da tattaunawa.",
          quickCheck: [
            { objective: "O2", q: "Wace fasaha ce ta fi dacewa da zama ɗaya na minti 90?", options: ["Komai game da masara", "Dukkan lafiyar dabbobi", "Noma gaba ɗaya", "Shuka masara a layi da dintsi ɗaya na taki na gargajiya a kowane rami"], answer: 3, why: "Fasaha ɗaya a sarari za a iya nuna ta, a yi atisaye, kuma a duba ta a zama ɗaya." },
            { objective: "O2", q: "Me ke faruwa a matakin \"gwadawa\"?", options: ["Mai horarwa yana yin dogon jawabi", "Kowane manomi yana yin fasahar yayin da mai horarwa ke kallo yana taimakawa", "Manoma suna komawa gida", "Ƙungiyar tana sayar da kayan noma"], answer: 1, why: "Atisaye da hannunsu shi ne yadda manya ke tunawa." }
          ]
        },
        {
          title: "Gonakin nuni da makarantun gona na manoma",
          objectives: ["O3"],
          minutes: 6,
          goal: "Shirya gonar nuni da ke kwatanta yadda aka saba yi da sabuwar hanya cikin adalci.",
          text: [
            "Manoma suna yarda da abin da suka gani a gona irin tasu. Gonar nuni tana nuna sabuwar hanya gefe da gefe da wadda aka saba. Ku zaɓi wurin da ake gani kusa da hanya, mai ƙasa iri ɗaya. Ku yi alamar gonaki biyu masu girma ɗaya (misali 10 m x 10 m kowanne): gona A, yadda aka saba; gona B, sabuwar hanya. Ku canja abu ɗaya kawai tsakaninsu, kamar irin shuka, tazara ko taki na gargajiya, don bambancin ya sami dalili ɗaya. Ku sa allo mai bayyana a kowanne.",
            "Ku ajiye bayanai tun farko: ranar shuka, kayan noma da aikin kowace gona, hotuna duk bayan mako biyu, matsaloli, da girbin da aka auna daban-daban. Ku tsara ranakun ziyarar gona a muhimman matakai (bayan tsiro ya fito, lokacin fure, lokacin girbi) don manoma su gani su kwatanta. Ku faɗi gaskiya idan sabuwar hanyar ba ta yi nasara ba: wannan ma koyo ne mai amfani.",
            "Makarantar Gona ta Manoma (Farmer Field School, FFS) ta wuce haka. FAO ta bayyana ta a matsayin ƙungiyar manoma da ke haɗuwa a kai a kai a gona tsawon dukkan zagayen noma, tare da jagoran da aka horar. Suna kwatanta gonaki (hanyar gida da wata hanya mafi kyau da aka gabatar) kuma suna yin Nazarin Muhallin Gona (Agro-Ecosystem Analysis): a ƙananan ƙungiyoyi suna lura da shuke-shuke, ƙwari, maƙiyan ƙwari na halitta, ƙasa da yanayi, suna zana abin da suka gani, kuma suna yanke shawara tare kan abin da za a yi. An yi amfani da FFS a ƙasashe fiye da 90. Idan kuna son jagorantar ɗaya, ku tambayi ofishin faɗakarwa ko wani shiri game da horon jagorori."
          ],
          steps: ["Ku zaɓi wurin da ake gani mai ƙasa iri ɗaya.", "Ku yi alamar gonaki biyu masu girma ɗaya: yadda aka saba da sabuwar hanya.", "Ku canja abu ɗaya kawai tsakaninsu; ku sa alama a duka biyun.", "Ku rubuta ranaku, kayan noma, aiki, hotuna da girbi na kowace gona.", "Ku tsara ranakun ziyarar gona lokacin fitowar tsiro, fure da girbi."],
          words: [["Gonar nuni (demonstration plot)", "ƙaramar gona da ke nuna wata hanya don manoma su ga tana aiki."], ["Makarantar Gona ta Manoma (FFS)", "ƙungiyar da ke haɗuwa a kai a kai a gona tsawon damina, tare da jagora, don koyo ta lura da gwaji."], ["Nazarin Muhallin Gona (AESA)", "lura da shuke-shuke, ƙwari, maƙiyan ƙwari na halitta, ƙasa da yanayi a gona, sannan a yanke shawara tare kan abin da za a yi."]],
          slides: [
            { title: "Gani ya kori ji", bullets: ["Yadda aka saba gefe da sabuwar hanya", "Girma ɗaya, ana gani, da alama"] },
            { title: "Kwatanci mai adalci", bullets: ["Ku canja abu ɗaya kawai", "Ƙasa iri ɗaya, sauran kulawa iri ɗaya"] },
            { title: "Ku rubuta ku nuna", bullets: ["Ranaku, kayan noma, aiki, hotuna", "An auna girbin kowace gona daban", "Ranakun ziyara a muhimman matakai"] },
            { title: "Makarantar Gona ta Manoma (FAO)", bullets: ["Tana haɗuwa a kai a kai tsawon damina", "Jagoran da aka horar, kwatanta gonaki", "Nazarin Muhallin Gona, yanke shawara tare"] }
          ],
          sources: [FAO_FFS],
          tryIt: "Ku zana tsarin gonar nuni don fasahar da kuka tsara a Darasi na 2: gonaki biyu masu girma ɗaya, abu ɗaya da ya bambanta, allunan alama, abin da za ku rubuta, da ranakun ziyarar gona uku.",
          youCanNow: "shirya gonar nuni mai adalci da bayyana yadda makarantar gona ta manoma ke aiki.",
          quickCheck: [
            { objective: "O3", q: "A gonar nuninku, gona B tana da sabon iri DA taki na gargajiya DA tazara mai faɗi. Mece ce matsalar?", options: ["Babu komai; ƙarin canje-canje sun fi kyau", "Gonakin sun yi ƙanƙanta sosai", "Ba za ku iya sanin wane canji ne ya kawo bambancin ba", "Manoma ba sa son allunan alama"], answer: 2, why: "Ku canja abu ɗaya don bambancin ya sami dalili ɗaya." },
            { objective: "O3", q: "Me manoma ke yi a Nazarin Muhallin Gona a makarantar gona ta FAO?", options: ["Suna lura da gona a ƙananan ƙungiyoyi kuma suna yanke shawara tare kan abin da za a yi", "Suna sauraren lacca kawai", "Suna sayen kayan noma", "Suna cike takardun bashi"], answer: 0, why: "AESA shi ne lura da shuke-shuke, ƙwari, ƙasa da yanayi, sannan a yanke shawara a matsayin ƙungiya." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Koyar da manoma ta yadda za su tuna",
        questions: [
          { objective: "O1", q: "Me yasa masu horar da manoma suke da muhimmanci sosai a faɗakarwar noma a Afirka?", options: ["Ba a horar da ma'aikatan faɗakarwa ba", "Kowane ma'aikacin faɗakarwa yana hidima ga manoma masu yawan gaske", "Manoma ba sa son ƙwararru", "Doka ce ta wajabta su"], answer: 1, why: "Masu horar da manoma suna taimaka wa faɗakarwar noma ta isa ga ƙarin mutane." },
          { objective: "O1", q: "A waɗanne ƙasashe Farmer Business School na GIZ ya yi aiki da manoman koko?", options: ["Kenya kaɗai", "A Asiya kaɗai", "Zambiya da Mozambik kaɗai", "Côte d'Ivoire, Ghana, Togo, Najeriya da Kamaru"], answer: 3, why: "Shirin ya shafi waɗannan ƙasashe biyar na Afirka ta Yamma da ta Tsakiya." },
          { objective: "O2", q: "Mene ne matakai uku na hanyar koyarwa a wannan kwas?", options: ["Nunawa, gwadawa, tattaunawa", "Magana, magana, jarabawa", "Karanta, rubuta, sa hannu", "Saya, sayar, biya"], answer: 0, why: "Nuna aikin, yi atisaye, sannan a tattauna shi." },
          { objective: "O2", q: "Ta yaya za ku tabbatar zaman horo ya yi aiki?", options: ["Ku ƙirga mutanen da suka zo", "Ku tambaya ko sun ji daɗi", "Ku kalli kowane manomi yana yin fasahar daidai", "Ku raba dogon takardar bayani"], answer: 2, why: "Gwajin zaman koyon fasaha shi ne kowane manomi ya iya yin fasahar." },
          { objective: "O3", q: "Ya kamata a sa gonar nuni:", options: ["A ɓoye bayan gida", "A wurin da ake gani kusa da hanya, mai ƙasa iri ɗaya", "A kan ƙasa mafi muni kaɗai", "Nesa da kowane manomi"], answer: 1, why: "Dole manoma su gan ta, kuma ƙasa iri ɗaya tana sa kwatancin ya zama mai adalci." }
        ]
      }
    },
    {
      name: "Babi na 2: Ba da shawara, samun kuɗi da nuna sakamako",
      lessons: [
        {
          title: "Isa ga manoma ta waya, da sanin lokacin tura su ga ƙwararre",
          objectives: ["O4"],
          minutes: 6,
          goal: "Ba da shawarar da aka horar da ku a kai kaɗai da tura manoma ga ƙwararren da ya dace.",
          text: [
            "Waya tana taimaka muku isa ga ƙarin manoma tsakanin ziyarori. Ku ɗauki gajeren bidiyo (minti ɗaya zuwa biyu) na matakin \"nunawa\" a wayarku ku raba shi a ƙungiyar WhatsApp; ku aika tunatarwa ta SMS ga manoma masu waya mai sauƙi; ku yi amfani da saƙon murya a harshen yankin; ku yi gajeren kiran ƙungiya kafin ranar ziyarar gona. Ku nemi izini kafin ku ɗauki bidiyon mutane ko gonakinsu, kuma ku bar ƙungiyar don maganar noma kaɗai.",
            "Shawara tana iya taimakawa ko cutarwa. Ku ba da shawara kan abin da aka horar da ku a kai kuma kuka ga yana aiki kaɗai. Kada ku taɓa ba da yawan maganin dabbobi, allurar rigakafi ko hormone, kuma kada ku taɓa ba da lokacin jira (withdrawal period): ku ce \"ku bi likitan dabbobi da abin da ke rubuce a jikin magani (label)\". Ku ba da shawarar magungunan ƙwari da aka yi wa rajista a ƙasarku kaɗai (misali a Hukumar Kula da Magungunan Ƙwari ta Kenya ko NAFDAC ta Najeriya), a yi amfani da su kamar yadda label ya ce, da kayan kariya. Ku duba jerin hukumar rajista idan ba ku da tabbas.",
            "Ku tura da sauri idan wani abu ya fi ƙarfinku: dabbobi marasa lafiya ko masu mutuwa su je wurin likitan dabbobi; mutuwar aladu ko kaji kwatsam tana iya zama zazzaɓin aladu na Afirka (African Swine Fever) ko murar tsuntsaye (avian flu), waɗanda dole a sanar da hukuma, don haka ku gaya wa manomin ya kai rahoto ga likitan dabbobi ko hukumar lafiyar dabbobi nan take kuma kada ya motsa ko sayar da dabbobin. Ƙwari ko cututtukan amfanin gona da ba a sani ba su je ofishin faɗakarwa ko cibiyar bincike. Bashi da kwangiloli su je wurin mai ba da shawara amintacce. Ku ajiye rubutaccen jerin wuraren turawa da sunaye da lambobin waya, kuma ku bibiya don ganin abin da ya faru."
          ],
          steps: ["Ku raba gajerun bidiyo, tunatarwar SMS da saƙon murya; ku nemi izini kafin ɗaukar bidiyo.", "Ku ba da shawara kan abin da aka horar da ku a kai kaɗai.", "Babu yawan magani ko lokacin jira: likitan dabbobi da label kaɗai.", "Magungunan ƙwari da aka yi wa rajista kaɗai, kamar yadda label ya ce.", "Ku tura da sauri ta amfani da rubutaccen jerin wuraren turawa, kuma ku bibiya."],
          words: [["Turawa (referral)", "aika manomi wurin ƙwararren da zai iya taimakawa da abin da ya fi ƙwarewarku."], ["Cutar da dole a sanar (notifiable disease)", "cutar da doka ta ce dole a kai rahotonta ga hukumar lafiyar dabbobi, kamar zazzaɓin aladu na Afirka ko murar tsuntsaye."], ["Maganin ƙwari da aka yi wa rajista", "kaya da hukumar kula ta ƙasa ta amince a yi amfani da shi."]],
          slides: [
            { title: "Waya tana isa ga ƙarin manoma", bullets: ["Bidiyo na minti 1-2 na matakin \"nunawa\"", "Tunatarwar SMS, saƙon murya, kiran ƙungiya", "Ku nemi izini kafin ɗaukar bidiyo"] },
            { title: "Shawara cikin iyakar horonku", bullets: ["Babu yawan maganin dabbobi, rigakafi ko hormone", "Likitan dabbobi da label kaɗai", "Magungunan ƙwari masu rajista, kamar yadda label ya ce"] },
            { title: "Ku tura da sauri", bullets: ["Dabbobi marasa lafiya: likitan dabbobi", "Mutuwar aladu ko kaji: ku kai rahoto nan take", "Matsalolin amfanin gona da ba a sani ba: faɗakarwa"] },
            { title: "Jerin wuraren turawarku", bullets: ["Sunaye da lambobin waya", "Ku bibiya don ganin abin da ya faru"] }
          ],
          sources: [PCPB, NAFDAC],
          tryIt: "Ku rubuta jerin wuraren turawarku: likitan dabbobi ko ofishin lafiyar dabbobi mafi kusa, ofishin faɗakarwa, hukumar rajistar magungunan ƙwari ta ƙasarku, da mai ba da shawara amintacce kan kuɗi da kwangiloli, da lambobin waya. Sannan ku rubuta tambayoyi uku da BA za ku amsa da kanku ba da wanda za ku tura su gare shi.",
          youCanNow: "isa ga manoma ta waya da ba da shawara cikin iyakarku, kuna tura sauran ga ƙwararren da ya dace.",
          quickCheck: [
            { objective: "O4", q: "Wani manomi ya tambaye ku yawan maganin ƙwayoyin cuta (antibiotic) da zai ba akuya mara lafiya. Kun ce:", options: ["\"Ka ba ta cokali biyu a rana.\"", "\"Ka yi amfani da mafi arha.\"", "\"Ka ninka don a tabbata.\"", "\"Ka kira likitan dabbobi ka bi label ɗin maganin; ba zan iya ba da yawan magani ba.\""], answer: 3, why: "Yawan magani daga likitan dabbobi da label yake zuwa, ba daga mai horar da manoma ba." },
            { objective: "O4", q: "Aladu da yawa a wani ƙauye sun mutu kwatsam. Me za ku gaya wa manoman?", options: ["Ku sayar da sauran da sauri", "Ku kai rahoto ga likitan dabbobi ko hukumar lafiyar dabbobi nan take kuma kada ku motsa aladun", "Ku jira mako guda", "Ku ci naman"], answer: 1, why: "Tana iya zama zazzaɓin aladu na Afirka, cutar da dole a kai rahotonta nan take." }
          ]
        },
        {
          title: "Samun abin rayuwa a matsayin Mai Ba da Shawara kan Kasuwancin Gona, da gaskiya",
          objectives: ["O5"],
          minutes: 5,
          goal: "Bayyana yadda za ku sami kuɗi daga kayan noma da hidimomi da dokokin gaskiya da za ku bi.",
          text: [
            "FBA yana samun kuɗi ta kawo kayan noma da hidimomi ga manoman da ke nesa da shaguna: kwamishon kan iri, takin zamani, buhunan ajiya masu rufewa sosai (hermetic) ko kayan aikin da aka sayar; kuɗin hidima kamar fesa magani da kayan aiki masu kyau, huɗa, ɗaukar samfurin ƙasa, tara girbi ga masu saye, ko ajiye bayanai. iDE ta lura cewa dangantakar FBA ta dogon lokaci da al'umma tana ba shi ƙwaƙƙwaran dalilin ba da shawarar kayan da ke amfanar manoma kaɗai.",
            "Gaskiya kasuwanci ne mai kyau. Ku sayar da kayan gaske da aka yi wa rajista kaɗai daga masu kawo kaya masu lasisi. Ku rubuta farashinku ku gaya wa manoma idan kuna samun kwamishon. Ku ba da shawarar abin da manomi ke buƙata, ba abin da ya fi biyan ku ba; ku faɗi a sarari idan amsa mafi kyau ita ce \"ba ku buƙatar sayen komai\". Kada ku taɓa matsa wa mutane, kada ku sayar da bashi da kuka san ba za su iya biya ba, kuma ku raba horo da sayarwa: kowa zai iya zuwa horo ko ya saya ko bai saya ba.",
            "Ku san lissafinku. Misali kawai: idan kuna samun kwamishon XOF 500 a kowane buhu kuma kun sayar da buhu 120 a damina, wannan XOF 60,000 ne, kafin kuɗin mota da lokacinku. Ku ajiye bayani mai sauƙi na sayarwa, kwamishon da kuɗin hidima, kuma ku duba ko ana buƙatar rajistar kasuwanci ko lasisi a ƙasarku don sayar da kayan noma, musamman sinadaran noma (agrochemicals)."
          ],
          steps: ["Ku jera kayan noma da hidimomin da za ku iya bayarwa.", "Ku rubuta farashinku da kwamishon ɗinku a kowanne.", "Ku rubuta dokokinku na gaskiya: kayan gaske, bayyana kwamishon, babu matsi, horo a buɗe ga kowa.", "Ku rubuta sayarwa, kwamishon da kuɗin hidima.", "Ku duba dokokin rajista da lasisi na dillalan kayan noma."],
          words: [["Kwamishon (commission)", "kuɗin da mai sayarwa ke samu a kowane abu da ya sayar, wanda mai kawo kaya ke biya."], ["Kuɗin hidima (service fee)", "kuɗin da ake karɓa don yin wani aiki, kamar fesa magani ko huɗa."], ["Karo da maslaha (conflict of interest)", "lokacin da abin da ya fi biyan ku ba shi ne mafi kyau ga mutumin da kuke ba shawara ba."]],
          slides: [
            { title: "Yadda FBA ke samun kuɗi", bullets: ["Kwamishon kan kayan noma da aka sayar", "Kuɗin hidima: fesa magani, huɗa, tara girbi", "Kawo kayan noma kusa da manoma"] },
            { title: "Gaskiya kasuwanci ne mai kyau", bullets: ["Kayan gaske masu rajista kaɗai", "Rubutattun farashi, bayyana kwamishon", "Shawara tukuna, sayarwa daga baya"] },
            { title: "Babu matsi", bullets: ["An yarda a ce \"ba ku buƙatar saye\"", "Horo a buɗe ga kowa, masu saye ko a'a", "Babu bashin da mutane ba za su iya biya ba"] },
            { title: "Ku san lissafinku", bullets: ["Misali kawai: XOF 500 x buhu 120 = XOF 60,000", "A cire kuɗin mota da lokaci", "Ku duba dokokin lasisi"] }
          ],
          sources: [IDE_FBA],
          tryIt: "Ku rubuta takardar kasuwanci ta FBA mai shafi ɗaya: kayan noma ko hidimomi uku da za ku iya bayarwa, misalin farashi da kwamishon na kowanne, misalin kuɗin da za ku samu a damina ɗaya, da dokokinku biyar na gaskiya.",
          youCanNow: "tsara yadda za ku sami kuɗi a matsayin FBA daga kayan noma da hidimomi yayin da kuke kiyaye amincewar manoma.",
          quickCheck: [
            { objective: "O5", q: "Wace ce dokar gaskiya ta FBA?", options: ["Ku gaya wa manoma idan kuna samun kwamishon", "Ku horar da masu sayen kaya daga gare ku kaɗai", "Ku matsa a sayi kayan da ke da kwamishon mafi girma", "Ku sayar da kayan da ba a yi wa rajista ba idan sun fi arha"], answer: 0, why: "Bayyana kwamishon yana sa shawara ta zama ta gaskiya kuma yana gina amincewa." },
            { objective: "O5", q: "Amfanin gonar wani manomi ba ya buƙatar takin zamani a wannan damina. Ya kamata ku:", options: ["Ku sayar masa duk da haka", "Ku yi shiru ku sayar masa ƙaramin buhu", "Ku gaya masa da gaskiya cewa ba ya buƙatar saye", "Ku ƙi sake ziyartarsa"], answer: 2, why: "Amincewa ta dogon lokaci ta fi sayarwa ɗaya daraja." }
          ]
        },
        {
          title: "Ajiye bayanan horo da tsara ranar horonku",
          objectives: ["O6", "O2", "O3"],
          minutes: 6,
          goal: "Ajiye rajistar horo da izini da tsara cikakkiyar ranar horo.",
          text: [
            "Bayanai suna nuna abin da aikinku ke cimmawa, suna taimaka muku bibiya, kuma su ne abin da shirye-shirye, ƙungiyoyin haɗin gwiwa da masu ɗaukar aiki ke nema. Ku ajiye rajistar horo don kowane zama: rana, wuri, batu, sunan kowane manomi, jinsi, rukunin shekaru (matashi ko a'a) da ƙauye, da lambar waya sai idan ya yarda. Ku rubuta ko kowane manomi ya iya yin fasahar a ƙarshe.",
            "Ku bibiya aƙalla sau ɗaya, misali bayan wata ɗaya ko lokacin girbi: shin sun yi amfani da hanyar, a kan fili nawa ko dabbobi nawa, kuma me ya faru? Ku rubuta sakamakon gonar nuni na kowace gona. A tsawon lokaci za ku iya cewa, misali, \"Na horar da manoma 60; 35 yanzu suna shuka a layi; amfanin masararsu ya ƙaru a matsakaici\", tare da bayanai a matsayin shaida. Kada ku ƙirƙiri lambobi: idan ba ku auna ba, ku faɗi haka.",
            "Ku nemi izini kafin ku rubuta bayanan mutane, ku bayyana dalili, kuma ku ajiye rajistar a ɓoye: a takarda a wuri mai aminci ko a waya mai kulle, ba a ƙungiyar WhatsApp ta jama'a ba. Kenya, Najeriya da sauran ƙasashe suna da dokokin kare bayanai. Yanzu ku haɗa komai don ranar horonku: tsarin darasi, gonar nuni, jerin wuraren turawarku da wannan rajista."
          ],
          steps: ["Ku yi rajista: rana, wuri, batu, suna, jinsi, rukunin shekaru, ƙauye, waya da izini.", "Ku rubuta waɗanda suka iya yin fasahar a ƙarshe.", "Ku bibiya aƙalla sau ɗaya ku rubuta abin da ya canja.", "Ku rubuta sakamakon gonar nuni na kowace gona.", "Ku ajiye rajistar a ɓoye; ku nemi izini tukuna."],
          words: [["Rajistar horo", "jerin waɗanda suka halarci horo, a kan me, da sakamakon."], ["Bibiya (follow-up)", "dubawa daga baya ko manoma sun yi amfani da abin da suka koya da abin da ya faru."], ["Izini (consent)", "yardar mutum a rubuta ko a raba bayanansa."]],
          slides: [
            { title: "Me yasa ake ajiye bayanai", bullets: ["Suna nuna abin da aikinku ke cimmawa", "Bibiyar manoma", "Shirye-shirye da masu ɗaukar aiki suna nema"] },
            { title: "Rajistar horo", bullets: ["Rana, wuri, batu", "Suna, jinsi, rukunin shekaru, ƙauye", "Waya sai da izini; sun iya yi?"] },
            { title: "Bibiya", bullets: ["Aƙalla sau ɗaya: bayan wata ɗaya ko lokacin girbi", "Sun yi amfani da shi? Me ya faru?", "Kada ku taɓa ƙirƙirar lambobi"] },
            { title: "Ku ajiye a ɓoye", bullets: ["Ku nemi izini, ku bayyana dalili", "Takarda a wuri mai aminci ko waya mai kulle", "Ba a ƙungiyar jama'a ba"] }
          ],
          sources: [ODPC, NDPC],
          tryIt: "Aikin ƙarshe: ku tsara ranar horonku. Ku rubuta tsarin darasi na minti 60 zuwa 90 (nunawa, gwadawa, tattaunawa, da fasahar, kayan aiki, lokuta da dubawa), tsarin gonar nuni (gonaki biyu masu girma ɗaya da alama, abu ɗaya da ya bambanta, bayanai da ranakun ziyarar gona), jerin wuraren turawarku da abin da ba za ku ba da shawara a kai ba, da takardar rajistar horo mai layin izini da ranar bibiya.",
          youCanNow: "tsara cikakkiyar ranar horo da ajiye bayanan da ke nuna waɗanda kuka horar da abin da ya canja.",
          quickCheck: [
            { objective: "O6", q: "Kafin ku rubuta lambar wayar manomi a rajistarku, ya kamata ku:", options: ["Ku saka ta a ƙungiya", "Ku nemi izininsa ku bayyana dalili", "Ku kwafe ta daga wani", "Ku rubuta ta ba tare da tambaya ba"], answer: 1, why: "Ana buƙatar izini kafin a rubuta bayanan sirri." },
            { objective: "O6", q: "Ba ku auna amfanin gona bayan horo ba. A rahotonku ya kamata ku:", options: ["Ku yi hasashen lamba mai girma", "Ku kwafe lambobin wani mai horarwa", "Ku bar maganar horon", "Ku faɗi cewa ba a auna amfanin gonar ba"], answer: 3, why: "Bayanai na gaskiya sun fi sakamakon ƙirƙira daraja." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Ba da shawara, samun kuɗi da nuna sakamako",
        questions: [
          { objective: "O4", q: "Wane maganin ƙwari ne mai horar da manoma zai iya ba da shawararsa?", options: ["Duk mai arha daga kasuwa", "Kayan da aka yi wa rajista a ƙasar, a yi amfani da shi kamar yadda label ya ce", "Haɗin sinadarai da yawa na gida", "Duk abin da maƙwabci ya yi amfani da shi"], answer: 1, why: "Kayan da aka yi wa rajista kaɗai, a yi amfani da su kamar yadda label ya ce, da kayan kariya." },
          { objective: "O4", q: "Kafin ku ɗauki bidiyon manomi don bidiyon horo, kuna:", options: ["Neman izininsa", "Ɗaukar bidiyo a ɓoye", "Saka shi tukuna, tambaya daga baya", "Rashin gaya masa kwata-kwata"], answer: 0, why: "Izini yana girmama mutane da gonakinsu." },
          { objective: "O5", q: "Ya kamata horo ya kasance:", options: ["Don masu sayen kaya daga gare ku kaɗai", "Ana biya da kwamishon kaɗai", "A buɗe ga kowa, ko sun saya ko ba su saya ba", "A soke shi idan sayarwa ta yi ƙasa"], answer: 2, why: "Raba horo da sayarwa yana kare amincewa." },
          { objective: "O5", q: "Misali kawai: kwamishon XOF 500 a kowane buhu, an sayar da buhu 120. Jimillar kwamishon ita ce:", options: ["XOF 6,000", "XOF 600", "XOF 620", "XOF 60,000"], answer: 3, why: "500 x 120 = 60,000, kafin kuɗaɗen kashewa." },
          { objective: "O6", q: "A ina ya kamata a ajiye rajistar horo?", options: ["A ɓoye: takarda a wuri mai aminci ko waya mai kulle", "A ƙungiyar WhatsApp ta jama'a", "A allon sanarwa", "A ba kowane mai saye"], answer: 0, why: "Dole a ajiye bayanan sirri a ɓoye." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Zama Mai Horar da Manoma: Faɗakarwar Noma da Masu Ba da Shawara kan Kasuwancin Gona",
    questions: [
      { objective: "O1", q: "Faɗakarwar noma (extension) na nufin:", options: ["Ƙara girman gona", "Taimakon manoma su koyi hanyoyi mafi kyau su yi amfani da su", "Sayar da fili", "Ba da rancen kuɗi"], answer: 1, why: "Faɗakarwar noma shawara ce da koyo ga manoma." },
      { objective: "O1", q: "Babban manomi yawanci shi ne:", options: ["Manomi da ake girmamawa wanda ke karɓar nunin aiki kuma yana koyar da maƙwabta", "Ma'aikacin banki", "Ministan gwamnati", "Mai saye"], answer: 0, why: "Manyan manoma suna koyarwa ta misali a gonakinsu." },
      { objective: "O1", q: "Wace ƙungiya ce ke horar da Masu Ba da Shawara kan Kasuwancin Gona a Zambiya da Mozambik?", options: ["NAFDAC", "Hukumar Yanayi ta Kenya", "iDE", "WOAH"], answer: 2, why: "iDE ce ke gudanar da hanyoyin sadarwar FBA a can." },
      { objective: "O2", q: "Manya sun fi koyon fasahar gona ta:", options: ["Sauraren dogon jawabi", "Karanta doguwar takardar bayani", "Kallon talabijin", "Yin ta da hannunsu"], answer: 3, why: "Koyo ta yin aiki ana tuna shi." },
      { objective: "O2", q: "A zama na minti 90, mafi yawan lokaci ya kamata ya tafi ga:", options: ["Maraba", "Gwada fasahar", "Sayar da kayan noma", "Jira"], answer: 1, why: "Atisaye shi ne inda ake koyon fasahar." },
      { objective: "O2", q: "Me ke taimaka wa ƙarin mata da matasa su halarta?", options: ["Tambayar wane ne ke yin aikin a gida da gayyatarsu, a lokacin da ya dace", "Yin shi ranar kasuwa", "Amfani da harshen da ba sa magana", "Gayyatar shugabannin gida kaɗai"], answer: 0, why: "Gayyatar mutanen da ke yin aikin, a lokaci mai kyau, yana sa horo ya isa gare su." },
      { objective: "O3", q: "Gonar nuni mai adalci tana kwatanta:", options: ["Gonaki biyu masu bambance-bambance da yawa", "Gona ɗaya kawai", "Gonaki masu girma ɗaya da suka bambanta a hanya ɗaya", "Gonarku da ta maƙwabci"], answer: 2, why: "Ku canja abu ɗaya don sakamakon ya sami dalili ɗaya." },
      { objective: "O3", q: "Yaushe ya kamata ku yi ranakun ziyarar gonar nuni?", options: ["Bayan girbi kaɗai", "Ba a taɓa ba", "Kafin shuka kaɗai", "A muhimman matakai kamar fitowar tsiro, fure da girbi"], answer: 3, why: "Manoma suna ganin bambancin yayin da amfanin gona ke girma." },
      { objective: "O3", q: "A cewar FAO, Makarantar Gona ta Manoma tana haɗuwa:", options: ["A kai a kai tsawon dukkan zagayen noma, tare da jagoran da aka horar", "Sau ɗaya, na awa ɗaya", "Ta intanet kaɗai", "A aji kaɗai"], answer: 0, why: "Ƙungiyoyin FFS suna koyo a gona tsawon damina." },
      { objective: "O4", q: "Mai horar da manoma ya kamata ya ba da yawan magani ko na allurar rigakafi:", options: ["Idan an tambaye shi", "Ba a taɓa ba; ya tura manomi wurin likitan dabbobi da label", "Ga kaji kaɗai", "Idan manomi ya dage"], answer: 1, why: "Yawan magani daga likitan dabbobi da label yake zuwa." },
      { objective: "O4", q: "Kaji da yawa sun mutu kwatsam a wata gona. Kuna gaya wa manomin ya:", options: ["Sayar da sauran a kasuwa", "Jira ya gani", "Kai rahoto ga likitan dabbobi ko hukumar lafiyar dabbobi nan take", "Binne su ya yi shiru"], answer: 2, why: "Tana iya zama murar tsuntsaye, cutar da dole a sanar." },
      { objective: "O4", q: "A Najeriya, wace hukuma ce ke yi wa sinadaran noma rajista?", options: ["Babban Bankin Najeriya", "NiMet", "'Yan sanda", "NAFDAC"], answer: 3, why: "NAFDAC ce ke yi wa sinadaran noma rajista a Najeriya." },
      { objective: "O4", q: "Wani manomi ya tambaya game da kwangilar bashi. Kuna:", options: ["Gaya masa ya sa hannu da sauri", "Tura shi ga mai ba da shawara amintacce kuma ku ba da shawarar ya karanta ta duka", "Sa hannu a madadinsa", "Ba shi shawarar ya ƙara aron kuɗi"], answer: 1, why: "Kuɗi da kwangiloli sun fi matsayin mai horar da manoma." },
      { objective: "O5", q: "FBA yawanci yana samun kuɗi daga:", options: ["Kwamishon kan kayan noma da kuɗin hidima", "Albashin gwamnati kaɗai", "Tara daga manoma", "Sayar da bayanan manoma"], answer: 0, why: "FBA 'yan kasuwa ne da ake biya ta kwamishon da kuɗin hidima." },
      { objective: "O5", q: "Mene ne karo da maslaha ga FBA?", options: ["Sayar da iri na gaske", "Rubuta sayarwa", "Lokacin da kayan da ya fi biyan ku ba shi ne mafi kyau ga manomi ba", "Ba da horo"], answer: 2, why: "Dokokin gaskiya suna nan don magance wannan karo." },
      { objective: "O5", q: "Wace ce kyakkyawar al'adar FBA?", options: ["Ɓoye kwamishon ɗinku", "Sayar da bashin da mutane ba za su iya biya ba", "Sayar da kayan da ba su da label", "Rubuta farashinku"], answer: 3, why: "Rubutattun farashi suna sa sayarwa ta zama mai adalci da sarari." },
      { objective: "O6", q: "Rajistar horo ya kamata ta ƙunshi:", options: ["Rana, batu, sunaye da ko kowane manomi ya iya yin fasahar", "Lambobin sirri (PIN) na kuɗin waya na manoma", "Sunan mai horarwa kaɗai", "Babu komai; tunawa ya isa"], answer: 0, why: "Wannan yana nuna waɗanda aka horar da yadda suka iya." },
      { objective: "O6", q: "Me yasa ake bibiyar manoma bayan horo?", options: ["Don a ƙara sayarwa", "Don ganin ko sun yi amfani da hanyar da abin da ya faru", "Domin suna bin ku bashi", "Ba a buƙata"], answer: 1, why: "Bibiya tana nuna sakamako da inda ake buƙatar ƙarin taimako." },
      { objective: "O6", q: "Idan ba ku auna sakamako ba, ya kamata ku:", options: ["Ƙirƙiri lambobi masu kyau", "Yi amfani da lambobin bara", "Faɗi cewa ba a auna su ba", "Kwafe wani rahoto"], answer: 2, why: "Kada ku taɓa ƙirƙirar sakamako." },
      { objective: "O6", q: "Rubuta lambar wayar manomi yana buƙatar:", options: ["Babu komai", "Biyan kuɗi", "Amincewar mai saye", "Izininsa"], answer: 3, why: "Ana rubuta bayanan sirri sai da izini kaɗai." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 6, 8, 9, 10, 13, 14, 16] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Tsarin darasi", objective: "O2", notYet: "Jawabi ba tare da atisaye ba, ko fasahohi da yawa a lokaci ɗaya.", meets: "Fasaha ɗaya, nunawa-gwadawa-tattaunawa da lokuta da kayan aiki, cikin minti 60 zuwa 90, da dubawa cewa kowane manomi zai iya yi.", exceeds: "Yana kuma tsara yadda mata da matasa za su halarta kuma ya haɗa gajeren bidiyon waya ko bibiyar SMS." },
      { name: "Gonar nuni", objective: "O3", notYet: "Babu kwatanci, ko gonakin sun bambanta ta hanyoyi da yawa.", meets: "Gonaki biyu masu girma ɗaya da alama, da suka bambanta a hanya ɗaya, da bayanai da ranakun ziyarar gona.", exceeds: "Ya haɗa yadda za a auna girbin kowace gona a raba sakamakon da gaskiya, ko da sabuwar hanyar ba ta yi nasara ba." },
      { name: "Shawara lafiya da turawa", objective: "O4", notYet: "Yana ba da yawan magani ko ambaton kayan da ba a yi wa rajista ba; babu jerin wuraren turawa.", meets: "Jerin wuraren turawa da lambobin tuntuɓa, da abin da mai horarwa ba zai ba da shawara a kai ba, har da cututtukan da dole a sanar.", exceeds: "Ya ambaci hukumar rajistar magungunan ƙwari ta ƙasa da yadda ake duba jerinta." },
      { name: "Samun kuɗi da adalci", objective: "O5", notYet: "An haɗa horo da saye, ko an ɓoye kwamishon.", meets: "Idan ana sayarwa, rubutattun farashi, bayyana kwamishon da horo a buɗe ga kowa.", exceeds: "Ya haɗa misalin kuɗin damina bayan kuɗaɗen kashewa da doka don faɗin \"ba ku buƙatar saye\"." },
      { name: "Bayanai da matsayi", objective: "O6", notYet: "Babu rajista, ko an raba bayanan sirri a fili.", meets: "Rajista da izini, ranar bibiya da ajiya a ɓoye; an ambaci jami'in faɗakarwa na yankin.", exceeds: "Yana rubuta sakamakon gonar nuni da yadda manoma suka ɗauki hanyar a lokacin bibiya." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka gudanar da aƙalla ranar horo ɗaya cikin kwanaki 30 (binciken biyo baya)",
      "Yawan manoman da kowane mai koyo ya horar, daga rajistar horo",
      "Kason manoman da aka horar da ke amfani da hanyar a lokacin bibiya",
      "Sakamakon gonar nuni idan aka kwatanta da yadda aka saba bayan damina ɗaya",
      "Masu koyo da ke aiki tare da ofishin faɗakarwa na yankinsu ko wani shiri a matsayin manyan manoma ko FBA"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani don gajerun bidiyo, SMS da WhatsApp",
      "Takarda, alƙalami da littafin rubutu don tsarin darasi, tsarin gonar nuni da rajista",
      "Ƙaramin fili don gonar nuni, turaku, igiya da allunan alama",
      "Lambobin tuntuɓar ofishin faɗakarwa na yankin, likitan dabbobi da hukumar rajistar magungunan ƙwari ta ƙasa",
      "Kusan minti 90 gaba ɗaya, tare da lokacin gudanar da ranar horo"
    ],
    facilitatorNotes: [
      "Ku koyar da wannan kwas kamar yadda yake neman masu koyo su koyar: nunawa, gwadawa, tattaunawa, tare da yin tsarin darasi da tsarin gonar nuni a cikin zaman.",
      "Ku haɗa ofishin faɗakarwa na yankin; ku gayyaci jami'in faɗakarwa zuwa Darasi na 1 idan zai yiwu.",
      "Kada ku taɓa bar masu koyo su ba da yawan maganin dabbobi, allurar rigakafi ko hormone ko lokacin jira a wasan kwaikwayo; ku yi atisayen turawa a maimakon haka.",
      "Ga masu son zama FBA, ku yi wasan kwaikwayo na tattaunawar sayarwa inda amsar daidai ita ce \"ba ku buƙatar saye\".",
      "Ku duba cewa rajistar atisaye tana amfani da sunayen ƙage sai dai idan manoma na gaske sun ba da izini.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

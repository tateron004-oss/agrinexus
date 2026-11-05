"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-climate-resilient-agribusiness.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const FAO_CSA = { name: "FAO (Hukumar Abinci da Noma ta Majalisar Ɗinkin Duniya): Climate-Smart Agriculture Sourcebook", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };
const CGIAR_MAIZE = { name: "CGIAR: Masara mai jure fari (climate-smart maize)", url: "https://www.cgiar.org/innovations/climate-smart-maize/" };
const CBK = { name: "Central Bank of Kenya (Babban Bankin Kenya: jerin bankuna da bankunan microfinance masu lasisi)", url: "https://www.centralbank.go.ke" };
const CBN = { name: "Central Bank of Nigeria (Babban Bankin Najeriya: cibiyoyi masu lasisi da kare masu amfani)", url: "https://www.cbn.gov.ng" };
const BOA = { name: "Bank of Agriculture, Najeriya (Bankin Aikin Gona)", url: "https://www.boanig.com" };
const ADB_GH = { name: "Agricultural Development Bank, Ghana (Bankin Bunƙasa Aikin Gona)", url: "https://agricbank.com" };
const GCF = { name: "Green Climate Fund (yana aiki ta gwamnatoci, bankuna da hukumomin da aka amince da su, ba kai tsaye da manoma ba)", url: "https://www.greenclimate.fund" };
const IRA = { name: "Insurance Regulatory Authority, Kenya (ku duba ko kamfanin inshora yana da lasisi)", url: "https://www.ira.go.ke" };
const ABPP = { name: "SNV/Hivos: Bayani kan Africa Biogas Partnership Programme (injin biogas na gida da bio-slurry)", url: "https://snv.org/assets/explore/download/20200526_-_abpp-4bf_factsheet.pdf" };
const FAO_AGROFOR = { name: "FAO: Noma tare da bishiyoyi (agroforestry)", url: "https://www.fao.org/agroforestry/en/" };
const KE_CARBON = { name: "Kenya: The Climate Change (Carbon Markets) Regulations, 2024 (taƙaitawa da cikakken rubutu)", url: "https://climate-laws.org/document/the-climate-change-carbon-markets-regulations-2024_e0fd" };
const VERRA = { name: "Rajistar Verra (ku nemi aikin carbon da suna ko lambar ID)", url: "https://registry.verra.org" };
const GOLD = { name: "Rajistar Gold Standard (ku nemi aikin carbon da suna ko lambar ID)", url: "https://registry.goldstandard.org" };

module.exports = {
  id: "agri-climate-resilient-agribusiness-ha",
  lang: "ha",
  translationOf: "agri-climate-resilient-agribusiness",
  category: "Agriculture (Africa)",
  name: "Kasuwancin Noma Mai Jure Sauyin Yanayi",
  skills: "Auna haɗarin yanayi da kuɗi, Lissafin kuɗin jarin jure yanayi, Nema da tantance kuɗin yanayi, Rage kashe kuɗi da hayaƙi tare, Gane zambar carbon credit, Rubuta shirin jure sauyin yanayi",
  outcome: "rubuta shirin jure sauyin yanayi mai shafi ɗaya don kasuwancin gonarku: haɗarin yanayi da suka fi jawo muku asara, jarin jure yanayi da za ku yi da kuɗinsu, yadda za ku biya su, dabarun rage kashe kuɗi da za ku ƙara, da yadda za ku tantance duk wani tayin carbon credit.",
  about: [
    "Wannan kwas na ƙananan manoma ne da manoman kasuwanci da ke girma, matasa masu kasuwancin noma, shugabannin ƙungiyoyin manoma da jami'an faɗakarwa kan aikin gona (extension officers) a Kenya, Najeriya, Ghana, Senegal, Côte d'Ivoire da sauran Afirka. Suna ganin sauyin yanayi a gonakinsu, kuma suna son su ɗauke shi a matsayin matsalar kasuwanci mai buƙatar shirin kasuwanci.",
    "Babi na 1 yana mayar da haɗarin yanayi zuwa kuɗi: za ku auna haɗarin da kasuwancin gonarku ke fuskanta, ku zaɓi kuma ku lissafa kuɗin jarin jure yanayi kamar irin mai jure fari, ajiyar ruwa, inuwa da sababbin sana'o'i, sannan ku koyi nau'o'in kuɗin yanayi da lamuni na kore (green loans) da yadda ake tantance su. Babi na 2 yana magana kan dabarun da ke rage hayaƙi da kashe kuɗi a lokaci ɗaya, tsare-tsaren carbon credit da yadda ake guje wa zamba da kwangiloli marasa adalci, da ƙara duk wannan a cikin shirin kasuwancinku.",
    "Kwas ɗin \"Climate-Smart Agriculture\" (Noma Mai Jure Sauyin Yanayi) yana magana kan hasashen yanayi na damina da kalandar haɗarin yanayi; ku fara ɗaukarsa idan za ku iya. Duk adadin kuɗi a nan misalai ne kawai: ku yi amfani da farashin wurinku. Wannan kwas yana bayanin yadda kuɗi da kwangiloli ke aiki; ba ya faɗa muku abin da za ku saka jari a ciki. Ku karanta kowace kwangila gaba ɗaya, kuma ku yi magana da mai ba da shawara da kuka amince da shi kafin ku sa hannu. Kowane darasi yana ɗaukar kusan minti biyar, kuma yana ƙarewa da aiki don gonarku."
  ],
  finalTask: "Ku rubuta shirin jure sauyin yanayi mai shafi ɗaya don kasuwancin gonarku (ko gona ta misali kamar eka 3 na masara da wake tare da awaki 6 na madara a Makueni, hekta 4 na koko a Western Region na Ghana, ko hekta 2 na shinkafa da gyaɗa kusa da Kaolack, Senegal): manyan haɗarin yanayi uku tare da kimanin asarar kowanne; jarin jure yanayi biyu ko uku tare da kuɗinsu, amfaninsu na shekara da lokacin da za su dawo da kuɗinsu; yadda za ku biya (ajiya, ƙungiya, lamuni, tallafi) da tambayoyin da za ku yi wa mai ba da lamuni; aƙalla dabaru biyu da ke rage kashe kuɗi da hayaƙi; dokokinku na tantance duk wani tayin carbon credit; da ranar da za ku sake duba shirin.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ƙananan manoma da manoman kasuwanci da ke girma, ma'aikatan gona, matasa masu kasuwancin noma da jami'an faɗakarwa kan aikin gona a faɗin Afirka (Kenya, Najeriya, Ghana da ƙasashen Afirka ta Yamma masu amfani da Faransanci). Da yawa suna da gonaki masu haɗin amfanin gona da dabbobi, kuma suna sayar da wani ɓangare na abin da suke nomawa. Wasu suna riƙe da bayanai masu sauƙi; da yawa ba sa riƙewa.",
    startingPoint: "Suna iya faɗin sauye-sauyen yanayi da suke gani (jinkirin ruwan sama, ɗaukewar ruwa, zafi, ambaliya), kuma da yawa sun san wasu dabarun noma mai jure sauyin yanayi. Kaɗan ne ke sa darajar kuɗi kan haɗarin yanayi, ke kwatanta jarin jure yanayi bisa lokacin dawowar kuɗi, ko suka san yadda ake tantance lamuni na kore ko kwangilar carbon credit.",
    gap: "Bala'o'in yanayi suna shafar kuɗin shiga da biyan lamuni, amma manoma da yawa suna kashe kuɗi kan jure yanayi ba tare da lissafi ba, suna karɓar lamuni ba tare da kwatanta cikakken kuɗinsa ba, ko suna sa hannu a kwangilolin carbon da ba su fahimta ba. Masu koyo suna buƙatar tsara jure sauyin yanayi a matsayin shawarar kasuwanci, su kare kansu daga zamba, kuma su gabatar da shirin da za a amince da shi ga masu ba da lamuni, masu saye da shirye-shirye.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; masu koyo da yawa suna amfani da Turanci a matsayin harshe na biyu, kuma kwas ɗin yana nan a Spanish, Faransanci da Larabci",
      "Na'urori: waya mai sauƙi ko ta zamani, takarda da na'urar lissafi; intanet yana iya zama a hankali ko mai tsada",
      "Lokaci: darussa na minti 4 zuwa 6 da suka dace da aikin gona",
      "Kuɗi: duk adadi misalai ne; ba a ba da farashi, kuɗin ruwa (interest) ko tallafi a matsayin gaskiya ba",
      "Kiyaye kuɗi: babu shawarar saka jari; masu koyo ba sa taɓa raba PIN, lambar shaida ko lambar asusu a ayyukan gwaji"
    ],
    prerequisites: "Bayanan gona masu sauƙi da ribar gona (gross margin) suna taimakawa (\"Kasuwancin Noma da Sarrafa Gona\"). Ana ba da shawarar a fara ɗaukar \"Climate-Smart Agriculture\" (hasashen yanayi da kalandar haɗarin yanayi)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da sana'o'in gonarku da abin da ya faru a damina biyar da suka wuce", action: "auna manyan haɗarin yanayi ga kasuwancin gonarku bisa yiwuwar faruwarsu da yawan kuɗin da za su iya jawo muku asara", standard: "kuna lissafa aƙalla haɗari uku, kowanne da kimanin asara a kuɗin ƙasarku" },
    { id: "O2", condition: "Idan kuna da jarin jure yanayi biyu ko uku da za ku iya yi", action: "lissafa kuɗin kowane jari da kwatanta amfaninsa na shekara da kuɗinsa", standard: "ta amfani da farashin wurinku da nuna lokacin dawowar kuɗi a damina ko shekaru" },
    { id: "O3", condition: "Kafin ku nemi lamuni na yanayi ko na kore, tallafi ko shiri", action: "lissafa tambayoyin da za ku yi wa mai ba da lamuni da tabbatar da cewa yana da lasisi", standard: "da suka shafi cikakken kuɗi, ranakun biya, sharuɗɗa da hukumar da ke kula da shi" },
    { id: "O4", condition: "Idan kuna da dabarun da kuke amfani da su yanzu", action: "gano dabaru biyu da ke rage hayaƙi mai ɗumama duniya (greenhouse gas) kuma suke rage kashe kuɗinku", standard: "kuna faɗin kayan aiki ko kuɗin da kowanne ke ceto" },
    { id: "O5", condition: "Idan an kawo muku tayin carbon credit ko kwangila", action: "duba tayin don alamun gargaɗin zamba ko yarjejeniya marar adalci", standard: "kuna amsa aƙalla tambayoyin bincike huɗu kafin ku sa hannu ko ku biya komai" },
    { id: "O6", condition: "Ta amfani da aikinku daga wannan kwas", action: "rubuta shirin jure sauyin yanayi mai shafi ɗaya don kasuwancin gonarku", standard: "mai haɗari, jari, kuɗi, hanyoyin biya, dabarun rage kashe kuɗi da ranar sake dubawa" }
  ],
  chapters: [
    {
      name: "Babi na 1: Haɗarin yanayi haɗarin kasuwanci ne",
      lessons: [
        {
          title: "Auna haɗarin yanayi ga kasuwancin gonarku",
          objectives: ["O1"],
          minutes: 5,
          goal: "Auna haɗarin yanayi ga kasuwancin gonarku bisa yiwuwar faruwarsu da asarar kuɗi.",
          text: [
            "Kalandar haɗarin yanayi tana nuna lokacin da yanayi ke cutar da gonarku. Auna haɗarin yanayi yana ƙara mataki ɗaya: yana tambayar nawa kowane haɗari zai iya jawo wa kasuwancinku asara, don ku san waɗanda za ku fara kashe kuɗi a kansu.",
            "Ga kowace sana'a (masara, tumatir, awaki, koko, kifin tilapia), ku lissafa bala'o'in yanayi: jinkirin farkon ruwan sama, ɗaukewar ruwa lokacin fure, zafi mai cutar da dabbobi, ambaliya, iska mai ƙarfi, sababbin ƙwari. Ku yi tambayoyi biyu game da kowanne: Yaya yiwuwar faruwarsa a damina biyar masu zuwa (kaɗan, matsakaici ko mai yawa)? Kuma idan ya faru, nawa za ku yi asara a kuɗin shiga? Ku yi amfani da bayananku, kuma ku tambayi manoma tsofaffi abin da ya faru a shekarun wahala na baya.",
            "Sannan ku yi tunani game da kasuwancin gaba ɗaya, ba gona kaɗai ba: Za ku iya biyan lamuni a shekarar wahala? Masu saye za su ci gaba da karɓar amfaninku idan ingancinsa ya ragu? Ma'aikata za su iya zuwa gona lokacin ambaliya? Ɗaukewar ruwa da ke rage buhunan masara daga 40 zuwa 25 ba matsalar girbi ba ce kawai; matsalar kuɗin da ke shigowa da fita (cash flow) ce ma.",
            "Ku sa haɗarin a tebur mai sauƙi ku jera su. Haɗarin da ke da yiwuwar faruwa kuma suke da tsada su ne a saman shirinku."
          ],
          steps: ["Ku lissafa sana'o'inku.", "A ƙarƙashin kowace, ku lissafa bala'o'in yanayi daga gogewarku da kalandar haɗarinku.", "Ku sa yiwuwar faruwar kowane bala'i: kaɗan, matsakaici ko mai yawa.", "Ku kimanta kuɗin da za a yi asara idan ya faru, a kuɗin ƙasarku.", "Ku jera: masu yiwuwa kuma masu tsada a farko.", "Ku ƙara tasirin kasuwanci: biyan lamuni, kwangilolin masu saye, ma'aikata, sufuri."],
          words: [["Auna haɗarin yanayi (climate-risk assessment)", "jerin bala'o'in yanayi da kasuwancinku ke fuskanta, yiwuwar faruwar kowanne da nawa zai iya jawowa na asara."], ["Bala'i (hazard)", "abin da zai iya jawo cuta, kamar fari, ambaliya ko zafi."], ["Yiwuwar faruwa (likelihood)", "yadda wani abu zai iya faruwa."], ["Tasiri (impact)", "yawan ɓarna ko asarar kuɗi da wani abu ke jawowa."]],
          slides: [
            { title: "Daga kalanda zuwa kuɗi", bullets: ["Kalanda: lokacin da yanayi ke cutarwa", "Auna haɗari: nawa yake jawo wa kasuwancinku asara", "Ku fara kashe kuɗi kan manyan haɗari"] },
            { title: "Tambayoyi biyu ga kowane bala'i", bullets: ["Yaya yiwuwar faruwarsa a damina biyar masu zuwa?", "Nawa za a yi asara a kuɗin shiga idan ya faru?", "Ku yi amfani da bayanai da tunanin manoma tsofaffi"] },
            { title: "Ku yi tunani fiye da gona", bullets: ["Biyan lamuni a shekarar wahala", "Kwangilolin masu saye da inganci", "Ma'aikata, sufuri, ajiya"] },
            { title: "Ku jera haɗarin", bullets: ["Mai yiwuwa + mai tsada = saman shirin", "Misali: ɗaukewar ruwa ta rage buhu 40 zuwa 25", "Wannan matsalar kuɗin shiga da fita ce ma"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Ku yi tebur mai layi huɗu a tsaye: bala'i, yiwuwar faruwa (kaɗan, matsakaici, mai yawa), kimanin asarar kuɗi, da tasiri a kasuwanci. Ku cike aƙalla bala'o'i uku don gonarku, ku zagaye wanda ya fi girma.",
          youCanNow: "auna haɗarin yanayi ga kasuwancin gonarku bisa yiwuwar faruwarsu da yawan asarar da za su iya jawowa.",
          quickCheck: [
            { objective: "O1", q: "Wane haɗari ne ya kamata ya kasance a saman shirin haɗarin yanayi na gona?", options: ["Wanda ba zai yiwu ba kuma marar tsada", "Wanda zai iya faruwa kuma zai jawo asara mai yawa", "Wanda yake shafar maƙwabci kaɗai", "Wanda ya faru sau ɗaya shekaru 40 da suka wuce"], answer: 1, why: "Haɗarin da ke da yiwuwar faruwa kuma masu tsada suna yin mafi yawan ɓarna ga kasuwanci, don haka su ne a farko." },
            { objective: "O1", q: "Ɗaukewar ruwa ta rage girbin masarar wata manomiya, kuma ba ta iya biyan lamuninta a kan lokaci. Me wannan yake nunawa?", options: ["Haɗarin yanayi yana shafar girbi kaɗai", "Yanayi ba ya taɓa shafar lamuni", "Haɗarin yanayi yana shafar kuɗin shiga da fita da biyan lamuni ma", "Ya kamata manomiyar ta daina riƙe bayanai"], answer: 2, why: "Auna haɗarin yanayi yana duba kasuwancin gaba ɗaya, har da kuɗin shiga da fita da basussuka." }
          ]
        },
        {
          title: "Zaɓa da lissafin kuɗin jarin jure yanayi",
          objectives: ["O2"],
          minutes: 6,
          goal: "Lissafa kuɗin jarin jure yanayi biyu ku kwatanta lokacin dawowar kuɗinsu.",
          text: [
            "Jarin jure yanayi shi ne kuɗi ko aikin da kuke kashewa yanzu don ku rage asara a shekarun wahala. Waɗanda aka saba gani a Afirka su ne irin mai jure fari ko mai saurin nuna (cibiyoyin CGIAR kamar CIMMYT sun samar da masara mai jure fari), ajiyar ruwa (tankuna, tafkuna masu shimfiɗa), bishiyoyin inuwa don koko, kofi ko dabbobi, ingantattun gidajen dabbobi, da ƙara sana'a: ƙara amfanin gona na biyu, awaki, kaji ko kifi don kada shekara ɗaya mara kyau ta karya ku.",
            "Ga kowane zaɓi, ku rubuta kuɗinsa (saye, gini, aiki, kulawa) da amfaninsa na shekara (ƙarin girbi a shekarar wahala, rage sayen abinci, sabon kuɗin shiga). Sannan ku lissafa lokacin dawowar kuɗi (payback): kuɗin jarin a raba da amfaninsa na shekara yana ba ku kimanin shekarun da zai ɗauka kafin ya biya kansa. Ku tuna cewa wasu amfanin suna zuwa ne kawai a shekarun wahala, don haka ku raba su a kan damina da yawa.",
            "Misali da adadi na ƙirƙira: wani manomi a Machakos yana kwatanta tankin ruwa na KES 60,000 da ke ceton kimanin KES 20,000 a shekara na ruwan da ake saya da kayan lambun da ake rasawa (dawowar kuɗi kimanin shekara 3), da irin mai jure fari da ke ƙarin KES 2,000 a kowace eka kuma yana ceton kimanin KES 8,000 a shekarar fari da ke zuwa shekara ɗaya cikin biyu (matsakaicin KES 4,000 a shekara, dawowar kuɗi a damina ta farko). Duka biyun suna iya dacewa; irin ya fi sauƙin farawa.",
            "Ku kuma duba: Za ku iya kula da shi? Ya dace da ma'aikatanku da ƙasarku? Yana aiki a shekara mai kyau ma? Ku tambayi jami'in faɗakarwarku waɗanne irin da tsare-tsare ne suka dace da yankinku."
          ],
          steps: ["Ku ɗauki babban haɗarinku daga Darasi na 1.", "Ku lissafa jari biyu ko uku da ke rage shi.", "Ku rubuta cikakken kuɗin kowanne: saye, gini, aiki, kulawa.", "Ku kimanta amfanin shekara, matsakaici a kan shekaru masu kyau da na wahala.", "Dawowar kuɗi = kuɗin jari ÷ amfanin shekara.", "Ku duba ma'aikata, kulawa da dacewa tare da shawarar faɗakarwa."],
          words: [["Jarin jure yanayi (adaptation investment)", "kuɗi ko aikin da ake kashewa yanzu don a rage asara idan yanayi ya buga."], ["Dawowar kuɗi (payback)", "lokacin da ake ɗauka kafin kuɗin da jari ke ceto ko samarwa ya biya kuɗinsa."], ["Ƙara sana'a (diversification)", "samun hanyar kuɗin shiga fiye da ɗaya don kada gazawar ɗaya ta karya kasuwancin."]],
          slides: [
            { title: "Jarin jure yanayi da aka saba gani", bullets: ["Irin mai jure fari ko mai saurin nuna", "Ajiyar ruwa: tankuna, tafkuna masu shimfiɗa", "Bishiyoyin inuwa, ingantattun gidajen dabbobi", "Sababbin sana'o'i: awaki, kaji, kifi"] },
            { title: "Kuɗi da amfani", bullets: ["Kuɗi: saye, gini, aiki, kulawa", "Amfani: asarar da aka guje wa, sabon kuɗin shiga", "Ku raba amfanin shekarun wahala a kan damina da yawa"] },
            { title: "Dawowar kuɗi (misalin KES na ƙirƙira)", bullets: ["Tanki 60,000 ÷ 20,000 a shekara = kimanin shekara 3", "Iri +2,000 a eka ÷ 4,000 a shekara = damina ta farko", "Ku yi amfani da farashin wurinku"] },
            { title: "Kafin ku zaɓa", bullets: ["Za ku iya kula da shi?", "Ya dace da ƙasarku da ma'aikatanku?", "Ku tambayi faɗakarwa abin da ya dace da yankinku"] }
          ],
          sources: [CGIAR_MAIZE, FAO_CSA],
          tryIt: "Don babban haɗarinku, ku lissafa kuɗin jarin jure yanayi biyu da farashin wurinku. Ku rubuta kuɗin, matsakaicin amfanin shekara da lokacin dawowar kuɗin kowanne, sannan ku zagaye wanda za ku fara da shi ku faɗi dalili.",
          youCanNow: "lissafa kuɗin jarin jure yanayi da kwatanta su bisa lokacin dawowar kuɗinsu.",
          quickCheck: [
            { objective: "O2", q: "Ragar inuwa tana kai GHS 3,000 kuma tana ceton kimanin GHS 1,000 a shekara na tumatirin da ake rasawa. Mene ne kimanin lokacin dawowar kuɗi?", options: ["Wata 3", "Shekara 1", "Shekara 10", "Kimanin shekara 3"], answer: 3, why: "Dawowar kuɗi ita ce kuɗin jari a raba da amfanin shekara: 3,000 ÷ 1,000 = kimanin shekara 3 (adadi na misali)." },
            { objective: "O2", q: "Irin mai jure fari yana taimakawa ne kawai a shekarun fari, da ke zuwa kusan shekara ɗaya cikin uku. Yaya za ku ƙirga amfaninsa?", options: ["Ku raba ceton shekarar fari a kan dukkan shekarun", "Ku ƙirga ceton shekarar fari kowace shekara", "Kada ku ƙirga wani amfani kwata-kwata", "Ku ƙirga shi ne kawai a shekarun ruwa mai yawa"], answer: 0, why: "Amfanin da ke zuwa a shekarun wahala kaɗai ya kamata a raba shi a kan shekaru masu kyau da na wahala." }
          ]
        },
        {
          title: "Kuɗin yanayi da lamuni na kore",
          objectives: ["O3"],
          minutes: 5,
          goal: "Lissafa tambayoyin da za ku yi kafin karɓar lamuni na yanayi ko na kore, ku tabbatar mai ba da lamunin yana da lasisi.",
          text: [
            "Kuɗin yanayi (climate finance) kuɗi ne na jure sauyin yanayi ko rage hayaƙi. Manyan asusu kamar Green Climate Fund ba sa ba manoma lamuni kai tsaye; suna aiki ta gwamnatoci, bankuna da hukumomi. Abin da ke kaiwa ga manoma yawanci yana zuwa ne kamar haka: lamuni na kore ko na yanayi daga bankuna, bankunan microfinance da SACCO (don tankuna, famfunan hasken rana, kayan ban ruwa na ɗigo, biogas); tsarin biya-a-hankali (pay-as-you-go) daga masu sayar da kayan aiki; shirye-shiryen gwamnati ko ƙungiyoyi masu zaman kansu (NGO) da ke raba kuɗin iri, tankuna ko bishiyoyi; da tallafi ko kuɗin haɗin gwiwa ga ƙungiyoyi da ƙungiyoyin haɗin kai (cooperatives).",
            "Inda za ku tambaya: bankinku ko SACCO, ƙungiyar haɗin kanku, ofishin aikin gona na gundumarku ko jiharku da jami'in faɗakarwa, da bankunan aikin gona kamar Bank of Agriculture a Najeriya ko Agricultural Development Bank a Ghana. Shirye-shirye suna canjawa sau da yawa, don haka ku tambayi abin da ke buɗe yanzu, ku karɓi bayanan a rubuce.",
            "Sunan \"kore\" ba ya sa lamuni ya zama mai araha ko lafiya. Ku kwatanta cikakken kuɗi (kuɗin ruwa, kuɗaɗe, inshora), lokacin da biyan kuɗi ke faɗuwa (ya dace da lokacin girbinku?), abin da zai faru idan girbi ya lalace, da duk wani sharaɗi (masu sayarwa da aka amince da su, horo, inshora). Ku tabbatar mai ba da lamunin yana da lasisi: a Kenya a jerin Central Bank of Kenya, a Najeriya a wurin Central Bank of Nigeria, a wasu wurare a wurin babban bankin ƙasarku ko hukumar kula da ƙungiyoyin haɗin kai.",
            "Kada ku taɓa biyan wakili \"kuɗin sarrafa takarda\" (processing fee) don samun tallafi ko lamuni, kuma kada ku taɓa raba PIN ɗinku ko lambar kuɗin waya (mobile money)."
          ],
          steps: ["Ku yanke abin da kuɗin zai saya da lokacin dawowar kuɗinsa (Darasi na 2).", "Ku tambayi bankinku, SACCO, ƙungiyar haɗin kai da ofishin aikin gona abin da ke buɗe yanzu.", "Ku karɓi cikakken kuɗi, ranakun biya da sharuɗɗa a rubuce.", "Ku duba mai ba da lamunin a jerin babban banki ko hukumar da ke kula da shi.", "Ku tambaya: me zai faru idan girbina ya lalace?", "Ku yi magana da mai ba da shawara da kuka amince da shi kafin ku sa hannu."],
          words: [["Kuɗin yanayi (climate finance)", "kuɗi don jure sauyin yanayi ko rage hayaƙi."], ["Lamuni na kore (green loan)", "lamuni don abin da ke taimakon muhalli, kamar famfon hasken rana ko injin biogas."], ["SACCO", "ƙungiyar haɗin kai ta ajiya da lamuni wadda membobinta ne masu ita."], ["Biya-a-hankali (pay-as-you-go)", "biyan kayan aiki a ƙananan kuɗaɗe a kai a kai, sau da yawa ta kuɗin waya."]],
          slides: [
            { title: "Yadda kuɗin yanayi ke kaiwa ga manoma", bullets: ["Lamuni na kore: bankuna, microfinance, SACCO", "Tsarin biyan kayan aiki a hankali (pay-as-you-go)", "Shirye-shiryen raba kuɗi da tallafin ƙungiyoyi"] },
            { title: "Inda za ku tambaya", bullets: ["Bankinku, SACCO ko ƙungiyar haɗin kai", "Ofishin aikin gona da jami'in faɗakarwa", "Bankunan aikin gona, misali Bank of Agriculture (NG), ADB (GH)"] },
            { title: "Kore ba yana nufin mai araha ba", bullets: ["Cikakken kuɗi: kuɗin ruwa + kuɗaɗe + inshora", "Biyan kuɗi ya dace da girbinku?", "Idan girbi ya lalace fa?"] },
            { title: "Ku kasance lafiya", bullets: ["Mai ba da lamuni yana da lasisi? Ku duba jerin babban banki", "Kada ku taɓa biyan wakili \"kuɗin sarrafa takarda\"", "Kada ku taɓa raba PIN ko code ɗinku"] }
          ],
          sources: [GCF, CBK, CBN, BOA, ADB_GH],
          tryIt: "Ku rubuta tambayoyi biyar da za ku yi wa mai ba da lamuni ko shiri game da jarin da kuka zaɓa a Darasi na 2. Ku haɗa da cikakken kuɗi, ranakun biya, sharuɗɗa, abin da zai faru idan girbi ya lalace, da yadda za ku tabbatar suna da lasisi.",
          youCanNow: "lissafa tambayoyin da za ku yi game da lamuni na yanayi ko na kore, da tabbatar da cewa mai ba da lamunin yana da lasisi.",
          quickCheck: [
            { objective: "O3", q: "Wani wakili ya ce za ku sami tallafin yanayi idan kun fara aika KES 3,000 a matsayin kuɗin sarrafa takarda. Me za ku yi?", options: ["Ku biya da sauri kafin tallafin ya rufe", "Ku aika rabi yanzu, rabi daga baya", "Ku ƙi; shirye-shiryen gaske ba sa sa wakilai su karɓi kuɗaɗe kamar haka", "Ku ba wakilin PIN ɗin kuɗin wayarku a maimakon haka"], answer: 2, why: "\"Kuɗin sarrafa takarda\" da ake biyan wakilai tun farko zamba ce da aka saba gani; ku tabbatar da shirin a ofishin hukuma." },
            { objective: "O3", q: "Wace tambaya ce ta fi muhimmanci idan ana kwatanta lamuni na kore biyu don famfon hasken rana?", options: ["Wanne ne yake da tambarin (logo) mafi kyau", "Cikakken kuɗi da ko biyan kuɗi ya dace da lokacin girbinku", "Wane wakili ne ya fi abokantaka", "Wanne ne ake kira kore"], answer: 1, why: "Cikakken kuɗi da lokacin biya ne ke nuna ko za ku iya ɗaukar lamunin, ko mene ne sunansa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Haɗarin yanayi haɗarin kasuwanci ne",
        questions: [
          { objective: "O1", q: "Me auna haɗarin yanayi ke ƙarawa a kan kalandar haɗarin yanayi?", options: ["Sunayen watanni", "Hasashen ruwan sama", "Yiwuwar faruwar kowane haɗari da nawa zai iya jawo wa kasuwanci asara", "Jerin amfanin gona da za a daina nomawa"], answer: 2, why: "Auna haɗari yana sa yiwuwar faruwa da asarar kuɗi a kan kowane haɗari don ku iya jera su." },
          { objective: "O1", q: "Ambaliya tana yanke hanyar zuwa wurin mai sayen amfaninku na mako biyu kowace shekara. Ina wannan zai shiga?", options: ["Babu inda; ba game da girbi ba ne", "A cikin tasirin kasuwanci na auna haɗarin yanayinku", "A littafin tarihinku kaɗai", "A shirin mai saye, ba naku ba"], answer: 1, why: "Haɗarin yanayi ga sufuri, masu saye da ma'aikata haɗarin kasuwanci ne, kuma suna cikin auna haɗari." },
          { objective: "O2", q: "Wani mai kiwon kifin tilapia a Najeriya yana kwatanta shimfiɗar tafki ta NGN 400,000 da ke ceton NGN 200,000 a shekara. Mene ne lokacin dawowar kuɗi?", options: ["Kimanin shekara 2", "Kimanin shekara 20", "Kimanin wata 2", "Ba zai taɓa dawowa ba"], answer: 0, why: "400,000 ÷ 200,000 = kimanin shekara 2 (adadi na misali)." },
          { objective: "O2", q: "Wanne ne misalin ƙara sana'a a matsayin jarin jure yanayi?", options: ["Shuka irin masara ɗaya a ƙarin fili", "Sayar da dukkan awakinku", "Ƙara karɓar lamuni don amfanin gona ɗaya", "Ƙara kiwon kaji a gonar masara don kada shekara ɗaya mara kyau ta karya ku"], answer: 3, why: "Hanyar kuɗin shiga ta biyu tana raba haɗarin yanayi a cikin kasuwancin." },
          { objective: "O3", q: "Yaya manomi a Kenya zai tabbatar cewa mai ba da lamuni na kore yana da lasisi?", options: ["Ya tambayi wakilin mai ba da lamunin", "Ya duba jerin cibiyoyi masu lasisi na Central Bank of Kenya", "Ya duba yawan \"likes\" ɗinsa a kafofin sada zumunta", "Ya amince da shi idan ya ce \"kore\""], answer: 1, why: "Babban banki yana wallafa jerin bankuna da bankunan microfinance masu lasisi." }
        ]
      }
    },
    {
      name: "Babi na 2: Rage kashe kuɗi, carbon da tsari",
      lessons: [
        {
          title: "Rage hayaƙi da ke ceton kuɗi ma",
          objectives: ["O4"],
          minutes: 5,
          goal: "Gano dabaru biyu a gonarku da ke rage hayaƙi da kashe kuɗi a lokaci ɗaya.",
          text: [
            "Rage hayaƙi (mitigation) yana nufin rage iskar gas mai ɗumama duniya da gona ke fitarwa, ko ajiye ƙarin carbon a ƙasa da bishiyoyi. Ga manomi, mafi kyawun rage hayaƙi shi ne wanda ke ceton kuɗi ma, domin kuna samun riba ko da babu wanda ya biya ku kuɗin carbon ɗin.",
            "Rage ɓarnar taki: takin da ruwan sama, iska ko lokacin da bai dace ba suka ɓata kuɗi ne da aka rasa, kuma yana fitar da iskar gas. Sanya shi kusa da saiwoyi a lokacin da ya dace, da ƙara taki na dabbobi da takin gargajiya (compost), suna kawo ƙarin girbi daga kowane buhu. Biogas: injin biogas na gida (biodigester) yana mayar da kashin shanu ko aladu zuwa iskar girki, yana rage abin da kuke kashewa kan itace ko gawayi, kuma ruwan da ya rage (bio-slurry) taki ne. Africa Biogas Partnership Programme ya taimaka wajen sanya injin biogas na gida a Kenya, Burkina Faso da wasu ƙasashe.",
            "Noma tare da bishiyoyi (agroforestry): bishiyoyi a gona suna ajiye carbon kuma suna iya ba da 'ya'yan itace, abincin dabbobi, itacen girki, katako da inuwa (misali bishiyoyin inuwa a gonakin koko a Côte d'Ivoire da Ghana), suna rage abin da kuke saya. Sauran hanyoyin ceto: rashin ƙona ragowar amfanin gona (yana riƙe da sinadarai kuma yana ceton taki), ingantaccen abinci ga dabbobi (ƙarin madara daga kowace dabba), da famfunan hasken rana maimakon na dizal (rage kuɗin aiki).",
            "Ku rubuta ceton a kuɗi. Idan injin biogas yana kai XOF 500,000 kuma yana ceton XOF 120,000 a shekara na gawayi da taki (adadi na ƙirƙira), za ku iya lissafa lokacin dawowar kuɗinsa kamar kowane jari."
          ],
          steps: ["Ku lissafa kayan aikin da kuka fi saya: taki, mai, abincin dabbobi, itacen girki.", "Ga kowanne, ku nemo dabara da ke amfani da ƙasa da shi ko ke maye gurbinsa.", "Ku kimanta kuɗin da za a ceto a shekara.", "Ku duba kuɗin da lokacin dawowar kuɗi.", "Ku zaɓi biyu don farawa."],
          words: [["Rage hayaƙi (mitigation)", "rage fitar da iskar gas mai ɗumama duniya, ko ajiye ƙarin carbon a ƙasa da bishiyoyi."], ["Injin biogas (biodigester)", "tanki a rufe inda kashi ke ruɓewa yana samar da iskar biogas don girki ko haske."], ["Bio-slurry", "ruwan da ya rage bayan an yi biogas; ana iya amfani da shi a matsayin taki."], ["Noma tare da bishiyoyi (agroforestry)", "shuka bishiyoyi tare da amfanin gona ko dabbobi a ƙasa ɗaya."]],
          slides: [
            { title: "Rage hayaƙi da ke biya", bullets: ["Yana rage hayaƙi ko ajiye carbon", "Yana rage kashe kuɗinku ma", "Kuna amfana ko babu biyan kuɗin carbon"] },
            { title: "Hanyoyi uku na ceton kuɗi", bullets: ["Rage ɓarnar taki: wurin da ya dace, lokacin da ya dace", "Biogas: iskar girki + takin bio-slurry", "Bishiyoyi a gona: 'ya'yan itace, abincin dabbobi, itace, inuwa"] },
            { title: "Ƙarin hanyoyin ceto", bullets: ["Kada ku ƙona ragowar amfanin gona", "Ingantaccen abinci: ƙarin madara daga kowace dabba", "Hasken rana maimakon dizal wajen famfo"] },
            { title: "Ku sa shi a kuɗi", bullets: ["Misali: injin biogas na XOF 500,000", "Yana ceton XOF 120,000 a shekara (na ƙirƙira)", "Dawowar kuɗi kimanin shekara 4"] }
          ],
          sources: [ABPP, FAO_AGROFOR, FAO_CSA],
          tryIt: "Ku lissafa kayan aiki uku da kuka fi kashe kuɗi a kansu. Ga kowanne, ku rubuta dabara ɗaya da za ta rage amfani da shi, ku kimanta kuɗin da za a ceto a shekara. Ku zaɓi biyu ku sa a shirinku.",
          youCanNow: "gano dabarun da ke rage hayaƙi da kashe kuɗi duka, da sa ceton a kuɗi.",
          quickCheck: [
            { objective: "O4", q: "Wace dabara ce ke rage hayaƙi kuma tana ceton kuɗin mai kiwon aladu?", options: ["Ƙona kashi a fili", "Sayen ƙarin gawayi", "Barin kashi a tari kusa da kogi", "Injin biogas da ke samar da iskar girki da takin bio-slurry"], answer: 3, why: "Biogas yana maye gurbin man girkin da ake saya, kuma bio-slurry yana maye gurbin wani ɓangare na taki." },
            { objective: "O4", q: "Me yasa rage ɓarnar taki zaɓi ne mai kyau na rage hayaƙi ga manomi?", options: ["Yana ceton kuɗi tare da rage hayaƙi", "Yana sa ƙasa ta yi tauri", "Yana nufin ba za ku sake sa taki ba har abada", "Kowane mai saye yana buƙatarsa"], answer: 0, why: "Rage ɓarna yana nufin ƙarin girbi daga kowane buhu, don haka manomi yana ceton kuɗi kuma yana rage hayaƙi." }
          ]
        },
        {
          title: "Carbon credit: dama, zamba da kwangiloli marasa adalci",
          objectives: ["O5"],
          minutes: 6,
          goal: "Duba tayin carbon credit don alamun gargaɗi kafin ku sa hannu ko ku biya komai.",
          text: [
            "Carbon credit takardar shaida ce da ke cewa an hana tan ɗaya na carbon dioxide shiga iska ko an ajiye shi, misali ta shuka bishiyoyi, gyara ƙasa ko amfani da murhu mai tsabta. Kamfanoni suna sayen credit. Wasu ayyuka suna biyan manoma ko al'umma kan dabarun da ke ajiye carbon. Ayyukan gaske suna rajista da wani mizani kamar Verra ko Gold Standard, kuma ana iya bincika rajistarsu da sunan aikin.",
            "Ku yi hankali sosai. Biyan kuɗin carbon sau da yawa ƙanana ne, a hankali suke zuwa (wani lokaci shekaru bayan kun fara) kuma ba tabbas, kuma ana fara cire kuɗin aunawa da dubawa. Zamba da yarjejeniyoyi marasa adalci sun zama ruwan dare: mutanen da ke neman manoma su biya kuɗi don \"shiga\", ke alƙawarin biya mai yawa da sauri, ko ke neman ku sa hannu a dogayen kwangiloli da ke ba da haƙƙin ƙasarku, bishiyoyinku ko carbon ɗinku na shekaru 20 ko fiye.",
            "Alamun gargaɗi: dole ku biya don shiga; ana alƙawarin biya mai yawa da sauri; ba za ku iya ɗaukar kwangilar ku je ku karanta ba; ba a harshen da kuka fahimta ba ne; tana ba wani haƙƙi kan ƙasarku ko bishiyoyinku, ko tana hana ku sare ko sayar da su; ba ta faɗi nawa za ku samu, yaushe, da wane kaso ne ke zuwa ga mai aikin ba; aikin ba ya kowace rajista.",
            "Wasu ƙasashe yanzu suna da dokoki. Climate Change (Carbon Markets) Regulations, 2024 na Kenya suna buƙatar amincewa da ayyukan carbon, kuma ga ayyuka a ƙasar al'umma, yarjejeniyar bunƙasa al'umma kan yadda za a raba amfanin. Ku duba dokokin ƙasarku a ma'aikatar muhalli. Kada ku taɓa sa hannu a ranar da aka kawo; ku karanta duka, ku tambayi ƙungiyar haɗin kanku, lauya ko mai ba da shawara da kuka amince da shi, kuma ku ajiye kwafi."
          ],
          steps: ["Ku tambaya: mene ne sunan aikin da lambar ID ɗinsa a rajista?", "Ku nemo shi a rajista (Verra, Gold Standard ko wasu).", "Ku tambayi nawa za a biya ku, yaushe, da wane kaso ne mai aikin ke riƙewa.", "Ku karanta waɗanne haƙƙoƙi kan ƙasa, bishiyoyi ko carbon kuke bayarwa, da tsawon lokaci.", "Ku ƙi duk wani kuɗin shiga.", "Ku ɗauki kwangilar ku tafi; ku nemi shawara kafin sa hannu; ku ajiye kwafi."],
          words: [["Carbon credit", "takardar shaida ta tan ɗaya na carbon dioxide da aka hana shiga iska ko aka ajiye."], ["Mai aikin carbon (carbon project developer)", "kamfanin da ke gudanar da aikin carbon kuma yake sayar da credit."], ["Rajista (registry)", "jerin hukuma na jama'a na ayyukan carbon da credit ɗinsu."], ["Raba amfani (benefit sharing)", "yadda ake raba kuɗin credit tsakanin mai aikin, manoma da al'umma."]],
          slides: [
            { title: "Mene ne carbon credit", bullets: ["Tan 1 na CO2 da aka hana shiga iska ko aka ajiye", "Kamfanoni suna sayen su", "Ayyukan gaske suna kan rajista (Verra, Gold Standard)"] },
            { title: "Gaskiyar al'amari", bullets: ["Biya sau da yawa ƙanƙani ne, a hankali, ba tabbas", "Ana fara cire kuɗin aunawa", "Wasu tayi zamba ne"] },
            { title: "Alamun gargaɗi", bullets: ["Kuɗin shiga; alƙawarin kuɗi mai yawa da sauri", "Ba za ku iya ɗaukar kwangilar ku karanta ba", "Haƙƙi kan ƙasarku ko bishiyoyinku na shekaru da yawa", "Babu ID na rajista; babu bayyanannen kason biya"] },
            { title: "Ku kare kanku", bullets: ["Kenya: Carbon Markets Regulations 2024", "Ku duba ma'aikatar muhalli ta ƙasarku", "Kada ku sa hannu a ranar; ku nemi shawara; ku ajiye kwafi"] }
          ],
          sources: [VERRA, GOLD, KE_CARBON],
          tryIt: "Ku rubuta jerin tambayoyi aƙalla biyar da za ku yi kafin ku shiga kowane tsarin carbon credit. Sannan ku yi tunanin wani wakili ya yi wa ƙungiyarku tayin XOF 50,000 ga kowane manomi idan kun sa hannu yau kuma kun biya XOF 5,000 don rajista: ku nuna waɗanne alamun gargaɗi wannan tayin yake da su.",
          youCanNow: "duba tayin carbon credit don alamun gargaɗin zamba ko kwangila marar adalci.",
          quickCheck: [
            { objective: "O5", q: "Wani wakilin carbon yana neman kowane manomi ya biya NGN 10,000 don shiga, kuma yana alƙawarin biya a wata mai zuwa. Mene ne wannan mai yiwuwa?", options: ["Aiki na yau da kullum da aka yi wa rajista", "Tallafin gwamnati", "Zamba ko tayi marar adalci sosai", "Horo kyauta"], answer: 2, why: "Kuɗin shiga da alƙawarin kuɗi mai yawa da sauri alamun gargaɗi ne na zambar carbon." },
            { objective: "O5", q: "Me ya kamata ku nema a kwangilar carbon kafin ku sa hannu?", options: ["Nawa za ku samu, yaushe, da waɗanne haƙƙoƙi kan ƙasa ko bishiyoyi kuke bayarwa da tsawon lokaci", "Launin tambarin (logo) kaɗai", "Ko wakilin yana da abokantaka", "Babu komai, idan aikin game da bishiyoyi ne"], answer: 0, why: "Biya, lokaci da haƙƙoƙi kan ƙasarku ko bishiyoyinku ne ke nuna ko yarjejeniyar tana da adalci." }
          ]
        },
        {
          title: "Ƙara haɗarin yanayi a shirin kasuwancinku",
          objectives: ["O6", "O1", "O2"],
          minutes: 5,
          goal: "Rubuta shirin jure sauyin yanayi mai shafi ɗaya don kasuwancin gonarku.",
          text: [
            "Masu ba da lamuni, masu saye da shirye-shirye suna ƙara tambayar yadda gona za ta jure bala'o'in yanayi. Gajeren sashe kan yanayi a shirin kasuwancinku yana nuna kun yi tunani a kai, kuma yana taimaka muku ku yanke inda kuɗinku zai fara zuwa.",
            "Shirinku mai shafi ɗaya yana da sassa shida: 1. manyan haɗarin yanayinku uku tare da yiwuwar faruwarsu da asararsu (Darasi na 1); 2. jarin jure yanayi biyu ko uku tare da kuɗi, amfani da lokacin dawowar kuɗi (Darasi na 2); 3. yadda za ku biya: ajiya, ƙungiya, lamuni ko shiri, da tambayoyinku ga mai ba da lamuni (Darasi na 3); 4. dabaru biyu da ke rage kashe kuɗi da hayaƙi (Darasi na 4); 5. dokokinku game da duk wani tayin carbon (Darasi na 5); 6. ranar sake dubawa bayan kowace damina.",
            "Ku ƙara layin \"shekarar wahala\" a cikin kuɗin shiga da fitarku: kuɗin shigar da kuke tsammani idan babban haɗarin ya buga, da yadda za ku ci gaba da biyan lamuni, kuɗin makaranta da kayan aiki, misali daga ajiya, sana'a ta biyu ko inshora. Idan kuna amfani da inshorar amfanin gona ko dabbobi, ku tabbatar kamfanin inshora yana da lasisi (a Kenya a wurin Insurance Regulatory Authority), kuma ku karanta abin da ke jawo biyan inshora (payout trigger).",
            "Kuna iya neman mataimakin AI a waya ya mayar da bayananku zuwa tebur mai kyau ko ya yi muku tambayoyi kan giɓin da ke shirinku, amma lambobin dole su fito daga bayananku da farashin wurinku. Kada ku rubuta lambobin shaida, lambobin asusu ko PIN."
          ],
          steps: ["Ku kwafe teburin haɗarinku daga Darasi na 1: manyan haɗari uku.", "Ku ƙara jarinku biyu ko uku da aka lissafa kuɗinsu.", "Ku rubuta yadda za ku biya da tambayoyinku ga mai ba da lamuni.", "Ku ƙara dabaru biyu na rage hayaƙi da ke ceton kuɗi.", "Ku rubuta dokokinku game da tayin carbon.", "Ku ƙara layin kuɗin shekarar wahala da ranar sake dubawa."],
          words: [["Shirin kasuwanci (business plan)", "gajeren rubutaccen shiri na abin da gonarku ke yi, kuɗin da take kashewa, kuɗin shigarta da burinta."], ["Hasashen shekarar wahala (bad-year scenario)", "shiri na abin da zai faru ga kuɗin shiga da biyan bashi idan babban haɗarin ya buga."], ["Abin da ke jawo biyan inshora (payout trigger)", "lamarin da ke sa inshora ta biya, kamar ƙarancin ruwan sama da aka auna a tasha."]],
          slides: [
            { title: "Me yasa za a ƙara yanayi a shirin", bullets: ["Masu lamuni da masu saye suna tambayar yadda za ku jure", "Yana nuna inda kuɗinku zai fara zuwa"] },
            { title: "Sassa shida, shafi ɗaya", bullets: ["Haɗari, jari da lokacin dawowar kuɗi", "Yadda za ku biya", "Dabarun ceton kuɗi, dokokin carbon", "Ranar sake dubawa"] },
            { title: "Ku shirya don shekarar wahala", bullets: ["Kuɗin shiga idan babban haɗarin ya buga", "Yadda za a ci gaba da biyan lamuni da kuɗaɗe", "Inshora: kamfani mai lasisi, abin jawo biya a sarari"] },
            { title: "AI zai iya tsarawa, ba yanke shawara ba", bullets: ["Ku nemi ya yi tebur ko ya gano giɓi", "Lambobi suna fitowa daga bayananku", "Babu lambobin shaida, na asusu ko PIN"] }
          ],
          sources: [IRA, FAO_CSA],
          tryIt: "Aikin ƙarshe: ku rubuta shirinku na jure sauyin yanayi mai shafi ɗaya tare da dukkan sassa shida da layin kuɗin shekarar wahala. Ku karanta shi ga wani a iyalinku, memba na ƙungiya ko jami'in faɗakarwa, ku nemi su faɗa muku tambaya ɗaya da ba ku amsa ba.",
          youCanNow: "rubuta shirin jure sauyin yanayi mai shafi ɗaya don kasuwancin gonarku wanda mai ba da lamuni, mai saye ko shiri zai iya karantawa.",
          quickCheck: [
            { objective: "O6", q: "Wane sashe ne BABU a wannan shirin: haɗari, jarin da aka lissafa kuɗinsu, yadda za a biya, dabarun rage hayaƙi, dokokin carbon?", options: ["Amfanin gonar da manomi ya fi so", "Jerin maƙwabta", "Yanayin gobe", "Ranar sake dubawa"], answer: 3, why: "Shiri yana buƙatar ranar sake dubawa don a sabunta shi bayan kowace damina." },
            { objective: "O6", q: "Me layin shekarar wahala a cikin kuɗin shiga da fitarku yake nunawa?", options: ["Nawa za ku samu a shekara mafi kyau", "Yadda za ku ci gaba da biyan lamuni da kuɗaɗe idan babban haɗarin ya buga", "Farashin taki a bara", "Ma'aikata nawa kuka sani"], answer: 1, why: "Yana gwada ko kasuwancin zai tsira daga bala'in da kuka auna a matsayin mafi yiwuwa kuma mafi tsada." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Rage kashe kuɗi, carbon da tsari",
        questions: [
          { objective: "O4", q: "Wani manomin kofi ya shuka bishiyoyin inuwa da ke ba da 'ya'yan itace da itacen girki ma. Mene ne wannan?", options: ["Noma tare da bishiyoyi da ke ceton kuɗi kuma yana ajiye carbon", "Ƙona ragowar amfanin gona", "Zambar carbon", "Sa taki fiye da kima"], answer: 0, why: "Bishiyoyi tare da amfanin gona suna ajiye carbon kuma suna ba da kayan da manomi zai saya in ba haka ba." },
          { objective: "O4", q: "Wanne BA dabarar rage hayaƙi ba ce da ke ceton kuɗi?", options: ["Sa taki kusa da saiwoyi a lokacin da ya dace", "Ƙona ragowar amfanin gona bayan girbi", "Amfani da injin biogas don iskar girki", "Ingantaccen abinci don ƙarin madara daga kowace saniya"], answer: 1, why: "Ƙona ragowar amfanin gona yana ɓata sinadarai kuma yana fitar da iskar gas; sauran suna rage kashe kuɗi da hayaƙi." },
          { objective: "O5", q: "Yaya za ku tabbatar cewa aikin carbon na gaske ne?", options: ["Ku tambayi wakilin ko na gaske ne", "Ku ƙirga mutanen da ke taron", "Ku nemo shi da suna ko ID a rajista kamar Verra ko Gold Standard", "Ku duba motar wakilin"], answer: 2, why: "Ayyukan gaske suna cikin rajistar jama'a da masu mizanin carbon ke riƙewa." },
          { objective: "O5", q: "Kwangilar carbon tana hana ku sare ko sayar da bishiyoyinku na shekaru 30. Me za ku yi?", options: ["Ku sa hannu; bishiyoyi kuɗi ne kyauta", "Ku sa hannu yanzu ku karanta daga baya", "Ku nemi wakilin ya karanta muku sassa masu kyau", "Ku ɗauke ta ku tafi, ku nemi shawara, ku sa hannu ne kawai idan kun fahimta kuma kun yarda da sharuɗɗan"], answer: 3, why: "Dogon hani kan ƙasarku da bishiyoyinku abu ne mai muhimmanci; ku karanta duka ku nemi shawara mai amintacciya tukuna." },
          { objective: "O6", q: "Me yasa shirin jure sauyin yanayi ya kamata ya kasance da ranar sake dubawa?", options: ["Masu ba da lamuni suna son ranaku", "Haɗari, farashi da sakamako suna canjawa, don haka ana sabunta shirin kowace damina", "Yana sa shafin ya yi tsawo", "Doka ce ta tilasta sake dubawa"], answer: 1, why: "Sake dubawa bayan kowace damina yana sa shirin ya dace da abin da ya faru da gaske." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Kasuwancin Noma Mai Jure Sauyin Yanayi",
    questions: [
      { objective: "O1", q: "Auna haɗarin yanayi yana yin tambayoyi biyu game da kowane bala'i. Waɗanne ne?", options: ["Yaya yiwuwar faruwarsa, kuma nawa zai jawo na asara?", "Wa ya jawo shi, kuma yaushe ya fara?", "Wane rediyo ne ya ba da labarinsa, kuma a wane lokaci?", "Labari ne mai daɗi, kuma yana da adalci?"], answer: 0, why: "Yiwuwar faruwa da asarar kuɗi suna ba ku damar jera haɗari." },
      { objective: "O1", q: "A ina za ku sami asarar da ta gabata don kimanta kuɗin haɗari?", options: ["Daga wakilin carbon kaɗai", "Daga sakamakon caca", "Daga bayanan gonarku da tunanin manoma tsofaffi kan shekarun wahala", "Daga farashin waya"], answer: 2, why: "Bayanai da tunanin mutanen wurin suna nuna ainihin asarar shekarun wahala." },
      { objective: "O1", q: "Zafi mai tsanani yana rage ƙwai a gidan kajinku masu kwai a yawancin shekaru. Yaya za ku auna shi?", options: ["Yiwuwa kaɗan, babu asara", "Ba haɗarin yanayi ba ne", "Matsalar abinci ce kawai", "Yiwuwa mai yawa tare da asarar kuɗi daga ƙwan da aka rasa"], answer: 3, why: "Yana faruwa a yawancin shekaru kuma yana jawo asarar ƙwai, don haka mai yiwuwa ne kuma mai tsada." },
      { objective: "O2", q: "Mene ne lokacin dawowar kuɗi (payback)?", options: ["Kuɗin ruwa na lamuni", "Lokacin da ake ɗauka kafin ceto ko ribar jari ta biya kuɗinsa", "Farashin iri", "Mayar da kuɗi daga shago"], answer: 1, why: "Dawowar kuɗi = kuɗin jari ÷ amfanin shekara." },
      { objective: "O2", q: "Wanne ne ɓangare na kuɗin tankin ruwa?", options: ["Saye, gini, aiki da kulawa", "Farashin shago kaɗai", "Sufuri kaɗai", "Babu komai, idan kyauta ce"], answer: 0, why: "Cikakken kuɗi ya haɗa da duk abin da ake buƙata don gina shi da sa shi ya ci gaba da aiki." },
      { objective: "O2", q: "Wanne ne jarin jure yanayi game da ɗaukewar ruwa?", options: ["Sayar da famfon ruwa", "Shuka a makare kowace shekara ba tare da dalili ba", "Irin mai jure fari ko mai saurin nuna", "Ƙona ragowar amfanin gona"], answer: 2, why: "Irin mai jure fari da mai saurin nuna suna rage asara lokacin ɗaukewar ruwa." },
      { objective: "O2", q: "Jari biyu suna da amfani iri ɗaya. Ɗaya ya fi araha kuma yana da sauƙin kulawa. Wanne kuke yawan farawa da shi?", options: ["Mai tsada", "Babu ɗaya", "Duka biyun bashi a lokaci ɗaya", "Mai araha da za ku iya kula da shi"], answer: 3, why: "Ƙaramin kuɗi da sauƙin kulawa suna kawo dawowar kuɗi da sauri kuma lafiya." },
      { objective: "O3", q: "Yaya manyan asusun yanayi ke yawan kaiwa ga manoma?", options: ["Ta bankuna, gwamnatoci da hukumomi, a matsayin lamuni da shirye-shirye", "Ta aika kuɗi zuwa wayar kowane manomi", "Ta wakilan carbon da ke karɓar kuɗi", "Ba sa taɓa kaiwa ga manoma"], answer: 0, why: "Asusu kamar Green Climate Fund suna aiki ta gwamnatoci, bankuna da hukumomin da aka amince da su." },
      { objective: "O3", q: "Kafin karɓar lamuni na kore, wace ce babbar tambaya?", options: ["Jami'in lamunin yana da abokantaka?", "Mene ne cikakken kuɗi kuma biyan kuɗi ya dace da girbina?", "Sunansa yana da \"kore\" a ciki?", "Ofishin yana kusa da kasuwa?"], answer: 1, why: "Cikakken kuɗi da lokacin biya ne ke nuna ko za a iya ɗaukar lamunin." },
      { objective: "O3", q: "A Najeriya, a ina za ku tabbatar cewa mai ba da lamuni yana da lasisi?", options: ["A wani rukunin WhatsApp", "A wurin wakilin mai ba da lamunin", "A wurin Central Bank of Nigeria", "A wani fosta a kasuwa"], answer: 2, why: "Central Bank of Nigeria ne ke kula da cibiyoyi masu lasisi kuma yana wallafa jerinsu." },
      { objective: "O3", q: "Wani yana tayin \"hanzarta\" tallafin yanayinku idan kun biya kuɗi zuwa lambar kuɗin wayarsa. Mene ne wannan?", options: ["Alamar gargaɗin zamba", "Mataki na yau da kullum", "Dokar gwamnati", "Kuɗin ƙungiyar haɗin kai"], answer: 0, why: "Shirye-shiryen gaske ba sa neman ku biya wakilai don hanzarta tallafi." },
      { objective: "O4", q: "Mene ne rage hayaƙi (mitigation)?", options: ["Ƙaura zuwa sabuwar gona", "Inshora game da fari", "Sayar da amfanin gona da wuri", "Rage fitar da iskar gas mai ɗumama duniya ko ajiye ƙarin carbon"], answer: 3, why: "Rage hayaƙi yana rage fitarwa ko ajiye carbon a ƙasa da bishiyoyi." },
      { objective: "O4", q: "Mene ne bio-slurry?", options: ["Maganin ƙwari", "Ruwan da ya rage bayan yin biogas, ana amfani da shi a matsayin taki", "Wani nau'in mai da ake sayarwa a shaguna", "Cutar shanu"], answer: 1, why: "Bio-slurry daga injin biogas yana iya ciyar da ƙasa." },
      { objective: "O4", q: "Wace dabara ce ke ceton kuɗi KUMA tana rage hayaƙi a gonar shanu masu madara?", options: ["Ingantaccen abinci don kowace saniya ta ba da ƙarin madara", "Ƙona kashi", "Sayen shanu fiye da abincin da ake da shi", "Barin makiyaya babu ciyawa"], answer: 0, why: "Ƙarin madara daga kowace dabba saboda ingantaccen abinci yana nufin ƙarancin kuɗi da hayaƙi a kowace lita." },
      { objective: "O5", q: "Mene ne carbon credit?", options: ["Lamuni don iri", "Rangwame kan taki", "Takardar shaida ta tan ɗaya na CO2 da aka hana shiga iska ko aka ajiye", "Kyautar kuɗin waya"], answer: 2, why: "Kowane credit yana wakiltar tan ɗaya na carbon dioxide da aka hana ko aka ajiye." },
      { objective: "O5", q: "Wanne ne alamar gargaɗi a tayin carbon?", options: ["Aikin yana da ID na rajista da za ku iya nema", "Kuna iya ɗaukar kwangilar gida ku karanta", "An rubuta biya da kaso a sarari", "Dole ku biya kuɗi don shiga"], answer: 3, why: "Kuɗin shiga alama ce da aka saba gani ta zamba." },
      { objective: "O5", q: "A Kenya, ayyukan carbon a ƙasar al'umma suna buƙatar me?", options: ["Babu komai", "Yarjejeniyar bunƙasa al'umma kan yadda za a raba amfani", "Alƙawari na baki kawai", "Lamuni daga wakilin"], answer: 1, why: "Carbon Markets Regulations, 2024 na Kenya suna buƙatar yarjejeniyar bunƙasa al'umma ga irin waɗannan ayyuka." },
      { objective: "O6", q: "Me ya kamata ya kasance a shirin jure sauyin yanayi mai shafi ɗaya?", options: ["Manyan haɗari, jarin da aka lissafa kuɗinsu, yadda za a biya, dabarun ceton kuɗi, dokokin carbon da ranar sake dubawa", "Sunan gonar kaɗai", "PIN ɗin kuɗin wayarku", "Jerin kowace ranar ruwan sama a bara"], answer: 0, why: "Waɗannan sassa shida suna yin cikakken shiri mai amfani." },
      { objective: "O6", q: "Yaya mataimakin AI a waya zai iya taimakawa da shirinku?", options: ["Zai iya ƙirƙirar farashinku", "Ya kamata ya riƙe PIN ɗin bankinku", "Zai iya tsara bayananku zuwa tebur kuma ya nuna giɓi", "Yana sa hannu a takardun lamuni a madadinku"], answer: 2, why: "AI zai iya tsarawa da yin tambayoyi, amma lambobin suna fitowa daga bayananku." },
      { objective: "O6", q: "Shirinku ya nuna ba za ku iya biyan lamuni ba idan ɗaukewar ruwa ta faru. Me za ku yi?", options: ["Ku yi watsi da shi", "Ku ɓoye shi daga mai ba da lamuni", "Ku ƙara karɓar bashi", "Ku canja shirin: ƙaramin lamuni, ajiya, sana'a ta biyu ko inshora"], answer: 3, why: "Layin shekarar wahala yana nan ne don a canja shirin kafin bala'in, ba bayansa ba." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 5, 8, 10, 11, 14, 15, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na shirin ku sake gwadawa.",
    criteria: [
      { name: "Haɗarin yanayi a kuɗi", objective: "O1", notYet: "An lissafa haɗari ba tare da yiwuwar faruwa ko asara ba, ko ƙasa da uku.", meets: "Haɗari uku, kowanne da yiwuwar faruwa da kimanin asara a kuɗin ƙasa.", exceeds: "Yana kuma nuna tasirin kasuwanci (lamuni, masu saye, ma'aikata) da inda kimantawar ta fito." },
      { name: "Jarin da aka lissafa kuɗinsu", objective: "O2", notYet: "An ambaci jari amma ba a lissafa kuɗinsu ba.", meets: "Jari biyu ko uku tare da cikakken kuɗi, matsakaicin amfanin shekara da lokacin dawowar kuɗi.", exceeds: "Yana amfani da ainihin farashin wurin kuma yana bayanin wanda za a fara da shi da dalili." },
      { name: "Kuɗi da binciken mai ba da lamuni", objective: "O3", notYet: "Babu shirin biya, ko mai ba da lamuni ba tare da bincike ba.", meets: "Ya faɗi yadda za a biya kuma ya lissafa tambayoyi kan cikakken kuɗi, ranakun biya, sharuɗɗa da lasisi.", exceeds: "Ya kwatanta hanyoyin samun kuɗi biyu kuma ya duba mai ba da lamunin a jerin hukumar da ke kula da shi." },
      { name: "Dabarun da ke ceton kuɗi", objective: "O4", notYet: "Babu dabarar rage hayaƙi, ko ɗaya ba tare da nuna ceto ba.", meets: "Dabaru biyu da ke rage hayaƙi, kowanne da kayan aiki ko kuɗin da yake ceto.", exceeds: "Ya haɗa da lokacin dawowar kuɗi ga duk dabarar da ke buƙatar kashe kuɗi, kamar injin biogas." },
      { name: "Dokokin tayin carbon", objective: "O5", notYet: "Babu dokoki, ko zai sa hannu ko ya biya a ranar.", meets: "Aƙalla bincike huɗu: rajista, biya da kaso, haƙƙoƙi kan ƙasa da bishiyoyi, babu kuɗin shiga, shawara kafin sa hannu.", exceeds: "Ya ambaci dokokin ƙasa ko ofishin da za a duba, kamar Carbon Markets Regulations na Kenya." },
      { name: "Cikakken shiri mai shafi ɗaya", objective: "O6", notYet: "Wasu sassa babu, ko babu ranar sake dubawa.", meets: "Dukkan sassa shida, layin kuɗin shekarar wahala da ranar sake dubawa a shafi ɗaya.", exceeds: "Memba na ƙungiya, jami'in faɗakarwa ko mai ba da shawara ya karanta shi, kuma an sabunta shi da tambayarsu." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka yi aƙalla jarin jure yanayi ɗaya da aka lissafa kuɗinsa a damina mai zuwa (binciken biyo baya)",
      "Masu koyo ko ƙungiyoyi da suka nemi kuɗi tare da rubutaccen shiri da tambayoyi ga mai ba da lamuni",
      "Zambar carbon ko ta kuɗi da aka bayar da rahoton an guje mata, da raguwar kwangilolin da aka sa hannu ba tare da shawara ba (rahotannin faɗakarwa ko ƙungiyar haɗin kai)",
      "Asarar kuɗin shiga a shekarar wahala mai zuwa idan aka kwatanta da shekarar wahala da ta gabata (rahoton kai, bisa sana'a)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Takarda, alƙalami da na'urar lissafi mai sauƙi (ko na'urar lissafin waya)",
      "Bayanan gonarku, ko gona ta misali daga aikin ƙarshe",
      "Farashin wurin na iri, tankuna, kayan aiki da mai (daga masu sayar da kayan gona ko ƙungiyar haɗin kai)",
      "Waya don nemo masu ba da lamuni da rajista (ba dole ba)",
      "Kusan minti 90 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Ya fi kyau a yi shi da ƙungiyar manoma, ƙungiyar haɗin kai ko Farmer Business School: ku yi Darasi na 1 da na 2 da ainihin bayanan membobi biyu ko uku.",
      "Ku tattara ainihin farashin wurin kafin zaman; kada ku taɓa gabatar da farashin misali a matsayin gaskiya.",
      "Ku gayyaci jami'in lamuni daga banki, bankin microfinance ko SACCO mai lasisi don amsa tambayoyin Darasi na 3, kuma ku duba lasisinsu a gaban ƙungiyar.",
      "Don Darasi na 5, ku kawo samfurin kwangilar carbon ko tayi (an cire sunaye) ku nuna alamun gargaɗi tare. Kada ku goyi bayan kowane aikin carbon.",
      "Kada ku ba da shawarar saka jari; ku tunatar da masu koyo su karanta kwangiloli gaba ɗaya kuma su yi magana da mai ba da shawara da suka amince da shi.",
      "Ku ba da maki ga shirin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

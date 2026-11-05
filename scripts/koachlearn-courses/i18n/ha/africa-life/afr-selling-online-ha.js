"use strict";

// Koach Learn course, Hausa (ha) translation of africa-life/afr-selling-online.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const WA_BUSINESS = { name: "WhatsApp Business: manhajar WhatsApp Business (bayanin kasuwanci, nuna kaya da farashi, saƙon maraba da saƙon rashin zuwa)", url: "https://whatsappbusiness.com/products/business-app/" };
const NDPC = { name: "Hukumar Kare Bayanai ta Najeriya (NDPC): Dokar Kare Bayanai ta Najeriya ta 2023", url: "https://ndpc.gov.ng/" };
const ODPC = { name: "Ofishin Kwamishinan Kare Bayanai, Kenya (Dokar Kare Bayanai ta 2019)", url: "https://www.odpc.go.ke/" };
const CBK_FRAUD = { name: "Babban Bankin Kenya (Central Bank of Kenya): kariya daga zamba", url: "https://www.centralbank.go.ke/fraud-safety/" };
const CBN_CP = { name: "Babban Bankin Najeriya (CBN): kare masu amfani", url: "https://www.cbn.gov.ng/Documents/ConsumerProtection.html" };

module.exports = {
  id: "afr-selling-online-ha",
  lang: "ha",
  translationOf: "afr-selling-online",
  category: "Africa: Life and Work",
  name: "Sayar da Kaya ta Intanet a Afirka (WhatsApp Business, Kasuwannin Intanet da Kafofin Sada Zumunta)",
  skills: "Zaɓar inda za a sayar ta intanet, Kafa WhatsApp Business, Ɗaukar hoton kaya da rubuta bayanin kaya, Amsa wa abokan ciniki da kammala ciniki, Duba biyan kuɗi da guje wa saƙon biyan kuɗi na bogi, Kai kaya da kiyaye amincewar abokan ciniki",
  outcome: "karɓar odar kayanku ta waya: kafa bayanin kasuwanci da jerin kaya a WhatsApp Business, rubuta bayanin kaya da ke jawo saye, amsa wa abokan ciniki da tabbatar da oda, duba cewa kuɗi sun shigo da gaske kafin ku tura kaya, da kai kaya ta hanyar da ke sa abokan ciniki su dawo.",
  about: [
    "Yanzu abokan ciniki da yawa suna samun masu sayarwa a WhatsApp, Facebook, Instagram, TikTok da kasuwannin intanet kamar Jumia da Jiji. Wannan kwas ɗin na 'yan kasuwa ne, masu sana'ar hannu, masu dafa abinci a gida, tela, manoma da masu ƙananan shaguna a Kenya, Najeriya, Ghana, Senegal, Côte d'Ivoire, Morocco da ko'ina a Afirka da ke son sayarwa fiye da titinsu.",
    "Za ku zaɓi inda za ku sayar, ku kafa bayanin kasuwanci da jerin kaya a WhatsApp Business, ku ɗauki hotuna masu kyau da waya mai sauƙi, ku rubuta bayanin kaya da farashi a sarari, ku amsa wa abokan ciniki da sauri, ku tabbatar da oda a rubuce, ku duba biyan kuɗi a manhajar kuɗin waya ko ta bankinku, sannan ku tsara yadda za a kai kaya da karɓar kayan da aka dawo da su.",
    "Kowane darasi yana ɗaukar kusan minti biyar, kuma yana ƙarewa da aikin \"Gwada yanzu\" don kasuwancinku. Yana aiki a wayar Android mai sauƙi kuma ba ya cin data da yawa. Farashi da adadin kuɗi a kwas ɗin misalai ne, ba farashi ko kuɗin caji na gaske ba."
  ],
  finalTask: "Ku yi tsarin shagon intanet mai shafi ɗaya don kasuwancinku: inda za ku sayar da dalilin haka, rubutun bayanin kasuwancinku a WhatsApp Business, bayanin kaya uku (bayanin hoto, suna, farashi da kuɗin ƙasarku, cikakken bayani da yadda za a kai), saƙon tabbatar da oda da kuka ajiye, ƙa'idarku ta duba biyan kuɗi, da ƙa'idarku ta kai kaya da dawo da kaya.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "'Yan kasuwa, masu sayarwa a kasuwa, masu sana'ar hannu, masu dafa abinci a gida, tela, masu gyaran gashi, manoma da masu ƙananan shaguna a garuruwa da ƙauyuka a faɗin Afirka (Kenya, Najeriya, Ghana, ƙasashen Afirka ta Yamma da ta Tsakiya masu Faransanci, Arewacin Afirka). Da yawa mata ne da matasa; da yawa sun riga sun yi hira da abokan ciniki a WhatsApp.",
    startingPoint: "Suna iya amfani da WhatsApp don hira da tura hotuna, kuma suna iya karɓar kuɗi ta waya (mobile money). Kaɗan ne ke da bayanin kasuwanci, jerin kaya, farashi a sarari a intanet, tabbatar da oda a rubuce ko ƙa'idar duba biyan kuɗi. Wasu an cuce su da saƙon biyan kuɗi na bogi.",
    gap: "Abokan ciniki suna nema da yin oda a wayoyinsu, amma ƙananan masu sayarwa da yawa suna rasa ciniki saboda jinkirin amsa, farashi marar sarari da hotuna marasa kyau, kuma suna rasa kuɗi da kaya saboda saƙon biyan kuɗi na bogi. Masu koyo suna buƙatar hanya mai sauƙi da aminci don nuna kaya, karɓar oda, duba biyan kuɗi da kai kaya, don sayarwa ta intanet ta ƙara samun kuɗi maimakon haɗari.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; da yawa suna jin Turanci a matsayin harshe na biyu (ana kuma bayar da kwas ɗin a Faransanci da Larabci)",
      "Na'urori: wayar Android mai sauƙi, sau da yawa ana raba ta; data tana da tsada, don haka ana sa hotuna da bidiyo ƙanana",
      "Kuɗi: babu ko kaɗan na kasafin talla; a fara da kayan aiki kyauta",
      "Ƙa'idoji da kuɗin caji: abubuwan manhaja, kuɗin kwamishon na kasuwannin intanet da dokokin kare bayanai suna canjawa daga ƙasa zuwa ƙasa; masu koyo suna duba manhajar, shafin masu sayarwa na kasuwar ko hukumar ƙasa",
      "Tsaro: haɗarin zamba yana da yawa; kada a taɓa bayar da PIN, kalmar sirri ko lambar tabbatarwa ta lokaci ɗaya (code)"
    ],
    prerequisites: "Iya tura saƙonni da hotuna a WhatsApp. Zai taimaka: kwas ɗin \"Using Mobile Money Safely\" (Amfani da Kuɗin Waya Lafiya) a wannan rukuni."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Idan kuna da kayanku, abokan cinikinku da hanyoyin sayarwa biyu ko uku ta intanet", action: "zaɓar inda za ku sayar ta intanet da rubuta dalilin haka", standard: "kuna faɗin kuɗi, wahala da waɗanda ke saye a can ga kowace hanya" },
    { id: "O2", condition: "Ta amfani da waya mai manhajar WhatsApp Business", action: "kafa bayanin kasuwanci da jerin kaya masu farashi", standard: "da suna, gajeren bayani, lokutan aiki, yankin da kuke hidima da aƙalla kaya uku" },
    { id: "O3", condition: "Idan kuna da ɗaya daga cikin kayanku", action: "ɗaukar hoto mai kyau da rubuta bayanin kaya mai suna, farashi, cikakken bayani da yadda za a kai", standard: "ta yadda abokin ciniki zai iya yin oda ba tare da tambayar abu mai sauƙi ba" },
    { id: "O4", condition: "Idan abokin ciniki ya turo tambaya ko oda", action: "amsa cikin ladabi da tabbatar da odar a rubuce", standard: "cikin lokutan aikin da kuka faɗa, da kaya, yawa, farashi, kai kaya da biyan kuɗi a saƙo ɗaya" },
    { id: "O5", condition: "Kafin ku tura kayan da aka biya ta kuɗin waya ko canja kuɗi ta banki", action: "duba a manhajarku ko saƙon hukuma na kamfanin cewa kuɗin sun shigo", standard: "ba tare da amincewa da hoton allo (screenshot), saƙon da aka tura ko mai kira ba, kuma ba tare da bayar da PIN ba" },
    { id: "O6", condition: "Idan kuna kai oda", action: "rubuta da bin ƙa'idar kai kaya da dawo da kaya da ke kiyaye amincewa da bayanan abokan ciniki", standard: "da faɗin yankunan kai kaya, kuɗi, lokaci da dawo da kaya, da kiyaye lambobin abokan ciniki a sirri" }
  ],
  chapters: [
    {
      name: "Babi na 1: Buɗe shagonku a intanet",
      lessons: [
        {
          title: "Zaɓar inda za ku sayar ta intanet",
          objectives: ["O1"],
          minutes: 5,
          goal: "Zaɓi wuri ɗaya ko biyu na sayarwa ta intanet da suka dace da kayanku da abokan cinikinku.",
          text: [
            "Ba dole ne ku kasance ko'ina ba. Ku zaɓi inda abokan cinikinku suke a yanzu, da inda za ku iya bin saƙonni. Sayarwa ta intanet kamar buɗe rumfa ta biyu ce: tana aiki ne kawai idan akwai wanda ke hidima a can.",
            "Manhajojin hira kamar WhatsApp suna da kyau don abokan ciniki na yau da kullum da maƙwabta. Kafofin sada zumunta kamar Facebook, Instagram da TikTok suna taimaka wa sababbin mutane su gano ku ta hotuna da gajerun bidiyo. Kasuwannin intanet kamar Jumia, Jiji, Kilimall da Konga suna da masu saye da yawa da ke nema, amma suna da ƙa'idoji, kuma wasu suna karɓar kwamishon (wani kaso na kowane ciniki) ko suna cajin kuɗin tallar da aka ɗaukaka.",
            "Ga kowace hanya, ku rubuta abubuwa uku: waɗanda ke saye a can, abin da yake ci (data, kwamishon, talla, kai kaya) da lokacin da yake ɗauka kowace rana. Misali: Ama a Kumasi tana sayar da duwatsun ado (beads). Tana amfani da WhatsApp don abokan cinikinta na yau da kullum, kuma ta ƙara Instagram don samun sababbin masu saye a Accra. Mai yin takalma a Dakar zai iya farawa da WhatsApp da Facebook, sannan ya ƙara kasuwar intanet daga baya.",
            "Kafin ku shiga kasuwar intanet, ku karanta shafinta na masu sayarwa: abin da take caji, yadda take biyan ku, yaushe, da abin da ke faruwa idan an dawo da kaya. Waɗannan suna canjawa, don haka ku duba shafin intanet na kasuwar da kanta, ba saƙon da aka tura ba."
          ],
          steps: ["Ku rubuta inda abokan cinikinku suke hira, kallo da siyayya a yanzu.", "Ga kowace hanya, ku rubuta waɗanda ke saye a can, kuɗin da lokacin da take ɗauka.", "Ku zaɓi babbar hanya ɗaya, kuma aƙalla ɗaya kawai ƙari.", "Don kasuwar intanet, ku karanta shafinta na masu sayarwa don kuɗin caji, biyan kuɗi da dawo da kaya."],
          words: [["Hanyar sayarwa (channel)", "wurin da kuke sayarwa ko magana da abokan ciniki, kamar WhatsApp, Facebook ko kasuwar intanet."], ["Kasuwar intanet (marketplace)", "shafin intanet ko manhaja inda masu sayarwa da yawa ke sa kaya, masu saye kuma ke nema, kamar Jumia ko Jiji."], ["Kwamishon (commission)", "wani kaso na kowane ciniki da kasuwar intanet ke riƙewa a matsayin kuɗin cajinta."]],
          slides: [
            { title: "Ku sayar inda abokan cinikinku suke", bullets: ["Sai inda za ku iya amsa saƙonni", "Intanet rumfa ta biyu ce: dole wani ya yi hidima"] },
            { title: "Nau'o'in hanyoyin sayarwa uku", bullets: ["Manhajojin hira: WhatsApp don abokan ciniki na yau da kullum", "Kafofin sada zumunta: Facebook, Instagram, TikTok don a gano ku", "Kasuwannin intanet: Jumia, Jiji, Kilimall, Konga"] },
            { title: "Ku kwatanta kowace hanya", bullets: ["Waɗanda ke saye a can", "Abin da take ci: data, kwamishon, talla, kai kaya", "Lokacin da take ɗauka kowace rana"] },
            { title: "Ku fara kaɗan", bullets: ["Babbar hanya ɗaya, aƙalla ɗaya kawai ƙari", "Ku fara karanta shafin masu sayarwa na kasuwar da kanta"] }
          ],
          tryIt: "Ku zana ƙaramin tebur da hanyoyinku biyu ko uku da za ku iya amfani da su. Ga kowace, ku rubuta waɗanda ke saye a can, abin da take ci da lokacin da take ɗauka. Ku zagaye wadda za ku fara da ita.",
          youCanNow: "kwatanta hanyoyin sayarwa ta intanet bisa kuɗi, wahala da abokan ciniki, da zaɓar inda za ku fara.",
          quickCheck: [
            { objective: "O1", q: "Kuna iya amsa saƙonni na awa ɗaya a rana. Mene ne farawa mafi kyau?", options: ["Buɗe asusu a manhajoji shida lokaci ɗaya", "Fara da babbar hanya ɗaya da za ku iya bi", "Sa kaya sau ɗaya kuma kada ku taɓa amsawa", "Biyan talla kafin ku sami jerin kaya"], answer: 1, why: "Hanya tana aiki ne kawai idan kuna amsa wa abokan ciniki, don haka ku fara da abin da za ku iya bi." },
            { objective: "O1", q: "A ina za ku duba abin da kasuwar intanet ke caji masu sayarwa?", options: ["Saƙon WhatsApp da aka tura", "Hasashen aboki", "Shafin masu sayarwa na kasuwar da kanta", "Sharhi a ƙarƙashin bidiyo"], answer: 2, why: "Kuɗin caji da ƙa'idoji suna canjawa, kuma shafin kasuwar da kanta ne kaɗai abin dogaro." }
          ]
        },
        {
          title: "Kafa WhatsApp Business: bayanin kasuwanci da jerin kaya",
          objectives: ["O2"],
          minutes: 6,
          goal: "Kafa bayanin kasuwanci da jerin kaya masu farashi a WhatsApp Business.",
          text: [
            "WhatsApp Business manhaja ce daban da WhatsApp na yau da kullum, kamfani ɗaya ne ya yi ta don ƙananan kasuwanci. Ku samo ta daga shagon manhajoji na hukuma kaɗai (Google Play a Android). Tana bar ku nuna bayanin kasuwanci, nuna kayanku da farashinsu, da tura saƙon maraba da saƙon rashin zuwa.",
            "Bayanin kasuwancinku (business profile) shi ne allon sunan shagonku. Ku cike sunan kasuwancinku, gajeren bayanin abin da kuke sayarwa, yankinku ko adireshinku, lokutan buɗewa, da yadda abokan ciniki za su iya biya. Ku yi amfani da tambari (logo) mai kyau ko hoton rumfarku ko mafi kyawun kayanku.",
            "Sannan ku ƙara kayanku a jerin kaya (manhajar tana kiran sa catalogue a nau'o'i da yawa): hoto, suna, farashi da kuɗin ƙasarku da gajeren bayani. Abokan ciniki za su iya dubawa su turo muku wani kaya a hira. Misali: Wanjiku a Nakuru ta ƙara \"Takalman Maasai na ado da duwatsu, girma 37-41, KES 1,200\" (farashin misali ne).",
            "Menu-menu sun bambanta tsakanin wayoyi da nau'o'in manhaja. Idan ba ku sami wani saiti ba, ku buɗe saitunan manhajar ku nemi kayan aikin kasuwanci (business tools). Kuna kuma iya saita gajeren saƙon maraba don sababbin abokan ciniki da saƙon rashin zuwa don lokacin da kuka rufe."
          ],
          steps: ["Ku saka WhatsApp Business daga shagon manhajoji na hukuma.", "Ku cike bayanin kasuwanci: suna, bayani, yanki, lokutan aiki, hanyoyin biyan kuɗi.", "Ku ƙara tambari ko hoto mai kyau.", "Ku ƙara aƙalla kaya uku masu hoto, suna, farashi da gajeren bayani.", "Ku saita saƙon maraba da saƙon rashin zuwa."],
          words: [["Bayanin kasuwanci (business profile)", "shafin da ke nuna wa abokan ciniki sunan kasuwancinku, bayani, lokutan aiki da wurinku."], ["Jerin kaya (catalogue)", "jerin kayanku masu hotuna da farashi da abokan ciniki za su iya dubawa a manhajar."], ["Saƙon rashin zuwa (away message)", "amsar kai-tsaye da ake turawa idan kun rufe."]],
          slides: [
            { title: "WhatsApp Business", bullets: ["Manhaja kyauta don ƙananan kasuwanci", "Ku saka daga shagon manhajoji na hukuma kaɗai", "Bayanin kasuwanci, jerin kaya, saƙon maraba da na rashin zuwa"] },
            { title: "Bayaninku shi ne allon sunan shagonku", bullets: ["Sunan kasuwanci da abin da kuke sayarwa", "Yanki ko adireshi da lokutan buɗewa", "Yadda abokan ciniki za su iya biya", "Tambari ko hoto mai kyau"] },
            { title: "Jerin kayanku", bullets: ["Hoto, suna, farashi da kuɗin ƙasarku", "Gajeren bayani: girma, launi, yawa", "Aƙalla kaya uku don farawa"] },
            { title: "Saƙonni na kai-tsaye", bullets: ["Saƙon maraba don sababbin abokan ciniki", "Saƙon rashin zuwa idan kun rufe", "Menu-menu sun bambanta: ku duba saitunan, kayan aikin kasuwanci"] }
          ],
          tryIt: "Ku saka WhatsApp Business (ko ku buɗe ta idan kuna da ita). Ku cike bayaninku ku ƙara kaya uku masu hoto, suna, farashi da layi ɗaya na bayani. Ku nemi aboki ya duba ya faɗa muku abu ɗaya da bai fito sarari ba.",
          youCanNow: "kafa bayanin kasuwanci da jerin kaya a WhatsApp Business da abokan ciniki za su iya dubawa.",
          quickCheck: [
            { objective: "O2", q: "Wane bayani ne ya dace a bayanin kasuwancinku?", options: ["PIN ɗin kuɗin wayarku", "Lokutan buɗewarku", "Lambobin wayar abokan cinikinku", "Kalmar sirrinku"], answer: 1, why: "Lokutan aiki suna faɗa wa abokan ciniki lokacin da za ku amsa; PIN, kalmar sirri da lambobin abokan ciniki suna zama a sirri." },
            { objective: "O2", q: "Wani kaya a jerinku yana da hoto amma babu farashi. Me za ku ƙara?", options: ["Babu komai; abokan ciniki suna son tambaya", "Adireshin gidanku", "Dogon labari game da shagon", "Farashin da kuɗin ƙasarku"], answer: 3, why: "Farashi a sarari yana adana lokaci kuma yana hana abokan ciniki tafiya ba tare da tambaya ba." }
          ],
          sources: [WA_BUSINESS]
        },
        {
          title: "Hotuna da bayanin kaya da ke jawo saye",
          objectives: ["O3"],
          minutes: 5,
          goal: "Ɗauki hoton kaya mai kyau, ku rubuta bayanin kaya da abokin ciniki zai iya yin oda daga gare shi.",
          text: [
            "Abokin ciniki a intanet ba zai iya taɓa kayanku ba, don haka hoto da kalmomi ne za su yi aikin. Ku ɗauki hotuna da hasken rana kusa da taga ko a waje a inuwa. Ku yi amfani da bango mara ado kamar zane ko katanga. Ku goge gilashin kyamarar. Ku nuna kayan duka, sannan hoto ɗaya na kusa, da wani abu da ke nuna girma, kamar hannu.",
            "Bayanin kaya mai kyau yana amsa tambayoyin abokin ciniki kafin ya tambaya: suna a sarari (mene ne), farashi da kuɗin ƙasarku, girma, launi, yawa ko nauyi, abin da aka yi shi da shi, da yadda da inda kuke kai kaya. Misali: \"Man shafawa na kaɗe (shea butter), kwalba 250 g, ba shi da ƙamshi, GHS 60. Kai kaya a Tamale yau; sauran garuruwa ta sakon bas.\" (farashin misali ne).",
            "Ku faɗi gaskiya. Ku nuna ainihin kayan, ba hoto daga intanet ba, kuma ku faɗi idan launuka na iya bambanta. Hotuna na gaskiya suna nufin ƙarancin dawo da kaya da ƙarin amincewa. Ku sa fayiloli ƙanana don adana data: hoto ɗaya mai kyau ya fi hotuna goma marasa haske."
          ],
          steps: ["Ku tsaftace kayan da gilashin kyamarar.", "Ku yi amfani da hasken rana da bango mara ado.", "Ku ɗauki hoto ɗaya na kayan duka, ɗaya na kusa, da ɗaya da ke nuna girma.", "Ku rubuta suna, farashi, girma ko nauyi, abin da aka yi shi da shi, da kai kaya.", "Ku karanta shi kamar abokin ciniki: za ku iya yin oda ba tare da tambaya ba?"],
          words: [["Bayanin kaya (listing)", "hoto da kalmomin da ke nuna kaya ɗaya na sayarwa."], ["Hoton kusa (close-up)", "hoton da aka ɗauka kusa da kayan don nuna ƙananan bayanai."]],
          slides: [
            { title: "Hotunan da abokan ciniki ke amincewa da su", bullets: ["Hasken rana, bango mara ado, gilashin kyamara mai tsabta", "Kayan duka, hoton kusa, da abin da ke nuna girma", "Ainihin kayanku, ba hoto daga intanet ba"] },
            { title: "Bayanin kaya da ke amsa tambayoyi", bullets: ["Suna: mene ne", "Farashi da kuɗin ƙasarku", "Girma, launi, nauyi, abin da aka yi shi da shi", "Yadda da inda kuke kai kaya"] },
            { title: "Ku adana data, ku gina amincewa", bullets: ["Hoto ɗaya mai kyau ya fi hotuna goma marasa haske", "Ku faɗi idan launuka na iya bambanta", "Bayanin kaya na gaskiya yana rage dawo da kaya"] }
          ],
          tryIt: "Ku zaɓi kaya ɗaya. Ku ɗauki hotuna uku (duka, na kusa, na girma) da hasken rana a kan bango mara ado. Ku rubuta bayanin kaya mai suna, farashi, cikakken bayani da kai kaya. Ku karanta shi kamar abokin ciniki, ku gyara duk abin da za ku tambaya game da shi.",
          youCanNow: "ɗaukar hotunan kaya masu kyau da waya mai sauƙi da rubuta bayanin kaya da abokan ciniki za su iya yin oda daga gare shi.",
          quickCheck: [
            { objective: "O3", q: "Ina ne haske mafi kyau don hoton kaya?", options: ["Hasken rana kusa da taga ko a inuwa", "Ɗaki mai duhu da fitilar kyamara (flash)", "Ƙarƙashin fitila mai launi", "A waje da dare"], answer: 0, why: "Hasken rana mai laushi yana nuna ainihin launuka da ƙananan bayanai ba tare da inuwa mai ƙarfi ba." },
            { objective: "O3", q: "Wane bayanin kaya ne ke bar abokin ciniki ya yi oda ba tare da tambaya ba?", options: ["\"Jaka mai kyau. Ku turo saƙo.\"", "\"Jaka na sayarwa\"", "\"Jakar fata\"", "\"Jakar hannu ta fata mai ruwan ƙasa, 30 x 25 cm, NGN 18,000, kai kaya a Lagos cikin kwana 2\""], answer: 3, why: "Yana faɗin mene ne, girma, farashi da kai kaya, don haka abokin ciniki zai iya yanke shawara." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Buɗe shagonku a intanet",
        questions: [
          { objective: "O1", q: "Waɗanne abubuwa uku ne za ku kwatanta ga kowace hanyar sayarwa ta intanet?", options: ["Waɗanda ke saye a can, abin da take ci, da lokacin da take ɗauka", "Tambarinta, launinta da shekarunta", "Abokai nawa ke amfani da ita don hira", "Ko sabuwa ce kawai"], answer: 0, why: "Abokan ciniki, kuɗi da lokaci ne ke nuna ko hanya za ta kawo muku kuɗi." },
          { objective: "O1", q: "Kasuwar intanet tana riƙe wani kaso na kowane ciniki. Me ake kiran sa?", options: ["Ajiya", "Mayar da kuɗi", "Kwamishon", "Gaisuwa"], answer: 2, why: "Kwamishon shi ne kason kowane ciniki da kasuwar intanet ke riƙewa a matsayin kuɗin cajinta." },
          { objective: "O2", q: "Daga ina ya kamata ku samo manhajar WhatsApp Business?", options: ["Hanyar haɗi (link) daga lambar da ba ku sani ba", "Shagon manhajoji na hukuma", "Fayil da baƙo ya turo muku", "Tallar da ke tasowa (pop-up)"], answer: 1, why: "Shagon manhajoji na hukuma yana hana manhajoji na bogi da shirye-shiryen ɓarna shiga wayarku." },
          { objective: "O2", q: "Kuna rufewa ƙarfe 7 na yamma. Me zai taimaka wa abokan ciniki da ke turo saƙo da dare?", options: ["Kashe wayarku har abada", "Goge saƙonninsu", "Amsa musu da PIN ɗinku", "Saƙon rashin zuwa da ke faɗin lokacin da za ku amsa"], answer: 3, why: "Saƙon rashin zuwa yana faɗa wa abokan ciniki cewa kun gan su da lokacin da za ku amsa." },
          { objective: "O3", q: "Kayanku suna da launuka da ke bambanta a kan allon waya. Me za ku rubuta?", options: ["Babu komai", "\"Launuka na iya bambanta kaɗan da na hoton\"", "\"Ba a dawo da kaya ko kaɗan\"", "Ku yi amfani da hoto mafi kyau daga intanet"], answer: 1, why: "Faɗin gaskiya game da launuka yana hana ƙorafi kuma yana gina amincewa." }
        ]
      }
    },
    {
      name: "Babi na 2: Sayarwa, karɓar kuɗi da kai kaya",
      lessons: [
        {
          title: "Amsa wa abokan ciniki da kammala ciniki",
          objectives: ["O4"],
          minutes: 5,
          goal: "Amsa wa abokin ciniki da tabbatar da oda a saƙo ɗaya mai sarari.",
          text: [
            "A intanet, mai sayarwa da ya fara amsawa a sarari sau da yawa shi ke samun ciniki. Ku amsa cikin lokutan buɗewarku, ku gaishe da abokin ciniki, ku amsa ainihin tambayarsa. Idan ba ku sani ba, ku faɗi lokacin da za ku gano.",
            "Ku ajiye gajerun amsoshin da kuke turawa akai-akai, kamar jerin farashinku, yankunan kai kaya da hanyoyin biyan kuɗi. WhatsApp Business tana bar ku ajiye amsoshi ku sake amfani da su; menu-menu sun bambanta, don haka ku duba kayan aikin kasuwanci. Wannan yana rage rubutu kuma yana sa amsoshinku su zama iri ɗaya koyaushe.",
            "Idan abokin ciniki ya shirya, ku tabbatar da odar a saƙo ɗaya: kaya, yawa, farashi, wurin kai kaya da kuɗinsa, ranar kai kaya, da yadda zai biya. Ku nemi ya amsa \"Eh\" don tabbatarwa. Misali daga Abidjan: \"Bonjour Awa. Oda: riguna 2 na atamfa (wax-print), girma M, 15,000 XOF kowacce = 30,000 XOF. Kai kaya zuwa Cocody ranar Asabar, 1,000 XOF. Biyan kuɗi ta kuɗin waya kafin kai kaya. Ki amsa OUI don tabbatarwa.\" (farashin misali ne).",
            "Ku kasance da ladabi, ko da abokin ciniki yana ciniki sosai ko yana rashin kunya. Kada ku taɓa tura zagi ko ku sa saƙonnin abokin ciniki a fili."
          ],
          steps: ["Ku gaishe da abokin ciniki ku amsa ainihin tambayarsa.", "Ku yi amfani da amsar da kuka ajiye don jerin farashi, kai kaya da biyan kuɗi.", "Ku tabbatar: kaya, yawa, farashi, wurin kai kaya, kuɗi da rana, hanyar biyan kuɗi.", "Ku nemi abokin ciniki ya amsa \"Eh\" kafin ku shirya odar."],
          words: [["Amsar da aka ajiye (quick reply)", "saƙon da kuka ajiye a manhajar kuma kuke sake turawa da ɗan taɓawa kaɗan."], ["Tabbatar da oda", "saƙo ɗaya da ke lissafa duk abin da abokin ciniki ya yarda ya saya da yadda za a biya da kai shi."]],
          slides: [
            { title: "Amsoshi masu sauri da sarari suna kawo ciniki", bullets: ["Ku amsa cikin lokutan buɗewarku", "Ku gaisa ku amsa ainihin tambayar", "Ba ku sani ba? Ku faɗi lokacin da za ku gano"] },
            { title: "Ku ajiye amsoshin da kuke turawa akai-akai", bullets: ["Jerin farashi", "Yankunan kai kaya da kuɗinsu", "Hanyoyin biyan kuɗi"] },
            { title: "Ku tabbatar da kowace oda a rubuce", bullets: ["Kaya, yawa da farashi", "Wurin kai kaya, kuɗi da rana", "Hanyar biyan kuɗi", "Abokin ciniki ya amsa \"Eh\" don tabbatarwa"] }
          ],
          tryIt: "Ku rubuta ku ajiye saƙon tabbatar da oda don kasuwancinku mai wurare na kaya, yawa, farashi, kai kaya da biyan kuɗi. Sannan ku cike shi don wata oda ta wasa.",
          youCanNow: "amsa wa abokan ciniki a sarari da tabbatar da kowace oda a saƙo ɗaya a rubuce.",
          quickCheck: [
            { objective: "O4", q: "Wane saƙon tabbatar da oda ne ya cika?", options: ["\"To, ana zuwa.\"", "\"Jakunkuna 2, KES 1,500 kowacce = KES 3,000. Kai kaya zuwa garin Kisumu ranar Juma'a, KES 200. Biya ta M-Pesa. Amsa EH.\"", "\"Turo kuɗi.\"", "\"Na gode da hira!\""], answer: 1, why: "Yana lissafa kaya, yawa, farashi, kai kaya da biyan kuɗi, kuma yana neman abokin ciniki ya tabbatar." },
            { objective: "O4", q: "Me yasa za ku ajiye amsoshin da kuke turawa akai-akai?", options: ["Don amsoshi su yi sauri kuma su zama iri ɗaya koyaushe", "Don abokin ciniki ya biya fiye da haka", "Don kada ku taɓa karanta saƙonni", "Don ku iya raba lambobin abokan ciniki"], answer: 0, why: "Amsoshin da aka ajiye suna rage rubutu kuma suna sa farashinku da ƙa'idojinku su zama iri ɗaya." }
          ]
        },
        {
          title: "Karɓar kuɗi lafiya: ku dakatar da saƙon biyan kuɗi na bogi",
          objectives: ["O5"],
          minutes: 6,
          goal: "Duba cewa biyan kuɗi ya shigo da gaske kafin ku ba da kaya.",
          text: [
            "Masu sayarwa ta intanet da yawa ana biyan su ta kuɗin waya (M-Pesa, MTN MoMo, Orange Money, Wave), canja kuɗi ta banki, ko biya da kuɗi hannu a lokacin kai kaya. 'Yan damfara sun san haka. Wata dabara da aka saba ita ce saƙon biyan kuɗi na bogi: tes, hoton allo (screenshot) ko saƙon da aka tura da ke kama da biyan kuɗi amma babu kuɗin da ya shigo.",
            "Ƙa'idarku: kaya ba sa fita sai kuɗin sun bayyana a asusunku na kanku. Ku buɗe manhajar kuɗin wayarku ko ta bankinku, ko ku danna lambar hukuma ta kamfaninku (USSD code), ku duba ragowar kuɗi ko ciniki. Hoton allo daga abokin ciniki ba shaida ba ne. Tes daga lambar waya ta yau da kullum ba shaida ba ne.",
            "Wata dabara kuma: \"Na turo muku kuɗi bisa kuskure, don Allah ku mayar mini.\" Kada ku tura komai. Ku duba ragowar kuɗinku da kanku; idan akwai kuɗin kuskure na gaske, kamfaninku zai iya mayar da shi ta hanyarsa. Kamfani na gaske ba ya taɓa neman PIN ɗinku, kalmar sirrinku ko lambar tabbatarwa ta lokaci ɗaya (code). Kada ku taɓa bayar da su, ko ga wanda ya ce daga kamfanin yake.",
            "Don biya a lokacin kai kaya, ku ƙirga kuɗin kafin ku ba da kayan, kuma ku san takardun kuɗin ƙasarku. Kowane babban banki yana fitar da gargaɗi game da zamba, misali Babban Bankin Kenya (Central Bank of Kenya) da Babban Bankin Najeriya (CBN)."
          ],
          steps: ["Ku amince kan hanyar biyan kuɗi a saƙon tabbatar da oda.", "Idan abokin ciniki ya ce ya biya, ku buɗe manhajarku ko ku danna lambar hukuma ta kamfaninku.", "Ku duba adadin kuɗin da wanda ya tura a ragowar kuɗinku ko bayanin asusunku.", "Sai a lokacin ne kawai ku ba da kayan ko ku tura su.", "Ku yi watsi da buƙatar \"mayar mini da kuɗin kuskure\"; ku bar kamfanin ya kula da mayar da kuɗi."],
          words: [["Saƙon biyan kuɗi na bogi", "tes, hoton allo ko saƙon da aka yi don ya yi kama da biyan kuɗi alhali ba a tura kuɗi ba."], ["PIN", "lambarku ta sirri don kuɗin waya ko bankinku. Ku kaɗai ya kamata ku san ta."], ["Mayar da kuɗi (reversal)", "lokacin da aka mayar da kuɗin da aka tura; na gaske kamfaninku ne ke yi, ba ku ne ke tura kuɗi ga baƙo ba."]],
          slides: [
            { title: "Dabarar biyan kuɗi na bogi", bullets: ["Tes ko hoton allo da ke kama da kuɗi sun shigo", "Babu kuɗi a asusunku", "Ɗan damfara ya tafi da kayanku"] },
            { title: "Ƙa'idarku", bullets: ["Kaya ba sa fita sai kuɗi sun shiga asusunKU", "Ku duba a manhajarku ko lambar hukuma", "Hoton allo ba shaida ba ne"] },
            { title: "\"Na turo shi bisa kuskure\"", bullets: ["Kada ku mayar da komai da kanku", "Ku duba ragowar kuɗinku", "Mayar da kuɗi na gaske ta kamfaninku yake bi"] },
            { title: "Kada ku taɓa bayarwa", bullets: ["PIN ɗinku ko kalmar sirrinku", "Lambar tabbatarwa ta lokaci ɗaya (code)", "Kamfani na gaske ba ya taɓa neman su"] }
          ],
          tryIt: "Ku rubuta ƙa'idarku ta biyan kuɗi a takarda ku manna ta kusa da inda kuke shirya oda. Sannan ku gwada: ku buɗe manhajar kuɗin wayarku ko ta bankinku ku nemo inda kuke ganin cinikinku na ƙarshe.",
          youCanNow: "duba cewa kuɗi sun shiga asusunku da gaske kafin ku tura kaya, da ƙin dabarun biyan kuɗi na bogi da mayar da kuɗi.",
          quickCheck: [
            { objective: "O5", q: "Abokin ciniki ya turo hoton allo na biyan kuɗi. Me za ku yi?", options: ["Ku tura kayan nan take", "Ku nemi hoton allo mafi girma", "Ku duba manhajarku ko lambar hukuma don ganin kuɗin", "Ku tura masa PIN ɗinku don ya duba"], answer: 2, why: "Asusunku ne kaɗai ke nuna ko kuɗin sun shigo da gaske; ana iya ƙirƙirar hoton allo na bogi." },
            { objective: "O5", q: "Wani ya ce ya turo muku kuɗi bisa kuskure kuma yana neman ku mayar masa. Mene ne mafi aminci?", options: ["Ku mayar masa nan da nan", "Ku duba ragowar kuɗinku ku bar kamfaninku ya kula da duk wani mayar da kuɗi", "Ku ba shi PIN ɗinku don ya ɗauka", "Ku tura ninki biyu don kirki"], answer: 1, why: "Wannan dabara ce da aka saba; ana mayar da kuɗin kuskure na gaske ta hannun kamfanin." }
          ],
          sources: [CBK_FRAUD, CBN_CP]
        },
        {
          title: "Kai kaya, dawo da kaya da kiyaye amincewar abokan ciniki",
          objectives: ["O6"],
          minutes: 5,
          goal: "Rubuta ƙa'idar kai kaya da dawo da kaya, ku kuma kiyaye bayanan abokan ciniki a sirri.",
          text: [
            "Abokan ciniki suna dawowa idan kai kaya yana da tabbas. Ku rubuta yankunan da kuke kai kaya, kuɗin kowanne, lokacin da yake ɗauka da yadda kuke turawa: da hannu, ɗan acaɓa (boda boda ko okada), sakon bas ko kamfanin kai kaya (courier). Ku ɗaure kaya da kyau ku tura wa abokin ciniki saƙo idan kayan sun tashi, da sunan mai kai kayan ko lambar sakon.",
            "Ƙa'idar dawo da kaya tana faɗin abin da zai faru idan wani abu ba daidai ba: misali, \"Girma bai yi daidai ba? Ku faɗa mana cikin kwana 2 za mu canja muku idan ba a yi amfani da shi ba.\" Ku sa ta gajeriya kuma mai adalci, ku bi ta kowane lokaci. A Morocco, mai sayarwa a Casablanca zai iya cewa: canji cikin kwana 3, abokin ciniki ne zai biya kuɗin mayar da kayan sai dai idan kayan suna da lahani.",
            "Lambobin wayar abokan ciniki, adireshinsu da odarsu sirri ne. Kada ku raba su, ku sa su a fili, ko ku saka mutane a rukuni (group) ko jerin watsa saƙo (broadcast list) ba tare da tambaya ba. Ƙasashe da yawa suna da dokokin kare bayanai, misali Dokar Kare Bayanai ta Kenya da Dokar Kare Bayanai ta Najeriya ta 2023. Idan ba ku tabbata abin da ya shafe ku ba, ku duba ofishin kare bayanai na ƙasarku.",
            "Bayan kai kaya, ku tambaya ko komai lafiya, ku gayyace su su ba da ra'ayi ko hoton da za ku iya rabawa, da izininsu."
          ],
          steps: ["Ku rubuta yankunan kai kaya, kuɗi, lokaci da yadda kuke turawa.", "Ku ɗaure kaya da kyau ku tura saƙo idan kayan sun tashi.", "Ku rubuta gajeriyar ƙa'idar dawo da kaya mai adalci ku bi ta.", "Ku kiyaye lambobi da adireshin abokan ciniki a sirri; ku tambaya kafin ku saka kowa a jeri.", "Ku nemi ra'ayi bayan kai kaya."],
          words: [["Ƙa'idar dawo da kaya (returns policy)", "ƙa'idarku kan abin da zai faru idan abokin ciniki yana son mayar da kaya ko canja shi."], ["Jerin watsa saƙo (broadcast list)", "jeri a WhatsApp don tura saƙo ɗaya ga mutane da yawa; waɗanda suka ajiye lambarku ne kaɗai ke karɓa."], ["Bayanan mutum (personal data)", "bayani game da mutum, kamar sunansa, lambar wayarsa ko adireshinsa."]],
          slides: [
            { title: "Kai kaya mai tabbas", bullets: ["Yankuna, kuɗi, lokaci da yadda kuke turawa", "Ku ɗaure kaya da kyau", "Ku tura wa abokin ciniki saƙo idan kayan sun tashi"] },
            { title: "Gajeriyar ƙa'idar dawo da kaya mai adalci", bullets: ["Abin da za a iya mayarwa da yaushe", "Wanda zai biya kuɗin mayar da kayan", "Ku bi ta kowane lokaci"] },
            { title: "Bayanan abokan ciniki sirri ne", bullets: ["Kada ku raba ko ku sa lambobi da adireshi a fili", "Ku tambaya kafin ku saka kowa a jeri", "Ku duba ofishin kare bayanai na ƙasarku"] }
          ],
          tryIt: "Aikin ƙarshe: ku haɗa tsarin shagonku na intanet mai shafi ɗaya: inda kuke sayarwa da dalili, rubutun bayaninku, bayanin kaya uku, saƙon tabbatar da oda da kuka ajiye, ƙa'idarku ta biyan kuɗi, da ƙa'idarku ta kai kaya da dawo da kaya.",
          youCanNow: "kai kaya da tabbas, kula da dawo da kaya cikin adalci da kiyaye bayanan abokan cinikinku a sirri.",
          quickCheck: [
            { objective: "O6", q: "Me ya kamata ƙa'idar kai kaya ta ƙunsa?", options: ["PIN ɗinku", "Adireshin abokan cinikinku", "Yankunan kai kaya, kuɗi, lokaci da yadda kuke turawa", "Kalmar \"da sauri\" kawai"], answer: 2, why: "Yankuna, kuɗi, lokaci da hanya suna faɗa wa abokan ciniki ainihin abin da za su jira." },
            { objective: "O6", q: "Kuna son tura jerin farashi kowane mako ga abokan ciniki. Mene ne daidai?", options: ["Ku sa duk lambobinsu a rukunin jama'a", "Ku sayar da lambobinsu ga wani ɗan kasuwa", "Ku saka baƙi daga jerin da aka saya", "Ku fara tambayar abokan ciniki ku kiyaye lambobinsu a sirri"], answer: 3, why: "Lambobin abokan ciniki bayanan mutum ne; ku tambaya kafin ku tura musu saƙo da yawa a lokaci ɗaya." }
          ],
          sources: [ODPC, NDPC]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Sayarwa, karɓar kuɗi da kai kaya",
        questions: [
          { objective: "O4", q: "Abokin ciniki ya yi tambayar da ba za ku iya amsawa yanzu ba. Me za ku amsa?", options: ["Babu komai", "Ku faɗi lokacin da za ku gano ku dawo masa", "Ku ce ya je wani wuri", "Ku tura dogon saƙon murya game da wani abu daban"], answer: 1, why: "Faɗin lokacin amsa a sarari yana riƙe abokin ciniki kuma yana gina amincewa." },
          { objective: "O4", q: "Me abokin ciniki zai yi bayan saƙonku na tabbatar da oda?", options: ["Ya turo muku PIN ɗinsa", "Babu komai", "Ya amsa \"Eh\" don tabbatarwa", "Ya biya ninki biyu"], answer: 2, why: "Amsar \"Eh\" a rubuce tana nuna cewa ku biyu kun amince kan oda ɗaya." },
          { objective: "O5", q: "Yaushe kaya za su iya fita daga shagonku don odar da aka biya ta kuɗin waya?", options: ["Idan kun ga kuɗin a asusunku na kanku", "Idan abokin ciniki ya turo hoton allo", "Idan wani ya kira ya ce an tura", "Idan abokin ciniki ya yi alƙawari"], answer: 0, why: "Kuɗin da ke cikin asusunku ne kaɗai shaidar biya." },
          { objective: "O5", q: "Wani mai kira ya ce daga kamfanin kuɗin wayarku yake kuma yana buƙatar PIN ɗinku. Mene ne gaskiya?", options: ["Ma'aikata na gaske suna iya neman sa", "Ku ba shi rabinsa", "Ku tura shi ta tes a maimakon haka", "Kamfani na gaske ba ya taɓa neman PIN ɗinku; ku katse wayar"], answer: 3, why: "Kamfanoni na gaske ba sa taɓa neman PIN ɗinku; duk wanda ya nema ɗan damfara ne." },
          { objective: "O6", q: "Abokin ciniki ya karɓi girman da ba daidai ba. Me zai fi taimakawa?", options: ["Ku yi watsi da saƙon", "Ƙa'idar dawo da kaya a sarari da kuke bi kowane lokaci", "Ku ɗora laifi a kan mai kai kayan", "Ku sa saƙon abokin ciniki a intanet"], answer: 1, why: "Ƙa'ida mai adalci da ake bi kowane lokaci tana magance matsaloli kuma tana riƙe abokan ciniki." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Sayar da Kaya ta Intanet a Afirka (WhatsApp Business, Kasuwannin Intanet da Kafofin Sada Zumunta)",
    questions: [
      { objective: "O1", q: "A ina ƙaramin mai sayarwa ya kamata ya fara sayarwa ta intanet?", options: ["Ko'ina lokaci ɗaya", "Inda abokan ciniki suke a yanzu, kuma inda mai sayarwar zai iya bi", "Sai inda talla ta fi tsada", "Inda babu wanda ke sayar da komai"], answer: 1, why: "Hanya tana aiki ne kawai idan abokan ciniki suna can kuma kuna amsa musu." },
      { objective: "O1", q: "Wanne ne kasuwar intanet?", options: ["Jiji", "Saƙon maraba", "PIN ɗinku", "Jerin watsa saƙo"], answer: 0, why: "Jiji, Jumia, Kilimall da Konga kasuwannin intanet ne inda masu saye ke nema daga masu sayarwa da yawa." },
      { objective: "O1", q: "Kafofin sada zumunta kamar Instagram da TikTok galibi suna taimaka muku:", options: ["Ɓoye kayanku", "Duba biyan kuɗi", "Sababbin abokan ciniki su gano ku ta hotuna da bidiyo", "Guje wa amsa saƙonni"], answer: 2, why: "Kafofin sada zumunta suna da kyau don mutanen da ba su san ku ba tukuna su same ku." },
      { objective: "O2", q: "WhatsApp Business ita ce:", options: ["Banki", "Kasuwar intanet da ke karɓar kwamishon", "Tallar da ake biya", "Manhaja daban don ƙananan kasuwanci mai bayanin kasuwanci da jerin kaya"], answer: 3, why: "Tana ƙara bayanin kasuwanci, kaya masu farashi da saƙonni na kai-tsaye." },
      { objective: "O2", q: "Wanne ne ya dace a bayanin kasuwancinku?", options: ["Lokutan buɗewarku da yankin da kuke hidima", "Kalmar sirrinku", "Adireshin abokan cinikinku", "Lambar tabbatarwarku ta lokaci ɗaya"], answer: 0, why: "Lokutan aiki da yanki suna faɗa wa abokan ciniki yaushe da ina kuke hidima." },
      { objective: "O2", q: "Kowane kaya a jerinku ya kamata ya kasance da:", options: ["Hoto kawai", "Hoto, suna, farashi da gajeren bayani", "PIN ɗin bankinku", "Babu farashi, don abokan ciniki su tambaya"], answer: 1, why: "Hoto, suna, farashi da bayani suna bar abokan ciniki su zaɓa ba tare da jira ba." },
      { objective: "O3", q: "Mafi kyawun bango don hoton kaya shi ne:", options: ["Titi mai cunkoso", "Tebur marar tsari", "Zane ko katanga mara ado", "Kusurwa mai duhu"], answer: 2, why: "Bango mara ado yana sa ido ya tsaya a kan kayan." },
      { objective: "O3", q: "Me yasa za ku nuna hannu ko tsabar kuɗi kusa da kaya?", options: ["Don nuna girmansa", "Don ɓoye kayan", "Don fayil ya yi girma", "Abokan ciniki suna son hannaye"], answer: 0, why: "Wani abu da aka sani a hoton yana nuna girman kayan." },
      { objective: "O3", q: "Shin daidai ne ku yi amfani da hoto mafi kyau na irin kayan daga intanet?", options: ["Eh, koyaushe", "Eh, idan ya fi haske", "Sai don kaya masu tsada", "A'a; ku nuna ainihin kayanku don abokan ciniki su sami abin da suka gani"], answer: 3, why: "Hotuna na gaskiya suna hana ƙorafi da dawo da kaya." },
      { objective: "O4", q: "Saƙon tabbatar da oda yana lissafa:", options: ["Farashi kawai", "Kaya, yawa, farashi, kai kaya da biyan kuɗi", "PIN ɗinku da kalmar sirrinku", "Sunayen sauran abokan ciniki"], answer: 1, why: "Duk bayanan a saƙo ɗaya suna hana rashin fahimta." },
      { objective: "O4", q: "Abokin ciniki yana ciniki sosai kuma yana rashin kunya. Me za ku yi?", options: ["Ku rama zagi", "Ku sa saƙonninsa a fili", "Ku kasance da ladabi ku ba da farashinku mafi kyau", "Ku toshe duk abokan ciniki"], answer: 2, why: "Kasancewa da ladabi yana kare sunanku, ko da wannan cinikin bai yiwu ba." },
      { objective: "O4", q: "Amsar da aka ajiye (quick reply) ta fi dacewa da:", options: ["Jerin farashinku da yankunan kai kaya", "PIN ɗinku", "Adireshin abokin ciniki", "Gulma"], answer: 0, why: "Saƙonnin da kuke turawa akai-akai ana iya ajiye su a tura da ɗan taɓawa kaɗan." },
      { objective: "O5", q: "Tes daga lambar waya ta yau da kullum ya ce \"Kun karɓi GHS 500\". Ku:", options: ["Tura kayan", "Gode masa ku tura kayan", "Tura shi ga abokai", "Fara duba ragowar kuɗin wayarku da kanku"], answer: 3, why: "Saƙonnin bogi suna zuwa daga lambobi na yau da kullum; asusunku ne kaɗai shaida." },
      { objective: "O5", q: "Wane ne ya kamata ya san PIN ɗin kuɗin wayarku?", options: ["Ku kaɗai", "Abokin ciniki", "Mai kai kaya", "Duk wanda ya kira daga kamfanin"], answer: 0, why: "PIN sirri ne; kamfani na gaske ba ya taɓa neman sa." },
      { objective: "O5", q: "Saƙon \"kuɗin kuskure\" yana neman ku mayar da kuɗi. Mataki mafi aminci shi ne:", options: ["Mayar da shi da sauri", "Mayar da ninki biyu", "Duba ragowar kuɗinku ku bar kamfanin ya kula da duk wani mayar da kuɗi", "Ba su PIN ɗinku"], answer: 2, why: "Mayar da kuɗi na gaske ta kamfanin yake bi, ba ku ne ke tura kuɗi ga baƙo ba." },
      { objective: "O5", q: "Don biya a lokacin kai kaya, mai kai kayan ya kamata ya:", options: ["Fara ba da kayan", "Ƙirga kuɗin kafin ya ba da kayan", "Karɓi alƙawarin biya daga baya", "Ɗauki hoton PIN ɗin abokin ciniki"], answer: 1, why: "Ƙirgawa da farko yana nufin kaya suna fita ne kawai idan kuɗin suna hannu." },
      { objective: "O6", q: "Saƙon kai kaya mai kyau ga abokin ciniki yana cewa:", options: ["Babu komai har sai ya iso", "Kayan sun tashi, da sunan mai kai kayan ko lambar sakon", "Adireshin sauran abokan ciniki", "PIN ɗinku"], answer: 1, why: "Faɗa wa abokan ciniki cewa kayan sun tashi, da yadda, yana gina amincewa." },
      { objective: "O6", q: "Lambobin wayar abokan ciniki da adireshinsu:", options: ["Ana iya raba su kyauta", "Abin sayarwa ne", "Bayanan mutum ne da kuke kiyayewa a sirri", "Don sakonnin jama'a ne"], answer: 2, why: "Bayanan mutum ne; ƙasashe da yawa suna kare su da doka." },
      { objective: "O6", q: "Ƙa'idar dawo da kaya ya kamata ta zama:", options: ["Doguwa kuma ta sirri", "Daban ga kowane abokin ciniki", "Ba a taɓa rubuta ta ba", "Gajeriya, mai adalci kuma ana bin ta kowane lokaci"], answer: 3, why: "Ƙa'ida a sarari mai adalci da kuke bi koyaushe tana kiyaye amincewar abokan ciniki." },
      { objective: "O6", q: "A ina za ku duba dokokin kare bayanai a ƙasarku?", options: ["Ofishin kare bayanai na ƙasarku", "Jita-jita a kafofin sada zumunta", "Ra'ayin abokin ciniki", "Tallar kasuwar intanet"], answer: 0, why: "Ofishin ƙasa, kamar ODPC na Kenya ko NDPC na Najeriya, ne ke fitar da dokokin." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 5, 7, 9, 12, 14, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Inda za a sayar", objective: "O1", notYet: "Ba a zaɓi hanya ba, ko an zaɓi hanyoyi da yawa ba tare da dalili ba.", meets: "An zaɓi hanya ɗaya ko biyu, da waɗanda ke saye a can, kuɗi da lokaci ga kowacce.", exceeds: "Yana kuma faɗin abin da zai sa a ƙara ko a bar wata hanya bayan wata uku." },
      { name: "Bayanin kasuwanci da jerin kaya", objective: "O2", notYet: "Bayanin kasuwanci ba shi da suna, lokutan aiki ko yanki, ko kaya ƙasa da uku.", meets: "Bayanin kasuwanci mai suna, bayani, yanki, lokutan aiki da biyan kuɗi, da aƙalla kaya uku masu farashi.", exceeds: "Aboki ko abokin ciniki ya duba shi kuma an gyara wani abu ɗaya da bai fito sarari ba." },
      { name: "Bayanin kaya", objective: "O3", notYet: "Hotuna marasa haske ko na aro, ko babu farashi ko kai kaya.", meets: "Bayanin kaya uku masu hotuna na gaske masu kyau, suna, farashi da kuɗin ƙasa, cikakken bayani da kai kaya.", exceeds: "Kowane bayanin kaya yana da hoton kusa da hoton girma, da bayanai na gaskiya kamar bambancin launi." },
      { name: "Tabbatar da oda", objective: "O4", notYet: "Babu saƙon tabbatarwa da aka ajiye, ko wasu bayanai sun ɓace.", meets: "Saƙon da aka ajiye mai kaya, yawa, farashi, wurin kai kaya, kuɗi da rana, biyan kuɗi, da neman a amsa Eh.", exceeds: "Akwai kuma amsoshin da aka ajiye don farashi, kai kaya da biyan kuɗi." },
      { name: "Ƙa'idar biyan kuɗi", objective: "O5", notYet: "Kaya na iya fita bisa hoton allo ko alƙawari, ko an bayar da PIN.", meets: "Ƙa'ida a rubuce: kaya ba sa fita sai kuɗi sun bayyana a asusunku na kanku; kada a taɓa bayar da PIN ko code.", exceeds: "Tana kuma magana kan buƙatun kuɗin kuskure da ƙirga kuɗi a lokacin kai kaya." },
      { name: "Kai kaya, dawo da kaya da bayanai", objective: "O6", notYet: "Babu bayanan kai kaya ko ƙa'idar dawo da kaya, ko an raba bayanan abokan ciniki.", meets: "Yankunan kai kaya, kuɗi, lokaci da hanya, gajeriyar ƙa'idar dawo da kaya, da alƙawarin kiyaye bayanan abokan ciniki a sirri.", exceeds: "Ana tambayar abokan ciniki kafin a saka su a kowane jeri, kuma ana neman ra'ayi bayan kai kaya." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce sun sami odarsu ta farko ko fiye ta intanet cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce ba su yi asara ba saboda saƙon biyan kuɗi na bogi cikin kwanaki 30 bayan kwas ɗin",
      "Masu koyo da suka ce cinikinsu na wata ya ƙaru bayan wata uku (binciken biyo baya na shirin)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar Android da aka saka WhatsApp Business a cikinta daga shagon manhajoji na hukuma",
      "Kaya uku (ko hotunansu) don sa wa bayani",
      "Takarda da alƙalami don teburin hanyoyin sayarwa, ƙa'idoji da ƙa'idar biyan kuɗi",
      "Kusan minti 60 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "A rukuni, ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama, masu koyo suna kafa bayanin kasuwancinsu a lokacin kuma suna taimakon juna.",
      "Ku yi darasin hotuna a waje da hasken rana; ku sa masu koyo su musanya wayoyi su duba bayanin kayan juna.",
      "Ku yi wasan kwaikwayo na saƙon biyan kuɗi na bogi da kiran \"kuɗin kuskure\". Kada ku taɓa neman masu koyo su nuna PIN, ragowar kuɗi ko bayanin asusu na gaske.",
      "Ku tunatar da masu koyo cewa menu-menu na manhaja, kuɗin caji na kasuwannin intanet da dokokin bayanai suna canjawa, kuma su duba manhajar, shafin masu sayarwa na kasuwar ko hukumar ƙasa.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

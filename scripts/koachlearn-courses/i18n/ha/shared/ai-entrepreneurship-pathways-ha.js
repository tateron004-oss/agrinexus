"use strict";

// Koach Learn course, Hausa (ha) translation of shared/ai-entrepreneurship-pathways.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "ai-entrepreneurship-pathways-ha",
  lang: "ha",
  translationOf: "ai-entrepreneurship-pathways",
  category: "Re-Entry",
  name: "Hanyoyin Kasuwanci da Taimakon AI",
  skills: "Zaɓar hanyar kasuwanci, Gina gajeren tsarin kasuwanci da AI, Gwada ra'ayi da abokan ciniki, Fahimtar tsarin kasuwanci da rajista, Neman kuɗin farawa da guje wa zambar tallafi, Gina taswirar ƙaddamarwa ta kwana 90",
  outcome: "mayar da ra'ayin kasuwanci zuwa tsari da ya shirya don farawa da taimakon AI: gajeren tsarin kasuwanci mai shafi ɗaya, shaida daga abokan ciniki na gaske, jerin rajista da lasisin da za a duba, jerin kuɗin farawa da taimako kyauta na gaskiya, da taswirar ƙaddamarwa ta kwana 90.",
  about: [
    "Mallakar kasuwanci yana iya kawo kuɗin shiga, 'yanci da arziki ga iyalinku da al'ummarku. Yana kuma iya zama hanya idan ƙofofin aiki suna da wuyar buɗewa, misali bayan gidan yari ko a unguwar da ba ta da masu ɗaukar aiki da yawa. Yana buƙatar tsari, kuma kayan AI suna iya sa tsarawa ya yi sauri, kuma ba za ku ji kaɗaici ba.",
    "Wannan kwas ɗin na mutanen da ke dawowa gida ne da membobin al'ummomin da ba a kula da su sosai ba, waɗanda ke son wuce ƙaramar sana'a: kasuwancin abinci, kamfanin share-share ko gyaran lambu, shagon aski, shagon intanet, kamfanin manyan motoci ko hidimar al'umma.",
    "Za ku yi amfani da mataimakan AI kyauta kamar ChatGPT, Microsoft Copilot ko Google Gemini, da kayan taimako na hukuma kyauta daga U.S. Small Business Administration (SBA, hukumar ƙananan kasuwanci ta Amurka) da IRS (hukumar haraji ta Amurka). Kowane darasi yana ɗaukar kusan minti biyar tare da aikin \"Gwada yanzu\", gwajin ilimi bayan kowane babi da jarabawa mai tambayoyi 20 a ƙarshe. Wannan kwas ba shawarar shari'a ko ta haraji ba ne; ku duba majiyoyin hukuma da masu ba da shawarar kasuwanci kyauta."
  ],
  finalTask: "Ku haɗa fakitin ƙaddamar da kasuwanci don ra'ayinku: gajeren tsarin kasuwanci mai shafi ɗaya da ya ƙunshi dukkan sassa tara, bayanan hira da aƙalla abokan ciniki goma, jerin tsarin kasuwanci, rajista, lasisi da matakan lambar haraji da za ku duba (tare da shafukan hukuma), jerin kuɗin farawa da taimako kyauta mai aƙalla zaɓuɓɓuka uku na gaske na yankinku ko na ƙasa, da taswirar ƙaddamarwa ta kwana 90 mai ranaku.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Mutanen da ke dawowa gida daga gidan yari da membobin al'ummomin da ba a kula da su sosai ba, waɗanda ke son fara kasuwanci na gaske: kasuwancin abinci, kamfanin share-share ko gyaran lambu, shagon aski, shagon intanet, kamfanin manyan motoci ko hidimar al'umma.",
    startingPoint: "Suna da ra'ayin kasuwanci, wata ƙwarewa ko ƙaramar sana'a, kuma suna iya amfani da waya. Yawancinsu ba su taɓa rubuta tsarin kasuwanci ba, ko yin hira da abokan ciniki cikin tsari, ko yi wa kasuwanci rajista, ko neman kuɗin farawa ba.",
    gap: "Sababbin kasuwanci da yawa suna rushewa saboda rashin tsari mai kyau, ra'ayoyin da ba a gwada ba, rajistar da aka manta ko zambar kuɗin farawa. Masu koyo suna buƙatar tsari da ya shirya don farawa, wanda aka gina da taimakon AI kuma aka duba da majiyoyin hukuma, don su fara bisa doka, su guje wa zamba, kuma su samar wa iyalansu kuɗin shiga.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Na'urori: waya, ko kwamfutar ɗakin karatu ko ta shiri",
      "Dokoki, kuɗaɗe da lasisi sun bambanta daga jiha zuwa jiha da gari zuwa gari; masu koyo suna tabbatar da su a shafukan hukuma (SBA, IRS, na jiha da na yanki)",
      "Ba shawarar shari'a ko ta haraji ba ne; masu koyo suna amfani da masu ba da shawarar kasuwanci kyauta da majiyoyin hukuma",
      "Mutanen da ke kan parole ko probation (sakin sharaɗi) suna duba sharuɗɗansu kafin su zaɓi kasuwanci"
    ],
    prerequisites: "Babu. Masu koyo da ke sababbi a kayan AI za su iya fara ɗaukar kwas ɗin \"Introduction to AI and Digital Confidence\" (Gabatarwa ga AI da Ƙarfin Gwiwa a Fasahar Zamani)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku kuɗinku, lokacinku, ƙwarewarku da iyakokinku", action: "kwatanta hanyoyin kasuwanci biyu ko uku da zaɓar wadda ta dace", standard: "kuna rubuta aƙalla dalili ɗaya na zaɓinku" },
    { id: "O2", condition: "Yayin da AI ke yi muku tambayoyi", action: "rubuta gajeren tsarin kasuwanci mai shafi ɗaya da ya ƙunshi dukkan sassa tara", standard: "tare da alama a kan kowace lambar hasashe don a duba ta" },
    { id: "O3", condition: "Idan kuna da jerin tambayoyi uku na abokan ciniki", action: "yin hira da masu yiwuwar zama abokan ciniki da amfani da abin da suka faɗa don canja tsarinku", standard: "kuna magana da aƙalla mutane goma kuma kuna canja aƙalla sashe ɗaya na tsarin" },
    { id: "O4", condition: "Don kasuwancinku", action: "jera tsarin kasuwanci, rajistar suna, lasisi, izini da matakan lambar haraji, tare da shafin hukuma na kowanne", standard: "kowane mataki yana da haɗi da majiyar hukuma" },
    { id: "O5", condition: "Idan aka ba ku kuɗin farawarku", action: "gina tsarin kuɗin farawa da jerin taimako kyauta, da gane zambar kuɗin farawa", standard: "tare da aƙalla zaɓuɓɓuka uku na gaske kuma babu tayin da ke neman kuɗi a gaba" },
    { id: "O6", condition: "Ta amfani da tsarinku da jerin abubuwan dubawa", action: "ƙirƙirar taswirar ƙaddamarwa ta kwana 90 mai ranaku don shiryawa, gwadawa da ƙaddamarwa", standard: "tare da rana ga kowane mataki da sunan abokin da zai riƙa bin diddigin ku" }
  ],
  chapters: [
    {
      name: "Babi na 1: Daga ra'ayi zuwa tsari",
      lessons: [
        {
          objectives: ["O1"],
          title: "Zaɓar hanyar kasuwancinku",
          minutes: 5,
          goal: "Kwatanta hanyoyin kasuwanci ku zaɓi wadda ta dace da burinku da halin da kuke ciki.",
          text: [
            "Akwai hanya fiye da ɗaya ta mallakar kasuwanci. Ƙaramar sana'a tana kawo ƙarin kuɗi da ɗan shiri kaɗan. Ƙaramin kasuwancin hidima (share-share, yanke ciyawa, ɗaukar kaya) yana girma da abokan ciniki da ma'aikata. Kasuwancin kaya (abinci, sana'ar hannu, tufafi) yana buƙatar kayan aiki da wurin sayarwa. Kasuwancin intanet yana sayarwa ta shafin intanet ko kasuwar intanet. Wasu mutane suna sayen franchise, ko su haɗu da wasu a ƙungiyar haɗin gwiwa (cooperative).",
            "Ku daidaita hanyar da rayuwarku: kuɗin da za ku iya yin kasada da shi, lokacin da kuke da shi, ƙwarewarku, abin hawa, dokokin lasisi, kuma ga masu kan sa ido, sharuɗɗan parole ko probation ɗinku.",
            "Ku nemi AI ya kwatanta: \"Ina da $500, awa 20 a mako, ƙwarewar girki kuma ba ni da mota. Ka kwatanta kasuwancin shirya abinci, taimakon dafa abincin biki da sayar da kayan gasa a kasuwa: kuɗin farawa, lokacin sayarwa ta farko, lasisin da za a duba da haɗari.\" Sannan ku tabbatar da sassan lasisi da kuɗi a majiyoyin hukuma."
          ],
          steps: ["Ku jera kuɗinku, lokacinku, ƙwarewarku da iyakokinku.", "Ku jera ra'ayoyin kasuwanci biyu ko uku.", "Ku nemi AI ya kwatanta kuɗin farawa, lokacin sayarwa ta farko, lasisi da haɗari.", "Ku tabbatar da lasisi da kuɗi a majiyoyin hukuma.", "Ku zaɓi hanya ɗaya da za ku tsara."],
          words: [["Ɗan kasuwa (entrepreneur)", "mutumin da ke farawa da gudanar da kasuwanci."], ["Franchise", "kasuwancin da kuke saye wanda ke amfani da suna da tsarin wani kamfani."], ["Ƙungiyar haɗin gwiwa (cooperative)", "kasuwancin da membobinsa ne suka mallake shi kuma suke gudanar da shi."]],
          slides: [
            { title: "Hanyoyi da yawa", bullets: ["Ƙaramar sana'a ko kasuwancin hidima", "Kasuwancin kaya ko na intanet", "Franchise ko ƙungiyar haɗin gwiwa"] },
            { title: "Ku daidaita shi da rayuwarku", bullets: ["Kuɗi, lokaci, ƙwarewa, abin hawa", "Lasisi da sharuɗɗan sa ido"] },
            { title: "Ku kwatanta da AI", bullets: ["Kuɗin farawa da lokacin sayarwa ta farko", "Lasisi da haɗari", "Ku tabbatar a majiyoyin hukuma"] }
          ],
          tryIt: "Ku rubuta kuɗinku, lokacinku, ƙwarewarku da iyakokinku. Ku nemi AI ya kwatanta ra'ayoyi biyu ko uku, sannan ku zaɓi hanya ɗaya ku rubuta dalili.",
          youCanNow: "kwatanta hanyoyin kasuwanci da zaɓar wadda ta dace da rayuwarku.",
          quickCheck: [
            { objective: "O1", q: "Mene ne franchise?", options: ["Kasuwancin da membobinsa suka mallaka", "Kasuwancin da kuke saye wanda ke amfani da suna da tsarin wani kamfani", "Bashi ga ƙananan kasuwanci", "Mai ba da shawarar kasuwanci kyauta"], answer: 1, why: "Franchise yana amfani da suna da tsarin wani kamfani bayan an biya kuɗi." },
            { objective: "O1", q: "Kuna da ɗan kuɗi kaɗan kuma kuna da lokaci da yamma. AI ya ba da shawarar buɗe gidan abinci. Me za ku yi?", options: ["Ku buɗe gidan abincin domin AI ya faɗa", "Ku haƙura da kasuwanci", "Ku kwatanta shi da hanyoyin da ba su da tsada waɗanda suka dace da kuɗinku da lokacinku", "Ku ci bashi gwargwadon iko"], answer: 2, why: "Ku zaɓi hanyar da ta dace da kuɗinku, lokacinku da ƙwarewarku na gaskiya." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Gina gajeren tsarin kasuwanci da AI",
          minutes: 6,
          goal: "Rubuta gajeren tsarin kasuwanci mai shafi ɗaya da ya ƙunshi dukkan sassa tara.",
          text: [
            "SBA tana bayyana nau'o'in tsarin kasuwanci biyu: dogon tsari na gargajiya da masu ba da bashi ke yawan nema, da gajeren tsarin farawa (lean) da ke cikin shafi ɗaya. Ku fara da gajere.",
            "Gajeren tsarin SBA yana da sassa tara: manyan abokan hulɗa, manyan ayyuka, manyan kayan aiki, darajar da kuke bayarwa (dalilin da abokan ciniki ke zaɓar ku), dangantaka da abokan ciniki, rukunin abokan ciniki (su wane ne abokan cinikinku), hanyoyin isa gare su, tsarin kashe kuɗi da hanyoyin samun kuɗi.",
            "Ku nemi AI ya taimaka: \"Ka taimake ni in cike gajeren tsarin kasuwanci mai waɗannan sassa tara don kasuwancina na wanke motoci a inda suke a [gari]. Ka yi mini tambaya ɗaya bayan ɗaya.\" Ku amsa da bayanan gaskiya. Sannan ku duba hasashen kuɗin AI da farashin gaske da kuka nema."
          ],
          steps: ["Ku buɗe samfurin shafi ɗaya mai akwatuna tara.", "Ku nemi AI ya yi muku tambaya ɗaya bayan ɗaya don kowane sashe.", "Ku cike kowane akwati da bayanan gaskiya.", "Ku duba kuɗaɗe da farashi da ƙiyasin farashi na gaske.", "Ku tsaya a shafi ɗaya."],
          words: [["Gajeren tsarin kasuwanci (lean business plan)", "tsari mai shafi ɗaya da ke ƙunshe da manyan sassan kasuwanci."], ["Darajar da kuke bayarwa (value proposition)", "dalilin da yasa abokan ciniki za su zaɓe ku."], ["Hanyar samun kuɗi (revenue stream)", "hanyar da kasuwanci ke samun kuɗi."]],
          slides: [
            { title: "Nau'o'in tsari biyu (SBA)", bullets: ["Na gargajiya: dogo, don masu ba da bashi", "Gajere (lean): shafi ɗaya; ku fara a nan"] },
            { title: "Sassa tara", bullets: ["Abokan hulɗa, ayyuka, kayan aiki", "Darajar da kuke bayarwa, dangantaka, rukunin abokan ciniki", "Hanyoyin isa, kashe kuɗi, samun kuɗi"] },
            { title: "AI a matsayin mai yi muku tambayoyi", bullets: ["Tambaya ɗaya bayan ɗaya", "Ku amsa da bayanan gaskiya", "Ku duba kuɗaɗe da farashin gaske"] }
          ],
          sources: [{ name: "SBA: Rubuta tsarin kasuwancinku", url: "https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan" }],
          tryIt: "Ku cike gajeren tsari mai shafi ɗaya don kasuwancin da kuka zaɓa yayin da AI ke yi muku tambayoyi. Ku sa alama a duk sashen da kuke buƙatar nemo lambobin gaske.",
          youCanNow: "rubuta gajeren tsarin kasuwanci mai shafi ɗaya da taimakon AI.",
          quickCheck: [
            { objective: "O2", q: "Mene ne ma'anar \"hanyoyin samun kuɗi\" a gajeren tsari?", options: ["Yadda kasuwancin ke samun kuɗi", "Su wane ne abokan cinikinku", "Yadda kuke isa ga abokan ciniki", "Sunan kasuwancinku"], answer: 0, why: "Hanyoyin samun kuɗi su ne hanyoyin da kuɗi ke shigowa." },
            { objective: "O2", q: "AI ya cike kuɗin hayarku na wata da hasashe. Me za ku yi?", options: ["Ku bar shi; AI yawanci yana daidai", "Ku goge layin kuɗin", "Ku ninka lambar don ku tsira", "Ku sa masa alama ku nemo farashin gaske"], answer: 3, why: "Dole a duba lambobin hasashe da farashin gaske." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Gwada ra'ayin da abokan ciniki na gaske",
          minutes: 5,
          goal: "Yi magana da mutane goma da za su iya zama abokan ciniki, ku yi amfani da abin da suka faɗa don inganta tsarin.",
          text: [
            "Tsari hasashe ne kawai har sai abokan ciniki sun tabbatar da shi. Ku yi magana da aƙalla mutane goma da suka dace da rukunin abokan cinikinku. Ku tambaye su game da matsalarsu, ba ra'ayinku ba: \"Yaya ake wanke muku mota yanzu? Nawa kuke biya? Me ke ba ku haushi a ciki?\"",
            "Sannan ku gwada saye: ku ba da damar yin oda kafin lokaci, farashin farawa ko jerin masu rajista. Idan mutane suka ce \"ra'ayi mai kyau\" abin farin ciki ne; idan suka biya ko suka yi rajista, wannan ne shaida.",
            "Ku liƙa bayananku (ba tare da sunaye ko lambobin waya ba) a cikin AI ku tambaya: \"Ka taƙaita abin da waɗannan abokan ciniki goma suka faɗa. Waɗanne alamu kake gani, kuma me ya kamata in canja a tsarina?\" Ku sabunta gajeren tsarin da abin da kuka koya."
          ],
          steps: ["Ku rubuta tambayoyi uku game da matsalar abokin ciniki.", "Ku yi magana da aƙalla mutane goma da za su iya zama abokan ciniki.", "Ku ba da damar oda kafin lokaci, farashin farawa ko jerin masu rajista.", "Ku nemi AI ya nemo alamu a bayananku, bayan kun cire sunaye.", "Ku sabunta gajeren tsarin."],
          words: [["Rukunin abokan ciniki (customer segment)", "rukunin abokan ciniki masu buƙatu iri ɗaya."], ["Tabbatarwa (validate)", "nuna da shaida ta gaske cewa abokan ciniki suna son wani abu."], ["Oda kafin lokaci (pre-order)", "abokin ciniki ya yarda zai saya kafin kayan ko hidimar su shirya."]],
          slides: [
            { title: "Ku tambaye su game da matsalarsu", bullets: ["Yaya suke magance ta yanzu?", "Nawa suke biya?", "Me ke ba su haushi?"] },
            { title: "Ku gwada saye", bullets: ["Oda kafin lokaci ko rajista", "Biya ya fi \"ra'ayi mai kyau\""] },
            { title: "Ku koya ku gyara", bullets: ["AI yana nemo alamu a bayanai", "Ku fara cire sunaye", "Ku sabunta tsarinku"] }
          ],
          tryIt: "A wannan makon ku yi magana da aƙalla mutane biyar da za su iya zama abokan ciniki ta amfani da tambayoyinku uku. Ku sa AI ya taƙaita alamun, sannan ku canja sashe ɗaya na gajeren tsarinku.",
          youCanNow: "gwada ra'ayin kasuwanci da abokan ciniki na gaske da inganta tsarin.",
          quickCheck: [
            { objective: "O3", q: "Wace ce tambaya mafi kyau a hira da abokin ciniki?", options: ["\"Za ka sayi kayana mai kyau?\"", "\"Yaya kake magance wannan matsalar yanzu?\"", "\"Kana son tambarina?\"", "\"Za ka ara mini kuɗi?\""], answer: 1, why: "Tambaya game da matsalarsu da abin da suke yi yanzu tana kawo shaida ta gaskiya." },
            { objective: "O3", q: "Mutane takwas cikin goma sun ce ba za su taɓa biyan kuɗin hidimarku ba. Me za ku yi?", options: ["Ku ƙyale su ku fara duk da haka", "Ku nemi AI ya ce sun yi kuskure", "Ku daina magana da abokan ciniki", "Ku canja tsarin, kamar farashi, hidimar ko abokan cinikin"], answer: 3, why: "Shaidar abokan ciniki an yi ta ne don canja tsarin kafin ku kashe kuɗi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Daga ra'ayi zuwa tsari",
        questions: [
          { objective: "O1", q: "Mece ce ƙungiyar haɗin gwiwa (cooperative)?", options: ["Ofishin gwamnati", "Bashi", "Kasuwancin da membobinsa suka mallaka kuma suke gudanarwa", "Wani nau'in lasisi"], answer: 2, why: "Membobi ne suke mallaka da gudanar da ƙungiyar haɗin gwiwa." },
          { objective: "O4", q: "AI ya ce kasuwancin abincinku ba ya buƙatar izini. Me ya kamata ku yi?", options: ["Ku tabbatar a majiyoyin hukuma na gari, gunduma ko jiha", "Ku amince ku fara", "Ku tambayi aboki kawai", "Ku ƙyale batun izini"], answer: 0, why: "Dole a duba dokokin lasisi a majiyoyin hukuma." },
          { objective: "O2", q: "Sassa nawa gajeren tsarin farawa na SBA yake da su?", options: ["Biyu", "Hamsin", "Ɗaya", "Tara"], answer: 3, why: "SBA ta jera sassa tara." },
          { objective: "O2", q: "Mece ce darajar da kuke bayarwa (value proposition)?", options: ["Kuɗin da ke asusun bankinku", "Dalilin da yasa abokan ciniki za su zaɓe ku", "Lambar harajinku", "Adireshinku"], answer: 1, why: "Tana bayyana darajarku ta musamman." },
          { objective: "O3", q: "Wace ce shaida mafi ƙarfi cewa abokan ciniki suna son ra'ayinku?", options: ["Sun ce \"ra'ayi mai kyau\"", "Sun yi oda kafin lokaci ko sun yi rajista", "Iyalinku suna son sa", "AI yana son sa"], answer: 1, why: "Aiki ya fi yabo ƙarfi." }
        ]
      }
    },
    {
      name: "Babi na 2: Shiryawa, kuɗin farawa da ƙaddamarwa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Tushen tsarin kasuwanci, rajista da lambar haraji",
          minutes: 6,
          goal: "Jera matakan shiryawa da kasuwancinku ke buƙata da wuraren hukuma don duba su.",
          text: [
            "Tsare-tsaren kasuwanci da aka saba a Amurka: sole proprietorship (ku da kasuwancin ɗaya ne; mafi sauƙi), LLC (kamfani mai iyakantaccen alhaki; yana iya raba bashin kasuwanci da bashinku na kanku, tare da kuɗin jiha da takardu), da corporation (kamfani mai rajista). Ƙungiyoyin da ba na riba ba (nonprofit) wata hanya ce daban. Ku nemi AI ya bayyana bambance-bambancen, sannan ku zaɓa da taimakon mai ba da shawarar kasuwanci kyauta ko ƙwararre.",
            "Shiryawa yawanci ya haɗa da: yi wa sunan kasuwanci rajista a jiharku ko gundumarku, samun lasisin kasuwanci na gari ko gunduma, izini na musamman (abinci, kula da yara, manyan motoci, gyaran gashi da kwalliya da sauransu), da lambar haraji. IRS ta ce Employer Identification Number (EIN, lambar harajin kasuwanci) kyauta ce idan kun nema daga IRS; ku yi hankali da shafukan da ke karɓar kuɗi a kanta.",
            "Dokoki da kuɗaɗe sun bambanta daga jiha zuwa jiha da gari zuwa gari, don haka ku yi jerin abubuwan dubawa ku tabbatar da kowanne a shafukan hukuma: Secretary of State ɗinku, garinku ko gundumarku, hukumar harajin jiharku da irs.gov. Wasu lasisi suna duba tarihin laifi; hukumar lasisin tana bayyana dokokinta."
          ],
          steps: ["Ku nemi AI ya bayyana bambancin sole proprietorship da LLC a halin da kuke ciki.", "Ku tabbatar da zaɓinku tare da mai ba da shawara kyauta ko ƙwararre.", "Ku jera rajistar suna, lasisi da izinin da za ku duba.", "Ku nemo kowanne a shafukan hukuma na jiha, gunduma da gari.", "Ku nemi EIN kyauta a irs.gov idan kuna buƙata."],
          words: [["Sole proprietorship", "kasuwancin da mutum ɗaya ya mallaka ba tare da wani mahaluki na shari'a daban ba."], ["LLC", "limited liability company (kamfani mai iyakantaccen alhaki): tsarin kasuwanci da zai iya raba bashin kasuwanci da na kanku."], ["Secretary of State", "ofishin jiha da ke yawan kula da rajistar kasuwanci."]],
          slides: [
            { title: "Tsare-tsaren da aka saba", bullets: ["Sole proprietorship: mafi sauƙi", "LLC: yana raba bashin kasuwanci; akwai kuɗi da takardu", "Ku nemi taimako wajen zaɓa"] },
            { title: "Jerin abubuwan shiryawa", bullets: ["Rajistar sunan kasuwanci", "Lasisin gari ko gunduma; izini na musamman", "Lambar haraji (EIN)"] },
            { title: "Ku duba shafukan hukuma", bullets: ["Secretary of State, gari, gunduma", "Hukumar harajin jiha da irs.gov", "EIN kyauta ce daga IRS"] }
          ],
          sources: [{ name: "IRS: Samun Employer Identification Number (EIN)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" }, { name: "SBA: Zaɓar tsarin kasuwanci", url: "https://www.sba.gov/business-guide/launch-your-business/choose-business-structure" }],
          tryIt: "Ku yi jerin abubuwan shiryawa don kasuwancinku: tsari, rajistar suna, lasisi, izini da EIN. Kusa da kowanne, ku rubuta shafin hukuma da za ku tabbatar da shi a ciki.",
          youCanNow: "jera matakan shiryawa da kasuwanci ke buƙata da inda za a tabbatar da kowanne.",
          quickCheck: [
            { objective: "O4", q: "Mene ne EIN?", options: ["Lasisin kasuwanci daga gari", "Wani nau'in bashin kasuwanci", "Lambar harajin kasuwanci daga IRS", "Asusun bankin kasuwanci"], answer: 2, why: "EIN ita ce lambar harajin kasuwanci daga IRS." },
            { objective: "O4", q: "Aboki ya ce ba kwa buƙatar izini don kasuwancin abinci daga gida. Me za ku yi?", options: ["Ku duba da ofishin lafiya na garinku, gundumarku ko jiharku", "Ku amince da abokinku", "Ku tambayi AI ku amince da amsarsa", "Ku fara sayarwa ku jira ku gani"], answer: 0, why: "Dokokin izini sun bambanta daga wuri zuwa wuri, don haka ku tabbatar da ofishin hukuma." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Neman kuɗin farawa da taimako kyauta",
          minutes: 6,
          goal: "Gina tsarin kuɗin farawa na gaskiya da jerin taimako kyauta, ku guje wa zambar kuɗin farawa.",
          text: [
            "Yawancin ƙananan kasuwanci suna farawa da ajiyar kai, sayarwar farko da taimakon iyali ko al'umma. Ku fara ƙanƙane gwargwadon iko, ku girma da sayarwa. Ku nemi AI ya taimaka muku jera kuɗin farawa da nemo hanyoyin rage su, kamar hayar kayan aiki ko amfani da kicin na haɗin gwiwa.",
            "Idan kuna buƙatar bashi, ku duba masu ba da bashi masu manufar taimakon al'umma. Shirin microloan na SBA yana ba da bashi har zuwa $50,000 ta masu ba da bashi na al'umma da ba na riba ba; SBA ta ce matsakaici kusan $13,000 ne, kuma wa'adi mafi tsawo shekara bakwai ne. Community development financial institutions (CDFIs) da asusun bashi na yanki ma suna taimakon mutanen da bankuna ke yawan ƙi. Tallafi (grant) yana nan amma yawanci akwai gasa sosai kuma na musamman ne.",
            "Taimako kyauta: SBA tana nuna Small Business Development Centers (SBDC), masu ba da shawara na SCORE, Women's Business Centers da Veterans Business Outreach Centers don shawara kyauta ko mai araha. Ku yi hankali da duk wanda ya yi alƙawarin tallafi ko bashi tabbatacce idan kun biya kuɗi a gaba: wannan zamba ce da aka saba gani."
          ],
          steps: ["Ku jera kuɗin farawa ku rage inda za ku iya.", "Ku tsara farawa ƙanƙane ku girma da sayarwa.", "Ku nemo masu ba da microloan na SBA da CDFIs kusa da ku.", "Ku nemo SBDC, SCORE ko wani abokin hulɗar SBA mafi kusa.", "Kada ku taɓa biyan kuɗi a gaba don tallafi ko bashi \"tabbatacce\"."],
          words: [["Microloan (ƙaramin bashi)", "ƙaramin bashin kasuwanci, sau da yawa daga mai ba da bashi na al'umma."], ["CDFI", "community development financial institution: mai ba da bashi da ke mai da hankali kan al'ummomin da ba a kula da su sosai ba."], ["Tallafi (grant)", "kuɗin da ba za ku mayar ba, yawanci ana bayarwa don wata manufa ta musamman."]],
          slides: [
            { title: "Ku fara ƙanƙane", bullets: ["Ajiya da sayarwar farko", "Ku rage kuɗi: haya, rabawa, aron kayan aiki"] },
            { title: "Masu ba da bashi masu manufa", bullets: ["Microloan na SBA: har zuwa $50,000, matsakaici kusan $13,000", "Ta masu ba da bashi na al'umma da ba na riba ba", "CDFIs da asusun bashi na yanki"] },
            { title: "Taimako kyauta da zamba", bullets: ["SBDC, SCORE, Women's Business Centers, VBOCs", "Babu kuɗi a gaba don tallafi \"tabbatacce\""] }
          ],
          sources: [{ name: "SBA: Microloans (ƙananan bashi)", url: "https://www.sba.gov/funding-programs/loans/microloans" }, { name: "SBA: Taimako a yankinku", url: "https://www.sba.gov/local-assistance" }],
          tryIt: "Ku jera kuɗin farawarku ku rage aƙalla ɗaya. Sannan ku nemo zaɓuɓɓukan kuɗi biyu na gaske da cibiyar shawara kyauta ɗaya kusa da ku (ko ta intanet), ku rubuta yadda za ku tuntuɓe su.",
          youCanNow: "yin tsarin kuɗin farawa na gaskiya, nemo taimako kyauta da gane zambar kuɗin farawa.",
          quickCheck: [
            { objective: "O5", q: "Mene ne CDFI?", options: ["Fom ɗin harajin gwamnati", "Mai ba da bashi da ke mai da hankali kan al'ummomin da ba a kula da su sosai ba", "Wani nau'in franchise", "Lasisin kasuwanci"], answer: 1, why: "CDFIs masu ba da bashi ne da ke mai da hankali kan al'ummomin da ba a kula da su sosai ba." },
            { objective: "O5", q: "Wani talla a intanet ya yi alƙawarin tallafi tabbatacce idan kun fara biyan kuɗi. Me za ku yi?", options: ["Ku biya kuɗin da sauri kafin ya ƙare", "Ku aika bayanan bankinku don a duba", "Ku ɗauke shi a matsayin zamba ku ƙi biya", "Ku nemi a rage kuɗin"], answer: 2, why: "Tallafin gaske ba ya neman kuɗi a gaba don tabbatar da kuɗi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Gina taswirar ƙaddamarwa ta kwana 90",
          minutes: 5,
          goal: "Mayar da tsarinku zuwa taswirar ƙaddamarwa ta kwana 90 mai ranaku.",
          text: [
            "Taswira tana mayar da tsari zuwa aiki. Ku raba kwana 90 kashi uku. Kwana 1-30: shiryawa (tsari, rajista, lasisi, asusun banki, kayan aiki na asali). Kwana 31-60: shiri da sayarwa kafin lokaci (kayan aiki, farashi, talla, shirya abokan ciniki na farko). Kwana 61-90: ƙaddamarwa da koyo (sayarwar farko, ra'ayoyin abokan ciniki, bin diddigin kuɗi, gyara).",
            "Ku tambayi AI: \"Ka mayar da gajeren tsarina da jerin abubuwan shiryawa zuwa teburin taswirar ƙaddamarwa ta kwana 90 mai mako, aiki da ranar kammalawa. Ina da awa 20 a mako.\" Sannan ku sa ta zama ta gaske: ku canja ranaku su dace da rayuwarku, ku ƙara ƙarin lokaci saboda ofisoshin gwamnati masu jinkiri.",
            "Ku zaɓi lokaci ɗaya a kowane mako don duba taswirar, kuma ku raba ta da wanda zai riƙa bin diddigin ku, kamar mai ba da shawara, mai jagora ko aboki. Ku yi murnar sayarwar farko."
          ],
          steps: ["Kwana 1-30: ayyukan shiryawa.", "Kwana 31-60: shiri da sayarwa kafin lokaci.", "Kwana 61-90: ƙaddamarwa, bin diddigin kuɗi da koyo.", "Ku nemi AI ya fara rubuta teburin, sannan ku gyara ranakun.", "Ku sa lokacin duba na mako-mako da abokin bin diddigi."],
          words: [["Taswira (roadmap)", "tsarin da ke nuna matakai bisa jere tare da ranaku."], ["Abokin bin diddigi (accountability partner)", "mutumin da ke duba ci gabanku kuma yana ƙarfafa ku."]],
          slides: [
            { title: "Kashi uku na kwana 30", bullets: ["1-30: shiryawa", "31-60: shiri da sayarwa kafin lokaci", "61-90: ƙaddamarwa da koyo"] },
            { title: "AI ya rubuta, ku gyara", bullets: ["Mako, aiki, ranar kammalawa", "Ya dace da lokacinku na gaske", "Ku ƙara lokaci saboda ofisoshi masu jinkiri"] },
            { title: "Ku ci gaba a kan hanya", bullets: ["Duba na mako-mako", "Abokin bin diddigi", "Ku yi murnar sayarwar farko"] }
          ],
          tryIt: "Aikin ƙarshe: ku gina taswirar ƙaddamarwa ta kwana 90 da AI ku gyara ta. Ku haɗa ta da gajeren tsarinku, bayanan abokan ciniki, jerin abubuwan shiryawa da jerin kuɗi da taimako don kammala fakitin ƙaddamar da kasuwancinku.",
          youCanNow: "mayar da ra'ayin kasuwanci zuwa tsari da ya shirya don farawa da taswira ta kwana 90.",
          quickCheck: [
            { objective: "O6", q: "Mene ne abin da ake mai da hankali a kai a kwana 31 zuwa 60 na taswirar kwana 90?", options: ["Yin ritaya daga kasuwancin", "Sayar da kasuwancin", "Takardu kawai", "Gwadawa da abokan ciniki na farko da ingantawa"], answer: 3, why: "Watan tsakiya na gwadawa da ingantawa ne kafin cikakkiyar ƙaddamarwa." },
            { objective: "O6", q: "Kuna ci gaba da wuce ranakun taswira. Me za ku yi?", options: ["Ku nemi abokin bin diddigi ya riƙa duba ci gabanku kowane mako", "Ku goge taswirar", "Ku cire dukkan ranakun", "Ku fara wani kasuwanci daban"], answer: 0, why: "Abokin bin diddigi yana taimaka muku ku ci gaba da gyara tsarin." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Shiryawa, kuɗin farawa da ƙaddamarwa",
        questions: [
          { objective: "O4", q: "Wani shafi yana karɓar $250 don samo muku EIN. A cewar IRS:", options: ["Wannan shi ne kuɗin hukuma", "EIN tana kai $1,000", "Lauyoyi ne kaɗai ke iya samo ta", "EIN kyauta ce daga IRS; ku yi hankali da shafukan da ke karɓar kuɗi"], answer: 3, why: "IRS ta ce EIN kyauta ce." },
          { objective: "O5", q: "Mene ne iyakar microloan na SBA, a cewar SBA?", options: ["$50,000", "$5 million", "$500", "Babu iyaka"], answer: 0, why: "SBA ta ce microloan yana kai har $50,000." },
          { objective: "O5", q: "Wani ya kira ku yana alƙawarin tallafin kasuwanci tabbatacce idan kun fara biyan $300. Wannan:", options: ["Tsarin tallafi na yau da kullum ne", "Sharaɗin SBA ne", "Zamba ce da aka saba gani", "Haraji ne"], answer: 2, why: "Tallafin gaske ba ya neman kuɗi a gaba don tabbaci." },
          { objective: "O5", q: "Wanne ne ke ba da shawarar kasuwanci kyauta ko mai araha, a cewar SBA?", options: ["Masu ba da bashin gaggawa (payday lenders)", "Tallace-tallacen kafofin sada zumunta", "Shagunan jingina", "Small Business Development Centers da SCORE"], answer: 3, why: "Abokan hulɗar SBA ne." },
          { objective: "O6", q: "A taswirar kwana 90, me ke faruwa a kwana 1-30?", options: ["Bikin ƙaddamarwa kawai", "Babu komai", "Shiryawa: rajista, lasisi, asusun banki, kayan aiki", "Sayar da kasuwancin"], answer: 2, why: "Shiryawa ne ke zuwa farko." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Hanyoyin Kasuwanci da Taimakon AI",
    questions: [
      { objective: "O1", q: "Ɗan kasuwa (entrepreneur) shi ne:", options: ["Ma'aikacin gwamnati", "Mutumin da ke farawa da gudanar da kasuwanci", "Banki", "Wani nau'in bashi"], answer: 1, why: "'Yan kasuwa suna fara kasuwanci." },
      { objective: "O1", q: "Franchise shi ne:", options: ["Kasuwancin da kuke saye wanda ke amfani da suna da tsarin wani kamfani", "Tallafi kyauta", "Fom ɗin haraji", "Ƙungiyar haɗin gwiwa"], answer: 0, why: "Franchise yana amfani da sunan da ke akwai." },
      { objective: "O1", q: "Wajen zaɓar hanya, mutanen da ke kan sa ido ya kamata su kuma duba:", options: ["Launin da suka fi so", "Babu wani abu", "Sharuɗɗan parole ko probation ɗinsu", "Farashin abokin hamayya kawai"], answer: 2, why: "Sharuɗɗa suna iya hana wasu ayyukan kasuwanci." },
      { objective: "O2", q: "Wane irin tsari ne SBA ta bayyana a matsayin shafi ɗaya?", options: ["Gajeren tsarin farawa (lean)", "Tsari na gargajiya", "Takardar biyan haraji", "Takardar neman bashi"], answer: 0, why: "Gajeren tsari jadawali ne mai shafi ɗaya." },
      { objective: "O2", q: "\"Rukunin abokan ciniki\" a gajeren tsari yana nufin:", options: ["Kuɗaɗenku", "Abokan hulɗarku", "Bankinku", "Su wane ne abokan cinikinku"], answer: 3, why: "Rukuni-rukuni ne na abokan ciniki." },
      { objective: "O2", q: "\"Hanyoyin isa\" a gajeren tsari yana nufin:", options: ["Tashoshin talabijin kawai", "Yadda kuke isa ga abokan ciniki", "Masu kawo muku kaya", "Harajinku"], answer: 1, why: "Hanyoyin isa su ne yadda kuke isa da sayarwa ga abokan ciniki." },
      { objective: "O2", q: "AI ya yi hasashen kayan aikinku za su kai $200. Ya kamata ku:", options: ["Yi amfani da hasashen", "Duba farashin gaske kafin ku amince da shi", "Ninka shi ba tare da dubawa ba", "Ƙyale kuɗin"], answer: 1, why: "Ƙiyasin farashi na gaske ya fi hasashen AI." },
      { objective: "O3", q: "Yayin hira da abokan ciniki, ku tambaya game da:", options: ["Ko suna son ra'ayinku sosai", "Kalmomin sirrinsu", "Harajin kuɗin shigarsu", "Matsalarsu da yadda suke magance ta yanzu"], answer: 3, why: "Tambayoyi game da matsala suna kawo amsoshi na gaskiya." },
      { objective: "O3", q: "Kafin ku liƙa bayanan abokan ciniki a cikin AI, ku cire:", options: ["Sunaye da lambobin waya", "Alamun", "Tambayoyinku", "Babu komai"], answer: 0, why: "Ku kare sirrin abokan ciniki." },
      { objective: "O3", q: "Tabbatar da ra'ayi (validate) yana nufin:", options: ["A buga tambari a tikitin ajiye mota", "Yin rajista da jiha", "Nuna da shaida ta gaske cewa abokan ciniki suna son sa", "Biyan haraji"], answer: 2, why: "Tabbatarwa shaida ce daga abokan ciniki." },
      { objective: "O4", q: "Sole proprietorship shi ne:", options: ["Babban kamfani", "Ƙungiyar da ba ta riba ba", "Hukumar gwamnati", "Kasuwancin da mutum ɗaya ya mallaka ba tare da mahaluki na shari'a daban ba"], answer: 3, why: "Shi ne tsari mafi sauƙi." },
      { objective: "O4", q: "LLC yana iya taimakawa:", options: ["Guje wa dukkan haraji", "Tsallake lasisi", "Raba bashin kasuwanci da na kanku", "Tabbatar da riba"], answer: 2, why: "Iyakantaccen alhaki shi ne babban fasalinsa." },
      { objective: "O4", q: "A ina ake yawan yi wa sunan kasuwanci rajista?", options: ["Shafin kafofin sada zumunta", "Jiharku, sau da yawa Secretary of State, ko gundumarku", "Banki kawai", "Babu inda"], answer: 1, why: "Ofisoshin jiha ko na yanki ne ke kula da rajista." },
      { objective: "O4", q: "Dokoki da kuɗaɗen shirya kasuwanci:", options: ["Sun bambanta daga jiha zuwa jiha da gari zuwa gari, don haka ku tabbatar a shafukan hukuma", "Iri ɗaya ne a ko'ina", "Ba sa taɓa canjawa", "AI ne ke tsara su"], answer: 0, why: "Dokokin yanki sun bambanta." },
      { objective: "O5", q: "SBA ta ce ana bayar da microloan ta:", options: ["Masu ba da bashin gaggawa (payday lenders)", "Kafofin sada zumunta", "Masu ba da bashi na tsakiya na al'umma da ba na riba ba", "IRS"], answer: 2, why: "SBA tana ba masu tsakiya kuɗi, su kuma suke ba da bashin." },
      { objective: "O5", q: "CDFI shi ne:", options: ["Mai ba da bashi da ke mai da hankali kan al'ummomin da ba a kula da su sosai ba", "Fom ɗin haraji", "Lasisin kasuwanci", "Katin bashi (credit card)"], answer: 0, why: "CDFIs suna taimakon mutanen da bankuna ke yawan barin su." },
      { objective: "O5", q: "Yawancin ƙananan kasuwanci suna farawa da:", options: ["Manyan tallafi tabbatattu", "Kuɗin masu zuba jari (venture capital)", "Cin caca", "Ajiya, sayarwar farko da taimakon al'umma"], answer: 3, why: "Farawa ƙanƙane da sayarwa shi ne aka fi saba." },
      { objective: "O5", q: "SCORE tana bayarwa:", options: ["Bashin gaggawa (payday loans)", "Jagoranci ga masu ƙananan kasuwanci", "Lasisin kasuwanci", "Lambobin haraji"], answer: 1, why: "SCORE abokiyar hulɗar SBA ce ta jagoranci." },
      { objective: "O6", q: "Kwana 61-90 na taswira suna mai da hankali kan:", options: ["Zaɓar hanya", "Ƙaddamarwa, sayarwar farko, ra'ayoyi da bin diddigin kuɗi", "Takardun shiryawa", "Rufe kasuwancin"], answer: 1, why: "Kashi na ƙarshe shi ne ƙaddamarwa da koyo." },
      { objective: "O6", q: "Abokin bin diddigi:", options: ["Yana yi muku aikinku", "Yana ara muku kuɗi", "Yana cike muku harajinku", "Yana duba ci gabanku kuma yana ƙarfafa ku"], answer: 3, why: "Bin diddigi yana taimaka muku ku kammala abin da kuka fara." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      2,
      4,
      6,
      9,
      11,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Gajeren tsarin kasuwanci",
        objective: "O2",
        notYet: "Akwai sassan da suka ɓace, ko an ɗauki lambobin hasashe a matsayin gaskiya.",
        meets: "Shafi ɗaya da ya ƙunshi dukkan sassa tara, tare da alama ko dubawa a kan lambobin hasashe.",
        exceeds: "An cike farashin gaske, kuma tsarin yana nuna ra'ayoyin abokan ciniki."
      },
      {
        name: "Shaidar abokan ciniki",
        objective: "O3",
        notYet: "Hirarraki ƙasa da goma, ko babu canji a tsarin.",
        meets: "Bayanai daga aƙalla hirarraki goma da aƙalla canji ɗaya a tsarin.",
        exceeds: "Akwai shaida mafi ƙarfi kamar oda kafin lokaci ko rajista."
      },
      {
        name: "Jerin abubuwan shiryawa",
        objective: "O4",
        notYet: "Akwai matakan da suka ɓace ko ba su da majiyar hukuma.",
        meets: "An jera tsari, rajista, lasisi, izini da EIN, kowanne da shafin hukuma.",
        exceeds: "Ya nuna waɗanne matakai ke da kuɗi da wane ofishi za a kira idan akwai tambaya."
      },
      {
        name: "Kuɗin farawa da taimako kyauta",
        objective: "O5",
        notYet: "Zaɓuɓɓukan gaske ƙasa da uku, ko akwai tayin da ke neman kuɗi a gaba.",
        meets: "Aƙalla zaɓuɓɓuka uku na gaske na kuɗi ko taimako kyauta tare da yadda za a tuntuɓe su.",
        exceeds: "An rage kuɗin farawa, kuma an sa ranar ganawa da mai ba da shawara."
      },
      {
        name: "Taswirar kwana 90",
        objective: "O6",
        notYet: "Babu ranaku, ko matakan ba su bi jere ba.",
        meets: "Matakan shiryawa, gwadawa da ƙaddamarwa tare da rana ga kowanne.",
        exceeds: "Ya ambaci sunan abokin bin diddigi da duba na mako-mako."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka yi wa kasuwanci rajista ko suka samu EIN cikin kwanaki 90 (binciken biyo baya)",
      "Masu koyo da suka yi sayarwarsu ta farko cikin kwanaki 90",
      "Masu koyo da suka gana da SCORE, Small Business Development Center ko wani mai ba da shawara kyauta cikin kwanaki 30",
      "Masu koyo da suka ce sun guje wa zambar kuɗin farawa ko ta tallafi"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Mataimakin AI kyauta kamar ChatGPT, Microsoft Copilot ko Google Gemini",
      "Shafukan hukuma: sba.gov, irs.gov da shafukan kasuwanci na jiharku da garinku",
      "Takarda, littafin rubutu ko takardar intanet kyauta don fakitin ƙaddamarwa",
      "Kusan minti 60 don darussa da gwaje-gwaje, tare da mako ɗaya don magana da abokan ciniki"
    ],
    facilitatorNotes: [
      "Ku ba masu koyo mako ɗaya tsakanin Babi na 1 da Babi na 2 don su yi hirarrakinsu da abokan ciniki.",
      "Ku tunatar da masu koyo cewa wannan ba shawarar shari'a ko ta haraji ba ce; ku haɗa su da SCORE, Small Business Development Center ko cibiyar kasuwanci ta yanki.",
      "Ku yi gargaɗi game da zambar kuɗin farawa: tallafin gaske da EIN ba sa taɓa neman kuɗi a gaba ga wani ɓangare na uku.",
      "Ku tunatar da masu koyo da ke kan parole ko probation su duba sharuɗɗansu kafin su zaɓi kasuwanci.",
      "Ku ba da maki ga fakitin ƙaddamarwa da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

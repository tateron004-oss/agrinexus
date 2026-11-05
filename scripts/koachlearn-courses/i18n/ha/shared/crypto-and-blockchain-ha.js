"use strict";

// Koach Learn course, Hausa (ha) translation of shared/crypto-and-blockchain.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// Explains how it works and its risks; it does NOT recommend buying (README rule 6).

const FTC_CRYPTO = { name: "FTC: Abin da ya kamata ku sani game da kirifto da zamba", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams" };

module.exports = {
  id: "crypto-and-blockchain-ha",
  lang: "ha",
  translationOf: "crypto-and-blockchain",
  category: "Seniors and Technology",
  name: "Fahimtar Kuɗin Kirifto (Cryptocurrency) da Blockchain",
  skills: "Bayanin blockchain da kalmomi masu sauƙi, Bayanin yadda ake aikawa da ajiye kirifto, Faɗin haɗurra, Gane zambar kirifto, Kai rahoton zamba",
  outcome: "bayyana da kalmomi masu sauƙi yadda blockchain da kuɗin kirifto suke aiki, faɗin manyan haɗurra, da duba kowane tayi ko saƙon kirifto da alamun gargaɗin zamba, don ku yanke shawararku a hankali kuma ku san inda za ku kai rahoton damfara.",
  about: [
    "Kuna jin labarin Bitcoin da kirifto a labarai, a wurin aiki, daga iyali da kuma a tallace-tallace. Wasu mutane suna samun kuɗi; da yawa suna asara, kuma kirifto yana ɗaya daga cikin hanyoyin da 'yan damfara suka fi neman a biya su da su. Wannan kwas ɗin yana bayanin yadda yake aiki don ku fahimce shi, ku kare kanku da mutanen da kuke ƙauna.",
    "A Babi na 1 za ku koyi mene ne blockchain, mene ne kuɗin kirifto, da yadda walat (wallet) da maɓallai (keys) suke aiki. A Babi na 2 za ku koyi haɗurra, alamun gargaɗin zambar kirifto, da inda ake kai rahoton damfara.",
    "Wannan kwas ɗin ba ya gaya muku ko ku sayi kirifto ko kada ku saya. Ba shawarar kuɗi ba ne. Don shawarwarin kuɗi, ku yi magana da ƙwararre mai lasisi da kuka zaɓa da kanku. Kowane darasi yana ɗaukar kusan minti biyar, akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku yi \"katin kariya daga kirifto\" mai shafi ɗaya don kanku ko wani a iyalinku: jimloli biyu kan mene ne blockchain da kuɗin kirifto, haɗurra uku, alamun gargaɗin zambar kirifto huɗu, da wuraren hukuma na kai rahoton damfara. Sannan ku karanta talla ko saƙon kirifto ɗaya na gaske (daga imel, tes ko kafofin sada zumunta) ku yi alama kan alamun gargaɗin da yake nunawa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke jin labarin Bitcoin da kirifto a labarai, a wurin aiki, daga iyali da kuma a tallace-tallace: tsofaffi, 'ya'yansu manya da masu kula da su, matasa da ba su daɗe suna amfani da manhajojin kuɗi ba, da mutanen al'umma da ke son kare kansu da wasu.",
    startingPoint: "Suna iya amfani da waya don saƙonni, imel da kafofin sada zumunta, kuma wataƙila suna amfani da manhajar banki ko katin ATM (debit card). Yawancinsu ba za su iya faɗin mene ne blockchain ko kalmomin dawo da walat (recovery phrase) ba, yadda kirifto ya bambanta da kuɗi a banki, ko yadda zambar kirifto take aiki.",
    gap: "Kirifto yana ɗaya daga cikin hanyoyin da 'yan damfara suka fi neman a biya su da su, kuma biyan kirifto yawanci ba a iya dawo da shi. Mutanen da ba su fahimce shi ba suna iya rasa ajiyarsu ga jarin bogi, zambar soyayya, masu yin kamar su ma'aikatan gwamnati ne da zambar \"dawo da kuɗi\", ko su bayyana kalmomin dawo da walat su rasa komai.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; kowace kalmar kirifto ana bayyana ta da misalin rayuwar yau da kullum",
      "Na'urori: waya ko kwamfuta don karanta shafukan gargaɗi na hukuma; ba a buƙatar manhajar kirifto ko asusu",
      "Lokaci: kusan minti 5 kowane darasi, kusan minti 60 gaba ɗaya",
      "Ba shawarar kuɗi ba ne: kwas ɗin ba ya taɓa gaya wa masu koyo su saya ko su sayar; shawarwarin kuɗi suna zuwa ga ƙwararre mai lasisi da mai koyo ya zaɓa",
      "Sirri da tsaro: masu koyo ba sa taɓa bayyana kalmomin dawo da walat ko maɓallin sirri (private key), kuma ba sa taɓa aika kuɗi a lokacin atisaye"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da misalin littafin rubutu na tare", action: "bayanin mene ne blockchain, tare da kalmomin block, chain da decentralized", standard: "cikin jimloli biyu ko uku masu sauƙi ba tare da kuskure game da yadda ake ajiye bayanai ba" },
    { id: "O2", condition: "Ba tare da rubutu a gabanku ba", action: "bayanin mene ne kuɗin kirifto da jera yadda ya bambanta da kuɗi a asusun banki mai inshora", standard: "kuna faɗin aƙalla bambanci uku, har da cewa biyan kirifto yawanci ba a iya dawo da shi" },
    { id: "O3", condition: "Idan aka ba ku kalmomin walat, adireshin jama'a, kalmomin dawo da walat da exchange", action: "bayanin kowanne da gane waɗanda ba za a taɓa bayyana su ba", standard: "kowanne an bayyana shi daidai, kuma kalmomin dawo da walat da maɓallin sirri koyaushe suna a ɓoye" },
    { id: "O4", condition: "Ba tare da rubutu a gabanku ba", action: "faɗin manyan haɗurra huɗu na kirifto da hanya ɗaya ta kare kai daga kowanne", standard: "dukkan haɗurra huɗu (farashi, asara, kamfani da zamba) an faɗe su daidai" },
    { id: "O5", condition: "Idan aka ba ku talla, saƙo ko rubutu na kirifto na gaske", action: "duba shi da alamun gargaɗin zambar kirifto da zaɓar amsa mai aminci", standard: "kuna yin alama kan kowace alamar gargaɗi da ya nuna, kuma kuna zaɓar ku tsaya, kada ku biya, ku yi magana da wanda kuka amince da shi" },
    { id: "O6", condition: "Idan aka ba ku zambar kirifto da ta faru da ku ko wani da kuka sani", action: "jera wuraren hukuma na kai rahotonta da bayanan da za a rubuta", standard: "kuna faɗin aƙalla shafukan hukuma biyu na kai rahoto da aƙalla bayanai huɗu da za a rubuta" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yadda kirifto da blockchain suke aiki",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne blockchain",
          minutes: 5,
          goal: "Bayyana blockchain da kalmomi masu sauƙi ta amfani da misali mai sauƙi.",
          text: [
            "Ku yi tunanin littafin rubutun biyan kuɗi da dubban kwamfutoci kowacce take da kwafinsa. Bayan 'yan mintoci ana ƙara sabon shafin biyan kuɗi. Kowane shafi an kulle shi da shafin da ya gabace shi da wani irin \"zanen yatsa\" na lissafi, don haka idan wani ya canja tsohon shafi, duk sauran kwafe-kwafen za su nuna cewa bai yi daidai ba.",
            "Wannan littafin rubutu na tare shi ne blockchain. Kowane shafi block ne, kuma shafukan an haɗa su kamar sarƙa (chain) bisa jeri. Babu banki ko kamfani ɗaya da ke riƙe littafin; cibiyar kwamfutocin ce ke riƙe shi. Ana kiran wannan decentralized (ba ƙarƙashin iko ɗaya ba).",
            "Saboda wannan tsari, biyan kuɗin da aka rubuta a cikin blockchain yana da matuƙar wuyar canjawa ko sokewa. Yawancin blockchain kuma a buɗe suke ga jama'a: kowa zai iya duba biyan kuɗin, ko da ba a nuna sunayen masu su ba."
          ],
          words: [["Blockchain", "bayanan biyan kuɗi na tare, da kwamfutoci da yawa suke riƙewa, inda kowane sabon block yake haɗe da wanda ya gabace shi."], ["Block", "rukunin biyan kuɗi da ake ƙarawa a blockchain tare."], ["Decentralized", "ana gudanar da shi ta cibiyar kwamfutoci da yawa maimakon banki ko kamfani ɗaya."], ["Ledger (littafin lissafi)", "bayanan biyan kuɗi, kamar littafin asusu."]],
          slides: [
            { title: "Ku yi tunanin littafin rubutu na tare", bullets: ["Dubban kwamfutoci suna riƙe da kwafi", "Ana yawan ƙara sabbin shafukan biyan kuɗi", "Kowane shafi an kulle shi da wanda ya gabace shi"] },
            { title: "Kalmomin blockchain", bullets: ["Block = shafi ɗaya na biyan kuɗi", "Chain = shafukan da aka haɗa bisa jeri", "Decentralized = babu banki ɗaya mai iko"] },
            { title: "Abin da hakan yake nufi gare ku", bullets: ["Biyan kuɗi yana da matuƙar wuyar canjawa ko sokewa", "Yawancin blockchain bayanai ne a buɗe ga jama'a"] }
          ],
          tryIt: "Ku bayyana blockchain ga wani (ko da babbar murya ga kanku) ta amfani da misalin littafin rubutu na tare. Ku haɗa da kalmomin block, chain da decentralized.",
          youCanNow: "bayanin mene ne blockchain da dalilin da yasa bayanansa suke da wuyar canjawa.",
          quickCheck: [
            { objective: "O1", q: "A misalin littafin rubutu na tare, mene ne block?", options: ["Dukkan littafin", "Bankin da ya mallaki littafin", "Shafi ɗaya na biyan kuɗi da aka ƙara a littafin", "Kalmar sirri ta littafin"], answer: 2, why: "Kowane shafin biyan kuɗi block ne, kuma shafukan an haɗa su bisa jeri." },
            { objective: "O1", q: "Wani ya ce muku zai iya canja tsohon biyan kuɗi a ɓoye a blockchain na jama'a. Me za ku yi tunani?", options: ["Ba abu ne mai yiwuwa ba, domin sauran kwafe-kwafen ba za su yi daidai ba", "Abu ne mai sauƙi, domin kamfani ɗaya ne ke riƙe littafin", "Abu ne na yau da kullum, domin blockchain na sirri ne", "Gaskiya ne, domin block ba a haɗa su ba"], answer: 0, why: "Kowane block an kulle shi da wanda ya gabace shi, don haka shafin da aka canja ba zai yi daidai da sauran kwafe-kwafen ba." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Mene ne kuɗin kirifto",
          minutes: 5,
          goal: "Bayyana mene ne kuɗin kirifto da yadda ya bambanta da dala a banki.",
          text: [
            "Kuɗin kirifto (cryptocurrency, ko crypto) kuɗi ne na zamani (dijital) da ake rubutawa a blockchain. Bitcoin ne na farko; yanzu akwai dubbai, kamar Ether. Stablecoin wani nau'in kirifto ne da aka tsara don ya kasance kusa da darajar kuɗi na yau da kullum kamar dalar Amurka, amma har yanzu yana iya faɗuwa.",
            "Ba gwamnati ce ke fitar da kirifto ba, kuma farashinsa yana hawa da sauka bisa ga abin da mutane suke son biya. Farashi yana iya hawa ko faɗuwa sosai cikin rana ɗaya.",
            "Biyan kirifto ya bambanta da biyan kati. FTC ta ce biyan kirifto ba shi da kariyar doka da katunan bashi (credit card) da na ATM (debit card) suke da ita, kuma yawanci ba a iya dawo da shi. Kuɗi a kirifto kuma ba ɗaya yake da kuɗi a asusun banki mai inshora ba."
          ],
          words: [["Kuɗin kirifto (crypto)", "kuɗi na zamani da ake rubutawa a blockchain, kamar Bitcoin ko Ether."], ["Stablecoin", "kirifto da aka tsara don ya kasance kusa da darajar kuɗi na yau da kullum, kamar dalar Amurka."], ["Volatile (mai sauyawa)", "farashin da zai iya hawa ko sauka sosai, da sauri."]],
          sources: [FTC_CRYPTO],
          slides: [
            { title: "Kirifto shi ne...", bullets: ["Kuɗi na zamani da ake rubutawa a blockchain", "Bitcoin ne na farko; Ether wani ne", "Stablecoin suna ƙoƙarin yin daidai da kuɗi kamar dala"] },
            { title: "Bai yi kama da dala a banki ba", bullets: ["Ba gwamnati ce ke fitar da shi ba", "Farashi yana iya canjawa sosai cikin rana ɗaya"] },
            { title: "Bai yi kama da biyan kati ba", bullets: ["Babu kariyar doka irin ta kati (FTC)", "Yawanci ba a iya dawo da shi"] }
          ],
          tryIt: "Ku rubuta bambanci uku tsakanin biya da katin ATM (debit card) da biya da kirifto. Ku yi amfani da shafin FTC da ke cikin majiyoyin wannan darasi don duba amsarku.",
          youCanNow: "bayanin mene ne kuɗin kirifto da yadda ya bambanta da kuɗin banki da biyan kati.",
          quickCheck: [
            { objective: "O2", q: "Mene ne kuɗin kirifto?", options: ["Kuɗin takarda daga gwamnati", "Kuɗi na zamani da ake rubutawa a blockchain", "Asusun ajiya a banki", "Katin kyauta (gift card) daga shago"], answer: 1, why: "Kirifto kuɗi ne na zamani da ake rubutawa a blockchain, ba gwamnati ce ke fitar da shi ba." },
            { objective: "O2", q: "Wani mai sayarwa ya nemi ku biya da kirifto maimakon katin bashinku (credit card). Me ya kamata ku tuna?", options: ["Kirifto yana da kariyar doka fiye da kati", "Biyan kirifto koyaushe yana da sauƙin sokewa", "Kirifto yana da inshora kamar asusun banki", "Biyan kirifto yawanci ba a iya dawo da shi idan wani abu ya lalace"], answer: 3, why: "FTC ta ce biyan kirifto ba shi da kariyar kati kuma yawanci ba a iya dawo da shi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Walat, maɓallai da exchange",
          minutes: 5,
          goal: "Bayyana yadda ake ajiye da aika kirifto, da abin da ba za a taɓa bayyanawa ba.",
          text: [
            "Ana ajiye kirifto a cikin walat (wallet): manhaja, shafin intanet ko ƙaramar na'ura da ke riƙe maɓallanku. Adireshin jama'a (public address) kamar lambar asusu ne da za ku iya ba wani don ya aiko muku da kirifto. Maɓallin sirri (private key), wanda sau da yawa ake nuna shi a matsayin kalmomin dawo da walat (recovery phrase, jerin kalmomi 12 ko 24), kamar babban maɓalli ne. Duk wanda yake da shi, shi ne mai iko da kirifton.",
            "Kada ku taɓa bayyana kalmomin dawo da walat ko maɓallin sirri ga kowa: ba ma'aikatan taimako ba, ba \"mai taimako\" ba, ba manhaja ba, ba mataimakin AI ba. Kamfani na gaske ba zai taɓa neman su ba. Idan kun rasa su, kirifton zai iya ɓacewa har abada.",
            "Exchange kamfani ne inda mutane suke saya, sayarwa da ajiye kirifto. Ana iya yin kutse (hack) a exchange ko ya rufe. A Amurka, ku duba ko kamfani yana da rajista kuma ku karanta ƙorafe-ƙorafen da aka yi a kansa kafin ku amince da shi; hukumomi masu sa ido kamar SEC da CFTC suna wallafa gargaɗi."
          ],
          words: [["Walat (wallet)", "manhaja ko na'ura da ke riƙe maɓallan kirifton ku."], ["Adireshin jama'a (public address)", "lambar da wasu suke amfani da ita don aiko muku da kirifto, kamar lambar asusu."], ["Maɓallin sirri / kalmomin dawo da walat", "sirrin da ke ba da iko da kirifto; kada ku taɓa bayyana shi."], ["Exchange", "kamfani inda mutane suke saya, sayarwa da ajiye kirifto."]],
          sources: [FTC_CRYPTO, { name: "SEC: Aika bayani ko ƙorafi", url: "https://www.sec.gov/tcr" }, { name: "CFTC: Aika ƙorafi", url: "https://www.cftc.gov/complaint" }],
          slides: [
            { title: "Walat da maɓallai", bullets: ["Walat = manhaja ko na'ura da ke riƙe maɓallanku", "Adireshin jama'a = kamar lambar asusu", "Maɓallin sirri / kalmomin dawo da walat = babban maɓalli"] },
            { title: "Kada ku taɓa bayyanawa", bullets: ["Kalmomin dawo da walat ko maɓallin sirrinku", "Ba ga ma'aikatan taimako, masu taimako, manhajoji ko AI ba", "Kamfanoni na gaske ba sa taɓa neman su"] },
            { title: "Exchange", bullets: ["Kamfanonin saya, sayarwa da ajiye kirifto", "Ana iya yin kutse a cikinsu ko su rufe", "Ku fara duba ƙorafe-ƙorafe da gargaɗin hukumomi"] }
          ],
          tryIt: "Ku rubuta jimla ɗaya kowanne: mene ne adireshin jama'a, mene ne kalmomin dawo da walat, da abin da za ku ce idan wani \"ma'aikacin taimako\" ya nemi kalmomin dawo da walat ɗinku.",
          youCanNow: "bayanin yadda ake ajiye da aika kirifto da dalilin da yasa ba za a taɓa bayyana kalmomin dawo da walat ba.",
          quickCheck: [
            { objective: "O3", q: "Mene ne kalmomin dawo da walat (recovery phrase)?", options: ["Gaisuwar da kuke aikawa tare da biyan kuɗi", "Sunan exchange", "Adireshin jama'a naku", "Jerin kalmomi 12 ko 24 da ke ba da iko da kirifton ku"], answer: 3, why: "Duk wanda yake da kalmomin dawo da walat shi ne mai iko da kirifton, kamar babban maɓalli." },
            { objective: "O3", q: "Wani abokinku yana son aiko muku da kirifto kuma yana tambayar me zai yi amfani da shi. Me za ku ba shi?", options: ["Kalmomin dawo da walat ɗinku", "Maɓallin sirrinku", "Adireshin jama'a naku", "Lambar PIN ta bankinku"], answer: 2, why: "Adireshin jama'a kamar lambar asusu ne, kuma ba laifi a bayar da shi don karɓar kirifto." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yadda kirifto da blockchain suke aiki",
        questions: [
          { objective: "O1", q: "Wane misali ne ya fi bayyana blockchain?", options: ["Jerin lambobin waya a waya", "Takardar lissafi ta sirri ta banki ɗaya", "Cakin takarda", "Littafin rubutun biyan kuɗi na tare da kwamfutoci da yawa kowacce take da kwafinsa"], answer: 3, why: "Blockchain bayanai ne na tare da kwamfutoci da yawa suke riƙewa." },
          { objective: "O1", q: "Me yasa yake da wuya a canja tsohon bayani a blockchain?", options: ["An buga shi a takarda", "Alƙali ne yake gadinsa", "Kowane block yana haɗe da wanda ya gabace shi, don haka canje-canje ba sa yin daidai da sauran kwafe-kwafe", "Ana goge shi kowace rana"], answer: 2, why: "Block da aka haɗa da kwafe-kwafe masu yawa suna sa canje-canje su bayyana." },
          { objective: "O2", q: "Me FTC ta ce game da biyan kirifto idan aka kwatanta da katunan bashi?", options: ["Suna da kariya fiye da haka", "Iri ɗaya ne", "Ba su da irin kariyar doka ɗaya kuma yawanci ba a iya dawo da su", "Koyaushe suna da inshora"], answer: 2, why: "FTC ta yi gargaɗin cewa biyan kirifto ba shi da kariya irin ta kati." },
          { objective: "O2", q: "Mene ne stablecoin?", options: ["Tsabar kuɗi ta ƙarfe", "Wani nau'in walat", "Takardar ajiyar gwamnati (bond)", "Kirifto da aka tsara don ya kasance kusa da kuɗi kamar dala"], answer: 3, why: "Stablecoin suna ƙoƙarin bin darajar kuɗi na yau da kullum, ko da yake har yanzu suna iya faɗuwa." },
          { objective: "O3", q: "Wani daga \"taimakon walat\" ya nemi kalmomin dawo da walat ɗinku guda 12 don gyara wata matsala. Me za ku yi?", options: ["Ku ba shi don ya taimaka", "Ku ba shi rabinsu", "Ku rubuta su a AI don a duba su", "Ku ƙi; kamfanoni na gaske ba sa taɓa neman su"], answer: 3, why: "Duk wanda yake da kalmomin dawo da walat shi ne mai iko da kirifton." }
        ]
      }
    },
    {
      name: "Babi na 2: Haɗurra, zamba da kai rahoto",
      lessons: [
        {
          objectives: ["O4"],
          title: "Haɗurra na gaske",
          minutes: 5,
          goal: "Faɗin manyan haɗurran riƙe ko karɓar kirifto.",
          text: [
            "Haɗarin farashi: farashin kirifto yana iya faɗuwa sosai, kuma babu wanda zai iya yin alƙawarin cewa zai dawo. Kada ku taɓa saka kuɗin da kuke buƙata don kuɗin haya, abinci, kuɗaɗen biya ko magani.",
            "Haɗarin asara: idan kun rasa kalmomin dawo da walat ɗinku, ko kun aika kirifto zuwa adireshin da ba daidai ba, yawanci ya tafi kenan. Biyan kuɗi yawanci ba a iya dawo da shi.",
            "Haɗarin kamfani: ana iya yin kutse a exchange da manhajoji ko su rufe. FDIC ta ce kadarorin kirifto ba sa cikin inshorar ajiya ta FDIC, wadda take kare ajiya a bankunan da FDIC ta yi wa inshora kaɗai. Haɗarin zamba: kirifto ne hanyar biya da 'yan damfara suka fi so domin yana da sauri kuma yana da wuyar dawowa.",
            "Wannan kwas ɗin ba ya gaya muku ko ku saya. Idan kuna tunanin yin haka, ku yi magana da ƙwararren masanin kuɗi mai lasisi da kuka zaɓa da kanku, kuma ku fara karanta gargaɗin hukuma."
          ],
          words: [["Haɗari (risk)", "yiwuwar rasa kuɗi ko wani abu ya lalace."], ["Inshorar FDIC", "kariyar gwamnatin Amurka ga kuɗi a asusun ajiya na bankuna masu inshora; ba ta kare kirifto."]],
          sources: [FTC_CRYPTO, { name: "FDIC: Fahimtar inshorar ajiya", url: "https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance" }],
          slides: [
            { title: "Haɗarin farashi", bullets: ["Farashi yana iya faɗuwa sosai", "Kada ku yi amfani da kuɗin haya, abinci, kuɗaɗen biya ko magani"] },
            { title: "Haɗarin asara", bullets: ["Rasa kalmomin dawo da walat = rasa kirifto", "Adireshin da ba daidai ba ko zamba = yawanci ya tafi"] },
            { title: "Haɗarin kamfani da na zamba", bullets: ["Ana iya yin kutse a manhajoji da exchange ko su rufe", "Kirifto ba shi da inshorar FDIC", "'Yan damfara suna son a biya su da kirifto"] },
            { title: "Ba shawara ba ne", bullets: ["Wannan kwas ɗin ba ya cewa ku saya ko ku sayar", "Ku yi magana da ƙwararre mai lasisi da kuka zaɓa"] }
          ],
          tryIt: "Ku rubuta haɗurra huɗu da kalmominku: farashi, asara, kamfani da zamba. Ga kowanne, ku rubuta hanya ɗaya da mutum zai iya kare kansa.",
          youCanNow: "faɗin manyan haɗurran kirifto da bayanin dalilin da yasa ba za a taɓa saka kuɗin da kuke buƙata cikin haɗari ba.",
          quickCheck: [
            { objective: "O4", q: "Mene ne haɗarin farashi a kirifto?", options: ["Farashi yana iya faɗuwa sosai kuma babu wanda zai iya yin alƙawarin cewa zai dawo", "Gwamnati ce ke ƙayyade farashin", "Farashin yana hawa ne kawai da lokaci", "Farashin daidai yake da dala kowace rana"], answer: 0, why: "Farashin kirifto yana iya faɗuwa sosai, don haka kada ku taɓa saka kuɗin da kuke buƙata don kuɗaɗen biya." },
            { objective: "O4", q: "Ɗan uwanku yana son saka kuɗin hayar wannan watan a kirifto. Me za ku gaya masa?", options: ["Ci gaba; farashi koyaushe yana dawowa", "Kada ka yi amfani da kuɗin da kake buƙata don haya, abinci, kuɗaɗen biya ko magani", "Ka saka shi a exchange domin exchange suna da inshora", "Ka aika shi da sauri kafin farashin ya canja"], answer: 1, why: "Farashi yana iya faɗuwa sosai, don haka kuɗin da ake buƙata don abubuwan more rayuwa bai kamata ya shiga kirifto ba." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gane zambar kirifto",
          minutes: 5,
          goal: "Duba tayi ko saƙon kirifto da alamun gargaɗin zamba.",
          text: [
            "FTC ta jera alamun zambar kirifto. 'Yan damfara ne kaɗai suke dagewa a biya su da kirifto, musamman kafin a fara, ko don \"kare\" kuɗinku. 'Yan damfara ne kaɗai suke ba da tabbacin riba ko riba mai yawa da sauri. Shaidar shahararrun mutane (celebrity) tana iya zama ta bogi.",
            "Ku yi hankali da sabon abokin intanet ko masoyi da ya fara ba ku shawarwarin zuba jari ko neman kirifto. Ku yi hankali da kira ko tes da ke cewa daga hukumar gwamnati, banki ko kamfanin wuta ko ruwa ne, suna cewa kuna da bashi ko an daskarar da asusunku kuma dole ku biya da kirifto ko a injin ATM na kirifto.",
            "Ku kuma yi hankali da ayyukan da ke neman ku biya kuɗi da kirifto, da imel da ke barazanar bayyana abubuwanku na sirri sai kun biya da kirifto. Idan kuka ga ɗaya daga cikin waɗannan, ku tsaya. Kada ku biya, kada ku danna, kuma ku yi magana da wanda kuka amince da shi."
          ],
          steps: ["Yana neman ku biya da kirifto ko ku yi amfani da ATM na kirifto?", "Yana alƙawarin riba tabbatacciya ko mai sauri?", "Ya fito daga sabon abokin intanet, masoyi na intanet ko baƙo?", "Yana gaggauta ku ko yana yi muku barazana?", "Idan akwai \"eh\" ko ɗaya: ku tsaya, kada ku biya, ku tambayi wanda kuka amince da shi."],
          words: [["Zamba", "dabarar satar kuɗi ko bayanai."], ["ATM na kirifto", "injin da ke mayar da tsabar kuɗi zuwa kirifto; 'yan damfara sukan gaya wa mutane su yi amfani da shi."], ["Zambar soyayya", "zambar da wani yake gina dangantaka ta intanet don samun kuɗi."]],
          sources: [FTC_CRYPTO],
          slides: [
            { title: "'Yan damfara ne kaɗai suke...", bullets: ["Dagewa a biya su da kirifto", "Ba da tabbacin riba ko riba mai sauri", "Amfani da shaidar shahararrun mutane ta bogi"] },
            { title: "Ku yi hankali da", bullets: ["Sabbin abokan intanet masu ba da shawarar zuba jari", "Kiran \"gwamnati\" ko \"banki\" da ke cewa ku biya da kirifto", "Ayyukan da ke karɓar kuɗi da kirifto"] },
            { title: "Idan kuka gane ɗaya", bullets: ["Ku tsaya", "Kada ku biya ko ku danna", "Ku yi magana da wanda kuka amince da shi"] }
          ],
          tryIt: "Ku nemo talla, saƙo ko rubutu ɗaya na kirifto a kafofin sada zumunta. Ku bi tambayoyin dubawa guda biyar, ku rubuta kowace alamar gargaɗi da yake nunawa.",
          youCanNow: "duba tayi ko saƙon kirifto da alamun gargaɗi, da tsayawa kafin ku biya.",
          quickCheck: [
            { objective: "O5", q: "Wanne a cikin waɗannan alamar gargaɗin zambar kirifto ce?", options: ["Wasiƙar banki da kuka nema", "Aboki yana bayanin mene ne blockchain", "Dagewa ku biya da kirifto kafin a fara don kare kuɗinku", "Labari game da farashin Bitcoin"], answer: 2, why: "'Yan damfara ne kaɗai suke dagewa a biya da kirifto kafin a fara ko don \"kare\" kuɗinku." },
            { objective: "O5", q: "Wani tes ya ce an daskarar da asusun bankinku kuma dole ku biya a ATM na kirifto yau. Me za ku yi?", options: ["Ku je ATM na kirifto nan take", "Ku amsa da lambar asusunku", "Ku danna hanyar haɗi (link) da ke cikin tes ɗin don dubawa", "Ku tsaya, kada ku biya ko ku danna, ku yi magana da wanda kuka amince da shi"], answer: 3, why: "Iƙirarin cewa kuna da bashi kuma dole ku biya da kirifto alamar zamba ce, don haka ku tsaya kada ku biya." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kai rahoton damfara da taimakon wasu",
          minutes: 5,
          goal: "Jera inda ake kai rahoton zambar kirifto da abin da za a rubuta.",
          text: [
            "Idan ku ko wani da kuka sani an yi masa ƙoƙarin zamba, ku kai rahoto. FTC ta jera waɗannan wurare: FTC a ReportFraud.ftc.gov, CFTC a cftc.gov/complaint, SEC a sec.gov/tcr, Cibiyar Ƙorafin Laifukan Intanet ta FBI (IC3) a ic3.gov, da exchange ko manhajar kirifto da aka yi amfani da ita wajen aika kuɗin.",
            "Ku rubuta abin da ya faru: ranaku, adadin kuɗi, adireshin walat ko lambar biyan kuɗi (transaction ID), sunaye da lambobin wayar da ɗan damfarar ya yi amfani da su, da hotunan allo (screenshots) na saƙonni. Kada ku aika ƙarin kuɗi ga duk wanda ya yi alƙawarin \"dawo da\" kirifton da kuka rasa; sau da yawa wannan zamba ta biyu ce.",
            "Ku yi magana game da zamba da iyali da abokai, musamman tsofaffi a iyali da matasa da ba su daɗe suna amfani da manhajojin kuɗi ba. Ɗan gajeren hira zai iya hana asara."
          ],
          steps: ["Ku dakatar da duk wani biya da hulɗa da ɗan damfarar.", "Ku rubuta ranaku, adadin kuɗi, adireshin walat, lambobin biyan kuɗi (transaction ID), sunaye da lambobin waya.", "Ku ajiye hotunan allo.", "Ku kai rahoto a ReportFraud.ftc.gov da ic3.gov, da SEC ko CFTC idan zuba jari ne.", "Ku sanar da exchange ko manhajar da kuka yi amfani da ita.", "Ku yi watsi da duk wanda ya ce zai dawo muku da kuɗinku idan kun biya shi."],
          words: [["Transaction ID (lambar biyan kuɗi)", "lambar da ke gane biyan kirifto ɗaya a blockchain."], ["IC3", "Cibiyar Ƙorafin Laifukan Intanet ta FBI, wadda take karɓar rahoton laifukan intanet."], ["Zambar dawo da kuɗi", "zamba ta biyu da ke alƙawarin dawo muku da kuɗin da kuka rasa idan kun biya."]],
          sources: [FTC_CRYPTO, { name: "FTC: ReportFraud (kai rahoton damfara)", url: "https://reportfraud.ftc.gov" }, { name: "Cibiyar Ƙorafin Laifukan Intanet ta FBI (IC3)", url: "https://www.ic3.gov" }, { name: "SEC: Aika bayani ko ƙorafi", url: "https://www.sec.gov/tcr" }, { name: "CFTC: Aika ƙorafi", url: "https://www.cftc.gov/complaint" }],
          slides: [
            { title: "Inda za a kai rahoto", bullets: ["ReportFraud.ftc.gov", "ic3.gov (FBI)", "sec.gov/tcr ko cftc.gov/complaint don zuba jari", "Exchange ko manhajar da kuka yi amfani da ita"] },
            { title: "Ku rubuta shi", bullets: ["Ranaku da adadin kuɗi", "Adireshin walat da lambar biyan kuɗi (transaction ID)", "Sunaye, lambobi, hotunan allo"] },
            { title: "Ku yi hankali da zambar dawo da kuɗi", bullets: ["Babu wani na gaske da ke karɓar kuɗi don \"dawo da\" kirifto", "Kada ku sake biya"] }
          ],
          tryIt: "Aikin ƙarshe: ku yi katin kariya daga kirifto mai shafi ɗaya (mene ne blockchain da kirifto, haɗurra uku, alamun zamba huɗu, inda za a kai rahoto). Sannan ku yi alama kan alamun gargaɗi a talla ko saƙon kirifto ɗaya na gaske.",
          youCanNow: "kai rahoton zambar kirifto zuwa wuraren da suka dace da taimaka wa iyali da abokai su guje mata.",
          quickCheck: [
            { objective: "O6", q: "Wanne a cikin waɗannan wuri ne na hukuma don kai rahoton damfarar kirifto a Amurka?", options: ["Sharhi a rubutun ɗan damfarar a kafofin sada zumunta", "Cibiyar Ƙorafin Laifukan Intanet ta FBI a ic3.gov", "Baƙo da ke cewa zai iya dawo muku da kuɗinku", "Rukunin hira na kirifto"], answer: 1, why: "IC3 a ic3.gov yana ɗaya daga cikin wuraren hukuma da FTC ta jera don kai rahoto." },
            { objective: "O6", q: "An damfari maƙwabcinku kuma yana son kai rahoto. Me za ku fara taimaka masa ya yi?", options: ["Rubuta ranaku, adadin kuɗi, adireshin walat ko lambar biyan kuɗi, da ajiye hotunan allo", "Goge kowane saƙo daga ɗan damfarar", "Biyan kamfanin dawo da kuɗi don a dawo da kuɗin", "Aika wa ɗan damfarar ƙarin kirifto don rufe asusun"], answer: 0, why: "Waɗannan bayanai suna taimaka wa hukumomi da exchange su bi diddigin rahoton." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Haɗurra, zamba da kai rahoto",
        questions: [
          { objective: "O4", q: "Wane kuɗi ne kada a taɓa saka shi a kirifto?", options: ["Kuɗin wasa a cikin wasan kwamfuta", "Kuɗin da za ku iya rasawa bayan shawara", "Kuɗin da kuke buƙata don haya, abinci ko magani", "Babu ɗaya da ke da haɗari"], answer: 2, why: "Sauyawar farashi tana nufin za ku iya rasa kuɗin da kuke buƙata." },
          { objective: "O4", q: "A cewar FDIC, kirifto:", options: ["Yana da cikakkiyar inshorar FDIC", "Yana da inshora a ƙarshen mako kawai", "Ba ya cikin inshorar ajiya ta FDIC", "Yana da inshora idan an saye shi a waya"], answer: 2, why: "Inshorar ajiya ta FDIC ba ta kare kirifto." },
          { objective: "O5", q: "Wani mai kira ya ce daga gwamnati yake kuma dole ku biya tara a ATM na kirifto yau. Wannan:", options: ["Biyan gwamnati ne na yau da kullum", "Mayar da harajin da aka biya ne", "Ƙa'idar banki ce", "Alamar gargaɗin zamba ce"], answer: 3, why: "'Yan damfara ne kaɗai suke dagewa a biya su da kirifto." },
          { objective: "O5", q: "Sabon abokin intanet ya yi alƙawarin riba tabbatacciya idan kun zuba jari a kirifto. Me za ku yi?", options: ["Ku zuba kaɗan don gwadawa", "Ku aika kalmomin dawo da walat ɗinku", "Ku nemi tabbaci mafi girma", "Ku tsaya; riba tabbatacciya alamar zamba ce"], answer: 3, why: "'Yan damfara ne kaɗai suke ba da tabbacin riba." },
          { objective: "O6", q: "Bayan rasa kuɗi ga zambar kirifto, wani ya ce zai dawo muku da shi idan kun biya shi. Wannan wataƙila:", options: ["Zambar dawo da kuɗi ce", "FBI ne", "Bankinku ne", "Mayar da kuɗi ne"], answer: 0, why: "Biyan kuɗi don dawo da kirifto zamba ta biyu ce da aka saba gani." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Fahimtar Kuɗin Kirifto (Cryptocurrency) da Blockchain",
    questions: [
      { objective: "O1", q: "Blockchain shi ne:", options: ["Bayanan biyan kuɗi na tare da kwamfutoci da yawa suke riƙewa", "Wani nau'in makullin keke", "Fayil na sirri na kamfani ɗaya", "Rasidin takarda"], answer: 0, why: "Kwamfutoci da yawa suna riƙe da kwafin bayanai iri ɗaya da aka haɗa." },
      { objective: "O1", q: "A blockchain, \"block\" shi ne:", options: ["Rukunin biyan kuɗi da aka ƙara tare", "Kalmar sirri", "ATM na kirifto", "Reshen banki"], answer: 0, why: "Kowane block yana ɗauke da rukunin biyan kuɗi." },
      { objective: "O1", q: "\"Decentralized\" yana nufin:", options: ["Banki ɗaya ne ke gudanar da shi", "Yana rufe a ƙarshen mako", "Cibiyar kwamfutoci da yawa ce ke gudanar da shi maimakon kamfani ɗaya", "Don gwamnatoci kaɗai"], answer: 2, why: "Babu kamfani ɗaya da ke riƙe bayanan." },
      { objective: "O1", q: "Yawancin blockchain:", options: ["Na sirri ne kuma a ɓoye", "Ana goge su kowace shekara", "Ana buga su a jaridu", "Bayanai ne a buɗe da kowa zai iya dubawa"], answer: 3, why: "Kowa zai iya duba biyan kuɗin, ko da yake ba a nuna sunaye." },
      { objective: "O2", q: "Bitcoin misali ne na:", options: ["Katin bashi (credit card)", "Asusun banki", "Kuɗin kirifto", "Stablecoin da gwamnati ke gudanarwa"], answer: 2, why: "Bitcoin ne kuɗin kirifto na farko." },
      { objective: "O2", q: "Ana cewa farashin kirifto volatile ne (mai sauyawa) domin:", options: ["Ba ya taɓa canjawa", "Yana hawa ne kawai", "Doka ce ke ƙayyade shi", "Yana iya hawa ko faɗuwa sosai da sauri"], answer: 3, why: "Volatile yana nufin manyan sauye-sauyen farashi masu sauri." },
      { objective: "O2", q: "Idan kun biya ɗan damfara da kirifto, FTC ta ce:", options: ["Koyaushe za ku iya soke shi", "Yawanci ba za ku iya dawo da biyan ba", "Za ku sami mayar da kuɗi daga banki", "Kuna da inshora"], answer: 1, why: "Biyan kirifto yawanci ba a iya dawo da shi." },
      { objective: "O3", q: "Walat ɗin kirifto shi ne:", options: ["Jakar kuɗi ta fata", "Manhaja ko na'ura da ke riƙe maɓallan kirifton ku", "Asusun banki", "Ofishin exchange"], answer: 1, why: "Walat suna riƙe maɓallan da ke ba da iko da kirifto." },
      { objective: "O3", q: "Wanne ne ba laifi ku ba wanda zai aiko muku da kirifto?", options: ["Adireshin jama'a naku", "Kalmomin dawo da walat ɗinku", "Maɓallin sirrinku", "Kalmar sirrin bankinku"], answer: 0, why: "Adireshin jama'a kamar lambar asusu ne." },
      { objective: "O3", q: "Wane ne mai iko da kirifton da ke cikin walat?", options: ["Kamfanin waya", "Duk wanda yake da maɓallin sirri ko kalmomin dawo da walat", "Gwamnati", "Mutumin da yake da adireshin jama'a"], answer: 1, why: "Maɓallin sirri shi ne babban maɓalli." },
      { objective: "O3", q: "Exchange shi ne:", options: ["Kamfani inda mutane suke saya, sayarwa da ajiye kirifto", "Ofishin gwamnati", "Wani nau'in block na blockchain", "Kalmomin dawo da walat"], answer: 0, why: "Exchange kamfanoni ne na kasuwanci da ajiye kirifto." },
      { objective: "O4", q: "Wanne ne haɗarin kamfani a kirifto?", options: ["Ana iya yin kutse a exchange ko ya rufe", "Farashin a ƙayyade yake", "Yana da inshorar FDIC", "Ba za a iya satar sa ba"], answer: 0, why: "Ana iya yin kutse a exchange da manhajoji ko su daina aiki." },
      { objective: "O4", q: "Shin wannan kwas ɗin yana gaya muku ku sayi kirifto?", options: ["Eh, koyaushe", "Eh, amma Bitcoin kaɗai", "A'a; ku yi magana da ƙwararre mai lasisi da kuka zaɓa don shawarwarin kuɗi", "Eh, da kuɗin haya"], answer: 2, why: "Kwas ɗin yana bayanin yadda kirifto yake aiki da haɗurransa; ba shawara ba ne." },
      { objective: "O4", q: "Kun aika kirifto zuwa adireshin da ba daidai ba. Me yawanci yake faruwa?", options: ["Yana dawowa da kansa", "Yawanci ya tafi kenan", "Banki yana mayar da shi", "FTC tana mayar da shi"], answer: 1, why: "Biyan kuɗi a blockchain yawanci ba a iya sokewa." },
      { objective: "O5", q: "Wanne ne alamar gargaɗin zambar kirifto?", options: ["Alƙawarin riba tabbatacciya", "Jerin farashi a sarari", "Shagon da ke karɓar kati", "Rasidi ta imel"], answer: 0, why: "'Yan damfara ne kaɗai suke ba da tabbacin riba." },
      { objective: "O5", q: "Wani da kuka haɗu da shi a manhajar neman soyayya kuma ba ku taɓa ganinsa ba ya nemi ku zuba jari a kirifto. Wannan:", options: ["Soyayya ce ta gaskiya", "Alamar zambar soyayya ce da aka saba gani", "Sharaɗin banki ne", "Ƙa'idar haraji ce"], answer: 1, why: "Sabbin abokan intanet da ke matsa muku kan kirifto alamar zamba ne." },
      { objective: "O5", q: "Wani tayin aiki ya ce dole ku biya kuɗin horo da kirifto. Ya kamata ku:", options: ["Biya da sauri", "Tsaya; ayyukan da ke neman kuɗi da kirifto alamar zamba ne", "Biya rabi", "Aika kalmomin dawo da walat ɗinku a maimakon haka"], answer: 1, why: "FTC ta jera ayyukan da ke neman kuɗi da kirifto a matsayin alamar zamba." },
      { objective: "O6", q: "A ina za ku iya kai rahoton damfarar kirifto a Amurka?", options: ["ReportFraud.ftc.gov da ic3.gov", "Wani rukuni a kafofin sada zumunta", "Lambar taimako ta ɗan damfarar", "Babu inda"], answer: 0, why: "FTC da IC3 na FBI suna karɓar rahoton damfara." },
      { objective: "O6", q: "Me ya kamata ku rubuta bayan zamba?", options: ["Babu komai", "Ranaku, adadin kuɗi, adireshin walat, lambar biyan kuɗi da hotunan allo", "Kalmar sirrinku kaɗai", "Kalmomin dawo da walat ɗinku"], answer: 1, why: "Waɗannan bayanai suna taimaka wa masu bincike." },
      { objective: "O6", q: "Hanya mafi kyau ta kare wani a iyali daga zambar kirifto ita ce:", options: ["Kada a taɓa magana a kai", "Ku gaya musu alamun gargaɗi da inda ake kai rahoto", "Ku ba su kalmomin dawo da walat ɗinku", "Ku gaya musu su zuba jari da sauri"], answer: 1, why: "Ɗan gajeren hira game da alamun gargaɗi zai iya hana asara." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      4,
      6,
      9,
      11,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na katin ku sake duba shi.",
    criteria: [
      {
        name: "Mene ne blockchain da kirifto",
        objective: "O1",
        notYet: "Jimloli biyun ba su nan, ba daidai ba ne, ko an kwafo su ba tare da bayani ba.",
        meets: "Jimloli biyu masu sauƙi sun faɗi daidai mene ne blockchain da kuɗin kirifto.",
        exceeds: "Ya kuma faɗi dalilin da yasa biyan kirifto yake da wuyar sokewa."
      },
      {
        name: "Haɗurra uku",
        objective: "O4",
        notYet: "Haɗurra ƙasa da uku, ko ɗaya ba daidai ba ne.",
        meets: "Haɗurra uku daidai daga farashi, asara, kamfani da zamba.",
        exceeds: "Kowane haɗari yana da hanya ɗaya ta kare kai."
      },
      {
        name: "Maɓallai da kalmomin dawo da walat",
        objective: "O3",
        notYet: "Katin bai ce a ɓoye kalmomin dawo da walat ba, ko ya ce ba laifi a bayyana su.",
        meets: "Katin ya ce kada a taɓa bayyana kalmomin dawo da walat ko maɓallin sirri ga kowa.",
        exceeds: "Ya kuma ce adireshin jama'a ne kaɗai ba laifi a bayar don karɓar kirifto."
      },
      {
        name: "Alamun gargaɗin zamba huɗu",
        objective: "O5",
        notYet: "Alamu ƙasa da huɗu, ko ɗaya ba daidai ba ne.",
        meets: "Alamun gargaɗi huɗu daidai, kuma an yi alama kan kowace alama da talla ko saƙon na gaske ya nuna.",
        exceeds: "Ya kuma rubuta amsa mai aminci: ku tsaya, kada ku biya ko ku danna, ku yi magana da wanda kuka amince da shi."
      },
      {
        name: "Inda za a kai rahoto",
        objective: "O6",
        notYet: "Babu wurin hukuma na kai rahoto, ko wuri ne da ba na hukuma ba.",
        meets: "Aƙalla wuraren hukuma biyu na kai rahoto, kamar ReportFraud.ftc.gov da ic3.gov.",
        exceeds: "Ya kuma jera bayanan da za a rubuta kuma ya yi gargaɗi game da zambar dawo da kuɗi."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na katin kariya daga kirifto",
      "Masu koyo da suka ce sun gane kuma sun yi watsi da saƙo ko kiran zambar kirifto cikin kwanaki 30 bayan kwas ɗin (binciken biyo baya)",
      "Masu koyo da suka raba katin kariya ko alamun gargaɗi da wani a iyali ko aboki",
      "Shirye-shiryen abokan aiki sun ce membobi kaɗan ne suka rasa kuɗi ga zambar kirifto, ko an ƙara kai rahoton zamba zuwa shafukan hukuma"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet don karanta shafukan gargaɗi na hukuma (FTC, FDIC, SEC, CFTC)",
      "Takarda da alƙalami, ko manhajar rubutu, don katin kariya daga kirifto mai shafi ɗaya",
      "Talla, saƙo ko rubutu ɗaya na kirifto na gaske don dubawa (hotunan allo ma sun isa)",
      "Kusan minti 60 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Ku faɗa a farko cewa kwas ɗin ba shawarar kuɗi ba ne kuma ba ya gaya wa kowa ya saya ko ya sayar da kirifto; ku tura tambayoyin kuɗi zuwa ƙwararre mai lasisi da mai koyo ya zaɓa.",
      "Kada ku taɓa neman masu koyo su buɗe manhajar kirifto, su haɗa walat ko su rubuta kalmomin dawo da walat a aji, ko da atisaye ne.",
      "Ku kawo wasu misalan saƙonnin zamba na gaske da aka buga ko hotunan allo, don masu koyo da ba su da nasu su iya yin duba alamun gargaɗi.",
      "Wasu masu koyo wataƙila sun rasa kuɗi ga zamba; ku guji zargi a maganarku kuma ku nuna musu yadda ake kai rahoto.",
      "Ku gayyaci masu koyo su kawo wani a iyalinsu, musamman tsoho ko matashi da bai daɗe yana amfani da manhajojin kuɗi ba, kuma ku sa su yi katin kariya tare bibbiyu."
    ]
  }
};

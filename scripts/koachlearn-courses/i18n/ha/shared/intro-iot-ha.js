"use strict";

// Koach Learn course, Hausa (ha) translation of shared/intro-iot.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const FTC = { name: "US Federal Trade Commission (hukumar kare masu saye ta Amurka): Kiyaye na'urorinku masu haɗuwa da intanet a gida", url: "https://consumer.ftc.gov/articles/securing-your-internet-connected-devices-home" };
const CISA = { name: "CISA (hukumar tsaron intanet ta Amurka): Secure Our World", url: "https://www.cisa.gov/secure-our-world" };
const WOKWI = { name: "Wokwi: shirin kwaikwayon na'urorin lantarki ta intanet", url: "https://wokwi.com/" };

module.exports = {
  id: "intro-iot-ha",
  lang: "ha",
  translationOf: "intro-iot",
  category: "Veterans (military)",
  name: "Gabatarwa ga Intanet na Abubuwa (IoT)",
  skills: "Bayanin yadda tsarin IoT yake aiki, Zaɓen na'urorin aunawa (sensor) da masu aiki (actuator), Kwatanta hanyoyin haɗa na'urori, Rubuta ƙa'idar faɗakarwa mai sauƙi, Kiyaye na'urori masu haɗuwa da intanet, Tsara aikin IoT",
  outcome: "tsara ƙaramin aikin sa ido na IoT tun daga na'urar aunawa har zuwa faɗakarwa: zaɓen na'urar aunawa (sensor), na'urar, hanyar haɗi da manhaja, rubuta ƙa'idar faɗakarwa a matsayin ɗan gajeren code, da jera matakan da ke kiyaye na'urorin.",
  about: [
    "Intanet na Abubuwa (Internet of Things, IoT) shi ne abubuwan yau da kullum masu na'urorin aunawa (sensor) da haɗin intanet: na'urar sarrafa zafin ɗaki, kyamarar ƙofa, agogon motsa jiki, na'urorin auna ƙasar gona, da na'urorin bin diddigin manyan motoci da kwantenoni. Ana amfani da ƙwarewar IoT a ayyukan kula da gine-gine, jigilar kaya, makamashi, noma da tsaro, kuma tsofaffin sojoji da yawa sun riga sun san ra'ayoyin daga na'urorin aunawa, rediyo da kula da kayan aiki.",
    "Wannan kwas ɗin yana bayanin yadda tsarin IoT yake aiki, mataki-mataki, yadda na'urori suke magana da juna, yadda ƙa'ida mai sauƙi ke mayar da abin da aka auna zuwa aiki, da yadda ake hana na'urori masu haɗuwa zama hanyar shigar maharan intanet. Ba sai kun sayi wani kaya ba. Darasi ɗaya yana nuna yadda ake gwada na'urar kwaikwayo a burauzar intanet ɗinku.",
    "Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku rubuta tsari mai shafi ɗaya don aikin sa ido na IoT, kamar faɗakarwar zafi don ɗakin sabar (server), firji mai daskarewa a wurin raba abinci, ko lambun da ke buƙatar ruwa: ku faɗi na'urar aunawa, na'urar, yadda take haɗuwa da inda bayanan suke zuwa, ku zana hanyar bayanai daga na'urar aunawa zuwa faɗakarwa, ku rubuta ƙa'idar faɗakarwa a matsayin gajeren if-statement a Python, sannan ku jera matakai biyar da za ku ɗauka don kiyaye na'urorin.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Tsofaffin sojoji da sojojin da ke barin aiki suna neman sana'o'in fasaha kamar taimakon IT, fasahar gine-gine, bin diddigin jigilar kaya ko tsaron intanet. Da yawa sun yi aiki da rediyo, na'urorin aunawa, motoci ko kayan aiki a soja.",
    startingPoint: "Suna iya bin ƙa'idojin aiki, amfani da kwamfuta da wayar zamani, kuma sau da yawa sun san duba kayan aiki da sadarwa. Yawancinsu ba su taɓa rubuta code ko haɗa na'ura da intanet ba.",
    gap: "Masu ɗaukar aiki a kula da gine-gine, jigilar kaya, masana'antu da IT suna ƙara amfani da na'urorin aunawa masu haɗuwa, kuma suna sa ran ma'aikata su fahimci yadda suke aiki, yadda ake saita faɗakarwa mai sauƙi da yadda ake kiyaye su. Masu koyo suna buƙatar tsara ƙaramin aikin sa ido daga farko har ƙarshe don nuna wannan ƙwarewa, da kuma mayar da ƙwarewarsu ta soja zuwa ayyukan fasaha na farar hula.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi; ana bayanin kalmomin fasaha a karon farko",
      "Na'urori: kwamfuta mai burauzar intanet don shirin kwaikwayo; ba sai an sayi kaya ba",
      "Lokaci: darussa na minti 5, kusan minti 60 gaba ɗaya",
      "Abubuwan shirin kwaikwayo da asusunsa suna iya canjawa; masu koyo su duba sharuɗɗan shafin na yanzu",
      "Hanyoyin sadarwa na wurin aiki: kada ku taɓa haɗa na'ura ba tare da izinin ƙungiyar IT ko ta tsaro ba"
    ],
    prerequisites: "Babu. Kwas na farko na Python yana taimakawa amma ba dole ba ne."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku misalai daga gida, wurin aiki da filin aiki", action: "gane na'urorin IoT da bayanin amfanin kowanne da haɗarinsa", standard: "kuna faɗin aƙalla na'urori uku daidai" },
    { id: "O2", condition: "Idan aka ba ku aikin IoT kamar ƙararrawar firji mai daskarewa", action: "bin bayanan daga na'urar aunawa ta cikin na'ura da hanyar haɗi zuwa cloud da kuma aiki", standard: "kuna faɗin dukkan matakai huɗu a jere daidai" },
    { id: "O3", condition: "Idan aka ba ku inda na'ura take, wutarta da yawan bayanan da take aikawa", action: "zaɓen hanyar haɗi da ta dace da bayanin yadda yarjejeniya (protocol) kamar MQTT ke ɗaukar saƙonninta", standard: "da dalilin da ya dace da nisa, wuta da bayanai" },
    { id: "O4", condition: "Idan aka ba ku abin da na'urar aunawa ta auna da iyakar da ba ta da haɗari", action: "rubuta ƙa'idar faɗakarwa a matsayin if-statement na Python da ke guje wa ƙararrawar ƙarya", standard: "ta yadda ƙa'idar za ta ba da sakamakon da ya dace ga ma'aunan gwaji" },
    { id: "O5", condition: "Ta amfani da shirin kwaikwayo kyauta a intanet", action: "kunna microcontroller na kwaikwayo mai na'urar auna zafi da gwada ƙa'idar faɗakarwarku", standard: "kuna ganin faɗakarwar ta tashi idan kun canja ma'aunin" },
    { id: "O6", condition: "Ga kowace na'ura mai haɗuwa a tsarinku", action: "jera matakan da ke kiyaye na'urorin", standard: "da aƙalla matakai biyar daidai" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yadda tsarin IoT yake aiki",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mene ne Intanet na Abubuwa",
          minutes: 4,
          goal: "Bayyana IoT da gane na'urorin IoT da ke kewaye da ku.",
          text: [
            "Intanet na Abubuwa (IoT) yana nufin abubuwa na zahiri da ke jin duniya (suna auna abubuwa), suna haɗuwa da hanyar sadarwa (network) kuma suna raba bayanai, sau da yawa ba tare da wani mutum ya rubuta komai ba. Na'urar sarrafa zafin ɗaki (smart thermostat) tana auna ɗakin kuma tana kunna dumama. Agogon motsa jiki yana ƙirga takawa kuma yana aika su zuwa wayarku.",
            "Ana amfani da IoT a gida (kyamarar ƙofa, filogin wuta mai wayo, lasifika mai magana), a wurin aiki (injinan da ke sanar da lokacin da suke buƙatar gyara, ana kiran wannan predictive maintenance), a jigilar kaya (na'urorin GPS a manyan motoci da kwantenoni), a noma (na'urorin auna danshin ƙasa), a lafiya (na'urorin auna bugun zuciya) da a birane (fitilun ababen hawa masu wayo).",
            "Amfanin yana cikin abin da bayanan ke ba ku damar yi: gano matsala da wuri, adana makamashi, ko yin aiki daga nesa. Haɗarin shi ne kowace na'ura mai haɗuwa ƙarin abu ɗaya ne da za a iya kutsawa cikinsa ko ya fitar da bayanan sirri, don haka tsaro wani ɓangare ne na kowane aikin IoT."
          ],
          words: [["Intanet na Abubuwa (IoT)", "abubuwa na zahiri masu na'urorin aunawa da haɗin hanyar sadarwa da ke raba bayanai."], ["Na'ura mai wayo (smart device)", "abu na yau da kullum da zai iya haɗuwa ya yi aiki bisa bayanai."], ["Predictive maintenance (gyara kafin lalacewa)", "amfani da bayanan na'urar aunawa don gyara inji kafin ya lalace."]],
          slides: [
            { title: "IoT shi ne", bullets: ["Abubuwa na zahiri da ke auna duniya", "Suna haɗuwa da hanyar sadarwa", "Suna raba bayanai, sau da yawa da kansu"] },
            { title: "Inda za ku same shi", bullets: ["Gida: kyamarar ƙofa, filogi mai wayo, lasifika", "Wurin aiki: injinan da ke sanar da matsala", "Jigilar kaya, noma, lafiya, birane"] },
            { title: "Amfani da haɗari", bullets: ["Gano matsala da wuri, adana makamashi", "Yin aiki daga nesa", "Kowace na'ura hanya ce da za a iya shiga"] }
          ],
          tryIt: "Ku zagaya gidanku, wurin aikinku ko wani shago, ku jera na'urori biyar masu haɗuwa da kuke gani ko kuke amfani da su. Ga kowace ɗaya, ku rubuta abin da take aunawa da abin da take yi da bayanan.",
          youCanNow: "bayyana mene ne IoT da faɗin sunayen na'urorin IoT a rayuwar yau da kullum da a wurin aiki.",
          quickCheck: [
            { objective: "O1", q: "Me ke sa na'ura ta zama ɓangare na Intanet na Abubuwa?", options: ["Tana da babban allo", "Ta fi na'ura ta yau da kullum tsada", "Tana auna wani abu, tana haɗuwa da hanyar sadarwa kuma tana raba bayanai", "Tana aiki da madannin rubutu (keyboard) kawai"], answer: 2, why: "Na'urorin IoT suna auna duniya, suna haɗuwa kuma suna raba bayanai, sau da yawa ba tare da mutum ya rubuta komai ba." },
            { objective: "O1", q: "Wurin ajiye motocin rundunarku yana son manyan motoci su sanar da matsala kafin su lalace. Mene ne sunan wannan amfani na IoT?", options: ["Predictive maintenance", "Edge computing", "Hanyar sadarwa ta baƙi", "Firmware"], answer: 0, why: "Injinan da ke sanar da lokacin da suke buƙatar gyara kafin su lalace, wannan shi ne predictive maintenance." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Matakai huɗu: na'urar aunawa, na'ura, hanyar haɗi da cloud",
          minutes: 5,
          goal: "Bin bayanai a tsarin IoT daga na'urar aunawa zuwa aiki.",
          text: [
            "Yawancin tsarin IoT suna da matakai huɗu. 1) Na'urorin aunawa (sensor) suna auna wani abu: zafi, motsi, haske, wuri, danshi. 2) Na'ura (sau da yawa ƙaramar kwamfuta mai araha da ake kira microcontroller, kamar ESP32 ko Arduino) tana karanta na'urar aunawa kuma tana aika bayanan. 3) Hanyar haɗi tana ɗaukar bayanan: Wi-Fi, Bluetooth, hanyar sadarwar waya (cellular) ko rediyo mai nisa. 4) Hidimar cloud ko manhaja tana ajiye bayanan, tana nuna su a dashboard kuma tana aika faɗakarwa.",
            "Wasu na'urori kuma suna da actuator (mai aiki): ɓangarorin da ke yin wani abu a duniyar zahiri, kamar injin da ke buɗe famfo, relay da ke kunna fanka, ko ƙararrawa (buzzer).",
            "Wani lokaci na'urar da kanta ce ke yanke shawara maimakon jiran cloud. Ana kiran wannan edge computing. Yana da sauri, yana ci gaba da aiki idan intanet ya ɗauke, kuma yana aika ƙananan bayanai."
          ],
          steps: ["Ku faɗi abin da ake aunawa (na'urar aunawa).", "Ku faɗi na'urar da ke karanta shi.", "Ku faɗi yadda bayanan ke tafiya (hanyar haɗi).", "Ku faɗi inda suke zuwa da wanda ke ganinsu (cloud, manhaja, dashboard).", "Ku faɗi aikin da ake yi, ta mutum ko ta actuator."],
          words: [["Na'urar aunawa (sensor)", "ɓangaren da ke auna wani abu a duniyar zahiri."], ["Microcontroller", "ƙaramar kwamfuta mai araha a kan chip ɗaya da ke gudanar da shiri ɗaya."], ["Actuator (mai aiki)", "ɓangaren da ke yin aiki a duniyar zahiri, kamar injin, relay ko ƙararrawa."], ["Dashboard", "allo da ke nuna bayanai kai tsaye a zane-zane da lambobi."], ["Edge computing", "sarrafa bayanai a kan na'urar ko kusa da ita maimakon a cloud."]],
          slides: [
            { title: "Matakai huɗu", bullets: ["1. Na'urar aunawa tana auna", "2. Na'ura tana karantawa tana aikawa", "3. Hanyar haɗi tana ɗauka", "4. Cloud ko manhaja tana ajiyewa, nunawa, faɗakarwa"] },
            { title: "Actuator yana aiki", bullets: ["Injin yana buɗe famfo", "Relay yana kunna fanka", "Buzzer yana yin ƙararrawa"] },
            { title: "Edge computing", bullets: ["Na'urar da kanta ke yanke shawara", "Ya fi sauri, yana aiki ba tare da intanet ba", "Yana aika ƙananan bayanai"] }
          ],
          tryIt: "Ku zaɓi na'ura ɗaya daga jerinku na Darasi na 1. Ku zana akwatuna don matakanta huɗu (na'urar aunawa, na'ura, hanyar haɗi, cloud ko manhaja) da kibiyoyi a tsakaninsu, sannan ku ƙara aikin a ƙarshe.",
          youCanNow: "bin bayanai ta matakai huɗu na tsarin IoT da faɗin sunayen na'urorin aunawa da actuator.",
          quickCheck: [
            { objective: "O2", q: "A tsarin IoT, mene ne aikin microcontroller?", options: ["Auna zafin da kansa", "Ajiye bayanai a cloud", "Kunna fanka", "Karanta na'urar aunawa da aika bayanan"], answer: 3, why: "Na'urar, sau da yawa microcontroller, tana karanta na'urar aunawa kuma tana tura bayanan gaba." },
            { objective: "O2", q: "Na'urar aunawa ta ƙofa a wuri mai nisa dole ta ci gaba da aiki idan intanet ya ɗauke. Wane tsari ne ke taimakawa?", options: ["Aika kowane ma'auni zuwa cloud da farko", "Bar na'urar ta yanke shawara da kanta (edge computing)", "Amfani da babban allo", "Cire na'urar aunawa"], answer: 1, why: "Edge computing yana bar na'urar ta yanke shawara da kanta, don haka tana ci gaba da aiki ba tare da intanet ba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Yadda na'urori ke haɗuwa da magana da juna",
          minutes: 5,
          goal: "Zaɓen hanyar haɗi da ta dace da na'urar IoT.",
          text: [
            "Babu hanyar haɗi ɗaya mafi kyau; kowacce tana musanya tsakanin nisa, wuta da bayanai. Wi-Fi yana da sauri kuma ya zama ruwan dare a gida da wurin aiki, amma yana cin wuta sosai. Bluetooth Low Energy (BLE) yana cin wuta kaɗan ƙwarai kuma bai da nisa, yana da kyau ga agogon jiki da wayoyi. Hanyar sadarwar waya (cellular: 4G, 5G da nau'o'insu masu cin wuta kaɗan) tana aiki kusan ko'ina da akwai sigina, tana da kyau ga motoci da wurare masu nisa, amma tana buƙatar kuɗin data. LoRaWAN rediyo ne mai cin wuta kaɗan da nisa mai yawa don ƙananan bayanai, ana amfani da shi don na'urorin aunawa na gona da na birni.",
            "Na'urori kuma suna buƙatar harshe ɗaya da suke amfani da shi, ana kiransa protocol (yarjejeniya), don aika saƙonni. MQTT sanannen protocol ne mai sauƙi: na'ura tana wallafa (publish) ma'auni zuwa wani topic (jigo), kamar pantry/freezer/temp, kuma duk manhajar da ta yi rajista (subscribe) ga wannan topic ɗin tana karɓa. HTTP, protocol ɗin da shafukan intanet ke amfani da shi, shi ma ya zama ruwan dare.",
            "Na'urori masu batir suna adana wuta ta hanyar yin barci mafi yawan lokaci, suna farkawa ne kawai don su auna su aika."
          ],
          steps: ["Har ina bayanan za su yi tafiya?", "Akwai wutar lantarki, ko batir kawai?", "Bayanai nawa, kuma sau nawa?", "Akwai Wi-Fi ko siginar waya a inda za ta zauna?", "Ku zaɓi hanyar haɗi da ta dace da dukkan amsoshi huɗu."],
          words: [["Wi-Fi", "hanyar sadarwa mara waya mai sauri don gidaje da ofisoshi; tana cin wuta fiye da haka."], ["Bluetooth Low Energy (BLE)", "hanyar sadarwa mara waya mai cin wuta kaɗan ƙwarai, ta ɗan nisa kaɗan."], ["Cellular (hanyar sadarwar waya)", "haɗi ta hanyoyin sadarwar wayar hannu."], ["LoRaWAN", "hanyar sadarwa ta rediyo mai nisa mai yawa da cin wuta kaɗan don ƙananan bayanai."], ["Protocol (yarjejeniya)", "ƙa'idojin da aka amince da su don aika saƙonni."], ["MQTT", "protocol mai sauƙi na saƙonni inda na'urori ke wallafawa zuwa topic, manhajoji kuma suna yin rajista."]],
          slides: [
            { title: "Ku zaɓa bisa nisa, wuta da bayanai", bullets: ["Wi-Fi: mai sauri, yana cin wuta sosai", "BLE: wuta kaɗan ƙwarai, nisa kaɗan", "Cellular: kusan ko'ina, yana buƙatar kuɗin data", "LoRaWAN: nisa mai yawa, ƙananan bayanai"] },
            { title: "Protocol", bullets: ["MQTT: wallafawa zuwa topic, manhajoji suna rajista", "Misalin topic: pantry/freezer/temp", "HTTP: harshen shafukan intanet"] },
            { title: "Adana batir", bullets: ["Yin barci mafi yawan lokaci", "Farkawa, aunawa, aikawa, sake barci"] }
          ],
          tryIt: "Ku zaɓi hanyar haɗi mafi kyau ga kowanne ku rubuta dalili ɗaya: na'urar ƙirga takawa a wuyan hannunku, na'urar auna ƙasa a gona mai nisan km 5 daga kowane gini, na'urar GPS a motar kai kaya, da filogi mai wayo a falo.",
          youCanNow: "zaɓen hanyar haɗi da ta dace da bayanin yadda na'urorin IoT ke aika saƙonni.",
          quickCheck: [
            { objective: "O3", q: "Mene ne MQTT?", options: ["Protocol mai sauƙi inda na'urori ke wallafa ma'auni zuwa topic", "Wani nau'in batir", "Rediyo mai nisa", "Sunan kamfanin na'urar aunawa"], answer: 0, why: "MQTT protocol ne mai sauƙi: na'urori suna wallafawa zuwa topic, kuma manhajojin da suka yi rajista suna karɓa." },
            { objective: "O3", q: "Na'urar aunawa mai batir a wurin ajiyar kaya ba tare da Wi-Fi ba tana aika ƙaramin ma'auni ɗaya a kowace awa. Me za ku zaɓa?", options: ["Wi-Fi", "Bluetooth Low Energy", "LoRaWAN", "Madannin rubutu mai waya"], answer: 2, why: "LoRaWAN yana cin wuta kaɗan kuma yana da nisa mai yawa don ƙananan bayanai." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yadda tsarin IoT yake aiki",
        questions: [
          { objective: "O1", q: "Wanne ne na'urar IoT?", options: ["Kalandar takarda", "Taswirar da aka buga", "Na'urar sarrafa zafin ɗaki mai wayo da ke daidaita dumama da kanta", "Kujerar katako"], answer: 2, why: "Tana aunawa, tana haɗuwa kuma tana aiki bisa bayanai." },
          { objective: "O2", q: "A tsarin IoT, me na'urar aunawa (sensor) ke yi?", options: ["Tana auna wani abu a duniyar zahiri", "Tana ajiye bayanai a cloud", "Tana biyan kuɗin intanet", "Tana nuna dashboard"], answer: 0, why: "Na'urorin aunawa suna auna abubuwa kamar zafi ko motsi." },
          { objective: "O2", q: "Relay da ke kunna fanka shi ne:", options: ["Na'urar aunawa (sensor)", "Protocol", "Dashboard", "Actuator"], answer: 3, why: "Actuator yana yin wani abu a duniyar zahiri." },
          { objective: "O3", q: "Na'urar auna ƙasa tana gona nesa da Wi-Fi kuma tana aiki da batir. Wace hanyar haɗi ce ta fi dacewa?", options: ["Wi-Fi", "LoRaWAN", "Igiyar USB", "Bluetooth zuwa waya a aljihunku"], answer: 1, why: "LoRaWAN yana da nisa mai yawa kuma yana cin wuta kaɗan don ƙananan bayanai." },
          { objective: "O3", q: "A MQTT, ta yaya manhaja ke samun ma'aunan firji mai daskarewa?", options: ["Tana kiran firjin ta waya", "Tana yin rajista ga topic ɗin da firjin ke wallafawa", "Tana buga su a takarda", "Tana yin hasashe"], answer: 1, why: "Manhajojin MQTT suna yin rajista ga topic ɗin da na'urori ke wallafawa." }
        ]
      }
    },
    {
      name: "Babi na 2: Ginawa da kiyaye aikin IoT",
      lessons: [
        {
          objectives: ["O4"],
          title: "Daga ma'auni zuwa aiki: rubuta ƙa'idar faɗakarwa",
          minutes: 6,
          goal: "Rubuta ƙa'ida mai sauƙi a Python da ke mayar da ma'aunin na'urar aunawa zuwa faɗakarwa.",
          text: [
            "Zuciyar yawancin ayyukan IoT ƙa'ida ce: idan ma'auni ya wuce iyaka, a yi wani abu. Idan firji mai daskarewa na wurin raba abinci ya fi -15 digiri C zafi har minti 10, a tura wa manaja saƙon tes. Idan danshin ƙasa ya faɗi ƙasa da kashi 30, a buɗe famfon ruwa.",
            "A Python, ƙa'ida if-statement ce. Misali: temp = 28.5, sannan if temp > 27: print(\"ALERT: server closet too hot\") else: print(\"OK\"). A na'ura ta gaske, ma'aunin yana zuwa daga na'urar aunawa, kuma aikin zai iya zama kunna fitilar LED, kunna relay ko aika saƙo.",
            "Ƙa'idoji masu kyau suna guje wa ƙararrawar ƙarya. Hauhawa ɗaya na iya zama ƙofa ce aka buɗe na ɗan lokaci, don haka tsare-tsare da yawa suna jiran ma'aunai da yawa a jere kafin su faɗakar. Ku zaɓi iyaka tare da mutanen da suka san kayan aikin, kuma ku yanke wanda zai sami faɗakarwar da abin da ya kamata ya yi."
          ],
          steps: ["Ku yanke abin da kuke aunawa da iyakar da ba ta da haɗari.", "Ku zaɓi iyakar da ke nufin akwai matsala.", "Ku rubuta ta kamar haka: if reading > limit: (ko < limit).", "Ku yanke aikin: saƙo, fitila ko relay.", "Ku ƙara ƙa'idar guje wa ƙararrawar ƙarya, kamar ma'aunai da yawa a jere."],
          words: [["Ƙa'ida (rule)", "umarnin idan-to: idan wannan ya faru, a yi wancan."], ["Iyaka (threshold)", "iyakar da ke tayar da aiki."], ["Ƙararrawar ƙarya", "faɗakarwa alhali babu wata matsala ta gaske."], ["Ma'auni (reading)", "aunawa ɗaya daga na'urar aunawa."]],
          slides: [
            { title: "IoT yana aiki da ƙa'idoji", bullets: ["Idan ma'auni ya wuce iyaka", "To a yi wani abu", "Firji ya yi zafi sosai: a tura wa manaja tes"] },
            { title: "Ƙa'ida a Python", bullets: ["if temp > 27:", "    print(\"ALERT: too hot\")", "else: print(\"OK\")"] },
            { title: "Guje wa ƙararrawar ƙarya", bullets: ["Ku jira ma'aunai da yawa a jere", "Ku saita iyaka tare da masana", "Ku yanke wanda zai yi aiki, da yadda"] }
          ],
          tryIt: "Ku buɗe Google Colab (colab.research.google.com) ko kowane editan Python. Ku yi jerin ma'aunan zafi shida, kamar [22, 23, 29, 30, 31, 24]. Ku bi su ɗaya bayan ɗaya (loop) ku buga \"ALERT\" ga duk ma'aunin da ya wuce 27, da \"OK\" ga sauran. Ƙari: ku faɗakar ne kawai idan ma'aunai biyu a jere sun wuce 27.",
          youCanNow: "rubuta ƙa'idar faɗakarwa mai sauƙi a Python da ke mayar da ma'aunan na'urar aunawa zuwa aiki.",
          quickCheck: [
            { objective: "O4", q: "Ƙa'idar ita ce: if temp > 27: print(\"ALERT\"). Ma'aunin shi ne 25. Me za a buga?", options: ["ALERT", "Babu komai", "Kuskure", "27"], answer: 1, why: "25 bai fi 27 ba, don haka if-statement ɗin ba zai yi aiki ba." },
            { objective: "O4", q: "Ƙararrawar ɗakin sabar tana tashi duk lokacin da aka buɗe ƙofa na daƙiƙa ɗaya. Me za ku canja?", options: ["Kashe ƙararrawar har abada", "Ɗaga iyakar zuwa digiri 100", "Cire na'urar aunawa", "Faɗakarwa ne kawai bayan ma'aunai masu yawa a jere sun yi yawa"], answer: 3, why: "Jiran ma'aunai da yawa a jere yana hana ƙararrawar ƙarya daga ɗan gajeren hauhawa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gwada na'urar kwaikwayo a burauzarku",
          minutes: 6,
          goal: "Kunna microcontroller na kwaikwayo mai na'urar aunawa ku ga ma'aunai suna canjawa.",
          text: [
            "Kuna iya koyon IoT ba tare da sayen kaya ba. Shirin kwaikwayo (simulator) na intanet kamar Wokwi yana bar ku sanya allon kwaikwayo kamar ESP32, ƙara na'urar aunawa kamar DHT22 (mai auna zafi da danshin iska), da gudanar da code a burauzar intanet ɗinku. Ku duba shafin don ganin waɗanne abubuwa ne kyauta, da ko kuna buƙatar asusu.",
            "Hanya mafi sauƙi ta farawa ita ce buɗe ɗaya daga cikin misalan ayyukan da shirin kwaikwayon ya riga ya shirya don ESP32 da DHT22, sannan ku karanta code ɗin ku kunna shi. A MicroPython, wani nau'in Python don ƙananan na'urori, manyan layukan suna kama da haka: sensor = dht.DHT22(machine.Pin(15)), sannan sensor.measure() da t = sensor.temperature(). Lambar pin dole ta yi daidai da pin ɗin da aka haɗa na'urar aunawa da shi a zanen.",
            "Yayin da kwaikwayon ke gudana, kuna iya danna na'urar aunawa ta kwaikwayo ku canja zafinta, sannan ku kalli ma'aunan da aka buga da yadda ƙa'idar faɗakarwarku ke amsawa. Haka ne ainihin yadda ake gwada na'ura ta gaske kafin a saka ta."
          ],
          steps: ["Ku buɗe shafin shirin kwaikwayo a burauzarku.", "Ku nemo misalin aiki na ESP32 mai na'urar aunawa DHT22.", "Ku karanta code ɗin: ku nemo inda yake karanta na'urar aunawa da inda yake bugawa.", "Ku fara kwaikwayon ku kalli ma'aunai.", "Ku canja zafin na'urar aunawa ta kwaikwayo ku ƙara ƙa'idar faɗakarwarku daga Darasi na 4."],
          words: [["Shirin kwaikwayo (simulator)", "manhajar da ke aiki kamar kayan gaske don ku gwada ba tare da sayen su ba."], ["ESP32", "microcontroller mai araha da ke da Wi-Fi da Bluetooth a ciki."], ["DHT22", "na'urar auna zafi da danshin iska da aka saba amfani da ita, mai araha."], ["MicroPython", "ƙaramin nau'in Python da ke gudana a kan microcontroller."], ["Pin", "wurin haɗi na ƙarfe a kan allo inda ake haɗa ɓangarori."]],
          slides: [
            { title: "Koyo ba tare da kaya ba", bullets: ["Shirye-shiryen kwaikwayo suna aiki a burauza", "Allon ESP32 na kwaikwayo da na'urar aunawa DHT22", "Ku duba waɗanne abubuwa ne kyauta"] },
            { title: "Manyan layukan MicroPython", bullets: ["sensor = dht.DHT22(machine.Pin(15))", "sensor.measure()", "t = sensor.temperature()"] },
            { title: "Gwada kamar na gaske", bullets: ["Ku canja zafin kwaikwayon", "Ku kalli yadda ƙa'idar faɗakarwa ke amsawa", "Pin a code dole ya yi daidai da haɗin"] }
          ],
          sources: [WOKWI],
          tryIt: "Ku buɗe misalin ESP32 da DHT22 a shirin kwaikwayo na intanet ku kunna shi. Ku canja zafin na'urar aunawa ta kwaikwayo aƙalla sau biyu ku rubuta ma'aunan. Idan za ku iya, ku ƙara if-statement da ke buga \"ALERT\" idan ya wuce digiri 27 C. Idan ba za ku iya amfani da shirin kwaikwayon ba, ku bi misalin code ɗin a takarda: ku yi alama a layin da ke karanta na'urar aunawa da layin da ke bugawa.",
          youCanNow: "kunna da gwada na'urar IoT ta kwaikwayo da haɗa ma'aunanta da ƙa'idar faɗakarwa.",
          quickCheck: [
            { objective: "O5", q: "A MicroPython, wane layi ne ke karanta zafi bayan sensor.measure()?", options: ["print(15)", "if temp > 27:", "t = sensor.temperature()", "machine.Pin()"], answer: 2, why: "sensor.temperature() yana mayar da ma'aunin bayan sensor.measure()." },
            { objective: "O5", q: "Ƙa'idar faɗakarwarku ta kwaikwayo ba ta taɓa tashi ba. Ta yaya za ku gwada ta?", options: ["Ku danna na'urar aunawa ta kwaikwayo ku ɗaga zafinta sama da iyakar", "Ku sayi na'urar aunawa ta gaske da farko", "Ku goge code ɗin ku sake farawa", "Ku canja lambar pin ba tare da dalili ba"], answer: 0, why: "Canja ma'aunin na'urar aunawa ta kwaikwayo yana bar ku ga yadda ƙa'idar ke amsawa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kiyaye na'urorin IoT da tsara aikinku",
          minutes: 6,
          goal: "Amfani da manyan matakan tsaro ga na'urori masu haɗuwa da kammala tsarin aikinku.",
          text: [
            "Na'urori masu haɗuwa sune abin da maharan intanet suka fi so, domin da yawa suna zuwa da kalmomin sirri (password) na asali masu rauni kuma ba a taɓa sabunta su ba. Kyamara ko filogi mai wayo da aka kutsa cikinsa zai iya leƙen asirin mutane ko a yi amfani da shi don kai wa wasu hari.",
            "Shawarar US Federal Trade Commission (hukumar kare masu saye ta Amurka) ga na'urorin gida: ku canja sunan mai amfani (username) da kalmar sirri na asali kuma kada ku sake amfani da kalmomin sirri; ku kunna tabbatarwa ta matakai biyu (two-factor authentication) inda akwai; ku riƙa sabunta firmware da manhajar na'urar; ku kashe abubuwan da ba ku amfani da su, kamar sarrafawa daga nesa (remote management); kuma ku cire tsofaffin na'urori. Ga router: ku canja saitunansa na asali, ku kunna ɓoye bayanai (encryption) kuma ku duba sabuntawa. Hanyar sadarwa ta baƙi (guest network) tana raba na'urori masu wayo da kwamfutocin da ke da fayiloli na sirri.",
            "A wurin aiki, ku kuma riƙe jerin kowace na'ura mai haɗuwa, ku sa na'urorin IoT a hanyar sadarwarsu ta daban, kuma ku tattara bayanan da kuke buƙata kawai, musamman idan akwai kyamarori ko makirufo. Ku tambayi ƙungiyar IT ko ta tsaro ta ƙungiyar kafin ku haɗa komai da hanyar sadarwar wurin aiki."
          ],
          steps: ["Ku canja kowace kalmar sirri ta asali; ku yi amfani da ta musamman mai ƙarfi.", "Ku kunna tabbatarwa ta matakai biyu inda akwai.", "Ku sabunta firmware da manhajojin na'urar.", "Ku kashe abubuwan da ba ku amfani da su; ku cire tsofaffin na'urori.", "Ku sa na'urori masu wayo a hanyar sadarwa ta daban ko ta baƙi, ku riƙe jerin na'urori."],
          words: [["Kalmar sirri ta asali (default password)", "kalmar sirrin da na'ura ke zuwa da ita; maharan intanet sun san jerin waɗannan."], ["Firmware", "manhajar da aka gina a cikin na'ura da ke tafiyar da ita."], ["Tabbatarwa ta matakai biyu (two-factor authentication)", "shiga asusu da kalmar sirri tare da shaida ta biyu, kamar code."], ["Hanyar sadarwa ta baƙi (guest network)", "wata Wi-Fi ta daban da ke nisantar da na'urori daga manyan kwamfutocinku."], ["Jerin na'urori (device inventory)", "jerin kowace na'ura mai haɗuwa da ke ƙarƙashin kulawarku."]],
          slides: [
            { title: "Dalilin da yasa ake kai wa IoT hari", bullets: ["Kalmomin sirri na asali masu rauni", "Na'urorin da ba a taɓa sabuntawa ba", "Kyamarori da makirufo na iya fitar da bayanan sirri"] },
            { title: "Ku kiyaye kowace na'ura", bullets: ["Ku canja kalmomin sirri na asali; babu maimaitawa", "Matakai biyu inda akwai", "Ku sabunta firmware da manhajoji", "Ku kashe abubuwan da ba a amfani da su"] },
            { title: "Ku kiyaye hanyar sadarwa", bullets: ["Ku canja saitunan router na asali, ku kunna encryption", "Na'urori masu wayo a hanyar sadarwa ta baƙi", "Ku riƙe jerin na'urori; ku tambayi IT a wurin aiki"] }
          ],
          sources: [FTC, CISA],
          tryIt: "Aikin ƙarshe: ku rubuta tsarin IoT ɗinku mai shafi ɗaya (misali ɗakin sabar, firji mai daskarewa na wurin raba abinci ko lambu). Ku faɗi na'urar aunawa, na'urar, hanyar haɗi da inda bayanan suke zuwa, ku zana hanyar daga na'urar aunawa zuwa faɗakarwa, ku rubuta ƙa'idar faɗakarwa a matsayin if-statement na Python, sannan ku jera matakan tsaro biyar da za ku ɗauka.",
          youCanNow: "kiyaye na'urori masu haɗuwa da tsara cikakken aikin sa ido na IoT.",
          quickCheck: [
            { objective: "O6", q: "Me yasa na'urorin IoT suke yawan zama abin harin maharan intanet?", options: ["Kullum a kashe suke", "Suna cin wuta da yawa", "Ba su da haɗin hanyar sadarwa", "Da yawa suna zuwa da kalmomin sirri na asali masu rauni kuma ba a taɓa sabunta su ba"], answer: 3, why: "Kalmomin sirri na asali masu rauni da rashin sabuntawa suna sa na'urori da yawa su zama masu sauƙin kutsawa." },
            { objective: "O6", q: "Sabuwar kyamarar ƙofa tana da sarrafawa daga nesa (remote management) da ba za ku yi amfani da shi ba. Me za ku yi?", options: ["Ku bar shi a kunne ko da za a buƙata", "Ku kashe shi", "Ku raba kalmar sirrinsa da ƙungiyar", "Ku sake amfani da kalmar sirrin imel ɗinku a kansa"], answer: 1, why: "Kashe abubuwan da ba ku amfani da su yana rufe hanyoyin shigar maharan." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Ginawa da kiyaye aikin IoT",
        questions: [
          { objective: "O4", q: "Wane layi ne ƙa'idar faɗakarwa ta Python daidai?", options: ["temp > 27 then alert", "alert if temp", "print if temp > 27", "if temp > 27: print(\"ALERT\")"], answer: 3, why: "Python yana amfani da if, sharaɗi da kuma alamar colon (:)." },
          { objective: "O4", q: "Me yasa ake jiran ma'aunai masu yawa a jere kafin a faɗakar?", options: ["Don guje wa ƙararrawar ƙarya daga ɗan gajeren hauhawa", "Don adana takarda", "Domin na'urorin aunawa kullum suna kuskure", "Don rage gudun na'urar"], answer: 0, why: "Hauhawa ɗaya, kamar ƙofar da aka buɗe, ba lallai ba ce matsala ta gaske." },
          { objective: "O5", q: "A shirin kwaikwayo, code ɗinku yana karanta pin 15 amma an haɗa na'urar aunawa da pin 4. Me zai faru?", options: ["Zai yi aiki duk da haka", "Allon zai kama da wuta", "Code ɗin ba zai sami ma'aunai daga na'urar aunawa ba", "Zafin zai ninka"], answer: 2, why: "Pin a code dole ya yi daidai da haɗin." },
          { objective: "O6", q: "Mene ne abu NA FARKO da za a yi da sabuwar kyamara mai wayo?", options: ["Riƙe kalmar sirri ta asali", "Raba bayanan shigarta da abokai", "Kashe sabuntawa", "Canja kalmar sirri ta asali zuwa ta musamman mai ƙarfi"], answer: 3, why: "Maharan intanet sun san kalmomin sirri na asali sosai." },
          { objective: "O6", q: "Me yasa za a sa na'urori masu wayo a hanyar sadarwa ta baƙi?", options: ["Don su fi sauri", "Domin ba sa buƙatar kalmar sirri", "Don a raba su da kwamfutocin da ke da fayiloli na sirri", "Don a kashe encryption"], answer: 2, why: "Rabawa yana iyakance abin da na'urar da aka kutsa cikinta za ta iya kaiwa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gabatarwa ga Intanet na Abubuwa (IoT)",
    questions: [
      { objective: "O1", q: "Intanet na Abubuwa shi ne:", options: ["Kafofin sada zumunta kawai", "Abubuwa na zahiri masu na'urorin aunawa da ke haɗuwa suna raba bayanai", "Wani nau'in takardar firinta", "Wasan kwamfuta"], answer: 1, why: "IoT abubuwa ne masu haɗuwa da ke aunawa suna raba bayanai." },
      { objective: "O1", q: "Amfani da bayanan na'urar aunawa don gyara inji kafin ya lalace ana kiransa:", options: ["Predictive maintenance", "Phishing (zambar saƙo)", "Edge storage", "Firmware"], answer: 0, why: "Predictive maintenance yana gano matsaloli da wuri." },
      { objective: "O1", q: "Me yasa tsaro wani ɓangare ne na kowane aikin IoT?", options: ["Ba za a iya kutsawa cikin na'urorin IoT ba", "Ana buƙatarsa ga wayoyi kawai", "Kowace na'ura mai haɗuwa na iya zama hanyar shigar maharan intanet", "Yana sa na'urori su fi araha"], answer: 2, why: "Ƙarin na'urori yana nufin ƙarin hanyoyin shiga." },
      { objective: "O2", q: "Mene ne matakai huɗu na tsarin IoT?", options: ["Na'urar aunawa, na'ura, hanyar haɗi, cloud ko manhaja", "Madannin rubutu, linzamin kwamfuta, allo, firinta", "Imel, tes, kira, wasiƙa", "Mai zafi, mai sanyi-sanyi, mai sanyi, ma'ajiya"], answer: 0, why: "Bayanai suna tafiya daga na'urar aunawa zuwa na'ura zuwa hanyar haɗi zuwa cloud ko manhaja." },
      { objective: "O2", q: "Ƙaramar kwamfuta mai araha a kan chip da ke gudanar da shiri ɗaya ita ce:", options: ["Gonar sabobi (server farm)", "Router", "Dashboard", "Microcontroller"], answer: 3, why: "Allunan kamar ESP32 da Arduino microcontroller ne." },
      { objective: "O2", q: "Injin da ke buɗe famfon ruwa shi ne:", options: ["Na'urar aunawa (sensor)", "Actuator", "Protocol", "Topic"], answer: 1, why: "Actuator yana aiki a duniyar zahiri." },
      { objective: "O2", q: "Yanke shawara a kan na'urar maimakon a cloud shi ne:", options: ["Biyan kuɗin cloud", "Edge computing", "Bluetooth", "Ƙararrawar ƙarya"], answer: 1, why: "Edge computing yana sarrafa bayanai kusa da inda aka tattara su." },
      { objective: "O3", q: "Wace hanyar haɗi ce ta fi dacewa da agogon motsa jiki da ke magana da wayarku?", options: ["LoRaWAN", "Igiya mai waya", "Talabijin ta tauraron ɗan adam", "Bluetooth Low Energy"], answer: 3, why: "BLE yana cin wuta kaɗan kuma yana da ɗan nisa kaɗan." },
      { objective: "O3", q: "Wace hanyar haɗi ce ta dace da na'urar GPS a motar kai kaya?", options: ["Cellular (hanyar sadarwar waya)", "Wi-Fi na gida", "Igiyar USB", "Bluetooth kawai"], answer: 0, why: "Cellular yana aiki kusan ko'ina da akwai sigina." },
      { objective: "O3", q: "A MQTT, firji mai daskarewa yana aika ma'auninsa ta hanyar:", options: ["Buga shi a takarda", "Kiran manaja", "Wallafawa zuwa topic", "Ajiye shi a filashin USB"], answer: 2, why: "Na'urori suna wallafawa; manhajoji suna yin rajista." },
      { objective: "O3", q: "Ta yaya na'urorin IoT masu batir ke daɗewa?", options: ["Ba sa taɓa kunnawa", "Suna amfani da Wi-Fi mafi sauri", "Suna aika bidiyo duk yini", "Suna barci mafi yawan lokaci suna farkawa don aunawa da aikawa"], answer: 3, why: "Barci yana adana wuta." },
      { objective: "O4", q: "Ƙa'ida a IoT yawanci tana nufin:", options: ["Rular aunawa", "Ƙa'idar kalmar sirri", "Idan ma'auni ya wuce iyaka, a yi wani abu", "Igiya"], answer: 2, why: "Ƙa'idoji suna mayar da ma'aunai zuwa ayyuka." },
      { objective: "O4", q: "readings = [20, 28, 22]. Da ƙa'idar \"faɗakarwa idan ya wuce 27\", faɗakarwa nawa?", options: ["0", "1", "2", "3"], answer: 1, why: "28 ne kaɗai ya wuce 27." },
      { objective: "O4", q: "Faɗakarwa ta tashi lokacin da wani ya buɗe ƙofar firji mai daskarewa na daƙiƙa ɗaya. Wannan shi ne:", options: ["Ƙararrawar ƙarya", "Edge computing", "Sabunta firmware", "Encryption"], answer: 0, why: "Ɗan gajeren hauhawa da ba matsala ta gaske ba ƙararrawar ƙarya ce." },
      { objective: "O5", q: "Me yasa ake amfani da shirin kwaikwayo kafin sayen kaya?", options: ["Domin na'urori na gaske ba sa aiki", "Don guje wa koyon code", "Don gwada tsari da code kyauta ko da araha da farko", "Doka ta wajabta shirye-shiryen kwaikwayo"], answer: 2, why: "Shirye-shiryen kwaikwayo suna bar ku gwada ba tare da kaya ba." },
      { objective: "O5", q: "MicroPython shi ne:", options: ["Ƙaramin nau'in Python don microcontroller", "Maciji", "Wani nau'in na'urar aunawa", "Sunan kamfanin Wi-Fi"], answer: 0, why: "Yana gudanar da code na Python a kan ƙananan allunan." },
      { objective: "O5", q: "DHT22 yana auna:", options: ["Wurin GPS", "Bugun zuciya", "Bidiyo", "Zafi da danshin iska"], answer: 3, why: "Na'urar auna zafi da danshin iska ce." },
      { objective: "O6", q: "Wanne ne zaɓi mafi aminci don kalmar sirrin sabon filogi mai wayo?", options: ["Bar ta asali", "Kalmar sirri ta musamman mai ƙarfi", "Amfani da kalmar sirrin imel ɗinku", "\"password123\""], answer: 1, why: "Kalmomin sirri na musamman masu ƙarfi suna hana kutse mai sauƙi." },
      { objective: "O6", q: "Me ya kamata ku yi da firmware na na'urorin IoT?", options: ["Kada ku taɓa sabunta shi", "Ku riƙa sabunta shi", "Ku goge shi", "Ku raba shi a intanet"], answer: 1, why: "Sabuntawa suna gyara ramukan tsaro." },
      { objective: "O6", q: "Kuna son haɗa na'urar aunawa da hanyar sadarwar wurin aikinku. Me za ku fara yi?", options: ["Ku saka ta a ɓoye", "Ku kashe firewall", "Ku raba kalmar sirrin Wi-Fi a intanet", "Ku tambayi ƙungiyar IT ko ta tsaro"], answer: 3, why: "Hanyoyin sadarwar wurin aiki suna da ƙa'idoji; dole IT ta amince da sabbin na'urori." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 2, 3, 6, 7, 9, 11, 14, 17, 19] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Sassan tsarin", objective: "O2", notYet: "Babu na'urar aunawa, na'ura ko inda bayanai suke zuwa.", meets: "Ya faɗi na'urar aunawa, na'urar, hanyar haɗi da inda bayanai suke zuwa.", exceeds: "Ya kuma faɗi actuator ko shawarar da ake yankewa a kan na'ura (edge), da dalilin da yasa take taimakawa." },
      { name: "Zanen hanyar bayanai", objective: "O2", notYet: "Babu zane, ko matakan ba a jere suke ba.", meets: "Zanen yana nuna na'urar aunawa, na'ura, hanyar haɗi, cloud ko manhaja, da faɗakarwa a jere.", exceeds: "Zanen yana kuma nuna wanda zai sami faɗakarwar da abin da zai yi." },
      { name: "Zaɓen hanyar haɗi", objective: "O3", notYet: "Hanyar haɗin ba ta dace da wurin ko wutar ba, kamar Wi-Fi a gona da babu Wi-Fi.", meets: "Hanyar haɗin ta dace da nisa, wuta da bayanan aikin.", exceeds: "Ya bayyana dalilin da yasa wata hanyar haɗi ba za ta dace sosai ba." },
      { name: "Ƙa'idar faɗakarwa", objective: "O4", notYet: "Babu ƙa'idar ko ba za ta yi aiki ba, kamar kwatanci mara kyau.", meets: "If-statement na Python daidai mai iyaka mai ma'ana da aiki.", exceeds: "Tana kuma guje wa ƙararrawar ƙarya, kamar jiran ma'aunai da yawa, kuma an gwada ta a shirin kwaikwayo." },
      { name: "Matakan tsaro", objective: "O6", notYet: "Matakai ƙasa da biyar, ko matakan da ba sa kare na'urorin.", meets: "Matakai biyar daidai, kamar kalmomin sirri na musamman, sabuntawa da hanyar sadarwa ta daban.", exceeds: "Ya kuma haɗa da jerin na'urori da tambayar IT kafin haɗawa a wurin aiki." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ƙara ƙwarewar IoT ko na'urorin aunawa a takardar bayanin aikinsu (CV), ko suka nemi aikin kula da gine-gine, jigilar kaya ko IT cikin kwanaki 60",
      "Masu koyo da suka ce sun canja kalmomin sirri na asali ko sun sabunta na'urori masu wayo a gida cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka fara kwas na Python, hanyoyin sadarwa (networking) ko tsaron intanet a gaba"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai burauzar intanet da intanet",
      "Shirin kwaikwayon IoT kyauta a intanet, kamar Wokwi (ku duba abubuwan da ke kyauta a yanzu)",
      "Takarda da alƙalami, ko takardar kwamfuta, don tsari mai shafi ɗaya da zanen hanyar bayanai",
      "Kusan minti 60 gaba ɗaya: darussa, atisayen shirin kwaikwayo, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama; ku kunna shirin kwaikwayon a allon da kowa ke gani kafin masu koyo su gwada.",
      "Ku gayyaci tsofaffin sojoji su kwatanta IoT da duba kayan aikin soja, haɗin rediyo da hanyoyin faɗakarwa da suka riga suka sani.",
      "Ku ba kowane mai koyo ko kowane mutum biyu aiki daban (ɗakin sabar, firji mai daskarewa na wurin raba abinci, lambu) don a iya kwatanta tsare-tsaren.",
      "Kada ku haɗa wata na'ura ta gaske da hanyar sadarwar shirin ko ta wurin aiki ba tare da izinin ƙungiyar IT ko ta tsaro ba.",
      "Ku ba da maki ga tsarin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

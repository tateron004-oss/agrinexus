"use strict";

// Koach Learn course, Hausa (ha) translation of leadership/lead-managing-teams.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "lead-managing-teams-ha",
  lang: "ha",
  translationOf: "lead-managing-teams",
  category: "Leadership Development",
  name: "Gudanar da Ƙungiyar Aiki",
  skills: "Bayyana abin da ake sa rai a sarari, Ba da aiki ga wasu (delegation), Gudanar da ganawa ɗaya-da-ɗaya, Ba da ra'ayi ta hanyar yanayi-hali-tasiri, Magance rashin cika aiki cikin adalci, Gudanar da taron ƙungiya da yabo",
  outcome: "gudanar da ƙaramar ƙungiya mako-mako: bayyana abin da ake sa rai a sarari, ba da aiki ga wasu, yin ganawa ɗaya-da-ɗaya mai amfani, ba da ra'ayi na adalci kuma takamaimai, magance matsalar cika aiki mataki-mataki, da gudanar da gajeren taron ƙungiya da ke ƙarewa da ayyuka a sarari da godiya ta gaske.",
  about: [
    "Wannan kwas na sababbin manajoji ne da waɗanda za su zama manajoji nan ba da daɗewa ba: shugaban sauyin aiki a shago, shugaban ma'aikata a gona, mai kula a ƙungiyar sa-kai, ko duk wanda aka nemi ya kula da aikin wasu.",
    "Za ku yi atisayen ɗabi'un yau da kullum na manajoji nagari: daga yin aikin da kanku zuwa jagorantar sa, faɗin a sarari yadda aiki mai kyau yake, ba da aiki ga wasu, ganawa ɗaya-da-ɗaya, ba da ra'ayi mai taimako, magance matsala cikin adalci, da gudanar da tarurrukan da mutane ba sa tsoro.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta shi, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\" ta amfani da ƙungiyarku ko wata ƙungiya da kuka sani. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Mataimakan AI za su iya taimaka muku rubuta bayanai da ajandoji, amma ƙwarewar taku ce."
  ],
  finalTask: "Ku rubuta shirin \"kwanaki 30 na farko\" mai shafi ɗaya don ƙungiyar da kuke jagoranta ko wadda kuka sani: abin da ake sa rai a sarari don matsayi ɗaya, aiki ɗaya da za ku ba wani (da sakamakon, ranar ƙarshe da lokacin dubawa), ajandar ganawa ɗaya-da-ɗaya, ra'ayi ɗaya da aka rubuta a tsarin yanayi-hali-tasiri, da ajandar taron ƙungiya na minti 20 da ke ƙarewa da ayyuka da godiya ɗaya takamaimai.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Sababbin shugabannin ƙungiya da masu burin zama, masu kula da ma'aikata da masu ƙananan kasuwanci, ciki har da mutanen da aka ɗaga daga aikin gaba da masu sa-kai da ke jagorantar ƙungiyoyi a ƙungiyoyin al'umma.",
    startingPoint: "Suna da ƙwarewa a aikinsu kuma suna iya bin umarni. Da yawa ba su taɓa samun horon gudanarwa ba, wasu kuma yanzu suna kula da tsofaffin abokan aikinsu.",
    gap: "Sababbin manajoji sau da yawa suna ci gaba da yin aikin da kansu, suna ba da umarni marasa sarari, suna guje wa tattaunawa mai wuya, kuma suna gudanar da tarurruka ba tare da ayyuka ba. Wannan yana gajiyar da su kuma yana hana ƙungiyar ci gaba. Suna buƙatar ɗabi'u masu sauƙi da za a iya maimaitawa don abin da ake sa rai, ba da aiki ga wasu, ganawa ɗaya-da-ɗaya, ba da ra'ayi, matsalolin cika aiki da tarurruka.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Lokaci: gajerun darussa da suka dace da ranar aiki",
      "Na'urori: waya ko kwamfuta; takarda ma tana aiki don shirin",
      "Dokokin wurin aiki sun bambanta: gargaɗi na hukuma da kora daga aiki suna bin manufofin ƙungiyar da sashen kula da ma'aikata (HR)",
      "Sirri: bayanan ganawa ɗaya-da-ɗaya da bayanan cika aiki suna zama a sirri kuma cikin girmamawa"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kun fara kula da mutane", action: "bayyana yadda aikinku yake canjawa da zaɓar aiki ɗaya da za ku daina yi da kanku", standard: "kuna ambaton aƙalla sassa biyu na babban aikin manaja" },
    { id: "O2", condition: "Idan aka ba ku aiki ɗaya don wani a ƙungiya", action: "rubuta abin da ake sa rai a sarari da ba da aikin tare da sakamakon, ranar ƙarshe, abin da zai iya yanke shawara a kai da lokacin dubawa", standard: "ta yadda mutumin zai iya maimaita aikin da kalmominsa" },
    { id: "O3", condition: "Don mutum ɗaya a ƙungiya", action: "tsara ajandar ganawa ɗaya-da-ɗaya da ke farawa da abin da ke zuciyarsa", standard: "ta ƙunshi ci gaba, abubuwan da ke hana aiki da girma" },
    { id: "O4", condition: "Idan aka ba ku wani abu da wani a ƙungiya ya yi", action: "rubuta ra'ayi a tsarin yanayi-hali-tasiri da tambayar yadda shi yake ganin abin", standard: "kuna ambaton takamaiman hali da kuka gani ko kuka ji, ba tare da \"koyaushe\" ko \"ba taɓa\" ba" },
    { id: "O5", condition: "Idan aka ba ku matsalar cika aiki", action: "tsara tattaunawa ta sirri da rubutaccen shirin ingantawa", standard: "kuna fara duba abin da ake sa rai, kuma kuna haɗawa da yadda aiki mai kyau yake, taimakon da za ku bayar da ranar dubawa" },
    { id: "O6", condition: "Don taron ƙungiya na yau da kullum", action: "rubuta gajeriyar ajanda da ke ƙarewa da ayyuka da godiya ɗaya takamaimai", standard: "tare da wane ne zai yi me kafin yaushe, kuma an aika ta a ranar" }
  ],
  chapters: [
    {
      name: "Babi na 1: Daga mai aiki zuwa manaja",
      lessons: [
        {
          objectives: ["O1"],
          title: "Daga mai yin aiki zuwa manaja",
          minutes: 4,
          goal: "Bayyana yadda aikinku yake canjawa idan kun fara kula da mutane, da zaɓar abin da za ku daina yi da kanku.",
          text: [
            "Manajoji da yawa suna samun matsayin ne saboda sun ƙware a aikin. Amma yanzu aikin ya bambanta: sakamakonku shi ne sakamakon ƙungiyar. Idan kun ci gaba da yin komai da kanku, ƙungiyar za ta daina girma, ku kuma za ku gaji.",
            "Sabon aikinku shi ne bayyana manufa a sarari, ba mutane abin da suke buƙata, cire abubuwan da ke hana su aiki, taimaka musu su inganta, da lura da aiki mai kyau. Har yanzu kuna taimakawa idan hakan yana da amfani sosai, amma ba shi ne babban aikinku ba yanzu.",
            "Al'ada ce wannan ya ji muku baƙon abu, musamman idan yanzu kuna kula da tsofaffin abokan aikinku. Ku zama masu sakin fuska, ku yi adalci ga kowa, kuma ku faɗi gaskiya cewa matsayinku ya canja. Ku tambayi manajanku yadda nasara take a gare ku."
          ],
          steps: ["Ku rubuta ayyukan da har yanzu kuke yi da kanku kowane mako.", "Ku yi alama a kan waɗanda wani a ƙungiya zai iya koyon yi.", "Ku zaɓi ɗaya da za ku ba wani a wannan watan.", "Ku tambayi manajanku: \"Me zai sa ƙungiyata ta yi nasara a cikin watanni shida?\""],
          words: [["Manaja", "mutumin da ke da alhakin sakamakon ƙungiyar mutane, ba aikinsa kaɗai ba."], ["Ma'aikacin da kuke kula da shi (direct report)", "mutumin da ku ne manajansa."]],
          slides: [
            { title: "Aikinku ya canja", bullets: ["Da: sakamakonku na kanku", "Yanzu: sakamakon ƙungiyar", "Yin komai da kanku yana hana ƙungiyar girma"] },
            { title: "Abin da manaja yake yi", bullets: ["Yana bayyana manufa a sarari", "Yana ba mutane abin da suke buƙata", "Yana cire abubuwan da ke hana aiki", "Yana taimaka wa mutane su inganta, kuma yana lura da aiki mai kyau"] },
            { title: "Kula da tsofaffin abokan aiki", bullets: ["Ku zama masu sakin fuska da adalci ga kowa", "Ku faɗi gaskiya cewa matsayinku ya canja", "Ku tambayi manajanku yadda nasara take"] }
          ],
          tryIt: "Ku rubuta ayyuka biyar da kuke yi kowane mako. Ku zagaye ɗaya da wani a ƙungiyarku zai iya koyo. Ku rubuta jimla ɗaya game da wanda zai iya ɗaukar sa da dalilin da yasa zai taimake shi.",
          youCanNow: "bayyana yadda aikin manaja ya bambanta da na mai yin aiki, da zaɓar aiki ɗaya da za ku daina yi da kanku.",
          quickCheck: [
            { objective: "O1", q: "Wanne ne ɓangare na sabon aikin manaja?", options: ["Yin kowane aiki mai wuya da kansa", "Bayyana manufa a sarari da lura da aiki mai kyau", "Guje wa tsofaffin abokan aiki", "Duba kowane imel da ƙungiyar ta aika"], answer: 1, why: "Aikin manaja shi ne bayyana manufa a sarari, cire abubuwan da ke hana aiki, taimaka wa mutane su inganta da lura da aiki mai kyau." },
            { objective: "O1", q: "Kun fara kula da mutane kuma ba ku tabbata yadda nasara take a gare ku ba. Me za ku yi?", options: ["Ku yi hasashe ku yi fatan alheri", "Ku kwaikwayi manajan da ya gabata daidai", "Ku bar ƙungiyar ta yanke shawara", "Ku tambayi manajanku yadda nasara take"], answer: 3, why: "Darasin ya ce ku tambayi manajanku yadda nasara take." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Bayyana abin da ake sa rai da ba da aiki ga wasu",
          minutes: 6,
          goal: "Rubuta abin da ake sa rai a sarari da ba da aiki tare da sakamako, ranar ƙarshe da lokacin dubawa.",
          text: [
            "Yawancin matsalolin ƙungiya suna farawa ne daga abin da ake sa rai da ba shi da sarari. Mutane ba za su iya cimma burin da ba sa gani ba. Abin da ake sa rai a sarari yana faɗin sakamakon, yadda ya kamata ya yi kyau, da kafin yaushe. \"Ku tsaftace shago\" ba shi da sarari. \"Ku cika kuma ku jera kayan shiryayyun gaba kafin ƙarfe 9 na safe kowace rana\" yana da sarari.",
            "Ba da aiki ga wasu (delegation) yana nufin ba wani aiki tare da ikon yin sa, ba ƙananan ayyuka kawai ba. Ku faɗi sakamakon da kuke so da dalilin da yasa yake da muhimmanci, ranar ƙarshe, abin da zai iya yanke shawara a kai shi kaɗai, da lokacin da za ku duba. Sannan ku bar shi ya yi ta hanyarsa.",
            "Ku daidaita ba da aikin da mutumin. Sabon mutum yana buƙatar ƙarin matakai da ƙarin dubawa. Gogaggen mutum wataƙila manufa kawai yake buƙata. Ku nemi ya maimaita abin da ya ji, don ku duka ku san kun yarda."
          ],
          steps: ["Ku ambaci sakamakon da kuke so da dalilin da yasa yake da muhimmanci.", "Ku faɗi yadda ya kamata ya yi kyau da ranar ƙarshe.", "Ku faɗi abin da zai iya yanke shawara shi kaɗai da lokacin da zai tambaye ku.", "Ku yarda kan lokacin dubawa.", "Ku nemi ya maimaita aikin da kalmominsa."],
          words: [["Abin da ake sa rai (expectation)", "bayani a sarari na sakamakon da wani ke da alhakinsa da yadda za a auna shi."], ["Ba da aiki ga wasu (delegate)", "ba wani aiki tare da ikon yin sa."], ["Dubawa (check-in)", "gajeriyar tattaunawa da aka tsara don ganin yadda aiki yake tafiya."]],
          slides: [
            { title: "Abin da ake sa rai a sarari", bullets: ["Wane sakamako", "Yadda ya kamata ya yi kyau", "Kafin yaushe"] },
            { title: "Marar sarari da mai sarari", bullets: ["Marar sarari: \"Ku tsaftace shago\"", "Mai sarari: \"Ku cika kuma ku jera shiryayyun gaba kafin ƙarfe 9 na safe kowace rana\""] },
            { title: "Sassa biyar na ba da aiki mai kyau", bullets: ["Sakamako da dalilin da yasa yake da muhimmanci", "Inganci da ranar ƙarshe", "Abin da zai yanke shawara shi kaɗai", "Lokacin dubawa, sannan ya maimaita shi"] },
            { title: "Ku daidaita shi da mutumin", bullets: ["Sabo: ƙarin matakai, ƙarin dubawa", "Gogagge: manufa da sarari don yin aiki"] }
          ],
          tryIt: "Ku ɗauki aikin da kuka zagaye a Darasi na 1. Ku rubuta ba da aikin da dukkan sassa biyar. Ku karanta wa aboki ko ku faɗa da babbar murya, sannan ku tambayi kanku: shin wani zai iya yin wannan ba tare da ya yi min tambayoyi goma ba?",
          youCanNow: "rubuta abin da ake sa rai a sarari da ba da aiki tare da sakamako, ranar ƙarshe, iyakar yanke shawara da lokacin dubawa.",
          quickCheck: [
            { objective: "O2", q: "Wane abubuwa uku ne abin da ake sa rai a sarari yake faɗi?", options: ["Sakamakon, yadda ya kamata ya yi kyau, da kafin yaushe", "Wane ne shugaba, sunan ƙungiya da wuri", "Albashi, sa'o'i da hutu", "Dokoki, hukunci da fom-fom"], answer: 0, why: "Abin da ake sa rai a sarari yana ambaton sakamakon, ingancin da ranar ƙarshe." },
            { objective: "O2", q: "Kuna ba gogaggen mutum a ƙungiya aiki. Me za ku yi?", options: ["Ku ba shi kowane mataki ku duba shi kowace sa'a", "Kada ku ba shi ranar ƙarshe", "Ku ba shi manufa da ranar ƙarshe, sannan ku bar shi ya yi ta hanyarsa", "Ku fara yin rabinsa"], answer: 2, why: "Ku daidaita ba da aikin da mutumin; gogaggun mutane wataƙila manufa kawai suke buƙata." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Gudanar da ganawa ɗaya-da-ɗaya mai amfani",
          minutes: 5,
          goal: "Tsara da yin ganawa ɗaya-da-ɗaya ta yau da kullum da ta mallaki mutumin a ƙungiya.",
          text: [
            "Ganawa ɗaya-da-ɗaya (one-on-one) gajeren taro ne na sirri na yau da kullum tsakaninku da mutum ɗaya a ƙungiyarku, sau da yawa minti 20 zuwa 30 kowane mako ko mako biyu. Shi ne wuri mafi kyau don gano matsaloli da wuri, gina amincewa da taimaka wa mutane su girma.",
            "Ku mai da shi taronsa. Ku fara da abin da ke zuciyarsa. Sannan ku yi magana kan ci gaban aikinsa, duk abin da ke hana shi aiki, da girmansa. Labarin halin aiki da za ku iya karantawa a saƙo, ku bar shi a saƙo.",
            "Ku kare lokacin: kada ku yawaita soke shi, ku ajiye wayarku, kuma ku fi saurara fiye da magana. Ku rubuta duk alƙawarin da kuka yi ku cika shi. Ku ajiye bayanan a sirri kuma cikin girmamawa."
          ],
          steps: ["Ku sa lokaci na yau da kullum ku kiyaye shi.", "Ku buɗe da: \"Me ke zuciyarka?\"", "Ku tambaya game da ci gaba da abin da ke hana shi aiki.", "Ku yi magana kan girma: \"Me kake son ka ƙara ƙwarewa a kai?\"", "Ku gama ta hanyar yarda kan matakai na gaba, ku rubuta su."],
          words: [["Ganawa ɗaya-da-ɗaya (one-on-one)", "taro na sirri na yau da kullum tsakanin manaja da mutum ɗaya a ƙungiya."], ["Abin da ke hana aiki (blocker)", "duk abin da ke hana wani kammala aikinsa."]],
          slides: [
            { title: "Mene ne ganawa ɗaya-da-ɗaya", bullets: ["Gajere, na sirri kuma na yau da kullum", "Sau da yawa minti 20-30 kowane mako ko mako biyu", "Yana gano matsaloli da wuri kuma yana gina amincewa"] },
            { title: "Ku mai da shi taronsa", bullets: ["Buɗewa: \"Me ke zuciyarka?\"", "Ci gaba da abubuwan da ke hana aiki", "Girma", "Matakai na gaba, a rubuce"] },
            { title: "Ku kare lokacin", bullets: ["Kada ku yawaita soke shi", "Ku ajiye waya, ku fi saurara fiye da magana", "Ku cika kowane alƙawarin da kuka yi"] }
          ],
          tryIt: "Ku rubuta ajandar ganawa ɗaya-da-ɗaya don wani mutum na gaske ko na hasashe a ƙungiya mai tambayoyi huɗu: ɗaya ta buɗewa, ɗaya game da ci gaba, ɗaya game da abubuwan da ke hana aiki, ɗaya kuma game da girma.",
          youCanNow: "tsara da yin ganawa ɗaya-da-ɗaya da ke sa buƙatun mutumin a gaba kuma ke ƙarewa da matakai na gaba a sarari.",
          quickCheck: [
            { objective: "O3", q: "Mene ne ganawa ɗaya-da-ɗaya?", options: ["Bita ta shekara-shekara", "Gajeren taro na sirri na yau da kullum da mutum ɗaya a ƙungiya", "Taron dukkan ƙungiya", "Zaman ladabtarwa"], answer: 1, why: "Ganawa ɗaya-da-ɗaya sau da yawa minti 20 zuwa 30 ce kowane mako ko mako biyu." },
            { objective: "O3", q: "Ganawarku ɗaya-da-ɗaya tana ci gaba da zama labarin halin aiki kawai. Me za ku canja?", options: ["Ku soke su", "Ku tsawaita su", "Ku yi su a rukuni", "Ku mayar da labarin halin aiki zuwa saƙo, ku fara da abin da ke zuciyarsa"], answer: 3, why: "Ku mai da shi taronsa; labarin da za ku iya karantawa yana cikin saƙo." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Daga mai aiki zuwa manaja",
        questions: [
          { objective: "O1", q: "Mene ne babban canji idan kun tashi daga mai yin aiki zuwa manaja?", options: ["Kuna aiki ƙananan sa'o'i", "Sakamakonku yanzu shi ne sakamakon ƙungiyar", "Ba ku buƙatar saurara kuma", "Kuna yin dukkan ayyuka masu wuya da kanku"], answer: 1, why: "Ana auna manaja ne da abin da dukkan ƙungiyar ta cimma." },
          { objective: "O2", q: "Wane abin da ake sa rai ne ya fi sarari?", options: ["\"Ku yi iya ƙoƙarinku\"", "\"Ku kiyaye tsabta\"", "\"Ku ƙara kula da abubuwa\"", "\"Ku aika odar mako ga mai kawo kaya kafin ƙarfe 12 na ranar Alhamis\""], answer: 3, why: "Yana ambaton sakamakon da ranar ƙarshe." },
          { objective: "O2", q: "Kuna ba sabon mutum a ƙungiya aikin rubuta rahoto. Me ya kamata ku ƙara?", options: ["Ƙarin matakai da dubawa da wuri", "Babu komai; ku bar shi ya yi hasashe", "Gargaɗin cewa za ku sake yin sa", "Ranar ƙarshe kawai"], answer: 0, why: "Sabon mutum yana buƙatar ƙarin jagora da dubawa da wuri." },
          { objective: "O3", q: "Taron wane ne ganawa ɗaya-da-ɗaya galibi?", options: ["Na shugaban manajan", "Na dukkan ƙungiya", "Na mutumin da ke ƙungiya", "Na sashen kula da ma'aikata (HR)"], answer: 2, why: "Ku fara da abin da ke zuciyarsa; lokacinsa ne." },
          { objective: "O2", q: "Bayan kun ba da aiki, hanya mai kyau ta tabbatar da cewa kun yarda ita ce:", options: ["Sake aika shi da manyan baƙaƙe", "Neman ya maimaita aikin da kalmominsa", "Duba shi kowace sa'a", "Yin sa da kanku don gudun abin da zai faru"], answer: 1, why: "Maimaita shi yana nuna ko ku duka kun fahimci abu ɗaya." }
        ]
      }
    },
    {
      name: "Babi na 2: Ra'ayi, cika aiki da ƙungiya",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ba da ra'ayi ta hanyar yanayi-hali-tasiri",
          minutes: 5,
          goal: "Ba da ra'ayi takamaimai, na yabo ko na gyara, ta amfani da yanayi-hali-tasiri.",
          text: [
            "Ra'ayi (feedback) yana aiki idan yana takamaimai, a kan lokaci, kuma game da abin da mutum ya yi, ba game da wanene shi ba. Hanya mai sauƙi ta faɗin sa ita ce yanayi-hali-tasiri, wadda ake kira SBI (situation-behavior-impact).",
            "Yanayi: yaushe kuma a ina. Hali: abin da mutumin ya yi da kuka gani ko kuka ji. Tasiri: abin da ya faru saboda shi. Misali: \"A kiran abokin ciniki na safiyar yau (yanayi), ka katse mata magana sau biyu (hali). Ta ji haushi ta nemi a kawo mai kula (tasiri).\" Sannan ku tambaya: \"Yaya kai ka gani?\" ku kuma yarda kan mataki na gaba tare.",
            "Ku yi amfani da SBI don yabo ma: \"A tara abincin ranar Asabar, ka shirya teburin rajista da wuri. Mun yi wa masu sa-kai 40 rajista ba tare da layi ba.\" Ku ba da ra'ayi da wuri, a sirri idan gyara ne, kuma ku guji kalmomi kamar \"koyaushe\" da \"ba taɓa\"."
          ],
          steps: ["Yanayi: ku faɗi yaushe kuma a ina.", "Hali: ku bayyana abin da ya yi, kamar yadda kyamarar bidiyo za ta gani.", "Tasiri: ku faɗi abin da ya faru saboda shi.", "Ku tambayi yadda shi yake gani, ku saurara.", "Ku yarda kan mataki na gaba."],
          words: [["Ra'ayi (feedback)", "bayani game da yadda ayyukan wani suka shafi aikin, wanda ake bayarwa don ya ci gaba da yin sa ko ya canja."], ["SBI", "situation-behavior-impact (yanayi-hali-tasiri): hanyar ba da ra'ayi da ke ambaton yaushe, abin da ya yi, da abin da ya faru."]],
          slides: [
            { title: "Ra'ayi mai kyau yana", bullets: ["Takamaimai", "Ba da daɗewa ba bayan abin ya faru", "Game da abin da ya yi, ba wanene shi ba"] },
            { title: "Yanayi-hali-tasiri", bullets: ["Yanayi: yaushe kuma a ina", "Hali: abin da ya yi", "Tasiri: abin da ya faru saboda shi"] },
            { title: "Sannan ku tattauna shi", bullets: ["Ku tambaya: \"Yaya kai ka gani?\"", "Ku saurara", "Ku yarda kan mataki na gaba"] },
            { title: "Ku yi amfani da shi don yabo ma", bullets: ["Godiya takamaimai ta fi \"ka yi kyau\" tasiri", "Ku yi gyara a sirri", "Ku guji \"koyaushe\" da \"ba taɓa\""] }
          ],
          tryIt: "Ku rubuta bayanan SBI biyu game da lokuta na gaske da kuka gani: ɗaya don yabon aiki mai kyau, ɗaya kuma don gyara matsala. Ku duba cewa sashen hali yana bayyana abin da kuka gani ko kuka ji kawai.",
          youCanNow: "ba da ra'ayi takamaimai kuma na adalci da yanayi, hali da tasiri, da mayar da shi mataki na gaba.",
          quickCheck: [
            { objective: "O4", q: "A ra'ayin SBI, mene ne \"tasiri\"?", options: ["Abin da ya faru saboda abin da mutumin ya yi", "Yaushe kuma a ina abin ya faru", "Abin da kuke tunani game da mutumin", "Hukuncin lokaci na gaba"], answer: 0, why: "Tasiri shi ne sakamakon halin." },
            { objective: "O4", q: "Wani a ƙungiya ya tsaya a makare don gyara odar abokin ciniki. Me za ku faɗa?", options: ["\"Koyaushe kana da kyau.\"", "\"Na gode, kila.\"", "\"Jiya da dare ka gyara odar Malama Lee, don haka ta same ta a kan lokaci kuma ta gode mana.\"", "Babu komai; aikinsa ne"], answer: 2, why: "SBI yana aiki don yabo ma: yanayi, hali da tasiri." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Magance rashin cika aiki cikin adalci",
          minutes: 6,
          goal: "Bi da matsalar cika aiki ta matakai a sarari, na adalci kuma a rubuce.",
          text: [
            "Idan wani baya cika abin da ake sa rai, ku ɗauki mataki da wuri. Jira yawanci yana ƙara muni kuma rashin adalci ne ga sauran ƙungiyar. Da farko ku duba kanku: shin abin da ake sa rai yana da sarari? Shin yana da horo, kayan aiki da lokaci?",
            "Ku yi magana a sirri. Ku yi amfani da SBI don ambaton giɓin, sannan ku tambayi abin da ke hana shi. Wani lokaci akwai dalilin da ba ku sani ba, kamar matsalar lafiya ko ta iyali, kayan aiki da ya lalace ko umarni masu rikitarwa. Ku yarda kan shiri tare: yadda aiki mai kyau yake, taimakon da za ku bayar, da ranar dubawa.",
            "Ku rubuta abin da kuka yarda da shi, ku kuma bi diddigi a wannan ranar. Ku auna kowa da ma'auni ɗaya. Idan abubuwa ba su inganta ba, ko kafin kowane gargaɗi na hukuma ko kora daga aiki, ku bi manufofin ƙungiyarku ku yi magana da sashen kula da ma'aikata (HR) ko manajanku. Dokoki sun bambanta daga wuri zuwa wuri, don haka ku nemi shawara idan kuna shakka."
          ],
          steps: ["Ku duba: shin abin da ake sa rai yana da sarari, kuma yana da abin da yake buƙata?", "Ku gana a sirri ku ambaci giɓin da SBI.", "Ku tambayi abin da ke hana shi, ku saurara.", "Ku yarda kan yadda aiki mai kyau yake, taimakonku da ranar dubawa.", "Ku rubuta shi ku bi diddigi a ranar.", "Kafin matakai na hukuma, ku bi manufofinku ku yi magana da HR ko manajanku."],
          words: [["Rashin cika aiki (under-performance)", "lokacin da aikin wani baya cika abin da aka sa rai."], ["Shirin ingantawa (improvement plan)", "rubutacciyar yarjejeniya kan abin da dole ya canja, taimakon da za a bayar, da ranar dubawa."], ["HR", "human resources (sashen kula da ma'aikata): mutanen da ke kula da ɗaukar ma'aikata, manufofi da al'amuran ma'aikata."]],
          slides: [
            { title: "Ku ɗauki mataki da wuri", bullets: ["Jira yana ƙara muni", "Rashin adalci ne ga sauran ƙungiyar"] },
            { title: "Ku fara duba kanku", bullets: ["Shin abin da ake sa rai yana da sarari?", "Shin yana da horo, kayan aiki da lokaci?"] },
            { title: "Tattaunawar", bullets: ["A sirri, ta amfani da SBI", "Ku tambayi abin da ke hana shi", "Ku yarda kan yadda aiki mai kyau yake, taimako da rana"] },
            { title: "Ku kiyaye adalci", bullets: ["Ku rubuta abin da kuka yarda da shi", "Ku bi diddigi a ranar", "Ma'auni ɗaya ga kowa", "Ku bi manufofi; ku yi magana da HR kafin matakai na hukuma"] }
          ],
          tryIt: "Ku yi tunanin matsalar cika aiki ta gaske ko ta ƙirƙira. Ku rubuta shirin ingantawa a layuka huɗu: giɓin (a tsarin SBI), yadda aiki mai kyau yake, taimakon da za ku bayar, da ranar dubawa.",
          youCanNow: "magance matsalar cika aiki da wuri kuma cikin adalci ta hanyar tattaunawa ta sirri, rubutaccen shiri da bin diddigi.",
          quickCheck: [
            { objective: "O5", q: "Me ya kamata ku duba kafin ku tayar da matsalar cika aiki?", options: ["Ko abin da ake sa rai yana da sarari kuma yana da abin da yake buƙata", "Ko wasu ma ba sa son sa", "Ko za ku iya korar sa yau", "Ko HR suna da aiki"], answer: 0, why: "Da farko ku duba kanku: abin da ake sa rai a sarari, horo, kayan aiki da lokaci." },
            { objective: "O5", q: "Kun yarda kan shirin ingantawa da ranar dubawa. Me za ku yi a wannan ranar?", options: ["Ku manta da shi idan abubuwa sun yi kamar suna lafiya", "Ku bi diddigi ku rubuta abin da ya faru", "Ku ba da gargaɗi na hukuma ba tare da magana ba", "Ku fara sabon shiri da wani mutum daban"], answer: 1, why: "Ku rubuta abin da kuka yarda da shi ku bi diddigi a wannan ranar." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Tarurrukan ƙungiya da yabo",
          minutes: 5,
          goal: "Gudanar da gajeren taron ƙungiya da ke ƙarewa da ayyuka a sarari da godiya takamaimai.",
          text: [
            "Taron ƙungiya mai kyau yana da manufa, ajandar da aka aika tun kafin taron, lokacin farawa da na ƙarewa, da jerin ayyuka a ƙarshe. Idan labari kawai kuke son rabawa, ku aika saƙo a maimakon haka.",
            "Ku gudanar da shi a kan lokaci. Ku bi kowa ɗaya bayan ɗaya don masu shiru su yi magana, ku ajiye maganganun gefe don wani lokaci, kuma ku gama ta hanyar karanta kowane aiki: wane ne zai yi me, kafin yaushe. Ku aika ayyukan a ranar. Mataimakin AI zai iya taimaka muku mayar da bayananku zuwa jeri mai tsabta, amma ku duba shi.",
            "Yabo yana ƙarfafa mutane. Ku gode wa mutane sau da yawa, da wuri, kuma takamaimai, ku faɗi yadda aikinsu ya taimaka. Wasu suna son yabo a gaban jama'a; wasu sun fi son magana ta sirri ko takarda. Ku tambaye su abin da suke so."
          ],
          steps: ["Ku rubuta manufa da gajeriyar ajanda; ku aika ta tun kafin taron.", "Ku fara ku gama a kan lokaci.", "Ku gayyaci kowane mutum ya yi magana.", "Ku rufe ta hanyar karanta ayyuka: wane ne, me, kafin yaushe.", "Ku aika ayyukan a ranar.", "Ku yi godiya ɗaya takamaimai."],
          words: [["Ajanda", "jerin batutuwan taro, bisa tsari."], ["Aikin da aka yarda (action item)", "aikin da aka yarda da shi a taro, tare da mutum da ranar ƙarshe."], ["Yabo (recognition)", "nuna wa mutane cewa kun lura kuma kuna daraja aikinsu."]],
          slides: [
            { title: "Kafin taron", bullets: ["Manufa a sarari", "Gajeriyar ajanda da aka aika tun kafin taron", "Labari kawai? Ku aika saƙo a maimakon haka"] },
            { title: "Lokacin taron", bullets: ["Ku fara ku gama a kan lokaci", "Ku gayyaci kowa ya yi magana", "Ku ajiye maganganun gefe don wani lokaci"] },
            { title: "Ku gama da ayyuka", bullets: ["Wane ne zai yi me, kafin yaushe", "Ku aika su a ranar"] },
            { title: "Yabo", bullets: ["Sau da yawa, da wuri kuma takamaimai", "Ku faɗi yadda aikinsu ya taimaka", "Ku tambaya ko sun fi son godiya a fili ko a sirri"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta shirinku na \"kwanaki 30 na farko\" mai shafi ɗaya. Ku haɗa abin da ake sa rai don matsayi ɗaya, aiki ɗaya da za ku ba wani, ajandar ganawa ɗaya-da-ɗaya, bayanin ra'ayin SBI ɗaya, da ajandar taro na minti 20 da ke ƙarewa da ayyuka da godiya ɗaya takamaimai.",
          youCanNow: "gudanar da gajeren taron ƙungiya mai manufa, rufe shi da ayyuka a sarari, da yaba aiki mai kyau ta hanyar da mutane ke daraja.",
          quickCheck: [
            { objective: "O6", q: "Me taron ƙungiya mai kyau yake da shi?", options: ["Babu ajanda don ya kasance mai sassauci", "Manufa, ajandar da aka aika tun kafin taron, lokacin farawa da ƙarewa, da ayyuka", "Manaja ne kaɗai ke magana", "Babu lokacin ƙarewa"], answer: 1, why: "Waɗannan sassa suna sa taro ya zama gajere kuma mai amfani." },
            { objective: "O6", q: "Wani mai shiru a ƙungiya yana son godiya ta sirri. Me za ku yi?", options: ["Ku yabe shi da ƙarfi a taron duk da haka", "Ku ƙyale godiya gare shi", "Ku gode masa a hirar ƙungiya", "Ku yi masa godiya takamaimai ta magana ta sirri ko takarda"], answer: 3, why: "Ku tambayi mutane irin yabon da suke so, ku girmama shi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Ra'ayi, cika aiki da ƙungiya",
        questions: [
          { objective: "O4", q: "A yanayi-hali-tasiri, mene ne sashen \"hali\"?", options: ["Ra'ayinku game da ɗabi'arsa", "Abin da wasu suka faɗa game da shi", "Abin da ya yi da kuka gani ko kuka ji", "Sunan matsayinsa a aiki"], answer: 2, why: "Hali shi ne abin da mutumin ya yi a zahiri, an bayyana shi a sauƙaƙe." },
          { objective: "O4", q: "Wace magana ce ra'ayin SBI?", options: ["\"Kai malalaci ne.\"", "\"A taron ranar Talata ka gama kasafin kuɗi da wuri, don haka muka amince da shi a kan lokaci.\"", "\"Koyaushe kana ɓata abubuwa.\"", "\"Ka yi kyau, kila.\""], answer: 1, why: "Tana ambaton yanayi, hali da tasiri." },
          { objective: "O5", q: "Kafin ku tayar da matsalar cika aiki, me ya kamata ku fara dubawa?", options: ["Ko abin da ake sa rai yana da sarari kuma yana da abin da yake buƙata", "Ko wasu ba sa son sa", "Ko za ku iya korar sa yau", "Shafukansa na sada zumunta"], answer: 0, why: "Matsaloli da yawa suna zuwa ne daga abin da ake sa rai marar sarari ko rashin kayan aiki." },
          { objective: "O5", q: "Aikin wani a ƙungiya yana ci gaba da raguwa. Yaushe ya kamata ku ɗauki mataki?", options: ["A bitar shekara-shekara", "Ba taɓa ba; wataƙila zai gyaru da kansa", "Sai bayan wasu sun yi ƙorafi", "Da wuri, a tattaunawa ta sirri"], answer: 3, why: "Ɗaukar mataki da wuri ya fi tausayi da adalci fiye da jira." },
          { objective: "O6", q: "Da me ya kamata kowane taron ƙungiya ya ƙare?", options: ["Doguwar jawabi", "Ayyuka: wane ne zai yi me, kafin yaushe", "Wani sabon taro", "Babu komai a rubuce"], answer: 1, why: "Ayyuka a sarari suna mayar da magana zuwa aiki." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gudanar da Ƙungiyar Aiki",
    questions: [
      { objective: "O1", q: "Wata sabuwar manaja tana ci gaba da yin dukkan ayyuka masu wuya da kanta. Mene ne babban haɗari?", options: ["Ƙungiyar tana koyo da sauri", "Abokan ciniki sun fi farin ciki", "Ƙungiyar ta daina girma, ita kuma ta gaji", "Babu abin da ya canja"], answer: 2, why: "Yin komai da kanku yana hana ƙungiyar girma." },
      { objective: "O1", q: "Wanne ne ɓangare na babban aikin manaja?", options: ["Cire abubuwan da ke hana ƙungiya aiki", "Yin kowane aiki shi kaɗai", "Guje wa tattaunawa mai wuya", "Ɓoye manufofi"], answer: 0, why: "Manajoji suna cire abubuwan da ke hana aiki don ƙungiyar ta yi aiki." },
      { objective: "O1", q: "Yanzu kuna kula da tsofaffin abokan aikinku. Hanya mai kyau ita ce:", options: ["Yin kamar babu abin da ya canja", "Taimaka wa abokanku kawai", "Guje wa magana da su", "Zama masu sakin fuska, adalci ga kowa, da gaskiya cewa matsayinku ya canja"], answer: 3, why: "Adalci da gaskiya suna gina amincewa a sabon matsayi." },
      { objective: "O2", q: "Abin da ake sa rai a sarari ya haɗa da:", options: ["Ji kawai", "Sakamakon, yadda ya kamata ya yi kyau, da kafin yaushe", "Barazana", "Dogon tarihi"], answer: 1, why: "Sakamako, inganci da ranar ƙarshe suna sa shi a sarari." },
      { objective: "O2", q: "Ba da aiki ga wasu (delegation) yana nufin:", options: ["Ba da ƙananan ayyukan da ba ku so kawai", "Kallon kowane mataki", "Ba wani aiki tare da ikon yin sa", "Yin sa da kanku daga baya"], answer: 2, why: "Ainihin ba da aiki ya haɗa da ikon ɗaukar mataki." },
      { objective: "O2", q: "Idan kuna ba da aiki, ya kamata ku faɗi abin da mutumin zai iya:", options: ["Yanke shawara a kai shi kaɗai", "Kada ya taɓa tambaya a kai", "Ɓoye muku", "Tsallakewa"], answer: 0, why: "Iyakar yanke shawara tana ba shi damar ɗaukar mataki ba tare da jiran ku ba." },
      { objective: "O3", q: "Sau nawa ake yawan yin ganawa ɗaya-da-ɗaya?", options: ["Sau ɗaya a shekara", "Sai idan akwai matsala", "Ba taɓa ba", "Kowane mako ko mako biyu"], answer: 3, why: "Taruka na yau da kullum suna gano matsaloli da wuri." },
      { objective: "O3", q: "Hanya mai kyau ta buɗe ganawa ɗaya-da-ɗaya ita ce:", options: ["\"Ga abin da ka yi ba daidai ba.\"", "\"Me ke zuciyarka?\"", "\"Mu gajarta wannan.\"", "Duba wayarku"], answer: 1, why: "Tana mai da taron nasa." },
      { objective: "O3", q: "A ganawa ɗaya-da-ɗaya kun yi alƙawarin gyara na'urar duba kaya (scanner) da ta lalace. Me za ku yi?", options: ["Ku rubuta shi ku yi", "Ku manta da shi", "Ku nemi shi ya gyara ta", "Ku jira ya sake tambaya"], answer: 0, why: "Cika alƙawari yana gina amincewa." },
      { objective: "O4", q: "Me SBI yake nufi?", options: ["Magana, zargi, nacewa", "Ƙwarewa, kasafin kuɗi, ra'ayoyi", "Yanayi, hali, tasiri (situation, behavior, impact)", "Jadawali, hutu, sanarwa"], answer: 2, why: "Yanayi, hali da tasiri." },
      { objective: "O4", q: "A ina ya kamata a ba da ra'ayin gyara yawanci?", options: ["A gaban dukkan ƙungiya", "A shafukan sada zumunta", "A saƙon rukuni", "A sirri"], answer: 3, why: "Gyara a sirri yana kare mutuncin mutum." },
      { objective: "O4", q: "Bayan ba da ra'ayin SBI, mataki na gaba shi ne:", options: ["Tafiya", "Tambayar yadda yake gani da yarda kan mataki na gaba", "Maimaita shi da ƙarfi", "Faɗa wa ƙungiya"], answer: 1, why: "Tattaunawa ta ɓangarori biyu tana kawo canji." },
      { objective: "O4", q: "Wace kalma ya kamata ku guji a ra'ayi?", options: ["\"Yau\"", "\"Na gode\"", "\"Koyaushe\"", "\"Saboda\""], answer: 2, why: "\"Koyaushe\" da \"ba taɓa\" suna zuzuta abu kuma suna sa mutane su kare kansu." },
      { objective: "O5", q: "Aikin wani ma'aikaci ya ragu bayan shekaru na aiki mai kyau. Me ya kamata ku tambaya a tattaunawa ta sirri?", options: ["\"Me ke hana ka?\"", "\"Me yasa ka lalace haka?\"", "\"Kana son ka bar aiki?\"", "Babu komai; ku rubuta korafi a kansa kawai"], answer: 0, why: "Wataƙila akwai dalilin da ba ku sani ba." },
      { objective: "O5", q: "Shirin ingantawa ya kamata ya haɗa da:", options: ["Gargaɗi kawai", "Yadda aiki mai kyau yake, taimakon da za ku bayar, da ranar dubawa", "Babu ranaku", "Jerin kurakuransa"], answer: 1, why: "Manufofi a sarari, taimako da rana suna sa shi adalci." },
      { objective: "O5", q: "Kafin gargaɗi na hukuma ko kora daga aiki, ya kamata ku:", options: ["Saka shi a hirar ƙungiya", "Ɗauki mataki ku kaɗai nan take", "Ku nemi ƙungiya ta jefa ƙuri'a", "Bi manufofinku ku yi magana da HR ko manajanku"], answer: 3, why: "Manufofi da dokoki sun bambanta; ku fara neman shawara." },
      { objective: "O6", q: "Taron don raba labari ne kawai. Me ya fi kyau?", options: ["Taro na sa'o'i biyu", "Aika saƙo a maimakon haka", "Soke dukkan tarurruka har abada", "Karanta labarin da babbar murya"], answer: 1, why: "Ku ajiye tarurruka don tattaunawa da yanke shawara." },
      { objective: "O6", q: "Mutane biyu ba sa taɓa magana a tarurruka. Me zai taimaka?", options: ["Bin kowa ɗaya bayan ɗaya don kowa ya sami dama", "Ƙyale su", "Kiran su da tsauri", "Yin tarurruka masu tsawo"], answer: 0, why: "Bin kowa ɗaya bayan ɗaya yana gayyatar masu shiru su shiga." },
      { objective: "O6", q: "Yaushe ya kamata ku aika ayyukan taron?", options: ["Wata mai zuwa", "Ba taɓa ba", "Sai idan wani ya tambaya", "A ranar"], answer: 3, why: "Bin diddigi da sauri yana sa ayyuka su tafi daidai." },
      { objective: "O6", q: "Wanne ne yabo mafi kyau?", options: ["\"Ka yi kyau.\"", "Babu komai, tunda aikinsa ne", "\"Kiran da ka yi wa mai kawo kaya ya sa odarmu ta iso kwana ɗaya da wuri, don haka kaya ba su ƙare mana ba.\"", "Imel na rukuni ba tare da cikakken bayani ba"], answer: 2, why: "Godiya takamaimai da ke ambaton tasirin ita ce mafi ma'ana." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      5,
      6,
      9,
      11,
      13,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Abin da ake sa rai a sarari",
        objective: "O2",
        notYet: "Abin da ake sa rai ba shi da sarari, kamar \"ku kiyaye tsabta\".",
        meets: "Yana faɗin sakamakon, yadda ya kamata ya yi kyau, da kafin yaushe.",
        exceeds: "Yana kuma faɗin dalilin da yasa sakamakon yake da muhimmanci."
      },
      {
        name: "Aikin da aka ba wani",
        objective: "O2",
        notYet: "Aikin ba shi da ranar ƙarshe ko lokacin dubawa.",
        meets: "Yana faɗin sakamakon, ranar ƙarshe, abin da mutumin zai iya yanke shawara a kai da lokacin dubawa.",
        exceeds: "Ya daidaita ba da aikin da gogewar mutumin."
      },
      {
        name: "Ajandar ganawa ɗaya-da-ɗaya",
        objective: "O3",
        notYet: "Ajandar labarin halin aiki ce kawai.",
        meets: "Tana farawa da abin da ke zuciyarsa kuma ta ƙunshi ci gaba, abubuwan da ke hana aiki da girma.",
        exceeds: "Ta haɗa da hanyar bin diddigin alƙawuran da kuka yi."
      },
      {
        name: "Ra'ayin SBI",
        objective: "O4",
        notYet: "Ra'ayin game da mutumin ne, ko yana amfani da \"koyaushe\" ko \"ba taɓa\".",
        meets: "Yana ambaton yanayi, takamaiman hali da tasirinsa.",
        exceeds: "Yana ƙarewa da tambayar da ke gayyatar ra'ayinsa da mataki na gaba."
      },
      {
        name: "Taron ƙungiya da godiya",
        objective: "O6",
        notYet: "Babu ayyuka a ƙarshe, ko godiyar ta gama-gari ce.",
        meets: "Ajandar minti 20 da ke ƙarewa da wane ne zai yi me kafin yaushe, da godiya ɗaya takamaimai.",
        exceeds: "Tana ba masu shiru dama kuma tana shirin aika ayyuka a ranar."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da ke yin ganawa ɗaya-da-ɗaya a kai a kai cikin kwanaki 30 (binciken biyo baya)",
      "Mutanen ƙungiya da suka ce abin da ake sa rai ya fi sarari kuma ra'ayi ya fi takamaimai",
      "Masu koyo da suka ɗauki wani kwas na jagoranci na Koach Learn"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta don kallon darussan",
      "Takarda ko takardar kwamfuta don shirin \"kwanaki 30 na farko\" mai shafi ɗaya",
      "Ƙungiyar da kuke jagoranta ko wadda kuka sani sosai, don amfani da ita a matsayin misali",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "A rukuni, ku yi gwajin farko tare, sannan ku sa mutane bibbiyu su yi atisayen ra'ayin SBI da babbar murya da yanayi na ƙirƙira.",
      "Ku yi wasan kwaikwayo na ganawa ɗaya-da-ɗaya inda \"mutumin ƙungiya\" ke farawa da abin da ke zuciyarsa.",
      "Ku tunatar da masu koyo cewa gargaɗi na hukuma da kora daga aiki suna bin manufofin ƙungiyarsu da sashen kula da ma'aikata (HR).",
      "Ku nemi masu koyo kada su faɗi sunaye na gaske ko bayanan sirri game da mutanen ƙungiya a aikin rukuni.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

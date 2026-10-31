"use strict";

// Koach Learn course, Hausa (ha) translation of shared/data-annotation-online-work.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const MINDRIFT = { name: "Mindrift (ayyukan horar da AI; ya ce ayyukan Toloka sun koma nan, kuma shiga kyauta ne)", url: "https://mindrift.ai/welcome" };
const CROWDGEN = { name: "CrowdGen na Appen (ayyukan masu bayar da gudummawa; ya ce ba ya taɓa neman ku biya kuɗi don shiga)", url: "https://crowdgen.com/" };
const CLICKWORKER = { name: "Clickworker (ƙananan ayyuka kamar bayanan horar da AI, bincike-binciken ra'ayi da naɗar murya)", url: "https://www.clickworker.com/clickworker/" };
const SAMA = { name: "Ayyuka a Sama (ofisoshi a Nairobi, Kenya, da Gulu da Kampala, Uganda)", url: "https://www.sama.com/careers" };
const FTC_JOBS = { name: "Hukumar Kasuwanci ta Tarayyar Amurka (FTC): Zambar aiki", url: "https://consumer.ftc.gov/articles/job-scams" };
const ILO_PLATFORMS = { name: "ILO: Matsayin dandamalin aiki na intanet wajen canja duniyar aiki", url: "https://www.ilo.org/publications/flagship-reports/role-digital-labour-platforms-transforming-world-work" };
const NDPC = { name: "Hukumar Kare Bayanai ta Najeriya (Nigeria Data Protection Commission)", url: "https://ndpc.gov.ng/" };

module.exports = {
  id: "data-annotation-online-work-ha",
  lang: "ha",
  translationOf: "data-annotation-online-work",
  category: "Workforce Development",
  name: "Yi wa Bayanan AI Lakabi da Ƙananan Ayyukan Intanet",
  skills: "Gane aikin lakabin bayanai da ƙananan ayyuka, Yin lakabi ta bin ƙa'idar aiki, Cin gwajin cancanta da riƙe inganci, Tabbatar dandamali na gaske ne da ƙin ayyukan bogi, Kare bayanan sirri da bayanan aiki, Lissafa ainihin albashinku na awa ɗaya",
  outcome: "yi wa bayanan AI lakabi ta bin rubutacciyar ƙa'idar aiki, tabbatar cewa dandamalin aikin intanet na gaske ne kafin ku shiga, kare bayananku da bayanan da kuke gani, da lissafa ainihin abin da aikin ke biyan ku a kowace awa.",
  about: [
    "Kayan AI suna koyo daga misalan da mutane ke shiryawa: hotuna da aka zana akwati kewaye da motoci, jimloli da aka nuna masu daɗi ko marasa daɗi, naɗaɗɗun murya da aka rubuta, da amsoshin AI da aka jera daga mafi kyau zuwa mafi muni. Ana kiran wannan aikin lakabin bayanai (data annotation ko data labeling). Mutane da yawa suna yin sa ta intanet a matsayin ƙananan ayyuka masu biya (micro-jobs), daga Nairobi zuwa Legas, Accra, Dakar, Manila, Hyderabad, Bogotá, Mexico City, Casablanca, Alkahira da garuruwa a faɗin Amurka.",
    "Wannan kwas ɗin na matasa ne da manya masu waya ko kwamfuta da ke son gwada wannan aikin lafiya. Za ku koyi manyan nau'o'in ayyuka, ku yi atisayen lakabi da rubutacciyar ƙa'ida a takarda, ku koyi yadda gwajin cancanta da makin inganci ke aiki, ku tabbatar dandamali na gaske ne, ku ƙi \"ayyukan AI\" na bogi masu yawa da ke neman kuɗi, ku kare bayanan sirri, ku kuma lissafa ainihin albashinku na awa ɗaya.",
    "Ku faɗa wa kanku gaskiya game da kuɗin. Biyan ba ya daidaita: wasu makonni akwai ayyuka da yawa, wasu kuma kaɗan ne, kuma lokacin gwaje-gwaje da neman ayyuka sau da yawa ba a biyan sa. Dandamali na gaske ba ya taɓa neman ku biya kuɗi don farawa. Kwas ɗin ba ya alƙawarin samun kuɗi; yana taimaka muku ku yanke shawara da idanu a buɗe.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\" da za ku iya yi a takarda ko a waya. Akwai tambayoyi 2 masu sauri bayan kowane darasi, gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku yi tsarin farawa na ƙananan ayyukanku: (1) saitin atisaye na abubuwa 10 da kuka yi wa lakabi da ƙa'idarku ta shafi ɗaya, da abubuwan da ba su bayyana ba an yi musu alama; (2) dandamali biyu da kuka bincika, da abin da kuka gano a kowane bincike (shafin hukuma, shiga kyauta ne, ana karɓar ƙasarku, yadda ake aika kuɗi); (3) jerin alamun zamba guda biyar da za su sa ku tsaya; (4) dokokinku uku na kare bayanai; da (5) rajistar lokaci da kuɗi ta mako-mako tare da tsarin makonni 4 da ranaku, har da yadda za ku lissafa ainihin albashinku na awa ɗaya.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa da manya a Amurka da ƙasashen waje (Kenya, Najeriya, Ghana, Senegal, Côte d'Ivoire, Philippines, Indiya, Mexico, Colombia, Morocco, Masar): waɗanda suka gama makaranta, waɗanda suka kammala jami'a, iyaye da ke gida, masu neman ƙarin kuɗi, da masu neman aiki da ke ganin tallace-tallacen \"ku sami kuɗi da AI\" kullum. An fassara kwas ɗin zuwa harsuna goma.",
    startingPoint: "Suna iya amfani da wayar zamani, WhatsApp da kafofin sada zumunta; wasu suna da kwamfutar tafi-da-gidanka ko suna amfani da gidan intanet (cyber café) ko ɗakin karatu. Yawancinsu ba su taɓa yi wa bayanai lakabi ba, ko karanta ƙa'idar aiki, ko yin gwajin cancanta ba. Da yawa sun ga tayin \"aiki daga gida\" na ƙananan ayyuka da suka nemi a biya kuɗin ajiya.",
    gap: "Masu koyo suna buƙatar sanin yadda ainihin aikin bayanan AI yake, su yi lakabi a hankali bisa ƙa'ida, su gane ko dandamali na gaske ne, su kare bayanan sirri, su kuma lissafa ainihin albashi, don su sami kuɗi inda akwai aiki na gaske, kuma kada su yi asarar kuɗi da takardun shaida ga ayyukan bogi.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; an fassara zuwa harsuna goma",
      "Na'urori: sau da yawa waya kaɗai; data tana da tsada; wutar lantarki ba ta da tabbas",
      "Lokaci: darussa na minti 4 zuwa 6; atisaye a takarda",
      "Dandamali, ƙasashen da suke karɓa, hanyoyin biya da albashi suna canjawa sau da yawa: masu koyo suna duba shafukan kowane dandamali da kansa",
      "Kada ku taɓa biya don farawa; kada ku taɓa bayar da kalmar sirri, PIN, lambar tabbatarwa (code) ko takardun shaida a wajen tabbatarwar hukuma ta dandamali"
    ],
    prerequisites: "Ƙwarewar asali ta waya ko kwamfuta da adireshin imel. Karatu a hankali a harshen da ake yin ayyukan."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku jerin ayyukan intanet takwas", action: "gane waɗanne ne aikin lakabin bayanai ko ƙananan ayyuka, da faɗin ƙwarewar da kowanne ke buƙata", standard: "kuna samun aƙalla 6 cikin 8 daidai" },
    { id: "O2", condition: "Idan aka ba ku gajeriyar ƙa'idar lakabi da abubuwa goma na misali", action: "yi wa kowane abu lakabi ta bin ƙa'idar, da yi wa waɗanda ba su bayyana ba alama", standard: "kuna daidai da amsoshin gwaji a aƙalla 8 cikin 10" },
    { id: "O3", condition: "Kafin ku fara gwajin cancanta", action: "lissafa matakan da za ku bi don karanta ƙa'idar, yin atisaye da duba aikinku da kanku", standard: "ta yadda za ku iya bayyana yadda za ku riƙe makin ingancinku sama" },
    { id: "O4", condition: "Idan aka ba ku dandamali ko tayin aiki", action: "tabbatar cewa na gaske ne da faɗin duk wata alamar gargaɗi ta aikin bogi", standard: "kafin ku biya komai ko ku bayar da wata takarda" },
    { id: "O5", condition: "Yayin da kuke yin ayyuka", action: "kiyaye bayananku na sirri da bayanan aikin a ɓoye", standard: "ba tare da bayar da kalmar sirri, code ko abin da ke cikin aiki a wajen dandamalin ba" },
    { id: "O6", condition: "Bayan mako ɗaya na atisaye ko ayyuka na gaske", action: "rubuta lokacinku da kuɗinku da lissafa ainihin kuɗin da kuke samu a awa ɗaya", standard: "har da lokacin da ba a biya ba kamar gwaje-gwaje da neman ayyuka" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yin aikin da kyau",
      lessons: [
        {
          title: "Mene ne lakabin bayanai da ƙananan ayyuka",
          objectives: ["O1"],
          minutes: 5,
          goal: "Gane manyan nau'o'in ayyukan bayanan AI da ƙwarewar da kowanne ke buƙata.",
          text: [
            "Kayan AI suna koyo daga misalai. Mutane ne ke shirya waɗannan misalan ta hanyar ƙara lakabi: wannan hoton keke ne, wannan saƙon ƙorafi ne, wannan jimlar Hausa ce, wannan amsar AI ta fi waccan. Ƙara lakabi shi ake kira lakabin bayanai (data annotation ko data labeling).",
            "Nau'o'in ayyuka da aka saba: lakabin hotuna (zana akwati kewaye da kowace mota, ko zaɓar rukuni), lakabin rubutu (shin wannan ra'ayin mai daɗi ne, marar daɗi ne ko tsaka-tsaki?), aikin murya (rubuta abin da mai magana ya faɗa, ko naɗar muryarku kuna karanta jimloli), da auna amsoshin AI (karanta amsoshi biyu daga AI ku zaɓi mafi kyau, tare da dalili). Wasu sababbin ayyuka suna neman ƙwararru, kamar ma'aikatan jinya, akantoci ko mutanen da ke jin harsuna biyu sosai.",
            "Ƙananan ayyuka (micro-jobs) ƙananan ayyuka ne na intanet da ake biya ɗaya-ɗaya, sau da yawa suna ɗaukar daƙiƙoƙi zuwa mintuna. Wasu suna yin su a buɗaɗɗun dandamali daga gida; wasu kuma ana ɗaukar su a matsayin ma'aikata a ofis, misali a kamfanoni masu ƙungiyoyin bayanai a Nairobi ko Kampala. Ko ta yaya, manyan ƙwarewa su ne karatu a hankali, bin dokoki daidai, maida hankali a kai a kai, da gaskiya."
          ],
          words: [["Lakabin bayanai (data annotation / data labeling)", "ƙara lakabi ga hotuna, rubutu, murya ko bidiyo don kayan AI su koya daga su."], ["Ƙaramin aiki (micro-job / micro-task)", "ƙaramin aikin intanet da ake biya ɗaya-ɗaya."], ["Auna amsoshin AI (AI response rating)", "karanta amsoshi daga kayan AI da yanke wacce ta fi kyau, ta amfani da dokoki."], ["Rubuta murya (transcription)", "rubuta daidai abin da aka faɗa a naɗaɗɗiyar murya."]],
          slides: [
            { title: "AI yana koyo daga misalai masu lakabi", bullets: ["Mutane ne ke ƙara lakabin", "Ana kiran wannan lakabin bayanai (data annotation)"] },
            { title: "Nau'o'in ayyuka da aka saba", bullets: ["Hotuna: akwati ko rukuni", "Rubutu: mai daɗi, marar daɗi ko tsaka-tsaki", "Murya: rubuta abin da aka faɗa, ko naɗar muryarku", "Amsoshin AI: zaɓi mafi kyau, tare da dalili"] },
            { title: "Inda aikin yake", bullets: ["Buɗaɗɗun dandamali na intanet, aiki ɗaya-ɗaya", "Ayyukan ofis a kamfanonin bayanai, a matsayin ma'aikaci", "Ayyukan ƙwararru ga masu sana'a ko masu jin harsuna biyu"] },
            { title: "Ƙwarewar da suka fi muhimmanci", bullets: ["Karatu a hankali", "Bin dokoki daidai", "Maida hankali a kai a kai da gaskiya"] }
          ],
          sources: [SAMA, ILO_PLATFORMS],
          tryIt: "Ku rubuta nau'o'in ayyuka huɗu (hoto, rubutu, murya, auna AI) a takarda. Kusa da kowanne, ku rubuta ƙwarewa ɗaya da kuke da ita wadda ta dace da shi, misali \"Ina jin Turanci da Hausa\" kusa da murya, ko \"Ina lura da ƙananan abubuwa\" kusa da hotuna.",
          youCanNow: "faɗin manyan nau'o'in ayyukan bayanan AI da haɗa kowanne da ƙwarewar da kuka riga kuke da ita.",
          quickCheck: [
            { objective: "O1", q: "Wanne daga cikin waɗannan aikin lakabin bayanai ne?", options: ["Sayar da wayoyi ta intanet", "Kai abinci da babur", "Zana akwati kewaye da kowace mota a hoton titi", "Gyara allon kwamfutar tafi-da-gidanka"], answer: 2, why: "Zana akwati kewaye da abubuwa lakabin hotuna ne, ɗaya daga cikin manyan ayyukan lakabi." },
            { objective: "O1", q: "Wani aiki yana nuna muku amsoshin AI biyu yana tambayar wacce ta fi kyau da dalili. Wane irin aiki ne?", options: ["Auna amsoshin AI", "Rubuta murya", "Lakabin hotuna", "Shigar da bayanan takardun kuɗi"], answer: 0, why: "Yanke hukunci kan amsoshin AI tare da dalili shi ne auna amsoshin AI." }
          ]
        },
        {
          title: "Yin lakabi bisa ƙa'idar aiki",
          objectives: ["O2"],
          minutes: 6,
          goal: "Yi wa abubuwa goma na misali lakabi ta bin rubutacciyar ƙa'ida, ku kuma yi wa waɗanda ba su bayyana ba alama.",
          text: [
            "Kowane aiki yana da ƙa'ida (guideline): dokokin yadda ake yin lakabi. Tana faɗin ma'anar kowane lakabi, tana ba da misalai, tana kuma bayyana abubuwa masu wuya. Ra'ayinku bai kai ƙa'idar muhimmanci ba. Idan ƙa'idar ta ce \"mutum a jikin hoton talla ana ƙirga shi a matsayin mutum\", ku yi masa lakabi haka, ko da ya ga kamar baƙon abu.",
            "Ku karanta ƙa'idar gaba ɗaya kafin aikinku na farko, sannan ku bar ta a buɗe. Ku nemi misalai da abubuwan da ke kan iyaka (edge cases): abubuwan da za su iya dacewa da lakabi biyu. A nan ne yawancin kurakurai ke faruwa.",
            "Idan wani abu bai bayyana ba da gaske, kada ku yi kintace kawai. Ku yi amfani da zaɓin tsallakewa (skip) ko yin alama (flag) idan akwai, ko ku bi abin da ƙa'idar ta ce a yi da abubuwan da ba su bayyana ba. Yin a hankali kuma iri ɗaya ya fi gaggawa."
          ],
          steps: ["Ku karanta ƙa'idar gaba ɗaya sau ɗaya, a hankali.", "Ku rubuta kowane lakabi da ma'anarsa da kalmominku.", "Ku yi nazarin misalai da abubuwan kan iyaka.", "Ku yi wa kowane abu lakabi, kuna duba ƙa'idar idan ba ku tabbata ba.", "Ku yi alama ko ku tsallake abubuwan da ƙa'idar ba ta rufe ba, kamar yadda ta ce."],
          words: [["Ƙa'idar aiki (guideline)", "rubutattun dokokin aikin lakabi: ma'anar kowane lakabi da yadda ake magance abubuwa masu wuya."], ["Abin kan iyaka (edge case)", "abin da zai iya dacewa da lakabi fiye da ɗaya, don haka sai an duba dokar."], ["Yin alama (flag)", "nuna cewa wani abu bai bayyana ba ko ya lalace don mai dubawa ya duba shi."]],
          slides: [
            { title: "Ƙa'idar ita ce shugaba", bullets: ["Tana faɗin ma'anar kowane lakabi", "Tana ba da misalai da abubuwa masu wuya", "Ku bi ta, ko da ta saɓa da ra'ayinku"] },
            { title: "Yadda ake lakabi da kyau", bullets: ["Ku karanta ƙa'idar gaba ɗaya da farko", "Ku bar ta a buɗe yayin da kuke aiki", "Ku duba ta duk lokacin da ba ku tabbata ba"] },
            { title: "Abubuwan kan iyaka da marasa bayyana", bullets: ["Yawancin kurakurai suna faruwa a abubuwan kan iyaka", "Ku yi alama ko ku tsallake kamar yadda ƙa'idar ta ce", "Yin a hankali kuma iri ɗaya ya fi gaggawa"] }
          ],
          tryIt: "Ku yi atisaye a takarda. Ƙa'ida: ku yi wa kowane saƙo lakabin POSITIVE (yana farin ciki da hidimar), NEGATIVE (ba ya farin ciki) ko NEUTRAL (tambaya ko bayani kawai); idan yana da farin ciki da rashin farin ciki duka, ku yi masa lakabi bisa babbar buƙatarsa. Ku yi wa waɗannan goma lakabi: 1 \"Na gode, kayan sun iso da sauri!\" 2 \"Ina shagonku yake a Kumasi?\" 3 \"Burodin ya bushe kuma.\" 4 \"Farashi mai kyau, amma kwalin ya fashe. Don Allah ku canja shi.\" 5 \"Kuna buɗewa ranar Lahadi?\" 6 \"Mafi kyawun tela a Dakar!\" 7 \"Na jira awa biyu.\" 8 \"Oda 2231 ta iso.\" 9 \"Ina son shi, amma ina buƙatar a mayar mini da kuɗin na biyun.\" 10 \"asdf\". Amsoshi: 1 POS, 2 NEU, 3 NEG, 4 NEG, 5 NEU, 6 POS, 7 NEG, 8 NEU, 9 NEG, 10 alama (ba saƙo na gaske ba ne).",
          youCanNow: "karanta ƙa'idar lakabi, aiwatar da ita a kan kowane abu, da yi wa abubuwan da ba ta rufe ba alama.",
          quickCheck: [
            { objective: "O2", q: "Ƙa'idar ta ce mutum a hoton zane (cartoon) ana ƙirga shi a matsayin mutum. Ku kuma ba ku yarda ba. Me za ku yi?", options: ["Bin ra'ayinku", "Yi masa lakabin mutum, kamar yadda ƙa'idar ta ce", "Tsallake duk hotunan zane", "Tambayar aboki a WhatsApp ya yanke"], answer: 1, why: "A aikin lakabi, ƙa'ida ce ke yanke hukunci, ba ra'ayin mutum ba." },
            { objective: "O2", q: "Wani abu bai dace da kowane lakabi a ƙa'idar ba. Mene ne mataki mafi kyau?", options: ["Zaɓar lakabi kawai don ajiye lokaci", "Ba shi lakabin da aka fi amfani da shi", "Barin dandamalin", "Yi masa alama ko tsallake shi kamar yadda ƙa'idar ta ce"], answer: 3, why: "Yi wa abubuwan da ba su bayyana ba alama yana tsaftace bayanan kuma yana kare makin ingancinku." }
          ]
        },
        {
          title: "Gwajin cancanta da makin inganci",
          objectives: ["O3"],
          minutes: 5,
          goal: "Lissafa matakan da za ku bi don cin gwajin cancanta da riƙe makin ingancinku sama.",
          text: [
            "Yawancin ayyuka suna farawa da gwajin cancanta (qualification test): ɗan gajeren saitin ayyukan atisaye da aka san amsoshinsu. Yawanci sai kun sami sakamako mai kyau kafin ku sami aiki mai biya. A dandamali da yawa ba a biyan lokacin wannan gwaji, don haka ku shirya da kyau, ku yi shi lokacin da kuka huta.",
            "Bayan kun fara, dandamalin yana ci gaba da duba aikinku. Wasu abubuwa suna da ɓoyayyun amsoshi da aka sani, kuma masu dubawa suna duba samfura. Tare, waɗannan su ne makin ingancinku. Maki mai yawa zai iya kawo ƙarin ayyuka; maki mara kyau zai iya sa a cire ku daga aiki.",
            "Don riƙe inganci sama: ku karanta duk wani ra'ayi (feedback) da aka ba ku, ku sake karanta ƙa'idar idan ta canja, ku rage gudu a abubuwan kan iyaka, ku huta, kuma kada ku taɓa yin dabaru ko kwafar amsoshi. Wasu ayyuka ba sa yarda kayan AI su yi muku aikin; ku bi dokokin aikin."
          ],
          steps: ["Ku karanta ƙa'idar gaba ɗaya kafin gwajin.", "Ku yi duk ayyukan atisaye da aka bayar.", "Ku yi gwajin lokacin da kuka huta, da intanet mai ƙarfi.", "Bayan kowane rukunin ayyuka, ku karanta ra'ayin da aka ba ku ku rubuta kurakuranku.", "Ku sake karanta ƙa'idar duk lokacin da aka sabunta ta."],
          words: [["Gwajin cancanta (qualification test)", "ɗan gajeren gwajin ayyukan atisaye da sai kun ci shi kafin ku sami aiki mai biya a wani aiki."], ["Makin inganci (quality score)", "ma'aunin yawan lokutan da lakabinku ke daidai, ana amfani da shi don yanke ko za ku sami ƙarin ayyuka."], ["Tambayar zinariya (gold question)", "ɓoyayyen aiki da aka san amsarsa, don duba daidaitonku."]],
          slides: [
            { title: "Kafin aiki mai biya: gwaji", bullets: ["Ayyukan atisaye da aka san amsoshinsu", "Sau da yawa ba a biya, don haka ku shirya da farko", "Ku yi shi bayan kun huta, da intanet mai ƙarfi"] },
            { title: "Ana duba aikinku koyaushe", bullets: ["Ɓoyayyun amsoshi da aka sani", "Masu dubawa suna duba samfura", "Tare suke zama makin ingancinku"] },
            { title: "Ku riƙe makinku sama", bullets: ["Ku karanta ra'ayi ku rubuta kurakurai", "Ku sake karanta ƙa'idar idan ta canja", "Ku rage gudu a abubuwan kan iyaka; ku huta", "Ku bi dokokin aikin game da kayan AI"] }
          ],
          tryIt: "Ku duba lakabinku goma na atisaye daga darasin da ya gabata da amsoshin. Ku rubuta makinku cikin 10, abubuwan da kuka yi kuskure, da doka ɗaya da za ku ƙara dubawa a hankali a gaba. Sannan ku rubuta tsarinku mai matakai biyar don gwajin cancantarku na farko na gaske.",
          youCanNow: "shirya wa gwajin cancanta, duba aikinku da amsoshi, da bayyana yadda za ku riƙe makin ingancinku sama.",
          quickCheck: [
            { objective: "O3", q: "Mene ne gwajin cancanta a aikin lakabi?", options: ["Ɗan gajeren saitin ayyukan atisaye da sai kun ci shi kafin aiki mai biya", "Jarabawar makaranta da kuke biya", "Neman bashi", "Hira ta bidiyo da shugaban abokin ciniki"], answer: 0, why: "Ayyuka suna amfani da gwajin cancanta don su tabbatar za ku iya bin ƙa'idar kafin su ba ku ayyuka masu biya." },
            { objective: "O3", q: "Makin ingancinku ya faɗi bayan an sabunta ƙa'ida. Me ya kamata ku fara yi?", options: ["Yin aiki da sauri don ku rama", "Buɗe asusu na biyu", "Sake karanta sabuwar ƙa'idar da ra'ayin da aka ba ku", "Ƙyale shi; maki ba shi da muhimmanci"], answer: 2, why: "Faɗuwar maki bayan sabuntawa yawanci tana nufin wata doka ta canja; sake karanta ta da ra'ayin yana gyara dalilin." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yin aikin da kyau",
        questions: [
          { objective: "O1", q: "Rubuta daidai abin da mai magana ya faɗa a naɗaɗɗiyar murya ana kiransa:", options: ["Lakabin hotuna", "Auna amsoshin AI", "Ajiye lissafi", "Rubuta murya (transcription)"], answer: 3, why: "Rubuta murya yana nufin rubuta daidai abin da aka faɗa." },
          { objective: "O1", q: "Wace ƙwarewa ce ta fi muhimmanci a aikin lakabi?", options: ["Rubutu da sauri da kurakurai da yawa", "Karatu a hankali da bin dokoki daidai", "Mallakar kwamfuta mai tsada", "Sanin rubuta code"], answer: 1, why: "Lakabi ya dogara ne da karanta dokoki a hankali da aiwatar da su iri ɗaya kowane lokaci." },
          { objective: "O2", q: "Ƙa'ida: ku yi wa saƙo lakabin NEGATIVE idan mutumin ba ya farin ciki. \"Abincin ya yi sanyi kuma ya makara.\" Wane lakabi?", options: ["NEGATIVE", "POSITIVE", "NEUTRAL", "Yi masa alama"], answer: 0, why: "Mutumin ba ya farin ciki da abincin, don haka ƙa'idar ta ce NEGATIVE." },
          { objective: "O2", q: "A ina ne yawancin kurakuran lakabi ke faruwa?", options: ["A abu na farko kawai", "A abubuwa masu misalai bayyanannu", "A abubuwan kan iyaka da za su iya dacewa da lakabi biyu", "A abubuwan da kuka yi wa alama"], answer: 2, why: "Abubuwan kan iyaka za su iya dacewa da lakabi fiye da ɗaya, don haka suna buƙatar duba dokoki a hankali." },
          { objective: "O3", q: "Wace ɗabi'a ce ke taimakawa wajen riƙe makin ingancinku sama?", options: ["Kwafar amsoshi daga rukunin hira", "Karanta ra'ayi bayan kowane rukunin ayyuka da rubuta kurakurai", "Aiki na awa goma ba hutu", "Yin kintace da sauri a abubuwa masu wuya"], answer: 1, why: "Ra'ayin yana nuna daidai dokokin da kuke rasawa, don ku gyara su." }
        ]
      }
    },
    {
      name: "Babi na 2: Aiki lafiya da samun kuɗi da gaskiya",
      lessons: [
        {
          title: "Tabbatar dandamali na gaske ne da ƙin ayyukan bogi",
          objectives: ["O4"],
          minutes: 6,
          goal: "Tabbatar ko dandamali ko tayin aiki na gaske ne, da faɗin alamun gargaɗi na na bogi.",
          text: [
            "Akwai dandamali na gaske. Misalan da suka ce a shafukansu cewa shiga kyauta ne sun haɗa da CrowdGen na Appen, Mindrift (inda ayyukan Toloka suka koma) da Clickworker. Dandamali suna canjawa, suna rufewa, kuma suna karɓar ƙasashe daban-daban, don haka koyaushe ku duba shafin dandamalin na kansa game da ƙasarku, aikin da ake bayarwa da yadda ake aika kuɗi.",
            "\"Ayyukan AI\" na bogi suna ko'ina, a WhatsApp, Telegram, TikTok da Facebook. Babbar alama: suna neman ku biya. Aiki na gaske ba ya taɓa neman ku biya kuɗin shiga, buɗe ayyuka, horo, kayan farawa ko cire kuɗin da kuka samu. Hukumar Kasuwanci ta Tarayyar Amurka (FTC) ta ce masu ɗaukar aiki masu gaskiya ba sa karɓar kuɗi daga gare ku don ku sami aiki.",
            "Sauran alamun gargaɗi: albashin da ya yi yawa ga aiki mai sauƙi; mai ɗaukar ma'aikata da ke magana ta WhatsApp ko Telegram kaɗai; ayyuka kamar son bidiyo (like) ko auna kayayyaki inda sai kun saka kuɗi (sau da yawa crypto) don ci gaba; biyan ku sannan neman ku mayar da wani sashi; neman katin shaidarku, PIN na banki ko code a cikin hira; da matsa muku ku yanke shawara yau."
          ],
          steps: ["Ku nemo shafin hukuma na dandamalin da kanku; kada ku yi amfani da hanyar (link) da ke cikin saƙon.", "Ku tabbatar shiga kyauta ne, ku karanta shafukan albashi da biyansa.", "Ku tabbatar yana karɓar ma'aikata daga ƙasarku.", "Ku bincika sunan dandamalin da kalmar \"scam\" ku karanta abin da wasu suka faɗa.", "Ku ƙi duk wani tayi da ke neman ku biya, ku saka kuɗi ko ku mayar da kuɗi."],
          words: [["Zambar ayyuka (task scam)", "aikin bogi inda kuke yin ayyuka masu sauƙi, ku ga ribar ƙarya, sannan a ce ku saka kuɗi don ci gaba ko cire kuɗi."], ["Mai ɗaukar ma'aikata (recruiter)", "mutumin da ke nemo wa kamfani ma'aikata. Na gaske ba sa karɓar kuɗi daga gare ku."], ["Shafin hukuma (official website)", "shafin dandamalin na kansa, wanda kuka nemo da kanku, ba ta hanyar da wani ya aiko muku ba."]],
          slides: [
            { title: "Dandamali na gaske: ku duba su da kanku", bullets: ["Ku nemo shafin hukuma da kanku", "Shiga ya kamata ya zama kyauta", "Ku duba ƙasarku, aikin da yadda ake aika kuɗi"] },
            { title: "Babbar alamar gargaɗi", bullets: ["Suna neman ku biya", "Don shiga, buɗe ayyuka, horo ko cire kuɗi", "Ayyuka na gaske ba sa karɓar kuɗi don ku yi aiki"] },
            { title: "Ƙarin alamun gargaɗi", bullets: ["Albashi mai yawa ga aiki mai sauƙi", "Masu ɗaukar ma'aikata ta WhatsApp ko Telegram kaɗai", "Saka kuɗi don ci gaba, ko mayar da kuɗi", "Neman katin shaida, PIN ko code a cikin hira"] }
          ],
          sources: [CROWDGEN, MINDRIFT, CLICKWORKER, FTC_JOBS],
          tryIt: "Ku zaɓi dandamali biyu (daga wannan darasi, ko wanda aboki ke amfani da shi). Ga kowanne, ku rubuta: shafin hukuma da kuka nemo da kanku, ko shiga kyauta ne, ko yana karɓar ƙasarku, yadda ake aika kuɗi, da duk abin da kuka gano lokacin da kuka bincika sunansa da \"scam\". Sannan ku rubuta jerin alamun zamba guda biyar da za su sa ku tsaya.",
          youCanNow: "duba dandamali a shafinsa na hukuma da ƙin aikin bogi ta faɗin alamun gargaɗinsa.",
          quickCheck: [
            { objective: "O4", q: "Wani saƙon WhatsApp yana tayin \"aikin auna AI\" amma yana neman kuɗin buɗewa $20. Mene ne wannan?", options: ["Kuɗin farawa na yau da kullum", "Kuɗin horo mai adalci", "Alamar gargaɗin zamba: ayyuka na gaske ba sa karɓar kuɗi don farawa", "Biyan haraji"], answer: 2, why: "Neman ku biya don farawa ita ce alama mafi bayyana ta aikin bogi." },
            { objective: "O4", q: "Yaya ya kamata ku buɗe dandamalin da kuka ji labarinsa?", options: ["Danna hanyar da ke cikin saƙon mai ɗaukar ma'aikata", "Nemo shafinsa na hukuma da kanku ku karanta shafukansa", "Neman mai ɗaukar ma'aikata ya turo hotunan allo", "Sauke fayil ɗin da mai ɗaukar ma'aikata ya turo"], answer: 1, why: "Nemo shafin da kanku yana kare ku daga shafukan bogi masu kama da na gaske da fayiloli masu cutarwa." }
          ]
        },
        {
          title: "Kare bayananku da bayanan aiki",
          objectives: ["O5"],
          minutes: 5,
          goal: "Rubuta dokoki uku da ke kiyaye bayananku da bayanan aiki a ɓoye.",
          text: [
            "Ku kare kanku. Ku yi amfani da kalmar sirri mai ƙarfi wadda ba ku amfani da ita a wani wuri, ku kunna shiga mai matakai biyu. Kada ku taɓa bayar da code na lokaci ɗaya, PIN ko kalmar sirri ga kowa, ko da wanda ya ce daga dandamalin yake. Dandamali na gaske za su iya neman katin shaida don tabbatar da ku, amma a cikin shafinsu ko manhajarsu ta hukuma kaɗai, ba a cikin hira ba.",
            "Ku kare bayanan da kuke gani. Ayyuka za su iya nuna hotunan mutane, muryoyinsu, saƙonninsu ko bayanan lafiya da na kuɗi. Ayyuka da yawa suna sa ku yarda ku riƙe ayyukan a asirce. Kada ku taɓa ɗaukar hoton allo na ayyuka, saka su a rukunoni, ko liƙa su a wasu kayan AI sai dai idan aikin ya yarda. Ƙasashe suna da dokokin kare bayanai da hukumomi, misali Hukumar Kare Bayanai ta Najeriya (NDPC).",
            "Ku kare asusunku. Kada ku raba ko ku sayar da asusunku, kuma kada ku bar wani ya yi aiki a cikinsa. Dandamali za su iya rufe asusu saboda haka, kuma kuna iya rasa kuɗin da ba a biya ku ba tukuna. Ku yi amfani da ainihin shaidarku kaɗai."
          ],
          steps: ["Ku yi amfani da kalmar sirri mai ƙarfi ta musamman da shiga mai matakai biyu.", "Ku bayar da katin shaida a cikin shafin ko manhajar hukuma ta dandamali kaɗai.", "Kada ku taɓa bayar da code, PIN ko kalmar sirri.", "Ku bar abin da ke cikin aiki a cikin dandamalin: babu hoton allo ko rabawa.", "Kada ku taɓa raba, ba da haya ko sayar da asusunku."],
          words: [["Shiga mai matakai biyu (two-step sign-in)", "ƙarin dubawa na biyu, kamar code da aka turo wayarku, lokacin da kuke shiga."], ["Asirce (confidential)", "na sirri: kada ku raba shi da kowa a wajen aikin."], ["Code na lokaci ɗaya (one-time code)", "gajeriyar lamba da aka turo muku don tabbatar cewa ku ne da gaske. Kada ku taɓa bayar da ita."]],
          slides: [
            { title: "Ku kare kanku", bullets: ["Kalmar sirri mai ƙarfi ta musamman da shiga mai matakai biyu", "Kada ku taɓa bayar da code, PIN ko kalmar sirri", "Katin shaida a cikin shafi ko manhajar hukuma kaɗai"] },
            { title: "Ku kare bayanan aiki", bullets: ["Ayyuka za su iya nuna bayanan mutane na gaske", "Babu hoton allo, babu rabawa a rukuni", "Babu liƙawa a wasu kayan AI sai an yarda"] },
            { title: "Ku kare asusunku", bullets: ["Kada ku raba, ba da haya ko sayar da shi", "Ku yi amfani da ainihin shaidarku kaɗai", "Karya wannan doka zai iya sa ku rasa kuɗin da ba a biya ba"] }
          ],
          sources: [NDPC],
          tryIt: "Ku rubuta dokokinku uku na kare bayanai da kalmominku: ɗaya don asusunku, ɗaya don katin shaidarku da code, ɗaya kuma don bayanan aiki. Sannan ku kunna shiga mai matakai biyu a asusun imel ɗinku idan ba a kunna ba tukuna.",
          youCanNow: "kiyaye bayananku lafiya da riƙe bayanan aiki a asirce.",
          quickCheck: [
            { objective: "O5", q: "Wani ya ce shi mai taimakon dandamali ne (support), yana neman code ɗin da aka turo wayarku yanzu. Me za ku yi?", options: ["Kada ku taɓa bayar da shi, ku tuntuɓi masu taimako ta shafin hukuma", "Aika shi, saboda masu taimako suna buƙatarsa", "Aika rabin code ɗin", "Saka shi a rukuni don tambaya"], answer: 0, why: "Code na lokaci ɗaya na ku ne kaɗai; bayar da shi yana bar wani ya ƙwace asusunku." },
            { objective: "O5", q: "Wani aiki yana nuna hoton wasiƙar lafiya ta wani baƙo. Mene ne daidai?", options: ["Ɗaukar hoton allo don atisaye", "Raba shi a rukunin karatunku", "Liƙa shi a kayan AI na kyauta don ya karanta", "Yi masa lakabi a cikin dandamalin kuma kada ku raba shi da kowa"], answer: 3, why: "Bayanan aiki na asirce ne kuma suna zama a cikin dandamalin." }
          ]
        },
        {
          title: "Lissafa ainihin albashinku da yin tsari",
          objectives: ["O6"],
          minutes: 6,
          goal: "Rubuta lokacinku da kuɗinku da lissafa ainihin kuɗin da kuke samu a awa ɗaya.",
          text: [
            "Biyan ƙananan ayyuka ba ya daidaita. Ya bambanta bisa aiki, ƙasa da dandamali; wasu makonni akwai ayyuka da yawa, wasu kuma babu. Lokacin gwaje-gwaje, horo da neman ayyuka sau da yawa ba a biyan sa. Ƙungiyar Ƙwadago ta Duniya (ILO) ta yi nazarin aikin dandamali kuma tana kira da ya zama aiki nagari, mai albashi da yanayi masu adalci.",
            "Don haka ku auna shi. Ku riƙe rajista (log) ta kowane zama: rana, mintunan da kuka yi aiki (har da gwaje-gwaje da jira), ayyukan da kuka yi, da kuɗin da kuka samu. Ainihin albashi na awa ɗaya = jimillar kuɗin da aka samu ÷ jimillar awoyi, ana ƙirga duk lokacin. Misali: kun sami dala 6 a mako kuma kun yi awa 4 gaba ɗaya, don haka ainihin albashinku na awa ɗaya dala 1.50 ne.",
            "Sannan ku yanke shawara. Ku kwatanta shi da sauran zaɓuɓɓuka kusa da ku. Mutane da yawa suna ɗaukar ƙananan ayyuka a matsayin ƙarin kuɗi ko matakin farko zuwa ayyukan da suka fi biya, kamar mai duba inganci, ayyukan ƙwararru, ko cikakken aiki a kamfanin bayanai. Ku riƙe bayanan abin da ake biyan ku, ku kuma tambayi hukumar haraji ta ƙasarku ko kuma yadda za ku bayyana shi."
          ],
          steps: ["Ku rubuta kowane zama: rana, jimillar mintuna (har da gwaje-gwaje da jira), ayyuka, kuɗi.", "Ku tara kuɗin mako da awoyin mako.", "Ku raba kuɗi da awoyi don samun ainihin albashinku na awa ɗaya.", "Ku kwatanta shi da sauran zaɓuɓɓukanku.", "Ku tsara wata mai zuwa: awoyi, dandamali, da ƙwarewa ɗaya da za ku haɓaka."],
          words: [["Ainihin albashi na awa ɗaya", "duk kuɗin da kuka samu an raba da duk awoyin da kuka kashe, har da lokacin da ba a biya ba."], ["Lokacin da ba a biya ba", "lokacin gwaje-gwaje, horo da neman ayyuka da ba ya kawo komai."], ["Rajista (log)", "rubutaccen bayani mai sauƙi da kuke cikawa duk lokacin da kuka yi aiki."]],
          slides: [
            { title: "Biyan ba ya daidaita", bullets: ["Ya bambanta bisa aiki, ƙasa da dandamali", "Makonni masu yawan aiki da makonni marasa aiki", "Gwaje-gwaje da neman ayyuka sau da yawa ba a biya"] },
            { title: "Ku auna shi da rajista", bullets: ["Rana, jimillar mintuna, ayyuka, kuɗi", "Ku ƙirga lokacin gwaje-gwaje da jira ma"] },
            { title: "Ainihin albashinku na awa ɗaya", bullets: ["Jimillar kuɗi ÷ jimillar awoyi", "Misali: dala 6 ÷ awa 4 = dala 1.50 a awa ɗaya"] },
            { title: "Ku yanke shawara ku tsara", bullets: ["Ku kwatanta da sauran zaɓuɓɓuka kusa da ku", "Ku tsara awoyi, dandamali da ƙwarewa ɗaya da za ku haɓaka", "Ku riƙe bayanai; ku tambayi hukumar haraji"] }
          ],
          sources: [ILO_PLATFORMS],
          tryIt: "Ku zana rajista mai ginshiƙai biyar: rana, mintuna (duka), ayyuka, kuɗi, bayanai. Ku cika layi ɗaya daga atisayen yau (kuɗi 0). Sannan ku rubuta tsarin makonni 4 da ranaku: waɗanne dandamali biyu za ku duba ko ku shiga, awa nawa a mako, da ranar kowane mako da za ku lissafa ainihin albashinku na awa ɗaya.",
          youCanNow: "riƙe rajistar lokaci da kuɗi, lissafa ainihin albashinku na awa ɗaya da tsara makonninku huɗu masu zuwa.",
          quickCheck: [
            { objective: "O6", q: "Kun sami dala 10 kuma kun yi awa 5 gaba ɗaya, har da awa 1 na gwajin da ba a biya ba. Nawa ne ainihin albashinku na awa ɗaya?", options: ["Dala 10 a awa ɗaya", "Dala 2.50 a awa ɗaya", "Dala 2 a awa ɗaya", "Dala 5 a awa ɗaya"], answer: 2, why: "Ainihin albashi na awa ɗaya yana ƙirga duk lokacin: dala 10 ÷ awa 5 = dala 2 a awa ɗaya." },
            { objective: "O6", q: "Me ya kamata rajistar aikinku ta ƙunsa?", options: ["Kuɗin da kuka samu kawai", "Ranakun da aka biya ku kawai", "Kalmar sirrinku, don ku tuna ta", "Rana, duk mintuna har da gwaje-gwaje da jira, ayyuka da kuɗi"], answer: 3, why: "Ƙirga kowane minti da kowane biya yana nuna abin da aikin ke biya da gaske." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Aiki lafiya da samun kuɗi da gaskiya",
        questions: [
          { objective: "O4", q: "Wani \"aikin ayyuka\" a Telegram yana nuna ribarku tana ƙaruwa amma ya ce sai kun saka crypto kafin ku cire kuɗi. Mene ne wannan?", options: ["Tsarin kyauta na yau da kullum", "Zambar ayyuka", "Kuɗin banki", "Harajin gwamnati"], answer: 1, why: "Neman ku saka kuɗi don ci gaba ko cire kuɗi shi ne salon zambar ayyuka." },
          { objective: "O4", q: "Wanne ne bincike na farko mafi kyau na dandamali?", options: ["Nemo shafinsa na hukuma da kanku ku tabbatar shiga kyauta ne", "Amincewa da hoton bayanan mai ɗaukar ma'aikata", "Ƙirga likes a tallansa", "Biyan ɗan kuɗi don gwada shi"], answer: 0, why: "Shafin hukuma, wanda ku kuka nemo, yana nuna ko kyauta ne, na gaske ne kuma yana karɓar ƙasarku." },
          { objective: "O5", q: "Dandamali na gaske yana neman ku tabbatar da katin shaidarku. A ina ya kamata ku ɗora shi?", options: ["A hirar WhatsApp da mai ɗaukar ma'aikata", "Ta imel zuwa kowane adireshi da suka bayar", "A cikin shafi ko manhajar hukuma ta dandamalin kaɗai", "A rukunin jama'a"], answer: 2, why: "Katin shaida yana zuwa a matakin tabbatarwa na hukuma kaɗai, ba a cikin hira ba." },
          { objective: "O5", q: "Aboki yana son ya biya ku don amfani da asusunku na dandamali. Me za ku yi?", options: ["Ba shi haya na wata ɗaya", "Ba shi kalmar sirri amma ku riƙe ribar", "Bar shi ya yi amfani da shi da dare kawai", "Ƙi: raba ko sayar da asusu yana karya dokoki kuma yana jefa kuɗinku cikin haɗari"], answer: 3, why: "Dandamali suna rufe asusun da aka raba, kuma kuna iya rasa kuɗin da ba a biya ba." },
          { objective: "O6", q: "Me yasa za ku ƙirga lokacin gwajin da ba a biya ba a rajistarku?", options: ["Don ganin ainihin albashinku na awa ɗaya", "Saboda dandamalin zai biya shi daga baya", "Ba a buƙata", "Don raba shi a intanet"], answer: 0, why: "Lokacin da ba a biya ba yana rage abin da kuke samu da gaske a awa ɗaya, don haka dole a ƙirga shi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Yi wa Bayanan AI Lakabi da Ƙananan Ayyukan Intanet",
    questions: [
      { objective: "O1", q: "Mene ne lakabin bayanai?", options: ["Gyaran kwamfutoci", "Ƙara lakabi ga bayanai don kayan AI su koya daga su", "Rubuta labarai", "Sayar da bayanai ga bankuna"], answer: 1, why: "Lakabi yana nufin ƙara lakabi ga hotuna, rubutu, murya ko bidiyo don horar da AI." },
      { objective: "O1", q: "Wanne ne ƙaramin aiki (micro-job)?", options: ["Kwangilar shekara biyu a matsayin manaja", "Mallakar shago", "Zaɓar rukunin hoton kaya, ana biya kowane aiki", "Tuƙa bas"], answer: 2, why: "Ƙananan ayyuka ƙananan ayyukan intanet ne da ake biya ɗaya-ɗaya." },
      { objective: "O1", q: "Kuna jin Yarbanci da Turanci sosai. Wane aiki zai iya dace da ku?", options: ["Rubuta ko duba naɗaɗɗun murya na Yarbanci", "Gyaran wayoyi", "Kai kaya da mota", "Gina gidaje"], answer: 0, why: "Ƙwarewar harshe ta dace da ayyukan murya da rubutu a wannan harshe." },
      { objective: "O2", q: "Me ƙa'idar aiki take yi?", options: ["Tana tsara albashinku", "Tana jera makin abokanku", "Tana ba ku kalmar sirri", "Tana faɗin ma'anar kowane lakabi da yadda ake magance abubuwa masu wuya"], answer: 3, why: "Ƙa'idar ita ce saitin dokokin yadda ake yin lakabi." },
      { objective: "O2", q: "Ƙa'ida: ku yi wa saƙo lakabin NEUTRAL idan tambaya ko bayani ne kawai. \"Ƙarfe nawa kuke rufewa?\" Wane lakabi?", options: ["POSITIVE", "NEGATIVE", "NEUTRAL", "Yi masa alama"], answer: 2, why: "Tambaya ce kawai, don haka ƙa'idar ta ce NEUTRAL." },
      { objective: "O2", q: "\"Takalma masu kyau, amma ɗaya ya yage. Ina son a mayar mini da kuɗina.\" Ƙa'idar ta ce a yi wa saƙonni masu gauraye lakabi bisa babbar buƙata. Wane lakabi?", options: ["NEGATIVE", "POSITIVE", "NEUTRAL", "Tsallake ba tare da karantawa ba"], answer: 0, why: "Babbar buƙatar ita ce mayar da kuɗi saboda takalmin da ya yage, don haka NEGATIVE ne." },
      { objective: "O2", q: "Wata naɗaɗɗiyar murya shiru ce kawai. Me za ku yi?", options: ["Rubuta wani abu don ku gama da sauri", "Yi mata alama ko tsallake ta kamar yadda ƙa'idar ta ce", "Kwafar amsar wani ma'aikaci", "Barin aikin"], answer: 1, why: "Ana yi wa abubuwan da suka lalace ko babu komai a ciki alama, ba a yin kintace." },
      { objective: "O3", q: "Mene ne tambayar zinariya (gold question)?", options: ["Ƙarin kuɗin kyauta", "Tambaya ga masu sayar da zinariya", "Ɓoyayyen aiki da aka san amsarsa da ke duba daidaitonku", "Gwaji mai biya da kuke saya"], answer: 2, why: "Dandamali suna ɓoye ayyukan da aka san amsoshinsu a cikin aikinku don auna inganci." },
      { objective: "O3", q: "Yaushe ne lokaci mafi kyau na yin gwajin cancanta?", options: ["Nan take, ba tare da karanta komai ba", "Bayan karanta ƙa'idar da yin atisaye, lokacin da kuka huta da intanet mai ƙarfi", "Cikin dare da data mara ƙarfi", "Yayin da kuke yin wani aiki"], answer: 1, why: "Shiri da yanayi mai kyau suna ba ku dama mafi kyau, kuma lokacin gwaji sau da yawa ba a biya." },
      { objective: "O3", q: "Me zai iya faruwa idan makin ingancinku ya ci gaba da zama ƙasa?", options: ["Za ku sami ƙarin ayyuka", "Albashinku zai ninka", "Babu abin da zai taɓa faruwa", "Za a iya cire ku daga aikin"], answer: 3, why: "Dandamali suna amfani da makin inganci don yanke wanda zai ci gaba da samun ayyuka." },
      { objective: "O3", q: "Dokokin aikin sun ce kada a yi amfani da kayan AI don yin ayyukan. Me za ku yi?", options: ["Bin dokar ku yi ayyukan da kanku", "Yin amfani da kayan AI a ɓoye", "Neman aboki ya yi amfani da AI a madadinku", "Daina karanta dokokin"], answer: 0, why: "Karya dokokin aiki zai iya sa ku rasa aikin da asusunku." },
      { objective: "O4", q: "Wane tayi ne ya fi yiwuwa ya zama na gaske?", options: ["\"Ku biya naira 5,000 don buɗe ayyuka\"", "\"Ku saka crypto don cire ribarku\"", "Dandamalin da kuka nemo da kanku wanda shafinsa ya ce shiga kyauta ne", "\"Ku sami dala 200 a rana kuna son bidiyo (like)\""], answer: 2, why: "Shiga kyauta da samun sa a shafinsa na hukuma alamun dandamali na gaske ne; sauran salon zamba ne." },
      { objective: "O4", q: "Wani \"mai ɗaukar ma'aikata\" ya biya ku dala 30 sannan ya ce ku mayar masa da 25. Mene ne wannan?", options: ["Zamba: masu ɗaukar aiki na gaske ba sa neman ku mayar da kuɗi", "Mayar da kuɗi na yau da kullum", "Haraji", "Kyautar horo"], answer: 0, why: "FTC ta yi gargaɗi cewa biyan ku sannan neman ku mayar da kuɗi zamba ce." },
      { objective: "O4", q: "Wanne BA alamar gargaɗi ta aikin bogi ba ne?", options: ["Suna neman kuɗi don farawa", "Suna magana a Telegram kaɗai kuma suna matsa muku ku yanke shawara yau", "Suna neman PIN na bankinku", "Shafin dandamalin na kansa yana bayyana ayyukansa kuma ya ce shiga kyauta ne"], answer: 3, why: "Shafin hukuma bayyananne mai shiga kyauta alama ce mai kyau; sauran alamun gargaɗi ne." },
      { objective: "O5", q: "Wace ɗabi'a ce mai ƙarfi ta kare asusu?", options: ["Amfani da kalmar sirri ɗaya a ko'ina", "Kalmar sirri ta musamman da shiga mai matakai biyu", "Rubuta kalmar sirrinku a bayananku (profile)", "Raba shigarku da iyali"], answer: 1, why: "Kalmar sirri ta musamman da shiga mai matakai biyu suna kare asusunku da kuɗinku." },
      { objective: "O5", q: "Za ku iya saka hotunan ayyuka masu ban sha'awa a rukunin WhatsApp ɗinku?", options: ["Eh, idan kun ɗan ɓata su (blur)", "Eh, bayan an gama aikin", "A'a: bayanan aiki suna zama a cikin dandamalin", "Eh, idan rukunin ƙarami ne"], answer: 2, why: "Bayanan aiki na asirce ne; raba su yana karya dokoki kuma zai iya cutar da mutane na gaske." },
      { objective: "O5", q: "Wa ya kamata ya taɓa samun code ɗinku na shiga na lokaci ɗaya?", options: ["Babu kowa", "Masu taimakon dandamali a cikin hira", "Mai ɗaukar ma'aikata", "Aboki da ke taimaka muku"], answer: 0, why: "Code na lokaci ɗaya na ku ne kaɗai; duk wanda ya nema yana ƙoƙarin ƙwace asusunku." },
      { objective: "O6", q: "Kun sami dala 12 a mako kuma kun yi awa 8 gaba ɗaya. Nawa ne ainihin albashinku na awa ɗaya?", options: ["Dala 12", "Dala 8", "Dala 4", "Dala 1.50"], answer: 3, why: "Dala 12 ÷ awa 8 = dala 1.50 a awa ɗaya." },
      { objective: "O6", q: "Wace magana ce gaskiya game da biyan ƙananan ayyuka?", options: ["Iri ɗaya ne kowane mako", "Ba ya daidaita kuma ya bambanta bisa aiki, ƙasa da dandamali", "Koyaushe ya fi aikin gida yawa", "Gwamnati ce ke tsara shi"], answer: 1, why: "Yawan ayyuka da farashin biya suna canjawa, don haka biyan ba ya daidaita." },
      { objective: "O6", q: "Kuna riƙe bayanan kuɗin da kuke samu ta intanet. Wa za ku tambaya game da bayyana su don haraji?", options: ["Mai ɗaukar ma'aikata a Telegram", "Babu kowa, ba a taɓa karɓar haraji kan biyan intanet ba", "Hukumar haraji ta ƙasarku", "Sauran ma'aikata a rukuninku"], answer: 2, why: "Dokokin haraji sun bambanta bisa ƙasa, don haka hukumar haraji ta ƙasa ita ce majiya madaidaiciya." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 4, 7, 9, 11, 12, 15, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Lakabin atisaye", objective: "O2", notYet: "Ƙasa da 8 cikin 10 sun yi daidai da amsoshi, ko an yi kintace a abubuwan da ba su bayyana ba.", meets: "Aƙalla 8 cikin 10 sun yi daidai da amsoshi, kuma an yi wa abin da bai bayyana ba alama.", exceeds: "10 cikin 10, tare da ƙa'ida ta shafi ɗaya da kalmominku da ke rufe abubuwan kan iyaka." },
      { name: "Tsarin gwaji da inganci", objective: "O3", notYet: "Babu tsari, ko tsarin \"yi aiki da sauri\" ne kawai.", meets: "Matakai biyar: karanta ƙa'idar, yi atisaye, yi gwaji bayan hutu, karanta ra'ayi, sake karanta sabuntawa.", exceeds: "Yana kuma jera kurakuranku daga atisaye da dokar da za ku duba ga kowanne." },
      { name: "Dandamalin da aka bincika", objective: "O4", notYet: "An zaɓi dandamali daga hanyar da ke cikin saƙo, ko an yarda a biya kuɗi.", meets: "An bincika dandamali biyu a shafukan hukuma: shiga kyauta, ƙasarku, yadda ake aika kuɗi.", exceeds: "Yana kuma da binciken zamba ga kowanne da jerin alamun zamba guda biyar da kalmominku." },
      { name: "Dokokin kare bayanai", objective: "O5", notYet: "Babu dokoki, ko tsarin yana bayar da code, katin shaida ko bayanan aiki a cikin hira.", meets: "Dokoki uku bayyanannu: asusu, katin shaida da code, da bayanan aiki.", exceeds: "An kunna shiga mai matakai biyu kuma dokokin sun faɗi abin da za a yi idan wani ya nemi code." },
      { name: "Rajistar kuɗi da tsari", objective: "O6", notYet: "Babu rajista, ko rajistar tana ƙirga lokacin da aka biya kawai.", meets: "Rajista da ke ƙirga duk mintuna, dabarar ainihin albashi na awa ɗaya, da tsarin makonni 4 da ranaku.", exceeds: "Yana kuma kwatanta sakamakon da wani zaɓi kuma ya ambaci ƙwarewa ɗaya da za a haɓaka don aiki mai biya fiye." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ci gwajin cancanta a dandamali na gaske kuma kyauta cikin kwanaki 60 (binciken biyo baya)",
      "Masu koyo da suka ce sun biya kuɗi ko sun saka kuɗi ga \"aikin intanet\" bayan kwas ɗin (manufa: babu ko ɗaya)",
      "Masu koyo da za su iya faɗin ainihin albashinsu na awa ɗaya daga rajistarsu a binciken biyo baya na kwana 30",
      "Masu koyo da suka koma aiki mai biya fiye (mai duba inganci, aikin ƙwararru, ko aiki a kamfanin bayanai) cikin watanni 6"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani ko kwamfuta mai intanet (ana iya yin atisaye a takarda)",
      "Takarda da alƙalami don atisayen lakabi, jerin alamun zamba da rajistar kuɗi",
      "Asusun imel mai shiga mai matakai biyu",
      "Kusan minti 60 zuwa 75 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare. Sannan ku yi atisayen lakabi a matsayin rukuni ku kwatanta amsoshi: saɓani shi ne hanya mafi kyau ta koyar da abubuwan kan iyaka.",
      "Ku kawo saƙonnin zamba na gaske (an cire sunaye da lambobi) ku bar rukunin ya nemo alamun gargaɗi.",
      "Kada ku ba da shawarar dandamali ɗaya a matsayin tabbataccen hanyar samun kuɗi. Dandamali suna canjawa kuma suna karɓar ƙasashe daban-daban; masu koyo suna duba shafukan kowanne.",
      "Kada ku taɓa karɓar kalmomin sirri, code ko takardun shaida na masu koyo, kuma kada ku nemi su yi rajista a lokacin zaman idan ba su shirya ba.",
      "Ku faɗi gaskiya game da albashi. Ku taimaka wa masu koyo su kwatanta ƙananan ayyuka da zaɓuɓɓukan gida da kuma horo don ayyukan da suka fi biya.",
      "Ku ba aikin ƙarshe maki da rubric ɗin, ku kuma ba da ra'ayi kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

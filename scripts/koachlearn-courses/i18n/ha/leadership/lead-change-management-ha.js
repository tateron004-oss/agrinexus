"use strict";

// Koach Learn course, Hausa (ha) translation of leadership/lead-change-management.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "lead-change-management-ha",
  lang: "ha",
  translationOf: "lead-change-management",
  category: "Leadership Development",
  name: "Jagorantar Canji",
  skills: "Fahimtar turjiya, Bayyana dalilin canji, Sa mutanen da abin ya shafa a ciki, Rubuta tsarin canji mai sauƙi, Sanar da canji da nasarori na farko, Tabbatar da dorewar canji",
  outcome: "jagorantar canji na gaske a wurin aiki ko a cikin al'ummarku: fahimtar dalilin da yasa mutane ke turjiya, bayyana muhimmancin canjin, sa mutanen da abin ya shafa a ciki, rubuta tsarin canji mai shafi ɗaya, sanar da shi da kyau, da ci gaba da shi bayan an fara.",
  about: [
    "Wannan kwas na kowa ne da aka ce ya jagoranci wani canji: mai kula da ma'aikata da ke kawo sabon jadawalin aiki, ƙungiyar sa-kai da ke komawa sabon tsarin masu ba da gudummawa, mai ƙaramin kasuwanci da ke canja yadda ake karɓar oda, ko ƙungiyar manoma da ke komawa ajiye bayanai ta na'ura.",
    "Yawancin canje-canje ba sa nasara ba don ra'ayin ba shi da kyau ba, sai don ba a tafi da mutane tare ba. Za ku koyi dalilin da yasa mutane ke turjiya, yadda ake bayyana dalilin canji, yadda ake sa mutane a ciki, da yadda ake tsarawa, sanarwa da dorewar canji.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku zaɓi canji ɗaya na gaske da ya dame ku tun farko, ku yi amfani da shi a kowane aikin \"Gwada yanzu\". Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku rubuta tsarin canji mai shafi ɗaya don wani canji na gaske da kuke son jagoranta. Dole ya ƙunshi abin da ke canjawa, dalili (a jimloli biyu ko uku da mutane za su damu da su), su wane ne abin ya shafa da yadda za ku sa su a ciki, lokacin kowane mataki, yadda za ku san yana aiki, saƙonni uku don ƙungiyoyi uku daban-daban, nasara ta farko ɗaya a watan farko, da hanyoyi biyu da za ku ci gaba da canjin.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Shugabannin ƙungiyoyin aiki, masu kula da ma'aikata, masu ƙananan kasuwanci, shugabannin ƙungiyoyin sa-kai da na al'umma da ke buƙatar jagorantar canji na gaske, kamar sabon tsari, sabuwar hanyar aiki ko sabuwar hanyar yi wa mutane hidima.",
    startingPoint: "Sun san canjin da suke so, kuma za su iya bayyana shi ga wanda ya riga ya yarda da shi. Yawancinsu sun ga canje-canje sun kasa, amma ba su taɓa rubuta tsarin canji ba, ko tsara yadda za su sa mutanen da abin ya shafa a ciki.",
    gap: "Canje-canje sukan kasa domin mutane ba su ga dalili ba, ba a tambaye su ba, sau ɗaya kawai suka ji labari, ko kuma sun koma tsofaffin halaye bayan an fara. Shugabanni suna buƙatar hanya mai sauƙi don fahimtar turjiya, bayyana dalilin canji, sa mutane a ciki, tsarawa, sanarwa da ci gaba da canjin.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Lokaci: gajerun darussa da suka dace da ranar aiki",
      "Na'urori: waya ko kwamfuta; takarda ma tana aiki don tsarin",
      "Tsarin canji dole ya isa a shafi ɗaya",
      "Bayanai da labaran da ke cikin dalilin canji dole su zama na mai koyo ne, ba AI ne ya ƙirƙira su ba"
    ],
    prerequisites: "Babu. Kwas ɗin \"Gudanar da Ƙungiyar Aiki\" zai taimaka a ɗauke su tare."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan akwai canjin da kuke son jagoranta", action: "lissafa su wane ne abin ya shafa, abin da kowace ƙungiya za ta iya rasawa da wanda za ta samu, da dalilan da za su iya sa su turjiya", standard: "kuna ɗaukar kowace damuwa a matsayin bayani da za ku amsa" },
    { id: "O2", condition: "Idan akwai canji na gaske", action: "rubuta dalilin canji da ke faɗin matsalar, abin da zai fi kyau, da abin da zai faru idan ba a yi komai ba", standard: "a jimloli biyu ko uku da bayani ko labari na gaske" },
    { id: "O3", condition: "Idan kun san mutanen da canji ya shafa", action: "tsara yadda za ku sa su a ciki tun da wuri, kamar neman ra'ayoyi, gwaji ƙarami (pilot) ko masu goyon bayan canji", standard: "kuna faɗin abin da ke buɗe da wanda ba a buɗe ba, da yadda za ku ba su labarin abin da aka yi" },
    { id: "O4", condition: "Idan akwai canji na gaske", action: "rubuta tsarin canji mai shafi ɗaya da ke amsa me, me yasa, su wa, yaushe da yadda za ku sani", standard: "da mai alhaki a kowane mataki, da ma'auni biyu ko uku da ranakun dubawa" },
    { id: "O5", condition: "Lokacin sanar da canji", action: "rubuta saƙonni don ƙungiyoyi uku daban-daban da tsara nasara ta farko ɗaya", standard: "kowane saƙo yana faɗin abin da ke canjawa, dalili, lokaci, taimakon da za su samu da wanda za su tambaya" },
    { id: "O6", condition: "Bayan an fara canjin", action: "tsara hanyoyi biyu na ci gaba da canjin", standard: "kamar duba ma'auni a ranakun da aka ƙayyade da sa sabuwar hanyar a jerin ayyuka (checklist) ko horo" }
  ],
  chapters: [
    {
      name: "Babi na 1: Fahimtar canji da tafiya da mutane tare",
      lessons: [
        {
          objectives: ["O1"],
          title: "Dalilin da yasa mutane ke turjiya ga canji",
          minutes: 5,
          goal: "Ambaci dalilan da za su iya sa mutane su yi turjiya ga canjinku, don ku iya amsa su.",
          text: [
            "Canji yana nufin rasa wani abu da aka saba da shi, ko da sabuwar hanyar ta fi kyau. Mutane suna turjiya saboda dalilai masu fahimta: ba su ga dalilin buƙatarsa ba, suna tsoron ba za su iya sabuwar hanyar da kyau ba, suna damuwa za su rasa lokaci, kuɗi, matsayi ko abokai, ba a tambaye su ba, ko kuma canje-canjen baya sun tafi ba daidai ba.",
            "Turjiya bayani ce, ba hari ba ce. Mutumin da ke turjiya sau da yawa yana ganin matsala ta gaske da ku ba ku gani ba. Ku ɗauki damuwarsa da muhimmanci, ku tambaye shi game da ita.",
            "Kafin ku sanar da komai, ku lissafa su wane ne abin ya shafa, da abin da kowace ƙungiya za ta iya rasawa da wanda za ta samu. Wannan jeri yana nuna muku abin da za ku bayyana, wanda za ku sa a ciki, da taimakon da za ku bayar."
          ],
          steps: ["Ku rubuta canjin a jimla ɗaya.", "Ku lissafa kowace ƙungiya da abin ya shafa.", "Ga kowace ƙungiya, ku rubuta abin da za ta iya rasawa da abin da za ta iya samu.", "Ku yi alama a kan damuwoyin da dole ku amsa."],
          words: [["Turjiya", "ƙin yarda da canji, a fili ko a ɓoye."], ["Mai ruwa da tsaki (stakeholder)", "duk wanda canji ya shafa, ko wanda zai iya shafar ko canjin zai yi nasara."]],
          slides: [
            { title: "Canji yana nufin rasa wani abu", bullets: ["Ko canji mai kyau yana rasa wani abin da aka saba da shi", "Mutane suna damuwa kafin su ga amfanin"] },
            { title: "Dalilan da aka saba na turjiya", bullets: ["Ba su ga dalili ba", "Suna tsoron ba za su iya sabuwar hanyar da kyau ba", "Za su iya rasa lokaci, kuɗi ko matsayi", "Ba a tambaye su ba, ko canje-canjen baya sun kasa"] },
            { title: "Turjiya bayani ce", bullets: ["Suna iya ganin matsala ta gaske da ku ba ku gani ba", "Ku tambaye su, kada ku yi gardama"] },
            { title: "Ku fara zana taswira", bullets: ["Su wane ne abin ya shafa", "Abin da kowace ƙungiya za ta iya rasawa da samu"] }
          ],
          tryIt: "Ku zaɓi canji na gaske da kuke son jagoranta. Ku rubuta shi a jimla ɗaya. Sannan ku lissafa ƙungiyoyi uku da ya shafa, kuma ga kowacce, abu ɗaya da za ta iya rasawa da abu ɗaya da za ta iya samu.",
          youCanNow: "hasashen dalilin da yasa mutane za su iya turjiya ga canji, da zana abin da kowace ƙungiya za ta iya rasawa da samu.",
          quickCheck: [
            { objective: "O1", q: "Wanne ne dalili mai fahimta da ke sa mutane turjiya ga canji?", options: ["Suna son ƙungiyar ta kasa", "Ba a tambaye su ba", "Ba sa son komai", "Ana biyan su don su yi turjiya"], answer: 1, why: "Rashin tambayar mutane yana ɗaya daga cikin dalilan turjiya da aka saba, masu fahimta." },
            { objective: "O1", q: "Kafin sanar da canji, me za ku fara yi?", options: ["Aika imel ga kowa lokaci ɗaya", "Jira har mutane su yi ƙorafi", "Neman AI ya rubuta sanarwar", "Lissafa su wane ne abin ya shafa da abin da kowace ƙungiya za ta iya rasawa da samu"], answer: 3, why: "Wannan jeri yana nuna muku abin da za ku bayyana, wanda za ku sa a ciki da taimakon da za ku bayar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Bayyana dalilin canji",
          minutes: 5,
          goal: "Bayyana a 'yan jimloli dalilin da yasa ake buƙatar canji, da kalmomin da mutanen da abin ya shafa suke damuwa da su.",
          text: [
            "Mutane suna buƙatar fahimtar dalili kafin su karɓi abin da ake yi. Dalilin canji mai ƙarfi yana amsa tambayoyi uku: Mece ce matsalar yau? Me zai fi kyau bayan canjin? Me zai faru idan ba mu yi komai ba?",
            "Ku yi amfani da bayanai da labari na gaske. \"Takardun rajista na hannu sun ɓatar da sunayen masu sa-kai 30 a watan da ya gabata, kuma iyalai biyu ba su sami kayan abincinsu ba\" yana motsa mutane fiye da \"dole mu zamanantu\". Ku yi magana kan abin da kowace ƙungiya ke damuwa da shi: lokaci, adalci, tsaro, abokan ciniki, mutanen da kuke yi wa hidima.",
            "Ku faɗi gaskiya game da abin da zai yi wuya. Idan sabuwar hanyar za ta ƙara aiki a farko, ku faɗa, ku kuma faɗi yadda za ku taimaka. Mutane suna amincewa da shugaban da ya yarda da wahalolin. Mataimakin AI zai iya taimaka muku gyara kalmominku, amma bayanai da labarin dole su zama naku."
          ],
          steps: ["Ku bayyana matsalar yau, da wani bayani na gaske.", "Ku bayyana abin da zai fi kyau.", "Ku faɗi abin da zai faru idan babu canji.", "Ku ƙara labari ɗaya na gaske.", "Ku faɗi gaskiya game da abin da zai yi wuya da yadda za ku taimaka."],
          words: [["Dalilin canji", "gajeren bayani kan dalilin da yasa ake buƙatar canji da abin da zai inganta."]],
          slides: [
            { title: "Dalili kafin abin da za a yi", bullets: ["Mece ce matsalar yau?", "Me zai fi kyau?", "Me zai faru idan ba mu yi komai ba?"] },
            { title: "Bayanai tare da labari", bullets: ["Lamba ta gaske tana nuna girman matsalar", "Labari na gaske yana nuna dalilin muhimmancinta"] },
            { title: "Ku yi magana kan abin da suke damuwa da shi", bullets: ["Lokaci, adalci, tsaro", "Abokan ciniki ko mutanen da kuke yi wa hidima"] },
            { title: "Ku faɗi gaskiya", bullets: ["Ku faɗi abin da zai yi wuya", "Ku faɗi yadda za ku taimaka"] }
          ],
          tryIt: "Ku rubuta dalilin canjinku a jimloli huɗu: matsalar yau da bayani ɗaya na gaske, abin da zai fi kyau, abin da zai faru idan babu canji, da layi ɗaya na gaskiya game da abin da zai yi wuya. Ku karanta shi da babbar murya. Shin mutanen da abin ya shafa za su damu?",
          youCanNow: "rubuta gajeren dalilin canji na gaskiya da ke amsa me yasa, ba wai me kawai ba.",
          quickCheck: [
            { objective: "O2", q: "Wane dalilin canji ne ya fi ƙarfi?", options: ["\"A watan da ya gabata takardunmu na hannu sun ɓatar da oda 12, kuma abokan ciniki uku sun tafi.\"", "\"Dole mu zamanantu.\"", "\"Kowa yana yi.\"", "\"Maigida yana so.\""], answer: 0, why: "Bayani da labari na gaske suna motsa mutane fiye da taken magana." },
            { objective: "O2", q: "Sabuwar hanyar za ta ɗauki ƙarin lokaci a farko. Me za ku faɗa?", options: ["Ku ɓoye shi har sai an fara", "Ku ce zai yi sauƙi", "Ku faɗa da gaskiya, ku kuma faɗi yadda za ku taimaka", "Ku ɗora laifi a kan tsohon tsarin"], answer: 2, why: "Mutane suna amincewa da shugaban da ya yarda da wahalolin." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Sa mutanen da abin ya shafa a ciki",
          minutes: 5,
          goal: "Tsara yadda za ku sa mutanen da canji ya shafa a ciki kafin a gama yanke shawara.",
          text: [
            "Mutane suna goyon bayan abin da suka taimaka wajen ginawa. Ku sa su a ciki tun da wuri, lokacin da har yanzu akwai damar canja tsarin. Tambaya bayan an riga an yanke komai tana kama da yaudara, kuma mutane suna gane hakan.",
            "Hanyoyin sa mutane a ciki: ku nemi ra'ayoyinsu a gajeren taro ko ɗan bincike, ku gwada canjin da ƙaramar ƙungiya da farko, ku gayyaci wasu ma'aikata da ake girmamawa su taimaka wajen jagoranta, ku bar mutane su zaɓi yadda za a yi wasu sassa.",
            "Ku bayyana a sarari abin da ke buɗe da wanda ba a buɗe ba. \"Za mu koma sabon tsarin kafin watan Maris; kuna iya taimakawa wajen yanke yadda za mu yi horo da tsarin da ƙungiyoyi za su koma.\" Sannan ku nuna abin da kuka yi da ra'ayoyinsu, ko da ba ku iya amfani da su ba."
          ],
          steps: ["Ku yanke abin da ya tabbata da abin da ke buɗe.", "Ku nemi ra'ayoyi da wuri, a taro ko ɗan bincike.", "Ku gwada da ƙaramar ƙungiyar gwaji.", "Ku gayyaci ma'aikata da ake girmamawa su taimaka wajen jagoranta.", "Ku ba su labarin abin da kuka yi da ra'ayoyinsu."],
          words: [["Gwaji ƙarami (pilot)", "ƙaramin gwajin canji da 'yan mutane kafin kowa ya koma."], ["Mai goyon bayan canji (change champion)", "ma'aikaci da ake girmamawa da ke taimakawa wajen jagoranci da bayanin canjin."]],
          slides: [
            { title: "Mutane suna goyon bayan abin da suka gina", bullets: ["Ku sa su a ciki da wuri", "Tambaya bayan an yanke tana kama da yaudara"] },
            { title: "Hanyoyin sa mutane a ciki", bullets: ["Ku nemi ra'ayoyi", "Ku yi ƙaramin gwaji (pilot)", "Ku gayyaci masu goyon bayan canji", "Ku bar su su zaɓi wani ɓangare na yadda za a yi"] },
            { title: "Ku bayyana abin da ke buɗe", bullets: ["\"Ranar ta tabbata; ku ne za ku taimaka a yanke yadda za mu yi horo\"", "Ku ba su labarin abin da kuka yi da ra'ayoyinsu"] }
          ],
          tryIt: "Don canjinku, ku rubuta abin da ya tabbata da abin da ke buɗe. Sannan ku ambaci hanyoyi biyu da za ku sa mutane a ciki, da mutane biyu da za ku iya roƙa su zama masu goyon bayan canji.",
          youCanNow: "sa mutanen da canji ya shafa a ciki ta hanyar gaskiya, da ba su labarin abin da aka yi da ra'ayoyinsu.",
          quickCheck: [
            { objective: "O3", q: "Me yasa neman ra'ayi bayan an riga an yanke komai yake lalata abu?", options: ["Yana ɗaukar lokaci mai yawa", "Yana kama da yaudara, kuma mutane suna gane hakan", "Yana ci kuɗi", "Mutane ba su da ra'ayoyi"], answer: 1, why: "Ku sa mutane a ciki lokacin da har yanzu akwai damar canja tsarin." },
            { objective: "O3", q: "Kun tattara ra'ayoyi amma ba ku iya amfani da wasu ba. Me za ku yi?", options: ["Kada ku ce komai game da su", "Ku yi amfani da su duk da haka", "Ku daina neman ra'ayoyi", "Ku ba su labarin abin da kuka yi da ra'ayoyin da dalilin hakan"], answer: 3, why: "Nuna abin da kuka yi da ra'ayoyi yana kiyaye amana, ko da ba ku iya amfani da su ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Fahimtar canji da tafiya da mutane tare",
        questions: [
          { objective: "O1", q: "Me yasa mutane sukan yi turjiya ko da ga canji mai kyau?", options: ["Domin suna da kasala", "Domin canji yana nufin rasa wani abin da aka saba da shi", "Domin kowane canji mummuna ne", "Domin shugabanni koyaushe suna kuskure"], answer: 1, why: "Canji yana kawo asara da rashin tabbas ko da yana taimakawa." },
          { objective: "O1", q: "Wani ma'aikaci yana turjiya sosai ga tsarinku. Mene ne amsa ta farko mafi kyau?", options: ["Ku tambaye shi me ke damunsa, domin yana iya ganin matsala ta gaske", "Ku ce masa ya daina ƙorafi", "Ku cire shi daga ƙungiyar", "Ku yi watsi da shi"], answer: 0, why: "Turjiya bayani ce; ku tambaya kafin ku yi gardama." },
          { objective: "O2", q: "Dalilin canji mai ƙarfi yana amsa waɗanne tambayoyi uku?", options: ["Su wa, a ina, nawa", "Wa za a ɗora wa laifi, yaushe, me yasa ba za a yi ba", "Nawa zai ci ni, wa ya yanke, zan iya ƙi", "Mece ce matsalar, me zai fi kyau, me zai faru idan ba mu yi komai ba"], answer: 3, why: "Waɗannan suna nuna dalilin da yasa canjin yake da muhimmanci." },
          { objective: "O3", q: "Yaushe ya kamata ku sa mutane a cikin canji?", options: ["Bayan an yanke komai", "Ba sau ɗaya ba", "Da wuri, lokacin da har yanzu akwai damar canja tsarin", "Sai idan sun yi ƙorafi"], answer: 2, why: "Ra'ayi na farko ra'ayi ne na gaske, kuma yana gina goyon baya." },
          { objective: "O3", q: "Mene ne gwaji ƙarami (pilot)?", options: ["Ƙaramin gwajin canjin da 'yan mutane da farko", "Maigidan shugaban", "Ranar ƙarshe", "Wani nau'in bidiyon horo"], answer: 0, why: "Gwaji ƙarami yana ba ku damar koyo da gyara matsaloli kafin kowa ya koma." }
        ]
      }
    },
    {
      name: "Babi na 2: Tsarawa, sanarwa da tabbatar da dorewa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rubuta tsarin canji mai sauƙi",
          minutes: 6,
          goal: "Rubuta tsarin canji mai shafi ɗaya da ke amsa me, me yasa, su wa, yaushe, da yadda za ku sani.",
          text: [
            "Tsarin canji ba sai ya yi tsawo ba. Shafi ɗaya da ke amsa tambayoyi biyar ya isa ga yawancin canje-canje: Me ke canjawa? Me yasa? Su wa abin ya shafa, kuma wa zai yi me? Yaushe kowane mataki zai faru? Ta yaya za ku san yana aiki?",
            "\"Yadda za ku sani\" shi ne ɓangaren da mutane suke tsallakewa. Ku zaɓi alamu biyu ko uku da za ku iya dubawa da gaske, kamar \"kashi 95% na oda an shigar da su a sabon tsarin kafin mako na 4\" ko \"babu kayan da aka kasa kaiwa har wata ɗaya\". Ku zaɓi ranar da za ku duba su.",
            "Ku naɗa mai alhaki ga kowane mataki, ku tsara horo da taimako kafin a koma, kuma ku faɗi abin da za ku yi idan wani abu ya tafi ba daidai ba, kamar barin tsohuwar hanyar a buɗe na ɗan lokaci."
          ],
          steps: ["Me: canjin a jimla ɗaya.", "Me yasa: dalilinku a jimloli biyu ko uku.", "Su wa: ƙungiyoyin da abin ya shafa, da mai alhaki ga kowane mataki.", "Yaushe: muhimman ranaku, har da horo kafin a koma.", "Yadda za ku sani: ma'auni biyu ko uku da ranar dubawa.", "Tsarin madadi idan wani abu ya tafi ba daidai ba."],
          words: [["Tsarin canji", "gajeren tsari a rubuce da ke faɗin abin da ke canjawa, dalili, su wa, yaushe da yadda za a auna nasara."], ["Ma'auni", "abin da za ku iya ƙirgawa ko dubawa don ganin ko canji yana aiki."], ["Mai alhaki", "mutum ɗaya da ke da alhakin ganin an yi wani mataki."]],
          slides: [
            { title: "Tambayoyi biyar, shafi ɗaya", bullets: ["Me ke canjawa?", "Me yasa?", "Su wa abin ya shafa, kuma wa zai yi me?", "Yaushe? Ta yaya za ku san yana aiki?"] },
            { title: "Yadda za ku sani", bullets: ["Alamu biyu ko uku da za ku iya dubawa", "Misali: \"kashi 95% na oda a sabon tsarin kafin mako na 4\"", "Ku zaɓi ranar dubawa"] },
            { title: "Kada ku manta", bullets: ["Mai alhaki ga kowane mataki", "Horo kafin a koma", "Madadi idan wani abu ya tafi ba daidai ba"] }
          ],
          tryIt: "Ku rubuta daftarin farko na tsarinku mai shafi ɗaya da dukkan sassa biyar. A \"yadda za ku sani\", ku rubuta ma'auni biyu da ranar da za ku duba su.",
          youCanNow: "rubuta gajeren tsarin canji da masu alhaki, ranaku da ma'aunin nasara a sarari.",
          quickCheck: [
            { objective: "O4", q: "Wane ɓangare na tsarin canji ne mutane suka fi tsallakewa?", options: ["Abin da ke canjawa", "Su wa abin ya shafa", "Yadda za ku san yana aiki", "Lokacin da zai fara"], answer: 2, why: "Ku zaɓi alamu biyu ko uku da za ku iya dubawa, da ranar da za ku duba su." },
            { objective: "O4", q: "Kuna damuwa sabon tsarin zai iya kasa a makon farko. Me za ku ƙara a tsarin?", options: ["Abin da za ku yi idan ya tafi ba daidai ba, kamar barin tsohuwar hanyar na ɗan lokaci", "Babu komai; ku tsara don nasara kawai", "Dalilin canji mafi tsawo", "Rana ta biyu ta farawa bayan shekara ɗaya"], answer: 0, why: "Tsari mai kyau yana faɗin abin da za ku yi idan wani abu ya tafi ba daidai ba." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Sanar da canjin da samun nasarori na farko",
          minutes: 5,
          goal: "Rubuta saƙonni masu sarari don ƙungiyoyi daban-daban, da tsara nasara ta farko da za a gani.",
          text: [
            "Ku faɗa fiye da sau ɗaya, ta hanyoyi fiye da ɗaya. Mutane suna da aiki, kuma sai sun ji saƙo sau da yawa kafin ya zauna musu. Ku yi amfani da taro, gajeren rubutu, da magana ɗaya-da-ɗaya. Ku fara gaya wa mutanen da abin ya fi shafa, ido da ido idan za ku iya, kafin su ji daga wani.",
            "Ku tsara saƙon don kowace ƙungiya: abin da ke canjawa a gare su, dalili, lokaci, taimakon da za su samu, da wanda za su tambaya. Ku bar wurin tambayoyi, kuma idan ba ku san amsa ba, ku faɗa, ku kuma faɗi lokacin da za ku nemo ta.",
            "Ku tsara nasara ta farko: nasara da wuri da za a gani a makonnin farko, kamar layi mafi gajarta ko rahoto mafi sauri. Ku raba ta, ku gode wa mutanen da suka sa ta faru. Nasarori na farko suna nuna canjin yana aiki, kuma suna jawo mutanen da ke cikin shakka."
          ],
          steps: ["Ku fara gaya wa mutanen da abin ya fi shafa, ido da ido idan zai yiwu.", "Ga kowace ƙungiya: abin da ke canjawa a gare su, dalili, lokaci, taimako, wanda za su tambaya.", "Ku maimaita ta taruka, rubutu da magana ɗaya-da-ɗaya.", "Ku amsa tambayoyi da gaskiya; ku faɗi lokacin da za ku nemo amsa.", "Ku tsara ku kuma yi murnar nasara ta farko ɗaya a watan farko."],
          words: [["Nasara ta farko (quick win)", "nasara da wuri da ake gani, da ke nuna canji yana aiki."], ["Masu sauraro", "ƙungiyar mutanen da aka rubuta saƙo dominsu."]],
          slides: [
            { title: "Ku faɗa fiye da sau ɗaya", bullets: ["Taruka, rubutu da magana ɗaya-da-ɗaya", "Wanda abin ya fi shafa da farko, ido da ido"] },
            { title: "Kowane saƙo yana ƙunshe da", bullets: ["Abin da ke canjawa a gare su da dalili", "Lokaci, da taimakon da za su samu", "Wanda za su tambaya"] },
            { title: "Amsoshi na gaskiya", bullets: ["Ba ku sani ba? Ku faɗa", "Ku faɗi lokacin da za ku nemo amsa"] },
            { title: "Nasarori na farko", bullets: ["Nasara da wuri da ake gani", "Ku raba ta, ku gode wa waɗanda suka sa ta faru"] }
          ],
          tryIt: "Ku rubuta gajerun saƙonni uku game da canjinku don ƙungiyoyi uku daban-daban (misali ma'aikatan gaba, manajoji da abokan ciniki). Sannan ku rubuta nasara ta farko ɗaya da za ku iya nunawa a watan farko.",
          youCanNow: "sanar da canji a sarari ga ƙungiyoyi daban-daban, da tsara nasara ta farko da ke gina goyon baya.",
          quickCheck: [
            { objective: "O5", q: "Mece ce nasara ta farko (quick win)?", options: ["Gama canjin a rana ɗaya", "Nasara da wuri da ake gani, da ke nuna canjin yana aiki", "Tsallake horo", "Kyauta ga mutum na farko da ya koma"], answer: 1, why: "Nasarori na farko suna jawo mutanen da ke cikin shakka." },
            { objective: "O5", q: "Ta yaya za ku gaya wa mutanen da canjin ya fi shafa?", options: ["Ku bar su su ji daga wani", "Ku liƙa sanarwa a bango", "Ku aika imel ɗaya ga duk ma'aikata", "Ku fara gaya musu, ido da ido idan za ku iya"], answer: 3, why: "Mutanen da abin ya fi shafa ya kamata su ji da farko, kafin jita-jita ta isa gare su." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Tabbatar da dorewar canjin",
          minutes: 5,
          goal: "Tsara yadda za a ci gaba da canji bayan an fara, don kada mutane su koma tsohuwar hanya.",
          text: [
            "Ranar farawa ba ita ce ƙarshen tafiya ba. Canje-canje da yawa suna dushewa bayan 'yan makonni yayin da mutane ke komawa tsofaffin halaye, musamman idan suna da aiki sosai ko suna cikin damuwa.",
            "Don ya dore: ku duba ma'aunanku a ranakun da kuka ƙayyade, ku sa taimako ya zama mai sauƙin samu, ku cire tsohuwar hanyar da zarar sabuwar ta yi aiki, kuma ku sa canjin a cikin ayyukan yau da kullum kamar jerin ayyuka (checklist), horon sababbin ma'aikata, da abin da ake sa rai daga kowane aiki.",
            "Ku ci gaba da saurare. Ku tambayi mutane abin da har yanzu yake da wuya, ku gyara shi. Ku gode wa mutanen da ke amfani da sabuwar hanyar da kyau, ku raba sakamako. Idan canjin ya zama \"yadda muke yin abubuwa a nan\", ku waiwayi abin da kuka koya don canji na gaba."
          ],
          steps: ["Ku duba ma'aunanku a ranakun da aka tsara.", "Ku sa taimako ya zama mai sauƙin samu.", "Ku cire tsohuwar hanyar idan sabuwar ta yi aiki.", "Ku ƙara canjin a jerin ayyuka, horo da abin da ake sa rai daga kowane aiki.", "Ku tambayi abin da har yanzu yake da wuya, ku gyara shi.", "Ku raba sakamako, ku gode wa mutane."],
          words: [["Dorewa", "ci gaba da wani abu a tsawon lokaci."], ["Al'adar aiki (routine)", "yadda ake yin aiki kullum ko kowane mako."]],
          slides: [
            { title: "Farawa ba ƙarshen tafiya ba ne", bullets: ["Canje-canje suna dushewa idan mutane sun shagala", "Tsofaffin halaye suna jan mutane baya"] },
            { title: "Ku sa shi cikin al'adar aiki", bullets: ["Jerin ayyuka da horon sababbin ma'aikata", "Abin da ake sa rai daga kowane aiki", "Ku cire tsohuwar hanya idan sabuwar ta yi aiki"] },
            { title: "Ku ci gaba da saurare", bullets: ["Ku duba ma'aunanku a ranakun", "Ku tambayi abin da har yanzu yake da wuya, ku gyara", "Ku raba sakamako, ku gode wa mutane"] }
          ],
          tryIt: "Aikin ƙarshe: ku gama tsarin canjinku mai shafi ɗaya. Ku ƙara saƙonni uku don ƙungiyoyi uku, nasara ta farko ɗaya a watan farko, da hanyoyi biyu da za ku ci gaba da canjin bayan an fara.",
          youCanNow: "ci gaba da canji bayan an fara ta hanyar duba sakamako, sa shi cikin al'adar aiki, da sauraron mutanen da ke yin aikin.",
          quickCheck: [
            { objective: "O6", q: "Me yakan faru da canji 'yan makonni bayan an fara?", options: ["Yana dushewa yayin da mutane ke komawa tsofaffin halaye", "Koyaushe yana dorewa da kansa", "Kowa yana manta tsohuwar hanyar", "Yana ƙara girma da kansa"], answer: 0, why: "Ranar farawa ba ƙarshen tafiya ba ce; halaye suna jan mutane baya." },
            { objective: "O6", q: "Sabuwar hanyar tana aiki da kyau. Me za ku yi da tsohuwar hanyar?", options: ["Ku riƙe duka biyun har abada", "Ku bar kowane mutum ya zaɓa", "Ku cire tsohuwar hanyar, ku sa sabuwar a jerin ayyuka da horo", "Ku ɓoye sabuwar hanyar"], answer: 2, why: "Cire tsohuwar hanya da sa sabuwar a ciki suna taimakawa canjin ya dore." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Tsarawa, sanarwa da tabbatar da dorewa",
        questions: [
          { objective: "O4", q: "Wace tambaya ce ke cikin tsarin canji mai sauƙi?", options: ["Wa za mu ɗora wa laifi?", "Ta yaya za mu guji gaya wa mutane?", "Ta yaya za mu san yana aiki?", "Har yaushe za mu iya jira?"], answer: 2, why: "Ma'auni suna nuna ko canjin yana aiki." },
          { objective: "O4", q: "Wanne ne ma'aunin nasara mai kyau?", options: ["\"Mutane suna jin sun zamanantu\"", "\"Abubuwa suna tafiya mafi kyau\"", "\"Mun yi ƙoƙari sosai\"", "\"Babu kayan da aka kasa kaiwa har wata ɗaya\""], answer: 3, why: "Abu ne da za ku iya dubawa da gaske." },
          { objective: "O5", q: "Su wa ya kamata su fara jin labarin canji?", options: ["Mutanen da abin ya fi shafa, ido da ido idan zai yiwu", "Jaridar yankin", "Shugabanni kaɗai, har abada", "Babu kowa har sai ya fara"], answer: 0, why: "Sun cancanci su ji kai tsaye, ba ta jita-jita ba." },
          { objective: "O5", q: "Wani ya yi tambayar da ba za ku iya amsawa yanzu ba. Me za ku yi?", options: ["Ku ƙirƙiri amsa", "Ku ce ba ku sani ba, ku kuma faɗi lokacin da za ku nemo amsa", "Ku canja magana", "Ku rufe taron"], answer: 1, why: "Gaskiya tana gina amana lokacin canji." },
          { objective: "O6", q: "Watanni uku bayan an fara, mutane suna komawa tsohuwar hanya. Me ya fi taimakawa?", options: ["Ku daina magana game da shi", "Ku dawo da tsohon tsarin har abada", "Ku ɗora wa ƙungiyar laifi", "Ku sa sabuwar hanyar a jerin ayyuka da horo, ku tambayi abin da har yanzu yake da wuya"], answer: 3, why: "Al'adar aiki da saurare suna sa canji ya dore." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Jagorantar Canji",
    questions: [
      { objective: "O1", q: "Wanne ne dalilin da aka saba na turjiya ga canji?", options: ["Suna tsoron ba za su iya sabuwar hanyar da kyau ba", "Suna son rikici", "Suna son ƙarin taruka", "Ba sa son aikinsu ko kaɗan"], answer: 0, why: "Tsoron rashin iya sabuwar hanyar da kyau abu ne da aka saba sosai." },
      { objective: "O1", q: "Ɗaukar turjiya a matsayin bayani yana nufin:", options: ["Yin watsi da ita", "Ɗaukar muryar mutane a ɓoye", "Tambayar abin da ke damun mutane domin suna iya ganin matsala ta gaske", "Hukunta ta"], answer: 2, why: "Turjiya tana iya nuna haɗari na gaske." },
      { objective: "O1", q: "Kafin sanar da canji, yana taimakawa a lissafa:", options: ["Wa za a ɗora wa laifi idan ya kasa", "Su wane ne abin ya shafa da abin da kowace ƙungiya za ta iya rasawa da samu", "Kuɗin da zai ci kaɗai", "Babu komai"], answer: 1, why: "Wannan taswira tana nuna abin da za a bayyana da taimakon da za a bayar." },
      { objective: "O2", q: "Wane dalilin canji ne ya fi ƙarfi?", options: ["\"Dole mu zamanantu.\"", "\"Domin na ce haka.\"", "\"Kowa yana yi.\"", "\"Rajistar hannu ta ɓatar da sunayen masu sa-kai 30 a watan da ya gabata, kuma iyalai biyu ba su sami kayansu ba.\""], answer: 3, why: "Bayani na gaske da labari na gaske suna nuna dalilin muhimmancinsa." },
      { objective: "O2", q: "Me yasa za ku faɗi gaskiya game da abin da zai yi wuya?", options: ["Don tsoratar da mutane", "Mutane suna amincewa da shugaban da ya yarda da wahalolin", "Don jinkirta canjin", "Ba abu ne mai kyau ba ko kaɗan"], answer: 1, why: "Gaskiya tana gina amana, kuma tana ba ku damar tsara taimako." },
      { objective: "O2", q: "Dalilin canji ya kamata ya bayyana:", options: ["Abin da zai faru idan ba mu yi komai ba", "Ra'ayin shugaba kaɗai", "Wa zai rasa aikinsa", "Babu komai game da matsalar"], answer: 0, why: "Asarar rashin yin komai tana nuna dalilin da yasa ake buƙatar canji." },
      { objective: "O3", q: "\"Mutane suna goyon bayan abin da suka taimaka wajen ginawa\" yana nufin ya kamata ku:", options: ["Ɓoye tsare-tsare", "Yanke komai da farko, sannan ku tambaya", "Sa su a ciki da wuri lokacin da tsarin zai iya canjawa", "Sa manajoji kaɗai a ciki"], answer: 2, why: "Sa mutane a ciki da wuri yana gina goyon baya na gaske." },
      { objective: "O3", q: "Mai goyon bayan canji (change champion) shi ne:", options: ["Mutumin da ya fi turjiya", "Ma'aikaci da ake girmamawa da ke taimakawa wajen jagoranci da bayanin canjin", "Kofin nasara", "Alƙali daga waje"], answer: 1, why: "Masu goyon baya suna taimaka wa wasu su amince da canjin." },
      { objective: "O3", q: "Kun nemi ra'ayoyi amma ba ku iya amfani da wasu ba. Me ya kamata ku yi?", options: ["Kada ku ce komai", "Ku yi kamar kun yi amfani da su", "Ku daina neman ra'ayoyi", "Ku ba su labarin abin da kuka yi da ra'ayoyin, da dalili"], answer: 3, why: "Ba da labarin abin da aka yi yana kiyaye amana ko da ba a yi amfani da ra'ayoyin ba." },
      { objective: "O4", q: "Sassa biyar na tsarin canji mai sauƙi su ne:", options: ["Me, me yasa, su wa, yaushe, yadda za ku sani", "Su wa, laifi, kuɗi, jinkiri, soke", "Tsara, fata, jira, gani, daina", "Kasafin kuɗi, tambari, taken magana, biki, hoto"], answer: 0, why: "Waɗannan tambayoyi biyar sun ƙunshi yawancin canje-canje." },
      { objective: "O4", q: "Kowane mataki a tsarin canji ya kamata ya kasance da:", options: ["Masu alhaki goma", "Babu mai alhaki", "Mai alhaki ɗaya da ke da alhakinsa", "Mai alhaki da za a zaɓa daga baya"], answer: 2, why: "Mai alhaki ɗaya a sarari yana tabbatar an yi shi." },
      { objective: "O4", q: "Yaushe ya kamata a yi horo?", options: ["Watanni bayan an koma", "Kafin a koma", "Ba sau ɗaya ba", "Ga manajoji kaɗai"], answer: 1, why: "Mutane suna buƙatar ƙwarewa kafin a ce su yi amfani da sabuwar hanyar." },
      { objective: "O5", q: "Me yasa za ku maimaita saƙonku ta hanyoyi daban-daban?", options: ["Don ɓata wa mutane rai", "Domin sai mutane sun ji saƙo sau da yawa kafin ya zauna musu", "Don cike lokaci", "Domin saƙon farko ba daidai ba ne"], answer: 1, why: "Mutanen da ke da aiki suna buƙatar ji fiye da sau ɗaya." },
      { objective: "O5", q: "Saƙon kowace ƙungiya ya kamata ya ƙunshi:", options: ["Rana kawai", "Dalili kawai", "Dogon tarihi", "Abin da ke canjawa a gare su, dalili, lokaci, taimakon da za su samu da wanda za su tambaya"], answer: 3, why: "Waɗannan suna amsa tambayoyin da mutane suke da su da gaske." },
      { objective: "O5", q: "Nasara ta farko (quick win) ita ce:", options: ["Nasara da wuri da ake gani, da ke nuna canjin yana aiki", "Gama canjin a rana ɗaya", "Cin nasara a gardama", "Tsallake tsarin"], answer: 0, why: "Nasarori na farko suna gina yarda da goyon baya." },
      { objective: "O5", q: "Bayan nasara ta farko, ya kamata ku:", options: ["Ku yi shiru game da ita", "Ku ɗauki dukan yabon", "Ku raba ta, ku gode wa mutanen da suka sa ta faru", "Ku dakatar da canjin"], answer: 2, why: "Raba nasara da godiya suna yaɗa goyon baya." },
      { objective: "O6", q: "Me yasa ranar farawa \"ba ƙarshen tafiya ba ce\"?", options: ["Domin canje-canje sukan dushe yayin da mutane ke komawa tsofaffin halaye", "Domin koyaushe akwai biki bayanta", "Domin tsare-tsare ba sa farawa", "Domin ranar farawa ba dole ba ce"], answer: 0, why: "Dorewar canji tana buƙatar aiki mai ci gaba." },
      { objective: "O6", q: "Wanne ne ke taimaka wa canji ya dore?", options: ["Riƙe tsohuwar hanyar ita ma har abada", "Sa shi a jerin ayyuka da horon sababbin ma'aikata", "Rashin duba sakamako ko kaɗan", "Sake canja shi a mako mai zuwa"], answer: 1, why: "Al'adar aiki tana sa sabuwar hanyar ta zama abin da aka saba." },
      { objective: "O6", q: "Kun ƙayyade ma'auni da za ku duba a mako na 4. A mako na 4 ya kamata ku:", options: ["Tsallake shi", "Canja ma'aunin", "Jira har shekara mai zuwa", "Duba shi, ku yi aiki da abin da kuka gano"], answer: 3, why: "Ma'auni suna taimakawa ne kawai idan kun duba su a kan lokaci." },
      { objective: "O6", q: "Idan canjin ya zama \"yadda muke yin abubuwa a nan\", mataki na ƙarshe mai kyau shi ne:", options: ["Manta da shi", "Waiwayar abin da kuka koya don canji na gaba", "Soke shi", "Ɗora laifi a kan waɗanda suka yi turjiya"], answer: 1, why: "Darussan da aka koya suna sauƙaƙa canji na gaba." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 6, 9, 11, 13, 14, 16, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Dalilin muhimmancinsa", objective: "O2", notYet: "Dalilin taken magana ne kawai, kamar \"dole mu zamanantu\".", meets: "Jimloli biyu ko uku kan matsalar, abin da zai fi kyau, da abin da zai faru idan babu canji.", exceeds: "Yana amfani da bayani ko labari na gaske da mutanen da abin ya shafa za su damu da shi." },
      { name: "Su wa abin ya shafa da yadda aka sa su a ciki", objective: "O3", notYet: "Ba a sa kowa a ciki ba kafin a gama yanke shawara.", meets: "Ya ambaci su wa abin ya shafa da yadda za a sa su a ciki da wuri.", exceeds: "Ya faɗi abin da ke buɗe da wanda ba a buɗe ba, da yadda za a ba da labarin abin da aka yi da ra'ayoyin." },
      { name: "Tsari da ma'auni", objective: "O4", notYet: "Babu me, me yasa, su wa, yaushe ko yadda za a sani.", meets: "Ya amsa dukkan tambayoyi biyar, da lokacin kowane mataki da yadda za a san yana aiki.", exceeds: "Kowane mataki yana da mai alhaki, kuma kowane ma'auni yana da ranar dubawa." },
      { name: "Saƙonni da nasara ta farko", objective: "O5", notYet: "Saƙo ɗaya ga kowa, ko babu nasara ta farko.", meets: "Saƙonni uku don ƙungiyoyi uku, da nasara ta farko ɗaya a watan farko.", exceeds: "Kowane saƙo yana faɗin taimakon da mutane za su samu da wanda za su tambaya." },
      { name: "Ci gaba da canjin", objective: "O6", notYet: "Tsarin ya tsaya a ranar farawa.", meets: "Hanyoyi biyu na ci gaba da canjin bayan an fara.", exceeds: "Ya haɗa da sa sabuwar hanyar a jerin ayyuka, horo ko abin da ake sa rai daga kowane aiki." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka fara canjin da ke cikin tsarinsu cikin kwanaki 90 (binciken biyo baya)",
      "Canje-canjen da har yanzu ake amfani da su watanni uku bayan farawa",
      "Masu koyo da suka ɗauki wani kwas na shugabanci na Koach Learn"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta don kallon darussan",
      "Takarda ko takardar kwamfuta don tsarin canji mai shafi ɗaya",
      "Canji ɗaya na gaske da mai koyo yake son jagoranta",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku nemi kowane mai koyo ya zo da canji ɗaya na gaske kafin a fara zaman.",
      "Ku sa mutane bibbiyu, ɗaya ya yi kamar shi ne mai turjiya, don masu koyo su yi atisayen tambayar abin da ke damunsa.",
      "Ku sa masu koyo su musanya dalilin canjinsu, kowa ya faɗi ko zai gamsar da shi.",
      "Ku tunatar da masu koyo su bar bayanai da labarai su zama nasu yayin amfani da AI don gyara kalmomi.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

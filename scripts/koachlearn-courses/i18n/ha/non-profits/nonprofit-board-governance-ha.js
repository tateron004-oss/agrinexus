"use strict";

// Koach Learn course, Hausa (ha) translation of non-profits/nonprofit-board-governance.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "nonprofit-board-governance-ha",
  lang: "ha",
  translationOf: "nonprofit-board-governance",
  category: "Non Profits",
  name: "Shugabancin Kwamitin Gudanarwa na Ƙungiya Mai Zaman Kanta",
  skills: "Ayyukan kulawa, aminci da biyayya na kwamitin gudanarwa, Matsayin kwamiti da na ma'aikata, Kundin dokokin ƙungiya, taruka da bayanan taro, Magance cin karo da muradi, Kula da kuɗi da Form 990, Neman sababbin 'yan kwamiti",
  outcome: "yin aiki ko jagoranci a kwamitin gudanarwa na ƙungiya mai zaman kanta da kyau: bayyana ayyukan kwamitin bisa doka, raba aikin kwamiti da na ma'aikata a sarari, gudanar da taro yadda ya kamata da bayanan taro, magance cin karo da muradi, duba harkokin kuɗi da takardun da ake mikawa kowace shekara, da neman sababbin 'yan kwamiti da suka dace.",
  about: [
    "Wannan kwas ɗin na 'yan kwamitin gudanarwa (board) na ƙungiyoyi masu zaman kansu (nonprofit) ne, da waɗanda suka kafa ƙungiya, da daraktocin zartarwa, da shugabannin coci da ƙungiyoyin al'umma, da duk wanda aka gayyata ya shiga kwamiti a karon farko.",
    "Kwamitin gudanarwa ne ke da alhakin ƙungiya bisa doka. Za ku koyi manyan ayyuka uku na kwamiti, yadda kwamiti da ma'aikata ke raba aiki, amfanin kundin dokokin ƙungiya (bylaws), yadda ake gudanar da taro da rubuta bayanan taro, yadda ake magance cin karo da muradi, waɗanne rahotannin kuɗi da Form 990 na IRS (hukumar haraji ta Amurka) ya kamata kwamiti ya duba, dokokin rajistar ƙungiyoyin agaji na California, da yadda ake neman 'yan kwamiti nagari.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\" da za ku iya yi da takardun ƙungiyarku. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Wannan kwas ilimi ne na gama-gari, ba shawarar shari'a ko ta haraji ba. Dokoki sun bambanta daga jiha zuwa jiha kuma suna canjawa, don haka ku duba majiyoyin hukuma da aka ambata a darussan, kuma ku nemi shawarar lauya ko akanta mai sanin ƙungiyoyi masu zaman kansu kan halin da kuke ciki."
  ],
  finalTask: "Ku yi jerin abubuwan dubawa na shafi ɗaya game da shugabancin kwamiti don ƙungiya mai zaman kanta ta gaske ko ta misali: ayyuka uku da kalmomi masu sauƙi, rabon aikin kwamiti da na ma'aikata don shawarwari biyar da aka saba yi, ajandar taro da samfurin bayanan taro, jerin matakan cin karo da muradi, kalandar shekara ta binciken kuɗi da takardun da ake mikawa (wace irin Form 990, ranar ƙarshe ta mika ta, da duk wata rajistar jiha kamar Registry of Charities and Fundraisers na California), da shirin neman mutane don kujeru biyu da babu kowa bisa jadawalin ƙwarewa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "'Yan kwamitin gudanarwa na ƙungiyoyi masu zaman kansu, waɗanda suka kafa ƙungiya, daraktocin zartarwa, shugabannin coci da ƙungiyoyin al'umma, da mutanen da aka gayyata su shiga kwamiti a karon farko.",
    startingPoint: "Suna kishin wata manufa kuma wataƙila sun halarci tarukan kwamiti. Da yawa ba su taɓa karanta kundin dokokin ƙungiyarsu ba, ko rubuta bayanan taro, ko duba Form 990, ko magance cin karo da muradi ba.",
    gap: "Kwamitin gudanarwa ne ke da alhakin ƙungiyarsa bisa doka. 'Yan kwamitin da ba su san ayyukansu ba, ko iyakar aikin kwamiti da na ma'aikata, ko takardun da ake mikawa kowace shekara, suna jefa matsayin ƙungiyar na rashin biyan haraji, kuɗinta da mutuncinta cikin haɗari. Jerin abubuwan dubawa mai sarari yana taimaka musu su yi shugabanci nagari kuma su riƙe amincewar jama'a.",
    constraints: [
      "'Yan sa-kai masu ƙarancin lokaci; darussa na minti 5",
      "Dokoki sun bambanta daga jiha zuwa jiha kuma suna canjawa; masu koyo suna dubawa a irs.gov da ofishin ƙungiyoyin agaji na jiharsu",
      "Ilimi ne na gama-gari, ba shawarar shari'a ko ta haraji ba; manyan shawarwari a kai su ga lauya ko akanta mai sanin ƙungiyoyi masu zaman kansu",
      "Kalmomi masu sauƙi don sababbin 'yan kwamiti da ƙananan ƙungiyoyi na 'yan sa-kai kawai"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku wata shawarar kwamiti ko wani hali", action: "bayyana ayyukan kulawa, aminci da biyayya, da gane wane aiki ne ke cikin haɗari", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O2", condition: "Ta amfani da kundin dokokin ƙungiyarku da jadawalin ƙwarewa", action: "raba shawarwarin da aka saba yi tsakanin kwamiti da ma'aikata, nemo muhimman dokoki a kundin dokokin, da shirya yadda za a cike kujerun kwamiti da babu kowa", standard: "tare da shawarwari biyar da aka rarraba da kujeru biyu da aka haɗa da giɓin ƙwarewa" },
    { id: "O3", condition: "Don taron kwamiti mai zuwa", action: "rubuta ajanda mai ajandar amincewa (consent agenda) da rubuta bayanan taro masu halarta, quorum, shawarwarin da aka gabatar, ƙuri'u da ayyukan da za a yi", standard: "tare da kowane sashe da ake buƙata a bayanan taro" },
    { id: "O4", condition: "Idan ɗan kwamiti, ko iyalinsa ko kasuwancinsa, zai iya amfana daga wata shawara", action: "bin matakan cin karo da muradi: bayyanawa, fita daga tattaunawa, duba cewa cinikin yana da adalci da rubuta shi", standard: "bisa tsari daidai kuma an rubuta shi a bayanan taro" },
    { id: "O5", condition: "Idan aka ba ku kuɗin shiga, kadarori da ranar ƙarshen shekarar kuɗi ta ƙungiya", action: "duba rahotannin kuɗinta da yin kalandar shekara ta Form 990 ɗinta da takardun jiha", standard: "tare da tabbatar da irin fom ɗin da ranar ƙarshe a irs.gov da shafin ofishin ƙungiyoyin agaji na jiha" }
  ],
  chapters: [
    {
      name: "Babi na 1: Abin da kwamitin gudanarwa ke yi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ayyuka uku: kulawa, aminci da biyayya",
          minutes: 5,
          goal: "Bayyana manyan ayyuka uku na kwamiti da gane lokacin da ɗaya ke cikin haɗari.",
          text: [
            "'Yan kwamitin gudanarwa na ƙungiya mai zaman kanta suna riƙe da ƙungiyar a matsayin amana, don jama'a da mutanen da take yi wa hidima. Ana yawan bayyana wannan amanar a matsayin ayyuka uku.",
            "Aikin kulawa (duty of care): ku mai da hankali kuma ku yanke shawara da cikakken bayani. Ku zo taruka, ku karanta rahotanni, ku yi tambayoyi, kuma ku yi amfani da hankali. Aikin aminci (duty of loyalty): ku sa muradin ƙungiyar gaba da naku, kuma kada ku taɓa amfani da kujerarku don amfanin kanku, iyalinku ko kasuwancinku. Aikin biyayya (duty of obedience): ku tabbata ƙungiyar tana bin manufarta, kundin dokokinta da dokar ƙasa.",
            "Waɗannan ayyuka na kowane ɗan kwamiti ne, ba na shugaba ko ma'ajin kuɗi kaɗai ba. \"Ban karanta kasafin kuɗi ba\" ba uzuri ba ne. Ainihin dokoki sun bambanta daga jiha zuwa jiha, don haka ku tambayi lauya mai sanin ƙungiyoyi masu zaman kansu idan shawarar tana da girma."
          ],
          words: [["Kwamitin gudanarwa (board of directors)", "rukunin mutanen da ke da alhakin kula da ƙungiya mai zaman kanta bisa doka."], ["Nauyin amana (fiduciary duty)", "aikin doka na yin abin da ya fi amfanar wani; 'yan kwamiti suna da shi ga ƙungiyar."], ["Aikin kulawa", "yanke shawara da cikakken bayani da kuma a hankali."], ["Aikin aminci", "sa muradin ƙungiya gaba da naku."], ["Aikin biyayya", "tabbatar da ƙungiya tana bin manufarta, kundin dokokinta da dokar ƙasa."]],
          slides: [
            { title: "Kuna riƙe da ƙungiyar a matsayin amana", bullets: ["Don jama'a da mutanen da take yi wa hidima", "Manyan ayyuka uku"] },
            { title: "Kulawa, aminci, biyayya", bullets: ["Kulawa: ku zo, ku karanta, ku tambaya, ku yanke shawara da hikima", "Aminci: ƙungiyar farko, ba ku kanku ba", "Biyayya: manufa, kundin dokoki da dokar ƙasa"] },
            { title: "Kowane ɗan kwamiti, kowane lokaci", bullets: ["Ba shugaba ko ma'aji kaɗai ba", "\"Ban karanta ba\" ba uzuri ba ne", "Babbar shawara? Ku tambayi lauya"] }
          ],
          tryIt: "Ku rubuta misali ɗaya na gaske na kowane aiki don wata ƙungiya mai zaman kanta da kuka sani, kamar bankin abinci, coci ko ƙungiyar wasanni ta matasa. Sannan ku rubuta abu ɗaya da zai karya kowane aiki.",
          youCanNow: "bayyana ayyukan kulawa, aminci da biyayya, da gane lokacin da ɗaya ke cikin haɗari.",
          quickCheck: [
            { objective: "O1", q: "Me aikin aminci yake nema daga ɗan kwamiti?", options: ["Zuwa kowane taro a kan lokaci", "Bin kundin dokoki da dokar ƙasa", "Sa muradin ƙungiya gaba da naku", "Tara kuɗi mafi yawa"], answer: 2, why: "Aminci yana nufin kada ku taɓa amfani da kujerarku don amfanin kanku, iyalinku ko kasuwancinku." },
            { objective: "O1", q: "Wani ɗan kwamiti ya ce, \"Ba na karanta rahotanni; ma'aji ne ke kula da kuɗi.\" Me za ku faɗa masa?", options: ["Kowane ɗan kwamiti yana da aikin kulawa, don haka ya karanta rahotanni ya yi tambayoyi", "Ba komai; ma'aji ne kaɗai ke da alhaki", "Ya nemi ma'aikata su jefa ƙuri'a a madadinsa", "Ya ƙi jefa ƙuri'a kan kuɗi"], answer: 0, why: "Ayyuka uku na kowane ɗan kwamiti ne, kuma rashin karanta kasafin kuɗi ba uzuri ba ne." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Matsayin kwamiti da na ma'aikata, da kundin dokoki",
          minutes: 6,
          goal: "Raba shawarwarin da aka saba yi tsakanin kwamiti da ma'aikata, da nemo muhimman dokoki a kundin dokokinku.",
          text: [
            "A yawancin ƙungiyoyi masu zaman kansu da ke da ma'aikata masu albashi, kwamiti yana ba da alkibla kuma yana sa ido; ma'aikata kuma suna yin aikin yau da kullum. Kwamiti yana amincewa da manufa, dabaru da kasafin kuɗi; yana ɗaukar daraktan zartarwa aiki, yana taimaka masa kuma yana tantance aikinsa; yana sa ido kan kuɗi da haɗari; kuma yana taimakawa wajen tara kuɗi. Daraktan zartarwa yana gudanar da shirye-shirye, yana ɗauka da kula da sauran ma'aikata, kuma yana yanke shawarwarin yau da kullum.",
            "Matsala tana farawa idan kwamiti yana shiga ƙananan abubuwan aikin ma'aikata (micromanage), ko idan kwamiti yana amincewa da komai kawai ba tare da tambaya ba (rubber-stamp). A ƙananan ƙungiyoyi na 'yan sa-kai kawai, 'yan kwamiti sukan yi aikin hannu ma, don haka ku san wace \"hula\" kuke sanye da ita a kowane lokaci.",
            "Kundin dokoki (bylaws) shi ne littafin dokokin ƙungiyar da kanta. Yawanci yana faɗin yawan 'yan kwamiti, yadda ake zaɓensu da tsawon wa'adinsu, jami'ai, yadda ake kiran taro, mutane nawa ne ake buƙata don quorum, da yadda ake jefa ƙuri'a. Ku riƙe kwafinsa na yanzu, ku karanta shi, ku bi shi. Ku canja shi ta hanyar da ya bayyana kawai."
          ],
          steps: ["Ku jera shawarwari biyar da aka saba yi (kasafin kuɗi, ɗaukar ma'aikata, sabon shiri, babbar kwangila, ranar wani biki).", "Ku sa alama kan kowanne: kwamiti, ma'aikata ko duka biyu.", "Ku buɗe kundin dokokinku ku nemo: yawan 'yan kwamiti, wa'adi, jami'ai, quorum da dokokin ƙuri'a.", "Ku rubuta duk abin da kwamitinku ba ya bi."],
          words: [["Daraktan zartarwa (executive director)", "babban shugaban ma'aikata da ke gudanar da ƙungiyar kowace rana kuma yake kai rahoto ga kwamiti."], ["Kundin dokoki (bylaws)", "dokokin ƙungiya kan yadda kwamiti da ƙungiyar ke aiki."], ["Quorum", "mafi ƙarancin adadin 'yan kwamiti da dole su halarta kafin taro ya iya yanke shawara."], ["Micromanage", "sarrafa ƙananan abubuwan aikin wani."]],
          slides: [
            { title: "Kwamiti: alkibla da sa ido", bullets: ["Manufa, dabaru da kasafin kuɗi", "Yana ɗauka da tantance daraktan zartarwa", "Yana sa ido kan kuɗi da haɗari, yana taimakawa wajen tara kuɗi"] },
            { title: "Ma'aikata: aikin yau da kullum", bullets: ["Suna gudanar da shirye-shirye", "Suna ɗauka da kula da sauran ma'aikata", "Shawarwarin yau da kullum"] },
            { title: "Tarko biyu", bullets: ["Shiga ƙananan abubuwan aikin ma'aikata", "Amincewa da komai ba tare da tambaya ba", "'Yan sa-kai kawai? Ku san wace hula kuke sanye da ita"] },
            { title: "Kundin dokoki: littafin dokokinku", bullets: ["Yawan 'yan kwamiti, wa'adi, jami'ai", "Taruka, quorum, ƙuri'a", "Ku karanta, ku bi, ku canja ta hanyarsa kawai"] }
          ],
          tryIt: "Ku samo kundin dokokin ƙungiyarku (ko samfuri daga wata ƙungiya mai zaman kanta da kuka sani). Ku nemo yawan 'yan kwamiti, tsawon wa'adi, quorum da yadda ake jefa ƙuri'a. Sannan ku rarraba shawarwari biyar da aka saba yi zuwa kwamiti, ma'aikata ko duka biyu.",
          youCanNow: "raba aikin kwamiti da na ma'aikata a sarari, da nemo muhimman dokoki a kundin dokoki.",
          quickCheck: [
            { objective: "O2", q: "Mene ne kundin dokoki (bylaws)?", options: ["Dokokin haraji na jiha", "Bayanin aikin daraktan zartarwa", "Jerin masu ba da gudummawa", "Littafin dokokin ƙungiya, kamar yawan 'yan kwamiti, wa'adi, quorum da ƙuri'a"], answer: 3, why: "Kundin dokoki su ne dokokin ƙungiya kan yadda kwamiti ke aiki." },
            { objective: "O2", q: "Shugaban kwamiti ya fara gaya wa ma'aikatan shirye-shirye yadda za su yi kowane aikin yau da kullum. Mene ne matsalar?", options: ["Babu; shugaba ne ke gudanar da aikin yau da kullum", "Kwamiti yana shiga ƙananan abubuwan aikin ma'aikata; aikin yau da kullum na ma'aikata ne ƙarƙashin daraktan zartarwa", "Shugaba ya kamata ya biya albashi ma", "Ma'aikata ne ya kamata su jefa ƙuri'a kan kasafin kuɗi"], answer: 1, why: "Kwamiti yana ba da alkibla kuma yana sa ido; ma'aikata kuma suna yin aikin yau da kullum." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Tarukan kwamiti da bayanan taro",
          minutes: 5,
          goal: "Gudanar da taron kwamiti da ke bin kundin dokoki da rubuta bayanan taro a sarari.",
          text: [
            "Ku aika ajanda da rahotanni aƙalla 'yan kwanaki kafin taro don 'yan kwamiti su shirya. Kwamitoci da yawa suna amfani da ajandar amincewa (consent agenda) don abubuwan yau da kullum (kamar amincewa da bayanan taron da ya gabata) don su sami lokaci kan manyan tambayoyi.",
            "Ku tabbata akwai quorum kafin jefa ƙuri'a. Don kowace shawara, wani yana gabatar da ita (motion), kwamiti yana tattaunawa, sannan shugaba yana kiran ƙuri'a. 'Yan kwamitin da ke da cin karo da muradi suna fita daga tattaunawa da ƙuri'a.",
            "Bayanan taro (minutes) su ne rubutaccen tarihin hukuma. Suna lissafa rana, waɗanda suka halarta, ko akwai quorum, kowace shawarar da aka gabatar da sakamakon ƙuri'arta, duk wani cin karo da muradi da aka bayyana, da ayyukan da za a yi tare da wanda zai yi su. Ku sa su gajeru kuma na gaskiya kawai; ba rubutun kowace kalma da aka faɗa ba ne. Ku amince da su a taro na gaba kuma ku ajiye su lafiya."
          ],
          steps: ["Ku aika ajanda da rahotanni kwanaki kafin taro.", "Ku yi amfani da ajandar amincewa don abubuwan yau da kullum.", "Ku tabbatar da quorum kafin kowace ƙuri'a.", "Don kowace shawara: gabatarwa, tattaunawa, ƙuri'a.", "Ku rubuta bayanan taro: rana, halarta, quorum, shawarwari, ƙuri'u, cin karo da muradi, ayyuka.", "Ku amince da bayanan taro a taro na gaba ku ajiye su lafiya."],
          words: [["Bayanan taro (minutes)", "rubutaccen tarihin hukuma na abin da kwamiti ya yanke a taro."], ["Motion", "shawara ta hukuma da aka gabatar don kwamiti ya jefa ƙuri'a a kai."], ["Ajandar amincewa (consent agenda)", "rukunin abubuwan yau da kullum da ake amincewa da su da ƙuri'a ɗaya."]],
          slides: [
            { title: "Kafin taro", bullets: ["Ajanda da rahotanni kwanaki kafin taro", "Ajandar amincewa don abubuwan yau da kullum"] },
            { title: "Yanke shawara", bullets: ["Ku tabbatar da quorum", "Gabatarwa, tattaunawa, ƙuri'a", "Masu cin karo da muradi su fita"] },
            { title: "Abin da bayanan taro ke rubutawa", bullets: ["Rana, halarta da quorum", "Kowace shawara da sakamakon ƙuri'a", "Cin karo da muradi da aka bayyana, ayyuka da masu yinsu"] },
            { title: "Bayanan taro ba rubutun kowace kalma ba ne", bullets: ["Gajeru kuma na gaskiya", "Ana amincewa da su a taro na gaba", "Ana ajiye su lafiya"] }
          ],
          tryIt: "Ku rubuta ajandar taron kwamiti ta shafi ɗaya mai sashen ajandar amincewa da abubuwa biyu na tattaunawa. Sannan ku rubuta samfurin bayanan taro don shawara ɗaya, har da wanda ya gabatar da ita, adadin ƙuri'u da sakamakon.",
          youCanNow: "gudanar da taron kwamiti da ke bin dokoki, da rubuta bayanan taro na hukuma a sarari.",
          quickCheck: [
            { objective: "O3", q: "Mene ne bayanan taron kwamiti?", options: ["Rubutun kowace kalma da aka faɗa", "Tarihin hukuma na taro, gajere kuma na gaskiya", "Ajandar da aka aika kafin taro", "Jerin lambobin wayar 'yan kwamiti"], answer: 1, why: "Bayanan taro su ne tarihin hukuma: waɗanda suka halarta, quorum, shawarwari, ƙuri'u, cin karo da muradi da ayyuka." },
            { objective: "O3", q: "'Yan kwamiti kaɗan ne suka zo, kuma ba ku tabbata ko za ku iya jefa ƙuri'a ba. Me za ku fara dubawa?", options: ["Ko shayi ya shirya", "Ko bayanan taro sun yi tsawo sosai", "Ko ma'aikata sun yarda", "Ko akwai quorum bisa kundin dokoki"], answer: 3, why: "Kwamiti zai iya yanke shawara ne kawai idan akwai quorum." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Abin da kwamitin gudanarwa ke yi",
        questions: [
          { objective: "O1", q: "Wane aiki ne ke nufin karanta rahotanni da yin tambayoyi kafin ku jefa ƙuri'a?", options: ["Aikin aminci", "Aikin biyayya", "Aikin kulawa", "Aikin yin shiru"], answer: 2, why: "Kulawa tana nufin yanke shawara da cikakken bayani da kuma a hankali." },
          { objective: "O1", q: "Wani ɗan kwamiti yana son ƙungiyar ta yi hayar wuri daga kamfaninsa da tsada. Wane aiki ne ke cikin haɗari?", options: ["Aikin aminci", "Aikin kulawa", "Aikin biyayya", "Babu"], answer: 0, why: "Aminci yana nufin sa ƙungiya gaba da muradinku." },
          { objective: "O2", q: "A ƙungiya mai ma'aikata masu albashi, wane ne yawanci ke ɗaukar daraktan zartarwa aiki?", options: ["Sabon ɗan sa-kai", "Daraktan zartarwa da kansa", "Wani mai ba da gudummawa", "Kwamitin gudanarwa"], answer: 3, why: "Ɗaukar daraktan zartarwa da tantance aikinsa babban aikin kwamiti ne." },
          { objective: "O3", q: "Mene ne quorum?", options: ["Asusun bankin kwamiti", "Mafi ƙarancin adadin 'yan kwamiti da dole su halarta don yanke shawara", "Wani irin motion", "Kasafin kuɗin shekara"], answer: 1, why: "Ba tare da quorum ba, ƙuri'ar kwamiti ba ta da inganci." },
          { objective: "O3", q: "Me ya kamata ya kasance a bayanan taron kwamiti?", options: ["Kowace kalma da kowa ya faɗa", "Barkwancin da aka yi a taro", "Kowace shawara da aka gabatar da sakamakon ƙuri'a", "Adireshin gidajen 'yan kwamiti"], answer: 2, why: "Bayanan taro suna rubuta shawarwari, ba kowace kalma ba." }
        ]
      }
    },
    {
      name: "Babi na 2: Sa ido da gina kwamiti",
      lessons: [
        {
          objectives: ["O4"],
          title: "Magance cin karo da muradi",
          minutes: 5,
          goal: "Bin matakai a sarari idan ɗan kwamiti yana da cin karo da muradi.",
          text: [
            "Cin karo da muradi (conflict of interest) yana faruwa idan ɗan kwamiti, ko iyalinsa ko kasuwancinsa, zai iya amfana daga wata shawara da kwamiti zai yanke. Irin wannan abu ya zama ruwan dare a ƙananan al'ummomi kuma ba koyaushe laifi ba ne, amma dole a magance shi a fili.",
            "Yawancin kwamitoci suna da rubutacciyar manufar cin karo da muradi kuma suna neman 'yan kwamiti su sa hannu a fom ɗin bayyanawa kowace shekara. Idan cin karo da muradi ya taso: ɗan kwamitin yana faɗa wa kwamiti, yana fita daga tattaunawa da ƙuri'a, sannan kwamiti yana yanke ko cinikin yana da adalci ga ƙungiyar, zai fi kyau bayan an kwatanta wasu zaɓuɓɓuka. Bayanan taro suna rubuta duk wannan.",
            "Misali: ɗan uwan ma'aji yana da shagon bugu da ke neman kwangilar buga rahoton shekara. Ma'ajin ya bayyana hakan ya fita; kwamiti ya kwatanta farashi uku ya zaɓi mafi kyau. Ciniki da mutanen cikin ƙungiya zai iya kawo matsalar haraji da ta shari'a, don haka ku nemi shawarar lauya ko akanta kan duk wani babban ciniki."
          ],
          steps: ["Ku amince da rubutacciyar manufar cin karo da muradi.", "Ku karɓi fom ɗin bayyanawa da aka sa hannu daga kowane ɗan kwamiti kowace shekara.", "Idan cin karo da muradi ya taso, ɗan kwamitin ya bayyana shi.", "Ɗan kwamitin ya fita daga tattaunawa da ƙuri'a.", "Kwamiti ya duba cewa cinikin yana da adalci, zai fi kyau ta kwatanta zaɓuɓɓuka.", "Ku rubuta duka a bayanan taro; ku nemi shawara kan manyan cinikai."],
          words: [["Cin karo da muradi (conflict of interest)", "idan muradin mutum zai iya shafar shawarar da yake yankewa don ƙungiya."], ["Bayyanawa (disclosure)", "faɗa wa kwamiti a fili game da yiwuwar cin karo da muradi."], ["Recuse (janyewa)", "fita daga tattaunawa da ƙuri'a saboda cin karo da muradi."]],
          slides: [
            { title: "Mene ne cin karo da muradi", bullets: ["Ɗan kwamiti, iyalinsa ko kasuwancinsa zai iya amfana", "Ya zama ruwan dare, ba koyaushe laifi ba ne", "Dole a magance shi a fili"] },
            { title: "Manufa da bayyanawa kowace shekara", bullets: ["Rubutacciyar manufar cin karo da muradi", "Fom ɗin bayyanawa da aka sa hannu kowace shekara"] },
            { title: "Idan ya taso", bullets: ["Bayyanawa", "Fita daga tattaunawa da ƙuri'a", "Kwamiti ya duba cewa cinikin yana da adalci", "A rubuta shi a bayanan taro"] }
          ],
          tryIt: "Ku rubuta matakai biyar da kwamitinku zai bi idan cin karo da muradi ya taso, da kalmomi masu sauƙi. Sannan ku yi amfani da su kan wannan misali: matar ko mijin wani ɗan kwamiti yana son sayar wa ƙungiyar wata mota ƙirar van da aka yi amfani da ita.",
          youCanNow: "magance cin karo da muradi ta hanyar bayyanawa, janyewa, dubawa cikin adalci da rubutaccen tarihi.",
          quickCheck: [
            { objective: "O4", q: "Yaushe cin karo da muradi ke faruwa?", options: ["Idan ɗan kwamiti, iyalinsa ko kasuwancinsa zai iya amfana daga shawarar kwamiti", "Idan 'yan kwamiti biyu ba su yarda ba", "Idan taro ya daɗe", "Idan kasafin kuɗi ya yi ƙaranci"], answer: 0, why: "Cin karo da muradi yana nan idan wani a kwamiti zai iya amfana da kansa daga shawarar." },
            { objective: "O4", q: "'Yar uwar wani ɗan kwamiti tana da kamfanin dafa abinci da ke neman kwangilar bikin ƙungiyarku. Me zai faru a gaba?", options: ["Ɗan kwamitin ya jefa ƙuri'a, tun da iyali na taimakawa", "A ɓoye shi daga bayanan taro", "Ɗan kwamitin ya bayyana shi ya fita, kuma kwamiti ya kwatanta farashi", "A soke bikin"], answer: 2, why: "Ɗan kwamitin yana bayyanawa yana fita daga tattaunawa da ƙuri'a, kuma kwamiti yana duba cewa cinikin yana da adalci." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Sa ido kan kuɗi, Form 990 da rajistar jiha",
          minutes: 6,
          goal: "Duba harkokin kuɗin ƙungiya a matsayin ɗan kwamiti da sa takardun da ake mikawa kowace shekara a kalanda.",
          text: [
            "Kowane ɗan kwamiti, ba ma'aji kaɗai ba, ya kamata ya fahimci abubuwan asali: kasafin kuɗin da aka amince da shi, rahotanni na kai-a-kai da ke kwatanta ainihin kuɗin shiga da kashewa da kasafin kuɗi, takardar daidaito (balance sheet: abin da ƙungiyar ta mallaka da abin da take bi bashi), kuɗin da ke hannu, da duk wata kyautar da aka ƙayyade (restricted gift) da dole a yi amfani da ita don wani takamaiman dalili. Ku yi tambaya idan lambobi sun canja sosai. Ku yi amfani da matakan kariya kamar mutum biyu su shiga cikin biyan kuɗi, da bincike ko audit daga waje idan girman ƙungiyar ya buƙaci hakan.",
            "Yawancin ƙungiyoyin da ba sa biyan haraji dole su mika takardar shekara ga IRS daga jerin Form 990. IRS ta ce ƙungiyoyin da kuɗin shigarsu (gross receipts) yawanci $50,000 ne ko ƙasa da haka za su iya mika Form 990-N e-Postcard; waɗanda kuɗin shigarsu bai kai $200,000 ba kuma jimillar kadarorinsu ba ta kai $500,000 ba za su iya mika Form 990-EZ ko Form 990; manya kuma suna mika Form 990. Ranar ƙarshe ita ce rana ta 15 ga wata na 5 bayan ƙarshen shekarar kuɗi (May 15 don shekarar da ke ƙarewa December 31). IRS ta ce ƙungiyoyin da ba su mika ba har shekaru uku a jere suna rasa matsayinsu na rashin biyan haraji kai tsaye. Dole kuma a bar jama'a su ga waɗannan takardu. Iyakoki da dokoki suna iya canjawa, don haka ku duba irs.gov kowace shekara. Coci-coci da wasu ƙungiyoyi suna da dokoki daban.",
            "Jihohi suna da nasu dokokin. A California, Registry of Charities and Fundraisers na Babban Lauyan Jiha (Attorney General) yana buƙatar ƙungiyoyin agaji su yi rajista kuma su mika rahotanni na shekara, sai 'yan kaɗan da aka keɓe. Ku duba oag.ca.gov/charities don fom-fom da kuɗaɗe na yanzu. Sauran jihohi suna da nasu ofisoshin ƙungiyoyin agaji. Ku sa akanta ya taimaka wajen shirya takardun, kuma kwamiti ya duba su kafin a mika su."
          ],
          steps: ["Ku amince da kasafin kuɗin shekara.", "Ku duba rahotannin kasafi da ainihin kashewa a kowane taro.", "Ku duba kuɗin da ke hannu, takardar daidaito da kyaututtukan da aka ƙayyade.", "Ku yi amfani da matakan kariya: mutum biyu a biyan kuɗi; bincike daga waje idan ana buƙata.", "Ku sa ranar ƙarshe ta Form 990 a kalanda; ku tabbatar da irin fom ɗin a irs.gov.", "Ku sa takardun jiha a kalanda (California: oag.ca.gov/charities).", "Ku duba takardun kafin a aika su; ku nemi taimakon akanta."],
          words: [["Kasafi da ainihi (budget versus actual)", "rahoton da ke kwatanta kuɗin shiga da kashewa da aka tsara da abin da ya faru da gaske."], ["Takardar daidaito (balance sheet)", "rahoton abin da ƙungiya ta mallaka da abin da take bi bashi a wata rana."], ["Kyautar da aka ƙayyade (restricted gift)", "gudummawar da dole a yi amfani da ita don wani takamaiman dalili."], ["Form 990", "takardar bayani ta shekara ta IRS don yawancin ƙungiyoyin da ba sa biyan haraji."], ["Registry of Charities and Fundraisers", "ofishin Babban Lauyan Jihar California inda ƙungiyoyin agaji ke rajista da mika rahotanni na shekara."]],
          slides: [
            { title: "Abin da kowane ɗan kwamiti ke dubawa", bullets: ["Kasafin kuɗi da kasafi da ainihi", "Takardar daidaito da kuɗin da ke hannu", "Kyaututtukan da aka ƙayyade"] },
            { title: "Matakan kariya", bullets: ["Mutum biyu a cikin biyan kuɗi", "Bincike ko audit daga waje idan girma ya buƙata", "Ku tambaya idan lambobi sun canja sosai"] },
            { title: "Jerin Form 990 na IRS (ku duba irs.gov)", bullets: ["990-N: kuɗin shiga yawanci $50,000 ko ƙasa da haka", "990-EZ: kuɗin shiga < $200,000 kuma kadarori < $500,000", "990: manyan ƙungiyoyi", "Rana ta 15 ga wata na 5; shekaru 3 ba a mika ba = an rasa keɓancewa"] },
            { title: "Dokokin jiha", bullets: ["California: rajista da AG Registry of Charities", "Mika rahotanni na shekara; duba oag.ca.gov/charities", "Ku sami akanta; kwamiti ya duba kafin a mika"] }
          ],
          sources: [
            { name: "IRS: Jerin Form 990, waɗanne fom ƙungiyoyin da aka keɓe daga haraji ke mikawa", url: "https://www.irs.gov/charities-non-profits/form-990-series-which-forms-do-exempt-organizations-file-filing-phase-in" },
            { name: "IRS: Ranakun ƙarshe na mika takardun ƙungiyoyin da aka keɓe daga haraji", url: "https://www.irs.gov/charities-non-profits/return-due-dates-for-exempt-organizations-annual-return" },
            { name: "IRS: Soke keɓancewa kai tsaye", url: "https://www.irs.gov/charities-non-profits/automatic-revocation-of-exemption" },
            { name: "IRS: Bayyana takardun ƙungiyoyin da aka keɓe daga haraji ga jama'a", url: "https://www.irs.gov/charities-non-profits/public-disclosure-and-availability-of-exempt-organizations-returns-and-applications-documents-subject-to-public-disclosure" },
            { name: "Babban Lauyan Jihar California: Registry of Charities and Fundraisers", url: "https://oag.ca.gov/charities" },
            { name: "Jagorar Babban Lauyan Jihar California ga Ƙungiyoyin Agaji (PDF)", url: "https://oag.ca.gov/system/files/media/Guide%20for%20Charities.pdf" }
          ],
          tryIt: "Ku nemo wata ƙungiya mai zaman kanta da kuka sani a wani rumbun bayanai na jama'a ko a rahotonta na shekara. Ku rubuta kimanin kuɗin shigarta na shekara ku yanke wace irin Form 990 take yiwuwa ta mika, sannan ku tabbatar da dokar a irs.gov. Ku rubuta ranar ƙarshe ta Form 990 ɗinta, kuma idan tana California, ranar sabunta rajistarta ta Registry, a kalandar shekara.",
          youCanNow: "duba harkokin kuɗin ƙungiya mai zaman kanta a matsayin ɗan kwamiti, da shirya takardun IRS da na jiha da take mikawa kowace shekara.",
          quickCheck: [
            { objective: "O5", q: "Me takardar daidaito (balance sheet) ke nunawa?", options: ["Waɗanda suka zo taro", "Iyakar wa'adin 'yan kwamiti", "Bukukuwan shekara mai zuwa", "Abin da ƙungiyar ta mallaka da abin da take bi bashi"], answer: 3, why: "Takardar daidaito tana nuna abin da ƙungiyar ta mallaka da abin da take bi bashi." },
            { objective: "O5", q: "Shekarar kuɗin ƙungiyarku tana ƙarewa December 31. Me za ku sa a kalandar kwamiti?", options: ["Babu komai; mika takardu ba dole ba ne", "Ranar ƙarshe ta Form 990, May 15, bayan tabbatar da irin fom ɗin a irs.gov", "Tunatarwar mikawa duk bayan shekaru biyar", "Bikin hutu kawai"], answer: 1, why: "Ranar ƙarshe ita ce rana ta 15 ga wata na 5 bayan ƙarshen shekara, kuma ana tabbatar da irin fom ɗin a irs.gov." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Neman sababbin 'yan kwamiti da maraba da su",
          minutes: 5,
          goal: "Yi amfani da jadawalin ƙwarewa don neman 'yan kwamitin da ƙungiyarku ke buƙata.",
          text: [
            "Ku nemi mutane da gangan, ba daga abokai kawai ba. Ku yi jadawalin ƙwarewa (skills grid): ku jera ƙwarewa da alaƙoƙin da kwamitinku ke buƙata (misali kuɗi, shari'a, tara kuɗi, al'ummar da kuke yi wa hidima, fasaha) ku sa alama kan waɗanda 'yan kwamitin yanzu ke da su. Giɓin da ke akwai yana nuna muku wanda za ku nema. Ku haɗa da mutanen da suka fuskanci matsalar da kuke aiki a kai a rayuwarsu.",
            "Ku faɗi gaskiya game da aikin: taruka nawa, waɗanne kwamitoci, lokaci nawa, da ko ana sa ran za su ba da kuɗi ko su taimaka wajen tara kuɗi, idan akwai hakan. Ku gana da masu neman kujera fiye da sau ɗaya, ku sa su halarci taro, kuma ku tambayi waɗanda suka san su. Ku zaɓe su ta hanyar da ke cikin kundin dokokinku.",
            "Ku yi wa sababbin 'yan kwamiti maraba da horon farko (orientation): manufa, kundin dokoki, kasafin kuɗi da sabon rahoton kuɗi, bayanan taruka na kwanan nan, manufar cin karo da muradi don su sa hannu, da abokin rakiya a kwamiti. Ku tantance aikin kwamitin da kansa kowace shekara, kuma ku yi amfani da iyakar wa'adi don sababbin mutane su ci gaba da shiga."
          ],
          steps: ["Ku yi jadawalin ƙwarewa; ku nemo giɓi.", "Ku duba fiye da abokai; ku haɗa da masu gogewa a rayuwa.", "Ku rubuta bayanin aikin da lokacinsa da gaskiya.", "Ku gana da masu neman kujera, ku gayyace su taro, ku tambayi waɗanda suka san su.", "Ku zaɓe su ta hanyar kundin dokoki.", "Ku yi horon farko ku ba da abokin rakiya a kwamiti.", "Ku tantance kwamitin kowace shekara."],
          words: [["Jadawalin ƙwarewa (skills grid)", "tebur na ƙwarewar da kwamiti ke buƙata da 'yan kwamitin da ke da su."], ["Horon farko (orientation)", "maraba da horon da sabon ɗan kwamiti ke samu."], ["Iyakar wa'adi (term limit)", "iyakar adadin wa'adin da mutum zai iya yi a jere."]],
          slides: [
            { title: "Ku nemi mutane da gangan", bullets: ["Ku yi jadawalin ƙwarewa", "Ku nemo giɓi", "Ku duba fiye da abokai; ku haɗa da masu gogewa a rayuwa"] },
            { title: "Ku faɗi gaskiya game da aikin", bullets: ["Taruka, kwamitoci, lokaci", "Abin da ake sa rai na ba da kuɗi ko tara kuɗi", "Ku gana fiye da sau ɗaya, ku tambayi waɗanda suka san su"] },
            { title: "Ku yi musu maraba da kyau", bullets: ["Kundin horon farko: manufa, kundin dokoki, kuɗi, bayanan taro", "Su sa hannu a manufar cin karo da muradi", "Ku ba su abokin rakiya a kwamiti"] },
            { title: "Ku sabunta kwamitin", bullets: ["Ku tantance kwamitin kowace shekara", "Ku yi amfani da iyakar wa'adi"] }
          ],
          tryIt: "Aikin ƙarshe: ku yi jerin abubuwan dubawa na shafi ɗaya game da shugabanci. Ku sa ayyuka uku, rabon kwamiti da ma'aikata don shawarwari biyar, ajandar taro da samfurin bayanan taro, matakan cin karo da muradi, kalandar shekara ta takardu da kuɗi, da shirin neman mutane don kujeru biyu daga jadawalin ƙwarewa.",
          youCanNow: "nema da maraba da 'yan kwamitin da ke cike giɓi na gaske, da kiyaye lafiyar kwamitin shekara bayan shekara.",
          quickCheck: [
            { objective: "O2", q: "Me jadawalin ƙwarewa ke nunawa?", options: ["Ranakun haihuwar 'yan kwamiti", "Jadawalin taruka", "Ƙwarewa da alaƙoƙin da kwamiti ke buƙata, da 'yan kwamitin da ke da su", "Kasafin kuɗin shekara"], answer: 2, why: "Jadawalin ƙwarewa yana nuna giɓi, wanda ke faɗa muku wanda za ku nema." },
            { objective: "O2", q: "Jadawalinku ya nuna babu wanda ke da ƙwarewar kuɗi. Mene ne mataki mai kyau na gaba?", options: ["Ku duba fiye da abokai don neman mai ƙwarewar kuɗi, ku gana da shi ku gayyace shi taro", "Ku tambayi babban abokinku, ko da wace irin ƙwarewa yake da ita", "Ku bar giɓin; ba komai ba ne", "Ku sa ma'aji ya yi komai"], answer: 0, why: "Ku nemi mutane da gangan don cike giɓi, kuma ku gana da masu neman kujera ku sa su halarci taro tukuna." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Sa ido da gina kwamiti",
        questions: [
          { objective: "O4", q: "Wani ɗan kwamiti yana da cin karo da muradi kan wata kwangila. Me ya kamata ya yi?", options: ["Ya fara jefa ƙuri'a, sannan ya ambata", "Ya bayyana shi ya fita daga tattaunawa da ƙuri'a", "Ya yi shiru", "Ya bar kwamitin"], answer: 1, why: "Bayyanawa da janyewa suna bar kwamiti ya yanke shawara cikin adalci." },
          { objective: "O5", q: "Wane rahoto ne ke kwatanta kuɗin shiga da kashewa da aka tsara da na gaske?", options: ["Kasafi da ainihi (budget versus actual)", "Bayanan taro", "Kundin dokoki", "Jadawalin ƙwarewa"], answer: 0, why: "Kasafi da ainihi yana nuna inda tsari da gaskiya suka bambanta." },
          { objective: "O5", q: "Bisa ga IRS, waɗanne ƙananan ƙungiyoyi ne za su iya mika Form 990-N e-Postcard?", options: ["Kowace ƙungiya kwata-kwata", "Waɗanda kuɗin shigarsu yawanci $50,000 ne ko ƙasa da haka", "Coci-coci kaɗai", "Waɗanda kadarorinsu sun fi $1 million"], answer: 1, why: "IRS ta sa iyakar 990-N a kuɗin shiga da yawanci $50,000 ne ko ƙasa da haka." },
          { objective: "O5", q: "Me ke faruwa idan ƙungiya ba ta mika takardarta ta shekara da ake buƙata ba har shekaru uku a jere?", options: ["Babu komai", "Tana samun wasiƙar gargaɗi kawai", "Dole ta canja sunanta", "Tana rasa matsayinta na rashin biyan haraji kai tsaye"], answer: 3, why: "IRS ta ce ana soke keɓancewa kai tsaye." },
          { objective: "O2", q: "Kayan aiki na farko mai amfani don neman 'yan kwamiti shi ne:", options: ["Jadawalin ƙwarewa", "Jerin abokanku kawai", "Caca", "Bangon gaban kundin dokoki"], answer: 0, why: "Jadawalin yana nuna ƙwarewar da babu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Shugabancin Kwamitin Gudanarwa na Ƙungiya Mai Zaman Kanta",
    questions: [
      { objective: "O1", q: "Wane aiki ne ke nufin kiyaye ƙungiya bisa manufarta da dokar ƙasa?", options: ["Aikin kulawa", "Aikin aminci", "Aikin biyayya", "Aikin gaggawa"], answer: 2, why: "Biyayya tana nufin manufa, kundin dokoki da dokar ƙasa." },
      { objective: "O1", q: "Wani ɗan kwamiti bai karanta kasafin kuɗi ba amma ya jefa ƙuri'ar e. Wane aiki ne ya fi rauni?", options: ["Aikin kulawa", "Aikin aminci", "Aikin biyayya", "Babu; ba komai"], answer: 0, why: "Kulawa tana buƙatar yanke shawara da cikakken bayani." },
      { objective: "O1", q: "Ayyuka uku na kwamiti na wane ne?", options: ["Shugaba kaɗai", "Ma'aji kaɗai", "Ma'aikata masu albashi kaɗai", "Kowane ɗan kwamiti"], answer: 3, why: "Kowane ɗan kwamiti yana ɗauke da ayyukan." },
      { objective: "O2", q: "A ƙungiya mai ma'aikata masu albashi, wane ne ke gudanar da shirye-shiryen yau da kullum?", options: ["Shugaban kwamiti", "Ma'aikata, ƙarƙashin daraktan zartarwa", "Masu ba da gudummawa", "IRS"], answer: 1, why: "Ma'aikata suna yin aikin yau da kullum; kwamiti yana sa ido." },
      { objective: "O2", q: "Kwamiti yana jefa ƙuri'ar e kan komai ba tare da tambaya ba. Ana kiran wannan:", options: ["Shugabanci nagari", "Shiga ƙananan abubuwan aikin ma'aikata", "Amincewa da komai kawai (rubber-stamping)", "Janyewa"], answer: 2, why: "Amincewa da komai kawai yana karya aikin kulawa." },
      { objective: "O2", q: "A ina za ku sami yawan 'yan kwamitinku, wa'adi da dokokin ƙuri'a?", options: ["Kundin dokoki (bylaws)", "Form 990-N", "Wasiƙar mai ba da gudummawa", "Jarida"], answer: 0, why: "Kundin dokoki shi ne littafin dokokin ƙungiya." },
      { objective: "O3", q: "Kafin kwamiti ya jefa ƙuri'a, shugaba ya kamata ya tabbatar:", options: ["Kowa ya yarda", "Akwai quorum", "'Yan jarida suna nan", "Ƙuri'ar sirri ce"], answer: 1, why: "Shawarwari suna buƙatar quorum don su yi inganci." },
      { objective: "O3", q: "Ana amfani da ajandar amincewa (consent agenda) don:", options: ["Manyan muhawarori kan dabaru", "Korar darakta", "Cin karo da muradi", "Abubuwan yau da kullum da ake amincewa da su da ƙuri'a ɗaya"], answer: 3, why: "Tana adana lokaci don muhimman batutuwa." },
      { objective: "O3", q: "Bayanan taron kwamiti ya kamata su zama:", options: ["Gajeru, na gaskiya, kuma ana amincewa da su a taro na gaba", "Rubutun kowace kalma", "Sirri ga kwamiti", "Ana rubuta su ne kawai idan akwai lokaci"], answer: 0, why: "Bayanan taro suna rubuta shawarwari kuma ana amincewa da su a hukumance." },
      { objective: "O4", q: "Ya kamata a sa hannu a fom ɗin bayyana cin karo da muradi:", options: ["Ba a taɓa ba", "Sai an kama mutum kawai", "Kowace shekara, kowane ɗan kwamiti", "Ma'aikata kaɗai"], answer: 2, why: "Bayyanawa kowace shekara tana sa cin karo da muradi ya kasance a fili." },
      { objective: "O4", q: "Matar ko mijin wani ɗan kwamiti yana son sayar wa ƙungiyar mota ƙirar van. Kwamiti ya kamata ya:", options: ["Saye ta ko da wane farashi", "Sa ɗan kwamitin ya bayyana ya fita, sannan ya duba cewa cinikin yana da adalci", "Bar ɗan kwamitin ya yanke shawara", "Ɓoye shi daga bayanan taro"], answer: 1, why: "Bayyanawa, janyewa, dubawa cikin adalci da rubutawa." },
      { objective: "O4", q: "\"Recuse\" (janyewa) yana nufin:", options: ["Fita daga tattaunawa da ƙuri'a saboda cin karo da muradi", "Barin aiki har abada", "Amincewa da kasafin kuɗi", "Kiran taro"], answer: 0, why: "Janyewa yana kiyaye adalcin shawara." },
      { objective: "O5", q: "Kyautar da aka ƙayyade (restricted gift) ita ce:", options: ["Kyautar da kwamiti zai iya kashewa kan komai", "Bashi", "Kyautar da dole a yi amfani da ita don wani takamaiman dalili", "Kyautar da aka ƙi karɓa"], answer: 2, why: "Masu ba da gudummawa suna sa sharuɗɗa da dole ƙungiya ta mutunta." },
      { objective: "O5", q: "Matakin kariya mai kyau na kuɗi shi ne:", options: ["Mutum ɗaya yana kula da duk kuɗi shi kaɗai", "Babu rahotanni", "Biyan kuɗi da tsabar kuɗi kawai", "Mutum biyu a cikin biyan kuɗi"], answer: 3, why: "Mutum biyu suna rage haɗarin kuskure da sata." },
      { objective: "O5", q: "Bisa ga IRS, ƙungiyar da kuɗin shigarta bai kai $200,000 ba kuma jimillar kadarorinta ba ta kai $500,000 ba za ta iya mika:", options: ["Form 990-EZ ko Form 990", "Form 990-PF kaɗai", "Ba za ta taɓa mika takarda ba", "Form 1040"], answer: 0, why: "IRS tana ba da damar 990-EZ ko 990 a wannan matakin." },
      { objective: "O5", q: "Don ƙungiyar da shekarar kuɗinta ke ƙarewa December 31, ranar ƙarshe ta Form 990 ita ce:", options: ["January 1", "April 1", "May 15", "December 31"], answer: 2, why: "Ranar ƙarshe ita ce rana ta 15 ga wata na 5 bayan ƙarshen shekara." },
      { objective: "O5", q: "Shin ana ɓoye takardun Form 990 daga jama'a?", options: ["E, koyaushe", "A'a; dole a bar jama'a su gan su", "Shafin farko kaɗai ne na jama'a", "Masu ba da gudummawa kaɗai ne za su gan su"], answer: 1, why: "IRS tana buƙatar a bar jama'a su ga takardun shekara." },
      { objective: "O5", q: "A California, ƙungiyoyin agaji suna rajista da mika rahotanni na shekara a:", options: ["DMV (ofishin motoci)", "Bikin baje-kolin gunduma", "FAA (hukumar jiragen sama)", "Registry of Charities and Fundraisers na Babban Lauyan Jiha"], answer: 3, why: "Registry na Babban Lauyan Jiha ne ke kula da rajistar ƙungiyoyin agaji a California." },
      { objective: "O5", q: "A ina 'yan kwamiti ya kamata su tabbatar da dokokin mika takardu na yanzu kowace shekara?", options: ["Shafukan hukuma kamar irs.gov da ofishin ƙungiyoyin agaji na jiharsu", "Wani shafin blog kawai", "Abin da suka tuna daga bara", "Tsammanin aboki"], answer: 0, why: "Dokoki suna canjawa; majiyoyin hukuma su ne na yanzu." },
      { objective: "O2", q: "Sabon ɗan kwamiti ya kamata ya samu:", options: ["Babu komai; zai gane da kansa", "Riga kawai", "Horon farko mai manufa, kundin dokoki, kuɗi, bayanan taro da manufar cin karo da muradi", "Kalmomin sirrin daraktan zartarwa"], answer: 2, why: "Horon farko yana shirya 'yan kwamiti su cika ayyukansu." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      1,
      3,
      5,
      6,
      8,
      10,
      11,
      14,
      15
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Ayyuka uku",
        objective: "O1",
        notYet: "Wani aiki ya ɓace ko an bayyana shi ba daidai ba.",
        meets: "An bayyana kulawa, aminci da biyayya kowanne da kalmomi masu sauƙi.",
        exceeds: "Kowane aiki yana da misali na gaske na kiyaye shi da na karya shi."
      },
      {
        name: "Matsayi da neman 'yan kwamiti",
        objective: "O2",
        notYet: "Ba a rarraba shawarwari ba, ko an nemi mutane daga abokai kawai.",
        meets: "An rarraba shawarwari biyar zuwa kwamiti, ma'aikata ko duka biyu, kuma an haɗa kujeru biyu da babu kowa da giɓi a jadawalin ƙwarewa.",
        exceeds: "An kuma rubuta dokokin kundin dokoki da kwamiti ba ya bi, da shirin horon farko don sababbin 'yan kwamiti."
      },
      {
        name: "Taruka da bayanan taro",
        objective: "O3",
        notYet: "Babu ajanda, ko bayanan taro ba su da quorum, shawarwari ko ƙuri'u.",
        meets: "Ajanda mai ajandar amincewa da samfurin bayanan taro mai kowane sashe da ake buƙata.",
        exceeds: "Samfurin bayanan taro don shawara ɗaya da wanda ya gabatar da ita, adadin ƙuri'u da sakamakon."
      },
      {
        name: "Cin karo da muradi",
        objective: "O4",
        notYet: "Wasu matakai sun ɓace ko ba bisa tsari ba.",
        meets: "Bayyanawa, fita, duba cewa cinikin yana da adalci, da rubuta shi, bisa tsari.",
        exceeds: "Ya kuma haɗa da fom ɗin bayyanawa na shekara da aka sa hannu da lokacin neman shawarar lauya."
      },
      {
        name: "Kalandar kuɗi da mika takardu",
        objective: "O5",
        notYet: "Babu irin Form 990 ko ranar ƙarshe, ko babu takardar jiha.",
        meets: "Binciken kasafin kuɗi, irin Form 990 daidai da ranar ƙarshe, da duk wata rajistar jiha, an tabbatar da su a shafukan hukuma.",
        exceeds: "Ya kuma lissafa matakan kariya na kuɗi kamar mutum biyu a biyan kuɗi, kuma ya faɗi inda aka duba kowace doka."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Kwamitocin da suka amince da rubutacciyar manufar cin karo da muradi da fom ɗin bayyanawa na shekara cikin kwanaki 90",
      "Ƙungiyoyin da suka mika Form 990 da rahotannin jiha a kan lokaci a shekara mai zuwa",
      "Kwamitocin da suka cike kujerun da babu kowa ta amfani da jadawalin ƙwarewa kuma suka yi horon farko don sababbin 'yan kwamiti"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta ko waya mai intanet don duba irs.gov da ofishin ƙungiyoyin agaji na jiha",
      "Kundin dokokin ƙungiyarku, sabon rahoton kasafin kuɗi da bayanan taruka na kwanan nan, ko samfuransu",
      "Takarda ko wani daftari don jerin abubuwan dubawa na shafi ɗaya",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku yi shi a matsayin zaman taron kwamiti na musamman (retreat): 'yan kwamiti su yi jerin abubuwan dubawa tare ta amfani da kundin dokokinsu da rahotanninsu.",
      "Ku tunatar da rukunin cewa wannan ilimi ne na gama-gari, ba shawarar shari'a ko ta haraji ba; ku kai manyan tambayoyi ga lauya ko akanta mai sanin ƙungiyoyi masu zaman kansu.",
      "Ku sa masu koyo su tabbatar da iyakokin Form 990 da dokokin jiha a shafukan hukuma a lokacin zaman, tun da suna iya canjawa.",
      "Ku yi wasan kwaikwayo don matakan cin karo da muradi don 'yan kwamiti su gwada fita daga ƙuri'a.",
      "Ku ba da maki ga jerin abubuwan dubawa da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

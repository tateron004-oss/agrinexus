"use strict";

// Koach Learn course, Hausa (ha) translation of underserved/underserved-ai-community-daily-life.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "underserved-ai-community-daily-life-ha",
  lang: "ha",
  translationOf: "underserved-ai-community-daily-life",
  category: "Undeserved Community",
  name: "AI don Al'umma da Rayuwar Yau da Kullum",
  skills: "Tsara makon iyali, Yin tsarin abinci bisa kasafin kuɗi, Nemo da tabbatar da taimakon gida, Gudanar da taron al'umma, Rubuta saƙonnin ƙungiya a sarari",
  outcome: "amfani da mataimakin AI kyauta don tsara rayuwar yau da kullum da aikin al'umma: tsara makon iyalinku da abincinsu bisa kasafin kuɗi, nemo taimako a yankinku ku tabbatar da shi, da shirya ƙaramin taron al'umma mai ajanda, saƙon tunatarwa da jerin wuraren taimako.",
  about: [
    "Rayuwa tana cike da ayyuka: aikin shift, ɗauko yara daga makaranta, ganawa, coci ko masallaci, wasanni, da taimakon maƙwabta. Mataimakin AI kyauta zai iya ɗauke muku wani ɓangare na tsarawa.",
    "A Babi na 1 za ku tsara makon iyali da tsarin abinci bisa kasafin kuɗi, ku kuma nemo taimako a yankinku idan kuɗi ya yi ƙaranci. A Babi na 2 za ku yi amfani da AI don haɗa al'ummarku: ajandar taro, saƙonnin ƙungiya masu sarari da jerin wuraren taimako na yankinku.",
    "Kowane darasi yana ɗaukar kusan minti biyar, kuma yana ƙarewa da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku shirya ƙaramin taro don wata ƙungiya da kuke ciki (ƙungiyar unguwa, ƙungiyar iyaye, ƙungiyar addini ko ƙungiyar masu haya). Ku yi amfani da mataimakin AI don rubuta ajanda mai shafi ɗaya da gajeren saƙon tunatarwa, sannan ku yi jerin wuraren taimako uku na yankinku (misali abinci, kuɗin wuta da ruwa, da taimakon neman aiki) waɗanda kuka tabbatar da su da kanku a shafukan hukuma ko ta 211.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya a al'ummomin da ba a kula da su sosai ba, waɗanda ke haɗa aiki, iyali da ayyukan al'umma: iyaye, masu kula da wasu, da membobi ko shugabannin ƙungiyoyin unguwa, ƙungiyoyin iyaye, ƙungiyoyin addini da ƙungiyoyin masu haya.",
    startingPoint: "Suna amfani da waya don kira, tes da wasu manhajoji (apps), kuma suna tsara makonsu a zuciya ko a takarda. Kaɗan ne suka taɓa amfani da mataimakin AI don tsarawa, kuma da yawa ba su san 211 ba.",
    gap: "Iyalai masu yawan ayyuka suna mantawa da ganawa, suna kashe kuɗi fiye da kima a abinci, kuma suna sha wahalar nemo taimako a yankinsu; ƙungiyoyin al'umma kuma suna ɓata lokaci a tarurrukan da ba a tsara ba. Mataimakin AI kyauta zai iya ɗaukar aikin tsarawa, amma dole masu koyo su yi amfani da shi lafiya kuma su tabbatar da duk abin da ya faɗa game da shirye-shiryen taimako na yankinsu.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 5 zuwa 6)",
      "Na'urori: wayar zamani (smartphone) ko kwamfutar ɗakin karatu",
      "Kuɗi: kayan aiki kyauta kaɗai",
      "AI bai san farashin yau ba, ko waɗanne shirye-shirye ke buɗe; masu koyo suna tabbatarwa ta 211 da majiyoyin hukuma",
      "Sirri: sunan farko ko matsayi kawai, kuma babu bayanin lafiya ko kuɗi na wasu a cikin prompt"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da mataimakan AI ba za su iya fara ɗaukar kwas ɗin \"Gabatarwa ga AI da Ƙarfafawa a Fasahar Zamani\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da mako mai cike da aikin shift, makaranta da ganawa", action: "amfani da mataimakin AI don mayar da jerinku jadawalin kowace rana da gyara duk wani karo", standard: "ta amfani da sunan farko ko matsayi kawai, kuma ku ne ke yanke shawara ta ƙarshe" },
    { id: "O2", condition: "Idan kun san yawan mutanen gidanku, kasafin kuɗinku da abincin da kuke da shi", action: "yin tsarin abincin dare biyar da jerin kayan cefane tare da mataimakin AI", standard: "kuna kwatanta kuɗin da ainihin farashin shagonku" },
    { id: "O3", condition: "Idan kuna da buƙata ta gaske kamar abinci, kuɗin haya ko kuɗin wuta da ruwa", action: "nemo shirin taimako ɗaya a yankinku ta 211 da tabbatar da shi da majiyar hukuma", standard: "kuna rubuta lambar wayarsa ta hukuma kafin ku je" },
    { id: "O4", condition: "Don wata ƙungiya da kuke ciki", action: "rubuta ajandar taro mai shafi ɗaya tare da mataimakin AI", standard: "mai batutuwa a jere, lokaci, batu mafi muhimmanci a farko, da lokacin tambayoyi" },
    { id: "O5", condition: "Kafin taron ƙungiya da bayansa", action: "rubuta saƙon tunatarwa da mayar da rubutun gaggawa taƙaitaccen bayani mai ayyukan da za a yi", standard: "ba tare da bayanan sirri ba, kuma an tabbatar da shi da wanda ya halarci taron" },
    { id: "O6", condition: "Don buƙatu uku a al'ummarku", action: "yin jerin wuraren taimako mai shafi ɗaya mai lambobin waya na hukuma da lokutan aiki da kuka tabbatar da kanku", standard: "da ranar da kuka tabbatar da shi" }
  ],
  chapters: [
    {
      name: "Babi na 1: AI a gida",
      lessons: [
        {
          objectives: ["O1"],
          title: "Tsara makon iyalinku",
          minutes: 5,
          goal: "Yi amfani da mataimakin AI don mayar da mako mai rikitarwa jadawali mai sarari.",
          text: [
            "Idan aikin shift, makaranta, ganawa da zirga-zirga suka taru, yana da sauƙi a manta da wani abu. Mataimakin AI zai iya jera ayyukanku su zama tsari na kowace rana.",
            "Ku rubuta duk abin da za ku yi a wannan makon ba tare da damuwa da jeri ba, tare da lokutan da kuka riga kuka sani. Ku yi amfani da sunan farko ko matsayi (\"babban ɗana\", \"Kaka\") maimakon cikakken suna. Sannan ku tambaya: \"Ka mayar da wannan jadawalin kowace rana. Ka nuna inda akwai karo.\"",
            "Ku nemi karo, wato lokacin da abubuwa biyu suke a lokaci ɗaya. Ku tambayi AI shawarwari, kamar raba mota da wasu ko canja lokacin wani aiki, amma ku ne ke yanke shawara ta ƙarshe."
          ],
          steps: ["Ku rubuta duk ayyukan makon, ba tare da damuwa da jeri ba, tare da lokutan da kuka sani.", "Ku nemi AI ya jera su a jadawalin kowace rana ya nuna karo.", "Ku nemi shawarwari don gyara kowane karo.", "Ku kwafi tsarin ƙarshe zuwa kalandar wayarku ko takarda a jikin firiji."],
          words: [["Jadawali (schedule)", "tsarin da ke nuna abin da zai faru a kowace rana da kuma a wane lokaci."], ["Karo (clash)", "lokacin da aka tsara abubuwa biyu a lokaci ɗaya."]],
          slides: [
            { title: "Abubuwa sun yi yawa a tuna?", bullets: ["Aikin shift, makaranta, ganawa, zirga-zirga", "AI zai iya jera su su zama tsari"] },
            { title: "Yadda ake tambaya", bullets: ["Ku rubuta komai, ba ruwanku da jeri", "Ku yi amfani da sunan farko ko matsayi, ba cikakken suna ba", "\"Ka yi jadawalin kowace rana. Ka nuna karo.\""] },
            { title: "Gyara karo", bullets: ["Ku nemi shawarwari: raba mota, canja lokacin aiki", "Ku ne ke yanke shawara ta ƙarshe", "Ku saka shi a kalandarku ko a jikin firiji"] }
          ],
          tryIt: "Ku rubuta duk abin da gidanku zai yi a wannan makon. Ku nemi mataimakin AI ya mayar da shi jadawalin kowace rana kuma ya nuna duk wani karo.",
          youCanNow: "mayar da mako mai cike da ayyuka jadawali mai sarari da gano karo tun da wuri.",
          quickCheck: [
            { objective: "O1", q: "Me ya kamata ku fara rubutawa idan kuna tsara makonku da AI?", options: ["Duk abin da za ku yi, tare da lokutan da kuka sani", "Cikakkun sunayen iyalinku da ranakun haihuwarsu", "Rana mafi wahala kawai", "Kalmar sirrin aikinku"], answer: 0, why: "AI yana buƙatar dukkan jerinku da lokutan da kuka sani don ya jera su a jadawali." },
            { objective: "O1", q: "AI ya ba da shawarar ku fasa ganin likitan ɗanku don gyara karo. Me za ku yi?", options: ["Ku yi abin da AI ya faɗa", "Ku nemi wasu shawarwari, kamar raba mota, sannan ku zaɓa da kanku", "Ku soke komai na wannan ranar", "Ku daina amfani da jadawalin"], answer: 1, why: "AI yana ba da shawarwari, amma ku ne ke yanke shawara ta ƙarshe don iyalinku." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Yin tsarin abinci bisa kasafin kuɗi",
          minutes: 5,
          goal: "Yi tsarin abincin mako da jerin kayan cefane da suka dace da kasafin kuɗinku.",
          text: [
            "Mataimakin AI zai iya tsara abinci bisa abin da kuke da shi, abin da iyalinku ke so, da yawan kuɗin da za ku iya kashewa.",
            "Ku faɗa masa: mutane nawa ne, kasafin kuɗinku, abincin da iyalinku ke so ko ba sa iya ci, abin da ke cikin kicin ɗinku, da lokacin da kuke da shi na dafa abinci. Ku nemi jerin kayan cefane da aka raba bisa sassan shago.",
            "AI bai san farashin yau a shagonku ba, don haka ku ɗauki kiyasin kuɗinsa a matsayin ƙiyasi kawai. Ku duba tallar shagon ta mako ko manhajarsa. Don buƙatun lafiya kamar ciwon suga ko rashin jituwa da wani abinci (allergy), ku bi shawarar likitanku ko ƙwararren masanin abinci (dietitian)."
          ],
          steps: ["Ku duba abincin da kuke da shi a gida.", "Ku faɗa wa AI yawan mutane, kasafin kuɗi, abin da ake so, allergy da lokacin dafa abinci.", "Ku nemi abincin dare biyar da jerin kayan cefane da aka raba bisa sassan shago.", "Ku kwatanta da ainihin farashin shagonku ku daidaita."],
          words: [["Kasafin kuɗi (budget)", "yawan kuɗin da kuke shirin kashewa."], ["Kayan abinci na yau da kullum (staples)", "abincin asali da kuke yawan amfani da shi, kamar shinkafa, wake, fulawa da mai."]],
          slides: [
            { title: "AI zai iya tsara abinci", bullets: ["Bisa abin da kuke da shi", "Bisa abin da iyalinku ke so", "Bisa kasafin kuɗinku"] },
            { title: "Ku faɗa masa", bullets: ["Yawan mutane da kasafin kuɗi", "Abin da ake so, allergy, lokacin dafa abinci", "Abin da ke cikin kicin ɗinku"] },
            { title: "Ku duba kafin ku yi cefane", bullets: ["AI bai san farashin yau ba", "Ku duba tallar shagon ko manhajarsa", "Buƙatun lafiya: ku bi likitanku"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya ba ku abincin dare biyar don gidanku, ta amfani da abincin da kuke da shi da kasafin kuɗin da kuka zaɓa, tare da jerin kayan cefane da aka raba bisa sassan shago.",
          youCanNow: "yin tsarin abinci bisa kasafin kuɗi da jerin kayan cefane da AI, da kwatanta shi da ainihin farashi.",
          quickCheck: [
            { objective: "O2", q: "Me yasa za a raba jerin kayan cefane bisa sassan shago?", options: ["Yana sa abinci ya yi araha", "AI yana buƙatar haka", "Yana sa cefane ya yi sauri", "Shaguna suna buƙatar haka"], answer: 2, why: "Raba bisa sashe, kamar ganye da 'ya'yan itace ko kayan madara, yana adana lokaci a shago." },
            { objective: "O2", q: "Kuna da shinkafa, wake da ƙwai a gida. Me za ku faɗa wa AI?", options: ["Babu komai; zai yi tsammani", "Kasafin kuɗinku kawai", "Gidan abincin da kuka fi so", "Abincin da kuke da shi, don ya tsara bisa su"], answer: 3, why: "Tsara bisa abincin da kuke da shi yana adana kuɗi kuma yana hana ɓarna." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Nemo taimako a yankinku idan kuɗi ya yi ƙaranci",
          minutes: 5,
          goal: "Nemo wurin taimako na yankinku don buƙata ta gaske ku tabbatar da shi da majiyar hukuma.",
          text: [
            "Iyalai da yawa suna buƙatar taimako wani lokaci: na abinci, kuɗin haya, kuɗin wuta da ruwa, kula da yara ko aiki. Neman taimako wani ɓangare ne na kula da iyalinku.",
            "211 layi ne na sirri da ke haɗa mutane da taimako a yankinsu kan gidaje, abinci, sufuri, kula da lafiya da sauransu. Kuna iya kiran 211, kuma wurare da yawa suna ba da tes ko hira ta intanet. Ɗakin karatu da cibiyar al'umma ta yankinku ma suna da jerin wuraren taimako.",
            "Mataimakin AI zai iya taimaka muku ku fahimci irin taimakon da ake da shi da tambayoyin da za ku yi. Amma yana iya lissafa wuraren da aka rufe ko shirye-shiryen da suka canja. Koyaushe ku tabbatar ta 211, shafin hukuma na shirin, ko ta kiran waya."
          ],
          steps: ["Ku faɗi buƙatar: abinci, kuɗin haya, kuɗin wuta da ruwa, kula da yara ko aiki.", "Ku tambayi AI irin shirye-shiryen da yawanci ke taimakawa da abin da za ku tambaye su.", "Ku kira 211 ko ku ziyarci 211.org don nemo ainihin shirye-shiryen yankinku.", "Ku kira ko ku duba shafin hukuma na shirin kafin ku je."],
          words: [["Wurin taimako (resource)", "wuri, shiri ko mutum da zai iya taimakawa da wata buƙata."], ["Na sirri (confidential)", "ana ɓoye shi; ba a raba shi ba tare da izininku ba."]],
          sources: [{ name: "211.org: Game da 211", url: "https://www.211.org/about-us" }],
          slides: [
            { title: "Neman taimako ƙarfi ne", bullets: ["Abinci, kuɗin haya, wuta da ruwa, kula da yara, aiki", "Akwai shirye-shiryen taimako da yawa a yankuna"] },
            { title: "211 yana haɗa ku", bullets: ["Ku kira 211, a kowane lokaci", "Na sirri ne, kuma ba sai kun faɗi sunanku ba", "Kuma: jerin ɗakin karatu da cibiyar al'umma"] },
            { title: "Ku yi amfani da AI, sannan ku tabbatar", bullets: ["AI yana bayanin irin taimakon da ake da shi", "Yana iya lissafa wuraren da aka rufe", "Ku tabbatar ta 211 ko shafin hukuma"] }
          ],
          tryIt: "Ku zaɓi buƙata ɗaya da iyalinku ko wani maƙwabci ke da ita. Ku tambayi AI irin shirye-shiryen da ke taimakawa da ita. Sannan ku nemo shiri ɗaya na gaske a yankinku ta 211.org ko ta kiran 211, ku rubuta lambar wayarsa ta hukuma.",
          youCanNow: "nemo wurin taimako na yankinku don buƙata ta gaske da tabbatar da shi da majiyar hukuma.",
          quickCheck: [
            { objective: "O3", q: "Ban da kiran 211, ta wace hanya kuma za a iya samun sa sau da yawa?", options: ["Ta tes, hira ta intanet ko 211.org", "Sai an je da kai kawai", "Ta aika wasiƙa", "Ta wata manhaja ta kuɗi"], answer: 0, why: "Wurare da yawa suna ba da 211 ta tes ko hira ta intanet, da kuma a shafin 211.org." },
            { objective: "O3", q: "Wani maƙwabci yana buƙatar taimako don biyan kuɗin wutar lantarki. Mene ne mataki na farko mai kyau da AI?", options: ["Ku nemi AI ya biya kuɗin", "Ku tambayi irin shirye-shiryen da ke taimakawa da abin da za a tambaye su", "Ku saka takardar kuɗin maƙwabcin a intanet", "Ku jira har a yanke wutar"], answer: 1, why: "AI zai iya bayanin irin taimako da tambayoyin da za a yi; sannan ku nemo ainihin shirye-shirye ta 211." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: AI a gida",
        questions: [
          { objective: "O1", q: "Idan kuna rubuta makon iyalinku ga AI, ta yaya ya kamata ku ambaci mutane?", options: ["Cikakkun sunaye da ranakun haihuwa", "Sunan farko ko matsayi kamar \"babban ɗana\"", "Lambobin Social Security", "Adireshin gidan kowane mutum"], answer: 1, why: "Sunan farko ko matsayi suna hana bayanan sirri shiga." },
          { objective: "O1", q: "Mene ne karo a cikin jadawali?", options: ["Abubuwa biyu da aka tsara a lokaci ɗaya", "Ranar hutu", "Ranar biki", "Shirin da aka soke"], answer: 0, why: "Karo shi ne lokacin da tsare-tsare biyu suka haɗu a lokaci ɗaya." },
          { objective: "O2", q: "AI ya ce jerin kayan cefanenku zai ci $42. Me za ku yi?", options: ["Ku amince da shi daidai", "Ku biya $42 kafin ku yi cefane", "Ku ɗauke shi a matsayin ƙiyasi ku duba farashin shagon", "Ku yi watsi da jerin"], answer: 2, why: "AI bai san farashin yau a shagonku ba." },
          { objective: "O2", q: "Ɗanku yana da allergy na wani abinci. Shawarar wa ta fi muhimmanci a tsarin abinci?", options: ["AI", "Wani rubutu a kafofin sada zumunta", "Wani shafin intanet kawai", "Likitanku ko ƙwararren masanin abinci (dietitian)"], answer: 3, why: "Buƙatun lafiya suna bin shawarar ƙwararre." },
          { objective: "O3", q: "AI ya lissafa wani wurin rabon abinci (food pantry) kusa da ku. Me ya kamata ku yi kafin ku je?", options: ["Ku tabbatar ta 211, shafinsa na hukuma, ko ta kiran waya", "Ku je kawai", "Ku saka shi a intanet", "Ku sake tambayar AI"], answer: 0, why: "AI yana iya lissafa wuraren da aka rufe; ku fara tabbatarwa." }
        ]
      }
    },
    {
      name: "Babi na 2: AI don al'ummarku",
      lessons: [
        {
          objectives: ["O4"],
          title: "Yin ajandar taro",
          minutes: 5,
          goal: "Yi amfani da mataimakin AI don rubuta ajandar taro mai sarari mai shafi ɗaya.",
          text: [
            "Ƙungiyoyin al'umma suna yin abubuwa da yawa idan tarurruka suna da tsari. Ajanda gajeren jeri ne na abin da taron zai tattauna, a jere, da lokacin kowane sashe.",
            "Ku faɗa wa AI ƙungiyar, manufar, tsawon taron, da batutuwan. Misali: \"Ka yi ajandar awa ɗaya don ƙungiyarmu ta masu haya. Batutuwa: injinan wanki da suka lalace, liyafar girki ta lokacin rani, da zaɓen sabon sakatare. Ka bar lokacin tambayoyi.\"",
            "Ku karanta ta kuna tunanin buƙatun ƙungiyarku. Ku canja jerin batutuwa, ku ƙara maraba, kuma ku tabbata ba a matse batu mafi muhimmanci a ƙarshe ba."
          ],
          steps: ["Ku rubuta ƙungiyar, manufar, tsawon taro da batutuwan.", "Ku nemi AI ya ba ku ajanda mai shafi ɗaya da lokacin kowane batu.", "Ku saka batu mafi muhimmanci a farko.", "Ku ƙara maraba da lokacin tambayoyi, sannan ku raba ta kafin taron."],
          words: [["Ajanda (agenda)", "jerin batutuwan taro, a jere, da lokacinsu."], ["Sakatare (secretary)", "mutumin da ke rubuta bayanai a ƙungiya kuma yake ajiye takardu."]],
          slides: [
            { title: "Tarurruka suna buƙatar tsari", bullets: ["Ajanda tana jera batutuwa a jere", "Kowane batu yana da lokacinsa"] },
            { title: "Ku faɗa wa AI", bullets: ["Ƙungiyar da manufar", "Tsawon taron", "Batutuwan"] },
            { title: "Ku sa ta yi muku aiki", bullets: ["Batu mafi muhimmanci a farko", "Ku ƙara maraba da tambayoyi", "Ku raba ta kafin taron"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya rubuta ajandar awa ɗaya don wata ƙungiya ta gaske da kuke ciki, mai batutuwa uku da lokacin tambayoyi.",
          youCanNow: "yin ajandar taro mai sarari tare da mataimakin AI.",
          quickCheck: [
            { objective: "O4", q: "Waɗanne abubuwa huɗu ne prompt na ajanda ya kamata ya faɗa wa AI?", options: ["Lambobin wayar membobi", "Ranar kawai", "Ƙungiyar, manufar, tsawon taro da batutuwa", "Jerin kayan ciye-ciye na taron"], answer: 2, why: "Da ƙungiya, manufa, tsawo da batutuwa, AI zai iya yin ajanda mai amfani." },
            { objective: "O4", q: "AI ya saka zaɓen sabon sakatare a ƙarshe, da minti 5. Shi ne babban batunku. Me za ku yi?", options: ["Ku bar shi", "Ku cire shi", "Ku gajarta taron", "Ku kawo shi gaba ku ba shi ƙarin lokaci"], answer: 3, why: "Batu mafi muhimmanci ya kamata ya zo da wuri don kada a matse shi a ƙarshe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Rubuta saƙonnin ƙungiya da bayanan taro a sarari",
          minutes: 5,
          goal: "Rubuta saƙon tunatarwar taro ku mayar da rubutun gaggawa gajeren taƙaitaccen bayani.",
          text: [
            "Saƙon tunatarwa mai kyau yana faɗin me, yaushe, a ina, da abin da za a zo da shi, a cikin 'yan gajerun layuka. Ku nemi AI ya rubuta shi cikin sautin abokantaka, da kuma wani juyi na biyu a wani harshe idan ƙungiyarku na buƙata.",
            "Bayan taron, AI zai iya mayar da rubutun gaggawa taƙaitaccen bayani mai tsabta: abin da aka yanke, wa zai yi me, da zuwa yaushe. Ku cire bayanan sirri, kamar matsalar lafiya ko ta kuɗi ta wani.",
            "Kafin ku aika, ku tabbatar da sunaye, ranaku da shawarwari da wanda ya halarci taron. Dole taƙaitaccen bayani ya yi daidai da abin da ya faru da gaske."
          ],
          steps: ["Ku nemi saƙon tunatarwa na abokantaka mai me, yaushe, a ina da abin da za a zo da shi.", "Ku nemi juyi a harshe na biyu idan ana buƙata.", "Bayan taron, ku liƙa rubutun gaggawarku ba tare da bayanan sirri ba.", "Ku nemi taƙaitaccen bayani: shawarwari, wa zai yi me, da zuwa yaushe.", "Ku tabbatar da shi da wanda ya halarci taron, sannan ku aika."],
          words: [["Taƙaitaccen bayani (summary)", "gajeren rubutu da ke ɗauke da manyan abubuwa kawai."], ["Aikin da za a yi (action item)", "aikin da wani ya amince zai yi bayan taro."]],
          slides: [
            { title: "Saƙon tunatarwa mai kyau", bullets: ["Me, yaushe, a ina, abin da za a zo da shi", "Gajere kuma na abokantaka", "Harshe na biyu idan ana buƙata"] },
            { title: "Daga rubutun gaggawa zuwa taƙaitaccen bayani", bullets: ["Ku liƙa rubutun gaggawa, ba tare da bayanan sirri ba", "Ku nemi shawarwari da ayyukan da za a yi", "Wa zai yi me, zuwa yaushe"] },
            { title: "Ku duba kafin ku aika", bullets: ["Sunaye, ranaku da shawarwari", "Ku tambayi wanda ya halarci taron"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya rubuta saƙon tunatarwa mai layi uku don taron Darasi na 4. Sannan ku rubuta rubutun gaggawa guda biyar na atisaye ku nemi ya mayar da su taƙaitaccen bayani mai ayyukan da za a yi.",
          youCanNow: "rubuta saƙonnin tunatarwar taro masu sarari da mayar da rubutun taro taƙaitaccen bayani mai ayyukan da za a yi.",
          quickCheck: [
            { objective: "O5", q: "Me taƙaitaccen bayanin taro ke lissafawa?", options: ["Shawarwari, wa zai yi me, da zuwa yaushe", "Matsalolin sirri na kowa", "Kayan ciye-ciye kawai", "Kowace kalma da aka faɗa"], answer: 0, why: "Taƙaitaccen bayani yana nuna abin da aka yanke da wa zai yi me zuwa yaushe." },
            { objective: "O5", q: "Rubutun gaggawarku ya ce wani memba bai biya kuɗin haya ba. Me za ku yi kafin ku liƙa su a AI?", options: ["Ku bar shi; yana da amfani", "Ku cire wannan bayanin sirri", "Ku ƙara cikakken sunansa", "Ku aika rubutun ga duk unguwa"], answer: 1, why: "Bayanan sirri game da kuɗi ko lafiyar wani ba sa shiga prompt na AI ko taƙaitaccen bayani." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Yin jerin wuraren taimako na al'umma",
          minutes: 5,
          goal: "Yi jerin wuraren taimako na yankinku mai shafi ɗaya da kuka tabbatar da kanku.",
          text: [
            "Jerin wuraren taimako yana taimaka wa maƙwabta su sami taimako da sauri. Ku sa shi shafi ɗaya: irin taimako, sunan shirin, lambar waya ko shafin intanet na hukuma, da lokutan aiki.",
            "Ku yi amfani da AI don shirya fasalin shafin da bayanin kowane shiri a jimla ɗaya mai sauƙi. Ku samo ainihin sunaye, lambobi da lokutan aiki daga 211, shafin hukuma na shirin, ko ta kiran waya, ba daga AI ba.",
            "Ku saka kwanan wata a ƙasa (\"An tabbatar a ranar ...\"). Shirye-shirye suna canjawa, don haka ku sake duba jerin bayan 'yan watanni."
          ],
          steps: ["Ku zaɓi buƙatu uku da al'ummarku ke da su.", "Ku nemo shiri ɗaya na gaske ga kowanne ta 211 ko shafukan hukuma.", "Ku nemi AI ya ba ku fasalin shafi ɗaya mai sauƙi da bayanin layi ɗaya mai sauƙi na kowane shiri.", "Ku cike lambobin hukuma da lokutan aiki da kanku.", "Ku ƙara ranar da kuka tabbatar da shi."],
          words: [["Fasalin shafi (layout)", "yadda aka shirya kalmomi da akwatuna a shafi."]],
          sources: [{ name: "211.org: nemo 211 na yankinku", url: "https://www.211.org/about-us" }],
          slides: [
            { title: "Jerin wuraren taimako mai shafi ɗaya", bullets: ["Irin taimako da sunan shiri", "Lambar waya ko shafin hukuma", "Lokutan aiki"] },
            { title: "Wa zai yi me", bullets: ["AI: fasalin shafi da bayani mai sauƙi", "Ku: ainihin sunaye, lambobi, lokutan aiki daga majiyoyin hukuma"] },
            { title: "Ku riƙa sabunta shi", bullets: ["Ku rubuta \"An tabbatar a ranar\" da kwanan wata", "Ku sake duba shi bayan 'yan watanni"] }
          ],
          tryIt: "Aikin ƙarshe: ku shirya ƙaramin taro don ƙungiyarku da ajandar da AI ya rubuta da saƙon tunatarwa, kuma ku yi jerin wuraren taimako uku na yankinku mai shafi ɗaya waɗanda kuka tabbatar da kanku.",
          youCanNow: "shirya taron al'umma da raba jerin wuraren taimako na yankinku da aka tabbatar.",
          quickCheck: [
            { objective: "O6", q: "Waɗanne abubuwa huɗu ne ke kan kowane layi na jerin wuraren taimako?", options: ["Suna, shekaru, adireshi da aiki", "Farashi, launi, girma da alama", "Irin taimako, sunan shiri, lambar waya ko shafin hukuma, da lokutan aiki", "Sunan shirin kawai"], answer: 2, why: "Waɗannan abubuwa huɗu suna bar maƙwabta su sami taimakon su kai gare shi da sauri." },
            { objective: "O6", q: "AI ya cike lambar waya ta wani wurin rabon abinci. Me za ku yi?", options: ["Ku yi amfani da ita yadda take", "Ku cire wurin daga jerin", "Ku sake tambayar AI", "Ku musanya ta da lambar daga 211 ko shafin hukuma"], answer: 3, why: "Ainihin lambobi da lokutan aiki suna zuwa daga 211 ko majiyoyin hukuma, ba daga AI ba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: AI don al'ummarku",
        questions: [
          { objective: "O4", q: "Mece ce ajanda?", options: ["Jerin batutuwan taro, a jere, da lokacinsu", "Takardar biyan kuɗi", "Hirar ƙungiya ta waya", "Takardar sa hannun halarta"], answer: 0, why: "Ajanda tana tsara abin da taron zai tattauna." },
          { objective: "O4", q: "A ina ya kamata batu mafi muhimmanci ya kasance a ajanda?", options: ["A ƙarshe ƙwarai", "Da wuri a taron", "Ba a cikin ajanda ba", "A wani taro daban a shekara mai zuwa"], answer: 1, why: "Batutuwan farko suna samun mafi yawan lokaci da hankali." },
          { objective: "O5", q: "Saƙon tunatarwar taro mai kyau ya ƙunshi:", options: ["Lambobin wayar kowa", "Adireshin gidajen membobi", "Me, yaushe, a ina da abin da za a zo da shi", "Dogon tarihin ƙungiyar"], answer: 2, why: "Waɗannan abubuwa huɗu ne mutane ke buƙata." },
          { objective: "O5", q: "Rubutunku ya ambaci matsalar lafiya ta wani memba. Kafin ku ba AI, ku:", options: ["Bar shi", "Ƙara bayani", "Raba shi a hirar ƙungiya", "Cire wannan bayanin sirri"], answer: 3, why: "Bayanan sirri na wasu ba sa shiga kayan aikin AI." },
          { objective: "O6", q: "Daga ina lambobin waya da ke kan jerin wuraren taimako ya kamata su fito?", options: ["Daga 211 ko shafin hukuma na shirin", "Duk abin da AI ya faɗa", "Hasashe", "Tsohuwar takardar talla ta shekarun baya"], answer: 0, why: "AI yana iya ba da lambobin da ba daidai ba; majiyoyin hukuma ne daidai." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Al'umma da Rayuwar Yau da Kullum",
    questions: [
      { objective: "O1", q: "Don tsara makon iyalinku da AI, da farko ku:", options: ["Rubuta duk abin da za ku yi, tare da lokutan da kuka sani", "Rubuta lambar bankinku", "Sayi manhajar tsarawa", "Kira 211"], answer: 0, why: "AI yana buƙatar jerinku don ya jera shi." },
      { objective: "O1", q: "Wace ce hanya mai aminci ta ambaton 'yan iyali a prompt?", options: ["Cikakkun sunaye da ranakun haihuwa", "\"Babban ɗana\" ko sunan farko", "Lambobin katin makaranta", "Lambobin Social Security"], answer: 1, why: "Matsayi ko sunan farko suna kiyaye bayanan sirri." },
      { objective: "O1", q: "Idan AI ya gano karo, ku:", options: ["Bar AI ya yanke shawara", "Yi watsi da shi", "Nemi shawarwari, sannan ku yanke shawara ta ƙarshe", "Soke komai"], answer: 2, why: "AI yana ba da shawara; ku ne ke yanke hukunci." },
      { objective: "O2", q: "Prompt na tsarin abinci ya kamata ya ƙunshi:", options: ["Kalmar sirrinku", "Adireshinku", "Lambar PIN ta bankinku", "Yawan mutane, kasafin kuɗi, abin da ake so da allergy"], answer: 3, why: "Waɗannan bayanai suna tsara shiri mai amfani." },
      { objective: "O2", q: "Me yasa za ku duba tallar shagon ta mako bayan AI ya yi jerinku?", options: ["AI bai san farashin yau ba", "AI koyaushe yana ƙara farashi", "Shaguna suna buƙatar haka", "Doka ce"], answer: 0, why: "Kiyasin kuɗin AI ƙiyasi ne kawai." },
      { objective: "O2", q: "Staples (kayan abinci na yau da kullum) su ne:", options: ["Kayan ofis kawai", "Abincin asali da kuke yawan amfani da shi, kamar shinkafa da wake", "Kayan zaƙi na alfarma", "Abincin gidan abinci"], answer: 1, why: "Staples abincin asali ne na kowace rana." },
      { objective: "O3", q: "211 shi ne:", options: ["Manhajar AI", "Shago", "Layi na sirri da ke haɗa mutane da taimako a yankinsu", "Banki"], answer: 2, why: "211 yana haɗa ku da taimako a yankinku." },
      { objective: "O3", q: "Kiran da ake yi wa 211:", options: ["Ana raba su a intanet", "Ana naɗar su don talla", "Na kamfanoni ne kawai", "Na sirri ne, kuma ba sai kun faɗi sunanku ba"], answer: 3, why: "211 ya ce kiran na sirri ne kuma ba sai an faɗi suna ba." },
      { objective: "O3", q: "AI ya ba ku jerin wuraren rabon abinci. Kafin ku je, ku:", options: ["Tabbatar da ɗaya ta 211, shafinsa na hukuma ko ta kira", "Je duk wuraren", "Amince da shi gaba ɗaya", "Saka jerin a intanet"], answer: 0, why: "Shirye-shirye suna rufewa ko canjawa; ku fara tabbatarwa." },
      { objective: "O3", q: "Neman taimako don abinci ko biyan kuɗaɗe:", options: ["Abu ne da za a ɓoye", "Wani ɓangare ne na kula da iyalinku", "Ba a yarda da shi ba", "Na wasu mutane ne kawai"], answer: 1, why: "Amfani da taimakon yankinku mataki ne na hikima kuma na yau da kullum." },
      { objective: "O4", q: "Ajandar taro ya kamata ta ƙunshi:", options: ["Ranar kawai", "Lambobin wayar membobi", "Batutuwa a jere da lokacinsu", "Adireshin kowa"], answer: 2, why: "Batutuwa da lokaci suna sa taron ya tafi yadda aka tsara." },
      { objective: "O4", q: "Prompt mai kyau na ajanda yana faɗa wa AI:", options: ["Babu komai", "Kalmar sirrinku", "Bankinku", "Ƙungiyar, manufar, tsawon taro da batutuwa"], answer: 3, why: "Waɗannan bayanai suna tsara ajanda mai amfani." },
      { objective: "O4", q: "Yaushe ya kamata ku raba ajandar?", options: ["Kafin taron", "Ba za a raba ba", "Wata ɗaya bayan taron", "Ga shugaban taro kawai"], answer: 0, why: "Raba ta da wuri yana taimaka wa mutane su zo a shirye." },
      { objective: "O5", q: "Ƙungiyarku tana da membobi masu magana da Sifaniyanci. Don saƙon tunatarwa za ku iya:", options: ["Ƙyale su", "Nemi AI ya ba da juyi a harshe na biyu", "Amfani da hotuna kawai", "Kada ku aika komai"], answer: 1, why: "Juyi a harshe na biyu yana haɗa ƙarin membobi." },
      { objective: "O5", q: "Action item (aikin da za a yi) shi ne:", options: ["Fim", "Wani nau'in manhaja", "Aikin da wani ya amince zai yi bayan taro", "Kayan ciye-ciye"], answer: 2, why: "Ayyukan da za a yi suna faɗin wa zai yi me, zuwa yaushe." },
      { objective: "O5", q: "Kafin ku aika taƙaitaccen bayanin taro, ya kamata ku:", options: ["Ƙara bayanan sirri", "Aika shi ba tare da karantawa ba", "Goge rubutun", "Tabbatar da shi da wanda ya halarci taron"], answer: 3, why: "Dole taƙaitaccen bayani ya yi daidai da abin da ya faru." },
      { objective: "O6", q: "A jerin wuraren taimako, wa ya kamata ya cike lambobin waya da lokutan aiki?", options: ["Ku, daga majiyoyin hukuma", "AI", "Babu kowa", "Tallar da ke tasowa (pop-up)"], answer: 0, why: "Majiyoyin hukuma suna ba da lambobi daidai." },
      { objective: "O6", q: "Me yasa za ku ƙara \"An tabbatar a ranar\" da kwanan wata a jerinku?", options: ["Yana da kyan gani", "Shirye-shirye suna canjawa, don haka mutane su san yadda yake sabo", "Doka ta buƙaci haka", "Don ya yi tsawo"], answer: 1, why: "Kwanan wata yana nuna lokacin da aka tabbatar da shi na ƙarshe." },
      { objective: "O6", q: "Sau nawa ya kamata ku sake duba jerin wuraren taimako?", options: ["Ba za a sake duba ba", "Bayan kowace shekara goma", "Bayan 'yan watanni", "Sai idan wani ya yi ƙorafi"], answer: 2, why: "Shirye-shirye suna canjawa, don haka ku riƙa sake dubawa." },
      { objective: "O6", q: "A aikin ƙarshe, jerin wuraren taimako yana da:", options: ["Wurare goma da AI ya ƙirƙira", "Adireshin gidajen membobi", "Wuri ɗaya kawai", "Wuraren taimako uku na yankinku da kuka tabbatar da kanku"], answer: 3, why: "Aikin shi ne wurare uku da kuka tabbatar." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [0, 3, 6, 8, 10, 13, 14, 16, 17]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Ajanda",
        objective: "O4",
        notYet: "Babu ajanda, ko batutuwa ba tare da jeri ko lokaci ba.",
        meets: "Shafi ɗaya mai batutuwa a jere, lokaci, da lokacin tambayoyi.",
        exceeds: "Batu mafi muhimmanci yana da wuri, kuma akwai maraba."
      },
      {
        name: "Saƙon tunatarwa",
        objective: "O5",
        notYet: "Babu me, yaushe ko a ina.",
        meets: "Gajeren saƙon tunatarwa na abokantaka mai me, yaushe, a ina da abin da za a zo da shi.",
        exceeds: "Yana kuma da juyi a harshe na biyu da ƙungiyar ke buƙata."
      },
      {
        name: "An tabbatar da wuraren taimako",
        objective: "O3",
        notYet: "Shirye-shirye ko lambobi sun fito daga AI kuma ba a tabbatar da su ba.",
        meets: "Shirye-shirye uku na gaske a yankin, kowanne an tabbatar ta 211, shafin hukuma ko ta kira.",
        exceeds: "Zai iya faɗin yadda aka tabbatar da kowanne."
      },
      {
        name: "Fasalin jerin wuraren taimako",
        objective: "O6",
        notYet: "Babu lambobin waya, lokutan aiki ko kwanan wata.",
        meets: "Shafi ɗaya mai irin taimako, shiri, lambar hukuma ko shafi, lokutan aiki, da kwanan wata \"An tabbatar a ranar\".",
        exceeds: "Kowane shiri yana da bayanin layi ɗaya mai sauƙi."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka gudanar da taron ƙungiya da aka tsara mai ajanda cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo ko maƙwabta da suka haɗu da shirin taimako na yankinsu da aka samo ta 211",
      "Abokan aikin al'umma sun ce ana raba jerin wuraren taimako kuma ana sabunta su"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani mai intanet, ko kwamfutar ɗakin karatu ko ta cibiyar al'umma",
      "Mataimakin AI kyauta: Microsoft Copilot, ChatGPT ko Google Gemini",
      "Samun 211 ta waya, tes ko 211.org",
      "Takarda da alƙalami, ko kalandar waya, don jadawali da jerin abubuwa",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku gudanar da kwas ɗin tare da ƙungiya ta gaske, kamar ƙungiyar iyaye ko ta masu haya, don ajanda da jerin wuraren taimako su yi amfani nan take.",
      "Ku nuna yadda ake amfani da 211 kai tsaye, kuma ku tunatar da masu koyo cewa neman taimako abu ne na yau da kullum.",
      "Ku duba prompt don bayanan sirri: sunan farko ko matsayi kawai, kuma babu komai game da lafiya ko kuɗin wasu.",
      "Ku tattara jerin wuraren taimako da aka tabbatar zuwa jeri ɗaya da ƙungiyar za ta raba, tare da ranar da aka tabbatar.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

"use strict";

// Koach Learn course, Hausa (ha) translation of non-profits/nonprofit-ai-program-impact.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "nonprofit-ai-program-impact-ha",
  lang: "ha",
  translationOf: "nonprofit-ai-program-impact",
  category: "Non Profits",
  name: "AI don Gudanar da Shirye-shirye da Nuna Tasirinsu",
  skills: "Gina tsarin shiri mai sauƙi (logic model), Zaɓar ma'aunin sakamako, Rubuta gajeren binciken ra'ayi da AI, Taƙaita sakamako ba tare da sunaye ba, Rubuta rahoton tasiri na shafi ɗaya",
  outcome: "amfani da AI don gina tsarin shiri mai sauƙi (logic model) na shiri ɗaya, rubuta gajeren binciken ra'ayin mahalarta, taƙaita sakamako ba tare da sunaye ba, da mayar da su rahoton tasiri na gaskiya mai shafi ɗaya don kwamitin gudanarwa da masu ba da tallafi.",
  about: [
    "Wannan kwas ɗin na manajoji, masu shirya ayyuka da masu aikin sa-kai ne a ƙungiyoyin agaji (nonprofit) da na addini, waɗanda ke gudanar da shirye-shirye kuma suna buƙatar nuna irin canjin da shirye-shiryensu ke kawowa.",
    "Za ku tsara shiri a shafi ɗaya, ku zaɓi abin da za ku auna, ku yi amfani da AI don rubuta binciken ra'ayi mai adalci, ku taƙaita sakamako ba tare da bayyana bayanan sirrin kowa ba, sannan ku rubuta rahoton tasiri da masu ba da tallafi da kwamitin gudanarwarku za su amince da shi.",
    "Kowane darasi yana ɗaukar kusan minti biyar kuma yana gina sashe ɗaya na rahoton tasirinku. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Don shiri ɗaya na gaske, ku rubuta rahoton tasiri mai shafi ɗaya da ya ƙunshi: tsarin shiri mai sauƙi (abubuwan da aka saka, ayyuka, ƙididdigar ayyuka, sakamako), ma'aunin sakamako guda biyu, gajeren binciken ra'ayin mahalarta da kuka rubuta da AI, taƙaitaccen sakamako ba tare da sunaye ba (na gaske ko na gwaji, ba tare da sunaye ba), labari ɗaya da aka raba da izini, da darasi ɗaya na gaskiya da kuka koya.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manajoji, masu shirya ayyuka da masu aikin sa-kai a ƙungiyoyin agaji da na addini, waɗanda ke gudanar da shirye-shirye kuma suna buƙatar nuna irin canjin da shirye-shiryensu ke kawowa.",
    startingPoint: "Suna gudanar da shirye-shirye kuma suna ajiye ƙididdiga kamar yawan abincin da aka raba ko zaman da aka yi. Da yawa ba su taɓa gina tsarin shiri (logic model) ba, ko auna sakamako kafin da bayan shiri, ko rubuta rahoton tasiri ba.",
    gap: "Masu ba da tallafi da kwamitocin gudanarwa suna ƙara neman sakamako, ba ƙididdiga kawai ba. Masu koyo suna buƙatar hanya mai sauƙi da gaskiya ta tsarawa, aunawa da ba da rahoton canji, suna amfani da AI don rage lokaci, yayin da suke kare sirrin mahalarta kuma suke tabbatar da kowace lamba gaskiya ce.",
    constraints: [
      "Ƙananan ƙungiyoyi masu ƙarancin lokacin aikin bayanai",
      "Sirri: binciken ra'ayi na son rai ne kuma ba tare da sunaye ba; babu sunaye, bayanan lafiya ko na shige da fice sai dai idan ana buƙata da gaske kuma an ajiye su lafiya",
      "Ƙididdiga kaɗai ake sakawa a kayan AI, ba amsoshin mutane na sirri ba",
      "AI yana kuskure a lissafi, don haka ana duba kowane kaso (percent) a spreadsheet",
      "Kayan aiki kyauta kamar Google Forms ko Microsoft Forms"
    ],
    prerequisites: "Kwas ɗin \"Gabatarwa ga AI don Ƙungiyoyin Sa-kai\", ko ɗan sanin amfani da mataimakin AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku jerin sakamakon wani shiri", action: "gane waɗanne ne ƙididdigar ayyuka (outputs) da waɗanne ne sakamako (outcomes)", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O2", condition: "Idan kuna da bayanin wani shiri da kowa zai iya gani", action: "gina tsarin shiri mai shafi ɗaya mai abubuwan da aka saka, ayyuka, ƙididdigar ayyuka da sakamako da taimakon AI", standard: "an cire duk abin da ba ku yi da gaske ba" },
    { id: "O3", condition: "Idan kuna da wani sakamako", action: "zaɓar ma'auni masu sauƙi guda biyu da ƙungiyarku za ta iya tattarawa, ana tambaya kafin da bayan shiri", standard: "masu gaskiya kuma masu yiwuwa da lokacin ma'aikata da masu aikin sa-kai" },
    { id: "O4", condition: "Idan kuna da ma'aunin sakamakonku", action: "rubuta gajeren binciken ra'ayin mahalarta ba tare da sunaye ba, mai tambayoyi 5 zuwa 8, da AI", standard: "babu tambayoyi masu jagorantar amsa, kuma akwai sanarwa cewa na son rai ne" },
    { id: "O5", condition: "Idan kuna da ƙididdigar binciken ra'ayi ba tare da sunaye ba", action: "taƙaita sakamakon da AI da duba kowane kaso da kanku", standard: "babu wani bayani da zai iya bayyana ko wane ne mutum" },
    { id: "O6", condition: "Idan kuna da tsarin shirinku da sakamakon da aka duba", action: "rubuta rahoton tasiri mai shafi ɗaya mai buƙatar, abin da kuka yi, abin da ya canja, labari da darasin da aka koya", standard: "babu lambobi ko iƙirarin da ba su cikin bayananku" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsara abin da za a auna",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ƙididdigar ayyuka da sakamako: mene ne bambancin?",
          minutes: 4,
          goal: "Bambanta ƙididdigar ayyuka da sakamako a ɗaya daga cikin shirye-shiryenku.",
          text: [
            "Ƙididdigar ayyuka (outputs) suna ƙirga abin da kuka yi: abinci 300 da aka raba, zaman koyarwa 40, masu aikin sa-kai 25 da aka horar. Sakamako (outcomes) suna bayyana abin da ya canja ga mutane: iyalai ba su damu sosai game da abinci ba, ɗalibai sun inganta makin karatunsu, masu aikin sa-kai sun ji a shirye suke su jagoranci.",
            "Masu ba da tallafi da kwamitocin gudanarwa suna ƙara neman sakamako, ba ƙididdigar ayyuka kawai ba. Sakamako yana nuna cewa manufarku tana aiki.",
            "AI zai iya taimaka muku ku yi tunani a kai. Ku tambaye shi: \"Shirinmu [bayanin da kowa zai iya gani] yana yin [ayyuka]. Ka jera ƙididdigar ayyuka da ake tsammani da sakamakon gajeren lokaci da ake tsammani ga mahalarta.\" Sannan ku zaɓi waɗanda suke gaskiya ga shirinku."
          ],
          words: [["Ƙididdigar ayyuka (output)", "ƙirgen abin da shirinku ya yi, kamar yawan abincin da aka raba."], ["Sakamako (outcome)", "canji a rayuwar mutane saboda shirinku."], ["Tasiri (impact)", "babban canji na dogon lokaci da aikinku ke kawowa a cikin al'umma."]],
          slides: [
            { title: "Ƙididdigar ayyuka suna ƙirga abin da kuka yi", bullets: ["Abinci 300 da aka raba", "Zaman koyarwa 40", "Masu aikin sa-kai 25 da aka horar"] },
            { title: "Sakamako yana nuna abin da ya canja", bullets: ["Iyalai ba su damu sosai game da abinci ba", "Ɗalibai sun inganta makin karatu", "Masu aikin sa-kai a shirye suke su jagoranci"] },
            { title: "Ku nemi AI ya ba da ra'ayoyi", bullets: ["Ƙididdigar ayyuka da sakamako da ake tsammani", "Ku ne kuke zaɓar abin da yake gaskiya"] }
          ],
          tryIt: "Don shiri ɗaya, ku rubuta ƙididdigar ayyuka uku da sakamako biyu. Ku yi amfani da AI don samun ra'ayoyi, sannan ku bar waɗanda suke gaskiya ga shirinku kaɗai.",
          youCanNow: "bambanta ƙididdigar ayyuka da sakamako a shirinku.",
          quickCheck: [
            { objective: "O1", q: "\"Masu aikin sa-kai 25 da aka horar\" misali ne na me?", options: ["Ƙididdigar ayyuka (output)", "Sakamako (outcome)", "Abin da aka saka (input)", "Binciken ra'ayi"], answer: 0, why: "Ƙididdigar ayyuka suna ƙirga abin da kuka yi; sakamako yana bayyana abin da ya canja ga mutane." },
            { objective: "O1", q: "Rahotonku yana jera yawan abincin da aka raba kawai. Mai ba da tallafi yana neman sakamako. Me za ku ƙara?", options: ["Ƙarin ƙididdigar abinci", "Abin da ya canja ga iyalai, kamar rage damuwa game da abinci", "Kuɗin abincin", "Jerin masu aikin sa-kai"], answer: 1, why: "Sakamako yana bayyana abin da ya canja ga mutane saboda shirin." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Gina tsarin shiri mai sauƙi",
          minutes: 5,
          goal: "Gina tsarin shiri mai shafi ɗaya na shiri ɗaya da taimakon AI.",
          text: [
            "Tsarin shiri (logic model) hoto ne mai shafi ɗaya na yadda shirinku ke aiki: abubuwan da aka saka (inputs, abin da kuke sakawa), ayyuka (activities, abin da kuke yi), ƙididdigar ayyuka (outputs, abin da kuke ƙirgawa) da sakamako (outcomes, abin da ke canjawa).",
            "Ku tambayi AI: \"Ka yi teburin tsarin shiri (logic model) na wannan shirin: [bayanin da kowa zai iya gani]. Ginshiƙai: abubuwan da aka saka, ayyuka, ƙididdigar ayyuka, sakamakon gajeren lokaci, sakamakon dogon lokaci. Ka gajarta kowane akwati.\"",
            "Sannan ku gyara shi ya yi daidai da gaskiya. Ku cire duk abin da ba ku yi. Tsarin shiri shiri ne da za ku iya kare shi, ba jerin buri ba."
          ],
          steps: ["Ku bayyana shirin a jimloli uku da kowa zai iya gani.", "Ku nemi AI ya ba ku teburin tsarin shiri mai ginshiƙai biyar.", "Ku cire duk abin da ba ku yi da gaske ba.", "Ku duba cewa kowane sakamako yana da alaƙa da wani aiki."],
          words: [["Tsarin shiri (logic model)", "tebur mai shafi ɗaya da ke nuna abubuwan da aka saka, ayyuka, ƙididdigar ayyuka da sakamako."], ["Abin da aka saka (input)", "abin da kuke sakawa a shiri: ma'aikata, masu aikin sa-kai, kuɗi, wuri."]],
          slides: [
            { title: "Tsarin shiri yana nuna", bullets: ["Abubuwan da aka saka: abin da kuke sakawa", "Ayyuka: abin da kuke yi", "Ƙididdigar ayyuka: abin da kuke ƙirgawa", "Sakamako: abin da ke canjawa"] },
            { title: "Ku nemi AI ya yi tebur", bullets: ["Ginshiƙai biyar", "Gajerun akwatuna"] },
            { title: "Ku sa shi ya zama gaskiya", bullets: ["Ku cire abin da ba ku yi", "Kowane sakamako yana da alaƙa da wani aiki"] }
          ],
          tryIt: "Ku gina teburin tsarin shiri na shirinku da AI, sannan ku gyara shi har kowane akwati ya zama gaskiya.",
          youCanNow: "gina tsarin shiri mai sauƙi da gaskiya na wani shiri.",
          quickCheck: [
            { objective: "O2", q: "A tsarin shiri, mene ne ayyuka (activities)?", options: ["Abin da kuke ƙirgawa", "Abin da ke canjawa", "Abin da kuke yi", "Abin da kuke sakawa"], answer: 2, why: "Ayyuka su ne abin da kuke yi; abubuwan da aka saka suna shiga, ƙididdigar ayyuka ana ƙirga su, sakamako shi ne abin da ke canjawa." },
            { objective: "O2", q: "Tsarin shirin da AI ya yi yana da sakamakon dogon lokaci da ba ku da hanyar kaiwa gare shi. Me za ku yi?", options: ["Ku bar shi; masu ba da tallafi suna son manyan buri", "Ku ƙara girmansa", "Ku kwafe shi a kowane shiri", "Ku cire shi don tsarin ya yi daidai da gaskiya"], answer: 3, why: "Tsarin shiri shiri ne da za ku iya kare shi, ba jerin buri ba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Zaɓar ma'aunin sakamako",
          minutes: 5,
          goal: "Zaɓi ma'aunin sakamako guda biyu da za ku iya tattarawa da gaske.",
          text: [
            "Ma'auni shi ne yadda za ku san cewa sakamako ya faru. Don \"iyalai ba su damu sosai game da abinci ba\", ma'auni zai iya zama: kason iyalan da suka ce damuwarsu game da ƙarewar abinci ta ragu, ana tambaya lokacin rajista da kuma bayan wata uku.",
            "Ma'auni masu kyau suna da sauƙi, ƙungiyarku za ta iya tattara su, kuma suna da gaskiya. Kwatanta kafin da bayan ya fi ƙarfi fiye da tambaya sau ɗaya kawai.",
            "Ku tambayi AI: \"Ka ba da shawarar hanyoyi uku masu sauƙi da ƙaramar ƙungiyar agaji za ta iya auna wannan sakamakon: [sakamako]. Muna da [lokacin ma'aikata da masu aikin sa-kai].\" Ku zaɓi biyu da za ku iya yi da gaske."
          ],
          steps: ["Ku zaɓi sakamako biyu daga tsarin shirinku.", "Ku nemi AI ya ba ku hanyoyi masu sauƙi na auna kowanne.", "Ku zaɓi waɗanda ƙungiyarku za ta iya tattarawa.", "Ku shirya auna kafin da bayan shiri idan zai yiwu."],
          words: [["Ma'auni (measure)", "yadda za ku san cewa sakamako ya faru, sau da yawa lamba ko kaso."], ["Kafin da bayan", "yin tambaya ɗaya a farko da kuma daga baya, don ganin canji."]],
          slides: [
            { title: "Ma'auni yana nuna sakamako", bullets: ["\"Kason iyalan da damuwarsu game da abinci ta ragu\"", "Ana tambaya lokacin rajista da bayan wata uku"] },
            { title: "Ma'auni masu kyau suna", bullets: ["Da sauƙi", "Ƙungiyarku za ta iya tattara su", "Da gaskiya"] },
            { title: "Kafin da bayan", bullets: ["Ya fi ƙarfi fiye da tambaya sau ɗaya", "Yana nuna canji a tsawon lokaci"] }
          ],
          tryIt: "Ku zaɓi ma'aunin sakamako guda biyu na shirinku, da shawarwarin AI, ku rubuta lokacin da za ku tattara kowanne.",
          youCanNow: "zaɓar ma'aunin sakamako da ƙungiyarku za ta iya tattarawa.",
          quickCheck: [
            { objective: "O3", q: "Me yasa tambaya lokacin rajista da kuma daga baya ya fi ƙarfi fiye da tambaya sau ɗaya?", options: ["Yana nuna canji a tsawon lokaci", "Ya fi gajarta", "Ba ya buƙatar lokacin ma'aikata", "Yana guje wa amfani da lambobi"], answer: 0, why: "Kwatanta kafin da bayan yana nuna canji." },
            { objective: "O3", q: "AI ya ba da shawarar ma'auni uku, amma ɗaya yana buƙatar sa'o'i na lokacin ma'aikata da ba ku da shi. Me za ku yi?", options: ["Ku yi amfani da dukkan uku duk da haka", "Ku zaɓi biyu da za ku iya tattarawa da gaske", "Ku fara ɗaukar mai ba da shawara", "Ku daina aunawa"], answer: 1, why: "Ma'auni masu kyau ƙungiyarku za ta iya tattara su; ku zaɓi biyu da za ku iya yi da gaske." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsara abin da za a auna",
        questions: [
          { objective: "O1", q: "Wanne ne sakamako (outcome)?", options: ["Iyalai ba su damu sosai game da abinci ba", "Abinci 300 da aka raba", "Zaman 40 da aka yi", "Masu aikin sa-kai 25 da aka horar"], answer: 0, why: "Sakamako canje-canje ne a rayuwar mutane." },
          { objective: "O1", q: "Wanne ne ƙididdigar ayyuka (output)?", options: ["Ɗalibai sun ƙara ƙarfin gwiwa", "Zaman koyarwa 40 da aka yi", "Iyalai sun fi samun lafiya", "Masu aikin sa-kai sun ji a shirye suke su jagoranci"], answer: 1, why: "Ƙididdigar ayyuka suna ƙirga abin da kuka yi." },
          { objective: "O2", q: "Tsarin shirin da AI ya yi yana da aikin da ba ku yi. Me za ku yi?", options: ["Ku bar shi", "Ku fara yin shi a ɓoye", "Ku cire shi", "Ku tambayi mai ba da tallafi"], answer: 2, why: "Dole tsarin shiri ya zama gaskiya." },
          { objective: "O3", q: "Wane tsarin aunawa ne ya fi ƙarfi?", options: ["Tambaya sau ɗaya a ƙarshe", "Yin hasashe", "Tambayar ma'aikata kaɗai", "Yin tambaya ɗaya lokacin rajista da bayan wata uku"], answer: 3, why: "Kafin da bayan yana nuna canji." },
          { objective: "O2", q: "Mene ne abubuwan da aka saka (inputs)?", options: ["Abin da kuke sakawa: ma'aikata, masu aikin sa-kai, kuɗi, wuri", "Amsoshin binciken ra'ayi", "Sunayen masu ba da tallafi", "Sakamako"], answer: 0, why: "Abubuwan da aka saka su ne kayan da shiri ke amfani da su." }
        ]
      }
    },
    {
      name: "Babi na 2: Tattarawa, taƙaitawa da ba da rahoto",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rubuta gajeren binciken ra'ayin mahalarta mai adalci",
          minutes: 5,
          goal: "Yi amfani da AI don rubuta daftarin gajeren binciken ra'ayi da ke auna sakamakonku.",
          text: [
            "Binciken ra'ayi (survey) yana tambayar mahalarta abin da ya canja a gare su. Ku gajarta shi, tambayoyi kusan 5 zuwa 8, da kalmomi masu sauƙi da harsunan da suke amfani da su.",
            "Ku tambayi AI: \"Ka rubuta binciken ra'ayi mai tambayoyi 6 ba tare da sunaye ba, don manya a shirinmu na abinci, don auna [sakamako]. Ka yi amfani da kalmomi masu sauƙi a matakin aji 6, galibi tambayoyin zaɓi, da tambaya ɗaya a buɗe. Ka guji tambayoyi masu jagorantar amsa.\"",
            "Ku cire duk tambayar da ke neman sunaye, bayanan lafiya ko matsayin shige da fice, sai dai idan kuna buƙata da gaske kuma kuna da hanyar ajiye shi lafiya. Ku faɗa wa mutane cewa binciken na son rai ne kuma ba zai shafi hidimar da suke samu ba. Kayan aiki kyauta kamar Google Forms ko Microsoft Forms za su iya tattara amsoshi."
          ],
          steps: ["Ku nemi AI ya rubuta gajeren binciken ra'ayi ba tare da sunaye ba da ke auna sakamakonku.", "Ku sake rubuta duk tambayar da ke jagorantar amsa.", "Ku cire tambayoyi game da sunaye ko bayanan sirri da ba ku buƙata.", "Ku ƙara sanarwa cewa binciken na son rai ne.", "Ku gina shi a kayan aikin fom kyauta."],
          words: [["Binciken ra'ayi (survey)", "jerin tambayoyi don sanin abin da mutane ke tunani ko abin da suka fuskanta."], ["Ba tare da sunaye ba (anonymous)", "babu sunaye ko bayanan da za su nuna wanda ya amsa."], ["Tambaya mai jagorantar amsa", "tambayar da ke tura mutane zuwa wata amsa, kamar \"Yaya shirinmu mai kyau ya taimake ku?\""]],
          slides: [
            { title: "Ku gajarta shi", bullets: ["Tambayoyi 5 zuwa 8", "Kalmomi masu sauƙi, harsunan mutanen"] },
            { title: "Ku tambayi AI", bullets: ["Ba tare da sunaye ba, matakin aji 6", "Galibi tambayoyin zaɓi, tambaya ɗaya a buɗe", "Babu tambayoyi masu jagorantar amsa"] },
            { title: "Ku kare mutane", bullets: ["Babu sunaye ko bayanan sirri sai idan ana buƙata", "Na son rai: ba zai shafi hidima ba"] }
          ],
          tryIt: "Ku rubuta daftarin binciken ra'ayi mai tambayoyi 6 ba tare da sunaye ba don shirinku da AI. Ku nemo ku sake rubuta duk tambaya mai jagorantar amsa, kuma ku ƙara sanarwar son rai.",
          youCanNow: "rubuta gajeren binciken ra'ayin mahalarta mai adalci ba tare da sunaye ba, da taimakon AI.",
          quickCheck: [
            { objective: "O4", q: "Wane irin tambayoyi ne ya kamata yawancin binciken ra'ayin ya yi amfani da su?", options: ["Dogayen tambayoyin rubutu", "Tambayoyi game da sunaye da adireshi", "Galibi tambayoyin zaɓi, da tambaya ɗaya a buɗe", "E ko a'a kawai game da ma'aikata"], answer: 2, why: "Prompt ɗin yana neman galibi tambayoyin zaɓi da tambaya ɗaya a buɗe." },
            { objective: "O4", q: "Binciken ra'ayin da AI ya rubuta yana tambayar kowane mahalarci game da cututtukansa. Me za ku yi?", options: ["Ku bar shi don samun ƙarin bayanai", "Ku mayar da shi dole", "Ku ƙara sunayensu ma", "Ku cire shi sai dai idan kuna buƙata da gaske kuma za ku iya ajiye shi lafiya"], answer: 3, why: "Ku cire tambayoyi game da lafiya ko shige da fice sai idan ana buƙata da gaske kuma an ajiye su lafiya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Taƙaita sakamako ba tare da bayyana kowa ba",
          minutes: 5,
          goal: "Taƙaita sakamakon binciken ra'ayi ba tare da sunaye ba da AI, kuma ku duba lambobin da kanku.",
          text: [
            "Kafin ku yi amfani da AI a kan sakamako, ku tabbata bayanan ba su da sunaye, hanyoyin tuntuɓa ko wani abu da zai iya bayyana ko wane ne mutum. Idan za a iya gane wata ƙaramar ƙungiya (misali tsofaffi uku kaɗai masu jin Sifaniyanci), ku haɗa su da wasu ko ku bar waɗannan bayanan.",
            "Kayan aikin fom ɗinku ko spreadsheet zai iya ƙirga amsoshi a madadinku. Sannan za ku iya liƙa ƙididdigar, ba amsoshin mutane na sirri ba, a cikin AI: \"Ga ƙididdigar binciken ra'ayi: [ƙididdiga]. Ka taƙaita manyan abubuwan da aka gano a maki 4 kuma ka ba da shawarar zane (chart) ɗaya.\"",
            "Ku duba kowane kaso da kanku a spreadsheet. AI yana yawan kuskure a lissafi. Don amsoshin tambayoyi a buɗe, ku fara karanta su da kanku ku cire duk abin da zai bayyana mutum kafin ku nemi AI ya rarraba su zuwa jigogi."
          ],
          steps: ["Ku cire sunaye da bayanan da ke bayyana mutum.", "Ku ƙirga amsoshi a kayan aikin fom ko spreadsheet.", "Ku liƙa ƙididdiga, ba amsoshin mutane na sirri ba, a cikin AI.", "Ku nemi gajeren taƙaitawa da shawarar zane.", "Ku duba kowane kaso da kanku."],
          words: [["Bayanai (data)", "bayanan da kuka tattara, kamar amsoshin binciken ra'ayi."], ["Jigo (theme)", "ra'ayin da ke dawowa akai-akai a amsoshin tambayoyi a buɗe."], ["Kaso (percent)", "sashe daga cikin 100, kamar mutane 60 daga cikin 100 kaso 60 ne."]],
          slides: [
            { title: "Ku fara kare mutane", bullets: ["Babu sunaye ko hanyoyin tuntuɓa", "Ana iya gane ƙananan ƙungiyoyi: ku haɗa su"] },
            { title: "Ku ƙirga, sannan ku taƙaita", bullets: ["Ku bar spreadsheet ya ƙirga", "Ku ba AI ƙididdiga, ba amsoshin mutane na sirri ba"] },
            { title: "Ku duba lissafi", bullets: ["AI yana kuskure a lissafi", "Ku duba kowane kaso da kanku"] }
          ],
          tryIt: "Ku yi amfani da ƙididdigar gwaji (misali mutane 30 daga cikin 40 sun ce damuwarsu game da abinci ta ragu). Ku nemi AI ya yi taƙaitawa mai maki 4, sannan ku duba kowane kaso da na'urar lissafi (calculator).",
          youCanNow: "taƙaita sakamako ba tare da sunaye ba da AI, da duba lambobin.",
          quickCheck: [
            { objective: "O5", q: "Me za ku yi da amsoshin tambayoyi a buɗe kafin ku nemi AI ya nemo jigogi?", options: ["Ku karanta su da kanku ku cire duk abin da zai bayyana mutum", "Ku liƙa su duka kamar yadda suke", "Ku goge su", "Ku tura su ga mai ba da tallafi"], answer: 0, why: "Ku fara karanta amsoshi a buɗe ku cire duk abin da zai bayyana mutum." },
            { objective: "O5", q: "Maza biyu kaɗai ne sama da shekaru 70 a cikin mahalarta, don haka ana iya gane su. Me za ku yi?", options: ["Ku ba da rahotonsu daban da sunayensu", "Ku haɗa su da wasu ko ku bar waɗannan bayanan", "Ku nemi AI ya yi hasashen ko su wane ne", "Ku saka amsoshinsu a intanet"], answer: 1, why: "Idan za a iya gane wata ƙaramar ƙungiya, ku haɗa su ko ku bar waɗannan bayanan." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rubuta rahoton tasiri mai shafi ɗaya",
          minutes: 5,
          goal: "Mayar da tsarin shirinku da sakamakonku rahoton tasiri na gaskiya mai shafi ɗaya.",
          text: [
            "Rahoton tasiri yana faɗa wa kwamitin gudanarwarku, masu ba da tallafi da al'umma abin da shirinku ya yi da abin da ya canja. Shafi ɗaya ya isa: buƙatar, abin da kuka yi (ƙididdigar ayyuka), abin da ya canja (sakamako da lambobi), labari ɗaya, da abin da kuka koya.",
            "Ku tambayi AI: \"Da amfani da wannan bayanin KAƊAI, ka rubuta rahoton tasiri mai shafi ɗaya mai waɗannan kanun labarai: Buƙatar, Abin da muka yi, Abin da ya canja, Labari, Abin da muka koya. [tsarin shirinku, ma'auninku, sakamakon da aka duba, labarin da aka raba da izini].\"",
            "Ku saka darasi na gaskiya da kuka koya. Masu ba da tallafi suna amincewa da ƙungiyoyin da ke faɗin abin da bai yi aiki ba da yadda za su inganta. Kada ku taɓa barin AI ya ƙara lambobi ko iƙirarin da ba su cikin bayananku."
          ],
          steps: ["Ku tattara tsarin shirinku, ma'auninku, sakamakon da aka duba da labarin da aka ba da izini.", "Ku nemi AI ya rubuta rahoto mai shafi ɗaya mai kanun labarai biyar, da bayananku kaɗai.", "Ku duba kowace lamba da spreadsheet ɗinku.", "Ku ƙara darasi na gaskiya da aka koya.", "Ku sa abokin aiki ya karanta shi."],
          words: [["Rahoton tasiri (impact report)", "gajeren rahoto kan abin da shiri ya yi da abin da ya canja."], ["Darasin da aka koya", "abin da kuka gano da zai taimaka muku ku fi yi da kyau a gaba."]],
          slides: [
            { title: "Shafi ɗaya, sassa biyar", bullets: ["Buƙatar", "Abin da muka yi da abin da ya canja", "Labari", "Abin da muka koya"] },
            { title: "Ku tambayi AI", bullets: ["\"Da amfani da wannan bayanin kaɗai...\"", "Kanun labarai biyar"] },
            { title: "Ku tsaya kan gaskiya", bullets: ["Kowace lamba daga bayananku", "Ku saka darasin da aka koya", "Abokin aiki ya karanta shi"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta rahoton tasirinku mai shafi ɗaya da tsarin shiri, ma'auni biyu, binciken ra'ayinku, taƙaitaccen sakamako ba tare da sunaye ba, labarin da aka raba da izini, da darasi ɗaya na gaskiya da aka koya.",
          youCanNow: "tsarawa, aunawa da ba da rahoton tasirin shiri da taimakon AI.",
          quickCheck: [
            { objective: "O6", q: "Wane kanu ne ya dace a rahoton tasiri mai shafi ɗaya na darasin?", options: ["Kalmomin sirrin masu ba da gudummawa", "Albashin ma'aikata", "Abin da muka koya", "Adireshin mahalarta"], answer: 2, why: "Kanun labaran su ne buƙatar, abin da muka yi, abin da ya canja, labari da abin da muka koya." },
            { objective: "O6", q: "Rahoton da AI ya rubuta ya ƙara \"kaso 90 na iyalai sun sami aiki\", wanda ba ya cikin bayananku. Me za ku yi?", options: ["Ku bar shi; yana da daɗin ji", "Ku canja shi zuwa kaso 80", "Ku mayar da shi bayanin ƙasan shafi", "Ku cire shi, domin kada AI ya ƙara iƙirarin da ba su cikin bayananku"], answer: 3, why: "Kada ku taɓa barin AI ya ƙara lambobi ko iƙirarin da ba su cikin bayananku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Tattarawa, taƙaitawa da ba da rahoto",
        questions: [
          { objective: "O4", q: "Wace ce tambaya mai jagorantar amsa?", options: ["\"Sau nawa kuka damu game da abinci a watan jiya?\"", "\"Yaya shirinmu mai ban mamaki ya taimake ku?\"", "\"Wace rana kuke zuwa?\"", "\"Ta yaya kuka ji labarinmu?\""], answer: 1, why: "Tana tura mutane zuwa amsa mai kyau." },
          { objective: "O4", q: "Me ya kamata ku faɗa wa mutane game da binciken ra'ayinku?", options: ["Dole ne don samun hidima", "Babu komai", "Na son rai ne kuma ba zai shafi hidimar da suke samu ba", "Za a saka amsoshinsu a fili"], answer: 2, why: "Ya kamata mutane su ji suna da 'yancin amsawa da gaskiya ko kada su amsa kwata-kwata." },
          { objective: "O5", q: "Me ya kamata ku liƙa a cikin AI don taƙaita sakamako?", options: ["Amsoshi kamar yadda suke da sunaye", "Lambobin wayar mahalarta", "Dukan rumbun bayanan abokan hulɗa", "Ƙididdiga ba tare da bayanan da ke bayyana mutum ba"], answer: 3, why: "Ƙididdiga suna kare sirri." },
          { objective: "O5", q: "AI ya ce 30 daga cikin 40 kaso 80 ne. Me za ku yi?", options: ["Ku duba da kanku: kaso 75 ne", "Ku yi amfani da shi", "Ku tara shi zuwa 100", "Ku cire dukan lambobi"], answer: 0, why: "AI yana kuskure a lissafi; 30 daga cikin 40 kaso 75 ne." },
          { objective: "O6", q: "Me yasa za a saka darasin da aka koya a rahoton tasiri?", options: ["Don cike wuri", "Masu ba da tallafi suna amincewa da ƙungiyoyi masu gaskiya da ke ingantawa", "AI ne ya buƙaci haka", "Don ɓoye sakamako"], answer: 1, why: "Gaskiya game da abin da bai yi aiki ba tana gina amincewa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Gudanar da Shirye-shirye da Nuna Tasirinsu",
    questions: [
      { objective: "O1", q: "Ƙididdigar ayyuka (output) ita ce:", options: ["Canji a rayuwar mutane", "Mai ba da gudummawa", "Ƙirgen abin da shirinku ya yi", "Tambayar binciken ra'ayi"], answer: 2, why: "Ƙididdigar ayyuka suna ƙirga ayyuka." },
      { objective: "O1", q: "Sakamako (outcome) shi ne:", options: ["Yawan takardun talla da aka buga", "Kasafin kuɗi", "Adireshin ofis", "Canji a rayuwar mutane saboda shirinku"], answer: 3, why: "Sakamako canje-canje ne ga mutane." },
      { objective: "O1", q: "Me yasa masu ba da tallafi ke neman sakamako?", options: ["Sakamako yana nuna manufar tana aiki", "Ya fi sauƙin ƙirgawa", "Ya fi gajarta", "Masu ba da tallafi ba sa son lambobi"], answer: 0, why: "Sakamako yana nuna canji na gaske." },
      { objective: "O2", q: "Wanne BA sashe na tsarin shiri ba ne?", options: ["Abubuwan da aka saka", "Kalmomin sirrin masu ba da gudummawa", "Ayyuka", "Sakamako"], answer: 1, why: "Tsarin shiri yana da abubuwan da aka saka, ayyuka, ƙididdigar ayyuka da sakamako." },
      { objective: "O2", q: "Ya kamata tsarin shiri ya zama:", options: ["Jerin buri", "Asiri", "Shiri da za ku iya kare shi, mai gaskiya ga abin da kuke yi", "Wanda AI kaɗai ya rubuta"], answer: 2, why: "Dole ya yi daidai da gaskiya." },
      { objective: "O2", q: "Kowane sakamako a tsarin shiri ya kamata ya kasance yana da alaƙa da:", options: ["Mai ba da gudummawa", "Tambari (logo)", "Ranar hutu", "Wani aiki"], answer: 3, why: "Ayyuka ne ke kawo sakamako." },
      { objective: "O3", q: "Ma'auni mai kyau shi ne:", options: ["Mai sauƙi, wanda za a iya tattarawa, kuma mai gaskiya", "Mai wahala kuma mai tsada", "Wanda ba za a iya tattarawa ba", "Ƙirƙirarre"], answer: 0, why: "Dole ƙungiyarku ta iya tattara shi." },
      { objective: "O3", q: "Aunawa kafin da bayan yana taimaka muku:", options: ["Guje wa binciken ra'ayi", "Ganin canji a tsawon lokaci", "Tsallake sakamako", "Ɓoye sakamako"], answer: 1, why: "Kwatantawa tana nuna canji." },
      { objective: "O4", q: "Tsawon binciken ra'ayin mahalarta ya kamata ya kai nawa?", options: ["Tambayoyi 50", "Kalma ɗaya", "Kusan tambayoyi 5 zuwa 8", "Babu iyaka"], answer: 2, why: "Gajerun binciken ra'ayi suna samun ƙarin amsoshi." },
      { objective: "O4", q: "Binciken ra'ayi ba tare da sunaye ba:", options: ["Yana neman cikakken suna", "Na ma'aikata ne kaɗai", "Ba shi da tambayoyi", "Ba shi da sunaye ko bayanan da ke nuna wanda ya amsa"], answer: 3, why: "Rashin sunaye yana kare mahalarta." },
      { objective: "O4", q: "Wace tambayar binciken ra'ayi ya kamata ku cire yawanci?", options: ["Matsayin shige da fice, sai dai idan ana buƙata da gaske kuma an ajiye shi lafiya", "\"Sau nawa kuka zo?\"", "\"Kun ji ana maraba da ku?\"", "\"Me za mu iya ingantawa?\""], answer: 0, why: "Bayanan sirri masu muhimmanci suna jefa mutane cikin haɗari." },
      { objective: "O4", q: "Waɗanne kayan aiki kyauta ne za su iya tattara amsoshin binciken ra'ayi?", options: ["Na'urar lissafi", "Google Forms ko Microsoft Forms", "Firinta", "Cajar waya"], answer: 1, why: "Kayan aikin fom suna tattarawa da ƙirga amsoshi." },
      { objective: "O5", q: "Ana iya gane wata ƙaramar ƙungiya a sakamakonku. Ya kamata ku:", options: ["Ambaci sunayensu", "Saka su a fili", "Haɗa su da wasu ko ku bar waɗannan bayanan", "Ku ƙyale shi"], answer: 2, why: "Ƙananan ƙungiyoyi suna iya bayyana ko su wane ne mutane." },
      { objective: "O5", q: "Wa ya kamata ya ƙirga amsoshin binciken ra'ayi?", options: ["AI yana hasashe", "Mai ba da gudummawa", "Babu kowa", "Kayan aikin fom ɗinku ko spreadsheet"], answer: 3, why: "Spreadsheet yana ƙirgawa daidai." },
      { objective: "O5", q: "AI yana kuskure a lissafi, don haka ya kamata ku:", options: ["Duba kowane kaso da kanku", "Amince da shi", "Cire dukan lambobi", "Tambaye shi sau biyu ku zaɓi ɗaya"], answer: 0, why: "Ku ne ke da alhakin lambobin." },
      { objective: "O5", q: "Jigo (theme) a amsoshin tambayoyi a buɗe shi ne:", options: ["Tsarin launuka", "Ra'ayin da ke dawowa akai-akai", "Nau'in mai ba da gudummawa", "Sunan shiri"], answer: 1, why: "Jigogi suna taƙaita amsoshi a buɗe." },
      { objective: "O6", q: "Ya kamata rahoton tasiri ya zama:", options: ["Shafi 100", "Hotuna kawai", "Kusan shafi ɗaya mai buƙatar, abin da kuka yi, abin da ya canja, labari da darussa", "Kasafin kuɗi kawai"], answer: 2, why: "Shafi ɗaya mai sarari ya isa." },
      { objective: "O6", q: "Wane prompt ne ke sa rahoton tasiri ya kasance mai gaskiya?", options: ["\"Ka ƙara girman lambobinmu.\"", "\"Ka ƙirƙiri labarin nasara.\"", "\"Ka ƙara ƙididdiga masu ban sha'awa.\"", "\"Da amfani da wannan bayanin kaɗai, ka rubuta...\""], answer: 3, why: "Taƙaita AI ga bayananku yana hana iƙirarin ƙarya." },
      { objective: "O6", q: "Labari a rahoton tasiri yana buƙatar:", options: ["Izinin mutumin", "Cikakken sunansa da adireshinsa", "Shahararren mutum", "Babu komai"], answer: 0, why: "Labarai suna buƙatar izini." },
      { objective: "O6", q: "Wa ya kamata ya karanta rahoton tasiri kafin a fitar da shi?", options: ["Babu kowa", "Abokin aiki", "AI kaɗai", "Abokin hamayya"], answer: 1, why: "Mai karatu na biyu yana gano kurakurai." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      6,
      8,
      12,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Tsarin shiri",
        objective: "O2",
        notYet: "Akwai ginshiƙin da ya ɓace, ko yana jera abubuwan da shirin ba ya yi.",
        meets: "Abubuwan da aka saka, ayyuka, ƙididdigar ayyuka da sakamako, duka gaskiya ga shirin.",
        exceeds: "Kowane sakamako yana da alaƙa a sarari da wani aiki."
      },
      {
        name: "Ma'aunin sakamako",
        objective: "O3",
        notYet: "Ma'aunin ƙididdigar ayyuka ne, ko ba za a iya tattara su ba.",
        meets: "Ma'aunin sakamako guda biyu masu sauƙi da gaskiya da ƙungiyar za ta iya tattarawa.",
        exceeds: "Ana tambayar dukansu kafin da bayan shiri don nuna canji."
      },
      {
        name: "Binciken ra'ayi mai adalci",
        objective: "O4",
        notYet: "Akwai tambayoyi masu jagorantar amsa, ko yana neman sunaye ko bayanan sirri ba tare da buƙata ba.",
        meets: "Tambayoyi 5 zuwa 8 masu sauƙi, ba tare da sunaye ba kuma na son rai.",
        exceeds: "An bayar da shi a harsunan da mahalarta ke amfani da su."
      },
      {
        name: "Sakamako ba tare da sunaye ba, an duba su",
        objective: "O5",
        notYet: "Sakamakon zai iya bayyana wani, ko wani kaso ba daidai ba ne.",
        meets: "Taƙaitawa daga ƙididdiga ba tare da bayanan da ke bayyana mutum ba, an duba kowane kaso.",
        exceeds: "An rarraba amsoshi a buɗe zuwa jigogi bayan an cire bayanan da ke bayyana mutum."
      },
      {
        name: "Rahoto mai shafi ɗaya na gaskiya",
        objective: "O6",
        notYet: "Akwai lamba ko iƙirarin da ba ya cikin bayanan, ko labarin ba shi da izini.",
        meets: "Shafi ɗaya mai buƙatar, ƙididdigar ayyuka, sakamako, labarin da aka ba da izini da darasin da aka koya.",
        exceeds: "Abokin aiki ya karanta shi, kuma darasin da aka koya yana faɗin yadda shirin zai inganta."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Shirye-shiryen da suka tattara bayanan sakamako na kafin da bayan cikin kwanaki 90 (binciken biyo baya)",
      "Rahotannin tasiri da aka raba da kwamitin gudanarwa ko mai ba da tallafi cikin kwanaki 90",
      "Sabunta tallafi ko sabon tallafin da ƙungiyoyi suka danganta da rahotannin tasirinsu"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai intanet da spreadsheet kyauta",
      "Mataimakin AI kyauta da Google Forms ko Microsoft Forms",
      "Bayanin shiri ɗaya da kowa zai iya gani, da bayanan gwaji ba tare da sunaye ba idan bayanan gaske ba su shirya ba",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku samar da bayanan gwaji ba tare da sunaye ba don masu koyo su gwada taƙaitawa lafiya.",
      "Ku yi wasan rarraba ƙididdigar ayyuka da sakamako a matsayin ƙungiya kafin gwajin ilimi na farko.",
      "Ku sa masu koyo su duba kason da AI ya lissafa a spreadsheet tare, don su ga sau nawa ake buƙatar gyara su.",
      "Ku tunatar da masu koyo cewa dole binciken ra'ayi ya zama na son rai kuma kada ya shafi hidimar kowa.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

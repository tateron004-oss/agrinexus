"use strict";

// Koach Learn course, Hausa (ha) translation of shared/critical-thinking-misinformation.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "critical-thinking-misinformation-ha",
  lang: "ha",
  translationOf: "critical-thinking-misinformation",
  category: "Seniors and Technology",
  name: "Tunani Mai Zurfi da Gane Labaran Ƙarya",
  skills: "Tsayawa kafin ku yarda ko ku tura, Karatu a gefe (lateral reading), Duba majiya, Binciken hoto da hoto (reverse image search), Gane jabun AI da deepfake, Gane son zuciyarku",
  outcome: "duba saƙo, hoto, bidiyo ko labari kafin ku yarda da shi ko ku tura shi: ku tsaya, ku karanta a gefe don duba majiyar, ku bi diddigin hoto da binciken hoto, ku gane alamun jabun AI da zamba, kuma ku lura idan zuciyarku ce ke jan ku.",
  about: [
    "Kowace rana muna ganin saƙonni, bidiyo, saƙonnin da aka tura mana da kanun labarai. Wasu gaskiya ne, wasu kuskure ne, wasu kuma an ƙirƙira su da gangan don samun kuɗi, sayar da wani abu, tsoratar da mu ko raba kanmu. Kayan AI yanzu suna sa yin hotuna, bidiyo da muryoyi na jabu ya zama mai sauƙi. Sanin yadda ake dubawa fasaha ce ta rayuwa ga kowa.",
    "Wannan kwas ɗin na kowa ne: tsofaffi da ke samun saƙonnin da iyali suka tura, matasa a kafafen sada zumunta, ma'aikatan ƙungiyoyin agaji da ke raba labarai da magoya bayansu, ma'aikata da masu neman aiki, da mutanen da ke dawowa gida da ke koyon abin da ya canja a intanet. Ba sai kun zama ƙwararru ba. Kuna buƙatar 'yan al'adu masu sauri kawai.",
    "Za ku koyi tsayawa kafin ku tura, karatu a gefe don duba majiya, binciken hoto da hoto, gane jabun AI da zamba masu kama da labarai, da gane son zuciyarku. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da atisaye kan saƙo na gaske. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku nemo saƙo, hoto ko saƙon da aka tura muku na gaske da ya ba ku mamaki ko ya sa zuciyarku ta tashi. Ku duba shi da matakan wannan kwas: ku tsaya, ku karanta a gefe game da majiyar, ku nemi wasu majiyoyi amintattu da suka ruwaito shi, ku yi binciken kowane hoto, sannan ku nemi alamun zamba. Ku rubuta hukunci a jimloli uku (gaskiya, ƙarya, mai ruɗarwa, ko ba a tabbata ba tukuna) tare da shaida, sannan ku yanke ko za ku tura shi.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Duk wanda ke ganin saƙonni da labarai: tsofaffi da ke samun saƙonnin da iyali suka tura, matasa a kafafen sada zumunta, ma'aikatan ƙungiyoyin agaji da ke raba labarai, ma'aikata da masu neman aiki, da mutanen da ke dawowa gida da ke koyon abin da ya canja a intanet.",
    startingPoint: "Suna amfani da waya ko kwamfuta don karanta saƙonni, kallon bidiyo da tura saƙonni. Yawancinsu ba su taɓa duba majiya ta hanyar karanta wasu shafuka ba, ko yin binciken hoto da hoto, ko amfani da kalmar sirri ta iyali don kariya daga zambar murya ba.",
    gap: "Saƙonnin ƙarya, jabun AI da zamba suna yaɗuwa da sauri, kuma suna jawo asarar kuɗi, lafiya da amana. Masu koyo suna buƙatar 'yan al'adun dubawa masu sauri don su yanke abin da za su yarda da shi da wanda za su tura, su kare iyalansu daga zamba, kuma su lura idan zuciyarsu ce ke jan su.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Na'urori: waya ko kwamfuta mai burauzar intanet",
      "Menu na manhajoji suna canjawa; darussa suna bayanin aikin idan sunayen menu na iya bambanta",
      "Ana duba maganganu game da lafiya, kuɗi da doka a majiyoyin hukuma ko wurin ƙwararre",
      "Sirri: masu koyo ba sa raba saƙonnin sirri na iyalansu a aji"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da waya ko burauzar intanet ba za su iya fara ɗaukar kwas ɗin \"Using a Smartphone and Tablet\" (Amfani da Wayar Zamani da Tablet)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan wani saƙo ya sa zuciyarku ta tashi sosai", action: "tsayawa ku tambayi wane ne ya yi shi, mene ne shaidarsa, da me wasu ke cewa", standard: "kafin ku yarda da shi ko ku tura shi" },
    { id: "O2", condition: "Idan aka ba ku wani shafin intanet ko asusu", action: "duba wane ne a bayansa ta hanyar karanta abin da wasu majiyoyi amintattu ke cewa game da shi", standard: "kuna samun aƙalla wasu majiyoyi biyu kafin ku yanke shawara" },
    { id: "O3", condition: "Idan aka ba ku hoto mai ban mamaki", action: "yin binciken hoto da hoto don gano inda kuma yaushe ya fara bayyana", standard: "kuna rubuta mafi tsufan kwanan watan da kuka samu, da ko ya dace da saƙon" },
    { id: "O4", condition: "Idan aka ba ku bidiyo, hoto ko murya da wataƙila AI ne ya yi su", action: "kwatanta shi da asusun hukuma na mutumin da labaran amintattu, da amfani da kalmar sirri ta iyali don kiran waya", standard: "ba tare da dogara ga yadda yake kama ko yadda yake sauti kaɗai ba" },
    { id: "O5", condition: "Idan aka ba ku talla ko saƙo da ke alƙawarin kuɗi, magani ko babban rangwame", action: "lissafa alamun gargaɗin zamba da kai rahotonsa", standard: "kuna gano kowace alamar gargaɗi kafin ku danna, ku biya ko ku yi rajista" },
    { id: "O6", condition: "Bayan kun duba wani saƙo mai ban mamaki", action: "rubuta gajeren hukunci tare da shaida, da lura da yadda zuciyarku ko ra'ayoyinku suka iya jan ku", standard: "a jimloli uku tare da hukunci a sarari: gaskiya, ƙarya, mai ruɗarwa, ko ba a tabbata ba tukuna" }
  ],
  chapters: [
    {
      name: "Babi na 1: Duba abin da kuke gani",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ku tsaya ku duba magana",
          minutes: 5,
          goal: "Ku tsaya kafin ku yarda ko ku tura, ku yi tambayoyi uku masu sauri.",
          text: [
            "Saƙonnin ƙarya suna yaɗuwa da sauri idan suka sa mu ji wani abu mai ƙarfi: fushi, tsoro, alfahari ko murna sosai. Wannan jin shi ne alamarku ta tsayawa. 'Yan daƙiƙoƙi na dubawa za su iya hana ku tura abin ƙarya ga mutanen da suka amince da ku.",
            "Ku yi tambayoyi uku. Wane ne a bayan wannan? (Kafar labarai ta gaske, ofishin gwamnati, likita, ko asusun da ba ku taɓa jin labarinsa ba?) Mene ne shaidar? (Hanyar haɗi zuwa bincike, takarda, bidiyon dukkan abin da ya faru, ko maganar wani kawai?) Me sauran majiyoyi amintattu ke cewa? (Akwai wani kuma da ke ruwaito wannan?)",
            "Akwai matakai masu amfani da ake kira SIFT (daga Turanci): Stop, ku tsaya; Investigate, ku binciki majiyar; Find, ku nemi labari mafi kyau daga wasu; Trace, ku bi diddigin magana, kalamai da hotuna har zuwa inda suka fara bayyana. Za ku yi atisayen kowane sashe a wannan kwas. Idan ba ku tabbata ba, ba laifi ku jira. Rashin turawa koyaushe zaɓi ne."
          ],
          steps: ["Ku lura da jin mai ƙarfi: wannan shi ne alamarku ta tsayawa.", "Ku tambaya: wane ne a bayan wannan?", "Ku tambaya: mene ne shaidar?", "Ku tambaya: me sauran majiyoyi amintattu ke cewa?", "Ba ku tabbata ba? Kada ku tura tukuna."],
          words: [["Labarin ƙarya (misinformation)", "bayanin ƙarya da mutane ke yaɗawa wataƙila suna zaton gaskiya ne."], ["Labarin ƙarya da gangan (disinformation)", "bayanin ƙarya da aka ƙirƙira kuma aka yaɗa da gangan don a ruɗi mutane."], ["Magana (claim)", "abin da wani saƙo ya ce gaskiya ne."]],
          slides: [
            { title: "Jin mai ƙarfi = ku tsaya", bullets: ["Saƙonnin ƙarya suna yaɗuwa da fushi, tsoro da murna", "'Yan daƙiƙoƙi na dubawa suna kare mutanen da suka amince da ku"] },
            { title: "Tambayoyi uku masu sauri", bullets: ["Wane ne a bayan wannan?", "Mene ne shaidar?", "Me sauran majiyoyi amintattu ke cewa?"] },
            { title: "SIFT", bullets: ["Stop: ku tsaya", "Investigate: ku binciki majiyar", "Find: ku nemi labari mafi kyau", "Trace: ku bi diddigi har zuwa asalin"] },
            { title: "Ba ku tabbata ba?", bullets: ["Ku jira", "Rashin turawa koyaushe zaɓi ne"] }
          ],
          sources: [
            { name: "Digital Inquiry Group: Civic Online Reasoning (darussa kyauta kan tantance bayanai a intanet)", url: "https://cor.inquirygroup.org/" }
          ],
          tryIt: "Ku buɗe kafar sada zumuntarku, manhajar labarai ko rukunin hira na iyali. Ku nemo saƙo ɗaya da ya sa zuciyarku ta tashi. Ku rubuta amsoshin tambayoyi uku: wane ne, wace shaida, me wasu ke cewa.",
          youCanNow: "tsayawa idan wani saƙo ya tayar da zuciyarku, ku tambayi wane ne a bayansa, mene ne shaidar, da me wasu ke cewa.",
          quickCheck: [
            { objective: "O1", q: "Wace tambaya ce ke taimaka muku duba magana?", options: ["Mutane nawa ne suka so (like) shi?", "Wane ne ya yi wannan, kuma mene ne shaidarsa?", "Hoton yana da launi mai kyau?", "Abokina ya tura shi?"], answer: 1, why: "Tambayar wane ne ya yi shi da wace shaida yake da ita yana cikin tsayawa don dubawa." },
            { objective: "O1", q: "Rukunin hira na iyali ya tura gargaɗi mai ban tsoro. Me za ku fara yi?", options: ["Ku tura shi ga kowa nan take", "Ku goge rukunin hirar", "Ku tsaya ku duba kafin ku tura", "Ku amsa da manyan baƙaƙe duka"], answer: 2, why: "Jin mai ƙarfi alama ce ta tsayawa ku fara dubawa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Karatu a gefe: duba majiya",
          minutes: 5,
          goal: "Ku duba wane ne a bayan wani shafi ko asusu ta hanyar karanta wasu shafuka game da shi.",
          text: [
            "Shafukan jabu suna iya yin kama da na ƙwararru sosai, da tambari (logo), shafin \"About us\" (game da mu) da sunaye masu kama da na hukuma. Karanta shafin da kansa ba zai faɗa muku ko za ku iya amincewa da shi ba. Ƙwararrun masu tantance gaskiya suna yin wani abu dabam: suna barin shafin su karanta a gefe. Ana kiran wannan lateral reading (karatu a gefe).",
            "Ku buɗe sabon shafi (tab) ku nemi sunan shafin, ƙungiyar ko mutumin, tare da kalmomi kamar \"who funds\" (wa ke ba da kuɗi) ko \"reliable\" (amintacce). Ku ga me wasu ke cewa game da su: kafafen labarai, makalar Wikipedia game da su, ko shafukan tantance gaskiya kamar AP Fact Check, Reuters Fact Check, PolitiFact, FactCheck.org ko Snopes. Magana game da lafiya? Ku duba abin da likitanku ko shafukan lafiya na hukuma ke cewa. Magana game da shirin gwamnati? Ku je shafin hukuma, wanda sau da yawa yake ƙarewa da .gov.",
            "Ku kuma nemi labarin iri ɗaya daga aƙalla majiyoyi amintattu biyu da kuka riga kuka sani. Idan shafi ɗaya da ba a sani ba ne kaɗai ke ruwaito wani babban abu, ku yi hankali."
          ],
          steps: ["Kada ku yanke hukunci kan shafi bisa kamanninsa ko shafinsa na \"About us\".", "Ku buɗe sabon shafi (tab).", "Ku nemi sunan shafin, ƙungiyar ko mutumin tare da \"reliable\" ko \"who funds\".", "Ku karanta abin da kafafen labarai, Wikipedia ko masu tantance gaskiya ke cewa game da su.", "Ku nemi labarin iri ɗaya daga majiyoyi amintattu biyu."],
          words: [["Karatu a gefe (lateral reading)", "duba majiya ta hanyar barinta da karanta abin da wasu shafuka ke cewa game da ita."], ["Mai tantance gaskiya (fact-checker)", "mutum ko ƙungiya da aikinsu shi ne duba ko maganganu gaskiya ne."]],
          slides: [
            { title: "Shafukan jabu suna iya kama da na gaske", bullets: ["Tambari, shafin \"About us\", sunaye na hukuma", "Karanta shafin da kansa bai isa ba"] },
            { title: "Ku karanta a gefe", bullets: ["Ku buɗe sabon shafi (tab)", "Ku nemi sunan tare da \"reliable\" ko \"who funds\"", "Ku ga me wasu ke cewa game da su"] },
            { title: "Inda za ku duba", bullets: ["Kafafen labarai da Wikipedia", "Masu tantance gaskiya: AP, Reuters, PolitiFact, FactCheck.org, Snopes", "Shafukan hukuma, sau da yawa suna ƙarewa da .gov"] },
            { title: "Majiyoyi amintattu biyu", bullets: ["Shafi ɗaya da ba a sani ba ne kaɗai ke ruwaito babban labari?", "Ku yi hankali"] }
          ],
          sources: [
            { name: "Digital Inquiry Group: Gabatarwa ga Lateral Reading (Civic Online Reasoning)", url: "https://cor.inquirygroup.org/" }
          ],
          tryIt: "Ku ɗauki saƙon daga Darasi na 1. Ku buɗe sabon shafi ku nemi sunan shafin ko asusun da ya wallafa shi. Ku rubuta jimla ɗaya game da abin da wasu majiyoyi ke cewa game da shi, da ko wata kafa amintacciya ta ruwaito labarin iri ɗaya.",
          youCanNow: "duba shafin intanet ko asusu ta hanyar karanta abin da wasu majiyoyi amintattu ke cewa game da shi.",
          quickCheck: [
            { objective: "O2", q: "Mene ne karatu a gefe (lateral reading)?", options: ["Buɗe sababbin shafuka don ganin me wasu majiyoyi ke cewa game da wani shafi", "Karanta shafi daga sama zuwa ƙasa a hankali", "Karanta kanun labari kawai", "Karanta shafin \"About us\" na shafin"], answer: 0, why: "Karatu a gefe yana duba majiya ta hanyar barinta da karanta wasu game da ita." },
            { objective: "O2", q: "Kun ga shafin labarai da ba ku taɓa jin labarinsa ba da babban labari. Me za ku yi?", options: ["Ku amince da shi domin yana kama da na ƙwararru", "Ku tura shi don wasu su yanke shawara", "Ku karanta shafinsa na \"About us\" kawai", "Ku nemi sunan shafin ku ga me majiyoyi amintattu ke cewa"], answer: 3, why: "Abin da wasu ke cewa game da shafi yana faɗa muku fiye da abin da yake faɗa game da kansa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Binciken hoto da hoto: daga ina wannan hoton ya fito?",
          minutes: 5,
          goal: "Ku yi amfani da binciken hoto da hoto don gano inda hoto ya fara bayyana.",
          text: [
            "Saƙonnin ƙarya da yawa suna amfani da hoto na gaske tare da labarin ƙarya: hoton ambaliya na shekarun baya da aka tura a matsayin na \"yau\", ko hoto daga wata ƙasa. Binciken hoto da hoto (reverse image search) yana nemo wasu wuraren da hoton ya bayyana a intanet, kuma sau da yawa yana nuna ainihin kwanan watansa da labarinsa.",
            "A kwamfuta: ku je google.com ku danna alamar kyamara (\"Search by image\"), sannan ku ɗora hoton ko ku ja shi zuwa akwatin bincike. A burauzar Chrome kuma kuna iya danna hoto a wani shafi da maɓallin dama (right-click) ku zaɓi \"Search with Google Lens\". A waya, manhajar Google da Google Lens suna bar ku yin bincike da hoto ko hoton allo (screenshot). TinEye (tineye.com) wani shafin binciken hoto ne kyauta.",
            "Ku duba sakamakon don nemo mafi tsufan kwafi, wurin da ya fara bayyana, da labarai ko binciken masu tantance gaskiya game da shi. Idan hoton daga wani lokaci, wuri ko abin da ya faru ne dabam da abin da saƙon ya ce, saƙon mai ruɗarwa ne ko da hoton na gaske ne."
          ],
          steps: ["Ku ajiye hoton ko ku ɗauki hoton allo.", "Ku buɗe binciken hoto na Google (alamar kyamara) ko Google Lens, ko tineye.com.", "Ku ɗora hoton.", "Ku nemi mafi tsufan kwafi, inda ya fara bayyana, da duk wani binciken masu tantance gaskiya.", "Ku kwatanta: shin ainihin labarin ya dace da abin da saƙon ya ce?"],
          words: [["Binciken hoto da hoto (reverse image search)", "bincike da hoto don gano wasu wuraren da ya bayyana a intanet."], ["Hoton allo (screenshot)", "hoton abin da ke kan allonku."], ["Mai ruɗarwa (misleading)", "amfani da abu na gaske ta hanyar da ke ba da ra'ayin ƙarya."]],
          slides: [
            { title: "Hoto na gaske, labarin ƙarya", bullets: ["Tsofaffin hotuna da ake turawa a matsayin na \"yau\"", "Hotuna daga wani wuri ko wani abin da ya faru"] },
            { title: "Yadda ake bincike da hoto", bullets: ["google.com: ku danna alamar kyamara, ku ɗora hoton", "Chrome: maɓallin dama (right-click), \"Search with Google Lens\"", "Waya: manhajar Google ko Lens; da kuma tineye.com"] },
            { title: "Ku karanta sakamakon", bullets: ["Ku nemo mafi tsufan kwafi", "A ina ya fara bayyana?", "Akwai binciken masu tantance gaskiya?"] },
            { title: "Ku kwatanta", bullets: ["Wani lokaci, wuri ko abin da ya faru dabam?", "To saƙon mai ruɗarwa ne"] }
          ],
          sources: [
            { name: "Taimakon Google Search: Bincike da hoto", url: "https://support.google.com/websearch/answer/1325808" }
          ],
          tryIt: "Ku nemo hoto mai ban mamaki a wani saƙo ko jerin labarai. Ku ɗauki hoton allo ku yi binciken hoto da hoto. Ku rubuta mafi tsufan kwanan watan da za ku iya samu, da ko ya dace da labarin saƙon.",
          youCanNow: "yin binciken hoto da hoto da faɗin ko ana amfani da hoto na gaske tare da labarin ƙarya.",
          quickCheck: [
            { objective: "O3", q: "Me binciken hoto da hoto yake amfani da shi wajen bincike?", options: ["Kalmar da kuka rubuta", "Lambar waya", "Rikodin murya", "Hoto"], answer: 3, why: "Binciken hoto da hoto yana neman wasu kwafin hoto." },
            { objective: "O3", q: "Bincike ya nuna hoton \"guguwar yau\" ya fara bayyana shekaru biyar da suka wuce. Me za ku yanke?", options: ["Saƙon mai ruɗarwa ne", "Saƙon gaskiya ne", "Hoton na jabu ne", "Binciken ya lalace"], answer: 0, why: "Tsohon hoto na gaske da aka tura a matsayin sabo mai ruɗarwa ne." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Duba abin da kuke gani",
        questions: [
          { objective: "O1", q: "Wani saƙo ya sa ku fusata sosai. Mene ne mataki na farko mafi kyau?", options: ["Ku tura shi nan take", "Ku tsaya ku duba kafin ku tura", "Ku yi sharhi da manyan baƙaƙe duka", "Ku tura shi ga dukkan iyalinku"], answer: 1, why: "Jin mai ƙarfi alama ce ta tsayawa ku duba." },
          { objective: "O2", q: "Mene ne ma'anar karatu a gefe (lateral reading)?", options: ["Karanta shafin \"About us\" na shafin a hankali", "Karanta kanun labarai kawai", "Karanta sharhohi", "Barin shafin don ganin me wasu majiyoyi ke cewa game da shi"], answer: 3, why: "Masu tantance gaskiya suna karatu a gefe a sababbin shafuka (tabs)." },
          { objective: "O2", q: "Sabon shafin intanet mai tambari na ƙwararru ya ruwaito babban labari da babu wanda ya ruwaito. Me ya kamata ku yi?", options: ["Ku nemi labarin daga majiyoyi amintattu biyu", "Ku yarda da shi; tambarin yana kama da na hukuma", "Ku tura shi don wasu su yanke shawara", "Ku biya kuɗi don karanta ƙari"], answer: 0, why: "Dole majiyoyi amintattu su tabbatar da babban labari." },
          { objective: "O3", q: "Me binciken hoto da hoto yake taimaka muku ku gano?", options: ["Kalmar sirrin mai ɗaukar hoton", "Wa ya so (like) hoton", "Inda kuma hoto ya bayyana a intanet da lokacin da ya fara bayyana", "Kyamara mafi kyau"], answer: 2, why: "Yana bin diddigin hoto har zuwa asalinsa." },
          { objective: "O3", q: "Hoton ambaliya na gaske daga 2015 aka tura a matsayin na \"yau\". Saƙon:", options: ["Gaskiya ne, domin hoton na gaske ne", "Mai ruɗarwa ne", "Deepfake ne", "Binciken mai tantance gaskiya ne"], answer: 1, why: "Hoto na gaske tare da labarin ƙarya mai ruɗarwa ne." }
        ]
      }
    },
    {
      name: "Babi na 2: Jabun AI, zamba da tunaninku",
      lessons: [
        {
          objectives: ["O4"],
          title: "Gane deepfake da jabun AI",
          minutes: 5,
          goal: "Ku duba hoto, bidiyo ko murya da wataƙila AI ne ya yi su.",
          text: [
            "Kayan AI yanzu suna iya yin hotuna, bidiyo da muryoyi da suke kama da na gaske. Deepfake zai iya nuna sanannen mutum yana faɗin abin da bai taɓa faɗa ba. Kwaikwayon murya (voice clone) zai iya kwaikwayon wani a iyali daga ɗan gajeren rikodin muryarsa.",
            "Tsofaffin dabaru kamar ƙirga yatsu ko neman kunnuwa marasa haske suna kama wasu jabu, amma sababbin kayan AI ba sa yin kuskure sosai, don haka kada ku dogara ga kamanni kaɗai. Ku duba yanayin (context) a maimakon haka. Wane ne ya fara wallafa shi? Yana kan asusun hukuma na gaske na mutumin ko ƙungiyar? Kafafen labarai amintattu sun ruwaito shi? Wasu dandali da kayan AI suna saka alama ko ɓoyayyiyar alama a abubuwan AI, amma jabu da yawa ba su da ita, don haka rashin alama ba ya tabbatar cewa abu na gaske ne.",
            "Don kiran waya da saƙonnin murya, shawarar FTC (hukumar kare masu sayayya ta Amurka) a sauƙaƙe take: kada ku amince da muryar. Idan \"jika\" ko \"maigida\" ya kira yana neman kuɗi ko bayanan sirri, ku katse wayar ku sake kiransa ta lambar da kuka riga kuka sani. Wasu iyalai suna yarda kan kalmar sirri ta gaggawa."
          ],
          steps: ["Ku ƙara yin hankali da bidiyo masu ban tsoro, gajerun bidiyon shahararrun mutane da saƙonnin murya na gaggawa.", "Kada ku dogara ga kamanni kaɗai.", "Ku duba wane ne ya fara wallafa shi, da ko yana kan asusun hukuma na gaske.", "Ku nemi labarai daga kafafe amintattu.", "Don murya: ku katse wayar ku sake kira ta lambar da kuka sani."],
          words: [["Deepfake", "bidiyo, hoto ko sauti na jabu da aka yi da AI don ya yi kama ko ya yi sauti kamar mutum na gaske."], ["Kwaikwayon murya (voice clone)", "kwafin muryar wani da AI ya yi."], ["Abin da AI ya yi (AI-generated)", "abin da kayan AI ya ƙirƙira, ba wanda aka ɗauka daga rayuwa ta gaske ba."]],
          slides: [
            { title: "AI zai iya yin jabu", bullets: ["Hotuna, bidiyo da muryoyi", "Shahararrun mutane suna faɗin abin da ba su taɓa faɗa ba", "Muryoyin da aka kwaikwaya daga ɗan gajeren rikodi"] },
            { title: "Kada ku dogara ga kamanni kaɗai", bullets: ["Hannaye marasa daidai ko rashin haske suna kama wasu jabu", "Sababbin kayan AI ba sa yin kuskure sosai", "Rashin alama ba yana nufin na gaske ba ne"] },
            { title: "Ku duba yanayin", bullets: ["Wane ne ya fara wallafa shi?", "Yana kan asusun hukuma na gaske?", "Kafafe amintattu sun ruwaito shi?"] },
            { title: "Murya: kada ku amince da muryar", bullets: ["Ku katse wayar", "Ku sake kira ta lambar da kuka sani", "Ku yi tunanin kalmar sirri ta iyali"] }
          ],
          sources: [
            { name: "Gargaɗin FTC ga masu sayayya: 'Yan damfara suna amfani da AI wajen zambar gaggawar iyali", url: "https://consumer.ftc.gov/consumer-alerts/2023/03/scammers-use-ai-enhance-their-family-emergency-schemes" }
          ],
          tryIt: "Ku nemo bidiyo ko hoton wani sanannen mutum da ya karaɗe intanet. Ku duba wane ne ya fara wallafa shi, ko yana kan asusun hukuma na mutumin, da ko kafafen labarai amintattu sun ambace shi. Sannan ku yarda kan kalmar sirri ta iyali da wani da kuke ƙauna.",
          youCanNow: "duba abin da wataƙila jabun AI ne ta yanayinsa, da kare kanku daga muryoyin da aka kwaikwaya.",
          quickCheck: [
            { objective: "O4", q: "Mene ne amfanin kalmar sirri ta iyali?", options: ["Shiga asusun bankinku", "Tabbatar cewa mai kiran wani ne a iyalinku da gaske", "Shiga rukunin hira", "Yin muryoyin AI"], answer: 1, why: "Kalmar sirri tana taimaka muku tantance mai kira idan ana iya kwaikwayon murya." },
            { objective: "O4", q: "Wani bidiyo yana nuna sanannen mutum yana faɗin wani abu mai ban tsoro. Me za ku yi?", options: ["Ku tura shi domin yana kama da na gaske", "Ku yanke hukunci ta duba fuskar da kyau", "Ku ɗauka na jabu ne ku tura wannan", "Ku fara duba asusunsa na hukuma da labarai amintattu"], answer: 3, why: "Ku duba majiyar da labaran amintattu; kamanni kaɗai bai isa ba." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Zambar da ke amfani da labaran ƙarya",
          minutes: 5,
          goal: "Ku gane labaran ƙarya da tallace-tallace da ainihi zamba ne.",
          text: [
            "Zamba da yawa suna yin ado kamar labarai. Wata makalar ƙarya tana nuna sanannen mutum yana \"bayyana\" hanyar zuba jari don yin arziki da sauri, maganin al'ajabi, ko kuɗin gwamnati kyauta, da hanyar haɗi don yin rajista. Roƙon agaji na jabu suna bayyana nan da nan bayan bala'i. Tallace-tallacen jabu a kafafen sada zumunta suna alƙawarin manyan rangwame na \"lokaci ƙayyadadde\". Wasu labaran ƙarya suna amfani da bidiyon AI na shahararrun mutane ko masu karanta labarai.",
            "Alamun gargaɗi: yana gaggauta ku; yana alƙawarin kuɗi mai yawa, magani ko kyauta; yana neman ku biya da katin kyauta (gift card), tura kuɗi ta banki (wire transfer) ko kuɗin intanet (cryptocurrency); yana neman kalmomin sirri, lambobin tabbatarwa (code) ko lambobin shaida; ko hanyar haɗin tana zuwa shafin da ba na gaske ba. FTC ta ce 'yan damfara ne kaɗai ke cewa ku sayi katin kyauta don biyan su.",
            "Abin da za ku yi: kada ku danna hanyar haɗin. Ku je shafin ainihin ƙungiyar ta hanyar rubuta adireshinsa da kanku, ko ku kira lambar da kuka riga kuka sani. Ku ba da gudummawa ga ƙungiyoyin agaji da za ku iya bincika. Idan ku ko wani da kuke ƙauna kun yi asarar kuɗi, ku tuntuɓi bankinku nan take, sannan ku kai rahoton zambar ga FTC a ReportFraud.ftc.gov (a Amurka)."
          ],
          steps: ["Ku lura da saƙonni masu kama da labarai da ke sayar da wani abu ko neman kuɗi.", "Ku nemi alamun gargaɗi: gaggawa, manyan alƙawura, katin kyauta, tura kuɗi ko crypto, code.", "Kada ku danna hanyar haɗin.", "Ku rubuta ainihin adireshin shafin da kanku ko ku kira lambar da kuka sani.", "Kun yi asarar kuɗi? Ku kira bankinku, sannan ku kai rahoto a ReportFraud.ftc.gov."],
          words: [["Zamba (scam)", "dabarar satar kuɗi ko bayanai."], ["Phishing (kamun bayanai)", "saƙonnin jabu da ke ƙoƙarin sa ku danna hanyar haɗi ko ku bayyana bayanan sirri."], ["Saƙon talla (sponsored post)", "tallar da aka biya kuɗinta a kafar sada zumunta; wataƙila ba a duba ta ba."]],
          slides: [
            { title: "Zamba masu ado kamar labarai", bullets: ["Sanannen mutum yana \"bayyana\" zuba jari ko magani", "Ƙungiyoyin agajin bala'i na jabu", "Bidiyon AI na shahararrun mutane ko masu karanta labarai"] },
            { title: "Alamun gargaɗi", bullets: ["Yana gaggauta ku", "Kuɗi mai yawa, magani ko kyauta", "Katin kyauta, tura kuɗi ta banki ko crypto", "Yana neman kalmomin sirri, code ko lambobin shaida"] },
            { title: "Abin da za ku yi", bullets: ["Kada ku danna hanyar haɗin", "Ku rubuta ainihin adireshin shafin da kanku", "Ku kira lambar da kuka riga kuka sani"] },
            { title: "Kun yi asarar kuɗi?", bullets: ["Ku kira bankinku nan take", "Ku kai rahoto a ReportFraud.ftc.gov (Amurka)"] }
          ],
          sources: [
            { name: "FTC: Kauce wa da kai rahoton zambar katin kyauta", url: "https://consumer.ftc.gov/articles/avoiding-and-reporting-gift-card-scams" },
            { name: "FTC: Masu yin kamar gwamnati ko kamfani", url: "https://consumer.ftc.gov/government-business-impersonators" },
            { name: "FTC: ReportFraud (kai rahoton zamba)", url: "https://reportfraud.ftc.gov/" }
          ],
          tryIt: "Ku duba kafar sada zumuntarku ko saƙonninku don nemo talla ko saƙo ɗaya da ke alƙawarin kuɗi, magani ko babban rangwame. Ku lissafa kowace alamar gargaɗi da kuke gani. Idan zamba ce, ku yi amfani da menu na dandalin don kai rahotonta.",
          youCanNow: "gane zamba masu kama da labarai, kauce wa hanyoyin haɗinsu, da sanin inda za ku kai rahotonsu.",
          quickCheck: [
            { objective: "O5", q: "Wace ce alamar cewa saƙo zamba ne?", options: ["Yana neman ku biya da katin kyauta", "Yana da hanyar haɗi zuwa adireshin .gov na gaske da kuka rubuta da kanku", "Yana ba ku lokacin tunani", "Ya fito daga ƙungiyar agaji da kuka sani kuma kuka amince da ita"], answer: 0, why: "Neman biya da katin kyauta alama ce bayyananniya ta zamba." },
            { objective: "O5", q: "Wata talla ta ce wani shahararren likita ya gano maganin al'ajabi kuma dole ku saya yau. Me za ku yi?", options: ["Ku saya kafin ya ƙare", "Ku tura wa abokai marasa lafiya", "Ku tambayi likitanku ko majiyoyin lafiya na hukuma, ku kai rahoton tallar", "Ku ba da lambar katinku don ƙarin bayani"], answer: 2, why: "Maganganun lafiya ana kai su wurin likita ko majiyar hukuma, kuma ya kamata a kai rahoton zamba." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Son zuciya a tunaninku",
          minutes: 5,
          goal: "Ku lura idan ra'ayoyinku ko zuciyarku ne ke jagorantar abin da kuke karɓa a matsayin gaskiya.",
          text: [
            "Jabun da suka fi wuyar ganewa su ne waɗanda muke son mu yarda da su. Confirmation bias (son tabbatar da ra'ayi) yana nufin muna saurin karɓar abin da ya dace da abin da muka riga muka yi tunani, kuma muna neman aibi sosai a abin da bai dace ba. Kowa yana yin haka, ko da wane shekaru, asali ko siyasa yake da shi.",
            "Kafafen sada zumunta suna iya ƙara ƙarfinsa. Jerin saƙonnin (feed) suna nuna mana ƙarin abin da muka saba dannawa, don haka za mu iya ƙarewa muna ganin ɓangare ɗaya kaɗai. Saƙon da aboki ya tura yana jin kamar amintacce, amma wataƙila abokinku ma bai duba shi ba.",
            "Al'adu uku suna taimakawa. Ku tambaya: \"Zan yarda da wannan idan game da ɗaya ɓangaren ne?\" Ku tambaya: \"Wace shaida ce za ta canja ra'ayina?\" Kuma ku nemi majiya amintacciya da wataƙila ba ta yarda ba. Canja ra'ayi idan gaskiya ta canja ƙarfi ne, ba rauni ba. Kafin ku tura, ku sake duba sau ɗaya: gaskiya ne, yana da amfani, kuma adalci ne?"
          ],
          steps: ["Ku lura idan saƙo ya yi muku \"daidai\" da abin da kuka riga kuka yi tunani.", "Ku tambaya: zan yarda da wannan idan game da ɗaya ɓangaren ne?", "Ku tambaya: wace shaida ce za ta canja ra'ayina?", "Ku nemi majiya amintacciya da wataƙila ba ta yarda ba.", "Kafin ku tura: gaskiya ne, yana da amfani, kuma adalci ne?"],
          words: [["Son zuciya (bias)", "karkata da ke iya tura tunaninmu wani gefe ba tare da mun lura ba."], ["Son tabbatar da ra'ayi (confirmation bias)", "karɓar abin da ya dace da ra'ayoyinmu da shakkar abin da bai dace ba."], ["Ɗakin amo (echo chamber)", "wurin da kuke jin ra'ayoyi masu kama da naku kaɗai."]],
          slides: [
            { title: "Muna yarda da abin da muke so", bullets: ["Son tabbatar da ra'ayi: saurin \"eh\" ga abin da ya dace", "Duba da tsanani ga abin da bai dace ba", "Kowa yana yin haka"] },
            { title: "Feed suna ƙara ƙarfinsa", bullets: ["Suna nuna ƙarin abin da muke dannawa", "Wataƙila mu ga ɓangare ɗaya kaɗai", "Abokai ma suna turawa ba tare da dubawa ba"] },
            { title: "Al'adu uku", bullets: ["\"Zan yarda da wannan game da ɗaya ɓangaren?\"", "\"Wace shaida ce za ta canja ra'ayina?\"", "Ku nemi majiya amintacciya da ba ta yarda ba"] },
            { title: "Kafin ku tura", bullets: ["Gaskiya ne?", "Yana da amfani?", "Adalci ne?"] }
          ],
          tryIt: "Aikin ƙarshe: ku ɗauki saƙo ɗaya mai ban mamaki ku duba shi da kowane mataki a wannan kwas. Ku rubuta hukunci a jimloli uku (gaskiya, ƙarya, mai ruɗarwa, ko ba a tabbata ba tukuna) tare da shaidarku, ku kuma rubuta hanya ɗaya da zuciyarku ta iya jan ku.",
          youCanNow: "duba saƙo daga farko har ƙarshe, da lura idan son zuciyarku yana jan ku.",
          quickCheck: [
            { objective: "O6", q: "Mene ne ɗakin amo (echo chamber)?", options: ["Wurin da kuke jin ra'ayoyi masu kama da naku kaɗai", "Ɗaki mai ƙara mai ƙarfi", "Shafin tantance gaskiya", "Wani nau'in kayan AI"], answer: 0, why: "A ɗakin amo yawanci kuna jin abin da kuka riga kuka yi tunani ne." },
            { objective: "O6", q: "Saƙo game da ɗan siyasa da ba ku so ya faranta muku rai kuma kuna son ku tura shi. Me za ku yi?", options: ["Ku tura shi domin ya dace da abin da kuke tunani", "Ku tura shi da barkwanci", "Ku tambayi ko za ku yarda da shi game da ɗaya ɓangaren, ku duba shi", "Ku ƙi duk labarai daga yanzu"], answer: 2, why: "Yin wannan tambayar yana taimakawa wajen kama son zuciyarku kafin ku tura." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Jabun AI, zamba da tunaninku",
        questions: [
          { objective: "O4", q: "Kun sami kira da muryar jikanku yana neman kuɗi yanzu. Me ya kamata ku yi?", options: ["Ku aika kuɗin da sauri", "Ku nemi bayanan bankinsa", "Ku katse wayar ku sake kiransa ta lambar da kuka sani", "Ku sayi katin kyauta kamar yadda aka nema"], answer: 2, why: "Ana iya kwaikwayon murya; ku sake kira ta lambar da kuka sani." },
          { objective: "O4", q: "Bidiyon wani sanannen mutum mai ban tsoro ba shi da alamar \"AI\". Wannan yana nufin:", options: ["Tabbas na gaske ne", "Tabbas na jabu ne", "Sanannen mutumin ya amince da shi", "Babu komai tukuna; ku duba wane ne ya fara wallafa shi da ko kafafe amintattu sun ruwaito shi"], answer: 3, why: "Jabu da yawa ba su da alama; ku duba yanayin." },
          { objective: "O5", q: "Saƙo mai kama da labari ya ce wani sanannen mutum ya gano wata ɓoyayyiyar hanyar zuba jari kuma yana neman ku yi rajista. Wannan wataƙila:", options: ["Zamba ce", "Shirin gwamnati ne", "Binciken mai tantance gaskiya ne", "Labari ne mai zafi"], answer: 0, why: "Labaran jabu na zuba jari na shahararrun mutane zamba ce da aka saba gani." },
          { objective: "O5", q: "A ina mutane a Amurka za su iya kai rahoton zamba?", options: ["A sharhohin ɗan damfarar", "ReportFraud.ftc.gov", "Ta hanyar amsa saƙon tes na zambar", "Babu inda"], answer: 1, why: "FTC tana tattara rahotannin zamba a ReportFraud.ftc.gov." },
          { objective: "O6", q: "Son tabbatar da ra'ayi (confirmation bias) yana nufin:", options: ["Duba kowace gaskiya", "Shakkar komai", "Karɓar abin da ya dace da abin da muka riga muka yi tunani", "Karanta labarai kawai"], answer: 2, why: "Muna saurin karɓar abin da ya dace da ra'ayoyinmu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tunani Mai Zurfi da Gane Labaran Ƙarya",
    questions: [
      { objective: "O1", q: "Labarin ƙarya (misinformation) shi ne:", options: ["Koyaushe ana yin sa da gangan", "Bayanin ƙarya da mutane ke iya turawa suna zaton gaskiya ne", "A talabijin kaɗai yake", "Labarai na gaskiya"], answer: 1, why: "Ana iya yaɗa labarin ƙarya ta kuskure na gaskiya." },
      { objective: "O1", q: "Wane jin ne alama ta tsayawa ku duba?", options: ["Jin gundura", "Jin barci", "Jin yunwa", "Jin fushi ko murna sosai game da saƙo"], answer: 3, why: "Saƙonnin ƙarya suna yaɗuwa da zafin zuciya." },
      { objective: "O1", q: "Me harafin S a cikin SIFT yake nufi?", options: ["Stop (ku tsaya)", "Share (ku tura)", "Search (ku nema)", "Save (ku ajiye)"], answer: 0, why: "SIFT yana farawa da Stop, wato ku tsaya." },
      { objective: "O1", q: "Ba ku tabbata saƙo gaskiya ne ba. Zaɓi mafi aminci shi ne:", options: ["Ku tura shi da gargaɗi", "Ku tura shi sau biyu", "Ku jira kada ku tura tukuna", "Ku ƙara hasashenku"], answer: 2, why: "Rashin turawa koyaushe zaɓi ne." },
      { objective: "O2", q: "Me yasa shafin \"About us\" na wani shafi bai isa ku amince da shi ba?", options: ["Koyaushe yana da tsawo sosai", "Shafukan jabu suna iya rubuta komai game da kansu", "Rubutunsa ƙanƙane ne", "Ana biyan kuɗi don karanta shi"], answer: 1, why: "Kuna buƙatar abin da wasu ke cewa game da shafin." },
      { objective: "O2", q: "Wace ce ƙungiyar tantance gaskiya?", options: ["Wani shafin blog kawai", "Tallar da ke tasowa (pop-up)", "Reuters Fact Check", "Imel na sarƙa (chain email)"], answer: 2, why: "Reuters Fact Check sanannen mai tantance gaskiya ne." },
      { objective: "O2", q: "Shafukan gwamnatin Amurka na hukuma yawanci suna ƙarewa da:", options: [".gov", ".win", ".xyz", ".shop"], answer: 0, why: "Shafukan gwamnatin Amurka suna amfani da .gov." },
      { objective: "O2", q: "Wani saƙo game da lafiya ya ce wani 'ya'yan itace yana warkar da ciwon suga. Wa ya kamata ku tambaya?", options: ["Sharhohin saƙon", "Mai sayar da 'ya'yan itacen", "Abokin da ya tura shi", "Likitanku ko majiyoyin lafiya na hukuma"], answer: 3, why: "Maganganun lafiya suna buƙatar likita ko majiyar hukuma." },
      { objective: "O3", q: "A google.com, ta yaya ake fara bincike da hoto?", options: ["Ku rubuta kalmar hoto", "Ku danna alamar kyamara ku ɗora hoton", "Ku kira Google", "Ku buga hoton a takarda"], answer: 1, why: "Alamar kyamara tana buɗe bincike da hoto." },
      { objective: "O3", q: "A Chrome, danna hoto da maɓallin dama (right-click) yana bar ku zaɓar:", options: ["Search with Google Lens", "Goge intanet", "Sayi hoton", "Tura shi ga kowa"], answer: 0, why: "Chrome yana ba da Search with Google Lens a kan hotuna." },
      { objective: "O3", q: "A sakamakon binciken hoto da hoto, me kuke nema musamman?", options: ["Mafi yawan masu so (likes)", "Kwafi mafi kyau", "Mafi tsufan kwafi da inda ya fara bayyana", "Kwafi mafi girma"], answer: 2, why: "Bayyanarsa ta farko tana nuna ainihin labarin." },
      { objective: "O4", q: "Deepfake shi ne:", options: ["Allon da ya karye", "Hoton zurfin teku", "Alamar mai tantance gaskiya", "Bidiyo, hoto ko sauti na jabu da aka yi da AI"], answer: 3, why: "Deepfake yana amfani da AI don kwaikwayon mutane na gaske." },
      { objective: "O4", q: "Me yasa bai kamata ku dogara ga kamanni kaɗai wajen gane jabun AI ba?", options: ["Sababbin kayan AI ba sa yin kuskuren da ake gani sosai", "Jabun AI koyaushe a fili suke", "Kamanni ba su da muhimmanci kwata-kwata", "Ƙwararru ne kaɗai ke iya ganin hotuna"], answer: 0, why: "Duba yanayi yana aiki fiye da haka yayin da jabu ke ƙara kyau." },
      { objective: "O4", q: "Kalmar sirri ta iyali tana taimaka muku:", options: ["Shiga kafar sada zumunta", "Tabbatar cewa mai kira wani ne a iyalinku da gaske", "Biyan kuɗaɗe", "Buɗe wayarku"], answer: 1, why: "Muryar da aka kwaikwaya ba za ta san kalmar sirrin ba." },
      { objective: "O5", q: "Wace buƙatar biya ce alama bayyananniya ta zamba?", options: ["Biyan kamfanin wuta ko ruwa da kuka sani a shafinsa na hukuma", "Biyan shago a kanta", "\"Ku sayi katin kyauta ku aiko mini da lambobin\"", "Takardar kuɗi daga ofishin likitanku da za ku iya tabbatarwa"], answer: 2, why: "FTC ta ce 'yan damfara ne kaɗai ke neman biya da katin kyauta." },
      { objective: "O5", q: "Bala'i ya faru yanzu, kuma sabon shafin agaji yana neman gudummawa. Mene ne hikima?", options: ["Ku ba da gudummawa ga ƙungiyar agaji da za ku iya bincika kuma ku amince da ita", "Ku aika kuɗi ga shafin nan take", "Ku ba da kalmar sirrin bankinku", "Ku tura shafin ba tare da dubawa ba"], answer: 0, why: "Ƙungiyoyin agaji na jabu suna bayyana bayan bala'i." },
      { objective: "O5", q: "Wani saƙo yana da hanyar haɗi zuwa rajistar \"kuɗin gwamnati\". Mataki mafi aminci shi ne:", options: ["Ku danna ku cike bayananku", "Ku aika musu lambar shaidarku", "Ku amsa kuna tambayar ko gaskiya ne", "Ku rubuta ainihin adireshin .gov da kanku don dubawa"], answer: 3, why: "Zuwa shafin hukuma da kanku yana kauce wa hanyoyin haɗi na jabu." },
      { objective: "O6", q: "Wace tambaya ce ke taimakawa wajen kama son zuciyarku?", options: ["\"Wa ya yarda da ni?\"", "\"Zan yarda da wannan idan game da ɗaya ɓangaren ne?\"", "\"Yaya sauri zan iya tura wannan?\"", "\"Yana da ban dariya?\""], answer: 1, why: "Musanya ɓangarori yana nuna ko zuciya ce ke jagorantar ku." },
      { objective: "O6", q: "Ɗakin amo (echo chamber) shi ne:", options: ["Ɗaki mai ƙara", "Shafin tantance gaskiya", "Wurin da kuke jin ra'ayoyi masu kama da naku kaɗai", "Wani nau'in makirufo"], answer: 2, why: "Ɗakin amo yana ɓoye sauran ra'ayoyi." },
      { objective: "O6", q: "Canja ra'ayi idan gaskiya ta canja:", options: ["Rauni ne", "Ƙarfin tunani mai kyau ne", "Ba a yarda da shi ba", "Alamar son zuciya ce"], answer: 1, why: "Masu tunani mai kyau suna bin shaida." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [1, 3, 4, 7, 10, 11, 13, 14, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "An tsaya an tambaya", objective: "O1", notYet: "An tura shi ko an yarda da shi ba tare da dubawa ba.", meets: "An rubuta wane ne ya yi shi, shaidar, da me wasu ke cewa.", exceeds: "An lura da jin da ya sa ake son a tura shi." },
      { name: "An duba majiya", objective: "O2", notYet: "An dogara ga shafin da kansa ko saƙon kaɗai.", meets: "An karanta abin da aƙalla wasu majiyoyi biyu ke cewa game da shafin ko asusun.", exceeds: "An sami labarin, ko rashinsa, a kafafe amintattu da wurin masu tantance gaskiya." },
      { name: "An bi diddigin hoto", objective: "O3", notYet: "Ba a yi binciken hoto da hoto kan hoton da ke cikin saƙon ba.", meets: "An yi binciken hoto da hoto kuma an rubuta mafi tsufan kwanan watan da aka samu.", exceeds: "An bayyana ko hoton ya dace da lokaci da wurin da saƙon ya ce." },
      { name: "Alamun zamba", objective: "O5", notYet: "An rasa alamun zamba bayyanannu kamar matsi ko biya da katin kyauta.", meets: "An lissafa kowace alamar zamba, ko an tabbatar babu ko ɗaya.", exceeds: "An kai rahotonsa a dandalin idan zamba ce." },
      { name: "Hukunci da son zuciya", objective: "O6", notYet: "Babu hukunci a sarari, ko ba a ba da shaida ba.", meets: "Hukunci a jimloli uku tare da shaida da shawarar ko za a tura.", exceeds: "Ya kuma lura da yadda zuciyarsa ko ra'ayoyinsa suka iya jan sa." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka ce sun duba saƙo kafin su tura shi cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka kafa kalmar sirri ta iyali",
      "Masu koyo da suka ce sun kauce wa wata zamba ko sun kai rahotonta",
      "Masu koyo da suka fara wani kwas na Koach Learn kan tsaro a intanet cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai burauzar intanet",
      "Damar amfani da binciken hoto da hoto kamar Google Lens",
      "Saƙo, hoto ko saƙon da aka tura na gaske da za a duba",
      "Takarda ko manhajar rubutu don hukuncin",
      "Kusan minti 60 gaba ɗaya"
    ],
    facilitatorNotes: [
      "Ku kawo 'yan misalan saƙonni marasa haɗari (tsohon hoto da aka tura a matsayin sabo, tallar jabu) ga masu koyo da ba sa son amfani da nasu feed.",
      "Ku guji muhawarar siyasa a aji; ku mai da hankali kan matakan dubawa, ba kan wane ne yake da gaskiya ba.",
      "Ku tunatar da masu koyo kada su taɓa danna hanyoyin haɗi ko biyan kuɗi a saƙonnin da ake shakka a lokacin atisaye.",
      "Ku taimaka wa tsofaffi su kafa kalmar sirri ta iyali tare da wani dangi a lokacin aji ko bayansa.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

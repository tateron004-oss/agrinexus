"use strict";

// Koach Learn course, Hausa (ha) translation of shared/ai-job-readiness.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "ai-job-readiness-ha",
  lang: "ha",
  translationOf: "ai-job-readiness",
  category: "Re-Entry",
  name: "AI don Shiryawa Neman Aiki da Ci gaban Sana'a",
  skills: "Gano ƙwarewarku, Rubuta takardar bayanin aiki (CV) da AI, Daidaita ta da tallar aiki, Rubuta wasiƙar neman aiki, Atisayen hirar aiki da AI, Neman aiki lafiya",
  outcome: "amfani da mataimakin AI kyauta don mayar da ƙwarewarku zuwa CV mai shafi ɗaya da ta dace da tallar aiki ta gaske, rubuta gajeriyar wasiƙar neman aiki, yin atisayen amsa tambayoyin hirar aiki da babbar murya, da neman aiki lafiya ba tare da faɗawa zambar aiki ba.",
  about: [
    "Samun aiki yana buƙatar CV, takardar nema, hirar aiki da ƙarfin gwiwa mai yawa. Mataimakan AI kamar ChatGPT, Microsoft Copilot da Google Gemini za su iya taimakawa a kowane mataki, musamman idan akwai gibi a tarihin aikinku, kuna da tarihin laifi (record), ko ƙwarewarku ba ta yi kama da CV \"na yau da kullum\" ba.",
    "Wannan kwas ɗin na mutanen da ke dawowa gida daga gidan yari ne, masu neman aiki a shirye-shiryen horar da ma'aikata, masu canja sana'a da matasa masu neman aikinsu na farko. Aikin da aka yi a ciki, aikin soja, kula da wani a iyali, aikin sa-kai ko ƙananan ayyuka duk suna da amfani.",
    "Za ku gina kayan neman aikinku mataki-mataki. Kowane darasi yana ɗaukar kusan minti biyar, da aikin \"Gwada yanzu\", ɗan gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Kada ku saka bayanan sirri a AI: babu lambar Social Security, ta katin shaida, ta shari'a ko ta fursuna."
  ],
  finalTask: "Ku nemo tallar aiki ɗaya ta gaske da za ku iya nema. Ta amfani da mataimakin AI, ku gina CV mai shafi ɗaya da ta dace da ita, wasiƙar neman aiki ƙasa da kalmomi 200, da amsoshin tambayoyi biyar da za a iya yi a hirar aiki, har da ɗaya game da gibi ko tarihinku idan ya shafe ku. Ku yi atisayen amsoshin da babbar murya, ku duba tallar aikin da alamun gargaɗin zamba, sannan ku nema ko ku ajiye shi a shirye don aikawa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke dawowa gida daga gidan yari kuma suke neman aiki, sau da yawa da gibi a tarihin aikinsu da kuma tarihin laifi da za su yi bayani a kai. Da yawa suna da ƙwarewar aiki mai ƙarfi daga ayyukan gidan yari, aikin soja, kula da iyali ko ayyukan da ba na hukuma ba.",
    startingPoint: "Suna iya kira da tura saƙon tes a waya mai sauƙi; wasu suna da adireshin imel kuma sun taɓa gwada mataimakin AI. Da yawa ba su da CV ta yanzu, ba su yi hirar aiki kwanan nan ba, kuma ba su san yadda za su yi magana game da tarihinsu ba.",
    gap: "Aiki mai ɗorewa yana ɗaya daga cikin manyan taimako don dawowa gida cikin nasara, amma yanzu ana neman aiki ta intanet, kuma masu ɗaukar aiki suna sa ran CV da ta dace da aikin da amsoshin hira masu ƙarfin gwiwa. Masu koyo suna buƙatar mayar da ƙwarewarsu ta gaske zuwa kayan neman aiki da taimakon AI, amsa tambayoyi game da gibi da gaskiya, da guje wa zambar aiki da ke kai hari ga mutanen da ke buƙatar aiki da sauri.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 5 zuwa 6)",
      "Na'urori: wataƙila suna da waya mai sauƙi kawai, ko kwamfutar ɗakin karatu ko ta cibiyar aiki mai ƙayyadadden lokaci",
      "Lokaci: darussa na minti 5 da suka dace da ganawa da aiki",
      "Sirri: babu lambar Social Security, ta shari'a ko ta fursuna, ko bayanan banki a kayan AI ko a CV",
      "Dokoki game da tarihin laifi sun bambanta daga jiha zuwa jiha da birni zuwa birni; masu koyo suna dubawa a ofishin ƙwadago na jiharsu ko ƙungiyar taimakon shari'a ga masu dawowa gida, kuma suna bin sharuɗɗan parole ko probation nasu"
    ],
    prerequisites: "Babu. Kwas ɗin \"Introduction to AI and Digital Confidence\" (Gabatarwa ga AI da Ƙarfin Gwiwa a Fasahar Zamani) kwas ne na farko mai amfani ga masu koyo da suke sababbi a AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku aikinku, horonku, aikin sa-kai da ƙwarewar rayuwarku, a ciki ko a waje", action: "jera ƙwarewar aikinku da kalmomin masu ɗaukar aiki, da misali ɗaya na gaskiya ga kowace", standard: "kuna ajiye ƙwarewar da ke gaskiya a gare ku kaɗai" },
    { id: "O2", condition: "Idan kuna da tallar aiki ta gaske da samfurin CV kyauta", action: "ƙirƙirar CV mai shafi ɗaya da ta dace da aikin, da layuka masu farawa da kalmomin aiki da lambobi", standard: "kowace kalma gaskiya ce, kuma babu lambar Social Security, ranar haihuwa ko hoto" },
    { id: "O3", condition: "Don wannan tallar aikin", action: "rubuta wasiƙar neman aiki mai gajerun sakin layi uku", standard: "ƙasa da kalmomi 200, kuma tana kama da ku idan aka karanta ta da babbar murya" },
    { id: "O4", condition: "Ta amfani da mataimakin AI a matsayin mai hirar atisaye", action: "amsa tambayoyin hirar aiki guda biyar da aka saba yi da babbar murya, ta amfani da STAR don tambayoyin \"faɗa mini lokacin da\"", standard: "ba tare da karantawa daga rubutu ba" },
    { id: "O5", condition: "Idan kuna da gibi a tarihin aiki ko tarihin laifi", action: "shirya gajeriyar amsa ta gaskiya da ke komawa kan dalilin da yasa kuke a shirye yanzu", standard: "ta amfani da bayanan da kuke jin daɗin rabawa kaɗai, kuna faɗa a nutse da babbar murya" },
    { id: "O6", condition: "Idan kuna nema da kuma neman aiki", action: "nemo guraben aiki a shafukan amintattu, bin diddigin kowace takardar nema, da duba kowace talla don alamun gargaɗin zamba", standard: "ba tare da bayar da lambar banki ko ta Social Security ba kafin tayin aiki na gaske" }
  ],
  chapters: [
    {
      name: "Babi na 1: Gina kayan neman aikinku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Gano ƙwarewar da kuke da ita tuni",
          minutes: 5,
          goal: "Mayar da ƙwarewar rayuwarku da aikinku zuwa jerin ƙwarewar aiki.",
          text: [
            "Yawancin mutane suna da ƙwarewa fiye da yadda suke tsammani. Aiki a kicin, wurin wanki ko wurin gyara na gidan yari, aikin soja, kula da wani a iyali, aikin sa-kai a coci ko masallaci, aski ko gyaran motocin maƙwabta: duk waɗannan suna gina ƙwarewar da masu ɗaukar aiki suke so.",
            "Ku nemi mataimakin AI ya taimaka muku ku ba su suna: \"Na yi shekaru 3 ina aiki a babban kicin, ina shirya abinci ga mutane 500 a rana, kuma ina horar da sababbin ma'aikata. Waɗanne ƙwarewar aiki ne wannan yake nunawa? Ka yi amfani da kalmomin da masu ɗaukar aiki suke amfani da su.\" Kuna iya samun: tsaftar abinci, aiki cikin ƙarancin lokaci, horar da wasu, lissafin kaya, aiki tare.",
            "Ku yi babban jerin ƙwarewa da misali ɗaya ga kowace. Kada ku bar AI ya ƙara ƙwarewar da ba ku da ita da gaske. Duk abin da ke cikin CV ɗinku dole ya zama gaskiya, domin ana iya tambayar ku game da shi a hirar aiki."
          ],
          steps: ["Ku jera kowane aiki, horo, aikin sa-kai da nauyin da kuka taɓa ɗauka, a ciki ko a waje.", "Ga kowanne, ku tambayi AI waɗanne ƙwarewa yake nunawa, da kalmomin masu ɗaukar aiki.", "Ku ajiye ƙwarewar da ke gaskiya a gare ku kaɗai.", "Ku rubuta misali ɗaya na gaske ga kowace ƙwarewa."],
          words: [["Ƙwarewar da ake iya ɗauka (transferable skill)", "ƙwarewa daga wani wuri da ke da amfani a wani wurin daban."], ["Ƙwarewar mu'amala (soft skill)", "ƙwarewar hulɗa da mutane kamar aiki tare, amintuwa ko sadarwa."], ["Ƙwarewar fasaha (hard skill)", "takamaiman iyawa kamar tuƙa forklift, dafa abinci ko amfani da Excel."]],
          slides: [
            { title: "Duk ƙwarewa tana da amfani", bullets: ["Aiki a ciki ko a waje", "Aikin soja, kula da iyali, aikin sa-kai", "Ƙananan ayyuka ga maƙwabta"] },
            { title: "Ku nemi AI ya ba ƙwarewar suna", bullets: ["Ku bayyana abin da kuka yi da kuma ga mutane nawa", "Ku nemi kalmomin masu ɗaukar aiki"] },
            { title: "Ku tsaya kan gaskiya", bullets: ["Ku cire ƙwarewar da ba ku da ita", "Misali ɗaya na gaske ga kowace", "Ana iya tambayar ku game da kowace"] }
          ],
          tryIt: "Ku bayyana wa mataimakin AI abubuwa uku da kuka yi, ku tambaye shi waɗanne ƙwarewar aiki suke nunawa. Ku rubuta babban jeri na aƙalla ƙwarewa takwas na gaskiya, kowace da misali ɗaya.",
          youCanNow: "mayar da ƙwarewarku zuwa jerin ƙwarewar aiki na gaskiya da kalmomin masu ɗaukar aiki.",
          quickCheck: [
            { objective: "O1", q: "Mece ce ƙwarewar da ake iya ɗauka (transferable skill)?", options: ["Ƙwarewar da za ku iya amfani da ita a aiki ɗaya kawai", "Ƙwarewa daga wani wuri da ke da amfani a wani wurin daban", "Ƙwarewar da kuke biyan kuɗi don koyo", "Ƙwarewar da manajoji kaɗai suke da ita"], answer: 1, why: "Ƙwarewar da ake iya ɗauka, kamar horar da wasu, tana tafiya daga wani wuri zuwa wani." },
            { objective: "O1", q: "Kun yi shekaru kuna gyaran motocin maƙwabta ba tare da albashi ba. Me za ku yi da wannan ƙwarewar?", options: ["Ku bar ta; ba aiki na gaske ba ne", "Ku ce ku makaniki ne mai lasisi", "Ku jira sai mai hira ya tambaye ku game da ita", "Ku tambayi AI waɗanne ƙwarewa take nunawa, ku jera na gaskiya da misali"], answer: 3, why: "Ayyukan da ba na hukuma ba suna gina ƙwarewa ta gaske; ku jera na gaskiya kaɗai, da misali." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rubuta CV mai shafi ɗaya da AI",
          minutes: 6,
          goal: "Gina CV mai tsabta, mai shafi ɗaya, da ta dace da tallar aiki ta gaske.",
          text: [
            "CV (résumé) taƙaitaccen bayani ne mai shafi ɗaya na ƙwarewarku, aikin da kuka yi da horonku. Tsari mai sauƙi ya fi kyau: suna da hanyar tuntuɓa, taƙaitawa mai layi biyu, ƙwarewa, aikin da kuka yi, da karatu ko horo. Ku yi amfani da samfuri (template) kyauta a Google Docs ko Microsoft Word.",
            "Ku daidaita ta da kowane aiki. Ku liƙa tallar aikin (ba bayananku na sirri ba) a cikin AI, ku tambaya: \"Waɗanne ƙwarewa da kalmomi masu muhimmanci wannan aikin yake so? Waɗanne daga cikin ƙwarewata ne suka dace?\" Sannan ku nemi ya rubuta layuka daga misalanku, masu farawa da kalmomin aiki kuma masu lambobi: \"Na shirya abinci ga mutane 500 a kullum tare da bin ƙa'idojin tsaftar abinci.\"",
            "Don aikin da aka yi a lokacin ɗaurin kurkuku, kuna iya rubuta irin wurin ko mai ɗaukar aikin yadda mai ba ku shawara kan dawowa gida ya ba da shawara, kamar ma'aikatar gidajen yari ta jiha, kuma ku mai da hankali kan ƙwarewar. Kada ku taɓa saka lambar Social Security ɗinku, ranar haihuwarku ko hoto a CV ta Amurka."
          ],
          steps: ["Ku buɗe samfurin CV kyauta a Google Docs ko Word.", "Ku liƙa tallar aikin a AI, ku tambayi waɗanne kalmomi masu muhimmanci take so.", "Ku nemi AI ya rubuta layuka masu farawa da kalmomin aiki daga misalanku na gaskiya, da lambobi.", "Ku cike samfurin, ku tsaya a shafi ɗaya.", "Ku duba kowace kalma don gaskiya da rubutu daidai."],
          words: [["CV (résumé)", "taƙaitaccen bayani mai shafi ɗaya na ƙwarewarku, aikin da kuka yi da horonku."], ["Kalma mai muhimmanci (keyword)", "muhimmiyar kalma daga tallar aiki da masu ɗaukar aiki da manhajojin kwamfuta suke nema."], ["Daidaitawa (tailor)", "canja CV ɗinku don ta dace da wani takamaiman aiki."]],
          slides: [
            { title: "Tsari mai sauƙi, shafi ɗaya", bullets: ["Suna, hanyar tuntuɓa, taƙaitawa mai layi biyu", "Ƙwarewa da aikin da kuka yi", "Karatu ko horo"] },
            { title: "Ku daidaita ta da aikin", bullets: ["Ku liƙa tallar aikin a AI", "Ku nemo kalmomi masu muhimmanci da suka dace", "Kalmomin aiki da lambobi"] },
            { title: "Ku kiyaye ta lafiya kuma ta gaskiya", bullets: ["Babu lambar SSN, ranar haihuwa ko hoto", "Ku tambayi mai ba ku shawara yadda za ku rubuta aikin da aka yi a ciki", "Ku duba kowace kalma"] }
          ],
          tryIt: "Ku nemo tallar aiki ɗaya ta gaske. Ku yi amfani da AI don nemo kalmominta masu muhimmanci da rubuta layuka biyar daga misalanku na gaskiya. Ku saka su a samfurin CV mai shafi ɗaya.",
          youCanNow: "gina CV mai shafi ɗaya da ta dace da tallar aiki ta gaske da taimakon AI.",
          quickCheck: [
            { objective: "O2", q: "Me ya kamata ku liƙa a AI don daidaita CV ɗinku?", options: ["Tallar aikin", "Lambar Social Security ɗinku", "Lambar shari'arku", "Bayanan bankinku"], answer: 0, why: "Ku liƙa tallar aikin, ba bayananku na sirri ba, don AI ya nemo kalmomi masu muhimmanci." },
            { objective: "O2", q: "CV ɗinku ta kai shafi ɗaya da rabi don aiki na farko-farko. Me za ku yi?", options: ["Ku ƙaramar da rubutun sosai", "Ku ƙara shafuka", "Ku rage ta zuwa layuka mafi ƙarfi da suka dace da aikin, a shafi ɗaya", "Ku ƙara hoto"], answer: 2, why: "Yawancin CV don ayyukan farko-farko ya kamata su tsaya a shafi ɗaya, kan abin da aikin yake so." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rubuta gajeriyar wasiƙar neman aiki",
          minutes: 5,
          goal: "Rubuta wasiƙar neman aiki ƙasa da kalmomi 200 da ke kama da ku.",
          text: [
            "Wasiƙar neman aiki (cover letter) gajeriyar wasiƙa ce da ke faɗin dalilin da yasa kuke son wannan aikin da dalilin da yasa kuka dace da shi. Ayyuka da yawa ba sa buƙatarta, amma mai kyau za ta iya bambanta ku da sauran.",
            "Ku yi amfani da gajerun sakin layi uku: dalilin da yasa kuke son wannan aikin da kamfanin, ƙwarewa biyu da suka dace da abin da suke buƙata da ɗan misali, da godiya tare da yadda za a same ku. Ku tambayi AI: \"Ka rubuta wasiƙar neman aiki ƙasa da kalmomi 200 don wannan tallar aikin, ta amfani da waɗannan ƙwarewa biyu da misalai. Mai fara'a, mai ƙarfin gwiwa, da kalmomi masu sauƙi.\"",
            "Sannan ku mayar da ita taku. Ku canja duk wata magana da ba za ku taɓa faɗa ba. Ku ƙara bayani ɗaya na gaskiya game da dalilin da yasa kuke son aiki a can. Ku karanta ta da babbar murya: idan ba ta yi kama da ku ba, ku sake canja ta."
          ],
          steps: ["Sakin layi na 1: dalilin da yasa kuke son wannan aikin da kamfanin.", "Sakin layi na 2: ƙwarewa biyu da suka dace, da misalai.", "Sakin layi na 3: godiya da yadda za a same ku.", "Ku nemi AI ya rubuta daftari ƙasa da kalmomi 200.", "Ku gyara ta don ta yi kama da ku, ku karanta ta da babbar murya."],
          words: [["Wasiƙar neman aiki (cover letter)", "gajeriyar wasiƙa da ake aikawa tare da CV, mai bayanin dalilin da yasa kuka dace da aikin."]],
          slides: [
            { title: "Gajerun sakin layi uku", bullets: ["Dalilin wannan aikin", "Ƙwarewa biyu da suka dace, da misalai", "Godiya da hanyar tuntuɓa"] },
            { title: "Ku bar AI ya rubuta daftari", bullets: ["Ƙasa da kalmomi 200", "Mai fara'a, mai ƙarfin gwiwa, kalmomi masu sauƙi"] },
            { title: "Ku mayar da ita taku", bullets: ["Ku canja maganganun da ba za ku taɓa faɗa ba", "Ku ƙara bayani ɗaya na gaskiya", "Ku karanta ta da babbar murya"] }
          ],
          tryIt: "Ku rubuta wasiƙar neman aiki don tallar aikinku da AI, ku tsaya ƙasa da kalmomi 200, ku gyara ta har ta yi kama da ku idan kun karanta ta da babbar murya.",
          youCanNow: "rubuta gajeriyar wasiƙar neman aiki ta kanku da taimakon AI.",
          quickCheck: [
            { objective: "O3", q: "Me ke shiga sakin layi na biyu na wasiƙar neman aiki?", options: ["Ranar haihuwarku", "Tarihin albashinku", "Godiya kawai", "Ƙwarewa biyu da suka dace da aikin, da ɗan misali"], answer: 3, why: "Sakin layi na 2 yana ba da ƙwarewa biyu da suka dace, da misalai." },
            { objective: "O3", q: "Wasiƙar da AI ya rubuta tana cewa \"I am exceedingly enthusiastic to leverage my synergies.\" (kalmomi masu wuya da ba a saba faɗa ba). Me za ku yi?", options: ["Ku bar ta; tana jin kamar ta mai wayo", "Ku canja ta zuwa kalmomin da za ku faɗa da gaske", "Ku tsawaita ta", "Ku aika ta ba tare da karantawa ba"], answer: 1, why: "Ku canja duk wata magana da ba za ku taɓa faɗa ba, don wasiƙar ta yi kama da ku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Gina kayan neman aikinku",
        questions: [
          { objective: "O1", q: "Kun horar da sababbin ma'aikata a kicin na gidan yari. Wace ƙwarewa wannan yake nunawa?", options: ["Tuƙa forklift", "Lissafin kuɗi (accounting)", "Horar da wasu", "Babu"], answer: 2, why: "Horar da sababbin ma'aikata ƙwarewa ce da ake iya ɗauka zuwa wani wuri." },
          { objective: "O1", q: "AI ya ƙara \"ƙwararre a harshen Sifaniyanci\" cikin ƙwarewarku, amma ba ku iya ba. Me za ku yi?", options: ["Ku cire shi", "Ku bar shi", "Ku koyi Sifaniyanci kafin hirar aiki", "Ku ƙara wasu harsuna"], answer: 0, why: "Duk abin da ke cikin CV dole ya zama gaskiya." },
          { objective: "O2", q: "Wanne BAI kamata ya shiga CV ta Amurka ba?", options: ["Ƙwarewarku", "Aikin da kuka yi", "Lambar wayarku", "Lambar Social Security ɗinku"], answer: 3, why: "Lambobin sirri ba sa shiga CV." },
          { objective: "O2", q: "Mene ne ma'anar daidaita CV?", options: ["Ɗinkin tufafi", "Canja ta don ta dace da wata takamaiman tallar aiki", "Mayar da ita shafuka uku", "Amfani da CV ɗaya don kowane aiki"], answer: 1, why: "CV da aka daidaita tana da kalmomi masu muhimmanci na aikin." },
          { objective: "O3", q: "Tsawon wasiƙar neman aiki a wannan kwas ɗin ya kamata ya zama nawa?", options: ["Shafuka biyar", "Ƙasa da kalmomi 200", "Kalma ɗaya", "Sama da kalmomi 1,000"], answer: 1, why: "Ana karanta gajerun wasiƙu." }
        ]
      }
    },
    {
      name: "Babi na 2: Hirar aiki da neman aiki",
      lessons: [
        {
          objectives: ["O4"],
          title: "Atisayen hirar aiki da AI",
          minutes: 6,
          goal: "Yi amfani da AI a matsayin mai hirar atisaye kuma ku inganta amsoshinku.",
          text: [
            "AI zai iya yin aikin mai hirar aiki. Ku tambaya: \"Kai ne ke ɗaukar ma'aikaci don wannan aikin [ku liƙa tallar aikin]. Ka yi mini tambayar hirar aiki ɗaya a lokaci ɗaya. Bayan na amsa, ka faɗa mini abu ɗaya da na yi da kyau da abu ɗaya da zan inganta.\" Manhajojin AI da yawa suna bar ku yi magana da babbar murya, wanda atisaye ne mai kyau sosai.",
            "Ku yi amfani da hanyar STAR don tambayoyin \"faɗa mini lokacin da\": Situation (halin da ake ciki), Task (aikin), Action (abin da kuka yi), Result (sakamako). \"A kicin (halin da ake ciki) dole mu raba abinci 500 cikin awa ɗaya (aikin). Na shirya layin shirya abinci kuma na horar da sababbin ma'aikata biyu (abin da na yi). Mun gama a kan lokaci kowace rana a wannan watan (sakamako).\"",
            "Ku shirya tambayoyi biyar da aka saba yi: faɗa mini game da kanka, me yasa kake son wannan aikin, wata ƙwarewarka mai ƙarfi, lokacin da ka warware matsala, da ko kana da tambayoyi a gare mu. Ku yi atisaye har sai kun iya amsa ba tare da karantawa ba."
          ],
          steps: ["Ku liƙa tallar aikin, ku nemi AI ya yi muku hira tambaya ɗaya a lokaci ɗaya.", "Ku amsa da babbar murya ko ta rubutu.", "Ku yi amfani da STAR don tambayoyin \"faɗa mini lokacin da\".", "Ku nemi abu ɗaya mai kyau da abu ɗaya da za a inganta bayan kowace amsa.", "Ku yi atisayen tambayoyi biyar har sai ba ku buƙatar rubutu."],
          words: [["Hanyar STAR", "hanyar amsa tambaya: Situation (halin da ake ciki), Task (aikin), Action (abin da kuka yi), Result (sakamako)."], ["Hirar atisaye (mock interview)", "hirar aiki ta gwaji don atisaye."]],
          slides: [
            { title: "AI a matsayin mai hirar atisayenku", bullets: ["Tambaya ɗaya a lokaci ɗaya", "Ra'ayi: abu ɗaya mai kyau, abu ɗaya da za a inganta", "Ku yi atisaye da babbar murya idan za ku iya"] },
            { title: "Amsoshin STAR", bullets: ["Halin da ake ciki da aikin", "Abin da kuka yi", "Sakamako: abin da ya faru"] },
            { title: "Tambayoyi biyar da za ku shirya", bullets: ["Faɗa mini game da kanka; me yasa wannan aikin", "Ƙwarewa mai ƙarfi; matsalar da ka warware", "Tambayoyinku a gare su"] }
          ],
          tryIt: "Ku yi hirar atisaye da AI don tallar aikinku. Ku amsa tambayoyi biyar da babbar murya, ta amfani da STAR inda ya dace, ku rubuta ra'ayoyin da aka ba ku.",
          youCanNow: "yin atisayen hirar aiki da AI da amsa da hanyar STAR.",
          quickCheck: [
            { objective: "O4", q: "A hanyar STAR, mene ne ma'anar \"Result\"?", options: ["Sunan aikinku", "Matsalar da kuka fuskanta", "Abin da ya faru saboda abin da kuka yi", "Tambayar da aka yi muku"], answer: 2, why: "Result shi ne sakamakon abin da kuka yi, kamar gamawa a kan lokaci kowace rana." },
            { objective: "O4", q: "Kuna iya amsa \"Faɗa mini game da kanka\" ta karanta rubutunku kaɗai. Me za ku yi?", options: ["Ku yi atisaye da babbar murya da AI har sai kun iya amsa ba tare da rubutu ba", "Ku tsallake wannan tambayar a hirar aiki", "Ku haddace dogon jawabin da AI ya rubuta", "Ku zo da rubutun ku karanta shi"], answer: 0, why: "Ku yi atisaye da babbar murya har sai kun iya amsa ba tare da karantawa ba." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Magana game da gibi ko tarihin laifi da ƙarfin gwiwa",
          minutes: 5,
          goal: "Shirya gajeriyar amsa ta gaskiya mai duban gaba game da gibi ko tarihinku.",
          text: [
            "Gibi yana faruwa: gidan yari, rashin lafiya, kula da iyali, ƙaura saboda aikin soja, korar ma'aikata. Masu ɗaukar aiki galibi suna son su san kuna a shirye yanzu. Ku shirya gajeriyar amsa: ku faɗi gaskiya, ku taƙaita, ku nuna abin da kuka koya ko kuka yi, sannan ku koma kan dalilin da yasa kuke a shirye don wannan aikin.",
            "Misali: \"Na yi kuskure kuma na yi zaman kurkuku. A can na sami takardar shaidar mai sarrafa abinci (food handler certificate) kuma na jagoranci layin kicin. Ina a shirye in kawo wannan ƙwazon aiki nan.\" Ku nemi AI ya taimaka muku ku gajarta amsarku ku sa ta tsaya daram, amma ku yi amfani da bayanan da kuke jin daɗin rabawa kaɗai, ku bar lambobin shari'a da cikakkun bayanai.",
            "Ku san taimakon da ke akwai. Jihohi da birane da yawa a Amurka suna da dokokin \"fair chance\" ko \"ban the box\" game da lokacin da masu ɗaukar aiki za su iya tambaya game da tarihin laifi; ku duba ofishin ƙwadago na jiharku ko ƙungiyar taimakon shari'a ga masu dawowa gida. Shirin Federal Bonding Program yana ba da inshorar amana (fidelity bond) kyauta ga masu ɗaukar aiki da ke ɗaukar masu neman aiki da ke cikin haɗari, na watanni shida na farko. Wasu masu ɗaukar aiki kuma za su iya cancanta don Work Opportunity Tax Credit (ragin haraji); ku duba shafin WOTC na IRS don matsayinsa na yanzu da rukunansa."
          ],
          steps: ["Ku rubuta gaskiyar a jimla ɗaya.", "Ku ƙara abin da kuka koya ko kuka yi tun daga lokacin.", "Ku ƙara dalilin da yasa kuke a shirye don wannan aikin.", "Ku nemi AI ya gajarta ta ya sa ta tsaya daram.", "Ku yi atisaye da babbar murya har sai ta ji a nutse."],
          words: [["Ɗaukar aiki na dama mai adalci (fair chance hiring)", "dokoki ko al'adu da ke ba mutanen da ke da tarihin laifi dama mai adalci kafin a tambaye su game da baya."], ["Inshorar amana (fidelity bond)", "inshora da ke kare mai ɗaukar aiki daga asara saboda rashin gaskiyar ma'aikaci."]],
          slides: [
            { title: "Gajeriyar amsa mai ƙarfi", bullets: ["Ta gaskiya kuma gajeriya", "Abin da kuka koya ko kuka yi", "Dalilin da yasa kuke a shirye yanzu"] },
            { title: "Ku yi amfani da AI a hankali", bullets: ["Ku gajarta kalmominku ku sa su tsaya daram", "Bayanan da kuka zaɓi rabawa kaɗai", "Babu lambobin shari'a"] },
            { title: "Ku san taimakon da ke akwai", bullets: ["Dokokin fair chance: ku duba jiharku", "Federal Bonding Program: inshora kyauta, watanni 6 na farko", "WOTC: ku duba shafin IRS don matsayinsa na yanzu"] }
          ],
          sources: [{ name: "The Federal Bonding Program", url: "https://bonds4jobs.com/" }, { name: "Ma'aikatar Ƙwadago ta Amurka (U.S. Department of Labor): Work Opportunity Tax Credit", url: "https://www.dol.gov/agencies/eta/wotc" }, { name: "IRS: Work Opportunity Tax Credit", url: "https://www.irs.gov/businesses/small-businesses-self-employed/work-opportunity-tax-credit" }],
          tryIt: "Ku rubuta amsa mai jimloli uku game da gibi ko tarihi (naku, ko na atisaye). Ku yi amfani da AI don ku tsaftace ta, sannan ku faɗe ta da babbar murya sau uku.",
          youCanNow: "amsa tambayoyi game da gibi ko tarihin laifi da gaskiya da ƙarfin gwiwa, da ambaton taimakon da zai iya amfanar ku.",
          quickCheck: [
            { objective: "O5", q: "Me masu ɗaukar aiki galibi suke son su sani idan suka tambaya game da gibi?", options: ["Kowane bayani game da shari'arku", "Lambar shari'arku", "Cewa kuna a shirye ku yi aiki yanzu", "Wane ne lauyanku"], answer: 2, why: "Masu ɗaukar aiki galibi suna son su san kuna a shirye yanzu, don haka ku taƙaita kuma ku duba gaba." },
            { objective: "O5", q: "Mai hira ya tambaye ku game da tarihin laifinku. Wace amsa ce ta fi kyau?", options: ["\"Wannan ba ruwanka ba ne.\"", "Dogon labari da kowane bayani", "\"Ban taɓa shiga matsala ba.\"", "\"Na yi kuskure kuma na yi zaman kurkuku. Na sami takardar shaidar mai sarrafa abinci a can, kuma ina a shirye in yi aiki.\""], answer: 3, why: "Ta gaskiya, gajeriya, kuma ta mai da hankali kan abin da kuka koya da dalilin da yasa kuke a shirye." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Nema da neman aiki lafiya",
          minutes: 5,
          goal: "Nemo guraben aiki na gaske, bin diddigin takardun nema, da guje wa zambar aiki.",
          text: [
            "Ku nemi aiki a shafukan amintattu, shafukan kamfanoni da kuma American Job Center na yankinku, wanda ke ba da taimako kyauta wajen neman aiki da horo. Shirin dawowa gidanku, ofishin tsoffin sojoji ko shirin horar da ma'aikata yana iya samun labarin guraben aiki da masu ɗaukar aiki da ke ɗaukar mutanen da ke da tarihin laifi.",
            "Ku bi diddigin kowace takardar nema a cikin takarda mai sauƙi: kamfani, aiki, ranar nema, mutumin tuntuɓa, ranar sake tuntuɓa. Ku sake tuntuɓar su bayan kusan mako ɗaya da gajeren imel mai ladabi. AI zai iya rubuta daftarinsa.",
            "Ku yi hankali da zambar aiki. Hukumar FTC (hukumar kare masu sayayya ta Amurka) tana gargaɗi: masu ɗaukar aiki masu gaskiya ba sa karɓar kuɗi daga gare ku don ba ku aiki; ku yi hankali da babban albashi don ƙaramin aiki, neman ku saka cak a banki ku mayar da kuɗi, sake tura kunshin kaya, ko biyan kuɗin horo ko takardar shaida tun farko. Kada ku taɓa bayar da lambar asusun banki ko ta Social Security kafin ku sami tayin aiki na gaske daga kamfani na gaske. Ku kai rahoton zamba a ReportFraud.ftc.gov."
          ],
          steps: ["Ku nema a shafukan amintattu, shafukan kamfanoni da American Job Center ɗinku.", "Ku bi diddigin kowace takardar nema a cikin takarda.", "Ku sake tuntuɓa bayan kusan mako ɗaya.", "Ku duba kowace talla don alamun gargaɗin zamba.", "Ku kai rahoton zamba a ReportFraud.ftc.gov."],
          words: [["American Job Center", "ofishi kyauta da gwamnatin Amurka ke ɗaukar nauyinsa, mai taimakawa wajen neman aiki da horo."], ["Zambar aiki", "tayin aiki na bogi da aka yi don satar kuɗi ko bayanai."]],
          slides: [
            { title: "Inda za ku nema", bullets: ["Shafukan aiki amintattu da shafukan kamfanoni", "American Job Centers", "Shirye-shiryen masu dawowa gida, tsoffin sojoji da horar da ma'aikata"] },
            { title: "Ku bi diddigi ku sake tuntuɓa", bullets: ["Kamfani, aiki, rana, mutumin tuntuɓa", "Ku sake tuntuɓa bayan kusan mako ɗaya"] },
            { title: "Alamun zambar aiki (FTC)", bullets: ["Suna karɓar kuɗi daga gare ku don ba ku aiki", "Ku saka cak a banki ku mayar da kuɗi", "Sake tura kunshin kaya; babban albashi don ƙaramin aiki"] }
          ],
          sources: [{ name: "FTC: Zambar aiki (Job scams)", url: "https://consumer.ftc.gov/articles/job-scams" }, { name: "CareerOneStop (Ma'aikatar Ƙwadago ta Amurka): nemo American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }],
          tryIt: "Aikin ƙarshe: ku kammala CV ɗinku da aka daidaita, wasiƙar neman aiki da amsoshin hira biyar da kuka yi atisaye don tallar aikinku ta gaske. Ku duba tallar da alamun zamba, ku ƙara ta a takardar bin diddigi, sannan ku nema ko ku ajiye ta a shirye don aikawa.",
          youCanNow: "gina kayan neman aiki da AI, yin hirar aiki da ƙarfin gwiwa da neman aiki lafiya.",
          quickCheck: [
            { objective: "O6", q: "A ina za ku iya samun taimako kyauta wajen neman aiki da horo?", options: ["American Job Center", "Shafin intanet da ke karɓar kuɗi don nema", "Tes daga lambar da ba ku sani ba", "Aikin da ke neman ku sake tura kunshin kaya"], answer: 0, why: "American Job Centers suna ba da taimako kyauta wajen neman aiki da horo." },
            { objective: "O6", q: "Wani \"aiki\" yana ba da babban albashi don ƙaramin aiki kuma yana neman lambar asusun bankinku kafin kowace hira. Me za ku yi?", options: ["Ku aika don ku fara da sauri", "Ku aika rabin lambar asusun kawai", "Kada ku bayar; ku duba alamun zamba ku kai rahoto", "Ku fara biyan ɗan kuɗi"], answer: 2, why: "Kada ku taɓa bayar da lambar banki kafin tayin aiki na gaske; wannan yana da alamun gargaɗin zamba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Hirar aiki da neman aiki",
        questions: [
          { objective: "O4", q: "Me STAR take nufi?", options: ["Start, Talk, Ask, Rest (Fara, Yi magana, Tambaya, Huta)", "Skills, Training, Awards, References (Ƙwarewa, Horo, Kyaututtuka, Masu shaida)", "Smile, Thank, Answer, Return (Yi murmushi, Gode, Amsa, Dawo)", "Situation, Task, Action, Result (Halin da ake ciki, Aikin, Abin da kuka yi, Sakamako)"], answer: 3, why: "STAR tana tsara amsoshin tambayoyin \"faɗa mini lokacin da\"." },
          { objective: "O5", q: "Amsa mai kyau game da gibi ko tarihin laifi ita ce:", options: ["Ta gaskiya, gajeriya, kuma ta mai da hankali kan dalilin da yasa kuke a shirye yanzu", "Dogon labari da kowane bayani", "Ƙarya", "Ƙin amsawa cikin rashin ladabi"], answer: 0, why: "Amsoshi gajeru, na gaskiya, masu duban gaba sun fi aiki." },
          { objective: "O5", q: "Me Federal Bonding Program take bayarwa?", options: ["Motoci kyauta", "Kuɗi ga masu neman aiki", "Inshorar amana kyauta ga masu ɗaukar aiki da ke ɗaukar masu neman aiki da ke cikin haɗari", "Sakin fursunoni"], answer: 2, why: "Tana ba masu ɗaukar aiki inshora kyauta na watanni shida na farko." },
          { objective: "O6", q: "Wani tayin aiki yana neman ku biya $150 don horo kafin ku fara. A cewar FTC, wannan:", options: ["Abu ne na yau da kullum a kowane aiki", "Haraji ne", "Kyauta ce (bonus)", "Alamar gargaɗin zamba ce"], answer: 3, why: "Masu ɗaukar aiki masu gaskiya ba sa karɓar kuɗi daga gare ku don ba ku aiki." },
          { objective: "O6", q: "Yaushe ya kamata ku sake tuntuɓa bayan kun nemi aiki?", options: ["Kowace awa", "Ba sai an yi ba", "Bayan kusan mako ɗaya, da gajeren imel mai ladabi", "Bayan shekara ɗaya"], answer: 2, why: "Sake tuntuɓa cikin ladabi yana nuna kuna da sha'awa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Shiryawa Neman Aiki da Ci gaban Sana'a",
    questions: [
      { objective: "O1", q: "Ƙwarewar da ake iya ɗauka (transferable skill) ita ce:", options: ["Ƙwarewar da za ku iya sayarwa", "Ƙwarewa daga wani wuri da ke da amfani a wani wurin", "Ƙwarewa don kwamfutoci kawai", "Ƙwarewar bogi"], answer: 1, why: "Ƙwarewa tana tafiya daga wani wuri zuwa wani." },
      { objective: "O1", q: "Wace ce ƙwarewar mu'amala (soft skill)?", options: ["Amintuwa", "Tuƙa forklift", "Walda", "Saurin rubutu a kwamfuta"], answer: 0, why: "Ƙwarewar mu'amala ƙwarewa ce ta hulɗa da mutane." },
      { objective: "O1", q: "Wace ƙwarewa ce ke da amfani a matsayin ƙwarewar aiki?", options: ["Ayyukan ofis masu albashi kawai", "Jami'a kawai", "Kula da wani a iyali", "Babu komai a wajen aiki"], answer: 2, why: "Duk ƙwarewa ta gaske tana gina iyawa." },
      { objective: "O1", q: "Me yasa dole duk abin da ke cikin CV ɗinku ya zama gaskiya?", options: ["Ana iya tambayar ku game da shi a hirar aiki", "AI yana duba shi", "Ba dole ba ne", "Don ta yi tsawo"], answer: 0, why: "Masu hira suna tambaya game da abin da kuka rubuta." },
      { objective: "O2", q: "Kalma mai muhimmanci (keyword) ita ce:", options: ["Kalmar sirri", "Mabuɗin ofis", "Sunanku", "Muhimmiyar kalma daga tallar aiki"], answer: 3, why: "Kalmomi masu muhimmanci da suka dace suna sa a lura da CV ɗinku." },
      { objective: "O2", q: "Wane layi ne ya fi ƙarfi?", options: ["\"Na yi abubuwan kicin\"", "\"Na shirya abinci ga mutane 500 a kullum tare da bin ƙa'idojin tsaftar abinci\"", "\"Na yi aiki\"", "\"Abinci\""], answer: 1, why: "Kalmar aiki, lambobi da sakamako." },
      { objective: "O2", q: "Idan kuna neman AI ya daidaita CV ɗinku, ku liƙa:", options: ["Lambar Social Security ɗinku", "Tallar aikin, ba bayananku na sirri ba", "Lambar shari'arku", "Bayanan bankinku"], answer: 1, why: "Tallar aikin ce AI yake buƙata." },
      { objective: "O2", q: "Yawanci tsawon CV ya kamata ya zama nawa don yawancin ayyukan farko-farko?", options: ["Shafuka goma", "Rabin layi", "Duk tsawon da zai yiwu", "Shafi ɗaya"], answer: 3, why: "Shafi ɗaya yana da sauƙin karantawa." },
      { objective: "O3", q: "Wasiƙar neman aiki tana bayanin:", options: ["Dalilin da yasa kuke son aikin da dalilin da yasa kuka dace", "Dukan labarin rayuwarku", "Tarihin albashinku kawai", "Kalmomin sirrinku"], answer: 0, why: "Tana haɗa ku da aikin." },
      { objective: "O3", q: "Bayan AI ya rubuta daftarin wasiƙar neman aikinku, ya kamata ku:", options: ["Aika ta ba tare da karantawa ba", "Ƙara ƙwarewar da ba ku da ita", "Gyara ta ku karanta ta da babbar murya har ta yi kama da ku", "Mayar da ita kalmomi 1,000"], answer: 2, why: "Wasiƙarku ya kamata ta yi kama da ku." },
      { objective: "O4", q: "Hirar atisaye (mock interview) ita ce:", options: ["Aikin bogi", "Hira marar ladabi", "Hirar da kuka tsallake", "Hirar aiki ta gwaji don atisaye"], answer: 3, why: "Atisaye yana gina ƙarfin gwiwa." },
      { objective: "O4", q: "A STAR, \"Action\" na nufin:", options: ["Yanayin sararin samaniya", "Sunan kamfanin", "Abin da kuka yi", "Albashinku"], answer: 2, why: "Action shi ne naku sashe a cikin labarin." },
      { objective: "O4", q: "\"Kuna da wasu tambayoyi a gare mu?\" Amsa mafi kyau:", options: ["\"A'a.\"", "Ku yi tambaya mai ma'ana game da aikin ko ƙungiyar", "\"Yaushe zan iya fara hutu?\" kawai", "Ku tashi ku tafi"], answer: 1, why: "Tambayoyi masu kyau suna nuna sha'awa." },
      { objective: "O5", q: "Idan kuna magana game da tarihin laifi, ya kamata ku:", options: ["Raba bayanan da kuke jin daɗin rabawa kaɗai, a taƙaice", "Ba da lambar shari'arku", "Yi ƙarya game da shi", "Yi magana game da shi na minti 20"], answer: 0, why: "Gajeriya, ta gaskiya, mai duban gaba ita ce mafi kyau." },
      { objective: "O5", q: "Dokokin \"fair chance\" ko \"ban the box\":", options: ["Iri ɗaya ne a ko'ina", "Babu su", "Sun bambanta daga jiha zuwa jiha da birni zuwa birni; ku duba ofishin ƙwadago na jiharku", "Suna hana duk wani binciken tarihi"], answer: 2, why: "Waɗannan dokoki sun bambanta daga wuri zuwa wuri." },
      { objective: "O5", q: "A ina za ku iya duba matsayin Work Opportunity Tax Credit na yanzu?", options: ["Shafin WOTC na IRS", "Wani rubutu a kafofin sada zumunta", "Hasashen AI", "Tallar aiki"], answer: 0, why: "Dokoki da ranakun ragin haraji suna canjawa; IRS ita ce majiyar." },
      { objective: "O6", q: "American Job Centers suna bayarwa:", options: ["Rubuta CV da kuɗi kawai", "Bashi", "Gidaje", "Taimako kyauta wajen neman aiki da horo"], answer: 3, why: "Cibiyoyin taimakon ma'aikata ne kyauta." },
      { objective: "O6", q: "Takardar bin diddigin neman aiki tana ɗauke da:", options: ["Kalmomin sirrinku", "Kamfani, aiki, ranar nema, mutumin tuntuɓa da ranar sake tuntuɓa", "Asusun bankinku", "Babu komai"], answer: 1, why: "Bin diddigi yana sa ku kasance cikin tsari." },
      { objective: "O6", q: "Wani \"aiki\" yana neman ku saka cak a banki ku mayar da wani ɓangare na kuɗin. Wannan:", options: ["Biyan albashi ne na yau da kullum", "Zambar cak na bogi ce", "Kyauta ce (bonus)", "Dawowar haraji ce"], answer: 1, why: "FTC ta ambaci wannan a matsayin zamba da aka saba gani." },
      { objective: "O6", q: "Yaushe ya dace ku bayar da lambar asusun bankinku don biyan albashi?", options: ["A saƙonku na farko ga kowane mai neman ma'aikata", "A sharhi a shafin tallar aiki", "Ga duk wanda ya tambaya", "Bayan tayin aiki na gaske daga mai ɗaukar aiki na gaske da aka tabbatar"], answer: 3, why: "Ku raba don albashi ne kawai bayan tayin aiki na gaske da aka tabbatar." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      5,
      7,
      8,
      11,
      13,
      16,
      18,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "CV da aka daidaita",
        objective: "O2",
        notYet: "Ta wuce shafi ɗaya, ba ta dace da aikin ba, ko tana da lambobin sirri.",
        meets: "Shafi ɗaya da kalmomi masu muhimmanci na aikin, layuka masu kalmomin aiki da lambobi, kuma babu lambobin sirri.",
        exceeds: "Kowane layi yana da alaƙa da ƙwarewar da tallar aikin take nema."
      },
      {
        name: "Ƙwarewa ta gaskiya",
        objective: "O1",
        notYet: "Wata ƙwarewa ko wani iƙirari a cikin CV ba gaskiya ba ne.",
        meets: "Kowace ƙwarewa gaskiya ce kuma tana da misali na gaske.",
        exceeds: "An bayyana ƙwarewa daga ayyukan gidan yari, kula da iyali ko ayyukan da ba na hukuma ba da kalmomin masu ɗaukar aiki."
      },
      {
        name: "Wasiƙar neman aiki",
        objective: "O3",
        notYet: "Ta wuce kalmomi 200, ko tana karantuwa kamar wasiƙar AI ta gama-gari.",
        meets: "Gajerun sakin layi uku ƙasa da kalmomi 200 da ke kama da mai koyo.",
        exceeds: "Tana da bayani ɗaya na gaskiya game da dalilin da yasa yake son aiki a can."
      },
      {
        name: "Amsoshin hirar aiki",
        objective: "O4",
        notYet: "Amsoshi ƙasa da biyar, ko ana karanta amsoshin daga rubutu.",
        meets: "Amsoshi biyar da aka yi atisayensu da babbar murya, da STAR don \"faɗa mini lokacin da\".",
        exceeds: "Ya yi amfani da ra'ayoyin AI don inganta aƙalla amsoshi biyu."
      },
      {
        name: "Amsa game da gibi ko tarihi",
        objective: "O5",
        notYet: "Amsar ta yi tsawo, tana kare kai ko ba gaskiya ba ce (idan ya shafe shi).",
        meets: "Gajeriya, ta gaskiya, kuma ta ƙare da dalilin da yasa mai koyo yake a shirye yanzu.",
        exceeds: "An faɗe ta a nutse da babbar murya ba tare da rubutu ba."
      },
      {
        name: "Nema lafiya",
        objective: "O6",
        notYet: "Ba a duba tallar aikin don alamun zamba ba.",
        meets: "An duba tallar da alamun zamba kuma ana bin diddigin takardar nema.",
        exceeds: "An sa ranar sake tuntuɓa bayan kusan mako ɗaya."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka nemi aƙalla ayyuka uku cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka sami hirar aiki ko tayin aiki cikin kwanaki 90",
      "Masu koyo da suka ce sun gane kuma sun guje wa zambar aiki"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani mai intanet, ko kwamfutar ɗakin karatu, ta cibiyar aiki ko ta shirin",
      "Mataimakin AI kyauta (ChatGPT, Microsoft Copilot ko Google Gemini) da samfurin CV kyauta a Google Docs ko Word",
      "Tallar aiki ɗaya ta gaske da mai koyo zai iya nema",
      "Takarda da alƙalami don jerin ƙwarewa da rubutun hirar aiki",
      "Kusan minti 60 gaba ɗaya, a gajerun zama, tare da lokacin atisaye"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama, kuna yin ayyukan \"Gwada yanzu\" a lokacin.",
      "Ku haɗa kai da mai ba da shawara ga masu dawowa gida ko American Job Center don masu koyo su sami taimako wajen rubuta aikin da suka yi lokacin ɗaurin kurkuku.",
      "Ku yi hirar atisaye bibbiyu; ku bar masu koyo su zaɓa ko za su yi atisayen tambaya game da tarihinsu a gaban wasu.",
      "Kada ku taɓa neman masu koyo su rubuta lambobin Social Security, na shari'a ko na fursuna a kayan AI; ku yi amfani da madadi.",
      "Ku tunatar da masu koyo da ke kan parole ko probation su bi duk wani sharaɗi game da amfani da intanet, kuma ku ba da maki ga aikin ƙarshe da ma'aunin rubric, layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

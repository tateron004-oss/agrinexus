"use strict";

// Koach Learn course, Hausa (ha) translation of youth/youth-ai-creativity-learning.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "youth-ai-creativity-learning-ha",
  lang: "ha",
  translationOf: "youth-ai-creativity-learning",
  category: "Youth",
  name: "Kayan AI don Ƙirƙira da Koyo",
  skills: "Tunanin ra'ayoyi da AI, Yin zane da Canva, Koyon sabuwar fasaha da malamin AI, Yin tambayoyin atisaye, Bayyana taimakon AI da kiyaye aikinku na asali",
  outcome: "amfani da kayan AI kyauta don tunanin ra'ayoyin wani aikin ƙirƙira, yin zane da shi, da koya wa kanku sabuwar fasaha tare da abokin karatu na AI, yayin da aikin ya kasance naku kuma kuna bayyana inda AI ya taimaka.",
  about: [
    "Wannan kwas ɗin na matasa ne masu shekaru kusan 13 zuwa 18 da ke son yin abubuwa (fosta, labarai, kiɗa, ra'ayoyin wasa, takardun sanarwa na ƙungiya) kuma suke son su koya da sauri.",
    "Za ku yi amfani da AI a matsayin abokin ƙirƙira da abokin karatu. Za ku yi tunanin ra'ayoyi, ku zana fosta, ku koyi sabon abu mataki-mataki, kuma ku gwada kanku. Za ku kuma koyi yadda za ku kiyaye muryarku ta kanku, da faɗin gaskiya game da abin da AI ya yi.",
    "Kafin ku fara: ku duba ƙa'idar shekaru ta kowane kayan aiki, ku bi dokokin makarantarku game da AI, kuma ku yi magana da mahaifi ko mai kula da ku kafin ku buɗe kowane sabon asusu. Kowane darasi yana ɗaukar kusan minti biyar, kuma yana ƙarewa da aikin \"Gwada yanzu\"."
  ],
  finalTask: "Ku yi fosta don wata ƙungiya ko taron makaranta na gaske ko na kwaikwayo. Ku yi amfani da AI don tunanin aƙalla ra'ayoyi biyar, ku zaɓi ɗaya ku mai da shi naku, ku zana fostar a Canva ko Google Slides, sannan ku ƙara ɗan rubutu a ƙasa da ke faɗin yadda AI ya taimaka.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa masu shekaru kusan 13 zuwa 18 da ke son yin abubuwa kamar fosta, labarai, kiɗa, ra'ayoyin wasa da takardun sanarwa na ƙungiya, kuma suke son su koya da sauri.",
    startingPoint: "Suna amfani da waya da kwamfutocin makaranta, kuma wataƙila sun taɓa gwada mataimakin hira ko manhajar zane. Kaɗan ne ke amfani da AI da gangan don tunanin ra'ayoyi, karatu mataki-mataki ko gwada kansu, kuma da yawa ba su san wane amfani da AI ne na gaskiya ba.",
    gap: "Matasa za su iya amfani da AI don fita daga inda suka maƙale, yin zane da sauri da karatu cikin hikima, amma amfani da shi don kwafa aiki yana tsallake koyon, kuma yana iya karya dokokin makaranta. Suna buƙatar amfani da AI a matsayin abokin ƙirƙira da karatu, yayin da suke kiyaye muryarsu kuma suna bayyana taimakon AI.",
    constraints: [
      "Iyakar shekaru: kayan aiki da fasalolin hoton AI suna da nasu ƙa'idodin shekaru; mahaifi ko mai kula ne ke amincewa da sabbin asusu",
      "Dokokin makaranta game da AI da hotunan da AI ya yi sun bambanta tsakanin makaranta, aji da gasa",
      "Na'urori: waya, kwamfutar makaranta ko ta ɗakin karatu; tsare-tsaren kyauta kawai",
      "Sirri: babu bayanan sirri a cikin prompt ko rubutun da aka liƙa",
      "Gajerun darussa da kalmomi masu sauƙi don matakan karatu daban-daban"
    ],
    prerequisites: "Kwas ɗin \"Mene ne AI? (don Matasa)\" yana da amfani a fara da shi, amma ba dole ba ne."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku wani aikin ƙirƙira", action: "amfani da mataimakin AI don jera ra'ayoyi masu yawa iri-iri, sannan canja su ko haɗa su su zama ra'ayinku na kanku", standard: "kuna samun aƙalla ra'ayoyi biyar kuma kuna mai da ɗaya naku" },
    { id: "O2", condition: "Ta amfani da kayan zane kyauta kamar Canva ko Google Slides", action: "yin fosta mai sauƙi daga samfuri (template), bayan kun duba ƙa'idar shekarun kayan aikin da saitunan makaranta", standard: "da babban take ɗaya, da rana, lokaci da wuri a sarari" },
    { id: "O3", condition: "Ga kowane aiki da AI ya taimaka a ciki", action: "rubuta bayanin taimako da ke faɗin abin da AI ya yi da abin da ku kuka yi, da ƙara wani abu da ku kaɗai za ku iya yi", standard: "kuna bin dokokin aji ko gasa game da AI, ba tare da amfani da zanen wani ba sai da izini" },
    { id: "O4", condition: "Idan akwai ƙaramar fasaha da kuke son koya", action: "neman mataimakin AI ya koya muku a ƙananan matakai a matakinku, kuma ya gwada ku bayan kowanne", standard: "kuna faɗin fasahar, matakinku da buƙatar mataki ɗaya a lokaci ɗaya" },
    { id: "O5", condition: "Idan kuna da rubutun darasinku na aji", action: "yin tambayoyin atisaye ko katunan tunawa (flashcards) da AI, amsa su da farko, sannan duba amsoshin", standard: "babu bayanan sirri, kuma an duba kowace amsa da rubutun darasinku ko littafin karatu" },
    { id: "O6", condition: "Kafin da bayan kun yi amfani da AI don aikin makaranta", action: "yanke ko amfani da AI yana taimaka muku koyo ne ko yana tsallake koyon, ta hanyar gwajin gobe da dokokin malaminku", standard: "kuna tambayar malaminku da farko duk lokacin da ba ku tabbata ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: AI a matsayin abokin ƙirƙirarku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Tunanin ra'ayoyi da AI",
          minutes: 5,
          goal: "Yi amfani da mataimakin AI don samun ra'ayoyi masu yawa, sannan ku zaɓi mafi kyau ku inganta shi.",
          text: [
            "Tunanin ra'ayoyi (brainstorming) yana nufin fito da ra'ayoyi masu yawa da sauri, ba tare da yanke hukunci a kansu ba tukuna. Mataimakan AI kamar ChatGPT, Microsoft Copilot da Google Gemini suna da kyau a wannan, domin suna iya jera ra'ayoyi masu yawa cikin daƙiƙoƙi.",
            "Ku nemi yawa da bambanci: \"Ka ba ni ra'ayoyi 10 daban-daban na fosta don ƙungiyar robot ta makarantarmu. Ka sa wasu su ba da dariya, wasu su zama na gaske, wasu kuma masu ƙarfin hali.\" Sannan ku ne ke zaɓa. Sakamako mafi kyau yana zuwa idan kun haɗa ra'ayoyin AI da naku.",
            "Ku ɗauki ra'ayoyin AI a matsayin wurin farawa. Ku canja su, ku haɗa biyu, ko ku yi amfani da ɗaya don tayar da sabon abu. Ta haka ra'ayin ƙarshe zai zama naku da gaske."
          ],
          steps: ["Ku faɗi abin da kuke yi da wanda kuke yi wa.", "Ku nemi ra'ayoyi masu yawa masu salo daban-daban.", "Ku zaɓi biyu ko uku da kuke so.", "Ku canja su ko ku haɗa su su zama ra'ayinku."],
          words: [["Tunanin ra'ayoyi (brainstorm)", "fito da ra'ayoyi masu yawa da sauri kafin ku zaɓi ɗaya."]],
          slides: [
            { title: "Tunanin ra'ayoyi = ra'ayoyi masu yawa, da sauri", bullets: ["Kada ku yanke hukunci kan ra'ayoyi tukuna", "AI zai iya jera ra'ayoyi 10 cikin daƙiƙoƙi"] },
            { title: "Ku nemi iri-iri", bullets: ["Ku faɗi abin da kuke yi da wanda kuke yi wa", "Ku nemi ra'ayoyi masu ban dariya, na gaske da masu ƙarfin hali"] },
            { title: "Ku mai da shi naku", bullets: ["Ku zaɓi biyu ko uku da kuke so", "Ku canja su ko ku haɗa su", "Ku ƙara naku tunanin"] }
          ],
          tryIt: "Ku zaɓi aiki: fostar ƙungiya, gajeren labari, matakin wasa ko jigon waƙa. Ku nemi mataimakin AI da aka ba ku izinin amfani da shi ya ba ku ra'ayoyi 10 daban-daban. Ku zaɓi biyu da kuka fi so, ku rubuta yadda za ku canja su.",
          youCanNow: "tunanin ra'ayoyi da AI da mai da ra'ayoyinsa naku.",
          quickCheck: [
            { objective: "O1", q: "Mene ne babbar ƙa'ida yayin tunanin ra'ayoyi?", options: ["Ku zaɓi ra'ayin farko", "Ku yi amfani da ra'ayoyin AI kaɗai", "Ku yanke hukunci kan kowane ra'ayi nan take", "Ku fito da ra'ayoyi masu yawa kafin ku yanke hukunci a kansu"], answer: 3, why: "Tunanin ra'ayoyi yana nufin ra'ayoyi masu yawa da sauri, ba tare da yanke hukunci ba tukuna." },
            { objective: "O1", q: "AI ya ba ku ra'ayoyin fosta 10, kuma biyu sun kusa da abin da kuke so. Me za ku yi?", options: ["Ku kwafi na farkon daidai yadda yake", "Ku haɗa su ko ku canja su, ku ƙara naku tunanin", "Ku nemi ƙarin 100 kuma kada ku taɓa zaɓa", "Ku bar fostar"], answer: 1, why: "Haɗa ra'ayoyin AI da naku yana mai da ra'ayin ƙarshe naku da gaske." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Zane da kayan AI kyauta",
          minutes: 5,
          goal: "Yi fosta ko hoto mai sauƙi da kayan zane kyauta.",
          text: [
            "Canva kayan zane ne mai tsarin kyauta da ke aiki a burauzar intanet ko a manhaja. Wasu makarantu suna ba ɗalibai damar amfani da shi ta asusun makaranta, don haka ku tambayi malaminku. Google Slides da Microsoft PowerPoint ma suna aiki don fosta masu sauƙi.",
            "Ku fara daga samfuri (template), wato zane da aka riga aka shirya, sannan ku canja kalmomi, launuka da hotuna. Wasu kayan aiki suna iya yin hoto daga kalmomin da kuka rubuta. Waɗannan fasalolin hoton AI suna iya samun nasu ƙa'idodin shekaru, ko a kashe su a asusun makaranta, don haka ku duba kafin ku yi amfani da su.",
            "Zane mai kyau mai sauƙi ne: babban take ɗaya, 'yan gajerun layuka, launuka masu sauƙin karantawa, da muhimman bayanai kamar rana, lokaci da wuri."
          ],
          steps: ["Ku buɗe Canva, Google Slides ko PowerPoint (ku yi amfani da asusun makarantarku idan makarantarku ta ba ku).", "Ku zaɓi samfurin fosta.", "Ku canja take, bayanai da launuka.", "Ku ƙara ko ku yi hoto ɗaya.", "Ku duba cewa rana, lokaci da wuri suna da sauƙin karantawa."],
          words: [["Samfuri (template)", "zane da aka riga aka shirya wanda za ku iya canjawa."], ["Mai yin hoton AI (AI image generator)", "kayan aiki da ke yin hoto daga kalmomin da kuka rubuta."]],
          slides: [
            { title: "Kayan zane kyauta", bullets: ["Canva (tsarin kyauta; ku tambaya ko makarantarku tana bayarwa)", "Google Slides", "Microsoft PowerPoint"] },
            { title: "Ku fara daga samfuri", bullets: ["Ku canja kalmomi, launuka da hotuna", "Fasalolin hoton AI suna iya samun nasu ƙa'idodin shekaru"] },
            { title: "Zane mai sauƙi ya fi kyau", bullets: ["Babban take ɗaya", "'Yan gajerun layuka", "Launuka masu sauƙin karantawa", "Rana, lokaci da wuri"] }
          ],
          tryIt: "Ku buɗe kayan zane kyauta ku zaɓi samfurin fosta. Ku saka take, da rana, lokaci da wurin ra'ayinku daga Darasi na 1. Ku ajiye shi.",
          youCanNow: "yin fosta mai sauƙi da kayan zane kyauta.",
          quickCheck: [
            { objective: "O2", q: "Me ke sa fosta ta zama mai sauƙin karantawa?", options: ["Babban take ɗaya, 'yan gajerun layuka da launuka masu sarari", "Ƙananan rubutu masu yawa", "Nau'in rubutu (font) goma daban-daban", "Rubutu mai duhu a kan bango mai duhu"], answer: 0, why: "Zane mai kyau mai sauƙi ne, da babban take da muhimman bayanai a sarari." },
            { objective: "O2", q: "Kuna son amfani da fasalin hoton AI a kayan zane a asusun makarantarku. Me za ku fara yi?", options: ["Ku yi amfani da asusun aboki", "Ku buɗe sabon asusu ba tare da faɗa wa kowa ba", "Ku duba ƙa'idar shekarunsa da ko makarantarku ta yarda", "Ku bar fostar"], answer: 2, why: "Fasalolin hoton AI suna iya samun nasu ƙa'idodin shekaru, ko a kashe su a asusun makaranta." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kiyaye aikinku na asali da bayyana taimakon AI",
          minutes: 4,
          goal: "Faɗi gaskiya game da yadda AI ya taimaka, kuma ku kiyaye muryarku a cikin aikin.",
          text: [
            "Idan AI ya taimaka muku yin wani abu, ku faɗa. Ɗan rubutu kamar \"An yi tunanin ra'ayoyi da Microsoft Copilot; zane da kalmomi nawa ne\" gaskiya ne, kuma yana nuna kun san yadda ake amfani da kayan aikin.",
            "Kada ku yi amfani da zane, kiɗa, tambari (logo) ko halayen labarin wasu mutane ba tare da izini ba, kuma kada ku nemi AI ya kwafi aikin wani mai zane na gaske daidai yadda yake. Wasu makarantu da gasa ba sa yarda da hotunan da AI ya yi kwata-kwata, don haka ku karanta dokokin.",
            "Muryarku tana da muhimmanci. Ku ƙara wani abu da ku kaɗai za ku iya ƙarawa: barkwancin da ƙungiyarku kaɗai ta sani, hoton da kuka ɗauka, zane, ko kalmominku na kanku."
          ],
          steps: ["Ku rubuta abin da AI ya yi da abin da ku kuka yi.", "Ku ƙara ɗan gajeren bayanin taimako.", "Ku karanta dokokin gasa ko aji game da AI.", "Ku ƙara abu ɗaya da ku kaɗai za ku iya yi."],
          words: [["Bayanin taimako (credit)", "faɗin wane ne ko mene ne ya taimaka wajen yin wani abu."], ["Haƙƙin mallaka (copyright)", "dokar da ke kare aikin ƙirƙira na mutane, kamar zane, kiɗa da rubutu."]],
          slides: [
            { title: "Ku faɗi yadda AI ya taimaka", bullets: ["\"An yi tunanin ra'ayoyi da AI; zanen nawa ne\"", "Gaskiya ne, kuma yana nuna ƙwarewa"] },
            { title: "Ku girmama sauran masu ƙirƙira", bullets: ["Kada ku kwafi zane, tambari ko halayen labari", "Wasu gasa sun hana hotunan AI: ku karanta dokokin"] },
            { title: "Ku ƙara muryarku", bullets: ["Hoton da kuka ɗauka", "Zane ko kalmominku na kanku", "Abin da ku kaɗai za ku iya ƙarawa"] }
          ],
          tryIt: "Ku ƙara bayanin taimako na layi ɗaya a fostar da kuka fara. Sannan ku ƙara abu ɗaya da ku kaɗai za ku iya ƙarawa, kamar hotonku ko taken ku na kanku.",
          youCanNow: "bayyana taimakon AI da gaskiya da kiyaye muryarku a cikin aikinku.",
          quickCheck: [
            { objective: "O3", q: "Me yasa za ku ƙara bayanin taimako idan AI ya taimaka?", options: ["Don fostar ta yi tsawo", "Gasa suna buƙatar hotunan AI", "Yana ɓoye abin da kuka yi", "Gaskiya ne, kuma yana nuna yadda kuka yi amfani da kayan aikin"], answer: 3, why: "Ɗan gajeren bayanin taimako yana faɗin gaskiya game da abin da AI ya yi da abin da ku kuka yi." },
            { objective: "O3", q: "Fostarku tana kama da sauran fostocin AI sosai. Ta yaya za ku ƙara muryarku?", options: ["Ku ƙara hotonku, zanenku, takenku ko barkwancin ƙungiyarku", "Ku nemi AI ya kwafi wani shahararren mai zane daidai", "Ku yi amfani da shahararren tambari", "Ku cire sunanku"], answer: 0, why: "Ƙara abin da ku kaɗai za ku iya yi yana sa aikin ya kasance naku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: AI a matsayin abokin ƙirƙirarku",
        questions: [
          { objective: "O1", q: "Mene ne tunanin ra'ayoyi (brainstorming)?", options: ["Kwafar aikin wani", "Fito da ra'ayoyi masu yawa kafin a zaɓa", "Gyara kwamfutar da ta lalace", "Goge tsofaffin fayiloli"], answer: 1, why: "Tunanin ra'ayoyi shi ne yin ra'ayoyi masu yawa da sauri, sannan a zaɓa." },
          { objective: "O1", q: "Wane prompt ne zai kawo mafi kyawun tunanin ra'ayoyi?", options: ["\"fosta\"", "\"yi shi\"", "\"ra'ayoyi\"", "\"Ka ba ni ra'ayoyi 10 daban-daban na fostar ƙungiyar robot: wasu masu ban dariya, wasu na gaske\""], answer: 3, why: "Yana faɗin me, don wa, nawa da wane salo." },
          { objective: "O2", q: "Mene ne samfuri (template)?", options: ["Zane da aka riga aka shirya wanda za ku iya canjawa", "Kalmar sirri", "Wani nau'in ƙwayar cutar kwamfuta (virus)", "Dokar makaranta"], answer: 0, why: "Samfuri yana ba ku zanen farawa da za ku gyara." },
          { objective: "O3", q: "Wata gasa ta ce babu hotunan da AI ya yi. Ku:", options: ["Ku yi amfani da ɗaya duk da haka", "Ku ɓoye cewa kun yi amfani da AI", "Ku bi dokar ku yi ko ku yi amfani da hotonku na kanku", "Ku ƙi karanta dokokin"], answer: 2, why: "Bin dokokin gasar yana sa shigarku ta zama ta gaskiya kuma an yarda da ita." },
          { objective: "O3", q: "Wane ne bayanin taimako mai kyau?", options: ["Babu komai", "\"Ni na yi komai\" alhali AI ya taimaka", "\"An yi tunanin ra'ayoyi da AI; zane da kalmomi nawa ne\"", "\"Robot ne ya yi shi\""], answer: 2, why: "Yana faɗin gaskiya game da abin da AI ya yi da abin da ku kuka yi." }
        ]
      }
    },
    {
      name: "Babi na 2: AI a matsayin abokin karatunku",
      lessons: [
        {
          objectives: ["O4"],
          title: "Koyon sabuwar fasaha mataki-mataki",
          minutes: 5,
          goal: "Nemi AI ya koya muku sabuwar fasaha a ƙananan matakai a matakinku.",
          text: [
            "AI zai iya zama kamar malami mai haƙuri. Ku faɗa masa abin da kuke son koya, abin da kuka riga kuka sani, kuma ku nemi ya tafi mataki ɗaya a lokaci ɗaya. Misali: \"Ina son in koyi karanta rubutun gita (guitar tabs). Ban san komai ba tukuna. Ka koya mini a ƙananan matakai 5, kuma ka jira ni bayan kowanne.\"",
            "Ku nemi ya duba fahimtarku: \"Ka yi mini tambaya ɗaya kafin mu ci gaba.\" Idan wani abu ya rikitar da ku, ku faɗa: \"Ka bayyana shi kamar ina da shekara 12\" ko \"Ka ba ni misali daga ƙwallon kwando.\"",
            "Shafukan koyo kyauta kamar Khan Academy suna da darussa da atisaye da za ku iya amfani da su tare da mataimakin AI. Makarantarku tana iya samun kayan aikin da ta amince da su, don haka ku tambayi malaminku waɗanne za ku yi amfani da su."
          ],
          steps: ["Ku faɗi fasahar da matakinku.", "Ku nemi ƙananan matakai, ɗaya bayan ɗaya.", "Ku nemi ya gwada ku kafin ku ci gaba.", "Ku nemi misalai daga abubuwan da kuke so."],
          words: [["Malami mai koyarwa ɗaya-da-ɗaya (tutor)", "mutum (ko kayan aiki) da ke taimaka muku koyo ku kaɗai."]],
          slides: [
            { title: "AI a matsayin malami", bullets: ["Ku faɗi abin da kuke son koya", "Ku faɗi abin da kuka riga kuka sani", "Ku nemi mataki ɗaya a lokaci ɗaya"] },
            { title: "Ku sa shi ya gwada ku", bullets: ["\"Ka yi mini tambaya ɗaya kafin mu ci gaba\"", "\"Ka bayyana shi kamar ina da shekara 12\""] },
            { title: "Ku yi amfani da misalan da kuke so", bullets: ["Wasanni, wasannin bidiyo, kiɗa", "Ku tambayi malaminku game da kayan aikin da aka amince da su"] }
          ],
          tryIt: "Ku zaɓi ƙaramar fasaha da kuke son koya a wannan makon (wani sautin gita, hanyar lissafi, dabarar zane, kalma a sabon harshe). Ku nemi mataimakin AI ya koya muku a ƙananan matakai, kuma ya gwada ku bayan kowanne.",
          youCanNow: "amfani da AI a matsayin malami mai koyarwa mataki-mataki a matakinku.",
          quickCheck: [
            { objective: "O4", q: "Me ya kamata prompt na koyon sabuwar fasaha ya ƙunsa?", options: ["Kalmar \"koya\" kawai", "Fasahar, matakinku da buƙatar tafiya mataki ɗaya a lokaci ɗaya", "Kalmar sirrinku", "Amsar da kuke so"], answer: 1, why: "Faɗa wa AI fasahar, matakinku da ya tafi mataki-mataki yana sa ya zama kamar malami mai haƙuri." },
            { objective: "O4", q: "Bayanin AI na wata hanyar lissafi ya rikitar da ku. Me za ku aika?", options: ["Babu komai; ku rufe manhajar", "\"Ka yi mini aikin gida.\"", "\"Ka bayyana shi kamar ina da shekara 12, da misali daga ƙwallon kwando.\"", "Tambayar ɗaya kuma"], answer: 2, why: "Neman kalmomi masu sauƙi ko misalin da kuke so yana taimaka muku fahimta." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Yin tambayoyin atisaye da katunan tunawa",
          minutes: 5,
          goal: "Mai da rubutun darasinku tambayoyin atisaye, ku gwada kanku.",
          text: [
            "Gwada kanku yana ɗaya daga cikin hanyoyi mafi kyau na tuna abubuwa. AI zai iya mai da rubutun darasinku tambayoyin gwaji cikin daƙiƙoƙi.",
            "Ku liƙa ko ku rubuta rubutun darasinku na aji (babu bayanan sirri) ku tambaya: \"Ka yi tambayoyin atisaye 8 daga wannan rubutun. Kada ka nuna amsoshin sai na amsa.\" Sannan ku amsa su da kanku kafin ku duba.",
            "Kuna kuma iya neman katunan tunawa (flashcards): kalma a gefe ɗaya, ma'anarta a ɗayan gefen. Kayan aiki kyauta kamar Google Docs ko katunan takarda suna aiki sosai. Ku duba amsoshin da rubutun darasinku ko littafin karatu, domin AI har yanzu yana iya yin kuskure."
          ],
          steps: ["Ku tattara rubutun darasinku kan jigo ɗaya.", "Ku nemi AI tambayoyin atisaye, da amsoshi a ɓoye.", "Ku amsa su da kanku da farko.", "Ku duba amsoshin da rubutun darasinku ko littafin karatu."],
          words: [["Katin tunawa (flashcard)", "kati mai tambaya ko kalma a gefe ɗaya da amsa a ɗayan gefen."], ["Gwajin kai (self-testing)", "yi wa kanku tambayoyi don taimaka muku tunawa."]],
          slides: [
            { title: "Ku gwada kanku don ku tuna", bullets: ["Yin tambayoyi ya fi sake karantawa", "AI zai iya yin tambayoyi daga rubutun darasinku"] },
            { title: "Ku tambaya ta hanyar da ta dace", bullets: ["\"Ka yi tambayoyi 8 daga wannan rubutun\"", "\"Ka ɓoye amsoshin sai na amsa\""] },
            { title: "Ku duba amsoshin", bullets: ["Ku yi amfani da rubutun darasinku ko littafin karatu", "AI har yanzu yana iya yin kuskure"] }
          ],
          tryIt: "Ku ɗauki rubutun darasi daga aji ɗaya a wannan makon. Ku nemi AI tambayoyin atisaye 5 da amsoshi a ɓoye. Ku amsa su, sannan ku duba kanku da rubutun darasinku.",
          youCanNow: "mai da rubutun darasi tambayoyin atisaye da gwada kanku.",
          quickCheck: [
            { objective: "O5", q: "Me yasa za ku nemi AI ya ɓoye amsoshi idan yana yin tambayoyin atisaye?", options: ["Don ajiye takarda", "Don AI ya ba kansa maki", "Domin amsoshin sirri ne", "Don ku amsa da farko ku gwada kanku da gaske"], answer: 3, why: "Gwada kanku kafin ganin amsa yana taimaka muku tunawa." },
            { objective: "O5", q: "Amsar AI ga wata tambayar atisaye ba ta yi daidai da rubutun darasinku ba. Me za ku yi?", options: ["Ku duba rubutun darasinku ko littafin karatu ku amince da su", "Ku amince da AI koyaushe", "Ku goge rubutun darasinku", "Ku tsallake wannan jigon"], answer: 0, why: "AI har yanzu yana iya yin kuskure, don haka ku duba da rubutun darasinku ko littafin karatu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Amfani da AI don koyo, ba don tsallake koyo ba",
          minutes: 4,
          goal: "Yanke lokacin da taimakon AI koyo ne, da lokacin da yake tsallake aikin.",
          text: [
            "Akwai bambanci tsakanin AI ya taimaka muku koyo da AI ya yi muku aikin. Idan kun nemi ya bayyana, ya gwada ku ko ya ba ku shawarar gyara, kuna koyo ne. Idan kun nemi ya rubuta muku maƙala ko ya warware aikin gidanku don ku kwafa, kuna tsallake koyon ne, kuma yana iya karya dokokin makaranta.",
            "Gwaji mai kyau: bayan amfani da AI, za ku iya yin aikin ku kaɗai gobe? Idan eh, AI ya taimaka muku koyo. Idan a'a, ku sake gwadawa ta hanyar da ku ne za ku yi tunanin.",
            "Koyaushe ku bi dokokin malaminku. Idan ba ku tabbata ko an yarda da wani abu ba, ku tambaya kafin ku yi amfani da AI, kuma ku kasance a shirye ku faɗi yadda kuka yi amfani da shi."
          ],
          steps: ["Ku nemi AI ya bayyana, ya gwada ku ko ya ba da shawarar gyara, ba ya yi aikin ba.", "Ku duba: zan iya yin wannan ni kaɗai gobe?", "Ku bi dokokin malaminku game da AI.", "Ku kasance a shirye ku faɗi yadda kuka yi amfani da AI."],
          words: [["Shawarar gyara (feedback)", "sharhi da ke taimaka muku inganta aikinku na kanku."]],
          slides: [
            { title: "Koyo da tsallakewa", bullets: ["Koyo: bayani, gwaji, shawarar gyara", "Tsallakewa: AI ya rubuta, ku kwafa"] },
            { title: "Gwajin gobe", bullets: ["Za ku iya yin shi ku kaɗai gobe?", "Idan ba haka ba, ku ƙara yin tunanin da kanku"] },
            { title: "Ku bi dokokin", bullets: ["Ku tambayi malaminku idan ba ku tabbata ba", "Ku kasance a shirye ku faɗi yadda kuka yi amfani da AI"] }
          ],
          tryIt: "Aikin ƙarshe: ku yi fostar ƙungiyarku ko taronku. Ku yi tunanin aƙalla ra'ayoyi biyar da AI, ku mai da ɗaya naku, ku zana ta a Canva ko Google Slides, sannan ku ƙara bayanin taimako da ke faɗin yadda AI ya taimaka.",
          youCanNow: "amfani da AI don ƙirƙira da koyo ta hanyar gaskiya da ke sa fasahar ta kasance taku.",
          quickCheck: [
            { objective: "O6", q: "Wanne ne amfani da AI don koyo?", options: ["Kwafar maƙalar AI", "Neman AI ya bayyana matakin da kuka rasa, sannan ku gwada shi da kanku", "Sa AI ya warware kowace tambayar aikin gida", "Liƙa amsoshin AI a cikin jarabawa"], answer: 1, why: "Bayani, gwaji da shawarar gyara suna taimaka muku koyo; kwafa yana tsallake koyon." },
            { objective: "O6", q: "Bayan AI ya taimaka, ba za ku iya yin aikin ku kaɗai gobe ba. Me za ku yi?", options: ["Ku miƙa aikin AI", "Ku daina amfani da AI har abada", "Ku sake gwadawa don ku ƙara yin tunanin da kanku", "Ku ɓoye cewa kun yi amfani da AI"], answer: 2, why: "Gwajin gobe ya nuna AI ne ya yi tunanin, don haka ku sake yin shi ta hanyar da za ku koya." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: AI a matsayin abokin karatunku",
        questions: [
          { objective: "O4", q: "Wane prompt ne ke sa AI ya zama kamar malami nagari?", options: ["\"Ka koya mini rubutun gita a ƙananan matakai 5, ka gwada ni bayan kowanne\"", "\"Ka yi mini aikin gida\"", "\"Ka amsa komai\"", "\"tabs\""], answer: 0, why: "Yana saita matakin, ƙananan matakai da gwaje-gwaje." },
          { objective: "O5", q: "Me yasa gwada kanku yake da amfani?", options: ["Yana ɓata lokaci", "Malamai sun hana shi", "Yana goge rubutun darasi", "Yana taimaka muku tunawa"], answer: 3, why: "Gwajin kai yana ɗaya daga cikin hanyoyi mafi kyau na tunawa." },
          { objective: "O5", q: "AI ya yi tambayoyin atisaye daga rubutun darasinku. Kafin ku amince da amsoshin ya kamata ku:", options: ["Raba su a intanet", "Duba su da rubutun darasinku ko littafin karatu", "Goge rubutun darasinku", "Tambayi baƙo"], answer: 1, why: "AI har yanzu yana iya yin kuskure, don haka ku duba." },
          { objective: "O6", q: "Wane amfani da AI ne ke tsallake koyo?", options: ["Neman ya rubuta muku maƙala don ku kwafa", "Neman ya bayyana wani mataki", "Neman ya gwada ku", "Neman shawarar gyara kan daftarinku"], answer: 0, why: "Kwafar aikin AI yana nufin kun tsallake koyo, kuma kuna iya karya dokoki." },
          { objective: "O6", q: "Mene ne \"gwajin gobe\"?", options: ["Yin aikin gida gobe", "Yin jarabawa gobe", "Tambayar ko za ku iya yin aikin ku kaɗai gobe", "Kashe AI gobe"], answer: 2, why: "Idan za ku iya yin shi ku kaɗai, AI ya taimaka muku koyo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Kayan AI don Ƙirƙira da Koyo",
    questions: [
      { objective: "O1", q: "Yayin tunanin ra'ayoyi da AI, ya kamata ku fara:", options: ["Yanke hukunci kan kowane ra'ayi", "Neman ra'ayoyi masu yawa daban-daban", "Zaɓar na farko", "Tsayawa bayan ra'ayi ɗaya"], answer: 1, why: "Tunanin ra'ayoyi yana farawa da ra'ayoyi masu yawa." },
      { objective: "O1", q: "Hanya mafi kyau ta mai da ra'ayin AI naku ita ce:", options: ["Kwafar sa daidai yadda yake", "Neman aboki ya zaɓa", "Kada ku taɓa amfani da ra'ayoyin AI", "Canja ko haɗa ra'ayoyi da ƙara naku tunanin"], answer: 3, why: "Canja da haɗa ra'ayoyi yana mai da sakamakon naku." },
      { objective: "O1", q: "Neman ra'ayoyi \"masu ban dariya, na gaske da masu ƙarfin hali\" yana ba ku:", options: ["Ƙwayar cutar kwamfuta (virus)", "Ra'ayoyi kaɗan", "Kalmar sirri", "Iri-iri"], answer: 3, why: "Salo daban-daban suna ba ku ƙarin abubuwan zaɓa." },
      { objective: "O2", q: "Canva shi ne:", options: ["Na'urar wasan bidiyo", "Kayan zane mai tsarin kyauta", "Dokar makaranta", "Manhajar kiɗa kawai"], answer: 1, why: "Canva kayan zane ne mai tsarin kyauta." },
      { objective: "O2", q: "Kafin ku yi amfani da fasalin hoton AI ya kamata ku:", options: ["Saka hoton aboki", "Raba kalmar sirrinku", "Duba ƙa'idar shekarunsa da saitunan makarantarku", "Tsallake duk dokoki"], answer: 2, why: "Fasalolin hoton AI suna iya samun nasu ƙa'idodin shekaru." },
      { objective: "O2", q: "Fosta mai kyau tana da:", options: ["Babban take ɗaya da rana, lokaci da wuri a sarari", "Ƙananan rubutu masu yawa", "Kowane launi a lokaci ɗaya", "Babu bayanai"], answer: 0, why: "Zane mai sauƙi ya fi sauƙin karantawa." },
      { objective: "O3", q: "Bayanin taimakon AI na gaskiya yana kama da:", options: ["Ɓoye cewa kun yi amfani da AI", "\"An yi tunanin ra'ayoyi da AI; zanen nawa ne\"", "Faɗin cewa robot ne ya yi komai", "Babu komai"], answer: 1, why: "Yana faɗin gaskiya game da wane ne ya yi me." },
      { objective: "O3", q: "Kuna son amfani da shahararren halin zanen katun a fosta. Ya kamata ku:", options: ["Yi amfani da shi ba tare da tambaya ba", "Nemi AI ya kwafe shi daidai", "Cire bayanin taimakon", "Yi naku hoton a maimakon haka, ko ku nemi izini"], answer: 3, why: "Haƙƙin mallaka (copyright) yana kare halayen labari da zane." },
      { objective: "O3", q: "Haƙƙin mallaka (copyright) yana kare:", options: ["Aikin ƙirƙira na mutane kamar zane da kiɗa", "Batirin wayarku", "Abincin rana na makaranta", "Wi-Fi"], answer: 0, why: "Haƙƙin mallaka yana kare aikin masu ƙirƙira." },
      { objective: "O4", q: "Don koyon sabuwar fasaha da AI, ya kamata ku faɗa masa:", options: ["Babu komai", "Kalmar sirrinku", "Fasahar, matakinku, da ya tafi mataki ɗaya a lokaci ɗaya", "Ya tsallaka zuwa ƙarshe"], answer: 2, why: "Matakinku da ƙananan matakai suna sa AI ya zama malami nagari." },
      { objective: "O4", q: "Idan bayanin AI ya rikitar da ku, tambayar biyo baya mai kyau ita ce:", options: ["\"Ba komai\"", "\"Ka ba ni makina\"", "\"Ka bayyana shi kamar ina da shekara 12\"", "\"Ka rubuta mini jarabawata\""], answer: 2, why: "Neman kalmomi masu sauƙi yana taimaka muku fahimta." },
      { objective: "O4", q: "Wane ne zai iya faɗa muku kayan AI da aka amince da su don makaranta?", options: ["Malaminku", "Tallar da ke tasowa (pop-up)", "Baƙo a intanet", "Babu kowa"], answer: 0, why: "Malamai sun san kayan aikin da makaranta ta amince da su da dokokinta." },
      { objective: "O5", q: "Me ya kamata ku cire idan kuna liƙa rubutun darasi a AI?", options: ["Kalmomin jigo", "Muhimman ranakun jigon", "Kalmomin da ake koyo", "Bayanan sirri kamar adireshinku"], answer: 3, why: "Kada ku taɓa saka bayanan sirri a kayan AI." },
      { objective: "O5", q: "Me yasa za ku nemi AI ya ɓoye amsoshin tambayoyin atisaye?", options: ["Don ajiye takarda", "Don ku amsa da farko ku gwada kanku da gaske", "Doka ce ta buƙace shi", "Don ku yaudari malaminku"], answer: 1, why: "Amsawa da farko shi ne gwajin kai na gaske." },
      { objective: "O5", q: "Katin tunawa (flashcard) yana da:", options: ["Tambaya ko kalma a gefe ɗaya da amsa a ɗayan gefen", "Hotuna kawai", "Kalmar sirri", "Alamomin kiɗa kawai"], answer: 0, why: "Haka katunan tunawa suke aiki." },
      { objective: "O5", q: "Bayan AI ya yi amsoshin atisaye ya kamata ku:", options: ["Amince da su gaba ɗaya", "Saka su a intanet", "Duba su da rubutun darasi ko littafin karatu", "Goge su"], answer: 2, why: "Amsoshin AI suna iya zama ba daidai ba." },
      { objective: "O6", q: "Wanne ne amfani da AI don koyo?", options: ["Kwafar maƙalar AI", "Neman AI shawarar gyara kan daftarinku na kanku", "Sa AI ya yi muku gwaji", "Liƙa amsoshin aikin gida na AI"], answer: 1, why: "Shawarar gyara kan aikinku na kanku tana taimaka muku ingantawa." },
      { objective: "O6", q: "Ba ku tabbata ko an yarda da AI don wani aiki ba. Ya kamata ku:", options: ["Yi amfani da shi ku yi fatan alheri", "Yi amfani da shi a ɓoye", "Tambayi AI ko an yarda", "Tambayi malaminku da farko"], answer: 3, why: "Malaminku ne ke yanke dokokin aji." },
      { objective: "O2", q: "Kafin ku buɗe sabon asusu a manhajar ƙirƙira, ya kamata ku:", options: ["Yi amfani da shekarun ƙarya", "Ba ta kalmar sirrin makarantarku", "Tsallake sharuɗɗan", "Yi magana da mahaifi ko mai kula da ku, ku duba ƙa'idar shekaru"], answer: 3, why: "Ƙa'idodin shekaru da amincewar mahaifi ko mai kula ne ke zuwa da farko." },
      { objective: "O6", q: "Bayan amfani da AI, ba za ku iya yin aikin ku kaɗai gobe ba. Wannan yana nufin:", options: ["Kun koyi komai", "AI ne ya yi tunanin; ku sake gwadawa don ku ƙara yin shi da kanku", "AI ya lalace", "Ya kamata ku daina makaranta"], answer: 1, why: "Gwajin gobe yana nuna ko kun koya." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      1,
      3,
      6,
      7,
      9,
      13,
      15,
      16,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Tunanin ra'ayoyi",
        objective: "O1",
        notYet: "Ra'ayoyi ƙasa da biyar, ko an yi amfani da ra'ayin AI na farko kamar yadda yake.",
        meets: "Aƙalla ra'ayoyi biyar, kuma an canja ko haɗa ɗaya ya zama na mai koyo.",
        exceeds: "Zai iya nuna waɗanne ra'ayoyi aka haɗa, da dalilin zaɓar wannan."
      },
      {
        name: "Zanen fosta",
        objective: "O2",
        notYet: "Take, ko rana, lokaci da wuri babu su, ko suna da wuyar karantawa.",
        meets: "Babban take ɗaya, 'yan gajerun layuka, launuka masu sarari, da rana, lokaci da wuri masu sauƙin karantawa.",
        exceeds: "Zanen ya dace da ƙungiyar ko taron, kuma abokin aji zai iya karanta shi daga can ƙarshen ɗaki."
      },
      {
        name: "Muryar kai",
        objective: "O3",
        notYet: "Babu wani abu a fostar da yake na mai koyo, ko tana amfani da zane ko tambarin wani.",
        meets: "Tana da abu ɗaya da mai koyo kaɗai zai iya ƙarawa, kamar hoto, zane ko take.",
        exceeds: "Yawancin kalmomi da zaɓuɓɓuka a fili na mai koyo ne."
      },
      {
        name: "Bayanin taimako",
        objective: "O3",
        notYet: "Babu bayani, ko yana ɓoye yadda AI ya taimaka.",
        meets: "Ɗan gajeren bayani yana faɗin abin da AI ya yi da abin da mai koyo ya yi.",
        exceeds: "Bayanin yana da cikakken bayani, kamar wane kayan aiki ne ya yi tunanin ra'ayoyin."
      },
      {
        name: "An bi dokoki",
        objective: "O6",
        notYet: "An yi amfani da kayan aiki ko fasali da ya saɓa wa ƙa'idar shekarunsa, dokokin makaranta ko dokokin gasa.",
        meets: "Kowane kayan aiki da fasalin da aka yi amfani da su an yarda da su don shekaru da makarantar mai koyo.",
        exceeds: "Zai iya bayyana waɗanne dokoki ya duba, da a ina."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ce sun yi amfani da AI don gwada kansu ko koyon wata fasaha a binciken biyo baya na kwanaki 30",
      "Fosta ko ayyukan da aka yi a kwas ɗin da wata ƙungiya, taro ko aji ke amfani da su da gaske",
      "Masu koyo da suka fara wani kwas na matasa na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya, kwamfutar makaranta ko ta ɗakin karatu mai intanet",
      "Mataimakin AI kyauta da aka yarda mai koyo ya yi amfani da shi, da Canva, Google Slides ko PowerPoint",
      "Rubutun darasi daga fanni ɗaya don darussan karatu",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku duba ƙa'idodin shekaru na kowane kayan aiki da fasalin hoton AI kafin aji, kuma ku yi amfani da asusun makaranta inda makarantar ta samar da su.",
      "Ku raba dokokin makarantarku ko shirinku game da AI a farko, har da ko an yarda da hotunan da AI ya yi.",
      "Ku tunatar da masu koyo kada su liƙa bayanan sirri idan suna mai da rubutun darasi tambayoyin atisaye.",
      "Ku shirya ɗan nunin fosta inda masu koyo za su bayyana bayanin taimakonsu da ɓangaren da yake nasu.",
      "Ku ba da maki ga fostar da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

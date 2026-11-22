"use strict";

// Koach Learn course, Hausa (ha) translation of athletes/athletes-ai-marketing-toolkit.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "athletes-ai-marketing-toolkit-ha",
  lang: "ha",
  translationOf: "athletes-ai-marketing-toolkit",
  category: "Athletes",
  name: "Kayan Aikin AI don Tallace-tallace da Gina Suna",
  skills: "Rubuta jagorar salon muryarku, Gina tarin prompt, Amfani da AI don rubutu, zane da bidiyo, Tsara lokacin wallafa da bin diddigin sakamako, Duba aikin AI don gaskiya, haƙƙi da bayyanawa",
  outcome: "haɗa naku kayan aikin AI na tallace-tallace: jagorar salon murya mai shafi ɗaya, tarin prompt guda goma da ake sake amfani da su, kayan aiki ɗaya kowanne don rubutu, zane, bidiyo da bin diddigi, da jerin dubawa mai matakai biyar da kuke bi kafin komai ya fita ga jama'a.",
  about: [
    "Wannan kwas ɗin na 'yan wasa ne, masu horarwa da ma'aikatan ƙungiya da suke wallafa abubuwa da tallata kansu, kuma suke son tsari da ake maimaitawa wanda ke ajiye lokaci ba tare da rasa muryarsu ba.",
    "Kayan aiki ba yana nufin samun manhajoji mafi yawa ba. Ƙananan kayan aiki ne tare da jagora da prompt da aka ajiye, ta yadda kowane rubutu zai yi kama da ku kuma ya bi dubawa iri ɗaya.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Gwajin ilimi yana rufe kowane babi, kuma jarabawa mai tambayoyi 20 tana rufe kwas ɗin."
  ],
  finalTask: "Ku gina takardar kayan aikinku: jagorar salon murya mai shafi ɗaya, prompt guda goma da aka ajiye (rubutun hoto, bayanin kai, imel na neman mai ɗaukar nauyi, ra'ayoyin rubutu, amsoshi da sauransu), kayan aikin da kuka zaɓa don rubutu, zane, bidiyo da bin diddigi, da jerin dubawa mai matakai biyar. Ku yi amfani da kayan aikin don yin rubutu ɗaya da duba shi daga farko har ƙarshe.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "'Yan wasa, masu horarwa da ma'aikatan ƙungiya da suke wallafa abubuwa da tallata kansu a intanet, kuma suke son tsari da ake maimaitawa wanda ke ajiye lokaci ba tare da rasa muryarsu ba.",
    startingPoint: "Suna wallafa abubuwa akai-akai kuma sun gwada kayan AI don rubutun hoto ko ra'ayoyi. Yawancinsu suna farawa daga farko kowane lokaci, suna samun rubutun AI na gama-gari, suna amfani da manhajoji da yawa masu aiki iri ɗaya, kuma ba sa duba haƙƙi, bayyanawa ko tsaro a tsari ɗaya kafin su wallafa.",
    gap: "Ba tare da tsari ba, rubutun AI yana zama na gama-gari, kuma kurakurai game da gaskiya, haƙƙi, bayyanawa ko sirri suna wucewa, wanda zai iya jawo asarar amana, yarjejeniyoyi ko tsaro. Jagorar murya, prompt da aka ajiye, kayan aiki ɗaya ga kowane aiki da jerin dubawa suna sa aiki ya yi sauri, ya fi kama da ku, kuma ya fi aminci.",
    constraints: [
      "Kalmomi masu sauƙi a kusan matakin karatu na aji 8",
      "Waya ko kwamfuta mai kayan aiki kyauta: mataimakin AI, Canva, mai gyara bidiyo da Google Sheets ko Docs",
      "Kusan minti 60 gaba ɗaya",
      "Haƙƙin hotuna, tambura da waƙoƙi; bayyanawa bisa ka'idar FTC da dokokin NIL na makaranta ko jiha",
      "Babu bayanan sirri ko wurin da kuke a yanzu a cikin rubutu; babu hotunan AI masu yaudara na mutane na gaske"
    ],
    prerequisites: "Babu. Kwas ɗin \"Gina Suna (Brand) a Kafofin Sada Zumunta ga 'Yan Wasa\" ko \"Ƙirƙirar Abun Ciki ga 'Yan Wasa\" mataki ne na farko mai amfani."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da rubutun hotonku guda biyar da mataimakin AI", action: "rubuta jagorar salon murya mai shafi ɗaya", standard: "mai kalmomi uku na murya, kalmomin da kuke amfani da su da waɗanda ba ku taɓa amfani da su, batutuwan da za ku wallafa da waɗanda za ku guje wa, al'adun emoji da hashtag, da rubutu biyu na misali" },
    { id: "O2", condition: "Idan aka ba ku ayyukan tallace-tallacen da kuka fi yi", action: "ƙirƙirar tarin prompt guda goma da ake sake amfani da su masu wuraren cikewa", standard: "kowanne yana nuni ga jagorar muryarku, kuma an ajiye su a takarda ɗaya" },
    { id: "O3", condition: "Idan aka ba ku ayyukan rubutu, zane, bidiyo da bin diddigi", action: "zaɓar kayan aiki ɗaya ga kowane aiki", standard: "bayan an duba wanda ya yi kowane sabon kayan aiki, yadda yake amfani da bayanai, da kuɗinsa bayan gwajin kyauta" },
    { id: "O4", condition: "Idan aka ba ku kowane rubutu da AI ya yi", action: "duba shi da matakai biyar na dubawa: gaskiya, murya, haƙƙi, bayyanawa da tsaro", standard: "yana cin dukkan matakai biyar kafin ya fita ga jama'a" },
    { id: "O5", condition: "Idan akwai hotuna, tambura, waƙoƙi da alaƙa da kamfanoni a cikin abubuwanku", action: "gane abin da kuke da izinin amfani da shi da rubuta bayyanawa a sarari ga kowace alaƙa da kamfani", standard: "da izini ga kowane abu da ba ku ne kuka yi shi ba, waƙoƙi masu lasisi, babu hotunan AI masu yaudara, kuma bayyanawar tana cikin rubutun da kansa" },
    { id: "O6", condition: "Bayan mako ɗaya na wallafawa", action: "rubuta lambobinku a takardar bin diddigi da sabunta prompt ɗinku da jagorar muryarku bisa sakamakon", standard: "an ambaci rubutu mafi kyau da mafi rauni, kuma an kwatanta duk wani bayanin AI da takardar" }
  ],
  chapters: [
    {
      name: "Babi na 1: Muryarku da prompt ɗinku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Rubuta jagorar salon muryarku",
          minutes: 5,
          goal: "Rubuta jagora mai shafi ɗaya da ke faɗa wa kowane kayan AI yadda kuke magana.",
          text: [
            "AI yana rubutu da murya ta gama-gari sai dai idan kun faɗa masa yadda kuke magana. Jagorar salon murya tana gyara wannan, kuma tana taimaka wa abokan ƙungiya ko 'yan uwa da ke taimaka muku wallafawa.",
            "Jagorarku tana da: kalmomi uku na muryarku (misali \"mai ƙarfin gwiwa, mai godiya, mai ban dariya\"); kalmomi da jimlolin da kuke amfani da su; kalmomin da ba ku taɓa amfani da su; batutuwan da kuke wallafawa; batutuwan da kuke guje wa; al'adunku na emoji da hashtag; da rubutu biyu na misali da suke kama da ku daidai.",
            "Ku nemi mataimakin AI ya taimaka: ku liƙa rubutun hotonku guda biyar mafi kyau ku tambaya, \"Ka bayyana muryar waɗannan rubutun da kalmomi uku, ka kuma jera jimlolin da nake maimaitawa.\" Sannan ku gyara sakamakon."
          ],
          steps: ["Ku tattara rubutun hoto guda biyar da suke kama da ku.", "Ku nemi AI ya bayyana muryarku.", "Ku zaɓi kalmomi uku na murya.", "Ku jera kalmomin da kuke amfani da su da waɗanda ba ku taɓa amfani da su.", "Ku ƙara batutuwan da za ku wallafa da waɗanda za ku guje wa, da rubutu biyu na misali."],
          words: [["Salon murya (brand voice)", "hali da salon yadda kuke rubutu da magana."], ["Jagorar salo (style guide)", "takarda mai ƙa'idoji don abubuwanku su kasance iri ɗaya."]],
          slides: [
            { title: "Me yasa jagorar murya", bullets: ["AI na gama-gari ne sai an faɗa masa", "Tana taimaka wa duk wanda ke taimaka muku wallafawa"] },
            { title: "Abin da ke cikinta", bullets: ["Kalmomi uku na murya", "Kalmomin da kuke amfani da su da waɗanda ba ku taɓa ba", "Batutuwan da za ku wallafa da waɗanda za ku guje wa", "Rubutu biyu na misali"] },
            { title: "AI yana taimaka muku gano ta", bullets: ["Ku liƙa rubutun hoto guda biyar na gaske", "Ku nemi ya bayyana muryarku"] }
          ],
          tryIt: "Ku liƙa rubutun hotonku guda biyar a mataimakin AI ku nemi ya bayyana muryarku. Ku rubuta jagorarku mai shafi ɗaya daga sakamakon.",
          youCanNow: "rubuta jagorar salon murya da ke sa aikin AI ya yi kama da ku.",
          quickCheck: [
            { objective: "O1", q: "Me yasa AI yake buƙatar jagorar murya?", options: ["Yana rubutu da murya ta gama-gari sai dai idan kun faɗa masa yadda kuke magana", "Ba zai iya rubuta rubutun hoto ba sai da ita", "Doka ce ta tilasta ta", "Tana sa rubutu ya yi tsawo"], answer: 0, why: "Jagorar murya tana faɗa wa AI da masu taimako yadda kuke magana." },
            { objective: "O1", q: "Ƙaninku yana taimaka muku wallafawa. Ta yaya jagorar muryarku take taimaka masa?", options: ["Tana ba shi kalmar sirrinku", "Tana bar shi ya wallafa komai", "Tana nuna masa yadda kuke magana da abin da ba ku taɓa wallafawa", "Tana maye gurbin dubawarku"], answer: 2, why: "Jagorar tana taimaka wa abokan ƙungiya ko 'yan uwa da ke taimaka muku wallafawa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Gina tarin prompt",
          minutes: 5,
          goal: "Ajiye prompt guda goma da ake sake amfani da su don ayyukan tallace-tallacen da kuka fi yi.",
          text: [
            "Tarin prompt (prompt library) takarda ce ta prompt da kuke sake amfani da su. Maimakon ku fara daga farko kowane lokaci, kuna kwafar prompt, ku cike wuraren da babu komai, ku liƙa jagorar muryarku.",
            "Prompt masu kyau suna da wuraren cikewa a cikin baka: \"Ta amfani da jagorar muryata da ke ƙasa, ka rubuta rubutun hoto guda uku ƙasa da haruffa 150 don rubutun [nau'i] game da [batu]. Ka ƙare da tambaya.\" Wasu kuma: zaɓuɓɓukan bayanin kai, imel na neman mai ɗaukar nauyi, saƙon godiya, ra'ayoyin rubutu ga wani babban jigo, amsa mai ladabi ga sharhi mara daɗi, taƙaitaccen bayanin mako.",
            "Ku ajiye tarin a Google Docs ko manhajar rubutun bayanai. Ku inganta prompt duk lokacin da ya ba ku amsa mai rauni."
          ],
          steps: ["Ku jera ayyukan tallace-tallace guda goma da kuka fi yi.", "Ku rubuta prompt ga kowanne mai [wuraren cikewa].", "Ku ƙara \"Ta amfani da jagorar muryata da ke ƙasa...\" a kowanne.", "Ku ajiye su a takarda ɗaya.", "Ku inganta prompt duk lokacin da ya ba da amsa mai rauni."],
          words: [["Tarin prompt (prompt library)", "tarin prompt da aka ajiye da kuke sake amfani da su."], ["Prompt samfuri (template prompt)", "prompt mai wuraren cikewa da kuke cikawa kowane lokaci."]],
          slides: [
            { title: "Tarin prompt", bullets: ["Ku sake amfani, kada ku sake farawa", "Ku cike [wuraren cikewa]", "Ku liƙa jagorar muryarku"] },
            { title: "Ayyuka goma da aka saba", bullets: ["Rubutun hoto, bayanin kai, ra'ayoyin rubutu", "Neman mai ɗaukar nauyi, saƙon godiya", "Amsoshi, taƙaitaccen bayanin mako"] },
            { title: "Ku ci gaba da ingantawa", bullets: ["Takarda ɗaya", "Ku gyara prompt da ke ba da amsoshi masu rauni"] }
          ],
          tryIt: "Ku rubuta prompt samfuri guda biyar na farko masu [wuraren cikewa]. Ku gwada ɗaya da jagorar muryarku, ku gyara shi idan amsar ta yi rauni.",
          youCanNow: "gina da amfani da tarin prompt don ayyukanku na tallace-tallace.",
          quickCheck: [
            { objective: "O2", q: "Mene ne tarin prompt?", options: ["Jerin manhajoji", "Takardar prompt da kuke sake amfani da su", "Jerin mabiyanku", "Katin ɗakin karatu"], answer: 1, why: "Tarin prompt ne da aka ajiye da kuke kwafa, ku cike, ku sake amfani da su." },
            { objective: "O2", q: "Kuna yawan amsa sharhi marasa daɗi. Me za ku ƙara a tarinku?", options: ["Babu komai; ku amsa da fushi", "Sabuwar manhaja", "Jerin mutanen da za ku toshe", "Prompt na amsa mai ladabi mai [wuraren cikewa] da jagorar muryarku"], answer: 3, why: "Ku ajiye prompt ga kowane aiki da aka saba, har da amsoshi masu ladabi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Zaɓar kayan aiki ɗaya ga kowane aiki",
          minutes: 5,
          goal: "Zaɓi kayan aiki ɗaya don rubutu, zane, bidiyo da bin diddigi.",
          text: [
            "Kuna buƙatar ayyuka huɗu su samu kayan aiki. Rubutu: mataimakin AI kamar ChatGPT, Microsoft Copilot ko Google Gemini. Zane: kayan aiki kamar Canva, wanda ke da samfura da fasalolin AI. Bidiyo: mai gyara bidiyo kyauta kamar CapCut ko masu gyara da ke cikin Instagram, TikTok da YouTube. Bin diddigi: bayanan lambobi (insights) na kowace manhaja tare da Google Sheet.",
            "Ku zaɓi ɗaya ga kowane aiki ku koye shi sosai. Kafin ku yi rajista da wani sabon abu, ku duba wanda ya yi shi, waɗanne bayanai yake tattarawa, da nawa ne kuɗinsa bayan duk wani gwajin kyauta.",
            "Manhajoji da yawa kuma suna bar ku tsara lokacin wallafa rubutu tun da wuri, ko a cikin manhajar ko da kayan aikin tsara lokaci. Tsara lokaci yana taimakawa a makonnin da kuke da aiki sosai, amma ku duba cewa rubutun da aka tsara har yanzu suna da ma'ana idan labarai ko sakamako suka canja."
          ],
          steps: ["Ku zaɓi kayan aikin rubutu.", "Ku zaɓi kayan aikin zane.", "Ku zaɓi mai gyara bidiyo.", "Ku shirya takardar bin diddigi.", "Ku rubuta zaɓuɓɓuka huɗun a takardar kayan aikinku."],
          words: [["Tsara lokaci (scheduling)", "saita rubutu ya wallafu da kansa a wani lokaci na gaba."], ["Insights", "lambobin manhaja game da yadda rubutunku suke tafiya."]],
          slides: [
            { title: "Ayyuka huɗu", bullets: ["Rubutu: mataimakin AI", "Zane: Canva", "Bidiyo: CapCut ko masu gyara a cikin manhaja", "Bin diddigi: insights + takarda (sheet)"] },
            { title: "Kafin ku yi rajista", bullets: ["Wane ne ya yi shi?", "Waɗanne bayanai yake tattarawa?", "Nawa ne kuɗinsa bayan gwajin kyauta?"] },
            { title: "Tsara lokaci", bullets: ["Yana da kyau a makonnin aiki da yawa", "Ku duba rubutun idan labarai suka canja"] }
          ],
          tryIt: "Ku rubuta zaɓuɓɓukanku huɗu a takardar kayan aikinku ku shirya takardar bin diddigi mai ginshiƙai: Date, Post, Platform, Views, Engagement, Notes (Kwanan wata, Rubutu, Dandali, Kallo, Mu'amala, Bayanai).",
          youCanNow: "zaɓar ƙananan kayan aiki da ke rufe kowane aikin tallace-tallace.",
          quickCheck: [
            { objective: "O3", q: "Wane kayan aiki ne ya dace da aikin bin diddigi?", options: ["Mai gyara bidiyo", "Samfurin zane", "Insights na kowace manhaja tare da Google Sheet", "Mai yin hoton AI"], answer: 2, why: "Bin diddigi yana amfani da insights na manhaja da takardar lissafi." },
            { objective: "O3", q: "An soke wasanku, kuma rubutun da aka tsara yana cewa \"See you tonight!\" (Sai mun haɗu yau da dare!). Me za ku yi?", options: ["Ku canja ko ku soke rubutun da aka tsara", "Ku bar shi ya wallafu", "Ku goge asusunku", "Ku tsara rubutu na biyu"], answer: 0, why: "Ku duba cewa rubutun da aka tsara har yanzu suna da ma'ana idan labarai suka canja." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Muryarku da prompt ɗinku",
        questions: [
          { objective: "O1", q: "Me yasa za ku rubuta jagorar salon murya?", options: ["Don sa rubutu ya yi tsawo", "Don ɓoye sunanku", "Don AI da masu taimako su rubuta yadda kuke magana", "Manhajoji ne suka tilasta ta"], answer: 2, why: "AI na gama-gari ne sai dai idan kun faɗa masa muryarku." },
          { objective: "O1", q: "Wanne ne ya dace a cikin jagorar murya?", options: ["Kalmomin da ba ku taɓa amfani da su", "Kalmar sirrinku", "Bayanan bankinku", "Ƙididdigar abokin hamayyarku"], answer: 0, why: "Tana tsara yadda abubuwanku suke sauti." },
          { objective: "O2", q: "Me ke sa prompt ya zama mai sake amfani?", options: ["Kasancewarsa gajere sosai", "Rashin umarni", "Rubuta komai da manyan haruffa", "Wuraren cikewa a cikin [baka] da kuke cikawa"], answer: 3, why: "Samfura suna ajiye lokaci duk lokacin da aka yi amfani da su." },
          { objective: "O2", q: "Wani prompt da aka ajiye yana ci gaba da ba da amsoshi masu rauni. Za ku:", options: ["Goge tarin gaba ɗaya", "Inganta prompt ɗin", "Yi amfani da shi duk da haka", "Koma kan sabbin manhajoji biyar"], answer: 1, why: "Prompt suna inganta idan an gyara su." },
          { objective: "O3", q: "Kafin ku yi rajista da sabon kayan aikin AI, ku duba:", options: ["Launin tamburinsa", "Wanda ya yi shi, yadda yake amfani da bayanai da kuɗinsa bayan gwaji", "Yawan talla da yake nunawa", "Babu komai"], answer: 1, why: "Wannan yana kare bayananku da kuɗinku." }
        ]
      }
    },
    {
      name: "Babi na 2: Inganci, haƙƙi da sakamako",
      lessons: [
        {
          objectives: ["O4"],
          title: "Jerin dubawa mai matakai biyar",
          minutes: 5,
          goal: "Duba abubuwan da AI ya yi da jerin dubawa mai matakai biyar kafin wallafawa.",
          text: [
            "AI yana ajiye lokaci, amma ku ne ke da alhakin duk abin da kuka wallafa. Ku sa kowane abu ya bi matakai biyar na dubawa.",
            "1. Gaskiya: kowace hujja, ƙididdiga da iƙirari daidai ne. 2. Murya: yana kama da ku (ku karanta shi da babbar murya). 3. Haƙƙi: ku ne ma'abocin, ko kuna da izinin amfani da, kowane hoto, tambari, guntun bidiyo da waƙa. 4. Bayyanawa: duk wani biya daga kamfani ko kayan kyauta an bayyana shi a sarari. 5. Tsaro: babu bayanan sirri, wurin da kuke a yanzu, ko wani abu da za ku yi nadama a kai.",
            "Ku sa jerin dubawar a saman takardar kayan aikinku. Idan wani yana taimaka muku wallafawa, shi ma yana amfani da ita."
          ],
          steps: ["Gaskiya: ku duba hujjoji da ƙididdiga.", "Murya: ku karanta shi da babbar murya.", "Haƙƙi: ku duba hotuna, tambura, guntun bidiyo da waƙoƙi.", "Bayyanawa: an faɗi alaƙa da kamfani a sarari.", "Tsaro: babu bayanan sirri ko wurin da kuke a yanzu."],
          words: [["Jerin dubawa (review checklist)", "gajeren jerin abubuwan da ake dubawa kafin a wallafa komai."], ["Alhaki", "ku ne za ku amsa game da abin da aka wallafa, ko da AI ne ya rubuta shi."]],
          slides: [
            { title: "Ku ne ke da alhaki", bullets: ["Ko da AI ne ya rubuta shi"] },
            { title: "Matakai biyar na dubawa", bullets: ["1. Gaskiya  2. Murya", "3. Haƙƙi  4. Bayyanawa", "5. Tsaro"] },
            { title: "Ku yi amfani da ita kowane lokaci", bullets: ["A saman takardar kayan aikinku", "Masu taimako ma suna amfani da ita"] }
          ],
          tryIt: "Ku ɗauki rubutun hoto ɗaya da AI ya rubuta ku bi matakai biyar na dubawa. Ku rubuta abin da kuka canja a kowane mataki.",
          youCanNow: "duba abubuwan AI don gaskiya, murya, haƙƙi, bayyanawa da tsaro.",
          quickCheck: [
            { objective: "O4", q: "Me matakin \"Haƙƙi\" yake tambaya?", options: ["Shin rubutun hoton ya yi tsawo sosai?", "Shin yana tashe a yanzu?", "Shin kun wallafa yau?", "Shin ku ne ma'abocin, ko kuna da izini ga, kowane hoto, tambari, guntun bidiyo da waƙa?"], answer: 3, why: "Haƙƙi yana nufin kuna da izinin amfani da komai da ke cikin rubutun." },
            { objective: "O4", q: "Rubutun hoton AI ya ambaci filin da kuke horarwa kowace safiya ƙarfe 6. Wane mataki ne zai kama shi?", options: ["Murya", "Tsaro", "Gaskiya", "Bayyanawa"], answer: 1, why: "Matakin Tsaro yana cire bayanan sirri da wurin da kuke a yanzu ko al'adarku ta yau da kullum." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Haƙƙi, tambura, waƙoƙi da bayyanawa",
          minutes: 5,
          goal: "Gane abin da kuke da izinin amfani da shi a abubuwanku, da rubuta bayyanawa a sarari ga alaƙa da kamfanoni.",
          text: [
            "Haƙƙi: kuna iya amfani da hotuna da bidiyon da ku kuka yi, da waɗanda kuke da izini a kansu. Hotunan ƙungiya da na wasa da wasu suka ɗauka mallakin mai ɗaukar hoton ne ko makarantar, don haka ku nemi izini. Tamburan makaranta, gasa da kamfanoni suna buƙatar izini. Ku yi amfani da waƙoƙi daga tarin waƙoƙi masu lasisi na manhaja.",
            "Hotunan AI: ku yi hankali wajen yin hotunan AI na mutane na gaske, abokan ƙungiya, ko tamburan kamfanoni. Kada ku yi hotunan da za su iya yaudarar mutane su ɗauka cewa wani abu ya faru alhali bai faru ba.",
            "Bayyanawa: FTC (hukumar kasuwanci ta gwamnatin Amurka) ta ce ku bayyana a sarari duk wani biya, kayan kyauta ko wata alaƙa da kamfani, a cikin rubutun da kansa, da kalmomi masu sarari kamar \"Ad\" (talla) ko \"Na gode wa [kamfani] don kayan kyauta\". 'Yan wasa ɗalibai: ku duba dokokin NIL (amfani da suna, hoto da kamannin ku don samun kuɗi) tare da ofishin bin ka'idoji (compliance office) na makarantarku ko ƙungiyar wasanni ta jiharku."
          ],
          steps: ["Ku yi amfani da hotunanku ko waɗanda kuke da izini a kansu.", "Ku nemi izini kafin amfani da tambura.", "Ku yi amfani da waƙoƙi masu lasisi.", "Kada ku yi hotunan AI masu yaudara na mutane na gaske.", "Ku bayyana alaƙa da kamfanoni a sarari a kowane rubutu."],
          words: [["Haƙƙin mallaka (copyright)", "ikon doka da mai shi yake da shi na sarrafa kwafin hotuna, bidiyo, waƙoƙi da rubuce-rubuce."], ["Izini", "amincewa a sarari daga mai shi don amfani da aikinsa."]],
          slides: [
            { title: "Haƙƙi", bullets: ["Hotunanku da bidiyonku", "Hotunan wasu: ku nemi izini", "Tambura suna buƙatar izini; waƙoƙi masu lasisi"] },
            { title: "Hotunan AI", bullets: ["Ku yi hankali da mutane na gaske da tambura", "Babu abin da ke yaudarar mutane"] },
            { title: "Bayyanawa", bullets: ["Biya ko kayan kyauta: ku faɗa a sarari", "A cikin rubutun, \"Ad\" ko saƙon godiya", "Ku duba dokokin NIL"] }
          ],
          sources: [
            { name: "FTC: Disclosures 101 for Social Media Influencers (jagorar bayyanawa ga masu tasiri a kafofin sada zumunta)", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" },
            { name: "NCAA: Name, Image and Likeness (suna, hoto da kamanni)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }
          ],
          tryIt: "Ku duba rubutunku biyar na ƙarshe. Ga kowane hoto, guntun bidiyo da waƙa, ku rubuta wanda ya mallake shi da ko kuna da izini. Ku gyara ko ku cire duk abin da bai ci ba.",
          youCanNow: "amfani da abubuwan da kuke da haƙƙi a kansu kaɗai da bayyana alaƙa da kamfanoni yadda ya kamata.",
          quickCheck: [
            { objective: "O5", q: "Wane ne yawanci ya mallaki hotunan wasa da mai ɗaukar hoton makaranta ya ɗauka?", options: ["Mai ɗaukar hoton ko makarantar", "Ku, domin kuna cikinsu", "Duk wanda ya gan su", "Ɗayan ƙungiyar"], answer: 0, why: "Hotunan da wasu suka ɗauka mallakin mai ɗaukar hoton ne ko makarantar, don haka ku nemi izini." },
            { objective: "O5", q: "Kuna son hoton AI na abokin ƙungiyarku yana riƙe da kofin da bai taɓa ci ba. Me za ku yi?", options: ["Ku yi shi don wasa", "Ku wallafa shi ba tare da rubutun hoto ba", "Ku nemi AI ya sa ya yi kama da na gaske sosai", "Kada ku yi shi; zai iya yaudarar mutane"], answer: 3, why: "Kada ku yi hotunan AI da za su iya yaudarar mutane su ɗauka cewa wani abu ya faru." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Bin diddigin sakamako da inganta kayan aikinku",
          minutes: 5,
          goal: "Bin diddigin sakamako kowane mako da amfani da shi don inganta prompt ɗinku da tsarinku.",
          text: [
            "Sau ɗaya a mako, ku kwafi lambobin rubutunku daga insights na kowace manhaja zuwa takardar bin diddiginku: kallo, mu'amala (likes, sharhi, rabawa, ajiyewa) da duk wani abu da ya shafi burinku, kamar danna hanyar haɗi (link) ko yin rajista.",
            "Ku nemo rubutunku mafi kyau da mafi rauni. Ku liƙa teburin a mataimakin AI ku tambaya: \"Waɗanne irin rubutu ne suka fi yin kyau, kuma me suke da shi iri ɗaya? Ka ba ni ra'ayoyi biyu don mako mai zuwa.\" Ku kwatanta bayaninsa da takardar.",
            "Sannan ku inganta kayan aikinku: ku sabunta prompt da ya yi rubutunku mafi kyau, ku gyara wanda ke bayan mafi rauni, kuma ku ƙara duk wani sabon darasi a jagorar muryarku."
          ],
          steps: ["Ku kwafi lambobin mako zuwa takardarku.", "Ku nemo rubutu mafi kyau da mafi rauni.", "Ku tambayi AI abin da rubutu mafi kyau suke da shi iri ɗaya.", "Ku kwatanta amsarsa da takardar.", "Ku sabunta prompt ɗinku da jagorar muryarku."],
          words: [["Mu'amala (engagement)", "yadda mutane suke hulɗa: likes, sharhi, rabawa, ajiyewa."], ["Ingantawa a hankali (iterate)", "inganta wani abu mataki-mataki bisa sakamako."]],
          slides: [
            { title: "Lambobin mako", bullets: ["Kallo da mu'amala", "Lambobin buri: danna link, yin rajista"] },
            { title: "Ku koya daga gare su", bullets: ["Rubutu mafi kyau da mafi rauni", "AI yana gano abin da rubutu mafi kyau suke da shi", "Ku kwatanta da takardarku"] },
            { title: "Ku inganta kayan aikinku", bullets: ["Ku sabunta prompt masu nasara", "Ku gyara masu rauni", "Ku ƙara darussa a jagorar muryarku"] }
          ],
          tryIt: "Aikin ƙarshe: ku kammala takardar kayan aikinku (jagorar murya, prompt goma, kayan aiki huɗu, jerin dubawa mai matakai biyar), sannan ku yi rubutu ɗaya da ita daga farko har ƙarshe ku rubuta lambobinsa a takardarku.",
          youCanNow: "bin diddigin sakamako da ci gaba da inganta kayan aikinku na AI na tallace-tallace.",
          quickCheck: [
            { objective: "O6", q: "Sau nawa ya kamata ku kwafi lambobinku zuwa takardar bin diddiginku?", options: ["Sau ɗaya a shekara", "Sau ɗaya a mako", "Ba a taɓa ba", "Kowace awa"], answer: 1, why: "Ku rubuta lambobi kowane mako." },
            { objective: "O6", q: "Rubutunku mafi kyau ya fito daga wani prompt da aka ajiye. Me za ku yi?", options: ["Ku goge prompt ɗin", "Ku daina wallafa irin wannan", "Ku sabunta ku ci gaba da inganta wannan prompt", "Ku canja dukkan kayan aikinku"], answer: 2, why: "Ku sabunta prompt da ya yi rubutunku mafi kyau, ku gyara wanda ke bayan mafi rauni." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Inganci, haƙƙi da sakamako",
        questions: [
          { objective: "O4", q: "Wane ne ke da alhakin rubutun da AI ya rubuta da kuka wallafa?", options: ["Kamfanin AI", "Mabiyanku", "Babu kowa", "Ku"], answer: 3, why: "Ku ne za ku amsa game da abin da kuka wallafa." },
          { objective: "O4", q: "Wanne ne ɗaya daga cikin matakai biyar na dubawa?", options: ["Haƙƙi", "Girman haruffa", "Yawan emoji", "Tsawon rubutu"], answer: 0, why: "Dole ne ku mallaki ko ku sami izini ga duk abin da aka yi amfani da shi." },
          { objective: "O5", q: "Mai ɗaukar hoton ƙungiya ya ɗauki hotonku mai kyau. Kafin ku wallafa shi, za ku:", options: ["Yanke alamar ruwa (watermark) ɗinsa", "Wallafa shi kamar naku", "Nemi izini", "Gyara shi da AI"], answer: 2, why: "Mai ɗaukar hoton ko makarantar ne zai iya mallakarsa." },
          { objective: "O5", q: "Yin hoton AI da ke nuna kamar abokin ƙungiya ya yi abin da bai yi ba:", options: ["Ba laifi idan yana ba da dariya", "Dole ne", "Tallace-tallace ne mai kyau", "Yaudara ne kuma a guje masa"], answer: 3, why: "Kada ku yi abubuwan da ke yaudarar mutane." },
          { objective: "O6", q: "AI ya ce bidiyonku ne suka fi yin kyau. Za ku:", options: ["Amince da shi gaba ɗaya", "Kwatanta bayaninsa da takardarku", "Goge takardarku", "Daina wallafa bidiyo"], answer: 1, why: "AI yana iya karanta bayanai ba daidai ba." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Kayan Aikin AI don Tallace-tallace da Gina Suna",
    questions: [
      { objective: "O1", q: "Kayan aikin tallace-tallace shi ne:", options: ["Manhajoji masu yawa gwargwadon iko", "Jakar kyamara", "Ƙananan kayan aiki tare da jagora da prompt da aka ajiye", "Kamfanin talla da ake biya"], answer: 2, why: "Ƙarami kuma mai maimaituwa ya fi manhajoji da yawa." },
      { objective: "O1", q: "Salon murya (brand voice) shi ne:", options: ["Hali da salon yadda kuke rubutu", "Muryarku ta waƙa", "Ƙarfin muryarku", "Tamburinku"], answer: 0, why: "Shi ne yadda kuke sauti a rubutu." },
      { objective: "O1", q: "Ta yaya AI zai taimaka muku gano muryarku?", options: ["Ya bayyana muryar da ke cikin rubutun hotonku na gaske", "Ya ƙirƙiri sabon hali", "Ya kwaikwayi wani shahararre", "Ya zaɓi muku ƙa'idodinku"], answer: 0, why: "Rubutunku na gaske suna nuna muryarku." },
      { objective: "O1", q: "Kalmomin murya nawa ya kamata ku zaɓa?", options: ["Ashirin", "Babu", "Uku", "Ɗari"], answer: 2, why: "Uku suna da sauƙin tunawa da amfani." },
      { objective: "O2", q: "Prompt samfuri yana da:", options: ["Babu umarni", "Wuraren cikewa da kuke cikawa", "Kalmar sirrinku", "Emoji kawai"], answer: 1, why: "Wuraren cikewa suna sa ya zama mai sake amfani." },
      { objective: "O2", q: "A ina ya kamata ku ajiye tarin prompt ɗinku?", options: ["A kanku", "A warwatse a cikin hirarraki", "Babu inda", "Takarda ɗaya kamar Google Docs ko manhajar bayanai"], answer: 3, why: "Wuri ɗaya yana da sauƙin amfani da sabuntawa." },
      { objective: "O3", q: "Wane kayan aiki ne ya dace da aikin zane?", options: ["Agogon gudu", "Takardar lissafi kawai", "Canva", "Na'urar lissafi"], answer: 2, why: "Canva yana da samfuran zane." },
      { objective: "O3", q: "Wanne ne ya dace da aikin bidiyo?", options: ["Manhajar rubutu", "Kalanda", "Ma'aunin zafi", "CapCut ko masu gyara a cikin manhaja"], answer: 3, why: "Suna gyara bidiyo." },
      { objective: "O3", q: "Tsara lokacin wallafa rubutu yana taimakawa:", options: ["A makonnin da ake da aiki sosai", "Ba a taɓa ba", "Da dare kawai", "Ga ƙwararru kawai"], answer: 0, why: "Rubutu suna fita yayin da kuke horarwa ko karatu." },
      { objective: "O3", q: "Rubutun da aka tsara zai iya buƙatar canji idan:", options: ["Ba a taɓa ba", "Labarai ko sakamako suka canja", "Rana ta fito", "Kun sami like ɗaya"], answer: 1, why: "Tsofaffin rubutu suna iya zama ba daidai ba bayan abubuwa sun canja." },
      { objective: "O4", q: "Matakin \"Gaskiya\" yana nufin:", options: ["Yana da daɗin ji", "Yana da tsawo", "Kowace hujja, ƙididdiga da iƙirari daidai ne", "Yana da waƙa"], answer: 2, why: "Daidaito yana kare sunanku." },
      { objective: "O4", q: "Hanya mafi sauƙi ta matakin \"Murya\" ita ce:", options: ["Karanta shi da babbar murya", "Ƙirga kalmomi", "Ƙara hashtag", "Tambayar baƙo"], answer: 0, why: "Za ku ji ko yana kama da ku." },
      { objective: "O4", q: "Matakin \"Tsaro\" yana cire:", options: ["Wasanku", "Muhimman lokutanku a wasa", "Saƙonninku na godiya", "Bayanan sirri da wurin da kuke a yanzu"], answer: 3, why: "Tsaro shi ne farko." },
      { objective: "O4", q: "Masu taimako da ke wallafawa a madadinku ya kamata su:", options: ["Tsallake dubawa", "Yi amfani da jerin dubawa iri ɗaya", "Wallafa komai", "Yi amfani da tasu muryar"], answer: 1, why: "Daidaito yana kare sunanku." },
      { objective: "O5", q: "Haƙƙin mallaka (copyright) shi ne:", options: ["Wata ƙa'idar wasanni", "Ikon mai shi na sarrafa kwafin aikinsa", "Wani nau'in hashtag", "Lasisi kyauta ga kowa"], answer: 1, why: "Masu aiki ne ke sarrafa aikinsu." },
      { objective: "O5", q: "Wace waƙa ce ta fi aminci a bidiyonku?", options: ["Kowace waƙa ta rediyo", "Waƙar fim", "Waƙar da aboki ya sauke", "Tarin waƙoƙi masu lasisi na manhajar"], answer: 3, why: "Waƙoƙi masu lasisi suna hana a cire bidiyonku." },
      { objective: "O5", q: "Kayan kyauta daga kamfani dole ne a:", options: ["Bayyana shi a sarari a cikin rubutun", "Ɓoye shi", "Sa shi a bayanin kai kawai", "Yi watsi da shi"], answer: 0, why: "FTC tana ɗaukar kayan kyauta a matsayin alaƙa." },
      { objective: "O5", q: "'Yan wasa ɗalibai ya kamata su duba dokokin NIL tare da:", options: ["Wani masoyin wasa", "Abokin hamayya", "Ofishin bin ka'idoji ko ƙungiyar wasanni ta jiharsu", "AI kawai"], answer: 2, why: "Dokoki sun bambanta kuma suna canjawa." },
      { objective: "O6", q: "Mu'amala (engagement) ta haɗa da:", options: ["Tsawonku", "Makin karatunku (GPA)", "Yanayi", "Likes, sharhi, rabawa da ajiyewa"], answer: 3, why: "Mu'amala ita ce hulɗar mutane." },
      { objective: "O6", q: "Ingantawa a hankali (iterate) yana nufin:", options: ["Sake farawa kowace rana", "Inganta mataki-mataki bisa sakamako", "Ba a taɓa canjawa ba", "Kwaikwayon wasu"], answer: 1, why: "Ƙananan ingantawa suna taruwa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      1,
      4,
      6,
      10,
      12,
      15,
      16,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Jagorar salon murya",
        objective: "O1",
        notYet: "Babu kalmomin murya, kalmomin da ba a taɓa amfani da su, ko rubutun misali.",
        meets: "Shafi ɗaya mai kalmomi uku na murya, kalmomin da ake amfani da su da waɗanda ba a taɓa amfani da su, batutuwa, al'adu da rubutu biyu na misali.",
        exceeds: "An gina ta daga rubutun hoto na gaske kuma an gwada ta ta hanyar sa AI ya rubuta rubutu da aboki ya ce yana kama da mai koyo."
      },
      {
        name: "Tarin prompt",
        objective: "O2",
        notYet: "Prompt ƙasa da goma, ko prompt da ba su da wuraren cikewa ko jagorar murya.",
        meets: "Prompt guda goma masu [wuraren cikewa], kowanne yana amfani da jagorar murya, an ajiye su a takarda ɗaya.",
        exceeds: "Aƙalla prompt ɗaya an inganta shi bayan amsa mai rauni, tare da bayanin abin da aka canja."
      },
      {
        name: "Zaɓin kayan aiki",
        objective: "O3",
        notYet: "Wani aiki ba shi da kayan aiki, ko ba a duba kayan aikin ba.",
        meets: "Kayan aiki ɗaya kowanne don rubutu, zane, bidiyo da bin diddigi, an duba wanda ya yi shi, bayanai da kuɗi.",
        exceeds: "Ya haɗa da bayanin lokacin da ake tsara lokacin wallafawa da yadda ake duba rubutun da aka tsara."
      },
      {
        name: "Jerin dubawa",
        objective: "O4",
        notYet: "Babu jerin dubawa ko bai cika ba.",
        meets: "Matakai biyar na dubawa suna saman takardar kayan aiki.",
        exceeds: "Masu taimako da ke wallafawa a madadin mai koyo sun amince su yi amfani da shi."
      },
      {
        name: "Rubutu ɗaya daga farko har ƙarshe",
        objective: "O5",
        notYet: "Rubutun bai ci wani mataki ba, kamar haƙƙi ko bayyanawa.",
        meets: "Rubutu ɗaya da aka yi da kayan aikin da ya ci dukkan matakai biyar, da kafofin da aka ba da izini, kuma duk wata bayyanawa tana cikin rubutun.",
        exceeds: "An rubuta lambobinsa a takardar bin diddigi kuma an yi amfani da su don sabunta prompt."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kayan aikinsu kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric",
      "Masu koyo da har yanzu suke amfani da tarin prompt ɗinsu da jerin dubawarsu bayan kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce suna ajiye lokaci wajen ƙirƙirar abubuwa kowane mako",
      "Masu koyo da suka ce sun kama matsalar haƙƙi, bayyanawa ko tsaro kafin su wallafa"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Mataimakin AI kyauta (ChatGPT, Microsoft Copilot ko Google Gemini)",
      "Canva kyauta da mai gyara bidiyo kyauta (CapCut ko masu gyara a cikin manhaja)",
      "Asusun Google kyauta don Google Docs da Sheets",
      "Rubutun hotonku guda biyar na baya",
      "Kusan minti 60"
    ],
    facilitatorNotes: [
      "Ku sa masu koyo su zo da rubutun hoto guda biyar na gaske don a gina jagorar murya daga rubutunsu.",
      "Ku raba tarin prompt na farawa ɗaya ga ƙungiyar, sannan kowane mai koyo ya daidaita shi da muryarsa.",
      "Ku bi jerin dubawa mai matakai biyar tare da ma'aikatan ƙungiya da ke wallafawa a madadin 'yan wasa don kowa ya yi amfani da dubawa iri ɗaya.",
      "Ku tattauna hotunan AI na mutane na gaske a hankali; kada a taɓa yin hotuna masu yaudara na abokan ƙungiya ko abokan hamayya.",
      "Ku tura tambayoyin NIL zuwa ofishin bin ka'idoji ko ƙungiyar wasanni ta jiha kafin kowane rubutu da kamfani ya ɗauki nauyi."
    ]
  }
};

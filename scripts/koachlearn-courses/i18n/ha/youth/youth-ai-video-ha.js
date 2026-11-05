"use strict";

// Koach Learn course, Hausa (ha) translation of youth/youth-ai-video.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "youth-ai-video-ha",
  lang: "ha",
  translationOf: "youth-ai-video",
  category: "Youth",
  name: "Ƙirƙirar Bidiyo da Taimakon AI",
  skills: "Rubuta gajeren rubutun bidiyo (script) da AI, Yin storyboard, Ɗaukar bidiyo da waya, Gyara bidiyo a manhaja kyauta, Saka rubutun ƙasa (captions) da kiɗa yadda ya dace, Rabawa lafiya",
  outcome: "tsarawa, ɗauka da gyara bidiyo na daƙiƙa 30 zuwa 60 (kamar tallar ƙungiya ko taron makaranta) ta amfani da AI don taimakawa da rubutun bidiyo, storyboard da rubutun ƙasa, tare da izinin duk wanda ke cikin bidiyon, kiɗan da aka ba ku damar amfani da shi, da alama ta gaskiya a kan duk abin da AI ya yi.",
  about: [
    "Wannan kwas ɗin na matasa ne da ke son yin bidiyo mafi kyau don ayyukan makaranta, ƙungiyoyi, ƙungiyar wasa, ƙungiyar kiɗa ko tasharsu ta kansu. Waya da manhajar gyara bidiyo kyauta sun isa.",
    "Za ku yi amfani da mataimakin AI kamar ChatGPT, Microsoft Copilot ko Google Gemini don tunanin dabaru da rubuta gajeren rubutun bidiyo, ku mayar da shi storyboard, ku ɗauka da haske da sauti masu kyau, ku gyara shi a manhaja kyauta kamar CapCut ko Canva, ku saka rubutun ƙasa, sannan ku raba shi lafiya.",
    "Manhajojin bidiyo da kayan AI suna da mafi ƙarancin shekaru, wasu kuma suna buƙatar asusu, don haka ku karanta sharuɗɗan kowane kayan aiki, ku bi dokokin makarantarku game da AI da ɗaukar bidiyo, kuma ku sa iyaye ko mai kula da ku idan za ku buɗe asusu. Kowane darasi yana ƙarewa da aikin \"Gwada yanzu\", akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku yi bidiyo na daƙiƙa 30 zuwa 60 da ke tallata wata ƙungiya, ƙungiyar wasa, taro ko wani abu da kuka damu da shi a makaranta. Ku yi amfani da AI don taimakawa wajen rubuta rubutun bidiyo da storyboard, ku ɗauki aƙalla hotuna (shots) huɗu da izinin duk wanda ke cikin bidiyon, ku gyara shi a manhaja kyauta, ku saka rubutun ƙasa da kiɗan da aka ba ku damar amfani da shi, ku sa alama a kan duk abin da AI ya yi, sannan ku fitar da shi (export).",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa da ke son yin bidiyo mafi kyau don ayyukan makaranta, ƙungiyoyi, ƙungiyar wasa, ƙungiyar kiɗa ko tasharsu ta kansu.",
    startingPoint: "Suna ɗauka da kallon gajerun bidiyo a wayoyinsu kowace rana. Kaɗan ne ke tsarawa da rubutun bidiyo ko storyboard, ke sarrafa haske da sauti, ke gyara bidiyo sosai, ko suka san dokokin izinin ɗaukar mutane, haƙƙin mallakar kiɗa da sa alama a kan abin da AI ya yi.",
    gap: "Bidiyon da ba a tsara ba yana rasa masu kallo cikin daƙiƙoƙi, kuma bidiyon da aka yi ba tare da kulawa ba yana iya amfani da kiɗa ba tare da izini ba, ya ɗauki mutanen da suka ce a'a, ko ya yaɗa bidiyon AI na bogi da ke cutar da mutane. Matasa suna buƙatar tsarawa, ɗauka da gyara gajeren bidiyo da kyau, yayin da suke amfani da AI da gaskiya kuma suna girmama wasu.",
    constraints: [
      "Iyakar shekaru da dokokin asusu na manhajojin bidiyo da AI; iyaye ko mai kula suna cikin buɗe asusu",
      "Dokokin makaranta game da AI da ɗaukar ɗalibai a bidiyo; wasu ɗalibai ba za a ɗauke su ko a saka su a intanet ba",
      "Na'urori: waya da manhajar gyara bidiyo kyauta kamar CapCut ko Canva",
      "Haƙƙin mallaka da yarda: kiɗa da bidiyon da aka yarda da su kaɗai; izinin duk wanda ke cikin bidiyo",
      "Sirri wajen rabawa: babu cikakken suna, adireshin makaranta ko jadawali a saƙonnin jama'a"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna tunani game da bidiyon da kuke kallo da wanda kuke yi", action: "bayyana yadda AI ke taimakawa da bidiyo, mene ne deepfake, da dokokin da za ku bi", standard: "kuna samun aƙalla 3 cikin 4 daidai" },
    { id: "O2", condition: "Idan aka ba ku maudu'i, masu kallo da tsawon bidiyo", action: "rubuta daftarin rubutun bidiyo da AI mai jan hankali a farko (hook), gajerun sassa da kira zuwa aiki, da mayar da shi storyboard", standard: "an sake rubuta shi da salon maganarku, an tabbatar da bayanai, kuma jimillar lokaci ta dace da tsawon" },
    { id: "O3", condition: "Ta amfani da waya", action: "ɗaukar hotunan bidiyo da ba sa girgiza, masu haske mai kyau da sauti a sarari", standard: "da izinin duk wanda ke cikin bidiyo, kuma ana bin dokokin makaranta na ɗaukar bidiyo" },
    { id: "O4", condition: "Ta amfani da manhajar gyara bidiyo kyauta", action: "shigo da gutsuttsuran bidiyo, yanke su, jera su, da saka taken bidiyo da kira zuwa aiki a matsayin rubutu", standard: "ana bin storyboard ba tare da lokacin banza ba" },
    { id: "O5", condition: "Kafin bidiyonku ya kammala", action: "saka rubutun ƙasa daidai, kiɗan da aka ba ku damar amfani da shi, da alama a kan duk abin da AI ya yi", standard: "an duba kowane rubutun ƙasa, kuma babu fuska ko muryar wani mutum na gaske da AI ya yi ba tare da izini ba" },
    { id: "O6", condition: "Idan an gama gyaran", action: "samun ra'ayoyin wasu, fitar da bidiyon da raba shi lafiya", standard: "ana kiyaye bayanan sirri, kuma ana faɗin yadda aka yi amfani da AI a aikin makaranta" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsarawa da ɗaukar bidiyo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Yadda AI ke taimakawa da bidiyo, da dokokin da za ku bi",
          minutes: 4,
          goal: "Ambaci hanyoyin da AI ke taimakawa da bidiyo da dokokin da za ku bi.",
          text: [
            "Ana ganin AI ko'ina wajen yin bidiyo: mataimaka da ke taimakawa wajen tunanin dabaru da rubuta rubutun bidiyo, manhajojin gyara da ke yin rubutun ƙasa da kansu ko cire hayaniyar baya, da kayan aiki da ke ƙirƙirar hotuna ko bidiyo daga umarnin rubutu (prompt).",
            "Ana iya kuma amfani da AI ta hanyar da ba ta dace ba. Deepfake bidiyo ne ko murya ta bogi da ke nuna kamar wani mutum na gaske ya faɗi ko ya yi abin da bai yi ba. Yin deepfake na abokan aji, malamai ko shahararrun mutane yana iya cutar da mutane, ya karya dokokin makaranta, kuma a wasu wurare ya karya doka.",
            "Dokokinku: ku nemi izinin duk wanda kuke ɗauka a bidiyo, ku yi amfani da kiɗa da bidiyon da aka ba ku damar amfani da su kaɗai, ku sa alama a kan duk abin da AI ya yi, ku duba mafi ƙarancin shekarun kowace manhaja, kuma ku bi dokokin makarantarku."
          ],
          words: [["Rubutun bidiyo (script)", "kalmomi da ayyukan da aka tsara don bidiyo."], ["Deepfake", "bidiyo ko murya ta bogi da ke nuna kamar wani mutum na gaske ya faɗi ko ya yi abin da bai yi ba."], ["Abin da AI ya yi (AI-generated)", "abin da kayan AI ya ƙirƙira, maimakon mutum ya ɗauka ko ya zana."]],
          slides: [
            { title: "AI wajen yin bidiyo", bullets: ["Tunanin dabaru da rubutun bidiyo", "Rubutun ƙasa na kai tsaye da cire hayaniya", "Hotuna ko bidiyo daga prompt"] },
            { title: "Amfani mara kyau: deepfake", bullets: ["Nuna mutum na gaske yana faɗi ko yin abin da bai yi ba", "Yana cutar da mutane kuma yana karya dokokin makaranta", "Kada ku taɓa yin sa"] },
            { title: "Dokokinku", bullets: ["Izinin duk wanda ke cikin bidiyo", "Kiɗa da bidiyon da aka ba ku dama", "Alama a kan abin da AI ya yi", "Ku duba shekarun manhaja da dokokin makaranta"] }
          ],
          tryIt: "Ku zaɓi maudu'in bidiyonku na ƙarshe: wata ƙungiya, ƙungiyar wasa, taro ko wani abu a makarantarku ko a unguwarku. Ku rubuta jimla ɗaya game da wanda bidiyon yake domin shi, da abin da kuke so su yi bayan sun kalla.",
          youCanNow: "ambaci hanyoyin da AI ke taimakawa da bidiyo, da bayyana dokokin amfani da shi cikin adalci.",
          quickCheck: [
            { objective: "O1", q: "Wanne a cikin waɗannan hanya ce mai amfani da ake amfani da AI a bidiyo?", options: ["Yin bidiyon bogi na malami", "Cire hayaniyar baya daga rikodi", "Kwafar fuskar wani ba tare da tambaya ba", "Satar waƙa"], answer: 1, why: "AI yana taimakawa da rubutun bidiyo, rubutun ƙasa da cire hayaniya; bidiyon bogi na mutane na gaske amfani ne mara kyau." },
            { objective: "O1", q: "Aboki yana son yin deepfake mai ban dariya na shugaban makaranta don bidiyon ƙungiyarku. Me za ku yi?", options: ["Ku yi shi amma ku nuna wa abokai kawai", "Ku yi shi da fuska mara haske", "Ku saka shi a intanet ba tare da alama ba", "Ku ce a'a, domin yana iya cutar da mutane kuma ya karya dokoki"], answer: 3, why: "Deepfake na mutane na gaske yana iya cutar da su, ya karya dokokin makaranta, kuma a wasu wurare ya karya doka." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rubuta rubutun bidiyo da storyboard da AI",
          minutes: 5,
          goal: "Yi amfani da AI don rubuta daftarin gajeren rubutun bidiyo da mayar da shi storyboard hoto bayan hoto.",
          text: [
            "Gajerun bidiyo suna buƙatar abin jan hankali (hook) a daƙiƙa 3 na farko, tsakiya mai sarari, da ƙarshe da ke faɗa wa mutane abin da za su yi, kamar \"Ku zo ku shiga ranar Alhamis a Ɗaki na 12\".",
            "Ku nemi AI ya rubuta daftari: \"Rubuta rubutun bidiyo na daƙiƙa 45 da ke gayyatar sababbin ɗalibai su shiga ƙungiyarmu ta robot. Saka abin jan hankali, gajerun sassa 3 da kira zuwa aiki. Yi amfani da kalmomin matasa na yau da kullum.\" Sannan ku sake rubuta shi don ya yi kama da ku da ƙungiyarku.",
            "Storyboard shi ne tsarin kowane hoto (shot): abin da muke gani, abin da muke ji, da tsawon lokacinsa. Ku nemi AI ya mayar da rubutun bidiyonku tebur mai waɗannan ginshiƙai. Kuna iya kuma zana mutane da layuka masu sauƙi."
          ],
          steps: ["Ku faɗa wa AI maudu'i, masu kallo, tsawon bidiyo da salon magana.", "Ku nemi abin jan hankali, gajerun sassa 3 da kira zuwa aiki.", "Ku sake rubuta shi da salon maganarku kuma ku tabbatar da bayanai (ranaku, ɗaki, lokaci).", "Ku nemi AI ya mayar da shi tebur na storyboard: hoto, abin da muke gani, abin da muke ji, daƙiƙoƙi.", "Ku tabbata jimillar lokaci ta dace da tsawon bidiyonku."],
          words: [["Abin jan hankali (hook)", "'yan daƙiƙoƙin farko da ke jan hankalin mai kallo."], ["Kira zuwa aiki (call to action)", "layin da ke faɗa wa masu kallo abin da za su yi a gaba."], ["Storyboard", "tsarin bidiyo hoto bayan hoto."], ["Hoto (shot)", "wani sashe guda na ɗaukar bidiyo ba tare da tsayawa ba."]],
          slides: [
            { title: "Tsarin gajeren bidiyo", bullets: ["Abin jan hankali a daƙiƙa 3 na farko", "Tsakiya mai sarari", "Kira zuwa aiki a ƙarshe"] },
            { title: "Ku nemi AI ya rubuta daftari", bullets: ["Maudu'i, masu kallo, tsawo, salon magana", "Sannan ku sake rubuta shi da salon maganarku", "Ku tabbatar da ranaku, lokaci da wurare"] },
            { title: "Storyboard", bullets: ["Lambar hoto", "Abin da muke gani da ji", "Daƙiƙoƙi nawa"] }
          ],
          tryIt: "Ku yi amfani da mataimakin AI don rubuta daftarin rubutun bidiyo kan maudu'inku, ku sake rubuta shi da salon maganarku, sannan ku mayar da shi storyboard mai hotuna 4 zuwa 6 da ya dace da lokacinku.",
          youCanNow: "rubuta gajeren rubutun bidiyo da storyboard da taimakon AI.",
          quickCheck: [
            { objective: "O2", q: "Mene ne storyboard?", options: ["Wurin sharhi na bidiyon", "Fayil ɗin ƙarshe da aka fitar", "Tsarin kowane hoto: abin da muke gani, abin da muke ji da tsawon lokacinsa", "Jerin kiɗa"], answer: 2, why: "Storyboard yana tsara kowane hoto kafin ku ɗauki bidiyo." },
            { objective: "O2", q: "Rubutun bidiyo na AI ya ce ƙungiyarku tana taro a Ɗaki na 14, amma ba ku tabbata ba. Me za ku yi?", options: ["Ku tabbatar da ɗakin, ranar da lokacin da kanku kafin ɗaukar bidiyo", "Ku bar shi; AI yawanci yana daidai", "Ku cire ɗakin daga bidiyon", "Ku tambayi AI ko ya tabbata"], answer: 0, why: "AI yana iya yin kuskure a ranaku, lokaci ko wurare, don haka ku tabbatar da bayanai." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ɗaukar bidiyo da waya",
          minutes: 5,
          goal: "Ɗauki hotunan bidiyo da ba sa girgiza, masu haske mai kyau da sauti a sarari, da izini.",
          text: [
            "Haske: ku fuskanci haske, kamar taga, ta yadda haske zai kasance a fuskar mutumin, ba a bayansa ba. Kada ya girgiza: ku riƙe wayar da hannu biyu, ku jingina da wani abu, ko ku yi amfani da abin tsayar da waya. Ku kwantar da wayar a gefe ko ku bar ta a tsaye don ta dace da inda za ku saka bidiyon.",
            "Sauti yana da muhimmanci fiye da yadda mutane ke tunani. Ku ɗauka kusa da mai magana a wuri mai shiru, nesa da fanka da hanyoyin wucewa. Ku yi rikodin gwaji na daƙiƙa 3 ku saurara kafin ainihin ɗaukar.",
            "Ku tambayi duk wanda kuke ɗauka ko ya yarda, kuma ku faɗa musu inda za a nuna bidiyon. Wasu ɗalibai ba za a ɗauke su ko a saka su a intanet ba bisa dokokin makaranta, don haka ku tambayi malaminku ko mai ba ƙungiyarku shawara. Kada ku ɗauki mutane a wurare na sirri, ko duk wanda ya ce a'a."
          ],
          steps: ["Ku sa haske ya fuskanci mutumin.", "Ku riƙe wayar da hannu biyu ko da abin tsayar da waya.", "Ku zaɓi a gefe ko a tsaye don ta dace da inda za ku saka.", "Ku yi gajeren gwajin sauti ku saurara.", "Ku nemi izinin duk wanda ke cikin bidiyo, kuma ku bi dokokin makaranta na ɗaukar bidiyo."],
          words: [["Ɗauka (take)", "ƙoƙari ɗaya na ɗaukar wani hoto."], ["Tsarin hoto (framing)", "abin da ke cikin gefunan hoton."]],
          slides: [
            { title: "Haske da riƙewa sosai", bullets: ["Ku fuskanci haske", "Hannu biyu ko abin tsayarwa", "A gefe ko a tsaye don ya dace da dandali"] },
            { title: "Sauti", bullets: ["Ku matsa kusa da mai magana", "Wuri mai shiru, babu fanka ko hanyar wucewa", "Ku yi gwaji na daƙiƙa 3"] },
            { title: "Izini", bullets: ["Ku tambayi duk wanda ke cikin bidiyo", "Ku faɗi inda za a nuna shi", "Ku bi dokokin makaranta na ɗaukar bidiyo"] }
          ],
          tryIt: "Ku ɗauki hotuna biyu na farko daga storyboard ɗinku. Ku fara yin gwajin sauti, ku nemi izinin duk wanda ke cikin bidiyo, kuma ku ɗauki kowane hoto aƙalla sau biyu.",
          youCanNow: "ɗaukar hotunan bidiyo da ba sa girgiza, masu haske mai kyau da sauti a sarari, da izinin mutanen da ke cikin bidiyo.",
          quickCheck: [
            { objective: "O3", q: "Me yasa za ku yi gajeren gwajin sauti kafin ainihin ɗaukar?", options: ["Don a ƙare batir", "Don bidiyon ya yi tsawo", "Don gwada haske", "Don ku ji ko sautin yana a sarari kafin ku ɗauka"], answer: 3, why: "Gwaji na daƙiƙa 3 yana ba ku damar gane hayaniya ko sauti mara ƙarfi kafin ainihin ɗaukar." },
            { objective: "O3", q: "Mai ba ƙungiyarku shawara ya ce ba za a ɗauki wani ɗalibi ba bisa dokokin makaranta. Me za ku yi?", options: ["Ku ɗauke shi ta baya", "Ku ɗauke shi sannan ku ɓoye fuskarsa daga baya", "Ku tsara hotunan ta yadda ɗalibin ba zai shiga bidiyon ba", "Ku yi watsi da dokar"], answer: 2, why: "Ku bi dokokin makaranta na ɗaukar bidiyo, kuma kada ku ɗauki duk wanda ba a yarda a ɗauka ba ko wanda ba ya so." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsarawa da ɗaukar bidiyo",
        questions: [
          { objective: "O1", q: "Mene ne deepfake?", options: ["Bidiyo ko murya ta bogi da ke nuna kamar wani mutum na gaske ya faɗi ko ya yi abin da bai yi ba", "Wani nau'in kyamara", "Manhajar gyara bidiyo kyauta", "Ƙarshen bidiyo"], answer: 0, why: "Deepfake yana ɗora kalmomi ko ayyukan da ba su faru ba a kan mutane na gaske." },
          { objective: "O2", q: "Me ya kamata daƙiƙa 3 na farko na gajeren bidiyo su yi?", options: ["Nuna sunayen waɗanda suka yi bidiyon", "Yin shiru", "Jan hankali da hook", "Nuna allo marar komai"], answer: 2, why: "Abin jan hankali yana sa masu kallo su ci gaba da kallo." },
          { objective: "O2", q: "AI ya rubuta daftarin rubutun bidiyonku. Me za ku yi a gaba?", options: ["Ku saka shi a intanet ba tare da canji ba", "Ku sake rubuta shi da salon maganarku kuma ku tabbatar da bayanai", "Ku goge shi", "Ku ƙara adireshin gidanku"], answer: 1, why: "Kuna mayar da shi naku, kuma kuna tabbatar da ranaku da wurare daidai ne." },
          { objective: "O3", q: "A ina ya kamata haske ya kasance idan kuna ɗaukar mutum?", options: ["A bayansa", "Babu inda", "A ƙasa kawai", "A fuskarsa, kamar yana fuskantar taga"], answer: 3, why: "Haske a fuska yana sa a gan shi da sauƙi." },
          { objective: "O3", q: "Abokin aji ya ce ba ya son shiga bidiyonku. Me za ku yi?", options: ["Ku ɗauke shi duk da haka", "Ku ɗauke shi daga nesa", "Kada ku ɗauke shi", "Ku ɓoye fuskarsa daga baya ba tare da tambaya ba"], answer: 2, why: "Ku ɗauki mutanen da suka yarda kaɗai." }
        ]
      }
    },
    {
      name: "Babi na 2: Gyara da rabawa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Gyara bidiyo a manhaja kyauta",
          minutes: 6,
          goal: "Shigo da gutsuttsuran bidiyo, yanke su, jera su, da saka rubutu.",
          text: [
            "Manhajojin gyara kyauta kamar CapCut da Canva suna aiki a waya da kuma a burauzar intanet. Menu-menu suna canjawa sau da yawa, don haka ku nemi waɗannan ayyuka: fara sabon aiki (project), shigo da ko ɗora gutsuttsuran bidiyonku (import), yanke farko da ƙarshe (trim), raba gutsure biyu (split), jan gutsuttsura zuwa tsari, da saka rubutu.",
            "Ku bi storyboard ɗinku. Ku yanke kowane hoto sosai: ku fara daidai kafin abin ya faru, ku tsaya daidai bayan ya ƙare. Lokacin banza yana sa mutane su wuce zuwa wani bidiyo.",
            "Ku saka take a farko da kira zuwa aiki a matsayin rubutu a ƙarshe. Ku sa rubutun ya yi girma, ya yi gajarta, kuma ya daɗe a allo har a iya karanta shi sau biyu."
          ],
          steps: ["Ku fara sabon aiki ku shigo da gutsuttsuran bidiyonku.", "Ku jera gutsuttsuran bisa tsarin storyboard.", "Ku yanke farko da ƙarshen kowane gutsure.", "Ku saka take da kira zuwa aiki a matsayin rubutu.", "Ku kalli bidiyon gaba ɗaya ku gyara duk wani wuri mai jinkiri."],
          words: [["Shigo da (import)", "kawo gutsuttsuran bidiyonku cikin manhajar gyara."], ["Yanke (trim)", "cire farko ko ƙarshen gutsuren bidiyo."], ["Timeline", "layin da ke cikin manhajar gyara inda gutsuttsura suke a jere."]],
          slides: [
            { title: "Manhajojin gyara kyauta", bullets: ["CapCut ko Canva a waya ko intanet", "Ku nemi: import, trim, split, rubutu"] },
            { title: "Ku yanke sosai", bullets: ["Ku fara daidai kafin abin ya faru", "Ku tsaya daidai bayan ya ƙare", "Babu lokacin banza"] },
            { title: "Rubutu a allo", bullets: ["Take a farko", "Kira zuwa aiki a ƙarshe", "Babba, gajere, mai sauƙin karantawa"] }
          ],
          tryIt: "Ku shigo da dukkan hotunanku, ku jera su bisa tsarin storyboard, ku yanke kowanne, sannan ku saka take da kira zuwa aiki a ƙarshe.",
          youCanNow: "gyara gutsuttsuran bidiyo zuwa bidiyo mai tsari ba tare da lokacin banza ba, mai take da kira zuwa aiki.",
          quickCheck: [
            { objective: "O4", q: "Mene ne ma'anar yanke hoto \"sosai\"?", options: ["Sa rubutu ya yi ƙanƙanta", "Fara daidai kafin abin ya faru, da tsayawa daidai bayan ya ƙare", "Kusantar da kyamara ga fuskoki", "Amfani da hoto ɗaya kawai"], answer: 1, why: "Yankewa sosai yana cire lokacin banza da ke sa masu kallo su wuce." },
            { objective: "O4", q: "Rubutun kira zuwa aikinku yana wucewa da sauri har ba a iya karanta shi. Me za ku yi?", options: ["Ku rage girman rubutun", "Ku goge shi", "Ku ƙara kalmomi", "Ku bar shi a allo har a iya karanta shi sau biyu"], answer: 3, why: "Rubutu a allo ya kamata ya yi girma, ya yi gajarta, kuma ya daɗe har a iya karanta shi sau biyu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Rubutun ƙasa, kiɗa da hotunan AI, yadda ya dace",
          minutes: 5,
          goal: "Saka rubutun ƙasa daidai, kiɗan da aka ba ku dama, da alama ta gaskiya a kan abin da AI ya yi.",
          text: [
            "Mutane da yawa suna kallo ba tare da sauti ba, kuma rubutun ƙasa yana taimakawa kurame ko masu matsalar ji. Manhajojin gyara da yawa suna iya yin rubutun ƙasa da kansu da AI. Koyaushe ku karanta su ku gyara kalmomin da ba daidai ba, musamman sunaye.",
            "Haƙƙin mallaka (copyright) yana kare kiɗa. A cewar Ofishin Haƙƙin Mallaka na Amurka (U.S. Copyright Office), aiki yana samun kariya da zarar an ƙirƙira shi kuma an ajiye shi a wani tsari, don haka yawancin waƙoƙin da kuke ji suna da kariya. Ku yi amfani da kiɗa daga ɗakin kiɗan manhajar gyara bisa dokokinta, kiɗan da kuka yi da kanku, ko kiɗa da izini a sarari. Dandalai suna iya kashe sautin bidiyo ko cire bidiyon da ke amfani da kiɗa ba tare da izini ba.",
            "Idan kun saka hoto ko bidiyo da AI ya yi, ku sa masa alama, misali \"Hoton da AI ya yi\" a allo ko a bayanin bidiyo. Kada ku taɓa amfani da AI don saka fuskar ko muryar wani mutum na gaske a bidiyonku ba tare da cikakken izininsa ba."
          ],
          steps: ["Ku kunna rubutun ƙasa na kai tsaye idan manhajarku tana da shi.", "Ku karanta kowane rubutun ƙasa ku gyara kurakurai, musamman sunaye.", "Ku zaɓi kiɗa daga ɗakin kiɗan manhajar, naku, ko da izini.", "Ku sa alama a kan duk hoto ko bidiyon da AI ya yi.", "Kada ku yi amfani da fuska ko muryar wani mutum na gaske da AI ya yi ba tare da izini ba."],
          words: [["Rubutun ƙasa (captions)", "kalmomi a allo da ke nuna abin da ake faɗa."], ["Haƙƙin mallaka (copyright)", "haƙƙin doka na wanda ya ƙirƙiri aiki na sarrafa yadda ake kwafarsa."], ["Alama (label)", "gajeren bayani da ke cewa an yi wani abu da AI."]],
          slides: [
            { title: "Rubutun ƙasa", bullets: ["Mutane da yawa suna kallo ba sauti", "Yana taimakawa kurame ko masu matsalar ji", "Ku gyara kurakuran rubutun ƙasa na kai tsaye"] },
            { title: "Kiɗan da za ku iya amfani da shi", bullets: ["Ɗakin kiɗan manhajar gyara bisa dokokinta", "Kiɗan da kuka yi da kanku", "Kiɗa da izini a sarari"] },
            { title: "Hotunan AI", bullets: ["Ku sa musu alama", "Babu fuska ko muryar mutum na gaske ta AI ba tare da izini ba"] }
          ],
          sources: [{ name: "Ofishin Haƙƙin Mallaka na Amurka (U.S. Copyright Office): Tambayoyi game da asalin haƙƙin mallaka", url: "https://www.copyright.gov/help/faq/faq-general.html" }],
          tryIt: "Ku saka rubutun ƙasa a bidiyonku ku gyara kowane kuskure. Ku saka kiɗan da aka ba ku damar amfani da shi. Idan kun yi amfani da hoto ko bidiyo da AI ya yi, ku saka alama.",
          youCanNow: "saka rubutun ƙasa daidai, zaɓar kiɗan da za ku iya amfani da shi, da sa alama ta gaskiya a kan abin da AI ya yi.",
          quickCheck: [
            { objective: "O5", q: "Me yasa za ku karanta rubutun ƙasa na kai tsaye kafin ku saka bidiyo a intanet?", options: ["Rubutun ƙasa na AI yana iya yin kuskure a kalmomi, musamman sunaye", "Rubutun ƙasa koyaushe daidai yake", "Don bidiyon ya yi tsawo", "Rubutun ƙasa ba dole ba ne"], answer: 0, why: "Rubutun ƙasa na kai tsaye yana iya jin kalmomi ba daidai ba, don haka ku karanta ku gyara su." },
            { objective: "O5", q: "Kuna son wata shahararriyar waƙa a tallar ƙungiyarku. Me za ku yi?", options: ["Ku yi amfani da ita kuna fatan ba wanda zai lura", "Ku yi amfani da ita a hankali a baya", "Ku zaɓi kiɗa daga ɗakin kiɗan manhajar, naku, ko da izini", "Ku ƙara saurinta don ta yi kamar wata daban"], answer: 2, why: "Yawancin waƙoƙi suna da kariya; ku yi amfani da kiɗan da aka yarda, ko dandalin ya kashe sautin bidiyon ko ya cire shi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Dubawa, fitarwa da rabawa lafiya",
          minutes: 5,
          goal: "Sami ra'ayoyin wasu, fitar da bidiyonku, da raba shi lafiya.",
          text: [
            "Kafin ku gama, ku nuna bidiyonku ga mutum ɗaya ko biyu ku tambaye su: Shin abin jan hankalin ya yi ƙarfi? Akwai abin da ya rikitar? Shin kun san abin da za ku yi a ƙarshe? Kuna iya kuma bayyana bidiyonku ga mataimakin AI ku nemi hanyoyi uku na inganta shi.",
            "Ku fitar da bidiyon ta amfani da zaɓin export ko save na manhajar gyara. Ku sake kallon fayil ɗin da aka fitar sau ɗaya don duba sauti, rubutun ƙasa da ƙarshe.",
            "Ku raba shi a inda ƙungiyarku, makarantarku da iyalinku suka yarda. Ku cire cikakken sunanku, adireshin makaranta da jadawalinku daga saƙonnin jama'a. Idan aikin makaranta ne, ku bi dokokin AI na malaminku kuma ku faɗi yadda kuka yi amfani da AI."
          ],
          steps: ["Ku nuna bidiyon ga mutum ɗaya ko biyu ku yi tambayoyi uku.", "Ku yi gyara ɗaya ko biyu.", "Ku fitar da bidiyon ku sake kallon fayil ɗin sau ɗaya.", "Ku raba shi a inda ƙungiyarku, makarantarku da iyalinku suka yarda.", "Ku kiyaye bayanan sirri kuma ku faɗi yadda kuka yi amfani da AI a aikin makaranta."],
          words: [["Ra'ayoyin wasu (feedback)", "sharhin wasu da ke taimaka muku ku inganta."], ["Fitarwa (export)", "ajiye aikinku a matsayin fayil ɗin bidiyo."]],
          slides: [
            { title: "Ku nemi ra'ayoyin wasu", bullets: ["Abin jan hankalin ya yi ƙarfi?", "Akwai abin da ya rikitar?", "Kun san abin da za ku yi a ƙarshe?"] },
            { title: "Fitarwa da dubawa", bullets: ["Ku yi amfani da export ko save", "Ku sake kallon fayil ɗin sau ɗaya"] },
            { title: "Rabawa lafiya", bullets: ["Inda makaranta da iyali suka yarda", "Ku kiyaye bayanan sirri", "Ku faɗi yadda kuka yi amfani da AI a aikin makaranta"] }
          ],
          tryIt: "Aikin ƙarshe: ku kammala bidiyonku na daƙiƙa 30 zuwa 60 mai rubutun bidiyo da storyboard da AI ya taimaka da su, aƙalla hotuna huɗu da aka ɗauka da izini, rubutun ƙasa, kiɗan da za ku iya amfani da shi da alama a kan abin da AI ya yi. Ku nemi ra'ayoyin wasu, ku fitar da shi, kuma ku raba shi lafiya.",
          youCanNow: "tsarawa, ɗauka, gyara, dubawa da raba gajeren bidiyo yadda ya dace da taimakon AI.",
          quickCheck: [
            { objective: "O6", q: "Me yasa za ku sake kallon fayil ɗin da aka fitar sau ɗaya?", options: ["Don duba cewa sauti, rubutun ƙasa da ƙarshe sun fito daidai", "Don ƙara amfani da data", "Don goge aikin", "Don canja maudu'i"], answer: 0, why: "Fitarwa tana iya samun matsala, don haka ku kalli fayil ɗin ƙarshe kafin ku raba shi." },
            { objective: "O6", q: "Wani mai kallo ya ce bai san abin da zai yi a ƙarshe ba. Me za ku canja?", options: ["Babu komai", "Ku sa kiran zuwa aiki ya fi sarari", "Ku ƙara kiɗa", "Ku cire abin jan hankali"], answer: 1, why: "Ra'ayi game da ƙarshe yana nufin kiran zuwa aiki yana buƙatar ya fi sarari." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gyara da rabawa",
        questions: [
          { objective: "O4", q: "Mene ne ma'anar trim (yankewa) a manhajar gyara bidiyo?", options: ["Saka kiɗa", "Cire farko ko ƙarshen gutsuren bidiyo", "Raba bidiyon", "Yin rubutun ƙasa"], answer: 1, why: "Yankewa yana cire ƙarin lokaci a farko ko ƙarshe." },
          { objective: "O5", q: "Rubutun ƙasa na kai tsaye ya rubuta sunan shugaban ƙungiyarku ba daidai ba. Me za ku yi?", options: ["Ku bar shi", "Ku kashe sauti", "Ku goge bidiyon", "Ku gyara rubutun ƙasan"], answer: 3, why: "Koyaushe ku karanta ku gyara rubutun ƙasa na kai tsaye." },
          { objective: "O5", q: "Wane kiɗa ne ba shi da matsala a yi amfani da shi?", options: ["Kiɗa daga ɗakin kiɗan manhajar gyara bisa dokokinta", "Shahararriyar waƙa daga rediyo", "Waƙar da aka ciro daga shafin bidiyo", "Kowace waƙa idan kun ambaci sunan mawaƙin"], answer: 0, why: "Kiɗan ɗakin manhaja bisa dokokinta, kiɗanku, ko kiɗa da izini ba shi da matsala." },
          { objective: "O5", q: "Kun saka hoton da AI ya yi. Me ya kamata ku yi?", options: ["Ku ɓoye shi", "Ku ce ku ne kuka zana shi", "Ku sa masa alama cewa AI ne ya yi shi", "Ku cire rubutun ƙasa"], answer: 2, why: "Alama ta gaskiya tana faɗa wa masu kallo abin da AI ya yi." },
          { objective: "O6", q: "Me ya kamata ku yi kafin raba bidiyon aikin makaranta?", options: ["Ku saka adireshin makarantarku", "Ku ɓoye yadda kuka yi amfani da AI", "Ku ƙi kallon fayil ɗin da aka fitar", "Ku bi dokokin AI na malaminku kuma ku faɗi yadda kuka yi amfani da AI"], answer: 3, why: "Bin dokokin makaranta da faɗin gaskiya game da amfani da AI suna da muhimmanci." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Ƙirƙirar Bidiyo da Taimakon AI",
    questions: [
      { objective: "O1", q: "Wace ce hanya mai amfani da ake amfani da AI a bidiyo?", options: ["Yin rubutun ƙasa na kai tsaye", "Yin bidiyon bogi na abokan aji", "Kwafar fina-finai", "Satar asusu"], answer: 0, why: "Rubutun ƙasa na kai tsaye abu ne mai amfani na AI da aka saba gani." },
      { objective: "O1", q: "Me yasa deepfake na mutane na gaske matsala ne?", options: ["Sun yi gajarta sosai", "Suna iya cutar da mutane kuma su karya dokokin makaranta ko na ƙasa", "Ba su da sauti", "Suna buƙatar abin tsayar da kyamara"], answer: 1, why: "Deepfake yana nuna kamar mutane na gaske sun yi abin da ba su yi ba." },
      { objective: "O1", q: "Kafin buɗe asusu a manhajar bidiyo ko AI, matashi ya kamata ya:", options: ["Yi amfani da asusun aboki da ya girme shi", "Tsallake sharuɗɗan", "Duba mafi ƙarancin shekaru kuma ya sa iyaye ko mai kula", "Yi amfani da ranar haihuwa ta bogi"], answer: 2, why: "Manhajoji suna da iyakar shekaru, kuma ya kamata iyaye su shiga ciki." },
      { objective: "O2", q: "Kira zuwa aiki shi ne:", options: ["Kiɗan baya", "Wani saitin kyamara", "Sunan fayil ɗin bidiyo", "Layin da ke faɗa wa masu kallo abin da za su yi a gaba"], answer: 3, why: "Yana faɗa wa masu kallo abin da za su yi, kamar shiga ko halarta." },
      { objective: "O2", q: "Wace buƙata ga AI ce za ta kawo mafi kyawun daftarin rubutun bidiyo?", options: ["\"Bidiyo na daƙiƙa 45 da ke gayyatar sababbin ɗalibai zuwa ƙungiyar robot; hook, sassa 3, kira zuwa aiki; kalmomin yau da kullum\"", "\"bidiyo\"", "\"yi wani abu\"", "\"robot\""], answer: 0, why: "Tana ba da maudu'i, masu kallo, tsawo, tsari da salon magana." },
      { objective: "O2", q: "Storyboard yana nuna:", options: ["Kiɗa kawai", "Kowane hoto: abin da muke gani, ji da tsawon lokacinsa", "Farashin manhajar gyara", "Sharhin masu kallo"], answer: 1, why: "Storyboard tsari ne hoto bayan hoto." },
      { objective: "O2", q: "Me yasa za ku tabbatar da bayanai a rubutun bidiyo da AI ya rubuta?", options: ["AI ba ya taɓa yin kuskure", "Bayanai ba su da muhimmanci a bidiyo", "AI yana iya yin kuskure a ranaku, lokaci ko wurare", "Yana sa bidiyon ya yi tsawo"], answer: 2, why: "AI yana iya yin kuskure; ku ne kuke tabbatar da bayanai." },
      { objective: "O3", q: "Don wayarku ta tsaya ba ta girgiza, kuna iya:", options: ["Kaɗa ta ko'ina", "Riƙe ta da yatsa ɗaya", "Ɗaukar bidiyo kuna gudu", "Amfani da hannu biyu, jingina da wani abu, ko amfani da abin tsayarwa"], answer: 3, why: "Hotunan da ba sa girgiza suna kama da na ƙwararru." },
      { objective: "O3", q: "Wuri mafi kyau don yin rikodin mutum yana magana shi ne:", options: ["Wuri mai shiru, kusa da mai magana", "Kusa da fanka mai ƙara", "Hanyar wucewa mai cunkoso", "Nesa a ƙarshen zauren wasanni"], answer: 0, why: "Wuri mai shiru da kusanci suna ba da sauti a sarari." },
      { objective: "O3", q: "Kafin ɗaukar mutane a bidiyon ƙungiyar makaranta, ya kamata ku:", options: ["Ɗauke su a ɓoye", "Nemi izini kuma ku duba dokokin makaranta na ɗaukar bidiyo", "Tambaya kawai bayan kun saka a intanet", "Ɗauke su a wurare na sirri"], answer: 1, why: "Izini da dokokin makaranta suna zuwa farko." },
      { objective: "O4", q: "Import a manhajar gyara bidiyo yana nufin:", options: ["Saka bidiyon a intanet", "Goge gutsuttsuran bidiyo", "Kawo gutsuttsuran bidiyonku cikin manhajar gyara", "Saka rubutun ƙasa"], answer: 2, why: "Import yana kawo gutsuttsura ciki don a gyara su." },
      { objective: "O4", q: "Me yasa za ku yanke kowane hoto sosai?", options: ["Don amfani da ƙarin wurin ajiya", "Don bidiyon ya yi tsawo", "Don ɓoye rubutun ƙasa", "Lokacin banza yana sa masu kallo su wuce"], answer: 3, why: "Yankewa sosai yana riƙe hankalin masu kallo." },
      { objective: "O4", q: "Rubutu a allo ya kamata ya kasance:", options: ["Babba, gajere, kuma ya daɗe a allo har a iya karanta shi", "Ƙarami kuma mai sauri", "Dogayen sakin layi", "A ɓoye"], answer: 0, why: "Rubutu mai sauƙin karantawa yana isar da saƙonku." },
      { objective: "O5", q: "Me yasa za ku saka rubutun ƙasa?", options: ["Dole ne a duk wayoyi", "Mutane da yawa suna kallo ba sauti, kuma suna taimakawa kurame ko masu matsalar ji", "Suna maye gurbin gyara", "Suna rage girman fayil"], answer: 1, why: "Rubutun ƙasa yana sa bidiyo ya fi sarari kuma ya fi sauƙin samu ga kowa." },
      { objective: "O5", q: "A cewar Ofishin Haƙƙin Mallaka na Amurka, haƙƙin mallaka yana kare aiki:", options: ["Sai bayan an yi masa rajista kawai", "Na shekara 1 kawai", "Da zarar an ƙirƙira shi kuma an ajiye shi a tsarin da mutane za su iya gani ko ji", "Bidiyo kawai"], answer: 2, why: "Kariya tana farawa da zarar an ƙirƙiri aikin kuma an ajiye shi." },
      { objective: "O5", q: "Me zai iya faruwa idan kun yi amfani da shahararriyar waƙa ba tare da izini ba?", options: ["Babu abin da zai taɓa faruwa", "Za ku sami kuɗi", "Waƙar za ta fi daɗi", "Dandalin yana iya kashe sautin bidiyonku ko ya cire shi"], answer: 3, why: "Dandalai suna ɗaukar mataki kan kiɗan da aka yi amfani da shi ba tare da izini ba." },
      { objective: "O5", q: "Aboki ya ce ku saka fuskar wani shahararren mutum da AI ya yi a bidiyonku don ban dariya. Ku:", options: ["Ku ce a'a; kada ku yi amfani da fuskar mutum na gaske ba tare da izini ba", "Ku yi shi ku sa alama", "Ku yi shi a asusu na sirri", "Ku yi shi amma ku ɓoye fuskar"], answer: 0, why: "Kada ku yi amfani da kwafin AI na mutane na gaske ba tare da izininsu ba." },
      { objective: "O6", q: "Wace tambayar neman ra'ayi ce ta fi amfani?", options: ["\"Ya yi cikakke?\"", "\"Kun san abin da za ku yi a ƙarshe?\"", "\"Kuna sona?\"", "\"Wayata tana da kyau?\""], answer: 1, why: "Tana duba ko kiran zuwa aiki yana aiki." },
      { objective: "O6", q: "Bayan fitar da bidiyo, ya kamata ku:", options: ["Goge aikin nan take", "Saka shi a intanet ba tare da kallo ba", "Sake kallon fayil ɗin sau ɗaya don duba sauti da rubutun ƙasa", "Sa masa suna da adireshinku"], answer: 2, why: "Fitarwa tana iya samun matsala; ku duba kafin ku raba." },
      { objective: "O6", q: "Idan kuna rabawa ga jama'a, ku kiyaye sirrin:", options: ["Sunan ƙungiyar", "Ranar taron", "Taken bidiyon", "Cikakken sunanku, adireshin makaranta da jadawalinku"], answer: 3, why: "Bayanan sirri suna zama a sirri a intanet." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 1, 3, 5, 7, 9, 11, 13, 15, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Rubutun bidiyo da storyboard", objective: "O2", notYet: "Babu abin jan hankali ko kira zuwa aiki, ko babu storyboard.", meets: "Rubutun bidiyo mai abin jan hankali, sassa da kira zuwa aiki, da salon maganar mai koyo, da storyboard da ya dace da daƙiƙa 30 zuwa 60.", exceeds: "An tabbatar da bayanai kamar ranaku da ɗakuna, kuma storyboard yana nuna daƙiƙoƙin kowane hoto." },
      { name: "Ɗaukar bidiyo", objective: "O3", notYet: "Hotunan suna da duhu, suna girgiza ko ba a jin sauti sosai, ko an ɗauki wani ba tare da izini ba.", meets: "Aƙalla hotuna huɗu da ba sa girgiza, masu haske mai kyau da sauti a sarari, da izinin duk wanda ke cikin bidiyo.", exceeds: "An ɗauki kowane hoto aƙalla sau biyu kuma an zaɓi mafi kyau." },
      { name: "Gyara", objective: "O4", notYet: "Gutsuttsuran ba su cikin tsari ko suna da dogon lokacin banza.", meets: "Gutsuttsuran suna bin storyboard, an yanke su sosai, kuma suna da take da kira zuwa aiki a ƙarshe.", exceeds: "Rubutun yana da sauƙin karantawa kuma saurin bidiyon yana sa masu kallo su ci gaba da kallo." },
      { name: "Rubutun ƙasa, kiɗa da alamomi", objective: "O5", notYet: "Rubutun ƙasa yana da kurakurai, ba a yarda da kiɗan ba, ko ba a sa alama a kan abin da AI ya yi ba.", meets: "Rubutun ƙasa daidai, kiɗan da aka yarda da shi, da alama a kan duk abin da AI ya yi.", exceeds: "Mai koyo zai iya faɗin inda kiɗan ya fito da dokokin da suka ba da damar amfani da shi." },
      { name: "Ra'ayoyin wasu da rabawa lafiya", objective: "O6", notYet: "Ba a fitar da shi ba, ko an raba shi da bayanan sirri.", meets: "Ra'ayi daga aƙalla mutum ɗaya, an yi canji ɗaya, an fitar da shi kuma an raba shi lafiya.", exceeds: "Ya rubuta yadda aka yi amfani da AI da abin da ya canja bayan ra'ayoyin wasu." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Bidiyon da wata ƙungiya, ƙungiyar wasa, taro ko wani aiki na gaske ya yi amfani da su cikin kwanaki 30",
      "Masu koyo da suka yi bidiyo na biyu da aka tsara cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce suna neman izini kuma suna sa alama a kan abin da AI ya yi a bidiyon da suka yi daga baya"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya mai kyamara",
      "Manhajar gyara bidiyo kyauta kamar CapCut ko Canva, ana amfani da ita bisa dokokin shekarunta",
      "Mataimakin AI kyauta da aka yarda mai koyo ya yi amfani da shi",
      "Abin tsayar da waya mai sauƙi ko wani abu da za a jingina da shi (ba dole ba ne)",
      "Kusan minti 60 gaba ɗaya, da ƙarin lokacin ɗaukar bidiyo"
    ],
    facilitatorNotes: [
      "Ku duba dokokin makarantarku na ɗaukar bidiyo da izinin hoto kafin aji, kuma ku faɗi waɗanne ɗalibai ne ba za a ɗauka ba.",
      "Ku duba dokokin shekaru na kowace manhaja kuma ku sa iyaye ko masu kula a duk wani buɗe asusu.",
      "Ku haɗa masu koyo bi-biyu a matsayin ma'aikatan ɗaukar bidiyo don kowanne ya gwada ɗaukar bidiyo, shiga bidiyo da ba da ra'ayi.",
      "Ku duba bidiyon don izini, kiɗa da alamomin AI kafin a saka komai a intanet ga jama'a.",
      "Ku shirya kallon bidiyon tare a cikin rukuni, kuma ku ba kowane bidiyo maki da ma'aunin rubric, layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

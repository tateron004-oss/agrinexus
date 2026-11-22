"use strict";

// Koach Learn course, Hausa (ha) translation of leadership/edu-ai-special-education.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "edu-ai-special-education-ha",
  lang: "ha",
  translationOf: "edu-ai-special-education",
  category: "Leadership Development",
  name: "AI don Ilimi na Musamman",
  skills: "Sanin inda AI ya dace da inda bai dace ba a ilimi na musamman, Yin kayan karatu da kowa zai iya amfani da su, Gina tallafin hotuna da raba aiki kashi-kashi, Rubuta bayani mai sauƙi ga iyalai, Kare bayanan IEP da 504, Kafa dokokin ƙungiya",
  outcome: "amfani da AI don sa kayan aji su fi sauƙin amfani ga kowa (sigar kalmomi masu sauƙi, matakai kashi-kashi, jadawalin hotuna da atisaye a matakai daban-daban), da bayyana wa iyalai matakan ilimi na musamman da kalmomi masu sauƙi, yayin da kowane hukunci na IEP da 504 da dukkan bayanan ɗalibai suke hannun ƙungiya.",
  about: [
    "Wannan kwas ɗin na malaman ilimi na musamman ne, da malaman aji na yau da kullum da ke koyar da ɗalibai masu nakasa, da masu ba da hidimomin tallafi, da masu tsarawa da shugabannin makaranta. AI zai iya rage lokacin gyara kayan karatu da bayanin matakai. Amma kada ya taɓa rubuta ko yanke abin da ke cikin shirin IEP ko 504 na ɗalibi.",
    "Babi na 1 yana nuna iyakoki (abin da dokar IDEA ke buƙata daga ƙungiya, da dalilin da yasa AI ba zai iya ɗaukar wannan matsayi ba), kuma yana koyar da yin kayan karatu masu sauƙin amfani. Babi na 2 yana magana game da sadarwa da iyalai, kare bayanan ɗalibai, da dokokin da ƙungiyarku za ta bi.",
    "Wannan kwas yana bayyana doka da kalmomi masu sauƙi don ku san abin da za ku tambaya; ba shawarar lauya ba ne. Daraktan ilimi na musamman da lauyan gundumarku su ne ke da kalmar ƙarshe. Ku yi atisaye da kayan ƙirƙira ko na gama-gari kawai. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas."
  ],
  finalTask: "Ku haɗa kunshin kayan sauƙin amfani don darasi ɗaya na gama-gari (babu bayanan ɗalibi): sigar kalmomi masu sauƙi ta babban karatun, aikin da aka raba zuwa matakai masu lamba tare da jerin dubawa, jadawalin hotuna na darasin, da atisaye a matakai biyu; da kuma bayani mai shafi ɗaya da kalmomi masu sauƙi ga iyalai game da wani mataki na gama-gari a ilimi na musamman (misali, \"abin da ke faruwa a taron IEP na shekara-shekara\"). Ku duba daidaiton komai, sannan ku rubuta dokokin ƙungiya biyar na amfani da AI a ilimi na musamman.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Malaman ilimi na musamman, malaman aji na yau da kullum da ke koyar da ɗalibai masu nakasa, masu ba da hidimomin tallafi, masu tsarawa da shugabannin makaranta a makarantun Amurka.",
    startingPoint: "Suna gyara kayan karatu kuma suna bayyana matakan ilimi na musamman da hannu, wanda ke ɗaukar lokaci mai yawa. Wataƙila sun gwada AI amma ba su da tabbas inda ya dace a ƙarƙashin IDEA da Section 504, da yadda za su kiyaye bayanan IEP da 504.",
    gap: "AI zai iya rage lokaci wajen yin kayan karatu masu sauƙin amfani da bayani mai sauƙi ga iyalai, amma kada ya taɓa rubuta ko yanke abin da ke cikin IEP ko 504 na ɗalibi, kuma bayanan ɗalibai suna da matuƙar muhimmanci a sirri. Malamai suna buƙatar amfani da AI don ayyukan da suka dace, su duba abin da ya rubuta, kuma su bi dokokin ƙungiya masu sarari.",
    constraints: [
      "Kwas ɗin yana bayyana doka da kalmomi masu sauƙi kuma ba shawarar lauya ba ne; daraktan ilimi na musamman da lauyan gunduma su ne ke da kalmar ƙarshe",
      "Ku yi atisaye da kayan ƙirƙira ko na gama-gari kawai; babu bayanan ɗalibi a kowane kayan AI da ba a amince da shi ba",
      "Hukunce-hukuncen IEP da 504 da tallafin da ake buƙata (accommodations) suna hannun ƙungiya, kuma ana ba da su kamar yadda aka rubuta",
      "Kayan iyalai suna zama na gama-gari kuma ana kwatanta su da kayan gunduma; ƙwararrun masu magana da harshen ne ke duba fassarori",
      "Lokaci: gajerun darussa da suka dace da ranar koyarwa"
    ],
    prerequisites: "Babu. Kwas ɗin \"AI ga Shugabannin Makaranta da na Ilimi 2: Kayan AI ga Malamai\" zai taimaka a matsayin farko."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku jerin ayyukan ilimi na musamman", action: "raba kowane aiki zuwa \"AI zai iya taimakawa\" ko \"ƙungiya kaɗai\"", standard: "kuna sa kowane hukunci na IEP da 504 a hannun ƙungiya" },
    { id: "O2", condition: "Idan aka ba ku karatu da aiki na gama-gari", action: "yin sigar kalmomi masu sauƙi da jerin dubawa na matakai kashi-kashi da AI", standard: "kuna kwatanta kowanne da na asali kuma kuna gyara duk bayanin da aka cire ko aka canja" },
    { id: "O3", condition: "Don darasi ɗaya na gama-gari", action: "yin jadawalin hotuna da atisaye a matakai biyu", standard: "tare da alt text a kowane hoto, an duba kowace amsa, kuma ana ci gaba da ba da tallafin da ake buƙata kamar yadda aka rubuta" },
    { id: "O4", condition: "Idan aka ba ku wani mataki na gama-gari a ilimi na musamman", action: "rubuta bayani mai shafi ɗaya da kalmomi masu sauƙi ga iyalai", standard: "an kwatanta shi da kayan hukuma na gundumarku, kuma abokin aiki ya karanta shi don duba salon magana" },
    { id: "O5", condition: "Idan ma'aikata suna son taimakon AI kan bayanan ilimi na musamman", action: "zaɓar hanya mai aminci ta samun taimakon ba tare da bayyana bayanan IEP, 504 ko na tantancewa ba", standard: "ta amfani da kayan da aka amince da su kaɗai, da ƙaramin bayani mafi ƙanƙanta" },
    { id: "O6", condition: "Don ƙungiyarku", action: "rubuta dokokin ƙungiya biyar na amfani da AI a ilimi na musamman", standard: "tare da misali ga kowace doka, kuma an raba su da malamai, mataimakan malamai da masu ba da hidimomin tallafi" }
  ],
  chapters: [
    {
      name: "Babi na 1: Iyakoki da kayan karatu masu sauƙin amfani",
      lessons: [
        {
          objectives: ["O1"],
          title: "Inda AI ya dace, da inda bai dace ba",
          minutes: 6,
          goal: "Bayyana abin da AI zai iya taimakawa da shi a ilimi na musamman, da abin da ke hannun ƙungiyar IEP.",
          text: [
            "Dokar Individuals with Disabilities Education Act (IDEA, dokar tarayya ta ilimin masu nakasa) tana buƙatar yaran da suka cancanta masu nakasa su sami ilimin jama'a kyauta wanda ya dace da su (FAPE). A ƙarƙashin Part B, wanda ke rufe shekaru 3 zuwa 21, ana rubuta hidimomin a cikin Individualized Education Program (IEP, shirin ilimi na kowane ɗalibi) da ƙungiya ke shiryawa, wadda ta haɗa da iyayen yaron da ma'aikatan makaranta. Part C yana rufe taimakon farko ga jarirai da ƙananan yara. Shirin Section 504 wata hanya ce dabam ga wasu ɗalibai masu nakasa.",
            "Waɗannan hukunce-hukunce ne na kowane ɗalibi, na doka, na ƙungiya, bisa tantancewa da sanin yaron. AI ba zai iya halartar taron ba, bai san yaron ba, kuma yana iya rubuta abubuwa na gama-gari ko marasa daidai. Don haka kada AI ya rubuta matakin da ɗalibi yake a yanzu (present levels), manufofi, hidimomi, tallafi ko wurin karatu (placement), kuma kada a taɓa amfani da abin da AI ya rubuta don yanke ko ɗalibi ya cancanta.",
            "Inda AI ke taimakawa: gyara kayan aji na gama-gari, yin atisaye a matakai da yawa, yin tallafin hotuna, rubuta daftarin bayani na gama-gari game da matakai ga iyalai, da tsara jadawalinku da samfuran takardunku (ba tare da bayanan ɗalibi ba)."
          ],
          words: [["IDEA", "dokar tarayya ta Amurka da ke buƙatar ilimin jama'a kyauta wanda ya dace ga yaran da suka cancanta masu nakasa."], ["FAPE", "free appropriate public education (ilimin jama'a kyauta wanda ya dace): abin da IDEA ke tabbatarwa ga ɗaliban da suka cancanta."], ["IEP", "Individualized Education Program: rubutaccen shirin hidimomin ilimi na musamman na ɗalibi, wanda ƙungiya mai iyaye a ciki ke yi."], ["Shirin Section 504", "shirin da ke ba da tallafi ga ɗalibi mai nakasa a ƙarƙashin wata dokar tarayya dabam."]],
          slides: [
            { title: "Abin da IDEA ke buƙata", bullets: ["FAPE ga yaran da suka cancanta masu nakasa", "Part B: shekaru 3 zuwa 21, ta hanyar IEP", "Ƙungiya mai iyaye a ciki ce ke yin IEP"] },
            { title: "AI BA YA", bullets: ["Rubuta manufofi, hidimomi ko tallafi", "Yanke cancanta ko wurin karatu", "Maye gurbin sanin da ƙungiya ke da shi game da yaron"] },
            { title: "AI ZAI IYA taimakawa", bullets: ["Gyara kayan karatu na gama-gari", "Atisaye a matakai da yawa; tallafin hotuna", "Bayani na gama-gari ga iyalai"] }
          ],
          sources: [{ name: "US Department of Education: Annual Report to Congress on IDEA (Part B ages 3 through 21)", url: "https://sites.ed.gov/idea/2021-individuals-with-disabilities-education-act-annual-report-to-congress/" }, { name: "NCLD: Individuals with Disabilities Education Act", url: "https://ncld.org/understand-the-issues/learn-the-law/individuals-with-disabilities-education-act" }],
          tryIt: "Ku yi ginshiƙai biyu: \"AI zai iya taimakawa\" da \"Ƙungiya kaɗai\". Ku sa aƙalla ayyukan ilimi na musamman goma daga makonku a ginshiƙin da ya dace.",
          youCanNow: "raba ayyukan tallafin AI da hukunce-hukuncen ƙungiyar IEP a sarari.",
          quickCheck: [
            { objective: "O1", q: "Wane ne ke shirya IEP na ɗalibi?", options: ["Kayan AI da gunduma ta amince da shi", "Ƙungiya mai iyaye da ma'aikatan makaranta", "Shugaban makaranta shi kaɗai", "Malamin aji na yau da kullum shi kaɗai"], answer: 1, why: "Ƙungiya mai iyaye a ciki ce ke shirya IEP." },
            { objective: "O1", q: "Wani abokin aiki ya nemi AI ya ba da shawarar tallafin da ɗalibi zai samu. Me za ku ce?", options: ["Kyakkyawan tunani; ku yi amfani da jerinsa", "Ku nemi wani kayan AI na biyu ya duba", "Hukuncin tallafi na ƙungiyar IEP ko 504 ne, ba na AI ba", "Ku yi amfani da jerin AI ga ƙananan ɗalibai kawai"], answer: 2, why: "Hukunce-hukuncen IEP da 504 suna hannun ƙungiya." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Sigar kalmomi masu sauƙi da ayyuka kashi-kashi",
          minutes: 5,
          goal: "Yi amfani da AI don yin sigar karatu da kalmomi masu sauƙi, da raba aiki zuwa kashi-kashi.",
          text: [
            "Ɗalibai da yawa suna amfana da rubutu da ke riƙe ra'ayoyin amma ya rage nauyin karatu: gajerun jimloli, kalmomin yau da kullum, bayanin muhimman kalmomi, kanun bayani da jerin ɗigo-ɗigo. Prompt: \"Rewrite this passage at about a 3rd-grade reading level. Keep every key fact and these vocabulary words: [list]. Use short sentences and headings. Add a box defining each vocabulary word.\" (Ka sake rubuta wannan sashe a matakin karatu na aji 3, ka riƙe kowane muhimmin bayani da waɗannan kalmomi, ka yi gajerun jimloli da kanun bayani, ka ƙara akwati mai bayanin kowace kalma.)",
            "Raba aiki kashi-kashi (chunking) yana mayar da aiki mai matakai da yawa zuwa ƙananan matakai masu lamba tare da jerin dubawa. Prompt: \"Break this assignment into 5 to 8 numbered steps, one action per step, with a checkbox for each and an estimated time.\" (Ka raba wannan aiki zuwa matakai 5 zuwa 8 masu lamba, aiki ɗaya a kowane mataki, tare da akwatin dubawa da kimanin lokaci ga kowanne.)",
            "Ku kwatanta kowace siga da ta asali: wani lokaci AI yana cire ko canja bayanai idan yana sauƙaƙawa. Ku riƙe ra'ayoyin matakin ajin; rage matakin karatu bai kamata ya rage manufar koyo ba."
          ],
          steps: ["Ku liƙa sashen karatu ko aikin na gama-gari (babu bayanan ɗalibi).", "Ku nemi sigar kalmomi masu sauƙi, tare da riƙe muhimman bayanai da kalmomi.", "Ku nemi matakai masu lamba tare da akwatunan dubawa da lokaci.", "Ku kwatanta da na asali; ku gyara bayanan da aka cire ko aka canja.", "Ku riƙe manufar koyo iri ɗaya."],
          words: [["Kalmomi masu sauƙi (plain language)", "rubutu mai sarari mai gajerun jimloli da kalmomin yau da kullum."], ["Raba kashi-kashi (chunking)", "raba aiki zuwa ƙananan matakai masu sauƙin yi."]],
          slides: [
            { title: "Sigar kalmomi masu sauƙi", bullets: ["Ra'ayoyi iri ɗaya, ƙaramin nauyin karatu", "Gajerun jimloli, kalmomin yau da kullum, kanun bayani", "Ku riƙe muhimman kalmomi, tare da bayaninsu"] },
            { title: "Ku raba aikin kashi-kashi", bullets: ["Matakai 5-8 masu lamba", "Aiki ɗaya a kowane mataki", "Akwatin dubawa da lokaci ga kowanne"] },
            { title: "Ku kwatanta da na asali", bullets: ["Sauƙaƙawa na iya cire bayanai", "Manufar koyo iri ɗaya"] }
          ],
          tryIt: "Ku ɗauki karatu da aiki na gama-gari daga darasi mai zuwa. Ku yi sigar kalmomi masu sauƙi da jerin dubawa kashi-kashi da AI, sannan ku kwatanta kowanne da na asali ku gyara kowane kuskure.",
          youCanNow: "yin sigar kayan aji masu kalmomi masu sauƙi da masu matakai kashi-kashi, ba tare da kuskure ba.",
          quickCheck: [
            { objective: "O2", q: "Mene ne kalmomi masu sauƙi (plain language)?", options: ["Gajerun jimloli da kalmomin yau da kullum da ke riƙe ra'ayoyi iri ɗaya", "Gajeren rubutu mai ƙarancin ra'ayoyi", "Rubutu ba tare da alamomin rubutu ba", "Fassara zuwa wani harshe"], answer: 0, why: "Kalmomi masu sauƙi suna sa rubutu ya fi sauƙin karantawa ba tare da canja abin da ke ciki ba." },
            { objective: "O2", q: "Jerin dubawa kashi-kashi da AI ya yi ya tsallake mataki ɗaya na aikin. Me za ku yi?", options: ["Ku yi amfani da shi; ɗalibai za su gane", "Ku cire matakin daga aikin", "Ku nemi ɗalibai su nemo matakin da ya ɓace", "Ku kwatanta shi da aikin asali ku ƙara matakin da ya ɓace"], answer: 3, why: "Kwatantawa da na asali yana kama matakai da bayanan da aka cire." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Tallafin hotuna da atisaye a matakai da yawa",
          minutes: 5,
          goal: "Yi jadawalin hotuna da atisaye a matakai biyu don darasi.",
          text: [
            "Jadawalin hotuna da tallafin hotuna suna taimaka wa ɗalibai da yawa su san abin da ke zuwa da abin da za su yi. AI zai iya rubuta daftarin rubutun jadawalin hotuna (\"1. Warm-up, 5 minutes; 2. Mini-lesson...\") kuma ya ba da shawarar alamomi masu sauƙi; kayan aiki kamar Canva (shafin tsara hotuna) za su iya tsara shi. Don hotuna, ku duba cewa a sarari suke, suna nuna girmamawa, kuma sun dace da kalmomin.",
            "Atisaye a matakai da yawa yana bar kowane ɗalibi ya yi aiki kan ƙwarewa iri ɗaya: ku nemi AI ya yi kashi mai ƙarin tallafi (misalin da aka warware tukuna, ƙananan matakai, bankin kalmomi) da kashi a matakin ajin. Ku duba kowace amsa.",
            "Ku tuna cewa tallafin da aka lissafa a IEP ko shirin 504 na ɗalibi dole ne a ba da shi kamar yadda aka rubuta; kayanku suna ƙara tallafi ga kowa amma ba sa maye gurbin tallafin da ake buƙata. Ku kuma duba sauƙin amfani: haruffa masu sauƙin karantawa, bambancin launi mai kyau, alt text ga hotuna, da rubutu da ke aiki da text-to-speech."
          ],
          steps: ["Ku rubuta daftarin rubutun jadawalin hotuna da AI.", "Ku tsara shi da alamomi masu sarari da ke nuna girmamawa.", "Ku nemi atisaye mai ƙarin tallafi da na matakin ajin.", "Ku duba kowace amsa.", "Ku duba sauƙin amfani: haruffa, bambancin launi, alt text, text-to-speech."],
          words: [["Jadawalin hotuna (visual schedule)", "jerin hotuna da kalmomi na abin da zai faru, bi da bi."], ["Alt text", "gajeren rubutaccen bayanin hoto ga mutanen da ke amfani da shirin karanta allo (screen reader)."], ["Text-to-speech", "fasahar da ke karanta rubutu da babbar murya."]],
          slides: [
            { title: "Jadawalin hotuna", bullets: ["AI yana rubuta daftarin matakai da lokuta", "Ku tsara da alamomi masu sarari, masu girmamawa"] },
            { title: "Atisaye a matakai biyu", bullets: ["Ƙarin tallafi: misalin da aka warware, bankin kalmomi", "Matakin aji: ƙwarewa iri ɗaya", "Ku duba kowace amsa"] },
            { title: "Sauƙin amfani da tallafin da ake buƙata", bullets: ["Haruffa masu sauƙin karantawa, bambancin launi, alt text", "Yana aiki da text-to-speech", "Tallafin da ake buƙata yana nan daram"] }
          ],
          tryIt: "Ku yi jadawalin hotuna na darasi ɗaya da atisaye a matakai biyu don babbar ƙwarewarsa. Ku ƙara alt text ga kowane hoto kuma ku duba kowace amsa.",
          youCanNow: "yin tallafin hotuna da atisaye a matakai daban-daban da ke sa darussa su fi sauƙin amfani.",
          quickCheck: [
            { objective: "O3", q: "Me jadawalin hotuna ke nunawa?", options: ["Makin ɗalibai", "Kalandar malami", "Abin da zai faru, bi da bi, da hotuna da kalmomi", "Taswirar zama a aji"], answer: 2, why: "Jadawalin hotuna yana taimaka wa ɗalibai su san abin da ke biye." },
            { objective: "O3", q: "Atisayenku na matakai biyu yana da bankin kalmomi, amma IEP na wani ɗalibi yana buƙatar ƙarin lokaci. Me ake bi?", options: ["Ku ba da ƙarin lokacin kamar yadda aka rubuta a IEP", "Bankin kalmomi ya maye gurbin ƙarin lokacin", "Ku tambayi AI wane tallafi ya fi kyau", "Ku ba da ƙarin lokaci a jarabawa kawai"], answer: 0, why: "Dole ne a ba da tallafin IEP da ake buƙata kamar yadda aka rubuta, ko da wane tallafi kuka ƙara." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Iyakoki da kayan karatu masu sauƙin amfani",
        questions: [
          { objective: "O1", q: "A ƙarƙashin IDEA Part B, ana rubuta hidimomin ilimi na musamman na ɗaliban da suka cancanta masu shekaru 3 zuwa 21 a cikin:", options: ["Katin sakamako", "Taƙaitaccen bayanin AI", "IEP da ƙungiya mai iyaye a ciki ta shirya", "Jaridar makaranta"], answer: 2, why: "IEP shi ne rubutaccen shirin ƙungiya." },
          { objective: "O1", q: "Wane aiki ne bai kamata AI ya yi ba?", options: ["Rubuta manufofin IEP na ɗalibi", "Yin sigar kalmomi masu sauƙi ta karatu na gama-gari", "Rubuta daftarin jadawalin hotuna", "Yin atisaye a matakai biyu"], answer: 0, why: "Abin da ke cikin IEP hukuncin ƙungiya ne." },
          { objective: "O2", q: "AI ya sauƙaƙa sashen karatun kimiyya kuma ya canja wani bayani. Me ya kamata ku yi?", options: ["Ku yi amfani da shi duk da haka", "Ku goge na asali", "Ku ƙara sauƙaƙa shi", "Ku kwatanta da na asali ku gyara shi"], answer: 3, why: "Sauƙaƙawa na iya kawo kurakurai." },
          { objective: "O3", q: "Mene ne alt text?", options: ["Wani nau'in haruffa", "Rubutaccen bayanin hoto ga shirin karanta allo", "Wata jarabawa dabam", "Saƙon tes"], answer: 1, why: "Alt text yana sa hotuna su zama masu sauƙin amfani." },
          { objective: "O3", q: "Kayanku na matakai daban-daban suna ba da ƙarin tallafi. Shin tallafin IEP da ake buƙata yana nan har yanzu?", options: ["A'a, kayan sun maye gurbinsu", "A ranakun jarabawa kawai", "Sai idan iyaye sun nema", "E, dole ne a ba da su kamar yadda aka rubuta"], answer: 3, why: "Ba a maye gurbin tallafin da ake buƙata." }
        ]
      }
    },
    {
      name: "Babi na 2: Iyalai, sirri da dokokin ƙungiya",
      lessons: [
        {
          objectives: ["O4"],
          title: "Bayyana matakai ga iyalai da kalmomi masu sauƙi",
          minutes: 5,
          goal: "Rubuta daftarin bayani mai sauƙi ga iyalai game da wani mataki na gama-gari a ilimi na musamman.",
          text: [
            "Takardun ilimi na musamman cike suke da kalmomin da iyalai ba za su sani ba: tantancewa (evaluation), cancanta (eligibility), matakin yanzu (present levels), muhalli mafi ƙarancin takurawa (least restrictive environment), da kariyar haƙƙoƙi (procedural safeguards). AI yana da kyau wajen rubuta daftarin bayani na gama-gari da kalmomi masu sauƙi game da waɗannan kalmomi da abin da ke faruwa a kowane mataki.",
            "Prompt: \"Explain to a parent, in plain English at about a 6th-grade reading level, what happens at an annual IEP meeting: who attends, what is discussed, what they can ask, and how to prepare. Warm and respectful tone. Under 400 words.\" (Ka bayyana wa iyaye abin da ke faruwa a taron IEP na shekara-shekara, da kalmomi masu sauƙi, cikin kalmomi ƙasa da 400.) Sannan ku kwatanta shi da hanyoyin gundumarku da kayan hukuma, domin AI yana iya bayyana tsarin wata jiha dabam ko ya yi kuskure a cikakkun bayanai.",
            "Ku bar su na gama-gari. Kada ku yi amfani da AI don rubuta komai game da wani yaro na musamman. Ku ba da fassarori da ƙwararrun masu magana da harshen suka duba, kuma ku tuna cewa sanarwar kariyar haƙƙoƙi ta hukuma ta gundumarku ita ce takardar doka; bayaninku yana taimaka wa iyalai su fahimce ta, ba ya maye gurbinta."
          ],
          steps: ["Ku zaɓi wani mataki ko kalma ta gama-gari da iyalai ke tambaya a kai.", "Ku nemi bayani da kalmomi masu sauƙi, kuna faɗin salon magana da tsawo.", "Ku kwatanta shi da hanyoyin gunduma da kayan hukuma.", "Ku bar shi na gama-gari: babu wani yaro na musamman.", "Ku ba da fassarori da aka duba; ku nuna sanarwar hukuma."],
          words: [["Kariyar haƙƙoƙi (procedural safeguards)", "haƙƙoƙin da iyaye ke da su a ilimi na musamman, wanda aka bayyana a sanarwar hukuma."], ["Muhalli mafi ƙarancin takurawa (least restrictive environment)", "ra'ayin IDEA cewa ɗalibai masu nakasa su yi karatu tare da takwarorinsu marasa nakasa gwargwadon yadda ya dace."]],
          slides: [
            { title: "Kalmomin aiki da iyalai ke haɗuwa da su", bullets: ["Tantancewa, cancanta, matakin yanzu", "Muhalli mafi ƙarancin takurawa", "Kariyar haƙƙoƙi (procedural safeguards)"] },
            { title: "Bayani na gama-gari", bullets: ["Kalmomi masu sauƙi, salo mai daɗi, gajere", "Wa ke halarta, me ke faruwa, yadda za a shirya", "Ku kwatanta da hanyoyin gunduma"] },
            { title: "Ku bar shi na gama-gari", bullets: ["Babu komai game da wani yaro na musamman", "Fassarori da aka duba", "Sanarwar hukuma ita ce takardar doka"] }
          ],
          tryIt: "Ku rubuta daftarin bayani mai shafi ɗaya da kalmomi masu sauƙi ga iyalai game da wani mataki na gama-gari a ilimi na musamman, ku kwatanta shi da kayan gundumarku, kuma ku sa abokin aiki ya karanta shi don duba salon magana.",
          youCanNow: "taimaka wa iyalai su fahimci matakan ilimi na musamman da bayani mai sarari da aka duba.",
          quickCheck: [
            { objective: "O4", q: "A kan me ya kamata bayanin iyalai da aka yi da AI ya kasance?", options: ["Tantancewar wani yaro na musamman", "Mataki na gama-gari, ba wani yaro na musamman ba", "Ra'ayin malami game da wani iyali", "Kasafin kuɗin gunduma"], answer: 1, why: "Bayanin iyalai yana zama na gama-gari don kada bayanan ɗalibi su shiga AI." },
            { objective: "O4", q: "Bayanin AI game da taron IEP na shekara-shekara ya bambanta da kayan gundumarku. Me za ku yi?", options: ["Ku raba na AI tunda ya fi sarari", "Ku raba duka biyun ku bar iyalai su zaɓa", "Ku tambayi AI wanne ne daidai", "Ku gyara shi ya yi daidai da hanyoyin gunduma kafin ku raba shi"], answer: 3, why: "Hanyoyin gunduma da sanarwar hukuma su ne majiya, ba AI ba." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kare bayanan IEP da 504",
          minutes: 5,
          goal: "Aiwatar da dokokin sirri kan bayanan ilimi na musamman da kayan AI.",
          text: [
            "IEP, shirye-shiryen 504, tantancewa, bayanan nakasa da rubuce-rubucen da suka shafe su suna cikin bayanan karatun ɗalibi (education records), wanda dokar FERPA (dokar sirrin bayanan ɗalibai ta Amurka) ke karewa, kuma suna cikin bayanan da suka fi muhimmanci a sirri da makaranta ke riƙe da su. Bayyana bayanan da ke gane ɗalibi daga cikinsu ga wani kamfani na waje yawanci yana buƙatar izini, sai dai idan wani keɓancewa ya shafa.",
            "Dokoki ga ma'aikata: kada ku taɓa liƙa abin da ke cikin IEP ko 504, sakamakon tantancewa, gano cuta (diagnosis), shirye-shiryen ɗabi'a ko sunaye a cikin kayan AI da ba a amince da su ba. Idan gundumarku ta amince da wani kayan AI don aikin ilimi na musamman, ku yi amfani da shi kamar yadda yarjejeniyar ta ba da dama kawai, kuma har yanzu ku yi amfani da ƙaramin bayani mafi ƙanƙanta da ake buƙata.",
            "Ku yi hankali da kayan AI masu rubuta bayanin taro da naɗar taron da ake yi game da ɗalibai: kada kayan da ba a amince da su ba su naɗa ko rubuta tarukan IEP. Daraktan ilimi na musamman da jami'in sirri na gundumarku za su iya faɗa muku abin da gundumarku da jiharku suka yarda da shi."
          ],
          steps: ["Ku ɗauki bayanan IEP, 504, tantancewa da nakasa a matsayin masu matuƙar muhimmanci a sirri.", "Kada ku taɓa sa su a kayan AI da ba a amince da su ba.", "Ku yi amfani da kayan da aka amince da su kamar yadda yarjejeniyar ta ba da dama kawai.", "Ku yi amfani da ƙaramin bayani mafi ƙanƙanta da ake buƙata.", "Babu naɗa ko rubutun AI da ba a amince da shi ba a tarukan ɗalibai."],
          words: [["Bayanan karatu (education record)", "bayanin da ya shafi ɗalibi kai tsaye kuma makaranta ke ajiye shi."], ["Bayanai masu muhimmanci a sirri", "bayanan da za su iya kawo babbar illa idan aka raba su, kamar bayanan nakasa ko lafiya."]],
          slides: [
            { title: "Cikin bayanan da suka fi muhimmanci a sirri", bullets: ["IEP, shirye-shiryen 504, tantancewa", "Gano cuta, shirye-shiryen ɗabi'a", "Dokar FERPA tana kare su"] },
            { title: "Dokoki ga ma'aikata", bullets: ["Kada a taɓa sa su a kayan AI da ba a amince da su ba", "Kayan da aka amince da su kamar yadda yarjejeniya ta ba da dama kawai", "Ƙaramin bayani mafi ƙanƙanta"] },
            { title: "Tarukan da suka shafi ɗalibai", bullets: ["Babu naɗa ko rubutun AI da ba a amince da shi ba", "Ku tambayi daraktanku da jami'in sirri"] }
          ],
          sources: [{ name: "FERPA: Protecting Student Privacy", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Ku rubuta misalai uku na gaske na bayanan ilimi na musamman da ma'aikata za su iya son liƙawa a AI, kuma ga kowanne, hanya mai aminci ta samun taimako iri ɗaya ba tare da shi ba.",
          youCanNow: "kare bayanan IEP, 504 da na nakasa idan ana amfani da kayan AI.",
          quickCheck: [
            { objective: "O5", q: "Wace doka ce ke kare IEP da bayanan tantancewa a matsayin bayanan karatu?", options: ["FERPA", "COPPA kaɗai", "Babu doka", "Dokar haƙƙin mallaka (copyright)"], answer: 0, why: "IEP da tantancewa bayanan karatu ne da FERPA ke karewa." },
            { objective: "O5", q: "Wani malami yana son AI ya sake rubuta shirin ɗabi'a don ya fi sarari. Wace hanya ce mai aminci?", options: ["Ku liƙa shirin a chatbot kyauta", "Ku cire sunan amma ku bar gano cutar", "Ku nemi taimako da misali na gama-gari na ƙirƙira, ko ku yi amfani da kayan da aka amince da shi kamar yadda yarjejeniya ta ba da dama", "Ku tura shi ta imel ga aboki mai amfani da AI"], answer: 2, why: "Shirye-shiryen ɗabi'a da gano cuta ba sa shiga kayan da ba a amince da su ba ko kaɗan." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Dokokin ƙungiya don AI a ilimi na musamman",
          minutes: 6,
          goal: "Rubuta dokokin ƙungiya biyar masu sarari kuma ku nuna yadda ake bin su tare da abokan aiki.",
          text: [
            "Ƙungiyarku tana buƙatar dokoki na bai ɗaya, a rubuce. Biyar da ke rufe yawancin yanayi: 1) AI ba ya taɓa rubutawa ko yanke abin da ke cikin IEP ko 504, cancanta ko wurin karatu. 2) Babu bayanan ɗalibi a kayan da ba a amince da su ba. 3) Ana duba daidaito da sauƙin amfani na kowane kayan da AI ya yi kafin ɗalibai su gani. 4) Tallafin AI ba ya taɓa maye gurbin tallafin da ake buƙata. 5) Bayanin iyalai na gama-gari ne, an kwatanta shi da kayan hukuma, kuma ƙwararrun masu magana da harshen ne ke fassara shi.",
            "Ku raba su a taron ƙungiya, tare da misalan abin da aka yarda da wanda ba a yarda da shi ba. Ku gayyaci tambayoyi daga mataimakan malamai da masu ba da hidimomin tallafi, waɗanda sau da yawa ake barin su a waje a jagororin AI.",
            "Ku tara prompts da kayan karatu masu kyau a babban fayil na bai ɗaya don lokacin da aka tanada ya amfani dukkan ƙungiya, kuma ku sake duba dokokin kowace shekara tare da daraktan ilimi na musamman."
          ],
          steps: ["Ku rubuta dokokin biyar da kalmomi masu sauƙi.", "Ku ƙara misali ga kowace doka.", "Ku raba su a taron ƙungiya, har da mataimakan malamai.", "Ku fara babban fayil na bai ɗaya na prompts da kayan karatu masu kyau.", "Ku sake duba su kowace shekara tare da daraktan ilimi na musamman."],
          words: [["Mataimakin malami (paraprofessional)", "ma'aikacin makaranta da ke tallafa wa ɗalibai da malamai, sau da yawa a ilimi na musamman."], ["Hidimomin tallafi (related services)", "tallafi kamar maganin magana, maganin ayyukan yau da kullum (occupational therapy) ko maganin jiki da ke taimaka wa ɗalibi ya amfana da ilimi na musamman."]],
          slides: [
            { title: "Dokokin ƙungiya biyar", bullets: ["1 Babu AI a hukunce-hukuncen IEP ko 504", "2 Babu bayanan ɗalibi a kayan da ba a amince da su ba", "3 Ku duba daidaito da sauƙin amfani", "4 Tallafin da ake buƙata yana nan; 5 An duba rubutun iyalai"] },
            { title: "Ku raba su da kyau", bullets: ["Misalan abin da aka yarda da wanda ba a yarda ba", "Ku haɗa mataimakan malamai da masu ba da magani"] },
            { title: "Ku raba amfanin", bullets: ["Babban fayil na bai ɗaya na prompts da kayan karatu", "Ku sake duba kowace shekara"] }
          ],
          tryIt: "Aikin ƙarshe: ku gina kunshin kayan sauƙin amfani (karatu mai kalmomi masu sauƙi, jerin dubawa kashi-kashi, jadawalin hotuna, atisaye a matakai biyu), ku rubuta bayaninku mai shafi ɗaya ga iyalai, ku duba komai, sannan ku rubuta dokokin AI biyar na ƙungiyarku tare da misali ga kowace.",
          youCanNow: "amfani da AI don sa kayan ilimi na musamman su fi sauƙin amfani yayin da kuke kare ɗalibai kuma hukunce-hukunce suna hannun ƙungiya.",
          quickCheck: [
            { objective: "O6", q: "Wane ne ke da kalmar ƙarshe kan dokokin ilimi na musamman na gundumarku?", options: ["Kamfanin AI", "Daraktan ilimi na musamman da lauyan gunduma", "Kowane malami", "Ƙungiyar iyaye"], answer: 1, why: "Shugabannin gunduma da lauya ne ke yanke yadda dokoki suke aiki a wurinku." },
            { objective: "O6", q: "Kun rubuta dokokin AI biyar. Ta yaya za ku taimaki dukkan ƙungiya su yi amfani da su?", options: ["Ku raba su da malamai, mataimakan malamai da masu ba da hidimomin tallafi, tare da misalai", "Ku tura su ta imel ga shugabannin makaranta kawai", "Ku ajiye su a fayilolinku", "Ku saka su sau ɗaya kuma kada ku sake duba su"], answer: 0, why: "Duk wanda ke aiki da ɗalibai yana buƙatar dokokin da misalai." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Iyalai, sirri da dokokin ƙungiya",
        questions: [
          { objective: "O4", q: "AI ya rubuta daftarin bayani ga iyalai game da tsarin IEP. Kafin ku raba shi, ya kamata ku:", options: ["Tura shi kamar yadda yake", "Ƙara sunan ɗalibi", "Kwatanta shi da hanyoyin gundumarku da kayan hukuma", "Cire dukkan kanun bayani"], answer: 2, why: "AI yana iya bayyana tsarin wata jiha dabam ko ya yi kuskure a cikakkun bayanai." },
          { objective: "O4", q: "Wace takarda ce ke zama bayanin doka na haƙƙoƙin iyaye?", options: ["Sanarwar kariyar haƙƙoƙi ta hukuma ta gunduma", "Bayaninku na AI", "Jaridar makaranta", "Saƙon tes"], answer: 0, why: "Bayanin yana taimaka wa iyalai su fahimci sanarwar hukuma." },
          { objective: "O5", q: "Wani malami yana son AI ya taƙaita rahoton tantancewar ɗalibi a kayan aiki kyauta. Mafi kyawun amsa?", options: ["Ku ci gaba", "A'a: sakamakon tantancewa bayanan karatu ne masu muhimmanci a sirri; kada ku yi amfani da kayan da ba a amince da su ba", "Shafin farko kawai", "Sai idan yana kama da ba a san ko wane ne ba"], answer: 1, why: "Tantancewa an kare ta kuma tana da matuƙar muhimmanci a sirri." },
          { objective: "O5", q: "Shin kayan AI mai rubuta bayanin taro da ba a amince da shi ba zai naɗa taron IEP?", options: ["A'a", "E, yana tanadin lokaci", "Rabin taron kawai", "Sai idan kamfanin ya yarda"], answer: 0, why: "Kada kayan da ba a amince da su ba su naɗa tarukan ɗalibai." },
          { objective: "O6", q: "Su wane ne ya kamata a haɗa idan ana raba dokokin AI na ƙungiya?", options: ["Malamai kawai", "Kamfanoni kawai", "Shugaban makaranta kawai", "Malamai, mataimakan malamai da masu ba da hidimomin tallafi"], answer: 3, why: "Duk wanda ke tallafa wa ɗalibai yana buƙatar dokokin." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Ilimi na Musamman",
    questions: [
      { objective: "O1", q: "IDEA tana tabbatar wa yaran da suka cancanta masu nakasa da:", options: ["Kwamfutar tafi-da-gidanka kyauta", "Ilimin jama'a kyauta wanda ya dace", "Kuɗin makarantar kuɗi", "Koyarwar AI"], answer: 1, why: "FAPE shi ne babban alƙawarin IDEA." },
      { objective: "O1", q: "Part B na IDEA yana rufe yaran da suka cancanta masu shekaru:", options: ["13 zuwa 18 kawai", "Daga haihuwa zuwa 2 kawai", "3 zuwa 21", "Manya kawai"], answer: 2, why: "Part B yana hidima ga shekaru 3 zuwa 21; Part C yana hidima ga jarirai da ƙananan yara." },
      { objective: "O1", q: "Wane ne ke shirya IEP?", options: ["Shugaban makaranta shi kaɗai", "Kayan AI", "Ƙungiya mai iyaye da ma'aikatan makaranta", "Wani kamfani"], answer: 2, why: "IEP hukuncin ƙungiya ne." },
      { objective: "O1", q: "Shirin Section 504 yana ba da:", options: ["Tallafi ga ɗalibi mai nakasa a ƙarƙashin wata dokar tarayya dabam", "Maki", "Tafiyar karatu", "Lasisin kayan aiki"], answer: 0, why: "504 hanya ce dabam da IDEA." },
      { objective: "O2", q: "Wanne ne aiki mai kyau ga AI?", options: ["Zaɓar wurin karatu", "Rubuta manufofin IEP", "Yanke cancanta", "Sigar kalmomi masu sauƙi ta karatu na gama-gari"], answer: 3, why: "Gyara kayan karatu na gama-gari amfani ne mai aminci." },
      { objective: "O2", q: "Kalmomi masu sauƙi suna nufin:", options: ["Ƙarancin ra'ayoyi", "Gajerun jimloli da kalmomin yau da kullum, ra'ayoyi iri ɗaya", "Babu kalmomin darasi", "Rage abin da ake tsammani"], answer: 1, why: "Ƙaramin nauyin karatu, manufar koyo iri ɗaya." },
      { objective: "O2", q: "Raba aiki kashi-kashi yana nufin:", options: ["Ba shi maki", "Ƙara tsawonsa", "Cire shi", "Raba shi zuwa ƙananan matakai masu lamba"], answer: 3, why: "Ƙananan matakai suna sa ayyuka su zama masu sauƙin yi." },
      { objective: "O2", q: "Bayan AI ya sauƙaƙa rubutu, ku duba cewa:", options: ["Yana da ƙarin hotuna", "Ya fi tsawo", "Ba a cire ko canja wani muhimmin bayani ba", "Yana kama da harshen ofis"], answer: 2, why: "Sauƙaƙawa na iya kawo kurakurai." },
      { objective: "O3", q: "Jadawalin hotuna yana nuna:", options: ["Abin da zai faru, bi da bi, da hotuna da kalmomi", "Hanyoyin motar makaranta", "Katunan sakamako", "Albashin ma'aikata"], answer: 0, why: "Yana taimaka wa ɗalibai su san abin da ke biye." },
      { objective: "O3", q: "Text-to-speech:", options: ["Yana rubuta maƙaloli", "Yana karanta rubutu da babbar murya", "Yana ba da maki", "Yana fassara magana"], answer: 1, why: "Yana tallafa wa ɗaliban da ke amfana da jin rubutu." },
      { objective: "O3", q: "Atisaye mai ƙarin tallafi zai iya haɗawa da:", options: ["Misalin da aka warware da bankin kalmomi", "Ƙarancin ra'ayoyi", "Jarabawa mafi wuya", "Babu umarni"], answer: 0, why: "Matakan tallafi suna taimaka wa ɗalibai su kai ga ƙwarewa iri ɗaya." },
      { objective: "O3", q: "Tallafin IEP da ake buƙata:", options: ["Yana aiki a jarabawa kawai", "Kayan AI za su iya maye gurbinsa", "Na zaɓi ne", "Dole ne a ba da shi kamar yadda aka rubuta"], answer: 3, why: "Doka ce ta buƙace shi." },
      { objective: "O4", q: "Bayanin iyalai ya kamata ya zama:", options: ["Game da ɗalibi ɗaya mai suna", "Na gama-gari, ba game da wani yaro na musamman ba", "Da Turanci kawai", "Ana turawa ba tare da dubawa ba"], answer: 1, why: "Ku hana bayanan ɗalibi shiga AI." },
      { objective: "O4", q: "Fassarori ga iyalai ya kamata su zama:", options: ["An tsallake su", "Abin da AI ya rubuta ba tare da dubawa ba", "Ƙwararrun masu magana da harshen sun duba su", "Ɗalibai ne suka yi su"], answer: 2, why: "Iyalai suna buƙatar bayanai daidai." },
      { objective: "O5", q: "IEP da tantancewa suna samun kariya daga:", options: ["Babu doka", "Dokar haƙƙin mallaka kaɗai", "FERPA", "Dokar hanya"], answer: 2, why: "Bayanan karatu ne." },
      { objective: "O5", q: "Gano cuta da shirye-shiryen ɗabi'a a kayan AI da ba a amince da shi ba:", options: ["Ba a taɓa yarda ba", "Ba laifi idan gajere ne", "Ba laifi a ƙarshen mako", "Dole ne"], answer: 0, why: "Suna da matuƙar muhimmanci a sirri." },
      { objective: "O5", q: "Da kayan AI da aka amince da shi don ilimi na musamman, ya kamata ma'aikata su:", options: ["Tsallake dubawa", "Ɗora komai", "Raba bayanan shiga asusu", "Yi amfani da shi kamar yadda yarjejeniya ta ba da dama kawai, da ƙaramin bayani mafi ƙanƙanta"], answer: 3, why: "Yarjejeniya da rage bayanai har yanzu suna aiki." },
      { objective: "O1", q: "Muhalli mafi ƙarancin takurawa yana nufin ɗalibai masu nakasa suna karatu:", options: ["Su kaɗai koyaushe", "Tare da takwarorinsu marasa nakasa gwargwadon yadda ya dace", "Ta intanet kawai", "A gida kawai"], answer: 1, why: "Babban ra'ayi ne na IDEA." },
      { objective: "O6", q: "Wane ne ke da kalmar ƙarshe kan dokokin ilimi na musamman na gundumarku?", options: ["Ɗalibi", "Chatbot", "Wani kamfani", "Daraktan ilimi na musamman da lauyan gunduma"], answer: 3, why: "Ƙwararrun mutane ne ke yanke hukunci." },
      { objective: "O6", q: "Babban fayil na bai ɗaya na prompts da kayan karatu masu kyau yana taimakawa:", options: ["Raba bayanan ɗalibai", "Ɓoye kayan karatu", "Lokacin da aka tanada ya kai ga dukkan ƙungiya", "Maye gurbin ƙungiyar IEP"], answer: 2, why: "Rabawa yana ninka amfanin." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      4,
      6,
      7,
      8,
      11,
      12,
      15,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Karatu mai kalmomi masu sauƙi da matakai kashi-kashi",
        objective: "O2",
        notYet: "An cire ko an canja wani bayani, ko ba a raba aikin kashi-kashi ba.",
        meets: "Sigar kalmomi masu sauƙi da jerin dubawa mai matakai masu lamba, an kwatanta su da na asali.",
        exceeds: "Ya rubuta kurakuran da AI ya yi da yadda aka gyara su."
      },
      {
        name: "Jadawalin hotuna da atisaye",
        objective: "O3",
        notYet: "Jadawalin ko wani matakin atisaye ya ɓace, ko ba a duba amsoshi ba.",
        meets: "Jadawalin hotuna da atisaye a matakai biyu, an duba kowace amsa.",
        exceeds: "Kowane hoto yana da alt text, kuma akwai tallafi kamar misalan da aka warware ko bankin kalmomi."
      },
      {
        name: "Bayani ga iyalai",
        objective: "O4",
        notYet: "Game da wani yaro na musamman ne, ko ba a kwatanta shi da kayan gunduma ba.",
        meets: "Bayani mai shafi ɗaya da kalmomi masu sauƙi game da mataki na gama-gari, an duba daidaitonsa.",
        exceeds: "Abokin aiki ya karanta shi don duba salon magana, kuma yana nuna wa iyalai sanarwar kariyar haƙƙoƙi ta hukuma."
      },
      {
        name: "Babu bayanan ɗalibi",
        objective: "O5",
        notYet: "Akwai bayanin ɗalibi a cikin kunshin ko prompts.",
        meets: "Dukkan kunshin yana amfani da kayan gama-gari ko na ƙirƙira kawai.",
        exceeds: "Ya haɗa da hanyoyi masu aminci na samun taimakon AI ba tare da raba bayanan ɗalibi ba."
      },
      {
        name: "Dokokin ƙungiya",
        objective: "O6",
        notYet: "Dokoki ƙasa da biyar, ko dokokin da ke bar AI ya yanke abin da ke cikin IEP ko 504.",
        meets: "Dokoki biyar masu sarari na amfani da AI a ilimi na musamman.",
        exceeds: "Kowace doka tana da misali kuma tana barin kowane hukunci na IEP da 504 a hannun ƙungiya."
      }
    ]
  },
  evaluation: {
    results: [
      "Malaman da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Malaman da suka ce sun yi amfani da kayan sauƙin amfani da AI ya yi a darasi cikin kwanaki 30 (binciken biyo baya)",
      "Ƙungiyoyin ilimi na musamman da suka ɗauki rubutattun dokokin AI cikin kwanaki 60 (binciken biyo baya)",
      "Rahotannin bayanan ɗalibi da aka sa a kayan da ba a amince da su ba (manufa: babu ko ɗaya)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai intanet da mataimakin AI da gunduma ta amince da shi",
      "Karatu da aiki na gama-gari daga darasi mai zuwa (babu bayanan ɗalibi)",
      "Kayan hukuma na gundumarku ga iyalai da sanarwar kariyar haƙƙoƙi",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku raba ayyukan \"AI zai iya taimakawa\" da \"ƙungiya kaɗai\" a matsayin ƙungiya.",
      "Ku yi amfani da kayan ƙirƙira ko na gama-gari kawai; kada ku taɓa liƙa IEP, shirye-shiryen 504, tantancewa ko shirye-shiryen ɗabi'a a kayan da ba a amince da su ba.",
      "Ku tunatar da mahalarta cewa kwas ɗin ba shawarar lauya ba ne; ku gayyaci daraktan ilimi na musamman ya duba dokokin ƙungiya.",
      "Ku sa abokan aiki su karanta bayanin iyalai na juna don duba salon magana da daidaito.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku duba cewa babu bayanin ɗalibi a ko'ina a cikin kunshin."
    ]
  }
};

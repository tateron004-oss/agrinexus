"use strict";

// Koach Learn course (Swahili translation of shared/data-science-beginners.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const COLAB = { name: "Google Colab: Maswali Yanayoulizwa Mara kwa Mara", url: "https://research.google.com/colaboratory/faq.html" };
const PANDAS = { name: "pandas: pandas kwa dakika 10", url: "https://pandas.pydata.org/docs/user_guide/10min.html" };
const SEABORN = { name: "seaborn: load_dataset", url: "https://seaborn.pydata.org/generated/seaborn.load_dataset.html" };

module.exports = {
  id: "data-science-beginners-sw",
  lang: "sw",
  translationOf: "data-science-beginners",
  category: "Youth",
  name: "Utangulizi wa Sayansi ya Data na Uchambuzi wa Data",
  skills: "Kuuliza swali ambalo data inaweza kujibu, Kupata wastani na kutambua thamani zisizo za kawaida, Kupakia data kwa pandas, Kusafisha na kupanga data katika makundi, Kutengeneza chati na kushiriki matokeo",
  outcome: "kuchukua data halisi katika Google Colab, kuipakia kwa pandas, kuisafisha, kujibu swali lililo wazi kwa wastani na makundi, kutengeneza chati, na kuandika matokeo matatu ya kweli.",
  about: [
    "Wachambuzi wa data hugeuza safu za namba kuwa majibu ambayo watu wanaweza kuyatumia: siku gani duka lina wateja wengi zaidi, zoezi gani linasaidia timu zaidi, pesa za programu zinakwenda wapi. Ni moja ya ujuzi wa kazi wenye manufaa zaidi leo, na unaweza kuanza bure.",
    "Sura ya 1 inafundisha jinsi ya kufikiri bila code: kuuliza swali zuri, kuijua data yako, na kutumia wastani bila kudanganywa. Sura ya 2 inahamia Google Colab, tovuti ya bure inayoendesha Python, ambapo unatumia pandas, zana maarufu zaidi ya data katika Python, juu ya data halisi ya mgahawa.",
    "Kila somo linachukua kama dakika tano na linaisha kwa kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Katika Google Colab, pakia data ya bakshishi (tips) ya mgahawa kwa pandas, ikague kama ina thamani zinazokosekana, ongeza safu wima ya bakshishi kama asilimia ya bili, tafuta wastani wa asilimia ya bakshishi kwa kila siku na kwa mchana (Lunch) dhidi ya jioni (Dinner), tengeneza chati ya pau ya mojawapo, na uandike matokeo matatu kwa sentensi rahisi, pamoja na jambo moja ambalo data haiwezi kukuambia.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana na watu wazima wanaoanza kujifunza data: wanafunzi wa sekondari na chuo, wanachama wa programu za vijana, makocha, wafanyakazi wa biashara ndogo na mashirika yasiyo ya faida, na watu wanaobadilisha kazi wanaotafuta kazi za uchambuzi wa data.",
    startingPoint: "Wanaweza kutumia kompyuta na kivinjari cha wavuti na wameandika Python kidogo. Wengi hutumia spreadsheet lakini hawajawahi kupakia data kwa pandas, kuikagua kama ina thamani zinazokosekana, kulinganisha makundi, au kuandika matokeo yanayotaja mipaka yake.",
    gap: "Timu, shule, biashara na mashirika yasiyo ya faida hufanya maamuzi kwa kutumia data, na uchambuzi wa data ni njia ya kawaida ya kuingia katika kazi za teknolojia. Bila hatua za msingi, watu hujibu swali lisilo sahihi, hudanganywa na thamani zisizo za kawaida au uhusiano, au hushiriki chati na madai ambayo data haiwezi kuyathibitisha.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; maneno kama DataFrame, median, thamani isiyo ya kawaida (outlier) na uhusiano (correlation) yanaelezwa",
      "Vifaa: kompyuta au laptop yenye kivinjari cha wavuti",
      "Akaunti na gharama: akaunti ya Google ya bure kwa Google Colab; pandas na seaborn tayari zimesakinishwa",
      "Muda: kama dakika 5 hadi 6 kwa somo pamoja na mazoezi, kama dakika 60 hadi 75 kwa jumla",
      "Hesabu: wastani na asilimia tu"
    ],
    prerequisites: "Utangulizi wa Kuandika Programu kwa Python."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa swali halisi, kama la kocha au la duka", action: "kuorodhesha hatua tano za mradi wa data kwa mpangilio na kulinganisha kila moja na mfano", standard: "hatua zote tano (Uliza, Pata, Safisha, Chunguza, Shiriki) zikiwa katika mpangilio sahihi" },
    { id: "O2", condition: "Ukipewa jedwali la data na swali", action: "kueleza kila safu wima inabeba nini na ni ya aina gani, na kukagua kama data inaweza kujibu swali", standard: "ukitaja kwa usahihi safu wima za namba na za makundi, na ukisema wazi swali lisipoweza kujibiwa" },
    { id: "O3", condition: "Ukipewa orodha fupi ya namba au dai kuhusu mambo mawili", action: "kukokotoa wastani (mean) na median, kutambua thamani yoyote isiyo ya kawaida, na kukagua kama dai linachanganya uhusiano na kisababishi", standard: "mean na median zikiwa sahihi na kila mchanganyiko wa uhusiano na kisababishi ukitajwa" },
    { id: "O4", condition: "Katika Google Colab ukitumia pandas", action: "kupakia data katika DataFrame na kueleza safu zake, safu wima zake na aina zake", standard: "ukitumia head(), shape, info() na describe() na kuripoti matokeo kwa usahihi" },
    { id: "O5", condition: "Ukipewa DataFrame iliyopakiwa", action: "kukagua thamani zinazokosekana, kuongeza safu wima iliyokokotolewa, kuchuja safu na kulinganisha makundi", standard: "code ya kila hatua ikifanya kazi na usafishaji wowote ukiandikwa" },
    { id: "O6", condition: "Ukipewa matokeo ya makundi yako", action: "kutengeneza chati ya pau yenye kichwa na kuandika matokeo yanayotaja mipaka yake", standard: "kwa namba kutoka matokeo yako mwenyewe na angalau mpaka mmoja wa kweli" }
  ],
  chapters: [
    {
      name: "Sura 1: Kufikiri kama mchambuzi wa data",
      lessons: [
        {
          objectives: ["O1"],
          title: "Sayansi ya data ni nini, na hatua tano",
          minutes: 4,
          goal: "Taja hatua tano za mradi wa data na uzilinganishe na mfano halisi.",
          text: [
            "Sayansi ya data ni kutumia data kujibu maswali na kufanya maamuzi bora. Uchambuzi wa data ni sehemu ya kazi ya mikono: kusafisha, kuhesabu, kulinganisha na kuchora chati.",
            "Karibu kila mradi unafuata hatua tano. Uliza: unataka kujua nini? Pata: tafuta data. Safisha: rekebisha makosa na mapengo. Chunguza: hesabu, tafuta wastani, linganisha na chora chati. Shiriki: waambie watu ulichogundua kwa maneno rahisi.",
            "Mfano: kocha wa timu ya mpira wa miguu ya vijana anauliza \"Je, tunafunga mabao zaidi katika kipindi cha pili?\" Anapata matokeo ya kila mechi, anaondoa mechi moja iliyoahirishwa, anajumlisha mabao ya kipindi cha kwanza na cha pili, na anaishirikisha timu chati rahisi."
          ],
          steps: ["Uliza swali lililo wazi.", "Pata data.", "Isafishe.", "Ichunguze kwa kuhesabu, wastani na chati.", "Shiriki ulichogundua."],
          words: [["Data", "taarifa na namba zilizokusanywa kuhusu kitu fulani."], ["Sayansi ya data", "kutumia data kujibu maswali na kuongoza maamuzi."], ["Uchambuzi wa data", "kusafisha, kufupisha na kuchora chati za data ili kupata majibu."], ["Seti ya data (dataset)", "mkusanyiko wa data, kwa kawaida jedwali."]],
          slides: [
            { title: "Sayansi ya data ni", bullets: ["Kutumia data kujibu maswali", "Na kufanya maamuzi bora"] },
            { title: "Hatua tano", bullets: ["Uliza, Pata, Safisha", "Chunguza, Shiriki"] },
            { title: "Mfano: kocha wa mpira", bullets: ["Uliza: mabao zaidi katika kipindi cha pili?", "Pata na safisha matokeo ya mechi", "Chunguza na shiriki chati rahisi"] }
          ],
          tryIt: "Fikiria swali moja kutoka maisha yako, kazi yako au jamii yako ambalo data inaweza kujibu (kwa mfano \"Ni siku gani ninatumia pesa nyingi zaidi?\"). Andika ungefanya nini katika kila moja ya hatua tano.",
          youCanNow: "kueleza hatua tano za mradi wa data na kupanga mmoja.",
          quickCheck: [
            { objective: "O1", q: "Nini kinafanyika katika hatua ya Safisha ya mradi wa data?", options: ["Unauliza swali", "Unarekebisha makosa na mapengo katika data", "Unashiriki chati", "Unakusanya data zaidi"], answer: 1, why: "Safisha ni kurekebisha makosa na mapengo kabla ya kuchunguza." },
            { objective: "O1", q: "Mwenye duka anauliza, \"Ni siku gani tunauza zaidi?\" Ungefanya nini mara baada ya hatua hii ya Uliza?", options: ["Kutengeneza chati", "Kuandika matokeo", "Kupata wastani wa siku za wiki", "Kupata data ya mauzo yenye tarehe"], answer: 3, why: "Baada ya Uliza inakuja Pata: tafuta data inayoweza kujibu swali." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuijua data yako: safu, safu wima na aina",
          minutes: 5,
          goal: "Soma jedwali la data na useme kila safu wima inabeba nini na ni ya aina gani.",
          text: [
            "Data nyingi huja kama jedwali. Data nadhifu (tidy data) ina maana kwamba kila safu ni kitu kimoja ulichopima (mechi moja, mauzo moja, mtu mmoja) na kila safu wima ni taarifa moja kuhusu kitu hicho (tarehe, kiasi, timu).",
            "Safu wima zina aina. Namba unaweza kuzifanyia hesabu, kama bei au dakika. Makundi ni vikundi, kama siku ya wiki au jina la timu: unayahesabu, lakini huyatafutii wastani. Tarehe ni aina yake peke yake.",
            "Maswali mazuri yanalingana na data uliyo nayo. \"Wastani wa mauzo siku za Jumamosi ni kiasi gani?\" unahitaji safu wima ya kiasi cha mauzo na safu wima ya siku. Kama data haina hizo, huwezi kujibu, na kusema hivyo ni sehemu ya kazi."
          ],
          steps: ["Sema safu moja inawakilisha nini.", "Orodhesha kila safu wima na maana yake.", "Weka alama kwa kila safu wima: namba, kundi au tarehe.", "Kagua kama swali lako linaweza kujibiwa kwa safu wima hizi."],
          words: [["Safu (row)", "rekodi moja: kitu kimoja ulichopima."], ["Safu wima (column)", "taarifa moja iliyorekodiwa kwa kila safu."], ["Data nadhifu (tidy data)", "safu moja kwa kila kitu, safu wima moja kwa kila taarifa."], ["Ya namba (numeric)", "safu wima ya namba unazoweza kuzifanyia hesabu."], ["Ya makundi (categorical)", "safu wima ya vikundi au lebo, kama siku au timu."]],
          slides: [
            { title: "Data nadhifu", bullets: ["Kila safu: kitu kimoja kilichopimwa", "Kila safu wima: taarifa moja kuhusu kitu hicho"] },
            { title: "Aina za safu wima", bullets: ["Namba: bei, dakika", "Makundi: siku, timu", "Tarehe"] },
            { title: "Linganisha swali na data", bullets: ["Swali linahitaji safu wima sahihi", "Safu wima ikikosekana = huwezi kujibu", "Sema hivyo kwa uaminifu"] }
          ],
          tryIt: "Tengeneza jedwali dogo la siku zako 7 zilizopita: tarehe, siku ya wiki, saa za usingizi na hali ya moyo kutoka 1 hadi 5. Weka lebo kwa kila safu wima kama namba, kundi au tarehe, na uandike swali moja ambalo jedwali linaweza kujibu na moja ambalo haliwezi.",
          youCanNow: "kusoma jedwali, kutaja aina ya kila safu wima na kukagua kama swali linalingana na data.",
          quickCheck: [
            { objective: "O2", q: "Safu wima ya makundi (categorical) ni nini?", options: ["Safu wima ya bei", "Safu wima ya tarehe tu", "Safu wima ya vikundi, kama jina la timu au siku ya wiki", "Safu wima ya wastani"], answer: 2, why: "Makundi ni vikundi unavyohesabu, si vya kutafutia wastani." },
            { objective: "O2", q: "Jedwali lako la mauzo lina safu wima za kiasi na siku lakini halina saa ya siku. Mtu anauliza kama asubuhi kunauzwa zaidi. Ungesema nini?", options: ["Data haiwezi kujibu hilo, kwa sababu hakuna safu wima ya saa", "Asubuhi kunauzwa zaidi", "Tafuta wastani wa safu wima ya siku", "Kisia kutoka kwa viasi"], answer: 0, why: "Kama data haina taarifa hiyo, huwezi kujibu, na kusema hivyo ni sehemu ya kazi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Wastani, thamani zisizo za kawaida na kutodanganywa",
          minutes: 6,
          goal: "Pata mean na median, tambua thamani isiyo ya kawaida, na epuka kosa la kawaida.",
          text: [
            "Mean (wastani) ni jumla ikigawanywa kwa idadi ya vitu. Median ni thamani ya katikati unapozipanga namba. Kwa 3, 4, 4, 5 na 34 mean ni 50 / 5 = 10, lakini median ni 4.",
            "Ile 34 ni thamani isiyo ya kawaida (outlier): thamani iliyo mbali na nyingine. Huenda ni kosa la kuandika, au huenda ni ya kweli na muhimu. Thamani hizi zinavuta mean sana lakini hazisogezi median karibu kabisa, kwa hiyo zikiwepo, median mara nyingi inaeleza thamani ya kawaida vizuri zaidi.",
            "Mambo mawili yanapobadilika pamoja huitwa uhusiano (correlation), lakini hiyo haithibitishi kwamba moja linasababisha jingine. Mauzo ya aiskrimu na kuungua kwa jua yote huongezeka wakati wa joto: jua linasababisha yote mawili. Kabla ya kudai kisababishi, tafuta sababu nyingine."
          ],
          steps: ["Panga namba kwa mpangilio.", "Mean: zijumlishe na ugawanye kwa idadi yake.", "Median: chukua ya katikati (au wastani wa zile mbili za katikati).", "Tafuta thamani zilizo mbali na nyingine na ukague kama ni makosa.", "Kabla ya kusema \"X inasababisha Y\", tafuta maelezo mengine."],
          words: [["Mean (wastani)", "jumla ikigawanywa kwa idadi."], ["Median", "thamani ya katikati namba zikipangwa."], ["Thamani isiyo ya kawaida (outlier)", "thamani iliyo mbali na nyingine."], ["Uhusiano (correlation)", "mambo mawili yanayoelekea kubadilika pamoja."], ["Kisababishi (causation)", "jambo moja kweli kusababisha jingine litokee."]],
          slides: [
            { title: "Mean na median", bullets: ["Mean: jumla / idadi", "Median: thamani ya katikati baada ya kupanga", "3, 4, 4, 5, 34: mean 10, median 4"] },
            { title: "Thamani zisizo za kawaida", bullets: ["Ziko mbali na thamani nyingine", "Kosa la kuandika, au ya kweli na muhimu", "Zinavuta mean, si median"] },
            { title: "Uhusiano si kisababishi", bullets: ["Aiskrimu na kuungua kwa jua huongezeka pamoja", "Jua linasababisha yote mawili", "Kwanza tafuta sababu nyingine"] }
          ],
          tryIt: "Hapa kuna muda 7 wa kufikisha mizigo kwa dakika: 22, 25, 19, 24, 95, 21, 23. Pata mean na median kwa mkono, taja thamani isiyo ya kawaida, na uandike namba ipi inaeleza vizuri zaidi muda wa kawaida wa kufikisha na kwa nini. (Mean ni kama 32.7, median ni 23.)",
          youCanNow: "kukokotoa mean na median, kutambua thamani zisizo za kawaida na kuepuka kuchanganya uhusiano na kisababishi.",
          quickCheck: [
            { objective: "O3", q: "Mean ya 2, 4, 6 na 8 ni ipi?", options: ["5", "4", "6", "20"], answer: 0, why: "2 + 4 + 6 + 8 = 20, na 20 / 4 = 5." },
            { objective: "O3", q: "Muda wa kusubiri basi wiki hii ulikuwa dakika 5, 6, 5, 7 na 60. Ungeripoti namba ipi kama muda wa kawaida wa kusubiri?", options: ["Mean, 16.6", "Kubwa zaidi, 60", "Median, 6", "Jumla, 83"], answer: 2, why: "60 ni thamani isiyo ya kawaida inayovuta mean juu; median inaonyesha muda wa kawaida wa kusubiri." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kufikiri kama mchambuzi wa data",
        questions: [
          { objective: "O1", q: "Hatua ya kwanza ya mradi wa data ni ipi?", options: ["Kutengeneza chati", "Kufuta thamani zisizo za kawaida", "Kuuliza swali lililo wazi", "Kushiriki matokeo"], answer: 2, why: "Swali lililo wazi linaongoza kila hatua nyingine." },
          { objective: "O2", q: "Katika jedwali la mechi, \"jina la timu\" ni safu wima ya aina gani?", options: ["Ya makundi (categorical)", "Ya namba (numeric)", "Tarehe", "Thamani isiyo ya kawaida"], answer: 0, why: "Majina ya timu ni vikundi, si namba." },
          { objective: "O3", q: "Median ya 2, 9, 3, 7, 5 ni ipi?", options: ["3", "5", "5.2", "7"], answer: 1, why: "Zikipangwa: 2, 3, 5, 7, 9. Thamani ya katikati ni 5." },
          { objective: "O3", q: "Nyumba moja katika orodha ina bei mara kumi zaidi ya nyingine. Ipi inaeleza vizuri zaidi nyumba ya kawaida?", options: ["Mean", "Median", "Bei ya juu zaidi", "Jumla"], answer: 1, why: "Median haivutwi sana na thamani moja kubwa isiyo ya kawaida." },
          { objective: "O3", q: "Watoto wanaocheza michezo zaidi hupata alama bora shuleni. Ni nini HUPASWI kuhitimisha mara moja?", options: ["Kwamba mambo hayo mawili yanabadilika pamoja", "Kwamba michezo inasababisha alama bora", "Kwamba data zaidi inaweza kusaidia", "Kwamba kunaweza kuwa na sababu nyingine"], answer: 1, why: "Uhusiano peke yake hauthibitishi kisababishi." }
        ]
      }
    },
    {
      name: "Sura 2: Kuchambua data kwa Python",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kupakia na kuangalia data kwa pandas",
          minutes: 5,
          goal: "Pakia data katika DataFrame ya pandas ndani ya Colab na uieleze.",
          text: [
            "pandas ni maktaba (library) ya bure ya Python ya kufanya kazi na majedwali, na tayari iko ndani ya Google Colab. Jedwali katika pandas linaitwa DataFrame, kwa kawaida linapewa jina df.",
            "Kwa mazoezi tunatumia data halisi ya mgahawa yenye milo 244 inayokuja na seaborn, maktaba ya chati: df = sns.load_dataset(\"tips\"). Inahitaji intaneti, ambayo Colab inayo. Safu wima zake ni pamoja na total_bill (bili yote), tip (bakshishi), day (siku), time (Lunch au Dinner) na size (watu mezani). Kwa data yako mwenyewe, pd.read_csv(\"file.csv\") inapakia faili ya CSV unayopakia.",
            "Amri nne zinakuonyesha ulicho nacho: df.head() inaonyesha safu tano za kwanza, df.shape inatoa idadi ya safu na safu wima, df.info() inaorodhesha aina ya kila safu wima, na df.describe() inatoa idadi, mean, ndogo zaidi, kubwa zaidi na zaidi kwa safu wima za namba."
          ],
          steps: ["Katika notebook mpya ya Colab endesha: import pandas as pd na import seaborn as sns", "Pakia: df = sns.load_dataset(\"tips\")", "Angalia: df.head()", "Ukubwa na aina: df.shape na df.info()", "Muhtasari: df.describe()"],
          words: [["pandas", "maktaba ya bure ya Python ya kufanya kazi na majedwali ya data."], ["DataFrame", "jedwali katika pandas, lenye safu na safu wima zenye majina."], ["CSV", "faili ya maandishi ya kawaida ya jedwali, yenye koma kati ya thamani."], ["head()", "inaonyesha safu za kwanza za DataFrame."], ["describe()", "inatoa namba za muhtasari kwa kila safu wima ya namba."]],
          slides: [
            { title: "pandas na DataFrame", bullets: ["pandas: zana ya majedwali ya Python", "Jedwali ni DataFrame, mara nyingi huitwa df", "Tayari iko ndani ya Google Colab"] },
            { title: "Pakia data", bullets: ["df = sns.load_dataset(\"tips\")", "Faili yako mwenyewe: pd.read_csv(\"file.csv\")"] },
            { title: "Angalia kabla ya kuchambua", bullets: ["df.head(): safu za kwanza", "df.shape na df.info(): ukubwa na aina", "df.describe(): namba za muhtasari"] }
          ],
          sources: [PANDAS, SEABORN, COLAB],
          tryIt: "Pakia data ya tips katika Colab. Andika ina safu ngapi na safu wima ngapi, safu wima zipi ni namba na zipi ni makundi, na mean na thamani kubwa zaidi ya total_bill kutoka df.describe().",
          youCanNow: "kupakia data kwa pandas na kueleza ukubwa wake, safu wima zake na namba za muhtasari.",
          quickCheck: [
            { objective: "O4", q: "df.info() inaonyesha nini?", options: ["Chati ya pau", "Safu ya kwanza tu", "Thamani zinazokosekana zikiwa zimejazwa", "Aina ya kila safu wima"], answer: 3, why: "df.info() inaorodhesha kila safu wima na aina yake." },
            { objective: "O4", q: "Umepakia faili ya klabu yako attendance.csv kwenye Colab. Ungetumia mstari upi kuipakia?", options: ["sns.load_dataset(\"attendance\")", "df = pd.read_csv(\"attendance.csv\")", "df.head(\"attendance.csv\")", "df.describe(\"attendance.csv\")"], answer: 1, why: "pd.read_csv inapakia faili ya CSV unayopakia." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kusafisha, kuchuja na kupanga katika makundi",
          minutes: 6,
          goal: "Kagua thamani zinazokosekana, ongeza safu wima, chuja safu na linganisha makundi.",
          text: [
            "Safisha kwanza. df.isna().sum() inahesabu thamani zinazokosekana katika kila safu wima. Kama baadhi zinakosekana, unaweza kuondoa safu hizo kwa df.dropna() au kuamua jinsi ya kuzijaza; andika ulichofanya. Pia kagua thamani zisizowezekana, kama bili hasi.",
            "Tengeneza safu wima unayohitaji. Bakshishi ya $5 ina maana tofauti kwenye bili ya $20 na bili ya $100, kwa hiyo ongeza kipimo cha haki: df[\"tip_pct\"] = df[\"tip\"] / df[\"total_bill\"] * 100.",
            "Chuja safu kwa sharti: df[df[\"time\"] == \"Dinner\"] inabakiza milo ya jioni tu. Panga katika makundi ili kulinganisha: df.groupby(\"day\")[\"tip_pct\"].mean() inatoa wastani wa asilimia ya bakshishi kwa kila siku. pandas ikionyesha onyo la njano, lisome, lakini si kosa. .round(1) inafanya namba ziwe nadhifu zaidi."
          ],
          steps: ["Hesabu thamani zinazokosekana: df.isna().sum()", "Ongeza safu wima: df[\"tip_pct\"] = df[\"tip\"] / df[\"total_bill\"] * 100", "Chuja: dinners = df[df[\"time\"] == \"Dinner\"]", "Panga makundi: df.groupby(\"day\")[\"tip_pct\"].mean().round(1)", "Jaribu kundi jingine, kama time au size."],
          words: [["Thamani inayokosekana", "kisanduku kitupu; pandas inakionyesha kama NaN."], ["Kusafisha", "kutafuta na kurekebisha thamani zinazokosekana, zisizo sahihi au zisizowezekana."], ["Kuchuja (filter)", "kubakiza safu zinazolingana na sharti tu."], ["groupby", "kugawa safu katika makundi na kufupisha kila kundi."]],
          slides: [
            { title: "Safisha kwanza", bullets: ["df.isna().sum() inahesabu thamani zinazokosekana", "Ondoa au jaza, na uandike ulichofanya", "Tafuta thamani zisizowezekana"] },
            { title: "Tengeneza kipimo cha haki", bullets: ["tip_pct = tip / total_bill * 100", "Inalinganisha bili kubwa na ndogo kwa haki"] },
            { title: "Chuja na panga makundi", bullets: ["df[df[\"time\"] == \"Dinner\"]", "df.groupby(\"day\")[\"tip_pct\"].mean()", "Onyo si kosa"] }
          ],
          sources: [PANDAS],
          tryIt: "Kagua data ya tips kama ina thamani zinazokosekana. Ongeza safu wima ya tip_pct. Tafuta wastani wa asilimia ya bakshishi kwa kila siku na kwa Lunch dhidi ya Dinner. Andika siku ipi ilikuwa na wastani wa juu zaidi.",
          youCanNow: "kukagua data kama ina thamani zinazokosekana, kutengeneza safu wima mpya, kuchuja safu na kulinganisha makundi.",
          quickCheck: [
            { objective: "O5", q: "df.dropna() inafanya nini?", options: ["Inaongeza safu wima mpya", "Inahesabu safu", "Inaondoa safu zenye thamani zinazokosekana", "Inatengeneza chati"], answer: 2, why: "dropna() inaondoa safu zenye thamani zinazokosekana; andika kwamba ulifanya hivyo." },
            { objective: "O5", q: "Unaona bili ya -12.00 katika data. Ungefanya nini?", options: ["Kuichukulia kama thamani isiyowezekana, kuirekebisha au kuiondoa, na kuandika ulichofanya", "Kuibakiza; bili hasi ni za kawaida", "Kuitafutia wastani pamoja na nyingine hata hivyo", "Kuificha katika chati"], answer: 0, why: "Kukagua thamani zisizowezekana kama bili hasi ni sehemu ya kusafisha." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kutengeneza chati na kushiriki matokeo ya kweli",
          minutes: 6,
          goal: "Tengeneza chati ya pau iliyo wazi na uandike matokeo ambayo watu wanaweza kuyaamini.",
          text: [
            "Chati inaonyesha mwenendo haraka kuliko jedwali. Chati ya pau ni bora zaidi kwa kulinganisha makundi: tip_by_day = df.groupby(\"day\")[\"tip_pct\"].mean() kisha tip_by_day.plot(kind=\"bar\", title=\"Average tip % by day\"). Kila chati ipe kichwa na useme namba zina maana gani.",
            "Andika matokeo kwa sentensi rahisi pamoja na namba: \"Kwa wastani, bakshishi za [siku] zilikuwa za juu zaidi, kama asilimia X ya bili.\" Tumia namba ambayo code yako mwenyewe ilionyesha.",
            "Kuwa mkweli kuhusu mipaka. Sema kundi lina safu ngapi: df[\"day\"].value_counts() inaonyesha siku yenye milo michache, kwa hiyo wastani wake hauaminiki sana. Data hii ilitoka mgahawa mmoja, kwa hiyo huenda isiwe kweli kwa mingine. Na inaonyesha kilichotokea, si kwa nini."
          ],
          steps: ["Tengeneza namba za makundi.", "Zichore: .plot(kind=\"bar\", title=\"...\")", "Kagua ukubwa wa makundi kwa value_counts().", "Andika matokeo matatu yenye namba halisi.", "Ongeza mpaka mmoja: kile ambacho data haiwezi kukuambia."],
          words: [["Chati ya pau (bar chart)", "chati ya pau inayotumika kulinganisha makundi."], ["value_counts()", "inahesabu kila kundi lina safu ngapi."], ["Tokeo (finding)", "kauli iliyo wazi ya kile data inaonyesha, pamoja na namba."], ["Mpaka (limitation)", "jambo ambalo data yako au uchambuzi wako hauwezi kukuambia."]],
          slides: [
            { title: "Chati za pau hulinganisha makundi", bullets: ["groupby, kisha .plot(kind=\"bar\")", "Daima ongeza kichwa"] },
            { title: "Andika matokeo yaliyo wazi", bullets: ["Sentensi rahisi pamoja na namba", "Tumia namba ambayo code yako ilionyesha"] },
            { title: "Kuwa mkweli kuhusu mipaka", bullets: ["Makundi madogo hayaaminiki sana", "Mgahawa mmoja, si kila mgahawa", "Inaonyesha kilichotokea, si kwa nini"] }
          ],
          sources: [PANDAS],
          tryIt: "Kazi ya mwisho: katika notebook moja, pakia data ya tips, kagua thamani zinazokosekana, ongeza tip_pct, tafuta wastani wa asilimia ya bakshishi kwa siku na kwa time, tengeneza chati ya pau ya mojawapo yenye kichwa, na uandike matokeo matatu yenye namba, pamoja na jambo moja ambalo data hii haiwezi kukuambia.",
          youCanNow: "kugeuza data kuwa chati na matokeo ya kweli kwa lugha rahisi.",
          quickCheck: [
            { objective: "O6", q: "Ni aina gani ya chati iliyo bora zaidi kwa kulinganisha makundi, kama siku?", options: ["Chati ya duara ya namba moja", "Chati ya pau", "Jedwali lisilo na lebo", "Chati isiyo na kichwa"], answer: 1, why: "Chati ya pau ni bora zaidi kwa kulinganisha makundi." },
            { objective: "O6", q: "Chati yako inaonyesha Jumamosi zilikuwa na bakshishi kubwa zaidi. Ungeongeza nini kabla ya kuishiriki?", options: ["Dai kwamba Jumamosi zinasababisha bakshishi kubwa kila mahali", "Hakuna; chati zinajieleza zenyewe", "Namba ya kubuni ili iwe wazi zaidi", "Kichwa na mpaka wa kweli, kama idadi ya milo ya kila siku"], answer: 3, why: "Kichwa na mpaka wa kweli huwasaidia watu kuamini na kuelewa tokeo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuchambua data kwa Python",
        questions: [
          { objective: "O4", q: "Katika pandas, DataFrame ni nini?", options: ["Fremu ya picha", "Chati", "Kosa la Python", "Jedwali lenye safu na safu wima zenye majina"], answer: 3, why: "DataFrame ni majedwali ya pandas." },
          { objective: "O5", q: "Amri ipi inahesabu thamani zinazokosekana katika kila safu wima?", options: ["df.isna().sum()", "df.head()", "df.plot()", "df.shape"], answer: 0, why: "isna inaweka alama kwenye visanduku vitupu na sum inavihesabu." },
          { objective: "O5", q: "Kwa nini uongeze safu wima ya asilimia ya bakshishi badala ya kulinganisha dola za bakshishi?", options: ["Dola si namba", "pandas haiwezi kutumia dola", "Asilimia inalinganisha bili kubwa na ndogo kwa haki", "Inafanya jedwali kuwa dogo"], answer: 2, why: "Asilimia ya bili ni ulinganisho wa haki." },
          { objective: "O5", q: "Mstari upi unatoa wastani wa asilimia ya bakshishi kwa kila siku?", options: ["df[\"day\"].plot()", "df.mean(\"day\")", "df.head(\"day\")", "df.groupby(\"day\")[\"tip_pct\"].mean()"], answer: 3, why: "groupby inagawa kwa siku; mean inatafuta wastani wa kila kundi." },
          { objective: "O6", q: "Siku moja ina milo 19 tu. Ripoti yako inapaswa kusema nini?", options: ["Hakuna kitu", "Kwamba data si sahihi", "Kwamba wastani wake hauaminiki sana kwa sababu kundi ni dogo", "Kwamba ndiyo siku bora"], answer: 2, why: "Makundi madogo hufanya wastani usiwe na uhakika sana." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Utangulizi wa Sayansi ya Data na Uchambuzi wa Data",
    questions: [
      { objective: "O1", q: "Sayansi ya data kimsingi inahusu:", options: ["Kurekebisha kompyuta", "Kutumia data kujibu maswali na kufanya maamuzi", "Kuandika kwa kibodi haraka zaidi", "Kujenga tovuti"], answer: 1, why: "Inageuza data kuwa majibu." },
      { objective: "O1", q: "Mpangilio upi ni sahihi kwa mradi wa data?", options: ["Uliza, Pata, Safisha, Chunguza, Shiriki", "Shiriki, Uliza, Safisha, Pata, Chunguza", "Chunguza, Shiriki, Uliza, Pata, Safisha", "Safisha, Shiriki, Pata, Uliza, Chunguza"], answer: 0, why: "Anza na swali na umalize kwa kushiriki." },
      { objective: "O2", q: "Katika data nadhifu, kila safu ni:", options: ["Safu wima moja", "Chati moja", "Kitu kimoja ulichopima", "Jumla"], answer: 2, why: "Safu moja kwa kila rekodi." },
      { objective: "O2", q: "Safu wima ipi ni ya namba?", options: ["Dakika zilizochezwa", "Jina la timu", "Siku ya wiki", "Mji"], answer: 0, why: "Unaweza kufanya hesabu kwa dakika." },
      { objective: "O2", q: "Data yako haina safu wima kuhusu hali ya hewa. Je, unaweza kujibu \"Je, watu hutoa bakshishi zaidi mvua ikinyesha?\"", options: ["Ndiyo, kisia tu", "Ndiyo, tumia mean", "Ndiyo, tumia chati", "Hapana, na unapaswa kusema hivyo"], answer: 3, why: "Swali linahitaji data inayolihusu." },
      { objective: "O3", q: "Mean ya 4, 6 na 8 ni ipi?", options: ["4", "6", "8", "18"], answer: 1, why: "18 / 3 = 6." },
      { objective: "O3", q: "Median ya 1, 3, 3, 9, 50 ni ipi?", options: ["3", "9", "13.2", "50"], answer: 0, why: "Thamani ya katikati baada ya kupanga ni 3." },
      { objective: "O3", q: "Thamani isiyo ya kawaida (outlier) ni:", options: ["Median", "Safu wima inayokosekana", "Kichwa cha chati", "Thamani iliyo mbali na nyingine"], answer: 3, why: "Thamani hizi zinasimama mbali na nyingine." },
      { objective: "O3", q: "Thamani zisizo za kawaida zinavuta zaidi namba ipi?", options: ["Mean", "Median", "Idadi ya safu", "Hakuna kati ya hizo"], answer: 0, why: "Mean inatumia kila thamani, kwa hiyo thamani za mwisho kabisa zinaisogeza." },
      { objective: "O3", q: "Mauzo ya miavuli na ajali za magari yote huongezeka siku za mvua. Hii inaonyesha:", options: ["Miavuli inasababisha ajali", "Ajali zinasababisha mauzo ya miavuli", "Uhusiano, ambao huenda unasababishwa na mvua", "Hakuna kitu kabisa"], answer: 2, why: "Kitu cha tatu, mvua, kinasababisha yote mawili." },
      { objective: "O4", q: "pandas ni:", options: ["Programu ya spreadsheet ya kulipia", "Aina ya chati", "Tovuti", "Maktaba ya bure ya Python ya majedwali ya data"], answer: 3, why: "pandas inashughulikia DataFrame katika Python." },
      { objective: "O4", q: "Amri ipi inaonyesha safu tano za kwanza?", options: ["df.tail(0)", "df.shape", "df.head()", "df.sum()"], answer: 2, why: "head inaonyesha safu za juu." },
      { objective: "O4", q: "df.shape inarudisha (244, 7). Hiyo ina maana gani?", options: ["Safu wima 244 na safu 7", "Safu 244 na safu wima 7", "Thamani 244 zinazokosekana", "Chati 7"], answer: 1, why: "shape ni safu, kisha safu wima." },
      { objective: "O4", q: "Ipi inapakia faili yako mwenyewe ya CSV?", options: ["pd.read_csv(\"file.csv\")", "df.head(\"file.csv\")", "sns.plot(\"file.csv\")", "print(\"file.csv\")"], answer: 0, why: "read_csv inasoma CSV na kuiweka katika DataFrame." },
      { objective: "O4", q: "df.describe() inatoa:", options: ["Chati ya pau", "Jina la faili", "Namba za muhtasari kama mean, ndogo zaidi na kubwa zaidi", "Marekebisho ya thamani zinazokosekana"], answer: 2, why: "describe inafupisha safu wima za namba." },
      { objective: "O5", q: "Ipi inabakiza safu za milo ya jioni (Dinner) tu?", options: ["df[df[\"time\"] == \"Dinner\"]", "df[\"Dinner\"]", "df.dinner()", "df.drop(\"Dinner\")"], answer: 0, why: "Sharti ndani ya df[ ] linachuja safu." },
      { objective: "O5", q: "Unapata thamani zinazokosekana na unaondoa safu hizo. Nini kingine unapaswa kufanya?", options: ["Kuficha", "Kufuta data yote", "Hakuna kitu", "Kuandika ulichofanya"], answer: 3, why: "Kurekodi hatua za kusafisha kunaweka uchambuzi kuwa wa kweli." },
      { objective: "O6", q: "Chati ipi ni bora zaidi kwa kulinganisha wastani wa siku tofauti?", options: ["Picha", "Chati ya pau", "Namba moja", "Wingu la maneno"], answer: 1, why: "Pau hulinganisha makundi kwa uwazi." },
      { objective: "O6", q: "Ipi ni tokeo lililoandikwa vizuri?", options: ["\"Bakshishi ni nzuri.\"", "\"Mauzo ya wikendi yalikuwa wastani wa $420 kwa siku, kama 30% zaidi ya siku za kazi.\"", "\"Data inaonyesha mambo.\"", "\"Wikendi ni bora kwa sababu watu wana furaha.\""], answer: 1, why: "Ni mahususi, linatumia namba na halidai kisababishi ambacho haliwezi kuonyesha." },
      { objective: "O6", q: "Data hii ya tips ilitoka mgahawa mmoja. Ni mpaka upi sahihi wa kutaja?", options: ["Matokeo yanahusu kila mahali", "Data ni ya uongo", "Hakuna mipaka", "Matokeo huenda yasihusu migahawa mingine"], answer: 3, why: "Chanzo kimoja hakiwezi kusemea migahawa yote." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      1,
      3,
      4,
      6,
      8,
      9,
      11,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Kupakia na kukagua data",
        objective: "O4",
        notYet: "Data haipakii, au thamani zinazokosekana hazikukaguliwa.",
        meets: "Data ya tips imepakiwa, imeelezwa na imekaguliwa kama ina thamani zinazokosekana.",
        exceeds: "Pia inataja idadi ya safu na aina ya kila safu wima iliyotumika."
      },
      {
        name: "Safu wima ya asilimia ya bakshishi",
        objective: "O5",
        notYet: "Hakuna safu wima ya asilimia ya bakshishi, au imekokotolewa vibaya.",
        meets: "Safu wima ya tip_pct sawa na tip ikigawanywa kwa total_bill mara 100.",
        exceeds: "Pia inakagua thamani zisizowezekana kama bili hasi."
      },
      {
        name: "Wastani wa makundi",
        objective: "O5",
        notYet: "Ulinganisho mmoja tu, au wastani si sahihi.",
        meets: "Wastani wa asilimia ya bakshishi kwa kila siku na kwa mchana dhidi ya jioni, ukiwa umekadiriwa (rounded).",
        exceeds: "Pia inaonyesha kila kundi lina milo mingapi."
      },
      {
        name: "Chati ya pau",
        objective: "O6",
        notYet: "Hakuna chati, au chati haina kichwa.",
        meets: "Chati ya pau ya ulinganisho mmoja yenye kichwa kilicho wazi.",
        exceeds: "Lebo za mihimili au maelezo yanasema namba zina maana gani."
      },
      {
        name: "Matokeo ya kweli",
        objective: "O6",
        notYet: "Matokeo machache kuliko matatu, au hakuna mpaka uliotajwa.",
        meets: "Matokeo matatu rahisi yenye namba kutoka kwenye matokeo, pamoja na jambo moja ambalo data haiwezi kukuambia.",
        exceeds: "Pia yanaepuka kudai kisababishi na yanataja makundi madogo pale yanapohusika."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubric ya uchambuzi wa tips",
      "Wanafunzi wanaoripoti kuchambua data yao wenyewe, kama ya timu, klabu, darasa au kazi, ndani ya siku 30 baada ya kozi (utafiti wa ufuatiliaji)",
      "Wanafunzi wanaoendelea na kozi inayofuata, kama Introduction to Machine Learning",
      "Wanafunzi wanaoongeza notebook kwenye mkusanyiko wa kazi zao (portfolio) au kuitumia katika maombi ya kazi au programu ya data"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta au laptop yenye kivinjari cha wavuti na intaneti",
      "Akaunti ya Google ya bure ili kutumia Google Colab",
      "Karatasi na kalamu kuandika swali na matokeo",
      "Kama dakika 60 hadi 75 kwa jumla, pamoja na muda wa mazoezi"
    ],
    facilitatorNotes: [
      "Anza na swali ambalo wanafunzi wanalijali, kama matokeo ya timu au mahudhurio ya klabu, kabla ya kufungua code yoyote.",
      "Pateni mean na median ya orodha fupi kwa mkono pamoja kabla ya kutumia pandas.",
      "Data ya tips inapakiwa kutoka intaneti; ijaribu kwenye mtandao wenu kabla ya darasa na uwe na nakala ya CSV tayari.",
      "Waambie wanafunzi wasome matokeo ya wenzao na waonyeshe dai lolote la kisababishi au mpaka wowote uliokosekana.",
      "Wanafunzi wakileta data yao wenyewe, hakikisha haina taarifa binafsi za watu halisi kabla ya kuipakia."
    ]
  }
};

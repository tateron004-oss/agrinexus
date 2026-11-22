"use strict";

// Koach Learn course (Swahili translation of workforce/workforce-data-science-certificate.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const GOOGLE_DA = { name: "Coursera: Google Data Analytics Professional Certificate", url: "https://www.coursera.org/professional-certificates/google-data-analytics" };
const IBM_DS = { name: "Coursera: IBM Data Science Professional Certificate", url: "https://www.coursera.org/professional-certificates/ibm-data-science" };
const MS_PL300 = { name: "Microsoft Learn: Microsoft Certified: Power BI Data Analyst Associate (Exam PL-300)", url: "https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/" };
const COLAB = { name: "Google Colab", url: "https://colab.research.google.com/" };

module.exports = {
  id: "workforce-data-science-certificate-sw",
  lang: "sw",
  translationOf: "workforce-data-science-certificate",
  category: "Workforce Development",
  name: "Maandalizi ya Cheti cha Kitaalamu cha Sayansi ya Data",
  skills: "Kuchagua cheti cha data kinachokufaa, Kutengeneza mpango wa kusoma wa kila wiki, Kusafisha na kufupisha seti ya data, Kuuliza swali la data na kulijibu kwa chati, Kujenga mradi wa portfolio",
  outcome: "kuchagua cheti cha data kinachofaa lengo lako, kutengeneza mpango wa kusoma unaoweza kuufuata, na kukamilisha mradi mdogo wa mazoezi wa aina ambayo vyeti hivi vinaomba: kuchukua seti halisi ya data, kuisafisha, kuifupisha, kutengeneza chati moja iliyo wazi na kuandika maana yake.",
  about: [
    "Kozi hii ni kwa watu wanaotafuta kazi na wafanyakazi wanaotaka kuhamia kazi ya data, au kutumia data katika kazi waliyo nayo, na wanafikiria cheti kinachojulikana cha data cha mtandaoni kama Google Data Analytics Professional Certificate, IBM Data Science Professional Certificate, au Power BI Data Analyst Associate ya Microsoft.",
    "Haichukui nafasi ya programu hizo. Inakuandaa kwa ajili yake: utajifunza kila moja inafundisha nini, utachagua inayofaa lengo lako na wiki yako, na utafanya mazoezi ya ujuzi wa msingi ambao zote zinatumia, kwenye mradi mdogo unaoweza kuwaonyesha waajiri.",
    "Cheti ni njia ya kujifunza na kuonyesha ulichojifunza. Hakiahidi kazi wala nyongeza ya mshahara. Kinachosaidia zaidi ni kumaliza, kufanya mazoezi, na kuweza kueleza miradi yako mwenyewe. Kagua ukurasa wa sasa wa kila programu kuona gharama, muda na maudhui kabla ya kujiandikisha.",
    "Kila somo linachukua kama dakika tano, pamoja na kazi ya vitendo. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Kamilisha mradi mdogo wa portfolio: chagua seti ya data ya umma ya bure (au jedwali la mfano la mauzo katika Somo la 4), andika swali moja lililo wazi, safisha data (rekebisha visanduku vitupu, nakala zinazojirudia na miundo), tengeneza jedwali la muhtasari, tengeneza chati moja inayojibu swali, na andika matokeo kwa sentensi tatu pamoja na kikomo kimoja cha data yako. Uhifadhi katika Google Sheets, Excel au Google Colab ukiwa na kichwa kifupi na maelezo.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wanaotafuta kazi na wafanyakazi wanaotaka kuhamia kazi ya data, au kutumia data katika kazi waliyo nayo, na wanafikiria cheti kinachojulikana cha data cha mtandaoni (Google Data Analytics, IBM Data Science au Microsoft Power BI Data Analyst).",
    startingPoint: "Wanaweza kutumia kompyuta na spreadsheet za msingi. Wengi hawajawahi kulinganisha vyeti vya data, kufuata mpango mrefu wa kusoma mtandaoni, au kusafisha, kufupisha na kuchora chati ya seti halisi ya data.",
    gap: "Ujuzi wa data unafungua kazi nyingi, lakini mara nyingi watu huchagua cheti kisichofaa, huacha katikati, au humaliza bila kazi ya kuonyesha. Wanafunzi wanahitaji kuchagua cheti kinachofaa lengo lao, kupanga masomo wanayoweza kufuata, na kukamilisha mradi mdogo wa portfolio wa aina ambayo vyeti hivi vinaomba.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; maneno ya data yanaelezwa",
      "Vifaa: kompyuta inahitajika kwa spreadsheet na Google Colab; simu inatosha kwa kupanga",
      "Gharama na maelezo ya kozi hubadilika, kwa hiyo wanafunzi hukagua ukurasa rasmi wa kila programu leo",
      "Faragha: hakuna data binafsi ya wateja katika portfolio ya umma bila ruhusa; seti za data za mfano au za umma tu",
      "Muda: masomo ya kama dakika 5 pamoja na mazoezi ya vitendo; vyeti vinachukua miezi baada ya kozi hii"
    ],
    prerequisites: "Hakuna. Mazoezi ya msingi ya spreadsheet yanasaidia."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa mahali pa kazi unapopajua", action: "kueleza mtiririko wa kazi ya data na kuandika maswali matatu ambayo data inaweza kujibu hapo", standard: "ukiweka alama kila moja kama kazi ya mchambuzi au ya mwanasayansi wa data" },
    { id: "O2", condition: "Ukipewa vyeti vitatu vya data vinavyojulikana", action: "kulinganisha kiwango, zana kuu, muda na gharama yake na kuchagua kinachofaa lengo lako", standard: "gharama ikichukuliwa kutoka ukurasa rasmi leo" },
    { id: "O3", condition: "Kwa cheti ulichochagua", action: "kutengeneza mpango wa kusoma wa kila wiki wenye vipindi maalum vya kusoma na lengo la kila wiki", standard: "unaoendana na kazi na familia yako" },
    { id: "O4", condition: "Ukipewa seti ndogo ya data yenye matatizo", action: "kupata na kurekebisha visanduku vitupu, nakala zinazojirudia na matatizo ya muundo na kuandika kumbukumbu ya usafishaji", standard: "nakala ya data ya asili ikiwa imehifadhiwa kwanza" },
    { id: "O5", condition: "Ukipewa seti ya data iliyosafishwa na swali", action: "kutengeneza jedwali la muhtasari na chati moja inayojibu swali", standard: "kwa aina sahihi ya chati na kichwa kinachotaja jibu" },
    { id: "O6", condition: "Ukitumia chati na muhtasari wako", action: "kuandika matokeo kwa sentensi tatu pamoja na kikomo kimoja na kuyahifadhi kama mradi wa portfolio", standard: "ukiwa na kichwa kifupi na maelezo, bila data binafsi" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuchagua cheti chako na kupanga kumaliza",
      lessons: [
        {
          objectives: ["O1"],
          title: "Wachambuzi wa data na wanasayansi wa data hufanya nini",
          minutes: 5,
          goal: "Eleza mtiririko wa kazi ya data na useme ni sehemu ipi inakuvutia zaidi.",
          text: [
            "Kazi ya data inafuata njia rahisi: uliza swali, kusanya data, isafishe, ichunguze na uichambue, ionyeshe kwa chati, na ushiriki maana yake. Programu ya Google inaeleza wazo hilo hilo kwa hatua zake yenyewe.",
            "Mchambuzi wa data (data analyst) mara nyingi hufanya kazi na kilichokwisha tokea: \"Bidhaa ipi iliuzwa zaidi mwezi uliopita?\" Hutumia spreadsheet, SQL (lugha ya kuuliza maswali kwenye hifadhidata) na zana za dashboard kama Tableau au Power BI.",
            "Mwanasayansi wa data (data scientist) hufanya hivyo pia, na zaidi hujenga modeli zinazotabiri au kupanga vitu: \"Wateja gani huenda wakaacha kununua?\" Kwa kawaida huandika msimbo kwa Python na hutumia hesabu zaidi. Watu wengi huanza kama wachambuzi na baadaye hukua kuwa wanasayansi wa data."
          ],
          words: [["Seti ya data", "mkusanyiko wa data, kwa kawaida jedwali la safu na nguzo."], ["SQL", "Structured Query Language: lugha ya kutoa data kwenye hifadhidata."], ["Modeli", "programu inayojifunza mifumo kutoka kwenye data ili kutabiri au kupanga vitu."], ["Dashboard", "ukurasa wa chati unaojibadilisha data inapobadilika."]],
          slides: [
            { title: "Mtiririko wa kazi ya data", bullets: ["Uliza swali", "Kusanya na usafishe data", "Ichambue na uichore kwa chati", "Shiriki maana yake"] },
            { title: "Mchambuzi wa data", bullets: ["Anaeleza kilichotokea", "Spreadsheet, SQL, Tableau au Power BI", "\"Bidhaa ipi iliuzwa zaidi mwezi uliopita?\""] },
            { title: "Mwanasayansi wa data", bullets: ["Pia anatabiri na kupanga kwa modeli", "Kwa kawaida Python na hesabu zaidi", "\"Wateja gani huenda wakaacha kununua?\""] }
          ],
          tryIt: "Fikiria kazi yako ya sasa au ya mwisho (duka, ghala, kliniki, mgahawa). Andika maswali matatu ambayo data inaweza kujibu hapo, kama \"Saa zipi zina shughuli nyingi zaidi?\" Weka alama kila moja \"mchambuzi\" au \"mwanasayansi wa data\".",
          youCanNow: "kueleza mtiririko wa kazi ya data na tofauti kati ya mchambuzi wa data na mwanasayansi wa data.",
          quickCheck: [
            { objective: "O1", q: "Hatua ya kwanza ya kawaida ya mtiririko wa kazi ya data ni ipi?", options: ["Kutengeneza chati", "Kusafisha data", "Kujenga modeli", "Kuuliza swali"], answer: 3, why: "Kazi ya data inaanza na swali lililo wazi, linaloongoza kila hatua inayofuata." },
            { objective: "O1", q: "Dukani kwako unataka kujua saa zipi zina shughuli nyingi zaidi. Hiyo ni kazi ya nani?", options: ["Mwanasayansi wa data tu", "Mchambuzi wa data", "Si ya mtu yeyote; haiwezi kujibiwa", "Mwandishi wa programu za kompyuta tu"], answer: 1, why: "Kueleza kilichotokea, kama saa za shughuli nyingi, ni kazi ya kawaida ya mchambuzi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kulinganisha vyeti vya data vinavyojulikana",
          minutes: 6,
          goal: "Linganisha vyeti vitatu vya data vinavyojulikana sana na uchague kinachofaa lengo lako.",
          text: [
            "Google Data Analytics Professional Certificate (kwenye Coursera): mfululizo wa kozi 9 kwa wanaoanza, hakuna uzoefu unaohitajika. Ukurasa wake unataja spreadsheet, SQL, Tableau na mawasilisho, na sehemu yake ya maswali (FAQ) inasema inafundisha Python. Inapendekeza kama miezi 6 kwa saa 10 kwa wiki.",
            "IBM Data Science Professional Certificate (kwenye Coursera): mfululizo wa kozi 12 kwa wanaoanza. Ukurasa wake unataja Python, SQL, Jupyter na maktaba kama Pandas, NumPy, Matplotlib na Scikit-learn, na unashughulikia uchambuzi wa data, uonyeshaji kwa picha na modeli za machine learning. Inapendekeza kama miezi 4 kwa saa 10 kwa wiki.",
            "Microsoft Certified: Power BI Data Analyst Associate: cheti cha kiwango cha kati kinachopatikana kwa kufaulu Exam PL-300, mtihani unaosimamiwa. Unapima kuandaa, kuunda modeli, kuonyesha kwa picha na kuchambua data katika Power BI, na unakihuisha kila miezi 12 bure kwenye Microsoft Learn.",
            "Gharama, muda na orodha za kozi hubadilika, na baadhi ya programu zimo kwenye usajili wa malipo ya kila mwezi au hutolewa bure kupitia maktaba, ofisi za kazi au msaada wa kifedha. Fungua kila ukurasa rasmi na ukague kabla ya kujiandikisha. Hakuna cheti kinachohakikisha kazi."
          ],
          steps: ["Andika lengo lako: mchambuzi, mwanasayansi wa data, au kutumia data katika kazi yako ya sasa.", "Fungua ukurasa rasmi wa kila cheti.", "Andika kiwango chake, zana, urefu na gharama ya sasa.", "Uliza kituo cha kazi cha eneo lako au maktaba kuhusu kupata bure.", "Chagua kimoja, na uandike kwa nini."],
          words: [["Cheti cha kitaalamu", "mfululizo wa kozi za mtandaoni kutoka kampuni au chuo unaoishia na cheti."], ["Mtihani unaosimamiwa", "mtihani unaotazamwa na msimamizi rasmi, ana kwa ana au mtandaoni, ili kuzuia udanganyifu."], ["Python", "lugha maarufu ya kuandika programu inayotumika katika sayansi ya data."]],
          slides: [
            { title: "Google Data Analytics", bullets: ["Kozi 9 kwenye Coursera, kiwango cha wanaoanza", "Spreadsheet, SQL, Tableau; FAQ inasema na Python pia", "Kama miezi 6 kwa saa 10 kwa wiki (kwa ukurasa wake)"] },
            { title: "IBM Data Science", bullets: ["Kozi 12 kwenye Coursera, kiwango cha wanaoanza", "Python, SQL, Jupyter, Pandas, Scikit-learn", "Kama miezi 4 kwa saa 10 kwa wiki (kwa ukurasa wake)"] },
            { title: "Microsoft Power BI Data Analyst", bullets: ["Kiwango cha kati: faulu Exam PL-300", "Andaa, unda modeli, onyesha na uchambue katika Power BI", "Huisha bure kila miezi 12 kwenye Microsoft Learn"] },
            { title: "Kabla ya kujiandikisha", bullets: ["Kagua ukurasa rasmi kuona gharama na muda", "Uliza kuhusu kupata bure: maktaba, kituo cha kazi, msaada", "Hakuna cheti kinachohakikisha kazi"] }
          ],
          sources: [GOOGLE_DA, IBM_DS, MS_PL300],
          tryIt: "Tengeneza jedwali la kulinganisha la safu tatu: cheti, kiwango, zana kuu, muda, gharama ya leo (kutoka ukurasa rasmi). Zungushia duara kile kinachofaa lengo lako na uandike sentensi moja kusema kwa nini.",
          youCanNow: "kulinganisha vyeti vya data vya Google, IBM na Microsoft na kuchagua kimoja kinachofaa lengo lako.",
          quickCheck: [
            { objective: "O2", q: "Kupata cheti cha data kunahakikisha nini?", options: ["Hakuna; kinaonyesha ulichojifunza", "Kazi", "Nyongeza ya mshahara", "Shahada ya chuo"], answer: 0, why: "Cheti kinaonyesha ujuzi; hakihakikishi kazi." },
            { objective: "O2", q: "Rafiki anasema cheti kinagharimu kiasi fulani kwa mwezi. Unafanya nini kabla ya kujiandikisha?", options: ["Kumwamini rafiki yako", "Kuuliza AI bei", "Kukagua gharama kwenye ukurasa rasmi wa programu leo", "Kujiandikisha na kujua baadaye"], answer: 2, why: "Gharama hubadilika, kwa hiyo unakagua ukurasa rasmi wakati unapojiandikisha." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutengeneza mpango wa kusoma utakaoufuata",
          minutes: 5,
          goal: "Jenga mpango wa kusoma wa kila wiki unaoendana na kazi na familia.",
          text: [
            "Watu wengi wasiomaliza cheti huacha kwa sababu maisha yanakuwa na shughuli nyingi, si kwa sababu kilikuwa kigumu mno. Mpango ulioandikwa, wenye nyakati maalum, unafanya kumaliza kuwe rahisi zaidi.",
            "Anza na wiki yako halisi. Ukifanya kazi kwa zamu, chagua vipindi vya kusoma vinavyofaa: kwa mfano, vipindi vitatu vya dakika 45 siku za kazi na kipindi kimoja cha saa 2 mwishoni mwa wiki. Kusoma kwa muda mfupi mara kwa mara ni bora kuliko kipindi kimoja kirefu cha mwisho wa wiki.",
            "Kila wiki, weka lengo moja dogo unaloweza kuwekea alama ya kumaliza: \"kumaliza moduli ya 2 na jaribio lake\". Andika maelezo kwa maneno yako mwenyewe, na fanya kila zoezi la vitendo (lab): mazoezi hayo ndiyo yanajenga ujuzi. Msaidizi wa AI anaweza kueleza wazo linalochanganya kwa maneno rahisi zaidi au kukuuliza maswali, lakini fanya kazi inayopewa alama wewe mwenyewe na ufuate sheria za uaminifu za programu."
          ],
          steps: ["Andika saa zako zisizobadilika: kazi, familia, usingizi.", "Chagua vipindi 3-5 vya kusoma kwa wiki na uviweke kwenye kalenda yako.", "Weka lengo moja la kila wiki unaloweza kuwekea alama.", "Mwombe rafiki au msaidizi wa AI akuulize maswali kuhusu maelezo yako.", "Pitia kila Jumapili na urekebishe."],
          words: [["Kipindi cha kusoma", "muda maalum kwenye kalenda yako wa kujifunza."], ["Lab", "zoezi la vitendo ambapo unafanya mazoezi ya ujuzi kwenye data au msimbo halisi."]],
          slides: [
            { title: "Kwa nini mipango ni muhimu", bullets: ["Watu huacha maisha yanapokuwa na shughuli nyingi", "Mpango ulioandikwa wenye nyakati maalum unakusaidia kumaliza"] },
            { title: "Uendane na wiki yako", bullets: ["Vipindi 3-5 vifupi ni bora kuliko kipindi kimoja kirefu", "Mfano: vipindi vitatu vya dakika 45 siku za kazi", "Pamoja na kipindi kimoja cha saa 2 mwishoni mwa wiki"] },
            { title: "Kila wiki", bullets: ["Lengo moja dogo unaloweza kuwekea alama", "Fanya kila zoezi la vitendo (lab)", "AI inaweza kukuuliza maswali; kazi ya alama ifanye mwenyewe"] }
          ],
          tryIt: "Weka vipindi vinne vya kusoma vya wiki ijayo kwenye kalenda ya simu yako au ya karatasi. Andika lengo moja la wiki kutoka kwenye cheti ulichochagua, kwa mfano \"kumaliza moduli ya kwanza\".",
          youCanNow: "kutengeneza mpango wa kusoma wa kila wiki wenye nyakati maalum na lengo unaloweza kuwekea alama.",
          quickCheck: [
            { objective: "O3", q: "Katika kozi ya mtandaoni, ujuzi halisi unajengwa wapi?", options: ["Kutazama video kwa kasi mara mbili", "Kusoma matangazo ya kozi", "Kufanya mazoezi ya vitendo (labs)", "Kuruka hadi mtihani wa mwisho"], answer: 2, why: "Mazoezi katika labs yanajenga ujuzi ambao waajiri wanataka kuona." },
            { objective: "O3", q: "Unafanya kazi zamu za jioni. Unaandika mpango upi wa kusoma?", options: ["Vipindi maalum vya kusoma kwenye kalenda yako vinavyoendana na zamu zako, pamoja na lengo la kila wiki", "Kusoma siku yoyote ukiwa huru", "Kusoma saa nane usiku mmoja kila mwezi", "Kusubiri hadi ratiba yako ibadilike"], answer: 0, why: "Vipindi vya kawaida kwenye kalenda yako pamoja na lengo ndio mpango unaoweza kufanya kazi zaidi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuchagua cheti chako na kupanga kumaliza",
        questions: [
          { objective: "O1", q: "Swali lipi linafanana zaidi na kazi ya mchambuzi wa data?", options: ["Ninatengenezaje injini ya gari?", "Bidhaa ipi iliuzwa zaidi mwezi uliopita?", "Nipike nini usiku huu?", "Nani atashinda mchezo?"], answer: 1, why: "Wachambuzi wanaeleza kilichotokea kwa kutumia data iliyopo." },
          { objective: "O2", q: "Cheti kipi kinapatikana kwa kufaulu Exam PL-300?", options: ["Google Data Analytics Professional Certificate", "IBM Data Science Professional Certificate", "Cheti cha kuhitimu shule ya sekondari", "Microsoft Certified: Power BI Data Analyst Associate"], answer: 3, why: "Power BI Data Analyst Associate ya Microsoft inapatikana kwa kufaulu PL-300." },
          { objective: "O2", q: "Lengo lako ni kujenga modeli za kutabiri kwa Python. Mada za programu ipi zinafaa zaidi?", options: ["IBM Data Science Professional Certificate", "Kozi ya kuandika kwa kibodi", "Leseni ya forklift", "Kadi ya mhudumu wa chakula"], answer: 0, why: "Programu ya IBM inashughulikia Python, Scikit-learn na modeli za machine learning." },
          { objective: "O2", q: "Gharama ya programu ilikuwa $49 kwa mwezi mwaka jana. Unafanya nini sasa?", options: ["Kudhani ni ile ile", "Kumuuliza mtu usiyemjua mtandaoni", "Kukagua ukurasa rasmi leo", "Kuacha kukagua"], answer: 2, why: "Gharama hubadilika; ukurasa rasmi una gharama ya sasa." },
          { objective: "O3", q: "Mpango upi wa kusoma una uwezekano mkubwa wa kumfaa mfanyakazi wa zamu?", options: ["Kusoma saa 10 mara moja kwa mwezi", "Kusoma tu unapojisikia", "Vipindi vitatu vya dakika 45 siku za kazi na kipindi kimoja mwishoni mwa wiki", "Kuruka labs ili kuokoa muda"], answer: 2, why: "Vipindi vifupi vya kawaida kwenye kalenda yako ni rahisi kuvifuata." }
        ]
      }
    },
    {
      name: "Sura 2: Kufanya mazoezi ya ujuzi wa msingi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kusafisha seti ya data",
          minutes: 6,
          goal: "Pata na urekebishe visanduku vitupu, nakala zinazojirudia na matatizo ya muundo katika seti ndogo ya data.",
          text: [
            "Data halisi ina fujo. Kabla ya kuchambua, unaisafisha. Kila cheti kilichotajwa hapo juu kinatumia muda kwenye jambo hili, kwa sababu data isiyo sahihi inatoa majibu yasiyo sahihi.",
            "Matatizo ya kawaida: visanduku vitupu, safu ile ile mara mbili (nakala zinazojirudia), kitu kimoja kilichoandikwa kwa njia tofauti (\"CA\", \"Calif.\", \"California\"), namba zilizohifadhiwa kama maandishi, na tarehe za miundo iliyochanganyika.",
            "Katika Google Sheets au Excel unaweza kupanga (sort) na kuchuja (filter) ili kupata matatizo, kutumia Remove duplicates, kutumia Find and replace ili majina yalingane, na kubadilisha muundo wa nguzo kuwa namba au tarehe. Hifadhi nakala ya data ya asili na uandike kila badiliko ulilofanya, ili wengine waiamini kazi yako."
          ],
          steps: ["Hifadhi nakala ya data ya asili.", "Panga na uchuje kila nguzo kuona visanduku vitupu na thamani za ajabu.", "Ondoa safu zinazojirudia.", "Linganisha maandishi kwa Find and replace.", "Weka miundo ya namba na tarehe.", "Andika kumbukumbu fupi ya kila badiliko."],
          words: [["Kusafisha data", "kurekebisha makosa katika data kabla ya kuichambua."], ["Nakala inayojirudia", "safu inayoonekana zaidi ya mara moja (duplicate)."], ["Kumbukumbu ya usafishaji", "orodha ya kila badiliko ulilofanya kwenye data (cleaning log)."]],
          slides: [
            { title: "Kwa nini kusafisha kwanza", bullets: ["Data yenye fujo inatoa majibu yasiyo sahihi", "Kila cheti cha data kinafundisha hili"] },
            { title: "Matatizo ya kawaida", bullets: ["Visanduku vitupu na safu zinazojirudia", "\"CA\", \"Calif.\", \"California\"", "Namba kama maandishi; miundo ya tarehe iliyochanganyika"] },
            { title: "Jinsi ya kuyarekebisha", bullets: ["Panga na uchuje ili kupata matatizo", "Remove duplicates; Find and replace", "Weka miundo ya namba na tarehe"] },
            { title: "Uaminike", bullets: ["Hifadhi nakala ya asili", "Andika kumbukumbu ya kila badiliko"] }
          ],
          tryIt: "Tengeneza jedwali dogo la mauzo 15: Tarehe, Bidhaa, Duka, Kiasi. Weka safu 2 zinazojirudia, kiasi kimoja kitupu na maandishi mawili tofauti ya duka moja. Kisha lisafishe na uandike kumbukumbu yako ya usafishaji.",
          youCanNow: "kupata na kurekebisha matatizo ya kawaida ya data na kuweka kumbukumbu ya usafishaji.",
          quickCheck: [
            { objective: "O4", q: "Nakala inayojirudia katika seti ya data ni nini?", options: ["Kisanduku kitupu", "Safu inayoonekana zaidi ya mara moja", "Chati", "Kichwa cha nguzo"], answer: 1, why: "Nakala zinazojirudia zinahesabu kitu kimoja mara mbili na kufanya jumla kuwa si sahihi." },
            { objective: "O4", q: "Unakaribia kusafisha jedwali la mauzo. Unafanya nini kwanza?", options: ["Kufuta safu zinazoonekana za ajabu", "Kutengeneza chati", "Kupanga kwa tarehe tu", "Kuhifadhi nakala ya data ya asili"], answer: 3, why: "Kuhifadhi data ya asili kunakuwezesha kukagua au kutendua usafishaji wako." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kufupisha data na kutengeneza chati moja iliyo wazi",
          minutes: 5,
          goal: "Jibu swali kwa jedwali la muhtasari na chati moja.",
          text: [
            "Anza na swali moja lililo wazi, kama \"Duka lipi liliuza zaidi mwezi uliopita?\" Swali zuri linaamua nguzo zipi unahitaji.",
            "Jedwali la muhtasari linapanga data kwa makundi na kujumlisha. Katika Sheets au Excel, pivot table hufanya hivi: weka Duka kwenye safu (rows) na jumla ya Kiasi kwenye thamani (values). Katika Python, maktaba ya Pandas hufanya vivyo hivyo kwa groupby. Unaweza kujaribu Python bure katika Google Colab, ambayo inafanana na zana za programu ya IBM.",
            "Kisha chagua chati inayofaa: chati ya mihimili (bar chart) kulinganisha makundi, chati ya mstari (line chart) kwa mabadiliko kwa muda, na epuka chati za duara (pie) zenye vipande vingi. Ipe kichwa kinachotaja jibu, kama \"Eastside iliuza zaidi Machi\", na uweke majina kwenye mihimili ya chati (axes)."
          ],
          steps: ["Andika swali moja.", "Tengeneza pivot table (au Pandas groupby).", "Chagua chati: mihimili kulinganisha, mstari kwa muda.", "Andika kichwa kinachotaja jibu.", "Weka majina kwenye axes."],
          words: [["Pivot table", "zana ya spreadsheet inayopanga data kwa makundi na kujumlisha."], ["Pandas", "maktaba ya Python ya kufanya kazi na majedwali ya data."], ["Chati ya mihimili", "chati inayolinganisha makundi kwa mihimili ya urefu tofauti (bar chart)."]],
          slides: [
            { title: "Anza na swali", bullets: ["\"Duka lipi liliuza zaidi mwezi uliopita?\"", "Swali linachagua nguzo zako"] },
            { title: "Fupisha", bullets: ["Spreadsheet: pivot table", "Python: Pandas groupby (jaribu katika Google Colab)", "Rows: Duka. Values: jumla ya Kiasi"] },
            { title: "Ichore wazi", bullets: ["Mihimili kulinganisha, mstari kwa muda", "Kichwa kinataja jibu", "Weka majina kwenye axes"] }
          ],
          sources: [COLAB],
          tryIt: "Tumia jedwali lako lililosafishwa kutoka Somo la 4. Tengeneza pivot table ya jumla ya Kiasi kwa kila Duka, kisha chati ya mihimili yenye kichwa kinachotaja jibu.",
          youCanNow: "kugeuza swali kuwa jedwali la muhtasari na chati iliyo wazi.",
          quickCheck: [
            { objective: "O5", q: "Pivot table hufanya nini?", options: ["Huchora ramani", "Hufuta nakala zinazojirudia", "Hurekebisha maandishi", "Hupanga data kwa makundi na kujumlisha"], answer: 3, why: "Pivot table hupanga safu kwa makundi, kama kwa duka, na kuzijumlisha." },
            { objective: "O5", q: "Unataka kulinganisha jumla ya mauzo ya maduka 5. Unatengeneza chati ipi?", options: ["Chati ya mstari", "Chati ya mihimili yenye kichwa kinachotaja jibu", "Chati ya duara yenye vipande 50", "Hakuna chati"], answer: 1, why: "Chati za mihimili zinalinganisha makundi, na kichwa kinachotaja jibu kinafanya iwe wazi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kusimulia hadithi ya data na kujenga mradi wa portfolio",
          minutes: 5,
          goal: "Andika matokeo mafupi na upange kazi yako kama mradi wa portfolio.",
          text: [
            "Waajiri wanataka kuona kwamba unaweza kueleza data, si kutengeneza chati tu. Matokeo mazuri ni sentensi tatu: ulichogundua, kwa nini ni muhimu, na kikomo kimoja cha data. Mfano: \"Eastside iliuza 40% ya mauzo ya Machi. Huenda ikahitaji wafanyakazi zaidi Jumamosi. Data inahusu mwezi mmoja tu.\"",
            "Vyeti vingi kati ya hivi vinaishia na mradi wa mwisho (capstone) au mradi wa portfolio. Unaweza kuanza mmoja sasa: kichwa, swali, data ilitoka wapi, kumbukumbu yako ya usafishaji, chati na matokeo yako. Tumia data ya umma ya bure, kama tovuti ya data wazi ya jiji, au jedwali lako la mazoezi. Usitumie kamwe data binafsi ya wateja au ya kampuni bila ruhusa.",
            "Msaidizi wa AI anaweza kukusaidia kukagua kama maandishi yako yako wazi, lakini hakikisha kila namba katika matokeo yako inatoka kwenye jedwali lako mwenyewe."
          ],
          steps: ["Andika matokeo yako kwa sentensi tatu: matokeo, kwa nini ni muhimu, kikomo kimoja.", "Kusanya kichwa, swali, chanzo cha data, kumbukumbu ya usafishaji, chati.", "Kagua kila namba dhidi ya jedwali lako.", "Ihifadhi mahali pamoja unapoweza kushiriki, kama folda ya Google Drive au GitHub."],
          words: [["Capstone", "mradi wa mwisho mwishoni mwa programu."], ["Portfolio", "mkusanyiko wa kazi zako unaowaonyesha waajiri."], ["Kikomo", "kitu kuhusu data kinachomaanisha jibu huenda lisiwe kamili."]],
          slides: [
            { title: "Matokeo ya sentensi tatu", bullets: ["Ulichogundua", "Kwa nini ni muhimu", "Kikomo kimoja cha data"] },
            { title: "Mradi wako wa portfolio", bullets: ["Kichwa, swali na chanzo cha data", "Kumbukumbu ya usafishaji, chati na matokeo", "Data ya umma au ya mazoezi tu"] },
            { title: "Kabla ya kushiriki", bullets: ["Kagua kila namba dhidi ya jedwali lako", "AI inaweza kukagua uwazi, si ukweli wako", "Ihifadhi mahali unapoweza kushiriki kiungo"] }
          ],
          tryIt: "Kazi ya mwisho: maliza mradi wako mdogo wa portfolio. Swali, data iliyosafishwa, kumbukumbu ya usafishaji, jedwali la muhtasari, chati moja na matokeo ya sentensi tatu yenye kikomo kimoja. Uhifadhi ukiwa na kichwa na maelezo mafupi.",
          youCanNow: "kukamilisha na kueleza mradi mdogo wa data wa aina ambayo vyeti vya data vinaomba.",
          quickCheck: [
            { objective: "O6", q: "Kwa nini uweke kikomo kimoja katika matokeo yako?", options: ["Kinaonyesha uaminifu kuhusu kile data inachoweza na isichoweza kusema", "Kinafanya matokeo kuwa marefu zaidi", "Kinatakiwa na sheria", "Kinaficha makosa"], answer: 0, why: "Kutaja kikomo, kama kuhusu mwezi mmoja tu, kunajenga imani katika kazi yako." },
            { objective: "O6", q: "Unataka kutumia orodha ya wateja wa mwajiri wako katika portfolio yako ya umma. Unafanya nini?", options: ["Kuiweka kama ilivyo", "Kuondoa majina tu", "Kutumia seti ya data ya umma au ya mfano badala yake, isipokuwa una ruhusa", "Kuiweka na kuuliza baadaye"], answer: 2, why: "Data binafsi ya wateja haiwekwi katika portfolio ya umma bila ruhusa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kufanya mazoezi ya ujuzi wa msingi",
        questions: [
          { objective: "O4", q: "Data yako ina \"CA\", \"Calif.\" na \"California\". Unafanya nini?", options: ["Kuyalinganisha kwa Find and replace", "Kuiacha hivyo", "Kufuta nguzo", "Kukisia jumla"], answer: 0, why: "Kulinganisha maandishi kunazuia mahali pamoja kuhesabiwa kama mahali matatu." },
          { objective: "O4", q: "Kwa nini uweke kumbukumbu ya usafishaji?", options: ["Haina manufaa", "Kufanya faili kuwa kubwa zaidi", "Kwa sababu chati zinaihitaji", "Ili wengine waamini na warudie mabadiliko yako"], answer: 3, why: "Kumbukumbu inaonyesha hasa ulichobadilisha." },
          { objective: "O5", q: "Zana ipi inapanga data kwa makundi na kujumlisha katika spreadsheet?", options: ["Kikagua tahajia", "Pivot table", "Print preview", "Maoni (comments)"], answer: 1, why: "Pivot tables hupanga na kufupisha." },
          { objective: "O5", q: "Unataka kuonyesha mauzo yakibadilika kwa miezi 12. Chati ipi?", options: ["Chati ya mstari", "Chati ya duara", "Hakuna chati", "Picha"], answer: 0, why: "Chati za mstari zinaonyesha mabadiliko kwa muda." },
          { objective: "O6", q: "Yapi ni matokeo mazuri ya sentensi tatu?", options: ["\"Hii hapa ni chati.\"", "\"Data inavutia.\"", "\"Eastside iliuza zaidi Machi. Huenda ikahitaji wafanyakazi zaidi Jumamosi. Data inahusu mwezi mmoja.\"", "\"Nilitumia Excel.\""], answer: 2, why: "Yanatoa matokeo, kwa nini ni muhimu na kikomo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Maandalizi ya Cheti cha Kitaalamu cha Sayansi ya Data",
    questions: [
      { objective: "O1", q: "Hatua ya kwanza ya kawaida ya mtiririko wa kazi ya data ni ipi?", options: ["Kutengeneza chati", "Kuuliza swali", "Kununua programu", "Kushiriki matokeo"], answer: 1, why: "Swali lililo wazi linaongoza kila kitu kinachofuata." },
      { objective: "O1", q: "Mwanasayansi wa data, zaidi ya mchambuzi, kwa kawaida:", options: ["Anatumia karatasi tu", "Anaandika data tu", "Hatumii data kamwe", "Anajenga modeli zinazotabiri"], answer: 3, why: "Wanasayansi wa data hujenga modeli za kutabiri, mara nyingi kwa Python." },
      { objective: "O1", q: "SQL inatumika kwa nini?", options: ["Kuchora picha", "Kuhariri video", "Kutuma barua pepe", "Kutoa data kwenye hifadhidata"], answer: 3, why: "SQL ni lugha ya kuuliza maswali kwenye hifadhidata." },
      { objective: "O2", q: "Google Data Analytics Professional Certificate inatolewa kwenye:", options: ["Microsoft Learn tu", "Coursera", "DMV (ofisi ya leseni za udereva)", "Duka la apps la simu"], answer: 1, why: "Ukurasa wake rasmi uko kwenye Coursera." },
      { objective: "O2", q: "Kwa mujibu wa ukurasa wake, IBM Data Science Professional Certificate ina kozi ngapi?", options: ["3", "9", "12", "20"], answer: 2, why: "Ukurasa wa IBM kwenye Coursera unataja mfululizo wa kozi 12." },
      { objective: "O2", q: "Cheti cha Microsoft kinajikita kwenye zana ipi?", options: ["Power BI", "Photoshop", "Word", "Tableau"], answer: 0, why: "Ni Power BI Data Analyst Associate." },
      { objective: "O2", q: "Kupata cheti cha data kunahakikisha nini?", options: ["Kazi", "Nyongeza ya mshahara", "Hakuna; kinaonyesha ulichojifunza", "Shahada ya chuo"], answer: 2, why: "Vyeti vinaonyesha ulichojifunza; havihakikishi matokeo." },
      { objective: "O2", q: "Kabla ya kujiandikisha unapaswa kukagua gharama kwenye:", options: ["Ukurasa rasmi wa programu", "Tangazo la mitandao ya kijamii", "Maelezo ya mwaka jana", "Kumbukumbu ya AI"], answer: 0, why: "Ukurasa rasmi una gharama na maudhui ya sasa." },
      { objective: "O3", q: "Mpango upi ni bora kwa kumaliza cheti?", options: ["Kusoma wakati wowote kukiwa na muda", "Vipindi maalum vya kusoma kwenye kalenda yako pamoja na lengo la kila wiki", "Kuruka labs", "Kusoma siku moja mara moja kwa mwezi"], answer: 1, why: "Vipindi vya kawaida vilivyopangwa pamoja na malengo vinakusaidia kumaliza." },
      { objective: "O3", q: "Unapotumia msaidizi wa AI wakati wa cheti, unapaswa:", options: ["Kumwacha afanye kazi ya alama", "Kumwepuka kabisa, kila wakati", "Kubandika mtihani wako ndani yake", "Kumtumia kueleza mawazo na kukuuliza maswali, na kufuata sheria za uaminifu"], answer: 3, why: "AI inaweza kukusaidia kujifunza, lakini kazi ya alama lazima iwe yako mwenyewe." },
      { objective: "O3", q: "Katika kozi ya mtandaoni, ujuzi halisi unajengwa wapi?", options: ["Kufanya mazoezi ya vitendo (labs)", "Kutazama video tu", "Kusoma kichwa", "Kuruka majaribio"], answer: 0, why: "Labs ni mazoezi ya vitendo." },
      { objective: "O4", q: "Nakala inayojirudia katika seti ya data ni nini?", options: ["Kisanduku kitupu", "Jina la nguzo", "Chati", "Safu inayoonekana zaidi ya mara moja"], answer: 3, why: "Nakala zinazojirudia ni safu zilizorudiwa." },
      { objective: "O4", q: "Kabla ya kusafisha, unapaswa:", options: ["Kufuta data ya asili", "Kutengeneza chati", "Kuhifadhi nakala ya data ya asili", "Kuituma kwa barua pepe kwa kila mtu"], answer: 2, why: "Nakala inakuwezesha kuanza upya au kukagua kazi yako." },
      { objective: "O4", q: "Namba zilizohifadhiwa kama maandishi zinaweza kusababisha:", options: ["Kazi ya haraka zaidi", "Jumla zisizo sahihi", "Chati bora zaidi", "Hakuna kitu"], answer: 1, why: "Namba za maandishi huenda zisijumlishwe vizuri." },
      { objective: "O4", q: "Katika Python, maktaba ipi inafanya kazi na majedwali kama spreadsheet?", options: ["Outlook", "Paint", "Zoom", "Pandas"], answer: 3, why: "Pandas ni ya kufanya kazi na majedwali ya data." },
      { objective: "O5", q: "Zana ipi ya bure inakuwezesha kuendesha Python kwenye kivinjari cha wavuti?", options: ["Kikokotoo", "Notepad", "Google Colab", "Paint"], answer: 2, why: "Google Colab inaendesha daftari za Python (notebooks) mtandaoni." },
      { objective: "O5", q: "Kulinganisha mauzo ya maduka 5, chati bora kwa kawaida ni:", options: ["Chati ya mihimili", "Duara lenye vipande 20", "Ramani", "Hakuna chati"], answer: 0, why: "Chati za mihimili zinalinganisha makundi kwa uwazi." },
      { objective: "O5", q: "Kichwa kizuri cha chati:", options: ["\"Chati 1\"", "Kinataja jibu, kama \"Eastside iliuza zaidi Machi\"", "Kinaachwa kitupu", "Ni kirefu sana"], answer: 1, why: "Kichwa kinachotaja jibu kinawasaidia wasomaji." },
      { objective: "O6", q: "Data ipi HUPASWI kutumia katika portfolio ya umma?", options: ["Data wazi ya jiji", "Data binafsi ya wateja bila ruhusa", "Jedwali lako la mazoezi", "Seti za data za umma za bure"], answer: 1, why: "Data binafsi inahitaji ruhusa na haipaswi kushirikiwa." },
      { objective: "O6", q: "Matokeo yako yanapaswa kuwa na kikomo kimoja kwa sababu:", options: ["Kinaonyesha uaminifu kuhusu kile data inachoweza na isichoweza kusema", "Kinayafanya kuwa marefu", "Waajiri hawakipendi", "Kinatakiwa na sheria"], answer: 0, why: "Kutaja kikomo kunaonyesha uchambuzi makini na wa kuaminika." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      1,
      6,
      8,
      10,
      11,
      12,
      16,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Swali lililo wazi",
        objective: "O1",
        notYet: "Hakuna swali, au swali ambalo data haiwezi kujibu.",
        meets: "Swali moja lililo wazi ambalo seti ya data inaweza kujibu.",
        exceeds: "Swali lina umuhimu kwa mahali halisi pa kazi na linasema kwa nini."
      },
      {
        name: "Data iliyosafishwa na kumbukumbu",
        objective: "O4",
        notYet: "Visanduku vitupu, nakala zinazojirudia au matatizo ya muundo bado yapo, au hakuna kumbukumbu.",
        meets: "Visanduku vitupu, nakala zinazojirudia na miundo vimerekebishwa, pamoja na kumbukumbu ya usafishaji na data ya asili imehifadhiwa.",
        exceeds: "Kumbukumbu inasema kila marekebisho yalibadilisha safu ngapi."
      },
      {
        name: "Muhtasari na chati",
        objective: "O5",
        notYet: "Hakuna jedwali la muhtasari, au chati isiyojibu swali.",
        meets: "Jedwali la muhtasari na chati moja ya aina sahihi yenye kichwa kinachotaja jibu.",
        exceeds: "Axes zina majina na chati ni rahisi kusoma kwa kuitazama mara moja."
      },
      {
        name: "Matokeo na kikomo",
        objective: "O6",
        notYet: "Hakuna matokeo, au hakuna kikomo kilichotajwa.",
        meets: "Matokeo ya sentensi tatu yenye kikomo kimoja cha data.",
        exceeds: "Matokeo yanapendekeza hatua inayofuata ya vitendo."
      },
      {
        name: "Tayari kwa portfolio",
        objective: "O6",
        notYet: "Haijahifadhiwa, au ina data binafsi.",
        meets: "Imehifadhiwa katika Google Sheets, Excel au Google Colab ikiwa na kichwa kifupi na maelezo, bila data binafsi.",
        exceeds: "Imeshirikiwa kama kiungo ambacho mwanafunzi anaweza kuongeza kwenye CV (wasifu wa kazi) au wasifu wa mtandaoni."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (rubric)",
      "Wanafunzi wanaojiandikisha kwa cheti cha data ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaokamilisha cheti cha data ndani ya miezi 6",
      "Wanafunzi wanaotumia mradi wao wa portfolio katika maombi ya kazi au wanaopata kazi inayohusiana na data"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye intaneti",
      "Spreadsheet ya bure (Google Sheets au Microsoft Excel mtandaoni), na Google Colab ukipenda",
      "Seti ya data ya umma ya bure, au jedwali la mfano la mauzo kutoka Somo la 4",
      "Kalenda ya simu au ya karatasi kwa mpango wa kusoma",
      "Kama dakika 60 kwa masomo na majaribio, pamoja na muda wa vitendo kwa mradi"
    ],
    facilitatorNotes: [
      "Andaa jedwali la mfano la mauzo lenye matatizo yaliyowekwa makusudi ili kila mwanafunzi afanye mazoezi ya kusafisha data ile ile.",
      "Waambie wanafunzi wakague gharama za vyeti kwenye kurasa rasmi moja kwa moja darasani badala ya kutumia namba za zamani.",
      "Onyesha pivot table moja na chati moja hatua kwa hatua kabla wanafunzi hawajajenga zao.",
      "Wakumbushe wanafunzi watumie data ya umma au ya mfano tu katika portfolio.",
      "Pima mradi wa portfolio kwa rubric, na utoe maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};

"use strict";

// Koach Learn course (Swahili translation of workforce/workforce-ai-new-workforce.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const BLS_OOH = { name: "US Bureau of Labor Statistics: Occupational Outlook Handbook (kitabu rasmi cha mwelekeo wa kazi Marekani)", url: "https://www.bls.gov/ooh/" };
const CAREERONESTOP = { name: "CareerOneStop (Wizara ya Kazi ya Marekani): tafuta mafunzo na American Job Centers", url: "https://www.careeronestop.org/" };

module.exports = {
  id: "workforce-ai-new-workforce-sw",
  lang: "sw",
  translationOf: "workforce-ai-new-workforce",
  category: "Workforce Development",
  name: "AI katika Ulimwengu Mpya wa Kazi",
  skills: "Kuelewa jinsi AI inavyobadilisha kazi ndogo ndogo, Kugawa kazi yako katika kazi ndogo, Kutambua kazi ambazo AI inaweza kusaidia, Kupata taarifa za kuaminika kuhusu mwelekeo wa kazi, Kujenga mpango wa siku 90 wa kujiongezea ujuzi, Kuzungumza na waajiri kuhusu ujuzi wako wa AI",
  outcome: "kugawa kazi yako ya sasa au unayoilenga katika kazi ndogo, kuweka alama zipi AI inaweza kusaidia na zipi zinategemea ujuzi wa kibinadamu, kutafuta mwelekeo wa fani yako kwenye chanzo rasmi, na kugeuza hayo kuwa mpango wa siku 90 wa kujiongezea ujuzi na njia fupi ya kweli ya kueleza ujuzi wako wa AI kwa mwajiri.",
  about: [
    "Kozi hii ni kwa wanaotafuta kazi na wafanyakazi wanaosikia mara kwa mara kwamba AI itabadilisha kazi, na wanataka kujua maana yake kwao: wafanyakazi wa ghala na usafirishaji, wa maduka na huduma kwa wateja, wa ofisi na utawala, wasaidizi wa huduma za afya, mafundi na madereva.",
    "Utajifunza jinsi AI mara nyingi inavyobadilisha kazi ndogo ndogo badala ya kazi nzima, utaangalia kazi yako hatua kwa hatua, utapata taarifa za kuaminika kuhusu fani yako, na utaandaa mpango wa vitendo wa kujenga ujuzi unaokusaidia kuendelea kuwa wa thamani. Mwishoni utajizoeza kuzungumza kuhusu ujuzi wa AI katika usaili au mazungumzo na msimamizi wako.",
    "Hatutabiri kazi zipi zitapotea, na hakuna kozi inayoweza kuahidi kazi au nyongeza ya mshahara. Kila somo linachukua kama dakika tano. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Andaa mpango wako binafsi wa kazi na AI: orodha ya kazi ndogo za kazi yako ya sasa au unayoilenga, kila moja ikiwa na alama \"AI inaweza kusaidia\", \"ujuzi wa kibinadamu\" au \"vyote viwili\"; ukweli mitatu kuhusu fani yako kutoka BLS Occupational Outlook Handbook; mpango wa siku 90 wa kujiongezea ujuzi wenye ujuzi mitatu, rasilimali za bure na muda wa kila wiki; na jibu la sekunde 30 kwa swali \"Unatumiaje AI katika kazi yako?\" lililo la kweli na mahususi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanaotafuta kazi na wafanyakazi wazima wanaosikia mara kwa mara kwamba AI itabadilisha kazi: wafanyakazi wa ghala na usafirishaji, wa maduka na huduma kwa wateja, wa ofisi na utawala, wasaidizi wa huduma za afya, mafundi na madereva.",
    startingPoint: "Wanaijua kazi yao vizuri na wanaweza kutumia simu janja au kompyuta. Wengi wana wasiwasi au hawana uhakika kuhusu AI, hawajaangalia takwimu rasmi za mwelekeo wa kazi, na hawana mpango ulioandikwa wa kujenga ujuzi mpya.",
    gap: "AI inabadilisha ni kazi ndogo zipi zinachukua muda ndani ya kazi nyingi. Wanafunzi wanahitaji kuona ni kazi zao zipi AI inaweza kusaidia na zipi zinategemea ujuzi wa kibinadamu, kukagua mwelekeo wa fani yao kwenye chanzo rasmi, na kufuata mpango unaowezekana wa kujenga ujuzi wanaoweza kuueleza kwa ukweli kwa mwajiri.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; hakuna haja ya ujuzi wa kiufundi",
      "Vifaa: simu janja au kompyuta yenye intaneti; wengi wanatumia kompyuta ya maktaba au ya American Job Center",
      "Muda: masomo ya kama dakika 5 na mpango wa saa chache kwa wiki pamoja na kazi na familia",
      "Faragha na sera: hakuna taarifa binafsi wala siri za kampuni katika zana za AI; sera ya AI ya mwajiri inatangulia",
      "Namba za mwelekeo wa kazi zinatoka kwenye ukurasa rasmi wa BLS, si kutoka AI"
    ],
    prerequisites: "Hakuna. Wanafunzi wapya kwa wasaidizi wa AI wanaweza kusoma kozi \"Essential AI Tools for the Workplace\" (Zana Muhimu za AI Kazini) sambamba na kozi hii."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa kazi yako ya sasa au ya mwisho", action: "kuorodhesha angalau kazi ndogo nane katika kazi hiyo na kueleza jinsi AI inavyoathiri kazi ndogo badala ya kazi nzima", standard: "kwa maneno yako mwenyewe" },
    { id: "O2", condition: "Ukipewa orodha yako ya kazi ndogo", action: "kuweka alama kwa kila kazi: \"AI inaweza kusaidia\", \"ujuzi wa kibinadamu\" au \"vyote viwili\"", standard: "kila kazi ikiwa na alama na wewe ukifanya uamuzi wa mwisho" },
    { id: "O3", condition: "Kwa kazi yako ya sasa au unayoilenga", action: "kutafuta mwelekeo wa kazi katika BLS Occupational Outlook Handbook na kupata American Job Center iliyo karibu nawe", standard: "ukiwa na ukweli mitatu kutoka kwenye ukurasa rasmi" },
    { id: "O4", condition: "Ukipewa matangazo matatu halisi ya kazi unayoitaka", action: "kuchagua ujuzi mitatu wa kujenga na kueleza kwa nini kila mmoja ni muhimu", standard: "ukiwa na ujuzi mmoja wa zana ya AI, mmoja wa fani na mmoja wa kibinadamu" },
    { id: "O5", condition: "Kwa ujuzi wako mitatu", action: "kuandika mpango wa siku 90 wa kujiongezea ujuzi wenye rasilimali, muda wa kila wiki na ushahidi kwa kila ujuzi", standard: "wiki mbili za kwanza za kusoma zikiwa kwenye kalenda yako" },
    { id: "O6", condition: "Mwajiri akikuuliza jinsi unavyotumia AI", action: "kutoa jibu la sekunde 30 la Kazi-Zana-Ukaguzi-Matokeo", standard: "lililo la kweli, mahususi na linalofuata sera ya AI ya mwajiri wako" }
  ],
  chapters: [
    {
      name: "Sura 1: Jinsi AI inavyobadilisha kazi",
      lessons: [
        {
          objectives: ["O1"],
          title: "AI inabadilisha kazi ndogo, si kazi nzima tu",
          minutes: 5,
          goal: "Eleza jinsi AI inavyoathiri kazi ndogo zilizo ndani ya kazi.",
          text: [
            "Kila kazi ni kifurushi cha kazi ndogo ndogo. Mpokezi wa kliniki anajibu simu, anapanga miadi, anakagua bima, anawakaribisha wagonjwa, na anawatuliza watu wenye wasiwasi. Kiongozi wa ghala anapanga zamu, anafuatilia bidhaa, anawafundisha wafanyakazi wapya na anatatua matatizo sakafuni.",
            "Zana za AI ni hodari katika baadhi ya kazi: kuandika rasimu za ujumbe, kufupisha, kutafuta ndani ya taarifa, kujaza fomu, kupanga na kutambua mifumo. Ni dhaifu katika nyingine: kazi za mikono, kusoma hali ya watu waliopo, kujenga uaminifu, kushughulikia jambo jipya, na kubeba uwajibikaji.",
            "Kwa hiyo katika kazi nyingi, AI inabadilisha ni kazi ndogo zipi zinachukua muda. Watu wanaojifunza kutumia AI kwa kazi za kawaida zinazojirudia mara nyingi hupata muda zaidi kwa kazi za kibinadamu, na hilo linaweza kuwafanya wawe wa thamani zaidi."
          ],
          words: [["Kazi ndogo (task)", "kipande kimoja cha kazi ndani ya kazi nzima, kama kupanga miadi."], ["Kazi ya kawaida inayojirudia (routine task)", "kazi inayofanywa kwa njia ile ile tena na tena."], ["Kujiongezea ujuzi (upskilling)", "kujifunza ujuzi mpya ili ufanye kazi yako vizuri zaidi au upande cheo."]],
          slides: [
            { title: "Kazi ni kifurushi cha kazi ndogo", bullets: ["Mpokezi: simu, miadi, bima, kukaribisha watu", "Kiongozi wa ghala: zamu, bidhaa, mafunzo, matatizo"] },
            { title: "AI inachofanya vizuri", bullets: ["Kuandika rasimu na kufupisha", "Kutafuta taarifa na kujaza fomu", "Kupanga na kutambua mifumo"] },
            { title: "Watu wanachofanya vizuri zaidi", bullets: ["Kazi za mikono", "Kusoma hali ya watu na kujenga uaminifu", "Kushughulikia jambo jipya; kubeba uwajibikaji"] }
          ],
          tryIt: "Andika jina la kazi yako ya sasa au ya mwisho, na uorodheshe angalau kazi ndogo nane unazofanya (au ulizofanya) katika wiki ya kawaida.",
          youCanNow: "kueleza jinsi AI inavyoathiri kazi ndogo zilizo ndani ya kazi.",
          quickCheck: [
            { objective: "O1", q: "Ukifikiria jinsi AI inavyobadilisha kazi, kazi ni nini?", options: ["Kazi ndogo moja tu", "Jina la kazi peke yake", "Kifurushi cha kazi ndogo", "Orodha ya zana"], answer: 2, why: "Kazi ni kifurushi cha kazi ndogo, na AI inabadilisha baadhi ya kazi ndogo kuliko nyingine." },
            { objective: "O1", q: "Unataka kuona jinsi AI inavyoweza kuathiri kazi yako. Unafanya nini kwanza?", options: ["Kuorodhesha kazi ndogo unazofanya katika wiki ya kawaida", "Kuacha kazi na kutafuta kazi mpya", "Kuuliza AI kama utabadilishwa", "Kupuuza AI kabisa"], answer: 0, why: "Kuorodhesha kazi zako kunaonyesha zipi AI inaweza kusaidia na zipi zinakutegemea wewe." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuweka alama: AI inaweza kusaidia, ujuzi wa kibinadamu, au vyote",
          minutes: 5,
          goal: "Panga kazi ndogo za kazi yako kulingana na mahali AI inapoweza kusaidia.",
          text: [
            "Chukua orodha yako na uweke alama kwa kila kazi. \"AI inaweza kusaidia\": kuandika barua pepe, kutengeneza orodha ya kukagua, kufupisha sera ndefu. \"Ujuzi wa kibinadamu\": kumtuliza mteja aliyekasirika ana kwa ana, kuinua na kupakia mizigo kwa usalama, kutengeneza mashine. \"Vyote viwili\": kuandika ripoti ambapo AI inaandika rasimu na wewe unakagua ukweli, au kupanga ratiba ambapo AI inapendekeza na wewe unaamua.",
            "Unaweza kumwomba msaidizi wa AI akusaidie kufikiri: \"Mimi ni kiongozi wa zamu katika duka. Hizi ni kazi zangu. Zipi msaidizi wa AI anaweza kusaidia, na kwa njia gani?\" Kisha tumia busara yako; unaijua kazi kuliko AI.",
            "Angalia kazi za \"ujuzi wa kibinadamu\". Hizi ni nguvu zako za kukuza na kuzungumzia na waajiri: mawasiliano, kufanya kazi pamoja, kutatua matatizo, usalama, kujali watu."
          ],
          steps: ["Weka alama kwa kila kazi: AI inaweza kusaidia, ujuzi wa kibinadamu, au vyote viwili.", "Muombe msaidizi wa AI mawazo, kisha uamue mwenyewe.", "Zungushia duara kazi mbili za \"AI inaweza kusaidia\" za kujaribu mwezi huu.", "Pigia mstari kazi zako za \"ujuzi wa kibinadamu\" zenye nguvu zaidi."],
          words: [["Ujuzi wa kibinadamu", "ujuzi kama mawasiliano, kufanya kazi pamoja, busara na kujali ambao watu wanaufanya vizuri zaidi; pia huitwa soft skills au durable skills."]],
          slides: [
            { title: "Alama tatu", bullets: ["AI inaweza kusaidia: barua pepe, orodha, mafupisho", "Ujuzi wa kibinadamu: kutuliza watu, kuinua salama, matengenezo", "Vyote viwili: AI inaandika rasimu, wewe unakagua na kuamua"] },
            { title: "Uliza AI, kisha uamue", bullets: ["\"Kazi zangu zipi AI inaweza kusaidia?\"", "Unaijua kazi kuliko AI"] },
            { title: "Nguvu zako", bullets: ["Mawasiliano na kufanya kazi pamoja", "Kutatua matatizo na usalama", "Kujali watu na busara"] }
          ],
          tryIt: "Weka alama kwa kila kazi kwenye orodha yako. Zungushia duara kazi mbili za \"AI inaweza kusaidia\" utakazojaribu mwezi huu, na pigia mstari kazi zako mbili za ujuzi wa kibinadamu zenye nguvu zaidi.",
          youCanNow: "kupanga kazi ndogo za kazi yako kulingana na mahali AI inapoweza kusaidia na mahali ujuzi wako wa kibinadamu ni muhimu zaidi.",
          quickCheck: [
            { objective: "O2", q: "Kazi ipi ni ujuzi wa kibinadamu?", options: ["Kunakili namba kwenye fomu", "Kuandika ripoti ile ile kila siku", "Kupanga barua pepe kwa tarehe", "Kumtuliza mteja aliyekasirika"], answer: 3, why: "Kujenga uaminifu na kutuliza watu kunategemea ujuzi wa kibinadamu." },
            { objective: "O2", q: "AI inaweka alama kwenye kazi yako \"kushughulikia malalamiko ya wateja\" kama \"AI inaweza kusaidia\" peke yake. Hukubaliani. Unafanya nini?", options: ["Kukubali alama ya AI", "Kufanya uamuzi wa mwisho mwenyewe; huenda ni \"vyote viwili\"", "Kufuta kazi hiyo", "Kuuliza AI nyingine hadi ikubaliane nawe"], answer: 1, why: "Unaijua kazi yako kuliko yeyote, kwa hiyo wewe unafanya uamuzi wa mwisho kwa kila alama." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kupata taarifa za kuaminika kuhusu fani yako",
          minutes: 5,
          goal: "Tafuta mwelekeo wa kazi yako kwenye chanzo rasmi.",
          text: [
            "Vichwa vya habari kuhusu AI na kazi mara nyingi vinatisha au vinatia chumvi. Tumia vyanzo rasmi vinavyotegemea takwimu badala yake. Nchini Marekani, Bureau of Labor Statistics (BLS) inachapisha Occupational Outlook Handbook kwenye bls.gov/ooh. Kwa mamia ya kazi, inaonyesha kazi inahusu nini, mafunzo ya kawaida, mshahara na mwelekeo wa kazi unaotarajiwa.",
            "Tafuta kazi yako, kisha andika: wafanyakazi wanafanya nini, jinsi ya kuwa mmoja wao, mshahara wa kati, na mwelekeo wa kazi. Angalia pia kazi zinazohusiana; zinaweza kukuonyesha hatua zinazofuata.",
            "CareerOneStop, kutoka Wizara ya Kazi ya Marekani (US Department of Labor), inakusaidia kupata programu za mafunzo na American Job Center iliyo karibu nawe, inayoweza kutoa huduma za kazi bure. Muombe AI akueleze chochote kinachochanganya kwenye kurasa hizi, lakini chukua namba kutoka kwenye ukurasa wenyewe."
          ],
          steps: ["Nenda bls.gov/ooh na utafute kazi yako.", "Andika: wanafanya nini, jinsi ya kuwa mmoja wao, mshahara wa kati, mwelekeo.", "Kagua kazi mbili zinazohusiana.", "Tafuta American Job Center iliyo karibu nawe kwenye CareerOneStop."],
          words: [["BLS", "Bureau of Labor Statistics: shirika la serikali ya Marekani linalochapisha takwimu za kazi na mishahara."], ["Mwelekeo wa kazi (job outlook)", "mabadiliko yanayotarajiwa katika idadi ya nafasi za kazi fulani."], ["Mshahara wa kati (median pay)", "mshahara ulio katikati: nusu wanapata zaidi, nusu wanapata kidogo."]],
          slides: [
            { title: "Epuka kelele za habari", bullets: ["Tumia vyanzo rasmi vinavyotegemea takwimu", "BLS Occupational Outlook Handbook: bls.gov/ooh"] },
            { title: "Cha kuandika", bullets: ["Wafanyakazi wanafanya nini", "Jinsi ya kuwa mmoja wao", "Mshahara wa kati na mwelekeo wa kazi"] },
            { title: "Msaada wa bure karibu nawe", bullets: ["CareerOneStop: mafunzo na vituo vya kazi", "American Job Centers zinatoa huduma za kazi", "Chukua namba kutoka ukurasa, si kutoka AI"] }
          ],
          sources: [BLS_OOH, CAREERONESTOP],
          tryIt: "Tafuta kazi yako ya sasa au unayoilenga kwenye bls.gov/ooh. Andika ukweli mitatu kutoka kwenye ukurasa huo, kisha tafuta American Job Center iliyo karibu nawe kwenye CareerOneStop.",
          youCanNow: "kupata taarifa za kuaminika kuhusu mwelekeo na mafunzo katika fani yako.",
          quickCheck: [
            { objective: "O3", q: "Occupational Outlook Handbook inaonyesha nini?", options: ["Wafanyakazi wanafanya nini, jinsi ya kuwa mmoja wao, mshahara na mwelekeo", "Nafasi za kazi zilizo karibu nawe leo", "Alama yako ya mkopo", "Maoni kuhusu makampuni"], answer: 0, why: "OOH ya BLS inaeleza kila kazi, mshahara wake na mwelekeo wake." },
            { objective: "O3", q: "AI inakuambia fani yako itakua kwa 30%. Unafanya nini?", options: ["Kuwaambia marafiki", "Kupanga maisha yako ya kazi kwa msingi huo", "Kukagua namba hiyo kwenye ukurasa rasmi wa BLS", "Kupuuza takwimu zote za kazi"], answer: 2, why: "Namba za mwelekeo wa kazi zinatoka kwenye ukurasa rasmi, si kwa AI." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Jinsi AI inavyobadilisha kazi",
        questions: [
          { objective: "O1", q: "Katika kazi nyingi, AI hasa inabadilisha:", options: ["Hakuna kitu kabisa", "Ni kazi ndogo zipi zinachukua muda", "Kila kazi ndogo kabisa", "Jina la kazi tu"], answer: 1, why: "AI inaathiri kazi ndogo zilizo ndani ya kazi." },
          { objective: "O2", q: "AI kwa kawaida ni hodari katika kazi ipi?", options: ["Kutengeneza forklift", "Kumtuliza mteja aliyekasirika ana kwa ana", "Kuinua masanduku kwa usalama", "Kuandika rasimu ya barua pepe ya kawaida"], answer: 3, why: "Kuandika rasimu ya maandishi ni nguvu ya zana za AI." },
          { objective: "O2", q: "Kuandika ripoti ambapo AI inaandika rasimu na wewe unakagua ukweli kunawekewa alama:", options: ["Vyote viwili", "Ujuzi wa kibinadamu peke yake", "AI peke yake", "Hakuna"], answer: 0, why: "AI inasaidia na mtu anakagua." },
          { objective: "O3", q: "Unapata wapi mwelekeo rasmi wa kazi wa Marekani kwa kazi fulani?", options: ["Kisio la AI", "Video inayosambaa mtandaoni", "BLS Occupational Outlook Handbook", "Sehemu ya maoni"], answer: 2, why: "BLS inachapisha takwimu rasmi za mwelekeo." },
          { objective: "O3", q: "American Job Center inaweza kutoa nini?", options: ["Mikopo", "Kazi za uhakika", "Huduma za kazi bure na taarifa za mafunzo", "Shahada za chuo"], answer: 2, why: "Zinatoa huduma za kazi; hakuna ahadi." }
        ]
      }
    },
    {
      name: "Sura 2: Kuandaa mpango wako",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuchagua ujuzi mitatu wa kujenga",
          minutes: 5,
          goal: "Chagua ujuzi mitatu unaofaa kazi yako na malengo yako.",
          text: [
            "Chagua mchanganyiko: ujuzi mmoja wa zana ya AI, ujuzi mmoja wa fani yako, na ujuzi mmoja wa kibinadamu. Mfano kwa mfanyakazi wa ghala anayetaka kuwa kiongozi: (1) kutumia msaidizi wa AI kuandika maelezo ya zamu yaliyo wazi, (2) kujifunza mfumo wa usimamizi wa ghala na misingi ya hesabu ya bidhaa, (3) kuwaelekeza na kuwafundisha wafanyakazi wapya.",
            "Tumia ulichopata: sehemu ya BLS \"How to become one\" (jinsi ya kuwa mmoja wao), matangazo ya kazi unayoitaka, na orodha yako ya kazi ndogo. Ujuzi unaoonekana katika matangazo mengi ya kazi unafaa kujifunzwa.",
            "Muombe AI akusaidie kulinganisha: \"Haya ni matangazo matano ya kazi ya kiongozi wa ghala. Ujuzi upi unaonekana mara nyingi zaidi?\" Bandika matangazo tu, hakuna kitu cha binafsi."
          ],
          steps: ["Kusanya matangazo matatu hadi matano ya kazi unayoilenga.", "Orodhesha ujuzi wanaouomba mara nyingi zaidi.", "Chagua ujuzi mmoja wa zana ya AI, mmoja wa fani na mmoja wa kibinadamu.", "Andika kwa nini kila mmoja ni muhimu."],
          words: [["Tangazo la kazi (job posting)", "tangazo la nafasi ya kazi linaloorodhesha majukumu na ujuzi unaohitajika."], ["Ujuzi wa fani", "ujuzi maalum wa aina ya kazi yako, kama mifumo ya hesabu ya bidhaa au maneno ya kitabibu."]],
          slides: [
            { title: "Chagua mchanganyiko wa ujuzi mitatu", bullets: ["Ujuzi mmoja wa zana ya AI", "Ujuzi mmoja wa fani", "Ujuzi mmoja wa kibinadamu"] },
            { title: "Mahali pa kuangalia", bullets: ["BLS \"How to become one\" (jinsi ya kuwa mmoja wao)", "Matangazo ya kazi unayoilenga", "Orodha yako ya kazi ndogo"] },
            { title: "AI inaweza kulinganisha matangazo", bullets: ["\"Ujuzi upi unaonekana mara nyingi zaidi?\"", "Bandika matangazo tu, hakuna kitu cha binafsi"] }
          ],
          tryIt: "Tafuta matangazo matatu ya kazi unayoitaka. Uliza AI ujuzi upi unaonekana mara nyingi zaidi, kisha chagua ujuzi wako mitatu na uandike kwa nini kila mmoja ni muhimu.",
          youCanNow: "kuchagua ujuzi mitatu wa kujenga kwa kutumia matangazo halisi ya kazi na malengo yako.",
          quickCheck: [
            { objective: "O4", q: "Upi ni mchanganyiko mzuri wa ujuzi mitatu wa kujenga?", options: ["Zana tatu za AI", "Ujuzi mmoja wa zana ya AI, mmoja wa fani na mmoja wa kibinadamu", "Ujuzi mitatu ulio nao tayari", "Yoyote mitatu kutoka kwenye tangazo"], answer: 1, why: "Mchanganyiko unagusa kutumia AI, fani yako na ujuzi wa kibinadamu ambao AI haiwezi kuuchukua nafasi." },
            { objective: "O4", q: "Unataka kujua ujuzi upi waajiri wanautaka kwa kazi unayoilenga. Unafanya nini?", options: ["Kukisia", "Kumuuliza rafiki wa fani tofauti", "Kuchagua ujuzi unaosikika kuwa mgumu zaidi", "Kusoma matangazo halisi ya kazi na kuona ujuzi upi unaonekana zaidi"], answer: 3, why: "Ujuzi unaoonekana katika matangazo mengi halisi unafaa kujifunzwa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kujenga mpango wa siku 90 wa kujiongezea ujuzi",
          minutes: 5,
          goal: "Geuza ujuzi wako mitatu kuwa mpango wa siku 90 unaowezekana.",
          text: [
            "Mpango unafanya kujifunza kutokee kweli. Kwa kila ujuzi, andika: rasilimali ya bure au ya bei nafuu, muda wa kila wiki, na njia ya kuthibitisha umejifunza. Ushahidi unaweza kuwa cheti, mradi, sampuli ya kazi au msimamizi wako akikuona ukiufanya.",
            "Rasilimali za bure ni pamoja na maktaba ya eneo lako (nyingi zinatoa kozi za mtandaoni bure), American Job Centers, vyuo vya jamii (community colleges), mafunzo ya mwajiri, na kozi za bure kutoka makampuni makubwa ya teknolojia. Kagua gharama na maelezo kwenye tovuti rasmi ya kila moja.",
            "Uweke mdogo: saa mbili au tatu kwa wiki ni bora kuliko mpango mkubwa utakaouacha. Tumia msaidizi wa AI kutengeneza ratiba ya kila wiki na kukuuliza maswali ya mazoezi, na zoeza ujuzi wa AI kwenye kazi halisi kazini kama mwajiri wako anaruhusu."
          ],
          steps: ["Kwa kila ujuzi: rasilimali, muda wa kila wiki, ushahidi.", "Kagua gharama na maelezo ya kila rasilimali kwenye tovuti yake rasmi.", "Weka nyakati za kujifunza za kila wiki kwenye kalenda yako.", "Pitia upya siku ya 30, 60 na 90."],
          words: [["Ushahidi wa ujuzi", "kitu kinachoonyesha unaweza kuufanya: cheti, mradi au sampuli ya kazi."], ["Chuo cha jamii (community college)", "chuo cha umma cha eneo lako chenye kozi na vyeti vya bei nafuu."]],
          slides: [
            { title: "Kwa kila ujuzi", bullets: ["Rasilimali ya bure au ya bei nafuu", "Muda wa kila wiki", "Njia ya kuuthibitisha"] },
            { title: "Mahali pa bure pa kujifunza", bullets: ["Kozi za mtandaoni za maktaba", "American Job Centers na vyuo vya jamii", "Mafunzo ya mwajiri"] },
            { title: "Uweke mdogo", bullets: ["Saa 2-3 kwa wiki unazoweza kudumisha", "AI inatengeneza ratiba na kukuuliza maswali", "Pitia upya siku ya 30, 60 na 90"] }
          ],
          sources: [CAREERONESTOP],
          tryIt: "Andika mpango wako wa siku 90: kwa kila mmoja wa ujuzi wako mitatu, rasilimali, muda wa kila wiki na ushahidi. Weka nyakati za kusoma za wiki mbili za kwanza kwenye kalenda yako.",
          youCanNow: "kujenga mpango wa siku 90 unaowezekana wa kujifunza ujuzi mitatu mipya.",
          quickCheck: [
            { objective: "O5", q: "Kipi ni ushahidi wa ujuzi?", options: ["Kusema wewe ni hodari", "Kutazama video moja", "Cheti, mradi au sampuli ya kazi", "Kuhifadhi kiungo cha kozi"], answer: 2, why: "Ushahidi ni kitu unachoweza kuonyesha, kama cheti, mradi au sampuli ya kazi." },
            { objective: "O5", q: "Unafanya kazi muda wote. Unaandika mpango upi wa kusoma?", options: ["Saa 2 hadi 3 kwa wiki, zilizopangwa kwenye kalenda yako", "Saa 10 kila usiku", "Kusoma unapojisikia", "Kusoma wiki moja tu kabla ya usaili"], answer: 0, why: "Muda mdogo wa kawaida kwenye kalenda yako ndio mpango unaoweza kufanikiwa zaidi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuzungumza na waajiri kuhusu ujuzi wa AI",
          minutes: 5,
          goal: "Toa jibu fupi, la kweli na mahususi kuhusu jinsi unavyotumia AI kazini.",
          text: [
            "Waajiri wanazidi kuuliza, \"Unatumiaje AI?\" Jibu zuri ni mahususi na la kweli, na linaonyesha busara. Tumia mpangilio huu: Kazi, Zana, Ukaguzi, Matokeo.",
            "Mfano: \"Ninatumia Microsoft Copilot kuandika rasimu ya maelezo yangu ya mwisho wa zamu (kazi na zana). Kila mara ninakagua hesabu dhidi ya ripoti ya skana kabla ya kuyatuma (ukaguzi). Inaniokolea kama dakika 15 kila zamu, na kiongozi anayefuata anapata maelezo yaliyo wazi zaidi (matokeo).\"",
            "Usitie chumvi kamwe. Usidai ujuzi usio nao, na fuata sera ya AI ya mwajiri wako: usiweke taarifa za siri za kampuni au za wateja katika zana za AI. Kuonyesha kwamba unajua mipaka ni sehemu ya ujuzi."
          ],
          steps: ["Chagua kazi moja halisi ambapo ulitumia AI (au ulijizoeza).", "Sema kazi, zana, jinsi ulivyokagua, na matokeo.", "Liweke kama sekunde 30.", "Lizoeze kwa sauti."],
          words: [["Sera ya AI", "kanuni za mwajiri kuhusu jinsi wafanyakazi wanavyoweza kutumia zana za AI."], ["Taarifa za siri", "taarifa za kampuni au za wateja ambazo hazipaswi kutolewa nje ya kampuni."]],
          slides: [
            { title: "Kazi, Zana, Ukaguzi, Matokeo", bullets: ["Ulichofanya", "Zana gani ya AI", "Jinsi ulivyokagua", "Kilichoboreka"] },
            { title: "Mfano", bullets: ["\"Ninatumia Copilot kuandika rasimu ya maelezo ya mwisho wa zamu.", "Ninakagua hesabu dhidi ya ripoti ya skana.", "Inaokoa dakika 15 kila zamu.\""] },
            { title: "Onyesha busara", bullets: ["Usitie chumvi ujuzi wako kamwe", "Fuata sera ya AI ya mwajiri wako", "Weka taarifa za siri nje ya AI"] }
          ],
          tryIt: "Kazi ya mwisho: maliza mpango wako wa kazi na AI: orodha ya kazi ndogo zenye alama, ukweli mitatu wa BLS, mpango wako wa siku 90, na jibu la sekunde 30 la Kazi-Zana-Ukaguzi-Matokeo unalolizoeza kwa sauti.",
          youCanNow: "kupanga ukuaji wako katika ulimwengu wa kazi uliobadilishwa na AI na kuzungumza kwa ukweli na waajiri kuhusu ujuzi wako wa AI.",
          quickCheck: [
            { objective: "O6", q: "Katika jibu la Kazi-Zana-Ukaguzi-Matokeo, Matokeo ni nini?", options: ["Jina la zana ya AI", "Jinsi ulivyokagua kazi ya AI", "Ulichoiuliza AI", "Kilichoboreka kwa sababu ya kazi yako"], answer: 3, why: "Matokeo ni kilichotokea, kama muda uliookolewa au makosa machache." },
            { objective: "O6", q: "Msaili anakuuliza kama umetumia AI kutengeneza ripoti. Umejaribu mara mbili tu. Unasema nini?", options: ["Kusema wewe ni mtaalamu", "Kueleza kwa ukweli zile mara mbili: kazi, zana, jinsi ulivyokagua na matokeo", "Kusema hujawahi kusikia kuhusu AI", "Kubadilisha mada"], answer: 1, why: "Jibu la kweli na mahususi linajenga uaminifu; usidai kamwe ujuzi usio nao." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuandaa mpango wako",
        questions: [
          { objective: "O4", q: "Mchanganyiko mzuri wa ujuzi mitatu ni:", options: ["Ujuzi mmoja wa zana ya AI, mmoja wa fani, mmoja wa kibinadamu", "Apps tatu zozote", "Ujuzi wa AI peke yake", "Hakuna"], answer: 0, why: "Mchanganyiko unakufanya uwe na uwiano na wa thamani." },
          { objective: "O4", q: "Unaweza kuona wapi ujuzi ambao waajiri wanautaka?", options: ["Picha ya utani mtandaoni", "Utabiri wa nyota", "Kisio la AI", "Matangazo halisi ya kazi unayoilenga"], answer: 3, why: "Matangazo yanaorodhesha ujuzi unaohitajika." },
          { objective: "O5", q: "Mpango upi una nafasi kubwa zaidi ya kufanikiwa?", options: ["Saa 40 wikendi hii tu", "Saa 2-3 kwa wiki, kwenye kalenda yako", "Wakati wowote unapojisikia", "Hakuna mpango"], answer: 1, why: "Mipango midogo ya kudumu inakamilika." },
          { objective: "O6", q: "Katika Kazi, Zana, Ukaguzi, Matokeo, \"Ukaguzi\" maana yake ni:", options: ["Jinsi ulivyothibitisha kazi ya AI", "Mshahara wako", "Hundi ya benki", "Kuangalia barua pepe"], answer: 0, why: "Kukagua kunaonyesha busara." },
          { objective: "O6", q: "Kipi HUPASWI kufanya unapoeleza ujuzi wa AI?", options: ["Kutaja jinsi unavyokagua kazi", "Kutoa mfano mahususi", "Kudai ujuzi usio nao", "Kufuata sera ya mwajiri wako"], answer: 2, why: "Ukweli ni muhimu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI katika Ulimwengu Mpya wa Kazi",
    questions: [
      { objective: "O1", q: "Njia bora ya kufikiria kazi ni kama:", options: ["Kazi ndogo moja tu", "Kifurushi cha kazi ndogo", "Jina tu", "Mshahara"], answer: 1, why: "Kazi zina kazi ndogo nyingi." },
      { objective: "O1", q: "Ipi ni kazi ya kawaida inayojirudia?", options: ["Kuongoza mkutano wa timu", "Kumfariji mgonjwa mwenye hofu", "Kushughulikia dharura mpya kabisa", "Kuandika ripoti ile ile kila siku"], answer: 3, why: "Kazi za kawaida zinajirudia kwa njia ile ile." },
      { objective: "O1", q: "Kujiongezea ujuzi (upskilling) ni nini?", options: ["Aina ya AI", "Kuacha kazi", "Kufanya kazi saa chache", "Kujifunza ujuzi mpya ili ufanye vizuri zaidi au upande cheo"], answer: 3, why: "Kujiongezea ujuzi kunajenga ujuzi mpya." },
      { objective: "O2", q: "Kipi ni ujuzi wa kibinadamu?", options: ["Kupanga jedwali la Excel (spreadsheet)", "Kujenga uaminifu na wateja", "Kufupisha hati", "Kukagua tahajia"], answer: 1, why: "Kujenga uaminifu ni nguvu ya kibinadamu." },
      { objective: "O2", q: "AI inapoweka alama kwenye kazi zako, nani anafanya uamuzi wa mwisho?", options: ["Jirani yako", "AI", "Wewe", "Hakuna mtu"], answer: 2, why: "Unaijua kazi kuliko yeyote." },
      { objective: "O2", q: "Kwa nini upigie mstari kazi zako za ujuzi wa kibinadamu?", options: ["Ni nguvu za kukuza na kuzungumzia", "Ili uzifute", "Ili uzifiche", "Hazina umuhimu"], answer: 0, why: "Ujuzi wa kibinadamu unaendelea kuwa wa thamani." },
      { objective: "O3", q: "BLS ni kifupi cha:", options: ["Basic Labor Service", "Business Learning System", "Bureau of Labor Statistics", "Board of Licensed Skills"], answer: 2, why: "BLS inachapisha takwimu za kazi." },
      { objective: "O3", q: "Occupational Outlook Handbook inaonyesha:", options: ["Wafanyakazi wanafanya nini, jinsi ya kuwa mmoja wao, mshahara na mwelekeo", "Habari za watu maarufu", "Vidokezo vya hisa", "Mapishi"], answer: 0, why: "Hizo ndizo sehemu zake kuu." },
      { objective: "O3", q: "Unapaswa kuchukua namba za mwelekeo wa kazi wapi?", options: ["Muhtasari wa AI bila kukagua", "Ukurasa rasmi", "Kichwa cha habari", "Uvumi"], answer: 1, why: "AI inaweza kukosea namba." },
      { objective: "O3", q: "CareerOneStop inatoka:", options: ["Kampuni ya simu", "Mtandao wa kijamii", "Benki", "Wizara ya Kazi ya Marekani (US Department of Labor)"], answer: 3, why: "Ni rasilimali ya Wizara ya Kazi." },
      { objective: "O4", q: "Ujuzi unaoonekana katika matangazo mengi ya kazi:", options: ["Unafaa kujifunzwa", "Si muhimu", "Ni kinyume cha sheria", "Umepitwa na wakati"], answer: 0, why: "Ni wazi waajiri wanautaka." },
      { objective: "O4", q: "Unapobandika matangazo ya kazi kwenye AI, acha nje:", options: ["Orodha za ujuzi", "Maandishi ya tangazo", "Jina la kazi", "Taarifa zako binafsi"], answer: 3, why: "Weka maelezo binafsi nje." },
      { objective: "O5", q: "Kipi ni ushahidi wa ujuzi?", options: ["Uvumi", "Tamaa", "Cheti, mradi au sampuli ya kazi", "Chapisho la mtandao wa kijamii linalosema wewe ni hodari"], answer: 2, why: "Ushahidi unaonyesha unachoweza kufanya." },
      { objective: "O5", q: "Mara nyingi unaweza kupata kozi za mtandaoni za bure wapi?", options: ["Matangazo yanayojitokeza ghafla", "Maktaba ya eneo lako", "Barua pepe za taka (spam)", "Hakuna mahali"], answer: 1, why: "Maktaba nyingi zinatoa kozi za bure." },
      { objective: "O5", q: "Unapaswa kupitia upya mpango wako wa siku 90 lini?", options: ["Kila saa", "Kamwe", "Siku ya 1 tu", "Siku ya 30, 60 na 90"], answer: 3, why: "Kupitia mara kwa mara kunakuweka kwenye njia." },
      { objective: "O6", q: "Jibu zuri kuhusu ujuzi wa AI ni:", options: ["Lililonakiliwa kutoka tovuti", "La jumla na la kujisifu", "Mahususi na la kweli", "La kubuni"], answer: 2, why: "Majibu mahususi na ya kweli yanajenga uaminifu." },
      { objective: "O6", q: "Kipi kinafaa katika jibu la Kazi-Zana-Ukaguzi-Matokeo?", options: ["\"Ninakagua hesabu dhidi ya ripoti ya skana.\"", "\"AI inafanya kazi yangu yote.\"", "\"Ninabandika taarifa za wateja kwenye chatbots.\"", "\"Sikagui kitu chochote kamwe.\""], answer: 0, why: "Inaonyesha jinsi unavyothibitisha." },
      { objective: "O6", q: "Kabla ya kutumia AI kazini unapaswa kujua:", options: ["Nywila ya mfanyakazi mwenzako", "Sera ya AI ya mwajiri wako", "Namba za kadi za wateja", "Hakuna kitu"], answer: 1, why: "Sera zinaweka kinachoruhusiwa." },
      { objective: "O6", q: "Taarifa za siri za kampuni zinapaswa:", options: ["Kubandikwa kwenye chatbot yoyote", "Kukaa nje ya zana za AI isipokuwa mwajiri wako ameruhusu", "Kuwekwa mtandaoni", "Kugawiwa marafiki"], answer: 1, why: "Lazima zilindwe." },
      { objective: "O6", q: "Kozi hii inaahidi nini kuhusu kazi?", options: ["Hakuna; inakusaidia kupanga na kujenga ujuzi", "Kazi ya uhakika", "Nyongeza ya mshahara ya uhakika", "Kupandishwa cheo"], answer: 0, why: "Hakuna kozi inayoweza kuahidi matokeo." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 4, 7, 10, 12, 14, 15, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Orodha ya kazi ndogo zenye alama", objective: "O2", notYet: "Kazi ndogo chini ya nane, au kazi hazina alama.", meets: "Angalau kazi ndogo nane, kila moja ikiwa na alama \"AI inaweza kusaidia\", \"ujuzi wa kibinadamu\" au \"vyote viwili\".", exceeds: "Kazi mbili za \"AI inaweza kusaidia\" zimezungushiwa duara ili kujaribiwa, na nguvu mbili za ujuzi wa kibinadamu zimepigiwa mstari." },
      { name: "Ukweli rasmi kuhusu fani", objective: "O3", notYet: "Ukweli haupo au ulitoka kwa AI.", meets: "Ukweli mitatu kuhusu fani kutoka BLS Occupational Outlook Handbook.", exceeds: "Pia inataja American Job Center iliyo karibu na huduma moja inayotoa." },
      { name: "Mpango wa siku 90", objective: "O5", notYet: "Ujuzi hauna rasilimali, muda wala ushahidi.", meets: "Ujuzi mitatu, kila mmoja ukiwa na rasilimali ya bure, muda wa kila wiki na ushahidi, unaopitiwa upya siku ya 30, 60 na 90.", exceeds: "Wiki mbili za kwanza za kusoma ziko kwenye kalenda ya mwanafunzi." },
      { name: "Jibu la AI la sekunde 30", objective: "O6", notYet: "Jibu si wazi au linadai ujuzi ambao mwanafunzi hana.", meets: "Jibu la kweli la Kazi-Zana-Ukaguzi-Matokeo lililosemwa kwa sauti kwa kama sekunde 30.", exceeds: "Jibu lina namba au matokeo mahususi." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi ambao bado wanafuata mpango wao wa siku 90 siku ya 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaopata cheti au kumaliza kozi kutoka mpango wao ndani ya siku 90",
      "Wanafunzi wanaopata kazi mpya, kupandishwa cheo au nyongeza ya mshahara ndani ya miezi 6"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja au kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure: ChatGPT, Microsoft Copilot au Google Gemini",
      "Tovuti za bure za bls.gov/ooh na CareerOneStop, na matangazo matatu halisi ya kazi",
      "Karatasi, app ya maelezo au kalenda kwa orodha ya kazi ndogo na mpango wa siku 90",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Katika kituo cha kazi au kikundi cha mahali pa kazi: fanyeni jaribio la awali pamoja, kisha wekeni alama kwenye orodha za kazi ndogo kwa jozi ili wanafunzi waweze kupinga alama za wenzao.",
      "Kuwa mkweli kwamba kozi haiahidi kazi; inawasaidia wanafunzi kupanga na kujenga ujuzi.",
      "Wakumbushe wanafunzi kufuata sera ya AI ya mwajiri wao na kuweka taarifa za siri za kampuni nje ya zana za AI.",
      "Waambie wanafunzi waseme jibu lao la sekunde 30 kwa sauti kwa mwenzao.",
      "Pima mpango wa kazi na AI kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};

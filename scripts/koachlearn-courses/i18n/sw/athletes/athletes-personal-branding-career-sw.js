"use strict";

// Koach Learn course (Swahili translation of athletes/athletes-personal-branding-career.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-personal-branding-career-sw",
  lang: "sw",
  translationOf: "athletes-personal-branding-career",
  category: "Athletes",
  name: "Kujitambulisha na Kujenga Kazi kwa Wanamichezo",
  skills: "Kutaja ujuzi wako unaohamishika, Kuandika hadithi yako ya mwanamichezo, Kutengeneza wasifu (CV) kwa AI, Kuandaa wasifu wa LinkedIn, Kujenga mtandao na mahojiano ya kupata taarifa",
  outcome: "kugeuza uzoefu wako wa michezo kuwa zana za kazi: orodha ya ujuzi unaohamishika wenye ushahidi, hadithi ya sekunde 60, wasifu (CV) wa ukurasa mmoja uliotengenezwa kwa AI, wasifu wa LinkedIn, na ombi moja la mahojiano ya kupata taarifa lililotumwa kwa mtu aliye katika kazi unayotaka kuijua.",
  about: [
    "Kozi hii ni kwa wanamichezo wa sekondari, chuo na wanaoanza kazi wanaofikiria maisha wakati wa michezo na baada yake, na kwa makocha wanaowaongoza. Wanamichezo wengi watakuwa na kazi nje ya kucheza, na michezo tayari imekufundisha ujuzi ambao waajiri wanautaka.",
    "Utataja ujuzi huo, utasimulia hadithi yako kwa njia ambayo waajiri wanaielewa, utatengeneza wasifu (CV) na wasifu wa LinkedIn kwa msaada wa AI, na utaanza kujenga mtandao wa watu.",
    "Kila somo linachukua kama dakika tano na lina kazi ya vitendo ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Jenga seti yako ya kuanzia kazi: orodha ya ujuzi mitano unaohamishika wenye mfano wa michezo kwa kila mmoja, hadithi ya sekunde 60, wasifu (CV) wa ukurasa mmoja uliotengenezwa kwa AI na kukaguliwa na wewe, wasifu wa LinkedIn (kama umefikia umri unaoruhusiwa) au ukurasa wa kazi zako, na ombi moja la heshima la mahojiano ya kupata taarifa lililotumwa kwa mtu halisi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanamichezo wa sekondari, chuo na wanaoanza kazi wanaofikiria maisha wakati wa michezo na baada yake, na makocha wanaowaongoza.",
    startingPoint: "Wana miaka mingi ya uzoefu wa michezo, mara nyingi wakiwa na nafasi za uongozi, na wanatumia simu janja kila siku. Wengi hawana wasifu (CV), hawawezi kueleza ujuzi wao kwa lugha ya kazi, hawajachunguza kazi nje ya kucheza, na hawajawahi kumwomba mtaalamu ushauri.",
    gap: "Wanamichezo wengi watakuwa na kazi nje ya kucheza, na mabadiliko yanaweza kuwa magumu wakianza kuchelewa. Kugeuza uzoefu wa michezo kuwa ushahidi wa ujuzi, hadithi iliyo wazi, wasifu (CV) na mtandao wa watu kunawapa kujiamini na nafasi sasa na baada ya michezo.",
    constraints: [
      "Lugha rahisi, kama kiwango cha kusoma cha darasa la 8",
      "Simu au kompyuta yenye msaidizi wa AI wa bure; LinkedIn tu kama mwanafunzi amefikia umri unaoruhusiwa sasa, la sivyo Google Sites",
      "Kama dakika 60 kwa jumla",
      "Usibandike namba za Social Security au namba nyingine za siri kwenye AI",
      "Wanamichezo walio chini ya miaka 18 wamhusishe mzazi au mlezi kabla ya kuwasiliana na watu wazima wasiowajua"
    ],
    prerequisites: "Hakuna"
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa nafasi zako, utaratibu wako na changamoto zako katika michezo", action: "kuorodhesha ujuzi mitano unaohamishika wenye mfano halisi wa michezo kwa kila mmoja", standard: "kila mfano ukiwa wa kweli na wa kina kiasi cha kuhesabika kama ushahidi" },
    { id: "O2", condition: "Ukitumia mpangilio wa Zamani, Sasa na Baadaye", action: "kuandika na kusimulia hadithi ya sekunde 60 kuhusu wewe ni nani na unaelekea wapi", standard: "kama maneno 150, kwa sauti yako mwenyewe, na ikifanyiwa mazoezi kwa sauti hadi isikike ya kawaida" },
    { id: "O3", condition: "Ukipewa mambo unayopenda na msaidizi wa AI", action: "kuorodhesha kazi tatu za kuchunguza na njia moja ya kujifunza kuhusu kila moja", standard: "elimu na mshahara vikiwa vimekaguliwa kwenye tovuti rasmi ya kazi au kwa mshauri wa kazi" },
    { id: "O4", condition: "Ukitumia maelezo yako na msaidizi wa AI", action: "kutengeneza wasifu (CV) wa ukurasa mmoja unaoeleza michezo kwa lugha ya kazi", standard: "ukiwa na vipengele vinavyoanza kwa maneno ya kitendo, namba pale zilipo za kweli, kila taarifa imekaguliwa, hakuna namba za siri zilizoshirikiwa, na mtu amepitia" },
    { id: "O5", condition: "Kama umefikia umri unaoruhusiwa na LinkedIn, au ukitumia Google Sites kama hujafikia", action: "kuandaa wasifu wa kitaaluma wenye picha, kichwa, sehemu ya About, uzoefu na ujuzi", standard: "unaolingana na wasifu (CV) wako na ukiwa umeunganishwa na watu watano kwa ujumbe mfupi binafsi" },
    { id: "O6", condition: "Ukipewa mtu mmoja aliye katika kazi unayotaka kuijua", action: "kuandika na kutuma ombi la heshima la mahojiano ya kupata taarifa", standard: "likiwa na wewe ni nani, ulivyompata, kwa nini kazi yake inakuvutia, ombi dogo, maswali matatu yaliyoandaliwa na shukrani baadaye" }
  ],
  chapters: [
    {
      name: "Sura 1: Hadithi yako na ujuzi wako",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ujuzi wako unaohamishika",
          minutes: 5,
          goal: "Taja ujuzi mitano kutoka kwenye michezo unaofaa kazini, kila mmoja ukiwa na mfano halisi.",
          text: [
            "Ujuzi unaohamishika ni ujuzi unaoweza kuutumia katika kazi nyingi. Michezo inajenga mingi: kufanya kazi pamoja na timu, uongozi, kupanga muda, kuhimili shinikizo, kupokea maoni, nidhamu, mawasiliano na kustahimili baada ya kushindwa.",
            "Waajiri wanataka ushahidi, si maneno tu. \"Uongozi\" ni dai. \"Nahodha wa timu ya wachezaji 20; niliongoza mazoezi ya kupasha mwili na kutatua migogoro\" ni ushahidi.",
            "Msaidizi wa AI anaweza kukusaidia kuona ujuzi ambao hukuuona: \"Nimecheza mpira wa miguu wa timu ya shule kwa miaka minne, nilikuwa nahodha mwaka wa mwisho, niliweza kusawazisha mazoezi na kazi ya muda, na nilirudi baada ya kuumia goti (ACL). Hii inaonyesha ujuzi gani unaohamishika, na mfano mmoja kwa kila mmoja?\" Weka tu kilicho cha kweli."
          ],
          steps: ["Orodhesha ulichofanya katika michezo: nafasi, utaratibu, changamoto.", "Muulize AI hivi vinaonyesha ujuzi gani.", "Chagua ujuzi mitano.", "Andika mfano halisi kwa kila mmoja.", "Ondoa chochote kisicho cha kweli."],
          words: [["Ujuzi unaohamishika", "ujuzi unaoweza kuutumia katika kazi nyingi tofauti."], ["Ustahimilivu", "kurudi katika hali nzuri baada ya kukwama au kushindwa."]],
          slides: [
            { title: "Michezo inajenga ujuzi wa kazi", bullets: ["Kufanya kazi na timu, uongozi", "Kupanga muda, kuhimili shinikizo", "Kupokea maoni, nidhamu, ustahimilivu"] },
            { title: "Dai dhidi ya ushahidi", bullets: ["Dai: \"uongozi\"", "Ushahidi: \"Nahodha wa wachezaji 20; niliongoza mazoezi\""] },
            { title: "AI inakusaidia kuuona", bullets: ["Eleza ulichofanya", "Weka tu kilicho cha kweli"] }
          ],
          tryIt: "Tumia msaidizi wa AI kutafuta ujuzi katika uzoefu wako wa michezo. Andika ujuzi wako mitano bora, kila mmoja ukiwa na mfano wa kweli.",
          youCanNow: "kutaja ujuzi wako unaohamishika na kuuthibitisha kila mmoja kwa mfano.",
          quickCheck: [
            { objective: "O1", q: "Upi ni ujuzi unaohamishika?", options: ["Namba ya jezi yako", "Rekodi ya timu yako", "Kupokea maoni", "Zoezi unalolipenda zaidi"], answer: 2, why: "Ujuzi unaohamishika, kama kupokea maoni, unaweza kutumika katika kazi nyingi." },
            { objective: "O1", q: "Umeandika \"kufanya kazi na timu\" kwenye orodha yako. Unaufanyaje kuwa ushahidi?", options: ["Ongeza mfano halisi, kama kuandaa vipindi vya kusoma vya timu kabla ya mechi za ugenini", "Iandike kwa herufi kubwa", "Ongeza ujuzi zaidi", "Mwombe AI aifanye isikike kubwa zaidi"], answer: 0, why: "Waajiri wanataka ushahidi, kwa hiyo ongeza mfano halisi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Hadithi yako ya mwanamichezo ya sekunde 60",
          minutes: 5,
          goal: "Andika na ufanye mazoezi ya hadithi ya sekunde 60 kuhusu wewe ni nani na unaelekea wapi.",
          text: [
            "Watu watakuuliza \"Niambie kuhusu wewe\" katika usaili, katika kujenga mtandao, na hata wakati wa kusajiliwa na timu. Kuwa na jibu la sekunde 60 tayari.",
            "Tumia sehemu tatu: Zamani (michezo na ilichokufundisha), Sasa (unachofanya sasa: shule, kazi, mazoezi), Baadaye (mwelekeo unaotaka kuujua). Mfano: \"Nimecheza mpira wa kikapu kwa miaka kumi, na kuwa nahodha kulinifundisha kuongoza kikundi chini ya shinikizo. Sasa ninasoma biashara na ninafanya kazi ya muda katika gym. Ninapenda masoko ya michezo na ninataka kujifunza jinsi timu zinavyojenga jumuiya ya mashabiki.\"",
            "Mwombe msaidizi wa AI aifupishe hadi kama maneno 150, kisha ifanyie mazoezi kwa sauti hadi isikike ya kawaida, si kama umeikariri."
          ],
          steps: ["Andika Zamani, Sasa na Baadaye yako kwa sentensi moja au mbili kila moja.", "Mwombe AI aifupishe hadi kama maneno 150.", "Ihariri iwe kwa sauti yako.", "Ifanyie mazoezi kwa sauti mara tatu.", "Jipime muda: kama sekunde 60."],
          words: [["Elevator pitch", "utambulisho mfupi wa kuzungumza unaoweza kuutoa ndani ya safari moja ya lifti."], ["Kujenga mtandao", "kujenga mahusiano na watu wanaoweza kukupa ushauri na nafasi."]],
          slides: [
            { title: "\"Niambie kuhusu wewe\"", bullets: ["Usaili, mtandao, kusajiliwa", "Kuwa na sekunde 60 tayari"] },
            { title: "Sehemu tatu", bullets: ["Zamani: michezo na ilichokufundisha", "Sasa: shule, kazi, mazoezi", "Baadaye: unachotaka kukijua"] },
            { title: "Iboreshe", bullets: ["AI inaifupisha hadi ~maneno 150", "Ifanyie mazoezi kwa sauti", "Ya kawaida, si ya kukariri"] }
          ],
          tryIt: "Andika hadithi yako ya Zamani-Sasa-Baadaye, ifupishe kwa AI, na ujirekodi ukiisema kwenye simu yako. Isikilize mara moja na urekebishe jambo moja.",
          youCanNow: "kusimulia hadithi yako ya mwanamichezo ya sekunde 60 kwa uwazi na kwa kawaida.",
          quickCheck: [
            { objective: "O2", q: "Sehemu ya \"Sasa\" ya hadithi yako inasema nini?", options: ["Utoto wako", "Mshahara unaouota", "Mechi yako bora", "Unachofanya sasa: shule, kazi, mazoezi"], answer: 3, why: "Zamani ni michezo, Sasa ni unachofanya sasa, Baadaye ni mwelekeo wako." },
            { objective: "O2", q: "Hadithi yako inasikika ngumu na ya kukariri. Unafanya nini?", options: ["Isome kutoka kwenye simu yako", "Ifanyie mazoezi kwa sauti hadi isikike ya kawaida", "Ifanye iwe ya dakika tano", "Acha kuitumia"], answer: 1, why: "Ifanyie mazoezi kwa sauti hadi isikike ya kawaida, si ya kukariri." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Maisha baada ya michezo: kuchunguza kazi",
          minutes: 5,
          goal: "Orodhesha kazi tatu za kuchunguza na njia moja ya kujifunza kuhusu kila moja.",
          text: [
            "Kila mwanamichezo ataacha kushindana siku moja, kwa kuchagua, kwa kuumia au kwa umri. Kupanga mapema kunarahisisha mabadiliko hayo na kukupa kujiamini sasa.",
            "Chunguza kazi zinazohusiana na mambo unayopenda, si michezo tu. Ndani ya michezo: kufundisha (ukocha), athletic training (huduma ya majeraha ya wanamichezo), masoko ya michezo, utangazaji, uchambuzi wa takwimu, usimamizi wa viwanja. Nje ya michezo: biashara, afya, teknolojia, ufundi, ualimu, utumishi wa umma na mengine.",
            "Tumia msaidizi wa AI kupata mawazo na maelezo ya kazi, kisha kagua taarifa halisi kama elimu inayohitajika na mshahara kwenye tovuti rasmi za kazi, kama Occupational Outlook Handbook ya US Bureau of Labor Statistics (ofisi ya serikali ya Marekani ya takwimu za kazi), au kwa mshauri wa kazi wa shule."
          ],
          steps: ["Orodhesha mambo unayopenda zaidi ya kushinda.", "Muulize AI kazi zinazolingana nayo.", "Chagua tatu za kuchunguza.", "Kagua kila moja kwenye tovuti rasmi ya kazi au kwa mshauri wa kazi.", "Andika njia moja ya kujifunza zaidi kuhusu kila moja."],
          words: [["Mshauri wa kazi", "mtu wa shuleni au katika jamii anayekusaidia kuchunguza kazi."], ["Occupational Outlook Handbook", "mwongozo wa serikali ya Marekani kuhusu kazi, elimu inayohitajika na mshahara."]],
          slides: [
            { title: "Kila mwanamichezo hubadilika", bullets: ["Kwa kuchagua, kuumia au umri", "Panga mapema, jiamini sasa"] },
            { title: "Chunguza kwa upana", bullets: ["Ndani: ukocha, athletic training, masoko, takwimu", "Nje: biashara, afya, teknolojia, ufundi, ualimu"] },
            { title: "Kagua taarifa halisi", bullets: ["AI kwa kupata mawazo", "Tovuti rasmi za kazi kwa elimu na mshahara", "Ongea na mshauri wa kazi"] }
          ],
          sources: [{ name: "US Bureau of Labor Statistics: Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" }],
          tryIt: "Muulize msaidizi wa AI kazi kumi zinazolingana na mambo unayopenda. Chagua tatu na utafute elimu inayohitajika kwa kila moja kwenye tovuti rasmi ya kazi au muulize mshauri wako wa kazi.",
          youCanNow: "kuchunguza kazi zaidi ya kucheza na kukagua taarifa kwa vyanzo rasmi.",
          quickCheck: [
            { objective: "O3", q: "Ipi ni kazi nje ya michezo?", options: ["Ukocha", "Athletic training", "Utangazaji wa michezo", "Ualimu"], answer: 3, why: "Ualimu uko nje ya michezo; nyingine ni kazi ndani ya michezo." },
            { objective: "O3", q: "AI inakuambia mshahara wa kazi unayoipenda. Unafanya nini baadaye?", options: ["Ukague kwenye tovuti rasmi ya kazi au kwa mshauri wa kazi", "Uamini kabisa", "Uweke mtandaoni", "Chagua kazi hiyo mara moja"], answer: 0, why: "Kagua taarifa halisi kama mshahara na elimu kwa vyanzo rasmi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Hadithi yako na ujuzi wako",
        questions: [
          { objective: "O1", q: "Upi ni ushahidi wa uongozi?", options: ["\"Mimi ni kiongozi\"", "\"Uongozi!\"", "\"Nahodha wa timu ya wachezaji 20; niliongoza mazoezi ya kupasha mwili na kutatua migogoro\"", "\"Kila mtu ananipenda\""], answer: 2, why: "Mfano halisi unathibitisha ujuzi." },
          { objective: "O1", q: "AI inasema una \"cheti cha usimamizi wa miradi\". Huna. Wewe:", options: ["Kiondoe", "Kiache", "Ongeza zaidi", "Kiandike kwa herufi nzito"], answer: 0, why: "Weka tu kilicho cha kweli." },
          { objective: "O2", q: "Sehemu tatu za hadithi yako ya sekunde 60 ni zipi?", options: ["Ushindi, kushindwa, sare", "Jina, umri, anwani", "Takwimu, urefu, uzito", "Zamani, Sasa, Baadaye"], answer: 3, why: "Inaonyesha ulikotoka, ulipo na unakoelekea." },
          { objective: "O3", q: "Kwa nini upange maisha baada ya michezo mapema?", options: ["Lazima uache sasa", "Kila mwanamichezo ataacha kushindana siku moja", "Makocha wanalazimisha", "Haina faida"], answer: 1, why: "Kupanga mapema kunarahisisha mabadiliko." },
          { objective: "O3", q: "Unapaswa kukagua wapi elimu na mshahara wa kazi?", options: ["Maoni ya mtu yeyote", "Tovuti rasmi ya kazi au mshauri wa kazi", "AI peke yake", "Mchezo wa video"], answer: 1, why: "Vyanzo rasmi vinaaminika." }
        ]
      }
    },
    {
      name: "Sura 2: Wasifu (CV), LinkedIn na mtandao",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kutengeneza wasifu (CV) kwa AI",
          minutes: 6,
          goal: "Tengeneza wasifu (CV) wa ukurasa mmoja unaogeuza michezo kuwa lugha ya kazi.",
          text: [
            "Wasifu (CV au résumé) ni muhtasari wa ukurasa mmoja wa elimu yako, uzoefu wako na ujuzi wako. Wanamichezo wanapaswa kuweka michezo kama uzoefu, ikiandikwa kwa lugha ya kazi.",
            "Sehemu: Mawasiliano (jina, mji, barua pepe ya kitaaluma, simu), Elimu, Uzoefu (kazi, mafunzo kazini, kujitolea na michezo), Ujuzi, na Tuzo. Andika vipengele vinavyoanza kwa maneno ya kitendo na vyenye namba: \"Nilisawazisha saa 20 kwa wiki za mazoezi na GPA ya 3.4\" (GPA ni wastani wa alama za masomo).",
            "Muulize msaidizi wa AI: \"Geuza maelezo haya kuwa wasifu wa ukurasa mmoja kwa ajili ya mafunzo kazini ya masoko ya michezo. Tumia maneno ya kitendo na namba.\" Usibandike namba za siri kama namba yako ya Social Security. Kagua kila taarifa, na mwombe mwalimu, kocha au mshauri wa kazi aupitie."
          ],
          steps: ["Kusanya elimu yako, kazi, kujitolea na nafasi zako za michezo.", "Mwombe AI rasimu ya wasifu wa ukurasa mmoja.", "Kagua kila taarifa na kila namba.", "Tumia maneno ya kitendo na namba.", "Mwombe mshauri, mwalimu au kocha aupitie."],
          words: [["Wasifu (CV)", "muhtasari wa ukurasa mmoja wa elimu yako, uzoefu wako na ujuzi wako."], ["Neno la kitendo", "kitenzi chenye nguvu kinachoanza kipengele, kama niliongoza, niliandaa au nilifundisha."]],
          slides: [
            { title: "Sehemu za wasifu (CV)", bullets: ["Mawasiliano na Elimu", "Uzoefu, pamoja na michezo", "Ujuzi na Tuzo"] },
            { title: "Vipengele vyenye nguvu", bullets: ["Anza kwa neno la kitendo", "Ongeza namba", "\"Nilisawazisha saa 20/wiki za mazoezi na GPA ya 3.4\""] },
            { title: "Tumia AI kwa usalama", bullets: ["Hakuna namba za siri za utambulisho", "Kagua kila taarifa", "Mtu apitie"] }
          ],
          tryIt: "Tumia AI kugeuza maelezo yako kuwa wasifu (CV) wa ukurasa mmoja. Rekebisha taarifa zozote zisizo sahihi na umwombe mtu mzima mmoja aupitie.",
          youCanNow: "kutengeneza wasifu (CV) wa ukurasa mmoja unaoonyesha uzoefu wako wa michezo kwa lugha ya kazi.",
          quickCheck: [
            { objective: "O4", q: "Sehemu ipi ya wasifu ina namba yako ya simu na barua pepe ya kitaaluma?", options: ["Tuzo", "Ujuzi", "Mawasiliano", "Elimu"], answer: 2, why: "Mawasiliano ina jina lako, mji, barua pepe ya kitaaluma na simu." },
            { objective: "O4", q: "Rasimu ya wasifu wako kutoka AI iko tayari. Unafanya nini kabla ya kuutuma?", options: ["Utume mara moja", "Ongeza namba yako ya Social Security", "Ufanye kurasa tatu", "Kagua kila taarifa na umwombe mshauri, mwalimu au kocha aupitie"], answer: 3, why: "Kagua kila taarifa na mtu apitie." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Wasifu wako wa LinkedIn",
          minutes: 5,
          goal: "Andaa wasifu wa kitaaluma wa LinkedIn (au ukurasa wa kazi zako kama bado hujafikia umri).",
          text: [
            "LinkedIn ni mtandao wa kijamii wa kitaaluma ambapo waajiri, watafuta wafanyakazi na wahitimu wa zamani wanakutana. Kagua sheria za sasa za umri wa chini wa LinkedIn kabla ya kujisajili; kama wewe ni mdogo sana, tengeneza ukurasa rahisi wa kazi zako kwa Google Sites badala yake.",
            "Wasifu imara una: picha iliyo wazi na ya kitaaluma; kichwa (headline) kinachosema wewe ni nani na unaelekea wapi (\"Mwanafunzi-mwanamichezo | Anasomea biashara | Anapenda masoko ya michezo\"); sehemu ya About iliyotokana na hadithi yako ya sekunde 60; uzoefu pamoja na michezo; na ujuzi.",
            "Uweke wa kitaaluma na unaolingana na wasifu (CV) wako. Ungana na makocha, walimu, wachezaji wenzako, wahitimu wa shule yako na watu walio katika kazi unazopenda, kwa ujumbe mfupi binafsi."
          ],
          steps: ["Kagua sheria za sasa za umri za LinkedIn.", "Weka picha ya kitaaluma na kichwa.", "Tumia hadithi yako ya sekunde 60 kwa About.", "Ongeza uzoefu, pamoja na michezo.", "Ungana na watu watano kwa ujumbe mfupi."],
          words: [["LinkedIn", "mtandao wa kijamii wa kitaaluma kwa ajili ya kazi na ajira."], ["Kichwa (headline)", "mstari mfupi chini ya jina lako kwenye LinkedIn."], ["Wahitimu", "watu waliohitimu kutoka shule yako."]],
          slides: [
            { title: "LinkedIn", bullets: ["Mtandao wa kijamii wa kitaaluma", "Kagua sheria zake za sasa za umri"] },
            { title: "Wasifu imara", bullets: ["Picha ya kitaaluma", "Kichwa: wewe ni nani na unaelekea wapi", "About: hadithi yako ya sekunde 60"] },
            { title: "Ungana", bullets: ["Makocha, walimu, wahitimu", "Watu walio katika kazi unazopenda", "Ongeza ujumbe mfupi binafsi"] }
          ],
          tryIt: "Andaa au sasisha wasifu wako wa LinkedIn (au ukurasa wa kazi zako kwa Google Sites kama wewe ni mdogo sana). Muulize AI machaguo matatu ya kichwa na uchague kimoja.",
          youCanNow: "kuandaa wasifu wa kitaaluma mtandaoni unaolingana na wasifu (CV) wako.",
          quickCheck: [
            { objective: "O5", q: "Kichwa cha LinkedIn kinapaswa kusema nini?", options: ["Wewe ni nani na unaelekea wapi", "Namba yako ya simu", "Matokeo ya mechi yako ya mwisho", "Utani"], answer: 0, why: "Kichwa imara kinasema wewe ni nani na unaelekea wapi." },
            { objective: "O5", q: "Unataka kuungana na mhitimu anayefanya kazi ya masoko ya michezo. Unafanya nini?", options: ["Tuma ombi bila ujumbe", "Tuma ujumbe mfupi binafsi pamoja na ombi", "Muombe kazi mara moja", "Mtumie ujumbe kila siku"], answer: 1, why: "Ungana kwa ujumbe mfupi binafsi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kujenga mtandao na mahojiano ya kupata taarifa",
          minutes: 5,
          goal: "Andika na utume ombi la heshima la mahojiano ya kupata taarifa.",
          text: [
            "Mahojiano ya kupata taarifa ni mazungumzo mafupi, mara nyingi dakika 15 hadi 20, ambapo unamuuliza mtu kuhusu kazi yake. Unaomba ushauri, si kazi.",
            "Wanamichezo wana mtandao mzuri: wachezaji wenzako wa zamani, wanamichezo waliohitimu, watu wanaowajua makocha wako na wafanyabiashara wa eneo lako wanaoiunga mkono timu yako. Wengi wanapenda kuwasaidia wanafunzi-wanamichezo.",
            "Andika ombi fupi: wewe ni nani, ulivyompata, kwa nini kazi yake inakuvutia, na ombi dogo lililo wazi (\"Naweza kukuuliza maswali machache kwa dakika 15 katika wiki chache zijazo?\"). Andaa maswali matatu, fika kwa wakati, na tuma ujumbe wa shukrani baadaye."
          ],
          steps: ["Chagua mtu mmoja aliye katika kazi unayotaka kuijua.", "Tumia AI kuandaa rasimu ya ombi fupi.", "Lifanye la binafsi na la heshima.", "Andaa maswali matatu.", "Tuma shukrani baada ya mazungumzo."],
          words: [["Mahojiano ya kupata taarifa", "mazungumzo mafupi ya kujifunza kuhusu kazi ya mtu, si ya kuomba kazi."], ["Mtandao", "watu unaowajua wanaoweza kukupa ushauri na nafasi."]],
          slides: [
            { title: "Mahojiano ya kupata taarifa", bullets: ["Dakika 15-20", "Omba ushauri, si kazi"] },
            { title: "Mtandao wako wa mwanamichezo", bullets: ["Wachezaji wenzako wa zamani na wahitimu", "Watu wanaowajua makocha", "Wafuasi wa timu wa eneo lako"] },
            { title: "Ombi", bullets: ["Wewe ni nani, ulivyompata", "Kwa nini kazi yake inakuvutia", "Ombi dogo lililo wazi"] }
          ],
          tryIt: "Kazi ya mwisho: maliza orodha yako ya ujuzi, hadithi ya sekunde 60, wasifu (CV) na wasifu wa mtandaoni, kisha tuma ombi moja la mahojiano ya kupata taarifa kwa mtu halisi na uandae maswali matatu.",
          youCanNow: "kuomba na kujiandaa kwa mahojiano ya kupata taarifa ili kukuza mtandao wako.",
          quickCheck: [
            { objective: "O6", q: "Katika mahojiano ya kupata taarifa unaomba nini?", options: ["Ofa ya kazi", "Pesa", "Ushauri kuhusu kazi yake", "Barua ya mapendekezo"], answer: 2, why: "Unaomba ushauri, si kazi." },
            { objective: "O6", q: "Mhitimu amekubali kuongea kwa dakika 15 wiki ijayo. Unajiandaaje?", options: ["Andaa maswali matatu na ufike kwa wakati", "Panga kuzungumza kuhusu wewe muda wote", "Omba saa moja badala yake", "Beba wasifu wako na uombe kazi"], answer: 0, why: "Andaa maswali matatu, fika kwa wakati na tuma shukrani baadaye." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Wasifu (CV), LinkedIn na mtandao",
        questions: [
          { objective: "O4", q: "Kipengele kipi cha wasifu kina nguvu zaidi?", options: ["\"Nilicheza michezo\"", "\"Nilikuwa kwenye timu\"", "\"Mchapakazi\"", "\"Nilisawazisha saa 20 kwa wiki za mazoezi na GPA ya 3.4\""], answer: 3, why: "Kinatumia kitendo na namba." },
          { objective: "O4", q: "Ni nini HUPASWI kubandika kwenye AI unapotengeneza wasifu?", options: ["Namba yako ya Social Security", "Nafasi zako za michezo", "Jina la shule yako", "Majukumu ya kazi yako"], answer: 0, why: "Namba za siri za utambulisho zinabaki za siri." },
          { objective: "O5", q: "Wewe ni mdogo sana kwa LinkedIn. Unaweza kufanya nini?", options: ["Danganya umri wako", "Tumia akaunti ya mzazi", "Tengeneza ukurasa wa kazi zako kwa Google Sites", "Kata tamaa"], answer: 2, why: "Ukurasa rahisi wa kazi zako unafaa hadi utakapofikia umri." },
          { objective: "O6", q: "Katika mahojiano ya kupata taarifa unaomba:", options: ["Kazi mara moja", "Pesa", "Nenosiri lake", "Ushauri kuhusu kazi yake"], answer: 3, why: "Ni kwa ajili ya kujifunza, si kutafuta kazi." },
          { objective: "O6", q: "Baada ya mahojiano ya kupata taarifa unapaswa:", options: ["Kuomba kazi mara moja", "Kutuma ujumbe wa shukrani", "Kutowasiliana naye tena kamwe", "Kuandika kumhusu mtandaoni"], answer: 1, why: "Shukrani zinajenga mahusiano ya kudumu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kujitambulisha na Kujenga Kazi kwa Wanamichezo",
    questions: [
      { objective: "O1", q: "Ujuzi unaohamishika ni:", options: ["Mabadilishano kati ya timu", "Sheria ya kuhamia timu nyingine", "Ujuzi unaoweza kuutumia katika kazi nyingi", "Kinywaji cha michezo"], answer: 2, why: "Unakwenda nawe katika kazi mbalimbali." },
      { objective: "O1", q: "Upi ni ujuzi unaohamishika kutoka kwenye michezo?", options: ["Kuhimili shinikizo", "Namba ya jezi yako", "Aina ya viatu vyako", "Nembo ya timu yako"], answer: 0, why: "Waajiri wanathamini kuhimili shinikizo." },
      { objective: "O1", q: "Ustahimilivu ni:", options: ["Kurudi katika hali nzuri baada ya kukwama", "Kutoshindwa kamwe", "Kuwa mrefu kuliko wote", "Kukimbia kwa kasi"], answer: 0, why: "Ni kupona baada ya kukwama." },
      { objective: "O1", q: "Waajiri wanataka:", options: ["Madai tu", "Takwimu zako tu", "Ushahidi, si maneno tu", "Wafuasi wako"], answer: 2, why: "Mifano inathibitisha ujuzi." },
      { objective: "O2", q: "Hadithi yako ya sekunde 60 inapaswa kusikika:", options: ["Kama roboti", "Ya kawaida, si ya kukariri", "Ndefu sana", "Kama ya mtu mwingine"], answer: 1, why: "Ya kawaida inasikika ya kujiamini na ya kweli." },
      { objective: "O2", q: "Sehemu ya \"Baadaye\" ya hadithi yako inasema:", options: ["Matokeo yako ya zamani", "Nenosiri lako", "Mipango ya mpinzani wako", "Mwelekeo unaotaka kuujua"], answer: 3, why: "Inaonyesha unakoelekea." },
      { objective: "O2", q: "Hadithi yako ya kuzungumza inapaswa kuwa ndefu kiasi gani?", options: ["Dakika kumi", "Sekunde tano", "Kama sekunde 60", "Saa moja"], answer: 2, why: "Fupi kiasi cha kushika usikivu." },
      { objective: "O3", q: "Kazi ndani ya michezo ni:", options: ["Ufundi bomba", "Uuguzi", "Kufundisha hisabati", "Athletic training"], answer: 3, why: "Athletic training ni kazi ya michezo." },
      { objective: "O3", q: "Occupational Outlook Handbook ni:", options: ["Mwongozo wa serikali ya Marekani kuhusu kazi, elimu na mshahara", "Kitabu cha mbinu za mchezo", "App ya kijamii", "Jarida la michezo"], answer: 0, why: "Ni chanzo rasmi cha taarifa za kazi." },
      { objective: "O4", q: "Wasifu (CV) kwa kawaida unapaswa kuwa:", options: ["Kurasa kumi", "Ukurasa mmoja", "Video", "Tweet"], answer: 1, why: "Mfupi na rahisi kupitia haraka." },
      { objective: "O4", q: "Sehemu ipi inaonyesha michezo kwenye wasifu?", options: ["Mawasiliano", "Mambo ya burudani tu", "Uzoefu", "Popote"], answer: 2, why: "Michezo ni uzoefu halisi." },
      { objective: "O4", q: "Kipengele cha wasifu kinapaswa kuanza kwa:", options: ["Neno la kitendo", "\"Aaa\"", "Nenosiri lako", "Emoji"], answer: 0, why: "Maneno ya kitendo yanaonyesha ulichofanya." },
      { objective: "O4", q: "Baada ya AI kuandaa rasimu ya wasifu wako, unapaswa:", options: ["Kuutuma bila kuusoma", "Kuongeza kazi za uongo", "Kuufanya kurasa tatu", "Kukagua kila taarifa na mtu aupitie"], answer: 3, why: "Usahihi na jicho la pili ni muhimu." },
      { objective: "O5", q: "LinkedIn ni:", options: ["Mchezo wa video", "Mtandao wa kijamii wa kitaaluma", "Ligi ya michezo", "Duka"], answer: 1, why: "Ni kwa ajili ya kazi na ajira." },
      { objective: "O5", q: "Kichwa imara cha LinkedIn ni:", options: ["\"habari\"", "\"Mwanafunzi-mwanamichezo | Anasomea biashara | Anapenda masoko ya michezo\"", "\"nimechoka\"", "Tupu"], answer: 1, why: "Kinasema wewe ni nani na unaelekea wapi." },
      { objective: "O5", q: "Unapoungana na mtu kwenye LinkedIn, ongeza:", options: ["Hakuna kitu kamwe", "Kudai kazi", "Anwani yako", "Ujumbe mfupi binafsi"], answer: 3, why: "Ujumbe binafsi unakubaliwa zaidi." },
      { objective: "O5", q: "Wahitimu ni:", options: ["Watu waliohitimu kutoka shule yako", "Wapinzani", "Waamuzi", "Mashabiki tu"], answer: 0, why: "Mara nyingi wanapenda kuwasaidia wanafunzi wa shule yao." },
      { objective: "O6", q: "Mahojiano ya kupata taarifa kwa kawaida huchukua:", options: ["Saa 5", "Dakika 1", "Dakika 15-20", "Siku nzima"], answer: 2, why: "Maombi mafupi yanakubaliwa zaidi." },
      { objective: "O6", q: "Kabla ya mahojiano, andaa:", options: ["Mkataba", "Zawadi", "Hakuna kitu", "Maswali matatu"], answer: 3, why: "Maswali yaliyoandaliwa yanaheshimu muda wake." },
      { objective: "O6", q: "Nani ni sehemu ya mtandao wa mwanamichezo?", options: ["Watu maarufu tu", "Wachezaji wenzako wa zamani, wanamichezo waliohitimu na watu wanaowajua makocha", "Hakuna mtu", "Wapinzani tu"], answer: 1, why: "Jumuiya yako ya michezo ni mtandao imara." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      3,
      5,
      8,
      11,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Ujuzi unaohamishika",
        objective: "O1",
        notYet: "Ujuzi chini ya mitano, au ujuzi usio na mfano halisi.",
        meets: "Ujuzi mitano, kila mmoja ukiwa na mfano wa michezo wa kweli na wa kina.",
        exceeds: "Kila mfano una namba au matokeo, kama ukubwa wa timu au saa zilizosawazishwa."
      },
      {
        name: "Hadithi ya sekunde 60",
        objective: "O2",
        notYet: "Inakosa Zamani, Sasa au Baadaye, au ni ndefu sana kuliko dakika moja.",
        meets: "Kama sekunde 60 ikiwa na Zamani, Sasa na Baadaye, kwa sauti ya mwanamichezo mwenyewe.",
        exceeds: "Inasimuliwa kwa sauti kwa kawaida na imerekebishwa kwa ajili ya sehemu ya About ya LinkedIn."
      },
      {
        name: "Wasifu (CV)",
        objective: "O4",
        notYet: "Zaidi ya ukurasa mmoja, taarifa zisizo za kweli, au michezo imeachwa.",
        meets: "Ukurasa mmoja, michezo kwa lugha ya kazi, vipengele vinavyoanza kwa maneno ya kitendo, taarifa zilizokaguliwa na mtu amepitia.",
        exceeds: "Umeandaliwa kwa kazi moja au mafunzo kazini moja kutoka kwenye orodha ya kazi alizochunguza mwanamichezo."
      },
      {
        name: "Wasifu wa mtandaoni",
        objective: "O5",
        notYet: "Hakuna wasifu, au haulingani na wasifu (CV).",
        meets: "Wasifu wa LinkedIn au ukurasa wa kazi wenye picha, kichwa, About, uzoefu na ujuzi, unaolingana na wasifu (CV).",
        exceeds: "Kuungana na watu watano kwa ujumbe binafsi, pamoja na wahitimu."
      },
      {
        name: "Ombi la mahojiano ya kupata taarifa",
        objective: "O6",
        notYet: "Hakuna ombi lililotumwa, au linaomba kazi.",
        meets: "Ombi la heshima limetumwa kwa mtu halisi likiwa na nani, ulivyompata, kwa nini na ombi dogo, pamoja na maswali matatu tayari.",
        exceeds: "Mazungumzo yamefanyika na ujumbe wa shukrani umetumwa."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza seti ya kuanzia kazi na kupata Anafikia au Anazidi katika kila mstari wa rubriki",
      "Wanafunzi wanaofanya angalau mahojiano moja ya kupata taarifa ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoomba au kupata mafunzo kazini, kazi au nafasi ya kujitolea kwa kutumia wasifu (CV) wao",
      "Wanafunzi wanaochukua kozi inayofuata, kama \"Ujasiriamali kwa AI kwa Wanamichezo\""
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure (ChatGPT, Microsoft Copilot au Google Gemini)",
      "Akaunti ya LinkedIn kama umefikia umri unaoruhusiwa, au akaunti ya bure ya Google kwa ajili ya Google Sites",
      "Maelezo kuhusu elimu yako, kazi, kujitolea na nafasi zako za michezo",
      "Kama dakika 60"
    ],
    facilitatorNotes: [
      "Mkaribishe mshauri wa kazi wa shule au wanamichezo waliohitimu ili wapitie wasifu (CV) na kusikiliza mazoezi ya hadithi za sekunde 60.",
      "Wakumbushe wanafunzi wasibandike kamwe namba za Social Security au namba nyingine za siri kwenye AI.",
      "Kagua sheria za sasa za umri za LinkedIn pamoja na kikundi na utoe Google Sites kwa wanafunzi wadogo.",
      "Kwa wanamichezo walio chini ya miaka 18, wahusishe wazazi au walezi kabla hawajawasiliana na watu wazima wasiowajua, na pendekeza kukutana mahali pa umma au kwa video.",
      "Kuwa mwangalifu kwa wanamichezo wanaokabiliwa na majeraha au mwisho wa kucheza, na uwaelekeze kwenye msaada kama wanauhitaji."
    ]
  }
};

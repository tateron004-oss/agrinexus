"use strict";

// Koach Learn course (Swahili translation of athletes/athletes-ai-digital-marketing.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-ai-digital-marketing-sw",
  lang: "sw",
  translationOf: "athletes-ai-digital-marketing",
  category: "Athletes",
  name: "Mikakati ya Masoko ya Kidijitali kwa AI kwa Wanamichezo",
  skills: "Kuweka lengo la masoko, Kufafanua hadhira yako, Kuchagua njia za mawasiliano, Kuandaa mpango wa wiki 4 kwa AI, Kupima matokeo na kurekebisha",
  outcome: "kutumia msaidizi wa AI kujenga na kuendesha mpango rahisi wa masoko ya kidijitali wa wiki 4 kwa ajili yako kama mwanamichezo: lengo moja, hadhira moja, njia mbili za mawasiliano, mpango wa machapisho wa kila wiki na namba tatu unazofuatilia.",
  about: [
    "Kozi hii ni kwa wanamichezo wa shule ya sekondari, chuo na wale wanaoanza kazi ambao wanataka kukuza hadhira yao kwa makusudi, kwa ajili ya kuchaguliwa na makocha (recruiting), fursa za NIL, kambi ya michezo au kazi ya baadaye, na kwa makocha wanaowasaidia.",
    "Masoko ni kuwafanya watu sahihi wakujue, wakupende na wakuamini. Utaweka lengo, utachagua hadhira na njia za mawasiliano, utatumia AI kuandaa mpango wa wiki 4, na utajifunza namba za kufuatilia.",
    "Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi. Sheria za NIL zinatofautiana kwa shule, jimbo na ngazi, kwa hiyo uliza ofisi ya compliance (ofisi ya kufuata sheria) au chama cha michezo cha jimbo lako kabla ya mkataba wowote wa malipo."
  ],
  finalTask: "Andika mpango wa masoko wa wiki 4 kwenye ukurasa mmoja: lengo moja la SMART, maelezo ya hadhira, njia mbili za mawasiliano, mpango wa machapisho wa kila wiki ulioandaliwa kwa AI, na namba tatu za kufuatilia. Endesha wiki ya kwanza, andika namba, na andika badiliko moja kwa wiki ya pili.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanamichezo wa shule ya sekondari, chuo na wale wanaoanza kazi ambao wanataka kukuza hadhira kwa makusudi, kwa ajili ya kuchaguliwa na makocha, fursa za NIL, kambi ya michezo au kazi ya baadaye, na makocha wanaowasaidia.",
    startingPoint: "Wanatumia mitandao ya kijamii kila siku na wanachapisha mara kwa mara, kwa kawaida bila mpango. Wachache wana lengo lililoandikwa, hadhira iliyofafanuliwa, mpango wa machapisho au namba wanazofuatilia, na wengi hawana uhakika kuhusu sheria za kutangaza zawadi au machapisho ya kulipwa.",
    gap: "Kuchapisha bila lengo wala hadhira mara chache huleta majibu ya makocha, usajili au hamu ya makampuni, na machapisho ya uongo au yasiyotangazwa yanaweza kuharibu imani na kuvunja sheria za matangazo. Mpango rahisi wa wiki nne wenye machapisho ya kweli na namba zinazofuatiliwa unageuza mitandao ya kijamii kuwa fursa halisi.",
    constraints: [
      "Lugha rahisi, kama kiwango cha kusoma cha darasa la 7",
      "Simu yenye apps za mitandao ya kijamii na msaidizi wa AI wa bure; zana za bure tu",
      "Kama dakika 60 za masomo pamoja na wiki nne za kuchapisha, sambamba na shule na mazoezi",
      "Sheria za umri za kila jukwaa; wanamichezo walio chini ya miaka 18 wanamhusisha mzazi au mlezi",
      "Sheria za FTC za kutangaza, sheria za NIL za shule na NCAA au ligi, na usalama binafsi: hakuna mahali ulipo sasa hivi wala taarifa za nyumbani"
    ],
    prerequisites: "Hakuna"
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukijua unachotaka katika wiki nne zijazo", action: "kuandika lengo moja la masoko la SMART", standard: "lenye sehemu zote tano za SMART, pamoja na namba na tarehe" },
    { id: "O2", condition: "Ukijua kundi unalotaka kufikia", action: "kuandika maelezo mafupi ya hadhira: wao ni nani, wanajali nini, wanatumia muda wapi mtandaoni na nini kinawafanya wachukue hatua", standard: "yaliyokaguliwa na watu halisi wawili au watatu wa kundi hilo" },
    { id: "O3", condition: "Ukiwa na maelezo yako ya hadhira", action: "kuchagua njia mbili za mawasiliano ambazo hadhira yako tayari inatumia muda wake", standard: "ukiwa na sababu kwa kila moja, na sheria za umri na mipangilio ya faragha zimekaguliwa" },
    { id: "O4", condition: "Ukitumia msaidizi wa AI wa bure", action: "kutengeneza mpango wa machapisho wa wiki 4 wenye wazo, muundo na wito wa kuchukua hatua kwa kila chapisho", standard: "uliorekebishwa ili ulingane na ratiba yako, bila kuonyesha mahali ulipo sasa hivi, nyumba au ratiba ya shule" },
    { id: "O5", condition: "Ukipewa maelezo ya chapisho (caption) yaliyoandikwa na AI", action: "kuyaandika upya kama chapisho la kweli kwa sauti yako mwenyewe, na tangazo wazi kampuni inapokupa chochote", standard: "bila madai usiyoweza kuthibitisha, na tangazo likionekana kwa urahisi pamoja na chapisho" },
    { id: "O6", condition: "Baada ya kila wiki ya kuchapisha", action: "kuandika namba tatu zinazohusiana na lengo lako na kuchagua badiliko moja kwa wiki inayofuata", standard: "zikiandikwa kila wiki kwenye jedwali, na badiliko likiamuliwa na wewe" }
  ],
  chapters: [
    {
      name: "Sura 1: Lengo, hadhira na njia za mawasiliano",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuweka lengo la masoko",
          minutes: 5,
          goal: "Andika lengo moja la masoko la SMART kwa wiki nne zijazo.",
          text: [
            "Masoko bila lengo ni kuchapisha tu. Amua unachotaka katika wiki nne zijazo: kuonekana na makocha wa vyuo, kujaza kambi ya watoto, kukuza hadhira ambayo kampuni ingeijali, au kujenga wafuasi kwa ajili ya kazi yako ya baadaye.",
            "Lifanye kuwa SMART: Mahususi (Specific), Linalopimika (Measurable), Linalowezekana (Achievable), Linalohusika (Relevant) na lenye Muda maalum (Time-bound). \"Kupata watu 15 waliojisajili kwa kliniki yangu ya bure ya kurusha mpira kufikia June 30\" ni SMART. \"Kuwa maarufu\" si SMART.",
            "Msaidizi wa AI anaweza kusaidia kulinoa: \"Mimi ni mchezaji wa mpira wa kikapu wa shule ya sekondari. Nisaidie kugeuza 'kufanya makocha zaidi wa vyuo wanione' kuwa lengo la SMART kwa wiki 4 zijazo.\""
          ],
          steps: ["Chagua unachotaka katika wiki 4.", "Ongeza namba.", "Ongeza tarehe.", "Hakikisha linawezekana na lina maana kwako."],
          words: [["Masoko (marketing)", "kuwafanya watu sahihi wakujue, wakupende na wakuamini wewe au unachotoa."], ["Lengo la SMART", "lengo Mahususi, Linalopimika, Linalowezekana, Linalohusika na lenye Muda maalum (Specific, Measurable, Achievable, Relevant, Time-bound)."]],
          slides: [
            { title: "Bila lengo = kuchapisha tu", bullets: ["Kuchaguliwa? Kambi? Hadhira? Kazi?"] },
            { title: "SMART", bullets: ["Mahususi, Linalopimika, Linalowezekana", "Linalohusika, lenye Muda maalum"] },
            { title: "Mfano", bullets: ["\"Watu 15 waliojisajili kwa kliniki yangu ya bure kufikia June 30\"", "Si: \"kuwa maarufu\""] }
          ],
          tryIt: "Andika lengo moja la masoko kwa wiki nne zijazo. Mwombe msaidizi wa AI alifanye kuwa SMART, kisha ulirekebishe ili liwe la kweli na linalowezekana kwako.",
          youCanNow: "kuandika lengo la masoko la SMART.",
          quickCheck: [
            { objective: "O1", q: "Herufi M katika SMART inasimama kwa nini?", options: ["Measurable (Linalopimika)", "Marketing (Masoko)", "Monthly (Kila mwezi)", "Meaningful (Lenye maana)"], answer: 0, why: "SMART ni Specific, Measurable, Achievable, Relevant na Time-bound." },
            { objective: "O1", q: "Lengo lako ni \"kufanya makocha zaidi wanione\". Uongeze nini ili liwe SMART?", options: ["Hashtag zaidi", "Idadi kubwa ya wafuasi", "Namba na tarehe, kama majibu 5 ya makocha kufikia March 1", "Picha mpya ya wasifu"], answer: 2, why: "Lengo la SMART lina namba na tarehe unazoweza kukagua." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuijua hadhira yako",
          minutes: 5,
          goal: "Eleza watu unaotaka kuwafikia katika maelezo mafupi.",
          text: [
            "Hadhira yako ni kundi mahususi unalotaka kulifikia. Kocha wa chuo, mzazi wa mtoto wa miaka 10 anayetaka kambi, mwenye biashara wa eneo lako na shabiki wa mchezo wako wote wanataka vitu tofauti.",
            "Andika maelezo mafupi ya hadhira: wao ni nani, wanajali nini, wanatumia muda wapi mtandaoni, na nini kingewafanya wachukue hatua. Mfano: \"Wazazi wa watoto wa eneo hili wenye miaka 8 hadi 12, wenye shughuli nyingi, wanajali mafunzo salama na ya kufurahisha, wanatumia vikundi vya Facebook na Instagram, wanajisajili wanapoona maoni halisi ya watu.\"",
            "AI inaweza kukusaidia kupata mawazo kuhusu kile hadhira yako inajali. Kisha yakague kwa kuwauliza watu halisi wawili au watatu wa kundi hilo."
          ],
          steps: ["Taja kundi.", "Andika wanachojali.", "Andika wanapotumia muda mtandaoni.", "Andika kinachowafanya wachukue hatua.", "Kagua na watu halisi wawili au watatu."],
          words: [["Hadhira", "watu mahususi unaotaka kuwafikia."], ["Maelezo ya hadhira", "maelezo mafupi ya wao ni nani na wanataka nini."]],
          slides: [
            { title: "Hadhira tofauti", bullets: ["Makocha wa vyuo", "Wazazi wa watoto wa kambi", "Biashara za eneo lako", "Mashabiki wa mchezo wako"] },
            { title: "Maelezo ya hadhira", bullets: ["Wao ni nani", "Wanajali nini", "Wako wapi mtandaoni", "Nini kinawafanya wachukue hatua"] },
            { title: "Kagua", bullets: ["Iombe AI ikupe mawazo", "Kisha uliza watu halisi 2-3"] }
          ],
          tryIt: "Andika maelezo ya hadhira kwa lengo lako. Muulize msaidizi wa AI: \"Hadhira hii inaweza kujali nini kingine?\" Ongeza wazo moja, kisha muulize mtu mmoja halisi wa kundi hilo kama ni sahihi.",
          youCanNow: "kuandika maelezo mafupi ya hadhira kwa lengo lako.",
          quickCheck: [
            { objective: "O2", q: "Kipi kinafaa kuwa katika maelezo ya hadhira?", options: ["Wimbo unaoupenda", "Namba ya jezi yako", "Ratiba yako ya mazoezi", "Mahali hadhira inapotumia muda mtandaoni"], answer: 3, why: "Maelezo yanahusu wao ni nani, wanajali nini, wanatumia muda wapi na nini kinawafanya wachukue hatua." },
            { objective: "O2", q: "Msaidizi wa AI alitoa mawazo kuhusu kile wazazi wa kambi wanachojali. Ufanye nini baadaye?", options: ["Uliza wazazi halisi wawili au watatu wa kambi kama ni sahihi", "Ichapishe kama ukweli", "Iulize AI tena hadi ikubaliane nawe", "Ruka maelezo ya hadhira"], answer: 0, why: "Kagua mawazo ya AI na watu halisi wa kundi hilo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuchagua njia zako za mawasiliano",
          minutes: 5,
          goal: "Chagua njia mbili za mawasiliano ambazo hadhira yako tayari inatumia muda wake.",
          text: [
            "Njia ya mawasiliano (channel) ni mahali unapowafikia watu: Instagram, TikTok, YouTube, X, LinkedIn, vikundi vya Facebook, barua pepe, tovuti, au ana kwa ana kwenye michezo na matukio ya jamii.",
            "Chagua njia mbili tu kuanza, kulingana na hadhira yako, si kulingana na kinachovuma. Makocha wa vyuo mara nyingi wanatazama video za matukio bora (highlights) na wasifu wa recruiting pamoja na barua pepe. Wazazi wa kambi wanaweza kutumia vikundi vya Facebook na matangazo ya karatasi ya eneo lao. Makampuni yanaangalia jinsi wafuasi wako wanavyoshiriki.",
            "Kagua sheria za umri za kila jukwaa, na weka akaunti zako ili wewe uamue nani anaweza kuwasiliana nawe. Kama uko chini ya miaka 18, mhusishe mzazi au mlezi."
          ],
          steps: ["Orodhesha mahali hadhira yako inapotumia muda.", "Chagua mbili zinazofaa zaidi.", "Kagua sheria za umri na mipangilio ya faragha.", "Andika kwa nini ulichagua kila njia."],
          words: [["Njia ya mawasiliano (channel)", "mahali unapoifikia hadhira yako, kama app ya kijamii au barua pepe."], ["Ushiriki (engagement)", "jinsi watu wanavyojibu machapisho yako: likes, maoni, kushiriki (shares), kuhifadhi (saves)."]],
          slides: [
            { title: "Njia za mawasiliano", bullets: ["Apps za kijamii: Instagram, TikTok, YouTube, X, LinkedIn", "Barua pepe na tovuti", "Ana kwa ana kwenye michezo na matukio"] },
            { title: "Chagua mbili", bullets: ["Mahali hadhira yako tayari iko", "Si kinachovuma tu"] },
            { title: "Kuwa salama", bullets: ["Kagua sheria za umri", "Amua nani anaweza kuwasiliana nawe", "Chini ya miaka 18: mhusishe mzazi"] }
          ],
          tryIt: "Chagua njia zako mbili na uandike sentensi moja kwa kila moja ukieleza kwa nini hadhira yako iko pale. Kagua mipangilio ya faragha ya kila akaunti.",
          youCanNow: "kuchagua njia mbili za mawasiliano zinazolingana na hadhira yako na kuziweka kwa usalama.",
          quickCheck: [
            { objective: "O3", q: "Njia ya mawasiliano (channel) ni nini?", options: ["Mpango wako wa mazoezi", "Mahali unapowafikia watu, kama Instagram, barua pepe au tovuti", "Aina ya kamera", "Idadi ya wafuasi"], answer: 1, why: "Njia za mawasiliano ni mahali unapoifikia hadhira yako." },
            { objective: "O3", q: "App mpya inavuma, lakini hadhira yako ya wazazi wa kambi iko kwenye vikundi vya Facebook. Ufanye nini?", options: ["Tumia app inayovuma tu", "Jiunge na apps tano mpya", "Chagua njia ambazo hadhira yako tayari iko, kama vikundi vya Facebook", "Acha kuchapisha"], answer: 2, why: "Chagua njia kulingana na hadhira, si kinachovuma." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Lengo, hadhira na njia za mawasiliano",
        questions: [
          { objective: "O1", q: "Lipi ni lengo la SMART?", options: ["Kuwa maarufu", "Kuchapisha zaidi", "Kupata watu 15 waliojisajili kwa kliniki yangu ya bure kufikia June 30", "Kuwa chapa (brand)"], answer: 2, why: "Ni mahususi, linapimika na lina tarehe." },
          { objective: "O2", q: "Hadhira ni nini?", options: ["Watu mahususi unaotaka kuwafikia", "Kila mtu kwenye intaneti", "Wachezaji wenzako tu", "Aina ya chapisho"], answer: 0, why: "Masoko yanafanya kazi vizuri zaidi yakilenga kundi mahususi." },
          { objective: "O2", q: "Unakaguaje maelezo yako ya hadhira?", options: ["Iamini AI kabisa", "Kisia", "Chapisha na utumaini", "Uliza watu halisi wawili au watatu wa kundi hilo"], answer: 3, why: "Watu halisi wanakuambia kama makisio yako ni sahihi." },
          { objective: "O3", q: "Uanze na njia ngapi za mawasiliano?", options: ["Kila app", "Mbili", "Kumi", "Hakuna"], answer: 1, why: "Njia mbili zinazotumiwa vizuri ni bora kuliko nyingi zinazotumiwa vibaya." },
          { objective: "O3", q: "Una miaka 16 na unaanza akaunti ya wazi kwa umma. Unapaswa:", options: ["Kushiriki anwani yako", "Kumhusisha mzazi au mlezi na kukagua sheria za umri", "Kumruhusu kila mtu akutumie ujumbe", "Kudanganya kuhusu umri wako"], answer: 1, why: "Usalama na sheria za umri zinakuja kwanza." }
        ]
      }
    },
    {
      name: "Sura 2: Panga, endesha na pima",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuandaa mpango wa wiki 4 kwa AI",
          minutes: 6,
          goal: "Tumia msaidizi wa AI kuandaa mpango wa machapisho wa wiki 4 na uurekebishe.",
          text: [
            "Mpe msaidizi wa AI lengo lako, maelezo ya hadhira na njia za mawasiliano, kisha uliza: \"Tengeneza mpango wa wiki 4 wenye machapisho 3 kwa wiki kwenye njia hizi mbili. Kwa kila chapisho toa wazo, muundo (picha, video fupi, story, barua pepe) na wito wa kuchukua hatua. Weka kwenye jedwali.\"",
            "Wito wa kuchukua hatua (call to action) unawaambia watu wafanye nini baadaye: \"Jisajili kupitia kiungo\", \"Tazama highlights zangu zote\", \"Nitumie barua pepe kwa taarifa za kambi\". Kila chapisho linalounga mkono lengo lako linapaswa kuwa na mmoja.",
            "Rekebisha mpango ili ulingane na ratiba yako ya mazoezi na shule. Usipange kamwe machapisho yanayowaonyesha watu usiowajua mahali halisi ulipo sasa hivi, nyumba yako au ratiba yako ya shule."
          ],
          steps: ["Bandika lengo lako, maelezo ya hadhira na njia za mawasiliano.", "Omba jedwali la wiki 4: wazo, muundo, wito wa kuchukua hatua.", "Lirekebishe lilingane na ratiba yako.", "Ondoa chochote kinachoonyesha mahali ulipo sasa hivi au nyumba yako."],
          words: [["Wito wa kuchukua hatua (call to action)", "hatua inayofuata iliyo wazi unayowaomba watu wachukue."], ["Mpango wa maudhui", "ratiba ya utakachochapisha na lini."]],
          slides: [
            { title: "Mpe AI", bullets: ["Lengo lako la SMART", "Maelezo yako ya hadhira", "Njia zako mbili za mawasiliano"] },
            { title: "Omba jedwali", bullets: ["Machapisho 3 kwa wiki kwa wiki 4", "Wazo, muundo, wito wa kuchukua hatua"] },
            { title: "Kisha rekebisha", bullets: ["Lilingane na ratiba ya mazoezi na shule", "Bila mahali ulipo sasa hivi wala taarifa za nyumbani"] }
          ],
          tryIt: "Muombe msaidizi wa AI mpango wako wa wiki 4 kwenye jedwali. Rekebisha angalau mistari mitatu ili ilingane na ratiba yako halisi na sauti yako.",
          youCanNow: "kuandaa na kurekebisha mpango wa masoko wa wiki 4 kwa AI.",
          quickCheck: [
            { objective: "O4", q: "Kila chapisho katika jedwali la mpango wako linapaswa kuwa na vitu gani vitatu?", options: ["Wazo, muundo na wito wa kuchukua hatua", "Likes, shares na saves", "Mahali, saa na anwani", "Hashtag tu"], answer: 0, why: "Somo linaomba wazo, muundo na wito wa kuchukua hatua kwa kila chapisho." },
            { objective: "O4", q: "Mpango wa AI una story inayokuonyesha ukitoka nyumbani kwako kila asubuhi. Ufanye nini?", options: ["Iache; inaonyesha utaratibu wako", "Ichapishe siku moja baadaye", "Iondoe kwa sababu inaonyesha nyumba yako na ratiba yako", "Ongeza anwani yako ndani yake"], answer: 2, why: "Usipange kamwe machapisho yanayowaonyesha watu usiowajua nyumba yako au mahali ulipo sasa hivi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuandika machapisho yanayosikika kama wewe, kwa ukweli",
          minutes: 5,
          goal: "Geuza mawazo ya mpango kuwa machapisho ya kweli kwa sauti yako mwenyewe, na matangazo pale yanapohitajika.",
          text: [
            "AI inaweza kuandika rasimu ya kwanza ya maelezo ya chapisho (caption), lakini watu wanawafuata wanamichezo kwa sababu ni halisi. Iombe AI chaguo tatu, kisha andika upya bora zaidi kwa maneno yako mwenyewe. Lisome kwa sauti: linasikika kama wewe?",
            "Kuwa mkweli. Usitumie takwimu za uongo, wafuasi bandia au madai usiyoweza kuthibitisha. Makocha, makampuni na mashabiki wanakagua.",
            "Kama biashara inakupa pesa, bidhaa za bure au faida nyingine yoyote ili uchapishe, FTC (shirika la Marekani linalosimamia sheria za matangazo) linasema lazima ulieleze wazi, kwa mfano \"Tangazo (Ad)\" au \"Asante [kampuni] kwa vifaa vya bure\", pamoja na chapisho lenyewe, si kufichwa ndani ya hashtag. Kwenye video, lisema na lionyeshe kwenye skrini. Wanamichezo wa vyuo wanaweza pia kuhitaji kuripoti mikataba; uliza ofisi yako ya compliance."
          ],
          steps: ["Iombe AI chaguo tatu za maelezo ya chapisho.", "Andika upya bora zaidi kwa maneno yako mwenyewe.", "Ondoa dai lolote usiloweza kuthibitisha.", "Kama kuna faida yoyote kutoka kwa kampuni, ongeza tangazo lililo wazi.", "Lisome kwa sauti kabla ya kuchapisha."],
          words: [["Maelezo ya chapisho (caption)", "maandishi yanayoambatana na chapisho."], ["Tangazo (disclosure)", "kauli iliyo wazi kwamba ulilipwa au ulipewa kitu ili uchapishe."]],
          slides: [
            { title: "AI inaandaa, wewe unamalizia", bullets: ["Omba chaguo tatu", "Andika upya kwa maneno yako", "Lisome kwa sauti"] },
            { title: "Kuwa mkweli", bullets: ["Hakuna takwimu za uongo wala wafuasi bandia", "Hakuna madai usiyoweza kuthibitisha"] },
            { title: "Umelipwa au umepewa vitu vya bure?", bullets: ["Sema wazi: \"Tangazo (Ad)\" au \"Asante [kampuni] kwa vifaa vya bure\"", "Pamoja na chapisho, si kufichwa ndani ya hashtag", "Kwenye video: lisema na lionyeshe"] }
          ],
          sources: [
            { name: "FTC: Disclosures 101 for Social Media Influencers (Mwongozo wa matangazo kwa washawishi wa mitandao ya kijamii)", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" },
            { name: "NCAA: Name, Image and Likeness (Jina, Sura na Utambulisho)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }
          ],
          tryIt: "Chukua wazo moja la chapisho kutoka kwenye mpango wako. Iombe AI chaguo tatu za maelezo ya chapisho, andika upya moja kwa sauti yako, na lisome kwa sauti. Kama linahusu kampuni yoyote, ongeza tangazo lililo wazi.",
          youCanNow: "kuandika machapisho ya kweli kwa sauti yako mwenyewe na kutangaza wazi uhusiano na makampuni.",
          quickCheck: [
            { objective: "O5", q: "Ni shirika gani la Marekani linalosimamia sheria ya kutangaza machapisho ya kulipwa au ya zawadi?", options: ["NCAA", "FTC", "FDA", "Idara ya michezo ya shule yako"], answer: 1, why: "FTC inasimamia sheria za matangazo nchini Marekani." },
            { objective: "O5", q: "Ukumbi wa mazoezi (gym) wa eneo lako unakupa mwezi mmoja bure ili uuchapishe. Uweke tangazo wapi?", options: ["Mwishoni mwa hashtag 30", "Kwenye maoni wiki moja baadaye", "Hakuna mahali, kwa sababu haikuwa pesa taslimu", "Pamoja na chapisho, likionekana kwa urahisi"], answer: 3, why: "Faida yoyote inahesabika, na tangazo lazima liwe wazi pamoja na chapisho." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kupima na kurekebisha",
          minutes: 5,
          goal: "Fuatilia namba tatu kila wiki na ufanye badiliko moja kulingana nazo.",
          text: [
            "Chagua namba tatu zinazohusiana na lengo lako. Kwa kliniki: mibofyo kwenye kiungo, usajili na maoni yanayouliza maswali. Kwa recruiting: watu walioangalia wasifu wako, waliotazama video ya highlights na majibu ya makocha. Idadi ya wafuasi peke yake inaweza kupotosha.",
            "Apps nyingi za kijamii zinaonyesha namba hizi katika sehemu ya insights au analytics kwa akaunti za kitaalamu au za creator. Ziandike kwenye jedwali mara moja kwa wiki.",
            "Kila wiki, uliza: nini kilifanya kazi vizuri zaidi, na nitabadilisha nini? Unaweza kubandika namba zako za wiki kwenye msaidizi wa AI na kuomba pendekezo moja, kisha uamue mwenyewe."
          ],
          steps: ["Chagua namba tatu zinazohusiana na lengo lako.", "Ziandike kila wiki kwenye jedwali.", "Tafuta chapisho lako bora na baya zaidi.", "Fanya badiliko moja kwa wiki inayofuata."],
          words: [["Analytics (takwimu)", "namba zinazoonyesha jinsi machapisho na kurasa zako zinavyofanya."], ["Namba ya kujionyesha (vanity metric)", "namba inayoonekana nzuri lakini haionyeshi maendeleo kuelekea lengo lako."]],
          slides: [
            { title: "Namba tatu zinazohusiana na lengo lako", bullets: ["Kliniki: mibofyo, usajili, maswali", "Recruiting: waliotazama, majibu ya makocha"] },
            { title: "Utaratibu wa kila wiki", bullets: ["Andika namba kwenye jedwali", "Chapisho bora na baya zaidi", "Badiliko moja kwa wiki inayofuata"] },
            { title: "Kuwa makini", bullets: ["Wafuasi peke yao wanaweza kupotosha", "AI inapendekeza; wewe unaamua"] }
          ],
          tryIt: "Kazi ya mwisho: weka lengo lako, hadhira, njia za mawasiliano, mpango ulioandaliwa kwa AI na namba tatu kwenye ukurasa mmoja. Endesha wiki ya kwanza, andika namba, na andika badiliko moja kwa wiki ya pili.",
          youCanNow: "kupima masoko yako kwa namba tatu zenye maana na kurekebisha kila wiki.",
          quickCheck: [
            { objective: "O6", q: "Kwa nini idadi ya wafuasi peke yake inaweza kukupotosha?", options: ["Huenda isionyeshe kama watu wanachukua hatua ambayo lengo lako linahitaji", "Daima ni ya uongo", "Apps zinaificha", "Inabadilika polepole mno"], answer: 0, why: "Chagua namba zinazohusiana na lengo lako, kama usajili au majibu ya makocha." },
            { objective: "O6", q: "Wiki ya kwanza inaonyesha video zako zilipata mibofyo mingi zaidi kuliko picha zako. Ufanye nini?", options: ["Badilisha kila kitu mara moja", "Puuza namba", "Fanya badiliko moja, kama video fupi zaidi wiki ijayo", "Futa picha zako"], answer: 2, why: "Fanya badiliko moja kila wiki kulingana na namba zako." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Panga, endesha na pima",
        questions: [
          { objective: "O4", q: "Wito wa kuchukua hatua ni nini?", options: ["Simu kwa kocha wako", "Aina ya hashtag", "Adhabu", "Hatua inayofuata iliyo wazi unayowaomba watu wachukue"], answer: 3, why: "Unaiambia hadhira yako ifanye nini baadaye." },
          { objective: "O4", q: "Mpango wako unapaswa kuepuka taarifa gani?", options: ["Mahali ulipo sasa hivi au nyumba yako", "Mchezo wako", "Highlights zako", "Kiungo cha usajili wa kambi yako"], answer: 0, why: "Mahali ulipo sasa hivi na taarifa za nyumbani zinaweza kukuweka hatarini." },
          { objective: "O5", q: "Duka la viatu linakupa viatu vya bure ili uchapishe. Chapisho lako liwe na nini?", options: ["Hakuna cha ziada", "Hashtag iliyofichwa mwishoni", "Tangazo lililo wazi kama \"Asante [duka] kwa viatu vya bure\"", "Maoni ya uongo"], answer: 2, why: "FTC inasema bidhaa za bure zinahesabika na lazima zitangazwe wazi." },
          { objective: "O6", q: "Kwa lengo la kliniki, ipi ina uwezekano mkubwa zaidi wa kuwa namba ya kujionyesha?", options: ["Usajili", "Mibofyo kwenye kiungo", "Maswali kuhusu kliniki", "Idadi ya wafuasi peke yake"], answer: 3, why: "Wafuasi hawaonyeshi maendeleo kuelekea usajili." },
          { objective: "O6", q: "Baada ya wiki ya kwanza, hatua bora inayofuata ni:", options: ["Kuacha", "Kufanya badiliko moja kulingana na namba zako", "Kubadilisha kila kitu", "Kununua wafuasi"], answer: 1, why: "Badiliko moja kwa wakati linaonyesha kinachofanya kazi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Mikakati ya Masoko ya Kidijitali kwa AI kwa Wanamichezo",
    questions: [
      { objective: "O1", q: "Masoko ni:", options: ["Kuchapisha bila mpangilio", "Kununua wafuasi", "Kuwafanya watu sahihi wakujue, wakupende na wakuamini", "Kuuza vitu tu"], answer: 2, why: "Ni kuhusu watu sahihi na imani." },
      { objective: "O1", q: "Herufi T katika SMART inasimama kwa nini?", options: ["Time-bound (lenye Muda maalum)", "Trendy (linalovuma)", "Total (jumla)", "Team (timu)"], answer: 0, why: "Lengo la SMART lina tarehe ya mwisho." },
      { objective: "O1", q: "Lengo lipi SI la SMART?", options: ["Kuwa maarufu", "Kupata majibu 10 ya makocha kufikia March 1", "Kuuza nafasi 30 za kambi kufikia May 15", "Kupata watazamaji 200 wa highlights kufikia Ijumaa"], answer: 0, why: "\"Kuwa maarufu\" halina namba wala tarehe." },
      { objective: "O2", q: "Maelezo ya hadhira yanajumuisha:", options: ["Nywila zao", "Takwimu zako tu", "Wao ni nani na wanajali nini", "Takwimu za mpinzani wako"], answer: 2, why: "Yanaeleza watu unaotaka kuwafikia." },
      { objective: "O2", q: "Wazazi wa kambi wanaweza kutumia muda:", options: ["Kwenye michezo ya video tu", "Kwenye vikundi vya Facebook na maeneo ya mtaani", "Kwenye LinkedIn tu", "Hawako mtandaoni kabisa"], answer: 1, why: "Chagua njia ambazo hadhira hiyo iko." },
      { objective: "O3", q: "Uchague njia za mawasiliano vipi?", options: ["Chochote kinachovuma", "Mahali hadhira yako tayari inatumia muda", "Zote", "Bila mpangilio"], answer: 1, why: "Nenda mahali hadhira yako ilipo." },
      { objective: "O3", q: "Ushiriki (engagement) ni:", options: ["Kuchumbiwa", "Wafuasi tu", "Jinsi watu wanavyojibu: likes, maoni, shares, saves", "Matangazo"], answer: 2, why: "Ushiriki unaonyesha hamu halisi." },
      { objective: "O4", q: "Uipe AI nini ili iandae mpango wako?", options: ["Nywila yako", "Anwani ya nyumba yako", "Taarifa zako za benki", "Lengo, maelezo ya hadhira na njia za mawasiliano"], answer: 3, why: "Hivyo vinaufanya mpango ulingane na lengo lako." },
      { objective: "O4", q: "Jedwali zuri la mpango linajumuisha:", options: ["Wazo, muundo na wito wa kuchukua hatua", "Hashtag tu", "Tarehe tu", "Alama zako za shule"], answer: 0, why: "Kila chapisho linahitaji wazo, muundo na hatua inayofuata." },
      { objective: "O4", q: "Kipi ni wito wa kuchukua hatua?", options: ["\"Siku nzuri\"", "\"Jisajili kupitia kiungo\"", "\"Lol\"", "\"Mchezo ulikuwa mzuri\""], answer: 1, why: "Unawaambia watu wafanye nini baadaye." },
      { objective: "O5", q: "AI inaandika maelezo ya chapisho. Unapaswa:", options: ["Kuyachapisha bila kuyasoma", "Kunakili ya mtu mwingine", "Kuyaandika upya kwa sauti yako mwenyewe", "Kuongeza takwimu za uongo"], answer: 2, why: "Watu wanakufuata kwa sababu wewe ni halisi." },
      { objective: "O5", q: "Kipi hupaswi kuchapisha kamwe?", options: ["Takwimu za uongo", "Highlights zako", "Shukrani kwa kocha wako", "Taarifa za kambi yako"], answer: 0, why: "Ukweli ni muhimu; watu wanakagua." },
      { objective: "O5", q: "Tangazo liwekwe wapi?", options: ["Lifichwe kati ya hashtag nyingi", "Kwenye bio yako tu", "Hakuna mahali", "Pamoja na chapisho, likionekana kwa urahisi"], answer: 3, why: "FTC inasema matangazo lazima yasiwe rahisi kukosa kuonekana." },
      { objective: "O5", q: "Katika video iliyodhaminiwa, tangazo linapaswa:", options: ["Kuwa kwenye maelezo ya chini tu", "Kusemwa na kuonyeshwa kwenye skrini", "Kuachwa", "Kuwa kwenye maoni"], answer: 1, why: "Matangazo ya video yanapaswa kuwa ndani ya video yenyewe." },
      { objective: "O5", q: "Mwanamichezo wa chuo amuulize nani kuhusu kuripoti NIL?", options: ["Shabiki yeyote", "Ofisi ya compliance", "AI peke yake", "Hakuna mtu"], answer: 1, why: "Sheria zinatofautiana kwa shule na ngazi." },
      { objective: "O6", q: "Kwa kawaida unapata namba za machapisho wapi?", options: ["Kwenye app ya hali ya hewa", "Kwenye kalenda yako", "Hakuna mahali", "Kwenye insights au analytics za app"], answer: 3, why: "Akaunti za kitaalamu au za creator zinaonyesha analytics." },
      { objective: "O6", q: "Kwa lengo la recruiting, namba ipi ni muhimu zaidi?", options: ["Majibu ya makocha", "Likes za ovyo", "Idadi ya emoji", "Rangi ya wasifu"], answer: 0, why: "Majibu ya makocha yanaonyesha maendeleo halisi." },
      { objective: "O6", q: "Uandike namba zako mara ngapi?", options: ["Mara moja kwa mwaka", "Kamwe", "Kila wiki", "Kila dakika"], answer: 2, why: "Kila wiki kunakuwezesha kurekebisha kwa wakati." },
      { objective: "O6", q: "AI inapendekeza badiliko. Nani anaamua?", options: ["AI", "Wafuasi wako", "Hakuna mtu", "Wewe"], answer: 3, why: "AI inapendekeza; wewe unaamua." },
      { objective: "O6", q: "Ufanye mabadiliko mangapi kila wiki?", options: ["Kumi", "Moja", "Kila kitu", "Hakuna kamwe"], answer: 1, why: "Badiliko moja kwa wakati linaonyesha kilichofanya kazi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      1,
      3,
      5,
      8,
      10,
      12,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Lengo la SMART",
        objective: "O1",
        notYet: "Lengo haliko wazi, au halina namba wala tarehe.",
        meets: "Lengo moja lenye sehemu zote tano za SMART kwa wiki nne zijazo.",
        exceeds: "Lengo linahusiana wazi na recruiting, NIL, kambi au hatua ya kazi, na linawezekana kwa ratiba ya mwanamichezo."
      },
      {
        name: "Hadhira na njia za mawasiliano",
        objective: "O3",
        notYet: "Hakuna maelezo ya hadhira, au njia zilichaguliwa kwa kufuata kinachovuma badala ya hadhira.",
        meets: "Maelezo mafupi ya hadhira na njia mbili zilizochaguliwa kwa sababu hadhira iko pale, na sheria za umri na faragha zimekaguliwa.",
        exceeds: "Maelezo ya hadhira yalikaguliwa na watu halisi, na sababu za kila njia zinataja walichosema."
      },
      {
        name: "Mpango wa machapisho wa wiki 4",
        objective: "O4",
        notYet: "Machapisho hayana muundo au wito wa kuchukua hatua, au mpango unaonyesha mahali ulipo au nyumba.",
        meets: "Jedwali la wiki 4 lenye wazo, muundo na wito wa kuchukua hatua kwa kila chapisho, lililorekebishwa kulingana na ratiba na salama.",
        exceeds: "Kila wito wa kuchukua hatua unaelekeza kwenye lengo, na mpango unagawanya machapisho kwa usawa kwenye njia zote mbili."
      },
      {
        name: "Machapisho ya kweli",
        objective: "O5",
        notYet: "Maelezo ya machapisho yanasomeka kama maandishi ya AI yaliyonakiliwa, yana madai yasiyothibitishwa, au hayana tangazo linalohitajika.",
        meets: "Machapisho kwa sauti ya mwanamichezo mwenyewe, bila madai yasiyothibitishwa na yenye tangazo wazi kwa faida yoyote kutoka kwa kampuni.",
        exceeds: "Matangazo ya video yanasemwa na kuonyeshwa, na kuripoti NIL kulikaguliwa na ofisi ya compliance inapohitajika."
      },
      {
        name: "Kufuatilia na kubadilisha",
        objective: "O6",
        notYet: "Namba chini ya tatu, au hakuna badiliko lililoandikwa kwa wiki ya pili.",
        meets: "Namba tatu zinazohusiana na lengo ziliandikwa kwa wiki ya kwanza, na badiliko moja liliandikwa kwa wiki ya pili.",
        exceeds: "Chapisho bora na baya zaidi vimetajwa pamoja na namba zinazoeleza badiliko."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza mpango, wanaendesha wiki ya kwanza na wanapata Anafikia au Anazidi katika kila mstari wa rubriki",
      "Wanafunzi wanaoripoti kufikia lengo lao la SMART kufikia tarehe yake (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti matokeo halisi: majibu ya makocha, usajili wa kambi au mazungumzo na kampuni",
      "Wanafunzi ambao bado wanaandika namba za kila wiki siku 30 baadaye"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu yenye apps mbili za mitandao ya kijamii zilizochaguliwa",
      "Msaidizi wa AI wa bure (ChatGPT, Microsoft Copilot au Google Gemini)",
      "Jedwali la bure (Google Sheets) kwa namba za kila wiki",
      "Ratiba yako ya mazoezi na shule",
      "Kama dakika 60 za masomo pamoja na kama dakika 30 kwa wiki kwa wiki nne"
    ],
    facilitatorNotes: [
      "Kwa wanamichezo walio chini ya miaka 18, wahusishe wazazi au walezi kabla akaunti hazijawa wazi kwa umma au kabla ya kuwasiliana na makampuni.",
      "Kagueni mipangilio ya usalama kama kikundi: nani anaweza kutuma ujumbe, kutaja (tag) na kuona mahali; kamwe msionyeshe mahali mlipo sasa hivi, nyumba au ratiba ya shule.",
      "Mshirikishe afisa wa ofisi ya compliance au wa ligi kuhusu sheria za kuripoti NIL kabla wanamichezo hawajakubali mkataba wowote.",
      "Kagua kila rasimu kuona kama madai ni ya kweli na kuna tangazo wazi kabla haijachapishwa.",
      "Fanyeni kikao kifupi cha kila wiki ili wanamichezo washiriki namba zao na badiliko lao moja."
    ]
  }
};

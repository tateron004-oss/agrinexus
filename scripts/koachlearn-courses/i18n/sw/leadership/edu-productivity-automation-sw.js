"use strict";

// Koach Learn course (Swahili translation of leadership/edu-productivity-automation.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "edu-productivity-automation-sw",
  lang: "sw",
  translationOf: "edu-productivity-automation",
  category: "Leadership Development",
  name: "AI kwa Viongozi wa Shule na Elimu 6: Tija na Kazi za Kujiendesha (Automation)",
  skills: "Kutambua kazi zinazokula muda wako zaidi, Kuandika jarida na ujumbe kwa familia, Kuendesha mikutano kuanzia ajenda hadi orodha ya hatua, Kufupisha matokeo ya utafiti na fomu, Kujenga kazi rahisi za kujiendesha, Kupima muda uliookolewa",
  outcome: "kuokoa muda unaopimika katika kazi za utawala wa shule kwa kujenga mitiririko mitatu ya kazi inayosaidiwa na AI: jarida la kila wiki kwa familia, mkutano wa wafanyakazi kuanzia ajenda hadi orodha ya hatua, na ripoti ya utafiti hadi muhtasari, kila mmoja ukiwa na ukaguzi wa mtu na hesabu ya muda kabla na baada.",
  about: [
    "Kozi hii ni kwa wakuu wa shule, manaibu wakuu, wasimamizi wa ofisi, wakuu wa idara, washauri na walimu wanaobeba kazi za utawala. Makaratasi na ujumbe huchukua muda ambao ungekuwa wa wanafunzi. Kozi hii inakusaidia kurudisha sehemu ya muda huo, kwa usalama.",
    "Sura ya 1 inaanza na ukaguzi wa muda, kisha inajenga mitiririko ya kazi ya AI kwa mawasiliano na mikutano. Sura ya 2 inahamia kwenye fomu, tafiti na kazi rahisi za kujiendesha, na inamalizika na mpango wa kupima muda unaouokoa na kuendeleza mitiririko hiyo.",
    "Tumia zana ambazo wilaya yako imeidhinisha tu, na usiweke taarifa binafsi za wanafunzi na wafanyakazi katika zana ambazo hazijaidhinishwa. Zana za bure kama Google Forms, Microsoft Forms, Google Docs na Microsoft 365 zinafaa kwa kazi nyingi. Jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi. Hii ni kozi ya 6 kati ya 8 katika AI kwa Viongozi wa Shule na Elimu."
  ],
  finalTask: "Jenga na uendeshe mitiririko mitatu ya kazi kwa wiki moja: (1) jarida la kila wiki kwa familia kuanzia maelezo mafupi ya vipengele hadi rasimu iliyokamilika na kukaguliwa (na tafsiri zozote zikaguliwe na mzungumzaji mwenye sifa); (2) mkutano wa wafanyakazi kuanzia ajenda iliyoandikwa na AI hadi orodha ya hatua yenye wahusika na tarehe, inayotumwa siku hiyo hiyo; (3) utafiti mfupi wa wafanyakazi au familia ambao matokeo yake unayafupisha kwa AI ukitumia data isiyo na majina tu. Andika dakika ulizotumia kabla na baada kwa kila mmoja, na ukaguzi wa mtu ulioubakiza katika kila mtiririko.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakuu wa shule, manaibu wakuu, wasimamizi wa ofisi, wakuu wa idara, washauri na walimu katika shule za Marekani wanaobeba kazi za utawala.",
    startingPoint: "Wanatumia barua pepe, nyaraka na fomu kila siku na wanajua misingi ya faragha ya wanafunzi kutoka kozi zilizotangulia. Wanaandika majarida mengi, kumbukumbu za mikutano na muhtasari wa tafiti kwa mkono na hawajapima yanachukua muda gani.",
    gap: "Makaratasi na ujumbe huchukua muda ambao ungekuwa wa wanafunzi. Wafanyakazi wa shule wanahitaji mitiririko ya kazi ya AI iliyo salama na inayoweza kurudiwa, yenye ukaguzi wa mtu katika kila mmoja, na hesabu ya muda kabla na baada ili kuthibitisha kwamba kweli inaokoa muda.",
    constraints: [
      "Tumia zana ambazo wilaya imeidhinisha tu; usiweke taarifa binafsi za wanafunzi na wafanyakazi katika zana ambazo hazijaidhinishwa",
      "Zana za bure kama Google Forms, Microsoft Forms, Google Docs na Microsoft 365 zinatosha kwa kazi nyingi",
      "Kila mtiririko wa kazi una ukaguzi wa mtu kabla kitu chochote hakijaenda kwa familia",
      "Tafsiri zinakaguliwa na mzungumzaji mwenye sifa kabla ya kutumwa",
      "Muda: masomo mafupi, pamoja na wiki moja ya kuendesha mitiririko ya kazi"
    ],
    prerequisites: "Inapendekezwa kozi \"AI kwa Viongozi wa Shule na Elimu 2: Zana za AI kwa Waelimishaji\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa wiki ya kawaida", action: "kuorodhesha kazi zako za utawala zinazojirudia pamoja na dakika unazotumia na kuchagua kazi tatu bora za kupewa AI", standard: "ukiorodhesha angalau kazi kumi na kubakiza kwako maamuzi kuhusu wanafunzi mahususi" },
    { id: "O2", condition: "Ukipewa maelezo mafupi ya wiki", action: "kugeuza maelezo hayo kuwa jarida la familia kwa kutumia prompt iliyohifadhiwa inayoweza kutumika tena", standard: "ukikagua kila tarehe, saa na mahali, na tafsiri zikikaguliwa na mzungumzaji mwenye sifa" },
    { id: "O3", condition: "Kwa mkutano wa wafanyakazi au wa timu", action: "kuandika ajenda yenye muda kwa msaada wa AI na kugeuza kumbukumbu kuwa orodha ya hatua yenye wahusika na tarehe", standard: "ukituma orodha ya hatua siku hiyo hiyo" },
    { id: "O4", condition: "Ukipewa majibu ya utafiti yasiyo na majina", action: "kufupisha matokeo kwa AI na kukagua hesabu ukilinganisha na majibu", standard: "baada ya kuondoa kwanza majina, barua pepe na maoni yanayomtambulisha mtu" },
    { id: "O5", condition: "Kwa kazi moja ya kawaida", action: "kuweka kazi rahisi ya kujiendesha, kama kiolezo cha barua pepe au kanuni ya kupanga ujumbe, yenye ukaguzi wa mtu", standard: "ukiijaribu kwako mwenyewe kwanza na ikiidhinishwa na timu yako ya teknolojia inapohitajika" },
    { id: "O6", condition: "Baada ya kuendesha mitiririko yako ya kazi kwa wiki moja", action: "kupima dakika kabla na baada na kuandika kila mtiririko wa kazi kwenye ukurasa mmoja", standard: "ukihesabu muda wa kukagua na kurekebisha, na kuhifadhi kurasa hizo katika folda ya pamoja" }
  ],
  chapters: [
    {
      name: "Sura 1: Kurudisha muda wa mawasiliano na mikutano",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ukaguzi wa muda: wiki inaenda wapi?",
          minutes: 5,
          goal: "Tambua kazi tatu zinazojirudia ambazo zinakula muda wako zaidi.",
          text: [
            "Kabla ya kuweka kazi za kujiendesha, pima kwanza. Kwa wiki moja, andika kwa ufupi kazi za utawala zinazojirudia na takriban muda kila moja inachukua: barua pepe, majarida, maandalizi ya mikutano, kumbukumbu, fomu, ripoti, ratiba na orodha za zamu.",
            "Zungushia duara kazi zinazorudiwa mara nyingi, zinazofuata mtindo unaofanana kila mara, na zisizohitaji taarifa binafsi za wanafunzi ili kuandikwa. Hizo ndizo kazi bora za kupewa AI. Kazi zinazohitaji uamuzi kuhusu mwanafunzi au mfanyakazi mahususi zinabaki kwako.",
            "Chagua tatu za juu kwa muda unaotumia. Hiyo ndiyo mitiririko ya kazi utakayoijenga katika kozi hii, na hizo ndizo namba zako za \"kabla\" za kupima muda uliookolewa."
          ],
          steps: ["Kwa wiki moja, orodhesha kazi za utawala zinazojirudia na dakika unazotumia.", "Zungushia duara kazi za mara kwa mara zenye mtindo mmoja zisizohitaji data binafsi za wanafunzi.", "Bakiza kwako kazi zinazohitaji uamuzi kuhusu watu.", "Chagua tatu za juu kwa muda.", "Hifadhi dakika hizo kama namba zako za \"kabla\"."],
          words: [["Ukaguzi wa muda", "kufuatilia jinsi unavyotumia muda wako ili uweze kuuboresha."], ["Mtiririko wa kazi", "hatua unazofuata ili kumaliza kazi inayojirudia (kwa Kiingereza workflow)."]],
          slides: [
            { title: "Pima kwanza", bullets: ["Wiki moja ya kazi zinazojirudia", "Takriban dakika kwa kila moja"] },
            { title: "Kazi bora za kupewa AI", bullets: ["Za mara kwa mara na zenye mtindo mmoja", "Hazihitaji data binafsi za wanafunzi ili kuandikwa", "Uamuzi kuhusu watu unabaki kwako"] },
            { title: "Chagua tatu", bullets: ["Tatu za juu kwa muda", "Dakika zake ni namba zako za \"kabla\""] }
          ],
          tryIt: "Orodhesha angalau kazi kumi za utawala zinazojirudia katika wiki yako pamoja na takriban dakika za kila moja. Zungushia duara kazi tatu bora za kupewa AI.",
          youCanNow: "kutambua kazi zinazojirudia ambazo AI inaweza kukuokolea muda mwingi zaidi.",
          quickCheck: [
            { objective: "O1", q: "Ukaguzi wa muda ni nini?", options: ["Mapitio ya bajeti ya shule yako", "Kufuatilia muda unaotumia kwa kila kazi", "Ukaguzi wa mahudhurio ya wafanyakazi", "Jaribio la kasi ya AI"], answer: 1, why: "Ukaguzi wa muda unaonyesha wiki inaenda wapi, ili uchague cha kuboresha." },
            { objective: "O1", q: "Moja ya kazi zinazokula muda wako ni kuamua adhabu ya mwanafunzi mahususi. Je, iwe kazi ya kupewa AI?", options: ["Ndiyo, AI ni ya haraka zaidi", "Ndiyo, kama hakuna atakayegundua", "Hapana; uamuzi kuhusu mwanafunzi mahususi unabaki kwako", "Katika wiki zenye shughuli nyingi tu"], answer: 2, why: "Kazi zinazohitaji uamuzi kuhusu mwanafunzi mahususi zinabaki kwa mtu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Majarida na ujumbe kwa familia",
          minutes: 6,
          goal: "Geuza maelezo mafupi kuwa jarida la familia lililo wazi kwa kutumia prompt inayoweza kutumika tena.",
          text: [
            "Weka orodha ya maelezo mafupi wiki nzima: matukio, tarehe, vikumbusho, sherehe (bila majina ya wanafunzi isipokuwa kanuni za shule yako za vyombo vya habari na taarifa za orodha zinaruhusu). Ijumaa, bandika maelezo hayo pamoja na prompt uliyoihifadhi.",
            "Prompt inayoweza kutumika tena: \"Geuza maelezo haya kuwa jarida la familia lenye ukarimu na lililo wazi kwa shule ya msingi. Lugha rahisi, sehemu fupi zenye vichwa, tarehe kwa herufi nzito, chini ya maneno 300. Usiongeze tukio au ukweli wowote ambao haupo katika maelezo yangu.\" Ihifadhi ili jarida lionekane sawa kila wiki.",
            "Kagua kila tarehe, saa na mahali ukilinganisha na kalenda ya shule. Kwa familia zinazosoma lugha nyingine, tafsiri ya AI ni rasimu tu: mwombe mzungumzaji mwenye sifa aikague kabla haijatumwa, ili familia zipate taarifa sahihi."
          ],
          steps: ["Weka maelezo mafupi wiki nzima.", "Yabandike pamoja na prompt yako ya jarida uliyoihifadhi.", "Kagua kila tarehe, saa na mahali.", "Tafsiri zikaguliwe na mzungumzaji mwenye sifa.", "Tuma, na uhifadhi prompt kwa wiki ijayo."],
          words: [["Prompt inayoweza kutumika tena", "prompt (ombi unaloandika kwa AI) unaloihifadhi na kuitumia kila mara kwa kazi ile ile."], ["Mzungumzaji mwenye sifa", "mtu anayejua lugha vizuri kiasi cha kuweza kukagua usahihi wa tafsiri."]],
          slides: [
            { title: "Maelezo mafupi wiki nzima", bullets: ["Matukio, tarehe, vikumbusho, sherehe", "Fuata kanuni zenu kuhusu majina na picha za wanafunzi"] },
            { title: "Prompt iliyohifadhiwa", bullets: ["Yenye ukarimu, lugha rahisi, sehemu fupi", "Tarehe kwa herufi nzito, chini ya maneno 300", "\"Usiongeze chochote kisichokuwa katika maelezo yangu\""] },
            { title: "Kabla halijatumwa", bullets: ["Kagua tarehe, saa, mahali", "Tafsiri zikaguliwe na mzungumzaji mwenye sifa"] }
          ],
          tryIt: "Andika maelezo mafupi ya wiki ya kubuni na utumie prompt iliyohifadhiwa kuyageuza kuwa jarida. Likague ukilinganisha na maelezo yako na upime muda uliochukua.",
          youCanNow: "kutoa jarida la familia lililokaguliwa na lenye mtindo mmoja kutokana na maelezo ya kila wiki.",
          quickCheck: [
            { objective: "O2", q: "Kwa nini uhifadhi prompt yako ya jarida?", options: ["Ili uweze kuitumia tena kila wiki", "Ili AI iwakumbuke wanafunzi wako", "Ili familia zione", "Ili isihitaji kukaguliwa kamwe"], answer: 0, why: "Prompt iliyohifadhiwa inafanya jarida la kila wiki liweze kurudiwa." },
            { objective: "O2", q: "Jarida la AI linataja mauzo ya keki ambayo hayapo katika maelezo yako. Ungefanya nini?", options: ["Kuyaacha; familia zinapenda mauzo ya keki", "Kubadilisha tarehe", "Kulituma na kulirekebisha baadaye", "Kuyaondoa na kuongeza \"Usiongeze chochote kisichokuwa katika maelezo yangu\" kwenye prompt"], answer: 3, why: "AI inaweza kubuni matukio, kwa hiyo prompt inakataza hilo na wewe unakagua ukilinganisha na maelezo yako." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Mikutano: kuanzia ajenda hadi orodha ya hatua",
          minutes: 5,
          goal: "Tumia AI kuandika ajenda na kugeuza kumbukumbu kuwa orodha ya hatua yenye wahusika na tarehe.",
          text: [
            "Kabla: ipe AI lengo la mkutano, urefu wake, wahudhuriaji kwa nafasi zao, na mada. Omba ajenda yenye muda pamoja na matokeo yanayotakiwa kwa kila kipengele (kuamua, kujadili, kujulisha). Itume mapema ili watu waje wakiwa tayari.",
            "Baada: bandika kumbukumbu zako (baada ya kuondoa taarifa binafsi kuhusu wanafunzi au wafanyakazi) na uombe maamuzi, hatua katika jedwali lenye mhusika na tarehe ya mwisho, na maswali yaliyobaki wazi, ukiongeza \"andika HAIPO kama mhusika au tarehe haipo katika kumbukumbu; usiongeze chochote kisichokuwa katika kumbukumbu\".",
            "Kagua orodha ya hatua ukilinganisha na kumbukumbu zako, jaza mapengo na uitume siku hiyo hiyo. Ukifikiria kutumia kinasa sauti cha mikutano cha AI, kagua sera ya wilaya yako na uwajulishe washiriki kwanza; usirekodi kamwe mikutano kuhusu wanafunzi mmoja mmoja, kama mikutano ya IEP (mpango wa elimu wa mtu binafsi kwa mwanafunzi mwenye mahitaji maalum) au ya nidhamu, kwa zana ambazo hazijaidhinishwa."
          ],
          steps: ["Andika ajenda yenye muda na matokeo kwa kila kipengele.", "Itume mapema.", "Baada ya mkutano, bandika kumbukumbu bila taarifa binafsi.", "Pata maamuzi, hatua (mhusika, tarehe) na maswali yaliyo wazi.", "Kagua, jaza mapengo na utume siku hiyo hiyo."],
          words: [["Ajenda", "orodha ya mada na muda wa kila moja katika mkutano."], ["Orodha ya hatua", "kazi zilizokubaliwa katika mkutano, kila moja ikiwa na mhusika na tarehe ya mwisho."]],
          slides: [
            { title: "Kabla ya mkutano", bullets: ["Lengo, urefu, nafasi, mada", "Ajenda yenye muda", "Matokeo kwa kila kipengele: kuamua, kujadili, kujulisha"] },
            { title: "Baada ya mkutano", bullets: ["Bandika kumbukumbu bila taarifa binafsi", "Maamuzi, hatua, maswali yaliyo wazi", "HAIPO kwa mapengo; usiongeze chochote"] },
            { title: "Vinasa sauti", bullets: ["Kagua sera; wajulishe washiriki", "Kamwe kwa mikutano ya IEP au nidhamu kwa zana zisizoidhinishwa"] }
          ],
          tryIt: "Tumia AI kuandika ajenda yenye muda kwa mkutano wako ujao wa wafanyakazi au wa timu. Baada yake, geuza kumbukumbu zako kuwa orodha ya hatua na uitume siku hiyo hiyo. Pima muda wa hatua zote mbili.",
          youCanNow: "kuendesha mikutano kuanzia ajenda iliyo wazi hadi orodha ya hatua ya siku hiyo hiyo kwa msaada wa AI.",
          quickCheck: [
            { objective: "O3", q: "Ajenda yenye muda inakipa kila kipengele nini?", options: ["Muda na matokeo yanayotakiwa", "Mshahara wa mzungumzaji", "Kura", "Slaidi"], answer: 0, why: "Muda na matokeo vinaufanya mkutano ubaki kwenye lengo." },
            { objective: "O3", q: "Timu inataka kurekodi mkutano wa IEP kwa kinasa sauti cha AI cha bure ambacho hakijaidhinishwa. Ungesema nini?", options: ["Endeleeni, kinaokoa kumbukumbu", "Rekodini lakini mfute baadaye", "Hapana; tumieni zana zilizoidhinishwa tu na mfuate sera kwa mikutano ya wanafunzi", "Rekodini nusu yake tu"], answer: 2, why: "Mikutano ya IEP inahusu taarifa za wanafunzi zinazolindwa na inahitaji zana zilizoidhinishwa na sera." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kurudisha muda wa mawasiliano na mikutano",
        questions: [
          { objective: "O1", q: "Kazi ipi ni bora zaidi kupewa AI?", options: ["Kuamua adhabu ya mwanafunzi", "Kuandika IEP ya mwanafunzi mahususi", "Jarida la kila wiki linalofuata mtindo ule ule", "Kuchagua mwalimu wa kutathminiwa"], answer: 2, why: "Kazi za mara kwa mara zenye mtindo mmoja zisizo na data binafsi zinafaa kwa AI." },
          { objective: "O2", q: "Kwa nini uongeze \"Usiongeze chochote kisichokuwa katika maelezo yangu\" kwenye prompt ya jarida?", options: ["Inazuia AI kubuni matukio au ukweli", "Inalirefusha", "Inalitafsiri", "Inaongeza picha"], answer: 0, why: "AI inaweza kujaza mapengo kwa maelezo ya kubuni." },
          { objective: "O2", q: "Tafsiri ya AI ya jarida inapaswa:", options: ["Kutumwa mara moja", "Kutumwa kwa wafanyakazi tu", "Kurukwa", "Kukaguliwa kwanza na mzungumzaji mwenye sifa"], answer: 3, why: "Familia zinastahili taarifa sahihi." },
          { objective: "O3", q: "Mkutano upi haupaswi kamwe kurekodiwa kwa zana ya AI ambayo haijaidhinishwa?", options: ["Mkutano wa jumla wa mipango", "Mkutano wa IEP kuhusu mwanafunzi", "Klabu ya vitabu", "Tathmini baada ya zoezi la moto"], answer: 1, why: "Mikutano kuhusu mwanafunzi mahususi inahusu taarifa zinazolindwa." },
          { objective: "O3", q: "Orodha ya hatua inapaswa kutumwa lini?", options: ["Mwezi ujao", "Ikiombwa tu", "Kamwe", "Siku hiyo hiyo"], answer: 3, why: "Orodha ya hatua ya siku hiyo hiyo inadumisha kasi ya kazi." }
        ]
      }
    },
    {
      name: "Sura 2: Fomu, kazi za kujiendesha na kupima faida",
      lessons: [
        {
          objectives: ["O4"],
          title: "Tafiti na fomu: kuanzia majibu hadi muhtasari",
          minutes: 6,
          goal: "Fupisha matokeo ya utafiti kwa AI bila kufichua taarifa binafsi.",
          text: [
            "Google Forms na Microsoft Forms zinakusanya majibu katika lahajedwali (spreadsheet). Kisha AI inaweza kukusaidia kuona mada kuu katika maoni ya wazi na kuandika muhtasari mfupi kwa wafanyakazi au familia.",
            "Linda watu kwanza. Tengeneza tafiti zisizokusanya majina isipokuwa unayahitaji kweli. Kabla ya kubandika majibu katika zana ya AI, futa majina, barua pepe na maoni yoyote yanayomtambulisha mwanafunzi au mfanyakazi. Tumia zana zilizoidhinishwa tu kwa chochote chenye taarifa za wanafunzi.",
            "Prompt: \"Haya ni maoni ya utafiti bila majina kutoka kwa familia kuhusu muda wa kuwachukua watoto. Yapange katika mada kuu, hesabu mangapi yanaingia katika kila mada, nukuu maoni mawili mafupi ya kawaida kwa kila mada, na uorodheshe mapendekezo matatu. Usibuni maoni.\" Kisha kagua hesabu wewe mwenyewe ukilinganisha na lahajedwali; mara nyingi AI hukosea kuhesabu."
          ],
          steps: ["Tengeneza tafiti bila majina isipokuwa yanahitajika.", "Ondoa majina, barua pepe na maoni yanayotambulisha watu kabla ya kutumia AI.", "Tumia zana zilizoidhinishwa kwa chochote chenye taarifa za wanafunzi.", "Omba mada kuu, hesabu, nukuu za kawaida na mapendekezo.", "Kagua hesabu wewe mwenyewe."],
          words: [["Bila majina", "bila majina wala maelezo yanayoonyesha mtu ni nani (kwa Kiingereza anonymous)."], ["Mada kuu", "wazo la pamoja linalojitokeza katika majibu mengi."]],
          slides: [
            { title: "Fomu hadi lahajedwali hadi muhtasari", bullets: ["Google Forms au Microsoft Forms", "AI inapata mada kuu katika maoni"] },
            { title: "Linda watu kwanza", bullets: ["Usikusanye majina isipokuwa yanahitajika", "Ondoa maelezo yanayotambulisha watu kabla ya AI", "Zana zilizoidhinishwa kwa taarifa za wanafunzi"] },
            { title: "Omba, kisha kagua", bullets: ["Mada kuu, hesabu, nukuu za kawaida, mapendekezo", "\"Usibuni maoni\"", "Kagua hesabu wewe mwenyewe: AI hukosea kuhesabu"] }
          ],
          tryIt: "Tengeneza utafiti wa maswali matatu bila majina katika Google Forms au Microsoft Forms. Andika majibu kumi ya kubuni, yafupishe kwa AI, na ukague hesabu ukilinganisha na majibu.",
          youCanNow: "kugeuza majibu ya utafiti kuwa muhtasari sahihi bila kufichua taarifa binafsi.",
          quickCheck: [
            { objective: "O4", q: "Nini kinafanya utafiti uwe bila majina?", options: ["Una kichwa kifupi", "Haukusanyi majina wala maelezo yanayotambulisha watu", "Mkuu wa shule tu ndiye anayeusoma", "Unatumwa kwa barua pepe"], answer: 1, why: "Tafiti zisizo na majina hazikusanyi majina wala maelezo yanayotambulisha watu." },
            { objective: "O4", q: "AI inasema familia 40 zilitaja maegesho ya magari. Unafanya nini kabla ya kuliripoti?", options: ["Kukagua hesabu ukilinganisha na lahajedwali ya majibu", "Kuliripoti kama lilivyo", "Kulikadiria juu hadi 50", "Kuiuliza AI kama ina uhakika"], answer: 0, why: "Hesabu za AI zinaweza kuwa si sahihi, kwa hiyo zikague ukilinganisha na data." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kazi rahisi za kujiendesha: violezo, kanuni na vichochezi",
          minutes: 5,
          goal: "Weka kazi moja rahisi ya kujiendesha na ubakize ukaguzi wa mtu ndani yake.",
          text: [
            "Si kila kitu kinahitaji AI. Njia nyingi za kuokoa muda ni kazi rahisi za kujiendesha: violezo vya barua pepe kwa majibu ya kawaida, kanuni za barua pepe zinazopanga ujumbe katika folda, violezo vya nyaraka kwa ripoti zinazojirudia, mail merge kwa barua za kibinafsi, na vikumbusho vya kalenda.",
            "Kazi kubwa zaidi za kujiendesha zinaunganisha hatua: fomu inapotumwa, ongeza mstari katika lahajedwali na utume uthibitisho; kila Ijumaa, wakumbushe wafanyakazi kuwasilisha kumbukumbu. Microsoft Power Automate na Google Apps Script zinaweza kufanya hivi; uliza timu yako ya teknolojia nini kinaruhusiwa katika wilaya yako kabla ya kujenga chochote kinachogusa data za shule.",
            "Bakiza ukaguzi wa mtu popote kazi ya kujiendesha inapotuma kitu kwa familia au inapofanya badiliko lenye uzito. Kosa dogo linalorudiwa lenyewe kwa familia 500 ni kosa kubwa."
          ],
          steps: ["Anza kwa mambo rahisi: violezo, kanuni, vikumbusho.", "Chagua kazi moja inayojirudia ya kuifanya ijiendeshe.", "Wasiliana na timu yako ya teknolojia kabla ya kuunganisha data za shule.", "Ongeza ukaguzi wa mtu kabla kitu chochote hakijaenda kwa familia.", "Jaribu kwanza ukiwa wewe peke yako ndiye mpokeaji."],
          words: [["Kazi ya kujiendesha", "mpangilio unaofanya kazi wenyewe jambo fulani linapotokea (kwa Kiingereza automation)."], ["Kichochezi", "tukio linaloanzisha kazi ya kujiendesha, kama fomu kutumwa (kwa Kiingereza trigger)."], ["Mail merge", "kutengeneza barua au barua pepe nyingi za kibinafsi kutoka kiolezo kimoja na orodha."]],
          slides: [
            { title: "Njia rahisi za kuokoa muda", bullets: ["Violezo vya barua pepe na kanuni za kupanga", "Violezo vya nyaraka", "Mail merge na vikumbusho"] },
            { title: "Hatua zilizounganishwa", bullets: ["Fomu imetumwa, mstari umeongezwa, uthibitisho umetumwa", "Power Automate au Apps Script", "Uliza timu yako ya teknolojia kwanza"] },
            { title: "Bakiza ukaguzi wa mtu", bullets: ["Kabla kitu chochote hakijaenda kwa familia", "Jaribu kwako mwenyewe kwanza", "Makosa yanazidishwa yenyewe"] }
          ],
          tryIt: "Weka kazi moja rahisi ya kujiendesha: kiolezo cha barua pepe kwa jibu la kawaida, au kanuni inayopanga aina fulani ya ujumbe. Ijaribu kwako mwenyewe na uandike ukaguzi wa mtu uko wapi.",
          youCanNow: "kuweka kazi rahisi za kujiendesha kwa usalama, zenye ukaguzi wa mtu pale unapohitajika.",
          quickCheck: [
            { objective: "O5", q: "Kichochezi katika kazi ya kujiendesha ni nini?", options: ["Mtu anayeiidhinisha", "Hatua ya mwisho ya mtiririko wa kazi", "Tukio linaloanzisha kazi ya kujiendesha", "Aina ya barua pepe"], answer: 2, why: "Kichochezi, kama ujumbe mpya kuingia, kinaanzisha kazi ya kujiendesha." },
            { objective: "O5", q: "Umejenga kanuni inayojibu familia yenyewe. Unafanya nini kwanza?", options: ["Kuiwasha kwa familia zote kwa wakati mmoja", "Kuizima na kuisahau", "Kuziomba familia ziijaribu", "Kuijaribu ukiwa wewe peke yako ndiye mpokeaji"], answer: 3, why: "Kujaribu kwako mwenyewe kunanasa makosa kabla hayajawafikia watu wengi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kupima muda uliookolewa na kuendeleza kazi",
          minutes: 6,
          goal: "Pima muda kabla na baada na ufanye mitiririko yako ya kazi idumu.",
          text: [
            "Umeokoa muda tu kama namba zinasema hivyo. Kwa kila mtiririko wa kazi, linganisha dakika kabla (kutoka ukaguzi wako wa muda) na baada, pamoja na muda wa kukagua. Kama mtiririko unachukua muda ule ule kwa sababu ya kurekebisha, badilisha prompt au uachane na mtiririko huo.",
            "Andika kila mtiririko wa kazi kwenye ukurasa mmoja: lengo, prompt au kiolezo kilichohifadhiwa, hatua, ukaguzi wa mtu, na nani anaufanya. Hivyo mtu mwingine anaweza kuuendesha ukiwa haupo, na wafanyakazi wapya wanaweza kujifunza.",
            "Washirikishe wafanyakazi mafanikio na waalike walete mitiririko yao ya kazi. Folda ya pamoja ya prompt na violezo vya shule inazidisha muda uliookolewa katika shule nzima. Ipitie kila muhula ili prompt zibaki sahihi kadiri kalenda, zana na sera zinavyobadilika."
          ],
          steps: ["Linganisha dakika kabla na baada, pamoja na kukagua.", "Rekebisha au achana na mitiririko isiyookoa muda.", "Andika kila mtiririko wa kazi kwenye ukurasa mmoja.", "Shirikisha katika folda ya shule ya prompt na violezo.", "Pitia kila muhula."],
          words: [["Kabla na baada", "kulinganisha kipimo kabla na baada ya badiliko."], ["Maandishi ya utaratibu", "hatua zilizoandikwa ili wengine waweze kurudia mchakato (kwa Kiingereza documentation)."]],
          slides: [
            { title: "Hesabu dakika", bullets: ["Kabla dhidi ya baada", "Jumuisha muda wa kukagua", "Hakuna faida? Rekebisha au achana nao"] },
            { title: "Ukurasa mmoja kwa kila mtiririko wa kazi", bullets: ["Lengo, prompt, hatua", "Ukaguzi wa mtu na mhusika", "Wengine wanaweza kuuendesha"] },
            { title: "Sambaza faida", bullets: ["Folda ya pamoja ya prompt na violezo", "Alika mitiririko ya kazi ya wafanyakazi", "Pitia kila muhula"] }
          ],
          tryIt: "Kazi ya mwisho: endesha mitiririko yako mitatu ya kazi kwa wiki moja (jarida, ajenda ya mkutano hadi hatua, utafiti hadi muhtasari). Andika dakika kabla na baada kwa kila mmoja, andika kila mmoja kwenye ukurasa mmoja pamoja na ukaguzi wake wa mtu, na uiweke katika folda ya pamoja.",
          youCanNow: "kujenga, kupima na kushirikisha mitiririko ya kazi za utawala inayosaidiwa na AI inayorudisha muda kwa wanafunzi.",
          quickCheck: [
            { objective: "O6", q: "Muda uliookolewa unapaswa kujumuisha nini?", options: ["Muda ambao AI ilichukua kujibu tu", "Muda uliotumika kukagua na kurekebisha pia", "Siku bora ya wiki tu", "Muda ambao wengine walitumia"], answer: 1, why: "Muda wa kukagua na kurekebisha ni sehemu ya gharama halisi ya mtiririko wa kazi." },
            { objective: "O6", q: "Mtiririko wa kazi bado unachukua muda ule ule kama awali kwa sababu unarekebisha makosa mengi ya AI. Ungefanya nini?", options: ["Kubadilisha prompt au kuachana na mtiririko huo", "Kuuendeleza, kwa kuwa AI ni mpya", "Kuacha kukagua matokeo", "Kuongeza zana ya pili ya AI"], answer: 0, why: "Mtiririko wa kazi usiookoa muda unapaswa kuboreshwa au kuachwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Fomu, kazi za kujiendesha na kupima faida",
        questions: [
          { objective: "O4", q: "Kabla ya kubandika maoni ya utafiti katika zana ya AI, unapaswa:", options: ["Kuongeza majina kwa ajili ya muktadha", "Kuongeza namba za utambulisho za wanafunzi", "Kuondoa majina, barua pepe na maoni yanayotambulisha watu", "Kutofanya chochote"], answer: 2, why: "Ondoa maelezo yanayotambulisha watu ili kuwalinda." },
          { objective: "O4", q: "AI inasema familia 40 zilitaja msongamano wa magari. Unapaswa:", options: ["Kukagua hesabu ukilinganisha na lahajedwali", "Kuichapisha", "Kuizidisha mara mbili", "Kupuuza mada hiyo"], answer: 0, why: "Mara nyingi AI hukosea kuhesabu." },
          { objective: "O5", q: "Kabla ya kujenga kazi ya kujiendesha inayogusa data za shule, uliza:", options: ["Mwanafunzi", "Timu yako ya teknolojia nini kinaruhusiwa", "Tangazo la muuzaji", "Hakuna mtu"], answer: 1, why: "Wilaya zinaweka kanuni za kuunganisha data za shule." },
          { objective: "O5", q: "Kwa nini ujaribu kazi ya kujiendesha kwanza ukiwa wewe peke yako ndiye mpokeaji?", options: ["Ili kunasa makosa kabla hayajawafikia watu wengi", "Ni haraka zaidi", "Inatakiwa na sheria", "Ili kuokoa karatasi"], answer: 0, why: "Makosa yanazidishwa kazi inapojiendesha." },
          { objective: "O6", q: "Mtiririko wa kazi unachukua muda ule ule kama awali kwa sababu ya kurekebisha makosa ya AI. Unapaswa:", options: ["Kuuendeleza hata hivyo", "Kuongeza hatua zaidi", "Kuacha kukagua", "Kubadilisha prompt au kuachana na mtiririko huo"], answer: 3, why: "Muda halisi uliookolewa tu ndio unaohesabika." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Viongozi wa Shule na Elimu 6: Tija na Kazi za Kujiendesha (Automation)",
    questions: [
      { objective: "O1", q: "Ukaguzi wa muda:", options: ["Unakagua saa za shule", "Unafuatilia jinsi unavyotumia muda kwa kazi", "Ni ukaguzi wa fedha", "Unawapa walimu alama"], answer: 1, why: "Pima kabla ya kuboresha." },
      { objective: "O1", q: "Kazi zinazohitaji uamuzi kuhusu mwanafunzi mahususi zinapaswa:", options: ["Kujiendesha zenyewe", "Kupewa AI", "Kubaki kwako", "Kurukwa"], answer: 2, why: "Maamuzi kuhusu watu yanabaki kwa watu." },
      { objective: "O1", q: "Namba za \"kabla\" ni:", options: ["Alama za mitihani", "Namba za simu", "Dakika zilizotumika kabla ya kazi kujiendesha", "Vipengele vya bajeti"], answer: 2, why: "Zinakuwezesha kupima muda uliookolewa." },
      { objective: "O2", q: "Prompt ya jarida inapaswa:", options: ["Kuhifadhiwa na kutumika tena kila wiki", "Kuandikwa upya kutoka mwanzo kila mara", "Kuwa siri", "Kuwa ndefu na isiyo wazi"], answer: 0, why: "Prompt zilizohifadhiwa zinaweka mtindo mmoja." },
      { objective: "O2", q: "Kabla ya kutuma jarida, kagua:", options: ["Aina ya herufi", "Kichwa tu", "Hakuna kitu", "Kila tarehe, saa na mahali"], answer: 3, why: "Tarehe zisizo sahihi zinasababisha matatizo halisi kwa familia." },
      { objective: "O2", q: "Majina ya wanafunzi katika majarida yanapaswa kufuata:", options: ["Chochote ambacho AI inapendekeza", "Kanuni za shule yako za vyombo vya habari na taarifa za orodha", "Hakuna kanuni", "Mitindo ya mitandao ya kijamii"], answer: 1, why: "Shule zina kanuni kuhusu kushirikisha taarifa za wanafunzi." },
      { objective: "O3", q: "Ajenda yenye muda inakipa kila kipengele:", options: ["Hakuna kitu", "Bei", "Nywila", "Muda na matokeo yanayotakiwa"], answer: 3, why: "Matokeo yanaifanya mikutano ibaki kwenye lengo." },
      { objective: "O3", q: "Orodha ya hatua inajumuisha:", options: ["Umbea", "Mada tu", "Kazi, mhusika na tarehe ya mwisho", "Mishahara"], answer: 2, why: "Uwajibikaji ulio wazi unafanya mambo yafanyike." },
      { objective: "O3", q: "Kama kumbukumbu hazitaji mhusika, AI inapaswa kuandika:", options: ["HAIPO", "Kukisia", "Jina lako", "Hakuna kitu"], answer: 0, why: "Kuonyesha mapengo kunazuia wahusika wa kubuni." },
      { objective: "O3", q: "Vinasa sauti vya mikutano vya AI vinahitaji:", options: ["Matumizi ya siri", "Kukagua sera na kuwajulisha washiriki", "Hakuna ukaguzi", "Ridhaa ya wanafunzi tu"], answer: 1, why: "Kurekodi kunaleta masuala ya ridhaa na faragha." },
      { objective: "O4", q: "Google Forms na Microsoft Forms zinakusanya majibu katika:", options: ["Lahajedwali", "Video", "Printa", "Chatbot"], answer: 0, why: "Majibu yanaingia katika lahajedwali unaloweza kuchambua." },
      { objective: "O4", q: "Utafiti usio na majina:", options: ["Hauna maswali", "Unakusanya anwani za kila mtu", "Ni kinyume cha sheria", "Haukusanyi majina wala maelezo yanayotambulisha watu"], answer: 3, why: "Kutokuwa na majina kunawalinda wanaojibu." },
      { objective: "O4", q: "Kuiomba AI \"nukuu maoni mawili ya kawaida kwa kila mada\" kunakusaidia:", options: ["Kubuni maoni", "Kuonyesha sauti halisi nyuma ya kila mada", "Kuficha matokeo", "Kuokoa karatasi"], answer: 1, why: "Nukuu zinafanya muhtasari uwe halisi; bado zikague." },
      { objective: "O5", q: "Kipi ni kazi rahisi ya kujiendesha?", options: ["Mkutano wa wafanyakazi", "Jengo jipya", "Kanuni ya barua pepe inayopanga ujumbe katika folda", "Ziara ya masomo"], answer: 2, why: "Kanuni na violezo vinaokoa muda bila AI." },
      { objective: "O5", q: "Mail merge inatengeneza:", options: ["Chati ya lahajedwali", "Barua moja ndefu", "Barua nyingi za kibinafsi kutoka kiolezo kimoja na orodha", "Utafiti"], answer: 2, why: "Inaweka maelezo ya kila mtu kwa watu wengi kwa wakati mmoja." },
      { objective: "O5", q: "Kichochezi ni:", options: ["Tukio linaloanzisha kazi ya kujiendesha", "Kengele ya shule", "Nywila", "Alama ya mtihani"], answer: 0, why: "Kama fomu kutumwa." },
      { objective: "O5", q: "Ukaguzi wa mtu unapaswa kuwa wapi?", options: ["Mwishoni mwa mwaka", "Mahali popote", "Baada ya malalamiko tu", "Kabla kitu chochote hakijatumwa kwa familia"], answer: 3, why: "Makosa yanayoenda kwa familia yanazidishwa haraka." },
      { objective: "O6", q: "Muda uliookolewa unapaswa kujumuisha:", options: ["Muda wa kuandika rasimu tu", "Muda uliotumika kukagua na kurekebisha", "Hakuna kitu", "Muda wa watu wengine tu"], answer: 1, why: "Muda wa kukagua ni sehemu ya gharama halisi." },
      { objective: "O6", q: "Kuandika kila mtiririko wa kazi kwenye ukurasa mmoja kunaruhusu:", options: ["Ufutwe", "Mtu yeyote asiuone", "AI iupe alama", "Wengine wauendeshe ukiwa haupo"], answer: 3, why: "Maandishi ya utaratibu yanaifanya mitiririko ya kazi idumu." },
      { objective: "O6", q: "Folda ya pamoja ya prompt za shule inapaswa kupitiwa:", options: ["Kila miaka kumi", "Kamwe", "Kila muhula", "Na wanafunzi tu"], answer: 2, why: "Kalenda, zana na sera hubadilika." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      1,
      3,
      4,
      7,
      9,
      11,
      13,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Mtiririko wa jarida",
        objective: "O2",
        notYet: "Jarida halikukaguliwa ukilinganisha na maelezo, au tafsiri haikukaguliwa.",
        meets: "Maelezo mafupi yaligeuka kuwa rasimu iliyokamilika na kukaguliwa, na tafsiri yoyote ikakaguliwa na mzungumzaji mwenye sifa.",
        exceeds: "Anatumia prompt iliyohifadhiwa inayokataza kuongeza chochote kisichokuwa katika maelezo."
      },
      {
        name: "Mtiririko wa mkutano",
        objective: "O3",
        notYet: "Hakuna orodha ya hatua, au kazi hazina wahusika wala tarehe.",
        meets: "Ajenda iliyoandikwa na AI na orodha ya hatua yenye wahusika na tarehe, iliyotumwa siku hiyo hiyo.",
        exceeds: "Wahusika wasiotajwa wamewekewa alama na kufuatiliwa."
      },
      {
        name: "Mtiririko wa utafiti",
        objective: "O4",
        notYet: "Data ilikuwa na majina, au hesabu hazikukaguliwa.",
        meets: "Matokeo ya utafiti yalifupishwa kwa AI kwa kutumia data isiyo na majina tu.",
        exceeds: "Hesabu zilikaguliwa ukilinganisha na lahajedwali na maoni ya kawaida yakanukuliwa kwa kila mada."
      },
      {
        name: "Muda umepimwa",
        objective: "O6",
        notYet: "Hakuna dakika za kabla au baada zilizoandikwa.",
        meets: "Dakika za kabla na baada ziliandikwa kwa kila mtiririko wa kazi.",
        exceeds: "Dakika za baada zinajumuisha muda wa kukagua na kurekebisha."
      },
      {
        name: "Ukaguzi wa mtu",
        objective: "O5",
        notYet: "Mtiririko wa kazi unatuma kitu kwa familia bila ukaguzi wa mtu.",
        meets: "Kila mtiririko wa kazi unataja ukaguzi wa mtu uliobakizwa ndani yake.",
        exceeds: "Kila mtiririko wa kazi umeandikwa kwenye ukurasa mmoja katika folda ya pamoja ili wengine waweze kuuendesha."
      }
    ]
  },
  evaluation: {
    results: [
      "Wafanyakazi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Dakika zilizookolewa kwa wiki katika mitiririko yote mitatu ya kazi (rekodi za kabla na baada)",
      "Mitiririko ya kazi ambayo bado inatumika baada ya siku 30 (utafiti wa kufuatilia)",
      "Shule zenye folda ya pamoja ya mitiririko ya kazi ya ukurasa mmoja inayopitiwa kila muhula"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye intaneti na msaidizi wa AI ulioidhinishwa na wilaya",
      "Google Forms au Microsoft Forms, na Google Docs au Microsoft 365",
      "Daftari rahisi la muda kwa dakika za kabla na baada",
      "Kama dakika 60 kwa masomo na majaribio, pamoja na wiki moja ya kuendesha mitiririko ya kazi"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha fanyeni ukaguzi wa muda kama kikundi na mlinganishe kazi zinazokula muda zaidi.",
      "Usiweke taarifa binafsi za wanafunzi na wafanyakazi katika zana zisizoidhinishwa; tumia majibu ya utafiti ya kubuni katika mazoezi.",
      "Uliza timu ya teknolojia ni kazi zipi za kujiendesha zinaruhusiwa kabla mtu yeyote hajajenga moja.",
      "Waombe wafanyakazi wajaribu kazi za kujiendesha kwao wenyewe kabla hazijazifikia familia.",
      "Pima kazi ya mwisho kwa rubriki, na kusanya dakika za kabla na baada ili kushirikisha shule akiba ya muda."
    ]
  }
};

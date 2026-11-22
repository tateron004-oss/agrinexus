"use strict";

// Koach Learn course (Swahili translation of entrepreneurs/entrepreneurs-capstone.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "entrepreneurs-capstone-sw",
  lang: "sw",
  translationOf: "entrepreneurs-capstone",
  category: "Entrepreneurs",
  name: "Mradi wa Mwisho: Jenga Mpango wa Biashara, Huduma, Mfumo wa Otomatiki, Mkakati wa Masoko au Mfumo wa Tija kwa AI",
  skills: "Kuchagua mradi na kuweka mipaka yake, Kuthibitisha kwa watu halisi, Kusanifu suluhisho, Kuujenga kwa AI, Kukagua namba na hatari, Kujaribu na kuwasilisha kazi yako",
  outcome: "kuchagua mradi mmoja wa biashara wa AI (mpango wa biashara mpya, biashara ya huduma, mfumo wa otomatiki, mkakati wa masoko, au mfumo wa tija), kuujenga mwanzo hadi mwisho ukitumia AI kama msaidizi wako, kuujaribu kwa watu halisi, na kuwasilisha toleo lililokamilika na kukaguliwa.",
  about: [
    "Huu ni mradi wa mwisho (capstone): mradi unaounganisha yote uliyojifunza katika kozi za Wajasiriamali. Utachagua mradi MMOJA kati ya mitano na kuujenga kwa ajili ya biashara halisi, yako au unayoijua vizuri.",
    "Machaguo matano ni: 1) mpango wa biashara mpya wa AI, 2) biashara ya huduma inayotumia AI, 3) mfumo wa otomatiki wa AI kwa biashara, 4) mkakati wa masoko wa AI, au 5) mfumo wa tija wa AI (zana, violezo na taratibu zinazoendesha wiki ya biashara). Kila somo ni hatua moja ya kuujenga: kuchagua na kuweka mipaka, kuthibitisha, kusanifu, kujenga, kukagua namba na hatari, kisha kujaribu na kuwasilisha.",
    "Kila somo linachukua kama dakika tano kusoma, lakini kazi za \"Jaribu sasa\" ni kazi halisi za mradi na zinaweza kuchukua saa moja au zaidi. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Mradi wako ukigusa kodi, leseni au madai ya kisheria, masomo yanakuelekeza kwenye vyanzo rasmi; zungumza na mhasibu au wakili kuhusu hali yako."
  ],
  finalTask: "Wasilisha mradi wako wa mwisho uliokamilika kama hati moja au folda moja: muhtasari wa ukurasa mmoja (biashara, mteja, tatizo, suluhisho lako), mradi mzima (mpango wa biashara, kifurushi cha huduma, otomatiki inayofanya kazi pamoja na rekodi yake, mkakati wa masoko, au mfumo wa tija), maelezo yako ya uthibitisho kutoka kwa angalau watu watatu halisi, namba na orodha ya kukagua hatari, matokeo ya majaribio na mabadiliko uliyofanya, na wasilisho la dakika tatu unaloweza kulitoa kwa sauti.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wajasiriamali wanaomaliza kozi za Wajasiriamali za Koach Learn wanaotaka kujenga mradi mmoja kamili wa AI kwa biashara yao wenyewe au biashara wanayoijua vizuri.",
    startingPoint: "Wametumia AI kwa uandishi wa biashara, zana, masoko, otomatiki au tija katika kozi za awali. Wengi hawajawahi kupeleka mradi mmoja kutoka wazo hadi matokeo yaliyojaribiwa na kuwasilishwa.",
    gap: "Ujuzi unaojifunzwa mmoja mmoja unaleta faida tu unapounganishwa katika mradi uliokamilika. Wanafunzi wanahitaji kuweka mipaka, kuthibitisha, kusanifu, kujenga, kukagua na kuwasilisha mradi mmoja halisi, ili waondoke na kitu wanachoweza kutumia, kumwonyesha mshirika au mfadhili, na kuendelea kukiboresha.",
    constraints: [
      "Maneno rahisi; kila somo ni fupi, lakini kazi ya mradi inaweza kuchukua saa moja au zaidi kwa kila hatua",
      "Vifaa: kompyuta yenye msaidizi wa AI wa bure, spredishiti (spreadsheet) na zana ya kuandika hati",
      "Muda: kama wiki mbili hadi nne za kazi ya mradi ya muda mfupi",
      "Mambo ya kodi, leseni na sheria yanapelekwa kwenye vyanzo rasmi (SBA, IRS) na kwa mhasibu au wakili",
      "Vishika-nafasi badala ya majina ya wateja au taarifa binafsi katika kila prompt ya AI"
    ],
    prerequisites: "\"Utangulizi wa AI kwa Wajasiriamali\" na angalau kozi nyingine mbili za Wajasiriamali, ikiwezekana ile inayolingana na mradi uliochaguliwa."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa machaguo matano ya mradi wa mwisho na biashara halisi", action: "kuchagua mradi mmoja na kuandika aya moja ya mipaka yake inayosema kilichomo, kisichomo na tarehe ya kumaliza", standard: "ukiwa mdogo kiasi cha kumalizika kwa wakati" },
    { id: "O2", condition: "Ukipewa dhana kuu za mradi wako", action: "kuwahoji angalau watu watatu halisi kwa maswali yasiyoegemea upande wowote na kuweka alama kila dhana kuwa imethibitishwa, si sahihi au haijulikani", standard: "ukiandika maneno yao halisi na kubadilisha mipaka dhana ikiwa si sahihi" },
    { id: "O3", condition: "Ukipewa mipaka ya mradi na maelezo yako ya uthibitisho", action: "kuandika muhtasari wa mpangilio (outline) wenye sehemu zinazofaa aina ya mradi wako", standard: "ukionyesha sehemu zipi zinahitaji ukweli wako mwenyewe" },
    { id: "O4", condition: "Ukitumia AI kama msaidizi wako", action: "kujenga mradi sehemu moja baada ya nyingine, AI ikiandika rasimu na wewe ukikagua", standard: "ukiweka kumbukumbu ya ujenzi na kutumia vishika-nafasi kwa taarifa binafsi" },
    { id: "O5", condition: "Ukipewa mradi wako", action: "kukagua namba zake katika spredishiti na kuandika orodha ya kukagua hatari", standard: "kila fomula ikiwa imekaguliwa na mambo ya kodi na sheria yakiwa na alama ya kuthibitishwa na chanzo rasmi au mtaalamu" },
    { id: "O6", condition: "Ukipewa mradi wako uliokamilika", action: "kuujaribu kwa watu watatu, kufanya mabadiliko muhimu zaidi na kutoa wasilisho la dakika tatu", standard: "likigusa tatizo, suluhisho lako, ushahidi na hatua inayofuata" }
  ],
  chapters: [
    {
      name: "Sura 1: Panga mradi wako",
      lessons: [
        {
          objectives: ["O1"],
          title: "Hatua ya 1: Kuchagua mradi na kuweka mipaka yake",
          minutes: 6,
          goal: "Chagua mmoja kati ya miradi mitano ya mwisho na uandike aya moja ya mipaka yake.",
          text: [
            "Chagua mradi utakaosaidia biashara halisi zaidi katika miezi mitatu ijayo. Mpango wa biashara unafaa wazo jipya linalohitaji mpango ulio wazi au ufadhili. Biashara ya huduma inamfaa mtu aliye tayari kuuza huduma kwa kutumia AI. Mfumo wa otomatiki unafaa biashara iliyozama katika kazi zinazojirudia. Mkakati wa masoko unafaa biashara inayohitaji wateja zaidi. Mfumo wa tija unamfaa mmiliki aliyelemewa anayehitaji wiki bora.",
            "Kuweka mipaka (scope) maana yake ni kuamua kilichomo na kisichomo. Mipaka mizuri ni midogo kiasi cha kumalizika: \"Mkakati wa masoko wa siku 90 kwa huduma yangu ya kuosha magari inayotembea, ukilenga mtaa mmoja na njia mbili\" ni bora kuliko \"masoko ya kila kitu\".",
            "Iombe AI ikusaidie kulinganisha: \"Hii ni biashara yangu na tatizo langu kubwa zaidi. Kati ya miradi hii mitano ya mwisho, upi ungesaidia zaidi, na kwa nini?\" Kisha amua mwenyewe na uandike mipaka yako."
          ],
          steps: ["Andika biashara yako (au unayoisaidia) na tatizo lake kubwa zaidi.", "Soma machaguo matano ya mradi.", "Iulize AI upi ungesaidia zaidi na kwa nini.", "Chagua mmoja.", "Andika aya moja ya mipaka: kilichomo, kisichomo, na tarehe ya kumaliza."],
          words: [["Mradi wa mwisho (capstone)", "mradi wa mwisho unaounganisha yote uliyojifunza."], ["Mipaka (scope)", "mipaka ya mradi: kilichojumuishwa na kisichojumuishwa."]],
          slides: [
            { title: "Machaguo matano ya mradi wa mwisho", bullets: ["Mpango wa biashara mpya wa AI", "Biashara ya huduma inayotumia AI", "Mfumo wa otomatiki wa AI", "Mkakati wa masoko au mfumo wa tija wa AI"] },
            { title: "Upi unafaa?", bullets: ["Wazo jipya linalohitaji mpango: mpango wa biashara", "Tayari kuuza huduma: biashara ya huduma", "Kazi nyingi zinazojirudia: otomatiki"] },
            { title: "Na", bullets: ["Unahitaji wateja: mkakati wa masoko", "Mmiliki aliyelemewa: mfumo wa tija"] },
            { title: "Weka mipaka midogo", bullets: ["Kilichomo, kisichomo", "Tarehe ya kumaliza", "Mdogo kiasi cha kumalizika"] }
          ],
          tryIt: "Chagua mradi wako wa mwisho na uandike aya moja ya mipaka yake inayosema kilichomo, kisichomo na tarehe yako ya kumaliza.",
          youCanNow: "kuchagua mradi wa mwisho unaofaa biashara halisi na kuuwekea mipaka ili uweze kuumaliza.",
          quickCheck: [
            { objective: "O1", q: "Mipaka ya mradi inasema nini?", options: ["Kilichomo na kisichomo katika mradi, na lini utakamilika", "Historia ya maisha yako", "Kila wazo uliowahi kuwa nalo", "Jina la zana yako ya AI"], answer: 0, why: "Mipaka inaufanya mradi kuwa mdogo kiasi cha kumalizika." },
            { objective: "O1", q: "Mipaka yako inagusa masoko katika miji mitano na njia sita ndani ya wiki mbili. Unafanya nini?", options: ["Kuiacha kama ilivyo", "Kuipunguza iwe eneo moja na njia chache", "Kuongeza miji zaidi", "Kuacha tarehe ya kumaliza"], answer: 1, why: "Mipaka midogo inaweza kumalizika na kufanywa vizuri." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Hatua ya 2: Kuthibitisha kwa watu halisi",
          minutes: 5,
          goal: "Kagua dhana za mradi wako kwa kuzungumza na angalau watu watatu halisi.",
          text: [
            "Kila mradi umesimama juu ya dhana: wateja wanataka hiki, watalipa kiasi hiki, kazi hii inapoteza saa hizi, watu wanatupata kwenye jukwaa hili. Kuthibitisha (validation) maana yake ni kuzikagua kwa watu halisi kabla ya kujenga.",
            "Iulize AI: \"Orodhesha dhana tano kubwa zaidi katika mradi huu na uandike maswali matatu ya mahojiano yasiyoegemea upande wowote kwa kila moja.\" Kutoegemea upande maana yake hukumwelekezi mtu jibu: uliza \"Unashughulikiaje jambo hili leo?\" si \"Si ungependa wazo langu?\"",
            "Zungumza na angalau watu watatu: wateja watarajiwa, mmiliki wa biashara, au wafanyakazi wanaofanya kazi hiyo. Andika maneno yao halisi. Kisha iombe AI ikusaidie kupanga ulichosikia katika makundi, na uandike dhana zipi zilisimama na zipi hazikusimama."
          ],
          steps: ["Iombe AI iorodheshe dhana tano kubwa zaidi za mradi wako.", "Andika maswali ya mahojiano yasiyoegemea upande wowote.", "Zungumza na angalau watu watatu halisi.", "Andika maneno yao halisi.", "Weka alama kila dhana: imethibitishwa, si sahihi au haijulikani, na ubadilishe mipaka yako."],
          words: [["Dhana", "kitu unachoamini ni kweli lakini hujakikagua."], ["Kuthibitisha (validation)", "kukagua dhana kwa ushahidi halisi kabla ya kujenga."], ["Swali lisiloegemea upande", "swali lisilomsukuma mtu kuelekea jibu fulani."]],
          slides: [
            { title: "Kila mradi una dhana", bullets: ["Wateja wanautaka", "Watalipa kiasi hiki", "Kazi hii inapoteza saa hizi"] },
            { title: "Uliza maswali yasiyoegemea upande", bullets: ["\"Unashughulikiaje jambo hili leo?\"", "Si \"Si ungependa wazo langu?\""] },
            { title: "Zungumza na watu watatu au zaidi", bullets: ["Wateja, mmiliki au wafanyakazi", "Andika maneno yao halisi", "Imethibitishwa, si sahihi au haijulikani?"] }
          ],
          tryIt: "Orodhesha dhana zako tano kwa msaada wa AI, wahoji angalau watu watatu kwa maswali yasiyoegemea upande, na uweke alama kila dhana: imethibitishwa, si sahihi au haijulikani.",
          youCanNow: "kuthibitisha mradi wa biashara kwa watu halisi kabla ya kuujenga.",
          quickCheck: [
            { objective: "O2", q: "Dhana katika mradi wa biashara ni nini?", options: ["Ukweli uliothibitishwa", "Sheria", "Kitu unachoamini lakini hujakikagua", "Jina la mteja"], answer: 2, why: "Kuthibitisha kunakagua dhana kwa watu halisi." },
            { objective: "O2", q: "Mahojiano yanaonyesha wateja hawajali kipengele ulichopanga mradi kukizunguka. Unafanya nini?", options: ["Kupuuza", "Kuwahoji tu watu wanaokubaliana nawe", "Kukijenga hata hivyo", "Kubadilisha mipaka au usanifu wako"], answer: 3, why: "Dhana zisizo sahihi zinapaswa kubadilisha mpango kabla ya kujenga." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Hatua ya 3: Kusanifu suluhisho",
          minutes: 6,
          goal: "Andika muhtasari wa mpangilio wa mradi wako ukitumia muundo unaofaa chaguo lako.",
          text: [
            "Kila mradi una muundo wake. Mpango wa biashara: SBA (ofisi ya serikali ya Marekani ya biashara ndogo) inaorodhesha sehemu za mpango wa kawaida (muhtasari wa utendaji, maelezo ya kampuni, uchambuzi wa soko, muundo na usimamizi, huduma au bidhaa, masoko na mauzo, ombi la ufadhili, makadirio ya fedha) na chaguo la mpango mfupi (lean plan). Biashara ya huduma: tatizo, kinachokabidhiwa, hatua (za AI na za mtu), prompt ya maelekezo, bei. Mfumo wa otomatiki: ramani ya mtiririko wa kazi, kichocheo na vitendo, hatua ya AI, vizuizi vya idhini, majaribio na ufuatiliaji.",
            "Mkakati wa masoko: mteja bora, ofa, njia moja au mbili, kalenda ya maudhui, mpango wa barua pepe, na namba utakazofuatilia. Mfumo wa tija: mpango wa wiki, zana (zana moja kwa kila kazi), violezo, SOP (taratibu za kawaida za kazi), otomatiki na kumbukumbu ya muda.",
            "Iombe AI igeuze mipaka yako na maelezo ya uthibitisho kuwa muhtasari wa mpangilio wenye sehemu hizi. Uhariri ili kila sehemu ionyeshe kile watu halisi walichokuambia."
          ],
          steps: ["Tafuta muundo wa aina ya mradi wako.", "Ipe AI mipaka yako na maelezo ya uthibitisho.", "Omba muhtasari wa mpangilio wenye sehemu hizo na mstari mmoja kuhusu kinachoingia katika kila moja.", "Hariri muhtasari ukitumia kile watu halisi walichokuambia.", "Weka alama sehemu zipi AI inaweza kuandika rasimu na zipi zinahitaji ukweli wako mwenyewe."],
          words: [["Muhtasari wa mpangilio (outline)", "orodha ya sehemu ambazo mradi utakuwa nazo, kabla ya kuuandika kikamilifu."], ["Mpango mfupi (lean plan)", "mpango mfupi wa biashara unaolenga sehemu muhimu, badala ya mpango mrefu wa kawaida."]],
          slides: [
            { title: "Mpango wa biashara (sehemu za SBA)", bullets: ["Muhtasari wa utendaji, kampuni, uchambuzi wa soko", "Muundo, bidhaa au huduma, masoko", "Ombi la ufadhili, makadirio ya fedha"] },
            { title: "Huduma au otomatiki", bullets: ["Huduma: tatizo, kinachokabidhiwa, hatua, prompt, bei", "Otomatiki: ramani, kichocheo, vitendo, vizuizi, majaribio"] },
            { title: "Masoko au tija", bullets: ["Masoko: mteja, ofa, njia, kalenda, barua pepe", "Tija: mpango wa wiki, zana, violezo, SOP"] },
            { title: "Jenga muhtasari wa mpangilio", bullets: ["AI inaandika rasimu kutoka mipaka na maelezo yako", "Wewe unahariri kwa kile watu halisi walisema"] }
          ],
          sources: [{ name: "SBA: Write your business plan", url: "https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan" }],
          tryIt: "Iombe AI igeuze mipaka yako na maelezo ya uthibitisho kuwa muhtasari wa mpangilio wenye sehemu zinazofaa mradi wako. Uhariri na uweke alama sehemu zinazohitaji ukweli wako mwenyewe.",
          youCanNow: "kusanifu muundo mzima wa mradi wako wa mwisho kwa msingi wa ushahidi halisi.",
          quickCheck: [
            { objective: "O3", q: "Unaweza kupata wapi sehemu za kawaida za mpango wa biashara?", options: ["Ukurasa wa SBA kuhusu mpango wa biashara", "Chapisho la mitandao ya kijamii", "Kukisia kwa AI bila msingi", "Mafaili ya siri ya mshindani"], answer: 0, why: "SBA inaorodhesha sehemu za mpango wa kawaida wa biashara." },
            { objective: "O3", q: "Muhtasari wa AI wa mradi wako wa otomatiki umeacha vizuizi. Unafanya nini?", options: ["Kukubali muhtasari", "Kuongeza sehemu ya vizuizi", "Kuondoa majaribio pia", "Kuhamia mradi wa masoko"], answer: 1, why: "Mradi wa otomatiki unahitaji mtiririko wa kazi, kichocheo na vitendo, hatua ya AI, vizuizi na majaribio." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Panga mradi wako",
        questions: [
          { objective: "O1", q: "Mmiliki wa biashara anasema, \"Ninatumia saa 10 kwa wiki kunakili oda kati ya apps.\" Mradi upi wa mwisho unafaa zaidi?", options: ["Mkakati wa masoko wa AI", "Mfumo wa otomatiki wa AI", "Mpango wa biashara mpya wa AI", "Hakuna"], answer: 1, why: "Kunakili kunakojirudia ndicho hasa otomatiki inachotatua." },
          { objective: "O1", q: "Upi ni mradi wenye mipaka mizuri?", options: ["Kutumia zana zote za AI", "Masoko ya kila kitu milele", "Kurekebisha biashara nzima", "Mkakati wa masoko wa siku 90 kwa mtaa mmoja na njia mbili"], answer: 3, why: "Ni mdogo na wazi kiasi cha kumalizika." },
          { objective: "O2", q: "Lipi ni swali la mahojiano lisiloegemea upande?", options: ["\"Unashughulikiaje jambo hili leo?\"", "\"Si ungependa wazo langu?\"", "\"Ungelipa $100, sivyo?\"", "\"Kila mtu anahitaji hiki, ndiyo?\""], answer: 0, why: "Halimsukumi mtu kuelekea jibu fulani." },
          { objective: "O2", q: "Unapaswa kuzungumza na angalau watu wangapi halisi?", options: ["Mazungumzo moja na AI", "Sifuri", "Watatu", "Wewe mwenyewe tu"], answer: 2, why: "Mazungumzo matatu ndiyo kiwango cha chini kwa mradi huu wa mwisho." },
          { objective: "O3", q: "Ipi ni mojawapo ya sehemu za mpango wa kawaida wa biashara wa SBA?", options: ["Nywila za mitandao ya kijamii", "Apps unazopenda", "Uchambuzi wa soko", "Mapambo ya ofisi"], answer: 2, why: "Uchambuzi wa soko ni mojawapo ya sehemu ambazo SBA inaorodhesha." }
        ]
      }
    },
    {
      name: "Sura 2: Jenga, kagua na uwasilishe",
      lessons: [
        {
          objectives: ["O4"],
          title: "Hatua ya 4: Kuujenga kwa AI",
          minutes: 6,
          goal: "Jenga mradi mzima sehemu kwa sehemu, AI ikiandika rasimu na wewe ukikagua.",
          text: [
            "Fanya kazi sehemu moja kwa wakati. Kwa kila moja, ipe AI jina la sehemu, ukweli wako halisi na muundo unaoutaka. Mfano: \"Andika sehemu ya uchambuzi wa soko kwa mpango wa biashara wa huduma yangu ya kuosha magari inayotembea. Haya ndiyo wateja watatu walioniambia na ukweli wa eneo nilioupata. Chini ya maneno 300, lugha rahisi.\"",
            "Kwa miradi ya vitendo, jenga kitu halisi: weka otomatiki na uijaribu, tengeneza violezo na SOP, tengeneza machapisho ya kwanza na barua pepe, au andika kifurushi cha huduma na uiendeshe mara moja.",
            "Weka kumbukumbu fupi ya ujenzi: ulichotengeneza, zana gani, ulichobadilisha baada ya kukagua. Usiweke kamwe taarifa binafsi za wateja au za pesa katika zana za AI; tumia vishika-nafasi na uzijaze mwenyewe."
          ],
          steps: ["Chagua sehemu inayofuata kutoka muhtasari wako wa mpangilio.", "Ipe AI jina la sehemu, ukweli wako na muundo.", "Kagua rasimu: ukweli, namba, sauti, madai.", "Jenga sehemu za vitendo kwa uhalisia na uzijaribu.", "Andika mstari katika kumbukumbu yako ya ujenzi na uende sehemu inayofuata."],
          words: [["Kumbukumbu ya ujenzi (build log)", "rekodi rahisi ya ulichotengeneza, kwa zana gani, na ulichobadilisha."], ["Kishika-nafasi", "neno la muda kama [jina la mteja] unalolibadilisha mwenyewe, nje ya zana ya AI."]],
          slides: [
            { title: "Sehemu moja kwa wakati", bullets: ["Jina la sehemu + ukweli wako + muundo", "AI inaandika rasimu; wewe unakagua"] },
            { title: "Jenga kitu halisi", bullets: ["Weka otomatiki na uijaribu", "Tengeneza violezo, SOP, machapisho", "Endesha huduma mara moja"] },
            { title: "Weka kumbukumbu ya ujenzi", bullets: ["Nini, zana gani, ulibadilisha nini", "Hakuna taarifa binafsi katika zana za AI"] }
          ],
          tryIt: "Jenga angalau nusu ya sehemu za mradi wako (au kipande kikuu kinachofanya kazi), AI ikiandika rasimu na wewe ukikagua. Weka kumbukumbu yako ya ujenzi.",
          youCanNow: "kujenga mradi halisi wa biashara ukitumia AI kama msaidizi wako na wewe mwenyewe kama mkaguzi.",
          quickCheck: [
            { objective: "O4", q: "Kumbukumbu ya ujenzi inarekodi nini?", options: ["Nywila zako", "Matokeo ya mwisho tu", "Ulichotengeneza, zana gani na ulichobadilisha", "Namba za simu za wateja"], answer: 2, why: "Kumbukumbu ya ujenzi inaonyesha jinsi mradi ulivyojengwa na kukaguliwa." },
            { objective: "O4", q: "Unahitaji AI iandike rasimu ya barua pepe kwa mteja wa mradi wako. Unamjumuishaje mteja?", options: ["Kubandika jina lake kamili na anwani", "Kubandika namba ya kadi yake", "Kuacha barua pepe", "Kutumia kishika-nafasi kama [jina la mteja]"], answer: 3, why: "Vishika-nafasi vinazuia taarifa binafsi zisiingie kwenye AI." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Hatua ya 5: Kukagua namba na hatari",
          minutes: 6,
          goal: "Kagua namba za mradi wako na utengeneze orodha ya kukagua hatari.",
          text: [
            "Kila mradi unahitaji namba za kweli: gharama (zana, muda, vifaa), bei au akiba, na lini unarudisha gharama. Ziweke katika spredishiti na ukague kila fomula mwenyewe. AI inaweza kupendekeza cha kujumuisha, lakini wewe ndiye unayekagua hesabu.",
            "Kisha tengeneza orodha ya kukagua hatari kutokana na ulichojifunza: Je, madai yote ya masoko na ya AI ni ya kweli na yanaweza kuthibitishwa (sheria za matangazo za FTC, tume ya biashara ya Marekani)? Je, data ya wateja imewekwa nje ya zana za AI na inalindwa? Je, mtu anakagua kila kitu ambacho wateja wanaona? Je, matangazo yanayolipiwa yanawekwa wazi? Je, unahitaji leseni, kibali au usajili wa kodi mahali unapofanyia kazi?",
            "Kwa upande rasmi, tumia tovuti rasmi. Kwa mfano, IRS (mamlaka ya kodi ya Marekani) inasema hulazimiki kamwe kulipa ada kwa Employer Identification Number (EIN) na inaonya kuhusu tovuti zinazotoza ada kwa ajili yake. Watu wanaojiajiri kwa ujumla hulipa kodi ya kujiajiri (self-employment tax) na mara nyingi kodi za makadirio kila robo mwaka; angalia irs.gov na uzungumze na mhasibu. Muulize wakili kuhusu jambo lolote la kisheria katika mpango wako."
          ],
          steps: ["Orodhesha gharama zote, bei au akiba katika spredishiti.", "Hesabu lini mradi unarudisha gharama zake.", "Kagua kila fomula mwenyewe.", "Tengeneza orodha ya kukagua hatari: madai, data, ukaguzi wa mtu, kuweka wazi, leseni na kodi.", "Weka alama mambo ya kuthibitisha na tovuti rasmi, mhasibu au wakili."],
          words: [["Kurudisha gharama (payback)", "muda hadi pesa zilizopatikana au kuokolewa zifidie ulichotumia."], ["EIN", "Employer Identification Number: namba ya kodi ya serikali kuu ya Marekani kwa biashara, inayotolewa bure na IRS."], ["Kodi ya kujiajiri (self-employment tax)", "kodi ya Social Security na Medicare ambayo watu wanaojiajiri hulipa."]],
          slides: [
            { title: "Namba za kweli", bullets: ["Gharama: zana, muda, vifaa", "Bei au akiba", "Lini inarudisha gharama; kagua kila fomula"] },
            { title: "Orodha ya kukagua hatari", bullets: ["Madai ni ya kweli na yanathibitishika", "Data ya wateja inalindwa", "Ukaguzi wa mtu; kuweka wazi"] },
            { title: "Vyanzo rasmi", bullets: ["IRS: EIN ni bure; jihadhari na tovuti zinazotoza", "Kodi ya kujiajiri na ya makadirio: irs.gov", "Muulize mhasibu au wakili"] }
          ],
          sources: [{ name: "IRS: Get an Employer Identification Number", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" }, { name: "IRS: Self-Employed Individuals Tax Center", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }, { name: "FTC: Advertising and Marketing Basics", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Tengeneza jedwali lako la namba (gharama, bei au akiba, kurudisha gharama), kagua kila fomula, na uandike orodha yako ya kukagua hatari yenye mambo ya kuthibitisha rasmi.",
          youCanNow: "kukagua namba na hatari za mradi, na kujua wapi pa kuthibitisha mambo ya kodi na sheria.",
          quickCheck: [
            { objective: "O5", q: "Kurudisha gharama (payback) ni nini?", options: ["Muda hadi mapato au akiba vifidie gharama", "Pesa inayorudishwa kwa mteja", "Fomu ya kodi", "Ada ya kuchelewa"], answer: 0, why: "Kurudisha gharama kunaonyesha muda kabla mradi haujajilipia." },
            { objective: "O5", q: "Mradi wako unahitaji leseni ya biashara. Nini kinaingia katika orodha yako ya kukagua hatari?", options: ["Hakuna; AI ilisema ni sawa", "Kuthibitisha sheria za leseni na ofisi rasmi inayohusika", "Kuacha leseni", "Kumuuliza rafiki mtandaoni"], answer: 1, why: "Mambo ya leseni na sheria yanathibitishwa na vyanzo rasmi au mtaalamu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Hatua ya 6: Kujaribu, kuboresha na kuwasilisha",
          minutes: 6,
          goal: "Jaribu mradi wako uliokamilika kwa watu halisi, uuboreshe, na uuwasilishe kwa dakika tatu.",
          text: [
            "Onyesha mradi uliokamilika kwa angalau watu watatu: mmiliki, mteja mtarajiwa, au mtu atakayeutumia. Uliza: \"Nini kiko wazi? Nini kinachanganya? Ungebadilisha nini?\" Kwa miradi ya vitendo, waache waujaribu.",
            "Fanya mabadiliko muhimu zaidi na uyaandike. Kisha iombe AI ikusaidie kuandika wasilisho la dakika tatu: tatizo, nani analo, suluhisho lako, ushahidi (watu walichokuambia na matokeo ya majaribio), namba, na hatua inayofuata.",
            "Lifanyie mazoezi kwa sauti. Iombe AI ijifanye msikilizaji mgumu (mwekezaji, mmiliki wa biashara, mteja) na ikuulize maswali magumu. Kisha unganisha kila kitu kama kifurushi chako cha mwisho cha mradi."
          ],
          steps: ["Onyesha au jaribu mradi kwa angalau watu watatu.", "Fanya mabadiliko muhimu zaidi na uyaandike.", "Iombe AI iandike muhtasari wa wasilisho la dakika tatu.", "Fanya mazoezi kwa sauti na upime muda.", "Igiza maswali magumu pamoja na AI.", "Unganisha kifurushi cha mwisho."],
          words: [["Wasilisho fupi (pitch)", "mazungumzo mafupi yanayoeleza mradi wako na kwa nini ni muhimu."], ["Ushahidi", "uthibitisho kwamba mradi wako unafanya kazi, kama matokeo ya majaribio na watu walichosema."]],
          slides: [
            { title: "Jaribu mradi uliokamilika", bullets: ["Angalau watu watatu", "Nini kiko wazi, kinachanganya, kinastahili kubadilishwa?", "Waache wajaribu sehemu za vitendo"] },
            { title: "Wasilisho la dakika tatu", bullets: ["Tatizo na nani analo", "Suluhisho lako na ushahidi", "Namba na hatua inayofuata"] },
            { title: "Mazoezi", bullets: ["Kwa sauti, ukipima muda", "AI inajifanya msikilizaji mgumu", "Kisha unganisha kifurushi cha mwisho"] }
          ],
          tryIt: "Kazi ya mwisho: jaribu mradi wako kwa watu watatu, fanya mabadiliko muhimu zaidi, fanya mazoezi ya wasilisho lako la dakika tatu, na uunganishe kifurushi chako cha mradi: muhtasari, mradi mzima, maelezo ya uthibitisho, namba na orodha ya hatari, matokeo ya majaribio na wasilisho.",
          youCanNow: "kujenga, kukagua, kujaribu na kuwasilisha mradi kamili wa biashara wa AI mwanzo hadi mwisho.",
          quickCheck: [
            { objective: "O6", q: "Ushahidi katika wasilisho la dakika tatu ni nini?", options: ["Maoni yako", "Orodha ndefu ya vipengele", "Uthibitisho kama matokeo ya majaribio na watu walichosema", "Utani"], answer: 2, why: "Ushahidi unaonyesha mradi unafanya kazi kwa watu halisi." },
            { objective: "O6", q: "Wajaribu wanaona sehemu mbili zinachanganya. Unafanya nini kabla ya kuwasilisha?", options: ["Kuuwasilisha kama ulivyo", "Kuondoa maelezo ya wajaribu", "Kuongeza sehemu zaidi", "Kufanya mabadiliko muhimu zaidi na kujaribu tena sehemu zinazochanganya"], answer: 3, why: "Kujaribu ni kwa ajili ya kupata na kurekebisha matatizo kabla ya kuwasilisha." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Jenga, kagua na uwasilishe",
        questions: [
          { objective: "O4", q: "Unapojenga kwa AI, uipe nini kwa kila sehemu?", options: ["Jina la sehemu, ukweli wako halisi na muundo", "Nywila yako ya benki", "Hakuna; iache ikisie", "Mpango wa mshindani wa kunakili"], answer: 0, why: "Ukweli halisi na muundo ulio wazi vinaleta rasimu inayoweza kutumika." },
          { objective: "O5", q: "Nani anakagua fomula katika jedwali lako la namba?", options: ["Tovuti yoyote tu", "AI peke yake", "Hakuna mtu", "Wewe"], answer: 3, why: "Hesabu za AI zinaweza kuwa si sahihi." },
          { objective: "O5", q: "Tovuti inajitolea kukupatia EIN kwa $250. IRS inasema nini?", options: ["Hiyo ndiyo bei rasmi", "Hulazimiki kamwe kulipa ada kwa EIN; jihadhari na tovuti zinazotoza", "EIN zinagharimu $1,000", "EIN zilizolipiwa tu ndizo halali"], answer: 1, why: "IRS inatoa EIN bure na inaonya kuhusu tovuti zinazotoza." },
          { objective: "O6", q: "Kipi kinafaa katika wasilisho la dakika tatu?", options: ["Tatizo, suluhisho lako, ushahidi na hatua inayofuata", "Kila undani wa kila spredishiti", "Nywila zako", "Utani tu"], answer: 0, why: "Wasilisho fupi linalenga yale yaliyo muhimu." },
          { objective: "O6", q: "AI inawezaje kukusaidia kufanya mazoezi ya wasilisho lako?", options: ["Kwa kuandika maoni bandia ya wateja", "Kwa kutoa wasilisho badala yako", "Kwa kujifanya msikilizaji mgumu anayeuliza maswali magumu", "Kwa kuruka mazoezi"], answer: 2, why: "Kuigiza kunajenga kujiamini kwa maswali halisi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Mradi wa Mwisho: Jenga Mpango wa Biashara, Huduma, Mfumo wa Otomatiki, Mkakati wa Masoko au Mfumo wa Tija kwa AI",
    questions: [
      { objective: "O1", q: "Unachagua miradi mingapi ya mwisho?", options: ["Yote mitano", "Mmoja", "Mitatu", "Hakuna"], answer: 1, why: "Unachagua mradi MMOJA na kuumaliza." },
      { objective: "O1", q: "Mmiliki aliyelemewa anayehitaji wiki bora anapaswa kuchagua:", options: ["Nembo mpya", "Mpango wa biashara mpya wa AI", "Hakuna", "Mfumo wa tija wa AI"], answer: 3, why: "Mfumo wa tija unapanga wiki ya mmiliki." },
      { objective: "O1", q: "Wazo jipya linalohitaji ufadhili linafaa zaidi:", options: ["Kiolezo cha malalamiko", "Mfumo wa otomatiki", "Kalenda ya maudhui tu", "Mpango wa biashara mpya wa AI"], answer: 3, why: "Mpango wa biashara unaeleza wazo na pesa zinazohitajika." },
      { objective: "O1", q: "Mipaka (scope) maana yake ni:", options: ["Nembo ya mradi", "Kilichomo na kisichomo katika mradi", "Bei", "Programu"], answer: 1, why: "Mipaka inaweka kikomo ili uweze kumaliza." },
      { objective: "O2", q: "Dhana ni:", options: ["Fomu ya kodi", "Ukweli uliothibitishwa", "Kitu unachoamini lakini hujakikagua", "Aina ya AI"], answer: 2, why: "Kuthibitisha kunakagua dhana." },
      { objective: "O2", q: "Wakati wa mahojiano unapaswa kuandika:", options: ["Maneno halisi ya watu", "Tu kile ulichotarajia kusikia", "Namba za kadi zao", "Hakuna"], answer: 0, why: "Maneno halisi yanakufanya uwe mkweli." },
      { objective: "O2", q: "Dhana ikionekana si sahihi, unapaswa:", options: ["Kuificha", "Kuipuuza", "Kubadilisha mipaka au usanifu wako", "Kuwauliza watu wengine hadi mtu akubali"], answer: 2, why: "Kuthibitisha kuna manufaa tu ukitenda kulingana nako." },
      { objective: "O3", q: "Unaweza kupata wapi sehemu za kawaida za mpango wa biashara?", options: ["Ukurasa wa SBA kuhusu mpango wa biashara", "Chapisho lolote la mitandao ya kijamii", "Mshindani", "Sanduku lako la barua pepe"], answer: 0, why: "SBA inaorodhesha sehemu za mpango wa kawaida na mpango mfupi." },
      { objective: "O3", q: "Mradi wa mfumo wa otomatiki unajumuisha:", options: ["Nembo tu", "Ramani ya mtiririko wa kazi, kichocheo na vitendo, hatua ya AI, vizuizi, majaribio", "Bei tu", "Wasilisho tu"], answer: 1, why: "Sehemu hizi zinatengeneza otomatiki inayofanya kazi na iliyo salama." },
      { objective: "O3", q: "Mradi wa mkakati wa masoko unajumuisha:", options: ["Taarifa ya benki tu", "SOP tu", "Kumbukumbu ya muda tu", "Mteja bora, ofa, njia, kalenda na mpango wa barua pepe"], answer: 3, why: "Hizi ndizo sehemu za mkakati wa masoko." },
      { objective: "O4", q: "Unapojenga, njia bora ni:", options: ["Sehemu moja kwa wakati, AI inaandika rasimu, wewe unakagua", "Yote kwa mara moja bila ukaguzi", "Kunakili mradi mwingine", "Kuiacha AI iuchapishe"], answer: 0, why: "Hatua ndogo zenye ukaguzi zinadumisha ubora." },
      { objective: "O4", q: "Kumbukumbu ya ujenzi inarekodi:", options: ["Hakuna chenye manufaa", "Nywila zako", "Anwani za wateja wako", "Ulichotengeneza, zana gani, na ulichobadilisha"], answer: 3, why: "Inaonyesha mchakato wako na inakusaidia kuboresha." },
      { objective: "O4", q: "Ushughulikie vipi majina ya wateja katika prompt za AI?", options: ["Kuongeza namba za kadi", "Kuyaandika pamoja na namba za simu", "Kutumia vishika-nafasi kama [jina la mteja]", "Kuyachapisha hadharani"], answer: 2, why: "Vishika-nafasi vinazuia taarifa binafsi zisiingie." },
      { objective: "O5", q: "Kurudisha gharama (payback) ni:", options: ["Pesa inayorudishwa kwa mteja", "Muda hadi mapato au akiba vifidie gharama", "Ada", "Mkopo"], answer: 1, why: "Kunaonyesha lini mradi unajilipia." },
      { objective: "O5", q: "Kipi kinafaa katika orodha yako ya kukagua hatari?", options: ["Je, nembo yangu ni ya mviringo?", "Rangi yangu ninayoipenda ni ipi?", "Nina apps ngapi?", "Je, madai yote ya masoko ni ya kweli na yanathibitishika?"], answer: 3, why: "Sheria za FTC zinataka madai ya kweli." },
      { objective: "O5", q: "Watu wanaojiajiri kwa ujumla hulipa:", options: ["Kodi ya mauzo tu", "Hakuna kodi", "Kodi ya kujiajiri pamoja na kodi ya mapato", "Kodi ya mali tu"], answer: 2, why: "IRS inasema hivyo katika kituo chake cha kodi cha watu wanaojiajiri." },
      { objective: "O5", q: "Kwa maswali ya kisheria katika mradi wako, unapaswa:", options: ["Kuzungumza na wakili", "Kuamini jibu lolote la AI", "Kuyaruka", "Kunakili mshindani"], answer: 0, why: "Wakili anaweza kukushauri kuhusu hali yako." },
      { objective: "O6", q: "Unapojaribu mradi uliokamilika, waulize watu:", options: ["Utanipa nyota tano?", "Nini kiko wazi, nini kinachanganya, ungebadilisha nini?", "Nywila yako ni ipi?", "Naweza kupata namba ya kadi yako?"], answer: 1, why: "Maswali haya yanapata maboresho halisi." },
      { objective: "O6", q: "Ushahidi katika wasilisho lako maana yake ni:", options: ["Ahadi", "Uthibitisho kama matokeo ya majaribio na watu walichosema", "Nembo", "Orodha ndefu ya vipengele"], answer: 1, why: "Uthibitisho unafanya wasilisho liaminike." },
      { objective: "O6", q: "Kifurushi cha mwisho cha mradi kinajumuisha:", options: ["Muhtasari, mradi mzima, maelezo ya uthibitisho, namba na hatari, matokeo ya majaribio, wasilisho", "Ukurasa wa kichwa tu", "Historia ya mazungumzo na AI tu", "Nembo tu"], answer: 0, why: "Kwa pamoja hivi vinaonyesha mradi kamili uliokaguliwa." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      3,
      4,
      5,
      7,
      10,
      13,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Muhtasari na mipaka",
        objective: "O1",
        notYet: "Biashara, mteja, tatizo au suluhisho halipo, au mipaka ni mikubwa mno kumalizika.",
        meets: "Muhtasari wa ukurasa mmoja wenye biashara, mteja, tatizo na suluhisho, na mipaka iliyo wazi.",
        exceeds: "Anaeleza kwa nini aina hii ya mradi ilichaguliwa kwa biashara hii."
      },
      {
        name: "Uthibitisho",
        objective: "O2",
        notYet: "Chini ya watu watatu, au maswali yanayoelekeza jibu.",
        meets: "Maelezo kutoka kwa watu watatu au zaidi yenye maneno yao halisi na kila dhana ikiwa na alama.",
        exceeds: "Anaonyesha kilichobadilika katika mradi kwa sababu ya watu walichosema."
      },
      {
        name: "Mradi mzima",
        objective: "O4",
        notYet: "Sehemu zinakosekana au maandishi ya AI yasiyokaguliwa yamebaki.",
        meets: "Kila sehemu ya aina ya mradi, imejengwa kwa AI na kukaguliwa, pamoja na kumbukumbu ya ujenzi.",
        exceeds: "Mradi tayari unatumika au uko tayari kuzinduliwa."
      },
      {
        name: "Namba na hatari",
        objective: "O5",
        notYet: "Fomula hazijakaguliwa au hakuna orodha ya kukagua hatari.",
        meets: "Jedwali la namba lenye fomula zilizokaguliwa na kurudisha gharama, pamoja na orodha ya kukagua hatari.",
        exceeds: "Mambo ya kodi na sheria yamethibitishwa na vyanzo rasmi au mtaalamu."
      },
      {
        name: "Majaribio na wasilisho",
        objective: "O6",
        notYet: "Haujajaribiwa, au wasilisho ni refu mno au halina ushahidi.",
        meets: "Umejaribiwa kwa watu watatu, mabadiliko muhimu zaidi yamefanywa, wasilisho la dakika tatu lenye tatizo, suluhisho, ushahidi na hatua inayofuata.",
        exceeds: "Aliwasilisha kwa sauti mbele ya hadhira halisi na akajibu maswali magumu."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza mradi wa mwisho na kufaulu kazi ya mwisho (kwa rubriki)",
      "Miradi iliyozinduliwa au inayotumika ndani ya siku 60 (utafiti wa kufuatilia)",
      "Wanafunzi wanaowasilisha mradi wao kwa mshirika, mkopeshaji, mfadhili au mteja",
      "Mapato, muda uliookolewa au wateja wapya ambao wanafunzi wanauhusisha na mradi"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye msaidizi wa AI wa bure, spredishiti na zana ya kuandika hati",
      "Uwezo wa kuwafikia angalau watu watatu halisi kwa mahojiano na majaribio",
      "Nyenzo kutoka kozi za awali za Wajasiriamali zinazolingana na mradi",
      "Kama dakika 60 za masomo na majaribio, pamoja na saa kadhaa za kazi ya mradi katika wiki mbili hadi nne"
    ],
    facilitatorNotes: [
      "Fanyeni mkutano mfupi wa kufuatilia baada ya kila hatua ili wanafunzi wasibaki nyuma katika kazi ya mradi.",
      "Idhinisha mipaka ya kila mwanafunzi kabla hawajaanza kuthibitisha, na wasukume waweke mipaka midogo zaidi.",
      "Wakumbushe wanafunzi kutumia vishika-nafasi kwa taarifa za wateja na kuthibitisha mambo ya kodi, leseni na sheria kwa njia rasmi.",
      "Malizeni kwa siku ya maonyesho ambapo kila mwanafunzi anatoa wasilisho lake la dakika tatu.",
      "Pima kifurushi cha mradi kwa rubriki, mstari mmoja wa Bado kwa wakati."
    ]
  }
};

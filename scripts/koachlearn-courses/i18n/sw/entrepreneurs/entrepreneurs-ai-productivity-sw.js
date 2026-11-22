"use strict";

// Koach Learn course (Swahili translation of entrepreneurs/entrepreneurs-ai-productivity.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "entrepreneurs-ai-productivity-sw",
  lang: "sw",
  translationOf: "entrepreneurs-ai-productivity",
  category: "Entrepreneurs",
  name: "AI kwa Tija ya Biashara",
  skills: "Kupanga wiki kwa msaada wa AI, Kumaliza barua pepe haraka zaidi, Kuandika violezo vya kutumia tena, Kutengeneza utaratibu wa kawaida wa kazi, Kupima muda uliookoa",
  outcome: "kutumia AI kupanga wiki yako ya biashara, kushughulikia barua pepe haraka zaidi kwa violezo vya majibu vya kutumia tena, kugeuza kazi moja unayoirudia kuwa utaratibu ulioandikwa hatua kwa hatua, na kupima muda kiasi gani umeokoa.",
  about: [
    "Wafanyabiashara wengi hawakosi mawazo; wanakosa saa. Kozi hii ni kwa wamiliki wanaofanya kila kitu wenyewe na wanataka kurudishiwa muda wao.",
    "Utatumia msaidizi wa AI wa bure kupanga wiki yako kwa vipaumbele, kupanga na kujibu barua pepe haraka zaidi, kutengeneza violezo vya ujumbe unaouandika mara kwa mara, na kuandika utaratibu rahisi ili msaidizi wako (au wewe mwenyewe baadaye) afanye kazi kwa njia ileile kila mara. Kisha utapima muda uliookoa.",
    "Kila somo linachukua kama dakika tano, na lina kazi unayoifanya kwenye biashara yako halisi. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza \"kifurushi cha kurudisha muda\" kwa biashara yako: wiki moja iliyopangwa kwa AI yenye vipaumbele vyako vitatu vya juu, violezo vitatu vya majibu vya kutumia tena, utaratibu mmoja ulioandikwa kwa kazi unayoirudia, na kumbukumbu rahisi ya muda kabla na baada inayoonyesha dakika ulizookoa kwenye kazi moja.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wamiliki wa biashara ndogo wanaofanya kazi nyingi wenyewe na hawana muda wa kutosha, kama watoa huduma wanaojitegemea, wenye maduka na wenye biashara za pembeni.",
    startingPoint: "Wana orodha ya mambo ya kufanya, wanajibu barua pepe na wanafanya kazi zilezile kila wiki, mara nyingi kwa kukumbuka tu. Baadhi wamewahi kutumia msaidizi wa AI kuandika, lakini si kupanga, kutengeneza violezo au kuandika jinsi kazi zao zinavyofanywa.",
    gap: "Wamiliki wanapoteza saa kwa wiki zisizopangwa, barua pepe zinazochukua muda na ujumbe unaorudiwa, na kila kazi inategemea wao kukumbuka jinsi inavyofanywa. Wanahitaji kupanga kwa vipaumbele, kutumia violezo tena, kuandika taratibu na kupima kama AI kweli inaokoa muda, ili saa zinazopatikana zitumike kukuza biashara.",
    constraints: [
      "Maneno rahisi; hakuna haja ya ujuzi wa teknolojia",
      "Vifaa: simu au kompyuta yenye barua pepe, kalenda na msaidizi wa AI wa bure",
      "Muda: kama dakika tano kwa kila somo, pamoja na kazi zinazofanywa wakati wa wiki halisi ya kazi",
      "Hakuna anwani za wateja, namba za kadi wala maelezo ya siri ya mikataba yanayowekwa ndani ya AI",
      "Maswali ya sheria, leseni na pesa yanapelekwa kwa ofisi rasmi ya serikali au kwa mtaalamu"
    ],
    prerequisites: "Kozi \"Utangulizi wa AI kwa Wajasiriamali\", au uzoefu kidogo wa kuomba msaada kwa msaidizi wa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa orodha iliyochanganyika ya kazi za wiki ijayo", action: "kutumia AI kuzipanga katika makundi na kutengeneza mpango wa wiki wenye vipindi vya muda pamoja na vipaumbele vyako vitatu vya juu", standard: "mpango ukiwa umeingizwa kwenye kalenda yako" },
    { id: "O2", condition: "Ukipewa barua pepe za leo", action: "kupanga barua pepe katika makundi na kutuma majibu yaliyoandikwa na AI ambayo umeyakagua kwanza", standard: "bila kuweka maelezo ya siri ya mteja ndani ya AI" },
    { id: "O3", condition: "Ukipewa maswali matatu ambayo wateja wako huuliza zaidi", action: "kutengeneza kiolezo cha jibu cha kutumia tena kwa kila swali, chenye nafasi za kujaza", standard: "ukweli wako halisi ukiwa umekaguliwa na violezo vimehifadhiwa mahali unapoweza kuvifikia" },
    { id: "O4", condition: "Ukipewa kazi unayoirudia kila wiki", action: "kuandika utaratibu wa hatua kwa hatua wenye namba na orodha ya kukagua", standard: "ukiwa umeujaribu mara moja kwa kuufuata neno kwa neno na kuurekebisha" },
    { id: "O5", condition: "Ukipewa hati ndefu ya biashara iliyoondolewa maelezo ya siri", action: "kupata muhtasari wa AI wa tarehe, ada na majukumu na kuulinganisha na hati asili", standard: "ukisoma sehemu za pesa na za kisheria wewe mwenyewe" },
    { id: "O6", condition: "Kwa kazi moja unayoifanya kila wiki", action: "kuandika muda wako kabla na baada ya kutumia AI na kuhesabu dakika unazookoa kila wiki", standard: "ukihesabu pia muda wa kukagua na kurekebisha kazi ya AI" }
  ],
  chapters: [
    {
      name: "Sura 1: Panga na wasiliana haraka zaidi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kupanga wiki yako kwa vipaumbele",
          minutes: 5,
          goal: "Tumia AI kugeuza orodha iliyochanganyika ya mambo ya kufanya kuwa mpango wa wiki wenye vipaumbele vitatu.",
          text: [
            "Orodha ndefu ya mambo ya kufanya inaficha yaliyo muhimu. AI ni hodari wa kupanga. Bandika orodha yako (bila maelezo ya siri ya wateja) na uiombe ipange kazi katika makundi na ipendekeze kazi tatu zitakazosaidia biashara yako zaidi wiki hii.",
            "Njia rahisi ya kuamua: kazi zinazoleta pesa au zinazowafurahisha wateja kwa kawaida huja kwanza; kazi zinazoweza kusubiri au kupewa mtu mwingine huja baadaye. Wewe ndiye unayeamua mpangilio wa mwisho, kwa sababu unaijua biashara yako.",
            "Kisha omba mpango wenye vipindi vya muda: \"Weka kazi hizi katika wiki yangu. Ninafanya kazi saa 8 asubuhi hadi saa 4 jioni (8 am hadi 4 pm), Jumatatu hadi Ijumaa, na ninapeleka mizigo Jumanne na Alhamisi asubuhi.\" Weka mpango huo kwenye kalenda yako."
          ],
          steps: ["Andika kila kazi iliyo kichwani mwako kama orodha.", "Omba AI ipange kazi katika makundi na ipendekeze tatu za juu za wiki.", "Chagua tatu zako mwenyewe za juu.", "Omba AI iweke kazi katika vipindi vya muda kuzunguka saa zako zisizobadilika.", "Nakili vipindi hivyo kwenye kalenda yako."],
          words: [["Kipaumbele", "kazi iliyo muhimu zaidi sasa hivi."], ["Kipindi cha muda", "muda maalum kwenye kalenda yako kwa aina moja ya kazi (kwa Kiingereza: time block)."]],
          slides: [
            { title: "Orodha ndefu zinaficha yaliyo muhimu", bullets: ["Bandika orodha yako kwenye AI (bila maelezo ya siri)", "Iombe ipange kazi katika makundi", "Omba kazi tatu za juu za wiki hii"] },
            { title: "Kinachokuja kwanza kwa kawaida", bullets: ["Kazi zinazoleta pesa", "Kazi zinazowafurahisha wateja", "Wewe unaamua mpangilio wa mwisho"] },
            { title: "Weka vipindi vya muda", bullets: ["Iambie AI saa zako na kazi zisizobadilika", "Pata mpango wa wiki", "Uweke kwenye kalenda yako"] }
          ],
          tryIt: "Andika orodha kamili ya kazi zako za wiki ijayo, omba msaidizi wa AI aipange katika makundi na apendekeze tatu za juu, chagua tatu zako mwenyewe, na upate mpango wenye vipindi vya muda unaouweka kwenye kalenda yako.",
          youCanNow: "kugeuza orodha iliyochanganyika kuwa mpango wa wiki wenye vipaumbele wazi na vipindi vya muda.",
          quickCheck: [
            { objective: "O1", q: "Kipindi cha muda ni nini?", options: ["Muda maalum kwenye kalenda yako kwa aina moja ya kazi", "Orodha ya kila kazi", "Mapumziko kati ya mikutano", "Tarehe ya mwisho kutoka kwa mteja"], answer: 0, why: "Vipindi vya muda vinalinda muda wa vipaumbele vyako." },
            { objective: "O1", q: "AI inapendekeza kazi zako tatu za juu, lakini moja ni kazi ndogo isiyo na thamani kubwa. Unafanya nini?", options: ["Unakubali orodha ya AI", "Unachagua tatu zako mwenyewe za juu", "Unafanya kazi zote kwa wakati mmoja", "Huipangi wiki hii"], answer: 1, why: "Wewe unaamua vipaumbele vya mwisho; AI inapendekeza tu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kumaliza barua pepe zako haraka zaidi",
          minutes: 5,
          goal: "Tumia AI kupanga barua pepe na kuandika rasimu za majibu unazokagua kabla ya kutuma.",
          text: [
            "Barua pepe zinakula saa nyingi. Zipange kwanza: jibu sasa (wateja, pesa, mambo ya haraka), jibu baadaye, soma tu, na futa au jiondoe (unsubscribe). Apps nyingi za barua pepe pia zinaweza kuhamisha ujumbe wenyewe kwenda kwenye folda au lebo.",
            "Kwa majibu, AI inaweza kugeuza maelezo yako mafupi kuwa ujumbe wa adabu: \"Mjibu mteja anayeomba kuhamisha miadi yake ya Ijumaa. Sema ndiyo, toa Jumamosi saa 4 asubuhi (10 am) au Jumatatu saa 8 mchana (2 pm), na uifanye fupi na ya kirafiki.\" Gmail na Outlook pia zinaweza kutoa mapendekezo ya AI yaliyojengwa ndani, kutegemea mpango wako.",
            "Kamwe usibandike barua pepe nzima ya mteja yenye namba yake ya simu, anwani au maelezo ya kadi kwenye zana ya mazungumzo. Badala yake, eleza swali lake kwa maneno yako mwenyewe. Na daima soma jibu kabla ya kulituma."
          ],
          steps: ["Panga barua pepe zako katika: jibu sasa, jibu baadaye, soma tu, futa.", "Kwa kila barua pepe ya jibu sasa, andika sentensi moja ya unachotaka kusema.", "Omba AI igeuze maelezo hayo kuwa jibu fupi.", "Lisome, lirekebishe na ulitume wewe mwenyewe."],
          words: [["Kichujio (filter)", "kanuni ya barua pepe inayohamisha ujumbe kwenda kwenye folda au lebo yenyewe."], ["Jiondoe (unsubscribe)", "kiungo kinachozuia kampuni kuendelea kukutumia barua pepe."]],
          slides: [
            { title: "Panga kwanza", bullets: ["Jibu sasa: wateja, pesa, mambo ya haraka", "Jibu baadaye", "Soma tu, au futa na ujiondoe"] },
            { title: "AI inageuza maelezo kuwa majibu", bullets: ["Andika unachotaka kusema kwa sentensi moja", "Omba jibu fupi la kirafiki", "AI iliyojengwa ndani inaweza kusaidia katika Gmail au Outlook"] },
            { title: "Kaa salama", bullets: ["Eleza swali la mteja wewe mwenyewe", "Hakuna namba za simu, anwani wala maelezo ya kadi", "Soma kabla ya kutuma"] }
          ],
          tryIt: "Panga barua pepe za leo katika makundi manne. Kwa barua pepe mbili za jibu sasa, andika maelezo ya sentensi moja, acha AI iandike rasimu ya jibu, likague na ulitume. Pima muda ulioutumia.",
          youCanNow: "kupanga barua pepe kwa umuhimu na kutuma majibu yaliyokaguliwa haraka zaidi kwa msaada wa AI.",
          quickCheck: [
            { objective: "O2", q: "Barua pepe zipi ni za kundi la jibu sasa?", options: ["Majarida", "Risiti za zamani", "Wateja, pesa na mambo ya haraka", "Matangazo kutoka biashara nyingine"], answer: 2, why: "Barua pepe za jibu sasa zinagusa wateja na pesa." },
            { objective: "O2", q: "AI inaandika rasimu ya jibu kwa mteja. Unafanya nini kabla ya kutuma?", options: ["Unalituma bila kulisoma", "Unaongeza namba ya kadi ya mteja", "Unalipeleka tena kwa AI", "Unalisoma na kurekebisha kosa lolote"], answer: 3, why: "Unakagua kila rasimu ya AI kabla haijatoka kwa jina lako." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Violezo vya kutumia tena kwa ujumbe unaouandika mara kwa mara",
          minutes: 4,
          goal: "Tengeneza violezo vitatu vya majibu kwa maswali ambayo wateja huuliza zaidi.",
          text: [
            "Ukijibu swali lilelile kila wiki (bei, saa za kazi, jinsi ya kuweka miadi, sera ya kurudisha pesa), andika jibu mara moja na ulitumie tena. AI inaweza kukusaidia kuandika kiolezo kilicho wazi na cha kirafiki.",
            "Kiolezo kizuri kina nafasi unazojaza: \"Habari [jina], asante kwa kuuliza kuhusu [huduma]. Bei yetu kwa [ukubwa] ni [bei]. Unaweza kuweka miadi kupitia [kiungo au namba].\" Weka ukweli wako halisi ndani ya kiolezo, na uukague kila bei au sera zinapobadilika.",
            "Hifadhi violezo mahali unapoweza kuvichukua haraka: hati, app ya maandishi kwenye simu yako, au kipengele cha majibu yaliyohifadhiwa ambacho apps nyingi za barua pepe na za ujumbe wa biashara zinacho."
          ],
          steps: ["Orodhesha maswali matano ambayo wateja huuliza zaidi.", "Chagua matatu ya juu.", "Omba AI kiolezo kifupi cha kirafiki kwa kila moja chenye [nafasi].", "Jaza ukweli wako halisi na uukague.", "Hifadhi violezo mahali unapoweza kuvifikia haraka."],
          words: [["Kiolezo", "ujumbe ulioandaliwa tayari wenye nafasi unazojaza kila mara (kwa Kiingereza: template)."], ["Jibu lililohifadhiwa", "kipengele cha barua pepe au ujumbe kinachohifadhi kiolezo ili ukitumie kwa kubofya mara moja."]],
          slides: [
            { title: "Andika mara moja, tumia tena", bullets: ["Bei, saa za kazi, miadi, kurudisha pesa", "AI inakusaidia kuandika kwa uwazi"] },
            { title: "Kiolezo kizuri", bullets: ["Cha kirafiki na kifupi", "[Nafasi] za jina, huduma, bei", "Ukweli wako halisi, umekaguliwa"] },
            { title: "Viweke karibu", bullets: ["Hati au app ya maandishi", "Majibu yaliyohifadhiwa katika apps za barua pepe au ujumbe", "Visasishe bei zinapobadilika"] }
          ],
          tryIt: "Andika maswali matatu ambayo wateja wako huuliza zaidi na utumie AI kutengeneza kiolezo kwa kila moja. Jaza ukweli wako halisi na uvihifadhi.",
          youCanNow: "kuandika na kutumia tena violezo kwa maswali ya wateja unayoyajibu zaidi.",
          quickCheck: [
            { objective: "O3", q: "Nafasi kama [jina] ndani ya kiolezo ni za nini?", options: ["Maelezo unayojaza kila mara", "Maneno ambayo AI haipaswi kusoma", "Makosa ya kufuta", "Viungo vilivyofichwa"], answer: 0, why: "Nafasi zinakuwezesha kutumia kiolezo kimoja kwa wateja wengi." },
            { objective: "O3", q: "Umebadilisha saa zako za kufungua. Unafanya nini na violezo vyako?", options: ["Hakuna kitu", "Unasasisha na kukagua tena kila kiolezo kinachotaja saa", "Unavifuta vyote", "Unasubiri mteja alalamike"], answer: 1, why: "Violezo lazima viendane na ukweli wako wa sasa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Panga na wasiliana haraka zaidi",
        questions: [
          { objective: "O1", q: "Kazi zipi kwa kawaida zinastahili kuwa katika tatu zako za juu za wiki?", options: ["Zile zinazofurahisha", "Zile zinazoleta pesa au zinazowafurahisha wateja", "Zile zinazochukua sekunde 30", "Zile ambazo mtu mwingine aliomba"], answer: 1, why: "Kazi za pesa na za wateja zinaifanya biashara iendelee." },
          { objective: "O1", q: "Unapaswa kuiambia AI nini ili upate mpango mzuri wenye vipindi vya muda?", options: ["Hakuna kitu", "Salio lako la benki", "Nywila yako", "Saa zako za kazi na kazi zisizobadilika"], answer: 3, why: "AI inahitaji saa zako na ahadi zisizobadilika ili kupanga kazi." },
          { objective: "O2", q: "Barua pepe ya mteja ina anwani ya nyumbani kwake na namba ya kadi yake. Unapataje msaada wa AI kumjibu?", options: ["Unaeleza swali lake kwa maneno yako mwenyewe", "Unabandika barua pepe nzima", "Unaipeleka kwa kampuni ya AI", "Unampuuza mteja"], answer: 0, why: "Kueleza kwa ufupi kunazuia maelezo ya siri yasiingie kwenye zana ya AI." },
          { objective: "O3", q: "Kipi ni kiolezo kizuri?", options: ["\"Tazama tovuti\"", "Ujumbe mpya tofauti kila mara", "\"Habari [jina], bei yetu kwa [huduma] ni [bei]. Weka miadi kupitia [kiungo].\"", "Ujumbe wenye namba ya kadi ya mteja"], answer: 2, why: "Kina nafasi unazojaza kwa ukweli halisi." },
          { objective: "O3", q: "Bei zako zimepanda. Lazima ufanye nini na violezo vyako?", options: ["Uvifute vyote", "Hakuna kitu", "Uvisasishe na uvikague tena", "Uiache AI ikisie bei mpya"], answer: 2, why: "Violezo lazima viendane na ukweli wako wa sasa." }
        ]
      }
    },
    {
      name: "Sura 2: Mifumo inayookoa muda",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuandika utaratibu wa kawaida wa kazi",
          minutes: 5,
          goal: "Geuza kazi moja unayoirudia kuwa utaratibu ulioandikwa hatua kwa hatua kwa msaada wa AI.",
          text: [
            "Utaratibu wa kawaida wa kazi (kwa Kiingereza: standard operating procedure, SOP) ni orodha iliyoandikwa ya hatua za kufanya kazi kwa njia ileile kila mara. Inamwezesha msaidizi wako kufanya kazi bila kukupigia simu, na inazuia makosa unapokuwa na shughuli nyingi.",
            "Njia rahisi ya kuutengeneza: fanya kazi mara moja huku ukisema au ukiandika kila hatua kama maelezo ya haraka. Kisha iombe AI: \"Geuza maelezo haya kuwa utaratibu wazi wenye namba ambao msaidizi mpya anaweza kuufuata. Ongeza orodha fupi ya kukagua mwishoni.\"",
            "Jaribu SOP: mpe mtu (au uifuate wewe mwenyewe, neno kwa neno) na urekebishe hatua yoyote iliyochanganya au iliyokosekana."
          ],
          steps: ["Chagua kazi unayoirudia kila wiki, kama kufungua duka au kufunga oda ya mteja.", "Ifanye mara moja huku ukiandika maelezo ya haraka ya kila hatua.", "Omba AI igeuze maelezo kuwa utaratibu wenye namba na orodha ya kukagua.", "Ujaribu kwa kuufuata hasa kama ulivyo, au mwombe msaidizi ajaribu.", "Rekebisha hatua zisizo wazi na uhifadhi toleo la mwisho."],
          words: [["SOP", "utaratibu wa kawaida wa kazi (standard operating procedure): hatua zilizoandikwa za kufanya kazi kwa njia ileile kila mara."], ["Orodha ya kukagua", "orodha fupi unayoweka alama ili kuhakikisha hakuna kilichosahauliwa (kwa Kiingereza: checklist)."]],
          slides: [
            { title: "SOP inafanya nini", bullets: ["Kazi ileile, kwa njia ileile, kila mara", "Msaidizi anaweza kuifanya bila kukupigia simu", "Makosa machache unapokuwa na shughuli nyingi"] },
            { title: "Itengeneze kwa AI", bullets: ["Fanya kazi mara moja na uandike maelezo ya haraka", "Omba AI hatua zenye namba na orodha ya kukagua"] },
            { title: "Ijaribu", bullets: ["Ifuate neno kwa neno", "Au mwombe msaidizi aijaribu", "Rekebisha hatua zinazochanganya au zilizokosekana"] }
          ],
          tryIt: "Chagua kazi moja ya kila wiki, andika maelezo ya haraka unapoifanya, na uiache AI iyageuze kuwa SOP yenye namba na orodha ya kukagua. Ijaribu mara moja na uirekebishe.",
          youCanNow: "kugeuza kazi unayoirudia kuwa utaratibu ulioandikwa na kujaribiwa.",
          quickCheck: [
            { objective: "O4", q: "Utaratibu wa kawaida wa kazi (SOP) unafanya nini?", options: ["Unafuatilia mauzo yako", "Unachukua nafasi ya kalenda yako", "Unaandika hatua za kazi inayorudiwa ili yeyote aifanye kwa njia ileile", "Unajibu barua pepe za wateja"], answer: 2, why: "SOP inamwezesha msaidizi kufanya kazi bila kukupigia simu." },
            { objective: "O4", q: "Msaidizi wako anafuata SOP yako mpya na anakwama kwenye hatua ya 4. Unafanya nini?", options: ["Unamlaumu msaidizi", "Unaitupa SOP", "Unafanya kazi hiyo wewe mwenyewe milele", "Unarekebisha hatua ya 4 iwe wazi na unajaribu tena"], answer: 3, why: "Kujaribu kunaonyesha mahali utaratibu unahitaji kurekebishwa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Muhtasari na utafiti wa haraka",
          minutes: 4,
          goal: "Tumia AI kufupisha hati ndefu na kufanya utafiti wa haraka uliokaguliwa.",
          text: [
            "Wamiliki wa biashara hupokea hati ndefu: masharti ya wasambazaji, kanuni za ruzuku, rasimu za mikataba ya kukodisha, ripoti. AI inaweza kuzifupisha: \"Fupisha hii kwa vipengele 8. Orodhesha tarehe, ada au mambo yoyote ninayopaswa kufanya.\" Ondoa maelezo ya siri kwanza, na usome sehemu za hati asili zilizo muhimu, hasa chochote kuhusu pesa au majukumu ya kisheria.",
            "AI pia inaweza kuharakisha utafiti: kulinganisha wasambazaji, kueleza neno jipya, au kuorodhesha maswali ya kumuuliza mhasibu. Iombe vyanzo, kisha fungua vyanzo hivyo wewe mwenyewe.",
            "Kwa maswali ya sheria, kodi au leseni, tumia AI kuandaa maswali mazuri, kisha upate jibu kutoka tovuti ya ofisi rasmi ya serikali au kwa mtaalamu."
          ],
          steps: ["Ondoa maelezo ya siri kwenye hati.", "Omba muhtasari mfupi pamoja na tarehe, ada na majukumu.", "Soma sehemu za hati asili kuhusu pesa au majukumu ya kisheria.", "Kwa utafiti, omba vyanzo na uvifungue wewe mwenyewe."],
          words: [["Muhtasari", "toleo fupi linalobaki na mambo makuu."], ["Masharti", "kanuni na masharti yaliyomo katika makubaliano."]],
          slides: [
            { title: "Fupisha hati ndefu", bullets: ["Ondoa maelezo ya siri kwanza", "Omba vipengele, tarehe, ada na majukumu", "Soma sehemu za pesa na za kisheria wewe mwenyewe"] },
            { title: "Utafiti wa haraka", bullets: ["Linganisha machaguo, eleza maneno", "Omba vyanzo", "Fungua vyanzo wewe mwenyewe"] },
            { title: "Sheria, kodi, leseni", bullets: ["Tumia AI kuandaa maswali", "Pata majibu kutoka ofisi rasmi au kwa mtaalamu"] }
          ],
          tryIt: "Chukua hati ndefu ya biashara uliyonayo (iliyoondolewa maelezo ya siri), omba AI muhtasari wa vipengele 8 wenye tarehe, ada na majukumu, na uulinganishe na hati asili.",
          youCanNow: "kupata muhtasari wa haraka uliokaguliwa wa hati ndefu ya biashara.",
          quickCheck: [
            { objective: "O5", q: "Ombi zuri la muhtasari linapaswa kuomba nini?", options: ["Mambo makuu pamoja na tarehe, ada na majukumu", "Kichwa tu", "Shairi kuhusu hati", "Sentensi ndefu kuliko zote"], answer: 0, why: "Tarehe, ada na majukumu ndiyo mambo ambayo mmiliki lazima ayafanyie kazi." },
            { objective: "O5", q: "AI inafupisha mkataba wako wa kukodisha na kusema hakuna ada ya kuchelewa. Unafanya nini?", options: ["Unaiamini", "Unakagua sehemu ya pesa ya mkataba wewe mwenyewe", "Unasaini mkataba mpya", "Unaiuliza AI swali lilelile tena"], answer: 1, why: "Unasoma sehemu za pesa na za kisheria wewe mwenyewe." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kupima muda unaouokoa",
          minutes: 5,
          goal: "Andika muda wako kabla na baada ya kutumia AI kwenye kazi moja ili uone kama kweli inasaidia.",
          text: [
            "AI inapaswa kukuokolea muda, si kukufanya ujione tu una shughuli nyingi. Upime. Chagua kazi moja, kama kujibu maswali ya miadi au kuandika chapisho la kila wiki. Andika inachukua muda gani kwa njia ya zamani, kisha inachukua muda gani kwa AI, ukijumuisha muda wa kukagua na kurekebisha.",
            "Zidisha: dakika zilizookolewa kila mara, mara idadi ya mara kwa wiki. Dakika kumi zilizookolewa kwenye kazi unayoifanya mara 15 kwa wiki ni dakika 150, yaani saa mbili na nusu.",
            "Kama kazi haiwi ya haraka zaidi kwa AI, au inahitaji kurekebishwa sana kiasi kwamba haifai, acha kutumia AI kwa kazi hiyo. Weka muda uliookolewa kwenye kazi zinazokuza biashara yako."
          ],
          steps: ["Chagua kazi moja unayoifanya mara nyingi.", "Ipime kwa njia ya zamani mara moja.", "Ipime kwa AI, ukijumuisha kukagua na kurekebisha.", "Zidisha dakika zilizookolewa kwa idadi ya mara unazoifanya kila wiki.", "Endelea, badilisha au acha kutumia AI kwa kazi hiyo."],
          words: [["Kumbukumbu ya muda", "rekodi rahisi ya muda ambao kazi zinachukua (kwa Kiingereza: time log)."]],
          slides: [
            { title: "Pima, usikisie", bullets: ["Pima njia ya zamani", "Pima njia ya AI, ukijumuisha kukagua", "Linganisha"] },
            { title: "Fanya hesabu", bullets: ["Dakika zilizookolewa x mara kwa wiki", "Dakika 10 x mara 15 = dakika 150 kwa wiki"] },
            { title: "Amua", bullets: ["Ni haraka zaidi? Endelea nayo", "Ni polepole au marekebisho mengi mno? Iache", "Tumia muda uliookolewa kukuza biashara"] }
          ],
          tryIt: "Kazi ya mwisho: tengeneza kifurushi chako cha kurudisha muda: wiki yako iliyopangwa kwa AI, violezo vyako vitatu, SOP yako, na kumbukumbu ya muda kabla na baada kwa kazi moja yenye dakika zilizookolewa kila wiki.",
          youCanNow: "kuthibitisha kama AI inakuokolea muda na kuamua mahali pa kuitumia katika biashara yako.",
          quickCheck: [
            { objective: "O6", q: "Muda wako wa \"njia ya AI\" unapaswa kujumuisha nini?", options: ["Muda ambao AI ilitumia kuandika tu", "Hakuna; AI ni ya papo hapo", "Pia muda wa kukagua na kurekebisha kazi ya AI", "Muda uliotumia kula chakula cha mchana"], answer: 2, why: "Kukagua na kurekebisha ni sehemu ya gharama halisi ya muda." },
            { objective: "O6", q: "Unaokoa dakika 4 kwenye kazi unayoifanya mara 10 kwa wiki. Unaandika nini kwenye kumbukumbu yako?", options: ["Dakika 4 kwa wiki", "Dakika 10 kwa wiki", "Dakika 14 kwa wiki", "Dakika 40 kwa wiki"], answer: 3, why: "Dakika 4 mara 10 kwa wiki ni dakika 40." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Mifumo inayookoa muda",
        questions: [
          { objective: "O4", q: "SOP ni nini?", options: ["Utaratibu ulioandikwa hatua kwa hatua kwa kazi inayorudiwa", "Aina ya ankara", "Chapisho la mitandao ya kijamii", "Fomu ya kodi"], answer: 0, why: "SOP inawezesha kazi kufanywa kwa njia ileile kila mara." },
          { objective: "O4", q: "Unajuaje kwamba SOP yako inafanya kazi?", options: ["Unaiuliza AI kama ni nzuri", "Unaichapisha kwa rangi", "Unairefusha", "Unaifuata neno kwa neno au unamwomba msaidizi aijaribu"], answer: 3, why: "Kujaribu kunaonyesha hatua zilizokosekana au zinazochanganya." },
          { objective: "O5", q: "AI ilifupisha mkataba wa kukodisha. Sehemu zipi bado lazima uzisome wewe mwenyewe?", options: ["Hakuna", "Sehemu za pesa na majukumu ya kisheria", "Kichwa tu", "Namba za kurasa"], answer: 1, why: "Muhtasari unaweza kukosa au kueleza vibaya mambo muhimu." },
          { objective: "O6", q: "Unaokoa dakika 5 kila mara kwenye kazi unayoifanya mara 20 kwa wiki. Huo ni muda gani?", options: ["Dakika 100 kwa wiki", "Dakika 25 kwa wiki", "Dakika 5 kwa wiki", "Dakika 20 kwa wiki"], answer: 0, why: "5 x 20 = dakika 100." },
          { objective: "O6", q: "Kutumia AI kwenye kazi kunachukua muda mrefu zaidi kwa sababu ya marekebisho yote. Unapaswa kufanya nini?", options: ["Kutumia zana mbili za AI kwa wakati mmoja", "Kuendelea kuitumia hata hivyo", "Kuacha kutumia AI kwa kazi hiyo", "Kuacha kukagua kazi"], answer: 2, why: "Tumia AI pale tu inapookoa muda kweli." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Tija ya Biashara",
    questions: [
      { objective: "O1", q: "Hatua ya kwanza ya kupanga wiki kwa AI ni:", options: ["Kununua app mpya", "Kuandika kila kazi", "Kufuta kalenda yako", "Kumuuliza mteja"], answer: 1, why: "AI inaweza kupanga tu kile unachoorodhesha." },
      { objective: "O1", q: "Unapochagua tatu zako za juu, nani anaamua mpangilio wa mwisho?", options: ["App yako ya barua pepe", "AI", "Mshindani", "Wewe"], answer: 3, why: "AI inapendekeza; wewe unaijua biashara yako." },
      { objective: "O1", q: "Kipindi cha muda ni:", options: ["Aina ya barua pepe", "Saa iliyoharibika", "Ada ya kuchelewa", "Muda maalum kwenye kalenda yako kwa aina moja ya kazi"], answer: 3, why: "Vipindi vya muda vinalinda muda wa vipaumbele." },
      { objective: "O2", q: "Kundi gani la barua pepe linapaswa kuja kwanza?", options: ["Majarida", "Jibu sasa: wateja, pesa, mambo ya haraka", "Risiti za zamani", "Matangazo"], answer: 1, why: "Barua pepe za wateja na za pesa ndizo muhimu zaidi." },
      { objective: "O2", q: "Kichujio cha barua pepe:", options: ["Kinatuma pesa", "Kinafuta akaunti yako", "Kinahamisha ujumbe kwenda kwenye folda chenyewe", "Kinaandika majibu"], answer: 2, why: "Vichujio vinapanga barua pepe bila wewe." },
      { objective: "O2", q: "Njia salama ya kupata msaada wa AI kwa barua pepe ya mteja ni:", options: ["Kueleza swali kwa maneno yako mwenyewe", "Kubandika namba ya kadi yake", "Kubandika anwani ya nyumbani kwake", "Kupeleka nywila yake"], answer: 0, why: "Weka maelezo ya siri ya wateja mbali na zana za AI." },
      { objective: "O2", q: "Kabla ya kutuma jibu lililoandikwa na AI unapaswa:", options: ["Kuongeza punguzo lolote tu", "Kulituma bila kulisoma", "Kulisoma na kulirekebisha", "Kulinakili kwa kila mteja"], answer: 2, why: "Wewe unawajibika kwa unachotuma." },
      { objective: "O3", q: "Violezo vinafaa zaidi kwa:", options: ["Maswali ambayo wateja huuliza tena na tena", "Migogoro ya kisheria ya mara moja", "Kuhamisha pesa benki", "Nywila"], answer: 0, why: "Andika jibu mara moja na ulitumie tena." },
      { objective: "O3", q: "Nafasi kama [jina] na [bei] ndani ya kiolezo ni:", options: ["Makosa", "Mahali unapojaza kila mara", "Nywila", "Viungo vya AI"], answer: 1, why: "Zinafanya kiolezo kimoja kifae wateja wengi." },
      { objective: "O3", q: "Unaweza kuweka violezo karibu wapi?", options: ["Kwenye mazungumzo ya AI pamoja na data za wateja", "Kichwani mwako tu", "Kwenye kikaratasi kilichobandikwa mlangoni", "Majibu yaliyohifadhiwa katika barua pepe au app ya maandishi"], answer: 3, why: "Majibu yaliyohifadhiwa na maandishi yanavifanya viwe rahisi kutumia haraka." },
      { objective: "O4", q: "SOP inasaidia kwa sababu:", options: ["Msaidizi anaweza kufanya kazi kwa njia ileile bila kukupigia simu", "Inarefusha kazi", "Inachukua nafasi ya wateja", "Ni fomu ya kodi"], answer: 0, why: "Hatua zilizoandikwa zinafanya kazi iweze kurudiwa." },
      { objective: "O4", q: "Njia ya haraka zaidi ya kuanza SOP ni:", options: ["Kuruka majaribio", "Kukisia hatua", "Kunakili mwongozo wa mshindani", "Kufanya kazi mara moja huku ukiandika maelezo ya haraka, kisha kuomba AI iyapange"], answer: 3, why: "Maelezo halisi pamoja na mpangilio wa AI yanatoa hatua sahihi." },
      { objective: "O4", q: "Orodha ya kukagua mwishoni mwa SOP:", options: ["Inachukua nafasi ya hatua", "Inaongeza ada", "Inasaidia kuhakikisha hakuna kilichosahauliwa", "Ni mkataba wa kisheria"], answer: 2, why: "Kuweka alama kwenye vipengele kunanasa hatua zilizosahauliwa." },
      { objective: "O5", q: "Kabla ya kuomba AI ifupishe mkataba wa msambazaji, unapaswa:", options: ["Kuongeza taarifa zako za kuingia benki", "Kuondoa maelezo ya siri", "Kuusaini", "Kuutuma kwa wateja"], answer: 1, why: "Weka taarifa za siri mbali na zana za AI." },
      { objective: "O5", q: "Ombi zuri la muhtasari linaomba:", options: ["Toleo refu zaidi", "Kichwa tu", "Vichekesho", "Mambo makuu pamoja na tarehe, ada na mambo unayopaswa kufanya"], answer: 3, why: "Tarehe, ada na majukumu ndiyo unayoyafanyia kazi." },
      { objective: "O5", q: "AI inapokupa vyanzo vya utafiti, unapaswa:", options: ["Kutoviangalia kamwe", "Kuamini viungo bila kuangalia", "Kuvifungua na kuvisoma wewe mwenyewe", "Kuvishiriki kama ukweli mara moja"], answer: 2, why: "AI inaweza kuorodhesha vyanzo visivyo sahihi au vya kubuni." },
      { objective: "O5", q: "Kwa swali la leseni, AI inatumika vizuri zaidi:", options: ["Kuandaa maswali kwa ofisi rasmi au kwa mtaalamu", "Kutoa jibu la mwisho la kisheria", "Kuomba leseni kwa niaba yako", "Kulipa ada"], answer: 0, why: "Vyanzo rasmi na wataalamu ndio wanaotoa jibu la mwisho." },
      { objective: "O6", q: "Unapopima muda wa njia ya AI, jumuisha:", options: ["Sekunde ambazo AI inachukua kujibu tu", "Muda wa kukagua na kurekebisha kazi ya AI", "Hakuna kitu", "Mapumziko yako ya chakula cha mchana"], answer: 1, why: "Kukagua ni sehemu ya gharama halisi." },
      { objective: "O6", q: "Dakika kumi zilizookolewa kwenye kazi unayoifanya mara 15 kwa wiki ni sawa na:", options: ["Dakika 10", "Dakika 25", "Dakika 150", "Dakika 1,500"], answer: 2, why: "10 x 15 = dakika 150." },
      { objective: "O6", q: "Muda uliookolewa unapaswa kwenda wapi?", options: ["Kwenye kazi zinazokuza biashara yako", "Kwenye barua pepe zaidi", "Kujaribu kila app mpya", "Popote"], answer: 0, why: "Lengo la kuokoa muda ni kuutumia kukuza biashara." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 3, 5, 7, 10, 11, 13, 15, 17, 18]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Mpango wa wiki", objective: "O1", notYet: "Hakuna vipaumbele vilivyochaguliwa, au mpango haupo kwenye kalenda.", meets: "Vipaumbele vitatu vilivyochaguliwa na mmiliki na vipindi vya muda viko kwenye kalenda.", exceeds: "Tatu za juu zinahusiana wazi na pesa au wateja, na kazi zisizobadilika zimewekewa muda kwanza." },
      { name: "Violezo vya majibu", objective: "O3", notYet: "Violezo chini ya vitatu, au ukweli si sahihi.", meets: "Violezo vitatu vyenye nafasi na ukweli uliokaguliwa, vimehifadhiwa mahali rahisi kuvifikia.", exceeds: "Violezo tayari vinatumika na vimesasishwa mara moja." },
      { name: "Utaratibu", objective: "O4", notYet: "Hatua zimekosekana au SOP haikujaribiwa.", meets: "Hatua zenye namba na orodha ya kukagua, zimejaribiwa mara moja na kurekebishwa.", exceeds: "Msaidizi aliufuata bila kuuliza maswali." },
      { name: "Kumbukumbu ya muda", objective: "O6", notYet: "Hakuna muda wa kabla na baada, au muda wa kukagua umeachwa.", meets: "Muda wa kabla na baada kwa kazi moja, ukijumuisha kukagua, na dakika zilizookolewa kila wiki.", exceeds: "Pia inasema muda uliookolewa utaenda wapi." },
      { name: "Maelezo ya siri", objective: "O2", notYet: "Anwani za wateja, namba za kadi au maelezo ya siri ya mikataba yaliingia kwenye AI.", meets: "Maswali yalielezwa kwa maneno ya mmiliki mwenyewe; hakuna maelezo ya siri yaliyoshirikiwa.", exceeds: "Maelezo ya siri pia yaliondolewa kwenye hati kabla ya kuzifupisha." }
    ]
  },
  evaluation: {
    results: [
      "Wamiliki wanaomaliza kozi na kufaulu kazi ya mwisho (rubriki)",
      "Dakika zilizookolewa kila wiki, kama zilivyoripotiwa katika uchunguzi wa ufuatiliaji wa siku 30",
      "Wamiliki wanaompa msaidizi au mwanafamilia utaratibu ulioandikwa ndani ya siku 30",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya wajasiriamali ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye barua pepe, kalenda na msaidizi wa AI wa bure",
      "App ya maandishi au karatasi kwa violezo, taratibu na kumbukumbu ya muda",
      "Kipima muda (saa ya simu inatosha)",
      "Kama dakika 60 kwa masomo na majaribio, pamoja na kazi zilizosambazwa katika wiki halisi ya kazi"
    ],
    facilitatorNotes: [
      "Endesha kozi kwa wiki moja ili wamiliki waandike muda halisi wa kabla na baada.",
      "Onyesha jinsi ya kueleza barua pepe ya mteja kwa maneno yako mwenyewe badala ya kuibandika.",
      "Wapange wamiliki wawili wawili ili wabadilishane na kujaribu taratibu za kila mmoja.",
      "Wakumbushe wamiliki kwamba maswali ya sheria, leseni na pesa yanapelekwa kwa ofisi rasmi ya serikali au kwa mtaalamu.",
      "Pima kifurushi cha kurudisha muda kwa rubriki, mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};

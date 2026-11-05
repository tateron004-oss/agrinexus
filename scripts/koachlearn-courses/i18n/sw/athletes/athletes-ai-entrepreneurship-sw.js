"use strict";

// Koach Learn course (Swahili translation of athletes/athletes-ai-entrepreneurship.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-ai-entrepreneurship-sw",
  lang: "sw",
  translationOf: "athletes-ai-entrepreneurship",
  category: "Athletes",
  name: "Ujasiriamali kwa AI kwa Wanamichezo",
  skills: "Kupata wazo la biashara kutoka mchezo wako, Kujaribu wazo kwa watu halisi, Kuandika mpango wa biashara wa ukurasa mmoja kwa AI, Kuandaa bajeti rahisi ya kuanzia, Kujua sheria: NIL, alama za biashara, kumbukumbu na kodi",
  outcome: "kugeuza wazo moja kutoka mchezo wako kuwa wazo la biashara lililojaribiwa: kuzungumza na wateja watarajiwa watano, kuandika mpango wa biashara wa ukurasa mmoja na bajeti ya kuanzia kwa AI, na kuorodhesha sheria unazopaswa kukagua kabla ya kuanza.",
  about: [
    "Kozi hii ni kwa wanamichezo na makocha wenye wazo la biashara, au wanaotaka kupata moja: biashara ya mafunzo, wazo la app, bidhaa inayotatua tatizo ulilowahi kuona katika michezo, au huduma kwa timu za mtaani.",
    "Wajasiriamali wanatatua matatizo ambayo watu wako tayari kulipia. Utapata tatizo halisi, utajaribu kama watu wanataka suluhisho lako kabla ya kutumia pesa, na utatumia AI kuandika mpango na bajeti ya ukurasa mmoja.",
    "Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi. Haya ni mafunzo ya jumla; kwa maswali ya sheria, kodi na NIL, kagua vyanzo rasmi na zungumza na ofisi ya utii wa kanuni (compliance office), mzazi au mlezi, na mtaalamu."
  ],
  finalTask: "Andika mpango wa biashara wa ukurasa mmoja kwa wazo moja kutoka mchezo wako: tatizo, suluhisho lako, mteja wako, kile watu watano halisi walichokuambia, jinsi utakavyowafikia wateja, bajeti ya kuanzia iliyoandaliwa katika jedwali, na orodha ya ukaguzi wa sheria (NIL, utafutaji wa alama ya biashara, kumbukumbu na kodi) pamoja na uliyemuuliza.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanamichezo na makocha wa sekondari, chuo na mwanzo wa kazi wenye wazo la biashara, au wanaotaka moja: biashara ya mafunzo, wazo la app, bidhaa kwa tatizo lililoonekana katika michezo, au huduma kwa timu za mtaani.",
    startingPoint: "Wanaujua mchezo wao vizuri na wanaona matatizo yake kwa karibu, na wanatumia simu janja na labda jedwali. Wachache wamewahi kuhoji wateja, kujaribu wazo kwa gharama ndogo, kuandika mpango wa biashara au bajeti, au kukagua sheria za NIL, alama za biashara, leseni na kodi.",
    gap: "Mara nyingi wanamichezo wanatengeneza au kununua kabla ya kukagua kama kuna mtu anayetaka wazo hilo, au wanaanza bila kukagua sheria, na wanapoteza pesa au ustahiki wa kushiriki mashindano. Kujaribu kwa wateja halisi, mpango wa ukurasa mmoja, bajeti halisi na orodha ya ukaguzi wa sheria vinawapa mwanzo salama wa gharama ndogo.",
    constraints: [
      "Lugha rahisi, kama kiwango cha kusoma cha darasa la 8",
      "Simu au kompyuta yenye msaidizi wa AI wa bure na Google Sheets",
      "Kama dakika 60 za masomo pamoja na muda wa kuzungumza na watu watano",
      "Sheria za NIL, alama za biashara, leseni ya biashara na kodi; kagua na ofisi ya utii wa kanuni, chama cha michezo cha jimbo au serikali ya mtaa",
      "Si ushauri wa fedha wala wa kodi; wanamichezo walio chini ya miaka 18 wanahitaji mzazi au mlezi kwa akaunti, mikataba na mkopo wowote"
    ],
    prerequisites: "Hakuna. \"Majukwaa ya Biashara Mtandaoni yenye AI kwa Wanamichezo\" ni hatua nzuri inayofuata kwa kuuza mtandaoni."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa matatizo uliyoyaona katika mchezo wako", action: "kuorodhesha na kupima matatizo kwa idadi ya watu wanaoyapata, ukubwa wa maumivu yake na kama watu tayari wanalipa, kisha kuchagua moja", standard: "tatizo lililochaguliwa likiwa ni lile uliloliona katika maisha halisi" },
    { id: "O2", condition: "Ukipewa watu watano wenye tatizo hilo", action: "kuwahoji kuhusu walichofanya zamani na kuandika wanachosema", standard: "bila maswali ya \"Ungenunua?\" na mifumo inayojirudia kwa watu wote watano ikiandikwa" },
    { id: "O3", condition: "Ukitumia kile wateja walichokuambia", action: "kuandika suluhisho kwa sentensi moja na kuchagua jaribio rahisi zaidi unaloweza kufanya ndani ya wiki mbili", standard: "ukiwa na namba itakayoonyesha kama jaribio lilifanikiwa" },
    { id: "O4", condition: "Ukitumia maelezo yako na msaidizi wa AI", action: "kuandika mpango wa biashara wa ukurasa mmoja wenye tatizo, suluhisho, mteja, walichosema wateja, jinsi ya kuwafikia, pesa na hatua zinazofuata", standard: "namba za kubuni zikiondolewa au kuwekwa alama kama makisio, na maoni kutoka kwa mshauri" },
    { id: "O5", condition: "Ukitumia Google Sheets", action: "kuandaa bajeti ya kuanzia yenye gharama, mapato yanayotarajiwa, jumla na faida", standard: "ukiwa na bei halisi za wauzaji, fomula zilizokaguliwa na mapitio pamoja na mtu mzima unayemwamini kabla ya kutumia pesa" },
    { id: "O6", condition: "Kabla ya kuanza biashara", action: "kuandika orodha ya ukaguzi wa sheria inayohusu NIL, majina na nembo, leseni ya biashara, kumbukumbu na kodi", standard: "utafutaji wa USPTO ukiwa umefanyika na mtu uliyemuuliza kuhusu kila sheria akitajwa" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupata na kujaribu wazo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kupata tatizo linalostahili kutatuliwa",
          minutes: 5,
          goal: "Orodhesha matatizo uliyoyaona katika michezo na uchague moja linalostahili kutatuliwa.",
          text: [
            "Mawazo mazuri ya biashara yanaanza na tatizo, si na bidhaa. Wanamichezo wanaona matatizo mengi kwa karibu: wazazi wasioweza kupata mafunzo mazuri ya wanaoanza, timu zinazopoteza vifaa, wachezaji wasioweza kulipia mafunzo bora, makocha waliozidiwa na kupanga ratiba.",
            "Andika matatizo ambayo wewe, wachezaji wenzako, wazazi au makocha mnalalamikia. Kwa kila moja, uliza: Watu wangapi wana tatizo hili? Linauma kiasi gani? Je, tayari wanalipia suluhisho baya?",
            "Tumia msaidizi wa AI kutafuta mawazo: \"Mimi ni mchezaji wa voliboli wa sekondari. Orodhesha matatizo 15 ambayo wachezaji, wazazi na makocha wanayo, na ambayo biashara ndogo inaweza kutatua.\" Kisha zungushia duara yale uliyoyaona kweli."
          ],
          steps: ["Andika matatizo uliyoyaona katika mchezo wako.", "Iombe AI ikupe mawazo zaidi.", "Zungushia duara yale uliyoyaona katika maisha halisi.", "Pima kila moja: watu wangapi, linauma kiasi gani, tayari wanalipa?", "Chagua moja."],
          words: [["Mjasiriamali", "mtu anayeanzisha biashara ili kutatua tatizo."], ["Tatizo linalouma (pain point)", "tatizo linalowasumbua watu kiasi kwamba wanataka litatuliwe."]],
          slides: [
            { title: "Anza na tatizo", bullets: ["Si na bidhaa", "Wanamichezo wanaona matatizo kwa karibu"] },
            { title: "Pima kila tatizo", bullets: ["Watu wangapi wanalo?", "Linauma kiasi gani?", "Tayari wanalipia suluhisho baya?"] },
            { title: "AI inatoa mawazo, wewe unachagua", bullets: ["Omba matatizo 15", "Zungushia duara uliyoyaona"] }
          ],
          tryIt: "Orodhesha matatizo matano kutoka mchezo wako, ongeza mengine kwa AI, yapime, na uchague lile utakalolifanyia kazi.",
          youCanNow: "kupata na kuchagua tatizo halisi linalostahili kutatuliwa.",
          quickCheck: [
            { objective: "O1", q: "Ni ipi ishara ya tatizo linalostahili kutatuliwa?", options: ["Ni wewe tu unayelo", "Watu tayari wanalipia suluhisho baya", "Linafurahisha kulizungumzia", "Hakuna anayelilalamikia"], answer: 1, why: "Watu wakiwa tayari wanalipia suluhisho baya, tatizo ni muhimu kwao." },
            { objective: "O1", q: "AI inaorodhesha matatizo 15 ya mchezo wako. Unafanya nini?", options: ["Kuchagua linalosisimua zaidi", "Kutengeneza yote 15", "Kuzungushia duara yale uliyoyaona kweli", "Kuiomba AI ikuchagulie"], answer: 2, why: "Baki na matatizo uliyoyaona katika maisha halisi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuzungumza na wateja halisi",
          minutes: 6,
          goal: "Hoji wateja watarajiwa watano kuhusu tatizo kabla ya kutengeneza chochote.",
          text: [
            "Kabla ya kutumia pesa, zungumza na watu wenye tatizo hilo. Lengo lako ni kujifunza, si kuuza. Uliza kuhusu walichofanya zamani, si kile wanachoweza kufanya siku moja.",
            "Maswali mazuri: \"Niambie kuhusu mara ya mwisho hili lilipotokea.\" \"Ulifanya nini kuhusu hilo?\" \"Lilikugharimu kiasi gani?\" \"Nini kinakuudhi kuhusu njia ulizo nazo?\" Epuka \"Ungenunua wazo langu?\" kwa sababu watu husema ndiyo ili kuwa wema.",
            "Zungumza na watu watano. Andika wanachosema kwa maneno yao wenyewe. Wengi wasipojali, hiyo ni habari njema: umeokoa muda na pesa. Chagua tatizo jipya au rekebisha."
          ],
          steps: ["Orodhesha watu watano wenye tatizo hilo.", "Uliza kuhusu mara ya mwisho lilipotokea.", "Uliza walifanya nini na liliwagharimu kiasi gani.", "Andika maneno yao.", "Tafuta mifumo inayojirudia kwa wote watano."],
          words: [["Mahojiano na mteja", "mazungumzo mafupi ya kujifunza kuhusu tatizo la mtu."], ["Kuthibitisha (validate)", "kukagua kwamba tatizo na suluhisho ni halisi kabla ya kutengeneza."]],
          slides: [
            { title: "Jifunze, usiuze", bullets: ["Zungumza na watu wenye tatizo", "Kabla ya kutumia pesa"] },
            { title: "Maswali mazuri", bullets: ["\"Niambie kuhusu mara ya mwisho...\"", "\"Ulifanya nini? Ilikugharimu kiasi gani?\"", "Si: \"Ungenunua wazo langu?\""] },
            { title: "Baada ya mazungumzo matano", bullets: ["Andika maneno yao", "Tafuta mifumo inayojirudia", "Hawavutiwi? Umeokoa pesa"] }
          ],
          tryIt: "Iombe AI ikusaidie kuandika maswali matano ya mahojiano kuhusu walichofanya zamani. Hoji angalau watu wawili wiki hii na uandike walichosema.",
          youCanNow: "kuwahoji wateja watarajiwa ili kujaribu kama tatizo ni halisi.",
          quickCheck: [
            { objective: "O2", q: "Lengo lako katika mahojiano na mteja ni nini?", options: ["Kujifunza", "Kuuza", "Kupata ahadi ya kununua", "Kujionyesha na wazo lako"], answer: 0, why: "Zungumza ili kujifunza kuhusu tatizo, si kuuza." },
            { objective: "O2", q: "Mzazi anasema, \"Ningenunua hiyo siku moja bila shaka.\" Unauliza nini baadaye?", options: ["\"Vizuri, nikuandike?\"", "\"Ungelipa kiasi gani?\"", "\"Marafiki zako wangenunua pia?\"", "\"Niambie kuhusu mara ya mwisho tatizo hili lilipotokea.\""], answer: 3, why: "Uliza kuhusu walichofanya zamani, kwa sababu watu husema ndiyo ili kuwa wema." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuunda suluhisho lako na ofa yako",
          minutes: 5,
          goal: "Andika suluhisho kwa sentensi moja na toleo rahisi zaidi unaloweza kujaribu.",
          text: [
            "Sasa eleza suluhisho lako kwa sentensi moja: \"Vipindi vya mpira wa kikapu vya Jumamosi kwa wanaoanza wenye umri wa miaka 6 hadi 9, vinavyoongozwa na wachezaji wa timu kuu ya sekondari, kwa bei ambayo wazazi wanaweza kumudu.\"",
            "Anza na jaribio rahisi zaidi unaloweza kufanya, ambalo wakati mwingine huitwa bidhaa ya chini kabisa inayofaa (MVP): kipindi kimoja badala ya akademi nzima, fomu ya kujisajili badala ya app, fulana kumi badala ya 500.",
            "AI inaweza kukusaidia kufikiria toleo rahisi zaidi: \"Hili ni wazo langu na hiki ndicho wateja watano walichoniambia. Ni njia gani ndogo na nafuu zaidi ya kulijaribu ndani ya wiki mbili?\" Kisha chagua kile unachoweza kufanya kweli."
          ],
          steps: ["Andika suluhisho lako kwa sentensi moja.", "Iombe AI ikupe jaribio dogo zaidi unaloweza kufanya.", "Chagua jaribio unaloweza kufanya ndani ya wiki mbili.", "Amua utajuaje kama limefanikiwa (kwa mfano watu 8 wamejisajili)."],
          words: [["Bidhaa ya chini kabisa inayofaa (MVP)", "toleo rahisi zaidi la wazo lako linalokuwezesha kulijaribu kwa wateja halisi."], ["Ofa", "kile hasa wateja wanachopata na gharama yake."]],
          slides: [
            { title: "Suluhisho kwa sentensi moja", bullets: ["Ni kwa ajili ya nani", "Wanapata nini", "Kwa nini ni bora zaidi"] },
            { title: "Jaribu kidogo kwanza", bullets: ["Kipindi kimoja, si akademi", "Fomu, si app", "Fulana 10, si 500"] },
            { title: "Eleza mafanikio", bullets: ["Jaribio dogo zaidi la wiki mbili", "Namba inayomaanisha limefanikiwa"] }
          ],
          tryIt: "Andika suluhisho lako kwa sentensi moja. Tumia AI kupata jaribio dogo zaidi la wiki mbili, na uandike namba itakayomaanisha limefanikiwa.",
          youCanNow: "kueleza suluhisho lako na kuandaa jaribio dogo la gharama nafuu.",
          quickCheck: [
            { objective: "O3", q: "Bidhaa ya chini kabisa inayofaa (MVP) ni nini?", options: ["Toleo lako la gharama kubwa zaidi", "App kamili", "Toleo rahisi zaidi linalokuwezesha kujaribu kwa wateja halisi", "Mpango mrefu wa biashara"], answer: 2, why: "MVP ni jaribio dogo zaidi unaloweza kufanya kwa wateja halisi." },
            { objective: "O3", q: "Unataka kuanzisha akademi ya mafunzo. Jaribio bora la kwanza ni lipi?", options: ["Kukodi jengo kwa mwaka mmoja", "Kufanya kipindi kimoja chenye fomu ya kujisajili", "Kutengeneza app maalum", "Kuchapisha fulana 500"], answer: 1, why: "Anza na jaribio rahisi zaidi unaloweza kufanya ndani ya wiki mbili." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupata na kujaribu wazo",
        questions: [
          { objective: "O1", q: "Mawazo mazuri ya biashara yanaanza na:", options: ["Nembo nzuri", "Mkopo mkubwa", "Tatizo walilonalo watu", "App ya gharama kubwa"], answer: 2, why: "Kutatua matatizo halisi ndicho watu wanachokilipia." },
          { objective: "O2", q: "Swali lipi la mahojiano ni bora zaidi?", options: ["\"Niambie kuhusu mara ya mwisho hili lilipotokea.\"", "\"Ungenunua wazo langu?\"", "\"Wazo langu si zuri sana?\"", "\"Ungelipa kiasi gani siku moja?\""], answer: 0, why: "Walichofanya zamani ni cha kweli zaidi kuliko utabiri." },
          { objective: "O2", q: "Wengi wa watu unaowahoji hawajali tatizo hilo. Hii inamaanisha:", options: ["Umeshindwa", "Litengeneze hata hivyo", "Endelea kuwahoji hadi wakubali", "Umeokoa muda na pesa; rekebisha au chagua tatizo jipya"], answer: 3, why: "Kujifunza mapema ni ushindi." },
          { objective: "O3", q: "MVP ni:", options: ["Mchezaji bora zaidi", "Toleo rahisi zaidi linalokuwezesha kujaribu kwa wateja halisi", "Uzinduzi mkubwa", "Alama ya biashara"], answer: 1, why: "Katika biashara, MVP inamaanisha bidhaa ya chini kabisa inayofaa." },
          { objective: "O3", q: "Jaribio bora la kwanza kwa wazo la kambi ni lipi?", options: ["Kukodi uwanja kwa mwezi mmoja", "Kipindi kimoja cha Jumamosi chenye fomu ya kujisajili", "Kutengeneza app", "Kuchapisha fulana 500"], answer: 1, why: "Majaribio madogo ni nafuu na ya haraka." }
        ]
      }
    },
    {
      name: "Sura 2: Mpango, bajeti na sheria",
      lessons: [
        {
          objectives: ["O4"],
          title: "Mpango wa biashara wa ukurasa mmoja kwa AI",
          minutes: 5,
          goal: "Andika mpango wa biashara wa ukurasa mmoja kwa msaada wa AI.",
          text: [
            "Mpango wa ukurasa mmoja unakusaidia kuzingatia jambo kuu. Sehemu zake: Tatizo, Suluhisho, Mteja, Walichoniambia wateja, Jinsi nitakavyowafikia, Pesa (gharama na bei), Hatua zinazofuata.",
            "Mpe msaidizi wa AI maelezo yako na matokeo ya mahojiano kisha uliza: \"Geuza maelezo haya kuwa mpango wa biashara wa ukurasa mmoja wenye sehemu hizi. Tumia maneno rahisi. Weka alama kwa chochote kilicho makisio.\"",
            "Usome kwa makini. AI inaweza kufanya wazo lako lionekane kubwa kuliko lilivyo au kubuni namba. Baki tu na kilicho kweli au kilichowekwa alama wazi kama makisio, na umwonyeshe mshauri, kocha au mwalimu ili akupe maoni."
          ],
          steps: ["Kusanya tatizo lako, suluhisho na maelezo ya mahojiano.", "Iombe AI mpango wa ukurasa mmoja wenye sehemu maalum.", "Ondoa namba za kubuni au ziwekee alama kama makisio.", "Mwonyeshe mshauri ili akupe maoni."],
          words: [["Mpango wa biashara", "muhtasari ulioandikwa wa jinsi biashara itakavyofanya kazi na kupata pesa."], ["Mshauri (mentor)", "mtu mwenye uzoefu anayekupa ushauri."]],
          slides: [
            { title: "Sehemu za mpango wa ukurasa mmoja", bullets: ["Tatizo, Suluhisho, Mteja", "Walichoniambia wateja", "Jinsi nitakavyowafikia, Pesa, Hatua zinazofuata"] },
            { title: "AI inaandika rasimu", bullets: ["Kutoka maelezo yako na mahojiano", "\"Weka alama kwa chochote kilicho makisio\""] },
            { title: "Wewe unakagua", bullets: ["Hakuna namba za kubuni", "Mwonyeshe mshauri"] }
          ],
          tryIt: "Tumia AI kugeuza maelezo yako kuwa mpango wa ukurasa mmoja. Weka alama kwa kila makisio, kisha muombe mshauri, kocha au mwalimu akupe maoni moja.",
          youCanNow: "kuandika mpango wa biashara wa ukurasa mmoja kwa AI na kuukagua kama ni sahihi.",
          quickCheck: [
            { objective: "O4", q: "Sehemu ipi inafaa kuwa katika mpango wako wa ukurasa mmoja?", options: ["Walichoniambia wateja", "Wanamichezo unaowapenda", "Hadithi ya maisha yako yote", "Ratiba yako ya mazoezi"], answer: 0, why: "Mpango unajumuisha kile mahojiano yako matano yalichoonyesha." },
            { objective: "O4", q: "Mpango wa AI unasema wateja 500 katika mwezi wa kwanza, lakini huna ushahidi. Unafanya nini?", options: ["Kuiacha ili kuwavutia watu", "Kuizidisha mara mbili", "Kuiweka juu kabisa", "Kuiondoa au kuiwekea alama kama makisio"], answer: 3, why: "Baki tu na kilicho kweli au kilichowekwa alama wazi kama makisio." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuandaa bajeti ya kuanzia",
          minutes: 5,
          goal: "Andaa bajeti rahisi ya kuanzia katika jedwali.",
          text: [
            "Bajeti ya kuanzia inaorodhesha unachohitaji kutumia kabla na wakati wa jaribio lako la kwanza, na unachotarajia kupata. Iweke ndogo mwanzoni.",
            "Katika Google Sheets, orodhesha gharama (vifaa, mahali pa kufanyia, ada za tovuti au jukwaa, uchapishaji, bima ikihitajika, matangazo) na mapato yanayotarajiwa (bei mara idadi ya wateja wanaotarajiwa). Tafuta bei halisi kutoka kwa wauzaji, si makisio.",
            "Iombe AI iandae fomula za jumla na faida, na uzikague mwenyewe. Usikope pesa kamwe wala kutumia kadi ya mkopo kwa jaribio la biashara bila kuzungumza na mzazi, mlezi au mshauri unayemwamini. Huu si ushauri wa fedha."
          ],
          steps: ["Orodhesha kila gharama ya kuanzia.", "Tafuta bei halisi.", "Kadiria mapato: bei mara wateja.", "Ongeza jumla na faida kwa fomula.", "Pitia pamoja na mtu mzima unayemwamini kabla ya kutumia pesa."],
          words: [["Bajeti ya kuanzia", "mpango wa pesa zinazohitajika kuanza na unachotarajia kupata."], ["Matumizi (expense)", "pesa unazotumia kuendesha biashara."]],
          slides: [
            { title: "Gharama", bullets: ["Vifaa na mahali pa kufanyia", "Ada za jukwaa au tovuti", "Uchapishaji, bima, matangazo"] },
            { title: "Mapato", bullets: ["Bei x wateja wanaotarajiwa", "Tumia bei halisi, si makisio"] },
            { title: "Kuwa mwangalifu", bullets: ["AI inaandaa fomula; wewe unakagua", "Usikope bila mtu mzima unayemwamini"] }
          ],
          tryIt: "Andaa bajeti ya kuanzia kwa jaribio lako la wiki mbili katika Google Sheets kwa bei halisi. Iombe AI iandike fomula za jumla na faida na uzikague.",
          youCanNow: "kuandaa bajeti rahisi ya kuanzia kwa namba halisi.",
          quickCheck: [
            { objective: "O5", q: "Unakadiriaje mapato yanayotarajiwa?", options: ["Bei mara wateja wanaotarajiwa", "Gharama toa bei", "Wafuasi mara likes", "Kubahatisha namba kamili"], answer: 0, why: "Mapato yanayotarajiwa ni bei mara wateja wanaotarajiwa." },
            { objective: "O5", q: "Bajeti yako inaonyesha unahitaji kununua vifaa. Unafanya nini kabla ya kutumia pesa?", options: ["Kulipa kwa kadi ya mkopo", "Kukopa kwa rafiki", "Kupitia bajeti pamoja na mzazi, mlezi au mshauri unayemwamini", "Kununua chaguo la bei nafuu zaidi mtandaoni sasa hivi"], answer: 2, why: "Zungumza na mtu mzima unayemwamini kabla ya kukopa au kutumia pesa kwa jaribio." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Sheria ambazo kila mwanamichezo-mwanzilishi hukagua",
          minutes: 6,
          goal: "Andika orodha ya ukaguzi wa sheria kwa biashara yako.",
          text: [
            "NIL (jina, picha na sura yako): biashara yako ikitumia jina, picha au sura yako, inaweza kuhesabiwa kama shughuli ya NIL. Wanamichezo wa chuo wanaweza kuhitaji kuiripoti; wanamichezo wa Division I wanaripoti mikataba inayostahili na watu wengine kupitia NIL Go wakati wa kuandika haya. Sheria za sekondari zinatofautiana kwa kila jimbo. Uliza ofisi yako ya utii wa kanuni au chama cha michezo cha jimbo lako.",
            "Majina na nembo: usitumie nembo za shule, timu au ligi bila ruhusa. Kabla ya kuchagua jina la biashara, tafuta katika kumbukumbu za alama za biashara za USPTO (ofisi ya hataza na alama za biashara ya Marekani) na kumbukumbu za majina ya biashara za jimbo lako. Jiji au jimbo lako linaweza kuhitaji leseni ya biashara; kagua tovuti ya serikali ya mtaa wako.",
            "Kumbukumbu na kodi: weka kila risiti na malipo katika jedwali. IRS (mamlaka ya kodi ya Marekani) inasema lazima uwasilishe ritani ya kodi kama mapato yako halisi ya kujiajiri ni $400 au zaidi. Zungumza na mtaalamu wa kodi. Kama uko chini ya miaka 18, mzazi au mlezi atahitaji kukusaidia na akaunti na mikataba."
          ],
          steps: ["Uliza ofisi ya utii wa kanuni au chama cha jimbo lako kuhusu sheria za NIL.", "Hakikisha unatumia nembo na jina lako mwenyewe tu.", "Tafuta katika USPTO na kumbukumbu za majina ya biashara za jimbo.", "Kagua sheria za leseni ya biashara za mtaa wako.", "Andaa jedwali la risiti na malipo.", "Zungumza na mtaalamu wa kodi."],
          words: [["Leseni ya biashara", "ruhusa kutoka jiji, kaunti au jimbo ya kuendesha biashara huko."], ["Kujiajiri", "kupata pesa kutoka biashara yako mwenyewe badala ya kutoka kwa bosi."]],
          slides: [
            { title: "NIL", bullets: ["Biashara yenye jina lako inaweza kuwa NIL", "Chuo: huenda ukahitaji kuripoti", "Sekondari: kagua jimbo lako"] },
            { title: "Majina, nembo, leseni", bullets: ["Hakuna nembo za shule au ligi bila ruhusa", "Tafuta USPTO na kumbukumbu za majina za jimbo", "Kagua sheria za leseni za mtaa wako"] },
            { title: "Kumbukumbu na kodi", bullets: ["Weka kila risiti", "IRS: wasilisha ritani mapato halisi ya kujiajiri yakiwa $400+", "Zungumza na mtaalamu wa kodi"] }
          ],
          sources: [
            { name: "NCAA: Jina, picha na sura (Name, Image and Likeness)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" },
            { name: "USPTO: Misingi ya alama za biashara", url: "https://www.uspto.gov/trademarks/basics" },
            { name: "IRS: Kituo cha kodi cha watu waliojiajiri", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }
          ],
          tryIt: "Kazi ya mwisho: kamilisha mpango wako wa ukurasa mmoja pamoja na bajeti, kisha andika orodha yako ya ukaguzi wa sheria ukitaja uliyemuuliza kuhusu NIL, matokeo ya utafutaji wako wa alama ya biashara, ukaguzi wako wa leseni ya mtaa na jedwali lako la kumbukumbu.",
          youCanNow: "kukagua sheria muhimu kabla ya kuanzisha biashara ukiwa mwanamichezo.",
          quickCheck: [
            { objective: "O6", q: "Unakagua wapi kama jiji lako linahitaji leseni ya biashara?", options: ["Mitandao ya kijamii", "Tovuti ya serikali ya mtaa wako", "Chatbot ya AI", "Gumzo la kikundi la kocha wako"], answer: 1, why: "Jiji au jimbo lako linaweza kuhitaji leseni; kagua tovuti ya serikali ya mtaa wako." },
            { objective: "O6", q: "Umechagua jina la biashara. Unakagua nini kabla ya kulitumia?", options: ["Kama lina vina", "Kama marafiki zako wanalipenda", "Kama lina mnyama wa timu (mascot)", "Kumbukumbu za alama za biashara za USPTO na kumbukumbu za majina ya biashara za jimbo lako"], answer: 3, why: "Tafuta katika kumbukumbu za alama za biashara na za majina ya biashara za jimbo kabla ya kuchagua jina." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Mpango, bajeti na sheria",
        questions: [
          { objective: "O4", q: "AI inaongeza \"$1 milioni katika mwaka wa kwanza\" kwenye mpango wako bila msingi wowote. Wewe:", options: ["Unaiacha", "Unaifanya $2 milioni", "Unawaonyesha wawekezaji", "Unaiondoa au kuiwekea alama kama makisio"], answer: 3, why: "Baki tu na namba za kweli au makisio yaliyowekwa alama wazi." },
          { objective: "O5", q: "Mapato yanayotarajiwa ni sawa na:", options: ["Bei mara wateja wanaotarajiwa", "Gharama mara mbili", "Wafuasi mara likes", "Makisio"], answer: 0, why: "Hiyo ndiyo njia ya msingi ya kukadiria mapato." },
          { objective: "O5", q: "Kabla ya kukopa pesa kwa jaribio la biashara, unapaswa:", options: ["Kutumia kadi ya mkopo haraka", "Kumuuliza mgeni mtandaoni", "Kuzungumza na mzazi, mlezi au mshauri unayemwamini", "Kuruka bajeti"], answer: 2, why: "Deni lina hatari; pata ushauri kwanza." },
          { objective: "O6", q: "Kwa nini utafute katika kumbukumbu za USPTO?", options: ["Kupata wateja", "Kupata kocha", "Kulipa kodi", "Kuepuka kutumia jina ambalo mtu mwingine anamiliki"], answer: 3, why: "Utafutaji wa alama za biashara unazuia migogoro." },
          { objective: "O6", q: "Kiwango cha IRS cha mapato halisi kinachomlazimu mtu aliyejiajiri kuwasilisha ritani ni:", options: ["$40,000", "$400", "$4", "Hakipo"], answer: 1, why: "Hiyo iko kwenye ukurasa wa IRS wa Kituo cha kodi cha watu waliojiajiri." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Ujasiriamali kwa AI kwa Wanamichezo",
    questions: [
      { objective: "O1", q: "Mjasiriamali ni mtu:", options: ["Anayecheza michezo tu", "Anayewekeza pesa tu", "Anayeanzisha biashara ili kutatua tatizo", "Anayefanya kazi kwa timu"], answer: 2, why: "Kutatua matatizo ndicho kiini." },
      { objective: "O1", q: "Tatizo linalouma (pain point) ni:", options: ["Tatizo linalowasumbua watu kiasi kwamba wanataka litatuliwe", "Jeraha", "Ubao wa matokeo", "Adhabu"], answer: 0, why: "Matatizo yanayouma ni fursa za biashara." },
      { objective: "O1", q: "Unapopima tatizo, uliza:", options: ["Watu wangapi wanalo na linauma kiasi gani", "Lina rangi gani", "Nani ni maarufu", "Linapata likes ngapi"], answer: 0, why: "Ukubwa na maumivu vinaonyesha kama linastahili kutatuliwa." },
      { objective: "O1", q: "AI inatoa matatizo 15. Wewe:", options: ["Unachagua la kwanza", "Unatumia yote 15", "Unazungushia duara uliyoyaona katika maisha halisi", "Unayapuuza"], answer: 2, why: "Uzoefu halisi ni bora kuliko kubahatisha." },
      { objective: "O2", q: "Mahojiano na wateja ni kwa ajili ya:", options: ["Kuuza kwa nguvu", "Kujifunza", "Kubishana", "Kupata wafuasi"], answer: 1, why: "Jifunze kabla ya kutengeneza." },
      { objective: "O2", q: "Kwa nini uepuke \"Ungenunua wazo langu?\"", options: ["Ni ukosefu wa adabu", "Ni kinyume cha sheria", "Ni fupi mno", "Watu husema ndiyo ili kuwa wema"], answer: 3, why: "Walichofanya zamani ni cha kweli zaidi." },
      { objective: "O2", q: "Unapaswa kuwahoji watu wangapi angalau?", options: ["Mmoja", "Hakuna", "Watano", "500"], answer: 2, why: "Watano wanaonyesha mifumo ya mwanzo." },
      { objective: "O2", q: "Kuthibitisha (validate) kunamaanisha:", options: ["Kupata muhuri wa maegesho", "Kushinda mechi", "Kusaini mkataba", "Kukagua kwamba tatizo na suluhisho ni halisi"], answer: 3, why: "Kuthibitisha kunaokoa muda na pesa." },
      { objective: "O3", q: "Ni ipi MVP kwa wazo la bidhaa za timu (merch)?", options: ["Fulana 10 zilizouzwa kwa watu walioziomba", "Fulana 500 zilizo stoo", "Mkusanyiko kamili wa mavazi", "Mkataba wa kukodi duka"], answer: 0, why: "Anza kidogo na ujaribu." },
      { objective: "O3", q: "Jaribio linahitaji:", options: ["Kutokuwa na lengo", "Namba inayomaanisha limefanikiwa", "Bajeti kubwa sana", "Mtu maarufu"], answer: 1, why: "Lengo lililo wazi linakuambia kama limefanikiwa." },
      { objective: "O4", q: "Mpango wa ukurasa mmoja unajumuisha:", options: ["Nembo tu", "Takwimu zako za michezo", "Tatizo, suluhisho, mteja, pesa, hatua zinazofuata", "Nenosiri lako"], answer: 2, why: "Sehemu hizo zinaeleza jinsi biashara inavyofanya kazi." },
      { objective: "O4", q: "Iombe AI iwekee alama:", options: ["Chochote kilicho makisio", "Hakuna kitu", "Habari njema tu", "Wapinzani wako"], answer: 0, why: "Makisio yaliyowekwa alama yanakufanya uwe mkweli." },
      { objective: "O4", q: "Mshauri (mentor) ni:", options: ["Mshindani", "Mteja", "Mwamuzi", "Mtu mwenye uzoefu anayetoa ushauri"], answer: 3, why: "Washauri wanakusaidia kuepuka makosa." },
      { objective: "O5", q: "Bei katika bajeti yako zinapaswa kutoka:", options: ["Kwa makisio", "Kwa bei halisi za wauzaji", "Kwa kumbukumbu za zamani", "Kwa AI tu"], answer: 1, why: "Bei halisi zinaleta bajeti halisi." },
      { objective: "O5", q: "Matumizi (expense) ni:", options: ["Pesa unazopata", "Pesa unazotumia kuendesha biashara", "Kombe", "Mfuasi"], answer: 1, why: "Matumizi ni gharama." },
      { objective: "O6", q: "Biashara inayotumia jina lako inaweza kuhesabiwa kama:", options: ["Malipo ya kucheza (pay-for-play)", "Udhamini wa masomo", "Hakuna kitu", "Shughuli ya NIL"], answer: 3, why: "Inatumia jina, picha au sura yako." },
      { objective: "O6", q: "Je, unaweza kutumia nembo ya shule yako kwenye bidhaa zako kwa uhuru?", options: ["Hapana, unahitaji ruhusa", "Ndiyo, siku zote", "Wikendi tu", "Mtandaoni tu"], answer: 0, why: "Shule zinalinda nembo zao." },
      { objective: "O6", q: "Unakagua wapi kama unahitaji leseni ya biashara?", options: ["Blogu ya michezo", "Kwa mpinzani", "Tovuti ya serikali ya mtaa wako", "Popote"], answer: 2, why: "Leseni ni sheria za mtaa." },
      { objective: "O6", q: "Kwa nini uweke kila risiti?", options: ["Kwa mapambo", "Ili kuzitupa baadaye", "Haihitajiki", "Kwa kumbukumbu na kodi"], answer: 3, why: "Kumbukumbu zinasaidia katika kodi na maamuzi." },
      { objective: "O6", q: "Kama uko chini ya miaka 18 na unaanzisha biashara:", options: ["Unaweza kusaini chochote peke yako", "Mzazi au mlezi anakusaidia na akaunti na mikataba", "Ifiche", "Tumia umri wa uongo"], answer: 1, why: "Watoto kwa kawaida wanahitaji msaada wa mtu mzima." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      1,
      5,
      8,
      10,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Tatizo na mteja",
        objective: "O1",
        notYet: "Tatizo halieleweki vizuri au si lile ambalo mwanafunzi ameliona.",
        meets: "Tatizo moja halisi, lililopimwa kwa ukubwa na maumivu, lenye mteja aliye wazi.",
        exceeds: "Linaonyesha kile wateja tayari wanacholipia kwa suluhisho baya."
      },
      {
        name: "Mahojiano na wateja",
        objective: "O2",
        notYet: "Chini ya watu watano, au maelezo yanahusu kama wangenunua.",
        meets: "Mahojiano matano kuhusu walichofanya zamani, yaliyoandikwa kwa maneno ya wateja, na mifumo inayojirudia ikiandikwa.",
        exceeds: "Mpango ulibadilika kwa sababu ya kile wateja walichosema."
      },
      {
        name: "Mpango wa ukurasa mmoja",
        objective: "O4",
        notYet: "Sehemu zinakosekana, au namba za kubuni zimeachwa bila alama.",
        meets: "Sehemu zote saba kwenye ukurasa mmoja, makisio yamewekwa alama, na maoni ya mshauri yamepokelewa.",
        exceeds: "Unajumuisha jaribio la wiki mbili na namba itakayoonyesha kama limefanikiwa."
      },
      {
        name: "Bajeti ya kuanzia",
        objective: "O5",
        notYet: "Bei za kubahatisha au fomula hazijakaguliwa.",
        meets: "Kila gharama ina bei halisi, mapato yanayotarajiwa, jumla na faida, vimekaguliwa na kupitiwa pamoja na mtu mzima unayemwamini.",
        exceeds: "Inaonyesha wateja wangapi wanahitajika ili kulipia gharama za kuanzia."
      },
      {
        name: "Orodha ya ukaguzi wa sheria",
        objective: "O6",
        notYet: "NIL, majina, leseni au kodi vinakosekana, au hakuna mtu aliyetajwa.",
        meets: "NIL, majina na nembo, leseni, kumbukumbu na kodi, kila kimoja kimeorodheshwa pamoja na mtu ambaye mwanafunzi alimuuliza.",
        exceeds: "Matokeo ya utafutaji wa USPTO na jedwali la risiti na malipo vimeambatishwa."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza mpango wa biashara na kupata Anafikia au Anazidi katika kila mstari wa rubriki",
      "Wanafunzi wanaofanya jaribio lao la wiki mbili ndani ya siku 30 na kuripoti kama lilifikia namba yake (dodoso la ufuatiliaji)",
      "Wanafunzi wanaoanzisha biashara, au wanaoamua kutoanzisha baada ya mahojiano na wateja, na hivyo kuokoa pesa",
      "Wanafunzi wanaoripoti kwamba walikagua sheria za NIL, alama za biashara, leseni na kodi kabla ya kuanza"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure (ChatGPT, Microsoft Copilot au Google Gemini)",
      "Akaunti ya Google ya bure kwa Google Sheets",
      "Daftari au maelezo ya simu kwa mahojiano na wateja",
      "Kama dakika 60 za masomo pamoja na muda wa mahojiano matano mafupi"
    ],
    facilitatorNotes: [
      "Fanyeni mazoezi ya mahojiano na wateja kwa jozi kwanza ili wanafunzi waulize kuhusu walichofanya watu zamani, si \"Ungenunua?\".",
      "Andaa washauri, kama wamiliki wa biashara za mtaani au kituo cha biashara ndogo, ili watoe maoni kuhusu mipango.",
      "Usiwaruhusu wanafunzi kukopa pesa au kusaini mikataba kama sehemu ya kozi; washirikishe wazazi au walezi kwa yeyote aliye chini ya miaka 18.",
      "Mwalike mtu wa ofisi ya utii wa kanuni kwa maswali ya NIL na uelekeze maswali ya kodi kwa mtaalamu wa kodi.",
      "Sherehekeeni mawazo ambayo wateja waliyakataa: kugundua mapema ni matokeo mazuri."
    ]
  }
};

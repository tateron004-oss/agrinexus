"use strict";

// Koach Learn course (Swahili translation of shared/ai-productivity-operations.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-productivity-operations-sw",
  lang: "sw",
  translationOf: "ai-productivity-operations",
  category: "Small Business",
  name: "AI kwa Tija na Uendeshaji wa Shughuli",
  skills: "Kupanga wiki kwa AI, Kuandika utaratibu wa kawaida wa kazi (SOP), Kugeuza mikutano kuwa kazi za kufanya, Kupanga ratiba ya wafanyakazi au watu wa kujitolea, Kufuatilia vifaa na kuagiza upya, Kuandika tathmini ya kila wiki ya shughuli",
  outcome: "kutumia msaidizi wa AI wa bure kupanga wiki, kugeuza kazi iliyochanganyika kuwa utaratibu ulio wazi wa hatua kwa hatua, kupata kazi za kufanya kutoka mikutano, kupanga ratiba, kufuatilia vifaa na kutathmini wiki, ili shirika liende vizuri zaidi kwa muda mchache wako.",
  about: [
    "Uendeshaji ni kazi ya kila siku inayofanya shirika liendelee: ratiba, vifaa, taratibu, mikutano na ufuatiliaji. Kazi hii ikiwa vurugu, wamiliki na wakurugenzi hukesha usiku wakimalizia kazi. AI inaweza kubeba sehemu kubwa ya mzigo huo.",
    "Kozi hii ni ya wamiliki na mameneja wa biashara ndogo, wakurugenzi wa mashirika yasiyo ya faida na waratibu wa watu wa kujitolea. Mifano ni mgahawa, kituo cha kulea watoto mchana, kikundi cha kutunza bustani, duka la mitumba na benki ya chakula.",
    "Utatumia ChatGPT, Microsoft Copilot au Google Gemini pamoja na Google Docs na Sheets au Microsoft 365. Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Jaribio la maarifa linamaliza kila sura na mtihani wa maswali 20 unamaliza kozi."
  ],
  finalTask: "Tengeneza kifurushi cha uendeshaji wa wiki kwa shirika halisi au la mazoezi: mpango wa wiki uliopangwa kwa umuhimu, utaratibu mmoja wa kawaida (SOP) kwa kazi inayorudiwa, maelezo ya mkutano yenye kazi za kufanya, wahusika na tarehe za mwisho, ratiba ya wiki moja ya wafanyakazi au watu wa kujitolea, jedwali la vifaa lenye viwango vya kuagiza upya, na tathmini fupi ya mwisho wa wiki yenye uboreshaji mmoja kwa wiki ijayo.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wamiliki wa biashara ndogo, viongozi wa zamu na mameneja wa ofisi, na waratibu wa mashirika yasiyo ya faida, makanisa na programu za jamii wanaoshughulikia kazi nyingi, wafanyakazi au watu wa kujitolea, mikutano na vifaa kwa wakati mmoja.",
    startingPoint: "Wanaendesha mahali kwa kutumia kumbukumbu, orodha za karatasi, ujumbe mfupi na kalenda; huenda wanatumia jedwali (spreadsheet) na wamewahi kujaribu msaidizi wa AI. Wachache wana taratibu zilizoandikwa, maelezo ya mikutano yaliyopangwa au viwango vya kuagiza upya.",
    gap: "Kila kitu kikiwa kichwani mwa mtu mmoja, kazi husahaulika, watu wapya hujifunza polepole na vifaa huisha. Wanafunzi wanahitaji zana rahisi zinazosaidiwa na AI kwa kupanga, taratibu, mikutano, ratiba, vifaa na tathmini ya kila wiki, ili shughuli ziende vizuri zaidi na zichukue muda mchache wao.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Vifaa: simu au kompyuta; kompyuta ni rahisi zaidi kwa majedwali",
      "Faragha: majina ya kwanza au alama tu; hakuna taarifa za afya, mshahara au binafsi za wafanyakazi katika zana za AI",
      "Sheria: sheria za kazi kuhusu mapumziko na saa za watoto zinatofautiana; wanafunzi wanakagua na idara ya kazi ya jimbo lao",
      "Muda: masomo ya dakika 5, kama dakika 60 kwa jumla pamoja na muda wa kutengeneza kifurushi"
    ],
    prerequisites: "Hakuna. Wanafunzi wapya kwa wasaidizi wa AI wanaweza kuanza na kozi ya utangulizi wa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa orodha ya kazi iliyochanganyika na saa zako halisi ulizo nazo", action: "kutengeneza kwa AI mpango wa wiki wa siku kwa siku uliopangwa kwa umuhimu", standard: "huku kazi tatu za juu zikiwa zimetengewa muda kwenye kalenda yako" },
    { id: "O2", condition: "Kwa kazi ambayo shirika lako linairudia", action: "kuandika utaratibu wa kawaida wa kazi (SOP) wenye namba, lengo, vifaa, hatua, maelezo ya usalama na orodha ya kukagua", standard: "ili mtu mpya aweze kuufuata bila kusimama" },
    { id: "O3", condition: "Baada ya mkutano mfupi", action: "kuorodhesha maamuzi, kazi za kufanya na maswali yaliyobaki kutoka kwenye maelezo", standard: "kila kazi ya kufanya ikiwa na mhusika na tarehe ya mwisho zilizokubaliwa, na kutumwa ndani ya siku moja" },
    { id: "O4", condition: "Ukipewa zamu, upatikanaji wa watu na kanuni", action: "kutengeneza ratiba ya wiki moja ya wafanyakazi au watu wa kujitolea inayojaza kila zamu", standard: "ukifuata mipaka yako ya saa, ujuzi unaohitajika na sheria za kazi" },
    { id: "O5", condition: "Ukipewa vifaa vyako na kasi ya kuvitumia", action: "kutengeneza jedwali la vifaa lenye viwango vya kuagiza upya na fomula inayoonyesha REORDER", standard: "kila kifaa kikiwa na kiwango cha kuagiza upya" },
    { id: "O6", condition: "Mwishoni mwa wiki", action: "kuandika tathmini fupi ya mafanikio, yaliyokosekana na matatizo, na kuchagua uboreshaji mmoja", standard: "kwa kama dakika 15, uboreshaji ukiwa umeongezwa kwenye mpango wa wiki ijayo" }
  ],
  chapters: [
    {
      name: "Sura 1: Kujipanga",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kupanga wiki yako kwa AI",
          minutes: 5,
          goal: "Geuza orodha ya kazi iliyochanganyika kuwa mpango wa wiki uliopangwa kwa umuhimu.",
          text: [
            "Orodha ndefu ya kazi iliyochanganyika inafanya kila kitu kionekane cha haraka. AI inaweza kuipanga haraka. Mwaga kila kazi kwenye mazungumzo, kisha mwombe aipange na atengeneze mpango.",
            "Prompt yenye manufaa: \"Hii ni orodha yangu ya kazi za wiki hii. Ipange katika: lazima nifanye wiki hii, ninapaswa kufanya, inaweza kusubiri, na naweza kumkabidhi mtu mwingine. Kisha tengeneza mpango wa siku kwa siku. Nina kama saa 3 kwa siku kwa kazi za ofisi, na Jumanne ina shughuli nyingi za kupeleka mizigo.\"",
            "Wewe ndiye bosi wa mpango. Hamisha chochote ambacho AI imekosea, tenga muda kwenye kalenda yako kwa kazi tatu za juu, na uache nafasi kwa mambo yasiyotarajiwa."
          ],
          steps: ["Andika kila kazi, kubwa na ndogo, katika orodha moja.", "Mwombe AI aipange katika lazima, ninapaswa, inaweza kusubiri na kumkabidhi mtu.", "Mwambie saa zako halisi ulizo nazo na siku zenye shughuli nyingi.", "Rekebisha mpango, kisha tenga muda kwenye kalenda yako kwa kazi tatu za juu."],
          words: [["Kupanga kwa umuhimu", "kuamua kipi ni muhimu zaidi na kukifanya kwanza."], ["Kukabidhi", "kumpa mtu mwingine kazi aifanye."]],
          slides: [
            { title: "Mwaga orodha", bullets: ["Kila kazi, kubwa na ndogo", "Mahali pamoja, orodha moja"] },
            { title: "Mwombe AI aipange", bullets: ["Lazima nifanye, ninapaswa kufanya", "Inaweza kusubiri, naweza kumkabidhi mtu", "Mwambie saa zako halisi"] },
            { title: "Mpango ni wako", bullets: ["Rekebisha ambacho AI imekosea", "Tenga muda kwa kazi tatu za juu", "Acha nafasi kwa yasiyotarajiwa"] }
          ],
          tryIt: "Andika orodha yako kamili ya kazi za wiki hii. Mwombe msaidizi wa AI aipange na atengeneze mpango wa siku kwa siku kwa kutumia saa zako halisi, kisha uurekebishe na utenge muda kwenye kalenda kwa kazi zako tatu za juu.",
          youCanNow: "kugeuza orodha ya kazi iliyochanganyika kuwa mpango wa wiki uliopangwa kwa umuhimu kwa kutumia AI.",
          quickCheck: [
            { objective: "O1", q: "Katika mpango wa wiki wa kozi hii, \"kumkabidhi mtu\" inamaanisha nini?", options: ["Kazi unazofanya kwanza", "Kazi ambazo mtu mwingine anaweza kufanya", "Kazi unazofuta", "Kazi ambazo lazima zifanywe leo"], answer: 1, why: "Kazi za kukabidhi ni zile ambazo mtu mwingine anaweza kufanya." },
            { objective: "O1", q: "Mpango wa AI unaweka kazi yako kubwa zaidi Jumanne, siku yako yenye shughuli nyingi zaidi za kupeleka mizigo. Unafanya nini?", options: ["Kuufuata; AI inajua zaidi", "Kufuta kazi hiyo", "Kumwomba AI orodha mpya ya kazi", "Kuhamisha kazi hiyo kwenye siku tulivu zaidi na kutenga muda huo kwenye kalenda yako"], answer: 3, why: "Wewe ndiye bosi wa mpango; rekebisha ambacho AI imekosea." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuandika utaratibu wa kawaida wa kazi (SOP)",
          minutes: 6,
          goal: "Geuza jinsi unavyofanya kazi kuwa utaratibu ulio wazi wa hatua kwa hatua ambao mtu yeyote anaweza kuufuata.",
          text: [
            "Utaratibu wa kawaida wa kazi (SOP, kutoka Kiingereza standard operating procedure) ni hatua zilizoandikwa kwa kazi inayorudiwa: kufungua duka, kusafisha jiko, kumpokea mteja, kuhesabu pesa za droo. Ukiwa na SOP, wafanyakazi wapya au watu wa kujitolea hujifunza haraka zaidi na kazi hufanywa kwa njia ile ile kila wakati.",
            "Njia ya haraka zaidi: ieleze kwa sauti au kwa maandishi jinsi ungemweleza mtu mpya, hata kama imechanganyika. Kisha mwombe AI: \"Geuza hii kuwa SOP yenye namba, yenye kichwa, lengo, vifaa vinavyohitajika, hatua zenye kitendo kimoja kila moja, maelezo ya usalama na orodha ya mwisho ya kukagua. Tumia maneno rahisi.\"",
            "Ijaribu: mwombe mtu ambaye hajawahi kufanya kazi hiyo aifuate huku wewe ukitazama kimya. Kila anaposita, SOP inahitaji hatua iliyo wazi zaidi. Iwekee tarehe na useme ni nani anayeisimamia."
          ],
          steps: ["Eleza kazi kwa sauti au kwa maandishi; ikichanganyika si tatizo.", "Mwombe AI aigeuze kuwa SOP yenye namba, lengo, vifaa, hatua, maelezo ya usalama na orodha ya kukagua.", "Kagua kila hatua kama ni sahihi.", "Mwombe mtu mpya aijaribu.", "Rekebisha hatua zisizo wazi, kisha iwekee tarehe na utaje msimamizi wake."],
          words: [["SOP", "utaratibu wa kawaida wa kazi: hatua zilizoandikwa kwa kazi inayorudiwa."], ["Orodha ya kukagua", "orodha ya vitu vya kuweka alama ili kisisahaulike kitu."]],
          slides: [
            { title: "Kwa nini SOP", bullets: ["Watu wapya hujifunza haraka zaidi", "Inafanywa kwa njia ile ile kila wakati"] },
            { title: "Kutoka maelezo ya vurugu hadi SOP", bullets: ["Ieleze kama kwa mtu mpya", "AI inapanga: lengo, vifaa, hatua", "Ongeza maelezo ya usalama na orodha ya kukagua"] },
            { title: "Ijaribu", bullets: ["Mtu mpya anaifuata", "Kila kusita = hatua ya kufanya iwe wazi", "Iwekee tarehe na utaje msimamizi"] }
          ],
          tryIt: "Chagua kazi moja unayoifanya kila wiki. Ieleze kwa maneno yako mwenyewe, mwombe AI aigeuze kuwa SOP, ikague, na umwombe mtu ajaribu kuifuata.",
          youCanNow: "kuandika na kujaribu utaratibu wa kawaida wa kazi ulio wazi kwa msaada wa AI.",
          quickCheck: [
            { objective: "O2", q: "SOP ni kifupi cha nini?", options: ["Utaratibu wa kawaida wa kazi (standard operating procedure)", "Mpango wa saa za ziada za wafanyakazi", "Mchakato wa kuagiza vifaa", "Orodha ya watu"], answer: 0, why: "SOP ni utaratibu wa kawaida wa kazi: hatua zilizoandikwa kwa kazi inayorudiwa." },
            { objective: "O2", q: "SOP yako iliyotengenezwa na AI ya kufunga duka inasema \"funga\" lakini inaruka mlango wa nyuma. Unafanya nini?", options: ["Kuitumia hivyo hivyo", "Kuitupa SOP", "Kukagua kila hatua kama ni sahihi na kuongeza hatua iliyokosekana", "Kuwaacha wafanyakazi wapya wajitafutie wenyewe"], answer: 2, why: "Kagua kila hatua kama ni sahihi kabla mtu yeyote hajaitumia SOP." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kugeuza mikutano kuwa kazi za kufanya",
          minutes: 5,
          goal: "Endesha mkutano mfupi na utumie AI kugeuza maelezo kuwa maamuzi na kazi za kufanya.",
          text: [
            "Mikutano mingi huisha kila mtu akitikisa kichwa lakini hakuna kinachotokea. Suluhisho ni rahisi: kila mkutano huisha na kazi za kufanya, kila moja ikiwa na mhusika na tarehe ya mwisho.",
            "Tumia ajenda yenye muda. Andika maelezo mafupi, au tumia maelezo ya AI yaliyojengwa ndani ya zana ya mkutano kama shirika lako linaruhusu na kila mtu ameambiwa. Kisha bandika maelezo kwa AI: \"Kutoka kwa maelezo haya, orodhesha maamuzi yaliyofanywa, kazi za kufanya pamoja na mhusika na tarehe ya mwisho, na maswali yaliyobaki.\"",
            "Kagua orodha kabla ya kuituma, kwa sababu AI inaweza kukisia mhusika au tarehe ambayo haikukubaliwa kamwe. Ondoa chochote cha binafsi, kama taarifa za afya au mshahara wa wafanyakazi, kabla ya kusambaza. Ituma ndani ya siku moja."
          ],
          steps: ["Andika ajenda fupi yenye muda.", "Andika maelezo au tumia maelezo ya AI yaliyoruhusiwa, kila mtu akiwa ameambiwa.", "Mwombe AI atoe maamuzi, kazi za kufanya na maswali yaliyobaki.", "Kagua wahusika na tarehe; ondoa taarifa za binafsi.", "Tuma orodha ya kazi ndani ya siku moja."],
          words: [["Ajenda", "orodha ya mada za mkutano, kwa mpangilio."], ["Kazi ya kufanya", "kazi inayotoka kwenye mkutano yenye mhusika na tarehe ya mwisho."]],
          slides: [
            { title: "Maliza kwa vitendo", bullets: ["Kila kazi ina mhusika", "Kila kazi ina tarehe ya mwisho"] },
            { title: "AI aitoe", bullets: ["Maamuzi yaliyofanywa", "Kazi za kufanya", "Maswali yaliyobaki"] },
            { title: "Kabla ya kutuma", bullets: ["Kagua wahusika na tarehe", "Ondoa taarifa za binafsi", "Tuma ndani ya siku moja"] }
          ],
          tryIt: "Andika maelezo katika mkutano wako ujao, au andika maelezo ya mkutano wa hivi karibuni. Tumia AI kutoa maamuzi na kazi za kufanya pamoja na wahusika na tarehe, zikague, na uandike ujumbe ambao ungeutuma.",
          youCanNow: "kugeuza maelezo ya mkutano kuwa kazi za kufanya zilizokaguliwa, zenye wahusika na tarehe za mwisho.",
          quickCheck: [
            { objective: "O3", q: "Kitu gani kinafanya mkutano uishe kwa ufuatiliaji halisi?", options: ["Majadiliano marefu", "Kila mtu kutikisa kichwa", "Mkutano mwingine kesho yake", "Kazi za kufanya, kila moja ikiwa na mhusika na tarehe ya mwisho"], answer: 3, why: "Kazi za kufanya zenye wahusika na tarehe zinageuza maneno kuwa kazi." },
            { objective: "O3", q: "Maelezo ya mkutano wako yanataja likizo ya ugonjwa ya mfanyakazi. Unafanya nini kabla ya kusambaza muhtasari wa AI?", options: ["Kuusambaza kama ulivyo", "Kuondoa taarifa za afya za binafsi", "Kuongeza maelezo zaidi", "Kuubandika kwenye ubao wa matangazo"], answer: 1, why: "Ondoa taarifa za binafsi, kama afya au mshahara, kabla ya kusambaza maelezo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kujipanga",
        questions: [
          { objective: "O1", q: "Unapomwomba AI apange wiki yako, unapaswa kumwambia nini?", options: ["Nywila yako ya benki", "Hakuna; atakisia", "Saa zako halisi ulizo nazo na siku zenye shughuli nyingi", "Anwani za nyumbani za wafanyakazi wako"], answer: 2, why: "Mipaka halisi inafanya mpango uwezekane." },
          { objective: "O2", q: "SOP ni nini?", options: ["Hatua zilizoandikwa kwa kazi inayorudiwa", "Aina ya kodi ya mishahara", "Chapisho la mitandao ya kijamii", "Ripoti ya mauzo"], answer: 0, why: "Taratibu za kawaida za kazi zinafanya kazi ziweze kurudiwa." },
          { objective: "O2", q: "Mtu mpya wa kujitolea anasita kwenye hatua ya 4 ya SOP yako. Hiyo inakuambia nini?", options: ["Mtu huyo wa kujitolea si mwerevu", "SOP hazifanyi kazi kamwe", "Ifute SOP", "Hatua ya 4 inahitaji kuwa wazi zaidi"], answer: 3, why: "Kusita kunaonyesha mahali hatua hazipo wazi." },
          { objective: "O3", q: "Kila kazi ya kufanya inapaswa kuwa na:", options: ["Hadithi ndefu", "Mhusika na tarehe ya mwisho", "Msimbo wa siri", "Hakuna maelezo"], answer: 1, why: "Wahusika na tarehe zinafanya kazi zifanyike." },
          { objective: "O3", q: "AI inaorodhesha \"Maria atamaliza bajeti kufikia Ijumaa\" lakini hakuna aliyekubali hilo. Unafanya nini?", options: ["Kuituma hivyo hivyo", "Kuirekebisha kabla ya kuituma", "Kumpa Maria kazi hiyo bila kumuuliza", "Kufuta maelezo yote"], answer: 1, why: "AI inaweza kukisia; kagua wahusika na tarehe." }
        ]
      }
    },
    {
      name: "Sura 2: Kuendesha shughuli kwa urahisi zaidi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kupanga ratiba ya wafanyakazi au watu wa kujitolea",
          minutes: 5,
          goal: "Tumia AI na jedwali kutengeneza ratiba ya haki ya wiki moja inayojaza kila zamu.",
          text: [
            "Kupanga ratiba ni kama fumbo: nani anapatikana, zamu zipi zinahitaji watu wangapi, na nani ana ujuzi upi. AI inaweza kuandika toleo la kwanza kwa sekunde chache.",
            "Mpe kanuni bila taarifa za binafsi: \"Tengeneza jedwali la ratiba ya wiki moja. Zamu: Jumatatu hadi Ijumaa 8-12 na 12-4, watu wawili kila moja. Jumamosi 9-1, watu watatu. Upatikanaji: Mtu A siku za kazi tu, Mtu B si Jumatatu... Kila mtu asizidi saa 20. Angalau mtu mmoja mwenye mafunzo ya kushughulikia chakula katika kila zamu.\"",
            "Kagua rasimu dhidi ya kanuni zako na sheria zozote za kazi zinazohusika, kama mapumziko na saa za watoto; idara ya kazi ya jimbo lako inaziorodhesha. Weka ratiba ya mwisho kwenye jedwali la pamoja ili kila mtu aone mabadiliko."
          ],
          steps: ["Orodhesha zamu na idadi ya watu ambao kila moja inahitaji.", "Orodhesha upatikanaji wa kila mtu kwa majina ya kwanza au alama.", "Orodhesha kanuni: saa za juu kabisa, ujuzi unaohitajika.", "Mwombe AI jedwali la ratiba.", "Kagua kanuni na sheria za kazi, kisha isambaze kwenye jedwali."],
          words: [["Zamu", "kipindi maalum cha muda wa kazi."], ["Upatikanaji", "nyakati ambazo mtu anaweza kufanya kazi au kujitolea."]],
          slides: [
            { title: "Ratiba ni fumbo", bullets: ["Upatikanaji, zamu, ujuzi"] },
            { title: "Mpe AI kanuni", bullets: ["Zamu na idadi ya watu wanaohitajika", "Upatikanaji kwa jina la kwanza au alama", "Saa za juu kabisa na ujuzi unaohitajika"] },
            { title: "Kagua na usambaze", bullets: ["Ilingane na kanuni zako", "Kagua sheria za kazi za jimbo: mapumziko, watoto", "Isambaze kwenye jedwali"] }
          ],
          tryIt: "Andika zamu, upatikanaji na kanuni za timu halisi au ya mazoezi yenye angalau watu wanne. Mwombe AI aandike rasimu ya ratiba ya wiki, kagua kila kanuni, na urekebishe matatizo yoyote.",
          youCanNow: "kutengeneza na kukagua ratiba ya haki ya wiki kwa msaada wa AI.",
          quickCheck: [
            { objective: "O4", q: "Unapaswa kumpa AI nini unapoomba ratiba?", options: ["Anwani za nyumbani na simu za kila mtu", "Neno \"ratiba\" tu", "Zamu, majina ya kwanza au alama, upatikanaji na kanuni", "Viwango vya mishahara ya wafanyakazi"], answer: 2, why: "AI inahitaji zamu, upatikanaji na kanuni, lakini si taarifa za binafsi." },
            { objective: "O4", q: "Ratiba ya AI inaacha Jumamosi bila mtu mwenye mafunzo ya kushughulikia chakula. Unafanya nini?", options: ["Kuibadilisha ili kila zamu iwe na mtu aliyefunzwa", "Kuiacha; ni siku moja tu", "Kufuta Jumamosi", "Kuwaambia wafanyakazi wasiofunzwa wakisie"], answer: 0, why: "Kagua rasimu dhidi ya kila kanuni, ikiwemo ujuzi unaohitajika." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kufuatilia vifaa na kuagiza upya",
          minutes: 5,
          goal: "Tengeneza jedwali la vifaa lenye viwango vya kuagiza upya ili visiishe kamwe.",
          text: [
            "Vikombe, glavu, unga au nepi zikiisha, kazi inasimama. Jedwali rahisi la vifaa linazuia hilo. Safu: kifaa, kipimo, kiasi kilichopo, matumizi ya wiki, kiwango cha kuagiza upya, kiasi cha kuagiza na msambazaji.",
            "Kiwango cha kuagiza upya ni kiasi kinachokuambia uagize sasa. Kanuni rahisi: matumizi ya wiki mara idadi ya wiki ambazo mzigo huchukua kufika, pamoja na ziada kidogo. Ukitumia masanduku 10 kwa wiki na mzigo unachukua wiki 1, agiza upya ukiwa na kama masanduku 12.",
            "Mwombe AI fomula inayoonyesha vifaa vya kuagiza: \"Katika Google Sheets, andika fomula inayoonyesha REORDER kiasi kilichopo kikiwa sawa au chini ya kiwango cha kuagiza upya.\" Hesabu vifaa siku ile ile kila wiki na usasishe jedwali."
          ],
          steps: ["Orodhesha vifaa pamoja na kipimo na msambazaji.", "Kadiria matumizi ya wiki ya kila kimoja.", "Weka kiwango cha kuagiza upya: matumizi ya wiki x wiki za mzigo kufika + ziada kidogo.", "Mwombe AI fomula inayoonyesha REORDER.", "Hesabu kila wiki siku ile ile."],
          words: [["Hifadhi ya vifaa (inventory)", "vifaa au bidhaa ulizo nazo."], ["Kiwango cha kuagiza upya", "kiasi kinachokuambia ni wakati wa kuagiza zaidi."]],
          slides: [
            { title: "Safu za jedwali la vifaa", bullets: ["Kifaa, kipimo, kilichopo", "Matumizi ya wiki, kiwango cha kuagiza upya", "Kiasi cha kuagiza, msambazaji"] },
            { title: "Kiwango cha kuagiza upya", bullets: ["Matumizi ya wiki x wiki za mzigo kufika + ziada", "10 kwa wiki, mzigo wiki 1: kama 12"] },
            { title: "Jedwali likuonye", bullets: ["Fomula inaonyesha REORDER", "Hesabu siku ile ile kila wiki"] }
          ],
          tryIt: "Tengeneza jedwali la vifaa lenye angalau vifaa vinane, weka viwango vya kuagiza upya, na uongeze fomula iliyoandikwa na AI inayoonyesha vifaa vya kuagiza upya.",
          youCanNow: "kufuatilia vifaa kwa viwango vya kuagiza upya na ishara ya kuagiza inayojitokeza yenyewe.",
          quickCheck: [
            { objective: "O5", q: "Kiwango cha kuagiza upya ni nini?", options: ["Anwani ya msambazaji", "Kiasi kilichopo kinachokuambia uagize sasa", "Bei ya kifaa", "Siku duka linafunguliwa"], answer: 1, why: "Kiwango cha kuagiza upya ni kiasi kinachokuambia uagize zaidi." },
            { objective: "O5", q: "Unatumia pakiti 20 za glavu kwa wiki na mzigo unachukua wiki 1. Unapaswa kuagiza upya karibu lini?", options: ["Ukiwa na pakiti 0", "Ukiwa na pakiti 2", "Ukiwa na pakiti 100", "Ukiwa na kama pakiti 22 hadi 24"], answer: 3, why: "Matumizi ya wiki mara wiki za mzigo kufika, pamoja na ziada kidogo, ni kama pakiti 22 hadi 24." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kutathmini wiki na kuboresha",
          minutes: 5,
          goal: "Andika tathmini fupi ya mwisho wa wiki na uchague uboreshaji mmoja.",
          text: [
            "Tathmini ya dakika 15 mwishoni mwa kila wiki inazuia matatizo madogo yasikue. Angalia kilichofanyika, kisichofanyika, kilichoharibika, na cha kubadilisha.",
            "Mpe AI mpango wako, kazi za kufanya ulizomaliza na maelezo machache, kisha uombe: \"Andika tathmini fupi ya wiki ya shughuli: mafanikio, yaliyokosekana, matatizo, na uboreshaji mmoja kwa wiki ijayo.\" Ihariri ili iwe ya kweli na ya haki kwa timu yako.",
            "Chagua uboreshaji mmoja tu kwa wiki, kama SOP mpya, marekebisho ya ratiba au badiliko la kuagiza. Marekebisho madogo ya kila wiki yanajumlika kuwa shughuli zinazoenda vizuri zaidi sana baada ya miezi michache."
          ],
          steps: ["Kusanya mpango wako wa wiki, kazi za kufanya na maelezo.", "Mwombe AI tathmini fupi: mafanikio, yaliyokosekana, matatizo, uboreshaji mmoja.", "Ihariri iwe ya kweli na ya haki.", "Chagua uboreshaji mmoja na uuongeze kwenye mpango wa wiki ijayo."],
          words: [["Tathmini", "kuangalia nyuma ili kujifunza kipi kilifanya kazi na kipi hakikufanya."], ["Uboreshaji endelevu", "kufanya mabadiliko madogo mara kwa mara ili kuwa bora zaidi kadiri muda unavyokwenda."]],
          slides: [
            { title: "Dakika 15 kwa wiki", bullets: ["Kilichofanyika", "Kisichofanyika", "Kilichoharibika"] },
            { title: "AI anaandika rasimu ya tathmini", bullets: ["Mafanikio, yaliyokosekana, matatizo", "Uboreshaji mmoja", "Wewe unahariri iwe ya kweli na ya haki"] },
            { title: "Rekebisho moja kwa wiki", bullets: ["SOP mpya, rekebisho la ratiba au badiliko la kuagiza", "Marekebisho madogo yanajumlika"] }
          ],
          tryIt: "Kazi ya mwisho: andika tathmini yako ya mwisho wa wiki kwa msaada wa AI na uchague uboreshaji mmoja. Pamoja na mpango wako wa wiki, SOP, kazi za kufanya, ratiba na jedwali la vifaa, hii inakamilisha kifurushi chako cha uendeshaji wa wiki.",
          youCanNow: "kuendesha wiki ya shughuli kwa msaada wa AI na kuendelea kuiboresha.",
          quickCheck: [
            { objective: "O6", q: "Tathmini ya mwisho wa wiki inahusu nini?", options: ["Mafanikio, yaliyokosekana, matatizo na uboreshaji mmoja", "Kilichoharibika tu", "Makosa ya kila mfanyakazi", "Bajeti ya mwaka ujao"], answer: 0, why: "Tathmini fupi inahusu mafanikio, yaliyokosekana, matatizo na uboreshaji mmoja." },
            { objective: "O6", q: "Tathmini ya AI inamlaumu mtu mmoja wa kujitolea kwa mzigo uliochelewa, lakini kosa lilikuwa la msambazaji. Unafanya nini?", options: ["Kuituma kama ilivyoandikwa", "Kuchagua maboresho matano badala yake", "Kuihariri ili iwe ya kweli na ya haki kwa timu", "Kuruka tathmini wiki hii"], answer: 2, why: "Hariri rasimu ya AI iwe ya kweli na ya haki kabla ya kuisambaza." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuendesha shughuli kwa urahisi zaidi",
        questions: [
          { objective: "O4", q: "Unapompa AI taarifa za ratiba, utumie nini kwa watu?", options: ["Namba kamili za Social Security (namba ya hifadhi ya jamii ya Marekani)", "Anwani za nyumbani", "Rekodi za matibabu", "Majina ya kwanza au alama, bila taarifa za binafsi"], answer: 3, why: "Ratiba inahitaji upatikanaji, si taarifa za binafsi." },
          { objective: "O4", q: "Unaweza kukagua wapi kanuni za mapumziko na saa za kazi za watoto?", options: ["Idara ya kazi ya jimbo lako", "Blogu yoyote", "Mazungumzo na AI tu", "Mshindani wako"], answer: 0, why: "Sheria za kazi zinatoka kwa mamlaka rasmi za kazi." },
          { objective: "O5", q: "Unatumia masanduku 10 kwa wiki na mzigo unachukua wiki 1. Kiwango kinachofaa cha kuagiza upya ni kama:", options: ["Masanduku 0", "Sanduku 1", "Masanduku 12", "Masanduku 100"], answer: 2, why: "Matumizi ya wiki x wiki za mzigo kufika pamoja na ziada kidogo." },
          { objective: "O6", q: "Tathmini ya wiki inachukua muda gani katika kozi hii?", options: ["Siku nzima", "Saa tatu", "Hakuna muda; iruke", "Kama dakika 15"], answer: 3, why: "Tathmini fupi ya wiki inaweka matatizo yakiwa madogo." },
          { objective: "O6", q: "Unapaswa kuchagua maboresho mangapi kila wiki?", options: ["Ishirini", "Hakuna", "Moja", "Kila kitu kwa wakati mmoja"], answer: 2, why: "Rekebisho moja kwa wiki linawezekana na linajumlika." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Tija na Uendeshaji wa Shughuli",
    questions: [
      { objective: "O1", q: "Uendeshaji wa shughuli unamaanisha:", options: ["Upasuaji tu", "Kazi ya kila siku inayofanya shirika liendelee", "Mauzo tu", "Matangazo tu"], answer: 1, why: "Ratiba, vifaa, taratibu na ufuatiliaji." },
      { objective: "O1", q: "AI inapopanga orodha yako ya kazi, kundi lipi ni \"kumkabidhi mtu\"?", options: ["Kazi ambazo mtu mwingine anaweza kufanya", "Kazi ambazo lazima ufanye leo", "Kazi za kufuta", "Kazi ambazo AI itafanya peke yake"], answer: 0, why: "Kumkabidhi mtu maana yake ni kumpa mtu mwingine kazi." },
      { objective: "O1", q: "Nani ana uamuzi wa mwisho kuhusu mpango wako wa wiki?", options: ["AI", "Hakuna mtu", "Wewe", "Msambazaji wako"], answer: 2, why: "Wewe unarekebisha na kumiliki mpango." },
      { objective: "O2", q: "SOP inasaidia kwa sababu:", options: ["Kazi hufanywa kwa njia ile ile na watu wapya hujifunza haraka zaidi", "Inachukua nafasi ya wafanyakazi wote", "Inahitajika kwa kila barua pepe", "Inafanya kazi ziende polepole"], answer: 0, why: "Hilo ndilo lengo la SOP." },
      { objective: "O2", q: "Njia ya haraka zaidi ya kuanza SOP ni:", options: ["Kunakili SOP ya kampuni nyingine", "Kumsubiri mshauri", "Kuacha kuiandika", "Kueleza kazi kwa maneno yako mwenyewe, kisha AI aipange"], answer: 3, why: "Ujuzi wako pamoja na upangaji wa AI ni wa haraka." },
      { objective: "O2", q: "SOP nzuri ina:", options: ["Kichwa tu", "Lengo, vifaa, hatua zenye namba, maelezo ya usalama na orodha ya kukagua", "Mishahara ya wafanyakazi", "Namba za simu za wateja"], answer: 1, why: "Sehemu hizo zinaifanya ikamilike." },
      { objective: "O2", q: "Unaijaribuje SOP?", options: ["Kuisoma mara moja wewe mwenyewe", "Mtu mpya aifuate huku ukitazama", "Kumuuliza AI kama ni nzuri", "Kutoijaribu"], answer: 1, why: "Mtu mpya anaonyesha hatua zisizo wazi." },
      { objective: "O3", q: "Ajenda ni:", options: ["Orodha ya vitafunwa vya mkutano", "Fomu ya mishahara", "Aina ya SOP", "Orodha ya mada za mkutano, kwa mpangilio"], answer: 3, why: "Ajenda zinaweka mikutano kwenye mada." },
      { objective: "O3", q: "Kabla ya kutumia maelezo ya mkutano ya AI, unapaswa:", options: ["Kuhakikisha inaruhusiwa na kila mtu ameambiwa", "Kurekodi kwa siri", "Kusambaza taarifa za mishahara ya wafanyakazi", "Kuruka ajenda"], answer: 0, why: "Watu wanapaswa kujua mikutano inaporekodiwa au kuandikwa." },
      { objective: "O3", q: "Kabla ya kutuma maelezo ya mkutano yaliyotengenezwa na AI, ondoa:", options: ["Kazi zote za kufanya", "Tarehe ya mkutano", "Taarifa za binafsi kama afya au mshahara wa wafanyakazi", "Maamuzi"], answer: 2, why: "Taarifa za binafsi hazipaswi kusambazwa kwa watu wengi." },
      { objective: "O3", q: "Kazi za kufanya zinapaswa kutumwa:", options: ["Mwezi mmoja baadaye", "Kamwe", "Ukiombwa tu", "Ndani ya siku moja"], answer: 3, why: "Ufuatiliaji wa haraka unadumisha kasi." },
      { objective: "O4", q: "Zamu ni:", options: ["Kitufe cha kibodi tu", "Aina ya kifaa", "Kipindi maalum cha muda wa kazi", "Mkutano"], answer: 2, why: "Ratiba hujengwa kwa zamu." },
      { objective: "O4", q: "Rasimu ya ratiba ya AI inampa mtu mmoja saa 30, lakini kikomo chako ni 20. Unapaswa:", options: ["Kuiacha hivyo", "Kurekebisha ratiba ifuate kanuni yako", "Kupuuza kanuni", "Kumwondoa mtu huyo"], answer: 1, why: "Kagua kila wakati rasimu za AI dhidi ya kanuni zako." },
      { objective: "O4", q: "Kwa nini usambaze ratiba ya mwisho kwenye jedwali?", options: ["Kila mtu anaona mabadiliko ya karibuni", "Ili kuificha", "Majedwali yanahitajika kisheria", "Ili mtu yeyote asiione"], answer: 0, why: "Jedwali la pamoja linamweka kila mtu na taarifa mpya." },
      { objective: "O5", q: "Hifadhi ya vifaa (inventory) inamaanisha:", options: ["Orodha ya wafanyakazi", "Maelezo ya mkutano", "Vifaa au bidhaa ulizo nazo", "Maoni ya wateja"], answer: 2, why: "Hifadhi ya vifaa ni ulicho nacho stoo." },
      { objective: "O5", q: "Kiwango cha kuagiza upya kinakuambia:", options: ["Ni wakati wa kuagiza zaidi", "Bei ya kifaa", "Msambazaji ni nani", "Jinsi ya kukipika"], answer: 0, why: "Kinaanzisha agizo jipya." },
      { objective: "O5", q: "Fomula inayoonyesha REORDER inasaidia kwa:", options: ["Kuagiza vifaa kwa kadi yako yenyewe", "Kufuta jedwali", "Kubadilisha wasambazaji", "Kuonyesha vifaa vilivyopungua yenyewe"], answer: 3, why: "Jedwali linakuonya vifaa vikipungua." },
      { objective: "O5", q: "Unapaswa kuhesabu vifaa mara ngapi?", options: ["Mara moja kwa mwaka", "Kila wiki siku ile ile", "Kamwe", "Vikiisha tu"], answer: 1, why: "Kuhesabu mara kwa mara kunaweka jedwali sahihi." },
      { objective: "O6", q: "Tathmini ya wiki inahusu:", options: ["Mafanikio tu", "Mafanikio, yaliyokosekana, matatizo na uboreshaji mmoja", "Lawama tu", "Hakuna kitu kwa maandishi"], answer: 1, why: "Tathmini iliyosawazika inaleta uboreshaji." },
      { objective: "O6", q: "Kufanya mabadiliko madogo mara kwa mara ili kuwa bora zaidi kunaitwa:", options: ["Kukabidhi", "Hifadhi ya vifaa", "Kupanga ratiba", "Uboreshaji endelevu"], answer: 3, why: "Marekebisho madogo ya mara kwa mara yanajumlika." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      1,
      2,
      3,
      6,
      8,
      9,
      12,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Mpango wa wiki",
        objective: "O1",
        notYet: "Kazi hazijapangwa, au mpango unapuuza saa halisi zilizopo.",
        meets: "Kazi zimepangwa katika lazima, ninapaswa, inaweza kusubiri na kumkabidhi mtu, pamoja na mpango wa siku kwa siku unaolingana na saa halisi.",
        exceeds: "Kazi tatu za juu zimetengewa muda kwenye kalenda, na nafasi imeachwa kwa yasiyotarajiwa."
      },
      {
        name: "Utaratibu wa kawaida wa kazi",
        objective: "O2",
        notYet: "Hatua hazieleweki au haziko kwa mpangilio, au hakuna orodha ya kukagua.",
        meets: "Kichwa, lengo, vifaa, hatua zenye namba za kitendo kimoja kila moja, maelezo ya usalama, orodha ya kukagua, tarehe na msimamizi.",
        exceeds: "Mtu mpya aliijaribu na hatua zisizo wazi zilirekebishwa."
      },
      {
        name: "Kazi za kufanya za mkutano",
        objective: "O3",
        notYet: "Kazi za kufanya hazina mhusika wala tarehe ya mwisho.",
        meets: "Maamuzi, kazi za kufanya zenye wahusika na tarehe zilizokubaliwa, na maswali yaliyobaki, taarifa za binafsi zikiwa zimeondolewa.",
        exceeds: "Zilitumwa ndani ya siku moja, baada ya kukagua kwamba wahusika au tarehe zilizokisiwa zilirekebishwa."
      },
      {
        name: "Ratiba",
        objective: "O4",
        notYet: "Zamu moja haina mtu au kanuni imevunjwa.",
        meets: "Kila zamu ina watu, mipaka ya saa na ujuzi vimefuatwa, na imesambazwa kwenye jedwali.",
        exceeds: "Inaeleza sheria za kazi zilizokaguliwa na idara ya kazi ya jimbo."
      },
      {
        name: "Jedwali la vifaa",
        objective: "O5",
        notYet: "Hakuna viwango vya kuagiza upya.",
        meets: "Kila kifaa kina matumizi ya wiki, kiwango cha kuagiza upya na fomula inayoonyesha REORDER.",
        exceeds: "Lina msambazaji na siku maalum kila wiki ya kuhesabu."
      },
      {
        name: "Tathmini ya wiki",
        objective: "O6",
        notYet: "Hakuna tathmini, au hakuna uboreshaji uliochaguliwa.",
        meets: "Tathmini fupi na ya haki ya mafanikio, yaliyokosekana na matatizo, pamoja na uboreshaji mmoja.",
        exceeds: "Uboreshaji tayari uko kwenye mpango wa wiki ijayo."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Mashirika yenye angalau SOP tatu zilizoandikwa na zinazotumika ndani ya siku 60 (utafiti wa kufuatilia)",
      "Mara chache zaidi za vifaa muhimu kuisha katika siku 60 baada ya kozi",
      "Wamiliki na mameneja wanaoripoti saa kwa wiki walizookoa katika kupanga na kuratibu"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure (ChatGPT, Microsoft Copilot au Google Gemini)",
      "Kalenda na jedwali (Google Sheets au Excel)",
      "Orodha halisi ya kazi, kazi inayorudiwa, na orodha ya vifaa kutoka shirika la mwanafunzi",
      "Kama dakika 60 kwa masomo na majaribio, pamoja na muda wa kutengeneza kifurushi"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha fanyeni sura moja kwa kila kipindi; tengenezeni fomula ya kuagiza upya kwenye skrini ya pamoja.",
      "Waambie wanafunzi wabadilishane SOP na kufuata hatua za wenzao ili kupata zisizo wazi.",
      "Wakumbushe wanafunzi watumie majina ya kwanza au alama tu, na wasiweke kamwe taarifa za afya au mshahara wa wafanyakazi katika AI.",
      "Waelekeze wanafunzi kwa idara ya kazi ya jimbo lao kwa kanuni za mapumziko na saa za watoto; usitoe ushauri wa kisheria.",
      "Pima kifurushi cha mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};

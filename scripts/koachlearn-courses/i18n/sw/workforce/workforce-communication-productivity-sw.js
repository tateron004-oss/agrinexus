"use strict";

// Koach Learn course (Swahili translation of workforce/workforce-communication-productivity.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "workforce-communication-productivity-sw",
  lang: "sw",
  translationOf: "workforce-communication-productivity",
  category: "Workforce Development",
  name: "Mawasiliano na Tija Kazini",
  skills: "Kuandika ujumbe wa kazi ulio wazi, Kukabidhi zamu au kazi, Kuomba msaada na kutoa taarifa ya maendeleo, Kupanga orodha ya kazi kwa kipaumbele, Kupanga wiki yako kwa vipindi vya muda, Kutumia AI kama msaidizi, si mbadala",
  outcome: "kuwasiliana kwa uwazi na kufanya kazi sahihi kazini kwako: kuandika ujumbe ulio wazi wenye jambo kuu mwanzoni, kukabidhi kazi kikamilifu, kutuma taarifa fupi ya maendeleo, kupanga orodha ya kazi kwa umuhimu na uharaka, na kupanga wiki kwa vipindi vya muda, ukitumia AI kusaidia kuandika rasimu na kupanga.",
  about: [
    "Kozi hii ni ya wafanyakazi na watafuta kazi katika fani yoyote: maduka, maghala, wasaidizi wa huduma za afya, ofisi, huduma kwa wateja na kazi za ufundi. Mawasiliano yaliyo wazi na tabia nzuri za kutumia muda ni kati ya ujuzi ambao waajiri wanauthamini zaidi, na unasaidia katika kila kazi.",
    "Utafanya mazoezi ya kuandika ujumbe ambao watu wanauelewa mara ya kwanza, kukabidhi kazi bila kitu kupotea, kumjulisha meneja wako, na kuamua cha kufanya kwanza wakati kila kitu kinaonekana cha haraka. Msaidizi wa AI anakusaidia kuandika rasimu na kupanga; wewe unaleta ukweli na uamuzi.",
    "Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Fuata sheria za mahali pako pa kazi kuhusu zana za AI unazoruhusiwa kutumia, na usiweke taarifa za siri ndani yake."
  ],
  finalTask: "Kamilisha kifurushi cha wiki moja cha mawasiliano na tija: ujumbe mmoja wa kazi ulio wazi wenye jambo kuu mwanzoni, makabidhiano moja ya zamu au kazi kwa kutumia orodha ya kukagua ya makabidhiano, taarifa moja ya maendeleo kwa muundo wa Nimemaliza / Ijayo / Kizuizi, orodha ya kazi iliyopangwa katika visanduku vinne vya haraka/muhimu, na mpango wa wiki ijayo wenye vipindi vya muda. Tumia AI kusaidia kuandika rasimu ya angalau viwili kati ya hivyo, na ukague kila ukweli.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wafanyakazi na watafuta kazi katika fani yoyote: maduka, maghala, wasaidizi wa huduma za afya, ofisi, huduma kwa wateja na kazi za ufundi.",
    startingPoint: "Wanatuma ujumbe mfupi na barua pepe na wana aina fulani ya orodha ya kazi. Wengi wanaandika ujumbe unaoficha jambo kuu, wanakabidhi kazi bila kukamilisha, na wanapanga wiki kulingana na kila kinachoonekana cha haraka. Baadhi wamewahi kujaribu msaidizi wa AI.",
    gap: "Mawasiliano yaliyo wazi na kusimamia muda ni kati ya ujuzi ambao waajiri wanauthamini zaidi, na makabidhiano yanayopoteza mambo na ujumbe usio wazi husababisha makosa. Wanafunzi wanahitaji miundo rahisi ya kurudia kwa ujumbe, makabidhiano na taarifa za maendeleo, njia ya kuchagua kilicho muhimu, na mpango wa wiki, wakitumia AI kuandika rasimu huku uamuzi wao wenyewe ukiongoza.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Vifaa: simu janja au kompyuta; kalenda ya simu au shajara ya karatasi",
      "Faragha na sera: hakuna taarifa binafsi za mteja au mgonjwa katika zana za AI isipokuwa mahali pa kazi pameidhinisha mfumo huo; sheria za AI za mahali pa kazi zinakuja kwanza",
      "Wafanyakazi wa zamu wana uwezo mdogo wa kuchagua ratiba zao, kwa hiyo mipango inapangwa kuzunguka zamu zisizobadilika",
      "Muda: masomo ya kama dakika 5 yanayoingia katika siku ya kazi"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukiwa na ujumbe unaohitaji kutuma kazini", action: "kuandika ujumbe wenye jambo kuu mwanzoni na ombi lililo wazi lenye tarehe ya mwisho", standard: "kuhusu jambo moja, na kila ukweli umekaguliwa" },
    { id: "O2", condition: "Mwishoni mwa zamu au kazi", action: "kukabidhi kazi kikamilifu kwa kutumia orodha ya kukagua yenye sehemu tano", standard: "pamoja na mambo ambayo hayajamalizika na ya kuangalia, bila taarifa binafsi katika zana zisizoidhinishwa" },
    { id: "O3", condition: "Kila wiki, au unapokwama", action: "kuandika taarifa ya maendeleo ya Nimemaliza / Ijayo / Kizuizi na kuomba msaada mapema", standard: "ukisema ulichojaribu, unachohitaji na lini" },
    { id: "O4", condition: "Ukipewa angalau kazi kumi", action: "kuzipanga katika visanduku vinne vya haraka na muhimu na kuchagua kazi zako tatu za kwanza", standard: "ukimuuliza meneja wako usipokuwa na uhakika kipi kinatangulia" },
    { id: "O5", condition: "Kwa wiki ijayo", action: "kutengeneza mpango wenye vipindi vya muda pamoja na zamu zako, kazi muhimu, vipindi vya ujumbe na muda wa akiba", standard: "uliorekebishwa kufaa maisha yako halisi" },
    { id: "O6", condition: "Unapotumia AI kusaidia kazi yako", action: "kuchagua sehemu zipi AI iandike rasimu na kukagua kila ukweli kabla ya kutuma", standard: "ukitumia zana zilizoidhinishwa tu na kuzuia taarifa za siri" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuwasiliana kwa uwazi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Jambo kuu kwanza: ujumbe wa kazi ulio wazi",
          minutes: 5,
          goal: "Andika ujumbe wa kazi wenye jambo kuu mwanzoni na ombi lililo wazi.",
          text: [
            "Watu wenye shughuli nyingi husoma mstari wa kwanza na kupitia mengine haraka. Weka jambo kuu au ombi kwanza, kisha maelezo, kisha unachohitaji na lini. Mfano: \"Unaweza kunishikia zamu yangu ya Jumamosi 8-4? Nina dharura ya kifamilia. Tafadhali nijibu kabla ya Alhamisi saa sita mchana.\"",
            "Uwe mfupi: jambo moja kwa kila ujumbe, sentensi fupi, na vitone kwa orodha. Kwa barua pepe, tumia kichwa kilicho wazi: \"Nahitaji mbadala: zamu ya Jumamosi 8-4\".",
            "Msaidizi wa AI anaweza kugeuza maelezo yako ya haraka kuwa ujumbe ulio wazi: \"Andika upya huu ili jambo kuu liwe kwanza, chini ya maneno 80, kwa adabu na moja kwa moja.\" Wewe unakagua ukweli, majina na saa."
          ],
          steps: ["Andika jambo kuu au ombi kwa sentensi moja.", "Ongeza maelezo tu ambayo msomaji anahitaji.", "Sema unachohitaji na lini.", "Tumia kichwa cha barua kilicho wazi.", "Omba AI iufupishe, kisha kagua ukweli."],
          words: [["Jambo kuu kwanza", "kuweka ujumbe au ombi muhimu zaidi mwanzoni."], ["Kichwa cha barua pepe (subject line)", "jina fupi la barua pepe."]],
          slides: [
            { title: "Wasomaji hupitia haraka", bullets: ["Jambo kuu au ombi kwanza", "Kisha maelezo", "Kisha unachohitaji na lini"] },
            { title: "Uwe mfupi", bullets: ["Jambo moja kwa kila ujumbe", "Sentensi fupi na vitone", "Kichwa wazi: \"Nahitaji mbadala: Jumamosi 8-4\""] },
            { title: "AI inaweza kuufupisha", bullets: ["\"Jambo kuu kwanza, chini ya maneno 80\"", "Wewe unakagua majina, tarehe na saa"] }
          ],
          tryIt: "Chukua ujumbe unaohitaji kutuma (au mfano, kama kuomba kubadilishiwa ratiba). Uandike upya jambo kuu likiwa kwanza pamoja na tarehe ya mwisho, omba AI iufupishe, na ukague kila ukweli.",
          youCanNow: "kuandika ujumbe mfupi wa kazi wenye jambo kuu na ombi mwanzoni.",
          quickCheck: [
            { objective: "O1", q: "Kwa nini uweke jambo kuu kwanza katika ujumbe wa kazi?", options: ["Unafanya ujumbe kuwa mrefu zaidi", "Unasikika kuwa na adabu zaidi", "Watu wenye shughuli nyingi husoma mstari wa kwanza na kupitia mengine haraka", "Ni sheria ya kisheria"], answer: 2, why: "Wasomaji wanaoona mstari wa kwanza tu bado wanapata unachohitaji." },
            { objective: "O1", q: "Unahitaji kupumzika Ijumaa. Utatuma ujumbe upi?", options: ["\"Naweza kupata Ijumaa kupumzika kwa ajili ya miadi ya daktari? Tafadhali nijulishe kabla ya Jumatano.\"", "\"Habari, natumaini uko salama, basi wiki hii imekuwa na shughuli nyingi na...\"", "\"Ijumaa?\"", "Ujumbe wenye maombi matatu tofauti"], answer: 0, why: "Unaweka ombi kwanza, unatoa sababu na tarehe ya mwisho, na unahusu jambo moja." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Makabidhiano yasiyopoteza chochote",
          minutes: 5,
          goal: "Kabidhi zamu au kazi kikamilifu kwa kutumia orodha rahisi ya kukagua.",
          text: [
            "Matatizo mengi kazini hutokea wakati wa makabidhiano: mwisho wa zamu, mfanyakazi mwenzako anapokwenda likizo, au kazi inapopewa mtu mwingine. Orodha fupi ya kukagua inazuia mambo yasipotee.",
            "Makabidhiano mazuri yanagusa: Hali (mambo yalivyo sasa), Yasiyokamilika (yasiyomalizika bado), Angalia (hatari au matatizo), Mawasiliano (wa kumpigia), na Hatua zinazofuata (mtu anayefuata afanye nini kwanza).",
            "Unaweza kusema maelezo yako kwenye simu au kuyaandika haraka na kuiomba AI: \"Geuza maelezo haya kuwa makabidhiano yenye sehemu za Hali, Yasiyokamilika, Angalia, Mawasiliano, Hatua zinazofuata.\" Usiweke taarifa binafsi za wateja, wagonjwa au wafanyakazi isipokuwa unatumia mfumo wa kazi ulioidhinishwa."
          ],
          steps: ["Andika au sema maelezo ya haraka mwishoni mwa zamu au kazi.", "Yapange katika Hali, Yasiyokamilika, Angalia, Mawasiliano, Hatua zinazofuata.", "Hakikisha hakuna kinachokosekana.", "Kabidhi na ujibu maswali."],
          words: [["Makabidhiano (handoff)", "kumpa mtu mwingine kazi, pamoja na taarifa anazohitaji."], ["Jambo lisilokamilika", "kitu ambacho bado hakijamalizika."]],
          slides: [
            { title: "Matatizo hutokea wakati wa makabidhiano", bullets: ["Mwisho wa zamu", "Likizo au mapumziko", "Kazi inapopewa mtu mwingine"] },
            { title: "Orodha ya kukagua ya makabidhiano", bullets: ["Hali na yasiyokamilika", "Angalia (hatari)", "Mawasiliano na hatua zinazofuata"] },
            { title: "AI inapanga maelezo yako", bullets: ["Sema au andika maelezo ya haraka", "Omba sehemu tano", "Usiweke taarifa binafsi"] }
          ],
          tryIt: "Andika makabidhiano ya kazi yako ya sasa au ya mwisho (au mfano wa zamu ya ghala) kwa kutumia sehemu tano. Tumia AI kupanga maelezo yako ya haraka na uhakikishe hakuna kinachokosekana.",
          youCanNow: "kukabidhi kazi kikamilifu ili mtu anayefuata ajue cha kufanya.",
          quickCheck: [
            { objective: "O2", q: "Kwa nini makabidhiano ni muhimu?", options: ["Yanarefusha zamu", "Ni ya mameneja tu", "Yanachukua nafasi ya mafunzo", "Matatizo mengi hutokea kazi inapohamia mikono mingine"], answer: 3, why: "Taarifa hupotea kazi inapohamia mikono mingine, kwa hiyo orodha ya kukagua inaiweka kamili." },
            { objective: "O2", q: "Unakabidhi zamu na paleti moja imeinama vibaya. Hilo linaenda wapi?", options: ["Popote; mtu anayefuata ataliona", "Chini ya \"Angalia\" katika makabidhiano yako", "Katika ujumbe kwa rafiki", "Kichwani mwako tu"], answer: 1, why: "Masuala ya usalama na ya kuangalia yanaenda katika makabidhiano ili mtu anayefuata achukue hatua." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Taarifa za maendeleo na kuomba msaada",
          minutes: 4,
          goal: "Tuma taarifa fupi ya maendeleo na uombe msaada mapema na kwa uwazi.",
          text: [
            "Mameneja hupenda kusikia maendeleo kabla hawajauliza. Taarifa ya mistari mitatu inafanya kazi: Nimemaliza (ulichomaliza), Ijayo (unachofanya baadaye), Kizuizi (kinachokuzuia na unachohitaji).",
            "Omba msaada mapema, si siku ya mwisho. Sema ulichojaribu, unachohitaji, na lini: \"Nimejaribu kuwasha upya skana na kukagua waya. Bado haiunganishi. IT wanaweza kuiangalia kabla ya saa 8 mchana (2 pm)?\"",
            "AI inaweza kukusaidia kupata maneno ujumbe unapoonekana mgumu, kama kuomba muda zaidi au kumwambia meneja wako kuhusu kosa. Uwe mkweli na mfupi."
          ],
          steps: ["Andika Nimemaliza, Ijayo, Kizuizi.", "Kwa kila kizuizi, sema ulichojaribu na unachohitaji.", "Ituma kabla hujaulizwa.", "Omba msaada mapema na tarehe ya mwisho iliyo wazi."],
          words: [["Taarifa ya maendeleo (status update)", "ripoti fupi kuhusu maendeleo."], ["Kizuizi (blocked)", "kushindwa kuendelea hadi kitu kirekebishwe au mtu akusaidie."]],
          slides: [
            { title: "Taarifa ya mistari mitatu", bullets: ["Nimemaliza", "Ijayo", "Kizuizi"] },
            { title: "Omba msaada mapema", bullets: ["Ulichojaribu", "Unachohitaji", "Lini"] },
            { title: "Ujumbe mgumu", bullets: ["Kuomba muda zaidi; kuripoti kosa", "AI inasaidia kupata maneno", "Uwe mkweli na mfupi"] }
          ],
          tryIt: "Andika taarifa ya Nimemaliza / Ijayo / Kizuizi ya wiki hii (halisi au mfano). Weka ombi moja la msaada lililo wazi pamoja na ulichojaribu na tarehe ya mwisho.",
          youCanNow: "kutuma taarifa za maendeleo zilizo wazi na kuomba msaada mapema.",
          quickCheck: [
            { objective: "O3", q: "\"Kizuizi\" kina maana gani katika taarifa ya maendeleo?", options: ["Huwezi kuendelea hadi kitu kirekebishwe", "Umemaliza kazi", "Uko mapumzikoni", "Umezuia barua pepe ya mfanyakazi mwenzako"], answer: 0, why: "Kizuizi kinamwambia meneja wako kinachokuzuia ili akusaidie." },
            { objective: "O3", q: "Umekwama kwenye kazi kwa siku moja na inatakiwa kesho. Unafanya nini?", options: ["Kuendelea kujaribu peke yako bila kusema chochote", "Kusubiri hadi baada ya tarehe ya mwisho", "Kuomba msaada sasa, ukisema ulichojaribu, unachohitaji na lini", "Kuiacha kazi hiyo"], answer: 2, why: "Kuomba mapema na maelezo kunawapa wengine muda wa kusaidia kabla ya tarehe ya mwisho." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuwasiliana kwa uwazi",
        questions: [
          { objective: "O1", q: "Jambo kuu linaenda wapi katika ujumbe wa kazi?", options: ["Mwisho", "Mwanzo", "Limefichwa katikati", "Popote"], answer: 1, why: "Wasomaji wenye shughuli nyingi wanaona mstari wa kwanza." },
          { objective: "O1", q: "Kichwa kipi cha barua kiko wazi zaidi?", options: ["\"Vitu\"", "\"Habari\"", "\"Swali\"", "\"Nahitaji mbadala: zamu ya Jumamosi 8-4\""], answer: 3, why: "Kinasema mada na ombi." },
          { objective: "O2", q: "Kipi kinafaa katika makabidhiano?", options: ["Yasiyokamilika na ya kuangalia", "Nywila ya mitandao yako ya kijamii", "Umbea", "Hakuna kitu"], answer: 0, why: "Mtu anayefuata anahitaji hali, hatari na hatua zinazofuata." },
          { objective: "O3", q: "Mistari mitatu ya taarifa ya maendeleo ni ipi?", options: ["Ndiyo, Hapana, Labda", "Habari, Hujambo, Kwaheri", "Nimemaliza, Ijayo, Kizuizi", "Anza, Simama, Pumzika"], answer: 2, why: "Muundo huo unaonyesha maendeleo na mahitaji." },
          { objective: "O3", q: "Unapaswa kuomba msaada lini?", options: ["Kamwe", "Baada ya tarehe ya mwisho tu", "Mapema, ukisema ulichojaribu na tarehe ya mwisho", "Kwa kubahatisha tu"], answer: 2, why: "Maombi ya mapema yanatoa muda wa kurekebisha matatizo." }
        ]
      }
    },
    {
      name: "Sura 2: Kufanya kazi sahihi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kupanga orodha ya kazi: ya haraka dhidi ya muhimu",
          minutes: 5,
          goal: "Panga kazi katika visanduku vinne na uamue cha kufanya kwanza.",
          text: [
            "Kila kitu kinapoonekana cha haraka, kipange. Chora visanduku vinne: Haraka na muhimu (fanya sasa), Muhimu si haraka (ipangie muda), Haraka si muhimu (mpe mtu mwingine au fanya haraka), Si chochote kati ya hivyo (iache au baadaye). Mara nyingi huitwa Eisenhower matrix.",
            "Kazi muhimu zinahusiana na malengo yako au majukumu makuu ya kazi yako: usalama, wateja, na tarehe za mwisho alizoweka meneja wako. Kazi za haraka zina tarehe ya mwisho iliyo karibu au mtu anayesubiri.",
            "Unaweza kubandika orodha yako ya kazi (bila taarifa za siri) kwenye AI na kuiomba ipendekeze visanduku. Kisha amua mwenyewe: wewe unajua meneja wako anatarajia nini. Usipokuwa na uhakika, muulize meneja wako kipi kinatangulia."
          ],
          steps: ["Orodhesha kazi zako zote.", "Jiulize: ni muhimu? Ni ya haraka?", "Weka kila moja katika kimoja cha visanduku vinne.", "Fanya kisanduku 1, panga muda wa kisanduku 2, mpe mtu au fanya haraka kisanduku 3, acha kisanduku 4.", "Usipokuwa na uhakika, muulize meneja wako."],
          words: [["Ya haraka (urgent)", "inahitaji kushughulikiwa karibuni, ina tarehe ya mwisho iliyo karibu au mtu anayesubiri."], ["Muhimu (important)", "inahusiana na majukumu yako makuu au malengo yako."], ["Eisenhower matrix", "njia ya visanduku vinne ya kupanga kazi kwa uharaka na umuhimu."]],
          slides: [
            { title: "Visanduku vinne", bullets: ["Haraka + muhimu: fanya sasa", "Muhimu, si haraka: panga muda", "Haraka, si muhimu: mpe mtu au fanya haraka", "Si chochote: acha au baadaye"] },
            { title: "Kinachofanya kazi kuwa muhimu", bullets: ["Usalama na wateja", "Majukumu makuu na tarehe za mwisho za meneja"] },
            { title: "AI inapendekeza, wewe unaamua", bullets: ["Bandika orodha yako bila taarifa za siri", "Kagua visanduku mwenyewe", "Huna uhakika? Muulize meneja wako"] }
          ],
          tryIt: "Orodhesha angalau kazi kumi za wiki hii. Zipange katika visanduku vinne (omba AI ijaribu kwanza ukipenda), kisha chagua kazi zako tatu za kwanza za kesho.",
          youCanNow: "kupanga orodha ya kazi kwa uharaka na umuhimu na kuchagua cha kufanya kwanza.",
          quickCheck: [
            { objective: "O4", q: "Nini kinafanya kazi kuwa muhimu?", options: ["Mtu aliiomba kwa sauti kubwa", "Inahusiana na majukumu yako makuu, usalama au malengo", "Ni barua pepe mpya zaidi", "Ni rahisi zaidi"], answer: 1, why: "Kazi muhimu zinahusiana na majukumu yako makuu, usalama na malengo." },
            { objective: "O4", q: "Kazi si ya haraka wala si muhimu. Unaifanyia nini?", options: ["Kuifanya kwanza", "Kuipangia asubuhi hii", "Kumwomba mfanyakazi mwenzako aifanye sasa hivi", "Kuiacha au kuifanya baadaye"], answer: 3, why: "Kazi za kisanduku 4 zinaachwa au kufanywa baadaye ili muda uende kwa yaliyo muhimu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kupanga wiki yako kwa vipindi vya muda",
          minutes: 5,
          goal: "Panga wiki kwa kutenga vipindi vya muda kwa kazi muhimu.",
          text: [
            "Orodha ya kazi inasema nini; kalenda inasema lini. Kupanga kwa vipindi vya muda (time blocking) ni kuweka kazi katika saa maalum kwenye kalenda yako, kama \"Jumanne 9-10: kumaliza ripoti ya bidhaa zilizopo\".",
            "Tenga kwanza muda wa kazi muhimu zisizo za haraka, kwa sababu ndizo zinazosukumwa pembeni. Ongeza vipindi vifupi vya barua pepe na ujumbe badala ya kuangalia siku nzima. Acha muda wazi kwa mambo ya ghafla.",
            "Iulize AI: \"Hizi ni zamu zangu na kazi zangu pamoja na muda wa kila moja. Tengeneza mpango wa wiki ijayo wenye vipindi vya muda na muda wa akiba.\" Kisha urekebishe kufaa maisha yako halisi: safari, familia, mapumziko."
          ],
          steps: ["Andika saa zako zisizobadilika: zamu, mikutano, familia.", "Kadiria kila kazi inachukua muda gani.", "Tenga kwanza muda wa kazi muhimu.", "Ongeza vipindi vifupi vya ujumbe na muda wa akiba.", "Omba AI rasimu kisha uirekebishe."],
          words: [["Vipindi vya muda (time blocking)", "kuweka kazi katika saa maalum kwenye kalenda yako."], ["Muda wa akiba (buffer time)", "muda wazi unaoachwa kwa mambo ya ghafla na ucheleweshaji."]],
          slides: [
            { title: "Orodha inasema nini; kalenda inasema lini", bullets: ["\"Jumanne 9-10: kumaliza ripoti ya bidhaa zilizopo\""] },
            { title: "Jinsi ya kutenga vipindi", bullets: ["Kazi muhimu zisizo za haraka kwanza", "Vipindi vifupi vya barua pepe na ujumbe", "Acha muda wa akiba"] },
            { title: "AI inaandika rasimu ya wiki", bullets: ["Toa zamu, kazi na makadirio ya muda", "Rekebisha kwa safari, familia na mapumziko"] }
          ],
          tryIt: "Tengeneza mpango wa wiki ijayo wenye vipindi vya muda pamoja na zamu zako, kazi tatu muhimu, vipindi viwili vya ujumbe na muda wa akiba. Tumia AI kwa rasimu ya kwanza ukipenda.",
          youCanNow: "kupanga wiki kwa vipindi vya muda ili kazi muhimu zifanyike.",
          quickCheck: [
            { objective: "O5", q: "Muda wa akiba ni nini?", options: ["Muda wa kuangalia mitandao ya kijamii", "Muda wa ziada wa mikutano", "Muda wazi katika mpango wako kwa mambo ya ghafla na ucheleweshaji", "Saa za ziada za kazi"], answer: 2, why: "Muda wa akiba unazuia jambo la ghafla lisiharibu mpango wote." },
            { objective: "O5", q: "Mpango wa wiki wa AI unaweka kazi wakati wa zamu yako ya Jumanne. Unafanya nini?", options: ["Kuihamishia muda unaofaa ratiba yako halisi", "Kufuata mpango wa AI hata hivyo", "Kuacha zamu yako", "Kufuta mpango"], answer: 0, why: "AI inaandika rasimu ya mpango, lakini wewe unaurekebisha kufaa maisha yako halisi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kutumia AI kama msaidizi, si mbadala",
          minutes: 5,
          goal: "Tumia AI kwa sehemu zinazofaa za kazi yako na uamuzi wako ubaki ukiongoza.",
          text: [
            "AI inasaidia zaidi kwa rasimu za kwanza, kupanga maelezo, kufupisha, na kupata maneno kwa ujumbe mgumu. Haijui mahali pako pa kazi, wafanyakazi wenzako au meneja wako alimaanisha nini hasa, na inaweza kukosea.",
            "Tabia nzuri: ipe maelezo yako, si fikra zako; omba rasimu fupi; kagua kila ukweli; ifanye isikike kama wewe; fuata sheria za AI za mahali pa kazi; usiweke taarifa za siri na binafsi.",
            "Fuatilia jambo moja: muda uliookoa. Zana ikikuokolea dakika 20 kwa siku kwa ujumbe, huo ni muda wa sehemu ya kazi yako inayohusu watu, ndipo unapojitokeza zaidi."
          ],
          steps: ["Tumia AI kwa rasimu, kupanga na muhtasari.", "Kagua ukweli na uifanye isikike kama wewe.", "Fuata sheria za AI za mahali pa kazi.", "Andika muda unaookoa kila wiki."],
          words: [["Uamuzi (judgment)", "uwezo wako wa kuamua vizuri ukitumia unachojua."]],
          slides: [
            { title: "AI ni hodari wa", bullets: ["Rasimu za kwanza", "Kupanga maelezo na kufupisha", "Maneno kwa ujumbe mgumu"] },
            { title: "Tabia nzuri", bullets: ["Kagua kila ukweli", "Ifanye isikike kama wewe", "Fuata sheria; usiweke taarifa binafsi"] },
            { title: "Muda uliookolewa = muda wa watu", bullets: ["Fuatilia dakika ulizookoa", "Zitumie pale unapojitokeza zaidi"] }
          ],
          tryIt: "Kazi ya mwisho: tengeneza kifurushi chako cha wiki moja: ujumbe mmoja wenye jambo kuu kwanza, makabidhiano moja, taarifa moja ya Nimemaliza/Ijayo/Kizuizi, orodha ya kazi ya visanduku vinne na wiki yenye vipindi vya muda. Tumia AI kuandika rasimu ya angalau viwili na ukague kila ukweli.",
          youCanNow: "kuwasiliana kwa uwazi na kusimamia muda wako kazini ukiwa na AI kama msaidizi.",
          quickCheck: [
            { objective: "O6", q: "AI ni hodari kwa sehemu gani ya kazi yako?", options: ["Kuamua kipi ni muhimu zaidi", "Kumtuliza mteja aliyekasirika", "Kujua tarehe halisi ya mwisho ya meneja wako", "Rasimu za kwanza na kupanga maelezo"], answer: 3, why: "AI inasaidia kwa rasimu na kupanga; uamuzi na kazi ya watu vinabaki kwako." },
            { objective: "O6", q: "Unataka AI isafishe maelezo yenye jina la mgonjwa. Unafanya nini?", options: ["Kuyabandika kwenye AI yoyote ya bure", "Kutumia zana iliyoidhinishwa tu, au kuondoa taarifa binafsi kwanza", "Kuyaweka mtandaoni", "Kumtumia rafiki kwa barua pepe ayarekebishe"], answer: 1, why: "Sheria za mahali pa kazi zinakuja kwanza: zana zilizoidhinishwa tu, na taarifa za siri hazitolewi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kufanya kazi sahihi",
        questions: [
          { objective: "O4", q: "Kazi ni muhimu lakini si ya haraka. Unafanya nini?", options: ["Kuipangia muda", "Kuiacha", "Kuifanya papo hapo kila mara", "Kumpa mteja"], answer: 0, why: "Kupanga muda kunalinda kazi muhimu." },
          { objective: "O4", q: "Kazi ipi ni ya haraka na muhimu?", options: ["Kubadilisha picha ya skrini yako", "Kupanga barua pepe za zamani", "Kusoma jarida", "Hatari ya usalama sakafuni sasa hivi"], answer: 3, why: "Usalama sasa hivi ni wa haraka na muhimu pia." },
          { objective: "O5", q: "Kupanga kwa vipindi vya muda ni nini?", options: ["Kuwazuia wafanyakazi wenzako", "Kuweka kazi katika saa maalum kwenye kalenda yako", "Kuzima simu yako milele", "Mchezo"], answer: 1, why: "Inapanga lini utafanya kazi." },
          { objective: "O5", q: "Kwa nini uache muda wa akiba?", options: ["Kwa mambo ya ghafla na ucheleweshaji", "Kulala kidogo", "Kwa sababu AI inasema hivyo", "Hauna faida"], answer: 0, why: "Mambo ya ghafla hutokea kila mara." },
          { objective: "O6", q: "Rasimu ya AI inasema meneja wako anataka ripoti Ijumaa, lakini yeye alisema Jumatano. Unafanya nini?", options: ["Kutuma tarehe zote mbili", "Kuiamini AI", "Kuirekebisha iwe Jumatano", "Kupuuza"], answer: 2, why: "Wewe unakagua ukweli; AI haijui kilichosemwa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Mawasiliano na Tija Kazini",
    questions: [
      { objective: "O1", q: "Kwa nini uweke jambo kuu kwanza?", options: ["Ni sheria", "Watu wenye shughuli nyingi husoma mstari wa kwanza na kupitia mengine haraka", "Unaurefusha", "Unaficha jambo kuu"], answer: 1, why: "Mistari ya kwanza ndiyo husomwa." },
      { objective: "O1", q: "Ujumbe mzuri wa kazi una:", options: ["Umbea", "Kila jambo unalojua", "Nywila yako", "Unachohitaji na lini"], answer: 3, why: "Ombi lililo wazi lenye tarehe ya mwisho linaleta hatua." },
      { objective: "O1", q: "Ujumbe mmoja unapaswa kuhusu:", options: ["Kila kitu cha mwezi huu", "Mambo kumi", "Hakuna jambo", "Jambo moja"], answer: 3, why: "Jambo moja linaufanya uwe wazi." },
      { objective: "O2", q: "Ipi ni sehemu ya makabidhiano?", options: ["Chakula unachopenda", "Angalia", "Mipango ya wikendi", "Orodha ya nywila"], answer: 1, why: "Angalia inaorodhesha hatari." },
      { objective: "O2", q: "Makabidhiano ni muhimu kwa sababu:", options: ["Si ya lazima", "Yanafurahisha", "Matatizo mengi hutokea kazi inapohamia mikono mingine", "Yanachukua nafasi ya mafunzo"], answer: 2, why: "Mapengo katika makabidhiano husababisha makosa." },
      { objective: "O2", q: "Ukitumia AI kupanga maelezo ya makabidhiano, usiweke:", options: ["Taarifa binafsi za mteja au mgonjwa, isipokuwa unatumia mfumo ulioidhinishwa", "Yasiyokamilika", "Hatua zinazofuata", "Nafasi za watu wa kuwasiliana nao"], answer: 0, why: "Taarifa binafsi zinabaki zimelindwa." },
      { objective: "O3", q: "\"Kizuizi\" katika taarifa ya maendeleo kina maana:", options: ["Uko mapumzikoni", "Umemaliza", "Huwezi kuendelea hadi kitu kirekebishwe", "Akaunti yako imefungwa"], answer: 2, why: "Kinaonyesha unachohitaji." },
      { objective: "O3", q: "Ombi zuri la msaada linasema:", options: ["Ulichojaribu, unachohitaji, na lini", "\"Msaada!\" tu", "Hakuna kitu", "Kosa ni la nani"], answer: 0, why: "Maombi yaliyo wazi yanapata msaada haraka zaidi." },
      { objective: "O3", q: "Taarifa ya maendeleo inafaa zaidi kutumwa:", options: ["Kamwe", "Kabla meneja wako hajauliza", "Baada ya matatizo tu", "Mara moja kwa mwaka"], answer: 1, why: "Taarifa za mapema zinajenga uaminifu." },
      { objective: "O4", q: "Kazi za kisanduku 4 (si za haraka, si muhimu) zinapaswa:", options: ["Kufanywa kila saa", "Kufanywa kwanza", "Kupewa mkurugenzi mkuu", "Kuachwa au kufanywa baadaye"], answer: 3, why: "Zinaongeza thamani ndogo." },
      { objective: "O4", q: "Kazi muhimu zinahusiana na:", options: ["Majukumu yako makuu, usalama na malengo", "Vipindi unavyopenda kutazama", "Barua pepe za kubahatisha", "Hakuna kitu"], answer: 0, why: "Umuhimu una maana inahusu nafasi yako kazini." },
      { objective: "O4", q: "Usipokuwa na uhakika kazi ipi inatangulia, unapaswa:", options: ["Kuiacha AI iamue peke yake", "Kubahatisha", "Kutofanya chochote", "Kumuuliza meneja wako"], answer: 3, why: "Meneja wako anajua vipaumbele." },
      { objective: "O5", q: "Kazi zipi unapaswa kuzitengea muda kwenye kalenda kwanza?", options: ["Mitandao ya kijamii", "Zisizo muhimu zaidi", "Muhimu zisizo za haraka", "Hakuna"], answer: 2, why: "Ndizo zinazosukumwa pembeni." },
      { objective: "O5", q: "Badala ya kuangalia barua pepe siku nzima, unaweza:", options: ["Kutosoma barua pepe kamwe", "Kutumia vipindi vifupi vya ujumbe", "Kuangalia kila dakika", "Kupeleka kila kitu kwa wengine"], answer: 1, why: "Vipindi vinalinda muda wa kuzingatia kazi." },
      { objective: "O5", q: "Baada ya AI kuandika rasimu ya mpango wako wa wiki, wewe:", options: ["Unaupuuza", "Unaufuata kama ulivyo", "Unafuta kalenda yako", "Unaurekebisha kufaa maisha yako halisi"], answer: 3, why: "Wewe unajua safari zako, familia na mapumziko." },
      { objective: "O6", q: "AI ni hodari wa:", options: ["Kuwajua wafanyakazi wenzako", "Kujua meneja wako alimaanisha nini", "Rasimu za kwanza na kupanga maelezo", "Kuwa sahihi kila wakati"], answer: 2, why: "Kuandika rasimu na kupanga ni nguvu zake." },
      { objective: "O6", q: "Kabla ya kutuma rasimu ya AI, kila mara:", options: ["Kagua kila ukweli", "Ongeza maandishi zaidi ya AI", "Ondoa jina lako", "Ituma bila kuisoma"], answer: 0, why: "AI inaweza kukosea." },
      { objective: "O6", q: "Muda uliookolewa kwa AI unatumika vizuri zaidi kwa:", options: ["Kutofanya chochote", "Sehemu ya kazi yako inayohusu watu", "Muda zaidi wa kuangalia skrini", "Hakuna kitu"], answer: 1, why: "Kazi ya kibinadamu ndipo unapojitokeza." },
      { objective: "O6", q: "Kipi kinafuata sheria za AI za mahali pa kazi?", options: ["Kutumia app yoyote", "Kutumia zana zilizoidhinishwa tu na kuzuia taarifa za siri", "Kubandika taarifa za wateja", "Kushirikisha nywila"], answer: 1, why: "Sheria zinakulinda wewe na mwajiri wako." },
      { objective: "O3", q: "Mstari wa \"Ijayo\" katika taarifa unamwambia meneja wako:", options: ["Unachofanya baadaye", "Mipango yako ya chakula cha mchana", "Likizo yako ijayo", "Hakuna kitu"], answer: 0, why: "Unaonyesha mpango wako." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 6, 7, 9, 12, 14, 16, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Ujumbe wenye jambo kuu kwanza", objective: "O1", notYet: "Jambo kuu au ombi limefichwa au halipo.", meets: "Jambo kuu liko mwanzoni, pamoja na ombi lililo wazi na tarehe ya mwisho, kuhusu jambo moja.", exceeds: "Una kichwa cha barua kilicho wazi, na ujumbe uko chini ya maneno 100." },
      { name: "Makabidhiano kamili", objective: "O2", notYet: "Sehemu moja au zaidi kati ya tano haipo.", meets: "Sehemu zote tano, pamoja na yasiyokamilika na ya kuangalia.", exceeds: "Kila jambo lisilokamilika linasema nani atalishughulikia baadaye." },
      { name: "Taarifa ya maendeleo", objective: "O3", notYet: "Inakosa Nimemaliza, Ijayo au Kizuizi.", meets: "Taarifa ya Nimemaliza / Ijayo / Kizuizi yenye ombi moja la msaada lililo wazi.", exceeds: "Ombi la msaada linasema kilichojaribiwa na kinahitajika lini." },
      { name: "Orodha ya visanduku vinne na vipindi vya muda", objective: "O5", notYet: "Kazi hazijapangwa, au wiki haina vipindi vya muda.", meets: "Kazi kumi katika visanduku vinne na wiki yenye zamu, kazi tatu muhimu, vipindi vya ujumbe na muda wa akiba.", exceeds: "Kazi muhimu zisizo za haraka zimetengewa muda kwanza." },
      { name: "AI imekaguliwa", objective: "O6", notYet: "Rasimu za AI zilitumwa bila kukaguliwa, au taarifa binafsi zilitumika.", meets: "AI ilisaidia kuandika rasimu ya angalau vitu viwili, na kila ukweli ulikaguliwa.", exceeds: "Mwanafunzi anaandika ukweli mmoja aliourekebisha." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoripoti kutumia ujumbe wenye jambo kuu kwanza na taarifa za maendeleo kazini siku 30 baadaye (utafiti wa kufuatilia)",
      "Wasimamizi wanaoripoti makabidhiano machache yaliyopoteza mambo au tarehe za mwisho chache zilizopitwa",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya nguvu kazi ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja au kompyuta",
      "Msaidizi wa AI wa bure: ChatGPT, Microsoft Copilot au Google Gemini, au zana ambayo mahali pa kazi pameidhinisha",
      "Kalenda ya simu au shajara ya karatasi",
      "Mifano ya ujumbe, maelezo ya makabidhiano na orodha za kazi bila taarifa binafsi",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Tumia mifano kutoka fani za wanafunzi wenyewe (maduka, maghala, wasaidizi wa huduma za afya, ofisi) ili miundo ionekane halisi.",
      "Fanyeni mazoezi ya makabidhiano wawili wawili: mmoja anakabidhi, mwingine anakagua sehemu tano.",
      "Wakumbushe wanafunzi wa huduma za afya na huduma kwa wateja kwamba taarifa za wagonjwa na wateja haziwekwi katika zana za AI zisizoidhinishwa.",
      "Wafanyakazi wa zamu huenda hawaamui ratiba zao; wasaidie kutenga muda ambao wanaweza kuuamua.",
      "Pima kifurushi cha wiki moja kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};

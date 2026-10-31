"use strict";

// Koach Learn course (Swahili translation of entrepreneurs/entrepreneurs-ai-sales-cx.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "entrepreneurs-ai-sales-cx-sw",
  lang: "sw",
  translationOf: "entrepreneurs-ai-sales-cx",
  category: "Entrepreneurs",
  name: "AI kwa Mauzo na Huduma kwa Wateja",
  skills: "Kuchuja wateja watarajiwa, Kuandika ujumbe binafsi wa kuwafikia wateja, Kujiandaa kwa mazungumzo ya mauzo, Kutengeneza orodha ya maswali ya wateja (FAQ), Kushughulikia malalamiko, Kujifunza kutokana na maoni ya wateja",
  outcome: "kutumia AI kupata na kuchuja wateja watarajiwa, kuandika ujumbe binafsi wa kuwafikia unaofuata sheria, kujiandaa kwa mazungumzo ya mauzo, na kutengeneza FAQ ya wateja na mwongozo wa kujibu malalamiko unaowafanya wateja waridhike.",
  about: [
    "Mauzo na huduma kwa wateja ndivyo vinavyoamua kama biashara itakua. Kozi hii ni kwa wamiliki wanaouza wenyewe na kuwahudumia wateja wenyewe, na wanataka kufanya yote mawili vizuri zaidi na haraka zaidi kwa msaada wa AI.",
    "Katika Sura 1 utatumia AI kueleza unamuuzia nani, kupanga wateja watarajiwa, kuandika ujumbe binafsi (si spam), na kujiandaa kwa simu ya mauzo pamoja na majibu kwa pingamizi za kawaida. Katika Sura 2 utatengeneza FAQ ya wateja, utajifunza njia tulivu ya kujibu malalamiko, na utatumia AI kuona mifumo katika maoni ya wateja.",
    "Kila somo linachukua kama dakika tano na lina kazi ya kufanya kwa biashara yako halisi. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Sheria za simu, ujumbe mfupi na barua pepe zinaelezwa kwa maneno rahisi; huu si ushauri wa kisheria."
  ],
  finalTask: "Tengeneza kifurushi cha mauzo na huduma kwa biashara yako: orodha fupi ya wateja watarajiwa 10 waliochujwa pamoja na sababu kwa kila mmoja, ujumbe binafsi miwili wa kuwafikia, mwongozo wa simu wa ukurasa mmoja wenye majibu kwa pingamizi zako tatu zinazojitokeza zaidi, FAQ ya wateja ya maswali 10, na kiolezo cha kujibu malalamiko. Vyote viwe vimekaguliwa ukweli wake na visiwe na taarifa binafsi za wateja katika zana yoyote ya AI.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wamiliki wa biashara ndogo nchini Marekani wanaouza wenyewe na kuwahudumia wateja wenyewe, kama watoa huduma, maduka na wanaouza kwa biashara nyingine (B2B).",
    startingPoint: "Wanaongea na wateja kila siku na kujibu maswali kwa simu, barua pepe au ujumbe mfupi. Wachache wana orodha ya wateja watarajiwa, mwongozo wa simu, FAQ au njia maalum ya kujibu malalamiko, na wengi hawana uhakika na sheria za kuwafikia wateja.",
    gap: "Wamiliki wanapoteza muda kwa wateja watarajiwa ambao hawatanunua, wanatuma ujumbe wa jumla unaovunja sheria za barua pepe, simu au ujumbe mfupi, na wanashughulikia malalamiko kwa njia zinazowapoteza wateja. Wanahitaji kutumia AI kulenga mauzo yao, kuwafikia wateja kibinafsi na kwa mujibu wa sheria, na kuwajibu wateja kwa utulivu na kwa njia moja inayoeleweka.",
    constraints: [
      "Maneno rahisi; sheria zinaelezwa kwa urahisi na si kama ushauri wa kisheria",
      "Vifaa: simu au kompyuta yenye msaidizi wa AI wa bure na barua pepe",
      "Muda: kama dakika tano kwa kila somo pamoja na kazi kwa wateja halisi wa mmiliki",
      "Sheria za barua pepe, simu na ujumbe mfupi zinatumika (CAN-SPAM, ridhaa ya TCPA), hata kwa sauti za AI",
      "Hakuna majina ya wateja, mawasiliano yao wala taarifa binafsi katika zana yoyote ya AI"
    ],
    prerequisites: "\"Utangulizi wa AI kwa Wajasiriamali\". Kozi \"Masoko na Kutengeneza Maudhui kwa AI\" inasaidia kueleza mteja bora."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa wateja watarajiwa 15 kutoka taarifa za umma na mtandao wako wa watu", action: "kuwapa alama kwa tatizo, pesa, uamuzi na wakati, na kuchagua 10 bora", standard: "ukiwa na sababu iliyoandikwa kwa kila mmoja" },
    { id: "O2", condition: "Ukipewa wateja watarajiwa wawili kutoka orodha yako", action: "kuandika ujumbe mfupi na binafsi wa kuwafikia unaofuata sheria za Marekani za barua pepe, simu na ujumbe mfupi", standard: "kila mmoja ukiwa na jambo halisi kuhusu mteja huyo, anwani yako na mstari wa kujiondoa" },
    { id: "O3", condition: "Kabla ya mazungumzo ya mauzo", action: "kutengeneza mwongozo wa simu wa ukurasa mmoja wenye maswali matano ya wazi na majibu kwa pingamizi zako tatu zinazojitokeza zaidi", standard: "kila jibu likiwa la kweli na limefanyiwa mazoezi mara moja katika igizo na AI" },
    { id: "O4", condition: "Ukipewa angalau maswali kumi halisi ya wateja yaliyoondolewa majina", action: "kutengeneza FAQ ya maswali 10 yenye majibu yaliyoandikwa kutokana na ukweli wako mwenyewe", standard: "kila jibu likiwa limekaguliwa" },
    { id: "O5", condition: "Ukipewa lalamiko halisi au la kubuni", action: "kuchagua suluhisho la haki na kuandika jibu tulivu lenye shukrani, samahani, suluhisho na lini", standard: "suluhisho likiamuliwa na wewe, si AI" },
    { id: "O6", condition: "Ukipewa angalau maoni 20 ya wateja", action: "kutumia AI kupata mada kuu na kuchagua uboreshaji mmoja", standard: "baada ya kukagua hesabu za AI wewe mwenyewe" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuuza kwa AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kupata na kuchuja wateja watarajiwa",
          minutes: 5,
          goal: "Tengeneza orodha fupi ya wateja watarajiwa na uamue ni wapi wana uwezekano mkubwa wa kununua.",
          text: [
            "Mteja mtarajiwa (lead) ni mtu au biashara inayoweza kununua kutoka kwako. Kuchuja maana yake ni kuamua ni wateja watarajiwa wapi wanastahili muda wako. Kipimo rahisi: Je, wana tatizo unalotatua? Wanaweza kulipa? Wanaweza kuamua? Wanalihitaji hivi karibuni?",
            "AI inaweza kukusaidia kufikiria wateja wako watarajiwa wanapatikana wapi (\"Ukumbi mdogo wa mazoezi (gym) katika mji wangu hutafuta wapi huduma za usafi?\") na kupanga orodha uliyonayo tayari. Eleza kila mteja mtarajiwa kwa maneno ya jumla na uiombe AI iwapange kwa maswali hayo manne.",
            "Tumia taarifa za umma za biashara, si taarifa binafsi za watu. Usinunue orodha za mawasiliano wala kuvuna (scrape) taarifa binafsi; mara nyingi zimepitwa na wakati na zinaweza kuvunja sheria za faragha na za masoko."
          ],
          steps: ["Andika wateja wako bora wa zamani walikuwa nani.", "Iulize AI biashara au watu wanaofanana nao wanapatikana wapi.", "Orodhesha wateja watarajiwa 15 hadi 20 kutoka vyanzo vya umma na mtandao wako wa watu.", "Mpe kila mmoja alama kwa tatizo, pesa, uamuzi na wakati.", "Baki na 10 bora, kila mmoja na sababu ya mstari mmoja."],
          words: [["Mteja mtarajiwa (lead)", "mtu au biashara inayoweza kununua kutoka kwako."], ["Kuchuja (qualify)", "kuamua kama mteja mtarajiwa ana uwezekano wa kununua na anastahili muda wako."]],
          slides: [
            { title: "Mteja mtarajiwa anaweza kununua", bullets: ["Kuchuja = je, anastahili muda wako?", "Tatizo, pesa, uamuzi, wakati"] },
            { title: "AI inavyosaidia", bullets: ["Kufikiria wateja watarajiwa wanapatikana wapi", "Kupanga orodha yako kwa maswali manne"] },
            { title: "Fanya kwa usafi", bullets: ["Tumia taarifa za umma za biashara", "Hakuna orodha zilizonunuliwa wala taarifa binafsi zilizovunwa"] }
          ],
          tryIt: "Orodhesha wateja watarajiwa 15, wape alama kwa tatizo, pesa, uamuzi na wakati kwa msaada wa AI, na baki na 10 bora pamoja na sababu kwa kila mmoja.",
          youCanNow: "kupata wateja watarajiwa na kulenga wale wenye uwezekano mkubwa wa kununua.",
          quickCheck: [
            { objective: "O1", q: "Mteja mtarajiwa aliyechujwa ni yupi?", options: ["Mtu mwenye tatizo, pesa, mamlaka ya kuamua na hitaji la karibu", "Yeyote ambaye unaweza kupata barua pepe yake", "Rafiki anayependa machapisho yako", "Biashara ya fani nyingine"], answer: 0, why: "Wateja watarajiwa waliochujwa wanatimiza maswali manne: tatizo, pesa, uamuzi na wakati." },
            { objective: "O1", q: "Mteja mtarajiwa anapenda wazo lako lakini hana bajeti hadi mwaka ujao. Unafanya nini?", options: ["Unamweka juu kabisa ya orodha yako", "Unampa alama ndogo kwa pesa na wakati na kumfuatilia baadaye", "Unamfuta milele", "Unamtumia ujumbe kumi"], answer: 1, why: "Alama zinakusaidia kulenga wale wanaoweza kununua sasa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuandika ujumbe binafsi wa kuwafikia wateja, si spam",
          minutes: 5,
          goal: "Andika ujumbe mfupi na binafsi wa kwanza unaofuata sheria za Marekani za barua pepe, simu na ujumbe mfupi.",
          text: [
            "Ujumbe mzuri wa kuwafikia wateja ni mfupi na unawahusu wao: ulichoona kuhusu biashara yao, tatizo unaloweza kusaidia, na hatua moja rahisi inayofuata. Iulize AI: \"Andika barua pepe ya kwanza ya maneno 70 kwa mmiliki wa gym ndogo. Taja kwamba maoni ya wateja wao yanasema vyumba safi vya kubadilishia nguo ni muhimu. Toa ziara ya bure ya dakika 15. Bila kujisifu kupita kiasi.\" Kisha ongeza jambo moja ambalo wewe tu unalijua.",
            "Kwa barua pepe za kibiashara, sheria ya CAN-SPAM inataka mistari ya From (Kutoka) na kichwa iwe ya kweli, anwani yako halisi ya mahali, na njia wazi ya kujiondoa (opt out), na maombi ya kujiondoa yatekelezwe ndani ya siku 10 za kazi.",
            "Simu na ujumbe mfupi zina sheria kali zaidi. Ujumbe mfupi wa masoko na simu za kurekodiwa (robocalls) kwa kawaida zinahitaji ridhaa ya mtu kwanza, na mwaka 2024 FCC (mamlaka ya mawasiliano ya Marekani) iliamua kwamba sauti zinazotengenezwa na AI zinahesabiwa kama sauti \"bandia\" chini ya sheria ya Telephone Consumer Protection Act. Usitumie simu za sauti ya AI wala ujumbe mfupi wa wingi bila ridhaa, na kagua fcc.gov au wakili kabla ya kuanza."
          ],
          steps: ["Andika jambo moja halisi kuhusu mteja mtarajiwa kutoka taarifa za umma.", "Iombe AI ujumbe mfupi: hali yake, msaada wako, hatua moja inayofuata.", "Ongeza jambo binafsi na ukague kila ukweli.", "Kwa barua pepe, weka anwani yako na mstari wa kujiondoa.", "Usimtumie mtu ujumbe mfupi wala simu ya AI bila ridhaa yake."],
          words: [["Kuwafikia wateja (outreach)", "kuwasiliana na mteja mtarajiwa wewe kwanza."], ["CAN-SPAM Act", "sheria ya Marekani yenye kanuni za barua pepe za kibiashara."], ["TCPA", "Telephone Consumer Protection Act: sheria ya Marekani inayozuia simu na ujumbe mfupi wa masoko bila ridhaa."]],
          slides: [
            { title: "Mfupi na unaowahusu wao", bullets: ["Ulichoona", "Tatizo unalotatua", "Hatua moja rahisi inayofuata"] },
            { title: "Sheria za barua pepe (CAN-SPAM)", bullets: ["Mistari ya From na kichwa iwe ya kweli", "Anwani yako halisi ya mahali", "Kujiondoa kutekelezwe ndani ya siku 10 za kazi"] },
            { title: "Simu na ujumbe mfupi", bullets: ["Ujumbe wa masoko na robocalls kwa kawaida zinahitaji ridhaa", "Sauti za AI ni sauti bandia (FCC 2024)", "Kagua fcc.gov au wakili kwanza"] }
          ],
          sources: [{ name: "FTC (mamlaka ya biashara ya Marekani): Mwongozo wa kufuata CAN-SPAM Act kwa biashara", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }, { name: "FCC: Uamuzi kuhusu sauti za AI katika robocalls (2024)", url: "https://www.fcc.gov/document/fcc-makes-ai-generated-voices-robocalls-illegal" }],
          tryIt: "Andika barua pepe mbili binafsi za kuwafikia wateja watarajiwa kutoka orodha yako kwa msaada wa AI. Ongeza jambo halisi kwa kila moja, na hakikisha zina anwani yako na mstari wa kujiondoa.",
          youCanNow: "kuandika ujumbe binafsi wa kuwafikia wateja unaoheshimu sheria za barua pepe, simu na ujumbe mfupi.",
          quickCheck: [
            { objective: "O2", q: "Barua pepe ya kibiashara lazima iwe na nini chini ya CAN-SPAM?", options: ["Punguzo la bei", "Picha yako", "Njia ya kujiondoa", "Namba ya simu ya nyumbani kwako"], answer: 2, why: "Barua pepe za kibiashara lazima zitoe njia ya kujiondoa." },
            { objective: "O2", q: "AI inaandika barua pepe ambayo ingeweza kutumwa kwa mtu yeyote. Unafanya nini?", options: ["Unaituma kwa kila mtu", "Unairefusha", "Unaongeza maneno zaidi ya mauzo", "Unaongeza jambo halisi ulilogundua kuhusu mteja huyu"], answer: 3, why: "Jambo halisi linaufanya ujumbe kuwa binafsi, si spam." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kujiandaa kwa mazungumzo ya mauzo",
          minutes: 5,
          goal: "Tengeneza mwongozo wa simu wa ukurasa mmoja wenye maswali na majibu kwa pingamizi za kawaida.",
          text: [
            "Mazungumzo ya mauzo kwa sehemu kubwa ni kusikiliza. Andaa maswali matano mazuri kuhusu hali ya mteja, tatizo lake na malengo yake, kisha eleza unavyosaidia kwa maneno yake mwenyewe.",
            "Pingamizi ni sababu watu wanazotoa za kutonunua: \"Ni ghali mno.\" \"Nahitaji kufikiria.\" \"Tayari tuna mtu.\" Iulize AI: \"Orodhesha pingamizi tano zinazojitokeza zaidi kwa [huduma] na utoe jibu tulivu na la kweli kwa kila moja.\" Yahariri ili yasikike kama wewe na yawe ya kweli.",
            "Fanya igizo na AI: \"Jifanye wewe ni mmiliki wa gym mwenye shughuli nyingi ambaye hana uhakika kuhusu kuajiri huduma ya usafi. Niulize maswali magumu.\" Fanya mazoezi hadi uweze kujibu bila kusoma."
          ],
          steps: ["Andika maswali matano ya wazi kuhusu hali na malengo ya mteja.", "Iombe AI pingamizi za kawaida na majibu ya kweli.", "Hariri majibu ili yawe ya kweli na yasikike kama wewe.", "Fanya igizo la mazungumzo na AI.", "Weka vyote kwenye ukurasa mmoja."],
          words: [["Pingamizi", "sababu ambayo mteja anatoa ya kutonunua bado."], ["Igizo (role-play)", "kufanya mazoezi ya mazungumzo kwa kuyaigiza."], ["Swali la wazi", "swali lisiloweza kujibiwa kwa ndiyo au hapana tu."]],
          slides: [
            { title: "Kwa sehemu kubwa ni kusikiliza", bullets: ["Maswali matano ya wazi", "Hali yake, tatizo, malengo", "Eleza msaada wako kwa maneno yake"] },
            { title: "Jiandae kwa pingamizi", bullets: ["\"Ni ghali mno\"", "\"Nahitaji kufikiria\"", "\"Tayari tuna mtu\""] },
            { title: "Fanya mazoezi na AI", bullets: ["Iombe AI iigize mteja mwenye shaka", "Jibu kwa sauti", "Rudia hadi uhisi ni kawaida"] }
          ],
          tryIt: "Tengeneza mwongozo wako wa simu wa ukurasa mmoja: maswali matano ya wazi na majibu ya kweli kwa pingamizi zako tatu zinazojitokeza zaidi. Fanya igizo mara moja na AI.",
          youCanNow: "kujiandaa kwa mazungumzo ya mauzo na kuyafanyia mazoezi na AI.",
          quickCheck: [
            { objective: "O3", q: "Swali la wazi ni lipi?", options: ["Lisiloweza kujibiwa kwa ndiyo au hapana tu", "Swali kuhusu bei tu", "Swali unaloiuliza AI", "Swali lisilo na jibu"], answer: 0, why: "Maswali ya wazi yanamfanya mteja aongee kuhusu mahitaji yake." },
            { objective: "O3", q: "Jibu la AI kwa pingamizi \"Nahitaji kufikiria\" linasikika la kulazimisha. Unafanya nini?", options: ["Unalitumia kama lilivyo", "Unalihariri ili liwe la kweli na lisikike kama wewe", "Unaacha mwongozo wa simu", "Unalisoma neno kwa neno kwa kasi zaidi"], answer: 1, why: "Unahariri majibu ya AI yawe ya kweli na kwa sauti yako mwenyewe." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuuza kwa AI",
        questions: [
          { objective: "O1", q: "Mteja mtarajiwa yupi amechujwa vizuri zaidi?", options: ["Mtu asiyehitaji huduma yako", "Biashara yenye tatizo, bajeti, mwenye mamlaka ya kuamua na hitaji la karibu", "Anwani ya barua pepe ya kubahatisha", "Mshindani"], answer: 1, why: "Inapita maswali yote manne ya kuchuja." },
          { objective: "O1", q: "Taarifa za wateja wako watarajiwa zinapaswa kutoka wapi?", options: ["Mafaili binafsi ya wateja", "Taarifa binafsi zilizovunwa", "Orodha iliyonunuliwa ya watu usiowajua", "Taarifa za umma za biashara na mtandao wako wa watu"], answer: 3, why: "Taarifa za umma zinaepuka matatizo ya faragha na masoko." },
          { objective: "O2", q: "Ujumbe mzuri wa kwanza wa kumfikia mteja ni:", options: ["Mfupi, unaomhusu yeye, na hatua moja rahisi inayofuata", "Mrefu na wote unakuhusu wewe", "Ulionakiliwa kwa watu 1,000 bila kubadilishwa", "Uliojaa ahadi za \"uhakika\""], answer: 0, why: "Ujumbe binafsi na mfupi unapata majibu." },
          { objective: "O2", q: "Je, unaweza kutuma robocalls za sauti ya AI kwa watu ambao hawajawahi kutoa ridhaa?", options: ["Ndiyo, wikendi", "Ndiyo, sauti za AI hazihusiki", "Hapana, sheria za ridhaa zinahusu sauti za AI pia", "Kwa biashara za majimbo mengine tu"], answer: 2, why: "FCC inahesabu sauti za AI kama sauti bandia chini ya TCPA." },
          { objective: "O3", q: "Mteja anasema \"Ni ghali mno.\" Hii inaitwa:", options: ["Kichocheo", "Mteja mtarajiwa", "Pingamizi", "Kurudishiwa pesa"], answer: 2, why: "Pingamizi ni sababu za kutonunua bado." }
        ]
      }
    },
    {
      name: "Sura 2: Kuwafanya wateja waridhike",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kutengeneza FAQ ya wateja",
          minutes: 5,
          goal: "Tengeneza FAQ ya maswali 10 kutokana na maswali ambayo wateja wanauliza kweli.",
          text: [
            "Wateja wanauliza maswali yale yale tena na tena. Ukurasa au hati ya maswali yanayoulizwa mara kwa mara (FAQ) inakuokolea muda na inawasaidia wateja kuamua haraka zaidi.",
            "Kusanya maswali halisi kutoka barua pepe, ujumbe na simu kwa wiki mbili (ondoa majina na mawasiliano). Iombe AI iyapange katika makundi na iandike majibu wazi na mafupi ikitumia tu ukweli unaoipa: bei, saa za kazi, eneo, sera.",
            "Kagua kila jibu. Kisha tumia FAQ kwenye tovuti yako, katika majibu yako yaliyohifadhiwa, na kama ukweli kwa chatbot yoyote. Ukitumia chatbot, waambie wateja kwamba ni ya kiotomatiki na wape njia rahisi ya kumfikia mtu."
          ],
          steps: ["Kusanya maswali ya wateja kwa wiki mbili, bila majina wala mawasiliano.", "Iombe AI iyapange katika makundi na ichague 10 ya juu.", "Ipe AI ukweli wako halisi na uiombe majibu mafupi.", "Kagua kila jibu.", "Chapisha FAQ na uitumie katika majibu."],
          words: [["FAQ", "frequently asked questions (maswali yanayoulizwa mara kwa mara): orodha ya maswali ya kawaida pamoja na majibu."], ["Chatbot", "programu ya kiotomatiki inayojibu ujumbe wa wateja."]],
          slides: [
            { title: "Maswali yale yale, kila wiki", bullets: ["FAQ inakuokolea muda", "Inawasaidia wateja kuamua haraka zaidi"] },
            { title: "Itengeneze kutokana na maswali halisi", bullets: ["Kusanya kwa wiki mbili, bila majina", "AI inayapanga na kuandika rasimu za majibu", "Kutokana na ukweli unaoipa tu"] },
            { title: "Itumie kila mahali", bullets: ["Tovuti na majibu yaliyohifadhiwa", "Ukweli kwa chatbot yoyote", "Sema ni ya kiotomatiki; toa njia ya kumfikia mtu"] }
          ],
          tryIt: "Kusanya angalau maswali kumi halisi ya wateja (bila majina), tumia AI kuyapanga na kuandika rasimu za majibu kutokana na ukweli wako, kagua kila moja, na uhifadhi FAQ yako.",
          youCanNow: "kugeuza maswali halisi ya wateja kuwa FAQ iliyokaguliwa.",
          quickCheck: [
            { objective: "O4", q: "Maswali ya FAQ yanapaswa kutoka wapi?", options: ["Makisio ya AI", "Tovuti ya mshindani", "Maswali ambayo wateja halisi wanauliza", "Maswali ambayo ungetamani watu wakuulize"], answer: 2, why: "Maswali halisi yanatengeneza FAQ inayosaidia kweli." },
            { objective: "O4", q: "Jibu la FAQ la AI linataja muda wa kufikisha bidhaa ambao wewe hutoi. Unafanya nini?", options: ["Unalichapisha", "Unabadilisha muda wako wa kufikisha", "Unaondoa FAQ nzima", "Unalirekebisha kutokana na ukweli wako halisi"], answer: 3, why: "Majibu ya FAQ lazima yatokane na ukweli wako." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kujibu malalamiko kwa utulivu",
          minutes: 5,
          goal: "Tumia AI kuandika rasimu ya jibu tulivu na la haki kwa lalamiko, na uamue jinsi ya kulitatua.",
          text: [
            "Lalamiko linaloshughulikiwa vizuri linaweza kukupatia mteja wa maisha. Mpangilio rahisi: mshukuru, omba samahani kwa alichopitia, sema utakachofanya, na sema lini. Usibishane hadharani; omba kuendelea faraghani.",
            "Ukiwa umekasirika, AI inakusaidia kubaki mtulivu. Fupisha lalamiko kwa maneno yako mwenyewe (bila majina wala namba za oda) na uulize: \"Andika rasimu ya jibu tulivu na fupi linalomshukuru, linaloomba samahani, linalotoa [suluhisho], na linalomkaribisha atutumie ujumbe faraghani.\"",
            "Wewe ndiye unayeamua suluhisho. Usiiruhusu AI iahidi kurudisha pesa au salio ambalo hujakubali, na usitumie AI kuandika maoni chanya ya uongo ili kuficha lile baya; FTC (mamlaka ya biashara ya Marekani) inapiga marufuku maoni ya uongo, hata yale yaliyoandikwa na AI."
          ],
          steps: ["Soma lalamiko na usubiri dakika chache kabla ya kujibu.", "Amua suluhisho la haki wewe mwenyewe.", "Ifupishie AI lalamiko bila majina wala namba za oda.", "Omba jibu tulivu: shukrani, samahani, suluhisho, lini, kuhamia faraghani.", "Hariri, kagua na utume."],
          words: [["Lalamiko", "mteja anayekuambia kwamba kuna jambo lililoharibika."], ["Suluhisho", "utakachofanya kurekebisha mambo, kama kurudia kazi au kurudisha pesa."]],
          slides: [
            { title: "Mpangilio wa jibu", bullets: ["Mshukuru", "Omba samahani kwa alichopitia", "Sema utakachofanya na lini"] },
            { title: "AI inakuweka mtulivu", bullets: ["Fupisha bila majina wala namba za oda", "Omba rasimu fupi na tulivu", "Hamishia mazungumzo faraghani"] },
            { title: "Wewe ndiye unayeamua", bullets: ["Suluhisho ni uamuzi wako", "Hakuna ahadi ambazo hukuidhinisha", "Kamwe usiandike maoni ya uongo kuficha baya"] }
          ],
          sources: [{ name: "FTC: Kanuni ya mwisho inayopiga marufuku maoni na ushuhuda wa uongo (taarifa kwa vyombo vya habari)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" }],
          tryIt: "Chukua lalamiko halisi au la kubuni, amua suluhisho la haki, na utumie AI kuandika rasimu ya jibu tulivu kwa mpangilio wa sehemu nne. Lihifadhi kama kiolezo chako cha kujibu malalamiko.",
          youCanNow: "kujibu malalamiko kwa utulivu na haki kwa msaada wa AI, na kuamua suluhisho wewe mwenyewe.",
          quickCheck: [
            { objective: "O5", q: "Sehemu nne za jibu tulivu kwa lalamiko ni zipi?", options: ["Shukrani, samahani, suluhisho, lini", "Kataa, chelewesha, jitetee, futa", "Bei, bidhaa, mahali, matangazo", "Habari, kwaheri, saini, tuma"], answer: 0, why: "Mpangilio huu unafanya majibu yawe tulivu, ya haki na wazi." },
            { objective: "O5", q: "Rasimu ya jibu ya AI inatoa kurudisha pesa zote, jambo ambalo hujakubali. Unafanya nini?", options: ["Unaituma", "Unaamua suluhisho la haki wewe mwenyewe na kubadilisha rasimu", "Unaiacha AI iamue", "Unapuuza lalamiko"], answer: 1, why: "Wewe unaamua suluhisho; AI inaandika maneno tu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kujifunza kutokana na maoni ya wateja",
          minutes: 5,
          goal: "Tumia AI kuona mifumo katika maoni ya wateja, na uchague uboreshaji mmoja.",
          text: [
            "Maoni ya wateja mtandaoni, majibu ya dodoso na ujumbe vinakuambia nini cha kurekebisha na nini cha kudumisha. Ukiyasoma moja moja, unakosa mifumo. AI ni hodari wa kupanga katika makundi.",
            "Nakili maoni 20 hadi 50 (ondoa majina) na uulize: \"Panga maoni haya katika mada. Kwa kila mada, sema ni maoni mangapi yanaitaja na utoe mfano mmoja. Orodhesha mambo matatu ya juu ambayo wateja wanapenda na matatizo matatu ya juu.\"",
            "Kagua hesabu kwa kupitia maoni mwenyewe, kwa sababu AI inaweza kukosea kuhesabu. Kisha chagua tatizo moja la kurekebisha mwezi huu, lirekebishe, na uwaambie wateja kwamba uliwasikiliza."
          ],
          steps: ["Kusanya maoni 20 hadi 50 na uondoe majina.", "Iombe AI iyapange katika mada pamoja na hesabu na mifano.", "Pitia maoni kukagua mada na hesabu.", "Chagua tatizo moja la kurekebisha mwezi huu.", "Waambie wateja ulichobadilisha."],
          words: [["Mada", "jambo linalojitokeza tena na tena katika maoni."], ["Dodoso", "seti fupi ya maswali unayowauliza wateja."]],
          slides: [
            { title: "Maoni yanaonyesha njia", bullets: ["Maoni mtandaoni, madodoso, ujumbe", "Ukisoma moja moja, unakosa mifumo"] },
            { title: "AI inayapanga", bullets: ["Ondoa majina kwanza", "Mada, hesabu na mifano", "Mambo matatu wanayopenda na matatizo matatu"] },
            { title: "Chukua hatua", bullets: ["Kagua hesabu mwenyewe", "Rekebisha tatizo moja mwezi huu", "Waambie wateja uliwasikiliza"] }
          ],
          tryIt: "Kazi ya mwisho: chambua angalau maoni 20 kwa AI, chagua suluhisho moja, kisha kusanya kifurushi chako cha mauzo na huduma: wateja watarajiwa 10 waliochujwa, ujumbe miwili wa kuwafikia, mwongozo wa simu, FAQ na kiolezo cha malalamiko.",
          youCanNow: "kutumia AI katika mauzo na huduma: kupata wateja watarajiwa, kuwafikia ipasavyo, kujiandaa, kuwajibu wateja na kuendelea kuboresha.",
          quickCheck: [
            { objective: "O6", q: "Mada katika maoni ya wateja ni nini?", options: ["Maoni moja ya hasira", "Rangi ya tovuti yako", "Jambo linalojitokeza tena na tena", "Maoni ya nyota tano"], answer: 2, why: "Mada zinaonyesha matatizo ambayo wateja wengi wanayo." },
            { objective: "O6", q: "AI inasema maoni mengi yanahusu bei, lakini unakumbuka maoni mengi kuhusu muda wa kusubiri. Unafanya nini?", options: ["Unaiamini AI", "Unapunguza bei mara moja", "Unaiomba AI ikubaliane nawe", "Unapitia maoni wewe mwenyewe kukagua"], answer: 3, why: "Kagua hesabu za AI wewe mwenyewe kabla ya kuchukua hatua." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuwafanya wateja waridhike",
        questions: [
          { objective: "O4", q: "Maswali ya FAQ yanapaswa kutoka wapi?", options: ["Maswali halisi ambayo wateja wanauliza", "Maswali ambayo AI inabuni", "Tovuti ya mshindani", "Makisio ya kubahatisha"], answer: 0, why: "Maswali halisi yanatengeneza FAQ yenye manufaa." },
          { objective: "O4", q: "Ukitumia chatbot, unapaswa:", options: ["Kuficha mawasiliano yako", "Kujifanya ni mtu", "Kuiruhusu iahidi kurudisha pesa", "Kuwaambia wateja kwamba ni ya kiotomatiki na kutoa njia ya kumfikia mtu"], answer: 3, why: "Ukweli na njia rahisi ya kumfikia mtu vinadumisha uaminifu." },
          { objective: "O5", q: "Nani anaamua suluhisho la lalamiko?", options: ["AI", "Wewe", "Marafiki wa mteja", "Hakuna mtu"], answer: 1, why: "AI inaandika maneno; wewe unaamua suluhisho." },
          { objective: "O5", q: "Maoni mabaya yanatokea mtandaoni. Jibu lipi ni kinyume cha sheria chini ya kanuni za FTC?", options: ["Kuchapisha maoni chanya ya uongo ili kuyaficha", "Kujibu kwa utulivu", "Kurekebisha tatizo", "Kumkaribisha mteja kuzungumza faraghani"], answer: 0, why: "FTC inapiga marufuku maoni ya uongo, hata yale yaliyoandikwa na AI." },
          { objective: "O6", q: "AI inasema maoni 30 yanataja ufikishaji wa polepole. Unapaswa kufanya nini?", options: ["Kufuta maoni hayo", "Kuiamini kabisa", "Kupitia maoni kukagua hesabu wewe mwenyewe", "Kupuuza"], answer: 2, why: "AI inaweza kukosea kuhesabu; kagua kabla ya kuchukua hatua." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Mauzo na Huduma kwa Wateja",
    questions: [
      { objective: "O1", q: "Mteja mtarajiwa ni:", options: ["Mteja aliyekwisha kulipa", "Mtu au biashara inayoweza kununua kutoka kwako", "Lalamiko", "Bidhaa"], answer: 1, why: "Hiyo ndiyo maana yake." },
      { objective: "O1", q: "Maswali manne ya kuchuja yanahusu:", options: ["Nembo, mwandiko, tovuti na app", "Rangi, ukubwa, uzito na umbo", "Jina, umri, anwani na simu", "Tatizo, pesa, uamuzi na wakati"], answer: 3, why: "Yanaonyesha nani ana uwezekano wa kununua." },
      { objective: "O1", q: "Chanzo kipi cha wateja watarajiwa ni sawa kutumia?", options: ["Faili la wateja wa mshindani", "Orodha iliyonunuliwa ya namba binafsi za simu", "Taarifa binafsi zilizovunwa", "Orodha za umma za biashara"], answer: 3, why: "Taarifa za umma za biashara zinaepuka matatizo ya faragha." },
      { objective: "O2", q: "Ujumbe mzuri wa kuwafikia wateja unataja:", options: ["Tuzo zako tu", "Jambo halisi ulilogundua kuhusu wao", "Tarehe ya mwisho ya uongo", "Anwani ya nyumbani kwao"], answer: 1, why: "Mambo binafsi yanaonyesha umefanya utafiti wako." },
      { objective: "O2", q: "CAN-SPAM inataka barua pepe za kibiashara ziwe na:", options: ["Punguzo la bei", "Taarifa za benki yako", "Njia ya kujiondoa", "Picha"], answer: 2, why: "Kujiondoa ni moja ya mahitaji ya msingi." },
      { objective: "O2", q: "Maombi ya kujiondoa lazima yatekelezwe ndani ya:", options: ["Siku 10 za kazi", "Mwaka 1", "Saa 1", "Kamwe"], answer: 0, why: "Mwongozo wa FTC unasema siku 10 za kazi." },
      { objective: "O2", q: "Chini ya uamuzi wa FCC wa 2024, sauti zinazotengenezwa na AI katika simu zinahesabiwa kama:", options: ["Hazihusiki na sheria yoyote", "Sauti za binadamu", "Sauti bandia chini ya TCPA", "Barua pepe"], answer: 2, why: "Kwa hiyo sheria za ridhaa zinatumika." },
      { objective: "O2", q: "Kabla ya kutuma ujumbe mfupi wa masoko unapaswa:", options: ["Kuwa na ridhaa ya mtu na kukagua sheria", "Kumtumia ujumbe kila mtu aliye kwenye simu yako", "Kutumia sauti ya AI badala yake", "Kuficha jina la biashara yako"], answer: 0, why: "Ujumbe mfupi wa masoko kwa kawaida unahitaji ridhaa." },
      { objective: "O3", q: "Mazungumzo ya mauzo yanapaswa kwa sehemu kubwa kuwa:", options: ["Kuzungumza kuhusu wewe mwenyewe", "Kusikiliza", "Kusoma maandishi kwa kasi", "Punguzo la bei"], answer: 1, why: "Kusikiliza kunakuambia mteja anahitaji nini." },
      { objective: "O3", q: "Swali la wazi ni lile ambalo:", options: ["Halina jibu", "Ni la kukosa adabu", "Linahusu bei tu", "Haliwezi kujibiwa kwa ndiyo au hapana tu"], answer: 3, why: "Maswali ya wazi yanawafanya wateja waongee." },
      { objective: "O3", q: "Igizo na AI linakusaidia:", options: ["Kufanya mazoezi ya kujibu maswali magumu", "Kusaini mikataba", "Kuruka maandalizi", "Kuandika maoni ya uongo"], answer: 0, why: "Mazoezi yanajenga kujiamini." },
      { objective: "O3", q: "AI inapoandika majibu kwa pingamizi, unapaswa:", options: ["Kutoyatumia kamwe", "Kuyasoma neno kwa neno", "Kuongeza ahadi za uongo", "Kuyahariri ili yawe ya kweli na yasikike kama wewe"], answer: 3, why: "Majibu ya kweli kwa sauti yako yanajenga uaminifu." },
      { objective: "O4", q: "FAQ inasaidia kwa sababu:", options: ["Inaficha bei", "Inachukua nafasi ya mawasiliano yote na wateja", "Inajibu maswali ya kawaida haraka", "Inatakiwa na sheria"], answer: 2, why: "Inaokoa muda kwako na kwa wateja." },
      { objective: "O4", q: "Kabla ya kuipa AI maswali ya wateja, unapaswa:", options: ["Kuongeza namba za kadi zao", "Kuondoa majina na mawasiliano", "Kuwaomba nywila zao", "Kuyachapisha hadharani"], answer: 1, why: "Weka taarifa binafsi nje ya zana za AI." },
      { objective: "O4", q: "Majibu ya FAQ yanapaswa kutokana na:", options: ["Uvumi wa zamani", "Chochote ambacho AI inakisia", "Bei za mshindani", "Ukweli unaoipa AI"], answer: 3, why: "AI inaweza kubuni ukweli usipoupa." },
      { objective: "O5", q: "Jibu la sehemu nne kwa lalamiko ni:", options: ["Punguzo, punguzo, punguzo, punguzo", "Kataa, bishana, zuia, futa", "Shukrani, samahani, suluhisho, lini", "Lipuuze"], answer: 2, why: "Ni tulivu, la haki na wazi." },
      { objective: "O5", q: "Lalamiko likiwa hadharani, hatua nzuri ni:", options: ["Kujibu kwa utulivu na kuomba kuendelea faraghani", "Kubishana katika maoni", "Kuchapisha taarifa za mteja", "Kufuta akaunti yako"], answer: 0, why: "Kuhamia faraghani kunaepuka mabishano hadharani." },
      { objective: "O5", q: "Je, AI inaweza kuahidi kurudisha pesa katika jibu lako bila idhini yako?", options: ["Ndiyo, kila wakati", "Hapana, wewe unaamua suluhisho", "Wikendi tu", "Kwa oda kubwa tu"], answer: 1, why: "Maamuzi ya pesa yanabaki kwako." },
      { objective: "O6", q: "Mada katika maoni ni:", options: ["Muundo wa tovuti", "Jambo linalojitokeza tena na tena", "Maoni moja", "Mwandiko"], answer: 1, why: "Mada zinaonyesha mifumo." },
      { objective: "O6", q: "Baada ya kupata tatizo kuu katika maoni, unapaswa:", options: ["Kulirekebisha na kuwaambia wateja uliwasikiliza", "Kulipuuza", "Kuficha maoni", "Kununua maoni mapya"], answer: 0, why: "Kuchukua hatua kutokana na maoni kunajenga uaminifu wa wateja." }
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
      8,
      9,
      12,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Wateja watarajiwa waliochujwa",
        objective: "O1",
        notYet: "Wateja watarajiwa chini ya 10, hakuna sababu, au wametoka vyanzo visivyokubalika.",
        meets: "Wateja watarajiwa 10 kutoka taarifa za umma au mtandao wako wa watu, kila mmoja na sababu.",
        exceeds: "Kila mteja mtarajiwa anaonyesha alama zake kwa tatizo, pesa, uamuzi na wakati."
      },
      {
        name: "Ujumbe wa kuwafikia wateja",
        objective: "O2",
        notYet: "Ujumbe wa jumla, au hauna anwani au mstari wa kujiondoa.",
        meets: "Ujumbe miwili mifupi na binafsi yenye jambo halisi, anwani na mstari wa kujiondoa.",
        exceeds: "Kila mmoja unamalizika na hatua moja rahisi inayofuata na ulisomwa kwa sauti kabla ya kutumwa."
      },
      {
        name: "Mwongozo wa simu",
        objective: "O3",
        notYet: "Hakuna maswali au majibu kwa pingamizi, au majibu yanaahidi kupita kiasi.",
        meets: "Maswali matano ya wazi na majibu ya kweli kwa pingamizi tatu, yaliyofanyiwa mazoezi mara moja.",
        exceeds: "Kinaandika kilichobadilishwa baada ya igizo."
      },
      {
        name: "FAQ na kiolezo cha malalamiko",
        objective: "O5",
        notYet: "Majibu ya FAQ hayajakaguliwa, au jibu la lalamiko linaahidi suluhisho ambalo halijaamuliwa.",
        meets: "Majibu 10 ya FAQ yaliyokaguliwa na kiolezo cha sehemu nne cha malalamiko chenye suluhisho la mmiliki.",
        exceeds: "FAQ imechapishwa au inatumika, na kiolezo kina mstari unaoomba kuendelea faraghani."
      },
      {
        name: "Taarifa binafsi",
        objective: "O4",
        notYet: "Majina ya wateja au mawasiliano yao yaliingia katika zana ya AI.",
        meets: "Maswali yote na maoni yote yaliondolewa majina na mawasiliano.",
        exceeds: "Kinaandika mpangilio wa data wa zana ya AI uliokaguliwa."
      }
    ]
  },
  evaluation: {
    results: [
      "Wamiliki wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Mazungumzo ya mauzo au wateja wapya kutoka orodha ya wateja watarajiwa ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wamiliki wanaochapisha FAQ yao na kuripoti maswali machache yanayorudiwa",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya wajasiriamali ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye msaidizi wa AI wa bure na barua pepe",
      "Spreadsheet (jedwali la kompyuta) kwa orodha ya wateja watarajiwa",
      "Maswali na maoni halisi ya wateja yaliyoondolewa majina na mawasiliano",
      "Kama dakika 60 hadi 75 kwa jumla kwa masomo, kazi, majaribio na kifurushi"
    ],
    facilitatorNotes: [
      "Waunganishe wanafunzi wawili wawili kwa igizo la mauzo baada ya kufanya mazoezi na AI.",
      "Onyesha jinsi ya kuondoa majina na mawasiliano katika maswali ya wateja kabla ya kutumia AI.",
      "Eleza kwamba sheria za simu, ujumbe mfupi na barua pepe zimetolewa kwa maneno rahisi na si ushauri wa kisheria.",
      "Sisitiza kwamba mmiliki ndiye anayeamua kila suluhisho la lalamiko na kila urudishaji wa pesa, si AI.",
      "Pima kifurushi cha mauzo na huduma kwa rubriki, mstari mmoja wa Bado kwa wakati."
    ]
  }
};

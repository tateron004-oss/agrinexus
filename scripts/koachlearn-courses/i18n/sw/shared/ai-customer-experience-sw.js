"use strict";

// Koach Learn course (Swahili translation of shared/ai-customer-experience.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-customer-experience-sw",
  lang: "sw",
  translationOf: "ai-customer-experience",
  category: "Small Business",
  name: "AI kwa Huduma Bora kwa Wateja",
  skills: "Kuchora safari ya mteja, Kuandika violezo vya majibu kwa AI, Kujibu maoni na malalamiko, Kuchambua maoni ya wateja kwa AI, Kumhudumia kila mtu binafsi bila kupoteza faragha, Kutengeneza mpango wa kuboresha",
  outcome: "kuchora jinsi wateja au wateja wa huduma wanavyopitia shirika lako, kutumia AI kuandika majibu ya haraka na ya upole kwa maswali, maoni na malalamiko, kupanga maoni ya wateja katika matatizo makuu, na kuyageuza kuwa mpango wa kuboresha wa siku 30.",
  about: [
    "Huduma kwa wateja (customer experience) ni jinsi watu wanavyojisikia katika kila hatua wanaposhughulika nawe: wanapokupata, wanapouliza swali, wanaponunua au kupata msaada, na kinachotokea baadaye. Wateja wenye furaha hurudi na kuwaambia marafiki; wasio na furaha huondoka kimya au huandika maoni mabaya.",
    "Kozi hii ni kwa wamiliki na wafanyakazi wa biashara ndogo, na kwa mashirika yasiyo ya faida ambayo \"wateja\" wao ni wanaohudumiwa, familia, wafadhili na wajitolea. Mifano ni kinyozi, kampuni ya ukarabati wa nyumba, mapokezi ya kliniki na benki ya chakula.",
    "Utatumia wasaidizi wa AI wa bure kama ChatGPT, Microsoft Copilot au Google Gemini kuandika majibu na kusoma maoni ya wateja, huku mtu akiendelea kuwa kiongozi. Kila somo ni kama dakika tano na lina kazi ya \"Jaribu sasa\", kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Kwa shirika halisi au la mazoezi, tengeneza kifurushi cha huduma kwa wateja: ramani ya safari ya mteja yenye nyakati tatu dhaifu zaidi zilizowekwa alama, violezo vitano vya majibu (swali la kawaida, maoni mazuri, maoni mabaya, lalamiko, ujumbe wa kufuatilia), muhtasari wa maoni ya angalau 15 halisi au ya mfano yaliyopangwa katika matatizo makuu, na mpango wa kuboresha wa siku 30 wenye mhusika mmoja na kipimo kimoja kwa kila kitendo.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wamiliki wa biashara ndogo na wafanyakazi wanaohudumia wateja moja kwa moja, na watu wanaohudumia wateja wa huduma, familia, wafadhili au wajitolea katika mashirika yasiyo ya faida na ya kijamii.",
    startingPoint: "Wanaongea na wateja kila siku kwa simu, ujumbe mfupi, barua pepe, mitandao ya kijamii au ana kwa ana, na huenda wanasoma maoni mtandaoni. Wachache wamechora safari ya mteja, wametumia violezo vya majibu, wamepanga maoni katika mada au wamefuatilia maboresho.",
    gap: "Majibu ya polepole, baridi au yasiyo sahihi na malalamiko yasiyojibiwa yanapoteza wateja na kuharibu maoni ya umma. Wanafunzi wanahitaji kutumia AI kujibu haraka na kwa upole, kujifunza kutoka kwa maoni ya wateja na kufanya uboreshaji mmoja unaopimwa kwa wakati mmoja, huku wakilinda faragha ya wateja na kubaki waaminifu.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Vifaa: simu au kompyuta; kompyuta ni rahisi zaidi kwa nyaraka na kupanga maoni",
      "Faragha: hakuna majina, namba za simu, taarifa za afya wala orodha za wateja zinazobandikwa kwenye zana za AI za jumla",
      "Uaminifu: hakuna maoni ya uongo, na wateja wanaambiwa wanapoongea na AI",
      "Muda: masomo ya dakika 5, kama dakika 60 kwa jumla pamoja na muda wa kutengeneza kifurushi"
    ],
    prerequisites: "Hakuna. Wanafunzi wapya kwa wasaidizi wa AI wanaweza kwanza kusoma kozi ya utangulizi wa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kwa shirika halisi au la mazoezi", action: "kuchora ramani ya safari ya mteja kuanzia kukupata hadi baadaye na kuweka alama kwenye nyakati tatu dhaifu zaidi", standard: "ukiandika anachofanya na anachojisikia mteja katika kila hatua" },
    { id: "O2", condition: "Ukipewa maswali yako matano yanayoulizwa zaidi na ukweli sahihi", action: "kuandika violezo vya majibu vilivyoandaliwa na AI kwa sauti yako mwenyewe", standard: "ukivibadilisha kwa kila mtu na kukagua ukweli kabla ya kila matumizi" },
    { id: "O3", condition: "Ukipewa maoni mazuri, maoni mabaya na lalamiko", action: "kuandika majibu ya utulivu na yenye msaada ukitumia sikiliza, omba radhi, tatua, fuatilia", standard: "bila taarifa binafsi katika jibu lolote la umma" },
    { id: "O4", condition: "Ukipewa angalau maoni 15 ya wateja yaliyoondolewa taarifa binafsi", action: "kupanga maoni katika mada kwa AI na kupanga matatizo makuu matatu kwa uzito", standard: "baada ya kukagua maoni machache katika kila mada" },
    { id: "O5", condition: "Kwa ujumbe wa shukrani, ukumbusho au wa kufuatilia", action: "kuandika kiolezo cha binafsi chenye vishika-nafasi kinacholinda faragha na kubaki mwaminifu", standard: "kwa watu waliokubali kupokea ujumbe wako tu, na njia ya kumfikia mtu" },
    { id: "O6", condition: "Ukipewa matatizo yako makuu matatu", action: "kutengeneza mpango wa kuboresha wa siku 30", standard: "wenye kitendo kimoja, mhusika mmoja na kipimo kimoja kwa kila tatizo" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuwaona na kuwajibu wateja wako",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuchora safari ya mteja",
          minutes: 5,
          goal: "Chora ramani ya safari ya mteja na uweke alama kwenye nyakati dhaifu zaidi.",
          text: [
            "Ramani ya safari ya mteja inaorodhesha kila hatua anayopitia mtu nawe, kwa mpangilio: kukupata (jinsi wanavyokujua), kuuliza (mawasiliano ya kwanza), kuamua, kununua au kupokea huduma, na baadaye (kufuatilia, kutoa maoni, kurudi).",
            "Katika kila hatua, andika anachofanya mteja, anachojisikia, na kinachoweza kuharibika. Kwa benki ya chakula: familia inapata saa za kufungua mtandaoni, inapiga simu kuuliza swali, inasubiri kwenye foleni, inapokea chakula, na inajiuliza irudi lini.",
            "AI inaweza kukusaidia kuona hatua ulizosahau. Uliza: \"Nina biashara ya ukarabati wa nyumba. Orodhesha kila hatua anayopitia mteja kuanzia kutafuta mara ya kwanza hadi baada ya kazi, na kinachoweza kumkasirisha katika kila hatua.\" Kisha linganisha na unachokiona kila siku."
          ],
          steps: ["Orodhesha hatua: kukupata, kuuliza, kuamua, kununua au kupokea, baadaye.", "Kwa kila hatua, andika anachofanya na anachojisikia mteja.", "Uliza AI kinachoweza kuwakasirisha katika kila hatua.", "Weka alama kwenye nyakati tatu dhaifu zaidi."],
          words: [["Huduma kwa wateja (customer experience)", "jinsi watu wanavyojisikia katika kila hatua wanaposhughulika na shirika."], ["Ramani ya safari", "picha ya hatua kwa hatua ya uzoefu wa mteja."], ["Sehemu ya mawasiliano (touchpoint)", "wakati wowote mteja anaposhughulika nawe: simu, chapisho, ziara, barua pepe."]],
          slides: [
            { title: "Safari", bullets: ["Kukupata, kuuliza, kuamua", "Kununua au kupokea", "Baadaye: kufuatilia na kurudi"] },
            { title: "Katika kila hatua", bullets: ["Anachofanya", "Anachojisikia", "Kinachoweza kuharibika"] },
            { title: "Tumia AI kupata mapengo", bullets: ["Uliza kinachoweza kuwakasirisha wateja", "Linganisha na unachokiona", "Weka alama kwenye nyakati tatu dhaifu zaidi"] }
          ],
          tryIt: "Chora ramani ya safari kwa shirika halisi au la mazoezi yenye angalau hatua tano. Tumia AI kupata mambo yanayokasirisha uliyosahau, na uweke alama kwenye nyakati tatu dhaifu zaidi.",
          youCanNow: "kuchora safari ya mteja na kupata mahali huduma inapoharibika.",
          quickCheck: [
            { objective: "O1", q: "Ni hatua gani ya safari ya mteja inahusu kufuatilia, maoni na kurudi?", options: ["Baadaye", "Kukupata", "Kuuliza", "Kuamua"], answer: 0, why: "Hatua ya \"baadaye\" inahusu kufuatilia, maoni na kurudi tena." },
            { objective: "O1", q: "AI inaorodhesha mambo yanayokasirisha kwa ramani ya safari ya biashara yako ya usafi. Unafanya nini na orodha hiyo?", options: ["Kuinakili kama ramani yako ya mwisho", "Kuifuta; AI haiwezi kusaidia", "Kuilinganisha na unachokiona kila siku na kubaki na kilicho kweli", "Kuituma kwa wateja"], answer: 2, why: "AI inaweza kuonyesha hatua ulizosahau, lakini uzoefu wako wa kila siku ndio unaothibitisha." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuandika majibu ya haraka na ya upole kwa AI",
          minutes: 5,
          goal: "Tengeneza violezo vya majibu kwa AI kwa maswali unayoulizwa zaidi.",
          text: [
            "Majibu ya haraka ni muhimu. Kiolezo ni jibu lililoandaliwa tayari ambalo unalibadilisha kwa kila mtu. AI inaweza kuandika violezo kwa sauti yako kwa sekunde chache.",
            "Ipe AI maelezo ya kutosha: shirika lako, mtindo wako wa kuongea na ukweli. \"Andika jibu la kirafiki kwa kinyozi kwa swali 'Mnapokea watu bila miadi?' Ukweli: watu bila miadi wanakaribishwa Jumanne hadi Alhamisi, miadi inahitajika Ijumaa na Jumamosi, weka miadi kwenye tovuti yetu. Chini ya maneno 50.\"",
            "Badilisha jibu kwa mtu kabla ya kutuma kila wakati: tumia jina lake, jibu hasa alichouliza, na kagua ukweli. Jibu linalosikika kama roboti au linalokosea saa za kufungua linaumiza zaidi kuliko linavyosaidia."
          ],
          steps: ["Orodhesha maswali yako matano yanayoulizwa zaidi.", "Ipe AI mtindo wako na ukweli sahihi kwa kila moja.", "Omba kiolezo kifupi cha kirafiki.", "Hifadhi violezo kwenye hati.", "Badilisha kwa mtu na kagua ukweli kila unapotumia kimoja."],
          words: [["Kiolezo", "jibu lililoandaliwa tayari ambalo unalibadilisha kwa kila mtu."], ["Kubadilisha kwa mtu (personalize)", "kubadilisha ujumbe ili umfae mtu huyo hasa."]],
          slides: [
            { title: "Kasi ni muhimu", bullets: ["Violezo vinakusaidia kujibu haraka", "AI inaviandika kwa sekunde chache"] },
            { title: "Ipe AI ukweli", bullets: ["Mtindo wako", "Ukweli sahihi", "Kikomo cha maneno"] },
            { title: "Badilisha kwa mtu kila wakati", bullets: ["Tumia jina lake", "Jibu hasa alichouliza", "Kagua ukweli"] }
          ],
          tryIt: "Tumia AI kuandika violezo kwa maswali yako matatu ya wateja yanayoulizwa zaidi. Vihifadhi, kisha badilisha kimoja kwa mteja wa kubuni.",
          youCanNow: "kutengeneza na kubadilisha kwa kila mtu violezo vya majibu vilivyoandaliwa na AI.",
          quickCheck: [
            { objective: "O2", q: "Unapaswa kuipa AI nini ili kiolezo cha jibu kiwe sahihi?", options: ["Namba za simu za wateja", "Mtindo wako na ukweli sahihi", "Neno \"jibu\" tu", "Tovuti ya mshindani"], answer: 1, why: "Mtindo wako na ukweli halisi vinaiwezesha AI kuandika jibu sahihi linalosikika kama wewe." },
            { objective: "O2", q: "Mteja anayeitwa Ana anauliza kuhusu maegesho. Una kiolezo. Unafanya nini?", options: ["Kutuma kiolezo kama kilivyo", "Kupuuza swali", "Kumtumia kila kiolezo ulicho nacho", "Kuongeza jina lake, kujibu hasa alichouliza na kukagua ukweli"], answer: 3, why: "Badilisha kwa mtu na kagua ukweli kila unapotumia kiolezo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kujibu maoni na malalamiko",
          minutes: 6,
          goal: "Jibu maoni mazuri, maoni mabaya na lalamiko kwa utulivu na kwa msaada.",
          text: [
            "Maoni ya wateja (reviews) ni ya umma, kwa hiyo jibu lako ni kwa kila anayesoma, si kwa aliyeandika tu. Washukuru watu kwa maoni mazuri na utaje jambo fulani hasa. Kwa maoni mabaya, baki mtulivu, omba radhi kwa uzoefu wao, usibishane, na jitolee kulitatua nje ya ukurasa wa umma kwa namba ya simu au barua pepe.",
            "Kwa malalamiko, tumia mpangilio rahisi: sikiliza, omba radhi, tatua, fuatilia. Uliza AI: \"Nisaidie kujibu lalamiko hili. Mpangilio: kubali tatizo, omba radhi, toa suluhisho hili: [suluhisho lako], mkaribishe awasiliane na [barua pepe].\"",
            "Usishiriki kamwe taarifa binafsi katika jibu la umma, kama tarehe za miadi, taarifa za afya au alichonunua mtu. Usichapishe kamwe maoni ya uongo wala kulipia maoni. Maoni yakiwa na vitisho au madai ya uongo, fuata utaratibu wa jukwaa wa kuripoti."
          ],
          steps: ["Soma maoni mara mbili na usubiri kama umekasirika.", "Washukuru (maoni mazuri) au kubali tatizo na uombe radhi (maoni mabaya).", "Toa suluhisho maalum au njia ya kuongea nje ya ukurasa wa umma.", "Weka taarifa binafsi nje ya majibu ya umma.", "Fuatilia kuhakikisha tatizo limetatuliwa."],
          words: [["Maoni (review)", "maoni ya umma pamoja na alama (nyota) kuhusu biashara."], ["Nje ya ukurasa wa umma (offline)", "mbali na ukurasa wa umma, kama kwa simu au barua pepe ya faragha."]],
          slides: [
            { title: "Majibu ni ya umma", bullets: ["Kila mtu anayasoma", "Washukuru waliotoa maoni mazuri kwa jambo maalum"] },
            { title: "Maoni mabaya", bullets: ["Baki mtulivu, usibishane", "Omba radhi kwa uzoefu wao", "Jitolee kulitatua nje ya ukurasa wa umma"] },
            { title: "Mpangilio wa lalamiko", bullets: ["Sikiliza, omba radhi, tatua, fuatilia", "Hakuna taarifa binafsi hadharani", "Hakuna maoni ya uongo, kamwe"] }
          ],
          tryIt: "Andika kwa msaada wa AI majibu kwa maoni mazuri moja, maoni mabaya moja na lalamiko moja (halisi au ya kubuni). Kagua kila moja kama lina sauti ya utulivu na halina taarifa binafsi.",
          youCanNow: "kujibu maoni na malalamiko kwa utulivu, kwa msaada na bila kushiriki taarifa binafsi.",
          quickCheck: [
            { objective: "O3", q: "Jibu kwa maoni mazuri linapaswa kuwa na nini?", options: ["Msimbo wa punguzo kwa kila mtu", "Mabishano kuhusu nyota", "Shukrani na jambo fulani hasa kutoka kwenye maoni yao", "Tarehe ya miadi ya mteja"], answer: 2, why: "Washukuru watu na utaje jambo maalum ili jibu lionekane la kweli." },
            { objective: "O3", q: "Mteja anaandika kwamba kliniki yako ilimfanya asubiri saa moja. Unajibuje hadharani?", options: ["Kukubali tatizo, kuomba radhi na kujitolea kuongea kwa simu au barua pepe", "Kueleza maelezo ya miadi yake na sababu ya kiafya ya kusubiri", "Kusema amekosea", "Kufuta ukurasa wa biashara yako"], answer: 0, why: "Baki mtulivu, omba radhi, jitolee kulitatua nje ya ukurasa wa umma na weka taarifa binafsi nje." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuwaona na kuwajibu wateja wako",
        questions: [
          { objective: "O1", q: "Ramani ya safari ya mteja inaonyesha nini?", options: ["Njia ya gari lako la kusambaza tu", "Salio lako la benki", "Kila hatua anayopitia mteja nawe", "Ratiba za wafanyakazi"], answer: 2, why: "Inaorodhesha kila hatua na jinsi mteja anavyojisikia." },
          { objective: "O1", q: "Ipi ni sehemu ya mawasiliano (touchpoint)?", options: ["Simu na mteja", "Rangi ya kuta za ofisi yako tu", "Ripoti yako ya kodi", "Ankara ya msambazaji"], answer: 0, why: "Sehemu za mawasiliano ni nyakati ambazo mteja anashughulika nawe." },
          { objective: "O2", q: "Unapaswa kufanya nini kila wakati kabla ya kutuma jibu lililoandaliwa na AI?", options: ["Kulituma bila kulisoma", "Kuongeza emoji zaidi", "Kuondoa jina la mteja", "Kulibadilisha kwa mtu na kukagua ukweli"], answer: 3, why: "Majibu ya binafsi na sahihi yanajenga imani." },
          { objective: "O3", q: "Mteja anaandika maoni ya hasira. Hatua bora ya kwanza ni ipi?", options: ["Kubishana hadharani", "Kubaki mtulivu, kuomba radhi kwa uzoefu wake na kujitolea kulitatua nje ya ukurasa wa umma", "Kuchapisha maelezo ya miadi yake", "Kuyapuuza milele"], answer: 1, why: "Majibu ya utulivu na yenye msaada yanaonyesha wasomaji kwamba unajali." },
          { objective: "O3", q: "Kipi hakipaswi kamwe kuonekana katika jibu la umma kwa maoni?", options: ["\"Asante\"", "Taarifa za afya za mteja", "Ombi la kuongea kwa simu", "Jina la biashara yako"], answer: 1, why: "Taarifa binafsi zinabaki nje ya majibu ya umma." }
        ]
      }
    },
    {
      name: "Sura 2: Kujifunza kutoka kwa maoni ya wateja na kuboresha",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuchambua maoni ya wateja kwa AI",
          minutes: 6,
          goal: "Tumia AI kupanga maoni ya wateja katika mada na kupata matatizo makuu.",
          text: [
            "Maoni ya wateja yamejificha sehemu nyingi: maoni mtandaoni, dodoso, barua pepe, maoni kwenye mitandao ya kijamii na maelezo ya wafanyakazi. Kuyasoma yote kwa mkono kunachukua masaa. AI inaweza kuyapanga kwa dakika chache.",
            "Kusanya angalau maoni 15 kwenye hati. Ondoa majina, namba za simu na taarifa nyingine binafsi. Kisha uliza: \"Panga maoni haya katika mada. Kwa kila mada, hesabu ni maoni mangapi yanayoitaja, sema kama ni mazuri au mabaya, na toa mfano mmoja wa maneno yaliyoandikwa.\"",
            "Kagua kazi ya AI: soma maoni machache katika kila mada kuthibitisha kwamba yanafaa hapo. AI inaweza kuhesabu vibaya au kuchanganya matatizo tofauti. Matokeo ni orodha yako ya matatizo makuu, yaliyopangwa kwa jinsi yanavyojitokeza mara nyingi na jinsi yanavyoumiza huduma."
          ],
          steps: ["Kusanya angalau maoni 15 kutoka kwa maoni mtandaoni, dodoso na barua pepe.", "Ondoa majina na taarifa binafsi.", "Omba AI iyapange katika mada pamoja na hesabu na mifano.", "Kagua maoni machache kwa kila mada.", "Panga matatizo makuu matatu kwa uzito."],
          words: [["Maoni ya wateja (feedback)", "kile wateja wanachokuambia kuhusu uzoefu wao."], ["Mada", "jambo linalojitokeza tena na tena."], ["Hisia (sentiment)", "kama maoni ni mazuri, mabaya au ya katikati."]],
          slides: [
            { title: "Maoni yako kila mahali", bullets: ["Maoni mtandaoni, dodoso, barua pepe", "Maoni ya mitandao ya kijamii, maelezo ya wafanyakazi"] },
            { title: "Acha AI iyapange", bullets: ["Ondoa taarifa binafsi kwanza", "Omba mada, hesabu, hisia, na mfano"] },
            { title: "Kagua na upange kwa uzito", bullets: ["Kagua kila mada kwa sampuli", "Panga kwa mara ngapi na jinsi linavyoumiza"] }
          ],
          tryIt: "Kusanya angalau maoni 15 halisi au ya mfano, ondoa taarifa binafsi, na uiombe AI iyapange katika mada. Kagua matokeo kwa sampuli na uorodheshe matatizo yako makuu matatu.",
          youCanNow: "kugeuza rundo la maoni ya wateja kuwa orodha ya matatizo makuu iliyopangwa kwa uzito.",
          quickCheck: [
            { objective: "O4", q: "Kwa nini ukague mada ambazo AI inatengeneza?", options: ["AI hupata sahihi kila wakati", "Kufanya orodha iwe ndefu zaidi", "Kurudisha majina ya wateja", "AI inaweza kuhesabu vibaya au kuchanganya matatizo tofauti"], answer: 3, why: "Kusoma maoni machache kwa kila mada kunagundua makosa ya hesabu na matatizo yaliyochanganywa." },
            { objective: "O4", q: "Maoni manane yanataja majibu ya polepole na mawili yanataja maegesho. Lipi unaliweka juu?", options: ["Maegesho, kwa sababu ni rahisi zaidi", "Majibu ya polepole, kwa sababu watu wengi zaidi wanalitaja", "Hakuna; puuza yote mawili", "Lolote ambalo AI inaorodhesha kwanza"], answer: 1, why: "Panga matatizo kwa jinsi yanavyojitokeza mara nyingi na jinsi yanavyoumiza." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kumhudumia kila mtu binafsi bila kupoteza imani",
          minutes: 5,
          goal: "Tumia AI kuandika ujumbe wa binafsi huku ukilinda faragha ya wateja na kubaki mwaminifu.",
          text: [
            "Kuwagusa watu kibinafsi kunawafanya wajisikie wanathaminiwa: punguzo la siku ya kuzaliwa, ukumbusho kabla ya miadi inayofuata ya mteja, au barua ya shukrani kwa mfadhili inayotaja mpango aliouunga mkono.",
            "AI inaweza kusaidia kuandika ujumbe huu kwa watu wengi kutoka kwenye kiolezo. Ipe maelezo inayoyahitaji tu, kama jina la kwanza na aina ya huduma, si kumbukumbu zote. Tumia mfumo wako mwenyewe wa wateja au zana yako ya barua pepe kuingiza majina, badala ya kubandika orodha za wateja kwenye zana ya AI ya jumla.",
            "Kuwa mwaminifu: kama chatbot au AI inajibu wateja, sema hivyo. Fanya iwe rahisi kumfikia mtu. Tuma ujumbe kwa watu waliokubali kupokea ujumbe wako tu, na fanya iwe rahisi kujiondoa."
          ],
          steps: ["Chagua wakati mmoja wa binafsi: shukrani, ukumbusho au ujumbe wa kufuatilia.", "Omba AI iandike kiolezo chenye vishika-nafasi kama [Jina la kwanza].", "Jaza majina ukitumia zana yako mwenyewe ya barua pepe au ya wateja.", "Sema wazi mteja anapoongea na AI.", "Toa kila wakati njia ya kumfikia mtu."],
          words: [["Kishika-nafasi", "alama kama [Jina la kwanza] inayobadilishwa na maelezo halisi."], ["Kujiondoa (opt out)", "kuchagua kuacha kupokea ujumbe."]],
          slides: [
            { title: "Mguso wa binafsi", bullets: ["Shukrani na ukumbusho", "Taja kilicho muhimu kwao"] },
            { title: "Linda faragha", bullets: ["Tumia vishika-nafasi kama [Jina la kwanza]", "Ingiza majina kwenye zana yako mwenyewe", "Hakuna orodha za wateja kwenye zana za AI za jumla"] },
            { title: "Baki mwaminifu", bullets: ["Sema AI inapojibu", "Rahisi kumfikia mtu", "Rahisi kujiondoa"] }
          ],
          tryIt: "Andika kwa AI kiolezo cha binafsi cha shukrani au cha kufuatilia ukitumia vishika-nafasi. Kagua kwamba hakiombi taarifa binafsi na kinatoa njia ya kumfikia mtu.",
          youCanNow: "kuandika ujumbe wa binafsi kwa wateja kwa AI huku ukilinda faragha na kubaki mwaminifu.",
          quickCheck: [
            { objective: "O5", q: "Ni njia ipi salama zaidi ya kutuma barua ya shukrani kwa wafadhili 200?", options: ["Kutumia kiolezo chenye [Jina la kwanza] na kuingiza majina kwenye zana yako mwenyewe ya barua pepe", "Kubandika orodha nzima ya wafadhili kwenye zana ya AI ya bure", "Kuandika kila barua kwa mkono bila kukagua", "Kuchapisha majina yao yote kwenye mitandao ya kijamii"], answer: 0, why: "Ingiza majina kwenye zana yako mwenyewe ili orodha ya wafadhili isiingie kamwe kwenye zana ya AI ya jumla." },
            { objective: "O5", q: "Chatbot ya tovuti yako inajibu maswali ya wateja. Lazima uongeze nini?", options: ["Jina la uongo la mfanyakazi", "Hakuna; wateja wanapenda kutojua", "Ujumbe wazi kwamba ni AI na njia ya kumfikia mtu", "Ombi la namba za kadi"], answer: 2, why: "Kuwa mwaminifu kwamba ni AI na kutoa mtu wa kuongea naye kunajenga imani." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kugeuza mafunzo kuwa mpango wa kuboresha wa siku 30",
          minutes: 5,
          goal: "Geuza matatizo yako makuu kuwa mpango wa siku 30 wenye wahusika na vipimo.",
          text: [
            "Mafunzo yana maana tu kama kitu kinabadilika. Kwa kila moja ya matatizo yako makuu matatu, chagua kitendo kimoja unachoweza kufanya ndani ya siku 30. Mfano: \"Wateja wanasema wanasubiri muda mrefu kupata makadirio ya bei\" inakuwa \"Tuma kila makadirio ya bei ndani ya saa 24 ukitumia kiolezo cha makadirio kilichoandaliwa na AI.\"",
            "Kipe kila kitendo mhusika na kipimo: namba itakayoonyesha kama kimefanikiwa, kama wastani wa muda wa kujibu, alama za maoni, ziara za kurudi au malalamiko kwa wiki.",
            "Waambie wateja ulichobadilisha: \"Mlituambia, tukasikiliza.\" Baada ya siku 30, kagua vipimo, baki na kilichofanya kazi na uchague tatizo linalofuata."
          ],
          steps: ["Andika kitendo kimoja kwa kila tatizo kuu.", "Kipe kila kitendo mhusika.", "Chagua kipimo kimoja kwa kila kitendo.", "Andika namba ya kuanzia.", "Kagua tena baada ya siku 30 na ushiriki kilichobadilika."],
          words: [["Funzo (insight)", "uelewa wenye manufaa unaotokana na kuchunguza taarifa."], ["Kipimo", "namba inayoonyesha kama badiliko limefanikiwa."]],
          slides: [
            { title: "Kutoka funzo hadi kitendo", bullets: ["Kitendo kimoja kwa kila tatizo kuu", "Kinachowezekana ndani ya siku 30"] },
            { title: "Mhusika na kipimo", bullets: ["Nani anakifanya", "Muda wa kujibu, alama, ziara za kurudi, malalamiko"] },
            { title: "Funga mzunguko", bullets: ["\"Mlituambia, tukasikiliza\"", "Kagua baada ya siku 30", "Chagua tatizo linalofuata"] }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wa kuboresha wa siku 30 kwa matatizo yako makuu matatu, wenye kitendo, mhusika, kipimo na namba ya kuanzia kwa kila moja. Uongeze kwenye ramani yako ya safari, violezo na muhtasari wa maoni ili kukamilisha kifurushi chako cha huduma kwa wateja.",
          youCanNow: "kupata, kurekebisha na kupima matatizo ya huduma kwa wateja kwa msaada wa AI.",
          quickCheck: [
            { objective: "O6", q: "Kipimo katika mpango wa kuboresha ni nini?", options: ["Mtu anayesimamia", "Namba inayoonyesha kama kitendo kimefanikiwa", "Jina la mteja", "Tarehe uliyoanza biashara"], answer: 1, why: "Kipimo ni namba, kama wastani wa muda wa kujibu, inayoonyesha kama kitendo kimefanikiwa." },
            { objective: "O6", q: "Wateja wanasema hawawezi kupata saa zako za kufungua. Kitendo kizuri cha siku 30 ni kipi?", options: ["Kusubiri kuona kama itakuwa bora", "Kuiomba AI iandike maoni kuhusu saa zako", "Kuondoa saa kabisa", "Kuweka saa kwenye kila ukurasa na wasifu, pamoja na mhusika na kipimo"], answer: 3, why: "Kila tatizo kuu linapata kitendo kimoja wazi, mhusika na kipimo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kujifunza kutoka kwa maoni ya wateja na kuboresha",
        questions: [
          { objective: "O4", q: "Kabla ya kubandika maoni ya wateja kwenye AI, unapaswa:", options: ["Kuongeza namba zao za simu", "Kuongeza namba zao za kadi", "Kutofanya chochote", "Kuondoa majina na taarifa binafsi"], answer: 3, why: "Faragha inakuja kwanza." },
          { objective: "O4", q: "AI inapanga maoni katika mada. Unapaswa kufanya nini baadaye?", options: ["Kukagua maoni machache katika kila mada", "Kuiamini kabisa", "Kufuta maoni", "Kuchapisha mada hadharani pamoja na majina"], answer: 0, why: "AI inaweza kuhesabu vibaya au kuchanganya matatizo." },
          { objective: "O5", q: "Kishika-nafasi ni nini?", options: ["Maoni ya uongo", "Aina ya lalamiko", "Alama kama [Jina la kwanza] inayobadilishwa na maelezo halisi", "Nywila ya mteja"], answer: 2, why: "Vishika-nafasi vinakuwezesha kuandika ujumbe wa binafsi kwa usalama." },
          { objective: "O5", q: "Chatbot inajibu wateja wako. Unapaswa kuwaambia nini?", options: ["Kwamba ni mfanyakazi halisi", "Hakuna", "Waache kuuliza maswali", "Kwamba ni AI na jinsi ya kumfikia mtu"], answer: 3, why: "Uaminifu unajenga imani." },
          { objective: "O6", q: "Ni kipimo kipi kizuri kwa kitendo \"tuma makadirio ya bei ndani ya saa 24\"?", options: ["Idadi ya mimea ofisini", "Umri wa mmiliki", "Wastani wa muda wa kutuma makadirio ya bei", "Rangi za tovuti"], answer: 2, why: "Kipimo lazima kionyeshe kama kitendo kimefanikiwa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Huduma Bora kwa Wateja",
    questions: [
      { objective: "O1", q: "Huduma kwa wateja (customer experience) ni:", options: ["Bei tu", "Jinsi watu wanavyojisikia katika kila hatua wanaposhughulika nawe", "Tovuti yako tu", "Mshahara wa wafanyakazi wako"], answer: 1, why: "Inahusu kila sehemu ya mawasiliano." },
      { objective: "O1", q: "Hatua ya kwanza ya safari ya mteja ni ipi?", options: ["Kukupata: jinsi wanavyokujua", "Kuandika maoni", "Kulipa", "Kurudi"], answer: 0, why: "Safari inaanza wanapokupata." },
      { objective: "O1", q: "Kwa shirika lisilo la faida, \"wateja\" wanaweza kuwa:", options: ["Wanunuzi wanaolipa tu", "Bodi tu", "Wanaohudumiwa, familia, wafadhili na wajitolea", "Hakuna mtu"], answer: 2, why: "Yeyote ambaye shirika linamhudumia au linamtegemea." },
      { objective: "O1", q: "AI inaweza kusaidia ramani ya safari kwa:", options: ["Kupendekeza mambo yanayokasirisha ambayo huenda umesahau", "Kuchukua nafasi ya wateja wako", "Kukusanya namba za kadi", "Kuandika maoni ya uongo"], answer: 0, why: "Inatoa mawazo; wewe unalinganisha na hali halisi." },
      { objective: "O2", q: "Kiolezo cha jibu ni:", options: ["Mkataba wa kisheria", "Dodoso", "Tovuti ya maoni", "Jibu lililoandaliwa tayari ambalo unalibadilisha kwa kila mtu"], answer: 3, why: "Violezo vinaharakisha majibu." },
      { objective: "O2", q: "Unapaswa kuipa AI nini unapoandaa kiolezo?", options: ["Nywila za wateja", "Mtindo wako na ukweli sahihi", "Hakuna", "Maoni ya mshindani"], answer: 1, why: "Ukweli na mtindo vinatoa majibu sahihi yanayolingana na biashara yako." },
      { objective: "O2", q: "Kiolezo cha AI kinasema unafungua saa 2 asubuhi (8 am), lakini unafungua saa 3 (9 am). Unafanya nini?", options: ["Kukituma hata hivyo", "Kurekebisha ukweli kabla ya kukitumia", "Kubadilisha saa zako", "Kumlaumu mteja"], answer: 1, why: "Kagua ukweli kila wakati." },
      { objective: "O3", q: "Jibu la umma kwa maoni ni kwa ajili ya nani hasa?", options: ["Aliyeandika maoni tu", "Hakuna mtu", "Mmiliki wa tovuti ya maoni", "Kila anayesoma maoni"], answer: 3, why: "Wateja wa baadaye wanasoma majibu yako." },
      { objective: "O3", q: "Mpangilio wa lalamiko katika kozi hii ni:", options: ["Sikiliza, omba radhi, tatua, fuatilia", "Bishana, kana, futa, puuza", "Subiri, subiri, subiri, subiri", "Rudisha pesa zote kila wakati"], answer: 0, why: "Mpangilio huo unageuza malalamiko kuwa imani." },
      { objective: "O3", q: "Kuandika maoni kuhusu biashara yako mwenyewe ni:", options: ["Mkakati mzuri", "Lazima", "Udanganyifu na hakupaswi kufanywa kamwe", "Sawa ukitumia AI"], answer: 2, why: "Maoni ya uongo yanawapotosha wateja." },
      { objective: "O3", q: "Maoni yana vitisho. Unapaswa:", options: ["Kutishia pia", "Kuchapisha anwani yake", "Kupuuza maoni yote", "Kutumia utaratibu wa jukwaa wa kuripoti"], answer: 3, why: "Majukwaa yana utaratibu wa maudhui ya matusi au vitisho." },
      { objective: "O4", q: "Kozi inapendekeza kukusanya maoni mangapi kwa uchambuzi?", options: ["1 hasa", "Hakuna", "Angalau 15", "Angalau 10,000"], answer: 2, why: "Maoni 15 au zaidi yanaonyesha mwenendo halisi." },
      { objective: "O4", q: "Mada ni:", options: ["Muundo wa tovuti", "Jambo linalojitokeza tena na tena", "Lalamiko moja", "Msimbo wa punguzo"], answer: 1, why: "Mada zinaonyesha matatizo ya kawaida." },
      { objective: "O4", q: "Hisia (sentiment) inamaanisha:", options: ["Kama maoni ni mazuri, mabaya au ya katikati", "Urefu wa maoni", "Nani aliyaandika", "Tarehe yake"], answer: 0, why: "Hisia ni jinsi mtu anavyojisikia nyuma ya maoni." },
      { objective: "O4", q: "Matatizo makuu yanapaswa kupangwa kwa:", options: ["Mpangilio wa alfabeti", "Nani alilalamika kwa sauti kubwa zaidi", "Jinsi yanavyojitokeza mara nyingi na jinsi yanavyoumiza", "Kuchagua bila mpango"], answer: 2, why: "Mara ngapi na athari vinaonyesha kipaumbele." },
      { objective: "O5", q: "Njia salama zaidi ya kuongeza majina ya wateja kwenye ujumbe mwingi ni:", options: ["Kutumia vishika-nafasi na kuingiza majina kwenye zana yako mwenyewe ya barua pepe au ya wateja", "Kubandika orodha nzima ya wateja kwenye zana ya AI ya jumla", "Kubahatisha majina", "Kuchapisha orodha hadharani"], answer: 0, why: "Zana yako mwenyewe inaweka taarifa za wateja chini ya udhibiti wako." },
      { objective: "O5", q: "Unapaswa kutuma ujumbe kwa wateja ambao:", options: ["Hawajawahi kukupa mawasiliano yao", "Walikuomba uache", "Uliwapata mtandaoni", "Walikubali kupokea ujumbe wako"], answer: 3, why: "Ridhaa ni muhimu, na maombi ya kujiondoa lazima yaheshimiwe." },
      { objective: "O6", q: "Kila kitendo cha kuboresha kinahitaji:", options: ["Nembo mpya", "Mhusika na kipimo", "Ofisi kubwa zaidi", "Hakuna"], answer: 1, why: "Wahusika wanakifanikisha; vipimo vinaonyesha kama kimefanya kazi." },
      { objective: "O6", q: "\"Mlituambia, tukasikiliza\" ni njia ya:", options: ["Kuficha matatizo", "Kuwaonyesha wateja ulichobadilisha", "Kuomba nywila", "Kupandisha bei"], answer: 1, why: "Kufunga mzunguko kunajenga uaminifu wa wateja." },
      { objective: "O6", q: "Baada ya siku 30 unapaswa:", options: ["Kuacha kuwasikiliza wateja", "Kufuta mpango", "Kutokagua kamwe", "Kukagua vipimo, kubaki na kilichofanya kazi na kuchagua tatizo linalofuata"], answer: 3, why: "Kuboresha ni mzunguko unaojirudia." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      1,
      4,
      6,
      8,
      9,
      12,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Ramani ya safari",
        objective: "O1",
        notYet: "Hatua zinakosekana, au nyakati dhaifu zaidi hazijawekewa alama.",
        meets: "Hatua zote tano zenye anachofanya na anachojisikia mteja, na nyakati tatu dhaifu zaidi zimewekewa alama.",
        exceeds: "Kila wakati dhaifu unaunganishwa na maoni halisi ya wateja au uchunguzi wa mfanyakazi."
      },
      {
        name: "Violezo vya majibu",
        objective: "O2",
        notYet: "Violezo chini ya vitano, au kiolezo kina ukweli usio sahihi.",
        meets: "Violezo vitano (swali, maoni mazuri, maoni mabaya, lalamiko, kufuatilia) vyenye ukweli sahihi na sauti ya upole.",
        exceeds: "Kila kiolezo kina vishika-nafasi na maelezo ya kipi cha kubadilisha kwa mtu."
      },
      {
        name: "Majibu kwa maoni na malalamiko",
        objective: "O3",
        notYet: "Jibu linabishana, linalaumu au linashiriki taarifa binafsi.",
        meets: "Majibu ni ya utulivu, yanaomba radhi pale inapohitajika na yanatoa suluhisho au njia ya kuongea nje ya ukurasa wa umma.",
        exceeds: "Lina hatua ya kufuatilia kuhakikisha tatizo limetatuliwa."
      },
      {
        name: "Muhtasari wa maoni ya wateja",
        objective: "O4",
        notYet: "Maoni chini ya 15, au majina yameachwa ndani.",
        meets: "Angalau maoni 15 yaliyoondolewa taarifa binafsi, yamepangwa katika mada na matatizo makuu matatu yamepangwa kwa uzito.",
        exceeds: "Inaonyesha mada zipi zilikaguliwa na makosa yoyote ya AI yaliyorekebishwa."
      },
      {
        name: "Mpango wa siku 30",
        objective: "O6",
        notYet: "Vitendo havina mhusika wala kipimo.",
        meets: "Kitendo kimoja, mhusika na kipimo kwa kila tatizo kuu, pamoja na namba ya kuanzia.",
        exceeds: "Unaeleza jinsi wateja watakavyoambiwa kilichobadilika."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (rubric)",
      "Wastani wa muda wa kujibu maswali ya wateja, kabla ya kozi na siku 30 baadaye",
      "Wastani wa alama za maoni na idadi ya malalamiko kwa wiki, kabla na siku 60 baadaye",
      "Mashirika yanayokamilisha angalau mzunguko mmoja wa kuboresha wa siku 30 (dodoso la kufuatilia)"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure (ChatGPT, Microsoft Copilot au Google Gemini)",
      "Hati ya violezo, na jedwali (spreadsheet) au hati ya muhtasari wa maoni na mpango",
      "Angalau maoni 15 halisi au ya mfano ya wateja yaliyoondolewa taarifa binafsi",
      "Kama dakika 60 kwa masomo na majaribio, pamoja na muda wa kutengeneza kifurushi"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha fanyeni sura moja kwa kila kipindi; andikeni kiolezo na jibu la lalamiko kwenye skrini ya pamoja.",
      "Toa seti ya maoni ya mfano kwa wanafunzi ambao bado hawana maoni halisi.",
      "Hakikisha majina, namba za simu na taarifa za afya zimeondolewa kabla maoni yoyote hayajaingia kwenye AI.",
      "Igizeni mteja aliyekasirika ili wanafunzi wajizoeze kwa sauti sikiliza, omba radhi, tatua, fuatilia.",
      "Tathmini kifurushi cha mwisho kwa rubric, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};

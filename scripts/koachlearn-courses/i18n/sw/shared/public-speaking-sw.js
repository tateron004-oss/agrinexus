"use strict";

// Koach Learn course (Swahili translation of shared/public-speaking.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "public-speaking-sw",
  lang: "sw",
  translationOf: "public-speaking",
  category: "Athletes",
  name: "Kuzungumza Hadharani na Kuwasilisha",
  skills: "Kupanga hotuba fupi, Kupanga ujumbe, Kutengeneza slaidi rahisi, Kufanya mazoezi na kudhibiti wasiwasi, Kutumia sauti na lugha ya mwili, Kujibu maswali",
  outcome: "kupanga, kufanyia mazoezi na kutoa hotuba fupi ya dakika 2 iliyo wazi, yenye mwanzo wenye nguvu, hoja kuu tatu na hitimisho lililo wazi, kudhibiti wasiwasi wako, kutumia sauti na mwili wako vizuri, na kujibu maswali kwa utulivu.",
  about: [
    "Kuzungumza mbele ya watu ni moja ya hofu zinazojulikana zaidi, na pia ni moja ya ujuzi wenye manufaa zaidi. Unautumia katika usaili wa kazi, mikutano ya timu, kuwashawishi wateja au wawekezaji, kuzungumza na wafadhili na wajitolea, mahojiano na vyombo vya habari, mikutano ya jamii na chumba cha kubadilishia nguo cha timu.",
    "Kozi hii ni kwa wanamichezo, wamiliki wa biashara, wafanyakazi wa mashirika yasiyo ya faida, maveterani, vijana, wafanyakazi na yeyote anayetaka kuzungumza kwa kujiamini. Huhitaji kuzaliwa na kipaji. Wazungumzaji wazuri wanajengwa kwa kupanga na kufanya mazoezi.",
    "Utapanga hotuba fupi, utaipa mpangilio ulio wazi, utatengeneza slaidi rahisi ukizihitaji, utafanya mazoezi, utadhibiti wasiwasi, utatumia sauti na mwili wako, na utajibu maswali. Kila somo linachukua kama dakika tano na linaisha kwa zoezi. Kazi ya mwisho ni hotuba ya dakika 2 unayojirekodi kwenye simu yako. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Jirekodi kwenye simu yako ukitoa hotuba ya dakika 2 kuhusu mada unayoijua vizuri (mchezo wako, biashara yako, jambo unalolipigania, kazi yako au ujuzi ulio nao). Lazima iwe na mwanzo wa kuvutia, hoja kuu tatu na hitimisho lililo wazi. Itazame tena, andika jambo moja ulilofanya vizuri na moja la kuboresha, kisha ujirekodi tena mara moja.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanamichezo, wamiliki wa biashara, wafanyakazi wa mashirika yasiyo ya faida, maveterani, vijana, wafanyakazi na yeyote anayehitaji kuzungumza katika usaili, mikutano ya timu, kushawishi wateja, kuzungumza na wafadhili, mahojiano na vyombo vya habari, mikutano ya jamii au chumba cha kubadilishia nguo cha timu.",
    startingPoint: "Wanaongea na watu kila siku na wanajua mada vizuri, kama mchezo wao, biashara yao, jambo wanalolipigania au kazi yao. Wengi wanahisi wasiwasi kuzungumza mbele ya kikundi, wanazunguka bila mpangilio, wanasoma kutoka kwenye slaidi, na hawajawahi kujitazama kwenye video.",
    gap: "Kuzungumza kwa uwazi kunawasaidia watu kupata kazi, kupata wateja na wafadhili, kuongoza timu na kusikilizwa katika jamii yao. Wanafunzi wanahitaji njia rahisi ya kupanga, kufanyia mazoezi na kutoa hotuba fupi na kujibu maswali, ili hofu isiwazuie.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Vifaa: simu yenye kamera na kipima muda; slaidi si lazima",
      "Mazoezi na kurekodi vinafanywa peke yako au na rafiki mmoja, ili kupunguza shinikizo",
      "Faragha: rekodi zinabaki kwenye simu ya mwanafunzi isipokuwa akichagua kuzishiriki",
      "Muda: masomo ya kama dakika tano, na hotuba ya mwisho ya dakika 2"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kwa mada unayoijua vizuri", action: "kuandika wasikilizaji wako, lengo lako kwao na wazo lako kuu moja", standard: "wazo kuu likiwa katika sentensi moja" },
    { id: "O2", condition: "Kwa hotuba ya dakika 2", action: "kuandika muhtasari wa mwanzo wa kuvutia, hoja kuu tatu zenye mifano na hitimisho lenye ombi moja la kuchukua hatua", standard: "kwenye ukurasa mmoja wa maelezo mafupi" },
    { id: "O3", condition: "Kwa hotuba yako", action: "kuamua kama unahitaji slaidi na kutengeneza zisizozidi tatu rahisi kama unazihitaji", standard: "wazo moja kwa kila slaidi na kila ukweli umekaguliwa" },
    { id: "O4", condition: "Kabla ya kutoa hotuba", action: "kufanya mazoezi kwa sauti ukitumia kipima muda na kutumia kupumua kudhibiti wasiwasi", standard: "ukimaliza ndani ya dakika 2 au chini ya hapo" },
    { id: "O5", condition: "Unapozungumza", action: "kutumia sauti yako, kuwatazama watu machoni na msimamo wa mwili ili usikike na uonekane unajiamini", standard: "ukirekebisha angalau jambo moja uliloliona kwenye rekodi yako" },
    { id: "O6", condition: "Baada ya hotuba", action: "kujibu maswali kwa utulivu, pamoja na yale usiyoweza kujibu", standard: "ukirudia kila swali na kumalizia kwa wazo lako kuu" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupanga hotuba yako",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kupanga hotuba fupi: wasikilizaji, lengo na wazo kuu moja",
          minutes: 5,
          goal: "Andika wasikilizaji wako, lengo lako na wazo lako kuu moja kwa hotuba fupi.",
          text: [
            "Kabla hujaandika neno lolote, jibu maswali matatu. Nani anasikiliza? Ninataka wafanye nini, wafikiri nini au wahisi nini baadaye? Wazo kuu moja ninalotaka walikumbuke ni lipi?",
            "Mada ile ile inabadilika kulingana na wasikilizaji. Ukizungumza na wafadhili kuhusu ghala la chakula la shirika lako, unaweza kuzingatia matokeo na kile pesa zao zinafanya. Kwa wajitolea wapya, ungezingatia zamu ya kazi inavyokuwa. Kwa timu ya vijana, kocha anayezungumza kuhusu nidhamu angetumia michezo yao wenyewe kama mifano.",
            "Andika wazo lako kuu kama sentensi moja ambayo mtoto wa miaka 12 angeweza kuirudia: \"Kufika mapema kila siku ndiko kunakoshinda michezo yenye ushindani mkali.\" au \"App yetu inaokolea maduka madogo saa mbili kwa wiki.\" Kila kitu katika hotuba yako kinapaswa kuunga mkono sentensi hiyo. Kama kitu hakiiungi mkono, kiondoe."
          ],
          steps: ["Andika nani anasikiliza na wanajali nini.", "Andika unachotaka wafanye, wafikiri au wahisi baadaye.", "Andika wazo lako kuu moja katika sentensi moja rahisi.", "Kagua: kila unachopanga kusema kinaunga mkono wazo kuu?"],
          words: [["Wasikilizaji", "watu wanaosikiliza hotuba yako."], ["Wazo kuu", "ujumbe mkuu mmoja unaotaka watu waukumbuke."]],
          slides: [
            { title: "Maswali matatu kwanza", bullets: ["Nani anasikiliza?", "Wafanye nini, wafikiri nini au wahisi nini baadaye?", "Wazo langu kuu moja ni lipi?"] },
            { title: "Endana na wasikilizaji", bullets: ["Wafadhili: matokeo na mchango wao", "Wajitolea wapya: zamu ya kazi inavyokuwa", "Timu ya vijana: michezo yao wenyewe kama mifano"] },
            { title: "Wazo kuu moja", bullets: ["Sentensi moja ambayo mtoto wa miaka 12 angeirudia", "\"App yetu inaokolea maduka madogo saa mbili kwa wiki.\"", "Kama haliungi mkono wazo, liondoe"] }
          ],
          tryIt: "Chagua mada unayoijua vizuri kwa hotuba yako ya dakika 2. Andika wasikilizaji wako, lengo lako kwao na wazo lako kuu moja katika sentensi moja.",
          youCanNow: "kupanga hotuba kwa kuchagua wasikilizaji wako, lengo lako na wazo kuu moja.",
          quickCheck: [
            { objective: "O1", q: "Kwa nini ufikirie wasikilizaji wako kabla ya kuandika hotuba?", options: ["Ili utumie maneno makubwa zaidi", "Ili hotuba iendane na wanachohitaji na wanachojali", "Ili uweze kuongea muda mrefu zaidi", "Ili uache kufanya mazoezi"], answer: 1, why: "Kuwajua wasikilizaji kunakusaidia kuchagua yaliyo muhimu kwao." },
            { objective: "O1", q: "Unazungumza na wachezaji vijana kuhusu kujiunga na klabu yako. Wazo lako kuu lingekuwa nini?", options: ["Historia kamili ya klabu tangu ilipoanza", "Orodha ya kila sheria", "Kwa nini kujiunga na klabu kutawasaidia kukua na kufurahia", "Rekodi yako mwenyewe ya ushindi"], answer: 2, why: "Wazo kuu linapaswa kuwa ujumbe mmoja ambao wasikilizaji hawa wanahitaji kuukumbuka." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Mpangilio: mwanzo wa kuvutia, hoja tatu, hitimisho",
          minutes: 5,
          goal: "Andika muhtasari wa hotuba ya dakika 2 yenye mwanzo wa kuvutia, hoja kuu tatu na hitimisho lililo wazi.",
          text: [
            "Mpangilio rahisi unawasaidia wasikilizaji wakufuate na unakusaidia ukumbuke kinachofuata. Tumia: mwanzo wa kuvutia, hoja tatu, hitimisho.",
            "Mwanzo wa kuvutia unavuta usikivu katika sekunde 15 za kwanza: hadithi fupi, ukweli wa kushangaza au swali. \"Msimu uliopita tulipoteza michezo minne kwa pointi moja.\" Kisha toa hoja kuu tatu. Tatu ni rahisi kukumbuka. Ziunge mkono kila moja kwa mfano au namba. Kisha hitimisha: rudia wazo lako kuu na uwaambie watu wafanye nini baadaye. \"Njooni mapema wiki hii. Nitakuwepo saa 6.\" au \"Jiandikisheni kwa zamu moja kabla ya Ijumaa.\"",
            "Kwa hotuba ya dakika 2, hiyo ni kama sekunde 15 kwa mwanzo wa kuvutia, sekunde 30 kwa kila hoja na sekunde 15 kwa hitimisho. Andika muhtasari kama maelezo mafupi, si hotuba nzima iliyoandikwa, ili usikike kwa kawaida."
          ],
          steps: ["Andika mwanzo wa kuvutia: hadithi, ukweli wa kushangaza au swali.", "Andika hoja kuu tatu, kila moja na mfano mmoja au namba.", "Andika hitimisho: rudia wazo kuu na uombe hatua moja.", "Pima muda: kama 15 s mwanzo, 30 s kila hoja, 15 s hitimisho."],
          words: [["Mwanzo wa kuvutia (hook)", "ufunguzi unaovuta usikivu wa watu."], ["Ombi la kuchukua hatua", "kuwaambia wasikilizaji jambo moja la kufanya baadaye."], ["Muhtasari", "orodha fupi ya sehemu za hotuba yako, kwa mpangilio."]],
          slides: [
            { title: "Mwanzo wa kuvutia, hoja tatu, hitimisho", bullets: ["Rahisi kwa wasikilizaji kufuata", "Rahisi kwako kukumbuka"] },
            { title: "Mwanzo wa kuvutia (kama sekunde 15)", bullets: ["Hadithi fupi", "Ukweli wa kushangaza", "Swali kwa wasikilizaji"] },
            { title: "Hoja tatu (kama sekunde 30 kila moja)", bullets: ["Tatu ni rahisi kukumbuka", "Unga mkono kila moja kwa mfano au namba"] },
            { title: "Hitimisho (kama sekunde 15)", bullets: ["Rudia wazo lako kuu", "Hatua moja iliyo wazi: \"Jiandikisheni kabla ya Ijumaa.\"", "Tumia maelezo mafupi, si hotuba nzima iliyoandikwa"] }
          ],
          tryIt: "Andika muhtasari wa hotuba yako ya dakika 2: mwanzo mmoja wa kuvutia, hoja tatu kila moja na mfano, na hitimisho lenye ombi moja la kuchukua hatua. Yaweke kama maelezo mafupi kwenye ukurasa mmoja au kidokezo kimoja cha simu.",
          youCanNow: "kuandika muhtasari wa hotuba fupi yenye mwanzo wa kuvutia, hoja kuu tatu na hitimisho lenye ombi la kuchukua hatua.",
          quickCheck: [
            { objective: "O2", q: "Kazi ya mwanzo wa kuvutia ni ipi?", options: ["Kuvuta usikivu katika sekunde chache za kwanza", "Kumaliza hotuba", "Kuorodhesha hoja zako tatu", "Kuwashukuru wasikilizaji"], answer: 0, why: "Mwanzo wa kuvutia unawafanya watu wasikilize mara moja." },
            { objective: "O2", q: "Muhtasari wako una hoja kuu saba kwa hotuba ya dakika 2. Ungefanya nini?", options: ["Kuongea haraka zaidi ili zote zitoshe", "Kuongeza slaidi zaidi", "Kuzibakiza zote na kuacha hitimisho", "Kuchagua hoja tatu muhimu zaidi"], answer: 3, why: "Hoja tatu zinatosha katika muda na ni rahisi kukumbuka." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Slaidi rahisi zinazosaidia, si kudhuru",
          minutes: 4,
          goal: "Tengeneza slaidi rahisi, au uamue kwamba huzihitaji.",
          text: [
            "Slaidi zinapaswa kuwasaidia wasikilizaji, si kubeba hotuba yako iliyoandikwa. Hotuba nyingi fupi nzuri sana hazitumii slaidi kabisa. Zitumie wakati picha, chati au maneno machache muhimu yanafanya hoja yako iwe wazi zaidi.",
            "Kanuni zinazofanya kazi: wazo moja kwa kila slaidi; kichwa kifupi; maneno machache tu au picha moja; maandishi makubwa ambayo watu walio nyuma wanaweza kuyasoma; tofauti kubwa ya rangi, kama maandishi meusi kwenye mandharinyuma nyeupe. Usisome slaidi zako kwa sauti neno kwa neno; wasikilizaji wanasoma haraka kuliko unavyoongea.",
            "Zana za bure kama Google Slides, Microsoft PowerPoint ya wavuti na Canva zinakuwezesha kutengeneza slaidi kwenye kivinjari. Msaidizi wa AI anaweza kupendekeza vichwa vya slaidi kutokana na muhtasari wako, lakini punguza maandishi yake sana na ukague kila ukweli na namba anayokupa."
          ],
          steps: ["Jiulize: slaidi inafanya hoja hii iwe wazi zaidi? Kama sivyo, iache.", "Wazo moja kwa kila slaidi, na kichwa kifupi.", "Tumia maneno machache au picha moja.", "Fanya maandishi makubwa yenye tofauti kubwa ya rangi.", "Fanya mazoezi bila kusoma slaidi kwa sauti."],
          words: [["Seti ya slaidi", "slaidi zote za hotuba moja."], ["Tofauti ya rangi", "jinsi maandishi yanavyoonekana wazi dhidi ya mandharinyuma."]],
          slides: [
            { title: "Slaidi zinawasaidia wasikilizaji", bullets: ["Si hotuba yako iliyoandikwa", "Hotuba nyingi fupi nzuri hazitumii slaidi"] },
            { title: "Kanuni za slaidi", bullets: ["Wazo moja kwa kila slaidi", "Maneno machache au picha moja", "Maandishi makubwa, tofauti kubwa ya rangi"] },
            { title: "Usizisome", bullets: ["Watu wanasoma haraka kuliko unavyoongea", "Badala yake, zungumza kuhusu slaidi"] },
            { title: "Zana za bure", bullets: ["Google Slides, PowerPoint ya wavuti, Canva", "AI inaweza kupendekeza vichwa; vipunguze na uvikague"] }
          ],
          tryIt: "Amua kama hotuba yako ya dakika 2 inahitaji slaidi. Kama ndiyo, tengeneza zisizozidi tatu kwenye zana ya bure, wazo moja kila moja. Kama hapana, andika sentensi moja kwa nini hotuba inafanya kazi bila slaidi.",
          youCanNow: "kutengeneza slaidi rahisi zinazosomeka au kuamua kwa kujiamini kuzungumza bila slaidi.",
          quickCheck: [
            { objective: "O3", q: "Slaidi inasaidia hotuba lini?", options: ["Inapobeba hotuba yako yote iliyoandikwa", "Picha, chati au maneno machache yanapofanya hoja iwe wazi zaidi", "Huna la kusema", "Kila wakati, kwa kila sentensi"], answer: 1, why: "Slaidi zinasaidia tu zinapofanya hoja iwe wazi zaidi." },
            { objective: "O3", q: "Msaidizi wa AI anakupa slaidi iliyojaa maneno 80. Ungefanya nini?", options: ["Kuisoma neno kwa neno", "Kufanya maandishi yawe madogo", "Kuongeza maneno zaidi", "Kuipunguza iwe kichwa kifupi na maneno machache, na kukagua ukweli"], answer: 3, why: "Slaidi rahisi zenye ukweli uliokaguliwa zinasaidia; ukuta wa maandishi unadhuru." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupanga hotuba yako",
        questions: [
          { objective: "O1", q: "Unapaswa kuamua nini kabla ya kuandika hotuba yako?", options: ["Mavazi yako tu", "Utatumia slaidi ngapi", "Wasikilizaji wako, lengo lako na wazo lako kuu moja", "Maswali yatachukua muda gani"], answer: 2, why: "Mambo hayo matatu yanaamua kila kitu kingine katika hotuba." },
          { objective: "O2", q: "Upi ni mwanzo mzuri wa kuvutia?", options: ["\"Msimu uliopita tulipoteza michezo minne kwa pointi moja.\"", "\"Ehh, basi, nitaongea sasa.\"", "\"Samahani, mimi si hodari wa hili.\"", "Kusoma slaidi ya kichwa"], answer: 0, why: "Hadithi fupi au ukweli wa kushangaza unavuta usikivu." },
          { objective: "O2", q: "Kwa nini utumie hoja kuu tatu?", options: ["Ni sheria", "Hoja nyingi zaidi zinaonekana za busara zaidi kila wakati", "Zinajaza muda", "Tatu ni rahisi kwa watu kukumbuka"], answer: 3, why: "Hoja tatu ni rahisi kufuata na kukumbuka." },
          { objective: "O2", q: "Hitimisho zuri linafanya nini?", options: ["Linaisha kwa \"Basi, ndiyo hivyo, nadhani\"", "Linarudia wazo kuu na kuomba hatua moja", "Linaongeza hoja mpya ya nne", "Linaomba msamaha kwa hotuba"], answer: 1, why: "Hitimisho lililo wazi linawaacha watu wakijua la kufanya." },
          { objective: "O3", q: "Slaidi ipi ni bora zaidi?", options: ["Vipengele kumi kwa maandishi madogo", "Ukurasa mzima wa hotuba yako iliyoandikwa", "Wazo moja, kichwa kifupi na maandishi makubwa", "Maandishi ya kijivu hafifu kwenye nyeupe"], answer: 2, why: "Slaidi rahisi zinazosomeka zinawasaidia wasikilizaji." }
        ]
      }
    },
    {
      name: "Sura 2: Kutoa hotuba kwa kujiamini",
      lessons: [
        {
          objectives: ["O4"],
          title: "Mazoezi na wasiwasi",
          minutes: 5,
          goal: "Fanyia hotuba mazoezi kwa sauti na utumie njia rahisi kudhibiti wasiwasi.",
          text: [
            "Wasiwasi ni jambo la kawaida, hata kwa wazungumzaji wa kitaaluma na wanamichezo kabla ya mchezo mkubwa. Moyo kwenda mbio na mikono kutetemeka ni mwili wako ukijiandaa. Huhitaji kuondoa wasiwasi; unahitaji kuutumia.",
            "Mazoezi ndiyo dawa bora. Sema hotuba kwa sauti angalau mara tatu, ukiwa umesimama, ukitumia kipima muda. Kisha jirekodi kwenye simu yako na ujitazame tena. Kisha ijaribu mbele ya mtu mmoja: rafiki, mwanafamilia, kocha au mfanyakazi mwenzako. Kila mzunguko, inakuwa rahisi zaidi.",
            "Siku yenyewe: pumua polepole (vuta pumzi kwa hesabu 4, toa kwa hesabu 6) kabla ya kuanza; shika maelezo yako au tulia mikono; tafuta uso wa kirafiki chumbani; na kumbuka wasikilizaji wanataka ufanye vizuri. Ukipoteza mahali ulipofika, simama kidogo, tazama maelezo yako na uendelee. Kimya kifupi kinaonekana kirefu kwako lakini kifupi kwao."
          ],
          steps: ["Sema hotuba kwa sauti mara tatu, ukiwa umesimama, na kipima muda.", "Jirekodi kwenye simu yako na ujitazame tena.", "Fanya mazoezi mara moja mbele ya mtu mmoja na umwombe ushauri mmoja.", "Kabla ya kuanza: vuta pumzi kwa 4, toa kwa 6.", "Ukipoteza mahali: simama kidogo, tazama maelezo, endelea."],
          words: [["Kufanya mazoezi ya hotuba", "kusema hotuba kwa sauti kabla ya kuitoa."], ["Wasiwasi", "hisia ya woga kabla ya jambo muhimu; ni ya kawaida na ina manufaa."]],
          slides: [
            { title: "Wasiwasi ni wa kawaida", bullets: ["Hata wataalamu na wanamichezo wanauhisi", "Mwili wako unajiandaa", "Utumie; usipigane nao"] },
            { title: "Fanya mazoezi kwa sauti", bullets: ["Mara tatu, ukiwa umesimama, na kipima muda", "Jirekodi na ujitazame tena", "Ijaribu mbele ya mtu mmoja"] },
            { title: "Siku yenyewe", bullets: ["Pumua: vuta kwa 4, toa kwa 6", "Tafuta uso wa kirafiki", "Wasikilizaji wanataka ufanye vizuri"] },
            { title: "Umepoteza mahali?", bullets: ["Simama kidogo", "Tazama maelezo yako", "Endelea: kimya ni kifupi zaidi kwao"] }
          ],
          tryIt: "Simama na useme hotuba yako ya dakika 2 kwa sauti mara tatu ukitumia kipima muda. Andika kila mzunguko unachukua muda gani na uondoe chochote kinachokufanya upite dakika 2.",
          youCanNow: "kufanyia hotuba mazoezi kwa sauti, kuipimia muda, na kutumia kupumua na kimya kifupi kudhibiti wasiwasi.",
          quickCheck: [
            { objective: "O4", q: "Moyo wako ukienda mbio kabla ya hotuba, hiyo inamaanisha nini?", options: ["Mwili wako unajiandaa, na hilo ni la kawaida", "Unapaswa kufuta hotuba", "Hujajiandaa", "Wewe ni mgonjwa"], answer: 0, why: "Wasiwasi ni ishara ya kawaida kwamba mwili wako unajiandaa." },
            { objective: "O4", q: "Mazoezi yako yanachukua dakika 3, lakini una dakika 2. Ungefanya nini?", options: ["Kuongea haraka sana", "Kuacha hitimisho siku yenyewe", "Kuondoa sehemu zisizounga mkono wazo lako kuu na kupima muda tena", "Kuomba muda zaidi siku yenyewe"], answer: 2, why: "Kuondoa sehemu za ziada kunaweka hotuba ndani ya muda na kwenye lengo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Sauti na lugha ya mwili",
          minutes: 5,
          goal: "Tumia sauti, macho na mwili wako ili usikike na uonekane unajiamini.",
          text: [
            "Jinsi unavyosema ni muhimu kama unachosema. Ongea polepole kidogo na kwa sauti kubwa kidogo kuliko katika mazungumzo ya kawaida. Simama kidogo baada ya hoja muhimu ili ziingie akilini. Badilisha sauti yako ili usisikike kama unasoma tu, na punguza maneno ya kujaza kama \"ehh\" na \"yaani\" kwa kunyamaza kidogo badala yake.",
            "Simama wima, miguu ikiwa imeachana kama upana wa mabega, na uzito wako sawa kwenye miguu yote. Acha mikono itulie pembeni au itumie kwa ishara za kawaida; usikunje mikono kifuani wala kuweka mikono mfukoni. Watazame watu halisi, mmoja mmoja, kwa sentensi moja au mbili kila mmoja. Kwenye simu ya video, tazama kamera, si uso wako mwenyewe kwenye skrini.",
            "Tamaduni tofauti zinaelewa kutazamana machoni na ishara za mikono kwa njia tofauti, kwa hiyo watazame wasikilizaji wako na ubadilike. Lengo ni kuonekana mtulivu, mkarimu na unayewajali."
          ],
          steps: ["Ongea polepole kidogo na kwa sauti kubwa kidogo kuliko kawaida.", "Simama kidogo baada ya hoja muhimu.", "Badala ya \"ehh\", nyamaza kidogo.", "Simama wima, miguu kama upana wa mabega, mikono imetulia.", "Mtazame mtu mmoja kwa sentensi moja, kisha mwingine.", "Kwenye video, tazama kamera."],
          words: [["Lugha ya mwili", "kile ambacho msimamo, uso, mikono na macho yako vinasema bila maneno."], ["Maneno ya kujaza", "sauti kama \"ehh\", \"mmm\" na \"yaani\" zinazojaza kimya."]],
          slides: [
            { title: "Sauti yako", bullets: ["Polepole kidogo na kwa sauti kubwa kidogo", "Simama kidogo baada ya hoja muhimu", "Badilisha sauti; badala ya \"ehh\", nyamaza kidogo"] },
            { title: "Mwili wako", bullets: ["Simama wima, miguu kama upana wa mabega", "Mikono imetulia au ishara za kawaida", "Usikunje mikono wala kuitia mfukoni"] },
            { title: "Macho yako", bullets: ["Mtu mmoja, sentensi moja, kisha anayefuata", "Kwenye video: tazama kamera"] },
            { title: "Soma hali ya chumba", bullets: ["Tamaduni zinatofautiana kuhusu kutazamana na ishara", "Lenga kuwa mtulivu, mkarimu na unayewajali"] }
          ],
          tryIt: "Jirekodi kwa sekunde 30 za hotuba yako kwenye simu. Itazame bila sauti: kagua msimamo, mikono na macho. Kisha isikilize ukiwa umefumba macho: hesabu mara ngapi umesema \"ehh\" na uangalie kasi yako. Chagua jambo moja la kurekebisha.",
          youCanNow: "kutumia sauti, msimamo, mikono na kutazama watu machoni ili uonekane mtulivu na unayejiamini.",
          quickCheck: [
            { objective: "O5", q: "Neno la kujaza ni nini?", options: ["Neno muhimu katika wazo lako kuu", "Neno kama \"ehh\" au \"yaani\" linalojaza kimya", "Neno kwenye slaidi", "Neno la mwisho la hotuba yako"], answer: 1, why: "Maneno ya kujaza yanajaza kimya; kunyamaza kidogo ni bora zaidi." },
            { objective: "O5", q: "Ukitazama rekodi yako, unajiona ukitazama sakafu. Ungefanya nini?", options: ["Kumtazama mtu mmoja kwa sentensi moja, kisha mwingine", "Kufumba macho unapoongea", "Kusoma maelezo yako muda wote", "Kutazama dari tu"], answer: 0, why: "Kumtazama mtu mmoja kwa wakati kunaonyesha kujiamini." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kujibu maswali",
          minutes: 5,
          goal: "Jibu maswali baada ya hotuba kwa utulivu na uwazi, pamoja na yale usiyoweza kujibu.",
          text: [
            "Maswali yanamaanisha watu walikuwa wakisikiliza. Jiandae kwa kuandika maswali matatu unayotarajia zaidi kuulizwa na jibu fupi kwa kila moja.",
            "Mtu akiuliza: sikiliza swali lote, mshukuru, na urudie au ulieleze kwa maneno mengine ili kila mtu alisikie. Jibu kwa ufupi, kwa sekunde 30 au chini ukiweza, kisha uulize: \"Hilo limejibu swali lako?\" Kama hujui, sema hivyo kwa uaminifu: \"Sijui, lakini nitatafuta na kukujibu kabla ya Ijumaa.\" Kisha fanya hivyo. Usibuni jibu kamwe.",
            "Kwa swali la uhasama au lisilohusiana na mada, baki mtulivu na mwenye adabu: \"Hiyo ni hoja ya haki. Tuzungumze baadaye ili tuipe muda unaostahili.\" Mwandishi wa habari au mfadhili anaweza pia kuuliza maswali magumu; tumia daraja kurudi kwenye wazo lako kuu: \"Ninachoweza kukuambia ni...\". Maliza muda wa maswali kwa hitimisho lako tena ili wazo lako kuu liwe jambo la mwisho watu wanalosikia."
          ],
          steps: ["Kabla: andika maswali matatu yanayotarajiwa na majibu mafupi.", "Sikiliza swali lote.", "Mshukuru na urudie swali ili kila mtu asikie.", "Jibu kwa ufupi, kisha uulize kama limemjibu.", "Hujui? Sema hivyo na uahidi kufuatilia.", "Maliza kwa kurudia hitimisho lako."],
          words: [["Maswali na majibu (Q&A)", "muda baada ya hotuba wa kuuliza maswali."], ["Daraja", "maneno yanayorudisha jibu gumu kwenye ujumbe wako mkuu."]],
          slides: [
            { title: "Jiandae", bullets: ["Andika maswali matatu yanayotarajiwa", "Andika jibu fupi kwa kila moja"] },
            { title: "Kujibu", bullets: ["Sikiliza swali lote", "Mshukuru na urudie swali", "Jibu kwa ufupi, kisha uulize"] },
            { title: "Usipojua", bullets: ["Sema hivyo kwa uaminifu", "\"Nitatafuta na kukujibu kabla ya Ijumaa.\"", "Usibuni kamwe"] },
            { title: "Maswali magumu", bullets: ["Baki mtulivu na mwenye adabu", "Pendekeza mzungumze baadaye", "Daraja: \"Ninachoweza kukuambia ni...\""] }
          ],
          tryIt: "Kazi ya mwisho: jirekodi kwenye simu ukitoa hotuba yako ya dakika 2. Kisha rafiki akuulize maswali mawili (au ujiulize mawili) na urekodi majibu yako. Itazame tena, andika jambo moja zuri na moja la kurekebisha, na ujirekodi tena ukitoa hotuba.",
          youCanNow: "kutoa hotuba fupi na kujibu maswali kwa utulivu, pamoja na yale usiyoweza kujibu bado.",
          quickCheck: [
            { objective: "O6", q: "Daraja ni nini katika kujibu maswali?", options: ["Slaidi inayounganisha hoja mbili", "Kimya kabla ya hotuba yako", "Maneno yanayokutoa kwenye swali na kukurudisha kwenye ujumbe wako mkuu", "Njia ya kukwepa kila swali"], answer: 2, why: "Daraja kama \"Ninachoweza kukuambia ni...\" linakurudisha kwenye ujumbe wako." },
            { objective: "O6", q: "Mtu anauliza swali usiloweza kujibu. Ungesema nini?", options: ["Kubuni jibu", "Kupuuza swali", "Kumwambia ni swali baya", "\"Sijui, lakini nitatafuta na kukujibu kabla ya Ijumaa.\""], answer: 3, why: "Uaminifu pamoja na siku maalum ya kufuatilia unalinda imani." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kutoa hotuba kwa kujiamini",
        questions: [
          { objective: "O4", q: "Njia bora ya kujiandaa kwa hotuba ni ipi?", options: ["Kuisoma kimya mara moja", "Kuisema kwa sauti mara kadhaa, ukiwa umesimama, na kipima muda", "Kukariri slaidi tu", "Kuongea bila kujiandaa"], answer: 1, why: "Mazoezi kwa sauti ndiyo dawa bora ya wasiwasi." },
          { objective: "O4", q: "Unapoteza mahali katikati ya hotuba. Unafanya nini?", options: ["Kuomba msamaha mara nyingi", "Kuondoka jukwaani", "Kuanza upya tangu mwanzo", "Kusimama kidogo, kutazama maelezo yako na kuendelea"], answer: 3, why: "Kimya kifupi ni cha kawaida na watu hawakigundui sana." },
          { objective: "O5", q: "Kwenye simu ya video, unapaswa kutazama wapi unapoongea?", options: ["Kamera", "Uso wako mwenyewe kwenye skrini", "Kibodi", "Nje ya dirisha"], answer: 0, why: "Kutazama kamera kunaonekana kama kuwatazama watu machoni." },
          { objective: "O5", q: "Njia nzuri ya kupunguza maneno ya kujaza kama \"ehh\" ni ipi?", options: ["Kuongea haraka zaidi", "Kuyabadilisha kwa kunyamaza kidogo", "Kusema \"yaani\" badala yake", "Kutoacha kuongea kamwe"], answer: 1, why: "Kunyamaza kidogo kunasikika kama kujiamini; maneno ya kujaza hayasikiki hivyo." },
          { objective: "O6", q: "Mtu anauliza swali usiloweza kujibu. Lipi ni bora zaidi?", options: ["Kubuni jibu", "Kumpuuza", "Kusema hujui, na kuahidi kufuatilia kabla ya siku maalum", "Kubadilisha mada bila kusema chochote"], answer: 2, why: "Uaminifu pamoja na kufuatilia unalinda imani." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kuzungumza Hadharani na Kuwasilisha",
    questions: [
      { objective: "O1", q: "\"Wazo kuu\" la hotuba ni:", options: ["Sehemu ndefu zaidi", "Ujumbe mkuu mmoja unaotaka watu waukumbuke", "Muundo wa slaidi zako", "Kichwa cha slaidi yako ya kwanza"], answer: 1, why: "Kila kitu katika hotuba kinaunga mkono wazo kuu." },
      { objective: "O1", q: "Utazungumza na wajitolea wapya kuhusu ghala lako la chakula. Unapaswa kuzingatia nini?", options: ["Fomu zako za kodi", "Kumbukumbu za mikutano ya bodi ya mwaka jana", "Kila programu mnayoendesha", "Zamu ya mjitolea inavyokuwa"], answer: 3, why: "Fanya hotuba iendane na wanachohitaji wasikilizaji hao." },
      { objective: "O1", q: "Sehemu ya hotuba yako isipounga mkono wazo kuu, unapaswa:", options: ["Kuiondoa", "Kuirefusha", "Kuiweka mwanzoni", "Kuiweka kwenye slaidi"], answer: 0, why: "Kuondoa kunafanya hotuba iwe wazi na fupi." },
      { objective: "O2", q: "Mpangilio rahisi wa hotuba katika kozi hii ni:", options: ["Msamaha, maelezo, kwaheri", "Slaidi, slaidi zaidi, maswali", "Mwanzo wa kuvutia, hoja tatu, hitimisho", "Hadithi, hadithi, hadithi"], answer: 2, why: "Mwanzo wa kuvutia, hoja tatu na hitimisho ni rahisi kufuata." },
      { objective: "O2", q: "Katika hotuba ya dakika 2, kila hoja kuu inachukua muda gani takriban?", options: ["Sekunde 5", "Sekunde 30", "Dakika 2", "Dakika 10"], answer: 1, why: "Kama 15 s mwanzo, 30 s kila hoja, 15 s hitimisho." },
      { objective: "O2", q: "Lipi ni ombi la kuchukua hatua lililo wazi?", options: ["\"Asanteni, nadhani.\"", "\"Maswali yoyote? Hakuna? Sawa.\"", "\"Labda mfikirie siku moja.\"", "\"Jiandikisheni kwa zamu moja kabla ya Ijumaa.\""], answer: 3, why: "Linawaambia watu hasa la kufanya na lini." },
      { objective: "O2", q: "Kwa nini utumie maelezo mafupi badala ya hotuba nzima iliyoandikwa?", options: ["Unasikika kwa kawaida zaidi", "Hotuba zilizoandikwa haziruhusiwi", "Maelezo ni marefu zaidi", "Ili usome kila neno"], answer: 0, why: "Maelezo mafupi yanakufanya usikike kwa kawaida huku ukibaki kwenye mstari." },
      { objective: "O3", q: "Unapaswa kutumia slaidi lini?", options: ["Kwa kila sentensi", "Picha, chati au maneno machache yanapofanya hoja iwe wazi zaidi", "Kamwe", "Kwa hotuba yako iliyoandikwa tu"], answer: 1, why: "Slaidi zinapaswa kuwasaidia wasikilizaji kuelewa." },
      { objective: "O3", q: "Kwa nini usisome slaidi neno kwa neno?", options: ["Ni haraka mno", "Slaidi ni siri", "Wasikilizaji wanasoma haraka kuliko unavyoongea", "Ni kinyume cha sheria"], answer: 2, why: "Kusoma slaidi kunawapoteza wasikilizaji." },
      { objective: "O3", q: "Msaidizi wa AI anakupa maandishi ya slaidi. Unapaswa kufanya nini?", options: ["Kuyatumia yote kama yalivyo", "Kuyapunguza na kukagua kila ukweli na namba", "Kuyasoma kwa sauti neno kwa neno", "Kuongeza maandishi zaidi"], answer: 1, why: "AI inaweza kukosea na kuwa na maneno mengi; wewe ndiye unayeongoza." },
      { objective: "O4", q: "Wasiwasi kabla ya hotuba ni:", options: ["Ishara kwamba unapaswa kufuta hotuba", "Nadra", "Kwa wanaoanza tu", "Wa kawaida, ni mwili wako ukijiandaa"], answer: 3, why: "Hata wataalamu wanahisi wasiwasi; unaweza kuutumia." },
      { objective: "O4", q: "Hatua ipi ya mazoezi inakuja baada ya kuisema kwa sauti mara tatu?", options: ["Kujirekodi kwenye simu yako na kujitazama tena", "Kufuta maelezo yako", "Kuongeza hoja kumi zaidi", "Kuacha kufanya mazoezi"], answer: 0, why: "Kutazama rekodi kunaonyesha cha kurekebisha." },
      { objective: "O4", q: "Njia ya haraka ya kutuliza kabla tu ya kuanza ni:", options: ["Kunywa kahawa nyingi", "Kuvuta pumzi kwa 4, kutoa kwa 6", "Kukimbia papo hapo kwa dakika 5", "Kusoma barua pepe zako zote"], answer: 1, why: "Kupumua polepole kunatuliza mwili." },
      { objective: "O5", q: "Msimamo upi unaonekana wa kujiamini?", options: ["Mikono imekunjwa kifuani", "Mikono mfukoni", "Kusimama wima, miguu kama upana wa mabega, mikono imetulia", "Kuegemea ukuta"], answer: 2, why: "Msimamo ulio wazi na thabiti unaonekana mtulivu na wa kujiamini." },
      { objective: "O5", q: "Kuwatazama watu machoni vizuri katika kikundi kunamaanisha:", options: ["Kumkodolea mtu mmoja macho muda wote", "Kutazama sakafu", "Kutazama dari", "Kumtazama mtu mmoja kwa sentensi moja, kisha mwingine"], answer: 3, why: "Kunaungana na watu wengi kwa zamu." },
      { objective: "O5", q: "Ukilinganisha na mazungumzo ya kawaida, unapaswa kuongea:", options: ["Polepole kidogo na kwa sauti kubwa kidogo", "Haraka zaidi sana", "Kwa kunong'ona", "Bila kunyamaza hata kidogo"], answer: 0, why: "Polepole na kwa sauti kubwa zaidi kunamsaidia kila mtu kusikia na kufuata." },
      { objective: "O6", q: "Kwa nini urudie swali kabla ya kulijibu?", options: ["Kupoteza muda", "Ili kila mtu alisikie na uhakikishe umelielewa", "Kujionyesha", "Kwa sababu aliyeuliza amelisahau"], answer: 1, why: "Kurudia kunasaidia chumba chote na kukagua kama umeelewa." },
      { objective: "O6", q: "Mfadhili anauliza swali gumu. \"Daraja\" zuri ni:", options: ["\"Sina la kusema.\" na kuondoka", "\"Hilo ni swali la kijinga.\"", "\"Ninachoweza kukuambia ni...\" kisha kurudi kwenye ujumbe wako mkuu", "Kubuni namba"], answer: 2, why: "Daraja linajibu kwa adabu na kurudi kwenye ujumbe wako." },
      { objective: "O6", q: "Mtu analeta lalamiko lisilohusiana na mada wakati wa maswali na majibu. Lipi ni bora zaidi?", options: ["Kubishana naye hadi anyamaze", "Kumpuuza kabisa", "Kumaliza hotuba mapema", "Kubaki na adabu na kupendekeza mzungumze baadaye"], answer: 3, why: "Kunamheshimu na kulinda muda kwa ajili ya kila mtu." },
      { objective: "O6", q: "Jambo la mwisho watu wanalopaswa kusikia baada ya maswali na majibu ni lipi?", options: ["Hitimisho lako na wazo lako kuu tena", "Msamaha", "\"Ehh, sawa, kwaherini.\"", "Mada mpya"], answer: 0, why: "Kumalizia kwa hitimisho lako kunafanya wazo kuu libaki akilini." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [1, 3, 5, 8, 10, 12, 13, 15, 17]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Wazo kuu", objective: "O1", notYet: "Hotuba haina ujumbe mkuu ulio wazi.", meets: "Wazo kuu moja ambalo msikilizaji angeweza kulirudia kwa sentensi moja.", exceeds: "Wazo kuu linaendana na wasikilizaji na mahitaji yao." },
      { name: "Mpangilio", objective: "O2", notYet: "Inakosa mwanzo wa kuvutia, hoja au hitimisho.", meets: "Mwanzo wa kuvutia, hoja kuu tatu zenye mifano na hitimisho lenye ombi moja la kuchukua hatua.", exceeds: "Hitimisho linarudia wazo kuu na ombi la kuchukua hatua ni mahususi." },
      { name: "Muda", objective: "O4", notYet: "Zaidi ya dakika 2, au wazi kwamba haikufanyiwa mazoezi.", meets: "Inaisha ndani ya dakika 2 au chini, kutoka kwenye maelezo mafupi, si hotuba iliyoandikwa.", exceeds: "Inasikika ya kawaida na tulivu tangu mwanzo hadi mwisho." },
      { name: "Sauti na mwili", objective: "O5", notYet: "Ni vigumu kusikia, maneno mengi ya kujaza, au hakuna kutazama watu machoni.", meets: "Sauti wazi, kasi thabiti, msimamo mzuri na kutazama kamera.", exceeds: "Rekodi ya pili inaonyesha marekebisho yaliyochaguliwa baada ya kutazama ya kwanza." },
      { name: "Kujibu maswali", objective: "O6", notYet: "Alibuni majibu au alijitetea kwa ukali.", meets: "Alirudia kila swali na akajibu kwa utulivu, au aliahidi kufuatilia.", exceeds: "Alitumia daraja kurudi kwenye wazo kuu mwishoni." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaotoa hotuba, ushawishi au uwasilishaji kazini, shuleni, kwenye timu au katika jamii yao ndani ya siku 60 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kujiamini zaidi kuzungumza katika usaili au mikutano",
      "Wanafunzi ambao rekodi yao ya pili inapata alama za juu zaidi kwenye rubriki kuliko ya kwanza",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya kazi au ujuzi wa watu ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu yenye kamera na kipima muda",
      "Karatasi au kidokezo cha simu kwa muhtasari",
      "Zana ya bure ya slaidi kama Google Slides au Canva (si lazima)",
      "Kama dakika 60 kwa jumla, pamoja na muda wa kurekodi hotuba ya mwisho"
    ],
    facilitatorNotes: [
      "Anza na vikundi vidogo au watu wawili wawili ili wanafunzi wenye wasiwasi wafanye mazoezi bila shinikizo kubwa.",
      "Toa maoni kwa kuanza na jambo moja zuri, kisha jambo moja la kurekebisha.",
      "Waache wanafunzi waweke rekodi zao kuwa siri; washiriki tu wakichagua.",
      "Waache wanafunzi wachague mada wanazozijua vizuri, kama mchezo wao, kazi yao, biashara yao au jambo wanalolipigania.",
      "Pima rekodi ya mwisho kwa rubriki na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};

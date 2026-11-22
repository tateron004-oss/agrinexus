"use strict";

// Koach Learn course (Swahili translation of youth/youth-digital-wellbeing.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "youth-digital-wellbeing-sw",
  lang: "sw",
  translationOf: "youth-digital-wellbeing",
  category: "Youth",
  name: "Ustawi wa Kidijitali na Muda Mzuri wa Skrini",
  skills: "Kuangalia muda wako halisi wa skrini, Kutambua mbinu zinazokufanya uendelee kusogeza, Kulinda usingizi wako dhidi ya skrini, Kudhibiti arifa na kuweka mipaka ya apps, Kujenga mlisho bora, Kutengeneza na kujaribu mpango wa skrini",
  outcome: "kuangalia jinsi unavyotumia simu yako kwa kweli, kutambua mbinu zinazokuvuta urudi, kubadilisha mipangilio na tabia zako ili kulinda usingizi, umakini na hisia zako, na kufuata mpango wako wa skrini kwa wiki moja.",
  about: [
    "Simu, michezo na mitandao ya kijamii vinaweza kuwa vizuri: marafiki, muziki, kujifunza, kubuni vitu, kupata msaada. Lakini pia vimetengenezwa ili ubaki navyo muda mrefu iwezekanavyo. Ustawi wa kidijitali ni kutumia skrini kwa njia inayokusaidia, si inayochukua usingizi wako, masomo, michezo, kazi au hisia zako.",
    "Kozi hii ni ya vijana wanaotaka kujidhibiti zaidi, si kuhubiriwa. Hakuna atakayekuambia utupe simu yako. Utaangalia namba zako mwenyewe, utajifunza mbinu ambazo apps zinatumia, utabadilisha mipangilio michache na kujenga mpango unaofaa maisha yako.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\" kwenye simu au kifaa chako. Kuna jaribio fupi la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Andika mpango wako wa skrini na uujaribu kwa siku saba: lengo lako la muda wa skrini, apps zako mbili za juu za kupunguza (na mipaka iliyowekwa kwenye simu yako), mabadiliko ya arifa, muda wa kuzima skrini kabla ya kulala na mahali pa kuegesha simu usiku, vitu viwili vya kufanya badala ya kusogeza, na badiliko moja kwenye mlisho wako. Mwisho wa wiki, linganisha muda wako wa skrini na usingizi na wiki iliyopita.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana, wengi wao wakiwa katika miaka ya ujana (teens), wanaotumia simu, michezo na mitandao ya kijamii kila siku na wanataka kudhibiti muda wao wa skrini bila kuhubiriwa.",
    startingPoint: "Wanatumia simu zao kwa ujasiri kwa apps, michezo na ujumbe. Wengi wanakisia muda wao wa skrini kuwa mdogo kuliko ulivyo, arifa nyingi ziko wazi, wanasogeza usiku wa manane na hawajawahi kuweka mipaka ya apps wala kubadilisha mlisho wao kwa makusudi.",
    gap: "Apps zimetengenezwa ili watu wabaki nazo, na hii inaweza kupunguza usingizi, masomo, michezo, kazi na hisia nzuri. Vijana wanahitaji kuona namba zao halisi, kutambua mbinu hizo, kubadilisha mipangilio na tabia zao, na kujaribu mpango, ili skrini ziwasaidie badala ya kuwatawala.",
    constraints: [
      "Simu au kifaa chako mwenyewe kinahitajika kwa mazoezi; menyu zinatofautiana kati ya simu",
      "Hakuna kuhubiri: wanafunzi wanachagua malengo yao wenyewe",
      "Afya ya akili: wanafunzi ambao mara nyingi wanajisikia vibaya wanaelekezwa kwa mtu mzima wanayemwamini, daktari au simu ya msaada wa dharura, hawatibiwi katika kozi",
      "Faragha: wanafunzi wanatunza namba na maelezo yao wenyewe isipokuwa wakichagua kushiriki",
      "Masomo mafupi na maneno rahisi"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia mipangilio ya simu yako mwenyewe", action: "kupata muda wako wa skrini kwa siku, apps zako za juu na mara unazoshika simu au arifa, na kuvilinganisha na malengo yako", standard: "ukiandika namba zote tatu" },
    { id: "O2", condition: "Katika app unayotumia mara nyingi", action: "kutambua mbinu za muundo zinazokuvuta urudi na kuzima au kukwepa moja", standard: "ukitaja angalau mbinu tatu" },
    { id: "O3", condition: "Kwa usiku wako", action: "kuweka muda wa kuzima skrini, mahali pa kuegesha simu mbali na kitanda chako na hali ya usingizi", standard: "skrini zikiwa mbali kama dakika 30 kabla ya muda wako wa kulala" },
    { id: "O4", condition: "Ukitumia mipangilio ya simu yako", action: "kuzima arifa zisizo za lazima na kuweka kikomo cha kila siku kwa app yako ya juu", standard: "ukizima arifa za angalau apps tatu" },
    { id: "O5", condition: "Kwenye app yako kuu ya kijamii", action: "kubadilisha mlisho wako kwa kunyamazisha au kuacha kufuata akaunti zinazokufanya ujisikie vibaya na kufuata zinazokusaidia kukua", standard: "ukibadilisha angalau akaunti mbili kwa kila upande" },
    { id: "O6", condition: "Ukitumia ulichoweka katika kozi hii", action: "kuandika mpango wako wa skrini, kuufuata kwa siku saba na kulinganisha matokeo yako na namba zako za mwanzo", standard: "ukiwa na kila sehemu ya mpango na ulinganisho wa kabla na baada" }
  ],
  chapters: [
    {
      name: "Sura 1: Kujua tabia zako za skrini",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuangalia muda wako halisi wa skrini",
          minutes: 4,
          goal: "Pata muda wako wa skrini kwa siku na apps zako za juu kwenye simu yako mwenyewe.",
          text: [
            "Watu wengi wanakisia muda wao wa skrini kuwa mdogo kuliko ulivyo. Simu yako tayari inaupima. Kwenye iPhone, fungua Settings (Mipangilio) na utafute Screen Time. Kwenye simu nyingi za Android, fungua Settings na utafute Digital Wellbeing. Majina yanaweza kutofautiana; usipoyapata, tafuta \"screen time\" ndani ya Settings.",
            "Angalia namba tatu: wastani wako wa kila siku, apps zako za juu, na mara ngapi unashika simu au unapokea arifa. Mara za kushika simu na arifa zinaonyesha ni mara ngapi simu yako inakuvuta urudi.",
            "Hakuna namba moja kamili. Kinachojalisha ni kama muda wako wa skrini unaendana na malengo yako: usingizi wa kutosha, masomo au kazi kukamilika, muda na marafiki ana kwa ana, michezo, kupumzika na mambo unayopenda. Namba zako ni mahali pa kuanzia, si alama ya mtihani."
          ],
          steps: ["Fungua Settings kwenye simu yako.", "Tafuta Screen Time (iPhone) au Digital Wellbeing (simu nyingi za Android), au tafuta \"screen time\" ndani ya Settings.", "Andika wastani wako wa kila siku, apps zako tatu za juu na mara za kushika simu au arifa.", "Jiulize: je, hii inaendana na malengo yangu?"],
          words: [["Muda wa skrini (screen time)", "muda unaotumia ukiangalia skrini."], ["Kushika simu (pickup)", "kila mara unaposhika au kufungua simu yako."], ["Ustawi wa kidijitali (digital wellbeing)", "kutumia teknolojia kwa njia inayosaidia afya, malengo na hisia zako."]],
          slides: [
            { title: "Simu yako tayari inaupima", bullets: ["iPhone: Settings, kisha Screen Time", "Simu nyingi za Android: Settings, kisha Digital Wellbeing", "Huupati? Tafuta \"screen time\" ndani ya Settings"] },
            { title: "Namba tatu za kuangalia", bullets: ["Wastani wa kila siku", "Apps za juu", "Mara za kushika simu na arifa"] },
            { title: "Hakuna namba kamili", bullets: ["Je, inaendana na malengo yako?", "Usingizi, shule au kazi, marafiki, michezo, kupumzika", "Mahali pa kuanzia, si alama ya mtihani"] }
          ],
          tryIt: "Fungua ukurasa wa muda wa skrini kwenye simu yako. Andika wastani wako wa kila siku, apps zako tatu za juu na mara unazoshika simu au arifa kwa siku. Kisha andika lengo moja ambalo skrini zinazuia, kama lipo.",
          youCanNow: "kupata muda wako halisi wa skrini, apps zako za juu na mara unazoshika simu kwenye simu yako mwenyewe.",
          quickCheck: [
            { objective: "O1", q: "Namba ya \"pickups\" (mara za kushika simu) kwenye simu yako inaonyesha nini?", options: ["Uzito wa simu yako", "Idadi ya apps ulizo nazo", "Ni mara ngapi simu yako inakuvuta urudi", "Kiwango cha betri yako"], answer: 2, why: "Mara za kushika simu na arifa zinaonyesha ni mara ngapi simu yako inakuvuta urudi." },
            { objective: "O1", q: "Huwezi kupata Screen Time wala Digital Wellbeing kwenye simu yako. Unafanya nini?", options: ["Kutafuta \"screen time\" ndani ya Settings", "Kukisia namba", "Kukata tamaa", "Kupakua app yoyote kutoka tangazo linalojitokeza"], answer: 0, why: "Majina yanatofautiana kati ya simu, kwa hiyo tafuta \"screen time\" ndani ya Settings." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Jinsi apps zinavyokufanya uendelee kusogeza",
          minutes: 5,
          goal: "Tambua mbinu za muundo zinazokuvuta urudi.",
          text: [
            "Apps nyingi zinapata pesa kutokana na umakini wako: kadiri unavyokaa muda mrefu, ndivyo zinavyoonyesha matangazo zaidi. Kwa hiyo zimetengenezwa ili iwe vigumu kuziacha. Ukijua mbinu hizo, ni rahisi zaidi kujichagulia mwenyewe.",
            "Mbinu za kawaida: kusogeza bila mwisho (hakuna sehemu ya chini kamwe), autoplay (video inayofuata inaanza yenyewe), arifa na alama nyekundu (zinakufanya uangalie), streaks (hofu ya kuzipoteza), likes na idadi ya watazamaji (unaendelea kuangalia kama zimeongezeka), na milisho ya \"for you\" inayojifunza hasa kinachokufanya uendelee kutazama.",
            "Hii haimaanishi wewe ni dhaifu. Mbinu hizi zimetengenezwa na timu za wataalamu. Jibu ni kuweka vituo vyako mwenyewe vya kusimama: zima autoplay, weka mipaka ya muda, na uamue kabla ya kufungua app ulikuja kufanya nini."
          ],
          steps: ["Fungua app yako ya juu kutoka Somo la 1.", "Tafuta kila mbinu: kusogeza bila mwisho, autoplay, arifa, streaks, likes.", "Chagua mbinu moja ya kuzima au kukwepa.", "Kabla ya kufungua app, sema umekuja kufanya nini."],
          words: [["Kusogeza bila mwisho (endless scroll)", "mlisho unaoendelea kupakia zaidi, kwa hiyo hakuna mahali pa asili pa kusimama."], ["Autoplay", "pale video inayofuata inapoanza yenyewe."], ["Algorithm", "kanuni za kompyuta ambazo app inatumia kuchagua ikuonyeshe nini baadaye."]],
          slides: [
            { title: "Umakini wako ndio bidhaa", bullets: ["Muda mrefu kwenye app = matangazo zaidi", "Kwa hiyo apps zimetengenezwa ziwe vigumu kuziacha"] },
            { title: "Mbinu za kawaida", bullets: ["Kusogeza bila mwisho na autoplay", "Arifa na alama nyekundu", "Streaks, likes na idadi ya watazamaji", "Milisho ya \"for you\""] },
            { title: "Weka vituo vyako vya kusimama", bullets: ["Zima autoplay", "Weka mipaka ya muda", "Amua kwanza umekuja kufanya nini"] }
          ],
          tryIt: "Fungua app unayotumia zaidi na uorodheshe kila mbinu unayoweza kuona. Zima moja (kwa mfano autoplay au aina moja ya arifa) kama app inakuruhusu. Andika ni ipi uliyobadilisha.",
          youCanNow: "kutambua mbinu ambazo apps zinatumia kukufanya uendelee kusogeza na kuweka vituo vyako mwenyewe vya kusimama.",
          quickCheck: [
            { objective: "O2", q: "Autoplay ni nini?", options: ["Aina ya mchezo", "Video inayofuata kuanza yenyewe", "Kiokoa betri", "Mpangilio wa faragha"], answer: 1, why: "Autoplay inaanzisha video inayofuata bila wewe kuchagua, na hii inafanya iwe vigumu kusimama." },
            { objective: "O2", q: "Unafungua app kujibu ujumbe mmoja na unajikuta umesogeza kwa saa nzima. Tabia gani itakusaidia wakati ujao?", options: ["Kuwasha arifa zaidi", "Kufungua apps nyingi kwa wakati mmoja", "Kuendeleza streak", "Kuamua umekuja kufanya nini kabla ya kufungua app"], answer: 3, why: "Kuamua umekuja kufanya nini kunaweka kituo chako mwenyewe cha kusimama." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Skrini, usingizi na hisia zako",
          minutes: 5,
          goal: "Weka muda wa kuzima skrini na mahali pa kuegesha simu usiku.",
          text: [
            "Usingizi ndio wakati mwili na ubongo wako vinapopona. CDC (shirika la afya la Marekani) inasema vijana wa miaka 13 hadi 17 wanahitaji saa 8 hadi 10 kila usiku, na watu wazima wa miaka 18 na zaidi wanahitaji saa 7 au zaidi. Kusogeza, kucheza michezo na kutuma ujumbe usiku wa manane ni baadhi ya wezi wakubwa wa usingizi: unakesha zaidi na kuamka kwa arifa.",
            "Ushauri wa CDC kuhusu usingizi ni pamoja na kulala na kuamka kwa saa zile zile, kuweka chumba chako cha kulala giza, kimya na baridi kidogo, na kuweka skrini mbali kama dakika 30 kabla ya kulala. Mahali pa kuegesha simu nje ya kitanda chako, au upande wa pili wa chumba, kunafanya hili kuwa rahisi. Tumia saa ya kengele ya bei nafuu kama simu yako ndiyo kengele yako.",
            "Angalia pia jinsi skrini zinavyoathiri hisia zako. Kama apps fulani zinakuacha na wasiwasi, hasira au ukijiona duni, hiyo ni taarifa muhimu. Kama mara nyingi unajisikia huzuni, huwezi kulala au unakosa matumaini, ongea na mtu mzima unayemwamini au daktari. Marekani unaweza kupiga simu au kutuma ujumbe kwa 988 wakati wowote; nje ya Marekani, piga simu ya msaada wa dharura au namba ya dharura ya eneo lako."
          ],
          steps: ["Chagua muda wako wa kulala na uhesabu dakika 30 nyuma: huo ndio muda wa kuzima skrini.", "Chagua mahali pa kuegesha simu mbali na kitanda chako.", "Washa hali ya usingizi au do not disturb (usisumbue) kwenye simu yako kwa usiku.", "Angalia ni apps zipi zinabadilisha hisia zako, na kwa namna gani."],
          words: [["Do not disturb (usisumbue)", "mpangilio wa simu unaonyamazisha simu zinazoingia na arifa kwa muda fulani."], ["Ratiba ya usingizi", "kulala na kuamka karibu saa zile zile kila siku."]],
          slides: [
            { title: "Usingizi kiasi gani (CDC)", bullets: ["Vijana wa miaka 13-17: saa 8 hadi 10", "Watu wazima wa miaka 18+: saa 7 au zaidi"] },
            { title: "Linda usingizi wako", bullets: ["Saa zile zile za kulala na kuamka", "Chumba chenye giza, kimya na baridi kidogo", "Skrini mbali kama dakika 30 kabla ya kulala"] },
            { title: "Egesha simu yako", bullets: ["Mbali na kitanda chako", "Hali ya usingizi au do not disturb imewashwa", "Tumia saa ya kengele ikihitajika"] },
            { title: "Angalia hisia zako", bullets: ["Apps zipi zinakuacha ukijisikia vibaya zaidi?", "Mara nyingi huzuni au huwezi kulala? Ongea na mtu", "Marekani: piga simu au tuma ujumbe kwa 988 wakati wowote"] }
          ],
          sources: [{ name: "CDC: About Sleep", url: "https://www.cdc.gov/sleep/about/index.html" }, { name: "988 Suicide and Crisis Lifeline", url: "https://988lifeline.org/" }],
          tryIt: "Weka muda wako wa kuzima skrini na mahali pa kuegesha simu kwa usiku wa leo. Washa hali ya usingizi au do not disturb. Kesho, andika jinsi ulivyolala na ulivyojisikia asubuhi.",
          youCanNow: "kulinda usingizi wako kwa muda wa kuzima skrini, mahali pa kuegesha simu na hali ya do not disturb.",
          quickCheck: [
            { objective: "O3", q: "Mahali pa kuegesha simu ni nini?", options: ["Kasha la simu yako", "Waya wa kuchaji", "Mpangilio wa app", "Mahali mbali na kitanda chako ambapo simu inakaa usiku"], answer: 3, why: "Kuegesha simu mbali na kitanda chako kunafanya iwe vigumu kusogeza usiku wa manane." },
            { objective: "O3", q: "Muda wako wa kulala ni saa 4:30 usiku (10:30 pm). Unaweka skrini mbali lini?", options: ["Saa 4:30 usiku (10:30 pm)", "Karibu saa 4:00 usiku (10 pm)", "Wakati wowote unapochoka", "Baada ya video moja zaidi"], answer: 1, why: "Kuweka skrini mbali kama dakika 30 kabla ya kulala kunakusaidia kulala." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kujua tabia zako za skrini",
        questions: [
          { objective: "O1", q: "Kwenye iPhone, kwa kawaida unapata muda wako wa skrini wapi?", options: ["Kwenye app ya kamera", "Settings, kisha Screen Time", "Kwenye kikokotoo", "Kwenye App Store"], answer: 1, why: "iPhone zinaupima chini ya Screen Time ndani ya Settings." },
          { objective: "O1", q: "Idadi kubwa ya mara za kushika simu inakuambia nini?", options: ["Betri yako ni ya zamani", "Simu yako inakuvuta urudi mara nyingi sana", "Una simu yenye kasi", "Hakuna kitu kabisa"], answer: 1, why: "Mara za kushika simu zinaonyesha ni mara ngapi unarudi kwenye simu yako." },
          { objective: "O2", q: "Kwa nini apps nyingi zinatumia kusogeza bila mwisho na autoplay?", options: ["Ili ubaki kwenye app muda mrefu zaidi", "Ili kuokoa betri yako", "Ili kukusaidia kulala", "Kwa sababu sheria inataka hivyo"], answer: 0, why: "Muda zaidi kwenye app unamaanisha matangazo na pesa zaidi kwa app." },
          { objective: "O3", q: "CDC inasema vijana wa miaka 13 hadi 17 wanahitaji saa ngapi za usingizi?", options: ["4 hadi 5", "5 hadi 6", "12 hadi 14", "8 hadi 10"], answer: 3, why: "CDC inaorodhesha saa 8 hadi 10 kwa vijana wa miaka 13 hadi 17." },
          { objective: "O3", q: "Tabia gani inalinda usingizi wako?", options: ["Kusogeza kitandani hadi upate usingizi", "Kuacha arifa zikilia kwa sauti kubwa", "Kuweka skrini mbali kama dakika 30 kabla ya kulala", "Kucheza michezo hadi saa 8 usiku (2 am) siku za shule"], answer: 2, why: "CDC inashauri kuweka skrini mbali kabla ya kulala." }
        ]
      }
    },
    {
      name: "Sura 2: Kujidhibiti",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kudhibiti arifa na kuweka mipaka ya apps",
          minutes: 5,
          goal: "Zima arifa zisizo za lazima na uweke kikomo kwa app moja.",
          text: [
            "Kila arifa ni usumbufu. Inaweza kuchukua muda kurudisha umakini wako baada ya kuangalia simu, na hii inachelewesha kazi za nyumbani, mazoezi, kusoma au kazi. Wewe ndiye unaamua ni apps zipi zinaruhusiwa kukusumbua.",
            "Acha arifa za watu na mambo muhimu (simu na ujumbe kutoka kwa familia, taarifa za shule au kazi, usafiri wako). Zima arifa za michezo, maduka ya mtandaoni na mitandao mingi ya kijamii. Kwa kawaida unafanya hivi ndani ya Settings, chini ya Notifications (Arifa), app moja moja.",
            "iPhone na Android zote zinakuruhusu kuweka mipaka ya muda wa kila siku kwa apps, na hali za focus (umakini) au do not disturb kwa wakati wa shule, kazi au mazoezi. Ukifikia kikomo, simu inakukumbusha. Unaweza kukipuuza, lakini kituo hicho kinakupa nafasi ya kuchagua. Watu wengine pia wanaondoa apps zinazowavutia kwenye skrini ya mwanzo au wanatoka (log out) baada ya kuzitumia, ili kuzifungua kuhitaji juhudi kidogo zaidi."
          ],
          steps: ["Fungua Settings, kisha Notifications.", "Acha arifa za watu na taarifa muhimu; zima za michezo, maduka na mitandao mingi ya kijamii.", "Weka kikomo cha kila siku kwa app yako ya juu (Screen Time au Digital Wellbeing).", "Washa hali ya focus au do not disturb wakati wa shule, kazi au mazoezi.", "Ondoa app moja inayokuvutia kwenye skrini ya mwanzo."],
          words: [["Arifa (notification)", "ujumbe au taarifa inayojitokeza kwenye simu yako kutoka kwa app."], ["Kikomo cha app (app limit)", "muda wa kila siku unaouweka kwa app."], ["Hali ya focus (focus mode)", "mpangilio unaonyamazisha vitu vinavyokusumbua unapofanya kazi, kusoma au kupumzika."]],
          slides: [
            { title: "Wewe unachagua nani akusumbue", bullets: ["Kila arifa inavunja umakini wako", "Acha arifa za watu na taarifa muhimu", "Zima za michezo, maduka, na mitandao mingi ya kijamii"] },
            { title: "Weka mipaka ya apps", bullets: ["Kikomo cha kila siku kwa app yako ya juu", "Kikumbusho kinakupa nafasi ya kuchagua"] },
            { title: "Hali za focus", bullets: ["Wakati wa shule, kazi au mazoezi", "Nyamazisha kelele"] },
            { title: "Ongeza juhudi kidogo", bullets: ["Ondoa apps zinazokuvutia kwenye skrini ya mwanzo", "Toka (log out) baada ya kutumia"] }
          ],
          tryIt: "Pitia arifa zako na uzime za angalau apps tatu ambazo hazihitaji kukusumbua. Kisha weka kikomo cha muda wa kila siku kwa app yako ya juu kutoka Somo la 1.",
          youCanNow: "kudhibiti ni apps zipi zinaweza kukusumbua, kuweka mipaka ya apps na kutumia hali za focus.",
          quickCheck: [
            { objective: "O4", q: "Kwa nini arifa zinaweza kuchelewesha kazi zako za nyumbani?", options: ["Kila moja inakusumbua, na inachukua muda kurudisha umakini wako", "Zinatumia nafasi ya kuhifadhi", "Zinafanya skrini ififie", "Zinabadilisha alama zako za shule"], answer: 0, why: "Kila arifa ni usumbufu unaovuta umakini wako mbali." },
            { objective: "O4", q: "App ya duka la mtandaoni inakutumia taarifa za punguzo la bei siku nzima. Unafanya nini?", options: ["Kuziacha; unaweza kukosa bei nzuri", "Kuangalia kila moja mara moja", "Kuzima arifa za app hiyo ndani ya Settings", "Kuzima simu na ujumbe wako badala yake"], answer: 2, why: "Acha arifa za watu na taarifa muhimu; zima za maduka na michezo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Mlisho bora na kujilinganisha kidogo",
          minutes: 5,
          goal: "Badilisha mlisho wako ili ukuache ukijisikia vizuri zaidi, si vibaya zaidi.",
          text: [
            "Mitandao ya kijamii inaonyesha matukio bora tu: picha bora zaidi, vichujio (filters) na uhariri. Kulinganisha maisha yako ya kila siku na nyakati bora za mtu mwingine kunaweza kukuacha ukijiona hutoshi. Kumbuka unachokiona kimechaguliwa na kuhaririwa.",
            "Unaweza kufundisha mlisho wako. Acha kufuata au nyamazisha akaunti zinazokufanya ujisikie vibaya kuhusu mwili wako, pesa au maisha yako. Fuata watu wanaokufundisha kitu, wanaokuchekesha au wanaounga mkono malengo yako: mchezo wako, muziki, sanaa, kazi unayoitaka, utamaduni wako. Tumia chaguo la \"not interested\" (sipendezwi) app inapolitoa. Algorithm inajifunza kutokana na unachotazama, kwa hiyo tazama kwa makusudi.",
            "Jiulize: \"Ninajisikiaje baada ya dakika 10 kwenye app hii?\" Jibu likiwa mara nyingi ni vibaya zaidi, badilisha unaowafuata au muda unaokaa. Mtu mtandaoni akikutendea ukatili, mwambie mtu mzima unayemwamini; kozi ya Koach Learn \"Kujilinda dhidi ya Uonevu Mtandaoni\" inakuonyesha la kufanya."
          ],
          steps: ["Sogeza mlisho wako kwa dakika mbili na uangalie kila akaunti inakufanya ujisikie vipi.", "Acha kufuata au nyamazisha akaunti mbili zinazokufanya ujisikie vibaya zaidi.", "Fuata akaunti mbili zinazofundisha, zinazokutia moyo au zinazokuchekesha.", "Tumia \"not interested\" kwa maudhui usiyoyataka."],
          words: [["Matukio bora tu (highlight reel)", "nyakati bora pekee, zilizochaguliwa na kuhaririwa ili zionekane nzuri."], ["Kunyamazisha (mute)", "kuficha machapisho ya mtu bila kuacha kumfuata wala kumwambia."]],
          slides: [
            { title: "Ni matukio bora tu", bullets: ["Picha bora, vichujio na uhariri", "Usilinganishe maisha yako ya kila siku na nyakati zao bora"] },
            { title: "Fundisha mlisho wako", bullets: ["Acha kufuata au nyamazisha kinachokufanya ujisikie vibaya", "Fuata kinachofundisha, kinachotia moyo au kinachokuchekesha", "Tumia \"not interested\""] },
            { title: "Jiulize", bullets: ["Ninajisikiaje baada ya dakika 10?", "Mara nyingi vibaya zaidi? Badilisha unaowafuata"] }
          ],
          tryIt: "Tumia dakika mbili kwenye app yako kuu na upime jinsi kila moja ya machapisho kumi ya kwanza inavyokufanya ujisikie (vizuri zaidi, sawa, vibaya zaidi). Nyamazisha au acha kufuata akaunti mbili za \"vibaya zaidi\" na ufuate mbili zinazokusaidia kukua.",
          youCanNow: "kuunda mlisho wako ili usaidie hisia na malengo yako badala ya kukufanya ujilinganishe.",
          quickCheck: [
            { objective: "O5", q: "Algorithm ya app inajifunza kutokana na nini?", options: ["Unachotazama na kufanya ndani ya app", "Alama zako za shule", "Hali ya hewa", "Hakuna; milisho ni ya bahati nasibu"], answer: 0, why: "Algorithm inajifunza kutokana na unachotazama, kwa hiyo kutazama kwa makusudi kunaunda mlisho wako." },
            { objective: "O5", q: "Siku nyingi unajisikia vibaya zaidi baada ya dakika 10 kwenye app. Unajaribu nini?", options: ["Kusogeza muda mrefu zaidi ili ujisikie vizuri", "Kufuata akaunti zaidi kama zile zinazokukasirisha", "Kupuuza jinsi unavyojisikia", "Kubadilisha unaowafuata au muda unaokaa"], answer: 3, why: "App ikikuacha mara nyingi ukijisikia vibaya zaidi, badilisha mlisho wako au muda wako kwenye app hiyo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kutengeneza na kujaribu mpango wako wa skrini",
          minutes: 6,
          goal: "Andika mpango wa skrini na uujaribu kwa siku saba.",
          text: [
            "Mpango unageuza mawazo mazuri kuwa tabia. Mpango wako wa skrini ni mfupi na wazi, na ni wako: wewe unachagua malengo.",
            "Weka ndani yake: lengo lako la muda wa skrini kwa siku, apps zako mbili za juu za kupunguza (na mipaka iliyowekwa kwenye simu yako), mabadiliko ya arifa, muda wa kuzima skrini na mahali pa kuegesha simu, vitu viwili vya kufanya badala ya kusogeza unapochoka (kutembea, kufanya mazoezi ya mchezo wako, kuchora, kumpigia rafiki simu, kusoma, kupika), na badiliko moja la mlisho.",
            "Ujaribu kwa siku saba, kisha linganisha muda wako wa skrini, mara za kushika simu na usingizi na namba zako kutoka Somo la 1. Endelea na kilichofanya kazi na ubadilishe kisichofanya kazi. Kuteleza siku moja ni kawaida; anza tena siku inayofuata. Kumwambia rafiki au mwanafamilia kuhusu mpango wako, au kuufanya pamoja, kunafanya iwe rahisi zaidi."
          ],
          steps: ["Andika lengo lako la muda wa skrini.", "Weka mipaka kwa apps zako mbili za juu.", "Orodhesha mabadiliko ya arifa na muda wa kuzima skrini.", "Andika vitu viwili vya kufanya badala ya kusogeza.", "Jaribu kwa siku saba na ulinganishe na Somo la 1."],
          words: [["Mpango wa skrini", "kanuni zako mwenyewe zilizoandikwa kuhusu lini, wapi na kwa kiasi gani unatumia skrini."]],
          slides: [
            { title: "Mpango wako wa skrini", bullets: ["Lengo la muda wa skrini na mipaka ya apps mbili", "Mabadiliko ya arifa", "Muda wa kuzima skrini na mahali pa kuegesha simu"] },
            { title: "Badala ya kusogeza", bullets: ["Tembea, fanya mazoezi, chora, soma, pika", "Mpigie rafiki simu au kaa naye"] },
            { title: "Jaribu kwa siku saba", bullets: ["Linganisha na namba zako za Somo la 1", "Endelea na kinachofanya kazi, badilisha kisichofanya", "Umeteleza? Anza tena kesho"] }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wako wa skrini wenye sehemu zote, weka mipaka kwenye simu yako, na uufuate kwa siku saba. Siku ya saba, linganisha muda wako wa skrini, mara za kushika simu na usingizi na namba zako kutoka Somo la 1.",
          youCanNow: "kutengeneza, kufuata na kurekebisha mpango wako wa skrini unaolinda usingizi, umakini na hisia zako.",
          quickCheck: [
            { objective: "O6", q: "Unalinganisha nini mwishoni mwa jaribio lako la siku saba?", options: ["Muda wako wa skrini, mara za kushika simu na usingizi na namba zako za Somo la 1", "Muda wa skrini wa marafiki zako", "Bei ya simu yako", "Idadi ya wafuasi wako"], answer: 0, why: "Kulinganisha na namba zako za mwanzo kunaonyesha nini kilifanya kazi." },
            { objective: "O6", q: "Unachoka na kunyoosha mkono kuchukua simu yako. Mpango wako unasema ufanye nini?", options: ["Kufungua app yako ya juu", "Kuzima mipaka ya apps", "Kufanya kimoja kati ya vitu vyako viwili badala ya kusogeza, kama kutembea au kupiga simu", "Kukesha zaidi"], answer: 2, why: "Mpango wako unaorodhesha vitu viwili vya kufanya badala ya kusogeza unapochoka." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kujidhibiti",
        questions: [
          { objective: "O4", q: "Arifa zipi kwa kawaida zinafaa kuachwa zikiwa wazi?", options: ["Ujumbe kutoka kwa familia na taarifa za shule au kazi", "Kila mchezo", "Punguzo za maduka", "Likes zote za mitandao ya kijamii"], answer: 0, why: "Acha taarifa muhimu; zima zilizobaki." },
          { objective: "O4", q: "Nini kinatokea unapofikia kikomo cha app ulichoweka?", options: ["Simu yako inafungwa milele", "App inafutwa", "Simu yako inakukumbusha, na kukupa nafasi ya kuchagua", "Akaunti yako inapigwa marufuku"], answer: 2, why: "Kikomo kinaongeza kituo ili uweze kuchagua." },
          { objective: "O5", q: "Kwa nini kujilinganisha na machapisho ya mitandao ya kijamii si haki kwako?", options: ["Machapisho ni ya uongo kila wakati", "Simu ni ndogo mno", "Hakuna anayechapisha kitu halisi", "Mara nyingi machapisho ni matukio bora tu: nyakati bora zilizochaguliwa na kuhaririwa"], answer: 3, why: "Unalinganisha maisha yako ya kila siku na nyakati bora za mtu mwingine." },
          { objective: "O5", q: "Akaunti fulani mara nyingi inakufanya ujisikie vibaya kuhusu wewe mwenyewe. Unaweza kufanya nini?", options: ["Kuitazama zaidi", "Kuinyamazisha au kuacha kuifuata", "Kuitumia nywila yako", "Kufuta simu yako"], answer: 1, why: "Kunyamazisha au kuacha kufuata kunabadilisha kile mlisho wako unachokuonyesha." },
          { objective: "O6", q: "Ulivunja mpango wako wa skrini siku ya tatu. Sasa je?", options: ["Kukata tamaa kabisa", "Kufuta apps zako zote", "Kuanza tena siku inayofuata na kurekebisha ikihitajika", "Kuuficha kwa kila mtu"], answer: 2, why: "Kuteleza ni kawaida; endelea na urekebishe mpango." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Ustawi wa Kidijitali na Muda Mzuri wa Skrini",
    questions: [
      { objective: "O1", q: "Ustawi wa kidijitali unamaanisha:", options: ["Kutotumia simu kamwe", "Kutumia skrini kwa njia inayosaidia afya, malengo na hisia zako", "Kuwa na simu mpya kabisa", "Kupata wafuasi wengi zaidi"], answer: 1, why: "Ni kuhusu skrini kukusaidia, si kukutawala." },
      { objective: "O1", q: "Kwenye simu nyingi za Android, muda wa skrini unapatikana ndani ya Settings chini ya:", options: ["Digital Wellbeing", "Camera", "Wallpaper", "Bluetooth"], answer: 0, why: "Simu nyingi za Android zinauita Digital Wellbeing; majina yanaweza kutofautiana." },
      { objective: "O1", q: "Namba zipi tatu zinafaa zaidi kuangalia kwanza?", options: ["Betri, nafasi ya kuhifadhi, mwangaza", "Wafuasi, likes, maoni", "Wastani wa kila siku, apps za juu, mara za kushika simu au arifa", "Bei ya simu, umri wake, rangi yake"], answer: 2, why: "Hizi zinaonyesha unatumia simu yako kiasi gani na mara ngapi." },
      { objective: "O1", q: "Je, kuna namba moja kamili ya muda wa skrini kwa kila mtu?", options: ["Ndiyo, saa 1 kamili", "Ndiyo, saa 3 kamili", "Ndiyo, sifuri", "Hapana; kinachojalisha ni kama inaendana na malengo yako"], answer: 3, why: "Muda wako wa skrini unapaswa kuendana na usingizi, shule, kazi na maisha yako." },
      { objective: "O2", q: "Kusogeza bila mwisho ni mbinu ya kukuvuta kwa sababu:", options: ["Hakuna mahali pa asili pa kusimama", "Kunaokoa data", "Kunatakiwa na sheria", "Kunafanya skrini ing'ae zaidi"], answer: 0, why: "Bila sehemu ya chini, ni rahisi kuendelea tu." },
      { objective: "O2", q: "\"Algorithm\" ndani ya app ni:", options: ["Aina ya kasha la simu", "Mtu anayesoma ujumbe wako", "Kanuni za kompyuta zinazochagua ikuonyeshe nini baadaye", "Kiwango cha mchezo"], answer: 2, why: "Algorithm zinajifunza kinachokufanya uendelee kutazama." },
      { objective: "O2", q: "Kituo kipi kizuri cha kusimama unaweza kuongeza?", options: ["Kuwasha autoplay", "Kuzima autoplay", "Kuongeza arifa zaidi", "Kuondoa mipaka yote"], answer: 1, why: "Kuzima autoplay kunazuia video inayofuata kuanza yenyewe." },
      { objective: "O2", q: "Kabla ya kufungua app, tabia inayosaidia ni:", options: ["Kuweka sauti juu kabisa", "Kufungua apps nyingine tano", "Kuangalia kila arifa", "Kuamua umekuja kufanya nini"], answer: 3, why: "Lengo lililo wazi linafanya iwe rahisi zaidi kufunga app." },
      { objective: "O3", q: "CDC inasema watu wazima wa miaka 18 na zaidi wanahitaji saa ngapi za usingizi?", options: ["7 au zaidi", "4", "5", "3 hadi 4"], answer: 0, why: "CDC inasema watu wazima wanahitaji saa 7 au zaidi." },
      { objective: "O3", q: "Mahali pa kuegesha simu usiku panapaswa kuwa:", options: ["Chini ya mto wako", "Mkononi mwako", "Mbali na kitanda chako", "Ikiwa kwenye sauti kubwa"], answer: 2, why: "Umbali kutoka kitanda chako unalinda usingizi wako." },
      { objective: "O3", q: "Mara nyingi unajisikia huzuni na huwezi kulala. Marekani, ni wapi pamoja unaweza kuomba msaada wakati wowote?", options: ["Kuandika kwenye sehemu ya maoni", "Kupiga simu au kutuma ujumbe kwa 988", "Kusubiri bila kumwambia mtu", "Kuuliza app yoyote"], answer: 1, why: "988 ni bure na iko wazi saa 24 kila siku; pia ongea na mtu mzima unayemwamini au daktari." },
      { objective: "O4", q: "Arifa ipi ni bora kuzima?", options: ["Usafiri wako umefika", "Ujumbe kutoka kwa mzazi wako", "Taarifa ya shule", "Mchezo unaokuambia urudi"], answer: 3, why: "Taarifa za michezo na maduka mara chache zinahitaji kukusumbua." },
      { objective: "O4", q: "Hali ya focus ni nini?", options: ["Mpangilio unaonyamazisha vitu vinavyokusumbua unaposoma, kufanya kazi au kupumzika", "Kichujio cha kamera", "App ya kulipia", "Mchezo"], answer: 0, why: "Hali za focus zinanyamazisha arifa kwa muda fulani." },
      { objective: "O4", q: "Kuondoa app inayokuvutia kwenye skrini ya mwanzo kunasaidia kwa sababu:", options: ["Kunafuta akaunti yako", "Kunafanya kuifungua kuhitaji juhudi kidogo zaidi", "Kunafanya app iwe na kasi zaidi", "Kunakupatia pointi"], answer: 1, why: "Hatua ndogo ya ziada inakupa muda wa kuchagua." },
      { objective: "O5", q: "\"Highlight reel\" (matukio bora tu) ni:", options: ["Chombo cha kuvua samaki", "Video ya moja kwa moja isiyohaririwa", "Ripoti yako ya muda wa skrini", "Nyakati bora pekee, zilizochaguliwa na kuhaririwa"], answer: 3, why: "Mara nyingi mitandao ya kijamii inaonyesha nyakati bora pekee zilizohaririwa." },
      { objective: "O5", q: "Kunyamazisha akaunti kunafanya nini?", options: ["Kunaripoti mtu huyo kwa polisi", "Kunafuta akaunti yake", "Kunaficha machapisho yake bila kuacha kumfuata wala kumwambia", "Kunamtumia ujumbe"], answer: 2, why: "Kunyamazisha kunaficha machapisho yake kimya kimya." },
      { objective: "O5", q: "Swali zuri la kujiuliza baada ya kutumia app ni:", options: ["Nimepata likes ngapi?", "Ninajisikiaje baada ya dakika 10 kwenye app hii?", "Nani ana wafuasi wengi zaidi?", "Ninunue nini?"], answer: 1, why: "Kuangalia jinsi unavyojisikia kunakusaidia kubadilisha unachotumia." },
      { objective: "O6", q: "Kipi kinafaa kuwa ndani ya mpango wako wa skrini?", options: ["Nywila zako", "Orodha ya watu wa kubishana nao", "Kuwasha kila arifa", "Vitu viwili vya kufanya badala ya kusogeza"], answer: 3, why: "Kuwa na shughuli nyingine tayari kunafanya iwe rahisi kuweka simu chini." },
      { objective: "O6", q: "Unapaswa kujaribu mpango wako wa skrini kwa muda gani kabla ya kuupima?", options: ["Dakika moja", "Saa moja", "Siku saba", "Usiujaribu kamwe"], answer: 2, why: "Wiki moja inakupa namba halisi za kulinganisha." },
      { objective: "O6", q: "Nini kinafanya iwe rahisi kushikilia mpango wa skrini?", options: ["Kumwambia rafiki au mwanafamilia, au kuufanya pamoja", "Kuuweka siri", "Kuufanya mkali iwezekanavyo", "Kuubadilisha kila saa"], answer: 0, why: "Msaada kutoka kwa wengine unakusaidia kuendelea." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 2, 4, 6, 9, 10, 11, 14, 16, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Lengo na mipaka ya apps", objective: "O4", notYet: "Hakuna lengo la muda wa skrini, au mipaka haijawekwa kwenye simu.", meets: "Lengo la muda wa skrini kwa siku na mipaka imewekwa kwa apps mbili za juu.", exceeds: "Pia anatumia hali ya focus wakati wa shule, kazi au mazoezi." },
      { name: "Arifa", objective: "O4", notYet: "Hakuna mabadiliko ya arifa.", meets: "Arifa za angalau apps tatu zisizo za lazima zimezimwa, za watu na taarifa muhimu zimeachwa.", exceeds: "Pia ameondoa app inayomvutia kwenye skrini ya mwanzo." },
      { name: "Mpango wa usingizi", objective: "O3", notYet: "Hakuna muda wa kuzima skrini wala mahali pa kuegesha simu.", meets: "Muda wa kuzima skrini kama dakika 30 kabla ya kulala na mahali pa kuegesha simu mbali na kitanda.", exceeds: "Hali ya usingizi au do not disturb imewashwa kila usiku wa jaribio." },
      { name: "Mlisho na mbadala", objective: "O5", notYet: "Hakuna badiliko la mlisho, au hakuna vitu vya kufanya badala ya kusogeza.", meets: "Badiliko moja la mlisho na vitu viwili vya kufanya badala ya kusogeza.", exceeds: "Anaandika jinsi badiliko la mlisho lilivyoathiri hisia zake." },
      { name: "Jaribio la siku saba", objective: "O6", notYet: "Mpango haukujaribiwa, au matokeo hayakulinganishwa.", meets: "Ameufuata kwa siku saba, na muda wa skrini, mara za kushika simu na usingizi vimelinganishwa na Somo la 1.", exceeds: "Anasema aendelee na nini na abadilishe nini wiki ijayo." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi ambao muda wao wa skrini au mara za kushika simu zinapungua baada ya jaribio la siku saba (wanavyoripoti wenyewe)",
      "Wanafunzi wanaoripoti saa zaidi za usingizi katika ufuatiliaji wa siku 30",
      "Wanafunzi ambao bado wanatumia mpango wao wa skrini baada ya siku 30 (utafiti wa kufuatilia)"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kifaa cha mwanafunzi mwenyewe",
      "Karatasi au app ya maelezo kwa mpango wa skrini na maelezo ya kila siku",
      "Saa ya kengele ya bei nafuu kama simu inatumika kama kengele (si lazima)",
      "Kama dakika 60 kwa jumla, pamoja na jaribio la siku saba"
    ],
    facilitatorNotes: [
      "Liwe chaguo, si mahubiri: wanafunzi wanaweka malengo yao wenyewe na wanatunza namba zao kwa siri isipokuwa wakitaka kushiriki.",
      "Wasaidie wanafunzi wenye simu tofauti kupata mipangilio sahihi; menyu zinatofautiana kati ya vifaa.",
      "Shiriki huduma za afya ya akili na msaada wa dharura za eneo lako, pamoja na 988 Marekani, na waambie wanafunzi waongee na nani wakijisikia huzuni mara nyingi.",
      "Endesheni jaribio la siku saba kama changamoto ya kikundi, na mkutano wa kujadili mwishoni mwa wiki.",
      "Pima mpango wa skrini kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};

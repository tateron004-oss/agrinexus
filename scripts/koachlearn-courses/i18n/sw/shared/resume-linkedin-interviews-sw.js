"use strict";

// Koach Learn course (Swahili translation of shared/resume-linkedin-interviews.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "resume-linkedin-interviews-sw",
  lang: "sw",
  translationOf: "resume-linkedin-interviews",
  category: "Athletes",
  name: "CV (Wasifu wa Kazi), LinkedIn na Usaili wa Kazi",
  skills: "Kuandika CV ya ukurasa mmoja, Kuandika mistari ya mafanikio, Kutengeneza wasifu wa LinkedIn, Kujibu kwa mbinu ya STAR, Kujibu kwa ukweli kuhusu pengo au rekodi ya uhalifu, Kufuatilia baada ya usaili",
  outcome: "kuandika CV ya ukurasa mmoja yenye mistari imara ya mafanikio, kutengeneza wasifu rahisi wa LinkedIn, na kujibu kwa sauti maswali ya kawaida ya usaili kwa kutumia mbinu ya STAR, pamoja na jibu fupi la kweli kuhusu pengo au rekodi.",
  about: [
    "Kozi hii ni kwa yeyote anayejiandaa kutafuta kazi: mwanafunzi anayetafuta kazi ya kwanza, mwanamichezo anayeingia katika kazi baada ya michezo, mwanajeshi mstaafu anayeingia katika kazi ya kiraia, mtu anayerudi nyumbani kutoka gerezani, au mtu anayebadilisha kazi baada ya miaka mingi mahali pamoja.",
    "Utatengeneza vitu vitatu unavyoweza kutumia mara moja: CV ya ukurasa mmoja, wasifu wa LinkedIn, na majibu ya usaili uliyoyafanyia mazoezi kwa sauti. Pia utajifunza nini cha kumuuliza mwajiri na jinsi ya kufuatilia.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Kuna jaribio fupi la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Zana za AI kama ChatGPT au Microsoft Copilot zinaweza kukusaidia na maneno, lakini ukweli na sauti lazima viwe vyako."
  ],
  finalTask: "Chagua tangazo moja halisi la kazi. Andika CV ya ukurasa mmoja kwa ajili yake yenye angalau mistari minne ya mafanikio, sasisha kichwa (headline) na sehemu ya About ya LinkedIn yako ili vilingane nayo, kisha jirekodi ukijibu maswali matatu ya usaili kwa sauti kwa mbinu ya STAR, pamoja na jibu moja la kweli kuhusu pengo au rekodi kama linakuhusu. Malizia kwa kuandika ujumbe mfupi wa shukrani ambao ungeweza kutuma baada ya usaili.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Yeyote anayejiandaa kutafuta kazi: wanafunzi wanaotafuta kazi ya kwanza, wanamichezo wanaoingia katika kazi baada ya michezo, wanajeshi wastaafu wanaoingia katika kazi ya kiraia, watu wanaorudi nyumbani kutoka gerezani na watu wanaobadilisha kazi baada ya miaka mingi mahali pamoja.",
    startingPoint: "Wana uzoefu wa kazi, shule, michezo, utumishi au maisha, na wanaweza kutumia simu au kompyuta. Wengi wana CV ya zamani au hawana kabisa, hawana wasifu wa LinkedIn, na hawajafanya mazoezi ya majibu ya usaili kwa sauti, hasa kuhusu pengo au rekodi.",
    gap: "Waajiri huamua haraka kutokana na CV, wasifu na usaili mfupi. Wanafunzi wanahitaji CV wazi ya ukurasa mmoja, wasifu rahisi wa LinkedIn na majibu ya kweli waliyoyafanyia mazoezi, ili ujuzi wao halisi uonekane na wapate usaili na nafasi za kazi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Vifaa: simu au kompyuta yenye zana ya bure ya kuandika nyaraka na kinasa sauti",
      "Ukweli: kila kitu kwenye CV, wasifu au maandishi yaliyoboreshwa na AI lazima kiwe kweli",
      "Faragha: hakuna anwani ya nyumbani wala namba za vitambulisho kwenye LinkedIn au katika zana za AI",
      "Sheria kuhusu rekodi na nafasi ya haki zinatofautiana kwa kila mahali; wanafunzi wanakagua sheria za mahali pao"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa tangazo halisi la kazi", action: "kupanga CV ya ukurasa mmoja yenye mawasiliano yako, muhtasari, ujuzi unaolingana na uzoefu wenye tarehe", standard: "kwenye ukurasa mmoja, inayolingana na tangazo" },
    { id: "O2", condition: "Ukipewa majukumu ya kawaida ya kazi", action: "kuandika mistari ya mafanikio kwa kitenzi cha kitendo, ulichofanya na matokeo au namba", standard: "ukiwa na angalau mistari minne ambayo yote ni ya kweli" },
    { id: "O3", condition: "Ukitumia CV yako", action: "kutengeneza wasifu wa LinkedIn wenye picha, kichwa (headline), sehemu ya About na uzoefu", standard: "bila anwani ya nyumbani wala namba za vitambulisho, na maombi matatu ya kuunganishwa yametumwa" },
    { id: "O4", condition: "Ukipewa swali la usaili kuhusu tabia", action: "kujibu kwa hadithi ya STAR: Hali, Jukumu, Kitendo na Matokeo", standard: "kwa dakika moja hadi mbili, muda mwingi ukiwa kwenye Kitendo" },
    { id: "O5", condition: "Unapoulizwa swali gumu kuhusu pengo au rekodi", action: "kutoa kwa sauti jibu fupi la kweli linalosema umefanya nini tangu wakati huo", standard: "likiwa limerekodiwa, kusikilizwa na kuboreshwa angalau mara moja" },
    { id: "O6", condition: "Mwishoni mwa usaili", action: "kuuliza maswali mazuri na kuandika ujumbe wa shukrani", standard: "ujumbe ukiwa umetumwa ndani ya saa 24" }
  ],
  chapters: [
    {
      name: "Sura 1: CV yako na LinkedIn",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kutengeneza CV ya ukurasa mmoja",
          minutes: 5,
          goal: "Panga CV safi ya ukurasa mmoja yenye sehemu sahihi kwa mpangilio sahihi.",
          text: [
            "CV (wasifu wa kazi, kwa Kiingereza resume) ni muhtasari wa ukurasa mmoja wa unachoweza kumfanyia mwajiri. Waajiri wengi hutumia chini ya dakika moja kuitazama mara ya kwanza, kwa hiyo ukurasa lazima uwe rahisi kupitia haraka: vichwa wazi, nafasi nyeupe ya kutosha, na herufi (font) moja rahisi kama Calibri au Arial ya ukubwa 10 hadi 12.",
            "Tumia sehemu hizi, kutoka juu hadi chini: jina lako na mawasiliano (simu, barua pepe ya kitaaluma, mji na jimbo au mkoa, na kiungo cha LinkedIn kama unacho); muhtasari wa mistari miwili; ujuzi; uzoefu wa kazi, kazi ya karibuni ikiwa ya kwanza; kisha elimu, mafunzo na vyeti.",
            "Uzoefu ni zaidi ya kazi za mshahara. Hesabu kazi ya kujitolea, utumishi wa jeshi, kuwa nahodha wa timu au kufundisha michezo, kazi ya kanisa au ya jamii, na kazi au mafunzo uliyofanya ukiwa gerezani, kama jikoni, matengenezo au programu ya ufundi. Ukipenda, eleza ulichofanya, si mahali ulipokifanyia.",
            "Badilisha CV yako kidogo kwa kila kazi. Soma tangazo, tafuta ujuzi unaoombwa, na hakikisha maneno unayotumia yanalingana na ujuzi ulio nao kweli. Waajiri wengi wanatumia programu inayotafuta maneno hayo ndani ya CV."
          ],
          steps: ["Fungua programu ya bure ya kuandika kama Google Docs au Microsoft Word, au tumia kiolezo rahisi cha CV.", "Weka jina lako na mawasiliano juu. Tumia barua pepe ya kitaaluma, kama iliyotengenezwa kwa jina lako la kwanza na la mwisho.", "Andika muhtasari wa mistari miwili: wewe ni nani na unatoa nini.", "Orodhesha ujuzi 6 hadi 10 unaolingana na tangazo la kazi.", "Orodhesha uzoefu, wa karibuni kwanza: cheo cha kazi, shirika, mji, tarehe na mistari 3 hadi 4 kwa kila moja.", "Ongeza elimu, mafunzo na vyeti. Weka yote kwenye ukurasa mmoja."],
          words: [["CV (resume)", "muhtasari wa ukurasa mmoja wa ujuzi, uzoefu na mafunzo yako unaotuma unapoomba kazi."], ["Tangazo la kazi", "tangazo linaloeleza kazi na kile mwajiri anachotafuta."], ["Applicant tracking system", "programu ambayo waajiri wengi wanatumia kukusanya CV na kutafuta maneno muhimu ndani yake."]],
          slides: [
            { title: "CV ni ombi lako la ukurasa mmoja", bullets: ["Rahisi kupitia kwa chini ya dakika moja", "Herufi moja rahisi, ukubwa 10 hadi 12", "Vichwa wazi na nafasi nyeupe"] },
            { title: "Sehemu, kutoka juu hadi chini", bullets: ["Jina na mawasiliano", "Muhtasari wa mistari miwili na ujuzi", "Uzoefu, wa karibuni kwanza", "Elimu, mafunzo na vyeti"] },
            { title: "Kila uzoefu unahesabika", bullets: ["Kazi ya kujitolea na utumishi wa jeshi", "Nahodha wa timu, kufundisha, kazi za jamii", "Kazi na programu za mafunzo ukiwa gerezani"] },
            { title: "Linganisha na kila tangazo", bullets: ["Tafuta ujuzi unaoombwa katika tangazo", "Tumia maneno yale yale kwa ujuzi ulio nao kweli"] }
          ],
          tryIt: "Tafuta tangazo moja halisi la kazi ambalo ungeiomba. Fungua hati mpya na utengeneze muundo wa CV kwa ajili yake: mawasiliano yako, muhtasari wa mistari miwili, ujuzi sita unaolingana na tangazo, na uzoefu wako wenye tarehe. Acha mistari ya mafanikio kwa somo linalofuata.",
          youCanNow: "kupanga CV ya ukurasa mmoja yenye sehemu sahihi na kuilinganisha na tangazo la kazi.",
          quickCheck: [
            { objective: "O1", q: "Muhtasari wa CV ni nini?", options: ["Mistari miwili juu inayosema wewe ni nani na unatoa nini", "Orodha ya kila kazi uliyowahi kufanya", "Namba za simu za wadhamini wako", "Historia ya mishahara yako"], answer: 0, why: "Muhtasari mfupi unamwambia mwajiri haraka unacholeta." },
            { objective: "O1", q: "Tangazo la kazi linaomba ujuzi wa forklift na wa kuhesabu mali ghalani, nawe unao. Ungefanya nini na CV yako?", options: ["Kuiacha ile ile kwa kila kazi", "Kuongeza hadithi nzima ya maisha yako", "Kuongeza ujuzi huo katika sehemu ya ujuzi na ya uzoefu", "Kuifanya iwe na kurasa tatu"], answer: 2, why: "Kulinganisha CV yako na tangazo kunaonyesha unafaa kazi hiyo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuandika mistari ya mafanikio",
          minutes: 5,
          goal: "Geuza majukumu ya kawaida kuwa mistari inayoonyesha ulichofanikisha.",
          text: [
            "Mistari dhaifu inaorodhesha majukumu: \"Nilihusika na usafi.\" Mistari imara inaonyesha matokeo: \"Nilisafisha na kujaza vitu katika vyumba 12 kwa kila zamu na nikafaulu kila ukaguzi wa kila wiki.\" Mwajiri anaweza kukuona ukifanya kazi vizuri.",
            "Kanuni rahisi: kitenzi cha kitendo + ulichofanya + matokeo au namba. Anza na kitenzi imara kama niliongoza, nilijenga, nilifundisha, nilitengeneza, nilihudumia, nilipanga, nilipunguza au niliboresha. Kisha ongeza namba ukiweza: watu wangapi, pesa kiasi gani, mara ngapi, au kwa haraka kiasi gani zaidi.",
            "Mifano kutoka maisha tofauti: \"Nilifundisha wafanyakazi 4 wapya orodha ya ukaguzi wa kufungua duka.\" (biashara ya rejareja) \"Niliongoza kikosi cha askari 9 katika ukaguzi wa vifaa kila siku bila hasara yoyote.\" (jeshi) \"Nilikuwa nahodha wa timu ya shule ya wachezaji 22 na nikapanga kutazama video za michezo kila wiki.\" (mwanamichezo) \"Niliandaa milo ya watu 300 kwa siku katika jiko la taasisi, nikifaulu kila ukaguzi wa usalama wa chakula.\" (kurudi katika jamii)",
            "Sema ukweli. Kamwe usibuni namba au vyeo vya kazi. Kama huna uhakika wa namba, tumia makadirio ya haki pamoja na neno \"kama\" (kwa mfano \"kama watu 50\"), au eleza matokeo kwa maneno."
          ],
          steps: ["Andika kazi moja uliyofanya katika ajira, timu au programu.", "Anza na kitenzi cha kitendo.", "Ongeza ulichofanya na kwa ajili ya nani.", "Ongeza namba au matokeo.", "Isome kwa sauti: inasikika kama kitu ulichofanya kweli?"],
          words: [["Mstari wa mafanikio", "mstari mmoja mfupi kwenye CV unaoonyesha matokeo uliyofikia, si jukumu tu."], ["Kitenzi cha kitendo", "neno la kufanya kama niliongoza, nilijenga, nilifundisha au nilitengeneza."]],
          slides: [
            { title: "Majukumu dhidi ya matokeo", bullets: ["Dhaifu: \"Nilihusika na usafi\"", "Imara: \"Nilisafisha vyumba 12 kwa kila zamu na nikafaulu kila ukaguzi\""] },
            { title: "Kanuni ya mstari", bullets: ["Kitenzi cha kitendo", "+ ulichofanya", "+ namba au matokeo"] },
            { title: "Mifano kutoka maisha mengi", bullets: ["\"Nilifundisha wafanyakazi 4 wapya ukaguzi wa kufungua\"", "\"Nilikuwa nahodha wa timu ya 22 na nikapanga kutazama video\"", "\"Niliandaa milo 300 kwa siku, nikifaulu kila ukaguzi wa usalama\""] },
            { title: "Baki mkweli", bullets: ["Kamwe usibuni namba au vyeo", "Tumia \"kama\" kwa makadirio ya haki", "Eleza matokeo kwa maneno kama huna namba"] }
          ],
          tryIt: "Andika mistari minne ya mafanikio kwa CV yako ukitumia kanuni hii. Unaweza kumwomba msaidizi wa AI: \"Fanya mstari huu wa CV uwe imara zaidi bila kuongeza kitu chochote kisicho kweli: [mstari wako].\" Hakikisha kila neno linalokupa ni la kweli kabla ya kulibakiza.",
          youCanNow: "kuandika mistari ya mafanikio inayoanza na kitenzi cha kitendo na kuonyesha matokeo.",
          quickCheck: [
            { objective: "O2", q: "Kipi ni kitenzi cha kitendo kinachoanzisha mstari imara?", options: ["Nilihusika na", "Nilifundisha", "Majukumu yalijumuisha", "Nilikuwa msimamizi wa"], answer: 1, why: "Mistari huanza na kitenzi cha kitendo kinachoonyesha ulichofanya." },
            { objective: "O2", q: "Mstari wako unasema \"Nilifanya huduma kwa wateja.\" Ungeandika nini badala yake?", options: ["\"Nilifanya huduma nyingi kwa wateja\"", "\"Huduma kwa wateja, pesa, simu\"", "\"Nilikuwa bora katika huduma kwa wateja\"", "\"Nilisaidia kama wateja 50 kwa siku na nikashughulikia bidhaa zilizorudishwa kwa utulivu\""], answer: 3, why: "Mistari imara inaonyesha ulichofanya pamoja na matokeo au namba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutengeneza wasifu wa LinkedIn",
          minutes: 5,
          goal: "Tengeneza wasifu wa LinkedIn wenye picha, kichwa (headline), sehemu ya About na uzoefu.",
          text: [
            "LinkedIn ni tovuti na app ya bure ya kujenga mtandao wa kikazi. Waajiri na watafutaji wa wafanyakazi (recruiters) wanaitumia kutafuta watu wa kuajiri, na kazi nyingi zinatangazwa humo. Wasifu wako unafanya kazi kama CV ya mtandaoni ambayo watu wanaweza kuipata.",
            "Sehemu muhimu zaidi: picha wazi ya uso wako yenye mandharinyuma ya rangi moja; kichwa (headline, mstari ulio chini ya jina lako) kinachosema unachofanya au unachotaka kufanya, kama \"Forklift operator | OSHA 10 | Reliable on early shifts\"; sehemu ya About ya sentensi tatu hadi tano kwa sauti yako mwenyewe; na uzoefu wako, ukitumia mistari kutoka CV yako.",
            "Kisha jenga mtandao wako. Ungana na watu unaowajua: makocha wa zamani, wasimamizi, walimu, maafisa wa kesi (case managers), watu mliotumikia pamoja, wanafunzi wenzako. Tuma ujumbe mfupi unapoungana nao. Fuata kampuni unazotaka kufanyia kazi ili uone matangazo yao ya kazi.",
            "Weka wasifu wa kitaaluma na salama. Usiweke anwani ya nyumbani, tarehe ya kuzaliwa wala namba za vitambulisho. Wasifu wako hauhitaji kutaja rekodi au pengo; unaonyesha ujuzi wako."
          ],
          steps: ["Nenda linkedin.com au sakinisha app rasmi ya LinkedIn, na ufungue akaunti ya bure kwa barua pepe ya kitaaluma.", "Weka picha wazi ya kirafiki.", "Andika kichwa (headline) kinachosema unachofanya au kazi unayotaka.", "Andika sehemu ya About ya sentensi tatu hadi tano.", "Ongeza uzoefu na ujuzi wako kutoka CV yako.", "Ungana na watu watano unaowajua, kwa ujumbe mfupi."],
          words: [["LinkedIn", "tovuti na app ya bure ya mtandao wa kikazi ambapo watu wanaonyesha historia yao ya kazi na waajiri wanatangaza kazi."], ["Kichwa (headline)", "mstari mfupi chini ya jina lako kwenye LinkedIn unaosema unachofanya."], ["Mtandao", "watu unaowajua ambao wanaweza kukupa habari za kazi au kuzungumza kuhusu kazi yako."]],
          slides: [
            { title: "Kwa nini LinkedIn", bullets: ["Watafutaji wa wafanyakazi wanaitumia kutafuta watu", "Kazi nyingi zinatangazwa humo", "CV yako ya mtandaoni ambayo watu wanaweza kuipata"] },
            { title: "Sehemu muhimu", bullets: ["Picha wazi yenye mandharinyuma ya rangi moja", "Kichwa: unachofanya au unachotaka kufanya", "About: sentensi 3 hadi 5 kwa sauti yako", "Mistari ya uzoefu kutoka CV yako"] },
            { title: "Jenga mtandao wako", bullets: ["Makocha, wasimamizi, walimu, maafisa wa kesi", "Tuma ujumbe mfupi na kila ombi", "Fuata kampuni unazotaka kufanyia kazi"] },
            { title: "Kaa salama", bullets: ["Bila anwani ya nyumbani, tarehe ya kuzaliwa wala namba za vitambulisho", "Onyesha ujuzi wako; wewe unachagua cha kushiriki"] }
          ],
          tryIt: "Fungua au sasisha wasifu wako wa LinkedIn. Andika kichwa chako na sehemu ya About, ongeza kazi moja yenye mistari yako mipya, na utume maombi ya kuunganishwa pamoja na ujumbe mfupi kwa watu watatu unaowajua.",
          youCanNow: "kutengeneza wasifu wa LinkedIn wenye picha, kichwa, sehemu ya About na uzoefu, na kuanza kujenga mtandao wako.",
          quickCheck: [
            { objective: "O3", q: "Sehemu ya About kwenye LinkedIn inafanya nini?", options: ["Inaorodhesha anwani yako ya nyumbani", "Inaeleza hadithi ya kazi yako na unachotafuta kwa mistari michache mifupi", "Inaonyesha nywila zako", "Inaorodhesha marafiki zako wa mitandao ya kijamii"], answer: 1, why: "Sehemu ya About ni hadithi fupi ya ujuzi na malengo yako." },
            { objective: "O3", q: "Unataka kuungana na msimamizi wako wa zamani kwenye LinkedIn. Ungefanya nini?", options: ["Kutuma ombi pamoja na ujumbe mfupi wa kirafiki", "Kutuma ombi bila ujumbe pamoja na namba yako ya simu", "Kumtumia ujumbe ukiomba kazi mara moja", "Kusubiri akutafute"], answer: 0, why: "Ujumbe mfupi unamkumbusha wewe ni nani na unaanzisha uhusiano mzuri." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: CV yako na LinkedIn",
        questions: [
          { objective: "O1", q: "CV kwa kazi nyingi za ngazi ya kuanzia na ya kati inapaswa kuwa ndefu kiasi gani?", options: ["Kurasa tatu", "Ukurasa mmoja", "Nusu ukurasa", "Ndefu kadiri iwezekanavyo"], answer: 1, why: "Ukurasa mmoja ni rahisi kupitia na ndio kawaida kwa kazi nyingi." },
          { objective: "O2", q: "Mstari upi ni imara zaidi?", options: ["\"Nilihusika na stoo\"", "\"Nilifanya kazi mbalimbali\"", "\"Mchapakazi\"", "\"Nilipanga stoo na kupunguza muda wa kutafuta vipuri kwa kama nusu\""], answer: 3, why: "Unaanza na kitenzi cha kitendo na unaonyesha matokeo." },
          { objective: "O1", q: "Uliendesha mstari wa jikoni katika programu ya taasisi ukiwa gerezani. Je, iingie katika CV yako?", options: ["Ndiyo, kama uzoefu, ukieleza ujuzi uliotumia", "Hapana, haihesabiki kamwe", "Tu kama ulilipwa pesa nyingi", "Kwenye LinkedIn tu"], answer: 0, why: "Kazi na programu za mafunzo ni uzoefu halisi; eleza ulichofanya." },
          { objective: "O3", q: "Kichwa (headline) kizuri cha LinkedIn ni kipi?", options: ["\"Natafuta\"", "Anwani yako ya nyumbani", "\"Certified welder | Safety-first | Open to apprenticeships\"", "Tarehe yako ya kuzaliwa"], answer: 2, why: "Kichwa kinasema unachofanya au unachotaka kufanya na kinaonyesha uwezo wako." },
          { objective: "O2", q: "Zana ya AI iliandika upya mstari wako na ikaongeza cheo cha meneja ambacho hukuwahi kuwa nacho. Unafanya nini?", options: ["Kukibakiza, kinasikika vizuri zaidi", "Kukiondoa, kwa sababu kila kitu kwenye CV lazima kiwe kweli", "Kuongeza cheo kingine", "Kukiweka kwenye LinkedIn tu"], answer: 1, why: "CV lazima iwe ya kweli; unakagua kila neno ambalo AI inaandika." }
        ]
      }
    },
    {
      name: "Sura 2: Usaili na ufuatiliaji",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kujibu kwa mbinu ya STAR",
          minutes: 5,
          goal: "Jibu swali la usaili kuhusu tabia kwa hadithi fupi ya STAR.",
          text: [
            "Maswali mengi ya usaili yanaanza na \"Niambie kuhusu wakati ambapo...\". Mwajiri anataka mfano halisi wa jinsi unavyotenda. Mbinu ya STAR inafanya jibu lako liwe wazi na fupi.",
            "S ni Situation (Hali): ulikuwa wapi na nini kilikuwa kikiendelea. T ni Task (Jukumu): ulipaswa kufanya nini. A ni Action (Kitendo): WEWE ulifanya nini, hatua kwa hatua. R ni Result (Matokeo): mambo yaliishaje, kwa namba ukiweza, na ulijifunza nini.",
            "Mfano: \"Niambie kuhusu wakati ulipotatua tatizo.\" S: \"Katika kazi yangu ya ghala, mzigo ulifika saa mbili kuchelewa siku yenye shughuli nyingi.\" T: \"Nilipaswa kuupanga kwenye rafu kabla duka halijafunguliwa.\" A: \"Nilimwomba kiongozi wangu ruhusa ya kugawa timu, nikaweka mistari miwili ya kupakua, na nikakagua lebo mimi mwenyewe.\" R: \"Tulimaliza dakika 15 kabla ya kufungua na hakuna kilichopotea.\"",
            "Andaa hadithi tano kabla ya usaili wowote: wakati ulipotatua tatizo, ulipofanya kazi katika timu, ulipokosea na kurekebisha, ulipokabiliana na mtu mgumu, na ulipojifunza kitu haraka. Michezo, jeshi, shule, familia na programu zote zinatoa hadithi nzuri."
          ],
          steps: ["Soma swali na uchague hadithi ya kweli.", "Hali: sentensi moja kuhusu wapi na lini.", "Jukumu: sentensi moja kuhusu ulichopaswa kufanya.", "Kitendo: sentensi mbili au tatu kuhusu ulichofanya.", "Matokeo: sentensi moja kuhusu jinsi ilivyoisha na ulichojifunza.", "Weka jibu zima kuwa kama dakika moja hadi mbili."],
          words: [["Swali la tabia", "swali la usaili linalouliza kuhusu wakati ulipofanya kitu, ili kuona jinsi unavyotenda kazini."], ["Mbinu ya STAR", "njia ya kujibu: Situation (Hali), Task (Jukumu), Action (Kitendo), Result (Matokeo)."]],
          slides: [
            { title: "\"Niambie kuhusu wakati ambapo...\"", bullets: ["Mwajiri anataka mfano halisi", "STAR inafanya jibu liwe wazi na fupi"] },
            { title: "STAR", bullets: ["Situation (Hali): wapi na lini", "Task (Jukumu): ulipaswa kufanya nini", "Action (Kitendo): WEWE ulifanya nini", "Result (Matokeo): ilivyoisha na ulichojifunza"] },
            { title: "Andaa hadithi tano", bullets: ["Ulitatua tatizo; ulifanya kazi katika timu", "Ulikosea na kurekebisha; ulikabiliana na mtu mgumu", "Ulijifunza kitu haraka"] },
            { title: "Iweke fupi", bullets: ["Kama dakika moja hadi mbili", "Sema \"mimi\" kwa vitendo vyako", "Malizia na matokeo"] }
          ],
          tryIt: "Andika hadithi moja ya STAR kwa swali \"Niambie kuhusu wakati ulipofanya kazi katika timu.\" Tumia sentensi moja kila moja kwa Hali na Jukumu, mbili au tatu kwa Kitendo, na moja kwa Matokeo.",
          youCanNow: "kujibu swali la \"niambie kuhusu wakati\" kwa hadithi wazi ya STAR.",
          quickCheck: [
            { objective: "O4", q: "Herufi S katika STAR inasimama kwa nini?", options: ["Skill (Ujuzi)", "Strength (Nguvu)", "Situation (Hali)", "Summary (Muhtasari)"], answer: 2, why: "STAR ni Situation, Task, Action na Result (Hali, Jukumu, Kitendo na Matokeo)." },
            { objective: "O4", q: "Unaulizwa, \"Niambie kuhusu wakati ulipotatua tatizo.\" Ungefanya nini?", options: ["Kusema \"Mimi ni hodari wa kutatua matatizo\" na kunyamaza", "Kuongea dakika kumi kuhusu matatizo mengi", "Kusema hujawahi kuwa na tatizo", "Kusimulia hadithi moja fupi: hali, jukumu, ulichofanya na matokeo"], answer: 3, why: "Hadithi moja fupi ya STAR inathibitisha ujuzi wako kwa mfano halisi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Mazoezi kwa sauti na kujibu kwa ukweli kuhusu pengo au rekodi",
          minutes: 6,
          goal: "Fanya mazoezi ya majibu kwa sauti, pamoja na jibu fupi la kweli kuhusu pengo au rekodi ya uhalifu.",
          text: [
            "Majibu uliyoyasoma kichwani tu yanatoka yakiwa yamevurugika. Yaseme kwa sauti, jirekodi kwenye simu, kisha usikilize. Fanya mazoezi ya maswali ya kawaida: \"Niambie kuhusu wewe mwenyewe\", \"Kwa nini unataka kazi hii?\", \"Uwezo wako mkubwa ni upi?\", na \"Niambie kuhusu wakati ambapo...\". Unaweza kumwomba msaidizi wa AI acheze kama msaili na akuulize swali moja baada ya jingine.",
            "Pengo katika historia ya kazi ni jambo la kawaida: shule, michezo, utumishi wa jeshi, kutunza familia, afya, au kifungo gerezani. Weka jibu fupi na usonge mbele: pengo lilikuwa nini, ulifanya au ulijifunza nini, na kwa nini uko tayari sasa. Mfano: \"Nilitumia miaka miwili kumtunza mama yangu. Niliendeleza ujuzi wangu kwa kozi ya mtandaoni, na niko tayari kufanya kazi muda wote.\"",
            "Kama una rekodi ya hatia (conviction), usidanganye katika fomu ya maombi wala katika usaili. Unapoulizwa, tumia jibu fupi la kweli: kubali, sema umefanya nini tangu wakati huo, kisha rudi kwenye kazi. Mfano: \"Nilifanya kosa kubwa mwaka 2019 na nikatumikia kifungo changu. Tangu hapo nimemaliza cheti cha forklift na nimefanya kazi miezi 18 bila kukosa zamu hata moja. Niko tayari kuleta uaminifu huo hapa.\" Usitoe maelezo marefu isipokuwa ukiulizwa.",
            "Jua haki zako. Kwa mujibu wa mwongozo wa EEOC (tume ya Marekani ya fursa sawa za ajira), kukamatwa peke yake si ushahidi wa uhalifu, na waajiri wanapaswa kuangalia kosa lenyewe, lilitokea muda gani uliopita na kazi yenyewe. Majimbo na miji mingi ina sheria za \"ban the box\" au za nafasi ya haki (fair chance) zinazochelewesha maswali kuhusu rekodi. Baadhi ya rekodi zinaweza kufungwa au kufutwa; uliza ofisi ya msaada wa kisheria au programu yako ya kurudi katika jamii. Kagua kurasa rasmi zilizo hapa chini."
          ],
          steps: ["Andika jibu lako kwa \"Niambie kuhusu wewe mwenyewe\" kwa sentensi nne: sasa, zamani, uwezo wako, kwa nini kazi hii.", "Jirekodi kwenye simu ukijibu maswali matatu, kisha usikilize.", "Andika jibu la sehemu tatu kwa pengo lolote: lilikuwa nini, ulifanya nini, kwa nini uko tayari.", "Kama una rekodi: ikubali, onyesha umefanya nini tangu hapo, rudi kwenye kazi.", "Fanya mazoezi ya jibu gumu kwa sauti hadi lisikike tulivu na fupi."],
          words: [["Pengo la ajira", "muda ambao hukuwa ukifanya kazi, unaoonekana kwa tarehe zinazokosekana kwenye CV."], ["Ban the box", "sheria katika majimbo na miji mingi ya Marekani zinazozuia waajiri kuuliza kuhusu rekodi katika fomu ya kwanza ya maombi ya kazi."], ["Expungement (kufuta rekodi)", "utaratibu wa mahakama unaoweza kufuta au kufunga baadhi ya rekodi; sheria zinatofautiana kwa kila jimbo."]],
          slides: [
            { title: "Fanya mazoezi kwa sauti", bullets: ["Jirekodi kwenye simu yako", "Sikiliza na ufupishe jibu", "Mwombe msaidizi wa AI acheze kama msaili"] },
            { title: "Kujibu kuhusu pengo", bullets: ["Pengo lilikuwa nini", "Ulifanya au ulijifunza nini", "Kwa nini uko tayari sasa"] },
            { title: "Kujibu kuhusu rekodi", bullets: ["Kamwe usidanganye katika fomu ya maombi", "Ikubali kwa sentensi moja", "Onyesha umefanya nini tangu hapo", "Rudi kwenye kazi"] },
            { title: "Jua haki zako", bullets: ["Kukamatwa peke yake si ushahidi wa uhalifu", "Mahali pengi kuna sheria za ban-the-box au fair chance", "Uliza msaada wa kisheria kuhusu kufunga au kufuta rekodi"] }
          ],
          sources: [
            { name: "EEOC: Rekodi za kukamatwa na za hatia, mambo ambayo watafutaji kazi na wafanyakazi wanapaswa kujua", url: "https://www.eeoc.gov/arrestandconviction" }
          ],
          tryIt: "Jirekodi ukijibu \"Niambie kuhusu wewe mwenyewe\" na swali moja gumu (pengo, rekodi, au \"Kwa nini uliacha kazi yako ya mwisho?\"). Sikiliza. Ondoa chochote kisichohitajika, kisha jirekodi tena.",
          youCanNow: "kufanya mazoezi ya majibu kwa sauti na kutoa jibu fupi, la kweli na linalotazama mbele kuhusu pengo au rekodi.",
          quickCheck: [
            { objective: "O5", q: "Kwa nini ujirekodi ukijibu maswali ya usaili?", options: ["Ili usikie cha kuondoa na kuboresha", "Ili uiweke mtandaoni", "Ili umtumie mwajiri", "Kwa sababu usaili hurekodiwa kila wakati"], answer: 0, why: "Kusikiliza tena kunakuonyesha cha kufupisha na kurekebisha." },
            { objective: "O5", q: "Msaili anauliza kuhusu pengo la miaka miwili ulipokuwa gerezani. Ungesema nini?", options: ["Kubuni kazi nyingine", "Kukataa kujibu na kuondoka", "Kusimulia hadithi ndefu kuhusu kesi", "Kutoa jibu fupi la kweli na kusema umefanya nini tangu hapo"], answer: 3, why: "Fupi na la kweli, kisha zingatia ulichofanya tangu hapo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuuliza maswali na kufuatilia",
          minutes: 4,
          goal: "Uliza maswali mazuri mwishoni mwa usaili na utume ujumbe wa shukrani.",
          text: [
            "Karibu na mwisho, wasaili wengi huuliza, \"Una maswali yoyote kwetu?\" Kila wakati kuwa na mawili au matatu tayari. Kunaonyesha unajali. Maswali mazuri: \"Mwezi wa kwanza mzuri unaonekanaje katika kazi hii?\", \"Watu bora katika timu hii wanafanya nini tofauti?\", \"Hatua zinazofuata ni zipi, na nitarajie kusikia kutoka kwenu lini?\"",
            "Acha maswali kuhusu mshahara na marupurupu hadi wao walitaje au wakupe nafasi ya kazi, isipokuwa kama tangazo halikutaja mshahara na unahitaji kujua. Uliza kwa adabu.",
            "Ndani ya saa 24, tuma ujumbe mfupi wa shukrani kwa barua pepe (au kadi kwa biashara ndogo ya mtaani). Washukuru kwa muda wao, taja jambo moja mlilozungumza, na sema tena kwa nini unataka kazi hiyo. Uweke kuwa sentensi nne au tano.",
            "Usiposikia kutoka kwao kufikia tarehe waliyotaja, tuma ujumbe mmoja wa adabu wa kufuatilia siku chache baadaye. Endelea kuomba kazi nyingine wakati huo huo."
          ],
          steps: ["Andaa maswali mawili au matatu kabla ya usaili.", "Uliza kuhusu hatua zinazofuata na muda wake.", "Andika jina na barua pepe ya msaili.", "Tuma ujumbe mfupi wa shukrani ndani ya saa 24.", "Fuatilia mara moja kama tarehe waliyotaja imepita."],
          words: [["Ufuatiliaji (follow-up)", "ujumbe mfupi wa adabu baada ya usaili kumshukuru mwajiri au kuuliza kuhusu hatua zinazofuata."]],
          slides: [
            { title: "Kila wakati kuwa na maswali", bullets: ["\"Mwezi wa kwanza mzuri unaonekanaje?\"", "\"Watu bora hapa wanafanya nini tofauti?\"", "\"Hatua zinazofuata ni zipi?\""] },
            { title: "Mshahara na marupurupu", bullets: ["Kwa kawaida subiri hadi walitaje au wakupe kazi", "Uliza kwa adabu kama mshahara haukutajwa"] },
            { title: "Ujumbe wa shukrani", bullets: ["Tuma ndani ya saa 24", "Taja jambo moja mlilozungumza", "Sentensi nne au tano"] },
            { title: "Bado hujajibiwa?", bullets: ["Fuatilia mara moja baada ya tarehe yao kupita", "Endelea kuomba kazi kwingine"] }
          ],
          tryIt: "Kazi ya mwisho: andika ujumbe mfupi wa shukrani kwa usaili uliofanyia mazoezi. Kisha weka yote pamoja: CV yako ya ukurasa mmoja, kichwa na sehemu ya About ya LinkedIn uliyosasisha, na majibu matatu ya STAR uliyorekodi.",
          youCanNow: "kuuliza maswali mazuri mwishoni mwa usaili na kufuatilia kwa ujumbe mfupi wa shukrani.",
          quickCheck: [
            { objective: "O6", q: "Ujumbe mzuri wa shukrani una nini?", options: ["Shukrani, jambo moja mlilozungumza na kwa nini unataka kazi", "Neno asante peke yake", "Ombi la mshahara mkubwa zaidi", "CV yako yote tena"], answer: 0, why: "Kutaja jambo mlilozungumza kunaonyesha unajali kweli." },
            { objective: "O6", q: "Mwishoni mwa usaili wanauliza kama una maswali. Ungeuliza nini?", options: ["\"Ninaweza kwenda likizo baada ya muda gani?\"", "\"Hapana, niko sawa.\"", "\"Hatua zinazofuata ni zipi, na nitarajie kusikia kutoka kwenu lini?\"", "\"Je, nimepata kazi?\""], answer: 2, why: "Kuuliza kuhusu hatua zinazofuata kunaonyesha unajali na kunakuambia lini ufuatilie." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Usaili na ufuatiliaji",
        questions: [
          { objective: "O4", q: "Herufi A katika STAR inasimama kwa nini?", options: ["Answer (Jibu)", "Attitude (Mtazamo)", "Action (Kitendo)", "Award (Tuzo)"], answer: 2, why: "STAR ni Situation, Task, Action, Result (Hali, Jukumu, Kitendo, Matokeo)." },
          { objective: "O5", q: "Njia bora ya kufanya mazoezi ya majibu ya usaili ni ipi?", options: ["Kuyasoma kimya mara moja", "Kukariri maneno neno kwa neno bila kuyasema kwa sauti kamwe", "Kuacha mazoezi ili usikike wa kawaida", "Kuyasema kwa sauti na kujirekodi"], answer: 3, why: "Kuongea na kusikiliza tena kunakuonyesha cha kurekebisha." },
          { objective: "O5", q: "Hukuwa kazini kwa mwaka mmoja ukimtunza mzazi. Jibu lipi ni bora?", options: ["\"Nilimtunza mama yangu kwa mwaka mmoja, niliendeleza ujuzi wangu kwa kozi, na niko tayari kufanya kazi muda wote.\"", "\"Ningependa nisiseme.\"", "Kubuni kazi ya kujaza pengo", "Hadithi ya dakika kumi kuhusu matatizo ya familia"], answer: 0, why: "Ni fupi, la kweli na linasonga mbele kwa nini uko tayari." },
          { objective: "O5", q: "Msaili anauliza kuhusu rekodi yako ya hatia. Unapaswa kufanya nini?", options: ["Kukana", "Kutoa jibu fupi la kweli na kusema umefanya nini tangu hapo", "Kuondoka", "Kueleza kila undani kwa dakika kumi"], answer: 1, why: "Ukweli pamoja na ulichofanya tangu hapo unajenga uaminifu; kudanganya kunaweza kukugharimu kazi baadaye." },
          { objective: "O6", q: "Unapaswa kutuma ujumbe wa shukrani lini?", options: ["Ndani ya saa 24", "Baada ya mwezi mmoja", "Tu ukipata kazi", "Kamwe"], answer: 0, why: "Ujumbe wa haraka unaonyesha unajali wakati bado unakumbukwa vizuri." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: CV (Wasifu wa Kazi), LinkedIn na Usaili wa Kazi",
    questions: [
      { objective: "O1", q: "Nini kinakaa juu kabisa ya CV?", options: ["Mambo unayopenda kufanya", "Wadhamini wako", "Jina lako na mawasiliano", "Tarehe yako ya kuzaliwa"], answer: 2, why: "Jina na mawasiliano huja kwanza ili mwajiri aweze kukufikia." },
      { objective: "O1", q: "Kwa nini ubadilishe CV yako kidogo kwa kila kazi?", options: ["Ili ilingane na ujuzi unaoombwa katika tangazo", "Kwa sababu sheria inataka hivyo", "Ili iwe ndefu zaidi", "Ili kuongeza kazi ambazo hukuwahi kufanya"], answer: 0, why: "Kulinganisha ujuzi halisi na tangazo kunasaidia watu na programu kukupata." },
      { objective: "O1", q: "Anwani ipi ya barua pepe ni bora kwenye CV?", options: ["partyking99@example.com", "jordan.smith@example.com", "Bila barua pepe kabisa", "Barua pepe yako ya zamani ya shule ambayo huwezi kuifungua"], answer: 1, why: "Anwani rahisi ya kitaaluma unayoikagua mara kwa mara ndiyo bora." },
      { objective: "O2", q: "Mwanajeshi mstaafu aliongoza timu ya watu 9 katika ukaguzi wa vifaa kila siku. Mstari upi ni imara zaidi?", options: ["\"Nilikuwa jeshini\"", "\"Nilifanya ukaguzi\"", "\"Majukumu mbalimbali\"", "\"Niliongoza askari 9 katika ukaguzi wa vifaa kila siku bila hasara yoyote\""], answer: 3, why: "Kitenzi cha kitendo, kilichofanyika, na matokeo." },
      { objective: "O2", q: "Kanuni ya mstari ni ipi?", options: ["Cheo cha kazi + mshahara", "Kitenzi cha kitendo + ulichofanya + matokeo au namba", "Kivumishi + kivumishi + kivumishi", "Tarehe + mahali"], answer: 1, why: "Kanuni hiyo inageuza majukumu kuwa mafanikio." },
      { objective: "O2", q: "Huna uhakika wa namba kamili kwa mstari. Unafanya nini?", options: ["Kutumia makadirio ya haki pamoja na \"kama\" au kueleza matokeo kwa maneno", "Kubuni namba kubwa", "Kuacha kazi nzima nje ya CV", "Kunakili namba kutoka CV ya rafiki"], answer: 0, why: "Baki mkweli; makadirio lazima yawe ya haki na yaonyeshwe kuwa ni makadirio." },
      { objective: "O3", q: "Kichwa (headline) cha LinkedIn ni nini?", options: ["Anwani yako ya nyumbani", "Habari ya gazeti", "Mstari mfupi chini ya jina lako unaosema unachofanya", "Nywila yako"], answer: 2, why: "Kichwa kinawaambia watafutaji wa wafanyakazi unachofanya au unachotaka kufanya." },
      { objective: "O3", q: "Picha ipi ni bora kwa LinkedIn?", options: ["Picha ya kundi kutoka sherehe", "Picha ya gari lako", "Bila uso, nembo tu", "Picha wazi ya uso wako yenye mandharinyuma ya rangi moja"], answer: 3, why: "Picha wazi ya uso wa kirafiki inaonekana ya kitaaluma." },
      { objective: "O3", q: "Kipi HUPASWI kuweka kwenye wasifu wako wa LinkedIn?", options: ["Ujuzi wako", "Anwani yako ya nyumbani na namba za vitambulisho", "Uzoefu wako wa kazi", "Vyeti vyako"], answer: 1, why: "Taarifa binafsi zinaweza kutumiwa vibaya; ziweke mbali." },
      { objective: "O3", q: "Nani ni mtu mzuri wa kuungana naye kwanza kwenye LinkedIn?", options: ["Kocha au msimamizi wa zamani anayeijua kazi yako", "Mtu maarufu yeyote", "Hakuna mtu", "Watu ambao hujawahi kukutana nao tu"], answer: 0, why: "Watu wanaoijua kazi yako wanaweza kukupa habari za kazi na kukuzungumzia." },
      { objective: "O4", q: "\"Niambie kuhusu wakati ulipokosea.\" Hili ni swali la aina gani?", options: ["Swali la mtego la kuruka", "Swali kuhusu mshahara", "Swali la tabia, linalofaa jibu la STAR", "Swali la ndiyo au hapana"], answer: 2, why: "Linaomba mfano halisi, ambao STAR inaujibu vizuri." },
      { objective: "O4", q: "Katika jibu la STAR, sehemu ipi inapaswa kuchukua muda mwingi zaidi?", options: ["Hali", "Jukumu", "Matokeo", "Kitendo: ulichofanya"], answer: 3, why: "Mwajiri anataka zaidi kusikia ulichofanya." },
      { objective: "O4", q: "Jibu la STAR linapaswa kuwa refu kiasi gani?", options: ["Dakika moja hadi mbili", "Sekunde kumi", "Dakika kumi", "Nusu saa"], answer: 0, why: "Fupi na wazi kunamfanya msaili aendelee kukufuatilia." },
      { objective: "O5", q: "Msaidizi wa AI anaweza kukusaidiaje kufanya mazoezi?", options: ["Kwa kwenda kwenye usaili kwa niaba yako", "Kwa kucheza kama msaili na kuuliza swali moja baada ya jingine", "Kwa kubuni historia yako ya kazi", "Kwa kuhifadhi namba yako ya kitambulisho"], answer: 1, why: "AI inaweza kuendesha maswali ya mazoezi; majibu bado lazima yawe yako." },
      { objective: "O5", q: "Lipi ni jibu imara na la kweli kuhusu rekodi?", options: ["\"Sina\" wakati unayo", "\"Hilo halikuhusu\"", "\"Nilifanya kosa mwaka 2019 na nikatumikia kifungo changu. Tangu hapo nimepata cheti na sijawahi kukosa kazini hata siku moja.\"", "Hadithi ndefu ya kuwalaumu wengine"], answer: 2, why: "Likubali, onyesha umefanya nini tangu hapo, na rudi kwenye kazi." },
      { objective: "O5", q: "Kwa mujibu wa mwongozo wa EEOC, kukamatwa peke yake:", options: ["Ni ushahidi wa uhalifu", "Si ushahidi wa uhalifu", "Lazima kuorodheshwe kwenye kila CV", "Hakuwezi kuulizwa kamwe"], answer: 1, why: "Kukamatwa peke yake hakuthibitishi kwamba mtu alifanya uhalifu." },
      { objective: "O5", q: "Sheria za \"ban the box\" au za nafasi ya haki (fair chance) ni zipi?", options: ["Kanuni kuhusu kusafirisha maboksi", "Sheria zinazozuia ukaguzi wote wa historia milele", "Sheria zinazopiga marufuku CV", "Sheria za mahali pengi zinazochelewesha maswali kuhusu rekodi katika fomu ya kwanza ya maombi"], answer: 3, why: "Zinawapa waombaji nafasi ya kupimwa kwa ujuzi kwanza; sheria zinatofautiana kwa kila mahali." },
      { objective: "O6", q: "Mwishoni mwa usaili wanauliza, \"Una maswali yoyote kwetu?\" Unasema:", options: ["\"Hatua zinazofuata ni zipi, na nitarajie kusikia kutoka kwenu lini?\"", "\"Hapana.\"", "\"Ninaweza kwenda likizo baada ya muda gani?\"", "\"Kampuni hii inafanya nini?\""], answer: 0, why: "Swali lililoandaliwa na lenye manufaa linaonyesha unajali." },
      { objective: "O6", q: "Ujumbe mzuri wa shukrani:", options: ["Una kurasa tatu", "Unaomba tena mshahara mkubwa zaidi", "Unawashukuru, unataja jambo moja mlilozungumza, na unasema kwa nini unataka kazi", "Unatumwa mwezi mmoja baadaye"], answer: 2, why: "Fupi, mahususi na wa haraka ndio unaofanya kazi vizuri zaidi." },
      { objective: "O6", q: "Mwajiri alisema atapiga simu kufikia Ijumaa. Sasa ni Jumatano ya wiki inayofuata. Wewe:", options: ["Unapiga simu mara kumi kwa siku", "Unatuma ujumbe mmoja wa adabu wa kufuatilia na unaendelea kuomba kazi kwingine", "Unaacha kabisa kutafuta kazi", "Unaenda ofisini kwao bila kualikwa kila siku"], answer: 1, why: "Ujumbe mmoja wa adabu wa kufuatilia ni wa kitaaluma; endelea kutafuta kazi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [1, 4, 6, 8, 11, 14, 16, 18]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "CV ya ukurasa mmoja", objective: "O1", notYet: "Zaidi ya ukurasa mmoja, sehemu zinakosekana, au hailingani na tangazo.", meets: "Ukurasa mmoja wenye mawasiliano, muhtasari, ujuzi unaolingana na uzoefu wenye tarehe.", exceeds: "Ujuzi na muhtasari vinatumia maneno kutoka tangazo la kazi." },
      { name: "Mistari ya mafanikio", objective: "O2", notYet: "Mistari inaorodhesha majukumu tu, au kuna kitu kisicho kweli.", meets: "Angalau mistari minne ya kweli yenye kitenzi cha kitendo na matokeo au namba.", exceeds: "Kila mstari unaonyesha matokeo wazi." },
      { name: "Wasifu wa LinkedIn", objective: "O3", notYet: "Hakuna kichwa wala sehemu ya About, au taarifa binafsi zinaonekana.", meets: "Kichwa na sehemu ya About vinalingana na CV, bila taarifa binafsi.", exceeds: "Picha imewekwa na maombi matatu ya kuunganishwa yametumwa pamoja na ujumbe." },
      { name: "Majibu ya STAR", objective: "O4", notYet: "Majibu hayako wazi au yanakosa sehemu ya STAR.", meets: "Majibu matatu ya STAR yaliyorekodiwa yenye sehemu zote nne, kila moja dakika moja hadi mbili.", exceeds: "Majibu yanamalizika na matokeo wazi, na muda mwingi uko kwenye Kitendo." },
      { name: "Jibu gumu la kweli", objective: "O5", notYet: "Hakuna jibu lililoandaliwa, au ni refu, la kujitetea au si la kweli.", meets: "Jibu fupi la kweli kuhusu pengo au rekodi linalorudi kwenye kile alichofanya tangu hapo.", exceeds: "Limerekodiwa, limeboreshwa na limetolewa kwa utulivu." },
      { name: "Ujumbe wa shukrani", objective: "O6", notYet: "Hakuna ujumbe, au ni ujumbe wa jumla wa neno moja.", meets: "Ujumbe mfupi wenye shukrani, jambo moja lililozungumzwa na kwa nini anataka kazi.", exceeds: "Uko tayari kutumwa ndani ya saa 24 na kuna mpango wa adabu wa kufuatilia." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaoomba angalau kazi moja kwa CV mpya ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaopata usaili ndani ya siku 60",
      "Wanafunzi wanaopata nafasi ya kazi ndani ya siku 90",
      "Wanafunzi wanaoanza kozi nyingine ya kazi ya Koach Learn ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye zana ya bure ya kuandika nyaraka kama Google Docs au Microsoft Word",
      "Akaunti ya bure ya LinkedIn",
      "Kinasa sauti au video kwenye simu",
      "Tangazo moja halisi la kazi",
      "Kama dakika 60 kwa masomo na majaribio, pamoja na muda wa kumaliza CV na rekodi"
    ],
    facilitatorNotes: [
      "Endesheni usaili wa mazoezi kwa jozi ili kila mwanafunzi ajibu kwa sauti angalau mara tatu.",
      "Wasaidie wanafunzi kugeuza michezo, jeshi, kutunza wagonjwa au familia, na kazi waliyofanya wakiwa gerezani kuwa uzoefu wa kweli wa CV.",
      "Hakikisha maandishi yoyote yaliyoboreshwa na AI yanabaki ya kweli; ondoa chochote ambacho mwanafunzi hakufanya.",
      "Wakumbushe wanafunzi wasiweke anwani za nyumbani wala namba za vitambulisho kwenye LinkedIn au katika zana za AI.",
      "Pima kifurushi cha mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};

"use strict";

// Koach Learn course (Swahili translation of shared/ai-job-readiness.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-job-readiness-sw",
  lang: "sw",
  translationOf: "ai-job-readiness",
  category: "Re-Entry",
  name: "AI kwa Maandalizi ya Kazi na Kukuza Taaluma",
  skills: "Kutambua ujuzi wako, Kuandika CV kwa AI, Kulinganisha CV na tangazo la kazi, Kuandika barua ya maombi, Kufanya mazoezi ya usaili kwa AI, Kutafuta kazi kwa usalama",
  outcome: "kutumia msaidizi wa AI wa bure kugeuza uzoefu wako kuwa CV ya ukurasa mmoja inayolingana na tangazo halisi la kazi, kuandika barua fupi ya maombi, kufanya mazoezi ya kujibu maswali ya usaili kwa sauti, na kuomba kazi kwa usalama huku ukiepuka ulaghai wa kazi.",
  about: [
    "Kupata kazi kunahitaji CV (wasifu wa kazi), maombi, usaili na kujiamini sana. Wasaidizi wa AI kama ChatGPT, Microsoft Copilot na Google Gemini wanaweza kusaidia katika kila hatua, hasa kama una mapengo, rekodi ya uhalifu, au uzoefu usiofanana na CV ya \"kawaida\".",
    "Kozi hii ni kwa watu wanaorudi nyumbani kutoka gerezani, watafuta kazi katika programu za nguvu kazi, watu wanaobadilisha kazi, na vijana wanaotafuta kazi yao ya kwanza. Uzoefu kutoka kazi ya gerezani, jeshi, kumtunza mtu, kujitolea au kazi za pembeni, yote yanahesabika.",
    "Utajenga kifurushi chako cha kazi hatua kwa hatua. Kila somo ni kama dakika tano na kazi ya \"Jaribu sasa\", jaribio la maarifa baada ya kila sura, na mtihani wa maswali 20 mwishoni. Usiweke taarifa za binafsi kwenye AI: hakuna namba ya Social Security, kitambulisho, kesi wala namba ya mfungwa."
  ],
  finalTask: "Tafuta tangazo moja halisi la kazi unayoweza kuomba. Ukitumia msaidizi wa AI, jenga CV ya ukurasa mmoja inayolingana nalo, barua ya maombi ya maneno chini ya 200, na majibu ya maswali matano ya usaili yanayowezekana, pamoja na moja kuhusu pengo au historia yako kama linakuhusu. Fanya mazoezi ya majibu kwa sauti, kagua tangazo dhidi ya dalili za ulaghai, na uombe au uihifadhi ikiwa tayari kutumwa.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaorudi nyumbani kutoka gerezani (kurudi katika jamii) wanaotafuta kazi, mara nyingi wakiwa na mapengo katika historia ya kazi na rekodi ya kueleza. Wengi wana uzoefu mzuri wa kazi kutoka kazi za gerezani, jeshi, kumtunza mtu au kazi zisizo rasmi.",
    startingPoint: "Wanaweza kupiga simu na kutuma ujumbe mfupi kwenye simu ya kawaida; baadhi wana akaunti ya barua pepe na wamewahi kujaribu msaidizi wa AI. Wengi hawana CV ya sasa, hawajafanya usaili hivi karibuni, na hawana uhakika jinsi ya kuzungumzia historia yao.",
    gap: "Kazi ya kudumu ni moja ya misaada yenye nguvu zaidi kwa kurudi nyumbani kwa mafanikio, lakini maombi sasa yanafanyika mtandaoni na waajiri wanatarajia CV inayolingana na kazi na majibu ya usaili yenye kujiamini. Wanafunzi wanahitaji kugeuza uzoefu wao halisi kuwa nyaraka za kazi kwa msaada wa AI, kujibu maswali kuhusu mapengo kwa uaminifu, na kuepuka ulaghai wa kazi unaowalenga watu wanaohitaji kazi haraka.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 5 hadi 6)",
      "Vifaa: huenda wana simu ya kawaida tu au kompyuta ya maktaba au kituo cha ajira yenye muda mfupi",
      "Muda: masomo ya dakika 5 yanayoingia kati ya miadi na kazi",
      "Faragha: hakuna namba za Social Security, kesi au mfungwa, wala taarifa za benki kwenye zana za AI au kwenye CV",
      "Sheria kuhusu rekodi zinatofautiana kwa jimbo na mji; wanafunzi wanakagua idara ya kazi ya jimbo lao au shirika la msaada wa kisheria kwa wanaorudi katika jamii, na wanafuata masharti yao ya parole au probation"
    ],
    prerequisites: "Hakuna. Kozi \"Utangulizi wa AI na Kujiamini katika Teknolojia\" ni mwanzo mzuri kwa wanafunzi wapya kwa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa uzoefu wako wa kazi, mafunzo, kujitolea na maisha, ndani au nje ya gereza", action: "kuorodhesha ujuzi wako wa kazi kwa maneno ya waajiri, na mfano mmoja wa kweli kwa kila mmoja", standard: "ukibakiza tu ujuzi ambao ni kweli kwako" },
    { id: "O2", condition: "Ukipewa tangazo halisi la kazi na kiolezo cha bure", action: "kutengeneza CV ya ukurasa mmoja inayolingana na kazi, yenye vipengele vinavyoanza na vitenzi vya kitendo na vyenye namba", standard: "kila neno likiwa kweli na bila namba ya Social Security, tarehe ya kuzaliwa wala picha" },
    { id: "O3", condition: "Kwa tangazo hilo hilo la kazi", action: "kuandika barua ya maombi ya aya tatu fupi", standard: "chini ya maneno 200 na ikisikika kama wewe inaposomwa kwa sauti" },
    { id: "O4", condition: "Ukitumia msaidizi wa AI kama msaili wa mazoezi", action: "kujibu kwa sauti maswali matano ya kawaida ya usaili, ukitumia STAR kwa maswali ya \"nieleze wakati ambapo\"", standard: "bila kusoma kutoka kwenye maandishi" },
    { id: "O5", condition: "Kama una pengo au rekodi", action: "kuandaa jibu fupi la kweli linalogeukia sababu za kuwa tayari sasa", standard: "ukitumia tu ukweli unaojisikia huru kuueleza, ukisemwa kwa utulivu kwa sauti" },
    { id: "O6", condition: "Unapotafuta na kuomba kazi", action: "kupata nafasi za kazi kwenye tovuti zinazoaminika, kufuatilia kila ombi na kukagua kila tangazo kwa dalili za ulaghai", standard: "bila kutoa namba ya benki wala ya Social Security kabla ya ofa halisi" }
  ],
  chapters: [
    {
      name: "Sura 1: Kujenga nyaraka zako za kazi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kutambua ujuzi ulio nao tayari",
          minutes: 5,
          goal: "Geuza uzoefu wako wa maisha na kazi kuwa orodha ya ujuzi wa kazi.",
          text: [
            "Watu wengi wana ujuzi zaidi kuliko wanavyofikiri. Kazi katika jiko, sehemu ya kufulia au karakana ya matengenezo ya gereza, huduma ya jeshi, kumtunza mwanafamilia, kujitolea kanisani, kunyoa nywele au kutengeneza magari ya majirani: yote haya yanajenga ujuzi ambao waajiri wanautaka.",
            "Mwombe msaidizi wa AI akusaidie kuutaja: \"Nilifanya kazi miaka 3 katika jiko kubwa nikiandaa chakula kwa watu 500 kwa siku na niliwafundisha wafanyakazi wapya. Hiyo inaonyesha ujuzi gani wa kazi? Tumia maneno wanayotumia waajiri.\" Unaweza kupata: usalama wa chakula, kufanya kazi chini ya shinikizo la muda, kuwafundisha wengine, kusimamia bidhaa, kufanya kazi kwa timu.",
            "Tengeneza orodha kuu ya ujuzi na mfano mmoja kwa kila mmoja. Usiruhusu AI iongeze ujuzi ambao huna kweli. Kila kitu kwenye CV yako lazima kiwe kweli, kwa sababu unaweza kuulizwa kuhusu hicho kwenye usaili."
          ],
          steps: ["Orodhesha kila kazi, mafunzo, nafasi ya kujitolea na jukumu ulilowahi kuwa nalo, ndani au nje ya gereza.", "Kwa kila moja, uliza AI inaonyesha ujuzi gani, kwa maneno ya waajiri.", "Baki na ujuzi ambao ni kweli kwako tu.", "Andika mfano mmoja halisi kwa kila ujuzi."],
          words: [["Ujuzi unaohamishika", "ujuzi kutoka mazingira moja unaofaa katika mazingira mengine."], ["Ujuzi laini (soft skill)", "ujuzi wa kushirikiana na watu kama kazi ya timu, kuaminika au mawasiliano."], ["Ujuzi mgumu (hard skill)", "uwezo maalum kama kuendesha forklift, kupika au kutumia Excel."]],
          slides: [
            { title: "Uzoefu wote unahesabika", bullets: ["Kazi ndani au nje ya gereza", "Jeshi, kumtunza mtu, kujitolea", "Kazi za pembeni kwa majirani"] },
            { title: "Mwombe AI ataje ujuzi", bullets: ["Eleza ulichofanya na kwa watu wangapi", "Omba maneno ya waajiri"] },
            { title: "Iwe kweli", bullets: ["Ondoa ujuzi ambao huna", "Mfano mmoja halisi kwa kila mmoja", "Unaweza kuulizwa kuhusu chochote kati ya hivyo"] }
          ],
          tryIt: "Mweleze msaidizi wa AI mambo matatu uliyowahi kufanya na uulize yanaonyesha ujuzi gani wa kazi. Andika orodha kuu ya angalau ujuzi nane wa kweli, kila mmoja na mfano mmoja.",
          youCanNow: "kugeuza uzoefu wako kuwa orodha ya kweli ya ujuzi wa kazi kwa lugha ya waajiri.",
          quickCheck: [
            { objective: "O1", q: "Ujuzi unaohamishika ni nini?", options: ["Ujuzi unaoweza kuutumia katika kazi moja tu", "Ujuzi kutoka mazingira moja unaofaa katika mazingira mengine", "Ujuzi unaolipia kujifunza", "Ujuzi walio nao mameneja tu"], answer: 1, why: "Ujuzi unaohamishika, kama kuwafundisha wengine, unahama kutoka mazingira moja hadi mengine." },
            { objective: "O1", q: "Ulitengeneza magari ya majirani kwa miaka bila mshahara. Unafanya nini na uzoefu huo?", options: ["Uache; haikuwa kazi halisi", "Sema ulikuwa fundi magari mwenye leseni", "Subiri msaili akuulize kuhusu hilo", "Uliza AI unaonyesha ujuzi gani na uorodheshe ule wa kweli pamoja na mfano"], answer: 3, why: "Kazi isiyo rasmi inajenga ujuzi halisi; orodhesha ule tu ulio kweli, pamoja na mfano." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuandika CV ya ukurasa mmoja kwa AI",
          minutes: 6,
          goal: "Jenga CV safi ya ukurasa mmoja inayolingana na tangazo halisi la kazi.",
          text: [
            "CV (résumé) ni muhtasari wa ukurasa mmoja wa ujuzi, uzoefu na mafunzo yako. Mpangilio rahisi unafaa zaidi: jina na mawasiliano, muhtasari wa mistari miwili, ujuzi, uzoefu, na elimu au mafunzo. Tumia kiolezo cha bure katika Google Docs au Microsoft Word.",
            "Ilinganishe na kila kazi. Bandika tangazo la kazi (si taarifa zako binafsi) kwenye AI na uulize: \"Kazi hii inataka ujuzi na maneno muhimu gani? Ujuzi wangu upi unalingana?\" Kisha iombe iandike vipengele kutoka mifano yako vinavyoanza na vitenzi vya kitendo na vyenye namba: \"Niliandaa chakula kwa watu 500 kila siku huku nikifuata viwango vya usalama wa chakula.\"",
            "Kwa kazi uliyofanya ukiwa gerezani, unaweza kuandika aina ya kituo au mwajiri jinsi mshauri wako wa kurudi katika jamii anavyopendekeza, kama idara ya magereza ya jimbo, na uzingatie ujuzi. Usiweke kamwe namba yako ya Social Security, tarehe ya kuzaliwa au picha kwenye CV ya Marekani."
          ],
          steps: ["Fungua kiolezo cha bure cha CV katika Google Docs au Word.", "Bandika tangazo la kazi kwenye AI na uulize linataka maneno muhimu gani.", "Iombe AI iandike vipengele vyenye vitenzi vya kitendo kutoka mifano yako ya kweli, pamoja na namba.", "Jaza kiolezo na ubakize ukurasa mmoja.", "Kagua kila neno kama ni kweli na tahajia yake."],
          words: [["CV (résumé)", "muhtasari wa ukurasa mmoja wa ujuzi, uzoefu na mafunzo yako."], ["Neno muhimu (keyword)", "neno muhimu kutoka tangazo la kazi ambalo waajiri na programu za kompyuta wanalitafuta."], ["Kulinganisha (tailor)", "kubadilisha CV yako ili ifae kazi fulani."]],
          slides: [
            { title: "Mpangilio rahisi wa ukurasa mmoja", bullets: ["Jina, mawasiliano, muhtasari wa mistari miwili", "Ujuzi na uzoefu", "Elimu au mafunzo"] },
            { title: "Ilinganishe na kazi", bullets: ["Bandika tangazo la kazi kwenye AI", "Tafuta maneno muhimu yanayolingana", "Vitenzi vya kitendo na namba"] },
            { title: "Iwe salama na ya kweli", bullets: ["Hakuna SSN, tarehe ya kuzaliwa wala picha", "Muulize mshauri wako jinsi ya kuandika kazi ya gerezani", "Kagua kila neno"] }
          ],
          tryIt: "Tafuta tangazo moja halisi la kazi. Tumia AI kupata maneno yake muhimu na kuandika vipengele vitano kutoka mifano yako ya kweli. Viweke kwenye kiolezo cha CV cha ukurasa mmoja.",
          youCanNow: "kujenga CV ya ukurasa mmoja inayolingana na tangazo halisi la kazi kwa msaada wa AI.",
          quickCheck: [
            { objective: "O2", q: "Unapaswa kubandika nini kwenye AI ili kulinganisha CV yako na kazi?", options: ["Tangazo la kazi", "Namba yako ya Social Security", "Namba ya kesi yako", "Taarifa zako za benki"], answer: 0, why: "Bandika tangazo la kazi, si taarifa zako binafsi, ili AI ipate maneno muhimu." },
            { objective: "O2", q: "CV yako ni ukurasa mmoja na nusu kwa kazi ya ngazi ya kuanzia. Unafanya nini?", options: ["Fanya herufi ziwe ndogo sana", "Ongeza kurasa zaidi", "Ipunguze hadi vipengele vyenye nguvu zaidi vinavyolingana na kazi, kwenye ukurasa mmoja", "Ongeza picha"], answer: 2, why: "CV nyingi za ngazi ya kuanzia zinapaswa kutosha ukurasa mmoja, zikizingatia kile kazi inachotaka." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuandika barua fupi ya maombi",
          minutes: 5,
          goal: "Andika barua ya maombi ya maneno chini ya 200 inayosikika kama wewe.",
          text: [
            "Barua ya maombi (cover letter) ni barua fupi inayosema kwa nini unataka kazi hii na kwa nini unafaa. Kazi nyingi hazihitaji barua hii, lakini barua nzuri inaweza kukutofautisha na wengine.",
            "Tumia aya tatu fupi: kwa nini kazi hii na kampuni hii, ujuzi miwili unaolingana na wanachohitaji pamoja na mfano mfupi, na shukrani pamoja na jinsi ya kukufikia. Uliza AI: \"Niandikie barua ya maombi ya maneno chini ya 200 kwa tangazo hili la kazi ukitumia ujuzi huu miwili na mifano hii. Ya kirafiki, yenye kujiamini, maneno rahisi.\"",
            "Kisha ifanye iwe yako. Badilisha msemo wowote ambao wewe usingeusema kamwe. Ongeza jambo moja la kweli kuhusu kwa nini unataka kufanya kazi pale. Isome kwa sauti: kama haisikiki kama wewe, ibadilishe tena."
          ],
          steps: ["Aya ya 1: kwa nini kazi hii na kampuni hii.", "Aya ya 2: ujuzi miwili unaolingana pamoja na mifano.", "Aya ya 3: shukrani na jinsi ya kukufikia.", "Iombe AI iandike rasimu ya maneno chini ya 200.", "Ihariri isikike kama wewe, na uisome kwa sauti."],
          words: [["Barua ya maombi (cover letter)", "barua fupi inayotumwa pamoja na CV ikieleza kwa nini unafaa kazi."]],
          slides: [
            { title: "Aya tatu fupi", bullets: ["Kwa nini kazi hii", "Ujuzi miwili unaolingana pamoja na mifano", "Shukrani na mawasiliano"] },
            { title: "Acha AI iandike rasimu", bullets: ["Chini ya maneno 200", "Ya kirafiki, yenye kujiamini, maneno rahisi"] },
            { title: "Ifanye iwe yako", bullets: ["Badilisha misemo ambayo usingeisema kamwe", "Ongeza jambo moja la kweli", "Isome kwa sauti"] }
          ],
          tryIt: "Andika barua ya maombi kwa tangazo lako la kazi ukitumia AI, ibakize chini ya maneno 200, na uihariri hadi isikike kama wewe unapoisoma kwa sauti.",
          youCanNow: "kuandika barua fupi ya maombi ya kibinafsi kwa msaada wa AI.",
          quickCheck: [
            { objective: "O3", q: "Nini kinaingia katika aya ya pili ya barua ya maombi?", options: ["Tarehe yako ya kuzaliwa", "Historia ya mishahara yako", "Shukrani tu", "Ujuzi miwili unaolingana na kazi, pamoja na mfano mfupi"], answer: 3, why: "Aya ya 2 inatoa ujuzi miwili unaolingana pamoja na mifano." },
            { objective: "O3", q: "Barua ya AI inasema \"I am exceedingly enthusiastic to leverage my synergies.\" (maneno magumu ya kujionyesha). Unafanya nini?", options: ["Iache; inasikika ya kisomi", "Ibadilishe kuwa maneno ambayo ungeyasema kweli", "Ifanye iwe ndefu zaidi", "Ituma bila kuisoma"], answer: 1, why: "Badilisha msemo wowote ambao usingeusema kamwe ili barua isikike kama wewe." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kujenga nyaraka zako za kazi",
        questions: [
          { objective: "O1", q: "Uliwafundisha wafanyakazi wapya katika jiko la gereza. Hilo linaonyesha ujuzi gani?", options: ["Kuendesha forklift", "Uhasibu", "Kuwafundisha wengine", "Hakuna"], answer: 2, why: "Kuwafundisha wafanyakazi wapya ni ujuzi unaohamishika." },
          { objective: "O1", q: "AI inaongeza \"anaongea Kihispania kwa ufasaha\" kwenye ujuzi wako, lakini huongei. Unafanya nini?", options: ["Ukiondoe", "Ukibakize", "Jifunze Kihispania kabla ya usaili", "Ongeza lugha zaidi"], answer: 0, why: "Kila kitu kwenye CV lazima kiwe kweli." },
          { objective: "O2", q: "Kipi HAKIPASWI kuwa kwenye CV ya Marekani?", options: ["Ujuzi wako", "Uzoefu wako wa kazi", "Namba yako ya simu", "Namba yako ya Social Security"], answer: 3, why: "Namba za binafsi hazikai kwenye CV." },
          { objective: "O2", q: "Kulinganisha CV na kazi kunamaanisha nini?", options: ["Kushona nguo", "Kuibadilisha ifae tangazo fulani la kazi", "Kuifanya iwe kurasa tatu", "Kutumia CV ile ile kwa kila kazi"], answer: 1, why: "CV inayolinganishwa inaendana na maneno muhimu ya kazi." },
          { objective: "O3", q: "Barua ya maombi katika kozi hii inapaswa kuwa ndefu kiasi gani?", options: ["Kurasa tano", "Chini ya maneno 200", "Neno moja", "Zaidi ya maneno 1,000"], answer: 1, why: "Barua fupi zinasomwa." }
        ]
      }
    },
    {
      name: "Sura 2: Usaili na kutafuta kazi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kufanya mazoezi ya usaili kwa AI",
          minutes: 6,
          goal: "Tumia AI kama msaili wa mazoezi na uboreshe majibu yako.",
          text: [
            "AI inaweza kuigiza kama msaili. Uliza: \"Unaajiri kwa kazi hii [bandika tangazo la kazi]. Niulize swali moja la usaili kwa wakati mmoja. Baada ya kujibu, niambie jambo moja nililofanya vizuri na jambo moja la kuboresha.\" Apps nyingi za AI zinakuruhusu kuongea kwa sauti, na hayo ni mazoezi mazuri sana.",
            "Tumia mbinu ya STAR kwa maswali ya \"nieleze wakati ambapo\": Situation (hali), Task (kazi), Action (kitendo), Result (matokeo). \"Jikoni (hali) tulipaswa kuandaa milo 500 kwa saa moja (kazi). Niliandaa mstari wa maandalizi na kuwafundisha wafanyakazi wapya wawili (kitendo). Tulimaliza kwa wakati kila siku mwezi huo (matokeo).\"",
            "Andaa maswali matano ya kawaida: nieleze kuhusu wewe, kwa nini unataka kazi hii, uwezo wako mmoja, wakati ulipotatua tatizo, na una maswali yoyote kwetu. Fanya mazoezi hadi uweze kujibu bila kusoma."
          ],
          steps: ["Bandika tangazo la kazi na uiombe AI ikusaili swali moja kwa wakati mmoja.", "Jibu kwa sauti au kwa kuandika.", "Tumia STAR kwa maswali ya \"nieleze wakati ambapo\".", "Baada ya kila jibu, omba jambo moja zuri na jambo moja la kuboresha.", "Fanya mazoezi ya maswali matano hadi usihitaji maandishi."],
          words: [["Mbinu ya STAR", "njia ya kujibu: Situation (hali), Task (kazi), Action (kitendo), Result (matokeo)."], ["Usaili wa mazoezi (mock interview)", "usaili wa kufanyia mazoezi."]],
          slides: [
            { title: "AI kama msaili wako wa mazoezi", bullets: ["Swali moja kwa wakati mmoja", "Maoni: jambo moja zuri, jambo moja la kuboresha", "Fanya mazoezi kwa sauti ukiweza"] },
            { title: "Majibu ya STAR", bullets: ["Situation (hali) na Task (kazi)", "Action (kitendo): ulichofanya", "Result (matokeo): kilichotokea"] },
            { title: "Maswali matano ya kuandaa", bullets: ["Nieleze kuhusu wewe; kwa nini kazi hii", "Uwezo wako; tatizo ulilotatua", "Maswali yako kwao"] }
          ],
          tryIt: "Fanya usaili wa mazoezi na AI kwa tangazo lako la kazi. Jibu maswali matano kwa sauti ukitumia STAR inapofaa, na uandike maoni uliyopewa.",
          youCanNow: "kufanya mazoezi ya usaili kwa AI na kujibu kwa mbinu ya STAR.",
          quickCheck: [
            { objective: "O4", q: "Katika mbinu ya STAR, \"Result\" inamaanisha nini?", options: ["Cheo chako cha kazi", "Tatizo ulilokabili", "Kilichotokea kwa sababu ya ulichofanya", "Swali uliloulizwa"], answer: 2, why: "Result ni matokeo ya kitendo chako, kama kumaliza kwa wakati kila siku." },
            { objective: "O4", q: "Unaweza kujibu \"Nieleze kuhusu wewe\" kwa kusoma maandishi yako tu. Unafanya nini?", options: ["Fanya mazoezi kwa sauti na AI hadi uweze kujibu bila maandishi", "Ruka swali hilo kwenye usaili", "Kariri hotuba ndefu iliyoandikwa na AI", "Leta maandishi na uyasome"], answer: 0, why: "Fanya mazoezi kwa sauti hadi uweze kujibu bila kusoma." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuzungumzia mapengo au rekodi kwa kujiamini",
          minutes: 5,
          goal: "Andaa jibu fupi, la kweli, linaloangalia mbele kuhusu pengo au historia yako.",
          text: [
            "Mapengo hutokea: gereza, ugonjwa, kumtunza mtu, kuhama kwa sababu ya jeshi, kupunguzwa kazi. Waajiri kwa kawaida wanataka kujua kwamba uko tayari sasa. Andaa jibu fupi: kuwa mkweli, lifanye fupi, onyesha ulichojifunza au ulichofanya, na ugeukie kwa nini uko tayari kwa kazi hii.",
            "Mfano: \"Nilifanya kosa na nikatumikia kifungo. Nikiwa huko nilipata cheti cha mshughulikiaji wa chakula na niliongoza mstari wa jikoni. Niko tayari kuleta bidii hiyo ya kazi hapa.\" Iombe AI ikusaidie kufupisha na kutuliza jibu lako, lakini tumia tu ukweli unaojisikia huru kuueleza, na uache nje namba za kesi na maelezo.",
            "Jua misaada yako. Majimbo na miji mingi ya Marekani ina sheria za fair chance au \"ban the box\" kuhusu lini waajiri wanaweza kuuliza kuhusu rekodi; kagua idara ya kazi ya jimbo lako au shirika la msaada wa kisheria kwa wanaorudi katika jamii. Federal Bonding Program inatoa dhamana za uaminifu (fidelity bonds) bure kwa waajiri wanaoajiri watafuta kazi walio katika hatari, zikifunika miezi sita ya kwanza. Baadhi ya waajiri wanaweza pia kustahili Work Opportunity Tax Credit; kagua ukurasa wa WOTC wa IRS kwa hali yake ya sasa na makundi yake."
          ],
          steps: ["Andika ukweli kwa sentensi moja.", "Ongeza ulichojifunza au ulichofanya tangu wakati huo.", "Ongeza kwa nini uko tayari kwa kazi hii.", "Iombe AI ilifanye fupi zaidi na tulivu zaidi.", "Lifanyie mazoezi kwa sauti hadi ujisikie mtulivu."],
          words: [["Ajira ya fair chance (nafasi ya haki)", "sheria au desturi zinazowapa watu wenye rekodi nafasi ya haki ya kuangaliwa kabla ya kuulizwa kuhusu maisha yao ya zamani."], ["Dhamana ya uaminifu (fidelity bond)", "bima inayomlinda mwajiri dhidi ya hasara inayosababishwa na udanganyifu wa mfanyakazi."]],
          slides: [
            { title: "Jibu fupi lenye nguvu", bullets: ["La kweli na fupi", "Ulichojifunza au ulichofanya", "Kwa nini uko tayari sasa"] },
            { title: "Tumia AI kwa uangalifu", bullets: ["Fupisha na tuliza maneno yako", "Ukweli unaochagua kuueleza tu", "Hakuna namba za kesi"] },
            { title: "Jua misaada yako", bullets: ["Sheria za fair chance: kagua jimbo lako", "Federal Bonding Program: dhamana bure, miezi 6 ya kwanza", "WOTC: kagua ukurasa wa IRS kwa hali ya sasa"] }
          ],
          sources: [{ name: "The Federal Bonding Program", url: "https://bonds4jobs.com/" }, { name: "Idara ya Kazi ya Marekani: Work Opportunity Tax Credit", url: "https://www.dol.gov/agencies/eta/wotc" }, { name: "IRS: Work Opportunity Tax Credit", url: "https://www.irs.gov/businesses/small-businesses-self-employed/work-opportunity-tax-credit" }],
          tryIt: "Andika jibu la sentensi tatu kuhusu pengo au historia (yako, au la mazoezi). Tumia AI kulibana, kisha lisema kwa sauti mara tatu.",
          youCanNow: "kujibu maswali kuhusu pengo au rekodi kwa uaminifu na kujiamini, na kutaja misaada inayoweza kukusaidia.",
          quickCheck: [
            { objective: "O5", q: "Waajiri kwa kawaida wanataka kujua nini wanapouliza kuhusu pengo?", options: ["Kila jambo kuhusu kesi yako", "Namba ya kesi yako", "Kwamba uko tayari kufanya kazi sasa", "Wakili wako alikuwa nani"], answer: 2, why: "Waajiri kwa kawaida wanataka kujua uko tayari sasa, kwa hiyo jibu kwa ufupi na ukiangalia mbele." },
            { objective: "O5", q: "Msaili anauliza kuhusu rekodi yako. Jibu lipi ni bora?", options: ["\"Hilo halikuhusu.\"", "Hadithi ndefu yenye kila jambo", "\"Sijawahi kupata matatizo.\"", "\"Nilifanya kosa na nikatumikia kifungo. Nilipata cheti cha mshughulikiaji wa chakula huko, na niko tayari kufanya kazi.\""], answer: 3, why: "La kweli, fupi na linalozingatia ulichojifunza na kwa nini uko tayari." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kutafuta na kuomba kazi kwa usalama",
          minutes: 5,
          goal: "Pata nafasi halisi za kazi, fuatilia maombi na epuka ulaghai wa kazi.",
          text: [
            "Tafuta kazi kwenye tovuti zinazoaminika, tovuti za kampuni na katika American Job Center iliyo karibu nawe, inayotoa msaada wa bure wa kutafuta kazi na mafunzo. Programu yako ya kurudi katika jamii, ofisi ya maveterani au programu ya nguvu kazi inaweza kuwa na taarifa za kazi na waajiri wanaoajiri watu wenye rekodi.",
            "Fuatilia kila ombi katika jedwali rahisi: kampuni, kazi, tarehe ya kuomba, mtu wa kuwasiliana, tarehe ya kufuatilia. Fuatilia baada ya wiki moja hivi kwa barua pepe fupi ya adabu. AI inaweza kuiandika.",
            "Jihadhari na ulaghai wa kazi. FTC inaonya: waajiri waaminifu hawakutozi pesa ili upate kazi; kuwa makini na malipo makubwa kwa kazi ndogo, kuombwa uweke hundi benki kisha urudishe pesa, kutuma tena vifurushi, au kulipia mafunzo au vyeti mapema. Usitoe kamwe akaunti ya benki wala namba ya Social Security kabla ya kuwa na ofa halisi kutoka kampuni halisi. Ripoti ulaghai kwenye ReportFraud.ftc.gov."
          ],
          steps: ["Tafuta kwenye tovuti zinazoaminika, kurasa za kampuni na American Job Center yako.", "Fuatilia kila ombi katika jedwali.", "Fuatilia baada ya wiki moja hivi.", "Kagua kila tangazo kwa dalili za ulaghai.", "Ripoti ulaghai kwenye ReportFraud.ftc.gov."],
          words: [["American Job Center", "ofisi ya bure inayofadhiliwa na serikali ya Marekani inayosaidia kutafuta kazi na mafunzo."], ["Ulaghai wa kazi", "ofa ya kazi ya uongo inayolenga kuiba pesa au taarifa."]],
          slides: [
            { title: "Wapi pa kutafuta", bullets: ["Tovuti za kazi zinazoaminika na kurasa za kampuni", "American Job Centers", "Programu za kurudi katika jamii, maveterani na nguvu kazi"] },
            { title: "Fuatilia na ufuatilie tena", bullets: ["Kampuni, kazi, tarehe, mtu wa kuwasiliana", "Fuatilia baada ya wiki moja hivi"] },
            { title: "Dalili za ulaghai wa kazi (FTC)", bullets: ["Wanakutoza pesa ili upate kazi", "Weka hundi benki kisha urudishe pesa", "Kutuma tena vifurushi; malipo makubwa kwa kazi ndogo"] }
          ],
          sources: [{ name: "FTC: Ulaghai wa kazi (Job scams)", url: "https://consumer.ftc.gov/articles/job-scams" }, { name: "CareerOneStop (Idara ya Kazi ya Marekani): tafuta American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }],
          tryIt: "Kazi ya mwisho: kamilisha CV yako inayolingana na kazi, barua ya maombi na majibu matano ya usaili uliyoyafanyia mazoezi kwa tangazo lako halisi la kazi. Kagua tangazo dhidi ya dalili za ulaghai, liongeze kwenye jedwali la kufuatilia, na uombe au uwe tayari kulituma.",
          youCanNow: "kujenga kifurushi cha kazi kwa AI, kufanya usaili kwa kujiamini na kuomba kazi kwa usalama.",
          quickCheck: [
            { objective: "O6", q: "Unaweza kupata wapi msaada wa bure wa kutafuta kazi na mafunzo?", options: ["American Job Center", "Tovuti inayotoza ada ili uombe kazi", "Ujumbe kutoka namba usiyoijua", "Kazi inayokuomba utume tena vifurushi"], answer: 0, why: "American Job Centers zinatoa msaada wa bure wa kutafuta kazi na mafunzo." },
            { objective: "O6", q: "\"Kazi\" inatoa malipo makubwa kwa kazi ndogo na inaomba akaunti yako ya benki kabla ya usaili wowote. Unafanya nini?", options: ["Itume ili uanze haraka", "Tuma nusu tu ya namba ya akaunti", "Usiitoe; kagua dalili za ulaghai na uripoti", "Lipa ada ndogo kwanza"], answer: 2, why: "Usitoe kamwe akaunti ya benki kabla ya ofa halisi; hii ina dalili za ulaghai." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Usaili na kutafuta kazi",
        questions: [
          { objective: "O4", q: "STAR inasimama kwa nini?", options: ["Start, Talk, Ask, Rest", "Skills, Training, Awards, References", "Smile, Thank, Answer, Return", "Situation, Task, Action, Result"], answer: 3, why: "STAR inapanga majibu ya maswali ya \"nieleze wakati ambapo\"." },
          { objective: "O5", q: "Jibu zuri kuhusu pengo au rekodi ni:", options: ["La kweli, fupi na linalozingatia kwa nini uko tayari sasa", "Hadithi ndefu yenye kila jambo", "Uongo", "Kukataa kujibu kwa ukali"], answer: 0, why: "Majibu mafupi, ya kweli na yanayoangalia mbele yanafaa zaidi." },
          { objective: "O5", q: "Federal Bonding Program inatoa nini?", options: ["Magari ya bure", "Pesa taslimu kwa watafuta kazi", "Dhamana za uaminifu za bure kwa waajiri wanaoajiri watafuta kazi walio katika hatari", "Kuachiliwa kutoka gerezani"], answer: 2, why: "Inawapa waajiri dhamana za bure zinazofunika miezi sita ya kwanza." },
          { objective: "O6", q: "Ofa ya kazi inakuomba ulipe $150 kwa mafunzo kabla ya kuanza. Kwa mujibu wa FTC, hii ni:", options: ["Kawaida kwa kila kazi", "Kodi", "Bonasi", "Dalili ya hatari ya ulaghai"], answer: 3, why: "Waajiri waaminifu hawakutozi pesa ili upate kazi." },
          { objective: "O6", q: "Unapaswa kufuatilia lini baada ya kuomba kazi?", options: ["Kila saa", "Kamwe", "Baada ya wiki moja hivi kwa barua pepe fupi ya adabu", "Baada ya mwaka mmoja"], answer: 2, why: "Ufuatiliaji wa adabu unaonyesha nia." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Maandalizi ya Kazi na Kukuza Taaluma",
    questions: [
      { objective: "O1", q: "Ujuzi unaohamishika ni:", options: ["Ujuzi unaoweza kuuza", "Ujuzi kutoka mazingira moja unaofaa katika mengine", "Ujuzi wa kompyuta tu", "Ujuzi wa uongo"], answer: 1, why: "Ujuzi unahamia kati ya mazingira tofauti." },
      { objective: "O1", q: "Upi ni ujuzi laini (soft skill)?", options: ["Kuaminika", "Kuendesha forklift", "Kuchomelea vyuma", "Kasi ya kuandika kwa kibodi"], answer: 0, why: "Ujuzi laini ni ujuzi wa kushirikiana na watu." },
      { objective: "O1", q: "Uzoefu upi unahesabika kama ujuzi wa kazi?", options: ["Kazi za ofisini zenye mshahara tu", "Chuo tu", "Kumtunza mwanafamilia", "Hakuna kitu nje ya kazi"], answer: 2, why: "Uzoefu wote halisi unajenga ujuzi." },
      { objective: "O1", q: "Kwa nini kila kitu kwenye CV yako lazima kiwe kweli?", options: ["Unaweza kuulizwa kuhusu hicho kwenye usaili", "AI inakikagua", "Hakihitaji kuwa kweli", "Ili iwe ndefu"], answer: 0, why: "Wasaili wanauliza kuhusu unachoorodhesha." },
      { objective: "O2", q: "Neno muhimu (keyword) ni:", options: ["Nywila", "Ufunguo wa ofisi", "Jina lako", "Neno muhimu kutoka tangazo la kazi"], answer: 3, why: "Kulinganisha maneno muhimu kunasaidia CV yako ionekane." },
      { objective: "O2", q: "Kipengele kipi ni chenye nguvu zaidi?", options: ["\"Nilifanya mambo ya jikoni\"", "\"Niliandaa chakula kwa watu 500 kila siku huku nikifuata viwango vya usalama wa chakula\"", "\"Nilifanya kazi\"", "\"Chakula\""], answer: 1, why: "Kitenzi cha kitendo, namba na matokeo." },
      { objective: "O2", q: "Unapoiomba AI ilinganishe CV yako na kazi, bandika:", options: ["Namba yako ya Social Security", "Tangazo la kazi, si taarifa zako binafsi", "Namba ya kesi yako", "Taarifa zako za benki"], answer: 1, why: "Tangazo la kazi ndilo AI inalohitaji." },
      { objective: "O2", q: "CV kwa kawaida inapaswa kuwa ndefu kiasi gani kwa kazi nyingi za ngazi ya kuanzia?", options: ["Kurasa kumi", "Nusu mstari", "Ndefu kadiri iwezekanavyo", "Ukurasa mmoja"], answer: 3, why: "Ukurasa mmoja ni rahisi kusoma." },
      { objective: "O3", q: "Barua ya maombi inaeleza:", options: ["Kwa nini unataka kazi na kwa nini unafaa", "Hadithi nzima ya maisha yako", "Historia ya mishahara yako tu", "Nywila zako"], answer: 0, why: "Inakuunganisha na kazi." },
      { objective: "O3", q: "Baada ya AI kuandika rasimu ya barua yako ya maombi, unapaswa:", options: ["Kuituma bila kuisoma", "Kuongeza ujuzi ambao huna", "Kuihariri na kuisoma kwa sauti hadi isikike kama wewe", "Kuifanya iwe maneno 1,000"], answer: 2, why: "Barua yako inapaswa kusikika kama wewe." },
      { objective: "O4", q: "Usaili wa mazoezi (mock interview) ni:", options: ["Kazi ya uongo", "Usaili wa ukali", "Usaili unaouruka", "Usaili wa kufanyia mazoezi"], answer: 3, why: "Mazoezi yanajenga kujiamini." },
      { objective: "O4", q: "Katika STAR, \"Action\" inamaanisha:", options: ["Hali ya hewa", "Jina la kampuni", "Ulichofanya", "Mshahara wako"], answer: 2, why: "Action ni sehemu yako katika hadithi." },
      { objective: "O4", q: "\"Una maswali yoyote kwetu?\" Jibu bora ni:", options: ["\"Hapana.\"", "Uliza swali la busara kuhusu kazi au timu", "\"Nitaweza kwenda likizo lini?\" peke yake", "Ondoka"], answer: 1, why: "Maswali mazuri yanaonyesha nia." },
      { objective: "O5", q: "Unapozungumzia rekodi, unapaswa:", options: ["Kueleza kwa ufupi ukweli unaojisikia huru kuueleza tu", "Kutoa namba ya kesi yako", "Kudanganya kuhusu hilo", "Kulizungumzia kwa dakika 20"], answer: 0, why: "Fupi, la kweli na linaloangalia mbele ni bora zaidi." },
      { objective: "O5", q: "Sheria za fair chance au \"ban the box\":", options: ["Ni sawa kila mahali", "Hazipo", "Zinatofautiana kwa jimbo na mji; kagua idara ya kazi ya jimbo lako", "Zinapiga marufuku ukaguzi wote wa historia"], answer: 2, why: "Sheria hizi zinatofautiana kwa mahali." },
      { objective: "O5", q: "Unaweza kukagua wapi hali ya sasa ya Work Opportunity Tax Credit?", options: ["Ukurasa wa WOTC wa IRS", "Chapisho la mitandao ya kijamii", "Kubahatisha kwa AI", "Tangazo la kazi"], answer: 0, why: "Sheria na tarehe za punguzo la kodi zinabadilika; IRS ndiyo chanzo." },
      { objective: "O6", q: "American Job Centers zinatoa:", options: ["Uandishi wa CV wa kulipia tu", "Mikopo", "Makazi", "Msaada wa bure wa kutafuta kazi na mafunzo"], answer: 3, why: "Ni vituo vya bure vya msaada wa nguvu kazi." },
      { objective: "O6", q: "Jedwali la kufuatilia kazi linajumuisha:", options: ["Nywila zako", "Kampuni, kazi, tarehe ya kuomba, mtu wa kuwasiliana na tarehe ya kufuatilia", "Akaunti yako ya benki", "Hakuna kitu"], answer: 1, why: "Kufuatilia kunakuweka katika mpangilio." },
      { objective: "O6", q: "\"Kazi\" inakuomba uweke hundi benki kisha urudishe sehemu ya pesa. Hii ni:", options: ["Malipo ya kawaida ya mshahara", "Ulaghai wa hundi bandia", "Bonasi", "Marejesho ya kodi"], answer: 1, why: "FTC inautaja huu kama ulaghai wa kawaida." },
      { objective: "O6", q: "Ni lini ni sawa kutoa namba ya akaunti yako ya benki kwa ajili ya mshahara?", options: ["Katika ujumbe wako wa kwanza kwa mwajiri yeyote", "Kwenye maoni ya tovuti ya kazi", "Kwa yeyote anayeuliza", "Baada ya ofa halisi kutoka kwa mwajiri halisi aliyethibitishwa"], answer: 3, why: "Itoe kwa ajili ya mshahara tu baada ya ofa halisi iliyothibitishwa." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      3,
      5,
      7,
      8,
      11,
      13,
      16,
      18,
      19
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "CV inayolingana na kazi",
        objective: "O2",
        notYet: "Ni ndefu kuliko ukurasa mmoja, hailingani na kazi, au ina namba za binafsi.",
        meets: "Ukurasa mmoja wenye maneno muhimu ya kazi, vipengele vyenye vitenzi vya kitendo na namba, na bila namba za binafsi.",
        exceeds: "Kila kipengele kinaunganishwa na ujuzi ambao tangazo la kazi linauomba."
      },
      {
        name: "Ujuzi wa kweli",
        objective: "O1",
        notYet: "Ujuzi au dai moja kwenye CV si la kweli.",
        meets: "Kila ujuzi ni wa kweli na unaungwa mkono na mfano halisi.",
        exceeds: "Ujuzi kutoka kazi za gerezani, kumtunza mtu au kazi zisizo rasmi umeelezwa kwa maneno ya waajiri."
      },
      {
        name: "Barua ya maombi",
        objective: "O3",
        notYet: "Zaidi ya maneno 200, au inasomeka kama barua ya jumla ya AI.",
        meets: "Aya tatu fupi chini ya maneno 200 zinazosikika kama mwanafunzi.",
        exceeds: "Ina jambo moja la kweli kuhusu kwa nini anataka kufanya kazi pale."
      },
      {
        name: "Majibu ya usaili",
        objective: "O4",
        notYet: "Majibu chini ya matano, au majibu yanasomwa kutoka kwenye maandishi.",
        meets: "Majibu matano yaliyofanyiwa mazoezi kwa sauti, na STAR kwa maswali ya \"nieleze wakati ambapo\".",
        exceeds: "Anatumia maoni ya AI kuboresha angalau majibu mawili."
      },
      {
        name: "Jibu kuhusu pengo au historia",
        objective: "O5",
        notYet: "Jibu ni refu, la kujitetea au si la kweli (kama linamhusu).",
        meets: "Fupi, la kweli na linaishia na kwa nini mwanafunzi yuko tayari sasa.",
        exceeds: "Linasemwa kwa utulivu kwa sauti bila maandishi."
      },
      {
        name: "Ombi salama",
        objective: "O6",
        notYet: "Tangazo la kazi halikukaguliwa kwa dalili za ulaghai.",
        meets: "Tangazo lilikaguliwa dhidi ya dalili za ulaghai na ombi linafuatiliwa.",
        exceeds: "Tarehe ya kufuatilia imewekwa baada ya wiki moja hivi."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (rubric)",
      "Wanafunzi wanaoomba angalau kazi tatu ndani ya siku 30 (utafiti wa ufuatiliaji)",
      "Wanafunzi wanaopata usaili au ofa ya kazi ndani ya siku 90",
      "Wanafunzi wanaoripoti kutambua na kuepuka ulaghai wa kazi"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja yenye intaneti, au kompyuta ya maktaba, kituo cha ajira au programu",
      "Msaidizi wa AI wa bure (ChatGPT, Microsoft Copilot au Google Gemini) na kiolezo cha bure cha CV katika Google Docs au Word",
      "Tangazo moja halisi la kazi ambalo mwanafunzi anaweza kuomba",
      "Karatasi na kalamu kwa orodha ya ujuzi na maandishi ya usaili",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi, pamoja na muda wa mazoezi"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha sura moja kwa kila kipindi huku kazi za \"Jaribu sasa\" zikifanywa papo hapo.",
      "Shirikiana na mshauri wa kurudi katika jamii au American Job Center ili wanafunzi wapate msaada wa kuorodhesha kazi waliyofanya wakiwa gerezani.",
      "Endesha usaili wa mazoezi kwa jozi; waache wanafunzi wachague kama watafanya mazoezi ya swali la historia mbele ya wengine.",
      "Usiwaombe kamwe wanafunzi waandike namba za Social Security, kesi au mfungwa kwenye zana za AI; tumieni namba za kujaza mahali.",
      "Wakumbushe wanafunzi walio kwenye parole au probation wafuate masharti yoyote kuhusu matumizi ya intaneti, na upime kazi ya mwisho kwa rubric, mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};

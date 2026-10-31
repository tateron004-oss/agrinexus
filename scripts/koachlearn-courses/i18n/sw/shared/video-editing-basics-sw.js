"use strict";

// Koach Learn course (Swahili translation of shared/video-editing-basics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "video-editing-basics-sw",
  lang: "sw",
  translationOf: "video-editing-basics",
  category: "Workforce Development",
  name: "Misingi ya Kuhariri Video",
  skills: "Kusoma maelekezo ya kazi na kupanga picha za video, Kuandaa mradi, Kujenga toleo la kwanza, Kutumia B-roll na mikato safi zaidi, Kurekebisha sauti na kuongeza manukuu, Kuhamisha video na kujenga portfolio",
  outcome: "kuchukua klipu zako ghafi na maelekezo mafupi ya kazi, kuzihariri kwenye programu ya bure ya kuhariri video hadi kupata video safi ya sekunde 30 hadi 60 yenye sauti wazi na manukuu, kuihamisha (export) katika umbo sahihi kwa mahali itakapochezwa, na kuitumia kama kipande cha kwanza cha portfolio yako ya kazi.",
  about: [
    "Kozi hii ni kwa yeyote anayetaka kuhariri video kwa kazi: vijana wanaotafuta kazi yao ya kwanza ya ubunifu, watu wazima wanaobadilisha kazi, wanamichezo na makocha wanaotengeneza klipu za matukio bora, na wamiliki wa biashara ndogo wanaotaka video za duka lao. Huna haja ya kuwa umewahi kuhariri.",
    "Utafanya kazi kama mhariri halisi: kusoma maelekezo ya kazi, kupanga faili zako, kujenga toleo la kwanza, kulifanya laini zaidi kwa B-roll na mikato bora, kurekebisha sauti, kuongeza manukuu, na kuhamisha faili iliyokamilika. Kila kitu kinafanya kazi na programu za bure kama DaVinci Resolve, Microsoft Clipchamp, CapCut au programu ya kuhariri iliyomo kwenye simu yako.",
    "Kila somo linachukua kama dakika tano, likifuatwa na kazi ya \"Jaribu sasa\" ukitumia klipu zako mwenyewe. Kuna jaribio fupi la maswali mawili baada ya kila somo, jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Matokeo yako ya mwisho ni video fupi iliyokamilika na maelezo ya portfolio unayoweza kumwonyesha mwajiri au mteja.",
    "Kozi hii inakuandaa. Haitoi cheti. Ukitaka sifa rasmi (credential) baadaye, Somo la 6 linaonyesha mbili halisi na mahali pa kuzikagua."
  ],
  finalTask: "Hariri video ya sekunde 30 hadi 60 kutoka picha zako mwenyewe kwa maelekezo ya kazi halisi au ya mazoezi (kwa mfano matukio bora ya timu, tangazo la duka la mtaani, au hadithi kuhusu programu ya ajira). Wasilisha: folda ya mradi yenye jina, video iliyokamilika iliyohamishwa katika umbo sahihi kwa mahali itakapochezwa, yenye B-roll, sauti safi, manukuu na muziki tu ulio na ruhusa ya kuutumia, na maelezo mafupi ya portfolio yanayosema maelekezo ya kazi, kazi yako na zana ulizotumia.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana na watu wazima katika programu za ajira, wanamichezo na makocha, na wamiliki wa biashara ndogo nchini Marekani na nchi nyingine. Wengi wamerekodi video kwa simu; wachache wamehariri zaidi ya kuongeza kichujio (filter) kwenye app ya mitandao ya kijamii.",
    startingPoint: "Wanaweza kurekodi video kwa simu na kuiweka kwenye mitandao ya kijamii. Hawajatumia timeline, hawajui uwiano wa umbo (aspect ratio) wala kasi ya fremu (frame rate), na hawajawahi kuhamisha faili kwa ajili ya mtu mwingine.",
    gap: "Biashara, shule, timu na mashirika yasiyo ya faida yote yanahitaji video fupi, na kazi nyingi za mwanzo na kazi za kujitegemea (msaidizi wa mitandao ya kijamii, mtengenezaji wa maudhui, mhariri msaidizi) zinaomba ujuzi wa msingi wa kuhariri na mfano wa kazi yako. Wanafunzi wanahitaji njia wanayoweza kurudia ya kugeuza klipu na maelekezo ya kazi kuwa video safi iliyokamilika, na kipande kimoja kilichokamilika cha kuonyesha.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la uhariri linaelezwa",
      "Vifaa: simu, au kompyuta nyumbani, maktaba au kituo cha ajira; programu za bure tu",
      "Menyu za programu hubadilika mara kwa mara, kwa hiyo masomo yanafundisha vitendo, si majina kamili ya menyu",
      "Muda: masomo ya dakika 4 hadi 6 pamoja na kama saa moja ya kuhariri kwa vitendo kwa kazi ya mwisho",
      "Masharti: ruhusa kutoka kwa watu walio kwenye kamera (na mzazi kwa yeyote aliye chini ya miaka 18) na muziki ambao mwanafunzi ameruhusiwa kuutumia"
    ],
    prerequisites: "Anaweza kurekodi video kwa simu na kuhamisha faili kwenda kwenye kompyuta au kati ya apps. Wanafunzi wapya kwa simu au kompyuta wanaweza kuanza na kozi \"Ujuzi wa Msingi wa Kompyuta\" au \"Kutumia Simu Janja na Tableti\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa maelekezo mafupi ya kazi na klipu ghafi", action: "kupanga picha za video katika folda ya mradi yenye jina na kuweka uwiano wa umbo na kasi ya fremu za mradi zilingane na mahali video itakapochezwa", standard: "kila klipu ikiwa rahisi kupatikana na bila klipu yoyote kuvutwa au kukatwa kwa makosa" },
    { id: "O2", condition: "Ukitumia programu ya bure ya kuhariri video", action: "kujenga toleo la kwanza kwa kufupisha, kugawanya na kupanga klipu kwenye timeline katika mwanzo, kati na mwisho", standard: "linalosimulia hadithi ya maelekezo ya kazi kwa urefu unaolengwa bila muda mtupu" },
    { id: "O3", condition: "Ukipewa toleo la kwanza", action: "kuongeza B-roll, picha za kando (cutaways) na mipito rahisi ili kuficha miruko na kuifanya video iende", standard: "ukitumia aina moja au mbili tu za mpito" },
    { id: "O4", condition: "Ukipewa video yenye maongezi na muziki", action: "kusawazisha viwango vya sauti na kuongeza manukuu sahihi na maandishi kwenye skrini", standard: "ili kila neno lisikike na lisomeke, mita isifike juu kabisa, na muziki wote utumike kwa ruhusa" },
    { id: "O5", condition: "Ukipewa video iliyohaririwa kikamilifu", action: "kuhamisha video kwa mipangilio inayofaa jukwaa, kuikagua dhidi ya maelekezo ya kazi na kuandika maelezo mafupi ya portfolio", standard: "ili faili icheze sawasawa mara ya kwanza na maelezo yataje maelekezo ya kazi, kazi yako na zana zako" }
  ],
  chapters: [
    {
      name: "Sura 1: Kutoka klipu ghafi hadi toleo la kwanza",
      lessons: [
        {
          title: "Soma maelekezo ya kazi na upange picha zako",
          objectives: ["O1"],
          minutes: 5,
          goal: "Andika maelekezo ya kazi na uandae folda ya mradi yenye jina, klipu zako zikiwa zimepangwa.",
          text: [
            "Kila kazi ya kuhariri inaanza na maelekezo ya kazi (brief): maelezo mafupi ya video ni ya nini. Maelekezo mazuri yanajibu maswali matano: nani ataitazama, itachezwa wapi (kwa mfano YouTube, Instagram Reels, TikTok, TV kwenye dirisha la duka), iwe ndefu kiasi gani, ujumbe gani mmoja lazima ufike, na inatakiwa lini.",
            "Kisha, panga. Wahariri hupoteza saa nyingi wakitafuta klipu. Tengeneza folda moja ya mradi yenye jina lililo wazi, kama \"2026-11 Bakery promo\". Ndani yake, tengeneza folda za video, sauti, muziki, michoro na video zilizohamishwa (exports). Nakili klipu zako ndani na uzipe zile bora majina mafupi, kama \"oven-closeup\" au \"owner-interview\".",
            "Weka nakala ya pili ya klipu zako ghafi mahali pengine, kama USB au hifadhi ya mtandaoni (cloud). Simu ikiharibika au faili ikifutwa, kazi haipotei.",
            "Kagua ruhusa sasa, si baada ya kuweka mtandaoni. Kila mtu anayeonekana au kusikika wazi akubali kuwa kwenye video, na yeyote aliye chini ya miaka 18 anahitaji mzazi au mlezi akubali pia."
          ],
          steps: ["Andika maelekezo ya kazi: watazamaji, jukwaa, urefu, ujumbe mmoja, tarehe ya mwisho.", "Tengeneza folda ya mradi yenye jina lililo wazi na tarehe.", "Ongeza folda za video, sauti, muziki, michoro na exports.", "Nakili klipu zako ndani na ubadilishe majina ya zile bora.", "Weka nakala ya klipu ghafi mahali pa pili.", "Hakikisha kila aliye kwenye kamera amekubali."],
          words: [["Maelekezo ya kazi (brief)", "maelezo mafupi ya video ni ya nini: ni kwa ajili ya nani, inachezwa wapi, urefu, ujumbe na tarehe ya mwisho."], ["Picha za video (footage)", "klipu ghafi za video ulizorekodi kabla ya kuhariri."], ["Kuweka nakala (back up)", "kuweka nakala ya pili ya faili zako mahali pengine."], ["Mteja", "mtu au biashara unayoitengenezea video."]],
          slides: [
            { title: "Maelekezo ya kazi yanajibu maswali matano", bullets: ["Nani ataitazama?", "Itachezwa wapi?", "Urefu gani? Ujumbe gani mmoja?", "Inatakiwa lini?"] },
            { title: "Folda moja ya mradi iliyo wazi", bullets: ["Ipe jina lenye tarehe na kazi", "Folda: video, sauti, muziki, michoro, exports", "Badilisha majina ya klipu zako bora"] },
            { title: "Linda kazi", bullets: ["Weka nakala ya klipu ghafi mahali pa pili", "Ruhusa kutoka kwa kila aliye kwenye kamera", "Mzazi au mlezi kwa yeyote aliye chini ya miaka 18"] }
          ],
          tryIt: "Chagua video utakayotengeneza kwa kazi ya mwisho (matukio bora ya timu, tangazo la duka, hadithi ya programu ya ajira au wazo lako mwenyewe). Andika maelekezo ya kazi ya mistari mitano kwenye karatasi. Kisha tengeneza folda ya mradi yenye folda zake tano za ndani, nakili klipu 8 hadi 15 ulizorekodi, na ubadilishe majina ya zile tano bora.",
          youCanNow: "kuandika maelekezo mafupi ya kazi na kuandaa folda ya mradi ambamo kila klipu ni rahisi kupatikana.",
          quickCheck: [
            { objective: "O1", q: "Kipi kati ya hivi kinafaa kuwa katika maelekezo ya kazi ya video?", options: ["Rangi unayoipenda", "Video itachezwa wapi na iwe ndefu kiasi gani", "Bei ya simu yako", "Orodha ya kila app uliyo nayo"], answer: 1, why: "Mahali inapochezwa na urefu wake vinaongoza kila uamuzi wa uhariri unaofuata." },
            { objective: "O1", q: "Simu yako ina nakala pekee ya klipu za mteja. Unafanya nini kwanza?", options: ["Kuanza kuhariri mara moja", "Kufuta klipu usizozipenda", "Kuziweka mtandaoni ili zihifadhiwe", "Kuzinakili mahali pa pili kama USB au hifadhi ya mtandaoni"], answer: 3, why: "Nakala mahali pa pili inamaanisha simu iliyoharibika au faili iliyofutwa haipotezi kazi." }
          ]
        },
        {
          title: "Andaa mradi: umbo, ukubwa na kasi",
          objectives: ["O1"],
          minutes: 5,
          goal: "Chagua uwiano wa umbo, resolution na kasi ya fremu za mradi kabla ya kuhariri.",
          text: [
            "Kabla ya kuhariri, iambie programu umbo na ukubwa wa video iliyokamilika. Uwiano wa umbo (aspect ratio) ni umbo. Upana 16:9 unafaa YouTube, kompyuta mpakato na TV. Urefu 9:16 unafaa apps za simu kama TikTok, Instagram Reels na YouTube Shorts. Mraba 1:1 unafaa baadhi ya milisho (feeds). Chagua umbo kutoka maelekezo yako ya kazi.",
            "Resolution ni idadi ya vitone (pixels) vinavyounda picha. 1920 kwa 1080, mara nyingi huitwa 1080p au Full HD, ni chaguo salama kwa kazi nyingi. Kwa video ndefu wima ni upana 1080 kwa urefu 1920.",
            "Kasi ya fremu (frame rate) ni idadi ya picha tuli zinazochezwa kila sekunde, huandikwa fps. Kasi za kawaida ni 24, 30 na 60. Weka mradi kwenye kasi ambayo klipu zako nyingi zilirekodiwa nayo. Unaweza kuona maelezo ya klipu ndani ya programu au katika taarifa za faili kwenye kompyuta au simu yako.",
            "Umbo likiwa si sahihi, programu itaongeza mistari myeusi au kukata pembeni. Ukichanganya kasi za fremu, mwendo unaweza kuonekana kurukaruka. Kuweka haya kwanza kunaokoa marekebisho mengi baadaye."
          ],
          steps: ["Soma maelekezo ya kazi: video itachezwa wapi?", "Chagua umbo: 16:9 upana, 9:16 wima au 1:1 mraba.", "Chagua ukubwa: 1920 x 1080 upana, au 1080 x 1920 wima.", "Angalia kasi ya fremu ya klipu zako na uweke mradi ulingane nayo.", "Anza mradi na uingize (import) klipu zako."],
          words: [["Uwiano wa umbo (aspect ratio)", "umbo la video, huandikwa upana kwa urefu, kama 16:9 (upana) au 9:16 (wima)."], ["Resolution", "idadi ya pixels zinazounda picha, kama 1920 x 1080."], ["Pixel", "kitone kimoja kidogo cha rangi kwenye skrini."], ["Kasi ya fremu (fps)", "idadi ya picha tuli zinazochezwa kila sekunde, kama 24, 30 au 60."], ["Kuingiza (import)", "kuleta klipu zako ndani ya programu ya kuhariri."]],
          slides: [
            { title: "Umbo: aspect ratio", bullets: ["16:9 upana: YouTube, kompyuta mpakato, TV", "9:16 wima: TikTok, Reels, Shorts", "1:1 mraba: baadhi ya milisho"] },
            { title: "Ukubwa: resolution", bullets: ["1920 x 1080 (1080p) ni salama kwa kazi nyingi", "Wima: upana 1080 x urefu 1920"] },
            { title: "Kasi: frame rate", bullets: ["Fremu 24, 30 au 60 kwa sekunde", "Lingana na kasi ya klipu nyingi"] },
            { title: "Kwa nini uweke kwanza", bullets: ["Umbo si sahihi = mistari myeusi au pembe zilizokatwa", "Kasi zilizochanganywa = mwendo unaorukaruka"] }
          ],
          sources: [
            { name: "Blackmagic Design: DaVinci Resolve (toleo la bure kwa Mac, Windows na Linux)", url: "https://www.blackmagicdesign.com/products/davinciresolve" },
            { name: "Microsoft Clipchamp: mipango, ukiwemo mpango wa bure", url: "https://clipchamp.com/en/pricing/" }
          ],
          tryIt: "Fungua programu ya bure ya kuhariri: DaVinci Resolve au Clipchamp kwenye kompyuta, au CapCut au programu ya kuhariri iliyomo kwenye simu yako. Angalia kasi ya fremu ya klipu zako tatu. Anza mradi mpya wenye umbo na kasi ya fremu ambayo maelekezo yako yanahitaji, na uingize klipu zako.",
          youCanNow: "kuandaa mradi wenye umbo, ukubwa na kasi ya fremu sahihi kwa mahali video itakapochezwa.",
          quickCheck: [
            { objective: "O1", q: "Maelekezo yako yanasema video itakuwa Instagram Reel. Unachagua umbo gani?", options: ["16:9 upana", "4:3 TV ya zamani", "9:16 wima", "21:9 sinema"], answer: 2, why: "Reels, TikTok na Shorts zinachezwa wima kwenye simu, kwa hiyo 9:16 inajaza skrini." },
            { objective: "O1", q: "Klipu zako nyingi zilirekodiwa kwa 30 fps. Mradi utumie kasi gani?", options: ["30 fps, ili kulingana na klipu", "60 fps, kwa sababu juu zaidi ni bora kila wakati", "Kasi yoyote; haina tofauti", "24 fps, kwa sababu filamu zinaitumia"], answer: 0, why: "Kulingana na kasi ya klipu zako nyingi kunafanya mwendo uwe laini." }
          ]
        },
        {
          title: "Jenga toleo la kwanza kwenye timeline",
          objectives: ["O2"],
          minutes: 6,
          goal: "Fupisha, gawanya na upange klipu kwenye timeline kuwa hadithi inayolingana na urefu unaolengwa.",
          text: [
            "Timeline ni ukanda ambapo unapanga klipu kwa mpangilio, kutoka kushoto kwenda kulia. Playhead ni mstari unaoonyesha ulipo. Toleo la kwanza (rough cut) ni toleo lako kamili la kwanza: klipu sahihi, kwa mpangilio sahihi, kwa urefu unaokaribia sahihi. Halihitaji kuwa zuri bado.",
            "Lijenge kwa sehemu tatu. Mwanzo unavuta umakini katika sekunde chache za kwanza. Kati unaonyesha ujumbe mkuu. Mwisho unamwambia mtazamaji afanye nini au akumbuke nini. Kwa duka la mikate: mkate mpya ukitoka jikoni, mmiliki akisema kwa nini alianza, kisha bango la duka na saa za kufungua.",
            "Zana mbili zinafanya kazi nyingi. Kufupisha (trim) kunakata mwanzo au mwisho wa klipu. Kugawanya (split) kunakata klipu moja kuwa mbili kwenye playhead, ili uweze kuondoa sehemu ya kati. Anza kila picha kabla tu ya tukio na uimalize baada tu ya tukio. Ondoa muda mtupu: kusubiri, kuangalia kamera, \"aa\" na vituo virefu.",
            "Tazama toleo la kwanza lote tangu mwanzo. Likiwa refu kuliko maelekezo yanavyoruhusu, ondoa picha nzima kabla ya kufupisha zile nzuri. Hifadhi mara kwa mara, na hifadhi nakala yenye namba ya toleo (v1, v2) kabla ya mabadiliko makubwa."
          ],
          steps: ["Buruta klipu zako bora kwenye timeline kwa mpangilio wa hadithi: mwanzo, kati, mwisho.", "Fupisha mwanzo na mwisho wa kila klipu ili ianze kabla tu ya tukio.", "Gawanya klipu ili kuondoa vituo, makosa na muda mtupu.", "Tazama tangu mwanzo na ulinganishe urefu na maelekezo ya kazi.", "Ondoa picha nzima dhaifu kama ni ndefu mno.", "Hifadhi kama v1."],
          words: [["Timeline", "ukanda katika programu ya kuhariri ambapo klipu zinapangwa kwa mpangilio, kushoto kwenda kulia."], ["Playhead", "mstari kwenye timeline unaoonyesha wakati unaotazama."], ["Kufupisha (trim)", "kufanya klipu iwe fupi kwa kukata mwanzo au mwisho wake."], ["Kugawanya (split)", "kukata klipu moja kuwa vipande viwili kwenye playhead."], ["Toleo la kwanza (rough cut)", "toleo kamili la kwanza la uhariri, lenye klipu sahihi kwa mpangilio lakini bado halijasafishwa."], ["Muda mtupu", "sehemu ambazo hakuna kitu cha manufaa kinachotokea, kama kusubiri au vituo virefu."]],
          slides: [
            { title: "Timeline", bullets: ["Klipu kwa mpangilio, kushoto kwenda kulia", "Playhead inaonyesha ulipo", "Toleo la kwanza = toleo kamili la kwanza"] },
            { title: "Mwanzo, kati, mwisho", bullets: ["Vuta umakini katika sekunde za kwanza", "Onyesha ujumbe mkuu", "Malizia kwa cha kufanya au kukumbuka"] },
            { title: "Fupisha na gawanya", bullets: ["Trim: kata mwanzo au mwisho", "Split: kata klipu mara mbili kwenye playhead", "Ondoa kusubiri, vituo na \"aa\""] },
            { title: "Kagua na hifadhi", bullets: ["Tazama tangu mwanzo", "Ni ndefu mno? Ondoa picha nzima kwanza", "Hifadhi matoleo: v1, v2"] }
          ],
          tryIt: "Katika mradi wako, jenga toleo la kwanza la video ya kazi ya mwisho. Weka klipu kwa mpangilio wa mwanzo-kati-mwisho, fupisha kila moja, gawanya na uondoe angalau vituo au makosa mawili, na ufike ndani ya sekunde 10 za urefu unaolengwa. Lihifadhi kama v1 na uandike urefu wake.",
          youCanNow: "kujenga toleo la kwanza linalosimulia hadithi kwa urefu unaolengwa bila muda mtupu.",
          quickCheck: [
            { objective: "O2", q: "Unahitaji kuondoa kituo kirefu katikati ya klipu ya mahojiano. Unatumia zana gani?", options: ["Kubadilisha uwiano wa umbo", "Kuhamisha klipu", "Kuongeza mpito", "Kugawanya klipu pande zote mbili za kituo na kufuta sehemu ya kati"], answer: 3, why: "Kugawanya pande zote mbili za kituo kunakuwezesha kuondoa sehemu ya kati tu." },
            { objective: "O2", q: "Toleo lako la kwanza ni refu kwa sekunde 20 kuliko inavyotakiwa. Unajaribu nini kwanza?", options: ["Kuharakisha video yote", "Kuondoa picha nzima dhaifu", "Kufanya kila klipu iwe fupi kwa sekunde moja", "Kubadilisha kasi ya fremu"], answer: 1, why: "Kuondoa picha dhaifu kunaacha zile imara zikiwa nzima na hadithi ikiwa wazi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kutoka klipu ghafi hadi toleo la kwanza",
        questions: [
          { objective: "O1", q: "Mmiliki wa duka anaomba video kwa ajili ya TV iliyo kwenye dirisha la mbele. Umbo gani linafaa TV?", options: ["9:16 wima", "16:9 upana", "1:1 mraba", "Umbo lolote; TV zinajirekebisha"], answer: 1, why: "TV ni skrini pana, kwa hiyo 16:9 inazijaza bila mistari myeusi." },
          { objective: "O1", q: "Jina lipi la folda ya mradi lina manufaa zaidi?", options: ["\"vitu\"", "\"New folder (3)\"", "\"video final final\"", "\"2026-11 Bakery promo\""], answer: 3, why: "Tarehe na jina la kazi vinafanya folda iwe rahisi kupatikana baadaye." },
          { objective: "O2", q: "Toleo la kwanza (rough cut) ni nini?", options: ["Toleo kamili la kwanza lenye klipu sahihi kwa mpangilio", "Video yenye mkwaruzo kwenye lenzi", "Faili iliyokamilika na kuhamishwa", "Klipu iliyorekodiwa vibaya"], answer: 0, why: "Toleo la kwanza lina hadithi mahali pake; kusafisha kunakuja baadaye." },
          { objective: "O2", q: "Kwa kawaida picha ianze wapi?", options: ["Mara tu ulipobonyeza kurekodi", "Baada ya tukio kwisha", "Kabla tu ya tukio", "Katikati ya tukio"], answer: 2, why: "Kuanza kabla tu ya tukio kunaondoa muda mtupu na kufanya video iende." },
          { objective: "O2", q: "Kabla ya badiliko kubwa katika uhariri wako, tabia nzuri ni ipi?", options: ["Kufuta toleo la zamani ili kuokoa nafasi", "Kufunga programu bila kuhifadhi", "Kubadilisha uwiano wa umbo", "Kuhifadhi nakala yenye namba ya toleo, kama v2"], answer: 3, why: "Nakala za matoleo zinakuwezesha kurudi nyuma badiliko lisipofanya kazi." }
        ]
      }
    },
    {
      name: "Sura 2: Kusafisha na kuwasilisha",
      lessons: [
        {
          title: "Fanya uhariri uwe laini kwa B-roll na mikato bora",
          objectives: ["O3"],
          minutes: 5,
          goal: "Ongeza B-roll, picha ya kando na L-cut au J-cut ili kulainisha toleo lako la kwanza.",
          text: [
            "Unapokata sehemu ya mahojiano, uso unaruka. Hii inaitwa jump cut (mruko). Wahariri wanauficha kwa B-roll: picha zinazoonyesha kile mtu anachozungumzia. Kocha anazungumzia mazoezi; tunaona wachezaji wakifanya mazoezi. Sauti inaendelea huku picha ikibadilika.",
            "Picha ya kando (cutaway) ni picha fupi ya kitu kilicho karibu, kama mikono, umati au ubao wa matokeo, inayowekwa kati ya picha mbili za kitu kile kile. Changanya picha za mbali, za kati na za karibu ili mtazamaji aone mahali, watu na maelezo madogo.",
            "Mbinu mbili za wataalamu ni rahisi. Katika L-cut, picha inabadilika kwenda picha inayofuata huku sauti ya picha ya kwanza ikiendelea kucheza. Katika J-cut, unasikia picha inayofuata kabla ya kuiona. Zote zinafanya uhariri uonekane laini na wa kawaida. Programu nyingi zinakuruhusu kutenganisha (unlink au detach) sauti na picha ili kufanya hivi.",
            "Usitumie mipito (transitions) kupita kiasi. Wataalamu hutumia mkato wa kawaida mara nyingi. Tumia mpito mmoja au miwili rahisi, kama kufifia kwa muda mfupi mwanzoni na mwishoni. Mipito mingi ya kung'aa na kuzunguka inafanya video ionekane kama imetengenezwa na mwanafunzi mpya."
          ],
          steps: ["Tazama toleo lako la kwanza na uweke alama kwenye kila jump cut.", "Weka B-roll kwenye njia (track) iliyo juu ya mahojiano kufunika kila mruko.", "Ongeza angalau picha moja ya kando (mikono, umati, bango, ubao wa matokeo).", "Jaribu L-cut au J-cut moja kwa kutenganisha sauti na picha.", "Tumia mikato ya kawaida, na mipito rahisi isiyozidi moja au miwili.", "Hifadhi kama v2."],
          words: [["B-roll", "picha za ziada zinazoonyesha kile mtu anachozungumzia, zinazowekwa juu ya sauti yake."], ["Jump cut", "mruko wa ghafla kwenye picha sehemu ya picha inapokatwa."], ["Picha ya kando (cutaway)", "picha fupi ya kitu kilicho karibu inayowekwa kati ya picha mbili za kitu kile kile."], ["L-cut na J-cut", "mikato ambapo sauti na picha zinabadilika kwa nyakati tofauti, ili mkato uonekane laini."], ["Mpito (transition)", "athari kati ya klipu mbili, kama kufifia."]],
          slides: [
            { title: "Ficha miruko", bullets: ["Kukata mahojiano kunafanya uso uruke", "Ufunike kwa B-roll inayoonyesha mada", "Sauti inaendelea chini yake"] },
            { title: "Changanya picha zako", bullets: ["Mbali: mahali", "Kati: watu", "Karibu: maelezo madogo", "Picha za kando: mikono, umati, bango"] },
            { title: "L-cut na J-cut", bullets: ["L-cut: picha inabadilika, sauti inaendelea", "J-cut: sikia picha inayofuata kabla ya kuiona", "Tenganisha sauti na picha kufanya hivi"] },
            { title: "Mipito: kidogo ni bora", bullets: ["Mikato ya kawaida mara nyingi", "Kufifia rahisi mara moja au mbili tu"] }
          ],
          tryIt: "Fungua v1 yako. Funika kila jump cut kwa B-roll, ongeza angalau picha moja ya kando, na tengeneza L-cut au J-cut moja. Ondoa mipito yoyote ya kung'aa ili usitumie zaidi ya aina mbili. Hifadhi kama v2 na utazame v1 na v2 kwa kulinganisha.",
          youCanNow: "kutumia B-roll, picha za kando na L-cut au J-cut kufanya uhariri uwe laini na rahisi kutazama.",
          quickCheck: [
            { objective: "O3", q: "Mahojiano yana jump cut mahali ulipoondoa sentensi. Unauficha vipi?", options: ["Kuweka B-roll juu ya mruko huku sauti ikiendelea kucheza", "Kuongeza mpito unaozunguka", "Kuongeza sauti ya video", "Kubadilisha kasi ya fremu"], answer: 0, why: "B-roll inafunika mruko kwenye picha huku maongezi yakiendelea." },
            { objective: "O3", q: "Unasikia umati ukishangilia kabla picha haijakatwa kwenda kwenye umati. Hii inaitwaje?", options: ["Jump cut", "L-cut", "Toleo la kwanza", "J-cut"], answer: 3, why: "Katika J-cut sauti ya picha inayofuata inaanza kabla ya picha yake." }
          ]
        },
        {
          title: "Rekebisha sauti, ongeza muziki na manukuu",
          objectives: ["O4"],
          minutes: 6,
          goal: "Sawazisha viwango vya sauti ya maongezi na muziki, ongeza muziki ulio na ruhusa ya kuutumia, na uongeze manukuu sahihi.",
          text: [
            "Watazamaji husamehe picha ya wastani lakini si sauti mbaya. Tumia mita ya sauti: inaonyesha sauti ina nguvu kiasi gani. Ikifika juu na kuwa nyekundu, sauti itakwaruza. Lengo la kawaida ni sauti za watu kufikia kilele karibu na -6 kwenye mita, muziki ukiwa chini sana chini ya maongezi, na hakuna kinachofika 0.",
            "Tumia muziki tu ulioruhusiwa kuutumia: muziki uliotengeneza mwenyewe, muziki wenye ruhusa ya maandishi, au maktaba ya bure ya programu yako au jukwaa, ukifuata masharti yake. YouTube Audio Library inatoa muziki kwa video za YouTube; baadhi ya nyimbo zinakutaka umtaje msanii. Kumtaja msanii peke yake hakukupi ruhusa ya kutumia wimbo wa mtu mwingine, na hakuna idadi salama ya sekunde.",
            "Watu wengi hutazama bila sauti, na manukuu pia yanasaidia watazamaji viziwi au wasiosikia vizuri. Programu nyingi zinaweza kutengeneza manukuu ya moja kwa moja. Yasome kila wakati na urekebishe kila kosa, hasa majina, mahali na namba.",
            "Ongeza maandishi kwenye skrini kwa uangalifu: kichwa kifupi, jina na kazi ya mtu mara ya kwanza anapozungumza, na kadi ya mwisho yenye ujumbe au wito wa kuchukua hatua. Tumia herufi kubwa, rahisi na weka maandishi mbali na pembeni, ambapo apps huweka vitufe vyao."
          ],
          steps: ["Cheza video na utazame mita ya sauti.", "Punguza klipu yoyote inayokuwa nyekundu; ongeza sauti za watu zilizo chini mno.", "Ongeza muziki ulioruhusiwa na uupunguze chini ya maongezi.", "Washa manukuu ya moja kwa moja, kisha soma na urekebishe kila neno.", "Ongeza kichwa, lebo ya jina na kadi ya mwisho kwa herufi kubwa na rahisi.", "Hifadhi kama v3."],
          words: [["Mita ya sauti", "upau unaoonyesha sauti ina nguvu kiasi gani."], ["Clipping (kukwaruza)", "sauti inayokwaruza kiwango kinapofika juu ya mita."], ["Royalty-free", "muziki unaoweza kuutumia bila kulipa kila unapochezwa, chini ya masharti ya maktaba; bado una masharti."], ["Manukuu (captions)", "maneno yanayosemwa yakionyeshwa kama maandishi kwenye skrini."], ["Wito wa kuchukua hatua", "unachotaka mtazamaji afanye baadaye, kama \"Tutembelee Jumamosi\"."]],
          slides: [
            { title: "Tazama mita", bullets: ["Nyekundu juu = sauti inayokwaruza", "Sauti za watu zifikie kilele karibu na -6", "Muziki chini sana chini ya maongezi"] },
            { title: "Muziki unaoruhusiwa kuutumia", bullets: ["Muziki wako mwenyewe au ruhusa ya maandishi", "Maktaba ya programu au jukwaa lako, chini ya masharti yake", "Kumtaja msanii si ruhusa"] },
            { title: "Manukuu", bullets: ["Watazamaji wengi hutazama bila sauti", "Yanasaidia watazamaji viziwi au wasiosikia vizuri", "Soma na urekebishe kila manukuu ya moja kwa moja"] },
            { title: "Maandishi kwenye skrini", bullets: ["Kichwa kifupi na lebo za majina", "Kadi ya mwisho yenye wito wa kuchukua hatua", "Herufi kubwa, rahisi mbali na pembeni"] }
          ],
          sources: [
            { name: "U.S. Copyright Office: Maswali kuhusu matumizi ya haki (Fair use FAQ)", url: "https://www.copyright.gov/help/faq/faq-fairuse.html" },
            { name: "YouTube Help: Kutumia muziki na athari za sauti kutoka Audio Library", url: "https://support.google.com/youtube/answer/3376882" }
          ],
          tryIt: "Fungua v2 yako. Tazama mita na urekebishe klipu yoyote inayokuwa nyekundu. Ongeza muziki ulioruhusiwa kuutumia na uupunguze chini ya maongezi. Washa manukuu ya moja kwa moja na urekebishe kila kosa. Ongeza kichwa, lebo moja ya jina na kadi ya mwisho. Hifadhi kama v3, kisha uitazame mara moja bila sauti ili kuhakikisha manukuu yanasimulia hadithi.",
          youCanNow: "kusawazisha viwango vya sauti, kuongeza muziki kwa njia sahihi na kuongeza manukuu na maandishi ambayo watu wanaweza kusoma.",
          quickCheck: [
            { objective: "O4", q: "Mita ya sauti inakuwa nyekundu juu kocha anapopiga kelele. Unafanya nini?", options: ["Kuongeza sauti ya klipu hiyo", "Kuiacha; nyekundu inamaanisha nzuri", "Kupunguza kiwango cha klipu hiyo ili ibaki nje ya nyekundu", "Kufuta manukuu"], answer: 2, why: "Nyekundu juu inamaanisha clipping; kupunguza kiwango kunazuia kukwaruza." },
            { objective: "O4", q: "Mteja anataka wimbo maarufu katika tangazo lake. Huna ruhusa. Kipi ni kweli?", options: ["Ni sawa ukitumia sekunde 10 tu", "Kumtaja msanii kunafanya iwe halali", "Matangazo yanaweza kutumia wimbo wowote wa redioni", "Unahitaji ruhusa, au tumia muziki kutoka maktaba chini ya masharti yake"], answer: 3, why: "Hakuna idadi salama ya sekunde na kumtaja msanii si ruhusa, kwa hiyo pata ruhusa au tumia muziki wa maktaba wenye leseni." }
          ]
        },
        {
          title: "Hamisha, kagua na ujenge portfolio yako",
          objectives: ["O5"],
          minutes: 6,
          goal: "Hamisha video iliyokamilika, ikague dhidi ya maelekezo ya kazi na uandike maelezo ya portfolio.",
          text: [
            "Kuhamisha (export) kunageuza mradi wako kuwa faili moja ya video. Kwa matumizi mengi ya mtandaoni, chagua faili ya MP4 yenye video ya H.264 kwa umbo, ukubwa na kasi ya fremu sawa na mradi wako. Ipe faili jina lililo wazi, kama \"bakery-promo-v3-9x16.mp4\", na uihifadhi katika folda yako ya exports. Katika DaVinci Resolve hii inafanyika kwenye ukurasa unaoitwa Deliver; programu nyingine zinatumia kitufe kama Export au Save.",
            "Usitume kamwe faili ambayo hujaitazama. Cheza faili iliyohamishwa tangu mwanzo hadi mwisho kwenye kifaa itakapotazamwa. Kagua maelekezo ya kazi: urefu sahihi, umbo sahihi, ujumbe mmoja wazi, sauti safi, manukuu na majina sahihi. Kisha itume, omba maoni, na ufanye mabadiliko katika toleo jipya. Wateja mara nyingi huomba mabadiliko; hiyo ni sehemu ya kawaida ya kazi.",
            "Portfolio yako ni mkusanyiko mdogo wa kazi zako bora. Weka video mtandaoni mahali unaporuhusiwa (kwa ruhusa ya mteja na kila aliye ndani yake) na uandike maelezo mafupi: maelekezo ya kazi, ulichofanya, zana ulizotumia na matokeo. Waajiri wanaotafuta wahariri wasaidizi, wasaidizi wa mitandao ya kijamii na watengenezaji wa maudhui mara nyingi huomba mifano kama hii.",
            "Sifa rasmi (credentials) zinaweza kusaidia baadaye. Certiport, biashara ya Pearson VUE, inasimamia mtihani wa Adobe Certified Professional in Digital Video Using Adobe Premiere. Blackmagic Design inatoa mafunzo na mitihani ya mtandaoni ili kuwa mhariri aliyethibitishwa wa DaVinci Resolve. Kagua ukurasa rasmi wa kila moja kwa masharti na gharama za sasa. Kozi hii inakuandaa kuendelea kujifunza; haitoi sifa yoyote kati ya hizo."
          ],
          steps: ["Hamisha MP4 (H.264) kwa umbo, ukubwa na kasi ya fremu za mradi.", "Ipe faili jina lililo wazi na uihifadhi katika folda ya exports.", "Tazama faili yote kwenye kifaa itakapochezwa.", "Ikague dhidi ya kila mstari wa maelekezo ya kazi.", "Itume, pata maoni na ufanye mabadiliko katika toleo jipya.", "Andika maelezo ya portfolio: maelekezo ya kazi, kazi yako, zana, matokeo."],
          words: [["Kuhamisha (export)", "kugeuza uhariri wako kuwa faili moja ya video iliyokamilika."], ["MP4 na H.264", "aina ya faili na muundo wa video wa kawaida unaocheza kwenye simu, kompyuta na tovuti nyingi."], ["Portfolio", "mkusanyiko mdogo wa kazi zako bora wa kuwaonyesha waajiri au wateja."], ["Marekebisho (revision)", "badiliko ambalo mteja anaomba baada ya kuona toleo."], ["Sifa rasmi (credential)", "uthibitisho kutoka shirika linalotambulika kwamba ulifaulu mtihani wa ujuzi wako."]],
          slides: [
            { title: "Hamisha faili", bullets: ["MP4 yenye H.264 kwa matumizi mengi ya mtandaoni", "Umbo, ukubwa na kasi ya fremu sawa na mradi", "Jina lililo wazi, limehifadhiwa katika folda ya exports"] },
            { title: "Kagua kabla ya kutuma", bullets: ["Tazama faili yote kwenye kifaa halisi", "Kagua kila mstari wa maelekezo ya kazi", "Mabadiliko yanaenda katika toleo jipya"] },
            { title: "Maelezo yako ya portfolio", bullets: ["Maelekezo ya kazi", "Ulichofanya na zana ulizotumia", "Matokeo; shiriki kwa ruhusa tu"] },
            { title: "Sifa rasmi za kuchunguza baadaye", bullets: ["Adobe Certified Professional in Premiere (Certiport)", "Uthibitisho wa DaVinci Resolve (Blackmagic Design)", "Kagua kurasa rasmi; kozi hii inakuandaa tu"] }
          ],
          sources: [
            { name: "Certiport: Mitihani ya Adobe Certified Professional", url: "https://certiport.pearsonvue.com/Certifications/Adobe/ACP/Certify" },
            { name: "Blackmagic Design: Mafunzo na uthibitisho wa DaVinci Resolve", url: "https://www.blackmagicdesign.com/products/davinciresolve/training" },
            { name: "U.S. Bureau of Labor Statistics: Wahariri wa Filamu na Video na Wapiga Picha za Kamera", url: "https://www.bls.gov/ooh/media-and-communication/film-and-video-editors-and-camera-operators.htm" }
          ],
          tryIt: "Kazi ya mwisho: hamisha v3 yako kama MP4 katika umbo sahihi, ipe jina lililo wazi na uitazame kwenye kifaa itakapochezwa. Ikague dhidi ya maelekezo yako ya kazi na urekebishe chochote kisicholingana. Kisha andika maelezo yako ya portfolio kwa mistari minne: maelekezo ya kazi, ulichofanya, zana ulizotumia na matokeo.",
          youCanNow: "kuhamisha video iliyokamilika, kuikagua dhidi ya maelekezo ya kazi na kuiwasilisha kama kipande cha portfolio.",
          quickCheck: [
            { objective: "O5", q: "Jina lipi la faili ni bora kwa video iliyokamilika?", options: ["\"final.mp4\"", "\"bakery-promo-v3-9x16.mp4\"", "\"untitled (2).mp4\"", "\"video.mp4\""], answer: 1, why: "Linasema kazi, toleo na umbo, kwa hiyo hakuna anayetuma faili isiyo sahihi." },
            { objective: "O5", q: "Umemaliza kuhamisha video. Unafanya nini kabla ya kuituma?", options: ["Kuituma mara moja ili kuokoa muda", "Kufuta mradi ili kuokoa nafasi", "Kutazama faili yote kwenye kifaa itakapochezwa na kuikagua dhidi ya maelekezo ya kazi", "Kubadilisha kasi ya fremu"], answer: 2, why: "Kutazama faili halisi kunagundua makosa kabla mteja hajayaona." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kusafisha na kuwasilisha",
        questions: [
          { objective: "O3", q: "B-roll ni nini?", options: ["Klipu ya kwanza kwenye timeline", "Aina ya kamera", "Picha za ziada zinazoonyesha kile mtu anachozungumzia", "Faili ya muziki"], answer: 2, why: "B-roll inawekwa juu ya sauti ili kuonyesha mada na kuficha miruko." },
          { objective: "O3", q: "Video ya kazi ya mwanafunzi mpya kwa kawaida itumie aina ngapi za mipito?", options: ["Moja au mbili rahisi, na mikato ya kawaida mara nyingi", "Tofauti kati ya kila klipu", "Angalau kumi", "Athari za kuzunguka na kufuta tu"], answer: 0, why: "Wataalamu hutumia mikato ya kawaida mara nyingi; mipito mingi ya kung'aa inaonekana ya mwanafunzi mpya." },
          { objective: "O4", q: "Kwa nini usome manukuu ya moja kwa moja kabla ya kuhamisha?", options: ["Manukuu yanapunguza kasi ya video", "Manukuu yanabadilisha uwiano wa umbo", "Manukuu ya moja kwa moja ni kamili kila wakati", "Mara nyingi yanakosea majina, mahali na namba"], answer: 3, why: "Manukuu ya moja kwa moja yanafanya makosa, kwa hiyo unakagua na kurekebisha kila neno." },
          { objective: "O4", q: "Muziki uwe wapi mtu anapozungumza?", options: ["Juu zaidi ya sauti ya mtu", "Chini sana ya sauti ya mtu", "Juu kabisa ya mita", "Umezimwa na kufutwa"], answer: 1, why: "Muziki wa chini chini ya maongezi unafanya kila neno liwe wazi." },
          { objective: "O5", q: "Mteja anaomba mabadiliko mawili baada ya kutazama v3. Jibu la kitaalamu ni lipi?", options: ["Kufanya mabadiliko katika toleo jipya, v4", "Kukataa; video imekamilika", "Kufuta v3 na kuanza upya", "Kutuma faili ile ile tena"], answer: 0, why: "Marekebisho ni sehemu ya kawaida ya kazi, na toleo jipya linalinda lile la zamani." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Misingi ya Kuhariri Video",
    questions: [
      { objective: "O1", q: "Maelekezo ya kazi yanasema: \"TikTok ya sekunde 30 kwa gari letu la chakula, inatakiwa Ijumaa.\" Mradi uwe na umbo gani?", options: ["16:9 upana", "1:1 mraba", "9:16 wima", "4:3"], answer: 2, why: "TikTok inachezwa wima kwenye simu, kwa hiyo 9:16 inajaza skrini." },
      { objective: "O1", q: "Sababu kuu ya kutengeneza folda ya mradi yenye jina na folda za ndani ni ipi?", options: ["Ili kila klipu na faili iwe rahisi kupatikana", "Inafanya video icheze haraka zaidi", "Programu hazitafungua faili bila hiyo", "Inaongeza manukuu yenyewe"], answer: 0, why: "Folda zilizopangwa zinaokoa muda na kuzuia faili zinazopotea au zisizo sahihi." },
      { objective: "O1", q: "\"1920 x 1080\" inaeleza nini?", options: ["Kasi ya fremu", "Uwiano wa umbo peke yake", "Urefu kwa sekunde", "Resolution, kwa pixels"], answer: 3, why: "1920 x 1080 ni upana na urefu kwa pixels, mara nyingi huitwa 1080p." },
      { objective: "O1", q: "Unataka kumrekodi mchezaji wa miaka 15 kwa video ya matukio bora ya timu. Nani lazima akubali?", options: ["Kocha peke yake", "Mchezaji na mzazi au mlezi", "Hakuna, kama ni mchezo wa hadhara", "Timu nyingine peke yake"], answer: 1, why: "Yeyote aliye chini ya miaka 18 anahitaji mzazi au mlezi akubali, pamoja na mchezaji mwenyewe." },
      { objective: "O2", q: "Zana ya kufupisha (trim) inafanya nini?", options: ["Inabadilisha rangi", "Inakata mwanzo au mwisho wa klipu", "Inaongeza muziki", "Inahamisha faili"], answer: 1, why: "Kufupisha kunafanya klipu iwe fupi kutoka mwanzo au mwisho wake." },
      { objective: "O2", q: "Playhead ni nini?", options: ["Klipu ya kwanza katika mradi", "Nembo ya programu", "Mita ya sauti", "Mstari kwenye timeline unaoonyesha ulipo"], answer: 3, why: "Playhead inaonyesha wakati unaotazama; kugawanya kunafanyika hapo." },
      { objective: "O2", q: "Mpangilio upi unafaa tangazo la sekunde 45 la kinyozi?", options: ["Unyoaji mpya ukimalizika, kinyozi akisema kinachofanya duka liwe la kipekee, kisha anwani na saa za kufungua", "Saa za kufungua, kisha picha ndefu ya kiti kitupu, kisha nembo", "Dakika kumi za unyoaji mzima", "Kinyozi akiangalia kamera akisubiri kuanza"], answer: 0, why: "Unavuta umakini, unatoa ujumbe na unamalizia kwa cha kufanya." },
      { objective: "O2", q: "Kipi ni muda mtupu unaopaswa kuondoa?", options: ["Wakati mchezaji anafunga bao", "Mmiliki akieleza bidhaa yake bora", "Kituo kirefu ambapo mzungumzaji anasema \"aa\" na kuangalia pembeni", "Bango la duka mwishoni"], answer: 2, why: "Vituo na kusubiri vinaongeza urefu bila kuongeza maana." },
      { objective: "O3", q: "Katika L-cut, nini kinatokea?", options: ["Video inakuwa nyeusi", "Picha na sauti zote zinasimama", "Sauti inaanza kabla ya picha", "Picha inabadilika huku sauti ya picha ya kwanza ikiendelea kucheza"], answer: 3, why: "Katika L-cut sauti ya awali inaendelea chini ya picha mpya." },
      { objective: "O3", q: "Picha ipi inafaa kama picha ya kando katika mahojiano na mwokaji mikate?", options: ["Picha ile ile ya mahojiano tena", "Skrini nyeusi", "Picha ya karibu ya mikono yake ikiumba unga", "Picha kutoka video nyingine kuhusu magari"], answer: 2, why: "Picha ya kando inaonyesha kitu kilicho karibu na kinachohusiana, na hii inaficha mkato." },
      { objective: "O3", q: "Kwa nini uchanganye picha za mbali, za kati na za karibu?", options: ["Kuonyesha mahali, watu na maelezo madogo", "Kufanya faili iwe ndogo", "Kubadilisha kasi ya fremu", "Programu zinahitaji ukubwa tatu wa picha"], answer: 0, why: "Ukubwa tofauti wa picha unampa mtazamaji picha kamili na kuifanya ivutie." },
      { objective: "O3", q: "Uhariri wako una mpito tofauti wa kung'aa kati ya kila klipu. Unapaswa kubadilisha nini?", options: ["Kuongeza mipito zaidi", "Kutumia mikato ya kawaida na kubaki na mpito mmoja au miwili rahisi", "Kufanya mipito iwe mirefu zaidi", "Kuharakisha video yote"], answer: 1, why: "Mikato ya kawaida na mipito michache rahisi inaonekana ya kitaalamu." },
      { objective: "O4", q: "Inamaanisha nini mita ya sauti inapofika juu na kuwa nyekundu?", options: ["Sauti ni kamili", "Manukuu yamewashwa", "Sauti ina nguvu mno na inaweza kukwaruza", "Muziki una ruhusa"], answer: 2, why: "Nyekundu juu ni clipping, inayofanya sauti ikwaruze." },
      { objective: "O4", q: "Muziki upi unaweza kuutumia katika video ya mteja?", options: ["Wimbo wowote ukimtaja msanii", "Wimbo wa redioni kama ni chini ya sekunde 15", "Wimbo ambao rafiki aliuweka mtandaoni", "Muziki kutoka maktaba ya programu yako, ukifuata masharti yake"], answer: 3, why: "Muziki wa maktaba chini ya masharti yake, muziki wako mwenyewe au ruhusa ya maandishi ndiyo machaguo salama." },
      { objective: "O4", q: "Kwa nini uongeze manukuu kwenye video ya kazi?", options: ["Watu wengi hutazama bila sauti, na manukuu yanasaidia watazamaji viziwi au wasiosikia vizuri", "Manukuu yanafanya faili iwe ndogo", "Manukuu ni kwa filamu tu", "Majukwaa hufuta video zisizo na manukuu"], answer: 0, why: "Manukuu yanawafikia watazamaji wengi zaidi na kufanya ujumbe uwe wazi bila sauti." },
      { objective: "O4", q: "Maandishi kwenye skrini yawe wapi katika video wima ya simu?", options: ["Pembeni kabisa", "Mbali na pembeni, kwa herufi kubwa na rahisi", "Kwenye fremu ya mwisho tu, madogo sana", "Chini ya vitufe vya app"], answer: 1, why: "Apps huweka vitufe karibu na pembeni, kwa hiyo maandishi hapo yanaweza kufunikwa." },
      { objective: "O5", q: "Kwa matumizi mengi ya mtandaoni, chaguo lipi la kuhamisha ni salama?", options: ["Aina yoyote ya faili kwa ukubwa wowote", "Picha tuli", "MP4 yenye H.264, inayolingana na umbo, ukubwa na kasi ya fremu za mradi", "Faili ya mradi peke yake"], answer: 2, why: "MP4 yenye H.264 inacheza kwenye simu, kompyuta na tovuti nyingi." },
      { objective: "O5", q: "Nini kinaingia katika maelezo mafupi ya portfolio?", options: ["Maelekezo ya kazi, ulichofanya, zana ulizotumia na matokeo", "Anwani yako ya nyumbani na namba ya simu", "Nywila ya programu yako ya kuhariri", "Ukubwa wa faili ya video peke yake"], answer: 0, why: "Mistari hiyo minne inamwonyesha mwajiri unachoweza kufanya." },
      { objective: "O5", q: "Nani anasimamia mtihani wa Adobe Certified Professional in Digital Video Using Adobe Premiere?", options: ["U.S. Department of Labor (Wizara ya Kazi ya Marekani)", "YouTube", "App yoyote ya kuhariri video", "Certiport, biashara ya Pearson VUE"], answer: 3, why: "Certiport inasimamia mitihani ya Adobe Certified Professional; kagua ukurasa wake kwa maelezo ya sasa." },
      { objective: "O5", q: "Kozi hii inakupa nini?", options: ["Cheti cha Adobe", "Uthibitisho wa DaVinci Resolve", "Leseni ya jimbo ya kuhariri video", "Maandalizi na kipande cha portfolio, si sifa rasmi"], answer: 3, why: "Kozi inakuandaa; sifa rasmi zinatoka Adobe kupitia Certiport au kutoka Blackmagic Design." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 2, 4, 7, 8, 11, 12, 13, 16, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo, hamisha toleo jipya na ujaribu tena.",
    criteria: [
      { name: "Amepanga na kuandaa", objective: "O1", notYet: "Klipu zimetawanyika au umbo halilingani na jukwaa (mistari myeusi au pembe zilizokatwa).", meets: "Folda ya mradi yenye jina na folda za ndani, nakala ya ziada, na umbo na kasi ya fremu za mradi zinalingana na maelekezo ya kazi.", exceeds: "Klipu bora zimebadilishwa majina na mwanafunzi anaweza kueleza kwa nini alichagua umbo na kasi ya fremu." },
      { name: "Hadithi na urefu", objective: "O2", notYet: "Klipu hazina mpangilio, zina muda mtupu, au video iko mbali sana na urefu unaolengwa.", meets: "Mwanzo, kati na mwisho wazi; hakuna muda mtupu; ndani ya sekunde 5 za urefu unaolengwa.", exceeds: "Sekunde chache za kwanza zinavuta umakini na kila picha inastahili nafasi yake." },
      { name: "Uhariri laini", objective: "O3", notYet: "Jump cuts zinaonekana au mipito mingi ya kung'aa imetumika.", meets: "B-roll au picha za kando zinaficha miruko; si zaidi ya aina mbili za mpito.", exceeds: "Ina L-cut au J-cut safi na mchanganyiko mzuri wa picha za mbali, za kati na za karibu." },
      { name: "Sauti na manukuu", objective: "O4", notYet: "Sauti inakwaruza au ni ngumu kusikia, manukuu yana makosa, au muziki hauna ruhusa.", meets: "Sauti za watu wazi, muziki chini ya maongezi, manukuu sahihi, na muziki tu ambao mwanafunzi ameruhusiwa kuutumia.", exceeds: "Lebo za majina na kadi ya mwisho ziko wazi kwenye simu, na msanii ametajwa pale maktaba inapotaka." },
      { name: "Imewasilishwa na kuonyeshwa", objective: "O5", notYet: "Faili ina jina lisilo sahihi, haichezi, au maelezo ya portfolio hayapo.", meets: "MP4 yenye jina lililo wazi inayocheza kwenye kifaa kinacholengwa, imekaguliwa dhidi ya maelekezo ya kazi, pamoja na maelezo ya portfolio ya mistari minne.", exceeds: "Mwanafunzi alipata maoni na akawasilisha toleo lililorekebishwa, na maelezo yanasema nini kilibadilika." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoongeza video iliyokamilika kwenye portfolio au ombi la kazi ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaokamilisha kazi ya kuhariri ya kulipwa au ya kujitolea kwa biashara, timu, shule au shirika lisilo la faida ndani ya siku 90",
      "Wanafunzi wanaoendelea na kozi zaidi ya kuhariri au sifa rasmi kama Adobe Certified Professional au uthibitisho wa DaVinci Resolve"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu inayorekodi video, na klipu fupi 8 hadi 15 ambazo mwanafunzi alirekodi mwenyewe",
      "Programu ya bure ya kuhariri: DaVinci Resolve au Microsoft Clipchamp kwenye kompyuta, au CapCut au programu ya kuhariri iliyomo kwenye simu",
      "USB au hifadhi ya mtandaoni kwa nakala ya ziada",
      "Vifaa vya masikioni (earbuds) au headphones kukagua sauti",
      "Kama saa 2 kwa jumla: masomo, majaribio, na muda wa kuhariri kwa kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Katika maabara ya kompyuta, kagua kabla ya kozi kwamba programu iliyochaguliwa inasakinishwa na kufanya kazi kwenye kompyuta za programu; DaVinci Resolve inahitaji kompyuta yenye nguvu zaidi kuliko programu ya mtandaoni kama Clipchamp.",
      "Wape wanafunzi wasio na picha za video maelekezo mafupi ya kazi ya mazoezi na uwaruhusu warekodi kuzunguka jengo, kwa ruhusa ya kila aliye kwenye kamera.",
      "Kagua masharti ya umri ya kila programu kwa wanafunzi wadogo, na upate ruhusa ya mzazi au mlezi kwa yeyote aliye chini ya miaka 18 anayeonekana kwenye video.",
      "Menyu hubadilika mara kwa mara: onyesha vitendo (kuingiza, kufupisha, kugawanya, kutenganisha sauti, manukuu, kuhamisha) moja kwa moja katika programu ambayo kikundi kinatumia.",
      "Fanyeni onyesho fupi ambapo wanafunzi wanaonyesha video zao na kutoa maoni kwa kutumia mistari ya rubriki, mstari mmoja kwa wakati."
    ]
  }
};

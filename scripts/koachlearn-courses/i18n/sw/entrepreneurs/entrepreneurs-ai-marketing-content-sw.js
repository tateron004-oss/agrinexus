"use strict";

// Koach Learn course (Swahili translation of entrepreneurs/entrepreneurs-ai-marketing-content.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "entrepreneurs-ai-marketing-content-sw",
  lang: "sw",
  translationOf: "entrepreneurs-ai-marketing-content",
  category: "Entrepreneurs",
  name: "Masoko na Kutengeneza Maudhui kwa AI",
  skills: "Kumweleza mteja wako bora, Kuandika ofa iliyo wazi, Kupanga maudhui ya mwezi mmoja, Kutengeneza machapisho na picha kwa AI, Kuandika barua pepe ya masoko inayofuata sheria",
  outcome: "kumweleza mteja wako bora, kuandika ofa iliyo wazi, na kutumia AI kupanga na kutengeneza machapisho ya mitandao ya kijamii ya mwezi mmoja na barua pepe moja ya masoko, yote yakiwa ya kweli na yanayofuata sheria za Marekani za matangazo na barua pepe.",
  about: [
    "Kozi hii ni kwa wamiliki wa biashara wanaojua kwamba wanapaswa kufanya masoko lakini hawana muda, pesa za kulipa kampuni ya matangazo, wala mawazo. AI inaweza kusaidia katika yote matatu ukiipa mwelekeo sahihi.",
    "Utamweleza mteja unayemtaka, utaandika ofa inayomgusa, utapanga maudhui ya mwezi mmoja, utatengeneza machapisho na picha kwa zana za bure kama ChatGPT, Copilot, Gemini na Canva, na utaandika barua pepe ya masoko. Pia utajifunza sheria za msingi za Marekani: matangazo lazima yawe ya kweli, matangazo ya kulipwa lazima yawekwe wazi, maoni (reviews) ya uongo yamepigwa marufuku, na barua pepe za masoko lazima zifuate sheria ya CAN-SPAM.",
    "Kila somo linachukua kama dakika tano na linamalizika kwa kazi ya biashara yako mwenyewe. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Kozi hii inaeleza sheria kwa maneno rahisi; si ushauri wa kisheria."
  ],
  finalTask: "Tengeneza kifurushi cha masoko cha mwezi mmoja kwa biashara yako: maelezo ya aya moja ya mteja wako bora, ofa ya sentensi moja, kalenda ya maudhui ya machapisho 12, machapisho matatu yaliyokamilika yenye picha, na barua pepe moja ya masoko yenye kichwa cha kweli, anwani yako halisi ya mahali, na mstari wa kujiondoa (unsubscribe) unaofanya kazi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wamiliki wa biashara ndogo nchini Marekani wanaojua wanapaswa kufanya masoko lakini wana muda mchache, hawana bajeti ya kampuni ya matangazo na wana mawazo machache, kama waokaji mikate, wasafishaji, saluni, mafundi na wauzaji wa mtandaoni.",
    startingPoint: "Wanaweka machapisho kwenye mitandao ya kijamii mara kwa mara na huenda wana orodha ya barua pepe za wateja. Wachache wana maelezo ya mteja yaliyoandikwa, ofa au mpango wa maudhui, na wengi hawajui misingi ya FTC na CAN-SPAM.",
    gap: "Machapisho ya kubahatisha yanawafikia watu wasio sahihi, na AI inaweza kwa urahisi kutoa madai ya uongo, matokeo yanayoonekana ya kubuni au barua pepe zinazovunja sheria za Marekani. Wamiliki wanahitaji kuelekeza masoko kwa mteja halisi, kupanga maudhui ya kweli ya mwezi mmoja na kutuma barua pepe zinazofuata sheria, ili masoko yalete biashara bila matatizo ya kisheria au ya kuaminiwa.",
    constraints: [
      "Maneno rahisi; sheria zinaelezwa kwa urahisi na si kama ushauri wa kisheria",
      "Vifaa: simu au kompyuta yenye msaidizi wa AI wa bure na Canva",
      "Muda: kama dakika tano kwa kila somo, pamoja na kutengeneza machapisho ya biashara ya mmiliki mwenyewe",
      "Matangazo lazima yawe ya kweli, matangazo ya kulipwa yawekwe wazi, maoni ya uongo yamepigwa marufuku, na barua pepe lazima zifuate CAN-SPAM",
      "Hadithi na picha za wateja zinatumiwa tu kwa ruhusa yao"
    ],
    prerequisites: "\"Utangulizi wa AI kwa Wajasiriamali\". Kozi \"Zana za AI Ambazo Kila Mjasiriamali Anapaswa Kujua\" inasaidia kuhusu Canva."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia AI na angalau mazungumzo moja halisi na mteja au rekodi ya mauzo", action: "kuandika maelezo ya aya moja ya mteja wako bora", standard: "kila kisio likiwa limekaguliwa dhidi ya watu halisi" },
    { id: "O2", condition: "Ukipewa maelezo ya mteja wako", action: "kuandika ofa ya sentensi moja inayosema ni kwa ajili ya nani, wanapata nini na kwa nini ni muhimu", standard: "kila dai likiwa la kweli na linaloweza kuthibitishwa" },
    { id: "O3", condition: "Ukipewa ofa yako", action: "kutengeneza kalenda ya maudhui ya machapisho 12 ya mwezi mmoja kwa AI", standard: "yenye aina mbalimbali za machapisho kwenye jukwaa moja au mawili wanayotumia wateja wako, ikiwa imehifadhiwa na tarehe" },
    { id: "O4", condition: "Ukipewa mawazo matatu kutoka kwenye kalenda", action: "kutengeneza machapisho yaliyokamilika yenye maelezo ya AI uliyoyahariri na picha za Canva", standard: "ukitumia picha halisi inapowezekana na bila kubuni matokeo kamwe" },
    { id: "O5", condition: "Unapoomba maoni ya wateja au unapofanya kazi na watangazaji wa kulipwa", action: "kuandika ombi la maoni na matamko ya wazi yanayofuata sheria za FTC", standard: "ukiwaomba wateja wote, bila zawadi kwa alama nzuri, na ukitangaza wazi kila uhusiano wa malipo" },
    { id: "O6", condition: "Ukitumia AI kuandika rasimu ya barua pepe ya masoko", action: "kukagua barua pepe dhidi ya misingi ya CAN-SPAM", standard: "ikiwa na kichwa cha kweli, anwani yako halisi ya mahali na mstari wa kujiondoa unaofanya kazi" }
  ],
  chapters: [
    {
      name: "Sura 1: Mjue unayezungumza naye",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kumweleza mteja wako bora",
          minutes: 5,
          goal: "Andika maelezo ya aya moja ya mteja unayemtaka zaidi.",
          text: [
            "Kufanya masoko kwa \"kila mtu\" hakumfikii mtu yeyote. Mteja wako bora ni mtu anayehitaji unachouza, anayeweza kukilipia, na ambaye ni rahisi kwako kumfikia. Kwa mkate wa nyumbani, mteja bora anaweza kuwa \"wazazi wenye shughuli nyingi walio ndani ya maili 10 wanaoagiza keki za siku ya kuzaliwa mara mbili hadi nne kwa mwaka.\"",
            "AI inaweza kukusaidia kufikiri. Iambie unachouza na nani ananunua sasa, kisha uliza: \"Nisaidie kumweleza mteja wangu bora: hali yake, tatizo lake kubwa zaidi, anachohofia kabla ya kununua, na mahali anapotumia muda mtandaoni.\"",
            "AI inakisia kutokana na mifumo ya jumla. Kagua makisio yake dhidi ya wateja halisi: angalia nani amekununulia, soma ujumbe wao, na waulize wateja watatu kwa nini walikuchagua."
          ],
          steps: ["Andika unachouza na nani amekununulia hadi sasa.", "Iombe AI ikusaidie kueleza hali ya mteja bora, tatizo lake, hofu zake na mahali anapotumia muda.", "Kagua makisio hayo na wateja watatu halisi au rekodi zako za mauzo.", "Andika maelezo ya aya moja."],
          words: [["Mteja bora", "mtu anayehitaji zaidi unachouza, anayeweza kulipa, na ni rahisi kumfikia."], ["Maelezo ya mteja (profile)", "maelezo mafupi ya aina fulani ya mteja."]],
          slides: [
            { title: "\"Kila mtu\" si mteja", bullets: ["Anahitaji unachouza", "Anaweza kukilipia", "Ni rahisi kwako kumfikia"] },
            { title: "Iombe AI ikusaidie kueleza", bullets: ["Hali yake na tatizo lake kubwa zaidi", "Anachohofia kabla ya kununua", "Mahali anapotumia muda mtandaoni"] },
            { title: "Kagua na watu halisi", bullets: ["Angalia nani tayari amenunua", "Waulize wateja watatu kwa nini walikuchagua", "Kisha andika maelezo yako"] }
          ],
          tryIt: "Tumia msaidizi wa AI kuandika rasimu ya maelezo ya mteja wako bora, kisha yakague dhidi ya angalau mazungumzo moja halisi na mteja au rekodi zako za mauzo. Hifadhi aya ya mwisho.",
          youCanNow: "kumweleza mteja ambaye masoko yako yanamlenga, ukiwa umekagua na watu halisi.",
          quickCheck: [
            { objective: "O1", q: "Maelezo ya mteja bora ni nini?", options: ["Maelezo mafupi ya mteja unayetaka zaidi kumfikia", "Orodha ya kila mtu katika mji wako", "Orodha ya wateja wa mshindani wako", "Taarifa binafsi za mawasiliano za mteja"], answer: 0, why: "Maelezo haya yanamweleza mtu ambaye masoko yako yanamlenga." },
            { objective: "O1", q: "AI inasema wateja wako wengi wanatumia app moja, lakini rekodi zako za mauzo zinaonyesha vingine. Unafanya nini?", options: ["Unaiamini AI", "Unafuata kile rekodi zako halisi zinaonyesha", "Unatumia kila app", "Unaacha kufanya masoko"], answer: 1, why: "Wateja halisi na rekodi ni bora kuliko makisio ya AI." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuandika ofa iliyo wazi na ya kweli",
          minutes: 5,
          goal: "Andika ofa ya sentensi moja inayosema ni kwa ajili ya nani, wanapata nini na kwa nini ni muhimu.",
          text: [
            "Ofa inajibu maswali matatu haraka: Ni kwa ajili ya nani? Wanapata nini? Kwa nini wajali? Mfano: \"Wazazi wenye shughuli nyingi wa Decatur: keki za siku ya kuzaliwa za kuagiza, zinaletwa mlangoni kwako, ili sherehe iwe jambo moja pungufu la kuhangaikia.\"",
            "Ipe AI maelezo ya mteja wako na uulize: \"Andika ofa tano za sentensi moja kwa mteja huyu. Maneno rahisi, bila kujisifu kupita kiasi.\" Chagua iliyo bora na uihariri kwa sauti yako mwenyewe.",
            "Iweke ya kweli. Nchini Marekani, FTC (Tume ya Biashara ya Shirikisho) inasema matangazo lazima yawe ya kweli, yasipotoshe, na yawe na ushahidi. Usiseme \"bora mjini\", \"matokeo ya uhakika\" au \"inaendeshwa na AI\" isipokuwa ni kweli na unaweza kuthibitisha."
          ],
          steps: ["Bandika maelezo ya mteja wako kwenye msaidizi wa AI.", "Omba ofa tano za sentensi moja kwa maneno rahisi.", "Chagua moja na uihariri isikike kama wewe.", "Ondoa dai lolote usiloweza kuthibitisha."],
          words: [["Ofa", "unachouza, ni kwa ajili ya nani na kwa nini ni muhimu, kikisemwa kwa urahisi."], ["Dai", "kitu ambacho tangazo lako linasema ni kweli."]],
          slides: [
            { title: "Ofa inajibu maswali matatu", bullets: ["Ni kwa ajili ya nani?", "Wanapata nini?", "Kwa nini wajali?"] },
            { title: "Iache AI ikupe chaguo", bullets: ["Bandika maelezo ya mteja wako", "Omba ofa tano za sentensi moja", "Chagua moja na uihariri kwa sauti yako"] },
            { title: "Iweke ya kweli", bullets: ["FTC: matangazo lazima yawe ya kweli na yasipotoshe", "Madai yanahitaji ushahidi", "Usiseme \"uhakika\" au \"bora\" usiloweza kuthibitisha"] }
          ],
          sources: [{ name: "FTC: Advertising and Marketing Basics", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Iombe AI ofa tano kutokana na maelezo ya mteja wako, chagua moja, ihariri, na hakikisha kila dai ndani yake ni la kweli na linaweza kuthibitishwa.",
          youCanNow: "kuandika ofa fupi na ya kweli inayomgusa mteja wako bora.",
          quickCheck: [
            { objective: "O2", q: "Kila dai katika ofa yako lazima liwe vipi?", options: ["Kubwa kadiri iwezekanavyo", "Limenakiliwa kutoka kwa mshindani", "La kweli na linaloweza kuthibitishwa", "Limeandikwa na AI peke yake"], answer: 2, why: "Sheria za FTC zinataka madai ya kweli yenye ushahidi." },
            { objective: "O2", q: "AI inaandika \"huduma ya haraka zaidi mjini\" lakini huna ushahidi. Unafanya nini?", options: ["Unaliacha", "Unaongeza alama ya mshangao", "Unaliweka kwa herufi ndogo", "Unaliondoa au kuweka kitu unachoweza kuthibitisha"], answer: 3, why: "Madai usiyoweza kuthibitisha hayapaswi kuwa katika ofa yako." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kupanga maudhui ya mwezi mmoja",
          minutes: 5,
          goal: "Tumia AI kujenga kalenda ya maudhui ya machapisho 12 ya mwezi mmoja.",
          text: [
            "Kuweka machapisho mara tatu kwa wiki kwa mwezi mmoja ni machapisho 12. Mchanganyiko rahisi unafanya yavutie: fundisha kitu chenye manufaa, onyesha kazi yako au timu yako, shiriki hadithi ya mteja (kwa ruhusa yake), na toa ofa yako.",
            "Uliza AI: \"Tengeneza kalenda ya maudhui ya machapisho 12 kwa [biashara] kwa ajili ya [mteja]. Mchanganyiko: vidokezo 4 vya manufaa, 3 vya nyuma ya pazia, hadithi 2 za wateja, machapisho 3 ya ofa. Kila moja liwe na tarehe, wazo la mstari mmoja na jukwaa.\"",
            "Chagua majukwaa ambayo mteja wako tayari anatumia muda (kutoka kwenye maelezo yako). Ni bora kuweka machapisho mazuri kwenye jukwaa moja au mawili kuliko mabaya kwenye matano."
          ],
          steps: ["Chagua jukwaa moja au mawili ambayo mteja wako anatumia muda.", "Iombe AI kalenda ya machapisho 12 yenye aina mbalimbali.", "Hariri mawazo yasiyofaa biashara yako.", "Weka kalenda kwenye jedwali (spreadsheet) au hati yenye tarehe."],
          words: [["Kalenda ya maudhui", "mpango unaoorodhesha utakachochapisha na lini."], ["Jukwaa", "tovuti au app ya mitandao ya kijamii, kama Facebook, Instagram, TikTok au LinkedIn."]],
          slides: [
            { title: "Machapisho 12 = 3 kwa wiki kwa mwezi mmoja", bullets: ["Vidokezo vya manufaa", "Nyuma ya pazia", "Hadithi za wateja (kwa ruhusa)", "Ofa yako"] },
            { title: "Iombe AI kalenda", bullets: ["Biashara + mteja + aina mbalimbali za machapisho", "Tarehe, wazo la mstari mmoja na jukwaa kwa kila moja"] },
            { title: "Chagua majukwaa yako", bullets: ["Mahali mteja wako tayari yupo", "Moja au mawili yaliyofanywa vizuri ni bora kuliko matano mabaya"] }
          ],
          tryIt: "Iache AI ijenge kalenda yako ya machapisho 12, ihariri ifae biashara yako, na uihifadhi na tarehe kwenye jedwali au hati.",
          youCanNow: "kupanga maudhui mbalimbali ya mwezi mmoja kwa majukwaa wanayotumia wateja wako.",
          quickCheck: [
            { objective: "O3", q: "Mchanganyiko mzuri wa maudhui una nini?", options: ["Vidokezo, nyuma ya pazia, hadithi za wateja na ofa", "Ofa za mauzo tu", "Vichekesho (memes) tu", "Chapisho lilelile kila siku"], answer: 0, why: "Mchanganyiko unawafanya watu wavutiwe na unajenga imani." },
            { objective: "O3", q: "Wateja wako wengi wako kwenye jukwaa moja. Unachapisha wapi?", options: ["Kwenye kila jukwaa kwa wakati mmoja", "Anza mahali wateja wako tayari wapo", "Kwenye jukwaa jipya tu", "Hakuna mahali, hadi upate muda zaidi"], answer: 1, why: "Jukwaa moja au mawili ambapo wateja tayari wapo yanatosha kuanza." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Mjue unayezungumza naye",
        questions: [
          { objective: "O1", q: "Maelezo yapi ni bora zaidi ya mteja bora wa mkate wa nyumbani?", options: ["Kila mtu anayekula", "Wazazi wenye shughuli nyingi ndani ya maili 10 wanaoagiza keki za siku ya kuzaliwa mara chache kwa mwaka", "Watu walio kwenye intaneti", "Maduka mengine ya mikate"], answer: 1, why: "Yanataja mtu mahususi, hitaji lake na jinsi ya kumfikia." },
          { objective: "O1", q: "AI ilikisia kile wateja wako wanachohofia. Unapaswa kufanya nini?", options: ["Kuwapuuza wateja wako", "Kuiamini kabisa", "Kuichapisha kama ukweli", "Kuikagua dhidi ya wateja halisi au rekodi za mauzo"], answer: 3, why: "AI inakisia kutokana na mifumo ya jumla; wateja halisi wanathibitisha." },
          { objective: "O2", q: "Ofa inapaswa kujibu maswali gani matatu?", options: ["Ni kwa ajili ya nani, wanapata nini, kwa nini wajali", "Una umri gani, unaishi wapi, nywila yako ni nini", "Hali ya hewa ikoje, ni saa ngapi, ni tarehe gani", "Washindani wako ni nani, wanatoza kiasi gani, wako wapi"], answer: 0, why: "Maswali hayo matatu yanafanya ofa iwe wazi." },
          { objective: "O2", q: "AI iliandika \"Matokeo ya uhakika au urudishiwe pesa\" katika ofa yako, lakini hurudishi pesa. Unafanya nini?", options: ["Unaliongeza ukubwa", "Unaliacha kwa sababu linasikika vizuri", "Unaliondoa", "Unaongeza pia \"inaendeshwa na AI\""], answer: 2, why: "Matangazo lazima yawe ya kweli; ondoa madai usiyoweza kuyatimiza." },
          { objective: "O3", q: "Biashara ndogo inapaswa kuanza na majukwaa mangapi?", options: ["Hakuna", "Kila jukwaa lililopo", "Moja au mawili ambapo wateja wake tayari wapo", "Yale tu ambayo washindani wake wanayaepuka"], answer: 2, why: "Kufanya vizuri kwenye moja au mawili ni bora kuliko kujitawanya." }
        ]
      }
    },
    {
      name: "Sura 2: Tengeneza, chapisha na fuata sheria",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kutengeneza machapisho na picha kwa AI",
          minutes: 5,
          goal: "Geuza mawazo ya kalenda kuwa machapisho yaliyokamilika yenye maelezo na picha.",
          text: [
            "Kwa kila chapisho, omba msaidizi wa mazungumzo akuandikie maelezo (caption): \"Andika maelezo ya Instagram kwa wazo hili: [wazo]. Kwa [mteja]. Ya kirafiki, chini ya maneno 80, swali moja la kukaribisha maoni, na mwito wa kuchukua hatua.\" Omba matoleo mawili au matatu na uchague moja.",
            "Tengeneza picha kwenye Canva kutoka kwenye kiolezo (template), ukitumia rangi za chapa yako. Tumia picha zako mwenyewe unapoweza; picha halisi za kazi yako zinajenga imani. Ukitumia picha iliyotengenezwa na AI, ikague kama ina makosa na usiifanye kamwe ionekane kama mteja halisi au matokeo halisi ambayo hukuyatoa.",
            "Kwa mujibu wa mwongozo wa Ofisi ya Hakimiliki ya Marekani (US Copyright Office), kitu kilichotengenezwa na AI peke yake hakilindwi na hakimiliki, lakini chaguo zako mwenyewe za ubunifu na marekebisho yako yanaweza kulindwa. Ikiwa kumiliki nembo yako au sanaa kuu ya chapa yako ni muhimu, mhusishe mbunifu (designer) wa binadamu na zungumza na wakili."
          ],
          steps: ["Chagua chapisho kutoka kwenye kalenda yako.", "Iombe AI matoleo mawili au matatu ya maelezo na uchague moja.", "Tengeneza picha kwenye Canva kutoka kiolezo, na picha yako mwenyewe ukiweza.", "Kagua tahajia, ukweli na picha.", "Hifadhi chapisho likiwa tayari kuchapishwa."],
          words: [["Maelezo (caption)", "maandishi yanayoambatana na chapisho la mitandao ya kijamii."], ["Hakimiliki", "haki ya kisheria ya kudhibiti kunakiliwa kwa kazi ya ubunifu."]],
          slides: [
            { title: "Maelezo kwa AI", bullets: ["Toa wazo na mteja", "Omba matoleo mafupi 2-3", "Weka swali na mwito wa kuchukua hatua"] },
            { title: "Picha kwenye Canva", bullets: ["Anza na kiolezo", "Rangi za chapa yako", "Picha zako mwenyewe zinajenga imani"] },
            { title: "Picha za AI: kuwa mwangalifu", bullets: ["Kagua kama kuna makosa", "Usibuni kamwe mteja au matokeo"] },
            { title: "Hakimiliki na AI", bullets: ["Kitu kilichotengenezwa na AI peke yake hakilindwi", "Marekebisho yako ya ubunifu yanaweza kulindwa", "Kwa nembo, mhusishe mbunifu na wakili"] }
          ],
          sources: [{ name: "US Copyright Office: Copyright and Artificial Intelligence", url: "https://www.copyright.gov/ai/" }, { name: "US Copyright Office: Part 2 Copyrightability report announcement", url: "https://www.copyright.gov/newsnet/2025/1060.html" }],
          tryIt: "Geuza mawazo matatu kutoka kwenye kalenda yako kuwa machapisho yaliyokamilika: maelezo yaliyosaidiwa na AI ambayo umeyahariri, na picha ya Canva yenye picha yako mwenyewe inapowezekana.",
          youCanNow: "kutengeneza machapisho yaliyokamilika ya mitandao ya kijamii yenye maelezo na picha za AI, bila kubuni matokeo.",
          quickCheck: [
            { objective: "O4", q: "Nini kinafanya ombi zuri la maelezo kwa AI?", options: ["Tu \"andika maelezo\"", "Nywila yako", "Wazo, mteja, urefu na mwito wa kuchukua hatua", "Maelezo ya mshindani ya kunakili"], answer: 2, why: "Mwelekeo mahususi unakupa maelezo unayoweza kutumia." },
            { objective: "O4", q: "AI inatengeneza picha nzuri ya kabla na baada ya jiko ambalo hukulisafisha. Unafanya nini?", options: ["Unaichapisha kama kazi yako", "Unaichapisha bila maelezo", "Unaihariri kidogo na kuichapisha", "Huitumii; tumia picha halisi ya kazi yako"], answer: 3, why: "Picha hazipaswi kuonyesha matokeo ambayo hukuyatoa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Maoni, ushuhuda na matangazo ya kulipwa: sheria",
          minutes: 5,
          goal: "Tumia maoni ya wateja na matangazo ya kulipwa kwa njia inayofuata sheria za FTC.",
          text: [
            "Maoni halisi ya wateja ni masoko yenye nguvu. Maoni ya uongo ni kinyume cha sheria. Sheria ya FTC kuhusu maoni ya uongo inakataza kutengeneza, kununua au kuuza maoni na ushuhuda wa uongo, pamoja na maoni yaliyotengenezwa na AI yanayojifanya kutoka kwa watu wasiokuwepo. Pia inakataza kutoa zawadi kwa maoni mazuri tu.",
            "UNAWEZA kuwaomba wateja walioridhika na wasioridhika vilevile waache maoni ya kweli, na unaweza kushiriki maoni halisi kwa ruhusa. Usitumie AI kuandika maoni, na usihariri maoni ili kubadilisha maana yake.",
            "Ukimlipa mtu au kumpa bidhaa bure ili akutangaze, uhusiano huo lazima uwekwe wazi, kwa mfano \"#ad\" au \"Sponsored\" mwanzoni mwa chapisho, na ndani ya video yenyewe kwa video. Wewe unawajibika kwa kile watangazaji wako wanachosema kwa niaba yako."
          ],
          steps: ["Waombe wateja wote maoni ya kweli, si walioridhika tu.", "Shiriki maoni halisi kwa ruhusa tu na bila kubadilisha maana yake.", "Usitumie AI kamwe kuandika maoni.", "Mtu yeyote unayemlipa au kumpa zawadi aiweke wazi, kama \"#ad\" mwanzoni."],
          words: [["Ushuhuda", "maneno ya mteja kuhusu biashara yako yanayotumiwa katika masoko."], ["Tangazo la mtu (endorsement)", "ujumbe ambao watu watafikiri unaonyesha maoni ya kweli ya mtu mwingine, kama chapisho la mshawishi (influencer)."], ["Kuweka wazi", "kuwaambia watu waziwazi."]],
          slides: [
            { title: "Maoni ya uongo yamepigwa marufuku", bullets: ["Hakuna kununua, kuuza au kuandika maoni ya uongo", "Pamoja na maoni ya uongo yaliyotengenezwa na AI", "Hakuna zawadi kwa maoni mazuri tu"] },
            { title: "Unachoweza kufanya", bullets: ["Mwombe kila mteja maoni ya kweli", "Shiriki maoni halisi kwa ruhusa", "Usibadilishe maana ya maoni"] },
            { title: "Tangazo la kulipwa au la zawadi", bullets: ["Lazima liwekwe wazi", "\"#ad\" au \"Sponsored\" mwanzoni", "Ndani ya video yenyewe kwa video"] }
          ],
          sources: [{ name: "FTC: Final rule banning fake reviews and testimonials (press release)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" }, { name: "FTC: Endorsement Guides, What People Are Asking", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" }],
          tryIt: "Tumia AI kuandika rasimu ya ujumbe mfupi na wa kweli unaowaomba wateja wa hivi karibuni maoni (si walioridhika tu, na bila zawadi kwa alama nzuri). Uhariri na uuhifadhi.",
          youCanNow: "kukusanya na kutumia maoni ya wateja na matangazo ya kulipwa kwa njia ya kweli na ya kisheria.",
          quickCheck: [
            { objective: "O5", q: "Ombi lipi la maoni linafuata sheria za FTC?", options: ["Kuwaomba wateja wote wa hivi karibuni maoni ya kweli", "Kutoa punguzo kwa maoni ya nyota tano tu", "Kuandika maoni wewe mwenyewe", "Kuwaomba wateja walioridhika tu"], answer: 0, why: "Kumwomba kila mtu maoni ya kweli, bila zawadi kwa alama nzuri, kunaruhusiwa." },
            { objective: "O5", q: "Rafiki anapata bidhaa bure ili achapishe kuhusu duka lako. Unamwomba afanye nini?", options: ["Aficha kwamba alipata chochote", "Aweke wazi waziwazi, kama \"#ad\" mwanzoni", "Achapishe kwenye maoni (comments) tu", "Atumie jina la uongo"], answer: 1, why: "Uhusiano wa malipo au zawadi lazima uwekwe wazi waziwazi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuandika barua pepe ya masoko inayofuata CAN-SPAM",
          minutes: 5,
          goal: "Andika kwa AI barua pepe ya masoko inayotimiza misingi ya CAN-SPAM.",
          text: [
            "Barua pepe inawafikia watu ambao tayari wanakujua. Uliza AI: \"Andika barua pepe fupi ya masoko kwa wateja wa zamani wa [biashara] kuhusu [ofa]. Ya kirafiki, chini ya maneno 150, mwito mmoja wazi wa kuchukua hatua, na machaguo matatu ya kweli ya kichwa cha barua.\"",
            "Nchini Marekani, sheria ya CAN-SPAM inahusu barua pepe za kibiashara. Mwongozo wa FTC unaorodhesha misingi: taarifa sahihi za \"From\" (mtumaji), kichwa kisichodanganya, kuweka wazi kwamba ni tangazo, anwani yako halali ya posta ya mahali, na njia wazi ya kujiondoa. Lazima utimize maombi ya kujiondoa ndani ya siku 10 za kazi. Adhabu zinaweza kuwa kubwa kwa kila barua pepe, kwa hiyo kagua ukurasa wa FTC.",
            "Tuma barua pepe tu kwa watu waliokupa anwani zao na wakakubali kupokea habari kutoka kwako, na tumia huduma ya barua pepe inayoshughulikia kujiondoa kwa niaba yako. Nchi nyingine zina sheria zao; zikague ukiwatumia barua pepe wateja walio nje ya nchi."
          ],
          steps: ["Iombe AI barua pepe na vichwa vitatu vya kweli.", "Kagua kila ukweli na kila dai.", "Hakikisha inaonyesha jina la biashara yako, anwani yako halisi ya mahali na kiungo cha kujiondoa.", "Tuma tu kwa watu waliokubali kupokea habari kutoka kwako.", "Timiza maombi ya kujiondoa ndani ya siku 10 za kazi."],
          words: [["Sheria ya CAN-SPAM", "sheria ya Marekani yenye kanuni za barua pepe za kibiashara (za masoko)."], ["Kujiondoa (opt out)", "kuomba kuacha kupokea ujumbe; unsubscribe."]],
          slides: [
            { title: "Iandike kwa AI", bullets: ["Fupi, ya kirafiki, mwito mmoja wa kuchukua hatua", "Vichwa vitatu vya kweli vya kuchagua"] },
            { title: "Misingi ya CAN-SPAM (FTC)", bullets: ["Mstari sahihi wa From, kichwa cha kweli", "Weka wazi kwamba ni tangazo", "Anwani yako halisi ya posta", "Njia wazi ya kujiondoa"] },
            { title: "Kujiondoa", bullets: ["Timiza ndani ya siku 10 za kazi", "Tumia huduma ya barua pepe inayoshughulikia kujiondoa"] },
            { title: "Tuma kwa waliokubali tu", bullets: ["Wateja wa zamani na waliojiandikisha", "Nchi nyingine zina sheria zao"] }
          ],
          sources: [{ name: "FTC: CAN-SPAM Act Compliance Guide for Business", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }],
          tryIt: "Kazi ya mwisho: andika barua pepe yako ya masoko kwa AI, ikague dhidi ya misingi ya CAN-SPAM (kichwa cha kweli, imewekwa wazi kuwa tangazo, anwani, kujiondoa), na uiweke pamoja na maelezo ya mteja, ofa, kalenda na machapisho matatu kama kifurushi chako cha masoko cha mwezi mmoja.",
          youCanNow: "kupanga, kutengeneza na kutuma masoko ya kweli yanayofuata sheria za Marekani za matangazo na barua pepe.",
          quickCheck: [
            { objective: "O6", q: "Barua pepe ya masoko ya CAN-SPAM lazima iwe na nini?", options: ["Kuponi", "Picha", "Anwani halali ya posta ya mahali", "Namba ya simu ya nyumbani kwako"], answer: 2, why: "CAN-SPAM inataka anwani halali ya posta ya mahali." },
            { objective: "O6", q: "Ulinunua orodha ya anwani za barua pepe kutoka kwa mtu usiyemjua. Unafanya nini?", options: ["Unawatumia wote barua pepe", "Unawatumia nusu yao", "Unawaongeza kimya kimya kwenye jarida lako", "Huitumii; tuma tu kwa watu waliokubali"], answer: 3, why: "Tuma barua pepe za masoko kwa watu waliokupa anwani zao na wakakubali." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Tengeneza, chapisha na fuata sheria",
        questions: [
          { objective: "O4", q: "Picha ipi inajenga imani zaidi katika chapisho?", options: ["Picha halisi ya kazi yako mwenyewe", "Picha ya AI ya mteja wa kubuni aliye na furaha", "Picha ya mshindani", "Picha ya hisa (stock) isiyo wazi"], answer: 0, why: "Picha halisi za kazi halisi zinajenga imani; wateja wa kubuni wanapotosha." },
          { objective: "O4", q: "Kwa mujibu wa Ofisi ya Hakimiliki ya Marekani, kitu kilichotengenezwa na AI peke yake:", options: ["Kinapata alama ya biashara moja kwa moja", "Ni chako kila wakati", "Ni cha mteja wako", "Hakilindwi na hakimiliki"], answer: 3, why: "Hakimiliki inalinda kazi ya binadamu; marekebisho yako ya ubunifu yanaweza kulindwa." },
          { objective: "O5", q: "Je, unaweza kutumia AI kuandika maoni ya wateja kwa biashara yako?", options: ["Ndiyo, yakisikika halisi", "Hapana, maoni ya uongo yamepigwa marufuku na FTC", "Ndiyo, ukiyachapisha polepole", "Mwishoni mwa wiki tu"], answer: 1, why: "Sheria ya FTC inakataza maoni ya uongo, pamoja na yaliyotengenezwa na AI." },
          { objective: "O5", q: "Ulimpa mshawishi (influencer) bidhaa bure ili achapishe kukuhusu. Nini lazima kifanyike?", options: ["Uhusiano lazima uwekwe wazi waziwazi, kama \"#ad\" mwanzoni", "Hakuna kitu", "Uufiche kwenye maoni (comments)", "Uuweke mwishoni mwa maelezo marefu"], answer: 0, why: "Uhusiano wa kimaslahi lazima uwekwe wazi na uonekane kwa urahisi." },
          { objective: "O6", q: "Chini ya CAN-SPAM, lazima utimize ombi la kujiondoa kwa haraka kiasi gani?", options: ["Kamwe", "Ndani ya mwaka mmoja", "Ndani ya siku 10 za kazi", "Tu wakiomba mara mbili"], answer: 2, why: "Mwongozo wa FTC unasema maombi ya kujiondoa lazima yatimizwe ndani ya siku 10 za kazi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Masoko na Kutengeneza Maudhui kwa AI",
    questions: [
      { objective: "O1", q: "Mteja wako bora ni mtu ambaye:", options: ["Anaishi popote duniani", "Anahitaji unachouza, anaweza kulipa, na ni rahisi kumfikia", "Tayari anakufanyia kazi", "Ni mshindani wako"], answer: 1, why: "Hiyo ndiyo maana inayotumiwa katika kozi." },
      { objective: "O1", q: "Ombi lipi kwa AI linasaidia kumweleza mteja wako bora?", options: ["\"Tafuta anwani za nyumba zao.\"", "\"Niandikie kodi zangu.\"", "\"Buni maoni.\"", "\"Eleza hali yao, tatizo lao kubwa, hofu zao na mahali wanapotumia muda mtandaoni.\""], answer: 3, why: "Maswali hayo yanajenga maelezo yenye manufaa." },
      { objective: "O1", q: "Baada ya AI kuandika rasimu ya maelezo ya mteja, unapaswa:", options: ["Kuyauza", "Kuyachapisha hadharani", "Kutoyabadilisha kamwe", "Kuyakagua dhidi ya wateja halisi"], answer: 3, why: "AI inakisia; wateja halisi wanathibitisha." },
      { objective: "O2", q: "Ipi ni ofa iliyo wazi?", options: ["\"Tunafanya mambo.\"", "\"Wazazi wenye shughuli nyingi wa Decatur: keki za siku ya kuzaliwa za kuagiza zinaletwa, ili sherehe iwe hangaiko moja pungufu.\"", "\"Bora kuliko zote, uhakika!\"", "\"Tupigie simu.\""], answer: 1, why: "Inasema nani, nini na kwa nini." },
      { objective: "O2", q: "Chini ya sheria za FTC, madai ya matangazo lazima yawe:", options: ["Yameandikwa na AI", "Ya kuchekesha", "Ya kweli, yasiyopotosha na yenye ushahidi", "Marefu sana"], answer: 2, why: "Hiki ndicho kiwango cha msingi cha ukweli katika matangazo." },
      { objective: "O2", q: "Je, uiite huduma yako \"inaendeshwa na AI\" ikiwa haitumii AI?", options: ["Hapana, hilo ni dai la uongo", "Ndiyo, linasikika la kisasa", "Kwa herufi ndogo tu", "Kwenye mitandao ya kijamii tu"], answer: 0, why: "Madai ya uongo kuhusu AI ni matangazo ya udanganyifu." },
      { objective: "O3", q: "Kalenda ya machapisho 12 kwa mwezi mmoja ni kama:", options: ["Machapisho kumi na mbili kwa siku", "Chapisho moja kwa mwezi", "Machapisho matatu kwa wiki", "Chapisho moja kwa mwaka"], answer: 2, why: "Machapisho 12 katika wiki nne ni matatu kwa wiki." },
      { objective: "O3", q: "Mchanganyiko mzuri wa maudhui una:", options: ["Vidokezo, nyuma ya pazia, hadithi za wateja na ofa", "Machapisho ya mauzo tu", "Vichekesho (memes) tu", "Habari za washindani tu"], answer: 0, why: "Mchanganyiko unawafanya wafuasi wavutiwe." },
      { objective: "O3", q: "Hadithi za wateja zinapaswa kushirikiwa:", options: ["Bila kuuliza", "Kwa ruhusa ya mteja", "Pamoja na namba yake ya simu", "Tu kama AI iliziandika"], answer: 1, why: "Ruhusa inawaheshimu wateja na inazuia matatizo." },
      { objective: "O4", q: "Ombi zuri la maelezo lina:", options: ["Maelezo ya mtu mwingine", "Taarifa zako za benki", "Neno moja tu", "Wazo, mteja, urefu na mwito wa kuchukua hatua"], answer: 3, why: "Maelezo yaliyo wazi yanaleta maelezo (caption) yanayotumika." },
      { objective: "O4", q: "Unapotumia picha iliyotengenezwa na AI, hupaswi:", options: ["Kuifanya ionekane kama matokeo halisi ambayo hukuyatoa", "Kuikagua kama ina makosa", "Kutumia rangi za chapa yako", "Kuongeza nembo yako"], answer: 0, why: "Matokeo ya kubuni yanawapotosha wateja." },
      { objective: "O4", q: "Nani anaweza kusaidia ikiwa kumiliki sanaa ya nembo yako ni muhimu?", options: ["Hakuna mtu", "Zana ya picha ya AI tu", "Mfuasi yeyote tu", "Mbunifu wa binadamu na wakili"], answer: 3, why: "Sanaa iliyotengenezwa na AI peke yake hailindwi na hakimiliki." },
      { objective: "O5", q: "Sheria ya FTC kuhusu maoni ya uongo pia inakataza:", options: ["Kuwashukuru wateja", "Kuwaomba wateja maoni ya kweli", "Kutoa zawadi kwa maoni mazuri tu", "Kujibu maoni"], answer: 2, why: "Zawadi zinazotegemea maoni mazuri zimepigwa marufuku." },
      { objective: "O5", q: "Desturi ipi ya maoni inaruhusiwa?", options: ["Kununua maoni 50 ya nyota tano", "Kuwaomba wateja wote maoni ya kweli", "Kuandika maoni kwa AI", "Kuhariri maoni mabaya yasikike mazuri"], answer: 1, why: "Maoni ya kweli kutoka kwa wateja halisi ni sawa." },
      { objective: "O5", q: "\"#ad\" inapaswa kuwekwa wapi kwenye chapisho la kulipwa?", options: ["Haiwekwi popote", "Imefichwa kwenye maoni (comments)", "Mwishoni kabisa mwa maelezo marefu", "Mwanzoni, mahali watu wataiona"], answer: 3, why: "Matamko ya wazi lazima yaonekane kwa urahisi." },
      { objective: "O5", q: "Kwa video ya kulipwa, tamko la wazi linapaswa kuwa:", options: ["Kwenye kiungo tu", "Kwenye maelezo ya chini tu", "Ndani ya video yenyewe", "Halihitajiki"], answer: 2, why: "FTC inasema matamko ya wazi yanapaswa kuwa ndani ya video." },
      { objective: "O6", q: "CAN-SPAM inataka barua pepe za masoko ziwe na:", options: ["Anwani halali ya posta ya mahali", "Namba ya akaunti yako ya benki", "Anwani ya mteja", "Nywila yako"], answer: 0, why: "Anwani ya mahali ni mojawapo ya misingi." },
      { objective: "O6", q: "Kichwa cha barua pepe ya masoko lazima kiwe:", options: ["Kwa herufi kubwa zote", "Kisichodanganya", "Siri", "Kimeandikwa na AI"], answer: 1, why: "Vichwa vya kudanganya haviruhusiwi." },
      { objective: "O6", q: "Nani anapaswa kupokea barua pepe zako za masoko?", options: ["Kila anwani ya barua pepe unayoweza kupata", "Watu waliokupa anwani zao na wakakubali", "Wateja wa mshindani wako", "Watu wasiojulikana kutoka orodha uliyonunua"], answer: 1, why: "Tuma barua pepe kwa watu waliokubali kupokea habari kutoka kwako." },
      { objective: "O6", q: "Ukiwatumia barua pepe wateja walio nchi nyingine, unapaswa:", options: ["Kukagua pia sheria za nchi hiyo", "Kudhani sheria za Marekani zinatosha kwa kila kitu", "Kuacha kufanya masoko", "Kuondoa anwani yako"], answer: 0, why: "Kila nchi inaweza kuwa na sheria zake za barua pepe." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 3, 4, 6, 9, 10, 12, 14, 16, 17]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Mteja bora", objective: "O1", notYet: "Ni pana mno, kama \"kila mtu\", au hayajakaguliwa dhidi ya wateja halisi.", meets: "Aya moja kuhusu ni nani, tatizo lao na mahali wanapotumia muda, imekaguliwa na watu halisi.", exceeds: "Inaonyesha makisio gani ya AI yalikuwa makosa na yakarekebishwa." },
      { name: "Ofa", objective: "O2", notYet: "Inakosa nani, nini au kwa nini, au ina dai lisiloweza kuthibitishwa.", meets: "Sentensi moja yenye ni kwa ajili ya nani, wanapata nini na kwa nini ni muhimu, yote ya kweli.", exceeds: "Inatumia maneno ya mteja mwenyewe kutoka mazungumzo halisi." },
      { name: "Kalenda ya maudhui", objective: "O3", notYet: "Machapisho chini ya 12, hakuna tarehe, au aina moja tu ya chapisho.", meets: "Machapisho 12 yenye tarehe na aina mbalimbali kwenye jukwaa moja au mawili.", exceeds: "Kila chapisho linaunganishwa na ofa au tatizo la mteja." },
      { name: "Machapisho yaliyokamilika", objective: "O4", notYet: "Maelezo hayajahaririwa, au picha zinaonyesha matokeo ambayo hayakutolewa.", meets: "Machapisho matatu yenye maelezo yaliyohaririwa, picha na mwito wa kuchukua hatua, picha za kweli.", exceeds: "Inatumia picha halisi za kazi ya mmiliki, kwa ruhusa ya mteja yeyote anayeonekana." },
      { name: "Barua pepe inayofuata sheria", objective: "O6", notYet: "Inakosa kichwa cha kweli, anwani au mstari wa kujiondoa.", meets: "Kichwa cha kweli, imewekwa wazi kuwa tangazo, anwani ya mahali na kujiondoa kunakofanya kazi.", exceeds: "Pia inaeleza jinsi maombi ya kujiondoa yatashughulikiwa ndani ya siku 10 za kazi." }
    ]
  },
  evaluation: {
    results: [
      "Wamiliki wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wamiliki wanaochapisha angalau machapisho manane yaliyopangwa ndani ya siku 30 (utafiti wa kufuatilia)",
      "Maulizo mapya ya wateja au mauzo ambayo mmiliki anayahusisha na kifurushi cha masoko",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya wajasiriamali ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye msaidizi wa AI wa bure na akaunti ya bure ya Canva",
      "Picha halisi za kazi yako na mazungumzo moja halisi na mteja au rekodi ya mauzo",
      "Jedwali (spreadsheet) au hati kwa ajili ya kalenda ya maudhui",
      "Kama dakika 60 hadi 75 kwa jumla kwa masomo, kazi, majaribio na kifurushi cha masoko"
    ],
    facilitatorNotes: [
      "Wamiliki wamhoji mteja mmoja halisi kabla ya Somo la 1 ili maelezo ya mteja yawe na msingi halisi.",
      "Pitieni kila ofa na kila chapisho wawili wawili, mkizungushia duara dai lolote lisiloweza kuthibitishwa.",
      "Eleza kwamba kozi inahusu sheria za msingi za Marekani kwa maneno rahisi na si ushauri wa kisheria.",
      "Wakumbushe wamiliki kupata ruhusa kabla ya kushiriki hadithi au picha za wateja.",
      "Pima kifurushi cha masoko kwa rubriki, mstari mmoja wa Bado kwa wakati."
    ]
  }
};

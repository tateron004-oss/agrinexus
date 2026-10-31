"use strict";

// Koach Learn course (Swahili translation of entrepreneurs/entrepreneurs-ai-ecommerce.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "entrepreneurs-ai-ecommerce-sw",
  lang: "sw",
  translationOf: "entrepreneurs-ai-ecommerce",
  category: "Entrepreneurs",
  name: "Biashara Mtandaoni kwa Msaada wa AI",
  skills: "Kutafiti soko dogo la bidhaa, Kuandika maelezo ya bidhaa kwa AI, Kutengeneza picha za bidhaa, Kuweka sera za usafirishaji na kurudisha bidhaa, Kujibu wateja kwa msaada wa AI, Kutumia barua pepe na maoni ya wateja kwa njia halali",
  outcome: "kutafiti soko dogo la bidhaa, kutumia AI kuandika maelezo ya kweli ya bidhaa na kutengeneza picha safi za bidhaa, kuweka sera za usafirishaji na kurudisha bidhaa zinazofuata kanuni ya FTC ya maagizo kwa barua, na kuandaa majibu kwa wateja, barua pepe za kufuatilia na maombi ya maoni kwa msaada wa AI yanayofuata sheria za Marekani.",
  about: [
    "Kuanza kuuza mtandaoni ni rahisi kuliko zamani: unaweza kuuza kupitia duka lako mwenyewe (kwenye majukwaa kama Shopify, Square Online au Wix), kwenye masoko ya mtandaoni (Etsy, Amazon, eBay), au kwenye maduka ya mitandao ya kijamii. AI inaweza kusaidia karibu kila hatua, kuanzia kuchagua soko dogo hadi kuandika maelezo ya bidhaa hadi kujibu wateja.",
    "Kozi hii ni kwa watu wanaoanza au kukuza duka la mtandaoni. Katika Sura 1 utatafiti soko dogo, utaandika maelezo ya bidhaa na kutengeneza picha za bidhaa kwa AI. Katika Sura 2 utaweka sera za usafirishaji na kurudisha bidhaa, utajibu maswali ya wateja, na utatumia barua pepe na maoni ya wateja kukua, ukifuata sheria za Marekani za FTC (Tume ya Biashara ya Shirikisho ya Marekani).",
    "Kila somo linachukua kama dakika tano na lina kazi ya kufanya kwa mikono. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Ada na huduma za majukwaa hubadilika mara kwa mara, kwa hiyo kagua kurasa za bei na msaada za kila jukwaa kabla ya kuchagua."
  ],
  finalTask: "Andaa kifurushi cha uzinduzi kwa aina moja ya bidhaa: muhtasari wa aya moja wa soko dogo pamoja na ushahidi kwamba watu wanataka bidhaa hiyo, maelezo matatu kamili ya bidhaa (jina, maelezo, taarifa muhimu) yenye picha safi, sera zilizoandikwa za usafirishaji na kurudisha bidhaa zenye muda wa usafirishaji unaoweza kuutimiza kweli, violezo vitano vya majibu kwa wateja vilivyoandaliwa kwa msaada wa AI, na barua pepe moja ya kufuatilia pamoja na ombi la maoni vinavyofuata CAN-SPAM na kanuni za FTC kuhusu maoni.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wanaoanza au kukuza duka dogo la mtandaoni nchini Marekani: watengenezaji wa bidhaa, wauzaji wa bidhaa walizonunua, na wenye biashara za pembeni wanaouza kupitia duka lao, soko la mtandaoni au duka la mitandao ya kijamii.",
    startingPoint: "Wanaweza kutumia simu au kompyuta, kuangalia maduka ya mtandaoni na kuandika kwenye msaidizi wa AI wa bure. Wana uzoefu mdogo wa kutafiti mahitaji ya wateja, kuandika maelezo ya bidhaa au kuandika sera za duka.",
    gap: "Wauzaji wapya mara nyingi hubahatisha cha kuuza, hunakili maandishi ya AI yenye madai yasiyo ya kweli, na huahidi muda wa usafirishaji wasioweza kuutimiza. Wanafunzi wanahitaji kutumia AI kufanya kazi haraka huku wakibaki waaminifu kwa wanunuzi na kufuata kanuni za FTC, ili waepuke kurudisha pesa, maoni mabaya na matatizo ya kisheria.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Vifaa: simu au kompyuta yenye intaneti; kamera ya simu kwa picha za bidhaa",
      "Muda: masomo ya kama dakika 5 yanayoingia kati ya shughuli za biashara",
      "Sheria: kanuni ya FTC ya maagizo kwa barua, kanuni za FTC kuhusu maoni na CAN-SPAM zinawahusu wauzaji wa Marekani",
      "Faragha: usiweke kamwe anwani, kadi au taarifa za agizo za mteja kwenye zana ya AI"
    ],
    prerequisites: "Hakuna. Wanafunzi wapya kwa zana za AI wanaweza kuanza na kozi \"Utangulizi wa AI na Kujiamini katika Teknolojia\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia msaidizi wa AI na soko halisi la mtandaoni", action: "kuchagua soko dogo la bidhaa na kuonyesha ushahidi kwamba watu tayari wananunua ndani yake", standard: "ukiwa na angalau mifano mitatu halisi kutoka soko la mtandaoni kama ushahidi" },
    { id: "O2", condition: "Ukipewa ukweli halisi kuhusu bidhaa", action: "kuandika maelezo ya bidhaa kwa msaada wa AI yaliyo wazi, rahisi kupatikana kwa utafutaji na ya kweli", standard: "kila dai likiwa limekaguliwa na hakuna jambo lisilo la kweli lililobaki" },
    { id: "O3", condition: "Ukitumia kamera ya simu na zana ya AI ya kuhariri picha", action: "kutengeneza picha za bidhaa zinazoonyesha bidhaa halisi waziwazi", standard: "pamoja na picha ya kuonyesha ukubwa na bila uhariri wowote unaobadilisha jinsi bidhaa inavyoonekana" },
    { id: "O4", condition: "Ukitumia kanuni ya FTC ya maagizo kwa barua", action: "kuandika sera za usafirishaji na kurudisha bidhaa pamoja na ujumbe wa kuchelewa", standard: "zikiwa na muda wa usafirishaji unaoweza kuutimiza kweli, na ujumbe wa kuchelewa ukitoa nafasi ya kurudishiwa pesa" },
    { id: "O5", condition: "Ukipewa maswali ambayo wateja wa duka lako huuliza mara nyingi", action: "kutengeneza violezo vya majibu kwa msaada wa AI vinavyotumia sera zako halisi tu", standard: "ukiwa na violezo vitano vilivyokaguliwa na bila kuipa AI taarifa binafsi za mteja" },
    { id: "O6", condition: "Ukitumia CAN-SPAM na kanuni za FTC kuhusu maoni", action: "kuandika barua pepe ya kufuatilia na ombi la maoni", standard: "zikiwa na anwani, njia ya kujiondoa na bila maoni ya uongo au yaliyolipiwa" }
  ],
  chapters: [
    {
      name: "Sura 1: Andaa bidhaa zinazouzika",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kutafiti soko dogo la bidhaa",
          minutes: 5,
          goal: "Chagua soko dogo la bidhaa na hakikisha watu tayari wananunua.",
          text: [
            "Soko dogo (niche) ni kundi maalum la wanunuzi wenye hitaji maalum: \"mikanda ya shingo ya mbwa iliyotengenezwa kwa mkono kwa mbwa wakubwa\", \"vifaa vya asili vya kutunza nywele za watoto\", \"vifaa vya bustani kwa vibaraza vidogo\". Ni rahisi kufanikiwa katika soko dogo kuliko katika aina za jumla.",
            "Tumia AI kupata mawazo: \"Ninaweza kutengeneza au kupata [bidhaa]. Nipendekezee masoko madogo kumi, mnunuzi wa kila moja, na tatizo ambalo bidhaa inatatua.\" Kisha kagua mwenyewe kama watu wanataka kweli: tafuta bidhaa zinazofanana kwenye soko la mtandaoni, angalia wauzaji wakuu wana maoni mangapi, soma maoni yao ya nyota 3 kupata malalamiko unayoweza kurekebisha, na angalia mapendekezo ya utafutaji.",
            "AI haiwezi kuona takwimu za mauzo za sasa kwa uhakika na inaweza kubuni namba. Itumie kwa mawazo na maswali; tumia kurasa halisi za soko la mtandaoni na mazungumzo yako mwenyewe kama ushahidi."
          ],
          steps: ["Iombe AI mawazo kumi ya masoko madogo kulingana na unachoweza kutengeneza au kupata.", "Tafuta kila wazo bora kwenye soko la mtandaoni.", "Andika idadi ya maoni na bei za wauzaji wakuu.", "Soma maoni ya nyota 3 kupata matatizo unayoweza kurekebisha.", "Chagua soko dogo moja lenye mahitaji yaliyo wazi."],
          words: [["Soko dogo (niche)", "kundi maalum la wanunuzi wenye hitaji maalum."], ["Mahitaji", "idadi ya watu wanaotaka kununua kitu."], ["Soko la mtandaoni (marketplace)", "tovuti ambapo wauzaji wengi huweka bidhaa zao, kama Etsy, Amazon au eBay."]],
          slides: [
            { title: "Kuwa mahususi", bullets: ["\"Mikanda ya shingo kwa mbwa wakubwa\"", "Rahisi kufanikiwa kuliko aina za jumla"] },
            { title: "AI kwa mawazo", bullets: ["Masoko madogo kumi, wanunuzi na matatizo", "Kulingana na unachoweza kutengeneza au kupata"] },
            { title: "Ushahidi halisi", bullets: ["Tafuta kwenye soko la mtandaoni", "Idadi ya maoni na bei za wauzaji wakuu", "Maoni ya nyota 3 yanaonyesha matatizo ya kurekebisha"] },
            { title: "Kuwa makini", bullets: ["AI inaweza kubuni namba za mauzo", "Tumia kurasa halisi kama ushahidi"] }
          ],
          tryIt: "Tumia AI kupata mawazo ya masoko madogo kumi, kagua matatu kati yao kwenye soko halisi la mtandaoni, na andika muhtasari wa aya moja wa soko dogo unalochagua pamoja na ushahidi wako wa mahitaji.",
          youCanNow: "kuchagua soko dogo la bidhaa kulingana na ushahidi halisi wa mahitaji.",
          quickCheck: [
            { objective: "O1", q: "Ni nini kinachohesabiwa kama ushahidi kwamba watu tayari wananunua katika soko dogo?", options: ["Zana ya AI ikisema soko hilo linapendwa", "Bidhaa halisi kwenye soko la mtandaoni zenye mauzo na maoni", "Marafiki zako wakisema wanapenda wazo hilo", "Soko dogo lisilo na muuzaji yeyote"], answer: 1, why: "Bidhaa halisi zenye mauzo na maoni zinaonyesha mahitaji ya kweli, wakati AI inaweza kubuni namba." },
            { objective: "O1", q: "Una mawazo kumi ya masoko madogo kutoka AI. Ungefanya nini baadaye?", options: ["Kuchagua lile ambalo AI iliandika kwanza", "Kuanza kununua mzigo kwa yote kumi", "Kukagua baadhi yao kwenye soko halisi la mtandaoni kabla ya kuchagua", "Kuchagua lile lenye jina refu zaidi"], answer: 2, why: "Kukagua mawazo kwenye soko halisi la mtandaoni kunageuza mawazo ya AI kuwa ushahidi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuandika maelezo ya kweli ya bidhaa",
          minutes: 5,
          goal: "Andika jina na maelezo ya bidhaa kwa AI yaliyo wazi, rahisi kupatikana kwa utafutaji na ya kweli.",
          text: [
            "Maelezo mazuri ya bidhaa yanajibu maswali ya mnunuzi kabla hajauliza: ni nini, ni kwa ajili ya nani, ukubwa, malighafi, kinachokuja ndani, jinsi ya kuitunza na muda wa usafirishaji. Jina linapaswa kutumia maneno ambayo wanunuzi hutafuta, bila kujaza maneno ya utafutaji kupita kiasi.",
            "Ipe AI ukweli halisi na uulize: \"Andika jina la bidhaa lenye herufi chini ya 80 na maelezo yenye utangulizi mfupi, vipengele 5 na maelekezo ya kutunza. Tumia ukweli huu tu: [ukweli].\" Mara nyingi AI huongeza sifa ambazo hukuzitaja; futa chochote kisicho cha kweli.",
            "FTC inasema matangazo lazima yawe ya kweli na yawe na ushahidi. Usidai \"organic\" (ya asili bila kemikali), \"handmade\" (imetengenezwa kwa mkono), \"made in USA\" (imetengenezwa Marekani), faida za kiafya au \"inayouzwa zaidi\" isipokuwa ni kweli na unaweza kuthibitisha. Kagua pia sheria za kila jukwaa kuhusu maelezo ya bidhaa."
          ],
          steps: ["Andika kila ukweli halisi kuhusu bidhaa.", "Iombe AI jina na maelezo ikitumia ukweli huo tu.", "Futa chochote ambacho AI iliongeza kisicho cha kweli.", "Kagua madai kama organic, handmade au made in USA.", "Kagua sheria za jukwaa kuhusu maelezo ya bidhaa."],
          words: [["Maelezo ya bidhaa (listing)", "ukurasa wa bidhaa kwenye duka au soko la mtandaoni."], ["Neno la utafutaji (keyword)", "neno au kifungu ambacho wanunuzi huandika katika utafutaji."]],
          slides: [
            { title: "Jibu maswali ya mnunuzi", bullets: ["Ni nini, kwa ajili ya nani, ukubwa, malighafi", "Kinachokuja ndani, utunzaji, muda wa usafirishaji"] },
            { title: "AI ikitumia ukweli wako tu", bullets: ["Jina lenye herufi chini ya 80", "Utangulizi, vipengele 5, maelekezo ya utunzaji", "Futa chochote kisicho cha kweli"] },
            { title: "Madai yanahitaji ushahidi", bullets: ["\"Organic\", \"handmade\", \"made in USA\"", "Faida za kiafya, \"inayouzwa zaidi\"", "Kagua pia sheria za jukwaa"] }
          ],
          sources: [{ name: "FTC: Misingi ya matangazo na masoko (Advertising and Marketing Basics)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Andika ukweli wa bidhaa tatu na utumie AI kuandika rasimu ya maelezo ya kila moja. Ondoa chochote kisicho cha kweli na ukague kila dai.",
          youCanNow: "kuandika maelezo ya bidhaa yaliyo wazi, rahisi kupatikana kwa utafutaji na yanayosema ukweli.",
          quickCheck: [
            { objective: "O2", q: "Unapaswa kuipa AI nini unapoiomba iandike rasimu ya maelezo ya bidhaa?", options: ["Ukweli halisi wa bidhaa tu, na uiombe itumie huo tu", "Maelezo ya mshindani ili inakili neno kwa neno", "Hakuna kitu, ili iwe mbunifu", "Madai unayotumaini ni ya kweli"], answer: 0, why: "AI huandika maelezo ya kweli pale tu inapofanya kazi kwa ukweli wako halisi." },
            { objective: "O2", q: "Rasimu ya AI inasema kikombe chako \"kinaweza kuoshwa kwenye mashine ya kuosha vyombo\", lakini hujawahi kukijaribu. Ungefanya nini?", options: ["Kuliacha kwa sababu wanunuzi wanalipenda", "Kuongeza \"pengine\" mbele yake", "Kulihamishia mwisho wa maelezo", "Kuondoa dai hilo hadi uweze kulithibitisha"], answer: 3, why: "Madai kuhusu bidhaa lazima yawe ya kweli na yenye ushahidi kabla hujayatumia." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutengeneza picha safi za bidhaa",
          minutes: 5,
          goal: "Tengeneza picha na michoro ya bidhaa inayoonyesha bidhaa halisi waziwazi.",
          text: [
            "Picha huuza bidhaa. Tumia simu yako mchana karibu na dirisha, juu ya mandharinyuma isiyo na pambo, na upige pembe kadhaa pamoja na picha ya karibu na picha inayoonyesha ukubwa (mkononi au kando ya kitu kinachojulikana).",
            "Zana za AI zinaweza kusaidia: kuondoa au kubadilisha mandharinyuma, kurekebisha mwanga, kubadilisha ukubwa kwa kila jukwaa, na kutengeneza michoro ya bidhaa ikitumika kwenye zana kama Canva. Masoko mengi ya mtandaoni yana sheria kwa picha kuu, kama mandharinyuma isiyo na pambo; kagua sheria za picha za jukwaa.",
            "Usitumie kamwe AI kufanya bidhaa ionekane tofauti na kile mnunuzi atakachopata: hakuna rangi, ukubwa, sifa au matokeo ya uongo. Picha zinazopotosha zinaweza kuleta bidhaa kurudishwa, maoni mabaya, adhabu za jukwaa na matatizo ya matangazo ya udanganyifu."
          ],
          steps: ["Piga picha mchana juu ya mandharinyuma isiyo na pambo.", "Piga pembe kadhaa, picha ya karibu na picha ya ukubwa.", "Tumia zana za AI kusafisha mandharinyuma na kubadilisha ukubwa.", "Kagua sheria za picha za jukwaa.", "Linganisha kila picha na bidhaa halisi."],
          words: [["Picha ya matumizi (lifestyle image)", "picha au mchoro unaoonyesha bidhaa ikitumika."], ["Kuondoa mandharinyuma", "zana ya kuhariri inayokata bidhaa kutoka kwenye mandharinyuma yake."]],
          slides: [
            { title: "Piga picha vizuri", bullets: ["Mwanga wa mchana karibu na dirisha", "Mandharinyuma isiyo na pambo", "Pembe kadhaa, picha ya karibu, picha ya ukubwa"] },
            { title: "AI inasaidia kuhariri", bullets: ["Ondoa au badilisha mandharinyuma", "Rekebisha mwanga, badilisha ukubwa kwa kila jukwaa", "Michoro ya matumizi kwenye Canva"] },
            { title: "Usipotoshe kamwe", bullets: ["Hakuna rangi, ukubwa au sifa za uongo", "Kagua sheria za picha za kila jukwaa"] }
          ],
          tryIt: "Piga picha bidhaa moja (pembe kadhaa, picha ya karibu, ukubwa), safisha picha kuu kwa zana ya AI ya mandharinyuma, na uilinganishe na bidhaa halisi kabla ya kuitumia.",
          youCanNow: "kutengeneza picha safi na za kweli za bidhaa kwa msaada wa AI wa kuhariri.",
          quickCheck: [
            { objective: "O3", q: "Ni kundi gani la picha linaloonyesha bidhaa kwa ukweli na waziwazi?", options: ["Picha moja yenye giza iliyopigwa usiku", "Pembe chache, picha ya karibu na picha ya ukubwa", "Picha moja iliyotengenezwa na AI ya bidhaa inayofanana", "Picha yenye mandharinyuma iliyojaa vitu vingine"], answer: 1, why: "Pembe kadhaa, picha ya karibu na picha ya ukubwa zinawaonyesha wanunuzi watakachopata kweli." },
            { objective: "O3", q: "Zana ya AI imefanya rangi ya skafu yako ing'ae kuliko ilivyo kweli. Ungefanya nini?", options: ["Kuitumia kwa sababu inaonekana vizuri zaidi", "Kuitumia lakini kuongeza kichujio kwenye nyingine pia", "Kuirekebisha ili picha ilingane na bidhaa halisi", "Kufuta picha zako zote na kutumia picha za kununua"], answer: 2, why: "Picha lazima zilingane na bidhaa halisi, la sivyo wanunuzi watapotoshwa na kuomba kurudishiwa pesa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Andaa bidhaa zinazouzika",
        questions: [
          { objective: "O1", q: "Lipi ni soko dogo?", options: ["Vitu", "Vifaa vya bustani kwa vibaraza vidogo", "Kila kitu kwa kila mtu", "Bidhaa"], answer: 1, why: "Linataja wanunuzi maalum na hitaji maalum." },
          { objective: "O1", q: "AI inasema bidhaa inauza vipande 10,000 kwa mwezi. Unafanya nini?", options: ["Kuchapisha namba hiyo kama ukweli", "Kuiamini", "Kuagiza vipande 10,000", "Kukagua ushahidi halisi kwenye soko la mtandaoni; AI inaweza kubuni namba"], answer: 3, why: "AI haiwezi kuona takwimu za mauzo za sasa kwa uhakika." },
          { objective: "O2", q: "AI imeongeza \"haipitishi maji\" kwenye maelezo yako, lakini bidhaa si hivyo. Unafanya nini?", options: ["Kulifuta", "Kuliacha", "Kuliandika kwa herufi nzito", "Kuongeza \"imehakikishwa\""], answer: 0, why: "Maelezo ya bidhaa lazima yawe ya kweli." },
          { objective: "O2", q: "Dai gani linahitaji ushahidi kabla hujalitumia?", options: ["\"Inatumwa ndani ya boksi\"", "\"Bluu\"", "\"Imetengenezwa Marekani\"", "\"Inakuja na kadi\""], answer: 2, why: "Madai ya mahali bidhaa ilipotengenezwa, kama imetengenezwa Marekani, lazima yawe ya kweli na yanayoweza kuthibitishwa." },
          { objective: "O3", q: "Matumizi gani ya AI kwenye picha za bidhaa HAYAFAI?", options: ["Kurekebisha mwanga", "Kuondoa mandharinyuma", "Kufanya bidhaa ionekane kubwa kuliko ilivyo", "Kubadilisha ukubwa kwa ajili ya jukwaa"], answer: 2, why: "Picha zinazopotosha zinawadanganya wanunuzi." }
        ]
      }
    },
    {
      name: "Sura 2: Hudumia wateja na ukue",
      lessons: [
        {
          objectives: ["O4"],
          title: "Sera za usafirishaji na kurudisha bidhaa",
          minutes: 6,
          goal: "Andika sera za usafirishaji na kurudisha bidhaa zinazofuata kanuni ya FTC ya maagizo kwa barua.",
          text: [
            "Kanuni ya FTC ya Bidhaa Zinazoagizwa kwa Barua, Intaneti au Simu (Mail, Internet, or Telephone Order Merchandise Rule) inasema: ukitaja muda wa usafirishaji, unahitaji sababu ya msingi ya kuamini unaweza kuutimiza; usipoutaja, lazima uwe na sababu ya msingi ya kutuma ndani ya siku 30.",
            "Usipoweza kutuma kwa wakati, lazima umwambie mnunuzi, umpe tarehe mpya, na umpe nafasi ya kughairi ili arudishiwe pesa haraka. Pesa za malipo ya taslimu, hundi, hawala ya pesa (money order) au kadi za mkopo za kampuni nyingine lazima zirudishwe ndani ya siku saba za kazi baada ya kughairi, na salio la dukani (store credit) haliwezi kuchukua nafasi ya pesa zinazotakiwa kurudishwa.",
            "AI inaweza kuandika rasimu ya kurasa za sera zilizo wazi: \"Andika sera ya kirafiki ya usafirishaji na kurudisha bidhaa kwa duka dogo la mtandaoni. Tunatuma ndani ya siku 3 hadi 5 za kazi. Bidhaa ambazo hazijatumika zinarudishwa ndani ya siku 30; mnunuzi analipia usafirishaji wa kurudisha.\" Kisha kagua kwamba inalingana na unachofanya kweli, na sheria za jukwaa."
          ],
          steps: ["Amua muda wa usafirishaji unaoweza kuutimiza kweli.", "Amua sheria zako za kurudisha bidhaa.", "Iombe AI iandike rasimu ya sera zote mbili kwa maneno rahisi.", "Zikague dhidi ya kanuni ya FTC na sheria za jukwaa lako.", "Andika kiolezo cha ujumbe wa kuchelewa kinachotoa nafasi ya kughairi na kurudishiwa pesa."],
          words: [["Kanuni ya maagizo kwa barua", "kanuni ya FTC kuhusu muda wa usafirishaji, taarifa za kuchelewa na kurudisha pesa kwa maagizo ya barua, intaneti au simu."], ["Tarehe mpya", "tarehe mpya ya kutuma unayompa mnunuzi baada ya kuchelewa."]],
          slides: [
            { title: "Muda wa usafirishaji (kanuni ya FTC)", bullets: ["Muda uliotajwa: sababu ya msingi ya kuutimiza", "Bila muda uliotajwa: tuma ndani ya siku 30"] },
            { title: "Kuchelewa", bullets: ["Mwambie mnunuzi, mpe tarehe mpya", "Toa nafasi ya kughairi na kurudishiwa pesa haraka", "Rudisha pesa ndani ya siku 7 za kazi (taslimu, kadi)"] },
            { title: "Andika rasimu kwa AI", bullets: ["Kurasa za sera rahisi na za kirafiki", "Zilingane na unachofanya kweli", "Kagua pia sheria za jukwaa"] }
          ],
          sources: [{ name: "FTC: Mwongozo wa biashara kuhusu kanuni ya maagizo kwa barua, intaneti au simu (Mail, Internet, or Telephone Order Merchandise Rule)", url: "https://www.ftc.gov/business-guidance/resources/business-guide-ftcs-mail-internet-or-telephone-order-merchandise-rule" }],
          tryIt: "Andika sera zako za usafirishaji na kurudisha bidhaa kwa AI, zikague dhidi ya kanuni ya FTC, na andika ujumbe wa kuchelewa unaotoa tarehe mpya na nafasi ya kughairi pamoja na kurudishiwa pesa.",
          youCanNow: "kuweka sera za usafirishaji na kurudisha bidhaa zilizo wazi, za kweli na zinazofuata kanuni ya FTC.",
          quickCheck: [
            { objective: "O4", q: "Sera ya usafirishaji inapaswa kuahidi nini?", options: ["Muda wa haraka zaidi ambao muuzaji yeyote anatoa", "Hakuna muda kabisa, ili usichelewe kamwe", "Kufika siku inayofuata kwa kila agizo", "Muda wa usafirishaji ulio na sababu halisi ya kuutimiza"], answer: 3, why: "Kanuni ya FTC inasema unahitaji sababu ya msingi ya kutimiza muda wowote wa usafirishaji unaoutaja." },
            { objective: "O4", q: "Kuchelewa kwa msambazaji kunamaanisha agizo litatumwa kwa kuchelewa. Ungefanya nini?", options: ["Kumwambia mnunuzi, kumpa tarehe mpya na kumpa nafasi ya kughairi na kurudishiwa pesa", "Kunyamaza na kutumaini hatagundua", "Kutoa salio la dukani tu", "Kughairi agizo bila kumwambia"], answer: 0, why: "Kanuni inataka taarifa ya kuchelewa yenye tarehe mpya na nafasi ya kughairi ili kurudishiwa pesa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kujibu wateja kwa msaada wa AI",
          minutes: 5,
          goal: "Tengeneza violezo vya majibu kwa maswali matano ambayo wateja wako huuliza mara nyingi.",
          text: [
            "Maduka ya mtandaoni hupokea maswali yale yale mara kwa mara: Agizo langu liko wapi? Naweza kurudisha hii? Nichukue saizi gani? Mnatuma eneo langu? Hii ipo? Andika violezo kwa kila swali, vyenye nafasi tupu za kujaza taarifa.",
            "AI inaweza kuandika rasimu ya violezo vya kirafiki kutoka kwa sera zako halisi. Kwa maswali mapya, fupisha swali bila jina, anwani au namba ya agizo ya mteja na uiombe AI jibu, kisha jaza taarifa wewe mwenyewe.",
            "Ukiweka chatbot (programu ya kujibu kiotomatiki) kwenye duka lako, ipe sera zako halisi na ukweli wa bidhaa tu, waambie wateja kwamba ni ya kiotomatiki, na rahisisha njia ya kumfikia mtu. Kagua huduma ya chatbot inafanya nini na taarifa za wateja."
          ],
          steps: ["Orodhesha maswali matano ambayo wateja huuliza mara nyingi.", "Ipe AI sera zako halisi na uombe violezo vyenye [nafasi tupu].", "Kagua kila kiolezo dhidi ya sera zako.", "Kwa maswali mapya, fupisha bila taarifa binafsi.", "Ukitumia chatbot, ipe ukweli halisi na njia ya kumfikia mtu."],
          words: [["Kiolezo cha jibu", "jibu lililoandaliwa tayari lenye nafasi tupu unazojaza."], ["Chatbot", "programu ya kiotomatiki inayojibu ujumbe wa wateja."]],
          slides: [
            { title: "Maswali ya kawaida", bullets: ["Agizo langu liko wapi? Kurudisha?", "Saizi, eneo la usafirishaji, bidhaa ipo"] },
            { title: "Violezo kutoka kwa sera zako", bullets: ["Vya kirafiki, vyenye [nafasi tupu]", "Kagua dhidi ya unachofanya kweli"] },
            { title: "Chatbot", bullets: ["Sera na ukweli halisi tu", "Sema ni ya kiotomatiki", "Njia rahisi ya kumfikia mtu"] }
          ],
          tryIt: "Andika violezo vitano vya majibu kwa maswali ya kawaida ya wateja wako kwa AI, ukitumia sera zako halisi tu, na ukague kila kimoja.",
          youCanNow: "kujibu maswali ya wateja haraka na kwa usahihi kwa violezo vilivyoandaliwa na AI.",
          quickCheck: [
            { objective: "O5", q: "Ni nini kinachofanya kiolezo cha jibu kwa mteja kiwe salama kutumia?", options: ["Kinasikika cha kirafiki, hata kama ukweli umebahatishwa", "Kimetokana na sera zako halisi na umekikagua wewe", "AI imekiandika, kwa hiyo lazima kiwe sahihi", "Kinaahidi chochote mteja anachotaka"], answer: 1, why: "Violezo lazima vilingane na sera zako halisi, kwa hiyo unakagua kila kimoja ambacho AI inaandika." },
            { objective: "O5", q: "Barua pepe ya mteja ina namba yake ya agizo na anwani ya nyumbani. Ungepataje msaada wa AI kwa jibu?", options: ["Kuweka barua pepe yote kwenye AI", "Kumwomba mteja atume anwani tena", "Kufupisha swali bila taarifa binafsi", "Kuliweka kwenye jukwaa la umma kuomba ushauri"], answer: 2, why: "Kuacha taarifa binafsi kunamlinda mteja huku bado ukipata msaada wa AI." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Barua pepe za kufuatilia na maoni, kwa njia halali",
          minutes: 5,
          goal: "Andika barua pepe ya kufuatilia na ombi la maoni vinavyofuata CAN-SPAM na kanuni za FTC kuhusu maoni.",
          text: [
            "Barua pepe kwa wanunuzi wa zamani (shukrani, habari za bidhaa kurudi, ofa) huleta mauzo ya kurudia. Tumia AI kuandika barua pepe fupi, na ufuate CAN-SPAM (sheria ya Marekani ya barua pepe za matangazo): mstari wa Mtumaji (From) na kichwa cha habari viwe vya kweli, onyesha wazi kuwa ni tangazo pale lilipo, weka anwani yako halisi ya mahali na njia wazi ya kujiondoa, na utekeleze maombi ya kujiondoa ndani ya siku 10 za kazi. Majukwaa mengi ya maduka na ya barua pepe hukuwekea viungo vya kujiondoa.",
            "Maoni hujenga imani. Mwombe kila mnunuzi atoe maoni ya kweli, si wale walio na furaha tu. Kanuni ya FTC inapiga marufuku maoni na shuhuda za uongo (pamoja na zile zilizotengenezwa na AI kutoka kwa watu wasiokuwepo) na inapiga marufuku zawadi zinazotolewa kwa maoni mazuri tu. Usinunue kamwe maoni wala usitumie AI kuyaandika.",
            "Tumia AI kusoma maoni yako ili kuona mwenendo: wanunuzi wanapenda nini na wanalalamikia nini. Rekebisha lalamiko kubwa zaidi, na utaje marekebisho hayo kwenye maelezo ya bidhaa au barua pepe zako."
          ],
          steps: ["Andika rasimu ya barua pepe fupi ya kufuatilia kwa wanunuzi wa zamani kwa AI.", "Ikague kwa misingi ya CAN-SPAM: mistari ya kweli, anwani, njia ya kujiondoa.", "Andika rasimu ya ombi la maoni ya kweli kwa kila mnunuzi.", "Usitoe kamwe zawadi kwa maoni mazuri tu wala kuandika maoni kwa AI.", "Tumia AI kutafuta mwenendo katika maoni yako halisi."],
          words: [["Mauzo ya kurudia", "mauzo kwa mtu ambaye amewahi kununua kabla."], ["Kujiondoa (opt-out)", "njia ya kuacha kupokea barua pepe; unsubscribe."]],
          slides: [
            { title: "Waandikie wanunuzi wa zamani", bullets: ["Shukrani, bidhaa zilizorudi, ofa", "AI inaandika rasimu ya barua pepe fupi"] },
            { title: "Misingi ya CAN-SPAM", bullets: ["Mstari wa Mtumaji na kichwa cha habari vya kweli", "Anwani yako halisi ya mahali", "Ombi la kujiondoa litekelezwe ndani ya siku 10 za kazi"] },
            { title: "Maoni", bullets: ["Mwombe kila mnunuzi maoni ya kweli", "Hakuna maoni ya uongo au yaliyoandikwa na AI", "Hakuna zawadi kwa maoni mazuri tu"] }
          ],
          sources: [{ name: "FTC: Mwongozo wa kufuata sheria ya CAN-SPAM kwa biashara (CAN-SPAM Act Compliance Guide for Business)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }, { name: "FTC: Kanuni ya mwisho inayopiga marufuku maoni na shuhuda za uongo (taarifa kwa vyombo vya habari)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" }],
          tryIt: "Kazi ya mwisho: andika barua pepe moja ya kufuatilia na ombi moja la maoni vinavyofuata sheria, kisha kusanya kifurushi chako cha uzinduzi: muhtasari wa soko dogo, maelezo matatu ya bidhaa yenye picha, sera, violezo vitano vya majibu, barua pepe na ombi la maoni.",
          youCanNow: "kuendesha duka la mtandaoni kwa msaada wa AI kwa uaminifu kwa wanunuzi na kwa kufuata sheria za Marekani.",
          quickCheck: [
            { objective: "O6", q: "Barua pepe ya matangazo kwa wateja lazima iwe na nini?", options: ["Msimbo wa punguzo", "Anwani yako halisi ya mahali na njia ya kujiondoa", "Picha ya kila bidhaa", "Historia ya maagizo ya mteja"], answer: 1, why: "CAN-SPAM inataka anwani halisi ya mahali na njia ya kujiondoa inayofanya kazi katika barua pepe za matangazo." },
            { objective: "O6", q: "Rafiki anajitolea kuandika maoni ya nyota tano kwa duka lako. Ungefanya nini?", options: ["Kukubali, kwa kuwa ana nia njema", "Kukubali matatu tu kati yake", "Kuiomba AI iandike mengine kama hayo", "Kukataa na kuwaomba wanunuzi halisi maoni ya kweli"], answer: 3, why: "FTC inapiga marufuku maoni ya uongo, kwa hiyo unawaomba wanunuzi halisi maoni ya kweli." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Hudumia wateja na ukue",
        questions: [
          { objective: "O4", q: "Hutaji muda wa usafirishaji. Chini ya kanuni ya FTC, unahitaji sababu ya msingi ya kutuma ndani ya:", options: ["Mwaka 1", "Siku 1", "Siku 30", "Siku 90"], answer: 2, why: "Hii ndiyo \"Kanuni ya siku 30\" ya FTC." },
          { objective: "O4", q: "Huwezi kutuma kwa wakati. Lazima ufanye nini?", options: ["Kughairi bila kumwambia", "Kunyamaza", "Kutoa salio la dukani tu", "Kumwambia mnunuzi, kumpa tarehe mpya na kumpa nafasi ya kughairi na kurudishiwa pesa"], answer: 3, why: "Kanuni inataka taarifa ya kuchelewa na nafasi ya kughairi." },
          { objective: "O5", q: "Swali la mteja lina anwani yake ya nyumbani. Unapataje msaada wa AI?", options: ["Kuweka yote", "Kufupisha swali bila anwani", "Kuliweka hadharani", "Kumpuuza mteja"], answer: 1, why: "Weka taarifa binafsi nje ya zana za AI." },
          { objective: "O6", q: "Ni njia gani ya kupata maoni inayoruhusiwa?", options: ["Kumwomba kila mnunuzi maoni ya kweli", "Kutoa zawadi kwa maoni ya nyota 5 tu", "Kuandika maoni kwa AI", "Kununua maoni"], answer: 0, why: "Maoni ya kweli kutoka kwa wanunuzi halisi yanafaa." },
          { objective: "O6", q: "Lazima utekeleze ombi la kujiondoa kwenye barua pepe kwa haraka kiasi gani?", options: ["Kamwe", "Ndani ya mwaka mmoja", "Ndani ya siku 10 za kazi", "Ikiombwa mara mbili tu"], answer: 2, why: "Hilo ndilo takwa la CAN-SPAM katika mwongozo wa FTC." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Biashara Mtandaoni kwa Msaada wa AI",
    questions: [
      { objective: "O1", q: "Lipi ni soko la mtandaoni (marketplace)?", options: ["Lahajedwali", "Etsy", "Printa", "Akaunti ya barua pepe"], answer: 1, why: "Etsy, Amazon na eBay ni masoko ya mtandaoni." },
      { objective: "O1", q: "Unapaswa kukagua ada za jukwaa wapi?", options: ["Kwa mteja", "Kwa kubahatisha", "Kwenye video ya zamani", "Kwenye kurasa za bei na msaada za jukwaa lenyewe"], answer: 3, why: "Ada hubadilika mara kwa mara." },
      { objective: "O1", q: "Kusoma maoni ya nyota 3 ya washindani kunakusaidia:", options: ["Kupata nywila zao", "Kunakili picha zao", "Kuandika maoni ya uongo", "Kupata matatizo unayoweza kurekebisha"], answer: 3, why: "Malalamiko yanaonyesha mahitaji ambayo hayajatimizwa." },
      { objective: "O1", q: "Katika kutafiti soko dogo, AI inatumika vizuri zaidi kwa:", options: ["Namba kamili za mauzo za sasa", "Mawazo na maswali, huku kurasa halisi zikiwa ushahidi", "Maamuzi ya mwisho", "Kununua mzigo"], answer: 1, why: "AI inaweza kubuni namba." },
      { objective: "O2", q: "Maelezo mazuri ya bidhaa yanajibu:", options: ["Hakuna kitu", "Bei tu", "Ni nini, ni kwa ajili ya nani, ukubwa, malighafi, muda wa usafirishaji", "Historia ya maisha yako"], answer: 2, why: "Yanajibu maswali ya mnunuzi kabla hajauliza." },
      { objective: "O2", q: "Unapoiomba AI maelezo ya bidhaa, ipe:", options: ["Ukweli halisi tu na uiombe itumie huo tu", "Hakuna kitu, iache ibahatishe", "Maelezo ya mshindani ili inakili", "Taarifa zako za benki"], answer: 0, why: "Ukweli unazuia sifa za kubuni." },
      { objective: "O2", q: "Neno la utafutaji (keyword) ni:", options: ["Msimbo wa punguzo", "Nywila", "Neno ambalo wanunuzi huandika katika utafutaji", "Picha ya bidhaa"], answer: 2, why: "Maneno ya utafutaji huwasaidia wanunuzi kupata bidhaa." },
      { objective: "O2", q: "Chini ya kanuni za FTC, madai kuhusu bidhaa lazima yawe:", options: ["Ya kweli na yenye ushahidi", "Ya kusisimua", "Mafupi", "Yameandikwa na AI"], answer: 0, why: "Kanuni ya ukweli katika matangazo inahusu maelezo ya bidhaa." },
      { objective: "O3", q: "Kwa picha za bidhaa, mpangilio mzuri ni:", options: ["Chumba chenye giza", "Mwanga wa mchana na mandharinyuma isiyo na pambo", "Mandharinyuma iliyojaa vitu", "Picha moja tu isiyo wazi"], answer: 1, why: "Picha zilizo wazi huuza." },
      { objective: "O3", q: "Picha ya ukubwa inaonyesha:", options: ["Bei", "Nembo tu", "Boksi la usafirishaji", "Bidhaa kando ya mkono au kitu kinachojulikana"], answer: 3, why: "Inawasaidia wanunuzi kuelewa ukubwa." },
      { objective: "O3", q: "Uhariri gani wa picha kwa AI unafaa?", options: ["Kuondoa mandharinyuma", "Kubadilisha rangi ya bidhaa kuwa rangi usiyoiuza", "Kuongeza sifa ambazo haina", "Kuifanya ionekane kubwa zaidi"], answer: 0, why: "Kusafisha mandharinyuma hakupotoshi." },
      { objective: "O4", q: "Ukitaja muda wa usafirishaji, unahitaji:", options: ["Idhini ya AI", "Hakuna kitu", "Mtu maarufu kuidhinisha", "Sababu ya msingi ya kuamini unaweza kuutimiza"], answer: 3, why: "Kanuni ya FTC inataka sababu ya msingi." },
      { objective: "O4", q: "Taarifa ya kuchelewa lazima impe mnunuzi:", options: ["Bei ya juu zaidi", "Salio la dukani tu", "Nafasi ya kughairi ili arudishiwe pesa haraka", "Hakuna kitu"], answer: 2, why: "Wanunuzi wanaweza kuchagua kughairi." },
      { objective: "O4", q: "Baada ya kughairi, pesa za maagizo ya kadi au taslimu zinapaswa kurudishwa ndani ya:", options: ["Miezi sita", "Siku saba za kazi", "Mwaka mmoja", "Kamwe"], answer: 1, why: "Mwongozo wa FTC unasema siku saba za kazi." },
      { objective: "O4", q: "Je, salio la dukani linaweza kuchukua nafasi ya pesa zinazotakiwa kurudishwa chini ya kanuni hii?", options: ["Wikendi tu", "Ndiyo, kila mara", "Kwa maagizo madogo tu", "Hapana"], answer: 3, why: "Mwongozo unasema salio la dukani haliwezi kuchukua nafasi ya pesa zinazotakiwa kurudishwa." },
      { objective: "O5", q: "Violezo vya majibu vinapaswa kutegemea:", options: ["Sera za washindani", "Kile AI inachowaza", "Sera zako halisi", "Hakuna kitu"], answer: 2, why: "Violezo lazima vilingane na unachofanya kweli." },
      { objective: "O5", q: "Chatbot ya duka inapaswa:", options: ["Kusema ni ya kiotomatiki na kutoa njia ya kumfikia mtu", "Kujifanya ni mtu", "Kuahidi kurudisha pesa yoyote", "Kutokuwa na ukweli wowote"], answer: 0, why: "Uaminifu na njia ya kumfikia mtu hujenga imani." },
      { objective: "O6", q: "Barua pepe za matangazo lazima ziwe na:", options: ["Nywila ya mnunuzi", "Anwani yako halisi ya mahali na njia ya kujiondoa", "Tarehe ya mwisho ya uongo", "Matangazo yaliyofichwa"], answer: 1, why: "Hii ni misingi ya CAN-SPAM." },
      { objective: "O6", q: "Kanuni ya FTC kuhusu maoni ya uongo inapiga marufuku:", options: ["Kuomba maoni ya kweli", "Maoni yaliyotengenezwa na AI kutoka kwa watu wasiokuwepo", "Kujibu maoni", "Kuonyesha maoni halisi"], answer: 1, why: "Maoni ya uongo, pamoja na yale yaliyotengenezwa na AI, yamepigwa marufuku." },
      { objective: "O6", q: "Kutumia AI kwenye maoni yako halisi kunaweza kukusaidia:", options: ["Kupata mwenendo wa kile wanunuzi wanapenda na wanacholalamikia", "Kufuta maoni mabaya", "Kuandika maoni zaidi", "Kubadilisha alama za nyota"], answer: 0, why: "Mwenendo unaonyesha cha kurekebisha." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 2, 4, 7, 8, 11, 12, 15, 17]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Soko dogo lenye ushahidi", objective: "O1", notYet: "Soko dogo ni la kubahatisha, au ushahidi pekee ni kile AI ilichosema.", meets: "Muhtasari unataja soko dogo na unatoa ushahidi halisi wa mahitaji kutoka soko la mtandaoni.", exceeds: "Pia unataja tatizo kutoka kwenye maoni ya washindani ambalo bidhaa yako inaweza kurekebisha." },
      { name: "Maelezo ya kweli ya bidhaa", objective: "O2", notYet: "Maelezo ya bidhaa yana dai lisilo la kweli au ambalo halijakaguliwa.", meets: "Maelezo matatu ya bidhaa yenye jina wazi, maelezo na taarifa muhimu, yote ya kweli.", exceeds: "Kila maelezo pia yanatumia maneno ambayo wanunuzi hutafuta na yanajibu ukubwa, malighafi na muda wa usafirishaji." },
      { name: "Picha wazi na halisi", objective: "O3", notYet: "Picha si wazi, au uhariri unabadilisha jinsi bidhaa inavyoonekana.", meets: "Kila bidhaa ina picha kuu safi na picha ya ukubwa zinazolingana na bidhaa halisi.", exceeds: "Kila bidhaa pia ina pembe kadhaa na picha ya karibu ya maelezo madogo." },
      { name: "Usafirishaji na kurudisha bidhaa", objective: "O4", notYet: "Hakuna muda wa usafirishaji, au muda usioweza kuutimiza; hakuna mpango wa kuchelewa.", meets: "Sera zilizoandikwa zenye muda wa usafirishaji unaoweza kuutimiza na ujumbe wa kuchelewa unaotoa nafasi ya kurudishiwa pesa.", exceeds: "Sera ya kurudisha bidhaa pia inasema wazi nani analipia usafirishaji wa kurudisha na pesa zinarudishwa kwa haraka kiasi gani." },
      { name: "Majibu kwa wateja", objective: "O5", notYet: "Violezo chini ya vitano, au kiolezo kisicholingana na sera zako.", meets: "Violezo vitano vilivyokaguliwa vinavyotokana na sera zako halisi.", exceeds: "Violezo pia vinasema mteja atajibiwa lini na jinsi ya kumfikia mtu." },
      { name: "Barua pepe na ombi la maoni", objective: "O6", notYet: "Barua pepe haina anwani wala njia ya kujiondoa, au ombi la maoni linatoa zawadi kwa maoni mazuri.", meets: "Barua pepe ina anwani yako na njia ya kujiondoa, na ombi la maoni linaomba maoni ya kweli.", exceeds: "Ombi la maoni linatumwa kwa kila mnunuzi, si wale walio na furaha tu." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaochapisha angalau maelezo ya bidhaa moja ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaofanya mauzo yao ya kwanza mtandaoni ndani ya siku 90",
      "Wanafunzi wanaoanza kozi nyingine ya biashara ya Koach Learn ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Kamera ya simu na mandharinyuma isiyo na pambo kwa picha za bidhaa",
      "Msaidizi wa AI wa bure (kama ChatGPT, Microsoft Copilot au Google Gemini) na zana ya bure ya kuondoa mandharinyuma",
      "Bidhaa moja halisi, au bidhaa unayopanga kuuza",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Mwombe kila mwanafunzi alete bidhaa moja halisi au wazo la bidhaa lililo wazi ili mazoezi yajenge kifurushi halisi cha uzinduzi.",
      "Tafuteni pamoja kurasa za kanuni ya FTC ya maagizo kwa barua, kanuni za maoni na CAN-SPAM kwenye ftc.gov badala ya kutegemea muhtasari wa AI.",
      "Wakumbushe wanafunzi wasiweke kamwe majina, anwani au taarifa za maagizo za wateja kwenye zana za AI.",
      "Ada za majukwaa hubadilika mara kwa mara; wanafunzi wakague ukurasa wa bei wa kila jukwaa kabla ya kuchagua moja.",
      "Pima kifurushi cha uzinduzi kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};

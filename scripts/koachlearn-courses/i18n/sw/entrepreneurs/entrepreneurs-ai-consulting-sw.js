"use strict";

// Koach Learn course (Swahili translation of entrepreneurs/entrepreneurs-ai-consulting.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "entrepreneurs-ai-consulting-sw",
  lang: "sw",
  translationOf: "entrepreneurs-ai-consulting",
  category: "Entrepreneurs",
  name: "Kuanzisha Biashara ya Ushauri wa AI",
  skills: "Kuchagua eneo maalum la ushauri, Kujenga ushahidi kwa mradi wa majaribio, Kupanga vifurushi vya huduma na bei, Kufanya ukaguzi wa AI kwa mteja, Kuandika pendekezo, Kushughulikia data za mteja na mikataba",
  outcome: "kuanzisha kazi ndogo ya ushauri wa AI: kuchagua eneo maalum, kupanga huduma tatu zenye bei, kufanya ukaguzi wa AI kwa biashara ndogo halisi, na kuugeuza kuwa pendekezo la ukurasa mmoja lenye kanuni wazi za kushughulikia data za mteja.",
  about: [
    "Biashara nyingi ndogo zinajua zinapaswa kutumia AI lakini hazijui zianzie wapi. Mshauri wa AI anazisaidia kupata matumizi sahihi, kuweka zana, kufundisha wafanyakazi na kubaki salama. Huhitaji kuwa mtengeneza programu; unahitaji kuelewa matatizo ya biashara, kujua vizuri zana kuu za AI, na kuwa mkweli kuhusu kile AI inachoweza na isichoweza kufanya.",
    "Kozi hii ni kwa watu wenye uzoefu wa biashara au kazi wanaotaka kutoa msaada wa AI kwa biashara ndogo, mashirika yasiyo ya faida au mashirika ya mtaani. Utachagua eneo maalum, utajenga ushahidi kwa mradi wa majaribio, utapanga huduma zako na bei, utapata wateja, utafanya ukaguzi wa AI, utaandika pendekezo, na utaweka kanuni za data za mteja na mikataba.",
    "Kila somo linachukua kama dakika tano na lina kazi ya kufanya kwa mikono. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Mambo ya kodi na sheria yana viungo vya vyanzo rasmi; ongea na mhasibu na wakili kuhusu mpangilio wako mwenyewe."
  ],
  finalTask: "Tengeneza kifurushi chako cha kuanzia ushauri wa AI: eneo maalum na huduma yako kwa sentensi moja, vifurushi vitatu vya huduma vyenye bei, dodoso la ukaguzi wa AI la maswali 10, matokeo ya ukaguzi wa biashara moja halisi (taarifa binafsi zikiondolewa), pendekezo la ukurasa mmoja kwa biashara hiyo, na kanuni zako za data za mteja zilizoandikwa.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wenye uzoefu wa biashara au kazi wanaotaka kutoa msaada wa AI kwa biashara ndogo, mashirika yasiyo ya faida au mashirika ya mtaani. Wengi si watengeneza programu.",
    startingPoint: "Wanatumia vizuri zana kuu za AI na wanajua angalau sekta moja au aina moja ya biashara. Wachache wamewahi kupanga huduma na kuipa bei, kufanya ukaguzi, kuandika pendekezo au kuweka kanuni za data za mteja.",
    gap: "Biashara ndogo zinahitaji msaada wa AI ulio wa kweli na wa vitendo, lakini washauri wapya mara nyingi huuza huduma zisizo wazi, hutoza bei ndogo kwa muda wao, huahidi matokeo kupita kiasi au hushughulikia vibaya data za wateja. Wanafunzi wanahitaji huduma iliyolenga jambo moja, ushahidi halisi, vifurushi vilivyo wazi, ukaguzi unaoweza kurudiwa na kanuni za data zilizoandikwa ili kupata na kubaki na wateja.",
    constraints: [
      "Maneno rahisi; hakuna haja ya kujua programu",
      "Vifaa: kompyuta yenye msaidizi wa AI wa bure, lahajedwali (spreadsheet) na barua pepe",
      "Muda: kama dakika tano kwa kila somo pamoja na kazi na mteja halisi au wa mazoezi",
      "Kanuni za barua pepe za matangazo zinatumika; mpangilio wa kodi na sheria unakaguliwa kwa vyanzo rasmi, mhasibu na wakili",
      "Majina ya wateja na taarifa zao binafsi huondolewa kabla maelezo yoyote hayajawekwa kwenye AI"
    ],
    prerequisites: "Inapendekezwa kwanza kozi \"Zana za AI Kila Mjasiriamali Anapaswa Kujua\" na \"Maadili, Hatari na Masuala ya Kisheria ya AI\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia sekta na biashara unazozijua", action: "kuandika huduma ya ushauri kwa sentensi moja kwa aina maalum ya mteja", standard: "ukitaja unamsaidia nani, matokeo gani na kwa njia gani" },
    { id: "O2", condition: "Ukipata biashara moja iliyo tayari kujaribu msaada wako", action: "kupanga mradi wa majaribio wenye matokeo moja yanayopimika na namba za kabla na baada", standard: "kwa ruhusa ya maandishi ya mteja kabla ya kushiriki matokeo yoyote" },
    { id: "O3", condition: "Ukitumia huduma yako na gharama zako kwa saa", action: "kutengeneza vifurushi vitatu vya huduma vyenye vitu vitakavyotolewa, muda, mahitaji kutoka kwa mteja na bei", standard: "hesabu ya saa ikiwa imekaguliwa kwenye lahajedwali, ikijumuisha muda wa kukagua na kufuatilia" },
    { id: "O4", condition: "Ukitumia mtandao wako wa watu na eneo lako maalum", action: "kupanga kuwafikia wateja kumi wanaowezekana na kuandaa muhtasari wa hotuba fupi kwa wamiliki", standard: "kwa ujumbe binafsi wenye anwani yako na njia ya kujiondoa" },
    { id: "O5", condition: "Ukipewa dodoso la ukaguzi la maswali 10 na mmiliki mmoja wa biashara", action: "kufanya ukaguzi wa AI na kupendekeza matumizi matatu bora ya AI", standard: "ukipima mawazo kwa muda unaookolewa, gharama, urahisi na hatari, na kinga kwa kila moja" },
    { id: "O6", condition: "Kwa biashara uliyoikagua", action: "kuandika pendekezo la ukurasa mmoja na kanuni zako za data za mteja", standard: "hali ya mteja ikiwa kwa maneno yake mwenyewe na data zikifutwa au kurudishwa mwishoni" }
  ],
  chapters: [
    {
      name: "Sura 1: Anzisha kazi yako ya ushauri",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuchagua eneo lako maalum na huduma yako",
          minutes: 5,
          goal: "Andika huduma yako kwa sentensi moja kwa aina maalum ya mteja.",
          text: [
            "\"Ninasaidia biashara kwa AI\" ni vigumu kuuza. \"Ninasaidia migahawa huru kuokoa saa 5 kwa wiki katika kuagiza bidhaa, kupanga zamu za kazi na mitandao ya kijamii kwa zana rahisi za AI\" ni rahisi kuelewa na rahisi kupendekeza kwa wengine.",
            "Chagua eneo maalum ambalo tayari una uzoefu au watu unaowajua: sekta uliyofanya kazi, jamii unayoishi nayo, au aina ya shirika (saluni, makanisa, makandarasi, ofisi za mapokezi za kliniki, mashirika yasiyo ya faida). Uzoefu wako wa zamani ndio faida yako kuliko watu wa teknolojia wa jumla.",
            "Omba AI ikusaidie: \"Nimefanya kazi miaka 8 katika [fani]. Orodhesha kazi zinazorudiwa ambazo biashara ndogo katika fani hii hufanya na ambazo zana za AI zinaweza kuziharakisha.\" Kisha andika huduma yako: unamsaidia nani, matokeo gani, na kwa njia gani."
          ],
          steps: ["Orodhesha sekta au jamii unazozijua vizuri.", "Omba AI ikutajie kazi zinazorudiwa katika fani hizo ambazo AI inaweza kuziharakisha.", "Chagua eneo moja maalum.", "Andika huduma yako: unamsaidia nani, matokeo gani, kwa njia gani."],
          words: [["Mshauri", "mtaalamu anayeishauri biashara na kuisaidia kufanya mabadiliko."], ["Eneo maalum (niche)", "aina maalum ya wateja unaowalenga."], ["Huduma (offer)", "maelezo wazi ya unamsaidia nani, matokeo gani na kwa njia gani."]],
          slides: [
            { title: "Kilicho mahususi kinauzika", bullets: ["Si \"Ninasaidia biashara kwa AI\"", "\"Ninasaidia migahawa huru kuokoa saa 5 kwa wiki\""] },
            { title: "Tumia unachokijua", bullets: ["Sekta uliyofanya kazi", "Jamii unayoishi nayo", "Uzoefu wako ndio faida yako"] },
            { title: "Andika huduma yako", bullets: ["Unamsaidia nani", "Matokeo gani", "Kwa njia gani"] }
          ],
          tryIt: "Chagua eneo lako maalum kwa msaada wa AI na uandike huduma yako kwa sentensi moja: nani, matokeo gani, kwa njia gani.",
          youCanNow: "kueleza huduma ya ushauri wa AI iliyolenga jambo moja ambayo wateja wanaielewa haraka.",
          quickCheck: [
            { objective: "O1", q: "Eneo maalum (niche) katika ushauri ni nini?", options: ["Aina maalum ya wateja unaowalenga", "Kila biashara nchini", "Aina ya zana ya AI", "Bei yako kwa saa"], answer: 0, why: "Eneo maalum linakusaidia kuelewa kwa kina matatizo ya wateja." },
            { objective: "O1", q: "Huduma yako inasema \"Ninasaidia biashara kwa AI\". Unafanya nini?", options: ["Uiache iwe ya jumla", "Utaje unamsaidia nani, matokeo gani na kwa njia gani", "Uongeze orodha ya kila zana ya AI", "Uiondoe huduma"], answer: 1, why: "Huduma imara ni mahususi ili wateja waielewe haraka." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kujenga ushahidi kwa mradi wa majaribio",
          minutes: 5,
          goal: "Panga mradi mdogo wa majaribio unaokupa matokeo halisi ya kuonyesha.",
          text: [
            "Wateja wanataka ushahidi kwamba unaweza kusaidia. Kama wewe ni mgeni, fanya mradi wa majaribio (pilot): mradi mdogo na mfupi kwa biashara moja (duka la rafiki, shirika la mtaani lisilo la faida) kwa malipo kidogo au bure, kwa kubadilishana na ruhusa ya kushiriki matokeo na ushuhuda.",
            "Chagua mradi wa majaribio wenye matokeo yanayopimika: \"Weka violezo vya majibu vya AI na upunguze muda wa barua pepe kutoka saa 6 hadi 3 kwa wiki.\" Pima kabla na baada.",
            "Uandike kama mfano mfupi wa kazi halisi (case study): tatizo, ulichofanya, matokeo kwa namba, na maneno ya mmiliki. Pata ruhusa ya maandishi kabla ya kushiriki, na uondoe chochote cha siri. Usitunge kamwe matokeo au ushuhuda."
          ],
          steps: ["Tafuta biashara moja iliyo tayari kujaribu mradi wa majaribio.", "Kubalianeni juu ya matokeo moja yanayopimika.", "Pima kabla hujaanza.", "Fanya kazi na upime baadaye.", "Andika mfano mfupi wa kazi halisi kwa ruhusa."],
          words: [["Mradi wa majaribio (pilot)", "mradi mdogo wa kujaribu ili kuonyesha kwamba kitu kinafanya kazi."], ["Mfano wa kazi halisi (case study)", "hadithi fupi ya mradi halisi: tatizo, kazi, matokeo."], ["Ushuhuda (testimonial)", "maneno ya mteja kuhusu kazi yako, yanayotumiwa kwa ruhusa yake."]],
          slides: [
            { title: "Mgeni? Fanya mradi wa majaribio", bullets: ["Biashara moja, mradi mfupi na mdogo", "Malipo kidogo au bure", "Kwa kubadilishana: ruhusa ya kushiriki matokeo"] },
            { title: "Upime", bullets: ["Matokeo moja yaliyo wazi", "Namba za kabla na baada"] },
            { title: "Andika mfano wa kazi halisi", bullets: ["Tatizo, kazi, matokeo, maneno ya mmiliki", "Ruhusa ya maandishi", "Usitunge kamwe matokeo"] }
          ],
          tryIt: "Andika mpango wa mradi wa majaribio: biashara gani, matokeo moja yanayopimika, utakavyopima kabla na baada, na unachoomba kwa kubadilishana.",
          youCanNow: "kupanga mradi wa majaribio unaogeuka kuwa ushahidi wa kweli kwa biashara yako ya ushauri.",
          quickCheck: [
            { objective: "O2", q: "Mradi wa majaribio unapaswa kupima nini?", options: ["Ulitumia zana ngapi", "Barua pepe zako zilikuwa ndefu kiasi gani", "Matokeo moja yenye namba za kabla na baada", "Hakuna; ni bure"], answer: 2, why: "Matokeo yanayopimika yanageuza mradi wa majaribio kuwa ushahidi wa kweli." },
            { objective: "O2", q: "Mradi wako wa majaribio ulimwokolea mteja saa 2 kwa wiki, si saa 5 ulizotarajia. Unashiriki nini?", options: ["Kusema uliokoa saa 5", "Kuficha mradi", "Kuzungusha hadi saa 4", "Matokeo halisi, kwa ruhusa ya mteja"], answer: 3, why: "Usitunge kamwe matokeo; shiriki tu kilichotokea kweli." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kupanga vifurushi vya huduma zako na bei",
          minutes: 6,
          goal: "Tengeneza vifurushi vitatu vya huduma vyenye vitu vitakavyotolewa na bei zilizo wazi.",
          text: [
            "Vifurushi ni rahisi kununua kuliko saa zisizo na kikomo. Mpangilio wa kawaida: Ukaguzi wa AI (kuikagua biashara na kupendekeza matumizi matatu bora ya AI), Uwekaji wa AI (kuweka zana, violezo na mifumo rahisi inayojiendesha), na Mafunzo ya AI (kumfundisha mmiliki na wafanyakazi, pamoja na miongozo ya maandishi). Baadhi ya washauri huongeza mpango wa msaada wa kila mwezi.",
            "Kwa kila kifurushi andika: mteja anapata nini, kinachukua muda gani, unahitaji nini kutoka kwake, na bei. Weka bei kwa kuangalia thamani na muda wako: kadiria saa zako, ongeza muda wa kukagua na kufuatilia, na linganisha na kile huduma kama hizo za mtaani zinatoza.",
            "Pata EIN kutoka IRS (ofisi ya kodi ya Marekani) kama unaihitaji (IRS inasema ni bure na inaonya kuhusu tovuti zinazotoza pesa). Kama mtu aliyejiajiri, kwa kawaida unalipa kodi ya kujiajiri na huenda ukahitaji kulipa kodi za makadirio kila robo mwaka; tazama irs.gov na ongea na mhasibu."
          ],
          steps: ["Andika vifurushi vitatu: Ukaguzi, Uwekaji, Mafunzo.", "Kwa kila kimoja: vitu vitakavyotolewa, muda, unachohitaji kutoka kwa mteja, bei.", "Kadiria saa zako ukijumuisha kukagua na kufuatilia.", "Linganisha na bei za mtaani na ukague hesabu yako.", "Tafuta misingi ya kodi kwenye irs.gov na umuulize mhasibu."],
          words: [["Kifurushi", "huduma iliyoelezwa yenye vitu maalum vitakavyotolewa na bei maalum."], ["Retainer", "malipo ya kila mwezi kwa msaada unaoendelea."], ["EIN", "Employer Identification Number: namba ya bure ya kodi ya serikali kuu ya Marekani kwa biashara, kutoka IRS."]],
          slides: [
            { title: "Vifurushi vitatu", bullets: ["Ukaguzi wa AI: matumizi matatu bora ya AI", "Uwekaji wa AI: zana, violezo, mifumo inayojiendesha", "Mafunzo ya AI: mmiliki na wafanyakazi, pamoja na miongozo"] },
            { title: "Kila kifurushi kinasema", bullets: ["Mteja anapata nini", "Muda gani, unahitaji nini kutoka kwake", "Bei"] },
            { title: "Jipange ipasavyo", bullets: ["IRS: EIN ni bure; jihadhari na tovuti zinazotoza", "Kodi ya kujiajiri na kodi za makadirio", "Muulize mhasibu"] }
          ],
          sources: [{ name: "IRS: Get an Employer Identification Number", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" }, { name: "IRS: Self-Employed Individuals Tax Center", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }],
          tryIt: "Andika vifurushi vyako vitatu vyenye vitu vitakavyotolewa, muda, mahitaji kutoka kwa mteja na bei ya kila kimoja, na ukague hesabu yako ya saa kwenye lahajedwali.",
          youCanNow: "kupanga huduma za ushauri wa AI katika vifurushi na kuzipa bei kwa uwazi.",
          quickCheck: [
            { objective: "O3", q: "Kwa nini uuze vifurushi badala ya saa zisizo na kikomo?", options: ["Ni rahisi kwa wateja kuvielewa na kuvinunua", "Vinaficha bei yako", "Vinaondoa haja ya vitu vitakavyotolewa", "Vinamaanisha kazi kidogo"], answer: 0, why: "Vifurushi vilivyo wazi vinarahisisha ununuzi kwa wateja." },
            { objective: "O3", q: "Bei ya kifurushi chako haiachi muda wa maswali ya kufuatilia. Unafanya nini?", options: ["Kupuuza ufuatiliaji", "Kuongeza muda wa kufuatilia kwenye saa zako na kuweka bei upya", "Kutoza zaidi baadaye bila kumwambia mteja", "Kuondoa vitu vitakavyotolewa"], answer: 1, why: "Bei lazima ijumuishe muda wa kukagua na kufuatilia." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Anzisha kazi yako ya ushauri",
        questions: [
          { objective: "O1", q: "Huduma ipi ya ushauri ni imara zaidi?", options: ["\"Ninafanya mambo ya AI\"", "\"Ninasaidia migahawa huru kuokoa saa 5 kwa wiki kwa zana rahisi za AI\"", "\"Ninasaidia kila mtu kwa kila kitu\"", "\"Mtaalamu wa AI, nipigie\""], answer: 1, why: "Inataja nani, matokeo gani na kwa njia gani." },
          { objective: "O1", q: "Faida kuu ya kuchagua eneo maalum unalolijua ni ipi?", options: ["Linakuepusha na kodi", "Daima ndilo lenye faida kubwa zaidi", "Huhitaji kujifunza AI", "Unaelewa matatizo ya wateja vizuri kuliko watu wa teknolojia wa jumla"], answer: 3, why: "Uzoefu katika fani ndio faida yako." },
          { objective: "O2", q: "Mteja wa mradi wa majaribio anakubali malipo kidogo. Unaomba nini kwa kubadilishana?", options: ["Ruhusa ya kushiriki matokeo na ushuhuda", "Nywila ya benki yake", "Maoni ya uongo", "Hakuna kitu"], answer: 0, why: "Mradi wa majaribio unajenga ushahidi wa kweli." },
          { objective: "O2", q: "Unaweza kutunga matokeo ya mfano wa kazi halisi kama mradi wa majaribio ulienda vibaya?", options: ["Ndiyo, kama hakuna anayekagua", "Ndiyo, kama ni kidogo", "Hapana, usitunge kamwe matokeo", "Kwenye mitandao ya kijamii tu"], answer: 2, why: "Matokeo ya kutunga si ya kweli na yanapotosha." },
          { objective: "O3", q: "IRS inasema nini kuhusu kupata EIN?", options: ["Ni mawakili tu wanaoweza kuipata", "Inagharimu $500", "Ni bure; jihadhari na tovuti zinazotoza", "Lazima ulipe kila mwezi"], answer: 2, why: "IRS inatoa EIN bila malipo." }
        ]
      }
    },
    {
      name: "Sura 2: Pata wateja na uwahudumie",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kupata wateja wako wa kwanza",
          minutes: 5,
          goal: "Panga jinsi ya kuwafikia wateja wako kumi wa kwanza wanaowezekana.",
          text: [
            "Wateja wako wa kwanza kwa kawaida hutoka kwa watu wanaokujua tayari: wafanyakazi wenzako wa zamani, vikundi vya biashara vya mtaani, kanisa au jamii yako, na mapendekezo kutoka mradi wako wa majaribio. Hotuba fupi ya bure au warsha (\"Njia 5 AI inavyoweza kuokoa muda wa saluni yako\") ni njia nzuri ya kukutana na wamiliki.",
            "Andika ujumbe binafsi, si barua pepe za wingi. AI inaweza kuziandika rasimu: \"Andika ujumbe wa maneno 70 kwa mmiliki wa saluni niliyekutana naye kwenye tukio la chemba ya biashara, ukimpa ukaguzi wa AI wa bure wa dakika 20. Wa kirafiki, bila kutia chumvi.\" Ongeza jambo moja la kweli.",
            "Ukiwatumia watu barua pepe za biashara, fuata misingi ya CAN-SPAM (sheria ya Marekani ya barua pepe za matangazo): mstari wa \"From\" na kichwa cha habari vya kweli, anwani yako halisi ya mahali na njia wazi ya kujiondoa, inayoheshimiwa ndani ya siku 10 za kazi. Usiahidi matokeo usiyoweza kuthibitisha."
          ],
          steps: ["Orodhesha wamiliki au mashirika kumi katika eneo lako maalum unaoweza kuwafikia.", "Panga hotuba moja ya bure au warsha.", "Andika rasimu za ujumbe binafsi kwa AI na uongeze jambo moja la kweli kwa kila mmoja.", "Weka anwani yako na njia ya kujiondoa katika barua pepe za biashara.", "Fuatilia uliowasiliana nao na majibu yao."],
          words: [["Pendekezo la mtu (referral)", "mtu anayejua kazi yako anapokupendekeza kwa wengine."], ["Warsha", "kipindi kifupi ambapo unafundisha kikundi jambo lenye manufaa."]],
          slides: [
            { title: "Anza na watu wanaokujua", bullets: ["Wafanyakazi wenzako wa zamani na jamii", "Vikundi vya biashara vya mtaani", "Mapendekezo kutoka mradi wako wa majaribio"] },
            { title: "Fundisha ili ukutane na wamiliki", bullets: ["Hotuba fupi ya bure au warsha", "\"Njia 5 AI inavyoweza kuokoa muda wa saluni yako\""] },
            { title: "Mawasiliano binafsi, kwa kufuata kanuni", bullets: ["AI inaandika rasimu; wewe unaongeza jambo la kweli", "CAN-SPAM: maneno ya kweli, anwani, njia ya kujiondoa", "Hakuna ahadi usizoweza kuthibitisha"] }
          ],
          sources: [{ name: "FTC: CAN-SPAM Act Compliance Guide for Business", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }],
          tryIt: "Orodhesha wateja kumi wanaowezekana, andika ujumbe binafsi mitatu kwa msaada wa AI, na uandae muhtasari wa hotuba ya dakika 20 unayoweza kuwapa wamiliki katika eneo lako maalum.",
          youCanNow: "kuwafikia wateja wako wa kwanza kupitia watu unaowajua, hotuba na mawasiliano ya kweli.",
          quickCheck: [
            { objective: "O4", q: "Wateja wa kwanza wa ushauri kwa kawaida hutoka wapi?", options: ["Orodha za barua pepe zilizonunuliwa", "Simu za kubahatisha nje ya nchi", "Watu wanaokujua tayari na mapendekezo", "Matangazo ya kulipia siku ya kwanza"], answer: 2, why: "Mtandao wako wa watu na mapendekezo ndio wanaokuamini kwanza." },
            { objective: "O4", q: "AI inaandika rasimu ya barua pepe ya kuwafikia wateja bila anwani wala njia ya kujiondoa. Unafanya nini?", options: ["Kuituma", "Kuituma kwa orodha iliyonunuliwa", "Kuifanya ndefu zaidi", "Kuongeza anwani yako halisi na mstari wa kujiondoa"], answer: 3, why: "Barua pepe za biashara za kuwafikia wateja lazima ziwe na anwani na njia ya kujiondoa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kufanya ukaguzi wa AI",
          minutes: 6,
          goal: "Mhoji mmiliki wa biashara na upendekeze matumizi yake matatu bora ya AI.",
          text: [
            "Ukaguzi wa AI ni uchunguzi wa mpangilio wa jinsi biashara inavyofanya kazi na mahali AI inapoweza kusaidia. Tumia dodoso fupi: Kazi gani zinachukua muda mwingi zaidi kila wiki? Wateja huuliza nini zaidi? Makosa hutokea wapi? Tayari unatumia zana gani? Nini kinakutia wasiwasi kuhusu AI?",
            "Kutokana na majibu, pima kila matumizi ya AI yanayowezekana kwa muda unaookolewa, gharama, urahisi na hatari. AI inaweza kukusaidia kupanga na kupima (jina la biashara na taarifa za siri zikiondolewa), lakini uamuzi wako ndio muhimu zaidi. Chagua matatu bora: mafanikio ya haraka kwanza.",
            "Weka hatari na kinga kwa kila pendekezo: nani anakagua kazi ya AI, data gani lazima zibaki nje ya zana za AI, na chochote kinachohitaji wakili au mhasibu. Kusema ukweli kuhusu mipaka kunawafanya wateja wakuamini zaidi."
          ],
          steps: ["Tumia dodoso la ukaguzi la maswali 10 na mmiliki.", "Orodhesha kila matumizi ya AI yanayowezekana uliyoyasikia.", "Pima kila moja kwa muda unaookolewa, gharama, urahisi na hatari.", "Chagua matatu bora, mafanikio ya haraka kwanza.", "Ongeza kinga kwa kila moja: ukaguzi wa mtu, kanuni ya data, mtaalamu inapohitajika."],
          words: [["Ukaguzi wa AI", "uchunguzi wa mpangilio wa biashara ili kupata mahali AI inapoweza kusaidia kwa usalama."], ["Mafanikio ya haraka (quick win)", "badiliko ambalo ni rahisi kufanya na linasaidia mara moja."], ["Kinga", "hatua inayozuia madhara, kama ukaguzi wa mtu."]],
          slides: [
            { title: "Maswali ya ukaguzi", bullets: ["Nini kinachukua muda mwingi zaidi?", "Wateja huuliza nini zaidi?", "Makosa hutokea wapi? Nini kinakutia wasiwasi?"] },
            { title: "Pima na uchague", bullets: ["Muda unaookolewa, gharama, urahisi, hatari", "Matatu bora, mafanikio ya haraka kwanza", "AI inasaidia kupanga; wewe unaamua"] },
            { title: "Ongeza kinga", bullets: ["Nani anakagua kazi ya AI", "Data gani zinabaki nje ya zana za AI", "Wakati wa kumhusisha wakili au mhasibu"] }
          ],
          tryIt: "Andika dodoso lako la ukaguzi la maswali 10 na ulitumie na mmiliki mmoja halisi wa biashara (au rafiki anayejifanya mmiliki). Pima mawazo na uandike matatu bora pamoja na kinga zake.",
          youCanNow: "kufanya ukaguzi wa AI na kuipa biashara mapendekezo matatu salama na ya vitendo.",
          quickCheck: [
            { objective: "O5", q: "Mapendekezo gani ya ukaguzi yanapaswa kuja kwanza?", options: ["Mafanikio ya haraka ambayo ni rahisi na yanasaidia mara moja", "Zana za bei ghali zaidi", "Mawazo yenye hatari kubwa zaidi", "Chochote AI inachopendekeza"], answer: 0, why: "Mafanikio ya haraka yanajenga imani na kuonyesha thamani mapema." },
            { objective: "O5", q: "Unataka AI ikusaidie kupanga maelezo yako ya ukaguzi. Unafanya nini kwanza?", options: ["Kuyabandika kama yalivyo", "Kuondoa jina la biashara na taarifa za siri", "Kumtumia rafiki kwa barua pepe", "Kuyaweka mtandaoni"], answer: 1, why: "Taarifa za mteja zinabaki nje ya zana za AI." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mapendekezo, mikataba na data za mteja",
          minutes: 6,
          goal: "Andika pendekezo la ukurasa mmoja na kanuni zako za kushughulikia data za mteja.",
          text: [
            "Pendekezo linageuza ukaguzi wako kuwa uamuzi. Ukurasa mmoja: hali ya mteja kwa maneno yake, mapendekezo matatu, kifurushi unachopendekeza, utakachotoa na lini, bei, na unachohitaji kutoka kwake. AI inaweza kuliandika rasimu kutoka maelezo yako; lihariri ili kila ahadi iwe unayoweza kuitimiza.",
            "Pata mkataba wa maandishi kabla ya kuanza kazi ya kulipwa: wigo wa kazi, bei, masharti ya malipo, ratiba, nani anamiliki unachotengeneza, na usiri. Violezo vipo, lakini wakili akague chako.",
            "Andika kanuni za data za mteja na uzifuate: usiweke kamwe orodha za wateja wa mteja, rekodi za fedha, nywila au taarifa za siri kwenye zana za AI bila ruhusa yake ya maandishi na zana ambayo masharti yake ya data yanafaa; tumia akaunti zake, si zako, kwa zana zinazohifadhi data zake; na futa au rudisha data zake mradi unapoisha. Mwongozo wa FTC (tume ya biashara ya Marekani) kuhusu kulinda taarifa binafsi ni msingi mzuri."
          ],
          steps: ["Andika rasimu ya pendekezo la ukurasa mmoja kutoka maelezo ya ukaguzi kwa AI.", "Kagua kila ahadi na bei.", "Andaa mkataba wa maandishi na wakili aukague.", "Andika kanuni zako za data za mteja.", "Shiriki kanuni hizo na wateja kabla hujaanza."],
          words: [["Pendekezo", "hati fupi inayotoa kazi maalum kwa bei maalum."], ["Usiri", "kuweka taarifa za mteja kuwa siri."], ["Wigo wa kazi (scope)", "kazi gani hasa imejumuishwa."]],
          slides: [
            { title: "Pendekezo la ukurasa mmoja", bullets: ["Hali yake kwa maneno yake", "Mapendekezo matatu na kifurushi", "Vitu vitakavyotolewa, ratiba, bei"] },
            { title: "Mkataba wa maandishi", bullets: ["Wigo wa kazi, bei, malipo, ratiba", "Umiliki na usiri", "Wakili aukague"] },
            { title: "Kanuni za data za mteja", bullets: ["Hakuna data za siri za mteja kwenye AI bila ruhusa ya maandishi", "Tumia akaunti za mteja mwenyewe", "Futa au rudisha data mwishoni"] }
          ],
          sources: [{ name: "FTC: Protecting Personal Information, A Guide for Business", url: "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business" }],
          tryIt: "Kazi ya mwisho: andika pendekezo la ukurasa mmoja kwa biashara uliyoikagua na kanuni zako za data za mteja, kisha kusanya kifurushi chako cha kuanzia ushauri: huduma, vifurushi, dodoso, matokeo ya ukaguzi, pendekezo na kanuni za data.",
          youCanNow: "kupata na kuwahudumia wateja wa ushauri wa AI kwa mapendekezo, mikataba na kanuni za data zilizo wazi.",
          quickCheck: [
            { objective: "O6", q: "Mkataba wa maandishi wa ushauri unahusu nini?", options: ["Bei tu", "Zana unazozipenda", "Wigo wa kazi, bei, malipo, ratiba, umiliki na usiri", "Maisha binafsi ya mteja"], answer: 2, why: "Mkataba ulio wazi unazuia kutoelewana." },
            { objective: "O6", q: "Mradi umeisha na bado una mafaili ya mteja. Unafanya nini?", options: ["Kuyaweka milele", "Kuyatumia kwa mteja mwingine", "Kuyashiriki kama mfano", "Kuyafuta au kuyarudisha kama kanuni zako za data zinavyosema"], answer: 3, why: "Data za mteja zinapaswa kufutwa au kurudishwa mwishoni mwa mradi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Pata wateja na uwahudumie",
        questions: [
          { objective: "O4", q: "Wateja wa kwanza wa ushauri kwa kawaida hutoka wapi?", options: ["Watu wanaokujua tayari na mapendekezo", "Orodha za barua pepe zilizonunuliwa", "Simu za kubahatisha kwa sauti za AI", "Maoni ya uongo"], answer: 0, why: "Imani na mapendekezo ndivyo vinavyoleta wateja wa kwanza." },
          { objective: "O5", q: "Lipi ni swali zuri la ukaguzi wa AI?", options: ["\"Naweza kupata orodha yako ya wateja?\"", "\"Nywila yako ya benki ni ipi?\"", "\"Unapenda roboti?\"", "\"Kazi gani zinachukua muda mwingi zaidi kila wiki?\""], answer: 3, why: "Linaonyesha mahali AI inapoweza kuokoa muda." },
          { objective: "O5", q: "Mapendekezo gani yanapaswa kuja kwanza?", options: ["Miradi ya bei ghali zaidi", "Mafanikio ya haraka ambayo ni rahisi na yanasaidia mara moja", "Mawazo yenye hatari zaidi", "Chochote AI inachosema"], answer: 1, why: "Mafanikio ya haraka yanajenga imani na matokeo." },
          { objective: "O6", q: "Kabla ya kuanza kazi ya kulipwa, unapaswa kuwa na:", options: ["Mkataba wa maandishi, uliokaguliwa na wakili", "Kupeana mikono tu", "Hakuna kitu", "Chapisho la mitandao ya kijamii"], answer: 0, why: "Mikataba inazuia kutoelewana." },
          { objective: "O6", q: "Unaweza kubandika orodha ya wateja wa mteja wako kwenye zana ya AI?", options: ["Ndiyo, kama ni zana ya bure", "Ndiyo, wakati wowote", "Tu kwa ruhusa yake ya maandishi na zana ambayo masharti yake ya data yanafaa", "Usiku tu"], answer: 2, why: "Data za mteja zinahitaji ruhusa na ulinzi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kuanzisha Biashara ya Ushauri wa AI",
    questions: [
      { objective: "O1", q: "Mshauri wa AI kimsingi anahitaji:", options: ["Kuwa mtengeneza programu wa muda wote", "Kuelewa matatizo ya biashara na kujua vizuri zana za AI", "Kumiliki kituo cha data", "Kuwa na wafuasi wengi mitandaoni"], answer: 1, why: "Kuelewa biashara pamoja na kujua zana ndio msingi." },
      { objective: "O1", q: "Huduma imara inajumuisha:", options: ["Bei yako kwa saa tu", "Jina lako tu", "Orodha ndefu ya kila zana", "Unamsaidia nani, matokeo gani na kwa njia gani"], answer: 3, why: "Mambo hayo matatu yanaifanya iwe wazi." },
      { objective: "O1", q: "Eneo maalum (niche) ni:", options: ["Bei", "Aina ya modeli ya AI", "Aina ya muundo wa kisheria", "Aina maalum ya wateja unaowalenga"], answer: 3, why: "Kulenga kunarahisisha kujitangaza." },
      { objective: "O2", q: "Mradi wa majaribio (pilot) ni:", options: ["Kazi ya ndege", "Mradi mdogo wa kujaribu ili kuonyesha kwamba kitu kinafanya kazi", "Mkataba mrefu", "Fomu ya kodi"], answer: 1, why: "Miradi ya majaribio inajenga ushahidi." },
      { objective: "O2", q: "Mradi wa majaribio unapaswa kuwa na:", options: ["Malengo kumi", "Hakuna lengo", "Matokeo moja yanayopimika yenye namba za kabla na baada", "Nembo tu"], answer: 2, why: "Namba zinafanya ushahidi uaminike." },
      { objective: "O2", q: "Kabla ya kushiriki mfano wa kazi halisi, unahitaji:", options: ["Ruhusa ya maandishi ya mteja", "Hakuna kitu", "Idhini ya AI", "Ruhusa ya mshindani"], answer: 0, why: "Heshimu faragha na imani ya mteja." },
      { objective: "O3", q: "Vifurushi ni bora kuliko saa zisizo na kikomo kwa sababu:", options: ["Vinakuepusha na kodi", "Daima ni rahisi zaidi kwa bei", "Ni rahisi kwa wateja kuvielewa na kuvinunua", "Havihitaji kazi"], answer: 2, why: "Vitu vitakavyotolewa na bei zilizo wazi vinawasaidia wateja kuamua." },
      { objective: "O3", q: "Kifurushi cha Ukaguzi wa AI kinatoa:", options: ["Uchunguzi wa biashara na mapendekezo bora ya AI", "Tovuti mpya", "Kujaza fomu za kodi", "Ushauri wa kisheria"], answer: 0, why: "Hilo ndilo lengo la ukaguzi." },
      { objective: "O3", q: "Unapoweka bei, jumuisha muda wa:", options: ["Hakuna cha ziada", "Kukagua na kufuatilia", "Safari tu", "Mapumziko ya chai tu"], answer: 1, why: "Muda uliofichika unakula faida." },
      { objective: "O3", q: "Washauri waliojiajiri kwa kawaida hulipa:", options: ["Ada ya leseni tu", "Hakuna kodi", "Kodi ya mauzo tu", "Kodi ya kujiajiri na mara nyingi kodi za makadirio kila robo mwaka"], answer: 3, why: "Kituo cha kodi cha IRS kwa waliojiajiri kinaeleza hili." },
      { objective: "O4", q: "Warsha fupi ya bure inakusaidia:", options: ["Kukutana na wamiliki na kuonyesha unachokijua", "Kuepuka wateja", "Kukusanya nywila", "Kuruka mapendekezo"], answer: 0, why: "Kufundisha kunajenga imani." },
      { objective: "O4", q: "Barua pepe za biashara za kuwafikia wateja lazima ziwe na:", options: ["Uhakikisho wa matokeo", "Nywila ya mteja", "Tarehe ya mwisho ya uongo", "Anwani yako halisi na njia ya kujiondoa"], answer: 3, why: "Hii ni misingi ya CAN-SPAM." },
      { objective: "O5", q: "Katika ukaguzi wa AI, unapima mawazo kwa:", options: ["Jinsi yalivyo maarufu", "Rangi na aina ya herufi", "Muda unaookolewa, gharama, urahisi na hatari", "Zana unayoipenda"], answer: 2, why: "Haya yanaonyesha mawazo gani yanastahili kufanywa." },
      { objective: "O5", q: "Kabla ya kuiomba AI ikusaidie kupanga maelezo ya ukaguzi, unapaswa:", options: ["Kuongeza rekodi zao za benki", "Kuondoa jina la biashara na taarifa za siri", "Kuyaweka mtandaoni", "Kumtumia kila mtu kwa barua pepe"], answer: 1, why: "Linda taarifa za mteja." },
      { objective: "O5", q: "Kila pendekezo linapaswa kujumuisha:", options: ["Hakuna kingine", "Uhakikisho wa matokeo", "Ushuhuda wa uongo", "Kinga, kama nani anakagua kazi ya AI"], answer: 3, why: "Kinga zinafanya matumizi ya AI kuwa salama." },
      { objective: "O6", q: "Pendekezo linapaswa kueleza hali ya mteja:", options: ["Kutoieleza kabisa", "Kwa maneno magumu ya kitaalamu", "Kwa maneno yake mwenyewe", "Kwa kutumia hadithi ya mshindani"], answer: 2, why: "Maneno yake yanaonyesha ulisikiliza." },
      { objective: "O6", q: "Mkataba wa maandishi unahusu:", options: ["Wigo wa kazi, bei, malipo, ratiba, umiliki na usiri", "Nembo yako tu", "Tarehe ya kuanza tu", "Hakuna kitu"], answer: 0, why: "Haya yanazuia migogoro." },
      { objective: "O6", q: "Nani anapaswa kukagua kiolezo cha mkataba wako?", options: ["AI tu", "Wakili", "Wateja wa mteja wako", "Hakuna mtu"], answer: 1, why: "Hati za kisheria zinahitaji ukaguzi wa mtaalamu." },
      { objective: "O6", q: "Kwa zana zinazohifadhi data za mteja, ni bora kutumia:", options: ["Akaunti zako binafsi", "Akaunti za mteja mwenyewe", "Akaunti ya pamoja ya umma", "Zana yoyote ya bure"], answer: 1, why: "Mteja anabaki na udhibiti wa data zake." },
      { objective: "O6", q: "Mwishoni mwa mradi, data za mteja zinapaswa:", options: ["Kufutwa au kurudishwa", "Kuwekwa milele", "Kushirikiwa na wateja wengine", "Kuwekwa mtandaoni"], answer: 0, why: "Usiweke data usizozihitaji tena." }
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
      6,
      8,
      10,
      12,
      14,
      16
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Eneo maalum na huduma",
        objective: "O1",
        notYet: "Huduma haiko wazi au haina mteja maalum.",
        meets: "Sentensi moja inayotaja nani, matokeo gani na kwa njia gani.",
        exceeds: "Inatumia maneno ambayo wateja katika eneo hilo wanayatumia kweli."
      },
      {
        name: "Vifurushi vya huduma",
        objective: "O3",
        notYet: "Vifurushi chini ya vitatu, au bei zisizo na hesabu nyuma yake.",
        meets: "Vifurushi vitatu vyenye vitu vitakavyotolewa, muda, mahitaji kutoka kwa mteja na bei, hesabu ikiwa imekaguliwa.",
        exceeds: "Vinajumuisha muda wa kukagua na kufuatilia na vinaeleza thamani kwa mteja."
      },
      {
        name: "Ukaguzi wa AI",
        objective: "O5",
        notYet: "Hakuna dodoso, au mapendekezo bila alama za kupima wala kinga.",
        meets: "Dodoso la maswali 10, ukaguzi mmoja halisi, matumizi matatu bora yaliyopimwa pamoja na kinga.",
        exceeds: "Mapendekezo yanaanza na mafanikio ya haraka na yanaonyesha muda unaotarajiwa kuokolewa."
      },
      {
        name: "Pendekezo",
        objective: "O6",
        notYet: "Pendekezo ni la jumla au halina wigo wa kazi au bei.",
        meets: "Ukurasa mmoja wenye hali ya mteja kwa maneno yake, wigo wa kazi, bei na ratiba.",
        exceeds: "Linajumuisha matokeo yanayopimika na jinsi yatakavyokaguliwa."
      },
      {
        name: "Kanuni za data za mteja",
        objective: "O6",
        notYet: "Hakuna kanuni za maandishi, au taarifa za siri ziliingia kwenye AI.",
        meets: "Kanuni za maandishi: ruhusa, akaunti za mteja mwenyewe, data kufutwa au kurudishwa mwishoni.",
        exceeds: "Pia zinaeleza zana gani za AI zinaweza kuhifadhi data za mteja na kukagua masharti yake."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaofanya mradi wa majaribio au ukaguzi wa kulipwa na biashara halisi ndani ya siku 60 (utafiti wa kufuatilia)",
      "Wateja wa kwanza wa ushauri wanaolipa na wateja wanaorudi au wanaoletwa kwa mapendekezo",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya wajasiriamali ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye msaidizi wa AI wa bure, lahajedwali na barua pepe",
      "Mmiliki mmoja halisi wa biashara (au rafiki anayejifanya mmiliki) kwa ukaguzi",
      "Kiolezo cha pendekezo la ukurasa mmoja",
      "Kama dakika 60 hadi 75 kwa masomo na majaribio, pamoja na mkutano wa ukaguzi"
    ],
    facilitatorNotes: [
      "Wapange wanafunzi wawili wawili waigize mahojiano ya ukaguzi kabla ya kukutana na mmiliki halisi.",
      "Sisitiza kwamba matokeo ya miradi ya majaribio na mifano ya kazi halisi lazima yawe ya kweli na yashirikiwe tu kwa ruhusa ya maandishi.",
      "Hakikisha majina ya wateja na taarifa za siri zimeondolewa kabla maelezo hayajawekwa kwenye AI.",
      "Elekeza maswali ya kodi na mikataba kwenye vyanzo rasmi, mhasibu na wakili.",
      "Pima kifurushi cha kuanzia kwa rubriki, mstari mmoja wa Bado kwa wakati."
    ]
  }
};

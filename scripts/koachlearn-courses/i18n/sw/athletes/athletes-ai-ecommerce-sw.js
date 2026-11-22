"use strict";

// Koach Learn course (Swahili translation of athletes/athletes-ai-ecommerce.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-ai-ecommerce-sw",
  lang: "sw",
  translationOf: "athletes-ai-ecommerce",
  category: "Athletes",
  name: "Majukwaa ya Biashara Mtandaoni yenye AI kwa Wanamichezo",
  skills: "Kuchagua cha kuuza, Kulinganisha majukwaa ya duka na ada zake, Kuandika ukurasa wa bidhaa kwa AI, Kuweka bei kutokana na gharama halisi, Kukagua sheria za NIL, nembo na alama za biashara kabla ya kuuza",
  outcome: "kupanga na kuanzisha bidhaa au huduma rahisi ya kuuza mtandaoni, kama merch, masomo binafsi au kambi: kuchagua jukwaa, kuandika ukurasa wa bidhaa kwa AI, kuweka bei kutokana na gharama halisi, na kukagua sheria za NIL, nembo na alama za biashara kabla ya kuanza kuuza.",
  about: [
    "Kozi hii ni kwa wanamichezo na makocha wanaotaka kuuza kitu mtandaoni: fulana au merch zenye muundo wao wenyewe, masomo binafsi, mipango ya mazoezi, au kambi na kliniki za michezo.",
    "Utajifunza cha kuuza, jinsi ya kuchagua jukwaa la duka, jinsi ya kuandika ukurasa wa bidhaa kwa AI, jinsi ya kuweka bei inayolipia gharama zako, na jinsi ya kubaki ndani ya sheria za NIL, nembo za shule na alama za biashara.",
    "Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi. Haya ni mafunzo ya jumla, si ushauri wa kisheria wala wa kodi; uliza ofisi ya compliance (ofisi ya kufuata sheria za michezo), mzazi au mlezi kama una umri chini ya miaka 18, na mtaalamu wa kodi."
  ],
  finalTask: "Andika mpango wa ukurasa mmoja wa kuanza kuuza bidhaa au huduma moja: ni nini na ni kwa ajili ya nani, jukwaa ulilochagua na ada zake za sasa (kutoka ukurasa wake wa bei), ukurasa wa bidhaa ulioandikwa kwa AI na kuhaririwa na wewe, bei iliyohesabiwa kutokana na gharama halisi, na orodha ya ukaguzi wa sheria (NIL, nembo za shule, alama za biashara, kodi) pamoja na jina la uliyemuuliza.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanamichezo wa sekondari, chuo na wale wanaoanza kazi ya michezo, pamoja na makocha, wanaotaka kuuza kitu mtandaoni: merch zenye muundo wao, masomo binafsi, mipango ya mazoezi, au kambi na kliniki.",
    startingPoint: "Wana wafuasi kwenye mitandao ya kijamii na ujuzi ambao watu huwauliza kuuhusu, na huenda wamenunua vitu mtandaoni. Wachache wamelinganisha ada za maduka, kuweka bei kutokana na gharama halisi, kuandika ukurasa wa bidhaa, au kukagua sheria za NIL, nembo, alama za biashara na kodi.",
    gap: "Wanamichezo wanaoanza kuuza bila kukagua sheria wanaweza kupoteza ustahiki wa kushiriki mashindano au kupata matatizo ya alama za biashara, na kuweka bei bila kuhesabu ada kunaweza kuleta hasara. Mpango rahisi uliokaguliwa kisheria, wenye ukurasa wa kweli na bei inayotokana na gharama, unawawezesha kupata kipato kutokana na ujuzi wao kwa usalama.",
    constraints: [
      "Lugha rahisi, kama kiwango cha kusoma cha darasa la 8",
      "Simu au kompyuta, msaidizi wa AI wa bure na jedwali (spreadsheet); ada za majukwaa hubadilika na lazima zisomwe kwenye ukurasa wa bei wa kila jukwaa",
      "Kama dakika 60 kwa jumla",
      "Sheria za NIL, nembo za shule, alama za biashara za ligi na kodi; uliza ofisi ya compliance au chama cha michezo cha jimbo",
      "Wanamichezo chini ya miaka 18 wanahitaji mtu mzima kumiliki au kumiliki pamoja akaunti za duka na malipo; haya ni mafunzo, si ushauri wa kisheria wala wa kodi"
    ],
    prerequisites: "Hakuna. Kozi \"Mikakati ya Masoko ya Kidijitali kwa AI kwa Wanamichezo\" inasaidia kutangaza unapoanza kuuza."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia yale ambayo wafuasi wako hukuuliza", action: "kuchagua bidhaa moja ya kushikika, huduma au bidhaa ya kidijitali ya kuuza kwanza", standard: "ukiwa umeandika muda na pesa inayohitaji" },
    { id: "O2", condition: "Ukitumia kurasa rasmi za bei za majukwaa mawili", action: "kulinganisha ada zao za kila mwezi, za kila mauzo na za malipo, na kuchagua moja", standard: "ukiwa umeandika ada halisi za sasa na kukagua sheria za umri" },
    { id: "O3", condition: "Kabla ya kuuza chochote chenye jina lako au nembo", action: "kukagua sheria za NIL, nembo, alama za biashara na kodi zinazokuhusu", standard: "bila kutumia nembo ya shule, timu au ligi bila ruhusa ya maandishi, ukiwa umetafuta USPTO na kutaja jina la uliyemuuliza" },
    { id: "O4", condition: "Ukitumia rasimu ya AI", action: "kuandika ukurasa wa bidhaa wa kweli unaojibu ni nini, ni kwa nani, unapata nini, bei, lini na vipi", standard: "chini ya maneno 200, kila undani ukiwa kweli, picha halisi unazomiliki na sheria wazi za kurudisha pesa" },
    { id: "O5", condition: "Ukipewa kila gharama ya mauzo moja", action: "kuhesabu bei inayolipia gharama zako na kuacha faida", standard: "hesabu ikiwa imekaguliwa kwenye jedwali na kwa kikokotoo" },
    { id: "O6", condition: "Bidhaa au huduma yako ikiwa tayari", action: "kupanga uzinduzi mdogo wa majaribio na utaratibu wa huduma kwa wateja", standard: "matatizo yakiwa yamerekebishwa kabla ya tangazo kubwa na ujumbe ukijibiwa ndani ya siku moja" }
  ],
  chapters: [
    {
      name: "Sura 1: Uuze nini na wapi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuchagua cha kuuza",
          minutes: 5,
          goal: "Chagua bidhaa au huduma moja inayofaa ujuzi wako na wafuasi wako.",
          text: [
            "Kwa kawaida wanamichezo huuza moja kati ya aina tatu. Bidhaa za kushikika: fulana, kofia, stika au mabango yenye muundo au nembo yako mwenyewe. Huduma: masomo binafsi, mazoezi ya vikundi vidogo, kambi na kliniki. Bidhaa za kidijitali: mipango ya mazoezi, kozi za video au miongozo ya mazoezi.",
            "Anza na kitu kimoja ambacho wafuasi wako tayari wanakuuliza. Kama wazazi wanauliza mara kwa mara kuhusu masomo, uza masomo. Kama mashabiki wanaisifu nembo yako, jaribu merch.",
            "Fikiria muda na hatari. Huduma zinalipia muda wako lakini zinahitaji ratiba yako. Merch inahitaji pesa mapema isipokuwa ukitumia print-on-demand. Bidhaa za kidijitali zinachukua muda kutengeneza lakini zinaweza kuuzwa mara nyingi."
          ],
          steps: ["Orodhesha mambo ambayo wafuasi wako hukuuliza.", "Panga mawazo katika makundi: ya kushikika, huduma au ya kidijitali.", "Andika muda na pesa ambazo kila moja inahitaji.", "Chagua moja ya kuanza nayo."],
          words: [["E-commerce", "biashara mtandaoni: kununua na kuuza kwenye intaneti."], ["Print-on-demand", "huduma inayochapisha na kutuma bidhaa pale tu mtu anapoiagiza."], ["Bidhaa ya kidijitali", "kitu kinachouzwa kama faili au ufikiaji wa mtandaoni, kama mpango wa mazoezi."]],
          slides: [
            { title: "Aina tatu za vitu vya kuuza", bullets: ["Za kushikika: merch zenye muundo wako", "Huduma: masomo, kambi, kliniki", "Za kidijitali: mipango ya mazoezi, kozi za video"] },
            { title: "Anza na mahitaji", bullets: ["Wafuasi wako wanauliza nini?", "Chagua kitu kimoja"] },
            { title: "Muda na hatari", bullets: ["Huduma: muda wako", "Merch: pesa mapema au print-on-demand", "Za kidijitali: tengeneza mara moja, uza mara nyingi"] }
          ],
          tryIt: "Orodhesha vitu vitatu ambavyo watu wamekuuliza. Mwombe msaidizi wa AI aorodheshe faida na hasara za kuuza kila kimoja, kisha chagua kimoja.",
          youCanNow: "kuchagua bidhaa au huduma moja inayofaa ujuzi wako na wafuasi wako.",
          quickCheck: [
            { objective: "O1", q: "Kipi kati ya hivi ni bidhaa ya kushikika?", options: ["Kozi ya video", "Somo binafsi", "Kambi", "Fulana yenye muundo wako mwenyewe"], answer: 3, why: "Bidhaa za kushikika ni pamoja na fulana, kofia, stika na mabango." },
            { objective: "O1", q: "Wazazi wanakuuliza mara kwa mara kuhusu masomo kwa watoto wao. Ujaribu nini kwanza?", options: ["Kuuza masomo binafsi", "Kubuni bango", "Kuanzisha kozi ya video", "Kuuza kofia"], answer: 0, why: "Anza na kitu ambacho wafuasi wako tayari wanakuuliza." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kulinganisha majukwaa ya duka",
          minutes: 5,
          goal: "Linganisha majukwaa mawili na uchague moja kwa kutumia ada na huduma zao za sasa.",
          text: [
            "Huhitaji kujenga duka kuanzia mwanzo. Wajenzi wa maduka kama Shopify, Square Online na Wix wanakuwezesha kuweka bidhaa na kupokea malipo. Huduma za print-on-demand kama Printful au Printify zinaunganishwa na maduka na kushughulikia uchapishaji na usafirishaji. Kwa masomo na kambi, zana za kuweka nafasi na kujisajili au kiungo rahisi cha malipo zinaweza kutosha.",
            "Kila jukwaa linatoza kwa namna fulani: mpango wa kila mwezi, asilimia ya kila mauzo, ada za kushughulikia malipo, au zote tatu. Hizi hubadilika mara nyingi, kwa hiyo soma ukurasa wa bei wa sasa wa kila jukwaa na uandike namba halisi.",
            "Kama una umri chini ya miaka 18, majukwaa mengi na huduma za malipo zinahitaji mtu mzima kumiliki au kumiliki pamoja akaunti. Mshirikishe mzazi au mlezi."
          ],
          steps: ["Chagua majukwaa mawili yanayofaa bidhaa au huduma yako.", "Fungua ukurasa rasmi wa bei wa kila moja.", "Andika gharama ya kila mwezi, ada ya kila mauzo na ada ya malipo.", "Kagua sheria za umri.", "Chagua lenye gharama ya jumla ndogo zaidi kwa mauzo unayotarajia."],
          words: [["Jukwaa (platform)", "huduma ya mtandaoni unayotumia kuendesha duka lako."], ["Ada ya kushughulikia malipo", "kiasi ambacho huduma ya malipo inatoza kupokea malipo kwa kadi."]],
          slides: [
            { title: "Chaguo za duka", bullets: ["Wajenzi wa maduka: Shopify, Square Online, Wix", "Print-on-demand: Printful, Printify", "Masomo na kambi: zana za kuweka nafasi au kiungo cha malipo"] },
            { title: "Ada za kulinganisha", bullets: ["Mpango wa kila mwezi", "Ada ya kila mauzo", "Ada ya kushughulikia malipo"] },
            { title: "Kabla ya kujisajili", bullets: ["Soma ukurasa wa bei wa sasa", "Chini ya miaka 18: huenda mtu mzima akahitaji kumiliki akaunti"] }
          ],
          tryIt: "Chagua majukwaa mawili. Kutoka kwenye kurasa zao rasmi za bei, andika gharama ya kila mwezi na ada za kila moja kwenye jedwali dogo, na uchague lenye jumla ndogo zaidi kwa mauzo 20 kwa mwezi.",
          youCanNow: "kulinganisha majukwaa ya duka kwa ada zao halisi za sasa na kuchagua moja.",
          quickCheck: [
            { objective: "O2", q: "Printful na Printify zinafanya nini?", options: ["Kusajili watu kwa kambi", "Kushughulikia uchapishaji na usafirishaji wa oda", "Kuwasilisha kodi zako", "Kubuni nembo yako bure"], answer: 1, why: "Huduma za print-on-demand zinaunganishwa na maduka na kushughulikia uchapishaji na usafirishaji." },
            { objective: "O2", q: "Rafiki anasema jukwaa fulani halina gharama yoyote. Unafanya nini?", options: ["Kuamini na kujisajili", "Kuuliza AI bei", "Kusoma ukurasa wa bei wa sasa wa jukwaa na kuandika ada", "Kukisia ada"], answer: 2, why: "Kila jukwaa linatoza kwa namna fulani, na ada hubadilika, kwa hiyo soma ukurasa wa bei wa sasa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Sheria kwanza: NIL, nembo na alama za biashara",
          minutes: 6,
          goal: "Kagua sheria zinazokuhusu kabla ya kuuza chochote chenye jina lako au nembo.",
          text: [
            "Kuuza vitu vyenye jina lako, picha yako au sura yako kunaweza kuhesabiwa kama shughuli ya NIL (Name, Image and Likeness: jina, picha na sura). Wanamichezo wa chuo huenda wakahitaji kuiripoti; sheria za NCAA (chama cha michezo ya vyuo Marekani) zinasema malipo ya NIL lazima yawe kwa lengo halisi la biashara na yasihusishwe na matokeo ya mchezo. Sheria za sekondari zinatofautiana kwa kila jimbo. Uliza ofisi yako ya compliance au chama cha michezo cha jimbo kwanza.",
            "Usitumie nembo, jina, mascot au rangi za shule au timu yako kwa namna inayoonekana rasmi isipokuwa una ruhusa ya maandishi. Kwa kawaida shule na ligi zinamiliki na kulinda vitu hivi. Nembo za ligi za kulipwa na nembo za chapa nyingine pia haziruhusiwi.",
            "Tengeneza nembo yako mwenyewe, na utafute kwenye kumbukumbu za alama za biashara za USPTO (ofisi ya hataza na alama za biashara ya Marekani) kabla ya kuchagua jina la chapa ili usinakili la mtu mwingine. Kipato cha mauzo kwa kawaida kinatozwa kodi; IRS (mamlaka ya kodi ya Marekani) inasema lazima uwasilishe ritani kama mapato halisi ya kujiajiri ni $400 au zaidi, kwa hiyo weka kumbukumbu na uzungumze na mtaalamu wa kodi."
          ],
          steps: ["Uliza ofisi yako ya compliance au chama cha jimbo kuhusu sheria za NIL za kuuza.", "Usitumie nembo za shule, timu au ligi bila ruhusa ya maandishi.", "Tengeneza nembo yako mwenyewe.", "Tafuta jina la chapa yako kwenye kumbukumbu za alama za biashara za USPTO.", "Andaa kumbukumbu rahisi ya mauzo na gharama."],
          words: [["Alama ya biashara (trademark)", "jina, nembo au kauli mbiu inayotambulisha biashara na inayolindwa na sheria."], ["Leseni (licensing)", "ruhusa rasmi ya kutumia nembo au jina la mtu mwingine, mara nyingi kwa malipo."]],
          slides: [
            { title: "Sheria za NIL", bullets: ["Kuuza kwa jina lako kunaweza kuwa shughuli ya NIL", "Chuo: huenda ukahitaji kuripoti", "Sekondari: sheria zinatofautiana kwa kila jimbo"] },
            { title: "Nembo", bullets: ["Nembo za shule, timu na ligi zinahitaji ruhusa ya maandishi", "Nembo za chapa nyingine: haziruhusiwi", "Tengeneza yako mwenyewe"] },
            { title: "Jina na kodi", bullets: ["Tafuta USPTO kabla ya kuchagua jina la chapa", "Weka kumbukumbu za mauzo na gharama", "Zungumza na mtaalamu wa kodi"] }
          ],
          sources: [
            { name: "NCAA: Name, Image and Likeness (jina, picha na sura)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" },
            { name: "USPTO: Misingi ya alama za biashara", url: "https://www.uspto.gov/trademarks/basics" },
            { name: "IRS: Kituo cha kodi cha watu waliojiajiri", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }
          ],
          tryIt: "Andika orodha ya ukaguzi wa sheria kwa bidhaa yako: NIL (ulimuuliza nani), nembo (za nani, na ruhusa), utafutaji wa alama ya biashara (umefanyika au la), na kumbukumbu (utaziweka wapi).",
          youCanNow: "kukagua misingi ya NIL, nembo, alama za biashara na kodi kabla ya kuuza.",
          quickCheck: [
            { objective: "O3", q: "Kwa kawaida nani anamiliki nembo, mascot na jina la shule?", options: ["Shule au ligi", "Wanamichezo", "Yeyote anayeitumia", "Gazeti la mtaani"], answer: 0, why: "Kwa kawaida shule na ligi zinamiliki na kulinda vitu hivi." },
            { objective: "O3", q: "Umechagua jina la chapa kwa merch yako. Unafanya nini kabla ya kuchapisha?", options: ["Kuchapisha fulana 500", "Kuwaomba mashabiki wapige kura", "Kunakili nembo maarufu", "Kutafuta jina hilo kwenye kumbukumbu za alama za biashara za USPTO"], answer: 3, why: "Kutafuta kumbukumbu za USPTO kunakusaidia usinakili alama ya biashara ya mtu mwingine." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Uuze nini na wapi",
        questions: [
          { objective: "O1", q: "Ipi ni huduma ambayo mwanamichezo anaweza kuuza?", options: ["Fulana", "Stika", "Masomo binafsi", "Bango"], answer: 2, why: "Masomo ni huduma inayolipia muda wako." },
          { objective: "O2", q: "Print-on-demand inafanya nini?", options: ["Inachapisha na kutuma bidhaa pale tu mtu anapoagiza", "Inachapisha pesa", "Inakulazimisha kununua fulana 500 kwanza", "Inaandika ukurasa wako wa bidhaa"], answer: 0, why: "Inapunguza pesa unayohitaji mapema." },
          { objective: "O2", q: "Unapata wapi ada halisi za jukwaa?", options: ["Kwa kukisia", "Kwenye video ya zamani", "Kwenye kumbukumbu ya AI", "Kwenye ukurasa wake rasmi wa bei wa sasa"], answer: 3, why: "Ada hubadilika; ukurasa rasmi ndio wa sasa." },
          { objective: "O3", q: "Unataka kuuza fulana zenye nembo ya shule yako. Unahitaji nini kwanza?", options: ["Hakuna kitu", "Ruhusa ya maandishi kutoka kwa shule", "Mwandiko mzuri zaidi", "Wafuasi wengi zaidi"], answer: 1, why: "Kwa kawaida shule zinamiliki na kulinda nembo zao." },
          { objective: "O3", q: "Kwa nini utafute kumbukumbu za USPTO kabla ya kuipa chapa yako jina?", options: ["Kupata fulana za bure", "Ili usinakili alama ya biashara ya mtu mwingine", "Kupata wateja", "Haisaidii"], answer: 1, why: "Inakusaidia kuepuka matatizo ya alama za biashara." }
        ]
      }
    },
    {
      name: "Sura 2: Kujenga na kuzindua unachouza",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuandika ukurasa wa bidhaa kwa AI",
          minutes: 5,
          goal: "Andika ukurasa wa bidhaa ulio wazi na wa kweli kwa msaada wa AI.",
          text: [
            "Ukurasa wa bidhaa unajibu maswali ya wanunuzi: Ni nini? Ni kwa ajili ya nani? Ninapata nini? Bei gani, lini na vipi? Kwa kambi: tarehe, umri, mahali, watoto watajifunza nini, usalama, cha kuleta, na sera ya kurudisha pesa.",
            "Mwombe msaidizi wa AI: \"Niandikie ukurasa wa bidhaa kwa somo binafsi la saa 1 la kurusha mpira kwa wachezaji wenye umri wa miaka 10-16. Weka watakachojifunza, cha kuleta, aina ya mahali, nafasi ya bei, na sera fupi ya kurudisha pesa. Kirafiki, wazi, chini ya maneno 200.\" Kisha hariri kila undani ili uwe kweli.",
            "Tumia picha halisi unazomiliki. Usiahidi matokeo kama \"uhakika wa kuwa mchezaji wa kikosi cha kwanza\" wala usitoe madai ya afya. Sheria wazi za kurudisha pesa na kughairi zinazuia mabishano baadaye."
          ],
          steps: ["Orodhesha mambo ambayo wanunuzi wanahitaji kujua.", "Iombe AI rasimu ya ukurasa chini ya maneno 200.", "Kagua kila undani na urekebishe chochote kisicho kweli.", "Weka picha halisi unazomiliki.", "Weka sheria wazi za kurudisha pesa na kughairi."],
          words: [["Ukurasa wa bidhaa", "ukurasa unaoeleza unachouza na unaowawezesha watu kukinunua."], ["Sera ya kurudisha pesa", "sheria zako za kumrudishia mtu pesa."]],
          slides: [
            { title: "Jibu maswali ya wanunuzi", bullets: ["Ni nini? Ni kwa ajili ya nani?", "Ninapata nini?", "Bei gani, lini na vipi?"] },
            { title: "AI inaandika rasimu, wewe unakagua", bullets: ["Chini ya maneno 200", "Kila undani uwe kweli", "Picha zako mwenyewe"] },
            { title: "Epuka", bullets: ["Matokeo ya uhakika", "Madai ya afya", "Kukosa sheria za kurudisha pesa"] }
          ],
          tryIt: "Tumia AI kuandika rasimu ya ukurasa wako wa bidhaa, kisha uhariri ili kila undani uwe kweli na uweke sera ya kurudisha pesa.",
          youCanNow: "kuandika ukurasa wa bidhaa ulio wazi na wa kweli kwa msaada wa AI.",
          quickCheck: [
            { objective: "O4", q: "Undani upi unafaa kwenye ukurasa wa bidhaa wa kambi?", options: ["Anwani ya nyumbani kwako", "Cha kuleta", "Alama zako za shule (GPA)", "Bei za makocha wengine"], answer: 1, why: "Wanunuzi wanahitaji tarehe, umri, mahali, watoto watajifunza nini, cha kuleta na sheria za kurudisha pesa." },
            { objective: "O4", q: "Rasimu ya AI inasema masomo yako \"yanahakikisha ufadhili wa masomo (scholarship)\". Unafanya nini?", options: ["Kuiacha ili uuze zaidi", "Kuibadilisha iwe \"karibu kuhakikisha\"", "Kuiondoa; usiahidi matokeo", "Kuongeza ahadi zaidi"], answer: 2, why: "Usiahidi matokeo wala usitoe madai usiyoweza kuyatimiza." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuweka bei kutokana na gharama halisi",
          minutes: 5,
          goal: "Weka bei inayolipia gharama zako na kuacha faida.",
          text: [
            "Bei inaanza na gharama. Kwa merch: gharama ya bidhaa, uchapishaji, usafirishaji, ada za jukwaa na ada za malipo. Kwa masomo: kukodi uwanja au ukumbi, vifaa, usafiri, muda wako na ada.",
            "Jumlisha gharama ya mauzo moja, kisha angalia bidhaa au masomo yanayofanana yanagharimu kiasi gani katika eneo lako. Chagua bei iliyo juu ya gharama yako ambayo wafuasi wako wanaweza kulipa. Tofauti ndiyo faida yako, kabla ya kodi.",
            "Tumia jedwali (spreadsheet): safu kwa kila gharama, jumla, bei yako na faida. Msaidizi wa AI anaweza kuweka fomula, lakini kagua hesabu kwa kikokotoo."
          ],
          steps: ["Orodhesha kila gharama ya mauzo moja.", "Zijumlishe.", "Angalia vitu vinavyofanana vinagharimu kiasi gani karibu nawe.", "Weka bei iliyo juu ya gharama inayofaa wafuasi wako.", "Kagua hesabu kwenye jedwali."],
          words: [["Gharama", "pesa unayotumia kutengeneza au kufikisha mauzo moja."], ["Faida", "bei ukitoa gharama zote, kabla ya kodi."]],
          slides: [
            { title: "Orodhesha kila gharama", bullets: ["Bidhaa, uchapishaji, usafirishaji", "Ada za jukwaa na za malipo", "Uwanja, vifaa, usafiri, muda"] },
            { title: "Weka bei", bullets: ["Juu ya gharama ya jumla", "Linganisha na vitu vinavyofanana karibu nawe", "Kile wafuasi wako wanaweza kulipa"] },
            { title: "Jedwali", bullets: ["Gharama, jumla, bei, faida", "AI inaweka fomula; wewe unakagua"] }
          ],
          tryIt: "Tengeneza jedwali la bei kwa mauzo moja ya bidhaa yako. Iombe AI iandike fomula za jumla na faida, kisha uzikague kwa kikokotoo.",
          youCanNow: "kuweka bei kutokana na gharama halisi na kujua faida yako kwa kila mauzo.",
          quickCheck: [
            { objective: "O5", q: "Ipi ni gharama ya somo binafsi?", options: ["Kukodi uwanja au ukumbi", "Idadi ya wafuasi wako", "Usafiri wa mnunuzi", "Namba ya jezi yako"], answer: 0, why: "Gharama za somo ni pamoja na uwanja, vifaa, usafiri, muda wako na ada." },
            { objective: "O5", q: "Fulana yako inagharimu 14 kutengeneza, kutuma na kuuza. Fulana zinazofanana karibu nawe zinauzwa 12 hadi 25. Bei ipi inafaa?", options: ["10, ili iwe rahisi kuliko zote", "14, sawa na gharama", "12, bei ya chini zaidi karibu nawe", "Bei iliyo juu ya 14 ambayo wafuasi wako wanaweza kulipa, kama 20"], answer: 3, why: "Weka bei juu ya gharama yako ya jumla ili kuwe na faida, ndani ya kile wafuasi wako wanaweza kulipa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuzindua na kuwafurahisha wateja",
          minutes: 5,
          goal: "Panga uzinduzi mdogo na utaratibu rahisi wa huduma kwa wateja.",
          text: [
            "Anza kidogo: uzinduzi wa majaribio (soft launch) kwa familia, familia za wachezaji wenzako na wafuasi wako wa karibu. Rekebisha matatizo kabla ya tangazo kubwa. Kisha tangaza kwa chapisho, video fupi na kiungo kwenye bio yako.",
            "Ukichapisha kuhusu bidhaa zako mwenyewe, hiyo ni biashara yako, lakini chapa au mtu mwingine akikupa chochote ili umtangaze, liweke wazi. Wanamichezo wa chuo: ripoti mikataba kwa wakati kama inahitajika.",
            "Huduma kwa wateja inaleta wanunuzi wanaorudi: jibu ujumbe ndani ya siku moja, tuma bidhaa au thibitisha nafasi kwa wakati, fuata sera yako ya kurudisha pesa, na sema asante. Iombe AI iandike rasimu za majibu ya adabu kwa maswali ya kawaida."
          ],
          steps: ["Fanya uzinduzi wa majaribio kwa kikundi kidogo.", "Rekebisha matatizo yoyote.", "Tangaza kwa chapisho, video na kiungo kwenye bio.", "Jibu ujumbe ndani ya siku moja.", "Tumia AI kuandika rasimu za majibu."],
          words: [["Uzinduzi wa majaribio (soft launch)", "uzinduzi wa kwanza mdogo na wa kimya ili kugundua matatizo."], ["Huduma kwa wateja", "jinsi unavyowasaidia wanunuzi kabla na baada ya kulipa."]],
          slides: [
            { title: "Anza kidogo", bullets: ["Uzinduzi wa majaribio kwa watu unaowajua", "Rekebisha matatizo kwanza"] },
            { title: "Kisha tangaza", bullets: ["Chapisho, video fupi, kiungo kwenye bio", "Weka wazi uhusiano wowote na chapa"] },
            { title: "Wafurahishe wateja", bullets: ["Jibu ndani ya siku moja", "Kwa wakati, fuata sera yako ya kurudisha pesa", "Rasimu za majibu kwa AI"] }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wako wa ukurasa mmoja wa kuanza kuuza: bidhaa na wafuasi, jukwaa na ada za sasa, ukurasa wa bidhaa ulioandikwa kwa AI, bei kutokana na gharama halisi, na orodha ya ukaguzi wa sheria pamoja na uliyemuuliza.",
          youCanNow: "kuzindua bidhaa au huduma ndogo mtandaoni na kutoa huduma nzuri kwa wateja.",
          quickCheck: [
            { objective: "O6", q: "Uzinduzi wa majaribio ni kwa ajili ya nani?", options: ["Kila mtu kwenye intaneti", "Familia, familia za wachezaji wenzako na wafuasi wa karibu", "Chapa kubwa tu", "Washindani wako"], answer: 1, why: "Anza kidogo na urekebishe matatizo kabla ya tangazo kubwa." },
            { objective: "O6", q: "Mteja anaomba kurudishiwa pesa kwa namna inayolingana na sera yako. Unafanya nini?", options: ["Kupuuza ujumbe", "Kubishana kwenye maoni", "Kufuata sera yako, kurudisha pesa kwa adabu na kusema asante", "Kumzuia (block)"], answer: 2, why: "Kufuata sera yako ya kurudisha pesa na kujibu kwa adabu kunaleta wanunuzi wanaorudi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kujenga na kuzindua unachouza",
        questions: [
          { objective: "O4", q: "Ukurasa wa bidhaa wa kambi unapaswa kuwa na:", options: ["Nembo tu", "Anwani ya nyumbani kwako", "Ufadhili wa masomo wa uhakika", "Tarehe, umri, mahali, watoto watajifunza nini na sera ya kurudisha pesa"], answer: 3, why: "Unajibu kile ambacho wanunuzi wanahitaji kujua." },
          { objective: "O4", q: "AI inaandika \"uhakika wa kuingia kikosi cha kwanza\" kwenye ukurasa wako. Wewe:", options: ["Unaiondoa", "Unaiacha", "Unaikuza zaidi", "Unaongeza ahadi zaidi"], answer: 0, why: "Usiahidi matokeo usiyoweza kuyahakikisha." },
          { objective: "O5", q: "Faida ni:", options: ["Bei tu", "Idadi ya wafuasi", "Bei ukitoa gharama zote", "Mauzo yote bila kutoa gharama"], answer: 2, why: "Faida ni kinachobaki baada ya gharama." },
          { objective: "O6", q: "Kwa nini ufanye uzinduzi wa majaribio?", options: ["Kuficha duka lako", "Kupandisha bei", "Unahitajika kisheria", "Kugundua matatizo kabla ya tangazo kubwa"], answer: 3, why: "Uzinduzi mdogo unaonyesha matatizo kwa usalama." },
          { objective: "O6", q: "Unapaswa kujibu ujumbe wa wateja kwa haraka kiasi gani?", options: ["Ndani ya mwezi mmoja", "Ndani ya siku moja", "Kamwe", "Pale tu wanapolalamika mara mbili"], answer: 1, why: "Majibu ya haraka yanajenga uaminifu na wanunuzi wanaorudi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Majukwaa ya Biashara Mtandaoni yenye AI kwa Wanamichezo",
    questions: [
      { objective: "O1", q: "E-commerce maana yake ni:", options: ["Michezo ya umeme", "Barua pepe tu", "Kununua na kuuza mtandaoni", "Basi la timu"], answer: 2, why: "Ni kuuza mtandaoni." },
      { objective: "O1", q: "Ipi ni bidhaa ya kidijitali?", options: ["Mpango wa mazoezi", "Kofia", "Kambi", "Bango"], answer: 0, why: "Inauzwa kama faili au ufikiaji wa mtandaoni." },
      { objective: "O1", q: "Njia nzuri ya kuchagua bidhaa yako ya kwanza ni:", options: ["Kile ambacho wafuasi wako tayari wanauliza", "Chochote kilicho maarufu sasa", "Wazo la gharama kubwa zaidi", "Kitu usichokijua"], answer: 0, why: "Mahitaji yaliyopo yanarahisisha mauzo." },
      { objective: "O1", q: "Huduma zinalipia:", options: ["Usafirishaji wako", "Uchapishaji wako", "Muda wako", "Stika zako"], answer: 2, why: "Masomo na kambi zinahitaji muda wako." },
      { objective: "O2", q: "Ipi ni mjenzi wa duka?", options: ["Saa ya kupima muda", "Shopify", "Ubao wa matokeo", "Jezi"], answer: 1, why: "Shopify ni mjenzi wa duka." },
      { objective: "O2", q: "Jukwaa linaweza kutoza ada ipi?", options: ["Ada ya jezi", "Ada ya mwamuzi", "Ada ya muda wa kupumzika", "Ada ya kushughulikia malipo"], answer: 3, why: "Ada za malipo ni za kawaida." },
      { objective: "O2", q: "Kama una umri chini ya miaka 18, akaunti ya duka inaweza kuhitaji:", options: ["Hakuna kitu", "Umri wa uongo", "Mtu mzima kuimiliki au kuimiliki pamoja", "Kitambulisho cha mchezaji mwenzako"], answer: 2, why: "Majukwaa mengi yanahitaji mtu mzima." },
      { objective: "O3", q: "Kuuza merch kwa jina lako kunaweza kuhesabiwa kama:", options: ["Kulipwa ili kucheza", "Ufadhili wa masomo", "Hakuna kitu", "Shughuli ya NIL"], answer: 3, why: "Kunatumia jina lako, picha yako au sura yako." },
      { objective: "O3", q: "Mwanamichezo wa chuo amuulize nani kuhusu sheria za NIL za kuuza?", options: ["Ofisi ya compliance", "Shabiki yeyote", "Mpinzani", "Hakuna mtu"], answer: 0, why: "Wanajua sheria za sasa za shule na za NCAA." },
      { objective: "O3", q: "Je, unaweza kuweka nembo ya NFL kwenye merch yako?", options: ["Ndiyo, kila wakati", "Hapana, si bila leseni", "Kwa rangi nyekundu tu", "Mtandaoni tu"], answer: 1, why: "Nembo za ligi zinalindwa." },
      { objective: "O3", q: "Alama ya biashara (trademark) ni:", options: ["Aina ya kiatu", "Kinywaji cha michezo", "Jina, nembo au kauli mbiu inayolindwa", "Mpango wa mazoezi"], answer: 2, why: "Alama za biashara zinatambulisha biashara." },
      { objective: "O3", q: "IRS inasema lazima uwasilishe ritani ya kodi kama mapato halisi ya kujiajiri ni:", options: ["$400 au zaidi", "$1 milioni au zaidi", "Kamwe", "Kama tu una umri zaidi ya miaka 30"], answer: 0, why: "Hicho ndicho kiwango cha IRS kwenye ukurasa wake wa watu waliojiajiri." },
      { objective: "O4", q: "Ukurasa wa bidhaa unapaswa kujibu:", options: ["Bei tu", "Alama zako za shule (GPA)", "Nywila yako", "Ni nini, ni kwa nani, unapata nini, bei, lini na vipi"], answer: 3, why: "Wanunuzi wanahitaji majibu hayo." },
      { objective: "O4", q: "Picha za bidhaa zinapaswa kuwa:", options: ["Zilizonakiliwa kutoka maduka mengine", "Picha halisi unazomiliki", "Za uongo", "Za wanamichezo wengine"], answer: 1, why: "Tumia picha ulizo na haki nazo." },
      { objective: "O4", q: "Kwa nini uwe na sera ya kurudisha pesa?", options: ["Kubaki na pesa zote kila wakati", "Kuzuia mabishano baadaye", "Ni pambo tu", "Haihitajiki"], answer: 1, why: "Sheria wazi zinakulinda wewe na wanunuzi." },
      { objective: "O5", q: "Bei inapaswa kuwa:", options: ["Chini ya gharama yako", "Ya kubahatisha", "Bure kila wakati", "Juu ya gharama yako ya jumla"], answer: 3, why: "La sivyo unapata hasara kwa kila mauzo." },
      { objective: "O5", q: "AI inaweka fomula yako ya faida. Unapaswa:", options: ["Kukagua hesabu kwa kikokotoo", "Kuiamini kabisa", "Kuifuta", "Kuongeza bei yako mara mbili"], answer: 0, why: "AI inaweza kukosea katika hesabu." },
      { objective: "O6", q: "Uzinduzi wa majaribio unaenda kwa:", options: ["Kila mtu kwa wakati mmoja", "Wapinzani tu", "Familia, wafuasi wa karibu na watu unaowajua", "Hakuna mtu"], answer: 2, why: "Kikundi kidogo kinakusaidia kurekebisha matatizo." },
      { objective: "O6", q: "Uweke wapi kiungo cha duka lako?", options: ["Kimefichwa mahali popote", "Kwenye ukurasa wa mpinzani", "Kwenye ujumbe wa taka (spam)", "Kwenye bio yako"], answer: 3, why: "Viungo vya bio ni rahisi kupata." },
      { objective: "O6", q: "AI inaweza kusaidia huduma kwa wateja kwa:", options: ["Kubaki na pesa za wateja", "Kuandika rasimu za majibu ya adabu", "Kupuuza ujumbe", "Kubadilisha sheria za kurudisha pesa kwa siri"], answer: 1, why: "Rasimu za majibu zinafanya majibu yawe ya haraka na ya adabu." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      2,
      5,
      7,
      9,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Bidhaa na wafuasi",
        objective: "O1",
        notYet: "Bidhaa au wafuasi wake hawako wazi.",
        meets: "Bidhaa au huduma moja, ni kwa ajili ya nani, na muda na pesa inayohitaji.",
        exceeds: "Inaonyesha ushahidi kwamba wafuasi waliiomba, kama maoni au maombi ya wazazi."
      },
      {
        name: "Jukwaa na ada",
        objective: "O2",
        notYet: "Hakuna ada zilizoorodheshwa, au ada zimekisiwa badala ya kuchukuliwa kwenye ukurasa wa bei.",
        meets: "Jukwaa lililochaguliwa pamoja na ada zake za sasa za kila mwezi, za kila mauzo na za malipo kutoka ukurasa wake wa bei, na sheria za umri zimekaguliwa.",
        exceeds: "Inalinganisha majukwaa mawili na kuonyesha gharama ya jumla kwa idadi ya mauzo inayotarajiwa."
      },
      {
        name: "Ukurasa wa bidhaa",
        objective: "O4",
        notYet: "Unakosa maelezo muhimu, una madai yasiyo ya kweli, au hauna sheria za kurudisha pesa.",
        meets: "Chini ya maneno 200, unajibu ni nini, ni kwa nani, unapata nini, bei, lini na vipi, ukiwa na picha halisi na sheria wazi za kurudisha pesa.",
        exceeds: "Una maelezo ya usalama kwa huduma za watoto na vijana, na majibu ya maswali ya kawaida."
      },
      {
        name: "Bei kutokana na gharama",
        objective: "O5",
        notYet: "Bei iko chini ya gharama au gharama hazipo.",
        meets: "Kila gharama ya mauzo moja imeorodheshwa, kujumlishwa na bei kuwekwa juu ya gharama, hesabu ikiwa imekaguliwa.",
        exceeds: "Inaonyesha faida kwa kila mauzo na mauzo mangapi yanalipia gharama zozote za mwanzo."
      },
      {
        name: "Orodha ya ukaguzi wa sheria",
        objective: "O3",
        notYet: "NIL, nembo, alama za biashara au kodi havipo, au hakuna mtu aliyetajwa.",
        meets: "NIL, nembo za shule, alama za biashara na kodi kila kimoja kimekaguliwa, pamoja na jina la mtu ambaye mwanamichezo alimuuliza.",
        exceeds: "Ina ruhusa ya maandishi ya kutumia nembo au matokeo ya utafutaji wa USPTO, na kumbukumbu ya mauzo na gharama imeandaliwa."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza mpango wa kuanza kuuza na kupata Anafikia au Anazidi katika kila mstari wa rubriki",
      "Wanafunzi wanaoanza kuuza bidhaa au huduma yao ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti mauzo au nafasi zilizowekwa za kwanza na faida baada ya gharama",
      "Wanafunzi wanaoripoti kukagua sheria za NIL, nembo na kodi na shule yao, chama cha jimbo au mtaalamu kabla ya kuuza"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure (ChatGPT, Microsoft Copilot au Google Gemini)",
      "Jedwali la bure (Google Sheets) na kikokotoo",
      "Kurasa rasmi za bei za majukwaa mawili",
      "Sera ya NIL ya shule yako au sheria za chama cha michezo cha jimbo lako",
      "Kama dakika 60"
    ],
    facilitatorNotes: [
      "Mlete mtu kutoka ofisi ya compliance au mkurugenzi wa michezo aeleze sheria za NIL na nembo kabla mtu yeyote hajabuni merch.",
      "Kwa wanamichezo chini ya miaka 18, mshirikishe mzazi au mlezi katika kuchagua na kumiliki akaunti za duka na malipo.",
      "Wanafunzi wasome ada kutoka kurasa za bei zilizo hai wakati wa kipindi; msitegemee namba za kukumbuka au za AI.",
      "Kwa kambi na masomo yenye watoto, jadilini usalama, usimamizi na ruhusa ya kutumia uwanja kabla ya kuzindua.",
      "Waelekeze wanafunzi kwa mtaalamu wa kodi kwa maswali kuhusu kipato; usitoe ushauri wa kodi wa mtu binafsi."
    ]
  }
};

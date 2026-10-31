"use strict";

// Koach Learn course (Swahili translation of leadership/lead-agentic-transformation.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "lead-agentic-transformation-sw",
  lang: "sw",
  translationOf: "lead-agentic-transformation",
  category: "Leadership Development",
  name: "Uongozi katika Zama za AI ya Mawakala 3: AI ya Mawakala, Uendeshaji wa Kiotomatiki na Kuongoza Mabadiliko",
  skills: "Kuchagua mchakato wa kuendesha kiotomatiki, Kuweka kiwango cha uhuru wa wakala, Kupima hali ya mwanzo na thamani, Kutunza rejista ya hatari, Kuongoza watu katika mabadiliko, Kuandika mpango wa majaribio wa siku 90",
  outcome: "kuchagua mchakato mmoja wa kazi ambao mawakala wa AI wanaweza kuuboresha na kuandika mpango wa majaribio wa siku 90 kwa ajili yake, wenye ramani ya mchakato, kiwango cha uhuru wa wakala na idhini, hali ya mwanzo na vipimo vya mafanikio, rejista ya hatari, mpango wa watu na mafunzo, na kanuni ya kuendelea au kusimama kabla ya kupanua.",
  about: [
    "Kozi hii ni kwa viongozi watakaoamua kama na jinsi mawakala wa AI wataingia katika shirika lao: mameneja, wakurugenzi, wamiliki, na viongozi wa mashirika yasiyo ya faida na ya umma. Inamaliza mfululizo wa Uongozi katika Zama za AI ya Mawakala.",
    "Sura ya 1 inahusu kazi: kupata mchakato unaofaa kuendeshwa kiotomatiki, kuamua wakala anaweza kufanya kiasi gani peke yake, na kupima thamani na hatari kwa uaminifu. Sura ya 2 inahusu watu: kuongoza mabadiliko, kuweka usimamizi rahisi, na kuandika mpango wa majaribio wa siku 90 unaoweza kuuwasilisha kwa bodi, mmiliki au timu ya uongozi.",
    "Huhitaji kuandika programu (coding). Utatumia msaidizi wa AI wa bure kukusaidia kuandika rasimu, na busara yako mwenyewe kuamua. Kuna jaribio la maarifa mwishoni mwa kila sura na mtihani wa maswali 20 mwishoni mwa kozi."
  ],
  finalTask: "Andika mpango wa majaribio wa siku 90, wa kurasa mbili, kwa wakala mmoja wa AI katika shirika lako. Weka: ramani ya mchakato (hatua za sasa na muda), kazi ya wakala na kiwango chake cha uhuru, kila sehemu ya idhini ya mtu na mtu anayewajibika, hali ya mwanzo na vipimo vya mafanikio, rejista ya hatari yenye angalau hatari tano, mpango wa watu (nani anaguswa, utawasilianaje nao na kuwafundisha), na kanuni ya kuendelea au kusimama kwa siku ya 90. Uwasilishe kwa dakika tano kwa mwenzako na uandike maswali yake mawili magumu zaidi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Viongozi watakaoamua kama na jinsi mawakala wa AI wataingia katika shirika lao: mameneja, wakurugenzi, wamiliki, na viongozi wa mashirika yasiyo ya faida na ya umma wanaomaliza mfululizo wa Uongozi katika Zama za AI ya Mawakala.",
    startingPoint: "Wanaweza kueleza AI inayozalisha maudhui na AI ya mawakala, wanatumia AI katika kazi yao ya uongozi na wana mwongozo wa matumizi ya AI wa timu. Hawajapanga wala kuongoza majaribio ya wakala wa AI.",
    gap: "Miradi ya mawakala mara nyingi hushindwa kwa sababu viongozi wanaendesha kiotomatiki mchakato usiofaa, wanawapa mawakala uhuru mwingi mno, wanaruka hali ya mwanzo au wanawasahau watu wanaoguswa. Viongozi wanahitaji mpango wa majaribio ulio wazi na wa kweli, wenye idhini, vipimo, hatari, mpango wa watu na kanuni ya kusimama kabla chochote hakijaanza kutumika.",
    constraints: [
      "Hakuna coding; maneno rahisi kwa viongozi wasio wataalamu wa teknolojia",
      "Vifaa: kompyuta yenye msaidizi wa AI wa bure wa kuandika rasimu",
      "Sheria na kanuni zinatofautiana kwa sekta na mahali, kwa hiyo wanafunzi wanakagua na mshauri mwenye sifa",
      "Hakuna taarifa binafsi wala za siri katika zana za AI wakati wa kuandika mpango",
      "Muda: masomo mafupi, na mpango wa mwisho unachukua muda mrefu zaidi"
    ],
    prerequisites: "Kozi ya 1 na ya 2 za Uongozi katika Zama za AI ya Mawakala."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa michakato mitano katika eneo lako", action: "kuchora ramani ya mchakato na kuupa alama kama mchakato wa kwanza unaofaa kwa wakala wa AI", standard: "ukitumia vigezo vitano: wingi, hatua zilizo wazi, taarifa za kidijitali, usumbufu na madhara madogo" },
    { id: "O2", condition: "Kwa mchakato wako wa majaribio", action: "kuchagua kiwango cha kuanzia cha uhuru wa wakala, kuorodhesha kila sehemu ya idhini ya mtu na kumtaja mmiliki wa wakala", standard: "kukiwa na idhini kabla wakala hajatumia pesa au kuzungumza na wateja" },
    { id: "O3", condition: "Kabla majaribio hayajaanza", action: "kuweka hali ya mwanzo, vipimo vitatu hadi vitano vya mafanikio na rejista ya hatari", standard: "kukiwa na vipimo vya ubora na angalau hatari tano, kila moja na kinga yake na mmiliki wake" },
    { id: "O4", condition: "Ukipewa watu wanaoguswa na majaribio yako", action: "kupanga jinsi utakavyowasiliana nao, kuwashirikisha na kuwafundisha", standard: "ukisema kwa uaminifu nini kitabadilika na nini hakitabadilika, na jinsi ya kutoa wasiwasi" },
    { id: "O5", condition: "Kwa timu au shirika lako", action: "kuweka usimamizi mwepesi wa AI wenye orodha ya zana, mmiliki kwa kila wakala na kikundi cha mapitio", standard: "kukiwa na angalau mistari mitatu katika orodha na mtu anayeweza kusimamisha kila wakala" },
    { id: "O6", condition: "Ukitumia sehemu zilizo hapo juu", action: "kuandika na kuwasilisha mpango wa majaribio wa siku 90 wa kurasa mbili wenye kanuni ya kuendelea au kusimama", standard: "kanuni ikiwa imeandikwa kabla majaribio hayajaanza na maswali mawili magumu yakiwa yameandikwa" }
  ],
  chapters: [
    {
      name: "Sura 1: Mawakala katika kazi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kupata mchakato unaofaa kuendeshwa kiotomatiki",
          minutes: 6,
          goal: "Chora ramani ya mchakato na uupe alama kuona kama unafaa kuwa wa kwanza kwa wakala.",
          text: [
            "Usianze na teknolojia; anza na kazi. Mchakato mzuri wa kwanza unafanyika mara nyingi, una hatua zilizo wazi, unatumia taarifa ambazo tayari ziko kidijitali, unawachosha au unawachelewesha watu, na makosa yake yanaweza kugunduliwa kabla hayajaleta madhara. Mifano: kupanga maombi yanayoingia, kuandaa ripoti za kila wiki, kupanga ratiba, rasimu za kwanza za majibu ya kawaida.",
            "Chora ramani yake kabla ya kuuendesha kiotomatiki. Andika kila hatua, nani anaifanya, zana inayotumika na muda unaochukua. Ramani mara nyingi inaonyesha upotevu unaoweza kuuondoa bila AI hata kidogo. Kuendesha kiotomatiki mchakato ulioharibika kunaufanya uharibike haraka zaidi tu.",
            "Mpe kila mchakato alama kutoka 1 hadi 5 kwa: wingi, hatua zilizo wazi, taarifa za kidijitali, usumbufu kwa wafanyakazi, na madhara madogo ukikosea. Chagua jumla ya juu zaidi kwa majaribio yako ya kwanza, si wazo linalosisimua zaidi. Epuka majaribio ya kwanza yanayofanya maamuzi kuhusu watu, pesa au usalama."
          ],
          steps: ["Orodhesha michakato mitano inayowezekana.", "Chora ramani ya miwili bora: hatua, nani, zana, muda.", "Ondoa upotevu ulio wazi kwanza.", "Mpe kila mmoja alama 1 hadi 5 kwa wingi, hatua wazi, taarifa za kidijitali, usumbufu, madhara madogo.", "Chagua alama ya juu zaidi isiyohusu maamuzi kuhusu watu, pesa au usalama."],
          words: [["Ramani ya mchakato", "picha ya hatua kwa hatua ya jinsi kazi fulani inavyofanyika leo."], ["Majaribio (pilot)", "jaribio dogo la muda maalum kabla ya kutumia kitu kwa upana zaidi."]],
          slides: [
            { title: "Anza na kazi", bullets: ["Inafanyika mara nyingi, hatua wazi, taarifa za kidijitali", "Inachelewesha au inawachosha watu", "Makosa yanagunduliwa kabla ya madhara"] },
            { title: "Chora ramani kabla ya kuendesha kiotomatiki", bullets: ["Hatua, nani, zana, muda", "Ondoa upotevu kwanza", "Mchakato ulioharibika + AI = kuharibika haraka zaidi"] },
            { title: "Ipe michakato alama", bullets: ["Wingi, hatua wazi, taarifa za kidijitali, usumbufu, madhara madogo", "Chagua alama bora, si linalosisimua zaidi", "Mwanzoni epuka maamuzi ya watu, pesa, usalama"] }
          ],
          tryIt: "Orodhesha michakato mitano katika eneo lako. Chora ramani ya miwili ya juu, uipe alama kwa vigezo vitano, na uchague mchakato wako wa majaribio.",
          youCanNow: "kuchora ramani ya mchakato na kuchagua mchakato wa kwanza unaofaa kwa wakala wa AI.",
          quickCheck: [
            { objective: "O1", q: "Ramani ya mchakato inaonyesha nini?", options: ["Kila hatua, nani anaifanya, zana inayotumika na muda unaochukua", "Mpangilio wa vyumba vya ofisi", "Matokeo ya mwisho tu", "Wafanyakazi gani wa kubadilishwa"], answer: 0, why: "Ramani inaonyesha jinsi kazi inavyofanyika kweli, na hivyo inaonyesha mahali wakala anaweza kusaidia." },
            { objective: "O1", q: "Mchakato hufanyika mara chache, hauko wazi na una madhara ukikosea. Ungeupa alama gani kama majaribio ya kwanza?", options: ["Majaribio mazuri ya kwanza, kwa sababu ni magumu", "Haufai kuwa wa kwanza; chagua mchakato unaofanyika mara nyingi, ulio wazi, wenye madhara madogo", "Uendeshe kiotomatiki wote mara moja", "Upe alama baadaye, baada ya wakala kutengenezwa"], answer: 1, why: "Majaribio ya kwanza yanapaswa kufanyika mara nyingi, kuwa wazi na kuwa na madhara madogo ukikosea." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Wakala anaweza kufanya kiasi gani? Uhuru na idhini",
          minutes: 5,
          goal: "Weka kiwango cha uhuru wa wakala na utaje idhini za watu.",
          text: [
            "Fikiria uhuru kwa viwango. Kiwango 1, kupendekeza: wakala anaandika rasimu, mtu anafanya kila kitu. Kiwango 2, kuandaa: wakala anaandaa kitendo (fomu iliyojazwa, barua pepe iliyo tayari) na mtu anaidhinisha kila kimoja. Kiwango 3, kutenda kwa ukaguzi: wakala anashughulikia kesi za kawaida na kupeleka kesi zisizo za kawaida kwa mtu, ambaye pia anakagua sampuli. Kiwango 4, kutenda peke yake: ni nadra, kwa kazi zenye madhara madogo zinazoweza kurudishwa nyuma tu.",
            "Anza majaribio katika kiwango 1 au 2. Panda juu tu vipimo vyako vinapoonyesha wakala anaaminika, na kwa kesi ambazo amethibitisha hivyo tu. Endelea kuweka idhini kabla ya chochote kinachotumia pesa, kinachozungumza na wateja au umma, kinachobadilisha kumbukumbu, au kinachogusa haki za mtu.",
            "Mtaje mtu anayewajibika kwa wakala: mtu anayemiliki matokeo yake, anayekagua kumbukumbu zake (log), na anayeweza kumzima. Wakala asiye na mmiliki ndiyo njia ya kawaida zaidi ambayo uendeshaji wa kiotomatiki huharibika."
          ],
          words: [["Kiwango cha uhuru", "kiasi ambacho wakala wa AI anaweza kufanya bila mtu kuidhinisha."], ["Kesi isiyo ya kawaida", "kesi isiyofuata mtindo wa kawaida na inayohitaji mtu."], ["Mmiliki wa wakala", "mtu anayewajibika anayemiliki matokeo ya wakala na anayeweza kumzima."]],
          slides: [
            { title: "Viwango vinne vya uhuru", bullets: ["1 Kupendekeza: wakala anaandika rasimu, watu wanatenda", "2 Kuandaa: watu wanaidhinisha kila kitendo", "3 Kutenda kwa ukaguzi: kesi zisizo za kawaida kwa watu", "4 Kutenda peke yake: nadra, madhara madogo, kinarudishwa nyuma"] },
            { title: "Anza chini, jenga imani", bullets: ["Majaribio katika kiwango 1 au 2", "Panda juu kukiwa na ushahidi tu"] },
            { title: "Idhini kila wakati kabla ya", bullets: ["Kutumia pesa", "Kuzungumza na wateja au umma", "Kubadilisha kumbukumbu au kugusa haki"] },
            { title: "Kila wakala ana mmiliki", bullets: ["Anamiliki matokeo, anakagua kumbukumbu", "Anaweza kumzima"] }
          ],
          tryIt: "Kwa mchakato wako wa majaribio, chagua kiwango cha kuanzia cha uhuru, orodhesha kila hatua ambapo mtu lazima aidhinishe, na umtaje mmiliki wa wakala.",
          youCanNow: "kuweka kiwango cha uhuru wa wakala, sehemu za idhini na mmiliki wake.",
          quickCheck: [
            { objective: "O2", q: "Mmiliki wa wakala anafanya nini?", options: ["Anaandika code ya wakala", "Ananunua programu", "Anamiliki matokeo ya wakala, anakagua kumbukumbu zake na anaweza kumzima", "Ndiye anayemtumia wakala zaidi"], answer: 2, why: "Kila wakala anahitaji mtu aliyetajwa anayewajibika kwake." },
            { objective: "O2", q: "Wakala wako wa majaribio ataandika rasimu za majibu kwa wateja. Ungeanza katika kiwango gani cha uhuru?", options: ["Uhuru kamili, ili kuokoa muda mwingi zaidi", "Kutenda kwa ukaguzi, ukipeleka kesi zisizo za kawaida tu", "Hakuna kiwango; ruka uamuzi huo", "Kiwango 1 au 2, ili mtu aidhinishe kabla chochote hakijamfikia mteja"], answer: 3, why: "Majaribio kwa kawaida huanza chini, na idhini inakuja kabla wakala hajazungumza na wateja." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kupima thamani na hatari kwa uaminifu",
          minutes: 6,
          goal: "Weka hali ya mwanzo, vipimo vya mafanikio na rejista ya hatari kwa majaribio.",
          text: [
            "Huwezi kuonyesha maendeleo bila hali ya mwanzo (baseline): jinsi mchakato unavyofanya kazi leo. Pima muda kwa kila kazi, wingi, kiwango cha makosa, muda wa kusubiri na kuridhika kwa wafanyakazi au wateja kwa wiki chache kabla ya majaribio.",
            "Chagua vipimo vitatu hadi vitano vya mafanikio, na uweke ubora, si kasi tu: \"muda kwa kila ombi upungue kwa asilimia 30 bila makosa kuongezeka\". Hesabu gharama zilizojificha: muda wa kukagua, gharama za zana, mafunzo na muda wa kurekebisha makosa ya wakala.",
            "Tunza rejista ya hatari: jedwali rahisi la kila hatari, uwezekano wake, ubaya wake, kinga, na mmiliki. Hatari za kawaida za mawakala: majibu yasiyo sahihi, kuvuja kwa taarifa binafsi, prompt injection (maagizo ya hila yaliyofichwa), ruhusa nyingi mno, matokeo yasiyo ya haki, wafanyakazi kumwamini wakala kupita kiasi, na kufungwa kwa msambazaji mmoja. Mfumo wa bure wa NIST wa Usimamizi wa Hatari za AI (AI Risk Management Framework), uliopangwa kama Govern, Map, Measure na Manage (Simamia, Chora, Pima na Dhibiti), ni mwongozo mzuri."
          ],
          steps: ["Pima hali ya mwanzo kwa wiki chache.", "Chagua vipimo vitatu hadi vitano, pamoja na ubora.", "Hesabu gharama zilizojificha: ukaguzi, zana, mafunzo, marekebisho.", "Orodhesha angalau hatari tano katika rejista.", "Ipe kila hatari kinga na mmiliki."],
          words: [["Hali ya mwanzo (baseline)", "jinsi mchakato unavyofanya kazi kabla hujaubadilisha."], ["Rejista ya hatari", "jedwali la hatari lenye uwezekano, ubaya, kinga na mmiliki."], ["Kufungwa kwa msambazaji (vendor lock-in)", "kukwama na msambazaji mmoja kwa sababu kubadilisha ni vigumu."]],
          slides: [
            { title: "Hali ya mwanzo kwanza", bullets: ["Muda kwa kila kazi, wingi, makosa", "Muda wa kusubiri, kuridhika", "Pima kwa wiki chache"] },
            { title: "Pima ubora, si kasi tu", bullets: ["\"Haraka 30%, bila makosa kuongezeka\"", "Hesabu muda wa ukaguzi, zana, mafunzo na marekebisho"] },
            { title: "Rejista ya hatari", bullets: ["Hatari, uwezekano, athari, kinga, mmiliki", "Majibu mabaya, faragha, prompt injection, ruhusa", "Ukosefu wa haki, kuamini kupita kiasi, kufungwa kwa msambazaji"] }
          ],
          sources: [{ name: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
          tryIt: "Andika vipimo vya hali ya mwanzo kwa mchakato wako wa majaribio, vipimo vitatu hadi vitano vya mafanikio, na rejista ya hatari yenye angalau hatari tano, kila moja na kinga na mmiliki.",
          youCanNow: "kuweka hali ya mwanzo, vipimo vya kweli vya mafanikio na rejista ya hatari kwa majaribio ya AI.",
          quickCheck: [
            { objective: "O3", q: "Rejista ya hatari ni nini?", options: ["Orodha ya hatari, kila moja na uwezekano, athari, kinga na mmiliki", "Orodha ya wafanyakazi wanaotumia AI", "Bima", "Kumbukumbu za kazi za wakala"], answer: 0, why: "Rejista ya hatari inaifanya kila hatari ionekane na kuipa kinga na mmiliki." },
            { objective: "O3", q: "Kipimo chako pekee cha mafanikio ni \"haraka zaidi\". Ungeongeza nini?", options: ["Hakuna; kasi ndiyo muhimu", "Kipimo cha ubora, kama makosa kutoongezeka", "Kipimo cha jinsi wafanyakazi wanavyompenda msambazaji", "Alama ambayo wakala anajipa mwenyewe"], answer: 1, why: "Kasi bila ubora inaweza kuficha makosa na kazi ya kurudia." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Mawakala katika kazi",
        questions: [
          { objective: "O1", q: "Mchakato upi ni bora kuwa wa kwanza kwa majaribio ya wakala wa AI?", options: ["Kuamua nani apandishwe cheo", "Kuidhinisha malipo makubwa", "Kupanga maombi ya kawaida yanayoingia", "Kushughulikia matukio ya usalama"], answer: 2, why: "Kazi inayofanyika mara nyingi, iliyo wazi na yenye madhara madogo ni majaribio salama ya kwanza." },
          { objective: "O1", q: "Kwa nini uchore ramani ya mchakato kabla ya kuuendesha kiotomatiki?", options: ["Ramani mara nyingi inaonyesha upotevu, na kuendesha kiotomatiki mchakato ulioharibika kunaufanya uharibike haraka zaidi", "Inatakiwa na sheria", "Mawakala hawawezi kufanya kazi bila ramani", "Inafanya majaribio kuwa marefu zaidi"], answer: 0, why: "Rekebisha mchakato kwanza, kisha uendeshe kiotomatiki." },
          { objective: "O2", q: "Katika kiwango 2 cha uhuru (kuandaa), nani anaidhinisha kila kitendo?", options: ["Hakuna mtu", "Wakala", "Msambazaji", "Mtu"], answer: 3, why: "Kiwango 2 kinaandaa vitendo kwa ajili ya idhini ya mtu." },
          { objective: "O3", q: "Hali ya mwanzo (baseline) ni nini?", options: ["Mpango wa bei nafuu zaidi", "Jinsi mchakato unavyofanya kazi kabla ya mabadiliko", "Jina la wakala", "Ripoti ya mwisho"], answer: 1, why: "Bila hali ya mwanzo huwezi kuonyesha maendeleo." },
          { objective: "O3", q: "Kipimo kipi cha mafanikio ni bora?", options: ["\"Inaonekana haraka zaidi\"", "\"Wafanyakazi wanapenda nembo\"", "\"Wakala ana shughuli nyingi\"", "\"Muda kwa kila ombi umepungua 30% bila makosa kuongezeka\""], answer: 3, why: "Kinapima kasi na ubora ukilinganisha na hali ya mwanzo." }
        ]
      }
    },
    {
      name: "Sura 2: Kuongoza watu na mpango",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuongoza watu katika mabadiliko",
          minutes: 5,
          goal: "Panga jinsi utakavyowasiliana na watu wanaoguswa, kuwashirikisha na kuwafundisha.",
          text: [
            "Uendeshaji wa kiotomatiki unabadilisha kazi, na watu wanauhisi kabla hujatangaza chochote. Washirikishe tangu mwanzo watu wanaofanya kazi hiyo leo: wanajua kesi zisizo za kawaida, njia za mkato na hatari halisi. Wanapaswa kusaidia kuchora ramani ya mchakato na kumjaribu wakala.",
            "Wasiliana mapema na kwa uaminifu: kwa nini unafanya majaribio, nini kitabadilika na nini hakitabadilika, nini kitatokea kwa muda utakaookolewa, na jinsi watu wanavyoweza kutoa wasiwasi wao. Kama bado hujui, sema hivyo na useme utajua lini. Kimya hujazwa na uvumi.",
            "Panga ujuzi mpya: kukagua kazi ya wakala, kushughulikia kesi zisizo za kawaida, kugundua makosa ya AI na kuandika maagizo mazuri. Tenga muda wa mafunzo, na watambue watu wanaogundua matatizo; kukamata kosa la wakala ni mchango, si ukosefu wa uaminifu."
          ],
          steps: ["Orodhesha nani anaguswa na jinsi gani.", "Waalike watu wanaofanya kazi wasaidie kuchora ramani na kujaribu.", "Waambie kwa nini, nini kinabadilika, nini hakibadiliki, na jinsi ya kutoa wasiwasi.", "Panga ujuzi mpya na muda wa mafunzo.", "Watambue watu wanaogundua matatizo."],
          words: [["Usimamizi wa mabadiliko", "kupanga jinsi watu wanavyohama kutoka njia ya zamani ya kufanya kazi kwenda njia mpya."], ["Mdau", "mtu yeyote anayeguswa na mabadiliko au anayeweza kuyaathiri."]],
          slides: [
            { title: "Washirikishe watu wanaofanya kazi", bullets: ["Wanajua kesi zisizo za kawaida na hatari", "Wanasaidia kuchora ramani na kujaribu"] },
            { title: "Wasiliana mapema na kwa uaminifu", bullets: ["Kwa nini, nini kinabadilika, nini hakibadiliki", "Nini kinatokea kwa muda unaookolewa", "Sema kama bado hujui"] },
            { title: "Jenga ujuzi mpya", bullets: ["Kukagua kazi ya wakala na kesi zisizo za kawaida", "Kugundua makosa ya AI", "Watuze watu wanaogundua matatizo"] }
          ],
          tryIt: "Orodhesha watu wanaoguswa na majaribio yako. Andika ujumbe mfupi wa kwanza kwao unaoeleza kwa nini, nini kitabadilika na nini hakitabadilika, na jinsi ya kutoa wasiwasi. Panga kipindi kimoja cha mafunzo.",
          youCanNow: "kupanga upande wa watu katika mabadiliko ya AI: ushirikishaji, mawasiliano ya kweli na mafunzo.",
          quickCheck: [
            { objective: "O4", q: "Usimamizi wa mabadiliko unahusu nini?", options: ["Kubadilisha matoleo ya programu", "Kubadilisha bajeti", "Kuwahamisha watu kutoka njia ya zamani ya kufanya kazi kwenda njia mpya", "Kubadilisha mameneja"], answer: 2, why: "Usimamizi wa mabadiliko unahusu watu, si zana tu." },
            { objective: "O4", q: "Wafanyakazi wanauliza kama majaribio yataathiri kazi zao na bado hujui. Unasema nini?", options: ["Ahidi kwamba hakuna kitakachobadilika", "Usiseme kitu hadi siku ya 90", "Waambie ni siri", "Sema bado hujui na utajua lini"], answer: 3, why: "Majibu ya kweli, hata \"bado\", yanajenga imani wakati wa mabadiliko." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Usimamizi rahisi wa AI unaofanya kazi",
          minutes: 5,
          goal: "Weka usimamizi mwepesi: orodha ya zana, mmiliki kwa kila wakala na ratiba ya mapitio.",
          text: [
            "Usimamizi (governance) maana yake ni kuamua nani anaweza kufanya nini na AI, na kukagua kwamba unafanya kazi. Hauhitaji kuwa mzito. Anza na mambo matatu.",
            "Orodha ya zana (inventory): orodha ya kila zana na wakala wa AI unaotumika, kazi yake, taarifa anazogusa, kiwango chake cha uhuru na mmiliki wake. Huwezi kusimamia usichojua kipo, na wafanyakazi mara nyingi huanza kutumia zana wenyewe.",
            "Kikundi kidogo cha mapitio (kwa shirika dogo, watu wawili au watatu) kinachoidhinisha mawakala wapya, kinachopitia rejista ya hatari na ripoti za matukio kila mwezi, na kinachoweza kusimamisha wakala yeyote. Andika jinsi mtu anavyoripoti tatizo la AI na jinsi mnavyojibu haraka. Kagua sheria au kanuni zozote zinazohusu sekta yako na mahali ulipo na mshauri mwenye sifa."
          ],
          steps: ["Tengeneza orodha ya zana na mawakala wa AI.", "Andika kazi, taarifa, kiwango cha uhuru na mmiliki kwa kila mmoja.", "Unda kikundi kidogo cha mapitio.", "Pitia hatari na matukio kila mwezi; ruhusu wakala yeyote asimamishwe.", "Tangaza jinsi ya kuripoti tatizo la AI."],
          words: [["Usimamizi (governance)", "kanuni na majukumu ya kuamua na kukagua jinsi kitu kinavyotumika."], ["Orodha ya zana (inventory)", "orodha kamili ya zana na mawakala wa AI wanaotumika."], ["Tukio", "jambo ambalo kitu kiliharibika au karibu kiharibike."]],
          slides: [
            { title: "Usimamizi unaweza kuwa mwepesi", bullets: ["Nani anaweza kufanya nini na AI", "Na kukagua kwamba unafanya kazi"] },
            { title: "Anza na orodha ya zana", bullets: ["Kila zana na wakala wa AI", "Kazi, taarifa, kiwango cha uhuru, mmiliki"] },
            { title: "Kikundi kidogo cha mapitio", bullets: ["Kinaidhinisha mawakala wapya", "Mapitio ya hatari na matukio kila mwezi", "Kinaweza kusimamisha wakala yeyote"] },
            { title: "Fanya kuripoti kuwe rahisi", bullets: ["Jinsi ya kuripoti tatizo la AI", "Mnajibu haraka kiasi gani", "Kagua kanuni za sekta na mshauri"] }
          ],
          sources: [{ name: "NIST AI Risk Management Framework (Govern function)", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
          tryIt: "Anzisha orodha ya zana za AI kwa timu yako yenye angalau mistari mitatu (zana, kazi, taarifa, kiwango cha uhuru, mmiliki). Taja nani angekuwa katika kikundi chako cha mapitio.",
          youCanNow: "kuweka usimamizi mwepesi wa AI wenye orodha ya zana, wamiliki na ratiba ya mapitio.",
          quickCheck: [
            { objective: "O5", q: "Orodha ya zana za AI ni nini?", options: ["Orodha ya kila zana na wakala wa AI unaotumika, pamoja na wamiliki", "Duka linalouza AI", "Hesabu ya kompyuta", "Orodha ya wafanyakazi waliofundishwa AI"], answer: 0, why: "Huwezi kusimamia usichokiorodhesha." },
            { objective: "O5", q: "Huna uhakika ni sheria gani zinamhusu wakala wako katika sekta yako. Ungefanya nini?", options: ["Kumuuliza msaidizi wa AI na kufuata anachosema", "Kukagua na mshauri mwenye sifa", "Kudhani hakuna sheria zinazohusu majaribio", "Kunakili mpango wa kampuni nyingine"], answer: 1, why: "Sheria zinatofautiana kwa sekta na mahali, kwa hiyo mshauri mwenye sifa anapaswa kuzithibitisha." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuandika mpango wa majaribio wa siku 90",
          minutes: 6,
          goal: "Unganisha mpango wa majaribio wa siku 90 wenye kanuni ya kuendelea au kusimama.",
          text: [
            "Unganisha kazi yako katika mpango wa kurasa mbili. Siku 1 hadi 30: hali ya mwanzo, maandalizi, mafunzo, wakala katika kiwango 1 au 2 kwa sehemu ndogo ya kazi. Siku 31 hadi 60: endesha, pitia kumbukumbu kila wiki, rekebisha matatizo, fuatilia vipimo. Siku 61 hadi 90: linganisha na hali ya mwanzo, wahoji wafanyakazi na uamue.",
            "Andika kanuni ya kuendelea au kusimama kabla ya kuanza, ili matokeo yaamue, si shauku: \"Panua kwa timu nzima kama muda kwa kila ombi utapungua angalau asilimia 25, makosa hayataongezeka, na hakuna tukio zito litakalotokea. Vinginevyo simama au usanifu upya.\" Weka kanuni ya kusimama kwa matukio mazito wakati wowote.",
            "Tumia msaidizi wa AI kugeuza maelezo yako kuwa rasimu safi, kisha uihariri mwenyewe. Uwasilishe kwa dakika tano: tatizo, mchakato, wakala na mipaka yake, vipimo, hatari, mpango wa watu, na kanuni ya uamuzi."
          ],
          steps: ["Siku 1-30: hali ya mwanzo, maandalizi, mafunzo, kuanza kidogo.", "Siku 31-60: endesha, pitia kumbukumbu kila wiki, rekebisha, vipimo.", "Siku 61-90: linganisha, wahoji wafanyakazi, amua.", "Andika kanuni ya kuendelea au kusimama na kanuni ya kusimama kwanza.", "Andika rasimu kwa AI, hariri mwenyewe, wasilisha kwa dakika tano."],
          words: [["Kanuni ya kuendelea au kusimama", "kanuni ya uamuzi, iliyoandikwa mapema, ya kama uendelee au usiendelee."], ["Kanuni ya kusimama", "hali inayositisha majaribio mara moja, kama tukio zito."]],
          slides: [
            { title: "Awamu tatu", bullets: ["Siku 1-30: hali ya mwanzo, maandalizi, kuanza kidogo", "Siku 31-60: endesha, pitia, rekebisha", "Siku 61-90: linganisha, hoji, amua"] },
            { title: "Amua kanuni kwanza", bullets: ["Endelea kama vipimo vimefikiwa na hakuna tukio zito", "Vinginevyo simama au usanifu upya", "Kanuni ya kusimama kwa matukio mazito"] },
            { title: "Wasilisha kwa dakika tano", bullets: ["Tatizo, mchakato, wakala na mipaka yake", "Vipimo, hatari, mpango wa watu", "Kanuni ya uamuzi"] }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wako wa majaribio wa siku 90 wa kurasa mbili wenye ramani ya mchakato, uhuru na idhini, mmiliki, hali ya mwanzo na vipimo, rejista ya hatari, mpango wa watu, na kanuni ya kuendelea au kusimama. Uwasilishe kwa mwenzako kwa dakika tano na uandike maswali yake mawili magumu zaidi.",
          youCanNow: "kuongoza majaribio ya wakala wa AI kutoka wazo hadi mpango wenye vipimo vilivyo wazi, kinga na kanuni ya uamuzi.",
          quickCheck: [
            { objective: "O6", q: "Kanuni ya kuendelea au kusimama ni nini?", options: ["Kanuni ya lini wafanyakazi wanaweza kutumia AI", "Saa ya kila siku ya wakala kuanza kazi", "Kanuni iliyoandikwa mapema inayoamua kama kupanua, kubadilisha au kusimama siku ya 90", "Orodha ya zana zilizopigwa marufuku"], answer: 2, why: "Kuandika kanuni kwanza kunaweka uamuzi wa siku ya 90 kuwa wa kweli." },
            { objective: "O6", q: "Mwenzako anauliza swali gumu kuhusu mpango wako ambalo huwezi kulijibu. Unafanya nini?", options: ["Kuliandika na kuongeza jibu au hatua inayofuata katika mpango", "Kubadilisha mada", "Kuondoa sehemu hiyo ya mpango", "Kusema AI itashughulikia"], answer: 0, why: "Maswali magumu yanaonyesha mahali mpango unahitaji kazi kabla majaribio hayajaanza." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuongoza watu na mpango",
        questions: [
          { objective: "O4", q: "Nani anapaswa kusaidia kuchora ramani ya mchakato na kumjaribu wakala?", options: ["Msambazaji tu", "Viongozi wakuu tu", "Watu wanaofanya kazi hiyo leo", "Hakuna mtu"], answer: 2, why: "Wanajua kesi zisizo za kawaida na hatari halisi." },
          { objective: "O4", q: "Bado hujui majaribio yataathiri kazi za watu vipi. Unapaswa kusema nini?", options: ["Kwamba bado hujui na utajua lini", "Kwamba hakuna kitakachobadilika kamwe", "Hakuna kitu hadi yamalizike", "Kwamba kila mtu atapoteza kazi yake"], answer: 0, why: "Uaminifu kuhusu kutokuwa na uhakika unazuia uvumi." },
          { objective: "O5", q: "Orodha ya zana za AI ni nini?", options: ["Orodha ya manunuzi", "Orodha ya kila zana na wakala wa AI unaotumika, pamoja na wamiliki", "Orodha ya wafanyakazi", "Bajeti"], answer: 1, why: "Huwezi kusimamia usichojua kipo." },
          { objective: "O6", q: "Kanuni ya kuendelea au kusimama inapaswa kuandikwa lini?", options: ["Kabla majaribio hayajaanza", "Baada ya matokeo kupatikana", "Kamwe", "Majaribio yakishindwa tu"], answer: 0, why: "Kuiandika kwanza kunaruhusu matokeo, si shauku, kuamua." },
          { objective: "O6", q: "Tukio zito la faragha linatokea siku ya 40. Mpango unapaswa kusema nini?", options: ["Endelea hadi siku ya 90", "Panda kiwango cha uhuru", "Lifiche", "Simamisha mara moja chini ya kanuni ya kusimama"], answer: 3, why: "Kanuni ya kusimama inatumika wakati wowote." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Uongozi katika Zama za AI ya Mawakala 3: AI ya Mawakala, Uendeshaji wa Kiotomatiki na Kuongoza Mabadiliko",
    questions: [
      { objective: "O1", q: "Mchakato mzuri wa kwanza wa kuendeshwa kiotomatiki ni:", options: ["Wa nadra na mgumu", "Unafanyika mara nyingi, hatua wazi, madhara madogo ukikosea", "Kuhusu kuwafukuza watu kazi", "Kuhusu malipo makubwa"], answer: 1, why: "Kazi rahisi, ya mara kwa mara, yenye madhara madogo ni mwanzo salama." },
      { objective: "O1", q: "Ramani ya mchakato inaonyesha:", options: ["Muundo wa shirika tu", "Mpangilio wa vyumba vya ofisi", "Kila hatua, nani anaifanya, zana na muda", "Mishahara"], answer: 2, why: "Ramani zinaonyesha jinsi kazi inavyofanyika leo." },
      { objective: "O1", q: "Kuendesha kiotomatiki mchakato ulioharibika:", options: ["Kunaufanya kuwa bure", "Kunaurekebisha wenyewe", "Kunaufanya uharibike haraka zaidi", "Kunaondoa hatari zote"], answer: 2, why: "Rekebisha mchakato kwanza." },
      { objective: "O1", q: "Vigezo vitano vya kutoa alama ni pamoja na:", options: ["Wingi, hatua wazi, taarifa za kidijitali, usumbufu, madhara madogo", "Rangi, ukubwa, chapa", "Gharama tu", "Umaarufu"], answer: 0, why: "Vinatabiri majaribio mazuri ya kwanza." },
      { objective: "O2", q: "Kiwango 1 cha uhuru (kupendekeza) maana yake ni:", options: ["Hakuna AI inayotumika", "Wakala anatenda peke yake", "Wakala anawaidhinisha watu", "Wakala anaandika rasimu; watu wanafanya kila kitu"], answer: 3, why: "Anapendekeza tu." },
      { objective: "O2", q: "Kiwango 3 (kutenda kwa ukaguzi) kinapeleka nini kwa watu?", options: ["Hakuna kitu", "Kesi zisizo za kawaida, pamoja na sampuli ya kukagua", "Ankara tu", "Sifa tu"], answer: 1, why: "Kesi za kawaida zinaendelea; zisizo za kawaida zinaenda kwa watu." },
      { objective: "O2", q: "Majaribio kwa kawaida yanapaswa kuanza katika:", options: ["Kiwango cha juu kabisa kilichopo", "Kiwango 4", "Hakuna kiwango", "Kiwango 1 au 2"], answer: 3, why: "Anza chini na ujenge imani." },
      { objective: "O2", q: "Idhini inapaswa kuja kila wakati kabla wakala hajafanya nini?", options: ["Kuhesabu maneno", "Kusoma ukurasa wa umma", "Kutumia pesa au kuzungumza na wateja", "Kupanga jedwali"], answer: 2, why: "Vitendo hivi vina matokeo halisi." },
      { objective: "O2", q: "Mmiliki wa wakala:", options: ["Anamiliki matokeo yake, anakagua kumbukumbu na anaweza kumzima", "Ni msambazaji wa AI", "Si lazima", "Ni wakala mwenyewe"], answer: 0, why: "Kila wakala anahitaji mtu anayewajibika." },
      { objective: "O3", q: "Vipimo vya mafanikio vinapaswa kujumuisha:", options: ["Kasi tu", "Ubora, si kasi tu", "Gharama tu", "Maoni ya wafanyakazi tu"], answer: 1, why: "Haraka zaidi lakini mbaya zaidi si mafanikio." },
      { objective: "O3", q: "Ipi ni gharama iliyojificha ya wakala?", options: ["Muda unaotumika kukagua na kurekebisha kazi yake", "Kodi ya ofisi", "Kahawa", "Maegesho ya magari"], answer: 0, why: "Muda wa kukagua na kurekebisha unapunguza akiba." },
      { objective: "O3", q: "Rejista ya hatari inaorodhesha kila hatari pamoja na:", options: ["Hakuna kingine", "Utani", "Gharama tu", "Uwezekano, athari, kinga na mmiliki"], answer: 3, why: "Hilo linafanya hatari ziweze kudhibitiwa." },
      { objective: "O3", q: "Kufungwa kwa msambazaji (vendor lock-in) maana yake ni:", options: ["Ofisi iliyofungwa", "Kukwama na msambazaji mmoja kwa sababu kubadilisha ni vigumu", "Nywila", "Punguzo la bei"], answer: 1, why: "Ni hatari ya kimkakati inayofaa kuorodheshwa." },
      { objective: "O5", q: "Kazi nne za NIST AI RMF ni:", options: ["Buy, Build, Run, Sell", "Plan, Do, Check, Act", "Govern, Map, Measure, Manage", "Hire, Train, Promote, Retire"], answer: 2, why: "NIST inataja hizo nne." },
      { objective: "O4", q: "Usimamizi wa mabadiliko unahusu:", options: ["Kubadilisha nywila", "Kuhesabu sarafu", "Kuwahamisha watu kutoka njia ya zamani ya kufanya kazi kwenda njia mpya", "Kununua programu"], answer: 2, why: "Ni upande wa watu wa mabadiliko." },
      { objective: "O4", q: "Mfanyakazi anagundua kosa la wakala. Viongozi wanapaswa:", options: ["Kulitambua kama mchango", "Kulichukulia kama ukosefu wa uaminifu", "Kulipuuza", "Kulificha"], answer: 0, why: "Kugundua matatizo kunaweka majaribio salama." },
      { objective: "O5", q: "Usimamizi wa AI unaweza kuanza na:", options: ["Hakuna kitu", "Kitabu cha mwongozo cha kurasa 200", "Kupiga marufuku zana zote", "Orodha ya zana, wamiliki na kikundi kidogo cha mapitio"], answer: 3, why: "Usimamizi mwepesi unatosha kuanza." },
      { objective: "O5", q: "Katika usimamizi mzuri, nani anaweza kusimamisha wakala?", options: ["Hakuna mtu", "Kikundi cha mapitio au mmiliki", "Msambazaji tu", "Wakala tu"], answer: 1, why: "Lazima kuwe na mtu anayeweza kumsimamisha wakati wowote." },
      { objective: "O5", q: "Kuhusu sheria zinazohusu sekta yako na mahali ulipo, unapaswa:", options: ["Kunakili kanuni za nchi nyingine", "Kuiomba AI iamue", "Kudhani hakuna inayohusika", "Kukagua na mshauri mwenye sifa"], answer: 3, why: "Maswali ya kisheria yanahitaji ushauri wenye sifa." },
      { objective: "O6", q: "Siku 61 hadi 90 za majaribio ni kwa ajili ya:", options: ["Kununua zana zaidi", "Kuanza maandalizi", "Kulinganisha na hali ya mwanzo, kuwahoji wafanyakazi na kuamua", "Kuruka mapitio"], answer: 2, why: "Awamu ya mwisho inaleta uamuzi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 2, 4, 7, 9, 11, 14, 16, 17, 19] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Ramani ya mchakato", objective: "O1", notYet: "Hatua za sasa au muda havipo.", meets: "Inaonyesha hatua za sasa, nani anazifanya na muda.", exceeds: "Inataja upotevu uliogunduliwa wakati wa kuchora ramani na kwa nini mchakato huu ulipata alama nzuri." },
      { name: "Uhuru na idhini", objective: "O2", notYet: "Hakuna kiwango cha uhuru, sehemu za idhini wala mtu anayewajibika.", meets: "Inaeleza kazi ya wakala, kiwango chake cha uhuru, kila sehemu ya idhini ya mtu na mtu anayewajibika.", exceeds: "Inaeleza kwa nini kiwango hicho kinafaa majaribio ya kwanza." },
      { name: "Vipimo na hatari", objective: "O3", notYet: "Hakuna hali ya mwanzo, au hatari pungufu ya tano.", meets: "Hali ya mwanzo na vipimo vya mafanikio, na rejista ya hatari yenye angalau hatari tano.", exceeds: "Kila hatari ina kinga na mmiliki, na vipimo vinajumuisha ubora." },
      { name: "Mpango wa watu", objective: "O4", notYet: "Hausemi nani anaguswa wala jinsi watakavyoambiwa na kufundishwa.", meets: "Unataja nani anaguswa na jinsi utakavyowasiliana nao na kuwafundisha.", exceeds: "Unawashirikisha wafanyakazi katika kuchora ramani na kujaribu, na unasema jinsi ya kutoa wasiwasi." },
      { name: "Kanuni ya kuendelea au kusimama", objective: "O6", notYet: "Hakuna kanuni, au kanuni isiyoweza kupimwa.", meets: "Kanuni iliyo wazi ya kuendelea au kusimama kwa siku ya 90, iliyoandikwa kabla ya kuanza.", exceeds: "Inajumuisha kanuni ya kusimama kwa matukio mazito wakati wa majaribio." },
      { name: "Imewasilishwa na kupimwa", objective: "O6", notYet: "Haikuwasilishwa, au maswali hayakuandikwa.", meets: "Iliwasilishwa kwa dakika tano na maswali mawili magumu zaidi ya mwenzako yakaandikwa.", exceeds: "Mpango ulisasishwa kujibu maswali hayo." }
    ]
  },
  evaluation: {
    results: [
      "Viongozi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Mipango ya majaribio iliyowasilishwa kwa bodi, mmiliki au timu ya uongozi ndani ya siku 60 (utafiti wa kufuatilia)",
      "Majaribio yaliyoanza yakiwa na kanuni ya kuendelea au kusimama iliyoandikwa na mmiliki wa wakala aliyetajwa (utafiti wa kufuatilia)",
      "Mashirika yenye orodha ya zana za AI na kikundi cha mapitio ndani ya siku 90"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye msaidizi wa AI wa bure wa kuandika rasimu",
      "Orodha ya michakato katika eneo lako na nafasi ya kuwafikia watu wanaoifanya",
      "Kiolezo cha mpango wa kurasa mbili au hati tupu",
      "Kama dakika 60 kwa masomo na majaribio, pamoja na muda wa kuandika na kuwasilisha mpango"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha viongozi wape alama michakato inayowezekana katika vikundi vidogo.",
      "Wahimize viongozi kuwaalika wafanyakazi wanaofanya kazi hiyo kusaidia kuchora ramani ya mchakato.",
      "Wakumbushe viongozi wasiweke taarifa binafsi wala za siri katika zana za AI wanapoandika rasimu, na wakague sheria na mshauri mwenye sifa.",
      "Fanyeni kipindi cha mawasilisho ambapo wenzao wanauliza maswali mawili magumu zaidi.",
      "Pima mpango wa mwisho kwa rubriki, na hakikisha kanuni ya kuendelea au kusimama iliandikwa kabla ya tarehe ya kuanza."
    ]
  }
};

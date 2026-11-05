"use strict";

// Koach Learn course (Swahili translation of non-profits/nonprofit-ai-marketing-outreach.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "nonprofit-ai-marketing-outreach-sw",
  lang: "sw",
  translationOf: "nonprofit-ai-marketing-outreach",
  category: "Non Profits",
  name: "AI kwa Matangazo na Kuifikia Jamii",
  skills: "Kutambua hadhira yako na ujumbe wako, Kuandika machapisho ya mitandao ya kijamii kwa AI, Kuandika rasimu za jarida, Kufanya matangazo yawe wazi na yafae kila mtu, Kupanga mwezi mmoja wa matangazo",
  outcome: "kutumia AI kupanga na kuandika rasimu ya mwezi mmoja wa matangazo kwa programu ya shirika lisilo la faida: ujumbe mkuu kwa hadhira moja, machapisho manne ya mitandao ya kijamii, makala fupi ya jarida na tangazo la karatasi kwa lugha rahisi, vyote vimekaguliwa, vinafaa kila mtu na vinasikika kama shirika lako.",
  about: [
    "Kozi hii ni kwa wafanyakazi na watu wa kujitolea wa mashirika yasiyo ya faida na ya kidini wanaoshughulikia mitandao ya kijamii, majarida, matangazo ya karatasi na matangazo ya jamii, mara nyingi pamoja na kazi nyingine nyingi.",
    "Utajifunza kutaja hadhira yako na ujumbe wako, kisha kutumia AI kuandika haraka rasimu za machapisho, majarida na matangazo, kuyafanya yawe wazi na yafae kila mtu katika jamii yako, na kupanga mwezi mmoja wa matangazo.",
    "Kila somo linachukua kama dakika tano na linaisha kwa kazi ya vitendo inayokuwa sehemu ya mpango wako wa matangazo. Kuna jaribio la maarifa mwishoni mwa kila sura na mtihani wa maswali 20 mwishoni mwa kozi."
  ],
  finalTask: "Tengeneza mpango wa matangazo wa mwezi mmoja kwa programu au tukio moja halisi. Weka hadhira moja na ujumbe mkuu mmoja, machapisho manne ya mitandao ya kijamii yenye maelezo ya picha, makala ya jarida ya maneno 200, na maandishi ya tangazo la karatasi kwa lugha rahisi. Vyote viandikwe kwa msaada wa AI, vikaguliwe kwa ukweli na faragha, na vihaririwe ili visikike kama shirika lako. Viweke kwenye kalenda rahisi ya wiki nne.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wafanyakazi na watu wa kujitolea wa mashirika yasiyo ya faida na ya kidini wanaoshughulikia mitandao ya kijamii, majarida, matangazo ya karatasi na matangazo ya jamii, mara nyingi pamoja na kazi nyingine nyingi.",
    startingPoint: "Wanachapisha kwenye mitandao ya kijamii na kutuma barua pepe au matangazo mara kwa mara, kwa kawaida kwa haraka. Wengi hawajawahi kupanga matangazo mapema, kuandika maelezo ya picha au kutumia AI kwa rasimu.",
    gap: "Matangazo ya haraka, yasiyo wazi au magumu kusoma hayawafikii watu ambao programu ni kwa ajili yao, wakiwemo wanaosoma kwa lugha nyingine au wanaotumia kisoma-skrini. Wanafunzi wanahitaji kupanga haraka kwa AI mwezi mmoja wa matangazo yaliyo wazi, yanayofaa kila mtu na ya kweli, bila kuhatarisha faragha ya mtu yeyote.",
    constraints: [
      "Muda: matangazo yanafanywa pamoja na kazi nyingine, kwa hiyo kila somo ni kama dakika 5",
      "Faragha: idhini ya maandishi kwa picha za watoto na za wateja; hakuna maelezo yanayomtambulisha mtu katika hadithi bila makubaliano",
      "Tafsiri za AI zinakaguliwa na mtu wa jamii anayeijua lugha vizuri",
      "Majarida ya barua pepe yanahitaji njia wazi ya kujiondoa (unsubscribe)",
      "Vifaa: simu au kompyuta yenye zana za bure"
    ],
    prerequisites: "Kozi \"Utangulizi wa AI kwa Mashirika Yasiyo ya Kiserikali\", au uzoefu fulani wa kutumia msaidizi wa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa programu moja na hadhira moja", action: "kuandika ujumbe mkuu unaosema ni nini, kwa nini ni muhimu kwao na wafanye nini baadaye", standard: "kwa sentensi moja au mbili" },
    { id: "O2", condition: "Ukipewa ujumbe wako mkuu", action: "kuandika kwa AI rasimu za machapisho manne ya mitandao ya kijamii: tangazo, chapisho la nyuma ya pazia, shukrani na ukumbusho wa nafasi ya mwisho", standard: "kila moja fupi, likiishia na kitendo kimoja, na likitumia picha na hadithi zenye idhini tu" },
    { id: "O3", condition: "Ukipewa maelezo ya programu yako", action: "kuandika makala ya jarida ya maneno 200 yenye hadithi moja, namba moja ya kweli na jinsi ya kusaidia", standard: "kila namba, jina, tarehe na nukuu vikiwa vimekaguliwa" },
    { id: "O4", condition: "Ukipewa rasimu ya tangazo", action: "kuiandika upya kwa lugha rahisi na kuandika rasimu ya tafsiri kwa ajili ya jamii yako", standard: "tafsiri ikiwa imekaguliwa na mtu anayeijua lugha vizuri kabla ya kuisambaza" },
    { id: "O5", condition: "Ukipewa machapisho yako na tangazo lako la karatasi", action: "kuandika alt text na kuyafanya yafae kila mtu kwa manukuu, rangi zinazotofautiana na hashtag zinazosomeka", standard: "alt text ikilingana na kilichomo kweli katika kila picha" },
    { id: "O6", condition: "Ukipewa vipande vyako vya matangazo na tarehe ya tukio", action: "kutengeneza kalenda ya matangazo ya wiki nne yenye wiki, njia, kipande na nani anachapisha", standard: "tarehe zikiwa zimekaguliwa dhidi ya kalenda yako halisi" }
  ],
  chapters: [
    {
      name: "Sura 1: Ujumbe na njia",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuijua hadhira yako na ujumbe wako",
          minutes: 5,
          goal: "Andika ujumbe mkuu mmoja ulio wazi kwa hadhira moja.",
          text: [
            "Matangazo mazuri yanazungumza na kundi moja kwa wakati mmoja. Watu wa kujitolea, wafadhili, familia mnazohudumia, waumini wa kanisa na biashara za mtaa kila mmoja anajali mambo tofauti.",
            "Ujumbe mkuu unasema, kwa sentensi moja au mbili, kile unachotaka hadhira hiyo ijue na ifanye. Mfano kwa wazazi: \"Masomo ya ziada ya bure baada ya shule yanaanza Septemba 8 katika kituo cha jamii. Jiandikishe kabla ya Septemba 1 ili mtoto wako apate nafasi.\"",
            "AI inaweza kukusaidia kuuboresha. Uliza: \"Hii ni programu yetu: [maelezo ya umma]. Andika matoleo matatu ya ujumbe wa sentensi moja kwa [hadhira]. Kila moja liseme ni nini, kwa nini ni muhimu kwao, na wafanye nini baadaye.\""
          ],
          steps: ["Chagua programu moja na hadhira moja.", "Andika unachotaka wajue na wafanye.", "Iombe AI matoleo matatu ya sentensi moja.", "Chagua lililo wazi zaidi na ulihariri."],
          words: [["Hadhira", "kundi la watu unaojaribu kuwafikia."], ["Ujumbe mkuu", "sentensi moja au mbili unazotaka zaidi hadhira yako ikumbuke na izifanyie kazi."]],
          slides: [
            { title: "Hadhira moja kwa wakati mmoja", bullets: ["Watu wa kujitolea, wafadhili, familia, waumini", "Kila mmoja anajali mambo tofauti"] },
            { title: "Ujumbe mkuu unasema", bullets: ["Ni nini", "Kwa nini ni muhimu kwao", "Wafanye nini baadaye"] },
            { title: "Uboreshe kwa AI", bullets: ["Omba matoleo matatu ya sentensi moja", "Chagua lililo wazi zaidi", "Lihariri lisikike kama wewe"] }
          ],
          tryIt: "Chagua programu moja na hadhira moja. Tumia AI kupata matoleo matatu ya ujumbe mkuu, kisha andika ujumbe wako wa mwisho juu ya ukurasa wenye kichwa \"Mpango wa matangazo\".",
          youCanNow: "kuandika ujumbe mkuu ulio wazi kwa hadhira moja.",
          quickCheck: [
            { objective: "O1", q: "Kwa nini matangazo yazungumze na kundi moja kwa wakati mmoja?", options: ["Makundi tofauti yanajali mambo tofauti", "Ni rahisi zaidi kuchapisha", "Mitandao ya kijamii inaruhusu kundi moja tu", "Wafadhili na watu wa kujitolea ni watu wale wale"], answer: 0, why: "Watu wa kujitolea, wafadhili, familia na biashara kila mmoja anajali mambo tofauti." },
            { objective: "O1", q: "Ujumbe wako kwa watu wa kujitolea hausemi wafanye nini baadaye. Unaongeza nini?", options: ["Historia ndefu zaidi ya shirika", "Kitendo kimoja wazi, kama \"Jiandikishe kabla ya Ijumaa\"", "Hashtag zaidi", "Orodha ya kila programu"], answer: 1, why: "Ujumbe mkuu unasema ni nini, kwa nini ni muhimu na wafanye nini baadaye." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuandika machapisho ya mitandao ya kijamii kwa AI",
          minutes: 5,
          goal: "Andika kwa AI rasimu za machapisho manne ya mitandao ya kijamii kwa programu moja.",
          text: [
            "Machapisho ya mitandao ya kijamii yanafanya kazi vizuri zaidi yakiwa mafupi, yakionyesha tukio halisi, na yakiishia na kitendo kimoja wazi. Mitandao tofauti inafaa urefu tofauti: chapisho la Facebook linaweza kuwa refu zaidi, maelezo ya Instagram yanaenda na picha, na chapisho kwenye mtandao wa maandishi mafupi lazima liwe fupi.",
            "Uliza: \"Kwa kutumia ujumbe huu mkuu: [ujumbe], andika machapisho manne ya [mtandao] kwa wiki nne: tangazo, chapisho la nyuma ya pazia, shukrani kwa mtu wa kujitolea au mshiriki, na ukumbusho wa nafasi ya mwisho. Kila moja chini ya maneno 60, la kirafiki, lenye wito mmoja wa kuchukua hatua.\"",
            "Tumia picha zenu wenyewe kwa ruhusa. Usichapishe kamwe picha za watoto au wateja bila idhini ya maandishi, na usisimulie kamwe hadithi ya mtu kwa maelezo yanayoweza kumtambulisha isipokuwa amekubali."
          ],
          steps: ["Ipe AI ujumbe wako mkuu na mtandao utakaotumia.", "Omba aina nne za machapisho kwa wiki nne.", "Hariri kila moja lisikike kama shirika lako.", "Chagua picha mlizopewa ruhusa kuzitumia."],
          words: [["Mtandao (platform)", "huduma ya mitandao ya kijamii, kama Facebook au Instagram."], ["Maelezo ya picha (caption)", "maandishi yanayoenda na chapisho la picha au video."], ["Idhini", "makubaliano ya mtu, ikiwezekana kwa maandishi, ya kuonyeshwa au kunukuliwa."]],
          slides: [
            { title: "Machapisho yanayofanya kazi", bullets: ["Mafupi", "Tukio halisi", "Kitendo kimoja wazi"] },
            { title: "Aina nne za machapisho", bullets: ["Tangazo", "Nyuma ya pazia", "Shukrani", "Ukumbusho wa nafasi ya mwisho"] },
            { title: "Picha na hadithi", bullets: ["Tumia picha zenu wenyewe kwa ruhusa", "Idhini ya maandishi kwa watoto na wateja"] }
          ],
          tryIt: "Tumia AI kuandika rasimu za machapisho manne kwa mtandao mmoja kutokana na ujumbe wako mkuu. Yahariri na uyaongeze kwenye mpango wako wa matangazo.",
          youCanNow: "kuandika kwa AI rasimu za mfululizo wa machapisho ya mitandao ya kijamii.",
          quickCheck: [
            { objective: "O2", q: "Ni aina gani ya chapisho lazima liwe fupi?", options: ["Chapisho la Facebook", "Makala ya jarida", "Chapisho kwenye mtandao wa maandishi mafupi", "Tangazo la karatasi"], answer: 2, why: "Chapisho kwenye mtandao wa maandishi mafupi lazima liwe fupi; chapisho la Facebook linaweza kuwa refu zaidi." },
            { objective: "O2", q: "Mshiriki alisimulia hadithi inayogusa moyo lakini hakukubali kutajwa jina. Unaichapisha vipi?", options: ["Ichapishe pamoja na jina lake", "Chapisha picha yake pamoja na hadithi", "Ichapishe na uulize baadaye", "Isambaze bila maelezo yanayomtambulisha tu, au usiisambaze kabisa"], answer: 3, why: "Usisimulie kamwe hadithi ya mtu kwa maelezo yanayomtambulisha isipokuwa amekubali." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuandika rasimu ya makala ya jarida",
          minutes: 5,
          goal: "Geuza maelezo ya programu kuwa makala fupi ya jarida kwa AI.",
          text: [
            "Majarida yanawaweka wafadhili, watu wa kujitolea na wanachama karibu. Makala fupi inasimulia hadithi moja: nini kilitokea, ilimsaidia nani (bila maelezo ya faragha), ina maana gani kwa dhamira yenu, na wasomaji wanaweza kufanya nini baadaye.",
            "Ipe AI maelezo yako: \"Geuza maelezo haya kuwa makala ya jarida ya maneno 200 kwa wanaotuunga mkono. Tumia kichwa cha kirafiki, hadithi moja fupi, namba moja ya kweli, na umalizie kwa jinsi ya kusaidia: [maelezo].\"",
            "Kagua namba hiyo na kila jina na tarehe. Weka nukuu tu kama mtu halisi aliisema na amekubali kunukuliwa. Ukituma majarida kwa barua pepe, weka njia wazi ya kujiondoa (unsubscribe) na ufuate sheria za zana yako ya barua pepe."
          ],
          steps: ["Andika maelezo ya haraka kuhusu tukio moja la karibuni.", "Iombe AI makala ya maneno 200 yenye kichwa, hadithi, namba na jinsi ya kusaidia.", "Kagua kila ukweli na kila nukuu.", "Iweke kwenye jarida lako pamoja na picha mliyoruhusiwa kutumia."],
          words: [["Jarida", "taarifa ya mara kwa mara inayotumwa kwa wanaowaunga mkono kwa barua pepe au kwenye karatasi."], ["Kujiondoa (unsubscribe)", "kiungo kinachomruhusu mtu aache kupokea barua pepe zenu."]],
          slides: [
            { title: "Hadithi moja kwa kila makala", bullets: ["Nini kilitokea", "Ilimsaidia nani, bila maelezo ya faragha", "Wasomaji wanaweza kufanya nini"] },
            { title: "Ombi kwa AI (prompt)", bullets: ["Maneno 200, kichwa cha kirafiki", "Hadithi moja, namba moja ya kweli", "Malizia kwa jinsi ya kusaidia"] },
            { title: "Kabla ya kutuma", bullets: ["Kagua ukweli na nukuu", "Nukuu halisi tu, kwa makubaliano", "Weka kiungo cha kujiondoa"] }
          ],
          tryIt: "Andika mistari mitano ya maelezo kuhusu tukio la karibuni la programu. Tumia AI kuyageuza kuwa makala ya jarida ya maneno 200. Kagua kila ukweli.",
          youCanNow: "kugeuza maelezo ya programu kuwa makala ya jarida iliyokaguliwa.",
          quickCheck: [
            { objective: "O3", q: "Makala fupi ya jarida inapaswa kusimulia hadithi ngapi?", options: ["Moja", "Tano", "Hakuna", "Nyingi kadiri zinavyotosha"], answer: 0, why: "Makala fupi inasimulia hadithi moja." },
            { objective: "O3", q: "Rasimu ya jarida ya AI inaongeza nukuu ya mtu wa kujitolea ambaye hakuwahi kuisema. Unafanya nini?", options: ["Iache; inasikika vizuri", "Iondoe, au mwombe mtu huyo nukuu halisi anayokubali", "Badilisha jina la mtu huyo", "Ihamishe hadi mwisho"], answer: 1, why: "Weka nukuu tu kama mtu halisi aliisema na amekubali kunukuliwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Ujumbe na njia",
        questions: [
          { objective: "O1", q: "Ujumbe mkuu ni nini?", options: ["Sentensi moja au mbili unazotaka hadhira ikumbuke na izifanyie kazi", "Ripoti yenu yote ya mwaka", "Nywila", "Orodha ya wafadhili"], answer: 0, why: "Ujumbe mkuu ni mfupi na unaongoza kwenye kitendo." },
          { objective: "O1", q: "Upi ni ujumbe mkuu bora kwa wazazi?", options: ["\"Tunafanya mambo mengi.\"", "\"Masomo ya ziada ya bure yanaanza Septemba 8 katika kituo cha jamii. Jiandikishe kabla ya Septemba 1.\"", "\"Jifunze zaidi.\"", "\"Tuungeni mkono.\""], answer: 1, why: "Unasema ni nini, kwa nini, na wafanye nini baadaye." },
          { objective: "O2", q: "Unataka kuchapisha picha ya watoto katika programu yenu. Unahitaji:", options: ["Hakuna kitu", "Kichujio (filter)", "Idhini ya maandishi kutoka kwa mzazi au mlezi", "Maelezo ya picha ya AI"], answer: 2, why: "Picha za watoto zinahitaji ruhusa." },
          { objective: "O3", q: "Nukuu katika makala ya jarida inapaswa kutoka kwa:", options: ["AI", "Mtu wa kujitolea wa kubuni", "Mtu maarufu ambaye hujawahi kuongea naye", "Mtu halisi aliyekubali kunukuliwa"], answer: 3, why: "Nukuu za kubuni si za kweli." },
          { objective: "O3", q: "Kwa nini kuweka kiungo cha kujiondoa katika majarida ya barua pepe?", options: ["Ili watu waweze kuacha kupokea barua pepe", "Kupata michango zaidi", "Ni pambo tu", "Kushiriki data"], answer: 0, why: "Watu wanapaswa kuweza kujiondoa." }
        ]
      }
    },
    {
      name: "Sura 2: Kumfikia kila mtu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Lugha rahisi na lugha nyingine",
          minutes: 5,
          goal: "Tumia AI kuandika upya matangazo kwa lugha rahisi na kuandika rasimu ya tafsiri ya kukaguliwa.",
          text: [
            "Watu wengi katika jamii yako wanasoma kwa lugha ya pili, wanasoma kwa kiwango cha msingi, au wana shughuli nyingi na wanapitia haraka tu. Lugha rahisi inamsaidia kila mtu: sentensi fupi, maneno ya kawaida, jambo muhimu zaidi kwanza.",
            "Uliza: \"Andika upya hili kwa kiwango cha kusoma cha darasa la 6. Sentensi fupi. Weka tarehe, mahali na jinsi ya kujiandikisha kwanza.\" Kisha: \"Litafsiri hili kwa Kihispania kwa ajili ya familia za jamii yetu.\"",
            "Tafsiri za AI zinaweza kuwa na makosa au kusikika ajabu. Kila mara mwombe mtu wa jamii yako anayeijua lugha vizuri akague tafsiri kabla hujaisambaza."
          ],
          steps: ["Iombe AI iandike upya maandishi yako kwa kiwango cha kusoma cha darasa la 6.", "Weka tarehe, mahali na kitendo kwanza.", "Omba tafsiri kwa lugha inayotumiwa na jamii yako.", "Mwombe mtu anayeijua lugha vizuri aikague."],
          words: [["Lugha rahisi", "maandishi ambayo watu wanaweza kuyaelewa mara ya kwanza wanapoyasoma."], ["Kiwango cha kusoma", "jinsi maandishi yalivyo rahisi kusoma; darasa la chini ni rahisi zaidi."]],
          slides: [
            { title: "Lugha rahisi inamsaidia kila mtu", bullets: ["Sentensi fupi, maneno ya kawaida", "Jambo muhimu zaidi kwanza"] },
            { title: "Iulize AI", bullets: ["\"Andika upya kwa kiwango cha kusoma cha darasa la 6\"", "\"Litafsiri hili kwa Kihispania\""] },
            { title: "Kagua tafsiri", bullets: ["AI inaweza kukosea", "Mwanajamii anayeijua lugha vizuri anakagua"] }
          ],
          tryIt: "Chukua ujumbe wako mkuu na chapisho moja. Iombe AI iyaandike upya kwa lugha rahisi na iyatafsiri kwa lugha inayotumiwa na jamii yako. Andika nani anaweza kukagua tafsiri hiyo.",
          youCanNow: "kufanya matangazo yawe rahisi na kuandika rasimu za tafsiri ili mtu anayeijua lugha vizuri azikague.",
          quickCheck: [
            { objective: "O4", q: "Kipi ni sehemu ya lugha rahisi?", options: ["Sentensi ndefu", "Maneno ya kitaalamu", "Sentensi fupi na maneno ya kawaida", "Jambo muhimu zaidi mwishoni"], answer: 2, why: "Lugha rahisi inatumia sentensi fupi, maneno ya kawaida na jambo muhimu zaidi kwanza." },
            { objective: "O4", q: "AI ilitafsiri tangazo lako kwa Kivietinamu na hakuna mfanyakazi anayeijua lugha hiyo. Unafanya nini?", options: ["Lisambaze hivyo hivyo", "Iombe AI ikague tafsiri yake yenyewe", "Tumia Kiingereza tu", "Tafuta mtu wa jamii yako anayeijua lugha vizuri alikague kwanza"], answer: 3, why: "Tafsiri za AI zinaweza kuwa na makosa, kwa hiyo mwanajamii anayeijua lugha vizuri anazikagua kabla ya kusambaza." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kufanya matangazo yafae kila mtu",
          minutes: 4,
          goal: "Andika maelezo ya picha na ufanye machapisho na matangazo ya karatasi yawe rahisi kwa kila mtu kutumia.",
          text: [
            "Matangazo yanayofaa kila mtu yanafanya kazi kwa watu wasioona au wenye uoni hafifu, viziwi, au wanaotumia kisoma-skrini. Alt text ni maelezo mafupi ya picha ambayo kisoma-skrini kinayasoma kwa sauti.",
            "AI inaweza kuandika rasimu ya alt text: \"Andika alt text chini ya herufi 125 kwa picha ya watu wa kujitolea wakipanga makopo ya chakula katika kampeni ya kukusanya chakula.\" Kagua kwamba inaeleza kilichomo kweli katika picha.",
            "Mambo mengine rahisi: weka manukuu kwenye video, tumia rangi zinazotofautiana sana kwenye matangazo ya karatasi, usiweke maneno muhimu ndani ya picha peke yake, na andika hashtag kwa herufi kubwa mwanzoni mwa kila neno (#FeedOurCity) ili visoma-skrini vizitamke sawasawa."
          ],
          steps: ["Andika alt text kwa kila picha (AI inaweza kuandika rasimu).", "Weka manukuu kwenye video.", "Tumia rangi zinazotofautiana sana kwenye matangazo ya karatasi.", "Weka maelezo muhimu katika maandishi, si ndani ya picha peke yake.", "Anza kila neno la hashtag kwa herufi kubwa."],
          words: [["Alt text", "maelezo mafupi ya maandishi ya picha, yanayosomwa kwa sauti na visoma-skrini."], ["Kisoma-skrini (screen reader)", "programu inayosoma kwa sauti maandishi ya skrini kwa ajili ya watu wasioona au wenye uoni hafifu."], ["Utofauti wa rangi (contrast)", "jinsi rangi ya maandishi inavyotofautiana na rangi ya nyuma."]],
          slides: [
            { title: "Matangazo yanayofaa kila mtu", bullets: ["Yanafaa watu wasioona, wenye uoni hafifu au viziwi", "Alt text inaeleza picha"] },
            { title: "AI inaandika rasimu ya alt text", bullets: ["Chini ya herufi 125", "Kagua inalingana na picha"] },
            { title: "Mambo rahisi", bullets: ["Manukuu kwenye video", "Rangi zinazotofautiana sana", "Maelezo muhimu katika maandishi, si picha tu", "#HerufiKubwaKilaNeno"] }
          ],
          tryIt: "Andika alt text kwa picha za machapisho yako manne, AI ikiandika rasimu na wewe ukikagua. Rekebisha hashtag zozote ili kila neno lianze kwa herufi kubwa.",
          youCanNow: "kufanya machapisho na matangazo ya karatasi yafae kila mtu kwa alt text, manukuu na muundo ulio wazi.",
          quickCheck: [
            { objective: "O5", q: "Alt text inamsaidia nani?", options: ["Watu wanaotumia kisoma-skrini", "Injini za utafutaji tu", "Wafanyakazi tu", "Watu wenye intaneti ya kasi"], answer: 0, why: "Kisoma-skrini kinasoma alt text kwa sauti kwa ajili ya watu wasioona au wenye uoni hafifu." },
            { objective: "O5", q: "Tangazo lako la karatasi lina tarehe na mahali ndani ya picha tu. Unabadilisha nini?", options: ["Hakuna kitu", "Weka maelezo muhimu katika maandishi pia", "Fanya picha iwe kubwa zaidi", "Ongeza picha zaidi"], answer: 1, why: "Visoma-skrini haviwezi kusoma maneno yaliyo ndani ya picha." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kupanga mwezi mmoja wa matangazo",
          minutes: 5,
          goal: "Weka vipande vyako vya matangazo kwenye kalenda ya wiki nne.",
          text: [
            "Kalenda rahisi inafanya matangazo yaendelee bila kukatika. Orodhesha wiki nne. Kwa kila wiki, andika kinachotoka, kwenye njia gani, na nani anakichapisha.",
            "AI inaweza kupendekeza ratiba: \"Hivi ni vipande vyangu: [orodha]. Tukio letu ni tarehe [tarehe]. Tengeneza kalenda ya matangazo ya wiki nne kama jedwali: wiki, njia, kipande, nani anachapisha.\" Kagua tarehe dhidi ya kalenda yako halisi.",
            "Baadaye, angalia kilichofanya kazi: waliojiandikisha, maoni, mara zilizoshirikiwa, majibu. Endelea kufanya kilicholeta watu."
          ],
          steps: ["Orodhesha vipande vyako: machapisho, jarida, tangazo la karatasi.", "Iombe AI jedwali la kalenda ya wiki nne.", "Kagua tarehe dhidi ya kalenda yako halisi.", "Mpe kila kipande mtu wa kukichapisha.", "Mwezi ukiisha, andika kilicholeta watu."],
          words: [["Kalenda ya maudhui", "ratiba ya utakachochapisha au kutuma, na lini."], ["Njia (channel)", "namna unavyowafikia watu: mitandao ya kijamii, barua pepe, matangazo ya karatasi, matangazo ya mdomo."]],
          slides: [
            { title: "Kalenda rahisi", bullets: ["Wiki nne", "Kinachotoka, wapi, na nani anachapisha"] },
            { title: "Iombe AI jedwali", bullets: ["Wiki, njia, kipande, nani anachapisha", "Kagua tarehe wewe mwenyewe"] },
            { title: "Jifunze kutokana na matokeo", bullets: ["Waliojiandikisha, maoni, mara zilizoshirikiwa", "Endelea na kilicholeta watu"] }
          ],
          tryIt: "Kazi ya mwisho: maliza mpango wako wa matangazo wa mwezi mmoja. Weka ujumbe wako mkuu, machapisho manne yenye alt text, makala ya jarida na maandishi ya tangazo la karatasi kwa lugha rahisi kwenye kalenda ya wiki nne.",
          youCanNow: "kupanga na kuandika kwa AI rasimu za mwezi mmoja wa matangazo ya shirika lisilo la faida.",
          quickCheck: [
            { objective: "O6", q: "Unaangalia nini baada ya mwezi mmoja wa matangazo?", options: ["Idadi ya machapisho uliyoweka tu", "Rangi ya matangazo ya karatasi", "Waliojiandikisha, maoni, mara zilizoshirikiwa na majibu", "Machapisho ya makundi mengine"], answer: 2, why: "Angalia kilichofanya kazi: waliojiandikisha, maoni, mara zilizoshirikiwa na majibu." },
            { objective: "O6", q: "Kalenda ya AI inaweka ukumbusho wa nafasi ya mwisho baada ya tarehe ya tukio lenu. Unafanya nini?", options: ["Itumie kama ilivyo", "Futa ukumbusho", "Uchapishe mara mbili", "Uhamishe uwe kabla ya tukio, ukikagua tarehe dhidi ya kalenda yako halisi"], answer: 3, why: "Kagua tarehe za AI dhidi ya kalenda yako halisi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kumfikia kila mtu",
        questions: [
          { objective: "O4", q: "Lugha rahisi ni nini?", options: ["Kuandika bila alama za uakifishaji", "Maandishi ambayo watu wanaelewa mara ya kwanza", "Sentensi ndefu sana", "Maneno ya kitaalamu tu"], answer: 1, why: "Lugha rahisi inaeleweka mara ya kwanza inaposomwa." },
          { objective: "O4", q: "AI ilitafsiri tangazo lako kwa Kihispania. Kabla ya kulisambaza, unapaswa:", options: ["Kulisambaza mara moja", "Kulitafsiri tena kwa AI", "Kumwomba mtu anayeijua lugha vizuri alikague", "Kulifupisha"], answer: 2, why: "Tafsiri za AI zinaweza kuwa na makosa." },
          { objective: "O5", q: "Alt text ni nini?", options: ["Nywila ya akiba", "Chapisho la pili", "Aina ya mwandiko (font)", "Maelezo mafupi ya picha yanayosomwa na visoma-skrini"], answer: 3, why: "Alt text inafanya picha zifae kila mtu." },
          { objective: "O5", q: "Hashtag ipi ni rahisi zaidi kwa kisoma-skrini?", options: ["#FeedOurCity", "#feedourcity", "#FEEDOURCITY", "#f_o_c"], answer: 0, why: "Herufi kubwa zinasaidia visoma-skrini kutamka kila neno." },
          { objective: "O6", q: "Kalenda ya maudhui ni nini?", options: ["Orodha ya sikukuu", "Ratiba ya unachochapisha au kutuma, na lini", "Orodha ya siku za kuzaliwa za wafadhili", "Fomu ya kodi"], answer: 1, why: "Inafanya matangazo yaendelee na yawe na mpangilio." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Matangazo na Kuifikia Jamii",
    questions: [
      { objective: "O1", q: "Matangazo mazuri yanazungumza na:", options: ["Kila mtu kwa ujumbe ule ule", "Hakuna mtu hasa", "Hadhira moja kwa wakati mmoja", "Bodi tu"], answer: 2, why: "Hadhira tofauti zinajali mambo tofauti." },
      { objective: "O1", q: "Ujumbe mkuu unapaswa kusema:", options: ["Historia yenu yote", "Nembo yenu tu", "Bajeti yenu", "Ni nini, kwa nini ni muhimu kwao, na wafanye nini baadaye"], answer: 3, why: "Sehemu hizo zinaongoza kwenye kitendo." },
      { objective: "O1", q: "Njia nzuri ya kuboresha ujumbe kwa AI ni:", options: ["Kuomba matoleo matatu mafupi na kuchagua lililo wazi zaidi", "Kuomba toleo moja refu sana", "Kuiomba ichague hadhira yako", "Kuacha kuhariri"], answer: 0, why: "Kulinganisha matoleo kunakusaidia kuchagua." },
      { objective: "O2", q: "Machapisho ya mitandao ya kijamii yanafanya kazi vizuri zaidi yakiwa:", options: ["Marefu na ya jumla", "Mafupi, halisi na yakiishia na kitendo kimoja", "Bila kitendo chochote", "Yamejaa maneno ya kitaalamu"], answer: 1, why: "Machapisho mafupi na mahususi yanapata majibu." },
      { objective: "O2", q: "Ipi ni moja ya aina nne za machapisho katika somo?", options: ["Ritani ya kodi", "Mkataba wa kisheria", "Ukumbusho wa nafasi ya mwisho", "Kubadilisha nywila"], answer: 2, why: "Vikumbusho vinawasaidia watu kuchukua hatua kabla ya muda kuisha." },
      { objective: "O2", q: "Maelezo ya picha (caption) ni nini?", options: ["Kofia", "Zawadi ya mfadhili", "Anwani ya tovuti", "Maandishi yanayoenda na picha au video"], answer: 3, why: "Maelezo ya picha yanaeleza picha au video." },
      { objective: "O2", q: "Kabla ya kusimulia hadithi ya mteja, unahitaji:", options: ["Idhini yake na kutokuwa na maelezo yanayomtambulisha isipokuwa amekubali", "Hakuna kitu", "Taarifa zake za benki", "Nukuu ya mtu maarufu"], answer: 0, why: "Hadithi zinahitaji idhini na faragha." },
      { objective: "O3", q: "Makala ya jarida inapaswa kusimulia:", options: ["Kila tukio la mwaka", "Hadithi moja yenye namba moja ya kweli na jinsi ya kusaidia", "Majina ya wafadhili tu", "Hakuna kitu kuhusu dhamira"], answer: 1, why: "Hadithi moja inayolenga jambo moja ni rahisi zaidi kusoma." },
      { objective: "O3", q: "Unapaswa kukagua nini katika rasimu ya jarida ya AI?", options: ["Rangi ya kichwa tu", "Hakuna kitu", "Kila namba, jina, tarehe na nukuu", "Idadi ya maneno tu"], answer: 2, why: "AI inaweza kukosea ukweli." },
      { objective: "O3", q: "Kiungo cha kujiondoa kinawaruhusu watu:", options: ["Kuchangia mara mbili", "Kujitolea", "Kubadilisha nywila yako", "Kuacha kupokea barua pepe zenu"], answer: 3, why: "Watu wanapaswa kuweza kujiondoa." },
      { objective: "O4", q: "Ombi lipi linafanya maandishi yawe rahisi kusoma?", options: ["\"Andika upya kwa kiwango cha kusoma cha darasa la 6 kwa sentensi fupi.\"", "\"Lifanye kuwa gumu zaidi.\"", "\"Ongeza maneno ya kitaalamu.\"", "\"Lifanye kuwa refu zaidi.\""], answer: 0, why: "Viwango vya chini vya kusoma ni rahisi zaidi." },
      { objective: "O4", q: "Katika lugha rahisi, nini kinakuja kwanza?", options: ["Historia ndefu", "Jambo muhimu zaidi, kama tarehe, mahali na kitendo", "Shukrani kwa bodi", "Maelezo ya kisheria"], answer: 1, why: "Wasomaji wenye shughuli nyingi wanaona maelezo muhimu kwanza." },
      { objective: "O4", q: "Nani anapaswa kukagua tafsiri ya AI?", options: ["AI tena", "Hakuna mtu", "Mtu wa jamii yako anayeijua lugha vizuri", "Tovuti yoyote tu"], answer: 2, why: "Watu wanaoijua lugha vizuri wanaona makosa." },
      { objective: "O5", q: "Kisoma-skrini ni:", options: ["Mtu anayesoma skrini", "Televisheni", "Printa", "Programu inayosoma kwa sauti maandishi ya skrini"], answer: 3, why: "Kinawasaidia watu wasioona au wenye uoni hafifu." },
      { objective: "O5", q: "AI imeandika rasimu ya alt text kwa picha. Unapaswa:", options: ["Kukagua kwamba inalingana na kilichomo kweli katika picha", "Kuitumia bila kuangalia", "Kufuta picha", "Kuifanya iwe maneno 500"], answer: 0, why: "AI inaweza kueleza picha vibaya." },
      { objective: "O5", q: "Lipi ni jambo rahisi la kufanya video zifae kila mtu?", options: ["Kuzima sauti", "Kuweka manukuu", "Kuifanya iwe ndefu zaidi", "Kutumia maandishi madogo sana"], answer: 1, why: "Manukuu yanawasaidia viziwi au wanaotazama bila sauti." },
      { objective: "O5", q: "Kwa nini kuepuka kuweka maelezo muhimu ndani ya picha peke yake?", options: ["Picha ni haramu", "Inagharimu zaidi", "Visoma-skrini haviwezi kusoma maneno yaliyo ndani ya picha", "Wafadhili hawapendi picha"], answer: 2, why: "Maandishi katika chapisho yanamfikia kila mtu." },
      { objective: "O6", q: "Jedwali la kalenda ya maudhui linapaswa kuwa na:", options: ["Rangi tu", "Kiasi cha michango ya wafadhili", "Nywila", "Wiki, njia, kipande na nani anachapisha"], answer: 3, why: "Hili linafanya matangazo yawe na mpangilio." },
      { objective: "O6", q: "AI imetengeneza kalenda yako ya matangazo. Kabla ya kuitumia:", options: ["Kagua tarehe zake dhidi ya kalenda yako halisi", "Chapisha kila kitu leo", "Amini kila tarehe", "Ifute"], answer: 0, why: "AI inaweza kukosea tarehe." },
      { objective: "O6", q: "Baada ya mwezi mmoja wa matangazo, unapaswa:", options: ["Kutoangalia matokeo kamwe", "Kuandika kilicholeta watu na kuendelea kukifanya", "Kufuta machapisho yote", "Kuacha matangazo yote"], answer: 1, why: "Matokeo yanaonyesha kinachofanya kazi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [1, 3, 7, 10, 14, 17]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Hadhira na ujumbe mkuu", objective: "O1", notYet: "Hakuna hadhira moja, au ujumbe hauna hatua inayofuata.", meets: "Hadhira moja na ujumbe wa sentensi moja au mbili wenye nini, kwa nini na wafanye nini baadaye.", exceeds: "Mwanafunzi alijaribu matoleo matatu na anaweza kusema kwa nini alichagua hili." },
      { name: "Machapisho manne ya mitandao ya kijamii", objective: "O2", notYet: "Machapisho chini ya manne, au picha au hadithi bila idhini.", meets: "Machapisho manne mafupi ya aina zile nne, kila moja likiishia na kitendo kimoja, na idhini kwa picha na hadithi zote.", exceeds: "Kila chapisho linafaa urefu wa mtandao wake." },
      { name: "Makala ya jarida", objective: "O3", notYet: "Namba, jina, tarehe au nukuu haijakaguliwa.", meets: "Kama maneno 200, hadithi moja, namba moja ya kweli na jinsi ya kusaidia, vyote vimekaguliwa.", exceeds: "Ina nukuu halisi ambayo mtu huyo aliikubali." },
      { name: "Rahisi na inafaa kila mtu", objective: "O5", notYet: "Tangazo la karatasi ni gumu kusoma, au picha hazina alt text.", meets: "Tangazo la karatasi kwa lugha rahisi lenye maelezo muhimu kwanza, na alt text kwa kila picha inayolingana na picha.", exceeds: "Pia lina tafsiri iliyokaguliwa na mtu anayeijua lugha vizuri na hashtag zinazosomeka." },
      { name: "Kalenda ya wiki nne", objective: "O6", notYet: "Hakuna kalenda, au tarehe hazilingani na kalenda halisi.", meets: "Jedwali la wiki nne lenye wiki, njia, kipande na nani anachapisha, tarehe zikiwa zimekaguliwa.", exceeds: "Linaeleza jinsi matokeo yatakavyofuatiliwa baada ya mwezi." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Mashirika yanayoendesha mwezi wa matangazo uliopangwa ndani ya siku 60 (utafiti wa kufuatilia)",
      "Idadi ya waliojiandikisha kwenye programu au waliohudhuria tukio, kabla na baada ya mwezi wa matangazo",
      "Mashirika yanayoongeza alt text na tafsiri kwenye matangazo yao"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure",
      "Maelezo ya umma ya programu au tukio moja halisi, na picha mlizoruhusiwa kutumia",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Waombe wanafunzi wachague programu au tukio moja halisi linalokuja kabla ya kipindi.",
      "Wakumbushe wanafunzi kuhusu idhini ya maandishi kwa picha za watoto na za wateja.",
      "Mwalike mwanajamii anayeijua lugha vizuri akague tafsiri zozote zitakazotengenezwa katika kipindi.",
      "Jaribuni kisoma-skrini kwenye simu pamoja ili wanafunzi wasikie kwa nini alt text na hashtag ni muhimu.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};

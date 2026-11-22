"use strict";

// Koach Learn course (Swahili translation of underserved/underserved-ai-nonprofit-leadership.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "underserved-ai-nonprofit-leadership-sw",
  lang: "sw",
  translationOf: "underserved-ai-nonprofit-leadership",
  category: "Undeserved Community",
  name: "AI kwa Uongozi wa Mashirika Yasiyo ya Faida",
  skills: "Kuandika dhamira na lengo lililo wazi, Kupanga programu kwa AI, Kupanga wajitolea kwa usalama, Kutafuta na kufupisha ruzuku, Kuwapa wafadhili habari, Kuweka sheria rahisi za AI kwa kikundi chako",
  outcome: "kutumia msaidizi wa AI wa bure kuandika mpango wa programu wa ukurasa mmoja kwa kikundi chako cha jamii (lengo, ratiba, majukumu ya wajitolea na muhtasari mfupi wa ruzuku) na kuweka sheria rahisi za jinsi kikundi chako kinavyotumia AI kwa usalama.",
  about: [
    "Kozi hii ni kwa watu wanaoongoza, au wanaotaka kuongoza, kazi ya jamii: benki ya chakula, chama cha wapangaji, huduma ya kanisa, programu ya vijana, kikundi cha mtaa au shirika dogo lisilo la faida. Mara nyingi unafanya kazi hii kwa pesa kidogo, wafanyakazi wachache na moyo mkubwa.",
    "Utatumia msaidizi wa AI wa bure kuboresha dhamira yako, kupanga programu, kupanga wajitolea, kutafuta nafasi za ruzuku na kuwapa wafadhili habari, huku ukiwalinda watu unaowahudumia. AI inaokoa muda wa kuandika na kupanga; wewe unaleta busara, mahusiano na ujuzi wa jamii yako.",
    "Kila somo linachukua kama dakika tano na linaisha kwa kazi ya \"Jaribu sasa\" inayojenga mpango wako halisi. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Kwa maswali ya sheria, kodi au hadhi ya shirika lisilo la faida, kagua vyanzo rasmi kama irs.gov na ofisi ya mwanasheria mkuu au katibu wa jimbo lako (secretary of state)."
  ],
  finalTask: "Andika mpango wa programu wa ukurasa mmoja kwa mradi wa jamii, halisi au wa mazoezi, kwa msaada wa msaidizi wa AI wa bure: dhamira ya sentensi moja, lengo moja linalopimika, ratiba rahisi, majukumu matatu ya wajitolea (pamoja na hatua za usalama kama watoto wanahusika), muhtasari wa ruzuku wa sentensi tano, na sheria tano rahisi za jinsi kikundi chako kitakavyotumia AI. Ondoa taarifa zozote za binafsi kabla ya kushiriki.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wanaoongoza, au wanaotaka kuongoza, kazi ya jamii katika maeneo yasiyohudumiwa vya kutosha: viongozi wa benki za chakula, vyama vya wapangaji, huduma za kanisa, programu za vijana na vikundi vya mtaa, pamoja na wafanyakazi au wajumbe wa bodi wa mashirika madogo yasiyo ya faida.",
    startingPoint: "Wanaendesha programu kwa pesa kidogo na wafanyakazi wachache, na wanaandika matangazo, barua pepe na ripoti kwa mkono. Wengi wametumia msaidizi wa AI kidogo au hawajawahi, na wachache wana dhamira iliyoandikwa, lengo linalopimika, majukumu ya wajitolea au sheria za AI.",
    gap: "Vikundi vidogo vinapoteza saa nyingi kwa makaratasi na vinakosa ruzuku kwa sababu havina muda wala mipango iliyo wazi. AI inaweza kuandika rasimu ya kazi nyingi kati ya hizi, lakini viongozi lazima wawaweke salama watu wanaowahudumia, wakague kila ukweli na kuacha maamuzi mikononi mwa watu.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 6 hadi 7)",
      "Vifaa: simu janja au kompyuta ya maktaba au ya ofisi",
      "Gharama: zana za bure au zilizotolewa kama msaada tu",
      "Faragha: hakuna majina, anwani, namba za simu, taarifa za afya au za uhamiaji za watu wanaohudumiwa ndani ya AI",
      "Usalama wa watoto na watu wazima walio hatarini unafuata sera ya shirika na sheria za jimbo"
    ],
    prerequisites: "Hakuna. Wanafunzi ambao ni wapya kwa wasaidizi wa AI wanaweza kuanza na kozi \"Utangulizi wa AI na Uwezeshaji wa Kidijitali\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa kazi ambazo kikundi chako kinafanya kila mwezi", action: "kutambua zipi AI inaweza kusaidia kuandika rasimu na zipi zinahitaji watu", standard: "ukitaja angalau kazi tatu za AI na kazi ya kibinadamu ambayo AI inakupa muda wa kuifanya" },
    { id: "O2", condition: "Ukipewa kile kikundi chako kinachofanya", action: "kuandika dhamira ya sentensi moja na lengo moja linalopimika kwa msaada wa AI", standard: "vimehaririwa pamoja na timu yako ili vieleze nani, nini na kwa nini, na lengo liweze kuhesabiwa kufikia tarehe fulani" },
    { id: "O3", condition: "Ukipewa lengo la programu au tukio", action: "kutengeneza ratiba na orodha ya kazi kwa AI", standard: "ukiongeza kile AI ilichokosa na kuweka jina na tarehe kando ya kila kazi" },
    { id: "O4", condition: "Ukipewa kazi za wajitolea katika mpango wako", action: "kuandika maelezo mafupi ya majukumu ya wajitolea na hatua za usalama wanazohitaji", standard: "ukifuata sera ya shirika lako watoto au watu wazima walio hatarini wanapohusika, na bila kutumia majina halisi ndani ya AI" },
    { id: "O5", condition: "Ukipewa mradi unaohitaji pesa", action: "kupata nafasi moja ya ruzuku na kuandika rasimu ya muhtasari wa ruzuku wa sentensi tano kwa AI", standard: "kila ukweli ukilingana na kumbukumbu zako na sheria za mfadhili zikifuatwa" },
    { id: "O6", condition: "Unaposhiriki matokeo na kutumia AI kama kikundi", action: "kuandika habari kwa wafadhili na sheria tano rahisi za AI kwa kikundi chako", standard: "ukitumia hadithi tu kwa ruhusa ya maandishi na kuacha maamuzi kuhusu watu mikononi mwa watu" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuongoza na kupanga kwa AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "AI inaweza kufanya nini kwa kikundi cha jamii",
          minutes: 4,
          goal: "Orodhesha kazi tatu zinazochukua muda mwingi katika kikundi chako ambazo AI inaweza kusaidia.",
          text: [
            "Viongozi wa jamii wanatumia saa nyingi kuandika matangazo, barua pepe, kumbukumbu za mikutano, orodha za kujiandikisha na ripoti. Msaidizi wa AI wa bure kama ChatGPT, Microsoft Copilot au Google Gemini anaweza kuandika rasimu za hivi kwa dakika chache.",
            "AI ni hodari wa rasimu za kwanza, mihtasari, orodha za kukagua, ratiba, kugeuza tangazo kuwa maneno rahisi, na kutoa mawazo. Si hodari wa kuwajua majirani zako, kuamua jamii yako inahitaji nini hasa, wala kulinda hadithi za binafsi.",
            "Kiongozi mzuri anatumia AI kupata muda kwa kazi ya kibinadamu: kusikiliza, kujenga uaminifu na kuwepo."
          ],
          words: [["Shirika lisilo la faida (nonprofit)", "shirika linalotumikia dhamira badala ya kutafuta faida kwa wamiliki."], ["Rasimu", "toleo la kwanza utakaloliboresha."]],
          slides: [
            { title: "Viongozi wanatumia muda wapi", bullets: ["Matangazo, barua pepe na kumbukumbu za mikutano", "Orodha za kujiandikisha na ripoti"] },
            { title: "AI ni hodari wa", bullets: ["Rasimu za kwanza na mihtasari", "Orodha za kukagua na ratiba", "Kuandika upya kwa maneno rahisi na kutoa mawazo"] },
            { title: "AI si hodari wa", bullets: ["Kuwajua majirani zako", "Kuamua mahitaji halisi ya jamii", "Kulinda hadithi za binafsi"] }
          ],
          tryIt: "Andika kazi tatu zinazochukua muda mwingi zaidi kwa kikundi chako kila mwezi. Kando ya kila moja, andika jinsi AI inavyoweza kusaidia kwa rasimu ya kwanza.",
          youCanNow: "kutambua kazi katika kikundi chako ambazo AI inaweza kuharakisha, na zile zinazohitaji watu.",
          quickCheck: [
            { objective: "O1", q: "AI ni hodari wa kazi gani kwa kikundi cha jamii?", options: ["Kuandika rasimu ya kwanza ya kumbukumbu za mkutano", "Kuwajua majirani zako", "Kuamua jamii yako inahitaji nini", "Kulinda hadithi za binafsi"], answer: 0, why: "AI ni hodari wa rasimu na mihtasari; watu ndio wanaoijua jamii." },
            { objective: "O1", q: "AI inakuokolea saa tatu kwa wiki za makaratasi. Muda huo utumike vipi vizuri zaidi?", options: ["Makaratasi zaidi", "Kusikiliza familia na kujenga uaminifu", "Kuiacha AI iongee na familia kwa niaba yako", "Hakuna kitu"], answer: 1, why: "Viongozi wanatumia AI kupata muda kwa kazi ya kibinadamu kama kusikiliza na kuwepo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Dhamira iliyo wazi na lengo linalopimika",
          minutes: 5,
          goal: "Andika dhamira ya sentensi moja na lengo moja linalopimika kwa msaada wa AI.",
          text: [
            "Dhamira inasema kwa sentensi moja kwa nini kikundi chako kipo: unamhudumia nani, unafanya nini na kwa nini ni muhimu. Mfano: \"Tunahakikisha hakuna familia ya East Side inayolala na njaa kwa kuendesha benki ya chakula ya bure kila wiki.\"",
            "Lengo linasema utafikia nini na lini, kwa njia unayoweza kuhesabu. \"Kusaidia watu zaidi\" halipimiki. \"Kuhudumia familia 150 kwa mwezi kufikia Juni\" linapimika.",
            "Uliza AI: \"Hiki ndicho kikundi chetu kinachofanya: [eleza]. Andika dhamira tatu za sentensi moja kwa maneno rahisi, na malengo mawili yanayopimika kwa miezi sita ijayo.\" Kisha chagua na uhariri pamoja na timu yako ili maneno yasikike kama jamii yako."
          ],
          steps: ["Eleza unamhudumia nani, unafanya nini na kwa nini.", "Omba AI chaguo tatu za dhamira na malengo mawili yanayopimika.", "Chagua moja ya kila kitu pamoja na timu yako.", "Hariri ili isikike kama jamii yako."],
          words: [["Dhamira (mission)", "sentensi moja inayosema kwa nini kikundi chako kipo."], ["Lengo linalopimika", "lengo unaloweza kuhesabu na kukagua kufikia tarehe fulani."]],
          slides: [
            { title: "Dhamira: kwa nini mpo", bullets: ["Mnamhudumia nani", "Mnafanya nini", "Kwa nini ni muhimu"] },
            { title: "Lengo: mtafikia nini", bullets: ["Halipimiki: \"Kusaidia watu zaidi\"", "Linapimika: \"Kuhudumia familia 150 kwa mwezi kufikia Juni\""] },
            { title: "AI iandike rasimu, kisha amueni pamoja", bullets: ["Omba dhamira tatu na malengo mawili", "Chagua na uhariri pamoja na timu yako"] }
          ],
          tryIt: "Muulize msaidizi wa AI dhamira tatu na malengo mawili yanayopimika kwa kikundi chako. Chagua moja ya kila kitu na uvihariri kwa maneno yako mwenyewe.",
          youCanNow: "kuandika dhamira iliyo wazi na lengo linalopimika kwa kikundi chako.",
          quickCheck: [
            { objective: "O2", q: "Nini kinafanya lengo lipimike?", options: ["Linasikika la kutia moyo", "Ni refu sana", "Unaweza kulihesabu kufikia tarehe fulani", "Linatumia maneno makubwa"], answer: 2, why: "Lengo linalopimika linasema utafikia nini na lini, kwa njia unayoweza kuhesabu." },
            { objective: "O2", q: "Dhamira iliyoandikwa na AI inatumia maneno ambayo wanachama wako hawangeyasema kamwe. Unafanya nini?", options: ["Unaitumia hivyo hivyo", "Unaiomba AI ndefu zaidi", "Unaacha dhamira", "Unaihariri pamoja na timu yako ili isikike kama jamii yako"], answer: 3, why: "Dhamira inapaswa kusikika kama jamii yako, kwa hiyo mnaihariri pamoja." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kupanga programu au tukio kwa AI",
          minutes: 5,
          goal: "Tumia AI kutengeneza ratiba rahisi na orodha ya kazi kwa programu au tukio.",
          text: [
            "Ukishakuwa na lengo, panga kazi. AI inaweza kugeuza lengo kuwa ratiba (nini kinatokea lini) na orodha ya kazi (nani anafanya nini).",
            "Mfano wa prompt: \"Tunagawa vifaa vya shule kwa watoto 100 tarehe 10 Agosti kwenye kituo cha jamii. Tengeneza ratiba rahisi ya wiki 6 na orodha ya kazi yenye majukumu matatu ya wajitolea. Tumia sentensi fupi.\"",
            "Ipitie pamoja na timu yako. Ondoa hatua zisizofaa jamii yako, ongeza kile AI ilichokosa (kama vibali, tafsiri au usafiri kwa wazee), na uweke jina na tarehe kando ya kila kazi."
          ],
          steps: ["Ipe AI tukio, tarehe, mahali na idadi ya watu.", "Omba ratiba na orodha ya kazi.", "Ipitie pamoja na timu yako na uongeze kinachokosekana.", "Weka jina na tarehe kando ya kila kazi."],
          words: [["Ratiba", "orodha ya nini kinatokea lini, kwa mpangilio."], ["Orodha ya kazi", "orodha ya kazi pamoja na nani atafanya kila moja."]],
          slides: [
            { title: "Kutoka lengo hadi mpango", bullets: ["Ratiba: nini kinatokea lini", "Orodha ya kazi: nani anafanya nini"] },
            { title: "Mfano wa prompt", bullets: ["Kugawa vifaa vya shule, watoto 100, 10 Agosti", "Ratiba ya wiki 6 na orodha ya kazi", "Majukumu matatu ya wajitolea, sentensi fupi"] },
            { title: "Ufanye kuwa wako", bullets: ["Ondoa kisichofaa", "Ongeza kile AI ilichokosa: vibali, tafsiri, usafiri", "Jina na tarehe kwa kila kazi"] }
          ],
          tryIt: "Omba AI ratiba na orodha ya kazi kwa programu au tukio moja ambalo kikundi chako kinaweza kufanya. Ongeza kitu kimoja ambacho AI ilikosa na uweke jina kando ya kila kazi.",
          youCanNow: "kugeuza lengo kuwa ratiba na orodha ya kazi kwa msaada wa AI na timu yako.",
          quickCheck: [
            { objective: "O3", q: "Orodha ya kazi ni nini?", options: ["Orodha ya nani anafanya nini", "Orodha ya wafadhili", "Bajeti", "Dhamira"], answer: 0, why: "Orodha ya kazi inaonyesha kila kazi na nani ataifanya." },
            { objective: "O3", q: "Mpango wa AI wa sherehe ya kupika nje hautaji kibali cha kutumia bustani ya umma. Unafanya nini?", options: ["Unakiacha; AI inajua zaidi", "Unaongeza kukagua kibali kwenye orodha ya kazi pamoja na jina na tarehe", "Unaghairi sherehe", "Unaiomba AI ikiombe"], answer: 1, why: "Unaongeza kile AI ilichokosa, kama vibali, na kuipa kazi hiyo mhusika na tarehe." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuongoza na kupanga kwa AI",
        questions: [
          { objective: "O1", q: "AI ni hodari wa kazi ipi kwa kikundi cha jamii?", options: ["Kujua majirani zako wanahitaji nini", "Kuandika rasimu ya tangazo", "Kujenga uaminifu na familia", "Kulinda hadithi za binafsi"], answer: 1, why: "AI ni hodari wa rasimu za kwanza; watu wanafanya kazi ya mahusiano." },
          { objective: "O2", q: "Kipi ni dhamira?", options: ["\"Kuhudumia familia 150 kufikia Juni\"", "\"Mkutano Jumanne saa 12 jioni\"", "\"Tunahakikisha hakuna familia ya East Side inayolala na njaa kwa kuendesha benki ya chakula ya bure kila wiki.\"", "\"Kununua viti zaidi\""], answer: 2, why: "Dhamira inasema unamhudumia nani, unafanya nini na kwa nini." },
          { objective: "O2", q: "Lengo lipi linapimika?", options: ["\"Kusaidia watu zaidi\"", "\"Kufanya mema\"", "\"Kuwa bora\"", "\"Kuhudumia familia 150 kwa mwezi kufikia Juni\""], answer: 3, why: "Linaweza kuhesabiwa na kukaguliwa kufikia tarehe fulani." },
          { objective: "O3", q: "Mpango wa AI wa tukio ulisahau usafiri kwa wazee. Unafanya nini?", options: ["Unauongeza kwenye mpango", "Unafuata mpango wa AI kama ulivyo", "Unaghairi tukio", "Unaiomba AI iwaondoe wazee"], answer: 0, why: "Wewe unaijua jamii yako; ongeza kile AI ilichokosa." },
          { objective: "O3", q: "Nini kinapaswa kuwa kando ya kila kazi kwenye orodha yako?", options: ["Emoji", "Jina na tarehe", "Nywila", "Hakuna kitu"], answer: 1, why: "Majina na tarehe yanahakikisha kazi zinafanyika." }
        ]
      }
    },
    {
      name: "Sura 2: Watu, pesa na uaminifu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kupanga wajitolea, na kumweka kila mtu salama",
          minutes: 5,
          goal: "Andika maelezo yaliyo wazi ya majukumu ya wajitolea na hatua za usalama.",
          text: [
            "Wajitolea wanabaki wanapojua cha kufanya. AI inaweza kuandika maelezo mafupi ya majukumu: kazi ni nini, inachukua muda gani, ujuzi upi unasaidia na wamuulize nani msaada. Inaweza pia kuandika rasimu ya ujumbe wa kujiandikisha na jumbe fupi za kukumbusha.",
            "Kama programu yako inahudumia watoto au watu wazima walio hatarini, usalama unakuja kwanza. Desturi za kawaida ni pamoja na ukaguzi wa historia (background check) kwa wajitolea, sheria kwamba watu wazima wawili wawepo badala ya mtu mzima mmoja peke yake na mtoto, na sheria zilizo wazi za mawasiliano kwa simu na mitandao ya kijamii. Fuata sera ya shirika lako na sheria zozote za jimbo, na uulize kampuni yako ya bima au wakili kama huna uhakika.",
            "Weka taarifa za wajitolea na za wateja kwa siri. Usibandike majina, namba za simu au hadithi za binafsi ndani ya zana za AI; tumia majukumu na vishika-nafasi badala yake."
          ],
          steps: ["Omba AI maelezo mafupi ya jukumu kwa kila kazi ya wajitolea.", "Ongeza hatua za usalama kama watoto au watu wazima walio hatarini wanahusika.", "Fuata sera ya shirika lako na sheria za jimbo.", "Tumia vishika-nafasi, kamwe si majina au namba halisi, katika prompt za AI."],
          words: [["Ukaguzi wa historia (background check)", "ukaguzi wa kumbukumbu za mtu kabla hajafanya kazi na watoto au watu walio hatarini."], ["Sheria ya watu wazima wawili", "desturi ya kawaida ya usalama: angalau watu wazima wawili wanakuwepo na watoto, kamwe si mmoja peke yake."], ["Mtu mzima aliye hatarini", "mtu mzima anayeweza kuhitaji ulinzi wa ziada, kama baadhi ya wazee au watu wenye ulemavu."]],
          slides: [
            { title: "Majukumu wazi yanawabakiza wajitolea", bullets: ["Kazi ni nini na inachukua muda gani", "Ujuzi unaosaidia", "Wamuulize nani msaada"] },
            { title: "Usalama pamoja na watoto", bullets: ["Ukaguzi wa historia (background check)", "Watu wazima wawili wawepo, kamwe si mmoja peke yake", "Sheria za mawasiliano kwa simu na mitandao ya kijamii"] },
            { title: "Fuata sheria", bullets: ["Sera ya shirika lako", "Sheria za jimbo", "Uliza kampuni ya bima au wakili kama huna uhakika"] },
            { title: "Linda faragha", bullets: ["Hakuna majina au namba halisi ndani ya AI", "Tumia majukumu na vishika-nafasi"] }
          ],
          tryIt: "Omba AI iandike maelezo mafupi ya majukumu matatu ya wajitolea kwa mpango wako. Kama watoto wanahusika, ongeza hatua za usalama ambazo shirika lako linazitaka.",
          youCanNow: "kuandika majukumu ya wajitolea yaliyo wazi na kuweka hatua za usalama ambazo kikundi chako kinahitaji.",
          quickCheck: [
            { objective: "O4", q: "Maelezo ya jukumu la mjitolea yanapaswa kuwa na nini?", options: ["Anwani ya nyumbani ya mjitolea", "Jina la kazi tu", "Kazi ni nini, inachukua muda gani na wamuulize nani msaada", "Namba ya simu ya mjitolea"], answer: 2, why: "Majukumu yaliyo wazi yanasema cha kufanya, kwa muda gani na wamuulize nani." },
            { objective: "O4", q: "Unataka AI iandike rasimu ya ujumbe wa kukumbusha wajitolea. Unabandika nini?", options: ["Jina na namba ya simu ya kila mjitolea", "Matokeo ya ukaguzi wao wa historia", "Anwani zao za nyumbani", "Jukumu, tarehe na saa, ukitumia vishika-nafasi badala ya majina"], answer: 3, why: "Tumia majukumu na vishika-nafasi, kamwe si majina au namba halisi, katika prompt za AI." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kutafuta ruzuku na kuandika muhtasari wa ruzuku",
          minutes: 6,
          goal: "Pata nafasi moja ya ruzuku na uandike rasimu ya muhtasari wa mradi wako wa sentensi tano.",
          text: [
            "Ruzuku ni pesa zinazotolewa kwa kusudi fulani ambazo huzirudishi. Vyanzo vya karibu mara nyingi vinafaa zaidi kwa vikundi vidogo: mifuko ya jamii (community foundations), biashara za karibu, benki, vikundi vya imani na programu za jiji au kaunti. Maktaba yako inaweza kutoa msaada wa bure wa kutafuta ruzuku.",
            "Grants.gov ni tovuti ya serikali ya Marekani inayoorodhesha ruzuku za serikali kuu. Nyingi ni kwa mashirika, si kwa watu binafsi, na hakuna inayotoa msaada wa kifedha wa binafsi. Kuomba kupitia Grants.gov kunahitaji kusajili shirika lako, jambo linalochukua muda, kwa hiyo soma hatua za usajili kwenye Grants.gov na uanze mapema.",
            "AI inaweza kukusaidia kuandika muhtasari mfupi wa mradi: hitaji, utakachofanya, kinamsaidia nani, lengo lako linalopimika na kiasi unachoomba. Kila ukweli na kila namba lazima viwe vya kweli na vilingane na kumbukumbu zako. Soma sheria za mfadhili na utumie maswali yake, kikomo chake cha maneno na tarehe ya mwisho."
          ],
          steps: ["Uliza maktaba yako au mfuko wa jamii kuhusu ruzuku za karibu.", "Tafuta kwenye Grants.gov kama shirika lako liko tayari kwa ruzuku za serikali kuu.", "Omba AI muhtasari wa sentensi tano: hitaji, mpango, kinamsaidia nani, lengo, kiasi.", "Kagua kila ukweli na ufuate sheria za mfadhili."],
          words: [["Ruzuku (grant)", "pesa zinazotolewa kwa kusudi fulani ambazo huzirudishi."], ["Mfadhili (funder)", "kikundi au taasisi inayotoa ruzuku."], ["Mfuko wa jamii (community foundation)", "shirika la hisani la eneo lako linalotoa ruzuku kwa vikundi vya eneo hilo."]],
          sources: [{ name: "Grants.gov: Grant eligibility", url: "https://www.grants.gov/learn-grants/grant-eligibility" }],
          slides: [
            { title: "Vikundi vidogo vinapata ruzuku wapi", bullets: ["Mifuko ya jamii (community foundations)", "Biashara za karibu, benki, vikundi vya imani", "Programu za jiji au kaunti; uliza maktaba yako"] },
            { title: "Ruzuku za serikali kuu: Grants.gov", bullets: ["Nyingi ni kwa mashirika, si watu binafsi", "Usajili unachukua muda: anza mapema", "Soma hatua kwenye Grants.gov"] },
            { title: "Muhtasari wa sentensi tano", bullets: ["Hitaji na mpango wako", "Kinamsaidia nani na lengo lako", "Kiasi unachoomba"] },
            { title: "Kuwa mkweli", bullets: ["Kila ukweli lazima uwe wa kweli", "Fuata sheria za mfadhili na tarehe ya mwisho"] }
          ],
          tryIt: "Tafuta ruzuku moja ambayo kikundi chako kinaweza kuomba (ya karibu au kwenye Grants.gov). Omba AI iandike rasimu ya muhtasari wa mradi wako wa sentensi tano, kisha ukague kila ukweli.",
          youCanNow: "kupata nafasi ya ruzuku na kuandika rasimu ya muhtasari wa mradi ulio wa kweli.",
          quickCheck: [
            { objective: "O5", q: "Ruzuku ni nini?", options: ["Pesa kwa kusudi fulani ambazo huzirudishi", "Mkopo wenye riba ndogo", "Msaada wa chakula", "Fomu ya kodi"], answer: 0, why: "Ruzuku ni pesa zinazotolewa kwa kusudi fulani, hazirudishwi." },
            { objective: "O5", q: "Mfadhili anaruhusu maneno 100, na AI iliandika 180. Unafanya nini?", options: ["Unatuma maneno yote 180", "Unaufupisha ulingane na kikomo cha maneno 100 cha mfadhili", "Unaufanya maneno 200", "Unaacha muhtasari"], answer: 1, why: "Fuata sheria za mfadhili, pamoja na kikomo cha maneno." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuwapa wafadhili habari na kuweka sheria za AI kwa kikundi chako",
          minutes: 5,
          goal: "Andika habari kwa wafadhili na sheria tano rahisi za AI kwa kikundi chako.",
          text: [
            "Wafadhili wanatoa tena wanapoona matokeo. AI inaweza kugeuza namba zako kuwa habari fupi na ya upendo: \"Mwezi huu tulihudumia familia 142 na tukagawa mabegi ya shule 300. Asanteni!\" Shiriki hadithi tu kwa ruhusa ya maandishi, na ubadilishe majina kama mtu anataka.",
            "Kila kikundi kinachotumia AI kinapaswa kukubaliana sheria chache rahisi. Kwa mfano: 1) Kamwe tusiweke majina, anwani, namba za simu, taarifa za afya au za uhamiaji za watu tunaowahudumia ndani ya AI. 2) Mtu anasoma na kukagua kila kitu kabla hakijatoka. 3) Hatuiachi AI ifanye maamuzi kuhusu nani apate msaada. 4) Tunawaambia watu ujumbe ulipoandikwa zaidi na AI kama wakiuliza. 5) Tunatumia zana zilizoidhinishwa, za bure au zilizotolewa kama msaada tu.",
            "Andika sheria zenu, washirikishe wajitolea, na mzipitie mara moja kwa mwaka."
          ],
          steps: ["Omba AI igeuze matokeo yenu kuwa habari fupi ya shukrani.", "Tumia hadithi tu kwa ruhusa ya maandishi.", "Andikeni sheria tano za AI pamoja na timu yako.", "Washirikishe wajitolea sheria hizo na mzipitie kila mwaka."],
          words: [["Mfadhili (supporter)", "mtu anayetoa muda, pesa au msaada kwa kikundi chako."], ["Sera (policy)", "sheria zilizoandikwa ambazo kikundi chako kinakubali kuzifuata."]],
          slides: [
            { title: "Habari zinawabakiza wafadhili", bullets: ["Shiriki namba halisi", "Sema asante", "Hadithi tu kwa ruhusa ya maandishi"] },
            { title: "Sheria tano rahisi za AI", bullets: ["Hakuna taarifa za binafsi za tunaowahudumia", "Mtu anakagua kila kitu", "AI haiamui nani apate msaada"] },
            { title: "Ziweke sheria hai", bullets: ["Kuwa wazi kuhusu matumizi ya AI ukiulizwa", "Tumia zana zilizoidhinishwa", "Washirikishe wajitolea; pitieni kila mwaka"] }
          ],
          tryIt: "Kazi ya mwisho: viweke vyote pamoja katika mpango wa programu wa ukurasa mmoja: dhamira, lengo linalopimika, ratiba, majukumu matatu ya wajitolea pamoja na hatua za usalama, muhtasari wa ruzuku wa sentensi tano na sheria tano za AI za kikundi chako. Ondoa chochote cha binafsi kabla ya kushiriki.",
          youCanNow: "kuongoza mradi wa jamii kwa mpango ulio wazi na matumizi salama na ya kweli ya AI.",
          quickCheck: [
            { objective: "O6", q: "Ni lini unaweza kushiriki hadithi ya familia katika habari zenu?", options: ["Wakati wowote inaposaidia kuchangisha pesa", "Ukibadilisha neno moja", "Kwa ruhusa yao ya maandishi tu", "Kama hadithi ni fupi"], answer: 2, why: "Hadithi zinashirikiwa tu kwa ruhusa ya maandishi." },
            { objective: "O6", q: "Mjumbe wa bodi anapendekeza AI ichague familia zipi zipate msaada kwanza. Sheria yenu ya AI inasema nini?", options: ["Ndiyo, AI ni ya haki", "Ndiyo, kama ni haraka zaidi", "Siku zenye kazi nyingi tu", "Hapana; watu ndio wanaoamua nani apate msaada"], answer: 3, why: "AI haifanyi maamuzi kuhusu nani apate msaada; watu ndio wanaofanya." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Watu, pesa na uaminifu",
        questions: [
          { objective: "O4", q: "Programu yako inahudumia watoto. Ipi ni desturi ya kawaida ya usalama?", options: ["Mtu mzima mmoja peke yake na kila mtoto", "Wajitolea wanawatumia watoto ujumbe kwa siri", "Ukaguzi wa historia na watu wazima wawili kuwepo", "Hakuna sheria zinazohitajika"], answer: 2, why: "Ukaguzi wa historia na sheria ya watu wazima wawili ni kinga za kawaida; fuata sera ya shirika lako." },
          { objective: "O4", q: "Unaweza kubandika jina na hadithi ya mteja ndani ya AI kuandika ripoti?", options: ["Ndiyo, kila wakati", "Kama ni fupi tu", "Ndiyo, kama AI ni ya bure", "Hapana; tumia vishika-nafasi na uache taarifa za binafsi nje"], answer: 3, why: "Walinde watu unaowahudumia kwa kuacha taarifa zao nje ya zana za AI." },
          { objective: "O5", q: "Fedha nyingi kwenye Grants.gov ni kwa ajili ya:", options: ["Mashirika", "Bili za binafsi", "Kodi ya nyumba ya watu binafsi", "Kununua magari"], answer: 0, why: "Grants.gov inasema nafasi nyingi ni kwa mashirika, si kwa watu binafsi." },
          { objective: "O5", q: "AI iliandika kwamba kikundi chako kilihudumia familia 500, lakini kumbukumbu zako zinasema 312. Wewe:", options: ["Unaacha 500, inasikika vizuri zaidi", "Unaibadilisha kuwa 312", "Unaondoa namba zote", "Unaiomba AI namba kubwa zaidi"], answer: 1, why: "Kila ukweli katika ombi la ruzuku au habari lazima ulingane na kumbukumbu zako." },
          { objective: "O6", q: "Ipi ni sheria nzuri ya AI kwa kikundi cha jamii?", options: ["AI inaamua nani apate msaada", "Hakuna anayekagua maandishi ya AI", "Mtu anasoma na kukagua kila kitu kabla hakijatoka", "Bandika faili zote za wateja ndani ya AI"], answer: 2, why: "Mapitio ya mtu yanakiweka kikundi chako sahihi na cha kuaminika." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Uongozi wa Mashirika Yasiyo ya Faida",
    questions: [
      { objective: "O1", q: "Kazi ipi ni bora iachiwe watu, si AI?", options: ["Kujenga uaminifu na familia", "Kuandika rasimu ya tangazo", "Kutengeneza orodha ya kukagua", "Kufupisha kumbukumbu za mkutano"], answer: 0, why: "Mahusiano na uaminifu ni kazi ya kibinadamu." },
      { objective: "O1", q: "Kwa nini viongozi watumie AI kwa rasimu?", options: ["Kuibadilisha timu", "Kupata muda wa kusikiliza na kuwepo", "Kuepuka kukagua kazi", "Kukusanya taarifa za binafsi"], answer: 1, why: "AI inaokoa muda wa kuandika ili viongozi wazingatie watu." },
      { objective: "O2", q: "Dhamira inasema:", options: ["Saa ya mkutano", "Salio lako la benki", "Unamhudumia nani, unafanya nini na kwa nini", "Namba za simu za wajitolea wako"], answer: 2, why: "Hilo ndilo kusudi la dhamira." },
      { objective: "O2", q: "Lengo lipi unaweza kulipima?", options: ["\"Kuleta mabadiliko\"", "\"Kusaidia sana\"", "\"Kujulikana\"", "\"Kugawa mabegi ya shule 300 kufikia 10 Agosti\""], answer: 3, why: "Lina namba na tarehe." },
      { objective: "O2", q: "Baada ya AI kupendekeza dhamira, unapaswa:", options: ["Kuchagua na kuhariri pamoja na timu yako", "Kutumia ya kwanza bila kuisoma", "Kuchapisha zote tatu", "Kuipuuza timu yako"], answer: 0, why: "Timu yako inahakikisha inasikika kama jamii yako." },
      { objective: "O3", q: "Ratiba inaonyesha:", options: ["Nani alitoa msaada", "Nini kinatokea lini, kwa mpangilio", "Bajeti yako tu", "Anwani za wajitolea"], answer: 1, why: "Ratiba inapanga hatua kwa mpangilio." },
      { objective: "O3", q: "Ni taarifa gani unapaswa kuipa AI ili kupanga tukio?", options: ["Namba za simu za wajitolea", "Anwani za familia", "Tukio, tarehe, mahali na idadi ya watu", "Taarifa zako za kuingia benki"], answer: 2, why: "Taarifa hizo zinasaidia bila kushiriki taarifa za binafsi." },
      { objective: "O3", q: "Mpango wa AI unakosa tafsiri kwa familia zinazozungumza Kihispania. Wewe:", options: ["Unafuata AI kama ilivyo", "Unaghairi", "Unaziondoa familia hizo", "Unaongeza tafsiri kwenye mpango"], answer: 3, why: "Unaongeza kile jamii yako inachohitaji." },
      { objective: "O4", q: "Maelezo mazuri ya jukumu la mjitolea yanajumuisha:", options: ["Kazi ni nini, inachukua muda gani na wamuulize nani", "Namba ya Social Security ya mjitolea", "Hakuna kitu", "Jina la tukio tu"], answer: 0, why: "Majukumu yaliyo wazi yanawasaidia wajitolea kufanikiwa." },
      { objective: "O4", q: "Sheria ya watu wazima wawili inamaanisha:", options: ["Wajitolea wawili wanatumia simu moja", "Angalau watu wazima wawili wanakuwepo na watoto, kamwe si mmoja peke yake", "Watu wazima wawili wanasaini kila hundi", "Watu wazima wawili tu ndio wanaoweza kujitolea"], answer: 1, why: "Ni desturi ya kawaida inayowalinda watoto na wajitolea." },
      { objective: "O4", q: "Usipokuwa na uhakika kuhusu sheria za usalama za kufanya kazi na watoto, unapaswa:", options: ["Kubuni zako mwenyewe", "Kuziacha", "Kufuata sera ya shirika lako na sheria za jimbo, na kuuliza kampuni yako ya bima au wakili", "Kumuuliza rafiki wa mjitolea"], answer: 2, why: "Sera rasmi na wataalamu wanatoa jibu sahihi." },
      { objective: "O5", q: "Ruzuku ni:", options: ["Mkopo unaourudisha pamoja na riba", "Kadi ya mkopo", "Bili ya kodi", "Pesa kwa kusudi fulani ambazo huzirudishi"], answer: 3, why: "Ruzuku hazirudishwi." },
      { objective: "O5", q: "Ni mahali gani pa karibu ambapo vikundi vidogo mara nyingi vinapata ruzuku?", options: ["Mfuko wa jamii (community foundation)", "Tangazo linalojitokeza ghafla mtandaoni", "Mkopeshaji wa mikopo ya haraka ya riba kubwa", "Ujumbe kutoka kwa mtu usiyemjua"], answer: 0, why: "Mifuko ya jamii inatoa ruzuku kwa vikundi vya eneo lake." },
      { objective: "O5", q: "Kuhusu kujisajili kwa ruzuku za serikali kuu kwenye Grants.gov, ni busara:", options: ["Kusubiri hadi siku moja kabla ya tarehe ya mwisho", "Kuanza mapema, kwa sababu usajili unachukua muda", "Kuacha usajili", "Kumlipa mtu usiyemjua akufanyie"], answer: 1, why: "Usajili unachukua muda, kwa hiyo anza mapema." },
      { objective: "O5", q: "Muhtasari wa ruzuku wa sentensi tano unahusu:", options: ["Jina lako tu", "Namba za simu za wajitolea wako", "Hitaji, mpango, kinamsaidia nani, lengo na kiasi", "Orodha ya malalamiko"], answer: 2, why: "Sehemu hizo zinamwambia mfadhili anachohitaji kujua." },
      { objective: "O5", q: "Kabla ya kutuma muhtasari wa ruzuku ambao AI ilisaidia kuandika, wewe:", options: ["Unautuma bila kuusoma", "Unaongeza namba kubwa zaidi", "Unaondoa tarehe ya mwisho", "Unakagua kila ukweli na kufuata sheria za mfadhili"], answer: 3, why: "Ukweli na kufuata sheria vinakilinda kikundi chako." },
      { objective: "O6", q: "Unataka kushiriki hadithi ya familia katika jarida lenu. Unahitaji:", options: ["Ruhusa yao ya maandishi", "Hakuna kitu", "Ruhusa ya AI", "Maoni ya mjitolea tu"], answer: 0, why: "Hadithi zinashirikiwa tu kwa ruhusa." },
      { objective: "O6", q: "Ipi ni sheria nzuri ya AI?", options: ["Weka taarifa za uhamiaji ndani ya AI", "Kamwe usiweke majina, anwani au taarifa za afya za watu tunaowahudumia ndani ya AI", "Iache AI iamue nani apate chakula", "Kamwe usikague maandishi ya AI"], answer: 1, why: "Taarifa za binafsi zinabaki nje ya zana za AI." },
      { objective: "O6", q: "Je, AI inapaswa kuamua nani apate msaada kutoka kwa programu yako?", options: ["Ndiyo, kila wakati", "Ndiyo, kama ni ya bure", "Hapana; watu ndio wanaofanya maamuzi hayo", "Wikendi tu"], answer: 2, why: "Maamuzi kuhusu msaada wa watu yanahitaji busara ya kibinadamu na haki." },
      { objective: "O6", q: "Kikundi chako kinapaswa kupitia sheria zake za AI mara ngapi?", options: ["Kamwe", "Kila miaka kumi", "Baada ya tatizo tu", "Kama mara moja kwa mwaka"], answer: 3, why: "Zana zinabadilika, kwa hiyo pitieni sheria zenu mara kwa mara." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 5, 8, 9, 11, 14, 16, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Dhamira na lengo", objective: "O2", notYet: "Hakuna dhamira, au lengo haliwezi kuhesabiwa.", meets: "Dhamira ya sentensi moja yenye nani, nini na kwa nini, na lengo moja lenye namba na tarehe.", exceeds: "Imehaririwa pamoja na timu ili isikike kama jamii." },
      { name: "Ratiba", objective: "O3", notYet: "Hakuna ratiba, au kazi hazina majina wala tarehe.", meets: "Ratiba rahisi yenye jina na tarehe kando ya kila kazi.", exceeds: "Ina kitu ambacho AI ilikosa, kama vibali, tafsiri au usafiri." },
      { name: "Majukumu ya wajitolea na usalama", objective: "O4", notYet: "Majukumu chini ya matatu, au hakuna hatua za usalama watoto wanapohusika.", meets: "Majukumu matatu yaliyo wazi, pamoja na hatua za usalama za shirika inapohitajika.", exceeds: "Majukumu yanasema kazi inachukua muda gani na wamuulize nani msaada." },
      { name: "Muhtasari wa ruzuku", objective: "O5", notYet: "Sehemu zinakosekana, au ukweli haulingani na kumbukumbu.", meets: "Sentensi tano: hitaji, mpango, kinamsaidia nani, lengo na kiasi, vyote vimekaguliwa.", exceeds: "Unalingana na kikomo cha maneno na maswali ya mfadhili halisi." },
      { name: "Sheria za AI na faragha", objective: "O6", notYet: "Sheria chini ya tano, au taarifa za binafsi zimebaki katika mpango.", meets: "Sheria tano za AI zilizo wazi, na hakuna taarifa za binafsi katika mpango.", exceeds: "Sheria zinajumuisha mapitio ya kila mwaka na ziko tayari kushirikiwa na wajitolea." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Vikundi vinavyoweka sheria za AI zilizoandikwa ndani ya siku 30 (utafiti wa kufuatilia)",
      "Vikundi vinavyoomba angalau ruzuku moja ndani ya siku 90, na ruzuku zilizopatikana",
      "Vikundi vinavyoripoti wajitolea zaidi au watu zaidi waliohudumiwa baada ya kutumia mpango wao"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja, au kompyuta ya maktaba au ya ofisi",
      "Msaidizi wa AI wa bure: Microsoft Copilot, ChatGPT au Google Gemini",
      "Taarifa kuhusu programu halisi au ya mazoezi: inamhudumia nani, matokeo na kumbukumbu",
      "Karatasi au zana ya bure ya kuandika hati kwa mpango wa ukurasa mmoja",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Timu kutoka kikundi kimoja zifanye kazi pamoja ili mpango na sheria za AI ziwe za wote.",
      "Kagua kila prompt kuona kama ina majina, namba za simu, taarifa za afya au za uhamiaji za watu wanaohudumiwa.",
      "Kwa programu zenye watoto, elekeza kwenye sera ya usalama ya shirika lenyewe; kozi hii haichukui nafasi yake.",
      "Leta orodha ya mifuko ya jamii ya karibu na msaada wa ruzuku unaopatikana maktaba.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};

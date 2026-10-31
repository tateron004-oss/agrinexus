"use strict";

// Koach Learn course (Swahili translation of non-profits/nonprofit-intro-ai.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "nonprofit-intro-ai-sw",
  lang: "sw",
  translationOf: "nonprofit-intro-ai",
  category: "Non Profits",
  name: "Utangulizi wa AI kwa Mashirika Yasiyo ya Kiserikali",
  skills: "Kueleza AI kwa timu yako, Kuandika prompt zilizo wazi kwa kazi za shirika, Kuboresha rasimu, Kukagua ukweli, Kulinda faragha ya wafadhili na wateja",
  outcome: "kutumia msaidizi wa AI wa bure kuandika rasimu ya maandishi halisi ya shirika lako, kama ujumbe wa shukrani kwa wajitolea au tangazo la tukio: kuuliza kwa uwazi, kuboresha rasimu, kukagua kila ukweli, na kutoweka taarifa za wafadhili na wateja ndani yake.",
  about: [
    "Kozi hii ni kwa viongozi, wafanyakazi na wajitolea wa mashirika yasiyo ya kiserikali na ya kidini ambao wamesikia kuhusu AI lakini hawajaitumia sana, au wanaotaka kuitumia kwa usalama zaidi.",
    "Utajifunza msaidizi wa AI ni nini, jinsi ya kufungua mmoja bure, jinsi ya kuomba maandishi ambayo shirika lako linahitaji kila wiki, jinsi ya kuboresha na kukagua rasimu, na jinsi ya kuwalinda watu unaowahudumia.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Kuna jaribio fupi la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tumia msaidizi wa AI wa bure kuandika rasimu ya ujumbe wa shukrani kwa wajitolea waliosaidia katika tukio la hivi karibuni (ukusanyaji wa chakula, siku ya usafi au chakula cha jioni cha kanisa). Tumia prompt yenye sehemu tatu, omba maboresho mawili, kagua kila ukweli na tarehe kwa kumbukumbu zako mwenyewe, hakikisha hakuna taarifa binafsi za mjitolea au mfadhili katika prompt, na uhariri ujumbe wa mwisho ili usikike kama shirika lako.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Viongozi, wafanyakazi na wajitolea wa mashirika yasiyo ya kiserikali na ya kidini, mara nyingi katika mashirika madogo na makanisa, ambao wamesikia kuhusu AI lakini hawajaitumia sana, au wanaotaka kuitumia kwa usalama zaidi.",
    startingPoint: "Wanatumia barua pepe, simu na kompyuta kwa kazi za kila siku, na wanaandika wenyewe ujumbe wa shukrani, matangazo na majarida. Wanatumia kidogo au hawatumii kabisa wasaidizi wa AI.",
    gap: "Timu ndogo zinatumia saa nyingi kwenye maandishi ambayo msaidizi wa AI angeweza kuandika rasimu yake kwa dakika chache, lakini matumizi ya ovyo yanaweza kueneza namba za kubuni au kufichua taarifa za wafadhili, wajitolea na wateja. Wanafunzi wanahitaji njia salama na rahisi ya kutumia AI inayookoa muda na kulinda uaminifu.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Vifaa: simu, kompyuta ya ofisi au laptop ya pamoja ya ofisi ya kanisa",
      "Muda: wajitolea na wafanyakazi wana muda mfupi wa ziada, kwa hiyo kila somo ni kama dakika 5",
      "Faragha: hakuna taarifa binafsi za wafadhili, wajitolea au wateja katika zana za AI; fuata sera ya faragha ya shirika",
      "Tumia tu zana za AI ambazo shirika limeidhinisha kwa taarifa za kazi"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa orodha ya kazi za shirika", action: "kutambua kazi ambazo msaidizi wa AI anaweza kusaidia na zipi zinahitaji mtu au chanzo rasmi", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O2", condition: "Ukitumia simu au kompyuta", action: "kufungua msaidizi wa AI wa bure au ulioidhinishwa kutoka tovuti au app yake rasmi na kutoka (sign out) unapomaliza", standard: "bila msaada" },
    { id: "O3", condition: "Ukipewa maandishi halisi ya shirika ya kuandika", action: "kuandika prompt yenye sehemu tatu inayosema unachohitaji, hali ilivyo na muundo wa jibu", standard: "kwa kutumia vishika-nafasi badala ya taarifa binafsi" },
    { id: "O4", condition: "Ukipewa rasimu ya kwanza isiyofaa", action: "kuomba mabadiliko kwa maombi ya kufuatilia, moja baada ya jingine", standard: "hadi ilingane na sauti ya shirika lako, kwa majaribio yasiyozidi matatu" },
    { id: "O5", condition: "Ukipewa rasimu ya AI yenye namba, tarehe au madai", action: "kukagua kila ukweli kwa kumbukumbu zako au chanzo rasmi", standard: "kabla haijatumwa kwa wafadhili, wajitolea au umma" },
    { id: "O6", condition: "Unapotumia AI kwa kazi inayohusu wafadhili, wajitolea au wateja", action: "kuzuia taarifa binafsi zisiingie kwa kutumia vishika-nafasi", standard: "bila kutoa majina pamoja na michango, anwani, maelezo ya kesi, wala taarifa za afya au uhamiaji" }
  ],
  chapters: [
    {
      name: "Sura 1: AI inaweza kufanya nini kwa shirika",
      lessons: [
        {
          objectives: ["O1"],
          title: "Msaidizi wa AI ni nini, na si nini",
          minutes: 4,
          goal: "Mweleze mfanyakazi mwenzako au mjitolea kile msaidizi wa AI anachoweza na asichoweza kufanya kwa shirika lenu.",
          text: [
            "Msaidizi wa AI ni programu ya kompyuta unayozungumza nayo kwa maneno ya kawaida. Unaandika ombi, nayo inaandika jibu kwa sekunde chache. Wanaojulikana wenye matoleo ya bure ni pamoja na ChatGPT, Microsoft Copilot na Google Gemini.",
            "Kwa shirika, ni hodari wa rasimu za kwanza: ujumbe wa shukrani, makala za jarida, ujumbe wa kuwaalika wajitolea kujiandikisha, ajenda za mikutano, machapisho ya mitandao ya kijamii, na kufupisha ripoti ndefu.",
            "Si mfanyakazi, si wakili, si mhasibu wala si afisa wa ruzuku. Hawajui wafadhili wenu, programu zenu wala jamii yenu, na anaweza kukosea hata anaposikika kuwa na uhakika. Mtu katika timu yenu ndiye hukagua na kuamua kila wakati."
          ],
          words: [["AI", "kifupi cha artificial intelligence (akili bandia): programu za kompyuta zinazofanya kazi ambazo kwa kawaida zinahitaji mtu, kama kuandika au kufupisha."], ["Msaidizi wa AI", "programu ya AI unayozungumza nayo kwa kuandika au kuongea."], ["Rasimu ya kwanza", "toleo la mwanzo ambalo mtu analikagua na kuliboresha baadaye."]],
          slides: [
            { title: "Msaidizi wa AI ni...", bullets: ["Programu ya kompyuta unayozungumza nayo", "Unauliza kwa maneno ya kawaida", "Inaandika rasimu kwa sekunde chache"] },
            { title: "Ni hodari wa rasimu za kwanza za shirika", bullets: ["Ujumbe wa shukrani na majarida", "Ujumbe wa kuandikisha wajitolea na ajenda", "Muhtasari mfupi wa ripoti ndefu"] },
            { title: "SI", bullets: ["Wakili, mhasibu au afisa wa ruzuku", "Sahihi kila wakati, hata anaposikika na uhakika", "Mwenye kuamua: timu yenu ndiyo inaamua"] }
          ],
          tryIt: "Andika aina tatu za maandishi ambayo shirika lako linatoa kila mwezi (kwa mfano kikumbusho kwa wajitolea, shukrani kwa mfadhili na jarida). Zungushia duara ile inayochukua muda mwingi zaidi. Hiyo ndiyo kazi yako ya kwanza ya AI.",
          youCanNow: "kusema msaidizi wa AI ni nini, kutaja kazi tatu za shirika anazoweza kusaidia, na kusema kwa nini bado mtu anakagua kazi yake.",
          quickCheck: [
            { objective: "O1", q: "Msaidizi wa AI ni hodari wa nini kwa shirika?", options: ["Rasimu za kwanza kama ujumbe wa shukrani na makala za jarida", "Kuwajua wafadhili wenu binafsi", "Kufanya maamuzi ya mwisho kwa bodi yenu", "Kutoa ushauri wa kisheria unaoweza kuutegemea"], answer: 0, why: "AI ni hodari wa rasimu za kwanza; mtu katika timu yenu anakagua na kuamua." },
            { objective: "O1", q: "Mjitolea anasema, \"Tuiachie AI iamue nani apate masanduku ya chakula mwezi huu.\" Unasema nini?", options: ["Wazo zuri; AI inaijua jamii yetu", "Hapana; AI inaweza kuandika rasimu, lakini watu wa timu yetu ndio wanaamua", "Tu kama AI inasikika na uhakika", "Ndiyo, lakini kwa familia mpya tu"], answer: 1, why: "AI haijui jamii yenu na inaweza kukosea; timu yenu ndiyo inaamua." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kufungua msaidizi wa AI wa bure",
          minutes: 4,
          goal: "Fungua msaidizi wa AI wa bure kwenye simu au kompyuta na upate mahali pa kuandika.",
          text: [
            "Unaweza kutumia msaidizi wa AI kwenye simu janja au kompyuta yoyote yenye intaneti, ikiwemo kompyuta ya ofisi au laptop ya ofisi ya kanisa.",
            "Kwenye kompyuta, fungua kivinjari cha wavuti na uandike anwani: chatgpt.com, copilot.microsoft.com au gemini.google.com. Kwenye simu, sakinisha app rasmi kutoka duka la apps, iliyotengenezwa na kampuni halisi (OpenAI, Microsoft au Google).",
            "Kama shirika lako tayari linatumia Microsoft 365 au Google Workspace, muulize msimamizi wa mfumo ni zana gani ya AI imeidhinishwa. Akaunti ya kazi inaweza kuwa na kinga za ziada za faragha ambazo akaunti binafsi haina.",
            "Kwenye kompyuta ya pamoja ya ofisi, usikiruhusu kivinjari kuhifadhi nywila yako, na utoke (sign out) unapomaliza."
          ],
          steps: ["Uliza kama shirika lako lina zana ya AI iliyoidhinishwa.", "Kompyuta: andika anwani ya tovuti kwenye kivinjari. Simu: sakinisha app rasmi.", "Tafuta kisanduku cha ujumbe karibu na chini ya skrini.", "Kwenye kompyuta ya pamoja, toka (sign out) na ufunge kivinjari ukimaliza."],
          words: [["Kivinjari cha wavuti", "programu unayotumia kutembelea tovuti, kama Chrome, Edge au Safari."], ["Msimamizi wa mfumo", "mtu anayesimamia akaunti na mipangilio ya shirika lako."]],
          slides: [
            { title: "Mahali pa kuitumia", bullets: ["Kompyuta ya ofisi au ya nyumbani", "App ya simu kutoka duka rasmi", "Zana ya kazi iliyoidhinishwa na shirika lako"] },
            { title: "Anwani za tovuti", bullets: ["chatgpt.com", "copilot.microsoft.com", "gemini.google.com"] },
            { title: "Uliza kwanza", bullets: ["Shirika letu limeidhinisha zana gani ya AI?", "Akaunti za kazi zinaweza kulinda data vizuri zaidi"] },
            { title: "Kwenye kompyuta ya pamoja", bullets: ["Usihifadhi nywila yako", "Toka (sign out) na ufunge kivinjari"] }
          ],
          tryIt: "Fungua msaidizi mmoja wa AI wa bure. Andika: Mimi ni mjitolea katika shirika lisilo la kiserikali na ninajifunza kutumia AI. Ni njia gani tatu unazoweza kunisaidia wiki hii? Soma jibu.",
          youCanNow: "kufungua msaidizi wa AI wa bure, kupata mahali pa kuandika, na kuuliza ni zana gani shirika lako limeidhinisha.",
          quickCheck: [
            { objective: "O2", q: "Unapaswa kupata app ya AI kwenye simu kutoka wapi?", options: ["Kutoka kiungo katika ujumbe wa mtu usiyemjua", "Kutoka app yoyote yenye jina linalofanana", "Kutoka duka la apps, iliyotengenezwa na kampuni halisi", "Kutoka tangazo linalojitokeza ghafla"], answer: 2, why: "Sakinisha app rasmi iliyotengenezwa na kampuni halisi, kama OpenAI, Microsoft au Google." },
            { objective: "O2", q: "Umemaliza kutumia AI kwenye laptop ya ofisi ya kanisa. Unafanya nini?", options: ["Unaiacha wazi kwa mtu anayefuata", "Unahifadhi nywila yako kwenye kivinjari", "Unazima skrini tu", "Unatoka (sign out) na kufunga kivinjari"], answer: 3, why: "Kwenye kompyuta ya pamoja, usihifadhi nywila yako, na utoke unapomaliza." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuomba maandishi ya shirika kwa prompt iliyo wazi",
          minutes: 5,
          goal: "Andika prompt yenye sehemu tatu inayoleta rasimu yenye manufaa mara ya kwanza.",
          text: [
            "Unachoandika kinaitwa prompt. Prompt nzuri ina sehemu tatu: unachohitaji, hali ilivyo (bila taarifa binafsi), na jinsi unavyotaka jibu.",
            "Mfano: \"Andika barua pepe fupi ya shukrani kwa wajitolea 25 waliosaidia katika ukusanyaji wetu wa chakula wa Jumamosi. Tulihudumia familia 140. Tumia sauti ya upendo, chini ya maneno 120, na umalizie kwa tarehe ya ukusanyaji unaofuata: [tarehe].\"",
            "Prompt dhaifu kama \"barua ya shukrani\" inamfanya msaidizi akisie, kwa hiyo jibu linakuwa la jumla tu. Mwambie nani atasoma na sauti gani inafaa shirika lako: ya upendo, rasmi, ya furaha au ya kiimani."
          ],
          steps: ["Sema unachohitaji na nani atasoma.", "Ongeza hali ilivyo: tukio, namba, lengo. Bila majina wala taarifa binafsi.", "Sema jinsi unavyotaka: urefu, sauti, muundo.", "Tumia kishika-nafasi kama [tarehe] kwa chochote utakachojaza mwenyewe."],
          words: [["Prompt", "unachoandika au kusema kwa msaidizi wa AI kuomba kitu."], ["Sauti", "jinsi maandishi yanavyosikika, kama ya upendo, rasmi au ya furaha."], ["Kishika-nafasi", "alama kama [tarehe] ambayo utaibadilisha mwenyewe baadaye."]],
          slides: [
            { title: "Sehemu tatu za prompt nzuri", bullets: ["1. Unachohitaji na nani atasoma", "2. Hali ilivyo, bila taarifa binafsi", "3. Urefu, sauti na muundo"] },
            { title: "Dhaifu dhidi ya wazi", bullets: ["Dhaifu: \"barua ya shukrani\"", "Wazi: barua pepe ya shukrani kwa wajitolea 25 wa ukusanyaji wa chakula", "Familia 140 zilihudumiwa, sauti ya upendo, chini ya maneno 120"] },
            { title: "Tumia vishika-nafasi", bullets: ["[tarehe], [jina], [kiasi]", "Utavijaza mwenyewe baadaye"] }
          ],
          tryIt: "Chukua kazi uliyozungushia duara katika Somo la 1. Andika prompt yenye sehemu tatu kwa ajili yake, ukitumia vishika-nafasi kwa majina na tarehe, kisha uitume. Hifadhi jibu.",
          youCanNow: "kuandika prompt iliyo wazi yenye sehemu tatu kwa kazi ya maandishi ya shirika.",
          quickCheck: [
            { objective: "O3", q: "Prompt ni nini?", options: ["Unachoandika kwa msaidizi wa AI", "Jibu la AI", "Nywila yako", "Fomu ya ruzuku"], answer: 0, why: "Unachoandika kinaitwa prompt." },
            { objective: "O3", q: "Unahitaji tangazo la chakula cha jioni cha kanisa. Prompt ipi ni bora?", options: ["\"tangazo\"", "\"Andika tangazo la furaha la chakula chetu cha jioni cha kanisa tarehe [tarehe] saa 12 jioni (6 pm), bure kwa familia, chini ya maneno 60.\"", "\"Tengeneza kitu kizuri\"", "\"Chakula cha jioni\""], answer: 1, why: "Prompt nzuri inasema unachohitaji, hali ilivyo na muundo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: AI inaweza kufanya nini kwa shirika",
        questions: [
          { objective: "O1", q: "Kazi ipi inafaa kwa msaidizi wa AI katika shirika?", options: ["Kuandika rasimu ya barua pepe ya shukrani kwa wajitolea", "Kuamua familia ipi ipate chakula", "Kusaini mkataba wa ruzuku", "Kuidhinisha bajeti"], answer: 0, why: "AI ni hodari wa rasimu za kwanza; watu ndio wanaamua na kusaini." },
          { objective: "O1", q: "AI inakupa jibu lenye uhakika kuhusu tarehe ya mwisho ya ruzuku. Unafanya nini?", options: ["Unaliamini", "Unakagua ukurasa rasmi wa mfadhili", "Unaliweka kwenye mitandao ya kijamii", "Unalituma kwa bodi kama la mwisho"], answer: 1, why: "AI inaweza kukosea hata ikisikika na uhakika; kagua chanzo rasmi." },
          { objective: "O2", q: "Kabla ya kutumia AI kwa taarifa za kazi, unapaswa kumuuliza nani?", options: ["Mfadhili", "Mtu usiyemjua mtandaoni", "Msimamizi wa mfumo au kiongozi wa shirika lako", "Hakuna mtu"], answer: 2, why: "Huenda shirika lako lina zana iliyoidhinishwa yenye kinga bora za faragha." },
          { objective: "O3", q: "Prompt ipi iko wazi zaidi?", options: ["\"barua\"", "\"saidia na wajitolea\"", "\"fanya jarida letu\"", "\"Andika barua pepe ya shukrani ya upendo yenye maneno 100 kwa wajitolea 25 wa ukusanyaji wa chakula waliohudumia familia 140.\""], answer: 3, why: "Inasema nini, hali ilivyo na muundo." },
          { objective: "O3", q: "Kishika-nafasi katika prompt ni nini?", options: ["Alama kama [tarehe] unayoijaza baadaye", "Nywila", "Jina kamili la mfadhili", "Aina ya app"], answer: 0, why: "Vishika-nafasi vinazuia taarifa halisi zisiingie na vinakukumbusha cha kujaza." }
        ]
      }
    },
    {
      name: "Sura 2: Kutumia AI kwa usalama na kwa ustadi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuboresha rasimu",
          minutes: 4,
          goal: "Tumia maombi ya kufuatilia kugeuza rasimu ya kwanza kuwa inayofaa shirika lako.",
          text: [
            "Jibu la kwanza ni rasimu. Msaidizi anakumbuka mazungumzo, kwa hiyo unaweza kumwomba abadilishe mambo moja baada ya jingine.",
            "Maombi ya kufuatilia yenye manufaa: \"Ifupishe.\" \"Ifanye isikike ya upendo zaidi.\" \"Ongeza sentensi moja kuhusu kwa nini wajitolea ni muhimu kwa dhamira yetu.\" \"Iandike kwa kiwango cha kusoma cha darasa la 6.\" \"Nipe toleo la Kihispania.\"",
            "Kisha ifanye iwe yako. Ongeza majina halisi na maelezo wewe mwenyewe, baada ya kunakili maandishi nje ya zana ya AI, na uisome kana kwamba wewe ndiye mjitolea au mfadhili anayeipokea."
          ],
          steps: ["Soma rasimu ya kwanza.", "Chagua jambo moja linalohitaji kubadilika zaidi.", "Omba badiliko hilo.", "Rudia, kisha nakili maandishi nje na uongeze maelezo halisi mwenyewe."],
          words: [["Ombi la kufuatilia", "ombi la pili linalojenga juu ya jibu ulilokwisha kupata."], ["Kiwango cha kusoma", "jinsi maandishi yalivyo rahisi kusoma; darasa la chini ni rahisi zaidi."]],
          slides: [
            { title: "Jibu la kwanza ni rasimu", bullets: ["Omba badiliko moja kwa wakati", "Inakumbuka mazungumzo yaleyale"] },
            { title: "Maombi ya kufuatilia yanayofanya kazi", bullets: ["\"Ifupishe.\"", "\"Ifanye isikike ya upendo zaidi.\"", "\"Ongeza mstari mmoja kuhusu dhamira yetu.\"", "\"Nipe toleo la Kihispania.\""] },
            { title: "Ifanye iwe yako", bullets: ["Nakili maandishi nje ya zana ya AI", "Ongeza majina halisi na maelezo mwenyewe", "Isome kama mtu anayeipokea"] }
          ],
          tryIt: "Chukua rasimu uliyohifadhi kutoka Somo la 3. Omba mabadiliko mawili, moja baada ya jingine. Kisha nakili toleo bora kwenye hati na uongeze maelezo moja binafsi wewe mwenyewe.",
          youCanNow: "kuboresha rasimu ya AI kwa maombi ya kufuatilia yaliyo wazi na kuimaliza kwa sauti ya shirika lako.",
          quickCheck: [
            { objective: "O4", q: "Kwa nini unaweza kuomba mabadiliko moja baada ya jingine?", options: ["AI inasahau kila kitu baada ya kila ujumbe", "Mabadiliko yanagharimu pesa", "Msaidizi anakumbuka mazungumzo", "Badiliko moja tu linaruhusiwa kwa siku"], answer: 2, why: "Msaidizi anakumbuka mazungumzo, kwa hiyo unaweza kuomba mabadiliko moja baada ya jingine." },
            { objective: "O4", q: "Rasimu ni nzuri lakini wasomaji wako wengi wanazungumza Kihispania. Unaomba nini?", options: ["\"Iongeze urefu.\"", "\"Ongeza ukweli zaidi.\"", "\"Tumia maneno makubwa.\"", "\"Nipe toleo la Kihispania.\""], answer: 3, why: "Ombi la kufuatilia linaweza kuomba toleo katika lugha nyingine ambayo jamii yako inazungumza." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kukagua ukweli kabla ya kutuma",
          minutes: 5,
          goal: "Tafuta na ukague kila ukweli katika rasimu ya AI kabla haijatumwa kwa wafadhili, wajitolea au umma.",
          text: [
            "Wasaidizi wa AI wakati mwingine hubuni mambo: tarehe isiyo sahihi, takwimu isiyokuwepo, au sheria ya kodi iliyopitwa na wakati. Hii inaitwa hallucination (njozi ya AI).",
            "Kagua kila wakati namba, tarehe, majina, nukuu, takwimu, kauli za kodi na sheria, na chochote kuhusu mchango unalipia nini. Kagua kwa kumbukumbu zako mwenyewe, chanzo rasmi (mara nyingi ukurasa wa .gov), au mtu anayejua.",
            "Usiiruhusu AI kamwe kubuni namba za matokeo. Kama rasimu inasema \"tulihudumia familia 500\" na kumbukumbu zako zinasema 140, tumia 140. Namba za kweli zinalinda uaminifu wa wafadhili."
          ],
          steps: ["Wekea alama kila namba, tarehe, jina na dai katika rasimu.", "Kagua kila moja kwa kumbukumbu zako au chanzo rasmi.", "Rekebisha au ondoa chochote usichoweza kuthibitisha.", "Mwombe mtu wa pili asome chochote kinachoenda kwa umma."],
          words: [["Hallucination (njozi ya AI)", "AI inapoandika kitu kinachosikika kuwa kweli lakini kimebuniwa."], ["Namba ya matokeo", "hesabu ya kile programu yenu ilichofanikisha, kama familia zilizohudumiwa."]],
          slides: [
            { title: "AI inaweza kubuni mambo", bullets: ["Tarehe na namba zisizo sahihi", "Takwimu zisizokuwepo", "Sheria za zamani za kodi au za kisheria"] },
            { title: "Kagua kila wakati", bullets: ["Namba, tarehe, majina, nukuu", "Kauli za kodi na sheria", "Mchango unalipia nini"] },
            { title: "Namba za kweli", bullets: ["Tumia kumbukumbu zako mwenyewe", "Usiiruhusu AI kubuni namba za matokeo", "Msomaji wa pili kwa maandishi ya umma"] }
          ],
          tryIt: "Muulize msaidizi wa AI: \"Andika sentensi mbili kuhusu hitaji la benki za chakula katika kaunti yangu.\" Wekea alama kila namba inayotoa. Jaribu kupata kila moja kwenye tovuti rasmi. Ondoa yoyote usiyoweza kuthibitisha.",
          youCanNow: "kutambua ukweli katika rasimu ya AI na kuukagua kabla ya kutuma.",
          quickCheck: [
            { objective: "O5", q: "Hallucination katika AI ni nini?", options: ["Maandishi yanayosikika kuwa kweli lakini yamebuniwa", "Kosa la tahajia", "Jibu la polepole", "Jibu fupi sana"], answer: 0, why: "AI wakati mwingine hubuni tarehe, takwimu au sheria; hii inaitwa hallucination." },
            { objective: "O5", q: "Rasimu inasema mchango wa $25 \"unalisha familia kwa mwezi mmoja.\" Programu yenu haijawahi kusema hivyo. Unafanya nini?", options: ["Unaiacha; wafadhili wanaipenda", "Unaiondoa au kuibadilisha kwa ukweli kutoka kumbukumbu zako mwenyewe", "Unaibadilisha kuwa $20", "Unaiuliza AI kama ni kweli"], answer: 1, why: "Usiiruhusu AI kubuni mchango unalipia nini; kagua kumbukumbu zako mwenyewe." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kulinda faragha ya wafadhili, wajitolea na wateja",
          minutes: 5,
          goal: "Tumia AI bila kuweka ndani yake taarifa binafsi za wafadhili, wajitolea au watu mnaowahudumia.",
          text: [
            "Watu wanaliamini shirika lenu na taarifa zao. Usibandike kwenye zana ya AI: majina ya wafadhili pamoja na kiasi cha michango, anwani za nyumbani, namba za simu, taarifa za benki au kadi, maelezo ya kesi za wateja, taarifa za afya, hali ya uhamiaji au taarifa za watoto.",
            "Bado unaweza kupata msaada. Eleza hali kwa ujumla na utumie vishika-nafasi: \"Andika shukrani kwa [jina la mfadhili] kwa mchango wa [kiasi] kwa programu yetu ya vijana.\" Jaza taarifa halisi baada ya kunakili rasimu nje.",
            "Fuata sera ya faragha ya shirika lako, na muulize kiongozi kama huna uhakika. Ukiwa na shaka, usiweke."
          ],
          steps: ["Kabla ya kutuma prompt, isome uone kama ina majina au taarifa binafsi.", "Badilisha kila moja kwa kishika-nafasi.", "Ongeza taarifa halisi tu baada ya kunakili rasimu nje ya zana ya AI.", "Fuata sera ya faragha ya shirika lako."],
          words: [["Taarifa binafsi", "taarifa zinazoweza kumtambulisha mtu au kumdhuru zikitolewa, kama anwani au kiasi cha mchango."], ["Sera ya faragha", "kanuni zilizoandikwa za shirika lako za kushughulikia taarifa za watu."]],
          slides: [
            { title: "Usibandike kamwe kwenye AI", bullets: ["Majina ya wafadhili pamoja na kiasi cha michango", "Anwani, namba za simu, taarifa za benki", "Maelezo ya kesi za wateja, taarifa za afya au uhamiaji"] },
            { title: "Tumia vishika-nafasi badala yake", bullets: ["\"Mshukuru [jina la mfadhili] kwa [kiasi]\"", "Jaza taarifa halisi baada ya kunakili nje"] },
            { title: "Ukiwa na shaka", bullets: ["Usiweke", "Fuata sera yenu ya faragha", "Muulize kiongozi"] }
          ],
          tryIt: "Kazi ya mwisho: andika rasimu ya ujumbe wa shukrani kwa wajitolea wa tukio la hivi karibuni. Tumia prompt yenye sehemu tatu na vishika-nafasi, omba maboresho mawili, kagua kila ukweli kwa kumbukumbu zako, na uihariri isikike kama shirika lako.",
          youCanNow: "kutumia AI kwa maandishi halisi ya shirika huku ukilinda faragha ya watu mnaowahudumia.",
          quickCheck: [
            { objective: "O6", q: "Kipi ni salama kuweka katika prompt ya AI?", options: ["Jina la mfadhili na kiasi cha mchango wake", "Maelezo ya kesi ya mteja", "\"Mshukuru [jina la mfadhili] kwa mchango wa [kiasi] kwa programu yetu ya vijana.\"", "Shule na anwani ya mtoto"], answer: 2, why: "Vishika-nafasi vinakuwezesha kupata msaada bila kutoa taarifa binafsi." },
            { objective: "O6", q: "Huna uhakika kama hadithi ya mjitolea ni ya siri mno kubandika kwenye AI. Unafanya nini?", options: ["Unaibandika; AI ni ya siri", "Unabandika nusu tu", "Unaiweka kwanza kwenye mitandao ya kijamii", "Unaiacha nje na kumuuliza kiongozi"], answer: 3, why: "Ukiwa na shaka, usiweke, na muulize kiongozi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kutumia AI kwa usalama na kwa ustadi",
        questions: [
          { objective: "O4", q: "Rasimu ni rasmi mno kwa wajitolea wa kanisa lenu. Unafanya nini?", options: ["Unaituma hivyo hivyo", "Unaomba: \"Ifanye isikike ya upendo zaidi na ya kibinafsi zaidi\"", "Unafuta zana ya AI", "Unaomba toleo refu zaidi"], answer: 1, why: "Ombi la kufuatilia lililo wazi linaomba badiliko hasa unalohitaji." },
          { objective: "O5", q: "Rasimu ya AI inasema mlihudumia familia 500. Kumbukumbu zenu zinasema 140. Unatumia ipi?", options: ["500, inasikika vizuri zaidi", "Unaiacha namba isiwe wazi kwa makusudi", "140, kutoka kumbukumbu zenu", "Unaiomba AI ichague"], answer: 2, why: "Namba za kweli kutoka kumbukumbu zenu wenyewe zinalinda uaminifu wa wafadhili." },
          { objective: "O6", q: "Kipi kati ya hivi HUPASWI kubandika kwenye zana ya AI?", options: ["\"Ifupishe\"", "Jina la ukusanyaji wenu wa chakula", "Neno \"asante\"", "Maelezo ya kesi ya mteja"], answer: 3, why: "Maelezo ya kesi ni taarifa binafsi za watu mnaowahudumia." },
          { objective: "O6", q: "Unamshukuruje mfadhili fulani bila kuipa AI taarifa zake?", options: ["Tumia vishika-nafasi kama [jina la mfadhili] na [kiasi]", "Bandika kumbukumbu yake yote", "Tumia taarifa zake za benki", "Acha kumshukuru"], answer: 0, why: "Vishika-nafasi vinakupa rasimu; unaongeza taarifa halisi baadaye." },
          { objective: "O5", q: "Hallucination katika AI ni nini?", options: ["Mtindo wa usanifu", "Maandishi yanayosikika kuwa kweli lakini yamebuniwa", "Mpangilio wa faragha", "Intaneti ya polepole"], answer: 1, why: "AI inaweza kubuni ukweli unaosikika halisi, kwa hiyo unaukagua." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Utangulizi wa AI kwa Mashirika Yasiyo ya Kiserikali",
    questions: [
      { objective: "O1", q: "Msaidizi wa AI anaelezwa vizuri zaidi kama:", options: ["Mjitolea", "Hifadhidata ya ruzuku", "Programu ya kompyuta unayozungumza nayo kwa maneno ya kawaida", "Benki"], answer: 2, why: "Ni programu unayoiandikia au kuongea nayo inayoandika majibu." },
      { objective: "O1", q: "AI ni hodari zaidi wa kazi ipi ya shirika?", options: ["Kuchagua wateja gani wapate msaada", "Kusaini mikataba", "Kuidhinisha mishahara", "Kuandika rasimu ya kwanza ya jarida"], answer: 3, why: "Rasimu za kwanza ni nguvu yake; maamuzi yanabaki kwa watu." },
      { objective: "O1", q: "Nani hufanya maamuzi ya mwisho timu yenu inapotumia AI?", options: ["Watu katika timu yenu", "AI", "Kampuni ya programu", "Wafadhili"], answer: 0, why: "Mtu hukagua na kuamua kila wakati." },
      { objective: "O2", q: "Ipi ni anwani ya tovuti ya msaidizi wa AI wa bure?", options: ["donate-now.win", "gemini.google.com", "freegrants.xyz", "hakuna kati ya hizi"], answer: 1, why: "gemini.google.com ni anwani rasmi ya Google ya Gemini." },
      { objective: "O2", q: "Kwa nini uulize ni zana gani ya AI shirika lako limeidhinisha?", options: ["Kupata punguzo la bei ya kahawa", "Kwa sababu AI ni haramu", "Zana za kazi zilizoidhinishwa zinaweza kulinda data vizuri zaidi", "Haijalishi"], answer: 2, why: "Akaunti za kazi zinaweza kuja na kinga za ziada za faragha na kanuni." },
      { objective: "O2", q: "Kwenye kompyuta ya pamoja ya ofisi, baada ya kutumia AI unapaswa:", options: ["Kuhifadhi nywila yako", "Kuiacha wazi", "Kuandika nywila yako kwenye kikaratasi", "Kutoka (sign out) na kufunga kivinjari"], answer: 3, why: "Kutoka kunalinda akaunti yako." },
      { objective: "O3", q: "Prompt nzuri ina:", options: ["Unachohitaji, hali ilivyo na muundo", "Neno moja", "Taarifa za benki za mfadhili", "Nywila yako"], answer: 0, why: "Sehemu hizo tatu zinaleta rasimu yenye manufaa." },
      { objective: "O3", q: "Prompt ipi italeta kikumbusho bora kwa wajitolea?", options: ["\"kikumbusho\"", "\"Andika ujumbe wa kirafiki wa maneno 80 unaowakumbusha wajitolea kuhusu usafi wa bustani Jumamosi saa 3 asubuhi (9 am) na kuleta glavu.\"", "\"wajitolea\"", "\"msaada\""], answer: 1, why: "Inatoa hitaji, hali ilivyo na muundo." },
      { objective: "O3", q: "[tarehe] katika prompt inamaanisha nini?", options: ["Msimbo wa siri", "Siku ya kuzaliwa ya mfadhili", "Kishika-nafasi utakachojaza baadaye", "Kosa"], answer: 2, why: "Vishika-nafasi vinaonyesha taarifa utakazoongeza mwenyewe." },
      { objective: "O4", q: "Rasimu ya kwanza ni ndefu mno. Hatua bora inayofuata ni:", options: ["Kuanzisha shirika jipya", "Kuituma hivyo hivyo", "Kuongeza maneno zaidi", "Kuomba: \"Ifupishe\""], answer: 3, why: "Ombi la kufuatilia linaomba badiliko." },
      { objective: "O4", q: "Unapaswa kuongeza majina halisi ya wafadhili kwenye ujumbe wa shukrani lini?", options: ["Baada ya kunakili rasimu nje ya zana ya AI", "Katika prompt ya kwanza", "Usiwashukuru wafadhili kamwe", "Ndani ya mazungumzo ya AI tu"], answer: 0, why: "Kuyaongeza nje ya zana kunayaweka kuwa siri." },
      { objective: "O4", q: "Ombi lipi la kufuatilia linaweza kusaidia kufikia watu wengi zaidi wa jamii yako?", options: ["\"Ongeza nywila yangu.\"", "\"Nipe toleo la Kihispania.\"", "\"Buni takwimu.\"", "\"Futa mazungumzo.\""], answer: 1, why: "Toleo lililotafsiriwa linafikia wasomaji wengi zaidi; mzungumzaji fasaha bado anapaswa kulikagua." },
      { objective: "O5", q: "Unapaswa kukagua nini KILA WAKATI katika rasimu ya AI?", options: ["Neno la salamu", "Aina ya herufi", "Namba, tarehe na madai", "Hakuna kitu"], answer: 2, why: "Namba, tarehe na madai yanaweza kuwa yamebuniwa." },
      { objective: "O5", q: "Unakagua wapi kauli ya kodi au ya kisheria?", options: ["Mazungumzo mengine ya AI", "Maoni kwenye mitandao ya kijamii", "Unakisia", "Chanzo rasmi, mara nyingi ukurasa wa .gov, au mtaalamu"], answer: 3, why: "Vyanzo rasmi na wataalamu wanaaminika." },
      { objective: "O5", q: "Kwa nini namba za matokeo lazima zitoke kwenye kumbukumbu zenu?", options: ["Namba za kweli zinalinda uaminifu wa wafadhili", "Namba za AI daima ni ndogo mno", "Wafadhili hawazisomi", "Ni haraka zaidi"], answer: 0, why: "Namba za kubuni zinawapotosha wafadhili na kuharibu uaminifu." },
      { objective: "O5", q: "Nani anapaswa kusoma chochote kinachoenda kwa umma?", options: ["Hakuna mtu", "Mtu wa pili katika timu yenu", "AI tu", "Mtu yeyote usiyemjua"], answer: 1, why: "Msomaji wa pili anagundua makosa." },
      { objective: "O6", q: "Ipi ni taarifa binafsi unayopaswa kuiweka nje ya AI?", options: ["Jina la sherehe yenu ya kila mwaka", "Neno \"dhamira\"", "Anwani ya nyumbani ya mjitolea", "Anwani ya tovuti yenu ya umma"], answer: 2, why: "Anwani za nyumbani ni taarifa binafsi." },
      { objective: "O6", q: "Huna uhakika kama kitu ni cha siri mno kwa AI. Unapaswa:", options: ["Kukibandika hata hivyo", "Kukiweka mtandaoni", "Kukituma kwa barua pepe kwa kampuni ya AI", "Kukiacha nje na kumuuliza kiongozi"], answer: 3, why: "Ukiwa na shaka, usiweke." },
      { objective: "O6", q: "Ni kanuni zipi zilizoandikwa zinazoongoza jinsi shirika lako linavyoshughulikia taarifa za watu?", options: ["Sera ya faragha", "Orodha ya vyakula", "Agizo la fulana za wajitolea", "Ramani ya maegesho"], answer: 0, why: "Sera ya faragha inaweka kanuni za taarifa binafsi." },
      { objective: "O6", q: "Taarifa za afya au uhamiaji za mteja zinapaswa:", options: ["Kubandikwa ili kupata majibu bora", "Kuwekwa nje ya zana za AI", "Kutolewa katika majarida", "Kutumiwa kama mifano mtandaoni"], answer: 1, why: "Ni nyeti na zinaweza kumdhuru mtu zikitolewa." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 3, 6, 9, 12, 16]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Prompt yenye sehemu tatu", objective: "O3", notYet: "Prompt haiko wazi, kwa mfano \"ujumbe wa shukrani\".", meets: "Prompt inasema unachohitaji, hali ilivyo na muundo.", exceeds: "Pia inamtaja msomaji na sauti inayofaa shirika." },
      { name: "Maboresho mawili", objective: "O4", notYet: "Alitumia rasimu ya kwanza kama ilivyo.", meets: "Aliomba mabadiliko mawili, moja baada ya jingine, na ujumbe ukawa bora.", exceeds: "Anaweza kusema kila badiliko lilirekebisha nini." },
      { name: "Ukweli umekaguliwa", objective: "O5", notYet: "Namba, tarehe au dai lilitumika bila kukaguliwa.", meets: "Kila ukweli na tarehe vinalingana na kumbukumbu za shirika lenyewe.", exceeds: "Ameandika mahali kila ukweli ulipokaguliwa." },
      { name: "Faragha imelindwa", objective: "O6", notYet: "Prompt ina taarifa binafsi za mjitolea au mfadhili.", meets: "Hakuna taarifa binafsi katika prompt; vishika-nafasi vimetumika.", exceeds: "Majina halisi yaliongezwa tu baada ya kunakili rasimu nje ya zana ya AI." },
      { name: "Unasikika kama sisi", objective: "O4", notYet: "Ujumbe unasikika wa jumla au si kama shirika.", meets: "Umehaririwa ili usikike wa upendo na kama shirika.", exceeds: "Mtu wa pili katika timu aliusoma na akakubali." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoripoti kutumia AI kwa ujumbe halisi wa shirika ndani ya siku 30 (utafiti wa kufuatilia)",
      "Mashirika yanayoripoti muda uliookolewa kwenye ujumbe wa shukrani, matangazo au majarida",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya mashirika ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure, au ule ambao shirika lako limeidhinisha: ChatGPT, Microsoft Copilot au Google Gemini",
      "Kumbukumbu za shirika lako za tukio la hivi karibuni, kama idadi ya wajitolea na familia zilizohudumiwa",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Iendeshe kama warsha ya wafanyakazi au wajitolea: fanyeni jaribio la awali pamoja, kisha sura moja kwa kila kipindi.",
      "Muulize kiongozi wa shirika ni zana gani ya AI imeidhinishwa kabla ya kipindi.",
      "Tumia vishika-nafasi katika mazoezi yote; usibandike kamwe taarifa halisi za wafadhili, wajitolea au wateja.",
      "Hakikisha kila mwanafunzi ametoka (sign out) kwenye kompyuta za pamoja kabla hajaondoka.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};

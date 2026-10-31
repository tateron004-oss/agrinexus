"use strict";

// Koach Learn course (Swahili translation of underserved/underserved-leadership-future-skills.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "underserved-leadership-future-skills-sw",
  lang: "sw",
  translationOf: "underserved-leadership-future-skills",
  category: "Undeserved Community",
  name: "Uongozi, Kujiamini na Ujuzi wa Baadaye",
  skills: "Kuweka lengo lililo wazi, Kutatua matatizo hatua kwa hatua, Kuzungumza kwa kujiamini, Kutoa na kuomba maoni, Kuongoza mradi mdogo, Kupanga ujuzi wako unaofuata",
  outcome: "kupanga na kuongoza mradi mdogo wa jamii: kuweka lengo lililo wazi, kutatua matatizo hatua kwa hatua, kutoa hotuba ya dakika moja inayowavuta watu kusaidia, na kutumia msaidizi wa AI wa bure kama mwenzako wa mazoezi njiani.",
  about: [
    "Huhitaji cheo ili kuwa kiongozi. Ukipanga mambo ya familia yako, ukiwasaidia majirani, ukiendesha kamati ya kanisa au ukiwafundisha wafanyakazi wapya katika zamu yako, tayari wewe ni kiongozi.",
    "Kozi hii inajenga ujuzi unaowapa viongozi kujiamini: kuweka malengo yaliyo wazi, kutatua matatizo hatua kwa hatua, kuzungumza mbele ya watu, kutoa maoni, kuongoza mradi mdogo, na kuchagua ujuzi unaofuata wa kujifunza. Msaidizi wa AI wa bure ni mwenzako wa mazoezi: anakuuliza maswali, anasikiliza hotuba zako za mazoezi, na anakupa maoni.",
    "Kila somo linachukua kama dakika tano na linaisha na kazi ya \"Jaribu sasa\". Jaribio la maarifa linamaliza kila sura, na mtihani wa maswali 20 unamaliza kozi."
  ],
  finalTask: "Panga mradi mdogo wa jamii unaoweza kuufanya kweli, kama kubadilishana vitabu, kukusanya nguo au kusafisha bustani ya umma. Andika lengo moja lililo wazi, orodhesha matatizo mawili yanayoweza kutokea na jinsi ungeyatatua, na uandike hotuba ya dakika moja ukiwaomba watu watatu wakusaidie. Fanya mazoezi ya hotuba kwa sauti na msaidizi wa AI, omba maoni, na uiboreshe mara moja.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima na vijana katika jamii zisizohudumiwa vya kutosha ambao tayari wanaongoza bila cheo: wazazi, wajitolea wa kanisa na wa mtaa, wasimamizi wa zamu, na watu wanaotaka kuanzisha mradi wa jamii.",
    startingPoint: "Wanapanga familia, marafiki au wafanyakazi wenzao kwa njia za kila siku, lakini huenda hawajioni kama viongozi. Wengi huogopa kuzungumza mbele ya kikundi na hawajawahi kupanga mradi wenye malengo, kazi na tarehe.",
    gap: "Miradi ya jamii hukwama bila lengo lililo wazi, mpango wa kukabili matatizo na watu walio tayari kusaidia. Wanafunzi wanahitaji tabia rahisi za uongozi na ujasiri wa kuzungumza, na msaidizi wa AI wa bure anaweza kuwa mwenzako mvumilivu wa mazoezi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 6)",
      "Vifaa: simu janja au kompyuta ya maktaba",
      "Gharama: zana za bure na njia za bure za kujifunza tu",
      "Faragha: hakuna taarifa binafsi kuhusu watu unapoieleza AI tatizo",
      "Miradi lazima iwe midogo na inayowezekana kwa muda na msaada walionao wanafunzi"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukiwa na tamaa kwa ajili ya jamii yako au ujuzi unaotaka kukuza", action: "kuandika lengo lililo wazi lenye nini, kiasi gani na lini, na kuchagua hatua ya kwanza", standard: "unaloweza kulifanya kweli kwa muda na msaada ulionao" },
    { id: "O2", condition: "Ukipewa tatizo halisi nyumbani, kazini au katika kikundi", action: "kulitatua kwa hatua nne: kulitaja, kuorodhesha njia, kuchagua moja na kukagua ilivyokwenda", standard: "ukipima faida moja na hatari moja kwa angalau njia tatu" },
    { id: "O3", condition: "Ukiwa na lengo unalotaka watu wakusaidie", action: "kuandika na kufanya mazoezi ya hotuba ya dakika moja yenye mwito wa kuchukua hatua ulio wazi", standard: "ukiifanyia mazoezi kwa sauti na kuiboresha mara moja kwa maoni ya AI" },
    { id: "O4", condition: "Baada ya kufanya kazi na msaidizi, mfanyakazi mwenzako au mwanafamilia", action: "kutoa maoni ya upole na yenye manufaa na kuomba maoni wewe mwenyewe", standard: "ukitaja jambo moja lililokwenda vizuri, jambo moja la kujaribu wakati ujao, na shukrani" },
    { id: "O5", condition: "Ukipewa mradi mdogo wa jamii", action: "kuugawa katika kazi zenye mtu na tarehe kwa kila moja na kupanga kwa matatizo mawili", standard: "wasaidizi wakichagua kazi na kukiwa na kikao cha kufuatilia kila wiki" }
  ],
  chapters: [
    {
      name: "Sura 1: Kujiongoza mwenyewe",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuweka lengo lililo wazi",
          minutes: 5,
          goal: "Geuza tamaa kuwa lengo lililo wazi lenye nini, kiasi gani na lini.",
          text: [
            "Viongozi huanza na lengo lililo wazi. \"Kuwasaidia watoto wa mtaa wangu wasome zaidi\" ni tamaa. \"Kuendesha ubadilishanaji wa vitabu bure katika kituo cha jamii Jumamosi ya kwanza ya mwezi ujao na kutoa vitabu 50\" ni lengo.",
            "Lengo lililo wazi linasema utafanya nini, kiasi gani au wangapi, na lini. Liwe jambo unaloweza kulifanya kweli kwa muda na msaada ulionao.",
            "Msaidizi wa AI anaweza kukusaidia kunoa lengo. Uliza: \"Hii ndiyo tamaa yangu: ... Nisaidie kuigeuza kuwa lengo lililo wazi lenye nini, kiasi gani na lini. Niulize maswali kwanza.\""
          ],
          steps: ["Andika tamaa kwa ajili ya familia, kazi au jamii yako.", "Ongeza utafanya nini, kiasi gani, na lini.", "Iombe AI ikuulize maswali na ikusaidie kulinoa.", "Hakikisha ni jambo unaloweza kulifanya kweli."],
          words: [["Lengo", "jambo mahususi unalopanga kufanya kufikia wakati fulani."], ["Tarehe ya mwisho", "tarehe ambayo jambo lazima liwe limefanyika."]],
          slides: [
            { title: "Tamaa na lengo", bullets: ["Tamaa: \"Kuwasaidia watoto wasome zaidi\"", "Lengo: \"Kubadilishana vitabu, Jumamosi ya kwanza mwezi ujao, vitabu 50\""] },
            { title: "Lengo lililo wazi lina", bullets: ["Utafanya nini", "Kiasi gani au wangapi", "Lini"] },
            { title: "Tumia AI kulinoa", bullets: ["\"Niulize maswali kwanza\"", "Hakikisha unaweza kulifanya kweli"] }
          ],
          tryIt: "Andika tamaa moja kwa ajili ya jamii yako. Muombe msaidizi wa AI akuulize maswali na akusaidie kuigeuza kuwa lengo lililo wazi lenye nini, kiasi gani na lini.",
          youCanNow: "kugeuza tamaa kuwa lengo lililo wazi na linalowezekana.",
          quickCheck: [
            { objective: "O1", q: "Ni nini kinachogeuza tamaa kuwa lengo lililo wazi?", options: ["Kuongeza nini, kiasi gani na lini", "Kuirefusha", "Kuongeza majina ya watu zaidi", "Kuisema kwa sauti kubwa zaidi"], answer: 0, why: "Lengo lililo wazi linasema utafanya nini, kiasi gani na lini." },
            { objective: "O1", q: "Lengo lako ni kutoa vitabu 1,000 wiki ijayo, peke yako. Unafanya nini?", options: ["Ulibakize; malengo makubwa ndiyo bora", "Ulifanye kuwa jambo unaloweza kufanya kweli kwa muda na msaada wako", "Uachane na wazo hilo", "Uiombe AI ikufanyie"], answer: 1, why: "Lengo zuri ni jambo unaloweza kulifanya kweli kwa muda na msaada ulionao." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kutatua matatizo hatua kwa hatua",
          minutes: 5,
          goal: "Tumia hatua nne rahisi kushughulikia tatizo halisi.",
          text: [
            "Kila mpango hukutana na matatizo. Viongozi hutulia na kuyashughulikia kwa hatua: taja tatizo, orodhesha njia chache, chagua moja, kisha kagua ilivyokwenda.",
            "AI ni mwenzako mzuri wa kufikiri. Eleza tatizo bila taarifa binafsi na uulize: \"Nipe njia tatu za kutatua hili, na faida moja na hatari moja kwa kila njia.\" Kwa mfano: \"Ni watu wawili tu waliojiandikisha kusaidia ukusanyaji wetu wa nguo.\"",
            "Wewe ndiye unayechagua. Unawajua watu wako na jamii yako kuliko AI yoyote. Baada ya kujaribu njia moja, tazama nyuma: ilifanikiwa? Ungefanya nini tofauti?"
          ],
          steps: ["Taja tatizo kwa sentensi moja.", "Iombe AI njia tatu, kila moja na faida na hatari.", "Chagua njia inayofaa watu wako na hali yako.", "Ijaribu, kisha kagua ilivyokwenda."],
          words: [["Njia", "chaguo moja linalowezekana."], ["Hatari", "jambo linaloweza kwenda vibaya."]],
          slides: [
            { title: "Hatua nne", bullets: ["1. Taja tatizo", "2. Orodhesha njia", "3. Chagua moja", "4. Kagua ilivyokwenda"] },
            { title: "AI kama mwenzako wa kufikiri", bullets: ["\"Nipe njia tatu\"", "\"Faida moja na hatari moja kwa kila njia\""] },
            { title: "Wewe ndiye unayechagua", bullets: ["Unawajua watu wako vizuri zaidi", "Tazama nyuma: ungebadilisha nini?"] }
          ],
          tryIt: "Chagua tatizo halisi kutoka nyumbani, kazini au kikundini kwako. Muombe msaidizi wa AI njia tatu zenye faida na hatari kwa kila moja. Chagua moja na uandike kwa nini.",
          youCanNow: "kushughulikia tatizo kwa hatua nne ukitumia AI kama mwenzako wa kufikiri.",
          quickCheck: [
            { objective: "O2", q: "Hatua ya mwisho ya kutatua tatizo hatua kwa hatua ni ipi?", options: ["Kutaja tatizo", "Kuorodhesha njia", "Kukagua ilivyokwenda", "Kumlaumu mtu"], answer: 2, why: "Baada ya kujaribu njia, unatazama nyuma kuona kama ilifanikiwa na nini cha kubadilisha." },
            { objective: "O2", q: "Ni watu wawili tu waliojiandikisha kwa ukusanyaji wako wa nguo. Unaiuliza AI nini?", options: ["\"Rekebisha.\"", "\"Watu wavivu ni akina nani?\"", "\"Sitisha ukusanyaji.\"", "\"Nipe njia tatu, kila moja na faida na hatari.\""], answer: 3, why: "Kuomba njia zenye faida na hatari kunakusaidia kuchagua kwa busara." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuzungumza kwa kujiamini",
          minutes: 5,
          goal: "Panga na ufanye mazoezi ya hotuba fupi inayowaomba watu kuchukua hatua.",
          text: [
            "Kujiamini hukua kwa mazoezi. Hotuba fupi ni rahisi zaidi ikiwa na mpangilio rahisi: kwa nini ni muhimu, unataka kufanya nini, na unawaomba watu wafanye nini.",
            "Andika hotuba ya dakika moja (kama maneno 120 hadi 150). Kisha ifanyie mazoezi kwa sauti. Unaweza kuiandika kwa msaidizi wa AI na kuuliza: \"Je, hii iko wazi na ya kirafiki? Nipe njia mbili za kuiimarisha. Iwe chini ya dakika moja.\"",
            "Wasiwasi ni jambo la kawaida. Pumua polepole, watazame watu wachache wenye nyuso za kirafiki, na uongee polepole kidogo kuliko unavyodhani inahitajika. Kufanya mazoezi mbele ya kioo au mbele ya rafiki mmoja pia husaidia."
          ],
          steps: ["Andika kwa nini ni muhimu, unataka kufanya nini, na unaomba nini.", "Iwe kama dakika moja.", "Iombe AI njia mbili za kuiimarisha.", "Ifanyie mazoezi kwa sauti mara tatu, polepole."],
          words: [["Mwito wa kuchukua hatua", "sehemu ya hotuba inayowaambia watu hasa unachotaka wafanye."]],
          slides: [
            { title: "Mpangilio rahisi wa hotuba", bullets: ["Kwa nini ni muhimu", "Unataka kufanya nini", "Unawaomba watu wafanye nini"] },
            { title: "Fanya mazoezi na AI", bullets: ["Kama dakika moja, maneno 120-150", "\"Nipe njia mbili za kuiimarisha\""] },
            { title: "Kukabili wasiwasi", bullets: ["Pumua polepole", "Tafuta nyuso za kirafiki", "Ongea polepole kidogo"] }
          ],
          tryIt: "Andika hotuba ya dakika moja kuhusu lengo lako kutoka Somo la 1. Muombe msaidizi wa AI njia mbili za kuiimarisha, kisha ifanyie mazoezi kwa sauti mara tatu.",
          youCanNow: "kupanga na kufanya mazoezi ya hotuba fupi yenye mwito wa kuchukua hatua ulio wazi.",
          quickCheck: [
            { objective: "O3", q: "Mpangilio rahisi wa hotuba fupi ni upi?", options: ["Kwa nini ni muhimu, unataka kufanya nini, na ombi lako", "Hadithi ndefu, mzaha na kuaga", "Ukweli na namba tu", "Historia ya maisha yako"], answer: 0, why: "Mpangilio huu unafanya hotuba iwe fupi na unawaambia watu wafanye nini." },
            { objective: "O3", q: "Mikono yako inatetemeka kabla ya hotuba yako. Nini husaidia?", options: ["Kuacha hotuba", "Kupumua polepole na kuongea polepole kidogo", "Kuongea haraka uwezavyo", "Kusoma bila kuinua macho"], answer: 1, why: "Kupumua polepole na kuongea polepole husaidia kutuliza wasiwasi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kujiongoza mwenyewe",
        questions: [
          { objective: "O1", q: "Lipi ni lengo lililo wazi?", options: ["\"Kuwasaidia watu zaidi\"", "\"Kuwa jirani bora\"", "\"Kuendesha ubadilishanaji wa vitabu Jumamosi ya kwanza mwezi ujao na kutoa vitabu 50\"", "\"Kufanya mambo mazuri\""], answer: 2, why: "Linasema nini, wangapi na lini." },
          { objective: "O1", q: "Lengo lililo wazi lina sehemu gani tatu?", options: ["Nini, kiasi gani, na lini", "Nani, kwa nini, na wapi", "Jina, nembo, na kauli mbiu", "Bajeti, benki na mkopo"], answer: 0, why: "Sehemu hizo zinafanya lengo liwe wazi na linaloweza kukaguliwa." },
          { objective: "O2", q: "Hatua ya kwanza ya kutatua tatizo ni ipi?", options: ["Kuchagua njia yoyote", "Kumlaumu mtu", "Kukata tamaa", "Kutaja tatizo kwa sentensi moja"], answer: 3, why: "Huwezi kutatua tatizo ambalo hujalitaja." },
          { objective: "O2", q: "AI inapendekeza njia tatu. Nani anachagua?", options: ["AI", "Wewe, kwa sababu unawajua watu wako na jamii yako", "Hakuna mtu", "Mtu wa kwanza anayejibu"], answer: 1, why: "AI ni mwenzako wa kufikiri; wewe ndiye unayeamua." },
          { objective: "O3", q: "Mwito wa kuchukua hatua ni nini?", options: ["Simu", "Namba ya dharura", "Sehemu ya hotuba inayowaambia watu unachotaka wafanye", "Mlio wa simu"], answer: 2, why: "Unawageuza wasikilizaji kuwa wasaidizi." }
        ]
      }
    },
    {
      name: "Sura 2: Kuwaongoza wengine na kukua",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kutoa na kuomba maoni",
          minutes: 5,
          goal: "Toa maoni ya upole na yenye manufaa, na uyaombe.",
          text: [
            "Maoni ni taarifa inayomsaidia mtu kufanya vizuri zaidi. Viongozi wazuri huyatoa kwa upole na huyaomba mara kwa mara.",
            "Njia rahisi ya kutoa maoni: sema jambo moja lililokwenda vizuri, jambo moja la kujaribu wakati ujao, na umshukuru. Kwa mfano: \"Ulipanga meza haraka. Wakati ujao, tuweke karatasi ya kujiandikisha karibu na mlango. Asante kwa kuja mapema.\"",
            "Omba maoni pia: \"Ni jambo gani moja ninaloweza kufanya vizuri zaidi katika mkutano wetu ujao?\" Unaweza kufanya mazoezi na AI: eleza hali fulani na uiombe ikusaidie kupanga maneno ya maoni yaliyo ya upole na wazi."
          ],
          steps: ["Sema jambo moja lililokwenda vizuri.", "Sema jambo moja la kujaribu wakati ujao.", "Mshukuru mtu huyo.", "Waulize wengine: \"Ni jambo gani moja ninaloweza kufanya vizuri zaidi?\""],
          words: [["Maoni", "taarifa inayomsaidia mtu kuona kilichokwenda vizuri na cha kuboresha."]],
          slides: [
            { title: "Maoni huwasaidia watu kukua", bullets: ["Yatoe kwa upole", "Yaombe mara kwa mara"] },
            { title: "Mpangilio rahisi", bullets: ["Jambo moja lililokwenda vizuri", "Jambo moja la kujaribu wakati ujao", "Asante"] },
            { title: "Yaombe", bullets: ["\"Ni jambo gani moja ninaloweza kufanya vizuri zaidi?\"", "Sikiliza bila kubishana"] }
          ],
          tryIt: "Mfikirie msaidizi, mfanyakazi mwenzako au mwanafamilia. Muombe msaidizi wa AI akusaidie kupanga maneno ya maoni ya upole yenye jambo moja lililokwenda vizuri na jambo moja la kujaribu wakati ujao. Yaseme kwa sauti.",
          youCanNow: "kutoa maoni ya upole na yenye manufaa, na kuyaomba.",
          quickCheck: [
            { objective: "O4", q: "Sehemu ya mwisho ya mpangilio wa maoni katika kozi hii ni ipi?", options: ["Onyo", "Orodha ya makosa", "Shukrani", "Alama"], answer: 2, why: "Maoni ya upole huishia kwa kumshukuru mtu." },
            { objective: "O4", q: "Unataka kuwa hodari zaidi wa kuendesha mikutano. Unakiuliza kikundi chako nini?", options: ["\"Je, nilikuwa mkamilifu?\"", "Hakuna; viongozi hawaulizi", "\"Nani alilalamika?\"", "\"Ni jambo gani moja ninaloweza kufanya vizuri zaidi katika mkutano wetu ujao?\""], answer: 3, why: "Viongozi wazuri huomba maoni mara kwa mara, kwa swali lililo wazi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuongoza mradi mdogo",
          minutes: 5,
          goal: "Gawa mradi katika kazi, mpe kila kazi mtu na tarehe, na upange kwa matatizo.",
          text: [
            "Mradi ni lengo lenye mwanzo na mwisho. Ili kuuongoza, ugawe katika kazi ndogo, mpe kila kazi mtu na tarehe, na ufuatilie.",
            "Iulize AI: \"Ninaendesha ukusanyaji wa nguo katika kanisa letu baada ya wiki nne. Ugawe katika kazi na wiki inayopendekezwa kwa kila moja. Orodhesha matatizo mawili yanayoweza kutokea na jinsi ya kuyashughulikia.\"",
            "Washirikishe wasaidizi wako orodha ya kazi. Waache watu wachague kazi wanazopenda. Fuatilia kila wiki, washukuru watu mara kwa mara, na sherehekeeni mnapomaliza."
          ],
          steps: ["Andika lengo la mradi wako.", "Iombe AI iugawe katika kazi zenye tarehe na iorodheshe matatizo yanayoweza kutokea.", "Mpe kila kazi mtu; waache watu wachague.", "Fuatilia kila wiki na msherehekee mwishoni."],
          words: [["Mradi", "kazi yenye lengo, mwanzo na mwisho."], ["Kazi", "jukumu moja dogo ambalo ni sehemu ya mradi."]],
          slides: [
            { title: "Mradi una mwanzo na mwisho", bullets: ["Ugawe katika kazi", "Kila kazi: mtu na tarehe"] },
            { title: "Iombe AI isaidie kupanga", bullets: ["Kazi na wiki zinazopendekezwa", "Matatizo mawili na jinsi ya kuyashughulikia"] },
            { title: "Iongoze timu", bullets: ["Waache watu wachague kazi", "Fuatilia kila wiki", "Washukuru watu na msherehekee"] }
          ],
          tryIt: "Tumia lengo lako kutoka Somo la 1. Muombe msaidizi wa AI aligawe katika kazi zenye tarehe na aorodheshe matatizo mawili yanayoweza kutokea, na mpango kwa kila moja.",
          youCanNow: "kupanga mradi mdogo wenye kazi, watu, tarehe na mipango ya akiba.",
          quickCheck: [
            { objective: "O5", q: "Kila kazi katika mradi inapaswa kuwa na nini?", options: ["Mtu na tarehe", "Bajeti ya $100", "Maelezo marefu", "AI ya kuifanya"], answer: 0, why: "Mtu na tarehe vinaonyesha wazi nani anafanya nini na lini." },
            { objective: "O5", q: "Msaidizi hajamaliza kazi yake kufikia tarehe. Unafanya nini kwanza?", options: ["Kumwondoa kwenye kikundi", "Kumfuatilia kwa upole na kumuuliza anahitaji msaada gani", "Kuifanya mwenyewe bila kumwambia", "Kuandika kuhusu jambo hilo mtandaoni"], answer: 1, why: "Viongozi hufuatilia na kuwasaidia wasaidizi ili waendelee kushiriki." }
          ]
        },
        {
          objectives: ["O1"],
          title: "Kupanga ujuzi wako unaofuata",
          minutes: 5,
          goal: "Chagua ujuzi mmoja wa baadaye wa kujifunza na hatua ya kwanza ya kuuanza.",
          text: [
            "Ulimwengu wa kazi unaendelea kubadilika. Ujuzi unaomsaidia karibu kila mtu ni pamoja na kutumia zana za kidijitali, kutumia AI vizuri na kwa usalama, kuwasiliana kwa uwazi, kufanya kazi katika timu, na kutatua matatizo.",
            "Iulize AI: \"Hiki ndicho ninachofanya sasa na ninachokipenda. Nipendekezee ujuzi mitatu utakaonisaidia kukua, na njia moja ya bure ya kuanza kila mmoja.\" Kisha kagua njia hizo za bure wewe mwenyewe, kwa mfano kwenye maktaba ya umma au kwenye American Job Center (kituo cha ajira cha serikali ya Marekani).",
            "Chagua ujuzi mmoja na hatua moja ya kwanza unayoweza kuifanya wiki hii. Viongozi huendelea kujifunza, na huwashirikisha wengine."
          ],
          steps: ["Iambie AI unachofanya sasa na unachokipenda.", "Omba ujuzi mitatu wa kukua na njia moja ya bure ya kuanza kila mmoja.", "Kagua njia hizo za bure wewe mwenyewe.", "Chagua ujuzi mmoja na hatua moja ya kwanza kwa wiki hii."],
          words: [["Ujuzi wa baadaye", "ujuzi utakaokuwa muhimu zaidi kadiri kazi na teknolojia zinavyobadilika."]],
          slides: [
            { title: "Ujuzi unaomsaidia karibu kila mtu", bullets: ["Zana za kidijitali na AI, kwa usalama", "Mawasiliano wazi na kazi ya timu", "Kutatua matatizo"] },
            { title: "Iombe AI mawazo", bullets: ["Eleza unachofanya na unachopenda", "Ujuzi mitatu na njia ya bure ya kuanza kila mmoja"] },
            { title: "Chukua hatua ya kwanza", bullets: ["Kagua njia za bure: maktaba, kituo cha ajira", "Chagua ujuzi mmoja, hatua moja wiki hii"] }
          ],
          tryIt: "Kazi ya mwisho: panga mradi mdogo wa jamii wenye lengo moja lililo wazi, matatizo mawili yanayoweza kutokea na jinsi ungeyatatua, na hotuba ya dakika moja ukiwaomba watu watatu wakusaidie. Fanya mazoezi ya hotuba na msaidizi wa AI, pata maoni, na uiboreshe mara moja.",
          youCanNow: "kuongoza mradi mdogo kwa kujiamini na kuendelea kukuza ujuzi wako.",
          quickCheck: [
            { objective: "O1", q: "Upi ni ujuzi wa baadaye unaomsaidia karibu kila mtu?", options: ["Kukariri namba za simu", "Kutumia mashine ya faksi", "Kuwasiliana kwa uwazi", "Kuandika kwa mwandiko wa kuunganisha herufi"], answer: 2, why: "Mawasiliano wazi husaidia karibu katika kila kazi na nafasi ya jamii." },
            { objective: "O1", q: "AI inapendekeza darasa la bure la mtandaoni kwa ujuzi wako unaofuata. Unafanya nini?", options: ["Kujiandikisha na kulipa mara moja", "Kulipuuza", "Kutoa namba yako ya benki ili kujiandikisha", "Kulikagua wewe mwenyewe, kwa mfano kupitia maktaba yako au kituo cha ajira"], answer: 3, why: "Unakagua njia za bure wewe mwenyewe kabla ya kujiandikisha." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuwaongoza wengine na kukua",
        questions: [
          { objective: "O4", q: "Yapi ni maoni ya upole na yenye manufaa?", options: ["\"Hiyo ilikuwa mbaya.\"", "\"Ulipanga haraka. Wakati ujao, weka karatasi ya kujiandikisha karibu na mlango. Asante.\"", "Kunyamaza", "\"Kila mtu mwingine alifanya vizuri zaidi.\""], answer: 1, why: "Yanataja uwezo, hatua inayofuata, na yanasema asante." },
          { objective: "O4", q: "Mtu anakupa maoni. Jibu bora ni:", options: ["Kubishana", "Kuyapuuza", "Kukasirika", "Kusikiliza na kumshukuru"], answer: 3, why: "Kusikiliza kunakusaidia kukua." },
          { objective: "O5", q: "Kazi ni nini?", options: ["Jukumu moja dogo ambalo ni sehemu ya mradi", "Mradi mzima", "Mkutano", "Lengo"], answer: 0, why: "Miradi imeundwa na kazi." },
          { objective: "O5", q: "Unapaswa kugawa kazi za mradi vipi?", options: ["Kuzifanya zote mwenyewe", "Kumpa mtu mmoja zote", "Kuwaacha watu wachague kazi wanazopenda, kila moja na tarehe", "Kutozigawa kamwe"], answer: 2, why: "Uhuru wa kuchagua na tarehe zilizo wazi huwafanya wasaidizi waendelee kushiriki." },
          { objective: "O1", q: "AI inapendekeza darasa la bure la kujifunza ujuzi. Kabla ya kujiandikisha:", options: ["Unalipa ada kwanza", "Unalikagua wewe mwenyewe, kwa mfano kupitia maktaba yako au kituo cha ajira", "Unatoa namba yako ya benki", "Unaliamini kabisa"], answer: 1, why: "AI inaweza kuorodhesha programu zilizobadilika; zikague wewe mwenyewe." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Uongozi, Kujiamini na Ujuzi wa Baadaye",
    questions: [
      { objective: "O1", q: "Nani anaweza kuwa kiongozi?", options: ["Mameneja tu", "Watu wenye vyeo tu", "Yeyote anayepanga mambo na kuwasaidia wengine", "Viongozi waliochaguliwa tu"], answer: 2, why: "Uongozi ni kile unachofanya, si cheo chako." },
      { objective: "O1", q: "\"Kuwasaidia watoto wasome zaidi\" ni:", options: ["Tamaa, bado si lengo lililo wazi", "Lengo lililo wazi", "Tarehe ya mwisho", "Kazi"], answer: 0, why: "Haina kiasi gani wala lini." },
      { objective: "O1", q: "Tarehe ya mwisho ni:", options: ["Lengo", "Mkutano", "Aina ya hotuba", "Tarehe ambayo jambo lazima liwe limefanyika"], answer: 3, why: "Tarehe za mwisho zinasema lini." },
      { objective: "O1", q: "Prompt nzuri ya kunoa lengo lako ni:", options: ["\"Niandikie lengo langu bila kuuliza.\"", "\"Niulize maswali kwanza, kisha nisaidie kuongeza nini, kiasi gani na lini.\"", "\"Lengo.\"", "\"Lifanye lisiwezekane.\""], answer: 1, why: "Maswali husaidia AI kuelewa hali yako halisi." },
      { objective: "O2", q: "Hatua nne za kutatua matatizo ni:", options: ["Litaje, orodhesha njia, chagua moja, kagua ilivyokwenda", "Hofia, laumu, acha, sahau", "Uliza AI, nakili, tuma, imekwisha", "Subiri, subiri, subiri, tumaini"], answer: 0, why: "Hatua hizi zinakufanya utulie na uwe wazi." },
      { objective: "O2", q: "Unapoiomba AI njia, omba pia:", options: ["Nywila yako", "Faida na hatari kwa kila njia", "Njia moja tu", "Uhakikisho"], answer: 1, why: "Kuona hatari kunakusaidia kuchagua kwa busara." },
      { objective: "O2", q: "Unapoieleza AI tatizo, unaacha nje:", options: ["Tatizo", "Lengo", "Taarifa binafsi kuhusu watu", "Tarehe ya mwisho"], answer: 2, why: "Usiweke taarifa binafsi za wengine ndani ya AI." },
      { objective: "O2", q: "Baada ya kujaribu suluhisho, unapaswa:", options: ["Usilifikirie tena kamwe", "Kuilaumu AI", "Kufanya jambo lilelile kila wakati", "Kutazama nyuma: lilifanikiwa, na ungebadilisha nini?"], answer: 3, why: "Kutazama nyuma kunakusaidia kuboresha." },
      { objective: "O3", q: "Hotuba fupi inapaswa kuwa na:", options: ["Kwa nini ni muhimu, unataka kufanya nini, na ombi lako", "Mizaha tu", "Dakika ishirini za ukweli", "Hakuna ombi kabisa"], answer: 0, why: "Mpangilio huo unawasukuma watu kuchukua hatua." },
      { objective: "O3", q: "Hotuba ya dakika moja ni kama:", options: ["Maneno 10", "Maneno 120 hadi 150", "Maneno 1,000", "Kurasa 5"], answer: 1, why: "Watu huongea kama maneno 120 hadi 150 kwa dakika moja." },
      { objective: "O3", q: "Ili kutuliza wasiwasi kabla ya kuzungumza:", options: ["Ongea haraka sana", "Tazama sakafu", "Pumua polepole na uongee polepole kidogo", "Usifanye mazoezi"], answer: 2, why: "Kupumua polepole na kasi ya polepole husaidia kujiamini." },
      { objective: "O3", q: "AI inawezaje kusaidia hotuba yako?", options: ["Inatoa hotuba kwa niaba yako", "Inairefusha", "Inaondoa ombi lako", "Inapendekeza njia za kuifanya iwe wazi na yenye nguvu zaidi"], answer: 3, why: "AI inaweza kutoa maoni kuhusu rasimu yako." },
      { objective: "O4", q: "Maoni ni:", options: ["Taarifa inayomsaidia mtu kufanya vizuri zaidi", "Adhabu", "Aina ya chakula", "Lalamiko"], answer: 0, why: "Maoni ni kwa ajili ya kukua." },
      { objective: "O4", q: "Mpangilio mzuri wa maoni ni:", options: ["Kukosoa tu", "Jambo moja lililokwenda vizuri, jambo moja la kujaribu wakati ujao, na shukrani", "Kunyamaza", "Orodha ndefu ya makosa"], answer: 1, why: "Maoni yenye uwiano ni rahisi kusikia." },
      { objective: "O4", q: "Viongozi wazuri huomba maoni:", options: ["Kamwe", "Mara moja tu kwa mwaka", "Mara kwa mara", "Kutoka kwa AI tu"], answer: 2, why: "Kuomba mara kwa mara huwasaidia viongozi kukua." },
      { objective: "O5", q: "Mradi ni:", options: ["Tamaa ya neno moja", "Simu moja tu", "Hisia", "Lengo lenye mwanzo na mwisho"], answer: 3, why: "Miradi ina mwanzo na mwisho ulio wazi." },
      { objective: "O5", q: "AI inapogawa mradi wako katika kazi, iombe pia:", options: ["Iorodheshe matatizo yanayoweza kutokea na jinsi ya kuyashughulikia", "Ifanye kila kazi", "Ikuchagulie wasaidizi", "Iusitishe"], answer: 0, why: "Kupanga kwa matatizo kunaufanya mradi uwe imara zaidi." },
      { objective: "O5", q: "Ni nini huwafanya wasaidizi waendelee kushiriki katika mradi?", options: ["Kutowashukuru kamwe", "Kuwaacha wachague kazi, kuwafuatilia, na kuwashukuru", "Kufanya yote mwenyewe", "Kubadilisha tarehe bila kuwaambia"], answer: 1, why: "Watu hubaki wanapohisi wanathaminiwa." },
      { objective: "O1", q: "Upi ni ujuzi wa baadaye unaomsaidia karibu kila mtu?", options: ["Kupuuza mabadiliko", "Kuepuka kazi ya timu", "Kutumia zana za kidijitali na AI kwa usalama", "Kutojifunza kamwe"], answer: 2, why: "Ujuzi wa kidijitali na wa AI husaidia katika kazi nyingi." },
      { objective: "O3", q: "Katika kazi ya mwisho, baada ya kufanya mazoezi ya hotuba yako na AI, wewe:", options: ["Unaishia hapo", "Unairefusha", "Unaituma kwa watu usiowajua", "Unapata maoni na kuiboresha mara moja"], answer: 3, why: "Kuboresha baada ya maoni kunakamilisha ujuzi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      1,
      4,
      8,
      10,
      13,
      16,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Lengo lililo wazi",
        objective: "O1",
        notYet: "Tamaa isiyo na kiasi gani wala lini.",
        meets: "Lengo moja lenye nini, kiasi gani na lini ambalo mwanafunzi anaweza kulifanya kweli.",
        exceeds: "Limenolewa kwa maswali ya AI na lina hatua ya kwanza."
      },
      {
        name: "Matatizo na suluhisho",
        objective: "O2",
        notYet: "Matatizo chini ya mawili, au hakuna mpango wa kuyakabili.",
        meets: "Matatizo mawili yanayoweza kutokea, kila moja na suluhisho lililochaguliwa.",
        exceeds: "Kila suluhisho linaonyesha faida na hatari zilizopimwa."
      },
      {
        name: "Hotuba ya dakika moja",
        objective: "O3",
        notYet: "Hakuna hotuba, au hakuna ombi lililo wazi.",
        meets: "Kama dakika moja yenye kwa nini ni muhimu, utafanya nini, na mwito wa kuchukua hatua ukiwaomba watu watatu kusaidia.",
        exceeds: "Ilifanyiwa mazoezi kwa sauti na kuboreshwa mara moja kwa kutumia maoni ya AI."
      },
      {
        name: "Mpango wa mradi",
        objective: "O5",
        notYet: "Hakuna kazi wala tarehe.",
        meets: "Kazi zenye mtu na tarehe kwa kila moja.",
        exceeds: "Una vikao vya kufuatilia kila wiki na jinsi wasaidizi watakavyoshukuriwa."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaotekeleza mradi wao wa jamii ndani ya siku 60 (utafiti wa kufuatilia)",
      "Wanafunzi wanaowapata angalau wasaidizi watatu kwa mradi",
      "Wanafunzi wanaoanza ujuzi unaofuata waliouchagua, kama kozi nyingine ya Koach Learn, ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja yenye intaneti, au kompyuta ya maktaba",
      "Msaidizi wa AI wa bure: Microsoft Copilot, ChatGPT au Google Gemini",
      "Karatasi na kalamu kwa ajili ya lengo, mpango wa mradi na hotuba",
      "Mahali tulivu pa kufanya mazoezi ya hotuba kwa sauti",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Anza kwa kuwauliza wanafunzi jinsi tayari wanavyoongoza nyumbani, kazini au kanisani.",
      "Waambie wanafunzi watoe hotuba zao za dakika moja kwa mwenzao na pia kwa AI, na watumie mpangilio wa maoni.",
      "Miradi iwe midogo; wasaidie wanafunzi kupunguza lengo ikiwa ni kubwa mno kwa muda na msaada walionao.",
      "Wakumbushe wanafunzi kuacha taarifa binafsi kuhusu watu nje ya prompt za AI.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};

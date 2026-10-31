"use strict";

// Koach Learn course (Swahili translation of shared/customer-service-excellence.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "customer-service-excellence-sw",
  lang: "sw",
  translationOf: "customer-service-excellence",
  category: "Re-Entry",
  name: "Ubora katika Huduma kwa Wateja",
  skills: "Kuwakaribisha wateja, Kusikiliza ili kujua hitaji halisi, Kutatua matatizo, Kutuliza wateja waliokasirika kwa LAST, Kuhudumia kwa simu, chat na barua pepe, Kufuatilia",
  outcome: "kumhudumia mteja tangu mwanzo hadi mwisho ana kwa ana, kwa simu, chat au barua pepe: kumkaribisha kwa ukarimu, kujua anachohitaji, kutatua tatizo au kulipeleka kwa mtu sahihi, kumtuliza mteja aliyekasirika kwa njia ya LAST, na kufuatilia ili arudi tena.",
  about: [
    "Karibu kila kazi ina wateja: wanunuzi dukani, wanaokula mgahawani, wanaopiga simu kwenye kituo cha simu (call centre), wageni kwenye mapokezi ya ofisi, na wateja wa biashara ndogo. Huduma bora kwa wateja ni moja ya ujuzi unaotafutwa sana kazini. Inakusaidia kupata kazi, kuidumisha na kupanda cheo.",
    "Kozi hii ni kwa wanaoanza kazi kwa mara ya kwanza, vijana, watu wanaorudi kazini baada ya gereza, na wenye biashara ndogo wanaohudumia wateja wao wenyewe. Mifano inatoka madukani, migahawani, vituo vya simu na ofisini.",
    "Utajizoeza kukaribisha, kusikiliza, kutatua matatizo, kutuliza wateja waliokasirika kwa njia ya LAST (Listen = Sikiliza, Apologize = Omba radhi, Solve = Tatua, Thank = Shukuru), kuhudumia kwa simu, chat na barua pepe, na kufuatilia. Kila somo linachukua kama dakika tano na linaisha kwa zoezi. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Igiza mteja aliyekasirika pamoja na rafiki (kwa mfano chakula kilicholetwa si sahihi, mzigo uliochelewa au kosa kwenye bili). Mkaribishe, tumia LAST (Sikiliza, Omba radhi, Tatua, Shukuru), kubalianeni suluhisho, kisha andika barua pepe au ujumbe mfupi wa ufuatiliaji ambao ungetuma siku inayofuata.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanaoanza kazi kwa mara ya kwanza, vijana, watu wanaorudi kazini baada ya gereza, na wenye biashara ndogo wanaohudumia wateja wao wenyewe madukani, migahawani, vituo vya simu na ofisini.",
    startingPoint: "Wanaongea na watu kila siku na wamewahi kuwa wateja wenyewe. Wengi hawajafundishwa kukaribisha, kujua hitaji halisi la mteja, kulichukua tatizo kama lao, kutuliza mteja aliyekasirika au kuandika barua pepe ya huduma.",
    gap: "Huduma bora kwa wateja ni moja ya ujuzi unaotafutwa sana kazini. Inasaidia watu kupata kazi, kuidumisha na kupanda cheo, na inasaidia biashara ndogo kuwabakiza wateja. Wanafunzi wanahitaji njia rahisi wanayoweza kurudia ili kuhudumia wateja ana kwa ana, kwa simu, chat na barua pepe, na kufuatilia.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Mazoezi ni kwa kuigiza pamoja na rafiki au mwanafamilia",
      "Usalama: vitisho vinashughulikiwa na meneja au mlinzi, kamwe si peke yako",
      "Faragha: hakuna namba halisi za kadi wala taarifa za wateja katika mazoezi au zana za AI",
      "Muda: masomo ya kama dakika tano yenye mazoezi mafupi"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Mteja anapofika au anapopiga simu", action: "kumkaribisha kwa ukarimu ndani ya sekunde chache, ana kwa ana au kwa simu", standard: "ukitaja jina lako au jina la biashara na kumpa msaada" },
    { id: "O2", condition: "Ukipewa ombi la mteja lisilo wazi", action: "kuuliza maswali ya wazi na ya kufunga, na kurudia hitaji halisi la mteja", standard: "hadi mteja athibitishe kwamba umeelewa sawasawa" },
    { id: "O3", condition: "Ukipewa tatizo la mteja ambalo hukulisababisha", action: "kulichukua tatizo kama lako na kutoa suluhisho wazi, machaguo au mtu sahihi wa kusaidia", standard: "ukitaja hatua inayofuata na muda utakaoutimiza" },
    { id: "O4", condition: "Ukiwa na mteja aliyekasirika", action: "kumtuliza mteja kwa LAST: Sikiliza, Omba radhi, Tatua, Shukuru", standard: "ukitumia hatua zote nne na kutafuta msaada kama kuna vitisho" },
    { id: "O5", condition: "Kwa simu, chat au barua pepe", action: "kuandika au kutoa jibu wazi na la kirafiki, jibu likiwa kwanza kisha hatua inayofuata", standard: "kila ukweli ukiwa umekaguliwa na bila kutoa taarifa binafsi" },
    { id: "O6", condition: "Baada ya tatizo kutatuliwa", action: "kuandika ujumbe wa ufuatiliaji unaokagua suluhisho na kumkaribisha mteja arudi", standard: "ukitumwa wakati ulioahidi" }
  ],
  chapters: [
    {
      name: "Sura 1: Misingi ya huduma bora",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuwakaribisha wateja na mwonekano wa kwanza",
          minutes: 4,
          goal: "Mkaribishe mteja kwa ukarimu ndani ya sekunde chache, ana kwa ana au kwa simu.",
          text: [
            "Wateja huamua wanavyoiona biashara katika sekunde chache za kwanza. Makaribisho mazuri yanawaonyesha kwamba wao ni muhimu. Ana kwa ana, wakaribishe watu haraka hata kama una shughuli: mtazame machoni, tabasamu na sema habari. Kama unamhudumia mtu mwingine, kutikisa kichwa na kusema \"Nitakuhudumia sasa hivi\" kunamzuia mtu anayefuata asijione amepuuzwa.",
            "Tumia maneno rahisi ya kirafiki ya kuanza: \"Habari, karibu! Nikusaidie nini leo?\" Mgahawani: \"Habari za jioni, karibu! Meza ya watu wangapi?\" Kwenye mapokezi ya ofisi: \"Habari za asubuhi, umekuja kumwona nani?\" Kwa simu, taja jina la biashara na jina lako: \"Asante kwa kupiga Main Street Pharmacy, ni Dana. Nikusaidie nini?\"",
            "Onekana uko tayari: simu weka kando, simama au kaa wima, na mahali pako pawe safi na nadhifu. Tumia jina la mteja kama amelitaja. Mambo madogo yanajumlika kuwa mwonekano mzuri wa kwanza."
          ],
          steps: ["Mwone mteja haraka.", "Mtazame machoni na tabasamu.", "Sema makaribisho ya kirafiki na umpe msaada.", "Una shughuli? Tikisa kichwa na sema \"Nitakuhudumia sasa hivi.\"", "Kwa simu: jina la biashara, jina lako, toa msaada."],
          words: [["Mwonekano wa kwanza", "jinsi mtu anavyokuona wewe au biashara katika sekunde chache za kwanza."], ["Makaribisho", "maneno ya kwanza ya kirafiki unayomwambia mteja."]],
          slides: [
            { title: "Sekunde za kwanza ni muhimu", bullets: ["Wateja huamua haraka wanavyojisikia", "Makaribisho mazuri yanaonyesha wao ni muhimu"] },
            { title: "Ana kwa ana", bullets: ["Mtazame machoni na tabasamu", "\"Habari, karibu! Nikusaidie nini leo?\"", "Una shughuli? \"Nitakuhudumia sasa hivi.\""] },
            { title: "Kwa simu", bullets: ["Jina la biashara na jina lako", "\"Asante kwa kupiga Main Street Pharmacy, ni Dana.\"", "\"Nikusaidie nini?\""] },
            { title: "Onekana uko tayari", bullets: ["Simu weka kando", "Mahali nadhifu", "Tumia jina la mteja"] }
          ],
          tryIt: "Andika makaribisho matatu: moja kwa duka au mgahawa, moja kwa mapokezi ya ofisi na moja kwa kupokea simu ya biashara. Sema kila moja kwa sauti huku ukitabasamu hadi isikike ya kawaida.",
          youCanNow: "kuwakaribisha wateja kwa ukarimu ana kwa ana na kwa simu.",
          quickCheck: [
            { objective: "O1", q: "Kwa nini makaribisho mazuri ni muhimu?", options: ["Wateja huihukumu biashara katika sekunde chache za kwanza", "Yanafanya foleni iende polepole", "Yanahitajika kwa wateja wa kila siku tu", "Yanachukua nafasi ya kutatua tatizo"], answer: 0, why: "Mwonekano wa kwanza unaathiri jinsi wateja wanavyojisikia kuhusu ziara nzima." },
            { objective: "O1", q: "Simu inalia ukiwa unapanga rafu. Ungesema nini unapopokea?", options: ["\"Eeh?\"", "\"Ngoja.\"", "\"Asante kwa kupiga, ni Sam. Nikusaidie nini?\"", "Usiseme kitu hadi waongee"], answer: 2, why: "Makaribisho mazuri yanataja biashara au wewe na yanatoa msaada." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kusikiliza ili kujua hitaji halisi",
          minutes: 5,
          goal: "Uliza maswali na urudie ili kuelewa kile mteja anachohitaji kweli.",
          text: [
            "Wateja hawasemi kila mara kile hasa wanachohitaji. Mnunuzi anaomba \"chaja ya simu\" lakini anahitaji inayofaa simu ya zamani. Mpigaji simu anasema \"bili yangu si sahihi\" lakini kwa kweli anataka kujua kwa nini imepanda. Kusikiliza kwa makini kunaokoa muda na kuzuia makosa.",
            "Mwache mteja amalize bila kumkatiza. Kisha uliza maswali ya wazi: \"Utaitumia kwa kazi gani?\" \"Uliona tatizo lini kwa mara ya kwanza?\" Uliza swali la kufunga ili kuthibitisha jambo moja: \"Ni oda ile ya Jumanne?\"",
            "Kisha rudia: \"Kwa hiyo unahitaji chaja ya iPhone 8, na ungependa leo. Ni sawa?\" Kurudia kunaonyesha ulisikiliza na kunakamata makosa kabla hayajatokea. Mgahawani, kusoma oda tena kunazuia mlo usio sahihi kufika mezani."
          ],
          steps: ["Mwache mteja amalize.", "Uliza maswali ya wazi ili kuelewa hitaji.", "Uliza maswali ya kufunga ili kuthibitisha mambo.", "Rudia ulichosikia.", "Uliza: \"Ni sawa?\""],
          words: [["Swali la wazi", "swali linalohitaji jibu zaidi ya ndiyo au hapana."], ["Swali la kufunga", "swali linalojibiwa kwa ndiyo, hapana au jambo fupi."], ["Kurudia", "kumwambia mteja ombi lake tena ili kuhakikisha umeelewa."]],
          slides: [
            { title: "Jua hitaji halisi", bullets: ["\"Chaja\" inaweza kumaanisha ya simu ya zamani", "\"Bili yangu si sahihi\" inaweza kumaanisha \"kwa nini imepanda?\""] },
            { title: "Uliza maswali mazuri", bullets: ["Wazi: \"Utaitumia kwa kazi gani?\"", "Kufunga: \"Ni oda ile ya Jumanne?\""] },
            { title: "Rudia", bullets: ["\"Kwa hiyo unahitaji... Ni sawa?\"", "Mgahawani: soma oda tena", "Inakamata makosa mapema"] }
          ],
          tryIt: "Mwombe rafiki au mwanafamilia ajifanye mteja mwenye ombi lisilo wazi (\"Nahitaji kitu cha jikoni\"). Tumia maswali mawili ya wazi na swali moja la kufunga, kisha rudia hitaji lake halisi.",
          youCanNow: "kutumia maswali na kurudia ili kujua kile mteja anachohitaji kweli.",
          quickCheck: [
            { objective: "O2", q: "Swali la kufunga ni nini?", options: ["Swali linaloleta hadithi ndefu", "Swali lenye jibu fupi, kama ndiyo, hapana au tarehe", "Swali unalouliza baada ya kufunga duka", "Swali ambalo mteja hawezi kulijibu"], answer: 1, why: "Maswali ya kufunga yanathibitisha mambo haraka." },
            { objective: "O2", q: "Mteja anasema, \"Nahitaji zawadi kwa baba yangu.\" Ungeuliza nini kwanza?", options: ["\"Una pesa kiasi gani?\"", "\"Unataka ile ya bei ghali kuliko zote?\"", "\"Unaweza kurudi baadaye?\"", "\"Baba yako anapenda kufanya nini?\""], answer: 3, why: "Swali la wazi linakusaidia kujua hitaji halisi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutatua tatizo",
          minutes: 5,
          goal: "Lichukue tatizo la mteja kama lako na utoe suluhisho wazi au hatua inayofuata.",
          text: [
            "Wateja hukumbuka jinsi ulivyoshughulikia tatizo lao kuliko tatizo lenyewe. Lichukue kama lako: sema \"Niruhusu nikusaidie na hilo,\" hata kama mtu mwingine alilisababisha. Usiseme kamwe \"Hiyo si idara yangu\" kisha uondoke.",
            "Jua unachoweza kufanya. Jifunze sheria za mahali pako pa kazi (sera) kuhusu kurudisha bidhaa, kurudisha pesa, kubadilisha bidhaa na punguzo, na nani wa kumwita jambo likizidi uwezo wako. Toa machaguo unapoweza: \"Naweza kukubadilishia leo, au kurudisha pesa kwenye kadi yako. Ungependa ipi?\" Kama lazima umpeleke mteja kwa mtu mwingine, eleza kwa nini, mtambulishe, na mweleze mtu huyo mpya mambo yote ili mteja asilazimike kurudia kila kitu.",
            "Usiahidi kamwe kitu usichoweza kutimiza. \"Nitafuatilia na kukupigia kabla ya saa 9 alasiri (3 pm)\" ni bora kuliko \"Itakuwa sawa\" wakati huna uhakika. Kisha timiza ahadi yako."
          ],
          steps: ["Lichukue kama lako: \"Niruhusu nikusaidie na hilo.\"", "Angalia sera yako inaruhusu nini.", "Toa chaguo moja au mawili yaliyo wazi.", "Likizidi uwezo wako, lipeleke mbele pamoja na maelezo yote.", "Ahidi tu unachoweza kutimiza, ukitaja muda."],
          words: [["Sera", "sheria za biashara, kama za kurudisha bidhaa au pesa."], ["Kupeleka juu (escalate)", "kumpelekea meneja au mtu anayeweza kufanya zaidi tatizo."], ["Kuchukua jukumu", "kulichukulia tatizo la mteja kama lako la kutatua."]],
          slides: [
            { title: "Lichukue kama lako", bullets: ["\"Niruhusu nikusaidie na hilo.\"", "Kamwe usiseme \"Hiyo si idara yangu\""] },
            { title: "Jua machaguo yako", bullets: ["Jifunze sheria za kurudisha bidhaa, pesa na kubadilisha", "Toa machaguo: \"Nikubadilishie leo au nikurudishie pesa?\""] },
            { title: "Kumpeleka kwa mwingine", bullets: ["Eleza kwa nini na mtambulishe mtu anayefuata", "Mpe maelezo yote", "Mteja asilazimike kurudia kila kitu"] },
            { title: "Ahadi", bullets: ["Ahidi tu unachoweza kutimiza", "\"Nitakupigia kabla ya saa 9 alasiri (3 pm)\" na ufanye hivyo"] }
          ],
          tryIt: "Chagua tatizo la kawaida katika kazi uliyonayo au unayoitaka (saizi isiyo sahihi, mlo uliopoa, miadi iliyokosekana, swali la bili). Andika ungesema nini kulichukua kama lako, machaguo mawili ungeweza kutoa, na nani ungempelekea kama ikihitajika.",
          youCanNow: "kulichukua tatizo la mteja kama lako na kutoa machaguo wazi au hatua inayofuata.",
          quickCheck: [
            { objective: "O3", q: "Kulichukua tatizo kama lako kunamaanisha nini?", options: ["Kulaumu idara nyingine", "Kusema si kazi yako", "Kulichukulia tatizo kama lako la kusaidia kutatua", "Kulipia tatizo kwa pesa zako"], answer: 2, why: "Kuchukua jukumu kunamaanisha unamsaidia mteja hata kama hukusababisha tatizo." },
            { objective: "O3", q: "Mteja anahitaji jibu usilolijua. Ungesema nini?", options: ["\"Nitafuatilia na kukupigia kabla ya saa 9 alasiri (3 pm).\"", "\"Sijui.\"", "\"Tafuta mtandaoni.\"", "\"Huenda mtu akakupigia siku moja.\""], answer: 0, why: "Ahadi wazi yenye muda inajenga uaminifu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Misingi ya huduma bora",
        questions: [
          { objective: "O1", q: "Unamhudumia mteja mmoja na mwingine anafika. Unafanya nini?", options: ["Mpuuze hadi umalize", "Tikisa kichwa na sema \"Nitakuhudumia sasa hivi\"", "Mwambie arudi baadaye", "Mwache mteja wa kwanza"], answer: 1, why: "Kutikisa kichwa na neno fupi kunamzuia mteja anayefuata asijione amepuuzwa." },
          { objective: "O1", q: "Ni makaribisho gani mazuri ya simu?", options: ["\"Eeh?\"", "\"Unataka nini?\"", "\"Haloo?\" kisha unasubiri", "\"Asante kwa kupiga Main Street Pharmacy, ni Dana. Nikusaidie nini?\""], answer: 3, why: "Yanataja jina la biashara, jina lako na yanatoa msaada." },
          { objective: "O2", q: "Kwa nini urudie oda ya mgahawani?", options: ["Ili kukamata makosa kabla chakula hakijapikwa", "Ili kumchelewesha mteja", "Kwa sababu inafurahisha", "Ili kuonyesha kumbukumbu yako"], answer: 0, why: "Kurudia kunakamata makosa mapema." },
          { objective: "O2", q: "Lipi ni swali la wazi?", options: ["\"Ni ile ya bluu?\"", "\"Uliinunua hapa?\"", "\"Utaitumia kwa kazi gani?\"", "\"Ni hayo tu?\""], answer: 2, why: "Linahitaji jibu zaidi ya ndiyo au hapana." },
          { objective: "O3", q: "Tatizo la mteja halikusababishwa na wewe. Unapaswa kusema nini?", options: ["\"Hiyo si idara yangu.\"", "\"Niruhusu nikusaidie na hilo.\"", "\"Si kosa langu.\"", "Usiseme kitu"], answer: 1, why: "Kulichukua tatizo kama lako kunajenga uaminifu." }
        ]
      }
    },
    {
      name: "Sura 2: Nyakati ngumu na kila njia ya mawasiliano",
      lessons: [
        {
          objectives: ["O4"],
          title: "Wateja waliokasirika na njia ya LAST",
          minutes: 6,
          goal: "Mtulize mteja aliyekasirika kwa LAST: Sikiliza, Omba radhi, Tatua, Shukuru.",
          text: [
            "Wateja waliokasirika kwa kawaida wamekasirishwa na hali, si na wewe. Kubaki mtulivu ni kazi yako na nguvu yako. Njia ya LAST inakupa hatua nne rahisi (kwa Kiingereza: Listen, Apologize, Solve, Thank).",
            "Sikiliza: mwache aongee bila kumkatiza; tikisa kichwa na urudie: \"Oda yako ilifika dakika 40 kuchelewa na chakula kilikuwa kimepoa.\" Omba radhi: sema samahani kwa jinsi ilivyomwathiri, kwa dhati: \"Samahani sana, hukupaswa kupata hali kama hiyo.\" Unaweza kuomba radhi bila kumlaumu mtu yeyote. Tatua: toa suluhisho ndani ya sera yako, au mwite meneja: \"Naweza kukutengenezea kingine sasa hivi, au kukiondoa kwenye bili yako.\" Shukuru: mshukuru kwa kukuambia: \"Asante kwa kutujulisha. Inatusaidia kurekebisha.\"",
            "Ongea kwa sauti ya chini na polepole, usibishane wala usilichukue kibinafsi, na tumia jina lake. Mteja akianza kutoa vitisho au matusi, si lazima uvumilie: mwite meneja au mlinzi na ufuate sheria za usalama za mahali pako pa kazi."
          ],
          steps: ["Sikiliza: mwache amalize, kisha rudia.", "Omba radhi kwa dhati kwa jinsi ilivyomwathiri.", "Tatua: toa suluhisho au mwite meneja.", "Mshukuru kwa kukuambia.", "Vitisho au matusi: mwite meneja au mlinzi."],
          words: [["LAST", "Listen, Apologize, Solve, Thank (Sikiliza, Omba radhi, Tatua, Shukuru): hatua nne kwa mteja aliyekasirika."], ["Kwa dhati", "kwa ukweli na kutoka moyoni."]],
          slides: [
            { title: "Ni hali, si wewe", bullets: ["Baki mtulivu: ni kazi yako na nguvu yako", "Tumia LAST"] },
            { title: "L na A", bullets: ["Sikiliza (Listen): mwache amalize, rudia", "Omba radhi (Apologize): \"Samahani sana, hilo si sawa.\""] },
            { title: "S na T", bullets: ["Tatua (Solve): \"Naweza kukutengenezea kingine au kukiondoa kwenye bili.\"", "Shukuru (Thank): \"Asante kwa kutujulisha.\""] },
            { title: "Baki salama", bullets: ["Sauti ya chini na polepole; usibishane", "Vitisho au matusi: mwite meneja au mlinzi"] }
          ],
          tryIt: "Andika maneno ya LAST kwa mojawapo ya haya: mlo uliopoa, mzigo ambao haukufika, au kutozwa pesa zaidi. Andika sentensi moja kwa kila herufi, kisha sema maneno yote kwa sauti.",
          youCanNow: "kumtuliza mteja aliyekasirika kwa Sikiliza, Omba radhi, Tatua, Shukuru.",
          quickCheck: [
            { objective: "O4", q: "Herufi S katika LAST inamaanisha nini?", options: ["Tabasamu (Smile)", "Tatua (Solve)", "Simama (Stop)", "Sema samahani tena"], answer: 1, why: "LAST ni Sikiliza, Omba radhi, Tatua na Shukuru." },
            { objective: "O4", q: "Mteja amekasirika kwa sababu mzigo wake haukufika. Ungefanya nini kwanza?", options: ["Toa marejesho ya pesa kabla hajamaliza", "Mwambie ni kosa la kampuni ya usafirishaji", "Mhamishie kwa mwingine mara moja", "Sikiliza kikamilifu na urudie kilichotokea"], answer: 3, why: "LAST inaanza kwa kusikiliza ili mteja ajione amesikilizwa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Huduma kwa simu, chat na barua pepe",
          minutes: 5,
          goal: "Toa huduma wazi na ya kirafiki kwa simu, chat na barua pepe.",
          text: [
            "Simu: wateja hawawezi kuona uso wako, kwa hiyo sauti yako inafanya kazi. Tabasamu unapoongea; kweli inabadilisha sauti yako. Ongea kwa uwazi, na kabla ya kumweka mtu asubiri (hold), uliza: \"Naweza kukuweka usubiri kidogo nikiangalia?\" na umshukuru unaporudi. Kama lazima umhamishe (transfer), mwambie anapelekwa kwa nani na kwa nini.",
            "Chat (ujumbe wa maandishi mtandaoni): jibu haraka, ujumbe uwe mfupi, na tumia maneno ya kirafiki. Kabla ya kufunga uliza: \"Kuna kitu kingine naweza kukusaidia?\" Barua pepe: tumia kichwa cha habari kilicho wazi, msalimie kwa jina, jibu swali katika mistari ya kwanza, eleza hatua inayofuata na weka jina lako mwishoni. Isome mara moja kabla ya kuituma. Msaidizi wa AI anaweza kukusaidia kuandika rasimu au kuboresha jibu, lakini kagua kila ukweli na usiweke kamwe taarifa binafsi za mteja ndani yake.",
            "Kwa kila njia, linda faragha. Fuata hatua za kampuni yako kuthibitisha unaongea na nani, na usiombe kamwe namba kamili ya kadi au nywila kwa chat au barua pepe."
          ],
          steps: ["Simu: tabasamu, ongea wazi, uliza kabla ya kumweka asubiri, mshukuru baadaye.", "Kuhamisha: sema kwa nani na kwa nini.", "Chat: haraka, fupi, kirafiki; uliza \"Kuna kingine?\"", "Barua pepe: kichwa wazi, jina, jibu kwanza, hatua inayofuata, jina lako.", "Linda faragha: fuata ukaguzi wa utambulisho, hakuna namba za kadi au nywila kwa chat au barua pepe."],
          words: [["Kusubirisha (hold)", "kusimamisha simu kwa muda ukiangalia jambo."], ["Kuhamisha (transfer)", "kupeleka simu kwa mtu au timu nyingine."], ["Njia ya mawasiliano", "jinsi wateja wanavyowasiliana nawe: ana kwa ana, simu, chat, barua pepe au mitandao ya kijamii."]],
          slides: [
            { title: "Simu", bullets: ["Tabasamu: linabadilisha sauti yako", "\"Naweza kukuweka usubiri kidogo?\"", "Kuhamisha: mwambie kwa nani na kwa nini"] },
            { title: "Chat", bullets: ["Jibu haraka, kwa ufupi", "Maneno ya kirafiki", "\"Kuna kitu kingine naweza kukusaidia?\""] },
            { title: "Barua pepe", bullets: ["Kichwa cha habari wazi na jina lake", "Jibu kwanza, kisha hatua inayofuata", "Weka jina lako; soma kabla ya kutuma"] },
            { title: "Kila njia", bullets: ["AI inaweza kusaidia rasimu; wewe unakagua ukweli", "Fuata ukaguzi wa utambulisho", "Hakuna namba za kadi wala nywila kwa chat au barua pepe"] }
          ],
          tryIt: "Mteja anaandika barua pepe: \"Niliagiza koti la bluu nikapata jekundu. Sasa nifanyeje?\" Andika jibu fupi lenye kichwa cha habari, salamu, kuomba radhi, suluhisho, hatua inayofuata na jina lako.",
          youCanNow: "kuwahudumia wateja vizuri kwa simu, chat na barua pepe huku ukilinda faragha yao.",
          quickCheck: [
            { objective: "O5", q: "Nini kinapaswa kuja kwanza katika barua pepe ya huduma kwa wateja?", options: ["Jibu la swali lao", "Hadithi ndefu kuhusu kampuni yako", "Cheo chako cha kazi", "Orodha ya sheria"], answer: 0, why: "Wateja wanataka jibu kwanza, kisha hatua inayofuata." },
            { objective: "O5", q: "Unatumia msaidizi wa AI kuandika rasimu ya jibu la chat. Ungefanya nini kabla ya kutuma?", options: ["Tuma mara moja", "Ongeza namba ya kadi ya mteja", "Kagua kila ukweli na uondoe taarifa binafsi", "Inakili kwa wateja wote"], answer: 2, why: "Rasimu za AI lazima zikaguliwe na zisiwe na taarifa binafsi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kufuatilia na kujenga uaminifu wa wateja",
          minutes: 5,
          goal: "Fuatilia baada ya tatizo na umfanye mteja arudi tena.",
          text: [
            "Tatizo lililotatuliwa vizuri linaweza kumfanya mteja awe mwaminifu zaidi kuliko kama hakuna kilichoharibika. Kufuatilia ndiyo njia ya kumaliza kazi.",
            "Kama uliahidi kupiga simu au kutoa taarifa, fanya hivyo kwa wakati, hata kama habari ni \"bado tunalishughulikia\". Baada ya suluhisho, rudi kuuliza inapofaa: \"Nilitaka kuhakikisha kipuri kipya kimefika na kinafanya kazi.\" Weka kumbukumbu rahisi kwenye mfumo wako au daftari: jina, tatizo, ulichofanya, na kinachofuata, ili yeyote kwenye timu aweze kusaidia.",
            "Mambo madogo ya ziada yanajenga uaminifu: kukumbuka oda ya kawaida ya mteja wa kila siku, kumshukuru mteja wa muda mrefu, au kumjulisha mteja bidhaa aliyoitaka imerudi. Kama una biashara yako, waombe wateja walioridhika waandike maoni (review), na zichukulie malalamiko kama ushauri wa bure kuhusu cha kurekebisha."
          ],
          steps: ["Timiza kila ahadi ya kupiga simu au kutoa taarifa, kwa wakati.", "Rudi kuuliza baada ya suluhisho.", "Andika kumbukumbu rahisi: jina, tatizo, hatua, kinachofuata.", "Wakumbuke wateja wa kila siku na uwashukuru.", "Tumia malalamiko kujiboresha."],
          words: [["Ufuatiliaji", "kuwasiliana na mteja tena ili kuuliza au kumpa taarifa."], ["Uaminifu wa wateja", "wateja wanapoendelea kurudi na kukupendekeza kwa wengine."]],
          slides: [
            { title: "Kufuatilia kunamaliza kazi", bullets: ["Tatizo lililotatuliwa vizuri linajenga uaminifu"] },
            { title: "Timiza ahadi", bullets: ["Piga simu au toa taarifa kwa wakati", "Hata kama ni \"bado tunalishughulikia\"", "Rudi kuuliza baada ya suluhisho"] },
            { title: "Andika kumbukumbu", bullets: ["Jina, tatizo, hatua, kinachofuata", "Yeyote kwenye timu anaweza kusaidia"] },
            { title: "Jenga uaminifu", bullets: ["Wakumbuke wateja wa kila siku", "Washukuru wateja wa muda mrefu", "Malalamiko ni ushauri wa bure"] }
          ],
          tryIt: "Kazi ya mwisho: igiza mteja aliyekasirika pamoja na rafiki ukitumia makaribisho na LAST, kubalianeni suluhisho, kisha andika ujumbe wa ufuatiliaji ambao ungetuma siku inayofuata.",
          youCanNow: "kufuatilia baada ya tatizo na kujenga uaminifu wa wateja.",
          quickCheck: [
            { objective: "O6", q: "Kwa nini tatizo lililotatuliwa vizuri linaweza kumfanya mteja awe mwaminifu zaidi?", options: ["Watapata vitu bure milele", "Wanaona biashara inajali na inatimiza ahadi zake", "Wanasahau tatizo lilitokea", "Hawana chaguo jingine"], answer: 1, why: "Kushughulikia tatizo vizuri kunaonyesha biashara inaweza kuaminiwa." },
            { objective: "O6", q: "Jana ulibadilisha oda ya mteja iliyokuwa si sahihi. Ungefanya nini leo?", options: ["Hakuna; imekwisha", "Tuma kuponi bila ujumbe", "Mwombe aandike maoni mara moja", "Tuma ujumbe mfupi kuuliza kama sasa kila kitu kiko sawa"], answer: 3, why: "Ufuatiliaji unakagua suluhisho na unaonyesha unajali." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Nyakati ngumu na kila njia ya mawasiliano",
        questions: [
          { objective: "O4", q: "LAST inasimama badala ya nini?", options: ["Look, Ask, Sell, Talk (Tazama, Uliza, Uza, Ongea)", "Leave, Argue, Stop, Try (Ondoka, Bishana, Simama, Jaribu)", "Listen, Apologize, Solve, Thank (Sikiliza, Omba radhi, Tatua, Shukuru)", "Learn, Answer, Smile, Tell (Jifunze, Jibu, Tabasamu, Sema)"], answer: 2, why: "LAST ni Listen, Apologize, Solve, Thank: Sikiliza, Omba radhi, Tatua, Shukuru." },
          { objective: "O4", q: "Mteja aliyekasirika mgahawani anasema chakula kimepoa. Hatua ya kwanza ni ipi?", options: ["Eleza kwamba jikoni kulikuwa na kazi nyingi", "Sikiliza na urudie alichosema", "Toa kuponi kabla hajamaliza", "Ondoka"], answer: 1, why: "Kusikiliza kunakuja kwanza katika LAST." },
          { objective: "O5", q: "Kabla ya kumweka mpigaji simu asubiri, unapaswa:", options: ["Bonyeza hold tu", "Kata simu kisha umpigie tena", "Mhamishie popote", "Uliza \"Naweza kukuweka usubiri kidogo nikiangalia?\""], answer: 3, why: "Kuuliza kwanza ni adabu na kunadumisha uaminifu." },
          { objective: "O5", q: "Mteja wa chat anataka kukupa namba kamili ya kadi yake. Unafanya nini?", options: ["Mwambie asiitume kwa chat na ufuate hatua salama za kampuni yako", "Inakili kwenye kumbukumbu zako", "Iweke kwenye zana ya AI", "Mrudishie kwa kuisoma"], answer: 0, why: "Namba za kadi hazipaswi kamwe kutumwa kwa chat au barua pepe." },
          { objective: "O6", q: "Ulimwahidi mteja taarifa kabla ya Ijumaa lakini bado huna habari. Unafanya nini?", options: ["Subiri hadi upate habari", "Wasiliana naye Ijumaa na taarifa ya \"bado tunalishughulikia\"", "Lipuuze", "Mwombe mfanyakazi mwenzako ajifanye limetatuliwa"], answer: 1, why: "Kutimiza ahadi kwa wakati kunajenga uaminifu hata bila habari mpya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Ubora katika Huduma kwa Wateja",
    questions: [
      { objective: "O1", q: "Kwa nini makaribisho ni muhimu sana?", options: ["Wateja huihukumu biashara katika sekunde za kwanza", "Ni sheria", "Yanachukua muda mrefu kuliko yote", "Yanachukua nafasi ya kutatua matatizo"], answer: 0, why: "Mwonekano wa kwanza unaathiri jinsi wateja wanavyojisikia." },
      { objective: "O1", q: "Ni makaribisho gani mazuri kwenye mapokezi ya ofisi?", options: ["Endelea kuandika bila kusema kitu", "\"Habari za asubuhi, umekuja kumwona nani?\"", "\"Nini?\"", "\"Tuna kazi nyingi.\""], answer: 1, why: "Ni ya kirafiki na inaenda moja kwa moja kwenye hitaji lao." },
      { objective: "O1", q: "Lipi linaonyesha uko tayari kuhudumia?", options: ["Kuperuzi simu yako", "Kula kaunta", "Simu kando na mahali nadhifu", "Kuegemea ukuta"], answer: 2, why: "Kuonekana tayari kunaleta mwonekano mzuri wa kwanza." },
      { objective: "O2", q: "Mnunuzi anaomba \"chaja\". Hatua bora inayofuata ni ipi?", options: ["Mpe chaja yoyote", "Sema hamna", "Onyesha kwa kidole upande wa rafu", "Uliza ni ya simu gani"], answer: 3, why: "Swali linasaidia kujua hitaji halisi." },
      { objective: "O2", q: "\"Kwa hiyo unahitaji pizza mbili kubwa ziletwe kabla ya saa 12 jioni (6 pm). Ni sawa?\" ni mfano wa:", options: ["Kurudia", "Kumshawishi anunue zaidi", "Kupeleka juu", "Makaribisho ya kufunga"], answer: 0, why: "Inathibitisha oda kabla ya kuchukua hatua." },
      { objective: "O2", q: "Swali la kufunga linafaa kwa:", options: ["Kuanzisha hadithi ndefu", "Kuthibitisha jambo, kama tarehe", "Kumtuliza mteja mwenye hasira", "Kumkaribisha mtu"], answer: 1, why: "Maswali ya kufunga yanathibitisha ukweli haraka." },
      { objective: "O3", q: "Kauli ipi inaonyesha unalichukua tatizo kama lako?", options: ["\"Hiyo si kazi yangu.\"", "\"Mpigie mtu mwingine.\"", "\"Niruhusu nikusaidie na hilo.\"", "\"Jaribu tovuti.\""], answer: 2, why: "Kulichukua tatizo kama lako kunamtuliza mteja." },
      { objective: "O3", q: "Kwa nini utoe machaguo kama \"kubadilisha au kurudisha pesa\"?", options: ["Ili kumchanganya", "Yanampa mteja uwezo fulani wa kuamua", "Ili kuchelewesha suluhisho", "Yanahitajika kila mara"], answer: 1, why: "Machaguo yanawasaidia wateja kujisikia wanaheshimiwa." },
      { objective: "O3", q: "Unapompeleka mteja kwa meneja, unapaswa:", options: ["Kumfanya aeleze kila kitu tena", "Kukaa kimya", "Kuondoka bila kueleza", "Kueleza kwa nini, kuwatambulisha na kutoa maelezo"], answer: 3, why: "Makabidhiano mazuri yanamwokoa mteja asirudie." },
      { objective: "O3", q: "Ahadi ipi ni bora wakati huna uhakika wa jibu?", options: ["\"Nitafuatilia na kukupigia kabla ya saa 9 alasiri (3 pm).\"", "\"Hakika itakuwa sawa.\"", "\"Ni bure, usijali.\"", "\"Hakuna anayejua.\""], answer: 0, why: "Ahidi tu unachoweza kutimiza, ukitaja muda." },
      { objective: "O4", q: "Katika LAST, herufi A inamaanisha:", options: ["Bishana (Argue)", "Omba radhi (Apologize)", "Omba kitambulisho (Ask for ID)", "Kubali kila kitu (Agree)"], answer: 1, why: "Kuomba radhi kwa dhati kunasaidia kumtuliza mteja." },
      { objective: "O4", q: "Je, unaweza kuomba radhi bila kumlaumu mtu yeyote?", options: ["Hapana, lazima umtaje aliyesababisha", "Mameneja tu ndio wanaweza kuomba radhi", "Ndiyo: \"Samahani kwa yaliyokupata.\"", "Kuomba radhi hakuruhusiwi kamwe"], answer: 2, why: "Kuomba radhi kwa dhati kunahusu hali aliyoipata mteja." },
      { objective: "O4", q: "Mteja aliyekasirika anaanza kutoa vitisho. Unapaswa kufanya nini?", options: ["Mbishie", "Puuza na uendelee kuhudumia", "Mtishe", "Mwite meneja au mlinzi na ufuate sheria za usalama"], answer: 3, why: "Usalama wako unakuja kwanza." },
      { objective: "O4", q: "Katika LAST, herufi T inamaanisha:", options: ["Mshukuru kwa kukuambia (Thank)", "Mwambie amekosea (Tell)", "Hamisha simu (Transfer)", "Pumzika (Take a break)"], answer: 0, why: "Kumshukuru kunamaliza kwa hali nzuri." },
      { objective: "O5", q: "Kwa nini utabasamu ukiwa kwenye simu?", options: ["Mteja anaweza kukuona", "Linabadilisha jinsi sauti yako inavyosikika", "Ni sheria ya kampuni kila mahali", "Linafanya simu ziwe fupi"], answer: 1, why: "Tabasamu linafanya sauti yako isikike ya joto zaidi." },
      { objective: "O5", q: "Nini kinafaa katika barua pepe nzuri kwa mteja?", options: ["Bila kichwa cha habari", "Hadithi ndefu kabla ya jibu", "Kichwa cha habari wazi, jina lake, jibu kwanza na hatua inayofuata", "Herufi kubwa zote"], answer: 2, why: "Mpangilio ulio wazi unafanya barua pepe iwe rahisi kufuata." },
      { objective: "O5", q: "Ukitumia msaidizi wa AI kuandika rasimu ya jibu, unapaswa:", options: ["Kuweka namba ya kadi ya mteja", "Kutuma bila kusoma", "Kuiacha iahidi kurudisha pesa", "Kukagua kila ukweli na kuacha nje taarifa binafsi"], answer: 3, why: "Wewe unabaki na jukumu la ukweli na faragha." },
      { objective: "O6", q: "Kwa nini uandike kumbukumbu za kila tatizo la mteja?", options: ["Ili yeyote kwenye timu aweze kusaidia wakati ujao", "Ili kusengenya", "Ili kuchelewesha mambo", "Kumbukumbu hazina faida"], answer: 0, why: "Kumbukumbu zinafanya huduma iwe ya kiwango kimoja kila wakati." },
      { objective: "O6", q: "Tatizo lililotatuliwa vizuri linaweza kumfanya mteja:", options: ["Asirudi kamwe", "Awe mwaminifu zaidi kuliko awali", "Akasirike zaidi", "Aisahau biashara yako"], answer: 1, why: "Kurekebisha vizuri kunajenga imani na uaminifu." },
      { objective: "O6", q: "Kwa mwenye biashara ndogo, malalamiko ni bora kuyaona kama:", options: ["Mashambulizi ya kupuuzwa", "Sababu za kubishana", "Ushauri wa bure kuhusu cha kurekebisha", "Kitu cha kufuta"], answer: 2, why: "Malalamiko yanaonyesha nini cha kuboresha." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      1,
      3,
      5,
      7,
      10,
      12,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Makaribisho",
        objective: "O1",
        notYet: "Hakuna makaribisho, au ni ya baridi au ya haraka.",
        meets: "Makaribisho ya ukarimu ndani ya sekunde chache yenye jina na kutoa msaada.",
        exceeds: "Makaribisho yanafaa mazingira na yanasikika ya kawaida."
      },
      {
        name: "Sikiliza na Omba radhi",
        objective: "O4",
        notYet: "Alimkatiza, alibishana au alilaumu.",
        meets: "Alisikiliza kikamilifu, alirudia tatizo na aliomba radhi bila kulaumu.",
        exceeds: "Alitaja hisia za mteja na alibaki mtulivu muda wote."
      },
      {
        name: "Tatua",
        objective: "O3",
        notYet: "Hakuna suluhisho wazi wala hatua inayofuata.",
        meets: "Alilichukua tatizo kama lake na walikubaliana suluhisho au hatua inayofuata iliyo wazi.",
        exceeds: "Alitoa machaguo na alitaja muda kwa kila ahadi."
      },
      {
        name: "Shukuru",
        objective: "O4",
        notYet: "Alimaliza bila kumshukuru mteja.",
        meets: "Alimshukuru mteja kwa kuleta tatizo.",
        exceeds: "Alimaliza kwa kuuliza kama kuna kitu kingine kinachohitajika."
      },
      {
        name: "Ujumbe wa ufuatiliaji",
        objective: "O6",
        notYet: "Hakuna ufuatiliaji, au hauna lengo wazi.",
        meets: "Ujumbe mfupi wa siku inayofuata unaokagua suluhisho na kumkaribisha arudi.",
        exceeds: "Wa binafsi, mahususi na bila makosa."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaopata au wanaodumisha kazi ya kuhudumia wateja ndani ya siku 90 (utafiti wa ufuatiliaji)",
      "Wenye biashara ndogo wanaoripoti malalamiko machache au wateja wengi zaidi wanaorudi",
      "Wanafunzi wanaoripoti kutumia LAST na mteja halisi ndani ya siku 30",
      "Wanafunzi wanaoanza kozi nyingine ya kazi ya Koach Learn ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Mwenzako wa kuigiza naye (rafiki, mwanafamilia au mwanafunzi mwenzako)",
      "Karatasi na kalamu au simu kwa ajili ya maneno ya kuigiza na ujumbe wa ufuatiliaji",
      "Kama dakika 60 kwa jumla"
    ],
    facilitatorNotes: [
      "Fanyeni maigizo kwa jozi na mbadilishane nafasi ili kila mtu aigize mteja aliyekasirika mara moja.",
      "Tumieni mifano kutoka kazi za eneo lenu ambazo wanafunzi wanazitaka: madukani, migahawani, vituo vya simu na mapokezi.",
      "Fundisheni kwamba vitisho vinashughulikiwa na meneja au mlinzi; wanafunzi hawavishughulikii kamwe peke yao.",
      "Tumieni oda na akaunti za kubuni tu; hakuna namba halisi za kadi katika mazoezi.",
      "Pimeni maigizo ya mwisho kwa rubriki na mtoe maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};

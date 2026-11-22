"use strict";

// Koach Learn course (Swahili translation of shared/cybersecurity-analyst-entry.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const SEC = { name: "Cheti cha CompTIA Security+ (ukurasa rasmi)", url: "https://www.comptia.org/en-us/certifications/security/" };
const V7 = { name: "CompTIA Security+ V7 (SY0-701): maelezo ya mtihani", url: "https://www.comptia.org/en-us/certifications/security/v7/" };
const V8 = { name: "CompTIA Security+ V8 (SY0-801): maelezo ya mtihani", url: "https://www.comptia.org/en-us/certifications/security/v8/" };
const CISA = { name: "CISA (shirika la Marekani la usalama wa mtandao): mbinu bora za usalama wa mtandao", url: "https://www.cisa.gov/topics/cybersecurity-best-practices" };

module.exports = {
  id: "cybersecurity-analyst-entry-sw",
  lang: "sw",
  translationOf: "cybersecurity-analyst-entry",
  category: "Workforce Development",
  name: "Usalama wa Mtandao kwa Wanaoanza Kazi (Maandalizi ya CompTIA Security+)",
  skills: "Kutumia CIA triad, Kupima hatari, Kuchagua vidhibiti vya usalama, Kuimarisha kompyuta, Kusoma logi, Kufuata hatua za kushughulikia tukio",
  outcome: "kufikiri na kufanya kazi kama mchambuzi wa usalama anayeanza: kupanga tatizo kwa CIA triad, kupima hatari na kuchagua kidhibiti, kuimarisha kompyuta yako mwenyewe, kutambua dalili za hatari katika logi ya kuingia, kufuata hatua za kushughulikia tukio, na kufuata mpango wako wenye tarehe wa mtihani wa CompTIA Security+.",
  about: [
    "Wachambuzi wa usalama hulinda kompyuta, akaunti na data za shirika. Wanaangalia dalili za hatari, wanakagua mipangilio, na wanachukua hatua kitu kinapoharibika. CompTIA Security+ ni mojawapo ya vyeti vinavyojulikana zaidi vya kuanza kazi hii.",
    "Kozi hii inakuandaa kwa Security+. Haikupi cheti; CompTIA ndiyo inayokipa unapofaulu mtihani. Mtihani unabadilika mwishoni mwa 2026, kwa hiyo Somo la 1 linakuonyesha jinsi ya kuchagua toleo sahihi na mahali pa kukagua maelezo ya sasa.",
    "Kila kitu hapa ni cha kujilinda. Unafanya mazoezi kwenye kompyuta na akaunti zako mwenyewe tu, na kwenye logi za kubuni zilizo katika masomo. Usijaribu, usichunguze (scan) wala usiingie kwenye mifumo ambayo si yako au huna ruhusa ya maandishi kuitumia: hilo linaweza kuwa kosa la jinai.",
    "Kama wewe ni mgeni katika usalama, soma kwanza kozi \"Utangulizi wa Usalama wa Mtandao\". Inafundisha nywila, uthibitishaji wa hatua nyingi na phishing kwa akaunti zako; kozi hii inajenga juu yake kwa ajili ya kazi."
  ],
  finalTask: "Tengeneza jalada lako la mwanzo la usalama: (1) orodha ya kuimarisha kompyuta yako mwenyewe inayoonyesha kila mpangilio uliokagua na matokeo yake; (2) maelezo mafupi ya tukio kuhusu logi ya mazoezi ya kuingia kutoka Somo la 5: ulichoona, kwa nini kinatia shaka, athari yake kwa CIA na kiwango cha hatari, na hatua za kushughulikia tukio ambazo ungechukua; na (3) mpango wako wa kusoma na wa mtihani wa Security+: toleo la mtihani utakalofanya na kwa nini, tarehe lengwa, kila eneo (domain) na uzito wake, na saa zako za kusoma kwa wiki.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima na vijana wanaolenga kazi yao ya kwanza ya usalama: wanaotafuta kazi, wanajeshi wastaafu (wengi wana vibali vya usalama au walifanya kazi za IT), wanaobadilisha kazi na watu wa msaada wa IT wanaotaka kupanda cheo. Wana asili tofauti; wengi wametumia kompyuta kila siku lakini hawajawahi kufanya kazi ya usalama.",
    startingPoint: "Wanajua usalama wa msingi wa binafsi (nywila, uthibitishaji wa hatua nyingi, phishing) au wanaweza kuupata kutoka \"Utangulizi wa Usalama wa Mtandao\". Hawajawahi kusoma logi, kupima hatari wala kufuata utaratibu wa tukio. Wachache wanajua jinsi mtihani wa Security+ ulivyopangwa au kwamba unabadilika.",
    gap: "Kazi za mwanzo za usalama zinatarajia tabia za mchambuzi: kupanga matatizo, kupima hatari, kukagua mipangilio, kusoma logi na kufuata hatua za tukio kwa utulivu. Wanafunzi pia wanahitaji mpango wazi wenye tarehe kwa toleo sahihi la Security+ ili wasisomee mtihani unaostaafu.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la kitaalamu linaelezwa",
      "Kujilinda tu: mazoezi kwenye kifaa chako mwenyewe na data za kubuni; hakuna kuchunguza wala kujaribu mifumo ya watu wengine",
      "Vifaa: kompyuta moja ya Windows au Mac; baadhi ya mipangilio inahitaji akaunti ya msimamizi (admin), kwa hiyo kompyuta za maktaba huenda zisiionyeshe",
      "Muda: masomo ya dakika 4 hadi 6",
      "Mtihani unabadilika mwishoni mwa 2026: wanafunzi lazima wakague comptia.org kwa toleo, tarehe na bei"
    ],
    prerequisites: "Kuweza kutumia kompyuta na usalama wa msingi wa akaunti. \"Utangulizi wa Usalama wa Mtandao\" na \"Misingi ya Msaada wa TEHAMA (Maandalizi ya CompTIA A+)\" ni vizuri kuzisoma kwanza."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa hali fupi ya usalama", action: "kutambua ni sehemu gani ya CIA triad (usiri, uadilifu au upatikanaji) inayodhurika", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O2", condition: "Ukipewa tishio kwa shirika", action: "kupima hatari yake kwa uwezekano na athari, na kuchagua aina ya kidhibiti cha kuipunguza", standard: "ukitoa sababu ya kiwango na ya kidhibiti" },
    { id: "O3", condition: "Ukitumia kompyuta yako mwenyewe ya Windows au Mac", action: "kukagua na kuandika mipangilio ya masasisho, firewall, antivirus, aina ya akaunti, kufunga skrini na usimbaji fiche wa diski", standard: "kila kipengele kikiwa kimekaguliwa na kila pengo limeandikwa" },
    { id: "O4", condition: "Ukipewa logi fupi ya kuingia", action: "kuweka alama kwenye maingizo yanayotia shaka na kueleza kwa nini kila moja linatia shaka", standard: "ukipata kila jaribio lililoshindwa linalorudiwa na kuingia kwa ajabu kulikofaulu baada yake" },
    { id: "O5", condition: "Ukipewa hali ya tukio la usalama", action: "kuorodhesha hatua za kushughulikia tukio kwa mpangilio na kuandika kitendo kimoja kwa kila hatua", standard: "bila kukosa hatua yoyote na ushahidi ukihifadhiwa" },
    { id: "O6", condition: "Ukitumia kurasa rasmi za CompTIA Security+", action: "kuandika mpango wa kusoma na wa mtihani unaotaja toleo la mtihani na tarehe lengwa", standard: "ukijumuisha kila eneo na uzito wake na muda wa kusoma kwa wiki" }
  ],
  chapters: [
    {
      name: "Sura 1: Kufikiri kama mchambuzi wa usalama",
      lessons: [
        {
          title: "Kazi ya mchambuzi na mtihani wa Security+",
          objectives: ["O6"],
          minutes: 6,
          goal: "Chagua toleo sahihi la mtihani wa Security+ kwa tarehe yako ya mtihani na uorodheshe maeneo yake.",
          text: [
            "Kazi za mwanzo za usalama ni pamoja na mchambuzi wa usalama, mchambuzi wa SOC (kituo cha operesheni za usalama), na msimamizi wa usalama au wa mifumo. Wachambuzi wanaangalia tahadhari (alerts) na logi, wanakagua kwamba mifumo imewekwa kwa usalama, na wanasaidia kushughulikia matukio. Wengi wanaanza katika msaada wa IT na kupanda juu.",
            "CompTIA Security+ inatolewa na CompTIA unapofaulu mtihani mmoja. Tulipokagua Oktoba 2026, mtihani ulikuwa na hadi maswali 90 kwa dakika 90, ya kuchagua jibu na ya kufanya kazi kwa vitendo (performance-based). CompTIA inapendekeza Network+ na kama miaka miwili ya uzoefu wa usalama au usimamizi wa mifumo, lakini inaviorodhesha kama uzoefu unaopendekezwa.",
            "Mtihani unabadilika. Toleo la 7 (SY0-701) linapatikana sasa; mtihani wake wa Kiingereza ulipangwa kustaafu tarehe 11 Juni 2027. Toleo la 8 (SY0-801) lilitarajiwa karibu tarehe 17 Novemba 2026. Kama tarehe yako ya mtihani iko mbali ndani ya 2027, somea V8. Kama utafanya mtihani hivi karibuni, V7 inaweza kufaa. Kagua kurasa rasmi: tarehe zinaweza kubadilika.",
            "Kila toleo lina maeneo matano (domains) yenye uzito wake. Katika yote mawili, operesheni za usalama ndilo eneo kubwa zaidi (kama asilimia 27 hadi 28). Muda wako wa kusoma ufuate uzito huo."
          ],
          steps: ["Fungua ukurasa rasmi wa Security+ na kurasa za mitihani ya V7 na V8.", "Chagua tarehe yako lengwa ya mtihani.", "Chagua toleo litakalopatikana tarehe hiyo.", "Andika msimbo wa mtihani wake, maeneo yake matano na uzito wake.", "Kagua bei ya sasa na njia za kufanya mtihani kwenye tovuti rasmi."],
          words: [["SOC", "security operations center (kituo cha operesheni za usalama): timu inayoangalia mifumo ya shirika kuona mashambulizi."], ["Mchambuzi wa usalama", "mtu anayeangalia, anayekagua na anayeshughulikia matatizo ya usalama."], ["Toleo la mtihani", "aina ya mtihani yenye msimbo wake na mada zake; matoleo ya zamani yanastaafu."], ["Kustaafu", "toleo la mtihani linapoacha kutolewa."]],
          slides: [
            { title: "Kazi za mwanzo za usalama", bullets: ["Mchambuzi wa usalama au wa SOC", "Msimamizi wa usalama au wa mifumo", "Wengi wanaanza katika msaada wa IT"] },
            { title: "Misingi ya Security+ (ilikaguliwa Okt 2026)", bullets: ["Mtihani mmoja, hadi maswali 90, dakika 90", "Kuchagua jibu na kazi za vitendo (performance-based)", "CompTIA ndiyo inayotoa cheti; kozi hii inakuandaa"] },
            { title: "Chagua toleo lako", bullets: ["V7 = SY0-701: Kiingereza kimepangwa kustaafu 11 Juni 2027", "V8 = SY0-801: inatarajiwa karibu 17 Novemba 2026", "Linganisha toleo na tarehe yako ya mtihani"] },
            { title: "Soma kufuata uzito", bullets: ["Maeneo matano kwa kila toleo", "Operesheni za usalama ndilo kubwa zaidi", "Kagua comptia.org kabla ya kujiandikisha"] }
          ],
          sources: [SEC, V7, V8],
          tryIt: "Chagua mwezi lengwa wa mtihani. Ukitumia kurasa rasmi, amua V7 au V8 na uandike sentensi moja kusema kwa nini. Kisha orodhesha maeneo matano ya toleo hilo na uzito wake, na uzungushie duara lililo kubwa zaidi.",
          youCanNow: "kusema mchambuzi wa usalama anayeanza anafanya nini, kuchagua toleo sahihi la Security+ kwa tarehe yako ya mtihani, na kuorodhesha maeneo yake.",
          quickCheck: [
            { objective: "O6", q: "Unapanga kufanya mtihani mwishoni mwa 2027. Unapaswa kusomea toleo gani?", options: ["V7 (SY0-701), kwa sababu ni la zamani zaidi", "Toleo lolote; yote ni sawa", "V8 (SY0-801), kwa sababu V7 ya Kiingereza imepangwa kustaafu Juni 2027", "Hakuna toleo; fanya A+ tu"], answer: 2, why: "Somea toleo litakalokuwa bado linatolewa tarehe ya mtihani wako; kagua kurasa rasmi." },
            { objective: "O6", q: "Nani anatoa cheti cha Security+?", options: ["CompTIA, unapofaulu mtihani", "Kozi hii", "Mwajiri wako", "Tovuti yoyote ya usalama"], answer: 0, why: "CompTIA ndiyo inayotoa Security+; kozi hii inakuandaa kwa mtihani." }
          ]
        },
        {
          title: "CIA triad, vitisho, udhaifu na hatari",
          objectives: ["O1", "O2"],
          minutes: 6,
          goal: "Panga tatizo la usalama kwa CIA triad na upime hatari yake.",
          text: [
            "Usalama unalinda vitu vitatu, vinavyoitwa CIA triad. Usiri (confidentiality): watu sahihi tu ndio wanaoweza kuona data. Uadilifu (integrity): data ni sahihi na haibadilishwi bila ruhusa. Upatikanaji (availability): mifumo na data zinafanya kazi watu wanapozihitaji.",
            "Mifano: kompyuta mpakato iliyoibiwa yenye faili za wateja inadhuru usiri. Mtu anayebadilisha namba za mishahara anadhuru uadilifu. Ransomware inayofunga kila faili, au tovuti iliyozimwa, inadhuru upatikanaji.",
            "Tishio ni kitu kinachoweza kusababisha madhara (mwizi, tapeli, dhoruba). Udhaifu ni upungufu ambao tishio linaweza kuutumia (kompyuta isiyosasishwa, nywila dhaifu, mlango usiofungwa). Hatari ni uwezekano wa madhara kutokea, mara ukubwa wa madhara hayo (athari).",
            "Mara nyingi wachambuzi hupima hatari kwenye jedwali rahisi: uwezekano mdogo, wa kati au mkubwa, na athari ndogo, ya kati au kubwa. Uwezekano mkubwa na athari kubwa huwekwa juu ya orodha."
          ],
          steps: ["Taja kinachoweza kudhurika.", "Uliza: kinadhuru usiri, uadilifu au upatikanaji?", "Taja tishio na udhaifu.", "Pima uwezekano: mdogo, wa kati au mkubwa.", "Pima athari: ndogo, ya kati au kubwa.", "Weka hatari za kubwa-kubwa kwanza."],
          words: [["CIA triad", "usiri, uadilifu na upatikanaji (confidentiality, integrity, availability): malengo matatu ya usalama."], ["Tishio", "kitu au mtu anayeweza kusababisha madhara."], ["Udhaifu", "upungufu ambao tishio linaweza kuutumia."], ["Hatari", "uwezekano wa madhara kutokea na ukubwa wake."], ["Ransomware", "programu hasidi inayofunga faili na kudai malipo."]],
          slides: [
            { title: "CIA triad", bullets: ["Usiri: watu sahihi tu ndio wanaoona", "Uadilifu: inabaki sahihi", "Upatikanaji: inafanya kazi inapohitajika"] },
            { title: "Mifano", bullets: ["Kompyuta mpakato iliyoibiwa yenye faili: usiri", "Namba za mishahara zilizobadilishwa: uadilifu", "Ransomware, tovuti imezimwa: upatikanaji"] },
            { title: "Tishio, udhaifu, hatari", bullets: ["Tishio: kinachoweza kusababisha madhara", "Udhaifu: upungufu wenyewe", "Hatari: uwezekano na athari pamoja"] },
            { title: "Ipime", bullets: ["Uwezekano: mdogo, wa kati, mkubwa", "Athari: ndogo, ya kati, kubwa", "Kubwa na kubwa zinatangulia"] }
          ],
          tryIt: "Kwa biashara ndogo unayoijua (duka la mtaani, ofisi ya kanisa, mapokezi ya kliniki), orodhesha mambo matatu yanayoweza kuharibika. Kwa kila moja, andika sehemu ya CIA inayodhurika, tishio, udhaifu, na kiwango cha uwezekano na athari.",
          youCanNow: "kupanga tatizo la usalama kwa CIA triad na kupima hatari yake kwa uwezekano na athari.",
          quickCheck: [
            { objective: "O1", q: "Mtu anabadilisha kiasi cha pesa kwenye ankara bila ruhusa. Sehemu gani ya CIA triad inadhurika?", options: ["Usiri", "Upatikanaji", "Hakuna", "Uadilifu"], answer: 3, why: "Uadilifu maana yake data inabaki sahihi; mabadiliko bila ruhusa yanauvunja." },
            { objective: "O2", q: "Kompyuta ya ofisini haijasasishwa kwa mwaka mmoja. Kwa lugha ya hatari, masasisho yanayokosekana ni:", options: ["Tishio", "Udhaifu", "Kidhibiti", "Tukio"], answer: 1, why: "Sasisho linalokosekana ni upungufu ambao tishio linaweza kuutumia." }
          ]
        },
        {
          title: "Vidhibiti vya usalama na haki ndogo kabisa",
          objectives: ["O2"],
          minutes: 5,
          goal: "Chagua aina ya kidhibiti cha kupunguza hatari fulani.",
          text: [
            "Kidhibiti (control) ni kitu chochote kinachopunguza hatari. Security+ inapanga vidhibiti kwa njia mbili. Kwa kundi: vya kiufundi (firewall, usimbaji fiche, uthibitishaji wa hatua nyingi), vya kiutawala (sera, tathmini za hatari), vya kiutendaji (mafunzo, walinzi, taratibu ambazo watu wanafuata) na vya kimwili (kufuli, beji, kamera).",
            "Kwa kazi yake: vidhibiti vya kuzuia vinasimamisha shambulio (kufuli, uthibitishaji wa hatua nyingi). Vidhibiti vya kugundua vinaliona (kamera, tahadhari za logi). Vidhibiti vya kurekebisha vinarekebisha baadaye (kurejesha kutoka nakala ya akiba). Vidhibiti vya kuogofya vinakatisha tamaa (bango la onyo). Vidhibiti mbadala vinasimama badala ya kidhibiti kikuu kisipowezekana.",
            "Kanuni muhimu ni haki ndogo kabisa (least privilege): mpe kila mtu ruhusa anayohitaji kwa kazi yake tu, si zaidi. Keshia hahitaji kuingia kwenye mishahara. Akaunti ikitekwa, haki ndogo kabisa inapunguza madhara.",
            "Ulinzi mzuri unatumia tabaka kadhaa, ili moja likishindwa, jingine bado linalinda (ulinzi wa tabaka nyingi)."
          ],
          words: [["Kidhibiti (control)", "kitu chochote kinachopunguza hatari."], ["Kuzuia / kugundua / kurekebisha", "vidhibiti vinavyosimamisha, vinavyoona, au vinavyorekebisha tatizo la usalama."], ["Haki ndogo kabisa (least privilege)", "kumpa kila mtu ruhusa ambayo kazi yake inahitaji tu."], ["Ulinzi wa tabaka nyingi (defense in depth)", "kutumia tabaka kadhaa za ulinzi."], ["Firewall", "chombo kinachoruhusu au kuzuia mawasiliano ya mtandao kwa kufuata kanuni."]],
          slides: [
            { title: "Makundi ya vidhibiti", bullets: ["Kiufundi: firewall, usimbaji fiche, MFA", "Kiutawala: sera, tathmini za hatari", "Kiutendaji: mafunzo, taratibu", "Kimwili: kufuli, beji, kamera"] },
            { title: "Vidhibiti vinafanya nini", bullets: ["Kuzuia: kinasimamisha", "Kugundua: kinaona", "Kurekebisha: kinarekebisha baadaye", "Kuogofya na mbadala"] },
            { title: "Haki ndogo kabisa", bullets: ["Ruhusa ambayo kazi inahitaji tu", "Inapunguza madhara akaunti ikitekwa"] },
            { title: "Ulinzi wa tabaka nyingi", bullets: ["Tabaka kadhaa", "Moja likishindwa, jingine bado linalinda"] }
          ],
          sources: [V7, V8],
          tryIt: "Chukua hatari tatu kutoka Somo la 2. Kwa kila moja, chagua kidhibiti kimoja. Andika kundi lake (kiufundi, kiutawala, kiutendaji au kimwili) na kazi yake (kuzuia, kugundua au kurekebisha). Kisha andika kanuni moja ya haki ndogo kabisa kwa biashara hiyo.",
          youCanNow: "kuchagua kidhibiti kwa hatari, kutaja kundi lake na aina yake, na kutumia haki ndogo kabisa.",
          quickCheck: [
            { objective: "O2", q: "Kamera ya usalama inayorekodi anayeingia ni hasa kidhibiti cha aina gani?", options: ["Cha kugundua", "Cha kurekebisha", "Cha kiutawala", "Mbadala"], answer: 0, why: "Kamera zinaona na kurekodi matukio, kwa hiyo ni vidhibiti vya kugundua (na vya kimwili)." },
            { objective: "O2", q: "Keshia mpya anaomba ruhusa ya kuingia kwenye mfumo wa mishahara. Kwa kufuata haki ndogo kabisa, wewe:", options: ["Unampa ruhusa kamili ya msimamizi ili kuwa salama", "Unampa nywila yako mwenyewe", "Unampa ruhusa tu kama kazi yake inaihitaji kweli", "Unampa kila mtu ruhusa ya kila kitu"], answer: 2, why: "Haki ndogo kabisa inatoa ruhusa ambayo nafasi ya kazi inahitaji tu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kufikiri kama mchambuzi wa usalama",
        questions: [
          { objective: "O1", q: "Tovuti ya kupanga miadi ya kliniki imezimwa kwa siku moja. Sehemu gani ya CIA inadhurika?", options: ["Usiri", "Uadilifu", "Upatikanaji", "Hakuna kati ya hizo"], answer: 2, why: "Watu hawakuweza kutumia mfumo walipouhitaji: upatikanaji." },
          { objective: "O1", q: "Mfanyakazi anatuma kwa barua pepe orodha ya wateja kwa mtu asiye sahihi nje ya kampuni. Sehemu gani ya CIA inadhurika?", options: ["Usiri", "Upatikanaji", "Uadilifu", "Haki ndogo kabisa"], answer: 0, why: "Data ilionekana na mtu ambaye hakupaswa kuiona." },
          { objective: "O2", q: "Hatari gani kwa kawaida inapaswa kushughulikiwa kwanza?", options: ["Uwezekano mdogo, athari ndogo", "Uwezekano mdogo, athari ya kati", "Uwezekano wa kati, athari ndogo", "Uwezekano mkubwa, athari kubwa"], answer: 3, why: "Uwezekano mkubwa na athari kubwa ndiyo hatari nzito zaidi." },
          { objective: "O2", q: "Kurejesha faili kutoka nakala ya akiba baada ya ransomware ni kidhibiti cha aina gani?", options: ["Cha kuogofya", "Cha kurekebisha", "Cha kuzuia", "Cha kiutawala"], answer: 1, why: "Vidhibiti vya kurekebisha vinarekebisha mambo baada ya tukio." },
          { objective: "O6", q: "Katika matoleo yote mawili ya Security+, eneo gani lina uzito mkubwa zaidi?", options: ["Dhana za jumla za usalama", "Usimamizi wa programu ya usalama", "Operesheni za usalama", "Usanifu wa usalama"], answer: 2, why: "Operesheni za usalama ni kama asilimia 27 hadi 28 katika matoleo yote mawili." }
        ]
      }
    },
    {
      name: "Sura 2: Operesheni za usalama kwa vitendo",
      lessons: [
        {
          title: "Kuimarisha kompyuta yako mwenyewe",
          objectives: ["O3"],
          minutes: 6,
          goal: "Kagua na uandike mipangilio mikuu ya usalama kwenye kompyuta yako mwenyewe.",
          text: [
            "Kuimarisha (hardening) maana yake ni kufanya mfumo kuwa mgumu kushambuliwa kwa kuwasha kinga na kuzima kisichohitajika. Wachambuzi wanakagua hili kwenye kompyuta za kampuni kila siku. Fanya mazoezi kwenye kompyuta yako mwenyewe tu.",
            "Kagua vitu sita. Masasisho: yamesakinishwa? Firewall: imewashwa? Antivirus: imewashwa na iko ya kisasa (Microsoft Defender imo ndani ya Windows; Mac zina kinga ya programu hasidi iliyojengwa ndani)? Aina ya akaunti: unatumia akaunti ya kawaida (standard) kwa kazi za kila siku, na ya msimamizi (admin) inapohitajika tu? Kufunga skrini: inajifunga baada ya dakika chache na inahitaji nywila au PIN? Usimbaji fiche wa diski: umewashwa (BitLocker au Device Encryption kwenye kompyuta nyingi za Windows, FileVault kwenye Mac)?",
            "Kwenye Windows, angalia katika Settings kwa Windows Update na Accounts, na ufungue Windows Security kwa firewall na kinga ya virusi. Kwenye Mac, angalia katika System Settings kwa Software Update, Network > Firewall, Users & Groups, Lock Screen, na Privacy & Security > FileVault. Majina ya menyu yanaweza kubadilika kati ya matoleo; tafuta ndani ya Settings usipoyapata.",
            "Ukiwasha usimbaji fiche wa diski, hifadhi kwanza ufunguo wa kurejesha (recovery key) mahali salama nje ya mtandao. Bila huo unaweza kupoteza faili zako. Kama huna uhakika, liandike kama pengo na uombe msaada badala yake."
          ],
          steps: ["Masasisho: kagua na usakinishe.", "Firewall: hakikisha imewashwa.", "Antivirus: hakikisha imewashwa na iko ya kisasa.", "Akaunti: andika kama akaunti yako ya kila siku ni ya kawaida au ya msimamizi.", "Kufunga skrini: iweke ijifunge baada ya dakika chache.", "Usimbaji fiche wa diski: kagua kama umewashwa; hifadhi ufunguo wa kurejesha kabla ya kuuwasha.", "Andika kila tokeo na kila pengo."],
          words: [["Kuimarisha (hardening)", "kufanya mfumo kuwa mgumu kushambuliwa kwa kuwasha kinga na kuondoa kisichohitajika."], ["Usimbaji fiche wa diski", "kuchanganya kila kitu kwenye diski ili mwizi asiweze kukisoma bila ufunguo."], ["Ufunguo wa kurejesha (recovery key)", "msimbo mrefu unaofungua diski iliyosimbwa fiche usipoweza kuingia."], ["Kiwango cha msingi (baseline)", "mipangilio ya kawaida ya usalama ambayo kila kompyuta ya shirika inapaswa kuwa nayo."]],
          slides: [
            { title: "Kuimarisha", bullets: ["Washa kinga", "Zima kisichohitajika", "Kwenye kompyuta yako mwenyewe tu"] },
            { title: "Kagua vitu sita", bullets: ["Masasisho, firewall, antivirus", "Akaunti ya kawaida kwa matumizi ya kila siku", "Kufunga skrini na usimbaji fiche wa diski"] },
            { title: "Mahali pa kuangalia", bullets: ["Windows: Settings na Windows Security", "Mac: System Settings, Privacy & Security", "Majina ya menyu yanabadilika: tumia utafutaji"] },
            { title: "Kuwa makini na usimbaji fiche", bullets: ["Hifadhi kwanza ufunguo wa kurejesha, nje ya mtandao", "Huna uhakika? Liandike kama pengo na uulize"] }
          ],
          sources: [CISA],
          tryIt: "Kwenye kompyuta yako mwenyewe, kagua vitu vyote sita. Tengeneza jedwali lenye safu tatu: mpangilio, ulichokuta, na cha kurekebisha. Hii ni sehemu ya 1 ya kazi yako ya mwisho.",
          youCanNow: "kukagua mipangilio mikuu ya usalama ya kompyuta na kuandika mapengo, kama mchambuzi anavyokagua kiwango cha msingi.",
          quickCheck: [
            { objective: "O3", q: "Kabla ya kuwasha usimbaji fiche wa diski, unapaswa kufanya nini?", options: ["Kuzima firewall", "Kuhifadhi ufunguo wa kurejesha mahali salama nje ya mtandao", "Kufuta faili zako", "Kumpa mtu nywila yako"], answer: 1, why: "Bila ufunguo wa kurejesha unaweza kushindwa kufikia faili zako mwenyewe." },
            { objective: "O3", q: "Unapaswa kutumia akaunti gani kwa kazi za kila siku?", options: ["Akaunti ya msimamizi", "Akaunti ya pamoja isiyo na nywila", "Akaunti ya mgeni yenye faili zako", "Akaunti ya kawaida"], answer: 3, why: "Akaunti ya kawaida inapunguza kile ambacho programu hasidi au makosa yanaweza kubadilisha." }
          ]
        },
        {
          title: "Kusoma logi na kutambua shughuli zinazotia shaka",
          objectives: ["O4"],
          minutes: 6,
          goal: "Weka alama kwenye maingizo yanayotia shaka katika logi ya kuingia na useme kwa nini.",
          text: [
            "Logi ni orodha ya matukio ambayo mfumo unarekodi, kila moja na saa yake. Wachambuzi wanasoma logi za kuingia ili kutambua mashambulizi. Kwenye Windows, Event Viewer inahifadhi logi ya Security (kuiona kunahitaji akaunti ya msimamizi); majaribio ya kuingia yaliyoshindwa yanaonekana kama tukio 4625 na yaliyofaulu kama 4624. Hapa tunatumia logi ya kubuni badala yake.",
            "Logi ya mazoezi (ya kubuni): 02:14:01 FAILED user=jlopez from 203.0.113.50. 02:14:03 FAILED user=jlopez from 203.0.113.50. 02:14:05 FAILED user=jlopez from 203.0.113.50. 02:14:07 FAILED user=jlopez from 203.0.113.50. 02:14:09 SUCCESS user=jlopez from 203.0.113.50. 08:02:30 SUCCESS user=mchen from 10.0.0.12.",
            "Dalili za hatari: majaribio mengi yaliyoshindwa ndani ya sekunde chache (mtu anabahatisha nywila), kisha kufaulu kutoka anwani ileile (huenda amebahatisha sawa). Pia saa za ajabu (2 am, yaani saa 8 usiku, kwa mfanyakazi wa 9 am hadi 5 pm), kuingia kutoka mahali pasipo kawaida, na akaunti moja kuingia kutoka sehemu mbili zilizo mbali kwa muda mfupi.",
            "Kazi yako ni kuona, kurekodi na kuripoti, si kulipiza kisasi. Andika ulichoona, saa, akaunti na anwani, na upeleke taarifa kwa kufuata utaratibu wa timu yako."
          ],
          steps: ["Soma kila mstari: saa, tokeo, akaunti, anwani.", "Tafuta majaribio mengi yaliyoshindwa kwa muda mfupi.", "Tafuta kufaulu mara baada ya kushindwa kutoka anwani ileile.", "Tafuta saa au mahali pa ajabu.", "Andika kila mstari unaotia shaka na kwa nini.", "Ripoti; usijaribu kamwe kuingia kwenye mfumo wa mtu mwingine wewe mwenyewe."],
          words: [["Logi", "orodha ya matukio ambayo mfumo unarekodi, kila moja na saa yake."], ["Event Viewer", "chombo cha Windows cha kusoma logi za mfumo na za usalama."], ["Brute force", "kubahatisha nywila kwa kujaribu chaguo nyingi kwa haraka sana."], ["Kiashiria (indicator)", "dalili katika data kwamba jambo baya huenda linatokea."]],
          slides: [
            { title: "Logi zinasimulia kilichotokea", bullets: ["Kila mstari: saa, tukio, akaunti, anwani", "Windows: Event Viewer, logi ya Security", "4625 = kuingia kumeshindwa, 4624 = kumefaulu"] },
            { title: "Dalili za hatari", bullets: ["Kushindwa mara nyingi ndani ya sekunde", "Kisha kufaulu kutoka anwani ileile", "Saa za ajabu au mahali pa ajabu"] },
            { title: "Katika logi ya mazoezi", bullets: ["Kushindwa 4 kwa jlopez ndani ya sekunde 8 saa 2:14 am", "Kisha kufaulu kutoka anwani ileile", "mchen saa 8:02 am anaonekana kawaida"] },
            { title: "Kazi yako", bullets: ["Ona, rekodi, ripoti", "Usilipize kisasi kamwe wala kuvunja na kuingia"] }
          ],
          tryIt: "Nakili logi ya mazoezi kwenye karatasi. Zungushia duara kila mstari unaotia shaka na uandike kwa nini. Pima hatari (uwezekano na athari) na sehemu ya CIA iliyo hatarini. Itunze kwa sehemu ya 2 ya kazi yako ya mwisho.",
          youCanNow: "kusoma logi ya kuingia, kuweka alama kwenye maingizo yanayotia shaka, na kueleza kwa nini ni muhimu.",
          quickCheck: [
            { objective: "O4", q: "Katika logi ya mazoezi, mstari gani unatia wasiwasi zaidi?", options: ["Kufaulu kwa jlopez saa 02:14:09 mara baada ya kushindwa mara nne", "Kufaulu kwa mchen saa 08:02:30", "Jaribio la kwanza lililoshindwa tu", "Hakuna; kushindwa kuingia ni kawaida kila wakati"], answer: 0, why: "Kufaulu mara baada ya kushindwa haraka kutoka anwani ileile kunaonyesha nywila ilibahatishwa." },
            { objective: "O4", q: "Unakuta dalili za shambulio katika logi. Unafanya nini?", options: ["Unadukua kompyuta ya mshambuliaji kulipiza", "Unaacha hadi asubuhi", "Unafuta logi", "Unarekodi maelezo na kuyaripoti kwa utaratibu wa timu yako"], answer: 3, why: "Wachambuzi wanarekodi na kuripoti; kulipiza ni kinyume cha sheria na kufuta logi kunaharibu ushahidi." }
          ]
        },
        {
          title: "Kushughulikia tukio, na mpango wako wa Security+",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Orodhesha hatua za kushughulikia tukio kwa hali fulani na uandike mpango wa kusoma Security+ wenye tarehe.",
          text: [
            "Tukio (incident) ni jambo la usalama linalosababisha au kutishia madhara. Mashirika yanafuata hatua zilizopangwa ili watu wabaki watulivu. Security+ inatumia: maandalizi, ugunduzi, uchambuzi, kudhibiti kuenea, kuondoa chanzo, kurejesha, na mafunzo tuliyopata.",
            "Kwa kuingia kwa jlopez: maandalizi (timu tayari ina mpango na watu wa kuwasiliana nao); ugunduzi (unaona maingizo ya logi); uchambuzi (thibitisha ni kweli: je, jlopez aliingia saa 2 am (saa 8 usiku)?); kudhibiti kuenea (funga akaunti na umalize vipindi vyake vilivyo wazi); kuondoa chanzo (badilisha nywila, washa uthibitishaji wa hatua nyingi, ondoa chochote ambacho mshambuliaji aliweka); kurejesha (mrudishie jlopez ruhusa salama na uiangalie akaunti); mafunzo tuliyopata (nini kingezuia hili?).",
            "Hifadhi ushahidi: usifute logi wala kufuta kila kitu kwenye kompyuta kabla timu yako haijasema. Andika saa na vitendo unavyoendelea. Ripoti kwa mtu anayetajwa na utaratibu wenu.",
            "Sasa panga mtihani wako. Tumia toleo ulilochagua katika Somo la 1. Weka tarehe lengwa. Yape maeneo makubwa wiki nyingi zaidi. Fanya mazoezi kwa malengo rasmi ya mtihani, maelezo yako ya kuimarisha na ya logi, na majaribio yaliyo hapa. Chagua saa za kila wiki zinazofaa maisha yako. Kabla ya kujiandikisha, kagua bei na njia za kufanya mtihani kwenye ukurasa rasmi, na uliza programu za ajira, za wanajeshi wastaafu au za kurudi katika jamii kuhusu msaada wa gharama."
          ],
          steps: ["Maandalizi: jua mpango na nani wa kumpigia.", "Ugunduzi: ona dalili za hatari.", "Uchambuzi: thibitisha ni kweli na ni mbaya kiasi gani.", "Kudhibiti kuenea: lizuie lisienee.", "Kuondoa chanzo: ondoa kilichosababisha.", "Kurejesha: rudi kwenye hali ya kawaida na uangalie.", "Mafunzo tuliyopata: andika cha kubadilisha.", "Mpango: toleo, tarehe lengwa, maeneo na uzito wake, saa za kila wiki."],
          words: [["Tukio (incident)", "jambo la usalama linalosababisha au kutishia madhara."], ["Kudhibiti kuenea (containment)", "kuzuia tukio lisienee."], ["Kuondoa chanzo (eradication)", "kuondoa kilichosababisha tukio."], ["Ushahidi", "logi, faili na maelezo yanayoonyesha kilichotokea; lazima vihifadhiwe."]],
          slides: [
            { title: "Hatua za kushughulikia tukio", bullets: ["Maandalizi, ugunduzi, uchambuzi", "Kudhibiti kuenea, kuondoa chanzo, kurejesha", "Mafunzo tuliyopata"] },
            { title: "Kisa cha jlopez", bullets: ["Thibitisha na mtumiaji", "Funga akaunti; badilisha nywila; washa MFA", "Rudisha ruhusa na uiangalie akaunti"] },
            { title: "Hifadhi ushahidi", bullets: ["Usifute logi wala kusafisha vifaa mapema", "Andika saa na vitendo unavyoendelea"] },
            { title: "Mpango wako wa Security+", bullets: ["Toleo na tarehe lengwa", "Maeneo na uzito wake; wiki nyingi zaidi kwa makubwa", "Saa za kila wiki; kagua bei kwenye comptia.org"] }
          ],
          sources: [SEC, V7, V8],
          tryIt: "Kazi ya mwisho: unganisha jedwali lako la kuimarisha (Somo la 4), maelezo ya tukio kwa logi ya jlopez yenye athari yake kwa CIA, kiwango cha hatari na kitendo kimoja kwa kila hatua ya kushughulikia tukio, na mpango wako wa Security+ wenye toleo, tarehe lengwa, maeneo na uzito wake, na saa za kila wiki.",
          youCanNow: "kufuata hatua za kushughulikia tukio kwa kisa kinachoonekana halisi na kufuata mpango wako wenye tarehe kuelekea Security+.",
          quickCheck: [
            { objective: "O5", q: "Umethibitisha kwamba akaunti imetekwa. Hatua inayofuata ni ipi?", options: ["Mafunzo tuliyopata", "Kudhibiti kuenea: funga akaunti na umalize vipindi vyake", "Kurejesha", "Maandalizi"], answer: 1, why: "Baada ya ugunduzi na uchambuzi, unadhibiti tukio lisienee." },
            { objective: "O6", q: "Kipi kinafaa kuwa katika mpango wa kusoma Security+?", options: ["Neno \"Security+\" tu", "Orodha ya zana za udukuzi za kujaribu kwa wengine", "Toleo la mtihani, tarehe lengwa, maeneo na uzito wake na saa za kila wiki", "Nywila zako"], answer: 2, why: "Mpango unataja toleo sahihi, tarehe, cha kusoma na lini." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Operesheni za usalama kwa vitendo",
        questions: [
          { objective: "O3", q: "Kipi ni sehemu ya kuimarisha kompyuta?", options: ["Kuzima masasisho", "Kuwasha firewall na kufunga skrini", "Kutumia akaunti ya msimamizi kwa kila kitu", "Kuweka ufunguo wa kurejesha mtandaoni"], answer: 1, why: "Kuimarisha kunawasha kinga kama firewall na kufunga skrini." },
          { objective: "O4", q: "Majaribio kumi ya kuingia yaliyoshindwa kwa akaunti moja ndani ya sekunde tano kutoka anwani ileile kwa uwezekano mkubwa yanamaanisha:", options: ["Mtumiaji alisahau kuchaji simu", "Mawasiliano ya kawaida", "Hitilafu ya printa", "Mtu anabahatisha nywila"], answer: 3, why: "Kushindwa mara nyingi kwa haraka ni dalili ya shambulio la kubahatisha (brute force)." },
          { objective: "O4", q: "Kwenye Windows, chombo gani kinakuwezesha kusoma logi ya Security?", options: ["Event Viewer", "Paint", "Notepad tu", "Kikokotoo"], answer: 0, why: "Event Viewer inaonyesha logi za Windows, ikiwemo logi ya Security." },
          { objective: "O5", q: "Hatua gani inakuja mara baada ya kudhibiti kuenea?", options: ["Ugunduzi", "Maandalizi", "Kuondoa chanzo", "Uchambuzi"], answer: 2, why: "Baada ya kuzuia kuenea, unaondoa kilichosababisha: kuondoa chanzo." },
          { objective: "O5", q: "Wakati wa tukio, kwa nini uhifadhi logi na usifute kila kitu kwenye kompyuta mara moja?", options: ["Logi ni ushahidi wa kilichotokea", "Kufuta ni kinyume cha sheria kila wakati", "Logi zinafanya kompyuta iende haraka", "Haijalishi"], answer: 0, why: "Logi na vifaa ni ushahidi; timu ndiyo inayoamua ni lini ni salama kusafisha." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Usalama wa Mtandao kwa Wanaoanza Kazi (Maandalizi ya CompTIA Security+)",
    questions: [
      { objective: "O6", q: "Msimbo wa mtihani wa Security+ V8 ni upi?", options: ["SY0-701", "220-1201", "SY0-801", "DA0-002"], answer: 2, why: "V8 ni SY0-801; V7 ni SY0-701." },
      { objective: "O6", q: "Kwa nini ukague ukurasa rasmi wa CompTIA kabla ya kujiandikisha?", options: ["Matoleo ya mtihani, tarehe na bei vinaweza kubadilika", "Ndipo mahali pekee penye zana za mazoezi za udukuzi", "Unatoa cheti bure", "Huna haja"], answer: 0, why: "Matoleo yanastaafu na bei zinabadilika; ukurasa rasmi una taarifa za sasa." },
      { objective: "O6", q: "Eneo gani lipewe muda mwingi zaidi wa kusoma katika mpango wa Security+?", options: ["Lililo dogo zaidi", "Operesheni za usalama, lililo kubwa zaidi", "Hakuna; soma bila mpangilio", "Eneo unalolipenda tu"], answer: 1, why: "Eneo kubwa zaidi lina maswali mengi zaidi." },
      { objective: "O1", q: "Ransomware inafunga kila faili ofisini. Sehemu gani ya CIA inaathirika zaidi?", options: ["Usiri", "Uadilifu", "Haki ndogo kabisa", "Upatikanaji"], answer: 3, why: "Watu hawawezi kutumia faili zao: upatikanaji." },
      { objective: "O1", q: "Usiri maana yake ni:", options: ["Mifumo inafanya kazi inapohitajika", "Watu sahihi tu ndio wanaoweza kuona data", "Data ina nakala ya akiba", "Data imechapishwa"], answer: 1, why: "Usiri unaweka data mbali na watu wasiopaswa kuiona." },
      { objective: "O1", q: "Mwanafunzi anabadilisha alama zake katika mfumo wa shule. Sehemu gani ya CIA inadhurika?", options: ["Uadilifu", "Upatikanaji", "Usiri", "Kuogofya"], answer: 0, why: "Data ilibadilishwa bila ruhusa, kwa hiyo si sahihi tena." },
      { objective: "O2", q: "Nywila dhaifu kwenye akaunti ya msimamizi ni:", options: ["Tishio", "Kidhibiti", "Udhaifu", "Ufunguo wa kurejesha"], answer: 2, why: "Ni upungufu ambao mshambuliaji anaweza kuutumia." },
      { objective: "O2", q: "Uthibitishaji wa hatua nyingi wakati wa kuingia ni hasa:", options: ["Kidhibiti cha kurekebisha", "Kidhibiti cha kugundua", "Bango la kuogofya", "Kidhibiti cha kiufundi cha kuzuia"], answer: 3, why: "Unazuia akaunti nyingi zisitekwe kabla haijatokea, kwa kutumia teknolojia." },
      { objective: "O2", q: "Hatari inapimwa kwa:", options: ["Uwezekano na athari", "Ukubwa wa skrini", "Idadi ya kompyuta", "Upya wa ofisi"], answer: 0, why: "Hatari inaunganisha uwezekano wa madhara na ukubwa wake." },
      { objective: "O2", q: "Sera iliyoandikwa inayosema nani anaweza kufikia faili za wateja ni kidhibiti cha kundi gani?", options: ["Kimwili", "Kiutawala", "Kiufundi", "Cha kurekebisha"], answer: 1, why: "Sera na maamuzi ya hatari ni vidhibiti vya kiutawala." },
      { objective: "O3", q: "Chombo gani kimejengwa ndani ya Windows kwa kinga dhidi ya virusi?", options: ["Microsoft Defender ndani ya Windows Security", "Event Viewer", "Paint", "Task Scheduler tu"], answer: 0, why: "Microsoft Defender ni antivirus iliyojengwa ndani ya Windows Security." },
      { objective: "O3", q: "FileVault kwenye Mac inatumika kwa:", options: ["Kucheza muziki", "Kutuma barua pepe", "Usimbaji fiche wa diski", "Kuchapisha"], answer: 2, why: "FileVault inasimba fiche diski ya Mac." },
      { objective: "O3", q: "Unapaswa kufanya mazoezi ya kuimarisha wapi?", options: ["Kwenye kompyuta ya jirani", "Kwenye kompyuta yako mwenyewe", "Kwenye seva ya kazi yako ya zamani", "Kwenye mtandao wowote wa Wi-Fi wa umma"], answer: 1, why: "Fanya mazoezi kwenye vifaa vyako mwenyewe tu au ulivyopewa ruhusa ya maandishi kuvitumia." },
      { objective: "O4", q: "Logi ni nini?", options: ["Orodha ya nywila", "Aina ya virusi", "Kanuni ya firewall", "Orodha ya matukio ambayo mfumo unarekodi, kila moja na saa yake"], answer: 3, why: "Logi zinarekodi matukio pamoja na saa ili wachambuzi waone kilichotokea." },
      { objective: "O4", q: "Kuingia kupi si kwa kawaida zaidi kwa mfanyakazi wa ofisini wa 9 am hadi 5 pm?", options: ["8:55 am kutoka mtandao wa ofisi", "12:30 pm kutoka mtandao wa ofisi", "3:10 am kutoka nchi nyingine", "4:45 pm kutoka mtandao wa ofisi"], answer: 2, why: "Saa za ajabu na mahali pa ajabu ni dalili za hatari." },
      { objective: "O4", q: "Tukio 4625 la Windows linamaanisha:", options: ["Kuingia kumeshindwa", "Kuingia kumefaulu", "Kazi ya printa", "Sasisho la programu"], answer: 0, why: "4625 ni kuingia kulikoshindwa; 4624 ni kuingia kulikofaulu." },
      { objective: "O5", q: "Hatua ya KWANZA ya kushughulikia tukio ni ipi?", options: ["Kurejesha", "Maandalizi", "Kuondoa chanzo", "Mafunzo tuliyopata"], answer: 1, why: "Maandalizi yanakuja kwanza: mipango na watu wa kuwasiliana nao wako tayari kabla ya tukio." },
      { objective: "O5", q: "Kubadilisha nywila na kuondoa kile ambacho mshambuliaji aliweka ni:", options: ["Ugunduzi", "Maandalizi", "Mafunzo tuliyopata", "Kuondoa chanzo"], answer: 3, why: "Kuondoa chanzo kunaondoa kilichosababisha tukio." },
      { objective: "O5", q: "Akaunti ikiwa salama tena, timu inakutana kuuliza nini kingezuia tukio. Hii ni:", options: ["Mafunzo tuliyopata", "Kudhibiti kuenea", "Ugunduzi", "Uchambuzi"], answer: 0, why: "Mafunzo tuliyopata ni hatua ya mwisho: kuboresha ili lisitokee tena." },
      { objective: "O5", q: "Unaona shambulio linalotoka kwenye anwani ya nje. Usifanye nini?", options: ["Kuandika saa", "Kuripoti kwa timu yako", "Kujaribu kuvunja na kuingia kwenye kompyuta ya mshambuliaji", "Kuhifadhi logi"], answer: 2, why: "Kulipiza ni kinyume cha sheria na si kazi ya mchambuzi; rekodi na uripoti." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 5, 6, 8, 10, 13, 14, 16] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Jedwali la kuimarisha", objective: "O3", notYet: "Baadhi ya mipangilio sita haijakaguliwa.", meets: "Mipangilio yote sita imekaguliwa kwenye kompyuta yako mwenyewe, pamoja na matokeo na mapengo.", exceeds: "Kila pengo lina marekebisho na sababu, na mpango wa ufunguo wa kurejesha umeandikwa." },
      { name: "Kusoma logi", objective: "O4", notYet: "Amekosa kushindwa kwa haraka au kufaulu kulikofuata.", meets: "Anaweka alama kwenye kila mstari unaotia shaka na kusema kwa nini.", exceeds: "Pia anataja hali ya kawaida inavyoonekana na data gani zaidi ingethibitisha." },
      { name: "CIA na hatari", objective: "O1", notYet: "Hakuna sehemu ya CIA iliyotajwa, au imetajwa isiyo sahihi.", meets: "Anataja sehemu ya CIA iliyo hatarini na anatoa kiwango cha uwezekano na athari pamoja na sababu.", exceeds: "Anaeleza jinsi hatari ingebadilika kama kidhibiti kingeongezwa." },
      { name: "Vidhibiti", objective: "O2", notYet: "Hakuna kidhibiti, au kidhibiti kisichofaa hatari.", meets: "Anataja angalau kidhibiti kimoja kinachofaa pamoja na kundi lake na aina yake.", exceeds: "Anatumia vidhibiti vya tabaka na kanuni ya haki ndogo kabisa." },
      { name: "Hatua za tukio", objective: "O5", notYet: "Hatua zinakosekana au haziko kwa mpangilio, au ushahidi umeharibiwa.", meets: "Hatua zote saba kwa mpangilio, kila moja na kitendo kimoja, na ushahidi umehifadhiwa.", exceeds: "Anataja nani anaambiwa katika kila hatua na jinsi mafunzo tuliyopata yangebadilisha mpangilio." },
      { name: "Mpango wa kusoma na wa mtihani", objective: "O6", notYet: "Hakuna toleo wala tarehe, au maeneo yanakosekana.", meets: "Anataja V7 au V8 pamoja na sababu, tarehe lengwa, kila eneo na uzito wake na saa za kila wiki.", exceeds: "Anayapa maeneo mazito wiki nyingi zaidi na anataja mahali pa kukagua bei na kupata msaada wa gharama." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaojiandikisha au kufaulu Security+ ndani ya miezi 6 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoomba au kuanza kazi ya usalama, ya SOC au ya IT ndani ya miezi 6",
      "Wanafunzi wanaoripoti kurekebisha angalau pengo moja la usalama nyumbani au kazini ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta moja ya Windows au Mac ambayo mwanafunzi anamiliki au anaruhusiwa kuibadilisha (baadhi ya mipangilio inahitaji akaunti ya msimamizi)",
      "Karatasi na kalamu, au hati, kwa majedwali, maelezo ya tukio na mpango",
      "Kurasa rasmi za CompTIA Security+ V7 na V8",
      "Kama dakika 90 kwa jumla, katika vipindi vifupi, pamoja na muda wa kuendelea kusoma kwa ajili ya mtihani"
    ],
    facilitatorNotes: [
      "Taja kanuni mwanzoni mwa kila kipindi: kujilinda tu, vifaa vyako mwenyewe na data za kubuni tu; kujaribu mifumo ya watu wengine bila ruhusa ya maandishi kunaweza kuwa kosa la jinai.",
      "Kagua kurasa rasmi za Security+ kabla ya kila kundi; tarehe ya kustaafu kwa V7 na ya kuanza kwa V8 zinaweza kubadilika.",
      "Kwenye kompyuta za pamoja za maabara, huenda wanafunzi wasione baadhi ya mipangilio; waruhusu wamalize Somo la 4 nyumbani au kama maonyesho.",
      "Fanya Somo la 6 kama zoezi la mezani: mtu mmoja anasoma logi, na kikundi kinapitia kila hatua ya kushughulikia tukio kwa sauti.",
      "Wakumbushe wanafunzi kwamba kozi hii inawaandaa na haitoi Security+; waelekeze kwa programu za karibu zinazosaidia gharama za mtihani.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};

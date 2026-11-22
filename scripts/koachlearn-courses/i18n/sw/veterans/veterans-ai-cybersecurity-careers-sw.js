"use strict";

// Koach Learn course (Swahili translation of veterans/veterans-ai-cybersecurity-careers.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "veterans-ai-cybersecurity-careers-sw",
  lang: "sw",
  translationOf: "veterans-ai-cybersecurity-careers",
  category: "Veterans (military)",
  name: "Kazi za AI na Usalama wa Mtandao",
  skills: "Kutaja kazi za mwanzo za usalama wa mtandao, Kueleza uzoefu wa usalama wa jeshi, Kupata mafunzo rasmi ya usalama wa mtandao, Kujifunza usalama kwa AI, Kuchunguza barua pepe ya kutiliwa shaka",
  outcome: "kuchagua kazi ya mwanzo ya usalama wa mtandao inayolingana na uzoefu wako wa jeshi, kutumia msaidizi wa AI kwa usalama kujifunza na kukagua barua pepe ya kutiliwa shaka, na kuandika ripoti fupi ya tukio na mistari ya CV inayothibitisha hayo.",
  about: [
    "Wanajeshi wastaafu wengi tayari wanafikiri kama wataalamu wa usalama: ulilinda taarifa, ulifuata kanuni za nani anaruhusiwa kuingia, ulisimama zamu ya ulinzi na uliripoti chochote kisicho cha kawaida. Waajiri wa usalama wa mtandao wanahitaji fikra hiyo hasa.",
    "Katika kozi hii utajifunza kazi kuu za mwanzo za usalama wa mtandao, jinsi AI inavyozibadilisha, jinsi ya kueleza huduma yako ya jeshi kwa maneno ya usalama wa mtandao, mahali pa kupata mafunzo rasmi, na jinsi ya kutumia AI kama mwenzako wa kusoma. Utamaliza kwa kukagua barua pepe ya kutiliwa shaka kama mchambuzi mwanafunzi anavyofanya.",
    "Kila somo linachukua kama dakika tano. Soma, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa mwishoni mwa kila sura na mtihani wa maswali 20 mwishoni mwa kozi. Hakuna udukuzi (hacking): unafanya mazoezi kwa mifano salama ya kubuni tu."
  ],
  finalTask: "Chukua barua pepe ya kutiliwa shaka (halisi kutoka folda yako ya spam, taarifa binafsi zikiwa zimeondolewa, au mfano wa kubuni), tumia msaidizi wa AI kukusaidia kuorodhesha dalili zake za hatari bila kubofya chochote, na uandike ripoti ya tukio ya mistari mitano: kilichofika, dalili za hatari, hatari yenyewe, ulichofanya, na unachopendekeza. Kisha andika mistari miwili ya CV inayounganisha uzoefu wako wa jeshi na kazi ya usalama wa mtandao.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanajeshi wastaafu na wanajeshi wanaojiandaa kuondoka jeshini wanaopenda kazi ya mwanzo ya usalama wa mtandao. Wengi walilinda taarifa, walifuata kanuni za ruhusa ya kuingia, walisimama zamu ya ulinzi au walifanya kazi ya mawasiliano au IT jeshini.",
    startingPoint: "Wanakuja na fikra ya usalama (OPSEC, udhibiti wa ruhusa, kuripoti) na wanaweza kutumia kompyuta na barua pepe. Wengi hawajui majina ya kazi za kiraia za usalama wa mtandao, njia za mafunzo au jinsi ya kueleza huduma yao kwa maneno ya usalama wa mtandao, na wachache wametumia AI kama mwenzao wa kusoma.",
    gap: "Waajiri wa usalama wa mtandao wanahitaji watu wanaoweza kulinda taarifa na kupima majibu ya AI, wakati washambuliaji sasa wanatumia AI kuandika ulaghai unaoaminika. Wanafunzi wanahitaji kuchagua kazi ya mwanzo, kupata mafunzo rasmi, kujifunza kwa AI kwa usalama, kukagua barua pepe ya kutiliwa shaka bila kubofya, na kuonyesha ujuzi wao katika ripoti ya tukio na mistari ya CV.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; maneno ya usalama wa mtandao yanaelezwa",
      "Vifaa: kompyuta ni bora kwa kuweka kipanya juu ya viungo; simu janja inafaa kwa masomo mengi",
      "Usalama: usibofye kamwe viungo vya kutiliwa shaka; usibandike kamwe kumbukumbu halisi za kampuni, nywila au taarifa binafsi kwenye zana ya AI ya umma",
      "Kibali cha usalama (clearance) kinaandikwa tu kwa namna ofisi ya usalama inavyoruhusu",
      "Kiasi cha mafao na orodha za programu hubadilika, kwa hiyo wanafunzi wanakagua va.gov na NICCS wenyewe"
    ],
    prerequisites: "Hakuna. Kozi \"Utangulizi wa AI na Kazi za Baadaye\" inawasaidia wanafunzi wapya kwa wasaidizi wa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa matangazo halisi ya kazi katika eneo lako", action: "kueleza kazi tatu za mwanzo za usalama wa mtandao na jinsi AI inavyozibadilisha", standard: "kwa sentensi moja kwa kila kazi, ukitumia matangazo hayo" },
    { id: "O2", condition: "Ukipewa majukumu ya usalama kutoka huduma yako jeshini", action: "kuandika ujuzi tatu wa usalama wa mtandao ulio nao tayari kwa maneno ya kiraia na kuuoanisha na kazi moja katika NICCS Cyber Career Pathways", standard: "taarifa za kibali cha usalama zikiandikwa tu kama ofisi yako ya usalama inavyoruhusu" },
    { id: "O3", condition: "Kwa kazi ya usalama wa mtandao unayoilenga", action: "kupata njia moja ya mafunzo na kukagua kwenye kurasa rasmi kile VA inachoweza kulipia", standard: "ukithibitisha kuwa programu inakubalika kabla ya kuanza" },
    { id: "O4", condition: "Ukipewa wazo moja la usalama kama CIA triad", action: "kutumia msaidizi wa AI kujifunza wazo hilo na kulieleza tena kwa maneno yako mwenyewe", standard: "ukitumia mifano ya kubuni tu, na AI ikithibitisha maelezo yako" },
    { id: "O5", condition: "Ukipewa barua pepe ya kutiliwa shaka", action: "kuorodhesha dalili zake za hatari na kuchagua jibu salama", standard: "bila kubofya chochote na taarifa binafsi zikibadilishwa kwa vishika-nafasi kabla ya kutumia AI" },
    { id: "O6", condition: "Kwa barua pepe uliyoikagua na huduma yako jeshini", action: "kuandika ripoti ya tukio ya mistari mitano na mistari miwili ya CV inayounganisha huduma yako na kazi ya usalama wa mtandao", standard: "fupi, wazi na ya kweli, ikimalizika na unachopendekeza" }
  ],
  chapters: [
    {
      name: "Sura 1: Njia yako ya kuingia kwenye usalama wa mtandao",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kazi za usalama wa mtandao na jinsi AI inavyozibadilisha",
          minutes: 5,
          goal: "Taja kazi tatu za mwanzo za usalama wa mtandao na useme kila moja inafanya nini kila siku.",
          text: [
            "Usalama wa mtandao (cybersecurity) ni kulinda kompyuta, mitandao na taarifa dhidi ya watu wanaotaka kuziiba, kuzibadilisha au kuziharibu.",
            "Kazi za kawaida za kuanzia ni pamoja na: mchambuzi wa kituo cha operesheni za usalama (SOC), anayefuatilia tahadhari na kukagua kama ni mashambulizi halisi; msaada wa IT wenye majukumu ya usalama, anayeweka akaunti na kutatua matatizo ya ruhusa ya kuingia; na mchambuzi wa utawala, hatari na uzingatiaji (GRC), anayekagua kuwa shirika linafuata kanuni zake za usalama.",
            "Sasa AI inasaidia kupanga tahadhari, kufupisha kumbukumbu (logs) na kugundua shughuli zisizo za kawaida. Washambuliaji nao wanatumia AI, kwa mfano kuandika barua pepe za ulaghai zinazoaminika. Kwa hiyo waajiri wanataka watu wanaoweza kutumia zana za AI na bado kupima kipi ni kweli."
          ],
          words: [["SOC", "security operations center (kituo cha operesheni za usalama): timu inayofuatilia na kujibu mashambulizi."], ["Tahadhari (alert)", "onyo ambalo zana ya usalama inatoa inapoona kitu kisicho cha kawaida."], ["GRC", "governance, risk and compliance (utawala, hatari na uzingatiaji): kuhakikisha shirika linafuata kanuni na sheria zake za usalama."]],
          slides: [
            { title: "Usalama wa mtandao ni nini", bullets: ["Kulinda kompyuta, mitandao na taarifa", "Dhidi ya watu wanaoiba, kubadilisha au kuharibu"] },
            { title: "Kazi tatu za kuanzia", bullets: ["Mchambuzi wa SOC: anakagua tahadhari", "Msaada wa IT wenye majukumu ya usalama: akaunti na ruhusa", "Mchambuzi wa GRC: anakagua kuwa kanuni zinafuatwa"] },
            { title: "AI pande zote mbili", bullets: ["Walinzi: kupanga tahadhari, kufupisha kumbukumbu", "Washambuliaji: kuandika barua pepe za ulaghai zinazoaminika", "Waajiri wanahitaji watu wanaotumia AI na kuipima"] }
          ],
          tryIt: "Tafuta kwenye tovuti ya kazi \"SOC analyst\", \"IT support\" na \"GRC analyst\" katika eneo lako. Kwa kila moja, andika sentensi moja kuhusu kazi inavyofanya, ukitumia matangazo hayo.",
          youCanNow: "kutaja kazi tatu za mwanzo za usalama wa mtandao na kueleza kila moja inafanya nini.",
          quickCheck: [
            { objective: "O1", q: "Usalama wa mtandao unahusu nini?", options: ["Kutengeneza michezo ya video", "Kuuza kompyuta", "Kutengeneza printa tu", "Kulinda kompyuta, mitandao na taarifa"], answer: 3, why: "Usalama wa mtandao unalinda kompyuta, mitandao na taarifa dhidi ya mashambulizi na makosa." },
            { objective: "O1", q: "Umesoma matangazo matatu ya kazi ya mchambuzi wa SOC. Unaandika nini?", options: ["Mshahara wa juu zaidi tu", "Sentensi moja kuhusu kazi inavyofanya kila siku, kutoka kwenye matangazo", "Majina ya waajiri wanaotafuta watu", "Hakuna; matangazo yote ni sawa"], answer: 1, why: "Kueleza kazi ya kila siku kutoka matangazo halisi kunakuonyesha kazi ilivyo kweli." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kueleza huduma yako jeshini kama ujuzi wa usalama wa mtandao",
          minutes: 5,
          goal: "Andika ujuzi tatu wa usalama wa mtandao ulio nao tayari kutoka huduma yako jeshini, kwa maneno ya kiraia.",
          text: [
            "Huenda hujafanya kazi ya usalama wa mtandao, lakini huenda ulifanya misingi yake. OPSEC (usalama wa operesheni) ni kulinda taarifa dhidi ya adui. Kusimama zamu ya ulinzi ni ufuatiliaji. Kuripoti tukio la usalama kwa wakubwa wako ni kujibu matukio. Kudhibiti nani anaingia jengoni ni udhibiti wa ruhusa ya kuingia.",
            "Kama ulikuwa na kibali cha usalama (security clearance), kiandike kwenye CV yako kwa namna ofisi yako ya usalama inavyoruhusu (kwa kawaida kiwango chake na kama bado kinatumika). Waajiri wengi wa usalama wa mtandao wanakithamini.",
            "Tovuti ya NICCS ya Cybersecurity and Infrastructure Security Agency (CISA, shirika la serikali ya Marekani la usalama wa mtandao) ina sehemu ya wanajeshi wastaafu na zana inayoitwa Cyber Career Pathways Tool inayoonyesha kazi za usalama wa mtandao na ujuzi unaohitajika kwa kila moja. Itumie pamoja na My Next Move for Veterans ili kuoanisha namba ya kazi yako ya jeshi."
          ],
          steps: ["Orodhesha tabia tatu za usalama kutoka huduma yako (OPSEC, zamu ya ulinzi, udhibiti wa ruhusa, kuripoti).", "Muulize msaidizi wa AI: \"Translate these military security duties into cybersecurity skills employers use.\" (Geuza majukumu haya ya usalama ya jeshi kuwa ujuzi wa usalama wa mtandao unaotumiwa na waajiri.)", "Linganisha na kazi zilizo kwenye NICCS Cyber Career Pathways Tool.", "Baki na ujuzi tatu ulio wa kweli na rahisi kueleza."],
          words: [["OPSEC", "operations security (usalama wa operesheni): kuweka taarifa muhimu mbali na mpinzani."], ["Udhibiti wa ruhusa (access control)", "kuamua nani anaruhusiwa kuingia mahali, kwenye mfumo au kwenye faili."], ["Kujibu matukio (incident response)", "kile timu inachofanya jambo baya au la kutiliwa shaka linapotokea."], ["NICCS", "National Initiative for Cybersecurity Careers and Studies, tovuti ya CISA ya kazi na mafunzo ya usalama wa mtandao."]],
          slides: [
            { title: "Tayari ulifanya misingi yake", bullets: ["OPSEC = kulinda taarifa", "Zamu ya ulinzi = ufuatiliaji", "Kuripoti kwa wakubwa = kujibu matukio"] },
            { title: "Kibali cha usalama (clearance)", bullets: ["Waajiri wengi wa usalama wa mtandao wanakithamini", "Kiandike kama ofisi yako ya usalama inavyoruhusu"] },
            { title: "Msaada rasmi: NICCS (CISA)", bullets: ["Sehemu ya wanajeshi wastaafu", "Cyber Career Pathways Tool", "Ioanishe na My Next Move for Veterans"] }
          ],
          sources: [{ name: "NICCS, Cybersecurity and Infrastructure Security Agency", url: "https://niccs.cisa.gov/" }, { name: "My Next Move for Veterans (Wizara ya Kazi ya Marekani)", url: "https://www.mynextmove.org/vets/" }],
          tryIt: "Andika majukumu matatu ya usalama kutoka huduma yako mwenyewe. Muombe msaidizi wa AI ayaeleze kwa maneno ya usalama wa mtandao, kisha uyalinganishe na kazi moja kwenye NICCS Cyber Career Pathways Tool.",
          youCanNow: "kueleza uzoefu wako wa usalama jeshini kama ujuzi wa usalama wa mtandao ambao mwajiri anautambua.",
          quickCheck: [
            { objective: "O2", q: "Kusimama zamu ya ulinzi jeshini kunafanana zaidi na kazi gani ya usalama wa mtandao?", options: ["Ufuatiliaji", "Kuuza programu", "Usanifu wa picha", "Kuandika matangazo"], answer: 0, why: "Kuangalia chochote kisicho cha kawaida na kukiripoti ndicho ufuatiliaji wa usalama wa mtandao unachofanya." },
            { objective: "O2", q: "Unataka kuandika kibali chako cha usalama kwenye CV. Unafanya nini?", options: ["Kueleza programu za siri ulizofanyia kazi", "Kuacha huduma yako yote", "Kukiandika tu kama ofisi yako ya usalama inavyoruhusu, kwa kawaida kiwango na hali yake", "Kuiomba AI ikisie jinsi ya kukiandika"], answer: 2, why: "Vibali vinaandikwa tu kama ofisi ya usalama inavyoruhusu, kamwe si na taarifa za siri." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kupata mafunzo rasmi na msaada wa kuyalipia",
          minutes: 5,
          goal: "Pata njia moja ya mafunzo na ukague kwenye kurasa rasmi kile VA inachoweza kulipia.",
          text: [
            "NICCS ina Education and Training Catalog (orodha ya elimu na mafunzo) ambapo unaweza kutafuta kozi za usalama wa mtandao. Matangazo ya kazi yatakuambia cheti gani cha mwanzo waajiri wanataka; CompTIA Security+ ni kimoja kinachoonekana mara nyingi katika matangazo ya kazi za mwanzo, lakini soma matangazo ya eneo lako.",
            "VA (Wizara ya Masuala ya Wanajeshi Wastaafu ya Marekani) inaweza kukurudishia ada za mitihani ya leseni na vyeti kama una mafao ya GI Bill yanayokubalika. Tulipokagua va.gov mwezi Oktoba 2026, kikomo kilikuwa si zaidi ya $2,000 kwa kila mtihani, na kinatumia sehemu ya haki yako ya mafao. Programu ya VA inayoitwa VET TEC 2.0 inalipia mafunzo ya teknolojia ya juu yasiyo ya shahada kama programu za kompyuta, software na sayansi ya taarifa, na nafasi ni chache kila mwaka. Ukurasa wa VET TEC haukutaja usalama wa mtandao kwa jina, kwa hiyo kagua kama programu inakubalika.",
            "Veterans' Employment and Training Service (VETS) ya Wizara ya Kazi inaendesha Transition Assistance Program (programu ya kusaidia kuondoka jeshini) na inawaelekeza wanajeshi wastaafu kwenye msaada wa ajira na mafunzo kazini (apprenticeships)."
          ],
          steps: ["Tafuta kozi ya mwanzo kwenye NICCS Education and Training Catalog.", "Kagua matangazo matano ya kazi kuona cheti kinachoombwa zaidi.", "Soma ukurasa wa ada za mitihani wa va.gov na ukurasa wa VET TEC 2.0.", "Kagua dol.gov/agencies/vets kwa msaada wa kazi na mafunzo kazini."],
          words: [["Kazi ya mwanzo (entry-level)", "kazi ya watu wanaoanza katika fani fulani."], ["Mafunzo kazini (apprenticeship)", "kazi yenye malipo ambapo unajifunza kazini huku ukifanya kazi."]],
          slides: [
            { title: "Pata mafunzo", bullets: ["NICCS Education and Training Catalog", "Matangazo ya kazi yanaonyesha cheti kinachotakiwa"] },
            { title: "Msaada wa kulipia (kagua va.gov)", bullets: ["Ada za mitihani: hadi $2,000 kwa mtihani (Okt 2026)", "VET TEC 2.0: mafunzo ya teknolojia ya juu, nafasi chache", "Kagua kama programu inakubalika kabla ya kuanza"] },
            { title: "Msaada wa kazi", bullets: ["VETS ya Wizara ya Kazi", "Transition Assistance Program", "Mafunzo kazini (apprenticeships)"] }
          ],
          sources: [
            { name: "VA: Ada za mitihani ya leseni na vyeti", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/test-fees/" },
            { name: "VA: VET TEC 2.0", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/" },
            { name: "Wizara ya Kazi ya Marekani, Veterans' Employment and Training Service", url: "https://www.dol.gov/agencies/vets" },
            { name: "NICCS, Cybersecurity and Infrastructure Security Agency", url: "https://niccs.cisa.gov/" }
          ],
          tryIt: "Pata kozi moja ya mwanzo ya usalama wa mtandao kwenye orodha ya NICCS na cheti kinachoombwa zaidi katika matangazo ya kazi ya eneo lako. Kisha fungua ukurasa wa ada za mitihani wa va.gov na uandike kama mafao yako yanakubalika.",
          youCanNow: "kupata njia rasmi ya mafunzo ya usalama wa mtandao na kukagua kile VA inachoweza kusaidia kulipia.",
          quickCheck: [
            { objective: "O3", q: "NICCS ni nini?", options: ["Kambi ya mafunzo ya kulipia", "Tovuti ya bure ya mafunzo na kazi za usalama wa mtandao inayoendeshwa na CISA", "Ulaghai wa kazi", "Fomu ya VA"], answer: 1, why: "NICCS ni tovuti ya CISA yenye orodha ya mafunzo na zana ya njia za kazi." },
            { objective: "O3", q: "Umepata kozi ya usalama wa mtandao unayoipenda. Unakagua nini kabla ya kutegemea VA ikulipie?", options: ["Hakuna; VA inalipa kila kitu", "Kile AI inachosema tu", "Kile rafiki anachosema tu", "Kama programu inakubalika, kwenye ukurasa rasmi wa va.gov"], answer: 3, why: "Masharti na orodha za programu hubadilika, kwa hiyo unathibitisha kwenye va.gov kabla ya kuanza." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Njia yako ya kuingia kwenye usalama wa mtandao",
        questions: [
          { objective: "O1", q: "Mchambuzi wa SOC hufanya nini hasa?", options: ["Anauza kompyuta", "Anaandika sheria", "Anakagua tahadhari za usalama kuona kama ni mashambulizi halisi", "Anatengeneza printa tu"], answer: 2, why: "SOC inafuatilia na kujibu mashambulizi." },
          { objective: "O1", q: "Washambuliaji wanatumiaje AI?", options: ["Kuandika barua pepe za ulaghai zinazoaminika", "Hawaitumii", "Kucheza michezo tu", "Kutengeneza mtandao wako bure"], answer: 0, why: "AI inawasaidia washambuliaji kuandika ulaghai unaoaminika." },
          { objective: "O2", q: "OPSEC jeshini iko karibu zaidi na ujuzi gani wa usalama wa mtandao?", options: ["Kupaka rangi", "Kupika", "Kuendesha gari", "Kulinda taarifa"], answer: 3, why: "OPSEC ni kuweka taarifa mbali na wapinzani." },
          { objective: "O2", q: "Tovuti ipi rasmi ina Cyber Career Pathways Tool?", options: ["Jukwaa la michezo ya video", "NICCS ya CISA", "Tovuti ya manunuzi", "App ya muziki"], answer: 1, why: "NICCS ni tovuti ya CISA ya kazi na mafunzo ya usalama wa mtandao." },
          { objective: "O3", q: "Ukurasa wa VET TEC 2.0 haukutaja usalama wa mtandao kwa jina. Unapaswa kufanya nini?", options: ["Kudhani unalipiwa", "Kukagua kama programu inakubalika kabla ya kuanza", "Kuacha usalama wa mtandao", "Kumuuliza mgeni mtandaoni"], answer: 1, why: "Daima thibitisha kwenye ukurasa rasmi kuwa programu inakubalika." }
        ]
      }
    },
    {
      name: "Sura 2: Kufanya mazoezi kama mchambuzi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kutumia AI kama mwenzako wa kusoma usalama",
          minutes: 5,
          goal: "Tumia msaidizi wa AI kujifunza wazo moja la usalama na ulieleze tena kwa maneno yako mwenyewe.",
          text: [
            "Wazo muhimu katika usalama ni CIA triad (nguzo tatu za usalama): usiri au confidentiality (watu sahihi tu ndio wanaoona taarifa), uadilifu au integrity (taarifa haibadilishwi bila ruhusa) na upatikanaji au availability (mifumo inafanya kazi watu wanapoihitaji).",
            "Muombe msaidizi wa AI aeleze wazo moja kwa mfano wa jeshi, kisha ulieleze tena kwa maneno yako mwenyewe na uiombe AI ikukague. Njia hii ya \"kufundisha tena\" (teach-back) ndiyo inayokuonyesha kuwa umeelewa kweli.",
            "Usibandike kamwe nywila, kumbukumbu halisi za kampuni, taarifa za wateja au kitu chochote kutoka mfumo wa kazini kwenye zana ya AI ya umma. Tumia mifano ya kubuni au iliyosafishwa. Waajiri wengi wana kanuni kuhusu zana zipi za AI zinaruhusiwa."
          ],
          steps: ["Chagua wazo moja, kama CIA triad.", "Uliza: \"Explain this in simple words with a military example.\" (Eleza hili kwa maneno rahisi kwa mfano wa jeshi.)", "Lieleze tena kwa maneno yako mwenyewe.", "Iulize AI: \"Is my explanation right? What did I miss?\" (Maelezo yangu ni sahihi? Nimesahau nini?)", "Tumia mifano ya kubuni tu, kamwe si taarifa halisi."],
          words: [["CIA triad", "confidentiality, integrity na availability (usiri, uadilifu na upatikanaji): malengo matatu ya usalama."], ["Kufundisha tena (teach-back)", "kueleza jambo tena kwa maneno yako mwenyewe ili kuthibitisha umelielewa."], ["Kumbukumbu (log)", "rekodi ya kompyuta ya kilichotokea na lini."]],
          slides: [
            { title: "CIA triad", bullets: ["Usiri: watu sahihi tu ndio wanaoiona", "Uadilifu: haibadilishwi bila ruhusa", "Upatikanaji: inafanya kazi inapohitajika"] },
            { title: "Kufundisha tena (teach-back)", bullets: ["AI inaeleza kwa mfano wa jeshi", "Wewe unalieleza tena", "AI inakagua ulichosahau"] },
            { title: "Usiweke taarifa halisi", bullets: ["Hakuna nywila, kumbukumbu halisi wala taarifa za wateja", "Tumia mifano ya kubuni", "Fuata kanuni za AI za mwajiri wako"] }
          ],
          tryIt: "Muombe msaidizi wa AI aeleze CIA triad kwa mfano wa jeshi. Kisha andika maelezo yako mwenyewe ya sentensi mbili na uiombe ikukague.",
          youCanNow: "kutumia AI kujifunza wazo la usalama na kuthibitisha umelielewa kwa kulifundisha tena.",
          quickCheck: [
            { objective: "O4", q: "Katika CIA triad, usiri (confidentiality) una maana gani?", options: ["Mifumo inawaka kila wakati", "Taarifa haziwezi kubadilishwa", "Watu sahihi tu ndio wanaoweza kuona taarifa", "Kila mtu anaweza kuona taarifa"], answer: 2, why: "Usiri unamaanisha taarifa zinaonwa tu na watu wanaoruhusiwa kuziona." },
            { objective: "O4", q: "Unataka kufanya mazoezi ya wazo la usalama kwa AI. Unatumia mfano upi?", options: ["Mfano wa kubuni", "Kumbukumbu halisi kutoka kazini kwako", "Nywila yako ya kazini", "Barua pepe halisi ya mteja"], answer: 0, why: "Mifano ya kubuni inakuruhusu kufanya mazoezi bila kutoa taarifa halisi za kampuni au za binafsi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kukagua barua pepe ya kutiliwa shaka",
          minutes: 6,
          goal: "Orodhesha dalili za hatari katika barua pepe ya kutiliwa shaka na uamue cha kufanya, bila kubofya chochote.",
          text: [
            "Phishing ni ujumbe bandia unaojaribu kukufanya ubofye kiungo, ufungue faili, au utoe nywila au pesa. Kukagua barua pepe zilizoripotiwa ni kazi ya kawaida ya kwanza kwa wachambuzi wanaoanza.",
            "Dalili za hatari: anwani ya mtumaji hailingani na kampuni, ujumbe unakuharakisha au kukutisha, unaomba nywila, msimbo, malipo au kadi za zawadi, maandishi ya kiungo na anwani yake halisi ni tofauti, au kuna kiambatisho usichokitarajia.",
            "Ili kutumia AI kwa usalama, nakili maandishi ya ujumbe tu, na ubadilishe majina, anwani za barua pepe na namba za akaunti kwa vishika-nafasi kama [jina]. Iombe AI iorodheshe dalili za hatari. Usibofye viungo wala kufungua viambatisho. Weka kipanya juu ya kiungo (kwenye kompyuta) ili uone anwani yake halisi."
          ],
          steps: ["Usibofye viungo wala kufungua viambatisho.", "Angalia anwani halisi ya mtumaji na anwani za viungo.", "Nakili maandishi ya ujumbe tu na ubadilishe taarifa binafsi kwa vishika-nafasi.", "Muulize msaidizi wa AI: \"List the phishing warning signs in this email.\" (Orodhesha dalili za phishing katika barua pepe hii.)", "Amua: iripoti, ifute, au thibitisha na kampuni kwa kutumia namba unayojua ni halisi."],
          words: [["Phishing", "ujumbe bandia unaojaribu kukudanganya ubofye, utoe nywila au utume pesa."], ["Kiambatisho (attachment)", "faili linalotumwa pamoja na barua pepe."], ["Kishika-nafasi (placeholder)", "neno la badala kama [jina] linalotumika badala ya taarifa binafsi halisi."]],
          slides: [
            { title: "Phishing", bullets: ["Ujumbe bandia unaokudanganya", "Unataka ubofye, utoe nywila au pesa"] },
            { title: "Dalili za hatari", bullets: ["Anwani ya mtumaji hailingani", "Unakuharakisha au kukutisha", "Unaomba nywila, msimbo au malipo", "Kiungo cha ajabu au kiambatisho usichokitarajia"] },
            { title: "Kagua kwa usalama ukitumia AI", bullets: ["Usibofye kamwe viungo wala kufungua faili", "Bandika maandishi tu, na vishika-nafasi", "Iombe AI iorodheshe dalili za hatari"] }
          ],
          tryIt: "Tafuta barua pepe ya kutiliwa shaka kwenye folda yako ya spam (au iombe AI iandike ya kubuni). Bila kubofya chochote, orodhesha dalili zake za hatari wewe mwenyewe, kisha uiulize AI na mlinganishe orodha.",
          youCanNow: "kutambua dalili za hatari za barua pepe ya phishing na kuikagua kwa usalama kwa msaada wa AI.",
          quickCheck: [
            { objective: "O5", q: "Phishing ni nini?", options: ["Njia salama ya kushiriki faili", "Aina ya antivirus", "Sasisho la usalama", "Ujumbe bandia unaokudanganya ubofye au utoe taarifa"], answer: 3, why: "Jumbe za phishing zinajifanya ni halisi ili ubofye au utoe taarifa." },
            { objective: "O5", q: "Barua pepe inasema \"Akaunti yako imefungwa, bofya hapa sasa hivi\". Hatua yako ya kwanza salama ni ipi?", options: ["Kubofya uone kama ni kweli", "Usibofye; kagua mtumaji na uweke kipanya juu ya kiungo uone anwani halisi", "Kujibu kwa nywila yako", "Kuituma kwa kila mtu"], answer: 1, why: "Unakagua bila kubofya: mtumaji, anwani halisi ya kiungo na shinikizo la kuchukua hatua haraka." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuandika ripoti ya tukio na kusimulia hadithi yako",
          minutes: 5,
          goal: "Andika ripoti ya tukio ya mistari mitano na mistari miwili ya CV inayounganisha huduma yako na kazi ya usalama wa mtandao.",
          text: [
            "Wachambuzi huandika ripoti fupi ili wengine wachukue hatua. Ripoti rahisi ya tukio ya mistari mitano ina: kilichofika, dalili za hatari, hatari yenyewe, ulichofanya, na unachopendekeza. Ni kama ripoti ya SALUTE au spot report ya jeshi: wazi, fupi na ya kweli.",
            "CV yako inapaswa kuunganisha huduma yako na kazi ya usalama wa mtandao kwa vitendo na matokeo, kwa mfano: \"Enforced OPSEC and access control for a 120-person unit; completed [course] in network security, 2026.\" (Nilisimamia OPSEC na udhibiti wa ruhusa kwa kikosi cha watu 120; nilimaliza [kozi] ya usalama wa mitandao, 2026.)",
            "Tumia AI kuboresha maneno yako, lakini kila mstari lazima uwe wa kweli. Katika usaili, simulia hadithi moja fupi ya wakati uliona kitu kibaya na ukakiripoti."
          ],
          steps: ["Andika mistari mitano: kilichofika, dalili za hatari, hatari, hatua, pendekezo.", "Kila mstari uwe mfupi na wa kweli.", "Andika mistari miwili ya CV inayounganisha huduma yako na ujuzi wa usalama wa mtandao.", "Muombe msaidizi wa AI aiboreshe iwe wazi zaidi, kisha ukague kuwa kila neno ni la kweli."],
          words: [["Ripoti ya tukio (incident note)", "ripoti fupi iliyoandikwa kuhusu tukio la usalama na kilichofanywa."], ["Pendekezo", "kile unachoshauri kifanyike baadaye."]],
          slides: [
            { title: "Ripoti ya tukio ya mistari mitano", bullets: ["Kilichofika", "Dalili za hatari na hatari yenyewe", "Ulichofanya", "Unachopendekeza"] },
            { title: "Kama spot report ya jeshi", bullets: ["Wazi, fupi, ya kweli", "Wengine wanaweza kuchukua hatua"] },
            { title: "Hadithi yako kwenye CV", bullets: ["Kitendo jeshini + ujuzi wa usalama wa mtandao + matokeo", "AI inaweza kuiboresha; kila neno lazima liwe la kweli"] }
          ],
          tryIt: "Kazi ya mwisho: andika ripoti ya tukio ya mistari mitano kwa barua pepe uliyoikagua katika Somo la 5, kisha andika mistari miwili ya CV inayounganisha uzoefu wako wa jeshi na kazi ya usalama wa mtandao.",
          youCanNow: "kukagua barua pepe ya kutiliwa shaka kama mchambuzi anayeanza, kuiripoti kwa uwazi, na kuonyesha huduma yako jeshini kama uzoefu wa usalama wa mtandao.",
          quickCheck: [
            { objective: "O6", q: "Ripoti ya tukio ya mistari mitano inamalizika na nini?", options: ["Unachopendekeza", "Maoni yako kuhusu mtumaji", "Utani", "Maandishi yote ya barua pepe"], answer: 0, why: "Ripoti inamalizika na pendekezo lako ili msomaji ajue cha kufanya baadaye." },
            { objective: "O6", q: "Mstari upi wa CV unaunganisha huduma na kazi ya usalama wa mtandao vizuri zaidi?", options: ["\"Nilifanya mambo ya usalama jeshini\"", "\"Nilifanya kazi kwa bidii\"", "\"Nilisimamia udhibiti wa ruhusa kwa kikosi cha watu 90; nilimaliza kozi ya usalama wa mitandao, 2026\"", "\"Nina kibali cha usalama; niulize kuhusu misheni\""], answer: 2, why: "Unaonyesha jukumu halisi la usalama, ukubwa na mafunzo, kwa maneno ya kiraia." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kufanya mazoezi kama mchambuzi",
        questions: [
          { objective: "O4", q: "Katika CIA triad, \"uadilifu\" (integrity) una maana:", options: ["Taarifa ni za bure", "Mifumo ni ya haraka kila wakati", "Mameneja tu ndio wanaoweza kuingia", "Taarifa haibadilishwi bila ruhusa"], answer: 3, why: "Uadilifu unahusu taarifa kubaki sahihi bila kubadilishwa." },
          { objective: "O5", q: "Ni kitu gani USICHOPASWA kamwe kubandika kwenye zana ya AI ya umma?", options: ["Kumbukumbu halisi ya kampuni au nywila", "Mfano wa kubuni", "Swali la jumla", "Maneno \"CIA triad\""], answer: 0, why: "Taarifa halisi na nywila lazima zibaki siri." },
          { objective: "O5", q: "Barua pepe inakuharakisha na kuomba msimbo uliotumwa kwenye simu yako. Hii ni:", options: ["Kawaida", "Nafasi ya kazi", "Dalili ya hatari ya phishing", "Sasisho la mfumo"], answer: 2, why: "Kuharakisha na kuomba msimbo ni dalili za kawaida za phishing." },
          { objective: "O5", q: "Hatua ya kwanza salama kwa kiungo cha kutiliwa shaka ni ipi?", options: ["Kukibofya uone", "Kujibu na kuuliza", "Kukituma kwa kila mtu", "Usibofye; kagua anwani halisi"], answer: 3, why: "Kubofya kunaweza kuambukiza kifaa au kuiba taarifa." },
          { objective: "O6", q: "Ripoti nzuri ya tukio ni:", options: ["Ndefu na yenye hisia", "Kisio tu", "Fupi, wazi na ya kweli", "Inatumwa kwa mshambuliaji"], answer: 2, why: "Wengine wanahitaji ukweli ulio wazi ili wachukue hatua." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kazi za AI na Usalama wa Mtandao",
    questions: [
      { objective: "O1", q: "Usalama wa mtandao unahusu:", options: ["Kutengeneza michezo ya video", "Kulinda kompyuta, mitandao na taarifa", "Kuuza simu", "Kubuni nembo"], answer: 1, why: "Unalinda mifumo na taarifa dhidi ya washambuliaji." },
      { objective: "O1", q: "Mchambuzi wa GRC hasa:", options: ["Anakagua kuwa shirika linafuata kanuni zake za usalama", "Anatengeneza magari", "Anaandika muziki", "Anasambaza vifurushi"], answer: 0, why: "Utawala, hatari na uzingatiaji unahusu kanuni kufuatwa." },
      { objective: "O1", q: "Walinzi wanatumiaje AI?", options: ["Kuchukua nafasi ya watu wote", "Kutuma barua pepe za ulaghai", "Kupanga tahadhari na kufupisha kumbukumbu", "Hawaitumii kamwe"], answer: 2, why: "AI inawasaidia walinzi kushughulikia taarifa nyingi." },
      { objective: "O1", q: "Kwa nini waajiri wanataka watu wanaoweza kupima majibu ya AI?", options: ["AI inaweza kukosea na washambuliaji wanaitumia pia", "AI haikosei kamwe", "Ni sheria", "AI haiwezi kusoma"], answer: 0, why: "Busara ya binadamu inanasa makosa ya AI na ulaghai uliotengenezwa na AI." },
      { objective: "O2", q: "Kusimama zamu ya ulinzi jeshini kunafanana zaidi na kazi gani ya usalama wa mtandao?", options: ["Kuandika programu za michezo", "Kuuza", "Kupaka rangi", "Ufuatiliaji"], answer: 3, why: "Kuangalia chochote kisicho cha kawaida ni ufuatiliaji." },
      { objective: "O2", q: "Kuripoti tatizo kwa wakubwa wako jeshini ni kama:", options: ["Masoko", "Kujibu matukio", "Usafirishaji", "Kuajiri"], answer: 1, why: "Kujibu matukio kunaanza kwa kuripoti kilichotokea." },
      { objective: "O2", q: "Unapaswa kuandikaje kibali cha usalama kwenye CV?", options: ["Kuweka taarifa zote mtandaoni", "Kama ofisi yako ya usalama inavyoruhusu, kwa kawaida kiwango na hali yake", "Usikitaje kamwe", "Kubuni kimoja"], answer: 1, why: "Fuata mwongozo wa ofisi yako ya usalama." },
      { objective: "O3", q: "NICCS inaendeshwa na:", options: ["Kampuni ya simu", "Kampuni ya michezo ya video", "Benki", "CISA, Cybersecurity and Infrastructure Security Agency"], answer: 3, why: "NICCS ni tovuti ya CISA ya kazi na mafunzo ya usalama wa mtandao." },
      { objective: "O3", q: "Unapata wapi cheti cha mwanzo ambacho waajiri wanakitaka zaidi?", options: ["Matangazo halisi ya kazi katika eneo lako", "Tangazo la kubahatisha", "Kurusha sarafu", "Kitabu cha zamani"], answer: 0, why: "Matangazo ya kazi yanaorodhesha kile waajiri wanachoomba." },
      { objective: "O3", q: "Kwa mujibu wa va.gov mwezi Oktoba 2026, VA inarudisha ada za mtihani hadi:", options: ["Bila kikomo", "$50 kwa mtihani", "$2,000 kwa mtihani", "$10,000 kwa mtihani"], answer: 2, why: "Ukurasa ulisema si zaidi ya $2,000 kwa kila mtihani." },
      { objective: "O3", q: "Shirika gani la Wizara ya Kazi linawasaidia wanajeshi wastaafu kupata kazi?", options: ["Ofisi ya Sensa", "Shirika la Posta", "NASA", "VETS, Veterans' Employment and Training Service"], answer: 3, why: "VETS inaendesha programu za ajira za wanajeshi wastaafu, pamoja na TAP." },
      { objective: "O4", q: "Katika CIA triad, \"upatikanaji\" (availability) una maana:", options: ["Taarifa hubadilishwa mara nyingi", "Taarifa ni siri", "Mifumo inafanya kazi watu wanapoihitaji", "Mtu yeyote anaweza kuingia"], answer: 2, why: "Upatikanaji unahusu mifumo kufanya kazi inapohitajika." },
      { objective: "O4", q: "Kufundisha tena (teach-back) ni nini?", options: ["Kunakili jibu", "Kueleza wazo kwa maneno yako mwenyewe ili kuthibitisha umelielewa", "Kumwomba mtu mwingine asome", "Kuruka somo"], answer: 1, why: "Kulieleza tena kunaonyesha uelewa wa kweli." },
      { objective: "O4", q: "Kipi ni salama kutumia unapofanya mazoezi na AI?", options: ["Mfano wa kubuni", "Kumbukumbu halisi za mwajiri wako", "Rekodi za wateja", "Nywila yako"], answer: 0, why: "Mifano ya kubuni inalinda taarifa halisi." },
      { objective: "O5", q: "Phishing ni:", options: ["Aina ya firewall", "Zana ya usalama", "Ujumbe bandia unaokudanganya ubofye au utoe taarifa", "Jina la kazi"], answer: 2, why: "Phishing inawadanganya watu watoe ruhusa ya kuingia au pesa." },
      { objective: "O5", q: "Kipi ni dalili ya hatari ya phishing?", options: ["Anwani ya mtumaji hailingani na kampuni", "Ujumbe kutoka kwa mfanyakazi mwenzako unayemjua kuhusu chakula cha mchana", "Jarida ulilojiandikisha kupokea", "Kikumbusho cha kalenda ulichoweka"], answer: 0, why: "Anwani ya mtumaji isiyolingana ni dalili ya kawaida." },
      { objective: "O5", q: "Kabla ya kubandika barua pepe kwenye AI, unapaswa:", options: ["Kufungua kiambatisho", "Kuongeza nywila yako", "Kubofya viungo vyote", "Kubadilisha majina, anwani za barua pepe na namba kwa vishika-nafasi"], answer: 3, why: "Vishika-nafasi vinazuia taarifa binafsi zisiingie kwenye AI." },
      { objective: "O5", q: "Kwenye kompyuta, unaonaje kiungo kinakwenda wapi kweli?", options: ["Kukibofya", "Kuweka kipanya juu yake bila kubofya", "Kumjibu mtumaji", "Kuchapisha barua pepe"], answer: 1, why: "Kuweka kipanya juu ya kiungo kunaonyesha anwani halisi kwa usalama." },
      { objective: "O6", q: "Ripoti ya tukio ya mistari mitano inamalizika na:", options: ["Utani", "Unachopendekeza", "Nywila yako", "Kiungo cha kubofya"], answer: 1, why: "Pendekezo linawaambia wengine cha kufanya baadaye." },
      { objective: "O6", q: "Mstari upi wa CV ni imara zaidi?", options: ["\"Mchapakazi.\"", "\"Hodari wa kompyuta.\"", "\"Napenda usalama wa mtandao.\"", "\"Nilisimamia OPSEC na udhibiti wa ruhusa kwa kikosi cha watu 120; nilimaliza kozi ya usalama wa mitandao, 2026.\""], answer: 3, why: "Unaonyesha kitendo, ukubwa na mafunzo." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 2, 4, 8, 11, 12, 14, 17, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Dalili za hatari zimepatikana", objective: "O5", notYet: "Dalili za hatari chini ya tatu, au mwanafunzi alibofya kiungo.", meets: "Angalau dalili tatu za hatari zimeorodheshwa bila kubofya chochote.", exceeds: "Mwanafunzi alipata dalili ambayo AI iliikosa, au AI ilipata moja aliyoikosa, na anaweza kuieleza." },
      { name: "Matumizi salama ya AI", objective: "O4", notYet: "Majina halisi, anwani za barua pepe au namba zilibandikwa kwenye AI.", meets: "Taarifa binafsi zilibadilishwa kwa vishika-nafasi, au mfano wa kubuni ulitumika.", exceeds: "Mwanafunzi anaeleza taarifa zipi aliziondoa na kwa nini." },
      { name: "Ripoti ya tukio", objective: "O6", notYet: "Mistari inakosekana, au kuna maoni badala ya ukweli.", meets: "Mistari mitano mifupi ya kweli: kilichofika, dalili za hatari, hatari, ulichofanya, unachopendekeza.", exceeds: "Pendekezo linataja hatua inayofuata iliyo wazi kwa timu, kama kuripoti au kumzuia mtumaji." },
      { name: "Mistari ya CV", objective: "O2", notYet: "Mistari haiko wazi au ina taarifa za siri.", meets: "Mistari miwili inayounganisha jukumu halisi la usalama jeshini na kazi ya usalama wa mtandao kwa maneno ya kiraia.", exceeds: "Mistari inatumia maneno kutoka kazi ya NICCS pathway au matangazo halisi ya kazi." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaojiandikisha katika kozi au cheti cha usalama wa mtandao ndani ya siku 60 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoomba kazi ya mwanzo ya usalama wa mtandao au ya msaada wa IT ndani ya siku 90",
      "Wanafunzi wanaoripoti kutambua na kuripoti barua pepe ya phishing nyumbani au kazini"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye intaneti (ili kuweka kipanya juu ya viungo), au simu janja",
      "Msaidizi wa AI wa bure: ChatGPT, Microsoft Copilot au Google Gemini",
      "Tovuti za bure za NICCS (CISA) na va.gov, na matangazo ya kazi za usalama wa mtandao ya eneo lako",
      "Barua pepe ya kutiliwa shaka ya kubuni, au moja kutoka folda ya spam ya mwanafunzi taarifa binafsi zikiwa zimeondolewa",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Toa barua pepe za phishing za kubuni kwa darasa ili hakuna mtu anayehitaji kufungua jumbe halisi za kutiliwa shaka.",
      "Rudia kanuni: usibofye kamwe kiungo cha kutiliwa shaka, na usibandike kamwe kumbukumbu halisi, nywila au taarifa binafsi kwenye AI ya umma.",
      "Wakumbushe wanafunzi wenye vibali vya usalama kufuata mwongozo wa ofisi yao ya usalama kuhusu jinsi ya kuviandika.",
      "Pima ripoti ya tukio na mistari ya CV kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati.",
      "Waelekeze wanafunzi kwa VETS, American Job Centers na NICCS kwa hatua zinazofuata."
    ]
  }
};

"use strict";

// Koach Learn course (Swahili translation of seniors/seniors-estate-planning-wills.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "seniors-estate-planning-wills-sw",
  lang: "sw",
  translationOf: "seniors-estate-planning-wills",
  category: "Seniors and Technology",
  name: "Kupanga Mirathi na Wosia",
  skills: "Kujua wosia unafanya nini, Kukagua wanufaika wako, Kuelewa hati ya uwakilishi (power of attorney) na maagizo ya matibabu, Kuorodhesha unachomiliki na unachodaiwa, Kujiandaa kwa wakili au msaada wa kisheria, Kupanga na kuhifadhi karatasi zako",
  outcome: "kuandaa na kupanga mpango wako wa mirathi: orodha ya unachomiliki na unachodaiwa, ukaguzi wa wanufaika wako, watu unaotaka kuwataja, maswali yako kwa wakili au msaada wa kisheria, na barua fupi iliyo wazi inayoiambia familia yako karatasi zako muhimu ziko wapi.",
  about: [
    "Kozi hii ni kwa wazee wanaotaka kurahisisha mambo kwa familia zao, na kwa watoto wazima na wajukuu wanaowasaidia. Huhitaji kuwa tajiri: mtu yeyote mwenye akaunti ya benki, nyumba, gari, pensheni, mnyama kipenzi au wajukuu wadogo anaowalea anaweza kufaidika na mpango.",
    "Utajifunza wosia, wanufaika, hati ya uwakilishi (power of attorney) na maagizo ya matibabu vinafanya nini, kisha utaandaa orodha na maamuzi ambayo wakili atakuuliza, na kupanga kila kitu ili watu sahihi wakipate.",
    "Kila somo linachukua kama dakika tano na linaisha na kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Sheria za wosia na hati hizi ni tofauti katika kila jimbo la Marekani na katika kila nchi. Kozi hii inakusaidia kujiandaa; ili hati ziwe halali kisheria, mwone wakili au msaada wa kisheria wa bure mahali unapoishi."
  ],
  finalTask: "Tengeneza faili lako la mpango wa mirathi: (1) orodha ya unachomiliki na unachodaiwa; (2) ukaguzi wa mnufaika kwa kila akaunti au bima yenye mnufaika; (3) watu ambao ungewataja kama msimamizi wa mirathi, wakala wa fedha na wakala wa matibabu, na mbadala kwa kila mmoja; (4) angalau maswali matano kwa wakili au msaada wa kisheria; (5) barua ya ukurasa mmoja ya \"karatasi zangu ziko wapi\" kwa familia yako. Kisha tafuta mahali pamoja karibu nawe panapotoa msaada wa kisheria.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wazee, na wanafamilia wanaowasaidia, ambao hawajaandaa mpango wa mirathi au wana mpango uliopitwa na wakati. Baadhi wanalea wajukuu; wengi wana bima ya maisha, akaunti za kustaafu au nyumba.",
    startingPoint: "Wanajua kwamba wosia upo, lakini wengi hawana wosia, hawajawahi kukagua fomu zao za wanufaika, na hawajui hati ya uwakilishi au maagizo ya matibabu yanafanya nini. Mara nyingi karatasi zimetawanyika ndani ya nyumba.",
    gap: "Bila mpango, sheria ndiyo inaamua nani anarithi, fomu za zamani za wanufaika zinaweza kupeleka pesa kwa mtu asiye sahihi, na familia huenda zikalazimika kwenda mahakamani ikiwa mtu hawezi kujiamulia. Kuandaa orodha, watu na maswali, na kupanga karatasi, kunaipunguzia familia msongo wa mawazo na gharama, na kunafanya ziara kwa wakili iwe ya haraka na nafuu zaidi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi, sentensi fupi na hatua kubwa na rahisi",
      "Vifaa: karatasi na faili vinatosha; simu au kompyuta inasaidia kutafuta msaada wa kisheria",
      "Muda: kama dakika 5 kwa kila somo kwa mwendo wa taratibu, pamoja na muda wa kukusanya karatasi",
      "Sheria ni tofauti kwa jimbo na nchi; kozi inaandaa, na wakili au msaada wa kisheria unafanya hati ziwe halali",
      "Faragha: tarakimu nne za mwisho tu za namba za akaunti, hakuna nywila, na hakuna taarifa binafsi katika zana za AI"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa maneno ya msingi ya kupanga mirathi", action: "kueleza wosia unafanya nini, msimamizi wa mirathi anafanya nini na nini kinaweza kutokea bila wosia", standard: "kwa maneno yako mwenyewe, ukipata angalau maswali 4 kati ya 5 sahihi" },
    { id: "O2", condition: "Ukipewa bima yako ya maisha, akaunti za kustaafu na za benki", action: "kukagua nani ametajwa kama mnufaika na mbadala katika kila moja", standard: "ukiweka alama kwenye kila fomu iliyopitwa na wakati" },
    { id: "O3", condition: "Ukipewa watu walio katika maisha yako", action: "kuchagua msimamizi wa mirathi, wakala wa fedha na wakala wa matibabu, na mbadala kwa kila mmoja", standard: "ukichagua watu waaminifu, wanaopatikana na watakaofuata matakwa yako" },
    { id: "O4", condition: "Ukitumia karatasi au faili la siri", action: "kuorodhesha unachomiliki na unachodaiwa", standard: "ukionyesha tarakimu nne za mwisho tu za namba yoyote na bila nywila" },
    { id: "O5", condition: "Kabla ya kukutana na wakili au msaada wa kisheria", action: "kupata chanzo cha msaada wa kisheria karibu nawe na kuandika angalau maswali matano yaliyo wazi", standard: "ukijumuisha gharama itakuwa kiasi gani na nini kimejumuishwa" },
    { id: "O6", condition: "Ukipewa karatasi zako muhimu", action: "kuzipanga katika faili moja na kuandika barua ya \"karatasi zangu ziko wapi\" kwa familia yako", standard: "ukiishiriki na watu uliowataja" }
  ],
  chapters: [
    {
      name: "Sura 1: Zijue hati",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kupanga mirathi ni nini, na wosia unafanya nini",
          minutes: 5,
          goal: "Eleza wosia unafanya nini na nini kinaweza kutokea bila wosia.",
          text: [
            "Kupanga mirathi ni kuamua mapema nini kitatokea kwa pesa na mali zako utakapofariki, na nani atakufanyia maamuzi ukiugua sana kiasi cha kushindwa kuamua. Mirathi yako (estate) ni kila kitu unachomiliki, ukitoa unachodaiwa.",
            "Wosia ni hati ya kisheria inayosema nani atapata mali zako, na inamtaja msimamizi wa mirathi (executor): mtu anayetekeleza matakwa yako, analipa bili za mwisho na kugawa kinachobaki. Katika maeneo mengi wosia unaweza pia kumtaja mlezi wa watoto walio chini ya miaka 18 unaowalea, kama wajukuu unaowalea.",
            "Ukifariki bila wosia, sheria ya mahali unapoishi ndiyo inaamua nani anarithi, na mahakama inachagua nani atashughulikia mirathi yako. Matokeo yanaweza kuwa si yale uliyotaka.",
            "Kila jimbo na nchi ina sheria zake ili wosia uwe halali, kama jinsi unavyosainiwa na kushuhudiwa. Wosia usiofuata sheria hizo huenda usikubalike. Ndiyo maana kozi hii inakusaidia kujiandaa, na wakili au msaada wa kisheria unakusaidia kuufanya uwe halali."
          ],
          words: [["Mirathi (estate)", "kila kitu unachomiliki, kama pesa, nyumba, gari na mali, ukitoa unachodaiwa."], ["Wosia", "hati ya kisheria inayosema nani atapata mali zako baada ya kufariki na nani atatekeleza matakwa yako."], ["Msimamizi wa mirathi (executor)", "mtu aliyetajwa katika wosia kutekeleza matakwa yako na kumaliza mambo ya mirathi yako."], ["Mlezi", "mtu aliyetajwa kumtunza mtoto aliye chini ya miaka 18."]],
          slides: [
            { title: "Kupanga mirathi ni kuamua mapema", bullets: ["Nini kitatokea kwa vitu vyako utakapofariki", "Nani atakuamulia ukiwa mgonjwa sana"] },
            { title: "Wosia", bullets: ["Unasema nani atapata mali zako", "Unamtaja msimamizi wa mirathi", "Unaweza kumtaja mlezi wa watoto unaowalea"] },
            { title: "Bila wosia", bullets: ["Sheria ya mahali unapoishi inaamua", "Mahakama inachagua nani atashughulikia", "Huenda isiwe kile ulichotaka"] },
            { title: "Sheria ni tofauti kila mahali", bullets: ["Kila jimbo na nchi ina sheria zake", "Jiandae hapa; ufanye halali kwa wakili au msaada wa kisheria"] }
          ],
          sources: [{ name: "LawHelp.org: pata msaada na taarifa za kisheria za bure katika jimbo lako", url: "https://www.lawhelp.org/" }],
          tryIt: "Andika vitu vitatu muhimu zaidi kwako kuwaachia wengine, kama nyumba, akiba, Biblia ya familia, gari au utunzaji wa mnyama kipenzi, na nani ungetaka apate kila kimoja. Hii ni orodha yako binafsi, si hati ya kisheria.",
          youCanNow: "kueleza wosia na msimamizi wa mirathi ni nini, na kwa nini wosia lazima ufuate sheria za mahali unapoishi.",
          quickCheck: [
            { objective: "O1", q: "Msimamizi wa mirathi (executor) ni nani?", options: ["Mtu anayetekeleza matakwa yaliyo katika wosia wako", "Hakimu", "Akaunti ya benki", "Daktari wako"], answer: 0, why: "Msimamizi wa mirathi anatekeleza matakwa yako, analipa bili za mwisho na kugawa kinachobaki." },
            { objective: "O1", q: "Rafiki yako anasema, \"Sihitaji wosia; familia yangu itapanga mambo.\" Nini kinaweza kutokea bila wosia?", options: ["Hakuna kinachobadilika", "Familia inapiga kura", "Sheria ya mahali anapoishi inaamua nani anarithi, na huenda isilingane na matakwa yake", "Benki inachukua kila kitu"], answer: 2, why: "Bila wosia, sheria inaamua nani anarithi na mahakama inachagua nani atashughulikia mirathi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kukagua wanufaika wako",
          minutes: 5,
          goal: "Tafuta kila akaunti au bima yenye mnufaika na ukague nani ametajwa.",
          text: [
            "Pesa nyingine haipiti kwenye wosia wako hata kidogo. Bima ya maisha, akaunti nyingi za kustaafu na pensheni, na baadhi ya akaunti za benki zinakuruhusu kumtaja mnufaika (beneficiary): mtu atakayepata pesa hiyo utakapofariki. Kwa kawaida fomu hizi ndizo zinaamua nani anapata pesa hiyo, hata kama wosia wako unasema kitu tofauti.",
            "Ndiyo maana fomu za zamani zinaleta matatizo. Bima ya maisha huenda bado inamtaja mume au mke wa zamani, au mzazi aliyekwisha fariki, au mtoto kabla wajukuu hawajazaliwa.",
            "Andika orodha ya kila akaunti na bima uliyonayo. Kwa kila moja, uliza kampuni au angalia akaunti yako mtandaoni uone nani ametajwa kama mnufaika na mbadala (mara nyingi huitwa mnufaika wa akiba, contingent beneficiary). Rekebisha zilizo na makosa kwa kutumia fomu ya kampuni yenyewe.",
            "Kagua wanufaika wako baada ya matukio makubwa ya maisha: ndoa, talaka, kifo, kuzaliwa kwa mtoto au mjukuu mpya. Muulize wakili kabla ya kumtaja mtoto mdogo au mtu anayepata mafao ya ulemavu, kwa sababu kunaweza kuwa na sheria maalum."
          ],
          steps: ["Orodhesha kila bima ya maisha, akaunti ya kustaafu, pensheni na akaunti ya benki.", "Kwa kila moja, tafuta nani ametajwa kama mnufaika na kama mbadala.", "Weka alama kwenye zilizopitwa na wakati.", "Zirekebishe kwa fomu ya kampuni yenyewe.", "Kagua tena baada ya ndoa, talaka, kifo au kuzaliwa kwa mtoto."],
          words: [["Mnufaika (beneficiary)", "mtu unayemtaja kupokea pesa kutoka akaunti au bima utakapofariki."], ["Mnufaika wa akiba (contingent beneficiary)", "mbadala anayepokea pesa ikiwa mnufaika wa kwanza amefariki."], ["Tukio la maisha", "badiliko kubwa kama ndoa, talaka, kifo au kuzaliwa kwa mtoto."]],
          slides: [
            { title: "Pesa nyingine haipiti kwenye wosia", bullets: ["Bima ya maisha, akaunti nyingi za kustaafu", "Baadhi ya akaunti za benki", "Kwa kawaida fomu ya mnufaika ndiyo inaamua"] },
            { title: "Fomu za zamani zinaleta matatizo", bullets: ["Mume au mke wa zamani bado ametajwa", "Mtu aliyekwisha fariki", "Wajukuu wapya hawajatajwa"] },
            { title: "Kagua kila moja", bullets: ["Orodhesha akaunti na bima zako", "Tafuta mnufaika aliyetajwa na mbadala", "Rekebisha kwa fomu ya kampuni"] },
            { title: "Kagua baada ya matukio ya maisha", bullets: ["Ndoa, talaka, kifo, kuzaliwa", "Muulize wakili kuhusu watoto wadogo au mafao ya ulemavu"] }
          ],
          sources: [{ name: "CFPB: Kusimamia pesa za mtu mwingine (miongozo kwa familia)", url: "https://www.consumerfinance.gov/consumer-tools/managing-someone-elses-money/" }],
          tryIt: "Orodhesha kila akaunti au bima uliyonayo ambayo inaweza kuwa na mnufaika. Chagua moja, kagua nani ametajwa (mtandaoni, kwenye karatasi zako au kwa kupiga simu kwa kampuni), na andika kama bado ni sahihi.",
          youCanNow: "kupata akaunti zako zenye wanufaika, kukagua nani ametajwa, na kujua wakati wa kuzirekebisha.",
          quickCheck: [
            { objective: "O2", q: "Mnufaika (beneficiary) ni nani?", options: ["Mtu anayeandika wosia wako", "Mtu aliyetajwa kupata pesa kutoka akaunti au bima utakapofariki", "Wakili wako", "Meneja wa benki yako"], answer: 1, why: "Mnufaika ni mtu aliyetajwa kwenye akaunti au bima kupokea pesa hiyo." },
            { objective: "O2", q: "Fomu yako ya pensheni bado inamtaja marehemu mume wako kama mnufaika. Unafanya nini?", options: ["Iache; wosia unashughulikia hilo", "Futa jina lake kwenye nakala yako", "Mwambie rafiki", "Irekebishe kwa kutumia fomu ya kampuni yenyewe"], answer: 3, why: "Kwa kawaida fomu za wanufaika ndizo zinaamua nani anapata pesa hiyo, kwa hiyo zirekebishe kwa fomu ya kampuni." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Hati ya uwakilishi na maagizo ya matibabu",
          minutes: 6,
          goal: "Eleza nani atakuamulia kuhusu pesa na kuhusu matibabu ikiwa wewe hutaweza.",
          text: [
            "Wosia unafanya kazi tu baada ya kufariki. Hati nyingine zinakulinda ukiwa bado hai, ikiwa ugonjwa au ajali itakufanya ushindwe kujiamulia.",
            "Hati ya uwakilishi wa fedha (financial power of attorney) inamtaja wakala: mtu unayemwamini kushughulikia pesa na mali zako, kama kulipa bili au kuongea na benki. Consumer Financial Protection Bureau (CFPB, ofisi ya serikali ya Marekani inayolinda watumiaji wa huduma za fedha) ina miongozo ya bure kwa watu waliotajwa kama mawakala. Bila hati hii, familia yako huenda ikalazimika kwenda mahakamani ili mlezi au msimamizi wa mali (guardian au conservator) ateuliwe, jambo linalochukua muda na pesa.",
            "Maagizo ya matibabu, yanayoitwa pia maagizo ya mapema (advance directive), yanahusu maamuzi ya matibabu. Hati ya uwakilishi wa matibabu (health care power of attorney au health care proxy) inamtaja mtu unayemwamini kufanya maamuzi ya afya ikiwa wewe hutaweza. Wosia wa uhai (living will) unaandika matibabu ambayo ungetaka au usingetaka ikiwa unakaribia kufariki au umepoteza fahamu kabisa, kama mashine za kupumua au kulishwa kwa mrija.",
            "Chagua watu waaminifu, wanaoishi karibu au wanaopatikana, na watakaofuata matakwa yako, si yao. Taja mbadala kwa kila mmoja. Kisha ongea nao, na daktari wako, kuhusu unachotaka. Fomu na sheria ni tofauti kwa jimbo na nchi, kwa hiyo zipate kutoka kwa wakili, msaada wa kisheria, ofisi ya daktari wako au hospitali, na uliza jinsi ya kuzisaini kwa usahihi."
          ],
          words: [["Hati ya uwakilishi (power of attorney)", "hati ya kisheria inayomruhusu mtu unayemchagua kukufanyia mambo."], ["Wakala", "mtu unayemtaja katika hati ya uwakilishi."], ["Maagizo ya mapema (advance directive)", "hati zinazowaambia madaktari na familia matakwa yako ya matibabu na nani atakuamulia."], ["Wosia wa uhai (living will)", "hati inayosema matibabu unayotaka au usiyotaka karibu na mwisho wa maisha."], ["Wakala wa matibabu (health care proxy)", "mtu unayemtaja kufanya maamuzi ya afya ikiwa wewe hutaweza."]],
          slides: [
            { title: "Mipango ya wakati ukiwa hai", bullets: ["Wosia unafanya kazi tu baada ya kifo", "Hati hizi zinahusu ugonjwa au ajali"] },
            { title: "Hati ya uwakilishi wa fedha", bullets: ["Inamtaja wakala wa pesa na mali", "Analipa bili, anaongea na benki", "Bila hati hii, familia huenda ikaenda mahakamani"] },
            { title: "Maagizo ya matibabu", bullets: ["Wakala wa matibabu: nani anaamua", "Wosia wa uhai: matibabu unayotaka", "Ongea na daktari wako kuhusu hati hizi"] },
            { title: "Chagua kwa busara", bullets: ["Mwaminifu na anayepatikana", "Atafuata matakwa yako", "Taja mbadala; fomu ni tofauti kwa jimbo"] }
          ],
          sources: [
            { name: "MedlinePlus: Maagizo ya mapema (advance directives)", url: "https://medlineplus.gov/advancedirectives.html" },
            { name: "CFPB: Kusimamia pesa za mtu mwingine", url: "https://www.consumerfinance.gov/consumer-tools/managing-someone-elses-money/" }
          ],
          tryIt: "Andika jina la mtu ambaye ungemchagua kuwa wakala wako wa fedha na wakala wako wa matibabu, na mbadala kwa kila mmoja. Kando ya kila jina, andika sababu moja inayokufanya umwamini.",
          youCanNow: "kueleza hati ya uwakilishi wa fedha, wakala wa matibabu na wosia wa uhai, na kuchagua unayemwamini kwa kila kimoja.",
          quickCheck: [
            { objective: "O3", q: "Hati ya uwakilishi wa fedha inafanya nini?", options: ["Inamtaja mtu wa kushughulikia pesa na mali zako ikiwa wewe hutaweza", "Inasema nani atapata nyumba yako utakapofariki", "Inaorodhesha dawa zako", "Inafunga akaunti yako ya benki"], answer: 0, why: "Hati ya uwakilishi wa fedha inamtaja wakala wa kusimamia pesa kwa niaba yako ukiwa bado hai." },
            { objective: "O3", q: "Unachagua wakala wa matibabu. Nani ni chaguo bora?", options: ["Ndugu anayebishana zaidi", "Mtu ambaye hujamwona kwa miaka", "Mtu unayemwamini, anayepatikana na atakayefuata matakwa yako, pamoja na mbadala", "Yeyote atakayeomba kwanza"], answer: 2, why: "Chagua mtu mwaminifu, anayepatikana na aliye tayari kufuata matakwa yako, na umtaje mbadala." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Zijue hati",
        questions: [
          { objective: "O1", q: "Msimamizi wa mirathi anafanya nini?", options: ["Anatekeleza matakwa yaliyo katika wosia wako na kumaliza mambo ya mirathi yako", "Anaandika rekodi zako za matibabu", "Anakuuzia bima", "Anaamua mpango wako wa Medicare"], answer: 0, why: "Msimamizi wa mirathi anatajwa katika wosia ili kutekeleza matakwa yako." },
          { objective: "O1", q: "Nini kinaweza kutokea ukifariki bila wosia?", options: ["Hakuna kinachotokea kwa mali zako", "Benki yako inachukua kila kitu", "Sheria ya mahali unapoishi inaamua nani anarithi", "Jirani yako anachagua"], answer: 2, why: "Bila wosia, sheria ya jimbo au ya nchi na mahakama ndizo zinaamua." },
          { objective: "O2", q: "Wosia wako unamwachia binti yako kila kitu, lakini fomu ya bima yako ya maisha bado inamtaja mume wako wa zamani. Kwa kawaida nani anapata pesa ya bima?", options: ["Binti yako", "Mahakama", "Wakala wa bima", "Mtu aliyetajwa kwenye fomu ya mnufaika"], answer: 3, why: "Kwa kawaida fomu za wanufaika ndizo zinaamua pesa hiyo, hata kama wosia unasema kitu tofauti." },
          { objective: "O3", q: "Hati gani inamtaja mtu wa kufanya maamuzi ya matibabu ikiwa wewe hutaweza?", options: ["Taarifa ya benki", "Wakala wa matibabu au hati ya uwakilishi wa matibabu", "Fomu ya mnufaika", "Orodha ya manunuzi"], answer: 1, why: "Wakala wa matibabu ni mtu unayemtaja kwa maamuzi ya afya." },
          { objective: "O1", q: "Kwa nini unahitaji wakili au msaada wa kisheria kukamilisha hati hizi?", options: ["Kwa sababu zana za AI haziruhusiwi kuzisoma", "Kwa sababu lazima zichapwe", "Kwa sababu sheria za kuzifanya halali ni tofauti kwa jimbo na nchi", "Kwa sababu ni mawakili tu wanaoweza kumiliki nyumba"], answer: 2, why: "Hati isiyofuata sheria za mahali hapo huenda isikubalike." }
        ]
      }
    },
    {
      name: "Sura 2: Andaa na panga",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuorodhesha unachomiliki na unachodaiwa",
          minutes: 5,
          goal: "Andika orodha rahisi ya mali na madeni yako ambayo wakili na familia yako wanaweza kutumia.",
          text: [
            "Kabla ya kukutana na wakili, andika orodha ya unachomiliki na unachodaiwa. Orodha hii inamsaidia wakili kukupa ushauri mzuri, na baadaye inamsaidia msimamizi wa mirathi kupata kila kitu.",
            "Unachomiliki (mali): akaunti za benki na za vyama vya ushirika wa akiba (credit union), akaunti za kustaafu na pensheni, bima ya maisha, nyumba au ardhi yako, magari, vitu vya thamani, na vitu vyenye thamani kwa familia kama vito au picha. Orodhesha pia akaunti za mtandaoni kama barua pepe na hifadhi ya picha, na wanyama vipenzi wowote watakaohitaji makazi mapya.",
            "Unachodaiwa (madeni): mkopo wa nyumba (mortgage), mkopo wa gari, kadi za mkopo, bili za matibabu na mikopo yoyote binafsi.",
            "Kwa kila kitu, andika kampuni na aina ya akaunti, lakini si namba kamili za akaunti wala nywila. Andika \"inaishia na 1234\" badala yake. Iweke orodha hii mahali salama. Usiiandike ndani ya msaidizi wa AI wala usiitume kwa barua pepe kwa mtu yeyote ambaye hajachaguliwa kukusaidia."
          ],
          steps: ["Andika kichwa: Ninachomiliki. Orodhesha akaunti, bima, mali, magari na vitu vya thamani.", "Ongeza akaunti za mtandaoni na wanyama vipenzi.", "Andika kichwa: Ninachodaiwa. Orodhesha kila deni na unadaiwa na nani.", "Tumia tarakimu nne za mwisho tu za namba yoyote, na usiandike kamwe nywila kwenye orodha hii.", "Iweke mahali salama."],
          words: [["Mali", "kitu unachomiliki chenye thamani, kama pesa, nyumba au gari."], ["Deni", "pesa unayodaiwa, kama mkopo wa nyumba au kadi ya mkopo."], ["Orodha kamili (inventory)", "orodha kamili ya vitu ulivyonavyo."]],
          slides: [
            { title: "Kwa nini uandike orodha", bullets: ["Inamsaidia wakili wako kukushauri", "Inamsaidia msimamizi wa mirathi kupata kila kitu"] },
            { title: "Unachomiliki", bullets: ["Akaunti, pensheni, bima ya maisha", "Nyumba, ardhi, magari, vitu vya thamani", "Akaunti za mtandaoni na wanyama vipenzi"] },
            { title: "Unachodaiwa", bullets: ["Mkopo wa nyumba, mkopo wa gari, kadi za mkopo", "Bili za matibabu, mikopo binafsi"] },
            { title: "Iweke siri", bullets: ["Tarakimu nne za mwisho tu", "Hakuna nywila kwenye orodha", "Usiibandike kamwe kwenye zana ya AI"] }
          ],
          tryIt: "Anza orodha yako sasa kwenye karatasi: andika angalau vitu vitano unavyomiliki na kila deni ulilonalo, pamoja na jina la kampuni na tarakimu nne za mwisho tu za namba yoyote.",
          youCanNow: "kuandaa orodha ya siri, iliyopangwa, ya unachomiliki na unachodaiwa kwa ajili ya wakili wako na familia yako.",
          quickCheck: [
            { objective: "O4", q: "Mali zako ni zipi?", options: ["Madeni yako", "Madaktari wako", "Maswali yako kwa wakili", "Unachomiliki, kama akaunti, mali na vitu vya thamani"], answer: 3, why: "Mali ni unachomiliki; madeni ni unachodaiwa." },
            { objective: "O4", q: "Unaandika akaunti yako ya akiba kwenye orodha. Unaandikaje namba?", options: ["Namba kamili na nywila", "\"Inaishia na 1234\"", "Namba kamili tu", "Usiiandike akaunti hiyo"], answer: 1, why: "Andika tarakimu nne za mwisho tu, na usiandike kamwe nywila kwenye orodha." }
          ]
        },
        {
          objectives: ["O5","O3"],
          title: "Kujiandaa kwa wakili au msaada wa kisheria",
          minutes: 5,
          goal: "Pata msaada wa kisheria karibu nawe na uandae maamuzi na maswali ya kubeba.",
          text: [
            "Msaada wa kupanga mirathi si lazima uwe ghali. Msaada wa bure au wa bei nafuu unaweza kutoka kwa vikundi vya msaada wa kisheria, huduma za kisheria za wazee, kliniki za vyuo vya sheria na programu za mawakili wa kujitolea. LawHelp.org inakuruhusu kuchagua jimbo lako ili kupata msaada wa kisheria wa bure kutoka mashirika yasiyo ya faida. Eldercare Locator (1-800-677-1116) inawaunganisha wazee na familia na huduma za karibu; waulize kuhusu msaada wa kisheria kwa wazee karibu nawe. Chama cha mawakili (bar association) cha jimbo lako au cha eneo lako huenda kina huduma ya kukuelekeza kwa wakili.",
            "Fomu na vifurushi vya wosia mtandaoni vipo, lakini fomu isiyolingana na sheria za jimbo lako, au hali ya familia yako, inaweza kushindwa kufanya kazi. Wakili au msaada wa kisheria anaweza kukuambia kama fomu rahisi inakutosha au la.",
            "Beba ulichoandaa: orodha yako ya unachomiliki na unachodaiwa, ukaguzi wako wa wanufaika, na watu uliowachagua kuwa msimamizi wa mirathi, mlezi, wakala wa fedha na wakala wa matibabu, pamoja na mbadala. Beba pia maswali.",
            "Maswali mazuri: Je, nahitaji wosia, amana (trust), au vyote viwili? Wosia wangu unapaswa kusainiwa na kushuhudiwa vipi hapa? Nini kitatokea kwa nyumba yangu? Nifanye nini kuhusu mjukuu ninayemlea? Hii itagharimu kiasi gani, na nini kimejumuishwa? Msaidizi wa AI anaweza kukusaidia kuandika maswali yako kwa maneno yaliyo wazi, lakini usiweke majina na namba, na umwachie wakili atoe majibu ya kisheria."
          ],
          steps: ["Nenda LawHelp.org na uchague jimbo lako, au piga simu kwa Eldercare Locator.", "Uliza kuhusu msaada wa bure au wa bei nafuu wa kupanga mirathi kwa wazee.", "Kusanya orodha zako na watu uliowachagua.", "Andika angalau maswali matano.", "Uliza itagharimu kiasi gani na nini kimejumuishwa kabla ya kuanza."],
          words: [["Msaada wa kisheria (legal aid)", "msaada wa kisheria wa bure kutoka mashirika yasiyo ya faida kwa watu wanaostahili."], ["Huduma ya kuelekeza kwa wakili", "huduma, mara nyingi ya chama cha mawakili, inayokuunganisha na wakili."], ["Amana (trust)", "mpango wa kisheria ambapo mtu anasimamia mali kwa ajili ya wengine; wakili anaweza kusema kama unahitaji mmoja."]],
          slides: [
            { title: "Mahali pa kupata msaada", bullets: ["LawHelp.org: chagua jimbo lako", "Eldercare Locator: 1-800-677-1116", "Chama cha mawakili: kukuelekeza kwa wakili"] },
            { title: "Kuwa makini na vifurushi vya fomu", bullets: ["Fomu lazima ilingane na sheria za jimbo lako", "Muulize wakili kama fomu rahisi inatosha"] },
            { title: "Beba maandalizi yako", bullets: ["Unachomiliki na unachodaiwa", "Ukaguzi wa wanufaika", "Watu uliowachagua, pamoja na mbadala"] },
            { title: "Beba maswali", bullets: ["Wosia, amana au vyote viwili?", "Unasainiwa na kushuhudiwa vipi hapa?", "Itagharimu kiasi gani?"] }
          ],
          sources: [
            { name: "LawHelp.org: Pata msaada wa kisheria wa bure", url: "https://www.lawhelp.org/" },
            { name: "Eldercare Locator (Administration for Community Living)", url: "https://eldercare.acl.gov/" }
          ],
          tryIt: "Nenda LawHelp.org, chagua jimbo lako na utafute kikundi kimoja cha msaada wa kisheria au huduma ya kisheria ya wazee karibu nawe. Andika jina lake na namba yake ya simu, na andika maswali matano ambayo ungewauliza.",
          youCanNow: "kupata msaada wa kisheria wa bure au wa bei nafuu karibu nawe na kufika kwenye mkutano ukiwa umejiandaa.",
          quickCheck: [
            { objective: "O5", q: "LawHelp.org ni nini?", options: ["Tovuti ya kupata msaada wa kisheria wa bure kutoka mashirika yasiyo ya faida katika jimbo lako", "Kifurushi cha wosia mtandaoni", "Benki", "Ofisi ya serikali ya mafao"], answer: 0, why: "LawHelp.org inakuruhusu kuchagua jimbo lako ili kupata msaada wa kisheria wa bure." },
            { objective: "O5", q: "Unataka AI ikusaidie kuandika maswali yako kwa wakili. Unaacha nini nje?", options: ["Neno \"wosia\"", "Maswali yako", "Majina na namba za akaunti", "Neno \"gharama\""], answer: 2, why: "AI inaweza kusaidia kwa maneno yaliyo wazi, lakini acha nje majina na namba na umwachie wakili ajibu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kupanga na kuhifadhi karatasi zako muhimu",
          minutes: 5,
          goal: "Weka karatasi zako mahali pamoja salama na uwaambie watu sahihi ziko wapi.",
          text: [
            "Mpango unasaidia tu ikiwa watu wanaweza kuupata. Familia nyingi zinatafuta kwa siku nyingi wosia, bima au hati ya umiliki wa nyumba. Unaweza kuwaepushia hilo.",
            "Tengeneza faili moja au jalada moja. Weka ndani yake, au andika mahali pa kupata: wosia wako na hati nyingine za kisheria, hati yako ya uwakilishi na maagizo yako ya matibabu, orodha yako ya unachomiliki na unachodaiwa, bima, hati za umiliki wa nyumba na ardhi na za magari, kadi zako za Medicare au kadi nyingine za afya (nakala), na orodha ya mawasiliano: wakili wako, daktari, benki na watu uliowataja.",
            "Muulize wakili wako wosia halisi uliosainiwa uhifadhiwe wapi, kwa sababu sheria na machaguo ni tofauti. Mpe nakala ya maagizo yako ya matibabu wakala wako wa matibabu na daktari wako, ili iwepo wakati wa dharura. Weka jalada mahali salama nyumbani ambapo msimamizi wa mirathi anajua.",
            "Andika barua ya ukurasa mmoja ya \"karatasi zangu ziko wapi\" na uwape watu uliowataja. Kagua kila kitu kila baada ya miaka michache na baada ya matukio makubwa ya maisha. Unapobadilisha kitu, iambie familia yako, na uondoe nakala za zamani ili mtu asitumie isiyo sahihi."
          ],
          steps: ["Tengeneza jalada moja au faili moja kwa karatasi muhimu.", "Ongeza kila hati, au barua inayosema iko wapi.", "Muulize wakili wako mahali pa kuweka wosia halisi.", "Mpe wakala wako wa matibabu na daktari wako maagizo yako ya matibabu.", "Andika barua ya \"karatasi zangu ziko wapi\" na uishiriki na watu uliowataja.", "Kagua baada ya matukio makubwa ya maisha na uondoe nakala za zamani."],
          words: [["Halisi (original)", "hati yenyewe iliyosainiwa, si nakala."], ["Hati ya umiliki wa ardhi (deed)", "karatasi ya kisheria inayoonyesha nani anamiliki nyumba au ardhi."], ["Kadi ya umiliki wa gari (title)", "karatasi inayoonyesha nani anamiliki gari."]],
          slides: [
            { title: "Watu lazima waweze kuupata", bullets: ["Familia zinaweza kutafuta kwa siku nyingi", "Jalada moja linawaepushia hilo"] },
            { title: "Nini kinaingia kwenye jalada", bullets: ["Wosia, hati ya uwakilishi, maagizo ya matibabu", "Orodha yako ya unachomiliki na unachodaiwa", "Bima, hati za umiliki, mawasiliano"] },
            { title: "Mahali pa kuweka vitu", bullets: ["Muulize wakili kuhusu wosia halisi", "Maagizo ya matibabu: kwa wakala na daktari", "Jalada: mahali salama anapojua msimamizi"] },
            { title: "Waambie na kagua", bullets: ["Shiriki barua ya \"karatasi zangu ziko wapi\"", "Kagua baada ya matukio ya maisha", "Ondoa nakala za zamani"] }
          ],
          sources: [{ name: "MedlinePlus: Maagizo ya mapema (advance directives)", url: "https://medlineplus.gov/advancedirectives.html" }],
          tryIt: "Kazi ya mwisho: tengeneza faili lako la mpango wa mirathi lenye orodha yako ya unachomiliki na unachodaiwa, ukaguzi wako wa wanufaika, watu ambao ungewataja pamoja na mbadala, angalau maswali matano kwa wakili au msaada wa kisheria, na barua ya ukurasa mmoja ya \"karatasi zangu ziko wapi\". Kisha tafuta ofisi moja ya msaada wa kisheria karibu nawe na uandike jinsi ya kuwasiliana nayo.",
          youCanNow: "kupanga karatasi zako muhimu, kuzihifadhi kwa usalama na kuwaambia watu sahihi ziko wapi.",
          quickCheck: [
            { objective: "O6", q: "Kwa nini umpe daktari wako nakala ya maagizo yako ya matibabu?", options: ["Ili iwepo wakati wa dharura", "Ili daktari aweze kuyabadilisha", "Ili ulipe kidogo kwa matibabu", "Haihitajiki"], answer: 0, why: "Wakala wako na daktari wanahitaji nakala ili ipatikane wakati inapohitajika." },
            { objective: "O6", q: "Umerekebisha wosia wako. Unafanya nini na nakala ya zamani?", options: ["Weka zote mbili kwenye jalada", "Mtumie ndugu ile ya zamani kwa posta", "Ficha ile mpya", "Fuata ushauri wa wakili wako na uhakikishe hakuna anayetumia ile ya zamani"], answer: 3, why: "Ondoa nakala za zamani ili mtu asitumie isiyo sahihi, na iambie familia yako kuhusu badiliko." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Andaa na panga",
        questions: [
          { objective: "O4", q: "Namba za akaunti zinapaswa kuonekanaje kwenye orodha yako ya unachomiliki?", options: ["Namba kamili na nywila", "Tarakimu nne za mwisho tu, bila nywila", "Zimeandikwa nje ya faili", "Zimewekwa mtandaoni kwa ajili ya familia yako"], answer: 1, why: "Tarakimu nne za mwisho zinaitambulisha akaunti bila kuiweka hatarini." },
          { objective: "O4", q: "Kipi ni deni?", options: ["Akaunti yako ya akiba", "Gari lako", "Bima ya maisha", "Salio la kadi ya mkopo"], answer: 3, why: "Deni ni pesa unayodaiwa." },
          { objective: "O5", q: "Unaweza kutafuta wapi msaada wa kisheria wa bure katika jimbo lako?", options: ["LawHelp.org", "Tangazo la mtandaoni la nasibu", "Kiungo kilichotumwa kwa ujumbe mfupi", "Maoni kwenye mitandao ya kijamii"], answer: 0, why: "LawHelp.org inaorodhesha mashirika yasiyo ya faida ya msaada wa kisheria kwa kila jimbo." },
          { objective: "O6", q: "Nani anapaswa kupata nakala ya maagizo yako ya matibabu?", options: ["Hakuna mtu", "Mhudumu wa benki yako", "Wakala wako wa matibabu na daktari wako", "Mgeni mtandaoni"], answer: 2, why: "Wanaihitaji ili kufuata matakwa yako wakati wa dharura." },
          { objective: "O6", q: "Umebadilisha wosia wako. Unapaswa kufanya nini na nakala ya zamani?", options: ["Weka zote mbili kwenye jalada bila maelezo", "Mpe jirani", "Ifiche katika chumba kingine", "Fuata ushauri wa wakili wako na uhakikishe hakuna anayetumia ile ya zamani"], answer: 3, why: "Nakala za zamani zinaweza kuichanganya familia yako; wakili wako anaweza kusema jinsi ya kuzishughulikia." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kupanga Mirathi na Wosia",
    questions: [
      { objective: "O1", q: "Mirathi yako ni:", options: ["Nyumba yako tu", "Akaunti yako ya benki tu", "Bustani yako", "Kila kitu unachomiliki, ukitoa unachodaiwa"], answer: 3, why: "Mirathi inajumuisha mali yako yote, ukitoa madeni." },
      { objective: "O1", q: "Hasa wosia unasema:", options: ["Daktari gani unamwona", "Nani atapata mali zako na nani atatekeleza matakwa yako", "Bajeti yako ya kila mwezi", "Mpango wako wa Medicare"], answer: 1, why: "Wosia unataja nani anarithi na msimamizi wa mirathi." },
      { objective: "O1", q: "Bibi analea wajukuu wake wawili. Mara nyingi wosia unaweza kuwafanyia nini?", options: ["Hakuna kitu", "Kulipa ada zao za shule moja kwa moja", "Kuwatajia mlezi", "Kubadilisha vyeti vyao vya kuzaliwa"], answer: 2, why: "Katika maeneo mengi wosia unaweza kumtaja mlezi wa watoto walio chini ya miaka 18." },
      { objective: "O1", q: "Kwa nini wosia ulioandikwa kwenye fomu ya bure unaweza kushindwa?", options: ["Huenda haufuati sheria za kusaini na za mashahidi za mahali unapoishi", "Fomu za bure ni haramu kila wakati", "Wosia lazima uwe wa rangi", "Ni mfupi mno"], answer: 0, why: "Kila jimbo na nchi ina sheria zake ili wosia uwe halali." },
      { objective: "O2", q: "Kwa kawaida pesa ya bima ya maisha inakwenda kwa:", options: ["Yeyote aliyetajwa katika wosia", "Msimamizi wa mirathi", "Mtu aliyetajwa kwenye fomu ya mnufaika", "Serikali"], answer: 2, why: "Kwa kawaida fomu za wanufaika ndizo zinaamua pesa hiyo." },
      { objective: "O2", q: "Unapaswa kukagua wanufaika wako lini?", options: ["Kamwe", "Mara moja tu unapofungua akaunti", "Tu wakati kampuni inapopiga simu", "Baada ya ndoa, talaka, kifo au kuzaliwa kwa mtoto"], answer: 3, why: "Matukio ya maisha ndiyo wakati fomu zinapitwa na wakati." },
      { objective: "O2", q: "Mnufaika wa akiba (contingent beneficiary) ni:", options: ["Mbadala ikiwa mnufaika wa kwanza amefariki", "Wakili wako", "Daktari wako", "Meneja wa benki"], answer: 0, why: "Mnufaika wa akiba ndiye mbadala." },
      { objective: "O3", q: "Hati ya uwakilishi wa fedha inamtaja mtu wa:", options: ["Kufanya maamuzi ya matibabu", "Kushughulikia pesa na mali zako ikiwa wewe hutaweza", "Kusoma wosia wako kwa sauti", "Kuchagua kanisa lako"], answer: 1, why: "Wakala anakufanyia mambo ya pesa." },
      { objective: "O3", q: "Bila hati ya uwakilishi wa fedha, ikiwa hutaweza kusimamia pesa, familia yako huenda ikalazimika:", options: ["Kutofanya chochote", "Kwenda mahakamani ili mlezi au msimamizi wa mali ateuliwe", "Kupiga simu kituo cha redio", "Kufunga akaunti zako zote"], answer: 1, why: "Mahakama inaweza kuchelewa na kuwa ghali; hati ya uwakilishi inaepusha hilo." },
      { objective: "O3", q: "Wosia wa uhai (living will) unasema:", options: ["Nani atapata nyumba yako", "Salio lako la benki", "Matibabu unayotaka au usiyotaka karibu na mwisho wa maisha", "Orodha yako ya manunuzi"], answer: 2, why: "Wosia wa uhai unaandika matakwa yako kuhusu matibabu." },
      { objective: "O3", q: "Nani ni chaguo zuri kuwa wakala wa matibabu?", options: ["Mtu atakayefuata matakwa yake mwenyewe", "Mgeni anayekupigia simu", "Yeyote anayeomba", "Mtu unayemwamini, anayepatikana na atakayefuata matakwa yako"], answer: 3, why: "Wakala wako lazima azungumze kwa niaba yako, si kwa ajili yake mwenyewe." },
      { objective: "O3", q: "Mbali na wakili wako, unapaswa kuzungumza na nani kuhusu matakwa yako ya matibabu?", options: ["Daktari wako na wakala wako wa matibabu", "Mtu anayepiga simu kuuza bidhaa", "Hakuna mtu", "Kikundi cha mitandao ya kijamii"], answer: 0, why: "Wao ndio watakaotekeleza matakwa yako." },
      { objective: "O4", q: "Kipi kinafaa kuwa kwenye orodha yako ya unachomiliki?", options: ["Nywila yako kamili", "Gari la jirani yako", "PIN yako", "Nyumba yako, akaunti, magari na vitu vya thamani"], answer: 3, why: "Orodhesha mali pamoja na kampuni na tarakimu nne za mwisho, si nywila." },
      { objective: "O4", q: "Je, unapaswa kubandika orodha yako kamili ya akaunti kwenye msaidizi wa AI?", options: ["Ndiyo, ili kuokoa muda", "Hapana; weka taarifa binafsi nje ya zana za AI", "Ndiyo, ikiwa AI inaomba", "Tu kwenye kompyuta ya maktaba"], answer: 1, why: "Usiandike kamwe namba za siri au taarifa za akaunti kwenye zana za AI." },
      { objective: "O5", q: "Namba gani ya simu inakufikisha kwa Eldercare Locator?", options: ["1-800-677-1116", "911", "1-800-MEDICARE", "411"], answer: 0, why: "Eldercare Locator inawaunganisha wazee na huduma za karibu." },
      { objective: "O5", q: "Kabla ya kumwajiri wakili, swali la busara ni:", options: ["Rangi unayoipenda ni ipi?", "Unaweza kubashiri matakwa yangu?", "Hii itagharimu kiasi gani, na nini kimejumuishwa?", "Naweza kuacha kusaini?"], answer: 2, why: "Kujua gharama mapema kunaepusha mshangao." },
      { objective: "O5", q: "Matumizi mazuri ya msaidizi wa AI katika kupanga mirathi ni yapi?", options: ["Kuandika wosia wako wa kisheria peke yake", "Kukusaidia kuandika maswali yako kwa maneno yaliyo wazi, bila majina wala namba", "Kuhifadhi nywila zako", "Kuamua nani anarithi"], answer: 1, why: "AI inaweza kusaidia kwa maneno, lakini majibu ya kisheria yanatoka kwa wakili." },
      { objective: "O6", q: "Wosia halisi uliosainiwa unapaswa kuhifadhiwa wapi?", options: ["Popote, haijalishi", "Ndani ya gari", "Kutupwa baada ya kutoa nakala", "Mahali wakili wako anaposhauri, na msimamizi wa mirathi ajue"], answer: 3, why: "Sheria na machaguo ni tofauti; muulize wakili wako." },
      { objective: "O6", q: "Barua ya \"karatasi zangu ziko wapi\" inapaswa kwenda kwa:", options: ["Kila mtu mtandaoni", "Hakuna mtu", "Watu uliowataja katika mpango wako", "Mtu anayepiga simu kuuza bidhaa"], answer: 2, why: "Watu watakaokufanyia mambo wanahitaji kupata karatasi zako." },
      { objective: "O1", q: "Sheria za kupanga mirathi:", options: ["Ni tofauti katika kila jimbo na nchi", "Ni sawa kila mahali duniani", "Hazibadiliki kamwe", "Zinawahusu matajiri tu"], answer: 0, why: "Sheria zinatofautiana kwa mahali, kwa hiyo mwone wakili au msaada wa kisheria mahali unapoishi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      4,
      7,
      9,
      12,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Ninachomiliki na ninachodaiwa",
        objective: "O4",
        notYet: "Orodha inakosa vitu vikubwa, au inaonyesha namba kamili za akaunti au nywila.",
        meets: "Orodha ya mali na madeni yenye kampuni na aina ya akaunti, ikitumia tarakimu nne za mwisho tu.",
        exceeds: "Pia inaorodhesha akaunti za mtandaoni na wanyama vipenzi, na imehifadhiwa mahali salama."
      },
      {
        name: "Ukaguzi wa wanufaika",
        objective: "O2",
        notYet: "Baadhi ya akaunti au bima hazikukaguliwa.",
        meets: "Kila akaunti au bima yenye mnufaika imeorodheshwa, pamoja na mtu aliyetajwa na mbadala.",
        exceeds: "Fomu zilizopitwa na wakati zimewekewa alama na fomu ya kurekebisha imeombwa."
      },
      {
        name: "Watu waliotajwa",
        objective: "O3",
        notYet: "Nafasi moja au zaidi haina mtu, au hakuna mbadala.",
        meets: "Msimamizi wa mirathi, wakala wa fedha na wakala wa matibabu, kila mmoja na mbadala.",
        exceeds: "Ameongea na watu waliochaguliwa kuhusu nafasi zao na matakwa yako."
      },
      {
        name: "Maswali kwa wakili",
        objective: "O5",
        notYet: "Maswali chini ya matano, au hakuna chanzo cha msaada wa kisheria.",
        meets: "Angalau maswali matano yaliyo wazi, likiwemo la gharama, na mahali pamoja karibu nawe panapotoa msaada wa kisheria.",
        exceeds: "Amewasiliana na msaada wa kisheria au amepanga miadi."
      },
      {
        name: "Karatasi zangu ziko wapi",
        objective: "O6",
        notYet: "Hakuna barua, au haisemi karatasi muhimu ziko wapi.",
        meets: "Barua ya ukurasa mmoja inayosema kila karatasi muhimu iko wapi.",
        exceeds: "Barua imepewa watu waliotajwa katika mpango."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (rubriki)",
      "Wanafunzi wanaorekebisha angalau fomu moja ya mnufaika ndani ya siku 60 (dodoso la ufuatiliaji)",
      "Wanafunzi wanaokutana na wakili au msaada wa kisheria na kusaini wosia, hati ya uwakilishi au maagizo ya matibabu",
      "Wanafunzi wanaoshiriki barua ya \"karatasi zangu ziko wapi\" na familia"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Faili au jalada, karatasi na kalamu",
      "Bima za mwanafunzi, taarifa za akaunti na wosia au maagizo yoyote yaliyopo (vinabaki vya siri)",
      "Simu au kompyuta ya kutafuta msaada wa kisheria kwenye LawHelp.org au kupiga simu kwa Eldercare Locator",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi vya taratibu, pamoja na muda nyumbani wa kukusanya karatasi"
    ],
    facilitatorNotes: [
      "Usitoe ushauri wa kisheria wala usisaidie kuandika wosia; kozi inawaandaa wanafunzi kwa wakili au msaada wa kisheria.",
      "Wanafunzi wanaweka karatasi zao kuwa siri; usikusanye kamwe namba za akaunti wala hati.",
      "Baadhi ya wanafunzi wanaweza kuwa katika msiba au wasiwe huru kuzungumza kuhusu kifo; tumia sauti ya upole na ya vitendo.",
      "Tafuta msaada wa kisheria wa karibu au huduma za kisheria za wazee kabla ya kipindi ili wanafunzi waondoke na mtu halisi wa kuwasiliana naye.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};

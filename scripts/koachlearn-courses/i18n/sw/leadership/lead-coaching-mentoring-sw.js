"use strict";

// Koach Learn course (Swahili translation of leadership/lead-coaching-mentoring.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "lead-coaching-mentoring-sw",
  lang: "sw",
  translationOf: "lead-coaching-mentoring",
  category: "Leadership Development",
  name: "Ukocha na Ushauri Elekezi (Mentoring)",
  skills: "Kutofautisha ukocha na ushauri elekezi, Kusikiliza kikamilifu, Kuuliza maswali yenye nguvu, Kuendesha mazungumzo ya GROW, Kuweka lengo la maendeleo, Makubaliano ya ushauri elekezi na kufuatilia ukuaji",
  outcome: "kuendesha mazungumzo ya ukocha kwa mfumo wa GROW ukisikiliza vizuri na kuuliza maswali ya wazi, kumsaidia mtu kuweka lengo la maendeleo lililo wazi, kukubaliana jinsi uhusiano wa ushauri elekezi utakavyofanya kazi, na kufuatilia ukuaji wake kwa muda.",
  about: [
    "Kozi hii ni kwa yeyote anayesaidia watu wengine kukua: mameneja, viongozi wa timu, walimu, makocha, wachungaji, viongozi wa vijana, na wafanyakazi wenye uzoefu wanaowaongoza wafanyakazi wapya.",
    "Ukocha na ushauri elekezi ni ujuzi unaoweza kuufanyia mazoezi. Utajifunza tofauti kati yake, jinsi ya kusikiliza ili watu wahisi wamesikilizwa, jinsi ya kuuliza maswali yanayowasaidia watu kufikiri, jinsi ya kuendesha mazungumzo kwa mfumo wa GROW, na jinsi ya kuweka na kufuatilia lengo la maendeleo.",
    "Kila somo linachukua kama dakika tano. Ikiwezekana, tafuta mwenzako wa mazoezi (mfanyakazi mwenzako, rafiki au mwanafamilia) kwa kazi za \"Jaribu sasa\". Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Fanya mazungumzo ya ukocha ya dakika 20 na mwenzako wa mazoezi ukitumia GROW. Sikiliza zaidi kuliko unavyoongea na uliza angalau maswali matano ya wazi. Kwa pamoja, andikeni lengo lake la maendeleo kwa njia iliyo wazi na inayopimika, makubaliano ya ushauri elekezi ya aya moja (mtakutana mara ngapi, kwa njia gani, kwa muda gani, na nini ni siri), na kifuatiliaji rahisi chenye tarehe tatu za kukutana kukagua maendeleo.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Viongozi wa timu, wasimamizi, mameneja, walimu, viongozi wa jamii na wa mashirika yasiyo ya faida, na wafanyakazi wenye uzoefu wanaotaka kuwafundisha (ukocha) au kuwaongoza (ushauri elekezi) wengine.",
    startingPoint: "Mara nyingi wanaombwa msaada na kwa kawaida wanajibu kwa kutoa ushauri. Wachache wamefanya mazoezi ya kusikiliza kikamilifu, kuuliza maswali ya wazi, mazungumzo ya ukocha yenye mpangilio au makubaliano ya ushauri elekezi yaliyoandikwa.",
    gap: "Kutoa majibu kunawafanya watu waendelee kutegemea wengine na kunakosa wanachohitaji kweli. Viongozi wanahitaji kusikiliza, kuuliza maswali ya wazi, kuongoza mazungumzo kwa GROW, kusaidia kuweka lengo la maendeleo lililo wazi na kufuatilia ukuaji, ili watu wanaowasaidia wajifunze kufikiri wenyewe.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Muda: masomo mafupi, pamoja na mazungumzo ya mazoezi ya dakika 20",
      "Inahitaji mwenzako wa mazoezi kwa kazi ya mwisho",
      "Faragha: kinachosemwa katika ukocha na ushauri elekezi kinabaki siri isipokuwa mmekubaliana vinginevyo",
      "Maagizo ya usalama yanaelezwa moja kwa moja, si kwa ukocha"
    ],
    prerequisites: "Hakuna. Kozi \"Kusimamia Timu\" ni kozi nzuri ya kuambatana nayo."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa hali ambapo mtu anahitaji msaada", action: "kuchagua kama inahitaji ukocha, ushauri elekezi au kumwambia moja kwa moja", standard: "ukipata angalau hali 4 kati ya 5 sahihi" },
    { id: "O2", condition: "Katika mazungumzo", action: "kusikiliza bila kukatiza na kufupisha ulichosikia", standard: "ili mtu akubali kwamba umeelewa au akurekebishe" },
    { id: "O3", condition: "Mtu anapokuomba ushauri", action: "kuuliza maswali ya wazi yanayoanza na nini au vipi badala ya kutoa ushauri", standard: "ukiuliza angalau maswali matano ya wazi katika mazungumzo moja" },
    { id: "O4", condition: "Katika mazungumzo ya ukocha ya dakika 20", action: "kuongoza mazungumzo kupitia Lengo, Hali halisi, Machaguo na Nia (Goal, Reality, Options, Will)", standard: "mkimaliza na hatua ya kwanza, tarehe na kiwango cha kujitolea" },
    { id: "O5", condition: "Ukipewa nia ya kukuza ujuzi", action: "kuandika lengo la maendeleo lililo wazi lenye hatua ndogo za kujifunza", standard: "linalosema nini, kiasi gani na lini, na ni la mtu mwenyewe" },
    { id: "O6", condition: "Unapoanza uhusiano wa ushauri elekezi", action: "kuandika makubaliano ya ushauri elekezi ya aya moja na kifuatiliaji chenye tarehe tatu za kukutana", standard: "yanayoeleza mara ngapi, kwa njia gani, kwa muda gani na nini ni siri" }
  ],
  chapters: [
    {
      name: "Sura 1: Mazungumzo ya ukocha",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ukocha na ushauri elekezi: tofauti ni nini?",
          minutes: 4,
          goal: "Chagua kama hali inahitaji ukocha, ushauri elekezi au kumwambia mtu moja kwa moja.",
          text: [
            "Ukocha unamsaidia mtu kupata majibu yake mwenyewe kupitia maswali na kusikiliza. Kocha hahitaji kuijua kazi vizuri zaidi; anayefundishwa ndiye anayefikiri zaidi. Unafaa mtu anapokuwa na ujuzi au maarifa lakini amekwama, au anahitaji kukuza uwezo wake wa kufanya maamuzi.",
            "Ushauri elekezi (mentoring) ni uhusiano wa muda mrefu ambapo mtu mwenye uzoefu zaidi anashiriki ushauri, hadithi, watu anaowajua na mafunzo aliyopata. Mshauri elekezi mara nyingi anafanya kazi katika fani hiyo hiyo. Unafaa kwa maamuzi ya kikazi, kujifunza \"mambo yanavyokwenda kweli\" na kujenga mtandao wa watu.",
            "Wakati mwingine hakuna kati ya hizo inayofaa na unapaswa kumwambia tu. Mfanyakazi mpya anayekaribia kufanya kosa la usalama anahitaji maagizo, si maswali. Viongozi wazuri hubadilisha kati ya kuambia, ukocha na ushauri elekezi kulingana na anachohitaji mtu."
          ],
          words: [["Ukocha (coaching)", "kumsaidia mtu kupata majibu yake mwenyewe kwa kuuliza maswali na kusikiliza."], ["Ushauri elekezi (mentoring)", "uhusiano wa muda mrefu ambapo mtu mwenye uzoefu zaidi anashiriki ushauri na mafunzo."], ["Mwanafunzi wa mshauri (mentee)", "mtu anayeongozwa na mshauri elekezi."], ["Anayefundishwa (coachee)", "mtu anayepata ukocha."]],
          slides: [
            { title: "Ukocha", bullets: ["Maswali na kusikiliza", "Mtu mwenyewe ndiye anayefikiri", "Unafaa akiwa amekwama au anakuza uwezo wa kuamua"] },
            { title: "Ushauri elekezi", bullets: ["Uhusiano wa muda mrefu", "Unashiriki uzoefu, ushauri na watu unaowajua", "Unafaa kwa kazi na mambo yanavyokwenda kweli"] },
            { title: "Wakati mwingine, mwambie tu", bullets: ["Hatari za usalama", "Kazi mpya kabisa", "Badilisha mtindo kulingana na hitaji"] }
          ],
          tryIt: "Andika hali tatu halisi kutoka kazini au maishani mwako ambapo mtu alikuomba msaada. Kwa kila moja, andika kama ukocha, ushauri elekezi au kumwambia moja kwa moja kungesaidia zaidi, na kwa nini.",
          youCanNow: "kutofautisha ukocha na ushauri elekezi na kuchagua njia inayofaa kwa hali fulani.",
          quickCheck: [
            { objective: "O1", q: "Ushauri elekezi ni nini?", options: ["Agizo la usalama la mara moja", "Uhusiano wa muda mrefu ambapo mtu mwenye uzoefu zaidi anashiriki ushauri na mafunzo", "Kuuliza maswali ya ndiyo au hapana tu", "Tathmini ya utendaji kazi"], answer: 1, why: "Ushauri elekezi unashiriki uzoefu kwa muda, mara nyingi katika fani hiyo hiyo." },
            { objective: "O1", q: "Mwanatimu anataka kujua jinsi kupandishwa cheo kunavyofanyika kweli katika fani yenu. Njia ipi inafaa zaidi?", options: ["Mwambie asome sera peke yake", "Mfundishe kwa maswali tu", "Puuza hadi wakati wa tathmini", "Mwongoze kwa kushiriki uzoefu wako na watu unaowajua"], answer: 3, why: "Ushauri elekezi unafaa kwa maamuzi ya kikazi na kujifunza mambo yanavyokwenda kweli." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kusikiliza ili watu wahisi wamesikilizwa",
          minutes: 5,
          goal: "Sikiliza kikamilifu na uonyeshe umeelewa kwa kufupisha.",
          text: [
            "Wengi wetu tunasikiliza huku tukipanga tutakachosema baadaye. Katika ukocha, hilo linazuia. Kusikiliza kikamilifu ni kumpa mtu mwingine umakini wako wote: simu pembeni, macho kwake, bila kukatiza, na bila kuingilia na hadithi yako mwenyewe.",
            "Onyesha unasikiliza. Tikisa kichwa, sema \"endelea\", na kila baada ya dakika chache fupisha: \"Kwa hiyo ninachosikia ni kwamba unataka kuongoza mradi lakini una wasiwasi timu haitakufuata. Ni hivyo?\" Ufupisho mzuri unamruhusu mtu asikie fikra zake mwenyewe na akurekebishe kama hukuelewa sawa.",
            "Sikiliza hisia na maadili pamoja na ukweli: \"Unaonekana umechukizwa\" au \"Inaonekana haki ni muhimu sana kwako.\" Zoea ukimya. Mara nyingi kimya kinakuja kabla tu ya wazo bora la mtu."
          ],
          steps: ["Weka simu yako pembeni na umwangalie mtu.", "Usikatize wala usiingilie na hadithi yako.", "Mtie moyo: tikisa kichwa, \"endelea\".", "Fupisha ulichosikia na uulize kama ni sahihi.", "Taja hisia unazoziona.", "Ruhusu ukimya."],
          words: [["Kusikiliza kwa makini (active listening)", "kusikiliza kwa umakini wote na kuonyesha umeelewa, kwa mfano kwa kufupisha."], ["Kufupisha", "kurudia mambo makuu kwa ufupi kwa maneno yako mwenyewe."]],
          slides: [
            { title: "Kusikiliza kikamilifu", bullets: ["Simu pembeni, macho kwake", "Bila kukatiza", "Bila kuingilia na hadithi yako"] },
            { title: "Onyesha unasikiliza", bullets: ["Tikisa kichwa, \"endelea\"", "Fupisha: \"Kwa hiyo ninachosikia ni...\"", "Uliza: \"Ni hivyo?\""] },
            { title: "Sikiliza kwa kina zaidi", bullets: ["Sikia hisia na maadili, si ukweli tu", "Ruhusu ukimya: mawazo mazuri mara nyingi hufuata"] }
          ],
          tryIt: "Mwombe mwenzako aongee kwa dakika tatu kuhusu kitu anachotaka kuboresha. Usitoe ushauri. Kisha fupisha ulichosikia kwa sentensi mbili na uulize, \"Nimeelewa sawa?\"",
          youCanNow: "kusikiliza kwa umakini wote na kufupisha ili mtu mwingine ahisi amesikilizwa.",
          quickCheck: [
            { objective: "O2", q: "Nini kinazuia kusikiliza kikamilifu?", options: ["Kupanga utakachosema baadaye", "Kutikisa kichwa", "Kufupisha", "Kuruhusu ukimya"], answer: 0, why: "Ukipanga jibu lako, husikilizi kikamilifu." },
            { objective: "O2", q: "Mtu anapoongea kuhusu tatizo, unakumbuka hadithi yako inayofanana. Ungefanya nini?", options: ["Kusimulia hadithi yako mara moja", "Kukatiza ili kutoa ushauri", "Kuendelea kusikiliza na kufupisha alichosema", "Kuangalia simu yako"], answer: 2, why: "Kusikiliza kikamilifu ni kutoingilia na hadithi yako mwenyewe." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuuliza maswali yenye nguvu",
          minutes: 5,
          goal: "Geuza ushauri kuwa maswali ya wazi yanayowasaidia watu kufikiri wenyewe.",
          text: [
            "Swali lenye nguvu ni la wazi (haliwezi kujibiwa kwa ndiyo au hapana), fupi, na linahusu fikra za mtu mwingine. Mara nyingi linaanza na \"nini\" au \"vipi\": \"Mafanikio yangeonekanaje?\" \"Umeshajaribu nini?\" \"Ni nini hasa kinakuzuia?\"",
            "Jihadhari na ushauri uliojificha kama swali, kama \"Umefikiria kumpigia simu?\" Hilo ni wazo lako, si lake. Pia kuwa makini na maswali ya \"kwa nini\", ambayo yanaweza kusikika kama lawama. \"Nini kilikufanya ufanye hivyo?\" kwa kawaida linasikika vizuri zaidi kuliko \"Kwa nini ulifanya hivyo?\"",
            "Swali moja lenye nguvu ni \"Na nini kingine?\" Linawasaidia watu kwenda zaidi ya jibu lao la kwanza. Uliza swali moja kwa wakati, kisha nyamaza na usikilize."
          ],
          steps: ["Anza na \"nini\" au \"vipi\".", "Liweke fupi na kuhusu fikra zake.", "Epuka ushauri uliojificha kama swali.", "Badilisha \"kwa nini\" kuwa \"nini kilikufanya...\".", "Uliza \"Na nini kingine?\"", "Uliza swali moja, kisha nyamaza na usikilize."],
          words: [["Swali la wazi", "swali lisiloweza kujibiwa kwa ndiyo au hapana tu."], ["Swali funge", "swali linalojibiwa kwa ndiyo, hapana au ukweli mmoja."]],
          slides: [
            { title: "Maswali yenye nguvu ni", bullets: ["Ya wazi, mafupi", "Kuhusu fikra zake", "Mara nyingi yanaanza na \"nini\" au \"vipi\""] },
            { title: "Mifano", bullets: ["\"Mafanikio yangeonekanaje?\"", "\"Umeshajaribu nini?\"", "\"Ni nini hasa kinakuzuia?\"", "\"Na nini kingine?\""] },
            { title: "Jihadhari na", bullets: ["Ushauri uliojificha kama swali", "Maswali ya \"kwa nini\" yanayosikika kama lawama", "Kuuliza maswali mawili kwa wakati mmoja"] }
          ],
          tryIt: "Andika mambo matatu unayowashauri watu mara nyingi. Geuza kila moja kuwa swali la wazi. Kwa mfano, \"Unapaswa kumwuliza bosi wako\" linakuwa \"Nani angeweza kukusaidia katika hili?\"",
          youCanNow: "kuuliza maswali mafupi ya wazi yanayowasaidia watu kupata majibu yao wenyewe.",
          quickCheck: [
            { objective: "O3", q: "Nini kinafanya swali kuwa \"la wazi\"?", options: ["Ni refu sana", "Haliwezi kujibiwa kwa ndiyo au hapana", "Lina ushauri wako", "Linaanza na \"kwa nini\""], answer: 1, why: "Maswali ya wazi yanamkaribisha mtu kufikiri na kueleza." },
            { objective: "O3", q: "Unataka kupendekeza wazo lako, \"Ongea na msimamizi wako.\" Ungeligeuzaje kuwa swali la ukocha?", options: ["\"Umefikiria kuongea na msimamizi wako?\"", "\"Kwa nini hujaongea na msimamizi wako?\"", "\"Unapaswa kuongea na msimamizi wako.\"", "\"Nani angeweza kukusaidia katika hili?\""], answer: 3, why: "Swali la wazi linamwacha apate wazo mwenyewe; mengine ni ushauri au lawama." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Mazungumzo ya ukocha",
        questions: [
          { objective: "O1", q: "Katika ukocha, nani anafikiri zaidi?", options: ["Kocha", "Mtu anayefundishwa", "Bosi", "Kitabu"], answer: 1, why: "Ukocha unamsaidia mtu kupata majibu yake mwenyewe." },
          { objective: "O1", q: "Mfanyakazi mpya anakaribia kutumia mashine kwa njia isiyo salama. Njia ipi inafaa zaidi?", options: ["Mazungumzo marefu ya ukocha", "Makubaliano ya ushauri elekezi", "Mwambie wazi jinsi ya kuifanya kwa usalama", "Uliza \"Na nini kingine?\""], answer: 2, why: "Hatari za usalama zinahitaji maagizo yaliyo wazi." },
          { objective: "O2", q: "Upi ni ufupisho mzuri wakati unasikiliza?", options: ["\"Hilo liliwahi kunitokea pia...\"", "\"Acha kazi tu.\"", "\"Haya, tuendelee na mengine.\"", "\"Kwa hiyo unataka kuongoza mradi lakini una wasiwasi timu haitakufuata. Ni hivyo?\""], answer: 3, why: "Unarudia mambo yake makuu na kukagua kama umeelewa." },
          { objective: "O3", q: "Lipi ni swali la wazi?", options: ["\"Umeshajaribu nini?\"", "\"Ulimpigia simu?\"", "\"Leo ni Jumanne?\"", "\"Umemaliza?\""], answer: 0, why: "Haliwezi kujibiwa kwa ndiyo au hapana." },
          { objective: "O3", q: "\"Umefikiria kumpigia simu?\" ni tatizo kwa sababu ni:", options: ["Refu mno", "Ushauri uliojificha kama swali", "Wazi mno", "Kuhusu hisia"], answer: 1, why: "Linaleta wazo lako badala ya kutoa wazo lake." }
        ]
      }
    },
    {
      name: "Sura 2: Ukuaji unaodumu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuendesha mazungumzo kwa mfumo wa GROW",
          minutes: 6,
          goal: "Ongoza mazungumzo ya ukocha kupitia Lengo, Hali halisi, Machaguo na Nia.",
          text: [
            "GROW ni ramani rahisi inayotumika sana kwa mazungumzo ya ukocha. G ni Goal (Lengo): anataka nini kutoka mazungumzo haya na kwa muda mrefu? R ni Reality (Hali halisi): nini kinaendelea sasa, ameshajaribu nini? O ni Options (Machaguo): angeweza kufanya nini? W ni Will (Nia, au njia ya kusonga mbele): atafanya nini, na lini?",
            "Tumia muda kwenye Hali halisi kabla ya kukimbilia Machaguo. Mara nyingi mtu anaona jibu mara hali inapoeleweka. Katika Machaguo, omba mawazo kadhaa, na \"nini kingine?\", kabla ya kuchagua. Ukiwa na wazo, unaweza kulitoa mwisho, kama chaguo moja kati ya mengi.",
            "Maliza kwa ahadi iliyo wazi: \"Hatua yako ya kwanza ni ipi, na utaifanya lini?\" Uliza ana uhakika kiasi gani kwa kipimo cha 1 hadi 10. Kikiwa chini, uliza nini kingekifanya kiwe juu zaidi."
          ],
          steps: ["Lengo: \"Unataka kupata nini kutoka mazungumzo haya?\"", "Hali halisi: \"Nini kinaendelea sasa? Umeshajaribu nini?\"", "Machaguo: \"Ungeweza kufanya nini? Nini kingine?\"", "Nia: \"Utafanya nini, na kufikia lini?\"", "Kagua kujitolea: \"Una uhakika kiasi gani, 1 hadi 10?\""],
          words: [["Mfumo wa GROW", "ramani ya ukocha ya hatua nne: Goal (Lengo), Reality (Hali halisi), Options (Machaguo), Will (Nia)."], ["Kujitolea (ahadi)", "ahadi iliyo wazi ya kuchukua hatua fulani kufikia wakati fulani."]],
          slides: [
            { title: "Mfumo wa GROW", bullets: ["Goal (Lengo): unataka nini?", "Reality (Hali halisi): nini kinaendelea sasa?", "Options (Machaguo): ungeweza kufanya nini?", "Will (Nia): utafanya nini, kufikia lini?"] },
            { title: "Tumia muda kwenye Hali halisi", bullets: ["Jibu mara nyingi linajitokeza mambo yakiwa wazi", "Usikimbilie suluhisho"] },
            { title: "Machaguo, kisha ahadi", bullets: ["Omba mawazo kadhaa, na \"nini kingine?\"", "Toa wazo lako mwisho, kama chaguo moja", "\"Una uhakika kiasi gani, 1 hadi 10?\""] }
          ],
          tryIt: "Andika swali moja la GROW kwa kila hatua kwenye kadi. Na mwenzako, fanyeni mazungumzo ya GROW ya dakika 15 kuhusu kitu anachotaka kuboresha. Malizeni na hatua yake ya kwanza na tarehe.",
          youCanNow: "kuongoza mazungumzo ya ukocha kutoka lengo hadi hatua inayofuata iliyo wazi na yenye ahadi kwa GROW.",
          quickCheck: [
            { objective: "O4", q: "Katika GROW, herufi O inasimama kwa nini?", options: ["Options (Machaguo)", "Outcome (Matokeo)", "Order (Agizo)", "Opinion (Maoni)"], answer: 0, why: "GROW ni Goal, Reality, Options, Will." },
            { objective: "O4", q: "Baada ya dakika kumi, mtu ametaja chaguo moja tu. Ungeuliza nini?", options: ["\"Hilo ndilo jibu lako la mwisho?\"", "\"Hiki ndicho ningefanya mimi.\"", "\"Na nini kingine?\"", "\"Kwa nini moja tu?\""], answer: 2, why: "\"Na nini kingine?\" kinawasaidia watu kwenda zaidi ya jibu lao la kwanza." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuweka lengo la maendeleo",
          minutes: 5,
          goal: "Msaidie mtu kugeuza nia kuwa lengo la maendeleo lililo wazi na linalopimika.",
          text: [
            "Lengo la maendeleo linahusu kukuza ujuzi, si kumaliza kazi tu. \"Kuwa bora katika kuzungumza\" ni nia tu. Lengo lililo wazi linasema nini, kiasi gani na lini: \"Kuongoza kikao kifupi cha timu cha Jumatatu peke yangu, wiki tatu mfululizo, kufikia mwisho wa Machi.\"",
            "Watu wengi wanatumia SMART kukagua lengo: Specific (Mahususi), Measurable (Linapimika), Achievable (Linawezekana), Relevant (Linafaa) na Time-bound (Lina muda maalum). Lengo linapaswa kuwa la mtu mwenyewe. Uliza anataka kukuza nini, na kwa nini ni muhimu kwake, kabla ya kuongeza kile kazi inachohitaji.",
            "Gawa lengo kuwa hatua ndogo za kujifunza: kitu cha kusoma au kutazama, mtu wa kumtazama akifanya kazi, nafasi ya kufanya mazoezi, na mtu wa kutoa maoni. Ukuaji mwingi unatokana na kufanya, si kozi peke yake."
          ],
          steps: ["Uliza anataka kukuza nini na kwa nini ni muhimu.", "Liandike kama nini, kiasi gani, kufikia lini.", "Likague kwa SMART.", "Orodhesha hatua za kujifunza: soma, mtazame mtu, fanya mazoezi, pata maoni.", "Kubalianeni hatua ya kwanza."],
          words: [["Lengo la maendeleo", "lengo la kukuza ujuzi au uwezo."], ["SMART", "ukaguzi wa lengo: Specific, Measurable, Achievable, Relevant, Time-bound (mahususi, linapimika, linawezekana, linafaa, lina muda maalum)."], ["Kujifunza kwa kuambatana (shadowing)", "kujifunza kwa kumtazama mtu akifanya kazi."]],
          slides: [
            { title: "Nia dhidi ya lengo", bullets: ["Nia: \"Kuwa bora katika kuzungumza\"", "Lengo: \"Kuongoza kikao cha Jumatatu peke yangu, wiki 3 mfululizo, kufikia mwisho wa Machi\""] },
            { title: "Likague kwa SMART", bullets: ["Mahususi na linapimika", "Linawezekana na linafaa", "Lina muda maalum"] },
            { title: "Lengo lake, sababu zake", bullets: ["Uliza anataka kukuza nini", "Uliza kwa nini ni muhimu kwake"] },
            { title: "Hatua za kujifunza", bullets: ["Soma au tazama", "Ambatana na mtu na umtazame", "Fanya mazoezi", "Pata maoni"] }
          ],
          tryIt: "Na mwenzako wa mazoezi, geuzeni nia moja kuwa lengo la maendeleo la SMART. Kisha orodhesheni hatua tatu za kujifunza, pamoja na angalau nafasi moja ya kufanya mazoezi.",
          youCanNow: "kumsaidia mtu kuandika lengo la maendeleo lililo wazi na hatua za kujifunza za kulifikia.",
          quickCheck: [
            { objective: "O5", q: "Ipi ni nia badala ya lengo la maendeleo lililo wazi?", options: ["\"Kuwasilisha ripoti ya mwezi peke yangu katika mikutano miwili kufikia Juni\"", "\"Kuwa bora katika kuzungumza\"", "\"Kuendesha mafunzo mafupi matatu ya usalama peke yangu kufikia mwisho wa robo mwaka\"", "\"Kuwafundisha wafanyakazi wapya wawili kutumia mashine ya malipo kufikia Mei 1\""], answer: 1, why: "Lengo lililo wazi linasema nini, kiasi gani na lini; nia haisemi." },
            { objective: "O5", q: "Mwanafunzi wako anataka kuwa bora katika kushughulikia wateja waliokasirika. Hatua ipi ya kujifunza ungeongeza kwanza?", options: ["Kozi ndefu ya mtandaoni peke yake", "Hakuna hadi mwaka ujao", "Kuambatana na mfanyakazi mwenzake mwenye ujuzi, kisha kufanya mazoezi na kupata maoni", "Kusoma historia ya kampuni"], answer: 2, why: "Ukuaji mwingi unatokana na kufanya na kufanya mazoezi huku ukipata maoni." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Makubaliano ya ushauri elekezi na kufuatilia ukuaji",
          minutes: 5,
          goal: "Andika makubaliano rahisi ya ushauri elekezi na kifuatiliaji cha kufuatilia ukuaji wa mtu.",
          text: [
            "Uhusiano wa ushauri elekezi unafanya kazi vizuri zaidi kukiwa na makubaliano mafupi mwanzoni. Kubalianeni kuhusu lengo, mtakutana mara ngapi (kwa mfano kila mwezi kwa miezi sita), kwa njia gani (ana kwa ana, simu au video), nini ni siri, nani anaweka ajenda (kwa kawaida mwanafunzi wa mshauri), na jinsi kila mmoja anavyoweza kuumaliza kwa upole.",
            "Fuatilieni ukuaji ili nyote mwone maendeleo. Kifuatiliaji rahisi kinaweza kuwa hati au jedwali la pamoja lenye lengo, hatua za kujifunza, tarehe za kukutana, kilichojaribiwa, kilichojifunzwa, na hatua inayofuata. Sherehekeeni maendeleo, hata hatua ndogo.",
            "Katika kila kikao cha kukagua maendeleo, angalieni tena lengo, ulizeni nini kilienda vizuri na nini kilikuwa kigumu, na kubalianeni hatua inayofuata. Mwishoni, kagueni pamoja nini kimebadilika, na ongeeni kuhusu kinachofuata: lengo jipya, mshauri elekezi mpya, au kuwa mshauri elekezi wewe mwenyewe."
          ],
          steps: ["Kubalianeni lengo, mara ngapi, kwa njia gani, na kwa muda gani.", "Kubalianeni nini kinabaki siri na nani anaweka ajenda.", "Kubalianeni jinsi kila mmoja anavyoweza kuumaliza kwa upole.", "Andaeni kifuatiliaji: lengo, hatua, tarehe, mafunzo, hatua inayofuata.", "Katika kila kikao: kagueni, tafakarini, hatua inayofuata.", "Mwishoni, kagueni nini kimebadilika na nini kinafuata."],
          words: [["Makubaliano ya ushauri elekezi", "maelewano mafupi yaliyoandikwa kuhusu jinsi uhusiano wa ushauri elekezi utakavyofanya kazi."], ["Kifuatiliaji", "kumbukumbu rahisi ya maendeleo kuelekea lengo, yenye tarehe."], ["Kikao cha kukagua (check-in)", "mkutano uliopangwa wa kukagua maendeleo."]],
          slides: [
            { title: "Makubaliano ya ushauri elekezi", bullets: ["Lengo, mara ngapi, kwa njia gani, kwa muda gani", "Nini kinabaki siri", "Kwa kawaida mwanafunzi wa mshauri anaweka ajenda", "Jinsi ya kuumaliza kwa upole"] },
            { title: "Kifuatiliaji rahisi", bullets: ["Lengo na hatua za kujifunza", "Tarehe za kukutana", "Kilichojaribiwa na kujifunzwa, hatua inayofuata"] },
            { title: "Kila kikao cha kukagua", bullets: ["Angalieni tena lengo", "Nini kilienda vizuri? Nini kilikuwa kigumu?", "Kubalianeni hatua inayofuata; sherehekeeni maendeleo"] }
          ],
          tryIt: "Kazi ya mwisho: fanya mazungumzo ya GROW ya dakika 20 na mwenzako. Kisha andikeni pamoja lengo lake la maendeleo la SMART, makubaliano ya ushauri elekezi ya aya moja, na kifuatiliaji chenye tarehe tatu za kukutana.",
          youCanNow: "kuanzisha uhusiano wa ushauri elekezi wenye makubaliano yaliyo wazi na kufuatilia ukuaji wa mtu kwa muda.",
          quickCheck: [
            { objective: "O6", q: "Nani kwa kawaida anaweka ajenda katika mkutano wa ushauri elekezi?", options: ["Meneja wa mshauri elekezi", "Mshauri elekezi", "Idara ya rasilimali watu", "Mwanafunzi wa mshauri (mentee)"], answer: 3, why: "Mwanafunzi wa mshauri kwa kawaida anaweka ajenda, kwa sababu ni ukuaji wake." },
            { objective: "O6", q: "Katika kikao cha kukagua, mwanafunzi wako amepiga hatua ndogo mbele. Ungefanya nini?", options: ["Kuisherehekea na kukubaliana hatua inayofuata", "Kusema haitoshi", "Kuruka hadi lengo jipya", "Kufuta kikao kinachofuata"], answer: 0, why: "Kusherehekea maendeleo madogo kunawapa watu ari ya kuendelea." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Ukuaji unaodumu",
        questions: [
          { objective: "O4", q: "Herufi R katika GROW inasimama kwa nini?", options: ["Results (Matokeo)", "Rules (Sheria)", "Reward (Zawadi)", "Reality (Hali halisi)"], answer: 3, why: "Reality (Hali halisi): nini kinaendelea sasa." },
          { objective: "O4", q: "Unapaswa kutoa wazo lako mwenyewe lini katika hatua ya Machaguo?", options: ["Kwanza, ili asipoteze muda", "Mwisho, kama chaguo moja kati ya mengi", "Kamwe, kwa hali yoyote", "Kwa maandishi tu"], answer: 1, why: "Kulitoa mwisho kunaweka fikra zake mbele." },
          { objective: "O5", q: "Lipi ni lengo la maendeleo lililo wazi?", options: ["\"Kuwa kiongozi bora\"", "\"Kujitahidi zaidi\"", "\"Kuongoza kikao cha Jumatatu peke yangu wiki tatu mfululizo kufikia mwisho wa Machi\"", "\"Kujifunza mambo\""], answer: 2, why: "Linasema nini, kiasi gani na lini." },
          { objective: "O6", q: "Nani kwa kawaida anaweka ajenda katika mkutano wa ushauri elekezi?", options: ["Mwanafunzi wa mshauri (mentee)", "Bosi wa mshauri elekezi", "Rasilimali watu (HR)", "Hakuna mtu"], answer: 0, why: "Uhusiano ni kwa ajili ya ukuaji wa mwanafunzi wa mshauri." },
          { objective: "O6", q: "Kifuatiliaji rahisi cha ukuaji kina nini?", options: ["Maoni ya mshauri elekezi tu", "Nywila za siri", "Hakuna kilichoandikwa", "Lengo, hatua, tarehe za kukutana, kilichojifunzwa na hatua inayofuata"], answer: 3, why: "Hivi vinawawezesha wote wawili kuona maendeleo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Ukocha na Ushauri Elekezi (Mentoring)",
    questions: [
      { objective: "O1", q: "Ukocha kimsingi unahusu:", options: ["Kuwaambia watu wafanye nini", "Kuwasaidia watu kupata majibu yao wenyewe kupitia maswali na kusikiliza", "Kutoa zawadi", "Kukagua mahudhurio"], answer: 1, why: "Anayefundishwa ndiye anayefikiri." },
      { objective: "O1", q: "Ushauri elekezi kwa kawaida ni:", options: ["Agizo la mara moja", "Mtihani", "Uhusiano wa muda mrefu ambapo uzoefu unashirikiwa", "Adhabu"], answer: 2, why: "Washauri elekezi wanashiriki uzoefu kwa muda." },
      { objective: "O1", q: "Mfanyakazi mwenye ujuzi amekwama kuchagua kati ya njia mbili nzuri. Kipi kinafaa zaidi?", options: ["Ukocha", "Kumwambia jibu", "Kupuuza", "Onyo la maandishi"], answer: 0, why: "Ana ujuzi; ukocha unamsaidia kutumia uwezo wake wa kuamua." },
      { objective: "O2", q: "Kusikiliza kikamilifu ni:", options: ["Kuangalia simu yako wakati anaongea", "Kupanga jibu lako", "Kusimulia hadithi yako mara moja", "Kutoa umakini wako wote, bila kukatiza"], answer: 3, why: "Umakini bila kukatiza unawasaidia watu kufikiri." },
      { objective: "O2", q: "Kwa nini ufupishe ulichosikia?", options: ["Kumaliza mazungumzo", "Ili asikie fikra zake mwenyewe na aweze kukurekebisha", "Kuonyesha wewe una akili zaidi", "Kubadilisha mada"], answer: 1, why: "Ufupisho unakagua uelewa na kusaidia kutafakari." },
      { objective: "O2", q: "Mtu ananyamaza baada ya swali. Unapaswa:", options: ["Kujaza ukimya kwa ushauri", "Kuuliza maswali matatu zaidi", "Kuruhusu ukimya; wazo zuri mara nyingi hufuata", "Kumaliza mkutano"], answer: 2, why: "Ukimya unawapa watu nafasi ya kufikiri." },
      { objective: "O3", q: "Lipi ni swali la ukocha lenye nguvu zaidi?", options: ["\"Ulifanya?\"", "\"Si ni wazi?\"", "\"Kwa nini ungefanya hivyo?\"", "\"Ni nini hasa kinakuzuia?\""], answer: 3, why: "Ni la wazi na linafikia kiini cha jambo." },
      { objective: "O3", q: "Njia ya upole zaidi ya kuuliza \"Kwa nini ulifanya hivyo?\" ni:", options: ["\"Nini kilikufanya ufanye hivyo?\"", "\"Nani alikuambia ufanye hivyo?\"", "\"Unatania?\"", "\"Hukujua vizuri zaidi?\""], answer: 0, why: "Linachunguza fikra bila kusikika kama lawama." },
      { objective: "O3", q: "Swali \"Na nini kingine?\" linawasaidia watu:", options: ["Kuacha kuongea", "Kwenda zaidi ya jibu lao la kwanza", "Kukubaliana nawe", "Kuhisi wanalaumiwa"], answer: 1, why: "Majibu ya kwanza mara chache ndiyo pekee." },
      { objective: "O4", q: "GROW inasimama kwa:", options: ["Grade, Review, Order, Wait", "Give, Rest, Own, Win", "Goal, Reality, Options, Will", "Growth, Rules, Outcome, Work"], answer: 2, why: "Goal, Reality, Options, Will (Lengo, Hali halisi, Machaguo, Nia au njia ya kusonga mbele)." },
      { objective: "O4", q: "Swali lipi la GROW ni la hatua ya Nia (Will)?", options: ["\"Utafanya nini, na kufikia lini?\"", "\"Nini kinaendelea sasa?\"", "\"Unataka nini kutoka mazungumzo haya?\"", "\"Ungeweza kufanya nini?\""], answer: 0, why: "Nia inahusu ahadi ya kuchukua hatua." },
      { objective: "O4", q: "Mtu anapima kujitolea kwake 4 kati ya 10. Unauliza:", options: ["\"Kwa nini chini hivyo?\"", "Hakuna kitu", "\"Fanya tu hata hivyo.\"", "\"Nini kingekifanya kiwe juu zaidi?\""], answer: 3, why: "Linamsaidia kuondoa kinachomzuia." },
      { objective: "O4", q: "Kwa nini utumie muda kwenye Hali halisi kabla ya Machaguo?", options: ["Kujaza muda", "Jibu mara nyingi linajitokeza hali ikiwa wazi", "Machaguo hayana faida kamwe", "Kutafuta mtu wa kulaumu"], answer: 1, why: "Kuelewa hali ya sasa kunaleta maamuzi bora." },
      { objective: "O5", q: "SMART inasimama kwa:", options: ["Simple, Modern, Active, Ready, True", "Specific, Measurable, Achievable, Relevant, Time-bound", "Strong, Many, Able, Real, Total", "Short, Main, All, Right, Today"], answer: 1, why: "Ukaguzi huu mitano unafanya lengo liwe wazi." },
      { objective: "O5", q: "Nani anapaswa kumiliki lengo la maendeleo?", options: ["Mtu anayekua", "Meneja peke yake", "Wakili wa kampuni", "Hakuna mtu"], answer: 0, why: "Watu wanajitolea kwa malengo yaliyo yao." },
      { objective: "O5", q: "Ukuaji mwingi unatokana na nini?", options: ["Kusoma tu", "Vyeti tu", "Kufanya na kufanya mazoezi, pamoja na maoni", "Kusubiri"], answer: 2, why: "Mazoezi pamoja na maoni yanajenga ujuzi." },
      { objective: "O6", q: "Makubaliano ya ushauri elekezi yanapaswa kuwa na:", options: ["Mshahara wa mshauri elekezi", "Mtakutana mara ngapi, nini ni siri na jinsi ya kuumaliza kwa upole", "Tarehe ya kuanza tu", "Orodha ya makosa ya mwanafunzi wa mshauri"], answer: 1, why: "Masharti yaliyo wazi yanazuia mkanganyiko baadaye." },
      { objective: "O6", q: "Katika kila kikao cha kukagua cha ushauri elekezi, unapaswa:", options: ["Kuanza lengo jipya kila mara", "Kuongea kuhusu wewe tu", "Kufuta kikao mambo yakienda vizuri", "Kuangalia tena lengo, kutafakari na kukubaliana hatua inayofuata"], answer: 3, why: "Ukaguzi wa mara kwa mara unaweka ukuaji kwenye njia sahihi." },
      { objective: "O6", q: "Kwa nini kusherehekea maendeleo madogo?", options: ["Kunawapa watu ari ya kuendelea", "Kunachukua nafasi ya lengo", "Kunatakiwa na sheria", "Kunamaliza uhusiano"], answer: 0, why: "Kuona maendeleo kunawafanya watu waendelee." },
      { objective: "O6", q: "Mwishoni mwa uhusiano wa ushauri elekezi, hatua nzuri ni:", options: ["Kuacha kuongea", "Kuficha kifuatiliaji", "Kukagua nini kimebadilika na kuongea kuhusu kinachofuata", "Kuanza upya kutoka mwanzo"], answer: 2, why: "Ukaguzi unamaliza vizuri na unaonyesha hatua inayofuata ya ukuaji." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 2, 3, 6, 9, 10, 13, 14, 16, 17]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Kusikiliza", objective: "O2", notYet: "Aliongea zaidi kuliko mwenzake au alikatiza mara nyingi.", meets: "Alisikiliza zaidi kuliko alivyoongea na alifupisha angalau mara moja.", exceeds: "Alitaja hisia au thamani aliyoisikia, na mwenzake akakubali." },
      { name: "Maswali ya wazi", objective: "O3", notYet: "Maswali ya wazi chini ya matano, au mengi yalikuwa ushauri.", meets: "Angalau maswali matano ya wazi, moja kwa wakati.", exceeds: "Alitumia \"Na nini kingine?\" na aliepuka maswali ya \"kwa nini\" yenye lawama." },
      { name: "Mazungumzo ya GROW", objective: "O4", notYet: "Aliruka hatua au alienda moja kwa moja kwenye ushauri.", meets: "Alipitia Lengo, Hali halisi, Machaguo na Nia na akamaliza na hatua ya kwanza na tarehe.", exceeds: "Aliomba kiwango cha kujitolea cha 1 hadi 10 na nini kingekifanya kiwe juu zaidi." },
      { name: "Lengo la maendeleo", objective: "O5", notYet: "Lengo ni nia tu, kama \"kuwa bora katika kuzungumza\".", meets: "Lengo lililo wazi linalosema nini, kiasi gani na lini, na ni la mwenzake mwenyewe.", exceeds: "Limegawanywa kuwa hatua ndogo za kujifunza zenye mazoezi na maoni." },
      { name: "Makubaliano na kifuatiliaji", objective: "O6", notYet: "Makubaliano au kifuatiliaji hakipo.", meets: "Makubaliano ya aya moja (mara ngapi, kwa njia gani, kwa muda gani, nini ni siri) na kifuatiliaji chenye tarehe tatu za kukutana.", exceeds: "Pia yanasema jinsi kila mmoja anavyoweza kuumaliza kwa upole." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoanza uhusiano wa ukocha au ushauri elekezi ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wa washauri (mentees) wanaofikia lengo lao la maendeleo kufikia tarehe iliyowekwa",
      "Wanafunzi wanaochukua kozi nyingine ya uongozi ya Koach Learn"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta ya kutazama masomo",
      "Mwenzako wa mazoezi kwa mazungumzo ya dakika 20",
      "Karatasi au hati ya pamoja kwa lengo, makubaliano na kifuatiliaji",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Wapange wanafunzi wawili wawili kwa mazoezi ya GROW; wabadilishane nafasi za kocha na anayefundishwa.",
      "Tumia mtu wa tatu kama mtazamaji anayehesabu maswali ya wazi na mafupisho.",
      "Waombe wenzi watumie lengo halisi lakini lisilo na uzito mkubwa, na waweke siri kinachosemwa.",
      "Wakumbushe wanafunzi kwamba makosa ya usalama yanahitaji kuambiwa moja kwa moja, si ukocha.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};

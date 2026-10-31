"use strict";

// Koach Learn course (Swahili translation of seniors/seniors-ai-travel.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Facts checked 27 October 2026 on tsa.gov/real-id (see the English course).

module.exports = {
  id: "seniors-ai-travel-sw",
  lang: "sw",
  translationOf: "seniors-ai-travel",
  category: "Seniors and Technology",
  name: "AI kama Mwenzako wa Safari",
  skills: "Kupanga ratiba ya safari kwa AI, Kukagua ukweli wa safari kwenye tovuti rasmi, Kuandaa orodha ya mizigo, Kutumia apps za ramani na za kutafsiri, Kukaa salama na kuwasiliana ukiwa safarini",
  outcome: "kutumia msaidizi wa AI kupanga safari fupi kwa mwendo unaokufaa, kukagua ukweli muhimu kwenye tovuti rasmi, kuandaa orodha ya mizigo, na kutumia ramani na zana za kutafsiri za simu yako ukiwa njiani.",
  about: [
    "Kozi hii ni kwa wazee wanaotaka kusafiri, iwe kwenda kuwatembelea wajukuu walio mbali, kwenda ziara ya basi, au hatimaye kuona mahali walipokuwa wakipaota siku zote.",
    "Utatumia msaidizi wa AI wa bure kama ChatGPT, Microsoft Copilot au Google Gemini kupanga safari tulivu inayolingana na nguvu na mahitaji yako, kisha utakagua ukweli muhimu (sheria za vitambulisho, saa za kufungua, bei) kwenye tovuti rasmi. Pia utatumia ramani, kutafsiri na kushiriki mahali ulipo kwenye simu yako.",
    "Kila somo linachukua kama dakika tano. Kazi za \"Jaribu sasa\" zinajenga mpango halisi wa safari ungependa kufanya. Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Panga safari ya siku tatu kwa msaidizi wa AI: mpango wa siku kwa siku kwa mwendo unaokufaa wenye muda wa kupumzika, orodha ya mizigo yenye dawa zako na kitambulisho, na ukweli mitatu uliokagua kwenye tovuti rasmi (kama kitambulisho unachohitaji kupanda ndege na saa za kufungua za mahali utakapotembelea). Mshirikishe mwanafamilia mpango huo.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wazee wanaotaka kusafiri, karibu au mbali, kuitembelea familia, kuona mahali mapya au kupumzika kwa muda mfupi, mara nyingi kwa mwendo wa polepole na wakiwa na mahitaji ya afya kama dawa za kila siku au uwezo mdogo wa kutembea.",
    startingPoint: "Wamewahi kusafiri, mara nyingi kwa ramani za karatasi, mawakala wa safari au familia ikiwapangia. Wengi wanatumia simu janja lakini hawajawahi kutumia msaidizi wa AI, maelekezo ya ramani, apps za kutafsiri wala kushiriki mahali walipo.",
    gap: "Kupanga safari kunaweza kuonekana kugumu, na makosa kama kitambulisho kisicho sahihi, vivutio vilivyofungwa au dawa zilizosahaulika yanaweza kuharibu safari. Msaidizi wa AI na zana za simu zinawasaidia wazee kupanga kwa mwendo wao na kusafiri wakijitegemea zaidi, ili mradi wakague ukweli kwenye tovuti rasmi na wajihadhari na ulaghai wa safari.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi, sentensi fupi na hatua kubwa na rahisi",
      "Vifaa: simu janja yenye intaneti, app ya ramani na app ya kutafsiri",
      "Muda: kama dakika 5 kwa kila somo kwa mwendo wa utulivu",
      "Sheria za safari, saa na bei hubadilika; wanafunzi wanakagua tovuti rasmi kama tsa.gov",
      "Afya na faragha: dawa zinafuata ushauri wa mfamasia; hakuna shughuli za benki kwenye Wi-Fi ya umma"
    ],
    prerequisites: "Kozi \"AI kwa Wazee: Kutumia Wasaidizi wa AI\" inasaidia ukianza nayo, lakini si lazima."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia msaidizi wa AI wa bure", action: "kuomba mpango wa safari wa siku kwa siku unaosema wapi, lini, nani anaenda, mambo unayopenda na mwendo wako", standard: "wenye muda wa kupumzika na shughuli zisizozidi zile unazoweza kufanya kwa urahisi" },
    { id: "O2", condition: "Ukipewa mpango wa safari kutoka AI", action: "kukagua ukweli muhimu kama saa, bei na sheria za vitambulisho kwenye tovuti rasmi", standard: "ukikagua angalau ukweli mitatu kabla ya kuutegemea" },
    { id: "O3", condition: "Ukizingatia safari yako na mahitaji yako ya afya", action: "kuomba orodha ya mizigo iliyopangwa kwa makundi yenye dawa zako na kitambulisho", standard: "dawa na kitambulisho vikiwa kwenye mfuko wa mkononi" },
    { id: "O4", condition: "Ukitumia app ya ramani kwenye simu yako", action: "kupata maelekezo ya kutembea, kuendesha gari au usafiri wa umma na kufuata kona zinazotamkwa", standard: "hoteli yako ikiwa imehifadhiwa kama mahali unapopenda (favorite)" },
    { id: "O5", condition: "Unapohitaji lugha nyingine", action: "kutumia app ya kutafsiri kusoma tangazo au kufanya mazungumzo rahisi", standard: "mahitaji muhimu, kama mzio, yakiwa yameandikwa mapema na kukaguliwa na wafanyakazi" },
    { id: "O6", condition: "Kabla na wakati wa safari", action: "kuishirikisha familia mipango yako na kutambua ulaghai wa safari", standard: "ukihifadhi nafasi kupitia tovuti rasmi au mawakala unaowaamini tu" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupanga safari yako",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kupanga ratiba tulivu kwa AI",
          minutes: 5,
          goal: "Omba msaidizi wa AI mpango wa safari wa siku kwa siku unaolingana na mwendo wako.",
          text: [
            "Ratiba ya safari ni mpango wa siku kwa siku wa safari. Msaidizi wa AI anaweza kuandika rasimu kwa sekunde chache, na kuibadilisha mara nyingi kadiri unavyotaka.",
            "Mwambie wapi, lini, kwa muda gani, nani anaenda, na unachohitaji: \"Panga safari tulivu ya siku tatu kwenda Savannah, Georgia mwezi Aprili kwa watu wawili wenye umri wa miaka 70 na kitu. Tunapenda historia na bustani, tunatembea polepole, na tunataka kupumzika kila mchana. Shughuli zisizozidi mbili kwa siku.\"",
            "Omba mabadiliko hadi ikufae: \"Ongeza mahali pa kukaa na kula chakula cha mchana karibu na kila shughuli ya asubuhi.\" \"Ni mahali gani penye lifti au rahisi kwa mtu anayetumia fimbo?\""
          ],
          steps: ["Sema wapi, lini na kwa muda gani.", "Sema nani anaenda na mnapenda nini.", "Sema mwendo wako na mahitaji yoyote, kama kupumzika au kutembea kwa urahisi.", "Omba mabadiliko hadi ikufae."],
          words: [["Ratiba ya safari", "mpango wa siku kwa siku wa safari (kwa Kiingereza: itinerary)."], ["Inayofikika", "rahisi kufikia na kutumia kwa watu wenye uwezo mdogo wa kutembea, kusikia au kuona (kwa Kiingereza: accessible)."]],
          slides: [
            { title: "Mpango kwa sekunde chache", bullets: ["Ratiba ya safari ni mpango wa siku kwa siku", "AI inaandika rasimu, wewe unaiunda"] },
            { title: "Mwambie msaidizi", bullets: ["Wapi, lini, kwa muda gani", "Nani anaenda na mnapenda nini", "Mwendo wako na mahitaji yako"] },
            { title: "Ifanye ikufae", bullets: ["\"Ongeza mapumziko kila mchana.\"", "\"Ni mahali gani rahisi kwa mtu mwenye fimbo?\""] }
          ],
          tryIt: "Chagua safari ungependa kufanya. Mwombe msaidizi wa AI ratiba tulivu ya siku tatu yenye mwendo wako na mahitaji yako, kisha omba badiliko moja.",
          youCanNow: "kuiomba AI mpango wa safari unaolingana na mwendo na mahitaji yako.",
          quickCheck: [
            { objective: "O1", q: "Ratiba ya safari ni nini?", options: ["Orodha ya mizigo", "Mpango wa siku kwa siku wa safari", "Tiketi ya ndege", "Fomu ya bima ya safari"], answer: 1, why: "Ratiba ya safari ni mpango wa siku kwa siku ambao AI inaweza kuandika na kubadilisha." },
            { objective: "O1", q: "Mpango wa AI una shughuli nne kwa siku na wewe huchoka haraka. Unaomba nini?", options: ["\"Panga mji mwingine.\"", "Hakuna; utaweza tu", "\"Ifanye ndefu zaidi.\"", "\"Shughuli zisizozidi mbili kwa siku, na mapumziko kila mchana.\""], answer: 3, why: "Omba mabadiliko hadi mpango ulingane na mwendo na mahitaji yako." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kukagua ukweli wa safari kwenye tovuti rasmi",
          minutes: 5,
          goal: "Kagua ukweli muhimu katika mpango wa safari wa AI kabla ya kuutegemea.",
          text: [
            "Mipango ya safari ya AI inaweza kuwa na makosa: jumba la makumbusho lililofungwa, saa za zamani za kufungua, bei zisizo sahihi au sheria zilizobadilika. Kagua kila wakati ukweli unaoweza kuharibu safari yako.",
            "Kagua saa za kufungua na bei kwenye tovuti ya mahali penyewe. Kagua saa za ndege na treni kwa kampuni ya ndege au ya reli. Kuhusu kitambulisho: tangu tarehe 7 Mei 2025, wasafiri wanaopanda ndege ndani ya Marekani wanahitaji leseni au kitambulisho kinachokidhi REAL ID, au kitambulisho kingine kinachokubalika kama pasipoti. Tovuti ya TSA, tsa.gov, inaorodhesha vitambulisho vyote vinavyokubalika.",
            "Muulize msaidizi: \"Ni nini katika mpango huu ninachopaswa kukagua tena?\" Anaweza kukuonyesha ukweli muhimu, lakini wewe unaukagua kwenye tovuti rasmi."
          ],
          steps: ["Iulize AI ni ukweli gani wa kukagua tena.", "Kagua saa na bei kwenye tovuti ya kila mahali.", "Kagua saa za ndege au treni kwa kampuni husika.", "Kagua sheria za vitambulisho kwenye tsa.gov kabla ya kupanda ndege."],
          words: [["REAL ID", "leseni ya udereva au kitambulisho cha jimbo kinachokidhi sheria za serikali kuu ya Marekani; kwa kawaida kina nyota pembeni."], ["TSA", "Transportation Security Administration, ofisi inayowakagua wasafiri kwenye viwanja vya ndege vya Marekani."]],
          slides: [
            { title: "Mipango ya AI inaweza kuwa ya zamani", bullets: ["Mahali palipofungwa", "Saa au bei za zamani", "Sheria zilizobadilika"] },
            { title: "Kagua kwenye tovuti rasmi", bullets: ["Saa na bei: tovuti ya mahali penyewe", "Ndege na treni: kampuni husika", "Sheria za vitambulisho: tsa.gov"] },
            { title: "Kupanda ndege ndani ya Marekani", bullets: ["REAL ID au kitambulisho kingine kinachokubalika tangu Mei 2025", "Pasipoti inakubalika", "Tazama orodha kamili kwenye tsa.gov"] }
          ],
          sources: [{ name: "TSA: REAL ID", url: "https://www.tsa.gov/real-id" }],
          tryIt: "Muulize msaidizi ni ukweli gani katika ratiba yako wa kukagua tena. Kisha kagua saa za kufungua za mahali pamoja kwenye tovuti yake, na ukague kama kitambulisho chako kinakidhi REAL ID (tafuta nyota) au tsa.gov inakubali nini kingine.",
          youCanNow: "kukagua ukweli muhimu katika mpango wa safari wa AI kwenye tovuti rasmi.",
          quickCheck: [
            { objective: "O2", q: "Unakagua wapi saa za kufungua za jumba la makumbusho?", options: ["Kwenye tovuti ya jumba la makumbusho lenyewe", "Katika jibu la AI tu", "Kwenye jukwaa la mazungumzo ya safari", "Katika kitabu cha zamani cha mwongozo"], answer: 0, why: "AI inaweza kutoa saa za zamani; tovuti ya mahali penyewe ina saa za sasa." },
            { objective: "O2", q: "Unapanga kupanda ndege ndani ya Marekani na huna uhakika kama kitambulisho chako kinakubalika. Unafanya nini?", options: ["Unatumaini kitakuwa sawa", "Unaiuliza AI na kuiamini", "Unakagua orodha ya vitambulisho vinavyokubalika kwenye tsa.gov", "Unabeba kadi ya maktaba"], answer: 2, why: "Tovuti ya TSA, tsa.gov, inaorodhesha vitambulisho vyote vinavyokubalika kwa kupanda ndege." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuandaa orodha nzuri ya mizigo",
          minutes: 4,
          goal: "Iombe AI orodha ya mizigo inayolingana na safari yako na mahitaji yako ya afya.",
          text: [
            "Orodha ya mizigo inaondoa wasiwasi wa kawaida wa safari: \"Je, nimesahau kitu?\" Mwombe msaidizi akuandalie moja kulingana na safari yako, msimu na shughuli.",
            "Kwa mfano: \"Niandalie orodha ya mizigo kwa siku tatu Savannah mwezi Aprili. Ninatumia dawa kila siku na ninatumia miwani ya kusomea na kifaa cha kusikia. Ipange kwa makundi: nyaraka, dawa na afya, nguo, na vifaa vya kielektroniki.\"",
            "Weka dawa kwenye mfuko wa mkononi katika vyombo vyake vya asili, pamoja na ziada kidogo endapo kutakuwa na kuchelewa, na ubebe orodha ya dawa zako na namba ya simu ya daktari wako. Mfamasia wako anaweza kukushauri kuhusu kusafiri na dawa."
          ],
          steps: ["Iambie AI mahali, msimu, muda na shughuli.", "Taja mahitaji ya afya, kama dawa au vifaa vya kusikia.", "Iombe ipange orodha kwa makundi.", "Weka dawa na kitambulisho kwenye mfuko wa mkononi."],
          words: [["Mfuko wa mkononi", "mfuko unaokaa nao kwenye ndege, basi au treni (kwa Kiingereza: carry-on bag)."]],
          slides: [
            { title: "Usisahau tena", bullets: ["Iombe AI orodha ya mizigo", "Kulingana na mahali, msimu na shughuli"] },
            { title: "Panga orodha kwa makundi", bullets: ["Nyaraka", "Dawa na afya", "Nguo na vifaa vya kielektroniki"] },
            { title: "Dawa zinasafiri nawe", bullets: ["Kwenye mfuko wa mkononi, katika vyombo vya asili", "Ziada kidogo endapo kutakuwa na kuchelewa", "Orodha ya dawa na namba ya daktari wako"] }
          ],
          tryIt: "Mwombe msaidizi wa AI orodha ya mizigo iliyopangwa kwa makundi kwa safari yako, ikiwemo mahitaji yako ya afya. Ongeza chochote alichosahau, kisha hifadhi au chapisha orodha.",
          youCanNow: "kuandaa orodha ya mizigo kwa AI inayojumuisha mahitaji yako ya afya.",
          quickCheck: [
            { objective: "O3", q: "Kwa nini uiombe AI ipange orodha ya mizigo kwa makundi?", options: ["Ili orodha iwe ndefu zaidi", "Ili iwe rahisi kukagua kwa sehemu, kama nyaraka na dawa", "Ili ubebe vitu vichache", "Ili AI ikumbuke safari yako"], answer: 1, why: "Kupanga kwa nyaraka, dawa, nguo na vifaa vya kielektroniki kunafanya orodha iwe rahisi kukagua." },
            { objective: "O3", q: "Unatumia dawa kila siku. Unazibebaje?", options: ["Kwenye sanduku linalokabidhiwa", "Zikiwa huru ndani ya mfuko wa plastiki", "Za kutosha kila siku tu", "Kwenye mfuko wa mkononi, katika vyombo vya asili, pamoja na ziada kidogo"], answer: 3, why: "Weka dawa kwenye mfuko wa mkononi katika vyombo vya asili, pamoja na ziada endapo kutakuwa na kuchelewa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupanga safari yako",
        questions: [
          { objective: "O1", q: "Ratiba ya safari ni nini?", options: ["Tiketi ya ndege", "Sanduku la nguo", "Mpango wa safari wa siku kwa siku", "Pasipoti"], answer: 2, why: "Ratiba ya safari inaonyesha kila siku ya safari." },
          { objective: "O1", q: "Ombi lipi litaleta mpango bora zaidi wa safari?", options: ["\"Panga safari tulivu ya siku 3 kwenda Savannah mwezi Aprili kwa watu wawili wenye miaka 70 na kitu wanaopenda bustani na wanaohitaji kupumzika mchana.\"", "\"safari\"", "\"kusafiri\"", "\"nenda mahali fulani\""], answer: 0, why: "Linataja mahali, wakati, watu, mambo wanayopenda na mwendo." },
          { objective: "O2", q: "AI inasema jumba la makumbusho linafunguliwa saa 3 asubuhi (9 am). Unakaguaje?", options: ["Kwa kubahatisha", "Kwa kuiamini AI", "Kwa kumuuliza mtu usiyemjua", "Kwenye tovuti ya jumba la makumbusho lenyewe"], answer: 3, why: "Tovuti ya mahali penyewe ina saa za sasa." },
          { objective: "O2", q: "Tangu Mei 2025, kupanda ndege ndani ya Marekani unahitaji:", options: ["Kadi ya maktaba tu", "Kitambulisho kinachokidhi REAL ID au kitambulisho kingine kinachokubalika kama pasipoti", "Hakuna kitambulisho kabisa", "Kadi ya benki"], answer: 1, why: "TSA inahitaji REAL ID au kitambulisho kingine kinachokubalika." },
          { objective: "O3", q: "Dawa ziwekwe wapi unaposafiri?", options: ["Kwenye mizigo inayokabidhiwa tu", "Kwenye mfuko wa mkononi", "Ziachwe nyumbani", "Kwenye mfuko wa mtu usiyemjua"], answer: 1, why: "Kuzibeba nawe kunazuia zisipotee." }
        ]
      }
    },
    {
      name: "Sura 2: Ukiwa njiani",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kutumia ramani na maelekezo kwenye simu yako",
          minutes: 5,
          goal: "Pata maelekezo ya kutembea au kuendesha gari kwa app ya ramani.",
          text: [
            "Apps za ramani kama Google Maps na Apple Maps zinaonyesha ulipo na jinsi ya kufika unakoenda, kwa gari, kwa miguu au kwa usafiri wa umma.",
            "Fungua app ya ramani na uandike mahali kwenye kisanduku cha kutafuta, au umwambie msaidizi wako wa sauti: \"Hey Siri, walking directions to Forsyth Park.\" Gusa Directions (Maelekezo), chagua kutembea, gari au usafiri wa umma, kisha gusa Start (Anza). App inatamka kila kona.",
            "Kabla ya safari, hifadhi hoteli yako kama mahali unapopenda (favorite), ili kurudi iwe mguso mmoja tu. Maelekezo yanatumia betri ya simu yako, kwa hiyo beba chaja au betri ndogo ya akiba."
          ],
          steps: ["Fungua app yako ya ramani.", "Andika au sema unakotaka kwenda.", "Gusa Directions na uchague kutembea, gari au usafiri wa umma.", "Gusa Start na ufuate kona zinazotamkwa.", "Hifadhi hoteli yako kama mahali unapopenda."],
          words: [["GPS", "mfumo unaoiwezesha simu yako kujua ulipo kwenye ramani."], ["Transit", "usafiri wa umma kama mabasi na treni."]],
          slides: [
            { title: "Simu yako inajua njia", bullets: ["Google Maps au Apple Maps", "Gari, kutembea au usafiri wa umma"] },
            { title: "Pata maelekezo", bullets: ["Andika au sema mahali", "Gusa Directions, chagua njia", "Gusa Start kusikia kona zinazotamkwa"] },
            { title: "Vidokezo vya safari", bullets: ["Hifadhi hoteli yako kama mahali unapopenda", "Beba chaja au betri ya akiba"] }
          ],
          tryIt: "Tumia app yako ya ramani kupata maelekezo ya kutembea kutoka nyumbani kwako hadi duka au bustani iliyo karibu. Gusa Start na usikilize maelekezo ya kwanza.",
          youCanNow: "kupata na kufuata maelekezo kwa app ya ramani.",
          quickCheck: [
            { objective: "O4", q: "Transit inamaanisha nini katika app ya ramani?", options: ["Kutembea tu", "Njia za gari", "Mabasi na treni", "Bei za teksi"], answer: 2, why: "Transit inamaanisha usafiri wa umma, kama mabasi na treni." },
            { objective: "O4", q: "Uko nje unatembea na unataka njia rahisi ya kurudi hotelini. Ulipaswa kufanya nini kabla ya safari?", options: ["Kuhifadhi hoteli kama mahali unapopenda katika app ya ramani", "Kuandika jina la hoteli kwenye mkono wako", "Kuzima simu yako", "Kufuta app ya ramani"], answer: 0, why: "Kuhifadhi hoteli kama mahali unapopenda kunafanya kurudi kuwe mguso mmoja." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuongea na kusoma katika lugha nyingine",
          minutes: 5,
          goal: "Tumia app ya kutafsiri kusoma tangazo au kufanya mazungumzo rahisi.",
          text: [
            "Unasafiri nje ya nchi, au unakutana na mkwe mpya anayezungumza lugha nyingine? Apps za kutafsiri kama Google Translate na app ya Translate ya iPhone zinaweza kusaidia.",
            "Andika au sema sentensi, nayo inaonyesha na kutamka tafsiri. Hali ya mazungumzo inawaruhusu watu wawili kuongea kwa zamu. Hali ya kamera inakuruhusu kuelekeza simu yako kwenye tangazo au orodha ya vyakula na kuiona katika lugha yako.",
            "Tafsiri ni nzuri lakini si kamili. Kwa mambo muhimu, kama mahitaji ya kiafya au mzio, beba kadi iliyoandikwa mapema kwa lugha ya mahali hapo, na uikague na mfanyakazi wa hoteli au duka la dawa. Apps nyingi zinakuruhusu kupakua lugha kabla ya kuondoka, ili ifanye kazi bila intaneti."
          ],
          steps: ["Fungua app ya kutafsiri na uchague lugha mbili.", "Andika au sema sentensi yako.", "Tumia hali ya mazungumzo kuongea kwa zamu.", "Tumia hali ya kamera kwa matangazo na orodha za vyakula.", "Pakua lugha kabla ya kusafiri."],
          words: [["Kutafsiri", "kubadilisha maneno kutoka lugha moja kwenda nyingine."], ["Offline", "kufanya kazi bila muunganisho wa intaneti."]],
          slides: [
            { title: "Mtafsiri wako mfukoni", bullets: ["Google Translate au app ya Translate", "Andika, sema, au tumia kamera"] },
            { title: "Njia tatu za kuitumia", bullets: ["Sema sentensi", "Hali ya mazungumzo: ongeeni kwa zamu", "Hali ya kamera: matangazo na orodha za vyakula"] },
            { title: "Jiandae", bullets: ["Si kamili kwa mambo ya kiafya", "Beba kadi iliyoandikwa ya mzio au ya kiafya", "Pakua lugha kabla ya kuondoka"] }
          ],
          tryIt: "Fungua app ya kutafsiri. Tafsiri \"Choo kiko wapi, tafadhali?\" kwa lugha unayoweza kuhitaji, na uisikilize ikitamkwa kwa sauti.",
          youCanNow: "kutumia app ya kutafsiri kuongea, kusoma matangazo na orodha za vyakula, na kujiandaa kwa mahitaji muhimu.",
          quickCheck: [
            { objective: "O5", q: "Hali ya kamera katika app ya kutafsiri inafanya nini?", options: ["Inapiga picha za safari", "Inaonyesha tangazo au orodha ya vyakula katika lugha yako unapoielekeza simu", "Inarekodi simu ya video", "Inatafuta hoteli yako"], answer: 1, why: "Hali ya kamera inatafsiri kile kamera ya simu inachoona, kama matangazo na orodha za vyakula." },
            { objective: "O5", q: "Utakuwa mahali pasipo na intaneti. Unafanya nini kabla ya kuondoka?", options: ["Hakuna; app inafanya kazi siku zote", "Kununua kamusi ya karatasi tu", "Kupakua lugha ndani ya app", "Kufuta app"], answer: 2, why: "Apps nyingi zinakuruhusu kupakua lugha ili zifanye kazi bila intaneti." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kukaa salama na kuwasiliana ukiwa safarini",
          minutes: 5,
          goal: "Ishirikishe familia mipango yako na mahali ulipo, na uepuke ulaghai wa safari.",
          text: [
            "Ijulishe familia mahali ulipo. Mshirikishe mwanafamilia ratiba yako, na fikiria kushiriki mahali ulipo kutoka kwenye simu yako wakati wa safari (kwenye iPhone, app ya Find My; kwenye Android, kushiriki mahali katika Google Maps). Unaweza kuacha kushiriki wakati wowote.",
            "Jihadhari na ulaghai wa safari: tovuti bandia za kuhifadhi nafasi, simu zinazosema \"umeshinda\" safari, na ujumbe kuhusu matatizo ya ndege yako unaokuomba upige namba ngeni au ulipe. Hifadhi nafasi kupitia tovuti ya kampuni ya ndege, hoteli au treni yenyewe au wakala unayemwamini, na ukague ujumbe wowote kwa kupiga namba iliyo kwenye tovuti yao rasmi.",
            "Weka nakala ya kitambulisho chako na orodha ya dawa mahali salama mbali na vya asili, na epuka kuandika taarifa za benki kwenye Wi-Fi ya umma hotelini au uwanja wa ndege."
          ],
          steps: ["Mshirikishe mwanafamilia ratiba yako.", "Washa kushiriki mahali ulipo wakati wa safari ukipenda.", "Hifadhi nafasi kupitia tovuti rasmi au mawakala unaowaamini tu.", "Kagua ujumbe wa safari kwa namba rasmi ya kampuni.", "Epuka shughuli za benki kwenye Wi-Fi ya umma."],
          words: [["Kushiriki mahali", "kuwaruhusu watu uliowachagua kuona simu yako ilipo kwenye ramani."], ["Wi-Fi ya umma", "intaneti ya bure isiyo na waya katika mahali kama hoteli na viwanja vya ndege, ambayo wengine wanaweza kuitumia pamoja nawe."]],
          slides: [
            { title: "Ijulishe familia", bullets: ["Shiriki ratiba yako", "Shiriki mahali ulipo wakati wa safari", "Acha kushiriki wakati wowote"] },
            { title: "Ulaghai wa safari", bullets: ["Tovuti bandia za kuhifadhi nafasi", "\"Umeshinda safari!\"", "Ujumbe wa matatizo ya ndege wenye namba ngeni"] },
            { title: "Kaa salama", bullets: ["Hifadhi nafasi kwenye tovuti rasmi", "Piga namba kutoka tovuti rasmi", "Hakuna shughuli za benki kwenye Wi-Fi ya umma"] }
          ],
          tryIt: "Kazi ya mwisho: maliza mpango wako wa safari ya siku tatu wenye mwendo unaokufaa na muda wa kupumzika, orodha yako ya mizigo yenye dawa na kitambulisho, na ukweli mitatu uliokagua kwenye tovuti rasmi. Mshirikishe mwanafamilia mpango huo.",
          youCanNow: "kupanga safari kwa AI, kuikagua, kuifungashia mizigo, kupata njia yako, na kukaa salama na kuwasiliana.",
          quickCheck: [
            { objective: "O6", q: "Kushiriki mahali kunafanya nini?", options: ["Kunaonyesha kila mtu mtandaoni ulipo", "Kunaruhusu familia uliyoichagua kuona simu yako ilipo", "Kunahifadhi nafasi ya hoteli yako", "Kunawasha GPS kwa watu usiowajua"], answer: 1, why: "Kushiriki mahali kunaonyesha simu yako ilipo kwa watu unaowachagua, na unaweza kuacha wakati wowote." },
            { objective: "O6", q: "Tovuti inatoa hoteli yako kwa nusu bei ukilipa kwa kuhamisha pesa benki (wire transfer) leo. Unafanya nini?", options: ["Unalipa haraka kabla ofa haijaisha", "Unatuma taarifa zako za benki", "Unaiuliza tovuti kama ni halisi", "Unahifadhi nafasi kupitia tovuti ya hoteli yenyewe au wakala unayemwamini"], answer: 3, why: "Tovuti bandia za kuhifadhi nafasi ni nyingi; hifadhi nafasi kupitia tovuti rasmi au mawakala unaowaamini tu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Ukiwa njiani",
        questions: [
          { objective: "O4", q: "Katika app ya ramani, baada ya kuchagua unakoenda unagusa:", options: ["Shiriki nywila", "Futa", "Kamera", "Directions, kisha Start"], answer: 3, why: "Directions na Start zinaanzisha maelekezo yanayotamkwa." },
          { objective: "O4", q: "Kwa nini uhifadhi hoteli yako kama mahali unapopenda?", options: ["Kurudi kunakuwa mguso mmoja", "Kunafanya chumba kiwe rahisi kwa bei", "Kunafuta nafasi uliyohifadhi", "Kunatuma nywila yako"], answer: 0, why: "Mahali unapopenda kunafanya iwe haraka kurudi." },
          { objective: "O5", q: "Hali ya kamera katika app ya kutafsiri inakuwezesha:", options: ["Kupiga simu nyumbani", "Kujipiga picha", "Kuelekeza simu kwenye tangazo au orodha ya vyakula na kuisoma katika lugha yako", "Kulipia chakula"], answer: 2, why: "Inatafsiri maandishi ambayo kamera inaona." },
          { objective: "O5", q: "Kwa mzio mkubwa wa chakula ukiwa nje ya nchi, mpango bora ni:", options: ["Kubahatisha", "Kutegemea app tu wakati huo", "Kutosema chochote", "Kubeba kadi iliyoandikwa kwa lugha ya mahali hapo na kuikagua na wafanyakazi"], answer: 3, why: "Apps za kutafsiri si kamili kwa mahitaji ya kiafya." },
          { objective: "O6", q: "Ujumbe unasema ndege yako ina tatizo na upige namba iliyo kwenye ujumbe. Wewe:", options: ["Unalipa mara moja", "Unapiga namba iliyo kwenye ujumbe", "Badala yake unapiga namba iliyo kwenye tovuti rasmi ya kampuni ya ndege", "Unatuma namba ya kadi yako"], answer: 2, why: "Namba rasmi ni salama; namba zilizo kwenye ujumbe zinaweza kuwa ulaghai." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kama Mwenzako wa Safari",
    questions: [
      { objective: "O1", q: "Msaidizi wa AI anaweza kusaidia safari kwa:", options: ["Kununua tiketi bila wewe", "Kuandika rasimu ya mpango wa siku kwa siku", "Kuhakikisha bei", "Kufungasha mfuko wako"], answer: 1, why: "Anaandika rasimu za mipango ambazo wewe unaziunda na kuzikagua." },
      { objective: "O1", q: "Kuiambia AI mwendo na mahitaji yako kunaisaidia:", options: ["Kuandaa mpango unaokufaa", "Kutoza kidogo", "Kuhifadhi nafasi hotelini", "Kuipigia familia simu"], answer: 0, why: "Maelezo yanafanya mpango uwe halisi." },
      { objective: "O1", q: "\"Inayofikika\" (accessible) inamaanisha:", options: ["Rahisi kutumia kwa watu wenye uwezo mdogo wa kutembea, kusikia au kuona", "Ghali", "Mbali", "Imefungwa"], answer: 0, why: "Mahali panapofikika ni rahisi kwa kila mtu kutumia." },
      { objective: "O2", q: "Mipango ya safari ya AI inaweza kuwa na:", options: ["Ukweli kamili tu", "Saa za zamani au mahali palipofungwa", "Pasipoti yako", "Tiketi halisi"], answer: 1, why: "AI inaweza kukosea au kuwa na taarifa za zamani." },
      { objective: "O2", q: "Swali zuri la kuiuliza AI kuhusu mpango wako ni:", options: ["\"Hifadhi kila kitu sasa.\"", "\"Nywila yangu ni ipi?\"", "\"Ni nini katika mpango huu ninachopaswa kukagua tena?\"", "\"Nilipie.\""], answer: 2, why: "Linaonyesha ukweli wa kuthibitisha." },
      { objective: "O2", q: "Unakagua wapi sheria za vitambulisho za kupanda ndege ndani ya Marekani?", options: ["Ujumbe wa ulaghai wa safari", "Tangazo linalojitokeza ghafla", "Chapisho la mitandao ya kijamii", "tsa.gov"], answer: 3, why: "TSA inaweka sheria za vitambulisho viwanjani vya ndege." },
      { objective: "O2", q: "Kadi ya REAL ID kwa kawaida ina:", options: ["Msimbo pau tu", "Haina picha", "Nyota pembeni", "Nywila yako"], answer: 2, why: "Nyota inaonyesha kadi zinazokidhi REAL ID." },
      { objective: "O2", q: "Mbali na REAL ID, kitambulisho kinachokubalika kwa ndege za ndani ya Marekani ni:", options: ["Pasipoti", "Kadi ya maktaba", "Risiti ya duka", "Kadi ya biashara"], answer: 0, why: "TSA inakubali pasipoti." },
      { objective: "O3", q: "Orodha ya mizigo iliyopangwa kwa makundi inaweza kuwa na sehemu za:", options: ["Hakuna kitu", "Viatu tu", "Vitafunio tu", "Nyaraka, dawa, nguo na vifaa vya kielektroniki"], answer: 3, why: "Kupanga kwa makundi kunafanya iwe rahisi kukagua." },
      { objective: "O3", q: "Dawa zinapaswa kufungashwa:", options: ["Zikiwa huru kwenye mizigo inayokabidhiwa", "Kwenye mfuko wa mkononi, katika vyombo vya asili", "Nyumbani", "Kwenye mizigo ya rafiki"], answer: 1, why: "Zibebe nawe na zikiwa na lebo wazi." },
      { objective: "O3", q: "Nani anaweza kukushauri kuhusu kusafiri na dawa?", options: ["Tovuti yoyote tu", "Mfamasia wako", "Tangazo linalojitokeza ghafla", "Mtu usiyemjua"], answer: 1, why: "Wafamasia wanazijua dawa." },
      { objective: "O4", q: "GPS inaiwezesha simu yako:", options: ["Kupiga picha", "Kutafsiri lugha", "Kulipa bili", "Kujua ulipo kwenye ramani"], answer: 3, why: "GPS inatafuta mahali ulipo." },
      { objective: "O4", q: "\"Transit\" katika app ya ramani inamaanisha:", options: ["Mabasi na treni", "Kutembea tu", "Kusafiri kwa ndege", "Kuendesha gari tu"], answer: 0, why: "Transit ni usafiri wa umma." },
      { objective: "O4", q: "Maelekezo yanatumia betri, kwa hiyo beba:", options: ["Kitambulisho cha pili", "Nywila za ziada", "Chaja au betri ya akiba", "Kamera"], answer: 2, why: "Kufuata ramani kunamaliza betri." },
      { objective: "O5", q: "Hali ya mazungumzo katika app ya kutafsiri:", options: ["Inazima sauti", "Inapiga simu nyumbani", "Inahifadhi nafasi hotelini", "Inawaruhusu watu wawili kuongea kwa zamu"], answer: 3, why: "Inatafsiri kwenda na kurudi." },
      { objective: "O5", q: "Kupakua lugha kabla ya kuondoka kunaiwezesha app kufanya kazi:", options: ["Haraka zaidi kwenye Wi-Fi tu", "Nyumbani tu", "Bila intaneti (offline)", "Kamwe"], answer: 2, why: "Lugha zilizopakuliwa zinafanya kazi bila intaneti." },
      { objective: "O6", q: "Kushiriki mahali kunaruhusu:", options: ["Watu usiowajua kukufuatilia", "Familia uliyoichagua kuona simu yako ilipo", "Hoteli kutoza zaidi", "Kampuni za ndege kufuta safari"], answer: 1, why: "Ni watu unaowachagua tu wanaoweza kuona." },
      { objective: "O6", q: "Simu inasema umeshinda safari ya bure lakini lazima ulipe ada. Hii ni:", options: ["Huenda ni ulaghai", "Zawadi halisi", "Sheria ya kodi", "Jambo la kawaida"], answer: 0, why: "Zawadi zinazohitaji ada ni ulaghai." },
      { objective: "O6", q: "Njia salama zaidi ya kuhifadhi nafasi ya safari ni:", options: ["Kupitia tovuti rasmi au mawakala unaowaamini", "Kupitia viungo katika ujumbe usiotarajiwa", "Kupitia matangazo yanayojitokeza ghafla", "Kwa kutuma kadi za zawadi"], answer: 0, why: "Tovuti rasmi zinaepusha ulaghai wa tovuti bandia za kuhifadhi nafasi." },
      { objective: "O6", q: "Kwenye Wi-Fi ya umma uwanjani wa ndege, epuka:", options: ["Kusoma habari", "Kuandika taarifa za benki", "Kuangalia hali ya hewa", "Kuangalia ramani"], answer: 1, why: "Wi-Fi ya umma inaweza kutumiwa na wengine pamoja nawe." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      3,
      5,
      8,
      9,
      11,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Mpango unaokufaa",
        objective: "O1",
        notYet: "Hakuna mpango wa siku kwa siku, au shughuli ni nyingi mno bila mapumziko.",
        meets: "Mpango wa siku tatu, siku kwa siku, kwa mwendo unaokufaa wenye muda wa kupumzika.",
        exceeds: "Mpango pia unataja mahali pa kukaa au njia rahisi za kufikia inapohitajika."
      },
      {
        name: "Orodha ya mizigo",
        objective: "O3",
        notYet: "Hakuna orodha, au dawa au kitambulisho havipo.",
        meets: "Orodha ya mizigo iliyopangwa kwa makundi yenye dawa na kitambulisho.",
        exceeds: "Inaeleza kuwa dawa na kitambulisho vinaenda kwenye mfuko wa mkononi, pamoja na orodha ya dawa na namba ya daktari."
      },
      {
        name: "Ukweli umekaguliwa",
        objective: "O2",
        notYet: "Ukweli uliokaguliwa ni chini ya mitatu, au ulikaguliwa kwa AI tu.",
        meets: "Ukweli mitatu ulikaguliwa kwenye tovuti rasmi, kama tsa.gov na tovuti ya mahali penyewe.",
        exceeds: "Anaweza kusema kila ukweli ulitoka tovuti gani na alirekebisha chochote kilichokuwa si sahihi."
      },
      {
        name: "Imeshirikishwa familia",
        objective: "O6",
        notYet: "Mpango haukushirikishwa.",
        meets: "Mpango ulishirikishwa mwanafamilia.",
        exceeds: "Pia walikubaliana kuhusu kushiriki mahali wakati wa safari au muda wa kujuliana hali."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaofanya safari au matembezi ya siku kwa kutumia mpango wao wa AI ndani ya siku 60 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kukagua ukweli wa safari kwenye tovuti rasmi au kuepuka ulaghai wa safari",
      "Wanafunzi wanaoanza kozi nyingine ya Seniors and Technology ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja yenye intaneti, app ya ramani (Google Maps au Apple Maps) na app ya kutafsiri",
      "Msaidizi wa AI wa bure (ChatGPT, Microsoft Copilot au Google Gemini)",
      "Karatasi na kalamu, au maelezo kwenye simu, kwa mpango na orodha ya mizigo",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi na vya utulivu: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Mwache kila mwanafunzi apange safari halisi au matembezi ya siku ambayo angefurahia; hii inafanya mazoezi yawe na maana.",
      "Onyesha kwenye skrini kubwa jinsi ya kukagua ukweli kwenye tsa.gov na kwenye tovuti ya mahali penyewe.",
      "Fanyeni mazoezi ya maelekezo kwa matembezi mafupi karibu na ukumbi ili wanafunzi wasikie kona zinazotamkwa.",
      "Wakumbushe wanafunzi kuwa maswali kuhusu dawa yanaenda kwa mfamasia wao, na waepuke shughuli za benki kwenye Wi-Fi ya umma.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};

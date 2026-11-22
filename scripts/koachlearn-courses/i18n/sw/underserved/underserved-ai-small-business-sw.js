"use strict";

// Koach Learn course (Swahili translation of underserved/underserved-ai-small-business.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "underserved-ai-small-business-sw",
  lang: "sw",
  translationOf: "underserved-ai-small-business",
  category: "Undeserved Community",
  name: "AI kwa Ujasiriamali na Biashara Ndogo",
  skills: "Kugeuza ujuzi kuwa ofa ya biashara, Kuweka bei kwa gharama halisi, Kupata msaada wa bure wa biashara, Kuandika maelezo ya biashara na tangazo, Kuweka kumbukumbu rahisi za pesa, Kuwajibu wateja",
  outcome: "kutumia msaidizi wa AI wa bure kupanga biashara ndogo kwenye ukurasa mmoja: ofa iliyo wazi, bei inayolipia gharama zako, maelezo mafupi ya biashara na tangazo, kumbukumbu rahisi ya pesa, na mshauri au mwelekezi wa bure wa kuzungumza naye baadaye.",
  about: [
    "Watu wengi tayari wanaendesha biashara ndogo: kusuka nywele, kupika kwa sherehe, kusafisha nyumba, kutunza bustani, kufundisha masomo ya ziada, kutengeneza simu au kuuza kazi za mikono. Wengine wana ujuzi na wanataka kuanza. Kozi hii ni kwa wote wawili.",
    "Utatumia msaidizi wa AI wa bure kugeuza ujuzi wako kuwa ofa iliyo wazi, kupiga hesabu ya bei inayolipia gharama zako, kupata msaada wa bure wa biashara, kuandika maelezo mafupi na tangazo la mitandao ya kijamii, kuweka kumbukumbu rahisi za pesa, na kuwajibu wateja vizuri.",
    "AI inakusaidia kufikiri na kuandika. Haichukui nafasi ya ushauri halisi kuhusu kodi, leseni au sheria. Kila somo linakuonyesha msaada rasmi wa bure. Masomo ni kama dakika tano, kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza mpango wa ukurasa mmoja kwa biashara ndogo unayoendesha au unayotaka kuanza: ofa yako na ni ya nani, bei inayolipia gharama zako (hesabu yako mwenyewe ikiwa imekaguliwa), maelezo ya biashara ya sentensi tatu, tangazo moja la mitandao ya kijamii, na jina na mawasiliano ya mshauri wa biashara wa bure karibu nawe (SCORE, Small Business Development Center au Women's Business Center).",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu katika jamii zisizohudumiwa vya kutosha wanaoendesha au wanaotaka kuanza biashara ndogo: wasusi wa nywele, wapishi wa sherehe, wasafishaji wa nyumba, watunza bustani, walimu wa masomo ya ziada, mafundi wa simu na wauzaji wa kazi za mikono, wengi wakifanya kazi kwa pesa taslimu au kwa muda mfupi.",
    startingPoint: "Wana ujuzi ambao watu wanaulipia, na baadhi tayari wana wateja. Wachache wana ofa iliyoandikwa, bei inayotokana na gharama, kumbukumbu za pesa au mshauri wa biashara, na wengi hawajawahi kutumia AI kwa kazi za biashara.",
    gap: "Biashara ndogo nyingi zinatoza bei ndogo mno, haziweki kumbukumbu na hazipati ushauri wa bure, kwa hiyo zinapoteza pesa au zinakwama. Wanafunzi wanahitaji mpango rahisi wa ukurasa mmoja, hesabu iliyokaguliwa na mshauri wa bure ili wakue kwa usalama.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 6)",
      "Vifaa: simu janja au kompyuta ya maktaba",
      "Gharama: zana za bure na washauri wa bure au wa gharama nafuu tu",
      "AI haijui bei za mahali ulipo, kodi wala sheria za leseni: wanafunzi wanakagua hesabu na kuuliza vyanzo rasmi au mshauri",
      "Faragha: hakuna namba za akaunti ya benki ndani ya AI, na hakuna anwani ya nyumbani kwenye matangazo ya umma"
    ],
    prerequisites: "Hakuna. Wanafunzi wapya kwa wasaidizi wa AI wanaweza kuanza na kozi \"Utangulizi wa AI na Uwezeshaji wa Kidijitali\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa ujuzi ambao watu tayari wanakuomba", action: "kuandika ofa ya sentensi moja inayosema unachofanya, ni ya nani na kinachokufanya uwe tofauti", standard: "kwa maneno yanayosikika kama wewe" },
    { id: "O2", condition: "Ukipewa gharama na saa za kazi moja", action: "kupiga hesabu ya bei inayolipia gharama zako na kukulipa kwa muda wako", standard: "ukikagua hesabu ya AI mwenyewe kwa kikokotoo na kulinganisha na bei za mahali ulipo" },
    { id: "O3", condition: "Ukitumia ukurasa wa washirika wa SBA (resource partners)", action: "kupata mshauri wa biashara wa bure karibu nawe na kupanga utakachouliza", standard: "ukiandika jina lake, mawasiliano yake na maswali matatu" },
    { id: "O4", condition: "Ukipewa ofa yako", action: "kuandika maelezo ya biashara ya sentensi tatu na tangazo moja la mitandao ya kijamii kwa msaidizi wa AI", standard: "kila ahadi ikiwa ya kweli na mawasiliano salama tu" },
    { id: "O5", condition: "Ukitumia Google Sheets au Excel kwenye wavuti", action: "kutengeneza jedwali rahisi la pesa na kuandika mauzo na matumizi", standard: "likiwa na safu zote tano, jumla, na kila kitu kikiandikwa siku hiyo hiyo" },
    { id: "O6", condition: "Ukipewa ujumbe au lalamiko la mteja", action: "kuandika jibu la adabu na kuweka kazi yako pamoja kuwa mpango wa biashara wa ukurasa mmoja", standard: "ukitoa tu kile unachoweza kumudu na ukiweka kila sehemu ya mpango" }
  ],
  chapters: [
    {
      name: "Sura 1: Kutoka ujuzi hadi biashara",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kugeuza ujuzi kuwa ofa iliyo wazi",
          minutes: 5,
          goal: "Andika ofa ya sentensi moja inayosema unauza nini, kwa nani, na kwa nini wakuchague wewe.",
          text: [
            "Biashara inaanza na kitu ambacho watu wanahitaji na watakilipia. Fikiria majirani wanakuomba ufanye nini tayari: kupika kwa sherehe, kusuka nywele, kutengeneza vitu, kulea watoto, kukata nyasi.",
            "Ofa iliyo wazi inasema unachofanya, ni ya nani, na kinachokufanya uwe tofauti. Kwa mfano: \"Maandalizi ya chakula cha wiki kwa familia zenye kazi nyingi upande wa mashariki, chakula cha nyumbani kwa bei nzuri.\"",
            "Iombe AI ikusaidie: \"Mimi ni hodari wa kupika chakula cha Karibiani na watu wananiomba niwapikie kwenye sherehe. Nisaidie kuandika ofa tatu za sentensi moja kwa biashara ndogo ya upishi, kila moja kwa aina tofauti ya mteja.\" Kisha chagua ile inayosikika zaidi kama wewe."
          ],
          steps: ["Orodhesha mambo ambayo watu tayari wanakuomba ufanye.", "Chagua ujuzi mmoja ambao watu wangeulipia.", "Iombe AI ofa tatu za sentensi moja kwa wateja tofauti.", "Chagua na uhariri ile inayokufaa zaidi."],
          words: [["Ofa", "maelezo mafupi ya unachouza na ni kwa ajili ya nani."], ["Mteja", "mtu anayelipia unachouza."]],
          slides: [
            { title: "Anza na kile watu wanachokuomba", bullets: ["Kupika, kusuka nywele, kusafisha, kutengeneza vitu", "Kulea watoto, masomo ya ziada, kutunza bustani"] },
            { title: "Ofa iliyo wazi inasema", bullets: ["Unachofanya", "Ni ya nani", "Kinachokufanya uwe tofauti"] },
            { title: "Iombe AI machaguo", bullets: ["Ofa tatu kwa aina tatu za wateja", "Chagua ile inayosikika kama wewe"] }
          ],
          tryIt: "Muombe msaidizi wa AI akuandikie ofa tatu za sentensi moja kwa ujuzi ulio nao. Chagua moja na uibadilishe isikike kama wewe.",
          youCanNow: "kugeuza ujuzi kuwa ofa ya biashara iliyo wazi ya sentensi moja.",
          quickCheck: [
            { objective: "O1", q: "Ipi ni ofa iliyo wazi?", options: ["Maandalizi ya chakula cha wiki kwa familia zenye kazi nyingi upande wa mashariki, cha nyumbani kwa bei nzuri", "Ninapika vitu", "Chakula kinauzwa", "Biashara bora kuliko zote"], answer: 0, why: "Inasema unachofanya, ni ya nani na kinachokufanya uwe tofauti." },
            { objective: "O1", q: "AI inakupa ofa tatu, lakini hakuna inayosikika kama wewe. Unafanya nini?", options: ["Unatumia ya kwanza hata hivyo", "Unachagua moja na kubadilisha maneno ili isikike kama wewe", "Unaacha biashara", "Unanakili ofa ya mshindani"], answer: 1, why: "Ofa inapaswa kuwa yako, kwa hiyo unahariri iliyo bora ikufae." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuweka bei ili usipoteze pesa",
          minutes: 6,
          goal: "Piga hesabu ya bei inayolipia gharama zako na kukulipa kwa muda wako.",
          text: [
            "Biashara ndogo nyingi zinatoza bei ndogo mno. Ili kuweka bei ya haki, jumlisha gharama zako: vifaa, mafuta ya gari au nauli ya basi, ada zozote, na muda wako.",
            "Iombe AI ipange hesabu pamoja nawe, ukitumia namba zako mwenyewe: \"Ninapika kwa sherehe ya watu 20. Chakula kinagharimu $120, vyombo $15, mafuta $10, na inanichukua saa 8. Ninataka kupata $18 kwa saa. Bei gani inalipia yote?\" Kisha kagua hesabu mwenyewe kwa kikokotoo.",
            "AI haijui bei za mahali ulipo. Angalia wengine karibu nawe wanatoza kiasi gani, na muulize mshauri wa biashara wa bure. Kodi na leseni pia ni gharama halisi: uliza jiji au kaunti yako, jimbo lako, na IRS (irs.gov) kuhusu kinachokuhusu."
          ],
          steps: ["Orodhesha kila gharama ya kazi moja: vifaa, usafiri, ada.", "Amua unataka kupata kiasi gani kwa saa, na uhesabu saa zako.", "Iombe AI ijumlishe ukitumia namba zako.", "Kagua hesabu mwenyewe kwa kikokotoo.", "Linganisha na bei za mahali ulipo na umuulize mshauri."],
          words: [["Gharama", "pesa unazotumia kufanya kazi."], ["Faida", "pesa zinazobaki baada ya kulipa gharama zako zote."]],
          slides: [
            { title: "Biashara ndogo nyingi zinatoza bei ndogo mno", bullets: ["Hesabu kila gharama", "Hesabu muda wako"] },
            { title: "Gharama za kujumlisha", bullets: ["Vifaa", "Mafuta au nauli ya basi", "Ada", "Saa zako"] },
            { title: "Tumia AI, kisha kagua", bullets: ["Ipe namba zako halisi", "Kagua hesabu kwa kikokotoo", "Linganisha bei za karibu na umuulize mshauri"] }
          ],
          sources: [{ name: "IRS: Small business and self-employed (biashara ndogo na waliojiajiri)", url: "https://www.irs.gov/businesses/small-businesses-self-employed" }],
          tryIt: "Chagua kazi moja ambayo biashara yako ingefanya. Orodhesha gharama na saa, muombe msaidizi wa AI apige hesabu ya bei inayozilipia, kisha kagua hesabu mwenyewe.",
          youCanNow: "kuweka bei inayolipia gharama zako na muda wako, na kukagua hesabu mwenyewe.",
          quickCheck: [
            { objective: "O2", q: "Wamiliki wengi wa biashara ndogo husahau kuhesabu gharama gani?", options: ["Vifaa", "Ada", "Muda wao wenyewe", "Mafuta"], answer: 2, why: "Muda wako pia ni gharama, kwa hiyo bei lazima ikulipe kwa saa zako." },
            { objective: "O2", q: "AI inasema bei yako iwe $150, lakini gharama zako zinafika $160. Unafanya nini?", options: ["Unatoza $150", "Unatoza kidogo zaidi ili upate wateja", "Unapuuza gharama zako", "Unakagua hesabu tena kwa kikokotoo na kusahihisha bei"], answer: 3, why: "AI inaweza kukosea hesabu, na bei iliyo chini ya gharama zako inakupotezea pesa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kupata msaada wa bure wa biashara",
          minutes: 4,
          goal: "Pata mshauri wa biashara wa bure karibu nawe.",
          text: [
            "Huna haja ya kufikiria kila kitu peke yako. Shirika la Marekani la Biashara Ndogo (SBA, U.S. Small Business Administration) linafanya kazi na washirika wanaosaidia watu kuanza na kukuza biashara.",
            "SCORE ni mtandao wa washauri wa biashara wa kujitolea wanaotoa ushauri bila malipo. Small Business Development Centers (SBDC, vituo vya kukuza biashara ndogo) vinatoa ushauri na mafunzo. Women's Business Centers (vituo vya biashara vya wanawake) vinatoa msaada wa bure hadi wa gharama nafuu kwa wanawake wanaoanza au kukuza biashara. Veterans Business Outreach Centers vinahudumia wanajeshi wastaafu na familia za kijeshi.",
            "Washauri hawa wanaweza kusaidia kuhusu leseni, kodi, mikopo na mipango ya eneo lako. Beba maswali yako na mpango wako wa ukurasa mmoja."
          ],
          steps: ["Fungua ukurasa wa washirika wa SBA (resource partners).", "Tafuta SCORE, SBDC au Women's Business Center karibu nawe.", "Andika jina na jinsi ya kuwasiliana nao.", "Andika maswali matatu ya kuuliza, kama leseni gani unahitaji."],
          words: [["Mwelekezi", "mtu mwenye uzoefu anayekupa ushauri (kwa Kiingereza, mentor)."], ["SBA", "U.S. Small Business Administration, shirika la serikali kuu ya Marekani linalosaidia biashara ndogo."]],
          sources: [{ name: "SBA: Resource partners (washirika wa SBA)", url: "https://www.sba.gov/local-assistance/resource-partners" }],
          slides: [
            { title: "Hauko peke yako", bullets: ["SBA inafanya kazi na wasaidizi wa bure na wa gharama nafuu"] },
            { title: "Nani anaweza kusaidia", bullets: ["SCORE: washauri wa kujitolea bila malipo", "SBDC: ushauri na mafunzo", "Women's Business Centers: bure hadi gharama nafuu"] },
            { title: "Njoo ukiwa umejiandaa", bullets: ["Beba mpango wako wa ukurasa mmoja", "Uliza kuhusu leseni, kodi na mikopo ya eneo lako"] }
          ],
          tryIt: "Pata mshauri mmoja wa biashara wa bure karibu nawe kupitia ukurasa wa washirika wa SBA. Andika jina lake, mawasiliano yake na maswali matatu ya kuuliza.",
          youCanNow: "kupata msaada rasmi wa biashara wa bure karibu nawe.",
          quickCheck: [
            { objective: "O3", q: "SCORE ni nini?", options: ["Mtandao wa washauri wa biashara wa kujitolea wanaoshauri bila malipo", "Kampuni ya alama za mkopo", "Huduma ya mikopo ya kulipia", "Ofisi ya kodi ya jimbo"], answer: 0, why: "SCORE ni mshirika wa SBA mwenye washauri wa kujitolea bila malipo." },
            { objective: "O3", q: "Huna uhakika biashara yako ya upishi inahitaji leseni gani. Unafanya nini?", options: ["Unaacha leseni", "Unamuuliza mshauri wa biashara wa bure na kukagua na jiji, kaunti na jimbo lako", "Unaamini jibu la kwanza la AI", "Unamuuliza mteja"], answer: 1, why: "Washauri na ofisi za eneo lako na jimbo wanajua sheria za eneo lako." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kutoka ujuzi hadi biashara",
        questions: [
          { objective: "O1", q: "Ofa iliyo wazi inasema nini?", options: ["Historia ya maisha yako", "Unachofanya, ni ya nani, na kinachokufanya uwe tofauti", "Bei yako tu", "Anwani yako ya nyumbani"], answer: 1, why: "Sehemu hizo tatu zinawaambia wateja kwa nini wakuchague." },
          { objective: "O2", q: "Unapaswa kuhesabu nini unapoweka bei?", options: ["Vifaa tu", "Muda wako tu", "Vifaa, usafiri, ada na muda wako", "Hakuna; kisia tu"], answer: 2, why: "Gharama zote, pamoja na muda wako, lazima zilipiwe." },
          { objective: "O2", q: "AI inakupigia hesabu ya bei. Kisha nini?", options: ["Kagua hesabu mwenyewe na ulinganishe bei za mahali ulipo", "Itumie bila kukagua", "Iongeze mara mbili", "Usitoze kamwe"], answer: 0, why: "AI inaweza kukosea hesabu na haijui bei za mahali ulipo." },
          { objective: "O3", q: "SCORE inatoa:", options: ["Mikopo ya kulipia tu", "Kujaza fomu za kodi", "Leseni", "Washauri wa biashara wa kujitolea bila malipo"], answer: 3, why: "SBA inaeleza SCORE kama washauri wa kujitolea wanaotoa ushauri bila malipo." },
          { objective: "O3", q: "Unapaswa kukagua wapi leseni unazohitaji?", options: ["Kwa AI tu", "Jiji au kaunti yako, jimbo lako, au mshauri wa biashara wa bure", "Tangazo la mitandao ya kijamii", "Rafiki aliye jimbo jingine"], answer: 1, why: "Leseni zinategemea ulipo; vyanzo rasmi na washauri wanajua." }
        ]
      }
    },
    {
      name: "Sura 2: Kuendesha na kukuza biashara",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuandika maelezo ya biashara yako na tangazo",
          minutes: 5,
          goal: "Andika maelezo ya biashara ya sentensi tatu na tangazo moja la mitandao ya kijamii.",
          text: [
            "Maelezo mafupi yanawaambia watu wewe ni nani, unafanya nini na jinsi ya kukufikia. Unaweza kuyatumia kwenye kipeperushi, kadi ya biashara, au ukurasa wa biashara wa bure.",
            "Iombe AI: \"Andika maelezo mazuri ya sentensi tatu ya biashara yangu ya maandalizi ya chakula cha wiki kwa familia zenye kazi nyingi. Kisha andika tangazo moja fupi la Facebook linalotangaza menyu yangu ya kwanza.\" Omba toleo la lugha nyingine kama wateja wako wanalihitaji.",
            "Hariri ili yasikike kama wewe. Ahidi tu kile unachoweza kutimiza. Tumia simu au barua pepe ya biashara unayoridhika kuitoa hadharani, si anwani yako ya nyumbani."
          ],
          steps: ["Iombe AI maelezo ya sentensi tatu ukitumia ofa yako.", "Omba tangazo moja fupi la mitandao ya kijamii.", "Hariri yote mawili yasikike kama wewe.", "Hakikisha kila ahadi ni ya kweli na mawasiliano ni salama kutoa."],
          words: [["Tangazo la mitandao ya kijamii", "ujumbe mfupi wenye maneno na labda picha, unaotumwa kwenye apps kama Facebook au Instagram (kwa Kiingereza, post)."]],
          slides: [
            { title: "Maelezo mafupi", bullets: ["Wewe ni nani", "Unafanya nini", "Jinsi ya kukufikia"] },
            { title: "Iombe AI yote mawili", bullets: ["Maelezo ya sentensi tatu", "Tangazo moja fupi", "Lugha nyingine ikihitajika"] },
            { title: "Kabla ya kutuma", bullets: ["Yasikike kama wewe", "Ahidi tu unachoweza kutimiza", "Hakuna anwani ya nyumbani"] }
          ],
          tryIt: "Muombe msaidizi wa AI aandike maelezo ya sentensi tatu ya biashara yako na tangazo moja fupi la mitandao ya kijamii. Hariri yote mawili yasikike kama wewe.",
          youCanNow: "kuandika maelezo mafupi ya biashara na tangazo yanayosikika kama wewe.",
          quickCheck: [
            { objective: "O4", q: "Maelezo mafupi ya biashara yanawaambia watu mambo gani matatu?", options: ["Bei zako, benki yako na umri wako", "Washindani wako, hofu zako na malengo yako", "Wewe ni nani, unafanya nini na jinsi ya kukufikia", "Anwani yako ya nyumbani, saa zako na familia yako"], answer: 2, why: "Maelezo yanasema wewe ni nani, unafanya nini na jinsi ya kukufikia." },
            { objective: "O4", q: "Tangazo la AI linaahidi \"kufikisha siku hiyo hiyo\" lakini huwezi kufanya hivyo. Unafanya nini?", options: ["Unalituma; linasikika vizuri", "Unaiongeza kwenye kila tangazo", "Unalituma na kutumaini", "Unaondoa ahadi hiyo kabla ya kutuma"], answer: 3, why: "Ahidi tu kile unachoweza kutimiza." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuweka kumbukumbu rahisi za pesa",
          minutes: 5,
          goal: "Tengeneza jedwali rahisi la bure kufuatilia pesa zinazoingia na zinazotoka.",
          text: [
            "Kuweka kumbukumbu kunakusaidia kuona kama unapata pesa, na utazihitaji wakati wa kulipa kodi. Unaweza kuanza na jedwali la bure kama Google Sheets au Excel kwenye wavuti.",
            "Iombe AI: \"Nisaidie kutengeneza jedwali rahisi la biashara yangu ndogo lenye safu za tarehe, kilikuwa nini, pesa zilizoingia, pesa zilizotoka, na maelezo. Nionyeshe jinsi ya kujumlisha kila safu.\" Kisha litengeneze mwenyewe.",
            "Andika kila uuzaji na kila matumizi siku hiyo hiyo, na uhifadhi risiti (picha inatosha). Muulize mshauri wa biashara wa bure au mtaalamu wa kodi ni kumbukumbu gani unahitaji kwa kodi. Usiandike namba za akaunti ya benki kwenye AI."
          ],
          steps: ["Fungua Google Sheets au Excel kwenye wavuti.", "Tengeneza safu: tarehe, kilikuwa nini, pesa zilizoingia, pesa zilizotoka, maelezo.", "Iulize AI jinsi ya kujumlisha kila safu.", "Andika kila uuzaji na matumizi siku hiyo hiyo.", "Hifadhi picha ya kila risiti."],
          words: [["Jedwali (spreadsheet)", "gridi ya mistari na safu kwa ajili ya namba na orodha."], ["Matumizi", "pesa unazotumia kwa ajili ya biashara."], ["Risiti", "uthibitisho wa ununuzi au malipo."]],
          slides: [
            { title: "Kwa nini uweke kumbukumbu", bullets: ["Uone kama unapata pesa", "Unazihitaji wakati wa kodi"] },
            { title: "Jedwali rahisi", bullets: ["Tarehe, kilikuwa nini", "Pesa zilizoingia, pesa zilizotoka", "Maelezo"] },
            { title: "Tabia nzuri", bullets: ["Andika siku hiyo hiyo", "Picha ya kila risiti", "Hakuna namba za benki kwenye AI"] }
          ],
          tryIt: "Tengeneza jedwali rahisi katika Google Sheets au Excel kwenye wavuti lenye safu tano. Ongeza mauzo matatu ya mfano na matumizi mawili, kisha jumlisha pesa zilizoingia na zilizotoka.",
          youCanNow: "kuweka kumbukumbu rahisi za pesa za biashara ndogo kwenye jedwali la bure.",
          quickCheck: [
            { objective: "O5", q: "Kwa nini uweke kumbukumbu rahisi za pesa?", options: ["Uone kama unapata pesa na uwe tayari wakati wa kodi", "Kwa sababu AI inazihitaji", "Uwaonyeshe wateja", "Uziweke mtandaoni"], answer: 0, why: "Kumbukumbu zinaonyesha kama unapata pesa, na unazihitaji kwa kodi." },
            { objective: "O5", q: "Ulinunua vifaa vya $30 lakini ukapoteza risiti ya karatasi. Ungefanya nini?", options: ["Hakuna; risiti si muhimu", "Kupiga picha ya risiti siku hiyo hiyo", "Kuandika namba yako ya benki kwenye AI", "Kukisia kiasi wakati wa kodi"], answer: 1, why: "Picha ya kila risiti inahifadhi kumbukumbu hata karatasi ikipotea." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuwajibu wateja na kuweka yote pamoja",
          minutes: 5,
          goal: "Andika majibu ya adabu kwa wateja na umalize mpango wako wa biashara wa ukurasa mmoja.",
          text: [
            "Huduma nzuri inawarudisha wateja. AI inaweza kukusaidia kuandika majibu ya adabu haraka: kuthibitisha oda, kusema umejaa kabisa, au kushughulikia lalamiko kwa utulivu.",
            "Kwa lalamiko, iombe: \"Andika jibu tulivu na la upole kwa mteja anayesema chakula kilifika kwa kuchelewa. Omba msamaha, eleza tutarekebisha, na toa punguzo dogo wakati ujao.\" Lisome na uhakikishe kwamba unachotoa unaweza kukimudu.",
            "Sasa weka kazi yako pamoja kwenye ukurasa mmoja: ofa yako, bei na gharama zako, maelezo yako na tangazo, maelezo kuhusu kumbukumbu zako, na mshauri wa bure uliyempata. Ukurasa huo ni mwanzo wa mpango wako wa biashara."
          ],
          steps: ["Iombe AI jibu la adabu kwa ujumbe wa kawaida wa mteja.", "Kagua kila ahadi kabla ya kutuma.", "Weka ofa, bei, maelezo, tangazo, maelezo ya kumbukumbu na mshauri kwenye ukurasa mmoja.", "Beba ukurasa huo kwenye mkutano na mshauri wako wa bure."],
          words: [["Mpango wa biashara", "mpango ulioandikwa wa kile biashara yako inauza, kwa nani, na jinsi itakavyopata pesa."]],
          slides: [
            { title: "Huduma nzuri inawarudisha wateja", bullets: ["Thibitisha oda", "Sema \"nimejaa kabisa\" kwa upole", "Shughulikia malalamiko kwa utulivu"] },
            { title: "Majibu ya malalamiko", bullets: ["Omba msamaha", "Sema utakavyorekebisha", "Toa tu unachoweza kumudu"] },
            { title: "Mpango wako wa ukurasa mmoja", bullets: ["Ofa na bei", "Maelezo na tangazo", "Kumbukumbu na mshauri wako wa bure"] }
          ],
          tryIt: "Kazi ya mwisho: tengeneza mpango wa ukurasa mmoja wenye ofa yako, bei iliyokaguliwa inayolipia gharama zako, maelezo ya sentensi tatu, tangazo moja la mitandao ya kijamii, na mawasiliano ya mshauri wa biashara wa bure karibu nawe.",
          youCanNow: "kupanga, kuweka bei na kutangaza biashara ndogo, na kujua wapi pa kupata msaada wa bure wa wataalamu.",
          quickCheck: [
            { objective: "O6", q: "Nini kinaingia kwenye mpango wako wa biashara wa ukurasa mmoja?", options: ["Bei yako tu", "Tangazo lako la mitandao ya kijamii tu", "Ofa, bei na gharama, maelezo na tangazo, maelezo ya kumbukumbu na mshauri wa bure", "Namba za simu za wateja wako"], answer: 2, why: "Mpango wa ukurasa mmoja unaweka kazi yako yote mahali pamoja." },
            { objective: "O6", q: "Umejaa kabisa wikendi hii na mteja anaomba oda. Unatuma nini?", options: ["Hakuna jibu", "Ndiyo, kisha unaghairi baadaye", "Jibu la jeuri", "Jibu la adabu kwamba umejaa na kupendekeza tarehe nyingine"], answer: 3, why: "Jibu la adabu na la kweli linamfanya mteja arudi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuendesha na kukuza biashara",
        questions: [
          { objective: "O4", q: "Maelezo mafupi ya biashara yanapaswa kuwa na nini?", options: ["Namba yako ya Social Security", "Wewe ni nani, unafanya nini, na jinsi ya kukufikia", "Anwani yako ya nyumbani", "Salio lako la benki"], answer: 1, why: "Hilo linawaambia wateja wanachohitaji kujua." },
          { objective: "O4", q: "Mawasiliano gani ni salama zaidi kutoa hadharani?", options: ["Anwani yako ya nyumbani", "Akaunti yako ya benki", "Simu au barua pepe ya biashara unayoridhika kuitoa", "Namba yako ya kitambulisho"], answer: 2, why: "Mambo ya binafsi yabaki ya binafsi." },
          { objective: "O5", q: "Safu zipi zinafaa kwenye jedwali rahisi la pesa?", options: ["Tarehe, kilikuwa nini, pesa zilizoingia, pesa zilizotoka, maelezo", "Jina lako tu", "Nywila yako", "Namba za Social Security za wateja"], answer: 0, why: "Safu hizo zinafuatilia pesa zinazoingia na kutoka." },
          { objective: "O5", q: "Unapaswa kuandika uuzaji lini?", options: ["Mwishoni mwa mwaka", "Kamwe", "Mauzo makubwa tu", "Siku hiyo hiyo"], answer: 3, why: "Kumbukumbu za siku hiyo hiyo ni sahihi." },
          { objective: "O6", q: "Mteja analalamika kwamba chakula kilichelewa. Jibu zuri:", options: ["Linamlaumu mteja", "Linaomba msamaha, linasema utakavyorekebisha, na linatoa tu unachoweza kumudu", "Linapuuza", "Linaahidi chakula cha bure milele"], answer: 1, why: "Majibu tulivu na ya kweli yanawabakiza wateja." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Ujasiriamali na Biashara Ndogo",
    questions: [
      { objective: "O1", q: "Mahali pazuri pa kuanzia wazo la biashara ni:", options: ["Kile ambacho watu tayari wanakuomba ufanye", "Chochote kinachopendwa mtandaoni", "Wazo lolote kutoka kwa AI", "Kunakili kampuni kubwa"], answer: 0, why: "Vitu ambavyo watu tayari wanakuomba vinaonyesha hitaji halisi." },
      { objective: "O1", q: "Mteja ni:", options: ["Msambazaji wako", "Mtu anayelipia unachouza", "Mwelekezi wako", "Benki"], answer: 1, why: "Wateja wananunua kutoka kwako." },
      { objective: "O1", q: "Kwa nini uiombe AI ofa tatu badala ya moja?", options: ["Ni nafuu zaidi", "Inalazimishwa", "Ili uchague ile inayokufaa zaidi", "Kuwachanganya wateja"], answer: 2, why: "Machaguo yanakusaidia kupata inayofaa zaidi." },
      { objective: "O2", q: "Biashara ndogo nyingi hufanya kosa gani la bei?", options: ["Kutoza bei kubwa mno", "Kutotoza kabisa", "Kutoza kwa sarafu nyingine", "Kutoza bei ndogo mno"], answer: 3, why: "Kusahau gharama na muda kunaleta bei ndogo." },
      { objective: "O2", q: "Faida ni:", options: ["Pesa zinazobaki baada ya kulipa gharama zako zote", "Pesa zote unazopokea", "Vifaa vyako", "Mkopo"], answer: 0, why: "Faida ni kile kinachobaki." },
      { objective: "O2", q: "AI inapokupigia hesabu ya bei, unapaswa:", options: ["Kuiamini kabisa", "Kukagua hesabu mwenyewe", "Kupuuza gharama zako", "Kumuuliza mtu usiyemjua"], answer: 1, why: "AI inaweza kukosea hesabu." },
      { objective: "O2", q: "Unaweza kujifunza wapi kuhusu kodi za biashara?", options: ["Tangazo linalojitokeza ghafla", "Mchezo wa video", "irs.gov, mshauri wa bure au mtaalamu wa kodi", "Kwa AI tu"], answer: 2, why: "Vyanzo rasmi na wataalamu wanajua sheria za kodi." },
      { objective: "O3", q: "SBA ni:", options: ["Benki", "App ya mitandao ya kijamii", "Klabu ya binafsi", "U.S. Small Business Administration (shirika la Marekani la biashara ndogo)"], answer: 3, why: "Ni shirika la serikali kuu linalosaidia biashara ndogo." },
      { objective: "O3", q: "Small Business Development Centers vinatoa:", options: ["Ushauri na mafunzo", "Bidhaa za bure", "Majengo ya bure", "Matangazo ya kulipia"], answer: 0, why: "SBDC zinasaidia watu kuanza na kukuza biashara." },
      { objective: "O3", q: "Women's Business Centers vinatoa huduma ambazo ni:", options: ["Ghali kila wakati", "Bure hadi gharama nafuu", "Kwa kampuni kubwa tu", "Mtandaoni tu"], answer: 1, why: "SBA inazieleza kuwa bure hadi gharama nafuu." },
      { objective: "O3", q: "Unapaswa kubeba nini kwenye mkutano na mshauri wa bure?", options: ["Hakuna kitu", "PIN yako ya benki", "Mpango wako wa ukurasa mmoja na maswali", "Nywila zako"], answer: 2, why: "Mpango na maswali vinaufanya mkutano uwe na manufaa." },
      { objective: "O4", q: "Maelezo ya biashara yanapaswa:", options: ["Kuahidi vitu usivyoweza kufanya", "Kuwa na anwani yako ya nyumbani", "Kuwa kurasa kumi", "Kusikika kama wewe na kuwa ya kweli"], answer: 3, why: "Ukweli na mguso wako binafsi vinajenga imani." },
      { objective: "O4", q: "Wateja wako wengi wanazungumza Kihispania. Unaweza:", options: ["Kuiomba AI toleo la Kihispania la tangazo lako", "Kutangaza kwa Kiingereza tu", "Kutotangaza kabisa", "Kutumia picha tu"], answer: 0, why: "Lugha ya pili inawafikia wateja wako." },
      { objective: "O4", q: "Kabla ya kutuma tangazo, hakikisha kwamba:", options: ["Ni refu kadiri iwezekanavyo", "Kila ahadi ni ya kweli na mawasiliano ni salama", "Lina namba yako ya Social Security", "Linataja kila mshindani"], answer: 1, why: "Ahadi lazima ziwe za kweli na mawasiliano salama." },
      { objective: "O5", q: "Jedwali (spreadsheet) ni:", options: ["Shuka la kitanda", "Fomu ya kodi", "Gridi ya mistari na safu", "Leseni ya biashara"], answer: 2, why: "Majedwali yanapanga namba na orodha." },
      { objective: "O5", q: "Zana gani za bure zinaweza kuhifadhi kumbukumbu zako za pesa?", options: ["Kampuni ya uhasibu ya kulipia tu", "Ujumbe mfupi wa simu", "Albamu ya picha", "Google Sheets au Excel kwenye wavuti"], answer: 3, why: "Zote mbili ni zana za bure za majedwali." },
      { objective: "O5", q: "Unapaswa kuhifadhi nini kwa kila matumizi?", options: ["Risiti, picha inatosha", "Hakuna", "Kumbukumbu kichwani", "Makisio ya AI"], answer: 0, why: "Risiti zinathibitisha ulichotumia." },
      { objective: "O5", q: "Kipi hupaswi kamwe kuandika kwenye AI?", options: ["\"Nisaidie kutengeneza safu\"", "Namba yako ya akaunti ya benki", "\"Andika tangazo la kirafiki\"", "Jina la biashara yako"], answer: 1, why: "Namba za benki ni za binafsi." },
      { objective: "O6", q: "Unapotoa punguzo baada ya lalamiko, hakikisha kwamba:", options: ["Ni kubwa kadiri iwezekanavyo", "Unaahidi huduma ya bure milele", "Ni punguzo unaloweza kumudu", "Hauombi msamaha kamwe"], answer: 2, why: "Toa tu kile biashara yako inaweza kumudu." },
      { objective: "O6", q: "Mpango wako wa ukurasa mmoja una:", options: ["Nembo yako tu", "Anwani yako ya nyumbani", "Nywila zako", "Ofa, bei, maelezo, tangazo, kumbukumbu na mshauri wa bure"], answer: 3, why: "Sehemu hizo zinakamilisha kazi ya mwisho." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 5, 7, 10, 11, 13, 14, 16, 18] },
  rubric: {
    mastery: "Inafikia au Inazidi kwenye kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Ofa", objective: "O1", notYet: "Hakuna ofa, au haisemi nini, kwa nani, au kwa nini wewe.", meets: "Sentensi moja yenye unachofanya, ni ya nani na kinachokufanya uwe tofauti.", exceeds: "Imehaririwa ili isikike wazi kama mwanafunzi mwenyewe." },
      { name: "Bei inalipia gharama", objective: "O2", notYet: "Bei iko chini ya gharama, au hesabu haikukaguliwa.", meets: "Inaorodhesha gharama na saa, na bei inazilipia, hesabu ikiwa imekaguliwa kwa mkono.", exceeds: "Imelinganishwa na bei za mahali ulipo na imetaja kodi na leseni za kuuliza." },
      { name: "Maelezo na tangazo", objective: "O4", notYet: "Hayapo, au yanaahidi mambo ambayo biashara haiwezi kutimiza.", meets: "Maelezo ya sentensi tatu na tangazo moja, ya kweli na yenye mawasiliano salama.", exceeds: "Yana toleo la lugha ya pili kwa wateja wanaolihitaji." },
      { name: "Mshauri wa bure", objective: "O3", notYet: "Hakuna mshauri aliyetajwa.", meets: "Anamtaja mshauri wa SCORE, SBDC au Women's Business Center pamoja na mawasiliano.", exceeds: "Anaorodhesha maswali matatu ya kuuliza kwenye mkutano." },
      { name: "Mpango wa ukurasa mmoja", objective: "O6", notYet: "Sehemu zinakosekana au ziko kwenye kurasa tofauti.", meets: "Sehemu zote ziko kwenye ukurasa mmoja, pamoja na maelezo kuhusu kumbukumbu za pesa.", exceeds: "Uko tayari kubebwa kwenye mkutano na mshauri, ukiwa na mfano wa jibu kwa mteja." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kipimo cha tathmini)",
      "Wanafunzi wanaokutana na mshauri wa biashara wa bure ndani ya siku 60 (dodoso la ufuatiliaji)",
      "Wanafunzi wanaopandisha bei ili zilipie gharama au wanaoanza kuweka kumbukumbu za pesa",
      "Wanafunzi wanaoanza au kusajili biashara ndogo ndani ya miezi 6"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja yenye intaneti, au kompyuta ya maktaba",
      "Msaidizi wa AI wa bure: Microsoft Copilot, ChatGPT au Google Gemini",
      "Google Sheets au Excel kwenye wavuti (bure) na kikokotoo",
      "Karatasi kwa ajili ya mpango wa ukurasa mmoja",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Mwombe kila mwanafunzi atumie biashara yake halisi au anayoipanga katika kila kazi.",
      "Pigeni hesabu za bei pamoja kwa vikokotoo; wanafunzi wengi wanagundua kwamba wamekuwa wakitoza bei ndogo mno.",
      "Mwalike mwelekezi wa SCORE au mshauri wa SBDC kwenye kipindi cha mwisho ukiweza.",
      "Wakumbushe wanafunzi kwamba kodi na leseni zinatofautiana kwa mahali, na kwamba wakague vyanzo rasmi au mshauri; usitoe ushauri wa kodi.",
      "Tathmini kazi ya mwisho kwa kipimo cha tathmini, na utoe maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};

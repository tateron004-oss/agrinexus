"use strict";

// Koach Learn course (Swahili translation of underserved/underserved-ai-web-development.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "underserved-ai-web-development-sw",
  lang: "sw",
  translationOf: "underserved-ai-web-development",
  category: "Undeserved Community",
  name: "Kutengeneza Tovuti kwa Msaada wa AI",
  skills: "Kupanga tovuti ya ukurasa mmoja, Kujenga tovuti ya bure kwa Google Sites, Kuandika maneno ya tovuti kwa AI, Kusoma na kuhariri HTML rahisi, Kuongeza kwa usalama code iliyoandikwa na AI, Kuchapisha na kukagua tovuti",
  outcome: "kupanga, kujenga na kuchapisha tovuti ya bure ya ukurasa mmoja kwa biashara ya familia, klabu au kikundi cha jamii kwa Google Sites, ukitumia msaidizi wa AI wa bure kuandika maneno na kipande kidogo cha HTML unachosoma, kujaribu na kurekebisha mwenyewe.",
  about: [
    "Tovuti huwasaidia watu kupata kikundi cha kanisa, chama cha mtaa, programu ya masomo ya ziada au biashara ndogo ya familia. Huhitaji pesa wala shahada ya sayansi ya kompyuta ili kutengeneza moja.",
    "Katika kozi hii utapanga tovuti ya ukurasa mmoja, utaijenga kwa Google Sites (bure ukiwa na akaunti ya Google), utatumia msaidizi wa AI wa bure kukusaidia kuandika maneno, na utajifunza HTML, lugha ya kurasa za wavuti, kiasi cha kutosha kusoma, kujaribu na kurekebisha kipande kidogo cha code ambacho AI inakuandikia.",
    "Unaweza kufanya kazi kwenye kompyuta ya nyumbani au ya maktaba. Kila somo linachukua kama dakika tano na linaisha na kazi ya \"Jaribu sasa\" inayojenga tovuti yako halisi. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Chapisha tovuti ya Google Sites ya ukurasa mmoja kwa kikundi cha jamii au biashara ndogo, halisi au ya mazoezi. Lazima iwe na kichwa kilicho wazi, sehemu fupi ya \"Kuhusu sisi\" iliyoandikwa kwa msaada wa AI na uliyoihariri kwa maneno yako mwenyewe, kisanduku kidogo cha HTML chenye saa za kazi na mawasiliano ulichojaribu na kurekebisha, isiwe na anwani ya nyumbani wala namba ya simu ya binafsi, na lazima ionekane vizuri kwenye simu.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima na vijana katika jamii zisizohudumiwa vya kutosha wanaotaka tovuti kwa kikundi cha kanisa, chama cha mtaa, programu ya masomo ya ziada, klabu au biashara ndogo ya familia, na watu wanaotaka kuchukua hatua ya kwanza katika kazi ya wavuti.",
    startingPoint: "Wanatumia simu na kuvinjari wavuti. Hawajawahi kujenga tovuti wala kusoma HTML, na huenda wana akaunti ya Google lakini hawajatumia Google Sites. Baadhi wametumia msaidizi wa AI kidogo.",
    gap: "Vikundi na biashara ndogo zisizopatikana mtandaoni hukosa wanachama na wateja, na kulipia tovuti ni ghali kwao. Wanafunzi wanahitaji kupanga na kuchapisha tovuti ya bure, kutumia AI kwa maneno na code huku wakikagua kila ukweli, na kulinda taarifa binafsi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 6 hadi 7)",
      "Vifaa: kompyuta inahitajika kujenga kwa Google Sites; simu ya kukagua tovuti ikiwa hewani",
      "Gharama: akaunti ya Google ya bure, Google Sites na kihariri cha HTML cha mtandaoni cha bure tu",
      "Usalama: jaribu code yote ya AI, HTML rahisi tu, na hakuna script ambazo hukuziomba",
      "Faragha: hakuna anwani ya nyumbani, namba ya simu ya binafsi wala picha za watoto bila ruhusa ya maandishi"
    ],
    prerequisites: "Hakuna. Wanafunzi wapya kwa wasaidizi wa AI wanaweza kuanza na kozi \"Introduction to AI and Digital Empowerment\" (Utangulizi wa AI na Uwezeshaji wa Kidijitali)."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa kikundi au biashara, halisi au ya mazoezi", action: "kupanga tovuti ya ukurasa mmoja yenye walengwa wake, kitendo kimoja kwa wageni, sehemu na picha", standard: "ikiwa na sehemu nne au tano na picha tu unazoruhusiwa kutumia" },
    { id: "O2", condition: "Ukitumia akaunti ya Google ya bure", action: "kutengeneza tovuti ya Google Sites yenye kichwa, kisanduku cha maandishi kwa kila sehemu uliyopanga na mandhari inayosomeka", standard: "bila msaada" },
    { id: "O3", condition: "Ukipewa ukweli halisi wa kikundi chako", action: "kuandika sehemu ya Kuhusu Sisi kwa msaidizi wa AI na kuihariri kwa maneno yako mwenyewe", standard: "ukiondoa kila ukweli usio sahihi au uliobuniwa" },
    { id: "O4", condition: "Ukipewa kipande kifupi cha HTML katika kihariri cha mtandaoni", action: "kutambua tagi zake na kubadilisha maneno yaliyo kati yake", standard: "ili ukurasa bado ufanye kazi sawasawa" },
    { id: "O5", condition: "Ukitumia msaidizi wa AI wa bure", action: "kuomba kisanduku rahisi cha HTML, kukijaribu, kurekebisha tatizo moja na kukiweka (embed) kwenye tovuti yako ya Google Sites", standard: "kila ukweli ukiwa sahihi na bila script ambazo hukuziomba" },
    { id: "O6", condition: "Tovuti yako ikiwa tayari", action: "kuichapisha, kuikagua kwenye simu na kuondoa taarifa binafsi", standard: "viungo vikifanya kazi, maandishi yakisomeka na bila anwani ya binafsi, namba ya binafsi wala picha zisizoruhusiwa" }
  ],
  chapters: [
    {
      name: "Sura 1: Panga na ujenge tovuti yako",
      lessons: [
        {
          objectives: ["O1"],
          title: "Jinsi tovuti zinavyofanya kazi, na kupanga ukurasa wako",
          minutes: 4,
          goal: "Andika mpango rahisi wa tovuti ya ukurasa mmoja.",
          text: [
            "Tovuti ni kurasa zilizohifadhiwa kwenye kompyuta inayoitwa seva (server). Unapoandika anwani, kivinjari chako kinaiomba seva hiyo ukurasa na kukuonyesha.",
            "Kabla ya kujenga, panga. Jibu maswali manne: Tovuti ni ya nani? Ni jambo gani moja wageni wanapaswa kufanya (kupiga simu, kutembelea, kujiandikisha, kuchangia)? Unahitaji sehemu gani? Ni picha zipi unaweza kutumia kwa ruhusa?",
            "Tovuti nyingi ndogo za jamii zinahitaji sehemu chache tu: kichwa, \"Kuhusu sisi\", unachotoa, saa za kazi na jinsi ya kukufikia."
          ],
          steps: ["Andika tovuti ni ya nani.", "Andika kitendo kimoja unachotaka wageni wafanye.", "Orodhesha sehemu nne au tano.", "Orodhesha picha unazomiliki au una ruhusa ya kutumia."],
          words: [["Tovuti", "ukurasa mmoja au zaidi ambao watu wanaweza kutembelea kwenye intaneti."], ["Seva (server)", "kompyuta inayohifadhi tovuti na kutuma kurasa kwa wageni."], ["Kivinjari (browser)", "programu unayotumia kutembelea tovuti, kama Chrome, Edge au Safari."]],
          slides: [
            { title: "Jinsi tovuti inavyofanya kazi", bullets: ["Kurasa zimehifadhiwa kwenye seva", "Kivinjari chako kinaomba ukurasa", "Seva inaurudisha"] },
            { title: "Panga kwa maswali manne", bullets: ["Ni ya nani?", "Wageni wafanye nini?", "Unahitaji sehemu gani?", "Ni picha zipi unaweza kutumia?"] },
            { title: "Tovuti rahisi ya ukurasa mmoja", bullets: ["Kichwa", "Kuhusu sisi na unachotoa", "Saa za kazi na jinsi ya kukufikia"] }
          ],
          tryIt: "Chagua kikundi halisi au cha mazoezi (kwa mfano klabu ya masomo ya ziada ya vijana au gari la chakula la familia). Andika mpango wako: ni ya nani, kitendo kimoja, sehemu tano na picha mbili unazoweza kutumia.",
          youCanNow: "kueleza jinsi tovuti inavyokufikia na kupanga tovuti ya ukurasa mmoja.",
          quickCheck: [
            { objective: "O1", q: "Seva ni nini?", options: ["Kompyuta inayohifadhi tovuti na kutuma kurasa", "Skrini unayoitazama", "Anwani ya wavuti", "Aina ya simu"], answer: 0, why: "Seva huhifadhi kurasa za wavuti na kuzituma kivinjari kinapoomba." },
            { objective: "O1", q: "Tovuti ya gari lako la chakula inapaswa kuwaleta watu waje kula. Kitendo kimoja ni kipi?", options: ["Kusoma historia ya tacos", "Kujua gari litakuwa wapi na lini", "Kuacha maoni marefu", "Kupakua faili"], answer: 1, why: "Kitendo kimoja ni kile unachotaka zaidi wageni wafanye, kama kutembelea gari." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kujenga tovuti ya bure kwa Google Sites",
          minutes: 5,
          goal: "Tengeneza tovuti ya Google Sites yenye kichwa na sehemu ulizopanga.",
          text: [
            "Google Sites ni zana ya bure ya kujenga tovuti inayokuja na akaunti ya Google. Unajenga kwa kubofya na kuandika, si kwa kuandika code.",
            "Fungua sites.google.com kwenye kompyuta na uanzishe tovuti mpya, tupu au kutoka kwenye kiolezo. Ipe tovuti jina na uandike kichwa cha ukurasa. Upande wa kulia utapata Insert (kuongeza visanduku vya maandishi, picha na zaidi), Pages na Themes.",
            "Ongeza kisanduku cha maandishi kwa kila sehemu ya mpango wako. Chagua mandhari yenye rangi zinazosomeka kwa urahisi. Google Sites huhifadhi kazi yako unapoendelea."
          ],
          steps: ["Nenda sites.google.com na uingie kwa akaunti yako ya Google.", "Anzisha tovuti mpya, tupu au kutoka kwenye kiolezo.", "Andika jina la tovuti na kichwa cha ukurasa.", "Tumia Insert upande wa kulia kuongeza kisanduku cha maandishi kwa kila sehemu.", "Chagua mandhari inayosomeka kwa urahisi."],
          words: [["Kiolezo (template)", "muundo uliotayarishwa ambao unaujaza kwa maneno yako mwenyewe."], ["Mandhari (theme)", "rangi na mitindo ya herufi inayotumika kwenye tovuti yako yote."]],
          sources: [{ name: "Msaada wa Google Sites: Kutengeneza, kutaja jina au kunakili tovuti", url: "https://support.google.com/sites/answer/6372878" }],
          slides: [
            { title: "Google Sites", bullets: ["Bure ukiwa na akaunti ya Google", "Jenga kwa kubofya na kuandika", "Huhifadhi unapoendelea"] },
            { title: "Anzisha tovuti yako", bullets: ["Fungua sites.google.com", "Anza tupu au kutoka kwenye kiolezo", "Andika jina la tovuti na kichwa cha ukurasa"] },
            { title: "Ongeza sehemu zako", bullets: ["Insert upande wa kulia: visanduku vya maandishi, picha", "Kisanduku kimoja kwa kila sehemu", "Chagua mandhari inayosomeka kwa urahisi"] }
          ],
          tryIt: "Anzisha tovuti mpya ya Google Sites kwa kikundi chako. Ongeza kichwa na kisanduku tupu cha maandishi kwa kila sehemu ya mpango wako, na uchague mandhari.",
          youCanNow: "kujenga kiunzi cha tovuti ya bure kwa Google Sites.",
          quickCheck: [
            { objective: "O2", q: "Mandhari (theme) katika Google Sites inabadilisha nini?", options: ["Anwani yako ya wavuti", "Nani anaweza kuona tovuti", "Rangi na mitindo ya herufi", "Ukweli ulio kwenye tovuti"], answer: 2, why: "Mandhari huweka rangi na mitindo ya herufi ya tovuti yako." },
            { objective: "O2", q: "Unataka kuongeza sehemu ya \"Saa za kazi\" kwenye tovuti yako ya Google Sites. Unabofya nini?", options: ["Publish", "Themes", "Pages", "Insert, kisha kisanduku cha maandishi"], answer: 3, why: "Insert upande wa kulia huongeza visanduku vya maandishi, picha na zaidi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuandika maneno ya tovuti yako kwa AI",
          minutes: 5,
          goal: "Tumia msaidizi wa AI wa bure kuandika rasimu ya sehemu ya Kuhusu Sisi, kisha uifanye kuwa yako.",
          text: [
            "Msaidizi wa AI wa bure kama ChatGPT, Microsoft Copilot au Google Gemini anaweza kuandika rasimu ya kwanza ya maneno ya tovuti yako. Mpe ukweli na mtindo wa sauti unaotaka.",
            "Mfano wa prompt: \"Andika Kuhusu Sisi ya kirafiki ya maneno 60 kwa klabu ya bure ya masomo ya ziada baada ya shule katika kituo cha jamii. Tunawasaidia watoto wa darasa la 3 hadi 8 katika kusoma na hesabu. Tumia maneno rahisi.\"",
            "Kisha hariri. Rekebisha ukweli wowote ambao AI imekosea au imebuni, ondoa maneno yasiyosikika kama wewe, na usiiache kamwe ibuni bei, tuzo au ahadi usizoweza kutimiza. Tovuti yako inasema kwa niaba ya kikundi chako, kwa hiyo wewe unawajibika kwa kila neno."
          ],
          steps: ["Mpe AI ukweli halisi wa kikundi chako na mtindo wa sauti unaotaka.", "Omba rasimu fupi yenye kikomo cha maneno.", "Rekebisha ukweli usio sahihi au uliobuniwa.", "Andika upya sehemu ili zisikike kama wewe, kisha bandika kwenye tovuti yako."],
          words: [["Rasimu", "toleo la kwanza utakaloliboresha."], ["Mtindo wa sauti (tone)", "jinsi maandishi yanavyosikika: ya kirafiki, ya kitaalamu, ya furaha."]],
          slides: [
            { title: "AI inaandika rasimu ya kwanza", bullets: ["Ipe ukweli halisi", "Sema mtindo wa sauti na kikomo cha maneno"] },
            { title: "Mfano wa prompt", bullets: ["\"Andika Kuhusu Sisi ya kirafiki ya maneno 60 kwa", "klabu ya bure ya masomo ya ziada ya darasa la 3 hadi 8.", "Tumia maneno rahisi.\""] },
            { title: "Wewe unaihariri", bullets: ["Rekebisha ukweli usio sahihi au uliobuniwa", "Hakuna bei, tuzo wala ahadi zilizobuniwa", "Ifanye isikike kama wewe"] }
          ],
          tryIt: "Muombe msaidizi wa AI Kuhusu Sisi ya maneno 60 kwa kikundi chako. Rekebisha ukweli au msemo mmoja, kisha bandika toleo ulilohariri kwenye tovuti yako ya Google Sites.",
          youCanNow: "kutumia AI kuandika rasimu ya maneno ya tovuti na kuihariri ili iwe ya kweli na isikike kama wewe.",
          quickCheck: [
            { objective: "O3", q: "Kwa nini uipe AI kikomo cha maneno kwa Kuhusu Sisi yako?", options: ["Ili rasimu iwe fupi na itoshe kwenye ukurasa wako", "Ili igharimu kidogo", "Ili itumie maneno magumu zaidi", "Ili iongeze ukweli zaidi"], answer: 0, why: "Kikomo cha maneno huifanya rasimu iwe fupi kiasi cha kutosha tovuti ndogo." },
            { objective: "O3", q: "Rasimu ya AI inasema masomo yako ya ziada \"yanahakikisha alama zitapanda\". Unafanya nini?", options: ["Uiache; inasikika vizuri", "Uondoe ahadi usiyoweza kutimiza", "Uifanye kubwa na iliyokolezwa", "Uongeze hakikisho la pili"], answer: 1, why: "Usiiache kamwe AI iongeze ahadi usizoweza kutimiza; wewe unawajibika kwa kila neno." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Panga na ujenge tovuti yako",
        questions: [
          { objective: "O1", q: "Seva inafanya nini?", options: ["Inahifadhi tovuti na kutuma kurasa kwa wageni", "Inachapisha kurasa kwenye karatasi", "Inachaji simu yako", "Inaandika maneno yako"], answer: 0, why: "Seva ni kompyuta inayoshikilia tovuti na kutuma kurasa." },
          { objective: "O1", q: "Swali lipi linafaa kuwa katika mpango wa tovuti yako?", options: ["Nywila yangu ni ipi?", "Ni jambo gani moja wageni wanapaswa kufanya?", "Namba yangu ya benki ni ipi?", "Nilikula nini leo?"], answer: 1, why: "Kujua kitendo kimoja kunakusaidia kusanifu ukurasa." },
          { objective: "O2", q: "Unahitaji nini kutumia Google Sites bure?", options: ["Huduma ya kulipia ya kuhifadhi tovuti", "Shahada ya sayansi ya kompyuta", "Akaunti ya Google", "Kadi ya mkopo"], answer: 2, why: "Google Sites inakuja bure na akaunti ya Google." },
          { objective: "O2", q: "Katika Google Sites, unaongeza wapi visanduku vya maandishi na picha?", options: ["Kwenye pipa la taka", "Kwenye sehemu ya anwani", "Kwenye printa", "Insert, upande wa kulia"], answer: 3, why: "Paneli ya Insert upande wa kulia huongeza maudhui." },
          { objective: "O3", q: "Rasimu ya AI inasema klabu yako \"ilishinda tuzo ya kitaifa\" lakini haikushinda. Unafanya nini?", options: ["Uiondoe kabla ya kuchapisha", "Uiache, inasikika vizuri", "Uifanye kubwa zaidi", "Uiombe AI tuzo zaidi"], answer: 0, why: "Wewe unawajibika kwa kila neno; ondoa ukweli uliobuniwa." }
        ]
      }
    },
    {
      name: "Sura 2: Code, kuchapisha na kukagua",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kusoma HTML rahisi",
          minutes: 5,
          goal: "Soma kipande kifupi cha HTML na ubadilishe maneno yake kwa usalama.",
          text: [
            "HTML ni lugha ambayo kurasa za wavuti zinaandikwa nayo. Inatumia tagi ndani ya mabano ya pembe. Tagi nyingi huja kwa jozi: tagi ya kufungua kama <h2> na tagi ya kufunga kama </h2>, na maneno katikati.",
            "Tagi za kawaida: <h2> kwa kichwa, <p> kwa aya, <ul> na <li> kwa orodha ya vitone, <strong> kwa herufi nzito, na <a href=\"...\"> kwa kiungo.",
            "Unaweza kujizoeza bure, bila akaunti, katika kihariri cha mtandaoni kama W3Schools Tryit Editor: bandika HTML upande wa kushoto, bofya Run, na uone ukurasa upande wa kulia. Mwanzoni badilisha maneno yaliyo kati ya tagi tu, kisha iendeshe tena."
          ],
          steps: ["Fungua kihariri cha HTML cha mtandaoni cha bure.", "Bandika kipande kifupi cha HTML.", "Bofya Run kuona matokeo.", "Badilisha maneno kati ya tagi mbili na uiendeshe tena."],
          words: [["HTML", "lugha inayotumika kuandika kurasa za wavuti."], ["Tagi (tag)", "lebo ndani ya mabano ya pembe, kama <p>, inayokiambia kivinjari kitu ni nini."], ["Tagi ya kufunga", "tagi ya mwisho yenye mkwaju, kama </p>."]],
          slides: [
            { title: "HTML hujenga kurasa za wavuti", bullets: ["Tagi ndani ya mabano ya pembe", "Kufungua <p> ... kufunga </p>"] },
            { title: "Tagi za kujua", bullets: ["<h2> kichwa, <p> aya", "<ul> na <li> orodha ya vitone", "<strong> herufi nzito, <a> kiungo"] },
            { title: "Jizoeze bure", bullets: ["Kihariri cha mtandaoni kama W3Schools Tryit", "Bandika, Run, tazama", "Badilisha maneno kati ya tagi"] }
          ],
          tryIt: "Katika kihariri cha HTML cha mtandaoni cha bure, andika <h2>Saa Zetu</h2><p>Jumatatu saa 3 hadi 6 jioni</p>. Bofya Run, badilisha saa, na uiendeshe tena.",
          youCanNow: "kusoma tagi rahisi za HTML na kubadilisha kwa usalama maneno yaliyo ndani yake.",
          quickCheck: [
            { objective: "O4", q: "Tagi ipi inatengeneza kipengele cha orodha ya vitone?", options: ["<p>", "<h2>", "<li>", "<strong>"], answer: 2, why: "<li> huweka alama kwa kila kipengele katika orodha ya vitone, ndani ya <ul>." },
            { objective: "O4", q: "Unataka kubadilisha \"Jumatatu\" kuwa \"Jumanne\" katika <p>Jumatatu saa 3 hadi 6 jioni</p>. Unabadilisha nini?", options: ["Tagi ya <p>", "Tagi ya </p>", "Kufuta tagi", "Neno lililo kati ya tagi tu"], answer: 3, why: "Mwanzoni, badilisha maneno kati ya tagi tu ili HTML iendelee kufanya kazi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuifanya AI iandike code, kisha kuijaribu na kuirekebisha",
          minutes: 6,
          goal: "Iombe AI kisanduku kidogo cha HTML, kijaribu, rekebisha tatizo moja na ukiongeze kwenye tovuti yako.",
          text: [
            "Wasaidizi wa AI wanaweza kuandika HTML. Kuwa mahususi: \"Andika HTML rahisi tu, bila JavaScript, kwa kisanduku chenye kichwa Saa na Mawasiliano, orodha ya saa zetu (Jumatatu hadi Alhamisi saa 3 hadi 6 jioni), na kiungo cha barua pepe yetu. Tumia mandharinyuma angavu na maandishi makubwa.\"",
            "Daima jaribu code ya AI kabla ya kuitumia. Ibandike kwenye kihariri cha mtandaoni, bofya Run na ukague: Kila ukweli ni sahihi? Kiungo kinafanya kazi? Maandishi yanasomeka kwa urahisi? Kitu kikiwa si sahihi, iambie AI hasa cha kurekebisha, au urekebishe maneno mwenyewe.",
            "Usibandike code usiyoielewa kutoka kwa watu usiowajua au kutoka kwa AI yenye script ambazo hukuziomba. Kuongeza kisanduku chako kwenye Google Sites: bofya Insert, kisha Embed, chagua Embed code, bandika HTML yako, bofya Next na Insert."
          ],
          steps: ["Iombe AI HTML rahisi tu, yenye saa zako halisi na mawasiliano.", "Ijaribu kwenye kihariri cha mtandaoni.", "Rekebisha kitu kimoja: ukweli, kiungo au ukubwa wa maandishi.", "Katika Google Sites: Insert, Embed, Embed code, bandika, Next, Insert."],
          words: [["Code", "maagizo yaliyoandikwa kwa ajili ya kompyuta, kama HTML."], ["Embed (kupachika)", "kuweka kipande cha code au maudhui ndani ya ukurasa."], ["Bug (hitilafu)", "kosa katika code linaloifanya ifanye kazi vibaya."]],
          sources: [{ name: "Msaada wa Google Sites: Kupachika HTML au JavaScript kwenye tovuti yako", url: "https://support.google.com/sites/answer/90569" }],
          slides: [
            { title: "Iombe AI code kwa uwazi", bullets: ["HTML rahisi tu, bila JavaScript", "Saa zako halisi na mawasiliano", "Maandishi makubwa yanayosomeka kwa urahisi"] },
            { title: "Jaribu kabla ya kutumia", bullets: ["Bandika na Run kwenye kihariri", "Ukweli sahihi? Kiungo kinafanya kazi? Kinasomeka?", "Irekebishe au iombe AI irekebishe kitu kimoja"] },
            { title: "Iongeze kwenye Google Sites", bullets: ["Insert, kisha Embed", "Chagua Embed code na ubandike", "Next, kisha Insert"] }
          ],
          tryIt: "Iombe AI kisanduku rahisi cha HTML cha Saa na Mawasiliano kwa kikundi chako. Kijaribu, rekebisha tatizo moja, na ukipachike kwenye tovuti yako ya Google Sites.",
          youCanNow: "kupata HTML inayofanya kazi kutoka kwa AI, kuijaribu, kuirekebisha na kuiongeza kwenye tovuti.",
          quickCheck: [
            { objective: "O5", q: "Kwa nini uiombe AI \"HTML rahisi tu, bila JavaScript\"?", options: ["HTML rahisi ni salama zaidi na rahisi kwa mwanzilishi kukagua", "JavaScript hairuhusiwi mtandaoni", "HTML inagharimu kidogo", "AI haiwezi kuandika JavaScript"], answer: 0, why: "HTML rahisi ni rahisi kusoma na kujaribu, bila script ambazo hukuziomba." },
            { objective: "O5", q: "Ulijaribu kisanduku cha AI na kiungo cha barua pepe hakifanyi kazi. Unafanya nini?", options: ["Ukipachike hata hivyo", "Uiambie AI hasa cha kurekebisha, au urekebishe mwenyewe, kisha ujaribu tena", "Ufute tovuti yako yote", "Uondoe barua pepe kwenye mpango"], answer: 1, why: "Rekebisha tatizo hilo moja na ujaribu tena kabla ya kutumia code." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuchapisha na kukagua tovuti yako",
          minutes: 5,
          goal: "Chapisha tovuti yako, ikague kwenye simu na ulinde taarifa binafsi.",
          text: [
            "Ukurasa wako ukiwa tayari, bofya Publish juu kulia katika Google Sites. Chagua anwani ya wavuti na uchapishe. Unaweza kufanya mabadiliko baadaye na kuchapisha tena.",
            "Kagua tovuti yako ikiwa hewani kwenye simu, kwa sababu wageni wengi watatumia simu. Maandishi ni makubwa ya kutosha? Viungo vinafanya kazi? Picha zinafunguka? Mwombe rafiki aijaribu pia.",
            "Linda faragha. Usiweke anwani ya nyumbani, namba ya simu ya binafsi wala picha za watoto bila ruhusa ya maandishi kutoka kwa mzazi au mlezi. Badala yake tumia barua pepe ya kikundi au mahali pa mikutano pa umma."
          ],
          steps: ["Bofya Publish, chagua anwani ya wavuti, na uchapishe.", "Fungua anwani ya tovuti hewani kwenye simu.", "Kagua ukubwa wa maandishi, viungo na picha.", "Ondoa anwani yoyote ya binafsi, namba ya binafsi au picha isiyo na ruhusa."],
          words: [["Kuchapisha (publish)", "kuifanya tovuti yako iwe hewani ili yeyote mwenye anwani aione."], ["Anwani ya wavuti", "maandishi unayoandika kutembelea tovuti, pia huitwa URL."]],
          slides: [
            { title: "Chapisha", bullets: ["Bofya Publish juu kulia", "Chagua anwani ya wavuti", "Unaweza kubadilisha na kuchapisha tena"] },
            { title: "Kagua kwenye simu", bullets: ["Maandishi ni makubwa ya kutosha?", "Viungo vinafanya kazi?", "Picha zinafunguka? Mwombe rafiki ajaribu"] },
            { title: "Linda faragha", bullets: ["Hakuna anwani ya nyumbani wala simu ya binafsi", "Hakuna picha za watoto bila ruhusa", "Tumia barua pepe ya kikundi au mahali pa umma"] }
          ],
          tryIt: "Kazi ya mwisho: chapisha tovuti yako ya Google Sites ya ukurasa mmoja yenye sehemu ya Kuhusu Sisi uliyohariri na kisanduku cha Saa na Mawasiliano ulichojaribu. Ikague kwenye simu na uondoe chochote cha binafsi.",
          youCanNow: "kuchapisha tovuti inayofanya kazi, kuikagua kwenye simu na kuzuia taarifa binafsi zisiwe juu yake.",
          quickCheck: [
            { objective: "O6", q: "Nini kinatokea unapobofya Publish katika Google Sites?", options: ["Tovuti inafutwa", "Ni wewe tu unayeweza kuiona", "Tovuti inakuwa hewani kwenye anwani ya wavuti uliyochagua", "Inachapisha tovuti kwenye karatasi"], answer: 2, why: "Kuchapisha huifanya tovuti iwe hewani kwenye anwani yake ya wavuti." },
            { objective: "O6", q: "Tovuti yako inaonyesha namba ya simu ya binafsi ya mwanachama. Unafanya nini?", options: ["Uiache; inawasaidia watu kupiga simu", "Uifanye ndogo zaidi", "Uwaombe wageni wasiipigie", "Uibadilishe kwa barua pepe ya kikundi na uchapishe tena"], answer: 3, why: "Namba za binafsi hazipaswi kuwa kwenye tovuti za umma; tumia barua pepe ya kikundi badala yake." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Code, kuchapisha na kukagua",
        questions: [
          { objective: "O4", q: "HTML ni nini?", options: ["Aina ya simu", "Lugha inayotumika kuandika kurasa za wavuti", "Nywila", "Programu ya barua pepe"], answer: 1, why: "Kurasa za wavuti zinaandikwa kwa HTML." },
          { objective: "O4", q: "Ipi ni tagi ya kufunga?", options: ["<p>", "<h2>", "</p>", "<li>"], answer: 2, why: "Tagi za kufunga zina mkwaju." },
          { objective: "O5", q: "AI imekupa HTML kwa tovuti yako. Unafanya nini kwanza?", options: ["Kuichapisha bila kuiangalia", "Kuwatumia watu usiowajua", "Kufuta tovuti yako", "Kuijaribu kwenye kihariri cha mtandaoni na kukagua ukweli"], answer: 3, why: "Kujaribu hukamata hitilafu na ukweli usio sahihi kabla wageni hawajauona." },
          { objective: "O5", q: "Unaongezaje code ya HTML kwenye tovuti ya Google Sites?", options: ["Insert, Embed, Embed code, bandika, Next, Insert", "Kuichapisha kwenye karatasi", "Kuituma kwa Google kwa barua pepe", "Kuiandika kwenye kichwa cha ukurasa"], answer: 0, why: "Hiyo ndiyo njia ya Embed code katika Google Sites." },
          { objective: "O6", q: "Kipi ni salama kuweka kwenye tovuti ya umma ya kikundi cha jamii?", options: ["Anwani yako ya nyumbani", "Anwani ya barua pepe ya kikundi", "Picha ya mtoto bila ruhusa", "Namba yako ya simu ya binafsi"], answer: 1, why: "Barua pepe ya kikundi inawawezesha watu kukufikia bila kufichua taarifa binafsi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kutengeneza Tovuti kwa Msaada wa AI",
    questions: [
      { objective: "O1", q: "Unapoandika anwani ya wavuti, nini kinatokea?", options: ["Kivinjari chako kinaiomba seva ukurasa", "Ukurasa unachapishwa kwenye karatasi", "Simu yako inaandika ukurasa", "Hakuna kitu"], answer: 0, why: "Seva inatuma ukurasa kwa kivinjari chako." },
      { objective: "O1", q: "Kipi ni kivinjari cha wavuti?", options: ["Lahajedwali (spreadsheet)", "Chrome", "Printa", "Ujumbe mfupi"], answer: 1, why: "Chrome, Edge na Safari ni vivinjari." },
      { objective: "O1", q: "Hatua ya kwanza katika kujenga tovuti ni:", options: ["Kulipia matangazo", "Kuchagua rangi tu", "Kutengeneza mpango rahisi", "Kuchapisha ukurasa mtupu"], answer: 2, why: "Mpango unakuambia tovuti inahitaji nini." },
      { objective: "O1", q: "Ni sehemu ipi tovuti ndogo ya jamii kwa kawaida inahitaji?", options: ["Anwani za nyumbani za wanachama", "Namba za benki", "Nywila", "Jinsi ya kukufikia"], answer: 3, why: "Wageni wanahitaji njia ya kuwasiliana nawe." },
      { objective: "O2", q: "Google Sites ni:", options: ["Zana ya bure ya kujenga tovuti ukiwa na akaunti ya Google", "Programu ya kulipia tu", "Kampuni ya simu", "Ukurasa wa mitandao ya kijamii"], answer: 0, why: "Inakuja bure na akaunti ya Google." },
      { objective: "O2", q: "Kiolezo (template) ni:", options: ["Nywila", "Muundo uliotayarishwa unaoujaza", "Aina ya seva", "Hitilafu (bug)"], answer: 1, why: "Violezo vinakupa muundo wa kuanzia." },
      { objective: "O2", q: "Mandhari (theme) inadhibiti:", options: ["Nani anaweza kutembelea", "Anwani ya wavuti", "Rangi na mitindo ya herufi", "Akaunti yako"], answer: 2, why: "Mandhari huweka mwonekano wa tovuti." },
      { objective: "O3", q: "Prompt ipi itatoa rasimu bora ya Kuhusu Sisi?", options: ["\"tovuti\"", "\"andika vitu\"", "\"saidia\"", "\"Andika Kuhusu Sisi ya kirafiki ya maneno 60 kwa klabu ya bure ya masomo ya ziada ya darasa la 3 hadi 8. Tumia maneno rahisi.\""], answer: 3, why: "Inatoa ukweli, urefu na mtindo wa sauti." },
      { objective: "O3", q: "Nani anawajibika kwa kila neno kwenye tovuti yako?", options: ["Wewe na kikundi chako", "AI", "Google", "Hakuna mtu"], answer: 0, why: "AI inaandika rasimu, lakini wewe unachapisha na unamiliki maneno." },
      { objective: "O4", q: "Tagi katika HTML ni nini?", options: ["Kibandiko cha bei", "Lebo ndani ya mabano ya pembe kama <p>", "Picha", "Anwani ya wavuti"], answer: 1, why: "Tagi hukiambia kivinjari kila sehemu ni nini." },
      { objective: "O4", q: "Tagi ipi inatengeneza aya?", options: ["<li>", "<a>", "<p>", "<ul>"], answer: 2, why: "<p> inasimama kwa paragraph (aya)." },
      { objective: "O4", q: "Katika kihariri cha HTML cha mtandaoni, unaonaje ukurasa wako?", options: ["Kuuchapisha kwenye karatasi", "Kuutuma kwa barua pepe", "Kuwasha upya kompyuta", "Kubofya Run"], answer: 3, why: "Run huonyesha matokeo ya HTML yako." },
      { objective: "O5", q: "Unapoiomba AI code kwa tovuti ya mwanzilishi, ombi salama ni:", options: ["\"HTML rahisi tu, bila JavaScript\"", "\"Ongeza script zozote unazopenda\"", "\"Nakili code kutoka tovuti yoyote\"", "\"Weka nywila yangu\""], answer: 0, why: "HTML rahisi ni rahisi zaidi kusoma, kujaribu na kuamini." },
      { objective: "O5", q: "Bug (hitilafu) ni:", options: ["Mandhari ya tovuti", "Kosa katika code linaloifanya ifanye kazi vibaya", "Anwani ya wavuti", "Aina ya kiolezo"], answer: 1, why: "Hitilafu ni makosa ya kutafuta na kurekebisha." },
      { objective: "O5", q: "Code ya AI inaonyesha saa ya kufunga isiyo sahihi. Unapaswa:", options: ["Kuchapisha hata hivyo", "Kufuta tovuti yote", "Kurekebisha maneno au kuiomba AI irekebishe kitu hicho kimoja", "Kupuuza"], answer: 2, why: "Rekebisha tatizo hilo mahususi, kisha ujaribu tena." },
      { objective: "O5", q: "\"Embed\" (kupachika) inamaanisha nini?", options: ["Kufuta ukurasa", "Kuchapisha ukurasa kwenye karatasi", "Kubadilisha nywila yako", "Kuweka code au maudhui ndani ya ukurasa"], answer: 3, why: "Kupachika huweka kisanduku chako cha HTML ndani ya tovuti." },
      { objective: "O6", q: "Kuifanya tovuti yako ya Google Sites iwe hewani, unabofya:", options: ["Publish", "Delete", "Print", "Undo"], answer: 0, why: "Publish huifanya tovuti ionekane kwenye anwani yake." },
      { objective: "O6", q: "Kwa nini ukague tovuti yako kwenye simu?", options: ["Simu haziwezi kuonyesha tovuti", "Wageni wengi wanatumia simu", "Inabadilisha anwani", "Inatakiwa na sheria"], answer: 1, why: "Wageni wengi wataiona tovuti yako kwenye simu." },
      { objective: "O6", q: "Kipi HAKIPASWI kuwekwa kwenye tovuti yako ya umma?", options: ["Saa za kikundi", "Barua pepe ya kikundi", "Picha ya mtoto bila ruhusa ya maandishi ya mzazi", "Unachotoa"], answer: 2, why: "Picha za watoto zinahitaji ruhusa ya mzazi au mlezi." },
      { objective: "O6", q: "Baada ya kuchapisha, unaweza kubadilisha tovuti yako ya Google Sites?", options: ["Hapana, kamwe", "Kwa kulipa tu", "Kwa kuanza upya tu", "Ndiyo, hariri na uchapishe tena"], answer: 3, why: "Unaweza kusasisha na kuchapisha tena wakati wowote." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 2, 4, 7, 9, 13, 15, 17, 18]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Tovuti imejengwa", objective: "O2", notYet: "Hakuna kichwa kilicho wazi au sehemu zinakosekana.", meets: "Tovuti ya Google Sites yenye kichwa kilicho wazi na sehemu zilizopangwa katika mandhari inayosomeka.", exceeds: "Kitendo kimoja kwa wageni ni rahisi kukipata." },
      { name: "Kuhusu Sisi", objective: "O3", notYet: "Maandishi ya AI yalibandikwa kama yalivyo, au yana ukweli usio sahihi au uliobuniwa.", meets: "Kuhusu Sisi fupi yenye ukweli halisi, iliyohaririwa kwa maneno ya mwanafunzi mwenyewe.", exceeds: "Anaweza kuonyesha alichobadilisha na kwa nini." },
      { name: "Kisanduku cha Saa na Mawasiliano", objective: "O5", notYet: "Hakuna kisanduku cha HTML, au hakikujaribiwa.", meets: "Kisanduku rahisi cha HTML kilichojaribiwa kwenye kihariri, tatizo moja limerekebishwa, na kimepachikwa.", exceeds: "Anaweza kueleza kila tagi katika kisanduku inafanya nini." },
      { name: "Imechapishwa na tayari kwa simu", objective: "O6", notYet: "Haijachapishwa, au haijakaguliwa kwenye simu.", meets: "Imechapishwa na kukaguliwa kwenye simu: maandishi yanasomeka, viungo vinafanya kazi, picha zinafunguka.", exceeds: "Rafiki pia aliijaribu na matatizo yoyote yalirekebishwa." },
      { name: "Faragha", objective: "O6", notYet: "Anwani ya nyumbani, namba ya binafsi au picha ya mtoto isiyo na ruhusa iko kwenye tovuti.", meets: "Barua pepe ya kikundi au mahali pa umma tu, na hakuna taarifa binafsi.", exceeds: "Picha zote zinamilikiwa au zinatumika kwa ruhusa ya maandishi." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Vikundi vya jamii au biashara ndogo zenye tovuti hewani iliyojengwa na mwanafunzi ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaochukua kozi nyingine ya wavuti au ya kuandika code ndani ya siku 60",
      "Vikundi vinavyoripoti wanachama wapya, wateja au simu kupitia tovuti yao"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye intaneti (ya maktaba au ya nyumbani) kujenga tovuti, na simu ya kuikagua",
      "Akaunti ya Google ya bure kwa Google Sites",
      "Msaidizi wa AI wa bure na kihariri cha HTML cha mtandaoni cha bure kama W3Schools Tryit Editor",
      "Ukweli halisi kuhusu kikundi: jina, kinachotoa, saa za kazi na barua pepe ya kikundi",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Saidia kwanza kuingia kwenye akaunti ya Google; ndicho kinachochukua muda mwingi kwa wanaoanza.",
      "Wanafunzi wajenge kwa ajili ya kikundi halisi wanachokihusu inapowezekana, kwa idhini ya kikundi.",
      "Kagua kila tovuti iliyochapishwa kwa anwani za nyumbani, namba za binafsi na picha za watoto zisizo na ruhusa.",
      "Wakumbushe wanafunzi kujaribu code yote ya AI na kuomba HTML rahisi tu.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};

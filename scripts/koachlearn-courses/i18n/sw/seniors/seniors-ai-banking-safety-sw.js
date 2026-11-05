"use strict";

// Koach Learn course (Swahili translation of seniors/seniors-ai-banking-safety.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "seniors-ai-banking-safety-sw",
  lang: "sw",
  translationOf: "seniors-ai-banking-safety",
  category: "Seniors and Technology",
  name: "AI na Usalama wa Benki Mtandaoni",
  skills: "Kupata app halisi ya benki yako, Kuingia kwa usalama kwa uthibitisho wa hatua mbili, Kuweka arifa za akaunti, Kutambua ulaghai wa benki unaotumia AI, Kutumia apps za malipo kwa usalama, Kujua la kufanya jambo likienda vibaya",
  outcome: "kuingia kwa usalama kwenye app rasmi au tovuti rasmi ya benki yako, kuwasha arifa za akaunti yako, kutambua simu au ujumbe wa \"benki\" wa uongo, na kujua hasa nani wa kupigia simu jambo likienda vibaya.",
  about: [
    "Benki mtandaoni inakuwezesha kuangalia salio lako, kuona malipo na kulipa bili bila kwenda tawini. Kozi hii ni kwa wazee wanaotaka kuitumia kwa kujiamini, na kujikinga na walaghai ambao sasa wanatumia AI kusikika na kuonekana kama benki yako.",
    "Utapata app halisi ya benki yako, utaingia kwa usalama, utaweka arifa ili uone jambo lolote lisilo la kawaida, utajifunza hila za wapigaji simu wa \"benki\" wa uongo, utatumia apps za malipo kwa uangalifu, na utaandaa mpango wa la kufanya jambo likienda vibaya.",
    "Kozi hii haitoi ushauri wa kifedha, na hutaombwa kamwe kuandika taarifa halisi za akaunti yako hapa wala kwa msaidizi wa AI. Mwanafamilia unayemwamini anaweza kukaa nawe wakati wa kuweka mipangilio. Kila somo linachukua kama dakika tano. Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Ingia kwenye app rasmi au tovuti rasmi ya benki yako, washa angalau arifa mbili (kama za manunuzi makubwa na salio la chini), andika namba ya simu ya benki yako kutoka nyuma ya kadi yako kwenye kadi yako ya usalama, na tumia dalili nne kupima ujumbe mfupi wa mfano wa \"benki\".",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wazee nchini Marekani wenye akaunti ya benki au chama cha akiba na mikopo (credit union) wanaoanza, au tayari wanatumia, benki mtandaoni na apps za malipo, mara nyingi kwa kuhimizwa na familia au benki yao.",
    startingPoint: "Wanatumia kadi ya debit au ya mkopo na simu janja. Baadhi tayari wanatumia benki mtandaoni; wengine wanaenda tawini tu au wanapiga simu. Wengi hawana uhakika jinsi ya kutofautisha app au simu halisi ya benki na ya uongo.",
    gap: "Benki mtandaoni inaokoa safari na inasaidia kugundua matatizo mapema, lakini wazee wanalengwa sana na simu za benki za uongo, ujumbe mfupi na ulaghai wa apps za malipo, na pesa zinazotumwa kwa app ni ngumu kurudishwa. Kuingia kwa usalama, arifa, kutambua uongo na kujua nani wa kupigia simu kunalinda akiba zao.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi, sentensi fupi na hatua kubwa na rahisi",
      "Vifaa: simu janja au kompyuta; app na menyu za kila benki zinaonekana tofauti",
      "Muda: kama dakika 5 kwa kila somo kwa mwendo wa taratibu",
      "Faragha: hakuna nywila halisi, namba za akaunti wala misimbo vinavyoshirikiwa darasani",
      "Taarifa za ofisi za serikali ya Marekani na namba za msaada zinaweza kubadilika; wanafunzi wanakagua tovuti rasmi"
    ],
    prerequisites: "Kozi \"Usalama wa AI na Kutambua Ulaghai kwa Wazee\" inasaidia kwanza, lakini si lazima."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia simu au kompyuta yako", action: "kufungua app rasmi au tovuti rasmi ya benki yako kutoka duka la apps au anwani iliyo kwenye taarifa ya akaunti yako", standard: "kamwe si kupitia kiungo kwenye ujumbe mfupi au barua pepe" },
    { id: "O2", condition: "Unapoingia kwenye benki mtandaoni", action: "kutumia nywila ndefu ya kipekee na uthibitisho wa hatua mbili, na kutoka (sign out) kwenye kompyuta za pamoja", standard: "bila kumpa mtu yeyote nywila wala misimbo yako" },
    { id: "O3", condition: "Kwenye app au tovuti ya benki yako", action: "kuwasha arifa za manunuzi makubwa, salio la chini na mabadiliko ya taarifa za kuingia", standard: "ukiwa na angalau arifa mbili zimewashwa" },
    { id: "O4", condition: "Ukipokea simu au ujumbe unaosema ni benki yako", action: "kutambua dalili za mawasiliano ya benki ya uongo na kupiga namba iliyo nyuma ya kadi yako", standard: "bila kutoa msimbo, nywila wala pesa" },
    { id: "O5", condition: "Kabla ya kutuma pesa kwa app ya malipo", action: "kukagua jina na namba ya mtu na kutuma tu kwa watu unaowajua ana kwa ana", standard: "bila kumlipa kamwe mtu aliyekutafuta kwanza" },
    { id: "O6", condition: "Pesa au taarifa zikiibiwa", action: "kupiga simu benki yako, kubadilisha nywila yako na kuripoti kwa mahali sahihi", standard: "ukianza mara moja kwa namba iliyo kwenye kadi yako" }
  ],
  chapters: [
    {
      name: "Sura 1: Kutumia benki mtandaoni kwa usalama",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kupata app halisi au tovuti halisi ya benki yako",
          minutes: 5,
          goal: "Kupata na kufungua app rasmi au tovuti rasmi ya benki yako bila kudanganywa na ya uongo.",
          text: [
            "Walaghai wanatengeneza apps na tovuti za benki za uongo zinazoonekana halisi. AI inafanya nakala hizo zionekane bora zaidi. Kwa hiyo anza na chanzo unachokiamini.",
            "Kwa app: fungua duka rasmi la apps kwenye simu yako, tafuta jina kamili la benki yako, na hakikisha app imetolewa na benki yako. Ukiwa na shaka, tovuti rasmi ya benki yako au mfanyakazi wa tawi anaweza kukuambia jina kamili la app. Kwa tovuti: andika anwani ya benki yako wewe mwenyewe, au tumia anwani iliyochapishwa kwenye taarifa ya akaunti yako. Usiende kwa benki yako kupitia kiungo kwenye ujumbe mfupi au barua pepe.",
            "Benki yako pia inaweza kukusaidia kuanza kutumia benki mtandaoni tawini au kwa simu, kwa kutumia namba iliyo nyuma ya kadi yako."
          ],
          steps: ["Fungua duka rasmi la apps.", "Tafuta jina kamili la benki yako.", "Hakikisha app imetolewa na benki yako.", "Kwenye kompyuta, andika mwenyewe anwani iliyo kwenye taarifa ya akaunti.", "Usitumie kamwe kiungo kwenye ujumbe mfupi au barua pepe kufika kwa benki yako."],
          words: [["Benki mtandaoni", "kutumia app au tovuti ya benki yako kuona na kusimamia akaunti zako."], ["App ya uongo", "app iliyotengenezwa ionekane kama halisi ili kuiba taarifa."]],
          slides: [
            { title: "Za uongo zinaonekana halisi", bullets: ["Kuna apps na tovuti za benki za uongo", "AI inazifanya zionekane bora zaidi"] },
            { title: "Pata app halisi", bullets: ["Duka rasmi la apps tu", "Tafuta jina kamili la benki", "Hakikisha mtoaji ni benki yako"] },
            { title: "Pata tovuti halisi", bullets: ["Andika anwani wewe mwenyewe", "Tumia iliyo kwenye taarifa ya akaunti", "Kamwe si kutoka kiungo cha ujumbe au barua pepe"] }
          ],
          tryIt: "Angalia taarifa ya akaunti ya benki au kadi yako ya benki na upate anwani ya tovuti ya benki yako na namba ya simu. Ziandike kwenye kadi unayoiweka nyumbani.",
          youCanNow: "kupata app halisi au tovuti halisi ya benki yako kutoka chanzo unachokiamini.",
          quickCheck: [
            { objective: "O1", q: "Anwani halisi ya tovuti ya benki yako imechapishwa wapi?", options: ["Kwenye ujumbe kutoka namba usiyoijua", "Kwenye tangazo linalojitokeza (pop-up)", "Kwenye taarifa ya akaunti yako ya benki", "Kwenye barua pepe inayokuomba usasishe taarifa"], answer: 2, why: "Andika mwenyewe anwani iliyo kwenye taarifa ya akaunti badala ya kutumia kiungo." },
            { objective: "O1", q: "Unaona apps mbili zenye jina la benki yako kwenye duka la apps. Unakagua nini?", options: ["Ipi imetolewa na benki yako", "Ipi ina nembo inayong'aa zaidi", "Ipi ni mpya zaidi", "Ipi ni ya bure"], answer: 0, why: "Hakikisha app imetolewa na benki yako; uliza benki yako ukiwa na shaka." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuingia kwa usalama",
          minutes: 6,
          goal: "Kuingia kwa nywila imara na uthibitisho wa hatua mbili, na kutoka kwa usalama.",
          text: [
            "Nywila yako iwe ndefu na ngumu kukisia: msemo wa maneno kadhaa yasiyohusiana unafaa vizuri. Itumie kwa benki yako tu. Iweke mahali salama nyumbani au kwenye kidhibiti cha nywila (password manager), kamwe si kwenye kumbukumbu ya kawaida kwenye simu yako, na usimpe mtu kamwe.",
            "Uthibitisho wa hatua mbili (pia huitwa two-factor) unaongeza ukaguzi wa pili, kwa kawaida msimbo unaotumwa kwa ujumbe kwenye simu yako au ombi ndani ya app. Hata mtu akijua nywila yako, hawezi kuingia bila msimbo huo. Uwashe kwenye mipangilio ya usalama ya app, au omba benki yako ikusaidie.",
            "Benki yako haitakupigia simu wala kukutumia ujumbe kamwe kukuomba msimbo huo. Yeyote anayeuomba ni mlaghai. Apps nyingi pia zinakuwezesha kuingia kwa alama ya kidole au uso, jambo ambalo ni salama na rahisi. Kwenye kompyuta ya pamoja au ya maktaba, usihifadhi nywila yako, na toka ukimaliza."
          ],
          steps: ["Chagua nywila ndefu ya kipekee, kama maneno kadhaa yasiyohusiana.", "Iweke mahali salama, kamwe si kwenye kumbukumbu ya kawaida.", "Washa uthibitisho wa hatua mbili.", "Usimpe mtu yeyote msimbo kamwe.", "Toka kwenye kompyuta za pamoja."],
          words: [["Uthibitisho wa hatua mbili", "ukaguzi wa pili, kama msimbo unaotumwa kwa ujumbe, unaohitajika ili kuingia."], ["Kidhibiti cha nywila (password manager)", "app inayohifadhi nywila zako kwa usalama."]],
          slides: [
            { title: "Nywila imara", bullets: ["Ndefu: maneno kadhaa yasiyohusiana", "Kwa benki yako tu", "Iwekwe salama, usimpe mtu kamwe"] },
            { title: "Uthibitisho wa hatua mbili", bullets: ["Msimbo au ombi la app kama ukaguzi wa pili", "Unazuia wezi wanaojua nywila yako", "Uwashe kwenye mipangilio ya usalama"] },
            { title: "Kanuni ya dhahabu", bullets: ["Benki yako haiombi msimbo huo kamwe", "Yeyote anayeuomba ni mlaghai"] },
            { title: "Kompyuta za pamoja", bullets: ["Usihifadhi nywila yako", "Toka ukimaliza"] }
          ],
          tryIt: "Pamoja na mwanafamilia au mfanyakazi wa benki ukipenda, fungua app au tovuti ya benki yako na uhakikishe uthibitisho wa hatua mbili umewashwa. Kama haujawashwa, uwashe. Usimpe mtu yeyote msimbo wowote, hata sisi.",
          youCanNow: "kuingia kwa usalama kwa nywila imara na uthibitisho wa hatua mbili.",
          quickCheck: [
            { objective: "O2", q: "Uthibitisho wa hatua mbili ni nini?", options: ["Kuandika nywila yako mara mbili", "Ukaguzi wa pili, kama msimbo wa ujumbe, baada ya nywila yako", "Kuingia kwenye simu mbili", "Ada ya benki"], answer: 1, why: "Unaongeza ukaguzi wa pili, hivyo nywila peke yake haitoshi kuingia." },
            { objective: "O2", q: "Unahitaji nywila mpya ya benki. Ipi ni bora zaidi?", options: ["Tarehe yako ya kuzaliwa", "\"password123\"", "Nywila ile ile unayotumia kwa barua pepe", "Msemo wa maneno kadhaa yasiyohusiana, unaotumika kwa benki yako tu"], answer: 3, why: "Msemo mrefu wa kipekee wa maneno yasiyohusiana ni imara na mgumu kukisia." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuweka arifa ili kugundua matatizo mapema",
          minutes: 5,
          goal: "Kuwasha arifa za akaunti ili uone haraka shughuli isiyo ya kawaida.",
          text: [
            "Arifa ni jumbe ambazo benki yako inakutumia kwa ujumbe mfupi, barua pepe au taarifa ya app jambo linapotokea kwenye akaunti yako: manunuzi makubwa, salio la chini, mpokeaji mpya wa malipo au nywila kubadilishwa.",
            "Kwenye app au tovuti ya benki, tafuta Alerts au Notifications (Arifa), mara nyingi chini ya wasifu wako au mipangilio. Washa arifa za manunuzi yanayozidi kiasi unachochagua, salio la chini, na badiliko lolote la taarifa zako za kuingia.",
            "Arifa ikifika kuhusu jambo ambalo hukufanya, usiijibu wala usipige namba iliyo ndani yake. Fungua app ya benki yako wewe mwenyewe, au piga namba iliyo nyuma ya kadi yako."
          ],
          steps: ["Fungua app au tovuti ya benki yako.", "Tafuta Alerts au Notifications (Arifa).", "Washa arifa za manunuzi makubwa, salio la chini na mabadiliko ya kuingia.", "Arifa ikionyesha jambo ambalo hukufanya, piga namba iliyo kwenye kadi yako."],
          words: [["Arifa", "ujumbe kutoka benki yako kuhusu shughuli kwenye akaunti yako."], ["Mpokeaji wa malipo", "mtu au kampuni unayomtumia pesa."]],
          slides: [
            { title: "Arifa zinagundua matatizo mapema", bullets: ["Manunuzi makubwa", "Salio la chini", "Mpokeaji mpya au nywila kubadilishwa"] },
            { title: "Ziwashe", bullets: ["Tafuta Alerts au Notifications", "Chagua viwango vyako", "Ujumbe mfupi, barua pepe au app"] },
            { title: "Jambo ambalo hukufanya?", bullets: ["Usijibu wala usipige namba iliyo ndani yake", "Fungua app wewe mwenyewe", "Au piga namba iliyo kwenye kadi yako"] }
          ],
          tryIt: "Washa angalau arifa mbili kwenye app au tovuti ya benki yako: moja ya manunuzi yanayozidi kiasi unachochagua, na moja ya salio la chini.",
          youCanNow: "kuweka arifa za benki na kujibu kwa usalama moja inapofika.",
          quickCheck: [
            { objective: "O3", q: "Arifa ya benki ni nini?", options: ["Ujumbe kutoka benki yako jambo linapotokea kwenye akaunti yako", "Tangazo la mauzo", "Simu kutoka idara ya udanganyifu", "Taarifa ya akaunti ya karatasi"], answer: 0, why: "Arifa zinakuambia kuhusu shughuli kama manunuzi makubwa au salio la chini." },
            { objective: "O3", q: "Arifa inasema umebadilisha nywila yako, lakini hukubadilisha. Unafanya nini?", options: ["Kujibu arifa", "Kupiga namba iliyo kwenye arifa", "Kuipuuza", "Kufungua app ya benki yako wewe mwenyewe au kupiga namba iliyo kwenye kadi yako"], answer: 3, why: "Usijibu wala usipige namba iliyo kwenye arifa; wasiliana na benki yako wewe mwenyewe." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kutumia benki mtandaoni kwa usalama",
        questions: [
          { objective: "O1", q: "Ujumbe mfupi una kiungo cha \"kusasisha taarifa zako za benki\". Unapaswa kufika kwa benki yako vipi?", options: ["Kujibu kwa nywila yako", "Kubonyeza kiungo", "Kuandika anwani wewe mwenyewe au kutumia app rasmi", "Kupiga namba iliyo kwenye ujumbe"], answer: 2, why: "Viungo kwenye jumbe vinaweza kupeleka kwenye tovuti za uongo." },
          { objective: "O1", q: "Unajuaje kwamba app ya benki ni halisi?", options: ["Iko kwenye duka rasmi na imetolewa na benki yako", "Ilitoka kwenye pop-up", "Mtu usiyemjua aliituma", "Ina picha nzuri"], answer: 0, why: "Kagua duka na mtoaji." },
          { objective: "O2", q: "Uthibitisho wa hatua mbili unaongeza nini?", options: ["Nywila ya pili ya kumpa mtu", "Akaunti ya pili ya benki", "Pesa za bure", "Ukaguzi wa pili, kama msimbo wa ujumbe"], answer: 3, why: "Unazuia wezi wanaojua nywila yako tu." },
          { objective: "O2", q: "Mtu anapiga simu akisema anatoka benki yako na anaomba msimbo uliotumiwa sasa hivi kwa ujumbe. Wewe:", options: ["Unamsomea", "Unakata simu; benki yako haiombi msimbo huo kamwe", "Unamtumia kwa ujumbe", "Unampa nusu yake"], answer: 1, why: "Yeyote anayeomba msimbo ni mlaghai." },
          { objective: "O3", q: "Arifa inaonyesha manunuzi ambayo hukufanya. Wewe:", options: ["Unajibu arifa", "Unapiga namba iliyo nyuma ya kadi yako", "Unapiga namba iliyo kwenye arifa", "Unaipuuza"], answer: 1, why: "Tumia namba ambayo tayari unaiamini." }
        ]
      }
    },
    {
      name: "Sura 2: Kutambua ulaghai na kubaki salama",
      lessons: [
        {
          objectives: ["O4"],
          title: "Simu na jumbe za benki za uongo zinazotumia AI",
          minutes: 5,
          goal: "Kutambua simu au ujumbe wa uongo wa \"idara ya udanganyifu ya benki\".",
          text: [
            "Ulaghai wa kawaida: simu au ujumbe unasema ni idara ya udanganyifu ya benki yako na kuna tatizo kwenye akaunti yako. Kitambulisho cha mpigaji (caller ID) kinaweza hata kuonyesha jina la benki yako, na AI inaweza kufanya sauti na jumbe zisikike za kitaalamu sana.",
            "Kisha wanakuomba ufanye jambo: uwasomee msimbo, \"uthibitishe\" nywila yako, uhamishe pesa zako kwenda \"akaunti salama\", utoe pesa taslimu kwa ajili ya mjumbe (courier), au ununue kadi za zawadi. Hizi ni dalili za ulaghai kwa mujibu wa FTC (tume ya biashara ya serikali ya Marekani): kujifanya, tatizo, shinikizo, na njia isiyo ya kawaida ya kulipa. FTC inasema mashirika halisi hayatakuambia kamwe uhamishe pesa ili kuzilinda.",
            "La kufanya: kata simu. Kisha piga wewe mwenyewe namba iliyo nyuma ya kadi yako. Kama ilikuwa kweli, benki itajua kuhusu jambo hilo."
          ],
          steps: ["Angalia: \"benki\" inakutafuta kuhusu tatizo.", "Angalia: wanaomba msimbo, nywila, kuhamisha pesa, pesa taslimu au kadi za zawadi.", "Kata simu au acha kujibu.", "Piga wewe mwenyewe namba iliyo nyuma ya kadi yako."],
          words: [["Spoofing (kughushi namba)", "kufanya kitambulisho cha mpigaji cha uongo kionyeshe jina au namba ya kampuni halisi."], ["Ulaghai wa akaunti salama", "hila inayokuambia uhamishe pesa zako ili \"kuzilinda\", nazo zinaenda moja kwa moja kwa mlaghai."]],
          slides: [
            { title: "Simu ya uongo ya idara ya udanganyifu", bullets: ["\"Hii ni idara ya udanganyifu ya benki yako\"", "Kitambulisho cha mpigaji kinaweza kughushiwa", "AI inaifanya isikike ya kitaalamu"] },
            { title: "Wanachoomba", bullets: ["Misimbo au nywila", "Kuhamisha pesa kwenda \"akaunti salama\"", "Pesa taslimu kwa mjumbe, au kadi za zawadi"] },
            { title: "Unachofanya", bullets: ["Kata simu", "Piga namba iliyo kwenye kadi yako", "Kama ilikuwa kweli, benki itajua"] }
          ],
          sources: [{ name: "FTC: Jinsi ya kuepuka ulaghai", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Muulize msaidizi wa AI: \"Ni dalili gani zinaonyesha kwamba simu kutoka idara ya udanganyifu ya benki yangu ni ya uongo?\" Linganisha jibu lake na somo hili, na uandike kwenye kadi yako dalili tatu unazoona ni muhimu zaidi.",
          youCanNow: "kutambua simu au ujumbe wa benki wa uongo na kuukagua kwa usalama.",
          quickCheck: [
            { objective: "O4", q: "Kitambulisho cha mpigaji kikionyesha jina la benki yako, inamaanisha nini?", options: ["Simu hakika ni halisi", "Hakuna uhakika wowote; kitambulisho cha mpigaji kinaweza kughushiwa", "Benki yako inafungwa", "Lazima upige tena namba ile ile"], answer: 1, why: "Walaghai wanaweza kufanya kitambulisho cha mpigaji kionyeshe jina la benki yako." },
            { objective: "O4", q: "Mpigaji wa \"idara ya udanganyifu\" anasema uhamishe akiba zako kwenda akaunti salama leo. Unafanya nini?", options: ["Unazihamisha haraka", "Unampa nywila yako ili akague", "Unakata simu na kupiga namba iliyo nyuma ya kadi yako", "Unatoa pesa taslimu kwa mjumbe wake"], answer: 2, why: "Mashirika halisi hayakuambii kamwe uhamishe pesa ili kuzilinda; kata simu na upige benki yako wewe mwenyewe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kutumia apps za malipo kwa uangalifu",
          minutes: 5,
          goal: "Kutuma pesa kwa app ya malipo kwa watu unaowajua na kuwaamini tu.",
          text: [
            "Apps za malipo (kama Zelle, Venmo, PayPal na Cash App) zinakuwezesha kutuma pesa kutoka simu yako. Zinafaa kumrudishia mwanafamilia pesa, lakini pesa kwa kawaida zinahama papo hapo na zinaweza kuwa ngumu sana kurudishwa.",
            "Tuma pesa kwa watu unaowajua ana kwa ana tu. Kagua tena jina, namba ya simu au barua pepe kabla ya kutuma. Usimlipe kamwe mtu usiyemjua, muuzaji wa mtandaoni usiyemjua, au yeyote aliyekutafuta kwanza akidai kuwa benki yako, serikali au kampuni.",
            "Jihadhari na hila za \"malipo ya bahati mbaya\": mtu usiyemjua anakutumia pesa na kukuomba uzirudishe. Usizitume; wasiliana na benki yako au kampuni ya app kupitia app rasmi au tovuti rasmi."
          ],
          steps: ["Walipe watu unaowajua ana kwa ana tu.", "Kagua tena jina na namba kabla ya kutuma.", "Usimlipe kamwe mtu aliyekutafuta kwanza.", "Mtu usiyemjua akikulipa \"kwa bahati mbaya\", wasiliana na benki yako au app, usirudishe pesa."],
          words: [["App ya malipo", "app inayotuma pesa kutoka simu yako kwenda kwa mtu mwingine."], ["Uhamisho wa papo hapo", "pesa zinazohama mara moja na ni ngumu kuzirudisha."]],
          slides: [
            { title: "Zinafaa, lakini ni za haraka", bullets: ["Zelle, Venmo, PayPal, Cash App", "Pesa zinahama papo hapo", "Ni ngumu kuzirudisha"] },
            { title: "Matumizi salama", bullets: ["Watu unaowajua ana kwa ana tu", "Kagua tena jina na namba", "Usimlipe kamwe aliyekutafuta kwanza"] },
            { title: "\"Samahani, nimekutumia kimakosa\"", bullets: ["Usirudishe pesa", "Wasiliana na benki yako au app"] }
          ],
          sources: [{ name: "FTC: Jinsi ya kuepuka ulaghai (dalili za hatari za malipo)", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Andika kwenye kadi yako: \"Ninatumia apps za malipo na watu ninaowajua ana kwa ana tu. Simlipi kamwe mtu anayenitafuta kwanza.\"",
          youCanNow: "kutumia apps za malipo kwa usalama na kuepuka hila za kawaida za apps za malipo.",
          quickCheck: [
            { objective: "O5", q: "Kwa nini uwe mwangalifu na apps za malipo?", options: ["Zinatoza ada kubwa", "Zinafanya kazi benki tu", "Ni za polepole", "Pesa kwa kawaida zinahama papo hapo na ni ngumu kurudishwa"], answer: 3, why: "Pesa za app ya malipo zinahama haraka na ni ngumu sana kuzipata tena." },
            { objective: "O5", q: "Unataka kumrudishia mpwa wako $20 kwa app. Unafanya nini kabla ya kubonyeza Send (Tuma)?", options: ["Kukagua tena jina lake na namba yake ya simu", "Kutuma kwa jina la kwanza linalotokea", "Kutuma zaidi kwa tahadhari", "Kumwomba mtu usiyemjua azitume"], answer: 0, why: "Kukagua tena jina na namba kunazuia pesa kwenda kwa mtu asiye sahihi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Jambo likienda vibaya",
          minutes: 5,
          goal: "Kuorodhesha hatua za kuchukua haraka pesa au taarifa zikiibiwa.",
          text: [
            "Chukua hatua haraka. Piga simu benki yako mara moja kwa namba iliyo nyuma ya kadi yako. Waambie kilichotokea. Waombe wasimamishe au warudishe malipo ikiwezekana, badilisha nywila yako, na fuatilia akaunti yako.",
            "Kisha ripoti. Ripoti ulaghai kwa Federal Trade Commission (FTC) kwenye ReportFraud.ftc.gov. Mtu akitumia utambulisho wako, nenda IdentityTheft.gov upate mpango wa bure wa kujirekebisha. Ukiwa na umri wa miaka 60 au zaidi, National Elder Fraud Hotline (namba ya msaada ya ulaghai dhidi ya wazee) ni ya bure: 833-FRAUD-11 (833-372-8311).",
            "Jihadhari na ulaghai wa pili: watu wanaopiga simu wakijitolea \"kurudisha\" pesa zako kwa ada kwa kawaida nao ni walaghai. Na hakuna aibu kulengwa. Kumwambia mwanafamilia unayemwamini kunakulinda wewe na wengine."
          ],
          steps: ["Piga simu benki yako mara moja kwa namba iliyo kwenye kadi yako.", "Badilisha nywila yako.", "Ripoti kwenye ReportFraud.ftc.gov.", "Tumia IdentityTheft.gov kama utambulisho wako ulitumiwa.", "Umri wa miaka 60+: piga 833-372-8311.", "Mpuuze yeyote anayejitolea kurudisha pesa kwa ada."],
          words: [["Wizi wa utambulisho", "mtu anapotumia taarifa zako binafsi kujifanya kuwa wewe."], ["Ulaghai wa kurudisha pesa", "hila ambapo walaghai wanajitolea kurudisha pesa zilizoibiwa kwa ada."]],
          slides: [
            { title: "Chukua hatua haraka", bullets: ["Piga simu benki kwa namba iliyo kwenye kadi yako", "Omba malipo yasimamishwe au yarudishwe", "Badilisha nywila yako"] },
            { title: "Ripoti", bullets: ["ReportFraud.ftc.gov", "IdentityTheft.gov", "Umri wa miaka 60+: 833-FRAUD-11 (833-372-8311)"] },
            { title: "Jihadhari na ulaghai wa pili", bullets: ["Ada ya \"kurudisha\" pesa = ulaghai", "Hakuna aibu: mwambie mtu unayemwamini"] }
          ],
          sources: [{ name: "FTC: Ripoti ulaghai", url: "https://reportfraud.ftc.gov/" }, { name: "FTC: Mambo ya kujua kuhusu wizi wa utambulisho", url: "https://consumer.ftc.gov/articles/what-know-about-identity-theft" }, { name: "DOJ Office for Victims of Crime: National Elder Fraud Hotline", url: "https://ovc.ojp.gov/program/stop-elder-fraud/providing-help-restoring-hope" }],
          tryIt: "Kazi ya mwisho: ingia kwenye app rasmi au tovuti rasmi ya benki yako, washa arifa mbili, andika namba ya benki yako kutoka nyuma ya kadi yako kwenye kadi yako ya usalama, na upime ujumbe huu wa mfano kwa dalili nne: \"ARIFA YA BENKI: Akaunti yako imefungwa. Thibitisha sasa kwenye kiungo au itafungwa kabisa leo.\"",
          youCanNow: "kutumia benki mtandaoni kwa usalama, kutambua mawasiliano ya benki ya uongo, kutumia apps za malipo kwa uangalifu, na kuchukua hatua haraka jambo likienda vibaya.",
          quickCheck: [
            { objective: "O6", q: "IdentityTheft.gov inakupa nini?", options: ["Mkopo", "Mpango wa bure wa kujirekebisha mtu akitumia utambulisho wako", "Akaunti mpya ya benki", "Bima"], answer: 1, why: "IdentityTheft.gov inatoa mpango wa bure wa kujirekebisha." },
            { objective: "O6", q: "Umegundua sasa hivi kwamba ulimtumia mlaghai pesa. Hatua yako ya kwanza ni ipi?", options: ["Kusubiri wiki moja", "Kumpigia mlaghai tena", "Kupiga simu benki yako mara moja kwa namba iliyo kwenye kadi yako", "Kulipa kampuni ikurudishie pesa"], answer: 2, why: "Chukua hatua haraka: piga simu benki yako kwanza, kisha ripoti ulaghai." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kutambua ulaghai na kubaki salama",
        questions: [
          { objective: "O4", q: "Kitambulisho cha mpigaji kinaonyesha jina la benki yako. Je, hilo linathibitisha kwamba simu ni halisi?", options: ["Ikiwa tu wanajua jina lako", "Ndiyo, kila wakati", "Asubuhi tu", "Hapana, kitambulisho cha mpigaji kinaweza kughushiwa"], answer: 3, why: "Spoofing inatengeneza vitambulisho vya mpigaji vya uongo." },
          { objective: "O4", q: "Mpigaji anakuambia uhamishe akiba zako kwenda \"akaunti salama\". Huu ni:", options: ["Ulaghai", "Utaratibu wa kawaida wa benki", "Takwa la sheria", "Ushauri mzuri"], answer: 0, why: "Mashirika halisi hayakuombi kamwe uhamishe pesa ili kuzilinda." },
          { objective: "O5", q: "Unapaswa kumtumia nani pesa kwa app ya malipo?", options: ["Wauzaji wa mtandaoni usiowajua", "Yeyote anayeomba", "Watu unaowajua ana kwa ana tu", "Wapigaji simu kutoka \"serikalini\""], answer: 2, why: "Pesa za app ya malipo ni ngumu kurudishwa." },
          { objective: "O5", q: "Mtu usiyemjua anakutumia pesa \"kwa bahati mbaya\" na kukuomba uzirudishe. Wewe:", options: ["Unampa nywila yako", "Unazirudisha mara moja", "Unatuma mara mbili yake", "Badala yake unawasiliana na benki yako au app"], answer: 3, why: "Hii ni hila ya kawaida; acha benki ishughulikie." },
          { objective: "O6", q: "Mtu anajitolea kurudisha pesa zako zilizoibiwa kwa ada. Huyu huenda ni:", options: ["Benki yako", "Mpango wa serikali", "Ulaghai mwingine", "Msaada wa bure"], answer: 2, why: "Ulaghai wa kurudisha pesa unawalenga watu ambao tayari walilaghaiwa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI na Usalama wa Benki Mtandaoni",
    questions: [
      { objective: "O1", q: "Benki mtandaoni inakuwezesha:", options: ["Kuchapisha pesa", "Kuona na kusimamia akaunti zako kwenye app au tovuti", "Kuacha kulipa bili zote", "Kuepuka nywila"], answer: 1, why: "Ni benki yako, kwenye simu au kompyuta yako." },
      { objective: "O1", q: "Mahali salama pa kupata app ya benki yako ni:", options: ["Duka rasmi la apps, ikiwa imetolewa na benki yako", "Kiungo cha ujumbe mfupi", "Pop-up", "Kiambatisho cha barua pepe"], answer: 0, why: "Maduka rasmi na watoaji rasmi wanaaminika." },
      { objective: "O1", q: "Unaweza kupata wapi anwani halisi ya tovuti ya benki yako?", options: ["Kwenye taarifa ya akaunti au kadi yako", "Kwenye ujumbe kutoka kwa mtu usiyemjua", "Kwenye tangazo la pop-up", "Kwenye maoni ya mitandao ya kijamii"], answer: 0, why: "Taarifa ya akaunti na kadi yako vinatoka benki." },
      { objective: "O2", q: "Nywila imara ni:", options: ["Tarehe yako ya kuzaliwa", "Ndefu, kama maneno kadhaa yasiyohusiana, na inatumika kwa benki yako tu", "\"password\"", "Jina la mnyama wako kipenzi"], answer: 1, why: "Nywila ndefu za kipekee ni ngumu kukisia." },
      { objective: "O2", q: "HUPASWI kuweka nywila ya benki yako wapi?", options: ["Mahali salama nyumbani", "Kwenye kidhibiti cha nywila", "Kwenye kumbukumbu ya kawaida kwenye simu yako", "Kichwani mwako"], answer: 2, why: "Kumbukumbu za kawaida si salama." },
      { objective: "O2", q: "Uthibitisho wa hatua mbili unakulinda kwa sababu:", options: ["Unaondoa nywila", "Unashiriki nywila yako", "Unazima arifa", "Mwizi anahitaji msimbo pamoja na nywila yako"], answer: 3, why: "Ukaguzi wa pili unawazuia wezi." },
      { objective: "O2", q: "Je, benki yako huwahi kupiga simu kuomba msimbo iliyokutumia kwa ujumbe?", options: ["Siku za sikukuu tu", "Ndiyo, kila wiki", "Hapana", "Kwa akaunti kubwa tu"], answer: 2, why: "Yeyote anayeomba msimbo ni mlaghai." },
      { objective: "O2", q: "Kwenye kompyuta ya maktaba baada ya kutumia benki, unapaswa:", options: ["Kutoka na kutohifadhi nywila yako", "Kuiacha ikiwa umeingia", "Kuhifadhi nywila", "Kuandika nywila hapo"], answer: 0, why: "Hii inamzuia mtu anayefuata." },
      { objective: "O3", q: "Arifa za benki zinakuambia kuhusu:", options: ["Apps mpya", "Hali ya hewa", "Matokeo ya michezo", "Shughuli kwenye akaunti yako, kama manunuzi makubwa"], answer: 3, why: "Arifa zinaonyesha shughuli za akaunti." },
      { objective: "O3", q: "Arifa yenye manufaa ya kuwasha ni:", options: ["Vichekesho vya kila siku", "Salio la chini", "Matangazo ya mauzo", "Hakuna"], answer: 1, why: "Arifa za salio la chini zinazuia matatizo." },
      { objective: "O3", q: "Arifa inaonyesha malipo ambayo hukufanya. Unapiga:", options: ["Namba iliyo kwenye arifa", "Namba iliyo nyuma ya kadi yako", "Rafiki wa rafiki", "Hakuna mtu"], answer: 1, why: "Tumia namba ambayo tayari unaiamini." },
      { objective: "O4", q: "\"Spoofing\" inamaanisha:", options: ["Arifa ya benki", "Aina ya akaunti ya akiba", "Kidhibiti cha nywila", "Kughushi kitambulisho cha mpigaji"], answer: 3, why: "Simu zilizoghushiwa zinaonekana kama zinatoka benki yako." },
      { objective: "O4", q: "Mpigaji wa \"idara ya udanganyifu\" anakuomba utoe pesa taslimu kwa ajili ya mjumbe. Huu ni:", options: ["Ulaghai", "Utaratibu wa kawaida wa benki", "Kanuni ya kodi", "Kipengele cha usalama"], answer: 0, why: "Benki hazitumi wajumbe kuchukua pesa zako taslimu." },
      { objective: "O4", q: "Unapaswa kufanya nini na simu ya benki inayotia shaka?", options: ["Kuwapa msimbo", "Kubaki kwenye simu", "Kukata simu na kupiga namba iliyo kwenye kadi yako", "Kuhamisha pesa zako"], answer: 2, why: "Kupiga tena kwa namba unayoiamini kunafichua ukweli." },
      { objective: "O5", q: "Pesa za app ya malipo:", options: ["Zinachukua mwezi", "Zinaweza kurudishwa kila wakati", "Ni bure kuzirudisha", "Kwa kawaida zinahama papo hapo na ni ngumu kurudishwa"], answer: 3, why: "Ndiyo sababu unawalipa watu unaowajua tu." },
      { objective: "O5", q: "Kabla ya kutuma pesa kwa app, unapaswa:", options: ["Kuacha kukagua", "Kutuma haraka", "Kukagua tena jina na namba", "Kumwomba mtu usiyemjua athibitishe"], answer: 2, why: "Kosa dogo la kuandika linaweza kutuma pesa kwa mtu asiye sahihi." },
      { objective: "O6", q: "Pesa zikiibiwa, simu ya KWANZA ni kwa:", options: ["Mlaghai", "Benki yako, kwa namba iliyo kwenye kadi yako", "Kampuni ya kurudisha pesa", "Namba ya pop-up"], answer: 1, why: "Benki yako inaweza kusimamisha au kurudisha malipo." },
      { objective: "O6", q: "Unaripoti ulaghai kwa FTC wapi?", options: ["ReportFraud.ftc.gov", "Chapisho kwenye mitandao ya kijamii", "Tovuti ya mlaghai", "Kujibu ujumbe"], answer: 0, why: "Ni tovuti ya FTC ya kuripoti." },
      { objective: "O6", q: "IdentityTheft.gov inakupa:", options: ["Mpango wa bure wa kujirekebisha", "Akaunti mpya ya benki", "Pesa za bure", "Nywila"], answer: 0, why: "Inakuongoza kujirekebisha baada ya wizi wa utambulisho." },
      { objective: "O6", q: "Namba ya National Elder Fraud Hotline ni:", options: ["Namba kutoka ujumbe wa ulaghai", "833-372-8311", "411", "0"], answer: 1, why: "833-FRAUD-11 (833-372-8311) inaendeshwa na DOJ (Wizara ya Sheria ya Marekani)." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [1, 3, 5, 8, 11, 13, 14, 16] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "App rasmi au tovuti rasmi", objective: "O1", notYet: "Aliingia kupitia kiungo kwenye ujumbe au app isiyo rasmi.", meets: "Aliingia kupitia app rasmi kutoka duka la apps au anwani iliyoandikwa kutoka taarifa ya akaunti.", exceeds: "Anaweza kuonyesha jinsi ya kuhakikisha app imetolewa na benki." },
      { name: "Kuingia kwa usalama", objective: "O2", notYet: "Nywila ni fupi, inatumika mahali pengine, au imeandikwa kwenye kumbukumbu ya kawaida ya simu.", meets: "Aliingia kwa nywila imara na uthibitisho wa hatua mbili umewashwa.", exceeds: "Anatumia kuingia kwa alama ya kidole au uso, au kidhibiti cha nywila, na anajua benki haiombi msimbo kamwe." },
      { name: "Arifa zimewashwa", objective: "O3", notYet: "Chini ya arifa mbili zimewashwa.", meets: "Angalau arifa mbili zimewashwa, kama za manunuzi makubwa na salio la chini.", exceeds: "Pia aliwasha arifa za mabadiliko ya kuingia au ya nywila." },
      { name: "Namba ya benki kwenye kadi ya usalama", objective: "O6", notYet: "Hakuna namba, au namba imenakiliwa kutoka ujumbe.", meets: "Namba ya benki kutoka nyuma ya kadi imeandikwa kwenye kadi ya usalama.", exceeds: "Pia ameorodhesha ReportFraud.ftc.gov na, akiwa na miaka 60 au zaidi, Elder Fraud Hotline." },
      { name: "Ujumbe wa mfano umepimwa", objective: "O4", notYet: "Hakugundua kwamba ujumbe wa mfano wa \"benki\" ulikuwa ulaghai.", meets: "Alipima ujumbe wa mfano kwa usahihi na kutaja dalili alizoziona.", exceeds: "Alisema hasa la kufanya baadaye: usijibu, piga namba iliyo kwenye kadi." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wenye angalau arifa mbili za benki na uthibitisho wa hatua mbili umewashwa katika ufuatiliaji wa siku 30",
      "Wanafunzi wanaoripoti kutambua na kupuuza simu au ujumbe wa benki wa uongo",
      "Wanafunzi wanaoanza kozi nyingine ya Seniors and Technology (Wazee na Teknolojia) ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja au kompyuta yenye app au tovuti ya benki ya mwanafunzi mwenyewe",
      "Kadi ya benki ya mwanafunzi (kwa ajili ya namba iliyo nyuma tu) na kadi tupu ya usalama",
      "Ujumbe mfupi wa mfano wa \"benki\" uliochapishwa kwa ajili ya kazi ya mwisho",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi vya taratibu: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Usiangalie, usiombe wala usiandike kamwe nywila, namba ya akaunti au misimbo ya mwanafunzi; wanafunzi wanaingia kwa faragha.",
      "App ya kila benki ni tofauti; wahimize wanafunzi kuomba benki yao au tawi liwasaidie kuweka arifa.",
      "Tumia jumbe za mfano zilizobuniwa kwa mazoezi, na igizeni simu ya uongo ya idara ya udanganyifu.",
      "Taarifa za namba za msaada zinaweza kubadilika; kagua ReportFraud.ftc.gov na tovuti ya Elder Fraud Hotline kabla ya kipindi.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};

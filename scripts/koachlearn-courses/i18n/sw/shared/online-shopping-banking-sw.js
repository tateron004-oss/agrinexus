"use strict";

// Koach Learn course (Swahili translation of shared/online-shopping-banking.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "online-shopping-banking-sw",
  lang: "sw",
  translationOf: "online-shopping-banking",
  category: "Seniors and Technology",
  name: "Kununua na Kutumia Benki Mtandaoni kwa Usalama",
  skills: "Kukagua kama duka ni halisi, Kulipa kwa njia salama zaidi, Kufuatilia na kurudisha oda, Kutumia app ya benki kwa usalama, Kutambua na kuripoti ulaghai wa pesa",
  outcome: "kununua kitu mtandaoni kutoka duka ulilokagua, kulipa kwa njia salama zaidi, kuhifadhi kumbukumbu, na kutumia app au tovuti rasmi ya benki yako kuangalia salio lako na kutambua malipo ambayo hukuyafanya.",
  about: [
    "Watu wengi sasa hununua chakula, dawa na vitu vya nyumbani mtandaoni na hulipa bili kwa simu. Ukifanya hivyo kwa usalama, unaokoa safari na muda. Ukifanya bila uangalifu, unaweza kupoteza pesa.",
    "Kozi hii inakuonyesha jinsi ya kukagua duka kabla ya kununua, kulipa kwa njia inayokulinda zaidi, kufuatilia na kurudisha oda, kutumia app au tovuti ya benki yako kwa usalama, na kutambua ulaghai wa pesa.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Kuna jaribio fupi la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Kozi hii inafundisha tabia salama; si ushauri wa kifedha. Kwa maswali kuhusu akaunti yako mwenyewe, piga namba iliyo nyuma ya kadi yako ya benki."
  ],
  finalTask: "Chagua kitu kimoja unachohitaji. Kagua duka kwa ukaguzi mitatu (anwani halisi ya tovuti, maoni na malalamiko, sera ya kurudisha bidhaa), kiweke kwenye kikapu, na usimame kwenye ukurasa wa malipo, ukiandika njia ya malipo ambayo ungetumia na kwa nini. Kisha fungua app au tovuti rasmi ya benki yako, angalia salio lako na miamala ya karibuni, na uonyeshe ungefanya nini ukiona malipo ambayo hukuyafanya.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaotaka kununua na kutumia benki mtandaoni kwa usalama: wazee, walezi wanaosimamia pesa za ndugu, watu wanaorudi katika jamii wanaofungua akaunti mpya, na yeyote ambaye ameepuka kununua au kutumia benki mtandaoni kwa kuogopa ulaghai.",
    startingPoint: "Wanaweza kutumia simu au kompyuta kufungua tovuti na apps, na huenda wana akaunti ya benki na kadi ya debit au kadi ya mkopo. Wengi hawana uhakika jinsi ya kutofautisha duka bandia na halisi, njia zipi za malipo zinawalinda, jinsi ya kufuatilia na kurudisha oda, au wafanye nini kuhusu malipo ambayo hawakuyafanya.",
    gap: "Kununua, kulipa bili na kutumia benki kumehamia mtandaoni, na walaghai pia wamehamia huko, wakiwa na maduka bandia, ujumbe bandia wa usafirishaji na simu bandia za benki. Kujua ukaguzi michache na njia salama zaidi ya kulipa kunawasaidia watu kuokoa muda na pesa na kuepuka hasara ambazo ni ngumu au haziwezekani kurudishwa.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; maneno kama dispute (kupinga malipo), salio na uthibitishaji wa hatua mbili yanaelezwa",
      "Vifaa: simu au kompyuta yenye intaneti; app au tovuti rasmi ya benki",
      "Muda: kama dakika 5 kwa somo, kama dakika 60 kwa jumla",
      "Hakuna haja ya kununua kitu halisi: kazi ya mwisho inasimama kwenye ukurasa wa malipo",
      "Faragha: wanafunzi kamwe hawaandiki namba za kadi, nywila au misimbo mbele ya wengine, kwenye Wi-Fi ya umma bila data yao wenyewe, wala ndani ya barua pepe, ujumbe mfupi au chat"
    ],
    prerequisites: "Hakuna. Kozi za Misingi ya Intaneti au Kutumia Simu Janja na Tableti zinawasaidia wanafunzi wapya kwa tovuti na apps."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa duka la mtandaoni au ofa", action: "kukagua duka kwa ukaguzi mitatu kabla ya kununua: anwani halisi ya tovuti, maoni na malalamiko, na sera ya kurudisha bidhaa", standard: "ukiwa umefanya ukaguzi wote mitatu na kuamua wazi kununua au kutonunua" },
    { id: "O2", condition: "Ukiwa kwenye ukurasa wa malipo wa duka", action: "kuchagua njia ya malipo inayokulinda na kueleza kwa nini", standard: "bila kamwe kuchagua kadi za zawadi (gift cards), kutuma pesa kwa wire transfer, apps za malipo au crypto kwa muuzaji wa mtandaoni" },
    { id: "O3", condition: "Baada ya kuweka oda", action: "kuhifadhi kumbukumbu za oda, kufuatilia kifurushi kutoka tovuti au app ya duka lenyewe na kuanza kurudisha bidhaa", standard: "ukiwa umehifadhi uthibitisho wa oda na bila kufuatilia kupitia viungo vya ujumbe usioutarajia" },
    { id: "O4", condition: "Ukitumia app au tovuti rasmi ya benki yako", action: "kuingia (sign in) kwa usalama na kuangalia salio lako na miamala ya karibuni", standard: "ukifika kwenye benki bila kiungo kutoka barua pepe au ujumbe mfupi, na ukitoka (sign out) mwishoni" },
    { id: "O5", condition: "Ukipewa orodha ya miamala yako ya karibuni", action: "kutambua malipo ambayo hukuyafanya na kueleza hatua za kuyaripoti na kufunga kadi", standard: "ukipiga namba iliyo kwenye kadi au app rasmi na ukichukua hatua haraka" },
    { id: "O6", condition: "Ukipokea simu, ujumbe mfupi au barua pepe kuhusu pesa zako", action: "kutambua dalili za ulaghai wa pesa na kuuzuia", standard: "bila kamwe kutoa nywila au msimbo na ukipiga tena kila wakati kwa namba iliyo kwenye kadi yako" }
  ],
  chapters: [
    {
      name: "Sura 1: Kununua mtandaoni kwa usalama",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kukagua kama duka ni halisi",
          minutes: 5,
          goal: "Kagua tovuti kabla ya kununua kutoka kwake.",
          text: [
            "Maduka bandia huiga sura ya maduka halisi na hutangaza bei nzuri mno kuwa za kweli. Kabla ya kununua, chukua dakika moja kukagua.",
            "Andika anwani ya duka wewe mwenyewe, au tumia app yake rasmi, badala ya kubofya tangazo au kiungo kwenye ujumbe mfupi. Angalia mstari wa anwani: je, jina limeandikwa sawasawa? Tafuta https na alama ya kufuli, lakini jua kwamba Federal Trade Commission (FTC, tume ya serikali ya Marekani inayolinda wanunuzi) inaonya kwamba walaghai wanaweza kutumia hizi pia.",
            "FTC inashauri kutafuta jina la duka au bidhaa pamoja na neno \"complaint\" (malalamiko) au \"scam\" (ulaghai) ili kuona wanunuzi wengine wanasema nini, kusoma maoni kwa uangalifu kwa sababu baadhi ni bandia, na kukagua sera ya kurudisha bidhaa kabla ya kununua: una siku ngapi, na nani analipa kuirudisha."
          ],
          steps: ["Andika anwani ya duka wewe mwenyewe au tumia app yake rasmi.", "Kagua jinsi anwani ya tovuti ilivyoandikwa.", "Tafuta jina la duka pamoja na \"complaint\" au \"scam\".", "Soma maoni kadhaa, si nyota tu.", "Soma sera ya kurudisha bidhaa: siku ngapi, na nani analipa usafirishaji wa kurudisha."],
          words: [["Anwani ya tovuti", "jina la tovuti, linaloonekana kwenye mstari ulio juu ya kivinjari, kama target.com."], ["https", "dalili kwamba muunganisho na tovuti umelindwa; walaghai wanaweza kuitumia pia."], ["Sera ya kurudisha bidhaa", "kanuni za duka za kurudisha vitu."]],
          slides: [
            { title: "Maduka bandia yanaonekana halisi", bullets: ["Yanaiga nembo za maduka halisi", "Bei nzuri mno kuwa za kweli"] },
            { title: "Fika huko kwa usalama", bullets: ["Andika anwani mwenyewe au tumia app rasmi", "Kagua jinsi jina limeandikwa", "https na kufuli husaidia, lakini walaghai huzitumia pia"] },
            { title: "Ukaguzi mitatu kabla ya kununua", bullets: ["Tafuta jina pamoja na \"complaint\" au \"scam\"", "Soma maoni kadhaa, si nyota tu", "Soma sera ya kurudisha bidhaa"] }
          ],
          sources: [{ name: "FTC: Online shopping", url: "https://consumer.ftc.gov/articles/online-shopping" }],
          tryIt: "Chagua duka ambalo unaweza kununua kutoka kwake. Fanya ukaguzi mitatu: tafuta jina lake pamoja na \"complaint\", soma maoni matatu, na utafute una siku ngapi kurudisha bidhaa.",
          youCanNow: "kukagua anwani ya duka, sifa yake na sera yake ya kurudisha bidhaa kabla ya kununua.",
          quickCheck: [
            { objective: "O1", q: "Unapaswa kukagua nini kwenye mstari wa anwani kabla ya kununua?", options: ["Rangi ya ukurasa", "Vitu vingapi viko kwenye kikapu", "Saa ya siku", "Kwamba jina la duka limeandikwa sawasawa"], answer: 3, why: "Maduka bandia mara nyingi hutumia majina yanayofanana, kwa hiyo kagua jinsi limeandikwa." },
            { objective: "O1", q: "Unaona tangazo kwenye mitandao ya kijamii la viatu kwa bei ya chini sana. Ungefanya nini?", options: ["Kuandika anwani ya duka mwenyewe na kutafuta jina lake pamoja na \"complaint\" au \"scam\"", "Kubofya tangazo na kulipa mara moja", "Kumtumia muuzaji kadi ya zawadi", "Kutuma namba ya kadi yako kwenye ujumbe"], answer: 0, why: "Kwenda kwenye duka wewe mwenyewe na kutafuta malalamiko kunakusaidia kutambua maduka bandia." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kulipa kwa njia salama zaidi",
          minutes: 5,
          goal: "Chagua njia ya malipo inayokulinda kitu kikienda vibaya.",
          text: [
            "Jinsi unavyolipa ni muhimu. FTC inasema kulipa kwa kadi ya mkopo (credit card) kunakupa ulinzi mkubwa: unaweza kupinga (dispute) malipo yasiyo sahihi, kwa kitu ambacho hakikufika au hakikuwa kama kilivyoelezwa. Chukua hatua haraka na umwambie mtoaji wa kadi yako mara tu unapoona tatizo.",
            "FTC inaonya kamwe usimlipe muuzaji wa mtandaoni kwa kadi za zawadi (gift cards), wire transfer, apps za malipo au cryptocurrency (pesa za kidijitali). Hizi ni ngumu kurudishwa, ndiyo sababu walaghai huziomba.",
            "Andika taarifa za kadi yako tu kwenye ukurasa wa malipo wa duka ulilokagua, kamwe si kwenye barua pepe, ujumbe mfupi au chat. Kwenye kompyuta ya pamoja au ya maktaba, usikiruhusu kivinjari kuhifadhi kadi yako."
          ],
          steps: ["Tumia kadi ya mkopo unapoweza, au njia ya malipo inayoaminika ya duka ulilokagua.", "Kamwe usimlipe muuzaji kwa kadi ya zawadi, wire transfer, app ya malipo au cryptocurrency.", "Andika taarifa za kadi tu kwenye ukurasa wa malipo wa duka ulilokagua.", "Usihifadhi kadi yako kwenye kompyuta ya pamoja.", "Angalia taarifa ya akaunti yako na uripoti matatizo haraka."],
          words: [["Kadi ya mkopo (credit card)", "kadi inayokopa pesa ambazo unazilipa baadaye; ina ulinzi mkubwa wa kupinga malipo."], ["Kupinga malipo (dispute)", "kumwambia mtoaji wa kadi yako kwamba malipo si sahihi ili ayachunguze."], ["Wire transfer", "kutuma pesa moja kwa moja kutoka akaunti moja kwenda nyingine; ni ngumu sana kurudishwa."]],
          slides: [
            { title: "Jinsi unavyolipa ni muhimu", bullets: ["Kadi ya mkopo: ulinzi mkubwa wa kupinga malipo", "Mwambie mtoaji wa kadi yako haraka"] },
            { title: "Kamwe usimlipe muuzaji kwa", bullets: ["Kadi za zawadi (gift cards)", "Wire transfer", "Apps za malipo", "Cryptocurrency"] },
            { title: "Taarifa za kadi", bullets: ["Tu kwenye ukurasa wa malipo wa duka ulilokagua", "Kamwe si kwenye barua pepe, ujumbe mfupi au chat", "Usizihifadhi kwenye kompyuta za pamoja"] }
          ],
          sources: [{ name: "FTC: Online shopping", url: "https://consumer.ftc.gov/articles/online-shopping" }],
          tryIt: "Angalia kadi na njia za malipo ulizo nazo. Andika ipi ungetumia kununua mtandaoni na kwa nini, na njia zipi ungekataa muuzaji akiziomba.",
          youCanNow: "kuchagua njia ya malipo inayokulinda na kukataa zile ambazo walaghai huziomba.",
          quickCheck: [
            { objective: "O2", q: "Kupinga malipo (dispute) kunamaanisha nini?", options: ["Kuyalipa mara mbili", "Kumwomba mtoaji wa kadi yako arekebishe malipo yasiyo sahihi", "Kumtumia muuzaji kadi ya zawadi", "Kufuta akaunti yako"], answer: 1, why: "Kwa kadi ya mkopo unaweza kupinga malipo ya kitu kisicho sahihi au ambacho hakikufika." },
            { objective: "O2", q: "Muuzaji wa mtandaoni anasema anakubali wire transfer tu. Ungefanya nini?", options: ["Kutuma wire transfer", "Kulipa nusu kwa wire na nusu kwa kadi ya zawadi", "Kutonunua; FTC inaonya kamwe usiwalipe wauzaji wa mtandaoni kwa njia hii", "Kulipa kwa cryptocurrency badala yake"], answer: 2, why: "Wire transfer ni ngumu kurudishwa, ndiyo sababu walaghai huiomba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kufuatilia, kupokea na kurudisha oda",
          minutes: 4,
          goal: "Hifadhi kumbukumbu za oda yako, fuatilia kifurushi na anza kurudisha bidhaa.",
          text: [
            "Baada ya kununua, duka linakutumia uthibitisho wa oda kwa barua pepe. Uhifadhi. FTC inashauri kuhifadhi maelezo ya oda yako, sera ya kurudisha bidhaa, ahadi ya muuzaji ya usafirishaji, ujumbe wako na muuzaji na taarifa ya malipo yako.",
            "Fuatilia kifurushi kutoka akaunti yako kwenye tovuti au app ya duka, si kutoka kiungo kwenye ujumbe mfupi usioutarajia. Ujumbe bandia wa \"tatizo la usafirishaji\" ni ulaghai wa kawaida.",
            "Kurudisha kitu, ingia kwenye akaunti yako, tafuta oda, na uchague kurudisha (return). Fuata hatua, hifadhi risiti ya mahali ulipokiacha, na uangalie pesa zako zikirudishwa kwenye taarifa ya akaunti yako. Muuzaji akikataa kurekebisha tatizo, unaweza kuliripoti kwa FTC kwenye reportfraud.ftc.gov."
          ],
          steps: ["Hifadhi barua pepe ya uthibitisho wa oda.", "Fuatilia kifurushi kutoka akaunti yako kwenye tovuti au app ya duka.", "Puuza ujumbe usioutarajia wa usafirishaji wenye viungo.", "Kurudisha: ingia, tafuta oda, chagua return, fuata hatua.", "Hifadhi risiti ya mahali ulipokiacha na uangalie kama pesa zimerudishwa."],
          words: [["Uthibitisho wa oda", "barua pepe inayothibitisha ulichonunua na ulicholipa."], ["Kufuatilia (tracking)", "kufuata kifurushi chako kiko wapi njiani kuja kwako."], ["Kurudishiwa pesa (refund)", "pesa unazorudishiwa."]],
          slides: [
            { title: "Hifadhi kumbukumbu", bullets: ["Uthibitisho wa oda", "Sera ya kurudisha na ahadi ya usafirishaji", "Ujumbe na taarifa ya akaunti yako"] },
            { title: "Fuatilia kwa usalama", bullets: ["Tumia akaunti yako kwenye tovuti au app ya duka", "Puuza ujumbe usioutarajia wa usafirishaji wenye viungo"] },
            { title: "Kurudisha bidhaa", bullets: ["Ingia, tafuta oda, chagua return", "Hifadhi risiti ya mahali ulipokiacha", "Angalia pesa zikirudishwa"] }
          ],
          sources: [{ name: "FTC: Online shopping", url: "https://consumer.ftc.gov/articles/online-shopping" }, { name: "FTC: Report fraud", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Tafuta barua pepe ya uthibitisho wa oda kwenye sanduku lako la barua (au ya ununuzi uliopita) na utengeneze folda au lebo ya barua pepe inayoitwa \"Oda\" ya kuihifadhi. Kama una oda inayosubiriwa, ifuatilie kutoka app au tovuti ya duka lenyewe.",
          youCanNow: "kuhifadhi kumbukumbu za oda, kufuatilia kifurushi kwa usalama na kuanza kurudisha bidhaa.",
          quickCheck: [
            { objective: "O3", q: "Uthibitisho wa oda ni nini?", options: ["Ujumbe mfupi unaokuomba ulipe ada", "Tangazo la bidhaa mpya", "Barua pepe ambayo duka hutuma baada ya kununua", "Taarifa ya benki"], answer: 2, why: "Duka hutuma uthibitisho wa oda kwa barua pepe; uhifadhi pamoja na kumbukumbu zako." },
            { objective: "O3", q: "Umeacha kifurushi cha kurudisha kwenye ofisi ya posta. Ungefanya nini baadaye?", options: ["Kutupa risiti", "Kununua kitu hicho tena", "Kufuta app ya duka", "Kuhifadhi risiti ya mahali ulipokiacha na kuangalia pesa zikirudishwa kwenye taarifa ya akaunti yako"], answer: 3, why: "Risiti inathibitisha uliirudisha, na taarifa ya akaunti inaonyesha pesa zilizorudishwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kununua mtandaoni kwa usalama",
        questions: [
          { objective: "O1", q: "Tangazo linaonyesha TV ya chapa maarufu kwa sehemu ya kumi ya bei ya kawaida. Ufanye nini kwanza?", options: ["Kuinunua kabla haijaisha", "Kukagua duka: tafuta jina lake pamoja na \"complaint\" au \"scam\"", "Kulipa kwa kadi ya zawadi", "Kutuma namba ya kadi yako kwa ujumbe mfupi"], answer: 1, why: "Bei nzuri mno kuwa za kweli ni dalili ya hatari; kagua kwanza." },
          { objective: "O1", q: "FTC inasema nini kuhusu https na alama ya kufuli?", options: ["Zinathibitisha duka ni la kweli", "Zipo kwenye maduka bandia tu", "Zinamaanisha usafirishaji ni bure", "Zinasaidia, lakini walaghai wanaweza kuzitumia pia"], answer: 3, why: "Usimbaji fiche unalinda muunganisho, si uaminifu wa muuzaji." },
          { objective: "O2", q: "Malipo yapi yanakupa ulinzi mkubwa zaidi wa kupinga malipo yasiyo sahihi?", options: ["Kadi ya mkopo", "Kadi ya zawadi", "Wire transfer", "Cryptocurrency"], answer: 0, why: "FTC inasema kadi za mkopo zinatoa ulinzi mkubwa zaidi wa kupinga malipo." },
          { objective: "O2", q: "Muuzaji anakuomba ulipe kwa kadi za zawadi. Unafanya nini?", options: ["Kununua kadi za zawadi", "Kulipa nusu kwa kadi za zawadi", "Kukataa; ni dalili ya ulaghai", "Kutuma picha ya kadi"], answer: 2, why: "FTC inaonya kamwe usiwalipe wauzaji wa mtandaoni kwa kadi za zawadi." },
          { objective: "O3", q: "Unapokea ujumbe mfupi kuhusu \"tatizo la usafirishaji\" wenye kiungo. Hatua salama zaidi ni ipi?", options: ["Kubofya kiungo", "Kujibu kwa anwani yako", "Kuangalia oda yako kwenye app au tovuti ya duka lenyewe", "Kulipa ada ndogo"], answer: 2, why: "Fuatilia kutoka akaunti yako, si kutoka viungo usivyovitarajia." }
        ]
      }
    },
    {
      name: "Sura 2: Kutumia benki mtandaoni kwa usalama",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kutumia app au tovuti ya benki yako kwa usalama",
          minutes: 5,
          goal: "Ingia kwenye app au tovuti rasmi ya benki yako na uangalie salio lako na miamala.",
          text: [
            "Benki ya mtandaoni inakuruhusu kuona salio lako, kuangalia pesa zilizoingia na kutoka, kulipa bili na kuhamisha pesa kati ya akaunti zako mwenyewe, kutoka simu au kompyuta yako.",
            "Pata app ya benki tu kutoka duka rasmi la apps, na ukague kwamba msanidi (developer) ni benki yako halisi. Au andika anwani ya tovuti ya benki wewe mwenyewe; itafute kwenye kadi yako, taarifa ya akaunti au kwa kuuliza tawini. Kamwe usiingie kupitia kiungo kwenye barua pepe au ujumbe mfupi.",
            "Tumia nywila imara usiyoitumia mahali pengine popote na uwashe uthibitishaji wa hatua mbili. Usitumie benki kwenye Wi-Fi ya umma bila data ya simu yako mwenyewe, na kila wakati toka (sign out) unapomaliza, hasa kwenye kompyuta ya pamoja."
          ],
          steps: ["Sakinisha app rasmi ya benki au andika anwani ya benki wewe mwenyewe.", "Ingia kwa nywila imara ya kipekee.", "Washa uthibitishaji wa hatua mbili kwenye mipangilio ya usalama.", "Angalia salio lako na miamala ya karibuni.", "Toka (sign out) unapomaliza."],
          words: [["Salio", "kiasi cha pesa kilicho kwenye akaunti yako sasa."], ["Muamala", "malipo moja yanayoingia au kutoka kwenye akaunti yako."], ["Uthibitishaji wa hatua mbili", "ukaguzi wa pili, kwa kawaida msimbo unaotumwa kwenye simu yako, unapoingia."]],
          slides: [
            { title: "Benki ya mtandaoni inafanya nini", bullets: ["Kuona salio lako na miamala", "Kulipa bili", "Kuhamisha pesa kati ya akaunti zako mwenyewe"] },
            { title: "Fika huko kwa usalama", bullets: ["App rasmi kutoka duka la apps", "Au andika anwani ya benki wewe mwenyewe", "Kamwe usiingie kupitia kiungo cha barua pepe au ujumbe"] },
            { title: "Kaa salama", bullets: ["Nywila imara ya kipekee", "Uthibitishaji wa hatua mbili umewashwa", "Toka unapomaliza"] }
          ],
          tryIt: "Fungua app au tovuti rasmi ya benki yako (andika anwani wewe mwenyewe). Ingia, angalia salio lako na miamala yako mitano ya mwisho, kisha toka.",
          youCanNow: "kuingia kwenye benki yako kwa usalama na kuangalia salio lako na miamala.",
          quickCheck: [
            { objective: "O4", q: "Unaweza kupata wapi anwani halisi ya tovuti ya benki yako?", options: ["Kwenye kadi yako, taarifa ya akaunti yako au kwa kuuliza tawini", "Kwenye ujumbe unaosema akaunti yako imefungwa", "Kwenye tangazo la mitandao ya kijamii", "Kwenye barua pepe kutoka kwa mtu usiyemjua"], answer: 0, why: "Kadi yako, taarifa ya akaunti na tawi vinakupa anwani halisi ya benki." },
            { objective: "O4", q: "Uliangalia salio lako kwenye kompyuta ya maktaba. Ungefanya nini kabla ya kuondoka?", options: ["Kuacha ukurasa wazi", "Kutoka (sign out)", "Kuhifadhi nywila yako kwenye kivinjari", "Kuandika nywila yako kwenye karatasi"], answer: 1, why: "Kila wakati toka unapomaliza kutumia benki, hasa kwenye kompyuta ya pamoja." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kutambua malipo yasiyo sahihi na kujua pesa zako zinalindwa",
          minutes: 5,
          goal: "Pitia miamala yako na ujue ufanye nini kuhusu malipo ambayo hukuyafanya.",
          text: [
            "Angalia miamala yako angalau mara moja kwa wiki. Tafuta malipo usiyoyatambua, hata madogo; wezi wakati mwingine hujaribu kadi kwanza kwa malipo madogo sana. Benki nyingi zinakuruhusu kuwasha arifa zinazokutumia ujumbe mfupi au barua pepe pesa zinapotoka kwenye akaunti yako.",
            "Ukiona malipo ambayo hukuyafanya, piga namba iliyo nyuma ya kadi yako au kwenye app rasmi, na uchukue hatua haraka. Kadi na apps nyingi zinakuruhusu kufunga au kusimamisha kadi mara moja.",
            "Pesa katika benki iliyowekewa bima na FDIC zinalindwa hadi $250,000 kwa kila mwenye amana, kwa kila benki, kwa kila aina ya umiliki wa akaunti. Vyama vya ushirika vya akiba na mikopo (credit unions) vilivyowekewa bima na NCUA vina kikomo cha kawaida kilekile cha $250,000. FDIC inasema crypto, hisa, hati fungani (bonds) na mifuko ya uwekezaji (mutual funds) haviko kwenye bima, hata vikiuzwa na benki."
          ],
          steps: ["Pitia miamala kila wiki.", "Washa arifa za akaunti kwenye app.", "Kama malipo si yako: funga kadi kwenye app kama unaweza.", "Piga namba iliyo nyuma ya kadi yako.", "Fuatilia jibu la benki na uangalie taarifa yako ya akaunti inayofuata."],
          words: [["Arifa", "ujumbe mfupi au barua pepe ambayo benki yako hutuma jambo linapotokea kwenye akaunti yako."], ["FDIC", "Federal Deposit Insurance Corporation, shirika linaloweka bima pesa zilizo katika benki za Marekani."], ["NCUA", "National Credit Union Administration, shirika linaloweka bima pesa zilizo katika credit unions za Marekani."]],
          slides: [
            { title: "Angalia kila wiki", bullets: ["Tafuta malipo usiyoyajua", "Hata madogo", "Washa arifa za akaunti"] },
            { title: "Malipo si yako", bullets: ["Funga kadi kwenye app", "Piga namba iliyo nyuma ya kadi yako", "Chukua hatua haraka"] },
            { title: "Amana zako zina bima", bullets: ["Benki za FDIC: $250,000 kwa kila mwenye amana, kwa kila benki, kwa kila aina ya umiliki", "Credit unions za NCUA: kikomo cha kawaida cha $250,000"] },
            { title: "Haviko kwenye bima", bullets: ["Crypto, hisa, hati fungani na mifuko ya uwekezaji", "Hata benki ikiviuza"] }
          ],
          sources: [{ name: "FDIC: Understanding deposit insurance", url: "https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance" }, { name: "NCUA: Share insurance coverage", url: "https://ncua.gov/consumers/share-insurance-coverage" }],
          tryIt: "Kwenye app ya benki yako, tafuta mahali arifa zinapowekwa na uwashe arifa ya malipo. Kisha tafuta kitufe kinachofunga au kusimamisha kadi yako (usikibonyeze isipokuwa unakihitaji).",
          youCanNow: "kuangalia miamala yako, kuweka arifa, na kuchukua hatua haraka kuhusu malipo ambayo hukuyafanya.",
          quickCheck: [
            { objective: "O5", q: "Kwa nini uangalie malipo madogo usiyoyatambua?", options: ["Malipo madogo huwa sawa kila wakati", "Benki hazikosei kamwe", "Malipo madogo ni bure", "Wezi wakati mwingine hujaribu kadi kwanza kwa malipo madogo sana"], answer: 3, why: "Malipo madogo usiyoyajua yanaweza kuwa jaribio kabla ya malipo makubwa." },
            { objective: "O5", q: "Unataka kujua mara moja pesa zinapotoka kwenye akaunti yako. Ungefanya nini?", options: ["Kuangalia mara moja kwa mwaka", "Kumwomba mgeni aiangalie", "Kuwasha arifa kwenye app ya benki yako ili ikutumie ujumbe mfupi au barua pepe", "Kufunga akaunti yako"], answer: 2, why: "Benki nyingi zinatoa arifa pesa zinapotoka kwenye akaunti yako." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ulaghai wa pesa: simu bandia za benki na hila za apps za malipo",
          minutes: 5,
          goal: "Tambua ulaghai wa pesa na uuzuie.",
          text: [
            "Ulaghai wa kawaida: mtu anapiga simu, anatuma ujumbe mfupi au barua pepe akijifanya kuwa timu ya kupambana na ulaghai ya benki yako. Anasema akaunti yako iko hatarini na anaomba nywila yako, msimbo uliotumwa kwenye simu yako, au uhamishe pesa kwenda \"akaunti salama\". Benki halisi kamwe haitaomba mambo haya.",
            "FTC inataja dalili nne za ulaghai: wanajifanya kuwa mtu unayemwamini, kuna tatizo au zawadi, wanakulazimisha uchukue hatua sasa hivi, na wanataka malipo kwa njia isiyo ya kawaida, kama kadi za zawadi, wire transfer, apps za malipo au cryptocurrency.",
            "Ukiwa na shaka, kata simu. Piga namba iliyo nyuma ya kadi yako. Chukulia pesa zinazotumwa kupitia apps za malipo kama pesa taslimu: zitume tu kwa watu unaowajua. Nchini Marekani, ripoti ulaghai kwenye reportfraud.ftc.gov."
          ],
          steps: ["Kamwe usitoe nywila yako au msimbo uliotumwa kwenye simu yako.", "Kamwe usihamishe pesa kwenda \"akaunti salama\" kwa sababu mpigaji simu amesema hivyo.", "Kata simu na upige namba iliyo nyuma ya kadi yako.", "Tuma pesa kwa app ya malipo tu kwa watu unaowajua.", "Ripoti ulaghai kwenye reportfraud.ftc.gov."],
          words: [["Kujifanya mtu mwingine", "kujidai kuwa mtu mwingine, kama benki yako au ofisi ya serikali."], ["App ya malipo", "app inayotuma pesa kutoka mtu mmoja kwenda mwingine, kama Venmo, Cash App au Zelle."]],
          slides: [
            { title: "Simu bandia za benki", bullets: ["\"Akaunti yako iko hatarini\"", "Wanaomba nywila yako au msimbo", "Au uhamishe pesa kwenda \"akaunti salama\""] },
            { title: "Dalili za ulaghai kwa FTC", bullets: ["Anajifanya mtu unayemwamini", "Tatizo au zawadi", "Shinikizo la kuchukua hatua sasa", "Malipo yasiyo ya kawaida: kadi ya zawadi, wire, app, crypto"] },
            { title: "Ufanye nini", bullets: ["Kata simu", "Piga namba iliyo nyuma ya kadi yako", "Apps za malipo: watu unaowajua tu"] },
            { title: "Ripoti", bullets: ["reportfraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: How to avoid a scam", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }, { name: "FTC: Report fraud", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Mazoezi ya kazi ya mwisho: andika namba ya simu iliyo nyuma ya kadi yako ya benki mahali salama nyumbani. Kisha fanya kazi ya mwisho: kagua duka, chagua njia yako ya malipo, na upitie miamala yako ya benki.",
          youCanNow: "kutambua simu bandia ya benki au hila ya app ya malipo, kuizuia, na kuiripoti.",
          quickCheck: [
            { objective: "O6", q: "Benki halisi kamwe haitakuomba nini?", options: ["Kutembelea tawi", "Nywila yako au msimbo uliotumwa kwenye simu yako", "Kuangalia taarifa ya akaunti yako", "Kuwasha uthibitishaji wa hatua mbili"], answer: 1, why: "Benki halisi kamwe haitaomba nywila yako, msimbo, au uhamishe pesa kwenda \"akaunti salama\"." },
            { objective: "O6", q: "Ujumbe mfupi kutoka \"benki yako\" unasema akaunti yako iko hatarini na upige namba iliyo kwenye ujumbe. Ungefanya nini?", options: ["Kupuuza namba iliyo kwenye ujumbe na kupiga namba iliyo nyuma ya kadi yako", "Kupiga namba iliyo kwenye ujumbe", "Kujibu kwa nywila yako", "Kuhamisha pesa zako kwenda akaunti wanayokupa"], answer: 0, why: "Kupiga namba iliyo kwenye kadi yako kunakufikisha kwenye benki yako halisi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kutumia benki mtandaoni kwa usalama",
        questions: [
          { objective: "O4", q: "Njia salama zaidi ya kufika kwenye tovuti ya benki yako ni ipi?", options: ["Kuandika anwani wewe mwenyewe au kutumia app rasmi", "Kubofya kiungo kwenye ujumbe mfupi", "Kutafuta na kubofya tangazo la kwanza", "Kutumia kiungo anachokupa mpigaji simu"], answer: 0, why: "Kuandika anwani au kutumia app rasmi kunaepuka tovuti bandia." },
          { objective: "O5", q: "Unaona malipo madogo usiyoyatambua. Unafanya nini?", options: ["Kuyapuuza kwa sababu ni madogo", "Kuandika kuyahusu mtandaoni", "Kusubiri mwaka mmoja", "Kufunga kadi na kupiga namba iliyo nyuma yake"], answer: 3, why: "Wezi mara nyingi hujaribu kadi kwa malipo madogo; chukua hatua haraka." },
          { objective: "O5", q: "Kiasi cha kawaida cha bima ya FDIC ni kipi?", options: ["$1,000 kwa kila mtu", "$250,000 kwa kila mwenye amana, kwa kila benki yenye bima, kwa kila aina ya umiliki", "Bila kikomo", "Hakuna; benki hazina bima"], answer: 1, why: "FDIC inaweka bima hadi $250,000 kwa kila mwenye amana, kwa kila benki, kwa kila aina ya umiliki." },
          { objective: "O6", q: "Mpigaji simu kutoka \"benki yako\" anaomba msimbo uliotumwa sasa hivi kwenye simu yako. Unafanya nini?", options: ["Kumsomea", "Kukata simu na kupiga namba iliyo kwenye kadi yako", "Kumpa nusu yake", "Kumtumia kwa ujumbe mfupi"], answer: 1, why: "Benki halisi kamwe haziombi msimbo huo." },
          { objective: "O5", q: "Kipi HAKIKO kwenye bima ya FDIC?", options: ["Akaunti ya hundi (checking) katika benki yenye bima", "Akaunti ya akiba katika benki yenye bima", "Amana ya muda maalum (certificate of deposit) katika benki yenye bima", "Crypto"], answer: 3, why: "FDIC inasema crypto haiko kwenye bima." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kununua na Kutumia Benki Mtandaoni kwa Usalama",
    questions: [
      { objective: "O1", q: "Njia salama zaidi ya kufika kwenye duka la mtandaoni ni:", options: ["Kuandika anwani yake wewe mwenyewe au kutumia app yake rasmi", "Kubofya tangazo kwenye mitandao ya kijamii", "Kutumia kiungo kutoka ujumbe wa mgeni", "Kuskani QR code yoyote"], answer: 0, why: "Hii inaepuka tovuti zinazoiga." },
      { objective: "O1", q: "FTC inashauri kutafuta jina la duka pamoja na:", options: ["\"free\"", "\"coupon\"", "\"complaint\" au \"scam\"", "\"cheap\""], answer: 2, why: "Inaonyesha matatizo waliyopata wanunuzi wengine." },
      { objective: "O1", q: "Maoni ya wanunuzi yanapaswa kusomwa:", options: ["Nyota tu", "Hapana kabisa", "Kwa uangalifu, kwa sababu baadhi ni bandia", "La kwanza tu"], answer: 2, why: "FTC inaonya kwamba baadhi ya maoni ni bandia." },
      { objective: "O1", q: "Kabla ya kununua, kagua sera ya kurudisha bidhaa kujua:", options: ["Una siku ngapi na nani analipa usafirishaji wa kurudisha", "Jina la mmiliki", "Nembo ya duka", "Rangi za tovuti"], answer: 0, why: "Masharti ya kurudisha yanatofautiana na ni muhimu kitu kikienda vibaya." },
      { objective: "O1", q: "Ofa ya bidhaa ya chapa ghali inayoonekana nzuri mno kuwa ya kweli inaweza kuwa:", options: ["Zawadi ya benki", "Ya kweli kila wakati", "Ofa ya serikali", "Bidhaa feki au iliyoibwa"], answer: 3, why: "FTC inaonya ofa kama hizo zinaweza kuwa bidhaa bandia au zilizoibwa." },
      { objective: "O2", q: "FTC inasema malipo yapi yanatoa ulinzi mkubwa zaidi wa kupinga malipo?", options: ["Wire transfer", "Kadi ya mkopo", "Kadi ya zawadi", "Cryptocurrency"], answer: 1, why: "Kadi za mkopo zinakuruhusu kupinga malipo yasiyo sahihi." },
      { objective: "O2", q: "Unapaswa kuandika namba ya kadi yako wapi?", options: ["Kwenye barua pepe ya kujibu", "Kwenye ukurasa wa malipo wa duka ulilokagua", "Kwenye ujumbe mfupi", "Kwenye chat ya mitandao ya kijamii"], answer: 1, why: "Ukurasa wa malipo wa duka ulilokagua tu." },
      { objective: "O2", q: "Kwenye kompyuta ya maktaba, kivinjari kinajitolea kuhifadhi kadi yako. Wewe:", options: ["Unasema ndiyo", "Unaihifadhi mara mbili", "Unaiandika kwenye karatasi ya kubandika", "Unasema hapana"], answer: 3, why: "Kamwe usihifadhi taarifa za kadi kwenye kompyuta ya pamoja." },
      { objective: "O3", q: "Ni kumbukumbu ipi unapaswa kuhifadhi baada ya kununua mtandaoni?", options: ["Uthibitisho wa oda", "Hakuna", "Boksi tu", "Tangazo uliloliona"], answer: 0, why: "Unathibitisha ulichonunua na ulicholipa." },
      { objective: "O3", q: "Ujumbe mfupi unasema kifurushi chako kimekwama na unakuomba ulipe ada ndogo kupitia kiungo. Unapaswa:", options: ["Kulipa ada", "Kubofya ili uone", "Kuangalia oda kwenye app au tovuti ya duka lenyewe", "Kujibu kwa namba ya kadi yako"], answer: 2, why: "Ujumbe bandia wa usafirishaji ni ulaghai wa kawaida." },
      { objective: "O3", q: "Muuzaji akikataa kurekebisha tatizo, nchini Marekani unaweza kuliripoti kwa:", options: ["Kikundi cha mitandao ya kijamii", "Tangazo la muuzaji", "reportfraud.ftc.gov", "Hakuna mtu"], answer: 2, why: "FTC inapokea ripoti za ulaghai hapo." },
      { objective: "O4", q: "\"Salio\" ni:", options: ["Kiasi cha pesa kilicho kwenye akaunti yako sasa", "Malipo", "Nywila", "Tawi la benki"], answer: 0, why: "Salio linaonyesha ulicho nacho sasa." },
      { objective: "O4", q: "Unapomaliza kutumia benki mtandaoni unapaswa:", options: ["Kuiacha wazi", "Kuhifadhi nywila yako kwenye kivinjari cha kompyuta ya pamoja", "Kushiriki skrini", "Kutoka (sign out)"], answer: 3, why: "Kutoka kunamzuia mtu anayefuata kuingia." },
      { objective: "O4", q: "Uthibitishaji wa hatua mbili kwenye akaunti yako ya benki unamaanisha:", options: ["Nywila mbili zilizoandikwa", "Ukaguzi wa pili, kama msimbo unaotumwa kwenye simu yako", "Kadi mbili za benki", "App inayokwenda polepole zaidi"], answer: 1, why: "Unaongeza msimbo ambao mwizi hatakuwa nao." },
      { objective: "O5", q: "Ni busara kuangalia miamala yako mara ngapi?", options: ["Mara moja kwa mwaka", "Angalau mara moja kwa wiki", "Kamwe", "Benki inapopiga simu tu"], answer: 1, why: "Ukaguzi wa kila wiki unagundua matatizo haraka." },
      { objective: "O5", q: "Amana katika credit unions zinawekewa bima na:", options: ["FTC", "Duka la apps", "Mwajiri wako", "NCUA"], answer: 3, why: "NCUA inaweka bima credit unions zilizo na bima ya serikali kuu." },
      { objective: "O6", q: "Mpigaji simu anasema akaunti yako iko hatarini na lazima uhamishe pesa kwenda \"akaunti salama\". Huu ni:", options: ["Ulaghai", "Kurudishiwa pesa", "Sheria mpya", "Hatua ya kawaida ya benki"], answer: 0, why: "Benki halisi kamwe haziombi hivi; ni ulaghai wa kawaida." },
      { objective: "O6", q: "Pesa zinazotumwa kwa app ya malipo zinapaswa kuchukuliwa kama:", options: ["Mkopo", "Kadi ya mkopo", "Pesa taslimu: zitume tu kwa watu unaowajua", "Akiba yenye bima"], answer: 2, why: "Ni ngumu kurudishwa, kama pesa taslimu." },
      { objective: "O6", q: "Ipi ni mojawapo ya dalili nne za ulaghai kwa FTC?", options: ["Salamu ya adabu", "Bili ya karatasi kwa posta kutoka kampuni yako ya huduma (maji, umeme)", "Shinikizo la kuchukua hatua sasa", "Kulipa kwenye kaunta ya duka"], answer: 2, why: "Walaghai wanakuharakisha ili usisimame na kukagua." },
      { objective: "O6", q: "Ukiwa na shaka kuhusu simu kutoka benki yako, hatua bora ni:", options: ["Kukata simu na kupiga namba iliyo nyuma ya kadi yako", "Kuwapa nywila yako", "Kuendelea kuongea", "Kutuma malipo kidogo"], answer: 0, why: "Kupiga namba unayoijua kunakufikisha kwenye benki halisi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 5, 7, 8, 9, 12, 14, 16, 19] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Kukagua duka", objective: "O1", notYet: "Ukaguzi uliofanywa ni chini ya mitatu, au duka lilifikiwa kupitia tangazo au kiungo cha ujumbe.", meets: "Ukaguzi wote mitatu umefanywa: anwani halisi ya tovuti, maoni na malalamiko, na sera ya kurudisha bidhaa.", exceeds: "Pia anaandika ana siku ngapi kurudisha bidhaa na nani analipa kuirudisha." },
      { name: "Uchaguzi wa malipo", objective: "O2", notYet: "Hakuna njia ya malipo iliyochaguliwa, au amechagua kadi ya zawadi, wire, app ya malipo au crypto.", meets: "Anachagua njia inayolinda kama kadi ya mkopo na anasema kwa nini.", exceeds: "Pia anasema asihifadhi kadi kwenye kompyuta ya pamoja." },
      { name: "Kuangalia akaunti ya benki", objective: "O4", notYet: "Aliingia kupitia kiungo, au hakuweza kupata salio au miamala.", meets: "Anaingia kupitia app rasmi au anwani aliyoiandika mwenyewe na anapata salio na miamala ya karibuni.", exceeds: "Pia anawasha uthibitishaji wa hatua mbili au arifa, na anatoka (sign out)." },
      { name: "Mpango kwa malipo yasiyo sahihi", objective: "O5", notYet: "Hakuna mpango, au mpango unatumia namba kutoka ujumbe mfupi au barua pepe.", meets: "Anasema angefunga kadi na kupiga haraka namba iliyo kwenye kadi au app rasmi.", exceeds: "Pia anasema angeangalia miamala kila wiki na kuhifadhi kumbukumbu kwa ajili ya kupinga malipo." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubriki wa kazi ya mwisho",
      "Wanafunzi wanaoripoti kuangalia miamala yao ya benki angalau kila wiki baada ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kuepuka duka bandia, ujumbe bandia wa usafirishaji au simu ya mtu anayejifanya benki",
      "Wanafunzi wanaoripoti kutambua na kuripoti malipo ambayo hawakuyafanya"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti, kwenye muunganisho binafsi (Wi-Fi ya nyumbani au data ya simu yenyewe)",
      "App rasmi ya benki ya mwanafunzi au anwani ya tovuti aliyoiandika, kama ana akaunti ya benki",
      "Bidhaa ya mfano ya kukagua, kama kitu anachohitaji mwezi huu",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Wanafunzi hawanunui kitu halisi darasani; kazi ya kununua inasimama kwenye ukurasa wa malipo.",
      "Kamwe usiwaombe wanafunzi waonyeshe salio lao la benki, namba za kadi au nywila; waache wafanye hatua za benki faraghani kwenye kifaa chao wenyewe.",
      "Epuka kutumia benki kwenye Wi-Fi ya umma ya programu; waombe wanafunzi watumie data ya simu yao wenyewe au wafanye hatua ya benki nyumbani.",
      "Wanafunzi wasio na akaunti ya benki wanaweza kufanya somo la benki kwa kutumia onyesho la umma (demo) la benki au kwa kueleza hatua; waelekeze kwenye programu za eneo lenu zinazosaidia kufungua akaunti salama za gharama nafuu kama programu yenu inazo.",
      "Fanyeni mazoezi ya simu bandia ya benki kama igizo ili wanafunzi wajizoeze kukata simu na kupiga namba iliyo kwenye kadi yao."
    ]
  }
};

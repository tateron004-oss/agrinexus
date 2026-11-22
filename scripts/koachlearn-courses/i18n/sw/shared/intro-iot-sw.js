"use strict";

// Koach Learn course (Swahili translation of shared/intro-iot.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FTC = { name: "FTC Ushauri kwa Watumiaji: Kulinda Vifaa Vyako Vilivyounganishwa na Intaneti Nyumbani", url: "https://consumer.ftc.gov/articles/securing-your-internet-connected-devices-home" };
const CISA = { name: "CISA: Secure Our World (Linda Dunia Yetu)", url: "https://www.cisa.gov/secure-our-world" };
const WOKWI = { name: "Wokwi, kiigizaji cha vifaa vya elektroniki mtandaoni", url: "https://wokwi.com/" };

module.exports = {
  id: "intro-iot-sw",
  lang: "sw",
  translationOf: "intro-iot",
  category: "Veterans (military)",
  name: "Utangulizi wa Intaneti ya Vitu (IoT)",
  skills: "Kueleza jinsi mifumo ya IoT inavyofanya kazi, Kuchagua sensa na viendeshaji, Kulinganisha njia za vifaa kuungana, Kuandika kanuni rahisi ya tahadhari, Kulinda vifaa vilivyounganishwa, Kupanga mradi wa IoT",
  outcome: "kupanga mradi rahisi wa ufuatiliaji wa IoT kuanzia sensa hadi tahadhari: kuchagua sensa, kifaa, muunganisho na app, kuandika kanuni ya tahadhari kama kipande kifupi cha code, na kuorodhesha hatua zinazolinda vifaa.",
  about: [
    "Intaneti ya Vitu (IoT) ni vitu vya kila siku vyenye sensa na muunganisho wa intaneti: thermostat janja, kamera za mlangoni, vifaa vya kufuatilia mazoezi, sensa za udongo shambani, na vifaa vya kufuatilia malori na makontena ya mizigo. Ujuzi wa IoT unatumika katika kazi za majengo, usafirishaji, nishati, kilimo na usalama, na wanajeshi wastaafu wengi tayari wanajua mawazo haya kutokana na sensa, redio na matengenezo ya vifaa.",
    "Kozi hii inaeleza jinsi mfumo wa IoT unavyofanya kazi, tabaka kwa tabaka, jinsi vifaa vinavyowasiliana, jinsi kanuni rahisi inavyogeuza kipimo kuwa kitendo, na jinsi ya kuzuia vifaa vilivyounganishwa visiwe mlango kwa washambulizi. Huhitaji kununua kifaa chochote. Somo moja linaonyesha jinsi ya kujaribu kifaa cha kuigiza katika kivinjari chako cha wavuti.",
    "Kila somo linachukua kama dakika tano na linaisha na kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andika mpango wa ukurasa mmoja wa mradi wa ufuatiliaji wa IoT, kama tahadhari ya joto kwa chumba cha seva, friza ya ghala la chakula cha msaada, au bustani inayohitaji maji: taja sensa, kifaa, jinsi kinavyoungana na data inakwenda wapi, chora mtiririko wa data kuanzia sensa hadi tahadhari, andika kanuni ya tahadhari kama if-statement fupi ya Python, na orodhesha hatua tano utakazochukua kulinda vifaa.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanajeshi wastaafu na wanajeshi wanaomaliza utumishi wanaotafuta kazi za teknolojia kama msaada wa IT, teknolojia ya majengo, ufuatiliaji wa usafirishaji au usalama wa mtandao. Wengi walifanya kazi na redio, sensa, magari au vifaa jeshini.",
    startingPoint: "Wanaweza kufuata taratibu, kutumia kompyuta na simu janja, na mara nyingi wanajua ukaguzi wa vifaa na mawasiliano. Wengi hawajawahi kuandika code wala kuweka kifaa kilichounganishwa.",
    gap: "Waajiri katika majengo, usafirishaji, viwanda na IT wanatumia sensa zilizounganishwa zaidi na zaidi na wanatarajia wafanyakazi waelewe jinsi zinavyofanya kazi, jinsi ya kuweka tahadhari rahisi na jinsi ya kuzilinda. Wanafunzi wanahitaji kupanga mradi mdogo wa ufuatiliaji kuanzia mwanzo hadi mwisho ili kuonyesha ujuzi huu na kugeuza uzoefu wao wa kijeshi kuwa kazi za teknolojia za kiraia.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi; maneno ya kitaalamu yanaelezwa mara ya kwanza",
      "Vifaa: kompyuta yenye kivinjari cha wavuti kwa ajili ya kiigizaji; hakuna haja ya kununua kifaa",
      "Muda: masomo ya dakika 5, kama dakika 60 kwa jumla",
      "Huduma na akaunti za kiigizaji zinaweza kubadilika; wanafunzi wakague masharti ya sasa ya tovuti",
      "Mitandao ya kazini: usiunganishe kamwe kifaa bila idhini ya timu ya IT au ya usalama"
    ],
    prerequisites: "Hakuna. Kozi ya kwanza ya Python inasaidia lakini si lazima."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa mifano kutoka nyumbani, kazini na uwanjani", action: "kutambua vifaa vya IoT na kueleza faida na hatari ya kila kimoja", standard: "ukitaja angalau vifaa vitatu kwa usahihi" },
    { id: "O2", condition: "Ukipewa mradi wa IoT kama kengele ya friza", action: "kufuatilia data kutoka kwa sensa kupitia kifaa na muunganisho hadi kwenye wingu na kitendo", standard: "ukitaja tabaka zote nne kwa mpangilio sahihi" },
    { id: "O3", condition: "Ukipewa mahali kifaa kilipo, umeme wake na kiasi cha data kinachotuma", action: "kuchagua muunganisho unaofaa na kueleza jinsi itifaki kama MQTT inavyobeba ujumbe wake", standard: "kwa sababu inayolingana na umbali, umeme na data" },
    { id: "O4", condition: "Ukipewa kipimo cha sensa na kiwango salama", action: "kuandika kanuni ya tahadhari kama if-statement ya Python inayoepuka tahadhari za uongo", standard: "ili kanuni itoe jibu sahihi kwa vipimo vya majaribio" },
    { id: "O5", condition: "Ukitumia kiigizaji cha bure mtandaoni", action: "kuendesha microcontroller ya kuigiza yenye sensa ya joto na kujaribu kanuni yako ya tahadhari", standard: "ukiona tahadhari ikilia unapobadilisha kipimo" },
    { id: "O6", condition: "Kwa kila kifaa kilichounganishwa katika mpango wako", action: "kuorodhesha hatua zinazolinda vifaa", standard: "kwa angalau hatua tano sahihi" }
  ],
  chapters: [
    {
      name: "Sura 1: Jinsi mifumo ya IoT inavyofanya kazi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Intaneti ya Vitu ni nini",
          minutes: 4,
          goal: "Eleza IoT na utambue vifaa vya IoT vilivyo karibu nawe.",
          text: [
            "Intaneti ya Vitu (IoT) ni vitu halisi vinavyohisi mazingira, vinavyoungana na mtandao na kushiriki data, mara nyingi bila mtu kuandika chochote. Thermostat janja hupima joto la chumba na kuwasha joto. Kifaa cha kufuatilia mazoezi huhesabu hatua zako na kuzituma kwenye simu yako.",
            "IoT inatumika nyumbani (kamera za mlangoni, soketi janja, spika za sauti), kazini (mashine zinazoripoti zinapohitaji matengenezo, yanayoitwa matengenezo ya kutabiri), katika usafirishaji (vifaa vya GPS kwenye malori na makontena), katika kilimo (sensa za unyevu wa udongo), katika afya (vipima mapigo ya moyo) na mijini (taa janja za barabarani).",
            "Faida iko katika kile data inakuwezesha kufanya: kugundua tatizo mapema, kuokoa nishati, au kuchukua hatua ukiwa mbali. Hatari ni kwamba kila kifaa kilichounganishwa ni kitu kimoja zaidi kinachoweza kudukuliwa au kuvujisha data binafsi, kwa hiyo usalama ni sehemu ya kila kazi ya IoT."
          ],
          words: [["Intaneti ya Vitu (IoT)", "vitu halisi vyenye sensa na muunganisho wa mtandao vinavyoshiriki data."], ["Kifaa janja", "kitu cha kila siku kinachoweza kuungana na kuchukua hatua kwa kutumia data."], ["Matengenezo ya kutabiri (predictive maintenance)", "kutumia data ya sensa kurekebisha mashine kabla haijaharibika."]],
          slides: [
            { title: "IoT ni", bullets: ["Vitu halisi vinavyohisi mazingira", "Vimeunganishwa na mtandao", "Vinashiriki data, mara nyingi vyenyewe"] },
            { title: "Inapatikana wapi", bullets: ["Nyumbani: kamera za mlango, soketi janja, spika", "Kazini: mashine zinazoripoti matatizo", "Usafirishaji, kilimo, afya, miji"] },
            { title: "Faida na hatari", bullets: ["Gundua matatizo mapema, okoa nishati", "Chukua hatua ukiwa mbali", "Kila kifaa ni mlango unaowezekana kwa washambulizi"] }
          ],
          tryIt: "Tembea nyumbani kwako, kazini au dukani na uorodheshe vifaa vitano vilivyounganishwa unavyoviona au kuvitumia. Kwa kila kimoja, andika kinahisi nini na kinafanya nini na data.",
          youCanNow: "kueleza IoT ni nini na kutaja vifaa vya IoT katika maisha ya kila siku na kazini.",
          quickCheck: [
            { objective: "O1", q: "Ni nini kinachofanya kifaa kiwe sehemu ya Intaneti ya Vitu?", options: ["Kina skrini kubwa", "Kinagharimu zaidi ya kifaa cha kawaida", "Kinahisi kitu, kinaungana na mtandao na kushiriki data", "Kinafanya kazi tu na kibodi"], answer: 2, why: "Vifaa vya IoT vinahisi mazingira, vinaungana na kushiriki data, mara nyingi bila mtu kuandika." },
            { objective: "O1", q: "Karakana ya magari ya kikosi chako inataka malori yaripoti matatizo kabla hayajaharibika. Matumizi haya ya IoT yanaitwaje?", options: ["Matengenezo ya kutabiri", "Edge computing", "Mtandao wa wageni", "Firmware"], answer: 0, why: "Mashine zinazoripoti zinapohitaji matengenezo kabla hazijaharibika ni matengenezo ya kutabiri." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Tabaka nne: sensa, vifaa, muunganisho na wingu",
          minutes: 5,
          goal: "Fuatilia data katika mfumo wa IoT kuanzia sensa hadi kitendo.",
          text: [
            "Mifumo mingi ya IoT ina tabaka nne. 1) Sensa hupima kitu: joto, mwendo, mwanga, mahali, unyevu. 2) Kifaa (mara nyingi kompyuta ndogo ya bei nafuu inayoitwa microcontroller, kama ESP32 au Arduino) husoma sensa na kutuma data. 3) Muunganisho hubeba data: Wi-Fi, Bluetooth, mtandao wa simu au redio ya masafa marefu. 4) Huduma ya wingu au app huhifadhi data, huionyesha kwenye dashibodi na kutuma tahadhari.",
            "Baadhi ya vifaa pia vina viendeshaji (actuators): sehemu zinazofanya kitu katika ulimwengu halisi, kama mota inayofungua vali, relay inayowasha feni, au buzzer.",
            "Wakati mwingine kifaa hufanya uamuzi chenyewe badala ya kusubiri wingu. Hii inaitwa edge computing. Ni ya haraka zaidi, inaendelea kufanya kazi intaneti ikikatika, na inatuma data kidogo."
          ],
          steps: ["Taja kinachopimwa (sensa).", "Taja kifaa kinachokisoma.", "Taja jinsi data inavyosafiri (muunganisho).", "Taja inakwenda wapi na nani anaiona (wingu, app, dashibodi).", "Taja kitendo, kinachofanywa na mtu au kiendeshaji."],
          words: [["Sensa", "sehemu inayopima kitu katika ulimwengu halisi."], ["Microcontroller", "kompyuta ndogo sana ya bei nafuu kwenye chipu moja inayoendesha programu moja."], ["Kiendeshaji (actuator)", "sehemu inayofanya kitu katika ulimwengu halisi, kama mota, relay au buzzer."], ["Dashibodi", "skrini inayoonyesha data ya moja kwa moja kwa chati na namba."], ["Edge computing", "kuchakata data kwenye kifaa au karibu nacho badala ya kwenye wingu."]],
          slides: [
            { title: "Tabaka nne", bullets: ["1. Sensa inapima", "2. Kifaa kinasoma na kutuma", "3. Muunganisho unabeba", "4. Wingu au app inahifadhi, inaonyesha, inatoa tahadhari"] },
            { title: "Viendeshaji vinatenda", bullets: ["Mota inafungua vali", "Relay inawasha feni", "Buzzer inalia kama kengele"] },
            { title: "Edge computing", bullets: ["Uamuzi unafanywa kwenye kifaa chenyewe", "Haraka zaidi, inafanya kazi bila intaneti", "Inatuma data kidogo"] }
          ],
          tryIt: "Chagua kifaa kimoja kutoka kwenye orodha yako ya Somo 1. Chora visanduku vya tabaka zake nne (sensa, kifaa, muunganisho, wingu au app) na mishale kati yake, na uongeze kitendo mwishoni.",
          youCanNow: "kufuatilia data kupitia tabaka nne za mfumo wa IoT na kutaja sensa na viendeshaji.",
          quickCheck: [
            { objective: "O2", q: "Katika mfumo wa IoT, kazi ya microcontroller ni ipi?", options: ["Kupima joto lenyewe", "Kuhifadhi data kwenye wingu", "Kuwasha feni", "Kusoma sensa na kutuma data"], answer: 3, why: "Kifaa, mara nyingi microcontroller, husoma sensa na kutuma data mbele." },
            { objective: "O2", q: "Sensa ya geti la mbali lazima iendelee kufanya kazi intaneti ikikatika. Muundo gani unasaidia?", options: ["Tuma kila kipimo kwenye wingu kwanza", "Acha kifaa kifanye uamuzi chenyewe (edge computing)", "Tumia skrini kubwa zaidi", "Ondoa sensa"], answer: 1, why: "Edge computing inaruhusu kifaa kuamua chenyewe, kwa hiyo kinaendelea kufanya kazi bila intaneti." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Jinsi vifaa vinavyoungana na kuwasiliana",
          minutes: 5,
          goal: "Chagua muunganisho unaofaa kwa kifaa cha IoT.",
          text: [
            "Hakuna muunganisho mmoja ulio bora kuliko yote; kila mmoja unapima umbali, umeme na data. Wi-Fi ni ya haraka na ya kawaida nyumbani na kazini, lakini inatumia umeme mwingi. Bluetooth Low Energy (BLE) inatumia umeme kidogo sana na ina umbali mfupi, inafaa kwa vifaa vinavyovaliwa na simu. Mtandao wa simu (4G, 5G na aina za umeme mdogo) unafanya kazi karibu kila mahali penye mtandao, unafaa kwa magari na maeneo ya mbali, lakini unahitaji kifurushi cha data. LoRaWAN ni redio ya umeme mdogo na masafa marefu kwa kiasi kidogo cha data, inayotumika kwa sensa za mashambani na mijini.",
            "Vifaa pia vinahitaji lugha ya pamoja, inayoitwa itifaki (protocol), kutuma ujumbe. MQTT ni itifaki nyepesi inayopendwa: kifaa huchapisha (publish) kipimo kwenye mada (topic), kama pantry/freezer/temp, na app yoyote iliyojiunga (subscribe) na mada hiyo huipokea. HTTP, itifaki ile ile inayotumiwa na tovuti, pia ni ya kawaida.",
            "Vifaa vya betri huokoa umeme kwa kulala muda mwingi na kuamka tu kusoma na kutuma."
          ],
          steps: ["Data lazima isafiri umbali gani?", "Kuna umeme, au betri tu?", "Data ni kiasi gani, na mara ngapi?", "Kuna Wi-Fi au mtandao wa simu mahali kitakapokaa?", "Chagua muunganisho unaolingana na majibu yote manne."],
          words: [["Wi-Fi", "mtandao wa haraka usiotumia waya kwa nyumba na ofisi; unatumia umeme zaidi."], ["Bluetooth Low Energy (BLE)", "muunganisho usiotumia waya wenye umeme mdogo sana na umbali mfupi."], ["Mtandao wa simu (cellular)", "muunganisho kupitia mitandao ya simu za mkononi."], ["LoRaWAN", "mtandao wa redio wa masafa marefu na umeme mdogo kwa kiasi kidogo cha data."], ["Itifaki (protocol)", "seti ya kanuni zilizokubaliwa za kutuma ujumbe."], ["MQTT", "itifaki nyepesi ya ujumbe ambapo vifaa huchapisha kwenye mada na app hujiunga nazo."]],
          slides: [
            { title: "Chagua kwa umbali, umeme na data", bullets: ["Wi-Fi: haraka, umeme zaidi", "BLE: umeme mdogo sana, umbali mfupi", "Mtandao wa simu: karibu kila mahali, unahitaji kifurushi", "LoRaWAN: masafa marefu, data kidogo"] },
            { title: "Itifaki", bullets: ["MQTT: chapisha kwenye mada, app hujiunga", "Mfano wa mada: pantry/freezer/temp", "HTTP: lugha ya tovuti"] },
            { title: "Okoa betri", bullets: ["Lala muda mwingi", "Amka, soma, tuma, lala tena"] }
          ],
          tryIt: "Chagua muunganisho bora kwa kila kimoja na uandike sababu moja: kihesabu hatua kwenye kifundo cha mkono wako, sensa ya udongo shambani umbali wa km 5 kutoka jengo lolote, kifaa cha GPS kwenye lori la usafirishaji, na soketi janja sebuleni.",
          youCanNow: "kuchagua muunganisho unaofaa na kueleza jinsi vifaa vya IoT vinavyotuma ujumbe.",
          quickCheck: [
            { objective: "O3", q: "MQTT ni nini?", options: ["Itifaki nyepesi ambapo vifaa huchapisha vipimo kwenye mada", "Aina ya betri", "Redio ya masafa marefu", "Chapa ya sensa"], answer: 0, why: "MQTT ni itifaki nyepesi: vifaa huchapisha kwenye mada na app zilizojiunga huvipokea." },
            { objective: "O3", q: "Sensa ya betri katika uwanja wa kuhifadhi bila Wi-Fi inatuma kipimo kimoja kidogo kila saa. Unachagua nini?", options: ["Wi-Fi", "Bluetooth Low Energy", "LoRaWAN", "Kibodi ya waya"], answer: 2, why: "LoRaWAN ina umeme mdogo na masafa marefu kwa kiasi kidogo cha data." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Jinsi mifumo ya IoT inavyofanya kazi",
        questions: [
          { objective: "O1", q: "Kipi ni kifaa cha IoT?", options: ["Kalenda ya karatasi", "Ramani iliyochapishwa", "Thermostat janja inayorekebisha joto yenyewe", "Kiti cha mbao"], answer: 2, why: "Inahisi, inaungana na kuchukua hatua kwa kutumia data." },
          { objective: "O2", q: "Katika mfumo wa IoT, sensa hufanya nini?", options: ["Hupima kitu katika ulimwengu halisi", "Huhifadhi data kwenye wingu", "Hulipa bili ya intaneti", "Huonyesha dashibodi"], answer: 0, why: "Sensa hupima vitu kama joto au mwendo." },
          { objective: "O2", q: "Relay inayowasha feni ni:", options: ["Sensa", "Itifaki", "Dashibodi", "Kiendeshaji"], answer: 3, why: "Viendeshaji hufanya kitu katika ulimwengu halisi." },
          { objective: "O3", q: "Sensa ya udongo iko shambani mbali na Wi-Fi na inatumia betri. Muunganisho gani unafaa zaidi?", options: ["Wi-Fi", "LoRaWAN", "Kebo ya USB", "Bluetooth kwenda simu iliyo mfukoni mwako"], answer: 1, why: "LoRaWAN ina masafa marefu na umeme mdogo kwa data kidogo." },
          { objective: "O3", q: "Katika MQTT, app inapataje vipimo vya friza?", options: ["Inaipigia friza simu", "Inajiunga na mada ambayo friza inachapisha kwayo", "Inavichapisha kwenye karatasi", "Inakisia"], answer: 1, why: "App za MQTT hujiunga na mada ambazo vifaa huchapisha kwazo." }
        ]
      }
    },
    {
      name: "Sura 2: Kujenga na kulinda mradi wa IoT",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kutoka kipimo hadi kitendo: kuandika kanuni ya tahadhari",
          minutes: 6,
          goal: "Andika kanuni rahisi katika Python inayogeuza kipimo cha sensa kuwa tahadhari.",
          text: [
            "Moyo wa miradi mingi ya IoT ni kanuni: kipimo kikivuka kikomo, fanya kitu. Friza ya ghala la chakula ikiwa na joto zaidi ya nyuzi -15 C kwa dakika 10, mtumie meneja ujumbe. Unyevu wa udongo ukishuka chini ya asilimia 30, fungua vali ya maji.",
            "Katika Python, kanuni ni if-statement. Kwa mfano: temp = 28.5, kisha if temp > 27: print(\"ALERT: server closet too hot\") else: print(\"OK\"). Kwenye kifaa halisi kipimo kinatoka kwa sensa, na kitendo kinaweza kuwasha taa ya LED, kuwasha relay au kutuma ujumbe.",
            "Kanuni nzuri huepuka tahadhari za uongo. Kupanda kumoja kwa ghafla kunaweza kuwa ni mlango uliofunguliwa kwa muda mfupi, kwa hiyo mifumo mingi husubiri vipimo kadhaa mfululizo kabla ya kutoa tahadhari. Chagua kikomo pamoja na watu wanaojua vifaa, na amueni nani anapata tahadhari na afanye nini."
          ],
          steps: ["Amua unachopima na kiwango chake salama.", "Chagua kikomo kinachomaanisha tatizo.", "Kiandike kama if reading > limit: (au < limit).", "Amua kitendo: ujumbe, taa au relay.", "Ongeza kanuni ya kuepuka tahadhari za uongo, kama vipimo kadhaa mfululizo."],
          words: [["Kanuni", "agizo la kama-basi: kama hili likitokea, fanya lile."], ["Kikomo (threshold)", "kiwango kinachoanzisha kitendo."], ["Tahadhari ya uongo", "tahadhari wakati hakuna kitu kibaya kweli."], ["Kipimo", "kipimo kimoja kutoka kwa sensa."]],
          slides: [
            { title: "IoT inaendeshwa na kanuni", bullets: ["Kipimo kikivuka kikomo", "Basi fanya kitu", "Friza ina joto sana: mtumie meneja ujumbe"] },
            { title: "Kanuni katika Python", bullets: ["if temp > 27:", "    print(\"ALERT: too hot\")", "else: print(\"OK\")"] },
            { title: "Epuka tahadhari za uongo", bullets: ["Subiri vipimo kadhaa mfululizo", "Weka vikomo pamoja na wataalamu", "Amua nani anachukua hatua, na vipi"] }
          ],
          tryIt: "Fungua Google Colab (colab.research.google.com) au kihariri chochote cha Python. Tengeneza orodha ya vipimo sita vya joto, kama [22, 23, 29, 30, 31, 24]. Pitia kila kimoja kwa kitanzi na uonyeshe \"ALERT\" kwa kipimo chochote zaidi ya 27 na \"OK\" kwa vingine. Ziada: toa tahadhari tu vipimo viwili mfululizo vikiwa zaidi ya 27.",
          youCanNow: "kuandika kanuni rahisi ya tahadhari katika Python inayogeuza vipimo vya sensa kuwa kitendo.",
          quickCheck: [
            { objective: "O4", q: "Kanuni ni: if temp > 27: print(\"ALERT\"). Kipimo ni 25. Nini kinaonyeshwa?", options: ["ALERT", "Hakuna kitu", "Hitilafu", "27"], answer: 1, why: "25 si kubwa kuliko 27, kwa hiyo if-statement haiendeshwi." },
            { objective: "O4", q: "Kengele ya chumba cha seva inalia kila mara mlango unapofunguliwa kwa sekunde moja. Unabadilisha nini?", options: ["Zima kengele kabisa", "Pandisha kikomo hadi nyuzi 100", "Ondoa sensa", "Toa tahadhari tu baada ya vipimo kadhaa vya juu mfululizo"], answer: 3, why: "Kusubiri vipimo kadhaa mfululizo kunazuia tahadhari za uongo kutokana na kupanda kwa muda mfupi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kujaribu kifaa cha kuigiza katika kivinjari chako",
          minutes: 6,
          goal: "Endesha microcontroller ya kuigiza yenye sensa na uone vipimo vikibadilika.",
          text: [
            "Unaweza kufanya mazoezi ya IoT bila kununua vipuri. Kiigizaji (simulator) cha mtandaoni kama Wokwi kinakuwezesha kuweka bodi ya kuigiza kama ESP32, kuongeza sensa kama sensa ya joto na unyevu ya DHT22, na kuendesha code katika kivinjari chako. Kagua tovuti kuona huduma zipi ni za bure na kama unahitaji akaunti.",
            "Njia rahisi zaidi ya kuanza ni kufungua mojawapo ya miradi ya mfano iliyo tayari ya kiigizaji kwa ESP32 yenye DHT22, kisha usome code na uiendeshe. Katika MicroPython, aina ya Python kwa vifaa vidogo, mistari muhimu inaonekana hivi: sensor = dht.DHT22(machine.Pin(15)), kisha sensor.measure() na t = sensor.temperature(). Namba ya pin lazima ilingane na pin ambayo sensa imeunganishwa nayo katika mchoro.",
            "Wakati uigizaji unaendelea unaweza kubofya sensa ya kuigiza na kubadilisha joto lake, kisha uangalie vipimo vinavyoonyeshwa na kanuni yako ya tahadhari ikijibu. Hivyo ndivyo hasa unavyojaribu kifaa halisi kabla ya kukiweka."
          ],
          steps: ["Fungua tovuti ya kiigizaji katika kivinjari chako.", "Tafuta mradi wa mfano wa ESP32 wenye sensa ya DHT22.", "Soma code: tafuta mahali inaposoma sensa na mahali inapoonyesha.", "Anzisha uigizaji na uangalie vipimo.", "Badilisha joto la sensa ya kuigiza na uongeze kanuni yako ya tahadhari kutoka Somo 4."],
          words: [["Kiigizaji (simulator)", "programu inayofanya kazi kama kifaa halisi ili ujaribu bila kukinunua."], ["ESP32", "microcontroller ya bei nafuu yenye Wi-Fi na Bluetooth ndani yake."], ["DHT22", "sensa ya kawaida ya bei nafuu ya joto na unyevu."], ["MicroPython", "toleo dogo la Python linaloendeshwa kwenye microcontroller."], ["Pin", "kiunganishi cha chuma kwenye bodi ambapo vipuri huunganishwa kwa waya."]],
          slides: [
            { title: "Fanya mazoezi bila vipuri", bullets: ["Viigizaji vya mtandaoni vinaendeshwa katika kivinjari", "Bodi ya kuigiza ya ESP32 pamoja na sensa ya DHT22", "Kagua huduma zipi ni za bure"] },
            { title: "Mistari muhimu ya MicroPython", bullets: ["sensor = dht.DHT22(machine.Pin(15))", "sensor.measure()", "t = sensor.temperature()"] },
            { title: "Jaribu kama kifaa halisi", bullets: ["Badilisha joto la kuigiza", "Angalia kanuni yako ya tahadhari ikijibu", "Pin katika code lazima ilingane na waya"] }
          ],
          sources: [WOKWI],
          tryIt: "Fungua mfano wa ESP32 na DHT22 katika kiigizaji cha mtandaoni na uuendeshe. Badilisha joto la sensa ya kuigiza angalau mara mbili na uandike vipimo. Ukiweza, ongeza if-statement inayoonyesha \"ALERT\" juu ya nyuzi 27 C. Usipoweza kutumia kiigizaji, fuatilia code ya mfano kwenye karatasi: weka alama kwenye mstari unaosoma sensa na mstari unaoonyesha.",
          youCanNow: "kuendesha na kujaribu kifaa cha IoT cha kuigiza na kuunganisha vipimo vyake na kanuni ya tahadhari.",
          quickCheck: [
            { objective: "O5", q: "Katika MicroPython, mstari upi unasoma joto baada ya sensor.measure()?", options: ["print(15)", "if temp > 27:", "t = sensor.temperature()", "machine.Pin()"], answer: 2, why: "sensor.temperature() inarudisha kipimo baada ya sensor.measure()." },
            { objective: "O5", q: "Kanuni yako ya tahadhari ya kuigiza hailii kamwe. Unaijaribuje?", options: ["Bofya sensa ya kuigiza na upandishe joto lake juu ya kikomo", "Nunua sensa halisi kwanza", "Futa code na uanze upya", "Badilisha namba ya pin bila mpango"], answer: 0, why: "Kubadilisha kipimo cha sensa ya kuigiza kunakuwezesha kuona kanuni ikijibu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kulinda vifaa vya IoT na kupanga mradi wako",
          minutes: 6,
          goal: "Tumia hatua muhimu za usalama kwa vifaa vilivyounganishwa na umalize mpango wa mradi wako.",
          text: [
            "Vifaa vilivyounganishwa ni shabaha inayopendwa na washambulizi kwa sababu vingi vinakuja na nywila dhaifu za kiwandani na havisasishwi kamwe. Kamera au soketi janja iliyodukuliwa inaweza kupeleleza watu au kutumiwa kushambulia wengine.",
            "Ushauri wa Federal Trade Commission (FTC, tume ya biashara ya Marekani) kwa vifaa vya nyumbani: badilisha jina la mtumiaji na nywila ya kiwandani na usitumie nywila moja mara mbili; washa uthibitishaji wa hatua mbili pale unapotolewa; sasisha firmware na app inayoambatana nacho; zima huduma usizotumia, kama usimamizi wa mbali; na tenganisha vifaa vya zamani. Kwa router: badilisha mipangilio yake ya kiwandani, washa usimbaji fiche (encryption) na ukague masasisho. Mtandao wa wageni unatenganisha vifaa janja na kompyuta zenye mafaili binafsi.",
            "Kazini, pia weka orodha ya kila kifaa kilichounganishwa, weka vifaa vya IoT kwenye mtandao wao wenyewe, na kusanya data unayohitaji tu, hasa kamera au maikrofoni zinapohusika. Uliza timu ya IT au ya usalama ya shirika kabla ya kuunganisha chochote kwenye mtandao wa kazini."
          ],
          steps: ["Badilisha kila nywila ya kiwandani; tumia nywila ya kipekee na yenye nguvu.", "Washa uthibitishaji wa hatua mbili pale unapotolewa.", "Sasisha firmware na app zinazoambatana.", "Zima huduma usizotumia; tenganisha vifaa vya zamani.", "Weka vifaa janja kwenye mtandao tofauti au wa wageni, na uweke orodha ya vifaa."],
          words: [["Nywila ya kiwandani", "nywila ambayo kifaa kinakuja nayo; washambulizi wanajua orodha hizi."], ["Firmware", "programu iliyojengwa ndani inayoendesha kifaa."], ["Uthibitishaji wa hatua mbili", "kuingia kwa nywila pamoja na uthibitisho wa pili, kama msimbo."], ["Mtandao wa wageni", "mtandao tofauti wa Wi-Fi unaoweka vifaa mbali na kompyuta zako kuu."], ["Orodha ya vifaa", "orodha ya kila kifaa kilichounganishwa ulicho na jukumu nacho."]],
          slides: [
            { title: "Kwa nini IoT inashambuliwa", bullets: ["Nywila dhaifu za kiwandani", "Vifaa ambavyo havisasishwi kamwe", "Kamera na maikrofoni zinaweza kuvujisha data binafsi"] },
            { title: "Linda kila kifaa", bullets: ["Badilisha nywila za kiwandani; usirudie nywila", "Hatua mbili pale zinapotolewa", "Sasisha firmware na app", "Zima huduma usizotumia"] },
            { title: "Linda mtandao", bullets: ["Badilisha mipangilio ya kiwandani ya router, washa usimbaji fiche", "Vifaa janja kwenye mtandao wa wageni", "Weka orodha ya vifaa; uliza IT ukiwa kazini"] }
          ],
          sources: [FTC, CISA],
          tryIt: "Kazi ya mwisho: andika mpango wako wa IoT wa ukurasa mmoja (kwa mfano chumba cha seva, friza ya ghala la chakula au bustani). Taja sensa, kifaa, muunganisho na data inakwenda wapi, chora mtiririko kuanzia sensa hadi tahadhari, andika kanuni ya tahadhari kama if-statement ya Python, na orodhesha hatua tano za usalama utakazochukua.",
          youCanNow: "kulinda vifaa vilivyounganishwa na kupanga mradi kamili wa ufuatiliaji wa IoT.",
          quickCheck: [
            { objective: "O6", q: "Kwa nini vifaa vya IoT ni shabaha ya kawaida ya washambulizi?", options: ["Vimezimwa kila wakati", "Vinatumia umeme mwingi sana", "Havina muunganisho wa mtandao", "Vingi vinakuja na nywila dhaifu za kiwandani na havisasishwi kamwe"], answer: 3, why: "Nywila dhaifu za kiwandani na kukosa masasisho hufanya vifaa vingi kuwa rahisi kuvunja." },
            { objective: "O6", q: "Kamera mpya ya mlango ina huduma ya usimamizi wa mbali ambayo hutaitumia. Unafanya nini?", options: ["Iache ikiwa imewashwa ikitokea", "Izime", "Shiriki nywila yake na timu", "Tumia nywila ya barua pepe yako juu yake"], answer: 1, why: "Kuzima huduma usizotumia kunaondoa milango ya washambulizi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kujenga na kulinda mradi wa IoT",
        questions: [
          { objective: "O4", q: "Mstari upi ni kanuni sahihi ya tahadhari ya Python?", options: ["temp > 27 then alert", "alert if temp", "print if temp > 27", "if temp > 27: print(\"ALERT\")"], answer: 3, why: "Python inatumia if, sharti na nukta mbili (:)." },
          { objective: "O4", q: "Kwa nini usubiri vipimo kadhaa vya juu mfululizo kabla ya kutoa tahadhari?", options: ["Kuepuka tahadhari za uongo kutokana na kupanda kwa muda mfupi", "Kuokoa karatasi", "Kwa sababu sensa hukosea kila wakati", "Kupunguza kasi ya kifaa"], answer: 0, why: "Kupanda kumoja, kama mlango ulio wazi, huenda kusiwe tatizo halisi." },
          { objective: "O5", q: "Katika kiigizaji, code yako inasoma pin 15 lakini sensa imeunganishwa kwenye pin 4. Nini kinatokea?", options: ["Inafanya kazi hata hivyo", "Bodi inashika moto", "Code haitapata vipimo kutoka kwa sensa", "Joto linaongezeka mara mbili"], answer: 2, why: "Pin katika code lazima ilingane na waya." },
          { objective: "O6", q: "Ni kitu gani cha KWANZA cha kufanya na kamera janja mpya?", options: ["Baki na nywila ya kiwandani", "Shiriki maelezo yake ya kuingia na marafiki", "Zima masasisho", "Badilisha nywila ya kiwandani iwe ya kipekee na yenye nguvu"], answer: 3, why: "Nywila za kiwandani zinajulikana sana na washambulizi." },
          { objective: "O6", q: "Kwa nini uweke vifaa janja kwenye mtandao wa wageni?", options: ["Ili viwe na kasi zaidi", "Kwa sababu havihitaji nywila", "Kuvitenganisha na kompyuta zenye mafaili binafsi", "Kuzima usimbaji fiche"], answer: 2, why: "Kutenganisha kunapunguza kile ambacho kifaa kilichodukuliwa kinaweza kufikia." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Utangulizi wa Intaneti ya Vitu (IoT)",
    questions: [
      { objective: "O1", q: "Intaneti ya Vitu ni:", options: ["Mitandao ya kijamii tu", "Vitu halisi vyenye sensa vinavyoungana na kushiriki data", "Aina ya karatasi ya printa", "Mchezo wa kompyuta"], answer: 1, why: "IoT ni vitu vilivyounganishwa vinavyohisi na kushiriki." },
      { objective: "O1", q: "Kutumia data ya sensa kurekebisha mashine kabla haijaharibika kunaitwa:", options: ["Matengenezo ya kutabiri", "Phishing (ulaghai wa mtandaoni)", "Hifadhi ya pembeni (edge storage)", "Firmware"], answer: 0, why: "Matengenezo ya kutabiri hugundua matatizo mapema." },
      { objective: "O1", q: "Kwa nini usalama ni sehemu ya kila kazi ya IoT?", options: ["Vifaa vya IoT haviwezi kudukuliwa", "Unahitajika kwa simu tu", "Kila kifaa kilichounganishwa kinaweza kuwa mlango kwa washambulizi", "Unafanya vifaa kuwa nafuu zaidi"], answer: 2, why: "Vifaa vingi zaidi vinamaanisha milango mingi zaidi." },
      { objective: "O2", q: "Tabaka nne za mfumo wa IoT ni zipi?", options: ["Sensa, kifaa, muunganisho, wingu au app", "Kibodi, kipanya, skrini, printa", "Barua pepe, ujumbe, simu, posta", "Moto, baridi kidogo, baridi, hifadhi"], answer: 0, why: "Data inatiririka kutoka sensa hadi kifaa hadi muunganisho hadi wingu au app." },
      { objective: "O2", q: "Kompyuta ndogo ya bei nafuu kwenye chipu inayoendesha programu moja ni:", options: ["Shamba la seva", "Router", "Dashibodi", "Microcontroller"], answer: 3, why: "Bodi kama ESP32 na Arduino ni microcontroller." },
      { objective: "O2", q: "Mota inayofungua vali ya maji ni:", options: ["Sensa", "Kiendeshaji", "Itifaki", "Mada"], answer: 1, why: "Viendeshaji hutenda katika ulimwengu halisi." },
      { objective: "O2", q: "Kufanya maamuzi kwenye kifaa badala ya kwenye wingu ni:", options: ["Malipo ya wingu", "Edge computing", "Bluetooth", "Tahadhari ya uongo"], answer: 1, why: "Edge computing huchakata data karibu na mahali inapokusanywa." },
      { objective: "O3", q: "Muunganisho upi ni bora kwa bangili ya mazoezi inayowasiliana na simu yako?", options: ["LoRaWAN", "Kebo ya waya", "TV ya satelaiti", "Bluetooth Low Energy"], answer: 3, why: "BLE ina umeme mdogo na umbali mfupi." },
      { objective: "O3", q: "Muunganisho upi unafaa kwa kifaa cha GPS kwenye lori la usafirishaji?", options: ["Mtandao wa simu", "Wi-Fi ya nyumbani", "Kebo ya USB", "Bluetooth tu"], answer: 0, why: "Mtandao wa simu unafanya kazi karibu kila mahali penye mtandao." },
      { objective: "O3", q: "Katika MQTT, friza inatuma kipimo chake kwa:", options: ["Kukichapisha kwenye karatasi", "Kumpigia meneja simu", "Kuchapisha (publish) kwenye mada", "Kukihifadhi kwenye flash ya USB"], answer: 2, why: "Vifaa huchapisha; app hujiunga." },
      { objective: "O3", q: "Vifaa vya IoT vya betri vinadumu muda mrefu vipi?", options: ["Havijawahi kuwashwa", "Vinatumia Wi-Fi ya kasi zaidi", "Vinatuma video siku nzima", "Vinalala muda mwingi na kuamka kusoma na kutuma"], answer: 3, why: "Kulala kunaokoa umeme." },
      { objective: "O4", q: "Kanuni katika IoT kwa kawaida inamaanisha:", options: ["Rula ya kupimia", "Kanuni ya nywila", "Kipimo kikivuka kikomo, fanya kitu", "Kebo"], answer: 2, why: "Kanuni hugeuza vipimo kuwa vitendo." },
      { objective: "O4", q: "readings = [20, 28, 22]. Kwa kanuni \"tahadhari juu ya 27\", tahadhari ngapi?", options: ["0", "1", "2", "3"], answer: 1, why: "Ni 28 tu iliyo juu ya 27." },
      { objective: "O4", q: "Tahadhari inalia mtu anapofungua mlango wa friza kwa sekunde moja. Hii ni:", options: ["Tahadhari ya uongo", "Edge computing", "Sasisho la firmware", "Usimbaji fiche"], answer: 0, why: "Kupanda kwa muda mfupi ambako si tatizo halisi ni tahadhari ya uongo." },
      { objective: "O5", q: "Kwa nini utumie kiigizaji kabla ya kununua vipuri?", options: ["Kwa sababu vifaa halisi havifanyi kazi kamwe", "Kuepuka kujifunza code", "Kujaribu muundo na code kwanza bure au kwa gharama ndogo", "Viigizaji vinatakiwa na sheria"], answer: 2, why: "Viigizaji vinakuwezesha kujaribu bila vifaa halisi." },
      { objective: "O5", q: "MicroPython ni:", options: ["Toleo dogo la Python kwa microcontroller", "Nyoka", "Aina ya sensa", "Chapa ya Wi-Fi"], answer: 0, why: "Inaendesha code ya Python kwenye bodi ndogo." },
      { objective: "O5", q: "DHT22 hupima:", options: ["Mahali kwa GPS", "Mapigo ya moyo", "Video", "Joto na unyevu"], answer: 3, why: "Ni sensa ya joto na unyevu." },
      { objective: "O6", q: "Chaguo lipi ni salama zaidi kwa nywila ya soketi janja mpya?", options: ["Acha ile ya kiwandani", "Nywila ya kipekee na yenye nguvu", "Tumia nywila ile ile ya barua pepe yako", "\"password123\""], answer: 1, why: "Nywila za kipekee na zenye nguvu huzuia uvunjaji rahisi." },
      { objective: "O6", q: "Unapaswa kufanya nini na firmware ya vifaa vya IoT?", options: ["Usiisasishe kamwe", "Isasishe kila wakati", "Ifute", "Ishiriki mtandaoni"], answer: 1, why: "Masasisho huziba mianya ya usalama." },
      { objective: "O6", q: "Unataka kuunganisha sensa kwenye mtandao wa kazini kwako. Unafanya nini kwanza?", options: ["Ichomeke kimya kimya", "Zima firewall", "Shiriki nywila ya Wi-Fi mtandaoni", "Uliza timu ya IT au ya usalama"], answer: 3, why: "Mitandao ya kazini ina kanuni; IT lazima iidhinishe vifaa vipya." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      2,
      3,
      6,
      7,
      9,
      11,
      14,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Sehemu za mfumo",
        objective: "O2",
        notYet: "Sensa, kifaa au mahali data inakwenda havipo.",
        meets: "Inataja sensa, kifaa, muunganisho na mahali data inakwenda.",
        exceeds: "Pia inataja kiendeshaji au uamuzi wa edge na kusema kwa nini unasaidia."
      },
      {
        name: "Mchoro wa mtiririko wa data",
        objective: "O2",
        notYet: "Hakuna mchoro, au hatua haziko kwa mpangilio.",
        meets: "Mchoro unaonyesha sensa, kifaa, muunganisho, wingu au app, na tahadhari kwa mpangilio.",
        exceeds: "Mchoro pia unaonyesha nani anapata tahadhari na anafanya nini."
      },
      {
        name: "Chaguo la muunganisho",
        objective: "O3",
        notYet: "Muunganisho haulingani na mahali au umeme, kama Wi-Fi shambani pasipo na Wi-Fi.",
        meets: "Muunganisho unalingana na umbali, umeme na data ya mradi.",
        exceeds: "Inaeleza kwa nini muunganisho mwingine mmoja usingefaa vizuri hivyo."
      },
      {
        name: "Kanuni ya tahadhari",
        objective: "O4",
        notYet: "Kanuni haipo au isingefanya kazi, kama ulinganisho usio sahihi.",
        meets: "If-statement sahihi ya Python yenye kikomo na kitendo kinachoeleweka.",
        exceeds: "Pia inaepuka tahadhari za uongo, kama kusubiri vipimo kadhaa, na ilijaribiwa katika kiigizaji."
      },
      {
        name: "Hatua za usalama",
        objective: "O6",
        notYet: "Hatua chini ya tano, au hatua zisizolinda vifaa.",
        meets: "Hatua tano sahihi, kama nywila za kipekee, masasisho na mtandao tofauti.",
        exceeds: "Pia inajumuisha orodha ya vifaa na kuuliza IT kabla ya kuunganisha kazini."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoongeza ujuzi wa IoT au sensa kwenye CV au wanaoomba kazi ya majengo, usafirishaji au IT ndani ya siku 60",
      "Wanafunzi wanaoripoti kubadilisha nywila za kiwandani au kusasisha vifaa janja nyumbani ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoanza kozi ya Python, mitandao au usalama wa mtandao baadaye"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye kivinjari cha wavuti na intaneti",
      "Kiigizaji cha bure cha IoT mtandaoni, kama Wokwi (kagua huduma zake za bure za sasa)",
      "Karatasi na kalamu, au hati, kwa mpango wa ukurasa mmoja na mchoro wa mtiririko wa data",
      "Kama dakika 60 kwa jumla: masomo, mazoezi ya kiigizaji, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha fanyeni sura moja kwa kila kipindi; endesha kiigizaji kwenye skrini ya pamoja kabla wanafunzi hawajajaribu.",
      "Waalike wanajeshi wastaafu kulinganisha IoT na ukaguzi wa vifaa vya kijeshi, viungo vya redio na taratibu za tahadhari wanazozijua tayari.",
      "Mpe kila mwanafunzi au jozi mradi tofauti (chumba cha seva, friza ya ghala la chakula, bustani) ili mipango iweze kulinganishwa.",
      "Usiunganishe kifaa chochote halisi kwenye mtandao wa programu au wa kazini bila idhini ya timu ya IT au ya usalama.",
      "Pima mpango wa mwisho kwa rubriki, na utoe maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};

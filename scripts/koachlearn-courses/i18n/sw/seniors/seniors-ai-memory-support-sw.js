"use strict";

// Koach Learn course (Swahili translation of seniors/seniors-ai-memory-support.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Si ushauri wa kitabibu: kozi inasema mabadiliko ya kumbukumbu yanayotia wasiwasi ni kwa daktari, na inaelekeza kwa MedlinePlus kwa taarifa za afya zinazoaminika.

module.exports = {
  id: "seniors-ai-memory-support-sw",
  lang: "sw",
  translationOf: "seniors-ai-memory-support",
  category: "Seniors and Technology",
  name: "AI kwa Kusaidia Kumbukumbu",
  skills: "Kuweka vikumbusho na maelezo kwa sauti, Kutumia picha kusaidia kukumbuka, Kutengeneza orodha za ukaguzi kwa AI, Kufupisha miadi na simu, Kujenga utaratibu wa kila siku wa kukumbuka",
  outcome: "kuandaa zana rahisi za kumbukumbu kwenye simu yako: vikumbusho vya sauti, orodha ya maelezo, picha za kukusaidia kukumbuka na orodha ya ukaguzi iliyotengenezwa na AI, na kuzitumia katika utaratibu wa kila siku.",
  about: [
    "Kila mtu husahau mambo: gari limeegeshwa wapi, jiko limezimwa au la, daktari alisema nini. Kozi hii ni kwa wazee, na wanafamilia wanaowasaidia, wanaotaka zana rahisi za kukumbuka mambo ya kila siku kwa urahisi zaidi.",
    "Utatumia msaidizi wa sauti wa simu yako, maelezo (Notes), kamera na msaidizi wa AI wa bure kama ChatGPT, Microsoft Copilot au Google Gemini kuweka vikumbusho, kutunza orodha, kutengeneza orodha za ukaguzi, na kufupisha yaliyosemwa kwenye miadi.",
    "Zana hizi zinasaidia kumbukumbu; hazitambui wala kutibu ugonjwa wowote. Kama wewe au familia yako mna wasiwasi kuhusu mabadiliko ya kumbukumbu, ongea na daktari wako. Kila somo linachukua kama dakika tano. Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Jenga zana zako za kumbukumbu: weka vikumbusho viwili vya sauti vinavyojirudia, anzisha maelezo yanayoitwa \"Mambo ya kukumbuka\", piga picha moja ya kukusaidia kukumbuka (kama ulipoegesha gari au lebo unayohitaji), mwombe AI orodha ya ukaguzi ya \"kabla sijaondoka nyumbani\", na uvitumie vyote kwa siku moja nzima.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wazee wanaogundua kusahau kwa kila siku, kama miadi, majina, walipoegesha gari au daktari alisema nini, na wanataka zana rahisi za kujipanga na kujitegemea. Baadhi wanasaidiwa na wanafamilia wanaowatunza.",
    startingPoint: "Wana simu janja na wanapiga simu na kutuma ujumbe mfupi. Wengi wanategemea karatasi au kumbukumbu peke yake, na hawajawahi kutumia vikumbusho vya sauti, maelezo yaliyobanwa juu, albamu za picha au orodha za ukaguzi za AI.",
    gap: "Kusahau miadi, dawa au yaliyosemwa kwa daktari kunaleta msongo wa mawazo na kunaweza kuathiri afya na usalama. Zana rahisi za simu zinazotumiwa kila siku zinawasaidia wazee kukumbuka zaidi na kujitegemea, huku namba za siri zikikaa nje ya maelezo na picha, na mabadiliko ya kumbukumbu yanayotia wasiwasi yakipelekwa kwa daktari.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi, sentensi fupi na hatua kubwa na rahisi",
      "Vifaa: simu janja yenye msaidizi wa sauti, Notes au Google Keep, na kamera",
      "Muda: kama dakika 5 kwa kila somo kwa mwendo wa taratibu, kisha siku moja nzima ya mazoezi",
      "Afya: kozi inasaidia kumbukumbu ya kila siku; mabadiliko yanayotia wasiwasi ni kwa daktari",
      "Faragha: hakuna nywila, namba za benki wala za Social Security katika maelezo, picha au prompt za AI"
    ],
    prerequisites: "Hakuna. Kozi ya \"AI katika Maisha ya Kila Siku\" ni mwenzi mzuri wa kozi hii."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Mara tu unapokumbuka jambo la kufanya", action: "kuweka kikumbusho cha sauti kinachosema nini na lini, ukitumia \"kila\" kwa vinavyojirudia", standard: "na kukiweka alama kimekamilika ukimaliza" },
    { id: "O2", condition: "Ukitumia Notes au Google Keep", action: "kutunza maelezo ya \"Mambo ya kukumbuka\" yaliyobanwa juu na kuongeza kwa kuandika au kwa sauti", standard: "bila nywila wala namba za siri ndani yake" },
    { id: "O3", condition: "Ukipewa jambo unalohitaji kukumbuka, kama ulipoegesha gari", action: "kupiga picha ya kukusaidia kukumbuka na kuipata tena kwenye picha za karibuni au albamu", standard: "bila kupiga picha kadi au hati za siri" },
    { id: "O4", condition: "Ukipewa kazi unayoifanya mara kwa mara", action: "kumwomba AI orodha fupi ya ukaguzi, kuirekebisha ikufae na kuiweka mahali utakapoiona", standard: "yenye vitu visivyozidi takriban vinane rahisi" },
    { id: "O5", condition: "Baada ya miadi au simu muhimu", action: "kugeuza maelezo yako kuwa muhtasari mfupi na orodha ya kazi kwa msaada wa AI", standard: "taarifa za siri zikiwa zimeondolewa na jambo lisilo wazi likithibitishwa na ofisi" },
    { id: "O6", condition: "Kila siku", action: "kufuata utaratibu rahisi wa kumbukumbu wenye ukaguzi wa asubuhi na jioni", standard: "na kuongea na daktari wako kuhusu mabadiliko ya kumbukumbu yanayokutia wasiwasi" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuweka unachohitaji kukumbuka",
      lessons: [
        {
          objectives: ["O1"],
          title: "Vikumbusho vya sauti mara tu unapokumbuka",
          minutes: 5,
          goal: "Weka kikumbusho kwa sauti kabla hujasahau.",
          text: [
            "Wakati bora wa kuweka kikumbusho ni pale pale unapokikumbuka. Msaidizi wa sauti wa simu yako (Siri kwenye iPhone, Google Assistant au Gemini kwenye Android) unafanya hili haraka: huhitaji kuandika wala kutafuta kalamu.",
            "Sema: \"Nikumbushe kupiga simu kwa duka la dawa kesho saa 10 asubuhi.\" \"Nikumbushe kumwagilia mimea kila Jumatatu.\" \"Nikumbushe kuchukua mwavuli ninapotoka nyumbani\" inafanya kazi kwenye baadhi ya simu, zinazoweza kukukumbusha kulingana na mahali ulipo.",
            "Kikumbusho kikitokea, kifanyie kazi au gusa kukiahirisha (snooze). Kiweke alama kimekamilika ukimaliza, ili orodha yako ibaki safi."
          ],
          steps: ["Amsha msaidizi wako wa sauti.", "Sema \"Nikumbushe...\" pamoja na nini na lini.", "Tumia \"kila\" kwa vikumbusho vinavyojirudia.", "Kikitokea, kifanye au kiahirishe.", "Kiweke alama kimekamilika."],
          words: [["Kuahirisha (snooze)", "kuchelewesha kikumbusho ili kirudi baada ya muda mfupi."], ["Kikumbusho kinachojirudia", "kikumbusho kinachorudi kwa ratiba, kama kila Jumatatu."]],
          slides: [
            { title: "Kiweke pale pale", bullets: ["Mara tu unapokumbuka", "Bila kuandika, bila kalamu"] },
            { title: "Sema", bullets: ["\"Nikumbushe kupiga simu duka la dawa saa 10 asubuhi.\"", "\"Nikumbushe kumwagilia mimea kila Jumatatu.\""] },
            { title: "Kikitokea", bullets: ["Kifanye, au kiahirishe", "Kiweke alama kimekamilika"] }
          ],
          tryIt: "Weka vikumbusho viwili kwa sauti: kimoja cha kesho na kimoja kinachojirudia kila wiki.",
          youCanNow: "kuweka kwa sauti vikumbusho vya mara moja na vinavyojirudia.",
          quickCheck: [
            { objective: "O1", q: "Kuahirisha (snooze) kikumbusho kunafanya nini?", options: ["Kunakifuta", "Kunakichelewesha kidogo ili kirudi", "Kunakiweka alama kimekamilika", "Kunakituma kwa familia"], answer: 1, why: "Snooze inachelewesha kikumbusho kidogo; kiweke alama kimekamilika ukimaliza." },
            { objective: "O1", q: "Ukiwa unapika unakumbuka lazima upige simu benki kesho. Unafanya nini?", options: ["Unatumaini utakumbuka", "Utaandika kwenye kitambaa baadaye", "Unaiambia simu: \"Nikumbushe kupiga simu benki kesho saa 10 asubuhi.\"", "Unapiga simu benki sasa hivi usiku"], answer: 2, why: "Weka kikumbusho pale pale unapokumbuka, kwa sauti, pamoja na nini na lini." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Orodha ya maelezo ya mambo ya kukumbuka",
          minutes: 5,
          goal: "Tunza maelezo ya \"Mambo ya kukumbuka\" kwenye simu yako na uongeze kwa sauti.",
          text: [
            "Mambo mengine hayana wakati maalum: jina la jirani mpya, kitabu alichopendekeza rafiki, ulipoweka ufunguo wa akiba. Mambo haya yanakaa kwenye maelezo.",
            "Fungua app ya Notes (au Google Keep kwenye simu nyingi za Android) na uunde maelezo yanayoitwa \"Mambo ya kukumbuka\". Yabane juu (pin) kama app yako inaruhusu. Unaweza kuongeza kwa kuandika au kwa kugusa kipaza sauti kwenye kibodi na kuongea.",
            "Weka maelezo kuwa rahisi: mstari mmoja kwa kila jambo, jipya kabisa juu. Kamwe usihifadhi nywila, namba za benki wala namba za Social Security katika maelezo ya kawaida."
          ],
          steps: ["Fungua Notes au Google Keep.", "Unda maelezo yanayoitwa \"Mambo ya kukumbuka\".", "Yabane juu kama unaweza.", "Ongeza mambo kwa kuandika au kwa kipaza sauti cha kibodi.", "Weka namba za siri nje yake."],
          words: [["App ya Notes", "app ya kuandika na kuhifadhi maelezo kwenye simu yako."], ["Kubana juu (pin)", "kuweka kitu juu ya orodha ili kiwe rahisi kupata."]],
          slides: [
            { title: "Halina wakati maalum?", bullets: ["Jina la jirani", "Kitabu cha kusoma", "Ufunguo wa akiba uko wapi"] },
            { title: "Unda maelezo yako", bullets: ["Notes au Google Keep", "Yaite \"Mambo ya kukumbuka\"", "Yabane juu"] },
            { title: "Rahisi na salama", bullets: ["Mstari mmoja kwa kila jambo", "Tumia kipaza sauti cha kibodi", "Hakuna nywila wala namba za benki"] }
          ],
          tryIt: "Unda maelezo ya \"Mambo ya kukumbuka\" na uongeze mambo matatu, angalau moja kwa kuongea ukitumia kipaza sauti cha kibodi.",
          youCanNow: "kutunza orodha ya maelezo ya mambo unayotaka kukumbuka na kuongeza kwa sauti.",
          quickCheck: [
            { objective: "O2", q: "Kubana maelezo juu kunafanya nini?", options: ["Kunayaweka juu ya maelezo yako", "Kunayafunga kwa nywila", "Kunayafuta baada ya siku moja", "Kunayashiriki na familia"], answer: 0, why: "Kubana juu kunaweka maelezo yako ya \"Mambo ya kukumbuka\" juu ambapo unaweza kuyapata." },
            { objective: "O2", q: "Rafiki anakupendekezea kitabu ukiwa nje. Kinaenda wapi?", options: ["Kwenye kikumbusho chenye saa", "Kwenye app ya benki", "Popote; utakumbuka", "Kwenye maelezo yako ya \"Mambo ya kukumbuka\""], answer: 3, why: "Mambo yasiyo na wakati maalum, kama jina la kitabu, yanakaa kwenye maelezo yako." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Picha za kukusaidia kukumbuka",
          minutes: 4,
          goal: "Tumia kamera yako kukumbuka vitu viko wapi na vinasema nini.",
          text: [
            "Picha ya haraka inaweza kukukumbukia mambo. Piga picha ya bango la mahali pa kuegesha au namba ya ghorofa, ndani ya friji kabla ya kununua vitu, lebo ya balbu unayohitaji kubadilisha, au vifundo vya jiko vikiwa vimezimwa kabla hujaondoka.",
            "Ili kuzipata baadaye, unda albamu inayoitwa \"Saidia kumbukumbu\" kwenye app ya picha, au angalia tu picha zako za karibuni. Zifute usipozihitaji tena.",
            "Usipige picha hati za siri kama kadi za benki au kadi yako ya Social Security kwa kusudi hili; simu yako ikipotea, picha hizo zinaweza kutumiwa vibaya."
          ],
          steps: ["Piga picha ya haraka ya kitu cha kukumbuka.", "Angalia picha za karibuni, au tunza albamu ya \"Saidia kumbukumbu\".", "Futa picha za kumbukumbu ukimaliza.", "Usipige picha kadi au hati za siri."],
          words: [["Kisaidizi cha kumbukumbu", "chochote kinachokusaidia kukumbuka, kama maelezo, kengele au picha."]],
          slides: [
            { title: "Kamera ikukumbukie", bullets: ["Mahali pa kuegesha", "Ndani ya friji", "Lebo unayohitaji", "Vifundo vya jiko vimezimwa"] },
            { title: "Zipate baadaye", bullets: ["Angalia picha za karibuni", "Au albamu ya \"Saidia kumbukumbu\"", "Futa ukimaliza"] },
            { title: "Kuwa salama", bullets: ["Hakuna picha za kadi za benki au kitambulisho"] }
          ],
          tryIt: "Piga picha moja ya kukusaidia kukumbuka leo, kama ndani ya friji yako au ulipoegesha gari. Itafute tena kwenye picha zako baada ya saa moja.",
          youCanNow: "kutumia picha kukumbuka vitu viko wapi na vinasema nini.",
          quickCheck: [
            { objective: "O3", q: "Kwa nini usitunze picha ya kadi yako ya benki kama kisaidizi cha kumbukumbu?", options: ["Picha za kadi huwa hazionekani vizuri", "Simu yako ikipotea, picha inaweza kutumiwa vibaya", "Inachukua nafasi kubwa mno", "Benki hairuhusu picha"], answer: 1, why: "Picha za kadi za siri zinaweza kutumiwa vibaya simu ikipotea." },
            { objective: "O3", q: "Unaegesha ghorofa ya 3 ya jengo kubwa la maegesho. Njia ya haraka ya kukumbuka ni ipi?", options: ["Piga picha ya bango la ghorofa", "Iandike kwenye ujumbe kwa mgeni", "Hesabu magari", "Acha gari bila kufunga"], answer: 0, why: "Picha ya haraka ya bango la maegesho inakukumbukia." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuweka unachohitaji kukumbuka",
        questions: [
          { objective: "O1", q: "Wakati bora wa kuweka kikumbusho ni lini?", options: ["Jumapili tu", "Wiki ijayo", "Pale pale unapokikumbuka", "Kamwe"], answer: 2, why: "Kuweka mara moja kunazuia kusahau." },
          { objective: "O1", q: "Ombi lipi la sauti linaweka kikumbusho cha kila wiki?", options: ["\"Nikumbushe kumwagilia mimea kila Jumatatu.\"", "\"Mimea.\"", "\"Jumatatu.\"", "\"Maji.\""], answer: 0, why: "\"Kila\" kinakifanya kijirudie." },
          { objective: "O2", q: "Jina la jirani mpya linaenda wapi?", options: ["Kwenye ujumbe kwa wageni", "Kwenye sehemu ya nywila", "Popote", "Kwenye maelezo yako ya \"Mambo ya kukumbuka\""], answer: 3, why: "Maelezo yanatunza mambo yasiyo na wakati maalum." },
          { objective: "O2", q: "Nini KAMWE kisiwekwe katika maelezo ya kawaida?", options: ["Jina la kitabu", "Nywila na namba za benki", "Jina la jirani", "Mapishi"], answer: 1, why: "Maelezo ya kawaida si salama kwa namba za siri." },
          { objective: "O3", q: "Picha ipi ni nzuri kukusaidia kukumbuka?", options: ["Kadi yako ya benki", "Bango la ghorofa ya maegesho", "Kadi yako ya Social Security", "Nywila yako"], answer: 1, why: "Kadi za siri hazipaswi kupigwa picha kwa ajili ya vikumbusho." }
        ]
      }
    },
    {
      name: "Sura 2: Utaratibu na wasaidizi wa AI",
      lessons: [
        {
          objectives: ["O4"],
          title: "Orodha za ukaguzi zilizotengenezwa na AI",
          minutes: 5,
          goal: "Mwombe AI orodha fupi ya ukaguzi kwa kazi unayoifanya mara kwa mara.",
          text: [
            "Orodha za ukaguzi zinamsaidia kila mtu, kuanzia marubani hadi madaktari. Msaidizi wa AI anaweza kutengeneza moja kwa kazi yoyote ya kawaida: kutoka nyumbani, kujiandaa kwa safari, au usiku kabla ya miadi.",
            "Uliza: \"Nitengenezee orodha fupi ya ukaguzi ya kutoka nyumbani: vitu visivyozidi vinane, kwa maneno rahisi.\" Kisha irekebishe ikufae nyumbani kwako: \"Ongeza: kagua mlango wa nyuma. Ondoa: lisha paka.\"",
            "Ichapishe na uibandike karibu na mlango, au ihifadhi kwenye Notes. Orodha ya ukaguzi inasaidia tu ikiwa mahali utakapoiona kwa wakati unaofaa."
          ],
          steps: ["Chagua kazi unayoifanya mara kwa mara.", "Mwombe AI orodha fupi ya ukaguzi kwa maneno rahisi.", "Ongeza au ondoa vitu ili ikufae.", "Iweke mahali utakapoiona kwa wakati unaofaa."],
          words: [["Orodha ya ukaguzi", "orodha ya hatua unazoweka alama moja baada ya nyingine."]],
          slides: [
            { title: "Orodha za ukaguzi zinasaidia kila mtu", bullets: ["Kutoka nyumbani", "Kujiandaa kwa safari", "Usiku kabla ya miadi"] },
            { title: "Muulize AI", bullets: ["\"Orodha fupi ya ukaguzi, vitu visivyozidi vinane\"", "Kisha ongeza au ondoa vitu"] },
            { title: "Iweke mahali sahihi", bullets: ["Ibandike karibu na mlango", "Au ihifadhi kwenye Notes"] }
          ],
          tryIt: "Mwombe msaidizi wa AI orodha ya ukaguzi ya \"kabla sijaondoka nyumbani\" yenye vitu visivyozidi vinane. Ibadilishe ikufae nyumbani kwako, na uichapishe au uihifadhi.",
          youCanNow: "kutengeneza orodha yako ya ukaguzi kwa AI na kuiweka mahali inaposaidia.",
          quickCheck: [
            { objective: "O4", q: "Orodha ya ukaguzi inasaidia zaidi lini?", options: ["Ikihifadhiwa mahali usipoangalia kamwe", "Ikiwa ndefu sana", "Ikiwa mahali utakapoiona kwa wakati unaofaa", "Ikiwa AI peke yake ndiye anaweza kuisoma"], answer: 2, why: "Orodha ya ukaguzi inasaidia tu ukiiona kwa wakati unaofaa, kama karibu na mlango." },
            { objective: "O4", q: "Orodha ya AI inasema \"lisha paka\" lakini huna paka. Unafanya nini?", options: ["Unanunua paka", "Unaomba orodha mpya kila siku", "Unapuuza orodha nzima", "Unaondoa kitu hicho na kuongeza unavyohitaji"], answer: 3, why: "Rekebisha orodha ili ikufae nyumbani kwako." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kukumbuka yaliyosemwa kwenye miadi",
          minutes: 5,
          goal: "Andika mambo muhimu ya miadi au simu na uyageuze kuwa muhtasari ulio wazi.",
          text: [
            "Ni rahisi kusahau alichosema daktari, wakili au fundi. Beba orodha ya maswali iliyoandikwa, na uandike majibu, au mwombe mwanafamilia aje nawe na aandike maelezo.",
            "Baadaye, andika maelezo yako ya haraka kwenye msaidizi wa AI, bila majina, tarehe za kuzaliwa wala namba za akaunti, na uulize: \"Geuza maelezo haya kuwa muhtasari mfupi pamoja na orodha ya mambo ninayohitaji kufanya.\" Hifadhi muhtasari kwenye Notes.",
            "Jambo lolote likiwa halieleweki, piga simu ofisini kuthibitisha. Ofisi nyingi za madaktari pia huweka muhtasari wa ziara kwenye tovuti ya wagonjwa (patient portal). Baadhi ya watu huuliza kama wanaweza kurekodi ziara kwenye simu; daima omba ruhusa kwanza."
          ],
          steps: ["Beba orodha ya maswali na uandike majibu.", "Njoo na mwanafamilia kama unaweza.", "Andika maelezo ya haraka kwenye AI bila taarifa za siri.", "Omba muhtasari na orodha ya kazi.", "Thibitisha jambo lisilo wazi na ofisi."],
          words: [["Muhtasari", "toleo fupi la mambo makuu."], ["Tovuti ya wagonjwa (patient portal)", "tovuti au app ambapo ofisi ya daktari wako inashiriki maelezo ya ziara na matokeo."]],
          slides: [
            { title: "Andika wakati huo huo", bullets: ["Beba maswali, andika majibu", "Njoo na mwanafamilia"] },
            { title: "AI ayapange", bullets: ["Andika maelezo bila taarifa za siri", "Omba muhtasari na orodha ya kazi", "Uhifadhi kwenye Notes"] },
            { title: "Thibitisha", bullets: ["Piga simu ofisini kama haieleweki", "Angalia tovuti ya wagonjwa", "Omba ruhusa kabla ya kumrekodi mtu"] }
          ],
          tryIt: "Andika maelezo matatu ya haraka kutoka simu au miadi ya karibuni (acha majina na namba). Mwombe msaidizi wa AI ayageuze kuwa muhtasari mfupi pamoja na orodha ya kazi, na uuhifadhi.",
          youCanNow: "kuandika na kufupisha yaliyosemwa kwenye miadi au simu.",
          quickCheck: [
            { objective: "O5", q: "Tovuti ya wagonjwa (patient portal) ni nini?", options: ["Mlango wa hospitali", "Tovuti au app ambapo ofisi ya daktari wako inaweza kushiriki maelezo ya ziara", "Duka la dawa", "Msaidizi wa AI"], answer: 1, why: "Ofisi nyingi za madaktari huweka muhtasari wa ziara kwenye tovuti ya wagonjwa." },
            { objective: "O5", q: "Unataka kurekodi anachosema daktari kwenye simu yako. Unafanya nini kwanza?", options: ["Unaomba ruhusa", "Unaficha simu", "Unarekodi bila kusema chochote", "Unaweka rekodi mtandaoni"], answer: 0, why: "Daima omba ruhusa kabla ya kurekodi ziara." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Utaratibu wa kila siku wa kumbukumbu",
          minutes: 5,
          goal: "Unganisha zana zako za kumbukumbu katika utaratibu rahisi wa kila siku.",
          text: [
            "Zana zinafanya kazi vizuri zaidi zikiwa mazoea. Utaratibu rahisi wa kila siku: asubuhi, angalia vikumbusho na kalenda ya leo. Mchana, weka vikumbusho na maelezo pale pale unapokumbuka. Kabla ya kulala, angalia vikumbusho vya kesho na maelezo yako ya \"Mambo ya kukumbuka\".",
            "Weka vitu mahali pale pale kila siku: funguo, miwani na simu katika bakuli moja karibu na mlango. Kifaa cha kufuatilia kwenye funguo zako (kama Apple AirTag au Tile) kinaweza kukusaidia kuzipata kwa simu yako.",
            "Jihurumie. Kusahau baadhi ya mambo ni kawaida. Kama wewe au familia yako mnaona mabadiliko ya kumbukumbu yanayotia wasiwasi, kama kupotea mahali unapopajua au shida na kazi za kila siku, ongea na daktari wako. MedlinePlus (medlineplus.gov) ina taarifa zinazoaminika kuhusu kumbukumbu."
          ],
          steps: ["Asubuhi: angalia vikumbusho na kalenda.", "Mchana: weka vikumbusho na maelezo mara moja.", "Jioni: angalia ya kesho na maelezo yako.", "Weka funguo, miwani na simu mahali pamoja.", "Ongea na daktari kuhusu mabadiliko yanayotia wasiwasi."],
          words: [["Kifaa cha kufuatilia", "kifaa kidogo kwenye funguo au mfuko ambacho simu yako inaweza kukipata."]],
          slides: [
            { title: "Utaratibu rahisi wa kila siku", bullets: ["Asubuhi: angalia vikumbusho na kalenda", "Mchana: weka mara moja", "Jioni: angalia ya kesho"] },
            { title: "Mahali pale pale kila siku", bullets: ["Funguo, miwani, simu katika bakuli moja", "Kifaa cha kufuatilia husaidia kupata funguo"] },
            { title: "Jihurumie", bullets: ["Kusahau kiasi ni kawaida", "Una wasiwasi? Ongea na daktari wako", "MedlinePlus ina taarifa zinazoaminika"] }
          ],
          sources: [{ name: "MedlinePlus (National Library of Medicine)", url: "https://medlineplus.gov/" }],
          tryIt: "Kazi ya mwisho: jenga zana zako za kumbukumbu (vikumbusho viwili vya sauti vinavyojirudia, maelezo ya \"Mambo ya kukumbuka\", picha moja ya kukusaidia kukumbuka, na orodha ya ukaguzi ya \"kabla sijaondoka nyumbani\" iliyotengenezwa na AI) na uvitumie vyote kwa siku moja nzima pamoja na ukaguzi wa asubuhi na jioni.",
          youCanNow: "kutumia vikumbusho, maelezo, picha, orodha za ukaguzi na muhtasari wa AI katika utaratibu wa kila siku unaosaidia kumbukumbu yako.",
          quickCheck: [
            { objective: "O6", q: "Mazoea mazuri ya jioni kwa kumbukumbu ni yapi?", options: ["Kufuta vikumbusho vyote", "Kuzima simu kwa wiki moja", "Kuangalia vikumbusho vya kesho na maelezo yako ya \"Mambo ya kukumbuka\"", "Kuandika orodha mpya ya ukaguzi kila usiku"], answer: 2, why: "Kabla ya kulala, angalia vikumbusho vya kesho na maelezo yako." },
            { objective: "O6", q: "Unapoteza miwani yako ndani ya nyumba mara kwa mara. Mazoea gani rahisi yanasaidia?", options: ["Kununua miwani mipya kila wiki", "Kuweka funguo, miwani na simu katika bakuli moja karibu na mlango", "Kuacha kuvaa miwani", "Kumuuliza AI iko wapi"], answer: 1, why: "Kuweka vitu mahali pale pale kila siku kunamaanisha unajua viko wapi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Utaratibu na wasaidizi wa AI",
        questions: [
          { objective: "O4", q: "Orodha ya ukaguzi ya \"kutoka nyumbani\" inapaswa kuwekwa wapi?", options: ["Popote", "Ndani ya droo", "Kwenye buti ya gari", "Karibu na mlango ambapo utaiona"], answer: 3, why: "Orodha za ukaguzi zinasaidia zikionekana kwa wakati unaofaa." },
          { objective: "O5", q: "Kabla ya kuandika maelezo ya miadi kwenye AI, ondoa:", options: ["Majina, tarehe za kuzaliwa na namba za akaunti", "Mambo ya orodha ya kazi", "Neno \"daktari\"", "Hakuna kitu"], answer: 0, why: "Taarifa za siri zinakaa nje ya AI." },
          { objective: "O5", q: "Kabla ya kurekodi mazungumzo kwenye miadi, unapaswa:", options: ["Kurekodi kwa siri", "Kuficha simu", "Kuomba ruhusa", "Kuiweka mtandaoni"], answer: 2, why: "Daima uliza kabla ya kumrekodi mtu." },
          { objective: "O6", q: "Mazoea mazuri ya jioni ni:", options: ["Kushiriki nywila zako", "Kufuta vikumbusho vyote", "Kuzima simu kwa wiki moja", "Kuangalia vikumbusho vya kesho na maelezo yako"], answer: 3, why: "Yanakuandaa kwa siku inayofuata." },
          { objective: "O6", q: "Unaona umepotea mahali unapopajua. Unapaswa kufanya nini?", options: ["Kupuuza", "Kumwomba AI akutambue ugonjwa", "Kuongea na daktari wako", "Kununua kirutubisho mtandaoni"], answer: 2, why: "Mabadiliko ya kumbukumbu yanayotia wasiwasi yanapaswa kukaguliwa na daktari." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Kusaidia Kumbukumbu",
    questions: [
      { objective: "O1", q: "Kwa nini uweke kikumbusho mara moja?", options: ["Kinaokoa betri", "Ili usikisahau", "Ni lazima", "Kinagharimu kidogo"], answer: 1, why: "Wakati unapita haraka." },
      { objective: "O1", q: "\"Kuahirisha (snooze)\" maana yake ni:", options: ["Kuchelewesha kikumbusho kidogo", "Kukifuta", "Kukishiriki", "Kukichapisha"], answer: 0, why: "Snooze inakirudisha baadaye." },
      { objective: "O1", q: "Neno lipi linafanya kikumbusho kijirudie?", options: ["\"kila\"", "\"labda\"", "\"mara moja\"", "\"kamwe\""], answer: 0, why: "\"Kila Jumatatu\" kinajirudia kila wiki." },
      { objective: "O1", q: "Ukimaliza kikumbusho, unapaswa:", options: ["Kukiacha milele", "Kukiweka alama kimekamilika", "Kukiweka tena", "Kufuta app"], answer: 1, why: "Kuweka alama kimekamilika kunaweka orodha yako safi." },
      { objective: "O2", q: "Orodha ya maelezo ni bora kwa:", options: ["Namba za benki", "Nywila", "Mambo yasiyo na wakati maalum", "Namba za Social Security"], answer: 2, why: "Maelezo yanatunza majina, mawazo na mahali." },
      { objective: "O2", q: "Kubana maelezo juu:", options: ["Kunafunga simu yako", "Kunayafuta", "Kunayashiriki hadharani", "Kunayaweka juu"], answer: 3, why: "Maelezo yaliyobanwa juu ni rahisi kupata." },
      { objective: "O2", q: "Ili kuongeza kwenye maelezo bila kuandika, tumia:", options: ["Kitufe cha sauti", "Kamera", "Kipaza sauti cha kibodi", "Tochi"], answer: 2, why: "Kipaza sauti kinaandika unachosema." },
      { objective: "O3", q: "Picha nzuri ya kukusaidia kukumbuka ni:", options: ["Ndani ya friji yako kabla ya kununua vitu", "Kadi yako ya benki", "Ukurasa wa pasipoti yako", "PIN yako"], answer: 0, why: "Hati za siri hazipaswi kupigwa picha kwa ajili ya vikumbusho." },
      { objective: "O3", q: "Picha za kumbukumbu zisipohitajika tena:", options: ["Zitume kwa barua pepe kwa wageni", "Ziweke mtandaoni", "Zichapishe zote", "Zifute"], answer: 3, why: "Kufuta kunaweka picha safi na za faragha." },
      { objective: "O4", q: "Orodha ya ukaguzi ni:", options: ["Taarifa ya benki", "Orodha ya hatua unazoweka alama", "Nywila", "Simu"], answer: 1, why: "Orodha za ukaguzi zinaongoza utaratibu." },
      { objective: "O4", q: "Ombi zuri la orodha ya ukaguzi kwa AI ni:", options: ["\"orodha\"", "\"Orodha fupi ya ukaguzi ya kutoka nyumbani, vitu visivyozidi vinane, maneno rahisi.\"", "\"vitu\"", "\"msaada\""], answer: 1, why: "Linasema kazi, urefu na mtindo." },
      { objective: "O4", q: "Baada ya AI kutengeneza orodha ya ukaguzi, unapaswa:", options: ["Kushiriki nywila yako", "Kuitumia bila kubadilisha kwa vyovyote", "Kuifuta", "Kuirekebisha ikufae nyumbani kwako"], answer: 3, why: "Nyumba yako ni ya kipekee." },
      { objective: "O5", q: "Kwenye miadi ya daktari, mwanafamilia anaweza kusaidia kwa:", options: ["Kuandika maelezo", "Kukujibia bila kuuliza", "Kushiriki nywila zako", "Kurekodi kwa siri"], answer: 0, why: "Msikilizaji wa pili anapata mengi zaidi." },
      { objective: "O5", q: "AI inaweza kugeuza maelezo ya haraka kuwa:", options: ["Agizo la dawa", "Utambuzi wa ugonjwa", "Muhtasari mfupi pamoja na orodha ya kazi", "Hukumu ya mahakama"], answer: 2, why: "Kufupisha ni uwezo wake; kutambua ugonjwa sio." },
      { objective: "O5", q: "Tovuti ya wagonjwa (patient portal) ni:", options: ["Benki", "Mlango wa hospitali", "Kituo cha basi", "Tovuti au app ambapo daktari wako anashiriki maelezo ya ziara"], answer: 3, why: "Tovuti hizi zinashiriki muhtasari wa ziara na matokeo." },
      { objective: "O5", q: "Muhtasari ukiwa haueleweki, unapaswa:", options: ["Kuupuuza", "Kubahatisha", "Kupiga simu ofisini kuthibitisha", "Kumuuliza mgeni mtandaoni"], answer: 2, why: "Ofisi ndiyo chanzo cha kuaminika." },
      { objective: "O6", q: "Ukaguzi wa utaratibu wa asubuhi unajumuisha:", options: ["Kubadilisha nywila", "Vikumbusho na kalenda ya leo", "Kufuta maelezo", "Kununua simu mpya"], answer: 1, why: "Unaandaa siku yako." },
      { objective: "O6", q: "Kuweka funguo, miwani na simu katika bakuli moja kunasaidia kwa sababu:", options: ["Unajua daima viko wapi", "Kunapendeza", "Kunavichaji", "Ni lazima"], answer: 0, why: "Mahali pale pale, utafutaji mdogo." },
      { objective: "O6", q: "Kifaa cha kufuatilia kwenye funguo kinakuwezesha:", options: ["Kuzipata kwa simu yako", "Kufungua mlango wowote", "Kuwasha gari ukiwa mbali", "Kulipa bili"], answer: 0, why: "Simu yako inaweza kukipata kifaa hicho." },
      { objective: "O6", q: "Unaweza kupata wapi taarifa zinazoaminika kuhusu kumbukumbu?", options: ["Tangazo linalojitokeza ghafla", "MedlinePlus (medlineplus.gov) na daktari wako", "Muuzaji wa virutubisho", "Uvumi wa mitandao ya kijamii"], answer: 1, why: "MedlinePlus ni tovuti ya bure ya afya ya serikali." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      2,
      4,
      7,
      10,
      13,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Vikumbusho vya sauti",
        objective: "O1",
        notYet: "Vikumbusho chini ya viwili, au havijirudii.",
        meets: "Vikumbusho viwili vinavyojirudia vilivyowekwa kwa sauti, kila kimoja na nini na lini.",
        exceeds: "Alivyoviweka alama vimekamilika au kuviahirisha vilipotokea mchana."
      },
      {
        name: "Maelezo ya Mambo ya kukumbuka",
        objective: "O2",
        notYet: "Hakuna maelezo, au yana nywila au namba za siri.",
        meets: "Maelezo ya \"Mambo ya kukumbuka\" yenye angalau jambo moja na bila namba za siri.",
        exceeds: "Maelezo yamebanwa juu na jambo moja liliongezwa kwa sauti."
      },
      {
        name: "Picha ya kusaidia kukumbuka",
        objective: "O3",
        notYet: "Hakuna picha, au picha ya kadi au hati ya siri.",
        meets: "Picha moja yenye manufaa ya kusaidia kukumbuka, kama ulipoegesha gari au lebo.",
        exceeds: "Imehifadhiwa kwenye albamu ya \"Saidia kumbukumbu\" na kufutwa isipohitajika tena."
      },
      {
        name: "Orodha ya ukaguzi ya kutoka nyumbani",
        objective: "O4",
        notYet: "Hakuna orodha ya ukaguzi, au haifai nyumbani kwako.",
        meets: "Orodha fupi ya ukaguzi ya AI iliyorekebishwa ifae nyumbani kwako na kuwekwa mahali utakapoiona.",
        exceeds: "Aliitumia orodha kila alipotoka nyumbani siku hiyo."
      },
      {
        name: "Zimetumika kwa siku moja nzima",
        objective: "O6",
        notYet: "Zana ziliandaliwa lakini hazikutumika.",
        meets: "Alitumia zana kwa siku moja nzima, pamoja na ukaguzi wa asubuhi na jioni.",
        exceeds: "Anaweza kusema zana ipi ilisaidia zaidi na nini cha kubadilisha."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (rubric)",
      "Wanafunzi ambao bado wanatumia utaratibu wao wa kumbukumbu na vikumbusho katika ufuatiliaji wa siku 30",
      "Wanafunzi wanaoripoti kukosa miadi michache zaidi au wasiwasi mdogo kuhusu kusahau",
      "Wanafunzi wanaoanza kozi nyingine ya Wazee na Teknolojia ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja yenye msaidizi wa sauti, Notes au Google Keep, na kamera",
      "Msaidizi wa AI wa bure (ChatGPT, Microsoft Copilot au Google Gemini)",
      "Printa au karatasi na gundi ya utepe kwa orodha ya ukaguzi (si lazima)",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi vya taratibu, pamoja na siku moja nzima ya mazoezi"
    ],
    facilitatorNotes: [
      "Tumia sauti ya upole na ya vitendo; kusahau baadhi ya mambo ni kawaida na si jambo la aibu.",
      "Wasaidie wanafunzi kuwasha msaidizi wao wa sauti na kupata kipaza sauti cha kibodi kabla ya Somo la 1.",
      "Wakumbushe wanafunzi wasiweke kamwe nywila au namba za siri katika maelezo, picha au prompt za AI.",
      "Usipime afya ya kumbukumbu; wahimize wanafunzi au familia zenye wasiwasi waongee na daktari.",
      "Pima kazi ya mwisho kwa rubric, na utoe maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};

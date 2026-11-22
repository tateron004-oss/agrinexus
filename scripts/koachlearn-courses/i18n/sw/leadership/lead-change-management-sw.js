"use strict";

// Koach Learn course (Swahili translation of leadership/lead-change-management.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "lead-change-management-sw",
  lang: "sw",
  translationOf: "lead-change-management",
  category: "Leadership Development",
  name: "Kuongoza Mabadiliko",
  skills: "Kuelewa upinzani, Kueleza sababu ya mabadiliko, Kuwashirikisha wanaoathiriwa, Kuandika mpango rahisi wa mabadiliko, Kuwasiliana kuhusu mabadiliko na mafanikio ya mapema, Kufanya mabadiliko yadumu",
  outcome: "kuongoza mabadiliko halisi kazini au katika jamii yako: kuelewa kwa nini watu wanapinga, kueleza kwa nini mabadiliko ni muhimu, kuwashirikisha wanaoathiriwa, kuandika mpango wa mabadiliko wa ukurasa mmoja, kuwasiliana vizuri, na kuyaendeleza baada ya kuanza.",
  about: [
    "Kozi hii ni kwa yeyote aliyeombwa kuongoza mabadiliko: msimamizi anayeleta ratiba mpya, shirika lisilo la faida linalohamia mfumo mpya wa wafadhili, mmiliki wa biashara ndogo anayebadilisha jinsi oda zinavyoshughulikiwa, au kikundi cha wakulima kinachohamia kumbukumbu za kidijitali.",
    "Mabadiliko mengi hayashindwi kwa sababu wazo ni baya, bali kwa sababu watu hawakushirikishwa. Utajifunza kwa nini watu wanapinga, jinsi ya kueleza sababu, jinsi ya kuwashirikisha watu, na jinsi ya kupanga, kuwasiliana na kudumisha mabadiliko.",
    "Kila somo linachukua kama dakika tano. Chagua mabadiliko mamoja halisi unayoyajali mwanzoni na uyatumie katika kila kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Andika mpango wa mabadiliko wa ukurasa mmoja kwa mabadiliko halisi unayotaka kuongoza. Lazima useme kinachobadilika, kwa nini (kwa sentensi mbili au tatu ambazo watu watajali), nani anaathiriwa na jinsi utakavyowashirikisha, kila hatua itafanyika lini, utajuaje kwamba inafanya kazi, jumbe tatu kwa makundi matatu tofauti, fanikio moja la mapema katika mwezi wa kwanza, na njia mbili za kuendeleza mabadiliko.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Viongozi wa timu, wasimamizi, wamiliki wa biashara ndogo, na viongozi wa mashirika yasiyo ya faida na wa jamii wanaohitaji kuongoza mabadiliko halisi, kama mfumo mpya, utaratibu mpya au njia mpya ya kuwahudumia watu.",
    startingPoint: "Wanajua mabadiliko wanayoyataka na wanaweza kuyaeleza kwa mtu ambaye tayari anakubali. Wengi wameona mabadiliko yakishindwa lakini hawajawahi kuandika mpango wa mabadiliko wala kupanga jinsi ya kuwashirikisha wanaoathiriwa.",
    gap: "Mabadiliko mara nyingi hushindwa kwa sababu watu hawaoni sababu yake, hawakuulizwa, wanayasikia mara moja tu, au wanarudi kwenye tabia za zamani baada ya kuanza. Viongozi wanahitaji njia rahisi ya kuelewa upinzani, kueleza sababu, kuwashirikisha watu, kupanga, kuwasiliana na kuendeleza mabadiliko.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi",
      "Muda: masomo mafupi yanayoingia katika siku ya kazi",
      "Vifaa: simu au kompyuta; karatasi inafaa kwa mpango",
      "Mpango wa mabadiliko lazima uwe ukurasa mmoja",
      "Ukweli na hadithi katika sababu ya mabadiliko lazima ziwe za mwanafunzi mwenyewe, si zilizobuniwa na AI"
    ],
    prerequisites: "Hakuna. Kozi ya \"Kusimamia Timu\" ni kozi nzuri ya kuambatana nayo."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa mabadiliko unayotaka kuongoza", action: "kuorodhesha wanaoathiriwa na kile ambacho kila kundi linaweza kupoteza na kupata, na sababu zinazowezekana za kupinga", standard: "ukichukulia kila wasiwasi kama taarifa ya kujibu" },
    { id: "O2", condition: "Ukipewa mabadiliko halisi", action: "kuandika sababu ya mabadiliko inayosema tatizo, kitakachokuwa bora na kitakachotokea msipofanya chochote", standard: "kwa sentensi mbili au tatu zenye ukweli au hadithi halisi" },
    { id: "O3", condition: "Ukipewa watu wanaoathiriwa na mabadiliko", action: "kupanga jinsi ya kuwashirikisha mapema, kama kupitia mawazo yao, jaribio dogo au mabingwa wa mabadiliko", standard: "ukisema kipi kiko wazi na kipi hakiko wazi, na jinsi utakavyowarudishia majibu" },
    { id: "O4", condition: "Ukipewa mabadiliko halisi", action: "kuandika mpango wa mabadiliko wa ukurasa mmoja unaojibu nini, kwa nini, nani, lini na utajuaje", standard: "na mwenye jukumu kwa kila hatua na vipimo viwili au vitatu vyenye tarehe za kukagua" },
    { id: "O5", condition: "Unapotangaza mabadiliko", action: "kuandika jumbe kwa makundi matatu tofauti na kupanga fanikio moja la mapema", standard: "kila ujumbe ukisema kinachobadilika, kwa nini, lini, msaada watakaopata na wamuulize nani" },
    { id: "O6", condition: "Baada ya mabadiliko kuanza", action: "kupanga njia mbili za kuendeleza mabadiliko", standard: "kama kukagua vipimo katika tarehe zilizopangwa na kuweka njia mpya katika orodha za kukagua au mafunzo" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuelewa mabadiliko na kwenda pamoja na watu",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kwa nini watu wanapinga mabadiliko",
          minutes: 5,
          goal: "Taja sababu zinazowezekana za watu kupinga mabadiliko yako, ili uweze kuzijibu.",
          text: [
            "Mabadiliko yanamaanisha kupoteza kitu kilichozoeleka, hata njia mpya ikiwa bora. Watu wanapinga kwa sababu zinazoeleweka: hawaoni kwa nini yanahitajika, wanaogopa hawataweza njia mpya, wana wasiwasi wa kupoteza muda, pesa, cheo au marafiki, hawakuulizwa, au mabadiliko ya zamani yalienda vibaya.",
            "Upinzani ni taarifa, si shambulio. Mtu anayepinga mara nyingi anaona tatizo halisi ambalo hukuliona. Chukulia wasiwasi wake kwa uzito na umuulize zaidi.",
            "Kabla ya kutangaza chochote, orodhesha wanaoathiriwa na kile ambacho kila kundi linaweza kupoteza na kupata. Orodha hiyo inakuambia cha kueleza, nani wa kumshirikisha na msaada gani wa kutoa."
          ],
          steps: ["Andika mabadiliko kwa sentensi moja.", "Orodhesha kila kundi linaloathiriwa.", "Kwa kila kundi, andika wanachoweza kupoteza na wanachoweza kupata.", "Weka alama kwenye wasiwasi unaohitaji kujibu."],
          words: [["Upinzani", "kupinga mabadiliko, waziwazi au kimyakimya."], ["Mdau", "yeyote anayeathiriwa na mabadiliko au anayeweza kuathiri kama yatafanikiwa."]],
          slides: [
            { title: "Mabadiliko ni kupoteza", bullets: ["Hata mabadiliko mazuri yanaondoa kitu kilichozoeleka", "Watu wana wasiwasi kabla ya kuona faida"] },
            { title: "Sababu za kawaida za kupinga", bullets: ["Hawaoni kwa nini", "Wanaogopa hawataweza njia mpya", "Wanaweza kupoteza muda, pesa au cheo", "Hawakuulizwa, au mabadiliko ya zamani yalishindwa"] },
            { title: "Upinzani ni taarifa", bullets: ["Wanaweza kuona tatizo halisi ambalo hukuliona", "Uliza kuhusu hilo, usibishane"] },
            { title: "Chora ramani kwanza", bullets: ["Nani anaathiriwa", "Kila kundi linaweza kupoteza na kupata nini"] }
          ],
          tryIt: "Chagua mabadiliko halisi unayotaka kuongoza. Yaandike kwa sentensi moja. Kisha orodhesha makundi matatu yanayoathiriwa na, kwa kila kundi, kitu kimoja wanachoweza kupoteza na kitu kimoja wanachoweza kupata.",
          youCanNow: "kutabiri kwa nini watu wanaweza kupinga mabadiliko na kuchora ramani ya kile ambacho kila kundi linaweza kupoteza na kupata.",
          quickCheck: [
            { objective: "O1", q: "Ipi ni sababu inayoeleweka ya watu kupinga mabadiliko?", options: ["Wanataka timu ishindwe", "Hawakuulizwa", "Hawapendi kitu chochote kamwe", "Wanalipwa ili wapinge"], answer: 1, why: "Kutoulizwa ni mojawapo ya sababu za kawaida na zinazoeleweka za upinzani." },
            { objective: "O1", q: "Kabla ya kutangaza mabadiliko, ungefanya nini kwanza?", options: ["Kutuma barua pepe kwa kila mtu mara moja", "Kusubiri hadi watu walalamike", "Kuiomba AI iandike tangazo", "Kuorodhesha wanaoathiriwa na kile ambacho kila kundi linaweza kupoteza na kupata"], answer: 3, why: "Orodha hiyo inakuambia cha kueleza, nani wa kumshirikisha na msaada gani wa kutoa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kueleza sababu ya mabadiliko",
          minutes: 5,
          goal: "Eleza kwa sentensi chache kwa nini mabadiliko yanahitajika, kwa maneno ambayo wanaoathiriwa wanayajali.",
          text: [
            "Watu wanahitaji kuelewa kwa nini kabla ya kukubali nini. Sababu yenye nguvu inajibu maswali matatu: Tatizo ni nini leo? Nini kitakuwa bora baada ya mabadiliko? Nini kitatokea tusipofanya chochote?",
            "Tumia ukweli na hadithi halisi. \"Karatasi zetu za kujiandikisha zilipoteza majina ya wajitolea 30 mwezi uliopita, na familia mbili zilikosa chakula chao\" inawagusa watu kuliko \"tunahitaji kwenda na wakati\". Ongea kuhusu kile ambacho kila kundi linajali: muda, haki, usalama, wateja, watu mnaowahudumia.",
            "Kuwa mkweli kuhusu kilicho kigumu. Njia mpya ikihitaji kazi ya ziada mwanzoni, sema hivyo na useme jinsi utakavyosaidia. Watu wanamwamini kiongozi anayekubali gharama. Msaidizi wa AI anaweza kukusaidia kuboresha maneno yako, lakini ukweli na hadithi viwe vyako mwenyewe."
          ],
          steps: ["Eleza tatizo la leo, kwa ukweli mmoja.", "Eleza kitakachokuwa bora.", "Sema kitakachotokea kama hakuna kinachobadilika.", "Ongeza hadithi moja halisi.", "Kuwa mkweli kuhusu kitakachokuwa kigumu na jinsi utakavyosaidia."],
          words: [["Sababu ya mabadiliko", "maelezo mafupi ya kwa nini mabadiliko yanahitajika na yataboresha nini."]],
          slides: [
            { title: "Kwa nini kabla ya nini", bullets: ["Tatizo ni nini leo?", "Nini kitakuwa bora?", "Tusipofanya chochote?"] },
            { title: "Ukweli pamoja na hadithi", bullets: ["Namba halisi inaonyesha ukubwa wa tatizo", "Hadithi halisi inaonyesha kwa nini ni muhimu"] },
            { title: "Ongea kuhusu wanachojali", bullets: ["Muda, haki, usalama", "Wateja au watu mnaowahudumia"] },
            { title: "Kuwa mkweli", bullets: ["Sema kitakachokuwa kigumu", "Sema jinsi utakavyosaidia"] }
          ],
          tryIt: "Andika sababu yako ya mabadiliko kwa sentensi nne: tatizo la leo na ukweli mmoja, kitakachokuwa bora, kitakachotokea kama hakuna kinachobadilika, na sentensi moja ya kweli kuhusu kitakachokuwa kigumu. Isome kwa sauti. Je, wanaoathiriwa wangejali?",
          youCanNow: "kuandika sababu fupi na ya kweli ya mabadiliko inayojibu kwa nini, si nini tu.",
          quickCheck: [
            { objective: "O2", q: "Sababu ipi ya mabadiliko ina nguvu zaidi?", options: ["\"Mwezi uliopita fomu zetu za karatasi zilipoteza oda 12 na wateja watatu wakaondoka.\"", "\"Tunahitaji kwenda na wakati.\"", "\"Kila mtu mwingine anafanya hivyo.\"", "\"Bosi anataka hivyo.\""], answer: 0, why: "Ukweli halisi na hadithi vinawagusa watu kuliko kauli mbiu." },
            { objective: "O2", q: "Njia mpya itachukua muda wa ziada mwanzoni. Ungesema nini?", options: ["Kuficha hilo hadi kuanza", "Kusema itakuwa rahisi", "Kusema hivyo kwa ukweli na kusema jinsi utakavyosaidia", "Kulaumu mfumo wa zamani"], answer: 2, why: "Watu wanamwamini kiongozi anayekubali gharama." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuwashirikisha wanaoathiriwa",
          minutes: 5,
          goal: "Panga jinsi ya kuwashirikisha watu wanaoathiriwa na mabadiliko kabla maamuzi hayajakamilika.",
          text: [
            "Watu wanaunga mkono kile wanachosaidia kukijenga. Washirikishe mapema, wakati bado kuna nafasi ya kubadilisha mpango. Kuuliza baada ya kila kitu kuamuliwa kunaonekana kama uongo, na watu wanatambua.",
            "Njia za kuwashirikisha watu: omba mawazo yao katika mkutano mfupi au dodoso fupi, jaribu mabadiliko na kikundi kidogo kwanza, waalike wanatimu wachache wanaoheshimiwa kusaidia kuyaongoza, na waache watu wachague jinsi baadhi ya sehemu zitakavyofanywa.",
            "Kuwa wazi kuhusu kipi kiko wazi na kipi hakiko. \"Tunahamia mfumo mpya kufikia Machi; mnaweza kusaidia kuamua jinsi tutakavyofundisha na timu zipi zihamie kwanza.\" Kisha onyesha ulichofanya na maoni yao, hata kama hukuweza kuyatumia."
          ],
          steps: ["Amua kipi kimeshaamuliwa na kipi kiko wazi.", "Omba mawazo mapema, katika mkutano au dodoso fupi.", "Jaribu na kikundi kidogo cha majaribio.", "Waalike wanatimu wanaoheshimiwa kusaidia kuongoza.", "Warudishie majibu kuhusu ulichofanya na maoni yao."],
          words: [["Jaribio dogo (pilot)", "jaribio la mabadiliko na watu wachache kabla ya kila mtu kuhamia."], ["Bingwa wa mabadiliko", "mwanatimu anayeheshimiwa anayesaidia kuongoza na kueleza mabadiliko."]],
          slides: [
            { title: "Watu wanaunga mkono wanachojenga", bullets: ["Washirikishe mapema", "Kuuliza baada ya kuamua kunaonekana uongo"] },
            { title: "Njia za kuwashirikisha watu", bullets: ["Omba mawazo", "Fanya jaribio dogo", "Waalike mabingwa wa mabadiliko", "Waache wachague sehemu ya jinsi"] },
            { title: "Kuwa wazi kipi kiko wazi", bullets: ["\"Tarehe imeshaamuliwa; mnasaidia kuamua jinsi ya kufundisha\"", "Warudishie majibu kuhusu ulichofanya na maoni yao"] }
          ],
          tryIt: "Kwa mabadiliko yako, andika kipi kimeshaamuliwa na kipi kiko wazi. Kisha taja njia mbili utakazowashirikisha watu na watu wawili ambao ungeweza kuwaomba wawe mabingwa wa mabadiliko.",
          youCanNow: "kuwashirikisha kwa ukweli watu wanaoathiriwa na mabadiliko na kuwarudishia majibu kuhusu maoni yao.",
          quickCheck: [
            { objective: "O3", q: "Kwa nini kuomba maoni baada ya kila kitu kuamuliwa kunaleta matokeo mabaya?", options: ["Kunachukua muda mrefu mno", "Kunaonekana kama uongo, na watu wanatambua", "Kunagharimu pesa", "Watu hawana mawazo"], answer: 1, why: "Washirikishe watu wakati bado kuna nafasi ya kubadilisha mpango." },
            { objective: "O3", q: "Ulikusanya mawazo lakini hukuweza kutumia baadhi yake. Ungefanya nini?", options: ["Kutosema chochote kuyahusu", "Kuyatumia hata hivyo", "Kuacha kuomba mawazo", "Kuwarudishia majibu kuhusu ulichofanya na maoni yao na kwa nini"], answer: 3, why: "Kuonyesha ulichofanya na maoni kunadumisha imani, hata kama hukuweza kuyatumia." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuelewa mabadiliko na kwenda pamoja na watu",
        questions: [
          { objective: "O1", q: "Kwa nini watu mara nyingi wanapinga hata mabadiliko mazuri?", options: ["Kwa sababu ni wavivu", "Kwa sababu mabadiliko yanamaanisha kupoteza kitu kilichozoeleka", "Kwa sababu mabadiliko yote ni mabaya", "Kwa sababu viongozi hukosea kila wakati"], answer: 1, why: "Mabadiliko yanaleta hasara na kutokuwa na uhakika hata yanaposaidia." },
          { objective: "O1", q: "Mfanyakazi anapinga sana mpango wako. Jibu bora la kwanza ni lipi?", options: ["Kumuuliza kinachomtia wasiwasi, kwa sababu anaweza kuona tatizo halisi", "Kumwambia aache kulalamika", "Kumwondoa kwenye timu", "Kupuuza"], answer: 0, why: "Upinzani ni taarifa; uliza kabla ya kubishana." },
          { objective: "O2", q: "Sababu yenye nguvu ya mabadiliko inajibu maswali gani matatu?", options: ["Nani, wapi, kiasi gani", "Nani wa kulaumiwa, lini, kwa nini isiwe", "Itanigharimu nini, nani aliamua, ninaweza kuikwepa", "Tatizo ni nini, nini kitakuwa bora, nini kitatokea tusipofanya chochote"], answer: 3, why: "Haya yanaonyesha kwa nini mabadiliko ni muhimu." },
          { objective: "O3", q: "Uwashirikishe watu lini katika mabadiliko?", options: ["Baada ya kila kitu kuamuliwa", "Kamwe", "Mapema, wakati bado kuna nafasi ya kubadilisha mpango", "Tu wakilalamika"], answer: 2, why: "Maoni ya mapema ni maoni halisi na yanajenga uungwaji mkono." },
          { objective: "O3", q: "Jaribio dogo (pilot) ni nini?", options: ["Jaribio la mabadiliko na watu wachache kwanza", "Bosi wa kiongozi", "Tarehe ya mwisho", "Aina ya video ya mafunzo"], answer: 0, why: "Majaribio madogo yanakuwezesha kujifunza na kurekebisha matatizo kabla ya kila mtu kuhamia." }
        ]
      }
    },
    {
      name: "Sura 2: Kupanga, kuwasiliana na kufanya mabadiliko yadumu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuandika mpango rahisi wa mabadiliko",
          minutes: 6,
          goal: "Andika mpango wa mabadiliko wa ukurasa mmoja unaojibu nini, kwa nini, nani, lini, na utajuaje.",
          text: [
            "Mpango wa mabadiliko hauhitaji kuwa mrefu. Ukurasa mmoja unaojibu maswali matano unatosha kwa mabadiliko mengi: Nini kinabadilika? Kwa nini? Nani anaathiriwa na nani anafanya nini? Kila hatua itafanyika lini? Utajuaje kwamba inafanya kazi?",
            "\"Utajuaje\" ndiyo sehemu ambayo watu huiruka. Chagua dalili mbili au tatu unazoweza kuzikagua kweli, kama \"95% ya oda zimeingizwa katika mfumo mpya kufikia wiki ya 4\" au \"hakuna usafirishaji uliokosekana kwa mwezi mmoja\". Chagua tarehe ya kuziangalia.",
            "Taja mwenye jukumu kwa kila hatua, panga mafunzo na msaada kabla ya kuhamia, na sema utafanya nini kitu kikienda vibaya, kama kuacha njia ya zamani ipatikane kwa muda mfupi."
          ],
          steps: ["Nini: mabadiliko kwa sentensi moja.", "Kwa nini: sababu yako kwa sentensi mbili au tatu.", "Nani: makundi yanayoathiriwa, na mwenye jukumu kwa kila hatua.", "Lini: tarehe muhimu, pamoja na mafunzo kabla ya kuhamia.", "Utajuaje: vipimo viwili au vitatu na tarehe ya kuvikagua.", "Mpango wa akiba kitu kikienda vibaya."],
          words: [["Mpango wa mabadiliko", "mpango mfupi ulioandikwa unaosema nini kinabadilika, kwa nini, nani, lini na mafanikio yatapimwaje."], ["Kipimo", "kitu unachoweza kuhesabu au kukagua kuona kama mabadiliko yanafanya kazi."], ["Mwenye jukumu", "mtu mmoja anayewajibika kuhakikisha hatua inafanyika."]],
          slides: [
            { title: "Maswali matano, ukurasa mmoja", bullets: ["Nini kinabadilika?", "Kwa nini?", "Nani anaathiriwa na nani anafanya nini?", "Lini? Utajuaje kwamba inafanya kazi?"] },
            { title: "Utajuaje", bullets: ["Dalili mbili au tatu unazoweza kukagua", "Mfano: \"95% ya oda katika mfumo mpya kufikia wiki ya 4\"", "Chagua tarehe ya kuangalia"] },
            { title: "Usisahau", bullets: ["Mwenye jukumu kwa kila hatua", "Mafunzo kabla ya kuhamia", "Mpango wa akiba kitu kikienda vibaya"] }
          ],
          tryIt: "Andika rasimu ya kwanza ya mpango wako wa ukurasa mmoja wenye sehemu zote tano. Kwa \"utajuaje\", andika vipimo viwili na tarehe utakayovikagua.",
          youCanNow: "kuandika mpango mfupi wa mabadiliko wenye mwenye jukumu kwa kila hatua, tarehe na vipimo vya mafanikio vilivyo wazi.",
          quickCheck: [
            { objective: "O4", q: "Sehemu ipi ya mpango wa mabadiliko watu huiruka mara nyingi zaidi?", options: ["Nini kinabadilika", "Nani anaathiriwa", "Utajuaje kwamba inafanya kazi", "Inaanza lini"], answer: 2, why: "Chagua dalili mbili au tatu unazoweza kukagua na tarehe ya kuziangalia." },
            { objective: "O4", q: "Una wasiwasi kwamba mfumo mpya unaweza kushindwa katika wiki ya kwanza. Ungeongeza nini kwenye mpango?", options: ["Utafanya nini kikienda vibaya, kama kuacha njia ya zamani kwa muda mfupi", "Hakuna; panga mafanikio tu", "Sababu ndefu zaidi ya mabadiliko", "Tarehe ya pili ya kuanza baada ya mwaka mmoja"], answer: 0, why: "Mpango mzuri unasema utafanya nini kitu kikienda vibaya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuwasiliana kuhusu mabadiliko na kupata mafanikio ya mapema",
          minutes: 5,
          goal: "Andika ujumbe ulio wazi kwa makundi tofauti na upange fanikio la mapema linaloonekana.",
          text: [
            "Sema zaidi ya mara moja, kwa njia zaidi ya moja. Watu wana shughuli nyingi na wanasikia ujumbe mara kadhaa kabla haujaeleweka. Tumia mkutano, maelezo mafupi ya maandishi, na mazungumzo ya mtu mmoja mmoja. Waambie walioathiriwa zaidi kwanza, ana kwa ana ukiweza, kabla hawajasikia kutoka kwa mtu mwingine.",
            "Andaa ujumbe kwa kila kundi: kinachobadilika kwao, kwa nini, lini, msaada watakaopata, na wamuulize nani. Acha nafasi ya maswali, na usipojua jibu, sema hivyo na useme utajua lini.",
            "Panga fanikio la mapema: mafanikio ya mapema yanayoonekana katika wiki za kwanza, kama foleni fupi au ripoti ya haraka zaidi. Lieleze kwa wote na uwashukuru watu waliolifanikisha. Mafanikio ya mapema yanaonyesha kwamba mabadiliko yanafanya kazi na yanawavuta waliokuwa na shaka."
          ],
          steps: ["Waambie walioathiriwa zaidi kwanza, ana kwa ana ikiwezekana.", "Kwa kila kundi: kinachobadilika kwao, kwa nini, lini, msaada, wamuulize nani.", "Rudia kupitia mikutano, maelezo na mazungumzo ya mtu mmoja mmoja.", "Jibu maswali kwa ukweli; sema utajua lini.", "Panga na usherehekee fanikio moja la mapema katika mwezi wa kwanza."],
          words: [["Fanikio la mapema", "mafanikio ya mapema yanayoonekana yanayoonyesha kwamba mabadiliko yanafanya kazi."], ["Hadhira", "kundi la watu ambao ujumbe umeandikwa kwa ajili yao."]],
          slides: [
            { title: "Sema zaidi ya mara moja", bullets: ["Mikutano, maelezo na mazungumzo ya mtu mmoja mmoja", "Walioathiriwa zaidi kwanza, ana kwa ana"] },
            { title: "Kila ujumbe unasema", bullets: ["Kinachobadilika kwao na kwa nini", "Lini, na msaada watakaopata", "Wamuulize nani"] },
            { title: "Majibu ya kweli", bullets: ["Hujui? Sema hivyo", "Sema utajua lini"] },
            { title: "Mafanikio ya mapema", bullets: ["Mafanikio ya mapema yanayoonekana", "Yaeleze na uwashukuru walioyafanikisha"] }
          ],
          tryIt: "Andika jumbe tatu fupi kuhusu mabadiliko yako kwa makundi matatu tofauti (kwa mfano wafanyakazi wa mstari wa mbele, mameneja na wateja). Kisha andika fanikio moja la mapema ambalo ungeweza kuonyesha katika mwezi wa kwanza.",
          youCanNow: "kuwasiliana kuhusu mabadiliko kwa uwazi kwa makundi tofauti na kupanga fanikio la mapema linalojenga uungwaji mkono.",
          quickCheck: [
            { objective: "O5", q: "Fanikio la mapema ni nini?", options: ["Kumaliza mabadiliko kwa siku moja", "Mafanikio ya mapema yanayoonekana yanayoonyesha kwamba mabadiliko yanafanya kazi", "Kuruka mafunzo", "Zawadi kwa mtu wa kwanza kuhamia"], answer: 1, why: "Mafanikio ya mapema yanawavuta waliokuwa na shaka." },
            { objective: "O5", q: "Ungewaambiaje watu walioathiriwa zaidi na mabadiliko?", options: ["Kuwaacha wasikie kutoka kwa mtu mwingine", "Kubandika tangazo ukutani", "Kutuma barua pepe moja kwa wafanyakazi wote", "Kuwaambia kwanza, ana kwa ana ukiweza"], answer: 3, why: "Walioathiriwa zaidi wanapaswa kusikia kwanza, kabla uvumi haujawafikia." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kufanya mabadiliko yadumu",
          minutes: 5,
          goal: "Panga jinsi ya kuendeleza mabadiliko baada ya kuanza ili watu wasirudi kwenye njia ya zamani.",
          text: [
            "Siku ya kuanza si mstari wa mwisho. Mabadiliko mengi hufifia baada ya wiki chache watu wanaporudi kwenye tabia za zamani, hasa wanapokuwa na shughuli nyingi au msongo wa mawazo.",
            "Ili yadumu: kagua vipimo vyako katika tarehe ulizopanga, hakikisha msaada unapatikana kwa urahisi, ondoa njia ya zamani mara njia mpya inapofanya kazi, na weka mabadiliko katika utaratibu wa kila siku kama orodha za kukagua, mafunzo ya wafanyakazi wapya, na matarajio ya kazi.",
            "Endelea kusikiliza. Waulize watu kipi bado ni kigumu na ukirekebishe. Washukuru wanaotumia njia mpya vizuri, na ueleze matokeo. Mabadiliko yakishakuwa sehemu ya \"jinsi tunavyofanya mambo hapa\", tazama nyuma ulichojifunza kwa ajili ya mabadiliko yajayo."
          ],
          steps: ["Kagua vipimo vyako katika tarehe zilizopangwa.", "Hakikisha msaada unapatikana kwa urahisi.", "Acha njia ya zamani mara njia mpya inapofanya kazi.", "Weka mabadiliko katika orodha za kukagua, mafunzo na matarajio ya kazi.", "Uliza kipi bado ni kigumu, na ukirekebishe.", "Eleza matokeo na uwashukuru watu."],
          words: [["Kudumisha", "kuendeleza kitu kwa muda mrefu."], ["Utaratibu", "njia ya kawaida ambayo kazi inafanywa kila siku au kila wiki."]],
          slides: [
            { title: "Kuanza si mstari wa mwisho", bullets: ["Mabadiliko hufifia watu wanapokuwa na shughuli nyingi", "Tabia za zamani zinawavuta watu nyuma"] },
            { title: "Yaweke katika utaratibu", bullets: ["Orodha za kukagua na mafunzo ya wafanyakazi wapya", "Matarajio ya kazi", "Acha njia ya zamani mara njia mpya inapofanya kazi"] },
            { title: "Endelea kusikiliza", bullets: ["Kagua vipimo vyako katika tarehe zilizopangwa", "Uliza kipi bado ni kigumu na ukirekebishe", "Eleza matokeo na uwashukuru watu"] }
          ],
          tryIt: "Kazi ya mwisho: maliza mpango wako wa mabadiliko wa ukurasa mmoja. Ongeza jumbe tatu kwa makundi matatu, fanikio moja la mapema katika mwezi wa kwanza, na njia mbili utakazoendeleza mabadiliko baada ya kuanza.",
          youCanNow: "kuendeleza mabadiliko baada ya kuanza kwa kukagua matokeo, kuyaweka katika utaratibu na kuwasikiliza watu wanaofanya kazi.",
          quickCheck: [
            { objective: "O6", q: "Nini mara nyingi hutokea kwa mabadiliko wiki chache baada ya kuanza?", options: ["Yanafifia watu wanaporudi kwenye tabia za zamani", "Yanadumu yenyewe kila wakati", "Kila mtu anasahau njia ya zamani", "Yanakua yenyewe"], answer: 0, why: "Siku ya kuanza si mstari wa mwisho; tabia zinawavuta watu nyuma." },
            { objective: "O6", q: "Njia mpya inafanya kazi vizuri. Ungefanya nini na njia ya zamani?", options: ["Kuweka zote mbili milele", "Kumwomba kila mtu achague", "Kuondoa njia ya zamani na kuweka njia mpya katika orodha za kukagua na mafunzo", "Kuficha njia mpya"], answer: 2, why: "Kuondoa njia ya zamani na kuweka njia mpya katika utaratibu kunasaidia mabadiliko kudumu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kupanga, kuwasiliana na kufanya mabadiliko yadumu",
        questions: [
          { objective: "O4", q: "Swali lipi ni sehemu ya mpango rahisi wa mabadiliko?", options: ["Tumlaumu nani?", "Tunawezaje kuepuka kuwaambia watu?", "Tutajuaje kwamba inafanya kazi?", "Tunaweza kusubiri kwa muda gani?"], answer: 2, why: "Vipimo vinaonyesha kama mabadiliko yanafanya kazi." },
          { objective: "O4", q: "Kipi ni kipimo kizuri cha mafanikio?", options: ["\"Watu wanajisikia wa kisasa\"", "\"Mambo yanaenda vizuri zaidi\"", "\"Tulijitahidi sana\"", "\"Hakuna usafirishaji uliokosekana kwa mwezi mmoja\""], answer: 3, why: "Ni kitu unachoweza kukagua kweli." },
          { objective: "O5", q: "Nani anapaswa kusikia kuhusu mabadiliko kwanza?", options: ["Walioathiriwa zaidi, ana kwa ana ikiwezekana", "Gazeti la eneo", "Timu ya uongozi tu, milele", "Hakuna mtu hadi yaanze"], answer: 0, why: "Wanastahili kusikia moja kwa moja, si kupitia uvumi." },
          { objective: "O5", q: "Mtu anauliza swali ambalo bado huwezi kulijibu. Unafanya nini?", options: ["Kubuni jibu", "Kusema hujui na kusema utajua lini", "Kubadilisha mada", "Kumaliza mkutano"], answer: 1, why: "Ukweli unajenga imani wakati wa mabadiliko." },
          { objective: "O6", q: "Miezi mitatu baada ya kuanza, watu wanarudi kwenye njia ya zamani. Nini kinasaidia zaidi?", options: ["Kuacha kuongea kuhusu hilo", "Kurudisha mfumo wa zamani kabisa", "Kuilaumu timu", "Kuweka njia mpya katika orodha za kukagua na mafunzo na kuuliza kipi bado ni kigumu"], answer: 3, why: "Utaratibu na kusikiliza vinafanya mabadiliko yadumu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kuongoza Mabadiliko",
    questions: [
      { objective: "O1", q: "Ipi ni sababu ya kawaida ya watu kupinga mabadiliko?", options: ["Wanaogopa hawataweza njia mpya vizuri", "Wanafurahia migogoro", "Wanataka mikutano zaidi", "Hawapendi kazi yao kamwe"], answer: 0, why: "Hofu ya kutoweza njia mpya vizuri ni ya kawaida sana." },
      { objective: "O1", q: "Kuchukulia upinzani kama taarifa kunamaanisha:", options: ["Kuupuuza", "Kuwarekodi watu kwa siri", "Kuuliza kinachowatia watu wasiwasi kwa sababu wanaweza kuona tatizo halisi", "Kuuadhibu"], answer: 2, why: "Upinzani unaweza kuonyesha hatari halisi." },
      { objective: "O1", q: "Kabla ya kutangaza mabadiliko, inasaidia kuorodhesha:", options: ["Nani wa kulaumiwa yakishindwa", "Nani anaathiriwa na kile ambacho kila kundi linaweza kupoteza na kupata", "Gharama tu", "Hakuna kitu"], answer: 1, why: "Ramani hiyo inaonyesha cha kueleza na msaada gani wa kutoa." },
      { objective: "O2", q: "Sababu ipi ya mabadiliko ina nguvu zaidi?", options: ["\"Tunahitaji kwenda na wakati.\"", "\"Kwa sababu nimesema.\"", "\"Kila mtu mwingine anafanya hivyo.\"", "\"Karatasi za kujiandikisha zilipoteza majina ya wajitolea 30 mwezi uliopita na familia mbili zilikosa chakula.\""], answer: 3, why: "Ukweli halisi na hadithi halisi vinaonyesha kwa nini ni muhimu." },
      { objective: "O2", q: "Kwa nini uwe mkweli kuhusu kitakachokuwa kigumu?", options: ["Ili kuwatisha watu", "Watu wanamwamini kiongozi anayekubali gharama", "Ili kuchelewesha mabadiliko", "Si wazo zuri kamwe"], answer: 1, why: "Ukweli unajenga imani na unakuwezesha kupanga msaada." },
      { objective: "O2", q: "Sababu ya mabadiliko inapaswa kueleza:", options: ["Nini kitatokea tusipofanya chochote", "Maoni ya kiongozi tu", "Nani atapoteza kazi yake", "Hakuna kitu kuhusu tatizo"], answer: 0, why: "Gharama ya kutofanya chochote inaonyesha kwa nini mabadiliko yanahitajika." },
      { objective: "O3", q: "\"Watu wanaunga mkono kile wanachosaidia kukijenga\" inamaanisha unapaswa:", options: ["Kuficha mipango", "Kuamua kila kitu kwanza, kisha kuuliza", "Kuwashirikisha mapema wakati mpango bado unaweza kubadilika", "Kuwashirikisha mameneja tu"], answer: 2, why: "Kuwashirikisha mapema kunajenga uungwaji mkono halisi." },
      { objective: "O3", q: "Bingwa wa mabadiliko ni:", options: ["Mtu anayepinga zaidi", "Mwanatimu anayeheshimiwa anayesaidia kuongoza na kueleza mabadiliko", "Kikombe cha ushindi", "Mwamuzi wa nje"], answer: 1, why: "Mabingwa wanawasaidia wengine kuyaamini mabadiliko." },
      { objective: "O3", q: "Uliomba mawazo na hukuweza kutumia baadhi yake. Ufanye nini?", options: ["Kutosema chochote", "Kujifanya uliyatumia", "Kuacha kuomba mawazo", "Kuwarudishia majibu kuhusu ulichofanya na maoni yao, na kwa nini"], answer: 3, why: "Kuwarudishia majibu kunadumisha imani hata mawazo yasipotumika." },
      { objective: "O4", q: "Sehemu tano za mpango rahisi wa mabadiliko ni:", options: ["Nini, kwa nini, nani, lini, utajuaje", "Nani, lawama, gharama, kuchelewa, kufuta", "Panga, tumaini, subiri, ona, acha", "Bajeti, nembo, kauli mbiu, sherehe, picha"], answer: 0, why: "Maswali haya matano yanatosha kwa mabadiliko mengi." },
      { objective: "O4", q: "Kila hatua katika mpango wa mabadiliko inapaswa kuwa na:", options: ["Wenye jukumu kumi", "Bila mwenye jukumu", "Mwenye jukumu mmoja anayewajibika kwayo", "Mwenye jukumu atakayechaguliwa baadaye"], answer: 2, why: "Mwenye jukumu mmoja aliye wazi anahakikisha inafanyika." },
      { objective: "O4", q: "Mafunzo yanapaswa kufanyika lini?", options: ["Miezi baada ya kuhamia", "Kabla ya kuhamia", "Kamwe", "Kwa mameneja tu"], answer: 1, why: "Watu wanahitaji ujuzi kabla ya kuombwa kutumia njia mpya." },
      { objective: "O5", q: "Kwa nini urudie ujumbe wako kwa njia tofauti?", options: ["Ili kuwaudhi watu", "Kwa sababu watu wanasikia ujumbe mara kadhaa kabla haujaeleweka", "Ili kujaza muda", "Kwa sababu ujumbe wa kwanza ulikuwa si sahihi"], answer: 1, why: "Watu wenye shughuli nyingi wanahitaji kuusikia zaidi ya mara moja." },
      { objective: "O5", q: "Ujumbe wa kila kundi unapaswa kusema:", options: ["Tarehe tu", "Sababu tu", "Historia ndefu", "Kinachobadilika kwao, kwa nini, lini, msaada watakaopata na wamuulize nani"], answer: 3, why: "Haya yanajibu maswali ambayo watu wanayo kweli." },
      { objective: "O5", q: "Fanikio la mapema ni:", options: ["Mafanikio ya mapema yanayoonekana yanayoonyesha kwamba mabadiliko yanafanya kazi", "Kumaliza mabadiliko kwa siku moja", "Kushinda mabishano", "Kuruka mpango"], answer: 0, why: "Mafanikio ya mapema yanajenga imani na uungwaji mkono." },
      { objective: "O5", q: "Baada ya fanikio la mapema, unapaswa:", options: ["Kulinyamazia", "Kuchukua sifa zote", "Kulieleza na kuwashukuru watu waliolifanikisha", "Kusimamisha mabadiliko"], answer: 2, why: "Kueleza na kushukuru kunaeneza uungwaji mkono." },
      { objective: "O6", q: "Kwa nini siku ya kuanza \"si mstari wa mwisho\"?", options: ["Kwa sababu mabadiliko mara nyingi hufifia watu wanaporudi kwenye tabia za zamani", "Kwa sababu kila mara kuna sherehe baadaye", "Kwa sababu mipango haianzi kamwe", "Kwa sababu siku ya kuanza ni ya hiari"], answer: 0, why: "Kudumisha mabadiliko kunahitaji kazi inayoendelea." },
      { objective: "O6", q: "Kipi kinasaidia mabadiliko kudumu?", options: ["Kuweka pia njia ya zamani milele", "Kuyaweka katika orodha za kukagua na mafunzo ya wafanyakazi wapya", "Kutokagua matokeo kamwe", "Kuyabadilisha tena wiki ijayo"], answer: 1, why: "Utaratibu unafanya njia mpya kuwa ya kawaida." },
      { objective: "O6", q: "Uliweka kipimo cha kukagua wiki ya 4. Katika wiki ya 4 unapaswa:", options: ["Kukiruka", "Kubadilisha kipimo", "Kusubiri hadi mwaka ujao", "Kukikagua na kuchukua hatua kulingana na unachokiona"], answer: 3, why: "Vipimo vinasaidia tu ukiviangalia kwa wakati." },
      { objective: "O6", q: "Mabadiliko yakishakuwa sehemu ya \"jinsi tunavyofanya mambo hapa\", hatua nzuri ya mwisho ni:", options: ["Kuyasahau", "Kutazama nyuma ulichojifunza kwa ajili ya mabadiliko yajayo", "Kuyatengua", "Kuwalaumu waliopinga"], answer: 1, why: "Mafunzo uliyopata yanafanya mabadiliko yajayo yawe rahisi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      3,
      6,
      9,
      11,
      13,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Kwa nini ni muhimu",
        objective: "O2",
        notYet: "Sababu ni kauli mbiu, kama \"tunahitaji kwenda na wakati\".",
        meets: "Sentensi mbili au tatu kuhusu tatizo, kitakachokuwa bora na kitakachotokea kama hakuna kinachobadilika.",
        exceeds: "Inatumia ukweli au hadithi halisi ambayo wanaoathiriwa watajali."
      },
      {
        name: "Nani anaathiriwa na jinsi wanavyoshirikishwa",
        objective: "O3",
        notYet: "Hakuna anayeshirikishwa kabla uamuzi haujakamilika.",
        meets: "Inataja wanaoathiriwa na jinsi watakavyoshirikishwa mapema.",
        exceeds: "Inasema kipi kiko wazi na kipi hakiko, na jinsi maoni yatakavyorudishiwa majibu."
      },
      {
        name: "Mpango na vipimo",
        objective: "O4",
        notYet: "Inakosa nini, kwa nini, nani, lini au utajuaje.",
        meets: "Inajibu maswali yote matano, ikisema kila hatua itafanyika lini na utajuaje kwamba inafanya kazi.",
        exceeds: "Kila hatua ina mwenye jukumu na kila kipimo kina tarehe ya kukagua."
      },
      {
        name: "Ujumbe na fanikio la mapema",
        objective: "O5",
        notYet: "Ujumbe mmoja kwa kila mtu, au hakuna fanikio la mapema.",
        meets: "Jumbe tatu kwa makundi matatu na fanikio moja la mapema katika mwezi wa kwanza.",
        exceeds: "Kila ujumbe unasema msaada watakaopata watu na wamuulize nani."
      },
      {
        name: "Kuyaendeleza",
        objective: "O6",
        notYet: "Mpango unaishia siku ya kuanza.",
        meets: "Njia mbili za kuendeleza mabadiliko baada ya kuanza.",
        exceeds: "Inajumuisha kuweka njia mpya katika orodha za kukagua, mafunzo au matarajio ya kazi."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoanzisha mabadiliko yaliyo katika mpango wao ndani ya siku 90 (utafiti wa kufuatilia)",
      "Mabadiliko ambayo bado yanatumika miezi mitatu baada ya kuanza",
      "Wanafunzi wanaochukua kozi nyingine ya uongozi ya Koach Learn"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta ya kutazama masomo",
      "Karatasi au hati kwa mpango wa mabadiliko wa ukurasa mmoja",
      "Mabadiliko mamoja halisi ambayo mwanafunzi anataka kuongoza",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Mwombe kila mwanafunzi alete mabadiliko mamoja halisi kabla ya kipindi kuanza.",
      "Waambie wawili wawili waigize mtu anayepinga, ili wanafunzi wajizoeze kuuliza kinachomtia wasiwasi.",
      "Waambie wanafunzi wabadilishane sababu zao za mabadiliko na waseme kama ingewashawishi.",
      "Wakumbushe wanafunzi kwamba ukweli na hadithi lazima viwe vyao wenyewe wanapotumia AI kuboresha maneno.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};

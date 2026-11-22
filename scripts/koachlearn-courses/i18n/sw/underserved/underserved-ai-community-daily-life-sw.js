"use strict";

// Koach Learn course (Swahili translation of underserved/underserved-ai-community-daily-life.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "underserved-ai-community-daily-life-sw",
  lang: "sw",
  translationOf: "underserved-ai-community-daily-life",
  category: "Undeserved Community",
  name: "AI kwa Jamii na Maisha ya Kila Siku",
  skills: "Kupanga wiki ya familia, Kupanga milo kwa bajeti, Kupata na kukagua msaada wa karibu, Kuendesha mkutano wa jamii, Kuandika ujumbe wazi kwa kikundi",
  outcome: "kutumia msaidizi wa AI wa bure kupanga maisha ya kila siku na kazi za jamii: kupanga wiki na milo ya familia yako kwa bajeti, kupata msaada wa karibu na kuukagua, na kuandaa mkutano mdogo wa jamii wenye ajenda, ukumbusho na orodha ya huduma za msaada.",
  about: [
    "Maisha yana shughuli nyingi: zamu za kazi, kuchukua watoto shuleni, miadi, kanisa, michezo na kusaidia majirani. Msaidizi wa AI wa bure anaweza kukupunguzia mzigo wa kupanga.",
    "Katika Sura 1 utapanga wiki ya familia na milo kwa bajeti, na utapata msaada wa karibu pesa zinapokuwa chache. Katika Sura 2 utatumia AI kuleta jamii yako pamoja: ajenda ya mkutano, ujumbe wazi kwa kikundi na orodha ya huduma za msaada za karibu.",
    "Kila somo linachukua kama dakika tano na linaisha na kazi ya \"Jaribu sasa\". Kila sura inaisha na jaribio la maarifa, na kozi inaisha na mtihani wa maswali 20."
  ],
  finalTask: "Andaa mkutano mdogo wa kikundi unachoshiriki (kikundi cha mtaa, kikundi cha wazazi, kikundi cha kanisa au kikundi cha wapangaji). Tumia msaidizi wa AI kuandika ajenda ya ukurasa mmoja na ujumbe mfupi wa ukumbusho, kisha tengeneza orodha ya huduma tatu za msaada za karibu (kwa mfano chakula, bili za umeme na maji, na msaada wa kazi) ambazo umezikagua mwenyewe kwenye tovuti rasmi au kupitia 211.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima katika jamii zisizohudumiwa vya kutosha wanaobeba majukumu ya kazi, familia na jamii: wazazi, walezi, na wanachama au viongozi wa vikundi vya mtaa, vikundi vya wazazi, vikundi vya kanisa na vikundi vya wapangaji.",
    startingPoint: "Wanatumia simu kupiga, kutuma ujumbe mfupi na baadhi ya apps, na wanapanga wiki yao kichwani au kwenye karatasi. Wachache wametumia msaidizi wa AI kupanga, na wengi hawajui kuhusu 211.",
    gap: "Familia zenye shughuli nyingi zinakosa miadi, zinatumia pesa nyingi kwa chakula, na zinapata shida kupata msaada wa karibu, na vikundi vya jamii vinapoteza muda katika mikutano isiyopangwa. Msaidizi wa AI wa bure anaweza kusaidia kupanga, lakini wanafunzi wanahitaji kuutumia kwa usalama na kukagua chochote unachosema kuhusu programu za msaada za karibu.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 5 hadi 6)",
      "Vifaa: simu janja au kompyuta ya maktaba",
      "Gharama: zana za bure tu",
      "AI haijui bei za leo wala programu zipi ziko wazi; wanafunzi wanakagua 211 na vyanzo rasmi",
      "Faragha: majina ya kwanza au nafasi za watu tu, na hakuna taarifa za afya au pesa za watu wengine katika prompt"
    ],
    prerequisites: "Hakuna. Wanafunzi wapya kwa wasaidizi wa AI wanaweza kuanza na kozi \"Introduction to AI and Digital Empowerment\" (Utangulizi wa AI na Uwezeshaji wa Kidijitali)."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa wiki yenye shughuli nyingi za zamu, shule na miadi", action: "kutumia msaidizi wa AI kugeuza orodha yako kuwa ratiba ya siku kwa siku na kurekebisha migongano", standard: "ukitumia majina ya kwanza au nafasi za watu tu, na wewe ukifanya maamuzi ya mwisho" },
    { id: "O2", condition: "Ukijua idadi ya watu nyumbani, bajeti yako na chakula ulicho nacho", action: "kutengeneza mpango wa chakula cha jioni cha siku tano na orodha ya manunuzi kwa msaidizi wa AI", standard: "ukilinganisha gharama na bei halisi za duka lako" },
    { id: "O3", condition: "Ukiwa na hitaji halisi kama chakula, kodi ya nyumba au bili za umeme na maji", action: "kupata programu moja ya msaada ya karibu kupitia 211 na kuithibitisha kwa chanzo rasmi", standard: "ukiandika namba yake rasmi ya simu kabla ya kwenda" },
    { id: "O4", condition: "Kwa kikundi unachoshiriki", action: "kuandika ajenda ya mkutano ya ukurasa mmoja kwa msaidizi wa AI", standard: "yenye mada kwa mpangilio, muda, mada muhimu zaidi mapema, na muda wa maswali" },
    { id: "O5", condition: "Kabla na baada ya mkutano wa kikundi", action: "kuandika ukumbusho na kugeuza maandishi ya haraka kuwa muhtasari wenye kazi za kufuatilia", standard: "bila taarifa za faragha, na ukiukagua na mtu aliyekuwepo" },
    { id: "O6", condition: "Kwa mahitaji matatu katika jamii yako", action: "kutengeneza orodha ya huduma za msaada ya ukurasa mmoja yenye namba rasmi na saa ulizokagua mwenyewe", standard: "yenye tarehe ulipoikagua" }
  ],
  chapters: [
    {
      name: "Sura 1: AI nyumbani",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kupanga wiki ya familia yako",
          minutes: 5,
          goal: "Tumia msaidizi wa AI kugeuza wiki iliyovurugika kuwa ratiba iliyo wazi.",
          text: [
            "Zamu za kazi, shule, miadi na safari ndogo zinapokuwa nyingi, ni rahisi kusahau kitu. Msaidizi wa AI anaweza kupanga orodha yako kuwa mpango wa siku kwa siku.",
            "Andika kila kitu unachohitaji kufanya wiki hii, kwa mpangilio wowote, pamoja na saa unazozijua tayari. Tumia majina ya kwanza au nafasi za watu (\"mtoto wangu mkubwa\", \"Bibi\") badala ya majina kamili. Kisha uliza: \"Panga haya kuwa ratiba ya siku kwa siku. Onyesha migongano.\"",
            "Tafuta migongano, yaani mambo mawili yanayotokea saa moja. Iombe AI mawazo, kama kushirikiana gari au kuhamisha safari ndogo, lakini wewe ndiye unayefanya uamuzi wa mwisho."
          ],
          steps: ["Orodhesha kila kitu cha wiki, kwa mpangilio wowote, pamoja na saa unazojua.", "Iombe AI ipange kuwa ratiba ya siku kwa siku na ionyeshe migongano.", "Omba mawazo ya kurekebisha kila mgongano.", "Nakili mpango wa mwisho kwenye kalenda ya simu yako au karatasi kwenye friji."],
          words: [["Ratiba", "mpango unaoonyesha kinachotokea kila siku na saa ngapi."], ["Mgongano", "mambo mawili yanapopangwa kwa wakati mmoja."]],
          slides: [
            { title: "Mengi mno ya kukumbuka?", bullets: ["Zamu, shule, miadi, safari ndogo", "AI inaweza kuyapanga kuwa mpango"] },
            { title: "Jinsi ya kuuliza", bullets: ["Orodhesha kila kitu, mpangilio wowote", "Tumia majina ya kwanza au nafasi, si majina kamili", "\"Tengeneza ratiba ya siku kwa siku. Onyesha migongano.\""] },
            { title: "Rekebisha migongano", bullets: ["Omba mawazo: kushirikiana gari, kuhamisha safari", "Wewe unafanya uamuzi wa mwisho", "Iweke kwenye kalenda yako au kwenye friji"] }
          ],
          tryIt: "Orodhesha kila kitu ambacho nyumba yako inahitaji kufanya wiki hii. Muombe msaidizi wa AI akigeuze kuwa ratiba ya siku kwa siku na aonyeshe migongano yoyote.",
          youCanNow: "kugeuza wiki yenye shughuli nyingi kuwa ratiba iliyo wazi na kuona migongano mapema.",
          quickCheck: [
            { objective: "O1", q: "Unapaswa kuandika nini kwanza unapopanga wiki yako kwa AI?", options: ["Kila kitu unachohitaji kufanya, pamoja na saa unazojua", "Majina kamili na tarehe za kuzaliwa za familia yako", "Siku ngumu zaidi tu", "Nywila yako ya kazini"], answer: 0, why: "AI inahitaji orodha yako yote na saa unazojua ili kuipanga kuwa ratiba." },
            { objective: "O1", q: "AI inapendekeza uache miadi ya daktari ya mtoto wako ili kurekebisha mgongano. Unafanya nini?", options: ["Kufanya inavyosema AI", "Kuomba mawazo mengine, kama kushirikiana gari, na kuchagua mwenyewe", "Kufuta kila kitu siku hiyo", "Kuacha kutumia ratiba"], answer: 1, why: "AI inatoa mawazo, lakini wewe unafanya uamuzi wa mwisho kwa ajili ya familia yako." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kupanga milo kwa bajeti",
          minutes: 5,
          goal: "Panga milo ya wiki na orodha ya manunuzi inayoendana na bajeti yako.",
          text: [
            "Msaidizi wa AI anaweza kupanga milo kulingana na ulicho nacho tayari, kile familia yako inapenda, na kiasi unachoweza kutumia.",
            "Mwambie: idadi ya watu, bajeti yako, vyakula ambavyo familia yako inapenda au haiwezi kula, kilichopo jikoni kwako, na muda ulio nao wa kupika. Omba orodha ya manunuzi iliyopangwa kwa sehemu za duka.",
            "AI haijui bei za leo katika duka lako, kwa hiyo makadirio yake ya gharama ni ya kukisia tu. Kagua tangazo la wiki la duka au app yake. Kwa mahitaji ya afya kama kisukari au mzio, fuata ushauri wa daktari wako au mtaalamu wa lishe."
          ],
          steps: ["Angalia chakula ulicho nacho tayari.", "Iambie AI idadi ya watu, bajeti, vyakula mnavyopenda, mzio na muda wa kupika.", "Omba milo mitano ya jioni na orodha ya manunuzi iliyopangwa kwa sehemu za duka.", "Linganisha na bei halisi za duka lako na urekebishe."],
          words: [["Bajeti", "kiasi cha pesa unachopanga kutumia."], ["Vyakula vya msingi", "vyakula vya kawaida unavyotumia mara kwa mara, kama mchele, maharage, unga na mafuta."]],
          slides: [
            { title: "AI inaweza kupanga milo", bullets: ["Kulingana na ulicho nacho tayari", "Kulingana na kile familia yako inapenda", "Kulingana na bajeti yako"] },
            { title: "Iambie", bullets: ["Idadi ya watu na bajeti", "Mnavyopenda, mzio, muda wa kupika", "Kilichopo tayari jikoni kwako"] },
            { title: "Kagua kabla ya kununua", bullets: ["AI haijui bei za leo", "Kagua tangazo la duka au app", "Mahitaji ya afya: fuata daktari wako"] }
          ],
          tryIt: "Muombe msaidizi wa AI milo mitano ya jioni kwa nyumba yako ukitumia vyakula ulivyo navyo tayari pamoja na bajeti unayochagua, na orodha ya manunuzi iliyopangwa kwa sehemu za duka.",
          youCanNow: "kupanga milo kwa bajeti na orodha ya manunuzi kwa AI, na kuikagua dhidi ya bei halisi.",
          quickCheck: [
            { objective: "O2", q: "Kwa nini upange orodha ya manunuzi kwa sehemu za duka?", options: ["Inafanya chakula kiwe rahisi zaidi kwa bei", "AI inaihitaji", "Inafanya ununuzi uwe wa haraka zaidi", "Maduka yanaitaka"], answer: 2, why: "Kupanga kwa sehemu, kama mboga na matunda au maziwa, kunaokoa muda dukani." },
            { objective: "O2", q: "Una mchele, maharage na mayai nyumbani. Unaiambia AI nini?", options: ["Hakuna; itakisia", "Bajeti yako tu", "Mgahawa unaoupenda", "Vyakula ulivyo navyo tayari, ili ipange kulingana navyo"], answer: 3, why: "Kupanga kulingana na chakula ulicho nacho kunaokoa pesa na kupunguza upotevu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kupata msaada wa karibu pesa zinapokuwa chache",
          minutes: 5,
          goal: "Pata huduma ya msaada ya karibu kwa hitaji halisi na uikague kwa chanzo rasmi.",
          text: [
            "Familia nyingi zinahitaji msaada wakati mwingine: kwa chakula, kodi ya nyumba, bili za umeme na maji, malezi ya watoto au kazi. Kuomba msaada ni sehemu ya kuitunza familia yako.",
            "211 ni namba ya siri inayounganisha watu na msaada wa karibu kuhusu makazi, chakula, usafiri, huduma za afya na mengine. Unaweza kupiga 211, na maeneo mengi pia yanatoa ujumbe mfupi au mazungumzo kwenye wavuti. Maktaba yako na kituo cha jamii cha karibu pia vina orodha za msaada wa karibu.",
            "Msaidizi wa AI anaweza kukusaidia kuelewa aina za msaada zilizopo na maswali ya kuuliza. Lakini unaweza kutaja mahali palipofungwa au programu zilizobadilika. Thibitisha kila wakati kwa 211, tovuti rasmi ya programu, au kwa kupiga simu."
          ],
          steps: ["Taja hitaji: chakula, kodi ya nyumba, bili za umeme na maji, malezi ya watoto au kazi.", "Iulize AI ni aina gani za programu kwa kawaida husaidia na nini cha kuziuliza.", "Piga 211 au tembelea 211.org kupata programu halisi za karibu.", "Piga simu au kagua tovuti rasmi ya programu kabla ya kwenda."],
          words: [["Huduma ya msaada", "mahali, programu au mtu anayeweza kusaidia kwa hitaji fulani."], ["Siri", "kinachobaki faragha; hakishirikiwi bila ruhusa yako."]],
          sources: [{ name: "211.org: Kuhusu 211", url: "https://www.211.org/about-us" }],
          slides: [
            { title: "Kuomba msaada ni nguvu", bullets: ["Chakula, kodi, umeme na maji, malezi, kazi", "Kuna programu nyingi za karibu"] },
            { title: "211 inakuunganisha", bullets: ["Piga 211, wakati wowote", "Ni siri, na unaweza kutotaja jina lako", "Pia: orodha za maktaba na kituo cha jamii"] },
            { title: "Tumia AI, kisha thibitisha", bullets: ["AI inaeleza aina za msaada zilizopo", "Inaweza kutaja mahali palipofungwa", "Thibitisha kwa 211 au tovuti rasmi"] }
          ],
          tryIt: "Chagua hitaji moja ambalo familia yako au jirani analo. Iulize AI ni aina gani za programu husaidia kwa hilo. Kisha pata programu moja halisi ya karibu kupitia 211.org au kwa kupiga 211, na uandike namba yake rasmi ya simu.",
          youCanNow: "kupata huduma ya msaada ya karibu kwa hitaji halisi na kuithibitisha kwa chanzo rasmi.",
          quickCheck: [
            { objective: "O3", q: "Mbali na kupiga 211, ni njia gani nyingine mara nyingi unaweza kuifikia?", options: ["Kwa ujumbe mfupi, mazungumzo ya wavuti au 211.org", "Ana kwa ana tu", "Kwa kutuma barua ya posta", "Kupitia app ya kulipia"], answer: 0, why: "Maeneo mengi yanatoa 211 kwa ujumbe mfupi au mazungumzo ya wavuti, na mtandaoni kwenye 211.org." },
            { objective: "O3", q: "Jirani anahitaji msaada wa kulipa bili ya umeme. Hatua nzuri ya kwanza kwa AI ni ipi?", options: ["Kuiomba AI ilipe bili", "Kuuliza ni aina gani za programu husaidia na nini cha kuziuliza", "Kuweka bili ya jirani mtandaoni", "Kusubiri hadi umeme ukatwe"], answer: 1, why: "AI inaweza kueleza aina za msaada na maswali ya kuuliza; kisha unapata programu halisi kupitia 211." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: AI nyumbani",
        questions: [
          { objective: "O1", q: "Unapoorodhesha wiki ya familia yako kwa AI, unapaswa kuwataja watu vipi?", options: ["Majina kamili pamoja na tarehe za kuzaliwa", "Majina ya kwanza au nafasi kama \"mtoto wangu mkubwa\"", "Namba za Social Security (namba ya kitambulisho ya Marekani)", "Anwani ya nyumbani ya kila mtu"], answer: 1, why: "Majina ya kwanza au nafasi za watu huzuia taarifa za faragha zisiingie." },
          { objective: "O1", q: "Mgongano katika ratiba ni nini?", options: ["Mambo mawili yaliyopangwa kwa wakati mmoja", "Siku isiyo na shughuli", "Sikukuu", "Mpango uliofutwa"], answer: 0, why: "Mgongano ni mipango miwili inapoingiliana." },
          { objective: "O2", q: "AI inasema orodha yako ya manunuzi itagharimu $42. Unafanya nini?", options: ["Kuiamini kabisa", "Kulipa $42 kabla ya kununua", "Kuichukulia kama makadirio na kukagua bei za duka", "Kupuuza orodha"], answer: 2, why: "AI haijui bei za leo katika duka lako." },
          { objective: "O2", q: "Mtoto wako ana mzio wa chakula. Ushauri wa nani unatangulia kwa mipango ya milo?", options: ["AI", "Chapisho la mitandao ya kijamii", "Tovuti yoyote tu", "Daktari wako au mtaalamu wa lishe"], answer: 3, why: "Mahitaji ya afya yanafuata ushauri wa mtaalamu." },
          { objective: "O3", q: "AI inataja benki ya chakula karibu nawe. Unapaswa kufanya nini kabla ya kwenda?", options: ["Kuithibitisha kwa 211, tovuti yake rasmi, au kwa kupiga simu", "Kwenda tu", "Kuiweka mtandaoni", "Kuiuliza AI tena"], answer: 0, why: "AI inaweza kutaja mahali palipofungwa; thibitisha kwanza." }
        ]
      }
    },
    {
      name: "Sura 2: AI kwa jamii yako",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuandika ajenda ya mkutano",
          minutes: 5,
          goal: "Tumia msaidizi wa AI kuandika ajenda ya mkutano iliyo wazi ya ukurasa mmoja.",
          text: [
            "Vikundi vya jamii hufanya mengi zaidi mikutano inapokuwa na mpango. Ajenda ni orodha fupi ya mambo mkutano utakayozungumzia, kwa mpangilio, pamoja na muda wa kila sehemu.",
            "Iambie AI kikundi, lengo, urefu wa mkutano, na mada. Kwa mfano: \"Tengeneza ajenda ya saa moja kwa kikundi chetu cha wapangaji. Mada: mashine za kufulia zilizoharibika, sherehe ya chakula cha nje ya kiangazi, na kuchagua katibu mpya. Acha muda wa maswali.\"",
            "Isome ukifikiria mahitaji ya kikundi chako. Hamisha mada, ongeza makaribisho, na hakikisha mada muhimu zaidi haibanwi mwishoni."
          ],
          steps: ["Andika kikundi, lengo, urefu na mada.", "Iombe AI ajenda ya ukurasa mmoja yenye muda wa kila mada.", "Weka mada muhimu zaidi mapema.", "Ongeza makaribisho na muda wa maswali, kisha uishiriki kabla ya mkutano."],
          words: [["Ajenda", "orodha ya mada za mkutano, kwa mpangilio, pamoja na muda."], ["Katibu", "mtu katika kikundi anayeandika kumbukumbu na kutunza rekodi."]],
          slides: [
            { title: "Mikutano inahitaji mpango", bullets: ["Ajenda inaorodhesha mada kwa mpangilio", "Kila mada inapata muda wake"] },
            { title: "Iambie AI", bullets: ["Kikundi na lengo", "Urefu wa mkutano", "Mada"] },
            { title: "Ifanye ikufae", bullets: ["Mada muhimu zaidi mapema", "Ongeza makaribisho na maswali", "Ishiriki kabla ya mkutano"] }
          ],
          tryIt: "Muombe msaidizi wa AI aandike ajenda ya saa moja kwa kikundi halisi unachoshiriki, yenye mada tatu na muda wa maswali.",
          youCanNow: "kutengeneza ajenda ya mkutano iliyo wazi kwa msaidizi wa AI.",
          quickCheck: [
            { objective: "O4", q: "Prompt ya ajenda inapaswa kuiambia AI mambo gani manne?", options: ["Namba za simu za wanachama", "Tarehe tu", "Kikundi, lengo, urefu na mada", "Orodha ya vitafunio vya mkutano"], answer: 2, why: "Ikijua kikundi, lengo, urefu na mada, AI inaweza kutengeneza ajenda yenye manufaa." },
            { objective: "O4", q: "AI imeweka kuchagua katibu mpya mwisho, kwa dakika 5. Hiyo ndiyo mada yako kuu. Unafanya nini?", options: ["Kuiacha hivyo", "Kuiondoa", "Kufupisha mkutano", "Kuihamisha mapema na kuipa muda zaidi"], answer: 3, why: "Mada muhimu zaidi inapaswa kuja mapema ili isibanwe mwishoni." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuandika ujumbe wazi kwa kikundi na kumbukumbu",
          minutes: 5,
          goal: "Andika ukumbusho wa mkutano na ugeuze maandishi ya haraka kuwa muhtasari mfupi.",
          text: [
            "Ukumbusho mzuri unasema nini, lini, wapi, na nini cha kuleta, kwa mistari michache mifupi. Iombe AI ukumbusho wa sauti ya kirafiki, na toleo la pili katika lugha nyingine kama kikundi chako kinahitaji.",
            "Baada ya mkutano, AI inaweza kugeuza maandishi ya haraka kuwa muhtasari safi: kilichoamuliwa, nani atafanya nini, na lini. Acha nje taarifa za faragha, kama matatizo ya afya au ya pesa ya mtu.",
            "Kabla ya kutuma, kagua majina, tarehe na maamuzi na mtu aliyekuwepo. Muhtasari lazima ulingane na kilichotokea kweli."
          ],
          steps: ["Omba ukumbusho wa kirafiki wenye nini, lini, wapi na nini cha kuleta.", "Omba toleo la lugha ya pili ikihitajika.", "Baada ya mkutano, bandika maandishi yako ya haraka bila taarifa za faragha.", "Omba muhtasari: maamuzi, nani anafanya nini, na lini.", "Ukague na mtu aliyekuwepo, kisha utume."],
          words: [["Muhtasari", "toleo fupi linalobaki na mambo makuu tu."], ["Kazi ya kufuatilia", "kazi ambayo mtu amekubali kuifanya baada ya mkutano."]],
          slides: [
            { title: "Ukumbusho mzuri", bullets: ["Nini, lini, wapi, nini cha kuleta", "Mfupi na wa kirafiki", "Lugha ya pili ikihitajika"] },
            { title: "Maandishi kuwa muhtasari", bullets: ["Bandika maandishi ya haraka, bila taarifa za faragha", "Omba maamuzi na kazi za kufuatilia", "Nani anafanya nini, na lini"] },
            { title: "Kagua kabla ya kutuma", bullets: ["Majina, tarehe na maamuzi", "Uliza mtu aliyekuwepo"] }
          ],
          tryIt: "Muombe msaidizi wa AI ukumbusho wa mistari mitatu kwa mkutano wa Somo la 4. Kisha andika maandishi matano ya haraka ya mazoezi na umuombe ayageuze kuwa muhtasari wenye kazi za kufuatilia.",
          youCanNow: "kuandika ukumbusho wazi wa mkutano na kugeuza maandishi kuwa muhtasari wenye kazi za kufuatilia.",
          quickCheck: [
            { objective: "O5", q: "Muhtasari wa mkutano unaorodhesha nini?", options: ["Maamuzi, nani anafanya nini, na lini", "Matatizo ya faragha ya kila mtu", "Vitafunio tu", "Kila neno lililosemwa"], answer: 0, why: "Muhtasari unaonyesha kilichoamuliwa na nani atafanya nini kufikia lini." },
            { objective: "O5", q: "Maandishi yako ya haraka yanasema mwanachama amechelewa kulipa kodi ya nyumba. Unafanya nini kabla ya kuyabandika kwenye AI?", options: ["Kuiacha; ni muhimu", "Kuondoa taarifa hiyo ya faragha", "Kuongeza jina lake kamili", "Kutuma maandishi kwa mtaa mzima"], answer: 1, why: "Taarifa za faragha kuhusu pesa au afya ya mtu hazipaswi kuingia kwenye prompt za AI wala muhtasari." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kutengeneza orodha ya huduma za msaada za jamii",
          minutes: 5,
          goal: "Tengeneza orodha ya ukurasa mmoja ya msaada wa karibu ambao umeukagua mwenyewe.",
          text: [
            "Orodha ya huduma za msaada inawasaidia majirani kupata msaada haraka. Iwe ukurasa mmoja: aina ya msaada, jina la programu, namba rasmi ya simu au tovuti, na saa za kazi.",
            "Tumia AI kupanga mpangilio wa ukurasa na kueleza kila programu kwa sentensi moja rahisi. Pata majina, namba na saa halisi kutoka 211, tovuti rasmi ya programu, au kwa kupiga simu, si kutoka kwa AI.",
            "Weka tarehe chini (\"Imekaguliwa tarehe ...\"). Programu hubadilika, kwa hiyo ikague orodha tena kila baada ya miezi michache."
          ],
          steps: ["Chagua mahitaji matatu ya jamii yako.", "Pata programu moja halisi kwa kila hitaji kupitia 211 au tovuti rasmi.", "Iombe AI mpangilio rahisi wa ukurasa mmoja na maelezo ya mstari mmoja rahisi kwa kila programu.", "Jaza namba rasmi na saa wewe mwenyewe.", "Ongeza tarehe ulipoikagua."],
          words: [["Mpangilio wa ukurasa", "jinsi maneno na visanduku vinavyopangwa kwenye ukurasa."]],
          sources: [{ name: "211.org: pata 211 ya eneo lako", url: "https://www.211.org/about-us" }],
          slides: [
            { title: "Orodha ya msaada ya ukurasa mmoja", bullets: ["Aina ya msaada na jina la programu", "Simu rasmi au tovuti", "Saa za kazi"] },
            { title: "Nani anafanya nini", bullets: ["AI: mpangilio na maelezo rahisi", "Wewe: majina, namba, saa halisi kutoka vyanzo rasmi"] },
            { title: "Iweke ya sasa", bullets: ["Andika \"Imekaguliwa tarehe\" na tarehe", "Kagua tena kila baada ya miezi michache"] }
          ],
          tryIt: "Kazi ya mwisho: andaa mkutano mdogo kwa kikundi chako ukiwa na ajenda iliyoandikwa na AI na ujumbe wa ukumbusho, na tengeneza orodha ya ukurasa mmoja ya huduma tatu za msaada za karibu ulizozikagua mwenyewe.",
          youCanNow: "kuandaa mkutano wa jamii na kushiriki orodha iliyokaguliwa ya msaada wa karibu.",
          quickCheck: [
            { objective: "O6", q: "Ni mambo gani manne yanaingia katika kila mstari wa orodha ya huduma za msaada?", options: ["Jina, umri, anwani na kazi", "Bei, rangi, ukubwa na chapa", "Aina ya msaada, jina la programu, simu rasmi au tovuti, na saa", "Jina la programu tu"], answer: 2, why: "Mambo haya manne yanawawezesha majirani kupata na kufikia msaada haraka." },
            { objective: "O6", q: "AI inajaza namba ya simu ya benki ya chakula. Unafanya nini?", options: ["Kuitumia kama ilivyo", "Kuiondoa benki ya chakula kwenye orodha", "Kuiuliza AI tena", "Kuibadilisha kwa namba kutoka 211 au tovuti rasmi"], answer: 3, why: "Namba na saa halisi zinatoka 211 au vyanzo rasmi, si kutoka kwa AI." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: AI kwa jamii yako",
        questions: [
          { objective: "O4", q: "Ajenda ni nini?", options: ["Orodha ya mada za mkutano, kwa mpangilio, pamoja na muda", "Bili", "Mazungumzo ya kikundi kwenye simu", "Karatasi ya kusaini mahudhurio"], answer: 0, why: "Ajenda inapanga kile mkutano utakachozungumzia." },
          { objective: "O4", q: "Mada muhimu zaidi inapaswa kuwekwa wapi kwenye ajenda?", options: ["Mwisho kabisa", "Mapema katika mkutano", "Isiwe kwenye ajenda", "Katika mkutano mwingine mwaka ujao"], answer: 1, why: "Mada za mapema zinapata muda na umakini zaidi." },
          { objective: "O5", q: "Ukumbusho mzuri wa mkutano una:", options: ["Namba za simu za kila mtu", "Anwani za nyumbani za wanachama", "Nini, lini, wapi na nini cha kuleta", "Historia ndefu ya kikundi"], answer: 2, why: "Mambo hayo manne ndiyo watu wanayohitaji." },
          { objective: "O5", q: "Maandishi yako yanataja tatizo la kiafya la mwanachama. Kabla ya kuyapa AI, wewe:", options: ["Unaiacha", "Unaongeza maelezo zaidi", "Unaishiriki kwenye mazungumzo ya kikundi", "Unaondoa taarifa hiyo ya faragha"], answer: 3, why: "Taarifa za faragha za watu wengine hazipaswi kuingia kwenye zana za AI." },
          { objective: "O6", q: "Namba za simu katika orodha ya huduma za msaada zinapaswa kutoka wapi?", options: ["211 au tovuti rasmi ya programu", "Chochote AI inachosema", "Kukisia", "Tangazo la zamani la miaka iliyopita"], answer: 0, why: "AI inaweza kutoa namba zisizo sahihi; vyanzo rasmi ni sahihi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Jamii na Maisha ya Kila Siku",
    questions: [
      { objective: "O1", q: "Kupanga wiki ya familia yako kwa AI, kwanza:", options: ["Orodhesha kila kitu unachohitaji kufanya, pamoja na saa unazojua", "Andika namba ya akaunti yako ya benki", "Nunua app ya kupanga", "Piga 211"], answer: 0, why: "AI inahitaji orodha yako ili kuipanga." },
      { objective: "O1", q: "Ni njia ipi salama ya kuwataja wanafamilia katika prompt?", options: ["Majina kamili na tarehe za kuzaliwa", "\"Mtoto wangu mkubwa\" au majina ya kwanza", "Namba za vitambulisho vya shule", "Namba za Social Security (namba ya kitambulisho ya Marekani)"], answer: 1, why: "Nafasi za watu au majina ya kwanza huweka taarifa kuwa za faragha." },
      { objective: "O1", q: "AI inapopata mgongano, wewe:", options: ["Unaiacha AI iamue", "Unaupuuza", "Unaomba mawazo, kisha unafanya uamuzi wa mwisho", "Unafuta kila kitu"], answer: 2, why: "AI inapendekeza; wewe unaamua." },
      { objective: "O2", q: "Prompt ya mpango wa milo inapaswa kuwa na:", options: ["Nywila yako", "Anwani yako", "PIN ya benki yako", "Idadi ya watu, bajeti, vyakula mnavyopenda na mzio"], answer: 3, why: "Taarifa hizo zinaunda mpango wenye manufaa." },
      { objective: "O2", q: "Kwa nini ukague tangazo la wiki la duka baada ya AI kutengeneza orodha yako?", options: ["AI haijui bei za leo", "AI hutoza bei kubwa kila wakati", "Maduka yanaitaka", "Ni sheria"], answer: 0, why: "Makadirio ya gharama ya AI ni ya kukisia tu." },
      { objective: "O2", q: "Vyakula vya msingi ni:", options: ["Vifaa vya ofisini tu", "Vyakula vya kawaida unavyotumia mara kwa mara, kama mchele na maharage", "Vitindamlo vya kifahari", "Milo ya mgahawa"], answer: 1, why: "Vyakula vya msingi ni vyakula vya kawaida vya kila siku." },
      { objective: "O3", q: "211 ni:", options: ["App ya AI", "Duka", "Namba ya siri inayounganisha watu na msaada wa karibu", "Benki"], answer: 2, why: "211 inakuunganisha na msaada wa karibu." },
      { objective: "O3", q: "Simu za kwenda 211:", options: ["Zinashirikiwa mtandaoni", "Zinarekodiwa kwa ajili ya matangazo", "Ni za biashara tu", "Ni za siri na unaweza kutotaja jina lako"], answer: 3, why: "211 inasema simu ni za siri na unaweza kutotaja jina lako." },
      { objective: "O3", q: "AI inakupa orodha ya benki za chakula. Kabla ya kwenda, wewe:", options: ["Unathibitisha moja kwa 211, tovuti yake rasmi au kwa kupiga simu", "Unaenda kwa zote", "Unaiamini kabisa", "Unaweka orodha mtandaoni"], answer: 0, why: "Programu hufungwa au hubadilika; thibitisha kwanza." },
      { objective: "O3", q: "Kuomba msaada wa chakula au bili ni:", options: ["Kitu cha kuficha", "Sehemu ya kuitunza familia yako", "Hairuhusiwi", "Ni kwa watu wengine tu"], answer: 1, why: "Kutumia msaada wa karibu ni hatua ya busara na ya kawaida." },
      { objective: "O4", q: "Ajenda ya mkutano inapaswa kuwa na:", options: ["Tarehe tu", "Namba za simu za wanachama", "Mada kwa mpangilio pamoja na muda", "Anwani ya kila mtu"], answer: 2, why: "Mada na muda huufanya mkutano uende vizuri." },
      { objective: "O4", q: "Prompt nzuri ya ajenda inaiambia AI:", options: ["Hakuna kitu", "Nywila yako", "Benki yako", "Kikundi, lengo, urefu na mada"], answer: 3, why: "Taarifa hizo zinaunda ajenda yenye manufaa." },
      { objective: "O4", q: "Unapaswa kushiriki ajenda lini?", options: ["Kabla ya mkutano", "Kamwe", "Mwezi mmoja baadaye", "Kwa mwenyekiti tu"], answer: 0, why: "Kuishiriki mapema kunasaidia watu kuja wakiwa tayari." },
      { objective: "O5", q: "Kikundi chako kina wanachama wanaozungumza Kihispania. Kwa ukumbusho unaweza:", options: ["Kuwaruka", "Kuiomba AI toleo la lugha ya pili", "Kutumia picha tu", "Kutotuma chochote"], answer: 1, why: "Toleo la lugha ya pili linawajumuisha wanachama zaidi." },
      { objective: "O5", q: "Kazi ya kufuatilia ni:", options: ["Filamu", "Aina ya app", "Kazi ambayo mtu amekubali kuifanya baada ya mkutano", "Kitafunio"], answer: 2, why: "Kazi za kufuatilia zinasema nani anafanya nini, na lini." },
      { objective: "O5", q: "Kabla ya kutuma muhtasari wa mkutano, unapaswa:", options: ["Kuongeza taarifa za faragha", "Kuutuma bila kuusoma", "Kufuta maandishi", "Kuukagua na mtu aliyekuwepo"], answer: 3, why: "Muhtasari lazima ulingane na kilichotokea." },
      { objective: "O6", q: "Katika orodha ya huduma za msaada, nani anapaswa kujaza namba za simu na saa?", options: ["Wewe, kutoka vyanzo rasmi", "AI", "Hakuna mtu", "Tangazo linalojitokeza ghafla"], answer: 0, why: "Vyanzo rasmi vinatoa namba sahihi." },
      { objective: "O6", q: "Kwa nini uongeze \"Imekaguliwa tarehe\" na tarehe kwenye orodha yako?", options: ["Inapendeza", "Programu hubadilika, kwa hiyo watu wanajua ni ya sasa kiasi gani", "Sheria inaitaka", "Kuifanya iwe ndefu"], answer: 1, why: "Tarehe inaonyesha ilithibitishwa mara ya mwisho lini." },
      { objective: "O6", q: "Unapaswa kukagua tena orodha ya huduma za msaada mara ngapi?", options: ["Kamwe", "Kila baada ya miaka kumi", "Kila baada ya miezi michache", "Mtu akilalamika tu"], answer: 2, why: "Programu hubadilika, kwa hiyo kagua tena mara kwa mara." },
      { objective: "O6", q: "Katika kazi ya mwisho, orodha ya huduma za msaada ina:", options: ["Mahali kumi ambapo AI imebuni", "Anwani za nyumbani za wanachama", "Mahali pamoja tu", "Huduma tatu za msaada za karibu ulizozikagua mwenyewe"], answer: 3, why: "Kazi ni huduma tatu ulizozithibitisha." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      3,
      6,
      8,
      10,
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
        name: "Ajenda",
        objective: "O4",
        notYet: "Hakuna ajenda, au mada bila mpangilio wala muda.",
        meets: "Ukurasa mmoja wenye mada kwa mpangilio, muda, na muda wa maswali.",
        exceeds: "Mada muhimu zaidi iko mapema, na kuna makaribisho."
      },
      {
        name: "Ujumbe wa ukumbusho",
        objective: "O5",
        notYet: "Unakosa nini, lini au wapi.",
        meets: "Ukumbusho mfupi wa kirafiki wenye nini, lini, wapi na nini cha kuleta.",
        exceeds: "Pia una toleo la lugha ya pili ambalo kikundi kinahitaji."
      },
      {
        name: "Huduma zilizokaguliwa",
        objective: "O3",
        notYet: "Programu au namba zilitoka kwa AI na hazikukaguliwa.",
        meets: "Programu tatu halisi za karibu, kila moja imethibitishwa kupitia 211, tovuti rasmi au kwa kupiga simu.",
        exceeds: "Anaweza kueleza jinsi kila moja ilivyokaguliwa."
      },
      {
        name: "Mpangilio wa orodha ya msaada",
        objective: "O6",
        notYet: "Inakosa namba za simu, saa au tarehe.",
        meets: "Ukurasa mmoja wenye aina ya msaada, programu, namba rasmi au tovuti, saa, na tarehe ya \"Imekaguliwa tarehe\".",
        exceeds: "Kila programu ina maelezo ya mstari mmoja rahisi."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (rubriki)",
      "Wanafunzi wanaofanya mkutano wa kikundi uliopangwa wenye ajenda ndani ya siku 30 (utafiti wa ufuatiliaji)",
      "Wanafunzi au majirani wanaounganishwa na programu ya msaada ya karibu iliyopatikana kupitia 211",
      "Washirika wa jamii wanaripoti orodha za msaada zilizoshirikiwa na kusasishwa"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja yenye intaneti, au kompyuta ya maktaba au ya kituo cha jamii",
      "Msaidizi wa AI wa bure: Microsoft Copilot, ChatGPT au Google Gemini",
      "Kufikia 211 kwa simu, ujumbe mfupi au 211.org",
      "Karatasi na kalamu, au kalenda ya simu, kwa ratiba na orodha",
      "Takriban dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Endesha kozi na kikundi halisi, kama kikundi cha wazazi au wapangaji, ili ajenda na orodha ya msaada vitumike mara moja.",
      "Onyesha 211 moja kwa moja na uwakumbushe wanafunzi kwamba kuomba msaada ni jambo la kawaida.",
      "Kagua prompt kama zina taarifa za faragha: majina ya kwanza au nafasi tu, na hakuna kitu kuhusu afya au pesa za wengine.",
      "Kusanya orodha za msaada zilizokaguliwa kuwa orodha moja ya pamoja ya kikundi, yenye tarehe ya kukaguliwa.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};

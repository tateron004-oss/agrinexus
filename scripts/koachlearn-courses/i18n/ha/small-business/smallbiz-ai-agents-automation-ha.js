"use strict";

// Koach Learn course, Hausa (ha) translation of small-business/smallbiz-ai-agents-automation.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "smallbiz-ai-agents-automation-ha",
  lang: "ha",
  translationOf: "smallbiz-ai-agents-automation",
  category: "Small Business",
  name: "Wakilan AI don Sarrafa Ayyukan Kasuwanci da Kansu",
  skills: "Bambanta automation da wakilin AI, Rubuta matakan aiki ɗaya bayan ɗaya, Tsara aiki mai abin farawa da matakai, Saka amincewar mutum, Gwaji da bayanan gwaji, Rajista da sa ido",
  outcome: "tsara, gina da gwada wani automation ɗaya mai sauƙi lafiya don kasuwancinku, misali mayar da sabuwar tambaya daga fom na intanet zuwa layi a takardar lissafi (spreadsheet), daftarin amsa da tunatarwa gare ku, tare da matakin amincewar mutum kafin a aika komai, gwaji da bayanan gwaji, da rajista da kuke dubawa kowane mako.",
  about: [
    "Wannan kwas ɗin na masu ƙananan kasuwanci ne da ke maimaita ayyukan kwamfuta iri ɗaya kowace rana: kwafa amsoshin fom zuwa takarda, aika imel iri ɗaya na biyo baya, yin takardun biyan kuɗi (invoice), da rarraba tambayoyin abokan ciniki. Misalai sun fito daga shaguna, gidajen abinci, wuraren gyaran gashi, ayyukan share-share da gyare-gyare, da ƙananan ofisoshi.",
    "Za ku koyi bambanci tsakanin automation mai sauƙi da wakilin AI (AI agent), ku rubuta matakan aiki, ku tsara aiki mai abin farawa (trigger) da matakai (actions), sannan ku gina ɗaya da kayan aiki marasa buƙatar rubuta code (no-code) kamar Zapier, Make ko Microsoft Power Automate, ko abubuwan automation na kayan aikin da kuke amfani da su. Mafi muhimmanci, za ku bar mutum a matsayin mai iko.",
    "Kayan aiki suna yawan canja allonsu da farashinsu, don haka muna bayanin abin da za a yi maimakon ainihin sunayen menu; ku duba shafin kowane kayan aiki don tsarinsa na kyauta na yanzu. Kowane darasi yana ɗaukar kusan minti biyar, akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku gina automation ɗaya da ke aiki don wani aiki na gaske da kuke maimaitawa: ku rubuta taswirar matakai, ku zaɓi abin farawa da matakai, ku saka matakin amincewar mutum kafin a aika ko a biya komai, ku gwada shi da bayanan gwaji guda uku (ba bayanan abokan ciniki na gaske ba), ku gyara abin da ya karye, sannan ku kafa rajista mai sauƙi da dubawa kowane mako. Ku rubuta bayaninsa a shafi ɗaya ta yadda wani zai iya fahimtarsa ko ya kashe shi.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu ƙananan kasuwanci da ke maimaita ayyukan kwamfuta iri ɗaya kowace rana, kamar kwafa amsoshin fom zuwa takarda, aika imel iri ɗaya na biyo baya, yin takardun biyan kuɗi da rarraba tambayoyi, a shaguna, gidajen abinci, wuraren gyaran gashi, ayyukan share-share da gyare-gyare da ƙananan ofisoshi.",
    startingPoint: "Suna amfani da imel, fom na intanet ko kayan ɗaukar alƙawari, da takardar lissafi (spreadsheet), kuma wataƙila sun gwada mataimakin AI. Yawancinsu ba su taɓa gina automation ko amfani da kayan automation marasa buƙatar code ba.",
    gap: "Ayyukan da ake maimaitawa suna cin awanni kowane mako, kuma kurakurai suna shiga idan mutane sun gaji. Masu koyo suna buƙatar sarrafa matakan yau da kullum da kansu lafiya, tare da mutum yana amincewa da duk abin da za a aika ko a biya, don su adana lokaci ba tare da rasa iko kan abokan ciniki, kuɗi ko bayanai ba.",
    constraints: [
      "Kayan aiki marasa buƙatar code, kyauta ko masu araha; tsare-tsaren kyauta suna da iyakoki da ke canjawa, don haka masu koyo suna duba shafin kowane kayan aiki",
      "Babu bayanan abokan ciniki na gaske a gwaji; bayanan gwaji kaɗai",
      "Mutum yana amincewa da duk abin da ke kashe kuɗi, ke aika saƙo ga abokan ciniki, ko ke canja bayanai",
      "Tsaro: shiga mai matakai biyu, ƙaramin izini, babu lambobin kati ko kalmomin sirri a matakan AI",
      "Lokaci: kusan minti 60 gaba ɗaya, a darussa na minti 5"
    ],
    prerequisites: "Sanin amfani da imel da takardar lissafi. Masu koyo da ba su saba da mataimakan AI ba za su iya fara ɗaukar kwas na gabatarwa ga AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku wani aikin kasuwanci", action: "bayyana ko automation mai ƙayyadaddun dokoki ne ya dace da shi ko matakin AI, da waɗanne sassa za su zauna a hannun mutum", standard: "kuna barin kuɗi, saƙonni ga abokan ciniki da canjin bayanai a hannun mutum" },
    { id: "O2", condition: "Idan kuna da aiki ɗaya da kuke yawan maimaitawa", action: "rubuta taswirar matakai da yi wa kowane mataki alama: Doka, Rubutu, Shawara, ko Kuɗi da aikawa", standard: "tare da kowane mataki da kuke yi a yau a ciki" },
    { id: "O3", condition: "Idan kuna da taswirar matakanku", action: "tsara aiki mai abin farawa, matakai da matakin amincewar mutum, zane a takarda", standard: "tare da amincewa kafin wani abu ya fita daga kasuwancin" },
    { id: "O4", condition: "Ta amfani da kayan automation marasa buƙatar code", action: "gina aikin, haɗa asusunku da daidaita filayen bayanai (fields)", standard: "tare da matakin AI yana samun filayen da yake buƙata kaɗai, kuma yana aiko muku da daftarinsa" },
    { id: "O5", condition: "Idan aka ba ku bayanan gwaji na ƙirƙira guda uku", action: "gwada automation ɗin da gyara abin da ya karye, canji ɗaya a lokaci ɗaya", standard: "har bayani na yau da kullum, bayani mai fili da ya ɓace, da bayani mai rubutu na ban mamaki duk sun wuce" },
    { id: "O6", condition: "Da zarar automation ɗin ya fara aiki", action: "kafa rajista, dubawa kowane mako, da bayanin shafi ɗaya da ke faɗin yadda ake kashe shi", standard: "ta yadda wani zai iya fahimtarsa ko ya dakatar da shi" }
  ],
  chapters: [
    {
      name: "Babi na 1: Fahimta da tsara automation",
      lessons: [
        {
          objectives: ["O1"],
          title: "Automation da wakilan AI: mene ne bambancin?",
          minutes: 5,
          goal: "Bayyana bambanci tsakanin automation mai ƙayyadaddun dokoki da wakilin AI, da lokacin da kowanne ya dace.",
          text: [
            "Automation yana bin ƙayyadaddun dokokin da kuka saka: \"Idan an aiko sabon fom, ƙara layi a takardata kuma ka aiko mini da imel.\" Yana yin abu ɗaya kowane lokaci. Ana iya hasashen abin da zai yi, kuma yana da sauƙin dubawa.",
            "Wakilin AI (AI agent) tsarin AI ne da zai iya zaɓar wasu daga cikin matakansa da kansa don cimma wata manufa, kamar karanta tambaya, yanke wane irin tambaya ce, rubuta daftarin amsa, da zaɓar wane kayan aiki zai yi amfani da shi a gaba. Wakilai sun fi sassauci amma ba a iya hasashen su sosai, kuma suna iya yin kuskure kamar sun tabbata.",
            "Ga ƙaramin kasuwanci, ku fara da automation mai ƙayyadaddun dokoki, sannan ku ƙara AI a mataki ɗaya inda tunani game da kalmomi zai taimaka, kamar rubuta daftarin amsa ko rarraba saƙonni. Ku bar mutane a matsayin masu iko kan duk abin da ke kashe kuɗi, ke aika saƙo ga abokan ciniki, ko ke canja bayanai."
          ],
          words: [["Automation", "jerin ƙayyadaddun matakai da kwamfuta ke yi da kanta idan wani abu ya faru."], ["Wakilin AI (AI agent)", "tsarin AI da zai iya zaɓar wasu daga cikin matakansa da kansa don cimma manufa."], ["Aiki mai matakai (workflow)", "jerin matakan da ke kammala wani aiki."]],
          slides: [
            { title: "Automation", bullets: ["Ƙayyadaddun dokokin da kuka saka", "Sakamako iri ɗaya kowane lokaci", "Ana iya hasashen sa, kuma yana da sauƙin dubawa"] },
            { title: "Wakilin AI", bullets: ["Yana zaɓar wasu daga cikin matakansa da kansa", "Yana da sassauci, amma ba a iya hasashen sa sosai", "Yana iya yin kuskure kamar ya tabbata"] },
            { title: "Ku fara da mai sauƙi", bullets: ["Automation mai ƙayyadaddun dokoki da farko", "Ku ƙara AI a mataki ɗaya na rubutu", "Mutane suna amincewa da kuɗi, saƙonni da bayanai"] }
          ],
          tryIt: "Ku rubuta ayyuka biyu da kuke maimaitawa a kasuwancinku. Ga kowanne, ku rubuta ko automation mai ƙayyadaddun dokoki zai iya yin sa, ko yana buƙatar tunani (wanda zai iya zama matakin AI).",
          youCanNow: "bayyana bambanci tsakanin automation da wakilin AI, da zaɓar wanda ya fi aminci.",
          quickCheck: [
            { objective: "O1", q: "Mene ne raunin wakilan AI idan aka kwatanta su da automation mai ƙayyadaddun dokoki?", options: ["Ba a iya hasashen su sosai, kuma suna iya yin kuskure kamar sun tabbata", "Ba za su taɓa iya amfani da kalmomi ba", "Suna aiki da dare kaɗai", "Ba sa kashe ko sisi"], answer: 0, why: "Wakilai sun fi sassauci amma ba a iya hasashen su sosai, kuma suna iya yin kuskure kamar sun tabbata." },
            { objective: "O1", q: "Kuna son AI ya amsa tambayoyi kuma ya biya takardun kuɗin masu kawo kaya da kansa. Me ya kamata ku yi?", options: ["Ku bar wakilin AI ya yi duka biyun", "Ku bar AI ya rubuta daftarin amsoshi, kuma ku bar biya da aikawa a hannun mutum", "Ku kashe duk automation", "Ku bar AI ya biya amma kada ya amsa"], answer: 1, why: "Ku bar mutane a matsayin masu iko kan kashe kuɗi da aika saƙonni ga abokan ciniki." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rubuta matakan aikin da ake maimaitawa ɗaya bayan ɗaya",
          minutes: 5,
          goal: "Raba aiki ɗaya da ake maimaitawa zuwa taswirar matakai a sarari.",
          text: [
            "Ba za ku iya sarrafa abin da ba ku rubuta ba. Ku zaɓi aiki ɗaya da kuke yawan yi, ku rubuta kowane mataki kamar yadda kuke yin sa a yau. Misali ga ayyukan share-share: (1) tambaya ta zo ta fom na intanet, (2) ina kwafa suna, adireshi da irin aikin zuwa takardata, (3) ina rubuta amsa mai jerin farashina, (4) ina ƙara tunatarwa don sake kira, (5) ina aika ƙiyasin farashi (quote).",
            "Ku yi wa kowane mataki alama: Doka (koyaushe iri ɗaya ne), Rubutu (yana buƙatar rubutu ko tunani), Shawara (yana buƙatar mai kasuwanci), Kuɗi da aikawa (yana buƙatar amincewa).",
            "Matakan da aka yi wa alamar Doka za a iya sarrafa su da kansu. Matakan Rubutu za su iya samun daftari daga AI. Matakan Shawara da na Kuɗi da aikawa suna zauna a hannun mutum."
          ],
          steps: ["Ku zaɓi aikin da kuke yi aƙalla sau ɗaya a mako.", "Ku rubuta kowane mataki kamar yadda kuke yin sa yanzu.", "Ku yi wa kowanne alama: Doka, Rubutu, Shawara, Kuɗi da aikawa.", "Ku zagaye matakan Doka don ku fara sarrafa su da kansu."],
          words: [["Taswirar matakai (step map)", "jerin lambobi na kowane mataki a cikin aiki."], ["Da hannu (manual)", "abin da mutum ke yi da hannunsa."]],
          slides: [
            { title: "Ku rubuta shi kafin ku sarrafa shi", bullets: ["Ku zaɓi aiki ɗaya da kuke yawan yi", "Ku jera kowane mataki kamar yadda kuke yi a yau"] },
            { title: "Ku yi wa kowane mataki alama", bullets: ["Doka: koyaushe iri ɗaya ne", "Rubutu: rubutu ko tunani", "Shawara / Kuɗi da aikawa: mutum"] },
            { title: "Abin da ake sarrafawa da kansa", bullets: ["Matakan Doka: a sarrafa su da kansu", "Matakan Rubutu: daftari daga AI", "Matakan shawara da kuɗi: mutane"] }
          ],
          tryIt: "Ku rubuta taswirar matakai don aiki ɗaya da kuke maimaitawa a kasuwancinku, ku yi wa kowane mataki alama: Doka, Rubutu, Shawara, ko Kuɗi/aikawa.",
          youCanNow: "raba aikin da ake maimaitawa zuwa taswirar matakai da ke nuna abin da za a iya sarrafawa da kansa.",
          quickCheck: [
            { objective: "O2", q: "Waɗanne matakai ne ke zauna a hannun mutum?", options: ["Matakan Doka", "Matakan Rubutu", "Matakan Shawara da na Kuɗi da aikawa", "Kowane mataki"], answer: 2, why: "Matakan Shawara da na Kuɗi da aikawa suna zauna a hannun mutum; matakan Doka za a iya sarrafa su da kansu." },
            { objective: "O2", q: "Kuna son sarrafa yadda kuke kula da sababbin tambayoyi da kansu. Me za ku fara yi?", options: ["Ku sayi kayan aiki mafi tsada", "Ku nemi AI ya yi hasashen yadda kuke aiki", "Ku fara ginawa nan take", "Ku rubuta kowane mataki kamar yadda kuke yin sa a yau"], answer: 3, why: "Ba za ku iya sarrafa abin da ba ku rubuta ba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Tsara aikin: abin farawa, matakai, amincewa",
          minutes: 5,
          goal: "Tsara aiki mai abin farawa, matakai da matakin amincewar mutum.",
          text: [
            "Kowane automation yana da abin farawa (trigger, wato abin da ke fara shi) da matakai (actions, wato abin da ke faruwa a gaba). Abin farawa: \"sabon fom an aiko\". Matakai: \"ƙara layi a takarda\", \"rubuta daftarin amsa da AI\", \"aiko mini da daftarin don amincewa\", \"yi tunatarwa a kalanda\".",
            "Ku saka amincewar mutum kafin wani abu ya fita daga kasuwancin: saƙonni ga abokan ciniki, biyan kuɗi, canjin farashi, goge bayanai. Automation ɗin zai iya shirya komai; ku ne kuke danna aika.",
            "Ku fara zana shi a takarda da akwatuna da kibiyoyi. Ku rubuta sunan kayan aiki a kowane akwati: kayan fom ɗinku, Google Sheets ko Excel, matakin AI, imel ɗinku, kalandarku. Ku duba cewa kowane kayan aiki yana haɗuwa da sabis ɗin haɗawa (connector) da kuke shirin amfani da shi."
          ],
          steps: ["Ku rubuta abin farawa.", "Ku jera matakan a jere.", "Ku saka matakin amincewa kafin a aika ko a biya komai.", "Ku zana shi da akwatuna da kibiyoyi.", "Ku rubuta sunan kayan aiki a kowane akwati, ku duba cewa yana haɗuwa."],
          words: [["Abin farawa (trigger)", "abin da ke faruwa ya fara automation."], ["Mataki (action)", "abin da automation ke yi bayan abin farawa."], ["Matakin amincewa", "wurin da dole mutum ya ce \"eh\" kafin aikin ya ci gaba."]],
          slides: [
            { title: "Abin farawa da matakai", bullets: ["Abin farawa: sabon fom an aiko", "Matakai: ƙara layi, daftarin AI, tunatar da ni"] },
            { title: "Amincewar mutum", bullets: ["Kafin saƙonni su fita daga kasuwancin", "Kafin biyan kuɗi, canjin farashi ko goge bayanai", "Automation ɗin yana shiryawa; ku ne kuke danna aika"] },
            { title: "Ku fara zana shi", bullets: ["Akwatuna da kibiyoyi a takarda", "Sunan kayan aiki a kowane akwati", "Ku duba cewa kowane kayan aiki yana haɗuwa"] }
          ],
          tryIt: "Ku zana aikin da ya shafi aikinku daga Darasi na 2: abin farawa, matakai, da matakin amincewa. Ku rubuta sunan kayan aiki a kowane akwati.",
          youCanNow: "tsara aiki mai abin farawa, matakai da matakin amincewar mutum.",
          quickCheck: [
            { objective: "O3", q: "A cikin aiki mai matakai, mene ne \"matakai\" (actions)?", options: ["Abin da ke faruwa bayan abin farawa", "Abin da ke fara shi", "Kalmar sirrinku", "Farashin kayan aikin"], answer: 0, why: "Abin farawa yana fara automation; matakai su ne abin da ke faruwa a gaba." },
            { objective: "O3", q: "A tsarinku, matakin AI yana aika imel kai tsaye ga abokan ciniki. Me za ku canja?", options: ["Babu komai; yana adana lokaci", "Ku sa a aiko muku da daftarin don amincewa kafin ya je ga abokin ciniki", "Ku cire abin farawa", "Ku ƙara matakin AI na biyu don duba na farkon"], answer: 1, why: "Amincewar mutum tana zuwa kafin wani abu ya fita daga kasuwancin." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Fahimta da tsara automation",
        questions: [
          { objective: "O1", q: "Wanne ne ya fi bayyana automation mai ƙayyadaddun dokoki?", options: ["Yana zaɓar manufofinsa da kansa", "Yana bin dokokin da kuka saka, kuma yana yin abu ɗaya kowane lokaci", "Mutum ne", "Ba ya taɓa aiki"], answer: 1, why: "Automation yana bin ƙayyadaddun dokoki." },
          { objective: "O1", q: "Wanne ne aka fi iya hasashen abin da zai yi?", options: ["Babu ɗayansu da ke aiki", "Wakilin AI", "Koyaushe iri ɗaya suke", "Automation mai ƙayyadaddun dokoki"], answer: 3, why: "Wakilai suna zaɓar matakai, don haka ba a iya hasashen su sosai." },
          { objective: "O2", q: "A taswirar matakai, \"aika ƙiyasin farashi\" ana yi masa alamar:", options: ["Kuɗi da aikawa: yana buƙatar amincewa", "Doka: a sarrafa shi gaba ɗaya da kansa", "A yi watsi da shi", "A goge shi"], answer: 0, why: "Duk abin da za a aika ga abokin ciniki yana buƙatar amincewar mutum." },
          { objective: "O3", q: "Mene ne abin farawa (trigger)?", options: ["Kalmar sirri", "Mataki na ƙarshe", "Abin da ke faruwa ya fara automation", "Farashi"], answer: 2, why: "Abin farawa yana fara aiki mai matakai." },
          { objective: "O3", q: "A ina matakin amincewa yake zuwa?", options: ["Babu inda", "Bayan abokin ciniki ya samu", "Kafin wani abu ya fita daga kasuwancin", "A ƙarshen shekara kaɗai"], answer: 2, why: "Ku amince kafin aikawa, biya ko gogewa." }
        ]
      }
    },
    {
      name: "Babi na 2: Gini, gwaji da gudanar da shi lafiya",
      lessons: [
        {
          objectives: ["O4"],
          title: "Gina shi da kayan aiki marasa buƙatar code",
          minutes: 6,
          goal: "Gina aikinku a kayan automation marasa buƙatar code.",
          text: [
            "Kayan aiki marasa buƙatar code (no-code) suna ba ku damar gina automation ta hanyar zaɓa daga menu maimakon rubuta code. Sanannu sun haɗa da Zapier, Make da Microsoft Power Automate. Wasu manhajojin da kuke amfani da su, kamar kayan fom, na ɗaukar alƙawari ko na imel, suna da automation masu sauƙi a cikinsu. Ku duba shafin kowane kayan aiki don tsarinsa na kyauta da iyakokinsa.",
            "Tsarin iri ɗaya ne a ko'ina: ku ƙirƙiri sabon automation, ku zaɓi manhaja da abin da zai faru don abin farawa, ku shiga don haɗa asusunku, sannan ku ƙara kowane mataki ku daidaita filayen bayanai (misali, \"Name\" na fom yana shiga shafi na \"Name\" a takardar).",
            "Don matakin AI, kayan aiki da yawa suna da matakin da ke aika rubutu zuwa samfurin AI kuma yana dawo da daftari. Ku faɗa masa ainihin abin da zai rubuta, kuma ku ba shi filayen da yake buƙata kaɗai. Ku aiko wa kanku da daftarin, ba kai tsaye ga abokin ciniki ba."
          ],
          steps: ["Ku ƙirƙiri sabon automation a kayan aikin da kuka zaɓa.", "Ku zaɓi manhajar abin farawa da abin da zai faru; ku haɗa asusunku.", "Ku ƙara kowane mataki ku daidaita filayen.", "Ku ƙara matakin daftarin AI da umarni a sarari da filayen da ake buƙata kaɗai.", "Ku aiko wa kanku da daftarin don amincewa."],
          words: [["No-code (ba tare da code ba)", "gina manhaja ta hanyar zaɓar zaɓuɓɓuka maimakon rubuta code."], ["Daidaita filaye (field mapping)", "faɗa wa kayan aikin inda kowane bayani zai shiga."], ["Haɗa asusu", "barin kayan automation ya yi amfani da ɗaya daga cikin manhajojinku, bayan kun shiga."]],
          slides: [
            { title: "Kayan aiki marasa buƙatar code", bullets: ["Zapier, Make, Microsoft Power Automate", "Automation da ke cikin manhajojin da kuke amfani da su", "Ku duba kowane shafi don iyakokin tsarin kyauta"] },
            { title: "Tsari iri ɗaya", bullets: ["Ku zaɓi manhajar abin farawa da abin da zai faru", "Ku haɗa asusunku", "Ku ƙara matakai ku daidaita filayen"] },
            { title: "Matakin AI", bullets: ["Umarni a sarari", "Filayen da yake buƙata kaɗai", "Daftarin yana zuwa gare ku, ba ga abokin ciniki ba"] }
          ],
          tryIt: "Ku gina aikinku a tsarin kyauta na kayan aiki marasa buƙatar code (ko a takarda idan ba za ku iya yin rajista ba tukuna): abin farawa, daidaita filaye don kowane mataki, da daftarin AI da ake aiko muku.",
          youCanNow: "gina aiki mai abin farawa da matakai a kayan automation marasa buƙatar code.",
          quickCheck: [
            { objective: "O4", q: "Me kayan aiki marasa buƙatar code ke ba ku damar yi?", options: ["Rubuta code da sauri", "Samun jerin abokan ciniki kyauta", "Gina automation ta hanyar zaɓa daga menu", "Tsallake shiga manhajojinku"], answer: 2, why: "Kayan aiki marasa buƙatar code suna ba ku damar gina automation daga menu maimakon rubuta code." },
            { objective: "O4", q: "Fom ɗin yana da filaye 12, amma AI yana buƙatar suna da irin aikin kaɗai don rubuta daftarin amsa. Me za ku aika masa?", options: ["Duka filaye 12 don a kiyaye", "Har da lambar katin abokin ciniki", "Babu komai", "Suna da irin aikin kaɗai"], answer: 3, why: "Ku ba matakin AI filayen da yake buƙata kaɗai." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gwaji da bayanan gwaji da gyara abin da ya karye",
          minutes: 5,
          goal: "Gwada automation ɗin da bayanan gwaji, ku gyara kurakurai kafin ya fara aiki na gaske.",
          text: [
            "Kada ku taɓa gwaji a kan abokan ciniki na gaske. Ku yi bayanan gwaji guda uku da sunayen ƙirƙira kamar \"Test Customer\" da adireshin imel na gwaji da yake naku. Ku saka ɗaya na yau da kullum, ɗaya mai fili da ya ɓace, da ɗaya mai rubutu na ban mamaki (mai tsawo sosai, a wani yare, ko mai emoji).",
            "Ku gudanar da kowanne ku duba kowane mataki: shin layin ya sauka a shafuka (columns) masu dacewa? Shin daftarin AI yana da ma'ana kuma bai kauce daga batun ba? Shin buƙatar amincewa ta zo muku? Shin an aika wani abu da bai kamata a aika ba?",
            "Ku gyara abu ɗaya a lokaci ɗaya, sannan ku sake gwadawa. Matsalolin da aka saba gani: daidaita filaye ba daidai ba, mataki da ke kasawa idan fili babu komai a ciki, daftarin AI da ke ƙirƙirar farashi. Ku gyara umarnin (\"Yi amfani da jerin farashin da ke cikin filin kaɗai; kada ka ƙirƙiri farashi\") ku sake gwadawa."
          ],
          steps: ["Ku yi bayanan gwaji guda uku: na yau da kullum, mai fili da ya ɓace, mai rubutu na ban mamaki.", "Ku gudanar da kowanne ta cikin automation ɗin.", "Ku duba sakamakon kowane mataki.", "Ku gyara matsala ɗaya a lokaci ɗaya ku sake gwadawa.", "Ku fara aiki na gaske ne kawai idan dukkan uku sun wuce."],
          words: [["Bayanan gwaji (sample data)", "bayanan ƙirƙira da ake amfani da su don gwaji."], ["Bayani na ban mamaki (edge case)", "bayani da ba a saba gani ba da zai iya karya aiki, kamar fili babu komai a ciki."], ["Fara aiki na gaske (go live)", "kunna automation ɗin don amfani na gaske."]],
          slides: [
            { title: "Ku gwada da bayanan ƙirƙira", bullets: ["\"Test Customer\" da imel ɗinku na gwaji", "Na yau da kullum, fili da ya ɓace, rubutu na ban mamaki"] },
            { title: "Ku duba kowane mataki", bullets: ["Shafuka masu dacewa?", "Daftarin AI yana da ma'ana kuma bai kauce daga batun ba?", "Amincewa ta zo muku? Ba a aika komai bisa kuskure ba?"] },
            { title: "Ku gyara ku sake gwadawa", bullets: ["Gyara ɗaya a lokaci ɗaya", "Ku faɗa wa matakin AI kada ya ƙirƙiri farashi", "Ku fara aiki na gaske idan dukkan uku sun wuce"] }
          ],
          tryIt: "Ku gudanar da bayanan gwaji guda uku ta cikin automation ɗinku (ko ku bi su ta cikin tsarinku na takarda). Ku rubuta abin da ya faru a kowane mataki da gyara ɗaya.",
          youCanNow: "gwada automation lafiya da gyara matsaloli kafin ya taɓa abokan ciniki na gaske.",
          quickCheck: [
            { objective: "O5", q: "Wanne ne misalin bayanin gwaji mai rubutu na ban mamaki?", options: ["Saƙo mai tsawo sosai mai emoji", "Tambaya ta yau da kullum", "Fom babu komai a ciki", "Buƙatar abokin ciniki na gaske"], answer: 0, why: "Bayani mai rubutu na ban mamaki yana da rubutu mai tsawo sosai, wani yare ko emoji." },
            { objective: "O5", q: "Gwaji ya kasa idan filin lambar waya babu komai a ciki. Me za ku yi?", options: ["Ku fara aiki na gaske duk da haka", "Ku gyara wannan mataki ɗaya ku sake gwadawa", "Ku canja abubuwa biyar a lokaci ɗaya", "Ku yi gwaji da abokan ciniki na gaske kaɗai"], answer: 1, why: "Ku gyara abu ɗaya a lokaci ɗaya ku sake gwadawa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Gudanar da shi lafiya: rajista, sa ido da makunnin kashewa",
          minutes: 5,
          goal: "Kafa rajista, dubawa kowane mako, da hanyar kashe automation ɗin.",
          text: [
            "Da zarar ya fara aiki, ku ci gaba da kallo. Yawancin kayan aiki suna nuna tarihin kowane lokacin da ya yi aiki; ku duba shi kowane mako don neman kurakurai. Kuna iya kuma ƙara layin rajista a takarda: kwanan wata, abin da ya fara shi, abin da ya yi, da wanda ya amince.",
            "Ku rubuta bayani a shafi ɗaya: abin da automation ɗin ke yi, abin farawansa da matakansa, waɗanne asusu yake amfani da su, wane ne ke amincewa, da yadda ake kashe shi. Ku ajiye shi inda wani a iyalinku ko ma'aikaci zai iya samunsa.",
            "Ku kare izinin shiga: ku yi amfani da shiga mai matakai biyu a kayan automation da asusun da aka haɗa, ku ba shi izinin abin da yake buƙata kaɗai, ku bar lambobin katin abokan ciniki da kalmomin sirri a waje da matakan AI, kuma ku cire izinin ma'aikaci idan ya bar aiki."
          ],
          steps: ["Ku duba tarihin aiki kowane mako.", "Ku ƙara layin rajista ga kowane lokacin da ya yi aiki.", "Ku rubuta bayanin shafi ɗaya tare da makunnin kashewa.", "Ku kunna shiga mai matakai biyu ku iyakance izini.", "Ku duba kowane wata ko har yanzu yana adana lokaci."],
          words: [["Tarihin aiki (run history)", "jerin da kayan aikin ke ajiyewa na kowane lokacin da automation ɗin ya yi aiki."], ["Rajista (log)", "rubutun abin da ya faru da lokacin da ya faru."], ["Makunnin kashewa (off switch)", "hanyar kashe automation da sauri."]],
          slides: [
            { title: "Ku ci gaba da kallo", bullets: ["Ku duba tarihin aiki kowane mako", "Rajista: kwanan wata, abin farawa, mataki, wanda ya amince"] },
            { title: "Bayani a shafi ɗaya", bullets: ["Abin da yake yi da asusun da yake amfani da su", "Wane ne ke amincewa", "Yadda ake kashe shi"] },
            { title: "Ku kare izinin shiga", bullets: ["Shiga mai matakai biyu", "Mafi ƙarancin izinin da ake buƙata", "Babu lambobin kati ko kalmomin sirri a matakan AI"] }
          ],
          tryIt: "Aikin ƙarshe: ku kammala automation ɗinku: taswirar matakai, aiki mai matakin amincewa, gwaje-gwaje uku da suka wuce, rajista da dubawa kowane mako, da bayanin shafi ɗaya tare da makunnin kashewa.",
          youCanNow: "gudanar da automation na kasuwanci lafiya tare da amincewa, gwaji, rajista da makunnin kashewa.",
          quickCheck: [
            { objective: "O6", q: "Me ke shiga layin rajista a wannan darasi?", options: ["Lambobin katin abokan ciniki", "Kalmar sirrinku", "Kwanan wata, abin farawa, abin da ya yi da wanda ya amince", "Kalmar \"done\" kaɗai"], answer: 2, why: "Layin rajista yana rubuta kwanan wata, abin farawa, abin da ya yi da wanda ya amince da shi." },
            { objective: "O6", q: "Wani ma'aikaci da ke taimakawa wajen amincewa da daftari ya bar kasuwancin. Me za ku yi?", options: ["Babu komai", "Ku raba kalmar sirrinku da sabon mutum", "Ku kashe shiga mai matakai biyu", "Ku cire izininsa a automation ɗin da asusun da aka haɗa"], answer: 3, why: "Ku cire izinin shiga idan ma'aikaci ya bar aiki." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gini, gwaji da gudanar da shi lafiya",
        questions: [
          { objective: "O4", q: "Wanne ne kayan automation marasa buƙatar code?", options: ["Zapier", "Injin ɗinke takarda (stapler)", "Aljihun tebur na kuɗi", "Fax"], answer: 0, why: "Zapier yana gina automation ba tare da code ba." },
          { objective: "O4", q: "Mene ne daidaita filaye (field mapping)?", options: ["Buga taswira", "Zana gona", "Zaɓar kalmar sirri", "Faɗa wa kayan aikin inda kowane bayani zai shiga"], answer: 3, why: "Yana haɗa filayen fom da shafukan takardar lissafi." },
          { objective: "O5", q: "Da waɗanne bayanai ya kamata ku yi gwaji?", options: ["Bayanan abokan ciniki na gaske", "Bayanan gwaji na ƙirƙira", "Lambobin kati", "Bayanan shiga bankinku"], answer: 1, why: "Kada ku taɓa gwaji a kan abokan ciniki na gaske." },
          { objective: "O5", q: "Daftarin AI ya ƙirƙiri farashi. Me za ku gyara?", options: ["Umarnin matakin AI, sannan ku sake gwadawa", "Babu komai", "Ku aika shi duk da haka", "Ku goge kasuwancin"], answer: 0, why: "Umarni a sarari yana rage ƙirƙirar bayanai." },
          { objective: "O6", q: "Me yasa za ku rubuta bayani a shafi ɗaya tare da makunnin kashewa?", options: ["Don ado", "Don ya ƙara tsawo", "Don wani ya iya fahimtarsa ko ya dakatar da shi", "Ba shi da amfani"], answer: 2, why: "Kowa ya kamata ya iya kashe shi da sauri." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Wakilan AI don Sarrafa Ayyukan Kasuwanci da Kansu",
    questions: [
      { objective: "O1", q: "Wakilin AI shi ne:", options: ["Mutum", "Tsarin AI da zai iya zaɓar wasu daga cikin matakansa da kansa", "Ƙayyadaddiyar doka", "Firinta"], answer: 1, why: "Wakilai suna zaɓar matakai don cimma manufa." },
      { objective: "O1", q: "A ina ya kamata ƙaramin kasuwanci ya fara?", options: ["Sarrafa komai da kansa a lokaci ɗaya", "Wakili mai cin gashin kansa gaba ɗaya mai izinin shiga banki", "Babu komai", "Automation mai ƙayyadaddun dokoki, sannan mataki ɗaya na AI"], answer: 3, why: "Mai sauƙi da ake iya hasashe da farko." },
      { objective: "O1", q: "Wanne ne ya kamata koyaushe ya zauna a hannun mutum?", options: ["Tsara layi", "Kwafa fom zuwa takarda", "Ƙara tunatarwa a kalanda", "Kashe kuɗi"], answer: 3, why: "Shawarwarin kuɗi suna buƙatar mutum." },
      { objective: "O2", q: "Mataki na farko kafin sarrafa aiki da kansa shi ne:", options: ["Sayen kayan aiki", "Rubuta taswirar matakan aikin", "Kunna shi", "Ɗaukar wani aiki"], answer: 1, why: "Ba za ku iya sarrafa abin da ba ku rubuta ba." },
      { objective: "O2", q: "Matakin \"Doka\" shi ne wanda yake:", options: ["Game da kuɗi", "Babbar shawara", "Koyaushe iri ɗaya", "Ba a sarari ba"], answer: 2, why: "Matakan Doka za a iya sarrafa su da kansu." },
      { objective: "O2", q: "Matakin \"Rubutu\" zai iya samun:", options: ["Daftari daga AI", "Biyan kuɗi", "Gogewa", "Babu komai"], answer: 0, why: "AI yana taimakawa wajen rubutu." },
      { objective: "O3", q: "\"Sabon fom an aiko\" misali ne na:", options: ["Rajista", "Mataki", "Abin farawa", "Kalmar sirri"], answer: 2, why: "Yana fara aikin." },
      { objective: "O3", q: "\"Ƙara layi a takarda\" misali ne na:", options: ["Mataki", "Abin farawa", "Amincewa", "Makunnin kashewa"], answer: 0, why: "Matakai suna bin abin farawa." },
      { objective: "O3", q: "A cikin aiki mai aminci, AI yana rubuta daftarin amsoshi ga abokan ciniki sannan:", options: ["Ya aika su kai tsaye ga abokan ciniki", "Ya aiko muku da su don amincewa", "Ya goge su", "Ya saka su a fili ga kowa"], answer: 1, why: "Ku ne kuke danna aika." },
      { objective: "O3", q: "Me yasa za ku fara zana aikin a takarda?", options: ["Ba shi da amfani", "Doka ce ta tilasta", "Don nishaɗi kaɗai", "Don ganin kowane mataki da kayan aiki kafin ginawa"], answer: 3, why: "Tsari yana hana kurakurai." },
      { objective: "O4", q: "Idan kun haɗa asusu da kayan automation, kuna:", options: ["Barin kayan aikin ya yi amfani da wannan manhaja bayan kun shiga", "Goge manhajar", "Raba ta a fili", "Biyan tara"], answer: 0, why: "Haɗi yana ba kayan aikin izinin shiga." },
      { objective: "O4", q: "Me ya kamata matakin AI ya karɓa?", options: ["Kalmomin sirri", "Duk bayanan abokan ciniki", "Lambobin kati", "Filayen da yake buƙata kaɗai"], answer: 3, why: "Mafi ƙarancin bayanan da ake buƙata." },
      { objective: "O4", q: "A ina za ku duba iyakokin tsarin kyauta na kayan aiki?", options: ["Tsohon bidiyo", "Hasashe", "Shafin hukuma na kayan aikin", "Wani mai gasa"], answer: 2, why: "Tsare-tsare suna canjawa." },
      { objective: "O5", q: "Bayani na ban mamaki (edge case) shi ne:", options: ["Kusurwar tebur", "Bayani da ba a saba gani ba da zai iya karya aikin", "Bayani na yau da kullum", "Kalmar sirri"], answer: 1, why: "Ku gwada bayanai na ban mamaki ma." },
      { objective: "O5", q: "Bayanan gwaji nawa ya kamata su wuce kafin a fara aiki na gaske a wannan kwas?", options: ["Dubu ɗaya", "Babu ko ɗaya", "Abokin ciniki na gaske ɗaya", "Uku: na yau da kullum, fili da ya ɓace, rubutu na ban mamaki"], answer: 3, why: "Suna rufe matsalolin da aka saba gani." },
      { objective: "O5", q: "Ku gyara matsaloli ta hanyar:", options: ["Yin watsi da su", "Canja komai a lokaci ɗaya", "Canja abu ɗaya a lokaci ɗaya da sake gwadawa", "Fara aiki na gaske duk da haka"], answer: 2, why: "Gyara ɗaya a lokaci ɗaya yana nuna abin da ya yi aiki." },
      { objective: "O6", q: "Tarihin aiki (run history) yana nuna:", options: ["Kowane lokacin da automation ɗin ya yi aiki", "Tarihin burauzarku", "Kalmomin sirrin abokan ciniki", "Takardun haraji"], answer: 0, why: "Yana taimaka muku gano kurakurai." },
      { objective: "O6", q: "Sau nawa ya kamata ku duba automation da ke aiki?", options: ["Ba sau ɗaya ba", "Aƙalla kowane mako", "Sau ɗaya bayan wasu shekaru", "Sai idan abokan ciniki sun yi ƙorafi"], answer: 1, why: "Dubawa akai-akai yana gano matsaloli da wuri." },
      { objective: "O6", q: "Shiga mai matakai biyu a asusun automation:", options: ["Ba ya rage saurin komai mai amfani", "Yana sa wahalar kutsawa cikinsu", "Ba a yarda da shi ba", "Yana raba kalmar sirrinku"], answer: 1, why: "Yana ƙara dubawa ta biyu." },
      { objective: "O6", q: "Kowane wata ya kamata ku tambaya ko automation ɗin:", options: ["Har yanzu yana adana lokaci", "Yana da suna mai kyau", "Yana amfani da ƙarin manhajoji", "Ya shahara"], answer: 0, why: "Idan ba ya taimakawa kuma, ku canja shi ko ku dakatar da shi." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      6,
      8,
      11,
      14,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Taswirar matakai",
        objective: "O2",
        notYet: "Akwai matakan da suka ɓace, ko ba a yi musu alama ba.",
        meets: "An jera kowane mataki na aikin, kuma an yi masa alama: Doka, Rubutu, Shawara, ko Kuɗi da aikawa.",
        exceeds: "Yana rubuta tsawon lokacin da kowane mataki ke ɗauka a yau."
      },
      {
        name: "Tsarin aiki",
        objective: "O3",
        notYet: "Babu matakin amincewa, ko ana aika ko biya wani abu ba tare da mutum ba.",
        meets: "Abin farawa, matakai, da amincewar mutum kafin wani abu ya fita daga kasuwancin.",
        exceeds: "Kowane akwati yana da sunan kayan aikinsa, kuma an duba haɗin."
      },
      {
        name: "Gini da ke aiki",
        objective: "O4",
        notYet: "Automation ɗin ba ya aiki, ko filaye suna sauka a wuraren da ba daidai ba.",
        meets: "Yana farawa daga abin farawa, yana daidaita filaye daidai, kuma yana aiko muku da daftarin AI.",
        exceeds: "Matakin AI yana samun filayen da yake buƙata kaɗai, kuma yana da umarni a sarari."
      },
      {
        name: "An gwada kuma an gyara",
        objective: "O5",
        notYet: "An gwada da bayanan abokan ciniki na gaske, ko da bayanai ƙasa da uku.",
        meets: "Bayanan gwaji na yau da kullum, mai fili da ya ɓace da mai rubutu na ban mamaki duk sun wuce bayan gyara.",
        exceeds: "Yana jera kowace matsala da aka gano da canji ɗaya da ya gyara ta."
      },
      {
        name: "Gudanarwa lafiya",
        objective: "O6",
        notYet: "Babu rajista, dubawa kowane mako, ko hanyar kashe shi.",
        meets: "Rajista, dubawa kowane mako, da bayanin shafi ɗaya tare da makunnin kashewa.",
        exceeds: "Shiga mai matakai biyu a kunne, kuma an iyakance izini zuwa abin da yake buƙata."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu kasuwanci da automation ɗinsu ke ci gaba da aiki lafiya bayan kwanaki 30 (binciken biyo baya)",
      "Awanni a kowane mako da masu kasuwanci suka ce sun adana a aikin da aka sarrafa da kansa",
      "Masu koyo da suka fara wani kwas na ƙananan kasuwanci na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai intanet",
      "Asusu kyauta a kayan automation marasa buƙatar code, kayan fom, da takardar lissafi kamar Google Sheets ko Excel",
      "Takarda da alƙalami don taswirar matakai da zanen aikin",
      "Kusan minti 60 gaba ɗaya, da ƙarin lokaci don gini da gwaji"
    ],
    facilitatorNotes: [
      "Ku sa kowane mai koyo ya zaɓi wani ƙaramin aiki na gaske da yake maimaitawa kafin zaman; ƙarami ya fi kyau don automation na farko.",
      "Ku yi amfani da bayanan gwaji na ƙirƙira kaɗai da imel na gwaji na mai koyo; kada ku taɓa amfani da bayanan abokan ciniki na gaske.",
      "Kafin masu koyo su fara ginawa, ku duba cewa kowane tsari yana da amincewar mutum kafin a aika ko a biya komai.",
      "Ku taimaki masu koyo su kunna shiga mai matakai biyu a kayan automation da asusun da aka haɗa.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

"use strict";

// Koach Learn course, Hausa (ha) translation of small-business/smallbiz-ai-restaurants.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const FDA_ALLERGENS = { name: "FDA: Food Allergies, manyan abubuwa tara da ke jawo rashin lafiyar abinci (da Turanci)", url: "https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies" };
const FDA_CODE = { name: "FDA: Food Code, ƙa'idojin tsabtar abinci (da Turanci)", url: "https://www.fda.gov/food/retail-food-protection/fda-food-code" };
const FTC_REVIEWS = { name: "FTC: Dokar ra'ayoyi da shaidar abokan ciniki, tambayoyi da amsoshi (da Turanci)", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };

module.exports = {
  id: "smallbiz-ai-restaurants-ha",
  lang: "ha",
  translationOf: "smallbiz-ai-restaurants",
  category: "Small Business",
  name: "AI don Gidajen Abinci",
  skills: "Rubuta bayanin abinci a menu, Yin jadawalin abubuwan da ke jawo rashin lafiya daga girke-girkenku, Yin jerin shiri da jerin oda, Tsara jadawalin ma'aikata, Amsa ra'ayoyin abokan ciniki, Tsara abincin musamman",
  outcome: "amfani da AI don gudanar da ayyukan ofis na ƙaramin gidan abinci ko motar sayar da abinci: rubuta bayanin abinci a menu, yin jadawalin abubuwan da ke jawo rashin lafiya daga girke-girkenku da kuma duba shi, yin jerin shiri da jerin oda daga cinikinku, tsara jadawalin ma'aikata mai adalci, da amsa ra'ayoyin abokan ciniki da gaskiya.",
  about: [
    "Wannan kwas na masu gidajen abinci ne, manajoji da masu dafa abinci a ƙananan gidajen abinci, gidajen shayi, motocin sayar da abinci, masu dafa wa bukukuwa (catering) da kicin irin na gida. Da yawa daga cikin ɗalibanmu suna gudanar da gidajen abinci na iyali ko na ƙananan al'ummomi, inda mai gidan shi ne ke dafawa, ke yin oda, kuma ke amsa waya.",
    "Za ku yi amfani da mataimakin AI kyauta da takardar lissafi (spreadsheet) don rage lokacin rubutu, tsari da aikin takardu. Ƙa'idojin tsabtar abinci da na abubuwan da ke jawo rashin lafiya suna fitowa daga majiyoyin hukuma da ofishin lafiya na yankinku, ba daga AI ba; wannan kwas zai nuna muku inda za ku duba.",
    "Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku haɗa kayan aikin gidan abincinku: bayanin abinci guda biyar a menu, jadawalin abubuwan da ke jawo rashin lafiya na waɗannan abinci biyar da aka yi daga ainihin girke-girkenku da takardun bayanin kayan da kuke saya (ku da kanku kuka duba shi da manyan abubuwa tara na FDA), jerin shiri da jerin oda na mako ɗaya bisa cinikinku, daftarin jadawalin ma'aikata, da amsoshi ga ra'ayi ɗaya mai kyau da ɗaya marar kyau.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Masu gidajen abinci, manajoji da masu dafa abinci a ƙananan gidajen abinci, gidajen shayi, motocin sayar da abinci, masu dafa wa bukukuwa da kicin irin na gida. Da yawa na iyali ne ko na ƙananan al'ummomi, inda mai gidan shi ne ke dafawa, ke yin oda, kuma ke amsa waya.",
    startingPoint: "Suna iya dafa abinci, gudanar da aiki a lokacin shift da karɓar oda. Da yawa suna amfani da waya da na'urar karɓar kuɗi (POS), amma ba su da ƙwarewa sosai, ko kwata-kwata, a mataimakan AI ko dabarun lissafi (formula) na spreadsheet.",
    gap: "Rubutu, tsari da aikin takardu suna cinye sa'o'in da mai gidan ba shi da su. Masu koyo suna buƙatar amfani da AI don adana wannan lokaci, yayin da suke tabbatar da cewa bayanin abubuwan da ke jawo rashin lafiya, ƙa'idojin aiki da ra'ayoyin abokan ciniki daidai ne kuma na gaskiya, domin kuskure yana iya cutar da baƙo ko ya karya doka.",
    constraints: [
      "Lokaci: masu gidan suna aiki dogon lokaci, don haka kowane darasi kusan minti 5 ne",
      "Na'urori: sau da yawa waya ko kwamfutar ofis ɗaya da ake rabawa",
      "Ƙa'idojin tsabtar abinci da na abubuwan da ke jawo rashin lafiya suna fitowa daga FDA da ofishin lafiya na yanki, ba daga AI ba",
      "Ƙa'idojin aiki game da hutu, ƙarin lokaci (overtime) da yara ƙanana sun dogara da jiha da birni",
      "Sirri: babu lambar Social Security, albashi tare da sunaye ko bayanan sirri game da ma'aikata a kayan AI"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da mataimakan AI ba za su iya fara ɗaukar kwas na gabatarwa ga AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da ainihin kayan haɗi da hanyar dafa wani abinci", action: "rubuta gajeren bayanin abinci a menu da taimakon AI, da cire duk abin da ba gaskiya ba", standard: "ta yadda kowace kalmar kayan haɗi ta yi daidai da girke-girkenku" },
    { id: "O2", condition: "Ta amfani da girke-girkenku da takardun bayanin kayan da kuke saya", action: "yin jadawalin da ke nuna manyan abubuwa tara na FDA da ke jawo rashin lafiya a kowane abinci", standard: "tare da mutum na biyu ya duba kowane abinci" },
    { id: "O3", condition: "Idan kuna da matsakaicin cinikinku a rana da yawan kason abinci a kowane girki", action: "yin jerin shiri da jerin oda na mako a spreadsheet", standard: "tare da tara adadin girki zuwa sama, da daidaita shi don bukukuwa, ƙarshen mako da yanayi" },
    { id: "O4", condition: "Idan kuna da lokutan aikinku, shift-shift, da sunayen farko da lokutan da ma'aikata ke samuwa", action: "tsara daftarin jadawalin ma'aikata na mako da AI, da duba shi don isassun ma'aikata, adalci da ƙa'idojin aiki", standard: "ba tare da bayanan sirri na ma'aikata a cikin prompt ba" },
    { id: "O5", condition: "Idan kuna da tambayar baƙo, ko ra'ayi mai kyau ko marar kyau", action: "rubuta amsa mai natsuwa da gaskiya da taimakon AI", standard: "tare da kowace magana ta zama gaskiya, kuma babu ra'ayoyin bogi ko na sayayya" },
    { id: "O6", condition: "Idan kuna da ƙarin kayan abinci ko na lokacin", action: "tsara abincin musamman na mako, lissafa kuɗin kason abinci ɗaya, da sanya farashi mai riba", standard: "tare da an duba abubuwan da ke jawo rashin lafiya, kuma an saka abincin a jerin shiri" }
  ],
  chapters: [
    {
      name: "Babi na 1: Menu, abubuwan da ke jawo rashin lafiya da jerin kicin",
      lessons: [
        {
          objectives: ["O1"],
          title: "Rubuta bayanin abinci a menu",
          minutes: 5,
          goal: "Rubuta gajerun bayanan abinci masu daɗin ji kuma daidai da taimakon AI.",
          text: [
            "Bayanin abinci mai kyau yana faɗin abin da ke cikin abincin, yadda aka dafa shi, da abin da ya sa ya zama na musamman, cikin kalmomi 10 zuwa 25. \"Shinkafar jollof da aka dafa a hankali cikin miyar tumatur da tattasai, tare da soyayyen ayaba (plantain) da cinyar kaza ta gasa.\"",
            "Ku ba AI ainihin kayan haɗi da hanyar dafawa: \"Ka rubuta bayanin abinci mai kalmomi 20 don: curry na naman akuya da ƙashi, an dafa a hankali na sa'o'i 4 da barkono mai zafi (scotch bonnet), thyme da dankali, tare da farar shinkafa. Kalmomi masu sauƙi masu daɗin ji.\" Ku nemi nau'i uku ku zaɓi ɗaya.",
            "Ku duba shi. AI yana iya ƙara kayan haɗin da ba ku amfani da su (\"da cashew\") ko kalmomi kamar \"organic\" (na halitta) ko \"house-made\" (an yi a nan) da ba gaskiya ba ne. Kayan haɗi marar daidai a menu yana iya cutar da mai rashin lafiyar abinci (allergy)."
          ],
          steps: ["Ku rubuta ainihin kayan haɗi da hanyar dafawa.", "Ku nemi AI ya ba ku gajerun bayanai uku.", "Ku zaɓi ɗaya ku duba kowace kalmar kayan haɗi.", "Ku cire duk abin da ba gaskiya ba, kamar \"organic\"."],
          words: [["Bayanin abinci a menu", "gajeren rubutu a ƙarƙashin sunan abinci da ke faɗa wa baƙi abin da yake."]],
          slides: [
            { title: "Bayani mai kyau", bullets: ["Abin da ke ciki", "Yadda aka dafa shi", "Abin da ya sa ya zama na musamman, cikin kalmomi 10 zuwa 25"] },
            { title: "Ku ba AI ainihin girke-girke", bullets: ["Kayan haɗi da hanyar dafawa", "Ku nemi nau'i uku"] },
            { title: "Ku duba kowace kalma", bullets: ["Babu kayan haɗin da ba ku amfani da su", "Babu \"organic\" ko \"house-made\" sai idan gaskiya ne", "Kayan haɗi marar daidai yana iya cutar da masu allergy"] }
          ],
          tryIt: "Ku rubuta bayanin abinci biyar daga cikin abincinku da taimakon AI. Ku duba kowace kalmar kayan haɗi da girke-girkenku.",
          youCanNow: "rubuta bayanan abinci a menu masu daɗin ji kuma daidai, da taimakon AI.",
          quickCheck: [
            { objective: "O1", q: "Waɗanne abubuwa uku ne bayanin abinci mai kyau yake faɗi?", options: ["Abin da ke cikin abincin, yadda aka dafa shi, da abin da ya sa ya zama na musamman", "Farashi, sunan mai dafawa da girman faranti", "Yawan kalori, mai sayar da kaya da kwanan wata", "Sunan abincin kawai da manyan baƙaƙe"], answer: 0, why: "Darasin ya ce bayani mai kyau yana faɗin abin da ke ciki, yadda aka dafa shi, da abin da ya sa ya zama na musamman." },
            { objective: "O1", q: "AI ya rubuta \"tortilla organic da aka yi a nan\" amma kuna sayen tortilla na yau da kullum. Me za ku yi?", options: ["Ku bar shi domin ya fi daɗin ji", "Ku cire \"an yi a nan\" da \"organic\" domin ba gaskiya ba ne", "Ku ƙara wasu kalmomi kamar \"artisan\"", "Ku nemi AI ya rubuta shi da manyan baƙaƙe"], answer: 1, why: "Kalmomin menu dole su zama gaskiya, don haka ku cire duk abin da AI ya ƙara da ba ku yi ba." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Yin jadawalin abubuwan da ke jawo rashin lafiya, lafiya",
          minutes: 6,
          goal: "Yi jadawalin abubuwan da ke jawo rashin lafiya daga girke-girkenku da takardun bayanin kaya, wanda ku da kanku kuka duba.",
          text: [
            "FDA (hukumar abinci da magunguna ta Amurka) ta lissafa manyan abubuwa tara da ke jawo rashin lafiyar abinci: madara, ƙwai, kifi, kifin harsashi kamar jatan lande (crustacean shellfish), gyaɗar bishiya (tree nuts), gyaɗa, alkama, waken soya da ridi. Baƙi masu rashin lafiyar abinci suna dogara da ku don ku san abin da ke cikin kowane abinci.",
            "Ku yi jadawali: abinci a gefe daga sama zuwa ƙasa, abubuwa tara a sama daga hagu zuwa dama. Ku cika shi daga ainihin girke-girkenku DA takardun bayanin kayan haɗi na duk abin da kuke saya, domin miya, garin kayan yaji da burodi sau da yawa suna ɓoye waɗannan abubuwa. AI zai iya taimaka muku ku shirya teburin ku tuna kayan haɗin da yawanci ke ɗauke da su, amma bai san kayan masu sayar muku ba. Ku da takardun bayanin kayanku ne kuka sani.",
            "Ku sabunta jadawalin duk lokacin da girke-girke ko mai sayar da kaya ya canja. Ku koya wa ma'aikata su ce \"Bari in duba\" su tambayi kicin, kada su taɓa yin tsammani. Ofishin lafiya na yankinku da FDA Food Code suna da ƙa'idoji kan tsabtar abinci da sanin abubuwan da ke jawo rashin lafiya; ku duba abin da ya shafi wurinku."
          ],
          steps: ["Ku lissafa abincinku da kowane kayan haɗi a cikin kowanne.", "Ku karanta takardar bayanin kowane kayan da kuka saya.", "Ku yi alama ga kowane ɗaya daga cikin abubuwa tara a kowane abinci.", "Ku sa mutum na biyu ya duba jadawalin.", "Ku sabunta shi idan girke-girke ko mai sayar da kaya ya canja."],
          words: [["Allergen (abin da ke jawo rashin lafiya)", "abincin da zai iya jawo mummunan rashin lafiyar jiki ga wasu mutane."], ["Cross-contact (gauraya)", "lokacin da allergen ya shiga wani abinci ta wurin aiki, mai ko kayan aiki da ake rabawa."], ["Food Code", "ƙa'idojin tsabtar abinci na misali daga FDA da jihohi da gundumomi da yawa ke ɗauka."]],
          slides: [
            { title: "Manyan abubuwa tara na FDA", bullets: ["Madara, ƙwai, kifi, kifin harsashi (kamar jatan lande)", "Gyaɗar bishiya, gyaɗa, alkama", "Waken soya, ridi"] },
            { title: "Ku yi jadawalin daga gaskiya", bullets: ["Abinci a gefe, abubuwa tara a sama", "Girke-girkenku DA kowace takardar bayanin kaya", "AI yana shirya teburin; bai san kayan masu sayar muku ba"] },
            { title: "Ku riƙe shi daidai", bullets: ["Mutum na biyu ya duba shi", "Ku sabunta idan girke-girke ko mai sayar da kaya ya canja", "Ma'aikata ba sa tsammani: \"Bari in duba\""] },
            { title: "Ƙa'idojin wurinku", bullets: ["Ofishin lafiya na yankinku", "FDA Food Code"] }
          ],
          sources: [FDA_ALLERGENS, FDA_CODE],
          tryIt: "Ku nemi AI ya shirya muku jadawali mara komai na abinci biyar, da abubuwa tara a matsayin ginshiƙai. Ku cika shi da kanku daga girke-girkenku da takardun bayanin kaya, sannan ku sa wani ya duba shi.",
          youCanNow: "yin jadawalin abubuwan da ke jawo rashin lafiya daga girke-girkenku da takardun bayanin kaya, da kiyaye shi daidai.",
          quickCheck: [
            { objective: "O2", q: "Me ke zuwa a saman jadawalin abubuwan da ke jawo rashin lafiya a wannan darasi?", options: ["Farashinku", "Sunayen masu sayar muku da kaya", "Manyan abubuwa tara", "Sunayen ma'aikatanku"], answer: 2, why: "Abinci suna a gefe, manyan abubuwa tara kuma a sama." },
            { objective: "O2", q: "Mai sayar muku da kaya ya canja nau'in garin kayan yaji da kuke amfani da shi. Me za ku yi?", options: ["Babu komai, garin kayan yaji ba ya taɓa ɗauke da su", "Ku tambayi AI ko sabon nau'in yana da su ku amince da shi", "Ku jira har baƙo ya tambaya", "Ku karanta sabuwar takardar bayanin ku sabunta jadawalin"], answer: 3, why: "AI bai san kayan masu sayar muku ba; ku ne ke sabunta jadawalin daga sabuwar takardar bayanin." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Jerin shiri da jerin oda daga cinikinku",
          minutes: 5,
          goal: "Yi jerin shiri da jerin oda na mako daga lambobin cinikinku.",
          text: [
            "Shirya abinci da yawa fiye da kima yana ɓata abinci; shirya kaɗan yana nufin \"yi haƙuri, ya ƙare\". Ku fara da yawan kowane abinci da kuke sayarwa a rana. Na'urar POS ɗinku sau da yawa tana iya nuna wannan, ko ku riƙe ƙidaya mai sauƙi.",
            "A spreadsheet: Abinci, Matsakaicin sayarwa a rana, Kason abinci a kowane girki, Girkin da ake buƙata. Sannan ku lissafa kayan haɗi na kowane kaso don ganin abin da za ku yi oda. Ku nemi taimakon AI da formula: \"Ka rubuta formula na Google Sheets don tara girkin da ake buƙata zuwa sama: matsakaicin sayarwa raba kason kowane girki.\" (=ROUNDUP(B2/C2,0) hanya ɗaya ce.)",
            "Ku daidaita bisa abin da kuka sani: ƙarshen mako, bukukuwa, yanayi, hutu. AI zai iya ba da shawarar tsarin jerin shiri da jerin dubawa, amma lambobinku da ƙwarewarku ne ke sanya adadin."
          ],
          steps: ["Ku samo matsakaicin sayarwa a rana na kowane abinci.", "Ku ƙara kason kowane girki ku lissafa girki da ROUNDUP.", "Ku lissafa kayan haɗi na kowane kaso ku haɗa jimlar oda.", "Ku daidaita don ƙarshen mako, bukukuwa da yanayi."],
          words: [["Jerin shiri (prep list)", "jerin abin da kicin dole ya shirya kafin a fara sayarwa."], ["Par level", "adadin wani kaya da kuke so a hannu a farkon lokacin sayarwa."], ["Girki (batch)", "dafa girke-girke sau ɗaya da ke ba da wasu adadin kaso."]],
          slides: [
            { title: "Ɓata abinci ko ƙarewa", bullets: ["Shiri fiye da kima yana ɓata abinci", "Shiri kaɗan yana ɓata wa baƙi rai", "Ku fara daga sayarwar kowane abinci"] },
            { title: "Takardar shiri mai sauƙi", bullets: ["Abinci, sayarwa a rana, kason kowane girki", "Girki = ROUNDUP(sayarwa / kaso, 0)", "Kayan haɗi na kowane kaso -> jerin oda"] },
            { title: "Ku yi amfani da abin da kuka sani", bullets: ["Ƙarshen mako, bukukuwa, yanayi", "AI yana taimakawa da tsari; ku ne ke sanya adadin"] }
          ],
          tryIt: "Ku yi takardar shiri ta abinci biyar da sayarwa a rana, kason kowane girki, da formula na ROUNDUP don girki. Ku mayar da ita jerin oda na mako ɗaya.",
          youCanNow: "yin jerin shiri da jerin oda daga lambobin cinikinku.",
          quickCheck: [
            { objective: "O3", q: "Wace matsala shirya abinci fiye da kima yake jawowa?", options: ["Ɓata abinci", "Ƙarewar wani abinci", "Ƙarin lokutan buɗewa", "Ƙarin kuɗin haya"], answer: 0, why: "Darasin ya ce shiri fiye da kima yana ɓata abinci, shiri kaɗan kuma yana nufin abinci ya ƙare." },
            { objective: "O3", q: "Akwai babban biki a garin a ƙarshen wannan mako. Me za ku yi da jerin shirinku?", options: ["Ku yi amfani da lambobin da kuka saba daidai yadda suke", "Ku ƙara adadin bisa abin da kuka sani", "Ku bar AI ya sanya adadin ba tare da canji ba", "Ku daina yin jerin shiri"], answer: 1, why: "Kuna daidaitawa don bukukuwa, ƙarshen mako da yanayi, domin ƙwarewarku ce ke sanya adadin." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Menu, abubuwan da ke jawo rashin lafiya da jerin kicin",
        questions: [
          { objective: "O1", q: "Bayanin abinci da AI ya rubuta ya ƙara \"da cashew\" amma abincinku ba shi da shi. Me za ku yi?", options: ["Ku bar shi; yana da daɗin ji", "Ku cire shi", "Ku ƙara cashew", "Ku yi watsi da shi"], answer: 1, why: "Kayan haɗi marar daidai yana iya cutar da masu allergy kuma yana yaudarar kowa." },
          { objective: "O2", q: "Manyan abubuwa nawa ne da ke jawo rashin lafiyar abinci FDA ta lissafa?", options: ["Ashirin", "Uku", "Goma sha huɗu", "Tara"], answer: 3, why: "FDA ta lissafa tara, har da ridi." },
          { objective: "O2", q: "Daga ina bayanin abubuwan da ke jawo rashin lafiya a jadawalinku yake fitowa?", options: ["Girke-girkenku da takardun bayanin abin da kuke saya", "Tsammanin AI", "Menu na abokin hamayya", "Abokan ciniki"], answer: 0, why: "Girke-girkenku da takardun bayanin kaya ne kaɗai ke nuna abin da ke cikin abincinku da gaske." },
          { objective: "O2", q: "Baƙo ya tambaya ko wani abinci yana da ridi, kuma ba ku da tabbas. Za ku:", options: ["Tambayi AI", "Yi tsammanin babu", "Ce \"Bari in duba\" ku tambayi kicin da jadawalin", "Ce babu matsala"], answer: 2, why: "Kada ku taɓa yin tsammani game da abubuwan da ke jawo rashin lafiya." },
          { objective: "O3", q: "Kuna sayar da 22 a rana kuma girki ɗaya yana ba da 8. Da ROUNDUP, girki nawa?", options: ["2", "3", "4", "22"], answer: 1, why: "22 / 8 = 2.75, an tara shi zuwa sama ya zama 3." }
        ]
      }
    },
    {
      name: "Babi na 2: Ma'aikata, baƙi da ci gaba",
      lessons: [
        {
          objectives: ["O4"],
          title: "Tsara daftarin jadawalin ma'aikata",
          minutes: 5,
          goal: "Tsara daftarin jadawalin mako da taimakon AI, sannan ku duba shi da ƙa'idojinku.",
          text: [
            "Ku ba AI gaskiyar bayanai: lokutan aikinku, mutum nawa kuke buƙata a kowane shift, lokutan da kowane ma'aikaci ke samuwa da aikinsa, da ƙa'idojinku. \"Ka tsara jadawalin mako don gidan abincin taco ɗina, a buɗe daga 11 zuwa 9, Talata zuwa Lahadi. Ina buƙatar masu dafa abinci 2 da ma'aikatan gaba 2 a lokacin abincin rana da na dare. Ga lokutan da suke samuwa: [sunayen farko kaɗai].\"",
            "Ku duba daftarin da kanku. Ku tabbata yana da adalci, yana cike lokutan cunkoso, kuma yana bin dokokin aiki kan hutu, ƙarin lokaci (overtime) da yara ƙanana. Waɗannan ƙa'idoji sun dogara da jiharku da birninku; ku duba ofishin ƙwadago na jiharku ko ƙwararre. AI bai san su sosai ba.",
            "Kada ku saka lambobin Social Security, albashi tare da sunaye ko bayanan sirri game da ma'aikata a kayan AI. Sunayen farko da lokutan da suke samuwa sun isa."
          ],
          steps: ["Ku lissafa shift-shift da mutanen da ake buƙata.", "Ku lissafa ma'aikata da sunan farko, lokutan da suke samuwa da aikinsu.", "Ku nemi AI ya ba ku daftari.", "Ku duba adalci, isassun ma'aikata da ƙa'idojin aiki na jiharku.", "Ku liƙa jadawalin ƙarshe."],
          words: [["Lokacin samuwa (availability)", "ranaku da lokutan da ma'aikaci zai iya aiki."], ["Ƙarin lokaci (overtime)", "ƙarin sa'o'in aiki da dokar aiki za ta iya buƙatar a biya su da albashi mafi girma."], ["Isassun ma'aikata (coverage)", "samun isassun ma'aikata a kowane shift."]],
          slides: [
            { title: "Ku ba AI gaskiyar bayanai", bullets: ["Lokutan aiki da ma'aikatan da ake buƙata a kowane shift", "Sunayen farko, lokutan samuwa da ayyuka"] },
            { title: "Ku ne kuke duba daftarin", bullets: ["Mai adalci kuma yana cike lokutan cunkoso", "Hutu, overtime da yara ƙanana: ku duba ƙa'idojin jiharku"] },
            { title: "Ku kiyaye bayanan ma'aikata a sirri", bullets: ["Babu SSN ko albashi tare da sunaye", "Sunayen farko da lokutan samuwa sun isa"] }
          ],
          tryIt: "Ku tsara jadawalin mako mai zuwa da AI ta amfani da sunayen farko da lokutan samuwa. Ku duba isassun ma'aikata da adalci, sannan ku rubuta inda za ku duba ƙa'idojin hutu da overtime na jiharku.",
          youCanNow: "tsara daftarin jadawalin ma'aikata da AI, da duba shi da buƙatunku da ƙa'idojin aiki.",
          quickCheck: [
            { objective: "O4", q: "Waɗanne bayanai AI ke buƙata don tsara jadawali?", options: ["Lambobin Social Security da albashin ma'aikata", "Sunan gidan abincin kawai", "Lokutan aikinku, mutanen da ake buƙata a kowane shift, da lokutan samuwa da ayyukan ma'aikata", "Bayanan sirri game da kowane ma'aikaci"], answer: 2, why: "Lokutan aiki, buƙatun shift, lokutan samuwa da ayyuka sun isa; bayanan sirri ba sa shiga." },
            { objective: "O4", q: "Daftarin AI ya saka ɗan shekara 16 a shift na dare. Me za ku yi?", options: ["Ku liƙa shi kamar yadda yake", "Ku tambayi AI ko ya halatta ku amince da amsar", "Ku cire ma'aikacin daga jadawali har abada", "Ku duba ƙa'idojin jiharku kan yara ƙanana ku gyara daftarin"], answer: 3, why: "Ƙa'idoji kan yara ƙanana sun dogara da jiharku, don haka ku ne ke duba su ku gyara jadawalin da kanku." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Amsa ra'ayoyi da saƙonnin baƙi",
          minutes: 5,
          goal: "Amsa ra'ayoyi da tambayoyin baƙi da aka saba yi cikin sauri da gaskiya.",
          text: [
            "Baƙi suna yawan tambayar abubuwa iri ɗaya: lokutan buɗewa, wurin ajiye mota, ajiyar wuri, dafa wa bukukuwa, abincin da babu nama ko kayan dabbobi (vegan), rashin lafiyar abinci. Ku yi amfani da AI don mayar da ainihin amsoshinku gajerun amsoshi da za ku iya liƙawa. Don tambayoyi kan rashin lafiyar abinci, koyaushe ku nuna jadawalinku da aka duba da ma'aikatanku.",
            "Don ra'ayoyi: ku gode wa masu ra'ayi mai kyau a taƙaice ku ambaci abincin. Don marasa kyau, ku natsu, ku nemi gafara game da abin da ya faru, ku faɗi abin da kuke gyarawa, ku gayyace su su tuntuɓe ku. Kada ku yi jayayya a gaban jama'a. Ku bar AI ya rubuta daftari mai natsuwa idan kuna cikin fushi, sannan ku duba cewa kowace magana gaskiya ce.",
            "Kada ku taɓa rubuta ra'ayoyin bogi ko ku biya don ra'ayoyi masu kyau kaɗai. Dokar FTC (hukumar kasuwanci ta Amurka) kan ra'ayoyin abokan ciniki ta hana wannan, har da na bogi da AI ya rubuta."
          ],
          steps: ["Ku rubuta ainihin amsoshi ga manyan tambayoyin baƙinku.", "Ku nemi AI ya mayar da su gajerun amsoshi da za a iya liƙawa.", "Ku rubuta amsoshin ra'ayoyi cikin natsuwa da AI, sannan ku duba su.", "Kada ku taɓa yin ra'ayoyin bogi ko sayen su."],
          words: [["Ra'ayi (review)", "ƙima da sharhin baƙo a gaban jama'a."], ["Catering (dafa wa bukukuwa)", "samar da abinci don wani taro a wajen hidimar cin abinci a gidan abincin."]],
          slides: [
            { title: "Amsoshin da za a iya liƙawa", bullets: ["Lokutan buɗewa, ajiye mota, ajiyar wuri, catering", "Tambayoyin allergy: ku yi amfani da jadawalinku da aka duba"] },
            { title: "Amsar ra'ayoyi", bullets: ["Mai kyau: ku gode, ku ambaci abincin", "Marar kyau: natsuwa, neman gafara, gyara, gayyatar tuntuɓa", "Ku duba cewa kowace magana gaskiya ce"] },
            { title: "Babu ra'ayoyin bogi", bullets: ["Dokar FTC ta hana ra'ayoyin bogi", "Har da waɗanda AI ya rubuta"] }
          ],
          sources: [FTC_REVIEWS],
          tryIt: "Ku nemi AI ya rubuta amsoshi ga ra'ayi ɗaya mai kyau da ɗaya marar kyau (na gaske ko na misali, kamar abinci mai sanyi a ranar Juma'a mai cunkoso). Ku tabbata kowace magana gaskiya ce kuma da muryarku.",
          youCanNow: "amsa tambayoyin baƙi da ra'ayoyi cikin sauri, natsuwa da gaskiya.",
          quickCheck: [
            { objective: "O5", q: "Yaya ya kamata ku amsa ra'ayi mai kyau?", options: ["Ku gode musu a taƙaice ku ambaci abincin", "Ku yi watsi da shi", "Ku ba su kuɗi don wani ra'ayin", "Ku rubuta dogon labari game da gidan abincinku"], answer: 0, why: "Darasin ya ce ku gode wa masu ra'ayi mai kyau a taƙaice ku ambaci abincin." },
            { objective: "O5", q: "Kuna fushi saboda ra'ayi marar kyau da bai dace ba. Me za ku yi?", options: ["Ku yi jayayya da baƙon a gaban jama'a", "Ku bar AI ya rubuta amsa mai natsuwa, sannan ku duba cewa kowace magana gaskiya ce", "Ku saka ra'ayoyi masu kyau na bogi don ɓoye shi", "Ku goge shafin kasuwancinku"], answer: 1, why: "AI zai iya taimaka muku ku natsu, ku kuma ku duba cewa amsar gaskiya ce; ba za ku taɓa yin jayayya a gaban jama'a ko yin ra'ayoyin bogi ba." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Tsara abincin musamman daga abin da kuke da shi",
          minutes: 5,
          goal: "Tsara abincin musamman na mako da ke rage ɓarna kuma ke kawo riba.",
          text: [
            "Abincin musamman (special) zai iya sayar da ƙarin kaya kafin ya lalace, gwada sababbin abinci, da dawo da baƙin da suka saba zuwa. Ku duba abin da kuka yi oda fiye da kima ko abin da ke lokacinsa.",
            "Ku tambayi AI: \"Ina da ƙarin ayaba (plantain), wake baƙi da cinyoyin kaza a wannan mako. Ka ba ni shawarar abinci na musamman uku da suka dace da menu na abincin Caribbean, waɗanda yawanci suke amfani da waɗannan.\" Ku zaɓi ɗaya, ku lissafa kuɗinsa (kayan haɗi na kowane faranti), sannan ku sanya farashi mai riba.",
            "Ku rubuta bayanin abincin musamman, ku duba abubuwan da ke jawo rashin lafiya da hanyar jadawalinku, ku saka shi a jerin shirinku, sannan ku liƙa shi tare da hoton ainihin abincin."
          ],
          steps: ["Ku lissafa ƙarin kaya ko na lokaci.", "Ku nemi AI ya ba ku shawarwarin abinci na musamman da suka dace da menu ɗinku.", "Ku lissafa kuɗin faranti ku sanya farashi mai riba.", "Ku duba abubuwan da ke jawo rashin lafiya ku saka a jerin shiri.", "Ku liƙa shi tare da hoto na gaske."],
          words: [["Kuɗin faranti (plate cost)", "kuɗin kayan haɗi a cikin kaso ɗaya."], ["Kashi na kuɗin abinci (food cost percentage)", "kuɗin faranti raba farashin menu, sau 100."]],
          slides: [
            { title: "Me yasa abincin musamman", bullets: ["Amfani da ƙarin kaya kafin ya lalace", "Gwada sababbin abinci", "Dawo da baƙin da suka saba zuwa"] },
            { title: "AI don shawarwari", bullets: ["Ku lissafa abin da kuke da shi da yawa", "Ku nemi abinci na musamman da suka dace da menu ɗinku"] },
            { title: "Kafin ku liƙa", bullets: ["Ku lissafa kuɗin faranti ku sanya farashi", "Ku duba abubuwan da ke jawo rashin lafiya; ku saka a jerin shiri", "Ku yi amfani da hoto na gaske"] }
          ],
          tryIt: "Aikin ƙarshe: ku haɗa kayan aikin gidan abincinku: bayanin abinci biyar, jadawalin abubuwan da ke jawo rashin lafiya daga girke-girkenku da takardun bayanin kaya, jerin shiri da na oda na mako, daftarin jadawali, amsoshin ra'ayoyi biyu, da abinci na musamman ɗaya tare da kuɗin farantinsa.",
          youCanNow: "amfani da AI a tsare-tsare, aikin takardu da sadarwa da baƙi na gidan abincinku, lafiya.",
          quickCheck: [
            { objective: "O6", q: "Mene ne dalili ɗaya na yin abincin musamman?", options: ["Don ƙara farashin komai", "Don cinye sa'o'in ma'aikata", "Don sayar da ƙarin kaya kafin ya lalace", "Don guje wa duba abubuwan da ke jawo rashin lafiya"], answer: 2, why: "Abincin musamman zai iya sayar da ƙarin kaya, gwada sababbin abinci, da dawo da baƙin da suka saba zuwa." },
            { objective: "O6", q: "AI ya ba da shawarar abinci na musamman uku daga ƙarin ayabarku. Me za ku yi a gaba?", options: ["Ku liƙa dukkansu uku nan take da hotunan wasu", "Ku nemi AI ya sanya farashin", "Ku tsallake lissafin kuɗi domin na mako ɗaya ne kawai", "Ku zaɓi ɗaya, ku lissafa kuɗin faranti, ku sanya farashi mai riba"], answer: 3, why: "Kuna lissafa kuɗin faranti ku sanya farashi mai riba, sannan ku duba abubuwan da ke jawo rashin lafiya ku saka shi a jerin shiri." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Ma'aikata, baƙi da ci gaba",
        questions: [
          { objective: "O4", q: "A ina za ku duba ƙa'idojin hutu da overtime?", options: ["Ofishin ƙwadago na jiharku ko ƙwararre", "Daftarin AI", "Wani abokin ciniki", "Wani rubutu a kafofin sada zumunta"], answer: 0, why: "Ƙa'idojin aiki sun dogara da jiharku da birninku." },
          { objective: "O4", q: "Wane bayanin ma'aikaci ya kamata ya shiga prompt na jadawalin AI?", options: ["Adireshin gida", "Lambobin Social Security", "Albashi tare da sunaye", "Sunayen farko da lokutan samuwa"], answer: 3, why: "Abin da ake buƙata kaɗai, babu na sirri." },
          { objective: "O5", q: "Baƙo ya aiko da saƙo yana tambaya ko wani abinci ba shi da gyaɗa. Amsarku ta dogara da:", options: ["Tsammanin AI", "Jadawalinku da aka duba da ma'aikatanku", "Hoton menu", "Tunaninku kaɗai"], answer: 1, why: "Amsoshi kan abubuwan da ke jawo rashin lafiya suna fitowa daga jadawalinku da aka duba." },
          { objective: "O5", q: "A ƙarƙashin dokar FTC, wanne aka hana?", options: ["Rubuta ra'ayoyin bogi da AI", "Gode wa mai ra'ayi", "Amsa ra'ayi marar kyau", "Neman baƙi su ba da ra'ayi na gaskiya"], answer: 0, why: "An hana ra'ayoyin bogi, har da waɗanda AI ya rubuta." },
          { objective: "O6", q: "Wani abincin musamman yana amfani da kayan haɗi na $3.50 kuma ana sayar da shi $14. Menene kashi na kuɗin abinci?", options: ["14%", "25%", "35%", "50%"], answer: 1, why: "3.50 / 14 = 0.25, wato 25%." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Gidajen Abinci",
    questions: [
      { objective: "O1", q: "Bayanin abinci mai kyau a menu yana da kusan:", options: ["Kalmomi 200", "Kalmomi 10 zuwa 25", "Harafi ɗaya", "Shafi cikakke"], answer: 1, why: "Ana karanta gajerun bayanai da sauri." },
      { objective: "O1", q: "Me za ku ba AI don ya rubuta bayanin abinci?", options: ["Babu komai", "Bayanan bankinku", "Sunayen baƙi", "Ainihin kayan haɗi da hanyar dafawa"], answer: 3, why: "Gaskiyar bayanai suna kawo bayani daidai." },
      { objective: "O1", q: "Me yasa za ku duba kowace kalmar kayan haɗi da AI ya rubuta?", options: ["Ba a buƙata", "Don ya ƙara tsawo", "Don rubutun haruffa kawai", "Kayan haɗi marar daidai yana iya cutar da baƙo mai allergy"], answer: 3, why: "Daidaito batun lafiya ne." },
      { objective: "O2", q: "Wanne ne ɗaya daga cikin manyan abubuwa tara na FDA da ke jawo rashin lafiya?", options: ["Shinkafa", "Ridi", "Masara", "Kaza"], answer: 1, why: "An ƙara ridi a matsayin na tara." },
      { objective: "O2", q: "Me yasa za ku karanta takardar bayanin kowane kayan da kuka saya?", options: ["Don nishaɗi", "Don ganin farashi", "Miya da gauraye suna iya ɓoye abubuwan da ke jawo rashin lafiya", "Ba a buƙata"], answer: 2, why: "Abubuwan da ke jawo rashin lafiya a ɓoye sun zama ruwan dare a kayan da aka riga aka shirya." },
      { objective: "O2", q: "Yaushe ya kamata ku sabunta jadawalin abubuwan da ke jawo rashin lafiya?", options: ["Idan girke-girke ko mai sayar da kaya ya canja", "Sau ɗaya a kowace shekara goma", "Ba za a taɓa ba", "Bayan ƙorafi kawai"], answer: 0, why: "Canje-canje na iya ƙara abubuwan da ke jawo rashin lafiya." },
      { objective: "O2", q: "Mene ne cross-contact?", options: ["Kiran waya", "Ma'aikata biyu suna magana", "Abin da ke jawo rashin lafiya ya shiga wani abinci ta kayan aiki ko mai da ake rabawa", "Canjin menu"], answer: 2, why: "Wuraren aiki da ake rabawa suna iya yaɗa abubuwan da ke jawo rashin lafiya." },
      { objective: "O2", q: "Wane ne ke sanya ƙa'idojin tsabtar abinci na gidan abincinku?", options: ["Ofishin lafiya na yankinku, sau da yawa bisa FDA Food Code", "AI", "Abokan cinikinku", "Shafin ra'ayoyi"], answer: 0, why: "Hukumomin gwamnati ne ke sanya ƙa'idojin." },
      { objective: "O3", q: "Jerin shiri shi ne:", options: ["Jadawalin ma'aikata", "Abin da kicin dole ya shirya kafin a fara sayarwa", "Ra'ayi", "Takardar haraji"], answer: 1, why: "Yana jagorantar shirin kicin." },
      { objective: "O3", q: "=ROUNDUP(B2/C2,0) yana ba da:", options: ["Abubuwan da ke jawo rashin lafiya", "Riba", "Sa'o'in ma'aikata", "Cikakkun girkin da ake buƙata, an tara zuwa sama"], answer: 3, why: "Yana tara adadin girki zuwa sama." },
      { objective: "O3", q: "Wane ne ke sanya adadin shiri na ƙarshe?", options: ["Ku, daga lambobinku da ƙwarewarku", "AI shi kaɗai", "Mai sayar da kaya", "Baƙi"], answer: 0, why: "AI yana taimakawa da tsari; ku ne ke yanke adadin." },
      { objective: "O3", q: "Wanne ne dalili mai kyau na daidaita shiri?", options: ["Babu komai", "Sabon salon rubutu (font)", "AI ya ce haka", "Wani biki a yankin a ƙarshen wannan mako"], answer: 3, why: "Bukukuwa suna canja yawan buƙata." },
      { objective: "O4", q: "Daftarin jadawalin AI ya ba ma'aikaci ɗaya shift 7. Za ku:", options: ["Yi watsi da shi", "Liƙa shi", "Duba adalci da ƙa'idojin aiki, sannan ku gyara shi", "Nemi ma'aikacin ya bar aiki"], answer: 2, why: "Kuna duba kowane daftari." },
      { objective: "O4", q: "Shin AI majiya ce amintacciya don dokar overtime ta jiharku?", options: ["Eh, koyaushe", "A'a, ku duba ofishin ƙwadago na jiha", "A ƙarshen mako kawai", "Don yara ƙanana kawai"], answer: 1, why: "Dokar aiki tana buƙatar majiyar hukuma." },
      { objective: "O5", q: "Wani ra'ayi marar kyau yana ƙorafin abinci mai sanyi. Amsa mai kyau:", options: ["Tana ba da kuɗi don ra'ayi mafi kyau", "Tana jayayya a gaban jama'a", "Tana bayyana bayanan baƙon", "Tana neman gafara, tana faɗin abin da kuke gyarawa, tana gayyatar tuntuɓa"], answer: 3, why: "Amsoshi masu natsuwa da gaskiya suna gina amana." },
      { objective: "O5", q: "Biyan baƙi sai idan sun ba da tauraro 5:", options: ["Dole ne", "Dabarar talla ce mai hikima", "An hana shi a ƙarƙashin dokar FTC kan ra'ayoyi", "Babu laifi"], answer: 2, why: "An hana ladan da aka ɗaura da ra'ayi mai kyau." },
      { objective: "O6", q: "Amfani mai kyau na abincin musamman shi ne:", options: ["Amfani da ƙarin kaya kafin ya lalace", "Ɓoye tsohon abinci", "Ƙara farashin komai", "Tsallake duba abubuwan da ke jawo rashin lafiya"], answer: 0, why: "Abincin musamman yana rage ɓarna." },
      { objective: "O6", q: "Mene ne kuɗin faranti?", options: ["Farashin kwanoni", "Kuɗin kayan haɗi a cikin kaso ɗaya", "Kuɗin haya", "Kuɗin tukwici"], answer: 1, why: "Kuɗin kayan haɗi ne na kowane faranti." },
      { objective: "O6", q: "Kafin ku liƙa abincin musamman ya kamata ku:", options: ["Tsallake sanya farashi", "Duba abubuwan da ke jawo rashin lafiya ku saka shi a jerin shiri", "Yi amfani da hoton wani abinci daban", "Yi alƙawarin cewa organic ne"], answer: 1, why: "Lafiya da tsari su ne farko." },
      { objective: "O6", q: "Kashi na kuɗin abinci shi ne:", options: ["Kuɗin faranti raba farashin menu, sau 100", "Kuɗin haya raba ciniki", "Tukwici sau ma'aikata", "Farashi da haraji"], answer: 0, why: "Yana nuna nawa daga cikin farashin kayan haɗi ne." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [1, 3, 6, 9, 12, 14, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Bayanan menu daidai", objective: "O1", notYet: "Wani bayani yana da kayan haɗi ko iƙirarin da ba ya cikin abincin.", meets: "Gajerun bayanai biyar, kowace kalmar kayan haɗi ta yi daidai da girke-girke.", exceeds: "Kowanne kuma yana faɗin yadda aka dafa abincin da abin da ya sa ya zama na musamman." },
      { name: "Jadawalin da aka duba", objective: "O2", notYet: "An kwafo jadawalin daga AI, ko wani abinci ko wani abu ya ɓace.", meets: "An yi alama ga dukkan abinci biyar da abubuwa tara daga girke-girke da takardun bayanin kaya, kuma mutum na biyu ya duba.", exceeds: "Yana kuma nuna waɗanne kayan da aka saya ke ɓoye abubuwan da ke jawo rashin lafiya, da lokacin da aka sabunta jadawalin na ƙarshe." },
      { name: "Jerin shiri da na oda", objective: "O3", notYet: "An yi tsammanin adadi, ko ba a tara girki zuwa sama ba.", meets: "Jerin shiri da na oda na mako da aka yi daga ciniki, an tara girki zuwa sama.", exceeds: "An daidaita adadin don wani biki, ƙarshen mako ko yanayi da aka ambata." },
      { name: "Jadawali mai adalci, an duba", objective: "O4", notYet: "Jadawalin ya bar shift mai cunkoso ba isassun ma'aikata, ko an yi amfani da bayanan sirri na ma'aikata.", meets: "Yana cike kowane shift da adalci, sunayen farko kaɗai, kuma yana nuna inda aka duba ƙa'idojin aiki.", exceeds: "Yana kuma nuna hutu da duk wata ƙa'ida ta yara ƙanana daga majiyar jiha." },
      { name: "Amsoshin ra'ayi na gaskiya", objective: "O5", notYet: "Wata amsa tana jayayya, tana yin alƙawarin ƙarya ko tana ba da lada don ra'ayoyi.", meets: "An amsa ra'ayi ɗaya mai kyau da ɗaya marar kyau cikin natsuwa da maganganun gaskiya kaɗai.", exceeds: "Amsar ra'ayi marar kyau tana ambaton ainihin gyara kuma tana gayyatar baƙon ya tuntuɓe ku." },
      { name: "Abinci na musamman da aka lissafa kuɗinsa", objective: "O6", notYet: "Abincin musamman ba shi da kuɗin faranti ko farashi.", meets: "Abinci na musamman ɗaya da kuɗin faranti, farashi mai riba, kuma an duba abubuwan da ke jawo rashin lafiya.", exceeds: "An kuma saka shi a jerin shiri, kuma yana amfani da ƙarin kaya ko na lokaci." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu gidaje da suka ce suna amfani da jadawalin abubuwan da ke jawo rashin lafiya da jerin shiri a kicin cikin kwanaki 30 (binciken biyo baya)",
      "Masu gidaje da suka ce ɓarnar abinci ta ragu ko abinci ba ya ƙarewa sosai cikin kwanaki 30",
      "Masu koyo da suka fara wani kwas na ƙananan kasuwanci na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Mataimakin AI kyauta da spreadsheet kyauta kamar Google Sheets",
      "Girke-girkenku, takardun bayanin kayan haɗi da lambobin cinikin mako ɗaya",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku nemi masu gidaje su kawo ainihin girke-girke da takardun bayanin kaya, ko ku yi amfani da na misali, don a yi jadawalin abubuwan da ke jawo rashin lafiya daga bayanai na gaske.",
      "Ku jaddada cewa ƙa'idojin abubuwan da ke jawo rashin lafiya, tsabtar abinci da aiki suna fitowa daga FDA, ofishin lafiya na yanki da ofishin ƙwadago na jiha, ba daga AI ba.",
      "Ku tunatar da masu koyo su yi amfani da sunayen farko kaɗai ga ma'aikata, kuma kada su taɓa rubuta lambobin Social Security ko albashi tare da sunaye.",
      "Ku tsara zaman koyo a wajen lokutan cunkoson abinci, misali tsakiyar rana bayan abincin rana.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

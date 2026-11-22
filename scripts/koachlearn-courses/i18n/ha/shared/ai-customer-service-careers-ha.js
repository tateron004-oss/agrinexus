"use strict";

// Koach Learn course, Hausa (ha) translation of shared/ai-customer-service-careers.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "ai-customer-service-careers-ha",
  lang: "ha",
  translationOf: "ai-customer-service-careers",
  category: "Re-Entry",
  name: "AI a Ayyukan Hidimar Abokan Ciniki",
  skills: "Kula da abokin ciniki daga farko zuwa ƙarshe, Kwantar da hankalin abokin ciniki mai fushi, Amfani da amsoshin da AI ke shawartawa da tushen ilimi (knowledge base), Rubuta bayanan tikiti, Kare bayanan abokan ciniki, Hirar neman aikin hidimar abokan ciniki",
  outcome: "kula da kira ko hira da abokin ciniki daga gaisuwa har zuwa rufewa, kwantar da hankalin abokin ciniki mai fushi, amfani da kayan AI kamar yadda ma'aikatan taimako ke yi tare da tabbatar da amsoshinsu, rubuta bayanan tikiti masu sarari, da nuna waɗannan ƙwarewa a hirar neman aikin hidimar abokan ciniki.",
  about: [
    "Ayyukan hidimar abokan ciniki (customer service) suna ko'ina: cibiyoyin kira (call center), taimako ta hira (chat), shaguna, bankuna, asibitoci, kamfanonin wuta da ruwa, kamfanonin isar da kaya da kamfanonin fasaha. Da yawa ayyukan farko ne, suna ba da horo, wasu kuma ana yin su daga gida. AI yana canja aikin: chatbot (shirin hira na AI) yana amsa tambayoyi masu sauƙi, ma'aikata kuma suna kula da masu wuya da taimakon AI.",
    "Wannan kwas ɗin na mutanen da ke dawowa gida ne, masu neman aiki a shirye-shiryen horar da ma'aikata, da duk wanda ke son aikin hidimar abokan ciniki. Ƙwarewar mu'amala da mutane da kuke da ita, kamar natsuwa, sauraro da magance matsaloli, su ne zuciyar aikin.",
    "Za ku yi atisaye da mataimakin AI da ke yin kamar abokin ciniki. Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku yi wasan kwaikwayo na abokan ciniki uku da mataimakin AI da ke yin kamar abokin ciniki: tambaya mai sauƙi, abokin ciniki mai fushi, da matsalar da ba za ku iya magancewa a ƙoƙarin farko ba. Ku yi amfani da matakai biyar na kula da abokin ciniki, ku rubuta bayanan tikiti ga kowanne, sannan ku rubuta layuka uku na CV (résumé) da amsar hira ta STAR game da kwantar da hankalin abokin ciniki mai fushi.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Mutanen da ke dawowa gida daga gidan yari, masu neman aiki a shirye-shiryen horar da ma'aikata, da duk wanda ke son aikin farko na hidimar abokan ciniki a cibiyar kira, ƙungiyar hira, shago, banki, asibiti ko kamfanin isar da kaya.",
    startingPoint: "Suna iya magana da mutane, su natsu, su magance matsalolin yau da kullum. Da yawa sun yi amfani da waya da saƙon tes; kaɗan ne suka yi amfani da teburin taimako, tsarin tikiti ko mataimakin AI a wurin aiki.",
    gap: "Ayyukan hidimar abokan ciniki yanzu suna haɗa mu'amala da mutane da kayan AI. Masu koyo suna buƙatar hanya mai sarari ta kula da abokin ciniki, kwantar da hankalin masu fushi, duba shawarwarin AI, rubuta bayanan tikiti, da nuna waɗannan ƙwarewa a hira, don a ɗauke su aiki kuma su riƙe aikin.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Na'urori: waya, ko kwamfutar ɗakin karatu ko ta shirin da ake rabawa",
      "Lokaci: darussa na kusan minti biyar tare da gajerun atisaye",
      "Sirri: atisaye yana amfani da abokan ciniki na ƙage, babu bayanan asusu na gaske",
      "Dokoki da kayan aiki sun bambanta tsakanin kamfanoni; masu koyo suna bin dokar kowane mai ɗaukar aiki"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da kayan AI ba za su iya fara ɗaukar kwas ɗin \"Introduction to AI and Digital Confidence\" (Gabatarwa ga AI da Ƙarfin Gwiwa a Fasahar Zamani)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku tallace-tallacen ayyukan hidimar abokan ciniki guda uku", action: "bayyana manyan ayyukan hidimar abokan ciniki da yadda ma'aikata ke amfani da kayan AI kamar chatbot, amsoshin da aka shawarta da tushen ilimi", standard: "kuna ambaton aƙalla kayan aiki ɗaya da aikin mutum ɗaya ga kowane aiki" },
    { id: "O2", condition: "A wasan kwaikwayo da abokin ciniki", action: "kula da abokin ciniki daga gaisuwa har zuwa rufewa da matakai biyar: gaisuwa, sauraro, tabbatarwa, magancewa da rufewa", standard: "kuna amfani da dukkan matakai biyar bisa jeri" },
    { id: "O3", condition: "A wasan kwaikwayo da abokin ciniki mai fushi", action: "kwantar da hankalin abokin ciniki da matakan HEAT, da yanke shawarar lokacin da za a miƙa shi gaba (escalate)", standard: "ba tare da gardama ko cewa \"ka natsu\" ba" },
    { id: "O4", condition: "Idan aka ba ku amsar da AI ya shawarta", action: "duba amsar da tushen ilimi da dokar kamfani, da gyara ta kafin aikawa", standard: "har kowane bayani da alkawari ya yi daidai da doka" },
    { id: "O5", condition: "Bayan kun kula da abokin ciniki", action: "rubuta bayanan tikiti da ke ɗauke da matsalar, abin da kuka yi, abin da aka yi alkawari da mataki na gaba", standard: "da dukkan sassan da ake buƙata, ba tare da kalmomin sirri ko bayanan sirri ba" },
    { id: "O6", condition: "Idan aka ba ku tallar aiki", action: "rubuta layukan CV da amsar hira ta STAR da ke nuna ƙwarewarku ta hidimar abokan ciniki", standard: "da layuka uku da cikakken labarin STAR ɗaya" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yi wa abokan ciniki hidima da kyau",
      lessons: [
        {
          objectives: ["O1"],
          title: "Yadda aikin hidimar abokan ciniki yake tare da AI",
          minutes: 4,
          goal: "Bayyana ayyukan hidimar abokan ciniki da yadda ake amfani da kayan AI a cikinsu.",
          text: [
            "Ma'aikatan hidimar abokan ciniki suna taimakon mutane ta waya, hira (chat), imel, kafofin sada zumunta ko fuska da fuska. Sunayen ayyukan da aka saba: customer service representative (wakilin hidimar abokan ciniki), support agent (ma'aikacin taimako), call center agent (ma'aikacin cibiyar kira), help desk technician (ma'aikacin teburin taimako) da client care specialist (ƙwararren kula da abokan ciniki).",
            "Yanzu AI yana amsa tambayoyi masu sauƙi da yawa ta chatbot, don haka ma'aikata mutane suna samun matsaloli masu wuya, masu sa motsin rai, ko na ban mamaki. Ma'aikata sau da yawa suna amfani da kayan AI da ke shawarta amsoshi, ke bincika tushen ilimin kamfani, ke taƙaita dogon hira, da ke rubuta bayanan tikiti.",
            "Wannan yana sa ƙwarewar mutum ta fi daraja: sauraro, tausayi, natsuwa, hankali wajen yanke shawara da magance matsaloli. AI yana shawartawa; ku ne kuke yanke abin da ya dace da abokin ciniki, kuma kuna bin dokar kamfani."
          ],
          words: [["Customer service representative (wakilin hidimar abokan ciniki)", "mutumin da aikinsa shi ne taimakon abokan ciniki da tambayoyi da matsaloli."], ["Tushen ilimi (knowledge base)", "ɗakin karatun kamfani na amsoshi da rubuce-rubucen yadda ake yin abubuwa."], ["Tikiti (ticket)", "rubutaccen bayani na matsalar abokin ciniki ɗaya da abin da aka yi game da ita."]],
          slides: [
            { title: "Inda ayyukan suke", bullets: ["Waya, hira, imel, kafofin sada zumunta, fuska da fuska", "Shaguna, bankuna, asibitoci, kamfanonin wuta da ruwa, fasaha"] },
            { title: "AI a cikin aikin", bullets: ["Chatbot yana amsa tambayoyi masu sauƙi", "Amsoshin da aka shawarta da bincike a tushen ilimi", "Taƙaitawa da bayanan tikiti"] },
            { title: "Ƙwarewar mutum ta fi muhimmanci", bullets: ["Sauraro da tausayi", "Natsuwa da hankali", "Ku ne kuke yanke shawara; AI yana shawartawa"] }
          ],
          tryIt: "Ku duba tallace-tallacen ayyukan hidimar abokan ciniki guda uku. Ku rubuta sunayen ayyukan, ko sun ambaci AI, hira ko wasu kayan aiki, da ƙwarewa uku da kowanne yake nema.",
          youCanNow: "bayyana ayyukan hidimar abokan ciniki da yadda ma'aikata ke amfani da kayan AI.",
          quickCheck: [
            { objective: "O1", q: "Me ma'aikacin taimako mutum yake yawan kula da shi idan kamfani yana amfani da chatbot?", options: ["Sake saita kalmar sirri kaɗai", "Babu komai, domin chatbot yana yin dukkan aikin", "Matsaloli masu wuya da masu sa motsin rai", "Matsalolin da ke wani yare kaɗai"], answer: 2, why: "Chatbot yana ɗaukar tambayoyi masu sauƙi, don haka mutane suna samun masu wuya da ke buƙatar kulawa da hankali." },
            { objective: "O1", q: "Wata tallar aiki tana neman \"gogewa da tsarin tikiti (ticketing system)\". Ba ku taɓa amfani da shi ba. Me za ku yi?", options: ["Ku ƙyale aikin domin ba ku cancanta ba", "Ku nema, ku nuna ƙwarewa masu alaƙa, ku koyi abin da tsarin tikiti ke yi", "Ku rubuta a CV ɗinku cewa kun yi amfani da shi", "Ku nemi chatbot ya nema muku aikin"], answer: 1, why: "Kuna iya nema da gaskiya, ku nuna ƙwarewa masu alaƙa, ku koyi kayan aikin; ƙarya a CV ba ita ce mafita ba." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Matakai biyar na kula da abokin ciniki",
          minutes: 5,
          goal: "Kula da abokin ciniki daga gaisuwa har zuwa rufewa da matakai biyar.",
          text: [
            "Yawancin mu'amala mai kyau da abokin ciniki tana bin matakai biyar. Gaisuwa: ku faɗi sunanku ku ba da taimako. Sauraro: ku bar shi ya yi bayani ba tare da katse shi ba, ku yi tambayoyi don ku fahimta. Tabbatarwa: ku maimaita matsalar da kalmominku. Magancewa: ku ba da amsa ko matakai na gaba a sarari. Rufewa: ku tabbata an magance ta, ku tambaya ko akwai wani abu, ku yi godiya.",
            "Misali: \"Na gode da kiran ku, sunana Dee. Me zan iya taimaka muku da shi?\" ... \"Wato odarku tana nuna an isar da ita amma ba ku same ta ba. Bari in duba.\" ... \"Na aika muku da wata; za ta iso ranar Alhamis. Akwai wani abu kuma da zan iya taimakawa da shi?\"",
            "Ku tabbatar da ainihin mutumin (verify identity) ta hanyar tsarin kamfani kafin ku bayyana bayanan asusu. Kada ku taɓa neman bayanin da tsarin bai buƙata ba, kuma kada ku taɓa neman cikakkiyar kalmar sirri."
          ],
          steps: ["Ku gaishe shi da sunanku, ku ba da taimako.", "Ku saurara ba tare da katsewa ba; ku yi tambayoyi.", "Ku tabbatar da matsalar da kalmominku.", "Ku magance ta ko ku bayyana matakai na gaba a sarari.", "Rufewa: ku duba, ku tambaya ko akwai wani abu, ku yi godiya."],
          words: [["Tabbatar da ainihin mutum (verify identity)", "tabbatar cewa abokin ciniki shi ne wanda ya ce shi ne, ta matakan kamfani."], ["Mafita (resolution)", "maganin matsalar abokin ciniki."]],
          slides: [
            { title: "Matakai biyar", bullets: ["Gaisuwa da sauraro", "Tabbatar da matsalar", "Magancewa da rufewa"] },
            { title: "Ku yi magana kamar haka", bullets: ["\"Sunana Dee. Me zan iya taimaka muku da shi?\"", "\"Wato odarku tana nuna an isar da ita amma ba ta iso ba.\"", "\"Akwai wani abu kuma da zan iya taimakawa da shi?\""] },
            { title: "Ku kare asusun", bullets: ["Ku tabbatar da ainihin mutum ta hanyar kamfani", "Ku nemi abin da ake buƙata kaɗai", "Kada ku taɓa neman cikakkiyar kalmar sirri"] }
          ],
          tryIt: "Ku tambayi mataimakin AI: \"Ka yi kamar abokin ciniki wanda kayansa ke nuna an isar amma bai iso ba. Ka ci gaba da wannan matsayin. Idan mun gama, ka ba ni maki kan gaisuwa, sauraro, tabbatarwa, magancewa da rufewa.\" Ku yi wasan kwaikwayon.",
          youCanNow: "kula da abokin ciniki daga gaisuwa har zuwa rufewa da matakai biyar.",
          quickCheck: [
            { objective: "O2", q: "Wane mataki ne ke zuwa nan da nan bayan kun gaishe da abokin ciniki?", options: ["Magancewa", "Rufewa", "Tabbatarwa", "Sauraro"], answer: 3, why: "Bayan gaisuwa, kuna sauraron dukkan matsalar kafin ku tabbatar ko ku magance ta." },
            { objective: "O2", q: "Kuna ganin an magance matsalar. Me za ku yi kafin ku gama?", options: ["Ku tabbata an magance ta, ku tambaya ko akwai wani abu, ku yi godiya", "Ku katse wayar da sauri don karɓar kira na gaba", "Ku ce ya sake kira idan ta sake lalacewa", "Ku nemi ya ba ku taurari biyar"], answer: 0, why: "Rufewa mai kyau tana duba maganin, tana tambaya ko akwai wani abu, kuma tana godiya ga abokin ciniki." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kwantar da hankalin abokin ciniki mai fushi",
          minutes: 6,
          goal: "Yi amfani da matakan kwantar da hankali don natsar da abokin ciniki mai fushi da samun mafita.",
          text: [
            "Abokan ciniki masu fushi yawanci suna fushi da abin da ya faru ne, ba da ku ba. Ku natsu, ku yi magana a hankali da ƙaramar murya, kada ku yi gardama, kuma kada ku ɗauka abin ya shafe ku.",
            "Ku yi amfani da matakan HEAT: Hear (ku saurare shi har ya gama), Empathize (ku nuna tausayi: \"Na fahimci yadda wannan ke ɓata rai\"), Apologize (ku nemi gafara game da abin da ya fuskanta), da Take action (ku ɗauki mataki: ku faɗi ainihin abin da za ku yi). Ku guji cewa \"ka natsu\" da \"wannan ba aikina ba ne\".",
            "Ku san iyakarku. Idan wani yana zagi ko barazana, ku bi dokar kamfaninku, wadda sau da yawa tana ba da damar gargaɗi sannan a gama mu'amalar, ko a miƙa ta ga mai kula (supervisor). Ɗan hutu da magana da abokan aiki bayan kira mai wuya suna taimaka muku ku kasance lafiya."
          ],
          steps: ["Ku natsu kuma kada ku ɗauka abin ya shafe ku.", "Ku saurare shi har ya gama.", "Ku nuna tausayi ku nemi gafara game da abin da ya fuskanta.", "Ku ɗauki mataki: ku faɗi ainihin abin da za ku yi.", "Idan yana zagi, ku bi dokar kamfani ko ku kira mai kula."],
          words: [["Kwantar da hankali (de-escalation)", "natsar da yanayi mai zafi."], ["Tausayi (empathy)", "nuna cewa kun fahimci yadda wani yake ji."], ["Miƙa gaba (escalate)", "miƙa matsala ga mai kula ko ƙwararre."]],
          slides: [
            { title: "Ba ku ne ake fushi da su ba", bullets: ["Suna fushi da abin da ya faru", "Murya ƙarama, a hankali; babu gardama"] },
            { title: "HEAT", bullets: ["Hear: ku saurare shi har ya gama", "Empathize da Apologize: tausayi da neman gafara", "Take action: ku ɗauki mataki"] },
            { title: "Ku san iyakarku", bullets: ["Zagi ko barazana: ku bi doka", "Ku kira mai kula", "Ku kula da kanku bayan kira mai wuya"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya yi kamar abokin ciniki mai fushi da aka cire masa kuɗi sau biyu a lissafinsa. Ku yi amfani da HEAT. Sannan ku tambayi AI waɗanne kalmomi suka yi aiki, da waɗanda ya kamata ku canja.",
          youCanNow: "kwantar da hankalin abokin ciniki mai fushi da HEAT, da sanin lokacin da za a miƙa shi gaba.",
          quickCheck: [
            { objective: "O3", q: "Me harafin T a HEAT ke nufi?", options: ["Talk faster (yi magana da sauri)", "Transfer (tura shi)", "Take action (ɗauki mataki)", "Thank (yi godiya)"], answer: 2, why: "HEAT shi ne Hear, Empathize, Apologize da Take action." },
            { objective: "O3", q: "Abokin ciniki yana ihu game da cire kuɗi sau biyu. Me za ku fara cewa?", options: ["\"Na ji ku, kuma ina neman gafara da wannan ya faru. Bari in duba shi yanzu.\"", "\"Ka natsu don in taimake ka.\"", "\"Wannan ba sashena ba ne.\"", "\"Lallai ka danna sau biyu.\""], answer: 0, why: "Sauraro da nuna tausayi da farko suna rage zafi; ɗora laifi ko cewa ka natsu suna ƙara shi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yi wa abokan ciniki hidima da kyau",
        questions: [
          { objective: "O1", q: "Mene ne tushen ilimi (knowledge base)?", options: ["Asusun bankin abokin ciniki", "Wani nau'in chatbot", "Ɗakin karatun kamfani na amsoshi da rubuce-rubucen yadda ake yin abubuwa", "Bidiyon horo kaɗai"], answer: 2, why: "Ma'aikata suna bincika shi don samun amsoshi daidai." },
          { objective: "O1", q: "Me yasa ƙwarewar mutum ke ƙara muhimmanci yayin da AI ke ƙaruwa a hidimar abokan ciniki?", options: ["Mutane suna samun matsaloli masu wuya da masu sa motsin rai", "An hana AI", "Abokan ciniki ba sa amfani da hira", "Mutane suna amsa tambayoyi masu sauƙi kaɗai"], answer: 0, why: "Chatbot yana ɗaukar masu sauƙi; mutane suna kula da masu wuya." },
          { objective: "O2", q: "Wane mataki ne ke zuwa nan da nan bayan sauraro?", options: ["Rufe kiran", "Neman kalmar sirrinsa", "Tura shi wani wuri", "Tabbatar da matsalar da kalmominku"], answer: 3, why: "Tabbatarwa tana nuna cewa kun fahimta." },
          { objective: "O3", q: "Me harafin E a HEAT ke nufi?", options: ["Escalate (miƙa gaba)", "Empathize (nuna tausayi)", "Exit (fita)", "Email (imel)"], answer: 1, why: "HEAT: Hear, Empathize, Apologize, Take action." },
          { objective: "O3", q: "Wace magana ya kamata ku guje wa da abokin ciniki mai fushi?", options: ["\"Na fahimci yadda wannan ke ɓata rai.\"", "\"Ka natsu.\"", "\"Ga abin da zan yi.\"", "\"Na gode da haƙurinku.\""], answer: 1, why: "\"Ka natsu\" yawanci yana ƙara wa mutane fushi." }
        ]
      }
    },
    {
      name: "Babi na 2: Kayan AI da samun aiki",
      lessons: [
        {
          objectives: ["O4"],
          title: "Amfani da amsoshin da AI ke shawartawa da tushen ilimi",
          minutes: 5,
          goal: "Yi amfani da shawarwarin AI a matsayin farawa, ku duba su kafin aikawa.",
          text: [
            "Tsarin taimako da yawa suna nuna amsoshin da AI ya shawarta, ko amsoshin da aka ɗauko daga tushen ilimi. Suna rage lokaci, amma suna iya zama ba daidai ba, tsofaffi, ko ba su dace da halin wannan abokin ciniki ba.",
            "Kafin ku aika: ku karanta ta duka, ku duba bayanai da tushen ilimi ko dokar kamfani (ranaku, farashi, dokokin mayar da kuɗi), ku sa ta dace da wannan mutumin (ku yi amfani da sunansa, ku amsa abin da ya tambaya), ku gyara salon magana. Idan AI ya shawarta abin da ya saɓa wa doka, kamar mayar da kuɗin da ba a ba ku izinin bayarwa ba, kada ku aika.",
            "Don yin atisaye a gida, ku manna saƙon abokin ciniki na ƙage a mataimakin AI kyauta ku tambaya: \"Ka rubuta amsa mai fara'a. Dokarmu: ana mayar da kuɗi cikin kwanaki 30 tare da rasit.\" Sannan ku gyara ta kamar ku ne ma'aikacin."
          ],
          steps: ["Ku karanta amsar da aka shawarta duka.", "Ku duba bayanai da tushen ilimi ko doka.", "Ku sa ta dace da wannan abokin ciniki.", "Ku gyara salon magana.", "Kada ku aika duk abin da ya saɓa wa doka."],
          words: [["Amsar da aka shawarta (suggested reply)", "amsar da AI ya rubuta wadda ma'aikaci zai iya gyarawa ya aika."], ["Doka (policy)", "dokokin hukuma na kamfani."]],
          slides: [
            { title: "Shawarwarin AI suna rage lokaci", bullets: ["Amma suna iya zama ba daidai ba ko tsofaffi", "Ƙila ba su dace da wannan abokin ciniki ba"] },
            { title: "Kafin ku aika", bullets: ["Ku duba bayanai da doka", "Ku sa ta dace da shi, ku gyara salon magana", "Kada ku taɓa aika abin da ya saɓa wa doka"] },
            { title: "Atisaye a gida", bullets: ["Ku manna saƙon ƙage a AI", "Ku ba shi dokar", "Ku gyara kamar ma'aikaci"] }
          ],
          tryIt: "Ku rubuta imel na ƙage daga abokin ciniki game da mayar da kuɗi da ya makara. Ku nemi AI ya rubuta amsa da wata doka da kuka ƙirƙira, sannan ku gyara ta ku yi alama a kowane canji da kuka yi.",
          youCanNow: "amfani da amsoshin da AI ya shawarta lafiya ta hanyar dubawa, sa su dace da mutum, da bin doka.",
          quickCheck: [
            { objective: "O4", q: "Mene ne amsar da AI ya shawarta?", options: ["Amsar ƙarshe da dole ku aika", "Daftarin da AI ya rubuta wanda kuke dubawa ku gyara", "Saƙo daga mai kula da ku", "Binciken da abokin ciniki ke cikewa"], answer: 1, why: "Shawarar farawa ce kawai; ku ne kuke duba ta ku yanke abin da za ku aika." },
            { objective: "O4", q: "Daftarin AI ya yi alkawarin mayar da kuɗi cikin kwana biyu, amma doka ta ce kwana biyar zuwa bakwai. Me za ku yi?", options: ["Ku aika domin AI ne ya rubuta", "Ku goge amsar duka kada ku aika komai", "Ku canja lokacin ya yi daidai da doka kafin aikawa", "Ku tambayi abokin ciniki wane lokaci yake so"], answer: 2, why: "Kowane bayani da alkawari dole ya yi daidai da doka kafin ku aika." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Rubuta bayanan tikiti da kare bayanan abokan ciniki",
          minutes: 5,
          goal: "Rubuta bayanan tikiti masu sarari, ku kula da bayanan abokan ciniki lafiya.",
          text: [
            "Kowace mu'amala tana buƙatar bayanai don ma'aikaci na gaba ya san abin da ya faru. Bayanan tikiti masu kyau gajeru ne kuma na gaskiya: matsalar, abin da kuka duba, abin da kuka yi, abin da aka yi alkawari, da ranar mataki na gaba idan akwai. Misali: \"Abokin ciniki ya ce kayansa sun ɓace, odar tana nuna an isar 10/12. Na duba bin sawun mai jigilar kaya. Na aika wani, zai iso 10/16. A bi diddigi idan bai samu ba.\"",
            "Wasu kayan aiki suna barin AI ya taƙaita hirar zuwa bayanai. Ku duba taƙaitawar: AI yana iya mantawa da alkawari, ko ya ƙara abin da bai faru ba.",
            "Ku kare bayanai: ku shiga asusun da kuke taimakawa kaɗai, kada ku taɓa raba bayanan abokin ciniki da wanda ba shi da izini, kada ku taɓa manna bayanan abokin ciniki a kayan AI da kamfaninku bai amince da su ba, kuma kada ku taɓa rubuta cikakkiyar lambar kati ko kalmar sirri a bayanai. Bin dokokin sirri wani ɓangare ne na aikin."
          ],
          steps: ["Ku rubuta matsalar a layi ɗaya.", "Ku rubuta abin da kuka duba da abin da kuka yi.", "Ku rubuta duk abin da aka yi alkawari da ranar mataki na gaba.", "Ku duba duk taƙaitawar AI don bayanan da suka ɓace ko ba daidai ba.", "Kada ku saka cikakkiyar lambar kati ko kalmar sirri."],
          words: [["Bayanan tikiti (ticket notes)", "gajeren rubutaccen bayani na mu'amala da abokin ciniki."], ["Sirrin bayanai (data privacy)", "kiyaye bayanan mutane na sirri lafiya, da amfani da su kamar yadda aka yarda kaɗai."]],
          slides: [
            { title: "Bayanan tikiti masu kyau", bullets: ["Matsalar, abin da kuka duba, abin da kuka yi", "Abin da aka yi alkawari da ranar mataki na gaba", "Gajeru kuma na gaskiya"] },
            { title: "Taƙaitawar AI", bullets: ["Tana rage lokaci", "Ku duba alkawuran da suka ɓace ko kuskure"] },
            { title: "Ku kare bayanan abokan ciniki", bullets: ["Asusun da kuke taimakawa kaɗai", "Babu bayanan abokin ciniki a kayan AI da ba a amince da su ba", "Babu lambobin kati ko kalmomin sirri a bayanai"] }
          ],
          tryIt: "Ku rubuta bayanan tikiti na wasannin kwaikwayo biyu da kuka yi a Babi na 1. Sannan ku nemi AI ya taƙaita ɗaya daga cikinsu, ku kwatanta taƙaitawarsa da bayananku.",
          youCanNow: "rubuta bayanan tikiti masu sarari da kare bayanan abokan ciniki.",
          quickCheck: [
            { objective: "O5", q: "Me yasa bayanan tikiti ke da muhimmanci?", options: ["Suna barin ma'aikaci na gaba ya ci gaba da matsalar ba tare da sake tambayar abokin ciniki ba", "Na lauyoyin kamfani ne kaɗai", "Suna maye gurbin magana da abokin ciniki", "Wuri ne na rubuta ra'ayinku game da abokin ciniki"], answer: 0, why: "Bayanai masu sarari suna barin kowa ya ci gaba ba tare da sa abokin ciniki ya maimaita komai ba." },
            { objective: "O5", q: "Abokin ciniki ya karanta muku lambar katinsa bisa kuskure. Me za ku rubuta a bayanai?", options: ["Cikakkiyar lambar katin don a ajiye ta", "Lambar katin da kalmar sirrinsa", "Babu komai game da kiran", "Matsalar da matakan da aka ɗauka, ba tare da lambar kati ba"], answer: 3, why: "Bayanai suna rubuta matsala da matakai, ba cikakkiyar lambar kati ko kalmar sirri ba." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Samun aiki a hidimar abokan ciniki",
          minutes: 5,
          goal: "Nuna ƙwarewarku ta hidimar abokan ciniki a CV da a hira.",
          text: [
            "Masu ɗaukar aiki suna son amintaccen mutum, mai natsuwa, mai magana a sarari, mai ƙwarewar kwamfuta ta farko, kuma mai son koyo. Gogewa daga shago, sayar da abinci, kula da mutane, coci, soja ko aikin cikin gidan yari duk ana ƙirga ta.",
            "Ku rubuta layukan CV da ke nuna sakamako: \"Na taimaki abokan ciniki 60+ a rana a layin kicin mai cunkoso, da natsuwa da fara'a.\" Ku nemi AI ya taimaka ya mayar da gogewarku zuwa layukan hidimar abokan ciniki, kuma ku tabbata gaskiya ne.",
            "Ku yi tsammanin tambayoyin wasan kwaikwayo: \"Abokin ciniki yana ihu game da odar da ta makara. Me za ku yi?\" Ku amsa da matakanku (HEAT da matakai biyar na kula da abokin ciniki). Ku shirya labarin STAR game da lokacin da kuka natsar da wani ko kuka magance matsala. Wasu masu ɗaukar aiki suna ba da gwajin bugun rubutu (typing) ko na kwamfuta, don haka ku yi atisayen bugun rubutu da gwaji kyauta a intanet."
          ],
          steps: ["Ku jera gogewar da kuka taimaki mutane.", "Ku nemi AI ya mayar da ita layukan CV na gaskiya masu lambobi.", "Ku shirya labarin STAR game da natsar da wani ko magance matsala.", "Ku yi atisayen amsar wasan kwaikwayo da HEAT.", "Ku yi atisayen bugun rubutu da gwaji kyauta a intanet."],
          words: [["Tambayar wasan kwaikwayo (role-play question)", "tambayar hira inda kuke nuna yadda za ku kula da wani yanayi."], ["Gwajin bugun rubutu (typing test)", "gwajin saurinku da daidaitonku wajen bugun rubutu."]],
          slides: [
            { title: "Abin da masu ɗaukar aiki ke so", bullets: ["Amintacce kuma mai natsuwa", "Magana a sarari", "Ƙwarewar kwamfuta ta farko; son koyo"] },
            { title: "Layukan CV", bullets: ["Ku nuna sakamako da lambobi", "Duk gogewar taimakon mutane ana ƙirga ta", "Ku tabbata gaskiya ne"] },
            { title: "Shirin hira", bullets: ["Amsoshin wasan kwaikwayo da HEAT", "Labarin STAR game da natsar da wani", "Atisayen bugun rubutu"] }
          ],
          tryIt: "Aikin ƙarshe: ku yi wasan kwaikwayo na abokan ciniki uku da AI (tambaya mai sauƙi, abokin ciniki mai fushi, matsalar da ba a magance ba a ƙoƙarin farko), ku rubuta bayanan tikiti ga kowanne, sannan ku rubuta layuka uku na CV da amsar STAR game da natsar da abokin ciniki mai fushi.",
          youCanNow: "kula da abokan ciniki da kayan AI kamar ma'aikacin taimako, da nuna waɗannan ƙwarewa don samun aiki.",
          quickCheck: [
            { objective: "O6", q: "Me harafin R a amsar STAR ke nufi?", options: ["Reason (dalili)", "Reply (amsa)", "Rating (maki)", "Result (sakamako)"], answer: 3, why: "STAR shi ne Situation (yanayi), Task (aiki), Action (mataki) da Result (sakamako)." },
            { objective: "O6", q: "Kun yi aiki a kicin na gidan yari kuna ciyar da mutane 200 a rana. Ta yaya za ku yi amfani da wannan a CV na hidimar abokan ciniki?", options: ["Ku bar shi domin ba a ƙirga shi", "Ku rubuta layi game da yi wa mutane 200 hidima a rana da sauri da ladabi", "Ku ce kawai kuna da aiki da yawa", "Ku bayyana shi a matsayin aikin manaja"], answer: 1, why: "Gogewa ta gaske ta yi wa mutane hidima ana ƙirga ta; ku bayyana ta da gaskiya tare da lamba." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kayan AI da samun aiki",
        questions: [
          { objective: "O4", q: "Amsar da AI ya shawarta tana ba da mayar da kuɗin da dokarku ba ta yarda da shi ba. Me za ku yi?", options: ["Ku aika duk da haka", "Ku nemi abokin ciniki ya yanke shawara", "Ku goge tikitin", "Kada ku aika; ku bi doka"], answer: 3, why: "Ma'aikata suna bin doka, ba hasashen AI ba." },
          { objective: "O5", q: "Bayanan tikiti masu kyau suna ɗauke da:", options: ["Matsalar, abin da kuka yi, abin da aka yi alkawari da mataki na gaba", "Cikakkiyar lambar katin abokin ciniki", "Ra'ayinku game da abokin ciniki", "Babu komai"], answer: 0, why: "Bayanai suna taimakon ma'aikaci na gaba." },
          { objective: "O5", q: "Taƙaitawar AI ta bar wani alkawari da kuka yi. Ya kamata ku:", options: ["Ku bar shi haka", "Ku goge dukkan bayanai", "Ku ƙara alkawarin a bayanai", "Ku ɗora wa AI laifi daga baya"], answer: 2, why: "Ku duba ku gyara taƙaitawar AI." },
          { objective: "O5", q: "Wanne ne kada a taɓa rubutawa a bayanan tikiti?", options: ["Ranar oda", "Ranar mataki na gaba", "Abin da kuka duba", "Cikakkiyar kalmar sirrin abokin ciniki"], answer: 3, why: "Kada a taɓa ajiye kalmomin sirri." },
          { objective: "O6", q: "A hira an tambaye ku yadda za ku kula da abokin ciniki mai ihu. Amsa mafi kyau:", options: ["\"Zan mayar masa da ihu.\"", "\"Zan katse wayar nan take.\"", "Ku bayyana HEAT da matakan da za ku ɗauka", "\"Ban sani ba.\""], answer: 2, why: "Nuna matakanku yana tabbatar da ƙwarewar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI a Ayyukan Hidimar Abokan Ciniki",
    questions: [
      { objective: "O1", q: "Wanne ne sunan aikin hidimar abokan ciniki?", options: ["Direban forklift", "Ma'aikacin taimako (support agent)", "Mai walda", "Matuƙin jirgin sama"], answer: 1, why: "Ma'aikatan taimako suna taimakon abokan ciniki." },
      { objective: "O1", q: "A kamfanoni da yawa a yau, tambayoyi masu sauƙi sau da yawa ana amsa su ta hanyar:", options: ["Chatbot", "Wasiƙa kaɗai", "Babu kowa", "Shugaban kamfani"], answer: 0, why: "Chatbot yana amsa tambayoyi masu sauƙi da aka saba yi." },
      { objective: "O1", q: "Tikiti (ticket) shi ne:", options: ["Takardar shiga sinima", "Tarar ajiye mota", "Rubutaccen bayani na matsalar abokin ciniki ɗaya da abin da aka yi", "Albashi"], answer: 2, why: "Tikiti suna bin diddigin kowace matsala." },
      { objective: "O4", q: "Wane ne ke yanke shawarar ƙarshe kan abin da za a faɗa wa abokin ciniki?", options: ["Ku, kuna bin doka", "AI", "Abokin ciniki", "Kowane abokin aiki"], answer: 0, why: "AI yana shawartawa; ma'aikata suna yanke shawara." },
      { objective: "O2", q: "Matakin farko na kula da abokin ciniki shi ne:", options: ["Rufewa", "Magancewa", "Tura shi wani wuri", "Gaisuwa da sunanku da ba da taimako"], answer: 3, why: "Gaisuwa mai daɗi tana fara shi da kyau." },
      { objective: "O2", q: "\"Wato odarku tana nuna an isar da ita amma ba ta iso ba\" misali ne na:", options: ["Rufewa", "Tabbatar da matsalar", "Miƙa gaba", "Tabbatar da ainihin mutum"], answer: 1, why: "Maimaita matsalar yana tabbatar da ita." },
      { objective: "O2", q: "Kafin ku bayyana bayanan asusu, ya kamata ku:", options: ["Bayyana su nan take", "Tabbatar da ainihin mutum ta tsarin kamfani", "Nemi cikakkiyar kalmar sirrinsa", "Nemi abokin aiki ya yi tsammani"], answer: 1, why: "Tabbatarwa tana kare asusun." },
      { objective: "O2", q: "Yaya ya kamata ku rufe mu'amala?", options: ["Ku katse wayar kwatsam", "Ku yi shiru", "Ku nemi tukwici", "Ku tabbata an magance ta, ku tambaya ko akwai wani abu, ku yi godiya"], answer: 3, why: "Rufewa mai kyau tana barin abokin ciniki ya gamsu." },
      { objective: "O3", q: "Abokan ciniki masu fushi yawanci suna fushi da:", options: ["Abin da ya faru, ba ku ba", "Ku da kanku", "Yanayin sararin sama", "Babu komai"], answer: 0, why: "Tuna wannan yana taimaka muku ku natsu." },
      { objective: "O3", q: "HEAT yana nufin:", options: ["Help, End, Ask, Transfer", "Hurry, Explain, Argue, Talk", "Hear, Empathize, Apologize, Take action", "Hold, Email, Answer, Thank"], answer: 2, why: "Waɗannan su ne matakan HEAT guda huɗu." },
      { objective: "O3", q: "Abokin ciniki ya fara zagi da barazana. Ya kamata ku:", options: ["Ku mayar masa da barazana", "Ku bayyana adireshinsa", "Ku ci gaba da jure zagi har abada", "Ku bi dokar kamfani, wadda za ta iya zama gargaɗi, gama mu'amalar ko kiran mai kula"], answer: 3, why: "Dokoki suna kare ma'aikata da abokan ciniki." },
      { objective: "O3", q: "Miƙa gaba (escalate) yana nufin:", options: ["Hawa matakalar lantarki", "Ɗaga muryarku", "Miƙa matsala ga mai kula ko ƙwararre", "Rufe matsalar"], answer: 2, why: "Miƙa gaba yana tura matsaloli masu wuya sama." },
      { objective: "O4", q: "Amsoshin da AI ya shawarta suna iya zama:", options: ["Koyaushe cikakku", "Ba daidai ba, tsofaffi ko ba su dace da abokin ciniki ba", "Haramun ne a karanta su", "A wasu yaruka kaɗai"], answer: 1, why: "Koyaushe ku duba su." },
      { objective: "O4", q: "Kafin ku aika amsar da AI ya shawarta, ku duba bayanai da:", options: ["Tushen ilimi ko doka", "Kafofin sada zumunta", "Tunaninku kaɗai", "Shafin wani kamfani mai gasa"], answer: 0, why: "Majiyoyin hukuma suna sa amsoshi su yi daidai." },
      { objective: "O5", q: "Wanne ne kada a taɓa sakawa a kayan AI da kamfaninku bai amince da shi ba?", options: ["Saƙon atisaye na ƙage", "Tambaya game da nahawu", "Bayanan abokin ciniki", "Gaisuwa ta gama-gari"], answer: 2, why: "Dole a kare bayanan abokan ciniki." },
      { objective: "O5", q: "Sirrin bayanai (data privacy) yana nufin:", options: ["Kiyaye bayanan sirri lafiya da amfani da su kamar yadda aka yarda kaɗai", "Raba bayanai da abokai", "Goge dukkan bayanai", "Saka bayanai a intanet"], answer: 0, why: "Babban nauyi ne na aikin." },
      { objective: "O6", q: "Wane layin CV ne ya fi ƙarfi don hidimar abokan ciniki?", options: ["\"Na yi abubuwa\"", "\"Na yi aiki wani lokaci\"", "\"Ni mutumin kirki ne\"", "\"Na taimaki abokan ciniki 60+ a rana da natsuwa da fara'a\""], answer: 3, why: "Yana nuna lambobi da ƙwarewar." },
      { objective: "O6", q: "Gogewa daga wane wuri ake ƙirga ta a hidimar abokan ciniki?", options: ["Cibiyoyin kira kaɗai", "Sayar da abinci, kula da mutane, coci ko aikin cikin gidan yari", "Jami'a kaɗai", "Babu"], answer: 1, why: "Taimakon mutane a ko'ina yana gina ƙwarewar." },
      { objective: "O6", q: "Labarin STAR game da natsar da wani yana nuna:", options: ["Tarihin albashinku", "Situation, Task, Action da Result (yanayi, aiki, mataki da sakamako)", "Fina-finan da kuka fi so", "Babu komai"], answer: 1, why: "STAR yana tabbatar da ƙwarewar da misali." },
      { objective: "O6", q: "Wasu masu ɗaukar aiki suna gwada wace ƙwarewa kafin su ɗauki mutum?", options: ["Wasan jefa abubuwa (juggling)", "Iyo", "Waƙa", "Sauri da daidaiton bugun rubutu"], answer: 3, why: "Ma'aikata suna bugun rubutu sosai; ku yi atisaye da gwajin bugun rubutu kyauta." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [1, 4, 7, 9, 11, 13, 14, 16, 18]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Matakan mu'amala",
        objective: "O2",
        notYet: "An tsallake matakai, kamar magancewa kafin sauraro ko gamawa ba tare da rufewa ba.",
        meets: "An yi amfani da gaisuwa, sauraro, tabbatarwa, magancewa da rufewa a dukkan mu'amaloli uku.",
        exceeds: "An kuma tabbatar da ainihin mutum inda ake buƙata, kuma an sa mataki na gaba mai sarari ga matsalar da ba a magance ba."
      },
      {
        name: "Natsar da abokin ciniki mai fushi",
        objective: "O3",
        notYet: "An yi gardama, an ɗora laifi ko an ce \"ka natsu\".",
        meets: "An yi amfani da Hear, Empathize, Apologize da Take action, kuma abokin ciniki ya natsu.",
        exceeds: "An kuma san lokacin miƙa gaba, kuma an bayyana mataki na gaba a sarari."
      },
      {
        name: "An duba AI",
        objective: "O4",
        notYet: "An aika shawarar AI da ba ta yi daidai da doka ba.",
        meets: "An duba kowace shawarar AI da tushen ilimi ko doka kafin amfani da ita.",
        exceeds: "Za a iya nuna kowane canji da aka yi a faɗi dalilinsa."
      },
      {
        name: "Bayanan tikiti",
        objective: "O5",
        notYet: "Bayanan ba su da matsalar, matakai, alkawari ko mataki na gaba, ko suna da bayanan sirri.",
        meets: "Kowane tikiti yana da matsalar, abin da aka yi, abin da aka yi alkawari da mataki na gaba, babu bayanan sirri.",
        exceeds: "Bayanan sun yi gajarta har wani ma'aikaci zai iya ci gaba ba tare da tambayar komai ba."
      },
      {
        name: "A shirye don samun aiki",
        objective: "O6",
        notYet: "Layukan ba su da sarari, ko amsar STAR ta rasa wani sashe.",
        meets: "Layukan CV uku masu sarari da amsar STAR mai dukkan sassa huɗu.",
        exceeds: "Layukan suna da lambobi, kuma amsar STAR ta ƙare da sakamako na gaske."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka nemi aikin hidimar abokan ciniki cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka sami hirar aikin hidimar abokan ciniki ko tayin aiki cikin kwanaki 90",
      "Masu koyo da suka ci aikin ƙarshe bisa ma'aunin rubric",
      "Masu koyo da suka fara wani kwas na sana'a na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Mataimakin AI kyauta kamar ChatGPT, Microsoft Copilot ko Google Gemini don yin kamar abokin ciniki",
      "Tallace-tallacen ayyukan hidimar abokan ciniki na gaske guda uku daga shafin neman aiki",
      "Takarda da alƙalami don bayanan tikiti da layukan CV",
      "Kusan minti 60 gaba ɗaya: darussa, wasannin kwaikwayo, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku yi wasannin kwaikwayo bibbiyu: mai koyo ɗaya ya yi kamar abokin ciniki, ɗaya kuma ma'aikaci, sannan su musanya; AI zai iya yin kamar abokin ciniki ga masu koyo da ke aiki su kaɗai.",
      "Ku yi amfani da abokan ciniki da asusun ƙage kaɗai; kada a taɓa yin atisaye da lambobin kati ko kalmomin sirri na gaske.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya.",
      "Ku taimaki masu koyo da suka yi zaman gidan yari su sami hanyoyin gaskiya na bayyana gogewar aiki daga sayar da abinci, kula da mutane ko ayyukan cikin gidan yari.",
      "Idan zai yiwu, ku gayyaci mai ɗaukar aiki na yankin ko mai ɗaukar ma'aikata na cibiyar kira ya kalli wasannin kwaikwayo na ƙarshe."
    ]
  }
};

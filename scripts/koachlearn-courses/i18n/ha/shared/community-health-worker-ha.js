"use strict";

// Koach Learn course, Hausa (ha) translation of shared/community-health-worker.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "community-health-worker-ha",
  lang: "ha",
  translationOf: "community-health-worker",
  category: "Workforce Development",
  name: "Tushen Aikin Ma'aikacin Lafiya na Al'umma",
  skills: "Bayanin aikin CHW da hanyar jiharku, Sauraro da amfani da kalmomi masu sauƙi, Tambaya game da buƙatu cikin girmamawa, Nemo da tabbatar da taimakon gida, Tura mutum zuwa taimako da bin diddigi, Kiyaye sirri da iyakoki",
  outcome: "yin jagorar taimakon al'ummarku da aka tabbatar da shi, da amfani da shi don shirya tura wani maƙwabci na ƙagaggu zuwa taimako cikin girmamawa, kamar yadda ma'aikacin lafiya na al'umma yake yi.",
  about: [
    "Ma'aikatan lafiya na al'umma (CHW, community health workers) mutane ne amintattu daga cikin al'umma da ke taimakon maƙwabtansu su sami kulawar lafiya da sauran taimako, kamar abinci, gidan zama, sufuri da inshorar lafiya. Ana kuma kiransu da sunaye kamar promotor ko promotora, ma'aikacin wayar da kai, jagoran takwarorinsu ko jagoran marasa lafiya.",
    "Ana ɗaukar CHW da yawa aiki domin suna da harshe, al'ada ko irin rayuwar mutanen da suke yi wa hidima, ciki har da mutanen da suka yi zaman gidan yari, tsofaffin sojoji da baƙin haure. Irin rayuwar da kuka yi tana da amfani.",
    "Wannan kwas ɗin yana shirya ku don horon CHW da aikin farko. Ba ya ba ku takardar shaida. Wasu jihohi suna ba CHW takardar shaida, wasu ba sa yi, don haka za ku koyi inda za ku duba ta jiharku. Za ku yi atisayen sauraro, tambaya game da buƙatu, nemo da tabbatar da taimakon gida, tura mutum zuwa taimako, da kiyaye sirri da iyakoki.",
    "Kowane darasi yana ɗaukar kusan minti biyar, kuma yana ƙarewa da aikin \"Gwada yanzu\" da ɗan gwaji mai tambayoyi biyu. A ƙarshe za ku yi jagorar taimakon al'ummarku, da shirin tura wani maƙwabci na ƙagaggu zuwa taimako."
  ],
  finalTask: "Ku yi jagorar taimakon al'ummarku mai shafi ɗaya, mai aƙalla wurare biyar na taimako a yankinku (abinci, gidan zama, kulawar lafiya, inshorar lafiya da ɗaya kuma), kowanne an tabbatar da shi a shafinsa na hukuma, da adireshi, lambar waya da yadda ake nema. Sannan ku rubuta shirin tura wani maƙwabci na ƙagaggu zuwa taimako (atisaye kawai): buƙatarsa da kalmominsa, wurin taimakon da kuka zaɓa da dalili, abin da za ku faɗa, yadda za ku taimake shi ya haɗu da su, da lokacin da za ku bi diddigi.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke son taimakon al'ummarsu kuma a biya su: masu neman aiki, masu dawowa gida daga gidan yari, tsofaffin sojoji, baƙin haure, masu aikin sa-kai na coci da ƙungiyoyin agaji, da matasa. Da yawa sun riga sun taimaki maƙwabta ba bisa ƙa'ida ba.",
    startingPoint: "Suna iya mu'amala da mutane da kyau kuma sun san yankinsu. Yawancinsu ba su da horon lafiya na hukuma, ba su san sunan aikin CHW ko ƙa'idodin takardar shaida ba, kuma ba su taɓa tabbatar da wuraren taimako a shafukan hukuma ba.",
    gap: "Asibitoci, kamfanonin inshorar lafiya, sassan lafiya na gwamnati da ƙungiyoyin agaji suna ɗaukar CHW aiki don haɗa mutane da kulawa da hidimomi. Masu koyo suna buƙatar sanin aikin, yadda ake sauraro da tambaya game da buƙatu cikin girmamawa, yadda ake nemo da tabbatar da wuraren taimako, yadda ake tura mutum da bin diddigi, da yadda ake kiyaye sirri da iyakoki.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 6 zuwa 7)",
      "Na'urori: waya ko kwamfutar ɗakin karatu; kowane aiki yana yiwuwa a takarda",
      "Takardar shaidar CHW ta bambanta daga jiha zuwa jiha; kwas ɗin yana nuna shafin jihar kuma ba ya faɗin awoyi ko kuɗi",
      "Babu shawarar jinya ko ta magani; tambayoyin lafiya suna zuwa ga ma'aikatan lafiya (likita, nas)",
      "Atisaye yana amfani da mutane na ƙagaggu; babu sunaye na gaske ko bayanan sirri"
    ],
    prerequisites: "Babu. Kwas ɗin \"Ilimin Lafiya: Fahimtar Kulawar Lafiyarku\" abokin taimako ne mai kyau."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Ta amfani da majiyoyin CHW na ƙasa da shafin hukuma na jiharku", action: "bayyana abin da ma'aikacin lafiya na al'umma yake yi da matakan fara aikin a jiharku", standard: "kuna ambaton aƙalla ayyukan CHW 3 da ko jiharku tana ba CHW takardar shaida" },
    { id: "O2", condition: "A hirar atisaye da wani maƙwabci na ƙagaggu", action: "amfani da sauraro sosai, kalmomi masu sauƙi da teach-back (sake bayani)", standard: "kuna maimaita abin da ya faɗa kuma kuna tabbatar ya fahimta, ba tare da kalmomin ƙwararru ba" },
    { id: "O3", condition: "Ta amfani da gajeren jerin buƙatun rayuwa", action: "tambayar maƙwabci na ƙagaggu game da buƙatunsa da izininsa da kuma girmamawa", standard: "kuna fara neman izini kuma kuna tambaya game da abinci, gidan zama, sufuri, kuɗin wuta da ruwa, da tsaro" },
    { id: "O4", condition: "Idan aka ba ku wata buƙata kamar abinci ko asibiti", action: "nemo wurin taimako a yankinku da tabbatar da shi a shafinsa na hukuma", standard: "da adireshi, lambar waya, lokutan aiki da yadda ake nema, an tabbatar a shafin hukuma" },
    { id: "O5", condition: "Idan aka ba ku yanayin tura mutum zuwa taimako", action: "shirya tura mutum da bin diddigi yayin da kuke kiyaye sirri da iyakoki", standard: "da ranar bin diddigi, izinin raba bayani, da matakin da ya dace a lokacin gaggawa" }
  ],
  chapters: [
    {
      name: "Babi na 1: Aikin CHW da haɗuwa da mutane",
      lessons: [
        {
          title: "Abin da ma'aikatan lafiya na al'umma suke yi da yadda ake farawa",
          objectives: ["O1"],
          minutes: 5,
          goal: "Bayyana aikin CHW kuma ku nemo ƙa'idodin jiharku game da CHW.",
          text: [
            "Ƙungiyar Lafiyar Jama'a ta Amurka (APHA, American Public Health Association) ta ce ma'aikacin lafiya na al'umma ma'aikacin lafiyar jama'a ne na sahun gaba, wanda al'umma ta amince da shi, ko kuma ya san al'ummar sosai. CHW suna haɗa mutane da hidimomin lafiya da na rayuwa, kuma suna taimakawa kulawa ta dace da al'adar mutane.",
            "Ofishin Ƙididdigar Ma'aikata na Amurka (BLS, Bureau of Labor Statistics) ya ce CHW suna yin wayar da kai kamar ziyarar gida, suna taimakawa wajen tsara kulawa, suna haɗa mutane da sufuri, gidan zama da taimakon abinci, kuma suna iya yin gwaje-gwajen lafiya masu sauƙi. Majalisar National C3 Council ta lissafa ayyukan CHW guda goma, ciki har da wayar da kai, koyar da lafiya, tsara kulawa da jagoranci cikin tsarin lafiya, kare haƙƙin mutane, da horarwa da tallafi.",
            "Takardar kammala sakandare (high school diploma) ita ce mafi ƙaranci yawanci, tare da horo a wurin aiki. Wasu jihohi suna buƙatar takardar shaida, wadda za ta iya haɗawa da shirin horo da aka amince da shi. Ku duba sashen lafiya na jiharku, hukumar nas, ko sashen hidimomin jama'a.",
            "Wannan kwas ɗin yana shirya ku. Ba ya ba ku takardar shaida. Masu ɗaukar aiki sun haɗa da asibitocin al'umma, manyan asibitoci, sassan lafiya na gwamnati, kamfanonin inshorar lafiya da ƙungiyoyin agaji."
          ],
          steps: ["Ku nemi sunan jiharku tare da \"community health worker certification\" a intanet.", "Ku buɗe sakamakon da ya fito daga shafin gwamnatin jiharku.", "Ku rubuta ko jiharku tana ba CHW takardar shaida da abin da take buƙata.", "Ku duba tallace-tallacen aikin CHW guda biyu kusa da ku, ku jera ayyukan."],
          words: [["Ma'aikacin lafiya na al'umma (CHW)", "ɗan al'umma amintacce da ke taimakon mutane su sami kulawar lafiya da sauran hidimomi."], ["Promotor ko promotora", "sanannen suna a harshen Sifaniyanci na ma'aikacin lafiya na al'umma."], ["Wayar da kai (outreach)", "zuwa inda mutane suke, kamar gidaje, taruka ko coci, don ba da bayani da taimako."], ["Takardar shaida (certification)", "rubutun hukuma da ke nuna kun cika ƙa'idodin horo da jarabawa na jiha ko wata ƙungiya."]],
          slides: [
            { title: "CHW shi ne...", bullets: ["Ɗan al'umma amintacce", "Mai haɗa mutane da kulawar lafiya da hidimomi", "Ana kuma kiransa promotor, ma'aikacin wayar da kai, jagora"] },
            { title: "Abin da CHW suke yi", bullets: ["Wayar da kai da ziyarar gida", "Koyar da lafiya da kalmomi masu sauƙi", "Haɗa mutane da abinci, gidan zama, sufuri da kulawa", "Kare haƙƙin mutane da tallafi"] },
            { title: "Yadda ake farawa", bullets: ["Yawanci takardar sakandare tare da horo a wurin aiki", "Wasu jihohi suna ba CHW takardar shaida", "Ku duba shafin sashen lafiya na jiharku"] },
            { title: "Wannan kwas ɗin yana shirya ku", bullets: ["Ba ya ba ku takardar shaida", "Masu ɗaukar aiki: asibitoci, inshorar lafiya, ƙungiyoyin agaji"] }
          ],
          sources: [
            { name: "APHA: Community Health Workers Section", url: "https://www.apha.org/apha-communities/member-sections/community-health-workers" },
            { name: "US Bureau of Labor Statistics: Community Health Workers", url: "https://www.bls.gov/ooh/community-and-social-service/community-health-workers.htm" },
            { name: "National C3 Council: CHW Roles and Competencies", url: "https://www.c3council.org/roles-competencies" }
          ],
          tryIt: "Ku gano ko jiharku tana ba ma'aikatan lafiya na al'umma takardar shaida, ta amfani da shafin hukuma na jiharku. Sannan ku nemo tallar aikin CHW ɗaya kusa da ku. A takarda, ku rubuta ƙa'idar jiharku, ayyuka uku daga tallar aikin, da hanya ɗaya da irin rayuwar da kuka yi ta dace da aikin.",
          youCanNow: "bayyana abin da ma'aikacin lafiya na al'umma yake yi, da nemo ƙa'idodin jiharku a shafin hukuma.",
          quickCheck: [
            { objective: "O1", q: "Wanne ne babban ɓangare na aikin CHW?", options: ["Rubuta takardar magani", "Yin tiyata", "Gano irin cuta", "Haɗa mutane da kulawar lafiya da hidimomi"], answer: 3, why: "CHW suna haɗa mutane da kulawa da hidimomi; likitoci da nas ne ke gano cuta da rubuta magani." },
            { objective: "O1", q: "Shin dukkan jihohi suna buƙatar takardar shaidar CHW?", options: ["Eh, iri ɗaya ce ko'ina", "A'a; wasu jihohi ne kawai, don haka ku duba shafin jiharku", "Sai ga likitoci kawai", "Sai a lokacin bazara kawai"], answer: 1, why: "BLS ya ce wasu jihohi suna buƙatar takardar shaida; ƙa'idoji sun bambanta daga jiha zuwa jiha." }
          ]
        },
        {
          title: "Sauraro da magana mai sauƙi",
          objectives: ["O2"],
          minutes: 5,
          goal: "Yi amfani da sauraro sosai, kalmomi masu sauƙi da teach-back a hirar atisaye.",
          text: [
            "Mutane suna faɗin abubuwa da yawa idan sun ji ana sauraron su. Sauraro sosai (active listening) yana nufin ku ba da cikakkiyar hankalinku, ku bar mutumin ya gama magana, sannan ku maimaita abin da kuka ji: \"Wato zuwa asibiti yana da wuya domin bas ba ta zuwa da sassafe. Na fahimta daidai?\"",
            "Ku yi amfani da kalmomi masu sauƙi. Ku ce \"sukarin jini\" maimakon \"glucose\", da \"takardar da ke nuna inda kuke zaune\" maimakon \"shaidar wurin zama\". Ku yi amfani da gajerun jimloli da ra'ayi ɗaya a lokaci ɗaya. Ku ba da tafinta idan mutum ya fi son wani harshe.",
            "Teach-back (sake bayani) yana tabbatar cewa kun yi bayani a sarari. Ku nemi mutumin ya faɗi shirin da kalmominsa: \"Don in tabbata na yi bayani da kyau, za ka iya faɗa mini abin da za ka kawo wurin rabon abinci?\" Idan bai iya ba, abin gyarawa shi ne bayaninku, ba ƙwaƙwalwarsa ba.",
            "Girmamawa tana nufin babu yanke hukunci. Ku tambayi abin da yake da muhimmanci ga mutumin da abin da ya riga ya gwada. Shi ne masani kan rayuwarsa."
          ],
          steps: ["Ku ba da cikakkiyar hankali kuma ku bar mutumin ya gama.", "Ku maimaita abin da kuka ji kuma ku tambaya ko kun fahimta daidai.", "Ku bayyana mataki na gaba da kalmomi masu sauƙi, ra'ayi ɗaya a lokaci ɗaya.", "Ku yi amfani da teach-back: ku nemi ya faɗi shirin da kalmominsa."],
          words: [["Sauraro sosai (active listening)", "sauraro da cikakkiyar hankali da maimaita abin da kuka ji."], ["Kalmomi masu sauƙi (plain language)", "gajerun kalmomi da jimloli na yau da kullum da ke da sauƙin fahimta."], ["Teach-back (sake bayani)", "neman mutum ya bayyana shirin da kalmominsa don tabbatar kun yi bayani a sarari."], ["Kalmomin ƙwararru (jargon)", "kalmomi na musamman da wani rukuni ke amfani da su waɗanda wasu ba za su fahimta ba."]],
          slides: [
            { title: "Sauraro sosai", bullets: ["Cikakkiyar hankali, ku bar su su gama", "Ku maimaita abin da kuka ji", "\"Na fahimta daidai?\""] },
            { title: "Kalmomi masu sauƙi", bullets: ["\"Sukarin jini\", ba \"glucose\" ba", "Gajerun jimloli, ra'ayi ɗaya a lokaci ɗaya", "Ku ba da tafinta"] },
            { title: "Teach-back (sake bayani)", bullets: ["Ku nemi su faɗi shirin ta hanyarsu", "Idan bai fito a sarari ba, ku gyara bayaninku", "Yana gwada ku ne, ba su ba"] }
          ],
          tryIt: "Ku yi wasan kwaikwayo da aboki ko ɗan iyali, ko ku rubuta a takarda. Maƙwabcinku na ƙagaggu ya ce: \"Ina ta rasa ganawata a asibiti domin ina zuwa aiki da sassafe kuma bas tana jinkiri.\" Ku rubuta jimlar maimaitawa, mataki na gaba da kalmomi masu sauƙi, da tambayar teach-back.",
          youCanNow: "saurara sosai, bayyana abu da kalmomi masu sauƙi, da tabbatar da fahimta ta teach-back.",
          quickCheck: [
            { objective: "O2", q: "Wace ce tambayar teach-back?", options: ["\"Ka fahimta?\"", "\"Akwai tambaya? Babu? To.\"", "\"Za ka iya faɗa mini da kalmominka abin da za ka kawo?\"", "\"Ka gane, ko?\""], answer: 2, why: "Teach-back yana neman mutumin ya faɗi shirin da kalmominsa." },
            { objective: "O2", q: "Wanne ne kalma mai sauƙi?", options: ["\"Sukarin jini\"", "\"Glycemic index\"", "\"Hyperglycemia\"", "\"Glucose tolerance\""], answer: 0, why: "Kalmomi gajeru na yau da kullum su ne mafi sauƙin fahimta." }
          ]
        },
        {
          title: "Tambaya game da buƙatu cikin girmamawa",
          objectives: ["O3"],
          minutes: 5,
          goal: "Tambayi maƙwabci na ƙagaggu game da buƙatunsa da izininsa, ta amfani da gajeren jeri.",
          text: [
            "Lafiya ta dogara ga abubuwa fiye da ziyarar likita. Abinci, wurin zama mai aminci, kuɗin wuta da ruwa, sufuri da tsaro duk suna shafar lafiya. Ana yawan kiran waɗannan buƙatun rayuwa (social needs).",
            "Asibitoci da shirye-shirye da yawa suna amfani da gajeren fom na tambayoyi (screening). Mai ɗaukar ku aiki zai ba ku nasu. Abubuwan da aka saba tambaya su ne: abinci, gidan zama, kuɗin wuta da ruwa, sufuri da tsaron kai.",
            "Koyaushe ku fara neman izini kuma ku bayyana dalilin tambayarku: \"Ina yi wa kowa 'yan tambayoyi game da abubuwa kamar abinci da gidan zama, don in iya ba da taimakon da zai dace. Kuna iya tsallake kowace tambaya.\" Ku bar mutumin ya zaɓi abin da zai faɗa.",
            "Ku rubuta abin da ake buƙata kaɗai, a fom ɗin shirin, ba a wayarku ba. Idan wani ya ce ba shi da aminci a gida, ko yana magana game da cutar da kansa, ku bi matakan tsaro na shirinku nan take (duba Darasi na 6)."
          ],
          steps: ["Ku nemi izini kuma ku faɗi dalilin tambayarku.", "Ku faɗa cewa za su iya tsallake kowace tambaya.", "Ku tambaya game da abinci, gidan zama, kuɗin wuta da ruwa, sufuri da tsaro.", "Ku tambaya wace buƙata ce ta fi muhimmanci gare su yanzu.", "Ku rubuta abin da ake buƙata kaɗai, a fom ɗin shirin."],
          words: [["Buƙatun rayuwa (social needs)", "buƙatun yau da kullum kamar abinci, gidan zama da sufuri da ke shafar lafiya."], ["Tambayoyin bincike (screening)", "gajerun tambayoyi don gano irin taimakon da mutum zai iya buƙata."], ["Izini (consent)", "yardar da mutum ya bayar bayan ya fahimci abin da kuke tambaya."]],
          slides: [
            { title: "Lafiya ta fi asibiti", bullets: ["Abinci da gidan zama", "Kuɗin wuta da ruwa, da sufuri", "Tsaro"] },
            { title: "Ku fara neman izini", bullets: ["Ku faɗi dalilin tambayarku", "Za su iya tsallake kowace tambaya", "Su ne ke zaɓar abin da za su faɗa"] },
            { title: "Ku fara da abin da ya fi muhimmanci", bullets: ["\"Wanne a cikin waɗannan ya fi muhimmanci yanzu?\"", "Ku rubuta abin da ake buƙata kaɗai", "Ku yi amfani da fom ɗin shirin, ba wayarku ba"] }
          ],
          tryIt: "Ku rubuta gajeren rubutun tambayoyi (atisaye kawai): jimlar neman izininku, tambaya ɗaya mai sauƙi kowanne game da abinci, gidan zama, kuɗin wuta da ruwa, sufuri da tsaro, da tambayar ƙarshe game da abin da ya fi muhimmanci. Ku karanta shi da babbar murya don ku tabbata yana da daɗi kuma a sarari.",
          youCanNow: "tambayar mutum game da buƙatunsa da izininsa da girmamawa, ta amfani da gajeren jeri.",
          quickCheck: [
            { objective: "O3", q: "Me za ku yi kafin ku tambayi mutum game da buƙatunsa?", options: ["Ku fara da tambaya mafi wuya", "Ku nemi izini kuma ku faɗi dalilin tambayarku", "Ku nemi lambar Social Security ɗinsa", "Ku rubuta amsoshinsa a wayarku"], answer: 1, why: "Izini da dalili a sarari suna gina amincewa kafin tambayoyin." },
            { objective: "O3", q: "Wanne ne buƙatar rayuwa?", options: ["Shirin talabijin da aka fi so", "Sunan kamfanin takalma", "Zuwa asibiti idan bas ba ta aiki", "Launin da aka fi so"], answer: 2, why: "Sufuri buƙatar rayuwa ce da ke shafar lafiya." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Aikin CHW da haɗuwa da mutane",
        questions: [
          { objective: "O1", q: "Wanne ne wani suna na ma'aikacin lafiya na al'umma?", options: ["Promotor ko promotora", "Likitan tiyata", "Mai sayar da magani (pharmacist)", "Alƙali"], answer: 0, why: "Promotor ko promotora sanannen suna ne na CHW, musamman a al'ummomin masu magana da Sifaniyanci." },
          { objective: "O1", q: "A ina za ku duba ko jiharku tana ba CHW takardar shaida?", options: ["Rukunin kafofin sada zumunta", "Hasashen aboki", "Shafin sashen lafiya ko hukumar jiharku", "Tallar intanet"], answer: 2, why: "Shafin hukuma na kowace jiha yana bayyana ƙa'idodinta." },
          { objective: "O2", q: "Mene ne sauraro sosai?", options: ["Yin magana fiye da ɗayan mutumin", "Shirya amsarku yayin da yake magana", "Ba da cikakkiyar hankali da maimaita abin da kuka ji", "Kallon wayarku yayin sauraro"], answer: 2, why: "Sauraro sosai yana nufin cikakkiyar hankali da maimaita abin da kuka ji." },
          { objective: "O2", q: "Maƙwabci bai iya sake bayyana muku shirin ba. Me hakan yake nufi?", options: ["Ba ya ƙoƙari", "Bayaninku yana buƙatar ya fi fitowa a sarari", "Bai kamata ya sami taimako ba", "Ba komai; ku ci gaba"], answer: 1, why: "Teach-back yana gwada bayaninku; ku sake bayani da kalmomi mafi sauƙi." },
          { objective: "O3", q: "Wani ba ya son amsa tambaya game da gidan zama. Za ku:", options: ["Tilasta masa ya amsa", "Rubuta hasashe", "Faɗa masa ba zai sami taimako ba", "Girmama hakan ku ci gaba"], answer: 3, why: "Mutane za su iya tsallake kowace tambaya; izini na son rai ne." }
        ]
      }
    },
    {
      name: "Babi na 2: Haɗa mutane da taimako",
      lessons: [
        {
          title: "Nemo da tabbatar da wuraren taimako a yankinku",
          objectives: ["O4"],
          minutes: 6,
          goal: "Nemo wurin taimako a yankinku don wata buƙata kuma ku tabbatar da shi a shafinsa na hukuma.",
          text: [
            "Jerin wuraren taimako na CHW yana da kyau ne kawai gwargwadon lokacin da aka duba shi na ƙarshe. Shirye-shirye suna ƙaura, suna canja lokutan aiki, kuma kuɗinsu yana ƙarewa. Koyaushe ku tabbatar da wurin taimako a shafinsa na hukuma ko ta waya kafin ku tura wani zuwa wurin.",
            "Wurare masu kyau na farawa: ku kira 211, hidima kyauta mai sirri da ke haɗa mutane da taimako a yankinsu. Shafin tallafi na USA.gov yana taimakon mutane su nemo shirye-shiryen gwamnati na abinci, gidan zama, kulawar lafiya da kuɗin wuta da ruwa. Shafin Find a Health Center na HRSA (hukumar lafiya ta Amurka) yana nuna cibiyoyin lafiya na al'umma. HealthCare.gov yana bayyana inshorar lafiya da yadda ake nema.",
            "Ga kowane wurin taimako, ku rubuta: sunan, abin da yake bayarwa, waɗanda za su iya amfani da shi, adireshi, lambar waya, lokutan aiki, yadda ake nema, abin da za a kawo, harsunan da suke magana, da ranar da kuka duba.",
            "Idan shafin intanet ba na hukuma ba ne, ku nemo shafin hukuma kafin ku amince da shi. Shafuka na bogi da yawa suna karɓar kuɗi kan fom da ke kyauta."
          ],
          steps: ["Ku faɗi buƙatar, misali abinci ko asibiti.", "Ku nema a 211, USA.gov, Find a Health Center na HRSA, ko shafin ofishin da kansa.", "Ku buɗe shafin hukuma ku tabbatar da adireshi, lambar waya, lokutan aiki da yadda ake nema.", "Ku rubuta shi tare da ranar da kuka duba."],
          words: [["Wurin taimako (resource)", "shiri ko hidima da ke taimakawa da wata buƙata, kamar wurin rabon abinci ko asibiti."], ["211", "hidimar waya kyauta mai sirri da ke haɗa mutane da taimako a yankinsu."], ["Cibiyar lafiya ta al'umma", "asibiti da ke yi wa mutane hidima ko suna da inshora ko ba su da shi."], ["Cancanta (eligibility)", "ƙa'idodi game da waɗanda za su iya amfani da shiri."]],
          slides: [
            { title: "Ku tabbatar kafin ku tura", bullets: ["Shirye-shirye suna ƙaura kuma suna canja lokutan aiki", "Ku duba shafin hukuma ko ku kira", "Ku rubuta ranar da kuka duba"] },
            { title: "Inda za ku fara", bullets: ["Ku kira 211", "Shafin tallafi na USA.gov", "Find a Health Center na HRSA", "HealthCare.gov don inshorar lafiya"] },
            { title: "Ku rubuta", bullets: ["Suna, abin da yake bayarwa, waɗanda za su iya amfani", "Adireshi, lambar waya, lokutan aiki", "Yadda ake nema, abin da za a kawo, harsuna"] },
            { title: "Ku kula da shafuka na bogi", bullets: ["Ku fara nemo shafin hukuma", "Fom da yawa kyauta ne; kada ku biya baƙi"] }
          ],
          sources: [
            { name: "211: Find your local 211", url: "https://www.211.org/" },
            { name: "USA.gov: Government benefits", url: "https://www.usa.gov/benefits" },
            { name: "HRSA: Find a Health Center", url: "https://findahealthcenter.hrsa.gov/" },
            { name: "HealthCare.gov", url: "https://www.healthcare.gov/" }
          ],
          tryIt: "Ku zaɓi buƙatu biyu: abinci da asibiti mai araha. Ku nemo wurin taimako ɗaya na gaske kowanne kusa da ku, ku tabbatar da shi a shafinsa na hukuma, ku rubuta suna, adireshi, lambar waya, lokutan aiki, yadda ake nema da ranar yau.",
          youCanNow: "nemo wurin taimako a yankinku da tabbatar da shi a shafinsa na hukuma kafin ku raba shi.",
          quickCheck: [
            { objective: "O4", q: "Kafin ku tura wani zuwa wurin rabon abinci, me za ku yi?", options: ["Ku tabbatar da lokutan aiki da adireshi a shafinsa na hukuma ko ta waya", "Ku amince da jerin shekaru uku da suka wuce", "Ku yi hasashen lokutan aiki", "Ku tura shi ba tare da dubawa ba"], answer: 0, why: "Wuraren taimako suna canjawa, don haka ku fara duba shafin hukuma ko ku kira." },
            { objective: "O4", q: "Wace hidima ce ke haɗa mutane da taimako a yankinsu ta waya?", options: ["411", "211", "311 a birni ɗaya kawai", "Wata lambar waya daga talla"], answer: 1, why: "211 hidima ce kyauta mai sirri da ke haɗa mutane da taimako a yankinsu." }
          ]
        },
        {
          title: "Tura mutum zuwa taimako da bin diddigi",
          objectives: ["O5", "O4"],
          minutes: 5,
          goal: "Shirya tura mutum ta hanyar \"warm referral\" da izininsa da ranar bin diddigi.",
          text: [
            "Tura mutum (referral) shi ne haɗa mutum da wata hidima. \"Warm referral\" (tura mutum da hannu) yana nufin ku taimaka wajen yin haɗin, misali ku kira asibitin tare, maimakon ba da lambar waya kawai.",
            "Ku tambaya kafin ku raba kowane bayani game da mutumin: \"Ba laifi in faɗa wa asibitin cewa kuna buƙatar ganawa da yamma?\" Ku raba abin da ake buƙata kaɗai, kuma ku bi fom ɗin izini na shirinku.",
            "Ku taimaka cire cikas. Shin mutumin yana da abin hawa, mai kula da yara, takardun da yake buƙata, waya mai aiki? Ku rubuta abin da zai kawo da lokacin da zai je.",
            "Ku bi diddigi. Ku sa rana don ku tambaye shi: \"Zan kira ka ranar Juma'a in ji yadda abin ya kasance.\" Idan hidimar ba ta yi aiki ba, ku nemo wata. Ku rubuta sakamakon a rikodin shirin."
          ],
          steps: ["Ku amince da mutumin kan buƙatar da hidimar.", "Ku sami izini kafin ku raba kowane bayani.", "Ku yi haɗi da hannu, kamar kira tare.", "Ku shirya don cikas: abin hawa, kula da yara, takardu.", "Ku sa ranar bin diddigi ku cika ta, kuma ku rubuta sakamakon."],
          words: [["Tura mutum (referral)", "haɗa mutum da hidimar da za ta taimake shi."], ["Warm referral (tura mutum da hannu)", "taimakon mutum ya haɗu kai tsaye, kamar kira tare, ba ba da lamba kawai ba."], ["Cikas (barrier)", "abin da ke sa samun taimako ya yi wuya, kamar rashin abin hawa ko rashin mai kula da yara."], ["Bin diddigi (follow-up)", "sake tambaya daga baya don ganin ko taimakon ya yi aiki."]],
          slides: [
            { title: "Warm referral (tura mutum da hannu)", bullets: ["Ku taimaka wajen yin haɗin", "Ku kira tare idan za ku iya", "Ba lambar waya kawai ba"] },
            { title: "Izini da farko", bullets: ["Ku tambaya kafin ku raba komai", "Ku raba abin da ake buƙata kaɗai", "Ku yi amfani da fom ɗin izini na shirin"] },
            { title: "Ku cire cikas", bullets: ["Abin hawa da kula da yara", "Takardun da za a kawo", "Waya mai aiki"] },
            { title: "Ku bi diddigi", bullets: ["Ku sa rana", "Ya yi aiki? Idan bai yi ba, ku gwada wani", "Ku rubuta sakamakon"] }
          ],
          tryIt: "Atisaye kawai: maƙwabciyarku ta ƙagaggu, Ms. Carter, tana buƙatar abinci don 'ya'yanta biyu kuma ba ta da mota. Ta amfani da wurin taimakon abinci da kuka tabbatar a Darasi na 4, ku rubuta shirin warm referral: abin da za ku faɗa, tambayar neman izini, cikas ɗaya da yadda za ku taimaka da shi, da ranar bin diddigi.",
          youCanNow: "shirya warm referral da izini, taimakawa da cikas, da sa ranar bin diddigi.",
          quickCheck: [
            { objective: "O5", q: "Me ke sa tura mutum ya zama \"warm\"?", options: ["Ba da lambar waya kawai", "Faɗa masa ya nema a intanet", "Taimakonsa ya haɗu, kamar kira tare", "Aika masa takardar talla"], answer: 2, why: "Warm referral yana taimakon mutum ya haɗu kai tsaye." },
            { objective: "O5", q: "Kuna son faɗa wa asibiti halin da maƙwabci yake ciki. Da farko za ku:", options: ["Raba duk abin da kuka sani", "Nemi izinin maƙwabcin", "Saka shi a rukunin hira", "Faɗa wa iyalin maƙwabcin"], answer: 1, why: "Izini yana zuwa kafin raba kowane bayani." }
          ]
        },
        {
          title: "Sirri, iyakoki, matakan gaggawa da jagorar taimakonku",
          objectives: ["O5", "O4"],
          minutes: 6,
          goal: "Kiyaye sirri da iyakoki, bi matakan gaggawa, kuma ku gina jagorar taimakonku.",
          text: [
            "Mutane suna amincewa da ku da abubuwan sirri. Bayanan lafiya suna da kariya ta dokar gwamnatin tarayya mai suna HIPAA idan kuna aiki a asibiti ko kamfanin inshorar lafiya, kuma kowane shiri mai kyau yana kiyaye bayanan mutane a sirri. Kada ku yi magana game da mutanen da kuke yi wa hidima da abokai, kada ku saka su a intanet, kuma kada ku ajiye rubutu a wayarku.",
            "Iyakoki suna sa aikin ya zama lafiya. Ku jagora ne, ba likita, lauya ko banki ba. Kada ku ba da shawarar lafiya ko ta shari'a, kada ku ba da rancen kuɗi, kuma kada ku yi alƙawarin abin da ba za ku iya cikawa ba. Tambayoyin lafiya suna zuwa ga ma'aikatan lafiya.",
            "Ku san matakan gaggawa. Idan wani yana cikin haɗari yanzu, ku kira 911. Idan wani yana magana game da kashe kansa ko yana cikin matsalar damuwa mai tsanani, zai iya kira ko tura tes zuwa 988, Suicide and Crisis Lifeline (layin taimakon gaggawa), ko ya yi hira a intanet. Ku faɗa wa mai kula da ku nan take kuma ku bi shirin tsaro na shirinku.",
            "Ku kula da kanku ma. Taimakon mutanen da rayuwarsu ke da wuya aiki ne mai nauyi. Ku yi magana da mai kula da ku, ku huta, kuma ku yi amfani da taimakon da kuke da shi. Yanzu kun shirya gina jagorar taimakonku da shirin tura mutum."
          ],
          steps: ["Ku kiyaye bayanai a sirri: babu magana, babu saka a intanet, babu rubutu a wayarku.", "Ku tsaya a matsayinku: babu shawarar lafiya ko ta shari'a, babu ba da rancen kuɗi.", "Gaggawa: 911 don haɗari yanzu; 988 don tunanin kashe kai ko matsalar damuwa; ku faɗa wa mai kula da ku.", "Ku gina jagorar taimakonku mai aƙalla wurare biyar da aka tabbatar, da shirin tura mutum."],
          words: [["HIPAA", "dokar gwamnatin tarayya da ke kare sirrin bayanan lafiya da masu ba da kulawar lafiya da kamfanonin inshorar lafiya suke riƙe da su."], ["Iyaka (boundary)", "ƙayyadadden iyaka a sarari kan abin da kuke yi a dangantakar aiki."], ["988", "Suicide and Crisis Lifeline (layin taimakon gaggawa): kira, tes ko hira."], ["Kula da kai (self-care)", "abubuwan da kuke yi don ku kasance lafiya kuma ku iya ci gaba da taimako."]],
          slides: [
            { title: "Sirri", bullets: ["Babu magana ko saka a intanet game da mutanen da kuke yi wa hidima", "Babu rubutu a wayarku", "HIPAA tana kare bayanan lafiya"] },
            { title: "Iyakoki", bullets: ["Ku jagora ne, ba likita ko lauya ba", "Babu ba da rancen kuɗi ko manyan alƙawura", "Tambayoyin lafiya suna zuwa ga ma'aikatan lafiya"] },
            { title: "Matakan gaggawa", bullets: ["Haɗari yanzu: 911", "Tunanin kashe kai ko matsalar damuwa: kira ko tes 988", "Ku faɗa wa mai kula da ku nan take"] },
            { title: "Jagorar taimakonku", bullets: ["Wurare 5 ko fiye da aka tabbatar", "Adireshi, waya, lokutan aiki, yadda ake nema, ranar dubawa", "Da shirin tura maƙwabci na ƙagaggu"] }
          ],
          sources: [
            { name: "988 Suicide and Crisis Lifeline", url: "https://988lifeline.org/" },
            { name: "MedlinePlus: Patient Rights", url: "https://medlineplus.gov/patientrights.html" }
          ],
          tryIt: "Aikin ƙarshe: ku yi jagorar taimakon al'ummarku mai shafi ɗaya da aƙalla wurare biyar (abinci, gidan zama, kulawar lafiya, inshorar lafiya da ɗaya kuma), kowanne an tabbatar a shafinsa na hukuma da adireshi, lambar waya, lokutan aiki, yadda ake nema da ranar dubawa. Sannan ku rubuta shirin tura maƙwabci na ƙagaggu: buƙatarsa da kalmominsa, wurin taimakon, abin da za ku faɗa, tambayar izini, cikas ɗaya da ranar bin diddigi.",
          youCanNow: "gina jagorar taimako da aka tabbatar, da shirya tura mutum da ke kiyaye sirri, iyakoki da tsaro.",
          quickCheck: [
            { objective: "O5", q: "Wani da kuke yi wa hidima ya ce yana tunanin kashe kansa. Me za ku yi?", options: ["Ku yi alƙawarin ɓoye shi", "Ku canja magana", "Ku ce ya kwana ya yi tunani", "Ku haɗa shi da 988 (ko 911 idan yana cikin haɗari yanzu) kuma ku faɗa wa mai kula da ku"], answer: 3, why: "Ku bi matakan gaggawa: 988 ko 911, kuma ku faɗa wa mai kula da ku nan take." },
            { objective: "O5", q: "Wani ya nemi ku ba shi rancen $100. Me za ku yi?", options: ["Ku ƙi a hankali kuma ku taimaka nemo wurin taimako don buƙatar", "Ku ba da rancen a ɓoye", "Ku ba shi katin bankinku", "Ku yi watsi da shi"], answer: 0, why: "Ba da rancen kuɗi ya ƙetare iyaka; a maimakon haka ku taimaka haɗa shi da wurin taimako." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Haɗa mutane da taimako",
        questions: [
          { objective: "O4", q: "Wace ce hanya mafi kyau don tabbatar da lokutan aikin asibiti?", options: ["Takardar talla ta shekaru uku da suka wuce", "Hasashe", "Shafin hukuma na asibitin ko kiran waya", "Wani sharhi a intanet"], answer: 2, why: "Shafin hukuma ko kira yana ba da bayani na yanzu." },
          { objective: "O4", q: "Wane kayan aiki ne ke nemo cibiyoyin lafiya na al'umma?", options: ["Find a Health Center na HRSA", "Manhajar fina-finai", "Shafin sayayya", "Manhajar yanayi"], answer: 0, why: "Find a Health Center na HRSA yana lissafa cibiyoyin lafiya na al'umma." },
          { objective: "O5", q: "Yaushe ya kamata ku bi diddigi bayan tura mutum?", options: ["Ba har abada", "Sai idan ya kira ku", "A ranar da kuka sa tare", "Bayan shekara ɗaya"], answer: 2, why: "Sa ranar bin diddigi yana tabbatar cewa taimakon ya yi aiki." },
          { objective: "O5", q: "A ina ya kamata ku ajiye rubutu game da mutanen da kuke yi wa hidima?", options: ["A wayarku ta kanku", "A rukunin hira", "A kafofin sada zumunta", "A fom ko rikodin shirin"], answer: 3, why: "Rubutu yana zuwa rikodin shirin don a kiyaye shi a sirri." },
          { objective: "O5", q: "Wani ya nemi shawarar lafiya daga gare ku game da maganinsa. Za ku:", options: ["Faɗa masa abin da ku za ku sha", "Taimaka masa ya tambayi likitansa ko mai sayar da magani (pharmacist)", "Nema a intanet ku faɗa masa abin da zai yi", "Ce magunguna ba su da muhimmanci"], answer: 1, why: "CHW suna tsayawa a matsayinsu; tambayoyin lafiya suna zuwa ga ma'aikatan lafiya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tushen Aikin Ma'aikacin Lafiya na Al'umma",
    questions: [
      { objective: "O1", q: "Mafi kyawun bayanin ma'aikacin lafiya na al'umma shi ne:", options: ["Ɗan al'umma amintacce da ke haɗa mutane da kulawa da hidimomi", "Likita", "Ɗan sanda", "Mai shirya takardun haraji"], answer: 0, why: "CHW ma'aikata ne amintattu na sahun gaba da ke haɗa mutane da kulawa." },
      { objective: "O1", q: "Wanne ne ɗaya daga cikin ayyukan CHW da National C3 Council ta lissafa?", options: ["Yin tiyata", "Yin wayar da kai", "Rubuta magani", "Gudanar da banki"], answer: 1, why: "Wayar da kai ɗaya ne daga cikin ayyukan CHW guda goma." },
      { objective: "O1", q: "Me wannan kwas ɗin yake yi?", options: ["Yana ba ku takardar shaidar CHW", "Yana ba ku lasisin jiha", "Yana maye gurbin horon mai ɗaukar ku aiki", "Yana shirya ku don horon CHW da aikin farko"], answer: 3, why: "Kwas ɗin yana shirya ku; wasu jihohi suna ba CHW takardar shaida daban." },
      { objective: "O1", q: "Me yasa ake ɗaukar CHW da yawa aiki?", options: ["Suna da harshe, al'ada ko irin rayuwar al'ummar", "Suna da digirin likitanci", "Ba sa magana da mutane", "Suna aiki a intanet kawai"], answer: 0, why: "Irin rayuwa ɗaya tana gina amincewa da mutanen da CHW suke yi wa hidima." },
      { objective: "O2", q: "Wace ce jimlar maimaitawa mai kyau?", options: ["\"Da ka yi shiri da kyau.\"", "\"Wato bas tana jinkiri kuma hakan yana sa ka rasa ganawa. Haka ne?\"", "\"Wannan ba matsalata ba ce.\"", "\"Kowa yana da wannan matsalar.\""], answer: 1, why: "Maimaitawa tana nuna kun ji, kuma tana bar mutumin ya gyara ku." },
      { objective: "O2", q: "Teach-back yana gwada:", options: ["Hankalin mutumin", "Saurin maganarsa", "Ko kun yi bayani a sarari", "Makin jarabawar karatunsa"], answer: 2, why: "Teach-back yana gwada bayaninku, ba mutumin ba." },
      { objective: "O2", q: "Maƙwabci ya fi son magana da Sifaniyanci, ku kuma ba ku iya ba. Za ku:", options: ["Yi magana da ƙarfi da Turanci", "Fasa ziyarar", "Yi amfani da ɗansa ya fassara bayanan lafiya", "Ba da ƙwararren tafinta"], answer: 3, why: "Ba da tafinta yana bar mutumin ya fahimta kuma a fahimce shi." },
      { objective: "O3", q: "Waɗanne abubuwa ne tambayoyin buƙatun rayuwa suke yawan ƙunsa?", options: ["Abinci, gidan zama, kuɗin wuta da ruwa, sufuri da tsaro", "Abincin da aka fi so da waƙoƙi", "Wasanni da abubuwan sha'awa", "Girman takalma da tufafi"], answer: 0, why: "Waɗannan buƙatun rayuwa suna shafar lafiya." },
      { objective: "O3", q: "Me ya kamata ku faɗa kafin tambayoyin bincike?", options: ["\"Dole ne ku amsa komai.\"", "Babu komai; ku fara kawai", "\"Ina yi wa kowa 'yan tambayoyi don in ba da taimako. Kuna iya tsallake kowace.\"", "\"Wannan jarabawa ce.\""], answer: 2, why: "Bayyana dalili da faɗin za su iya tsallake tambaya suna gina amincewa kuma suna girmama izini." },
      { objective: "O3", q: "Bayan tambayoyin bincike, tambaya mai kyau ta gaba ita ce:", options: ["\"Wanne a cikin waɗannan ya fi muhimmanci a gare ku yanzu?\"", "\"Me yasa ba ku gyara wannan tun da wuri ba?\"", "\"Mene ne lambar sirrin katin bankinku (PIN)?\"", "\"Wa kuma zan iya faɗa wa?\""], answer: 0, why: "Farawa da abin da ya fi muhimmanci ga mutumin yana girmama zaɓinsa." },
      { objective: "O4", q: "211 shi ne:", options: ["Lambar gaggawa don gobara kawai", "Hidima kyauta mai sirri da ke haɗa mutane da taimako a yankinsu", "Layin waya na biya", "Manhajar kafofin sada zumunta"], answer: 1, why: "211 yana haɗa mutane da taimako a yankinsu." },
      { objective: "O4", q: "Shafin tallafi na USA.gov yana taimakon mutane:", options: ["Sayen tikitin kaɗe-kaɗe", "Biyan tarar ajiye mota", "Nemo shirye-shiryen gwamnati na abinci, gidan zama, kulawar lafiya da kuɗaɗe", "Yin ajiyar tikitin jirgin sama"], answer: 2, why: "Yana taimakon mutane su nemo tallafin gwamnati da yadda ake nema." },
      { objective: "O4", q: "Me ya kamata rubutun wurin taimako ya ƙunsa?", options: ["Sunan kawai", "Hasashen lokutan aiki", "Sunan abokin da ya je wurin", "Adireshi, lambar waya, lokutan aiki, yadda ake nema da ranar dubawa"], answer: 3, why: "Cikakkun bayanai da aka tabbatar suna sa wurin taimako ya yi amfani." },
      { objective: "O4", q: "Wani shafin intanet yana karɓar kuɗi don \"taimako\" da fom na gwamnati. Za ku:", options: ["Fara nemo shafin hukuma; fom da yawa kyauta ne", "Biya da sauri", "Raba shafin da kowa", "Ba shi bayanan wanda kuke yi wa hidima"], answer: 0, why: "Shafuka na bogi suna yawan karɓar kuɗi kan fom na kyauta; ku nemo shafin hukuma." },
      { objective: "O5", q: "Warm referral yana nufin:", options: ["Ba da katin kasuwanci", "Taimakon mutum ya haɗu kai tsaye, kamar kira tare", "Faɗa masa ya nema a intanet", "Aika takardar talla ta gidan waya"], answer: 1, why: "Warm referral yana taimakawa wajen yin haɗin." },
      { objective: "O5", q: "Kafin raba bayani da asibiti, kuna buƙatar:", options: ["Izinin mutumin", "Ra'ayin abokinku", "Babu komai", "Saƙo a kafofin sada zumunta"], answer: 0, why: "Izini yana zuwa da farko, kuma kuna raba abin da ake buƙata kaɗai." },
      { objective: "O5", q: "Wanne ne cikas ga samun taimako?", options: ["Waya mai aiki", "Abin hawa zuwa ganawar", "Rashin mai kula da yara a lokacin ganawar", "Takardun da suka dace"], answer: 2, why: "Rashin mai kula da yara zai iya hana mutum zuwa wurin hidima." },
      { objective: "O5", q: "Wani yana cikin matsalar damuwa mai tsanani kuma yana son magana da wani yanzu. Zai iya:", options: ["Jira ziyarar watan gobe", "Kira ko tura tes zuwa 988", "Saka a intanet", "Kira 411"], answer: 1, why: "988 shi ne Suicide and Crisis Lifeline: kira, tes ko hira." },
      { objective: "O5", q: "Tura mutum bai yi nasara ba. Za ku:", options: ["Haƙura", "Ɗora laifi ga mutumin", "Daina bin diddigi", "Nemo wani wurin taimako ku sa sabuwar ranar bin diddigi"], answer: 3, why: "Bin diddigi yana nufin gwada wata hanya idan ta farko ba ta yi aiki ba." },
      { objective: "O5", q: "Wace ce iyaka mai kyau ga CHW?", options: ["Ba da shawarar lafiya", "Ba da rancen kuɗi", "Alƙawarin gidan zama kafin Juma'a", "Tura tambayoyin lafiya ga ma'aikacin lafiyar mutumin"], answer: 3, why: "CHW suna tsayawa a matsayinsu kuma suna haɗa mutane da ma'aikatan lafiya don tambayoyin lafiya." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 2, 4, 5, 7, 8, 10, 12, 14, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake dubawa.",
    criteria: [
      { name: "Wuraren taimako da aka tabbatar", objective: "O4", notYet: "Wuraren taimako ƙasa da biyar, ko ba a tabbatar da bayanai a shafukan hukuma ba.", meets: "Aƙalla wurare biyar (abinci, gidan zama, kulawar lafiya, inshora da ɗaya kuma), kowanne da adireshi, lambar waya, lokutan aiki, yadda ake nema da ranar dubawa.", exceeds: "Ya kuma rubuta waɗanda za su iya amfani da kowanne, abin da za a kawo da harsunan da ake magana." },
      { name: "Buƙata da kalmominsa", objective: "O3", notYet: "Buƙatar hasashe ce ko tana amfani da kalmomin ƙwararru.", meets: "An rubuta buƙatar maƙwabcin na ƙagaggu da kalmominsa, kuma an rubuta izininsa.", exceeds: "Ya nuna wace buƙata ce ta fi muhimmanci gare shi da dalili." },
      { name: "Magana mai sauƙi da girmamawa", objective: "O2", notYet: "Abin da za a faɗa yana amfani da kalmomin ƙwararru ko yana yanke wa mutumin hukunci.", meets: "Kalmomi masu sauƙi, jimlar maimaitawa da tambayar teach-back.", exceeds: "Ya ba da tafinta ko wata hanyar sadarwa idan ana buƙata." },
      { name: "Warm referral da bin diddigi", objective: "O5", notYet: "Lambar waya kawai, ko babu ranar bin diddigi.", meets: "Haɗi da hannu, cikas ɗaya da shirinsa, da ranar bin diddigi.", exceeds: "Ya haɗa da wani wurin taimako na madadi idan na farko bai yi aiki ba." },
      { name: "Sirri da matsayi", objective: "O5", notYet: "Yana amfani da bayanan mutum na gaske ko yana ba da shawarar lafiya.", meets: "Mutum na ƙagaggu, izini kafin raba bayani, babu shawarar lafiya ko ta shari'a.", exceeds: "Ya lissafa matakan gaggawa (911, 988, faɗa wa mai kula da ku) a jagorar." },
      { name: "Hanyar jiharku", objective: "O1", notYet: "Babu bayani kan yadda ake zama CHW a jiharku.", meets: "Ya rubuta ko jiharku tana ba CHW takardar shaida, tare da shafin hukuma.", exceeds: "Ya ƙara mai ɗaukar aiki ko shirin horo ɗaya a yankinsa da za a tuntuɓa." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka nemi aikin CHW ko shirin horo cikin kwanaki 60",
      "Masu koyo da suka sami takardar shaidar CHW ta jiha inda jiharsu take bayarwa",
      "Masu koyo da aka ɗauka aiki a matsayin CHW, ma'aikatan wayar da kai ko jagorori cikin watanni 6 (binciken biyo baya)",
      "Ƙungiyoyin abokan aiki sun ce mutanen da aka tura sun isa wurin hidimar kuma an bi diddigi"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet don tabbatar da wuraren taimako a shafukan hukuma",
      "Takarda da alƙalami don rubutun tambayoyi, jagorar taimako da shirin tura mutum",
      "Abokin wasan kwaikwayo (ba dole ba ne; rubutawa ma yana aiki)",
      "Kusan minti 60 gaba ɗaya, a gajerun zama"
    ],
    facilitatorNotes: [
      "Kafin kwas ɗin, ku nemo shafin takardar shaidar CHW na jiharku (ko ku rubuta cewa jiharku ba ta da shi) kuma ku raba shi.",
      "Ku yi darussan sauraro da tambayoyin bincike a matsayin wasan kwaikwayo bibbiyu, da mutane na ƙagaggu kawai.",
      "Ku gayyato CHW ko promotora da ke aiki ya ba da labarin rana ɗaya a aikin, idan za ku iya.",
      "Ku sa masu koyo su haɗa wuraren taimakon da suka tabbatar zuwa jagora ɗaya ta rukuni, kuma su rubuta ranar da aka duba kowanne.",
      "Ku sake duba matakan gaggawa (911, 988, faɗa wa mai kula da ku) da shirin tsaro na shirinku kafin wasan kwaikwayo kan batutuwa masu wuya."
    ]
  }
};

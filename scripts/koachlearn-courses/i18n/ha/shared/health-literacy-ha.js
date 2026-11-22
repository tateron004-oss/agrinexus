"use strict";

// Koach Learn course, Hausa (ha) translation of shared/health-literacy.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "health-literacy-ha",
  lang: "ha",
  translationOf: "health-literacy",
  category: "Seniors and Technology",
  name: "Ilimin Lafiya: Fahimtar Kulawar Lafiyarku",
  skills: "Nemo bayanan lafiya amintattu, Shirya wa ganin likita, Yin tambayoyi da tabbatar kun fahimta, Karanta takardar magani da ajiye jerin magunguna, Amfani da sakamakon gwaji da shafin marasa lafiya, Fahimtar kalmomin inshorar lafiya",
  outcome: "shirya wa ganin likita da rubutun alamar rashin lafiya, jerin tambayoyi da jerin magunguna, yin tambayoyi har sai kun fahimta, maimaita shirin da kalmominku, da nemo amsoshi amintattu da mutumin da ya dace ku tambaya game da magunguna, sakamakon gwaji da kuɗi.",
  about: [
    "Ilimin lafiya (health literacy) yana nufin iya nemowa, fahimta da amfani da bayanan lafiya don yanke shawara game da kanku da mutanen da kuke kula da su. Ƙwarewa ce da kowa zai iya koya. Har likitoci ma suna ruɗewa da kalmomin likitanci da ba na fannin su ba.",
    "Wannan kwas ɗin na kowa ne: tsofaffi masu shan magunguna da yawa, matasa da ke zuwa wurin likita su kaɗai a karon farko, tsoffin sojoji masu amfani da kulawar VA (hukumar tsoffin sojojin Amurka), ma'aikata masu zaɓar tsarin inshorar lafiya, masu dawowa gida daga gidan yari da ke buƙatar sake fara kulawa, da duk wanda ya bar wurin likita yana tunanin \"Me suka faɗa yanzu?\"",
    "Za ku koyi yadda ake gane bayanan lafiya amintattu, shirya wa ganin likita, yin tambayoyi masu kyau, karanta takardar magani, amfani da shafin marasa lafiya (patient portal) da fahimtar kalmomin inshora. Wannan kwas yana koyar da ƙwarewa; ba ya ba da shawarar likita. Koyaushe ku tabbatar da shawarwari game da lafiyarku da likitanku, ma'aikaciyar jinya ko mai harhaɗa magunguna (pharmacist).",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta darasin, ku kalli hotunan bayani (slides), sannan ku yi aikin \"Gwada yanzu\". Akwai ɗan gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku yi takardar ganin likita mai shafi ɗaya don ganawa ta gaske ko ta gwaji: gajeren rubutu game da alamar rashin lafiyarku ko damuwarku (lokacin da ta fara, abin da ke sa ta yi sauƙi ko ta tsananta), manyan tambayoyinku uku, da cikakken jerin magunguna (magungunan likita, magungunan kantin da ba sa buƙatar takardar likita, bitamin, ƙarin abinci da abubuwan da ba sa yi muku). Bayan ganawar (ko gwaji da aboki), ku rubuta shirin da kalmominku: mene ne matsalar, me ya kamata ku yi, da dalilin haka.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Tsofaffi masu shan magunguna da yawa, matasa da ke zuwa wurin likita su kaɗai a karon farko, tsoffin sojoji masu amfani da kulawar VA, ma'aikata masu zaɓar tsarin inshorar lafiya, masu dawowa gida daga gidan yari da ke buƙatar sake fara kulawa, da masu kula da marasa lafiya.",
    startingPoint: "Suna zuwa wurin likita kuma suna shan magani, amma sau da yawa suna barin wurin ba su tabbata da abin da aka faɗa ba, ba sa ajiye cikakken jerin magunguna, ba su taɓa amfani da shafin marasa lafiya ba, kuma kalmomin inshora suna ruɗa su.",
    gap: "Rashin fahimtar bayanan lafiya yana kawo kurakurai a shan magani, rasa kulawa da kuɗaɗen ba-zata. Masu koyo suna buƙatar nemo bayanai amintattu, shirya wa ganin likita, yin tambaya har sai sun fahimta, da sanin wanda za su tambaya game da magunguna, sakamako da kuɗi, don su shiga cikin shawarwari game da lafiyarsu da ta iyalinsu.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli",
      "Ba shawarar likita ba ce; kowace shawara game da lafiya ana tabbatar da ita da likita, ma'aikaciyar jinya ko mai harhaɗa magunguna",
      "Sirri: ba a raba bayanan lafiya ko kalmar sirrin shafin marasa lafiya a aji, ko a rubuta su a kayan AI",
      "Na'urori: waya ko kwamfuta; wasu masu koyo ba su da shafin marasa lafiya tukuna",
      "Harshe: wasu masu koyo suna buƙatar mai fassara a wurin likita"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku shafin intanet ko rubutu game da lafiya", action: "duba ko majiyar amintacciya ce, da neman ma'anar wata kalmar lafiya a shafi amintacce kamar medlineplus.gov", standard: "kuna rubuta ma'anar da kalmominku" },
    { id: "O2", condition: "Kafin ganin likita", action: "rubuta takardar ganin likita mai damuwarku, manyan tambayoyinku uku da cikakken jerin magunguna", standard: "tare da lokacin da alamar ta fara da abin da ke sa ta yi sauƙi ko ta tsananta" },
    { id: "O3", condition: "A lokacin ganin likita ko wasan kwaikwayo", action: "yin tambayoyi har sai kun fahimta, da maimaita shirin da kalmominku", standard: "kuna faɗin mene ne matsalar, abin da za a yi da dalilin haka" },
    { id: "O4", condition: "Idan aka ba ku magani, bitamin ko ƙarin abinci", action: "karanta takardarsa da ƙara shi a jerin magungunanku da suna, yawan sha, sau nawa, abin da yake yi da gargaɗi ɗaya", standard: "tare da tambaya ɗaya da kuka rubuta don mai harhaɗa magunguna" },
    { id: "O5", condition: "Ta amfani da shafin marasa lafiya ko asibitinku", action: "nemo sakamakon gwaji ko rubutun ganin likita da rubuta tambayoyi game da shi", standard: "tare da aƙalla tambayoyi biyu don mai ba ku kulawa" },
    { id: "O6", condition: "Idan aka ba ku kalmomin inshorar lafiya da aka saba ji", action: "bayyana kalmomi kamar deductible, copay da in-network, da faɗin wanda za ku tambaya game da kuɗi", standard: "da kalmominku ba tare da taimako ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Shiryawa da magana da mai ba ku kulawa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Nemo bayanan lafiya da za ku iya amincewa da su",
          minutes: 5,
          goal: "Bambance majiyar lafiya amintacciya da wadda ba amintacciya ba.",
          text: [
            "Bayanan lafiya suna ko'ina: shafukan intanet, kafofin sada zumunta, tallace-tallacen talabijin, abokai da manhajojin hira na AI. Wasu suna da kyau sosai. Wasu tsofaffi ne, ba daidai ba ne, ko suna son sayar muku da wani abu.",
            "Wurare masu kyau kuma kyauta don farawa a Amurka: MedlinePlus (medlineplus.gov) daga Laburaren Likitanci na Ƙasa (National Library of Medicine), CDC (cdc.gov, hukumar kula da cututtuka), da National Institutes of Health (nih.gov, cibiyoyin binciken lafiya na ƙasa). Shafukan gwamnatin Amurka na hukuma suna ƙarewa da .gov. Asibitoci, jami'o'i da sanannun ƙungiyoyin likitanci ma sau da yawa suna da kyau.",
            "Ku yi tambayoyi huɗu game da kowace majiya: Wa ya rubuta shi? Yaushe aka sabunta shi? Yana son sayar mini da wani abu ne? Ya yi daidai da abin da sauran majiyoyi amintattu suka faɗa? Mataimakin AI zai iya bayyana kalmar likitanci mai wuya da kalmomi masu sauƙi, amma yana iya yin kuskure. Ku tabbatar da abin da ya faɗa a shafi amintacce, kuma kada ku taɓa rubuta cikakken sunanku, lambar shaida ko lambobin inshora a cikinsa. Likitanku ko mai harhaɗa magunguna ne ke da kalmar ƙarshe a kanku."
          ],
          steps: ["Ku nemo wanda ya yi shafin.", "Ku nemi ranar da aka sabunta shi.", "Ku duba ko yana sayar da wani abu.", "Ku kwatanta da MedlinePlus ko wani shafin .gov.", "Ku kai tambayoyinku ga likitanku ko mai harhaɗa magunguna."],
          words: [["Ilimin lafiya (health literacy)", "iya nemowa, fahimta da amfani da bayanan lafiya don yanke shawara."], ["MedlinePlus", "shafin intanet na bayanan lafiya kyauta na gwamnatin Amurka, daga Laburaren Likitanci na Ƙasa."]],
          slides: [
            { title: "Ilimin lafiya ƙwarewa ce", bullets: ["Nemo bayanan lafiya", "Fahimtar su", "Amfani da su don yanke shawara"] },
            { title: "Wurare amintattu don farawa", bullets: ["medlineplus.gov", "cdc.gov da nih.gov", "Shafukan gwamnatin Amurka na hukuma suna ƙarewa da .gov"] },
            { title: "Tambayoyi huɗu ga kowace majiya", bullets: ["Wa ya rubuta shi?", "Yaushe aka sabunta shi?", "Yana sayar da wani abu?", "Ya yi daidai da sauran majiyoyi amintattu?"] },
            { title: "AI zai iya bayani, ba yanke shawara ba", bullets: ["Ku yi amfani da shi don bayanin kalmomi masu wuya", "Ku tabbatar da shi a shafi amintacce", "Likitanku ko mai harhaɗa magunguna ne ke da kalmar ƙarshe"] }
          ],
          sources: [
            { name: "MedlinePlus: Health Literacy", url: "https://medlineplus.gov/healthliteracy.html" },
            { name: "CDC: What Is Health Literacy?", url: "https://www.cdc.gov/health-literacy/php/about/index.html" }
          ],
          tryIt: "Ku zaɓi wata kalmar lafiya da kuka taɓa ji amma ba ku fahimce ta sosai ba (misali hawan jini, cholesterol (kitse a jini) ko asma). Ku neme ta a medlineplus.gov ku rubuta ma'anarta a jimla ɗaya da kalmominku.",
          youCanNow: "nemo bayanan lafiya a shafuka amintattu, da duba kowace majiya da tambayoyi huɗu masu sauƙi.",
          quickCheck: [
            { objective: "O1", q: "Wane abu ne ke sa shafin lafiya ya fi zama amintacce?", options: ["Yana sayar da kaya a kowane shafi", "Yana da alamun motsin rai (!) da yawa", "Yana nuna wanda ya rubuta shi da lokacin da aka sabunta shi na ƙarshe", "Yana alƙawarin warkarwa"], answer: 2, why: "Sanin wanda ya rubuta shi da lokacin haka yana taimaka muku ku auna bayanin." },
            { objective: "O1", q: "Aboki ya raba rubutu da ke cewa wani shayi yana warkar da hawan jini. Me za ku yi?", options: ["Ku daina maganin hawan jininku", "Ku raba shi da iyali", "Ku sayi shayin nan take", "Ku duba shafi amintacce ku tambayi likitanku"], answer: 3, why: "Ana tabbatar da maganganun lafiya a shafuka amintattu da wurin mai ba ku kulawa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Shirya wa ganin likita",
          minutes: 5,
          goal: "Yi takardar ganin likita mai damuwarku, tambayoyinku da jerin magunguna.",
          text: [
            "Ganin likita sau da yawa gajere ne. Shiryawa tun da wuri yana taimaka muku ku tuna komai, kuma yana taimaka wa mai ba ku kulawa ya fahimce ku. MedlinePlus yana ba da shawarar ku rubuta tambayoyinku, ku bayyana alamomin rashin lafiyarku a rubuce, ku kuma jera abubuwan da ba sa yi muku (allergies) da kowane magani, ganye, bitamin da ƙarin abinci da kuke sha.",
            "Don alamar rashin lafiya, ku rubuta: mece ce, yaushe ta fara, sau nawa take faruwa, me ke sa ta yi sauƙi ko ta tsananta, da abin da kuka riga kuka gwada. Ku sa manyan tambayoyinku uku a farko, don a amsa mafi muhimmanci.",
            "Kuna iya zuwa da aboki ko ɗan iyali da kuka amince da shi don ya saurara ya rubuta abubuwa. Idan kuna buƙatar mai fassara, ku tambayi ofishin tun da wuri su shirya muku. Ku zo da katin inshorarku ko na Medicare (inshorar lafiya ta gwamnatin Amurka), katin shaida mai hoto, da jerin magungunanku ko kwalaben magungunan da kansu."
          ],
          steps: ["Ku rubuta damuwarku: mece ce, yaushe ta fara, sau nawa, me ke taimakawa ko ke ƙara ta.", "Ku rubuta manyan tambayoyinku uku.", "Ku jera kowane magani, bitamin, ƙarin abinci da abin da ba ya yi muku.", "Ku nemi wani ya zo tare da ku idan hakan zai taimaka.", "Ku nemi mai fassara tun da wuri idan kuna buƙata."],
          words: [["Mai ba da kulawa (provider)", "likita, nurse practitioner, physician assistant ko wani ƙwararre da ke ba da kulawar lafiya."], ["Alamar rashin lafiya (symptom)", "canji a jikinku ko tunaninku da kuka lura da shi, kamar ciwo, tari ko gajiya."], ["Ƙarin abinci (supplement)", "bitamin, ma'adini, ganye ko wani abu da kuke sha don ƙarawa a abincinku."]],
          slides: [
            { title: "Me yasa za ku shirya", bullets: ["Ganin likita gajere ne", "Kuna tuna komai", "Mai ba ku kulawa yana fahimtar ku da kyau"] },
            { title: "Ku bayyana alamar rashin lafiyarku", bullets: ["Mece ce kuma yaushe ta fara", "Sau nawa take faruwa", "Me ke sa ta yi sauƙi ko ta tsananta"] },
            { title: "Ku zo da", bullets: ["Manyan tambayoyi uku", "Jerin magunguna ko kwalaben", "Katin inshora ko na Medicare da katin shaida"] },
            { title: "Ba sai kun je ku kaɗai ba", bullets: ["Ku zo da wani da zai rubuta abubuwa", "Ku nemi mai fassara tun da wuri"] }
          ],
          sources: [{ name: "MedlinePlus: Talking With Your Doctor", url: "https://medlineplus.gov/talkingwithyourdoctor.html" }],
          tryIt: "Ku fara takardar ganin likitanku. Ku rubuta damuwa ɗaya ta gaske ko ta gwaji tare da lokacin da ta fara da abin da ke sa ta yi sauƙi ko ta tsananta, sannan manyan tambayoyinku uku.",
          youCanNow: "shirya takardar ganin likita mai damuwarku, manyan tambayoyinku da abubuwan da za ku zo da su.",
          quickCheck: [
            { objective: "O2", q: "Me yasa za ku zo da cikakken jerin magunguna wurin likita?", options: ["Don likita ya duba cewa duk abin da kuke sha yana aiki tare lafiya", "Domin dole ne kafin a bar ku ku shiga", "Don kada ku yi magana", "Don nuna cewa kuna shan magani da yawa"], answer: 0, why: "Cikakken jeri yana taimaka wa mai ba ku kulawa ya guje wa haɗuwar magunguna masu cutarwa da kurakurai." },
            { objective: "O2", q: "Kuna da damuwa biyar amma ganawarku gajera ce. Me za ku yi?", options: ["Kada ku ambaci ko ɗaya", "Ku rubuta manyan tambayoyinku uku ku fara da mafi muhimmanci", "Ku yi magana da sauri sosai game da duka biyar", "Ku bar su duka sai shekara mai zuwa"], answer: 1, why: "Sa manyan tambayoyinku a farko yana tabbatar da cewa an amsa mafi muhimmanci." }
          ]
        },
        {
          objectives: ["O3"],
          title: "A lokacin ganin likita: yin tambayoyi da tabbatar kun fahimta",
          minutes: 5,
          goal: "Yi tambayoyi har sai kun fahimta, ku maimaita shirin da kalmominku.",
          text: [
            "Kuna da haƙƙin fahimtar kulawarku. Idan mai ba ku kulawa ya yi amfani da kalmar da ba ku sani ba, ku ce: \"Za ka iya bayyana mini wannan da kalmomi masu sauƙi?\" Idan yana tafiya da sauri sosai, ku ce: \"Za ka iya rage gudu?\" Kuna iya neman ya rubuta muku umarnin.",
            "Tambayoyi uku suna rufe yawancin ganawa: Mece ce babbar matsalata? Me ya kamata in yi? Me yasa yake da muhimmanci in yi haka? Ku ci gaba da tambaya har sai kun iya amsa dukansu uku.",
            "Kafin ku tafi, ku yi amfani da teach-back (maimaita bayani): ku faɗi shirin da kalmominku. \"To, zan sha ƙwaya ɗaya kowace safiya tare da abinci, kuma zan dawo bayan sati biyu. Idan idon ƙafata ya kumbura, zan kira ku.\" Idan kun manta wani abu, mai ba ku kulawa zai iya gyara shi a lokacin. Ku kuma tambayi yadda za ku tuntuɓi ofishin daga baya da abin da za ku yi idan abubuwa suka tsananta."
          ],
          steps: ["Ku tambayi ma'anar duk kalmar da ba ku sani ba.", "Ku yi tambayoyi uku: babbar matsala, abin da za a yi, dalili.", "Ku rubuta abubuwa ko ku sa mai taimaka muku ya rubuta.", "Ku faɗi shirin da kalmominku (teach-back).", "Ku tambayi yadda za ku tuntuɓi ofishin da abin da za ku yi idan abubuwa suka tsananta."],
          words: [["Teach-back (maimaita bayani)", "faɗin shirin da kalmominku don tabbatar kun fahimce shi."], ["Ganin biyo baya (follow-up)", "ganawa ko kira daga baya don duba yadda kuke."]],
          slides: [
            { title: "Babu laifi a tambaya", bullets: ["\"Za ka iya bayyana wannan da kalmomi masu sauƙi?\"", "\"Za ka iya rage gudu?\"", "\"Za ka iya rubuta mini wannan?\""] },
            { title: "Muhimman tambayoyi uku", bullets: ["Mece ce babbar matsalata?", "Me ya kamata in yi?", "Me yasa yake da muhimmanci?"] },
            { title: "Teach-back (maimaita bayani)", bullets: ["Ku faɗi shirin da kalmominku", "Mai ba ku kulawa zai gyara duk abin da kuka manta"] },
            { title: "Kafin ku tafi", bullets: ["Ta yaya zan tuntuɓi ofishin?", "Me zan yi idan abubuwa suka tsananta?"] }
          ],
          sources: [{ name: "MedlinePlus: Talking With Your Doctor", url: "https://medlineplus.gov/talkingwithyourdoctor.html" }],
          tryIt: "Ku yi wasan kwaikwayo da aboki ko ku faɗa da babbar murya: abokinku ya karanta gajeren umarnin likita (misali \"Ka sha wannan sau biyu a rana na kwanaki 10 kuma ka gama shi duka\"). Ku yi tambaya ɗaya game da shi, sannan ku maimaita shi da kalmominku.",
          youCanNow: "yin tambayoyi a sarari a lokacin ganin likita, da amfani da teach-back don tabbatar kun fahimci shirin.",
          quickCheck: [
            { objective: "O3", q: "Wace ce ɗaya daga cikin muhimman tambayoyi uku da za a yi wurin likita?", options: ["Nawa likitan yake samu?", "Me yasa yake da muhimmanci in yi haka?", "Zan iya tsallake maganina?", "Har yaushe za a jira?"], answer: 1, why: "Muhimman tambayoyi uku su ne: mece ce babbar matsalata, me ya kamata in yi, da me yasa yake da muhimmanci." },
            { objective: "O3", q: "Likita ya ce ku sha ƙwaya \"sau biyu a rana tare da abinci.\" Me za ku yi kafin ku tafi?", options: ["Ku gyaɗa kai ku tafi", "Ku tambayi baƙo a ɗakin jira", "Ku maimaita: \"To, zan sha ta da karin kumallo da abincin dare tare da abinci, ko?\"", "Ku yi tsammani daga baya a gida"], answer: 2, why: "Teach-back yana tabbatar da cewa kun fahimci shirin daidai." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Shiryawa da magana da mai ba ku kulawa",
        questions: [
          { objective: "O1", q: "Wane shafi ne wuri amintacce don fara neman bayanan lafiya?", options: ["Rubutu a kafofin sada zumunta daga baƙo", "Tallar ƙwayar mu'ujiza", "medlineplus.gov", "Sharhin wani a dandalin intanet"], answer: 2, why: "MedlinePlus shafin lafiya ne kyauta na gwamnatin Amurka daga Laburaren Likitanci na Ƙasa." },
          { objective: "O2", q: "Me ya kamata ku rubuta game da alamar rashin lafiya kafin ganin likita?", options: ["Lokacin da ta fara da abin da ke sa ta yi sauƙi ko ta tsananta", "Babu komai; likita zai yi tsammani", "Launin da kuka fi so kawai", "Lambar asusun bankinku"], answer: 0, why: "Cikakkun bayanai game da alamar suna taimaka wa mai ba ku kulawa ya fahimce ku." },
          { objective: "O2", q: "Me ya kamata ya kasance a jerin magungunanku?", options: ["Magungunan likita kawai", "Ƙwayoyin da kuka sha yau kawai", "Babu komai; kantin magani ya sani", "Magungunan likita, magungunan kantin, bitamin, ƙarin abinci da abubuwan da ba sa yi muku"], answer: 3, why: "Duk abin da kuke sha yana iya zama da muhimmanci, har da bitamin da ƙarin abinci." },
          { objective: "O3", q: "Likita ya yi amfani da kalmar da ba ku fahimta ba. Me za ku yi?", options: ["Ku gyaɗa kai ku yi kamar kun fahimta", "Ku nemi ya bayyana ta da kalmomi masu sauƙi", "Ku bar wurin", "Ku neme ta shekara mai zuwa"], answer: 1, why: "Kuna da haƙƙin fahimtar kulawarku; yin tambaya abu ne na yau da kullum." },
          { objective: "O3", q: "Mene ne teach-back?", options: ["Koya wa likita magani", "Neman a mayar muku da kuɗi", "Faɗin shirin da kalmominku", "Karanta shirin a zuciya"], answer: 2, why: "Teach-back yana tabbatar kun fahimta, don a gyara kurakurai nan take." }
        ]
      }
    },
    {
      name: "Babi na 2: Amfani da bayanan lafiyarku",
      lessons: [
        {
          objectives: ["O4"],
          title: "Magunguna: karanta takarda da ajiye jeri",
          minutes: 5,
          goal: "Karanta takardar magani ku ajiye jerin magunguna da aka sabunta.",
          text: [
            "Kurakurai a shan magani suna yawan faruwa, kuma sau da yawa ana iya hana su. MedlinePlus yana ba da shawarar ajiye jerin kowane magani tare da yawan sha da lokacin da kuke sha, har da kayan kantin da ba sa buƙatar takardar likita, bitamin, ƙarin abinci da ganye, da duk abin da ba ya yi muku, kuma ku zo da shi a kowace ganawa.",
            "Ku karanta takardar magani kowane lokaci, ba daga tunani ba. Ku nemi: sunan maganin, yawan da za a sha (dose), sau nawa da yaushe, har tsawon wane lokaci, gargaɗi (misali \"yana iya kawo barci\" ko \"a sha tare da abinci\"), da bayanin sake cika magani (refill) da ranar ƙarewar amfani. Magungunan kantin da ba sa buƙatar takardar likita suna da takardar Drug Facts mai amfani, gargaɗi da umarni.",
            "Mai harhaɗa magunguna ƙwararre ne da ake tambaya kyauta. Ku tambaye shi: Me yasa nake shan wannan? Waɗanne illoli aka saba gani kuma me zan yi? Yaushe zan daina? Yana da lafiya tare da sauran magungunana da ƙarin abinci? Akwai abinci ko barasa da ya kamata in guje wa? Kada ku taɓa dainawa ko canja maganin da likita ya rubuta ba tare da tambayar likitanku ko mai harhaɗa magunguna tukuna ba."
          ],
          steps: ["Ku karanta suna, yawan sha, sau nawa da har tsawon wane lokaci.", "Ku karanta gargaɗin.", "Ku ƙara shi a jerin magungunanku tare da yawan sha da lokaci.", "Ku yi wa mai harhaɗa magunguna tambayoyinku.", "Ku zo da jerin a kowace ganawa ku sabunta shi idan wani abu ya canja."],
          words: [["Yawan sha (dose)", "adadin maganin da za a sha a lokaci ɗaya."], ["Maganin kanti (over-the-counter, OTC)", "maganin da za ku iya saya ba tare da takardar likita ba."], ["Illa (side effect)", "ƙarin tasirin magani da ba ku so, kamar ciwon ciki."]],
          slides: [
            { title: "Ku karanta takardar kowane lokaci", bullets: ["Suna da yawan sha", "Sau nawa, yaushe da har tsawon wane lokaci", "Gargaɗi: yana kawo barci, a sha tare da abinci"] },
            { title: "Ku ajiye jerin magunguna", bullets: ["Kowane magani, bitamin, ƙarin abinci, ganye", "Yawan sha da lokacin rana", "Abubuwan da ba sa yi muku; ku zo da shi a kowace ganawa"] },
            { title: "Ku tambayi mai harhaɗa magunguna", bullets: ["Me yasa nake shan wannan? Waɗanne illoli?", "Yana da lafiya tare da sauran magungunana?", "Akwai abinci ko barasa da zan guje wa?"] },
            { title: "Kada ku canja da kanku", bullets: ["Ku tambayi likita ko mai harhaɗa magunguna kafin ku daina ko ku canja"] }
          ],
          sources: [{ name: "MedlinePlus: Medication Errors", url: "https://medlineplus.gov/medicationerrors.html" }],
          tryIt: "Ku ɗauki magani ɗaya, bitamin ko ƙarin abinci da ku (ko wani a iyali) kuke sha. Ku karanta takardarsa ku ƙara shi a jerin magungunanku: suna, yawan sha, sau nawa, abin da yake yi da gargaɗi ɗaya. Ku rubuta tambaya ɗaya da za ku yi wa mai harhaɗa magunguna.",
          youCanNow: "karanta takardar magani, ajiye cikakken jerin magunguna, da yi wa mai harhaɗa magunguna tambayoyin da suka dace.",
          quickCheck: [
            { objective: "O4", q: "Mene ne ma'anar \"dose\" (yawan sha) a takardar magani?", options: ["Adadin maganin da za a sha a lokaci ɗaya", "Farashin maganin", "Ranar da aka yi shi", "Sunan kantin magani"], answer: 0, why: "Dose shi ne adadin da kuke sha a lokaci ɗaya." },
            { objective: "O4", q: "Kun fara shan sabon bitamin. Me za ku yi da jerin magungunanku?", options: ["Ku bar shi a waje domin bitamin ba sa ƙirguwa", "Ku jira har ranar haihuwarku ta gaba", "Ku faɗa wa abokanku kawai", "Ku ƙara shi a jerin ku tambayi mai harhaɗa magunguna ko yana da lafiya tare da sauran magungunanku"], answer: 3, why: "Bitamin da ƙarin abinci suna cikin jerin, kuma suna iya haɗuwa da magunguna." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Sakamakon gwaji, shafin marasa lafiya da bayananku",
          minutes: 5,
          goal: "Nemo sakamakon gwaji a shafin marasa lafiya ku rubuta tambayoyi game da shi.",
          text: [
            "Asibitoci da cibiyoyin lafiya da yawa suna da shafin marasa lafiya (patient portal): shafin intanet ko manhaja mai tsaro inda kuke ganin sakamakon gwaji, rubutun ganin likita da ganawa masu zuwa, neman sake cika magani, da tura saƙo ga ƙungiyar masu kula da ku. MedlinePlus yana ba da shawarar ku koyi yadda ake shiga bayananku don ku bi sakamako, tsarin magani da magunguna. Tsoffin sojoji za su iya amfani da kayan intanet na VA; ku tambayi ƙungiyar VA ɗinku yadda ake yin rajista.",
            "Sakamakon gwaji sau da yawa yana nuna lambarku kusa da iyakar \"daidai\" ko reference range (iyakar kwatanci). Sakamakon da aka yi wa alama mai yawa (high) ko ƙasa (low) ba koyaushe matsala ba ne; ya dogara da ku, tarihinku da sauran sakamako. Kada ku firgita kuma kada ku canja maganinku da kanku. Ku rubuta tambayoyi ku tambayi mai ba ku kulawa abin da sakamakon yake nufi a gare ku.",
            "Ku kiyaye shafinku: ku yi amfani da kalmar sirri mai ƙarfi, kada ku taɓa raba ta, kuma ku fita daga asusu a kwamfutocin da ake rabawa ko na ɗakin karatu. Idan kuna buƙatar taimako wajen rajista, ku kira teburin karɓar baƙi na asibitin. Sau da yawa ɗan iyali ko mai kula da ku zai iya samun damar shiga da izininku; ku tambayi ofishin yadda ake yi."
          ],
          steps: ["Ku tambayi asibitinku yadda ake rajista a shafin marasa lafiya.", "Ku nemo sakamakon gwajinku na baya-bayan nan.", "Ku duba lambarku da reference range.", "Ku rubuta tambayoyi: Me wannan yake nufi a gare ni? Akwai abin da ya kamata in yi?", "Ku tura tambayar ta shafin ko ku tambaya a ganawarku ta gaba."],
          words: [["Shafin marasa lafiya (patient portal)", "shafin intanet ko manhaja mai tsaro inda kuke ganin bayanan lafiyarku kuma kuke tura saƙo ga ƙungiyar masu kula da ku."], ["Reference range (iyakar kwatanci)", "iyakar sakamakon da aka saba gani ga yawancin mutane masu lafiya."]],
          slides: [
            { title: "Abin da shafin marasa lafiya yake yi", bullets: ["Ganin sakamakon gwaji da rubutun ganin likita", "Neman sake cika magani da ganin ganawa", "Tura saƙo ga ƙungiyar masu kula da ku"] },
            { title: "Karanta sakamako", bullets: ["Lambarku da reference range", "Mai yawa ko ƙasa ba koyaushe matsala ba ne", "Ku tambayi abin da yake nufi a gare ku"] },
            { title: "Ku kiyaye shi", bullets: ["Kalmar sirri mai ƙarfi, kada ku raba ta", "Ku fita daga asusu a kwamfutocin da ake rabawa", "Ku tambayi asibitin game da damar shiga ga mai kula da ku"] }
          ],
          sources: [{ name: "MedlinePlus: Talking With Your Doctor", url: "https://medlineplus.gov/talkingwithyourdoctor.html" }],
          tryIt: "Idan kuna da shafin marasa lafiya, ku shiga ku nemo sakamako ɗaya na baya-bayan nan ko rubutun ganin likita. Idan ba ku da shi, ku kira ko ku tambayi asibitinku yadda ake rajista. Ko ta yaya, ku rubuta tambayoyi biyu da za ku yi game da sakamakon gwaji.",
          youCanNow: "amfani da shafin marasa lafiya lafiya, karanta sakamako kusa da reference range ɗinsa, da tambayar mai ba ku kulawa abin da yake nufi a gare ku.",
          quickCheck: [
            { objective: "O5", q: "Me za ku iya yi a shafin marasa lafiya yawanci?", options: ["Canja magungunanku da kanku", "Ganin bayananku da tura saƙo ga ƙungiyar masu kula da ku", "Yin odar magani ba tare da takardar likita ba", "Karanta sakamakon sauran marasa lafiya"], answer: 1, why: "Shafin wuri ne mai tsaro don ganin bayananku da tura saƙo ga ƙungiyar masu kula da ku." },
            { objective: "O5", q: "Kun yi amfani da kwamfutar ɗakin karatu don duba shafinku. Me za ku yi idan kun gama?", options: ["Ku bar shi a buɗe don lokaci na gaba", "Ku rubuta kalmar sirrinku a takarda kusa da kwamfutar", "Ku fita daga asusu ku rufe burauzar", "Ku kashe allon kawai"], answer: 2, why: "Fita daga asusu a kwamfutocin da ake rabawa yana kiyaye bayanan lafiyarku a sirri." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kalmomin inshorar lafiya da kayan ganin likitanku",
          minutes: 6,
          goal: "Bayyana kalmomin inshorar lafiya da aka saba ji, ku san wanda za ku tambaya game da kuɗi.",
          text: [
            "Kalmomin kuɗi suna ruɗa kusan kowa. HealthCare.gov (shafin inshorar lafiya na gwamnatin Amurka) yana bayyana su. Premium shi ne abin da kuke biya don tsarin inshorarku, yawanci kowane wata. Deductible shi ne adadin da kuke biya don kulawar da inshora ke rufewa kafin tsarinku ya fara biya. Copayment (copay) adadin dala ne ƙayyadadde da kuke biya don wata hidima da inshora ke rufewa, kamar ganin likita. Masu ba da kulawa na in-network suna da yarjejeniya da tsarinku kuma yawanci suna rage muku kuɗi.",
            "Kafin gwaji ko ganin likita, kuna iya tambaya: \"Wannan mai ba da kulawa yana cikin network ɗina?\" \"Kusan nawa zan biya?\" Ku kira lambar da ke kan katin inshorarku. Medicare: ku kira 1-800-MEDICARE (1-800-633-4227), a buɗe yake awa 24 a rana, kwana 7 a sati, sai wasu ranakun hutun gwamnatin tarayya. Tsoffin sojoji za su iya tambayar VA game da haƙƙoƙinsu. Cibiyoyin lafiya na al'umma da yawa suna ba da kulawa da kuɗin da ke daidaita da samun mutum (sliding scale); ku nema a findahealthcenter.hrsa.gov ku tambayi cibiyar game da kuɗi.",
            "Yanzu ku haɗa su. Kayan ganin likitanku su ne takardar ganin likitanku (damuwa da manyan tambayoyi), jerin magungunanku, katin inshora da katin shaida, da alƙalami ko waya don rubutu. Bayan ganawar, ku rubuta shirin da kalmominku."
          ],
          steps: ["Ku koyi kalmomi huɗu: premium, deductible, copay, in-network.", "Kafin kulawa, ku tambayi ko mai ba da kulawar yana cikin network ɗinku da abin da za ku iya biya.", "Ku kira lambar da ke kan katinku, ko 1-800-MEDICARE don Medicare.", "Ku haɗa kayan ganin likitanku: takardar ganin likita, jerin magunguna, kati, katin shaida, rubutu.", "Bayan ganawar, ku rubuta shirin da kalmominku."],
          words: [["Premium", "abin da kuke biya don tsarin inshorar lafiyarku, yawanci kowane wata."], ["Deductible", "abin da kuke biya don kulawar da inshora ke rufewa kafin tsarinku ya fara biya."], ["Copay", "adadin dala ƙayyadadde da kuke biya don hidimar da inshora ke rufewa."], ["In-network", "masu ba da kulawa da ke da yarjejeniya da tsarinku; yawanci suna rage muku kuɗi."]],
          slides: [
            { title: "Kalmomin inshora huɗu", bullets: ["Premium: abin da kuke biya don tsarin, sau da yawa kowane wata", "Deductible: abin da kuke biya kafin tsarin ya biya", "Copay: adadi ƙayyadadde don kowace hidima", "In-network: masu yarjejeniya da tsarinku, yawanci sun fi araha"] },
            { title: "Ku tambaya kafin ku je", bullets: ["\"Wannan mai ba da kulawa yana cikin network ɗina?\"", "\"Kusan nawa zan biya?\"", "Ku kira lambar da ke kan katinku"] },
            { title: "Inda za ku tambaya", bullets: ["Medicare: 1-800-633-4227, awa 24, kwana 7", "Tsoffin sojoji: ku tambayi VA", "Cibiyoyin lafiya na al'umma: findahealthcenter.hrsa.gov"] },
            { title: "Kayan ganin likitanku", bullets: ["Takardar ganin likita da jerin magunguna", "Katin inshora da katin shaida", "Rubutu; ku rubuta shirin bayan ganawar"] }
          ],
          sources: [
            { name: "HealthCare.gov Glossary: Deductible", url: "https://www.healthcare.gov/glossary/deductible/" },
            { name: "HealthCare.gov Glossary: Copayment", url: "https://www.healthcare.gov/glossary/co-payment/" },
            { name: "Medicare.gov: Talk to Someone", url: "https://www.medicare.gov/talk-to-someone" },
            { name: "HRSA: Find a Health Center", url: "https://findahealthcenter.hrsa.gov/" }
          ],
          tryIt: "Aikin ƙarshe: ku kammala takardar ganin likitanku mai shafi ɗaya da damuwarku, manyan tambayoyinku uku da cikakken jerin magungunanku. Bayan ganawa ta gaske, ko gwaji da aboki da ke yin kamar likita, ku rubuta shirin da kalmominku: babbar matsalar, abin da za a yi, da dalilin haka.",
          youCanNow: "bayyana kalmomin inshora da aka saba ji, tambaya game da kuɗi kafin kulawa, da zuwa da cikakkun kayan ganin likita a kowace ganawa.",
          quickCheck: [
            { objective: "O6", q: "Mene ne ma'anar \"in-network\"?", options: ["Mai ba da kulawar yana kan kafofin sada zumunta", "Mai ba da kulawar yana unguwarku", "Mai ba da kulawar kyauta ne", "Mai ba da kulawar yana da yarjejeniya da tsarinku kuma yawanci yana rage muku kuɗi"], answer: 3, why: "Masu ba da kulawa na in-network suna da yarjejeniya da tsarinku." },
            { objective: "O6", q: "Ba ku tabbata nawa ganin likita zai ci muku ba. Me za ku yi?", options: ["Ku tambayi tsarin inshorarku ko ofishin game da kuɗi kafin ganawar", "Ku ƙi zuwa", "Ku yi tsammani ku yi fata", "Ku tambayi baƙo a intanet"], answer: 0, why: "Tsarin inshorarku ko ofishin za su iya faɗa muku kuɗin tun da wuri." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Amfani da bayanan lafiyarku",
        questions: [
          { objective: "O4", q: "Kafin ku sha magani, ya kamata ku:", options: ["Dogara da tunaninku", "Karanta takardar kowane lokaci", "Yi tsammanin yawan sha", "Sha ƙwayar aboki"], answer: 1, why: "Karanta takardar kowane lokaci yana hana kurakurai." },
          { objective: "O4", q: "Kuna son daina maganin da likita ya rubuta saboda wata illa. Me za ku fara yi?", options: ["Ku daina shi nan take", "Ku ninka yawan sha", "Ku ba wa aboki", "Ku tambayi likitanku ko mai harhaɗa magunguna"], answer: 3, why: "Kada ku taɓa dainawa ko canja maganin da likita ya rubuta ba tare da tambaya tukuna ba." },
          { objective: "O5", q: "Mene ne shafin marasa lafiya?", options: ["Shafin intanet ko manhaja mai tsaro don ganin bayananku da tura saƙo ga ƙungiyar masu kula da ku", "Ƙofar asibiti", "Ƙungiya a kafofin sada zumunta", "Takardar rangwamen kantin magani"], answer: 0, why: "Shafuka suna nuna sakamako kuma suna bar ku tura saƙo ga ƙungiyarku." },
          { objective: "O5", q: "An yi wa sakamakon gwaji alamar \"high\" (mai yawa) a shafinku. Mene ne mataki mafi kyau na gaba?", options: ["Ku firgita", "Ku canja maganinku da kanku", "Ku rubuta tambayoyinku ku tambayi mai ba ku kulawa abin da yake nufi a gare ku", "Ku yi watsi da shi har abada"], answer: 2, why: "Mai yawa ko ƙasa ba koyaushe matsala ba ne; mai ba ku kulawa ne zai bayyana abin da yake nufi a gare ku." },
          { objective: "O6", q: "Mene ne deductible?", options: ["Adadi ƙayyadadde don kowace ganawa", "Kuɗin tsarin inshorarku na kowane wata", "Takardar rangwame", "Abin da kuke biya don kulawar da inshora ke rufewa kafin tsarinku ya fara biya"], answer: 3, why: "HealthCare.gov ya bayyana deductible a matsayin abin da kuke biya kafin tsarinku ya fara biya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Ilimin Lafiya: Fahimtar Kulawar Lafiyarku",
    questions: [
      { objective: "O1", q: "Ilimin lafiya yana nufin:", options: ["Zama likita", "Iya nemowa, fahimta da amfani da bayanan lafiya", "Karatu da sauri", "Sanin kowace kalmar likitanci"], answer: 1, why: "Ƙwarewa ce ta nemowa, fahimta da amfani da bayanan lafiya." },
      { objective: "O1", q: "Shafukan gwamnatin Amurka na hukuma suna ƙarewa da:", options: [".gov", ".shop", ".win", ".xyz"], answer: 0, why: "Shafukan .gov kamar medlineplus.gov da cdc.gov na hukuma ne." },
      { objective: "O1", q: "Wace tambaya ce ke taimaka muku ku auna shafin lafiya?", options: ["Yana da launuka masu kyau?", "Yana da tallace-tallace da yawa?", "Yaushe aka sabunta shi na ƙarshe?", "Yana da tsawo?"], answer: 2, why: "Tsohon bayani yana iya zama ba daidai ba; ku duba ranar sabuntawa." },
      { objective: "O1", q: "Mataimakin AI ya bayyana wata kalmar likitanci. Me ya kamata ku yi?", options: ["Ku rubuta lambar inshorarku don samun amsa mafi kyau", "Ku canja maganinku bisa abin da ya faɗa", "Ku raba shi a matsayin gaskiya", "Ku tabbatar da shi a shafi amintacce ku tambayi mai ba ku kulawa"], answer: 3, why: "AI yana iya yin kuskure; ku tabbatar, kuma ku bar mai ba ku kulawa ya sami kalmar ƙarshe." },
      { objective: "O2", q: "Me ya kamata ya kasance a takardar ganin likita?", options: ["Manyan tambayoyinku uku", "Kalmar sirrin bankinku", "Jerin cefane", "Babu komai"], answer: 0, why: "Rubuta tambayoyi tun farko yana tabbatar da cewa an amsa mafi muhimmanci." },
      { objective: "O2", q: "Kuna buƙatar mai fassara a wurin likita. Yaushe za ku nema?", options: ["Ba za ku taɓa nema ba", "Bayan ganawar", "Tun da wuri, lokacin da kuke yin ajiyar ganawa", "Sai idan likita ya yi tayi"], answer: 2, why: "Nema tun da wuri yana bar ofishin ya shirya mai fassara." },
      { objective: "O2", q: "Wanne ne ya fi bayyana alamar rashin lafiya da kyau?", options: ["\"Ba na jin daɗi.\"", "\"Ciwo mai tsanani a gwiwa na sati 2, yana ƙaruwa a matakala, yana sauƙi idan na huta.\"", "\"Wani abu ba daidai ba.\"", "\"Kamar koyaushe.\""], answer: 1, why: "Yana faɗin mece ce, har tsawon wane lokaci, da abin da ke sa ta yi sauƙi ko ta tsananta." },
      { objective: "O2", q: "Wa za ku iya zuwa da shi wurin likita don ya taimaka?", options: ["Ba a taɓa barin kowa ba", "Lauya kawai", "Yaro ƙasa da shekara 5 kawai", "Aboki ko ɗan iyali amintacce da zai rubuta abubuwa"], answer: 3, why: "Mai taimako zai iya saurara ya rubuta abubuwa." },
      { objective: "O3", q: "Wace ce ɗaya daga cikin muhimman tambayoyi uku da za a yi wurin likita?", options: ["Me ya kamata in yi?", "Wace mota kake tuƙawa?", "Shekarun wannan gini nawa?", "Zan iya tsallake ganin biyo baya?"], answer: 0, why: "Babbar matsala, abin da za a yi da dalili: waɗannan uku suna rufe yawancin ganawa." },
      { objective: "O3", q: "Likita yana magana da sauri sosai. Kuna iya cewa:", options: ["Babu komai", "\"Zan gane shi daga baya.\"", "\"Za ka iya rage gudu ka rubuta mini wannan?\"", "\"Ba komai.\""], answer: 2, why: "Neman ya rage gudu ko ya rubuta haƙƙinku ne." },
      { objective: "O3", q: "Faɗin shirin da kalmominku ana kiransa:", options: ["Sake cika magani (refill)", "Teach-back", "Deductible", "Copay"], answer: 1, why: "Teach-back yana tabbatar da fahimtarku kafin ku tafi." },
      { objective: "O3", q: "Kafin ku bar wurin likita, ya kamata ku kuma tambayi:", options: ["Babu komai", "Inda wurin cin abinci yake", "Samfurorin magani kyauta kawai", "Yadda za ku tuntuɓi ofishin da abin da za ku yi idan abubuwa suka tsananta"], answer: 3, why: "Sanin yadda za ku tuntuɓe su da lokacin kira yana kiyaye ku." },
      { objective: "O4", q: "Wane ne ƙwararre kan magungunanku da ake tambaya kyauta?", options: ["Fitaccen mutum a kafofin sada zumunta", "Tallar intanet", "Mai harhaɗa magungunanku", "Baƙo a tashar mota"], answer: 2, why: "Masu harhaɗa magunguna suna amsa tambayoyi game da magani ba tare da biya ba." },
      { objective: "O4", q: "\"Dose\" yana nufin:", options: ["Adadin maganin da za a sha a lokaci ɗaya", "Farashin magani", "Sunan kantin magani", "Ranar ƙarewar amfani"], answer: 0, why: "Dose shi ne adadin da ake sha a kowane lokaci." },
      { objective: "O4", q: "Wace tambaya ya kamata ku yi wa mai harhaɗa magunguna game da sabon magani?", options: ["Wane launi kwalbar take?", "Zan iya raba shi da iyalina?", "Zan iya daina duk lokacin da nake so?", "Yana da lafiya tare da sauran magungunana da ƙarin abinci?"], answer: 3, why: "Magunguna da ƙarin abinci suna iya shafar juna." },
      { objective: "O5", q: "\"Reference range\" a sakamakon gwaji shi ne:", options: ["Lambar wayar likitanku", "Iyakar sakamakon da aka saba gani ga yawancin mutane masu lafiya", "Farashin gwajin", "Wani nau'in inshora"], answer: 1, why: "Ana nuna lambarku kusa da iyakar da aka saba gani." },
      { objective: "O5", q: "Ta yaya za ku kiyaye shafin marasa lafiyarku?", options: ["Ku yi amfani da kalmar sirri mai ƙarfi ku fita daga asusu a kwamfutocin da ake rabawa", "Ku raba kalmar sirrinku da abokai", "Ku rubuta kalmar sirri a kan allo", "Ku bar asusun a buɗe a ɗakin karatu"], answer: 0, why: "Kalmar sirri mai ƙarfi ta sirri da fita daga asusu suna kare bayananku." },
      { objective: "O6", q: "Mene ne copay?", options: ["Kuɗin tsarin inshorarku na kowane wata", "Ganin likita kyauta", "Adadin dala ƙayyadadde da kuke biya don hidimar da inshora ke rufewa", "Takardar magani"], answer: 2, why: "HealthCare.gov ya bayyana copay a matsayin adadi ƙayyadadde don hidimar da inshora ke rufewa." },
      { objective: "O6", q: "A ina mai Medicare zai iya kira da tambayoyi?", options: ["911", "411", "Kowace lamba daga saƙon tes", "1-800-MEDICARE (1-800-633-4227)"], answer: 3, why: "1-800-MEDICARE ita ce lambar Medicare ta hukuma." },
      { objective: "O6", q: "Masu ba da kulawa na \"in-network\":", options: ["Ba sa taɓa karɓar inshora", "Suna da yarjejeniya da tsarinku kuma yawanci suna rage muku kuɗi", "Suna aiki ta intanet kawai", "Koyaushe kyauta ne"], answer: 1, why: "Masu ba da kulawa na in-network suna da yarjejeniya da tsarinku, wanda yawanci yake rage kuɗinku." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      2,
      4,
      6,
      10,
      12,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Rubutun alamar rashin lafiya",
        objective: "O2",
        notYet: "Damuwar ba ta da sarari, ko babu lokacin da ta fara.",
        meets: "Yana faɗin mece ce damuwar, lokacin da ta fara da abin da ke sa ta yi sauƙi ko ta tsananta.",
        exceeds: "Yana kuma faɗin yadda take shafar rayuwar yau da kullum."
      },
      {
        name: "Manyan tambayoyi uku",
        objective: "O3",
        notYet: "Tambayoyi ƙasa da uku, ko ba su da sarari.",
        meets: "Tambayoyi uku masu sarari, mafi muhimmanci a farko.",
        exceeds: "Ya haɗa da muhimman tambayoyi uku: matsalar, abin da za a yi da dalili."
      },
      {
        name: "Jerin magunguna",
        objective: "O4",
        notYet: "Babu magungunan kanti, bitamin, ƙarin abinci ko abubuwan da ba sa yi wa mutum.",
        meets: "Kowane maganin likita, maganin kanti, bitamin, ƙarin abinci da abin da ba ya yi wa mutum, tare da yawan sha da sau nawa.",
        exceeds: "Yana kuma jera abin da kowanne yake yi da tambaya ga mai harhaɗa magunguna."
      },
      {
        name: "Shirin da kalmominku",
        objective: "O3",
        notYet: "Babu shirin, ko an kwafi kalmomin likita ba tare da fahimta ba.",
        meets: "Yana faɗin babbar matsalar, abin da za a yi da dalili, da kalmomin mai koyo.",
        exceeds: "Yana kuma faɗin yadda za a tuntuɓi ofishin da abin da za a yi idan abubuwa suka tsananta."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka zo da takardar ganin likita ko jerin magunguna a ganawa ta gaske cikin kwanaki 60 (binciken biyo baya)",
      "Masu koyo da suka ce sun yi amfani da teach-back ko sun yi tambayar da ba za su yi a da ba",
      "Masu koyo da suka yi rajista ko suka yi amfani da shafin marasa lafiya cikin kwanaki 60",
      "Masu koyo da suka fara wani kwas na Koach Learn game da lafiya ko ƙwarewar rayuwa cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Takarda da alƙalami ko rubutu a waya don takardar ganin likita",
      "Takardun magani ɗaya, bitamin ko ƙarin abinci",
      "Waya ko kwamfuta mai intanet don medlineplus.gov da shafin marasa lafiya, idan mai koyo yana da shi",
      "Kusan minti 60 gaba ɗaya"
    ],
    facilitatorNotes: [
      "Ku tunatar da masu koyo a farko cewa wannan kwas yana koyar da ƙwarewa kuma ba ya ba da shawarar likita.",
      "Ku yi amfani da damuwar gwaji da samfurin takardun magani a aji; masu koyo ba sa buƙatar raba bayanan lafiyarsu.",
      "Ku yi atisayen teach-back bibbiyu, inda mai koyo ɗaya zai karanta samfurin umarni a matsayin likita.",
      "Ku taimaka wa masu koyo da ke buƙatar mai fassara su koyi yadda ake nema lokacin da suke yin ajiyar ganawa.",
      "Ku ba da maki ga takardar ganin likita da shirin da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

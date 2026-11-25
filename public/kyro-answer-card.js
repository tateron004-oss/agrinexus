// Kyro help specs: what Kyro can really do for work, learning, health, the farm and trade, in a few plain words, and the sentences to say for each. A plain "open health" (or "open the farm", "open work"...)
// shows this as ONE screen of text (public/kyro-result-screen.js, helpModel), not a menu: there is nothing to tap. The same sentences are what you can say or type to get the answer on the screen.
//
//   workSpec / learnSpec / healthSpec / farmSpec / tradeSpec ({ roles, lang }) -> { id, title, lines, choices: [{ id, label, say, tool? }] }      (pure; no DOM)
//   specFor(workspace, options), isGeneralFor(workspace, text)
//
// Honest by design: Kyro cannot search live job listings, so the work help says so and lists what it can really do (make a CV, practise an interview, learn to read or count). The roles named
// are only the short list loaded on the platform, said as that, never as vacancies.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroAnswerCard = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const TEXT = {
    en: {
      title: "Work",
      noSearch: "I can't search live job listings, so I won't guess what is open near you.",
      roles: roles => `Roles loaded on Kyro: ${roles.join(", ")}.`,
      cv: "Make my CV", interview: "Practise a job interview", letters: "Learn to read or count",
      cvSay: "Make my CV", interviewSay: "Give me a practice interview", lettersSay: "Teach me letters",
      learnTitle: "Learn",
      learnLine: "I teach short practice lessons by voice, one small step at a time. They are not certified courses, and nothing is enrolled or certified.",
      learnLetters: "Learn the letters", learnLettersSay: "Teach me letters",
      learnMaths: "Learn numbers and adding", learnMathsSay: "Teach me maths",
      learnAi: "AI basics for small business", learnAiSay: "Start the AI basics course",
      healthTitle: "Health",
      healthLine: "I record what you tell me and help you get ready for a visit. I do not diagnose or give treatment advice.",
      healthSay: "To save a reading, just say it, for example: my blood pressure is 120 over 80.",
      healthEmergency: "In an emergency, call your local emergency number now.",
      healthReadings: "My readings", healthReadingsSay: "Show my blood pressure readings",
      healthSummary: "Summary for my provider", healthSummarySay: "Prepare a provider summary of my readings",
      healthClinic: "Find a clinic", healthClinicSay: "Find a clinic near me",
      healthPharmacy: "Find a pharmacy", healthPharmacySay: "Find a pharmacy near me",
      healthNumber: "Emergency number", healthNumberSay: "What is the emergency number?",
      farmTitle: "Farm",
      farmLine: "I keep your farm records and give general crop guidance. I do not name a spray or a dose.",
      farmSay: "To log something, just say it, for example: it rained 12 mm, or I harvested 50 kg of maize.",
      farmProblem: "For a crop problem, tell me what you see.",
      farmLog: "My farm log", farmLogSay: "Show my farm log",
      farmRain: "Rain this month", farmRainSay: "How much rain did I get this month?",
      farmMonth: "This month's money", farmMonthSay: "Give me my summary for this month",
      tradeTitle: "Trade",
      tradeLine: "I keep a community board where you can post what you have for sale, and your buyers' orders. I do not take payments, buy anything or arrange delivery from here.",
      tradeSell: "To sell something, say: post for sale: 500 kg of maize at 40 per kg.",
      tradeOrder: "To note a buyer's order, say: add an order from Amina Traders for 200 kg of maize at 45 per kg.",
      tradeBoard: "What is for sale", tradeBoardSay: "What is for sale?",
      tradeListings: "My listings", tradeListingsSay: "Show my listings",
      tradeOrders: "My orders", tradeOrdersSay: "Show my orders",
      opsTitle: "Operations",
      opsLine: "I can write down a field or drone job as a request for you to look over before anything happens.",
      opsNot: "I do not fly a drone, control an aircraft or send anyone out.",
      commsTitle: "Messages",
      commsLine: "I can help you write a text, a WhatsApp message or an email, and I ask for your clear yes before anything is sent.",
      commsNot: "Nothing is sent without your yes, and sending only works for a service that is connected.",
      close: "Close"
    },
    sw: {
      title: "Kazi",
      noSearch: "Siwezi kutafuta orodha za kazi za moja kwa moja, kwa hivyo sitakisia ni zipi zipo karibu nawe.",
      roles: roles => `Kazi zilizopakiwa kwenye Kyro: ${roles.join(", ")}.`,
      cv: "Tengeneza CV yangu", interview: "Fanya mazoezi ya mahojiano", letters: "Jifunze kusoma au kuhesabu",
      cvSay: "Nataka CV", interviewSay: "Nipe mazoezi ya mahojiano", lettersSay: "Nifundishe herufi",
      learnTitle: "Jifunze",
      learnLine: "Ninafundisha masomo mafupi ya mazoezi kwa sauti, hatua ndogo moja baada ya nyingine. Si kozi zenye cheti, na hakuna anayeandikishwa wala kupewa cheti.",
      learnLetters: "Jifunze herufi", learnLettersSay: "Nifundishe herufi",
      learnMaths: "Jifunze namba na kujumlisha", learnMathsSay: "Nifundishe hesabu",
      healthTitle: "Afya",
      healthLine: "Ninarekodi unachoniambia na kukusaidia kujiandaa kwa ziara ya daktari. Sifanyi uchunguzi wala kutoa ushauri wa matibabu.",
      healthSay: "Kuhifadhi kipimo, kitaje tu, kwa mfano: shinikizo langu la damu ni 120 juu ya 80.",
      healthEmergency: "Dharura ikitokea, piga namba ya dharura ya eneo lako sasa.",
      healthReadings: "Vipimo vyangu", healthReadingsSay: "Onyesha vipimo vyangu vya shinikizo la damu",
      healthClinic: "Tafuta kliniki", healthClinicSay: "Tafuta kliniki karibu nami",
      healthNumber: "Namba ya dharura", healthNumberSay: "Nambari ya dharura ni ipi?",
      farmTitle: "Shamba",
      farmLine: "Ninatunza kumbukumbu za shamba lako na kutoa mwongozo wa jumla kuhusu mazao. Sitaji dawa wala kipimo.",
      farmSay: "Kuandika kitu, kisema tu, kwa mfano: nimepata mvua milimita 12, au nimevuna kilo 50 za mahindi.",
      farmProblem: "Kwa tatizo la zao, niambie unachokiona.",
      farmMonth: "Pesa za mwezi huu", farmMonthSay: "muhtasari wa mwezi",
      tradeTitle: "Biashara",
      tradeLine: "Ninatunza ubao wa jamii ambapo unaweza kuweka unachouza, na maagizo ya wanunuzi wako. Sipokei malipo, sinunui chochote wala kupanga usafirishaji kutoka hapa.",
      tradeEnglishOnly: "Ubao wa mauzo na maagizo hufanya kazi kwa Kiingereza kwa sasa.",
      opsTitle: "Shughuli",
      opsLine: "Naweza kuandika kazi ya shambani au ya ndege isiyo na rubani kama ombi ili uliangalie kabla ya jambo lolote kutendeka.",
      opsNot: "Sirushi ndege isiyo na rubani, sidhibiti ndege wala kumtuma mtu.",
      commsTitle: "Ujumbe",
      commsLine: "Naweza kukusaidia kuandika ujumbe wa simu, WhatsApp au barua pepe, na ninaomba ndiyo yako wazi kabla ya kutuma chochote.",
      commsNot: "Hakuna kinachotumwa bila ndiyo yako, na kutuma kunafanya kazi tu kwa huduma iliyounganishwa.",
      close: "Funga"
    },
    ha: { title: "Aiki", noSearch: "Ba zan iya bincika jerin ayyukan da ake samu yanzu ba, don haka ba zan yi hasashen abin da ke akwai kusa da kai ba.", roles: roles => `Ayyukan da ke cikin Kyro: ${roles.join(", ")}.`, cv: "Yi mini CV", interview: "Yi gwajin hirar aiki", letters: "Koyi karatu ko ƙirga", cvSay: "Yi mini CV", interviewSay: "Yi mini gwajin hirar aiki", lettersSay: "Koya mini haruffa", learnTitle: "Koyo", learnLine: "Ina koyar da gajerun darussan gwaji ta murya, ɗan mataki ɗaya a lokaci guda. Ba darussan takardar shaida ba ne, kuma ba a yi rajista ko ba da shaida ba.", learnLetters: "Koyi haruffa", learnLettersSay: "Koya mini haruffa", learnMaths: "Koyi lambobi da tarawa", learnMathsSay: "Koya mini lissafi", learnAi: "Tushen AI don ƙaramin kasuwanci", learnAiSay: "Fara darasin tushen AI", healthTitle: "Lafiya", healthLine: "Ina rubuta abin da ka faɗa mini kuma ina taimaka maka ka shirya don ganin likita. Ba na gano cuta ko ba da shawarar magani.", healthSay: "Don ajiye wani awo, kawai faɗe shi, misali: hawan jinina 120 bisa 80 ne.", healthEmergency: "A lokacin gaggawa, kira lambar gaggawa ta yankinku yanzu.", healthReadings: "Awona", healthReadingsSay: "Nuna mini awon hawan jinina", healthSummary: "Taƙaitawa don likitana", healthSummarySay: "Shirya taƙaitaccen awona don likita", healthClinic: "Nemo asibiti", healthClinicSay: "Nemo asibiti kusa da ni", healthPharmacy: "Nemo kantin magani", healthPharmacySay: "Nemo kantin magani kusa da ni", healthNumber: "Lambar gaggawa", healthNumberSay: "Mene ne lambar gaggawa?", farmTitle: "Gona", farmLine: "Ina ajiye bayanan gonarka kuma ina ba da shawara ta gaba ɗaya kan amfanin gona. Ba na faɗin sunan maganin feshi ko yawansa.", farmSay: "Don rubuta wani abu, kawai faɗe shi, misali: an yi ruwan sama 12 mm, ko na girbe masara kg 50.", farmProblem: "Idan amfanin gona na da matsala, faɗa mini abin da kake gani.", farmLog: "Littafin gonata", farmLogSay: "Nuna mini littafin gonata", farmRain: "Ruwan sama na wannan wata", farmRainSay: "Ruwan sama nawa na samu a wannan wata?", farmMonth: "Kuɗin wannan wata", farmMonthSay: "Ba ni taƙaitawa ta wannan wata", tradeTitle: "Kasuwanci", tradeLine: "Ina riƙe allon al'umma inda za ka saka abin da kake sayarwa, da odar masu saya. Ba na karɓar kuɗi, ba na sayen komai, kuma ba na shirya isar da kaya daga nan.", tradeSell: "Don sayar da wani abu, ka ce: saka don sayarwa: masara kg 500 a 40 kowane kg.", tradeOrder: "Don rubuta odar mai saya, ka ce: ƙara oda daga Amina Traders ta masara kg 200 a 45 kowane kg.", tradeBoard: "Me ake sayarwa", tradeBoardSay: "Me ake sayarwa?", tradeListings: "Kayana na sayarwa", tradeListingsSay: "Nuna mini kayana na sayarwa", tradeOrders: "Odata", tradeOrdersSay: "Nuna mini odata", opsTitle: "Ayyuka", opsLine: "Zan iya rubuta aikin gona ko na jirgi mara matuƙi a matsayin buƙata don ka duba kafin wani abu ya faru.", opsNot: "Ba na tuƙa jirgi mara matuƙi, ba na sarrafa jirgin sama, kuma ba na tura kowa.", commsTitle: "Saƙonni", commsLine: "Zan iya taimaka maka ka rubuta saƙon tes, saƙon WhatsApp ko imel, kuma ina neman ka ce eh a fili kafin a aika komai.", commsNot: "Ba a aika komai sai ka ce eh, kuma aikawa na aiki ne kawai ga sabis da aka haɗa.", close: "Rufe" },
    am: { title: "ሥራ", noSearch: "የቀጥታ የሥራ ማስታወቂያዎችን መፈለግ አልችልም፣ ስለዚህ በአቅራቢያህ ምን ክፍት እንደሆነ አልገምትም።", roles: roles => `በKyro ላይ ያሉ የሥራ ዓይነቶች፦ ${roles.join(", ")}።`, cv: "CV አዘጋጅልኝ", interview: "የሥራ ቃለ መጠይቅ ልምምድ", letters: "ማንበብ ወይም መቁጠር ተማር", cvSay: "CV አዘጋጅልኝ", interviewSay: "የልምምድ ቃለ መጠይቅ ስጠኝ", lettersSay: "ፊደላትን አስተምረኝ", learnTitle: "ትምህርት", learnLine: "አጫጭር የልምምድ ትምህርቶችን በድምፅ፣ አንድ ትንሽ ደረጃ በአንድ ጊዜ አስተምራለሁ። የተረጋገጡ ኮርሶች አይደሉም፣ ምንም ምዝገባ ወይም ሰርተፍኬት የለም።", learnLetters: "ፊደላትን ተማር", learnLettersSay: "ፊደላትን አስተምረኝ", learnMaths: "ቁጥሮችንና መደመርን ተማር", learnMathsSay: "ሂሳብ አስተምረኝ", learnAi: "ለአነስተኛ ንግድ የAI መሠረታዊ ነገሮች", learnAiSay: "የAI መሠረታዊ ኮርሱን ጀምር", healthTitle: "ጤና", healthLine: "የምትነግረኝን እመዘግባለሁ፣ ለሐኪም ጉብኝት እንድትዘጋጅም እረዳሃለሁ። በሽታ አልመረምርም፣ የሕክምና ምክርም አልሰጥም።", healthSay: "ልኬት ለማስቀመጥ በቃ ተናገር፣ ለምሳሌ፦ የደም ግፊቴ 120 በ80 ነው።", healthEmergency: "በአስቸኳይ ጊዜ፣ የአካባቢህን የአደጋ ጊዜ ቁጥር አሁን ደውል።", healthReadings: "የእኔ ልኬቶች", healthReadingsSay: "የደም ግፊት ልኬቶቼን አሳየኝ", healthSummary: "ለሐኪሜ ማጠቃለያ", healthSummarySay: "የልኬቶቼን ማጠቃለያ ለሐኪም አዘጋጅ", healthClinic: "ክሊኒክ ፈልግ", healthClinicSay: "በአቅራቢያዬ ክሊኒክ ፈልግ", healthPharmacy: "ፋርማሲ ፈልግ", healthPharmacySay: "በአቅራቢያዬ ፋርማሲ ፈልግ", healthNumber: "የአደጋ ጊዜ ቁጥር", healthNumberSay: "የአደጋ ጊዜ ቁጥሩ ስንት ነው?", farmTitle: "እርሻ", farmLine: "የእርሻ መዝገቦችህን እይዛለሁ፣ ስለ ሰብል አጠቃላይ ምክር እሰጣለሁ። የመርጨት መድኃኒት ስም ወይም መጠን አልናገርም።", farmSay: "አንድ ነገር ለመመዝገብ በቃ ተናገር፣ ለምሳሌ፦ 12 ሚሜ ዝናብ ዘነበ፣ ወይም 50 ኪሎ በቆሎ ሰበሰብኩ።", farmProblem: "የሰብል ችግር ካለ፣ የምታየውን ንገረኝ።", farmLog: "የእርሻ መዝገቤ", farmLogSay: "የእርሻ መዝገቤን አሳየኝ", farmRain: "የዚህ ወር ዝናብ", farmRainSay: "በዚህ ወር ምን ያህል ዝናብ አገኘሁ?", farmMonth: "የዚህ ወር ገንዘብ", farmMonthSay: "የዚህን ወር ማጠቃለያ ስጠኝ", tradeTitle: "ንግድ", tradeLine: "የምትሸጠውን የምትለጥፍበት የማኅበረሰብ ሰሌዳ እና የገዢዎችህን ትዕዛዞች እይዛለሁ። ከዚህ ክፍያ አልቀበልም፣ ምንም አልገዛም፣ ማድረስም አላዘጋጅም።", tradeSell: "አንድ ነገር ለመሸጥ እንዲህ በል፦ ለሽያጭ ለጥፍ፦ 500 ኪሎ በቆሎ በኪሎ 40።", tradeOrder: "የገዢን ትዕዛዝ ለመመዝገብ እንዲህ በል፦ ከAmina Traders 200 ኪሎ በቆሎ በኪሎ 45 ትዕዛዝ ጨምር።", tradeBoard: "ለሽያጭ ያለው", tradeBoardSay: "ለሽያጭ ምን አለ?", tradeListings: "የእኔ ማስታወቂያዎች", tradeListingsSay: "ማስታወቂያዎቼን አሳየኝ", tradeOrders: "የእኔ ትዕዛዞች", tradeOrdersSay: "ትዕዛዞቼን አሳየኝ", opsTitle: "ሥራዎች", opsLine: "የመስክ ወይም የድሮን ሥራን እንደ ጥያቄ መጻፍ እችላለሁ፣ ምንም ነገር ከመሆኑ በፊት እንድትመለከተው።", opsNot: "ድሮን አላበርም፣ አውሮፕላን አልቆጣጠርም፣ ማንንም አልልክም።", commsTitle: "መልዕክቶች", commsLine: "የጽሑፍ መልዕክት፣ የWhatsApp መልዕክት ወይም ኢሜይል እንድትጽፍ ልረዳህ እችላለሁ፣ ምንም ከመላኩ በፊት ግልጽ አዎ እንድትል እጠይቃለሁ።", commsNot: "ያለ አንተ አዎ ምንም አይላክም፣ መላክም የሚሠራው ለተገናኘ አገልግሎት ብቻ ነው።", close: "ዝጋ" },
    yo: { title: "Iṣẹ́", noSearch: "Mi ò lè wá àwọn iṣẹ́ tó wà lórí ayélujára báyìí, nítorí náà mi ò ní ṣe àmọ̀ràn iṣẹ́ tó ṣí sílẹ̀ nítòsí rẹ.", roles: roles => `Àwọn iṣẹ́ tó wà lórí Kyro: ${roles.join(", ")}.`, cv: "Ṣe CV mi", interview: "Ṣe àdánwò ìfọ̀rọ̀wánilẹ́nuwò iṣẹ́", letters: "Kọ́ láti kà tàbí ṣírò", cvSay: "Ṣe CV mi", interviewSay: "Fún mi ní àdánwò ìfọ̀rọ̀wánilẹ́nuwò", lettersSay: "Kọ́ mi ní àwọn lẹ́tà", learnTitle: "Ẹ̀kọ́", learnLine: "Mo máa ń kọ́ni ní ẹ̀kọ́ kúkúrú pẹ̀lú ohùn, ìgbésẹ̀ kékeré kan lẹ́ẹ̀kan. Wọn kì í ṣe ẹ̀kọ́ tó ní ìwé-ẹ̀rí, kò sì sí ìforúkọsílẹ̀ tàbí ìwé-ẹ̀rí kankan.", learnLetters: "Kọ́ àwọn lẹ́tà", learnLettersSay: "Kọ́ mi ní àwọn lẹ́tà", learnMaths: "Kọ́ àwọn nọ́mbà àti àròpọ̀", learnMathsSay: "Kọ́ mi ní ìṣirò", learnAi: "Ìpìlẹ̀ AI fún iṣẹ́ òwò kékeré", learnAiSay: "Bẹ̀rẹ̀ ẹ̀kọ́ ìpìlẹ̀ AI", healthTitle: "Ìlera", healthLine: "Mo máa ń kọ ohun tí o sọ fún mi sílẹ̀, mo sì ń ràn ọ́ lọ́wọ́ láti múra sílẹ̀ fún ìbẹ̀wò dókítà. Mi kì í ṣàyẹ̀wò àìsàn, mi kì í sì í fúnni ní ìmọ̀ràn ìtọ́jú.", healthSay: "Láti fi ìwọ̀n kan pamọ́, kàn sọ ọ́, fún àpẹẹrẹ: ẹ̀jẹ̀ ríru mi jẹ́ 120 lórí 80.", healthEmergency: "Ní ìgbà pàjáwìrì, pe nọ́mbà pàjáwìrì àdúgbò rẹ báyìí.", healthReadings: "Àwọn ìwọ̀n mi", healthReadingsSay: "Fi àwọn ìwọ̀n ẹ̀jẹ̀ ríru mi hàn mí", healthSummary: "Àkópọ̀ fún dókítà mi", healthSummarySay: "Ṣètò àkópọ̀ àwọn ìwọ̀n mi fún dókítà", healthClinic: "Wá ilé ìwòsàn", healthClinicSay: "Wá ilé ìwòsàn nítòsí mi", healthPharmacy: "Wá ilé oògùn", healthPharmacySay: "Wá ilé oògùn nítòsí mi", healthNumber: "Nọ́mbà pàjáwìrì", healthNumberSay: "Kí ni nọ́mbà pàjáwìrì?", farmTitle: "Oko", farmLine: "Mo máa ń tọ́jú àkọsílẹ̀ oko rẹ, mo sì ń fúnni ní ìmọ̀ràn gbogbogbò nípa ohun ọ̀gbìn. Mi kì í dárúkọ oògùn ìfọ́nká tàbí ìwọ̀n rẹ̀.", farmSay: "Láti kọ nǹkan sílẹ̀, kàn sọ ọ́, fún àpẹẹrẹ: òjò rọ̀ 12 mm, tàbí mo kórè àgbàdo 50 kg.", farmProblem: "Tí ìṣòro bá wà pẹ̀lú ohun ọ̀gbìn, sọ ohun tí o rí fún mi.", farmLog: "Àkọsílẹ̀ oko mi", farmLogSay: "Fi àkọsílẹ̀ oko mi hàn mí", farmRain: "Òjò oṣù yìí", farmRainSay: "Òjò mélòó ni mo rí ní oṣù yìí?", farmMonth: "Owó oṣù yìí", farmMonthSay: "Fún mi ní àkópọ̀ oṣù yìí", tradeTitle: "Òwò", tradeLine: "Mo ní pátákó àwùjọ níbi tí o ti lè fi ohun tí o ń tà síta, àti àwọn àṣẹ àwọn olùrà rẹ. Mi kì í gba owó, mi kì í ra nǹkankan, mi kì í sì í ṣètò ìfiránṣẹ́ láti ibí.", tradeSell: "Láti ta nǹkan, sọ pé: fi síta fún títà: àgbàdo 500 kg ní 40 fún kg kan.", tradeOrder: "Láti kọ àṣẹ olùrà sílẹ̀, sọ pé: fi àṣẹ kún un láti Amina Traders fún àgbàdo 200 kg ní 45 fún kg kan.", tradeBoard: "Ohun tí wọ́n ń tà", tradeBoardSay: "Kí ni wọ́n ń tà?", tradeListings: "Àwọn ọjà mi", tradeListingsSay: "Fi àwọn ọjà mi hàn mí", tradeOrders: "Àwọn àṣẹ mi", tradeOrdersSay: "Fi àwọn àṣẹ mi hàn mí", opsTitle: "Àwọn iṣẹ́", opsLine: "Mo lè kọ iṣẹ́ oko tàbí iṣẹ́ drone sílẹ̀ gẹ́gẹ́ bí ìbéèrè kí o lè wò ó kí ohunkóhun tó ṣẹlẹ̀.", opsNot: "Mi kì í fò drone, mi kì í darí ọkọ̀ òfurufú, mi kì í sì í rán ẹnikẹ́ni jáde.", commsTitle: "Àwọn ìfiránṣẹ́", commsLine: "Mo lè ràn ọ́ lọ́wọ́ láti kọ ọ̀rọ̀ tẹ́ẹ̀sì, ìfiránṣẹ́ WhatsApp tàbí ímeèlì, mo sì máa ń béèrè fún bẹ́ẹ̀ni rẹ tó ṣe kedere kí ohunkóhun tó lọ.", commsNot: "Kò sí ohun tí a ó fi ránṣẹ́ láìsí bẹ́ẹ̀ni rẹ, fífiránṣẹ́ sì ń ṣiṣẹ́ fún iṣẹ́ tí a ti so pọ̀ nìkan.", close: "Pa á dé" },
    ig: { title: "Ọrụ", noSearch: "Enweghị m ike ịchọ ọrụ ndị dị ugbu a n'ịntanetị, ya mere agaghị m ịkọ ọrụ dị nso gị.", roles: roles => `Ọrụ ndị dị na Kyro: ${roles.join(", ")}.`, cv: "Mee CV m", interview: "Mee mmega ajụjụ ọnụ ọrụ", letters: "Mụta ịgụ akwụkwọ ma ọ bụ ịgụ ọnụọgụ", cvSay: "Mee CV m", interviewSay: "Nye m mmega ajụjụ ọnụ", lettersSay: "Kụziere m mkpụrụedemede", learnTitle: "Mmụta", learnLine: "M na-akụzi obere ihe mmụta site n'olu, otu obere nzọụkwụ n'otu oge. Ha abụghị nkuzi nwere asambodo, ọ dịghịkwa ndebanye aha ma ọ bụ asambodo ọ bụla.", learnLetters: "Mụta mkpụrụedemede", learnLettersSay: "Kụziere m mkpụrụedemede", learnMaths: "Mụta ọnụọgụ na mgbakọ", learnMathsSay: "Kụziere m mgbakọ na mwepụ", learnAi: "Ihe ndabere AI maka obere azụmahịa", learnAiSay: "Malite nkuzi ihe ndabere AI", healthTitle: "Ahụike", healthLine: "M na-edeba ihe ị gwara m ma nyere gị aka ịkwado maka ịga hụ dọkịta. Anaghị m achọpụta ọrịa ma ọ bụ nye ndụmọdụ ọgwụgwọ.", healthSay: "Iji chekwaa ọgụgụ, kwuo ya, dịka ọmụmaatụ: ọbara mgbali m bụ 120 n'elu 80.", healthEmergency: "N'oge mberede, kpọọ nọmba mberede mpaghara gị ugbu a.", healthReadings: "Ọgụgụ m", healthReadingsSay: "Gosi m ọgụgụ ọbara mgbali m", healthSummary: "Nchịkọta maka dọkịta m", healthSummarySay: "Kwadebe nchịkọta ọgụgụ m maka dọkịta", healthClinic: "Chọta ụlọ ọgwụ", healthClinicSay: "Chọta ụlọ ọgwụ dị nso m", healthPharmacy: "Chọta ụlọ ahịa ọgwụ", healthPharmacySay: "Chọta ụlọ ahịa ọgwụ dị nso m", healthNumber: "Nọmba mberede", healthNumberSay: "Gịnị bụ nọmba mberede?", farmTitle: "Ugbo", farmLine: "M na-edebe ndekọ ugbo gị ma na-enye ndụmọdụ izugbe gbasara ihe ọkụkụ. Anaghị m akpọ aha ọgwụ a na-afụ ma ọ bụ ole a ga-eji.", farmSay: "Iji dee ihe, kwuo ya, dịka ọmụmaatụ: mmiri zoro 12 mm, ma ọ bụ m ghọrọ ọka 50 kg.", farmProblem: "Maka nsogbu ihe ọkụkụ, gwa m ihe ị na-ahụ.", farmLog: "Ndekọ ugbo m", farmLogSay: "Gosi m ndekọ ugbo m", farmRain: "Mmiri ozuzo ọnwa a", farmRainSay: "Mmiri ozuzo ole ka m nwetara n'ọnwa a?", farmMonth: "Ego ọnwa a", farmMonthSay: "Nye m nchịkọta m maka ọnwa a", tradeTitle: "Ahịa", tradeLine: "M na-edebe bọọdụ obodo ebe ị nwere ike itinye ihe ị na-ere, na iwu ndị na-azụrụ gị ihe. Anaghị m anata ego, anaghị m azụ ihe ọ bụla, anaghịkwa m ahazi nnyefe site ebe a.", tradeSell: "Iji ree ihe, kwuo: tinye maka ire: ọka 500 kg na 40 kwa kg.", tradeOrder: "Iji dee iwu onye na-azụ, kwuo: tinye iwu sitere na Amina Traders maka ọka 200 kg na 45 kwa kg.", tradeBoard: "Ihe a na-ere", tradeBoardSay: "Gịnị ka a na-ere?", tradeListings: "Ihe m na-ere", tradeListingsSay: "Gosi m ihe m na-ere", tradeOrders: "Iwu m", tradeOrdersSay: "Gosi m iwu m", opsTitle: "Ọrụ nhazi", opsLine: "Enwere m ike ide ọrụ ubi ma ọ bụ ọrụ drone dịka arịrịọ ka ị lelee ya tupu ihe ọ bụla emee.", opsNot: "Anaghị m efe drone, anaghị m achịkwa ụgbọelu, anaghịkwa m eziga onye ọ bụla.", commsTitle: "Ozi", commsLine: "Enwere m ike inyere gị aka ide ozi ederede, ozi WhatsApp ma ọ bụ email, m na-arịọkwa ka ị kwuo ee nke ọma tupu e zipu ihe ọ bụla.", commsNot: "Ọ dịghị ihe a na-ezipu na-enweghị ee gị, izipu na-arụ ọrụ naanị maka ọrụ ejikọrọ.", close: "Mechie" }
  };

  function workSpec({ roles, lang } = {}) {
    const t = TEXT[TEXT[lang] ? lang : "en"];
    const titles = Array.from(new Set((Array.isArray(roles) ? roles : []).map(role => String(typeof role === "string" ? role : (role && role.title) || "").trim()).filter(Boolean))).slice(0, 6);
    return {
      id: "work", title: t.title, closeLabel: t.close,
      lines: [t.noSearch].concat(titles.length ? [t.roles(titles)] : []),
      choices: [
        { id: "cv", label: t.cv, say: t.cvSay },
        { id: "interview", label: t.interview, say: t.interviewSay },
        { id: "letters", label: t.letters, say: t.lettersSay }
      ]
    };
  }

  // Learn: the short practice lessons Kyro really has (letters; counting, adding and taking away) and the AI basics course for a small business (English only for now).
  function learnSpec({ lang } = {}) {
    const sw = lang === "sw";
    const t = TEXT[TEXT[lang] ? lang : "en"];
    const choices = [
      { id: "letters", label: t.learnLetters, say: t.learnLettersSay },
      { id: "maths", label: t.learnMaths, say: t.learnMathsSay }
    ];
    if (!sw) choices.push({ id: "ai-basics", label: t.learnAi, say: t.learnAiSay });
    return { id: "learning", title: t.learnTitle, closeLabel: t.close, lines: [t.learnLine], choices };
  }

  // Health: what Kyro really does (records readings after a yes, shows them, prepares a summary for a provider, finds a clinic or pharmacy, says the local emergency number) and what it does not
  // (diagnose, advise on treatment). Each choice names the route that answers it: `tool` is the voice tool that holds the answer (readings and the emergency number are on the everyday route).
  function healthSpec({ lang } = {}) {
    const sw = lang === "sw";
    const t = TEXT[TEXT[lang] ? lang : "en"];
    const choices = [{ id: "readings", label: t.healthReadings, say: t.healthReadingsSay, tool: "nexus_everyday_records" }];
    if (!sw) choices.push({ id: "summary", label: t.healthSummary, say: t.healthSummarySay, tool: "nexus_health_preparation" });
    choices.push({ id: "clinic", label: t.healthClinic, say: t.healthClinicSay, tool: "nexus_health_preparation" });
    if (!sw) choices.push({ id: "pharmacy", label: t.healthPharmacy, say: t.healthPharmacySay, tool: "nexus_health_preparation" });
    choices.push({ id: "emergency-number", label: t.healthNumber, say: t.healthNumberSay, tool: "nexus_everyday_records" });
    return { id: "health", title: t.healthTitle, closeLabel: t.close, lines: [t.healthLine, t.healthSay, t.healthEmergency], choices };
  }

  // A health request that names something specific (a reading, a visit, a clinic, a symptom) has its own flow and is not answered with the general card.
  const HEALTH_SPECIFIC = /telehealth|tele-health|virtual|video visit|intake|doctor|nurse|appointment|\bvisit\b|blood[\s-]?pressure|hypertension|\bbp\b|sugar|glucose|diabetes|obesity|\brpm\b|\brtm\b|pulse|oxygen|\bweight\b|medicine|medication|pharmac|clinic|refill|symptom|\bpain\b|fever|emergency|chronic|dawa|kliniki|shinikizo|sukari|dharura|daktari/i;
  function healthIsGeneral(text) { return !HEALTH_SPECIFIC.test(String(text || "")); }

  // Farm: the records Kyro really keeps (the farm log, the rain total, the month's money) and general crop guidance that never names a spray or a dose. Said things are logged by saying them, so they
  // are lines, not buttons; the choices are the reads that answer without the AI model.
  function farmSpec({ lang } = {}) {
    const sw = lang === "sw";
    const t = TEXT[TEXT[lang] ? lang : "en"];
    const choices = sw
      ? [{ id: "month", label: t.farmMonth, say: t.farmMonthSay, tool: "nexus_everyday_records" }]
      : [{ id: "log", label: t.farmLog, say: t.farmLogSay, tool: "nexus_everyday_records" },
         { id: "rain", label: t.farmRain, say: t.farmRainSay, tool: "nexus_everyday_records" },
         { id: "month", label: t.farmMonth, say: t.farmMonthSay, tool: "nexus_everyday_records" }];
    return { id: "agriculture", title: t.farmTitle, closeLabel: t.close, lines: [t.farmLine, t.farmSay, t.farmProblem], choices };
  }

  // A farm request that names something specific (a crop problem, a price, the weather, a thing to log, a sale, a drone) has its own flow and is not answered with the general card.
  const FARM_SPECIFIC = /leaf|leaves|spot|yellow|wilt|blight|rot\b|mould|mold|pest|disease|insect|worm|caterpillar|aphid|locust|armyworm|drone|scan|price|market|sell|\bsold\b|\bsale\b|\bbuy|weather|forecast|\brain|storm|harvest|plant(ed|ing)?\b|sow|\blog\b|record|water|irrigat|soil|fertili[sz]|manure|tank|egg|milk|\bcow|goat|chicken|sheep|loan|budget|expense|income|\bpaid\b|\bowe|mvua|mavuno|mbolea|shamba la|ugonjwa|wadudu/i;
  function farmIsGeneral(text) { return !FARM_SPECIFIC.test(String(text || "")); }

  // Trade: the community board and the buyer orders Kyro really keeps; no payments, purchases or delivery. The board and the orders answer in English today, so the Kiswahili card says so and has no choices.
  function tradeSpec({ lang } = {}) {
    const sw = lang === "sw";
    const t = TEXT[TEXT[lang] ? lang : "en"];
    if (sw) return { id: "trade", title: t.tradeTitle, closeLabel: t.close, lines: [t.tradeLine, t.tradeEnglishOnly], choices: [] };
    return { id: "trade", title: t.tradeTitle, closeLabel: t.close, lines: [t.tradeLine, t.tradeSell, t.tradeOrder], choices: [
      { id: "board", label: t.tradeBoard, say: t.tradeBoardSay, tool: "nexus_everyday_records" },
      { id: "listings", label: t.tradeListings, say: t.tradeListingsSay, tool: "nexus_everyday_records" },
      { id: "orders", label: t.tradeOrders, say: t.tradeOrdersSay, tool: "nexus_everyday_records" }
    ] };
  }

  // A trade request that names something specific (selling or buying something, a price, a shipment, a payment, an order, a crop and an amount) is a real flow of its own and is not answered with the general card.
  const TRADE_SPECIFIC = /sell|\bsold\b|\bbuy|purchase|price|\bship|deliver|track|route|invoice|\bpay|payment|wallet|escrow|checkout|\bpost\b|listing|\border|\bkg\b|\bbags?\b|\btons?\b|maize|coffee|cassava|rice|beans|wheat|tomato|kuuza|nunua|bei|mahindi/i;
  function tradeIsGeneral(text) { return !TRADE_SPECIFIC.test(String(text || "")); }

  // Operations and messages: what each really does, and what it does not (it never flies or sends by itself). Plain lines, nothing to tap.
  function operationsSpec({ lang } = {}) {
    const t = TEXT[TEXT[lang] ? lang : "en"];
    return { id: "operations", title: t.opsTitle, closeLabel: t.close, lines: [t.opsLine, t.opsNot], choices: [] };
  }
  function communicationsSpec({ lang } = {}) {
    const t = TEXT[TEXT[lang] ? lang : "en"];
    return { id: "communications", title: t.commsTitle, closeLabel: t.close, lines: [t.commsLine, t.commsNot], choices: [] };
  }

  // The card for a workspace that has one (null when it does not: the usual window opens).
  function specFor(workspace, options) {
    if (workspace === "workforce") return workSpec(options);
    if (workspace === "learning") return learnSpec(options);
    if (workspace === "health") return healthSpec(options);
    if (workspace === "agriculture") return farmSpec(options);
    if (workspace === "trade") return tradeSpec(options);
    if (workspace === "operations") return operationsSpec(options);
    if (workspace === "communications") return communicationsSpec(options);
    return null;
  }

  // Whether a request to open a workspace is general enough for its card (true for workspaces whose card is always right, false-able for health, farm and trade, which have specific flows of their own).
  function isGeneralFor(workspace, text) {
    if (workspace === "health") return healthIsGeneral(text);
    if (workspace === "agriculture") return farmIsGeneral(text);
    if (workspace === "trade") return tradeIsGeneral(text);
    return true;
  }

  return Object.freeze({ operationsSpec, communicationsSpec, workSpec, learnSpec, healthSpec, healthIsGeneral, farmSpec, farmIsGeneral, tradeSpec, tradeIsGeneral, isGeneralFor, specFor, TEXT });
});

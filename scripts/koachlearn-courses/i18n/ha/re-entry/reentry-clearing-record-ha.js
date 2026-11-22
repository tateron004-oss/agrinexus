"use strict";

// Koach Learn course, Hausa (ha) translation of re-entry/reentry-clearing-record.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "reentry-clearing-record-ha",
  lang: "ha",
  translationOf: "reentry-clearing-record",
  category: "Re-Entry",
  name: "Share Tarihin Laifi: Expungement da Sauƙaƙa Tarihin Laifi",
  skills: "Samun kwafin tarihin laifinku, Fahimtar kalmomin sauƙaƙa tarihin laifi, Neman taimakon shari'a kyauta, Shirya takardun neman sauƙi, Amfani da haƙƙoƙin Fair Chance wajen neman aiki",
  outcome: "samun kwafin tarihin laifinku, ambaci irin sauƙin da zai iya dacewa da shari'o'inku, neman taimakon shari'a kyauta, da haɗa takardun da kuke buƙata don neman sauƙi tare da wannan taimakon.",
  about: [
    "Tarihin laifi (criminal record) yana iya bin ku zuwa hirar neman aiki, neman gidan haya da makaranta. A jihohi da yawa, ciki har da California, doka tana ba mutane hanyoyin share tarihi ko iyakance wanda zai iya ganinsa. Mutane da yawa da suka cancanta ba sa nema, domin babu wanda ya nuna musu yadda ake yi.",
    "Wannan kwas ɗin yana nuna muku yadda ake samun kwafin tarihinku, ma'anar kalmomi kamar expungement, dismissal, sealing da certificate of rehabilitation, bambancin tarihin tarayya (federal) da na jiha, inda za ku sami taimakon shari'a kyauta, yadda ake shirya takardunku, da abin da dokar Fair Chance Act ta California ta faɗa game da tayin aiki. Misalan na California ne, kuma kowane darasi yana faɗin inda za ku duba dokokin jiharku.",
    "Wannan ba shawarar shari'a ba ce. Dokoki sun bambanta a kowace jiha kuma suna canjawa. Ku yi amfani da wannan kwas don shiryawa, sannan ku nemi taimako daga lauya, ofishin taimakon shari'a (legal aid) ko cibiyar taimakon kai ta kotu kafin ku shigar da kowace takarda.",
    "Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin da za ku yi nan take. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku yi shirin aiki na shafi ɗaya don sauƙaƙa tarihin laifi: inda za ku sami tarihinku, kowace shari'a da kuka sani (gunduma/county, shekara, laifi) da irin sauƙin da zai iya dacewa da ita, taimakon shari'a kyauta da za ku fara tuntuɓa, takardun da za ku tattara, da gajeriyar sanarwa ta gaskiya game da gyaran rayuwarku da za ku iya ba mai ɗaukar aiki bayan tayin aiki.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya masu tarihin laifi, da yawa suna dawowa gida daga gidan yari, waɗanda tarihinsu yake hana su aiki, gida ko makaranta. Misalan na California ne, tare da alamun yadda za a duba dokoki a wasu jihohi.",
    startingPoint: "Sun san wasu shari'o'insu daga tunani. Yawancinsu ba su taɓa ganin tarihinsu na hukuma ba, ba su san kalmomin sauƙaƙa tarihin laifi ba, kuma ba su san inda taimakon shari'a kyauta yake ba.",
    gap: "Mutane da yawa da suka cancanci sauƙaƙa tarihin laifi ba sa nema domin babu wanda ya nuna musu yadda ake yi. Masu koyo suna buƙatar samun tarihinsu, ambaci sauƙin da zai iya dacewa, neman taimakon shari'a kyauta da shirya takardunsu, don lauya ko asibitin shari'a (clinic) ya shigar musu, kuma su iya kare haƙƙoƙinsu wajen neman aiki.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 5 zuwa 6)",
      "Na'urori: wayar zamani ko kwamfutar ɗakin karatu mai intanet",
      "Lokaci: darussa na kusan minti 5 da suka dace da aiki da ganawa",
      "Ba shawarar shari'a ba ce: dokoki sun bambanta a jihohi kuma suna canjawa; masu koyo suna neman taimakon lauya, legal aid ko cibiyar taimakon kai ta kotu kafin su shigar da takarda",
      "Sirri: bayanan shari'a ba sa shiga kayan AI ko kwamfutocin da ake rabawa"
    ],
    prerequisites: "Babu. Kwas ɗin \"Introduction to AI and Digital Confidence\" (Gabatarwa ga AI da Ƙarfin Gwiwa a Fasahar Zamani) yana taimakon masu koyo da ba su saba neman shafukan hukuma ba."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da shafin hukuma na jiharku", action: "neman kwafin tarihin laifinku da gano inda ake samun tarihin tarayya (federal) da na kotu", standard: "kuna rubuta sunan fom, kuɗin, sassaucin kuɗi (fee waiver) da wurin ɗaukar zanen yatsa mafi kusa" },
    { id: "O2", condition: "Idan aka ba ku kalmomin sauƙaƙa tarihin laifi", action: "bayyana bambancin expungement, sealing, set-aside ko dismissal, certificate of rehabilitation da pardon", standard: "da jimla ɗaya mai sauƙi kuma daidai ga kowanne" },
    { id: "O3", condition: "Idan kuna da jerin shari'o'inku", action: "gane ko kowace shari'a ta tarayya ce ko ta jiha, da duba ko sauƙi na atomatik zai iya shafar ta", standard: "kowace shari'a tana da alama, kuma akwai shirin duba sabon tarihinku" },
    { id: "O4", condition: "Ta amfani da majiyoyin hukuma da na ƙungiyoyin sa-kai", action: "neman wurare biyu kyauta da ke taimakawa da sauƙaƙa tarihin laifi da shirya tambayoyi don kiran farko", standard: "da suna, lambar waya, lokutan aiki da tambayoyi uku ga kowanne, ba tare da wani sabis na kuɗi da ke ba da tabbacin sakamako ba" },
    { id: "O5", condition: "Idan kuna da shari'o'inku da shaidar rayuwarku a yanzu", action: "haɗa fayil na sauƙaƙa tarihin laifi da lauya ko asibitin shari'a zai iya amfani da shi", standard: "da gunduma, shekara da laifin kowace shari'a, da jerin shaidun da har yanzu ake buƙata" },
    { id: "O6", condition: "Ta amfani da dokar Fair Chance Act ta California", action: "bayyana lokacin da mai ɗaukar aiki zai iya duba tarihinku da rubuta gajeriyar sanarwar gyaran rayuwa", standard: "sanarwar tana da gaskiya, gajeriya ce, kuma tana faɗin abin da kuka yi tun daga lokacin" }
  ],
  chapters: [
    {
      name: "Babi na 1: Ku san tarihinku da zaɓuɓɓukanku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Samun kwafin tarihin laifinku",
          minutes: 5,
          goal: "Neman kwafin tarihin laifinku na jiha da sanin inda za ku sami tarihinku na tarayya da na kotu.",
          text: [
            "Ba za ku iya gyara abin da ba ku gani ba. Kafin ku nemi kowane sauƙi, ku samo kwafin tarihinku. Yana nuna kowane kamu da shari'a, gunduma (county), ranaku da yadda kowace shari'a ta ƙare. Tarihi sau da yawa yana da kurakurai ko sakamakon da ya ɓace.",
            "A California, Ma'aikatar Shari'a ta jiha (DOJ) tana gudanar da Record Review (duba tarihinku). Idan kuna zaune a California, ku cike fom BCIA 8016RR, ku zaɓi Record Review a matsayin irin neman, sannan ku kai shi wurin Live Scan don a ɗauki zanen yatsanku. DOJ tana karɓar kuɗin aiki $25 (akwai sassaucin kuɗi, fee waiver), kuma wurin Live Scan yana karɓar nasa kuɗin. Idan kuna zaune a wajen California, ku aika fom BCIA 8705 ta gidan waya tare da katin zanen yatsa. Ku duba oag.ca.gov don fom da kuɗi na yanzu.",
            "Tarihinku yana iya kasancewa a wurare fiye da ɗaya. Tarihin jiha yana ɗauke da shari'o'in jiha. FBI tana ajiye tarihi na ƙasa baki ɗaya da ake kira Identity History Summary; ku duba fbi.gov don yadda ake nema da kuɗi na yanzu. Kowace kotun gunduma ma tana ajiye fayilolin shari'o'inta, waɗanda za ku iya nema a ofishin magatakarda (clerk).",
            "Idan kun ga kuskure a tarihinku na California, DOJ tana aiko da fom mai suna BCIA 8706, Claim of Alleged Inaccuracy or Incompleteness (ƙorafin kuskure ko rashin cikawa), tare da tarihinku. Ku mayar da shi ta gidan waya tare da shaida."
          ],
          steps: ["Ku zaɓi tarihin da kuke buƙata da farko: yawanci tarihinku na jiha.", "A California, ku cike BCIA 8016RR ku zaɓi Record Review.", "Ku je wurin Live Scan a ɗauki zanen yatsanku ku biya kuɗin, ko ku tambayi game da fee waiver.", "Idan tarihin ya iso, ku jera kowace shari'a: gunduma, lambar shari'a idan akwai, rana, laifi da sakamako.", "Ku yi alama a kan duk abin da yake kamar kuskure ne ko ya ɓace, ku ajiye tarihin a fayil mai aminci."],
          words: [["Tarihin laifi (criminal record)", "jerin hukuma na kamunku da shari'o'inku da jiha ko FBI ke ajiyewa."], ["Live Scan", "na'urar da ke ɗaukar zanen yatsanku ta hanyar dijital ta aika wa jiha."], ["Record Review", "sabis na DOJ ta California da ke bar ku ganin tarihinku na jiha."], ["Disposition (sakamakon shari'a)", "yadda shari'a ta ƙare, misali an kori ƙara (dismissed), an same ku da laifi (convicted) ko an wanke ku (acquitted)."]],
          slides: [
            { title: "Ku fara ganin tarihinku", bullets: ["Ba za ku iya gyara abin da ba ku gani ba", "Tarihi sau da yawa yana da kurakurai ko sakamakon da ya ɓace"] },
            { title: "Record Review na California", bullets: ["Fom BCIA 8016RR, ku zaɓi Record Review", "Zanen yatsa a wurin Live Scan", "Kuɗin DOJ $25, akwai fee waiver; ku duba oag.ca.gov"] },
            { title: "Wasu wuraren da tarihinku yake", bullets: ["Identity History Summary na FBI: ku duba fbi.gov", "Fayilolin kotun gunduma: ku tambayi magatakarda"] },
            { title: "Kun ga kuskure?", bullets: ["California tana aiko da fom BCIA 8706 tare da tarihinku", "Ku mayar da shi ta gidan waya tare da shaida"] }
          ],
          sources: [
            { name: "California DOJ: Record Review (neman tarihinku)", url: "https://oag.ca.gov/fingerprints/record-review" },
            { name: "California DOJ: Neman sassaucin kuɗi (fee waiver)", url: "https://oag.ca.gov/fingerprints/record-review/fee-waiver" },
            { name: "FBI: Identity History Summary checks", url: "https://www.fbi.gov/how-we-can-help-you/more-fbi-services-and-information/identity-history-summary-checks" }
          ],
          tryIt: "Ku nemo shafin hukuma inda jiharku ke bar ku neman tarihinku (a California, Record Review a oag.ca.gov). Ku rubuta sunan fom, kuɗin, ko akwai fee waiver, da wuri mafi kusa na ɗaukar zanen yatsa.",
          youCanNow: "neman kwafin tarihinku na jiha, faɗin inda ake ajiye tarihinku na FBI da na kotu, da gane kurakuran da za ku ƙalubalanta.",
          quickCheck: [
            { objective: "O1", q: "A California, me ya kamata ku yi don ganin tarihinku na jiha?", options: ["Ku kira ofishin 'yan sanda", "Ku cike fom na Record Review na DOJ ku je wurin Live Scan a ɗauki zanen yatsanku", "Ku nemi mataimakin AI ya duba muku", "Ku biya wani shafin binciken tarihi"], answer: 1, why: "Record Review na DOJ ta California yana amfani da fom da zanen yatsa na Live Scan." },
            { objective: "O1", q: "Kun sami tarihinku kuma kun ga wata shari'a da ba taku ba ce. Me za ku yi?", options: ["Ku ƙyale ta", "Ku nemi AI ya goge ta", "Ku jira har mai ɗaukar aiki ya tambaya", "Ku ƙalubalance ta da fom na hukuma na kurakurai"], answer: 3, why: "Samun tarihinku yana bar ku gane kurakurai ku ƙalubalance su ta hanyar hukuma." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ma'anar kalmomin sauƙaƙa tarihin laifi",
          minutes: 5,
          goal: "Bayyana bambancin expungement, dismissal, sealing, set-aside, certificate of rehabilitation da pardon.",
          text: [
            "Mutane suna cewa expungement don kusan kowace hanyar share tarihi, amma ainihin kalmomin da abin da suke yi sun bambanta a kowace jiha. Sanin kalmomin yana taimaka muku yin tambayoyi daidai.",
            "Expungement yawanci yana nufin an goge ko an lalata tarihin. Sealing (rufewa) yana nufin tarihin yana nan, amma yawancin mutane, kamar masu ɗaukar aiki da masu gidajen haya da yawa, ba za su iya ganinsa ba. Set-aside ko dismissal yana nufin kotu ta sake buɗe hukuncin laifi ta kori shi, don haka a mafi yawan lokuta ba dole ne ku ce an same ku da laifi ba. Kotunan California sun ce ainihin expungement babu shi a California; abin da mutane ke kira expungement a can yawanci dismissal ne.",
            "Certificate of rehabilitation (takardar shaidar gyaran rayuwa) umarnin kotu ne da ke cewa kun yi rayuwa bisa doka tun bayan hukuncinku. A wasu jihohi yana iya taimakawa wajen samun lasisi ko ya zama mataki zuwa pardon. Pardon (afuwa) gafara ce daga gwamna (don laifukan jiha) ko Shugaban ƙasa (don laifukan tarayya).",
            "Babu ɗaya daga cikin waɗannan da koyaushe yake share tarihi gaba ɗaya don kowace manufa. Wasu ayyukan gwamnati, lasisi, dokokin bindiga da shige da fice (immigration) har yanzu suna duba tsofaffin shari'o'i. Lauya zai iya faɗa muku abin da kowane zaɓi zai yi muku."
          ],
          words: [["Expungement", "gogewa ko lalata tarihi; a wurare da yawa ana amfani da kalmar ga kowace share tarihi."], ["Sealing (rufewa)", "tarihin yana nan amma yawancin jama'a ba za su iya ganinsa ba."], ["Set-aside ko dismissal", "kotu ta sake buɗe hukuncin laifi ta kori shi."], ["Certificate of rehabilitation", "umarnin kotu da ke cewa kun yi rayuwa bisa doka tun bayan hukuncinku."], ["Pardon (afuwa)", "gafarar hukuma daga gwamna ko Shugaban ƙasa."]],
          slides: [
            { title: "Manufa ɗaya, kalmomi daban-daban", bullets: ["Kowace jiha tana amfani da kalmominta", "Sanin su yana taimaka muku yin tambayoyi daidai"] },
            { title: "Gogewa, ɓoyewa ko korewa", bullets: ["Expungement: an goge tarihi", "Sealing: an ɓoye tarihi daga yawancin mutane", "Set-aside ko dismissal: kotu ta kori hukuncin laifi"] },
            { title: "Wasu nau'o'in sauƙi", bullets: ["Certificate of rehabilitation: kotu ta ce kun canja", "Pardon: gafara daga gwamna ko Shugaban ƙasa"] },
            { title: "Iyakoki", bullets: ["California: ainihin expungement babu shi", "Wasu ayyuka, lasisi da immigration suna ganin tsofaffin shari'o'i", "Ku tambayi lauya abin da kowane zaɓi zai yi muku"] }
          ],
          sources: [
            { name: "California Courts Self-Help Guide: Clean your record (share tarihinku)", url: "https://selfhelp.courts.ca.gov/clean-your-record" }
          ],
          tryIt: "Ku yi ƙaramin tebur mai layuka biyar: expungement, sealing, set-aside ko dismissal, certificate of rehabilitation, pardon. A gefen kowanne, ku rubuta jimla ɗaya mai sauƙi game da abin da yake yi. Sannan ku rubuta tambaya ɗaya game da shari'arku da za ku tambayi lauya.",
          youCanNow: "bayyana manyan nau'o'in sauƙaƙa tarihin laifi da kalmomi masu sauƙi, da faɗin dalilin da yasa har yanzu kuke tambayar lauya abin da kowanne zai yi muku.",
          quickCheck: [
            { objective: "O2", q: "Me sealing na tarihi yake yi yawanci?", options: ["Yana ajiye tarihin amma yana ɓoye shi daga yawancin mutane", "Yana lalata kowane kwafi har abada", "Yana mayar da babban laifi (felony) ya zama tikitin tara", "Yana ba ku pardon"], answer: 0, why: "Tarihin da aka yi wa sealing yana nan, amma yawancin mutane ba za su iya ganinsa ba." },
            { objective: "O2", q: "Ba ku tabbata wane sauƙi ne ya dace da shari'arku ba. Me za ku yi?", options: ["Ku zaɓi wanda sunansa ya fi daɗi", "Ku nemi dukansu lokaci ɗaya", "Ku rubuta tambayarku ku tambayi lauya ko legal aid", "Ku tambayi abokin da shari'arsa ta bambanta"], answer: 2, why: "Lauya ko legal aid zai iya faɗin wane sauƙi ne ya dace da shari'arku." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Tarayya, jiha da Clean Slate na California",
          minutes: 5,
          goal: "Gane ko kowace shari'arku ta tarayya ce ko ta jiha, da duba ko sauƙi na atomatik na California ya riga ya shafe ta.",
          text: [
            "Kowace shari'a tana ƙarƙashin tsarin da ya kawo ƙarar. Shari'ar jiha ta bi ta kotun gunduma (county court) kuma ana gudanar da ita bisa dokokin jihar. Shari'ar tarayya (federal) ta bi ta United States District Court (kotun tarayya ta gundumar Amurka). Sauƙin jiha ba zai iya share hukuncin laifi na tarayya ba, kuma sauƙin tarayya ba ya share hukuncin laifi na jiha.",
            "Sauƙi ga hukuncin laifi na tarayya ƙarami ne sosai. Babbar hanya ita ce pardon daga Shugaban ƙasa. Office of the Pardon Attorney (ofishin lauyan afuwa) na Ma'aikatar Shari'a ta Amurka yana karɓar neman afuwa daga mutanen da aka same su da laifin tarayya kuma suka gama hukuncinsu.",
            "California tana da dokokin Clean Slate. Kowane wata DOJ ta California tana duba tarihinta, tana yin alama a kan kamu da hukuncin laifi da suka cancanta a matsayin masu samun sauƙi, sannan ta sanar da kotuna. Ba dole ne ku shigar da komai don wannan sauƙi na atomatik ba, kuma DOJ ba ta sanar da ku idan ya faru. Wata doka ta 2022, SB 731, ta ƙara manyan laifuka (felonies) da yawa tun daga 2024.",
            "Sauƙi na atomatik yana iyakance wanda zai iya ganin shari'a, amma ba ya korewa, rufewa ko goge ta. Wasu masu ɗaukar aiki da ke amfani da binciken zanen yatsa, kamar 'yan sanda da makarantu, har yanzu suna iya ganinta. Don ku san ko kun samu, ku nemi tarihinku. Don dismissal, sealing ko rage laifi, har yanzu sai kun shigar da takarda a kotu."
          ],
          steps: ["Ga kowace shari'a a tarihinku, ku rubuta kotun: kotun gunduma tana nufin jiha, US District Court tana nufin tarayya.", "Don shari'o'in tarayya, ku duba shafin Office of the Pardon Attorney.", "A California, ku duba sabon tarihinku na DOJ don ganin rubutun cewa an ba da sauƙi.", "Ku jera shari'o'in da har yanzu suke buƙatar petition a kotu."],
          words: [["Shari'ar tarayya (federal case)", "shari'ar da gwamnatin Amurka ta kawo, aka saurare ta a US District Court."], ["Shari'ar jiha (state case)", "shari'ar da aka kawo bisa dokar jiha, aka saurare ta a kotun gunduma."], ["Clean Slate", "dokokin da ke ba da wani sauƙi na tarihi kai tsaye, ba tare da petition ba."], ["Petition (roƙo)", "rubutacciyar buƙata da kuke shigarwa kuna neman kotu ta yi wani abu."]],
          slides: [
            { title: "Tarayya ko jiha?", bullets: ["Kotun gunduma = shari'ar jiha", "US District Court = shari'ar tarayya", "Kowane tsari yana share shari'o'insa kaɗai"] },
            { title: "Hukuncin laifi na tarayya", bullets: ["Sauƙi ƙarami ne sosai", "Babbar hanya: pardon daga Shugaban ƙasa", "Office of the Pardon Attorney, justice.gov/pardon"] },
            { title: "Clean Slate na California", bullets: ["DOJ tana duba tarihi kowane wata", "Ba a buƙatar petition; DOJ ba ta sanar da ku", "SB 731 ta ƙara manyan laifuka tun daga 2024"] },
            { title: "Abin da sauƙi na atomatik ba ya yi", bullets: ["Ba ya korewa, rufewa ko gogewa", "Wasu binciken zanen yatsa har yanzu suna ganinta", "Dismissal ko sealing har yanzu suna buƙatar petition a kotu"] }
          ],
          sources: [
            { name: "California DOJ: Automatic record relief (Penal Code 851.93 da 1203.425)", url: "https://oag.ca.gov/fingerprints/automatic-record-relief-penal-code-sections-851.93-and-1203.425" },
            { name: "US DOJ Office of the Pardon Attorney: Apply for clemency (neman afuwa)", url: "https://www.justice.gov/pardon/apply-clemency" }
          ],
          tryIt: "Ta amfani da tarihinku ko abin da kuka tuna, ku jera kowace shari'a ku rubuta jiha ko tarayya a gefenta. Idan kuna zaune a California, ku rubuta ko sabon tarihinku na DOJ yana nuna sauƙi na atomatik ga wata shari'a, ko ku shirya neman tarihin don ku gano.",
          youCanNow: "raba shari'o'inku zuwa na tarayya da na jiha, bayyana abin da sauƙi na atomatik na California yake yi da wanda ba ya yi, da jera shari'o'in da har yanzu suke buƙatar petition.",
          quickCheck: [
            { objective: "O3", q: "An saurari shari'arku a kotun superior court ta gunduma. Wace irin shari'a ce?", options: ["Shari'ar tarayya", "Shari'ar jiha", "Shari'ar soja", "Shari'ar farar hula kawai"], answer: 1, why: "Kotunan superior court na gunduma suna sauraron shari'o'in jiha." },
            { objective: "O3", q: "Kuna zaune a California kuma kuna tsammani sauƙi na atomatik zai iya shafar wata tsohuwar shari'a. Me za ku yi?", options: ["Ku ɗauka cewa an share ta", "Ku shigar da petition na tarayya", "Ku nemi mai ɗaukar aiki ya duba", "Ku nemi sabon tarihinku na DOJ ku nemi rubutun sauƙin"], answer: 3, why: "Sabon tarihinku na DOJ yana nuna ko an yi amfani da sauƙi na atomatik." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Ku san tarihinku da zaɓuɓɓukanku",
        questions: [
          { objective: "O1", q: "Mene ne mataki na farko mafi kyau kafin neman sauƙaƙa tarihin laifi?", options: ["Ku faɗa wa kowane mai ɗaukar aiki cewa ba ku da tarihi", "Ku samo kwafin tarihinku", "Ku biya wani shafi ya goge tarihinku", "Ku jira kotu ta kira ku"], answer: 1, why: "Tarihinku yana nuna kowace shari'a da sakamakonta, don ku san abin da za ku gyara kuma ku gane kurakurai." },
          { objective: "O1", q: "A California, ta yaya za ku ga tarihinku na jiha?", options: ["Ku tambayi aboki a kotu", "Ku nemi sunanku a kafafen sada zumunta", "Ku kira 911", "Ku cike fom na Record Review na DOJ ku je wurin Live Scan a ɗauki zanen yatsanku"], answer: 3, why: "Record Review na DOJ ta California yana amfani da fom BCIA 8016RR da zanen yatsa na Live Scan." },
          { objective: "O2", q: "Wane zaɓi ne yake ajiye tarihi amma yana ɓoye shi daga yawancin mutane?", options: ["Sealing", "Tikitin tara na hanya", "Probation", "Sammacin kamu (warrant)"], answer: 0, why: "Sealing yana nufin tarihin yana nan amma yawancin jama'a ba za su iya ganinsa ba." },
          { objective: "O3", q: "Hukuncin laifinku ɗaya tilo daga US District Court ne. Wace hanya ce ta fi yiwuwa?", options: ["Dismissal na California", "Shirin Clean Slate na gunduma", "Pardon daga Shugaban ƙasa", "Canjin takardar sakamakon makaranta"], answer: 2, why: "Shari'ar US District Court ta tarayya ce, kuma sauƙin jiha ba zai iya share ta ba; babbar hanya ita ce pardon daga Shugaban ƙasa." },
          { objective: "O3", q: "Mene ne gaskiya game da sauƙaƙa tarihin laifi na atomatik na California?", options: ["Yana goge shari'ar gaba ɗaya", "Dole ne ku shigar da petition don samun sa", "DOJ tana kiran ku idan an gama", "Yana iyakance wanda zai iya ganin shari'a amma ba ya korewa"], answer: 3, why: "Sauƙi na atomatik yana ƙara rubutu da ke iyakance bayyanawa; ba a kori shari'ar ko goge ta ba." }
        ]
      }
    },
    {
      name: "Babi na 2: Neman taimako, shiryawa da amfani da haƙƙoƙinku",
      lessons: [
        {
          objectives: ["O4"],
          title: "Neman taimakon shari'a kyauta",
          minutes: 5,
          goal: "Neman wurare biyu kyauta da za su iya taimaka muku da sauƙaƙa tarihin laifi, da shiryawa don kiran farko.",
          text: [
            "Dokokin sauƙaƙa tarihin laifi suna da sarƙaƙiya, kuma kuskure yana iya ɓata muku watanni. Albishir: taimako mai yawa kyauta ne. Shafin taimakon kai na kotunan California yana da fom na Get started (fara) da ke yin 'yan tambayoyi ya ba da umarni don halin da kuke ciki, da shafin taimakon shari'a.",
            "Wuraren da sau da yawa suke taimakawa kyauta sun haɗa da cibiyoyin taimakon kai na kotu, ofisoshin legal aid, ofisoshin public defender (kusan gundumomi 19 na California suna da shirye-shiryen share tarihi), asibitocin shari'a na makarantun lauya, ƙungiyoyin taimakon masu dawowa gida, da asibitocin clean slate na kwana ɗaya. A California, sabis na Clear My Record yana haɗa mutane da taimakon shari'a a wasu gundumomi.",
            "Idan ba ɗan ƙasar Amurka ba ne, ku yi magana da lauyan shige da fice (immigration) kafin ku shigar da kowace takarda. Matakan kotu suna iya shafar matsayinku na shige da fice, kuma wasu sauƙi ba sa aiki a wajen immigration.",
            "Ku yi hankali da duk wanda ya yi alƙawarin goge tarihinku da kuɗi mai yawa, ya ba da tabbacin sakamako, ko ya nemi biya kafin ya faɗa muku abin da zai yi. Taimako na gaske yana bayyana zaɓuɓɓukanku da farko."
          ],
          steps: ["Ku je shafin taimakon kai na kotun jiharku (a California, selfhelp.courts.ca.gov, Clean your record).", "Ku nemo masu taimako biyu kyauta: cibiyar taimakon kai, legal aid, shirin public defender ko asibitin clean slate.", "Ku rubuta lambar wayarsu, lokutan aiki da abin da suke cewa ku kawo.", "Ku shirya tambayoyi uku kafin ku kira.", "Idan ba ɗan ƙasa ba ne, ku fara tuntuɓar lauyan immigration."],
          words: [["Legal aid", "taimakon shari'a kyauta ga mutane masu ƙaramin kuɗin shiga."], ["Public defender", "lauyan gwamnati ga mutanen da ba za su iya biya ba; da yawa suna gudanar da shirye-shiryen share tarihi."], ["Asibitin clean slate (clean slate clinic)", "taron da lauyoyin sa-kai ke taimaka wa mutane cike takardun sauƙaƙa tarihin laifi, yawanci kyauta."]],
          slides: [
            { title: "Ba dole ku yi wannan ku kaɗai ba", bullets: ["Dokoki suna da sarƙaƙiya; kurakurai suna ɓata lokaci", "Taimako mai yawa kyauta ne"] },
            { title: "Wuraren tambaya kyauta", bullets: ["Cibiyoyin taimakon kai na kotu da legal aid", "Shirye-shiryen share tarihi na public defender", "Asibitocin makarantun lauya da na clean slate"] },
            { title: "Ba ɗan ƙasar Amurka ba ne?", bullets: ["Ku fara magana da lauyan immigration", "Wasu sauƙi ba sa aiki a wajen immigration"] },
            { title: "Alamun gargaɗi", bullets: ["Kuɗi mai yawa don goge tarihinku", "Tabbacin sakamako", "Ku biya da farko, su yi bayani daga baya"] }
          ],
          sources: [
            { name: "California Courts Self-Help Guide: Clean your record (share tarihinku)", url: "https://selfhelp.courts.ca.gov/clean-your-record" },
            { name: "California Courts Self-Help Guide: Taimakon shari'a don share tarihinku", url: "https://selfhelp.courts.ca.gov/clean-your-record/legal-help" }
          ],
          tryIt: "Ku nemo masu taimakon shari'a biyu kyauta kusa da ku don sauƙaƙa tarihin laifi. Ga kowanne, ku rubuta suna, lambar waya, lokutan aiki da abin da za ku kawo. Sannan ku rubuta tambayoyi uku da za ku yi, kamar: Waɗanne shari'o'ina ne za a iya sharewa? Wane irin sauƙi ne ya dace? Har yaushe zai ɗauka?",
          youCanNow: "neman taimakon shari'a kyauta don sauƙaƙa tarihin laifi, shiryawa don kiran farko, da gane tayin kuɗi da ke alamun gargaɗi.",
          quickCheck: [
            { objective: "O4", q: "Wane wuri ne kyauta don neman taimakon sauƙaƙa tarihin laifi?", options: ["Shafin da ke ba da tabbacin sakamako da kuɗi mai yawa", "Cibiyar taimakon kai ta kotu", "Baƙo a kafafen sada zumunta", "Ofishin beli (bail bond)"], answer: 1, why: "Cibiyoyin taimakon kai na kotu suna ba da taimako kyauta da fom na kotu." },
            { objective: "O4", q: "Wani ya yi alƙawarin share tarihinku tabbas idan kun biya $1,000 yau. Me za ku yi?", options: ["Ku tafi, ku tuntuɓi taimakon shari'a kyauta maimakon haka", "Ku biya rabi yanzu", "Ku biya da katin kyauta (gift card)", "Ku ba shi bayanan shari'arku ya duba"], answer: 0, why: "Tabbacin sakamako da kuɗi mai yawa a gaba alamun gargaɗi ne." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Shiryawa da shigar da takarda tare da taimako",
          minutes: 6,
          goal: "Haɗa fayil na sauƙaƙa tarihin laifi da lauya ko asibitin shari'a zai iya amfani da shi don shigar muku.",
          text: [
            "Lauyoyi da asibitocin shari'a suna iya taimaka muku da sauri sosai idan kun zo da tsari. Ku haɗa fayil ɗaya, na takarda ko na dijital, mai ɗauke da komai game da shari'o'inku.",
            "Ku saka: kwafin tarihinku; jerin kowace shari'a da gunduma, lambar shari'a, shekara da laifi; shaidar cewa kun gama probation, parole ko shirye-shirye; shaidar biyan tara, kuɗaɗe da diyya (restitution), ko abin da har yanzu ake bin ku; da shaidar rayuwarku a yanzu, kamar wasiƙun aiki, takardun shaida, darussa, jinya, aikin sa-kai da wasiƙun goyon baya.",
            "Mai taimakonku zai zaɓi fom ɗin da suka dace, ya shigar da su a kotun da ta dace, ya kuma faɗa muku ko akwai zaman kotu (hearing). Ku nemi ya bayyana kowane fom kafin ku sa hannu. Ku ajiye kwafin duk abin da kuka shigar, ku rubuta kowace rana.",
            "Bayan kotu ta ba da sauƙi, ku nemi kwafin umarnin (order). Bayan 'yan watanni, ku sake neman tarihinku don ku tabbata an sabunta shi. Idan ba a sabunta ba, ku tuntuɓi mai taimakonku ko magatakardar kotu."
          ],
          steps: ["Ku fara fayil ɗaya don sauƙaƙa tarihin laifinku.", "Ku saka tarihinku da jerin kowace shari'a: gunduma, lambar shari'a, shekara, laifi.", "Ku saka shaidar gama probation, parole da shirye-shirye, da ta tarar da aka biya ko ake bin ku.", "Ku saka shaidar rayuwarku a yanzu: aiki, makaranta, jinya, aikin sa-kai, wasiƙun goyon baya.", "Ku kai fayil ɗin wajen mai taimakonku; ku ajiye kwafin duk abin da aka shigar da dukkan ranaku.", "Bayan an ba da sauƙi, ku ajiye umarnin ku sake duba tarihinku daga baya."],
          words: [["Lambar shari'a (case number)", "lambar da kotu ke ba kowace shari'a; tana taimakawa wajen samun fayil da sauri."], ["Diyya (restitution)", "kuɗin da kotu ta umarce ku ku biya wanda laifi ya shafa."], ["Zaman kotu (hearing)", "taro a kotu inda alƙali yake saurare ya yanke hukunci."], ["Umarni (order)", "rubutaccen hukuncin alƙali."]],
          slides: [
            { title: "Ku zo da tsari", bullets: ["Fayil ɗaya, na takarda ko na dijital", "Masu taimako suna aiki da sauri idan takardunku sun shirya"] },
            { title: "Abin da ke shiga fayil ɗin", bullets: ["Tarihinku da jerin kowace shari'a", "Shaidar gama probation, parole da shirye-shirye", "Tara da diyya: an biya ko har yanzu ana bin ku"] },
            { title: "Shaidar rayuwarku a yanzu", bullets: ["Wasiƙun aiki da takardun albashi", "Takardun shaida, darussa, jinya", "Aikin sa-kai da wasiƙun goyon baya"] },
            { title: "Bayan kun shigar", bullets: ["Ku ajiye kwafi ku rubuta kowace rana", "Ku samo kwafin umarnin alƙali", "Ku sake duba tarihinku bayan 'yan watanni"] }
          ],
          tryIt: "Ku fara fayil ɗinku na sauƙaƙa tarihin laifi yau. Ku rubuta jerin shari'o'in da kuka sani (gunduma, shekara, laifi) da jerin shaidun da har yanzu za ku tattara. Ku sa tauraro a gefen takardu biyu na farko da za ku samo a wannan makon.",
          youCanNow: "haɗa fayil na sauƙaƙa tarihin laifi, aiki tare da mai taimako don shigar da takarda, da duba daga baya cewa an sabunta tarihinku.",
          quickCheck: [
            { objective: "O5", q: "Mene ne lambar shari'a (case number)?", options: ["Lambar Social Security ɗinku", "Lambar shaidarku ta gidan yari", "Lambar da kotu ke ba kowace shari'a", "Lambar wayarku"], answer: 2, why: "Kowace shari'ar kotu tana da lambarta ta musamman." },
            { objective: "O5", q: "Kotu ta ba ku sauƙin. Me za ku yi daga baya?", options: ["Kada ku sake tunani a kai", "Ku sake neman tarihinku don ku tabbata an sabunta shi", "Ku faɗa wa masu ɗaukar aiki cewa ba ku da tarihi ba tare da dubawa ba", "Ku jefar da fayil ɗinku"], answer: 1, why: "Sake duba tarihinku yana tabbatar da cewa sauƙin ya bayyana." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ɗaukar aiki bisa Fair Chance da haƙƙoƙinku",
          minutes: 6,
          goal: "Bayyana dokar Fair Chance Act ta California da shirya gajeriyar sanarwar gyaran rayuwa don mai ɗaukar aiki.",
          text: [
            "Dokar Fair Chance Act ta California ta shafi masu ɗaukar aiki na gwamnati da masu zaman kansu masu ma'aikata biyar ko fiye, da wasu keɓewa kamar ayyukan da doka ta buƙaci binciken tarihi. Yawancin masu ɗaukar aiki da dokar ta shafa ba za su iya tambaya game da tarihin hukuncin laifinku a takardar neman aiki ba, ko su yi binciken tarihi (background check), ko su saka talla mai cewa No Felons (babu masu manyan laifuka), kafin su ba ku tayin aiki.",
            "Bayan tayin aiki mai sharaɗi, suna iya yin bincike, amma ba za su taɓa amfani da kamun da bai kai ga hukuncin laifi ba (da 'yan keɓewa kaɗan), hukuncin laifin da aka yi wa sealing, dismissal ko expungement, shari'o'in da aka share bayan diversion (shirin maye gurbin hukunci), ko, a mafi yawan lokuta, hukuncin laifin da ya wuce shekara bakwai ba. Ba za su iya ƙin ku kawai don kuna da tarihi ba. Dole su duba halin da kuke ciki da aikin.",
            "Idan suna son janye tayin, dole su faɗa muku a rubuce, su ba ku kwafin rahoton, su jera hukuncin laifin, kuma su ba ku aƙalla kwanakin aiki biyar don ku amsa da shaidar gyaran rayuwa, ko ku nuna kuskure a rahoton. Idan kuna tsammani mai ɗaukar aiki ya karya doka, kuna iya tuntuɓar California Civil Rights Department (Ma'aikatar Haƙƙin Ɗan Adam ta California). Wasu jihohi da birane suna da nasu dokokin, da ake yawan kira ban the box; ku duba naku.",
            "Ku shirya gajeriyar sanarwa ta gaskiya yanzu: abin da ya faru a jimla ɗaya, abin da kuka yi tun daga lokacin, da dalilin da yasa kuka shirya don wannan aikin. Ku tattara shaida, kamar takardun shaida, shirye-shiryen da kuka gama, wasiƙun goyon baya da wasiƙar bonding (lamuni) idan kuna da ita."
          ],
          steps: ["Ku duba ko jiharku ko birninku yana da dokar fair-chance ko ban-the-box.", "Ku rubuta jimla ɗaya game da abin da ya faru, ba tare da uzuri ba.", "Ku rubuta jimloli biyu ko uku game da abin da kuka yi tun daga lokacin.", "Ku ƙare da dalilin da yasa kuka shirya don wannan aikin.", "Ku tattara shaida ku ajiye ta tare da sanarwarku."],
          words: [["Fair Chance Act", "dokar California da ke iyakance lokaci da yadda masu ɗaukar aiki za su iya duba tarihin hukuncin laifi."], ["Tayin aiki mai sharaɗi (conditional job offer)", "tayin aiki da ya dogara da wani abu, kamar binciken tarihi."], ["Ban the box", "dokokin da ke cire tambayar tarihin laifi daga takardun neman aiki."], ["Shaidar gyaran rayuwa (evidence of rehabilitation)", "shaidar yadda rayuwarku ta canja, kamar shirye-shiryen da kuka gama da wasiƙun goyon baya."]],
          slides: [
            { title: "Kafin tayin aiki (California)", bullets: ["Ya shafi masu ɗaukar aiki masu ma'aikata 5 ko fiye", "Babu tambayar hukuncin laifi a takardar neman aiki", "Babu binciken tarihi kafin tayi"] },
            { title: "Bayan tayi mai sharaɗi", bullets: ["Kamun da bai kai ga hukunci ba: an hana (da 'yan keɓewa)", "Shari'o'in da aka yi wa sealing, dismissal ko expungement: an hana", "Yawancin hukuncin laifi da ya wuce shekara 7: an hana"] },
            { title: "Idan suna son janye tayin", bullets: ["Sanarwa a rubuce tare da rahoton da jerin hukuncin laifi", "Aƙalla kwanakin aiki 5 don ku amsa", "Tambayoyi: California Civil Rights Department"] },
            { title: "Sanarwar gyaran rayuwarku", bullets: ["Jimla ɗaya: abin da ya faru", "Biyu ko uku: abin da kuka yi tun daga lokacin", "Ƙarshe: dalilin da yasa kuka shirya don wannan aikin"] }
          ],
          sources: [
            { name: "California Civil Rights Department: Fair Chance Act", url: "https://calcivilrights.ca.gov/fair-chance-act/" },
            { name: "California Civil Rights Department: Criminal History and Employment fact sheet (Yuni 2025)", url: "https://calcivilrights.ca.gov/wp-content/uploads/sites/32/2025/07/Fair-Chance-Act-Factsheet_English.pdf" }
          ],
          tryIt: "Aikin ƙarshe: ku yi shirin aikinku na shafi ɗaya don sauƙaƙa tarihin laifi. Ku haɗa inda za ku sami tarihinku, kowace shari'a da sauƙin da zai iya dacewa da ita, taimakon shari'a kyauta da za ku fara tuntuɓa, takardun da za ku tattara, da gajeriyar sanarwar gyaran rayuwarku don masu ɗaukar aiki.",
          youCanNow: "bayyana haƙƙoƙinku na Fair Chance wajen neman aiki a California, gano dokokin jiharku, da amsa mai ɗaukar aiki game da tarihinku da gajeriyar sanarwa ta gaskiya da shaida.",
          quickCheck: [
            { objective: "O6", q: "A ƙarƙashin dokar Fair Chance Act ta California, yaushe yawancin masu ɗaukar aiki da dokar ta shafa za su iya yin binciken tarihi?", options: ["Kafin hirar neman aiki", "A takardar neman aiki", "Ba za su taɓa yi ba", "Bayan tayin aiki mai sharaɗi"], answer: 3, why: "Masu ɗaukar aiki da dokar ta shafa suna jira har bayan tayi mai sharaɗi kafin su duba tarihinku." },
            { objective: "O6", q: "Mai ɗaukar aiki ya tambaye ku game da baya bayan ya ba ku tayi. Me za ku yi?", options: ["Ku ba da gajeriyar sanarwa ta gaskiya game da abin da kuka yi tun daga lokacin", "Ku ba da dogon labari game da shari'ar", "Ku ƙi faɗin komai ku tafi", "Ku ce ba ku da tarihi"], answer: 0, why: "Gajeriyar sanarwar gyaran rayuwa ta gaskiya tana nuna cewa kun shirya don aikin." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Neman taimako, shiryawa da amfani da haƙƙoƙinku",
        questions: [
          { objective: "O4", q: "Wace ce alamar gargaɗi idan wani ya yi tayin share tarihinku?", options: ["Yana bayyana zaɓuɓɓukanku da farko", "Yana aiki a cibiyar taimakon kai ta kotu", "Yana ba da tabbacin sakamako kuma yana son kuɗi mai yawa a gaba", "Yana cewa ku kawo tarihinku"], answer: 2, why: "Tabbacin sakamako da kuɗi mai yawa a gaba alamun zamba ne; taimako na gaske yana bayyana zaɓuɓɓuka da farko." },
          { objective: "O4", q: "Ba ɗan ƙasar Amurka ba ne kuma kuna son sauƙaƙa tarihin laifi. Me ya kamata ku fara yi?", options: ["Ku yi magana da lauyan immigration", "Ku shigar da fom ɗin ku kaɗai nan take", "Ku ƙyale taimakon shari'a", "Ku nemi aboki ya shigar muku"], answer: 0, why: "Matakan kotu suna iya shafar matsayin shige da fice, don haka lauyan immigration ya kamata ya fara ba ku shawara." },
          { objective: "O5", q: "Wanne ne ya dace a fayil ɗinku na sauƙaƙa tarihin laifi?", options: ["Kalmar sirrin bankinku", "Shaidar cewa kun gama probation", "Bayanan shiga kafafen sada zumuntarku", "Shafi marar rubutu"], answer: 1, why: "Shaidar gama probation tana taimakawa wajen nuna cewa kun cancanta kuma kun yi abin da kotu ta nema." },
          { objective: "O6", q: "A ƙarƙashin dokar Fair Chance Act ta California, yaushe yawancin masu ɗaukar aiki da dokar ta shafa za su iya yin binciken tarihi?", options: ["Kafin ku nema", "A lokacin kiran waya na farko", "A tallar aikin", "Bayan tayin aiki mai sharaɗi"], answer: 3, why: "Yawancin masu ɗaukar aiki da dokar ta shafa dole su jira har bayan tayin aiki mai sharaɗi." },
          { objective: "O6", q: "Mai ɗaukar aiki yana shirin janye tayinku saboda tarihinku. Har yaushe kuke da shi don amsa a California?", options: ["Babu lokaci ko kaɗan", "Awa ɗaya", "Aƙalla kwanakin aiki biyar", "Shekara ɗaya"], answer: 2, why: "Dole mai ɗaukar aiki ya ba da aƙalla kwanakin aiki biyar don ku amsa da shaida ko ku nuna kuskure." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Share Tarihin Laifi: Expungement da Sauƙaƙa Tarihin Laifi",
    questions: [
      { objective: "O1", q: "Me yasa za ku fara samun kwafin tarihinku?", options: ["Don ku saka shi a intanet", "Don ku ga kowace shari'a ku gane kurakurai", "Domin masu ɗaukar aiki suna buƙatar ku nuna shi", "Ba shi da amfani"], answer: 1, why: "Tarihinku yana nuna abin da ke buƙatar sauƙi kuma yana iya samun kurakuran da za a gyara." },
      { objective: "O1", q: "A California, wurin da za ku je a ɗauki zanen yatsanku don Record Review shi ne:", options: ["Wurin Live Scan", "Banki", "Akwatin gidan waya", "Shagon sayar da motoci"], answer: 0, why: "Record Review yana amfani da zanen yatsa na Live Scan da ake ɗauka a wuraren Live Scan." },
      { objective: "O1", q: "Kun ga kuskure a tarihinku na DOJ ta California. Wane fom ne ke ƙalubalantarsa?", options: ["Takardar neman aiki", "FAFSA", "BCIA 8706, Claim of Alleged Inaccuracy or Incompleteness", "Fom na lasisin tuƙi"], answer: 2, why: "DOJ tana aiko da BCIA 8706 tare da tarihinku don ku ƙalubalanci kurakurai." },
      { objective: "O1", q: "A ina za ku nemi tarihinku na ƙasa na FBI?", options: ["Ɗakin karatu na gundumarku", "Shafin sada zumunta", "Mai gidan hayarku", "FBI, ta fbi.gov"], answer: 3, why: "FBI tana ajiye Identity History Summary na ƙasa; fbi.gov tana bayyana yadda ake nema." },
      { objective: "O2", q: "Me sealing na tarihi yake nufi yawanci?", options: ["Tarihin yana nan amma yawancin mutane ba za su iya ganinsa ba", "Ku koma kotu don sabuwar shari'a", "Ku sake biyan tara", "Shari'ar ta ƙara tsawo"], answer: 0, why: "Tarihin da aka yi wa sealing yana nan amma an ɓoye shi daga yawancin jama'a." },
      { objective: "O2", q: "Set-aside ko dismissal yana nufin:", options: ["An sake kama ku", "Kotu ta sake buɗe hukuncin laifi ta kori shi", "An goge zanen yatsanku", "Dole ku koma wata jiha"], answer: 1, why: "Set-aside ko dismissal shi ne kotu ta kori hukuncin laifi na baya." },
      { objective: "O2", q: "Mene ne certificate of rehabilitation?", options: ["Takardar shaidar kammala sakandare", "Izinin ajiye mota", "Umarnin kotu da ke cewa kun yi rayuwa bisa doka tun bayan hukuncinku", "Kwangilar aiki"], answer: 2, why: "Sanarwar hukuma ce ta kotu cewa kun gyara rayuwarku." },
      { objective: "O2", q: "Wanne ne gaskiya game da kalmar expungement a California?", options: ["Koyaushe tana goge kowane tarihi", "FBI ce kaɗai ke amfani da ita", "Shiri ne na tarayya", "Kotuna sun ce ainihin expungement babu shi a can"], answer: 3, why: "Kotunan California sun ce ainihin expungement babu shi; sauƙin da aka saba shi ne dismissal." },
      { objective: "O3", q: "An saurari shari'arku a kotun superior court ta gunduma. Ita:", options: ["Shari'ar jiha ce", "Shari'ar tarayya ce", "Shari'ar soja ce", "Shari'ar ƙabila ce"], answer: 0, why: "Kotunan gunduma suna sauraron shari'o'in jiha." },
      { objective: "O3", q: "Shin dismissal na jiha zai iya share hukuncin laifi na tarayya?", options: ["Eh, koyaushe", "Eh, idan kun ƙara biya", "A'a, kowane tsari yana share shari'o'insa kaɗai", "Sai a ƙarshen mako kawai"], answer: 2, why: "Sauƙin jiha ba zai iya share hukuncin laifi na tarayya ba." },
      { objective: "O3", q: "Ta yaya za ku sami sauƙi na atomatik na Clean Slate na California?", options: ["Dole ku shigar da petition", "DOJ tana yi wa shari'o'in da suka cancanta ba tare da petition ba", "Ku kira 911", "Ku tambayi mai ɗaukar aikinku"], answer: 1, why: "DOJ tana duba tarihi kowane wata kuma tana ba da sauƙi ga waɗanda suka cancanta kai tsaye." },
      { objective: "O3", q: "Ta yaya za ku gano ko kun sami sauƙi na atomatik a California?", options: ["Ku jira wasiƙa daga DOJ", "Ku tambayi maƙwabci", "Ku bincika labarai", "Ku nemi tarihinku na DOJ ku nemi rubutun sauƙin"], answer: 3, why: "DOJ ba ta sanar da mutane, don haka ku duba tarihinku da kanku." },
      { objective: "O4", q: "Wane wuri ne kyauta don neman taimakon sauƙaƙa tarihin laifi?", options: ["Cibiyar taimakon kai ta kotu", "Shafin da ke ba da tabbacin sakamako da kuɗi mai yawa", "Baƙo a kafafen sada zumunta", "Shagon jingina (pawn shop)"], answer: 0, why: "Cibiyoyin taimakon kai na kotu, legal aid da shirye-shiryen public defender sau da yawa suna taimakawa kyauta." },
      { objective: "O4", q: "Kafin ku kira mai taimakon shari'a, mataki mai hikima shi ne:", options: ["Jefar da takardunku", "Rubuta tambayoyi uku ku tattara tarihinku", "Yi tsammanin lambobin shari'o'inku", "Sa hannu a fom marasa rubutu"], answer: 1, why: "Shiri yana taimaka wa mai taimako ya yi aiki da sauri kuma ya amsa ainihin tambayoyinku." },
      { objective: "O5", q: "Mene ne lambar shari'a (case number)?", options: ["Lambar wayarku", "Asusun banki", "Lambar da kotu ke ba kowace shari'a", "Girman takalminku"], answer: 2, why: "Lambobin shari'a suna taimaka wa mai taimako ko magatakarda samun fayil ɗin kotu da ya dace." },
      { objective: "O5", q: "Bayan kotu ta ba da sauƙi, me ya kamata ku yi daga baya?", options: ["Babu komai har abada", "Ku jefar da umarnin", "Kada ku faɗa wa kowa", "Ku sake neman tarihinku don ku tabbata an sabunta shi"], answer: 3, why: "Ba koyaushe ake sabunta tarihi ba, don haka ku duba ku gyara duk wata matsala." },
      { objective: "O5", q: "Wace ce shaida mai kyau ta rayuwarku a yanzu?", options: ["Takardun shaida na darussa da wasiƙun goyon baya", "Tsohuwar katin shaidar gidan yari", "Cak marar rubutu", "Jerin kalmomin sirrinku"], answer: 0, why: "Takardun shaida da wasiƙun goyon baya shaidar gyaran rayuwa ne." },
      { objective: "O6", q: "Waɗanne masu ɗaukar aiki ne dokar Fair Chance Act ta California ta shafa?", options: ["Gwamnatin jiha kaɗai", "Masu ɗaukar aiki na gwamnati da masu zaman kansu masu ma'aikata biyar ko fiye", "Masu ɗaukar aiki masu ma'aikata 500 ko fiye kaɗai", "Gidajen abinci kaɗai"], answer: 1, why: "Dokar ta shafi masu ɗaukar aiki na gwamnati da masu zaman kansu masu ma'aikata biyar ko fiye, da wasu keɓewa." },
      { objective: "O6", q: "Bayan tayi mai sharaɗi, wanne ne mai ɗaukar aiki a California BA zai TAƁA amfani da shi ba?", options: ["Gwajin ƙwarewarku", "Masu ba da shaidar aikinku (references)", "Hukuncin laifin da aka yi wa dismissal", "Ranar fara aikinku"], answer: 2, why: "Hukuncin laifin da aka yi wa sealing, dismissal ko expungement an hana amfani da su." },
      { objective: "O6", q: "Kyakkyawar sanarwar gyaran rayuwa ga mai ɗaukar aiki:", options: ["Tana ɗora laifi a kan kowa", "Tana da tsawon shafi uku", "Tana faɗin abin da ya faru a jimla ɗaya, abin da kuka yi tun daga lokacin, da dalilin da yasa kuka shirya", "Tana ƙarya game da tarihin"], answer: 2, why: "Gajeriya, ta gaskiya, mai mai da hankali kan canji da shiri ita ce mafi kyau." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      1,
      4,
      7,
      8,
      10,
      12,
      14,
      17,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Samun tarihin",
        objective: "O1",
        notYet: "Babu shiri, ko an shirya amfani da shafin binciken tarihi na kamfani mai zaman kansa.",
        meets: "Ya ambaci wurin hukuma na neman tarihin da wurin ɗaukar zanen yatsa.",
        exceeds: "Ya kuma rubuta kuɗin, fee waiver da inda za a sami tarihin tarayya idan ana buƙata."
      },
      {
        name: "Shari'o'i da sauƙin da zai iya dacewa",
        objective: "O3",
        notYet: "Akwai shari'o'in da suka ɓace, ko babu wadda aka yi wa alamar jiha ko tarayya.",
        meets: "Kowace shari'a da aka sani tana da gunduma, shekara, laifi, jiha ko tarayya, da irin sauƙin da zai iya dacewa.",
        exceeds: "Ya rubuta waɗanne shari'o'i za a duba don sauƙi na atomatik, da tambaya ɗaya ga lauya."
      },
      {
        name: "Taimakon shari'a kyauta",
        objective: "O4",
        notYet: "Ba a ambaci mai taimako ba, ko an zaɓi sabis na kuɗi da ke ba da tabbacin sakamako.",
        meets: "Mai taimakon shari'a kyauta da za a fara tuntuɓa, tare da lambar waya da lokutan aiki.",
        exceeds: "An kuma rubuta mai taimako na biyu da tambayoyi uku da za a yi."
      },
      {
        name: "Takardun da za a tattara",
        objective: "O5",
        notYet: "Babu jerin takardu.",
        meets: "Jerin tarihi da shaidun rayuwa a yanzu da za a tattara.",
        exceeds: "An sa tauraro a kan takardu biyu na farko da za a samo a wannan makon."
      },
      {
        name: "Sanarwar gyaran rayuwa",
        objective: "O6",
        notYet: "Babu ita, ta yi tsawo sosai, ko ba ta gaskiya ba ce.",
        meets: "Gajeriyar sanarwa ta gaskiya: abin da ya faru a jimla ɗaya, abin da aka yi tun daga lokacin, da dalilin da yasa aka shirya.",
        exceeds: "An gwada ta da babbar murya kuma ta ambaci shaida kamar takardun shaida ko wasiƙun goyon baya."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka nemi kwafin tarihinsu cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka tuntuɓi taimakon shari'a kyauta ko suka nemi sauƙaƙa tarihin laifi cikin kwanaki 90",
      "Masu koyo da suka ce sun sami tayin aiki ko na gida bayan amfani da sanarwar gyaran rayuwarsu"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani ko kwamfuta mai intanet",
      "Takarda da alƙalami, ko fayil, don shirin aiki da takardun sauƙaƙa tarihin laifi",
      "Bayanan tuntuɓar ofishin legal aid ko cibiyar taimakon kai ta kotu na yankin",
      "Kusan minti 60 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Wannan kwas ba shawarar shari'a ba ne; ku haɗa kai da ofishin legal aid ko asibitin shari'a, ku gayyace su zuwa wani zama idan zai yiwu.",
      "Masu koyo da ke wajen California su nemi shafukan hukuma na jiharsu; ku shirya waɗannan hanyoyin haɗi.",
      "Kada masu koyo su faɗi bayanan shari'o'insu da babbar murya a cikin rukuni ko su rubuta su a AI; ku bar su su yi aiki a kan jerin shari'o'insu a ɓoye.",
      "Ku faɗa wa masu koyo da ba 'yan ƙasar Amurka ba su yi magana da lauyan immigration kafin su nemi kowane sauƙaƙa tarihin laifi.",
      "Ku ba da maki ga shirin aiki da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

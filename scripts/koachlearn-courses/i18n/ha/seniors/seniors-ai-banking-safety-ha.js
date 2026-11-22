"use strict";

// Koach Learn course, Hausa (ha) translation of seniors/seniors-ai-banking-safety.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "seniors-ai-banking-safety-ha",
  lang: "ha",
  translationOf: "seniors-ai-banking-safety",
  category: "Seniors and Technology",
  name: "AI da Tsaron Bankin Intanet",
  skills: "Samun ainihin manhajar bankinku, Shiga asusu lafiya da tabbatarwa ta matakai biyu, Saita sanarwar asusu, Gane zambar banki da ake yi da AI, Amfani da manhajojin biyan kuɗi lafiya, Sanin abin da za ku yi idan wani abu ya lalace",
  outcome: "shiga manhajar ko shafin intanet na hukuma na bankinku lafiya, kunna sanarwa don asusunku, gane kira ko saƙon \"banki\" na bogi, da sanin wanda za ku kira daidai idan wani abu ya lalace.",
  about: [
    "Bankin intanet (online banking) yana barin ku duba kuɗin da ke asusunku, ganin biyan kuɗi da biyan kuɗaɗe ba tare da zuwa reshen banki ba. Wannan kwas ɗin na manya ne da ke son amfani da shi da ƙarfin gwiwa, da kuma kare kansu daga 'yan damfara da yanzu suke amfani da AI don su yi magana da kama kamar bankinku.",
    "Za ku samu ainihin manhajar bankinku, ku shiga lafiya, ku saita sanarwa don ku lura da duk wani abu da ba a saba gani ba, ku koyi dabarun masu kiran \"banki\" na bogi, ku yi amfani da manhajojin biyan kuɗi a hankali, kuma ku yi shirin abin da za ku yi idan wani abu ya lalace.",
    "Wannan kwas ɗin ba ya ba da shawarar kuɗi, kuma ba za a taɓa neman ku rubuta ainihin bayanan asusunku a nan ko a mataimakin AI ba. Wani a iyalinku da kuka amince da shi zai iya zama tare da ku lokacin saitawa. Kowane darasi yana ɗaukar kusan minti biyar. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku shiga manhajar ko shafin intanet na hukuma na bankinku, ku kunna aƙalla sanarwa biyu (kamar ta manyan sayayya da ta ƙarancin kuɗi a asusu), ku rubuta lambar wayar bankinku daga bayan katinku a katin tsaronku, sannan ku yi amfani da alamomi huɗu don ku yi hukunci kan wani misalin saƙon tes na \"banki\".",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya a Amurka da ke da asusu a banki ko ƙungiyar ajiya (credit union), kuma suke fara amfani, ko suka riga suke amfani, da bankin intanet da manhajojin biyan kuɗi, sau da yawa da ƙarfafawar iyali ko bankinsu.",
    startingPoint: "Suna amfani da katin cire kuɗi (debit) ko na bashi (credit) da wayar zamani. Wasu sun riga suna amfani da bankin intanet; wasu suna zuwa reshen banki ko suna amfani da waya kawai. Da yawa ba su da tabbas yadda za su bambanta ainihin manhajar banki ko kiran banki da na bogi.",
    gap: "Bankin intanet yana rage tafiye-tafiye kuma yana taimakawa a gano matsaloli da wuri, amma manya su ne aka fi kai wa hari da kiran banki na bogi, saƙonnin tes da zambar manhajojin biyan kuɗi, kuma kuɗin da aka aika ta manhaja yana da wuyar dawowa. Shiga lafiya, sanarwa, gane na bogi da sanin wanda za a kira suna kare ajiyarsu.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi, gajerun jimloli da manyan matakai masu sauƙi",
      "Na'urori: wayar zamani ko kwamfuta; manhaja da menu na kowane banki sun bambanta",
      "Lokaci: kusan minti 5 a kowane darasi, a hankali",
      "Sirri: ba a raba ainihin kalmomin sirri, lambobin asusu ko code a aji",
      "Bayanan ofisoshin Amurka da layukan taimako suna iya canjawa; masu koyo suna duba shafukan hukuma"
    ],
    prerequisites: "Kwas ɗin \"Tsaron AI da Gane Zamba ga Tsofaffi\" yana da amfani a fara da shi, amma ba dole ba ne."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da wayarku ko kwamfutarku", action: "buɗe manhajar ko shafin intanet na hukuma na bankinku daga shagon manhajoji ko adireshin da ke kan takardar bayanin asusunku", standard: "ba tare da taɓa amfani da hanyar haɗi (link) a cikin tes ko imel ba" },
    { id: "O2", condition: "Idan kuna shiga bankin intanet", action: "amfani da dogon kalmar sirri ta musamman da tabbatarwa ta matakai biyu, da fita daga asusu a kwamfutocin da ake rabawa", standard: "ba tare da raba kalmar sirrinku ko code da kowa ba" },
    { id: "O3", condition: "A manhajar ko shafin intanet na bankinku", action: "kunna sanarwa don manyan sayayya, ƙarancin kuɗi a asusu da canje-canjen shiga asusu", standard: "da aƙalla sanarwa biyu a kunne" },
    { id: "O4", condition: "Idan aka kira ku ko aka aiko muku saƙo da ke cewa bankinku ne", action: "gane alamun tuntuɓar banki ta bogi da kiran lambar da ke bayan katinku", standard: "ba tare da bayar da code, kalmar sirri ko kuɗi ba" },
    { id: "O5", condition: "Kafin ku aika kuɗi da manhajar biyan kuɗi", action: "duba suna da lambar mutumin, da aika kuɗi ga mutanen da kuka sani ido da ido kawai", standard: "ba tare da taɓa biyan wanda ya fara tuntuɓar ku ba" },
    { id: "O6", condition: "Idan an sace kuɗi ko bayanai", action: "kiran bankinku, canja kalmar sirrinku da kai rahoto ga wuraren da suka dace", standard: "kuna farawa nan take da lambar da ke kan katinku" }
  ],
  chapters: [
    {
      name: "Babi na 1: Amfani da bankin intanet lafiya",
      lessons: [
        {
          objectives: ["O1"],
          title: "Samun ainihin manhaja ko shafin intanet na bankinku",
          minutes: 5,
          goal: "Nemo ku buɗe manhaja ko shafin intanet na hukuma na bankinku ba tare da na bogi ya yaudare ku ba.",
          text: [
            "'Yan damfara suna yin manhajoji da shafukan banki na bogi da suke kama da na gaske. AI yana sa kwafin su ƙara kyau. Don haka ku fara daga majiyar da kuka amince da ita.",
            "Don manhaja: ku buɗe shagon manhajoji na hukuma a wayarku, ku nemi ainihin sunan bankinku, ku duba cewa bankinku ne ya wallafa manhajar. Idan ba ku da tabbas, shafin hukuma na bankinku ko ma'aikacin reshe zai iya faɗa muku ainihin sunan manhajar. Don shafin intanet: ku rubuta adireshin bankinku da kanku, ko ku yi amfani da adireshin da aka buga a takardar bayanin asusunku. Kada ku je bankinku ta hanyar haɗi a cikin tes ko imel.",
            "Bankinku zai iya taimaka muku saita bankin intanet a reshe ko ta waya, ta amfani da lambar da ke bayan katinku."
          ],
          steps: ["Ku buɗe shagon manhajoji na hukuma.", "Ku nemi ainihin sunan bankinku.", "Ku duba cewa bankinku ne ya wallafa manhajar.", "A kwamfuta, ku rubuta adireshin da ke takardar bayanin asusunku da kanku.", "Kada ku taɓa amfani da hanyar haɗi a cikin tes ko imel don zuwa bankinku."],
          words: [["Bankin intanet (online banking)", "amfani da manhaja ko shafin intanet na bankinku don gani da sarrafa asusunku."], ["Manhaja ta bogi", "manhajar da aka yi don ta yi kama da ta gaske domin satar bayanai."]],
          slides: [
            { title: "Na bogi suna kama da na gaske", bullets: ["Akwai manhajoji da shafukan banki na bogi", "AI yana sa su ƙara kyau"] },
            { title: "Ku samo ainihin manhajar", bullets: ["Shagon manhajoji na hukuma kawai", "Ku nemi ainihin sunan bankin", "Ku duba cewa bankinku ne ya wallafa ta"] },
            { title: "Ku samo ainihin shafin intanet", bullets: ["Ku rubuta adireshin da kanku", "Ku yi amfani da wanda ke takardar bayanin asusunku", "Kada ku taɓa amfani da link daga tes ko imel"] }
          ],
          tryIt: "Ku duba takardar bayanin asusunku ko katin bankinku, ku nemo adireshin shafin intanet da lambar wayar bankinku. Ku rubuta su a wani kati da kuke ajiyewa a gida.",
          youCanNow: "nemo ainihin manhaja ko shafin intanet na bankinku daga majiyar da kuka amince da ita.",
          quickCheck: [
            { objective: "O1", q: "A ina aka buga ainihin adireshin shafin intanet na bankinku?", options: ["A cikin tes daga lambar da ba ku sani ba", "A tallar da ke tasowa (pop-up)", "A takardar bayanin asusunku", "A imel da ke neman ku sabunta bayananku"], answer: 2, why: "Ku rubuta adireshin daga takardar bayanin asusunku da kanku maimakon amfani da hanyar haɗi." },
            { objective: "O1", q: "Kun ga manhajoji biyu masu sunan bankinku a shagon manhajoji. Me za ku duba?", options: ["Wadda bankinku ne ya wallafa ta", "Wadda tambarinta ya fi haske", "Wadda ta fi sabo", "Wadda take kyauta"], answer: 0, why: "Ku duba cewa bankinku ne ya wallafa manhajar; ku tambayi bankinku idan ba ku da tabbas." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Shiga asusu lafiya",
          minutes: 6,
          goal: "Shiga asusu da kalmar sirri mai ƙarfi da tabbatarwa ta matakai biyu, da fita lafiya.",
          text: [
            "Kalmar sirrinku ya kamata ta yi tsawo kuma ta yi wuyar tsammani: jimla ta kalmomi da yawa da ba su da alaƙa da juna tana aiki sosai. Ku yi amfani da ita don bankinku kaɗai. Ku ajiye ta a wuri mai aminci a gida ko a manhajar ajiyar kalmomin sirri (password manager), ba a rubutu na yau da kullum a wayarku ba, kuma kada ku taɓa raba ta.",
            "Tabbatarwa ta matakai biyu (two-step verification, ko two-factor) tana ƙara bincike na biyu, yawanci code da aka turo wayarku ta tes ko tambaya a cikin manhajar. Ko da wani ya san kalmar sirrinku, ba zai iya shiga ba sai da wannan code. Ku kunna ta a saitunan tsaro na manhajar, ko ku nemi bankinku ya taimaka.",
            "Bankinku ba zai taɓa kiran ku ko tura muku tes yana neman wannan code ba. Duk wanda ya nemi shi ɗan damfara ne. Manhajoji da yawa kuma suna barin ku shiga da zanen yatsanku ko fuskarku, wanda yake da aminci kuma mai sauƙi. A kwamfutar da ake rabawa ko ta ɗakin karatu, kada ku ajiye kalmar sirrinku, kuma ku fita daga asusu idan kun gama."
          ],
          steps: ["Ku zaɓi dogon kalmar sirri ta musamman, kamar kalmomi da yawa da ba su da alaƙa.", "Ku ajiye ta a wuri mai aminci, ba a rubutu na yau da kullum ba.", "Ku kunna tabbatarwa ta matakai biyu.", "Kada ku taɓa raba code ɗin da kowa.", "Ku fita daga asusu a kwamfutocin da ake rabawa."],
          words: [["Tabbatarwa ta matakai biyu (two-step verification)", "bincike na biyu, kamar code da aka turo ta tes, da ake buƙata don shiga."], ["Manhajar ajiyar kalmomin sirri (password manager)", "manhajar da ke ajiye kalmomin sirrinku lafiya."]],
          slides: [
            { title: "Kalmar sirri mai ƙarfi", bullets: ["Doguwa: kalmomi da yawa da ba su da alaƙa", "Don bankinku kaɗai", "A ajiye lafiya, kada a raba"] },
            { title: "Tabbatarwa ta matakai biyu", bullets: ["Code ko tambaya a manhaja a matsayin bincike na biyu", "Tana hana ɓarayin da suka san kalmar sirrinku", "Ku kunna ta a saitunan tsaro"] },
            { title: "Ƙa'ida mafi muhimmanci", bullets: ["Bankinku ba ya taɓa neman wannan code", "Duk wanda ya nema ɗan damfara ne"] },
            { title: "Kwamfutocin da ake rabawa", bullets: ["Kada ku ajiye kalmar sirrinku", "Ku fita daga asusu idan kun gama"] }
          ],
          tryIt: "Idan kuna so, tare da wani a iyali ko ma'aikacin banki, ku buɗe manhaja ko shafin intanet na bankinku, ku duba cewa tabbatarwa ta matakai biyu tana kunne. Idan ba haka ba, ku kunna ta. Kada ku raba kowane code da kowa, har da mu.",
          youCanNow: "shiga asusu lafiya da kalmar sirri mai ƙarfi da tabbatarwa ta matakai biyu.",
          quickCheck: [
            { objective: "O2", q: "Mece ce tabbatarwa ta matakai biyu?", options: ["Rubuta kalmar sirrinku sau biyu", "Bincike na biyu, kamar code da aka turo ta tes, bayan kalmar sirrinku", "Shiga asusu a waya biyu", "Kuɗin caji na banki"], answer: 1, why: "Tana ƙara bincike na biyu, don haka kalmar sirri kaɗai ba ta isa a shiga ba." },
            { objective: "O2", q: "Kuna buƙatar sabuwar kalmar sirri ta banki. Wace ce mafi kyau?", options: ["Ranar haihuwarku", "\"password123\"", "Kalmar sirri ɗaya da kuke amfani da ita don imel", "Jimla ta kalmomi da yawa da ba su da alaƙa, don bankinku kaɗai"], answer: 3, why: "Doguwar jimla ta musamman ta kalmomi marasa alaƙa tana da ƙarfi kuma tana da wuyar tsammani." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Saita sanarwa don gano matsaloli da wuri",
          minutes: 5,
          goal: "Kunna sanarwar asusu don ku lura da abubuwan da ba a saba gani ba da sauri.",
          text: [
            "Sanarwa (alerts) saƙonni ne da bankinku yake turo muku ta tes, imel ko sanarwar manhaja idan wani abu ya faru a asusunku: babbar sayayya, ƙarancin kuɗi a asusu, sabon wanda ake biya ko canjin kalmar sirri.",
            "A manhaja ko shafin intanet na bankin, ku nemi Alerts ko Notifications, sau da yawa a ƙarƙashin bayananku (profile) ko saituna. Ku kunna sanarwa don sayayya da ta wuce adadin da kuka zaɓa, ƙarancin kuɗi a asusu, da duk wani canji ga bayanan shigarku.",
            "Idan sanarwa ta zo game da abin da ba ku yi ba, kada ku amsa ta ko ku kira lambar da ke cikinta. Ku buɗe manhajar bankinku da kanku, ko ku kira lambar da ke bayan katinku."
          ],
          steps: ["Ku buɗe manhaja ko shafin intanet na bankinku.", "Ku nemo Alerts ko Notifications.", "Ku kunna sanarwa don manyan sayayya, ƙarancin kuɗi da canje-canjen shiga asusu.", "Idan sanarwa ta nuna abin da ba ku yi ba, ku kira lambar da ke kan katinku."],
          words: [["Sanarwa (alert)", "saƙo daga bankinku game da abin da ke faruwa a asusunku."], ["Wanda ake biya (payee)", "mutum ko kamfani da kuke aika wa kuɗi."]],
          slides: [
            { title: "Sanarwa tana gano matsaloli da wuri", bullets: ["Manyan sayayya", "Ƙarancin kuɗi a asusu", "Sabon wanda ake biya ko canjin kalmar sirri"] },
            { title: "Ku kunna su", bullets: ["Ku nemo Alerts ko Notifications", "Ku zaɓi adadin kuɗinku", "Tes, imel ko manhaja"] },
            { title: "Abin da ba ku yi ba?", bullets: ["Kada ku amsa ko ku kira lambar da ke ciki", "Ku buɗe manhajar da kanku", "Ko ku kira lambar da ke kan katinku"] }
          ],
          tryIt: "Ku kunna aƙalla sanarwa biyu a manhaja ko shafin intanet na bankinku: ɗaya don sayayya da ta wuce adadin da kuka zaɓa, ɗaya kuma don ƙarancin kuɗi a asusu.",
          youCanNow: "saita sanarwar banki da mayar da martani lafiya idan ɗaya ta zo.",
          quickCheck: [
            { objective: "O3", q: "Mece ce sanarwar banki?", options: ["Saƙo daga bankinku idan wani abu ya faru a asusunku", "Tayin sayarwa", "Kira daga sashen yaƙi da zamba", "Takardar bayanin asusu a takarda"], answer: 0, why: "Sanarwa tana faɗa muku abubuwan da ke faruwa kamar babbar sayayya ko ƙarancin kuɗi." },
            { objective: "O3", q: "Wata sanarwa ta ce kun canja kalmar sirrinku, amma ba ku yi ba. Me za ku yi?", options: ["Ku amsa sanarwar", "Ku kira lambar da ke cikin sanarwar", "Ku yi watsi da ita", "Ku buɗe manhajar bankinku da kanku ko ku kira lambar da ke kan katinku"], answer: 3, why: "Kada ku amsa ko ku kira lambar da ke cikin sanarwar; ku tuntuɓi bankinku da kanku." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Amfani da bankin intanet lafiya",
        questions: [
          { objective: "O1", q: "Wani tes yana da hanyar haɗi don \"sabunta bayananku na banki\". Yaya ya kamata ku je bankinku?", options: ["Ku amsa da kalmar sirrinku", "Ku taɓa hanyar haɗin", "Ku rubuta adireshin da kanku ko ku yi amfani da manhajar hukuma", "Ku kira lambar da ke cikin tes ɗin"], answer: 2, why: "Hanyoyin haɗi a cikin tes suna iya kai ku shafukan bogi." },
          { objective: "O1", q: "Yaya za ku gane cewa manhajar banki ita ce ta gaske?", options: ["Tana a shagon hukuma kuma bankinku ne ya wallafa ta", "Ta fito daga pop-up", "Baƙo ne ya turo ta", "Tana da kyakkyawan hoto"], answer: 0, why: "Ku duba shagon da wanda ya wallafa ta." },
          { objective: "O2", q: "Me tabbatarwa ta matakai biyu take ƙarawa?", options: ["Kalmar sirri ta biyu da za a raba", "Asusun banki na biyu", "Kuɗi kyauta", "Bincike na biyu, kamar code da aka turo ta tes"], answer: 3, why: "Tana hana ɓarayin da suka san kalmar sirrinku kawai." },
          { objective: "O2", q: "Wani ya kira yana cewa daga bankinku yake, yana neman code ɗin da aka turo muku yanzu ta tes. Ku:", options: ["Karanta masa shi", "Katse wayar; bankinku ba ya taɓa neman wannan code", "Tura masa shi ta tes", "Ba shi rabinsa"], answer: 1, why: "Duk wanda ya nemi code ɗin ɗan damfara ne." },
          { objective: "O3", q: "Wata sanarwa ta nuna sayayyar da ba ku yi ba. Ku:", options: ["Amsa sanarwar", "Kira lambar da ke bayan katinku", "Kira lambar da ke cikin sanarwar", "Yi watsi da ita"], answer: 1, why: "Ku yi amfani da lambar da kuka riga kuka amince da ita." }
        ]
      }
    },
    {
      name: "Babi na 2: Gane zamba da kasancewa cikin kariya",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kiran waya da saƙonnin banki na bogi da ake yi da AI",
          minutes: 5,
          goal: "Gane kira ko saƙo na bogi daga \"sashen yaƙi da zamba na banki\".",
          text: [
            "Wata zamba da aka saba: kira ko tes yana cewa sashen yaƙi da zamba na bankinku ne, kuma akwai matsala a asusunku. Sunan da ke bayyana a waya (caller ID) ma yana iya nuna sunan bankinku, kuma AI yana iya sa murya da saƙonni su yi kama da na ƙwararru sosai.",
            "Sannan su nemi ku yi wani abu: ku karanta musu code, ku \"tabbatar\" da kalmar sirrinku, ku tura kuɗinku zuwa \"asusu mai aminci\", ku cire tsabar kuɗi don ɗan aike (courier), ko ku sayi katin kyauta (gift card). Waɗannan su ne alamun zamba na FTC (hukumar kare masu sayayya ta Amurka): yin kamar wani, matsala, matsi, da wata baƙuwar hanyar biya. FTC ta ce ƙungiyoyin gaske ba za su taɓa faɗa muku ku tura kuɗi don kare shi ba.",
            "Abin da za ku yi: ku katse wayar. Sannan ku kira lambar da ke bayan katinku da kanku. Idan gaskiya ne, bankin zai sani."
          ],
          steps: ["Ku lura: wani \"banki\" ya tuntuɓe ku game da matsala.", "Ku lura: suna neman code, kalmar sirri, tura kuɗi, tsabar kuɗi ko katin kyauta.", "Ku katse wayar ko ku daina amsawa.", "Ku kira lambar da ke bayan katinku da kanku."],
          words: [["Spoofing (sunan kira na bogi)", "sa caller ID na bogi ya nuna suna ko lambar wani kamfani na gaske."], ["Zambar \"asusu mai aminci\"", "dabarar da ke faɗa muku ku tura kuɗinku don \"kare\" shi, kai tsaye zuwa ga ɗan damfarar."]],
          slides: [
            { title: "Kiran bogi na sashen zamba", bullets: ["\"Wannan sashen yaƙi da zamba na bankinku ne\"", "Ana iya yin caller ID na bogi", "AI yana sa shi ya yi kama da na ƙwararru"] },
            { title: "Abin da suke nema", bullets: ["Code ko kalmomin sirri", "Tura kuɗi zuwa \"asusu mai aminci\"", "Tsabar kuɗi don ɗan aike, ko katin kyauta"] },
            { title: "Abin da za ku yi", bullets: ["Ku katse wayar", "Ku kira lambar da ke kan katinku", "Idan gaskiya ne, bankin zai sani"] }
          ],
          sources: [{ name: "FTC: How to avoid a scam (yadda ake guje wa zamba)", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Ku tambayi mataimakin AI: \"Mene ne alamun cewa kira daga sashen yaƙi da zamba na bankina na bogi ne?\" Ku kwatanta amsarsa da wannan darasi, ku rubuta guda uku da kuke ganin sun fi muhimmanci a katinku.",
          youCanNow: "gane kira ko saƙon banki na bogi da tabbatar da shi lafiya.",
          quickCheck: [
            { objective: "O4", q: "Me ake nufi idan caller ID na mai kira ya nuna sunan bankinku?", options: ["Kiran tabbas na gaske ne", "Ba wani tabbas; ana iya yin caller ID na bogi", "Bankinku yana rufewa", "Dole ku sake kiran lambar nan"], answer: 1, why: "'Yan damfara suna iya sa caller ID ya nuna sunan bankinku." },
            { objective: "O4", q: "Wani mai kira daga \"sashen zamba\" ya ce ku tura ajiyarku zuwa asusu mai aminci yau. Me za ku yi?", options: ["Ku tura shi da sauri", "Ku ba su kalmar sirrinku su duba", "Ku katse wayar ku kira lambar da ke bayan katinku", "Ku cire tsabar kuɗi don ɗan aikensu"], answer: 2, why: "Ƙungiyoyin gaske ba sa taɓa faɗa muku ku tura kuɗi don kare shi; ku katse ku kira bankinku da kanku." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Amfani da manhajojin biyan kuɗi a hankali",
          minutes: 5,
          goal: "Aika kuɗi da manhajar biyan kuɗi ga mutanen da kuka sani kuma kuka amince da su kawai.",
          text: [
            "Manhajojin biyan kuɗi (kamar Zelle, Venmo, PayPal da Cash App) suna barin ku aika kuɗi daga wayarku. Suna da amfani wajen mayar wa wani a iyali kuɗi, amma kuɗin yawanci yana tafiya nan take kuma yana iya yin wuyar dawowa sosai.",
            "Ku aika kuɗi ga mutanen da kuka sani ido da ido kawai. Ku sake duba suna, lambar waya ko imel kafin ku aika. Kada ku taɓa biyan baƙo, mai sayarwa a intanet da ba ku sani ba, ko duk wanda ya fara tuntuɓar ku yana cewa shi bankinku ne, gwamnati ko wani kamfani.",
            "Ku yi hankali da dabarar \"biyan kuɗi bisa kuskure\": baƙo ya aiko muku kuɗi, sannan ya nemi ku mayar masa. Kada ku mayar; ku tuntuɓi bankinku ko kamfanin manhajar ta manhajarsa ko shafinsa na hukuma."
          ],
          steps: ["Ku biya mutanen da kuka sani ido da ido kawai.", "Ku sake duba suna da lamba kafin ku aika.", "Kada ku taɓa biyan wanda ya fara tuntuɓar ku.", "Idan baƙo ya biya ku \"bisa kuskure\", ku tuntuɓi bankinku ko manhajar, kada ku mayar da kuɗi."],
          words: [["Manhajar biyan kuɗi (payment app)", "manhajar da ke aika kuɗi daga wayarku zuwa ga wani mutum."], ["Tura kuɗi nan take (instant transfer)", "kuɗin da ke tafiya nan take kuma yana da wuyar mayarwa."]],
          slides: [
            { title: "Suna da amfani, amma suna da sauri", bullets: ["Zelle, Venmo, PayPal, Cash App", "Kuɗi yana tafiya nan take", "Yana da wuyar dawowa"] },
            { title: "Amfani lafiya", bullets: ["Mutanen da kuka sani ido da ido kawai", "Ku sake duba suna da lamba", "Kada ku taɓa biyan wanda ya fara tuntuɓar ku"] },
            { title: "\"Kai, na aika maka bisa kuskure\"", bullets: ["Kada ku mayar da kuɗi", "Ku tuntuɓi bankinku ko manhajar"] }
          ],
          sources: [{ name: "FTC: How to avoid a scam (alamun gargaɗi wajen biya)", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Ku rubuta a katinku: \"Ina amfani da manhajojin biyan kuɗi da mutanen da na sani ido da ido kawai. Ba na taɓa biyan wanda ya fara tuntuɓata.\"",
          youCanNow: "amfani da manhajojin biyan kuɗi lafiya da guje wa dabarun da aka saba yi da su.",
          quickCheck: [
            { objective: "O5", q: "Me yasa za ku yi hankali da manhajojin biyan kuɗi?", options: ["Suna cajin kuɗi mai yawa", "Suna aiki a banki kawai", "Suna da jinkiri", "Kuɗi yawanci yana tafiya nan take kuma yana da wuyar dawowa"], answer: 3, why: "Kuɗin manhajar biya yana tafiya da sauri kuma yana da wuyar dawowa sosai." },
            { objective: "O5", q: "Kuna son mayar wa 'yar ɗan'uwanku $20 ta manhaja. Me za ku yi kafin ku taɓa Send?", options: ["Ku sake duba sunanta da lambar wayarta", "Ku aika ga sunan farko da ya bayyana", "Ku aika ƙari don kada a rasa", "Ku nemi baƙo ya aika"], answer: 0, why: "Sake duba suna da lamba yana hana kuɗi zuwa ga wanda ba shi ba." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Idan wani abu ya lalace",
          minutes: 5,
          goal: "Jera matakan da za ku ɗauka da sauri idan an sace kuɗi ko bayanai.",
          text: [
            "Ku yi sauri. Ku kira bankinku nan take ta lambar da ke bayan katinku. Ku faɗa musu abin da ya faru. Ku nemi su dakatar ko su mayar da biyan kuɗi idan zai yiwu, ku canja kalmar sirrinku, kuma ku riƙa sa ido kan asusunku.",
            "Sannan ku kai rahoto. Ku kai rahoton zambar ga Federal Trade Commission (FTC) a ReportFraud.ftc.gov. Idan wani yana amfani da bayanan shaidarku, ku je IdentityTheft.gov don samun shirin farfaɗowa kyauta. Idan shekarunku 60 ko fiye, layin taimako na National Elder Fraud Hotline (layin zambar manya) kyauta ne: 833-FRAUD-11 (833-372-8311).",
            "Ku yi hankali da zamba ta biyu: mutanen da ke kira suna tayin \"dawo\" muku da kuɗinku idan kun biya su, yawanci 'yan damfara ne su ma. Kuma babu kunya idan an kai muku hari. Faɗa wa wani a iyali da kuka amince da shi yana taimakawa a kare ku da wasu."
          ],
          steps: ["Ku kira bankinku nan take ta lambar da ke kan katinku.", "Ku canja kalmar sirrinku.", "Ku kai rahoto a ReportFraud.ftc.gov.", "Ku yi amfani da IdentityTheft.gov idan an yi amfani da bayanan shaidarku.", "Shekaru 60 zuwa sama: ku kira 833-372-8311.", "Ku yi watsi da duk wanda ke tayin dawo da kuɗi idan an biya shi."],
          words: [["Satar bayanan shaida (identity theft)", "lokacin da wani ya yi amfani da bayananku na sirri don ya yi kamar shi ne ku."], ["Zambar dawo da kuɗi (recovery scam)", "dabarar da 'yan damfara ke tayin dawo da kuɗin da aka sace idan an biya su."]],
          slides: [
            { title: "Ku yi sauri", bullets: ["Ku kira bankinku ta lambar da ke kan katinku", "Ku nemi a dakatar ko a mayar da biyan kuɗi", "Ku canja kalmar sirrinku"] },
            { title: "Ku kai rahoto", bullets: ["ReportFraud.ftc.gov", "IdentityTheft.gov", "Shekaru 60 zuwa sama: 833-FRAUD-11 (833-372-8311)"] },
            { title: "Ku yi hankali da zamba ta biyu", bullets: ["Biya don \"dawo\" da kuɗi = zamba", "Babu kunya: ku faɗa wa wanda kuka amince da shi"] }
          ],
          sources: [{ name: "FTC: Report fraud (kai rahoton zamba)", url: "https://reportfraud.ftc.gov/" }, { name: "FTC: What to know about identity theft (satar bayanan shaida)", url: "https://consumer.ftc.gov/articles/what-know-about-identity-theft" }, { name: "DOJ Office for Victims of Crime: National Elder Fraud Hotline", url: "https://ovc.ojp.gov/program/stop-elder-fraud/providing-help-restoring-hope" }],
          tryIt: "Aikin ƙarshe: ku shiga manhaja ko shafin intanet na hukuma na bankinku, ku kunna sanarwa biyu, ku rubuta lambar bankinku daga bayan katinku a katin tsaronku, sannan ku yi hukunci kan wannan misalin tes da alamomi huɗu: \"BANK ALERT: Your account is locked. Verify now at the link or it will be closed today.\" (Ma'ana: \"SANARWAR BANKI: An kulle asusunku. Ku tabbatar yanzu ta hanyar haɗin, ko za a rufe shi yau.\")",
          youCanNow: "amfani da bankin intanet lafiya, gane tuntuɓar banki ta bogi, amfani da manhajojin biyan kuɗi a hankali, da ɗaukar mataki da sauri idan wani abu ya lalace.",
          quickCheck: [
            { objective: "O6", q: "Me IdentityTheft.gov take ba ku?", options: ["Bashi", "Shirin farfaɗowa kyauta idan wani yana amfani da bayanan shaidarku", "Sabon asusun banki", "Inshora"], answer: 1, why: "IdentityTheft.gov tana ba da shirin farfaɗowa kyauta." },
            { objective: "O6", q: "Yanzu kun gane cewa kun aika kuɗi ga ɗan damfara. Mene ne matakinku na farko?", options: ["Ku jira mako ɗaya", "Ku sake kiran ɗan damfarar", "Ku kira bankinku nan take ta lambar da ke kan katinku", "Ku biya wani kamfani ya dawo da shi"], answer: 2, why: "Ku yi sauri: ku fara kiran bankinku, sannan ku kai rahoton zambar." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gane zamba da kasancewa cikin kariya",
        questions: [
          { objective: "O4", q: "Caller ID ya nuna sunan bankinku. Shin hakan ya tabbatar cewa kiran na gaske ne?", options: ["Sai idan sun san sunanku", "Eh, koyaushe", "Sai da safe kawai", "A'a, ana iya yin caller ID na bogi"], answer: 3, why: "Spoofing yana yin caller ID na bogi." },
          { objective: "O4", q: "Wani mai kira ya faɗa muku ku tura ajiyarku zuwa \"asusu mai aminci\". Wannan:", options: ["Zamba ce", "Al'adar banki ce ta yau da kullum", "Doka ce ta buƙace shi", "Shawara ce mai kyau"], answer: 0, why: "Ƙungiyoyin gaske ba sa taɓa neman ku tura kuɗi don kare shi." },
          { objective: "O5", q: "Ga wa ya kamata ku aika kuɗi da manhajar biyan kuɗi?", options: ["Masu sayarwa a intanet da ba ku sani ba", "Duk wanda ya nema", "Mutanen da kuka sani ido da ido kawai", "Masu kira daga \"gwamnati\""], answer: 2, why: "Kuɗin manhajar biya yana da wuyar dawowa." },
          { objective: "O5", q: "Baƙo ya aiko muku kuɗi \"bisa kuskure\" kuma ya nemi ku mayar masa. Ku:", options: ["Ba shi kalmar sirrinku", "Mayar masa nan take", "Aika ninki biyu", "Tuntuɓi bankinku ko manhajar maimakon haka"], answer: 3, why: "Wannan dabara ce da aka saba; ku bar bankin ya kula da ita." },
          { objective: "O6", q: "Wani yana tayin dawo da kuɗinku da aka sace idan kun biya shi. Wannan wataƙila:", options: ["Bankinku ne", "Shirin gwamnati ne", "Wata zamba ce kuma", "Taimako ne kyauta"], answer: 2, why: "Zambar dawo da kuɗi tana kai wa mutanen da aka riga aka zamba hari." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI da Tsaron Bankin Intanet",
    questions: [
      { objective: "O1", q: "Bankin intanet yana barin ku:", options: ["Buga kuɗi", "Gani da sarrafa asusunku a manhaja ko shafin intanet", "Tsallake duk kuɗaɗen da kuke biya", "Guje wa kalmomin sirri"], answer: 1, why: "Bankinku ne, a wayarku ko kwamfutarku." },
      { objective: "O1", q: "Wuri mai aminci don samun manhajar bankinku shi ne:", options: ["Shagon manhajoji na hukuma, wadda bankinku ya wallafa", "Hanyar haɗi a cikin tes", "Pop-up", "Abin da aka haɗa a imel"], answer: 0, why: "Shagunan hukuma da masu wallafa na gaske abin amincewa ne." },
      { objective: "O1", q: "A ina za ku samu ainihin adireshin shafin intanet na bankinku?", options: ["A takardar bayanin asusunku ko katinku", "A cikin tes daga baƙo", "A tallar pop-up", "A sharhi a kafofin sada zumunta"], answer: 0, why: "Takardar bayanin asusunku da katinku daga banki suke." },
      { objective: "O2", q: "Kalmar sirri mai ƙarfi ita ce:", options: ["Ranar haihuwarku", "Doguwa, kamar kalmomi da yawa marasa alaƙa, kuma don bankinku kaɗai", "\"password\"", "Sunan dabbar gidanku"], answer: 1, why: "Doguwar kalmar sirri ta musamman tana da wuyar tsammani." },
      { objective: "O2", q: "A ina BA za ku ajiye kalmar sirrin bankinku ba?", options: ["A wuri mai aminci a gida", "A manhajar ajiyar kalmomin sirri", "A rubutu na yau da kullum a wayarku", "A ƙwaƙwalwarku"], answer: 2, why: "Rubutu na yau da kullum ba shi da tsaro." },
      { objective: "O2", q: "Tabbatarwa ta matakai biyu tana kare ku domin:", options: ["Tana cire kalmomin sirri", "Tana raba kalmar sirrinku", "Tana kashe sanarwa", "Ɓarawo yana buƙatar code ɗin tare da kalmar sirrinku"], answer: 3, why: "Bincike na biyu yana hana ɓarayi." },
      { objective: "O2", q: "Shin bankinku yana taɓa kira yana neman code ɗin da ya turo muku ta tes?", options: ["A ranakun hutu kawai", "Eh, kowane mako", "A'a", "Don manyan asusu kawai"], answer: 2, why: "Duk wanda ya nemi code ɗin ɗan damfara ne." },
      { objective: "O2", q: "A kwamfutar ɗakin karatu bayan amfani da banki, ya kamata ku:", options: ["Fita daga asusu kuma kada ku ajiye kalmar sirrinku", "Bar asusun a buɗe", "Ajiye kalmar sirrin", "Rubuta kalmar sirrin a can"], answer: 0, why: "Wannan yana hana mutum na gaba shiga." },
      { objective: "O3", q: "Sanarwar banki tana faɗa muku game da:", options: ["Sababbin manhajoji", "Yanayi", "Sakamakon wasanni", "Abin da ke faruwa a asusunku, kamar manyan sayayya"], answer: 3, why: "Sanarwa tana nuna abubuwan da ke faruwa a asusu." },
      { objective: "O3", q: "Sanarwa mai amfani da za a kunna ita ce:", options: ["Barkwanci na kullum", "Ƙarancin kuɗi a asusu", "Tallace-tallace", "Babu ko ɗaya"], answer: 1, why: "Sanarwar ƙarancin kuɗi tana hana matsaloli." },
      { objective: "O3", q: "Wata sanarwa ta nuna cajin da ba ku yi ba. Za ku kira:", options: ["Lambar da ke cikin sanarwar", "Lambar da ke bayan katinku", "Abokin abokinku", "Babu kowa"], answer: 1, why: "Ku yi amfani da lambar da kuka riga kuka amince da ita." },
      { objective: "O4", q: "\"Spoofing\" yana nufin:", options: ["Sanarwar banki", "Wani nau'in asusun ajiya", "Manhajar ajiyar kalmomin sirri", "Yin caller ID na bogi"], answer: 3, why: "Kiran spoofing yana kama da daga bankinku yake." },
      { objective: "O4", q: "Wani mai kira daga \"sashen zamba\" ya nemi ku cire tsabar kuɗi don ɗan aike. Wannan:", options: ["Zamba ce", "Tsarin banki ne na yau da kullum", "Dokar haraji ce", "Hanyar tsaro ce"], answer: 0, why: "Bankuna ba sa aika 'yan aike don karɓar tsabar kuɗinku." },
      { objective: "O4", q: "Me ya kamata ku yi da kiran banki da ake shakka?", options: ["Ku ba su code", "Ku ci gaba da magana", "Ku katse wayar ku kira lambar da ke kan katinku", "Ku tura kuɗinku"], answer: 2, why: "Sake kira ta lambar da kuka amince da ita yana bayyana gaskiya." },
      { objective: "O5", q: "Kuɗin manhajar biyan kuɗi:", options: ["Yana ɗaukar wata ɗaya", "Koyaushe ana iya mayar da shi", "Mayar da shi kyauta ne", "Yawanci yana tafiya nan take kuma yana da wuyar dawowa"], answer: 3, why: "Shi yasa kuke biyan mutanen da kuka sani kawai." },
      { objective: "O5", q: "Kafin ku aika kuɗi da manhaja, ya kamata ku:", options: ["Tsallake dubawa", "Aika da sauri", "Sake duba suna da lamba", "Nemi baƙon ya tabbatar"], answer: 2, why: "Ƙaramin kuskuren rubutu yana iya tura kuɗi ga wanda ba shi ba." },
      { objective: "O6", q: "Idan an sace kuɗi, kiran FARKO shi ne ga:", options: ["Ɗan damfarar", "Bankinku, ta lambar da ke kan katinku", "Kamfanin dawo da kuɗi", "Lambar pop-up"], answer: 1, why: "Bankinku zai iya dakatar ko mayar da biyan kuɗi." },
      { objective: "O6", q: "A ina kuke kai rahoton zamba ga FTC?", options: ["ReportFraud.ftc.gov", "Rubutu a kafofin sada zumunta", "Shafin ɗan damfarar", "Amsa ta tes"], answer: 0, why: "Shafin FTC ne na kai rahoto." },
      { objective: "O6", q: "IdentityTheft.gov tana ba ku:", options: ["Shirin farfaɗowa kyauta", "Sabon asusun banki", "Kuɗi kyauta", "Kalmar sirri"], answer: 0, why: "Tana jagorantar farfaɗowa daga satar bayanan shaida." },
      { objective: "O6", q: "Lambar National Elder Fraud Hotline ita ce:", options: ["Lamba daga tes na zamba", "833-372-8311", "411", "0"], answer: 1, why: "833-FRAUD-11 (833-372-8311) ma'aikatar shari'a ta Amurka (DOJ) ce ke gudanar da ita." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [1, 3, 5, 8, 11, 13, 14, 16]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Manhaja ko shafin intanet na hukuma",
        objective: "O1",
        notYet: "An shiga ta hanyar haɗi a cikin saƙo ko manhajar da ba ta hukuma ba.",
        meets: "An shiga ta manhajar hukuma daga shagon manhajoji ko adireshin da aka rubuta daga takardar bayanin asusu.",
        exceeds: "Zai iya nuna yadda ake duba cewa bankin ne ya wallafa manhajar."
      },
      {
        name: "Shiga lafiya",
        objective: "O2",
        notYet: "Kalmar sirri gajeriya ce, an sake amfani da ita, ko an rubuta ta a rubutu na yau da kullum a waya.",
        meets: "An shiga da kalmar sirri mai ƙarfi kuma tabbatarwa ta matakai biyu tana kunne.",
        exceeds: "Yana shiga da zanen yatsa ko fuska, ko manhajar ajiyar kalmomin sirri, kuma ya san bankin ba ya taɓa neman code ɗin."
      },
      {
        name: "Sanarwa a kunne",
        objective: "O3",
        notYet: "Sanarwar da ke kunne ba su kai biyu ba.",
        meets: "Aƙalla sanarwa biyu a kunne, kamar ta manyan sayayya da ta ƙarancin kuɗi.",
        exceeds: "Ya kuma kunna sanarwa don canje-canjen shiga ko kalmar sirri."
      },
      {
        name: "Lambar banki a katin tsaro",
        objective: "O6",
        notYet: "Babu lamba, ko lambar da aka kwafo daga saƙo.",
        meets: "An rubuta lambar bankin daga bayan katin a katin tsaro.",
        exceeds: "Ya kuma rubuta ReportFraud.ftc.gov kuma, idan shekarunsa 60 ko fiye, Elder Fraud Hotline."
      },
      {
        name: "An yi hukunci kan misalin tes",
        objective: "O4",
        notYet: "Bai gane cewa misalin tes na \"banki\" zamba ce ba.",
        meets: "Ya yi hukunci daidai kan misalin tes kuma ya faɗi alamomin da ya gani.",
        exceeds: "Ya faɗi daidai abin da za a yi a gaba: kada a amsa, a kira lambar da ke kan katin."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da ke da aƙalla sanarwar banki biyu da tabbatarwa ta matakai biyu a kunne a binciken biyo baya na kwanaki 30",
      "Masu koyo da suka ce sun gane kuma sun yi watsi da kira ko saƙon banki na bogi",
      "Masu koyo da suka fara wani kwas na Seniors and Technology (Manya da Fasaha) cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani ko kwamfuta da manhaja ko shafin intanet na bankin mai koyo na kansa",
      "Katin bankin mai koyo (don lambar da ke bayansa kawai) da katin tsaro marar rubutu",
      "Misalin saƙon tes na \"banki\" da aka buga a takarda don aikin ƙarshe",
      "Kusan minti 60 gaba ɗaya, a gajerun zama masu natsuwa: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Kada ku taɓa duba, nema ko rubuta kalmar sirri, lambar asusu ko code na mai koyo; masu koyo suna shiga a ɓoye.",
      "Manhajar kowane banki ta bambanta; ku gayyaci masu koyo su nemi bankinsu ko reshe ya taimaka wajen saita sanarwa.",
      "Ku yi amfani da misalan saƙonni na ƙirƙira don atisaye, kuma ku yi wasan kwaikwayon kiran bogi daga sashen zamba.",
      "Bayanan layin taimako suna iya canjawa; ku duba ReportFraud.ftc.gov da shafin Elder Fraud Hotline kafin zaman.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

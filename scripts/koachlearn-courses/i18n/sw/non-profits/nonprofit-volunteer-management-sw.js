"use strict";

// Koach Learn course (Swahili translation of non-profits/nonprofit-volunteer-management.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "nonprofit-volunteer-management-sw",
  lang: "sw",
  translationOf: "nonprofit-volunteer-management",
  category: "Non Profits",
  name: "Usimamizi wa Wajitolea",
  skills: "Kuandika maelezo ya nafasi za wajitolea, Kutafuta na kuchuja wajitolea, Kuwapokea na kuwafundisha, Kupanga ratiba na kusimamia, Kuwatambua na kuwabakiza, Kufuatilia saa za wajitolea",
  outcome: "kuendesha mpango wa wajitolea kuanzia mwanzo hadi mwisho: kuandika maelezo wazi ya nafasi, kutafuta na kuchuja wajitolea kwa usalama, kuwapokea na kuwafundisha, kupanga ratiba na kuwasimamia, kuwashukuru kwa njia zinazowafanya warudi, na kufuatilia saa zao.",
  about: [
    "Kozi hii ni kwa waratibu wa wajitolea, wafanyakazi wa mashirika yasiyo ya kiserikali, viongozi wa makanisa na huduma za kidini, vikundi vya wazazi shuleni, ligi za michezo za vijana, benki za chakula na yeyote anayetegemea wajitolea.",
    "Wajitolea wanatoa muda wao bure, kwa hiyo jinsi unavyowasimamia ndiyo inaamua kama watarudi. Utajifunza kuandika maelezo ya nafasi, kupata na kuchuja watu wanaofaa (pamoja na ukaguzi wa historia kwa nafasi zinazohusu watoto au watu wazima walio hatarini), kuwafundisha, kupanga ratiba na kuwasimamia, kuwashukuru na kuwabakiza, na kufuatilia saa zao.",
    "Kila somo linachukua kama dakika tano, pamoja na kazi ya \"Jaribu sasa\" unayoweza kutumia kwa nafasi halisi ya mjitolea. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Kwa maswali ya sheria, bima na kodi, uliza mtaalamu na vyanzo rasmi vilivyotajwa katika masomo. (Ukitaka kutumia AI kutafuta wajitolea, angalia kozi ya AI kwa kutafuta wajitolea.)"
  ],
  finalTask: "Andaa kifurushi cha mjitolea kwa nafasi moja halisi: maelezo ya nafasi, ujumbe wa kutafuta wajitolea na hatua za kuchuja (pamoja na ukaguzi wa historia kama nafasi inahusu watoto au watu wazima walio hatarini), muhtasari wa mafunzo ya utangulizi ya dakika 30, ratiba ya mwezi mmoja yenye msimamizi aliyetajwa, mawazo mawili ya kuwatambua, na karatasi rahisi ya kujisajili au spreadsheet inayofuatilia saa.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Waratibu wa wajitolea, wafanyakazi wa mashirika yasiyo ya kiserikali, viongozi wa makanisa na huduma za kidini, vikundi vya wazazi shuleni, ligi za michezo za vijana, benki za chakula na yeyote ambaye kazi yake inategemea wajitolea.",
    startingPoint: "Wamewahi kutafuta wajitolea au kufanya kazi pamoja nao bila mpangilio rasmi, mara nyingi kwa kuambiana mdomo kwa mdomo. Wachache hutumia maelezo ya nafasi yaliyoandikwa, uchujaji kulingana na hatari, mafunzo ya utangulizi yaliyopangwa au mfumo wa kufuatilia saa.",
    gap: "Wajitolea wanatoa muda wao bure, kwa hiyo mpangilio mbaya, kukosa mafunzo au kukosa shukrani huwafanya waondoke, na uchujaji dhaifu unaweza kuwaweka watoto na watu wazima walio hatarini katika hatari. Kifurushi kamili cha mjitolea husaidia mashirika kuwabakiza wajitolea wazuri, kuwalinda watu wanaowahudumia na kuonyesha matokeo yao kwa wafadhili.",
    constraints: [
      "Waratibu mara nyingi ni wa muda mfupi au ni wajitolea wenyewe; masomo ya dakika 5",
      "Zana za bure au za gharama ndogo: karatasi, spreadsheet, fomu ya bure ya kujisajili",
      "Sheria za ukaguzi wa historia zinatofautiana kwa jimbo, mpango na kampuni ya bima; wanafunzi waulize kampuni yao ya bima na mwanasheria",
      "Faragha: kumbukumbu za wajitolea na wateja zinabaki siri; hakuna majina wala picha za wateja bila ruhusa",
      "Hakuna ushauri wa kodi; wajitolea wanaelekezwa kwa IRS Publication 526 na mtaalamu wa kodi"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kwa nafasi moja ya mjitolea ambayo shirika lako linahitaji", action: "kuandika maelezo ya nafasi yanayosema matokeo, kazi, muda, ujuzi na mtu ambaye mjitolea atamripoti", standard: "yakiwa na sehemu zote tano na sentensi ya kwanza kuhusu matokeo" },
    { id: "O2", condition: "Ukipewa nafasi ya mjitolea na watu inaowahudumia", action: "kuandika ujumbe wa kutafuta wajitolea na kuchagua hatua za kuchuja zinazolingana na hatari ya nafasi", standard: "pamoja na marejeo na ukaguzi wa historia kwa ruhusa ya maandishi kwa nafasi yoyote yenye watoto au watu wazima walio hatarini" },
    { id: "O3", condition: "Kwa wajitolea wapya katika nafasi yako", action: "kupanga mafunzo ya utangulizi ya dakika 30 na kufundisha nafasi kwa hatua nne: eleza, onyesha, jaribu na maoni", standard: "yakihusu usalama, faragha, kujisajili na jinsi ya kughairi" },
    { id: "O4", condition: "Ukitumia spreadsheet, kalenda ya pamoja au karatasi", action: "kutengeneza ratiba ya mwezi mmoja yenye kiongozi wa zamu aliyetajwa, wa akiba na ujumbe wa kukumbusha", standard: "kila zamu ikiwa na watu na kiongozi aliyetajwa kwa kila moja" },
    { id: "O5", condition: "Kwa wajitolea unaowasimamia", action: "kupanga njia mahususi za kuwatambua na kubaini sababu za kawaida zinazowafanya wajitolea waondoke", standard: "pamoja na shukrani moja ndogo na tukio moja kubwa" },
    { id: "O6", condition: "Kwa nafasi moja ya mjitolea", action: "kuandaa karatasi ya kujisajili au spreadsheet inayofuatilia saa za wajitolea na kutumia jumla zake", standard: "ikiandika jina, tarehe, mwanzo, mwisho, saa na nafasi huku kumbukumbu zikibaki siri" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuwaleta wajitolea",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuandika maelezo ya nafasi ya mjitolea",
          minutes: 5,
          goal: "Andika maelezo wazi na ya kuvutia kwa kazi moja ya mjitolea.",
          text: [
            "Wajitolea hufanya kazi vizuri zaidi wanapojua hasa wanachoombwa. Maelezo ya nafasi ni kama maelezo mafupi ya kazi: yanasema nafasi ni nini, kwa nini ni muhimu, mjitolea atafanya nini, muda unaohitajika, ujuzi au tabia zinazohitajika, mafunzo au uchujaji wowote, na atamripoti nani.",
            "Yafanye yavutie. Anza na matokeo: \"Saidia familia 200 kupata chakula kila Jumamosi.\" Kuwa mkweli kuhusu muda, pamoja na muda unaotumaini watabaki (tukio moja, au miezi sita). Toa nafasi fupi na zinazobadilika pamoja na zile ndefu; watu wengi wanaweza kutoa saa mbili lakini si kila wiki.",
            "Andika maelezo tofauti kwa kila nafasi. Benki ya chakula inaweza kuwa na wakaribishaji, wapangaji wa bidhaa, madereva na msaidizi wa kuingiza data, kila mmoja na mahitaji tofauti."
          ],
          steps: ["Taja nafasi na useme kwa nini ni muhimu.", "Orodhesha kile mjitolea atafanya.", "Sema lini, kwa muda gani, na kwa miezi mingapi.", "Orodhesha ujuzi, tabia na mipaka yoyote ya umri.", "Andika mafunzo, uchujaji na mtu atakayemripoti."],
          words: [["Maelezo ya nafasi", "maandishi mafupi kuhusu kazi ya mjitolea: nini, lini, kwa nini, na kinachohitajika."], ["Mratibu wa wajitolea", "mtu anayetafuta, kupanga na kusaidia wajitolea."]],
          slides: [
            { title: "Maelezo ya nafasi yanasema", bullets: ["Nafasi na kwa nini ni muhimu", "Watakachofanya, lini na kwa muda gani", "Ujuzi unaohitajika, mafunzo na uchujaji", "Watamripoti nani"] },
            { title: "Yafanye yavutie", bullets: ["Anza na matokeo: \"Saidia familia 200 kila Jumamosi\"", "Kuwa mkweli kuhusu muda", "Toa pia nafasi fupi zinazobadilika"] },
            { title: "Nafasi moja, maelezo moja", bullets: ["Mkaribishaji, mpangaji, dereva, kuingiza data", "Kazi tofauti, mahitaji tofauti"] }
          ],
          tryIt: "Chagua nafasi moja ya mjitolea ambayo shirika lako linahitaji. Andika maelezo yake ukitumia sehemu zote tano. Anza na sentensi moja kuhusu matokeo.",
          youCanNow: "kuandika maelezo wazi ya nafasi yanayowaambia wajitolea hasa wanachoombwa na kwa nini ni muhimu.",
          quickCheck: [
            { objective: "O1", q: "Maelezo ya nafasi ya mjitolea ni nini?", options: ["Kadi ya shukrani kwa wajitolea", "Maelezo mafupi ya kazi yanayosema nafasi ni nini, kwa nini ni muhimu na kinachoombwa", "Karatasi ya kujisajili", "Fomu ya ukaguzi wa historia"], answer: 1, why: "Maelezo ya nafasi yanawaambia wajitolea hasa wanachoombwa, kama maelezo mafupi ya kazi." },
            { objective: "O1", q: "Maelezo yako yanasema \"Saidia mara moja moja.\" Uongeze nini kwanza?", options: ["Hakuna; kutokuwa wazi ni kirafiki zaidi", "Orodha ya kila sheria uliyonayo", "Mshahara wa mjitolea", "Lini na kwa muda gani, na matokeo ya nafasi hiyo"], answer: 3, why: "Wajitolea wanahitaji taarifa za kweli kuhusu muda na sababu ya nafasi kuwa muhimu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kutafuta na kuchuja wajitolea",
          minutes: 6,
          goal: "Tafuta wajitolea kwa nafasi fulani na uchague hatua sahihi za kuchuja kwa nafasi hiyo.",
          text: [
            "Sababu ya kawaida zaidi watu kujitolea ni kwamba mtu aliwaomba. Waombe watu ana kwa ana, kupitia wajitolea wa sasa, nyumba za ibada, shule, waajiri wenye mipango ya kujitolea, mbao za matangazo za jamii na mitandao ya kijamii. Shiriki maelezo ya nafasi na njia rahisi ya kujisajili.",
            "Kuchuja kunawalinda watu unaowahudumia, wajitolea wako na shirika lako. Kulinganishe na hatari ya nafasi. Kila nafasi: fomu ya maombi yenye mawasiliano na mtu wa kuwasiliana naye wakati wa dharura, na mazungumzo mafupi. Nafasi zenye hatari zaidi, hasa kazi yoyote na watoto au watu wazima walio hatarini (wazee, watu wenye ulemavu), zinahitaji pia kukagua marejeo na ukaguzi wa historia, unaofanywa kwa ruhusa ya maandishi ya mtu huyo kupitia kampuni inayoaminika.",
            "Sheria za ukaguzi wa historia kwa wajitolea zinatofautiana kwa jimbo na kwa mpango, na kampuni yako ya bima inaweza kuwa na masharti. Uliza kampuni yako ya bima na mwanasheria kinachokuhusu. Weka pia sheria za usalama: kwa mfano, hakuna mtu mzima anayekaa peke yake na mtoto mahali pasipoonekana, na kila wasiwasi unaripotiwa kwa mtu aliyetajwa."
          ],
          steps: ["Waombe watu ana kwa ana; tumia wajitolea wa sasa na washirika wa jamii.", "Shiriki maelezo ya nafasi na njia rahisi ya kujisajili.", "Kwa kila nafasi: fomu ya maombi, mtu wa dharura na mazungumzo mafupi.", "Kwa nafasi zenye watoto au watu wazima walio hatarini: marejeo na ukaguzi wa historia kwa ruhusa ya maandishi.", "Kagua sheria za jimbo na masharti ya kampuni yako ya bima.", "Weka sheria za usalama, kama hakuna mtu mzima peke yake na mtoto mahali pasipoonekana."],
          words: [["Kuchuja", "hatua unazochukua kuhakikisha mjitolea anafaa na ni salama kwa nafasi fulani."], ["Ukaguzi wa historia (background check)", "utafutaji wa kumbukumbu za umma, kama rekodi za uhalifu, unaofanywa kwa ruhusa ya mtu huyo."], ["Mtu mzima aliye hatarini", "mtu mzima anayeweza kuhitaji ulinzi wa ziada, kama baadhi ya wazee au watu wenye ulemavu."]],
          slides: [
            { title: "Tafuta kwa kuomba", bullets: ["Watu wengi hujitolea kwa sababu mtu aliwaomba", "Wajitolea wa sasa, nyumba za ibada, shule", "Waajiri, mbao za matangazo za jamii, mitandao ya kijamii"] },
            { title: "Chuja kulingana na hatari", bullets: ["Kila nafasi: fomu ya maombi, mtu wa dharura, mazungumzo", "Watoto au watu wazima walio hatarini: marejeo + ukaguzi wa historia", "Daima kwa ruhusa ya maandishi"] },
            { title: "Kagua sheria", bullets: ["Sheria za majimbo zinatofautiana", "Kampuni yako ya bima inaweza kuwa na masharti", "Uliza kampuni ya bima na mwanasheria"] },
            { title: "Sheria za usalama", bullets: ["Hakuna mtu mzima peke yake na mtoto mahali pasipoonekana", "Ripoti kila wasiwasi kwa mtu aliyetajwa"] }
          ],
          tryIt: "Kwa nafasi uliyoieleza katika Somo 1, andika ujumbe mfupi wa kutafuta wajitolea na orodhesha sehemu tatu utakapoushiriki. Kisha orodhesha hatua za kuchuja ambazo nafasi inahitaji na ueleze kwa nini, kulingana na hatari yake.",
          youCanNow: "kutafuta wajitolea kwa kuwaomba ana kwa ana na kuchagua hatua za kuchuja zinazolingana na hatari ya kila nafasi.",
          quickCheck: [
            { objective: "O2", q: "Kila nafasi ya mjitolea, hata yenye hatari ndogo, inapaswa kuwa na nini katika uchujaji?", options: ["Fomu ya maombi yenye mawasiliano na mtu wa dharura, na mazungumzo mafupi", "Ukaguzi wa historia kwa kila mtu", "Hakuna uchujaji kabisa", "Ukaguzi wa mikopo"], answer: 0, why: "Kila nafasi inapata fomu ya maombi, mtu wa dharura na mazungumzo mafupi; nafasi zenye hatari zaidi zinaongeza zaidi." },
            { objective: "O2", q: "Nafasi mpya inahusu wajitolea kuwasomea wazee katika nyumba ya kutunza wazee. Uongeze nini?", options: ["Hakuna cha ziada", "Barua ndefu zaidi ya shukrani", "Marejeo na ukaguzi wa historia kwa ruhusa ya maandishi", "Chapisho la mitandao ya kijamii kuhusu wakazi"], answer: 2, why: "Nafasi zenye watu wazima walio hatarini zinahitaji kukagua marejeo na ukaguzi wa historia unaofanywa kwa ruhusa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuwapokea na kuwafundisha wajitolea",
          minutes: 5,
          goal: "Panga mafunzo mafupi ya utangulizi na mafunzo ya nafasi yanayowaandaa wajitolea wapya na kuwakaribisha.",
          text: [
            "Siku ya kwanza ndiyo inaamua kama wajitolea wengi watarudi. Kuwapokea ni kila kinachotokea kuanzia \"ndiyo\" hadi kujiamini katika nafasi: ujumbe wa kukaribisha, mafunzo ya utangulizi, mafunzo ya nafasi na zamu ya kwanza ya kirafiki.",
            "Mafunzo ya utangulizi yanahusu dhamira na watu mnaowahudumia, vitu vilipo, mtu wa kumuuliza, hatua za usalama na dharura, sheria za faragha (kwa mfano, kutoshiriki majina au picha za wateja), na jinsi ya kujisajili na kughairi zamu. Mafunzo ya nafasi yanaonyesha jinsi ya kufanya kazi: eleza, onyesha, waache wajaribu, kisha toa maoni. Orodha fupi ya ukaguzi au video husaidia wakumbuke.",
            "Mweke mjitolea mpya pamoja na mwenzake mwenye uzoefu kwa zamu yake ya kwanza, na umuulize baadaye: \"Ilikwendaje? Nini kilikuchanganya?\""
          ],
          steps: ["Tuma ujumbe wa kukaribisha wenye muda, mahali na mtu wa kumuulizia.", "Fanya mafunzo ya utangulizi: dhamira, mpangilio wa mahali, usalama, faragha, kujisajili na kughairi.", "Fundisha nafasi: eleza, onyesha, waache wajaribu, toa maoni.", "Toa orodha rahisi ya ukaguzi.", "Mweke pamoja na mwenzake.", "Muulize baada ya zamu ya kwanza."],
          words: [["Kuwapokea (onboarding)", "hatua zinazomsaidia mjitolea mpya kuanza na kujisikia amekaribishwa."], ["Mafunzo ya utangulizi (orientation)", "kikao cha kwanza kinachoeleza shirika, sheria na usalama."], ["Usiri", "kutunza siri taarifa binafsi za watu unaowahudumia."]],
          slides: [
            { title: "Siku ya kwanza ni muhimu", bullets: ["Ujumbe wa kukaribisha", "Mafunzo ya utangulizi", "Mafunzo ya nafasi", "Zamu ya kwanza ya kirafiki"] },
            { title: "Mafunzo ya utangulizi yanahusu", bullets: ["Dhamira na watu mnaowahudumia", "Mpangilio wa mahali, mtu wa kumuuliza, usalama", "Sheria za faragha", "Kujisajili na kughairi"] },
            { title: "Mafunzo yanayokumbukwa", bullets: ["Eleza, onyesha, waache wajaribu, toa maoni", "Orodha fupi ya ukaguzi au video"] },
            { title: "Baada ya zamu ya kwanza", bullets: ["Mweke pamoja na mwenzake", "Uliza: \"Ilikwendaje? Nini kilikuchanganya?\""] }
          ],
          tryIt: "Andika muhtasari wa mafunzo ya utangulizi ya dakika 30 kwa nafasi yako, na muda wa kila sehemu. Kisha andika mafunzo ya nafasi kama hatua nne: eleza, onyesha, jaribu, maoni.",
          youCanNow: "kuwapokea na kuwafundisha wajitolea wapya ili wawe salama, wajiamini na watake kurudi.",
          quickCheck: [
            { objective: "O3", q: "Kuwapokea wajitolea (onboarding) ni nini?", options: ["Barua pepe ya kwanza tu unayotuma", "Kumaliza nafasi ya mjitolea", "Kila kitu kuanzia \"ndiyo\" hadi kujiamini katika nafasi", "Kuhesabu saa za wajitolea"], answer: 2, why: "Kuwapokea kunajumuisha kukaribisha, mafunzo ya utangulizi, mafunzo ya nafasi na zamu ya kwanza ya kirafiki." },
            { objective: "O3", q: "Mjitolea mpya anaanza Jumamosi. Nini kinasaidia zaidi katika zamu ya kwanza?", options: ["Mweke pamoja na mwenzake mwenye uzoefu na umuulize baadaye", "Mwache peke yake ajitafutie njia", "Mpe kazi ngumu zaidi", "Ruka mafunzo ya utangulizi ili kuokoa muda"], answer: 0, why: "Mwenzake anampa mtu wa kumuuliza, na kumuuliza baadaye kunaonyesha nini kilimchanganya." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuwaleta wajitolea",
        questions: [
          { objective: "O1", q: "Njia bora ya kuanza maelezo ya nafasi ya mjitolea ni ipi?", options: ["Kwa sheria", "Kwa matokeo ya nafasi hiyo", "Kwa tarehe ya mwisho", "Kwa ukaguzi wa historia"], answer: 1, why: "Kuanza na matokeo kunaifanya nafasi ivutie." },
          { objective: "O2", q: "Sababu ya kawaida zaidi watu kuanza kujitolea ni ipi?", options: ["Mtu aliwaomba", "Bango la barabarani", "Fomu ya kodi", "Barua pepe ya bahati nasibu"], answer: 0, why: "Kuomba ana kwa ana ndiyo zana yenye nguvu zaidi ya kutafuta wajitolea." },
          { objective: "O2", q: "Mjitolea atawafundisha watoto baada ya shule. Uchujaji gani unahitajika?", options: ["Hakuna", "Jina tu", "Tabasamu mlangoni tu", "Fomu ya maombi, marejeo na ukaguzi wa historia kwa ruhusa ya maandishi"], answer: 3, why: "Nafasi zenye watoto zinahitaji uchujaji imara zaidi." },
          { objective: "O2", q: "Umuulize nani kuhusu sheria za ukaguzi wa historia kwa wajitolea wako?", options: ["Rafiki wa mjitolea", "Hakuna mtu", "Kampuni yako ya bima na mwanasheria", "Chapisho la mitandao ya kijamii"], answer: 2, why: "Sheria zinatofautiana kwa jimbo na kampuni za bima zinaweza kuwa na masharti." },
          { objective: "O3", q: "Kipi kinafaa katika mafunzo ya utangulizi ya wajitolea?", options: ["Sheria za faragha kuhusu watu mnaowahudumia", "Anwani za nyumbani za wateja", "Mishahara ya wafanyakazi", "Umbea kuhusu wafadhili"], answer: 0, why: "Wajitolea lazima wajue jinsi ya kulinda faragha ya watu." }
        ]
      }
    },
    {
      name: "Sura 2: Kuwabakiza wajitolea",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kupanga ratiba na kusimamia wajitolea",
          minutes: 5,
          goal: "Tengeneza ratiba ya wajitolea yenye watu wa akiba na uwasimamie wajitolea kwa njia ya kuwasaidia.",
          text: [
            "Ifanye ratiba iwe rahisi kuonekana na rahisi kubadilishwa. Kalenda ya pamoja, zana ya bure ya kujisajili au spreadsheet rahisi inafaa. Tangaza zamu mapema, tuma ukumbusho siku moja au mbili kabla, na fanya kughairi kuwe rahisi ili watu wakuambie badala ya kutokuja tu. Panga orodha ya akiba kwa zamu muhimu.",
            "Kila zamu iwe na msimamizi au mjitolea kiongozi aliyetajwa anayewakaribisha watu, kugawa kazi, kujibu maswali na kushughulikia matatizo. Kusimamia wajitolea ni kama kusimamia wafanyakazi, lakini kwa wepesi zaidi: kazi wazi, kuwafuatilia mara kwa mara, na maoni ya haraka na ya upole.",
            "Kama mjitolea haendi vizuri, ongea naye faraghani, kuwa mahususi na uliza nini kitamsaidia. Wakati mwingine nafasi nyingine inamfaa zaidi. Mtu akivunja sheria za usalama au za maadili, fuata sera yenu, ambayo inaweza kujumuisha kumaliza nafasi yake ya kujitolea."
          ],
          steps: ["Tumia kalenda ya pamoja, zana ya kujisajili au spreadsheet.", "Tangaza zamu mapema na tuma vikumbusho.", "Fanya kughairi kuwe rahisi; weka orodha ya akiba.", "Taja msimamizi kwa kila zamu.", "Toa kazi wazi na maoni ya haraka na ya upole.", "Shughulikia matatizo faraghani; fuata sera kwa ukiukaji wa usalama."],
          words: [["Zamu", "kipindi maalum cha muda ambapo mjitolea anafanya kazi."], ["Kiongozi wa zamu", "mtu anayesimamia wajitolea wakati wa zamu."], ["Orodha ya akiba", "wajitolea unaoweza kuwapigia simu mtu anapoghairi."]],
          slides: [
            { title: "Ratiba inayofanya kazi", bullets: ["Rahisi kuonekana, rahisi kubadilishwa", "Tangaza mapema, kumbusha siku moja au mbili kabla", "Kughairi kwa urahisi na orodha ya akiba"] },
            { title: "Kiongozi aliyetajwa kila zamu", bullets: ["Anawakaribisha watu", "Anagawa kazi, anajibu maswali", "Anashughulikia matatizo"] },
            { title: "Kusimamia wajitolea", bullets: ["Kazi wazi na kuwafuatilia", "Maoni ya haraka na ya upole", "Haendi vizuri? Ongea faraghani; jaribu nafasi nyingine"] }
          ],
          tryIt: "Tengeneza ratiba ya mwezi mmoja kwa nafasi yako katika spreadsheet au kwenye karatasi: tarehe, saa za zamu, majina ya wajitolea, kiongozi wa zamu aliyetajwa na majina mawili ya akiba. Andika ujumbe wa ukumbusho utakaotuma.",
          youCanNow: "kutengeneza ratiba ya wajitolea yenye vikumbusho na watu wa akiba, na kusimamia wajitolea kwa njia wazi na ya kuwasaidia.",
          quickCheck: [
            { objective: "O4", q: "Orodha ya akiba ni nini?", options: ["Nakala ya bajeti", "Orodha ya wajitolea walioacha", "Ratiba za zamani", "Watu unaoweza kuwapigia simu mtu anapoghairi zamu muhimu"], answer: 3, why: "Orodha ya akiba inahakikisha zamu muhimu zina watu mipango inapobadilika." },
            { objective: "O4", q: "Mjitolea anaendelea kufanya makosa katika nafasi yake. Ufanye nini kwanza?", options: ["Iambie timu nzima", "Ongea naye faraghani, kuwa mahususi na uliza nini kitamsaidia", "Acha kumpangia zamu bila kumweleza sababu", "Puuza"], answer: 1, why: "Shughulikia matatizo faraghani na kwa upole; nafasi nyingine inaweza kumfaa zaidi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuwatambua na kuwabakiza",
          minutes: 5,
          goal: "Panga njia za kuwatambua zinazowafaa wajitolea wako na ubaini kwa nini wajitolea huondoka.",
          text: [
            "Mara nyingi wajitolea huacha kuja kwa sababu walijiona hawahitajiki, mpangilio ulikuwa mbaya, hawakufundishwa, au hawakushukuriwa, au kwa sababu maisha yalijaa shughuli. Kuwabakiza ni rahisi na nafuu kuliko kutafuta wapya.",
            "Washukuru watu mara kwa mara na kwa mahususi: \"Zamu zako za Jumamosi zilitusaidia kufunga masanduku 600 mwezi huu.\" Shiriki hadithi za matokeo, kwa ruhusa ya watu mnaowahudumia. Changanya shukrani ndogo za kila siku (barua fupi, kuwataja hadharani, ujumbe wa simu) na matukio makubwa zaidi (sherehe ya kuwashukuru, cheti, barua ya mapendekezo kwa kazi au shule).",
            "Waulize wajitolea wanachotaka: ujuzi mpya, marafiki, uongozi, muda unaobadilika. Toa nafasi za kukua, kama kufundisha wajitolea wapya au kuongoza zamu. Waulize wanaoondoka kwa nini, na utumie unachojifunza."
          ],
          steps: ["Washukuru watu mara kwa mara na kwa mahususi.", "Shiriki hadithi za matokeo, kwa ruhusa.", "Changanya shukrani ndogo na matukio makubwa zaidi.", "Uliza kila mjitolea anataka nini kutoka kwenye uzoefu huu.", "Toa nafasi za kukua.", "Waulize wanaoondoka kwa nini."],
          words: [["Kuwabakiza", "kuwafanya wajitolea waendelee kurudi kwa muda mrefu."], ["Kuwatambua", "kuwaonyesha wajitolea kwamba kazi yao inaonekana na inathaminiwa."]],
          slides: [
            { title: "Kwa nini wajitolea huondoka", bullets: ["Walijiona hawahitajiki au hawakufundishwa", "Mpangilio mbaya", "Hawakushukuriwa, au maisha yalijaa shughuli"] },
            { title: "Washukuru vizuri", bullets: ["Mara kwa mara na kwa mahususi", "Shiriki hadithi za matokeo, kwa ruhusa", "Shukrani ndogo pamoja na matukio makubwa"] },
            { title: "Wasaidie kukua", bullets: ["Uliza wanachotaka", "Toa mafunzo na nafasi za uongozi", "Waulize wanaoondoka kwa nini"] }
          ],
          tryIt: "Andika mawazo mawili ya kuwatambua wajitolea wako: shukrani moja ndogo unayoweza kutoa wiki hii na tukio moja kubwa zaidi kwa mwaka huu. Kisha andika maswali matatu utakayomuuliza mjitolea kuhusu anachotaka kutoka kwenye nafasi yake.",
          youCanNow: "kuwatambua wajitolea kwa njia zenye maana kwao na kuchukua hatua kuhusu sababu zinazowafanya wajitolea waondoke.",
          quickCheck: [
            { objective: "O5", q: "Ipi ni sababu ya kawaida wajitolea kuacha kuja?", options: ["Walijiona hawahitajiki au hawakushukuriwa", "Walishukuriwa mara nyingi mno", "Zamu zilipangwa vizuri", "Walikuwa na mwenzao wa kuwasaidia"], answer: 0, why: "Kujiona hawahitajiki, mpangilio mbaya, kukosa mafunzo au kukosa shukrani mara nyingi huwafanya wajitolea waondoke." },
            { objective: "O5", q: "Mjitolea mwaminifu anasema anataka kujenga ujuzi wa uongozi. Umpe nini?", options: ["Hakuna; wajitolea hawakui", "Zaidi ya kazi ile ile", "Nafasi ya kuongoza zamu au kufundisha wajitolea wapya", "Nafasi ndogo zaidi"], answer: 2, why: "Nafasi za kukua kama kuongoza zamu husaidia kuwabakiza wajitolea wanaotaka zaidi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kufuatilia saa za wajitolea",
          minutes: 5,
          goal: "Andaa mfumo rahisi wa kufuatilia saa za wajitolea na kutumia namba hizo.",
          text: [
            "Fuatilia nani alijitolea, lini, kwa muda gani na katika nafasi gani. Karatasi ya kujisajili inayonakiliwa kwenye spreadsheet inafaa kwa vikundi vidogo; fomu ya bure au app ya wajitolea inaweza kufaa kwa vikundi vikubwa. Ifanye iwe rahisi ili watu wajisajili kweli wanapoingia na kutoka.",
            "Namba hizo zinakusaidia: zinaonyesha matokeo katika ripoti za ruzuku na kwa bodi yenu, zinakusaidia kupanga idadi ya watu, na kukusaidia kuwashukuru wajitolea wako waaminifu zaidi. Wajitolea wengi pia wanahitaji uthibitisho wa saa kwa ajili ya shule, ufadhili wa masomo, mahakama au masharti ya huduma kwa jamii, au maombi ya kazi. Uwe tayari kusaini barua au fomu inayothibitisha saa zao.",
            "Weka kumbukumbu za wajitolea kwa siri na usalama, na kusanya tu unachohitaji. Taarifa ya kodi kwa wajitolea (Marekani): IRS inasema thamani ya muda wa kujitolea haikatwi kwenye kodi, ingawa baadhi ya gharama za mfukoni ambazo hazikurudishwa zinaweza kukatwa. Waelekeze wajitolea kwa IRS Publication 526 na mtaalamu wa kodi badala ya kutoa ushauri wa kodi."
          ],
          steps: ["Chagua njia ya kujisajili: karatasi, fomu au app.", "Andika jina, tarehe, saa ya kuanza na kumaliza, na nafasi.", "Ingiza data kwenye spreadsheet moja kila wiki.", "Jumlisha saa kwa kila mjitolea, kwa mwezi na kwa mpango.", "Tumia jumla katika ripoti, mipango na shukrani.", "Weka kumbukumbu kwa siri; saini barua za uthibitisho wa saa unapoombwa."],
          words: [["Karatasi ya kujisajili", "fomu rahisi ambapo wajitolea wanaandika jina lao na saa wanayoanza na kumaliza."], ["Uthibitisho wa saa", "barua au fomu iliyosainiwa inayothibitisha mtu alijitolea saa ngapi."], ["Ripoti ya ruzuku", "ripoti kwa mfadhili inayoonyesha kilichofanywa kwa pesa zake."]],
          slides: [
            { title: "Fuatilia mambo ya msingi", bullets: ["Nani, lini, kwa muda gani, nafasi gani", "Karatasi, fomu ya bure, au app", "Ifanye iwe rahisi"] },
            { title: "Tumia namba", bullets: ["Ripoti za ruzuku na taarifa kwa bodi", "Kupanga zamu", "Kuwashukuru wajitolea waaminifu"] },
            { title: "Uthibitisho wa saa", bullets: ["Kwa shule, ufadhili wa masomo, mahakama au kazi", "Uwe tayari kusaini barua au fomu"] },
            { title: "Faragha na kodi", bullets: ["Kusanya tu unachohitaji; kitunze salama", "Muda wa kujitolea haukatwi kwenye kodi (IRS)", "Elekeza kwa IRS Publication 526 na mtaalamu wa kodi"] }
          ],
          sources: [{ name: "IRS Publication 526, Charitable Contributions (michango ya hisani)", url: "https://www.irs.gov/publications/p526" }],
          tryIt: "Kazi ya mwisho: andaa kifurushi chako cha mjitolea kwa nafasi moja: maelezo ya nafasi, ujumbe wa kutafuta wajitolea na hatua za kuchuja, muhtasari wa mafunzo ya utangulizi ya dakika 30, ratiba ya mwezi yenye kiongozi wa zamu, mawazo mawili ya kuwatambua, na karatasi ya kujisajili au spreadsheet yenye safu za jina, tarehe, mwanzo, mwisho, saa na nafasi.",
          youCanNow: "kufuatilia saa za wajitolea kwa urahisi na kutumia namba hizo kwa ripoti, mipango, shukrani na uthibitisho wa saa.",
          quickCheck: [
            { objective: "O6", q: "Kwa nini ufuatilie saa za wajitolea?", options: ["Kuwatoza wajitolea ada", "Kuonyesha matokeo katika ripoti za ruzuku na za bodi na kupanga idadi ya watu", "Kushiriki taarifa za wajitolea hadharani", "Kwa sababu wajitolea hulipwa kwa saa"], answer: 1, why: "Jumla ya saa zinaonyesha matokeo, zinasaidia kupanga na zinakusaidia kuwashukuru wajitolea waaminifu." },
            { objective: "O6", q: "Mjitolea anauliza kama anaweza kukata thamani ya muda wake kwenye kodi. Ufanye nini?", options: ["Sema ndiyo, kwa kiwango chochote cha saa", "Mfanyie kodi yake", "Puuza swali", "Mwelekeze kwa IRS Publication 526 na mtaalamu wa kodi"], answer: 3, why: "Somo linasema usitoe ushauri wa kodi; waelekeze wajitolea kwa IRS Publication 526 na mtaalamu wa kodi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuwabakiza wajitolea",
        questions: [
          { objective: "O4", q: "Wajitolea wanaendelea kukosa zamu bila kukuambia. Nini kinasaidia kwanza?", options: ["Wapige marufuku wote", "Acha kupanga ratiba", "Tuma vikumbusho na fanya kughairi kuwe rahisi", "Ongeza urefu wa zamu mara mbili"], answer: 2, why: "Vikumbusho na kughairi kwa urahisi hupunguza watu wasiokuja." },
          { objective: "O4", q: "Nani anapaswa kutajwa kwa kila zamu?", options: ["Mfadhili", "Kiongozi wa zamu au msimamizi", "Mjitolea mpya zaidi", "Hakuna mtu"], answer: 1, why: "Kiongozi aliyetajwa anakaribisha, anaongoza na anashughulikia matatizo." },
          { objective: "O5", q: "Shukrani ipi ina uwezekano mkubwa zaidi wa kuwa na maana kwa mjitolea?", options: ["\"Asanteni nyote.\"", "Hakuna shukrani; ni kujitolea tu", "Barua pepe ya jumla mara moja kwa mwaka", "\"Zamu zako za Jumamosi zilitusaidia kufunga masanduku 600 mwezi huu.\""], answer: 3, why: "Shukrani mahususi inayotaja matokeo ina maana zaidi." },
          { objective: "O6", q: "Kijana anahitaji uthibitisho wa saa 40 za kujitolea kwa ajili ya shule. Unapaswa:", options: ["Kutumia kumbukumbu zako za saa na kusaini barua inayozithibitisha", "Kukataa", "Kukisia saa", "Kumwambia aulize IRS"], answer: 0, why: "Ufuatiliaji mzuri unakuwezesha kuthibitisha saa kwa usahihi." },
          { objective: "O6", q: "Kwa mujibu wa IRS, je, mjitolea anaweza kukata thamani ya muda wake kwenye kodi?", options: ["Ndiyo, kwa kiwango chochote anachochagua", "Ndiyo, kwa kima cha chini cha mshahara", "Hapana, thamani ya muda au huduma haikatwi", "Wikendi tu"], answer: 2, why: "IRS Publication 526 inasema thamani ya muda wako haikatwi kwenye kodi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Usimamizi wa Wajitolea",
    questions: [
      { objective: "O1", q: "Maelezo ya nafasi ya mjitolea yanapaswa kujumuisha:", options: ["Jina la nafasi tu", "Watakachofanya, lini, kwa nini ni muhimu na watamripoti nani", "Mshahara wa mjitolea", "Majina ya wafadhili"], answer: 1, why: "Maelezo wazi huwasaidia wajitolea kufanikiwa." },
      { objective: "O1", q: "Kwa nini utoe nafasi fupi zinazobadilika?", options: ["Watu wengi wanaweza kutoa muda kidogo lakini si kila wiki", "Ni rahisi kusahaulika", "Hazihitaji mafunzo", "Zinachukua nafasi ya wafanyakazi"], answer: 0, why: "Nafasi zinazobadilika zinafungua mlango kwa wajitolea wengi zaidi." },
      { objective: "O1", q: "Benki ya chakula inahitaji wakaribishaji, wapangaji na madereva. Maelezo mangapi ya nafasi?", options: ["Moja kwa wote", "Hakuna", "Moja kwa kila nafasi", "Kwa madereva tu"], answer: 2, why: "Kila nafasi ina kazi na mahitaji tofauti." },
      { objective: "O2", q: "Njia ipi ya kutafuta wajitolea kwa kawaida hufanya kazi vizuri zaidi?", options: ["Kusubiri watu wakupate", "Kutangaza mara moja na kutumaini", "Kuwaomba wafanyakazi tu", "Kuwaomba watu ana kwa ana, pamoja na kupitia wajitolea wa sasa"], answer: 3, why: "Kuomba ana kwa ana huleta wajitolea wengi zaidi." },
      { objective: "O2", q: "Uchujaji unapaswa kulinganishwa na:", options: ["Hatari ya nafasi", "Sura ya mjitolea", "Hali ya hewa", "Hisia za mratibu"], answer: 0, why: "Nafasi zenye hatari zaidi zinahitaji uchujaji zaidi." },
      { objective: "O2", q: "Ukaguzi wa historia unapaswa kufanywa:", options: ["Kwa siri", "Kwa ruhusa ya maandishi ya mtu huyo", "Baada ya tukio tu", "Kwa kuwauliza majirani"], answer: 1, why: "Ruhusa inahitajika na ni heshima." },
      { objective: "O2", q: "Ipi ni sheria nzuri ya usalama kwa mipango ya vijana?", options: ["Mtu mzima yeyote anaweza kukaa peke yake na mtoto popote", "Wasiwasi unanyamazishwa", "Hakuna mtu mzima peke yake na mtoto mahali pasipoonekana", "Uchujaji ni hiari"], answer: 2, why: "Sheria hii inawalinda watoto na wajitolea." },
      { objective: "O2", q: "Sheria za ukaguzi wa historia kwa wajitolea:", options: ["Ni sawa kila mahali", "Hazipo", "Zinawekwa na wajitolea", "Zinatofautiana kwa jimbo na mpango; uliza kampuni yako ya bima na mwanasheria"], answer: 3, why: "Masharti yanatofautiana, kwa hiyo kagua kinachokuhusu." },
      { objective: "O3", q: "Kuwapokea wajitolea (onboarding) maana yake ni:", options: ["Kila kinachomsaidia mjitolea mpya kuanza na kujisikia amekaribishwa", "Kumfukuza mjitolea", "Kuchangisha pesa", "Kununua vifaa"], answer: 0, why: "Kunajumuisha kukaribisha, mafunzo ya utangulizi, mafunzo na zamu ya kwanza." },
      { objective: "O3", q: "Hatua nne za mafunzo ya nafasi ni:", options: ["Soma, saini, ondoka, sahau", "Eleza, onyesha, waache wajaribu, toa maoni", "Ambia, pima, shindwa, rudia", "Tazama, subiri, kisia, nenda"], answer: 1, why: "Mafunzo ya kuonyesha na kujaribu hujenga ujuzi na kujiamini." },
      { objective: "O3", q: "Kumweka mjitolea mpya pamoja na mwenzake husaidia kwa sababu:", options: ["Kunaongeza makaratasi mara mbili", "Kunachukua nafasi ya mafunzo ya utangulizi", "Anakuwa na mtu wa kumuuliza katika zamu yake ya kwanza", "Mwenzake anafanya kazi yote"], answer: 2, why: "Mwenzake hufanya zamu ya kwanza iwe rahisi na ya kirafiki zaidi." },
      { objective: "O3", q: "Mjitolea anaweka picha ya mteja mtandaoni. Mada ipi ya mafunzo ya utangulizi ilirukwa?", options: ["Maegesho", "Sheria za faragha", "Vitafunio", "Kuchangisha pesa"], answer: 1, why: "Wajitolea lazima watunze siri utambulisho wa wateja." },
      { objective: "O4", q: "Ratiba nzuri ya wajitolea ni:", options: ["Rahisi kuonekana na rahisi kubadilishwa", "Inayohifadhiwa kichwani mwa mtu mmoja", "Inayotangazwa usiku uliotangulia", "Haishirikiwi kamwe"], answer: 0, why: "Kuonekana na kubadilika hupunguza mapengo." },
      { objective: "O4", q: "Orodha ya akiba ni kwa ajili ya:", options: ["Kuwafukuza wajitolea", "Ripoti za ruzuku", "Kuhifadhi ratiba za zamani", "Kupiga simu mtu anapoghairi zamu muhimu"], answer: 3, why: "Watu wa akiba huhakikisha zamu muhimu zina watu." },
      { objective: "O4", q: "Mjitolea anapata shida katika kazi ya kuingiza data lakini anapenda kuongea na watu. Unaweza:", options: ["Kupuuza", "Kumwaibisha hadharani", "Kuongea naye faraghani na kumpa nafasi ya mkaribishaji", "Kumwondoa bila neno"], answer: 2, why: "Nafasi inayomfaa zaidi mara nyingi hutatua tatizo." },
      { objective: "O5", q: "Ipi ni sababu ya kawaida wajitolea kuacha kuja?", options: ["Walishukuriwa mno", "Walijiona hawahitajiki au hawakushukuriwa kamwe", "Zamu zilipangwa vizuri", "Walikuwa na mafunzo wazi"], answer: 1, why: "Kujiona hawahitajiki au kutoshukuriwa huwafukuza watu." },
      { objective: "O5", q: "Unaposhiriki hadithi za matokeo kuhusu watu mnaowahudumia, unapaswa:", options: ["Kupata ruhusa yao", "Kutumia majina kamili bila kuuliza", "Kubuni maelezo", "Kushiriki anwani zao za nyumbani"], answer: 0, why: "Heshima na faragha huja kwanza." },
      { objective: "O5", q: "Mjitolea wa muda mrefu anataka kukua. Unaweza:", options: ["Kumbakiza katika kazi ile ile milele", "Kumwomba aondoke", "Kumpa kazi ya usafi tu zaidi", "Kumkaribisha kufundisha wajitolea wapya au kuongoza zamu"], answer: 3, why: "Nafasi za kukua huwafanya wajitolea waliojitoa waendelee kushiriki." },
      { objective: "O6", q: "Kumbukumbu ya kujisajili ya mjitolea inapaswa kujumuisha:", options: ["Taarifa zake za benki", "Jina, tarehe, saa ya kuanza na kumaliza, na nafasi", "Nenosiri lake", "Sahihi tu"], answer: 1, why: "Mambo haya ya msingi yanakuwezesha kujumlisha saa kwa usahihi." },
      { objective: "O6", q: "Mjitolea anauliza kama anaweza kukata gharama ya mafuta ya gari kwa kuendesha kwenda kujitolea. Unapaswa:", options: ["Kusema ndiyo, kiasi chochote", "Kusema ni kinyume cha sheria", "Kumwelekeza kwa IRS Publication 526 na mtaalamu wa kodi", "Kupuuza swali"], answer: 2, why: "Baadhi ya gharama za mfukoni zinaweza kukatwa; anapaswa kukagua chanzo rasmi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      2,
      4,
      6,
      8,
      11,
      12,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Maelezo ya nafasi",
        objective: "O1",
        notYet: "Yanakosa muda, kazi au mtu wa kumripoti.",
        meets: "Sehemu zote tano, yakianza na matokeo.",
        exceeds: "Pia yanatoa chaguo fupi linalobadilika kwa watu wenye muda mdogo."
      },
      {
        name: "Kutafuta na kuchuja",
        objective: "O2",
        notYet: "Hakuna uchujaji, au nafasi yenye watoto au watu wazima walio hatarini haina ukaguzi wa historia.",
        meets: "Ujumbe wa kutafuta wajitolea na uchujaji unaolingana na hatari ya nafasi, kwa ruhusa ya maandishi kwa ukaguzi.",
        exceeds: "Pia unaongeza sheria za usalama na maelezo ya kuuliza kampuni ya bima na mwanasheria."
      },
      {
        name: "Mafunzo ya utangulizi na ya nafasi",
        objective: "O3",
        notYet: "Hakuna mpango wa mafunzo ya utangulizi, au usalama na faragha vimekosekana.",
        meets: "Muhtasari wa dakika 30 wenye muda, unaohusu usalama, faragha, kujisajili na kughairi, pamoja na eleza, onyesha, jaribu, maoni.",
        exceeds: "Pia unajumuisha mwenzake wa kumsaidia na kumuuliza baada ya zamu ya kwanza."
      },
      {
        name: "Ratiba na usimamizi",
        objective: "O4",
        notYet: "Zamu hazina kiongozi au hakuna watu wa akiba.",
        meets: "Ratiba ya mwezi mmoja yenye kiongozi wa zamu aliyetajwa, watu wawili wa akiba na ujumbe wa ukumbusho.",
        exceeds: "Pia inasema jinsi wajitolea wanavyoghairi na nani anashughulikia matatizo."
      },
      {
        name: "Kuwatambua na saa",
        objective: "O5",
        notYet: "Hakuna mpango wa shukrani au hakuna njia ya kufuatilia saa.",
        meets: "Wazo moja dogo na moja kubwa la kuwatambua, na karatasi ya kujisajili yenye jina, tarehe, mwanzo, mwisho, saa na nafasi.",
        exceeds: "Pia inasema jinsi jumla ya saa itakavyotumika katika ripoti na shukrani."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (rubriki)",
      "Wajitolea ambao bado wanashiriki siku 90 baada ya zamu yao ya kwanza, ukilinganisha na kabla ya kozi",
      "Nafasi zenye watoto au watu wazima walio hatarini ambazo zina uchujaji na sheria za usalama zilizoandikwa",
      "Jumla ya saa za wajitolea zilizofuatiliwa na kuripotiwa kwa bodi au katika ripoti za ruzuku"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta au simu yenye spreadsheet ya bure au zana ya kujisajili, au karatasi",
      "Nafasi moja halisi ya mjitolea ya kuipangia",
      "Karatasi au hati kwa ajili ya kifurushi cha mjitolea",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Mwambie kila mwanafunzi aandae kifurushi kwa nafasi halisi katika shirika lake ili kiwe tayari kutumika.",
      "Kwa nafasi zenye watoto au watu wazima walio hatarini, sisitiza uchujaji na sheria za usalama, na waambie wanafunzi wathibitishe masharti na kampuni yao ya bima na mwanasheria.",
      "Wakumbushe wanafunzi wasikusanye taarifa za wajitolea zaidi ya wanazohitaji na waweke kumbukumbu kwa siri.",
      "Waweke wanafunzi wawili wawili wabadilishane na kukagua maelezo ya nafasi na muhtasari wa mafunzo ya utangulizi ya kila mmoja.",
      "Pima kifurushi kwa rubriki na utoe maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};

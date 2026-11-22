"use strict";

// Koach Learn course (Swahili translation of workforce/workforce-osha-safety.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Not a substitute for an OSHA Outreach course or for the job-specific training employers must give.

module.exports = {
  id: "workforce-osha-safety-sw",
  lang: "sw",
  translationOf: "workforce-osha-safety",
  category: "Workforce Development",
  name: "Misingi ya Usalama Kazini (OSHA)",
  skills: "Kutambua hatari, Kuchagua na kutumia PPE, Kuzuia kuteleza, kujikwaa na kuanguka, Kubeba mizigo kwa usalama, Kusoma karatasi ya data ya usalama, Kuripoti majeraha na kutumia haki zako za usalama",
  outcome: "kutembea mahali pa kazi na kutambua hatari, kuchagua PPE inayofaa, kubeba na kusogeza mizigo kwa usalama, kupata unachohitaji kwenye karatasi ya data ya usalama, kuripoti jeraha au hatari kwa njia sahihi, na kueleza haki yako ya kazi salama na OSHA 10 na OSHA 30 ni nini.",
  about: [
    "Kozi hii ni kwa yeyote anayeanza au tayari anafanya kazi katika maghala, ujenzi, jikoni, usafi, maduka, viwanda, huduma za afya au kazi yoyote ambapo watu wanaweza kuumia. Inafundisha misingi ya usalama ambayo waajiri wanatarajia tangu siku ya kwanza.",
    "Utafanya mazoezi ya ukaguzi wa hatari kwa kutembea, utajifunza kutumia vifaa vya kujikinga, kuzuia majeraha yanayotokea mara nyingi (kuteleza, kujikwaa, kuanguka na kuumia kwa kubeba mizigo), kusoma karatasi ya data ya usalama ya kemikali, na kujua jinsi ya kuripoti jeraha au hatari. Pia utajifunza haki zako chini ya Occupational Safety and Health Administration (OSHA), shirika la serikali ya Marekani la usalama kazini, na kadi za OSHA za saa 10 na saa 30 ni nini.",
    "Kila somo linachukua kama dakika tano. Soma somo, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Kozi hii ni elimu ya jumla ya usalama. Daima fuata mafunzo na kanuni za mwajiri wako kwa kazi yako mahususi, na angalia osha.gov kwa kanuni za sasa."
  ],
  finalTask: "Fanya ukaguzi wa hatari wa dakika 10 kwa kutembea mahali halisi (kazini kwako, stoo, gereji au nyumbani). Andika ripoti ya hatari yenye angalau hatari tano, aina ya kila moja (kuteleza/kujikwaa/kuanguka, kubeba mizigo, kemikali, mashine, umeme, nyingine), PPE au marekebisho yanayohitajika, na nani ungemripotia kila moja. Ongeza sehemu za karatasi ya data ya usalama ambazo ungesoma kwa kemikali moja uliyoipata, na andika hatua ungezochukua kama mtu angeumia.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watafuta kazi na wafanyakazi wapya au wa sasa katika maghala, ujenzi, jikoni, usafi, maduka, viwanda na huduma za afya, wakiwemo wafanyakazi vijana, watu wanaobadilisha kazi na watu wanaorudi kazini.",
    startingPoint: "Wana uzoefu fulani wa kazi au wa nyumbani na wanaona hatari zilizo wazi, lakini hawajafundishwa ukaguzi wa hatari kwa kutembea, jinsi ya kusoma karatasi ya data ya usalama, jinsi ya kuripoti jeraha, wala haki zao chini ya OSHA.",
    gap: "Waajiri wanatarajia tabia za msingi za usalama tangu siku ya kwanza. Wafanyakazi wasioweza kutambua hatari, kuchagua PPE, kubeba mizigo kwa usalama au kuripoti jeraha kwa njia sahihi wana uwezekano mkubwa wa kuumia na wanaweza kupoteza haki za fidia ya wafanyakazi. Kujua misingi hii pia kunawasaidia kuajiriwa na kusema waziwazi kwa usalama.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 6)",
      "Vifaa: simu au kompyuta ya pamoja; mazoezi yanatumia chumba nyumbani au kazini",
      "Muda: masomo ya kama dakika tano yanayoingia kati ya zamu za kazi",
      "Elimu ya jumla ya usalama tu: wanafunzi wanafuata mafunzo ya mwajiri wao na kuangalia osha.gov kwa kanuni za sasa",
      "Mazoezi lazima yawe salama: hakuna kupanda juu, kubeba mizigo mizito peke yako wala kuchanganya kemikali"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Unapotembea mahali pa kazi, stoo au nyumbani", action: "kutambua hatari, kutaja aina ya kila moja, na kuamua kama utairekebisha au kuiripoti", standard: "ukiorodhesha angalau hatari tano zenye aina sahihi" },
    { id: "O2", condition: "Ukipewa kazi na hatari zake", action: "kuchagua na kukagua PPE inayofaa kwa kila hatari", standard: "ukilinganisha kifaa na kila hatari na kutambua kifaa kilichoharibika" },
    { id: "O3", condition: "Unapofanya kazi sakafuni, kwenye ngazi au ukiwa na mizigo", action: "kuonyesha hatua zinazozuia kuteleza, kujikwaa na kuanguka, na jinsi ya kubeba mzigo kwa usalama", standard: "ukifuata kila hatua bila kupinda mgongo wako" },
    { id: "O4", condition: "Ukipewa bidhaa ya kemikali", action: "kupata hatari, PPE na huduma ya kwanza kwenye lebo yake na karatasi yake ya data ya usalama", standard: "ukitaja sehemu sahihi za SDS (2, 4 na 8)" },
    { id: "O5", condition: "Mtu akiumia au ukipata hatari", action: "kuorodhesha hatua za kuchukua na kuandika ripoti fupi ya jeraha au hatari", standard: "ikiwa na nini, lini, wapi na nani aliona, na kuripotiwa mara moja" },
    { id: "O6", condition: "Ukipewa tatizo la usalama ambalo halijarekebishwa au kazi unayotaka", action: "kueleza haki zako za usalama, jinsi ya kuwasilisha malalamiko kwa OSHA, na kama OSHA 10 au OSHA 30 inafaa", standard: "ukitaja hatua sahihi na kozi sahihi bila msaada" }
  ],
  chapters: [
    {
      name: "Sura 1: Kutambua na kuzuia hatari",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kutambua hatari kwa ukaguzi wa kutembea",
          minutes: 5,
          goal: "Tembea katika eneo na uorodheshe hatari unazoziona kwa aina zake.",
          text: [
            "Hatari ni kitu chochote kazini kinachoweza kumuumiza mtu: sakafu yenye maji, waya uliopita njiani, boksi zito kwenye rafu ya juu, mashine isiyo na kinga yake, kemikali inayovuja, kelele kubwa au mlango wa kutokea uliozibwa.",
            "Ukaguzi wa hatari kwa kutembea ni kuangalia eneo polepole na kwa mpango. Angalia chini (sakafu, waya, vitu vilivyomwagika), angalia juu (rafu za juu, mizigo iliyo juu, ngazi), angalia pande zote (mashine, magari, kemikali, milango ya kutokea, vizima moto), na sikiliza (kelele kubwa, kengele za hatari, sauti za ajabu kutoka kwenye vifaa).",
            "Panga ulichopata kwa makundi: kuteleza, kujikwaa na kuanguka; kubeba mizigo na kuumia misuli; kemikali; mashine na sehemu zinazosonga; umeme; magari kama forklift; joto, baridi na kelele; na moto na milango ya kutokea.",
            "Ukipata hatari, irekebishe mara moja kama ni ndogo na ni salama kufanya hivyo (pangusa kilichomwagika, ondoa boksi njiani), kisha mwambie msimamizi wako. Kama si salama au hujafundishwa, wazuie watu wasikaribie na uiripoti."
          ],
          steps: ["Chagua eneo na utembee polepole.", "Angalia chini: sakafu, waya, vitu vilivyomwagika.", "Angalia juu: rafu, mizigo iliyo juu, ngazi.", "Angalia pande zote: mashine, magari, kemikali, milango ya kutokea.", "Andika kila hatari na aina yake.", "Rekebisha ndogo kama ni salama, na ripoti kila kitu kwa msimamizi wako."],
          words: [["Hatari", "kitu kazini kinachoweza kusababisha jeraha au ugonjwa."], ["Ukaguzi wa hatari kwa kutembea", "kutembea polepole na kwa mpango katika eneo ili kutafuta hatari."], ["Kinga ya mashine", "kifuniko au kizuizi kwenye mashine kinachozuia mikono na mwili kugusa sehemu zinazosonga."]],
          slides: [
            { title: "Hatari ni nini", bullets: ["Kitu chochote kinachoweza kumuumiza mtu", "Sakafu yenye maji, waya ovyo, mashine bila kinga", "Kemikali, kelele, milango ya kutokea iliyozibwa"] },
            { title: "Angalia chini, juu na pande zote", bullets: ["Chini: sakafu, waya, vitu vilivyomwagika", "Juu: rafu za juu, mizigo iliyo juu", "Pande zote: mashine, magari, milango ya kutokea"] },
            { title: "Aina za hatari", bullets: ["Kuteleza, kujikwaa na kuanguka; kubeba mizigo", "Kemikali; mashine; umeme", "Magari; joto, baridi, kelele; moto"] },
            { title: "Ufanye nini", bullets: ["Rekebisha hatari ndogo kama ni salama", "Wazuie watu wasikaribie hatari kubwa", "Daima mwambie msimamizi wako"] }
          ],
          tryIt: "Fanya ukaguzi wa hatari wa dakika tano kwa kutembea katika chumba kimoja nyumbani, stoo au kazini kwako. Andika angalau hatari tano na aina ya kila moja.",
          youCanNow: "kutembea katika eneo, kutambua hatari kwa aina zake, na kuamua kama utarekebisha au kuripoti kila moja.",
          quickCheck: [
            { objective: "O1", q: "Katika ukaguzi wa hatari, \"angalia chini\" inamaanisha kukagua nini?", options: ["Sakafu, waya na vitu vilivyomwagika", "Rafu za juu na ngazi", "Mashine na magari", "Kengele na sauti za ajabu"], answer: 0, why: "Kuangalia chini ni kukagua sakafu kwa waya, vitu vilivyomwagika na vitu vinavyoweza kukukwaza." },
            { objective: "O1", q: "Unakuta kinga haipo kwenye mashine ambayo hujafundishwa kuirekebisha. Unafanya nini?", options: ["Uirekebishe mwenyewe haraka", "Wazuie watu wasikaribie na uiripoti", "Uipuuze hadi wakati wa mapumziko", "Uendelee kutumia mashine kwa uangalifu"], answer: 1, why: "Kama si salama kwako kurekebisha hatari, wazuie watu wasikaribie na uiripoti." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kutumia PPE kwa njia sahihi",
          minutes: 5,
          goal: "Chagua, kagua na vaa vifaa sahihi vya kujikinga kwa kazi fulani.",
          text: [
            "Vifaa vya kujikinga binafsi (PPE) ni vifaa unavyovaa kulinda mwili wako: miwani ya usalama au miwani maalum ya kufunika macho, kinga ya uso, kofia ngumu, glavu, buti zenye ncha ngumu, kinga ya masikio (vizibo vya masikio au vifuniko vya masikio), vesti zinazoonekana sana, barakoa za kupumulia (respirator) na mikanda ya kuzuia kuanguka.",
            "Linganisha kifaa na hatari: miwani kwa vipande vinavyoruka au vitu vinavyorushwa; glavu sahihi kwa kazi (zisizokatika kwa visu na blade, glavu za kemikali kwa kemikali, kama karatasi ya data ya usalama inavyosema); kinga ya masikio kwa zana zenye kelele; kofia ngumu mahali vitu vinaweza kuanguka; vesti inayoonekana sana karibu na magari.",
            "Kikague kabla ya kila matumizi: hakuna nyufa, matundu au mikanda iliyochakaa. Lazima kikutoshe. Barakoa ya kupumulia lazima ipimwe kama inakaa vizuri usoni (fit test), na lazima ufundishwe kabla ya kuitumia.",
            "PPE ni kinga ya mwisho. Ni bora kuondoa hatari kwanza, kwa mfano kwa kuweka kinga kwenye mashine au kuhifadhi vitu vizito chini. Chini ya kanuni za OSHA, kwa kawaida waajiri lazima watoe PPE inayohitajika na wakufundishe kuitumia."
          ],
          steps: ["Angalia kazi na hatari zake.", "Chagua PPE inayolingana na kila hatari.", "Ikague kama imeharibika.", "Ivae na uhakikishe inakutosha.", "Isafishe na uihifadhi baada ya kutumia; ripoti kifaa kilichoharibika."],
          words: [["PPE", "vifaa vya kujikinga binafsi (personal protective equipment): vifaa unavyovaa kujilinda dhidi ya hatari."], ["Barakoa ya kupumulia (respirator)", "barakoa inayolinda mapafu yako dhidi ya vumbi, moshi au gesi; inahitaji kupimwa kama inatosha na mafunzo."], ["Fit test", "upimaji kwamba barakoa ya kupumulia inafunga vizuri usoni mwako."]],
          slides: [
            { title: "PPE za kawaida", bullets: ["Macho na uso: miwani, miwani maalum, kinga ya uso", "Kichwa, mikono, miguu: kofia ngumu, glavu, buti", "Masikio, mapafu, kuonekana: vizibo, barakoa, vesti"] },
            { title: "Linganisha kifaa na hatari", bullets: ["Vipande vinavyoruka: miwani ya usalama", "Kemikali: glavu zinazotajwa na karatasi ya data ya usalama", "Zana zenye kelele: kinga ya masikio"] },
            { title: "Kagua kabla ya kila matumizi", bullets: ["Hakuna nyufa, matundu au mikanda iliyochakaa", "Lazima kikutoshe", "Barakoa za kupumulia zinahitaji fit test na mafunzo"] },
            { title: "Kinga ya mwisho", bullets: ["Ondoa hatari kwanza kama unaweza", "Kwa kawaida waajiri lazima watoe PPE inayohitajika"] }
          ],
          sources: [
            { name: "OSHA: Personal protective equipment (vifaa vya kujikinga binafsi)", url: "https://www.osha.gov/personal-protective-equipment" }
          ],
          tryIt: "Chagua kazi tatu: kukata maboksi kwa kisu cha maboksi, kupiga deki kwa kemikali ya kusafishia, na kutumia mashine ya kupuliza majani. Kwa kila moja, andika PPE ungevaa na kwa nini.",
          youCanNow: "kuchagua, kukagua na kuvaa PPE sahihi kwa kazi fulani, na unajua kwamba ni kinga ya mwisho.",
          quickCheck: [
            { objective: "O2", q: "Sababu kuu ya kukagua PPE kabla ya kila matumizi ni ipi?", options: ["Kuona kama ni modeli mpya zaidi", "Kuhakikisha rangi inalingana", "Kutafuta nyufa, matundu au mikanda iliyochakaa", "Kuhesabu ulivyo navyo"], answer: 2, why: "Kifaa kilichoharibika huenda kisikulinde, kwa hiyo unakikagua kabla ya kila matumizi." },
            { objective: "O2", q: "Utakata maboksi kwa kisu cha maboksi siku nzima. Unachagua glavu zipi?", options: ["Glavu za kemikali", "Glavu nyembamba za kitambaa", "Bila glavu", "Glavu zisizokatika"], answer: 3, why: "Glavu zisizokatika zinalingana na hatari ya blade." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuteleza, kujikwaa, kuanguka na kubeba mizigo kwa usalama",
          minutes: 5,
          goal: "Zuia kuteleza, kujikwaa na kuanguka, na ubebe mzigo kwa usalama.",
          text: [
            "Kuteleza, kujikwaa na kuanguka ni kati ya majeraha ya kazini yanayotokea mara nyingi zaidi. Yazuie: safisha kilichomwagika mara moja na uweke alama ya sakafu yenye maji; weka njia wazi bila waya, maboksi wala mipira ya maji; shika reli za ngazi; vaa viatu vinavyoshika vizuri; na hakikisha maeneo ya kazi yana mwanga wa kutosha.",
            "Kufanya kazi juu: tumia ngazi sahihi, iweke kwenye ardhi imara na iliyosawazika, kaa na sehemu tatu za kushika (mikono miwili na mguu mmoja, au miguu miwili na mkono mmoja), na usisimame kamwe kwenye hatua ya juu kabisa. Kinga ya kuanguka, kama reli za kinga au mkanda wa usalama, inahitajika kuanzia urefu fulani; kanuni ya jumla ya OSHA ni futi 4 katika viwanda vya jumla na futi 6 katika ujenzi. Fuata mafunzo ya eneo lako la kazi.",
            "Kubeba mzigo: panga jinsi utakavyoubeba na angalia uzito wake. Pata msaada au tumia toroli, kigari au forklift kwa mizigo mizito au isiyoshikika vizuri. Simama karibu na miguu ikiwa imeachana, kunja magoti, nyoosha mgongo, shika mzigo karibu na mwili, inua kwa nguvu ya miguu, na geuka kwa miguu badala ya kupinda mgongo.",
            "Ripoti maumivu mapema. Maumivu madogo ya misuli huzidi ukiendelea kufanya kazi nayo."
          ],
          steps: ["Safisha kilichomwagika na weka alama kwenye sakafu yenye maji.", "Weka njia wazi.", "Kwenye ngazi: ardhi imara, sehemu tatu za kushika, si hatua ya juu kabisa.", "Kabla ya kubeba: angalia uzito na pata msaada au toroli kama inahitajika.", "Beba: kunja magoti, mgongo wima, mzigo karibu, inua kwa miguu, geuka kwa miguu."],
          words: [["Sehemu tatu za kushika", "kuwa daima na mikono miwili na mguu mmoja, au miguu miwili na mkono mmoja, kwenye ngazi."], ["Kinga ya kuanguka", "reli za kinga, nyavu za usalama au mikanda inayozuia au kusimamisha kuanguka kutoka juu."]],
          slides: [
            { title: "Zuia kuteleza na kujikwaa", bullets: ["Safisha kilichomwagika; tumia alama za sakafu yenye maji", "Ondoa waya na maboksi njiani", "Viatu vizuri na mwanga wa kutosha"] },
            { title: "Ngazi na kufanya kazi juu", bullets: ["Ardhi imara iliyosawazika", "Sehemu tatu za kushika; si hatua ya juu kabisa", "Kinga ya kuanguka: futi 4 viwanda vya jumla, futi 6 ujenzi"] },
            { title: "Kubeba mzigo kwa usalama", bullets: ["Angalia uzito; pata msaada au toroli", "Kunja magoti, mgongo wima, mzigo karibu", "Inua kwa miguu; geuka kwa miguu"] },
            { title: "Ripoti maumivu mapema", bullets: ["Maumivu madogo huzidi yakipuuzwa"] }
          ],
          sources: [
            { name: "OSHA: Fall protection (kinga ya kuanguka)", url: "https://www.osha.gov/fall-protection" },
            { name: "OSHA: Walking-working surfaces (sakafu na maeneo ya kutembea na kufanyia kazi)", url: "https://www.osha.gov/walking-working-surfaces" }
          ],
          tryIt: "Fanya mazoezi ya kubeba kwa usalama ukitumia boksi la vitabu au mahitaji ya nyumbani: angalia uzito, simama karibu, kunja magoti, nyoosha mgongo, inua kwa miguu na geuka kwa miguu. Kisha andika mambo matatu ungerekebisha ili kuzuia kuteleza na kujikwaa unapofanya kazi au unapoishi.",
          youCanNow: "kuzuia kuteleza, kujikwaa na kuanguka, kutumia ngazi kwa usalama, na kubeba mzigo kwa njia sahihi.",
          quickCheck: [
            { objective: "O3", q: "Unapotumia ngazi, ni wapi usipaswi kusimama kamwe?", options: ["Hatua ya juu kabisa", "Hatua ya chini kabisa", "Hatua ya katikati", "Ardhi imara iliyosawazika"], answer: 0, why: "Ukisimama kwenye hatua ya juu kabisa ni rahisi kupoteza usawa na kuanguka." },
            { objective: "O3", q: "Unahitaji kugeuka ukiwa umebeba boksi. Unafanyaje?", options: ["Pinda kiunoni", "Geuka kwa miguu", "Shika boksi mbali na mwili wako", "Kaza magoti na uzunguke"], answer: 1, why: "Kugeuka kwa miguu kunaweka mgongo wako wima na kuzuia kuumia misuli." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kutambua na kuzuia hatari",
        questions: [
          { objective: "O1", q: "Unaona waya wa umeme uliopita njiani. Ni hatari ya aina gani?", options: ["Kemikali", "Kelele", "Kuteleza, kujikwaa au kuanguka", "Joto"], answer: 2, why: "Waya uliopita njiani husababisha watu kujikwaa." },
          { objective: "O1", q: "Ufanye nini na kitu kidogo kilichomwagika ambacho unaweza kusafisha kwa usalama?", options: ["Kipite pembeni", "Kisafishe, weka alama kama sakafu ina maji, na mwambie msimamizi wako", "Kifunike kwa boksi", "Subiri zamu inayofuata"], answer: 1, why: "Kurekebisha hatari ndogo mara moja na kuziripoti huzuia majeraha." },
          { objective: "O2", q: "PPE ipi inafaa kazi ya kutumia mashine ya kupuliza majani yenye kelele kubwa?", options: ["Kinga ya masikio", "Kofia ngumu peke yake", "Mkanda wa kuzuia kuanguka", "Hakuna kitu"], answer: 0, why: "Kinga ya masikio inalinda dhidi ya kelele kubwa." },
          { objective: "O2", q: "Kwa nini PPE inaitwa kinga ya mwisho?", options: ["Ni ghali zaidi", "Ni ya hiari", "Inazuia kila jeraha daima", "Ni bora kuondoa hatari kwanza"], answer: 3, why: "Kuondoa au kuzuia hatari kunamlinda kila mtu; PPE inamlinda anayeivaa tu." },
          { objective: "O3", q: "Tabia ipi ni salama katika kubeba mizigo?", options: ["Pinda mgongo ili kugeuka", "Shika mzigo mbali na mwili wako", "Kunja magoti, shika mzigo karibu, na geuka kwa miguu", "Beba mizigo mizito peke yako ili kuokoa muda"], answer: 2, why: "Hivi uzito unabebwa na miguu, si mgongo." }
        ]
      }
    },
    {
      name: "Sura 2: Kemikali, majeraha na haki zako",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kemikali na karatasi za data ya usalama",
          minutes: 5,
          goal: "Pata hatari, PPE na huduma ya kwanza ya kemikali kwenye karatasi yake ya data ya usalama.",
          text: [
            "Sehemu nyingi za kazi zinatumia kemikali hatari: dawa za kusafishia, bleach, dawa za kuondoa grisi, rangi, mafuta, viuatilifu. Kanuni ya OSHA ya Mawasiliano ya Hatari (Hazard Communication Standard) inasema wafanyakazi wana haki ya kujua kuhusu kemikali wanazofanya nazo kazi.",
            "Vyombo lazima viwe na lebo zinazoonyesha jina la bidhaa, picha za alama (alama zenye mpaka mwekundu), neno la tahadhari (\"Danger\", yaani hatari kubwa, kwa hatari kubwa zaidi, na \"Warning\", yaani onyo, kwa hatari ndogo zaidi), na maelezo ya hatari na ya tahadhari.",
            "Kila kemikali hatari ina karatasi ya data ya usalama (SDS) yenye sehemu 16 kwa mpangilio uleule. Zenye manufaa: Sehemu ya 2, hatari; Sehemu ya 4, huduma ya kwanza; Sehemu ya 7, kushughulikia na kuhifadhi kwa usalama; Sehemu ya 8, udhibiti wa kugusana na kemikali na PPE. Mwajiri wako lazima atunze SDS za kemikali unazotumia na akufundishe kuzihusu. Uliza zinahifadhiwa wapi.",
            "Tabia salama: usichanganye kemikali kamwe (bleach na amonia hutengeneza gesi yenye sumu), weka kemikali katika vyombo vyenye lebo, tumia PPE iliyo katika Sehemu ya 8, na fanya kazi mahali penye hewa ya kutosha."
          ],
          steps: ["Soma lebo ya chombo: jina, picha za alama, neno la tahadhari.", "Tafuta SDS ya bidhaa hiyo.", "Sehemu ya 2: hatari ni zipi?", "Sehemu ya 8: ninahitaji PPE gani?", "Sehemu ya 4: huduma ya kwanza ni ipi?", "Usichanganye kemikali kamwe, na hakikisha zina lebo."],
          words: [["Karatasi ya data ya usalama (SDS)", "hati yenye sehemu 16 kuhusu kemikali: hatari zake, jinsi ya kuishughulikia kwa usalama, PPE na huduma ya kwanza."], ["Picha ya alama (pictogram)", "alama ndani ya umbo la almasi lenye mpaka mwekundu kwenye lebo ya kemikali, inayoonyesha aina ya hatari."], ["Neno la tahadhari", "\"Danger\" (hatari kubwa zaidi) au \"Warning\" (hatari ndogo zaidi) kwenye lebo ya kemikali."]],
          slides: [
            { title: "Haki yako ya kujua", bullets: ["Lebo kwenye kila chombo", "Karatasi ya data ya usalama kwa kila kemikali hatari", "Mafunzo kuhusu kemikali unazotumia"] },
            { title: "Soma lebo", bullets: ["Jina la bidhaa", "Picha za alama katika almasi nyekundu", "Neno la tahadhari: Danger au Warning"] },
            { title: "Sehemu za SDS za kujua", bullets: ["2: hatari", "4: huduma ya kwanza", "7: kushughulikia na kuhifadhi", "8: udhibiti wa kugusana na kemikali na PPE"] },
            { title: "Tabia salama", bullets: ["Usichanganye kemikali kamwe", "Kila kitu kiwe na lebo", "Tumia PPE iliyo katika Sehemu ya 8"] }
          ],
          sources: [
            { name: "OSHA: Hazard Communication (mawasiliano ya hatari)", url: "https://www.osha.gov/hazcom" }
          ],
          tryIt: "Tafuta bidhaa ya kusafishia nyumbani au kazini. Soma lebo yake (picha za alama na neno la tahadhari). Kisha tafuta jina la bidhaa pamoja na maneno \"safety data sheet\" kwenye tovuti ya mtengenezaji, na uandike Sehemu za 2, 4 na 8 zinasema nini.",
          youCanNow: "kusoma lebo ya kemikali na kupata hatari, PPE na huduma ya kwanza kwenye karatasi yake ya data ya usalama.",
          quickCheck: [
            { objective: "O4", q: "Picha ya alama kwenye lebo ya kemikali ni nini?", options: ["Bei ya bidhaa", "Namba ya simu ya mtengenezaji", "Alama yenye mpaka mwekundu inayoonyesha hatari", "Tarehe ilipotengenezwa"], answer: 2, why: "Picha za alama ni alama zenye mpaka mwekundu zinazoonyesha aina ya hatari." },
            { objective: "O4", q: "Bidhaa inamrukia mfanyakazi mwenzako jichoni. Unaangalia sehemu gani ya SDS?", options: ["Sehemu ya 2", "Sehemu ya 7", "Sehemu ya 8", "Sehemu ya 4"], answer: 3, why: "Sehemu ya 4 ya karatasi ya data ya usalama inatoa hatua za huduma ya kwanza." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kuripoti majeraha na hatari",
          minutes: 5,
          goal: "Chukua hatua sahihi mtu anapoumia na uripoti kwa njia sahihi.",
          text: [
            "Mtu akiumia vibaya, piga 911 (au namba ya dharura ya eneo lako la kazi) kwanza. Usimsogeze isipokuwa yuko hatarini. Mwite mtu aliyefunzwa huduma ya kwanza kama eneo lako lina mmoja.",
            "Ripoti kila jeraha au ugonjwa wa kazini kwa msimamizi wako mara moja, hata madogo kama kukatwa au kuumia misuli. Kuripoti mapema kunakupatia matibabu, kunalinda haki yako ya fidia ya wafanyakazi katika jimbo lako, na kunasaidia kurekebisha hatari ili isimuumize mtu mwingine. Andika kilichotokea, lini, wapi na nani aliona.",
            "Waajiri pia wana wajibu. Lazima waripoti kwa OSHA ndani ya saa 8 kama mfanyakazi amekufa kutokana na tukio la kazini, na ndani ya saa 24 kama mfanyakazi amelazwa hospitalini, amekatwa kiungo au amepoteza jicho. Waajiri wengi pia lazima watunze kumbukumbu za majeraha, na wafanyakazi wana haki ya kuziona.",
            "Ripoti hatari kwa njia ileile: mwambie msimamizi wako, iandike, na wazuie watu wasikaribie hadi irekebishwe. Kanuni za OSHA zinafanya iwe kinyume cha sheria kwa mwajiri kukuadhibu kwa kuripoti jeraha au hatari."
          ],
          steps: ["Jeraha kubwa: piga 911 au namba ya dharura ya eneo la kazi kwanza.", "Pata huduma ya kwanza kutoka kwa mtu aliyefunzwa.", "Mwambie msimamizi wako mara moja, hata kwa majeraha madogo.", "Andika nini, lini, wapi na nani aliona.", "Uliza kuhusu fidia ya wafanyakazi na fuatilia marekebisho."],
          words: [["Fidia ya wafanyakazi (workers' compensation)", "bima ya jimbo inayolipa gharama za matibabu na sehemu ya mshahara uliopotea kwa majeraha ya kazini."], ["Daftari la majeraha", "kumbukumbu za mwajiri za majeraha na magonjwa ya kazini; wafanyakazi wana haki ya kuziona."]],
          slides: [
            { title: "Jeraha kubwa", bullets: ["Piga 911 au namba ya dharura ya eneo la kazi", "Usimsogeze isipokuwa yuko hatarini", "Mwite aliyefunzwa huduma ya kwanza"] },
            { title: "Ripoti kila jeraha", bullets: ["Mwambie msimamizi wako mara moja", "Andika nini, lini, wapi, nani aliona", "Inalinda dai lako la fidia ya wafanyakazi"] },
            { title: "Wajibu wa mwajiri", bullets: ["Kifo: ripoti kwa OSHA ndani ya saa 8", "Kulazwa hospitalini, kukatwa kiungo, kupoteza jicho: saa 24", "Kutunza kumbukumbu za majeraha ambazo wafanyakazi wanaweza kuona"] },
            { title: "Kuripoti kunalindwa", bullets: ["Kukuadhibu kwa kuripoti ni kinyume cha sheria"] }
          ],
          sources: [
            { name: "OSHA: Report a fatality or severe injury (ripoti kifo au jeraha kubwa)", url: "https://www.osha.gov/report" },
            { name: "OSHA: 29 CFR 1904.39, kanuni ya kuripoti", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1904/1904.39" }
          ],
          tryIt: "Andika hatua ambazo ungechukua kama mfanyakazi mwenzako angejikata mkono vibaya kwa kisu cha maboksi. Kisha andika ripoti fupi ya jeraha: nini kilitokea, lini, wapi, nani aliona, na nini kinapaswa kubadilika.",
          youCanNow: "kushughulikia jeraha, kuliripoti kwa njia sahihi na kwa wakati, na unajua mwajiri wako lazima aripoti nini.",
          quickCheck: [
            { objective: "O5", q: "Ni taarifa zipi zinapaswa kuwa katika ripoti ya jeraha?", options: ["Nini kilitokea, lini, wapi na nani aliona", "Jina la mfanyakazi aliyeumia tu", "Nani unadhani ana kosa", "Maoni yako kuhusu msimamizi"], answer: 0, why: "Ripoti iliyo wazi inasema nini kilitokea, lini, wapi na nani aliona." },
            { objective: "O5", q: "Umeumia mgongo ukibeba mzigo lakini unauma kidogo tu. Unafanya nini?", options: ["Endelea kufanya kazi na usiseme kitu", "Mwambie msimamizi wako mara moja", "Subiri mwezi mmoja uone kama utazidi", "Mwambie mfanyakazi mwenzako tu"], answer: 1, why: "Kuripoti mapema kunakupatia matibabu na kunalinda haki zako za fidia ya wafanyakazi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Haki zako za usalama, OSHA 10 na OSHA 30",
          minutes: 5,
          goal: "Eleza haki yako ya kazi salama, jinsi ya kuwasilisha malalamiko kwa OSHA, na OSHA 10 na 30 ni nini.",
          text: [
            "Chini ya sheria ya Marekani ya Usalama na Afya Kazini (Occupational Safety and Health Act), mwajiri wako lazima atoe mahali pa kazi pasipo na hatari kubwa zinazojulikana. Una haki ya mafunzo kwa lugha unayoielewa, ya vifaa vya usalama vinavyohitajika, ya kuona kumbukumbu za majeraha na matokeo ya vipimo kuhusu hatari, ya kuripoti hatari, na ya kuiomba OSHA ikague mahali pako pa kazi.",
            "Kama hatari haijarekebishwa, unaweza kuwasilisha malalamiko kwa OSHA mtandaoni, kwa simu kupitia 1-800-321-OSHA (6742), kwa barua au katika ofisi ya OSHA, na kuomba jina lako lisitajwe kwa mwajiri wako. Mwajiri wako akikuadhibu kwa kuibua suala la usalama, wasilisha malalamiko ya mtoa taarifa (whistleblower) kwa OSHA haraka iwezekanavyo; chini ya sheria ya serikali kuu, mwisho ni siku 30.",
            "OSHA 10 na OSHA 30 ni kozi katika Programu ya hiari ya OSHA ya Mafunzo ya Kufikia Jamii (Outreach Training Program). OSHA 10 ni kozi ya saa 10 kwa wafanyakazi wanaoanza kuhusu kutambua hatari na haki za wafanyakazi. OSHA 30 ni kozi ya saa 30 kwa wasimamizi na wafanyakazi wenye majukumu ya usalama. Kuna matoleo ya ujenzi na ya viwanda vya jumla. Unapata kadi ya kumaliza kozi.",
            "Kadi hizi si leseni wala cheti cha utaalamu, lakini waajiri wengi, vyama vya wafanyakazi na baadhi ya majimbo huziomba. Wakufunzi walioidhinishwa na OSHA pekee ndio wanaoweza kutoa kadi halali, kwa hiyo soma kozi kutoka kwa mkufunzi au mtoaji aliyeidhinishwa na uwe mwangalifu na matangazo yanayoonekana kuwa ya bei rahisi mno au ya haraka mno."
          ],
          steps: ["Ripoti hatari kwa msimamizi wako kwanza, kama ni salama.", "Kama haijarekebishwa, wasilisha malalamiko kwa OSHA mtandaoni au kupitia 1-800-321-6742.", "Omba jina lako lifichwe kama unataka.", "Ukiadhibiwa kwa kuripoti, wasilisha malalamiko ya mtoa taarifa ndani ya siku 30.", "Chagua OSHA 10 (wanaoanza) au OSHA 30 (wasimamizi), ya ujenzi au viwanda vya jumla, kutoka kwa mkufunzi aliyeidhinishwa."],
          words: [["OSHA", "Occupational Safety and Health Administration, shirika la serikali kuu ya Marekani la usalama kazini."], ["Outreach Training Program", "programu ya hiari ya OSHA ya kozi za usalama za saa 10 na saa 30 zinazofundishwa na wakufunzi walioidhinishwa."], ["Mtoa taarifa (whistleblower)", "mfanyakazi anayeripoti tatizo; sheria inamlinda asiadhibiwe kwa sababu hiyo."]],
          slides: [
            { title: "Haki yako ya kazi salama", bullets: ["Mahali pa kazi pasipo na hatari kubwa zinazojulikana", "Mafunzo kwa lugha unayoielewa", "Kuona kumbukumbu za majeraha; kuomba ukaguzi"] },
            { title: "Kuwasilisha malalamiko", bullets: ["osha.gov au 1-800-321-6742", "Unaweza kuomba jina lako lifichwe", "Umeadhibiwa? Malalamiko ya mtoa taarifa ndani ya siku 30"] },
            { title: "OSHA 10 na OSHA 30", bullets: ["Saa 10: wafanyakazi wanaoanza", "Saa 30: wasimamizi na wenye majukumu ya usalama", "Matoleo ya ujenzi au viwanda vya jumla"] },
            { title: "Kuhusu kadi", bullets: ["Ni za hiari; si leseni wala cheti", "Waajiri wengi na vyama vya wafanyakazi huziomba", "Wakufunzi walioidhinishwa pekee hutoa kadi halali"] }
          ],
          sources: [
            { name: "OSHA: Workers' rights (haki za wafanyakazi)", url: "https://www.osha.gov/workers" },
            { name: "OSHA: File a safety and health complaint (wasilisha malalamiko ya usalama na afya)", url: "https://www.osha.gov/workers/file-complaint" },
            { name: "OSHA: Outreach Training Program", url: "https://www.osha.gov/training/outreach" },
            { name: "OSHA: The facts about obtaining an OSHA card (ukweli kuhusu kupata kadi ya OSHA)", url: "https://www.osha.gov/training/oshacardfacts" }
          ],
          tryIt: "Kazi ya mwisho: fanya ukaguzi wa hatari wa dakika 10 kwa kutembea na uandike ripoti yako ya hatari: hatari tano, aina zake, PPE au marekebisho, nani ungemripotia kila moja, sehemu za SDS za kemikali moja, na hatua zako za jeraha. Chini kabisa, andika kama OSHA 10 au OSHA 30 inafaa kazi yako na kwa nini.",
          youCanNow: "kueleza haki yako ya kazi salama, kuwasilisha malalamiko kwa OSHA, na kuchagua kati ya OSHA 10 na OSHA 30.",
          quickCheck: [
            { objective: "O6", q: "Kadi ya OSHA 10 au OSHA 30 ni nini?", options: ["Leseni ya jimbo ya kufanya kazi", "Cheti cha utaalamu", "Kadi ya kumaliza kozi kutoka kwa mkufunzi aliyeidhinishwa", "Kadi inayochukua nafasi ya mafunzo ya mwajiri"], answer: 2, why: "Kadi zinaonyesha kwamba umemaliza kozi ya hiari ya kufikia jamii; si leseni." },
            { objective: "O6", q: "Ulimwambia msimamizi wako kuhusu mlango wa dharura wa moto uliozibwa na hakuna kilichobadilika. Unaweza kufanya nini baadaye?", options: ["Hakuna; mameneja pekee wanaweza kuchukua hatua", "Acha kazi mara moja", "Kwanza andika kuhusu hilo mtandaoni", "Wasilisha malalamiko kwa OSHA na uombe jina lako lifichwe"], answer: 3, why: "Kama hatari haijarekebishwa, unaweza kuwasilisha malalamiko kwa OSHA na kuomba jina lako lisitajwe." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kemikali, majeraha na haki zako",
        questions: [
          { objective: "O4", q: "Ni sehemu gani ya karatasi ya data ya usalama inakuambia PPE ya kuvaa?", options: ["Sehemu ya 1", "Sehemu ya 4", "Sehemu ya 16", "Sehemu ya 8"], answer: 3, why: "Sehemu ya 8 inahusu udhibiti wa kugusana na kemikali na kinga binafsi." },
          { objective: "O4", q: "Kwenye lebo ya kemikali, neno lipi la tahadhari linamaanisha hatari kubwa zaidi?", options: ["Danger", "Warning", "Caution", "Notice"], answer: 0, why: "\"Danger\" inatumika kwa hatari kubwa zaidi; \"Warning\" kwa hatari ndogo zaidi." },
          { objective: "O5", q: "Umepata jeraha dogo la kukatwa kazini. Ufanye nini?", options: ["Lifiche", "Subiri hadi lizidi", "Mwambie msimamizi wako mara moja na uandike kilichotokea", "Acha kazi"], answer: 2, why: "Ripoti kila jeraha mapema, hata madogo." },
          { objective: "O5", q: "Mwajiri lazima aripoti kifo kinachohusiana na kazi kwa OSHA ndani ya muda gani?", options: ["Siku 30", "Saa 8", "Wiki moja", "Hahitaji kuripoti"], answer: 1, why: "Kanuni ya OSHA ni saa 8 kwa kifo." },
          { objective: "O6", q: "OSHA 10 ni nini?", options: ["Leseni ya lazima ya fundi umeme", "Faini", "Kozi ya hiari ya usalama ya saa 10 kwa wafanyakazi wanaoanza", "Lebo ya kemikali"], answer: 2, why: "Ni kozi ya Outreach Training yenye kadi ya kumaliza, si leseni." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Misingi ya Usalama Kazini (OSHA)",
    questions: [
      { objective: "O1", q: "Hatari ni nini?", options: ["Kitu chochote kazini kinachoweza kusababisha jeraha au ugonjwa", "Bango la usalama", "Aina ya PPE", "Chumba cha mapumziko"], answer: 0, why: "Hatari ni chanzo cha madhara yanayoweza kutokea." },
      { objective: "O1", q: "Wakati wa ukaguzi wa hatari, \"angalia juu\" inamaanisha kukagua:", options: ["Sakafu kwa vitu vilivyomwagika", "Simu yako", "Rafu za juu, mizigo iliyo juu na ngazi", "Saa"], answer: 2, why: "Vitu vilivyo juu vinaweza kuanguka au kusababisha mtu kuanguka." },
      { objective: "O1", q: "Kinga ya mashine imeondolewa. Unapaswa:", options: ["Kuitumia kwa uangalifu", "Usiitumie, wazuie watu wasikaribie na uiripoti", "Kuingiza mkono kuikagua", "Kuipuuza"], answer: 1, why: "Mashine bila kinga husababisha majeraha makubwa; ripoti na kaa mbali." },
      { objective: "O2", q: "Ni glavu zipi unapaswa kuvaa ukitumia kemikali ya kusafishia?", options: ["Glavu zozote", "Bila glavu", "Glavu zisizokatika", "Aina ambayo karatasi ya data ya usalama inataja"], answer: 3, why: "SDS inaorodhesha kinga sahihi kwa kemikali hiyo." },
      { objective: "O2", q: "Kabla ya kutumia barakoa ya kupumulia (respirator), unahitaji:", options: ["Hakuna kitu", "Fit test na mafunzo", "Kuiangalia haraka tu", "Barakoa ya mfanyakazi mwenzako"], answer: 1, why: "Barakoa ya kupumulia lazima ifunge vizuri na itumike kwa njia sahihi." },
      { objective: "O2", q: "Kwa kawaida ni nani lazima atoe PPE inayohitajika?", options: ["Mwajiri", "Mfanyakazi", "Mfanyakazi mwenzako", "Hakuna mtu"], answer: 0, why: "Chini ya kanuni za OSHA, kwa kawaida waajiri lazima watoe PPE inayohitajika." },
      { objective: "O3", q: "Njia ipi nzuri ya kuzuia kuteleza?", options: ["Acha vitu vilivyomwagika kwa baadaye", "Vaa viatu vyenye soli laini", "Zima taa", "Safisha kilichomwagika mara moja na tumia alama ya sakafu yenye maji"], answer: 3, why: "Kusafisha haraka na kuonya huzuia kuanguka." },
      { objective: "O3", q: "Kwenye ngazi, \"sehemu tatu za kushika\" inamaanisha:", options: ["Watu watatu wanashika ngazi", "Ngazi tatu pamoja", "Mikono miwili na mguu mmoja, au miguu miwili na mkono mmoja, kwenye ngazi", "Kusimama kwenye hatua tatu za juu"], answer: 2, why: "Inakufanya uwe imara unapopanda." },
      { objective: "O3", q: "Katika ujenzi, urefu wa jumla wa OSHA unaohitaji kinga ya kuanguka ni:", options: ["Futi 6", "Futi 1", "Futi 20", "Hakuna kanuni"], answer: 0, why: "Kiwango cha jumla katika ujenzi ni futi 6; katika viwanda vya jumla ni futi 4." },
      { objective: "O3", q: "Boksi ni zito na halishikiki vizuri. Unafanya nini?", options: ["Liinue haraka", "Pinda mgongo unapoinua", "Pata msaada au tumia toroli au kigari", "Libebe mbali na mwili wako"], answer: 2, why: "Msaada au vifaa huzuia majeraha ya mgongo." },
      { objective: "O4", q: "SDS ni kifupi cha nini?", options: ["Hati ya kawaida ya kupeleka mzigo", "Ratiba ya kazi za wafanyakazi", "Alama ya zamu ya kazi", "Karatasi ya data ya usalama (safety data sheet)"], answer: 3, why: "Karatasi ya data ya usalama inaeleza hatari za kemikali na matumizi yake salama." },
      { objective: "O4", q: "Sehemu ipi ya SDS inatoa huduma ya kwanza?", options: ["Sehemu ya 2", "Sehemu ya 4", "Sehemu ya 16", "Sehemu ya 8"], answer: 1, why: "Sehemu ya 4 inaorodhesha hatua za huduma ya kwanza." },
      { objective: "O4", q: "Kwa nini usichanganye kamwe bleach na amonia?", options: ["Zinagharimu zaidi", "Zinapoteza harufu yake", "Zinachafua sakafu", "Zinatengeneza gesi yenye sumu"], answer: 3, why: "Kuzichanganya kunatoa gesi hatari." },
      { objective: "O5", q: "Mfanyakazi mwenzako ameumia vibaya. Hatua ya kwanza ni ipi?", options: ["Piga 911 au namba ya dharura ya eneo la kazi", "Maliza kazi yako", "Weka picha mtandaoni", "Msogeze mara moja"], answer: 0, why: "Msaada wa dharura unakuja kwanza; usimsogeze isipokuwa yuko hatarini." },
      { objective: "O5", q: "Kwa nini uripoti hata jeraha dogo?", options: ["Kupata siku ya mapumziko", "Haihitajiki", "Kupata matibabu, kulinda haki zako za fidia ya wafanyakazi, na kurekebisha hatari", "Kumlaumu mtu"], answer: 2, why: "Kuripoti mapema kunakulinda wewe na wengine." },
      { objective: "O5", q: "Mfanyakazi amepoteza jicho katika ajali ya kazini. Mwajiri lazima aripoti kwa OSHA ndani ya:", options: ["Saa 8", "Saa 24", "Mwaka mmoja", "Siku 30"], answer: 1, why: "Kulazwa hospitalini, kukatwa kiungo na kupoteza jicho lazima viripotiwe ndani ya saa 24." },
      { objective: "O6", q: "Namba ipi ya simu inakufikisha OSHA?", options: ["1-800-321-6742", "1-800-669-4000", "911", "411"], answer: 0, why: "1-800-321-OSHA (6742) ni namba ya OSHA; 1-800-669-4000 ni ya EEOC." },
      { objective: "O6", q: "Uliondolewa kwenye ratiba ya kazi kwa kuripoti hatari. Chini ya sheria ya serikali kuu, wasilisha malalamiko ya mtoa taarifa ndani ya:", options: ["Mwaka mmoja", "Hakuna muda wa mwisho", "Miaka mitano", "Siku 30"], answer: 3, why: "Muda wa mwisho wa serikali kuu kwa malalamiko ya kuadhibiwa kwa sababu ya usalama ni siku 30." },
      { objective: "O6", q: "OSHA 30 ni hasa kwa ajili ya nani?", options: ["Madereva wa malori tu", "Wasimamizi na wafanyakazi wenye majukumu ya usalama", "Watoto", "Watu wanaotaka leseni ya fundi umeme"], answer: 1, why: "OSHA 30 inatoa mafunzo ya kina zaidi kwa wasimamizi na wenye majukumu ya usalama." },
      { objective: "O6", q: "Lipi ni kweli kuhusu kadi za OSHA 10 na 30?", options: ["Ni leseni", "Mtu yeyote anaweza kuchapisha moja", "Ni kadi za mafunzo ya hiari ambazo wakufunzi walioidhinishwa pekee wanaweza kutoa", "Hazipitwi na muda popote"], answer: 2, why: "Si vyeti vya utaalamu, na wakufunzi walioidhinishwa pekee ndio hutoa kadi halali." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 2, 3, 7, 9, 11, 13, 14, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Hatari zilizopatikana", objective: "O1", notYet: "Hatari chini ya tano, au aina hazipo au si sahihi.", meets: "Angalau hatari tano, kila moja ikiwa na aina sahihi.", exceeds: "Pia anasema hatari zipi zirekebishwe sasa na zipi ziripotiwe." },
      { name: "PPE na marekebisho", objective: "O2", notYet: "Hakuna PPE wala marekebisho, au kifaa kisicholingana na hatari.", meets: "Kila hatari ina kifaa cha PPE au marekebisho yanayolingana nayo.", exceeds: "Anataja njia ya kuondoa hatari kabla ya kutegemea PPE." },
      { name: "Karatasi ya data ya usalama", objective: "O4", notYet: "Hakuna kemikali, au sehemu za SDS si sahihi.", meets: "Anataja Sehemu za 2, 4 na 8 kwa kemikali moja na kila moja inahusu nini.", exceeds: "Pia anataja neno la tahadhari na picha za alama za lebo." },
      { name: "Kuripoti", objective: "O5", notYet: "Hakuna mtu aliyetajwa wa kumripotia, au hatua za jeraha hazipo.", meets: "Anataja nani wa kumripotia kila hatari na anaorodhesha hatua za jeraha kwa mpangilio.", exceeds: "Hatua za jeraha zinajumuisha kuandika nini, lini, wapi na nani aliona." },
      { name: "Haki na mafunzo", objective: "O6", notYet: "Hasemi kama OSHA 10 au 30 inafaa.", meets: "Anachagua OSHA 10 au OSHA 30 na anatoa sababu inayofaa kazi yake.", exceeds: "Pia anaeleza jinsi ya kuwasilisha malalamiko kwa OSHA kama hatari haijarekebishwa." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaojiandikisha katika kozi ya OSHA 10 au OSHA 30 kutoka kwa mkufunzi aliyeidhinishwa ndani ya siku 90",
      "Wanafunzi wanaopata au kubaki na kazi ya mikono ndani ya siku 90 (utafiti wa kufuatilia)",
      "Washirika wa maendeleo ya wafanyakazi wanaripoti majeraha machache au hatari nyingi zaidi zinazoripotiwa miongoni mwa washiriki wa programu"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta ya kusoma masomo",
      "Chumba cha kutembelea kwa ukaguzi wa hatari: nyumbani, stoo au mahali pa kazi (kwa ruhusa)",
      "Bidhaa ya kusafishia ya nyumbani yenye lebo, na intaneti ya kutafuta karatasi yake ya data ya usalama",
      "Karatasi na kalamu kwa ripoti ya hatari",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Fanyeni kwanza ukaguzi wa hatari wa kikundi katika chumba cha mafunzo, kisha waache wanafunzi wafanye wao wenyewe.",
      "Fanyeni mazoezi ya kubeba kwa usalama kwa boksi jepesi tu; hakuna anayepanda ngazi au kubeba mizigo mizito wakati wa mafunzo.",
      "Usiwaruhusu kamwe wanafunzi kufungua au kuchanganya kemikali wakati wa mazoezi; wanasoma lebo na SDS tu.",
      "Wakumbushe wanafunzi kwamba kozi hii haichukui nafasi ya kadi ya OSHA 10 au OSHA 30 wala ya mafunzo ya mwajiri wao.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};

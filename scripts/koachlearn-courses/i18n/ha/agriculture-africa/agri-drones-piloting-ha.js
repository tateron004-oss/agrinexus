"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-drones-piloting.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// Stick terms keep the English names (throttle, yaw, pitch, roll) in brackets, since drone apps often show them in English.

const KCAA_UAS = { name: "Hukumar Kula da Sufurin Jiragen Sama ta Kenya (KCAA): Tsarin Jiragen Sama Marasa Matuƙi", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_UTO = { name: "KCAA: Cibiyoyin Horar da Matuƙan Jiragen Sama Marasa Matuƙi (UTO)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems/uto" };
const KCAA_PORTAL = { name: "Tsarin intanet na KCAA don drone (RPAS)", url: "https://rpas.kcaa.or.ke/" };
const NCAA_P21 = { name: "Hukumar Kula da Sufurin Jiragen Sama ta Najeriya (NCAA): Nig.CARs 2023 Sashe na 21, Jiragen Sama da Ake Tuƙawa daga Nesa (RPAS)", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };

module.exports = {
  id: "agri-drones-piloting-ha",
  lang: "ha",
  translationOf: "agri-drones-piloting",
  category: "Agriculture (Africa)",
  name: "Drone don Sa Ido a Gona 6: Kwas na Intanet kan Tuƙa Drone",
  skills: "Amfani da sandunan sarrafawa, Yin atisayen tuƙi a simulator, Zaɓa da canja yanayin tuƙi, Magance gaggawa (yankewar sigina, ƙarewar batir, ɓacewar GPS), Ajiye littafin bayanan tuƙi, Shirya hanyarku zuwa lasisin matuƙin drone",
  outcome: "tuƙa jerin atisaye na yau da kullum a hankali a cikin simulator na drone, magance manyan matsalolin gaggawa cikin natsuwa, ajiye littafin bayanan tuƙi yadda ya kamata, da bin tsarinku na kanku mai sarari don samun lasisin matuƙin drone daga hukumar sufurin jiragen sama ta ƙasarku.",
  about: [
    "Wannan shi ne kwas na ƙarshe na jerin kwasa-kwasan sa ido da drone (jirgi marar matuƙi), ga duk wanda ke Kenya, Najeriya ko wani wuri a Afirka da ke son zama ƙwararren matuƙin drone mai lasisi don aikin gona. An tsara shi don a yi shi ta intanet: yawancin atisaye ana yin su ne a cikin simulator na drone (shirin kwamfuta mai kwaikwayon tuƙi) kyauta ko mai araha a kwamfuta ko waya, don ku iya yin kuskure ba tare da faɗuwar drone na gaske ko karya wata doka ba.",
    "Babi na 1 yana koyar da sandunan sarrafawa, jerin atisaye, da yanayin tuƙi (flight modes) da drone ɗinku zai iya samu. Babi na 2 yana koyar da matakan gaggawa, yadda ake ajiye littafin bayanan tuƙi, da matakan samun lasisin matuƙin drone.",
    "Muhimmi: wannan kwas ba ya ba ku lasisi, kuma ba ya ba ku izinin tuƙa drone. A Kenya da Najeriya, kamar yawancin ƙasashe, lasisin matuƙin drone yana fitowa ne daga hukumar sufurin jiragen sama bayan horo a cibiyar da aka amince da ita da cin jarabawarta. Kada ku taɓa tuƙa drone na gaske ba tare da rajista, lasisi da izinin da ƙasarku ke buƙata ba."
  ],
  finalTask: "A cikin simulator na drone, ku kammala atisaye biyar na wannan kwas (tsayawa a sama, akwati, siffar takwas, kewaya wuri, da layukan injin yanka ciyawa) har ku iya tuƙa kowanne a hankali sau uku a jere, ku yi atisayen gaggawa guda uku, ku rubuta kowane zama a littafin bayanan tuƙi, sannan ku rubuta tsarin lasisi na kanku a shafi ɗaya: hukumar ƙasarku, cibiyoyin horo da aka amince da su da kuka samo, lasisin da kuke buƙata, matakai, takardu, kimanin kuɗi daga majiyoyin hukuma, da ranakun da kuke son cimmawa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Duk wanda ke Kenya, Najeriya ko wani wuri a Afirka da ke son zama ƙwararren matuƙin drone mai lasisi don aikin gona, kuma yake ɗaukar kwas na ƙarshe na jerin sa ido da drone ta intanet.",
    startingPoint: "Masu koyo sun san abin da drone ke yi a gona, ƙa'idoji na asali da yadda ake yin taswira (Kwas na 1 zuwa 5). Da yawa ba su da lokacin riƙe sandunan sarrafawa sosai ko kwata-kwata, ba su taɓa yin atisayen gaggawa ba, ba sa ajiye bayanan tuƙi, kuma ba su san matakai, takardu da makarantun da aka amince da su don lasisin matuƙin drone ba.",
    gap: "Sababbin matuƙa suna faɗuwa idan sun firgita a lokacin gaggawa, idan GPS ta ɓace ko idan suna tuƙawa gaban drone yana fuskantar su, wasu kuma suna biyan makarantun da ba a amince da su ba ko suna tuƙawa ba tare da lasisi ba. Yin atisaye da atisayen gaggawa a simulator, ajiye littafin bayanan tuƙi da bin tsarin lasisi mai sarari suna sa masu koyo su isa horon da aka amince da shi a shirye don koyo da sauri da tuƙawa bisa doka.",
    constraints: [
      "Na'urori: kwamfuta ko waya da za ta iya gudanar da simulator na drone kyauta ko mai araha; na'urar sarrafawa (controller) tana taimakawa",
      "Wannan kwas ba ya ba da lasisi ko izinin tuƙi; lasisi yana fitowa daga hukumar sufurin jiragen sama bayan horon da aka amince da shi da jarabawa",
      "Kada a taɓa tuƙa drone na gaske ba tare da rajista, lasisi da izinin da ƙasar ke buƙata ba",
      "Lokaci: gajerun zaman atisaye na yau da kullum na minti 15 zuwa 20",
      "Kuɗaɗe da matakai suna canjawa: masu koyo suna duba shafukan hukuma na hukumar"
    ],
    prerequisites: "\"Drone don Sa Ido a Gona 1: Gabatarwa, Dokoki da Tsaro\"; Kwas na 2 zuwa 5 suna taimakawa amma ba dole ba ne."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ta amfani da na'urar sarrafa drone ko simulator", action: "faɗin abin da kowane motsin sanda yake yi da karanta muhimman abubuwa a allon tuƙi", standard: "kuma ku nemo maɓallan komawa gida da tsayawa ba tare da kun duba ba" },
    { id: "O2", condition: "A cikin simulator na drone", action: "tuƙa atisayen tsayawa a sama, akwati, siffar takwas, kewaya wuri da layukan injin yanka ciyawa, da rubuta kowane zama a littafin bayanan tuƙi", standard: "kuna tuƙa kowane atisaye a hankali sau uku a jere" },
    { id: "O3", condition: "Idan GPS tana da ƙarfi ko rauni", action: "bayyana manyan yanayin tuƙi da tuƙawa cikin natsuwa idan drone ya koma yanayin attitude", standard: "kuna ganin drone a koyaushe kuma kuna sauka lafiya" },
    { id: "O4", condition: "A cikin kwaikwayon yankewar sigina, ƙarewar batir ko ɓacewar GPS", action: "bin matakan gaggawa da suka dace", standard: "cikin natsuwa kuma bisa tsari daidai, sannan ku rubuta abin da ya faru" },
    { id: "O5", condition: "Don ƙasarku", action: "rubuta tsarin kanku don samun lasisin matuƙin drone", standard: "mai ɗauke da hukumar, makarantun da aka amince da su, matakai, takardu, kuɗi daga majiyoyin hukuma da ranakun da kuke son cimmawa" }
  ],
  chapters: [
    {
      name: "Babi na 1: Koyon tuƙi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Abubuwan sarrafawa: sanduna, maɓallai da allo",
          minutes: 5,
          goal: "Faɗi abin da kowane motsin sanda yake yi, ku karanta muhimman abubuwa a allon tuƙi.",
          text: [
            "Yawancin na'urorin sarrafa drone suna da sanduna biyu. A Mode 2, tsarin da aka fi amfani da shi, sandar hagu tana sarrafa tsayi (throttle: sama don hawa, ƙasa don sauka) da juyawa a wuri ɗaya (yaw: hagu da dama). Sandar dama tana motsa drone gaba da baya (pitch) da gefe (roll). Wasu matuƙa suna amfani da wasu tsare-tsare; ku duba naku a cikin saitin manhajar.",
            "Ƙananan motsi masu laushi na sanduna suna kawo tuƙi mai laushi. Masu farawa suna turawa da nisa kuma da sauri. Ku yi atisayen motsa sandunan a hankali, sannan ku bar su su koma tsakiya, inda yawancin drone ke tsayawa a wurinsu.",
            "Allon tuƙi yana nuna yawan batir, ƙarfin sigina, tauraron ɗan adam na GPS, tsayi, nisa daga gida da hoton kyamara. Ku koyi kallon sa da sauri, sannan ku koma kallon drone. Ku san inda maɓallin komawa gida (return-to-home) da maɓallin tsayawa ko birki suke ba tare da kun duba ba."
          ],
          words: [["Throttle", "motsi sama da ƙasa (hawa ko sauka)."], ["Yaw", "juya drone hagu ko dama a wuri ɗaya."], ["Pitch", "motsi gaba ko baya."], ["Roll", "motsi gefe, hagu ko dama."], ["Mode 2", "tsarin sanduna da aka fi amfani da shi: sandar hagu throttle da yaw, sandar dama pitch da roll."]],
          slides: [
            { title: "Sandunan Mode 2", bullets: ["Sandar hagu: sama/ƙasa (throttle), juyawa (yaw)", "Sandar dama: gaba/baya (pitch), gefe (roll)", "Ku duba tsarinku a cikin manhajar"] },
            { title: "Hannaye masu laushi", bullets: ["Ƙananan motsi masu laushi", "Ku bar sanduna su koma tsakiya", "Yawancin drone sai su tsaya a wurinsu"] },
            { title: "Allon tuƙi", bullets: ["Batir, sigina, tauraron ɗan adam na GPS", "Tsayi, nisa daga gida, hoton kyamara", "Ku kalla da sauri, sannan ku koma kallon drone"] },
            { title: "Ku san maɓallanku", bullets: ["Komawa gida (return-to-home)", "Tsayawa ko birki", "Ku nemo su ba tare da kun duba ba"] }
          ],
          tryIt: "Ku saka simulator na drone a kwamfuta ko waya (ku nemi \"drone flight simulator\" a shagon manhajoji ko a kwamfutarku; wasu kamfanonin drone suna da shi a cikin manhajarsu). Ku nemo saitin tsarin sanduna, ku zaɓi Mode 2, sannan ku motsa kowace sanda a hankali don ganin abin da take yi.",
          youCanNow: "faɗin abin da kowace sanda take yi a Mode 2, karanta allon tuƙi, da nemo maɓallan gaggawa.",
          quickCheck: [
            { objective: "O1", q: "Mene ne pitch?", options: ["Juyawa a wuri ɗaya", "Motsa drone gaba da baya", "Hawa sama", "Komawa gida"], answer: 1, why: "Pitch yana motsa drone gaba da baya; a Mode 2 yana kan sandar dama." },
            { objective: "O1", q: "Drone ɗinku yana zamewa zuwa wata bishiya kuma dole ku tsayar da shi da sauri. Me ya kamata ku riga kun sani?", options: ["Farashin drone", "Lambar wayar manomin", "Yadda ake canja launin kyamara", "Inda maɓallin tsayawa ko birki yake, ba tare da kun duba ba"], answer: 3, why: "Matuƙa suna koyon inda maɓallan tsayawa ko birki da komawa gida suke don su iya aiki ba tare da sun duba ba." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Atisaye a cikin simulator",
          minutes: 6,
          goal: "Tuƙa atisaye biyar na yau da kullum a hankali a cikin simulator.",
          text: [
            "Ƙwararrun matuƙa suna gina ƙwarewa da atisaye iri ɗaya, sau da yawa. Ku yi kowane atisaye har ku iya tuƙa shi a hankali sau uku a jere, sannan ku ci gaba. Gajerun zama na minti 15 zuwa 20 kowace rana sun fi zama ɗaya mai tsawo a mako.",
            "Atisaye na 1, tsayawa a sama (hover): ku tashi zuwa tsayin idanu ku riƙe drone ba motsi na minti ɗaya. Atisaye na 2, akwati (box): ku tuƙa murabba'i gaban drone yana fuskantar gaba koyaushe, sannan ku sake yi gaban yana juyawa a kowane kusurwa. Atisaye na 3, siffar takwas: ku tuƙa siffar 8 mai laushi. Atisaye na 4, kewaya wuri (orbit): ku zagaya wani wuri (kamar bishiya) kuna riƙe kyamara a kansa. Atisaye na 5, injin yanka ciyawa (lawnmower): ku tuƙa layuka madaidaita masu layi ɗaya a fadin gona, kamar tuƙin yin taswira, da hannu.",
            "Ku kuma yi atisaye drone yana fuskantar ku (nose-in), inda hagu da dama suke kamar sun juye. Nan ne yawancin masu farawa ke faɗuwa. Bayan kowane zama, ku rubuta abin da ya tafi daidai da abin da za ku inganta."
          ],
          steps: ["Ku tsaya a sama a tsayin idanu na minti ɗaya.", "Akwati: gaba yana fuskantar gaba, sannan gaba yana juyawa a kusurwoyi.", "Siffar takwas, mai laushi kuma a mataki ɗaya.", "Ku kewaya bishiya kyamara tana kanta.", "Layukan injin yanka ciyawa a fadin gona.", "Ku maimaita kowanne drone yana fuskantar ku (nose-in)."],
          words: [["Atisaye (drill)", "gajeren aikin da ake maimaitawa don gina ƙwarewa."], ["Nose-in", "tuƙi gaban drone yana fuskantar ku, don haka sarrafawa tana kama da ta juye."], ["Kewaya wuri (orbit)", "tuƙi a zagaye kewaye da wani wuri."]],
          slides: [
            { title: "Yadda ake yin atisaye", bullets: ["Atisaye iri ɗaya, sau da yawa", "Sau uku a hankali a jere, sannan ku ci gaba", "Minti 15-20 kowace rana ya fi zama ɗaya mai tsawo"] },
            { title: "Atisaye biyar", bullets: ["1 Tsayawa a sama  2 Akwati  3 Siffar takwas", "4 Kewaya bishiya  5 Layukan injin yanka ciyawa"] },
            { title: "Mai wuya: nose-in", bullets: ["Hagu da dama suna kama da sun juye", "Nan ne yawancin masu farawa ke faɗuwa", "Ku yi kowane atisaye nose-in ma"] }
          ],
          tryIt: "A cikin simulator ɗinku, ku tuƙa atisaye na 1 da na 2 yau. Ku rubuta a littafi: rana, minti nawa, waɗanne atisaye, sau nawa aka yi a hankali, abu ɗaya da za ku inganta.",
          youCanNow: "yin atisaye biyar na yau da kullum a simulator da bin diddigin ci gabanku.",
          quickCheck: [
            { objective: "O2", q: "Mene ne atisayen akwati (box)?", options: ["Tuƙa murabba'i, da farko gaba yana fuskantar gaba, sannan yana juyawa a kowane kusurwa", "Tsayawa a sama a wuri ɗaya", "Zagaya bishiya", "Tuƙa siffar takwas"], answer: 0, why: "Atisayen akwati yana tuƙa murabba'i gaba yana fuskantar gaba, sannan gaba yana juyawa a kowane kusurwa." },
            { objective: "O2", q: "Kun tuƙa atisayen tsayawa a sama a hankali sau ɗaya. Me za ku yi a gaba?", options: ["Ku koma tuƙi na gaske nan take", "Ku daina atisayen tsayawa a sama har abada", "Ku ci gaba da atisaye har ya yi laushi sau uku a jere, sannan ku ci gaba", "Ku tsallaka zuwa atisaye mafi wuya"], answer: 2, why: "Ku yi kowane atisaye har ku iya tuƙa shi a hankali sau uku a jere." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Yanayin tuƙi da lokacin amfani da su",
          minutes: 5,
          goal: "Bayyana manyan yanayin tuƙi, ku canja lafiya idan GPS tana da rauni.",
          text: [
            "Yawancin drone masu kyamara suna tuƙawa a yanayin positioning ko GPS. Drone yana amfani da tauraron ɗan adam da na'urori masu ji (sensors) don tsayawa a wurinsa idan kun saki sandunan, wanda ke sauƙaƙa tuƙi kuma yana ba da damar komawa gida da yin taswira ta atomatik.",
            "Wasu drone kuma suna da yanayin attitude (wasu kamfanoni suna kiransa ATTI). Drone yana riƙe tsayinsa amma ba wurinsa ba, don haka yana zamewa da iska kamar jirgin ruwa a kogi. Drone yana iya komawa wannan yanayi da kansa idan GPS tana da rauni, misali kusa da dogayen gine-gine na ƙarfe, ƙarƙashin bishiyoyi masu kauri, ko a cikin kwari mai zurfi. Matuƙan da suka yi atisaye da shi suna natsuwa; waɗanda ba su yi ba sau da yawa suna faɗuwa.",
            "Sauran yanayi sun haɗa da sport (gudu fiye da haka, ƙarancin kariya), tripod ko cine (a hankali da laushi don ɗaukar bidiyo), da ayyuka na atomatik. Yawancin simulator suna barin ku tuƙa ba tare da taimakon GPS ba. Ku yi atisaye da shi don kada zamewa ta ba ku mamaki."
          ],
          words: [["Yanayin GPS", "yanayin tuƙi inda drone ke amfani da tauraron ɗan adam don tsayawa a wurinsa."], ["Yanayin attitude (ATTI)", "yanayin da drone ke riƙe tsayi amma yana zamewa da iska."], ["Zamewa (drift)", "drone yana tafiya da kansa, yawanci da iska."]],
          slides: [
            { title: "Yanayin GPS / positioning", bullets: ["Yana tsayawa a wurinsa idan kun saki sanduna", "Yana ba da damar komawa gida da yin taswira", "Yanayin da aka saba don aikin gona"] },
            { title: "Yanayin attitude (ATTI)", bullets: ["Yana riƙe tsayi, ba wuri ba", "Yana zamewa da iska", "Yana iya kunnuwa da kansa idan GPS tana da rauni"] },
            { title: "Sauran yanayi", bullets: ["Sport: gudu, ƙarancin kariya", "Tripod / cine: a hankali da laushi", "Ku yi atisayen tuƙi ba tare da taimakon GPS ba"] }
          ],
          tryIt: "A cikin simulator ɗinku, ku kashe taimakon GPS ko ku zaɓi yanayin attitude, ku ƙara ɗan iska, sannan ku riƙe drone a sama na daƙiƙa 30 ta hanyar gyara zamewa. Sannan ku tuƙa atisayen akwati a wannan yanayi.",
          youCanNow: "bayyana manyan yanayin tuƙi da riƙe iko idan drone yana zamewa ba tare da GPS ba.",
          quickCheck: [
            { objective: "O3", q: "Me yanayin tripod ko cine yake yi?", options: ["Yana tuƙawa da iyakar gudu", "Yana kashe injuna", "Yana yin taswira ta atomatik", "Yana tuƙawa a hankali da laushi don ɗaukar bidiyo"], answer: 3, why: "Yanayin tripod ko cine yana tafiya a hankali da laushi, don ɗaukar bidiyo." },
            { objective: "O3", q: "Za ku yi taswirar gona kusa da dogon rumbun hatsi na ƙarfe. Me za ku shirya wa?", options: ["Babu komai; GPS koyaushe tana aiki", "Drone ya koma yanayin attitude yana zamewa, don haka ku yi atisayen tuƙi ba tare da taimakon GPS ba", "Tuƙawa a yanayin sport", "Tuƙawa nose-in kawai"], answer: 1, why: "Kusa da dogayen gine-gine na ƙarfe GPS tana iya yin rauni, kuma drone yana iya zamewa a yanayin attitude." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Koyon tuƙi",
        questions: [
          { objective: "O1", q: "A Mode 2, me tura sandar hagu sama yake yi?", options: ["Yana tafiya gaba", "Yana juyawa dama", "Yana hawa sama", "Yana tafiya gefe"], answer: 2, why: "Sandar hagu tana sarrafa throttle (tsayi) da yaw a Mode 2." },
          { objective: "O1", q: "Mene ne yaw?", options: ["Juya drone hagu ko dama a wuri ɗaya", "Hawa sama", "Sauka", "Ɗaukar hoto"], answer: 0, why: "Yaw yana juya drone a kan tsakiyarsa." },
          { objective: "O2", q: "Wane tsarin atisaye ne ya fi gina ƙwarewa?", options: ["Zama ɗaya na awa uku a wata", "Gajerun zama na kowace rana na atisaye iri ɗaya", "Kallon bidiyo kawai", "Tuƙa drone na gaske ba tare da horo ba"], answer: 1, why: "Maimaitawa gajeriya ta yau da kullum tana gina sarrafawa mai laushi." },
          { objective: "O2", q: "Me yasa za ku yi atisayen tuƙi nose-in?", options: ["Ya fi sauri", "Yana adana batir", "Simulator suna buƙatar sa", "Sarrafawa tana kama da ta juye, kuma masu farawa da yawa suna faɗuwa a nan"], answer: 3, why: "Yin atisaye da shi yana sa jin juyewar ya zama sananne." },
          { objective: "O3", q: "A yanayin attitude (ATTI) drone:", options: ["Yana riƙe tsayi amma yana zamewa da iska", "Yana sauka ta atomatik", "Yana tsayawa a wurinsa daidai", "Ba ya iya motsi"], answer: 0, why: "Ba tare da tsayawa ta GPS ba, yana riƙe tsayi amma ba wuri ba." }
        ]
      }
    },
    {
      name: "Babi na 2: Zama matuƙi mai lasisi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Atisayen gaggawa: yankewar sigina, ƙarewar batir, ɓacewar GPS",
          minutes: 6,
          goal: "Bi matakan da suka dace a cikin matsalolin gaggawa guda uku da aka saba gani.",
          text: [
            "Gaggawa ba ta yawan faruwa, amma tana zuwa da sauri. Matuƙa suna magance ta da kyau domin sun yi atisayen matakan har sun zama kamar al'ada. Kafin kowane tuƙi na gaske, ku duba cewa tsayin komawa gida da abin da drone zai yi idan sigina ta yanke an saita su daidai.",
            "Yankewar sigina (lost link, na'urar sarrafawa ta rasa sigina): ku natsu, ku nuna eriyar na'urar sarrafawa zuwa drone, ku koma wuri mai tsayi idan babu haɗari. Yawancin drone suna fara komawa gida bayan 'yan daƙiƙoƙi; ku kalli sama ku kasance a shirye don karɓar iko idan sigina ta dawo. Ƙarewar batir: ku dakatar da aikin ku tuƙa zuwa gida kai tsaye, ko ku sauka a wuri mafi kusa da babu haɗari; kada ku taɓa ƙoƙarin kammala ƙarin layi ɗaya.",
            "Ɓacewar GPS ko zamewa kwatsam: ku sauya tunaninku zuwa tuƙin attitude, ku riƙe drone a ganinku, ku tuƙa shi a hankali ya dawo gare ku kuna fuskantar iska, sannan ku sauka da zarar babu haɗari. Bayan kowace gaggawa ko faɗuwa, ku tabbatar wurin ba shi da haɗari, ku duba ɓarna, ku rubuta shi a littafin bayanan tuƙi, kuma ku kai rahoto ga hukuma idan ƙa'idojinku suna buƙata."
          ],
          steps: ["Yankewar sigina: ku natsu, ku nuna eriya, ku koma sama idan babu haɗari, ku jira komawa gida.", "Ƙarewar batir: ku dakatar da aikin, ku tuƙa gida ko ku sauka a wuri mafi kusa da babu haɗari.", "Ɓacewar GPS: ku tuƙa a hankali da hannu, kuna fuskantar iska, ku sauka da wuri.", "Bayan kowane abin da ya faru: ku tabbatar da tsaro, ku duba ɓarna, ku rubuta, ku kai rahoto idan ana buƙata."],
          words: [["Yankewar sigina (lost link)", "lokacin da drone da na'urar sarrafawa suka rasa haɗin rediyonsu."], ["Fly-away (tserewar drone)", "lokacin da drone ya tashi ya tafi ba tare da ikon matuƙi ba."], ["Abin da ya faru (incident)", "abin da ba a shirya ba wanda ya jawo, ko zai iya jawo, cutarwa ko ɓarna."]],
          slides: [
            { title: "Ku yi atisaye har ya zama al'ada", bullets: ["Gaggawa ba ta yawa, amma tana da sauri", "Ku fara duba tsayin RTH da abin da zai yi idan sigina ta yanke"] },
            { title: "Yankewar sigina", bullets: ["Ku natsu, ku nuna eriyar", "Ku koma sama idan babu haɗari", "Ku jira komawa gida"] },
            { title: "Ƙarewar batir da ɓacewar GPS", bullets: ["Ƙarewar batir: ku tsaya, ku koma gida ko ku sauka yanzu", "Ɓacewar GPS: ku tuƙa da hannu, kuna fuskantar iska, ku sauka da wuri"] },
            { title: "Bayan kowane abin da ya faru", bullets: ["Ku tabbatar wurin ba shi da haɗari", "Ku duba ɓarna, ku rubuta", "Ku kai rahoto idan ƙa'idojinku suna buƙata"] }
          ],
          sources: [NCAA_P21, KCAA_UAS],
          tryIt: "A cikin simulator ɗinku, ku yi atisayen kowace gaggawa: ku saita gargaɗin ƙarewar batir ku tuƙa gida, ku kashe GPS a tsakiyar tuƙi ku sauka da hannu, kuma (idan simulator ɗin ya bari) ku jawo yankewar sigina ku kalli komawa gida. Bayan haka, ku rubuta matakan daga ƙwaƙwalwarku.",
          youCanNow: "bin matakan da suka dace don yankewar sigina, ƙarewar batir da ɓacewar GPS.",
          quickCheck: [
            { objective: "O4", q: "Kafin kowane tuƙi na gaske, me za ku duba don shirya wa yankewar sigina?", options: ["Saitin launin kyamara", "Adireshin manomin", "Cewa tsayin komawa gida da abin da zai yi idan sigina ta yanke an saita su daidai", "Shafin ƙarshe na littafin bayanan tuƙi"], answer: 2, why: "Tsayin komawa gida da saitin yankewar sigina daidai suna bar drone ya dawo gida lafiya idan sigina ta yanke." },
            { objective: "O4", q: "Bayan saukar ƙarfi da drone na gaske, yana kama da babu matsala. Me za ku yi?", options: ["Ku duba shi don ɓarna ku rubuta a littafin bayanan tuƙi", "Ku sake tuƙa nan take ba tare da dubawa ba", "Ku manta da shi", "Ku ɓoye shi daga malaminku"], answer: 0, why: "Bayan kowace gaggawa ko faɗuwa, ku duba ɓarna ku rubuta; ku kai rahoto idan ƙa'idojin suna buƙata." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ajiye littafin bayanan tuƙi",
          minutes: 4,
          goal: "Rubuta kowane tuƙi na simulator da na gaske a littafin bayanan tuƙi.",
          text: [
            "Littafin bayanan tuƙi (log book) shi ne tarihin tuƙinku. Cibiyoyin horo da hukumomin sufurin jiragen sama suna amfani da bayanan tuƙi don duba ƙwarewa, kuma masu ɗaukar aiki da abokan ciniki suna amincewa da matuƙan da ke ajiye su. Ku raba lokacin simulator da lokacin tuƙi na gaske a ginshiƙai daban-daban.",
            "Don kowane zama ku rubuta: rana, wuri (ko simulator), sunan drone ko simulator, jimillar minti, irin tuƙi (atisaye, taswira, dubawa), yanayi (iska, haske), duk wata matsala ko abin da ya faru, da abin da kuka koya. Don tuƙi na gaske, ku kuma rubuta lambar rajistar drone da duk wani izini da aka yi amfani da shi.",
            "Ku yi amfani da littafin takarda, spreadsheet (tebur na kwamfuta) ko manhajar rubuta bayanan tuƙi, amma ku cika shi kowane lokaci kuma ku ajiye kwafinsa. Ku tambayi cibiyar horonku wane tsari take karɓa don neman lasisi."
          ],
          steps: ["Ku zaɓi takarda, spreadsheet ko manhaja, ku ajiye kwafi.", "Ginshiƙai daban don tuƙin simulator da na gaske.", "Ku rubuta rana, wuri, jirgi, minti, irin tuƙi, yanayi, matsaloli, darussa.", "Don tuƙi na gaske, ku ƙara lambar rajista da izinin da aka yi amfani da shi.", "Ku tambayi cibiyar horonku wane tsari take karɓa."],
          words: [["Littafin bayanan tuƙi (log book)", "rubutun kowane tuƙi da matuƙi ya yi."], ["Lokacin tuƙi (flight time)", "minti ko awoyin da matuƙi ya yi yana tuƙi."]],
          slides: [
            { title: "Me yasa za a ajiye bayanai", bullets: ["Yana tabbatar da ƙwarewarku", "Cibiyoyin horo da hukumomi suna amfani da shi", "Yana gina amincewa da abokan ciniki"] },
            { title: "Abin da za a rubuta", bullets: ["Rana, wuri, drone ko simulator", "Minti, irin tuƙi, yanayi", "Matsaloli, abubuwan da suka faru, darussa"] },
            { title: "Ku ajiye shi da kyau", bullets: ["Kowane zama, da kwafi", "Lokacin simulator da na gaske daban", "Ku yi amfani da tsarin da malaminku ke karɓa"] }
          ],
          tryIt: "Ku fara littafin bayanan tuƙinku yanzu a matsayin spreadsheet mai ginshiƙan wannan darasi, sannan ku shigar da kowane zaman simulator da kuka yi a wannan kwas zuwa yanzu.",
          youCanNow: "ajiye cikakken littafin bayanan tuƙi don tuƙin simulator da na gaske.",
          quickCheck: [
            { objective: "O2", q: "Me yasa cibiyoyin horo da hukumomi suke duba bayanan tuƙi?", options: ["Don saita farashin drone", "Don duba ƙwarewar matuƙi", "Don zaɓar yanayin sararin sama", "Don canja tsarin sanduna"], answer: 1, why: "Bayanan tuƙi suna nuna ƙwarewar matuƙi ga makarantu, hukumomi, masu ɗaukar aiki da abokan ciniki." },
            { objective: "O2", q: "Yau kun tuƙa drone na gaske da izini. Me za ku ƙara a rubutun?", options: ["Babu komai fiye da rana", "Yanayin sararin sama na mako mai zuwa", "Bayanan bankinku", "Lambar rajistar drone da izinin da aka yi amfani da shi"], answer: 3, why: "Don tuƙi na gaske, ku kuma rubuta lambar rajistar drone da duk wani izini da aka yi amfani da shi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Hanyarku zuwa lasisin matuƙin drone",
          minutes: 6,
          goal: "Rubuta tsarin kanku don samun lasisin matuƙin drone a ƙasarku.",
          text: [
            "Kowace ƙasa tana yanke yadda ake ba matuƙan drone lasisi. A Kenya, KCAA tana amincewa da Cibiyoyin Horar da Matuƙan Jiragen Sama Marasa Matuƙi (UTO) kuma tana jera su a shafinta; jadawalin kuɗaɗenta ya haɗa da lasisin ɗalibin matuƙin drone, lasisin matuƙin drone (RPL) da ƙarin cancanta (ratings) kamar tuƙi fiye da inda ido ke gani. Ana neman su ta tsarin intanet na KCAA don drone. A Najeriya, Sashe na 21 (Part 21) na NCAA ya bayyana lasisin matuƙin drone da sauran buƙatun RPAS. Sauran ƙasashe suna da nasu ƙa'idojin.",
            "Hanyar da aka saba: ku zaɓi cibiyar horo da aka amince da ita; ku karanta ilimin ka'ida (dokar sufurin sama, sararin sama da taswirori, yanayi, jirgin kansa, halayen ɗan adam, matakan gaggawa); ku ɗauki darussan tuƙi da jarabawar aiki; ku cika buƙatun hukumar; ku nemi lasisin; kuma ku riƙe shi da inganci ta sabunta shi kamar yadda ake buƙata.",
            "Ku tabbatar da kowane mataki, takarda da kuɗi a shafukan hukuma na hukumar ko ta kiran ta, kuma ku duba cewa makaranta tana cikin jerin waɗanda hukumar ta amince da su kafin ku biya. Bayanan simulator ɗinku suna nuna cewa kuna shirye ku koyi da sauri, amma ba sa maye gurbin horon da aka amince da shi."
          ],
          steps: ["Ku nemo shafukan drone na hukumar sufurin jiragen sama ta ƙasarku.", "Ku nemo jerin cibiyoyin horo da ta amince da su; ku zaɓi biyu don tuntuɓa.", "Ku tambayi kowacce: tsawon kwas, abin da ake koya a ka'ida da aiki, kuɗi, jarabawa, takardun da ake buƙata.", "Ku duba kuɗin lasisi a jadawalin kuɗaɗe na hukuma.", "Ku rubuta ranakun da kuke son cimmawa don horo, jarabawa da neman lasisi."],
          words: [["Cibiyar horo da aka amince da ita", "makarantar drone da hukumar sufurin jiragen sama ta amince da ita don horar da matuƙa don lasisi (KCAA tana kiransu UTO)."], ["Cancanta (rating)", "ƙarin izini a kan lasisi don wani irin tuƙi, kamar tuƙi fiye da inda ido ke gani."], ["Dokar sufurin sama (air law)", "ƙa'idoji game da tuƙi da sararin sama."]],
          slides: [
            { title: "Kowace ƙasa tana ba matuƙanta lasisi", bullets: ["Kenya: KCAA tana amincewa da UTO; RPL ta tsarin intanet", "Najeriya: Sashe na 21 na NCAA ya shafi lasisin matuƙin drone", "Sauran: hukumarsu ta kansu"] },
            { title: "Hanyar da aka saba", bullets: ["Makarantar da aka amince da ita", "Ka'ida: dokar sufurin sama, sararin sama, yanayi, jirgi", "Horon aiki da jarabawa", "Ku nema, sannan ku sabunta"] },
            { title: "Ku duba kafin ku biya", bullets: ["Makarantar tana cikin jerin da hukuma ta amince da su?", "Kuɗaɗe daga jadawalin hukuma", "Lokacin simulator yana taimakawa, amma ba lasisi ba ne"] }
          ],
          sources: [KCAA_UTO, KCAA_PORTAL, KCAA_UAS, NCAA_P21],
          tryIt: "Aikin ƙarshe: ku kammala atisaye biyar da atisayen gaggawa uku a simulator ɗinku, ku rubuta kowane zama a littafin bayanan tuƙinku, sannan ku rubuta tsarin lasisinku a shafi ɗaya: hukuma, makarantun da aka amince da su da kuka samo, lasisin da ake buƙata, matakai, takardu, kuɗi daga majiyoyin hukuma, da ranakun da kuke son cimmawa.",
          youCanNow: "tuƙa atisaye na yau da kullum da matakan gaggawa a simulator, ajiye littafin bayanan tuƙi, da bin tsari mai sarari zuwa lasisin matuƙin drone na hukuma.",
          quickCheck: [
            { objective: "O5", q: "Wanne ne matakin da aka saba a hanyar samun lasisin matuƙin drone?", options: ["Horo a cibiyar da aka amince da ita, sannan jarabawar aiki", "Sayen drone mafi girma", "Kammala kwas na intanet kawai", "Fara tuƙa wa abokin ciniki"], answer: 0, why: "Hanyar da aka saba ita ce horon da aka amince da shi, ka'ida, darussan tuƙi da jarabawa, sannan neman lasisi." },
            { objective: "O5", q: "Wani shafin intanet yana bayar da lasisin matuƙin drone ta intanet cikin rana ɗaya ba tare da jarabawa ba, idan an biya. Me za ku yi?", options: ["Ku biya da sauri kafin tayin ya ƙare", "Ku biya rabi yanzu", "Ku duba shafukan hukuma na hukumar da jerin da ta amince da su kafin ku biya komai", "Ku raba shi ga abokai"], answer: 2, why: "Lasisi yana fitowa daga hukumar sufurin jiragen sama; ku duba cewa makaranta tana cikin jerin da ta amince da su kafin ku biya." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Zama matuƙi mai lasisi",
        questions: [
          { objective: "O4", q: "Na'urar sarrafawa ta rasa sigina da drone. Mataki na farko mai kyau shi ne:", options: ["Kashe na'urar sarrafawa", "Gudu bin drone", "Natsuwa, nuna eriya zuwa drone da jiran komawa gida", "Kashe injunan drone"], answer: 2, why: "Yawancin drone suna komawa gida bayan yankewar sigina; gyara inda eriya ke nunawa yana iya dawo da ita." },
          { objective: "O4", q: "Gargaɗin ƙarewar batir ya yi ƙara saura layin taswira ɗaya. Ya kamata ku:", options: ["Tuƙa layin ƙarshe da sauri", "Dakatar da aikin ku tuƙa gida ko ku sauka lafiya", "Hawa sama fiye da haka", "Kau da kai"], answer: 1, why: "Kada ku taɓa matsa wa batir mai ƙarewa; ku sauka lafiya ku kammala daga baya." },
          { objective: "O2", q: "Me ya kamata littafin bayanan tuƙi ya rubuta?", options: ["Rana, wuri, jirgi, minti, irin tuƙi, yanayi, matsaloli, darussa", "Faɗuwa kawai", "Farashin drone kawai", "Babu komai; ba dole ba ne"], answer: 0, why: "Cikakken bayani yana tabbatar da ƙwarewa kuma yana nuna yadda abubuwa ke maimaituwa." },
          { objective: "O5", q: "Shin kammala wannan kwas na intanet yana ba ku lasisi?", options: ["Ee, nan take", "Ee, bayan jarabawar", "A Najeriya kawai", "A'a; lasisi yana fitowa daga hukumar sufurin jiragen sama bayan horon da aka amince da shi da jarabawa"], answer: 3, why: "Hukumar ƙasa ce kaɗai ke ba da lasisin matuƙin drone." },
          { objective: "O5", q: "Kafin ku biya makarantar drone, ya kamata ku:", options: ["Duba cewa tana cikin jerin da hukumar sufurin jiragen sama ta amince da su", "Amince da tallarta", "Tambayi aboki kawai", "Biya da tsabar kuɗi don adana lokaci"], answer: 0, why: "Horon da aka amince da shi ne kaɗai ake ƙirgawa don lasisi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Drone don Sa Ido a Gona 6: Kwas na Intanet kan Tuƙa Drone",
    questions: [
      { objective: "O1", q: "A Mode 2, sandar dama tana sarrafa:", options: ["Tsayi da juyawa", "Gaba/baya da gefe", "Zuƙowar kyamara", "Komawa gida"], answer: 1, why: "Sandar dama tana sarrafa pitch da roll a Mode 2." },
      { objective: "O1", q: "Throttle yana sarrafa:", options: ["Juyawa", "Motsi gefe", "Hawa da sauka", "Kyamara"], answer: 2, why: "Throttle yana motsa drone sama da ƙasa." },
      { objective: "O1", q: "Tuƙi mai laushi yana fitowa daga:", options: ["Ƙananan motsin sanduna masu laushi", "Tura sanduna har ƙarshe kowane lokaci", "Tuƙi da gudu", "Tuƙi da dare"], answer: 0, why: "Motsi masu laushi suna kawo tuƙi mai laushi da ake sarrafawa." },
      { objective: "O1", q: "Wanne BA ya kasancewa a allon tuƙi a yawancin lokaci?", options: ["Yawan batir", "Tauraron ɗan adam na GPS", "Tsayi", "Kuɗin manomi a banki"], answer: 3, why: "Allon yana nuna bayanan tuƙi, ba kuɗin mutum ba." },
      { objective: "O2", q: "Me yasa za a fara atisaye a simulator?", options: ["Doka ce a ko'ina", "Kuskure ba ya jawo asara kuma ba ya karya doka", "Yana ba ku lasisi", "Drone na gaske ba sa iya tsayawa a sama"], answer: 1, why: "Simulator yana bar ku koyo lafiya kafin tuƙi na gaske." },
      { objective: "O2", q: "Yaya tsawon zaman atisaye mai kyau na kowace rana?", options: ["Kusan minti 15 zuwa 20", "Awa biyar", "Minti ɗaya", "Sau ɗaya a shekara kawai"], answer: 0, why: "Gajerun zama na yau da kullum suna gina ƙwarewa mafi kyau." },
      { objective: "O2", q: "Atisayen injin yanka ciyawa (lawnmower) yana koyar da:", options: ["Yanka ciyawa", "Sauka", "Layuka madaidaita masu layi ɗaya kamar tuƙin yin taswira", "Ɗaukar hoton kai (selfie)"], answer: 2, why: "Yana gina sarrafawar da ake amfani da ita a tsarin yin taswira." },
      { objective: "O2", q: "Atisayen kewaya wuri (orbit) yana nufin:", options: ["Tuƙi kai tsaye sama", "Tsayawa a sama", "Sauka a kan bishiya", "Zagaya wani wuri kyamara tana kansa"], answer: 3, why: "Kewaya wuri yana riƙe kyamara a kan abin da ake kallo yayin zagayawa." },
      { objective: "O2", q: "Idan kuna tuƙi nose-in, sarrafawa tana kama da:", options: ["Hagu da dama sun juye", "Iri ɗaya daidai", "Ta yi jinkiri", "An kulle ta"], answer: 0, why: "Drone yana fuskantar ku, don haka hagu da dama sun canja daga inda kuke kallo." },
      { objective: "O3", q: "A yanayin GPS, idan kun saki sandunan, drone:", options: ["Yana faɗuwa", "Yana tsayawa a wurinsa", "Yana tafiya gida", "Yana juyawa"], answer: 1, why: "Tsayawa ta tauraron ɗan adam tana riƙe drone a wurinsa." },
      { objective: "O3", q: "Drone yana iya komawa yanayin attitude idan:", options: ["Batir ya cika", "Sararin sama ya yi haske", "GPS tana da rauni, misali ƙarƙashin bishiyoyi masu kauri ko kusa da gine-gine na ƙarfe", "Kun ɗauki hoto"], answer: 2, why: "Raunin siginar tauraron ɗan adam yana cire tsayawa a wuri." },
      { objective: "O3", q: "A yanayin attitude cikin iska, drone zai:", options: ["Tsaya ba motsi daidai", "Sauka da kansa", "Ci gaba da hawa har abada", "Zame da iska"], answer: 3, why: "Yana riƙe tsayi amma ba wuri ba." },
      { objective: "O3", q: "Yanayin sport yawanci yana nufin:", options: ["Tuƙi da gudu fiye da haka da ƙarancin kariya", "Ɗaukar bidiyo a hankali da laushi", "Sauka ta atomatik", "Babu kyamara"], answer: 0, why: "Yanayin sport yana musanya abubuwan kariya da gudu." },
      { objective: "O4", q: "Bayan kowace faɗuwa ko babban abin da ya faru, ya kamata ku:", options: ["Ɓoye shi", "Tabbatar wurin ba shi da haɗari, duba ɓarna, rubuta shi, kuma kai rahoto idan ana buƙata", "Sake tuƙa nan take ba tare da dubawa ba", "Goge bayanan tuƙi"], answer: 1, why: "Tsaro da farko, sannan rubutu da duk wani rahoto da ake buƙata." },
      { objective: "O4", q: "Lokacin ɓacewar GPS, tsari mafi aminci shi ne:", options: ["Tuƙa da nisa fiye da haka", "Hawa sama iyakar yadda za a iya", "Tuƙa shi a hankali da hannu ya dawo kuna fuskantar iska, ku sauka da wuri", "Sakin sanduna ku jira"], answer: 2, why: "Sarrafawa da hannu da saukar wuri suna hana tserewar drone." },
      { objective: "O4", q: "Fly-away (tserewar drone) shi ne:", options: ["Tuƙin yin taswira na yau da kullum", "Wani irin fanka (propeller)", "Wurin sauka", "Drone yana tafiya ba tare da ikon matuƙi ba"], answer: 3, why: "Rasa iko ne, sau da yawa bayan matsalar GPS ko sigina." },
      { objective: "O2", q: "A littafin bayanan tuƙi, lokacin simulator da lokacin tuƙi na gaske ya kamata a:", options: ["Ajiye su a ginshiƙai daban", "Haɗa su tare ba tare da suna ba", "Kada a rubuta su", "Rubuta su kawai idan sun wuce awa ɗaya"], answer: 0, why: "Hukumomi da malamai suna buƙatar ganin kowane iri daban." },
      { objective: "O5", q: "A Kenya, ana kiran makarantun drone da aka amince da su:", options: ["Ƙungiyoyin drone", "Cibiyoyin Horar da Matuƙan Jiragen Sama Marasa Matuƙi (UTO)", "Shagunan magungunan gona (agrovets)", "Asibitocin shuka"], answer: 1, why: "KCAA tana amincewa da UTO kuma tana jera su." },
      { objective: "O5", q: "Wane batu ne ke cikin horon ka'ida na matuƙin drone?", options: ["Girki", "Ƙa'idojin ƙwallon ƙafa", "Dokar sufurin sama, sararin sama da yanayi", "Waƙa"], answer: 2, why: "Dole matuƙa su san dokar sufurin sama, sararin sama, yanayi da jirginsu." },
      { objective: "O5", q: "A ina ya kamata ku duba kuɗin lasisi?", options: ["Wani rubutu a kafofin sada zumunta", "Tallar wani mai sayarwa", "Tunanin wani tsohon aboki", "Jadawalin kuɗaɗe na hukuma na hukumar sufurin jiragen sama"], answer: 3, why: "Kuɗaɗe suna canjawa; jadawalin hukuma ne kaɗai abin dogara." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [0, 1, 4, 8, 9, 11, 13, 14, 16, 17]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku yi atisaye ko ku gyara wannan sashe ku sake dubawa.",
    criteria: [
      {
        name: "Atisaye biyar",
        objective: "O2",
        notYet: "Atisaye ɗaya ko fiye ba su yi laushi sau uku a jere ba tukuna.",
        meets: "An tuƙa tsayawa a sama, akwati, siffar takwas, kewaya wuri da layukan injin yanka ciyawa, kowanne a hankali sau uku a jere.",
        exceeds: "Yana kuma tuƙa akwati da siffar takwas a hankali nose-in."
      },
      {
        name: "Atisayen gaggawa",
        objective: "O4",
        notYet: "Yana firgita ko yana tsallake matakai a atisayen gaggawa.",
        meets: "Yana bin matakan da suka dace don yankewar sigina, ƙarewar batir da ɓacewar GPS.",
        exceeds: "Yana sauka lafiya daga yanayin attitude yana fuskantar iska ba tare da taimako ba."
      },
      {
        name: "Littafin bayanan tuƙi",
        objective: "O2",
        notYet: "Wasu zama ba a rubuta su ba, ko rubuce-rubuce ba su da muhimman bayanai.",
        meets: "An rubuta kowane zama da rana, simulator, minti, irin tuƙi, yanayi, matsaloli da darussa.",
        exceeds: "Lokacin simulator da na gaske suna cikin ginshiƙai daban, kuma an ajiye kwafin bayanan."
      },
      {
        name: "Tsarin lasisi",
        objective: "O5",
        notYet: "Babu hukumar, lasisin ko matakai, ko an yi hasashen kuɗaɗe.",
        meets: "Hukuma, makarantun da aka amince da su da aka samo, lasisin da ake buƙata, matakai, takardu, kuɗi daga majiyoyin hukuma da ranakun da ake son cimmawa.",
        exceeds: "Ya tuntuɓi makaranta da ke cikin jerin da aka amince da su kuma ya rubuta ranar da ya duba."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric",
      "Masu koyo da suka yi rajista da cibiyar horo da aka amince da ita cikin kwanaki 90 (binciken biyo baya)",
      "Masu koyo da suka sami lasisin matuƙin drone cikin shekara ɗaya",
      "Masu koyo da suka ce suna tuƙawa ne kawai da rajista, lasisi da izinin da ƙasarsu ke buƙata"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta ko waya mai simulator na drone kyauta ko mai araha; na'urar sarrafawa idan akwai",
      "Littafin bayanan tuƙi na takarda, spreadsheet ko manhajar rubuta bayanan tuƙi",
      "Intanet don shiga shafukan hukumar sufurin jiragen sama da jerin makarantun da ta amince da su",
      "Kusan minti 60 na darussa, tare da gajerun zaman simulator na minti 15 zuwa 20 kowace rana na tsawon makonni da dama"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku gudanar da atisayen farko a allon da kowa ke gani don masu koyo su ga motsin sanduna.",
      "Ku bayyana a sarari cewa kwas ɗin ba ya ba da lasisi ko izinin tuƙa drone na gaske.",
      "Ku riƙa yin gajerun zaman duba atisaye inda masu koyo za su nuna kowane atisaye sau uku a jere.",
      "Ku duba jerin cibiyoyin horo da aka amince da su tare da masu koyo, ku gargaɗe su kada su biya makarantun da ba su cikin jerin.",
      "Ku ba da maki ga atisaye, littafin bayanan tuƙi da tsarin lasisi da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};

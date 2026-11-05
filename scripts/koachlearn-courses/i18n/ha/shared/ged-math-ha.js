"use strict";

// Koach Learn course, Hausa (ha) translation of shared/ged-math.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// US course: GED, HiSET, ged.com and the TI-30XS keep their names. Numbers and math expressions stay exactly as in the English.

const GED_SUBJECTS = { name: "GED Testing Service: Darussan jarabawa (Lissafi)", url: "https://www.ged.com/about-test/test-subjects.html" };
const GED_MATH = { name: "GED Testing Service: Jarabawar lissafi, takardar dabarbaru da misalin tambaya", url: "https://ged.com/about_test/test_subjects/math/" };
const GED_PRACTICE = { name: "GED Testing Service: Jarabawowin misali kyauta da GED Ready", url: "https://www.ged.com/practice-test/" };
const GED_CALC = { name: "GED Testing Service: Takardar bayanin na'urar lissafi TI-30XS (PDF)", url: "https://www.ged.com/wp-content/uploads/calculator_sheet.pdf" };
const HISET = { name: "HiSET: jarabawar daidai da sakandare", url: "https://hiset.org/" };

module.exports = {
  id: "ged-math-ha",
  lang: "ha",
  translationOf: "ged-math",
  category: "Workforce Development",
  name: "Shirin Jarabawar GED: Lissafi",
  skills: "Sanin jarabawar lissafi ta GED da yin tsarin karatu, Lissafin lambobi ba tare da na'urar lissafi ba, Rabo, kaso da bayanai, Warware daidaito da rashin daidaito, Siffofi (geometry) da takardar dabarbaru, Gangara, zane-zanen jadawali da function",
  outcome: "warware manyan nau'o'in tambayoyin lissafi na GED (lissafin lambobi, kaso da bayanai, daidaito, siffofi da takardar dabarbaru, da zane-zanen jadawali), da bin tsarin karatu da jarabawa mai ranaku da zai shirya ku don rubuta jarabawar lissafi ta GED.",
  about: [
    "Wannan kwas ɗin na manya ne da ke neman takardar shaidar da ta yi daidai da kammala sakandare (high school): matasa, masu dawowa gida daga gidan yari, baƙi 'yan ci-rani, tsofaffin sojoji da duk wanda ke komawa karatu. Takardar shaida tana buɗe ƙofofin aiki, horon sana'a da jami'a.",
    "Jarabawar GED tana da darussa huɗu, kuma Lissafi (wanda ake kira Mathematical Reasoning) ɗaya ne daga cikinsu. GED Testing Service ce ke ba da ita, a kwamfuta. Jarabawar lissafi ta ƙunshi Lissafi na Asali, Siffofi (Geometry), Aljabara na Asali (Algebra), da Zane-zanen Jadawali da Function. Ana ba ku takardar dabarbaru (formula sheet), don haka ba sai kun haddace dabarbaru ba. Wasu jihohi suna amfani da jarabawar HiSET maimakon GED, ko tare da ita; ofishin ilimin manya na jiharku ko ged.com zai faɗa muku wacce.",
    "Za ku koyi yadda jarabawar lissafi take aiki, sannan ku yi atisayen kowane nau'in tambaya da misalan da aka warware da tambayoyin atisaye masu bayanin amsa. Za ku gama da tsarin karatunku da jarabawa mai ranaku.",
    "Wannan kwas ɗin yana shirya ku don jarabawa ne; ba ya ba ku takardar shaidar GED. Sai kun ci jarabawar GED ta hukuma ne kawai. Ku duba ged.com don sabbin dokokin jiharku, kuɗin jarabawa, rubutawa a cibiyar jarabawa ko ta intanet, da jarabawowin atisaye na hukuma. Kowane darasi yana ɗaukar kusan minti shida, da ɗan gwaji bayansa, gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku yi tsarin karatu da jarabawar lissafi ta GED naku: ku yi jarabawar misali ta lissafi ta GED kyauta (GED Math Sample Test) a ged.com ku rubuta sakamakonku; ku jera batutuwa 3 da suka fi muku wuya daga ita da daga gwaje-gwajen wannan kwas; ku rubuta jadawalin karatu na mako-mako mai ranaku na gaske na makonni 6 zuwa 8 masu zuwa (wane batu, wace rana, tsawon lokaci); ku warware tambayoyin atisaye 12 (2 daga kowane darasi) ku bayyana duk wanda kuka yi kuskure; sannan ku rubuta ranakun da kuke shirin yin jarabawar atisaye ta hukuma GED Ready da jarabawar lissafi ta GED, bayan kun duba dokoki da kuɗin jiharku a ged.com.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da matasa da ba su da takardar kammala sakandare: masu dawowa gida daga gidan yari, baƙi 'yan ci-rani, tsofaffin sojoji, iyaye da ma'aikata da ke buƙatar takardar shaida don aiki, ƙarin girma ko jami'a. Da yawa sun bar makaranta shekaru da suka wuce; wasu sun sami mummunan sani game da lissafi.",
    startingPoint: "Suna iya tarawa, ragewa, ninkawa da raba lambobi cikakku, sau da yawa da na'urar lissafi. Da yawa sun manta da ɓangarorin lamba (fractions), lambobi masu korau (negative) da kaso, kuma ba su san aljabara ba ko kaɗan ne. Yawancinsu ba su taɓa ganin tsarin jarabawar GED ko na'urar lissafinta ba.",
    gap: "Jarabawar lissafi ta GED tana neman lissafin lambobi, kaso da bayanai, aljabara, siffofi da takardar dabarbaru, da zane-zanen jadawali, cikin minti 115 a kwamfuta. Masu koyo suna buƙatar sanin tsarin jarabawar, yin atisayen kowane nau'in tambaya da misalan da aka warware, da bin tsarin karatu don su rubuta jarabawa idan sun shirya. Cin jarabawar yana buɗe aiki, horon sana'a da jami'a.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayyana kowace kalmar lissafi",
      "Na'urori: waya ko kwamfuta don jarabawar misali ta GED kyauta; takarda da fensir don atisaye",
      "Na'urar lissafi: atisaye da TI-30XS idan ana iya, ko na'urar lissafi ta kimiyya kyauta ta intanet",
      "Lokaci: darussa na minti 5 zuwa 6, da jadawalin karatu na mako-mako da mai koyo ya tsara",
      "Dokoki, kuɗi da zaɓuɓɓukan jarabawa sun bambanta a kowace jiha kuma suna iya canjawa: koyaushe a nuna ged.com ko ofishin jiha",
      "Tsoron lissafi: misalai masu yawa da aka warware, duba amsoshi, babu matsin lokaci a atisaye"
    ],
    prerequisites: "Tarawa, ragewa, ninkawa da raba lambobi cikakku. Masu koyo da ba su tabbata da ɓangarorin lamba, decimal da kaso ba za su iya fara ɗaukar kwas ɗin \"Everyday Math for Work and Life\" (Lissafin Yau da Kullum don Aiki da Rayuwa)."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Ta amfani da ged.com da jarabawar misali ta lissafi ta GED kyauta", action: "jera fannonin jarabawar lissafi ta GED, lokacinta, dokokin na'urar lissafi da nau'o'in tambayoyi, da rubuta tsarin karatu da jarabawa mai ranaku", standard: "tare da jadawalin mako-mako na makonni 6 zuwa 8 da ranar da kuke son rubuta jarabawa" },
    { id: "O2", condition: "Ba tare da na'urar lissafi ba", action: "warware tambayoyi kan tsarin ayyukan lissafi, ɓangarorin lamba, lambobi masu korau, ma'auni (exponents) da tushen murabba'i (square roots)", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O3", condition: "Idan aka ba ku tambayoyin labari da ƙananan bayanai", action: "warware tambayoyin rabo, daidaiton rabo da kaso, da samun matsakaici (mean), tsakiya (median), mafi yawa (mode) da tazara (range)", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O4", condition: "Idan aka ba ku tambayar labari ko daidaito", action: "rubutawa da warware daidaito da rashin daidaito na layi mai harafi ɗaya", standard: "kuna samun aƙalla 4 cikin 5 daidai kuma kuna duba kowace amsa ta hanyar mayar da ita cikin tambayar" },
    { id: "O5", condition: "Ta amfani da takardar dabarbaru da na'urar lissafi", action: "lissafa kewaye, fili, girman ciki (volume) da gefen da ya ɓace na alwatika mai kusurwa madaidaiciya", standard: "kuna samun aƙalla 4 cikin 5 daidai, da ma'aunan da suka dace" },
    { id: "O6", condition: "Idan aka ba ku zane, tebur, maki biyu ko function", action: "samun gangara, karanta ƙima da lissafa function", standard: "kuna samun aƙalla 4 cikin 5 daidai" }
  ],
  chapters: [
    {
      name: "Babi na 1: Jarabawar, lambobi da bayanai",
      lessons: [
        {
          title: "Jarabawar lissafi ta GED da tsarin karatunku",
          objectives: ["O1"],
          minutes: 6,
          goal: "Jera yadda jarabawar lissafi ta GED take aiki, da fara tsarin karatu mai ranaku.",
          text: [
            "Jarabawar GED tana da darussa huɗu: Lissafi, Harshe (Reasoning Through Language Arts), Kimiyya da Ilimin Zamantakewa (Social Studies). Kuna iya rubuta su ɗaya bayan ɗaya. Ana kiran jarabawar lissafi Mathematical Reasoning. Tana da fannoni huɗu: Lissafi na Asali, Siffofi (Geometry), Aljabara na Asali, da Zane-zanen Jadawali da Function.",
            "A cewar ged.com, jarabawar lissafi minti 115 ce, har da lokacin umarni da sake dubawa. Tana da sassa, da ɗan hutu tsakaninsu. Ana ba da na'urar lissafi a kan allo a sashe na 2; a cibiyar jarabawa kuna iya kawo na'urar lissafinku ta TI-30XS. Wasu tambayoyi dole a yi su ba tare da na'urar lissafi ba, don haka kuna buƙatar lissafin kai da na takarda ma. Ana ba ku takardar dabarbaru da takardar bayanin na'urar lissafi, don haka ba sai kun haddace dabarbaru ba.",
            "Nau'o'in tambayoyi sun haɗa da zaɓi daga amsoshi (multiple choice), ja da ajiye (drag and drop), cike gurbi (fill-in-the-blank), zaɓar wuri (danna kan zane ko hoto) da jerin zaɓi (drop down). Ku duba ged.com kafin jarabawa, domin bayanai suna iya canjawa. A wasu jihohi ana amfani da jarabawar HiSET maimakon GED, ko tare da ita; jihar ce ke yanke shawara.",
            "Ku fara da jarabawar misali ta lissafi ta GED kyauta a ged.com. Tana nuna muku allon da nau'o'in tambayoyi. Ku yi amfani da ita don gano batutuwan da suka fi muku wuya. Idan kun kusa, jarabawar atisaye ta hukuma, GED Ready, tana faɗa muku ko wataƙila kun shirya (ku duba kuɗinta a ged.com). Sannan ku tsara karatu: gajerun zama, kwanaki da yawa a mako, batu ɗaya a lokaci ɗaya."
          ],
          steps: ["Ku je ged.com ku karanta shafin jarabawar lissafi da dokokin jiharku.", "Ku yi jarabawar misali ta lissafi ta GED kyauta ku rubuta sakamakonku.", "Ku jera batutuwan da suka yi muku wuya.", "Ku zaɓi ranaku da lokutan karatu na makonni 6 zuwa 8 masu zuwa, da ranaku na gaske.", "Ku sa batu ɗaya a kowace ranar karatu, kuna farawa da wanda ya fi muku wuya.", "Ku zaɓi ranar yin GED Ready, da ranar da kuke son rubuta ainihin jarabawar."],
          words: [["GED", "jarabawar da ta yi daidai da kammala sakandare daga GED Testing Service; cin darussa huɗu duka yana ba da takardar shaida mai daidai da ta sakandare."], ["HiSET", "wata jarabawar da ta yi daidai da kammala sakandare da ake amfani da ita a wasu jihohi."], ["Takardar dabarbaru (formula sheet)", "takardar dabarbarun lissafi da ake ba ku lokacin jarabawa."], ["TI-30XS", "nau'in na'urar lissafi ta kimiyya da ake amfani da ita a jarabawar lissafi ta GED."], ["GED Ready", "jarabawar atisaye ta hukuma ta GED da ke nuna ko wataƙila kun shirya."], ["Tsarin karatu", "jadawalin da aka rubuta na abin da za ku karanta da lokacin da za ku karanta shi."]],
          slides: [
            { title: "Lissafin GED (Mathematical Reasoning)", bullets: ["Lissafi na Asali, Siffofi, Aljabara na Asali, Zane-zanen Jadawali da Function", "Minti 115, a kwamfuta, da ɗan hutu", "Ana ba da takardar dabarbaru da takardar bayanin na'urar lissafi"] },
            { title: "Na'urar lissafi da nau'o'in tambayoyi", bullets: ["Na'urar lissafi a allo a sashe na 2; ko TI-30XS naku a cibiyar jarabawa", "Wasu tambayoyi ba tare da na'urar lissafi ba", "Zaɓi daga amsoshi, ja da ajiye, cike gurbi, zaɓar wuri, jerin zaɓi"] },
            { title: "Jarabawowin atisaye", bullets: ["Jarabawar misali ta lissafi ta GED kyauta a ged.com", "GED Ready: jarabawar atisaye ta hukuma (ku duba kuɗinta)", "Wasu jihohi suna amfani da HiSET: ku duba jiharku"] },
            { title: "Tsarin karatunku", bullets: ["Ku fara da batutuwan da suka fi muku wuya", "Gajerun zama, kwanaki da yawa a mako, ranaku na gaske", "Ku zaɓi ranar GED Ready da ranar jarabawa"] }
          ],
          tryIt: "Ku je ged.com ku yi jarabawar misali ta lissafi ta GED kyauta. Ku rubuta sakamakonku da batutuwan da suka yi muku wuya. Sannan a takarda ku yi kalanda na makonni 6 zuwa 8 masu zuwa: ku zagaye ranakun karatunku, ku rubuta lokaci ga kowace, ku sa batun da ya fi muku wuya a rana ta farko. Wannan shi ne farkon aikinku na ƙarshe.",
          youCanNow: "bayyana jarabawar lissafi ta GED (abin da ta ƙunsa, lokaci, na'urar lissafi, takardar dabarbaru, nau'o'in tambayoyi) da fara tsarin karatu mai ranaku.",
          quickCheck: [
            { objective: "O1", q: "Dole ne ku haddace dabarbaru don jarabawar lissafi ta GED?", options: ["Eh, kowace dabara", "A'a, ana ba da takardar dabarbaru", "Waɗanda ke bayan na'urar lissafi kawai", "Sai idan kuna rubutawa ta intanet"], answer: 1, why: "GED Testing Service tana ba da takardar dabarbaru lokacin jarabawa." },
            { objective: "O1", q: "A ina ya kamata ku duba sabbin dokoki da kuɗin GED na jiharku?", options: ["Wani rubutu a kafofin sada zumunta", "Abokin da ya rubuta jarabawa shekaru da suka wuce", "ged.com ko ofishin ilimin manya na jiharku", "Wannan kwas ɗin kawai"], answer: 2, why: "Dokoki da kuɗi suna canjawa kuma sun bambanta a kowace jiha; shafin hukuma ne majiyar." }
          ],
          sources: [GED_SUBJECTS, GED_PRACTICE, HISET]
        },
        {
          title: "Lissafin lambobi ba tare da na'urar lissafi ba",
          objectives: ["O2"],
          minutes: 6,
          goal: "Warware tambayoyin tsarin ayyuka, ɓangarorin lamba, lambobi masu korau, ma'auni da tushen murabba'i da hannu.",
          text: [
            "Tsarin ayyukan lissafi: ku fara da Baka (parentheses), sannan Ma'auni (exponents), sannan Ninkawa da Raba daga hagu zuwa dama, sannan Tarawa da Ragewa daga hagu zuwa dama. Wasu suna tuna shi da PEMDAS. Misali: 3 + 4 x (6 - 2)^2 / 8. Baka: 6 - 2 = 4. Ma'auni: 4^2 = 16. Ninkawa da raba daga hagu zuwa dama: 4 x 16 = 64, 64 / 8 = 8. Tarawa: 3 + 8 = 11.",
            "Ɓangarorin lamba (fractions): don ninkawa, ku ninka na sama da na sama, na ƙasa da na ƙasa: 2/3 x 3/4 = 6/12 = 1/2. Don raba, ku juya ɓangare na biyu ku ninka: 3/4 / 1/2 = 3/4 x 2/1 = 6/4 = 1 1/2. Don kwatanta ɓangarori da decimal, ku mayar da su duka decimal: 2/3 kusan 0.667 ne, don haka daga mafi ƙanƙanta: 0.65, 2/3, 0.7.",
            "Lambobi masu korau (negative): -5 + 8 = 3. Rage lamba mai korau daidai yake da tarawa: 6 - (-2) = 8. Mai korau sau mai korau yana ba da mai kyau (positive): -3 x -4 = 12; mai korau sau mai kyau yana ba da mai korau: -3 x 4 = -12. A layin lambobi, lambobi suna ƙaruwa zuwa dama.",
            "Ma'auni da tushe: 2^5 yana nufin 2 x 2 x 2 x 2 x 2 = 32. Tushen murabba'i (square root) yana warware murabba'i: tushen murabba'i na 49 shi ne 7, domin 7 x 7 = 49. Tushen murabba'i na 50 ya ɗan fi 7, domin 50 yana tsakanin 49 da 64."
          ],
          steps: ["Baka tukuna.", "Sannan ma'auni da tushe.", "Sannan ninkawa da raba, daga hagu zuwa dama.", "Sannan tarawa da ragewa, daga hagu zuwa dama.", "Ɓangarorin lamba: ku ninka kai tsaye; don raba, ku juya na biyu ku ninka.", "Alamomi: alamomi iri ɗaya suna ninkawa zuwa mai kyau, daban-daban zuwa mai korau."],
          words: [["Tsarin ayyukan lissafi (order of operations)", "tsarin da aka yarda da shi na yin matakan lissafi: baka, ma'auni, ninkawa da raba, tarawa da ragewa."], ["Ma'auni (exponent)", "ƙaramar lamba a sama da ke faɗin sau nawa za a ninka lamba da kanta: 2^3 = 2 x 2 x 2."], ["Tushen murabba'i (square root)", "lambar da idan aka ninka ta da kanta take ba da lambar: tushen murabba'i na 25 shi ne 5."], ["Lamba mai korau (negative number)", "lambar da ta gaza sifili, kamar -4."], ["Layin lambobi (number line)", "layi mai lambobi a jere; lambobi suna ƙaruwa zuwa dama."]],
          slides: [
            { title: "Tsarin ayyukan lissafi", bullets: ["Baka, Ma'auni", "Ninkawa da Raba, daga hagu zuwa dama", "Tarawa da Ragewa, daga hagu zuwa dama", "3 + 4 x (6 - 2)^2 / 8 = 11"] },
            { title: "Ɓangarorin lamba", bullets: ["Ninkawa: 2/3 x 3/4 = 6/12 = 1/2", "Raba: juya ku ninka: 3/4 / 1/2 = 1 1/2", "Kwatantawa: ku mayar da su decimal"] },
            { title: "Lambobi masu korau", bullets: ["-5 + 8 = 3", "6 - (-2) = 8", "-3 x -4 = 12; -3 x 4 = -12"] },
            { title: "Ma'auni da tushe", bullets: ["2^5 = 32", "Tushen murabba'i na 49 = 7", "Tushen murabba'i na 50 ya ɗan fi 7"] }
          ],
          tryIt: "Ku yi atisaye ba tare da na'urar lissafi ba (amsoshi a ƙasa): (1) 10 - 2 x 3 + 4. (2) 5/6 x 3/5. (3) 2/3 / 4/9. (4) -7 - (-10). (5) 3^3 - tushen murabba'i na 16. Amsoshi: (1) 10 - 6 + 4 = 8 (ninkawa tukuna). (2) 15/30 = 1/2. (3) 2/3 x 9/4 = 18/12 = 1 1/2. (4) -7 + 10 = 3. (5) 27 - 4 = 23. Ga duk wanda kuka yi kuskure, ku nemo matakin da ya ɓaci ku rubuta dokar da kuke buƙata.",
          youCanNow: "yin tsarin ayyukan lissafi, ɓangarorin lamba, lambobi masu korau, ma'auni da tushen murabba'i da hannu.",
          quickCheck: [
            { objective: "O2", q: "Nawa ne 8 + 12 / 4?", options: ["5", "20", "14", "11"], answer: 3, why: "Ku raba kafin tarawa: 12 / 4 = 3, sannan 8 + 3 = 11." },
            { objective: "O2", q: "Nawa ne -6 x -5?", options: ["30", "-30", "-11", "11"], answer: 0, why: "Mai korau sau mai korau yana ba da mai kyau: 30." }
          ],
          sources: [GED_MATH]
        },
        {
          title: "Rabo, daidaiton rabo, kaso da bayanai",
          objectives: ["O3"],
          minutes: 6,
          goal: "Warware tambayoyin rabo, daidaiton rabo da kaso, da samun matsakaici, tsakiya, mafi yawa da tazara.",
          text: [
            "Rabo (ratio) yana kwatanta yawa biyu: kofi 3 na fulawa ga kowane kofi 2 na sukari shi ne 3:2. Daidaiton rabo (proportion) yana cewa rabo biyu daidai suke. Don warware shi, ku ninka a ketare (cross-multiply). Misali: kofi 3 na fulawa suna yin biskit 24. Nawa ake buƙata don biskit 40? 3/24 = x/40, don haka 24x = 120 kuma x = kofi 5.",
            "Tambayoyin kaso guda uku: (1) Nawa ne 35% na 80? 0.35 x 80 = 28. (2) 18 kaso nawa ne na 72? 18 / 72 = 0.25 = 25%. (3) Canjin kaso: farashi ya tashi daga $40 zuwa $50. Canjin shi ne $10, kuma 10 / 40 = 0.25, don haka ya ƙaru da 25%. Koyaushe ku raba canjin da yawan FARKO.",
            "Bayanai: ga lambobi 4, 7, 7, 9, 13, matsakaici (mean) shi ne jimilla a raba da yawansu: 40 / 5 = 8. Tsakiya (median) ita ce lambar tsakiya idan an jera su: 7. Mafi yawa (mode) ita ce lambar da ta fi fitowa: 7. Tazara (range) ita ce mafi girma a rage mafi ƙanƙanta: 13 - 4 = 9. Idan akwai lambobi biyu a tsakiya, tsakiyar ita ce rabin hanya tsakaninsu.",
            "Yiwuwa (probability) ita ce damar da wani abu zai faru: yawan hanyoyin da zai iya faruwa / jimillar sakamako. Jaka tana da duwatsun wasa (marbles) 3 ja da 9 shuɗi: damar samun ja ita ce 3/12 = 1/4, ko 25%."
          ],
          steps: ["Daidaiton rabo: ku rubuta ɓangarori biyu daidai masu ma'auni iri ɗaya a wuri ɗaya, sannan ku ninka a ketare ku raba.", "Kaso na lamba: ku mayar da kason decimal ku ninka.", "Kaso nawa: sashe / duka, sannan ku mayar da shi kaso.", "Canjin kaso: canji / na farko.", "Matsakaici: ku tara, sannan ku raba da yawansu. Tsakiya: ku jera, ku nemo tsakiya.", "Mafi yawa: wanda ya fi fitowa. Tazara: mafi girma a rage mafi ƙanƙanta."],
          words: [["Rabo (ratio)", "kwatanta yawa biyu, kamar 3:2."], ["Daidaiton rabo (proportion)", "rabo biyu da suka yi daidai, kamar 3/24 = 5/40."], ["Ninkawa a ketare (cross-multiply)", "ninka na saman kowane ɓangare da na ƙasan ɗayan don warware daidaiton rabo."], ["Matsakaici (mean)", "average: ku tara lambobin ku raba da yawansu."], ["Tsakiya (median)", "lambar tsakiya idan an jera lambobin."], ["Mafi yawa (mode)", "lambar da ta fi fitowa."], ["Tazara (range)", "lamba mafi girma a rage mafi ƙanƙanta."], ["Yiwuwa (probability)", "damar da wani abu zai faru, daga 0 (ba zai taɓa ba) zuwa 1 (koyaushe)."]],
          slides: [
            { title: "Rabo da daidaiton rabo", bullets: ["Kofi 3 don biskit 24; kofi x don 40", "3/24 = x/40, don haka 24x = 120", "x = kofi 5"] },
            { title: "Tambayoyin kaso guda uku", bullets: ["35% na 80 = 0.35 x 80 = 28", "18 na 72 = 18 / 72 = 25%", "$40 zuwa $50: 10 / 40 = ƙaruwar 25%"] },
            { title: "Bayanai: 4, 7, 7, 9, 13", bullets: ["Matsakaici: 40 / 5 = 8", "Tsakiya: 7; Mafi yawa: 7", "Tazara: 13 - 4 = 9"] },
            { title: "Yiwuwa", bullets: ["Hanyoyin da zai iya faruwa / jimillar sakamako", "Ja 3 cikin duwatsu 12: 3/12 = 1/4 = 25%"] }
          ],
          tryIt: "Atisaye (amsoshi a ƙasa): (1) Ma'aunin taswira shi ne inci 1 : mil 20. Mil nawa ne inci 3.5? (2) Nawa ne 15% na 260? (3) Waya ta $250 yanzu $200 ce. Mene ne kason ragi? (4) Ku nemo matsakaici, tsakiya, mafi yawa da tazara na 12, 15, 15, 18, 20, 22. Amsoshi: (1) mil 70. (2) 39. (3) 50 / 250 = ragin 20%. (4) Matsakaici 102 / 6 = 17; tsakiya rabin hanya tsakanin 15 da 18 = 16.5; mafi yawa 15; tazara 10.",
          youCanNow: "warware daidaiton rabo da nau'o'i uku na tambayoyin kaso, da bayyana bayanai da matsakaici, tsakiya, mafi yawa da tazara.",
          quickCheck: [
            { objective: "O3", q: "Mece ce tsakiya (median) ta 3, 9, 4, 8, 6?", options: ["4", "9", "6", "30"], answer: 2, why: "A jere: 3, 4, 6, 8, 9. Lambar tsakiya ita ce 6." },
            { objective: "O3", q: "Kaya na $60 ya tashi zuwa $75. Mene ne kason ƙaruwa?", options: ["15%", "20%", "80%", "25%"], answer: 3, why: "Canjin shi ne 15, kuma 15 / 60 = 0.25 = 25%." }
          ],
          sources: [GED_SUBJECTS]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Jarabawar, lambobi da bayanai",
        questions: [
          { objective: "O1", q: "Wanne ne ɗaya daga cikin fannoni huɗu na jarabawar lissafi ta GED?", options: ["Rubutun haruffa", "Zane-zanen Jadawali da Function", "Tarihin duniya", "Saurin rubutu a kwamfuta"], answer: 1, why: "Jarabawar lissafi ta ƙunshi Lissafi na Asali, Siffofi, Aljabara na Asali, da Zane-zanen Jadawali da Function." },
          { objective: "O2", q: "Nawa ne 2 + 3 x 4^2?", options: ["50", "80", "26", "400"], answer: 0, why: "Ma'auni tukuna: 16. Ninkawa: 48. Tarawa: 50." },
          { objective: "O2", q: "Nawa ne 3/4 / 3/8?", options: ["9/32", "1/2", "3/8", "2"], answer: 3, why: "Ku juya ku ninka: 3/4 x 8/3 = 24/12 = 2." },
          { objective: "O3", q: "Ma'aikata 5 suna iya cika kwalaye 40 da kaya a awa ɗaya. Da sauri iri ɗaya, kwalaye nawa ma'aikata 8 za su cika?", options: ["43", "50", "64", "80"], answer: 2, why: "40/5 = x/8, don haka 5x = 320 kuma x = 64." },
          { objective: "O3", q: "Mene ne matsakaicin (mean) 10, 14, 15 da 21?", options: ["15", "14.5", "11", "60"], answer: 0, why: "Jimilla 60, a raba da lambobi 4, shi ne 15." }
        ]
      }
    },
    {
      name: "Babi na 2: Aljabara, siffofi da zane-zanen jadawali",
      lessons: [
        {
          title: "Warware daidaito da rashin daidaito",
          objectives: ["O4"],
          minutes: 6,
          goal: "Rubutawa da warware daidaito da rashin daidaito masu harafi ɗaya, da duba kowace amsa.",
          text: [
            "Harafin lissafi (variable) harafi ne, kamar x, da ke tsayawa a madadin lambar da ba a sani ba. Kalmomi suna zama lissafi: \"5 fiye da ninki biyu na wata lamba\" shi ne 2x + 5. \"Wata lamba da aka rage da 7\" shi ne x - 7. \"Sakamakon ninka 4 da wata lamba\" shi ne 4x.",
            "Don warware daidaito (equation), ku yi abu ɗaya a ɓangarorin biyu har x ya kaɗaita. Ku fara warware tarawa ko ragewa, sannan ninkawa ko raba. Misali: 3x - 7 = 20. Ku ƙara 7: 3x = 27. Ku raba da 3: x = 9. Dubawa: 3 x 9 - 7 = 20. Eh. Misali mai baka: 2(x + 4) = 18. Ku raba da 2: x + 4 = 9, don haka x = 5.",
            "Tambayar labari: tsarin waya yana cin $25 a wata da $0.10 ga kowane saƙon tes. Kuɗin ya kai $32. Saƙonni nawa? 25 + 0.10t = 32. Ku rage 25: 0.10t = 7. Ku raba da 0.10: t = saƙonni 70.",
            "Rashin daidaito (inequalities) suna amfani da <, >, <= ko >= kuma ana warware su haka, da doka ɗaya: idan kun ninka ko raba ɓangarorin biyu da lamba mai korau, ku juya alamar. 4x + 3 > 19 yana ba da 4x > 16, don haka x > 4. Amma -2x <= 10 yana ba da x >= -5. A tambayoyin zaɓi daga amsoshi, kuna iya dubawa ta hanyar mayar da kowace amsa cikin tambayar."
          ],
          steps: ["Ku mayar da kalmomin daidaito da harafi a madadin abin da ba a sani ba.", "Ku warware tarawa ko ragewa a ɓangarorin biyu.", "Ku warware ninkawa ko raba a ɓangarorin biyu.", "Rashin daidaito: ku juya alamar idan kun ninka ko raba da lamba mai korau.", "Dubawa: ku mayar da amsarku cikin tambayar ta farko."],
          words: [["Harafin lissafi (variable)", "harafin da ke tsayawa a madadin lambar da ba a sani ba."], ["Furuci (expression)", "lambobi, haruffa da ayyuka ba tare da alamar daidai ba, kamar 2x + 5."], ["Daidaito (equation)", "jimlar lissafi mai alamar daidai, kamar 3x - 7 = 20."], ["Rashin daidaito (inequality)", "jimlar lissafi da ke amfani da <, >, <= ko >= maimakon alamar daidai."], ["Warwarewa (solve)", "samun ƙimar harafin da ke sa jimlar ta zama gaskiya."]],
          slides: [
            { title: "Kalmomi zuwa lissafi", bullets: ["5 fiye da ninki biyu na lamba: 2x + 5", "Lamba da aka rage da 7: x - 7", "Ninka 4 da wata lamba: 4x"] },
            { title: "Warware daidaito", bullets: ["3x - 7 = 20", "Ƙara 7: 3x = 27; raba da 3: x = 9", "Dubawa: 3 x 9 - 7 = 20"] },
            { title: "Tambayar labari", bullets: ["$25 a wata + $0.10 ga kowane tes = $32", "25 + 0.10t = 32, don haka 0.10t = 7", "t = saƙonni 70"] },
            { title: "Rashin daidaito", bullets: ["Ku warware kamar daidaito", "Ninkawa ko raba da mai korau: ku juya alamar", "-2x <= 10 yana ba da x >= -5"] }
          ],
          tryIt: "Atisaye (amsoshi a ƙasa): (1) Ku rubuta \"8 ƙasa da ninki uku na wata lamba\" a matsayin furuci. (2) Ku warware 5x + 6 = 41. (3) Ku warware 4(x - 2) = 28. (4) Tasi tana cin $3 da $2 a kowane mil. Tafiyar ta ci $19. Mil nawa? (5) Ku warware -3x + 1 > 13. Amsoshi: (1) 3x - 8. (2) 5x = 35, x = 7. (3) x - 2 = 7, x = 9. (4) 3 + 2m = 19, m = mil 8. (5) -3x > 12, don haka x < -4 (ku juya alamar). Ku duba kowace amsa ta hanyar mayar da ita ciki.",
          youCanNow: "mayar da kalmomi daidaito, warware daidaito da rashin daidaito, da duba amsoshinku.",
          quickCheck: [
            { objective: "O4", q: "Ku warware: x / 4 + 3 = 8", options: ["x = 44", "x = 5", "x = 20", "x = 1.25"], answer: 2, why: "Ku rage 3: x / 4 = 5. Ku ninka da 4: x = 20." },
            { objective: "O4", q: "Ku warware: -5x < 20", options: ["x > -4", "x < -4", "x < 4", "x > 4"], answer: 0, why: "Ku raba da -5 ku juya alamar: x > -4." }
          ],
          sources: [GED_SUBJECTS]
        },
        {
          title: "Siffofi da takardar dabarbaru da na'urar lissafi",
          objectives: ["O5"],
          minutes: 6,
          goal: "Lissafa kewaye, fili, girman ciki da gefen da ya ɓace na alwatika mai kusurwa madaidaiciya ta amfani da takardar dabarbaru da na'urar lissafi.",
          text: [
            "Kewaye (perimeter) shi ne nisan zagayen siffa; ku tara gefunan. Fili (area) shi ne wurin da ke ciki, a ma'aunin murabba'i (square units). Girman ciki (volume) shi ne wurin da ke cikin abu mai girma uku (3-D), a ma'aunin cube (cubic units). Murabba'i mai tsawo ƙafa 8 da faɗi ƙafa 5 yana da kewaye 2 x (8 + 5) = ƙafa 26 da fili 8 x 5 = ƙafa murabba'i 40. Alwatika mai tushe 10 da tsawo 6 yana da fili 1/2 x 10 x 6 = 30.",
            "Da'ira (circle) tana amfani da pi, kusan 3.14 (na'urar lissafi tana da maɓallin pi). Ga da'ira mai radius 3: fili = pi x r^2 = kusan 28.27 ma'aunin murabba'i; kewayen da'ira (circumference) = 2 x pi x r = kusan 18.85. Diameter ninki biyu ne na radius, don haka ku karanta a hankali wanne tambayar ta bayar.",
            "Girman ciki: akwati mai 4 da 3 da 2 yana da girman ciki 4 x 3 x 2 = ma'aunin cube 24. Silinda (cylinder) mai radius 2 da tsawo 5 yana da girman ciki pi x r^2 x h = pi x 4 x 5 = kusan ma'aunin cube 62.83.",
            "Alwatika mai kusurwa madaidaiciya (right triangle): a^2 + b^2 = c^2 (dokar Pythagoras), inda c shi ne gefe mafi tsawo, a gaban kusurwa madaidaiciya. Idan ƙafafun alwatikan 6 da 8 ne, c^2 = 36 + 64 = 100, don haka c = 10. Ana ba ku takardar dabarbaru a jarabawa: ku yi atisaye da sabuwar takardar daga ged.com don ku san inda kowace dabara take. A TI-30XS, ku yi amfani da maɓallin (-) don lambobi masu korau da maɓallin x^2 don murabba'i; takardar bayanin na'urar lissafi ta GED tana nuna maɓallan."
          ],
          steps: ["Ku zana siffar ku rubuta abin da kuka sani a jikinta.", "Ku yanke: kewaye (zagaye), fili (ciki, fale-fale) ko girman ciki (ciki, 3-D)?", "Ku nemo dabarar a takardar dabarbaru.", "Ku saka lambobin ku yi amfani da na'urar lissafi.", "Ku rubuta ma'aunan: ƙafa, ƙafa murabba'i ko ƙafa cube.", "Ku tambayi kanku: amsar ta dace da zanen?"],
          words: [["Kewaye (perimeter)", "nisan zagayen siffa fale-fale."], ["Fili (area)", "wurin da ke cikin siffa fale-fale, a ma'aunin murabba'i."], ["Girman ciki (volume)", "wurin da ke cikin abu mai girma uku, a ma'aunin cube."], ["Radius", "nisa daga tsakiyar da'ira zuwa gefenta; diameter ninki biyu ne na radius."], ["Pi", "lambar kusan 3.14 da ake amfani da ita da da'ira."], ["Dokar Pythagoras (Pythagorean theorem)", "ga alwatika mai kusurwa madaidaiciya, a^2 + b^2 = c^2, inda c shi ne gefe mafi tsawo."]],
          slides: [
            { title: "Kewaye, fili, girman ciki", bullets: ["Kewaye: zagaye, a ma'auni", "Fili: cikin siffa fale-fale, ma'aunin murabba'i", "Girman ciki: cikin abu 3-D, ma'aunin cube"] },
            { title: "Murabba'i mai tsawo da alwatika", bullets: ["Murabba'i 8 da 5: kewaye 26, fili 40", "Alwatika: 1/2 x tushe x tsawo", "Tushe 10, tsawo 6: fili 30"] },
            { title: "Da'ira da silinda", bullets: ["Fili = pi x r^2; radius 3: kusan 28.27", "Kewayen da'ira = 2 x pi x r", "Girman cikin silinda = pi x r^2 x h"] },
            { title: "Alwatika mai kusurwa madaidaiciya", bullets: ["a^2 + b^2 = c^2", "Ƙafafu 6 da 8: c = 10", "Ku yi atisaye da sabuwar takardar dabarbaru daga ged.com"] }
          ],
          tryIt: "Ku yi atisaye da na'urar lissafi da takardar dabarbaru daga ged.com (amsoshi a ƙasa): (1) Fili da kewayen murabba'i mai tsawo m 12 da m 7. (2) Filin da'ira mai diameter inci 10. (3) Girman cikin akwati ƙafa 6 da ƙafa 2 da ƙafa 3. (4) Tsani mai ƙafa 13 ya jingina da bango, ƙafarsa ƙafa 5 daga bangon. Har ina zai kai a bangon? Amsoshi: (1) fili mita murabba'i 84, kewaye m 38. (2) radius 5, fili kusan inci murabba'i 78.54. (3) ƙafa cube 36. (4) 5^2 + b^2 = 13^2, don haka b^2 = 169 - 25 = 144, b = ƙafa 12.",
          youCanNow: "samun kewaye, fili, girman ciki da gefen da ya ɓace na alwatika mai kusurwa madaidaiciya, da ma'aunan da suka dace.",
          quickCheck: [
            { objective: "O5", q: "Ɗaki yana da ƙafa 14 da ƙafa 10. Mene ne filinsa?", options: ["Ƙafa murabba'i 24", "Ƙafa 48", "Ƙafa cube 140", "Ƙafa murabba'i 140"], answer: 3, why: "Fili = tsawo x faɗi = 140, a ƙafa murabba'i." },
            { objective: "O5", q: "Alwatika mai kusurwa madaidaiciya yana da ƙafafu 9 da 12. Tsawon gefe mafi tsawo nawa ne?", options: ["21", "15", "225", "108"], answer: 1, why: "81 + 144 = 225, kuma tushen murabba'i na 225 shi ne 15." }
          ],
          sources: [GED_MATH, GED_CALC]
        },
        {
          title: "Gangara, zane-zanen jadawali da function",
          objectives: ["O6", "O1"],
          minutes: 6,
          goal: "Samun gangara, karanta zane-zane da tebura, lissafa function, da kammala tsarin karatu da jarabawarku.",
          text: [
            "Grid na coordinate yana da layin x (x-axis, a kwance) da layin y (y-axis, sama da ƙasa). Ana rubuta maki (x, y): (3, 5) yana nufin 3 a kwance, 5 sama. Gangara (slope) tana faɗin yadda layi yake da tsauri: hawa a raba da tafiya (rise over run), ko (y2 - y1) / (x2 - x1). Daga (1, 3) zuwa (4, 9): (9 - 3) / (4 - 1) = 6 / 3 = 2. Layin da ke hawa daga hagu zuwa dama yana da gangara mai kyau (positive); mai sauka, gangara mai korau (negative).",
            "Ana iya rubuta layi y = mx + b, inda m shi ne gangara kuma b shi ne inda layin ya ketare layin y. Daga tebur inda x = 0, 1, 2 yana ba da y = 5, 8, 11, y yana ƙaruwa da 3 kowane lokaci, don haka m = 3, kuma idan x = 0, y = 5, don haka b = 5: y = 3x + 5.",
            "Function tana ba da sakamako ɗaya ga kowace shigarwa. f(x) = x^2 - 3x yana nufin: ku ɗauki shigarwar, ku ninka ta da kanta, ku rage ninki 3 nata. f(4) = 16 - 12 = 4. A zane, ku nemo ƙimar ta hanyar tafiya a kwance zuwa x da kuke so, sannan sama ko ƙasa zuwa layin, sannan a kwance don karanta y.",
            "Ku kammala tsarinku. Ku duba makinku a ƙananan gwaje-gwaje, gwaje-gwajen ilimi da jarabawar misali. Ku sa batutuwa 3 da suka fi muku wuya a farko a jadawalinku na mako-mako, ku ƙara ranakun sake dubawa, ku zaɓi ranakun GED Ready da ainihin jarabawa, bayan kun duba dokokin jiharku a ged.com."
          ],
          steps: ["Gangara: ku rage ƙimomin y, ku rage ƙimomin x a tsari iri ɗaya, ku raba.", "y = mx + b: m shi ne gangara, b shi ne ƙimar y idan x = 0.", "Daga tebur: yawan canjin y duk lokacin da x ya ƙaru da 1 shi ne gangara.", "Function: ku sa lambar a madadin x ku bi tsarin ayyukan lissafi.", "Tsari: batutuwa mafi wuya tukuna, ranaku na gaske, GED Ready kafin ainihin jarabawa."],
          words: [["Grid na coordinate (coordinate grid)", "grid mai layin x da layin y don sanya maki."], ["Maki biyu a jere (ordered pair)", "maki da aka rubuta (x, y)."], ["Gangara (slope)", "yadda layi yake da tsauri: hawa a raba da tafiya."], ["y-intercept", "inda layi ya ketare layin y; b a cikin y = mx + b."], ["Function", "doka da ke ba da sakamako ɗaya tak ga kowace shigarwa, kamar f(x) = 2x + 1."]],
          slides: [
            { title: "Gangara = hawa / tafiya", bullets: ["(y2 - y1) / (x2 - x1)", "(1, 3) zuwa (4, 9): 6 / 3 = 2", "Hawa daga hagu zuwa dama: mai kyau; sauka: mai korau"] },
            { title: "y = mx + b", bullets: ["m: gangara; b: inda ya ketare layin y", "Tebur x = 0, 1, 2 yana ba da y = 5, 8, 11", "Don haka y = 3x + 5"] },
            { title: "Function", bullets: ["f(x) = x^2 - 3x", "f(4) = 16 - 12 = 4", "Zane: ku je x, ku nemo layin, ku karanta y"] },
            { title: "Ku kammala tsarinku", bullets: ["Batutuwa 3 mafi wuya tukuna", "Ranaku na gaske, ranakun sake dubawa", "Ranar GED Ready, sannan ranar jarabawarku"] }
          ],
          tryIt: "Atisaye (amsoshi a ƙasa): (1) Ku nemo gangara daga (2, 1) zuwa (6, 9). (2) Ku rubuta daidaiton layi mai gangara -2 da ya ketare layin y a 7. (3) Idan f(x) = 3x - 4, ku nemo f(5). (4) Tebur yana da x = 0, 1, 2 da y = 10, 7, 4. Mece ce gangarar? Amsoshi: (1) 8 / 4 = 2. (2) y = -2x + 7. (3) 15 - 4 = 11. (4) y yana raguwa da 3 kowane lokaci, don haka -3. Sannan ku kammala aikinku na ƙarshe: jadawalinku na mako-mako mai ranaku, tambayoyin atisaye 12 da bayanin waɗanda kuka yi kuskure, da ranakun GED Ready da jarabawarku.",
          youCanNow: "samun gangara, rubuta y = mx + b, karanta zane-zane da tebura, lissafa function, da bin tsarin karatu da jarabawar lissafi ta GED mai ranaku.",
          quickCheck: [
            { objective: "O6", q: "Mece ce gangara daga (0, 2) zuwa (3, 11)?", options: ["2", "9", "1/3", "3"], answer: 3, why: "(11 - 2) / (3 - 0) = 9 / 3 = 3." },
            { objective: "O6", q: "Idan f(x) = 2x + 1, nawa ne f(6)?", options: ["9", "13", "8", "12"], answer: 1, why: "2 x 6 + 1 = 13." }
          ],
          sources: [GED_SUBJECTS, GED_PRACTICE]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Aljabara, siffofi da zane-zanen jadawali",
        questions: [
          { objective: "O4", q: "Wane daidaito ne ya dace da \"Ninki biyu na wata lamba da 9 shi ne 25\"?", options: ["2 + x + 9 = 25", "2(x + 9) = 25", "2x + 9 = 25", "x + 9 = 2 x 25"], answer: 2, why: "Ninki biyu na lamba shi ne 2x, a ƙara 9, daidai da 25." },
          { objective: "O4", q: "Ku warware: 7x - 4 = 31", options: ["x = 5", "x = 27", "x = 3.9", "x = 35"], answer: 0, why: "Ku ƙara 4: 7x = 35. Ku raba da 7: x = 5." },
          { objective: "O5", q: "Mene ne girman cikin akwati inci 5 da 4 da 2?", options: ["Inci cube 11", "Inci murabba'i 20", "Inci 22", "Inci cube 40"], answer: 3, why: "Girman ciki = 5 x 4 x 2 = inci cube 40." },
          { objective: "O5", q: "Da'ira tana da radius 7. Kusan nawa ne kewayenta?", options: ["21.99", "43.98", "153.94", "49"], answer: 1, why: "2 x pi x 7 kusan 43.98 ne." },
          { objective: "O6", q: "A cikin y = 4x - 2, mece ce gangara?", options: ["-2", "2", "4", "x"], answer: 2, why: "A cikin y = mx + b, m shi ne gangara, don haka 4 ce." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Shirin Jarabawar GED: Lissafi",
    questions: [
      { objective: "O1", q: "Tsawon jarabawar lissafi ta GED nawa ne, a cewar ged.com?", options: ["Minti 30", "Minti 115", "Awa 3", "Babu iyakar lokaci"], answer: 1, why: "ged.com ta ce jarabawar lissafi minti 115 ce, har da umarni da sake dubawa." },
      { objective: "O1", q: "Wane kayan aiki kyauta ne ke nuna muku allon jarabawar lissafi ta GED da nau'o'in tambayoyi?", options: ["Jarabawar misali ta lissafi ta GED a ged.com", "Wata manhajar tambayoyi ta bazata", "Wasan bidiyo", "Babu shi"], answer: 0, why: "ged.com tana ba da jarabawar misali ta lissafi kyauta." },
      { objective: "O1", q: "Wace na'urar lissafi ce za ku iya kawowa cibiyar jarabawar GED?", options: ["Kowace waya", "Na'urar lissafi mai zane (graphing)", "Ba a taɓa yarda da na'urar lissafi ba", "TI-30XS"], answer: 3, why: "ged.com ta ce kuna iya kawo TI-30XS naku; ana ba da ta allo a sashe na 2." },
      { objective: "O1", q: "Jiharku tana amfani da HiSET. Me wannan yake nufi?", options: ["Ba za ku iya samun takardar shaida ba", "Dole ku koma wata jiha", "HiSET wata jarabawa ce mai daidai da sakandare da jiharku ke amfani da ita; ku duba dokokinta", "Jarabawar lissafi kaɗai za ku rubuta"], answer: 2, why: "Wasu jihohi suna amfani da HiSET maimakon GED, ko tare da ita." },
      { objective: "O2", q: "Nawa ne 20 - 4 x 3 + 2?", options: ["50", "10", "6", "18"], answer: 1, why: "Ninkawa tukuna: 12. Sannan 20 - 12 + 2 = 10." },
      { objective: "O2", q: "Nawa ne 4/5 x 5/8?", options: ["1/2", "9/13", "20/13", "32/25"], answer: 0, why: "20/40 = 1/2." },
      { objective: "O2", q: "Wace lamba ce take tsakanin 8 da 9?", options: ["Tushen murabba'i na 60", "Tushen murabba'i na 100", "Tushen murabba'i na 70", "Tushen murabba'i na 81"], answer: 2, why: "64 < 70 < 81, don haka tushen murabba'i na 70 yana tsakanin 8 da 9." },
      { objective: "O3", q: "Nawa ne 40% na 150?", options: ["40", "6", "110", "60"], answer: 3, why: "0.40 x 150 = 60." },
      { objective: "O3", q: "Wani girki yana amfani da kofi 2 na shinkafa ga mutane 6. Kofi nawa ga mutane 15?", options: ["5", "4", "7.5", "45"], answer: 0, why: "2/6 = x/15, don haka 6x = 30 kuma x = 5." },
      { objective: "O3", q: "Mece ce tazarar (range) 5, 12, 3, 9, 20?", options: ["9", "17", "49", "20"], answer: 1, why: "Mafi girma a rage mafi ƙanƙanta: 20 - 3 = 17." },
      { objective: "O3", q: "Jaka tana da duwatsun wasa 4 kore da 6 rawaya. Mece ce damar ɗauko kore?", options: ["4/6", "1/4", "2/5", "6/10"], answer: 2, why: "Kore 4 cikin jimilla 10 = 4/10 = 2/5." },
      { objective: "O4", q: "Ku warware: 6x + 5 = 47", options: ["x = 8.67", "x = 6", "x = 42", "x = 7"], answer: 3, why: "Ku rage 5: 6x = 42. Ku raba da 6: x = 7." },
      { objective: "O4", q: "Wurin motsa jiki yana cin $40 don shiga da $20 a wata. Kun biya $160. Watanni nawa?", options: ["6", "8", "10", "4"], answer: 0, why: "40 + 20m = 160, don haka 20m = 120 kuma m = 6." },
      { objective: "O4", q: "Ku warware: 10 - 2x >= 4", options: ["x >= 3", "x <= 3", "x <= -3", "x >= 7"], answer: 1, why: "Ku rage 10: -2x >= -6. Ku raba da -2 ku juya: x <= 3." },
      { objective: "O5", q: "Mene ne filin alwatika mai tushe 12 da tsawo 5?", options: ["60", "17", "30", "120"], answer: 2, why: "1/2 x 12 x 5 = 30." },
      { objective: "O5", q: "Harabar gida mai siffar murabba'i mai tsawo tana da ƙafa 30 da ƙafa 20. Shinge nawa ne zai kewaye ta?", options: ["Ƙafa 600", "Ƙafa 50", "Ƙafa murabba'i 100", "Ƙafa 100"], answer: 3, why: "Kewaye = 2 x (30 + 20) = ƙafa 100." },
      { objective: "O5", q: "Silinda yana da radius 3 da tsawo 10. Kusan nawa ne girman cikinsa?", options: ["Ma'aunin cube 282.74", "Ma'aunin cube 94.25", "Ma'aunin cube 30", "Ma'aunin cube 188.50"], answer: 0, why: "pi x 9 x 10 kusan 282.74 ne." },
      { objective: "O6", q: "Mece ce gangara daga (2, 7) zuwa (5, 1)?", options: ["2", "-2", "-1/2", "6"], answer: 1, why: "(1 - 7) / (5 - 2) = -6 / 3 = -2." },
      { objective: "O6", q: "Layi yana da gangara 5 kuma ya ketare layin y a -3. Daidaitonsa shi ne:", options: ["y = -3x + 5", "y = 5x", "y = 5x - 3", "y = x - 8"], answer: 2, why: "y = mx + b inda m = 5 kuma b = -3." },
      { objective: "O6", q: "Idan f(x) = x^2 + 2, nawa ne f(-3)?", options: ["-7", "-1", "8", "11"], answer: 3, why: "(-3)^2 = 9, kuma 9 + 2 = 11." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 4, 6, 7, 9, 11, 13, 14, 16, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe, sannan ku nuna tsarin ga malami ko abokin karatu.",
    criteria: [
      { name: "Ya san jarabawar", objective: "O1", notYet: "Bai yi jarabawar misali kyauta ba, ko tsarin ba shi da bayanan jarabawa daga ged.com.", meets: "An rubuta sakamakon jarabawar misali; an jera fannoni, lokaci, dokokin na'urar lissafi da nau'o'in tambayoyi daga ged.com.", exceeds: "Ya kuma jera dokokin jihar (GED ko HiSET), yadda ake tsara rana da kuɗin yanzu, daga shafin hukuma." },
      { name: "Tsarin karatu mai ranaku", objective: "O1", notYet: "Babu ranaku, ko babu tsarin batutuwa.", meets: "Ranakun karatu na makonni 6 zuwa 8 da ranaku da lokuta na gaske, batutuwa 3 mafi wuya tukuna, ranar GED Ready da ranar jarabawa.", exceeds: "Yana da ranakun sake dubawa da tsarin madadi don zaman da aka rasa." },
      { name: "Lissafin lambobi da bayanai", objective: "O3", notYet: "Ƙasa da 3 cikin 4 na tambayoyin atisayen lambobi da bayanai daidai.", meets: "Aƙalla 3 cikin 4 na tambayoyin lambobi da bayanai (Darasi na 2 da na 3) daidai, da bayanin duk kuskure.", exceeds: "Duka daidai, da aikin da aka nuna a sarari mataki-mataki." },
      { name: "Aljabara", objective: "O4", notYet: "An warware daidaiton atisaye ba tare da dubawa ba, ko ɗaya ko duka biyu ba daidai ba.", meets: "Tambayoyin aljabara biyu duka daidai kuma an duba su ta hanyar mayar da amsar ciki.", exceeds: "Ya bayyana dokar juya alama a rashin daidaito da kalmominsa." },
      { name: "Siffofi da zane-zanen jadawali", objective: "O6", notYet: "An yi amfani da dabarar da ba daidai ba, babu ma'auni, ko alamar gangara ba daidai ba.", meets: "Tambayoyin siffofi da zane-zane (Darasi na 5 da na 6) galibi daidai, da ma'auni da alamomin gangara daidai.", exceeds: "Yana iya nuna inda kowace dabara take a takardar dabarbaru da zana jadawali don tambayar gangara." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin da tsarin karatu da jarabawa mai ranaku da ya cika ma'aunin rubric",
      "Ci gaba daga gwajin farko zuwa jarabawar ƙarshe",
      "Masu koyo da suka yi GED Ready ko jarabawar misali ta hukuma kuma cikin kwanaki 60 suka sami maki mafi girma (binciken biyo baya)",
      "Masu koyo da suka ci jarabawar lissafi ta GED (ko lissafin HiSET) cikin watanni 6, da waɗanda suka ci gaba har suka kammala dukkan takardar shaidar"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Takarda, fensir da kalanda",
      "Na'urar lissafi ta TI-30XS idan ana iya, ko na'urar lissafi ta kimiyya kyauta ta intanet",
      "Sabuwar takardar dabarbaru ta GED da takardar bayanin na'urar lissafi ta TI-30XS daga ged.com",
      "Waya ko kwamfuta mai intanet don jarabawar misali ta lissafi ta GED kyauta",
      "Kusan awa 2 zuwa 3 don kwas ɗin, sannan jadawalin karatu na mako-mako na mai koyo"
    ],
    facilitatorNotes: [
      "Ku ba da gwajin farko a matsayin shiri ba tare da maki ba; masu koyo da yawa suna tsoron lissafi.",
      "Ku warware kowane misali a allo, sannan masu koyo su yi na gaba bibbiyu kafin su yi su kaɗai.",
      "Ku buga sabuwar takardar dabarbaru da takardar bayanin na'urar lissafi daga ged.com don masu koyo su yi atisaye da abin da za su gani.",
      "Ku taimaki masu koyo su duba dokokin jiharsu (GED ko HiSET, shekaru, katin shaida, kuɗi, ta intanet ko a cibiyar jarabawa) a shafukan hukuma; kada ku faɗi kuɗi ko makin cin jarabawa daga ƙwaƙwalwa.",
      "A shirye-shiryen gidan yari ko na masu dawowa gida, ku tambayi ofishin ilimi yadda ake shirya jarabawa a wurin.",
      "Ku haɗa wannan kwas da \"Everyday Math for Work and Life\" (Lissafin Yau da Kullum don Aiki da Rayuwa) ga masu koyo da ke buƙatar ƙarin atisaye da ɓangarorin lamba da kaso."
    ]
  }
};

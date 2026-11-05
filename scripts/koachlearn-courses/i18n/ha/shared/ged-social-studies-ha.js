"use strict";

// Koach Learn course, Hausa (ha) translation of shared/ged-social-studies.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const GED_SUBJECTS = { name: "GED Testing Service: fannonin jarabawa (lokaci, nau'o'in tambayoyi, na'urar lissafi)", url: "https://ged.com/about_test/test_subjects/" };
const GED_SS = { name: "GED Testing Service: jarabawar Social Studies (Nazarin Zamantakewa)", url: "https://ged.com/about_test/test_subjects/social_studies/" };
const GED_SCORES = { name: "GED Testing Service: maki", url: "https://ged.com/about_test/scores/" };
const GED_FREE = { name: "GED Testing Service: jarabawowin gwaji kyauta (Turanci da Sifaniyanci)", url: "https://ged.com/study/free_online_ged_test/" };
const GED_READY = { name: "GED Ready, jarabawar gwaji ta hukuma", url: "https://www.ged.com/study/ged-ready.html" };
const HISET = { name: "HiSET, wata jarabawar daidai da sakandare (shafin hukuma)", url: "https://hiset.org/" };
const USA_BRANCHES = { name: "USAGov: Rassan gwamnatin Amurka", url: "https://www.usa.gov/branches-of-government" };
const ARCHIVES_CONST = { name: "National Archives: Kundin Tsarin Mulkin Amurka (cikakken rubutu)", url: "https://www.archives.gov/founding-docs/constitution-transcript" };
const ARCHIVES_BOR = { name: "National Archives: Bill of Rights (cikakken rubutu)", url: "https://www.archives.gov/founding-docs/bill-of-rights-transcript" };

module.exports = {
  id: "ged-social-studies-ha",
  lang: "ha",
  translationOf: "ged-social-studies",
  category: "Workforce Development",
  name: "Shirin Jarabawar GED: Social Studies (Nazarin Zamantakewa)",
  skills: "Karanta majiyoyi na farko da na biyu, Bambanta gaskiya da ra'ayi, Bayanin yadda gwamnatin Amurka ke aiki, Gano dalili da sakamako, Karanta taswira, tebur da jadawali, Yin tsarin karatu",
  outcome: "karanta wani rubutu na nazarin zamantakewa, takardar tarihi, taswira ko jadawali, da amsa tambayoyi irin na GED game da shi: babban ra'ayi, mahangar marubuci, gaskiya ko ra'ayi, dalili da sakamako, yadda gwamnatin Amurka ke aiki, da abin da bayanan suka nuna.",
  about: [
    "Wannan kwas na manya ne da ke shirin jarabawar GED ta Social Studies (Nazarin Zamantakewa): masu neman aiki, masu dawowa gida daga gidan yari, tsofaffin sojoji, matasa, baƙi da duk wanda ke komawa karatu. Ged.com ya ce ba jarabawar haddace ba ce. Tana gwada yadda kuke karatu, tunani da amfani da jadawali game da gwamnati, tarihi da kuɗi.",
    "Kwas ɗin yana shirya ku don jarabawar. Ba ya ba ku takardar shaidar GED. GED Testing Service ce ke gudanar da jarabawar, kuma jiharku ce ke kafa ƙa'idojin zama ta. Wasu jihohi suna amfani da wata jarabawa mai suna HiSET. Ku duba ged.com da ofishin ilimin manya na jiharku don ƙa'idoji, kuɗi da wuraren jarabawa na yanzu.",
    "Kowane darasi yana koyar da ƙwarewa ɗaya da misalai da aka warware, atisayen \"Gwada yanzu\" mai bayanin amsoshi, da ɗan gwaji mai tambayoyi biyu. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe.",
    "Aikin ƙarshe takardar nazarin majiya ce da za ku cike kan wata takardar kafuwar ƙasa ta gaske daga National Archives (Ma'ajiyar Tarihi ta Ƙasa), tare da tsarin karatun GED naku mai ranaku."
  ],
  finalTask: "Ku cike takardar nazarin majiya mai shafi ɗaya kan Preamble (gabatarwar) Kundin Tsarin Mulkin Amurka (ko wata takardar kafuwar ƙasa a archives.gov): wa ya rubuta ta kuma yaushe, majiya ta farko ce ko ta biyu, babban ra'ayi a jimla ɗaya, mahangar marubuci, gaskiya ɗaya da ra'ayi ko buri ɗaya, dalili ɗaya da sakamako ɗaya masu alaƙa da ita, da wace reshen gwamnati take da alaƙa da ita da dalili. Ku ƙara tsarin karatun GED naku mai ranaku a ƙasa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke shirin jarabawar GED ta Social Studies: masu neman aiki, masu dawowa gida daga gidan yari, tsofaffin sojoji, matasa da suka bar makaranta, baƙi (wasu kuma suna shirin zama 'yan ƙasa) da manya da ke komawa karatu bayan shekaru da yawa.",
    startingPoint: "Suna iya karanta rubutun yau da kullum da teburori masu sauƙi. Da yawa ba su tuna tarihin Amurka ko ilimin zama ɗan ƙasa sosai daga makaranta ba, kuma suna tsammani jarabawar haddace ranaku ce. Wasu har yanzu suna koyon Turanci.",
    gap: "Jarabawar tana neman masu koyo su karanta majiyoyi, su gane mahanga da shaida, su bayyana yadda gwamnati ke aiki, kuma su karanta jadawali da taswira. Waɗannan ƙwarewoyi kuma suna taimaka wa mutane bin labarai, yin zaɓe idan sun cancanta, fahimtar haƙƙoƙinsu da yanke shawarwari kan kuɗi.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin tsofaffin takardu layi bayan layi",
      "Na'urori: waya, kwamfutar ɗakin karatu, ko takarda da alƙalami",
      "Lokaci: darussa na minti 4 zuwa 6 da suka dace da aiki, ganawa da iyali",
      "Ana koyar da batutuwan siyasa ba tare da son kai ba: yadda abubuwa ke aiki da yadda ake auna shaida, ba wane ɓangare za a goyi baya ba",
      "Ƙa'idojin jarabawa, kuɗi da wace jarabawa jiha ke amfani da ita (GED ko HiSET) suna canjawa; masu koyo su duba ged.com da jiharsu"
    ],
    prerequisites: "Babu. Kwas ɗin GED na Language Arts (Harshe) yana taimakawa wajen karatu don gano babban ra'ayi da auna shaida."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Ta amfani da shafin GED na hukuma", action: "jera sassa, nau'o'in tambayoyi, lokaci da kayan aikin jarabawar GED ta Social Studies, da rubuta tsarin karatu mai ranaku", standard: "an ambaci dukkan fannonin ƙwarewa uku, da aƙalla ranar karatu ɗaya a kowane mako har zuwa jarabawar" },
    { id: "O2", condition: "Idan aka ba ku majiya ta farko ko ta biyu", action: "gane babban ra'ayi, mahangar marubuci, da waɗanne maganganu gaskiya ne da waɗanne ra'ayi ne", standard: "kuna nuna kalmomin da ke tabbatar da kowace amsa" },
    { id: "O3", condition: "Idan aka ba ku gajeren yanayi na harkokin gwamnati", action: "bayyana wace reshen gwamnati ke aiki da yadda bincike da daidaito (checks and balances) ko wani haƙƙi na kundin tsarin mulki ya shafi lamarin", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O4", condition: "Idan aka ba ku wani abin tarihi ko hujja", action: "gane dalili da sakamako, da shaidar da ke goyon bayan wata fahimta (inference)", standard: "kuna ambaton shaidar daga majiyar" },
    { id: "O5", condition: "Idan aka ba ku taswira, tebur ko jadawali game da tarihi, tattalin arziki ko labarin ƙasa", action: "karanta ƙima, bayyana yanayin canji (trend) da zaɓar ƙarshen da bayanan suka goyi baya", standard: "ba tare da ƙara bayanan da ba a nuna ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Karanta majiyoyi da yadda gwamnati ke aiki",
      lessons: [
        {
          title: "Yadda jarabawar GED ta Social Studies ke aiki",
          objectives: ["O1"],
          minutes: 5,
          goal: "Jera sassa da kayan aikin jarabawar GED ta Social Studies, da rubuta tsarin karatu mai ranaku.",
          text: [
            "GED tana da jarabawowi huɗu: Lissafi (Math), Harshe (Reasoning Through Language Arts), Kimiyya (Science) da Nazarin Zamantakewa (Social Studies). Kuna iya zama su ɗaya bayan ɗaya. GED Testing Service ce ke yin jarabawar. Wasu jihohi suna amfani da wata jarabawar daidai da sakandare, HiSET, don haka ku duba wace jarabawa jiharku ke amfani da ita.",
            "A ged.com, an rubuta cewa jarabawar Social Studies minti 70 ce ba tare da hutu ba. Tana da fannonin ƙwarewa uku: karatu don fahimtar ma'ana a nazarin zamantakewa, nazarin abubuwan tarihi da hujjoji, da amfani da lambobi da jadawali a nazarin zamantakewa. Tambayoyin zaɓi ne (multiple choice), cike gurbi, ja ka sauke (drag and drop), zaɓar wani yanki, da jerin zaɓi (drop-down).",
            "Ana ba ku na'urar lissafi a kan allo da takardar bayanin na'urar lissafi, kuma ged.com ya ce kuna iya kawo na'urar lissafinku ta TI-30XS zuwa cibiyar jarabawa. Ged.com ya ce ba jarabawar haddace ba ce: kuna amfani da bayanan da aka ba ku don yanke ƙarshe.",
            "Ged.com ya jera maki 145 a matsayin makin cin kowane fanni. Lokuta da ƙa'idoji suna iya canjawa, don haka ku duba ged.com kafin ku yi rajista. Ged.com yana da jarabawowin gwaji kyauta da jarabawar gwaji ta hukuma, GED Ready."
          ],
          steps: ["Ku je ged.com ku karanta shafin jarabawar Social Studies.", "Ku rubuta lokacin, fannonin ƙwarewa uku da kayan aikin da ake ba ku.", "Ku yi jarabawar gwajin Social Studies kyauta don ku ga matsayinku.", "Ku zaɓi makon da kuke son zama jarabawar.", "Ku rubuta aƙalla ranar karatu ɗaya a kowane mako, da ƙwarewar da za ku yi atisaye."],
          words: [["GED", "jarabawar daidai da sakandare; cin dukkan fannoni huɗu yana ba da takardar shaida da masu ɗaukar aiki da kwalejoji da yawa ke karɓa kamar takardar kammala sakandare."], ["HiSET", "wata jarabawar daidai da sakandare da wasu jihohi ke amfani da ita."], ["Civics (ilimin zama ɗan ƙasa)", "nazarin gwamnati da haƙƙoƙi da ayyukan 'yan ƙasa."], ["Economics (tattalin arziki)", "nazarin yadda mutane ke yi, saya, sayar da kuma amfani da kayayyaki da kuɗi."]],
          slides: [
            { title: "Jarabawar Social Studies (ku duba ged.com)", bullets: ["Minti 70, babu hutu", "Tambayoyin zaɓi da sauran nau'o'in tambayoyi", "Makin cin da aka jera: 145"] },
            { title: "Fannonin ƙwarewa uku", bullets: ["Karatu don fahimtar ma'ana a nazarin zamantakewa", "Nazarin abubuwan tarihi da hujjoji", "Amfani da lambobi da jadawali"] },
            { title: "Ba jarabawar haddace ba ce", bullets: ["Ku yi amfani da bayanan da aka ba ku", "Ku yanke ƙarshe daga gare su", "Na'urar lissafi a kan allo da takardar bayani"] },
            { title: "Ku yi tsari", bullets: ["Ku fara yin jarabawar gwaji kyauta", "Ku zaɓi makon jarabawa", "Ku yi karatu kaɗan, a yawancin ranakun mako"] }
          ],
          sources: [GED_SUBJECTS, GED_SS, GED_SCORES, GED_FREE, GED_READY, HISET],
          tryIt: "Ku buɗe ged.com ku yi jarabawar gwajin Social Studies kyauta (ko ku karanta shafin Social Studies idan ba za ku iya yi yanzu ba). Ku rubuta tsarin karatunku: makon da kuke son zama jarabawa da rana ɗaya a kowane mako da ƙwarewar da za ku yi atisaye: karanta majiyoyi, gwamnati, tarihi, ko jadawali. Ku ajiye shi don aikin ƙarshe.",
          youCanNow: "ambaci sassa da kayan aikin jarabawar GED ta Social Studies, da bin tsarin karatu mai ranaku.",
          quickCheck: [
            { objective: "O1", q: "Me ged.com ya ce game da jarabawar Social Studies?", options: ["Galibi haddace ranaku ce", "Ba jarabawar haddace ba ce", "Ba ta da jadawali", "Game da wasu ƙasashe ne kawai"], answer: 1, why: "Ged.com ya ce ba jarabawar haddace ba ce; kuna tunani da bayanan da aka ba ku." },
            { objective: "O1", q: "Wanne ne ɗaya daga cikin fannonin ƙwarewa uku na jarabawar?", options: ["Rubuta sunayen manyan biranen jihohi", "Zana tutoci", "Amfani da lambobi da jadawali a nazarin zamantakewa", "Saurin bugun rubutu"], answer: 2, why: "Ged.com ya jera karatu don fahimtar ma'ana, abubuwan tarihi da hujjoji, da lambobi da jadawali." }
          ]
        },
        {
          title: "Majiyoyi, mahanga, gaskiya da ra'ayi",
          objectives: ["O2"],
          minutes: 6,
          goal: "Gane babban ra'ayi, mahanga, gaskiya da ra'ayoyi a cikin majiya.",
          text: [
            "Majiya ta farko (primary source) wanda yake wurin a lokacin ne ya yi ta: wasiƙa, jawabi, doka, hoto, littafin tarihin yau da kullum. Majiya ta biyu (secondary source) wani ne ya yi ta daga baya yana nazarin abin da ya faru, kamar littafin karatu ko sharhin labarai. Dukansu suna da amfani; majiyoyi na farko suna nuna yadda mutane suka ga abubuwa a lokacin.",
            "Mahanga (point of view) ita ce yadda marubuci yake ganin batun, bisa ko wane ne shi da abin da yake so. Ku tambaya: wa ya rubuta wannan, yaushe, kuma me yasa? Mai masana'anta da ma'aikacin masana'anta a shekarar 1900 suna iya bayyana yajin aiki ɗaya ta hanyoyi daban-daban sosai.",
            "Gaskiya (fact) ana iya dubawa a tabbatar da ita gaskiya ce ko ƙarya: \"An amince da Gyara na 19 (19th Amendment) a 1920.\" Ra'ayi (opinion) imani ne ko ji: \"Shi ne canji mafi muhimmanci a tarihinmu.\" Kalmomi kamar mafi kyau, mafi muni, ya kamata, muhimmi da na yi imani sau da yawa suna nuna ra'ayi.",
            "Misalin da aka warware. Tallar jarida ta 1910: \"Sababbin injinanmu suna yin riguna 500 a rana. Kowane iyali na zamani ya kamata ya sayi rigunanmu!\" Gaskiya: riguna 500 a rana (ana iya dubawa). Ra'ayi: kowane iyali ya kamata ya saye su. Mahanga: kamfani da ke sayar da kayansa."
          ],
          steps: ["Ku tambaya wa ya yi majiyar, yaushe kuma me yasa.", "Ku yanke: ta farko (an yi ta a lokacin) ko ta biyu (an yi ta daga baya).", "Ku faɗi babban ra'ayi a jimla ɗaya.", "Ku yi wa kowace magana alama: gaskiya (ana iya dubawa) ko ra'ayi (imani ko hukunci).", "Ku bayyana mahangar marubuci da abin da yake son mai karatu ya yi ko ya yi tunani."],
          words: [["Majiya ta farko (primary source)", "abin da aka yi a lokacin wani abu ya faru, wanda yake wurin ne ya yi shi."], ["Majiya ta biyu (secondary source)", "abin da aka yi daga baya, wani da ke nazarin abin da ya faru ne ya yi shi."], ["Mahanga (point of view)", "yadda marubuci yake ganin batu, bisa ko wane ne shi da abin da yake so."], ["Gaskiya (fact)", "maganar da ana iya dubawa a tabbatar da ita."], ["Ra'ayi (opinion)", "imani, ji ko hukunci."]],
          slides: [
            { title: "Ta farko ko ta biyu?", bullets: ["Ta farko: an yi ta a lokacin, wanda yake wurin ne ya yi ta", "Ta biyu: an yi ta daga baya, wanda ke nazarinta ne ya yi ta"] },
            { title: "Mahanga", bullets: ["Wa ya rubuta ta?", "Yaushe?", "Me yasa, kuma me yake so?"] },
            { title: "Gaskiya ko ra'ayi?", bullets: ["Gaskiya: ana iya dubawa", "Ra'ayi: imani ko hukunci", "Kalmomin alama: mafi kyau, mafi muni, ya kamata, na yi imani"] }
          ],
          tryIt: "Atisaye: wasiƙar wani manomi a 1935: \"Guguwar ƙura ta binne gonakinmu sau uku a wannan bazara. Ya kamata gwamnati ta taimaki manoma irinmu kafin lokaci ya ƙure.\" 1) Ta farko ko ta biyu? 2) Gaskiya ɗaya. 3) Ra'ayi ɗaya. 4) Mahanga? Amsoshi: 1) Ta farko: wanda yake wurin ne ya rubuta ta a lokacin. 2) Guguwar ƙura ta binne gonakin sau uku a wannan bazara. 3) Ya kamata gwamnati ta taimaki manoma. 4) Manomi mai fama da wahala yana neman taimako.",
          youCanNow: "bambanta majiyoyi na farko da na biyu, bayyana mahanga, da rarraba gaskiya da ra'ayi.",
          quickCheck: [
            { objective: "O2", q: "Wace ce majiya ta farko game da Yaƙin Duniya na Biyu?", options: ["Babin littafin karatu na 2020", "Taƙaitaccen bayani a shafin intanet da aka rubuta bara", "Fim da aka yi a 2015", "Wasiƙar da wani soja ya rubuta gida a 1944"], answer: 3, why: "Wanda yake wurin ne ya yi ta a lokacin." },
            { objective: "O2", q: "Wace magana ce ra'ayi?", options: ["Majalisa (Congress) ta zartar da dokar a 1964.", "Birnin yana da mazauna 40,000.", "Wannan ita ce doka mafi kyau da Majalisa ta taɓa zartarwa.", "An buɗe gadar a 1937."], answer: 2, why: "\"Mafi kyau\" hukunci ne da ba za a iya tabbatarwa ba." }
          ]
        },
        {
          title: "Yadda gwamnatin Amurka ke aiki",
          objectives: ["O3"],
          minutes: 6,
          goal: "Bayyana wace reshen gwamnati ke aiki a wani yanayi da yadda bincike da daidaito ke aiki.",
          text: [
            "Kundin Tsarin Mulkin Amurka (Constitution) ya raba gwamnatin tarayya zuwa rassa uku don kada wani mutum ko ƙungiya ta mallaki iko da yawa. Reshen majalisa (legislative) shi ne Congress (Majalisar Dattawa, Senate, da Majalisar Wakilai, House of Representatives); yana yin dokoki. Reshen zartarwa (executive) shi ne shugaban ƙasa, mataimakinsa da majalisar ministoci (cabinet); yana aiwatar da dokoki. Reshen shari'a (judicial) shi ne Kotun Ƙoli (Supreme Court) da sauran kotunan tarayya; suna fassara dokoki kuma suna yanke ko sun saɓa wa Kundin Tsarin Mulki.",
            "Bincike da daidaito (checks and balances) suna bar kowane reshe ya taƙaita sauran. Shugaban ƙasa yana iya hawa kujerar na-ƙi (veto) kan ƙudurin da Majalisa ta zartar. Majalisar Dattawa tana amincewa ko ƙin waɗanda shugaban ƙasa ya zaɓa, kamar alƙalan tarayya. Kotun Ƙoli tana iya soke dokar da ta ga ta saɓa wa Kundin Tsarin Mulki. Majalisa tana iya, a lokuta masu tsanani, cire shugaban ƙasa daga mulki.",
            "Bill of Rights (Kundin Haƙƙoƙi) su ne gyare-gyare goma na farko ga Kundin Tsarin Mulki. Yana kare haƙƙoƙi kamar 'yancin faɗin albarkacin baki, addini, 'yan jarida da taruwa (Gyara na Farko, First Amendment), da haƙƙoƙin mutanen da ake zargi da laifi, kamar shari'a mai adalci kuma cikin sauri. Ana kuma raba iko tsakanin gwamnatin tarayya da jihohi; ana kiran wannan tsarin tarayya (federalism).",
            "Misalin da aka warware. \"Majalisa ta zartar da ƙuduri. Shugaban ƙasa ya hau kujerar na-ƙi.\" Wane bincike ne wannan? Reshen zartarwa ne ke taƙaita reshen majalisa."
          ],
          steps: ["Ku gano wa ke aiki: Majalisa, shugaban ƙasa ko kotu.", "Ku ambaci reshen: majalisa, zartarwa ko shari'a.", "Ku tambaya wane iko ake amfani da shi: yin, aiwatarwa ko fassara dokoki.", "Idan wani reshe yana taƙaita wani, ku ambaci binciken.", "Idan haƙƙoƙin wani mutum sun shafi lamarin, ku nemi haƙƙin a cikin Bill of Rights."],
          words: [["Constitution (Kundin Tsarin Mulki)", "doka mafi girma a Amurka; ita ce ta kafa gwamnati."], ["Reshen majalisa (legislative branch)", "Congress; yana yin dokoki."], ["Reshen zartarwa (executive branch)", "shugaban ƙasa, mataimakinsa da majalisar ministoci; yana aiwatar da dokoki."], ["Reshen shari'a (judicial branch)", "kotuna; suna fassara dokoki."], ["Veto (kujerar na-ƙi)", "lokacin da shugaban ƙasa ya ƙi ƙudurin da Majalisa ta zartar."], ["Amendment (gyara)", "canji ko ƙari ga Kundin Tsarin Mulki."]],
          slides: [
            { title: "Rassa uku", bullets: ["Majalisa (Congress): tana yin dokoki", "Zartarwa (shugaban ƙasa): tana aiwatar da dokoki", "Shari'a (kotuna): tana fassara dokoki"] },
            { title: "Bincike da daidaito", bullets: ["Shugaban ƙasa yana iya hawa kujerar na-ƙi kan ƙudurori", "Majalisar Dattawa tana amincewa ko ƙin waɗanda aka zaɓa", "Kotun Ƙoli tana iya soke dokokin da suka saɓa wa Kundin Tsarin Mulki"] },
            { title: "Bill of Rights (Kundin Haƙƙoƙi)", bullets: ["Gyare-gyare goma na farko", "Faɗin albarkacin baki, addini, 'yan jarida, taruwa", "Haƙƙoƙin mutanen da ake zargi da laifi"] },
            { title: "Tsarin tarayya (federalism)", bullets: ["Ana raba iko tsakanin ƙasa da jihohi"] }
          ],
          sources: [USA_BRANCHES, ARCHIVES_CONST, ARCHIVES_BOR],
          tryIt: "Atisaye: ku ambaci reshen ko haƙƙin. 1) Majalisar Dattawa ta kaɗa ƙuri'a kan wanda shugaban ƙasa ya zaɓa ya zama alƙalin tarayya. 2) Kotun Ƙoli ta yanke cewa wata doka ta saɓa wa Kundin Tsarin Mulki. 3) Wata jarida ta buga labarin da ke sukar magajin gari. 4) Shugaban ƙasa ya sa hannu a ƙuduri ya zama doka. Amsoshi: 1) Majalisa ce ke taƙaita zartarwa. 2) Shari'a ce ke taƙaita majalisa. 3) 'Yancin 'yan jarida, Gyara na Farko. 4) Zartarwa (tana yin aikinta wajen yin doka).",
          youCanNow: "ambaci rassa uku, bayyana bincike da daidaito a wani yanayi, da haɗa wani lamari da Bill of Rights.",
          quickCheck: [
            { objective: "O3", q: "Wane reshe ne ke yin dokokin tarayya?", options: ["Reshen majalisa (Congress)", "Reshen shari'a", "Reshen zartarwa", "Jihohi kaɗai"], answer: 0, why: "Congress, reshen majalisa, ce ke yin dokoki." },
            { objective: "O3", q: "Kotun Ƙoli ta yanke cewa wata doka ta saɓa wa Kundin Tsarin Mulki. Misalin me ne wannan?", options: ["Tsarin tarayya", "Kujerar na-ƙi (veto)", "Binciken da reshen shari'a ke yi wa reshen majalisa", "Gyara (amendment)"], answer: 2, why: "Kotuna suna iya soke dokokin da suka saɓa wa Kundin Tsarin Mulki." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Karanta majiyoyi da yadda gwamnati ke aiki",
        questions: [
          { objective: "O1", q: "A ina ya kamata ku duba lokuta, kuɗi da ƙa'idojin jarabawar GED na yanzu?", options: ["Wani rubutu a kafar sada zumunta", "Ged.com da ofishin ilimin manya na jiharku", "Tsohon littafin karatu", "Abin da aboki ya tuna"], answer: 1, why: "Ƙa'idoji da kuɗi suna canjawa; majiyoyin hukuma ne ke da na yanzu." },
          { objective: "O2", q: "Wace ce majiya ta biyu?", options: ["Jawabin da aka yi a 1963", "Hoton da aka ɗauka lokacin guguwar ƙura ta shekarun 1930", "Wasiƙa ta 1776", "Littafin tarihi da aka rubuta a 2015"], answer: 3, why: "Littafin karatu mutanen da ke nazarin abubuwan da suka faru ne suke yin sa daga baya." },
          { objective: "O2", q: "Tallar wani kamfani ta 1912 ta ce jiragen ƙasansa su ne \"mafi kyau a ƙasar.\" Mene ne wannan?", options: ["Ra'ayi daga mahangar kamfani", "Gaskiya", "Doka", "Majiya ta biyu"], answer: 0, why: "\"Mafi kyau\" hukunci ne, kuma kamfanin yana son sayar da tikiti." },
          { objective: "O3", q: "Shugaban ƙasa ya hau kujerar na-ƙi kan wani ƙuduri. Wane reshe ake taƙaitawa?", options: ["Reshen shari'a", "Reshen zartarwa", "Reshen majalisa", "Jihohi"], answer: 2, why: "Kujerar na-ƙi tana bar zartarwa ta taƙaita Congress, reshen majalisa." },
          { objective: "O3", q: "Mene ne Bill of Rights?", options: ["Kasafin kuɗin shugaban ƙasa", "Gyare-gyare goma na farko ga Kundin Tsarin Mulki", "Jerin dokokin jihohi", "Hukuncin Kotun Ƙoli"], answer: 1, why: "Bill of Rights su ne gyare-gyare goma na farko." }
        ]
      }
    },
    {
      name: "Babi na 2: Tarihi, tattalin arziki da jadawali",
      lessons: [
        {
          title: "Dalili, sakamako da shaida a tarihi",
          objectives: ["O4"],
          minutes: 5,
          goal: "Gane dalili da sakamako a wani abin tarihi da shaidar da ke goyon bayan wata fahimta.",
          text: [
            "Tambayoyin tarihi sau da yawa suna tambayar me yasa wani abu ya faru (dalili) da me ya faru saboda shi (sakamako). Kalmomin alama: saboda, don haka, a sakamakon haka, ya kai ga, saboda haka, sanadiyyar.",
            "Misalin da aka warware. \"A ƙarshen shekarun 1800, masana'antu a birane sun ba da sababbin ayyuka da yawa. A sakamakon haka, miliyoyin mutane sun ƙaura daga gonaki zuwa birane. Yawan mutanen birane ya ƙaru da sauri, kuma cunkoson gidaje ya zama matsala.\" Dalili: ayyukan masana'antu a birane. Sakamako: mutane sun ƙaura zuwa birane. Sakamako na gaba: cunkoson gidaje. Dalili ɗaya yana iya kawo jerin sakamako.",
            "Fahimta (inference) ƙarshe ne da shaida ke goyon baya. Tambayoyin GED suna iya tambayar wace magana daga majiya ke goyon bayan wata fahimta. Ku zaɓi maganar da ke ba da hujja, ba wadda kawai take magana kan batu ɗaya ba.",
            "Ku yi hankali: abubuwa biyu da suka faru a lokaci ɗaya ba koyaushe yana nufin ɗaya ne ya kawo ɗayan ba. Ku nemi majiyar ta faɗa ko ta nuna alaƙar."
          ],
          steps: ["Ku nemo abin da tambayar take magana a kai.", "Ku nemi kalmomin alama: saboda, don haka, a sakamakon haka, ya kai ga.", "Ku ambaci dalilin (me yasa) da sakamakon (me ya faru na gaba).", "Don fahimta, ku zaɓi maganar da ke ba da hujja a kanta.", "Ku duba cewa majiyar ta haɗa abubuwan biyu da gaske; kada ku yi zato."],
          words: [["Dalili (cause)", "me yasa wani abu ya faru."], ["Sakamako (effect)", "abin da ya faru saboda dalilin."], ["Fahimta (inference)", "ƙarshen da shaida ke goyon baya."], ["Industrialization (bunƙasar masana'antu)", "ƙaruwar masana'antu da injina da ke yin kayayyaki."]],
          slides: [
            { title: "Dalili da sakamako", bullets: ["Dalili: me yasa ya faru", "Sakamako: me ya faru na gaba", "Kalmomin alama: saboda, a sakamakon haka, ya kai ga"] },
            { title: "Jerin sakamako", bullets: ["Ayyukan masana'antu a birane", "Mutane sun ƙaura daga gonaki zuwa birane", "Cunkoson gidaje a birane"] },
            { title: "Shaida don fahimta", bullets: ["Ku zaɓi maganar da ke tabbatar da ita", "Batu ɗaya ba daidai yake da hujja ba", "Faruwa a lokaci ɗaya ba yana nufin ɗaya ya kawo ɗaya ba"] }
          ],
          tryIt: "Atisaye: \"Dust Bowl (Kwanon Ƙura) na shekarun 1930 ya lalata amfanin gona a Great Plains (Manyan Filaye). Iyalan manoma da yawa sun rasa ƙasarsu kuma sun ƙaura zuwa yamma don neman aiki.\" 1) Dalili? 2) Sakamako? 3) Wace magana ce ta fi goyon bayan fahimtar \"Dust Bowl ya canja inda mutane ke zama\": (a) \"Dust Bowl ya lalata amfanin gona\" ko (b) \"Iyalan manoma da yawa sun ƙaura zuwa yamma\"? Amsoshi: 1) Guguwar ƙura ta lalata amfanin gona. 2) Iyalai sun rasa ƙasa kuma sun ƙaura zuwa yamma. 3) (b): tana nuna mutane suna ƙaura.",
          youCanNow: "gano dalilai da sakamako a tarihi, da zaɓar shaidar da ke goyon bayan wata fahimta.",
          quickCheck: [
            { objective: "O4", q: "\"Farashin man fetur ya hau sosai, don haka mutane da yawa suka hau bas.\" Mene ne sakamakon?", options: ["Farashin man fetur ya hau", "Mutane da yawa sun hau bas", "Bas sun yi arha", "Motoci sun ƙara girma"], answer: 1, why: "Hawan bas shi ne abin da ya faru saboda farashin man fetur ya hau." },
            { objective: "O4", q: "Wace magana ce ta fi goyon bayan fahimtar cewa sabuwar babbar hanya ta taimaki kasuwancin wani gari?", options: ["\"Babbar hanyar tana da layuka huɗu.\"", "\"An buɗe babbar hanyar a 1960.\"", "\"Ana yin manyan hanyoyi da siminti.\"", "\"Cinikin shaguna a garin ya ninka a cikin shekaru biyar bayan buɗe babbar hanyar.\""], answer: 3, why: "Tana ba da shaidar bunƙasar kasuwanci mai alaƙa da babbar hanyar." }
          ]
        },
        {
          title: "Tattalin arziki da jadawali",
          objectives: ["O5"],
          minutes: 6,
          goal: "Karanta tebur ko taswira, bayyana yanayin canji da zaɓar ƙarshen da bayanan suka goyi baya.",
          text: [
            "Wadata (supply) ita ce yawan abin da ake sayarwa. Buƙata (demand) ita ce yawan abin da mutane ke son saya. Idan buƙata ta ƙaru kuma wadata ta tsaya yadda take, farashi yawanci yana hawa. Idan wadata ta ƙaru kuma buƙata ta tsaya yadda take, farashi yawanci yana sauka. Misali: bayan sanyi mai tsanani ya lalata amfanin lemu, wadatar lemu tana raguwa kuma farashi yana hawa.",
            "Jadawali: ku fara karanta take, alamomi da ma'auni. Teburin atisaye (ƙirƙirarre): yawan marasa aikin yi a wani birni ya kasance 8% a 2020, 6% a 2021, 5% a 2022 da 4% a 2023. Yanayin canji: yana sauka kowace shekara. Ƙarshen da aka goyi baya: kaso kaɗan na masu neman aiki ba su da aiki a 2023 fiye da 2020. Wanda ba a goyi baya ba: me yasa ya sauka, domin teburin bai faɗa ba.",
            "Taswira: ku karanta take, legend (makullin bayani) da alamar kwatance (compass rose). Legend yana faɗa muku abin da launuka ko alamomi ke nufi. Taswirar ruwan sama tana iya amfani da launuka masu duhu don ruwan sama mai yawa. Ku yi amfani da ma'aunin nisa (scale) don ƙiyasta nisa.",
            "Canjin kaso ya zama ruwan dare: daga 8% zuwa 4% raguwa ce ta maki 4 na kaso (percentage points). Kuna iya amfani da na'urar lissafi a kan allo don lissafin."
          ],
          steps: ["Ku karanta take, alamomi, ma'auni ko legend na taswira.", "Ku nemo ƙimar da tambayar ke nema.", "Ku bayyana yanayin canji: yana hawa, yana sauka ko babu tsari a sarari.", "Ku zaɓi ƙarshen da ya tsaya cikin bayanan.", "Don farashi, ku tambaya: wadata ko buƙata ce ta canja?"],
          words: [["Wadata (supply)", "yawan kaya ko hidimar da ake sayarwa."], ["Buƙata (demand)", "yawan abin da mutane ke son saya."], ["Yawan marasa aikin yi (unemployment rate)", "kason masu neman aiki da ba su da aiki."], ["Legend (makullin bayani)", "makullin taswira ko tebur da ke faɗin abin da launuka ko alamomi ke nufi."], ["Maki na kaso (percentage point)", "bambanci kai tsaye tsakanin kaso biyu, kamar daga 8% zuwa 4% maki 4 ne."]],
          slides: [
            { title: "Wadata da buƙata", bullets: ["Buƙata ta ƙaru, wadata ba ta canja ba: farashi yawanci yana hawa", "Wadata ta ƙaru, buƙata ba ta canja ba: farashi yawanci yana sauka"] },
            { title: "Karanta jadawali", bullets: ["Take, alamomi, ma'auni da farko", "Ku nemo ƙimar", "Ku bayyana yanayin canji"] },
            { title: "Karanta taswira", bullets: ["Take da legend (makullin bayani)", "Alamar kwatance don hanya", "Ma'aunin nisa don nisa"] },
            { title: "Ku tsaya cikin bayanan", bullets: ["Tebur yana nuna me, ba koyaushe me yasa ba", "Babu ƙarshe kan abubuwan da ba a nuna ba"] }
          ],
          tryIt: "Atisaye (bayanan ƙirƙirarru): jadawalin sanduna yana nuna matsakaicin kuɗin hayar wata-wata a wani birni: 2019: $1,000; 2021: $1,150; 2023: $1,400. 1) Kuɗin haya a 2021? 2) Yanayin canji? 3) Nawa kuɗin haya ya ƙaru daga 2019 zuwa 2023? 4) Wane ƙarshe ne aka goyi baya: (a) kuɗin haya ya ƙaru a wannan lokaci, ko (b) kuɗin haya ya ƙaru saboda sababbin ayyuka? Amsoshi: 1) $1,150. 2) Yana hawa. 3) $400. 4) (a); jadawalin bai nuna me yasa ba.",
          youCanNow: "amfani da wadata da buƙata don bayanin canjin farashi, da karanta teburori da taswira don zaɓar ƙarshen da aka goyi baya.",
          quickCheck: [
            { objective: "O5", q: "Guguwa ta lalata masana'antun katako da yawa, don haka katakon da ake sayarwa ya ragu yayin da magina har yanzu suna son sa. Me yawanci yake faruwa ga farashin katako?", options: ["Yana hawa", "Yana sauka", "Yana tsayawa yadda yake", "Katako ya zama kyauta"], answer: 0, why: "Wadata ta ragu yayin da buƙata ta tsaya yadda take, don haka farashi yawanci yana hawa." },
            { objective: "O5", q: "A kan taswira, me ke faɗa muku abin da kowane launi ke nufi?", options: ["Alamar kwatance", "Take", "Legend (makullin bayani)", "Ma'aunin nisa"], answer: 2, why: "Legend yana bayanin launuka da alamomi." }
          ]
        },
        {
          title: "Haɗa komai: nazarin takardar kafuwar ƙasa",
          objectives: ["O2", "O3", "O4"],
          minutes: 6,
          goal: "Cike takardar nazarin majiya kan takardar kafuwar ƙasa.",
          text: [
            "Tambayoyin GED sau da yawa suna ba ku ɗan guntun tsohuwar takarda kuma suna tambaya game da babban ra'ayinta, manufarta ko yadda take da alaƙa da gwamnati a yau. Preamble, jimlar farko ta Kundin Tsarin Mulki, abu ne mai kyau don atisaye. Ku karanta ta a shafin National Archives.",
            "Preamble tana farawa da \"We the People of the United States\" (Mu Jama'ar Ƙasar Amurka) kuma tana jera buri: kafa haɗin kai mafi kyau, tabbatar da adalci, tabbatar da zaman lafiya a cikin gida (domestic tranquility), samar da tsaron bai ɗaya, bunƙasa jin daɗin kowa (general welfare) da tabbatar da albarkun 'yanci.",
            "Nazarin da aka warware. Wa da yaushe: wakilai a Babban Taron Kundin Tsarin Mulki (Constitutional Convention), 1787. Nau'i: majiya ta farko. Babban ra'ayi: jama'a sun kafa gwamnati don cimma buri na bai ɗaya. Mahanga: shugabanni da ke son gwamnatin ƙasa mai ƙarfi fiye da wadda suke da ita a baya. Dalili da sakamako: gwamnatin farko ƙarƙashin Articles of Confederation tana da rauni, wanda ya kai ga rubuta sabon Kundin Tsarin Mulki. Rassa: Preamble tana gabatar da dukan Kundin Tsarin Mulki, wanda ya kafa dukkan rassa uku.",
            "Takardarku ba ta buƙatar cikakkun amsoshi ba tare da kuskure ba. Tana buƙatar amsoshin da za ku iya tabbatarwa ta hanyar nuna kalmomin da ke cikin takardar."
          ],
          steps: ["Ku buɗe rubutun Kundin Tsarin Mulki a archives.gov ku karanta Preamble.", "Ku rubuta wa ya rubuta ta, yaushe, da ko ta farko ce ko ta biyu.", "Ku rubuta babban ra'ayi a jimla ɗaya da mahangar.", "Ku rubuta gaskiya ɗaya game da ita da buri ko ra'ayi ɗaya da ke cikinta.", "Ku rubuta dalili ɗaya da sakamako ɗaya, da reshe ko haƙƙin da take da alaƙa da shi.", "Ku ƙara tsarin karatunku mai ranaku a ƙasa."],
          words: [["Preamble (gabatarwa)", "jimlar farko ta Kundin Tsarin Mulki da ke faɗin manufarsa."], ["Articles of Confederation", "tsarin farko na gwamnatin Amurka, wanda aka yi amfani da shi kafin Kundin Tsarin Mulki."], ["Domestic tranquility", "zaman lafiya a cikin gida."], ["General welfare", "jin daɗin dukan jama'a."]],
          slides: [
            { title: "Preamble (gabatarwa)", bullets: ["Jimlar farko ta Kundin Tsarin Mulki", "Tana farawa da \"We the People\" (Mu Jama'a)", "Tana jera burin sabuwar gwamnati"] },
            { title: "Takardar nazarinku", bullets: ["Wa, yaushe, ta farko ko ta biyu", "Babban ra'ayi da mahanga", "Gaskiya da buri ko ra'ayi"] },
            { title: "Ku haɗa ta", bullets: ["Dalili ɗaya da sakamako ɗaya", "Reshe ko haƙƙin da take da alaƙa da shi", "Ku nuna kalmomin da ke tabbatar da shi"] }
          ],
          sources: [ARCHIVES_CONST, ARCHIVES_BOR],
          tryIt: "Aikin ƙarshe: ku cike takardar nazarin majiya mai shafi ɗaya kan Preamble (ko Bill of Rights) daga archives.gov, ta amfani da matakan da ke sama. Ku ƙara tsarin karatun GED naku mai ranaku a ƙasa, sannan ku ba aikinku maki da ma'aunin rubric na kwas ɗin.",
          youCanNow: "nazarin takardar kafuwar ƙasa: nau'in majiyarta, babban ra'ayi, mahanga, dalilai da sakamako, da alaƙarta da yadda gwamnati ke aiki.",
          quickCheck: [
            { objective: "O2", q: "Wakilai a Babban Taron Kundin Tsarin Mulki ne suka rubuta Preamble a 1787. Wace irin majiya ce?", options: ["Ta biyu", "Binciken ra'ayoyin jama'a", "Taswira", "Ta farko"], answer: 3, why: "Mutanen da suka rubuta Kundin Tsarin Mulki ne suka yi ta a lokacin." },
            { objective: "O4", q: "Articles of Confederation sun kafa gwamnatin ƙasa mai rauni. Mene ne ɗaya daga cikin sakamakon?", options: ["Shugabanni sun rubuta sabon Kundin Tsarin Mulki", "An cire Bill of Rights", "An rufe Majalisa har abada", "Jihohi sun daina wanzuwa"], answer: 0, why: "Raunin Articles ya kai ga Kundin Tsarin Mulki na 1787." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Tarihi, tattalin arziki da jadawali",
        questions: [
          { objective: "O4", q: "\"Saboda masana'antar ta rufe, ma'aikata da yawa sun ƙaura.\" Mene ne dalilin?", options: ["Ma'aikata sun ƙaura", "Garin ya girma", "Masana'antar ta rufe", "Sababbin shaguna sun buɗe"], answer: 2, why: "Rufe masana'antar shi ne dalilin da ya sa ma'aikatan suka ƙaura." },
          { objective: "O4", q: "Abubuwa biyu sun faru a shekara ɗaya. Me za ku iya faɗa da tabbaci?", options: ["Ɗaya ne ya kawo ɗayan", "Sun faru a lokaci ɗaya; ku duba majiyar don ganin alaƙa", "Dukansu ra'ayoyi ne", "Babu ɗayan da ya faru"], answer: 1, why: "Faruwa tare ba ya tabbatar da cewa ɗaya ne ya kawo ɗayan." },
          { objective: "O5", q: "Buƙatar kekuna ta ƙaru kuma wadata ta tsaya yadda take. Me yawanci yake faruwa ga farashin kekuna?", options: ["Yana sauka", "Yana tsayawa yadda yake", "Kekuna sun zama kyauta", "Yana hawa"], answer: 3, why: "Masu saya da yawa kan wadata iri ɗaya yawanci yana tura farashi sama." },
          { objective: "O5", q: "Tebur yana nuna yawan mutanen wani gari: 2000: 10,000; 2010: 12,000; 2020: 15,000. Wane ƙarshe ne aka goyi baya?", options: ["Yawan mutane ya ƙaru a waɗannan shekaru", "Garin zai sami mutane 50,000 a 2030", "Mutane sun ƙauro saboda makarantu masu kyau", "Garin ya rasa mutane"], answer: 0, why: "Lambobin suna hawa kowace shekara goma; teburin bai nuna gaba ko dalilai ba." },
          { objective: "O3", q: "Majalisar Dattawa ta ƙi wanda shugaban ƙasa ya zaɓa ya zama alƙalin tarayya. Wane bincike ne wannan?", options: ["Reshen shari'a yana taƙaita zartarwa", "Reshen majalisa yana taƙaita zartarwa", "Tsarin tarayya", "Kujerar na-ƙi"], answer: 1, why: "Majalisar Dattawa, ɓangaren Congress, tana amincewa ko ƙin waɗanda shugaban ƙasa ya zaɓa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Shirin Jarabawar GED: Social Studies (Nazarin Zamantakewa)",
    questions: [
      { objective: "O1", q: "Me wannan kwas yake yi muku?", options: ["Yana ba ku takardar shaidar GED", "Yana mai da ku ɗan ƙasar Amurka", "Yana shirya ku don jarabawar GED ta Social Studies", "Yana maye gurbin jarabawar GED"], answer: 2, why: "Yana shirya ku; GED Testing Service ce ke gudanar da jarabawar, kuma jiharku ce ke ba da takardar shaidar." },
      { objective: "O1", q: "Wace ce wata jarabawar daidai da sakandare da wasu jihohi ke amfani da ita?", options: ["HiSET", "SAT", "CDL", "LSAT"], answer: 0, why: "HiSET wata jarabawar daidai da sakandare ce." },
      { objective: "O1", q: "A cewar ged.com, jarabawar Social Studies:", options: ["Haddace ranaku ce kawai", "Jarabawar rubutun maƙala ce kawai", "Ba jarabawar haddace ba ce", "Hira ce ta baki"], answer: 2, why: "Ged.com ya ce ba jarabawar haddace ba ce." },
      { objective: "O2", q: "Mene ne majiya ta farko?", options: ["Littafin karatu da aka rubuta bara", "Abin da wanda yake wurin ya yi a lokacin", "Taƙaitaccen bayani a shafin intanet", "Rubutun malami"], answer: 1, why: "Majiyoyi na farko suna fitowa daga mutanen da ke wurin a lokacin abin da ya faru." },
      { objective: "O2", q: "Wace ce gaskiya?", options: ["An sa hannu a Civil Rights Act (Dokar Haƙƙoƙin Jama'a) a 1964.", "Ita ce doka mafi girma da aka taɓa rubutawa.", "Kowa ya kamata ya so ta.", "Ita ce rana mafi ban sha'awa a tarihi."], answer: 0, why: "Ana iya duba ranar sa hannu; sauran hukunce-hukunce ne." },
      { objective: "O2", q: "Don gano mahangar marubuci, ku tambaya:", options: ["Tsawon majiyar", "Launin takardar", "Shafuka nawa take da su", "Wa ya rubuta ta, yaushe kuma me yasa"], answer: 3, why: "Wa, yaushe da me yasa suna tsara yadda marubuci ke ganin batu." },
      { objective: "O2", q: "Wace kalma ce sau da yawa ke nuna ra'ayi?", options: ["An amince", "Ya kamata", "1920", "Majalisa"], answer: 1, why: "\"Ya kamata\" tana faɗin abin da wani ya yi imani ya kamata ya faru." },
      { objective: "O3", q: "Wane reshe ne ke aiwatar da dokoki?", options: ["Majalisa", "Shari'a", "Zartarwa", "Babu"], answer: 2, why: "Shugaban ƙasa da reshen zartarwa ne ke aiwatar da dokoki." },
      { objective: "O3", q: "Congress (Majalisa) ta ƙunshi:", options: ["Majalisar Dattawa da Majalisar Wakilai", "Shugaban ƙasa da majalisar ministoci", "Kotun Ƙoli", "Gwamnoni"], answer: 0, why: "Congress tana da sassa biyu: Majalisar Dattawa da Majalisar Wakilai." },
      { objective: "O3", q: "Wata ƙungiya ta yi zanga-zangar lumana a wani wurin shakatawa. Wane haƙƙi ne ke kare wannan?", options: ["Haƙƙin shari'a cikin sauri", "Haƙƙin zaɓe a shekara 18", "Kujerar na-ƙi ta shugaban ƙasa", "'Yancin taruwa (Gyara na Farko)"], answer: 3, why: "Gyara na Farko yana kare taruwa ta lumana." },
      { objective: "O3", q: "Ana kiran raba iko tsakanin gwamnatin ƙasa da jihohi:", options: ["Kujerar na-ƙi", "Tsarin tarayya (federalism)", "Gabatarwa (preamble)", "Ra'ayi"], answer: 1, why: "Tsarin tarayya yana raba iko tsakanin ƙasa da jihohi." },
      { objective: "O4", q: "Wace kalmar alama ce ke nuna dalili da sakamako?", options: ["A sakamakon haka", "Haka kuma", "Misali", "Ban da haka"], answer: 0, why: "\"A sakamakon haka\" tana gabatar da sakamako." },
      { objective: "O4", q: "\"Ayyukan masana'antu sun ƙaru a birane, don haka mutane suka ƙaura daga gonaki.\" Mene ne dalilin?", options: ["Mutane sun ƙaura daga gonaki", "Gonaki sun ƙara girma", "Ayyukan masana'antu sun ƙaru a birane", "Birane sun ƙanƙance"], answer: 2, why: "Ayyukan masana'antu ne dalilin da ya sa mutane suka ƙaura." },
      { objective: "O4", q: "Wace magana ce ta fi goyon bayan fahimtar cewa wata sabuwar doka ta rage raunuka a wurin aiki?", options: ["\"Dokar tana da shafuka 20.\"", "\"Rahotannin raunuka sun ragu da kashi ɗaya cikin uku a shekaru uku bayan dokar ta fara aiki.\"", "\"Mutane da yawa sun yi magana game da dokar.\"", "\"Dokar tana da dogon suna.\""], answer: 1, why: "Tana ba da shaidar raguwar raunuka bayan dokar." },
      { objective: "O5", q: "Sanyi mai tsanani ya lalata yawancin amfanin lemu. Me yawanci yake faruwa ga farashin lemu?", options: ["Yana sauka", "Yana tsayawa yadda yake", "Lemu ya zama kyauta", "Yana hawa"], answer: 3, why: "Ƙarancin wadata tare da buƙata iri ɗaya yawanci yana ɗaga farashi." },
      { objective: "O5", q: "Me ya kamata ku fara karantawa a kan tebur ko jadawali?", options: ["Take, alamomi da ma'auni", "Zaɓuɓɓukan amsa kawai", "Lamba mafi ƙanƙanta", "Launuka kawai"], answer: 0, why: "Suna faɗa muku abin da lambobin ke nufi." },
      { objective: "O5", q: "Yawan marasa aikin yi ya kasance 8% a 2020 da 4% a 2023. Nawa ya sauka?", options: ["Maki 2 na kaso", "Maki 12 na kaso", "Maki 4 na kaso", "Maki 8 na kaso"], answer: 2, why: "8% - 4% = maki 4 na kaso." },
      { objective: "O5", q: "Jadawali yana nuna kuɗin haya yana hawa kowace shekara. Wane ƙarshe ne ya wuce bayanan?", options: ["Kuɗin haya ya ƙaru a waɗannan shekaru", "Kuɗin haya zai ninka a shekara mai zuwa", "Kuɗin haya ya fi yawa a ƙarshe fiye da farko", "Jadawalin yana nuna shekaru da dama"], answer: 1, why: "Jadawalin bai nuna shekara mai zuwa ba." },
      { objective: "O2", q: "Preamble tana farawa da \"We the People\" (Mu Jama'a). Me wannan ke nunawa game da mahangar gwamnatin?", options: ["Iko yana fitowa daga jama'a", "Iko yana fitowa daga sarki", "Jihohi kaɗai ke da iko", "Kotuna ne suka rubuta ta"], answer: 0, why: "\"We the People\" tana nuna cewa jama'a ne suka kafa gwamnatin, kuma don su ne." },
      { objective: "O4", q: "Me yasa shugabanni suka rubuta Kundin Tsarin Mulki a 1787?", options: ["Ƙasar ba ta da jihohi", "Sarki ne ya roƙe su", "Bill of Rights ya gaza", "Gwamnati ƙarƙashin Articles of Confederation ta yi rauni sosai"], answer: 3, why: "Raunin Articles of Confederation ya kai ga sabon tsarin gwamnati." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [2, 3, 4, 7, 9, 12, 13, 14, 16] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku sake karanta wannan sashe na takardar ku gyara amsarku.",
    criteria: [
      { name: "Majiya da mahanga", objective: "O2", notYet: "Nau'in majiya ko marubuci ba daidai ba ne ko babu.", meets: "Marubuci, rana da nau'in majiya daidai, da mahangar da ta dace da wanda ya rubuta da dalilinsa.", exceeds: "Yana kuma bayanin yadda mahangar ke tsara abin da takardar ke faɗa." },
      { name: "Babban ra'ayi, gaskiya da ra'ayi", objective: "O2", notYet: "Babban ra'ayi ba daidai ba ne, ko an haɗa gaskiya da ra'ayi.", meets: "Babban ra'ayi daidai a jimla ɗaya, gaskiya ɗaya da buri ko ra'ayi ɗaya, kowanne an haɗa shi da kalmomin.", exceeds: "Yana kawo ainihin kalmomin da ke nuna kowace amsa." },
      { name: "Dalili da sakamako", objective: "O4", notYet: "Babu dalili ko sakamako, ko an juya su.", meets: "Dalili ɗaya daidai da sakamako ɗaya daidai masu alaƙa da takardar.", exceeds: "Yana nuna jeri: dalili, sakamako da sakamako na gaba." },
      { name: "Alaƙa da gwamnati", objective: "O3", notYet: "Ba a ambaci reshe ko haƙƙi ba, ko an ambaci wanda ba daidai ba.", meets: "Yana ambaton reshe ko haƙƙin da take da alaƙa da shi kuma yana bayanin dalili a jimla ɗaya.", exceeds: "Yana kuma ba da misalin bincike da daidaito ko wani haƙƙi da ake amfani da shi a yau." },
      { name: "Karanta bayanai", objective: "O5", notYet: "Bai kammala atisayen jadawali na Darasi na 5 ba.", meets: "Ya kammala atisayen jadawali na Darasi na 5 da ƙarshen da ya tsaya cikin bayanan.", exceeds: "Yana kuma bayanin canjin farashi ta amfani da wadata da buƙata." },
      { name: "Tsarin karatu", objective: "O1", notYet: "Babu tsarin karatu, ko babu ranaku.", meets: "Tsarin karatu da aƙalla rana ɗaya a kowane mako har zuwa makon jarabawa.", exceeds: "Yana kuma da ranar GED Ready ko ranar jarabawa da aka yi rajista." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko fiye a kowane layin rubric",
      "Masu koyo da suka yi GED Ready ko jarabawar gwaji kyauta ta ged.com cikin kwanaki 30",
      "Masu koyo da suka yi rajista ko suka ci jarabawar GED ta Social Studies cikin kwanaki 90 (bisa faɗinsu)",
      "Shirye-shiryen abokan aiki sun ce ƙarin masu koyo suna kammala dukkan fannonin GED huɗu kuma suna ci gaba zuwa horon aiki ko kwaleji"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya, tablet ko kwamfuta mai intanet, ko darussan da aka buga a takarda",
      "Takarda da alƙalami don amsoshin atisaye da takardar nazarin majiya",
      "Kwafin Preamble da Bill of Rights daga archives.gov, a buga ko a kan allo",
      "Jarabawowin gwaji kyauta na ged.com; GED Ready idan mai koyo ya zaɓi ya saya",
      "Kusan minti 90 don darussa da gwaje-gwaje, tare da kusan minti 45 don aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku fara da gwajin farko da jarabawar gwajin Social Studies kyauta ta ged.com don gano wane fannin ƙwarewa kowane mai koyo ya fi buƙata.",
      "Ku karanta Preamble da babbar murya tare, ku mayar da kowane buri zuwa kalmomin yau da kullum kafin masu koyo su rubuta takardunsu.",
      "Ku kasance ba tare da son kai ba a batutuwan siyasa: ku koyar da yadda gwamnati ke aiki da yadda ake auna shaida, ba wane ɓangare za a goyi baya ba.",
      "Ku yi amfani da teburori na gaske na yankinku (misali bayanan ayyuka ko kuɗin haya na gundumarku) don ƙarin atisayen jadawali, kuma ku duba lambobin a majiyar hukuma.",
      "Ku duba wace jarabawa jiharku ke amfani da ita (GED ko HiSET) kuma ku raba wuraren jarabawa na yankin da duk wani taimakon kuɗi."
    ]
  }
};

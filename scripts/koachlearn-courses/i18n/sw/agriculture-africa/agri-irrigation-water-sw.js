"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-irrigation-water.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_WATERNEEDS = { name: "FAO: Mwongozo wa mafunzo wa usimamizi wa maji ya umwagiliaji Na. 3: Mahitaji ya maji ya umwagiliaji (Irrigation Water Needs)", url: "https://www.fao.org/4/s2022e/s2022e00.htm" };
const FAO_HARVEST = { name: "FAO: Uvunaji wa maji, mwongozo wa kusanifu na kujenga mifumo ya kuvuna maji kwa mazao (Water Harvesting)", url: "https://www.fao.org/4/u3160e/u3160e00.htm" };
const FAO_DRIP = { name: "FAO: Kitabu cha kiufundi cha umwagiliaji kwa shinikizo (pamoja na mifumo ya matone ya gharama ndogo ya familia)", url: "https://www.fao.org/4/a1336e/a1336e.pdf" };
const FAO_SOLAR = { name: "FAO: Matarajio mazuri ya mifumo ya umwagiliaji inayotumia nishati ya jua", url: "https://www.fao.org/newsroom/detail/Positive-prospects-for-solar-powered-irrigation-systems/en" };
const FAO_SALINITY = { name: "FAO: Ubora wa maji kwa kilimo (chumvi, kusafisha udongo kwa maji na mifereji)", url: "https://www.fao.org/4/t0234e/t0234e03.htm" };
const WRA = { name: "Mamlaka ya Rasilimali za Maji, Kenya (Water Resources Authority, WRA; vibali vya kutumia maji)", url: "https://wra.go.ke" };

module.exports = {
  id: "agri-irrigation-water-sw",
  lang: "sw",
  translationOf: "agri-irrigation-water",
  category: "Agriculture (Africa)",
  name: "Umwagiliaji na Usimamizi wa Maji",
  skills: "Kujua lini zao linahitaji maji, Kuvuna maji ya mvua, Kuhifadhi maji kwa usalama, Kuweka kifaa cha matone cha gharama ndogo, Kupanga umwagiliaji bila kujaa maji au chumvi, Kuchagua pampu ikiwemo ya jua",
  outcome: "kupanga umwagiliaji wa kipande kidogo cha shamba: kukadiria lini zao lako linahitaji maji zaidi, kukusanya na kuhifadhi maji ya mvua, kuweka na kuendesha kifaa cha matone cha gharama ndogo kwa ratiba, kuzuia udongo kujaa maji na chumvi kujilimbikiza, na kuchagua pampu inayofaa.",
  about: [
    "Kozi hii ni kwa wakulima wadogo na wanaokua, wafanyakazi wa shamba na vijana wakulima nchini Kenya, Nigeria, Ghana na kote Afrika wanaotaka kulima hata wakati wa ukame, kupanda zao la pili wakati wa kiangazi, au kutumia maji waliyo nayo kwa busara zaidi. Inahusu mbinu za gharama ndogo unazoweza kuanza kwenye kipande kidogo, kama bustani ya nyumbani ya nyanya na sukuma wiki au kitalu cha miche ya kahawa.",
    "Sura ya 1 inahusu maji yanatoka wapi: mazao yanahitaji maji kiasi gani na lini, kuvuna maji ya mvua kutoka paa na mashambani, na kuyahifadhi kwa usalama. Sura ya 2 inahusu kuyapeleka kwenye zao: umwagiliaji wa matone wa gharama ndogo, kupanga ratiba bila udongo kujaa maji au chumvi kujilimbikiza, na kuchagua pampu, ikiwemo pampu za jua.",
    "Sheria na vibali vya maji vinatofautiana kwa nchi, kwa hiyo uliza mamlaka ya maji na afisa ugani kabla ya kuchimba kisima kirefu, kuvuta maji kutoka mtoni au kujenga bwawa kubwa. Kila somo linachukua kama dakika tano na linaisha na kazi kwenye shamba lako. Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andika mpango wa umwagiliaji wa ukurasa mmoja kwa kipande kidogo cha shamba (chako, au mfano kama mita za mraba 200 za nyanya karibu na Nakuru, au mita za mraba 500 za vitunguu na pilipili karibu na Kano): zao na hatua zake za ukuaji zinazohitaji maji zaidi, maji yatatoka wapi na unaweza kuhifadhi kiasi gani, mfumo wa matone au mwingine utakaotumia, ratiba ya kumwagilia ya kila wiki na jinsi utakavyokagua udongo, jinsi utakavyozuia udongo kujaa maji na chumvi kujilimbikiza, na pampu ungechagua na kwa nini.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakulima wadogo na wanaokua, wafanyakazi wa shamba na vijana wakulima nchini Kenya, Nigeria, Ghana na kote Afrika wanaotaka kulima wakati wa ukame, kupanda zao la kiangazi, au kutumia maji yao kwa busara zaidi kwenye vipande vidogo vya mboga, mahindi au miche.",
    startingPoint: "Wengi wanategemea mvua na humwagilia kwa mkono kwa makopo au ndoo wanapoweza. Wachache hukagua unyevu wa udongo kwenye kina cha mizizi, hujua hatua za zao lao zinazohitaji maji zaidi, huvuna maji ya paa au yanayotiririka shambani, huendesha kifaa cha matone, au hujua jinsi ya kuchagua ukubwa wa pampu.",
    gap: "Ukame wakati wa kutoa maua na kuzaa matunda ndio unapunguza mavuno zaidi, na maji yanayopotea, machafu au yanayosimamiwa vibaya huleta magonjwa, udongo kujaa maji na udongo wenye chumvi. Kupanga maji kwa kipande kidogo kunawasaidia wakulima kuvuna zaidi, kulima wakati wa kiangazi na kutumia pesa kidogo kwa maji na mafuta.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la maji linaelezwa",
      "Vifaa: simu ya kawaida na daftari; kipande kidogo cha shamba cha kujifunzia",
      "Pesa: mbinu za gharama ndogo kwanza; wanafunzi wanalinganisha bei za wauzaji wenyewe",
      "Sheria na vibali vya maji vinatofautiana kwa nchi: uliza mamlaka ya maji kabla ya kuchimba kisima, kujenga bwawa au kuvuta maji",
      "Usalama: mabwawa na matangi yanafunikwa na kuzungushiwa uzio; maji ya kunywa yanahitaji ushauri wa kuyatibu kutoka ofisi ya afya"
    ],
    prerequisites: "Hakuna. Kozi ya \"Afya na Rutuba ya Udongo\" inasaidia kuhusu matandazo na mifereji ya maji."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kwa zao lako kuu", action: "kutaja hatua zake za ukuaji zinazohitaji maji zaidi na kukagua unyevu wa udongo kwenye kina cha mizizi kwa mkono", standard: "ukiamua sawasawa kama umwagilie au usubiri" },
    { id: "O2", condition: "Kwa paa lako na ardhi yako", action: "kukadiria kiasi cha mvua ambacho paa linaweza kukusanya na kuchagua mbinu ya shambani ya kubakiza mvua kwenye ardhi yako", standard: "ukitumia kama lita 1 kwa kila mita ya mraba kwa kila milimita ya mvua, na ukipanga kwa kiasi kidogo zaidi" },
    { id: "O3", condition: "Kwa maji yaliyovunwa", action: "kuchagua mahali pa kuhifadhi maji na kuyaweka safi, yamefunikwa na kwa mujibu wa sheria", standard: "hifadhi ikiwa imefunikwa au imezungushiwa uzio na kibali chochote kimekaguliwa" },
    { id: "O4", condition: "Kwa kipande cha kama mita za mraba 100 hadi 500", action: "kuweka na kutunza kifaa cha matone kinachotumia mvuto", standard: "pipa likiwa angalau mita 1 juu, chujio safi na bila vitone vilivyoziba" },
    { id: "O5", condition: "Katika msimu mzima wa kilimo", action: "kuandaa ratiba ya kumwagilia ya kila wiki na kugundua mapema udongo kujaa maji na chumvi kujilimbikiza", standard: "ukikagua udongo kabla ya kila umwagiliaji" },
    { id: "O6", condition: "Maji yanapohitaji kupandishwa au kusafirishwa", action: "kulinganisha pampu za kukanyaga, za mafuta na za jua na kuorodhesha maswali ya kumuuliza muuzaji", standard: "ukitaja mahitaji ya maji ya kila siku, kimo cha kupandisha na umbali, na ukivuta maji ambayo zao linahitaji tu" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupata na kuhifadhi maji",
      lessons: [
        {
          objectives: ["O1"],
          title: "Zao lako linahitaji maji kiasi gani, na lini?",
          minutes: 5,
          goal: "Taja hatua za ukuaji za zao lako zinazohitaji maji zaidi na ukague unyevu wa udongo kwa mkono.",
          text: [
            "Mwongozo wa mafunzo wa FAO (Shirika la Chakula na Kilimo la Umoja wa Mataifa) kuhusu mahitaji ya maji ya umwagiliaji unaeleza kwamba maji anayohitaji zao yanategemea mambo matatu: hali ya hewa, aina ya zao, na hatua yake ya ukuaji. Siku za joto, jua, ukavu na upepo hufanya mazao yatumie maji zaidi; siku za baridi, mawingu na zisizo na upepo, kidogo. Mazao marefu yenye majani mengi hutumia zaidi kuliko madogo.",
            "Hatua ya ukuaji ndiyo muhimu zaidi katika kupanga. Zao linahitaji maji kidogo likiwa dogo, mengi zaidi wakati wa kutoa maua na wakati nafaka au matunda yanapojazwa, na kidogo linapokomaa. Mahindi huumizwa zaidi na ukame wakati wa kutoa maua ya juu (tassel) na nywele za hindi (silk); nyanya wakati wa kutoa maua na kufunga matunda; maharagwe wakati wa kutoa maua na kujaza maganda. Ukame katika hatua hizi unapunguza mavuno zaidi.",
            "Kagua udongo, si juu yake tu. Ingiza kidole au kijiti kidogo kwenye udongo karibu na mizizi, kina cha kama sm 10 hadi 15, au chimba shimo dogo na ukamue konzi ya udongo. Ukishikamana na kuhisi unyevu, subiri. Ukibomoka na kuhisi mkavu kwenye kina cha mizizi, ni wakati wa kumwagilia. Sehemu ya mvua inayonyesha hupotea kwa kutiririka au huzama chini sana; sehemu ambayo zao linaweza kutumia inaitwa mvua yenye manufaa (effective rainfall)."
          ],
          steps: ["Andika zao lako na idadi ya siku kutoka kupanda hadi kuvuna.", "Weka alama kwenye hatua zake zinazohitaji maji zaidi (kwa mfano mahindi: kutoa maua ya juu na nywele).", "Kila wiki, kagua udongo kwenye kina cha mizizi kwa kidole, kijiti au shimo.", "Andika hali ya hewa: siku za joto, upepo na ukavu zinamaanisha matumizi zaidi ya maji.", "Mwagilia kabla udongo kwenye kina cha mizizi haujakauka, hasa katika hatua zinazohitaji maji zaidi."],
          words: [["Mahitaji ya maji ya zao", "kiasi cha maji ambacho zao linatumia ili kukua vizuri."], ["Hatua ya ukuaji", "kipindi katika maisha ya zao, kama mche, kutoa maua au kukomaa."], ["Mvua yenye manufaa (effective rainfall)", "sehemu ya mvua inayobaki kwenye eneo la mizizi na ambayo zao linaweza kutumia."], ["Eneo la mizizi", "tabaka la udongo ambalo mizizi mingi ya zao iko."]],
          slides: [
            { title: "Mambo matatu yanaamua mahitaji ya maji (FAO)", bullets: ["Hali ya hewa: joto, jua, ukavu, upepo = maji zaidi", "Aina ya zao: refu na lenye majani mengi = maji zaidi", "Hatua ya ukuaji: zaidi wakati wa maua na kujaza matunda au nafaka"] },
            { title: "Hatua zinazohitaji maji zaidi", bullets: ["Mahindi: kutoa maua ya juu (tassel) na nywele (silk)", "Nyanya: kutoa maua na kufunga matunda", "Maharagwe: kutoa maua na kujaza maganda"] },
            { title: "Kagua udongo, si juu yake tu", bullets: ["Kidole au kijiti sm 10 hadi 15 ndani karibu na mizizi", "Unashikamana na una unyevu: subiri", "Unabomoka na ni mkavu: wakati wa kumwagilia"] }
          ],
          sources: [FAO_WATERNEEDS],
          tryIt: "Kwa zao moja unalolima, andika wiki baada ya kupanda ambapo linafikia hatua zake zinazohitaji maji zaidi. Kisha kagua udongo wako leo kwenye kina cha mizizi kwa kidole, kijiti au shimo dogo na uandike: una unyevu au mkavu.",
          youCanNow: "kusema lini zao lako linahitaji maji zaidi na kukagua unyevu wa udongo kwenye kina cha mizizi.",
          quickCheck: [
            { objective: "O1", q: "Maharagwe yanahitaji maji zaidi lini?", options: ["Mara baada ya kuvuna", "Wakati wa kutoa maua na kujaza maganda", "Yakiwa mbegu tu", "Maganda yakiwa makavu"], answer: 1, why: "Maharagwe huumizwa zaidi na ukame wakati wa kutoa maua na kujaza maganda." },
            { objective: "O1", q: "Unachimba shimo dogo karibu na mizizi. Udongo unabomoka na ni mkavu kwenye kina hicho. Unafanya nini?", options: ["Subiri wiki nyingine", "Mwagilia majani tu", "Weka mbolea badala yake", "Mwagilia zao sasa"], answer: 3, why: "Udongo ukibomoka na kuhisi mkavu kwenye kina cha mizizi, ni wakati wa kumwagilia." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuvuna maji ya mvua kutoka paa na mashambani",
          minutes: 5,
          goal: "Hesabu kiasi cha mvua ambacho paa lako linaweza kukusanya na uchague mbinu ya shambani ya kubakiza mvua kwenye ardhi yako.",
          text: [
            "Kuvuna maji ni kukamata mvua pale inaponyesha au inapotiririka, na kuyaweka kwa ajili ya mazao, mifugo au nyumbani. Mwongozo wa FAO wa kuvuna maji unaeleza mbinu nyingi za shambani zinazotumika maeneo makavu: mashimo ya kupandia (kama mashimo ya zai), matuta ya nusu duara, matuta ya kontua (yanayofuata usawa wa mteremko), vidimbwi vidogo vya umbo la almasi kuzunguka miti (negarim) na matuta ya mawe.",
            "Kukusanya maji ya paa ndio mwanzo rahisi zaidi. Kila milimita 1 ya mvua kwenye mita ya mraba 1 ya paa inatoa kama lita 1 ya maji. Paa la mita za mraba 50 mahali penye mvua ya mm 600 kwa mwaka linaweza kutoa hadi lita 30,000 kwa mwaka, ingawa sehemu fulani hupotea kila wakati, kwa hiyo panga kwa kiasi kidogo zaidi. Weka mifereji ya paa, bomba la maji ya kwanza (first flush) linalotupa maji machafu ya kwanza, na tangi lenye mfuniko.",
            "Maji yanayotiririka kutoka barabara, njia na miteremko yanaweza kuelekezwa kwenye kidimbwi (water pan) au bwawa la shamba lililowekewa karatasi ya plastiki. Mashimo ya kupandia yaliyojazwa mboji au samadi hukamata mvua moja kwa moja kwenye mizizi ya mahindi, mtama au miti michanga ya matunda. Anza kidogo na uangalie maji yanavyotiririka kwenye ardhi yako katika mvua kubwa ijayo."
          ],
          steps: ["Pima paa lako: urefu mara upana kwa mita.", "Tafuta kiasi cha mvua kwa mwaka kutoka idara ya hali ya hewa au afisa ugani.", "Zidisha eneo la paa kwa mvua kwa mm upate lita, kisha panga kwa kiasi kidogo zaidi kwa sababu ya upotevu.", "Weka mifereji ya paa, bomba la maji ya kwanza na tangi lenye mfuniko.", "Chagua mbinu moja ya shambani (mashimo, matuta au matuta ya kontua) kwa kipande kimoja."],
          words: [["Kuvuna maji", "kukamata na kuweka maji ya mvua au yanayotiririka kwa matumizi ya baadaye."], ["Kukusanya maji ya paa", "kukusanya mvua kutoka paa kupitia mifereji hadi kwenye tangi."], ["Maji ya kwanza (first flush)", "bomba linalotupa mvua ya kwanza, iliyo chafu zaidi, kutoka paa."], ["Shimo la zai", "shimo dogo la kupandia lililojazwa samadi linalokamata mvua kwenye mizizi."]],
          slides: [
            { title: "Kamata mvua pale inaponyesha", bullets: ["Mashimo ya kupandia (zai), matuta ya nusu duara", "Matuta ya kontua, matuta ya mawe", "Vidimbwi vya negarim kuzunguka miti (FAO)"] },
            { title: "Hesabu ya paa", bullets: ["Mvua mm 1 kwenye mita ya mraba 1 = kama lita 1", "Paa m2 50 x mm 600 = hadi lita 30,000 kwa mwaka", "Panga kwa kidogo zaidi: sehemu fulani hupotea kila wakati"] },
            { title: "Iweke tayari", bullets: ["Mifereji ya paa na bomba la maji ya kwanza", "Tangi lenye mfuniko", "Elekeza maji ya barabara kwenye kidimbwi chenye karatasi ya plastiki"] }
          ],
          sources: [FAO_HARVEST],
          tryIt: "Pima paa la nyumba yako au stoo na utafute kiasi cha mvua kwa mwaka. Hesabu lita ngapi linaweza kukusanya kwa mwaka. Tumia kikokotoo cha simu yako, au muulize msaidizi wa AI kwenye simu akague hesabu yako.",
          youCanNow: "kukadiria kiasi cha maji ya mvua unachoweza kuvuna na kuchagua mbinu ya shambani ya kubakiza mvua kwenye ardhi yako.",
          quickCheck: [
            { objective: "O2", q: "Ipi ni mbinu ya shambani inayobakiza mvua kwenye ardhi yako?", options: ["Mashimo ya kupandia au matuta ya kontua", "Kuchoma nyasi", "Kulima juu na chini ya mteremko", "Kuacha udongo wazi"], answer: 0, why: "Mashimo ya kupandia, matuta na matuta ya kontua hukamata mvua pale inaponyesha." },
            { objective: "O2", q: "Katika mvua kubwa ijayo, maji yanakimbia kando ya barabara ya shamba lako. Ungefanya nini nayo?", options: ["Yaache yaende mtoni", "Funga barabara", "Yaelekeze kwenye kidimbwi au bwawa la shamba lenye karatasi ya plastiki", "Chimba shimo katikati ya barabara"], answer: 2, why: "Maji yanayotiririka kutoka barabara na njia yanaweza kuelekezwa kwenye kidimbwi au bwawa lenye karatasi ya plastiki kwa matumizi ya baadaye." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuhifadhi maji kwa usalama",
          minutes: 4,
          goal: "Chagua mahali pa kuhifadhi maji na uyaweke safi, yamefunikwa na kwa mujibu wa sheria.",
          text: [
            "Hifadhi za kawaida ni matangi ya plastiki au ya saruji na waya (ferro-cement), matangi ya chini ya ardhi, na vidimbwi au mabwawa ya shamba. Mabwawa hupoteza maji mengi ardhini yasipowekewa karatasi ya plastiki (kwa mfano dam liner), na mengi kwa jua yasipowekewa kivuli au mfuniko.",
            "Weka maji yaliyohifadhiwa safi na salama. Funika matangi na mabwawa ili kuzuia uchafu, wanyama na watoto, na kuzuia mbu kuzaliana. Zungushia mabwawa uzio. Safisha mifereji ya paa na matangi kabla ya mvua. Maji ya kunywa yanahitaji uangalifu zaidi kuliko maji ya mazao; uliza ofisi ya afya jinsi ya kuyatibu.",
            "Matumizi makubwa ya maji yanaweza kuhitaji kibali. Nchini Kenya, Mamlaka ya Rasilimali za Maji (WRA) inasimamia matumizi ya maji na kutoa vibali, kwa mfano kwa visima virefu na kuvuta maji kutoka mitoni. Nchi nyingine zina mamlaka zao za maji. Uliza kabla ya kuchimba kisima, kujenga bwawa au kuvuta maji."
          ],
          steps: ["Amua maji ni kwa ajili ya nini: mazao, mifugo au nyumbani.", "Chagua hifadhi: tangi, tangi la chini ya ardhi, au bwawa lenye karatasi ya plastiki.", "Lifunike na uzungushie mabwawa uzio.", "Safisha mifereji ya paa na matangi kabla ya kila msimu wa mvua.", "Kabla ya kuchimba kisima au kuvuta maji mtoni, uliza mamlaka ya maji."],
          words: [["Kidimbwi (water pan)", "bwawa lililochimbwa linalokusanya maji yanayotiririka."], ["Karatasi ya bwawa (dam liner)", "karatasi imara ya plastiki inayozuia bwawa kuvuja ardhini."], ["Kibali", "ruhusa rasmi ya kutumia au kuchukua maji."]],
          slides: [
            { title: "Hifadhi", bullets: ["Matangi ya plastiki au ya saruji na waya", "Matangi ya chini ya ardhi", "Vidimbwi na mabwawa ya shamba yenye karatasi ya plastiki"] },
            { title: "Yaweke salama", bullets: ["Funika: uchafu, wanyama, mbu", "Zungushia mabwawa uzio; watoto huzama mabwawani", "Safisha mifereji ya paa na matangi kabla ya mvua"] },
            { title: "Kagua sheria", bullets: ["Kenya: Mamlaka ya Rasilimali za Maji (WRA)", "Nchi nyingine: mamlaka ya maji ya nchi yako", "Uliza kabla ya kuchimba kisima, kujenga bwawa au kuvuta maji"] }
          ],
          sources: [WRA],
          tryIt: "Andika hifadhi ipi inafaa shamba lako na bajeti yako, jinsi utakavyoifunika na kuizungushia uzio, na jina la ofisi katika nchi yako ambayo ungeiuliza kabla ya kuchimba kisima au kuvuta maji.",
          youCanNow: "kuchagua hifadhi ya maji, kuiweka salama, na kujua lini unahitaji kibali.",
          quickCheck: [
            { objective: "O3", q: "Hifadhi ipi hupoteza maji mengi zaidi isipowekewa karatasi ya plastiki na mfuniko?", options: ["Tangi la plastiki lenye mfuniko", "Tangi la saruji na waya", "Tangi la chini ya ardhi", "Bwawa la shamba lililo wazi bila karatasi ya plastiki"], answer: 3, why: "Mabwawa hupoteza maji ardhini yasipowekewa karatasi ya plastiki, na kwa jua yasipowekewa kivuli au mfuniko." },
            { objective: "O3", q: "Unataka kutumia sehemu ya maji ya mvua uliyohifadhi kwa kunywa. Unafanya nini?", options: ["Yanywe moja kwa moja kutoka bwawani", "Uliza ofisi ya afya jinsi ya kuyatibu", "Weka mbolea ili kuyasafisha", "Tumia maji ya kwanza ya paa"], answer: 1, why: "Maji ya kunywa yanahitaji uangalifu zaidi kuliko maji ya mazao; uliza ofisi ya afya jinsi ya kuyatibu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupata na kuhifadhi maji",
        questions: [
          { objective: "O1", q: "Mahindi huumia zaidi kwa ukame lini?", options: ["Wakati wa kutoa maua ya juu (tassel) na nywele (silk)", "Mara baada ya kuvuna", "Kabla ya kupanda", "Magunzi yakiwa makavu"], answer: 0, why: "Hatua za kutoa maua ndizo nyeti zaidi; ukame wakati huo unapunguza mavuno zaidi." },
          { objective: "O1", q: "Unapaswa kukagua vipi kama zao linahitaji maji?", options: ["Angalia juu ya udongo tu", "Subiri hadi majani yafe", "Kagua unyevu kwenye kina cha mizizi kwa kidole, kijiti au shimo dogo", "Mwagilia kila saa"], answer: 2, why: "Mizizi inahisi udongo ulio chini ya uso, kwa hiyo kagua hapo." },
          { objective: "O2", q: "Paa lina mita za mraba 40 na linapata mvua ya mm 500 kwa mwaka. Linaweza kukusanya kama kiasi gani zaidi?", options: ["Lita 200", "Lita 2,000", "Lita 540", "Lita 20,000"], answer: 3, why: "40 x 500 = lita 20,000; kiasi halisi kitakachokusanywa kitakuwa kidogo kidogo zaidi." },
          { objective: "O2", q: "Bomba la maji ya kwanza (first flush) linafanya nini?", options: ["Linapandisha maji mlimani", "Linatupa mvua ya kwanza, iliyo chafu zaidi, kutoka paa", "Linapasha maji moto", "Linapima mvua"], answer: 1, why: "Linazuia vumbi na kinyesi cha ndege kuingia kwenye tangi." },
          { objective: "O3", q: "Kwa nini ufunike tangi au bwawa la maji?", options: ["Kuzuia uchafu na wanyama na kuzuia mbu kuzaliana", "Kufanya maji yawe na joto zaidi", "Kuyafanya mazito zaidi", "Mifuniko haina faida"], answer: 0, why: "Kufunika kunaweka maji safi na salama." }
        ]
      }
    },
    {
      name: "Sura 2: Kupeleka maji kwenye zao",
      lessons: [
        {
          objectives: ["O4"],
          title: "Umwagiliaji wa matone wa gharama ndogo",
          minutes: 6,
          goal: "Weka na utunze kifaa cha matone cha ndoo au pipa kwa kipande kidogo cha shamba.",
          text: [
            "Umwagiliaji wa matone unapeleka maji polepole kwenye shina la kila mmea kupitia mabomba membamba yenye matundu madogo (vitone, kwa Kiingereza emitters). Maji machache hupotea kwa jua na upepo, majani yanabaki makavu kwa hiyo magonjwa ni machache, na magugu kati ya mistari yanapata maji kidogo.",
            "Kitabu cha FAO kuhusu umwagiliaji kwa shinikizo kinaeleza mifumo ya matone ya gharama ndogo ya familia kwa vipande vya kama mita za mraba 100 hadi 500: ndoo au pipa lililoinuliwa angalau mita 1 juu ya matuta linalisha chujio, bomba kuu na mipira ya matone kando ya kila mstari. Mvuto unatoa shinikizo, kwa hiyo hakuna pampu inayohitajika kuendesha mfumo. Vifaa vinauzwa na maduka ya pembejeo za kilimo (agrovet) na wauzaji wa vifaa vya umwagiliaji; linganisha bei na uulize kuhusu vipuri.",
            "Kuziba ndilo tatizo kuu. Tumia maji safi, acha chujio mahali pake na ulisafishe mara kwa mara, na safisha kwa maji ncha za mipira ya matone mara kwa mara. Funika udongo kwa matandazo juu ya mipira ya matone ili kupunguza zaidi maji yanayopotea kwa mvuke. Kagua kila kitone kinadondosha maji; mmea mkavu kwa kawaida unamaanisha tundu limeziba."
          ],
          steps: ["Sawazisha matuta na utandaze mipira ya matone kando ya kila mstari wa mimea.", "Inua ndoo au pipa juu ya kiunzi angalau mita 1 juu ya matuta.", "Unganisha pipa, bomba la kufungulia, chujio, bomba kuu na mipira ya matone; funga ncha za mipira.", "Jaza maji safi, fungua bomba na ukague kila kitone kinadondosha maji.", "Weka matandazo juu ya mipira.", "Safisha chujio na usafishe ncha za mipira kila wiki moja au mbili."],
          words: [["Umwagiliaji wa matone", "kumwagilia mimea tone kwa tone kwenye mizizi kupitia mabomba membamba."], ["Kitone (emitter)", "tundu dogo au kidondoshi kinachotoa maji karibu na kila mmea."], ["Chujio", "kichungi kinachozuia uchafu kuziba vitone."], ["Kwa mvuto (gravity-fed)", "maji yanasukumwa na kimo cha tangi la maji, si na pampu."]],
          slides: [
            { title: "Kwa nini matone", bullets: ["Maji yanakwenda kwenye mizizi", "Machache hupotea kwa jua na upepo", "Majani makavu, magonjwa machache na magugu machache"] },
            { title: "Kifaa cha matone cha familia (FAO)", bullets: ["Kwa vipande vya kama mita za mraba 100 hadi 500", "Ndoo au pipa angalau m 1 juu ya matuta", "Chujio, bomba kuu, mipira ya matone kando ya mistari"] },
            { title: "Kiweke kifanye kazi", bullets: ["Maji safi na chujio safi", "Safisha ncha za mipira mara kwa mara", "Kagua kila kitone; weka matandazo juu ya mipira"] }
          ],
          sources: [FAO_DRIP],
          tryIt: "Chora mpangilio wa matone kwa kipande kidogo: pipa litasimama wapi (angalau m 1 juu), chujio, bomba kuu na kila mpira wa matone. Kisha uliza wauzaji wawili au maduka mawili ya pembejeo bei ya kifaa cha ukubwa huo na uandike bei zote mbili.",
          youCanNow: "kuweka, kuendesha na kutunza kifaa cha matone cha gharama ndogo kinachotumia mvuto.",
          quickCheck: [
            { objective: "O4", q: "Kitone kwenye mpira wa matone ni nini?", options: ["Tangi la maji", "Pampu", "Tundu dogo au kidondoshi kinachotoa maji kwenye kila mmea", "Chujio"], answer: 2, why: "Vitone ni matundu madogo yanayodondosha maji kwenye shina la kila mmea." },
            { objective: "O4", q: "Maji yako yanatoka kwenye bwawa lenye matope. Unalindaje kifaa chako cha matone?", options: ["Acha chujio mahali pake, lisafishe mara kwa mara na usafishe ncha za mipira", "Ondoa chujio ili maji yatiririke haraka", "Usikague vitone kamwe", "Endesha kifaa saa sita mchana tu"], answer: 0, why: "Maji safi, chujio safi na kusafisha mipira mara kwa mara huzuia kuziba, tatizo kuu la matone." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kupanga ratiba: bila udongo kujaa maji wala chumvi",
          minutes: 5,
          goal: "Andaa ratiba ya kumwagilia ya kila wiki na ugundue mapema udongo kujaa maji na chumvi kujilimbikiza.",
          text: [
            "Ratiba inajibu maswali mawili: lini kumwagilia na kiasi gani. Mwagilia asubuhi mapema au jioni, wakati maji machache hupotea kwa jua. Mwagilia mara nyingi zaidi wakati wa joto na upepo na katika hatua zinazohitaji maji zaidi, na usimwagilie baada ya mvua nzuri. Endelea kukagua udongo kwenye kina cha mizizi; ratiba ni mwongozo, udongo una neno la mwisho.",
            "Maji mengi mno yana madhara kama maji kidogo mno. Udongo uliojaa maji hauna hewa kwa mizizi: mimea inageuka manjano na kunyauka ingawa udongo ni mbichi, na mizizi inaoza. Dalili ni maji yaliyosimama, harufu ya uchachu na rangi ya manjano. Mwagilia kidogo, fungua mifereji, na tumia matuta yaliyoinuliwa au matuta kwenye udongo mzito wa mfinyanzi.",
            "FAO inaeleza kwamba chumvi hujilimbikiza wakati maji ya umwagiliaji yanaleta chumvi nyingi kuliko inayotoka, na kwamba kumwagilia kupita kiasi na mifereji mibaya ni sababu za kawaida. Angalia ganda jeupe juu ya udongo, kingo za majani zinazoungua, na ukuaji mbaya. Mifereji mizuri, matandazo na maji ya kutosha (si mengi mno) yanasaidia. Ukiona dalili hizi, au ukitumia maji ya kisima kirefu katika eneo kavu, muulize afisa ugani au maabara ya udongo apime maji na udongo."
          ],
          steps: ["Andika mpango wa wiki: siku zipi, asubuhi au jioni, kwa muda gani.", "Mwagilia zaidi katika hatua zinazohitaji maji zaidi na wiki za joto na upepo.", "Usimwagilie baada ya mvua nzuri.", "Kagua udongo kwenye kina cha mizizi kabla ya kila umwagiliaji.", "Angalia maji yaliyosimama, harufu ya uchachu na rangi ya manjano (udongo kujaa maji).", "Angalia ganda jeupe na kingo za majani zilizoungua (chumvi); omba maji na udongo vipimwe."],
          words: [["Ratiba ya umwagiliaji", "mpango wa lini na kiasi gani cha kumwagilia."], ["Udongo kujaa maji", "udongo uliojaa maji kiasi kwamba mizizi haipati hewa."], ["Chumvi kwenye udongo (salinity)", "chumvi nyingi mno kwenye udongo au maji, inayodhuru mazao."], ["Mifereji ya maji (drainage)", "njia ambayo maji ya ziada yanatoka kwenye udongo."]],
          slides: [
            { title: "Lini na kiasi gani", bullets: ["Mwagilia asubuhi mapema au jioni", "Zaidi katika hatua zinazohitaji maji na wiki za joto na upepo", "Usimwagilie baada ya mvua nzuri; udongo unaamua"] },
            { title: "Udongo kujaa maji", bullets: ["Maji yaliyosimama, harufu ya uchachu, mimea ya manjano inayonyauka", "Mwagilia kidogo na ufungue mifereji", "Matuta yaliyoinuliwa au matuta kwenye mfinyanzi mzito"] },
            { title: "Chumvi kujilimbikiza (FAO)", bullets: ["Inasababishwa na kumwagilia kupita kiasi na mifereji mibaya", "Ganda jeupe, kingo za majani zilizoungua, ukuaji mbaya", "Toa maji vizuri, weka matandazo, pima maji na udongo"] }
          ],
          sources: [FAO_WATERNEEDS, FAO_SALINITY],
          tryIt: "Andika ratiba ya kumwagilia ya wiki moja kwa zao moja: siku, wakati wa siku na kwa muda gani. Kando yake, andika dalili mbili za udongo kujaa maji na mbili za chumvi kujilimbikiza utakazoangalia kila unapomwagilia.",
          youCanNow: "kupanga ratiba ya umwagiliaji na kugundua udongo kujaa maji na chumvi kujilimbikiza kabla havijaharibu zao.",
          quickCheck: [
            { objective: "O5", q: "Ratiba ya kumwagilia inaamua nini?", options: ["Mbegu ipi ya kununua", "Lini kumwagilia na kiasi gani", "Wapi kuuza", "Pampu ipi ya kununua"], answer: 1, why: "Ratiba inajibu lini kumwagilia na kiasi gani, na ukaguzi wa udongo una neno la mwisho." },
            { objective: "O5", q: "Unamwagilia kwa maji ya kisima kirefu katika eneo kavu, na ukuaji unazidi kuwa mbaya kila msimu. Unafanya nini?", options: ["Mwagilia mara mbili zaidi", "Acha kumwagilia kabisa", "Weka mbolea zaidi", "Muulize afisa ugani au maabara ya udongo apime maji na udongo"], answer: 3, why: "Maji ya visima virefu katika maeneo kavu yanaweza kuleta chumvi; kipimo cha maji na udongo kinaonyesha tatizo ni nini." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuchagua pampu, ikiwemo pampu za jua",
          minutes: 5,
          goal: "Linganisha pampu za kukanyaga, za mafuta na za jua na uorodheshe maswali ya kumuuliza muuzaji.",
          text: [
            "Maji yakiwa chini au mbali na kipande chako, unahitaji pampu. Pampu za kukanyaga na za mkono ni rahisi kwa bei na zinatumia nguvu zako mwenyewe, nzuri kwa vipande vidogo karibu na maji yaliyo karibu na uso wa ardhi. Pampu za petroli na dizeli ni rahisi kununua na kuhamisha, lakini mafuta na matengenezo yanagharimu pesa kila wiki. Pampu za jua zinagharimu zaidi kununua lakini zinatumia mwanga wa jua bure, kwa hiyo gharama za kuziendesha ni ndogo sana.",
            "Ili kuchagua, jua mambo matatu: unahitaji maji kiasi gani kila siku, maji yanapaswa kupandishwa juu kiasi gani (kutoka usawa wa maji hadi tangi au shamba), na yanapaswa kusafiri umbali gani. Muuzaji anahitaji haya ili kuchagua ukubwa wa pampu. Pampu ndogo mno haitatoa maji ya kutosha; kubwa mno inapoteza pesa.",
            "FAO inaonyesha hatari moja ya pampu za jua: kwa sababu kila saa ya ziada ya kuvuta maji ni bure, wakulima wanaweza kuvuta maji mengi kuliko mto au maji ya chini ya ardhi yanavyoweza kuhimili. Vuta maji ambayo zao lako linahitaji tu, gawana maji kwa haki na majirani, na fuata sheria za mamlaka ya maji. Weka paneli safi na salama, na uombe dhamana (warranty), vipuri na huduma baada ya mauzo kwa maandishi. Wauzaji wengine wanatoa mipango ya kulipa kidogo kidogo (pay-as-you-go); soma bei kamili na masharti kwanza."
          ],
          steps: ["Hesabu maji yanayohitajika kwa siku kwa kipande chako.", "Pima kimo cha kupandisha: kutoka usawa wa maji hadi tangi au shamba.", "Pima umbali kutoka chanzo hadi kipande.", "Linganisha pampu ya kukanyaga, ya mafuta na ya jua kwa bei ya kununua, gharama ya kuendesha na kazi.", "Muombe muuzaji ukubwa unaofaa, dhamana, vipuri na huduma kwa maandishi.", "Kagua vibali vya maji kabla ya kuvuta maji kutoka mtoni au kisima kirefu."],
          words: [["Pampu ya kukanyaga", "pampu inayoendeshwa kwa miguu ya kupandisha maji kutoka vyanzo vilivyo karibu na uso wa ardhi."], ["Pampu ya jua", "pampu inayoendeshwa na paneli za jua."], ["Kimo cha kupandisha (head)", "urefu ambao pampu inapaswa kupandisha maji."], ["Kuchukua maji kupita kiasi (over-abstraction)", "kuchukua maji mengi kutoka mto au chini ya ardhi kuliko asili inavyorudisha."]],
          slides: [
            { title: "Aina za pampu", bullets: ["Ya kukanyaga au ya mkono: bei rahisi, nguvu zako mwenyewe", "Ya petroli au dizeli: rahisi kununua, ghali kuendesha", "Ya jua: ghali kununua, gharama ndogo sana ya kuendesha"] },
            { title: "Chagua ukubwa sahihi", bullets: ["Maji yanayohitajika kwa siku", "Kimo cha kupandisha: juu kiasi gani", "Umbali: mbali kiasi gani"] },
            { title: "Pampu ya jua: itumie kwa busara (FAO)", bullets: ["Kuvuta bure kunaweza kuleta kuvuta kupita kiasi", "Vuta maji ambayo zao linahitaji tu", "Fuata sheria za mamlaka ya maji ya nchi yako"] },
            { title: "Muulize muuzaji", bullets: ["Ukubwa unaofaa kimo chako cha kupandisha na umbali", "Dhamana, vipuri na huduma kwa maandishi", "Bei kamili na masharti ya mpango wowote wa kulipa kidogo kidogo"] }
          ],
          sources: [FAO_SOLAR, WRA],
          tryIt: "Kazi ya mwisho: andika mpango wako wa umwagiliaji wa ukurasa mmoja. Weka hatua za zao lako zinazohitaji maji zaidi, chanzo chako cha maji na hifadhi, mfumo wako wa matone au mwingine, ratiba ya kila wiki, jinsi utakavyozuia udongo kujaa maji na chumvi, na pampu ungechagua pamoja na kimo cha kupandisha, umbali na maji unayohitaji kila siku.",
          youCanNow: "kuchagua aina sahihi ya pampu na kuandaa mpango kamili wa umwagiliaji kwa kipande kidogo cha shamba.",
          quickCheck: [
            { objective: "O6", q: "Pampu ipi inatumia nguvu zako mwenyewe na inafaa kipande kidogo karibu na maji yaliyo karibu na uso wa ardhi?", options: ["Pampu ya kukanyaga au ya mkono", "Pampu kubwa ya dizeli", "Mfumo mkubwa wa jua", "Hakuna pampu kabisa"], answer: 0, why: "Pampu za kukanyaga na za mkono ni rahisi kwa bei na zinafaa vipande vidogo karibu na maji yaliyo karibu na uso wa ardhi." },
            { objective: "O6", q: "Pampu yako mpya ya jua inaweza kufanya kazi siku nzima bure, lakini mto unapungua. Unafanya nini?", options: ["Vuta siku nzima kwa sababu ni bure", "Uza maji ya ziada", "Vuta maji ambayo zao linahitaji tu na ugawane maji kwa haki na majirani", "Hamisha pampu juu zaidi ya mto"], answer: 2, why: "Kuvuta bure kunaweza kuchukua maji mengi mno; vuta maji ambayo zao linahitaji tu na ufuate sheria za mamlaka ya maji." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kupeleka maji kwenye zao",
        questions: [
          { objective: "O4", q: "Tatizo kuu la kuzuia kwenye vifaa vya matone ni lipi?", options: ["Shinikizo kubwa mno", "Vitone vilivyoziba", "Mimea mingi mno", "Majani mabichi"], answer: 1, why: "Uchafu huziba vitone; chujio safi na kusafisha mipira huzuia hilo." },
          { objective: "O4", q: "Pipa la kifaa cha matone kinachotumia mvuto linapaswa kuinuliwa juu kiasi gani?", options: ["Chini ardhini", "Kuzikwa chini ya matuta", "Angalau mita 1 juu ya matuta", "Haijalishi"], answer: 2, why: "FAO inasema mapipa yanapaswa kuinuliwa angalau mita 1 ili kutoa shinikizo la kutosha." },
          { objective: "O5", q: "Mimea ni ya manjano na inanyauka, udongo una harufu ya uchachu na maji yamesimama. Tatizo ni nini?", options: ["Maji kidogo mno", "Jua jingi mno", "Chumvi hewani", "Udongo kujaa maji"], answer: 3, why: "Maji yaliyosimama na harufu ya uchachu yanamaanisha mizizi haina hewa." },
          { objective: "O5", q: "Unaona ganda jeupe juu ya udongo na kingo za majani zilizoungua. Unapaswa kufanya nini?", options: ["Omba maji na udongo vipimwe na uboreshe mifereji", "Mwagilia zaidi sana kila siku", "Ongeza chumvi zaidi", "Lipuuze"], answer: 0, why: "Hizi ni dalili za chumvi kujilimbikiza; FAO inaihusisha na kumwagilia kupita kiasi na mifereji mibaya." },
          { objective: "O6", q: "Kwa nini FAO inaonya kuhusu pampu za jua?", options: ["Hazifanyi kazi kamwe", "Zina kelele mno", "Kuvuta bure kunaweza kusababisha kuchukua maji mengi mno", "Zinahitaji petroli"], answer: 2, why: "Gharama ya kuendesha ikiwa karibu hakuna, wakulima wanaweza kuvuta kupita kiasi kutoka mito na maji ya chini ya ardhi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Umwagiliaji na Usimamizi wa Maji",
    questions: [
      { objective: "O1", q: "Kwa mujibu wa FAO, mahitaji ya maji ya zao yanategemea:", options: ["Bei ya maji tu", "Hali ya hewa, aina ya zao na hatua ya ukuaji", "Rangi ya zao", "Siku ya wiki"], answer: 1, why: "FAO inataja hali ya hewa, aina ya zao na hatua ya ukuaji." },
      { objective: "O1", q: "Hali ipi ya hewa hufanya mazao yatumie maji mengi zaidi?", options: ["Baridi na mawingu", "Shwari na ukungu", "Joto, jua, ukavu na upepo", "Baridi na mvua"], answer: 2, why: "Joto, jua, hewa kavu na upepo huongeza matumizi ya maji." },
      { objective: "O1", q: "Nyanya huathirika zaidi na ukosefu wa maji wakati wa:", options: ["Kutoa maua na kufunga matunda", "Kununua mbegu", "Baada ya mavuno ya mwisho", "Shamba likiwa tupu"], answer: 0, why: "Kutoa maua na kufunga matunda ndizo hatua zinazohitaji maji zaidi." },
      { objective: "O1", q: "Mvua yenye manufaa ni:", options: ["Mvua yote inayonyesha", "Mvua inayonyesha usiku", "Mvua inayopimwa na redio", "Sehemu ya mvua ambayo zao linaweza kutumia kweli"], answer: 3, why: "Sehemu ya mvua hutiririka au huzama chini sana; inayobaki ndiyo yenye manufaa." },
      { objective: "O2", q: "Mvua ya mm 1 kwenye mita ya mraba 1 ya paa inatoa maji kama kiasi gani?", options: ["Lita 1", "Lita 10", "Lita 100", "Lita 1,000"], answer: 0, why: "Mm 1 kwenye mita ya mraba 1 ni kama lita 1." },
      { objective: "O2", q: "Shimo la zai ni:", options: ["Kisima kirefu", "Shimo dogo la kupandia lenye samadi linalokamata mvua kwenye mizizi", "Aina ya pampu", "Tangi la maji"], answer: 1, why: "Mashimo ya zai hukusanya mvua na virutubisho kwenye mmea." },
      { objective: "O3", q: "Kwa nini uweke karatasi ya plastiki kwenye bwawa la shamba?", options: ["Kufanya maji yawe na chumvi", "Kuvutia wanyama", "Kuzuia maji kuvuja ardhini", "Karatasi haihitajiki kamwe"], answer: 2, why: "Mabwawa yasiyo na karatasi hupoteza maji mengi kwenye udongo." },
      { objective: "O3", q: "Kwa nini mabwawa ya shamba yazungushiwe uzio?", options: ["Kuwaweka watoto na wanyama salama", "Kuyafanya marefu zaidi kwenda chini", "Kuzuia mvua", "Kupasha maji moto"], answer: 0, why: "Mabwawa yaliyo wazi ni hatari ya kuzama." },
      { objective: "O3", q: "Nchini Kenya, chombo kipi kinatoa vibali vya kutumia maji, kwa mfano kwa visima virefu?", options: ["Kenya Bureau of Standards", "Kenya Revenue Authority", "Kenya Power", "Mamlaka ya Rasilimali za Maji (WRA)"], answer: 3, why: "WRA inasimamia matumizi ya maji na kutoa vibali." },
      { objective: "O4", q: "Faida kuu ya umwagiliaji wa matone ni:", options: ["Unalowesha majani", "Maji yanakwenda kwenye mizizi na machache yanapotea", "Hauhitaji maji", "Unafanya magugu yakue haraka"], answer: 1, why: "Matone yanapeleka maji kwenye mizizi bila upotevu mwingi." },
      { objective: "O4", q: "FAO inaeleza vifaa vya matone vya familia kuwa vinafaa vipande vya kama:", options: ["Mita za mraba 1 hadi 5", "Hekta 100", "Ukubwa wowote wa kaunti nzima", "Mita za mraba 100 hadi 500"], answer: 3, why: "Kitabu cha FAO kinaeleza mfumo rahisi wa matone wa familia kwa kama mita za mraba 100 hadi 500." },
      { objective: "O4", q: "Mmea mmoja kwenye mpira wako wa matone ni mkavu. Sababu inayowezekana zaidi ni:", options: ["Kitone kilichoziba", "Jua jingi mno kwenye pipa", "Mmea ni wa kijani mno", "Chujio ni safi mno"], answer: 0, why: "Mmea mkavu kwa kawaida unamaanisha kitone chake kimeziba." },
      { objective: "O4", q: "Kwa nini uweke matandazo juu ya mipira ya matone?", options: ["Kuificha kutoka jua tu", "Kufanya maji yawe ya moto zaidi", "Kuziba vitone", "Kupunguza maji yanayopotea kwa mvuke kutoka udongoni"], answer: 3, why: "Matandazo huzuia unyevu wa udongo kupotea kwa mvuke." },
      { objective: "O5", q: "Wakati bora wa siku wa kumwagilia kwa kawaida ni:", options: ["Saa sita mchana kwenye jua kali", "Asubuhi mapema au jioni", "Usiku wa manane tu", "Wakati wowote; hakuna tofauti"], answer: 1, why: "Maji machache hupotea kwa jua wakati wa sehemu za baridi za siku." },
      { objective: "O5", q: "Jana usiku mvua ilinyesha vizuri. Ratiba yako inasema mwagilia leo. Unafanya nini?", options: ["Mwagilia mara mbili", "Mwagilia kama ilivyopangwa hata hivyo", "Kagua udongo; usimwagilie kama una unyevu kwenye kina cha mizizi", "Toa maji yote shambani"], answer: 2, why: "Udongo una neno la mwisho; usimwagilie baada ya mvua nzuri." },
      { objective: "O5", q: "Kwenye mfinyanzi mzito unaojaa maji kwa urahisi, mbinu nzuri ni:", options: ["Furika shamba", "Ongeza maji zaidi", "Panda kwenye bonde", "Matuta yaliyoinuliwa au matuta na mifereji iliyo wazi"], answer: 3, why: "Matuta yaliyoinuliwa na mifereji huruhusu maji ya ziada kutoka." },
      { objective: "O5", q: "Kwa mujibu wa FAO, sababu ya kawaida ya chumvi kujilimbikiza kwenye udongo unaomwagiliwa ni:", options: ["Kuweka matandazo", "Kupanda mikunde", "Kumwagilia kupita kiasi na mifereji mibaya", "Kutumia chujio"], answer: 2, why: "Chumvi nyingi huingia kuliko inayotoka kunapokuwa na maji mengi mno na mifereji mibaya." },
      { objective: "O6", q: "Ili kuchagua ukubwa wa pampu, muuzaji anahitaji kujua:", options: ["Rangi unayoipenda", "Maji yanayohitajika kwa siku, kimo cha kupandisha na umbali", "Bajeti yako tu", "PIN ya benki yako"], answer: 1, why: "Mahitaji ya maji, kimo cha kupandisha na umbali vinaamua pampu sahihi." },
      { objective: "O6", q: "Ukilinganisha na pampu ya petroli, pampu ya jua kwa kawaida:", options: ["Inagharimu zaidi kununua lakini kidogo sana kuendesha", "Inagharimu kidogo kununua na zaidi kuendesha", "Inahitaji dizeli", "Inafanya kazi usiku tu"], answer: 0, why: "Pampu za jua zina bei kubwa ya kununua lakini zinatumia mwanga wa jua bure." },
      { objective: "O6", q: "Muuzaji anakupa pampu ya jua ya kulipa kidogo kidogo (pay-as-you-go). Unapaswa kufanya nini kwanza?", options: ["Saini mara moja", "Mpe PIN yako", "Soma bei kamili, masharti, dhamana na huduma kwa maandishi", "Nunua mbili"], answer: 2, why: "Jua gharama kamili na msaada utakaopata kabla ya kusaini." }
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
      9,
      11,
      13,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya mpango na uikague tena.",
    criteria: [
      {
        name: "Zao na hatua zinazohitaji maji zaidi",
        objective: "O1",
        notYet: "Hatua za zao zinazohitaji maji zaidi hazipo au si sahihi.",
        meets: "Inataja zao na hatua zake za ukuaji zinazohitaji maji zaidi, na jinsi udongo utakavyokaguliwa.",
        exceeds: "Inaandika tarehe ya kupanda ili hatua zinazohitaji maji zaidi ziwe kwenye kalenda."
      },
      {
        name: "Chanzo cha maji na hifadhi",
        objective: "O2",
        notYet: "Hakuna chanzo cha maji, au hakuna makadirio ya kiasi kinachoweza kuhifadhiwa.",
        meets: "Chanzo cha maji, makadirio ya maji ya paa au yanayotiririka, na hifadhi yenye mfuniko, na kibali chochote kimekaguliwa.",
        exceeds: "Inajumuisha mbinu ya shambani kama mashimo ya kupandia ili kubakiza mvua kwenye ardhi."
      },
      {
        name: "Mfumo wa umwagiliaji",
        objective: "O4",
        notYet: "Hakuna mfumo, au hakuna mpango wa kuzuia kuziba.",
        meets: "Mfumo wa matone au mwingine unaofaa kipande, pamoja na kimo cha pipa, chujio na kusafisha mipira.",
        exceeds: "Inajumuisha matandazo juu ya mipira na orodha ya vipuri."
      },
      {
        name: "Ratiba na ukaguzi wa udongo",
        objective: "O5",
        notYet: "Hakuna ratiba, au kumwagilia saa sita mchana bila kukagua udongo.",
        meets: "Ratiba ya kila wiki yenye wakati wa siku, maji zaidi katika hatua zinazohitaji maji zaidi, na ukaguzi wa udongo kabla ya kumwagilia.",
        exceeds: "Inasema la kufanya baada ya mvua nzuri na katika wiki za joto na upepo."
      },
      {
        name: "Udongo kujaa maji na chumvi",
        objective: "O5",
        notYet: "Hakuna mpango wa udongo kujaa maji au chumvi.",
        meets: "Dalili za kuangalia na hatua kama mifereji, matuta yaliyoinuliwa na kutomwagilia kupita kiasi.",
        exceeds: "Inapanga kipimo cha maji na udongo ikiwa inatumia maji ya kisima kirefu katika eneo kavu."
      },
      {
        name: "Uchaguzi wa pampu",
        objective: "O6",
        notYet: "Hakuna pampu iliyochaguliwa, au hakuna sababu.",
        meets: "Aina ya pampu na sababu yake, maji yanayohitajika kila siku, kimo cha kupandisha na umbali.",
        exceeds: "Inaorodhesha dhamana, vipuri na huduma za kuomba kwa maandishi."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa kigezo cha mpango wa umwagiliaji",
      "Wanafunzi wanaoripoti kuweka hifadhi ya maji ya mvua au kifaa cha matone ndani ya msimu mmoja (utafiti wa ufuatiliaji)",
      "Wanafunzi wanaoripoti kulima zao la kiangazi au kupoteza mavuno kidogo wakati wa ukame",
      "Wanafunzi wanaoanza kozi nyingine ya kilimo ya Koach Learn ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Daftari, kalamu na simu ya kawaida yenye kikokotoo",
      "Kipande kidogo cha shamba cha kujifunzia kukagua unyevu wa udongo",
      "Kifaa cha matone cha gharama ndogo au ndoo, kama kipo, kwa maonyesho",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi, pamoja na muda wa kuandika mpango wa umwagiliaji"
    ],
    facilitatorNotes: [
      "Katika kikundi cha wakulima au shule ya shambani: fanyeni jaribio la awali pamoja, kisha kagueni unyevu wa udongo kwenye kipande halisi.",
      "Hesabuni pamoja makadirio moja ya maji ya paa mkitumia paa halisi lililopo hapo.",
      "Wekeni kifaa cha matone cha ndoo au pipa kama kikundi na mjizoeze kusafisha chujio na mipira.",
      "Wakumbushe wanafunzi kukagua vibali vya maji kwa mamlaka ya maji na kuzungushia uzio na kufunika mabwawa na matangi.",
      "Pima mpango wa umwagiliaji kwa kigezo na utoe maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};

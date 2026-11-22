"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-crop-horticulture.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_IPM = { name: "FAO: Udhibiti Jumuishi wa Wadudu Waharibifu (IPM)", url: "https://www.fao.org/pest-and-pesticide-management/ipm/integrated-pest-management/en/" };
const FAO_FAMEWS = { name: "FAO: app ya simu ya kusaidia mapambano dhidi ya viwavijeshi vamizi barani Afrika (FAMEWS)", url: "https://www.fao.org/newsroom/detail/FAO-launches-mobile-application-to-support-fight-against-Fall-Armyworm-in-Africa/en" };
const ICIPE_PUSHPULL = { name: "icipe: Teknolojia ya push-pull inazuia viwavijeshi vamizi", url: "https://www.icipe.org/news/icipe-push-pull-technology-halts-fall-armyworm-rampage" };
const PCPB = { name: "Pest Control Products Board (Bodi ya Bidhaa za Kudhibiti Wadudu, Kenya)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "National Agency for Food and Drug Administration and Control (NAFDAC, Nigeria)", url: "https://www.nafdac.gov.ng" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO, Shirika la Utafiti wa Kilimo na Mifugo Kenya)", url: "https://www.kalro.org" };
const FAO_CSA = { name: "FAO: Kitabu cha Kilimo Kinachozingatia Hali ya Hewa (usimamizi wa udongo na maji)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };

module.exports = {
  id: "agri-crop-horticulture-sw",
  lang: "sw",
  translationOf: "agri-crop-horticulture",
  category: "Agriculture (Africa)",
  name: "Kilimo Endelevu cha Mazao na Bustani za Mboga",
  skills: "Kukagua na kuboresha afya ya udongo, Kupanda kwa mbegu bora, nafasi sahihi na wakati sahihi, Kulisha mazao kwa samadi, mboji na mbolea, Kukagua shamba na udhibiti jumuishi wa wadudu, Kutumia viuatilifu kwa usalama na kwa mujibu wa sheria, Kumwagilia mboga na kushughulikia mavuno",
  outcome: "kupanga na kuendesha msimu wa zao la shambani na kitalu cha mboga: kuandaa na kulisha udongo, kupanda vizuri, kukagua na kudhibiti wadudu kwa udhibiti jumuishi (IPM), kumwagilia bila kupoteza maji, na kuvuna na kushughulikia mazao ili yabaki na thamani yake.",
  about: [
    "Kozi hii ni kwa wakulima wadogo, vijana wanaoanza kilimo cha bustani, vikundi vya wanawake na vijana, na maafisa ugani nchini Kenya, Nigeria na kote Afrika. Mifano ni mahindi, maharagwe, muhogo na mtama shambani, na nyanya, sukuma wiki na vitunguu katika kitalu cha mboga.",
    "Sura ya 1 inahusu kukuza zao lenye nguvu: kuelewa na kupima udongo wako, kupanda kwa mbegu bora kwa nafasi na wakati sahihi, na kulisha zao kwa mchanganyiko wa samadi, mboji na mbolea. Sura ya 2 inahusu kulinda na kumalizia zao: kukagua shamba na udhibiti jumuishi wa wadudu, matumizi salama na halali ya viuatilifu, kumwagilia mboga vizuri, na kuvuna na kushughulikia mazao baada ya mavuno.",
    "Mazao, udongo na wadudu hutofautiana kwa kila eneo. Tumia kozi hii pamoja na afisa ugani wako, taasisi ya utafiti (kama KALRO nchini Kenya, au mpango wa maendeleo ya kilimo wa jimbo lako nchini Nigeria) na duka la pembejeo za kilimo (agrovet). Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andika mpango wa uzalishaji wa msimu kwa zao moja la shambani (kwa mfano nusu ekari ya mahindi na maharagwe) na kitalu kimoja cha mboga (kwa mfano moja ya nane ya ekari ya nyanya au sukuma wiki): ukaguzi wa udongo na kipimo chochote cha udongo, jinsi utakavyoandaa na kulisha udongo, mbegu na nafasi, tarehe za kupanda, ratiba ya ukaguzi wa kila wiki pamoja na wadudu na magonjwa makuu ya kuangalia na hatua zako za IPM, mpango wa kumwagilia mboga, na jinsi utakavyovuna, kuchambua, kuhifadhi na kuuza.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakulima wadogo, vijana wanaoanza kilimo cha bustani, vikundi vya wanawake na vijana, na maafisa ugani nchini Kenya, Nigeria na kote Afrika, wanaolima mazao ya shambani kama mahindi, maharagwe, muhogo na mtama, na mboga kama nyanya, sukuma wiki na vitunguu.",
    startingPoint: "Wengi tayari hupanda na kuvuna kila msimu, mara nyingi kwa mbegu walizohifadhi au zisizothibitishwa, mbolea iliyotawanywa ovyo na viuatilifu vilivyonunuliwa bila kifungashio chake. Wachache wamewahi kupima udongo, kukagua shamba kwa ratiba, kusoma lebo nzima ya kiuatilifu au kupanga kumwagilia na kushughulikia mazao baada ya mavuno.",
    gap: "Udongo duni, kupanda kwa msongamano au kuchelewa, mbolea iliyowekwa vibaya, kunyunyizia dawa bila haja na hasara baada ya mavuno vinapunguza mavuno na mapato, na matumizi yasiyo salama ya viuatilifu yanadhuru familia na wanunuzi. Mpango wa msimu ulioandikwa, unaotegemea mbinu bora, unawasaidia wakulima kuvuna zaidi, kutumia kidogo kwenye pembejeo na kuuza mazao yanayobaki na thamani yake.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la kilimo linaelezwa",
      "Vifaa: simu ya kawaida na daftari; mazoezi mengi yanafanyika shambani",
      "Muda: masomo mafupi yanayoingia kati ya kazi za shamba na msimu",
      "Udongo, aina za mbegu, viwango na bidhaa zilizosajiliwa hutofautiana kwa eneo: wanafunzi wanapata viwango na bidhaa kutoka kipimo cha udongo, ugani au lebo",
      "Usalama wa viuatilifu: hakuna mazoezi ya kunyunyizia darasani; wanafunzi wanafuata lebo na sheria za nchi yao"
    ],
    prerequisites: "Hakuna. Kozi \"Afya na Rutuba ya Udongo\" inaingia ndani zaidi kuhusu udongo, na \"Udhibiti Jumuishi wa Wadudu na Udhibiti wa Wadudu kwa Njia za Asili\" inaingia ndani zaidi kuhusu wadudu."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Katika moja ya mashamba yako mwenyewe", action: "kukagua afya ya udongo shambani na kueleza jinsi ya kuchukua sampuli nzuri kwa kipimo cha udongo", standard: "ukitaja angalau dalili tatu za udongo wenye afya au duni" },
    { id: "O2", condition: "Kwa zao moja la shambani na mboga moja", action: "kuchagua mbegu zilizothibitishwa au vipando safi, nafasi kati ya mimea, na tarehe ya kupanda au kupandikiza", standard: "kila uamuzi ukitoka kwa muuzaji, ugani au pakiti ya mbegu" },
    { id: "O3", condition: "Kwa zao lako kuu la shambani", action: "kuandika mpango wa kulisha zao unaochanganya mabaki ya viumbe hai, mikunde na mbolea iliyowekwa vizuri", standard: "viwango vikiwa vimeandikwa kuwa vinatoka kwenye kipimo cha udongo au ugani" },
    { id: "O4", condition: "Ukipewa zao lenye wadudu au ugonjwa", action: "kulikagua kwa ratiba ya kila wiki, kuchagua hatua za IPM, na kutumia kiuatilifu kilichosajiliwa kwa mujibu wa lebo yake tu inapohitajika kweli", standard: "ukianza na kinga na njia zisizo za kemikali" },
    { id: "O5", condition: "Kwa kitalu kidogo cha mboga", action: "kupanga umwagiliaji usiopoteza maji kwa matone au ndoo ya kumwagilia, matandazo na wakati sahihi wa siku", standard: "ukikagua unyevu wa udongo kabla ya kila kumwagilia" },
    { id: "O6", condition: "Wakati wa mavuno", action: "kupanga jinsi ya kuvuna, kuchambua, kukausha na kuhifadhi mazao ili kupunguza hasara", standard: "kwa ukomavu sahihi, ushughulikiaji wa upole na uhifadhi salama kwa kila zao" }
  ],
  chapters: [
    {
      name: "Sura 1: Kukuza zao lenye nguvu",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ujue udongo wako",
          minutes: 5,
          goal: "Kagua afya ya udongo wako shambani na ujue lini na jinsi ya kupata kipimo cha udongo.",
          text: [
            "Udongo wenye afya ni mweusi, unavunjika kwa urahisi, una harufu ya ardhi, una minyoo ya ardhi na mizizi inayokwenda chini sana, na unanyonya mvua badala ya kuiacha itiririke. Udongo duni ni mgumu, una rangi hafifu, unaganda juu baada ya mvua, au unatuamisha maji. Fanya ukaguzi rahisi shambani: chimba shimo lenye kina cha jembe moja, angalia rangi na matabaka, finya konzi ya udongo, hesabu minyoo, na uangalie maji yanapotiririka au kutuama baada ya mvua.",
            "Kipimo cha udongo kinakuambia kile ambacho macho hayawezi kuona: uchachu (pH) na virutubisho vikuu. Udongo mwingi katika maeneo ya mvua nyingi ya Kenya na Nigeria una uchachu, unaofungia virutubisho; huenda ukashauriwa kuweka chokaa. Muulize afisa ugani, taasisi ya utafiti au agrovet wapi pa kupima udongo na jinsi ya kuchukua sampuli nzuri: sampuli ndogo nyingi kutoka kote shambani, zilizochanganywa pamoja, si kutoka kwenye lundo la samadi au mahali palipochomwa.",
            "Jenga afya ya udongo kila msimu: ongeza mabaki ya viumbe hai (samadi, mboji, mabaki ya mazao), weka udongo ukiwa umefunikwa, badilisha mazao kwa mzunguko, na epuka kuchoma na kulima bila haja."
          ],
          steps: ["Chimba shimo lenye kina cha jembe moja na uangalie rangi, matabaka na mizizi.", "Finya konzi ya udongo; hesabu minyoo ya ardhi.", "Angalia maji yanapotiririka au kutuama.", "Muulize afisa ugani au agrovet wapi pa kupima udongo.", "Chukua sampuli ndogo nyingi kutoka kote shambani na uzichanganye."],
          words: [["Afya ya udongo", "uwezo wa udongo kukuza mimea yenye nguvu, kushika maji na kutegemeza uhai."], ["pH", "kipimo cha jinsi udongo ulivyo na uchachu au alkali; mazao mengi hupenda udongo wenye uchachu kidogo hadi wa wastani."], ["Mabaki ya viumbe hai", "mabaki ya mimea na wanyama yaliyooza ndani ya udongo, kama samadi na mboji."], ["Kuweka chokaa", "kuongeza chokaa ili kupunguza uchachu wa udongo."]],
          slides: [
            { title: "Udongo wenye afya", bullets: ["Mweusi, unavunjika kwa urahisi, harufu ya ardhi", "Minyoo ya ardhi, mizizi mirefu", "Unanyonya mvua"] },
            { title: "Ukaguzi shambani", bullets: ["Shimo la kina cha jembe: rangi, matabaka, mizizi", "Finya udongo, hesabu minyoo", "Maji yanatiririka au kutuama wapi"] },
            { title: "Kipimo cha udongo", bullets: ["Kinaonyesha pH na virutubisho", "Udongo wenye uchachu huenda ukahitaji chokaa", "Sampuli ndogo nyingi, zilizochanganywa"] },
            { title: "Ujenge kila msimu", bullets: ["Samadi, mboji, mabaki ya mazao", "Funika udongo, badilisha mazao", "Usichome"] }
          ],
          sources: [KALRO, FAO_CSA],
          tryIt: "Fanya ukaguzi shambani kwenye shamba moja: chimba, angalia, finya, hesabu minyoo, na uandike ulichokiona. Kisha tafuta wapi unaweza kupima udongo karibu nawe na gharama yake ni kiasi gani.",
          youCanNow: "kukagua afya ya udongo wako shambani na unajua jinsi ya kuchukua sampuli kwa kipimo cha udongo.",
          quickCheck: [
            { objective: "O1", q: "Baada ya mvua, maji yanatuama shambani kwako kwa siku kadhaa na udongo una rangi hafifu na ni mgumu. Hii inaonyesha nini?", options: ["Udongo wenye afya sana", "Udongo unaohitaji kutunzwa, kwa mfano kwa kuongeza mabaki ya viumbe hai", "Udongo usiohitaji mabadiliko yoyote", "Udongo wenye minyoo mingi kupita kiasi"], answer: 1, why: "Udongo wenye afya ni mweusi, unavunjika kwa urahisi na unanyonya mvua; maji yaliyotuama na udongo mgumu wenye rangi hafifu ni dalili za udongo duni." },
            { objective: "O1", q: "Unachukua sampuli ya udongo. Unachimba wapi?", options: ["Karibu na lundo la samadi tu", "Mahali ulipochoma mabaki tu", "Sehemu moja katikati ya shamba", "Sehemu ndogo nyingi kote shambani, zilizochanganywa pamoja"], answer: 3, why: "Sampuli ndogo nyingi zilizochanganywa zinaonyesha shamba zima; malundo ya samadi na mahali palipochomwa hutoa majibu yasiyo sahihi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kupanda vizuri: mbegu, nafasi na wakati",
          minutes: 5,
          goal: "Panda zao la shambani na ukuze miche ya mboga kwa mbegu bora, nafasi sahihi na wakati sahihi.",
          text: [
            "Mbegu bora ndiyo njia rahisi zaidi ya kuongeza mavuno. Nunua mbegu zilizothibitishwa za aina inayofaa eneo lako kutoka kwa muuzaji aliyesajiliwa, na ukague tarehe na lakiri ya pakiti. Kwa muhogo, tumia vipandikizi safi kutoka kwa mimea yenye afya, kwa sababu magonjwa ya virusi huenea kupitia vipandikizi vilivyoambukizwa.",
            "Nafasi inaamua mimea mingapi inagawana mwanga, maji na virutubisho. Tumia nafasi inayopendekezwa kwa aina yako ya mbegu na eneo lako, kwa mfano umbali kati ya mistari na kati ya mimea ya mahindi, na nafasi kubwa zaidi katika maeneo makavu. Mapengo na msongamano vyote vinapunguza mavuno. Panda haraka mara mvua zinapoanza kweli na udongo una unyevu hadi chini.",
            "Mboga kama nyanya, sukuma wiki na vitunguu kwa kawaida hukuzwa kwanza kitaluni: kitalu kilichoinuliwa chenye kupitisha maji vizuri au trei za miche, chenye udongo safi, kivuli mwanzoni, kumwagilia kwa uangalifu na kinga dhidi ya wadudu. Izoeshe miche kwa kuipa jua zaidi na maji kidogo polepole kabla ya kuipandikiza, ikiwezekana jioni wakati wa baridi."
          ],
          steps: ["Nunua mbegu zilizothibitishwa (au vipandikizi safi) za aina inayofaa.", "Tumia nafasi inayopendekezwa kwa aina yako na eneo lako.", "Panda mvua zinapoanza kweli na udongo una unyevu.", "Kuza miche ya mboga katika kitalu safi kinachopitisha maji vizuri.", "Izoeshe miche, kisha ipandikize jioni wakati wa baridi."],
          words: [["Mbegu zilizothibitishwa", "mbegu zilizokaguliwa na mamlaka rasmi ya mbegu kwa ubora na aina."], ["Nafasi", "umbali kati ya mistari na kati ya mimea."], ["Kitalu", "eneo dogo lililolindwa ambapo miche hukuzwa kabla ya kupandikizwa."], ["Kuizoesha miche", "kuifanya miche polepole izoee hali ya shambani kabla ya kuipandikiza."]],
          slides: [
            { title: "Mbegu bora", bullets: ["Zilizothibitishwa, zinazofaa eneo lako", "Muuzaji aliyesajiliwa; kagua tarehe na lakiri", "Muhogo: vipandikizi safi kutoka mimea yenye afya"] },
            { title: "Nafasi na wakati", bullets: ["Nafasi inayopendekezwa kwa aina yako", "Mapengo na msongamano vyote hupunguza mavuno", "Panda mvua zinapoanza kweli"] },
            { title: "Kitalu cha mboga", bullets: ["Kimeinuliwa, kinapitisha maji, udongo safi", "Kivuli mwanzoni, kumwagilia kwa uangalifu", "Izoeshe, kisha pandikiza jioni"] }
          ],
          sources: [KALRO],
          tryIt: "Kwa zao lako kuu la shambani na mboga moja, andika: aina ya mbegu, wapi utanunua mbegu zilizothibitishwa, nafasi inayopendekezwa (uliza agrovet au afisa ugani), na tarehe unayopanga kupanda au kupandikiza.",
          youCanNow: "kupanda zao la shambani na kukuza miche ya mboga kwa mbegu bora, nafasi sahihi na wakati sahihi.",
          quickCheck: [
            { objective: "O2", q: "Kwa nini muhogo upandwe kwa vipandikizi safi kutoka kwa mimea yenye afya?", options: ["Magonjwa ya virusi huenea kupitia vipandikizi vilivyoambukizwa", "Vipandikizi safi hukua bila maji", "Mimea yenye afya haihitaji nafasi", "Vipandikizi kutoka mimea iliyougua ni ghali zaidi"], answer: 0, why: "Magonjwa ya virusi ya muhogo huenea kupitia vipandikizi vilivyoambukizwa, kwa hiyo vipandikizi safi kutoka mimea yenye afya hulinda zao jipya." },
            { objective: "O2", q: "Miche yako ya nyanya iko tayari kitaluni. Unafanya nini kabla ya kuipandikiza?", options: ["Kuimwagilia mara mbili zaidi", "Kuihamishia moja kwa moja kwenye jua kali saa sita mchana", "Kuizoesha kwa jua zaidi na maji kidogo, kisha kuipandikiza jioni wakati wa baridi", "Kukata majani yake yote"], answer: 2, why: "Kuizoesha miche kunaiandaa kwa shamba, na baridi ya jioni hupunguza mshtuko wa kupandikizwa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kulisha zao: samadi, mboji na mbolea",
          minutes: 6,
          goal: "Panga jinsi ya kulisha zao kwa virutubisho vya asili na vya madini, vilivyowekwa mahali na wakati sahihi.",
          text: [
            "Mazao yanahitaji naitrojeni (N), fosforasi (P) na potasiamu (K), pamoja na kiasi kidogo cha virutubisho vingine. Samadi na mboji huongeza baadhi ya virutubisho na, muhimu vilevile, mabaki ya viumbe hai yanayoshika maji na kulisha viumbe hai wa udongoni. Mikunde kama maharagwe, kunde na karanga huongeza naitrojeni kwenye udongo kupitia mizizi yake.",
            "Mbolea za madini hutoa virutubisho haraka na kwa kiasi kinachojulikana. Mpangilio wa kawaida kwa mahindi ni mbolea ya kupandia yenye fosforasi, kisha mbolea ya naitrojeni ya kukuzia zao likifika magotini, lakini bidhaa na viwango sahihi vinategemea kipimo chako cha udongo na mapendekezo ya eneo lako. Kuweka kiasi kidogo karibu na mmea (ndani ya shimo la kupandia) kunatumia mbolea vizuri zaidi kuliko kuitawanya kote.",
            "Changanya vyote viwili: mabaki ya viumbe hai pamoja na mbolea iliyowekwa vizuri kwa kawaida hutoa mavuno bora na ya kudumu kuliko kimoja peke yake. Tengeneza mboji kutoka mabaki ya mazao, samadi na takataka za jikoni, ikigeuzwa na kuwekwa na unyevu. Usiweke kamwe samadi mbichi yenye joto au mbolea moja kwa moja juu ya mbegu."
          ],
          steps: ["Ongeza samadi au mboji kabla ya kupanda au wakati wa kupanda.", "Weka mikunde katika mzunguko wa mazao au kilimo mseto.", "Tumia bidhaa na viwango vya mbolea kutoka kipimo chako cha udongo na mapendekezo ya eneo lako.", "Weka mbolea karibu na mmea, isiguse mbegu.", "Weka mbolea ya naitrojeni ya kukuzia kwa hatua sahihi, udongo ukiwa na unyevu."],
          words: [["N, P, K", "naitrojeni, fosforasi na potasiamu: virutubisho vikuu vya mimea."], ["Mbolea ya kukuzia", "kuongeza mbolea, kwa kawaida ya naitrojeni, kwa zao linalokua."], ["Mboji", "takataka za mimea na wanyama zilizooza zinazotumiwa kulisha udongo."]],
          slides: [
            { title: "Mazao yanahitaji nini", bullets: ["Naitrojeni, fosforasi, potasiamu", "Pamoja na virutubisho vidogo", "Mikunde huongeza naitrojeni"] },
            { title: "Mabaki ya viumbe hai", bullets: ["Samadi na mboji", "Hushika maji, hulisha viumbe wa udongoni"] },
            { title: "Mbolea iliyotumika vizuri", bullets: ["Bidhaa na viwango kutoka kipimo cha udongo na ushauri wa eneo", "Weka karibu na mmea, si juu ya mbegu", "Mbolea ya naitrojeni ya kukuzia kwa hatua sahihi"] },
            { title: "Changanya vyote viwili", bullets: ["Asili + madini = mavuno ya kudumu zaidi", "Tengeneza mboji kwa mabaki ya mazao na samadi"] }
          ],
          sources: [FAO_CSA, KALRO],
          tryIt: "Andika mpango wa kulisha zao lako la shambani: mabaki gani ya viumbe hai utaongeza na lini, mikunde yoyote, na bidhaa za mbolea na wakati wake (andika \"kiwango kutoka kipimo cha udongo au ugani\" kama bado hukijui). Anzisha lundo la mboji kama huna.",
          youCanNow: "kupanga jinsi ya kulisha zao kwa samadi, mboji na mbolea iliyowekwa vizuri.",
          quickCheck: [
            { objective: "O3", q: "Samadi na mboji huongeza nini zaidi ya virutubisho?", options: ["Kiuatilifu", "Mabaki ya viumbe hai yanayoshika maji na kulisha viumbe wa udongoni", "Mbegu zilizothibitishwa", "Chokaa"], answer: 1, why: "Mabaki ya viumbe hai hushika maji na kulisha viumbe wa udongoni, jambo ambalo ni muhimu sawa na virutubisho." },
            { objective: "O3", q: "Una mbolea ya kupandia mahindi. Unaiweka wapi?", options: ["Kiasi kidogo karibu na mmea, isiguse mbegu", "Kuitawanya kote shambani", "Moja kwa moja juu ya mbegu", "Kwenye lundo pembeni mwa shamba"], answer: 0, why: "Kuweka kiasi kidogo karibu na mmea kunatumia mbolea vizuri zaidi, na mbolea juu ya mbegu inaweza kuiharibu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kukuza zao lenye nguvu",
        questions: [
          { objective: "O1", q: "Ipi ni dalili ya udongo wenye afya?", options: ["Mgumu na wa rangi hafifu, unaganda baada ya mvua", "Mweusi, unavunjika kwa urahisi, una minyoo ya ardhi", "Maji daima hutiririka juu yake", "Una harufu ya kemikali"], answer: 1, why: "Udongo wenye afya unavunjika kwa urahisi, ni mweusi na umejaa uhai." },
          { objective: "O1", q: "Unapaswa kuchukuaje sampuli ya udongo?", options: ["Kijiko kimoja kutoka lundo la samadi", "Kutoka mahali palipochomwa", "Sampuli ndogo nyingi kote shambani, zilizochanganywa pamoja", "Kutoka barabarani"], answer: 2, why: "Sampuli iliyochanganywa inawakilisha shamba zima." },
          { objective: "O2", q: "Kwa nini utumie vipandikizi safi vya muhogo?", options: ["Magonjwa ya virusi huenea kupitia vipandikizi vilivyoambukizwa", "Ni rahisi zaidi kwa bei", "Hukua haraka katika udongo wowote", "Wanunuzi wanavihitaji"], answer: 0, why: "Vipando safi huzuia magonjwa kuenea." },
          { objective: "O2", q: "Kuizoesha miche ni nini?", options: ["Kumwagilia zaidi", "Kuongeza mbolea", "Kupanda katika udongo mgumu", "Kuipa jua zaidi na maji kidogo polepole kabla ya kuipandikiza"], answer: 3, why: "Kunaiandaa miche kwa hali ya shambani." },
          { objective: "O3", q: "Viwango sahihi vya mbolea vinatoka wapi?", options: ["Kubahatisha kwa jirani", "Kipimo chako cha udongo na mapendekezo ya eneo lako", "Rangi ya mfuko", "Kutumia kiasi kikubwa iwezekanavyo"], answer: 1, why: "Udongo na eneo vinaamua zao linahitaji nini." }
        ]
      }
    },
    {
      name: "Sura 2: Kulinda na kumalizia zao",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kukagua shamba na udhibiti jumuishi wa wadudu",
          minutes: 6,
          goal: "Kagua zao kila wiki na uchague hatua za IPM kabla ya kufikia kemikali.",
          text: [
            "FAO inaeleza udhibiti jumuishi wa wadudu waharibifu (IPM) kuwa ni kuzingatia njia zote zilizopo za kudhibiti wadudu na kuchanganya zile zinazofaa, huku matumizi ya viuatilifu yakibaki pale tu yanapohitajika kweli. Unaanza na kinga: udongo wenye afya, aina za mbegu zinazostahimili, mbegu safi, mzunguko wa mazao, kupanda kwa wakati, usafi wa shamba (kuondoa mimea iliyoambukizwa na mabaki) na kuwasaidia maadui wa asili kama kombamwiko-madoa (ladybird) na nyigu wadogo wanaotaga ndani ya wadudu.",
            "Kagua kila wiki. Tembea shambani kwa mtindo wa herufi W au zigzag, kagua idadi maalum ya mimea (kwa mfano mimea 10 katika sehemu 5), na uandike unachokiona: uharibifu wa viwavijeshi vamizi ndani ya kilele cha mahindi, vidukari, inzi weupe, madoa ya majani, kunyauka, kipekecha majani ya nyanya (Tuta absoluta). Linganisha na kiwango ambacho ugani unashauri kuwa ndipo kuchukua hatua kunafaa.",
            "Tumia kwanza njia zisizo za kemikali pale zinapofanya kazi: kuokota kwa mkono, push-pull kwa mahindi na mtama, mitego, bidhaa za mwarobaini au za kibiolojia zilizoidhinishwa, na kuondoa mimea iliyoambukizwa. Viwavijeshi vamizi vinavyoonekana vinaweza kurekodiwa kwa app ya FAMEWS ya FAO pale inapotumika. Pata utambuzi kutoka kwa afisa ugani au kliniki ya mimea usipokuwa na uhakika."
          ],
          steps: ["Kinga: aina zinazostahimili, mbegu safi, mzunguko, usafi wa shamba.", "Kagua kila wiki kwa mtindo wa W; kagua idadi maalum ya mimea.", "Andika wadudu, magonjwa na uharibifu.", "Linganisha na viwango vya kuchukua hatua vya ugani.", "Tumia kwanza njia zisizo za kemikali; pata utambuzi usipokuwa na uhakika."],
          words: [["IPM", "udhibiti jumuishi wa wadudu waharibifu: kuchanganya kinga, ufuatiliaji na njia nyingi za kudhibiti, na viuatilifu pale tu vinapohitajika kweli."], ["Kukagua shamba", "kutembea shambani mara kwa mara kuangalia wadudu na magonjwa."], ["Maadui wa asili", "wadudu na viumbe wengine wanaokula au kushambulia wadudu waharibifu."], ["Kiwango cha kuchukua hatua", "kiasi cha wadudu au uharibifu ambapo kudhibiti kunastahili gharama yake."]],
          slides: [
            { title: "IPM (FAO)", bullets: ["Zingatia njia zote, changanya zinazofaa", "Viuatilifu pale tu vinapohitajika kweli"] },
            { title: "Kinga kwanza", bullets: ["Aina zinazostahimili, mbegu safi, mzunguko", "Usafi wa shamba", "Saidia maadui wa asili"] },
            { title: "Kagua kila wiki", bullets: ["Mtindo wa W, idadi maalum ya mimea", "Andika unachokiona", "Linganisha na viwango vya kuchukua hatua"] },
            { title: "Dhibiti kwa busara", bullets: ["Kuokota kwa mkono, push-pull, mitego", "Bidhaa za kibiolojia zilizoidhinishwa", "Utambuzi usipokuwa na uhakika"] }
          ],
          sources: [FAO_IPM, ICIPE_PUSHPULL, FAO_FAMEWS],
          tryIt: "Tengeneza fomu ya ukaguzi wa kila wiki (tarehe, sehemu, mimea iliyokaguliwa, wadudu, magonjwa, uharibifu, hatua) na ukague shamba moja au kitalu kimoja cha mboga wiki hii.",
          youCanNow: "kukagua zao kila wiki na kuchagua hatua za IPM, ukianza na kinga na njia zisizo za kemikali.",
          quickCheck: [
            { objective: "O4", q: "Ipi ni hatua ya kinga katika IPM?", options: ["Kunyunyizia kila wiki kwa tahadhari tu", "Kununua kiuatilifu chenye nguvu zaidi", "Kuchanganya viuatilifu viwili pamoja", "Kutumia aina zinazostahimili na kuondoa mimea iliyoambukizwa"], answer: 3, why: "IPM inaanza na kinga: aina zinazostahimili, mbegu safi, mzunguko wa mazao na usafi wa shamba." },
            { objective: "O4", q: "Unakuta viwavijeshi vamizi wachache kwenye mahindi yako. Unafanya nini kwanza?", options: ["Kunyunyizia shamba zima leo", "Kuandika na kulinganisha na kiwango cha kuchukua hatua kutoka ugani", "Kupuuza hadi mavuno", "Kuchoma shamba"], answer: 1, why: "Kumbukumbu za ukaguzi hulinganishwa na kiwango cha kuchukua hatua ili kuamua kama kudhibiti kunastahili." }
          ]
        },
        {
          objectives: ["O4","O5"],
          title: "Matumizi salama na halali ya viuatilifu, na kumwagilia mboga",
          minutes: 6,
          goal: "Tumia kiuatilifu kwa usalama kinapohitajika kweli, na panga umwagiliaji usiopoteza maji kwa kitalu cha mboga.",
          text: [
            "Kama kiuatilifu kinahitajika, tumia tu bidhaa zilizosajiliwa kwa zao hilo na mdudu huyo katika nchi yako (nchini Kenya na Pest Control Products Board; nchini Nigeria na NAFDAC), zilizonunuliwa kutoka kwa muuzaji mwenye leseni, kamwe si zilizofungwa upya katika chupa zisizo na lebo. Soma lebo na uifuate kikamilifu: kiwango, kuchanganya, mavazi ya kujikinga, muda wa kurudi shambani, na muda wa kusubiri kabla ya kuvuna, yaani idadi ya siku kati ya kunyunyizia na kuvuna. Weka watoto na wanyama mbali, usile wala usivute sigara unaponyunyizia, na tupa vyombo kwa usalama, si kuvitumia kwa maji au chakula.",
            "Mboga zinahitaji maji mengi na ni nyeti. Umwagiliaji wa matone huweka maji kwenye mizizi, huokoa maji na huacha majani makavu, jambo linalopunguza magonjwa kwenye nyanya. Vifaa vya bei nafuu vya matone na ndoo za kumwagilia vinafaa kwa vitalu vidogo. Mwagilia asubuhi na mapema au jioni, na mwagilia kwa kina na mara chache badala ya kidogo kila siku.",
            "Weka matandazo kuzunguka mboga ili kutunza unyevu na kuzuia udongo kurukia majani. Kagua unyevu wa udongo kwa kidole sentimita chache chini kabla ya kumwagilia. Pale maji ni haba, vuna maji ya mvua kutoka paa na tumia mabwawa madogo ya maji."
          ],
          steps: ["Tumia tu bidhaa zilizosajiliwa kwa zao hilo na mdudu huyo, kutoka kwa wauzaji wenye leseni.", "Soma na ufuate lebo: kiwango, mavazi ya kujikinga, muda wa kurudi, muda wa kusubiri kabla ya kuvuna.", "Tupa vyombo kwa usalama.", "Mwagilia mboga kwenye mizizi (matone au ndoo), asubuhi au jioni.", "Weka matandazo na ukague unyevu wa udongo kabla ya kumwagilia."],
          words: [["Muda wa kusubiri kabla ya kuvuna (PHI)", "idadi ya siku unazopaswa kusubiri baada ya kunyunyizia kabla ya kuvuna."], ["Kiuatilifu kilichosajiliwa", "bidhaa iliyoidhinishwa na mamlaka ya kitaifa kwa matumizi yaliyotajwa."], ["Umwagiliaji wa matone", "kumwagilia kupitia mabomba yenye matundu madogo yanayodondosha maji kwenye mizizi."]],
          slides: [
            { title: "Bidhaa zilizosajiliwa tu", bullets: ["Kenya: PCPB. Nigeria: NAFDAC", "Muuzaji mwenye leseni, kifungashio asili chenye lebo", "Kwa zao hilo na mdudu huyo"] },
            { title: "Fuata lebo", bullets: ["Kiwango na kuchanganya, mavazi ya kujikinga", "Muda wa kurudi shambani", "Muda wa kusubiri kabla ya kuvuna"] },
            { title: "Usalama", bullets: ["Watoto na wanyama wasiwe karibu", "Usile wala kuvuta sigara unaponyunyizia", "Usitumie tena vyombo kwa chakula au maji"] },
            { title: "Mwagilia mboga vizuri", bullets: ["Matone au ndoo kwenye mizizi", "Asubuhi au jioni, kwa kina na mara chache", "Matandazo; kagua unyevu kwanza"] }
          ],
          sources: [PCPB, NAFDAC, FAO_IPM],
          tryIt: "Chukua lebo yoyote ya kiuatilifu (kutoka dukani, intaneti au stoo yako). Andika: mazao na wadudu iliyosajiliwa kwao, kiwango, mavazi ya kujikinga, na muda wa kusubiri kabla ya kuvuna. Kisha andika mpango wa kumwagilia kitalu chako cha mboga.",
          youCanNow: "kutumia kiuatilifu kwa usalama na kwa mujibu wa sheria kinapohitajika kweli, na kumwagilia mboga bila kupoteza maji.",
          quickCheck: [
            { objective: "O4", q: "Muda wa kusubiri kabla ya kuvuna kwenye lebo ya kiuatilifu ni nini?", options: ["Muda wa kuchanganya dawa", "Siku kabla ya kupanda", "Siku za kusubiri kati ya kunyunyizia na kuvuna", "Muda chupa inaweza kukaa bila kuharibika"], answer: 2, why: "Muda wa kusubiri kabla ya kuvuna ni idadi ya siku kati ya kunyunyizia mara ya mwisho na kuvuna." },
            { objective: "O5", q: "Kitalu chako cha sukuma wiki ni kikavu na una ndoo ya kumwagilia. Unamwagilia lini?", options: ["Saa sita mchana, kidogo kila saa", "Asubuhi na mapema au jioni, baada ya kukagua unyevu wa udongo", "Baada tu ya majani kunyauka kwa wiki moja", "Kamwe; subiri mvua"], answer: 1, why: "Kumwagilia asubuhi na mapema au jioni, kwa kina na pale tu udongo ukiwa mkavu, huokoa maji na kunafaa mboga." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mavuno na kushughulikia mazao baada ya mavuno",
          minutes: 5,
          goal: "Vuna wakati sahihi na ushughulikie, uchambue na uhifadhi mazao ili yabaki na thamani yake.",
          text: [
            "Chakula kingi hupotea baada ya mavuno. Vuna kwa ukomavu sahihi: nyanya katika hatua anayotaka mnunuzi wako (mara nyingi zikianza kubadilika rangi kwa masoko ya mbali), majani ya sukuma wiki yakiwa machanga na laini, mahindi wakati punje zimekomaa na zimekauka vya kutosha, muhogo wakati mizizi iko tayari na kiasi tu unachoweza kuuza au kusindika haraka, kwa sababu mizizi huharibika ndani ya siku chache.",
            "Shughulikia kwa upole: tumia kreti safi, si magunia, kwa nyanya na mazao laini; weka mazao kivulini; na vuna asubuhi wakati wa baridi. Chambua na upange kwa ukubwa na ubora, na uondoe vilivyoharibika ili visiharibu vingine. Heshimu muda wa kusubiri kabla ya kuvuna baada ya kunyunyizia dawa yoyote.",
            "Kausha nafaka vizuri kabla ya kuhifadhi: mahindi na karanga zenye unyevu zinaweza kuota ukungu unaotoa aflatoxin, sumu. Muulize mnunuzi wako au afisa ugani kiwango cha unyevu kinacholengwa na ukipime ukiweza. Hifadhi nafaka katika ghala safi, kavu na lililoinuliwa au katika mifuko ya hermetic (isiyopitisha hewa) ili kudhibiti dumuzi bila kemikali."
          ],
          steps: ["Vuna kwa ukomavu sahihi kwa mnunuzi wako.", "Vuna asubuhi wakati wa baridi; weka mazao kivulini.", "Tumia kreti safi kwa mazao laini.", "Chambua na upange; ondoa vilivyoharibika.", "Kausha nafaka vizuri; hifadhi katika ghala safi, kavu, lililoinuliwa au mifuko ya hermetic."],
          words: [["Hasara baada ya mavuno", "chakula kinachopotea au kuharibika kati ya mavuno na kuuzwa au kutumiwa."], ["Kupanga kwa daraja", "kuchambua mazao kwa ukubwa na ubora."], ["Aflatoxin", "sumu inayotengenezwa na ukungu kwenye nafaka na karanga zenye unyevu."], ["Mfuko wa hermetic", "mfuko wa kuhifadhia usiopitisha hewa unaozuia wadudu kwa kuwanyima hewa."]],
          slides: [
            { title: "Vuna wakati sahihi", bullets: ["Nyanya katika hatua anayotaka mnunuzi", "Sukuma wiki changa na laini", "Muhogo kiasi tu unachoweza kuuza haraka"] },
            { title: "Shughulikia kwa upole", bullets: ["Asubuhi ya baridi, kivulini", "Kreti safi, si magunia", "Chambua, panga, ondoa vilivyoharibika"] },
            { title: "Hifadhi nafaka salama", bullets: ["Kausha vizuri: nafaka yenye unyevu ina hatari ya aflatoxin", "Ghala safi, kavu, lililoinuliwa", "Mifuko ya hermetic dhidi ya dumuzi"] }
          ],
          sources: [FAO_IPM],
          tryIt: "Kazi ya mwisho: andika mpango wako wa uzalishaji wa msimu kwa zao la shambani na kitalu cha mboga: ukaguzi na kipimo cha udongo, kuandaa na kulisha udongo, mbegu na nafasi, tarehe za kupanda, ukaguzi wa kila wiki na hatua za IPM, kumwagilia mboga, na kuvuna, kuchambua, kuhifadhi na kuuza.",
          youCanNow: "kuvuna, kushughulikia, kuchambua na kuhifadhi mazao ili kupunguza hasara na kutunza thamani yake.",
          quickCheck: [
            { objective: "O6", q: "Aflatoxin ni nini?", options: ["Mbolea", "Mfuko wa kuhifadhia", "Aina ya dumuzi", "Sumu kutoka ukungu kwenye nafaka yenye unyevu"], answer: 3, why: "Mahindi na karanga zenye unyevu zinaweza kuota ukungu unaotoa aflatoxin, sumu." },
            { objective: "O6", q: "Unavuna nyanya za kuuza. Unazibeba vipi?", options: ["Katika kreti safi, zikiwekwa kivulini", "Katika magunia juani", "Zikiwa zimerundikwa ovyo kwenye mkokoteni", "Katika mfuko pamoja na zilizoharibika"], answer: 0, why: "Kreti safi na kivuli hulinda mazao laini; magunia na jua huyachubua na kuyaharibu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kulinda na kumalizia zao",
        questions: [
          { objective: "O4", q: "Katika IPM, viuatilifu hutumika:", options: ["Kila wiki vyovyote iwavyo", "Kamwe kwa hali yoyote", "Pale tu vinapohitajika kweli, baada ya kuzingatia njia nyingine", "Kwenye mboga tu"], answer: 2, why: "IPM ya FAO inabakiza matumizi ya viuatilifu pale tu yanapohitajika kweli." },
          { objective: "O4", q: "Unapaswa kukagua shamba vipi?", options: ["Kuangalia pembeni tu", "Kutembea kwa mtindo wa W na kukagua idadi maalum ya mimea", "Kuangalia ukiwa nyumbani", "Baada ya mavuno tu"], answer: 1, why: "Mtindo wa W unachukua sampuli ya shamba zima kwa haki." },
          { objective: "O4", q: "Muda wa kusubiri kabla ya kuvuna ni:", options: ["Siku za kusubiri kati ya kunyunyizia na kuvuna", "Wakati wa kupanda", "Bei ya kiuatilifu", "Ukubwa wa bomba la kunyunyizia"], answer: 0, why: "Unaweka mabaki ya dawa kwenye chakula katika viwango salama." },
          { objective: "O5", q: "Kwa nini utumie umwagiliaji wa matone kwa nyanya?", options: ["Unalowesha majani", "Unatumia maji zaidi", "Unatakiwa kisheria", "Unaweka maji kwenye mizizi na kuacha majani makavu, na kupunguza magonjwa"], answer: 3, why: "Majani makavu yanamaanisha magonjwa machache na maji machache yanayopotea." },
          { objective: "O6", q: "Kwa nini ukaushe mahindi vizuri kabla ya kuhifadhi?", options: ["Ili yawe mazito zaidi", "Nafaka yenye unyevu inaweza kuota ukungu unaotoa aflatoxin", "Wanunuzi wanapenda nafaka mbichi", "Ili kubadilisha rangi yake"], answer: 1, why: "Aflatoxin ni sumu hatari kutoka ukungu kwenye nafaka yenye unyevu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kilimo Endelevu cha Mazao na Bustani za Mboga",
    questions: [
      { objective: "O1", q: "Kipimo cha udongo kinakuambia:", options: ["Hali ya hewa", "pH na viwango vya virutubisho", "Bei za mazao", "Majina ya wadudu"], answer: 1, why: "Vipimo vya udongo hupima uchachu na virutubisho." },
      { objective: "O1", q: "Udongo wenye uchachu huenda ukahitaji:", options: ["Kuchomwa zaidi", "Chumvi", "Chokaa, kama kipimo cha udongo kinashauri", "Hakuna kitu kamwe"], answer: 2, why: "Chokaa hupunguza uchachu na kuachilia virutubisho." },
      { objective: "O1", q: "Lipi linajenga afya ya udongo?", options: ["Kuongeza samadi na mboji na kuweka udongo ukiwa umefunikwa", "Kuchoma mabaki", "Kulima mara nyingi", "Kuacha udongo wazi"], answer: 0, why: "Mabaki ya viumbe hai na kifuniko hulisha na kulinda udongo." },
      { objective: "O2", q: "Mbegu zilizothibitishwa ni:", options: ["Nafaka yoyote kutoka sokoni", "Mbegu zisizo na pakiti", "Mbegu zilizohifadhiwa kwa miaka kumi", "Mbegu zilizokaguliwa na mamlaka rasmi ya mbegu"], answer: 3, why: "Uthibitisho hukagua aina na ubora." },
      { objective: "O2", q: "Mimea iliyosongamana kwa kawaida:", options: ["Hutoa mavuno zaidi", "Hushindana kwa mwanga, maji na virutubisho na kupunguza mavuno", "Haihitaji mbolea", "Hustahimili wadudu wote"], answer: 1, why: "Nafasi sahihi husawazisha idadi ya mimea na rasilimali." },
      { objective: "O2", q: "Miche inapaswa kupandikizwa lini?", options: ["Saa sita mchana kwenye jua kali", "Wakati wa dhoruba", "Baada ya kuzoeshwa, ikiwezekana jioni wakati wa baridi", "Kabla haijatoa majani"], answer: 2, why: "Hali ya baridi hupunguza mshtuko wa kupandikizwa." },
      { objective: "O3", q: "Mazao gani huongeza naitrojeni kwenye udongo?", options: ["Maharagwe, kunde na karanga", "Mahindi tu", "Nyanya", "Vitunguu"], answer: 0, why: "Mikunde hufunga naitrojeni kupitia mizizi yake." },
      { objective: "O3", q: "Kuweka mbolea ya kukuzia kwenye mahindi kwa kawaida ni kuongeza:", options: ["Chokaa wakati wa kupanda", "Mbegu", "Maji tu", "Naitrojeni kwa zao linalokua"], answer: 3, why: "Mbolea ya naitrojeni ya kukuzia husaidia ukuaji kwa hatua sahihi." },
      { objective: "O3", q: "Mbolea inapaswa kuwekwa:", options: ["Moja kwa moja juu ya mbegu", "Karibu na mmea, isiguse mbegu", "Barabarani", "Kwenye majani tu"], answer: 1, why: "Kuiweka karibu na mizizi kunaitumia vizuri bila kuunguza mbegu." },
      { objective: "O4", q: "Maadui wa asili ni:", options: ["Magugu", "Viuatilifu", "Wadudu wanaokula au kushambulia wadudu waharibifu", "Wezi"], answer: 2, why: "Kombamwiko-madoa (ladybird) na nyigu wadogo husaidia kudhibiti wadudu waharibifu." },
      { objective: "O4", q: "Kiwango cha kuchukua hatua ni:", options: ["Kiasi cha wadudu ambapo kudhibiti kunastahili gharama yake", "Aina ya bomba la kunyunyizia", "Wakati wa mavuno", "Jibu la kipimo cha udongo"], answer: 0, why: "Kinasaidia kuepuka kunyunyizia bila haja." },
      { objective: "O4", q: "Push-pull hutumika hasa kwenye:", options: ["Nyanya", "Sukuma wiki", "Vitunguu", "Mahindi na mtama"], answer: 3, why: "icipe iliitengeneza kwa wadudu wa nafaka kama vipekecha shina na viwavijeshi vamizi." },
      { objective: "O4", q: "Nchini Kenya, viuatilifu husajiliwa na:", options: ["KCAA", "Pest Control Products Board (PCPB)", "KMD", "ODPC"], answer: 1, why: "PCPB inasimamia bidhaa za kudhibiti wadudu nchini Kenya." },
      { objective: "O4", q: "Kiuatilifu kinachouzwa katika chupa iliyofungwa upya isiyo na lebo:", options: ["Ni bei nzuri", "Ni sawa kama ni rahisi", "Hakipaswi kununuliwa wala kutumiwa", "Ni salama zaidi"], answer: 2, why: "Bila lebo huwezi kujua bidhaa ni nini wala kuitumia kwa usalama." },
      { objective: "O4", q: "Vyombo vitupu vya viuatilifu vinapaswa:", options: ["Kutupwa kwa usalama, kamwe visitumiwe tena kwa chakula au maji", "Kutumiwa kuhifadhi maji ya kunywa", "Kupewa watoto", "Kutupwa mtoni"], answer: 0, why: "Mabaki ya dawa yanaweza kuwatia watu na maji sumu." },
      { objective: "O5", q: "Wakati bora wa kumwagilia mboga ni:", options: ["Saa sita mchana", "Usiku tu wakati wa mvua", "Kamwe", "Asubuhi na mapema au jioni"], answer: 3, why: "Maji machache hupotea kwa joto na mvuke." },
      { objective: "O5", q: "Matandazo kuzunguka mboga:", options: ["Hukausha udongo", "Hutunza unyevu na kuzuia udongo kurukia majani", "Huvutia wadudu wote", "Huchukua nafasi ya maji kabisa"], answer: 1, why: "Matandazo huokoa maji na hupunguza magonjwa yanayorukia majani." },
      { objective: "O6", q: "Mazao laini kama nyanya yanapaswa kubebwa katika:", options: ["Magunia yaliyobana", "Mikono tu", "Kreti safi", "Mifuko ya plastiki juani"], answer: 2, why: "Kreti hulinda mazao laini yasipondwe." },
      { objective: "O6", q: "Kwa nini uvune muhogo kiasi tu unachoweza kuuza au kusindika haraka?", options: ["Mizizi huharibika ndani ya siku chache baada ya kuvunwa", "Wanunuzi hawapendi muhogo", "Muhogo huota tena usiku mmoja", "Ni sheria"], answer: 0, why: "Mizizi mibichi ya muhogo huharibika haraka." },
      { objective: "O6", q: "Mifuko ya hermetic hudhibiti dumuzi kwa:", options: ["Kuongeza sumu", "Kupiga kelele", "Kuingiza mwanga", "Kuzuia hewa"], answer: 3, why: "Mifuko isiyopitisha hewa huwanyima wadudu oksijeni." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 6, 8, 9, 12, 15, 17, 19] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya mpango na uikague tena.",
    criteria: [
      { name: "Ukaguzi wa udongo", objective: "O1", notYet: "Hakuna ukaguzi wa udongo wala kipimo cha udongo kinachotajwa.", meets: "Majibu ya ukaguzi shambani yameandikwa, pamoja na wapi na jinsi sampuli ya kipimo cha udongo ingechukuliwa.", exceeds: "Anatumia majibu ya kipimo cha udongo, au tarehe ya kukipata, kuunda mpango." },
      { name: "Mbegu, nafasi na tarehe", objective: "O2", notYet: "Chanzo cha mbegu, nafasi au tarehe za kupanda hazipo.", meets: "Mbegu zilizothibitishwa au vipando safi, nafasi inayopendekezwa na tarehe za kupanda kwa mazao yote mawili, pamoja na chanzo cha kila kimoja.", exceeds: "Anajumuisha mpango wa kitalu na wa kuzoesha miche ya mboga." },
      { name: "Kulisha udongo", objective: "O3", notYet: "Mbolea tu ndiyo imeorodheshwa, au viwango vimebahatishwa.", meets: "Mabaki ya viumbe hai, mikunde yoyote, na wakati na mahali pa kuweka mbolea, kwa viwango kutoka kipimo cha udongo au ugani.", exceeds: "Anajumuisha mpango wa mboji na mzunguko wa mazao kwa msimu ujao." },
      { name: "Ukaguzi wa shamba na IPM", objective: "O4", notYet: "Anapanga kunyunyizia kwa ratiba bila kukagua shamba.", meets: "Ratiba ya ukaguzi wa kila wiki, wadudu wakuu wa kuangalia, hatua za kinga na zisizo za kemikali, na kanuni za lebo kwa kiuatilifu chochote.", exceeds: "Anataja wapi pa kupata utambuzi na kiwango cha kuchukua hatua kwa mdudu mmoja mkuu." },
      { name: "Kumwagilia", objective: "O5", notYet: "Hakuna mpango wa kumwagilia mboga.", meets: "Njia ya kumwagilia, wakati wa siku, matandazo na ukaguzi wa unyevu wa udongo.", exceeds: "Anajumuisha njia ya kuvuna au kuokoa maji." },
      { name: "Mavuno na uhifadhi", objective: "O6", notYet: "Kuvuna, kuchambua au kuhifadhi hakupo.", meets: "Wakati wa kuvuna, ushughulikiaji wa upole, kuchambua, kukausha na kuhifadhi, na wapi pa kuuza.", exceeds: "Anataja mahitaji ya ubora ya mnunuzi na jinsi hasara zitakavyofuatiliwa." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubriki wa mpango wa msimu",
      "Wanafunzi wanaoripoti kipimo cha udongo, mbegu zilizothibitishwa au ukaguzi wa kila wiki katika msimu unaofuata (utafiti wa kufuatilia)",
      "Mabadiliko katika hasara za mavuno na baada ya mavuno zinazoripotiwa na wanafunzi au kikundi chao baada ya msimu mmoja",
      "Wanafunzi wanaoanza kozi nyingine ya kilimo ya Koach Learn ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Daftari na kalamu, na simu ya kawaida",
      "Shamba au kitalu cha mboga, na jembe kwa ukaguzi wa udongo",
      "Lebo halisi ya kiuatilifu na pakiti ya mbegu, kama zinapatikana",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi, pamoja na muda shambani na wa kuandika mpango wa msimu"
    ],
    facilitatorNotes: [
      "Katika kikundi cha wakulima au shule ya shambani: fanyeni jaribio la awali pamoja, kisha fanyeni ukaguzi wa udongo na matembezi ya ukaguzi katika shamba halisi.",
      "Mwalike afisa ugani au agrovet atoe nafasi, aina za mbegu na viwango vya mbolea vya eneo hilo; usitoe viwango wewe mwenyewe.",
      "Usichanganye wala kunyunyizia viuatilifu darasani; onyesha lebo na fanyeni mazoezi ya kuisoma.",
      "Pima mpango wa msimu kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};

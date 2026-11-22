"use strict";

// Koach Learn course (Swahili translation of non-profits/nonprofit-california-setup.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const SOS_ARTICLES = { name: "California Secretary of State (Katibu wa Jimbo): fomu na ada za mashirika ya California", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/corporations-california-domestic" };
const SOS_SI = { name: "California Secretary of State: Statement of Information (SI-100 kwa mashirika yasiyo ya faida)", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/corporations-statement-information" };
const BIZFILE = { name: "California Secretary of State: bizfile Online", url: "https://bizfileonline.sos.ca.gov" };
const IRS_EIN = { name: "IRS: Pata Employer Identification Number (EIN)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" };
const IRS_FEE = { name: "IRS: Kiasi cha ada ya Form 1023 na 1023-EZ", url: "https://www.irs.gov/charities-non-profits/form-1023-and-1023-ez-amount-of-user-fee" };
const IRS_1023 = { name: "IRS: Kuhusu Form 1023", url: "https://www.irs.gov/forms-pubs/about-form-1023" };
const IRS_1023EZ = { name: "IRS: Kuhusu Form 1023-EZ (karatasi ya kukagua sifa iko ndani ya maelekezo)", url: "https://www.irs.gov/forms-pubs/about-form-1023-ez" };
const IRS_990N = { name: "IRS: Form 990-N (e-Postcard) kwa mashirika madogo yaliyosamehewa kodi", url: "https://www.irs.gov/charities-non-profits/annual-electronic-filing-requirement-for-small-exempt-organizations-form-990-n-e-postcard" };
const IRS_CHURCH = { name: "IRS Publication 1828: Mwongozo wa kodi kwa makanisa na mashirika ya kidini", url: "https://www.irs.gov/pub/irs-pdf/p1828.pdf" };
const FTB = { name: "California Franchise Tax Board: Mashirika ya hisani na yasiyo ya faida (Form 3500 / 3500A)", url: "https://www.ftb.ca.gov/file/business/types/charities-and-nonprofits/index.html" };
const AG_INITIAL = { name: "California Attorney General: Registry of Charities, usajili wa kwanza (CT-1)", url: "https://oag.ca.gov/charities/initial-reg" };
const AG_RENEW = { name: "California Attorney General: Registry of Charities, kuhuisha kila mwaka (RRF-1)", url: "https://oag.ca.gov/charities/renewals" };

module.exports = {
  id: "nonprofit-california-setup-sw",
  lang: "sw",
  translationOf: "nonprofit-california-setup",
  category: "Non Profits",
  name: "Kuanzisha Shirika Lisilo la Faida California, Pamoja na Gharama",
  skills: "Kuchagua aina sahihi ya shirika lisilo la faida, Kuwasilisha articles kwa Secretary of State, Kupata EIN bure, Kuomba msamaha wa kodi wa serikali kuu na wa jimbo, Kujisajili kwa Attorney General, Kuandaa bajeti na kalenda ya kuanzisha",
  outcome: "kuandaa mpango kamili wenye tarehe wa kuanzisha shirika lisilo la faida la manufaa ya umma (public benefit) California: kila fomu kwa mpangilio sahihi, ofisi inayoipokea, jina la fomu, ada rasmi, na fomu za kila mwaka zinazolifanya shirika libaki katika hali nzuri.",
  about: [
    "Kozi hii ni kwa watu wanaoanzisha shirika la hisani, huduma ya kidini, kikundi cha jamii au programu California: waanzilishi, wachungaji, wajumbe wa bodi na wanaojitolea wanaotaka kufanya vizuri tangu mara ya kwanza.",
    "Utajifunza hatua kwa mpangilio: kuchagua aina ya shirika na bodi yako, kuwasilisha articles of incorporation kwa Secretary of State, kupata EIN bure kutoka IRS, kuomba hadhi ya 501(c)(3), kupata msamaha wa kodi wa California kutoka Franchise Tax Board, na kujisajili katika Registry of Charities ya Attorney General. Kisha utajifunza fomu za kila mwaka na kuandaa bajeti ya gharama.",
    "Kila somo linachukua kama dakika tano. Lisome, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Kila ada katika kozi hii ilikaguliwa kwenye ukurasa rasmi wa serikali tarehe 27 Oktoba 2026, na kiungo kimeorodheshwa ili uweze kukagua tena. Ada hubadilika, kwa hiyo hakikisha kila mara kwenye ukurasa rasmi kabla ya kulipa. Kozi hii ni elimu, si ushauri wa kisheria wala wa kodi: kwa hali yako, ongea na wakili wa mashirika yasiyo ya faida, mhasibu, au kituo cha bure cha msaada kwa mashirika yasiyo ya faida."
  ],
  finalTask: "Andaa mpango wa ukurasa mmoja wa kuanzisha shirika lako (halisi au la mazoezi): jedwali lenye kila fomu kwa mpangilio, ofisi, jina la fomu, ada kutoka ukurasa rasmi, tarehe unayopanga kuiwasilisha, na fomu za kila mwaka pamoja na tarehe zake za mwisho. Ongeza jumla ya gharama za kuanzisha na kiungo cha kila ukurasa rasmi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wanaoanzisha shirika la hisani, huduma ya kidini, kikundi cha jamii au programu California: waanzilishi, wachungaji, wajumbe wa bodi na wanaojitolea wanaotaka kufanya vizuri tangu mara ya kwanza.",
    startingPoint: "Wana lengo (mission) na mara nyingi tayari wana kikundi cha wasaidizi. Wengi hawajawahi kuwasilisha fomu kwa Secretary of State, IRS, Franchise Tax Board wala Attorney General, na hawajui mpangilio wala gharama.",
    gap: "Waanzilishi huwasilisha fomu kwa mpangilio usio sahihi, hulipa tovuti kwa huduma za bure, au hukosa fomu za kila mwaka na kupoteza msamaha wa kodi. Wanafunzi wanahitaji mpango mmoja wenye tarehe wenye kila fomu, ofisi, jina la fomu, ada rasmi na tarehe ya mwisho ya kila mwaka, ili shirika lianze vizuri na libaki katika hali nzuri.",
    constraints: [
      "Ada na fomu hubadilika; kila ada inakaguliwa kwenye ukurasa rasmi kabla ya kuwasilisha",
      "Si ushauri wa kisheria wala wa kodi: wanafunzi wanauliza wakili, kituo cha msaada au mtaalamu wanapokuwa na shaka",
      "Faragha: namba za Social Security au ITIN zinaingizwa tu kwenye tovuti rasmi ya IRS, kamwe si kwenye zana za AI wala barua pepe",
      "Makanisa na vikundi vya kidini vina kanuni maalum za kukagua",
      "Maneno rahisi kwa waanzilishi wa mara ya kwanza; kama dakika 60 kwa jumla"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa hatua za kuanzisha shirika la hisani California", action: "kuorodhesha fomu kuu za kuanzisha kwa mpangilio na ofisi inayoshughulikia kila moja", standard: "kila fomu ikiwa katika mpangilio sahihi" },
    { id: "O2", condition: "Ukipewa kusudi la shirika lako", action: "kuchagua fomu sahihi ya articles of incorporation na kupanga Statement of Information", standard: "mahali pa kuwasilisha na tarehe za mwisho zikiwa sahihi" },
    { id: "O3", condition: "Baada ya articles zako kuwasilishwa", action: "kupata EIN bure kwenye irs.gov na kupanga mkutano wa kwanza wa bodi", standard: "namba za binafsi zikiandikwa tu kwenye tovuti rasmi ya IRS na kila uamuzi wa mkutano wa kwanza ukiwa umeorodheshwa" },
    { id: "O4", condition: "Ukitumia karatasi ya IRS ya kukagua sifa", action: "kuchagua kati ya Form 1023 na Form 1023-EZ na kusema inawasilishwa wapi", standard: "ada ikichukuliwa kutoka ukurasa rasmi" },
    { id: "O5", condition: "Baada ya idhini ya serikali kuu au mchango wako wa kwanza", action: "kupanga msamaha wa Franchise Tax Board na usajili katika Registry ya Attorney General", standard: "kwa fomu sahihi na tarehe ya mwisho ya siku 30 ya Registry" },
    { id: "O6", condition: "Ukipewa ada na tarehe za mwisho zilizokaguliwa", action: "kuandaa bajeti ya kuanzisha na kalenda ya fomu za kila mwaka", standard: "kila ada na tarehe ya mwisho ikiwa imekaguliwa kwenye ukurasa rasmi" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuunda shirika",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ramani ya njia: kile shirika lisilo la faida California linahitaji",
          minutes: 5,
          goal: "Orodhesha fomu kuu za kuanzisha kwa mpangilio sahihi na ofisi inayoshughulikia kila moja.",
          text: [
            "California, shirika la hisani kwa kawaida huwa nonprofit public benefit corporation (shirika lisilo la faida la manufaa ya umma). Kuwa shirika lisilo la faida ni jambo la jimbo. Kusamehewa kodi ni hatua tofauti: mara moja kwa IRS (serikali kuu) na mara moja kwa Franchise Tax Board (jimbo). Mashirika ya hisani yanayochangisha pesa pia hujisajili kwa Attorney General.",
            "Mpangilio wa kawaida ni: 1) chagua kusudi, jina na bodi ya kwanza; 2) wasilisha articles of incorporation kwa Secretary of State; 3) pata EIN kutoka IRS; 4) pitisha bylaws (kanuni za ndani) na fanya mkutano wa kwanza wa bodi; 5) wasilisha Statement of Information; 6) omba hadhi ya 501(c)(3) ya serikali kuu; 7) omba msamaha wa California kwa Franchise Tax Board; 8) jisajili katika Registry of Charities ya Attorney General.",
            "Kufanya haya kwa mpangilio ni muhimu. Kwa mfano, IRS inaambia mashirika yajisajili kwa jimbo kabla ya kuomba EIN, na Attorney General anaomba articles na bylaws zako unapojisajili."
          ],
          steps: ["Andika lengo (mission) lako kwa sentensi moja au mbili.", "Chagua watu watatu au zaidi kwa bodi yako ya kwanza, ukiweza.", "Andika hatua nane kwa mpangilio kwenye ukurasa mmoja.", "Kando ya kila hatua, andika ofisi: Secretary of State, IRS, Franchise Tax Board au Attorney General."],
          words: [["Nonprofit public benefit corporation", "aina ya shirika la California ambayo mashirika mengi ya hisani hutumia; linahudumia umma, si wamiliki."], ["501(c)(3)", "kifungu cha sheria ya kodi ya serikali kuu kwa mashirika ya hisani; michango kwao kwa kawaida inaweza kupunguzwa kwenye kodi ya mchangiaji."], ["Kusamehewa kodi (tax-exempt)", "kutolazimika kulipa kodi ya mapato, baada ya ofisi kuidhinisha."]],
          slides: [
            { title: "Ofisi nne utakazoshughulika nazo", bullets: ["Secretary of State: anaunda shirika", "IRS: EIN na hadhi ya 501(c)(3) ya serikali kuu", "Franchise Tax Board: msamaha wa kodi wa California", "Attorney General: Registry of Charities"] },
            { title: "Mpangilio, sehemu ya 1", bullets: ["1. Lengo, jina, bodi ya kwanza", "2. Articles of incorporation (Secretary of State)", "3. EIN (IRS, bure)", "4. Bylaws na mkutano wa kwanza wa bodi"] },
            { title: "Mpangilio, sehemu ya 2", bullets: ["5. Statement of Information (Secretary of State)", "6. Ombi la 501(c)(3) (IRS)", "7. Form 3500 au 3500A (Franchise Tax Board)", "8. Jisajili kwa Attorney General (CT-1)"] },
            { title: "Aina mbili za hadhi", bullets: ["Shirika lisilo la faida: jambo la jimbo", "Kusamehewa kodi: idhini tofauti ya serikali kuu na ya jimbo"] }
          ],
          sources: [SOS_ARTICLES, IRS_EIN, FTB, AG_INITIAL],
          tryIt: "Andika lengo la shirika lako kwa sentensi moja au mbili. Kisha andika hatua nane za kuanzisha kwa mpangilio na ofisi ya kila moja. Hifadhi ukurasa huu: utakuwa mpango wako wa mwisho wa kuanzisha.",
          youCanNow: "kuorodhesha fomu za kuanzisha shirika lisilo la faida California kwa mpangilio na kutaja ofisi inayoshughulikia kila moja.",
          quickCheck: [
            { objective: "O1", q: "Ofisi gani inashughulikia msamaha wa kodi wa California?", options: ["Franchise Tax Board", "Secretary of State", "Attorney General", "Baraza la jiji"], answer: 0, why: "Msamaha wa kodi uko kwa IRS (serikali kuu) na Franchise Tax Board (jimbo)." },
            { objective: "O1", q: "Mwanzilishi anataka kuomba EIN kabla ya kuwasilisha articles. Unamwambia nini?", options: ["Mpangilio wowote ni sawa", "Wasilisha articles kwa Secretary of State kwanza, kama IRS inavyoambia mashirika", "Ruka articles", "Jisajili kwa Attorney General kwanza"], answer: 1, why: "IRS inaambia mashirika yajisajili kwa jimbo kabla ya kuomba EIN." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuwasilisha articles of incorporation",
          minutes: 5,
          goal: "Chagua fomu sahihi ya articles na uiwasilishe kwa Secretary of State.",
          text: [
            "Articles of incorporation zinaunda shirika lako. California Secretary of State ana aina tatu kwa mashirika yasiyo ya faida: Form ARTS-PB (manufaa ya umma), Form ARTS-RE (ya kidini) na Form ARTS-MU (manufaa ya wanachama). Ada ya kuwasilisha kwa kila moja ilikuwa $30 tulipokagua.",
            "Mashirika mengi ya hisani hutumia manufaa ya umma. Kanisa au huduma ya kidini inaweza kutumia fomu ya kidini. Manufaa ya wanachama ni kwa vikundi vinavyohudumia wanachama wao wenyewe, kama baadhi ya vilabu, na haifai mashirika mengi ya hisani. Ukipanga kuomba hadhi ya 501(c)(3), IRS inahitaji maneno fulani katika articles zako kuhusu kusudi lako na kinachotokea kwa mali yako ukifunga. Soma maelekezo ya fomu, na umwombe wakili wa mashirika yasiyo ya faida au kituo cha msaada aikague.",
            "Unaweza kuwasilisha mtandaoni kwenye bizfile Online (bizfileonline.sos.ca.gov), au kwa posta au ana kwa ana. Tafuta jina kwanza kuhakikisha halijachukuliwa. Ndani ya siku 90, pia unawasilisha Statement of Information (Form SI-100, $20), na tena kila baada ya miaka miwili."
          ],
          steps: ["Tafuta jina lako kwenye bizfile Online.", "Chagua fomu: ARTS-PB kwa mashirika mengi ya hisani, ARTS-RE kwa vikundi vya kidini.", "Ijaze kwa jina lako, kusudi na agent for service of process.", "Wasilisha mtandaoni na ulipe ada iliyoonyeshwa kwenye ukurasa rasmi.", "Weka Statement of Information (SI-100) kwenye kalenda yako: ndani ya siku 90, kisha kila baada ya miaka miwili."],
          words: [["Articles of incorporation", "hati fupi inayounda shirika lako kisheria."], ["Agent for service of process", "mtu au kampuni inayokubali kupokea karatasi za kisheria kwa niaba ya shirika."], ["Statement of Information", "fomu inayoliambia jimbo anwani yako na viongozi wako; mashirika yasiyo ya faida huwasilisha SI-100."]],
          slides: [
            { title: "Fomu tatu za articles kwa mashirika yasiyo ya faida", bullets: ["ARTS-PB: manufaa ya umma (mashirika mengi ya hisani)", "ARTS-RE: ya kidini", "ARTS-MU: manufaa ya wanachama (inahudumia wanachama)"] },
            { title: "Ada tulipokagua (27 Okt 2026)", bullets: ["Articles: $30", "Statement of Information SI-100: $20", "Hakikisha kila mara kwenye sos.ca.gov kabla ya kulipa"] },
            { title: "Jinsi ya kuwasilisha", bullets: ["Tafuta jina kwanza", "Wasilisha mtandaoni kwenye bizfileonline.sos.ca.gov", "Au kwa posta au ana kwa ana"] },
            { title: "Usisahau", bullets: ["SI-100 ndani ya siku 90 baada ya kuwasilisha", "Kisha kila baada ya miaka miwili", "Maneno ya 501(c)(3): articles zikaguliwe na mtaalamu"] }
          ],
          sources: [SOS_ARTICLES, SOS_SI, BIZFILE],
          tryIt: "Fungua ukurasa wa fomu wa Secretary of State. Tafuta fomu ya articles inayofaa kikundi chako na uandike jina la fomu na ada ya sasa. Kisha tafuta ada ya SI-100 na uongeze zote mbili kwenye mpango wako pamoja na tarehe ya mwisho ya SI-100.",
          youCanNow: "kuchagua fomu sahihi ya articles, kupata ada yake kwenye ukurasa rasmi, na kupanga Statement of Information yako.",
          quickCheck: [
            { objective: "O2", q: "Fomu gani ya articles haifai mashirika mengi ya hisani?", options: ["ARTS-PB", "ARTS-RE", "ARTS-MU (manufaa ya wanachama)", "Hakuna inayofaa"], answer: 2, why: "Manufaa ya wanachama ni kwa vikundi vinavyohudumia wanachama wao wenyewe na haifai mashirika mengi ya hisani." },
            { objective: "O2", q: "Unataka kuliita shirika lako \"Hope Kitchen.\" Unafanya nini kabla ya kuwasilisha?", options: ["Wasilisha mara moja", "Uliza AI kama jina halijachukuliwa", "Lipa tovuti ilihifadhi", "Tafuta jina kwanza kuhakikisha halijachukuliwa"], answer: 3, why: "Tafuta jina kwanza kuhakikisha halijachukuliwa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kupata EIN, bylaws na mkutano wa kwanza wa bodi",
          minutes: 5,
          goal: "Pata EIN bure kwa usalama na uandae mkutano wa kwanza wa bodi.",
          text: [
            "EIN (Employer Identification Number) ni namba ya utambulisho wa kodi ya shirika kwa serikali kuu. Unaihitaji kwa akaunti ya benki, kwa mishahara na kwa maombi yako ya msamaha wa kodi. IRS inasema hulazimiki kamwe kulipia EIN. Baadhi ya tovuti hutoza pesa kwa ajili yake: ziepuke na uombe kwenye irs.gov.",
            "Zana ya IRS ya mtandaoni inahitaji namba ya Social Security au ITIN ya mtu mwenye jukumu (responsible party), na lazima ikamilishwe kwa kikao kimoja. Andika namba hizi za binafsi tu kwenye tovuti rasmi ya IRS, kamwe si kwenye zana ya AI, barua pepe au tovuti nyingine yoyote. Chapisha au hifadhi barua ya uthibitisho.",
            "Bylaws ni kanuni zako: wakurugenzi wangapi, wanavyochaguliwa, mikutano inavyoendeshwa, na nani anasaini hundi. Katika mkutano wa kwanza wa bodi, bodi inapitisha bylaws, inachagua viongozi, inaidhinisha kufungua akaunti ya benki na inapitisha sera ya mgongano wa maslahi. Andika kumbukumbu za mkutano (minutes) na uzihifadhi."
          ],
          steps: ["Subiri hadi Secretary of State apokee na kusajili articles zako.", "Nenda irs.gov na uombe EIN kwa zana ya bure ya mtandaoni.", "Hifadhi barua ya uthibitisho wa EIN kwenye faili yako ya kumbukumbu.", "Andaa rasimu ya bylaws na sera ya mgongano wa maslahi.", "Fanya mkutano wa kwanza wa bodi na uandike kumbukumbu za mkutano."],
          words: [["EIN", "Employer Identification Number: namba ya bure ya utambulisho wa kodi ya shirika kwa serikali kuu."], ["Bylaws", "kanuni zilizoandikwa za jinsi shirika na bodi yake vinavyoendeshwa."], ["Minutes (kumbukumbu za mkutano)", "maandishi ya kile bodi iliamua katika mkutano."], ["Sera ya mgongano wa maslahi", "kanuni za kile mjumbe wa bodi lazima afanye uamuzi unapoweza kumnufaisha yeye binafsi."]],
          slides: [
            { title: "EIN yako", bullets: ["Namba ya utambulisho wa kodi ya shirika (serikali kuu)", "Bure kwenye irs.gov: usilipe tovuti kamwe kwa ajili yake", "Inahitajika kwa benki na fomu za msamaha wa kodi"] },
            { title: "Linda namba za binafsi", bullets: ["SSN au ITIN inaingia tu kwenye tovuti rasmi ya IRS", "Kamwe si kwenye zana za AI, barua pepe au tovuti nyingine", "Hifadhi barua ya uthibitisho"] },
            { title: "Mkutano wa kwanza wa bodi", bullets: ["Pitisha bylaws", "Chagua viongozi", "Idhinisha akaunti ya benki", "Pitisha sera ya mgongano wa maslahi"] }
          ],
          sources: [IRS_EIN],
          tryIt: "Andaa ajenda ya mkutano wa kwanza yenye vipengele vitano: kupitisha bylaws, kuchagua viongozi, kuidhinisha akaunti ya benki, kupitisha sera ya mgongano wa maslahi, na kupanga tarehe ya mkutano unaofuata. Ongeza \"Omba EIN kwenye irs.gov (bure)\" kwenye mpango wako na tarehe baada ya articles zako kuwasilishwa.",
          youCanNow: "kupata EIN kwa usalama na bure, na kuendesha mkutano wa kwanza wa bodi wenye maamuzi sahihi kwenye ajenda.",
          quickCheck: [
            { objective: "O3", q: "Unahitaji EIN kwa ajili ya nini?", options: ["Akaunti ya benki, mishahara na maombi ya msamaha wa kodi", "Kununua jengo tu", "Kwa makanisa tu", "Hakuna; ni pambo la hiari"], answer: 0, why: "EIN ni namba ya utambulisho wa kodi ya shirika kwa benki, mishahara na maombi ya msamaha." },
            { objective: "O3", q: "Unajaza zana ya IRS ya EIN mtandaoni na unahitaji kusimama katikati. Unapaswa kujua nini?", options: ["Unaweza kuhifadhi na kumaliza wiki ijayo", "Lazima ikamilishwe kwa kikao kimoja", "AI inaweza kukumalizia", "Unaweza kutuma sehemu iliyobaki kwa IRS kwa barua pepe"], answer: 1, why: "Zana ya IRS ya mtandaoni lazima ikamilishwe kwa kikao kimoja." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuunda shirika",
        questions: [
          { objective: "O1", q: "Ofisi gani inaunda shirika lisilo la faida la California?", options: ["IRS", "California Secretary of State", "Attorney General", "Karani wa kaunti"], answer: 1, why: "Articles of incorporation zinawasilishwa kwa Secretary of State." },
          { objective: "O2", q: "Ghala la chakula linaloendeshwa kwa ajili ya jamii nzima kuna uwezekano mkubwa litawasilisha fomu gani ya articles?", options: ["ARTS-MU (manufaa ya wanachama)", "ARTS-RE (ya kidini)", "ARTS-PB (manufaa ya umma)", "Fomu ya LLC ya biashara"], answer: 2, why: "Mashirika ya hisani yanayohudumia umma kwa kawaida huwasilisha articles za manufaa ya umma." },
          { objective: "O3", q: "Tovuti inajitolea kukupatia EIN kwa $79. Unapaswa kufanya nini?", options: ["Lipa, ni haraka zaidi", "Omba bure kwenye irs.gov", "Mwombe Attorney General alipe", "Ruka EIN"], answer: 1, why: "IRS inasema EIN haigharimu pesa kamwe; omba kwenye irs.gov." },
          { objective: "O2", q: "Statement of Information (SI-100) ya kwanza inatakiwa lini?", options: ["Ndani ya siku 90 baada ya kuwasilisha articles", "Unapofunga tu", "Kila baada ya miaka kumi", "Kamwe kwa mashirika yasiyo ya faida"], answer: 0, why: "Secretary of State anasema ndani ya siku 90, kisha kila baada ya miaka miwili." },
          { objective: "O3", q: "Kipi ni kazi ya mkutano wa kwanza wa bodi?", options: ["Kuwasilisha 990-N", "Kupitisha bylaws na kuchagua viongozi", "Kulipa ada ya IRS", "Kuhuisha usajili kwa Attorney General"], answer: 1, why: "Mkutano wa kwanza unapitisha bylaws, unachagua viongozi na unaidhinisha mambo ya msingi kama akaunti ya benki." }
        ]
      }
    },
    {
      name: "Sura 2: Msamaha wa kodi, usajili na gharama",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuomba hadhi ya 501(c)(3) ya serikali kuu",
          minutes: 6,
          goal: "Chagua kati ya Form 1023 na Form 1023-EZ na ujue ada.",
          text: [
            "Ili kuwa shirika la hisani la 501(c)(3), mashirika mengi huomba kwa IRS. Kuna fomu mbili. Form 1023 ni ombi kamili; ada yake ilikuwa $600 tulipokagua. Form 1023-EZ ni fomu fupi kwa mashirika madogo; ada yake ilikuwa $275. Zote mbili zinawasilishwa mtandaoni kwenye Pay.gov, na ada inalipwa hapo unapowasilisha.",
            "Si kila mtu anaweza kutumia 1023-EZ. IRS ina karatasi ya kukagua sifa mwishoni mwa maelekezo ya Form 1023-EZ. Inaangalia mambo kama kiasi cha pesa unachotarajia kuchangisha na mali yako. Jaza karatasi hiyo kwa uaminifu kabla ya kuchagua.",
            "Makanisa yana kanuni maalum: IRS inashughulikia makanisa tofauti na mashirika mengine ya hisani, na mengi hayalazimiki kuomba, ingawa baadhi huchagua kuomba. Soma IRS Publication 1828 au uliza mtaalamu. IRS ikikuidhinisha, inatuma determination letter (barua ya uamuzi). Ihifadhi milele: wachangiaji, watoaji ruzuku na jimbo wataiomba."
          ],
          steps: ["Fungua maelekezo ya Form 1023-EZ kwenye irs.gov na ujaze karatasi ya kukagua sifa.", "Ukistahili na ikafaa, panga 1023-EZ; kama sivyo, panga Form 1023.", "Fungua akaunti ya Pay.gov na ujaze fomu hapo.", "Lipa ada iliyoonyeshwa kwenye ukurasa wa ada wa IRS.", "Hifadhi determination letter itakapofika."],
          words: [["Form 1023", "ombi kamili la IRS la hadhi ya 501(c)(3)."], ["Form 1023-EZ", "ombi fupi la IRS kwa mashirika madogo yanayopita karatasi ya kukagua sifa."], ["Ada ya mtumiaji (user fee)", "ada ambayo IRS inatoza kukagua ombi."], ["Determination letter", "barua ya IRS inayosema shirika lako limesamehewa kodi."]],
          slides: [
            { title: "Fomu mbili za serikali kuu", bullets: ["Form 1023: ombi kamili, ada $600", "Form 1023-EZ: fomu fupi, ada $275", "Ada tulipokagua, 27 Okt 2026: hakikisha kwenye irs.gov"] },
            { title: "Ipi?", bullets: ["Jaza karatasi ya kukagua sifa katika maelekezo ya 1023-EZ", "Unastahili na inafaa: 1023-EZ", "Hustahili: Form 1023"] },
            { title: "Jinsi ya kuwasilisha", bullets: ["Mtandaoni kwenye Pay.gov", "Lipa ada unapowasilisha"] },
            { title: "Makanisa na barua", bullets: ["Makanisa yana kanuni maalum: tazama IRS Publication 1828", "Hifadhi determination letter milele"] }
          ],
          sources: [IRS_FEE, IRS_1023, IRS_1023EZ, IRS_CHURCH],
          tryIt: "Fungua maelekezo ya Form 1023-EZ kwenye irs.gov na usome karatasi ya kukagua sifa. Amua shirika lako lingewasilisha fomu ipi, kisha ongeza fomu hiyo, ada kutoka ukurasa wa ada wa IRS, na tarehe lengwa kwenye mpango wako.",
          youCanNow: "kuamua kati ya Form 1023 na 1023-EZ, kupata ada ya sasa, na kujua mahali pa kuwasilisha.",
          quickCheck: [
            { objective: "O4", q: "Ada ya IRS ya Form 1023 au 1023-EZ inalipwa lini?", options: ["Mwaka mmoja baada ya idhini", "Kwa hundi kwa Secretary of State", "Kwenye Pay.gov unapowasilisha", "Kamwe"], answer: 2, why: "Fomu zote mbili zinawasilishwa mtandaoni kwenye Pay.gov, na ada inalipwa hapo unapowasilisha." },
            { objective: "O4", q: "IRS inatuma determination letter yako. Unaifanyia nini?", options: ["Itupe baada ya mwaka mmoja", "Mpe mchangiaji nakala pekee", "Ibandike kwenye AI", "Ihifadhi milele, kwa sababu wachangiaji, watoaji ruzuku na jimbo wataiomba"], answer: 3, why: "Hifadhi determination letter milele; wengi wataiomba." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Msamaha wa California na Registry of Charities",
          minutes: 5,
          goal: "Panga msamaha wa Franchise Tax Board na usajili kwa Attorney General.",
          text: [
            "Idhini ya serikali kuu peke yake haikusamehe kodi ya California. Pia unaomba kwa Franchise Tax Board (FTB). Form 3500 ni ombi kamili la California. Form 3500A ni fomu fupi kwa mashirika ambayo tayari yana determination letter ya IRS. Kagua ftb.ca.gov kwa fomu ya sasa, maelekezo na ada yoyote kabla ya kuwasilisha, kwa sababu hatukuweza kuthibitisha ada kwenye ukurasa wa FTB kwa kozi hii.",
            "Mashirika ya hisani yanayoshikilia au kuchangisha pesa kwa makusudi ya hisani California pia hujisajili katika Registry of Charities ya Attorney General. Unajisajili mtandaoni kwa Form CT-1 ndani ya siku 30 baada ya kupokea mali ya hisani kwa mara ya kwanza, kama mchango wako wa kwanza. Ada ilikuwa $50 tulipokagua. Unapakia articles zako, bylaws, determination letter ya IRS (au EIN yako kama bado huna barua) na Form 1023 au 1023-EZ yako kama uliwasilisha.",
            "Baadhi ya vikundi vinaweza kusamehewa usajili wa Registry. Ukidhani chako ni kimojawapo (kwa mfano, shirika la kidini), soma kurasa za Registry au uliza Registry kabla ya kuruka usajili."
          ],
          steps: ["Barua ya IRS ikifika, panga Form 3500A kwenye ftb.ca.gov (au Form 3500 ukiomba bila barua).", "Andika tarehe unayopokea mchango au mali nyingine ya hisani kwa mara ya kwanza.", "Ndani ya siku 30 baada ya tarehe hiyo, jisajili mtandaoni kwa Form CT-1.", "Pakia articles, bylaws, barua ya IRS au EIN, na 1023 au 1023-EZ yako.", "Lipa ada ya Registry iliyoonyeshwa kwenye oag.ca.gov."],
          words: [["Franchise Tax Board (FTB)", "ofisi ya kodi ya jimbo la California."], ["Form 3500A", "fomu fupi ya msamaha wa California kwa vikundi ambavyo tayari vina barua ya 501(c)(3) ya serikali kuu."], ["Registry of Charities", "ofisi ya Attorney General inayosajili na kusimamia mashirika ya hisani California."], ["CT-1", "fomu ya Attorney General ya usajili wa kwanza wa mashirika ya hisani."]],
          slides: [
            { title: "Msamaha wa kodi wa California (FTB)", bullets: ["Tofauti na idhini ya IRS", "Form 3500: ombi kamili", "Form 3500A: kama tayari una barua ya IRS", "Kagua ftb.ca.gov kwa ada ya sasa"] },
            { title: "Registry of Charities (Attorney General)", bullets: ["Form CT-1, inawasilishwa mtandaoni", "Ndani ya siku 30 baada ya kupokea mali ya hisani kwa mara ya kwanza", "Ada: $50 tulipokagua, 27 Okt 2026"] },
            { title: "Andaa hivi kwa CT-1", bullets: ["Articles na bylaws", "Determination letter ya IRS, au EIN kama bado huna barua", "Form 1023 au 1023-EZ yako, kama uliwasilisha"] }
          ],
          sources: [FTB, AG_INITIAL],
          tryIt: "Ongeza mistari miwili kwenye mpango wako: msamaha wa FTB (jina la fomu, \"kagua ada kwenye ftb.ca.gov\", tarehe lengwa baada ya barua ya IRS) na CT-1 ya Attorney General ($50, ndani ya siku 30 baada ya mchango wako wa kwanza). Andika orodha ya hati nne utakazopakia.",
          youCanNow: "kupanga msamaha wako wa kodi wa California na usajili wako katika Registry of Charities kwa fomu, muda na hati sahihi.",
          quickCheck: [
            { objective: "O5", q: "Fomu gani ni ombi kamili la msamaha wa California?", options: ["Form 3500", "Form CT-1", "Form SI-100", "Form RRF-1"], answer: 0, why: "Form 3500 ni ombi kamili la California; 3500A ni fupi zaidi." },
            { objective: "O5", q: "Huduma yako ya kidini inadhani huenda imesamehewa usajili wa Registry. Unafanya nini?", options: ["Ruka bila kukagua", "Soma kurasa za Registry au uliza Registry kabla ya kuruka", "Muulize rafiki", "Jisajili kwa IRS badala yake"], answer: 1, why: "Kagua kurasa za Registry au uliza Registry kabla ya kuruka usajili." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kubaki katika hali nzuri na bajeti yako ya kuanzisha",
          minutes: 6,
          goal: "Andaa bajeti ya kuanzisha na kalenda ya fomu za kila mwaka.",
          text: [
            "Kuanza si mwisho. Kila mwaka unawasilisha kwa IRS: vikundi vidogo ambavyo mapato yao ghafi kwa kawaida ni $50,000 au chini kwa kawaida vinaweza kuwasilisha Form 990-N e-Postcard; vikubwa zaidi huwasilisha Form 990-EZ au 990. Ukikosa miaka mitatu mfululizo, IRS inaondoa msamaha wako wa kodi moja kwa moja.",
            "Kila mwaka pia unahuisha usajili kwa Attorney General kwa Form RRF-1. Ada inategemea jumla ya mapato: tulipokagua ilikuwa $25 chini ya $50,000, $50 kutoka $50,000 hadi $100,000, na $75 kutoka $100,001 hadi $250,000, ikipanda kwa mashirika makubwa zaidi. Inatakiwa miezi 4 na siku 15 baada ya mwaka wako wa fedha kuisha (May 15 kwa mwaka unaoisha December 31). Pia una Statement of Information kila baada ya miaka miwili, na fomu za kila mwaka za California kwa FTB: kagua ftb.ca.gov kujua fomu ipi inakufaa.",
            "Ada za serikali za kuanzisha, tulipokagua: articles $30, Statement of Information $20, EIN bure, IRS $275 (1023-EZ) au $600 (1023), Registry $50, pamoja na ada yoyote ya FTB. Hiyo ni kama $375 ukitumia 1023-EZ au $700 ukitumia Form 1023, kabla ya ada yoyote ya FTB, huduma ya registered agent, au wakili. Tumia AI kusaidia kuandaa jedwali la bajeti au orodha ya vikumbusho, lakini kagua kila namba kwenye ukurasa rasmi."
          ],
          steps: ["Orodhesha kila ada ya kuanzisha kutoka kurasa rasmi.", "Zijumlishe kwa fomu uliyochagua (1023-EZ au 1023).", "Ongeza fomu za kila mwaka: mfululizo wa 990 wa IRS, RRF-1 ya Attorney General, fomu ya kila mwaka ya FTB.", "Ongeza Statement of Information kila baada ya miaka miwili.", "Weka kila tarehe ya mwisho kwenye kalenda ya pamoja yenye vikumbusho viwili."],
          words: [["Form 990-N", "e-Postcard ya IRS: taarifa fupi ya kila mwaka ya mtandaoni kwa vikundi vidogo vilivyosamehewa kodi."], ["RRF-1", "fomu ya Attorney General ya kuhuisha usajili wa mashirika ya hisani kila mwaka."], ["Mwaka wa fedha (fiscal year)", "kipindi cha miezi 12 ambacho shirika lako hutumia kwa hesabu zake, mara nyingi January hadi December."], ["Hali nzuri (good standing)", "kuwa umewasilisha fomu zote zinazotakiwa na kulipa ada zote kwa wakati."]],
          slides: [
            { title: "Kila mwaka", bullets: ["IRS: 990-N, 990-EZ au 990", "Attorney General: RRF-1, ada kulingana na mapato", "FTB: kagua ftb.ca.gov kwa fomu yako ya kila mwaka"] },
            { title: "Kuwa mwangalifu", bullets: ["Ukikosa fomu ya IRS miaka 3 mfululizo: unapoteza msamaha", "RRF-1 inatakiwa miezi 4 na siku 15 baada ya mwaka kuisha", "SI-100 kila baada ya miaka miwili"] },
            { title: "Ada za kuanzisha (zilikaguliwa 27 Okt 2026)", bullets: ["Articles $30 + SI-100 $20 + EIN bure", "IRS: $275 (1023-EZ) au $600 (1023)", "Registry CT-1 $50, pamoja na ada yoyote ya FTB"] },
            { title: "Jumla yako", bullets: ["Kama $375 kwa 1023-EZ, $700 kwa 1023", "Kabla ya ada ya FTB, huduma ya agent au wakili", "Hakikisha kila ada kwenye ukurasa rasmi"] }
          ],
          sources: [IRS_990N, AG_RENEW, SOS_SI, IRS_FEE, SOS_ARTICLES, AG_INITIAL, FTB],
          tryIt: "Kazi ya mwisho: maliza mpango wako wa ukurasa mmoja wa kuanzisha. Tengeneza jedwali lenye kila fomu kwa mpangilio, ofisi, fomu, ada kutoka ukurasa rasmi, na tarehe yako lengwa. Ongeza fomu za kila mwaka na tarehe zake za mwisho, jumla ya gharama za kuanzisha, na kiungo rasmi cha kila mstari.",
          youCanNow: "kuandaa mpango kamili wa kuanzisha shirika lisilo la faida California wenye gharama na kalenda ya kila mwaka inayolifanya shirika libaki katika hali nzuri.",
          quickCheck: [
            { objective: "O6", q: "Fomu gani ya kila mwaka inaenda kwa Attorney General?", options: ["Form 990-N", "Form 1023", "Form RRF-1", "Form ARTS-PB"], answer: 2, why: "Kila mwaka unahuisha usajili kwa Attorney General kwa Form RRF-1." },
            { objective: "O6", q: "AI inaandaa rasimu ya jedwali la bajeti yako ya kuanzisha. Unazifanyia nini ada zilizomo?", options: ["Ziamini; AI iko na taarifa za karibuni", "Zizungushe juu", "Ziache wazi", "Kagua kila namba kwenye ukurasa rasmi"], answer: 3, why: "Tumia AI kuandaa jedwali, lakini kagua kila namba kwenye ukurasa rasmi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Msamaha wa kodi, usajili na gharama",
        questions: [
          { objective: "O4", q: "Ada za IRS za Form 1023 na Form 1023-EZ zilikuwa kiasi gani tulipokagua?", options: ["$100 na $50", "$600 na $275", "Bure kwa zote mbili", "$1,000 na $500"], answer: 1, why: "Ukurasa wa ada wa IRS ulionyesha $600 kwa Form 1023 na $275 kwa Form 1023-EZ." },
          { objective: "O5", q: "Shirika lako tayari lina determination letter ya IRS. Fomu gani ya California imetengenezwa kwa ajili yako?", options: ["Form 3500A", "Form CT-1", "Form SI-100", "Form 990-N"], answer: 0, why: "Form 3500A ni fomu fupi ya FTB kwa vikundi ambavyo tayari vina barua ya serikali kuu." },
          { objective: "O5", q: "Ulipokea mchango wako wa kwanza tarehe 1 March. Lazima ujisajili katika Registry of Charities lini?", options: ["Ndani ya siku 30", "Ndani ya miaka 2", "Baada tu ya kuchangisha $50,000", "Kamwe"], answer: 0, why: "Attorney General anasema jisajili ndani ya siku 30 baada ya kupokea mali ya hisani kwa mara ya kwanza." },
          { objective: "O6", q: "Nini kinatokea ukikosa fomu ya kila mwaka ya IRS miaka mitatu mfululizo?", options: ["Hakuna kitu", "Faini ya $10", "Unapoteza msamaha wa kodi moja kwa moja", "EIN yako inabadilika"], answer: 2, why: "IRS inaondoa msamaha moja kwa moja baada ya miaka mitatu mfululizo bila kuwasilisha." },
          { objective: "O6", q: "Shirika la hisani lenye jumla ya mapato ya $40,000 linahuisha usajili kwa Attorney General. Ada ya RRF-1 ilikuwa kiasi gani tulipokagua?", options: ["$200", "$100", "$75", "$25"], answer: 3, why: "Jedwali la RRF-1 lilionyesha $25 kwa jumla ya mapato chini ya $50,000." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kuanzisha Shirika Lisilo la Faida California, Pamoja na Gharama",
    questions: [
      { objective: "O1", q: "Kuwa shirika lisilo la faida na kusamehewa kodi ni:", options: ["Hatua moja ileile", "Mambo ya serikali kuu tu", "Yanahitajika kwa makanisa tu", "Hatua tofauti zenye ofisi tofauti"], answer: 3, why: "Jimbo linaunda shirika; IRS na FTB zinatoa msamaha kila moja peke yake." },
      { objective: "O1", q: "Kipi kinakuja kwanza?", options: ["Kujisajili kwa Attorney General", "Kuwasilisha articles kwa Secretary of State", "Kuwasilisha Form 3500A", "Kuwasilisha RRF-1"], answer: 1, why: "Shirika lazima liwepo kabla ya fomu nyingine." },
      { objective: "O1", q: "Ofisi gani inashughulikia Registry of Charities?", options: ["IRS", "Franchise Tax Board", "California Attorney General", "Secretary of State"], answer: 2, why: "Registry of Charities ni sehemu ya ofisi ya Attorney General." },
      { objective: "O2", q: "Mashirika mengi ya hisani California huwasilisha aina gani ya articles?", options: ["Manufaa ya wanachama", "Shirika la kawaida la hisa", "LLC", "Manufaa ya umma"], answer: 3, why: "Mashirika ya manufaa ya umma yanahudumia umma, jambo linalofaa mashirika mengi ya hisani." },
      { objective: "O2", q: "Ada ya Secretary of State kwa articles za shirika lisilo la faida ilikuwa kiasi gani tulipokagua?", options: ["$30", "$300", "$600", "Bure"], answer: 0, why: "Ukurasa wa fomu ulionyesha $30 kwa ARTS-PB, ARTS-RE na ARTS-MU." },
      { objective: "O2", q: "Unaweza kuwasilisha articles mtandaoni wapi?", options: ["Pay.gov", "irs.gov", "Zana yoyote ya AI", "bizfileonline.sos.ca.gov"], answer: 3, why: "bizfile Online ni tovuti ya Secretary of State ya kuwasilisha mtandaoni." },
      { objective: "O2", q: "Baada ya ile ya kwanza, Statement of Information (SI-100) ya shirika lisilo la faida inawasilishwa mara ngapi?", options: ["Kila mwezi", "Kila mwaka", "Kila baada ya miaka miwili", "Haiwasilishwi tena"], answer: 2, why: "Secretary of State anasema kila baada ya miaka miwili." },
      { objective: "O3", q: "IRS inatoza kiasi gani kwa EIN?", options: ["$50", "$25", "Inategemea jimbo lako", "Hakuna"], answer: 3, why: "IRS inasema hulazimiki kamwe kulipa ada kwa EIN." },
      { objective: "O3", q: "Unapaswa kuandika namba ya Social Security ya mtu mwenye jukumu kwa ajili ya EIN wapi?", options: ["Kwenye tovuti rasmi ya IRS tu", "Kwenye msaidizi wa AI ili aikague", "Katika barua pepe ya kikundi kwa bodi", "Kwenye tovuti yoyote inayotoa msaada"], answer: 0, why: "Namba za binafsi zinaingia tu kwenye tovuti rasmi ya ofisi husika." },
      { objective: "O3", q: "Uamuzi gani unafaa katika mkutano wa kwanza wa bodi?", options: ["Kuwasilisha 990-N", "Kupitisha sera ya mgongano wa maslahi", "Kulipa RRF-1", "Kupata barua ya IRS"], answer: 1, why: "Mkutano wa kwanza unapitisha bylaws na sera, na unachagua viongozi." },
      { objective: "O4", q: "Unaamuaje kama unaweza kutumia Form 1023-EZ?", options: ["Uliza tovuti yoyote", "Chagua iliyo nafuu zaidi", "Attorney General anaamua", "Jaza karatasi ya IRS ya kukagua sifa katika maelekezo ya 1023-EZ"], answer: 3, why: "Karatasi ya IRS ya kukagua sifa inaamua nani anaweza kutumia fomu fupi." },
      { objective: "O4", q: "Form 1023 na 1023-EZ zinawasilishwa wapi?", options: ["Kwa faksi kwenda Sacramento", "Katika ofisi ya kaunti", "Mtandaoni kwenye Pay.gov", "Kwenye bizfile Online"], answer: 2, why: "IRS inasema zote mbili zinajazwa na kulipiwa kwenye Pay.gov." },
      { objective: "O4", q: "Determination letter ya IRS inaonyesha nini?", options: ["Jina la shirika lako liliidhinishwa", "Shirika lako limesamehewa kodi chini ya sheria ya serikali kuu", "Ulilipa ada yako ya Registry", "Namba yako ya EIN"], answer: 1, why: "Determination letter inathibitisha msamaha wa kodi wa serikali kuu." },
      { objective: "O4", q: "Kanisa linataka kujua kama lazima liwasilishe Form 1023. Liangalie wapi kwanza?", options: ["IRS Publication 1828 au mtaalamu", "Chapisho la mitandao ya kijamii", "DMV", "Form SI-100"], answer: 0, why: "Makanisa yana kanuni maalum za IRS zinazoelezwa katika Publication 1828." },
      { objective: "O5", q: "Baada ya idhini ya serikali kuu, shirika lisilo la faida la California linasamehewa kodi ya jimbo:", options: ["Moja kwa moja", "Baada tu ya FTB kuidhinisha (Form 3500 au 3500A)", "Kama ni kanisa tu", "Kamwe"], answer: 1, why: "Msamaha wa California ni ombi tofauti kwa Franchise Tax Board." },
      { objective: "O5", q: "Unapakia hati gani kwa CT-1 ya Attorney General?", options: ["Articles, bylaws, barua ya IRS au EIN, na 1023 yako kama uliwasilisha", "Kitambulisho chenye picha tu", "Majina na anwani za wachangiaji", "Nywila ya benki yako"], answer: 0, why: "Registry inaomba hati za kuanzisha, bylaws, barua ya IRS au EIN na ombi la msamaha." },
      { objective: "O5", q: "Ada ya usajili wa kwanza wa Registry ilikuwa kiasi gani tulipokagua?", options: ["$25", "$50", "$275", "$600"], answer: 1, why: "Ukurasa wa usajili wa kwanza ulionyesha ada ya $50." },
      { objective: "O6", q: "Mapato ghafi ya shirika dogo la hisani kwa kawaida ni $50,000 au chini. Kwa kawaida linaweza kutumia fomu gani ya kila mwaka ya IRS?", options: ["Form 1023", "Form 990-N e-Postcard", "Form CT-1", "Form ARTS-PB"], answer: 1, why: "IRS inaruhusu vikundi vingi vidogo chini ya kiasi hicho kuwasilisha 990-N." },
      { objective: "O6", q: "Mwaka wako wa fedha unaisha December 31. RRF-1 kwa kawaida inatakiwa lini?", options: ["January 1", "March 1", "May 15", "December 31"], answer: 2, why: "Inatakiwa miezi 4 na siku 15 baada ya mwaka kuisha, yaani May 15." },
      { objective: "O6", q: "Kwa ada zilizokaguliwa, ada za serikali za kuanzisha kwa Form 1023-EZ ni kama kiasi gani, kabla ya ada yoyote ya FTB?", options: ["Kama $375", "Kama $50", "Kama $1,500", "Hakuna"], answer: 0, why: "$30 articles + $20 SI-100 + $275 1023-EZ + $50 CT-1 = $375, na EIN ni bure." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [1, 3, 7, 10, 14, 17, 19] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Fomu kwa mpangilio", objective: "O1", notYet: "Fomu moja haipo au haiko katika mpangilio.", meets: "Kila fomu ya kuanzisha imeorodheshwa kwa mpangilio sahihi pamoja na ofisi yake.", exceeds: "Anaeleza kwa nini mpangilio ni muhimu kwa angalau hatua mbili." },
      { name: "Fomu sahihi", objective: "O2", notYet: "Fomu isiyo sahihi imetajwa, kama articles za manufaa ya wanachama kwa shirika la hisani.", meets: "Kila uwasilishaji unataja fomu sahihi, pamoja na articles, SI-100, 1023 au 1023-EZ, 3500 au 3500A, na CT-1.", exceeds: "Anaeleza uchaguzi kati ya 1023 na 1023-EZ kwa kutumia karatasi ya kukagua sifa." },
      { name: "Ada rasmi na viungo", objective: "O6", notYet: "Ada imekisiwa au haina kiungo.", meets: "Kila ada inatoka kwenye ukurasa rasmi, ikiwa na kiungo, na jumla ya gharama za kuanzisha imejumlishwa.", exceeds: "Anaandika tarehe ambayo kila ada ilikaguliwa." },
      { name: "Tarehe zilizopangwa", objective: "O5", notYet: "Hakuna tarehe zilizopangwa za kuwasilisha, au tarehe za mwisho za siku 30 za Registry na siku 90 za SI-100 zimekosekana.", meets: "Tarehe iliyopangwa kwa kila fomu inayotimiza kila tarehe ya mwisho.", exceeds: "Anataja nani kwenye bodi anawajibika kwa kila fomu." },
      { name: "Kalenda ya kila mwaka", objective: "O6", notYet: "Fomu za kila mwaka hazipo.", meets: "Fomu ya kila mwaka ya IRS, RRF-1, Statement of Information ya kila miaka miwili na fomu za FTB, pamoja na tarehe za mwisho.", exceeds: "Tarehe za mwisho zimewekwa kama vikumbusho vya kalenda kwa bodi." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Waanzilishi wanaowasilisha articles of incorporation ndani ya siku 90 (utafiti wa kufuatilia)",
      "Mashirika yanayopokea determination letter ya IRS na kujisajili katika Registry of Charities",
      "Mashirika ambayo bado yako katika hali nzuri mwaka mmoja baadaye, yakiwasilisha fomu za kila mwaka kwa wakati"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye intaneti",
      "Viungo vya kurasa rasmi: Secretary of State, IRS, Pay.gov, Franchise Tax Board na Registry of Charities ya Attorney General",
      "Spreadsheet au karatasi kwa jedwali la mpango wa kuanzisha",
      "Kama dakika 60 kwa jumla, pamoja na muda wa kukagua ada kwenye kurasa rasmi"
    ],
    facilitatorNotes: [
      "Wafanye wanafunzi wakague kila ada kwenye ukurasa rasmi wakati wa kipindi, kwa kuwa ada hubadilika.",
      "Alika wakili wa mashirika yasiyo ya faida au mjitolea wa kituo cha msaada kujibu maswali kuhusu maneno ya articles na kanuni za makanisa.",
      "Wakumbushe wanafunzi wasiandike kamwe namba za Social Security au ITIN kwenye zana za AI au barua pepe.",
      "Wanafunzi wasio na shirika halisi wanaweza kuandaa mpango wa mazoezi kwa shirika la hisani la mfano.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};

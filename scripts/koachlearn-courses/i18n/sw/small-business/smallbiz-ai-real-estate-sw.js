"use strict";

// Koach Learn course (Swahili translation of small-business/smallbiz-ai-real-estate.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const HUD_FHA = { name: "HUD: muhtasari wa Fair Housing Act (kwa Kiingereza)", url: "https://www.hud.gov/helping-americans/fair-housing-act-overview" };
const CFR_100_75 = { name: "24 CFR 100.75: matangazo, kauli na notisi za ubaguzi (kwa Kiingereza)", url: "https://www.law.cornell.edu/cfr/text/24/100.75" };
const DRE = { name: "California Department of Real Estate (mfano wa mdhibiti wa jimbo, kwa Kiingereza)", url: "https://www.dre.ca.gov/" };
const CAN_SPAM = { name: "FTC: Sheria ya CAN-SPAM, mwongozo wa kufuata sheria kwa biashara (kwa Kiingereza)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

module.exports = {
  id: "smallbiz-ai-real-estate-sw",
  lang: "sw",
  translationOf: "smallbiz-ai-real-estate",
  category: "Small Business",
  name: "AI kwa Mawakala wa Nyumba na Mali",
  skills: "Kuandika matangazo ya nyumba yanayofuata sheria za makazi ya haki, Kugeuza maelezo kuwa taarifa kwa wateja, Kujenga mpango wa ufuatiliaji, Kufupisha takwimu za soko unazotoa wewe, Kujiandaa kuonyesha nyumba na siku za nyumba wazi, Kulinda taarifa za wateja",
  outcome: "kutumia AI katika biashara yako ya nyumba na mali kuandika matangazo sahihi yanayofuata sheria za makazi ya haki, kuwapa wanunuzi na wauzaji taarifa za mara kwa mara, kuendesha mpango wa ufuatiliaji kwa wateja watarajiwa, na kugeuza takwimu za soko ulizotoa kwenye MLS yako kuwa muhtasari ulio wazi kwa mteja, bila kuweka taarifa binafsi za wateja ndani ya zana za AI.",
  about: [
    "Kozi hii ni kwa mawakala wa nyumba na mali (real estate agents), ma-broker na wasaidizi wao, hasa mawakala wanaojitegemea na wapya wanaojenga biashara, wakiwemo mawakala wengi wa jamii za wachache wanaohudumia jamii zao na wanunuzi wa nyumba kwa mara ya kwanza.",
    "Utatumia msaidizi wa AI wa bure kuandika matangazo haraka zaidi, kuwapa wateja taarifa, kuwafuatilia wateja watarajiwa bila kuacha, na kueleza takwimu za soko kwa uwazi. Pia utajifunza mahali AI inaleta hatari katika biashara ya nyumba: lugha inayovunja sheria za makazi ya haki, ukweli usio sahihi katika matangazo, na faragha ya wateja.",
    "Kozi hii si ushauri wa kisheria. Sheria za makazi ya haki, za matangazo na za leseni zinakuhusu; kagua HUD, mdhibiti wa biashara ya nyumba wa jimbo lako (huko California ni Department of Real Estate) na broker wako. Kila somo linachukua kama dakika tano, na kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Jenga kifaa chako cha AI cha wakala: tangazo moja la nyumba lililokaguliwa mstari kwa mstari kwa ukweli na kwa lugha ya makazi ya haki, kiolezo cha taarifa ya kila wiki kwa muuzaji, kiolezo cha taarifa ya utafutaji kwa mnunuzi, mpango wa ufuatiliaji wa siku 30 wenye jumbe nne, muhtasari wa soko wa ukurasa mmoja kutoka kwa takwimu ulizotoa mwenyewe, na orodha ya kukagua ya siku ya nyumba wazi. Hakuna taarifa binafsi ya mteja inayoingia kwenye zana ya AI.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Mawakala wa nyumba na mali, ma-broker na wasaidizi, hasa mawakala wanaojitegemea na wapya wanaojenga biashara, wakiwemo mawakala wengi wa jamii za wachache wanaohudumia jamii zao na wanunuzi wa nyumba kwa mara ya kwanza.",
    startingPoint: "Wana leseni au wanafanya kazi chini ya broker, na wanajua kutoa matangazo na takwimu kwenye MLS. Wengi wamejaribu AI kwa chapisho moja au mawili lakini hawana utaratibu wa kudumu, na wachache wamefikiria hatari za AI kwa makazi ya haki na faragha.",
    gap: "Kuandika matangazo, taarifa na jumbe za ufuatiliaji kunachukua saa nyingi, na ufuatiliaji usio wa kudumu unapoteza wateja. AI inaokoa muda huo, lakini inaweza kubuni ukweli, kuandika maneno yanayovunja sheria za makazi ya haki na kufichua data za wateja. Wanafunzi wanahitaji njia salama ya kuitumia tena na tena inayolinda leseni yao na wateja wao.",
    constraints: [
      "Si ushauri wa kisheria: sheria za makazi ya haki, matangazo na leseni zinatoka HUD, mdhibiti wa jimbo na broker",
      "Sera za kampuni ya broker kuhusu zana za AI zinahusika",
      "Faragha: hakuna majina ya wateja pamoja na anwani, taarifa za fedha, masharti ya ofa au mbinu za majadiliano katika zana za AI",
      "Takwimu za soko lazima zitoke MLS au chanzo kingine cha kuaminika, si AI",
      "Muda: mawakala wana shughuli nyingi, kwa hiyo kila somo ni kama dakika 5"
    ],
    prerequisites: "Hakuna. Wanafunzi wapya kwa wasaidizi wa AI wanaweza kwanza kusoma kozi ya utangulizi wa AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa ukweli uliothibitishwa kutoka kumbukumbu rasmi, kwa muuzaji na kutoka ziara yako mwenyewe", action: "kuandika maelezo ya tangazo la nyumba kwa msaada wa AI na kukagua kila ukweli mstari kwa mstari", standard: "ukiondoa chochote usichoweza kuthibitisha" },
    { id: "O2", condition: "Ukipewa tangazo lililoandikwa kwa AI", action: "kutambua na kuandika upya lugha inayoonyesha upendeleo kuhusu watu badala ya kueleza nyumba", standard: "ili kila mstari ueleze nyumba na sifa zake tu" },
    { id: "O3", condition: "Ukipewa tangazo lililokaguliwa", action: "kutengeneza chapisho la mitandao ya kijamii na barua pepe ya masoko vinavyofuata sheria za matangazo za wenye leseni na sheria za barua pepe", standard: "pamoja na taarifa za leseni na za kampuni ya broker inavyotakiwa, anwani ya posta na njia ya kujiondoa" },
    { id: "O4", condition: "Ukipewa maelezo yako ya haraka ya wiki", action: "kuandika taarifa kwa muuzaji au mnunuzi kwa AI ukitumia vishika-nafasi badala ya taarifa binafsi", standard: "bila taarifa binafsi ya mteja kwenye zana ya AI" },
    { id: "O5", condition: "Ukipewa mteja mtarajiwa mpya aliyekubali kupokea ujumbe kutoka kwako", action: "kupanga ufuatiliaji wa siku 30 wenye jumbe nne zenye manufaa na tarehe inayofuata inayofuatiliwa", standard: "na viungo vyovyote vya programu vimekaguliwa kwenye kurasa rasmi" },
    { id: "O6", condition: "Ukipewa takwimu za soko ulizotoa kwenye MLS yako", action: "kutengeneza muhtasari wa soko kwa maneno rahisi na orodha ya kukagua ya siku ya nyumba wazi", standard: "bila takwimu za kubuni, na chanzo na tarehe vimeongezwa" }
  ],
  chapters: [
    {
      name: "Sura 1: Matangazo na makazi ya haki",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuandika maelezo ya tangazo kutoka kwa ukweli wako",
          minutes: 5,
          goal: "Andika maelezo sahihi na ya kuvutia ya tangazo kutoka kwa ukweli uliothibitishwa wa nyumba.",
          text: [
            "Maelezo ya tangazo yanauza sifa za nyumba: mpangilio wa vyumba, maboresho, mwanga, eneo la nje, na sifa za mahali kama bustani au usafiri ulio karibu. AI inaandika haraka, lakini inajua tu kile unachoiambia.",
            "Ipe ukweli uliothibitishwa tu: \"vyumba 3 vya kulala, bafu 2, futi za mraba 1,450 kwa mujibu wa kumbukumbu za kaunti, ilijengwa 1962, jiko lilikarabatiwa 2021, paa jipya 2023, uwanja wa nyuma wenye uzio na mlimau, maili 0.3 hadi reli nyepesi.\" Iombe maelezo ya maneno 120 kwa sauti ya uchangamfu na ya kitaalamu, na toleo fupi la mitandao ya kijamii.",
            "Kisha kagua kila ukweli: chanzo cha ukubwa wa nyumba, mwaka wa maboresho, majina ya shule, umbali. AI inaweza kuongeza vitu ambavyo havipo (\"kaunta za granite\", \"mandhari ya bahari\"). Maelezo yasiyo ya kweli katika tangazo yanaweza kuleta malalamiko na matatizo ya kisheria."
          ],
          steps: ["Kusanya ukweli uliothibitishwa kutoka kumbukumbu, kwa muuzaji na ziara yako mwenyewe.", "Iombe AI maelezo marefu na mafupi.", "Kagua kila ukweli mstari kwa mstari.", "Ondoa chochote usichoweza kuthibitisha."],
          words: [["Maelezo ya tangazo", "maandishi yanayoeleza nyumba au mali inayouzwa au kupangishwa."], ["MLS", "Multiple Listing Service: hifadhidata ambayo mawakala wanatumia kushirikiana matangazo."], ["Ukweli uliothibitishwa", "jambo ulilohakikisha kutoka kumbukumbu, kwa muuzaji au kwa ziara yako mwenyewe."]],
          slides: [
            { title: "Uza sifa za nyumba", bullets: ["Mpangilio, maboresho, mwanga, eneo la nje", "Bustani na usafiri ulio karibu"] },
            { title: "Ukweli unaingia, maneno yanatoka", bullets: ["Ipe AI ukweli uliothibitishwa tu", "Omba toleo refu na fupi"] },
            { title: "Kagua mstari kwa mstari", bullets: ["Chanzo cha ukubwa, miaka ya maboresho, umbali", "AI inaweza kubuni sifa", "Maelezo yasiyo ya kweli yanaweza kuleta malalamiko"] }
          ],
          tryIt: "Chagua nyumba unayoijua (au mfano). Andika ukweli kumi uliothibitishwa, iombe AI maelezo ya maneno 120, na kagua kila mstari, ukifuta chochote ambacho hakimo katika ukweli wako.",
          youCanNow: "kuandika maelezo ya tangazo kutoka kwa ukweli uliothibitishwa na kugundua mambo ambayo AI imebuni.",
          quickCheck: [
            { objective: "O1", q: "AI inajua nini kuhusu nyumba inapoandika tangazo?", options: ["Kile tu unachoiambia", "Kila kitu kilicho katika kumbukumbu za kaunti", "Kile muuzaji aliiambia ofisi yako", "Data hai ya nyumba kwenye MLS"], answer: 0, why: "AI inajua tu kile unachoipa, kwa hiyo unaipa ukweli uliothibitishwa tu." },
            { objective: "O1", q: "Tangazo la AI linasema \"kaunta za granite\" lakini hukuziona ulipotembelea. Unafanya nini?", options: ["Uiache; wanunuzi wanapenda granite", "Uiondoe isipokuwa unaweza kuithibitisha", "Uongeze \"huenda\" mbele yake", "Uiulize AI kama ina uhakika"], answer: 1, why: "Unakagua kila ukweli na kuondoa chochote usichoweza kuthibitisha." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Lugha ya makazi ya haki: kile AI isichopaswa kuandika",
          minutes: 6,
          goal: "Tambua na urekebishe lugha ya tangazo inayoonyesha upendeleo kwa msingi wa kundi linalolindwa.",
          text: [
            "Sheria ya shirikisho ya Fair Housing Act (makazi ya haki) inakataza ubaguzi katika makazi kwa sababu ya rangi, rangi ya ngozi, asili ya taifa, dini, jinsia, hali ya kifamilia na ulemavu. Kanuni ya HUD katika 24 CFR 100.75 inakataza matangazo, kauli na notisi zinazoonyesha upendeleo, kizuizi au ubaguzi kwa msingi wa haya, ikiwemo kupitia maneno, picha au mahali unapochagua kutangaza. Majimbo mengi, ikiwemo California, yanalinda makundi zaidi; kagua jimbo lako.",
            "Eleza nyumba, si watu unaotaka waishi humo. Maneno hatari: \"inafaa kwa vijana wataalamu\", \"bora kwa wanandoa\", \"hakuna watoto\", \"mtaa mzuri wa Wakristo\", \"nyumba ya mwanamume asiye na mke\", \"karibu na [nyumba ya ibada] kwa familia za imani hiyo\", \"wenye miili imara\". Bora zaidi: \"vyumba vitatu vya kulala\", \"mtaa tulivu\", \"maili 0.3 hadi usafiri\", \"nyumba ya ghorofa moja\".",
            "AI inaweza kunakili mifumo ya upendeleo kutoka kwa kile ilichojifunza. Soma kila jibu lake kutafuta matatizo ya makazi ya haki, na iambie: \"Andika upya ukieleza nyumba na sifa zake tu.\" Ukiwa na shaka, muulize broker wako au chanzo cha msaada wa makazi ya haki."
          ],
          steps: ["Soma kila mstari ukiuliza: je, huu unaeleza nyumba au watu?", "Ondoa maneno kuhusu nani anapaswa kuishi humo.", "Weka sifa za nyumba badala yake.", "Kagua pia picha na mahali tangazo linawekwa.", "Muulize broker wako ukiwa na shaka."],
          words: [["Fair Housing Act", "sheria ya shirikisho ya Marekani inayokataza ubaguzi katika makazi kwa msingi wa makundi yanayolindwa."], ["Kundi linalolindwa", "kundi ambalo sheria inalilinda dhidi ya ubaguzi, kama rangi au hali ya kifamilia."], ["Hali ya kifamilia", "kuwa na watoto chini ya miaka 18 nyumbani, au kuwa mjamzito."], ["HUD", "Wizara ya Makazi na Maendeleo ya Miji ya Marekani (US Department of Housing and Urban Development)."]],
          slides: [
            { title: "Makundi yanayolindwa na shirikisho", bullets: ["Rangi, rangi ya ngozi, asili ya taifa, dini", "Jinsia, hali ya kifamilia, ulemavu", "Majimbo mengi, kama California, yanalinda zaidi"] },
            { title: "Matangazo yasionyeshe upendeleo", bullets: ["24 CFR 100.75: maneno, picha, mahali pa tangazo", "Eleza nyumba, si watu"] },
            { title: "Rekebisha maneno hatari", bullets: ["\"Inafaa kwa vijana wataalamu\" -> ondoa", "\"Hakuna watoto\" -> ondoa", "Tumia sifa: \"vyumba 3 vya kulala\", \"karibu na usafiri\""] },
            { title: "AI inaweza kunakili upendeleo", bullets: ["Soma kila jibu kutafuta matatizo ya makazi ya haki", "Iambie: \"Eleza nyumba tu\"", "Una shaka? Muulize broker wako"] }
          ],
          sources: [HUD_FHA, CFR_100_75],
          tryIt: "Iombe AI maelezo ya tangazo la nyumba yenye ukubwa wa familia. Weka alama kwenye kila kifungu kinachoeleza watu badala ya nyumba, kisha viandike upya kama sifa za nyumba.",
          youCanNow: "kugundua na kurekebisha matatizo ya makazi ya haki katika lugha ya matangazo, ikiwemo maandishi ya AI.",
          quickCheck: [
            { objective: "O2", q: "Tangazo linapaswa kueleza nini?", options: ["Aina ya watu wanaopaswa kununua", "Dini ya majirani", "Nyumba na sifa zake", "Nani ataendana na watu wa mtaa"], answer: 2, why: "Eleza nyumba, si watu unaotaka waishi humo." },
            { objective: "O2", q: "AI inaandika \"bora kwa wanandoa.\" Unafanya nini?", options: ["Uiache; ni ya kirafiki", "Uongeze \"au mtu mmoja\"", "Uihamishe mwishoni", "Uibadilishe kwa sifa za nyumba, kama \"vyumba viwili vya kulala, mtaa tulivu\""], answer: 3, why: "\"Bora kwa wanandoa\" ni maneno hatari kuhusu watu; eleza nyumba badala yake." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutangaza nyumba zako na wewe mwenyewe, kwa kufuata sheria",
          minutes: 5,
          goal: "Tengeneza machapisho na barua pepe za tangazo vinavyofuata sheria za matangazo na za barua pepe.",
          text: [
            "AI inaweza kugeuza tangazo lako lililokaguliwa kuwa machapisho, barua pepe kwa watu unaowajua, maandishi ya kipeperushi na hati fupi ya video. Tumia ukweli ule ule uliothibitishwa na ukaguzi ule ule wa makazi ya haki kwa kila kipande.",
            "Mdhibiti wa jimbo lako na broker wako wana sheria za matangazo kwa wenye leseni, mara nyingi zikiwemo kuonyesha namba yako ya leseni na jina la kampuni ya broker. Huko California, mdhibiti huyo ni Department of Real Estate (DRE); kagua sheria za jimbo lako na sera ya kampuni yako ya broker.",
            "Barua pepe za masoko lazima zifuate CAN-SPAM: mtumaji na kichwa cha kweli, kuitambulisha kama tangazo, kuweka anwani ya posta na njia ya kujiondoa, na kuheshimu maombi ya kujiondoa ndani ya siku 10 za kazi."
          ],
          steps: ["Geuza tangazo lililokaguliwa kuwa chapisho, barua pepe na kipeperushi kwa AI.", "Fanya ukaguzi wa makazi ya haki kwa kila kimoja.", "Ongeza taarifa za leseni na za kampuni ya broker kama jimbo na broker wanavyotaka.", "Ongeza anwani ya posta na njia ya kujiondoa kwenye barua pepe za masoko."],
          words: [["Mduara wako (sphere)", "watu unaowajua ambao wanaweza kununua, kuuza au kukuletea wateja: wateja wa zamani, marafiki, familia."], ["Mwenye leseni", "mtu aliye na leseni ya biashara ya nyumba na mali."]],
          slides: [
            { title: "Tangazo moja, vipande vingi", bullets: ["Machapisho, barua pepe, kipeperushi, hati ya video", "Ukweli ule ule, ukaguzi ule ule wa makazi ya haki"] },
            { title: "Sheria za matangazo kwa wenye leseni", bullets: ["Mara nyingi: namba ya leseni na jina la kampuni ya broker", "California: Department of Real Estate", "Kagua jimbo lako na sera ya broker"] },
            { title: "Misingi ya barua pepe za masoko", bullets: ["Mtumaji na kichwa cha kweli; sema ni tangazo", "Anwani ya posta na njia ya kujiondoa", "Heshimu kujiondoa ndani ya siku 10 za kazi"] }
          ],
          sources: [DRE, CAN_SPAM],
          tryIt: "Geuza tangazo lako lililokaguliwa kuwa chapisho la mitandao ya kijamii na barua pepe fupi. Fanya ukaguzi wa makazi ya haki, na ongeza taarifa za leseni na za kampuni ya broker ambazo jimbo lako na broker wako wanataka.",
          youCanNow: "kutangaza nyumba katika njia mbalimbali huku ukifuata sheria za makazi ya haki, za wenye leseni na za barua pepe.",
          quickCheck: [
            { objective: "O3", q: "Ni sheria gani ya barua pepe inayohusu barua pepe za masoko katika somo hili?", options: ["CAN-SPAM", "Food Code (sheria ya chakula)", "HIPAA", "Kanuni ya FTC ya maoni ya wateja"], answer: 0, why: "Barua pepe za masoko lazima zifuate CAN-SPAM, ikiwemo anwani ya posta na njia ya kujiondoa." },
            { objective: "O3", q: "Unageuza tangazo lako kuwa chapisho la mitandao ya kijamii kwa AI. Unafanya nini kingine kabla ya kulichapisha?", options: ["Ulichapishe mara moja; tangazo lilishakaguliwa", "Ufanye ukaguzi wa makazi ya haki na uongeze taarifa za leseni na za kampuni ya broker inavyotakiwa", "Uondoe bei", "Uongeze picha ya nyumba nyingine"], answer: 1, why: "Kila kipande kinapata ukaguzi ule ule wa makazi ya haki na taarifa ambazo jimbo lako na broker wanataka." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Matangazo na makazi ya haki",
        questions: [
          { objective: "O1", q: "Tangazo la AI linasema \"mandhari ya bahari\" lakini nyumba haina. Unafanya nini?", options: ["Uiache; wanunuzi wanaipenda", "Uifute", "Uongeze picha ya bahari", "Uiulize AI kama ni kweli"], answer: 1, why: "Ukweli uliothibitishwa tu ndio unaofaa kuwa katika tangazo." },
          { objective: "O2", q: "Lipi ni kundi linalolindwa na sheria ya shirikisho ya Fair Housing Act?", options: ["Rangi ya nywele", "Timu ya michezo unayoipenda", "Aina ya gari", "Hali ya kifamilia"], answer: 3, why: "Hali ya kifamilia ni moja ya makundi saba ya shirikisho." },
          { objective: "O2", q: "Kifungu kipi ni hatari kwa makazi ya haki?", options: ["\"Inafaa kwa vijana wataalamu\"", "\"Vyumba vitatu vya kulala\"", "\"Paa jipya 2023\"", "\"Maili 0.3 hadi reli nyepesi\""], answer: 0, why: "Kinaonyesha upendeleo kuhusu nani anapaswa kuishi humo." },
          { objective: "O2", q: "Sheria za matangazo za makazi ya haki zinaweza kuhusu:", options: ["Mabango ya barabarani tu", "Maneno tu", "Maneno, picha na mahali unapoweka matangazo", "Hakuna kitu mtandaoni"], answer: 2, why: "24 CFR 100.75 inahusu maneno, picha na uchaguzi wa vyombo vya habari." },
          { objective: "O3", q: "Huko California unakagua wapi sheria za matangazo kwa wenye leseni?", options: ["Kwa mnunuzi", "Kwenye mazungumzo na AI", "Department of Real Estate na broker wako", "Kwenye kundi la mitandao ya kijamii"], answer: 2, why: "DRE ndiyo inayodhibiti wenye leseni wa California." }
        ]
      }
    },
    {
      name: "Sura 2: Wateja, wateja watarajiwa na takwimu za soko",
      lessons: [
        {
          objectives: ["O4"],
          title: "Taarifa kwa wateja bila kushiriki taarifa binafsi",
          minutes: 5,
          goal: "Geuza maelezo yako kuwa taarifa wazi kwa muuzaji na mnunuzi ukitumia vishika-nafasi.",
          text: [
            "Wateja wanataka kusikia kutoka kwako mara kwa mara. Taarifa ya kila wiki kwa muuzaji inaeleza mara ngapi nyumba ilionyeshwa, maoni ya wageni, mara ngapi ilitazamwa mtandaoni na hatua zinazofuata. Taarifa kwa mnunuzi inaeleza nyumba mpya zinazofaa, miadi ya kuonyeshwa nyumba na kinachoendelea katika kiwango chake cha bei.",
            "Tumia AI kugeuza maelezo ya haraka kuwa taarifa wazi, ukitumia vishika-nafasi: \"Geuza maelezo haya kuwa taarifa ya kirafiki ya kila wiki kwa [jina la muuzaji]: nyumba ilionyeshwa mara 6, mara 2 za pili, maoni yanasema jiko ni zuri lakini uwanja wa nyuma unahitaji kusafishwa, mara 1,200 ilitazamwa mtandaoni. Pendekeza hatua moja inayofuata.\"",
            "Usiweke kamwe taarifa binafsi za wateja katika zana za AI: majina kamili pamoja na anwani, taarifa za fedha, kiasi cha idhini ya awali ya mkopo, namba za Social Security, masharti ya ofa au mbinu za majadiliano. Zijaze wewe mwenyewe katika barua pepe yako au CRM. Fuata sheria za kampuni yako ya broker kuhusu zana za AI."
          ],
          steps: ["Andika maelezo ya haraka baada ya wiki.", "Badilisha majina na taarifa binafsi kwa vishika-nafasi.", "Iombe AI taarifa wazi yenye hatua inayofuata.", "Jaza taarifa halisi wewe mwenyewe kisha utume."],
          words: [["CRM", "customer relationship management: programu ya kufuatilia wateja na wateja watarajiwa."], ["Kishika-nafasi", "pengo kama [jina la muuzaji] linalotumika badala ya taarifa binafsi halisi."]],
          slides: [
            { title: "Wateja wanataka taarifa", bullets: ["Muuzaji: maonyesho, maoni, kutazamwa, hatua inayofuata", "Mnunuzi: nyumba mpya zinazofaa, maonyesho, mwenendo wa soko"] },
            { title: "Maelezo yanaingia, taarifa inatoka", bullets: ["Maelezo ya haraka yenye vishika-nafasi", "Omba taarifa ya kirafiki na hatua inayofuata"] },
            { title: "Usiweke kamwe katika AI", bullets: ["Majina pamoja na anwani, fedha, namba za SSN", "Kiasi cha idhini ya awali ya mkopo na masharti ya ofa", "Mbinu za majadiliano"] }
          ],
          tryIt: "Andika maelezo ya haraka ya wiki ya muuzaji wa mfano. Tumia vishika-nafasi, iombe AI taarifa ya kila wiki yenye hatua inayofuata, na hakikisha haina taarifa binafsi.",
          youCanNow: "kutuma taarifa wazi kwa wateja zilizotengenezwa kwa AI huku ukilinda taarifa za wateja.",
          quickCheck: [
            { objective: "O4", q: "Taarifa ya kila wiki kwa muuzaji inaeleza nini?", options: ["Kiasi cha idhini ya awali ya mkopo wa mnunuzi", "Mpango wako wa majadiliano", "Maonyesho, maoni, kutazamwa mtandaoni na hatua zinazofuata", "Ofa za wateja wengine"], answer: 2, why: "Taarifa kwa muuzaji inaeleza maonyesho, maoni, kutazamwa na hatua zinazofuata." },
            { objective: "O4", q: "Maelezo yako yana jina kamili la mnunuzi na masharti ya ofa. Unafanya nini kabla ya kuyabandika kwenye AI?", options: ["Uyabandike kama yalivyo", "Uyafupishe", "Uyatafsiri kwanza", "Ubadilishe taarifa binafsi kwa vishika-nafasi na uzijaze wewe mwenyewe baadaye"], answer: 3, why: "Taarifa binafsi za wateja zinakaa nje ya zana za AI; unazijaza wewe mwenyewe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Mpango wa ufuatiliaji kwa wateja watarajiwa",
          minutes: 5,
          goal: "Jenga mpango wa ufuatiliaji wa siku 30 wenye jumbe nne kwa wateja watarajiwa wapya.",
          text: [
            "Wateja watarajiwa wengi hawako tayari leo. Mpango wa ufuatiliaji wa kudumu na wenye manufaa unakuweka akilini mwao. Mfano wa mpango wa siku 30: siku 1 shukrani na swali moja; siku 7 ushauri wenye manufaa (programu za wanunuzi wa mara ya kwanza za kuangalia); siku 14 picha fupi ya soko la eneo lao; siku 30 kuwasiliana kujua hali.",
            "Iombe AI iandike kila ujumbe kwa sauti yako ukiwa na mapengo ya [jina la kwanza] na [eneo]. Viwe vya kusaidia, si vya kulazimisha. Toa viungo vya kurasa rasmi za programu ulizokagua tu.",
            "Fuatilia wateja watarajiwa katika CRM yako au lahajedwali: jina, chanzo, tarehe, hatua aliyofikia, tarehe ya ufuatiliaji unaofuata. Tuma barua pepe au ujumbe mfupi kwa watu waliokubali kusikia kutoka kwako tu, na fuata sheria za barua pepe na ujumbe mfupi."
          ],
          steps: ["Panga mawasiliano manne katika siku 30.", "Iombe AI iandike rasimu ya kila moja yenye mapengo.", "Hakikisha yana manufaa na ukague taarifa za programu kwenye kurasa rasmi.", "Fuatilia tarehe ya ufuatiliaji unaofuata kwa kila mteja mtarajiwa.", "Wasiliana na watu waliokubali tu."],
          words: [["Mteja mtarajiwa (lead)", "mtu anayeweza kununua, kuuza au kupanga nyumba lakini hajasaini mkataba nawe."], ["Mawasiliano (touch)", "mara moja ya kuwasiliana na mteja mtarajiwa: simu, ujumbe mfupi au barua pepe."]],
          slides: [
            { title: "Mpango wa siku 30", bullets: ["Siku 1: shukrani na swali moja", "Siku 7: ushauri wenye manufaa; Siku 14: picha fupi ya soko", "Siku 30: kuwasiliana kujua hali"] },
            { title: "Saidia, usilazimishe", bullets: ["AI inaandika rasimu yenye [jina la kwanza] na [eneo]", "Weka viungo vya kurasa rasmi ulizokagua tu"] },
            { title: "Fuatilia na heshimu", bullets: ["Jina, chanzo, hatua, tarehe inayofuata", "Wasiliana na waliokubali tu"] }
          ],
          tryIt: "Iombe AI iandike rasimu ya mpango wako wa ufuatiliaji wa siku 30 wenye jumbe nne. Hariri kila moja uwe kwa sauti yako na utengeneze jedwali la kufuatilia wateja watarajiwa lenye safu ya tarehe ya ufuatiliaji unaofuata.",
          youCanNow: "kuendesha mpango wa ufuatiliaji wa kudumu na wenye manufaa kwa wateja watarajiwa wapya.",
          quickCheck: [
            { objective: "O5", q: "Katika mpango wa mfano, ujumbe wa siku 14 ni upi?", options: ["Picha fupi ya soko la eneo lao", "Ombi la kukuletea wateja wengine", "Mkataba wa kusaini", "Kadi ya siku ya kuzaliwa"], answer: 0, why: "Mpango ni siku 1 shukrani, siku 7 ushauri, siku 14 picha fupi ya soko, siku 30 kuwasiliana kujua hali." },
            { objective: "O5", q: "Ulikutana na mtu kwenye sherehe ambaye hakuwahi kukubali kusikia kutoka kwako. Je, umweke katika mpango wako wa ujumbe mfupi?", options: ["Ndiyo, kila unayekutana naye ni mteja mtarajiwa", "Hapana, wasiliana tu na watu waliokubali kusikia kutoka kwako", "Ndiyo, kama jumbe ni fupi", "Ndiyo, lakini wikendi tu"], answer: 1, why: "Tuma barua pepe au ujumbe mfupi kwa watu waliokubali tu, na fuata sheria za barua pepe na ujumbe mfupi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Muhtasari wa soko na maandalizi ya kuonyesha nyumba",
          minutes: 5,
          goal: "Geuza takwimu za soko ulizotoa kuwa muhtasari wazi kwa mteja, na uandae siku ya nyumba wazi.",
          text: [
            "Wateja wanauliza, \"Soko likoje?\" Toa takwimu wewe mwenyewe kwenye MLS yako au chanzo kingine cha kuaminika: bei ya kati, siku nyumba zinakaa sokoni, idadi ya matangazo yaliyo hai, uwiano wa bei ya kuuzwa kwa bei ya tangazo, kwa miezi michache iliyopita.",
            "Bandika takwimu hizo (bila data za wateja) kwenye AI na uiulize: \"Eleza takwimu hizi za soko kwa mnunuzi wa mara ya kwanza kwa maneno rahisi, kwa maneno 150. Usiongeze takwimu ambazo sikukupa.\" Kagua kwamba haikubuni takwimu, na ongeza chanzo chako na tarehe. AI haina data hai za soko za kuaminika; wewe unazo.",
            "Kwa kuonyesha nyumba na siku za nyumba wazi, iombe AI orodha ya kukagua: kabla (taa, joto la ndani, vipeperushi, daftari la wageni kujiandikisha), wakati (usalama, kukaribisha, maelezo), baada (ufuatiliaji ndani ya saa 24). Ongeza taratibu za usalama za kampuni yako ya broker."
          ],
          steps: ["Toa takwimu za sasa kwenye MLS yako au chanzo cha kuaminika.", "Iombe AI izieleze kwa maneno rahisi bila kuongeza takwimu.", "Kagua kila takwimu na uongeze chanzo na tarehe.", "Iombe AI orodha ya kukagua ya siku ya nyumba wazi na uongeze hatua za usalama."],
          words: [["Bei ya kati (median)", "bei iliyo katikati: nusu ya nyumba ziliuzwa kwa zaidi, nusu kwa chini."], ["Siku sokoni", "muda ambao nyumba zinachukua kuuzwa."], ["Uwiano wa bei ya kuuzwa kwa bei ya tangazo", "bei ya kuuzwa ikigawanywa kwa bei ya tangazo, ikionyeshwa kama asilimia."]],
          slides: [
            { title: "Wewe unatoa takwimu", bullets: ["Bei ya kati na siku sokoni", "Matangazo yaliyo hai na uwiano wa bei ya kuuzwa kwa bei ya tangazo", "Kutoka MLS yako au chanzo cha kuaminika"] },
            { title: "AI inaeleza", bullets: ["\"Eleza kwa maneno rahisi; usiongeze takwimu\"", "Kagua kila takwimu; ongeza chanzo na tarehe"] },
            { title: "Orodha ya siku ya nyumba wazi", bullets: ["Kabla: taa, vipeperushi, daftari la wageni", "Wakati: usalama na maelezo", "Baada: fuatilia ndani ya saa 24"] }
          ],
          tryIt: "Kazi ya mwisho: jenga kifaa chako cha AI cha wakala: maelezo ya tangazo yaliyokaguliwa, violezo vya taarifa kwa muuzaji na mnunuzi, mpango wa ufuatiliaji wa siku 30, muhtasari wa soko kutoka kwa takwimu ulizotoa, na orodha ya kukagua ya siku ya nyumba wazi.",
          youCanNow: "kueleza takwimu za soko kwa uwazi na kuandaa maonyesho ya nyumba kwa msaada wa AI, ukitumia data zako mwenyewe.",
          quickCheck: [
            { objective: "O6", q: "Uwiano wa bei ya kuuzwa kwa bei ya tangazo unalinganisha nini?", options: ["Kodi na mkopo wa nyumba", "Siku sokoni na matangazo", "Bei ambayo nyumba ziliuzwa na bei zilizotangazwa", "Mawakala na wanunuzi"], answer: 2, why: "Unalinganisha bei ya kuuzwa na bei ya tangazo." },
            { objective: "O6", q: "Muhtasari wa soko wa AI una takwimu ambayo hukuipa. Unafanya nini?", options: ["Uiache; AI ina data hai", "Uikadirie", "Uihamishe chini kama tanbihi", "Uiondoe na ukague kila takwimu dhidi ya chanzo chako"], answer: 3, why: "AI haina data hai za soko za kuaminika, kwa hiyo unaondoa takwimu za kubuni na kuongeza chanzo chako na tarehe." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Wateja, wateja watarajiwa na takwimu za soko",
        questions: [
          { objective: "O4", q: "Kipi hakipaswi kamwe kuingia kwenye zana ya AI?", options: ["Kiasi cha idhini ya awali ya mkopo wa mnunuzi na jina lake", "\"Maonyesho 6 wiki hii\"", "\"Jiko lilipata maoni mazuri\"", "\"[jina la muuzaji]\""], answer: 0, why: "Taarifa za fedha za mteja ni binafsi." },
          { objective: "O5", q: "Ufuatiliaji mzuri wa siku 7 ni upi?", options: ["Hakuna kitu", "\"Saini sasa!\" kwa kulazimisha", "Alama yake ya mkopo (credit score)", "Ushauri wenye manufaa kwa hali yake"], answer: 3, why: "Mawasiliano yenye manufaa yanajenga uaminifu." },
          { objective: "O6", q: "Takwimu za soko zinapaswa kutoka wapi?", options: ["Kumbukumbu ya AI", "MLS yako au chanzo kingine cha kuaminika ulichotoa", "Kukisia", "Jirani"], answer: 1, why: "AI haina data hai za soko za kuaminika." },
          { objective: "O6", q: "AI inaongeza \"bei zilipanda 12% mwaka huu\" lakini hukuwahi kuipa takwimu hiyo. Wewe:", options: ["Unaiondoa", "Unaiacha", "Unaiongeza juu", "Unaichapisha"], answer: 0, why: "Usitumie takwimu ambazo hukutoa na kukagua." },
          { objective: "O6", q: "Bei ya kati ni nini?", options: ["Kodi ya wastani", "Bei ya juu kabisa", "Bei iliyo katikati: nusu ziliuzwa kwa zaidi, nusu kwa chini", "Bei ya tangazo"], answer: 2, why: "Bei ya kati ni thamani iliyo katikati." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Mawakala wa Nyumba na Mali",
    questions: [
      { objective: "O1", q: "Unapaswa kuipa AI nini ili iandike tangazo?", options: ["Namba ya SSN ya muuzaji", "Ukweli uliothibitishwa tu", "Makisio", "Tangazo la mshindani"], answer: 1, why: "Ukweli unaingia, maneno sahihi yanatoka." },
      { objective: "O1", q: "MLS ni kifupi cha:", options: ["My Listing Site", "Main Loan System", "Market Law Statute", "Multiple Listing Service"], answer: 3, why: "Mawakala wanashirikiana matangazo kwenye MLS." },
      { objective: "O1", q: "Kwa nini ukague ukubwa wa nyumba (futi za mraba) katika tangazo la AI?", options: ["Si lazima", "Ili kulirefusha", "Kwa kujifurahisha", "Maelezo yasiyo ya kweli yanaweza kuleta malalamiko na matatizo ya kisheria"], answer: 3, why: "Ukweli usio sahihi unaleta matatizo." },
      { objective: "O2", q: "Kuna makundi mangapi yanayolindwa na sheria ya shirikisho ya Fair Housing Act?", options: ["Matatu", "Saba", "Kumi", "Mawili"], answer: 1, why: "Rangi, rangi ya ngozi, asili ya taifa, dini, jinsia, hali ya kifamilia, ulemavu." },
      { objective: "O2", q: "Kipi ni sifa ya nyumba, si upendeleo kuhusu watu?", options: ["\"Hakuna watoto\"", "\"Bora kwa wanandoa\"", "\"Nyumba ya ghorofa moja\"", "\"Nzuri kwa vijana wataalamu\""], answer: 2, why: "Inaeleza nyumba." },
      { objective: "O2", q: "Kwa nini AI inaweza kuandika matatizo ya makazi ya haki?", options: ["Inaweza kunakili mifumo ya upendeleo kutoka kwa kile ilichojifunza", "Inajua sheria za makazi ya haki kikamilifu", "Haikosei kamwe", "Ni wakili"], answer: 0, why: "Kagua kila jibu la AI kila wakati." },
      { objective: "O2", q: "Je, California inalinda makundi mengi zaidi kuliko sheria ya shirikisho?", options: ["Wikendi tu", "Hapana, kamwe", "Ndiyo; kagua sheria za jimbo lako", "Kwa nyumba za kupanga tu"], answer: 2, why: "Majimbo mengi, ikiwemo California, yanalinda makundi zaidi." },
      { objective: "O3", q: "Matangazo ya wenye leseni mara nyingi lazima yawe na:", options: ["Namba ya leseni na jina la kampuni ya broker, kwa sheria za jimbo na broker", "Anwani ya nyumba yako", "Majina ya wateja", "Hakuna kitu"], answer: 0, why: "Kagua sheria za matangazo za jimbo lako." },
      { objective: "O3", q: "Barua pepe ya masoko kwa mduara wako lazima iwe na:", options: ["Masharti ya ofa za wateja", "Anwani ya posta na njia ya kujiondoa", "Mtumaji wa uongo", "Hakuna kitu"], answer: 1, why: "CAN-SPAM inataka vyote viwili." },
      { objective: "O3", q: "Mduara wako (sphere) ni nini?", options: ["Mkopeshaji", "Kitu cha mviringo", "MLS", "Watu unaowajua ambao wanaweza kununua, kuuza au kukuletea wateja"], answer: 3, why: "Wateja wa zamani, marafiki na familia." },
      { objective: "O4", q: "Taarifa ya kila wiki kwa muuzaji ina:", options: ["Maonyesho, maoni, kutazamwa na hatua inayofuata", "Fedha za wateja wengine", "Nywila yako", "Hakuna kitu"], answer: 0, why: "Hivyo vinamweka muuzaji katika taarifa." },
      { objective: "O4", q: "Kipi ni kishika-nafasi?", options: ["Namba ya Social Security", "Jina kamili la muuzaji na anwani yake", "Namba ya akaunti ya benki", "[jina la muuzaji]"], answer: 3, why: "Vishika-nafasi vinazuia taarifa binafsi zisiingie." },
      { objective: "O4", q: "Mbinu za majadiliano zinapaswa:", options: ["Kuchapishwa mtandaoni", "Kubandikwa kwenye mazungumzo", "Kukaa nje ya zana za AI", "Kushirikiwa na wanunuzi wote"], answer: 2, why: "Ni taarifa ya siri ya mteja." },
      { objective: "O5", q: "Mpango wa ufuatiliaji wa siku 30 una takriban:", options: ["Simu mia moja", "Mawasiliano manne yenye manufaa", "Hakuna", "Ujumbe wa kulazimisha kila siku"], answer: 1, why: "Ufuatiliaji wa kudumu na wenye manufaa unafanya kazi vizuri zaidi." },
      { objective: "O5", q: "Unapaswa kutuma barua pepe au ujumbe mfupi wa masoko kwa nani?", options: ["Watu usiowajua", "Yeyote ambaye unapata namba yake", "Orodha ulizonunua", "Watu waliokubali kusikia kutoka kwako"], answer: 3, why: "Ruhusa inakuja kwanza." },
      { objective: "O5", q: "Kabla ya kuweka kiungo cha programu ya wanunuzi wa mara ya kwanza, wewe:", options: ["Unakisia masharti", "Unaamini kiungo cha AI", "Unakagua ukurasa wake rasmi", "Unaacha kukagua"], answer: 2, why: "Taarifa za programu hubadilika." },
      { objective: "O6", q: "Siku sokoni zinapima:", options: ["Muda ambao nyumba zinachukua kuuzwa", "Saa za siku ya nyumba wazi", "Siku za kamisheni", "Sikukuu"], answer: 0, why: "Zinaonyesha kasi ya soko." },
      { objective: "O6", q: "AI inapoeleza takwimu za soko unapaswa kuiambia:", options: ["Buni takwimu zaidi", "Usiongeze takwimu ambazo sikukupa", "Kisia siku zijazo", "Tumia tovuti yoyote"], answer: 1, why: "Hii inapunguza takwimu za kubuni." },
      { objective: "O6", q: "Unapaswa kufuatilia lini baada ya siku ya nyumba wazi?", options: ["Mwaka ujao", "Ndani ya saa 24", "Kamwe", "Wakipiga simu tu"], answer: 1, why: "Ufuatiliaji wa haraka unashinda wateja." },
      { objective: "O2", q: "Kozi hii ni:", options: ["Si ushauri wa kisheria; kagua HUD, mdhibiti wa jimbo lako na broker", "Ushauri wa kisheria", "Leseni", "Mkataba"], answer: 0, why: "Vyanzo rasmi na broker wako ndio wenye neno la mwisho." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      3,
      5,
      7,
      11,
      13,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Tangazo sahihi",
        objective: "O1",
        notYet: "Tangazo lina ukweli ambao haukuthibitishwa, kama sifa ambayo nyumba haina.",
        meets: "Kila ukweli umekaguliwa mstari kwa mstari dhidi ya kumbukumbu, muuzaji au ziara yako.",
        exceeds: "Anaandika chanzo cha ukweli muhimu kama ukubwa wa nyumba."
      },
      {
        name: "Lugha ya makazi ya haki",
        objective: "O2",
        notYet: "Mstari unaeleza nani anapaswa kuishi humo badala ya kueleza nyumba.",
        meets: "Kila mstari unaeleza nyumba na sifa zake tu.",
        exceeds: "Pia anakagua picha na mahali tangazo linawekwa, na anaweza kueleza kila marekebisho."
      },
      {
        name: "Taarifa kwa wateja kwa faragha",
        objective: "O4",
        notYet: "Jina la mteja pamoja na anwani, taarifa ya fedha au masharti ya ofa viliingia kwenye zana ya AI.",
        meets: "Violezo vya taarifa kwa muuzaji na mnunuzi vinatumia vishika-nafasi, na vina hatua inayofuata iliyo wazi.",
        exceeds: "Vishika-nafasi vinajazwa tu katika barua pepe au CRM ya wakala mwenyewe."
      },
      {
        name: "Mpango wa ufuatiliaji wa wateja watarajiwa",
        objective: "O5",
        notYet: "Jumbe ni chini ya nne, au ni za kulazimisha au hazijakaguliwa.",
        meets: "Jumbe nne zenye manufaa katika siku 30, zenye mapengo na tarehe inayofuata inayofuatiliwa.",
        exceeds: "Viungo vya programu vimekaguliwa kwenye kurasa rasmi na kuandikwa."
      },
      {
        name: "Muhtasari wa soko na siku ya nyumba wazi",
        objective: "O6",
        notYet: "Muhtasari una takwimu ambayo haikutolewa kwenye chanzo chako.",
        meets: "Muhtasari kwa maneno rahisi kutoka kwa takwimu zako mwenyewe, wenye chanzo na tarehe, pamoja na orodha ya kukagua ya siku ya nyumba wazi.",
        exceeds: "Orodha inajumuisha hatua za usalama za kampuni ya broker na ufuatiliaji ndani ya saa 24."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Mawakala wanaoripoti kutumia mpango wa kudumu wa ufuatiliaji wa wateja watarajiwa ndani ya siku 30 (utafiti wa kufuatilia)",
      "Mawakala wanaoripoti muda wanaookoa kila wiki kwenye matangazo na taarifa kwa wateja",
      "Wanafunzi wanaoanza kozi nyingine ya biashara ndogo ya Koach Learn ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Msaidizi wa AI wa bure",
      "Ukweli uliothibitishwa wa tangazo moja halisi au la mfano, na takwimu za hivi karibuni kutoka MLS yako",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Wakumbushe wanafunzi kwamba kozi hii si ushauri wa kisheria; maswali ya makazi ya haki, matangazo na leseni yanaenda kwa HUD, mdhibiti wa jimbo na broker wao.",
      "Fanyeni zoezi la kikundi: someni kwa sauti matangazo ya mfano ya AI na tambueni pamoja hatari za makazi ya haki.",
      "Tumieni matangazo ya mfano na vishika-nafasi darasani; msibandike kamwe taarifa binafsi halisi za wateja kwenye zana za AI.",
      "Waombe wanafunzi wakague sera ya kampuni yao ya broker kuhusu zana za AI kabla ya kuzitumia na wateja.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};

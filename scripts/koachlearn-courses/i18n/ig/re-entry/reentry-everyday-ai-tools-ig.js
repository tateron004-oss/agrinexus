"use strict";

// Koach Learn course (Igbo translation of re-entry/reentry-everyday-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "reentry-everyday-ai-tools-ig",
  lang: "ig",
  translationOf: "reentry-everyday-ai-tools",
  category: "Re-Entry",
  name: "Ngwa AI Maka Ndụ Kwa Ụbọchị",
  skills: "Iji olu dobe ncheta, Inweta ụzọ ụgbọ ala ọha, Iji igwefoto gụọ ma sụgharịa ihe, Ịchọta enyemaka dị nso, Iji AI dee ozi kwa ụbọchị, Ime ndepụta akwụkwọ",
  outcome: "iji ngwa AI n'efu dị na smartphone ruo ebe ọhụhụ gị n'oge: inweta ụzọ ụgbọ ala (bus) ma ọ bụ ụgbọ oloko, idobe ncheta, ime ndepụta ihe ị ga-eweta, na ide obere ozi ma ọ bụrụ na ị na-egbu oge.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị na-alọta ụlọ chọrọ iji smartphone lekọta ndụ kwa ụbọchị: ọhụhụ, ịga ebe dị iche iche, ịgụ fọm, ịchọta enyemaka na ịkpakọrịta n'ezinụlọ.",
    "Ị ga-eji ngwa ndị a na-akwụghị ụgwọ, ndị dịlarị n'ọtụtụ ekwentị: onye enyemaka olu, maapụ, ngwa igwefoto na-agụ ihe, na ngwa enyemaka AI dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini. Ọmụmaatụ ọ bụla si n'ezi ndụ mgbe a hapụrụ mmadụ: ajụjụ ọnụ ọrụ, ọfịs ID, ọhụhụ ebe obibi na ezinụlọ.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Gụọ ya, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\". Obere nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ a. Ọ dịghị mgbe ị ga-ede nọmba okwu ikpe, nọmba ID ma ọ bụ ozi nzuzo ọ bụla iji mee ọrụ ndị a."
  ],
  finalTask: "Hazie otu i si aga n'ezi ọhụhụ (ajụjụ ọnụ ọrụ, ọfịs ID ma ọ bụ ọhụhụ ebe obibi): nweta ụzọ ụgbọ ala ọha ma ọ bụ ụzọ ije, dobe ncheta maka oge ị ga-apụ, rịọ AI ka o mee ndepụta ihe ị ga-eweta, ma mee ka AI nyere gị aka dee obere ozi ederede nwere nkwanye ugwu ị ga-ezipu ma ọ bụrụ na ị na-egbu oge.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na-alọta ụlọ site n'ụlọ mkpọrọ (re-entry) nwere smartphone ma kwesịrị ilekọta ọhụhụ, njem, fọm na ozi n'onwe ha. Ọtụtụ anọghị ebe a mgbe ekwentị na ngwa AI gbanwere.",
    startingPoint: "Ha nwere ike ịkpọ oku ma zipu ozi ederede. Ha anaghị eji onye enyemaka olu, maapụ, ngwa igwefoto na-agụ ihe ma ọ bụ ngwa enyemaka AI, ma ọ bụ na-eji ha ntakịrị. Ụfọdụ enweghị obi ike n'ịgụ akwụkwọ ma ọ bụ n'iji teknụzụ.",
    gap: "Ịtụfu ajụjụ ọnụ ọrụ, ọhụhụ ID ma ọ bụ ọhụhụ ebe obibi nwere ike imebi atụmatụ re-entry niile. Ndị na-amụ ihe kwesịrị iji ngwa ekwentị n'efu ruo ebe n'oge, gụọ akwụkwọ e bipụtara, chọta enyemaka dị nso ma zipu ozi nwere nkwanye ugwu, n'ekesaghị ozi nzuzo.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ (ihe dị ka klas 5 ruo 6)",
      "Ngwaọrụ: smartphone, mgbe ụfọdụ nwere data dị ntakịrị ma ọ bụ ụdị ochie",
      "Oge: nkuzi dị ka nkeji 5 nke dabara n'etiti ọhụhụ na ọrụ",
      "Iwu ụfọdụ parole ma ọ bụ probation na-egbochi iji ịntanetị; onye ọ bụla na-agbaso iwu nke ya",
      "Nzuzo: enweghị nọmba okwu ikpe, nọmba ID ma ọ bụ ozi nzuzo ọzọ n'ime ngwa AI ma ọ bụ ncheta ọ bụla"
    ],
    prerequisites: "\"Mmalite AI na Obi Ike n'Ihe Dijitalụ\" na-enye aka mana ọ dịghị mkpa."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji onye enyemaka olu nke ekwentị gị", action: "idobe ncheta maka ọhụhụ na ncheta nke abụọ maka oge ị ga-apụ", standard: "site n'olu, nwere aha n'ozuzu na-enweghị ozi nzuzo" },
    { id: "O2", condition: "Mgbe e nyere gị adreesị nke ezi ebe", action: "inweta ụzọ ụgbọ ala (bus), ụgbọ oloko ma ọ bụ ụzọ ije n'ime app maapụ ma chọpụta oge ị ga-apụ", standard: "nwere oge ịbịarute nke e dobere nkeji 10 ruo 15 tupu oge" },
    { id: "O3", condition: "Mgbe e nyere gị akwụkwọ mgbasa ozi e bipụtara, akara ma ọ bụ mkpọsa ọrụ", action: "iji igwefoto ekwentị gị gụọ, detuo ma ọ bụ sụgharịa ihe e dere na ya", standard: "na-edetuo nọmba ekwentị ma ọ bụ adreesị n'ime ndetu ma ọ bụ kọntaktị n'edeghachighị ya n'aka" },
    { id: "O4", condition: "Site n'iji ngwa enyemaka AI na 211", action: "ịchọta ọrụ enyemaka dị nso maka ebe obibi, nri, ọrụ ma ọ bụ njem", standard: "nwere otu mmemme e dere ede, nke e kwadoro ozi ya site na 211 ma ọ bụ ezi weebụsaịtị" },
    { id: "O5", condition: "Mgbe e nyere gị ezi ọnọdụ kwa ụbọchị", action: "ide obere ozi nwere nkwanye ugwu site n'enyemaka AI", standard: "nke bụ eziokwu, na-enweghị ozi nzuzo, ma dị ka okwu gị" },
    { id: "O6", condition: "Mgbe e nyere gị ezi ọhụhụ", action: "ime ndepụta ihe ị ga-eweta site n'enyemaka AI ma kwado ya n'ọfịs ahụ", standard: "na-edepụta naanị aha akwụkwọ, nke e lelere na ezi weebụsaịtị ma ọ bụ site n'oku" }
  ],
  chapters: [
    {
      name: "Isi 1: Ekwentị gị dị ka onye enyemaka",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ncheta na mkpu site n'olu",
          minutes: 5,
          goal: "Dobe ncheta maka ọhụhụ site n'ịgwa ekwentị gị okwu.",
          text: [
            "Ịtụfu ọhụhụ nwere ike ime ka ị tụfuo ajụjụ ọnụ ọrụ, ohere ebe obibi ma ọ bụ ọhụhụ nleta. Ekwentị gị nwere ike icheta ya maka gị.",
            "Ọtụtụ ekwentị nwere onye enyemaka olu: Siri na iPhone, na Google Assistant ma ọ bụ Gemini na Android. Kpọte ya site n'ikwu \"Hey Siri\" ma ọ bụ \"Hey Google\", ma ọ bụ site n'ịpị ma jide bọtịnụ dị n'akụkụ ma ọ bụ bọtịnụ home. Wee kwuo: \"Chetara m ajụjụ ọnụ m na Fresh Foods na Tuzde n'elekere 9 nke ụtụtụ.\" \"Dobe mkpu maka elekere 6:30 nke ụtụtụ echi.\"",
            "Dobe ncheta abụọ maka ihe ọ bụla dị mkpa: otu n'ụbọchị tupu ya, na otu mgbe oge ruru ịpụ. Mee ka aha ncheta dị n'ozuzu; ọ dịghị mkpa itinye ozi nzuzo n'ime ha."
          ],
          steps: ["Kpọte onye enyemaka olu.", "Kwuo ihe ọ bụ, ụbọchị na oge.", "Tinye ncheta nke abụọ maka oge ị ga-apụ.", "Lee ihuenyo ka ị hụ na e dobere ya."],
          words: [["Onye enyemaka olu (voice assistant)", "onye enyemaka dị n'ime ekwentị gị na-eme obere ọrụ mgbe ị kwuru okwu."], ["Ncheta (reminder)", "ozi ekwentị gị na-egosi gị n'oge ị họọrọ."]],
          slides: [
            { title: "Ekwentị gị nwere ike icheta maka gị", bullets: ["Ajụjụ ọnụ, ọfịs ID, ọhụhụ ebe obibi", "Siri, Google Assistant ma ọ bụ Gemini"] },
            { title: "Kwuo ya", bullets: ["\"Chetara m ajụjụ ọnụ m na Tuzde n'elekere 9 nke ụtụtụ.\"", "\"Dobe mkpu maka elekere 6:30 nke ụtụtụ echi.\""] },
            { title: "Ncheta abụọ maka ihe dị mkpa", bullets: ["Otu n'ụbọchị tupu ya", "Otu mgbe oge ruru ịpụ", "Mee ka aha dị n'ozuzu"] }
          ],
          tryIt: "Jiri olu dobe ncheta maka ezi ọhụhụ, ma ọ bụ nke omume, na ncheta nke abụọ maka oge ị ga-apụ.",
          youCanNow: "iji olu dobe ncheta na mkpu maka ọhụhụ.",
          quickCheck: [
            { objective: "O1", q: "Kedu ezigbo aha maka ncheta gbasara ajụjụ ọnụ ọrụ?", options: ["Aha gị zuru ezu na ụbọchị ọmụmụ gị", "Ajụjụ ọnụ n'elekere 9 nke ụtụtụ", "Nọmba okwu ikpe gị", "Adreesị ụlọ gị"], answer: 1, why: "Aha ncheta kwesịrị ịdị n'ozuzu, na-enweghị ozi nzuzo." },
            { objective: "O1", q: "Ajụjụ ọnụ gị bụ echi n'elekere 9 nke ụtụtụ, ụgbọ ala na-ewe nkeji 40. Gịnị ka ị ga-eme?", options: ["Dobe otu ncheta maka elekere 9 nke ụtụtụ", "Tụọ anya na ị ga-echeta n'ụtụtụ", "Dobe ncheta maka abalị a na otu maka oge ị ga-apụ", "Dee ya n'aka gị"], answer: 2, why: "Ncheta abụọ, n'ụbọchị tupu ya na mgbe ị ga-apụ, na-enyere gị aka ịbịarute n'oge." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịga ebe dị iche iche site na maapụ na ụgbọ ala ọha",
          minutes: 6,
          goal: "Nweta ụzọ ụgbọ ala, ụgbọ oloko ma ọ bụ ụzọ ije ma mara oge ị ga-apụ.",
          text: [
            "App maapụ dị ka Google Maps na Apple Maps na-egosi otu esi aga ebe ọ bụla site n'ụgbọ ala (bus), ụgbọ oloko, ije ma ọ bụ ụgbọ ala nkịtị, na oge ọ ga-ewe.",
            "Meghee app maapụ, dee adreesị ahụ n'igbe ọchụchọ, ma pịa Directions. Họrọ akara ụgbọ ala ma ọ bụ ụgbọ oloko maka ụgbọ ala ọha (transit), ma ọ bụ onye na-eje ije. Ị ga-ahụ ụgbọ ala ị ga-abanye, ebe ị ga-anọ chere ya, na mgbe ọ ga-abịa. Ị nwekwara ike idobe oge ị chọrọ ịbịarute, app ahụ wee gosi oge ị ga-apụ.",
            "Hazie ịbịarute nkeji 10 ruo 15 tupu oge. Ụgbọ ala nwere ike igbu oge. Chekwaa adreesị ị na-agakarị, dị ka ụlọ gị ma ọ bụ ebe ọrụ, ka ọ dị naanị otu mpị. Ụfọdụ ụlọ ọrụ ụgbọ ala ọha nwekwara app nke ha na-egosi oge ụgbọ ala ozugbo."
          ],
          steps: ["Meghee app maapụ gị.", "Dee adreesị ahụ ma pịa Directions.", "Họrọ transit (ụgbọ ala ma ọ bụ ụgbọ oloko) ma ọ bụ ije.", "Dobe oge ịbịarute gị ka ị hụ oge ị ga-apụ.", "Hazie ịbịarute nkeji 10 ruo 15 tupu oge."],
          words: [["Transit", "ụgbọ njem ọha dị ka ụgbọ ala (bus) na ụgbọ oloko."], ["Oge ịbịarute (arrival time)", "oge ị kwesịrị ịnọ ebe ahụ."]],
          slides: [
            { title: "Maapụ maara ụzọ", bullets: ["Google Maps ma ọ bụ Apple Maps", "Ụgbọ ala ọha, ụgbọ oloko, ije ma ọ bụ ụgbọ ala"] },
            { title: "Nweta ụzọ", bullets: ["Dee adreesị, pịa Directions", "Họrọ transit ma ọ bụ ije", "Hụ ụgbọ ala ị ga-abanye na mgbe ọ ga-abịa"] },
            { title: "Bịa n'oge", bullets: ["Dobe oge ịbịarute gị", "Bịarute nkeji 10 ruo 15 tupu oge", "Chekwaa adreesị ị na-agakarị"] }
          ],
          tryIt: "Nweta ụzọ transit ma ọ bụ ụzọ ije gaa n'ezi ebe ị kwesịrị ịga, dị ka American Job Center (ebe enyemaka ọrụ), DMV (ọfịs ụgbọ ala na ID) ma ọ bụ ọba akwụkwọ. Dobe oge ịbịarute ma dee oge ị ga-apụ.",
          youCanNow: "inweta ụzọ transit na ụzọ ije ma chọpụta oge ị ga-apụ.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka idobe oge ịbịarute n'app maapụ na-egosi gị?", options: ["Mgbe ị kwesịrị ịpụ", "Ego ụgbọ ala ga-efu", "Ndị ọzọ na-aga", "Ihu igwe echi"], answer: 0, why: "Mgbe e dobere oge ịbịarute, app ahụ na-agbakọ oge ị kwesịrị ịpụ." },
            { objective: "O2", q: "Ị kwesịrị iji ụgbọ ala ruo DMV maka ọhụhụ elekere 10 nke ụtụtụ. Gịnị ka ị ga-eme?", options: ["Pụọ n'elekere 10 nke ụtụtụ", "Nweta ụzọ transit ma dobe ịbịarute ihe dị ka elekere 9:45", "Họrọ naanị ụzọ ije", "Jụọ onye ị na-amaghị n'ebe ụgbọ ala na-akwụsị"], answer: 1, why: "Ụzọ transit nwere oge ịbịarute mbụ na-enyere gị aka iru ebe ahụ nkeji 10 ruo 15 tupu oge." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịgụ na ịsụgharị ihe site n'igwefoto gị",
          minutes: 5,
          goal: "Jiri igwefoto ekwentị gị gụọ, detuo ma ọ bụ sụgharịa ihe e bipụtara.",
          text: [
            "Igwefoto ekwentị gị nwere ike ịgụ okwu e bipụtara. Site na Google Lens (n'ime app Google na n'ọtụtụ ekwentị Android) ma ọ bụ ngwa ederede nke igwefoto iPhone, ị nwere ike ịtụ ya n'akwụkwọ mgbasa ozi, akara ma ọ bụ fọm ma detuo ihe e dere, chọọ ya, ma ọ bụ sụgharịa ya.",
            "Meghee igwefoto ma ọ bụ Google Lens ma tụọ ya n'okwu ndị ahụ. Pịa bọtịnụ ederede ma ọ bụ ederede e gosipụtara, wee họrọ Copy, Listen, Translate ma ọ bụ Search. Nke a na-enye aka idetuo nọmba ekwentị site n'akwụkwọ mgbasa ozi ma ọ bụ ịgụ ntụziaka n'asụsụ ọzọ.",
            "Esela akwụkwọ nwere nọmba nzuzo foto n'ime ngwa AI, dị ka kaadị Social Security gị (nọmba njirimara gọọmentị US) ma ọ bụ akwụkwọ ụlọikpe. Jiri ngwa ndị a maka ihe ọha dị ka akwụkwọ mgbasa ozi, akara na mkpọsa ọrụ."
          ],
          steps: ["Meghee igwefoto ma ọ bụ Google Lens.", "Tụọ ya n'okwu e bipụtara.", "Pịa bọtịnụ ederede ma ọ bụ okwu e gosipụtara.", "Họrọ Copy, Listen, Translate ma ọ bụ Search.", "Esela akwụkwọ nzuzo foto."],
          words: [["Google Lens", "ngwa Google n'efu na-eji igwefoto gị agụ, asụgharị ma chọọ ihe ọ hụrụ."], ["Ịsụgharị (translate)", "ịgbanwe okwu site n'otu asụsụ gaa n'asụsụ ọzọ."]],
          slides: [
            { title: "Igwefoto nwere ike ịgụ ihe", bullets: ["Google Lens ma ọ bụ igwefoto iPhone", "Akwụkwọ mgbasa ozi, akara, mkpọsa ọrụ"] },
            { title: "Ihe ị nwere ike ime", bullets: ["Detuo nọmba ekwentị", "Nụ ka a gụpụta okwu ndị ahụ n'olu dị elu", "Sụgharịa ma ọ bụ chọọ ya"] },
            { title: "Jiri ya naanị maka ihe ọha", bullets: ["Ọ bụghị kaadị Social Security", "Ọ bụghị akwụkwọ ụlọikpe ma ọ bụ fọm nzuzo"] }
          ],
          tryIt: "Tụọ igwefoto gị ma ọ bụ Google Lens n'akwụkwọ mgbasa ozi, akara ma ọ bụ mkpọsa ọrụ. Detuo nọmba ekwentị ma ọ bụ adreesị site na ya n'ime ndetu ma ọ bụ kọntaktị gị.",
          youCanNow: "iji igwefoto gị detuo, nụ ma ọ bụ sụgharịa ihe e bipụtara.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka ngwa ederede igwefoto ekwentị gị nwere ike ime n'akwụkwọ mgbasa ozi ọrụ e bipụtara?", options: ["Rịọ ọrụ ahụ n'ọnọdụ gị", "Bipụta nke ọhụrụ", "Kpọọ onye were ọrụ n'onwe ya", "Gụọ, detuo ma ọ bụ sụgharịa ihe e dere"], answer: 3, why: "Ngwa ederede igwefoto nwere ike ịgụ, detuo ma sụgharịa okwu e bipụtara." },
            { objective: "O3", q: "Ị chọrọ ise akwụkwọ nwere nọmba Social Security gị foto n'ime ngwa AI. Gịnị ka ị ga-eme?", options: ["See ya ka AI kọwaa ya", "Esela ya; debe nọmba nzuzo n'ebe ngwa AI na-adịghị", "See naanị ọkara ya", "Tinye ya n'ịntanetị maka enyemaka"], answer: 1, why: "Nọmba nzuzo dị ka nọmba Social Security gị ekwesịghị ịbanye na ngwa AI mgbe ọ bụla." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ekwentị gị dị ka onye enyemaka",
        questions: [
          { objective: "O1", q: "Kedu ụzọ kacha mma ị ga-esi ghara ịtụfu ajụjụ ọnụ ọrụ?", options: ["Dee ya n'aka gị", "Tụọ anya na ị ga-echeta", "Dobe ncheta n'ụbọchị tupu ya na otu maka oge ị ga-apụ", "Rịọ onye ị na-amaghị ka o chetara gị"], answer: 2, why: "Ncheta abụọ na-ekpuchi nhazi na ịpụ n'oge." },
          { objective: "O2", q: "N'app maapụ, kedu nhọrọ na-egosi ụzọ ụgbọ ala na ụgbọ oloko?", options: ["Transit", "Satellite", "Traffic", "Settings"], answer: 0, why: "Transit na-egosi ụgbọ njem ọha." },
          { objective: "O2", q: "Oge ole tupu oge ka ị kwesịrị ịhazi ịbịarute n'ọhụhụ?", options: ["Otu awa mgbe oge gafere", "Kpọmkwem n'oge", "Nkeji 5 mgbe oge gafere", "Nkeji 10 ruo 15 tupu oge"], answer: 3, why: "Ụgbọ ala nwere ike igbu oge; ịbịarute n'isi ụtụtụ ka mma." },
          { objective: "O3", q: "Gịnị ka Google Lens nwere ike ime n'akwụkwọ mgbasa ozi?", options: ["Bipụta ego", "Detuo, gụpụta n'olu dị elu ma ọ bụ sụgharịa ihe e dere", "Kpọọ ezinụlọ gị", "Bịanye aka na fọm n'ọnọdụ gị"], answer: 1, why: "Lens na-agụ ederede igwefoto hụrụ." },
          { objective: "O3", q: "Kedu nke ị na-ekwesịghị ise foto n'ime ngwa AI?", options: ["Akwụkwọ mgbasa ozi ọrụ", "Kaadị Social Security gị", "Akara okporo ụzọ", "Usoro oge ụgbọ ala"], answer: 1, why: "Akwụkwọ nzuzo ekwesịghị ịbanye na ngwa AI." }
        ]
      }
    },
    {
      name: "Isi 2: Imezu ihe",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịchọta enyemaka dị nso",
          minutes: 5,
          goal: "Chọta ọrụ enyemaka dị nso maka ebe obibi, nri, ọrụ ma ọ bụ njem.",
          text: [
            "Enyemaka dị, mana ịchọta ya nwere ike isi ike. 211 bụ ọrụ dị na United States niile na-ejikọ gị na enyemaka dị nso maka ebe obibi, nri, njem, nlekọta ahụike na ihe ndị ọzọ. Kpọọ 211, ma ọ bụ chọta 211 nke mpaghara gị na 211.org. Oku ndị ahụ bụ nzuzo, ị nwekwara ike ịghara ikwu aha gị.",
            "Ngwa enyemaka AI nwere ike inyere gị aka ịkwado: \"Ka m lọtara, ana m ebi na Columbus, Ohio. Kedu ụdị ọrụ enyemaka dị nso nwere ike inye aka n'ebe obibi, nri na ọzụzụ ọrụ? Kedu ajụjụ m kwesịrị ịjụ mgbe m kpọrọ 211?\"",
            "AI nwere ike ịkpọ aha mmemme ndị mechiri emechi ma ọ bụ nye nọmba ekwentị ezighi ezi. Kwado ya mgbe niile site na 211, ezi weebụsaịtị mmemme ahụ, ma ọ bụ onye na-elekọta okwu re-entry gị (case manager) tupu ị gaa."
          ],
          steps: ["Jụọ AI ụdị enyemaka ị ga-achọ na ihe ị ga-ajụ.", "Kpọọ 211 ma ọ bụ chọọ na 211.org.", "Dee mmemme ndị ahụ, nọmba ha na oge mmeghe ha.", "Kwado ya na ezi weebụsaịtị ma ọ bụ site n'oku tupu ị gaa."],
          words: [["211", "nọmba ekwentị na weebụsaịtị na-ejikọ gị na enyemaka dị nso."], ["Case manager", "onye na-enyere gị aka ịhazi atụmatụ ma chọta ọrụ enyemaka."]],
          slides: [
            { title: "Enyemaka dị", bullets: ["Ebe obibi, nri, njem, nlekọta ahụike", "Kpọọ 211 ma ọ bụ gaa na 211.org", "Ọ bụ nzuzo; ị nwere ike ịghara ikwu aha gị"] },
            { title: "Jiri AI kwadoo", bullets: ["Ụdị enyemaka ị ga-achọ", "Ajụjụ ị ga-ajụ"] },
            { title: "Kwado ya tupu ị gaa", bullets: ["AI nwere ike ịkpọ mmemme mechiri emechi", "Lelee na 211 ma ọ bụ ezi weebụsaịtị", "Jụọ case manager gị"] }
          ],
          sources: [{ name: "211: Banyere anyị (About us)", url: "https://www.211.org/about-us" }],
          tryIt: "Jụọ ngwa enyemaka AI ụdị ọrụ enyemaka dị nso nwere ike inyere gị aka ugbu a na ihe ị ga-ajụ mgbe ị kpọrọ. Wee chọta 211 nke mpaghara gị na 211.org ma dee otu mmemme ị ga-akpọtụrụ.",
          youCanNow: "ịchọta enyemaka dị nso ma kwado ya tupu ị gaa.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka 211 nwere ike inyere gị aka ịchọta?", options: ["Naanị enyemaka ndị uwe ojii mberede", "Naanị ọrụ dị n'ụlọ ọrụ buru ibu", "Enyemaka dị nso maka ebe obibi, nri na ihe ndị ọzọ", "Akụkọ mpụ gị"], answer: 2, why: "211 na-ejikọ ndị mmadụ na ọrụ enyemaka dị nso dị ka ebe obibi na nri." },
            { objective: "O4", q: "Ngwa enyemaka AI nyere gị nọmba ekwentị nke ebe a na-enye nri n'efu (food bank). Gịnị ka ị ga-eme?", options: ["Kwado nọmba ahụ site na 211 ma ọ bụ ezi weebụsaịtị", "Gaa ebe ahụ ozugbo", "Kesaa ya ndị enyi gị n'eleleghị ya", "Jụọ AI ma o ji n'aka"], answer: 0, why: "AI nwere ike ime mperi, ya mere ị na-akwado ozi site na 211 ma ọ bụ isi iyi gọọmentị." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Iji AI dee ozi kwa ụbọchị",
          minutes: 5,
          goal: "Jiri AI dee obere ozi nwere nkwanye ugwu maka ezi ọnọdụ.",
          text: [
            "Ọtụtụ ọnọdụ kwa ụbọchị chọrọ ozi: ịgwa onye were gị n'ọrụ na ị ga-egbu oge, ịjụ onye nwe ụlọ maka ụlọ, ịkele mmadụ maka ajụjụ ọnụ, ma ọ bụ ịkpọtụrụ ezinụlọ.",
            "Gwa AI onye ozi ahụ bụ maka ya, ihe ị chọrọ ikwu, na otu o kwesịrị isi dị: \"Dee obere ozi ederede nwere nkwanye ugwu nye onye na-ewe ndị ọrụ. Ụgbọ ala m na-egbu oge nkeji 10 maka ajụjụ ọnụ m nke elekere 9 nke ụtụtụ. Ọ dị m nwute, ọ ka na-amasịkwa m nke ukwuu.\"",
            "Gụpụta ya n'olu dị elu ma gbanwee ihe ọ bụla na-adịghị ka okwu gị. Mee ka ọ dị mkpụmkpụ ma bụrụ eziokwu. Ọ dịghị mkpa ịkọwa ihe gara aga gị n'ozi kwa ụbọchị."
          ],
          steps: ["Kwuo onye ọ bụ maka ya.", "Kwuo ihe ị chọrọ ikwu.", "Kwuo otu o kwesịrị isi dị: nkwanye ugwu, mkpụmkpụ, enyi.", "Gụpụta ya n'olu dị elu ma mee ka ọ dị ka okwu gị."],
          words: [["Nkwanye ugwu (polite)", "ịsọpụrụ mmadụ na ikwu okwu nke ọma."], ["Ihe mbụ (draft)", "ụdị mbụ ị nwere ike ịgbanwe."]],
          slides: [
            { title: "Ozi kwa ụbọchị", bullets: ["Ị na-egbu oge", "Ịjụ maka ụlọ", "Ịkele onye jụrụ gị ajụjụ ọnụ"] },
            { title: "Gwa AI ihe atọ", bullets: ["Onye ọ bụ maka ya", "Ihe ị chọrọ ikwu", "Otu o kwesịrị isi dị"] },
            { title: "Mee ka ọ bụrụ nke gị", bullets: ["Gụpụta ya n'olu dị elu", "Mkpụmkpụ na eziokwu", "Ọ dịghị mkpa ịkọwa ihe gara aga gị"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI ka o dee obere ozi ederede nwere nkwanye ugwu na-agwa onye ga-ajụ gị ajụjụ ọnụ na ụgbọ ala gị na-egbu oge. Gbanwee otu ihe ka ọ dị ka okwu gị.",
          youCanNow: "ide ozi kwa ụbọchị doro anya ma nwee nkwanye ugwu site n'enyemaka AI.",
          quickCheck: [
            { objective: "O5", q: "Gịnị na-eme ka ozi kwa ụbọchị dị mma?", options: ["Ogologo ma jupụta n'ozi gbasara ihe gara aga gị", "Mkpụmkpụ, nkwanye ugwu na eziokwu", "E dere ya naanị na mkpụrụ akwụkwọ ukwu", "E zipụrụ ya n'agụghị ya"], answer: 1, why: "Ozi mkpụmkpụ, nwere nkwanye ugwu ma bụrụ eziokwu dị mfe ịgụ ma nwee nsọpụrụ." },
            { objective: "O5", q: "AI dere ozi igbu oge nwere okwu ị na-agaghị ekwu mgbe ọ bụla. Gịnị ka ị ga-eme?", options: ["Zipu ya otu o sila dị", "Rịọ AI ka o mee ka ọ dị ogologo", "Hichapụ ya ma ghara izipu ihe ọ bụla", "Gbanwee okwu ndị ahụ ka ọ dị ka okwu gị, wee zipu ya"], answer: 3, why: "Ị na-agụ ihe mbụ AI dere ma gbanwee ha ka ha dị ka okwu gị." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ndepụta maka ọhụhụ na akwụkwọ",
          minutes: 5,
          goal: "Rịọ AI ndepụta ihe ị ga-eweta, wee kwado ya n'ọfịs ahụ.",
          text: [
            "Ịbịa n'enweghị akwụkwọ kwesịrị ekwesị nwere ike ime ka ị laghachi ọzọ. Rịọ AI ndepụta: \"Ana m aga DMV nke steeti m inweta state ID. Kedu akwụkwọ ndị mmadụ na-ewetakarị? Mee obere ndepụta.\"",
            "Wee kwado ya n'ọfịs ahụ n'onwe ya. Iwu dị iche n'otu steeti na nke ọzọ ma na-agbanwe ka oge na-aga, ya mere ezi weebụsaịtị (nke na-ejedebekarị na .gov) ma ọ bụ oku ekwentị bụ okwu ikpeazụ. Mmemme re-entry gị ma ọ bụ case manager gị nwekwara ike inyere gị aka inweta akwụkwọ dị ka asambodo ọmụmụ (birth certificate).",
            "Debe ndepụta ahụ n'ime ndetu ekwentị gị ma ọ bụ n'akwụkwọ. Edela ezi nọmba ID gị, nọmba okwu ikpe ma ọ bụ nọmba Social Security n'ime AI mgbe ọ bụla; ndepụta ahụ chọrọ naanị aha akwụkwọ."
          ],
          steps: ["Jụọ AI ihe a na-achọkarị.", "Rịọ maka obere ndepụta.", "Kwado ya na ezi weebụsaịtị ọfịs ahụ ma ọ bụ site n'oku.", "Chịkọta akwụkwọ ndị ahụ ma kaa akara n'ihe ọ bụla.", "Edela ezi nọmba gị n'ime AI mgbe ọ bụla."],
          words: [["Ndepụta (checklist)", "ndepụta ihe ị na-aka akara otu n'otu."], ["State ID", "kaadị njirimara gọọmentị nwere foto site na steeti gị, maka ndị na-anaghị anya ụgbọ ala."]],
          slides: [
            { title: "Zere ịlaghachi ọzọ", bullets: ["Rịọ AI ndepụta", "\"Gịnị ka ndị mmadụ na-ewetakarị iji nweta state ID?\""] },
            { title: "Kwado ya n'ọfịs ahụ", bullets: ["Iwu dị iche n'otu steeti na nke ọzọ", "Ezi weebụsaịtị, nke na-adịkarị .gov, ma ọ bụ kpọọ oku", "Rịọ case manager gị maka enyemaka"] },
            { title: "Debe nọmba gị na nzuzo", bullets: ["Ndepụta chọrọ naanị aha akwụkwọ", "Edela nọmba ID ma ọ bụ nọmba okwu ikpe n'ime AI mgbe ọ bụla"] }
          ],
          tryIt: "Ọrụ ikpeazụ: họrọ otu ezi ọhụhụ. Nweta ụzọ transit ma ọ bụ ụzọ ije, dobe ncheta maka oge ị ga-apụ, rịọ AI ndepụta ihe ị ga-eweta (wee kwado ya na ezi weebụsaịtị), ma mee ka AI nyere gị aka dee obere ozi ị ga-ezipu ma ọ bụrụ na ị na-egbu oge.",
          youCanNow: "iji ngwa AI kwa ụbọchị hazie, kwadoo ma ruo ọhụhụ n'oge.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka ndepụta akwụkwọ kwesịrị inwe?", options: ["Aha akwụkwọ ndị ị chọrọ", "Nọmba ID gị na nọmba Social Security gị", "Okwuntughe gị", "Adreesị ụlọ onye nlekọta parole gị"], answer: 0, why: "Ndepụta chọrọ aha akwụkwọ, ọ bụghị nọmba nzuzo gị." },
            { objective: "O6", q: "Ndepụta AI mere maka ọhụhụ state ID dị ka o zuru ezu. Gịnị ka ị ga-eme ọzọ?", options: ["Kwere ya ma gaa", "Ewetala ihe ọzọ", "Kwado ndepụta ahụ na ezi weebụsaịtị ọfịs ahụ ma ọ bụ site n'oku", "Jụọ enyi gị ihe o wetara afọ gara aga"], answer: 2, why: "Ọfịs ahụ nwere okwu ikpeazụ maka ihe ị ga-eweta." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Imezu ihe",
        questions: [
          { objective: "O4", q: "Kedu nọmba na-ejikọ gị na enyemaka dị nso maka ebe obibi, nri na ihe ndị ọzọ?", options: ["611", "411", "311 ebe niile", "211"], answer: 3, why: "211 na-ejikọ ndị mmadụ na ọrụ enyemaka dị nso." },
          { objective: "O4", q: "AI nyere gị nọmba ekwentị nke otu mmemme. Gịnị ka ị ga-eme?", options: ["Kwado ya site na 211 ma ọ bụ ezi weebụsaịtị", "Kwere ya kpamkpam", "Tinye ya n'ịntanetị", "Nye ya nọmba okwu ikpe gị"], answer: 0, why: "AI nwere ike ịkpọ mmemme mechiri emechi ma ọ bụ nye nọmba ezighi ezi." },
          { objective: "O5", q: "Kedu prompt ga-enweta ezigbo ozi \"ana m egbu oge\"?", options: ["\"oge\"", "\"ozi\"", "\"Dee obere ozi ederede nwere nkwanye ugwu nye onye na-ewe ndị ọrụ. Ụgbọ ala m na-egbu oge nkeji 10 maka ajụjụ ọnụ m nke elekere 9 nke ụtụtụ.\"", "\"ụgbọ ala\""], answer: 2, why: "Ọ na-ekwu onye ọ bụ maka ya, ihe ọ bụ na otu o kwesịrị isi dị." },
          { objective: "O5", q: "Ị kwesịrị ịkọwa ihe gara aga gị n'ozi kwa ụbọchị?", options: ["Naanị n'email", "Ee, mgbe niile", "Naanị nye ndị nwe ụlọ", "Mba; mee ka ọ dị mkpụmkpụ ma bụrụ eziokwu"], answer: 3, why: "Ozi kwa ụbọchị chọrọ naanị isi okwu ya." },
          { objective: "O6", q: "Onye nwere okwu ikpeazụ gbasara akwụkwọ ị ga-eweta?", options: ["Enyi", "AI", "Ọfịs ahụ n'onwe ya", "Ozi n'ịntanetị mgbasa ozi (social media)"], answer: 2, why: "Iwu dị iche n'otu steeti na nke ọzọ; ọfịs ahụ na-ekpebi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ngwa AI Maka Ndụ Kwa Ụbọchị",
    questions: [
      { objective: "O1", q: "Siri na Google Assistant bụ:", options: ["Weebụsaịtị ọrụ", "Ndị enyemaka olu dị n'ekwentị", "Ụlọ ọrụ ụgbọ ala", "Ụlọ akụ"], answer: 1, why: "Ha na-eme obere ọrụ mgbe ị kwuru okwu." },
      { objective: "O1", q: "Kedu arịrịọ olu na-edobe ncheta bara uru?", options: ["\"Chetara m ajụjụ ọnụ m na Tuzde n'elekere 9 nke ụtụtụ.\"", "\"Ajụjụ ọnụ.\"", "\"Tuzde.\"", "\"Ndewo.\""], answer: 0, why: "Ọ na-ekwu ihe ọ bụ, ụbọchị na oge." },
      { objective: "O1", q: "Maka ọhụhụ dị mkpa, dobe:", options: ["Ncheta abụọ: n'ụbọchị tupu ya na mgbe ị ga-apụ", "Ọ dịghị nke ọ bụla", "Otu ọnwa mgbe e mechara", "Mkpu iri na-enweghị usoro"], answer: 0, why: "Ncheta abụọ na-ekpuchi nhazi na ịpụ." },
      { objective: "O1", q: "Aha ncheta kwesịrị ịbụ:", options: ["Nke jupụtara na nọmba ID", "N'ozuzu, na-enweghị ozi nzuzo", "Nọmba okwu ikpe gị", "Okwuntughe gị"], answer: 1, why: "Ọ dịghị mkpa itinye ozi nzuzo na ncheta." },
      { objective: "O2", q: "N'app maapụ, mgbe i dechara adreesị, ị na-apị:", options: ["Camera", "Delete", "Directions", "Kesaa okwuntughe"], answer: 2, why: "Directions na-egosi otu esi aga ebe ahụ." },
      { objective: "O2", q: "\"Transit\" pụtara:", options: ["Ịfe n'ụgbọ elu", "Naanị ije", "Naanị tagzi", "Ụgbọ ala ọha na ụgbọ oloko"], answer: 3, why: "Transit bụ ụgbọ njem ọha." },
      { objective: "O2", q: "Idobe oge ịbịarute n'app maapụ na-egosi:", options: ["Nọmba ID gị", "Ego dị n'ụlọ akụ gị", "Mgbe ị kwesịrị ịpụ", "Naanị ihu igwe"], answer: 2, why: "Ọ na-agbakọ azụ site n'oge ịbịarute gị." },
      { objective: "O2", q: "Ichekwa adreesị ị na-agakarị na-eme ka ha:", options: ["Dị naanị otu mpị", "Bụrụ nọmba nzuzo", "Pụọ n'anya", "Dị oke ọnụ"], answer: 0, why: "Ebe e chekwara dị ngwa iru." },
      { objective: "O3", q: "Google Lens nwere ike:", options: ["Ịkpọ onye nlekọta parole gị", "Ịnọchi ID gị", "Ịkwụ ụgwọ ụlọ gị", "Ịgụ, idetuo na ịsụgharị ihe e bipụtara"], answer: 3, why: "Lens na-agụ ihe igwefoto hụrụ." },
      { objective: "O3", q: "Ezigbo ụzọ iji ngwa ederede igwefoto bụ:", options: ["Ise kaadị Social Security gị foto n'ime AI", "Idetuo nọmba ekwentị site n'akwụkwọ mgbasa ozi ọrụ", "Ise akwụkwọ ụlọikpe foto n'ime AI", "Ise kaadị ụlọ akụ gị foto maka AI"], answer: 1, why: "Naanị ederede ọha; debe akwụkwọ nzuzo n'ebe AI na-adịghị." },
      { objective: "O4", q: "Oku 211 bụ:", options: ["Nke a na-edekọ maka ọha", "Nzuzo, ị nwekwara ike ịghara ikwu aha gị", "Naanị maka mberede", "Naanị maka azụmahịa"], answer: 1, why: "Oku 211 bụ nzuzo." },
      { objective: "O4", q: "AI nwere ike inye aka tupu ị kpọọ 211 site na:", options: ["Ikwe nkwa akwa ihi ụra", "Ịmara akụkọ okwu ikpe gị", "Idenye aha gị n'onwe ya", "Ịtụ aro ụdị enyemaka ị ga-ajụ maka ya"], answer: 3, why: "Ọ na-enyere gị aka ịkwado ajụjụ." },
      { objective: "O4", q: "Case manager bụ:", options: ["Onye na-enyere gị aka ịhazi atụmatụ ma chọta ọrụ enyemaka", "App ekwentị", "Onye ọkwọ ụgbọ ala", "Weebụsaịtị"], answer: 0, why: "Case manager na-enyere aka n'atụmatụ re-entry." },
      { objective: "O5", q: "Mgbe AI dere gị ozi, ị kwesịrị:", options: ["Itinye nọmba Social Security gị", "Izipu ya n'agụghị ya", "Ịgụpụta ya n'olu dị elu ma mee ka ọ dị ka okwu gị", "Ime ka ọ dị ogologo nke ukwuu"], answer: 2, why: "Ozi gị kwesịrị ịdị ka okwu gị." },
      { objective: "O5", q: "Ezigbo ozi kwa ụbọchị bụ:", options: ["Nke jupụtara n'ozi nzuzo", "Ogologo ma jupụta n'ihe ngọpụ", "Nke enweghị nkwanye ugwu", "Mkpụmkpụ, nkwanye ugwu na eziokwu"], answer: 3, why: "Mkpụmkpụ na eziokwu na-arụ ọrụ kacha mma." },
      { objective: "O5", q: "\"Draft\" (ihe mbụ) bụ:", options: ["Kaadị ụgbọ ala", "Nke ikpeazụ", "Ụdị mbụ ị nwere ike ịgbanwe", "ID"], answer: 2, why: "Ị na-eme ka ihe mbụ ka mma tupu i zipu ya." },
      { objective: "O6", q: "Tupu ị gaa inweta state ID, ị kwesịrị:", options: ["Ịtụkwasị naanị AI obi", "Ịkwado ndepụta akwụkwọ na ezi weebụsaịtị ma ọ bụ site n'oku", "Ọ dịghị ihe ị ga-eweta", "Ịjụ onye ị na-amaghị"], answer: 1, why: "Iwu dị iche n'otu steeti na nke ọzọ." },
      { objective: "O6", q: "Ezi weebụsaịtị gọọmentị US na-ejedebekarị na:", options: [".gov", ".win", ".gift", ".xyz"], answer: 0, why: "Ọfịs gọọmentị na-eji .gov." },
      { objective: "O6", q: "Gịnị ka ndepụta akwụkwọ chọrọ?", options: ["Aha akwụkwọ, ọ bụghị nọmba gị", "Ezi nọmba ID gị", "Nọmba okwu ikpe gị", "Nọmba Social Security gị"], answer: 0, why: "Aha akwụkwọ zuru ezu." },
      { objective: "O6", q: "State ID bụ:", options: ["Tiketi ụgbọ ala", "Kaadị njirimara gọọmentị nwere foto site na steeti gị", "Kaadị ọba akwụkwọ", "App ekwentị"], answer: 1, why: "Ọ bụ ezi ID nwere foto maka ndị na-anaghị anya ụgbọ ala na ndị ọzọ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [1, 3, 4, 6, 8, 10, 13, 16, 18]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ụzọ", objective: "O2", notYet: "Enweghị ụzọ, ma ọ bụ amaghị oge a ga-apụ.", meets: "Ụzọ transit ma ọ bụ ụzọ ije nwere oge ịbịarute e dobere tupu oge, na oge ịpụ e dere ede.", exceeds: "Nwekwara ụzọ ọzọ e ji kwadebe ma ọ bụ adreesị e chekwara maka otu mpị." },
      { name: "Ncheta ịpụ", objective: "O1", notYet: "Enweghị ncheta, ma ọ bụ ncheta nwere ozi nzuzo n'aha ya.", meets: "Ncheta e dobere maka oge ịpụ, nwere aha n'ozuzu.", exceeds: "Dobekwara ncheta n'ụbọchị tupu ya." },
      { name: "E kwadoro ndepụta", objective: "O6", notYet: "Enweghị ndepụta, ma ọ bụ ndepụta nwere nọmba nzuzo, ma ọ bụ nke a na-akwadoghị.", meets: "Ndepụta aha akwụkwọ, nke e kwadoro na ezi weebụsaịtị ma ọ bụ site n'oku.", exceeds: "Nwere ike ikwu ebe o kwadoro ya na ihe gbanwere site na ndepụta AI." },
      { name: "Ozi igbu oge", objective: "O5", notYet: "Enweghị ozi, ma ọ bụ ozi dị ogologo, enweghị nkwanye ugwu ma ọ bụ nwere ozi nzuzo.", meets: "Obere ozi nwere nkwanye ugwu, bụ eziokwu, dịkwa njikere izipu.", exceeds: "Onye na-amụ ihe gbanwere ụfọdụ okwu ka o yie okwu ya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe kwuru na ha ruru ọhụhụ n'oge site n'iji ngwa ndị a n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe kpọtụrụ ọrụ enyemaka dị nso ha chọtara site na 211 n'ime ụbọchị 30",
      "Ndị mmekọ re-entry na-akọ na ọhụhụ a tụfuru tụfuru belatara"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone nwere ịntanetị na app maapụ",
      "Ngwa enyemaka AI n'efu: Microsoft Copilot, ChatGPT ma ọ bụ Google Gemini",
      "Akwụkwọ mgbasa ozi ma ọ bụ mkpọsa ọrụ e bipụtara maka omume igwefoto",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Rịọ ndị na-amụ ihe ka ha weta ezi ọhụhụ na-abịa abịa ka ọrụ ikpeazụ baa uru ozugbo.",
      "Ejila mgbe ọ bụla rịọ ndị na-amụ ihe ka ha dee ma ọ bụ see ezi nọmba ID, nọmba okwu ikpe ma ọ bụ nọmba Social Security foto; jiri naanị aha akwụkwọ.",
      "Gaa na 211.org ọnụ ka onye ọ bụla nwee ike ịchọta 211 nke mpaghara ya.",
      "Chetara ndị nọ na parole ma ọ bụ probation ka ha gbasoo iwu ọ bụla gbasara iji ịntanetị ma ọ bụ ekwentị.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

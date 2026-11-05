"use strict";

// Koach Learn course (Igbo translation of seniors/seniors-ai-travel.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "seniors-ai-travel-ig",
  lang: "ig",
  translationOf: "seniors-ai-travel",
  category: "Seniors and Technology",
  name: "AI dị ka Enyi Njem",
  skills: "Iji AI hazie atụmatụ njem, Ịlele eziokwu njem na weebụsaịtị gọọmentị na nke ezi ụlọ ọrụ, Ime ndepụta ihe ị ga-ebu, Iji ngwa map na ngwa ntụgharị asụsụ, Ịnọ n'udo na ijikọ ezinụlọ mgbe ị na-eme njem",
  outcome: "iji ngwa enyemaka AI hazie obere njem nke na-aga nwayọọ dị gị mma, ịlele eziokwu ndị dị mkpa na weebụsaịtị ezi ụlọ ọrụ, ime ndepụta ihe ị ga-ebu, na iji ngwa map na ngwa ntụgharị asụsụ dị n'ekwentị gị n'okporo ụzọ.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị okenye chọrọ ime njem: ịga hụ ụmụ ụmụ ha n'ebe dị anya, ịga njem ụgbọ ala (bus tour), ma ọ bụ ịga hụ ebe ha na-arọ nrọ ya kemgbe.",
    "Ị ga-eji ngwa enyemaka AI n'efu dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini hazie njem dị jụụ nke dabara ike gị na mkpa gị, wee lelee eziokwu ndị dị mkpa (iwu ID, oge mmeghe, ọnụahịa) na weebụsaịtị ezi ụlọ ọrụ. Ị ga-ejikwa map, ntụgharị asụsụ na ikesa ebe ị nọ n'ekwentị gị.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Ọrụ \"Nwalee ya ugbu a\" na-ewu ezi atụmatụ maka njem ị ga-achọ ime. E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Jiri ngwa enyemaka AI hazie njem ụbọchị atọ: atụmatụ ụbọchị n'ụbọchị nke na-aga nwayọọ ma nwee oge izu ike, ndepụta ihe ị ga-ebu nke gụnyere ọgwụ gị na ID gị, na eziokwu atọ i lelere na weebụsaịtị ezi ụlọ ọrụ (dị ka ID ị chọrọ iji fee ụgbọelu na oge mmeghe nke ebe ị ga-eleta). Kesaa atụmatụ ahụ na otu onye ezinụlọ gị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye chọrọ ime njem, nso ma ọ bụ n'ebe dị anya, iji leta ezinụlọ, hụ ebe ọhụrụ ma ọ bụ zuo ike ntakịrị. Ọtụtụ mgbe ha na-aga nwayọọ, ha nwekwara mkpa ahụike dị ka ọgwụ kwa ụbọchị ma ọ bụ na ha anaghị enwe ike ije ogologo ụzọ.",
    startingPoint: "Ha emeela njem na mbụ, ọtụtụ mgbe site na map akwụkwọ, ndị ọrụ njem (travel agent) ma ọ bụ ezinụlọ na-ahazi ya maka ha. Ọtụtụ na-eji smartphone mana ha ejibeghị ngwa enyemaka AI, ntụziaka map, ngwa ntụgharị asụsụ ma ọ bụ ikesa ebe ha nọ.",
    gap: "Ịhazi njem nwere ike ịdị ka ihe buru ibu, mperi dị ka ID ezighi ezi, ebe ndị e mechiri emechi ma ọ bụ ọgwụ e chefuru echefu nwekwara ike imebi ya. Ngwa enyemaka AI na ngwa ekwentị na-enyere ndị okenye aka ịhazi njem n'oge nke ha ma mee njem n'onwe ha, ma ọ bụrụhaala na ha na-elele eziokwu na weebụsaịtị ezi ụlọ ọrụ ma na-akpachara anya maka aghụghọ njem.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe, ahịrịokwu dị mkpụmkpụ na nzọụkwụ buru ibu, dị mfe",
      "Ngwaọrụ: smartphone nwere ịntanetị, ngwa map na ngwa ntụgharị asụsụ",
      "Oge: ihe dị ka nkeji 5 maka nkuzi ọ bụla, na-aga nwayọọ",
      "Iwu njem, oge mmeghe na ọnụahịa na-agbanwe; ndị na-amụ ihe na-elele weebụsaịtị gọọmentị dị ka tsa.gov",
      "Ahụike na nzuzo: ọgwụ na-agbaso ndụmọdụ onye na-ere ọgwụ (pharmacist); ọ dịghị ọrụ ụlọ akụ na Wi-Fi ọha"
    ],
    prerequisites: "Ọ ga-aba uru ibu ụzọ were \"AI maka Ndị Okenye: Iji Ngwa Enyemaka AI\", mana ọ dịghị mkpa."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji ngwa enyemaka AI n'efu", action: "ịrịọ atụmatụ njem ụbọchị n'ụbọchị nke na-ekwu ebe, oge, ndị na-aga, ihe masịrị gị na otu i si aga", standard: "nwere oge izu ike na ihe omume na-akarịghị ihe ị nwere ike ime n'enweghị nsogbu" },
    { id: "O2", condition: "Mgbe e nyere gị atụmatụ njem AI", action: "ịlele eziokwu dị mkpa dị ka oge mmeghe, ọnụahịa na iwu ID na weebụsaịtị ezi ụlọ ọrụ", standard: "ma lelee opekata mpe eziokwu atọ tupu i jiri ha" },
    { id: "O3", condition: "Mgbe e nyere gị njem gị na mkpa ahụike gị", action: "ịrịọ ndepụta ihe ị ga-ebu e kewara n'otu n'otu nke gụnyere ọgwụ gị na ID gị", standard: "ma tinye ọgwụ na ID n'akpa i ji n'aka (carry-on)" },
    { id: "O4", condition: "Site n'iji ngwa map dị n'ekwentị gị", action: "inweta ntụziaka maka ije ụkwụ, ịnya ụgbọala ma ọ bụ ụgbọ ọha ma soro ntụziaka ọ na-ekwu n'olu", standard: "ma chekwaa họtel gị dị ka ebe ọ masịrị gị (favorite)" },
    { id: "O5", condition: "Mgbe ị chọrọ asụsụ ọzọ", action: "iji ngwa ntụgharị asụsụ gụọ akara ma ọ bụ kparịta obere ụka", standard: "ma dee mkpa dị mkpa, dị ka ihe na-adịghị gị mma n'ahụ (allergy), tupu oge ahụ ma gosi ndị ọrụ ka ha lelee ya" },
    { id: "O6", condition: "Tupu njem na n'oge njem", action: "ikesa atụmatụ gị na ezinụlọ gị ma hụ aghụghọ njem", standard: "ma were naanị weebụsaịtị ezi ụlọ ọrụ ma ọ bụ ndị ọrụ njem a tụkwasịrị obi tụọ ọnọdụ (book)" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhazi njem gị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Iji AI hazie atụmatụ njem dị jụụ",
          minutes: 5,
          goal: "Rịọ ngwa enyemaka AI maka atụmatụ njem ụbọchị n'ụbọchị nke dabara otu i si aga.",
          text: [
            "Itinerary bụ atụmatụ njem ụbọchị n'ụbọchị. Ngwa enyemaka AI nwere ike ide otu n'ime sekọnd ole na ole, ma gbanwee ya ugboro ole ọ bụla ị chọrọ.",
            "Gwa ya ebe, oge, ogologo ya, ndị na-aga, na ihe ị chọrọ: \"Hazie njem ụbọchị atọ dị jụụ na Savannah, Georgia n'ọnwa Eprel maka mmadụ abụọ dị afọ 70 na ihe. Akụkọ ihe mere eme na ubi okooko osisi masịrị anyị, anyị na-eje ije nwayọọ, anyị chọkwara izu ike kwa ehihie. Ọ ghara ịkarị ihe omume abụọ n'ụbọchị.\"",
            "Rịọ maka mgbanwe ruo mgbe ọ dabara: \"Tinye ebe a ga-anọdụ ala rie nri ehihie n'akụkụ ihe omume ụtụtụ ọ bụla.\" \"Kedu ebe nwere igwe mbuli (elevator) ma ọ bụ dị mfe maka onye ji mkpara?\""
          ],
          steps: ["Kwuo ebe, oge na ogologo njem ahụ.", "Kwuo ndị na-aga na ihe masịrị gị.", "Kwuo otu i si aga na mkpa ọ bụla, dị ka izu ike ma ọ bụ ije dị mfe.", "Rịọ maka mgbanwe ruo mgbe ọ dabara gị."],
          words: [["Itinerary", "atụmatụ njem ụbọchị n'ụbọchị."], ["Accessible (dị mfe iru)", "dị mfe iru na iji maka ndị na-anaghị eje ije nke ọma, ma ọ bụ ndị na-anụghị ma ọ bụ na-ahụghị ụzọ nke ọma."]],
          slides: [
            { title: "Atụmatụ n'ime sekọnd ole na ole", bullets: ["Itinerary bụ atụmatụ ụbọchị n'ụbọchị", "AI na-ede ya, gị na-ahazi ya"] },
            { title: "Gwa ngwa enyemaka ahụ", bullets: ["Ebe, oge, ogologo ya", "Ndị na-aga na ihe masịrị gị", "Otu i si aga na mkpa gị"] },
            { title: "Mee ka ọ dabara gị", bullets: ["\"Tinye oge izu ike kwa ehihie.\"", "\"Kedu ebe dị mfe maka onye ji mkpara?\""] }
          ],
          tryIt: "Họrọ njem ị ga-achọ ime. Rịọ ngwa enyemaka AI maka itinerary ụbọchị atọ dị jụụ nke nwere otu i si aga na mkpa gị, wee rịọ maka otu mgbanwe.",
          youCanNow: "ịrịọ AI maka atụmatụ njem dabara otu i si aga na mkpa gị.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ itinerary?", options: ["Ndepụta ihe ị ga-ebu", "Atụmatụ njem ụbọchị n'ụbọchị", "Tiketi ụgbọelu", "Fọm mkpuchi njem (insurance)"], answer: 1, why: "Itinerary bụ atụmatụ njem ụbọchị n'ụbọchị nke AI nwere ike ide ma gbanwee." },
            { objective: "O1", q: "Atụmatụ AI nwere ihe omume anọ kwa ụbọchị, ike na-agwụkwa gị ngwa ngwa. Gịnị ka ị ga-arịọ?", options: ["\"Hazie obodo ọzọ.\"", "Ọ dịghị ihe; ị ga-anagide ya", "\"Mee ka ọ dị ogologo.\"", "\"Ọ ghara ịkarị ihe omume abụọ n'ụbọchị, nwee izu ike kwa ehihie.\""], answer: 3, why: "Rịọ maka mgbanwe ruo mgbe atụmatụ ahụ dabara otu i si aga na mkpa gị." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịlele eziokwu njem na weebụsaịtị ezi ụlọ ọrụ",
          minutes: 5,
          goal: "Lelee eziokwu ndị dị mkpa n'atụmatụ njem AI tupu i jiri ha.",
          text: [
            "Atụmatụ njem AI nwere ike inwe mperi: ebe ngosi ihe mgbe ochie (museum) e mechiri, oge mmeghe ochie, ọnụahịa ezighi ezi ma ọ bụ iwu gbanwere. Lelee mgbe niile eziokwu ndị nwere ike imebi njem gị.",
            "Lelee oge mmeghe na ọnụahịa na weebụsaịtị nke ebe ahụ n'onwe ya. Lelee oge ụgbọelu na ụgbọ okporo ígwè n'aka ụlọ ọrụ ụgbọelu ma ọ bụ ụlọ ọrụ ụgbọ okporo ígwè. Maka ID: kemgbe 7 Mee 2025, ndị na-efe ụgbọelu n'ime United States chọrọ akwụkwọ ikike ịnya ụgbọala ma ọ bụ kaadị ID dabara REAL ID, ma ọ bụ ID ọzọ a nabatara dị ka paspọọtụ. Weebụsaịtị TSA, tsa.gov, depụtara ID niile a nabatara.",
            "Jụọ ngwa enyemaka ahụ: \"Gịnị n'atụmatụ a ka m kwesịrị ilelegharị?\" O nwere ike igosi eziokwu ndị dị mkpa, mana gị na-elele ha na weebụsaịtị ezi ụlọ ọrụ."
          ],
          steps: ["Jụọ AI eziokwu ndị ị ga-elelegharị.", "Lelee oge mmeghe na ọnụahịa na weebụsaịtị nke ebe ọ bụla n'onwe ya.", "Lelee oge ụgbọelu ma ọ bụ ụgbọ okporo ígwè n'aka ụlọ ọrụ ahụ.", "Lelee iwu ID na tsa.gov tupu i fee ụgbọelu."],
          words: [["REAL ID", "akwụkwọ ikike ịnya ụgbọala ma ọ bụ ID steeti nke dabara iwu gọọmentị etiti; ọ na-enwekarị kpakpando n'akụkụ."], ["TSA", "Transportation Security Administration, ụlọ ọrụ na-enyocha ndị njem n'ọdụ ụgbọelu US."]],
          slides: [
            { title: "Atụmatụ AI nwere ike ịbụ nke ochie", bullets: ["Ebe e mechiri emechi", "Oge mmeghe ma ọ bụ ọnụahịa ochie", "Iwu gbanwere"] },
            { title: "Lelee na weebụsaịtị ezi ụlọ ọrụ", bullets: ["Oge mmeghe na ọnụahịa: weebụsaịtị ebe ahụ", "Ụgbọelu na ụgbọ okporo ígwè: ụlọ ọrụ ahụ", "Iwu ID: tsa.gov"] },
            { title: "Ife ụgbọelu n'ime US", bullets: ["Kemgbe Mee 2025, ị chọrọ REAL ID ma ọ bụ ID ọzọ a nabatara", "A na-anabata paspọọtụ", "Lee ndepụta zuru ezu na tsa.gov"] }
          ],
          sources: [{ name: "TSA: REAL ID", url: "https://www.tsa.gov/real-id" }],
          tryIt: "Jụọ ngwa enyemaka ahụ eziokwu ndị dị n'itinerary gị ị ga-elelegharị. Wee lelee oge mmeghe nke otu ebe na weebụsaịtị ya n'onwe ya, ma lelee ma ID gị dabara REAL ID (chọọ kpakpando ahụ) ma ọ bụ ihe ọzọ tsa.gov na-anabata.",
          youCanNow: "ịlele eziokwu ndị bụ isi n'atụmatụ njem AI na weebụsaịtị ezi ụlọ ọrụ.",
          quickCheck: [
            { objective: "O2", q: "Ebee ka ị ga-elele oge mmeghe nke museum?", options: ["Na weebụsaịtị museum ahụ n'onwe ya", "Naanị n'azịza AI", "N'ebe mkparịta ụka ndị njem n'ịntanetị", "N'akwụkwọ ntụziaka njem ochie"], answer: 0, why: "AI nwere ike inye oge ochie; weebụsaịtị nke ebe ahụ n'onwe ya nwere oge nke ugbu a." },
            { objective: "O2", q: "Ị na-eme atụmatụ ife ụgbọelu n'ime US, ị maghịkwa ma a ga-anabata ID gị. Gịnị ka ị ga-eme?", options: ["Tụọ anya na ọ ga-adị mma", "Jụọ AI ma kwere ya", "Lelee ndepụta ID a nabatara na tsa.gov", "Buru kaadị ọba akwụkwọ"], answer: 2, why: "Weebụsaịtị TSA, tsa.gov, depụtara ID niile a nabatara maka ife ụgbọelu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ime ezigbo ndepụta ihe ị ga-ebu",
          minutes: 4,
          goal: "Rịọ AI maka ndepụta ihe ị ga-ebu nke dabara njem gị na mkpa ahụike gị.",
          text: [
            "Ndepụta ihe ị ga-ebu na-akwụsị nchegbu njem a ma ama: \"Ò nwere ihe m chefuru?\" Rịọ ngwa enyemaka ahụ maka otu dabere na njem gị, oge n'afọ na ihe omume.",
            "Dịka ọmụmaatụ: \"Mee ndepụta ihe m ga-ebu maka ụbọchị atọ na Savannah n'ọnwa Eprel. Ana m aṅụ ọgwụ kwa ụbọchị, ana m ejikwa ugogbe anya maka ịgụ akwụkwọ na ngwa enyemaka ịnụ ihe (hearing aid). Kewaa ya n'otu n'otu: akwụkwọ, ọgwụ na ahụike, uwe, na ngwa eletrọnịkị.\"",
            "Debe ọgwụ n'akpa i ji n'aka (carry-on) n'ime ihe e ji bụ ụzọ chekwaa ha, tinye ntakịrị karịa ma ọ bụrụ na igbu oge emee, ma buru ndepụta ọgwụ gị na nọmba ekwentị dọkịta gị. Onye na-ere ọgwụ (pharmacist) gị nwere ike inye ndụmọdụ banyere iji ọgwụ eme njem."
          ],
          steps: ["Gwa AI ebe, oge n'afọ, ogologo njem na ihe omume.", "Kwuo mkpa ahụike, dị ka ọgwụ ma ọ bụ hearing aid.", "Rịọ ya ka o kewaa ndepụta ahụ n'otu n'otu.", "Debe ọgwụ na ID n'akpa i ji n'aka."],
          words: [["Akpa i ji n'aka (carry-on)", "akpa ị na-ejide n'aka gị n'ime ụgbọelu, ụgbọ ala ma ọ bụ ụgbọ okporo ígwè."]],
          slides: [
            { title: "Ọ dịghị ichefu ihe ọzọ", bullets: ["Rịọ AI maka ndepụta ihe ị ga-ebu", "Dabere n'ebe, oge n'afọ na ihe omume"] },
            { title: "Kewaa ndepụta ahụ", bullets: ["Akwụkwọ", "Ọgwụ na ahụike", "Uwe na ngwa eletrọnịkị"] },
            { title: "Ọgwụ na-eso gị", bullets: ["N'akpa i ji n'aka, n'ime ihe mbụ e ji chekwaa ha", "Ntakịrị karịa maka igbu oge", "Ndepụta ọgwụ na nọmba dọkịta gị"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI maka ndepụta ihe ị ga-ebu e kewara n'otu n'otu maka njem gị, gụnyere mkpa ahụike gị. Tinye ihe ọ bụla o chefuru, ma chekwaa ma ọ bụ bipụta ndepụta ahụ.",
          youCanNow: "iji AI mee ndepụta ihe ị ga-ebu nke gụnyere mkpa ahụike gị.",
          quickCheck: [
            { objective: "O3", q: "Gịnị mere ị ga-eji rịọ AI ka o kewaa ndepụta ihe ị ga-ebu?", options: ["Ka ndepụta ahụ dị ogologo", "Ka ọ dị mfe ilele ya otu akụkụ n'otu, dị ka akwụkwọ na ọgwụ", "Ka i bu ihe ole na ole", "Ka AI cheta njem gị"], answer: 1, why: "Ikewa ya n'akwụkwọ, ọgwụ, uwe na ngwa eletrọnịkị na-eme ka ọ dị mfe ilele." },
            { objective: "O3", q: "Ị na-aṅụ ọgwụ kwa ụbọchị. Kedu otu ị ga-esi bu ha?", options: ["N'igbe uwe a na-enye ka a buo n'ụgbọelu (checked)", "N'ime akpa rọba n'enweghị ihe e ji chekwaa ha", "Naanị nke ga-ezu kwa ụbọchị", "N'akpa i ji n'aka, n'ime ihe mbụ e ji chekwaa ha, ma tinye ntakịrị karịa"], answer: 3, why: "Debe ọgwụ n'akpa i ji n'aka n'ime ihe mbụ e ji chekwaa ha, ma tinye ntakịrị karịa maka igbu oge." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhazi njem gị",
        questions: [
          { objective: "O1", q: "Gịnị bụ itinerary?", options: ["Tiketi ụgbọelu", "Igbe uwe", "Atụmatụ njem ụbọchị n'ụbọchị", "Paspọọtụ"], answer: 2, why: "Itinerary na-egosi ụbọchị ọ bụla nke njem." },
          { objective: "O1", q: "Kedu arịrịọ ga-enweta atụmatụ njem kacha mma?", options: ["\"Hazie njem ụbọchị 3 dị jụụ na Savannah n'Eprel maka mmadụ abụọ dị afọ 70 na ihe, ndị ubi okooko osisi masịrị, chọkwara izu ike n'ehihie.\"", "\"njem\"", "\"ime njem\"", "\"gaa ebe\""], answer: 0, why: "Ọ na-ekwu ebe, oge, ndị na-aga, ihe masịrị ha na otu ha si aga." },
          { objective: "O2", q: "AI kwuru na museum na-emeghe n'elekere 9 nke ụtụtụ. Kedu otu ị ga-esi lelee ya?", options: ["Kọọ nkọ", "Kwere AI", "Jụọ onye ị na-amaghị", "Na weebụsaịtị museum ahụ n'onwe ya"], answer: 3, why: "Weebụsaịtị nke ebe ahụ n'onwe ya nwere oge nke ugbu a." },
          { objective: "O2", q: "Kemgbe Mee 2025, iji fee ụgbọelu n'ime US, ị chọrọ:", options: ["Naanị kaadị ọba akwụkwọ", "ID dabara REAL ID ma ọ bụ ID ọzọ a nabatara dị ka paspọọtụ", "Ọ dịghị ID ọ bụla", "Kaadị ụlọ akụ"], answer: 1, why: "TSA chọrọ REAL ID ma ọ bụ ID ọzọ a nabatara." },
          { objective: "O3", q: "Ebee ka ọgwụ kwesịrị ịnọ mgbe ị na-eme njem?", options: ["Naanị n'igbe uwe a na-enye ka a buo (checked)", "N'akpa i ji n'aka", "Hapụ ya n'ụlọ", "N'akpa onye ị na-amaghị"], answer: 1, why: "Idebe ha n'aka gị na-egbochi ha ifu." }
        ]
      }
    },
    {
      name: "Isi 2: N'okporo ụzọ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Iji map na ntụziaka n'ekwentị gị",
          minutes: 5,
          goal: "Nweta ntụziaka maka ije ụkwụ ma ọ bụ ịnya ụgbọala site na ngwa map.",
          text: [
            "Ngwa map dị ka Google Maps na Apple Maps na-egosi ebe ị nọ na otu ị ga-esi ruo ebe ị na-aga, site n'ụgbọala, n'ụkwụ ma ọ bụ site n'ụgbọ ọha (transit).",
            "Meghee ngwa map ma dee ebe ahụ n'igbe ọchụchọ, ma ọ bụ gwa ngwa enyemaka olu gị: \"Hey Siri, walking directions to Forsyth Park.\" Pịa Directions, họrọ ije ụkwụ, ịnya ụgbọala ma ọ bụ transit, wee pịa Start. Ngwa ahụ na-ekwu ebe ọ bụla ị ga-atụgharị.",
            "Tupu njem, chekwaa họtel gị dị ka ebe ọ masịrị gị (favorite), ka ịlaghachi bụrụ naanị otu mpịa. Ntụziaka na-eri batrị ekwentị gị, ya mere buru chaja ma ọ bụ obere batrị nchekwa (battery pack)."
          ],
          steps: ["Meghee ngwa map gị.", "Dee ma ọ bụ kwuo ebe ị chọrọ ịga.", "Pịa Directions ma họrọ ije ụkwụ, ịnya ụgbọala ma ọ bụ transit.", "Pịa Start ma soro ntụziaka ọ na-ekwu n'olu.", "Chekwaa họtel gị dị ka favorite."],
          words: [["GPS", "usoro na-eme ka ekwentị gị mara ebe ị nọ na map."], ["Transit", "ụgbọ ọha dị ka ụgbọ ala (bus) na ụgbọ okporo ígwè."]],
          slides: [
            { title: "Ekwentị gị maara ụzọ", bullets: ["Google Maps ma ọ bụ Apple Maps", "Ụgbọala, ije ụkwụ ma ọ bụ transit"] },
            { title: "Nweta ntụziaka", bullets: ["Dee ma ọ bụ kwuo ebe ahụ", "Pịa Directions, họrọ otu ị ga-esi aga", "Pịa Start ka ọ kwuo ntụziaka n'olu"] },
            { title: "Ndụmọdụ njem", bullets: ["Chekwaa họtel gị dị ka favorite", "Buru chaja ma ọ bụ battery pack"] }
          ],
          tryIt: "Jiri ngwa map gị nweta ntụziaka ije ụkwụ site n'ụlọ gị ruo ụlọ ahịa ma ọ bụ ogige dị nso. Pịa Start ma gee ntụziaka mbụ ntị.",
          youCanNow: "inweta na iso ntụziaka site na ngwa map.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka Transit pụtara na ngwa map?", options: ["Naanị ije ụkwụ", "Ụzọ ịnya ụgbọala", "Ụgbọ ala (bus) na ụgbọ okporo ígwè", "Ọnụahịa tagzi"], answer: 2, why: "Transit pụtara ụgbọ ọha, dị ka bus na ụgbọ okporo ígwè." },
            { objective: "O4", q: "Ị na-eje ije, ịchọkwara ụzọ dị mfe isi laghachi na họtel gị. Gịnị ka i kwesịrị ime tupu njem ahụ?", options: ["Chekwaa họtel ahụ dị ka favorite na ngwa map", "Dee aha họtel ahụ n'aka gị", "Gbanyụọ ekwentị gị", "Hichapụ ngwa map"], answer: 0, why: "Ichekwa họtel dị ka favorite na-eme ka ịlaghachi bụrụ otu mpịa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ikwu okwu na ịgụ ihe n'asụsụ ọzọ",
          minutes: 5,
          goal: "Jiri ngwa ntụgharị asụsụ gụọ akara ma ọ bụ kparịta obere ụka.",
          text: [
            "Ị na-aga mba ọzọ, ma ọ bụ ị na-ezute onye ọhụrụ n'ezinụlọ di na nwunye na-asụ asụsụ ọzọ? Ngwa ntụgharị asụsụ dị ka Google Translate na ngwa Translate dị na iPhone nwere ike inyere aka.",
            "Dee ma ọ bụ kwuo ahịrịokwu, ọ ga-egosi ma kwuo ntụgharị ya. Conversation mode na-ekwe ka mmadụ abụọ kwuo okwu otu n'otu. Camera mode na-ekwe ka i duzie ekwentị gị n'akara ma ọ bụ menu wee hụ ya n'asụsụ gị.",
            "Ntụgharị ndị a dị mma mana ha ezughị oke. Maka ihe dị mkpa, dị ka mkpa ahụike ma ọ bụ allergy, buru kaadị e dere n'asụsụ obodo ahụ tupu oge ahụ, ma gosi onye ọrụ họtel ma ọ bụ ụlọ ọgwụ (pharmacy) ka o lelee ya. Ọtụtụ ngwa na-ekwe ka i budata asụsụ tupu ị gaa, ka ọ rụọ ọrụ n'enweghị ịntanetị."
          ],
          steps: ["Meghee ngwa ntụgharị asụsụ ma họrọ asụsụ abụọ ahụ.", "Dee ma ọ bụ kwuo ahịrịokwu gị.", "Jiri conversation mode kwuo okwu otu n'otu.", "Jiri camera mode maka akara na menu.", "Budata asụsụ ahụ tupu i mee njem."],
          words: [["Ịtụgharị asụsụ (translate)", "ịgbanwe okwu site n'otu asụsụ gaa n'asụsụ ọzọ."], ["Offline", "ịrụ ọrụ n'enweghị ịntanetị."]],
          slides: [
            { title: "Onye ntụgharị asụsụ n'akpa gị", bullets: ["Google Translate ma ọ bụ ngwa Translate", "Dee, kwuo, ma ọ bụ jiri igwefoto"] },
            { title: "Ụzọ atọ isi jiri ya", bullets: ["Kwuo ahịrịokwu", "Conversation mode: kwuo okwu otu n'otu", "Camera mode: akara na menu"] },
            { title: "Kwadebe onwe gị", bullets: ["Ọ zughị oke maka ihe gbasara ahụike", "Buru kaadị allergy ma ọ bụ ahụike e dere ede", "Budata asụsụ ahụ tupu ị gaa"] }
          ],
          tryIt: "Meghee ngwa ntụgharị asụsụ. Tụgharịa \"Biko, ebee ka ụlọ mposi dị?\" n'asụsụ ị nwere ike ịchọ, ma gee ya ntị ka a na-ekwu ya n'olu.",
          youCanNow: "iji ngwa ntụgharị asụsụ kwuo okwu, gụọ akara na menu, ma kwadebe maka mkpa dị mkpa.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka camera mode dị na ngwa ntụgharị asụsụ na-eme?", options: ["Ọ na-ese foto njem", "Ọ na-egosi akara ma ọ bụ menu n'asụsụ gị mgbe i duziri ekwentị na ya", "Ọ na-edekọ oku vidiyo", "Ọ na-achọta họtel gị"], answer: 1, why: "Camera mode na-atụgharị ihe igwefoto ekwentị hụrụ, dị ka akara na menu." },
            { objective: "O5", q: "Ị ga-anọ ebe na-enweghị ịntanetị. Gịnị ka ị ga-eme tupu ị gaa?", options: ["Ọ dịghị ihe; ngwa ahụ na-arụ ọrụ mgbe niile", "Zụta naanị akwụkwọ ọkọwa okwu (dictionary)", "Budata asụsụ ahụ na ngwa ahụ", "Hichapụ ngwa ahụ"], answer: 2, why: "Ọtụtụ ngwa na-ekwe ka i budata asụsụ ka ha rụọ ọrụ offline." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịnọ n'udo na ijikọ ezinụlọ mgbe ị na-eme njem",
          minutes: 5,
          goal: "Kesaa atụmatụ gị na ebe ị nọ na ezinụlọ gị, ma zere aghụghọ njem.",
          text: [
            "Mee ka ezinụlọ gị mara ebe ị nọ. Kesaa itinerary gị na otu onye ezinụlọ gị, ma tụlee ikesa ebe ị nọ site n'ekwentị gị n'oge njem ahụ (na iPhone, ngwa Find My; na Android, ikesa ebe ị nọ na Google Maps). Ị nwere ike ịkwụsị ikesa ya mgbe ọ bụla.",
            "Kpachara anya maka aghụghọ njem: weebụsaịtị adịgboroja maka itụ ọnọdụ (booking), oku na-ekwu na i \"meriri\" njem, na ozi gbasara nsogbu ụgbọelu gị nke na-arịọ ka ị kpọọ nọmba ị na-amaghị ma ọ bụ kwụọ ụgwọ. Tụọ ọnọdụ site na weebụsaịtị nke ụlọ ọrụ ụgbọelu, họtel ma ọ bụ ụgbọ okporo ígwè n'onwe ha, ma ọ bụ onye ọrụ njem a tụkwasịrị obi, ma lelee ozi ọ bụla site n'ịkpọ nọmba dị na weebụsaịtị ezi ụlọ ọrụ ha.",
            "Debe otu nnomi ID gị na ndepụta ọgwụ gị n'ebe nchekwa dị iche na nke mbụ ha, ma ezila itinye ozi ụlọ akụ na Wi-Fi ọha na họtel ma ọ bụ ọdụ ụgbọelu."
          ],
          steps: ["Kesaa itinerary gị na otu onye ezinụlọ gị.", "Gbanye ikesa ebe ị nọ maka njem ahụ ma ọ bụrụ na ị chọrọ.", "Tụọ ọnọdụ naanị site na weebụsaịtị ezi ụlọ ọrụ ma ọ bụ ndị ọrụ njem a tụkwasịrị obi.", "Lelee ozi njem site na nọmba ezi ụlọ ọrụ ahụ.", "Ezila ime ihe ụlọ akụ na Wi-Fi ọha."],
          words: [["Ikesa ebe ị nọ (location sharing)", "ikwe ka ndị i họọrọ hụ ebe ekwentị gị dị na map."], ["Wi-Fi ọha", "ịntanetị n'efu n'enweghị waya n'ebe dị ka họtel na ọdụ ụgbọelu, nke ndị ọzọ nwere ike iso jiri."]],
          slides: [
            { title: "Mee ka ezinụlọ mara ihe na-eme", bullets: ["Kesaa itinerary gị", "Kesaa ebe ị nọ maka njem ahụ", "Kwụsị ikesa ya mgbe ọ bụla"] },
            { title: "Aghụghọ njem", bullets: ["Weebụsaịtị booking adịgboroja", "\"I meriri njem!\"", "Ozi nsogbu ụgbọelu nwere nọmba ị na-amaghị"] },
            { title: "Nọrọ n'udo", bullets: ["Tụọ ọnọdụ na weebụsaịtị ezi ụlọ ọrụ", "Kpọọ nọmba dị na weebụsaịtị ezi ụlọ ọrụ", "Ọ dịghị ọrụ ụlọ akụ na Wi-Fi ọha"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mechaa atụmatụ njem ụbọchị atọ gị nke na-aga nwayọọ ma nwee oge izu ike, ndepụta ihe ị ga-ebu nke nwere ọgwụ na ID, na eziokwu atọ i lelere na weebụsaịtị ezi ụlọ ọrụ. Kesaa atụmatụ ahụ na otu onye ezinụlọ gị.",
          youCanNow: "iji AI hazie njem, lelee ya, bukọọ ihe maka ya, chọta ụzọ gị, ma nọrọ n'udo ma jikọọ ezinụlọ gị.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka ikesa ebe ị nọ na-eme?", options: ["Ọ na-egosi onye ọ bụla n'ịntanetị ebe ị nọ", "Ọ na-ekwe ka ndị ezinụlọ i họọrọ hụ ebe ekwentị gị dị", "Ọ na-atụ ọnọdụ họtel gị", "Ọ na-agbanye GPS maka ndị ị na-amaghị"], answer: 1, why: "Ikesa ebe ị nọ na-egosi ebe ekwentị gị dị naanị ndị i họọrọ, ị nwekwara ike ịkwụsị ya mgbe ọ bụla." },
            { objective: "O6", q: "Weebụsaịtị na-enye họtel gị na ọkara ọnụahịa ma ọ bụrụ na i ji wire transfer kwụọ ụgwọ taa. Gịnị ka ị ga-eme?", options: ["Kwụọ ngwa ngwa tupu ọ gwụ", "Zipu ozi ụlọ akụ gị", "Jụọ weebụsaịtị ahụ ma ọ bụ ezie", "Tụọ ọnọdụ site na weebụsaịtị họtel ahụ n'onwe ya ma ọ bụ onye ọrụ njem a tụkwasịrị obi"], answer: 3, why: "Weebụsaịtị booking adịgboroja dị ọtụtụ; tụọ ọnọdụ naanị site na weebụsaịtị ezi ụlọ ọrụ ma ọ bụ ndị ọrụ njem a tụkwasịrị obi." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: N'okporo ụzọ",
        questions: [
          { objective: "O4", q: "Na ngwa map, mgbe i họọrọ ebe ị na-aga, ị ga-apịa:", options: ["Kesaa okwuntughe", "Hichapụ", "Igwefoto", "Directions, wee Start"], answer: 3, why: "Directions na Start na-amalite ntụziaka a na-ekwu n'olu." },
          { objective: "O4", q: "Gịnị mere ị ga-eji chekwaa họtel gị dị ka favorite?", options: ["Ịlaghachi bụ otu mpịa", "Ọ na-eme ka ọnụ ụlọ dị ọnụ ala", "Ọ na-akagbu booking ahụ", "Ọ na-ezipu okwuntughe gị"], answer: 0, why: "Favorite na-eme ka ọ dị ngwa ịchọta ụzọ ịlaghachi." },
          { objective: "O5", q: "Camera mode na ngwa ntụgharị asụsụ na-ekwe ka ị:", options: ["Kpọọ ụlọ", "See onwe gị foto", "Duzie ya n'akara ma ọ bụ menu ka ị gụọ ya n'asụsụ gị", "Kwụọ ụgwọ nri"], answer: 2, why: "Ọ na-atụgharị ihe e dere ede nke igwefoto hụrụ." },
          { objective: "O5", q: "Maka allergy nri siri ike na mba ọzọ, atụmatụ kacha mma bụ:", options: ["Kọọ nkọ", "Dabere naanị na ngwa ahụ n'oge ahụ", "Ekwula ihe ọ bụla", "Buru kaadị e dere n'asụsụ obodo ahụ ma gosi ndị ọrụ ka ha lelee ya"], answer: 3, why: "Ngwa ntụgharị asụsụ ezughị oke maka mkpa ahụike." },
          { objective: "O6", q: "Ozi ederede kwuru na ụgbọelu gị nwere nsogbu, ka ị kpọọ nọmba dị n'ozi ahụ. Ị ga-:", options: ["Kwụọ ụgwọ ozugbo", "Kpọọ nọmba dị n'ozi ahụ", "Kpọọ nọmba dị na weebụsaịtị ụlọ ọrụ ụgbọelu ahụ kama", "Zipu nọmba kaadị gị"], answer: 2, why: "Nọmba ezi ụlọ ọrụ enweghị nsogbu; nọmba dị n'ozi nwere ike ịbụ aghụghọ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI dị ka Enyi Njem",
    questions: [
      { objective: "O1", q: "Ngwa enyemaka AI nwere ike inyere njem aka site na:", options: ["Ịzụta tiketi n'enweghị gị", "Ide atụmatụ ụbọchị n'ụbọchị", "Ikwe nkwa ọnụahịa", "Ibukọ akpa gị"], answer: 1, why: "Ọ na-ede atụmatụ nke ị ga-ahazi ma lelee." },
      { objective: "O1", q: "Ịgwa AI otu i si aga na mkpa gị na-enyere ya aka:", options: ["Ime atụmatụ dabara gị", "Ịnara gị obere ego", "Ịtụ ọnọdụ họtel", "Ịkpọ ezinụlọ gị"], answer: 0, why: "Nkọwa zuru ezu na-eme ka atụmatụ ahụ dabara ndụ gị." },
      { objective: "O1", q: "\"Accessible\" pụtara:", options: ["Dị mfe iji maka ndị na-anaghị eje ije nke ọma, ma ọ bụ ndị na-anụghị ma ọ bụ na-ahụghị ụzọ nke ọma", "Dị oke ọnụ", "Dị anya", "E mechiri emechi"], answer: 0, why: "Ebe accessible dị mfe maka mmadụ niile iji." },
      { objective: "O2", q: "Atụmatụ njem AI nwere ike inwe:", options: ["Naanị eziokwu zuru oke", "Oge mmeghe ochie ma ọ bụ ebe e mechiri emechi", "Paspọọtụ gị", "Ezi tiketi"], answer: 1, why: "AI nwere ike ime mperi ma ọ bụ nwee ozi ochie." },
      { objective: "O2", q: "Ezigbo ajụjụ ị ga-ajụ AI banyere atụmatụ gị bụ:", options: ["\"Tụọ ọnọdụ ihe niile ugbu a.\"", "\"Gịnị bụ okwuntughe m?\"", "\"Gịnị n'atụmatụ a ka m kwesịrị ilelegharị?\"", "\"Kwụọ ụgwọ maka m.\""], answer: 2, why: "Ọ na-egosi eziokwu ndị ị ga-elele." },
      { objective: "O2", q: "Ebee ka ị ga-elele iwu ID maka ife ụgbọelu n'ime US?", options: ["Ozi ederede aghụghọ njem", "Mgbasa ozi na-apụta na mberede", "Ihe e tinyere na soshal midia", "tsa.gov"], answer: 3, why: "TSA na-ahazi iwu ID n'ọdụ ụgbọelu." },
      { objective: "O2", q: "Kaadị REAL ID na-enwekarị:", options: ["Naanị barcode", "Ọ dịghị foto", "Kpakpando n'akụkụ", "Okwuntughe gị"], answer: 2, why: "Kpakpando ahụ na-egosi kaadị dabara REAL ID." },
      { objective: "O2", q: "E wezụga REAL ID, ID a nabatara maka ụgbọelu US bụ:", options: ["Paspọọtụ", "Kaadị ọba akwụkwọ", "Akwụkwọ nnata ụlọ ahịa", "Kaadị azụmahịa"], answer: 0, why: "TSA na-anabata paspọọtụ." },
      { objective: "O3", q: "Ndepụta ihe ị ga-ebu e kewara n'otu n'otu nwere ike inwe akụkụ maka:", options: ["Ọ dịghị ihe", "Naanị akpụkpọ ụkwụ", "Naanị nri nta", "Akwụkwọ, ọgwụ, uwe na ngwa eletrọnịkị"], answer: 3, why: "Ikewa ya na-eme ka ọ dị mfe ilele." },
      { objective: "O3", q: "E kwesịrị ibu ọgwụ:", options: ["N'enweghị ihe e ji chekwaa ha n'akpa a na-enye ka a buo (checked)", "N'akpa i ji n'aka, n'ime ihe mbụ e ji chekwaa ha", "N'ụlọ", "N'akpa enyi gị"], answer: 1, why: "Debe ha n'aka gị, ka aha ha dokwa anya." },
      { objective: "O3", q: "Onye nwere ike inye gị ndụmọdụ banyere iji ọgwụ eme njem?", options: ["Weebụsaịtị ọ bụla", "Onye na-ere ọgwụ (pharmacist) gị", "Mgbasa ozi na-apụta na mberede", "Onye ị na-amaghị"], answer: 1, why: "Ndị pharmacist maara ọgwụ." },
      { objective: "O4", q: "GPS na-eme ka ekwentị gị:", options: ["See foto", "Tụgharịa asụsụ", "Kwụọ ụgwọ", "Mara ebe ị nọ na map"], answer: 3, why: "GPS na-achọta ebe ị nọ." },
      { objective: "O4", q: "\"Transit\" na ngwa map pụtara:", options: ["Ụgbọ ala (bus) na ụgbọ okporo ígwè", "Naanị ije ụkwụ", "Ife ụgbọelu", "Naanị ịnya ụgbọala"], answer: 0, why: "Transit bụ ụgbọ ọha." },
      { objective: "O4", q: "Ntụziaka na-eri batrị, ya mere buru:", options: ["ID nke abụọ", "Okwuntughe ndị ọzọ", "Chaja ma ọ bụ battery pack", "Igwefoto"], answer: 2, why: "Ịchọ ụzọ na-eri batrị." },
      { objective: "O5", q: "Conversation mode na ngwa ntụgharị asụsụ:", options: ["Na-agbanyụ olu", "Na-akpọ ụlọ", "Na-atụ ọnọdụ họtel", "Na-ekwe ka mmadụ abụọ kwuo okwu otu n'otu"], answer: 3, why: "Ọ na-atụgharị okwu n'akụkụ abụọ." },
      { objective: "O5", q: "Ibudata asụsụ tupu ị gaa na-eme ka ngwa ahụ rụọ ọrụ:", options: ["Ngwa ngwa karị naanị na Wi-Fi", "Naanị n'ụlọ", "Offline, n'enweghị ịntanetị", "Ọ dịghị mgbe ọ bụla"], answer: 2, why: "Asụsụ e budatara na-arụ ọrụ offline." },
      { objective: "O6", q: "Ikesa ebe ị nọ na-ekwe ka:", options: ["Ndị ị na-amaghị soro gị", "Ndị ezinụlọ i họọrọ hụ ebe ekwentị gị dị", "Họtel nara gị ego karịa", "Ụlọ ọrụ ụgbọelu kagbuo ụgbọelu"], answer: 1, why: "Naanị ndị i họọrọ nwere ike ịhụ ya." },
      { objective: "O6", q: "Oku kwuru na i meriri njem n'efu mana ị ga-akwụ ụgwọ. Nke a bụ:", options: ["Ọ ga-abụ aghụghọ", "Ezi onyinye", "Iwu ụtụ isi", "Ihe nkịtị"], answer: 0, why: "Onyinye na-arịọ ka ị kwụọ ụgwọ bụ aghụghọ." },
      { objective: "O6", q: "Ụzọ kacha enweghị nsogbu isi tụọ ọnọdụ njem bụ:", options: ["Site na weebụsaịtị ezi ụlọ ọrụ ma ọ bụ ndị ọrụ njem a tụkwasịrị obi", "Site na njikọ n'ozi ederede ị na-atụghị anya ya", "Site na mgbasa ozi na-apụta na mberede", "Site n'iziga gift card"], answer: 0, why: "Weebụsaịtị ezi ụlọ ọrụ na-egbochi aghụghọ booking adịgboroja." },
      { objective: "O6", q: "Na Wi-Fi ọha n'ọdụ ụgbọelu, zere:", options: ["Ịgụ akụkọ", "Itinye ozi ụlọ akụ", "Ilele ihu igwe", "Ilele map"], answer: 1, why: "Ndị ọzọ nwere ike iso jiri Wi-Fi ọha." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [0, 3, 5, 8, 9, 11, 14, 17]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Atụmatụ dị jụụ", objective: "O1", notYet: "Ọ dịghị atụmatụ ụbọchị n'ụbọchị, ma ọ bụ ihe omume karịrị akarị n'enweghị izu ike.", meets: "Atụmatụ ụbọchị atọ, ụbọchị n'ụbọchị, na-aga nwayọọ ma nwee oge izu ike.", exceeds: "Atụmatụ ahụ na-egosikwa ebe a ga-anọdụ ala ma ọ bụ ebe dị mfe iru mgbe ọ dị mkpa." },
      { name: "Ndepụta ihe ị ga-ebu", objective: "O3", notYet: "Ọ dịghị ndepụta, ma ọ bụ ọgwụ ma ọ bụ ID adịghị n'ime ya.", meets: "Ndepụta ihe ị ga-ebu e kewara n'otu n'otu nke gụnyere ọgwụ na ID.", exceeds: "Ọ na-egosi na ọgwụ na ID na-aga n'akpa i ji n'aka, ya na ndepụta ọgwụ na nọmba dọkịta." },
      { name: "E lelere eziokwu", objective: "O2", notYet: "E lelere ihe na-erughị eziokwu atọ, ma ọ bụ e lelere ha naanị na AI.", meets: "E lelere eziokwu atọ na weebụsaịtị ezi ụlọ ọrụ, dị ka tsa.gov na weebụsaịtị nke ebe ahụ n'onwe ya.", exceeds: "Nwere ike ikwu weebụsaịtị eziokwu ọ bụla si, ma dozie ihe ọ bụla na-ezighi ezi." },
      { name: "E kesara ya na ezinụlọ", objective: "O6", notYet: "E kesaghị atụmatụ ahụ.", meets: "E kesara atụmatụ ahụ na otu onye ezinụlọ.", exceeds: "Ha kwekọrịtakwara n'ikesa ebe ị nọ maka njem ahụ ma ọ bụ oge a ga-akpọtụrụ onwe ha." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe mere njem ma ọ bụ pụọ otu ụbọchị site n'iji atụmatụ AI ha n'ime ụbọchị 60 (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha lelere eziokwu njem na weebụsaịtị ezi ụlọ ọrụ ma ọ bụ zere aghụghọ njem",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Seniors and Technology ọzọ n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone nwere ịntanetị, ngwa map (Google Maps ma ọ bụ Apple Maps) na ngwa ntụgharị asụsụ",
      "Ngwa enyemaka AI n'efu (ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini)",
      "Akwụkwọ na mkpịsị ode, ma ọ bụ ndetu n'ekwentị, maka atụmatụ na ndepụta ihe ị ga-ebu",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke dị jụụ: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Ka onye ọ bụla na-amụ ihe hazie ezi njem ma ọ bụ otu ụbọchị ọpụpụ ga-amasị ya; ọ na-eme ka omume ahụ baa uru.",
      "Gosi n'ihuenyo buru ibu otu esi elele eziokwu na tsa.gov na na weebụsaịtị nke ebe n'onwe ya.",
      "Mee omume ntụziaka site n'obere ije n'akụkụ ebe nnọkọ ahụ ka ndị na-amụ ihe nụ ntụziaka a na-ekwu n'olu.",
      "Chetara ndị na-amụ ihe na ajụjụ gbasara ọgwụ na-aga n'aka pharmacist ha, na ka ha zere ime ihe ụlọ akụ na Wi-Fi ọha.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

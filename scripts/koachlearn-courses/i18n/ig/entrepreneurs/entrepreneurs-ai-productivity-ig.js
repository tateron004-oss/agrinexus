"use strict";

// Koach Learn course (Igbo translation of entrepreneurs/entrepreneurs-ai-productivity.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "entrepreneurs-ai-productivity-ig",
  lang: "ig",
  translationOf: "entrepreneurs-ai-productivity",
  category: "Entrepreneurs",
  name: "AI Maka Ịrụ Ọrụ Azụmahịa Ngwa Ngwa",
  skills: "Iji AI hazie izu, Ịza email ngwa ngwa, Ide template ị ga-eji ọzọ, Ide usoro ọrụ (SOP), Ịtụ oge ị chekwara",
  outcome: "iji AI hazie izu azụmahịa gị, ịza email ngwa ngwa site na template ozi ị ga-eji ọzọ, ịgbanwe otu ọrụ ị na-eme ugboro ugboro ka ọ bụrụ usoro e dere ede nzọụkwụ na nzọụkwụ, na ịtụ oge ole i chekwara.",
  about: [
    "Ọtụtụ ndị nwe azụmahịa anaghị enwe nsogbu echiche; ọ bụ oge na-agwụ ha. Ihe ọmụmụ a bụ maka ndị nwe azụmahịa na-eme ihe niile n'onwe ha, ma chọọ ka oge ha lọghachite.",
    "Ị ga-eji ngwa enyemaka AI n'efu hazie izu gị dịka ihe kacha mkpa si dị, hazie ma zaa email ngwa ngwa, mee template maka ozi ị na-ede ugboro ugboro, ma dee usoro dị mfe ka onye enyemaka (ma ọ bụ gị n'onwe gị n'ọdịnihu) nwee ike ime otu ọrụ ahụ otu ụzọ ahụ oge niile. Mgbe ahụ, ị ga-atụ oge i chekwara.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, nwee ọrụ ị ga-eme n'ezi azụmahịa gị. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee \"ngwugwu nlọghachi oge\" maka azụmahịa gị: otu izu AI hazịrị nwere ihe atọ kacha mkpa nye gị, template ozi atọ ị ga-eji ọzọ, otu usoro e dere ede maka ọrụ ị na-eme ugboro ugboro, na ndekọ oge dị mfe nke tupu na mgbe e mesịrị, na-egosi nkeji i chekwara n'otu ọrụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nwe obere azụmahịa na-eme ọtụtụ ọrụ n'onwe ha ma enweghị oge zuru ezu, dị ka ndị na-enye ọrụ naanị ha, ndị nwe ụlọ ahịa na ndị na-arụ obere ọrụ n'akụkụ (side hustle).",
    startingPoint: "Ha na-edebe ndepụta ihe ha ga-eme, na-aza email ma na-eme otu ọrụ ndị ahụ kwa izu, ọkachasị site n'ncheta. Ụfọdụ ejirila ngwa enyemaka AI dee ihe, mana ọ bụghị iji ya hazie ọrụ, mee template ma ọ bụ dee otu ha si arụ ọrụ.",
    gap: "Ndị nwe azụmahịa na-atụfu ọtụtụ awa n'izu ndị na-ahaziteghị ahazi, email na-aga nwayọọ na ozi ha na-ede ugboro ugboro, ma ọrụ ọ bụla na-adabere n'ịcheta otu e si eme ya. Ha kwesịrị ịhazi dịka ihe kacha mkpa si dị, jiri template ọzọ, dee usoro ọrụ ma tụọ ma AI na-echekwa oge n'ezie, ka awa ha chekwara gaa n'ime ka azụmahịa too.",
    constraints: [
      "Okwu dị mfe; ọ dịghị mkpa ịma teknụzụ",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa nwere email, kalenda na ngwa enyemaka AI n'efu",
      "Oge: ihe dị ka nkeji ise kwa nkuzi, gbakwunye ọrụ a na-eme n'ezi izu ọrụ",
      "Etinyela adreesị ndị ahịa, nọmba kaadị ma ọ bụ ihe nzuzo dị n'akwụkwọ nkwekọrịta n'ime AI",
      "Ajụjụ gbasara iwu, akwụkwọ ikike (license) na ego na-aga n'ụlọ ọrụ gọọmentị ma ọ bụ n'aka ọkachamara"
    ],
    prerequisites: "\"Mmalite AI maka Ndị Na-azụ Ahịa\", ma ọ bụ ahụmahụ n'ịrịọ ngwa enyemaka AI enyemaka."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ndepụta ọrụ izu na-abịa nke na-ahaziteghị ahazi", action: "iji AI kewaa ha n'otu n'otu ma mee atụmatụ izu nwere oge e kenyere ọrụ ọ bụla, na ihe atọ kacha mkpa nke gị", standard: "ma tinye atụmatụ ahụ na kalenda gị" },
    { id: "O2", condition: "Mgbe e nyere gị email ndị bịara taa", action: "ikewa email n'otu n'otu ma zipu azịza AI dere nke i buru ụzọ lelee", standard: "n'etinyeghị ozi nzuzo onye ahịa ọ bụla n'ime AI" },
    { id: "O3", condition: "Mgbe e nyere gị ajụjụ atọ ndị ahịa na-ajụkarị", action: "ime template ozi ị ga-eji ọzọ maka nke ọ bụla, nwere oghere ị ga-ejupụta", standard: "ma lelee ezi eziokwu gị, chekwaa template ndị ahụ ebe ị ga-enweta ha ngwa ngwa" },
    { id: "O4", condition: "Mgbe e nyere gị ọrụ ị na-eme kwa izu", action: "ide usoro ọrụ nwere nọmba, nzọụkwụ na nzọụkwụ, nwere ndepụta nlele (checklist)", standard: "nke e nwalere otu ugboro site n'ịgbaso ya okwu n'okwu ma dozie ya" },
    { id: "O5", condition: "Mgbe e nyere gị akwụkwọ azụmahịa dị ogologo nke e wepụrụ ozi nzuzo ya", action: "inweta nchịkọta AI nke ụbọchị, ụgwọ na ọrụ ị ga-arụ ma tụnyere ya na akwụkwọ mbụ ahụ", standard: "ma gụọ akụkụ ego na iwu n'onwe gị" },
    { id: "O6", condition: "Maka otu ọrụ ị na-eme kwa izu", action: "idekọ oge gị tupu na mgbe i jiri AI ma gbakọọ nkeji i chekwara kwa izu", standard: "ma gụnye oge i ji lelee ma dozie ọrụ AI" }
  ],
  chapters: [
    {
      name: "Isi 1: Hazie ma kparịta ụka ngwa ngwa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịhazi izu gị dịka ihe kacha mkpa si dị",
          minutes: 5,
          goal: "Jiri AI gbanwee ndepụta ihe ị ga-eme na-ahaziteghị ahazi ka ọ bụrụ atụmatụ izu nwere ihe atọ kacha mkpa.",
          text: [
            "Ndepụta ogologo na-ezo ihe dị mkpa. AI maara ịhazi ihe nke ọma. Tinye ndepụta gị (n'enweghị ozi nzuzo ndị ahịa) ma rịọ ya ka o kewaa ọrụ ndị ahụ n'otu n'otu, ma kwuo ọrụ atọ ga-enyere azụmahịa gị aka karịa n'izu a.",
            "Ụzọ dị mfe isi kpebie: ọrụ na-ebubata ego ma ọ bụ na-eme ka obi dị ndị ahịa mma na-abụkarị ndị mbụ; ọrụ nwere ike ichere ma ọ bụ nke onye ọzọ nwere ike ime na-abịa n'azụ. Gị na-ekpebi usoro ikpeazụ, n'ihi na ị maara azụmahịa gị.",
            "Mgbe ahụ, rịọ maka atụmatụ nwere oge e kenyere: \"Tinye ọrụ ndị a n'izu m. Ana m arụ ọrụ site n'elekere 8 nke ụtụtụ ruo elekere 4 nke ehihie, Mọnde ruo Fraịde, ana m ebuga ngwaahịa n'ụtụtụ Tuzde na Tọzde.\" Tinye atụmatụ ahụ na kalenda gị."
          ],
          steps: ["Dee ọrụ niile dị gị n'isi dịka ndepụta.", "Rịọ AI ka o kewaa ọrụ ndị ahụ ma kwuo atọ kacha mkpa maka izu ahụ.", "Họrọ atọ kacha mkpa nke gị.", "Rịọ AI ka o kenye ọrụ ndị ahụ oge gburugburu awa ọrụ gị a kara aka.", "Detuo oge ndị ahụ na kalenda gị."],
          words: [["Ihe kacha mkpa (priority)", "ọrụ dị mkpa karịa ugbu a."], ["Oge e kenyere (time block)", "oge a kara aka na kalenda gị maka otu ụdị ọrụ."]],
          slides: [
            { title: "Ndepụta ogologo na-ezo ihe dị mkpa", bullets: ["Tinye ndepụta gị n'ime AI (n'enweghị ozi nzuzo)", "Rịọ ya ka o kewaa ọrụ n'otu n'otu", "Rịọ maka atọ kacha mkpa n'izu a"] },
            { title: "Ihe na-abụkarị nke mbụ", bullets: ["Ọrụ na-ebubata ego", "Ọrụ na-eme ka obi dị ndị ahịa mma", "Gị na-ekpebi usoro ikpeazụ"] },
            { title: "Kenye ha oge", bullets: ["Gwa AI awa ọrụ gị na ọrụ a kara aka", "Nweta atụmatụ izu", "Tinye ya na kalenda gị"] }
          ],
          tryIt: "Dee ndepụta ọrụ gị niile maka izu na-abịa, rịọ ngwa enyemaka AI ka o kewaa ha ma kwuo atọ kacha mkpa, họrọ atọ kacha mkpa nke gị, ma nweta atụmatụ nwere oge e kenyere nke ị ga-etinye na kalenda gị.",
          youCanNow: "ịgbanwe ndepụta na-ahaziteghị ahazi ka ọ bụrụ atụmatụ izu nwere ihe kacha mkpa doro anya na oge e kenyere.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ oge e kenyere (time block)?", options: ["Oge a kara aka na kalenda gị maka otu ụdị ọrụ", "Ndepụta ọrụ niile", "Ezumike n'etiti nzukọ", "Ụbọchị ngwụcha onye ahịa nyere"], answer: 0, why: "Oge e kenyere na-echebe oge maka ihe kacha mkpa nye gị." },
            { objective: "O1", q: "AI kwuru ọrụ atọ kacha mkpa nye gị, mana otu bụ obere ọrụ na-abaghị uru. Gịnị ka ị ga-eme?", options: ["Nabata ndepụta AI", "Họrọ atọ kacha mkpa nke gị", "Mee ọrụ niile otu mgbe", "Ahazila izu a"], answer: 1, why: "Gị na-ekpebi ihe kacha mkpa ikpeazụ; AI na-atụ aro naanị." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịza email gị ngwa ngwa",
          minutes: 5,
          goal: "Jiri AI kewaa email ma dee azịza nke ị ga-elele tupu i zipu.",
          text: [
            "Email na-eri ọtụtụ awa. Buru ụzọ kewaa ha: zaa ugbu a (ndị ahịa, ego, ihe ngwa ngwa), zaa emechaa, gụọ naanị, na hichapụ ma ọ bụ kwụsị ịnata (unsubscribe). Ọtụtụ app email nwekwara ike itinye ozi n'onwe ha n'ime folda ma ọ bụ label.",
            "Maka azịza, AI nwere ike ịgbanwe obere ndetu gị ka ọ bụrụ ozi nwere nkwanye ugwu: \"Zaa onye ahịa chọrọ ịkwaga oge ọ debere na Fraịde. Sị ee, nye Satọde n'elekere 10 nke ụtụtụ ma ọ bụ Mọnde n'elekere 2 nke ehihie, mee ka ọ dị mkpụmkpụ ma nwee obiọma.\" Gmail na Outlook nwekwara ike inye aro AI dị n'ime ha, dabere n'atụmatụ (plan) gị.",
            "Etinyela email onye ahịa zuru ezu nwere nọmba ekwentị ya, adreesị ya ma ọ bụ nọmba kaadị ya n'ime ngwa mkparịta ụka. Kama nke ahụ, chịkọta ajụjụ ya n'okwu nke gị. Gụọkwa azịza mgbe niile tupu i zipu ya."
          ],
          steps: ["Kewaa email gị: zaa ugbu a, zaa emechaa, gụọ naanị, hichapụ.", "Maka email ọ bụla ị ga-aza ugbu a, dee ndetu otu ahịrị nke ihe ị chọrọ ikwu.", "Rịọ AI ka ọ gbanwee ndetu ahụ ka ọ bụrụ obere azịza.", "Gụọ ya, dozie ya ma zipu ya n'onwe gị."],
          words: [["Filter", "iwu email na-ebuga ozi n'ime folda ma ọ bụ label n'onwe ya."], ["Unsubscribe", "njikọ na-akwụsị ụlọ ọrụ iziga gị email."]],
          slides: [
            { title: "Buru ụzọ kewaa", bullets: ["Zaa ugbu a: ndị ahịa, ego, ihe ngwa ngwa", "Zaa emechaa", "Gụọ naanị, ma ọ bụ hichapụ ma kwụsị ịnata"] },
            { title: "AI na-agbanwe ndetu ka ọ bụrụ azịza", bullets: ["Dee ihe ị chọrọ ikwu n'otu ahịrị", "Rịọ maka azịza mkpụmkpụ nwere obiọma", "AI dị n'ime Gmail ma ọ bụ Outlook nwere ike inye aka"] },
            { title: "Nọrọ n'udo", bullets: ["Chịkọta ajụjụ onye ahịa n'onwe gị", "Ọ dịghị nọmba ekwentị, adreesị ma ọ bụ nọmba kaadị", "Gụọ ya tupu i zipu"] }
          ],
          tryIt: "Kewaa email gị nke taa n'otu anọ ahụ. Maka email abụọ ị ga-aza ugbu a, dee ndetu otu ahịrị, mee ka AI dee azịza ya, lelee ya ma zipu ya. Tụọ oge ole o were.",
          youCanNow: "ikewa email dịka mkpa ha si dị ma zipu azịza e lelere ngwa ngwa site n'enyemaka AI.",
          quickCheck: [
            { objective: "O2", q: "Kedu email ndị dị n'otu \"zaa ugbu a\"?", options: ["Akwụkwọ akụkọ (newsletter)", "Akwụkwọ ọnụahịa ochie", "Ndị ahịa, ego na ihe ngwa ngwa", "Mgbasa ozi sitere n'azụmahịa ndị ọzọ"], answer: 2, why: "Email ị ga-aza ugbu a na-emetụta ndị ahịa na ego." },
            { objective: "O2", q: "AI dere azịza nye onye ahịa. Gịnị ka ị ga-eme tupu i zipu?", options: ["Zipu ya n'agụghị ya", "Tinye nọmba kaadị onye ahịa ahụ", "Ziga ya AI ọzọ", "Gụọ ya ma dozie ihe ọ bụla ezighi ezi"], answer: 3, why: "Ị na-elele ihe ọ bụla AI dere tupu ọ pụọ n'aha gị." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Template ị ga-eji ọzọ maka ozi ị na-ede ugboro ugboro",
          minutes: 4,
          goal: "Mee template azịza atọ maka ajụjụ ndị ahịa na-ajụkarị.",
          text: [
            "Ọ bụrụ na ị na-aza otu ajụjụ ahụ kwa izu (ọnụahịa, oge mmeghe, otu esi edebe oge, iwu nkwụghachi ego), dee azịza ahụ otu ugboro ma jiri ya ọzọ. AI nwere ike inyere gị aka ide template doro anya, nwee obiọma.",
            "Ezigbo template nwere oghere ị na-ejupụta: \"Ndewo [aha], daalụ maka ịjụ maka [ọrụ]. Ọnụahịa anyị maka [nha] bụ [ọnụahịa]. Ị nwere ike idebe oge na [njikọ ma ọ bụ nọmba].\" Debe ezi eziokwu gị n'ime template ahụ, ma lelee ha mgbe ọ bụla ọnụahịa ma ọ bụ iwu gbanwere.",
            "Chekwaa template ebe ị ga-enweta ha ngwa ngwa: akwụkwọ (document), app ndetu dị n'ekwentị gị, ma ọ bụ ihe \"azịza echekwara\" (saved reply) ọtụtụ app email na app ozi azụmahịa nwere."
          ],
          steps: ["Depụta ajụjụ ise ndị ahịa na-ajụkarị.", "Họrọ atọ kacha.", "Rịọ AI maka template mkpụmkpụ nwere obiọma maka nke ọ bụla, nwere [oghere].", "Tinye ezi eziokwu gị ma lelee ha.", "Chekwaa template ndị ahụ ebe ị ga-enweta ha ngwa ngwa."],
          words: [["Template", "ozi a kwadebere nwere oghere ị na-ejupụta oge ọ bụla."], ["Azịza echekwara (saved reply)", "ihe dị n'email ma ọ bụ app ozi na-echekwa template ka ị jiri ya n'otu pịa."]],
          slides: [
            { title: "Dee ya otu ugboro, jiri ya ọzọ", bullets: ["Ọnụahịa, oge mmeghe, idebe oge, nkwụghachi ego", "AI na-enyere gị aka ide ya nke ọma"] },
            { title: "Ezigbo template", bullets: ["Nwere obiọma ma dị mkpụmkpụ", "[Oghere] maka aha, ọrụ, ọnụahịa", "Ezi eziokwu gị, e lelere ha"] },
            { title: "Debe ha nso", bullets: ["Akwụkwọ ma ọ bụ app ndetu", "Azịza echekwara n'email ma ọ bụ app ozi", "Melite ha mgbe ọnụahịa gbanwere"] }
          ],
          tryIt: "Dee ajụjụ atọ ndị ahịa na-ajụkarị gị ma jiri AI mee template maka nke ọ bụla. Tinye ezi eziokwu gị ma chekwaa ha.",
          youCanNow: "ide na iji template ọzọ maka ajụjụ ndị ahịa ị na-azakarị.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka oghere dị ka [aha] dị n'ime template maka?", options: ["Ihe ị na-ejupụta oge ọ bụla", "Okwu AI na-agaghị agụ", "Mperi ị ga-ehichapụ", "Njikọ zoro ezo"], answer: 0, why: "Oghere na-eme ka i jiri otu template maka ọtụtụ ndị ahịa." },
            { objective: "O3", q: "I gbanwere oge mmeghe gị. Gịnị ka ị ga-eme template gị?", options: ["Ọ dịghị ihe", "Melite ma lelee ọzọ template ọ bụla na-ekwu maka oge mmeghe", "Hichapụ ha niile", "Chere ka onye ahịa mee mkpesa"], answer: 1, why: "Template ga-adaba n'eziokwu gị ugbu a." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Hazie ma kparịta ụka ngwa ngwa",
        questions: [
          { objective: "O1", q: "Kedu ọrụ kwesịrị ịbụkarị n'ime atọ kacha mkpa gị kwa izu?", options: ["Ndị na-atọ ụtọ", "Ndị na-ebubata ego ma ọ bụ na-eme ka obi dị ndị ahịa mma", "Ndị na-ewe sekọnd 30", "Ndị onye ọzọ rịọrọ"], answer: 1, why: "Ọrụ gbasara ego na ndị ahịa na-eme ka azụmahịa gaa n'ihu." },
          { objective: "O1", q: "Gịnị ka ị ga-agwa AI iji nweta atụmatụ bara uru nwere oge e kenyere?", options: ["Ọ dịghị ihe ọ bụla", "Ego dị n'akaụntụ ụlọ akụ gị", "Okwuntughe gị", "Awa ọrụ gị na ọrụ a kara aka"], answer: 3, why: "AI chọrọ awa gị na ọrụ ndị a kara aka iji kenye ọrụ oge." },
          { objective: "O2", q: "Email onye ahịa nwere adreesị ụlọ ya na nọmba kaadị ya. Kedu otu ị ga-esi nweta enyemaka AI iji zaa ya?", options: ["Chịkọta ajụjụ ya n'okwu nke gị", "Tinye email ahụ niile", "Ziga ya ụlọ ọrụ AI ahụ", "Leghara onye ahịa ahụ anya"], answer: 0, why: "Ịchịkọta ya na-eme ka ozi nzuzo ghara ịbanye na ngwa AI." },
          { objective: "O3", q: "Kedu nke bụ ezigbo template?", options: ["\"Lee weebụsaịtị\"", "Ozi ọhụrụ dị iche oge ọ bụla", "\"Ndewo [aha], ọnụahịa anyị maka [ọrụ] bụ [ọnụahịa]. Debe oge na [njikọ].\"", "Ozi nwere nọmba kaadị onye ahịa"], answer: 2, why: "O nwere oghere ị na-ejupụta n'ezi eziokwu." },
          { objective: "O3", q: "Ọnụahịa gị rịgoro. Gịnị ka ị ga-eme template gị?", options: ["Hichapụ ha niile", "Ọ dịghị ihe", "Melite ma lelee ha ọzọ", "Hapụ AI ka o chee ọnụahịa ọhụrụ"], answer: 2, why: "Template ga-adaba n'eziokwu gị ugbu a." }
        ]
      }
    },
    {
      name: "Isi 2: Usoro na-echekwa oge",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ide usoro ọrụ (SOP)",
          minutes: 5,
          goal: "Jiri AI gbanwee otu ọrụ ị na-eme ugboro ugboro ka ọ bụrụ usoro e dere ede nzọụkwụ na nzọụkwụ.",
          text: [
            "Usoro ọrụ (standard operating procedure, SOP) bụ ndepụta nzọụkwụ e dere ede maka ime otu ọrụ otu ụzọ ahụ oge niile. Ọ na-eme ka onye enyemaka mee ọrụ ahụ n'akpọghị gị, ma na-egbochi mperi mgbe ọrụ juru gị aka.",
            "Ụzọ dị mfe isi mee ya: mee ọrụ ahụ otu ugboro ka ị na-ekwu ma ọ bụ na-ede nzọụkwụ ọ bụla dịka ndetu. Mgbe ahụ jụọ AI: \"Gbanwee ndetu ndị a ka ọ bụrụ usoro doro anya nwere nọmba nke onye enyemaka ọhụrụ nwere ike ịgbaso. Tinye obere ndepụta nlele na njedebe.\"",
            "Nwalee SOP ahụ: nye ya mmadụ (ma ọ bụ gbasoo ya n'onwe gị, okwu n'okwu) ma dozie nzọụkwụ ọ bụla na-agbagwoju anya ma ọ bụ nke na-adịghị ya."
          ],
          steps: ["Họrọ ọrụ ị na-eme kwa izu, dị ka imeghe ụlọ ahịa ma ọ bụ ịkwakọ ngwaahịa onye zụrụ.", "Mee ya otu ugboro ka ị na-ede ndetu nzọụkwụ ọ bụla.", "Rịọ AI ka ọ gbanwee ndetu ndị ahụ ka ọ bụrụ usoro nwere nọmba na ndepụta nlele.", "Nwalee ya site n'ịgbaso ya kpọmkwem, ma ọ bụ mee ka onye enyemaka nwaa ya.", "Dozie nzọụkwụ na-edoghị anya ma chekwaa nke ikpeazụ."],
          words: [["SOP", "standard operating procedure (usoro ọrụ): nzọụkwụ e dere ede maka ime otu ọrụ otu ụzọ ahụ oge niile."], ["Ndepụta nlele (checklist)", "obere ndepụta ị na-aka akara iji hụ na ọ dịghị ihe e chefuru."]],
          slides: [
            { title: "Ihe SOP na-eme", bullets: ["Otu ọrụ, otu ụzọ, oge niile", "Onye enyemaka nwere ike ime ya n'akpọghị gị", "Mperi dị ntakịrị mgbe ọrụ juru gị aka"] },
            { title: "Jiri AI mee otu", bullets: ["Mee ọrụ ahụ otu ugboro ma dee ndetu", "Rịọ AI maka nzọụkwụ nwere nọmba na ndepụta nlele"] },
            { title: "Nwalee ya", bullets: ["Gbasoo ya okwu n'okwu", "Ma ọ bụ mee ka onye enyemaka nwaa ya", "Dozie nzọụkwụ na-agbagwoju anya ma ọ bụ nke na-adịghị ya"] }
          ],
          tryIt: "Họrọ otu ọrụ ị na-eme kwa izu, dee ndetu ka ị na-eme ya, ma mee ka AI gbanwee ha ka ọ bụrụ SOP nwere nọmba na ndepụta nlele. Nwalee ya otu ugboro ma dozie ya.",
          youCanNow: "ịgbanwe ọrụ ị na-eme ugboro ugboro ka ọ bụrụ usoro e dere ede, e nwalere.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka usoro ọrụ (SOP) na-eme?", options: ["Na-edekọ ahịa gị", "Na-anọchi kalenda gị", "Na-ede nzọụkwụ nke ọrụ a na-eme ugboro ugboro ka onye ọ bụla mee ya otu ụzọ ahụ", "Na-aza email ndị ahịa"], answer: 2, why: "SOP na-eme ka onye enyemaka mee ọrụ ahụ n'akpọghị gị." },
            { objective: "O4", q: "Onye enyemaka gị na-agbaso SOP ọhụrụ gị ma kwụsị na nzọụkwụ 4. Gịnị ka ị ga-eme?", options: ["Ta onye enyemaka ahụ ụta", "Tụfuo SOP ahụ", "Na-eme ọrụ ahụ n'onwe gị ruo mgbe ebighị ebi", "Dozie nzọụkwụ 4 ka o doo anya ma nwalee ọzọ"], answer: 3, why: "Nnwale na-egosi ebe usoro chọrọ mmezi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Nchịkọta na nchọpụta ngwa ngwa",
          minutes: 4,
          goal: "Jiri AI chịkọta akwụkwọ ogologo ma mee nchọpụta ngwa ngwa nke e lelere.",
          text: [
            "Ndị nwe azụmahịa na-enweta akwụkwọ ogologo: iwu ndị na-ere ha ngwaahịa, iwu enyemaka ego (grant), akwụkwọ mgbazinye ụlọ, akụkọ. AI nwere ike ịchịkọta ha: \"Chịkọta nke a n'isi okwu 8. Depụta ụbọchị, ụgwọ ma ọ bụ ihe ọ bụla m ga-eme.\" Buru ụzọ wepụ ozi nzuzo, ma gụọ akụkụ dị mkpa nke akwụkwọ mbụ ahụ, ọkachasị ihe ọ bụla gbasara ego ma ọ bụ ọrụ iwu.",
            "AI nwekwara ike ime ka nchọpụta gaa ngwa ngwa: ịtụnyere ndị na-ere ngwaahịa, ịkọwa okwu ọhụrụ, ma ọ bụ ịdepụta ajụjụ ị ga-ajụ onye na-elekọta akaụntụ (accountant). Rịọ ya maka isi iyi, wee meghee isi iyi ndị ahụ n'onwe gị.",
            "Maka ajụjụ gbasara iwu, ụtụ isi ma ọ bụ akwụkwọ ikike (license), jiri AI kwadebe ezigbo ajụjụ, wee nweta azịza site na weebụsaịtị ụlọ ọrụ gọọmentị ma ọ bụ n'aka ọkachamara."
          ],
          steps: ["Wepụ ozi nzuzo n'akwụkwọ ahụ.", "Rịọ maka obere nchịkọta, gbakwunye ụbọchị, ụgwọ na ọrụ ị ga-arụ.", "Gụọ akụkụ akwụkwọ mbụ gbasara ego ma ọ bụ ọrụ iwu.", "Maka nchọpụta, rịọ maka isi iyi ma meghee ha n'onwe gị."],
          words: [["Nchịkọta (summary)", "ụdị mkpụmkpụ na-edebe isi ihe."], ["Iwu nkwekọrịta (terms)", "iwu na ọnọdụ dị n'ime nkwekọrịta."]],
          slides: [
            { title: "Chịkọta akwụkwọ ogologo", bullets: ["Buru ụzọ wepụ ozi nzuzo", "Rịọ maka isi okwu, ụbọchị, ụgwọ na ọrụ ị ga-arụ", "Gụọ akụkụ ego na iwu n'onwe gị"] },
            { title: "Nchọpụta ngwa ngwa", bullets: ["Tụnyere nhọrọ, kọwaa okwu", "Rịọ maka isi iyi", "Meghee isi iyi ndị ahụ n'onwe gị"] },
            { title: "Iwu, ụtụ isi, akwụkwọ ikike", bullets: ["Jiri AI kwadebe ajụjụ", "Nweta azịza n'ụlọ ọrụ gọọmentị ma ọ bụ n'aka ọkachamara"] }
          ],
          tryIt: "Were akwụkwọ azụmahịa ogologo i nwere (nke e wepụrụ ozi nzuzo ya), rịọ AI maka nchịkọta isi okwu 8 nwere ụbọchị, ụgwọ na ọrụ ị ga-arụ, ma tụnyere ya na akwụkwọ mbụ ahụ.",
          youCanNow: "inweta nchịkọta ngwa ngwa, e lelere, nke akwụkwọ azụmahịa ogologo.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka ezigbo arịrịọ nchịkọta kwesịrị ịrịọ?", options: ["Isi ihe, gbakwunye ụbọchị, ụgwọ na ọrụ ị ga-arụ", "Naanị aha akwụkwọ ahụ", "Abụ maka akwụkwọ ahụ", "Ahịrịokwu kacha ogologo"], answer: 0, why: "Ụbọchị, ụgwọ na ọrụ ị ga-arụ bụ ihe onye nwe azụmahịa ga-eme ihe na ya." },
            { objective: "O5", q: "AI chịkọtara akwụkwọ mgbazinye ụlọ gị ma kwuo na ọ dịghị ụgwọ ntaramahụhụ maka ịkwụ ụgwọ n'oge. Gịnị ka ị ga-eme?", options: ["Kwere ya", "Lelee akụkụ ego nke akwụkwọ mgbazinye ahụ n'onwe gị", "Bịanye aka n'akwụkwọ mgbazinye ọhụrụ", "Jụọ AI otu ajụjụ ahụ ọzọ"], answer: 1, why: "Ị na-agụ akụkụ ego na iwu n'onwe gị." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịtụ oge ị na-echekwa",
          minutes: 5,
          goal: "Dekọọ oge gị tupu na mgbe i jiri AI n'otu ọrụ ka ị hụ ma ọ na-enyere aka n'ezie.",
          text: [
            "AI kwesịrị ichekwa gị oge, ọ bụghị naanị ime ka ị dị ka onye ọrụ juru aka. Tụọ ya. Họrọ otu ọrụ, dị ka ịza ajụjụ gbasara idebe oge ma ọ bụ ide ozi ị na-etinye kwa izu. Dee oge ole o were n'ụzọ ochie, wee dee oge ole o were site n'AI, gụnyere oge i ji lelee ma dozie ya.",
            "Mụbaa: nkeji i chekwara n'otu oge, ugboro ole ị na-eme ya kwa izu. Nkeji iri (10) i chekwara n'ọrụ ị na-eme ugboro 15 kwa izu bụ nkeji 150, ya bụ awa abụọ na ọkara.",
            "Ọ bụrụ na ọrụ adịghị ngwa site n'AI, ma ọ bụ chọrọ mmezi dị ukwuu nke na ọ baghị uru, kwụsị iji AI maka ọrụ ahụ. Tinye oge i chekwara n'ọrụ ndị na-eme ka azụmahịa gị too."
          ],
          steps: ["Họrọ otu ọrụ ị na-emekarị.", "Tụọ oge ya n'ụzọ ochie otu ugboro.", "Tụọ oge ya site n'AI, gụnyere ilele na imezi.", "Mụbaa nkeji i chekwara site n'ugboro ole ị na-eme ya kwa izu.", "Debe, gbanwee ma ọ bụ kwụsị iji AI maka ọrụ ahụ."],
          words: [["Ndekọ oge (time log)", "ndekọ dị mfe nke oge ọrụ na-ewe."]],
          slides: [
            { title: "Tụọ ya, echela echiche", bullets: ["Tụọ oge n'ụzọ ochie", "Tụọ oge site n'AI, gụnyere ilele", "Tụnyere ha"] },
            { title: "Gbakọọ ya", bullets: ["Nkeji i chekwara x ugboro kwa izu", "Nkeji 10 x ugboro 15 = nkeji 150 kwa izu"] },
            { title: "Kpebie", bullets: ["Ọ dị ngwa karị? Debe ya", "Ọ dị nwayọọ ma ọ bụ mmezi dị ukwuu? Kwụsị ya", "Tinye oge i chekwara n'itolite azụmahịa"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mee ngwugwu nlọghachi oge gị: izu AI hazịrị, template atọ gị, SOP gị, na ndekọ oge tupu na mgbe e mesịrị maka otu ọrụ nwere nkeji i chekwara kwa izu.",
          youCanNow: "igosi ma AI na-echekwa gị oge ma kpebie ebe ị ga-eji ya n'azụmahịa gị.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka oge \"ụzọ AI\" gị kwesịrị ịgụnye?", options: ["Naanị oge AI were dee ihe", "Ọ dịghị ihe; AI na-eme ozugbo", "Oge i ji lelee ma dozie ọrụ AI kwa", "Oge i ji rie nri ehihie"], answer: 2, why: "Ilele na imezi so n'ezi oge ọ na-ewe." },
            { objective: "O6", q: "I chekwara nkeji 4 n'ọrụ ị na-eme ugboro 10 kwa izu. Gịnị ka ị ga-ede na ndekọ gị?", options: ["Nkeji 4 kwa izu", "Nkeji 10 kwa izu", "Nkeji 14 kwa izu", "Nkeji 40 kwa izu"], answer: 3, why: "Nkeji 4 x ugboro 10 kwa izu bụ nkeji 40." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Usoro na-echekwa oge",
        questions: [
          { objective: "O4", q: "Gịnị bụ SOP?", options: ["Usoro e dere ede nzọụkwụ na nzọụkwụ maka ọrụ a na-eme ugboro ugboro", "Ụdị akwụkwọ ụgwọ (invoice)", "Ozi n'ịntanetị mgbasa ozi (social media)", "Fọm ụtụ isi"], answer: 0, why: "SOP na-eme ka e mee ọrụ otu ụzọ ahụ oge niile." },
          { objective: "O4", q: "Kedu otu ị ga-esi mara na SOP gị na-arụ ọrụ?", options: ["Jụọ AI ma ọ dị mma", "Bipụta ya n'agba", "Mee ka ọ dị ogologo", "Gbasoo ya okwu n'okwu ma ọ bụ mee ka onye enyemaka nwaa ya"], answer: 3, why: "Nnwale na-egosi nzọụkwụ na-adịghị ya ma ọ bụ na-agbagwoju anya." },
          { objective: "O5", q: "AI chịkọtara akwụkwọ mgbazinye ụlọ. Kedu akụkụ ị ka ga-agụ n'onwe gị?", options: ["Ọ dịghị nke ọ bụla", "Akụkụ gbasara ego na ọrụ iwu", "Naanị aha ya", "Nọmba peeji"], answer: 1, why: "Nchịkọta nwere ike ịhapụ ma ọ bụ kwuo ihe dị mkpa n'ụzọ ezighi ezi." },
          { objective: "O6", q: "I chekwara nkeji 5 oge ọ bụla n'ọrụ ị na-eme ugboro 20 kwa izu. Oge ole ka nke ahụ bụ?", options: ["Nkeji 100 kwa izu", "Nkeji 25 kwa izu", "Nkeji 5 kwa izu", "Nkeji 20 kwa izu"], answer: 0, why: "5 x 20 = nkeji 100." },
          { objective: "O6", q: "Iji AI n'otu ọrụ na-ewe ogologo oge n'ihi mmezi niile. Gịnị ka ị ga-eme?", options: ["Jiri ngwa AI abụọ otu mgbe", "Gaa n'ihu na-eji ya", "Kwụsị iji AI maka ọrụ ahụ", "Kwụsị ilele ọrụ ahụ"], answer: 2, why: "Jiri AI naanị ebe ọ na-echekwa oge n'ezie." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI Maka Ịrụ Ọrụ Azụmahịa Ngwa Ngwa",
    questions: [
      { objective: "O1", q: "Nzọụkwụ mbụ n'ịhazi izu site n'AI bụ:", options: ["Ịzụta app ọhụrụ", "Ide ọrụ ọ bụla", "Ihichapụ kalenda gị", "Ịjụ onye ahịa"], answer: 1, why: "AI nwere ike ịhazi naanị ihe i depụtara." },
      { objective: "O1", q: "Mgbe ị na-ahọrọ atọ kacha mkpa, onye na-ekpebi usoro ikpeazụ?", options: ["App email gị", "AI", "Onye na-asọ mpi na gị", "Gị"], answer: 3, why: "AI na-atụ aro; ị maara azụmahịa gị." },
      { objective: "O1", q: "Oge e kenyere (time block) bụ:", options: ["Ụdị email", "Elekere mebiri emebi", "Ụgwọ ntaramahụhụ", "Oge a kara aka na kalenda gị maka otu ụdị ọrụ"], answer: 3, why: "Oge e kenyere na-echebe oge maka ihe kacha mkpa." },
      { objective: "O2", q: "Kedu otu email kwesịrị ịbụ nke mbụ?", options: ["Akwụkwọ akụkọ (newsletter)", "Zaa ugbu a: ndị ahịa, ego, ihe ngwa ngwa", "Akwụkwọ ọnụahịa ochie", "Mgbasa ozi"], answer: 1, why: "Email gbasara ndị ahịa na ego kacha mkpa." },
      { objective: "O2", q: "Filter email:", options: ["Na-eziga ego", "Na-ehichapụ akaụntụ gị", "Na-ebuga ozi n'ime folda n'onwe ya", "Na-ede azịza"], answer: 2, why: "Filter na-ahazi email n'enweghị gị." },
      { objective: "O2", q: "Ụzọ n'enweghị nsogbu isi nweta enyemaka AI n'email onye ahịa bụ:", options: ["Ịchịkọta ajụjụ ahụ n'okwu nke gị", "Itinye nọmba kaadị ya", "Itinye adreesị ụlọ ya", "Iziga okwuntughe ya"], answer: 0, why: "Debe ozi nzuzo ndị ahịa n'ebe ngwa AI na-adịghị." },
      { objective: "O2", q: "Tupu i zipu azịza AI dere, ị kwesịrị:", options: ["Itinye mbelata ọnụahịa n'enweghị ihe kpatara ya", "Iziga ya n'agụghị ya", "Ịgụ ya ma dozie ya", "Idetuo ya nye onye ahịa ọ bụla"], answer: 2, why: "Ị bụ onye ga-aza maka ihe i zipuru." },
      { objective: "O3", q: "Template kacha baa uru maka:", options: ["Ajụjụ ndị ahịa na-ajụ ugboro ugboro", "Esemokwu iwu otu mgbe", "Izipu ego n'ụlọ akụ", "Okwuntughe"], answer: 0, why: "Dee azịza ahụ otu ugboro ma jiri ya ọzọ." },
      { objective: "O3", q: "Oghere dị ka [aha] na [ọnụahịa] n'ime template bụ:", options: ["Mperi", "Ebe ị na-ejupụta oge ọ bụla", "Okwuntughe", "Njikọ gaa na AI"], answer: 1, why: "Ha na-eme ka otu template rụọ ọrụ maka ọtụtụ ndị ahịa." },
      { objective: "O3", q: "Ebee ka ị nwere ike idebe template nso?", options: ["N'ime mkparịta ụka AI nwere ozi ndị ahịa", "Naanị n'isi gị", "N'obere akwụkwọ e nyadoro n'ọnụ ụzọ", "Azịza echekwara n'email ma ọ bụ app ndetu"], answer: 3, why: "Azịza echekwara na ndetu na-eme ka ọ dị mfe iji ha ngwa ngwa." },
      { objective: "O4", q: "SOP na-enyere aka n'ihi na:", options: ["Onye enyemaka nwere ike ime ọrụ ahụ otu ụzọ ahụ n'akpọghị gị", "Ọ na-eme ka ọrụ dị ogologo", "Ọ na-anọchi ndị ahịa", "Ọ bụ fọm ụtụ isi"], answer: 0, why: "Nzọụkwụ e dere ede na-eme ka e nwee ike imegharị ọrụ." },
      { objective: "O4", q: "Ụzọ kacha ngwa isi malite SOP bụ:", options: ["Ịhapụ nnwale", "Ịkọ nzọụkwụ n'echiche", "Idetuo akwụkwọ ntụziaka onye na-asọ mpi", "Ime ọrụ ahụ otu ugboro ka ị na-ede ndetu, wee rịọ AI ka ọ hazie ha"], answer: 3, why: "Ezi ndetu na AI na-ahazi ha na-enye nzọụkwụ ziri ezi." },
      { objective: "O4", q: "Ndepụta nlele na njedebe SOP:", options: ["Na-anọchi nzọụkwụ ndị ahụ", "Na-agbakwunye ụgwọ", "Na-enyere aka hụ na ọ dịghị ihe e chefuru", "Bụ nkwekọrịta iwu"], answer: 2, why: "Ịka akara n'ihe ndị ahụ na-ejide nzọụkwụ e chefuru." },
      { objective: "O5", q: "Tupu ị rịọ AI ka ọ chịkọta nkwekọrịta onye na-ere gị ngwaahịa, ị kwesịrị:", options: ["Itinye ozi nbanye ụlọ akụ gị", "Iwepụ ozi nzuzo", "Ịbịanye aka na ya", "Iziga ya ndị ahịa"], answer: 1, why: "Debe ozi nzuzo n'ebe ngwa AI na-adịghị." },
      { objective: "O5", q: "Ezigbo arịrịọ nchịkọta na-arịọ maka:", options: ["Ụdị ka ogologo", "Naanị aha ya", "Njakịrị", "Isi ihe, gbakwunye ụbọchị, ụgwọ na ihe ị ga-eme"], answer: 3, why: "Ụbọchị, ụgwọ na ọrụ ị ga-arụ bụ ihe ị ga-eme ihe na ya." },
      { objective: "O5", q: "Mgbe AI nyere isi iyi nchọpụta, ị kwesịrị:", options: ["Ịghara ilele ha mgbe ọ bụla", "Ịtụkwasị njikọ ndị ahụ obi n'eleghị ha anya", "Imeghe ma gụọ ha n'onwe gị", "Ikesa ha ozugbo dịka eziokwu"], answer: 2, why: "AI nwere ike ịdepụta isi iyi ezighi ezi ma ọ bụ ndị e chepụtara echepụta." },
      { objective: "O5", q: "Maka ajụjụ gbasara akwụkwọ ikike (license), ụzọ kacha mma iji AI bụ:", options: ["Ịkwadebe ajụjụ maka ụlọ ọrụ gọọmentị ma ọ bụ ọkachamara", "Inye azịza iwu ikpeazụ", "Itinye arịrịọ n'aha gị", "Ịkwụ ụgwọ ahụ"], answer: 0, why: "Isi iyi gọọmentị na ndị ọkachamara na-enye azịza ikpeazụ." },
      { objective: "O6", q: "Mgbe ị na-atụ oge ụzọ AI, gụnye:", options: ["Naanị sekọnd AI ji aza", "Oge i ji lelee ma dozie ọrụ AI", "Ọ dịghị ihe", "Ezumike nri ehihie gị"], answer: 1, why: "Ilele so n'ezi oge ọ na-ewe." },
      { objective: "O6", q: "Nkeji iri (10) i chekwara n'ọrụ ị na-eme ugboro 15 kwa izu ruru:", options: ["Nkeji 10", "Nkeji 25", "Nkeji 150", "Nkeji 1,500"], answer: 2, why: "10 x 15 = nkeji 150." },
      { objective: "O6", q: "Ebee ka oge i chekwara kwesịrị ịga?", options: ["N'ọrụ ndị na-eme ka azụmahịa gị too", "N'email ọzọ", "N'ịnwale app ọhụrụ ọ bụla", "Ebe ọ bụla"], answer: 0, why: "Ebumnuche ichekwa oge bụ iji ya mee ka azụmahịa too." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 5, 7, 10, 11, 13, 15, 17, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Atụmatụ izu", objective: "O1", notYet: "E nweghị ihe kacha mkpa a họọrọ, ma ọ bụ atụmatụ ahụ adịghị na kalenda.", meets: "Ihe atọ kacha mkpa nke onye nwe azụmahịa họọrọ, na oge e kenyere dị na kalenda.", exceeds: "Atọ kacha mkpa ahụ jikọrọ nke ọma na ego ma ọ bụ ndị ahịa, e burukwa ụzọ kenye ọrụ a kara aka oge." },
      { name: "Template azịza", objective: "O3", notYet: "Template na-erughị atọ, ma ọ bụ eziokwu ezighi ezi.", meets: "Template atọ nwere oghere na eziokwu e lelere, e chekwara ebe ọ dị mfe ịnweta ha.", exceeds: "A na-eji template ndị ahụ ugbu a, e melitekwala ha otu ugboro." },
      { name: "Usoro ọrụ", objective: "O4", notYet: "Nzọụkwụ adịghị zuru ezu ma ọ bụ e nwaleghị SOP ahụ.", meets: "Nzọụkwụ nwere nọmba na ndepụta nlele, e nwalere otu ugboro ma dozie ya.", exceeds: "Onye enyemaka gbasoro ya n'ajụghị ajụjụ ọ bụla." },
      { name: "Ndekọ oge", objective: "O6", notYet: "Enweghị oge tupu na mgbe e mesịrị, ma ọ bụ a gụnyeghị oge ilele.", meets: "Oge tupu na mgbe e mesịrị maka otu ọrụ, gụnyere ilele, na nkeji e chekwara kwa izu.", exceeds: "Ọ na-ekwukwa ebe oge e chekwara ga-aga." },
      { name: "Ozi nzuzo", objective: "O2", notYet: "Adreesị ndị ahịa, nọmba kaadị ma ọ bụ ihe nzuzo nkwekọrịta banyere n'ime AI.", meets: "E chịkọtara ajụjụ n'okwu onye nwe azụmahịa n'onwe ya; e kesaghị ozi nzuzo ọ bụla.", exceeds: "E wepụkwara ozi nzuzo n'akwụkwọ tupu a chịkọta ha." }
    ]
  },
  evaluation: {
    results: [
      "Ndị nwe azụmahịa mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Nkeji e chekwara kwa izu, dịka e kwuru na nnyocha nsochi ụbọchị 30",
      "Ndị nwe azụmahịa nyere onye enyemaka ma ọ bụ onye ezinụlọ usoro e dere ede n'ime ụbọchị 30",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ maka ndị nwe azụmahịa n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere email, kalenda na ngwa enyemaka AI n'efu",
      "App ndetu ma ọ bụ akwụkwọ maka template, usoro ọrụ na ndekọ oge",
      "Ihe ntụ oge (elekere ekwentị zuru ezu)",
      "Ihe dị ka nkeji 60 maka nkuzi na nnwale, gbakwunye ọrụ a na-eme n'ime ezi izu ọrụ"
    ],
    facilitatorNotes: [
      "Mee ihe ọmụmụ a n'ime otu izu ka ndị nwe azụmahịa nwee ike idekọ ezi oge tupu na mgbe e mesịrị.",
      "Gosi otu esi achịkọta email onye ahịa n'okwu nke gị kama itinye ya niile.",
      "Kewaa ndị nwe azụmahịa abụọ abụọ ka ha gbanwerịta ma nwalee usoro ọrụ ibe ha.",
      "Chetara ndị nwe azụmahịa na ajụjụ gbasara iwu, akwụkwọ ikike na ego na-aga n'ụlọ ọrụ gọọmentị ma ọ bụ n'aka ọkachamara.",
      "Jiri rubric tụọ akara ngwugwu nlọghachi oge, otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

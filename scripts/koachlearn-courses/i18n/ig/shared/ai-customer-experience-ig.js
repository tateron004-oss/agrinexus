"use strict";

// Koach Learn course (Igbo translation of shared/ai-customer-experience.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-customer-experience-ig",
  lang: "ig",
  translationOf: "ai-customer-experience",
  category: "Small Business",
  name: "AI maka Ahụmahụ Ndị Ahịa",
  skills: "Ise map njem onye ahịa, Iji AI dee ụdị azịza njikere, Ịza nyocha na mkpesa, Iji AI nyochaa nzaghachi, Ime ka ozi dabara onye ọ bụla n'echebe nzuzo, Ime atụmatụ mmezi",
  outcome: "ise map otu ndị ahịa ma ọ bụ ndị ị na-enyere aka si ahụ nzukọ gị, iji AI dee azịza ngwa ngwa na nke nwere obi ọma nye ajụjụ, nyocha na mkpesa, ịhazi nzaghachi ka ị hụ nsogbu ndị kacha mkpa, ma tụgharịa ha ka ha bụrụ atụmatụ mmezi ụbọchị 30.",
  about: [
    "Ahụmahụ onye ahịa bụ otu ndị mmadụ si enwe n'obi n'oge ọ bụla ha na gị na-emekọ ihe: ịchọta gị, ịjụ ajụjụ, ịzụta ihe ma ọ bụ inweta enyemaka, na ihe na-eme mgbe nke ahụ gasịrị. Ndị ahịa obi dị ụtọ na-alọghachi ma gwa ndị enyi ha; ndị obi adịghị ụtọ na-apụ n'nwayọọ ma ọ bụ dee nyocha ọjọọ.",
    "Ihe ọmụmụ a bụ maka ndị nwe obere azụmahịa na ndị ọrụ ha, na maka nzukọ enyemaka (nonprofit) ndị \"ndị ahịa\" ha bụ ndị ha na-enyere aka, ezinụlọ, ndị na-enye onyinye na ndị ọrụ afọ ofufo. Ọmụmaatụ gụnyere ụlọ ịkpụ isi, ụlọ ọrụ na-arụzi ụlọ, ebe nnabata ụlọ ọgwụ na ụlọ nri enyemaka (food bank).",
    "Ị ga-eji ngwa enyemaka AI n'efu dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini dee azịza ma mụọ nzaghachi, ebe mmadụ ka bụ onye isi. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, nwere ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Maka ezi nzukọ ma ọ bụ nke omume, mee ngwugwu ahụmahụ onye ahịa: map njem onye ahịa nwere oge atọ kacha adịghị ike e gosiri, ụdị azịza njikere ise (ajụjụ a na-ajụkarị, nyocha ọma, nyocha ọjọọ, mkpesa, nsochi), nchịkọta nzaghachi nke opekata mpe okwu 15 ezi ma ọ bụ nke omume e hazịrị n'ime nsogbu ndị kacha mkpa, na atụmatụ mmezi ụbọchị 30 nwere otu onye na-ahụ maka ya na otu ihe nlele maka omume ọ bụla.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nwe obere azụmahịa na ndị ọrụ na-ahụ ndị ahịa ihu na ihu, na ndị na-enyere ndị mmadụ, ezinụlọ, ndị na-enye onyinye ma ọ bụ ndị ọrụ afọ ofufo aka na nzukọ enyemaka na nzukọ obodo.",
    startingPoint: "Ha na ndị ahịa na-ekwu okwu kwa ụbọchị site n'ekwentị, ozi ederede, email, soshal midia ma ọ bụ ihu na ihu, ha nwekwara ike ịgụ nyocha n'ịntanetị. Ole na ole sere map njem onye ahịa, jiri ụdị azịza njikere, hazie nzaghachi n'isiokwu ma ọ bụ soro mmezi.",
    gap: "Azịza na-egbu oge, nke na-enweghị obi ọma ma ọ bụ nke ezighi ezi, na mkpesa a na-azaghị, na-eme ka ndị ahịa pụọ ma na-emebi nyocha ọha. Ndị na-amụ ihe kwesịrị iji AI zaa ngwa ngwa na n'obi ọma, mụta ihe site na nzaghachi ma mee otu mmezi a na-atụ n'otu oge, ma na-echebe nzuzo ndị ahịa ma na-ekwu eziokwu.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa; kọmputa na-eme ka akwụkwọ na ịhazi nzaghachi dị mfe",
      "Nzuzo: etinyela aha, nọmba ekwentị, ozi ahụike ma ọ bụ ndepụta ndị ahịa na ngwa AI izugbe",
      "Eziokwu: enweghị nyocha adịgboroja, a na-agwakwa ndị ahịa mgbe ha na AI na-akparịta ụka",
      "Oge: nkuzi nkeji 5, ihe dị ka nkeji 60 n'ozuzu, gbakwunyere oge iji mee ngwugwu ahụ"
    ],
    prerequisites: "Ọ dịghị. Ndị ọhụrụ na ngwa enyemaka AI nwere ike ibu ụzọ were ihe ọmụmụ mmalite AI."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Maka ezi nzukọ ma ọ bụ nke omume", action: "ise map njem onye ahịa site na ịchọta gị ruo mgbe ọ gasịrị, ma gosi oge atọ kacha adịghị ike", standard: "na ihe onye ahịa na-eme na ihe ọ na-enwe n'obi na nzọụkwụ ọ bụla" },
    { id: "O2", condition: "Mgbe e nyere gị ajụjụ ise a na-ajụkarị gị na ezi eziokwu ha", action: "ide ụdị azịza njikere AI dere nke dị ka okwu gị", standard: "nke ị mere ka o dabara onye ahụ ma lelee eziokwu ya tupu ị jiri ya oge ọ bụla" },
    { id: "O3", condition: "Mgbe e nyere gị nyocha ọma, nyocha ọjọọ na mkpesa", action: "ide azịza dị jụụ ma bara uru site n'iji ige ntị, ịrịọ mgbaghara, idozi, ịsochi", standard: "n'enweghị ozi nzuzo ọ bụla n'azịza ọha ọ bụla" },
    { id: "O4", condition: "Mgbe e nyere gị opekata mpe okwu ndị ahịa 15 e wepụrụ ozi nzuzo n'ime ha", action: "iji AI hazie okwu ndị ahụ n'isiokwu ma họpụta nsogbu atọ kacha mkpa n'usoro", standard: "mgbe i lelere okwu ole na ole n'isiokwu ọ bụla" },
    { id: "O5", condition: "Maka ozi ekele, ncheta ma ọ bụ nsochi", action: "ide ụdị ozi njikere dabara onye ọ bụla nwere ihe nnọchi, nke na-echebe nzuzo ma na-ekwu eziokwu", standard: "naanị nye ndị kwetara ịnụ olu gị, na ụzọ ha ga-esi kpọtụrụ mmadụ" },
    { id: "O6", condition: "Mgbe e nyere gị nsogbu atọ kacha mkpa", action: "ime atụmatụ mmezi ụbọchị 30", standard: "nwere otu omume, otu onye na-ahụ maka ya na otu ihe nlele maka nsogbu ọ bụla" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhụ na ịza ndị ahịa gị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ise map njem onye ahịa",
          minutes: 5,
          goal: "See map njem onye ahịa ma gosi oge kacha adịghị ike.",
          text: [
            "Map njem onye ahịa na-edepụta nzọụkwụ ọ bụla mmadụ na-agafe na gị, n'usoro: ịchọta (otu ha si achọta gị), ịjụ (mkparịta ụka mbụ), ikpebi, ịzụta ma ọ bụ inweta ọrụ ahụ, na mgbe ọ gasịrị (nsochi, nyocha, ịlọghachi).",
            "Na nzọụkwụ ọ bụla, dee ihe onye ahịa na-eme, ihe ọ na-enwe n'obi, na ihe nwere ike imehie. Maka ụlọ nri enyemaka: ezinụlọ ahụ na-achọta oge mmeghe n'ịntanetị, kpọọ oku jụọ ajụjụ, guzoro n'ahịrị, nata nri, ma na-eche mgbe ha ga-alọghachi.",
            "AI nwere ike inyere gị aka ịhụ nzọụkwụ ndị ị hapụrụ. Jụọ: \"Enwere m azụmahịa ndozi ụlọ. Depụta nzọụkwụ ọ bụla onye ahịa na-agafe site na nchọta mbụ ruo mgbe ọrụ ahụ gasịrị, na ihe nwere ike iwe ya iwe na nzọụkwụ ọ bụla.\" Wee tụnyere ya na ihe ị na-ahụ kwa ụbọchị."
          ],
          steps: ["Depụta nzọụkwụ ndị ahụ: ịchọta, ịjụ, ikpebi, ịzụta ma ọ bụ inweta, mgbe ọ gasịrị.", "Na nzọụkwụ ọ bụla, dee ihe onye ahịa na-eme na ihe ọ na-enwe n'obi.", "Jụọ AI ihe nwere ike iwe ha iwe na nzọụkwụ ọ bụla.", "Gosi oge atọ kacha adịghị ike."],
          words: [["Ahụmahụ onye ahịa (customer experience)", "otu ndị mmadụ si enwe n'obi n'oge ọ bụla ha na nzukọ na-emekọ ihe."], ["Map njem (journey map)", "foto nzọụkwụ na nzọụkwụ nke ahụmahụ onye ahịa."], ["Ebe mmekọ (touchpoint)", "oge ọ bụla onye ahịa na gị na-emekọ ihe: oku, ozi n'ịntanetị, nleta, email."]],
          slides: [
            { title: "Njem ahụ", bullets: ["Ịchọta, ịjụ, ikpebi", "Ịzụta ma ọ bụ inweta", "Mgbe ọ gasịrị: nsochi na ịlọghachi"] },
            { title: "Na nzọụkwụ ọ bụla", bullets: ["Ihe ha na-eme", "Ihe ha na-enwe n'obi", "Ihe nwere ike imehie"] },
            { title: "Jiri AI chọta oghere", bullets: ["Jụọ ihe nwere ike iwe ndị ahịa iwe", "Tụnyere ya na ihe ị na-ahụ", "Gosi oge atọ kacha adịghị ike"] }
          ],
          tryIt: "See map njem maka ezi nzukọ ma ọ bụ nke omume nwere opekata mpe nzọụkwụ ise. Jiri AI chọta ihe na-ewe iwe ị hapụrụ, ma gosi oge atọ kacha adịghị ike.",
          youCanNow: "ise map njem onye ahịa na ịchọta ebe ahụmahụ ahụ na-adaghị.",
          quickCheck: [
            { objective: "O1", q: "Kedu nzọụkwụ nke njem onye ahịa gbasara nsochi, nyocha na ịlọghachi?", options: ["Mgbe ọ gasịrị", "Ịchọta", "Ịjụ", "Ikpebi"], answer: 0, why: "Nzọụkwụ \"mgbe ọ gasịrị\" gụnyere nsochi, nyocha na ịlọghachi ọzọ." },
            { objective: "O1", q: "AI depụtara ihe na-ewe iwe maka map njem azụmahịa nhicha gị. Gịnị ka ị ga-eji ndepụta ahụ mee?", options: ["Detuo ya dị ka map ikpeazụ gị", "Hichapụ ya; AI enweghị ike inye aka", "Tụnyere ya na ihe ị na-ahụ kwa ụbọchị ma debe ihe bụ eziokwu", "Zigara ya ndị ahịa"], answer: 2, why: "AI nwere ike igosi nzọụkwụ ị hapụrụ, mana ahụmahụ gị kwa ụbọchị na-akwado ha." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Iji AI dee azịza ngwa ngwa nwere obi ọma",
          minutes: 5,
          goal: "Jiri AI mee ụdị azịza njikere maka ajụjụ a na-ajụkarị gị.",
          text: [
            "Ịza ngwa ngwa dị mkpa. Ụdị azịza njikere (template) bụ azịza e meworo ị na-agbanwe maka onye ọ bụla. AI nwere ike ide ha n'olu gị n'ime sekọnd ole na ole.",
            "Nye AI ọnọdụ ahụ: nzukọ gị, ụda olu gị na eziokwu ndị ahụ. \"Dee azịza enyi enyi maka ụlọ ịkpụ isi nye ajụjụ 'Ị na-anabata ndị na-abịa n'akwadoghị oge?' Eziokwu: a na-anabata ndị na-abịa n'akwadoghị oge site na Tuzde ruo Tọzde, a chọrọ ịkwado oge na Fraịde na Satọde, kwado oge na weebụsaịtị anyị. N'okwu na-erughị 50.\"",
            "Mee ka ọ dabara onye ahụ mgbe niile tupu i zipu ya: jiri aha onye ahụ, zaa kpọmkwem ihe ọ jụrụ, ma lelee eziokwu ya. Azịza dị ka igwe (robot) ma ọ bụ nke kwuru oge mmeghe ezighi ezi na-emebi karịa ka ọ na-enyere aka."
          ],
          steps: ["Depụta ajụjụ ise a na-ajụkarị gị.", "Nye AI ụda olu gị na ezi eziokwu maka nke ọ bụla.", "Rịọ maka ụdị azịza dị mkpụmkpụ nwere obi ọma.", "Chekwaa ụdị azịza ndị ahụ n'akwụkwọ.", "Mee ka ọ dabara onye ahụ ma lelee eziokwu oge ọ bụla i jiri otu."],
          words: [["Ụdị azịza njikere (template)", "azịza e meworo ị na-agbanwe maka onye ọ bụla."], ["Ime ka o dabara onye ahụ (personalize)", "ịgbanwe ozi ka o dabara kpọmkwem onye ahụ."]],
          slides: [
            { title: "Ịza ngwa ngwa dị mkpa", bullets: ["Ụdị azịza njikere na-enyere gị aka ịza ngwa ngwa", "AI na-ede ha n'ime sekọnd ole na ole"] },
            { title: "Nye AI eziokwu ndị ahụ", bullets: ["Ụda olu gị", "Ezi eziokwu ndị ahụ", "Oke ọnụ ọgụgụ okwu"] },
            { title: "Mee ka o dabara onye ahụ mgbe niile", bullets: ["Jiri aha ha", "Zaa kpọmkwem ihe ha jụrụ", "Lelee eziokwu ndị ahụ"] }
          ],
          tryIt: "Jiri AI dee ụdị azịza njikere maka ajụjụ atọ ndị ahịa na-ajụkarị gị. Chekwaa ha, wee mee ka otu dabara onye ahịa ị chepụtara echepụta.",
          youCanNow: "ime ụdị azịza njikere AI dere na ime ka ha dabara onye ọ bụla.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka ị ga-enye AI ka ụdị azịza njikere wee ziri ezi?", options: ["Nọmba ekwentị ndị ahịa", "Ụda olu gị na ezi eziokwu ndị ahụ", "Naanị okwu \"zaa\"", "Weebụsaịtị onye asọmpi gị"], answer: 1, why: "Ụda olu gị na ezi eziokwu na-enyere AI aka ide azịza ziri ezi nke dị ka okwu gị." },
            { objective: "O2", q: "Onye ahịa aha ya bụ Ana jụrụ maka ebe a na-adọba ụgbọala. I nwere ụdị azịza njikere. Gịnị ka ị ga-eme?", options: ["Zipu ụdị azịza ahụ otu o si dị", "Leghara ajụjụ ahụ anya", "Zigara ya ụdị azịza niile i nwere", "Tinye aha ya, zaa kpọmkwem ihe ọ jụrụ ma lelee eziokwu ndị ahụ"], answer: 3, why: "Mee ka o dabara onye ahụ ma lelee eziokwu oge ọ bụla i jiri ụdị azịza njikere." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịza nyocha na mkpesa",
          minutes: 6,
          goal: "Zaa nyocha ọma, nyocha ọjọọ na mkpesa n'ụzọ dị jụụ ma bara uru.",
          text: [
            "Nyocha (review) bụ nke ọha, ya mere azịza gị bụ maka onye ọ bụla na-agụ ya, ọ bụghị naanị onye dere nyocha ahụ. Kelee ndị dere nyocha ọma ma kpọtụ otu ihe kpọmkwem aha. Maka nyocha ọjọọ, dị jụụ, rịọ mgbaghara maka ahụmahụ ha, arụrịtala ụka, ma kwe ka i dozie ya na nzuzo site na nọmba ekwentị ma ọ bụ email.",
            "Maka mkpesa, jiri usoro dị mfe: ige ntị, ịrịọ mgbaghara, idozi, ịsochi. Jụọ AI: \"Nyere m aka zaa mkpesa a. Usoro: kwenye na nsogbu ahụ, rịọ mgbaghara, nye ndozi a: [ndozi gị], kpọọ ha ka ha kpọtụrụ [email].\"",
            "Ekesala ozi nzuzo n'azịza ọha mgbe ọ bụla, dị ka ụbọchị ọhụhụ, ozi ahụike ma ọ bụ ihe mmadụ zụtara. Ebipụtala nyocha adịgboroja mgbe ọ bụla, akwụkwala ụgwọ maka ha. Ọ bụrụ na nyocha nwere iyi egwu ma ọ bụ okwu ụgha, gbasoo usoro ịkọ akụkọ nke weebụsaịtị ahụ."
          ],
          steps: ["Gụọ nyocha ahụ ugboro abụọ ma chere ma ọ bụrụ na iwe na-ewe gị.", "Kelee ha (nyocha ọma) ma ọ bụ kwenye ma rịọ mgbaghara (nyocha ọjọọ).", "Nye ndozi kpọmkwem ma ọ bụ ụzọ unu ga-esi kparịta na nzuzo.", "Wepụ ozi nzuzo n'azịza ọha.", "Soro ya ka ị hụ na e doziri ya."],
          words: [["Nyocha (review)", "okwu na akara ọha banyere azụmahịa."], ["Na nzuzo (offline)", "n'ebe ọ bụghị peeji ọha, dị ka site n'ekwentị ma ọ bụ email nzuzo."]],
          slides: [
            { title: "Azịza bụ nke ọha", bullets: ["Onye ọ bụla na-agụ ha", "Kelee ndị dere nyocha ọma kpọmkwem"] },
            { title: "Nyocha ọjọọ", bullets: ["Dị jụụ, arụrịtala ụka", "Rịọ mgbaghara maka ahụmahụ ha", "Kwe ka i dozie ya na nzuzo"] },
            { title: "Usoro mkpesa", bullets: ["Ige ntị, ịrịọ mgbaghara, idozi, ịsochi", "Enweghị ozi nzuzo n'ihu ọha", "Enweghị nyocha adịgboroja, mgbe ọ bụla"] }
          ],
          tryIt: "Jiri enyemaka AI dee azịza nye otu nyocha ọma, otu nyocha ọjọọ na otu mkpesa (ezi ma ọ bụ nke e chepụtara). Lelee nke ọ bụla ma ọ dị jụụ ma enweghị ozi nzuzo.",
          youCanNow: "ịza nyocha na mkpesa n'ụzọ dị jụụ, bara uru, n'ekesaghị ozi nzuzo.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka azịza nye nyocha ọma kwesịrị inwe?", options: ["Koodu mbelata ọnụ ahịa maka onye ọ bụla", "Arụmụka banyere kpakpando ndị ahụ", "Ekele na otu ihe kpọmkwem site na nyocha ha", "Ụbọchị ọhụhụ onye ahịa ahụ"], answer: 2, why: "Kelee ndị mmadụ ma kpọtụ otu ihe kpọmkwem aha ka azịza ahụ dị ka ezi okwu." },
            { objective: "O3", q: "Onye ọrịa dere na ụlọ ọgwụ gị mere ka o chere otu awa. Kedu otu ị ga-esi zaa n'ihu ọha?", options: ["Kwenye na ya, rịọ mgbaghara ma kwe ka unu kparịta na nzuzo site n'ekwentị ma ọ bụ email", "Kọwaa ozi ọhụhụ ya na ihe ahụike mere o ji chere", "Kwuo na o mehiere", "Hichapụ peeji azụmahịa gị"], answer: 0, why: "Dị jụụ, rịọ mgbaghara, kwe ka i dozie ya na nzuzo, ma wepụ ozi nzuzo." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhụ na ịza ndị ahịa gị",
        questions: [
          { objective: "O1", q: "Gịnị ka map njem onye ahịa na-egosi?", options: ["Naanị ụzọ ụgbọala nnyefe gị", "Ego dị n'akaụntụ ụlọ akụ gị", "Nzọụkwụ ọ bụla onye ahịa na-agafe na gị", "Usoro oge ndị ọrụ"], answer: 2, why: "Ọ na-edepụta nzọụkwụ ọ bụla na otu onye ahịa si enwe n'obi." },
          { objective: "O1", q: "Kedu nke bụ ebe mmekọ (touchpoint)?", options: ["Oku ekwentị gị na onye ahịa", "Naanị agba mgbidi ọfịs gị", "Akwụkwọ ụtụ isi gị", "Akwụkwọ ụgwọ onye na-ebunye gị ngwaahịa"], answer: 0, why: "Ebe mmekọ bụ oge onye ahịa na gị na-emekọ ihe." },
          { objective: "O2", q: "Gịnị ka ị ga-eme mgbe niile tupu i zipu azịza AI dere?", options: ["Zipu ya n'agụghị ya", "Tinyekwuo emoji", "Wepụ aha onye ahịa ahụ", "Mee ka o dabara onye ahụ ma lelee eziokwu ndị ahụ"], answer: 3, why: "Azịza dabara onye ahụ ma ziri ezi na-ewulite ntụkwasị obi." },
          { objective: "O3", q: "Onye ahịa dere nyocha iwe. Gịnị bụ nzọụkwụ mbụ kacha mma?", options: ["Rụrịta ụka n'ihu ọha", "Dị jụụ, rịọ mgbaghara maka ahụmahụ ya ma kwe ka i dozie ya na nzuzo", "Bipụta ozi ọhụhụ ya", "Leghara ya anya ruo mgbe ebighị ebi"], answer: 1, why: "Azịza dị jụụ ma bara uru na-egosi ndị na-agụ ya na ị na-eche banyere ha." },
          { objective: "O3", q: "Kedu nke a na-ekwesịghị ịhụ mgbe ọ bụla n'azịza ọha nye nyocha?", options: ["\"Daalụ\"", "Ozi ahụike onye ahịa ahụ", "Ịkpọ ha ka unu kparịta n'ekwentị", "Aha azụmahịa gị"], answer: 1, why: "Ozi nzuzo anaghị abanye n'azịza ọha." }
        ]
      }
    },
    {
      name: "Isi 2: Ịmụta ihe site na nzaghachi na ime mmezi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Iji AI nyochaa nzaghachi",
          minutes: 6,
          goal: "Jiri AI hazie okwu ndị ahịa n'isiokwu ma chọta nsogbu ndị kacha mkpa.",
          text: [
            "Nzaghachi (feedback) zoro n'ọtụtụ ebe: nyocha, nnyocha ajụjụ (survey), email, okwu na soshal midia na ndetu ndị ọrụ. Ịgụ ha niile n'aka na-ewe ọtụtụ awa. AI nwere ike ịhazi ha n'ime nkeji ole na ole.",
            "Chịkọta opekata mpe okwu 15 n'otu akwụkwọ. Wepụ aha, nọmba ekwentị na ozi nzuzo ndị ọzọ. Wee jụọ: \"Hazie okwu ndị a n'isiokwu. Maka isiokwu ọ bụla, gụọ ole okwu kwuru ya, kwuo ma ọ dị mma ma ọ bụ ọjọọ, ma nye otu okwu ọmụmaatụ.\"",
            "Lelee ọrụ AI: gụọ okwu ole na ole n'isiokwu ọ bụla ka ị kwado na ha dabara ebe ahụ. AI nwere ike ịgụ ọnụ ọgụgụ ezighi ezi ma ọ bụ jikọta nsogbu dị iche iche. Ihe ọ ga-enye bụ ndepụta nsogbu kacha mkpa gị, n'usoro otu ha si apụta ugboro ugboro na otu ha si emebi ahụmahụ ahụ."
          ],
          steps: ["Chịkọta opekata mpe okwu 15 site na nyocha, nnyocha ajụjụ na email.", "Wepụ aha na ozi nzuzo.", "Rịọ AI ka o hazie ha n'isiokwu nwere ọnụ ọgụgụ na ọmụmaatụ.", "Lelee okwu ole na ole n'isiokwu ọ bụla.", "Họpụta nsogbu atọ kacha mkpa n'usoro."],
          words: [["Nzaghachi (feedback)", "ihe ndị ahịa na-agwa gị banyere ahụmahụ ha."], ["Isiokwu (theme)", "ihe na-apụta ugboro ugboro."], ["Mmetụta (sentiment)", "ma okwu ọ dị mma, ọ dị njọ ma ọ bụ ọ nọ n'etiti."]],
          slides: [
            { title: "Nzaghachi dị ebe niile", bullets: ["Nyocha, nnyocha ajụjụ, email", "Okwu soshal midia, ndetu ndị ọrụ"] },
            { title: "Kwe ka AI hazie ya", bullets: ["Buru ụzọ wepụ ozi nzuzo", "Rịọ isiokwu, ọnụ ọgụgụ, mmetụta, otu ọmụmaatụ"] },
            { title: "Lelee ma họpụta n'usoro", bullets: ["Lelee isiokwu ọ bụla ntakịrị", "Usoro: ugboro ole na otu o si emebi ihe"] }
          ],
          tryIt: "Chịkọta opekata mpe okwu 15 ezi ma ọ bụ nke omume, wepụ ozi nzuzo, ma mee ka AI hazie ha n'isiokwu. Lelee ihe ọ nyere ntakịrị ma depụta nsogbu atọ kacha mkpa gị.",
          youCanNow: "ịtụgharị ọtụtụ okwu ndị ahịa ka ọ bụrụ ndepụta nsogbu kacha mkpa n'usoro.",
          quickCheck: [
            { objective: "O4", q: "Gịnị mere ị ga-eji lelee isiokwu ndị AI mere ntakịrị?", options: ["AI na-eziri ezi mgbe niile", "Iji mee ka ndepụta ahụ dị ogologo", "Iji tinyeghachi aha ndị ahịa", "AI nwere ike ịgụ ọnụ ọgụgụ ezighi ezi ma ọ bụ jikọta nsogbu dị iche iche"], answer: 3, why: "Ịgụ okwu ole na ole n'isiokwu ọ bụla na-ejide mperi ọnụ ọgụgụ na nsogbu AI jikọtara." },
            { objective: "O4", q: "Okwu asatọ kwuru maka azịza na-egbu oge, abụọ kwuru maka ebe a na-adọba ụgbọala. Kedu nke ị ga-etinye n'ihu?", options: ["Ebe a na-adọba ụgbọala, n'ihi na ọ dị mfe", "Azịza na-egbu oge, n'ihi na ọtụtụ mmadụ kwuru ya", "Ọ dịghị nke ọ bụla; leghara ha abụọ anya", "Nke ọ bụla AI buru ụzọ depụta"], answer: 1, why: "Họpụta nsogbu n'usoro otu ha si apụta ugboro ugboro na otu ha si emebi ihe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ime ka ọrụ dabara onye ọ bụla n'atụfughị ntụkwasị obi",
          minutes: 5,
          goal: "Jiri AI mee ka ozi dabara onye ọ bụla ma na-echebe nzuzo ndị ahịa ma na-ekwu eziokwu.",
          text: [
            "Ihe pụrụ iche na-eme ka ndị mmadụ chee na a na-akwanyere ha ugwu: mbelata ọnụ ahịa n'ụbọchị ọmụmụ, ncheta tupu ọhụhụ ọzọ nke onye ị na-enyere aka, ma ọ bụ akwụkwọ ekele nye onye nyere onyinye nke na-akpọ mmemme ọ kwadoro aha.",
            "AI nwere ike inye aka ide ozi ndị a maka ọtụtụ mmadụ site n'otu ụdị ozi njikere. Nye ya naanị ozi ọ chọrọ, dị ka aha mbụ na ụdị ọrụ, ọ bụghị akụkọ zuru ezu. Jiri sistemụ ndị ahịa gị ma ọ bụ ngwa email gị tinye aha, kama itinye ndepụta ndị ahịa na ngwa AI izugbe.",
            "Kwuo eziokwu: ọ bụrụ na chatbot ma ọ bụ AI na-aza ndị ahịa, kwuo ya. Mee ka ọ dị mfe ịkpọtụrụ mmadụ. Zigara naanị ndị kwetara ịnụ olu gị ozi, ma mee ka ọ dị mfe ịkwụsị (opt out)."
          ],
          steps: ["Họrọ otu oge pụrụ iche: ekele, ncheta ma ọ bụ nsochi.", "Mee ka AI dee ụdị ozi njikere nwere ihe nnọchi dị ka [Aha mbụ].", "Jiri ngwa email gị ma ọ bụ ngwa ndị ahịa gị tinye aha.", "Kwuo n'ụzọ doro anya mgbe onye ahịa na AI na-akparịta ụka.", "Nye mgbe niile ụzọ isi kpọtụrụ mmadụ."],
          words: [["Ihe nnọchi (placeholder)", "akara dị ka [Aha mbụ] a na-eji ezi ozi dochie."], ["Ịkwụsị (opt out)", "ịhọrọ ịkwụsị inweta ozi."]],
          slides: [
            { title: "Ihe pụrụ iche", bullets: ["Ekele na ncheta", "Kpọtụ ihe dị ha mkpa aha"] },
            { title: "Chebe nzuzo", bullets: ["Jiri ihe nnọchi dị ka [Aha mbụ]", "Tinye aha na ngwa nke gị", "Enweghị ndepụta ndị ahịa na ngwa AI izugbe"] },
            { title: "Kwuo eziokwu", bullets: ["Kwuo mgbe AI na-aza", "Ọ dị mfe ịkpọtụrụ mmadụ", "Ọ dị mfe ịkwụsị"] }
          ],
          tryIt: "Jiri AI dee ụdị ozi ekele ma ọ bụ nsochi dabara onye ọ bụla nwere ihe nnọchi. Lelee na ọ naghị arịọ ozi nzuzo ọ bụla ma na-enye ụzọ isi kpọtụrụ mmadụ.",
          youCanNow: "iji AI mee ka ozi ndị ahịa dabara onye ọ bụla ma na-echebe nzuzo ma na-ekwu eziokwu.",
          quickCheck: [
            { objective: "O5", q: "Kedu ụzọ kacha enweghị nsogbu iji zipu akwụkwọ ekele nye ndị nyere onyinye 200?", options: ["Jiri ụdị ozi njikere nwere [Aha mbụ] ma tinye aha na ngwa email nke gị", "Tinye ndepụta ndị nyere onyinye niile na ngwa AI n'efu", "Jiri aka dee nke ọ bụla n'eleleghị ya", "Bipụta aha ha niile na soshal midia"], answer: 0, why: "Tinye aha na ngwa nke gị ka ndepụta ndị nyere onyinye ghara ịbanye na ngwa AI izugbe." },
            { objective: "O5", q: "Chatbot weebụsaịtị gị na-aza ajụjụ ndị ahịa. Gịnị ka ị ga-etinye?", options: ["Aha onye ọrụ adịgboroja", "Ọ dịghị ihe; ndị ahịa achọghị ịma", "Ozi doro anya na ọ bụ AI na ụzọ isi kpọtụrụ mmadụ", "Arịrịọ maka nọmba kaadị"], answer: 2, why: "Ikwu eziokwu na ọ bụ AI na inye ụzọ isi kpọtụrụ mmadụ na-ewulite ntụkwasị obi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịtụgharị ihe ị mụtara ka ọ bụrụ atụmatụ mmezi ụbọchị 30",
          minutes: 5,
          goal: "Tụgharịa nsogbu kacha mkpa gị ka ha bụrụ atụmatụ ụbọchị 30 nwere ndị na-ahụ maka ya na ihe nlele.",
          text: [
            "Ihe ị mụtara bara uru naanị ma ọ bụrụ na ihe agbanwee. Maka nke ọ bụla n'ime nsogbu atọ kacha mkpa gị, họrọ otu omume ị nwere ike ime n'ime ụbọchị 30. Ọmụmaatụ: \"Ndị ahịa na-ekwu na ha na-eche ogologo oge maka ọnụ ahịa (quote)\" ghọọ \"Zipu ọnụ ahịa ọ bụla n'ime awa 24 site n'iji ụdị ọnụ ahịa njikere AI dere.\"",
            "Nye omume ọ bụla onye na-ahụ maka ya na ihe nlele: ọnụ ọgụgụ ga-egosi ma ọ rụrụ ọrụ, dị ka oge azịza n'ọkara, akara nyocha, ugboro ole ndị mmadụ na-alọghachi ma ọ bụ mkpesa n'izu.",
            "Gwa ndị ahịa ihe ị gbanwere: \"Unu gwara anyị, anyị gere ntị.\" Mgbe ụbọchị 30 gasịrị, lelee ihe nlele ndị ahụ, debe ihe rụrụ ọrụ ma họrọ nsogbu ọzọ."
          ],
          steps: ["Dee otu omume maka nsogbu ọ bụla kacha mkpa.", "Nye omume ọ bụla onye na-ahụ maka ya.", "Họrọ otu ihe nlele maka nke ọ bụla.", "Dee ọnụ ọgụgụ mmalite.", "Lelee ọzọ mgbe ụbọchị 30 gasịrị ma kesaa ihe gbanwere."],
          words: [["Ihe ị mụtara (insight)", "nghọta bara uru na-esi n'ịmụ ozi."], ["Ihe nlele (measure)", "ọnụ ọgụgụ na-egosi ma mgbanwe rụrụ ọrụ."]],
          slides: [
            { title: "Site n'ihe ị mụtara ruo n'omume", bullets: ["Otu omume maka nsogbu ọ bụla kacha mkpa", "Ị nwere ike ime ya n'ime ụbọchị 30"] },
            { title: "Onye na-ahụ maka ya na ihe nlele", bullets: ["Onye na-eme ya", "Oge azịza, akara nyocha, ịlọghachi, mkpesa"] },
            { title: "Mechie gburugburu ahụ", bullets: ["\"Unu gwara anyị, anyị gere ntị\"", "Lelee mgbe ụbọchị 30 gasịrị", "Họrọ nsogbu ọzọ"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ mmezi ụbọchị 30 maka nsogbu atọ kacha mkpa gị nwere omume, onye na-ahụ maka ya, ihe nlele na ọnụ ọgụgụ mmalite maka nke ọ bụla. Tinye ya na map njem gị, ụdị azịza njikere gị na nchịkọta nzaghachi gị ka i mezuo ngwugwu ahụmahụ onye ahịa gị.",
          youCanNow: "ịchọta, idozi na ịtụ nsogbu ahụmahụ onye ahịa site n'enyemaka AI.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ ihe nlele n'atụmatụ mmezi?", options: ["Onye na-ahụ maka ya", "Ọnụ ọgụgụ na-egosi ma omume ahụ rụrụ ọrụ", "Aha onye ahịa ahụ", "Ụbọchị i malitere azụmahịa ahụ"], answer: 1, why: "Ihe nlele bụ ọnụ ọgụgụ, dị ka oge azịza n'ọkara, na-egosi ma omume ahụ rụrụ ọrụ." },
            { objective: "O6", q: "Ndị ahịa na-ekwu na ha enweghị ike ịchọta oge mmeghe gị. Gịnị bụ ezigbo omume ụbọchị 30?", options: ["Chere ka ị hụ ma ọ ga-aka mma", "Rịọ AI ka o dee nyocha banyere oge mmeghe gị", "Wepụ oge mmeghe kpamkpam", "Bipụta oge mmeghe na peeji na profaịlụ ọ bụla, nwere onye na-ahụ maka ya na ihe nlele"], answer: 3, why: "Nsogbu ọ bụla kacha mkpa na-enweta otu omume doro anya, onye na-ahụ maka ya na ihe nlele." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịmụta ihe site na nzaghachi na ime mmezi",
        questions: [
          { objective: "O4", q: "Tupu i tinye okwu ndị ahịa na AI, ị kwesịrị:", options: ["Itinye nọmba ekwentị ha", "Itinye nọmba kaadị ha", "Ọ dịghị ihe", "Iwepụ aha na ozi nzuzo"], answer: 3, why: "Nzuzo na-ebu ụzọ." },
          { objective: "O4", q: "AI hazịrị okwu n'isiokwu. Gịnị ka ị ga-eme ọzọ?", options: ["Lelee okwu ole na ole n'isiokwu ọ bụla", "Tụkwasị ya obi kpamkpam", "Hichapụ okwu ndị ahụ", "Bipụta isiokwu ndị ahụ n'ihu ọha na aha"], answer: 0, why: "AI nwere ike ịgụ ọnụ ọgụgụ ezighi ezi ma ọ bụ jikọta nsogbu." },
          { objective: "O5", q: "Gịnị bụ ihe nnọchi (placeholder)?", options: ["Nyocha adịgboroja", "Ụdị mkpesa", "Akara dị ka [Aha mbụ] a na-eji ezi ozi dochie", "Okwuntughe onye ahịa"], answer: 2, why: "Ihe nnọchi na-ekwe ka i mee ka ozi dabara onye ọ bụla n'enweghị nsogbu." },
          { objective: "O5", q: "Chatbot na-aza ndị ahịa gị. Gịnị ka ị ga-agwa ha?", options: ["Na ọ bụ ezi onye ọrụ", "Ọ dịghị ihe", "Ka ha kwụsị ịjụ ajụjụ", "Na ọ bụ AI na otu ha ga-esi kpọtụrụ mmadụ"], answer: 3, why: "Ikwu eziokwu na-ewulite ntụkwasị obi." },
          { objective: "O6", q: "Kedu nke bụ ezigbo ihe nlele maka omume \"zipu ọnụ ahịa n'ime awa 24\"?", options: ["Ọnụ ọgụgụ osisi dị n'ọfịs", "Afọ onye nwe ya", "Oge ọ na-ewe n'ọkara iji zipu ọnụ ahịa", "Agba weebụsaịtị"], answer: 2, why: "Ihe nlele ga-egosi ma omume ahụ rụrụ ọrụ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Ahụmahụ Ndị Ahịa",
    questions: [
      { objective: "O1", q: "Ahụmahụ onye ahịa bụ:", options: ["Naanị ọnụ ahịa", "Otu ndị mmadụ si enwe n'obi n'oge ọ bụla ha na gị na-emekọ ihe", "Naanị weebụsaịtị gị", "Ụgwọ ọnwa ndị ọrụ gị"], answer: 1, why: "Ọ gụnyere ebe mmekọ ọ bụla." },
      { objective: "O1", q: "Kedu nzọụkwụ mbụ nke njem onye ahịa?", options: ["Ịchọta: otu ha si achọta gị", "Ide nyocha", "Ịkwụ ụgwọ", "Ịlọghachi"], answer: 0, why: "Njem ahụ na-amalite mgbe ha chọtara gị." },
      { objective: "O1", q: "Maka nzukọ enyemaka, \"ndị ahịa\" nwere ike ịgụnye:", options: ["Naanị ndị na-akwụ ụgwọ ịzụ ahịa", "Naanị ndị otu nchịkwa (board)", "Ndị a na-enyere aka, ezinụlọ, ndị na-enye onyinye na ndị ọrụ afọ ofufo", "Ọ dịghị onye"], answer: 2, why: "Onye ọ bụla nzukọ ahụ na-enyere aka ma ọ bụ na-adabere na ya." },
      { objective: "O1", q: "AI nwere ike inyere map njem aka site na:", options: ["Igosi ihe na-ewe iwe i nwere ike ịhapụ", "Idochi ndị ahịa gị", "Ịchịkọta nọmba kaadị", "Ide nyocha adịgboroja"], answer: 0, why: "Ọ na-eche echiche; gị na-atụnyere ya na eziokwu." },
      { objective: "O2", q: "Ụdị azịza njikere bụ:", options: ["Akwụkwọ nkwekọrịta iwu", "Nnyocha ajụjụ", "Weebụsaịtị nyocha", "Azịza e meworo ị na-agbanwe maka onye ọ bụla"], answer: 3, why: "Ụdị azịza njikere na-eme ka ịza dị ngwa." },
      { objective: "O2", q: "Gịnị ka ị ga-enye AI mgbe ọ na-ede ụdị azịza njikere?", options: ["Okwuntughe ndị ahịa", "Ụda olu gị na ezi eziokwu ndị ahụ", "Ọ dịghị ihe", "Nyocha onye asọmpi gị"], answer: 1, why: "Eziokwu na ụda olu na-enye azịza ziri ezi dị ka okwu gị." },
      { objective: "O2", q: "Ụdị azịza njikere AI dere kwuru na ị na-emeghe n'elekere 8 nke ụtụtụ, mana ị na-emeghe n'elekere 9. Gịnị ka ị ga-eme?", options: ["Zipu ya otú ọ dị", "Dozie eziokwu ahụ tupu i jiri ya", "Gbanwee oge mmeghe gị", "Bọọ onye ahịa ahụ ebubo"], answer: 1, why: "Lelee eziokwu mgbe niile." },
      { objective: "O3", q: "Onye ka azịza ọha nye nyocha bụ n'ezie maka ya?", options: ["Naanị onye dere nyocha ahụ", "Ọ dịghị onye", "Onye nwe weebụsaịtị nyocha ahụ", "Onye ọ bụla na-agụ nyocha ndị ahụ"], answer: 3, why: "Ndị ahịa n'ọdịnihu na-agụ azịza gị." },
      { objective: "O3", q: "Usoro mkpesa n'ihe ọmụmụ a bụ:", options: ["Ige ntị, ịrịọ mgbaghara, idozi, ịsochi", "Ịrụ ụka, ịgọnarị, ihichapụ, ileghara anya", "Chere, chere, chere, chere", "Ịkwụghachi ego niile mgbe niile"], answer: 0, why: "Usoro ahụ na-atụgharị mkpesa ka ọ bụrụ ntụkwasị obi." },
      { objective: "O3", q: "Ide nyocha maka azụmahịa nke gị bụ:", options: ["Ezigbo atụmatụ", "Ihe a chọrọ", "Aghụghọ, a na-ekwesịghịkwa ime ya mgbe ọ bụla", "Ọ dị mma ma ọ bụrụ AI"], answer: 2, why: "Nyocha adịgboroja na-eduhie ndị ahịa." },
      { objective: "O3", q: "Nyocha nwere iyi egwu. Ị kwesịrị:", options: ["Iyi ha egwu laghachi", "Ibipụta adreesị ha", "Ileghara nyocha niile anya", "Iji usoro ịkọ akụkọ nke weebụsaịtị ahụ"], answer: 3, why: "Weebụsaịtị nwere usoro maka okwu mkparị." },
      { objective: "O4", q: "Ole okwu ka ihe ọmụmụ a na-atụ aro ka i chịkọta maka nnyocha?", options: ["Kpọmkwem 1", "Ọ dịghị", "Opekata mpe 15", "Opekata mpe 10,000"], answer: 2, why: "Iri na ise ma ọ bụ karịa na-egosi ezi usoro." },
      { objective: "O4", q: "Isiokwu (theme) bụ:", options: ["Nhazi weebụsaịtị", "Ihe na-apụta ugboro ugboro", "Otu mkpesa", "Koodu mbelata ọnụ ahịa"], answer: 1, why: "Isiokwu na-egosi nsogbu a na-ahụkarị." },
      { objective: "O4", q: "Mmetụta (sentiment) pụtara:", options: ["Ma okwu ọ dị mma, ọ dị njọ ma ọ bụ ọ nọ n'etiti", "Otu okwu si dị ogologo", "Onye dere ya", "Ụbọchị ya"], answer: 0, why: "Mmetụta bụ obi dị n'azụ okwu ahụ." },
      { objective: "O4", q: "E kwesịrị ịhazi nsogbu kacha mkpa n'usoro site na:", options: ["Usoro mkpụrụ akwụkwọ", "Onye mere mkpesa kacha elu", "Otu ha si apụta ugboro ugboro na otu ha si emebi ihe", "Nhọrọ n'ọchịchọ"], answer: 2, why: "Ugboro ole na mmetụta ya na-egosi ihe kacha mkpa." },
      { objective: "O5", q: "Ụzọ kacha enweghị nsogbu iji tinye aha ndị ahịa n'ọtụtụ ozi bụ:", options: ["Iji ihe nnọchi ma tinye aha na ngwa email ma ọ bụ ngwa ndị ahịa nke gị", "Itinye ndepụta ndị ahịa niile na ngwa AI izugbe", "Ịkọ aha ndị ahụ", "Ibipụta ndepụta ahụ n'ihu ọha"], answer: 0, why: "Ngwa nke gị na-edebe ozi ndị ahịa n'aka gị." },
      { objective: "O5", q: "Ị kwesịrị izigara ndị ahịa ozi ndị:", options: ["Enyeghị gị ụzọ ịkpọtụrụ ha mgbe ọ bụla", "Gwara gị ka ị kwụsị", "I hụrụ n'ịntanetị", "Kwetara ịnụ olu gị"], answer: 3, why: "Nkwenye dị mkpa, a ga-asọpụrụkwa ndị kwụsịrị." },
      { objective: "O6", q: "Omume mmezi ọ bụla chọrọ:", options: ["Akara (logo) ọhụrụ", "Onye na-ahụ maka ya na ihe nlele", "Ọfịs ka ukwuu", "Ọ dịghị ihe"], answer: 1, why: "Onye na-ahụ maka ya na-eme ka ọ mee; ihe nlele na-egosi ma ọ rụrụ ọrụ." },
      { objective: "O6", q: "\"Unu gwara anyị, anyị gere ntị\" bụ ụzọ:", options: ["Izo nsogbu", "Igosi ndị ahịa ihe ị gbanwere", "Ịrịọ okwuntughe", "Ibuli ọnụ ahịa"], answer: 1, why: "Imechi gburugburu ahụ na-ewulite iguzosi ike n'ihe." },
      { objective: "O6", q: "Mgbe ụbọchị 30 gasịrị, ị kwesịrị:", options: ["Ịkwụsị ige ndị ahịa ntị", "Ihichapụ atụmatụ ahụ", "Ọ dịghị mgbe ị ga-elele", "Ilele ihe nlele, idebe ihe rụrụ ọrụ ma họrọ nsogbu ọzọ"], answer: 3, why: "Mmezi bụ gburugburu na-aga n'ihu." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 1, 4, 6, 8, 9, 12, 14, 15, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Map njem", objective: "O1", notYet: "Nzọụkwụ ụfọdụ adịghị, ma ọ bụ e gosighị oge kacha adịghị ike.", meets: "Nzọụkwụ ise niile nwere ihe onye ahịa na-eme na ihe ọ na-enwe n'obi, na oge atọ kacha adịghị ike e gosiri.", exceeds: "Oge ọ bụla na-adịghị ike jikọtara na ezi nzaghachi ma ọ bụ ihe onye ọrụ hụrụ." },
      { name: "Ụdị azịza njikere", objective: "O2", notYet: "Ụdị azịza na-erughị ise, ma ọ bụ otu nwere eziokwu ezighi ezi.", meets: "Ụdị azịza ise (ajụjụ, nyocha ọma, nyocha ọjọọ, mkpesa, nsochi) nwere ezi eziokwu na ụda olu nwere obi ọma.", exceeds: "Ụdị azịza ọ bụla nwere ihe nnọchi na ndetu banyere ihe a ga-agbanwe maka onye ọ bụla." },
      { name: "Azịza nyocha na mkpesa", objective: "O3", notYet: "Azịza na-arụ ụka, na-ata ụta ma ọ bụ na-ekesa ozi nzuzo.", meets: "Azịza dị jụụ, na-arịọ mgbaghara ebe ọ dị mkpa ma na-enye ndozi ma ọ bụ ụzọ isi kparịta na nzuzo.", exceeds: "Gụnyere nzọụkwụ nsochi iji lelee na e doziri nsogbu ahụ." },
      { name: "Nchịkọta nzaghachi", objective: "O4", notYet: "Okwu na-erughị 15, ma ọ bụ aha ka dị n'ime ya.", meets: "Opekata mpe okwu 15 e wepụrụ ozi nzuzo, e hazịrị n'isiokwu, na nsogbu atọ kacha mkpa n'usoro.", exceeds: "Na-egosi isiokwu ndị e lelere na mperi AI ọ bụla e doziri." },
      { name: "Atụmatụ ụbọchị 30", objective: "O6", notYet: "Omume enweghị onye na-ahụ maka ya ma ọ bụ ihe nlele.", meets: "Otu omume, onye na-ahụ maka ya na ihe nlele maka nsogbu ọ bụla kacha mkpa, nwere ọnụ ọgụgụ mmalite.", exceeds: "Gụnyere otu a ga-esi gwa ndị ahịa ihe gbanwere." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Oge azịza n'ọkara nye ajụjụ ndị ahịa, tupu ihe ọmụmụ a na ụbọchị 30 mgbe ọ gasịrị",
      "Akara nyocha n'ọkara na ọnụ ọgụgụ mkpesa n'izu, tupu na ụbọchị 60 mgbe ọ gasịrị",
      "Nzukọ ndị mezuru opekata mpe otu gburugburu mmezi ụbọchị 30 (nnyocha nsochi)"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị",
      "Ngwa enyemaka AI n'efu (ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini)",
      "Akwụkwọ maka ụdị azịza njikere, na spredshiit ma ọ bụ akwụkwọ maka nchịkọta nzaghachi na atụmatụ",
      "Opekata mpe okwu ndị ahịa 15 ezi ma ọ bụ nke omume e wepụrụ ozi nzuzo",
      "Ihe dị ka nkeji 60 maka nkuzi na nnwale, gbakwunyere oge iji mee ngwugwu ahụ"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee mee otu isi n'otu nnọkọ; deenụ otu ụdị azịza njikere na otu azịza mkpesa n'ihuenyo unu niile na-ahụ.",
      "Nye ndị na-amụ ihe na-enweghị ezi nzaghachi ugbu a okwu omume ole na ole.",
      "Lelee na e wepụrụ aha, nọmba ekwentị na ozi ahụike tupu okwu ọ bụla abanye na AI.",
      "Mee egwuregwu onye ahịa iwe na-ewe ka ndị na-amụ ihe mee ige ntị, ịrịọ mgbaghara, idozi, ịsochi n'olu dị elu.",
      "Jiri rubric tụọ akara ngwugwu ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

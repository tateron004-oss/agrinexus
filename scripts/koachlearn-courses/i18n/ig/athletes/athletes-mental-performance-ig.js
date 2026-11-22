"use strict";

// Koach Learn course (Igbo translation of athletes/athletes-mental-performance.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.
// General education only: points to coaches, athletic trainers, school counselors, licensed mental health professionals and the 988 Lifeline. No therapy or diagnosis.

module.exports = {
  id: "athletes-mental-performance-ig",
  lang: "ig",
  translationOf: "athletes-mental-performance",
  category: "Athletes",
  name: "Ike Uche na Ilekwasị Anya n'Egwuregwu",
  skills: "Iku ume igbe (box breathing) iji mee ka obi dajụọ, Ide okwu ntụaka na okwu ị na-agwa onwe gị, Ịhazi usoro tupu egwuregwu, Ịmalitegharị ọhụrụ mgbe i mehiere, Ịmara mgbe na ebe ị ga-enweta enyemaka",
  outcome: "ịhazi ma jiri usoro e dere ede tupu egwuregwu nke nwere iku ume iji dajụọ, okwu ntụaka na atụmatụ maka mgbe i mehiere, ma mara onye ị ga-akpọ mgbe nchekasị karịrị ụjọ egwuregwu.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị egwuregwu na-atụ ụjọ, na-atụfu uche ha, ma ọ bụ na-esiri ike ịlọghachi mgbe ha mehiere, na maka ndị nchịkwa (coach) chọrọ ịkụzi nka uche dị mfe. Ndị a bụ nka nkịtị maka ime nke ọma n'egwuregwu, ọ bụghị ọgwụgwọ uche (therapy).",
    "Ị ga-eme omume nka ndị egwuregwu na-eji n'ọkwa ọ bụla: iku ume nwayọọ, okwu ọma ị na-agwa onwe gị, usoro na ịmalitegharị ọsọ ọsọ. Ị ga-eji ngwa enyemaka AI dee usoro gị, ị ga-amụtakwa mgbe ị ga-agwa ezigbo mmadụ okwu.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Ọ bụrụ na ị na-enwe mmetụta na ị nọghị n'udo ma ọ bụ na olileanya agwụla, kpọọ ma ọ bụ zipu ozi na 988 na United States, ma ọ bụ gwa okenye ị tụkwasịrị obi ozugbo."
  ],
  finalTask: "Dee kaadị usoro tupu egwuregwu nke otu peeji: usoro oge tupu egwuregwu gị, iku ume igbe iji dajụọ, okwu ntụaka atọ, na nzọụkwụ atọ maka mgbe i mehiere. Jiri ngwa enyemaka AI dozie okwu ya, mee ya n'ọzụzụ abụọ, wee gosi onye nchịkwa gị ma dozie ya.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị egwuregwu nọ n'ụlọ akwụkwọ sekọndrị, mahadum na klọb na-atụ ụjọ, na-atụfu uche ha ma ọ bụ na-esiri ike ịlọghachi mgbe ha mehiere, na ndị nchịkwa chọrọ ịkụzi nka uche dị mfe.",
    startingPoint: "Ha na-asọ mpi mgbe niile ma na-atụ ụjọ n'ụbọchị egwuregwu. Ọtụtụ enweghị usoro e dere ede, na-agwa onwe ha okwu ọjọọ n'amaghị, ma amaghị onye ha ga-akpọ mgbe nchekasị karịrị ụjọ.",
    gap: "Ụjọ a na-achịkwaghị na ichewe echiche banyere mperi na-ebelata otu ndị egwuregwu si eme, nchekasị dị ukwuu nwekwara ike ịdị a hụghị ya. Nka dị mfe a na-eme mgbe niile na-enyere ha aka ime nke ọma n'okpuru nrụgide, ịmakwa mgbe na ebe ha ga-enweta ezi enyemaka nwere ike ichebe ahụike na ndụ ha.",
    constraints: [
      "Okwu dị mfe, ihe dị ka ọkwa ịgụ akwụkwọ nke klas 7",
      "Naanị nka nkịtị maka ime nke ọma, ọ bụghị ọgwụgwọ uche ma ọ bụ nnọchi onye ndụmọdụ",
      "Ekwentị ma ọ bụ kọmputa nwere ngwa enyemaka AI n'efu, ma ọ bụ akwụkwọ",
      "Ihe dị ka nkeji 60 nke nkuzi, gbakwunyere omume n'ọzụzụ otu egwuregwu abụọ",
      "Ahụike uche bụ ihe nzuzo na ihe dị nro; nọmba enyemaka mberede (988, 911) bụ maka United States"
    ],
    prerequisites: "Ọ dịghị"
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe ị na-echeghachi banyere egwuregwu buru ibu na nso nso a", action: "ịkọwa ihe ịrịba ama ụjọ n'ahụ gị na n'echiche gị, na mgbe ha na-amalite", standard: "ma kpọọ aha opekata mpe ihe ịrịba ama abụọ n'ahụ na otu echiche" },
    { id: "O2", condition: "Tupu ọzụzụ ma ọ bụ n'oge ọzụzụ", action: "igosi iku ume igbe ugboro anọ", standard: "site n'iji ọnụ ọgụgụ anọ hà nhata, ma ọ bụ iku ume nwayọọ n'ejideghị ume ma ọ bụrụ na ijide ya adịghị gị mma" },
    { id: "O3", condition: "Mgbe e nyere gị echiche ọjọọ ị na-enwekarị", action: "ide okwu ntụaka atọ na-agwa ahụ gị ihe ọ ga-eme", standard: "nke okwu ntụaka ọ bụla nwere okwu otu ruo atọ ma bụrụ banyere ihe ị na-achịkwa" },
    { id: "O4", condition: "Site n'iji usoro oge ụbọchị egwuregwu gị", action: "ide usoro tupu egwuregwu site n'abalị tupu ụbọchị ahụ ruo mgbe a fụrụ opi mbụ", standard: "nwere naanị nzọụkwụ ị na-achịkwa, iku ume iji dajụọ, okwu ntụaka gị, na oge gị na onye nchịkwa gị lelere" },
    { id: "O5", condition: "Mgbe i mehiere n'egwuregwu ma ọ bụ n'ọzụzụ", action: "iji nzọụkwụ atọ ahụ: hapụ, dajụọ ma lekwasị anya ọzọ", standard: "ma mechaa nzọụkwụ atọ ahụ tupu egwu ọzọ, ma debe nyocha ya maka mgbe egwuregwu gwụrụ" },
    { id: "O6", condition: "Mgbe e nyere gị ihe ịrịba ama na nchekasị karịrị ụjọ", action: "ịmata ihe ịrịba ama ịdọ aka na ntị ma kpọọ aha onye ị ga-akpọ, gụnyere 988 na 911", standard: "ma kpọọ aha opekata mpe mmadụ abụọ ị tụkwasịrị obi na nọmba ziri ezi maka nsogbu uche dị ukwuu (crisis) na maka ihe mberede" }
  ],
  chapters: [
    {
      name: "Isi 1: Udo na ilekwasị anya",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịghọta ụjọ ụbọchị egwuregwu",
          minutes: 4,
          goal: "Hụ ihe ịrịba ama ụjọ gị ma lee ha anya dị ka ike ị nwere ike ịchịkwa.",
          text: [
            "Tupu egwuregwu buru ibu, obi gị na-akụ ọsọ ọsọ, aka gị nwere ike ịgba ọsụsọ, afọ gị nwekwara ike ịma jijiji. Nke a bụ ahụ gị na-akwado ime ihe. Ntakịrị ya na-enyere aka; ọ bụrụ na ọ karịrị, ọ nwere ike ime ka ahụ gị kpọchie ma ọ bụ mee ka ị mee ọsọ ọsọ.",
            "Onye ọ bụla na-enwe ya, gụnyere ndị egwuregwu ọkachamara. Nka a abụghị ime ka ụjọ pụọ kpamkpam, kama ịhụ ya na ibelata ya ruo ọkwa na-enyere gị aka.",
            "Malite site n'ịhụ ya. Gịnị ka ị na-enwe n'ahụ gị, olee echiche na-abata, oleekwa mgbe ha na-amalite? Ide ya ede na-eme ka ọ dị mfe ịchịkwa."
          ],
          words: [["Ụjọ (nerves)", "otu ahụ si eme n'onwe ya tupu ihe dị mkpa: obi na-akụ ọsọ ọsọ, aka na-agba ọsụsọ, afọ na-ama jijiji."], ["Ọkwa mkpali (arousal level)", "otu ike gị si dị elu, site n'udo nke ukwuu ruo n'ike gbagwojuru anya nke ukwuu."]],
          slides: [
            { title: "Ụjọ bụ ihe nkịtị", bullets: ["Obi na-akụ ọsọ ọsọ, aka na-agba ọsụsọ, afọ na-ama jijiji", "Ahụ gị na-akwado onwe ya", "Ndị ọkachamara na-enwekwa ya"] },
            { title: "Nka ahụ", bullets: ["Ọ bụghị enweghị ụjọ ọ bụla", "Ọkwa ziri ezi maka gị"] },
            { title: "Malite site n'ịhụ ya", bullets: ["Gịnị ka m na-enwe n'ahụ m?", "Olee echiche na-abata?", "Olee mgbe ha na-amalite?"] }
          ],
          tryIt: "Chee banyere egwuregwu buru ibu gị ikpeazụ. Dee ihe ịrịba ama atọ n'ahụ gị na echiche abụọ i nwere tupu ọ malite, na mgbe ha malitere.",
          youCanNow: "ịhụ ihe ịrịba ama ụjọ gị ma kọwaa ha.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ afọ na-ama jijiji tupu egwuregwu?", options: ["Ihe ịrịba ama na ị gaghị egwu egwu", "Ihe ịrịba ama na ike agwụla gị", "Ahụ gị na-akwado ime ihe", "Ihe ịrịba ama na ọ na-arịa gị ọrịa"], answer: 2, why: "Ihe ịrịba ama ndị a n'ahụ bụ ahụ gị na-akwado onwe ya; nka ahụ bụ ịchịkwa ha." },
            { objective: "O1", q: "Ị chọrọ ịmalite ịchịkwa ụjọ gị. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Dee ihe ị na-enwe, ihe ị na-eche na mgbe ọ na-amalite", "Gbalịa ime ka ụjọ ahụ pụọ kpamkpam", "Leghara ha anya kpamkpam", "Hapụ ịkwado ahụ (warm-up)"], answer: 0, why: "Ịhụ ya na ide ya ede na-eme ka ụjọ dị mfe ịchịkwa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Iku ume igbe: ịdajụ n'ime sekọnd 60",
          minutes: 5,
          goal: "Jiri iku ume igbe mee ka ahụ gị dajụọ n'ime ihe dị ka otu nkeji.",
          text: [
            "Iku ume nwayọọ bụ otu n'ime ụzọ kachasị ọsọ isi mee ka ahụ gị dajụọ. Iku ume igbe dị mfe: kuo ume banye ka ị na-agụ ruo anọ, jide ya ruo anọ, kupụ ume ruo anọ, jide ya ruo anọ. Megharịa ya ugboro anọ.",
            "Ị nwere ike ime ya n'oche ndị na-echere, n'ahịrị free-throw site n'ọnụ ọgụgụ dị mkpụmkpụ, n'ime ụlọ mgbanwe uwe, ma ọ bụ tupu ule. Mee ya mgbe obi dị gị jụụ ka ọ rụọ ọrụ mgbe ị na-atụ ụjọ.",
            "Ọ bụrụ na ijide ume adịghị gị mma, hapụ ijide ya, naanị kuo ume banye nwayọọ ma kupụ ya nwayọọ karịa. Kwụsị ma ọ bụrụ na isi na-atụ gị ọkpọ (dizzy)."
          ],
          steps: ["Kuo ume banye site n'imi ruo 4.", "Jide ya ruo 4.", "Kupụ ume nwayọọ ruo 4.", "Jide ya ruo 4.", "Megharịa ya ugboro 4."],
          words: [["Iku ume igbe (box breathing)", "iku ume banye, ijide ya, ikupụ ya na ijide ya ọzọ n'ọnụ ọgụgụ hà nhata, dị ka akụkụ anọ nke igbe."]],
          slides: [
            { title: "Iku ume igbe", bullets: ["Banye 4", "Jide 4", "Pụọ 4", "Jide 4"] },
            { title: "Ebe ị ga-eji ya", bullets: ["Oche ndị na-echere ma ọ bụ ụlọ mgbanwe uwe", "Tupu free throw ma ọ bụ serve", "Tupu ule"] },
            { title: "Ndụmọdụ", bullets: ["Mee ya mgbe obi dị gị jụụ", "Hapụ ijide ume ma ọ bụrụ na ọ adịghị gị mma", "Kwụsị ma ọ bụrụ na isi na-atụ gị ọkpọ"] }
          ],
          tryIt: "Mee iku ume igbe ugboro anọ ugbu a. Tụọ otu ahụ gị si kpọchie site na 1 ruo 10 tupu na mgbe i mechara.",
          youCanNow: "iji iku ume igbe mee ka ahụ gị dajụọ n'ime ihe dị ka otu nkeji.",
          quickCheck: [
            { objective: "O2", q: "Ugboro ole ka nkuzi a kwuru ka i mee iku ume igbe?", options: ["Otu", "Iri", "Anọ", "Iri abụọ"], answer: 2, why: "Kuo ume banye 4, jide 4, kupụ 4, jide 4, ma megharịa ya ugboro anọ." },
            { objective: "O2", q: "Isi na-atụ gị ọkpọ mgbe ị na-eme iku ume igbe. Gịnị ka ị ga-eme?", options: ["Jide ume gị ogologo oge karịa", "Kwụsị", "Kuo ume ọsọ ọsọ", "Gaa n'ihu ugboro iri ọzọ"], answer: 1, why: "Nkuzi ahụ kwuru ka ị kwụsị ma ọ bụrụ na isi na-atụ gị ọkpọ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Okwu ntụaka na okwu ị na-agwa onwe gị",
          minutes: 5,
          goal: "Dee okwu ntụaka atọ ma gbanwee okwu ọjọọ ị na-agwa onwe gị ka ọ bụrụ ntụziaka bara uru.",
          text: [
            "Okwu ị na-agwa onwe gị bụ ihe ị na-ekwu n'ime isi gị. \"Atụfula\" na-etinye foto nke ịtụfu n'uche gị. \"Wepụ ya nwayọọ, soro ya\" na-agwa ahụ gị ihe ọ ga-eme.",
            "Okwu ntụaka bụ okwu otu ruo atọ na-eduzi uche gị: \"anya elu\", \"ụkwụ ọsọ\", \"egwu ọzọ\", \"guzosie ike\". Họrọ okwu banyere ihe ị na-achịkwa, ọ bụghị banyere akara egwuregwu (score).",
            "Ngwa enyemaka AI nwere ike inyere aka. Nwaa: \"Abụ m onye na-eme serve na volleyball. Mgbe ụjọ na-atụ m, m na-eche 'etinyela bọọlụ n'ụgbụ'. Nye m okwu ntụaka ise dị mkpụmkpụ na-agwa m ihe m ga-eme kama.\" Họrọ ndị dị ka gị."
          ],
          steps: ["Dee otu echiche ọjọọ ị na-enwekarị.", "Jụọ: gịnị ka m chọrọ ka ahụ m mee kama?", "Gbanwee ya ka ọ bụrụ okwu 1-3.", "Họrọ okwu ntụaka atọ ma mee omume ikwu ha."],
          words: [["Okwu ị na-agwa onwe gị (self-talk)", "okwu ị na-ekwu n'ime isi gị nye onwe gị."], ["Okwu ntụaka (cue word)", "okwu dị mkpụmkpụ na-eduzi uche gị n'ihe ị ga-eme."]],
          slides: [
            { title: "Okwu i na-agwa onwe gị na-eduzi omume", bullets: ["\"Atụfula\" -> na-egosi foto ịtụfu", "\"Wepụ ya nwayọọ\" -> na-agwa gị ihe ị ga-eme"] },
            { title: "Ezigbo okwu ntụaka", bullets: ["Okwu 1-3", "Banyere ihe ị na-achịkwa", "\"Anya elu\" \"Ụkwụ ọsọ\" \"Egwu ọzọ\""] },
            { title: "AI nwere ike inyere aka", bullets: ["Nye ya echiche ọjọọ gị", "Rịọ ya okwu ntụaka 5 dị mkpụmkpụ na-agwa gị ihe ị ga-eme", "Debe ndị dabara gị"] }
          ],
          tryIt: "Dee otu echiche ọjọọ ị na-enwe n'egwuregwu. Jiri ngwa enyemaka AI nweta okwu ntụaka ise na-agwa gị ihe ị ga-eme kama. Họrọ atọ kacha mma.",
          youCanNow: "ide okwu ntụaka ma gbanwee okwu ọjọọ ị na-agwa onwe gị ka ọ bụrụ ntụziaka bara uru.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ okwu ntụaka?", options: ["Okwu ogologo tupu egwuregwu", "Okwu banyere akara egwuregwu", "Okwu onye mmegide gị na-ekwu", "Okwu otu ruo atọ na-eduzi uche gị"], answer: 3, why: "Okwu ntụaka bụ okwu dị mkpụmkpụ dị ka \"anya elu\" na-eduzi uche gị." },
            { objective: "O3", q: "Tupu penalty kick, ị na-echekarị \"atụfula\". Gịnị ka ị ga-agbanwe ya ka ọ bụrụ?", options: ["\"Atụfula ọzọ\"", "\"Kụọ ya nwayọọ, soro ya\"", "\"Anyị ga-emeri ma ọ bụrụ na m tụfuo\"", "\"Ka ọ banye\""], answer: 1, why: "Okwu ọma ị na-agwa onwe gị na-agwa ahụ gị ihe ọ ga-eme, ọ bụghị ihe ọ ga-ezere." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Udo na ilekwasị anya",
        questions: [
          { objective: "O1", q: "Tupu egwuregwu buru ibu, obi gị na-akụ ọsọ ọsọ. Nke a pụtara:", options: ["Ihe adịghị mma n'ahụ gị", "Ị kwesịrị ịkwụsị", "Ahụ gị na-akwado ime ihe", "Ị dịghị mma ezu"], answer: 2, why: "Ụjọ bụ otu ahụ si eme n'onwe ya tupu oge dị mkpa." },
          { objective: "O1", q: "Gịnị bụ ebumnuche n'ihe gbasara ụjọ?", options: ["Ibelata ya ruo ọkwa na-enyere gị aka", "Ime ka ọ pụọ kpamkpam", "Ileghara ya anya mgbe niile", "Ime ka ọ bawanye"], answer: 0, why: "Ntakịrị ụjọ na-enyere aka; nka ahụ bụ ịchịkwa ọkwa ya." },
          { objective: "O2", q: "Kedu ọnụ ọgụgụ dị n'iku ume igbe?", options: ["Banye 1, pụọ 10", "Banye 10, jide 10", "Naanị iku ume ọsọ ọsọ", "Banye 4, jide 4, pụọ 4, jide 4"], answer: 3, why: "Ọnụ ọgụgụ hà nhata dị ka akụkụ nke igbe." },
          { objective: "O3", q: "Kedu nke bụ okwu ntụaka bara uru?", options: ["\"Emebila ya\"", "\"Ụkwụ ọsọ\"", "\"Atụfula\"", "\"Ụjọ na-ejide m mgbe niile\""], answer: 1, why: "Ọ na-agwa ahụ gị ihe ọ ga-eme." },
          { objective: "O2", q: "Olee mgbe ị kwesịrị ime omume iku ume igbe?", options: ["Naanị n'egwuregwu kachasị ukwuu", "Mgbe obi dị gị jụụ, ka ọ rụọ ọrụ mgbe ụjọ na-atụ gị", "Ọ dịghị mgbe ọ bụla", "Naanị n'abalị"], answer: 1, why: "Ime ya mgbe obi dị jụụ na-eme ka nka ahụ dị njikere n'okpuru nrụgide." }
        ]
      }
    },
    {
      name: "Isi 2: Usoro, ịmalitegharị na enyemaka",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịhazi usoro tupu egwuregwu",
          minutes: 5,
          goal: "Dee usoro tupu egwuregwu nwere oge na nzọụkwụ ị na-achịkwa.",
          text: [
            "Usoro bụ nzọụkwụ ị na-eme n'otu ụzọ ahụ tupu egwuregwu ọ bụla. Ọ na-enye uche gị ihe ọ maara nke ọma ọ ga-ejide, ka ị dị njikere n'agbanyeghị onye mmegide gị bụ.",
            "Usoro dị mfe: abalị tupu ụbọchị ahụ (kwakọba akpa gị, usoro ụra), nri ụbọchị egwuregwu, ịbịarute, ịkwado ahụ (warm-up), iku ume otu nkeji iji dajụọ, okwu ntụaka gị, na ilekwasị anya n'ọrụ mbụ gị n'egwuregwu ahụ.",
            "Mee ka nzọụkwụ ndị ahụ bụrụ banyere ihe ị na-achịkwa. Nkwenye ihe ọma (superstition) dị mma maka ọchị, mana usoro ahụ ka ga-arụ ọrụ ọ bụrụ na i chefuru sọks ihu ọma gị. Lelee oge ya na onye nchịkwa gị ka ọ dabara na warm-up otu egwuregwu gị."
          ],
          steps: ["Depụta ihe ị na-eme site n'abalị tupu ụbọchị ahụ ruo opi mbụ.", "Tinye iku ume iji dajụọ na okwu ntụaka gị.", "Kpọọ aha ọrụ mbụ gị n'egwuregwu ahụ.", "Debe naanị nzọụkwụ ị na-achịkwa.", "Lelee na ọ dabara na warm-up otu egwuregwu gị."],
          words: [["Usoro (routine)", "nzọụkwụ ị na-emeghachi n'otu ụzọ ahụ oge ọ bụla."], ["Ihe ị na-achịkwa", "ihe ị nwere ike ịhọrọ ma ọ bụ gbanwee n'onwe gị, dị ka mgbalị gị ma ọ bụ nkwadebe gị."]],
          slides: [
            { title: "Ihe mere usoro ji arụ ọrụ", bullets: ["Ihe ị maara nke ọma ị ga-ejide", "Dị njikere megide onye mmegide ọ bụla"] },
            { title: "Usoro dị mfe", bullets: ["Abalị tupu ya: kwakọba akpa, rahụ ụra", "Nri ụbọchị egwuregwu na ịbịarute", "Warm-up, iku ume iji dajụọ, okwu ntụaka", "Ọrụ mbụ gị n'egwuregwu ahụ"] },
            { title: "Debe ya n'ihe ị na-achịkwa", bullets: ["Ọ na-arụ ọrụ n'enweghị sọks ihu ọma", "Ọ dabara na warm-up otu egwuregwu"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI ka o mee ndepụta nzọụkwụ gị tupu egwuregwu ka ọ bụrụ usoro oge doro anya site n'abalị tupu ụbọchị ahụ ruo opi mbụ. Dozie ya ka ọ dabara n'ezi ụbọchị egwuregwu gị.",
          youCanNow: "ide usoro tupu egwuregwu e wuru n'elu nzọụkwụ ị na-achịkwa.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ usoro tupu egwuregwu?", options: ["Nzọụkwụ ị na-eme n'otu ụzọ ahụ tupu egwuregwu ọ bụla", "Atụmatụ ọhụrụ maka onye mmegide ọ bụla", "Ndepụta ihe ihu ọma", "Atụmatụ egwuregwu onye nchịkwa"], answer: 0, why: "Usoro bụ otu nzọụkwụ ahụ n'egwuregwu ọ bụla, na-enye uche gị ihe ọ maara nke ọma." },
            { objective: "O4", q: "Usoro gị dabere n'iyi otu uwe ihu ọma. Gịnị ka ị ga-eme?", options: ["Tinyekwuo nkwenye ihe ọma ndị ọzọ", "Agala egwuregwu ma ọ bụrụ na i chefuru uwe ahụ", "Hụ na usoro ahụ ka na-arụ ọrụ site na nzọụkwụ ị na-achịkwa", "Rịọ onye nchịkwa ka o webata uwe ọzọ"], answer: 2, why: "Mee ka nzọụkwụ ndị ahụ bụrụ banyere ihe ị na-achịkwa ka usoro ahụ rụọ ọrụ n'agbanyeghị." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịmalitegharị mgbe i mehiere",
          minutes: 5,
          goal: "Jiri nzọụkwụ atọ gafee mperi n'oge egwuregwu.",
          text: [
            "Onye egwuregwu ọ bụla na-emehie. Ihe dị mkpa bụ otu ọsọ ị si aga n'egwu ọzọ. Ichewe echiche banyere mperi na-ebutekarị nke ọzọ.",
            "Nzọụkwụ atọ: 1. Hapụ: omume ahụ na-ekwu \"ọ gwụla\", dị ka ihichapụ aka gị, imetụ akpụkpọ ụkwụ gị ma ọ bụ ikupụ ume. 2. Dajụọ: otu ume nwayọọ. 3. Lekwasị anya ọzọ: kwuo okwu ntụaka gị maka egwu ọzọ.",
            "Mgbe egwuregwu gwụrụ, ọ bụghị n'oge ya, lee mperi ahụ anya ka ị mụta ihe na ya ya na onye nchịkwa gị ma ọ bụ vidiyo. N'oge ahụ, naanị ọrụ gị bụ egwu ọzọ."
          ],
          steps: ["Hapụ: otu omume ahụ pụtara \"ọ gwụla\".", "Dajụọ: otu ume nwayọọ.", "Lekwasị anya ọzọ: kwuo okwu ntụaka egwu ọzọ gị.", "Mụta ihe na ya mgbe egwuregwu gwụrụ, ọ bụghị n'oge ya."],
          words: [["Ịmalitegharị (reset)", "usoro ọsọ ọsọ iji mee ka uche gị dị ọcha ma kwadebe maka oge na-esote."], ["Uche egwu ọzọ (next-play mindset)", "ilekwasị anya n'ihe na-abịa, ọ bụghị n'ihe mere ugbu a."]],
          slides: [
            { title: "Mperi na-eme", bullets: ["Ichewe ya na-ebute nke ọzọ", "Ọsọ ịmalitegharị dị mkpa"] },
            { title: "Nzọụkwụ atọ", bullets: ["1. Hapụ: omume ahụ \"ọ gwụla\"", "2. Dajụọ: otu ume nwayọọ", "3. Lekwasị anya ọzọ: okwu ntụaka egwu ọzọ"] },
            { title: "Mụta ihe ma emechaa", bullets: ["Lelee ya mgbe egwuregwu gwụrụ", "Ya na onye nchịkwa gị ma ọ bụ vidiyo"] }
          ],
          tryIt: "Họrọ omume ịhapụ gị na okwu ntụaka egwu ọzọ gị. N'ọzụzụ gị ọzọ, jiri nzọụkwụ atọ ahụ mgbe ọ bụla i mehiere, ma gụọ ugboro ole i jiri ya.",
          youCanNow: "iji nzọụkwụ atọ gafee mperi ọsọ ọsọ.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ nzọụkwụ ịhapụ n'ịmalitegharị mgbe i mehiere?", options: ["Ịrụ ụka na onye ọka ikpe egwuregwu (referee)", "Ichegharị mperi ahụ n'isi gị", "Ịgwa ndị otu gị ihe mehiere", "Omume ahụ na-ekwu \"ọ gwụla\""], answer: 3, why: "Ịhapụ bụ omume ahụ dị ka ihichapụ aka gị ma ọ bụ imetụ akpụkpọ ụkwụ gị." },
            { objective: "O5", q: "Bọọlụ e nyere gị ka i jide dapụrụ. Gịnị bụ ọrụ gị ugbu a?", options: ["Chee ihe mere o ji mee", "Hapụ, kuo otu ume nwayọọ ma kwuo okwu ntụaka egwu ọzọ gị", "Lee vidiyo ya ọzọ", "Rịọ ka i si n'ọgbọ pụọ"], answer: 1, why: "N'oge ahụ, naanị ọrụ gị bụ egwu ọzọ; mụta ihe na ya mgbe egwuregwu gwụrụ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mgbe ọ karịrị ụjọ: inweta enyemaka",
          minutes: 5,
          goal: "Mata ihe ịrịba ama na nchekasị chọrọ ezi enyemaka ma kpọọ aha onye ị ga-akpọ.",
          text: [
            "Nka uche na-enyere aka na nrụgide nkịtị. Mana mgbe ụfọdụ nchekasị na-akarị: obi na-ada gị mbà ọtụtụ ụbọchị, ihe ndị ị na-amasị adịghịzi atọ gị ụtọ, ị nweghị ike ịrahụ ụra ma ọ bụ iri nri, olileanya agwụla gị, ma ọ bụ ị na-eche banyere imerụ onwe gị ahụ. Nke ahụ abụghị adịghị ike, ọ bụkwaghị ihe iku ume ma ọ bụ chatbot AI nwere ike idozi.",
            "Gakwuru ezigbo mmadụ: nne ma ọ bụ nna gị ma ọ bụ okenye ị tụkwasịrị obi, onye nchịkwa gị, onye na-elekọta ahụike ndị egwuregwu (athletic trainer), onye ndụmọdụ ụlọ akwụkwọ, dọkịta otu egwuregwu gị, ma ọ bụ onye ọkachamara ahụike uche nwere ikike (licensed). Ọtụtụ ụlọ akwụkwọ na mahadum na-enye ndụmọdụ n'efu.",
            "Ọ bụrụ na gị ma ọ bụ onye ị maara nọ na nsogbu uche dị ukwuu (crisis) ma ọ bụ na-eche banyere igbu onwe ya na United States, kpọọ ma ọ bụ zipu ozi na 988, ma ọ bụ kparịta ụka na 988lifeline.org. Ọ bụ n'efu ma na-emeghe awa 24, ụbọchị 7 n'izu (24/7). N'ihe mberede, kpọọ 911."
          ],
          steps: ["Hụ ihe ịrịba ama na ọ karịrị ụjọ.", "Gwa okenye ị tụkwasịrị obi, onye nchịkwa, athletic trainer ma ọ bụ onye ndụmọdụ.", "Chọta ebe ndụmọdụ ụlọ akwụkwọ gị.", "Na nsogbu uche dị ukwuu: kpọọ ma ọ bụ zipu ozi na 988. N'ihe mberede: 911."],
          words: [["Onye ọkachamara ahụike uche nwere ikike", "onye ndụmọdụ, psychologist ma ọ bụ therapist a zụrụ azụ ma nwee ikike ọrụ."], ["988 Lifeline", "nọmba enyemaka n'efu nke US maka igbu onwe na nsogbu uche dị ukwuu (Suicide and Crisis Lifeline): kpọọ, zipu ozi ma ọ bụ kparịta ụka 24/7."]],
          slides: [
            { title: "Ọ karịrị ụjọ ma ọ bụrụ", bullets: ["Obi na-ada gị mbà ọtụtụ ụbọchị", "Ihe adịghịzi atọ gị ụtọ, ị naghị arahụ ụra ma ọ bụ iri nri", "Olileanya agwụla gị ma ọ bụ ị na-eche imerụ onwe gị ahụ"] },
            { title: "Gwa ezigbo mmadụ okwu", bullets: ["Okenye ị tụkwasịrị obi, onye nchịkwa, athletic trainer", "Onye ndụmọdụ ụlọ akwụkwọ ma ọ bụ dọkịta otu egwuregwu", "Onye ọkachamara ahụike uche nwere ikike"] },
            { title: "Na nsogbu uche dị ukwuu", bullets: ["Kpọọ ma ọ bụ zipu ozi na 988 (US), n'efu, 24/7", "Kparịta ụka na 988lifeline.org", "Ihe mberede: 911"] }
          ],
          sources: [{ name: "988 Suicide and Crisis Lifeline", url: "https://988lifeline.org/" }],
          tryIt: "Ọrụ ikpeazụ: dee kaadị usoro tupu egwuregwu gị nke otu peeji nwere iku ume iji dajụọ, okwu ntụaka atọ na nzọụkwụ atọ maka mgbe i mehiere. N'ala ya, dee aha mmadụ abụọ ị nwere ike ịgwa okwu na otu ị ga-esi kpọtụrụ ebe ndụmọdụ ụlọ akwụkwọ gị. Gosi onye nchịkwa gị kaadị ahụ.",
          youCanNow: "iji usoro uche egwuregwu gị ma mara mgbe na ebe ị ga-enweta ezi enyemaka.",
          quickCheck: [
            { objective: "O6", q: "Kedu nke bụ ihe ịrịba ama na nchekasị chọrọ ezi enyemaka?", options: ["Olileanya na-agwụ gị ọtụtụ ụbọchị", "Ụjọ tupu egwuregwu buru ibu", "Obi na-akụ ọsọ ọsọ n'ahịrị mmalite", "Aka na-agba ọsụsọ n'ahịrị free-throw"], answer: 0, why: "Obi ịda mbà ma ọ bụ enweghị olileanya ọtụtụ ụbọchị karịrị ụjọ nkịtị." },
            { objective: "O6", q: "Enyi gị zitere ozi na ọ na-eche banyere igbu onwe ya. Na United States, gịnị ka ị ga-eme?", options: ["Zobe ya", "Gwa ya ka o mee iku ume igbe", "Jụọ chatbot AI ihe ị ga-eme", "Gwa okenye ị tụkwasịrị obi ozugbo ma kesaa 988, ma ọ bụ kpọọ 911 ma ọ bụrụ na ọ nọ n'ihe egwu ugbu a"], answer: 3, why: "Ezigbo mmadụ ga-enyerịrị aka; 988 bụ nọmba nsogbu uche dị ukwuu, 911 bụ maka ihe mberede." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Usoro, ịmalitegharị na enyemaka",
        questions: [
          { objective: "O4", q: "Gịnị mere ndị egwuregwu ji eji usoro tupu egwuregwu?", options: ["Iji hapụ warm-up", "Iji masị ndị na-ekiri", "Iji zere onye nchịkwa", "Iji nye uche ihe ọ maara nke ọma ma dị njikere"], answer: 3, why: "Usoro na-eme ụzọ ị maara nke ọma iji dị njikere." },
          { objective: "O4", q: "Kedu nzọụkwụ n'usoro ị na-achịkwa?", options: ["Iku ume otu nkeji gị iji dajụọ", "Mkpebi onye ọka ikpe egwuregwu", "Ihu igwe", "Ndị egwuregwu otu nke ọzọ"], answer: 0, why: "Gị na-ahọrọ ime iku ume gị iji dajụọ." },
          { objective: "O5", q: "Gịnị bụ nzọụkwụ 1 n'ịmalitegharị mgbe i mehiere?", options: ["Rụọ ụka na referee", "Chegharịa ya n'isi gị", "Hapụ: omume ahụ pụtara \"ọ gwụla\"", "Pụọ n'egwuregwu ahụ"], answer: 2, why: "Ịhapụ site n'omume ahụ na-enyere gị aka ịhapụ ya." },
          { objective: "O5", q: "Olee mgbe ị kwesịrị ịmụ banyere mperi?", options: ["N'etiti egwu na-esote", "Ọ dịghị mgbe ọ bụla", "Mgbe onye nchịkwa na-ekwu okwu", "Mgbe egwuregwu gwụrụ, ya na onye nchịkwa gị ma ọ bụ vidiyo"], answer: 3, why: "N'oge egwuregwu, naanị ọrụ gị bụ egwu ọzọ." },
          { objective: "O6", q: "Onye otu gị gwara gị na olileanya agwụla ya ma na-ekwu maka imerụ onwe ya ahụ. Gịnị ka ị ga-eme?", options: ["Gwa ya ka o mee iku ume igbe", "Gwa okenye ị tụkwasịrị obi ozugbo ma kesaa 988 Lifeline", "Zobe ya", "Gwa ya ka ọ jụọ chatbot"], answer: 1, why: "Nke a chọrọ ezi mmadụ na enyemaka nsogbu uche ugbu a." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ike Uche na Ilekwasị Anya n'Egwuregwu",
    questions: [
      { objective: "O1", q: "Aka na-agba ọsụsọ tupu egwuregwu bụ:", options: ["Ihe ịrịba ama ka ị kwụsị", "Ihe egwu mgbe niile", "Ihe ịrịba ama nkịtị nke ụjọ", "Imebi iwu egwuregwu"], answer: 2, why: "Ọ bụ ahụ gị na-akwado onwe ya." },
      { objective: "O1", q: "Ndị egwuregwu ọkachamara ọ na-atụ ụjọ?", options: ["Ee, ha na-achịkwa ya", "Mba, ọ dịghị mgbe", "Naanị ndị ọhụrụ", "Naanị n'ọzụzụ"], answer: 0, why: "Onye ọ bụla na-atụ ụjọ; ndị ọkachamara na-achịkwa ya." },
      { objective: "O1", q: "Nzọụkwụ mbụ n'ịchịkwa ụjọ bụ:", options: ["Ịhụ ihe ị na-enwe na ihe ị na-eche", "Ileghara ha anya", "Iti mkpu", "Ịhapụ egwuregwu ahụ"], answer: 0, why: "Ị nweghị ike ịchịkwa ihe ị hụghị." },
      { objective: "O2", q: "Iku ume igbe nwere akụkụ ole hà nhata?", options: ["Abụọ", "Atọ", "Anọ", "Ise"], answer: 2, why: "Banye, jide, pụọ, jide." },
      { objective: "O2", q: "Ọ bụrụ na ijide ume adịghị gị mma, ị nwere ike:", options: ["Ijide ya ogologo oge karịa", "Ịhapụ ijide ya ma kupụ ume nwayọọ", "Ịkwụsị iku ume", "Iku ume ọsọ ọsọ nke ukwuu"], answer: 1, why: "Iku ume nwayọọ n'ejideghị ya ka na-eme ka obi dajụọ." },
      { objective: "O3", q: "Okwu ị na-agwa onwe gị bụ:", options: ["Ịgwa referee okwu", "Abụ otu egwuregwu", "Ihe e dere n'ịntanetị", "Ihe ị na-ekwu nye onwe gị n'ime isi gị"], answer: 3, why: "Ọ bụ olu dị n'ime gị." },
      { objective: "O3", q: "Kedu okwu ị na-agwa onwe gị na-enyekwu aka?", options: ["\"Atụfula\"", "\"Ụjọ na-ejide m mgbe niile\"", "\"Wepụ ya nwayọọ, soro ya\"", "\"Olileanya adịghị\""], answer: 2, why: "Ọ na-agwa ahụ gị ihe ọ ga-eme." },
      { objective: "O3", q: "Ezigbo okwu ntụaka na-elekwasị anya na:", options: ["Akara egwuregwu", "Ndị na-ekiri", "Otu nke ọzọ", "Ihe ị na-achịkwa"], answer: 3, why: "Chịkwaa ihe ị nwere ike ịchịkwa." },
      { objective: "O3", q: "Olee otu AI nwere ike isi nyere aka n'okwu ntụaka?", options: ["Ọ nwere ike ịtụ aro okwu dị mkpụmkpụ na-agwa gị ihe ị ga-eme, ị ga-ahọrọ n'ime ha", "Ọ nwere ike igwuri egwu n'ọnọdụ gị", "Ọ nwere ike ịchọpụta ọrịa nchekasị (anxiety)", "Ọ nweghị ike inye aka ma ọlị"], answer: 0, why: "AI maara ịhazi okwu; gị na-ahọrọ ihe dabara." },
      { objective: "O4", q: "Usoro tupu egwuregwu kwesịrị ịka na-arụ ọrụ ma ọ bụrụ:", options: ["Ị merie", "I chefuo sọks ihu ọma gị", "Onye nchịkwa apụọ", "Mmiri ozuzo"], answer: 1, why: "E wuru ya n'elu nzọụkwụ ị na-achịkwa, ọ bụghị ihu ọma." },
      { objective: "O4", q: "Onye ka i kwesịrị iso lelee oge usoro gị?", options: ["Onye mmegide gị", "Onye ị na-amaghị n'ịntanetị", "Onye nchịkwa gị", "Ọ dịghị onye"], answer: 2, why: "Ọ ga-adabarịrị na warm-up otu egwuregwu." },
      { objective: "O5", q: "Gịnị bụ uche egwu ọzọ?", options: ["Ilekwasị anya n'ihe na-abịa, ọ bụghị n'ihe mere", "Ichegharị mperi", "Ịta ndị otu gị ụta", "Ilekwasị anya na bọọdụ akara"], answer: 0, why: "Egwu ọzọ bụ naanị nke ị nwere ike ịgbanwe." },
      { objective: "O5", q: "Gịnị bụ nzọụkwụ 2 n'ịmalitegharị mgbe i mehiere?", options: ["Rụọ ụka", "Pụọ n'ọgbọ egwuregwu", "Lelee mgbasa ozi ọha (social media)", "Otu ume nwayọọ"], answer: 3, why: "Hapụ, dajụọ site n'otu ume, lekwasị anya ọzọ." },
      { objective: "O5", q: "Gịnị bụ nzọụkwụ 3 n'ịmalitegharị mgbe i mehiere?", options: ["Tie mkpu", "Lekwasị anya ọzọ site n'okwu ntụaka egwu ọzọ gị", "Chegharịa mperi ahụ", "Lee ndị na-ekiri anya"], answer: 1, why: "Okwu ntụaka na-eduzi gị n'ọrụ na-esote." },
      { objective: "O6", q: "Kedu nke bụ ihe ịrịba ama na nchekasị karịrị ụjọ?", options: ["Afọ na-ama jijiji tupu egwuregwu", "Obi na-ada mbà ọtụtụ ụbọchị na ihe adịghịzi atọ gị ụtọ", "Obi ụtọ na mkpali", "Obi na-akụ ọsọ ọsọ tupu egwuregwu amalite"], answer: 1, why: "Obi ịda mbà na-adịgide adịgide chọrọ ezi enyemaka." },
      { objective: "O6", q: "Chatbot AI ọ nwere ike ịnọchi onye ndụmọdụ?", options: ["Ee", "Naanị na ngwụsị izu", "Naanị maka ndị egwuregwu", "Mba, gwa ezigbo mmadụ okwu"], answer: 3, why: "Nchekasị dị ukwuu chọrọ onye a zụrụ azụ." },
      { objective: "O6", q: "Onye ka ị nwere ike ịgwa okwu banyere nchekasị dị ukwuu?", options: ["Okenye ị tụkwasịrị obi, onye nchịkwa, athletic trainer ma ọ bụ onye ndụmọdụ ụlọ akwụkwọ", "Naanị onwe gị", "Ọ dịghị onye", "Ndị mmegide"], answer: 0, why: "Ndị a nwere ike inyere aka ma ọ bụ jikọọ gị na enyemaka." },
      { objective: "O6", q: "Na US, nọmba enyemaka maka nsogbu uche dị ukwuu bụ:", options: ["411", "311", "988", "0"], answer: 2, why: "Kpọọ ma ọ bụ zipu ozi na 988 maka Suicide and Crisis Lifeline." },
      { objective: "O6", q: "Olee mgbe 988 Lifeline na-emeghe?", options: ["Naanị ụbọchị ọrụ", "Naanị n'abalị", "Naanị n'oge egwuregwu", "24/7"], answer: 3, why: "Ọ bụ n'efu ma na-emeghe awa 24 kwa ụbọchị, ụbọchị niile." },
      { objective: "O6", q: "N'ihe mberede ebe mmadụ nọ n'ihe egwu ugbu a, ị na-akpọ:", options: ["Naanị onye nchịkwa gị", "911", "Enyi gị ma emechaa", "Ọ dịghị onye"], answer: 1, why: "911 bụ maka ihe mberede na-eme ugbu a." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [2, 3, 6, 9, 12, 14, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Usoro oge tupu egwuregwu", objective: "O4", notYet: "Nzọụkwụ enweghị oge, ma ọ bụ dabere n'ihe onye egwuregwu ahụ anaghị achịkwa.", meets: "Usoro oge site n'abalị tupu ụbọchị ahụ ruo opi mbụ nwere naanị nzọụkwụ a na-achịkwa, nke ya na onye nchịkwa lelere.", exceeds: "Ọ na-akpọ aha ọrụ mbụ onye egwuregwu ahụ n'egwuregwu ma dabara kpọmkwem na warm-up otu egwuregwu." },
      { name: "Iku ume iji dajụọ", objective: "O2", notYet: "Enweghị iku ume iji dajụọ, ma ọ bụ ọnụ ọgụgụ ya edoghị anya.", meets: "Iku ume igbe (ma ọ bụ iku ume nwayọọ n'ejideghị ume) dị na kaadị ahụ n'oge a kara aka, e mekwara ya n'ọzụzụ abụọ.", exceeds: "Ọ gụnyere ụdị dị mkpụmkpụ maka oge n'ime egwuregwu dị ka n'ahịrị free-throw." },
      { name: "Okwu ntụaka", objective: "O3", notYet: "Okwu ntụaka erughị atọ, ma ọ bụ ha bụ banyere akara egwuregwu ma ọ bụ ihe a ga-ezere.", meets: "Okwu ntụaka atọ, nke ọ bụla nwere okwu otu ruo atọ, banyere ihe onye egwuregwu ahụ na-achịkwa.", exceeds: "Okwu ntụaka ọ bụla na-anọchi otu echiche ọjọọ a kpọrọ aha nke onye egwuregwu ahụ na-enwekarị." },
      { name: "Ịmalitegharị mgbe i mehiere", objective: "O5", notYet: "Otu ma ọ bụ karịa n'ime nzọụkwụ atọ ahụ adịghị.", meets: "E dere hapụ, dajụọ na lekwasị anya ọzọ ya na omume na okwu ntụaka nke onye egwuregwu ahụ n'onwe ya.", exceeds: "Onye egwuregwu ahụ na-akọ na o jiri ya n'ọzụzụ ma dee ihe ọ ga-enyocha mgbe egwuregwu gwụrụ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara kaadị usoro ahụ ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla",
      "Ndị na-amụ ihe kwuru na ha ka na-eji usoro ha na ịmalitegharị mgbe ha mehiere mgbe ụbọchị 30 gafere (nnyocha nsochi)",
      "Ndị na-amụ ihe nwere ike ịkpọ aha onye ha ga-akpọ na 988 Lifeline n'oge nsochi",
      "Ndị nchịkwa na-akọ na ha tinyere iku ume iji dajụọ ma ọ bụ ịmalitegharị mgbe e mehiere n'ọzụzụ otu egwuregwu ha"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Akwụkwọ ma ọ bụ ndetu n'ekwentị maka kaadị usoro",
      "Ngwa enyemaka AI n'efu (ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini), ọ bụrụ na ị chọrọ",
      "Oge egwuregwu gị ọzọ na atụmatụ warm-up otu egwuregwu gị",
      "Ozi kọntaktị onye ndụmọdụ ụlọ akwụkwọ gị ma ọ bụ athletic trainer",
      "Ihe dị ka nkeji 60, gbakwunyere omume n'ọzụzụ otu egwuregwu abụọ"
    ],
    facilitatorNotes: [
      "Kwuo nke ọma na ndị a bụ nka maka ime nke ọma n'egwuregwu, ọ bụghị ọgwụgwọ uche; agbalịla inye ndị egwuregwu ndụmọdụ uche n'ime otu.",
      "Tupu Nkuzi 6, chọpụta ebe ndụmọdụ ụlọ akwụkwọ gị ma kesaa ya ya na 988 na 911.",
      "Ọ bụrụ na onye egwuregwu kwuru na ọ nọ na nsogbu uche dị ukwuu ma ọ bụ na-eche banyere imerụ onwe ya ahụ, nọnyere ya ma kpọta okenye a tụkwasịrị obi ma ọ bụ onye ọkachamara ozugbo.",
      "Meenụ iku ume igbe ọnụ mgbe obi dị jụụ; gwa ndị egwuregwu ka ha hapụ ijide ume ma ọ bụ kwụsị ma ọ bụrụ na isi na-atụ ha ọkpọ.",
      "Debe kaadị usoro na nzuzo ma ọ bụrụ na onye egwuregwu ahụ ahọrọghị igosi onye nchịkwa ya."
    ]
  }
};

"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-livestock-nutrition.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FEEDIPEDIA = { name: "Feedipedia (INRAE, CIRAD, AFZ àti FAO): ètò ìsọfúnni nípa oúnjẹ ẹran", url: "https://www.feedipedia.org/" };
const FEEDIPEDIA_MAIZE = { name: "Feedipedia: Àgbàdo (protein nǹkan bí 8 sí 10.5% ti dry matter)", url: "https://www.feedipedia.org/node/556" };
const FEEDIPEDIA_SOY = { name: "Feedipedia: Kéèkì sóyà (soybean meal; protein ní ìbámu pẹ̀lú irú rẹ̀)", url: "https://www.feedipedia.org/node/674" };
const ICIPE_PUSHPULL = { name: "icipe: Ọ̀nà push-pull (desmodium, Napier àti Brachiaria gẹ́gẹ́ bí koríko ẹran)", url: "https://www.icipe.org/impacts/demonstration-research-impacts-communities/push-pull-technology" };
const TENNESSEE_PEARSON = { name: "University of Tennessee Extension: Ìwé iṣẹ́ àṣeṣe nípa oúnjẹ ẹran (igun mẹ́rin Pearson)", url: "https://animalscience.tennessee.edu/wp-content/uploads/sites/7/2020/07/BeefFeedstuffsActivityPacket.pdf" };
const FAO_SILAGE = { name: "FAO: Ọ̀nà kíkórè àti ṣíṣe silage (silage ní àwọn ilẹ̀ olóoru)", url: "https://www.fao.org/4/x8486e/x8486e0w.htm" };
const FAO_SILAGE_SMALL = { name: "FAO: Ṣíṣe silage fún àwọn àgbẹ̀ kékeré (ìparí: silage inú àpò, ọ̀nà tí owó rẹ̀ kéré)", url: "https://www.fao.org/4/x8486e/x8486e13.htm" };
const ILRI_MYCO = { name: "ILRI: Mycotoxin binders, ọ̀nà kan fún wàrà tí kò léwu ní Kenya?", url: "https://www.ilri.org/knowledge/publications/mycotoxin-binders-option-safer-milk-kenya" };

module.exports = {
  id: "agri-livestock-nutrition-yo",
  lang: "yo",
  translationOf: "agri-livestock-nutrition",
  category: "Agriculture (Africa)",
  name: "Oúnjẹ Ẹran Ọ̀sìn àti Pípò Oúnjẹ pẹ̀lú Èròjà Ìbílẹ̀",
  skills: "Bíbá èròjà aṣaralóore mu ohun tí ẹran nílò, Yíyan èròjà oúnjẹ àti koríko ẹran ìbílẹ̀, Ṣíṣe oúnjẹ tó dọ́gba pẹ̀lú igun mẹ́rin Pearson, Ṣíṣe silage àti koríko gbígbẹ àti títọ́jú oúnjẹ láìléwu, Ṣíṣètò oúnjẹ ní ìpele-ìpele, Ṣíṣírò owó oúnjẹ fún kg kọ̀ọ̀kan tí ẹran fi kún tàbí lítà wàrà kọ̀ọ̀kan",
  outcome: "ṣe oúnjẹ tó dọ́gba (ration) láti inú èròjà ìbílẹ̀ fún irú ẹran kan, kí o sì ṣírò owó rẹ̀: bá agbára, protein, mineral àti omi mu ìpele ẹran náà, mú protein dọ́gba pẹ̀lú igun mẹ́rin Pearson, tọ́jú oúnjẹ pamọ́ láìléwu, kí o sì ṣírò owó oúnjẹ fún kg kọ̀ọ̀kan tí ẹran fi kún, fún páálí ẹyin kọ̀ọ̀kan tàbí fún lítà wàrà kọ̀ọ̀kan.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀ tó ń sin ẹran àti adìẹ ní kékeré àti àwọn tó ń dàgbà sí i, àwọn òṣìṣẹ́ oko, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀, àwọn tó ń po oúnjẹ ẹran ní kékeré àti àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ (extension officers) ní Kenya, Nàìjíríà, Ghana, Côte d'Ivoire, Burkina Faso àti káàkiri Áfíríkà. Oúnjẹ ló sábà máa ń jẹ́ ìnáwó tó pọ̀ jù lọ nínú sísin ẹran, nítorí náà fífún ẹran ní oúnjẹ tó dára lówó pọ́ọ́kú ló ń pinnu bóyá oko máa jèrè.",
    "Orí 1 dá lórí ohun tí ẹran nílò àti ohun tí o ní: àwọn èròjà aṣaralóore, èròjà ìbílẹ̀ bí àgbàdo, èèpo àgbàdo, èèpo àlìkámà, kéèkì sóyà àti kéèkì irúgbìn òwú, ìyẹ̀fun ẹja, àti koríko ẹran bí koríko Napier, desmodium àti lablab, àti bí a ṣe ń ṣe oúnjẹ tó dọ́gba pẹ̀lú igun mẹ́rin Pearson, ní ìgbésẹ̀-ìgbésẹ̀. Orí 2 dá lórí títọ́jú oúnjẹ pamọ́ àti ṣíṣètò: silage àti koríko gbígbẹ, títọ́jú oúnjẹ láìléwu lọ́wọ́ èbu àti májèlé èbu (mycotoxin), fífún ẹran ní oúnjẹ ní ìpele-ìpele pẹ̀lú ètò oúnjẹ apá mẹ́ta, àti ṣíṣírò owó oúnjẹ fún kg kọ̀ọ̀kan tí ẹran fi kún tàbí lítà wàrà kọ̀ọ̀kan.",
    "Gbogbo iye owó inú ẹ̀kọ́ yìí jẹ́ àpẹẹrẹ tí a hùmọ̀: lo iye owó ní agbègbè rẹ. Iye èròjà aṣaralóore inú oúnjẹ kọ̀ọ̀kan máa ń yàtọ̀, nítorí náà ṣàyẹ̀wò wọn lọ́dọ̀ ẹni tó ń tà á fún ọ, ilé-ìwádìí oúnjẹ ẹran tàbí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ rẹ. Ẹ̀kọ́ yìí kò sọ iye oògùn tàbí èròjà àfikún tí o máa lò; tẹ̀lé ohun tí a kọ sára rẹ̀ àti dókítà ẹranko rẹ. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ kan. Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Ṣe oúnjẹ tó dọ́gba fún irú ẹran kan lórí oko rẹ, kí o sì ṣírò owó rẹ̀ (tàbí àpẹẹrẹ bí adìẹ ẹlẹ́yin nítòsí Kumasi, ẹlẹ́dẹ̀ tó ń dàgbà nítòsí Ìbàdàn, adìẹ ẹlẹ́ran (broiler) nítòsí Bouake, tàbí màlúù ìfúnwàrà ní Kiambu): dárúkọ irú ẹran àti ìpele rẹ̀; kọ ètò oúnjẹ apá mẹ́ta (oúnjẹ ìpìlẹ̀ tàbí koríko, concentrate, èròjà àfikún) àti omi; mú protein inú concentrate dọ́gba pẹ̀lú igun mẹ́rin Pearson, kí o sì fi iṣẹ́ ìṣirò rẹ hàn; kọ kg èròjà kọ̀ọ̀kan fún 100 kg àdàlú; ṣírò owó rẹ̀ fún kg kan pẹ̀lú iye owó ní agbègbè rẹ; kí o sì ṣírò owó oúnjẹ fún kg kọ̀ọ̀kan tí ẹran fi kún, fún páálí ẹyin kọ̀ọ̀kan tàbí fún lítà wàrà kọ̀ọ̀kan.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀ tó ń sin ẹran àti adìẹ ní kékeré àti àwọn oko ìṣòwò tó ń dàgbà, àwọn òṣìṣẹ́ oko, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀, àwọn tó ń po oúnjẹ ẹran ní kékeré àti àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ ní Ìlà-oòrùn, Ìwọ̀-oòrùn àti Àárín Áfíríkà (pẹ̀lú àwọn orílẹ̀-èdè tó ń sọ Faransé).",
    startingPoint: "Wọ́n ń fún ẹran ní oúnjẹ nípa jíjẹ koríko ní pápá, ìyókù irè oko àti oúnjẹ ẹran tí wọ́n rà ní ilé-iṣẹ́. Ọ̀pọ̀ jù lọ kò lè ka ohun tí a kọ sára àpò oúnjẹ tàbí ṣe oúnjẹ tó dọ́gba, wọn kì í tọ́jú koríko pamọ́ fún ìgbà ẹ̀ẹ̀rùn, wọn kò sì mọ iye tí oúnjẹ ń ná wọn fún kg ẹran, ẹyin tàbí wàrà kọ̀ọ̀kan.",
    gap: "Oúnjẹ tí a rà wọ́n gan-an, dídára rẹ̀ sì máa ń yàtọ̀; oúnjẹ tí kò dára tàbí tí ó ti bu máa ń dín ìdàgbàsókè, ẹyin àti wàrà kù, ó sì lè mú ẹran ṣàìsàn. Àwọn àgbẹ̀ tí wọ́n lè po oúnjẹ tó dọ́gba láti inú èròjà ìbílẹ̀, tọ́jú koríko pamọ́, kí wọ́n sì ṣírò owó oúnjẹ wọn lè dín ìnáwó kù, jẹ́ kí ẹran máa pèsè ní gbogbo ìgbà ẹ̀ẹ̀rùn, kí wọ́n sì fi ìgboyà dá owó lé ọjà wọn.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; ìṣirò tó rọrùn nìkan (ìsọdipúpọ̀, pínpín, ìdá nínú ọgọ́rùn-ún); ẹ̀kọ́ yìí tún wà ní èdè Spanish, Faransé àti Lárúbáwá",
      "Ẹ̀rọ: ìwé àti gègé tàbí ẹ̀rọ ìṣirò fóònù; spreadsheet lórí fóònù kò pọn dandan",
      "Owó: iye owó ní KES, NGN, GHS àti XOF jẹ́ àpẹẹrẹ tí a hùmọ̀; akẹ́kọ̀ọ́ ń lo iye owó ní agbègbè wọn",
      "Iye èròjà máa ń yàtọ̀: akẹ́kọ̀ọ́ ń ṣàyẹ̀wò wọn lọ́dọ̀ ẹni tó ń tà á, ilé-ìwádìí tàbí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀",
      "Òfin ìlera ẹranko: kò sí iye oògùn, èròjà àfikún tàbí oúnjẹ olóògùn; tẹ̀lé dókítà ẹranko àti ohun tí a kọ sára rẹ̀"
    ],
    prerequisites: "Ìtọ́jú ẹran ìpìlẹ̀ àti ìṣirò tó rọrùn. A dámọ̀ràn pé kí o kọ́kọ́ ṣe \"Ìlera àti Ìtọ́jú Ẹran Ọ̀sìn\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní irú ẹran kan àti ìpele rẹ̀", action: "ṣe àkọsílẹ̀ àwọn èròjà aṣaralóore tí ó nílò (agbára, protein, mineral àti omi) àti oúnjẹ ìbílẹ̀ kan tí ó ń pèsè ọ̀kọ̀ọ̀kan", standard: "kí o sì dárúkọ oúnjẹ kan tó tọ́ fún èròjà kọ̀ọ̀kan" },
    { id: "O2", condition: "Tí a bá fún ọ ní àwọn oúnjẹ tí ó wà nítòsí rẹ", action: "pín èròjà ìbílẹ̀ àti koríko ẹran sí oúnjẹ agbára, oúnjẹ protein, roughage àti èròjà àfikún", standard: "kí ó kéré tán 8 nínú 10 wà ní ibi tó tọ́" },
    { id: "O3", condition: "Tí a bá fún ọ ní èròjà méjì àti ìpele protein tí o fẹ́", action: "ṣe oúnjẹ tó dọ́gba pẹ̀lú igun mẹ́rin Pearson, kí o sì kọ kg èròjà kọ̀ọ̀kan fún 100 kg àdàlú", standard: "kí àdàlú náà má fi ju 0.5 percentage point yàtọ̀ sí ìpele tí o fẹ́" },
    { id: "O4", condition: "Pẹ̀lú koríko àti oúnjẹ ẹran lórí oko rẹ", action: "ṣe silage tàbí koríko gbígbẹ, kí o sì tọ́jú oúnjẹ kí ó máa gbẹ, kí èbu má sì wà lára rẹ̀", standard: "ní títẹ̀lé gbogbo ìgbésẹ̀ inú àkọsílẹ̀ àyẹ̀wò" },
    { id: "O5", condition: "Fún irú ẹran kan", action: "kọ ètò oúnjẹ ìpele-ìpele pẹ̀lú oúnjẹ ìpìlẹ̀ tàbí koríko, concentrate àti èròjà àfikún fún ìpele kọ̀ọ̀kan", standard: "tí ó bo gbogbo ìpele láti kékeré títí dé ọjà, ìyẹ́ ẹyin tàbí ìfúnwàrà" },
    { id: "O6", condition: "Pẹ̀lú iye owó ní agbègbè rẹ àti àkọsílẹ̀ rẹ", action: "ṣírò owó oúnjẹ fún kg àdàlú kan àti fún kg kọ̀ọ̀kan tí ẹran fi kún, páálí ẹyin kọ̀ọ̀kan tàbí lítà wàrà kọ̀ọ̀kan", standard: "pẹ̀lú ìṣirò tó tọ́ àti gbogbo èròjà nínú rẹ̀" }
  ],
  chapters: [
    {
      name: "Orí 1: Ohun tí ẹran nílò àti ohun tí o ní",
      lessons: [
        {
          title: "Èròjà aṣaralóore: agbára, protein, mineral àti omi",
          objectives: ["O1"],
          minutes: 5,
          goal: "Ṣe àkọsílẹ̀ ohun tí ẹran nílò láti jẹ àti mu, àti oúnjẹ ìbílẹ̀ kan fún ohun kọ̀ọ̀kan.",
          text: [
            "Gbogbo ẹran nílò nǹkan mẹ́rin láti inú oúnjẹ àti omi rẹ̀. Agbára ń jẹ́ kí ó wà láàyè, kí ara rẹ̀ móoru, kí ó sì máa rìn, ó sì ń ṣe ìdàgbàsókè, wàrà àti ẹyin; ó wá láti inú ọkà (àgbàdo, ọkà bàbà, ẹ̀gẹ́), èèpo ọkà (bran) àti koríko tútù tàbí èyí tí a tọ́jú pamọ́. Protein ń kọ́ iṣan, wàrà, ẹyin àti ọmọ; ó wá láti inú kéèkì irúgbìn epo (sóyà, irúgbìn òwú, ẹ̀pà, sunflower), ìyẹ̀fun ẹja àti legume bí desmodium àti lablab. Mineral àti fítámìn ń kọ́ egungun àti èèpo ẹyin, wọ́n sì ń jẹ́ kí ara ṣiṣẹ́ dáadáa: iyọ̀, calcium láti inú limestone tàbí ìkarahun, phosphorus àti premix mineral àti fítámìn.",
            "Omi ni èròjà aṣaralóore tó ṣe pàtàkì jù lọ, owó rẹ̀ sì kéré jù lọ. Láìsí omi, ẹran máa yára dẹ́kun jíjẹun, màlúù tí ń fún wàrà àti adìẹ tí ń yé ẹyin sì máa ń mu omi púpọ̀. Máa fún wọn ní omi mímọ́ ní gbogbo ìgbà, kí ó pọ̀ sí i nígbà ooru, nínú ohun ìmumi mímọ́ ní ibi ibòji.",
            "Ohun tí ẹran nílò máa ń yí padà pẹ̀lú irú ẹran àti ìpele rẹ̀. Ẹran kékeré tí ń dàgbà kíákíá, adìẹ tí ń yé ẹyin àti màlúù tí ń fún wàrà nílò protein ju ẹran àgbà tí ń sinmi lọ. Màlúù, ewúrẹ́ àti àgùntàn jẹ́ ruminant (ẹran tí ń jẹ àpọ̀jẹ): ikùn wọn lè da koríko àti ìyókù irè oko, nítorí náà roughage ni ìpìlẹ̀ oúnjẹ wọn. Ẹlẹ́dẹ̀ àti adìẹ kò lè da roughage púpọ̀, nítorí náà wọ́n nílò oúnjẹ àdàlú (mash) tí a fi ọkà ṣe, tí a po protein, mineral àti fítámìn mọ́."
          ],
          words: [["Èròjà aṣaralóore (nutrient)", "apá oúnjẹ tí ara nílò: agbára, protein, mineral, fítámìn àti omi."], ["Ruminant", "ẹran tí ikùn rẹ̀ ní apá mẹ́rin, tí ó lè da koríko: màlúù, ewúrẹ́ àti àgùntàn."], ["Premix", "àdàlú mineral àti fítámìn tí a rà, tí a ń fi díẹ̀ kún oúnjẹ gẹ́gẹ́ bí a ṣe kọ sára rẹ̀."], ["Roughage", "oúnjẹ tó pọ̀ lára, tó ní okun (fibre) púpọ̀, bí koríko, koríko gbígbẹ (hay), silage àti ìyókù irè oko."]],
          slides: [
            { title: "Nǹkan mẹ́rin tí ẹran nílò", bullets: ["Agbára: ọkà, èèpo ọkà, ẹ̀gẹ́, koríko", "Protein: kéèkì irúgbìn epo, ìyẹ̀fun ẹja, legume", "Mineral àti fítámìn: iyọ̀, limestone, premix", "Omi: mímọ́, ní gbogbo ìgbà"] },
            { title: "Omi lákọ̀ọ́kọ́", bullets: ["Ó ṣe pàtàkì jù lọ, owó rẹ̀ sì kéré jù lọ", "Púpọ̀ sí i nígbà ooru; ẹran tí ń fún wàrà àti tí ń yé ẹyin ń mu púpọ̀", "Ohun ìmumi mímọ́ ní ibi ibòji"] },
            { title: "Ohun tí ó nílò ń yí padà pẹ̀lú ìpele", bullets: ["Ẹran kékeré, tí ń yé ẹyin àti tí ń fún wàrà nílò protein púpọ̀ sí i", "Ẹran àgbà tí ń sinmi nílò díẹ̀"] },
            { title: "Ruminant àti ẹlẹ́dẹ̀ àti adìẹ", bullets: ["Màlúù, ewúrẹ́, àgùntàn: roughage ni ìpìlẹ̀", "Ẹlẹ́dẹ̀ àti adìẹ: mash ọkà pẹ̀lú protein àti premix"] }
          ],
          sources: [FEEDIPEDIA],
          tryIt: "Yan irú ẹran kan lórí oko rẹ (fún àpẹẹrẹ ẹlẹ́dẹ̀ tí ń dàgbà, adìẹ ẹlẹ́yin tàbí màlúù tí ń fún wàrà). Kọ nǹkan mẹ́rin tí ó nílò, àti lẹ́gbẹ̀ẹ́ ọ̀kọ̀ọ̀kan, oúnjẹ kan tí o lè rí ní agbègbè rẹ tí ó ń pèsè rẹ̀.",
          youCanNow: "ṣe àkọsílẹ̀ ohun tí ẹran nílò ní agbára, protein, mineral àti omi, kí o sì dárúkọ oúnjẹ ìbílẹ̀ kan fún ọ̀kọ̀ọ̀kan.",
          quickCheck: [
            { objective: "O1", q: "Èròjà aṣaralóore wo ni owó rẹ̀ kéré jù lọ, tí ó sì ṣe pàtàkì jù lọ?", options: ["Protein", "Agbára", "Omi", "Fítámìn"], answer: 2, why: "Láìsí omi mímọ́, ẹran máa yára dẹ́kun jíjẹun àti pípèsè." },
            { objective: "O1", q: "Oúnjẹ wo ló ń pèsè protein ní pàtàkì?", options: ["Kéèkì sóyà", "Àgbàdo", "Iyọ̀", "Ẹ̀gẹ́ gbígbẹ"], answer: 0, why: "Kéèkì irúgbìn epo bí kéèkì sóyà ní protein púpọ̀; àgbàdo àti ẹ̀gẹ́ ń fúnni ní agbára ní pàtàkì." }
          ]
        },
        {
          title: "Èròjà ìbílẹ̀ àti koríko ẹran",
          objectives: ["O2"],
          minutes: 6,
          goal: "Pín àwọn oúnjẹ tí o lè rí sí oúnjẹ agbára, oúnjẹ protein, roughage àti èròjà àfikún.",
          text: [
            "Oúnjẹ agbára: àgbàdo, ọkà bàbà àti jéró, ẹ̀gẹ́ (tí a bó, tí a gbẹ tàbí tí a ṣe kí ó lè wà láìléwu), èèpo àgbàdo àti èèpo àlìkámà (bran). Owó èèpo ọkà kéré ju ti ọkà lọ, ó sì ní protein àti okun díẹ̀, ṣùgbọ́n tí èèpo ọkà bá pọ̀ jù nínú mash adìẹ, ó máa dín agbára rẹ̀ kù. Àgbàdo ní nǹkan bí 8 sí 10% protein nìkan, nítorí náà òun nìkan kò lè bọ́ ẹran tí ń dàgbà.",
            "Oúnjẹ protein: kéèkì sóyà (ó sábà máa ń ní nǹkan bí 44 sí 48% protein, ó sinmi lórí bí wọ́n ṣe ṣe é), kéèkì irúgbìn òwú, kéèkì ẹ̀pà, kéèkì sunflower àti ìyẹ̀fun ẹja (bí omena ní Kenya). Kéèkì irúgbìn òwú ní gossypol, tí ó lè pa ẹlẹ́dẹ̀, adìẹ àti ẹran kékeré lára, nítorí náà lò ó nìkan láàárín òdiwọ̀n tí ìwé ìtọ́sọ́nà oúnjẹ ẹran tàbí onímọ̀ oúnjẹ ẹran bá sọ. Ìyẹ̀fun ẹja dára gan-an ṣùgbọ́n ó wọ́n, dídára rẹ̀ sì máa ń yàtọ̀: rà á lọ́dọ̀ ẹni tí o gbẹ́kẹ̀ lé, kí o sì ṣàyẹ̀wò pé wọn kò po iyanrìn tàbí iyọ̀ mọ́ ọn.",
            "Koríko ẹran àti roughage fún ruminant: koríko Napier, koríko Brachiaria, pòròpórò àgbàdo (maize stover), legume bí desmodium àti lablab, àti ewé igi bí leucaena àti calliandra. Legume ní protein púpọ̀, ó sì lè rọ́pò apá kan concentrate tí o ń rà. Ọ̀nà push-pull ti icipe ń gbin desmodium sáàárín ìlà àgbàdo, ó sì ń gbin Napier tàbí Brachiaria yí oko ká: ó ń dáàbò bo àgbàdo lọ́wọ́ kòkòrò, ó sì ń fúnni ní koríko ẹran tó dára gan-an. Èròjà àfikún: iyọ̀, limestone tàbí ìkarahun fún calcium, àti premix mineral àti fítámìn tí a ń lò gẹ́gẹ́ bí a ṣe kọ sára rẹ̀."
          ],
          steps: ["Ṣe àkọsílẹ̀ gbogbo oúnjẹ tí o lè rà tàbí gbìn nítòsí rẹ.", "Sàmì sí ọ̀kọ̀ọ̀kan: agbára, protein, roughage tàbí èròjà àfikún.", "Kọ owó rẹ̀ fún kg kan àti ìgbà wo nínú ọdún tí o lè rí i.", "Béèrè iye protein rẹ̀ lọ́wọ́ ẹni tó ń tà á tàbí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀.", "Kọ òdiwọ̀n èyíkéyìí sílẹ̀, bí kéèkì irúgbìn òwú fún ẹlẹ́dẹ̀ àti adìẹ."],
          words: [["Concentrate", "oúnjẹ tí ó ní agbára tàbí protein púpọ̀, bí ọkà, èèpo ọkà, kéèkì irúgbìn epo tàbí dairy meal tí a rà."], ["Kéèkì irúgbìn epo (oilseed cake)", "ohun tí ó kù lẹ́yìn tí a bá fún epo jáde láti inú irúgbìn bí sóyà tàbí irúgbìn òwú; ó ní protein púpọ̀."], ["Legume", "ewéko bí desmodium, lablab tàbí ẹ̀wà tí ó ní protein púpọ̀, tí ó sì ń fi nitrogen kún ilẹ̀."], ["Gossypol", "èròjà àdánidá inú irúgbìn òwú tí ó lè pa ẹlẹ́dẹ̀, adìẹ àti ẹran kékeré lára."]],
          slides: [
            { title: "Oúnjẹ agbára", bullets: ["Àgbàdo, ọkà bàbà, jéró, ẹ̀gẹ́ tí a ṣe láìléwu", "Èèpo àgbàdo àti èèpo àlìkámà: owó kéré, okun pọ̀", "Àgbàdo nìkan: nǹkan bí 8 sí 10% protein nìkan"] },
            { title: "Oúnjẹ protein", bullets: ["Kéèkì sóyà, nǹkan bí 44 sí 48% protein", "Kéèkì irúgbìn òwú, ẹ̀pà àti sunflower", "Ìyẹ̀fun ẹja: ó dára ṣùgbọ́n ṣàyẹ̀wò dídára rẹ̀"] },
            { title: "Koríko fún ruminant", bullets: ["Napier, Brachiaria, pòròpórò àgbàdo", "Legume: desmodium, lablab, leucaena, calliandra", "Push-pull ń fúnni ní koríko, ó sì ń dáàbò bo àgbàdo"] },
            { title: "Èròjà àfikún àti òdiwọ̀n", bullets: ["Iyọ̀, limestone tàbí ìkarahun, premix bí a ṣe kọ ọ́", "Kéèkì irúgbìn òwú: òdiwọ̀n fún ẹlẹ́dẹ̀, adìẹ, ẹran kékeré", "Ṣàyẹ̀wò iye rẹ̀ lọ́dọ̀ ẹni tó ń tà á tàbí extension"] }
          ],
          sources: [FEEDIPEDIA_MAIZE, FEEDIPEDIA_SOY, ICIPE_PUSHPULL],
          tryIt: "Ṣe tábìlì oúnjẹ 8 sí 10 tí o lè rí nítòsí rẹ pẹ̀lú ọ̀wọ̀n mẹ́rin: oúnjẹ, irú (agbára, protein, roughage tàbí èròjà àfikún), owó fún kg kan, àti àwọn oṣù tí ó wà.",
          youCanNow: "pín àwọn oúnjẹ nítòsí rẹ sí oúnjẹ agbára, oúnjẹ protein, roughage àti èròjà àfikún, kí o sì kọ owó wọn àti òdiwọ̀n wọn sílẹ̀.",
          quickCheck: [
            { objective: "O2", q: "Èwo ni legume koríko ẹran tí ó ní protein púpọ̀ fún màlúù àti ewúrẹ́?", options: ["Pòròpórò àgbàdo", "Èèpo àlìkámà", "Desmodium", "Èèpo ẹ̀gẹ́"], answer: 2, why: "Desmodium jẹ́ legume tí ó ní protein púpọ̀; àwọn yòókù ń fúnni ní agbára tàbí okun ní pàtàkì." },
            { objective: "O2", q: "Kí ló dé tí o fi gbọ́dọ̀ ṣọ́ra pẹ̀lú kéèkì irúgbìn òwú fún ẹlẹ́dẹ̀ àti adìẹ?", options: ["Kò ní protein", "Ó ní gossypol, tí ó lè pa wọ́n lára", "Owó rẹ̀ kéré jù", "Fún ẹja nìkan ni"], answer: 1, why: "Gossypol inú irúgbìn òwú lè pa ẹlẹ́dẹ̀, adìẹ àti ẹran kékeré lára, nítorí náà lò ó láàárín òdiwọ̀n ìwé ìtọ́sọ́nà." }
          ]
        },
        {
          title: "Ṣíṣe oúnjẹ tó dọ́gba pẹ̀lú igun mẹ́rin Pearson",
          objectives: ["O3"],
          minutes: 6,
          goal: "Mú èròjà méjì dọ́gba sí ìpele protein tí o fẹ́ pẹ̀lú igun mẹ́rin Pearson.",
          text: [
            "Igun mẹ́rin Pearson (Pearson square) jẹ́ àwòrán tó rọrùn tí ó ń sọ fún ọ iye oúnjẹ méjì tí o máa pò pọ̀ láti dé ìpele kan tí o fẹ́, tí ó sábà máa ń jẹ́ protein. Ó ń ṣiṣẹ́ pẹ̀lú èròjà aṣaralóore kan àti oúnjẹ méjì lẹ́ẹ̀kan, ìpele tí o fẹ́ sì gbọ́dọ̀ wà láàárín iye oúnjẹ méjèèjì. Lo iye tí a wọ̀n lọ́nà kan náà (méjèèjì as-fed tàbí méjèèjì dry matter).",
            "Àpẹẹrẹ pẹ̀lú iye tí ó wọ́pọ̀ (ṣàyẹ̀wò tìrẹ): àgbàdo ní 9% protein, kéèkì sóyà ní 44%, ìpele tí a fẹ́ sì jẹ́ 18%. Ìpele tí o fẹ́ wá láti inú ìwé ìtọ́sọ́nà oúnjẹ ẹran, òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ rẹ tàbí onímọ̀ oúnjẹ ẹran fún ẹran náà àti ìpele rẹ̀. Ya igun mẹ́rin kan. Kọ 18 sí àárín, àgbàdo 9 sí òkè lápá òsì, àti kéèkì sóyà 44 sí ìsàlẹ̀ lápá òsì. Yọkúrò ní ìlà ìkọjá (diagonal), má sì ka àmì ìyokúrò sí: 44 yọ 18 = 26 ìpín àgbàdo (òkè lápá ọ̀tún); 18 yọ 9 = 9 ìpín kéèkì sóyà (ìsàlẹ̀ lápá ọ̀tún). Àpapọ̀ ìpín = 26 + 9 = 35.",
            "Yí ìpín padà sí kg fún 100 kg: àgbàdo = 26 / 35 x 100 = 74.3 kg; kéèkì sóyà = 9 / 35 x 100 = 25.7 kg. Ṣàyẹ̀wò: 74.3 x 9 % = 6.7 kg protein, pẹ̀lú 25.7 x 44 % = 11.3 kg, àpapọ̀ 18.0 kg protein nínú 100 kg: 18%. Nínú mash gidi, o kọ́kọ́ ya àyè sọ́tọ̀ fún àwọn nǹkan tí iye wọn kò yí padà (premix, iyọ̀, limestone fún adìẹ ẹlẹ́yin, gẹ́gẹ́ bí a ṣe kọ sára rẹ̀ tàbí bí ìwé ìtọ́sọ́nà ṣe sọ), lẹ́yìn náà lo igun mẹ́rin náà fún èyí tí ó kù. Igun mẹ́rin náà ń mú protein nìkan dọ́gba, nítorí náà ṣàyẹ̀wò agbára, okun àti mineral pẹ̀lú òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ rẹ."
          ],
          steps: ["Kọ ìpele protein tí o fẹ́ sí àárín igun mẹ́rin.", "Kọ oúnjẹ A (protein kéré) sí òkè lápá òsì àti oúnjẹ B (protein pọ̀) sí ìsàlẹ̀ lápá òsì.", "Yọkúrò ní ìlà ìkọjá kọ̀ọ̀kan; má ka àmì ìyokúrò sí.", "Òkè lápá ọ̀tún = ìpín oúnjẹ A; ìsàlẹ̀ lápá ọ̀tún = ìpín oúnjẹ B.", "Pín ọ̀kọ̀ọ̀kan pẹ̀lú àpapọ̀ ìpín, kí o sì fi 100 sọ ọ́ di púpọ̀ láti rí kg nínú 100 kg.", "Ṣàyẹ̀wò: kg x ìdá protein fún oúnjẹ kọ̀ọ̀kan, tí a bá ròpọ̀, gbọ́dọ̀ dé ìpele tí o fẹ́."],
          words: [["Igun mẹ́rin Pearson (Pearson square)", "àwòrán tó rọrùn tí ó ń fi iye oúnjẹ méjì tí a máa pò pọ̀ hàn láti dé ìpele èròjà aṣaralóore kan."], ["Crude protein", "iye protein tí a kọ sára àpò oúnjẹ àti nínú ìròyìn ilé-ìwádìí, ní ìdá nínú ọgọ́rùn-ún (%)."], ["Ration", "oúnjẹ tí ẹran ń jẹ ní ọjọ́ kan, tàbí àdàlú tí a ń fún un."], ["As-fed", "ìwọ̀n oúnjẹ bí ó ṣe rí, pẹ̀lú omi inú rẹ̀; iye dry matter ti yọ omi náà kúrò."]],
          slides: [
            { title: "Igun mẹ́rin Pearson", bullets: ["Èròjà aṣaralóore kan, oúnjẹ méjì", "Ìpele tí o fẹ́ gbọ́dọ̀ wà láàárín iye méjèèjì", "Ọ̀nà ìwọ̀n kan náà: as-fed tàbí dry matter"] },
            { title: "Ètò rẹ̀", bullets: ["Àárín: ìpele tí o fẹ́, 18%", "Òkè lápá òsì: àgbàdo 9; ìsàlẹ̀ lápá òsì: kéèkì sóyà 44"] },
            { title: "Yọkúrò ní ìlà ìkọjá", bullets: ["44 - 18 = 26 ìpín àgbàdo", "18 - 9 = 9 ìpín kéèkì sóyà", "Àpapọ̀ ìpín 35"] },
            { title: "Fún 100 kg, lẹ́yìn náà ṣàyẹ̀wò", bullets: ["Àgbàdo 26 / 35 x 100 = 74.3 kg", "Kéèkì sóyà 9 / 35 x 100 = 25.7 kg", "6.7 + 11.3 = 18.0 kg protein: ó dé ìpele"] }
          ],
          sources: [TENNESSEE_PEARSON, FEEDIPEDIA_MAIZE, FEEDIPEDIA_SOY],
          tryIt: "Lo igun mẹ́rin Pearson láti pò èèpo àgbàdo (lo 10% protein gẹ́gẹ́ bí iye àṣeṣe) pọ̀ mọ́ kéèkì sóyà (44%) fún ìpele 16%. Kọ kg fún 100 kg, kí o sì ṣàyẹ̀wò pé protein ròpọ̀ dé ìpele náà. (Ìdáhùn: ìpín 28 èèpo àgbàdo àti ìpín 6 kéèkì, nítorí náà 82.4 kg àti 17.6 kg.)",
          youCanNow: "mú oúnjẹ méjì dọ́gba sí ìpele protein tí o fẹ́ pẹ̀lú igun mẹ́rin Pearson, kí o sì ṣàyẹ̀wò èsì rẹ̀.",
          quickCheck: [
            { objective: "O3", q: "Nínú igun mẹ́rin Pearson, kí ló máa ń wà ní àárín?", options: ["Owó oúnjẹ náà", "Ìwọ̀n ẹran náà", "Iye ẹran", "Ìpele protein tí o fẹ́"], answer: 3, why: "Ìpele èròjà aṣaralóore tí o fẹ́ ló ń lọ sí àárín; àwọn oúnjẹ ń lọ sí apá òsì." },
            { objective: "O3", q: "O ń pò àgbàdo (9%) àti kéèkì sóyà (44%) fún 18%. Ìpín àgbàdo mélòó?", options: ["Ìpín 26 (44 yọ 18)", "Ìpín 9 (18 yọ 9)", "Ìpín 35", "Ìpín 18"], answer: 0, why: "Yọkúrò ní ìlà ìkọjá: 44 - 18 = 26 ìpín àgbàdo." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ohun tí ẹran nílò àti ohun tí o ní",
        questions: [
          { objective: "O1", q: "Kí ló dé tí màlúù àti ewúrẹ́ fi lè gbé ní pàtàkì lórí koríko, ṣùgbọ́n ẹlẹ́dẹ̀ àti adìẹ kò lè ṣe bẹ́ẹ̀?", options: ["Ẹlẹ́dẹ̀ àti adìẹ kò nílò agbára", "Koríko jẹ́ májèlé fún ẹlẹ́dẹ̀", "Màlúù àti ewúrẹ́ jẹ́ ruminant, wọ́n sì lè da roughage", "Adìẹ ń mu omi nìkan"], answer: 2, why: "Ikùn ruminant lè da roughage; ẹlẹ́dẹ̀ àti adìẹ nílò mash tí a fi ọkà ṣe." },
          { objective: "O1", q: "Ẹran wo ló nílò protein púpọ̀ sí i nínú oúnjẹ rẹ̀?", options: ["Adìẹ ẹlẹ́ran (broiler) kékeré tí ń dàgbà kíákíá", "Ewúrẹ́ àgbà tí ń sinmi ní ìgbà ẹ̀ẹ̀rùn", "Màlúù àgbà tí kò lóyún, tí kò sì ń fún wàrà", "Akọ màlúù tí ó ti dàgbà tán tí ń sinmi"], answer: 0, why: "Ẹran kékeré tí ń dàgbà kíákíá, tí ń yé ẹyin àti tí ń fún wàrà nílò protein púpọ̀ sí i." },
          { objective: "O2", q: "Èwo nínú ìwọ̀nyí ni oúnjẹ agbára ní pàtàkì?", options: ["Ìyẹ̀fun ẹja", "Àgbàdo", "Kéèkì sóyà", "Desmodium"], answer: 1, why: "Agbára ni àgbàdo ń fúnni ní pàtàkì, pẹ̀lú nǹkan bí 8 sí 10% protein nìkan." },
          { objective: "O3", q: "Oúnjẹ méjì wo ni igun mẹ́rin Pearson lè mú dọ́gba sí ìpele protein 16%?", options: ["Àgbàdo (9%) àti èèpo àgbàdo (10%)", "Ìyẹ̀fun ẹja (60%) àti kéèkì sóyà (44%)", "Oúnjẹ méjì tí méjèèjì ju 30% lọ", "Àgbàdo (9%) àti kéèkì sóyà (44%)"], answer: 3, why: "Ìpele tí o fẹ́ gbọ́dọ̀ wà láàárín iye oúnjẹ méjèèjì: 16 wà láàárín 9 àti 44." },
          { objective: "O3", q: "Lẹ́yìn igun mẹ́rin náà, ìpín 26 àgbàdo àti ìpín 9 kéèkì sóyà ló jáde. Kg kéèkì sóyà mélòó ló wà nínú 100 kg?", options: ["9 kg", "35 kg", "Nǹkan bí 25.7 kg", "Nǹkan bí 74.3 kg"], answer: 2, why: "9 / 35 x 100 = 25.7 kg kéèkì sóyà nínú 100 kg àdàlú." }
        ]
      }
    },
    {
      name: "Orí 2: Tọ́jú oúnjẹ pamọ́, ṣètò rẹ̀, kí o sì ṣírò owó rẹ̀",
      lessons: [
        {
          title: "Silage, koríko gbígbẹ (hay) àti títọ́jú oúnjẹ láìléwu",
          objectives: ["O4"],
          minutes: 6,
          goal: "Ṣe silage tàbí koríko gbígbẹ, kí o sì tọ́jú oúnjẹ kí ó máa gbẹ, kí èbu má sì wà lára rẹ̀.",
          text: [
            "Ní ìgbà òjò, koríko máa ń pọ̀ jù; ní ìgbà ẹ̀ẹ̀rùn, kò ní tó, wàrà àti ìwọ̀n ẹran sì máa ń dín kù. Títọ́jú koríko pamọ́ ń mú èyí dọ́gba. Silage jẹ́ koríko tútù (àgbàdo, ọkà bàbà tàbí Napier) tí a tọ́jú láìsí afẹ́fẹ́ kí ó lè kan (ferment), kí ó sì wà ní tútù, tí ó dára láti jẹ fún ọ̀pọ̀ oṣù. Koríko gbígbẹ (hay) jẹ́ koríko tàbí legume tí a gé, tí a sá sínú oòrùn títí yóò fi gbẹ tó láti tọ́jú láìjẹ́ pé ó jẹrà.",
            "Silage bí FAO ṣe kọ́ni: gé e kéékèèké, kún un kíákíá, tẹ̀ ẹ́ mọ́lẹ̀ dáadáa, kí o sì dì í pa láìjẹ́ kí afẹ́fẹ́ wọlé. Gé àgbàdo tàbí ọkà bàbà nígbà tí ọkà rẹ̀ ṣì rọ̀, tí ó wà láàárín bí wàrà àti bí ìyẹ̀fun tí a pò (doughy). Gé koríko náà sí wẹ́wẹ́, kún ihò, ọ̀pá ọ̀rá (plastic tube), àpò tàbí ìlù mímọ́ kíákíá, fi ẹsẹ̀ tẹ̀ ẹ́ tàbí kí o kì í mọ́lẹ̀ láti lé gbogbo afẹ́fẹ́ jáde, lẹ́yìn náà fi ọ̀rá dí i, kí o sì gbé nǹkan wúwo lé e. Napier àti àwọn koríko míì kò ní ṣúgà púpọ̀; àwọn àgbẹ̀ sábà máa ń fi molasses kún un láti ràn án lọ́wọ́ láti kan (béèrè iye rẹ̀ lọ́wọ́ òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ rẹ). Fi í sílẹ̀ ní títì fún ọ̀sẹ̀ díẹ̀, nígbà tí o bá sì ṣí i, mú èyí tí o nílò jáde lójoojúmọ́, kí o sì tún dì í. Silage tó dára ń rùn dídùn àti kíkan; ju apá tí èbu ti wà lára rẹ̀ tàbí tí ó ti jẹrà nù.",
            "Èbu (mould) lára oúnjẹ lè ṣe májèlé èbu (mycotoxin), bí aflatoxin. Wọ́n jẹ́ májèlé tí a kò lè fi ojú rí, tí ó ń dín ìdàgbàsókè, wàrà àti agbára ìbímọ kù, tí ó ń mú ẹran ṣàìsàn, tí ó sì lè wọ inú wàrà, ẹyin àti ẹran. Ìwádìí ILRI ní Kenya rí aflatoxin nínú ọ̀pọ̀ oúnjẹ màlúù ìfúnwàrà. Dènà rẹ̀: ra oúnjẹ láti ọlọ tí o gbẹ́kẹ̀ lé, ṣàyẹ̀wò pé ó gbẹ, kò dì pọ̀, ó sì ń rùn tuntun, tọ́jú àpò sórí pákó ìgbérù (pallet) kúrò ní ilẹ̀ àti kúrò lẹ́gbẹ̀ẹ́ ògiri, lábẹ́ òrùlé tí kì í jò, lo oúnjẹ tí ó ti pẹ́ jù lọ ní àkọ́kọ́, má sì fún ẹran kankan ní oúnjẹ tí ó ti bu láé, kódà àwọn ẹran míì."
          ],
          steps: ["Silage: kórè ní ìpele tó tọ́, kí o sì gé e kéékèèké.", "Kún ihò, ọ̀pá ọ̀rá, àpò tàbí ìlù kíákíá, kí o sì tẹ̀ ẹ́ mọ́lẹ̀ dáadáa láti lé afẹ́fẹ́ jáde.", "Fi ọ̀rá dì í pa láìjẹ́ kí afẹ́fẹ́ wọlé, gbé nǹkan wúwo lé e; fi í sílẹ̀ ní títì fún ọ̀sẹ̀ díẹ̀.", "Koríko gbígbẹ: gé e, sá a sínú oòrùn, máa yí i padà lọ́pọ̀ ìgbà, tọ́jú rẹ̀ ní gbígbẹ lábẹ́ òrùlé.", "Ilé ìkóúnjẹsí: pákó ìgbérù kúrò ní ilẹ̀, kúrò lẹ́gbẹ̀ẹ́ ògiri, òrùlé tí kì í jò.", "Lo oúnjẹ tí ó ti pẹ́ jù lọ ní àkọ́kọ́; ju ohunkóhun tí ó ti bu, tí ó ti dì pọ̀ tàbí tí ó ń rùn burúkú nù."],
          words: [["Silage", "koríko tútù tí a dì pa láìsí afẹ́fẹ́ kí ó lè kan, kí ó sì dára láti fún ẹran fún ọ̀pọ̀ oṣù."], ["Koríko gbígbẹ (hay)", "koríko tàbí legume tí a gé, tí a sá sínú oòrùn láti tọ́jú pamọ́."], ["Mycotoxin (májèlé èbu)", "májèlé tí èbu ń ṣe lára oúnjẹ, bí aflatoxin; a kò lè fi ojú rí i."], ["Pákó ìgbérù (pallet)", "pákó igi tàbí ọ̀rá tí a gbé sókè, tí ó ń jẹ́ kí àpò má kan ilẹ̀."]],
          slides: [
            { title: "Ìdí tí a fi ń tọ́jú koríko pamọ́", bullets: ["Koríko pọ̀ jù ní ìgbà òjò, kò tó ní ìgbà ẹ̀ẹ̀rùn", "Silage àti koríko gbígbẹ ń jẹ́ kí wàrà àti ìdàgbàsókè dúró"] },
            { title: "Silage ní ìgbésẹ̀ mẹ́rin (FAO)", bullets: ["Gé e kéékèèké", "Kún un kíákíá", "Tẹ̀ ẹ́ mọ́lẹ̀ dáadáa láti lé afẹ́fẹ́ jáde", "Dì í pa láìsí afẹ́fẹ́, gbé nǹkan wúwo lé e"] },
            { title: "Koríko gbígbẹ (hay)", bullets: ["Gé koríko tàbí legume", "Sá a sínú oòrùn, máa yí i padà", "Tọ́jú rẹ̀ ní gbígbẹ, lábẹ́ òrùlé, kúrò ní ilẹ̀"] },
            { title: "Dènà èbu àti mycotoxin", bullets: ["Ra láti ọlọ tí o gbẹ́kẹ̀ lé; ṣàyẹ̀wò pé ó gbẹ, ó ń rùn tuntun", "Pákó ìgbérù, kúrò lẹ́gbẹ̀ẹ́ ògiri, òrùlé tí kì í jò", "Èyí tó ti pẹ́ ní àkọ́kọ́; má fún ẹran ní oúnjẹ tó ti bu láé"] }
          ],
          sources: [FAO_SILAGE, FAO_SILAGE_SMALL, ILRI_MYCO],
          tryIt: "Lọ sí ibi tí o ti ń tọ́jú oúnjẹ ẹran. Kọ nǹkan mẹ́ta tí ó lè jẹ́ kí ọ̀rinrin tàbí èbu wọlé, àti bí o ṣe máa ṣàtúnṣe ọ̀kọ̀ọ̀kan. Lẹ́yìn náà ṣètò silage tàbí koríko gbígbẹ kan: koríko wo, ìgbà wo ni o máa gé e, àti inú kí ni o máa tọ́jú rẹ̀ sí.",
          youCanNow: "ṣe silage tàbí koríko gbígbẹ, kí o sì tọ́jú oúnjẹ lọ́nà tí ó ń dí ọ̀rinrin, èbu àti mycotoxin lọ́wọ́.",
          quickCheck: [
            { objective: "O4", q: "Kí ni ohun tó ṣe pàtàkì jù lọ nígbà tí o bá ń ṣe silage?", options: ["Fífi í sílẹ̀ ní ṣíṣí kí ó lè mí", "Lílé afẹ́fẹ́ jáde àti dídì í pa láìjẹ́ kí afẹ́fẹ́ wọlé", "Fífi omi kún un lójoojúmọ́", "Títọ́jú rẹ̀ sínú oòrùn"], answer: 1, why: "Silage máa ń dára kìkì tí a bá lé afẹ́fẹ́ jáde tí a kò sì jẹ́ kí ó padà wọlé, kí ó lè kan." },
            { objective: "O4", q: "Àpò dairy meal kan ní ìṣùpọ̀ aláwọ̀ eérú tí ó ti le, ó sì ń rùn bí èbu. Kí ni o máa ṣe?", options: ["Fún àwọn màlúù tí kò fún wàrà lọ́wọ́lọ́wọ́ ní i", "Pò ó mọ́ oúnjẹ tuntun", "Fún àwọn adìẹ ní i dípò", "Má fún ẹran kankan ní i"], answer: 3, why: "Èbu lè gbé mycotoxin tí ó ń pa gbogbo ẹran lára, tí ó sì lè wọ inú wàrà àti ẹyin." }
          ]
        },
        {
          title: "Fífún ẹran ní oúnjẹ ní ìpele-ìpele: ètò oúnjẹ apá mẹ́ta",
          objectives: ["O5"],
          minutes: 5,
          goal: "Kọ ètò oúnjẹ fún ìpele kọ̀ọ̀kan ti irú ẹran kan.",
          text: [
            "Ẹran nílò oúnjẹ tó yàtọ̀ ní ìpele tó yàtọ̀. Adìẹ ẹlẹ́ran (broiler): starter, lẹ́yìn náà finisher (àwọn àgbẹ̀ kan ń fi grower sí àárín wọn). Adìẹ ẹlẹ́yin: chick mash, lẹ́yìn náà growers mash, lẹ́yìn náà layers mash láti ìgbà tí wọ́n bá fẹ́ bẹ̀rẹ̀ sí í yé ẹyin (point of lay), pẹ̀lú calcium àfikún fún èèpo ẹyin. Ẹlẹ́dẹ̀: creep tàbí weaner feed, grower, finisher, lẹ́yìn náà oúnjẹ pàtàkì fún abo ẹlẹ́dẹ̀ tí ó lóyún àti èyí tí ń fún ọmọ lọ́mú. Màlúù ìfúnwàrà: ọmọ màlúù, ọmọ abo màlúù (heifer), màlúù tí kò fún wàrà lọ́wọ́lọ́wọ́ (dry cow) àti àsìkò ìfúnwàrà, pẹ̀lú concentrate tí ó bá iye wàrà tí màlúù kọ̀ọ̀kan ń fún mu. Yí oúnjẹ kan padà sí èkejì ní ọjọ́ díẹ̀, kì í ṣe ní òru kan.",
            "Lo ètò apá mẹ́ta tó rọrùn fún ìpele kọ̀ọ̀kan. Apá 1, oúnjẹ ìpìlẹ̀ (basal feed): ohun tí ó pọ̀ jù lọ nínú oúnjẹ ẹran. Fún màlúù àti ewúrẹ́, koríko ni (jíjẹ ní pápá, Napier, koríko gbígbẹ, silage, pòròpórò); fún ẹlẹ́dẹ̀ àti adìẹ, ọkà agbára àti èèpo ọkà inú mash ni. Apá 2, concentrate: apá tí ó ní protein púpọ̀ (kéèkì irúgbìn epo, ìyẹ̀fun ẹja, dairy meal tí a rà tàbí mash tó dọ́gba) tí ó ń fi ohun tí oúnjẹ ìpìlẹ̀ kò ní kún un. Apá 3, èròjà àfikún: iyọ̀, mineral, fítámìn àti calcium, tí a ń lò gẹ́gẹ́ bí a ṣe kọ sára rẹ̀. Pẹ̀lú omi mímọ́ ní gbogbo ìgbà.",
            "Fífún ẹran ní oúnjẹ ní ìbámu pẹ̀lú ìpele rẹ̀ ń dín ìnáwó kù: o kò ní san owó oúnjẹ starter olóprotein-púpọ̀ fún ẹran tí kò nílò rẹ̀ mọ́. Wọ̀n tàbí fojú díwọ̀n iye tí ìpele kọ̀ọ̀kan ń jẹ, kí o sì máa wo àwọn ẹran: tí wọ́n bá rù, tí wọ́n ń yé ẹyin díẹ̀ tàbí tí wọ́n ń fún wàrà díẹ̀, ní kí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ rẹ ṣàyẹ̀wò ètò náà. Ohun tí a kọ sára àpò, tàbí ìwé ìtọ́sọ́nà ibi ìpamọ adìẹ (hatchery) tàbí ti irú-ẹran náà, ló ń sọ ìgbà tí o máa yí oúnjẹ padà fún àwọn irú-ẹran ìṣòwò."
          ],
          steps: ["Yan irú ẹran kan.", "Ṣe àkọsílẹ̀ àwọn ìpele rẹ̀ láti kékeré títí dé ọjà, ìyẹ́ ẹyin tàbí ìfúnwàrà.", "Fún ìpele kọ̀ọ̀kan, kọ oúnjẹ ìpìlẹ̀.", "Fi concentrate tí ó ń ṣe àfikún rẹ̀ kún un.", "Fi èròjà àfikún àti omi kún un.", "Kọ ìgbà tí o máa yí padà sí ìpele tó kàn, kí o sì yí i padà ní ọjọ́ díẹ̀."],
          words: [["Oúnjẹ ìpìlẹ̀ (basal feed)", "apá tí ó pọ̀ jù lọ nínú oúnjẹ ẹran: koríko fún ruminant, ọkà agbára fún ẹlẹ́dẹ̀ àti adìẹ."], ["Point of lay", "ọjọ́ orí tí ọmọ adìẹ abo fẹ́ bẹ̀rẹ̀ sí í yé ẹyin."], ["Lactation (àsìkò ìfúnwàrà)", "àkókò tí ẹran abo ń pèsè wàrà."]],
          slides: [
            { title: "Oúnjẹ ń yí padà pẹ̀lú ìpele", bullets: ["Broiler: starter, lẹ́yìn náà finisher", "Adìẹ ẹlẹ́yin: chick, growers, lẹ́yìn náà layers mash", "Ẹlẹ́dẹ̀: weaner, grower, finisher, abo; màlúù ìfúnwàrà: bí wàrà ṣe tó"] },
            { title: "Ètò apá mẹ́ta", bullets: ["1. Ìpìlẹ̀: koríko, tàbí ọkà àti èèpo ọkà", "2. Concentrate: àfikún protein", "3. Èròjà àfikún: iyọ̀, mineral, fítámìn, calcium"] },
            { title: "Omi, kí o sì yí padà díẹ̀díẹ̀", bullets: ["Omi mímọ́ ní gbogbo ìgbà", "Yí oúnjẹ padà ní ọjọ́ díẹ̀"] },
            { title: "Ìdí tí ó fi ń dín ìnáwó kù", bullets: ["Kò sí starter olówó-ńlá fún ẹran tí kò nílò rẹ̀", "Wo bí ara ẹran ṣe rí, ẹyin àti wàrà"] }
          ],
          sources: [FEEDIPEDIA],
          tryIt: "Yan irú ẹran kan. Ṣe tábìlì tí ó ní ìlà kan fún ìpele kọ̀ọ̀kan àti ọ̀wọ̀n mẹ́rin: oúnjẹ ìpìlẹ̀, concentrate, èròjà àfikún, àti ìgbà tí o máa yí padà sí ìpele tó kàn.",
          youCanNow: "kọ ètò oúnjẹ ìpele-ìpele pẹ̀lú oúnjẹ ìpìlẹ̀, concentrate àti èròjà àfikún fún ìpele kọ̀ọ̀kan.",
          quickCheck: [
            { objective: "O5", q: "Nínú ètò oúnjẹ apá mẹ́ta fún màlúù ìfúnwàrà, kí ni oúnjẹ ìpìlẹ̀?", options: ["Koríko bí koríko Napier, koríko gbígbẹ tàbí silage", "Premix mineral", "Dairy meal", "Iyọ̀"], answer: 0, why: "Fún ruminant, koríko ló pọ̀ jù lọ nínú oúnjẹ; concentrate àti èròjà àfikún ń ṣe àfikún rẹ̀." },
            { objective: "O5", q: "Ọmọ adìẹ ẹlẹ́yin rẹ (pullets) ti fẹ́ dé point of lay. Oúnjẹ wo ni wọ́n máa yí sí?", options: ["Broiler starter", "Chick mash", "Layers mash, tí a yí padà ní ọjọ́ díẹ̀", "Àgbàdo nìkan"], answer: 2, why: "Layers mash ń fúnni ní calcium àfikún tí èèpo ẹyin nílò; yí i padà díẹ̀díẹ̀ ní ọjọ́ díẹ̀." }
          ]
        },
        {
          title: "Ṣíṣírò owó oúnjẹ fún kg tí ẹran fi kún tàbí lítà wàrà",
          objectives: ["O6"],
          minutes: 6,
          goal: "Ṣírò owó oúnjẹ rẹ fún kg kan, àti owó oúnjẹ fún kg kọ̀ọ̀kan tí ẹran fi kún, páálí ẹyin kọ̀ọ̀kan tàbí lítà wàrà kọ̀ọ̀kan.",
          text: [
            "Ìgbésẹ̀ 1, owó fún kg àdàlú kan. Sọ kg èròjà kọ̀ọ̀kan di púpọ̀ pẹ̀lú owó rẹ̀, ròpọ̀ wọn, kí o sì pín in pẹ̀lú àpapọ̀ kg. Àpẹẹrẹ pẹ̀lú iye owó shilling Kenya tí a hùmọ̀: 74.3 kg àgbàdo ní KES 40 = 2,972; 25.7 kg kéèkì sóyà ní KES 90 = 2,313. Àpapọ̀ KES 5,285 fún 100 kg, nítorí náà KES 52.85 fún kg kan. Fi owó ìlọ̀, owó ọkọ̀ àti premix kún un tí o bá ń san wọ́n.",
            "Ìgbésẹ̀ 2, oúnjẹ fún ẹyọ ọjà kọ̀ọ̀kan. Fún ẹran pípa, kọ oúnjẹ tí wọ́n jẹ àti ìwọ̀n tí wọ́n fi kún sílẹ̀: tí ẹlẹ́dẹ̀ 10 bá jẹ 900 kg oúnjẹ grower, tí wọ́n sì fi 300 kg kún ìwọ̀n wọn, kg kọ̀ọ̀kan tí wọ́n fi kún gba 3 kg oúnjẹ (feed conversion ratio, FCR). Owó oúnjẹ fún kg kọ̀ọ̀kan tí wọ́n fi kún = 3 x KES 52.85 = KES 158.55. Fún ẹyin: oúnjẹ tí agbo adìẹ jẹ ní ọ̀sẹ̀ kan x owó fún kg kan, pín pẹ̀lú iye páálí ẹyin tí o kó. Fún wàrà: owó oúnjẹ màlúù ní ọjọ́ kan (koríko pẹ̀lú dairy meal) pín pẹ̀lú iye lítà tí ó fún ní ọjọ́ náà.",
            "Lo àwọn nọ́mbà náà láti pinnu. Fi owó oúnjẹ fún kg kọ̀ọ̀kan tí ẹran fi kún tàbí fún lítà kọ̀ọ̀kan wé owó tí o fi ń tà. Gbìyànjú èròjà tí owó rẹ̀ kéré, bí legume koríko púpọ̀ sí i tàbí èèpo ọkà ìbílẹ̀, ṣùgbọ́n ṣàyẹ̀wò pé ó ṣì dé ìpele tí o fẹ́, kò sì dín ìdàgbàsókè tàbí wàrà kù. Ṣiṣẹ́ pẹ̀lú owó orílẹ̀-èdè rẹ, yálà NGN, GHS tàbí XOF: ọ̀nà náà kan náà ni. Owó máa ń yí padà, nítorí náà ṣe àtúnṣe ìwé rẹ ní gbogbo ìgbà tí o bá rà nǹkan."
          ],
          steps: ["Ṣe àkọsílẹ̀ èròjà kọ̀ọ̀kan, kg rẹ̀ fún 100 kg àti owó rẹ̀ fún kg kan.", "Sọ kg di púpọ̀ pẹ̀lú owó fún èròjà kọ̀ọ̀kan, kí o sì ròpọ̀ wọn.", "Fi owó ìlọ̀, owó ọkọ̀ àti premix kún un; pín in pẹ̀lú àpapọ̀ kg.", "Kọ oúnjẹ tí wọ́n jẹ àti ìwọ̀n tí wọ́n fi kún, ẹyin tàbí wàrà tí wọ́n pèsè sílẹ̀.", "Owó oúnjẹ fún kg kọ̀ọ̀kan tí ẹran fi kún = FCR x owó oúnjẹ fún kg kan.", "Owó oúnjẹ fún lítà tàbí páálí kan = owó oúnjẹ ọjọ́ tàbí ọ̀sẹ̀ / lítà tàbí páálí."],
          words: [["Feed conversion ratio (FCR)", "kg oúnjẹ tí ẹran nílò láti fi 1 kg kún ìwọ̀n rẹ̀; bí ó bá ṣe kéré tó, bẹ́ẹ̀ ló dára tó."], ["Owó fún kg kọ̀ọ̀kan tí ẹran fi kún", "owó oúnjẹ tí o ná fún kg kọ̀ọ̀kan tí ẹran fi dàgbà."], ["Páálí ẹyin (tray)", "páálí tí ó gba ẹyin 30, ẹyọ tí a sábà máa ń fi ta ẹyin."]],
          slides: [
            { title: "Ìgbésẹ̀ 1: owó fún kg àdàlú kan", bullets: ["kg x owó fún èròjà kọ̀ọ̀kan, lẹ́yìn náà ròpọ̀", "Àpẹẹrẹ: KES 5,285 fún 100 kg = KES 52.85 fún kg kan", "Fi owó ìlọ̀, owó ọkọ̀ àti premix kún un"] },
            { title: "Ìgbésẹ̀ 2: oúnjẹ fún kg kọ̀ọ̀kan tí ẹran fi kún", bullets: ["900 kg oúnjẹ / 300 kg tí ẹran fi kún = FCR 3", "3 x KES 52.85 = KES 158.55 fún kg kọ̀ọ̀kan tí ẹran fi kún"] },
            { title: "Ẹyin àti wàrà", bullets: ["Ẹyin: owó oúnjẹ ọ̀sẹ̀ kan / páálí tí o kó", "Wàrà: owó oúnjẹ ọjọ́ kan / lítà ọjọ́ náà"] },
            { title: "Lò ó láti pinnu", bullets: ["Fi wé owó tí o fi ń tà", "Gbìyànjú èròjà ìbílẹ̀ tí owó rẹ̀ kéré; ṣàyẹ̀wò ìpele", "Ṣe àtúnṣe ní gbogbo ìgbà tí o bá rà; àpẹẹrẹ ni iye owó"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣe oúnjẹ tó dọ́gba fún irú ẹran kan, kí o sì ṣírò owó rẹ̀. Kọ ètò apá mẹ́ta, mú concentrate dọ́gba pẹ̀lú igun mẹ́rin Pearson, kọ kg fún 100 kg, ṣírò owó rẹ̀ fún kg kan pẹ̀lú iye owó ní agbègbè rẹ, kí o sì ṣírò owó oúnjẹ fún kg kọ̀ọ̀kan tí ẹran fi kún, fún páálí ẹyin kọ̀ọ̀kan tàbí fún lítà wàrà kọ̀ọ̀kan.",
          youCanNow: "ṣírò owó oúnjẹ fún kg kan, kí o sì ṣírò owó oúnjẹ rẹ fún kg kọ̀ọ̀kan tí ẹran fi kún, páálí ẹyin kọ̀ọ̀kan tàbí lítà wàrà kọ̀ọ̀kan.",
          quickCheck: [
            { objective: "O6", q: "Àpapọ̀ owó 100 kg àdàlú jẹ́ XOF 20,000. Kí ni owó fún kg kan?", options: ["XOF 2,000", "XOF 20", "XOF 100", "XOF 200"], answer: 3, why: "20,000 / 100 kg = XOF 200 fún kg kan." },
            { objective: "O6", q: "Adìẹ broiler jẹ 400 kg oúnjẹ, wọ́n sì fi 250 kg kún ìwọ̀n wọn. Kí ni FCR?", options: ["1.6", "0.6", "2.5", "4.0"], answer: 0, why: "FCR = oúnjẹ tí wọ́n jẹ / ìwọ̀n tí wọ́n fi kún = 400 / 250 = 1.6." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Tọ́jú oúnjẹ pamọ́, ṣètò rẹ̀, kí o sì ṣírò owó rẹ̀",
        questions: [
          { objective: "O4", q: "Kí ló dé tí àwọn àgbẹ̀ fi ń fi molasses kún silage koríko Napier?", options: ["Napier kò ní ṣúgà púpọ̀, molasses sì ń ràn án lọ́wọ́ láti kan", "Láti mú un dùn fún àwọn ọmọdé", "Láti dí òjò lọ́wọ́", "Láti rọ́pò ìbòrí ọ̀rá"], answer: 0, why: "Koríko tí kò ní ṣúgà púpọ̀ kì í kan dáadáa; molasses ń fúnni ní ṣúgà tí kíkan (fermentation) nílò." },
          { objective: "O4", q: "Ibi ìtọ́jú wo ló ń pa oúnjẹ mọ́ jù lọ lọ́wọ́ èbu?", options: ["Àpò lórí ilẹ̀ lásán, tí ó fara ti ògiri", "Àpò níta lábẹ́ igi", "Àpò lórí pákó ìgbérù, kúrò lẹ́gbẹ̀ẹ́ ògiri, lábẹ́ òrùlé tí kì í jò", "Òkìtì oúnjẹ ṣíṣí nínú ilé ẹran"], answer: 2, why: "Jíjẹ́ kí àpò gbẹ, kí ó má sì kan ilẹ̀ àti ògiri ń dí ọ̀rinrin, èbu àti mycotoxin lọ́wọ́." },
          { objective: "O5", q: "Kí ni apá mẹ́ta ètò oúnjẹ inú ẹ̀kọ́ yìí?", options: ["Oúnjẹ àárọ̀, ọ̀sán àti alẹ́", "Oúnjẹ ìpìlẹ̀ tàbí koríko, concentrate, àti èròjà àfikún", "Koríko, omi àti iyọ̀ nìkan", "Starter, grower àti finisher nìkan"], answer: 1, why: "Ètò náà ni oúnjẹ ìpìlẹ̀, concentrate àti èròjà àfikún, pẹ̀lú omi, fún ìpele kọ̀ọ̀kan." },
          { objective: "O6", q: "Oúnjẹ jẹ́ KES 50 fún kg kan, FCR sì jẹ́ 3. Kí ni owó oúnjẹ fún kg kọ̀ọ̀kan tí ẹran fi kún?", options: ["KES 53", "KES 17", "KES 300", "KES 150"], answer: 3, why: "Owó oúnjẹ fún kg kọ̀ọ̀kan tí ẹran fi kún = FCR x owó fún kg kan = 3 x 50 = KES 150." },
          { objective: "O6", q: "Oúnjẹ màlúù kan ń ná NGN 3,000 lójoojúmọ́, ó sì ń fún ní lítà 10. Kí ni owó oúnjẹ fún lítà kan?", options: ["NGN 30", "NGN 300", "NGN 3,000", "NGN 30,000"], answer: 1, why: "3,000 / lítà 10 = NGN 300 fún lítà kan." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Oúnjẹ Ẹran Ọ̀sìn àti Pípò Oúnjẹ pẹ̀lú Èròjà Ìbílẹ̀",
    questions: [
      { objective: "O1", q: "Kí ni nǹkan mẹ́rin pàtàkì tí ẹran ń rí gbà láti inú oúnjẹ àti omi?", options: ["Agbára, protein, mineral àti fítámìn, àti omi", "Koríko, iyọ̀, ṣúgà àti epo", "Àgbàdo, ẹ̀wà, ìrẹsì àti wàrà", "Ooru, ìmọ́lẹ̀, afẹ́fẹ́ àti ilẹ̀"], answer: 0, why: "Agbára, protein, mineral àti fítámìn, àti omi ni nǹkan mẹ́rin tí ẹran nílò." },
      { objective: "O1", q: "Oúnjẹ wo ló ń pèsè calcium fún èèpo ẹyin ní pàtàkì?", options: ["Èèpo àgbàdo", "Koríko Napier", "Limestone tàbí ìkarahun", "Molasses"], answer: 2, why: "Limestone àti ìkarahun tí a lọ̀ ń pèsè calcium fún adìẹ ẹlẹ́yin." },
      { objective: "O1", q: "Àwọn ẹran wo ló nílò roughage gẹ́gẹ́ bí ìpìlẹ̀ oúnjẹ wọn?", options: ["Broiler", "Adìẹ ẹlẹ́yin", "Ọmọ ẹlẹ́dẹ̀ tí a ti já lẹ́nu ọmú (weaner)", "Màlúù, ewúrẹ́ àti àgùntàn"], answer: 3, why: "Ruminant ń da roughage; òun ni ìpìlẹ̀ oúnjẹ wọn." },
      { objective: "O2", q: "Nǹkan bí protein mélòó ló wà nínú àgbàdo?", options: ["Nǹkan bí 8 sí 10%", "Nǹkan bí 44%", "Nǹkan bí 60%", "Kò sí rárá"], answer: 0, why: "Feedipedia sọ pé àgbàdo ní nǹkan bí 8 sí 10.5% protein, nítorí náà oúnjẹ agbára ni ní pàtàkì." },
      { objective: "O2", q: "Èwo nínú ìwọ̀nyí ni oúnjẹ protein?", options: ["Ẹ̀gẹ́ gbígbẹ", "Èèpo àlìkámà", "Ìyẹ̀fun ẹja", "Pòròpórò àgbàdo"], answer: 2, why: "Ìyẹ̀fun ẹja ní protein púpọ̀; àwọn yòókù jẹ́ agbára tàbí roughage ní pàtàkì." },
      { objective: "O2", q: "Kí ni àǹfààní ọ̀nà push-pull ti icipe fún àgbẹ̀ màlúù ìfúnwàrà?", options: ["Ó ń rọ́pò omi", "Desmodium àti Napier tàbí Brachiaria ń fúnni ní koríko ẹran tó dára gan-an", "Kò ní nílò mineral mọ́", "Ó ń sọ màlúù di ruminant"], answer: 1, why: "Push-pull ń dáàbò bo àgbàdo, àwọn ewéko tí a gbìn pẹ̀lú rẹ̀ sì jẹ́ koríko ẹran tó dára gan-an." },
      { objective: "O2", q: "Kí ni o gbọ́dọ̀ ṣàyẹ̀wò nígbà tí o bá ń ra ìyẹ̀fun ẹja?", options: ["Pé ó wá láti ọ̀dọ̀ ẹni tí o gbẹ́kẹ̀ lé, wọn kò sì po iyanrìn tàbí iyọ̀ mọ́ ọn", "Pé òun ni owó rẹ̀ kéré jù", "Pé ó rin", "Pé ó ń rùn bí èbu"], answer: 0, why: "Dídára ìyẹ̀fun ẹja máa ń yàtọ̀, wọ́n sì lè fi nǹkan míì là á, nítorí náà rà á lọ́dọ̀ ẹni tí o gbẹ́kẹ̀ lé." },
      { objective: "O3", q: "Èròjà aṣaralóore mélòó ni igun mẹ́rin Pearson ń mú dọ́gba lẹ́ẹ̀kan?", options: ["Gbogbo wọn", "Mẹ́ta", "Méjì", "Ọ̀kan"], answer: 3, why: "Ó ń mú èròjà aṣaralóore kan dọ́gba, tí ó sábà máa ń jẹ́ protein, láàárín oúnjẹ méjì." },
      { objective: "O3", q: "Àgbàdo (9%) àti kéèkì sóyà (44%), ìpele 18. Ìpín kéèkì sóyà mélòó?", options: ["26", "9", "35", "44"], answer: 1, why: "18 - 9 = 9 ìpín kéèkì sóyà." },
      { objective: "O3", q: "Kí ló dé tí o kò fi lè lo àgbàdo (9%) àti èèpo ọkà (10%) láti dé 18% protein?", options: ["Ìpele tí o fẹ́ gbọ́dọ̀ wà láàárín iye oúnjẹ méjèèjì", "Owó èèpo ọkà kéré jù", "Igun mẹ́rin náà ń ṣiṣẹ́ fún màlúù nìkan", "Àgbàdo kò ní protein"], answer: 0, why: "18 ga ju oúnjẹ méjèèjì lọ, nítorí náà kò sí àdàlú wọn tí ó lè dé ibẹ̀." },
      { objective: "O3", q: "Lẹ́yìn igun mẹ́rin náà, báwo ni o ṣe máa ṣàyẹ̀wò àdàlú rẹ?", options: ["Béèrè lọ́wọ́ aládùúgbò", "Gbóòórùn rẹ̀", "kg x ìdá protein fún oúnjẹ kọ̀ọ̀kan gbọ́dọ̀ ròpọ̀ dé ìpele tí o fẹ́", "Wọn àwọn ẹran ní ọjọ́ kan náà"], answer: 2, why: "Ríròpọ̀ protein láti inú èròjà kọ̀ọ̀kan ń fìdí rẹ̀ múlẹ̀ pé àdàlú náà dé ìpele tí o fẹ́." },
      { objective: "O4", q: "Kí ni ìgbésẹ̀ mẹ́rin silage tí FAO ń kọ́ni?", options: ["Gé, fọ̀, gbẹ, sun", "Gé e kéékèèké, kún un kíákíá, tẹ̀ ẹ́ mọ́lẹ̀, dì í pa", "Gbìn, bomi rin, roko, tà", "Rẹ, sè, mú tutù, dì sínú àpò"], answer: 1, why: "Gígé kéékèèké, kíkún kíákíá, títẹ̀ mọ́lẹ̀ àti dídì pa ló ń ṣe silage tó dára." },
      { objective: "O4", q: "Kí ni mycotoxin?", options: ["Fítámìn inú oúnjẹ", "Irú koríko kan", "Èròjà àfikún protein", "Májèlé tí a kò lè rí tí èbu ń ṣe lára oúnjẹ"], answer: 3, why: "Èbu lè ṣe mycotoxin bí aflatoxin, tí ó ń pa ẹran lára, tí ó sì lè wọ inú wàrà." },
      { objective: "O4", q: "Òfin wo ló ń ràn lọ́wọ́ láti pa oúnjẹ tí a tọ́jú mọ́ láìléwu?", options: ["Lo oúnjẹ tí ó ti pẹ́ jù lọ ní àkọ́kọ́", "Tọ́jú àpò sórí ilẹ̀ lẹ́gbẹ̀ẹ́ ògiri", "Tọ́jú oúnjẹ sínú ilé ẹran", "Pò oúnjẹ tí ó ti bu mọ́ oúnjẹ tuntun"], answer: 0, why: "Èyí tí ó kọ́kọ́ dé ni kí ó kọ́kọ́ jáde: èyí ń dènà kí oúnjẹ dúró títí yóò fi bàjẹ́." },
      { objective: "O5", q: "Kí ló dé tí a fi ń fún ẹran ní oúnjẹ ní ìbámu pẹ̀lú ìpele rẹ̀?", options: ["Ó ń jẹ́ kí ẹran jẹun púpọ̀ sí i", "Ìpele kọ̀ọ̀kan ní ohun tí ó nílò tí ó yàtọ̀, nítorí náà o kò san owó èròjà tí wọn kò nílò", "Àwọn ilé-iṣẹ́ oúnjẹ ẹran ní kí a ṣe bẹ́ẹ̀", "Kò ní nílò omi mọ́"], answer: 1, why: "Bíbá oúnjẹ mu ìpele ń pèsè ohun tí ẹran nílò, ó sì ń dín ìnáwó kù." },
      { objective: "O5", q: "Báwo ni o ṣe gbọ́dọ̀ yí oúnjẹ kan padà sí èkejì?", options: ["Ní òru kan", "Kìkì nígbà tí ẹran bá ń ṣàìsàn", "Ní ọjọ́ díẹ̀", "Má ṣe yí oúnjẹ padà láé"], answer: 2, why: "Yíyí padà díẹ̀díẹ̀ kò ní da ikùn ẹran rú, kò sì ní dín jíjẹun rẹ̀ kù." },
      { objective: "O5", q: "Fún ẹlẹ́dẹ̀ àti adìẹ, kí ni apá ìpìlẹ̀ oúnjẹ wọn?", options: ["Koríko Napier", "Iyọ̀", "Ìyẹ̀fun ẹja", "Ọkà agbára àti èèpo ọkà inú mash"], answer: 3, why: "Ẹlẹ́dẹ̀ àti adìẹ kò lè da roughage púpọ̀, nítorí náà ọkà àti èèpo ọkà ni ìpìlẹ̀ wọn." },
      { objective: "O6", q: "Kí ni FCR 2 túmọ̀ sí?", options: ["2 kg oúnjẹ fún 1 kg kọ̀ọ̀kan tí ẹran fi kún", "Oúnjẹ 2 lójúmọ́", "Ẹran 2 fún ohun ìjẹun kọ̀ọ̀kan", "2% protein"], answer: 0, why: "FCR ni kg oúnjẹ tí a nílò fún 1 kg tí ẹran fi kún." },
      { objective: "O6", q: "50 kg àgbàdo ní GHS 4 àti 50 kg èèpo ọkà ní GHS 2. Kí ni owó fún kg àdàlú kan?", options: ["GHS 6", "GHS 3", "GHS 300", "GHS 2"], answer: 1, why: "(50 x 4) + (50 x 2) = 300 fún 100 kg, nítorí náà GHS 3 fún kg kan." },
      { objective: "O6", q: "Agbo adìẹ ẹlẹ́yin kan ń jẹ oúnjẹ tí ó ná KES 7,000 lọ́sẹ̀, o sì ń kó páálí ẹyin 70. Kí ni owó oúnjẹ fún páálí kan?", options: ["KES 10", "KES 70", "KES 100", "KES 490"], answer: 2, why: "7,000 / páálí 70 = KES 100 owó oúnjẹ fún páálí kan." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 2, 4, 7, 8, 12, 14, 17, 18] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá oúnjẹ yẹn ṣe kí o sì tún ṣàyẹ̀wò rẹ̀.",
    criteria: [
      { name: "Irú ẹran, ìpele àti ètò apá mẹ́ta", objective: "O5", notYet: "Kò dárúkọ irú ẹran tàbí ìpele, tàbí ọ̀kan lára oúnjẹ ìpìlẹ̀, concentrate àti èròjà àfikún kò sí.", meets: "Ó dárúkọ irú ẹran àti ìpele, ó sì fúnni ní oúnjẹ ìpìlẹ̀, concentrate, èròjà àfikún àti omi.", exceeds: "Ó tún fi ìpele tó kàn hàn, àti ìgbà àti bí a ṣe máa yí oúnjẹ padà." },
      { name: "Èròjà tí a pín dáadáa tí ó sì yẹ", objective: "O2", notYet: "A pín èròjà lọ́nà tí kò tọ́ tàbí wọ́n léwu (fún àpẹẹrẹ wọ́n ti bu, tàbí kéèkì irúgbìn òwú láìsí òdiwọ̀n fún adìẹ).", meets: "Ó lo èròjà ìbílẹ̀ tí a pín dáadáa sí agbára, protein, roughage àti èròjà àfikún.", exceeds: "Ó lo legume tàbí èèpo ọkà ìbílẹ̀ tí owó rẹ̀ kéré, ó sì ṣàlàyé bí ó ṣe ṣì dé ìpele tí a fẹ́." },
      { name: "Igun mẹ́rin Pearson", objective: "O3", notYet: "Kò fi iṣẹ́ ìṣirò hàn, tàbí ìpele tí a fẹ́ kò sí láàárín oúnjẹ méjèèjì.", meets: "Ó ya igun mẹ́rin náà, ìpín àti kg fún 100 kg tọ́, àyẹ̀wò rẹ̀ sì ròpọ̀ dé ìpele tí a fẹ́ láàárín 0.5.", exceeds: "Ó kọ́kọ́ ya àyè sọ́tọ̀ fún àwọn nǹkan tí iye wọn kò yí padà bí premix, lẹ́yìn náà ó mú èyí tí ó kù dọ́gba." },
      { name: "Ìṣirò owó", objective: "O6", notYet: "Owó fún kg kan kò sí, tàbí ìṣirò rẹ̀ kò tọ́.", meets: "Owó fún kg àdàlú kan àti owó oúnjẹ fún kg kọ̀ọ̀kan tí ẹran fi kún, páálí ẹyin tàbí lítà wàrà tọ́, ní owó orílẹ̀-èdè rẹ.", exceeds: "Ó fi wé owó tí ó fi ń tà, ó sì fi ọ̀nà kan hàn láti dín ìnáwó kù." },
      { name: "Dídára oúnjẹ àti títọ́jú rẹ̀", objective: "O4", notYet: "Kò sọ nǹkan kan nípa ibi tí a ń tọ́jú oúnjẹ sí tàbí bí a ṣe ń dènà èbu.", meets: "Ó sọ ibi tí a ń tọ́jú oúnjẹ sí àti bí a ṣe ń jẹ́ kí ó gbẹ láìsí èbu, tí a ń lo èyí tí ó ti pẹ́ jù lọ ní àkọ́kọ́.", exceeds: "Ó ní ètò silage tàbí koríko gbígbẹ fún ìgbà ẹ̀ẹ̀rùn." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n po oúnjẹ kan tàbí ṣàtúnṣe rẹ̀ pẹ̀lú igun mẹ́rin Pearson láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣe silage tàbí koríko gbígbẹ ṣáájú ìgbà ẹ̀ẹ̀rùn tó ń bọ̀",
      "Ìyípadà nínú owó oúnjẹ fún kg kọ̀ọ̀kan tí ẹran fi kún, fún páálí ẹyin kọ̀ọ̀kan tàbí fún lítà wàrà kọ̀ọ̀kan tí àwọn akẹ́kọ̀ọ́ ròyìn lẹ́yìn oṣù mẹ́ta",
      "Ìròyìn tí ó dín kù nípa oúnjẹ tó ti bu àti àìsàn tí oúnjẹ fà nínú agbo ẹran àti agbo adìẹ àwọn akẹ́kọ̀ọ́"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Ìwé, gègé àti ẹ̀rọ ìṣirò fóònù; spreadsheet lórí fóònù kò pọn dandan",
      "Iye owó oúnjẹ 8 sí 10 ní agbègbè rẹ, àti iye protein wọn láti ara àpò tàbí láti ọ̀dọ̀ ẹni tó ń tà á",
      "Fún ìfihàn ẹgbẹ́: koríko tí a gé, àpò ọ̀rá tàbí ọ̀pá ọ̀rá tó lágbára, àti òṣùwọ̀n",
      "Nǹkan bí ìṣẹ́jú 70 sí 80 lápapọ̀, ní àwọn ìpàdé kúkúrú: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ṣáájú ìpàdé, kó iye owó oúnjẹ ẹran àti iye protein wọn jọ ní agbègbè rẹ (ohun tí a kọ sára àpò, ilé-ìwádìí oúnjẹ ẹran tàbí ọ́fíìsì ìtọ́sọ́nà àgbẹ̀) kí àwọn akẹ́kọ̀ọ́ lè fi nọ́mbà gidi ṣe àṣeṣe.",
      "Ẹ ṣe igun mẹ́rin Pearson pọ̀ lórí pátákó tàbí ìwé ńlá pẹ̀lú àpẹẹrẹ ìbílẹ̀ kan, lẹ́yìn náà jẹ́ kí àwọn akẹ́kọ̀ọ́ ní méjì-méjì ṣe èkejì.",
      "Ṣe ìfihàn silage inú àpò tí àsìkò bá gbà á, kí ẹ sì ṣí i pẹ̀lú ẹgbẹ́ náà ní ọ̀sẹ̀ díẹ̀ lẹ́yìn náà.",
      "Má ṣe sọ iye oògùn, èròjà àfikún tàbí oúnjẹ olóògùn; darí irú ìbéèrè bẹ́ẹ̀ sí dókítà ẹranko àti ohun tí a kọ sára rẹ̀.",
      "Fi rubric ṣe àmì fún oúnjẹ tí a ṣírò owó rẹ̀, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};

"use strict";

// Koach Learn course (Yoruba translation of shared/data-annotation-online-work.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const MINDRIFT = { name: "Mindrift (iṣẹ́ ìdánilẹ́kọ̀ọ́ AI; ó sọ pé iṣẹ́ Toloka ti wá síbí, dídarapọ̀ sì jẹ́ ọ̀fẹ́)", url: "https://mindrift.ai/welcome" };
const CROWDGEN = { name: "CrowdGen by Appen (iṣẹ́ àkànṣe fún olùkópa; ó sọ pé òun kì í béèrè owó láti darapọ̀)", url: "https://crowdgen.com/" };
const CLICKWORKER = { name: "Clickworker (iṣẹ́ kékeré bí dátà ìdánilẹ́kọ̀ọ́ AI, ìwádìí àti gbígba ohùn sílẹ̀)", url: "https://www.clickworker.com/clickworker/" };
const SAMA = { name: "Sama careers (ọ́fíìsì ní Nairobi, Kenya, àti Gulu àti Kampala, Uganda)", url: "https://www.sama.com/careers" };
const FTC_JOBS = { name: "US Federal Trade Commission: Jìbìtì iṣẹ́ (Job scams)", url: "https://consumer.ftc.gov/articles/job-scams" };
const ILO_PLATFORMS = { name: "ILO: Ipa àwọn pẹpẹ iṣẹ́ orí ayélujára nínú yíyí ayé iṣẹ́ padà", url: "https://www.ilo.org/publications/flagship-reports/role-digital-labour-platforms-transforming-world-work" };
const NDPC = { name: "Nigeria Data Protection Commission (Àjọ Ìdáàbòbò Dátà Nàìjíríà)", url: "https://ndpc.gov.ng/" };

module.exports = {
  id: "data-annotation-online-work-yo",
  lang: "yo",
  translationOf: "data-annotation-online-work",
  category: "Workforce Development",
  name: "Fífi Àmì sí Dátà fún AI àti Iṣẹ́ Kékeré Orí Ayélujára",
  skills: "Dídá iṣẹ́ fífi àmì sí dátà àti iṣẹ́ kékeré mọ̀, Fífi àmì sí dátà nípa títẹ̀lé ìlànà, Yíyege ìdánwò ìyọ̀ǹda àti mímú ìpele dídára ga, Ṣíṣàyẹ̀wò pé pẹpẹ iṣẹ́ jẹ́ gidi àti kíkọ iṣẹ́ ayédèrú, Dídáàbò bo dátà àdáni àti dátà iṣẹ́, Ṣíṣírò owó gidi tí o ń gbà ní wákàtí kan",
  outcome: "fi àmì sí dátà fún AI nípa títẹ̀lé ìlànà tí a kọ sílẹ̀, ṣàyẹ̀wò pé pẹpẹ iṣẹ́ orí ayélujára jẹ́ gidi kí o tó darapọ̀, dáàbò bo dátà tìrẹ àti dátà tí o bá rí, kí o sì ṣírò iye tí iṣẹ́ náà ń san fún ọ gan-an ní wákàtí kan.",
  about: [
    "Àwọn irinṣẹ́ AI ń kẹ́kọ̀ọ́ láti inú àpẹẹrẹ tí ènìyàn ń pèsè: fọ́tò tí a fa àpótí yí ọkọ̀ ká, gbólóhùn tí a sàmì sí bí rere tàbí búburú, ohùn tí a tẹ̀ sílẹ̀ ní ọ̀rọ̀, àti ìdáhùn AI tí a tò láti èyí tó dára jù dé èyí tó burú jù. A ń pe iṣẹ́ yìí ní data annotation tàbí data labeling (fífi àmì sí dátà). Ọ̀pọ̀ ènìyàn ń ṣe é lórí ayélujára gẹ́gẹ́ bí iṣẹ́ kékeré tí a ń sanwó fún, tí a ń pè ní micro-jobs, láti Nairobi dé Èkó, Accra, Dakar, Manila, Hyderabad, Bogotá, Mexico City, Casablanca, Cairo àti àwọn ìlú káàkiri US.",
    "Ẹ̀kọ́ yìí wà fún àwọn ọ̀dọ́ àti àgbàlagbà tí wọ́n ní fóònù tàbí kọ̀mpútà, tí wọ́n fẹ́ gbìyànjú iṣẹ́ yìí láìléwu. O máa kọ́ àwọn irú iṣẹ́ pàtàkì, o máa ṣe àṣeṣe fífi àmì sí dátà pẹ̀lú ìlànà tí a kọ sórí ìwé, o máa kọ́ bí ìdánwò ìyọ̀ǹda àti máàkì ìpele dídára ṣe ń ṣiṣẹ́, o máa ṣàyẹ̀wò pé pẹpẹ iṣẹ́ jẹ́ gidi, o máa kọ ọ̀pọ̀ \"iṣẹ́ AI\" ayédèrú tí ó ń béèrè owó, o máa dáàbò bo dátà àdáni, o sì máa ṣírò owó gidi tí o ń gbà ní wákàtí kan.",
    "Sọ òtítọ́ fún ara rẹ nípa owó. Owó kì í dọ́gba: ní àwọn ọ̀sẹ̀ kan iṣẹ́ pọ̀, ní àwọn ọ̀sẹ̀ míì ó kéré gan-an, a kì í sì í sábà sanwó fún àkókò tí o lò fún ìdánwò àti wíwá iṣẹ́. Pẹpẹ iṣẹ́ gidi kì í ní kí o sanwó láti bẹ̀rẹ̀ láéláé. Ẹ̀kọ́ yìí kò ṣèlérí owó; ó ń ràn ọ́ lọ́wọ́ láti pinnu pẹ̀lú ojú tó là.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" tí o lè ṣe sórí ìwé tàbí lórí fóònù. Ìbéèrè kíákíá 2 wà lẹ́yìn ẹ̀kọ́ kọ̀ọ̀kan, ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Ṣe ètò ìbẹ̀rẹ̀ iṣẹ́ kékeré rẹ: (1) àkójọ àṣeṣe ti nǹkan 10 tí o fi àmì sí pẹ̀lú ìlànà ojú-ìwé kan tí o kọ fúnra rẹ, pẹ̀lú àwọn nǹkan tí kò yé tí o sàmì sí (flag); (2) pẹpẹ iṣẹ́ méjì tí o ṣàyẹ̀wò, pẹ̀lú ohun tí o rí fún àyẹ̀wò kọ̀ọ̀kan (ojú-òpó wẹ́ẹ̀bù gidi, dídarapọ̀ ọ̀fẹ́, wọ́n gba orílẹ̀-èdè rẹ, bí wọ́n ṣe ń fi owó ránṣẹ́); (3) àkọsílẹ̀ àmì ìkìlọ̀ jìbìtì márùn-ún rẹ; (4) òfin ààbò dátà mẹ́ta rẹ; àti (5) àkọsílẹ̀ àkókò àti owó ọ̀sẹ̀ kọ̀ọ̀kan pẹ̀lú ètò ọ̀sẹ̀ 4 àti àwọn ọjọ́, pẹ̀lú bí o ṣe máa ṣírò owó gidi tí o ń gbà ní wákàtí kan.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn ọ̀dọ́ àti àgbàlagbà ní US àti lókè òkun (Kenya, Nàìjíríà, Ghana, Senegal, Côte d'Ivoire, Philippines, India, Mexico, Colombia, Morocco, Egypt): àwọn tí wọ́n ṣẹ̀ṣẹ̀ parí ilé-ìwé, àwọn tí wọ́n ti kàwé gboyè, àwọn òbí tí wọ́n wà nílé, àwọn tí wọ́n ń wá owó àfikún, àti àwọn tí ń wá iṣẹ́ tí wọ́n ń rí ìpolówó \"rí owó pẹ̀lú AI\" ṣáá. A ti túmọ̀ ẹ̀kọ́ náà sí èdè mẹ́wàá.",
    startingPoint: "Wọ́n lè lo smartphone, WhatsApp àti ìkànnì àjọlò; àwọn kan ní kọ̀mpútà alágbèérìn (laptop) tàbí wọ́n ń lo ṣọ́ọ̀bù íńtánẹ́ẹ̀tì (cyber café) tàbí ilé-ìkàwé. Ọ̀pọ̀ jù lọ kò tíì fi àmì sí dátà rí, wọn kò tíì ka ìlànà iṣẹ́ tàbí ṣe ìdánwò ìyọ̀ǹda rí. Ọ̀pọ̀ ti rí ìfilọ̀ \"iṣẹ́ láti ilé\" tí ó béèrè owó ìdógò.",
    gap: "Àwọn akẹ́kọ̀ọ́ nílò láti mọ bí iṣẹ́ dátà AI gidi ṣe rí, láti fi àmì sí dátà dáadáa gẹ́gẹ́ bí ìlànà, láti mọ̀ bóyá pẹpẹ iṣẹ́ jẹ́ gidi, láti dáàbò bo dátà àdáni, àti láti ṣírò owó gidi, kí wọ́n lè rí owó níbi tí iṣẹ́ gidi wà, kí wọ́n má sì pàdánù owó àti ìwé ìdánimọ̀ wọn sí iṣẹ́ ayédèrú.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a túmọ̀ rẹ̀ sí èdè mẹ́wàá",
      "Ẹ̀rọ: ọ̀pọ̀ ìgbà smartphone nìkan; dátà íńtánẹ́ẹ̀tì wọ́n; iná mànàmáná lè máà dúró",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 4 sí 6; àṣeṣe sórí ìwé",
      "Pẹpẹ iṣẹ́, àwọn orílẹ̀-èdè tí wọ́n gbà, ọ̀nà ìsanwó àti iye owó máa ń yí padà: àwọn akẹ́kọ̀ọ́ ń ṣàyẹ̀wò ojú-ìwé pẹpẹ kọ̀ọ̀kan fúnra rẹ̀",
      "Má ṣe sanwó láti bẹ̀rẹ̀ láéláé; má ṣe pín ọ̀rọ̀ aṣínà, PIN, kóòdù ẹ̀ẹ̀kan tàbí ìwé ìdánimọ̀ lóde ìfìdímúlẹ̀ gidi ti pẹpẹ náà"
    ],
    prerequisites: "Ọgbọ́n ìpìlẹ̀ lórí fóònù tàbí kọ̀mpútà àti àdírẹ́sì ímeèlì. Kíkàwé dáadáa ní èdè tí iṣẹ́ náà wà."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àkọsílẹ̀ iṣẹ́ orí ayélujára mẹ́jọ", action: "dá àwọn tí ó jẹ́ iṣẹ́ fífi àmì sí dátà tàbí iṣẹ́ kékeré mọ̀, kí o sì dárúkọ ọgbọ́n tí ọ̀kọ̀ọ̀kan nílò", standard: "kí o sì gba ó kéré tán 6 nínú 8 tọ̀nà" },
    { id: "O2", condition: "Tí a bá fún ọ ní ìlànà kúkúrú fún fífi àmì sí dátà àti nǹkan àpẹẹrẹ mẹ́wàá", action: "fi àmì sí nǹkan kọ̀ọ̀kan nípa títẹ̀lé ìlànà náà, kí o sì sàmì sí àwọn tí kò yé", standard: "kí ó bá ìdáhùn tó tọ́ mu ní ó kéré tán 8 nínú 10" },
    { id: "O3", condition: "Kí o tó bẹ̀rẹ̀ ìdánwò ìyọ̀ǹda", action: "kọ àwọn ìgbésẹ̀ tí o máa gbé láti ka ìlànà, ṣe àṣeṣe, kí o sì ṣàyẹ̀wò iṣẹ́ ara rẹ", standard: "tí o fi lè ṣàlàyé bí o ṣe máa mú máàkì ìpele dídára rẹ ga" },
    { id: "O4", condition: "Tí a bá fún ọ ní pẹpẹ iṣẹ́ tàbí ìfilọ̀ iṣẹ́ kan", action: "ṣàyẹ̀wò pé ó jẹ́ gidi, kí o sì dárúkọ àmì ìkìlọ̀ iṣẹ́ ayédèrú èyíkéyìí", standard: "kí o tó san owó kankan tàbí pín ìwé kankan" },
    { id: "O5", condition: "Nígbà tí o bá ń ṣe iṣẹ́", action: "pa ìsọfúnni àdáni rẹ àti dátà iṣẹ́ náà mọ́ ní ìkọ̀kọ̀", standard: "láìpín ọ̀rọ̀ aṣínà, kóòdù tàbí ohun inú iṣẹ́ lóde pẹpẹ náà" },
    { id: "O6", condition: "Lẹ́yìn ọ̀sẹ̀ kan àṣeṣe tàbí iṣẹ́ gidi", action: "kọ àkókò àti owó rẹ sílẹ̀, kí o sì ṣírò owó gidi tí o ń gbà ní wákàtí kan", standard: "pẹ̀lú àkókò tí a kò sanwó fún bí ìdánwò àti wíwá iṣẹ́" }
  ],
  chapters: [
    {
      name: "Orí 1: Ṣíṣe iṣẹ́ náà dáadáa",
      lessons: [
        {
          title: "Ohun tí fífi àmì sí dátà àti iṣẹ́ kékeré jẹ́",
          objectives: ["O1"],
          minutes: 5,
          goal: "Dá àwọn irú iṣẹ́ dátà AI pàtàkì mọ̀ àti ọgbọ́n tí ọ̀kọ̀ọ̀kan nílò.",
          text: [
            "Àwọn irinṣẹ́ AI ń kẹ́kọ̀ọ́ láti inú àpẹẹrẹ. Ènìyàn ló ń pèsè àwọn àpẹẹrẹ wọ̀nyẹn nípa fífi àmì (label) sí wọn: fọ́tò yìí fi kẹ̀kẹ́ hàn, ọ̀rọ̀ yìí jẹ́ ẹ̀sùn, gbólóhùn yìí wà ní Hausa, ìdáhùn AI yìí dára ju ìyẹn lọ. Fífi àmì sí nǹkan báyìí ni a ń pè ní data annotation tàbí data labeling.",
            "Àwọn irú iṣẹ́ tí ó wọ́pọ̀: fífi àmì sí àwòrán (fífa àpótí yí ọkọ̀ kọ̀ọ̀kan ká, tàbí yíyan ẹ̀ka kan), fífi àmì sí ọ̀rọ̀ (ṣé àtúnyẹ̀wò yìí jẹ́ rere, búburú tàbí àárín?), iṣẹ́ ohùn (títẹ ohun tí ẹnìkan sọ sílẹ̀, tàbí gbígba ohùn ara rẹ sílẹ̀ bí o ṣe ń ka gbólóhùn), àti dídiwọ̀n ìdáhùn AI (kíka ìdáhùn méjì láti ọ̀dọ̀ AI kí o sì yan èyí tó dára jù, pẹ̀lú ìdí). Àwọn iṣẹ́ àkànṣe tuntun kan ń wá àwọn akọ́ṣẹ́mọṣẹ́, bí nọ́ọ̀sì, akọ̀wé owó (accountant) tàbí àwọn tí ó gbọ́ èdè méjì dáadáa.",
            "Micro-jobs jẹ́ iṣẹ́ kékeré orí ayélujára tí a ń sanwó fún ní ọ̀kọ̀ọ̀kan, tí ó sábà máa ń gba ìṣẹ́jú-àáyá díẹ̀ sí ìṣẹ́jú díẹ̀. Àwọn kan ń ṣe wọ́n lórí pẹpẹ iṣẹ́ ṣíṣí láti ilé; a gba àwọn míì gẹ́gẹ́ bí òṣìṣẹ́ ní ọ́fíìsì, fún àpẹẹrẹ láti ọwọ́ ilé-iṣẹ́ tí ó ní ẹgbẹ́ dátà ní Nairobi tàbí Kampala. Ọ̀nà yòówù kí ó jẹ́, àwọn ọgbọ́n pàtàkì ni kíkàwé dáadáa, títẹ̀lé òfin gẹ́lẹ́, àfiyèsí tí kò yẹ̀ àti òtítọ́."
          ],
          words: [["Data annotation (data labeling)", "fífi àmì sí fọ́tò, ọ̀rọ̀, ohùn tàbí fídíò kí irinṣẹ́ AI lè kẹ́kọ̀ọ́ láti inú wọn."], ["Micro-job (micro-task)", "iṣẹ́ kékeré orí ayélujára tí a ń sanwó fún ní ọ̀kọ̀ọ̀kan."], ["Dídiwọ̀n ìdáhùn AI (AI response rating)", "kíka ìdáhùn láti ọ̀dọ̀ irinṣẹ́ AI àti ṣíṣèdájọ́ èyí tó dára jù, nípa lílo òfin."], ["Transcription", "títẹ ohun tí a sọ nínú ohùn tí a gbà sílẹ̀ sílẹ̀ gẹ́lẹ́."]],
          slides: [
            { title: "AI ń kẹ́kọ̀ọ́ láti inú àpẹẹrẹ tí a fi àmì sí", bullets: ["Ènìyàn ló ń fi àmì náà sí i", "A ń pè é ní data annotation tàbí data labeling"] },
            { title: "Àwọn irú iṣẹ́ tí ó wọ́pọ̀", bullets: ["Àwòrán: àpótí tàbí ẹ̀ka", "Ọ̀rọ̀: rere, búburú tàbí àárín", "Ohùn: tẹ ohun tí a sọ, tàbí gba ohùn rẹ sílẹ̀", "Ìdáhùn AI: yan èyí tó dára jù, pẹ̀lú ìdí"] },
            { title: "Ibi tí iṣẹ́ wà", bullets: ["Pẹpẹ iṣẹ́ ṣíṣí lórí ayélujára, iṣẹ́ kan lẹ́ẹ̀kan", "Iṣẹ́ ọ́fíìsì ní ilé-iṣẹ́ dátà, gẹ́gẹ́ bí òṣìṣẹ́", "Iṣẹ́ àkànṣe fún akọ́ṣẹ́mọṣẹ́ tàbí àwọn tí ó gbọ́ èdè méjì"] },
            { title: "Àwọn ọgbọ́n tí ó ṣe pàtàkì jù", bullets: ["Kíkàwé dáadáa", "Títẹ̀lé òfin gẹ́lẹ́", "Àfiyèsí tí kò yẹ̀ àti òtítọ́"] }
          ],
          sources: [SAMA, ILO_PLATFORMS],
          tryIt: "Kọ irú iṣẹ́ mẹ́rin náà (àwòrán, ọ̀rọ̀, ohùn, dídiwọ̀n AI) sórí ìwé. Lẹ́gbẹ̀ẹ́ ọ̀kọ̀ọ̀kan, kọ ọgbọ́n kan tí o ti ní tí ó bá a mu, fún àpẹẹrẹ \"Mo gbọ́ Gẹ̀ẹ́sì àti Yorùbá\" lẹ́gbẹ̀ẹ́ ohùn, tàbí \"Mo máa ń kíyèsí nǹkan kékeré\" lẹ́gbẹ̀ẹ́ àwòrán.",
          youCanNow: "dárúkọ àwọn irú iṣẹ́ dátà AI pàtàkì, kí o sì so ọ̀kọ̀ọ̀kan pọ̀ mọ́ ọgbọ́n tí o ti ní.",
          quickCheck: [
            { objective: "O1", q: "Èwo nínú ìwọ̀nyí ni iṣẹ́ fífi àmì sí dátà?", options: ["Títa fóònù lórí ayélujára", "Gbígbé oúnjẹ lórí ọ̀kadà", "Fífa àpótí yí gbogbo ọkọ̀ ká nínú fọ́tò títì", "Títún ojú-iboju laptop ṣe"], answer: 2, why: "Fífa àpótí yí nǹkan ká jẹ́ fífi àmì sí àwòrán, ọ̀kan lára iṣẹ́ annotation pàtàkì." },
            { objective: "O1", q: "Iṣẹ́ kan fi ìdáhùn AI méjì hàn ọ́, ó sì béèrè èyí tó dára jù àti ìdí. Irú iṣẹ́ wo ni?", options: ["Dídiwọ̀n ìdáhùn AI", "Transcription", "Fífi àmì sí àwòrán", "Títẹ ìwé owó sínú kọ̀mpútà"], answer: 0, why: "Ṣíṣèdájọ́ ìdáhùn AI pẹ̀lú ìdí ni dídiwọ̀n ìdáhùn AI." }
          ]
        },
        {
          title: "Fífi àmì sí dátà gẹ́gẹ́ bí ìlànà",
          objectives: ["O2"],
          minutes: 6,
          goal: "Fi àmì sí nǹkan àpẹẹrẹ mẹ́wàá nípa títẹ̀lé ìlànà tí a kọ sílẹ̀, kí o sì sàmì sí àwọn tí kò yé.",
          text: [
            "Gbogbo iṣẹ́ àkànṣe ló ní ìlànà (guideline): àwọn òfin bí a ṣe ń fi àmì sí nǹkan. Ó sọ ohun tí àmì kọ̀ọ̀kan túmọ̀ sí, ó fúnni ní àpẹẹrẹ, ó sì ṣàlàyé àwọn ọ̀ràn tí ó le. Èrò tìrẹ kò ṣe pàtàkì tó ìlànà náà. Tí ìlànà bá sọ pé \"ènìyàn lórí pátákó ìpolówó ka sí ènìyàn\", o máa fi àmì sí i bẹ́ẹ̀, kódà tí ó bá ṣe ọ́ bí àjèjì.",
            "Ka gbogbo ìlànà kí o tó ṣe iṣẹ́ àkọ́kọ́ rẹ, lẹ́yìn náà fi í sílẹ̀ ní ṣíṣí. Wá àwọn àpẹẹrẹ àti àwọn ọ̀ràn ààlà (edge cases): àwọn nǹkan tí ó lè bá àmì méjì mu. Ibẹ̀ ni ọ̀pọ̀ àṣìṣe ti ń ṣẹlẹ̀.",
            "Nígbà tí nǹkan kan kò bá yé ní tòótọ́, má ṣe méfò láìronú. Lo bọ́tìnnì skip tàbí flag tí ó bá wà, tàbí tẹ̀lé ohun tí ìlànà sọ pé kí o ṣe pẹ̀lú àwọn nǹkan tí kò yé. Ṣíṣọ́ra àti ṣíṣe bákan náà nígbà gbogbo dára ju yíyára lọ."
          ],
          steps: ["Ka gbogbo ìlànà lẹ́ẹ̀kan, díẹ̀díẹ̀.", "Kọ àmì kọ̀ọ̀kan àti ìtumọ̀ rẹ̀ sílẹ̀ ní ọ̀rọ̀ ara rẹ.", "Kẹ́kọ̀ọ́ àwọn àpẹẹrẹ àti àwọn ọ̀ràn ààlà.", "Fi àmì sí nǹkan kọ̀ọ̀kan, kí o sì wo ìlànà nígbà tí kò bá dá ọ lójú.", "Sàmì sí (flag) tàbí fo (skip) àwọn nǹkan tí ìlànà kò sọ nípa wọn, bí ó ṣe sọ fún ọ."],
          words: [["Ìlànà (guideline)", "àwọn òfin tí a kọ sílẹ̀ fún iṣẹ́ àkànṣe fífi àmì sí dátà: ohun tí àmì kọ̀ọ̀kan túmọ̀ sí àti bí a ṣe ń bójú tó ọ̀ràn tí ó le."], ["Ọ̀ràn ààlà (edge case)", "nǹkan tí ó lè bá ju àmì kan lọ mu, nítorí náà a gbọ́dọ̀ wo òfin."], ["Flag", "sàmì sí nǹkan pé kò yé tàbí ó ti bàjẹ́ kí olùyẹ̀wò lè wò ó."]],
          slides: [
            { title: "Ìlànà ni ọ̀gá", bullets: ["Ó sọ ohun tí àmì kọ̀ọ̀kan túmọ̀ sí", "Ó fúnni ní àpẹẹrẹ àti ọ̀ràn tí ó le", "Tẹ̀lé e, kódà ju èrò tìrẹ lọ"] },
            { title: "Bí a ṣe ń fi àmì sí dátà dáadáa", bullets: ["Kọ́kọ́ ka gbogbo ìlànà", "Fi í sílẹ̀ ní ṣíṣí nígbà tí o bá ń ṣiṣẹ́", "Wò ó nígbàkígbà tí kò bá dá ọ lójú"] },
            { title: "Ọ̀ràn ààlà àti nǹkan tí kò yé", bullets: ["Ọ̀pọ̀ àṣìṣe ń ṣẹlẹ̀ lórí ọ̀ràn ààlà", "Lo flag tàbí skip bí ìlànà ṣe sọ", "Ṣíṣọ́ra àti ṣíṣe bákan náà dára ju yíyára lọ"] }
          ],
          tryIt: "Ṣe àṣeṣe sórí ìwé. Ìlànà: fi àmì POSITIVE sí ọ̀rọ̀ kọ̀ọ̀kan (inú rẹ̀ dùn sí iṣẹ́ náà), NEGATIVE (inú rẹ̀ kò dùn) tàbí NEUTRAL (ìbéèrè tàbí òtítọ́ lásán); tí inú rẹ̀ bá dùn tí kò sì dùn, fi àmì sí i gẹ́gẹ́ bí ìbéèrè pàtàkì rẹ̀. Fi àmì sí mẹ́wàá wọ̀nyí (ọ̀rọ̀ náà wà ní Gẹ̀ẹ́sì): 1 \"Thank you, delivery was fast!\" 2 \"Where is your shop in Kumasi?\" 3 \"The bread was stale again.\" 4 \"Great price, but the box was broken. Please replace it.\" 5 \"Open on Sunday?\" 6 \"Best tailor in Dakar!\" 7 \"I waited two hours.\" 8 \"Order 2231 arrived.\" 9 \"Love it, but I need a refund for the second one.\" 10 \"asdf\". Ìdáhùn tó tọ́: 1 POS, 2 NEU, 3 NEG, 4 NEG, 5 NEU, 6 POS, 7 NEG, 8 NEU, 9 NEG, 10 flag (kì í ṣe ọ̀rọ̀ gidi).",
          youCanNow: "ka ìlànà fífi àmì sí dátà, lò ó fún nǹkan kọ̀ọ̀kan, kí o sì sàmì sí àwọn nǹkan tí kò sọ nípa wọn.",
          quickCheck: [
            { objective: "O2", q: "Ìlànà sọ pé ènìyàn inú àwòrán eré (cartoon) ka sí ènìyàn. Ìwọ rò pé kò yẹ. Kí ni o máa ṣe?", options: ["Tẹ̀lé èrò tìrẹ", "Fi àmì ènìyàn sí i, bí ìlànà ṣe sọ", "Fo gbogbo àwòrán eré", "Ní kí ọ̀rẹ́ kan lórí WhatsApp pinnu"], answer: 1, why: "Nínú iṣẹ́ fífi àmì sí dátà, ìlànà ló ń pinnu, kì í ṣe èrò ẹni." },
            { objective: "O2", q: "Nǹkan kan kò bá àmì kankan nínú ìlànà mu. Kí ni ìgbésẹ̀ tó dára jù?", options: ["Mú àmì kan láìronú láti fi àkókò pamọ́", "Fún un ní àmì tí ó wọ́pọ̀ jù", "Kúrò lórí pẹpẹ náà", "Sàmì sí i (flag) tàbí fo ó bí ìlànà ṣe sọ"], answer: 3, why: "Síṣàmì sí nǹkan tí kò yé ń jẹ́ kí dátà mọ́, ó sì ń dáàbò bo máàkì ìpele dídára rẹ." }
          ]
        },
        {
          title: "Ìdánwò ìyọ̀ǹda àti máàkì ìpele dídára",
          objectives: ["O3"],
          minutes: 5,
          goal: "Kọ àwọn ìgbésẹ̀ tí o máa gbé láti yege ìdánwò ìyọ̀ǹda àti láti mú máàkì ìpele dídára rẹ ga.",
          text: [
            "Ọ̀pọ̀ iṣẹ́ àkànṣe ń bẹ̀rẹ̀ pẹ̀lú ìdánwò ìyọ̀ǹda (qualification test): iṣẹ́ àṣeṣe díẹ̀ tí a ti mọ ìdáhùn wọn. O sábà máa nílò èsì tó dára kí o tó rí iṣẹ́ tí a ń sanwó fún. Lórí ọ̀pọ̀ pẹpẹ, a kì í sanwó fún àkókò ìdánwò yìí, nítorí náà múra sílẹ̀ dáadáa kí o sì ṣe é nígbà tí o bá ti sinmi.",
            "Lẹ́yìn tí o bá bẹ̀rẹ̀, pẹpẹ náà ń bá a lọ láti ṣàyẹ̀wò iṣẹ́ rẹ. Àwọn nǹkan kan ní ìdáhùn tí a fi pamọ́ tí a ti mọ̀, àwọn olùyẹ̀wò sì ń ṣàyẹ̀wò àpẹẹrẹ díẹ̀. Àwọn méjèèjì pa pọ̀ ló ń ṣe máàkì ìpele dídára (quality score) rẹ. Máàkì gíga lè mú iṣẹ́ púpọ̀ sí i wá; máàkì kékeré lè mú kí wọ́n yọ ọ́ kúrò nínú iṣẹ́ àkànṣe kan.",
            "Láti mú ìpele dídára ga: ka èsì àyẹ̀wò (feedback) èyíkéyìí, tún ìlànà kà nígbà tí ó bá yí padà, lọ díẹ̀díẹ̀ lórí ọ̀ràn ààlà, máa sinmi, má sì lo ọgbọ́n àrékérekè tàbí da ìdáhùn kọ láéláé. Àwọn iṣẹ́ àkànṣe kan kò gbà kí irinṣẹ́ AI ṣe iṣẹ́ náà fún ọ; tẹ̀lé òfin iṣẹ́ àkànṣe náà."
          ],
          steps: ["Ka gbogbo ìlànà kí o tó ṣe ìdánwò.", "Ṣe iṣẹ́ àṣeṣe èyíkéyìí tí wọ́n bá fúnni.", "Ṣe ìdánwò nígbà tí o bá ti sinmi, pẹ̀lú íńtánẹ́ẹ̀tì tí ó dúró.", "Lẹ́yìn àkójọ iṣẹ́ kọ̀ọ̀kan, ka èsì àyẹ̀wò kí o sì kọ àṣìṣe rẹ sílẹ̀.", "Tún ìlànà kà nígbàkígbà tí wọ́n bá ṣe àtúnṣe rẹ̀."],
          words: [["Ìdánwò ìyọ̀ǹda (qualification test)", "ìdánwò kúkúrú ti iṣẹ́ àṣeṣe tí o gbọ́dọ̀ yege kí o tó rí iṣẹ́ tí a ń sanwó fún lórí iṣẹ́ àkànṣe kan."], ["Máàkì ìpele dídára (quality score)", "ìwọ̀n bí àmì rẹ ṣe máa ń tọ̀nà tó, tí a fi ń pinnu bóyá o máa rí iṣẹ́ sí i."], ["Gold question", "iṣẹ́ tí a fi pamọ́ tí a ti mọ ìdáhùn rẹ̀, tí a fi ń ṣàyẹ̀wò bí o ṣe ń tọ̀nà tó."]],
          slides: [
            { title: "Kí iṣẹ́ owó tó dé: ìdánwò", bullets: ["Iṣẹ́ àṣeṣe tí a ti mọ ìdáhùn wọn", "A kì í sábà sanwó fún un, nítorí náà kọ́kọ́ múra", "Ṣe é nígbà tí o ti sinmi, pẹ̀lú íńtánẹ́ẹ̀tì tí ó dúró"] },
            { title: "Wọ́n ń ṣàyẹ̀wò iṣẹ́ rẹ nígbà gbogbo", bullets: ["Ìdáhùn tí a fi pamọ́ tí a ti mọ̀", "Àwọn olùyẹ̀wò ń ṣàyẹ̀wò àpẹẹrẹ díẹ̀", "Àwọn méjèèjì ló ń ṣe máàkì ìpele dídára rẹ"] },
            { title: "Mú máàkì rẹ ga", bullets: ["Ka èsì àyẹ̀wò kí o sì kọ àṣìṣe sílẹ̀", "Tún ìlànà kà nígbà tí ó bá yí padà", "Lọ díẹ̀díẹ̀ lórí ọ̀ràn ààlà; máa sinmi", "Tẹ̀lé òfin iṣẹ́ àkànṣe nípa irinṣẹ́ AI"] }
          ],
          tryIt: "Ṣàyẹ̀wò àmì àṣeṣe mẹ́wàá rẹ láti ẹ̀kọ́ tó kọjá pẹ̀lú ìdáhùn tó tọ́. Kọ máàkì rẹ nínú 10, àwọn nǹkan tí o ṣì, àti òfin kan tí o máa ṣàyẹ̀wò dáadáa sí i nígbà míì. Lẹ́yìn náà kọ ètò ìgbésẹ̀ márùn-ún rẹ fún ìdánwò ìyọ̀ǹda gidi àkọ́kọ́ rẹ.",
          youCanNow: "múra sílẹ̀ fún ìdánwò ìyọ̀ǹda, ṣàyẹ̀wò iṣẹ́ ara rẹ pẹ̀lú ìdáhùn tó tọ́, kí o sì ṣàlàyé bí o ṣe máa mú máàkì ìpele dídára rẹ ga.",
          quickCheck: [
            { objective: "O3", q: "Kí ni ìdánwò ìyọ̀ǹda lórí iṣẹ́ àkànṣe fífi àmì sí dátà?", options: ["Iṣẹ́ àṣeṣe díẹ̀ tí o gbọ́dọ̀ yege kí o tó rí iṣẹ́ tí a ń sanwó fún", "Ìdánwò ilé-ìwé tí o ń sanwó fún", "Ìwé ìbéèrè fún owó yíyá", "Ìfọ̀rọ̀wánilẹ́nuwò fídíò pẹ̀lú ọ̀gá oníbàárà"], answer: 0, why: "Iṣẹ́ àkànṣe ń lo ìdánwò ìyọ̀ǹda láti ṣàyẹ̀wò pé o lè tẹ̀lé ìlànà kí wọ́n tó fún ọ ní iṣẹ́ owó." },
            { objective: "O3", q: "Máàkì ìpele dídára rẹ wálẹ̀ lẹ́yìn tí wọ́n ṣe àtúnṣe ìlànà. Kí ni o kọ́kọ́ máa ṣe?", options: ["Ṣiṣẹ́ kíákíá sí i láti fi rọ́pò rẹ̀", "Ṣí àkáǹtì kejì", "Tún ìlànà tuntun àti èsì àyẹ̀wò rẹ kà", "Pa á tì; máàkì kò ṣe pàtàkì"], answer: 2, why: "Tí máàkì bá wálẹ̀ lẹ́yìn àtúnṣe, òfin kan ló sábà máa ń yí padà; títún un kà pẹ̀lú èsì àyẹ̀wò ló ń yanjú rẹ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ṣíṣe iṣẹ́ náà dáadáa",
        questions: [
          { objective: "O1", q: "Títẹ ohun tí ẹnìkan sọ nínú ohùn tí a gbà sílẹ̀ sílẹ̀ gẹ́lẹ́ ni a ń pè ní:", options: ["Fífi àmì sí àwòrán", "Dídiwọ̀n ìdáhùn AI", "Ìṣirò owó (bookkeeping)", "Transcription"], answer: 3, why: "Transcription túmọ̀ sí títẹ ohun tí a sọ sílẹ̀ gẹ́lẹ́." },
          { objective: "O1", q: "Ọgbọ́n wo ló ṣe pàtàkì jù fún iṣẹ́ fífi àmì sí dátà?", options: ["Títẹ̀wé kíákíá pẹ̀lú ọ̀pọ̀ àṣìṣe", "Kíkàwé dáadáa àti títẹ̀lé òfin gẹ́lẹ́", "Níní kọ̀mpútà olówó ńlá", "Mímọ bí a ṣe ń kọ kóòdù"], answer: 1, why: "Fífi àmì sí dátà dá lórí kíka òfin dáadáa àti lílò wọn bákan náà nígbà gbogbo." },
          { objective: "O2", q: "Ìlànà: fi àmì NEGATIVE sí ọ̀rọ̀ tí inú ẹni náà kò bá dùn. \"Oúnjẹ náà tutù, ó sì pẹ́.\" Àmì wo?", options: ["NEGATIVE", "POSITIVE", "NEUTRAL", "Flag it"], answer: 0, why: "Inú ẹni náà kò dùn sí oúnjẹ náà, nítorí náà ìlànà sọ pé NEGATIVE." },
          { objective: "O2", q: "Níbo ni ọ̀pọ̀ àṣìṣe fífi àmì sí dátà ti ń ṣẹlẹ̀?", options: ["Lórí nǹkan àkọ́kọ́ nìkan", "Lórí nǹkan tí ó ní àpẹẹrẹ tó yé", "Lórí ọ̀ràn ààlà tí ó lè bá àmì méjì mu", "Lórí nǹkan tí o sàmì sí (flag)"], answer: 2, why: "Ọ̀ràn ààlà lè bá ju àmì kan lọ mu, nítorí náà wọ́n nílò àyẹ̀wò òfin dáadáa." },
          { objective: "O3", q: "Àṣà wo ló ń ràn ọ́ lọ́wọ́ láti mú máàkì ìpele dídára rẹ ga?", options: ["Dída ìdáhùn kọ láti inú ẹgbẹ́ chat", "Kíka èsì àyẹ̀wò lẹ́yìn àkójọ iṣẹ́ kọ̀ọ̀kan àti kíkọ àṣìṣe sílẹ̀", "Ṣíṣiṣẹ́ wákàtí mẹ́wàá láìsinmi", "Méfò kíákíá lórí nǹkan tí ó le"], answer: 1, why: "Èsì àyẹ̀wò ń fi àwọn òfin tí o ń ṣì hàn gẹ́lẹ́, kí o lè tún wọn ṣe." }
        ]
      }
    },
    {
      name: "Orí 2: Ṣíṣiṣẹ́ láìléwu àti rírí owó lọ́nà òtítọ́",
      lessons: [
        {
          title: "Ṣíṣàyẹ̀wò pé pẹpẹ iṣẹ́ jẹ́ gidi àti kíkọ iṣẹ́ ayédèrú",
          objectives: ["O4"],
          minutes: 6,
          goal: "Ṣàyẹ̀wò bóyá pẹpẹ iṣẹ́ tàbí ìfilọ̀ iṣẹ́ jẹ́ gidi, kí o sì dárúkọ àwọn àmì ìkìlọ̀ èyí tí ó jẹ́ ayédèrú.",
          text: [
            "Pẹpẹ iṣẹ́ gidi wà. Àwọn àpẹẹrẹ tí wọ́n sọ lórí ojú-òpó wẹ́ẹ̀bù tiwọn pé dídarapọ̀ jẹ́ ọ̀fẹ́ ni CrowdGen ti Appen, Mindrift (ibi tí iṣẹ́ Toloka ti lọ) àti Clickworker. Àwọn pẹpẹ iṣẹ́ máa ń yí padà, wọ́n máa ń tì, wọ́n sì ń gba àwọn orílẹ̀-èdè tó yàtọ̀, nítorí náà máa ṣàyẹ̀wò ojú-òpó wẹ́ẹ̀bù pẹpẹ náà fúnra rẹ̀ nígbà gbogbo fún orílẹ̀-èdè rẹ, iṣẹ́ tí ó wà àti bí wọ́n ṣe ń fi owó ránṣẹ́.",
            "\"Iṣẹ́ AI\" ayédèrú wà níbi gbogbo, lórí WhatsApp, Telegram, TikTok àti Facebook. Àmì tí ó tóbi jù: wọ́n ní kí o sanwó. Iṣẹ́ gidi kì í ní kí o san owó láti darapọ̀, láti ṣí iṣẹ́, fún ìdánilẹ́kọ̀ọ́, fún ohun èlò ìbẹ̀rẹ̀ tàbí láti gba owó tí o ti rí jáde láéláé. US Federal Trade Commission (àjọ ìjọba US tí ó ń dáàbò bo àwọn oníbàárà) sọ pé àwọn agbanisíṣẹ́ olóòótọ́ kì í gba owó lọ́wọ́ rẹ kí o tó rí iṣẹ́.",
            "Àwọn àmì ìkìlọ̀ míì: owó tí ó pọ̀ jù fún iṣẹ́ tí ó rọrùn; olùgbanisíṣẹ́ tí ó ń sọ̀rọ̀ lórí WhatsApp tàbí Telegram nìkan; iṣẹ́ bí fífẹ́ràn fídíò tàbí dídiwọ̀n ọjà níbi tí o gbọ́dọ̀ fi owó sílẹ̀ (ọ̀pọ̀ ìgbà crypto) kí o tó lè tẹ̀síwájú; wọ́n sanwó fún ọ, lẹ́yìn náà wọ́n ní kí o dá apá kan padà; wọ́n béèrè ìwé ìdánimọ̀ rẹ, PIN báńkì tàbí kóòdù ẹ̀ẹ̀kan nínú chat; àti títì ọ́ láti pinnu lónìí."
          ],
          steps: ["Wá ojú-òpó wẹ́ẹ̀bù gidi ti pẹpẹ náà fúnra rẹ; má ṣe lo link inú ọ̀rọ̀ tí wọ́n fi ránṣẹ́.", "Ṣàyẹ̀wò pé dídarapọ̀ jẹ́ ọ̀fẹ́, kí o sì ka ojú-ìwé owó àti ìsanwó rẹ̀.", "Ṣàyẹ̀wò pé ó ń gba òṣìṣẹ́ láti orílẹ̀-èdè rẹ.", "Wá orúkọ pẹpẹ náà pẹ̀lú ọ̀rọ̀ \"scam\" kí o sì ka ohun tí àwọn míì ròyìn.", "Kọ ìfilọ̀ èyíkéyìí tí ó ní kí o sanwó, fi owó sílẹ̀ tàbí dá owó padà."],
          words: [["Jìbìtì iṣẹ́ (task scam)", "iṣẹ́ ayédèrú níbi tí o ti ń ṣe iṣẹ́ tí ó rọrùn, tí o ń rí owó ayédèrú, tí wọ́n sì ń ní kí o fi owó sílẹ̀ kí o tó tẹ̀síwájú tàbí gba owó jáde."], ["Olùgbanisíṣẹ́ (recruiter)", "ẹni tí ó ń wá òṣìṣẹ́ fún ilé-iṣẹ́ kan. Àwọn gidi kì í gba owó lọ́wọ́ rẹ."], ["Ojú-òpó wẹ́ẹ̀bù gidi (official website)", "ojú-òpó ti pẹpẹ náà fúnra rẹ̀, tí o wá fúnra rẹ, kì í ṣe láti inú link tí ẹnìkan fi ránṣẹ́ sí ọ."]],
          slides: [
            { title: "Pẹpẹ iṣẹ́ gidi: ṣàyẹ̀wò wọn fúnra rẹ", bullets: ["Wá ojú-òpó wẹ́ẹ̀bù gidi fúnra rẹ", "Dídarapọ̀ gbọ́dọ̀ jẹ́ ọ̀fẹ́", "Ṣàyẹ̀wò orílẹ̀-èdè rẹ, iṣẹ́ náà àti bí wọ́n ṣe ń fi owó ránṣẹ́"] },
            { title: "Àmì ìkìlọ̀ àkọ́kọ́ jù lọ", bullets: ["Wọ́n ní kí o sanwó", "Láti darapọ̀, ṣí iṣẹ́, gba ìdánilẹ́kọ̀ọ́ tàbí gba owó jáde", "Iṣẹ́ gidi kì í gba owó lọ́wọ́ rẹ kí o tó ṣiṣẹ́ láéláé"] },
            { title: "Àwọn àmì ìkìlọ̀ míì", bullets: ["Owó tí ó pọ̀ jù fún iṣẹ́ tí ó rọrùn", "Olùgbanisíṣẹ́ tí ó ń sọ̀rọ̀ lórí WhatsApp tàbí Telegram nìkan", "Fífi owó sílẹ̀ láti tẹ̀síwájú, tàbí dídá owó padà", "Bíbéèrè ìwé ìdánimọ̀, PIN tàbí kóòdù rẹ nínú chat"] }
          ],
          sources: [CROWDGEN, MINDRIFT, CLICKWORKER, FTC_JOBS],
          tryIt: "Mú pẹpẹ iṣẹ́ méjì (láti inú ẹ̀kọ́ yìí, tàbí èyí tí ọ̀rẹ́ kan ń lò). Fún ọ̀kọ̀ọ̀kan, kọ: ojú-òpó wẹ́ẹ̀bù gidi tí o wá fúnra rẹ, bóyá dídarapọ̀ jẹ́ ọ̀fẹ́, bóyá ó ń gba orílẹ̀-èdè rẹ, bí wọ́n ṣe ń fi owó ránṣẹ́, àti ohunkóhun tí o rí nígbà tí o wá orúkọ rẹ̀ pẹ̀lú \"scam\". Lẹ́yìn náà kọ àkọsílẹ̀ àmì ìkìlọ̀ jìbìtì márùn-ún rẹ.",
          youCanNow: "ṣàyẹ̀wò pẹpẹ iṣẹ́ lórí ojú-òpó wẹ́ẹ̀bù tirẹ̀, kí o sì kọ iṣẹ́ ayédèrú nípa dídárúkọ àwọn àmì ìkìlọ̀ rẹ̀.",
          quickCheck: [
            { objective: "O4", q: "Ọ̀rọ̀ WhatsApp kan fúnni ní \"iṣẹ́ dídiwọ̀n AI\" ṣùgbọ́n ó béèrè owó ìṣíṣẹ́ (activation fee) $20. Kí ni èyí?", options: ["Owó ìbẹ̀rẹ̀ lásán", "Owó ìdánilẹ́kọ̀ọ́ tí ó tọ́", "Àmì ìkìlọ̀ jìbìtì: iṣẹ́ gidi kì í gba owó lọ́wọ́ rẹ láti bẹ̀rẹ̀", "Owó orí"], answer: 2, why: "Bíbéèrè pé kí o sanwó láti bẹ̀rẹ̀ ni àmì tí ó hàn jù pé iṣẹ́ jẹ́ ayédèrú." },
            { objective: "O4", q: "Báwo ni o ṣe yẹ kí o ṣí pẹpẹ iṣẹ́ tí o gbọ́ nípa rẹ̀?", options: ["Tẹ link inú ọ̀rọ̀ olùgbanisíṣẹ́", "Wá ojú-òpó wẹ́ẹ̀bù gidi rẹ̀ fúnra rẹ kí o sì ka ojú-ìwé rẹ̀", "Ní kí olùgbanisíṣẹ́ fi àwòrán ojú-iboju (screenshot) ránṣẹ́", "Gba fáìlì tí olùgbanisíṣẹ́ fi ránṣẹ́ sílẹ̀"], answer: 1, why: "Wíwá ojú-òpó náà fúnra rẹ ń dáàbò bò ọ́ lọ́wọ́ ojú-ìwé ayédèrú tí ó jọ ọ́ àti fáìlì tí ó lè ṣe ìpalára." }
          ]
        },
        {
          title: "Dídáàbò bo dátà rẹ àti dátà iṣẹ́",
          objectives: ["O5"],
          minutes: 5,
          goal: "Kọ òfin mẹ́ta tí ó ń pa ìsọfúnni àdáni rẹ àti dátà iṣẹ́ mọ́ ní ìkọ̀kọ̀.",
          text: [
            "Dáàbò bo ara rẹ. Lo ọ̀rọ̀ aṣínà tí ó lágbára tí o kò lò níbòmíì, kí o sì tan ìwọlé onígbèésẹ̀-méjì (two-step sign-in). Má ṣe pín kóòdù ẹ̀ẹ̀kan, PIN tàbí ọ̀rọ̀ aṣínà pẹ̀lú ẹnikẹ́ni láéláé, kódà ẹni tí ó sọ pé òun wá láti pẹpẹ náà. Pẹpẹ gidi lè béèrè ìwé ìdánimọ̀ láti fìdí rẹ múlẹ̀, ṣùgbọ́n nínú ojú-òpó tàbí app gidi tiwọn nìkan, kì í ṣe nínú chat láéláé.",
            "Dáàbò bo dátà tí o bá rí. Iṣẹ́ lè fi fọ́tò, ohùn, ọ̀rọ̀ tàbí ìsọfúnni ìlera àti owó àwọn ènìyàn hàn. Ọ̀pọ̀ iṣẹ́ àkànṣe ń ní kí o gbà láti pa iṣẹ́ mọ́ ní àṣírí. Má ṣe ya àwòrán ojú-iboju iṣẹ́, má ṣe fi wọ́n sínú ẹgbẹ́, má sì ṣe lẹ̀ wọ́n mọ́ irinṣẹ́ AI míì àyàfi tí iṣẹ́ àkànṣe náà bá gbà. Àwọn orílẹ̀-èdè ní òfin ìdáàbòbò dátà àti àjọ tí ó ń bójú tó o, fún àpẹẹrẹ Nigeria Data Protection Commission.",
            "Dáàbò bo àkáǹtì rẹ. Má ṣe pín tàbí ta àkáǹtì rẹ, má sì jẹ́ kí ẹlòmíì ṣiṣẹ́ lórí rẹ̀. Àwọn pẹpẹ lè ti àkáǹtì nítorí èyí, o sì lè pàdánù owó tí wọn kò tíì san fún ọ. Lo ìdánimọ̀ gidi tìrẹ nìkan."
          ],
          steps: ["Lo ọ̀rọ̀ aṣínà tí ó lágbára tí o kò lò níbòmíì àti ìwọlé onígbèésẹ̀-méjì.", "Pín ìwé ìdánimọ̀ nínú ojú-òpó tàbí app gidi ti pẹpẹ náà nìkan.", "Má ṣe pín kóòdù, PIN tàbí ọ̀rọ̀ aṣínà láéláé.", "Pa ohun inú iṣẹ́ mọ́ sínú pẹpẹ náà: kò sí screenshot tàbí pínpín.", "Má ṣe pín, yá tàbí ta àkáǹtì rẹ láéláé."],
          words: [["Ìwọlé onígbèésẹ̀-méjì (two-step sign-in)", "àyẹ̀wò kejì, bí kóòdù tí wọ́n fi ránṣẹ́ sí fóònù rẹ, nígbà tí o bá ń wọlé."], ["Àṣírí (confidential)", "ìkọ̀kọ̀: o kò gbọ́dọ̀ pín in pẹ̀lú ẹnikẹ́ni lóde iṣẹ́ náà."], ["Kóòdù ẹ̀ẹ̀kan (one-time code)", "kóòdù kúkúrú tí wọ́n fi ránṣẹ́ sí ọ láti fìdí rẹ̀ múlẹ̀ pé ìwọ ni lóòótọ́. Má ṣe pín in láéláé."]],
          slides: [
            { title: "Dáàbò bo ara rẹ", bullets: ["Ọ̀rọ̀ aṣínà tí ó lágbára, tí o kò lò níbòmíì, àti ìwọlé onígbèésẹ̀-méjì", "Má ṣe pín kóòdù, PIN tàbí ọ̀rọ̀ aṣínà láéláé", "Ìwé ìdánimọ̀ nínú ojú-òpó tàbí app gidi nìkan"] },
            { title: "Dáàbò bo dátà iṣẹ́", bullets: ["Iṣẹ́ lè fi ìsọfúnni àwọn ènìyàn gidi hàn", "Kò sí screenshot, kò sí pínpín nínú ẹgbẹ́", "Má ṣe lẹ̀ ẹ́ mọ́ irinṣẹ́ AI míì àyàfi tí wọ́n bá gbà"] },
            { title: "Dáàbò bo àkáǹtì rẹ", bullets: ["Má ṣe pín, yá tàbí ta á", "Lo ìdánimọ̀ tìrẹ nìkan", "Rírú òfin yìí lè mú kí o pàdánù owó tí wọn kò tíì san"] }
          ],
          sources: [NDPC],
          tryIt: "Kọ òfin ààbò dátà mẹ́ta rẹ ní ọ̀rọ̀ ara rẹ: ọ̀kan fún àkáǹtì rẹ, ọ̀kan fún ìwé ìdánimọ̀ àti kóòdù rẹ, àti ọ̀kan fún dátà iṣẹ́. Lẹ́yìn náà tan ìwọlé onígbèésẹ̀-méjì fún àkáǹtì ímeèlì rẹ tí kò bá tíì tàn.",
          youCanNow: "pa ìsọfúnni àdáni rẹ mọ́ láìléwu, kí o sì pa dátà iṣẹ́ mọ́ ní ìkọ̀kọ̀.",
          quickCheck: [
            { objective: "O5", q: "Ẹnìkan sọ pé òun wá láti ẹ̀ka ìrànlọ́wọ́ (support) pẹpẹ náà, ó sì béèrè kóòdù tí wọ́n ṣẹ̀ṣẹ̀ fi ránṣẹ́ sí fóònù rẹ. Kí ni o máa ṣe?", options: ["Má ṣe pín in láéláé, kí o sì kàn sí support láti ojú-òpó gidi", "Fi í ránṣẹ́, nítorí support nílò rẹ̀", "Fi ìdajì kóòdù náà ránṣẹ́", "Fi í sínú ẹgbẹ́ kan láti béèrè"], answer: 0, why: "Kóòdù ẹ̀ẹ̀kan wà fún ìwọ nìkan; pínpín in ń jẹ́ kí ẹlòmíì gba àkáǹtì rẹ." },
            { objective: "O5", q: "Iṣẹ́ kan fi fọ́tò lẹ́tà ìlera àjèjì kan hàn. Kí ló tọ́?", options: ["Ya screenshot rẹ̀ fún àṣeṣe", "Pín in nínú ẹgbẹ́ ẹ̀kọ́ rẹ", "Lẹ̀ ẹ́ mọ́ irinṣẹ́ AI ọ̀fẹ́ láti kà á", "Fi àmì sí i nínú pẹpẹ náà, má sì pín in pẹ̀lú ẹnikẹ́ni"], answer: 3, why: "Dátà iṣẹ́ jẹ́ àṣírí, ó sì gbọ́dọ̀ wà nínú pẹpẹ náà." }
          ]
        },
        {
          title: "Ṣíṣírò owó gidi rẹ àti ṣíṣe ètò",
          objectives: ["O6"],
          minutes: 6,
          goal: "Kọ àkókò àti owó rẹ sílẹ̀, kí o sì ṣírò owó gidi tí o ń gbà ní wákàtí kan.",
          text: [
            "Owó iṣẹ́ kékeré kì í dọ́gba. Ó yàtọ̀ gẹ́gẹ́ bí iṣẹ́ àkànṣe, orílẹ̀-èdè àti pẹpẹ; ní àwọn ọ̀sẹ̀ kan iṣẹ́ pọ̀, ní àwọn ọ̀sẹ̀ míì kò sí rárá. A kì í sábà sanwó fún àkókò ìdánwò, ìdánilẹ́kọ̀ọ́ àti wíwá iṣẹ́. International Labour Organization (ILO, àjọ àgbáyé fún iṣẹ́) ti ṣe ìwádìí iṣẹ́ orí pẹpẹ, ó sì ń pè fún kí ó jẹ́ iṣẹ́ tí ó yẹ, pẹ̀lú owó àti ipò iṣẹ́ tí ó tọ́.",
            "Nítorí náà, díwọ̀n rẹ̀. Máa kọ àkọsílẹ̀ (log) fún gbogbo ìgbà tí o bá ṣiṣẹ́: ọjọ́, ìṣẹ́jú tí o ṣiṣẹ́ (pẹ̀lú ìdánwò àti ìdúró), iṣẹ́ tí o ṣe, àti owó tí o rí. Owó gidi ní wákàtí kan = gbogbo owó tí o rí ÷ gbogbo wákàtí, ní kíka gbogbo àkókò. Àpẹẹrẹ: o rí dọ́là 6 ní ọ̀sẹ̀ kan, o sì lo wákàtí 4 lápapọ̀, nítorí náà owó gidi rẹ ní wákàtí kan jẹ́ dọ́là 1.50.",
            "Lẹ́yìn náà, pinnu. Fi wé àwọn àǹfààní míì nítòsí rẹ. Ọ̀pọ̀ ènìyàn ń ka iṣẹ́ kékeré sí owó àfikún tàbí ìgbésẹ̀ àkọ́kọ́ sí iṣẹ́ tí ó ń sanwó dáadáa jù, bí olùyẹ̀wò ìpele dídára, iṣẹ́ àkànṣe fún akọ́ṣẹ́mọṣẹ́, tàbí iṣẹ́ alákòókò kíkún ní ilé-iṣẹ́ dátà. Pa àkọsílẹ̀ owó tí wọ́n san fún ọ mọ́, kí o sì béèrè lọ́wọ́ àjọ owó orí orílẹ̀-èdè rẹ bóyá àti bí o ṣe máa kéde rẹ̀."
          ],
          steps: ["Kọ ìgbà iṣẹ́ kọ̀ọ̀kan sílẹ̀: ọjọ́, gbogbo ìṣẹ́jú (pẹ̀lú ìdánwò àti ìdúró), iṣẹ́, owó.", "Ṣírò gbogbo owó ọ̀sẹ̀ náà àti gbogbo wákàtí ọ̀sẹ̀ náà.", "Pín owó sí wákàtí láti rí owó gidi rẹ ní wákàtí kan.", "Fi wé àwọn àǹfààní míì tí o ní.", "Ṣètò oṣù tó ń bọ̀: wákàtí, pẹpẹ iṣẹ́, àti ọgbọ́n kan láti mú dàgbà."],
          words: [["Owó gidi ní wákàtí kan (real hourly pay)", "gbogbo owó tí o rí tí a pín sí gbogbo wákàtí tí o lò, pẹ̀lú àkókò tí a kò sanwó fún."], ["Àkókò tí a kò sanwó fún (unpaid time)", "àkókò ìdánwò, ìdánilẹ́kọ̀ọ́ àti wíwá iṣẹ́ tí kò mú owó kankan wá."], ["Àkọsílẹ̀ (log)", "àkọsílẹ̀ tó rọrùn tí o ń kún nígbàkígbà tí o bá ṣiṣẹ́."]],
          slides: [
            { title: "Owó kì í dọ́gba", bullets: ["Ó yàtọ̀ gẹ́gẹ́ bí iṣẹ́ àkànṣe, orílẹ̀-èdè àti pẹpẹ", "Ọ̀sẹ̀ tí iṣẹ́ pọ̀ àti ọ̀sẹ̀ tí kò sí iṣẹ́", "A kì í sábà sanwó fún ìdánwò àti wíwá iṣẹ́"] },
            { title: "Díwọ̀n rẹ̀ pẹ̀lú àkọsílẹ̀", bullets: ["Ọjọ́, gbogbo ìṣẹ́jú, iṣẹ́, owó", "Ka àkókò ìdánwò àti ìdúró náà mọ́ ọn"] },
            { title: "Owó gidi rẹ ní wákàtí kan", bullets: ["Gbogbo owó ÷ gbogbo wákàtí", "Àpẹẹrẹ: dọ́là 6 ÷ wákàtí 4 = dọ́là 1.50 ní wákàtí kan"] },
            { title: "Pinnu kí o sì ṣètò", bullets: ["Fi wé àwọn àǹfààní míì nítòsí rẹ", "Ṣètò wákàtí, pẹpẹ iṣẹ́ àti ọgbọ́n kan láti mú dàgbà", "Pa àkọsílẹ̀ mọ́; béèrè lọ́wọ́ àjọ owó orí"] }
          ],
          sources: [ILO_PLATFORMS],
          tryIt: "Ya àkọsílẹ̀ (log) pẹ̀lú ọ̀wọ́n márùn-ún: ọjọ́, ìṣẹ́jú (gbogbo rẹ̀), iṣẹ́, owó, àkíyèsí. Kún ìlà kan láti inú àṣeṣe tòní (owó 0). Lẹ́yìn náà kọ ètò ọ̀sẹ̀ 4 pẹ̀lú àwọn ọjọ́: pẹpẹ iṣẹ́ méjì wo ni o máa ṣàyẹ̀wò tàbí darapọ̀ mọ́, wákàtí mélòó ní ọ̀sẹ̀ kan, àti ọjọ́ wo ní ọ̀sẹ̀ kọ̀ọ̀kan ni o máa ṣírò owó gidi rẹ ní wákàtí kan.",
          youCanNow: "pa àkọsílẹ̀ àkókò àti owó mọ́, ṣírò owó gidi rẹ ní wákàtí kan, kí o sì ṣètò ọ̀sẹ̀ mẹ́rin tó ń bọ̀.",
          quickCheck: [
            { objective: "O6", q: "O rí dọ́là 10, o sì lo wákàtí 5 lápapọ̀, pẹ̀lú wákàtí ìdánwò 1 tí a kò sanwó fún. Kí ni owó gidi rẹ ní wákàtí kan?", options: ["Dọ́là 10 ní wákàtí kan", "Dọ́là 2.50 ní wákàtí kan", "Dọ́là 2 ní wákàtí kan", "Dọ́là 5 ní wákàtí kan"], answer: 2, why: "Owó gidi ní wákàtí kan ń ka gbogbo àkókò: dọ́là 10 ÷ wákàtí 5 = dọ́là 2 ní wákàtí kan." },
            { objective: "O6", q: "Kí ló yẹ kí ó wà nínú àkọsílẹ̀ iṣẹ́ rẹ?", options: ["Owó tí o rí nìkan", "Àwọn ọjọ́ tí wọ́n sanwó fún ọ nìkan", "Ọ̀rọ̀ aṣínà rẹ, kí o lè rántí rẹ̀", "Ọjọ́, gbogbo ìṣẹ́jú pẹ̀lú ìdánwò àti ìdúró, iṣẹ́ àti owó"], answer: 3, why: "Kíka gbogbo ìṣẹ́jú àti gbogbo ìsanwó ń fi ohun tí iṣẹ́ náà ń san gan-an hàn." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ṣíṣiṣẹ́ láìléwu àti rírí owó lọ́nà òtítọ́",
        questions: [
          { objective: "O4", q: "\"Iṣẹ́ task\" kan lórí Telegram fi owó rẹ hàn bí ó ṣe ń pọ̀ sí i, ṣùgbọ́n ó sọ pé o gbọ́dọ̀ fi crypto sílẹ̀ kí o tó gba owó jáde. Kí ni?", options: ["Ètò ẹ̀bùn lásán", "Jìbìtì iṣẹ́ (task scam)", "Owó báńkì", "Owó orí ìjọba"], answer: 1, why: "Bíbéèrè owó ìdógò láti tẹ̀síwájú tàbí gba owó jáde ni ọ̀nà jìbìtì iṣẹ́." },
          { objective: "O4", q: "Èwo ni àyẹ̀wò àkọ́kọ́ tó dára jù fún pẹpẹ iṣẹ́?", options: ["Wá ojú-òpó wẹ́ẹ̀bù gidi rẹ̀ fúnra rẹ kí o sì fìdí rẹ̀ múlẹ̀ pé dídarapọ̀ jẹ́ ọ̀fẹ́", "Gbẹ́kẹ̀ lé fọ́tò olùgbanisíṣẹ́ lórí profile", "Ka iye ìfẹ́ràn (likes) lórí ìpolówó rẹ̀", "San owó díẹ̀ láti dán an wò"], answer: 0, why: "Ojú-òpó gidi tí o wá fúnra rẹ ń fi hàn bóyá ó jẹ́ ọ̀fẹ́, gidi, àti ṣíṣí sí orílẹ̀-èdè rẹ." },
          { objective: "O5", q: "Pẹpẹ gidi kan ní kí o fìdí ìwé ìdánimọ̀ rẹ múlẹ̀. Níbo ni o yẹ kí o gbé e sí?", options: ["Nínú chat WhatsApp pẹ̀lú olùgbanisíṣẹ́", "Nípa ímeèlì sí àdírẹ́sì èyíkéyìí tí wọ́n bá fúnni", "Nínú ojú-òpó tàbí app gidi ti pẹpẹ náà nìkan", "Nínú ẹgbẹ́ gbangba"], answer: 2, why: "Ìwé ìdánimọ̀ wà fún ìgbésẹ̀ ìfìdímúlẹ̀ gidi nìkan, kì í ṣe nínú chat láéláé." },
          { objective: "O5", q: "Ọ̀rẹ́ kan fẹ́ sanwó láti lo àkáǹtì pẹpẹ iṣẹ́ rẹ. Kí ni o máa ṣe?", options: ["Yá a fún oṣù kan", "Pín ọ̀rọ̀ aṣínà ṣùgbọ́n pa owó mọ́", "Jẹ́ kí ó lò ó ní alẹ́ nìkan", "Kọ̀: pínpín tàbí títa àkáǹtì rú òfin, ó sì fi owó rẹ sínú ewu"], answer: 3, why: "Àwọn pẹpẹ ń ti àkáǹtì tí a pín, o sì lè pàdánù owó tí wọn kò tíì san." },
          { objective: "O6", q: "Kí ló dé tí a fi ń ka àkókò ìdánwò tí a kò sanwó fún sínú àkọsílẹ̀ rẹ?", options: ["Láti rí owó gidi rẹ ní wákàtí kan", "Nítorí pẹpẹ náà máa sanwó fún un lẹ́yìn", "Kò pọn dandan", "Láti pín in lórí ayélujára"], answer: 0, why: "Àkókò tí a kò sanwó fún ń dín ohun tí o ń rí gan-an ní wákàtí kan kù, nítorí náà a gbọ́dọ̀ kà á." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Fífi Àmì sí Dátà fún AI àti Iṣẹ́ Kékeré Orí Ayélujára",
    questions: [
      { objective: "O1", q: "Kí ni data annotation?", options: ["Títún kọ̀mpútà ṣe", "Fífi àmì sí dátà kí irinṣẹ́ AI lè kẹ́kọ̀ọ́ láti inú rẹ̀", "Kíkọ ìròyìn", "Títa dátà fún báńkì"], answer: 1, why: "Annotation túmọ̀ sí fífi àmì sí fọ́tò, ọ̀rọ̀, ohùn tàbí fídíò fún ìdánilẹ́kọ̀ọ́ AI." },
      { objective: "O1", q: "Èwo ni iṣẹ́ kékeré (micro-job)?", options: ["Àdéhùn ọdún méjì gẹ́gẹ́ bí alákòóso", "Níní ṣọ́ọ̀bù", "Yíyan ẹ̀ka fọ́tò ọjà kan, tí a ń sanwó fún ní iṣẹ́ kọ̀ọ̀kan", "Wíwa bọ́ọ̀sì"], answer: 2, why: "Iṣẹ́ kékeré jẹ́ iṣẹ́ orí ayélujára kékeré tí a ń sanwó fún ní ọ̀kọ̀ọ̀kan." },
      { objective: "O1", q: "O gbọ́ Yorùbá àti Gẹ̀ẹ́sì dáadáa. Iṣẹ́ wo ló lè bá ọ mu?", options: ["Títẹ tàbí ṣíṣàyẹ̀wò ohùn Yorùbá tí a gbà sílẹ̀", "Títún fóònù ṣe", "Wíwa ọkọ̀ ìfijíṣẹ́", "Kíkọ́ ilé"], answer: 0, why: "Ọgbọ́n èdè bá iṣẹ́ ohùn àti ọ̀rọ̀ ní èdè yẹn mu." },
      { objective: "O2", q: "Kí ni ìlànà iṣẹ́ àkànṣe kan ń ṣe?", options: ["Ó ń pinnu owó rẹ", "Ó ń kọ máàkì àwọn ọ̀rẹ́ rẹ sílẹ̀", "Ó ń fún ọ ní ọ̀rọ̀ aṣínà", "Ó ń sọ ohun tí àmì kọ̀ọ̀kan túmọ̀ sí àti bí a ṣe ń bójú tó ọ̀ràn tí ó le"], answer: 3, why: "Ìlànà ni àkójọ òfin fún bí a ṣe ń fi àmì sí dátà." },
      { objective: "O2", q: "Ìlànà: fi àmì NEUTRAL sí i tí ọ̀rọ̀ náà bá jẹ́ ìbéèrè tàbí òtítọ́ lásán. \"Aago mélòó ni ẹ máa ń tì?\" Àmì wo?", options: ["POSITIVE", "NEGATIVE", "NEUTRAL", "Flag it"], answer: 2, why: "Ìbéèrè lásán ni, nítorí náà ìlànà sọ pé NEUTRAL." },
      { objective: "O2", q: "\"Bàtà náà dára, ṣùgbọ́n ọ̀kan ti ya. Mo fẹ́ kí ẹ dá owó mi padà.\" Ìlànà sọ pé kí o fi àmì sí ọ̀rọ̀ aláàdàpọ̀ gẹ́gẹ́ bí ìbéèrè pàtàkì. Àmì wo?", options: ["NEGATIVE", "POSITIVE", "NEUTRAL", "Fo ó láìkà á"], answer: 0, why: "Ìbéèrè pàtàkì ni dídá owó padà fún bàtà tí ó ya, nítorí náà NEGATIVE ni." },
      { objective: "O2", q: "Ohùn kan tí a gbà sílẹ̀ jẹ́ ìdákẹ́jẹ́ẹ́ nìkan. Kí ni o máa ṣe?", options: ["Tẹ nǹkan kan láti parí kíákíá", "Sàmì sí i (flag) tàbí fo ó bí ìlànà ṣe sọ", "Da ìdáhùn òṣìṣẹ́ míì kọ", "Kúrò nínú iṣẹ́ àkànṣe náà"], answer: 1, why: "A máa ń sàmì sí nǹkan tí ó ti bàjẹ́ tàbí tí ó ṣófo, a kì í méfò." },
      { objective: "O3", q: "Kí ni gold question?", options: ["Owó ẹ̀bùn", "Ìbéèrè fún àwọn tí ń ta wúrà", "Iṣẹ́ tí a fi pamọ́ tí a ti mọ ìdáhùn rẹ̀, tí ó ń ṣàyẹ̀wò bí o ṣe ń tọ̀nà tó", "Ìdánwò tí o ń rà"], answer: 2, why: "Àwọn pẹpẹ ń fi iṣẹ́ tí a ti mọ ìdáhùn rẹ̀ pamọ́ sáàárín iṣẹ́ rẹ láti díwọ̀n ìpele dídára." },
      { objective: "O3", q: "Ìgbà wo ló dára jù láti ṣe ìdánwò ìyọ̀ǹda?", options: ["Lẹ́sẹ̀kẹsẹ̀, láìka nǹkan kankan", "Lẹ́yìn kíka ìlànà àti ṣíṣe àṣeṣe, nígbà tí o ti sinmi tí íńtánẹ́ẹ̀tì sì dúró", "Ní òru pẹ̀lú dátà tí kò lágbára", "Nígbà tí o ń ṣe iṣẹ́ míì"], answer: 1, why: "Ìmúrasílẹ̀ àti ipò tó dára ń fún ọ ní àǹfààní tó dára jù, a kì í sì í sábà sanwó fún àkókò ìdánwò." },
      { objective: "O3", q: "Kí ló lè ṣẹlẹ̀ tí máàkì ìpele dídára rẹ bá ń wà nísàlẹ̀?", options: ["O máa rí iṣẹ́ púpọ̀ sí i", "Owó rẹ máa di ìlọ́po méjì", "Kò sí ohun tí ó máa ṣẹlẹ̀ láéláé", "Wọ́n lè yọ ọ́ kúrò nínú iṣẹ́ àkànṣe náà"], answer: 3, why: "Àwọn pẹpẹ ń lo máàkì ìpele dídára láti pinnu ẹni tí ó máa máa rí iṣẹ́." },
      { objective: "O3", q: "Òfin iṣẹ́ àkànṣe sọ pé kí o má lo irinṣẹ́ AI láti ṣe iṣẹ́ náà. Kí ni o máa ṣe?", options: ["Tẹ̀lé òfin náà kí o sì ṣe iṣẹ́ náà fúnra rẹ", "Lo irinṣẹ́ AI ní ìkọ̀kọ̀", "Ní kí ọ̀rẹ́ kan lo AI fún ọ", "Dẹ́kun kíka òfin"], answer: 0, why: "Rírú òfin iṣẹ́ àkànṣe lè mú kí o pàdánù iṣẹ́ àkànṣe náà àti àkáǹtì rẹ." },
      { objective: "O4", q: "Ìfilọ̀ wo ló ṣeé ṣe jù kí ó jẹ́ gidi?", options: ["\"San naira 5,000 láti ṣí iṣẹ́\"", "\"Fi crypto sílẹ̀ láti gba owó rẹ jáde\"", "Pẹpẹ iṣẹ́ tí o wá fúnra rẹ tí ojú-òpó rẹ̀ sọ pé dídarapọ̀ jẹ́ ọ̀fẹ́", "\"Rí dọ́là 200 lójoojúmọ́ nípa fífẹ́ràn fídíò\""], answer: 2, why: "Dídarapọ̀ ọ̀fẹ́ àti rírí i lórí ojú-òpó gidi rẹ̀ jẹ́ àmì pẹpẹ gidi; àwọn yòókù jẹ́ ọ̀nà jìbìtì." },
      { objective: "O4", q: "\"Olùgbanisíṣẹ́\" kan san dọ́là 30 fún ọ, lẹ́yìn náà ó ní kí o fi 25 ránṣẹ́ padà. Kí ni èyí?", options: ["Jìbìtì ni: àwọn agbanisíṣẹ́ gidi kì í ní kí o fi owó ránṣẹ́ padà", "Ìdápadà owó lásán", "Owó orí", "Ẹ̀bùn ìdánilẹ́kọ̀ọ́"], answer: 0, why: "FTC kìlọ̀ pé kí wọ́n sanwó fún ọ, kí wọ́n sì ní kí o fi owó ránṣẹ́ padà jẹ́ jìbìtì." },
      { objective: "O4", q: "Èwo ni KÌ Í ṢE àmì ìkìlọ̀ iṣẹ́ ayédèrú?", options: ["Wọ́n béèrè owó láti bẹ̀rẹ̀", "Wọ́n ń sọ̀rọ̀ lórí Telegram nìkan, wọ́n sì ń tì ọ́ láti pinnu lónìí", "Wọ́n béèrè PIN báńkì rẹ", "Ojú-òpó pẹpẹ náà fúnra rẹ̀ ṣàlàyé iṣẹ́ rẹ̀, ó sì sọ pé dídarapọ̀ jẹ́ ọ̀fẹ́"], answer: 3, why: "Ojú-òpó gidi tó yé pẹ̀lú dídarapọ̀ ọ̀fẹ́ jẹ́ àmì rere; àwọn yòókù jẹ́ àmì ìkìlọ̀." },
      { objective: "O5", q: "Èwo ni àṣà àkáǹtì tí ó lágbára?", options: ["Lílo ọ̀rọ̀ aṣínà kan náà níbi gbogbo", "Ọ̀rọ̀ aṣínà tí o kò lò níbòmíì àti ìwọlé onígbèésẹ̀-méjì", "Kíkọ ọ̀rọ̀ aṣínà rẹ sínú profile rẹ", "Pínpín ìwọlé rẹ pẹ̀lú ẹbí"], answer: 1, why: "Ọ̀rọ̀ aṣínà tí o kò lò níbòmíì àti ìwọlé onígbèésẹ̀-méjì ń dáàbò bo àkáǹtì àti owó rẹ." },
      { objective: "O5", q: "Ṣé o lè fi àwòrán iṣẹ́ tí ó dùn mọ́ni sínú ẹgbẹ́ WhatsApp rẹ?", options: ["Bẹ́ẹ̀ ni, tí o bá bò ó díẹ̀ (blur)", "Bẹ́ẹ̀ ni, lẹ́yìn tí iṣẹ́ náà bá parí", "Rárá: dátà iṣẹ́ wà nínú pẹpẹ náà nìkan", "Bẹ́ẹ̀ ni, tí ẹgbẹ́ náà bá kéré"], answer: 2, why: "Dátà iṣẹ́ jẹ́ àṣírí; pínpín in rú òfin, ó sì lè ṣe ìpalára fún àwọn ènìyàn gidi." },
      { objective: "O5", q: "Ta ni ó yẹ kí ó gba kóòdù ìwọlé ẹ̀ẹ̀kan rẹ láéláé?", options: ["Kò sí ẹnìkan", "Support pẹpẹ náà nínú chat", "Olùgbanisíṣẹ́", "Ọ̀rẹ́ tí ó ń ràn ọ́ lọ́wọ́"], answer: 0, why: "Kóòdù ẹ̀ẹ̀kan wà fún ìwọ nìkan; ẹnikẹ́ni tí ó bá béèrè rẹ̀ ń gbìyànjú láti gba àkáǹtì rẹ." },
      { objective: "O6", q: "O rí dọ́là 12 ní ọ̀sẹ̀ kan, o sì lo wákàtí 8 lápapọ̀. Kí ni owó gidi rẹ ní wákàtí kan?", options: ["Dọ́là 12", "Dọ́là 8", "Dọ́là 4", "Dọ́là 1.50"], answer: 3, why: "Dọ́là 12 ÷ wákàtí 8 = dọ́là 1.50 ní wákàtí kan." },
      { objective: "O6", q: "Ọ̀rọ̀ wo nípa owó iṣẹ́ kékeré ló jẹ́ òótọ́?", options: ["Ó jẹ́ bákan náà ní gbogbo ọ̀sẹ̀", "Kò dọ́gba, ó sì yàtọ̀ gẹ́gẹ́ bí iṣẹ́ àkànṣe, orílẹ̀-èdè àti pẹpẹ", "Ó máa ń pọ̀ ju iṣẹ́ àdúgbò lọ nígbà gbogbo", "Ìjọba ló ń pinnu rẹ̀"], answer: 1, why: "Iye iṣẹ́ tí ó wà àti iye owó máa ń yí padà, nítorí náà owó kì í dọ́gba." },
      { objective: "O6", q: "O ń pa àkọsílẹ̀ owó tí o rí lórí ayélujára mọ́. Ta ni o máa béèrè lọ́wọ́ rẹ̀ nípa kíkéde rẹ̀ fún owó orí?", options: ["Olùgbanisíṣẹ́ kan lórí Telegram", "Kò sí ẹnìkan, a kì í gba owó orí lórí owó ayélujára láéláé", "Àjọ owó orí orílẹ̀-èdè rẹ", "Àwọn òṣìṣẹ́ míì nínú ẹgbẹ́ rẹ"], answer: 2, why: "Òfin owó orí yàtọ̀ láti orílẹ̀-èdè sí orílẹ̀-èdè, nítorí náà àjọ owó orí orílẹ̀-èdè rẹ ni orísun tó tọ́." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 4, 7, 9, 11, 12, 15, 17] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Àmì àṣeṣe", objective: "O2", notYet: "Ó kéré sí 8 nínú 10 tí ó bá ìdáhùn tó tọ́ mu, tàbí a méfò àwọn nǹkan tí kò yé.", meets: "Ó kéré tán 8 nínú 10 bá ìdáhùn tó tọ́ mu, a sì sàmì sí nǹkan tí kò yé (flag).", exceeds: "10 nínú 10, pẹ̀lú ìlànà ojú-ìwé kan ní ọ̀rọ̀ ara rẹ tí ó bo àwọn ọ̀ràn ààlà." },
      { name: "Ètò ìdánwò àti ìpele dídára", objective: "O3", notYet: "Kò sí ètò, tàbí ètò náà jẹ́ \"ṣiṣẹ́ kíákíá\" nìkan.", meets: "Ìgbésẹ̀ márùn-ún: ka ìlànà, ṣe àṣeṣe, ṣe ìdánwò lẹ́yìn ìsinmi, ka èsì àyẹ̀wò, tún àtúnṣe kà.", exceeds: "Ó tún kọ àwọn àṣìṣe tìrẹ láti inú àṣeṣe àti òfin tí o máa ṣàyẹ̀wò fún ọ̀kọ̀ọ̀kan." },
      { name: "Pẹpẹ iṣẹ́ tí a ṣàyẹ̀wò", objective: "O4", notYet: "A yan pẹpẹ iṣẹ́ láti inú link nínú ọ̀rọ̀, tàbí a gba láti san owó.", meets: "A ṣàyẹ̀wò pẹpẹ méjì lórí ojú-òpó gidi wọn: dídarapọ̀ ọ̀fẹ́, orílẹ̀-èdè rẹ, bí wọ́n ṣe ń fi owó ránṣẹ́.", exceeds: "Ó tún ní wíwá \"scam\" fún ọ̀kọ̀ọ̀kan àti àkọsílẹ̀ àmì ìkìlọ̀ jìbìtì márùn-ún ní ọ̀rọ̀ ara rẹ." },
      { name: "Òfin ààbò dátà", objective: "O5", notYet: "Òfin kò sí, tàbí ètò náà ń pín kóòdù, ìwé ìdánimọ̀ tàbí dátà iṣẹ́ nínú chat.", meets: "Òfin mẹ́ta tó yé: àkáǹtì, ìwé ìdánimọ̀ àti kóòdù, àti dátà iṣẹ́.", exceeds: "Ìwọlé onígbèésẹ̀-méjì ti tàn, òfin náà sì sọ ohun tí o máa ṣe tí ẹnìkan bá béèrè kóòdù." },
      { name: "Àkọsílẹ̀ owó àti ètò", objective: "O6", notYet: "Kò sí àkọsílẹ̀, tàbí àkọsílẹ̀ náà ka àkókò tí a sanwó fún nìkan.", meets: "Àkọsílẹ̀ tí ó ka gbogbo ìṣẹ́jú, ọ̀nà ìṣirò owó gidi ní wákàtí kan, àti ètò ọ̀sẹ̀ 4 pẹ̀lú àwọn ọjọ́.", exceeds: "Ó tún fi èsì náà wé àǹfààní míì, ó sì dárúkọ ọgbọ́n kan láti mú dàgbà fún iṣẹ́ tí ó ń sanwó dáadáa jù." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n yege ìdánwò ìyọ̀ǹda lórí pẹpẹ gidi, ọ̀fẹ́ láàárín ọjọ́ 60 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ròyìn pé àwọn san owó tàbí owó ìdógò fún \"iṣẹ́ orí ayélujára\" lẹ́yìn ẹ̀kọ́ náà (àfojúsùn: kò sí ẹnìkan)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n lè sọ owó gidi wọn ní wákàtí kan láti inú àkọsílẹ̀ tiwọn ní àtẹ̀lé ọjọ́ 30",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n lọ sí iṣẹ́ tí ó ń sanwó dáadáa jù (olùyẹ̀wò, iṣẹ́ àkànṣe akọ́ṣẹ́mọṣẹ́, tàbí iṣẹ́ ní ilé-iṣẹ́ dátà) láàárín oṣù 6"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Smartphone tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì (àṣeṣe ṣeé ṣe sórí ìwé)",
      "Ìwé àti gègé fún àṣeṣe fífi àmì sí dátà, àkọsílẹ̀ àmì jìbìtì àti àkọsílẹ̀ owó",
      "Àkáǹtì ímeèlì tí ó ní ìwọlé onígbèésẹ̀-méjì",
      "Nǹkan bí ìṣẹ́jú 60 sí 75 lápapọ̀, ní àwọn ìpàdé kúkúrú"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ìdánwò ṣáájú pọ̀. Lẹ́yìn náà ẹ ṣe àṣeṣe fífi àmì sí dátà gẹ́gẹ́ bí ẹgbẹ́ kí ẹ sì fi ìdáhùn wéra: àìfohùnṣọ̀kan ni ọ̀nà tó dára jù láti kọ́ni nípa ọ̀ràn ààlà.",
      "Mú ọ̀rọ̀ jìbìtì gidi wá (pẹ̀lú orúkọ àti nọ́mbà tí a ti yọ kúrò), kí ẹgbẹ́ náà wá àwọn àmì ìkìlọ̀.",
      "Má ṣe dámọ̀ràn pẹpẹ kan gẹ́gẹ́ bí owó tí ó dájú. Àwọn pẹpẹ máa ń yí padà, wọ́n sì ń gba àwọn orílẹ̀-èdè tó yàtọ̀; àwọn akẹ́kọ̀ọ́ ń ṣàyẹ̀wò ojú-ìwé pẹpẹ kọ̀ọ̀kan fúnra rẹ̀.",
      "Má ṣe gba ọ̀rọ̀ aṣínà, kóòdù tàbí ìwé ìdánimọ̀ àwọn akẹ́kọ̀ọ́ láéláé, má sì ṣe ní kí wọ́n forúkọ sílẹ̀ nígbà ìpàdé tí wọn kò bá tíì ṣetán.",
      "Sọ òtítọ́ nípa owó. Ran àwọn akẹ́kọ̀ọ́ lọ́wọ́ láti fi iṣẹ́ kékeré wé àwọn àǹfààní àdúgbò àti ìdánilẹ́kọ̀ọ́ fún iṣẹ́ tí ó ń sanwó dáadáa jù.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};

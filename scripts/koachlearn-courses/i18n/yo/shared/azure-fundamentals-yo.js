"use strict";

// Koach Learn course (Yoruba translation of shared/azure-fundamentals.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const CERT = { name: "Microsoft Learn: Microsoft Certified: Azure Fundamentals (ìwé-ẹ̀rí)", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/" };
const STUDY = { name: "Microsoft Learn: Ìtọ́sọ́nà ìkẹ́kọ̀ọ́ fún Ìdánwò AZ-900", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900" };
const FREE = { name: "Microsoft Azure: Àwọn iṣẹ́ ọ̀fẹ́", url: "https://azure.microsoft.com/en-us/pricing/free-services" };
const CALC = { name: "Microsoft Azure: Ẹ̀rọ ìṣirò iye owó (pricing calculator)", url: "https://azure.microsoft.com/en-us/pricing/calculator/" };

module.exports = {
  id: "azure-fundamentals-yo",
  lang: "yo",
  translationOf: "azure-fundamentals",
  category: "Undeserved Community",
  name: "Ìpìlẹ̀ Microsoft Azure",
  skills: "Ṣíṣàlàyé èrò cloud, Mímọ ìyàtọ̀ láàárín IaaS, PaaS àti SaaS, Ṣíṣètò àwọn resource Azure, Yíyan iṣẹ́ Azure tó bá ohun tí a nílò mu, Ṣíṣírò àti ṣíṣàkóso owó cloud, Ṣíṣètò fún ìdánwò AZ-900",
  outcome: "ṣètò ìlò Azure kékeré kan fún ohun tí àwùjọ kan nílò gan-an: yan àwọn iṣẹ́ tó tọ́, ṣàlàyé bí a ṣe ṣètò wọn àti bí a ṣe dáàbò bò wọ́n, ṣírò iye owó oṣù kan pẹ̀lú ẹ̀rọ ìṣirò iye owó Azure, kí o sì ya ọ̀nà tìrẹ sí ìwé-ẹ̀rí Azure Fundamentals (AZ-900).",
  about: [
    "Microsoft Azure jẹ́ ọ̀kan lára àwọn ìkànnì cloud tó tóbi jù lọ lágbàáyé, ìmọ̀ cloud sì ń ṣí ilẹ̀kùn sí iṣẹ́ IT support, help desk àti iṣẹ́ cloud. Ẹ̀kọ́ yìí jẹ́ ìbẹ̀rẹ̀ ọ̀fẹ́ ní ọ̀rọ̀ tó rọrùn fún àwọn tí wọ́n ṣẹ̀ṣẹ̀ ń bẹ̀rẹ̀ ẹ̀rọ ìgbàlódé, àwọn tí ń yí iṣẹ́ padà, àti àwọn ará àwùjọ tí wọ́n fẹ́ ìwé-ẹ̀rí àkọ́kọ́ tí a mọ̀ káàkiri.",
    "O máa kọ́ àwọn èrò tí ìdánwò Microsoft Azure Fundamentals (AZ-900) ń bò: èrò cloud, àwọn ohun ìpìlẹ̀ Azure àti àwọn iṣẹ́ pàtàkì rẹ̀, àti bí a ṣe ń ṣàkóso Azure, dáàbò bò ó, tí a sì ń sanwó fún un. O kò nílò àkáǹtì Azure: àwọn iṣẹ́ ọwọ́ ń lo àwọn irinṣẹ́ ọ̀fẹ́ Microsoft tí gbogbo ènìyàn lè lò, bí ẹ̀rọ ìṣirò iye owó àti ìdánwò àṣeṣe ọ̀fẹ́.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́. Ẹ̀kọ́ yìí ń ràn ọ́ lọ́wọ́ láti múra sílẹ̀; kì í ṣe ìdánwò gidi, àwọn ojú-ìwé Microsoft fúnra wọn ló sì ní ọ̀rọ̀ ìkẹyìn lórí ìdánwò náà."
  ],
  finalTask: "Kọ ètò Azure ojú-ìwé kan fún ojú-òpó wẹ́ẹ̀bù àti ibi ìpamọ́ fáìlì ti àjọ àwùjọ kékeré kan: dárúkọ irú iṣẹ́ náà (IaaS, PaaS tàbí SaaS) àti àwọn iṣẹ́ Azure tí o máa lò, region àti resource group, bí àwọn ènìyàn ṣe máa wọlé láìléwu, bí o ṣe máa ṣàkóso owó (budget, tag), àti iye owó oṣù kan tí ẹ̀rọ ìṣirò iye owó Azure fi hàn. Lẹ́yìn náà, ṣe ìdánwò àṣeṣe AZ-900 ọ̀fẹ́ ti Microsoft, kí o sì kọ apá méjì tí o kò tíì mọ̀ dáadáa tí o máa kọ́ tẹ̀lé e.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà ní àwọn àwùjọ tí kò rí ìrànlọ́wọ́ tó, tí wọ́n ṣẹ̀ṣẹ̀ ń bẹ̀rẹ̀ ẹ̀rọ ìgbàlódé tàbí tí wọ́n ń yí iṣẹ́ padà, pẹ̀lú àwọn ará àwùjọ tí wọ́n fẹ́ ìwé-ẹ̀rí àkọ́kọ́ tí a mọ̀ káàkiri. Ọ̀pọ̀ ń wá iṣẹ́ IT support, help desk tàbí iṣẹ́ cloud ìpele ìbẹ̀rẹ̀.",
    startingPoint: "Wọ́n lè lo kọ̀mpútà àti browser, ímeèlì àti àwọn app ojoojúmọ́. Wọn kò fi bẹ́ẹ̀ ní ìrírí pẹ̀lú server, nẹ́tíwọ̀kì tàbí ìkànnì cloud, a kò sì retí pé wọ́n ní àkáǹtì Azure.",
    gap: "Àwọn iṣẹ́ IT àti cloud ìpele ìbẹ̀rẹ̀ sábà máa ń béèrè ìmọ̀ cloud ìpìlẹ̀ àti ìwé-ẹ̀rí àkọ́kọ́ bí AZ-900. Àwọn akẹ́kọ̀ọ́ nílò àwọn èrò àti ọ̀rọ̀ pàtàkì, àti àṣà ṣíṣètò, dídáàbò bò àti ṣíṣírò owó ìlò kékeré kan, kí wọ́n lè béèrè iṣẹ́ pẹ̀lú ìgboyà, kí owó cloud tí wọn kò retí má sì yà wọ́n lẹ́nu.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé ọ̀rọ̀ ìmọ̀ ẹ̀rọ nígbà àkọ́kọ́",
      "Ẹ̀rọ: kọ̀mpútà tàbí tablet tí ó ní browser; fóònù kò rọrùn fún ẹ̀rọ ìṣirò iye owó",
      "Owó: kò sí àkáǹtì Azure tàbí káàdì ìsanwó tí a nílò; àwọn iṣẹ́ ọwọ́ ń lo àwọn irinṣẹ́ ọ̀fẹ́ Microsoft",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 5, nǹkan bí ìṣẹ́jú 60 lápapọ̀ pẹ̀lú ìdánwò àṣeṣe",
      "Ìsọfúnni ìdánwò àti iye owó ń yí padà; àwọn akẹ́kọ̀ọ́ ń ṣàyẹ̀wò àwọn ojú-ìwé gidi ti Microsoft"
    ],
    prerequisites: "Kò sí. \"Ìpìlẹ̀ Cloud Computing\" jẹ́ ìbẹ̀rẹ̀ tó rọrùn jù fún àwọn akẹ́kọ̀ọ́ tí kò tíì gbọ́ ọ̀rọ̀ cloud rí."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àpẹẹrẹ ojoojúmọ́ bí ojú-òpó wẹ́ẹ̀bù ilé ìpínoúnjẹ tí ọ̀pọ̀ ènìyàn ń lò", action: "ṣàlàyé ohun tí cloud computing jẹ́, kí o sì dárúkọ àwọn àǹfààní pàtàkì rẹ̀ àti àwọn irú cloud", standard: "ní ọ̀rọ̀ ara rẹ, pẹ̀lú ó kéré tán àǹfààní méjì tó tọ̀nà" },
    { id: "O2", condition: "Tí a bá fún ọ ní iṣẹ́ cloud kan", action: "pín in sí IaaS, PaaS tàbí SaaS, kí o sì sọ ohun tí olùpèsè àti oníbàárà ń dáàbò bò", standard: "kí o sì gba ó kéré tán 4 nínú 5 tọ̀nà" },
    { id: "O3", condition: "Fún iṣẹ́ Azure kékeré kan", action: "yan region àti resource group, kí o sì ṣàlàyé bí wọ́n ṣe wà nínú subscription", standard: "pẹ̀lú ìdí fún region tí o yàn" },
    { id: "O4", condition: "Tí a bá fún ọ ní ohun tí a sábà ń nílò bí ojú-òpó wẹ́ẹ̀bù, server kíkún tàbí ẹ̀dà ìpamọ́ (backup)", action: "so ohun tí a nílò pọ̀ mọ́ iṣẹ́ Azure pàtàkì tó tọ́", standard: "kí o sì gba ó kéré tán 4 nínú 5 tọ̀nà" },
    { id: "O5", condition: "Fún àwọn ènìyàn àti resource inú ètò rẹ", action: "kọ bí o ṣe máa dáàbò bo wíwọlé àti ààyè, kí o sì fi òfin múlẹ̀ pẹ̀lú MFA, RBAC, tag, Azure Policy tàbí resource lock", standard: "kí o dárúkọ ó kéré tán mẹ́ta nínú wọn àti ohun tí ọ̀kọ̀ọ̀kan ń ṣe" },
    { id: "O6", condition: "Pẹ̀lú ẹ̀rọ ìṣirò iye owó Azure ọ̀fẹ́ àti Microsoft Learn", action: "ṣírò iye owó oṣù kan fún ètò rẹ, kí o sì kọ ètò ìkẹ́kọ̀ọ́ AZ-900", standard: "pẹ̀lú àpapọ̀ iye owó àti apá ìdánwò méjì tí o kò tíì mọ̀ dáadáa" }
  ],
  chapters: [
    {
      name: "Orí 1: Èrò cloud àti àwọn ohun ìpìlẹ̀ Azure",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ohun tí cloud jẹ́ àti ìdí tí àwọn àjọ fi ń lò ó",
          minutes: 5,
          goal: "Ṣàlàyé cloud computing àti àwọn àǹfààní pàtàkì rẹ̀ pẹ̀lú àpẹẹrẹ ojoojúmọ́.",
          text: [
            "Cloud computing túmọ̀ sí yíyá agbára kọ̀mpútà, ibi ìpamọ́ àti software lórí íńtánẹ́ẹ̀tì dípò kí o ra server tìrẹ kí o sì máa ṣiṣẹ́ wọn. Microsoft Azure, Amazon Web Services àti Google Cloud ni àwọn olùpèsè cloud tó tóbi jù lọ.",
            "Ó dà bí iná mànàmáná: o kò kọ́ ilé iṣẹ́ iná, o kàn so mọ́ ọn, o sì ń sanwó fún ohun tí o lò. Èyí ni a ń pè ní consumption-based tàbí pay-as-you-go (sanwó bí o ṣe ń lò ó). Dípò rírà ńlá lẹ́ẹ̀kan ní ìbẹ̀rẹ̀ (capital expense, CapEx), o ń san owó ìṣiṣẹ́ tí ń bá a lọ (operating expense, OpEx).",
            "Àwọn àǹfààní pàtàkì: scalability (fi agbára kún un nígbà tí ojú-ìwé ìforúkọsílẹ̀ ilé ìpínoúnjẹ bá kún fún ènìyàn, lẹ́yìn náà dín in kù), high availability (ó ń ṣiṣẹ́ lọ bí ẹ̀rọ kan bá bàjẹ́), ìgbẹ́kẹ̀lé, àwọn irinṣẹ́ ààbò, àti ìṣàkóso tó rọrùn. Irú cloud mẹ́ta ló wà: public (olùpèsè àjọlò bí Azure), private (àjọ kan ṣoṣo ló ń lò ó) àti hybrid (àdàpọ̀ àwọn méjèèjì)."
          ],
          words: [["Cloud computing", "yíyá agbára kọ̀mpútà, ibi ìpamọ́ àti software lórí íńtánẹ́ẹ̀tì."], ["Consumption-based model", "o ń sanwó fún ohun tí o lò nìkan."], ["CapEx / OpEx", "CapEx jẹ́ rírà ńlá lẹ́ẹ̀kan ní ìbẹ̀rẹ̀; OpEx jẹ́ owó tí ń bá a lọ."], ["Scalability", "fífi resource kún tàbí yíyọ ọ́ kúrò bí ìbéèrè ṣe ń yí padà."], ["High availability", "iṣẹ́ kan ń ṣiṣẹ́ lọ kódà nígbà tí àwọn apá kan bá bàjẹ́."], ["Hybrid cloud", "àdàpọ̀ public cloud àti àwọn ẹ̀rọ private ti àjọ kan fúnra rẹ̀."]],
          slides: [
            { title: "Cloud computing ni", bullets: ["Yíyá agbára kọ̀mpútà lórí íńtánẹ́ẹ̀tì", "Bí iná mànàmáná: so mọ́ ọn, sanwó fún ohun tí o lò", "Azure, AWS àti Google Cloud ni àwọn mẹ́ta ńlá"] },
            { title: "Bí a ṣe ń sanwó", bullets: ["Consumption-based: sanwó fún ohun tí o lò", "CapEx: rírà ńlá lẹ́ẹ̀kan ní ìbẹ̀rẹ̀", "OpEx: owó ìṣiṣẹ́ tí ń bá a lọ"] },
            { title: "Àwọn àǹfààní pàtàkì", bullets: ["Scalability àti high availability", "Ìgbẹ́kẹ̀lé àti àwọn irinṣẹ́ ààbò", "Ìṣàkóso tó rọrùn"] },
            { title: "Irú cloud mẹ́ta", bullets: ["Public: olùpèsè àjọlò", "Private: àjọ kan ṣoṣo", "Hybrid: àdàpọ̀ àwọn méjèèjì"] }
          ],
          sources: [STUDY],
          tryIt: "Yan àjọ kan nítòsí rẹ tí o mọ̀ (ṣọ́ọ̀ṣì, ilé ìwòsàn, ilé-ìwé, ilé ìpínoúnjẹ tàbí ṣọ́ọ̀bù kékeré). Kọ ọ̀nà méjì tí ó lè gbà lo cloud, àti àǹfààní wo (scalability, availability, pay-as-you-go) ni ọ̀kọ̀ọ̀kan ń fún un.",
          youCanNow: "ṣàlàyé cloud computing, ọ̀nà pay-as-you-go, àwọn àǹfààní rẹ̀ àti irú cloud mẹ́ta.",
          quickCheck: [
            { objective: "O1", q: "Kí ni OpEx nínú cloud computing?", options: ["Rírà server ńlá lẹ́ẹ̀kan ní ìbẹ̀rẹ̀", "Owó ìṣiṣẹ́ tí o ń san bí o ṣe ń lo iṣẹ́ náà", "Irú virtual machine kan", "Àkókò ìdánrawò ọ̀fẹ́ tí kò ní parí"], answer: 1, why: "Pay-as-you-go ń yí rírà ńlá ìbẹ̀rẹ̀ (CapEx) padà sí owó ìṣiṣẹ́ tí ń bá a lọ (OpEx)." },
            { objective: "O1", q: "Ilé ìwòsàn kan gbọ́dọ̀ tọ́jú àwọn ìsọfúnni kan sórí server tirẹ̀, ṣùgbọ́n ó fẹ́ Azure fún ojú-òpó wẹ́ẹ̀bù rẹ̀. Irú cloud wo ló bá a mu?", options: ["Public nìkan", "Private nìkan", "Kò sí cloud rárá", "Hybrid"], answer: 3, why: "Hybrid cloud ń da server ti àjọ kan pọ̀ mọ́ public cloud bí Azure." }
          ]
        },
        {
          objectives: ["O2"],
          title: "IaaS, PaaS, SaaS àti ẹni tí ó ń bójú tó kí ni",
          minutes: 5,
          goal: "Pín iṣẹ́ kan sí IaaS, PaaS tàbí SaaS, kí o sì sọ ẹni tí ó ń bójú tó kí ni.",
          text: [
            "Iṣẹ́ cloud pín sí ọ̀nà mẹ́ta. IaaS (infrastructure as a service): o yá virtual machine àti nẹ́tíwọ̀kì, ìwọ fúnra rẹ ló sì ń ṣàkóso fẹ́rẹ̀ẹ́ gbogbo nǹkan lórí wọn, bí yíyá ilé òfìfo. PaaS (platform as a service): olùpèsè ló ń ṣiṣẹ́ server àti software ètò; ìwọ mú app tàbí ìsọfúnni rẹ wá, bí ilé tí ó ti ní àga àti ohun èlò. SaaS (software as a service): o kàn ń lo software tí ó ti parí, bí ímeèlì Outlook tàbí Microsoft Teams, bí yàrá ilé ìtura (hotel).",
            "Serverless jẹ́ irú PaaS kan níbi tí kóòdù rẹ ti ń ṣiṣẹ́ nìkan nígbà tí nǹkan kan bá mú un ṣiṣẹ́, o sì ń sanwó fún ìlò kọ̀ọ̀kan, láìsí server kankan tí o máa ṣàkóso (Azure Functions jẹ́ àpẹẹrẹ).",
            "Shared responsibility model (ọ̀nà pípín iṣẹ́ ààbò) sọ ẹni tí ó ń dáàbò bo kí ni. Olùpèsè ló máa ń dáàbò bo àwọn ilé datacenter gidi nígbà gbogbo. Ìwọ ló máa ń bójú tó ìsọfúnni rẹ, àwọn àkáǹtì rẹ àti ẹni tí ó ní ààyè nígbà gbogbo. Láàárín méjèèjì, bí o bá ṣe ń lọ láti IaaS sí SaaS tó, bẹ́ẹ̀ ni olùpèsè ń bójú tó púpọ̀ sí i."
          ],
          steps: ["Béèrè: ṣé àwa ló ń ṣàkóso ètò ìṣiṣẹ́ (operating system)? Tí bẹ́ẹ̀ bá ni, IaaS ni.", "Ṣé app tàbí ìsọfúnni wa nìkan la ń mú wá? Nígbà náà PaaS ni.", "Ṣé a kàn ń wọlé tí a sì ń lo software náà? Nígbà náà SaaS ni.", "Rántí: ìsọfúnni àti àkáǹtì rẹ jẹ́ iṣẹ́ rẹ nígbà gbogbo."],
          words: [["IaaS", "infrastructure as a service: o yá virtual machine, o sì ń ṣàkóso wọn."], ["PaaS", "platform as a service: olùpèsè ń ṣiṣẹ́ ìkànnì náà; ìwọ mú app rẹ wá."], ["SaaS", "software as a service: software tí ó ti ṣetán fún lílò lórí íńtánẹ́ẹ̀tì."], ["Serverless", "kóòdù tí ń ṣiṣẹ́ nìkan nígbà tí a bá mú un ṣiṣẹ́, láìsí server tí o máa ṣàkóso."], ["Shared responsibility model", "bí a ṣe pín iṣẹ́ ààbò láàárín olùpèsè cloud àti ìwọ."]],
          slides: [
            { title: "Irú iṣẹ́ mẹ́ta", bullets: ["IaaS: ilé òfìfo, ìwọ ló ń ṣàkóso púpọ̀ jù", "PaaS: ilé tó ní ohun èlò, ìwọ mú app rẹ wá", "SaaS: yàrá hotel, kàn lò ó"] },
            { title: "Serverless", bullets: ["Kóòdù ń ṣiṣẹ́ nìkan nígbà tí a bá mú un ṣiṣẹ́", "Sanwó fún ìlò kọ̀ọ̀kan, kò sí server láti ṣàkóso", "Àpẹẹrẹ: Azure Functions"] },
            { title: "Pípín iṣẹ́ ààbò", bullets: ["Olùpèsè: ilé datacenter gidi nígbà gbogbo", "Ìwọ: ìsọfúnni, àkáǹtì àti ààyè rẹ nígbà gbogbo", "Láti IaaS sí SaaS: olùpèsè ń ṣe púpọ̀ sí i"] }
          ],
          sources: [STUDY],
          tryIt: "Pín àwọn wọ̀nyí sí IaaS, PaaS tàbí SaaS: ímeèlì Microsoft Outlook, virtual machine Azure, Azure App Service fún ojú-òpó wẹ́ẹ̀bù, Microsoft Teams, Azure Functions. Lẹ́yìn náà, kọ nǹkan kan tí ó jẹ́ iṣẹ́ rẹ nígbà gbogbo, irú yòówù kí ó jẹ́.",
          youCanNow: "mọ ìyàtọ̀ láàárín IaaS, PaaS àti SaaS, kí o sì ṣàlàyé shared responsibility model.",
          quickCheck: [
            { objective: "O2", q: "Irú wo ló dà bí yíyá ilé tó ní ohun èlò: olùpèsè ń ṣiṣẹ́ server, ìwọ sì mú app rẹ wá?", options: ["PaaS", "IaaS", "SaaS", "Private cloud"], answer: 0, why: "Nínú PaaS, olùpèsè ló ń ṣiṣẹ́ server àti software ètò; ìwọ mú app tàbí ìsọfúnni rẹ wá." },
            { objective: "O2", q: "Àjọ aláìlérè rẹ kúrò láti IaaS sí SaaS. Kí ló ṣẹlẹ̀ sí iṣẹ́ ààbò rẹ̀?", options: ["Ó gbọ́dọ̀ máa ṣọ́ datacenter báyìí", "Kò sí ohun tí ó yí padà rárá", "Olùpèsè ń bójú tó púpọ̀ sí i, ṣùgbọ́n ìsọfúnni àti àkáǹtì rẹ ṣì jẹ́ iṣẹ́ rẹ", "Olùpèsè di ẹni tí ó ń bójú tó ọ̀rọ̀ aṣínà rẹ"], answer: 2, why: "Lílọ sí SaaS ń gbé iṣẹ́ púpọ̀ sí i lọ sọ́dọ̀ olùpèsè, ṣùgbọ́n ìsọfúnni àti ààyè rẹ jẹ́ tìrẹ nígbà gbogbo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Bí a ṣe ṣètò Azure: region, zone àti resource group",
          minutes: 6,
          goal: "Ṣàlàyé ibi tí Azure ti ń ṣiṣẹ́ àti bí a ṣe ṣètò àwọn resource tí a sì ń rí wọn nínú Azure portal.",
          text: [
            "Azure ń ṣiṣẹ́ nínú àwọn ilé datacenter káàkiri ayé, tí a kó jọ sí àwọn region, bí East US tàbí South Africa North. O máa yan region fún ohun kọ̀ọ̀kan tí o kọ́: èyí tó sún mọ́ àwọn olùlò rẹ sábà máa ń yára jù, àwọn ìsọfúnni kan sì ní òfin nípa orílẹ̀-èdè tí wọ́n gbọ́dọ̀ dúró sí. Ọ̀pọ̀ region ní availability zone: àwọn datacenter tó yàtọ̀ síra, tí ọ̀kọ̀ọ̀kan ní iná àti ẹ̀rọ ìtútù tirẹ̀, tí ọ̀kan bá bàjẹ́, òmíràn á máa ṣiṣẹ́ lọ. A tún so region kọ̀ọ̀kan pọ̀ mọ́ region míì ní agbègbè kan náà fún ìmúpadàbọ̀sípò lẹ́yìn àjálù.",
            "Gbogbo ohun tí o dá (virtual machine, database, storage account) jẹ́ resource. Àwọn resource ń lọ sínú resource group, àwọn fódà fún àwọn nǹkan tí ó jẹ́ ti ara wọn, bí gbogbo nǹkan fún ojú-òpó wẹ́ẹ̀bù kan. Resource group wà nínú subscription, tí ó jẹ́ àkáǹtì ìsanwó. Àwọn àjọ ńlá ń kó subscription jọ pẹ̀lú management group.",
            "O ń ṣàkóso gbogbo rẹ̀ nínú Azure portal, ojú-òpó wẹ́ẹ̀bù kan ní portal.azure.com. O tún lè lo Azure Cloud Shell, Azure CLI tàbí Azure PowerShell láti ṣàkóso rẹ̀ nípa títẹ àwọn àṣẹ."
          ],
          steps: ["Yan region tó sún mọ́ àwọn olùlò rẹ tí ó sì tẹ̀lé òfin ìsọfúnni èyíkéyìí.", "Lo availability zone nígbà tí iṣẹ́ náà gbọ́dọ̀ máa ṣiṣẹ́ láìdúró.", "Fi àwọn resource tó jọ ara wọn sínú resource group kan.", "Mọ subscription tí ó ń sanwó fún wọn.", "Ṣàkóso gbogbo rẹ̀ nínú Azure portal tàbí pẹ̀lú àwọn irinṣẹ́ àṣẹ (command-line)."],
          words: [["Region", "agbègbè kan lórí ilẹ̀ ayé tí ó ní datacenter Azure kan tàbí jù bẹ́ẹ̀ lọ."], ["Availability zone", "datacenter tó dá dúró nínú region kan, tí ó ní iná, ẹ̀rọ ìtútù àti nẹ́tíwọ̀kì tirẹ̀."], ["Resource", "ohunkóhun tí o dá nínú Azure, bí virtual machine tàbí database."], ["Resource group", "fódà tí ó ń kó àwọn resource tó jọ ara wọn sí."], ["Subscription", "àkáǹtì tí Azure ń gba owó lé lórí."], ["Management group", "ọ̀nà láti kó ọ̀pọ̀ subscription jọ lábẹ́ òfin kan náà."], ["Azure portal", "ojú-òpó wẹ́ẹ̀bù fún ṣíṣàkóso Azure."]],
          slides: [
            { title: "Ibi tí Azure ti ń ṣiṣẹ́", bullets: ["Àwọn datacenter tí a kó jọ sí region", "Yan region nítòsí àwọn olùlò rẹ àti òfin", "Availability zone: àwọn datacenter tó yàtọ̀ síra"] },
            { title: "Bí a ṣe ṣètò rẹ̀", bullets: ["Resource: ohun kan tí o dá", "Resource group: àwọn resource tó jọ ara wọn", "Subscription: ìsanwó", "Management group: ọ̀pọ̀ subscription"] },
            { title: "Bí o ṣe ń ṣàkóso rẹ̀", bullets: ["Azure portal ní portal.azure.com", "Cloud Shell, Azure CLI, Azure PowerShell"] }
          ],
          sources: [STUDY],
          tryIt: "Ṣètò ìlànà fún ibùdó àwùjọ kan tí ó fẹ́ ojú-òpó wẹ́ẹ̀bù àti ibi tí ó máa tọ́jú fọ́ọ̀mù ìforúkọsílẹ̀ sí: fún resource group kan ní orúkọ, kọ resource méjì tí ó máa lọ sínú rẹ̀, kí o sì yan region kan nítòsí rẹ. Kọ ìdí kan tí o fi yan region náà.",
          youCanNow: "ṣàlàyé region, availability zone, resource, resource group, subscription àti management group.",
          quickCheck: [
            { objective: "O3", q: "Kí ni resource group nínú Azure?", options: ["Ẹgbẹ́ àwọn òṣìṣẹ́ Microsoft", "Irú virtual machine kan", "Àkáǹtì ìsanwó", "Fódà fún àwọn resource tí ó jẹ́ ti ara wọn, bí ojú-òpó wẹ́ẹ̀bù kan"], answer: 3, why: "Resource group ń kó àwọn resource tó jọ ara wọn sí; subscription ni àkáǹtì ìsanwó." },
            { objective: "O3", q: "Àwọn olùlò rẹ wà ní South Africa, ìsọfúnni wọn sì gbọ́dọ̀ dúró sí orílẹ̀-èdè náà. Báwo ni o ṣe máa yan region?", options: ["Yan region tó rọ̀ jù níbikíbi", "Yan region tó sún mọ́ àwọn olùlò rẹ tí ó sì tẹ̀lé òfin ìsọfúnni", "Yan region láìronú", "Lo gbogbo region lẹ́ẹ̀kan náà"], answer: 1, why: "Yan region tó sún mọ́ àwọn olùlò tí ó sì tún tẹ̀lé òfin nípa ibi tí ìsọfúnni gbọ́dọ̀ dúró sí." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Èrò cloud àti àwọn ohun ìpìlẹ̀ Azure",
        questions: [
          { objective: "O1", q: "Kí ni consumption-based model?", options: ["O ra gbogbo server ní ìbẹ̀rẹ̀", "Gbogbo nǹkan jẹ́ ọ̀fẹ́ nígbà gbogbo", "O ń sanwó fún ohun tí o lò nìkan", "O ń san iye owó kan náà títí láé"], answer: 2, why: "Iṣẹ́ cloud sábà máa ń jẹ́ pay-as-you-go." },
          { objective: "O1", q: "Ojú-òpó wẹ́ẹ̀bù ilé ìpínoúnjẹ kan máa ń kún fún ènìyàn gan-an lẹ́ẹ̀kan lóṣù. Àǹfààní cloud wo ló ṣèrànwọ́ jù?", options: ["Scalability", "Private cloud", "CapEx", "SaaS"], answer: 0, why: "Scalability ń fi resource kún un nígbà tí ìbéèrè bá pọ̀, ó sì ń yọ wọ́n kúrò lẹ́yìn náà." },
          { objective: "O2", q: "Microsoft Teams tí a ń lò nínú browser jẹ́ àpẹẹrẹ:", options: ["IaaS", "PaaS", "Region kan", "SaaS"], answer: 3, why: "Software tí ó ti ṣetán fún lílò ni, tí a ń fi ránṣẹ́ lórí íńtánẹ́ẹ̀tì." },
          { objective: "O2", q: "Nínú shared responsibility model, kí ló jẹ́ iṣẹ́ rẹ NÍGBÀ GBOGBO?", options: ["Kíkọ́ datacenter", "Ìsọfúnni rẹ àti ẹni tí ó ní ààyè sí i", "Mímú àwọn server tutù", "Pípààrọ̀ hard drive tí ó bàjẹ́"], answer: 1, why: "Oníbàárà ló ni ìsọfúnni, àkáǹtì àti ààyè rẹ̀ nígbà gbogbo." },
          { objective: "O3", q: "Kí ló ń kó àwọn resource Azure tó jọ ara wọn sí, bí gbogbo nǹkan fún ojú-òpó wẹ́ẹ̀bù kan?", options: ["Region kan", "Resource group kan", "Availability zone kan", "Ọ̀rọ̀ aṣínà kan"], answer: 1, why: "Resource group ń ṣètò àwọn resource tí ó jẹ́ ti ara wọn." }
        ]
      }
    },
    {
      name: "Orí 2: Àwọn iṣẹ́ pàtàkì, owó àti ìwé-ẹ̀rí rẹ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Àwọn iṣẹ́ Azure pàtàkì: compute, nẹ́tíwọ̀kì, ibi ìpamọ́ àti database",
          minutes: 6,
          goal: "So ohun tí a sábà ń nílò pọ̀ mọ́ iṣẹ́ Azure pàtàkì tó tọ́.",
          text: [
            "Compute ń ṣiṣẹ́ àwọn ètò rẹ. Azure Virtual Machines ń fún ọ ní kọ̀mpútà kíkún nínú cloud (IaaS). Azure App Service ń gbé ojú-òpó wẹ́ẹ̀bù àti app wẹ́ẹ̀bù láìsí pé o ń ṣàkóso server (PaaS). Container ń di app kan pọ̀ mọ́ gbogbo ohun tí ó nílò kí ó lè ṣiṣẹ́ bákan náà níbikíbi. Azure Functions ń ṣiṣẹ́ àwọn kóòdù kékeré nígbà tí a bá mú wọn ṣiṣẹ́ (serverless). Azure Virtual Desktop ń fún àwọn ènìyàn ní ojú-iṣẹ́ Windows tí wọ́n lè dé láti ẹ̀rọ èyíkéyìí.",
            "Nẹ́tíwọ̀kì ń so àwọn nǹkan pọ̀. Azure virtual network jẹ́ nẹ́tíwọ̀kì àdáni rẹ nínú cloud. VPN Gateway ń so ó pọ̀ mọ́ ọ́fíìsì rẹ lórí íńtánẹ́ẹ̀tì; ExpressRoute jẹ́ ìsopọ̀ àdáni tí kò gba orí íńtánẹ́ẹ̀tì gbogbo ènìyàn. Azure DNS ń yí orúkọ padà sí àdírẹ́sì.",
            "Ibi ìpamọ́ ń tọ́jú fáìlì àti ìsọfúnni. Storage account ní Blob storage (fọ́tò, fídíò, ẹ̀dà ìpamọ́), Azure Files (fódà àjọlò), queue àti table. Storage tier (hot, cool, cold, archive) ń dín owó kù bí o ṣe ń ṣí fáìlì náà díẹ̀ tó. Àwọn ọ̀nà redundancy ń tọ́jú ẹ̀dà àfikún kí ìbàjẹ́ má bàa pa ìsọfúnni rẹ́. Fún database, Azure ní àwọn ọ̀nà tí wọ́n ń ṣàkóso fún ọ, bí Azure SQL Database àti Azure Cosmos DB."
          ],
          steps: ["Ṣé o nílò ojú-òpó wẹ́ẹ̀bù? Wo Azure App Service.", "Ṣé o nílò àkóso server kíkún? Azure Virtual Machines.", "Ṣé o nílò kóòdù tí ń ṣiṣẹ́ nígbà tí nǹkan kan bá ṣẹlẹ̀? Azure Functions.", "Ṣé o nílò láti tọ́jú fáìlì tàbí ẹ̀dà ìpamọ́? Storage account pẹ̀lú Blob storage.", "Fáìlì tí a kì í fi bẹ́ẹ̀ ṣí? Lo tier tó tutù jù, tó sì rọ̀ jù."],
          words: [["Virtual machine (VM)", "kọ̀mpútà tí ń ṣiṣẹ́ bí software nínú cloud."], ["Azure App Service", "iṣẹ́ PaaS fún gbígbé ojú-òpó wẹ́ẹ̀bù àti app wẹ́ẹ̀bù."], ["Container", "àpò tí ó ní app kan àti gbogbo ohun tí ó nílò láti ṣiṣẹ́."], ["Virtual network", "nẹ́tíwọ̀kì àdáni fún àwọn resource Azure rẹ."], ["Blob storage", "ibi ìpamọ́ fún fáìlì ńlá bí fọ́tò, fídíò àti ẹ̀dà ìpamọ́."], ["Storage tier", "ìpele iye owó tí ó dá lórí bí o ṣe ń ṣí ìsọfúnni náà tó: hot, cool, cold tàbí archive."], ["Redundancy", "títọ́jú ẹ̀dà àfikún kí ìsọfúnni lè là á já tí nǹkan bá bàjẹ́."]],
          slides: [
            { title: "Compute", bullets: ["Virtual Machines: kọ̀mpútà kíkún (IaaS)", "App Service: ojú-òpó wẹ́ẹ̀bù (PaaS)", "Functions: kóòdù tí a mú ṣiṣẹ́", "Container àti Virtual Desktop"] },
            { title: "Nẹ́tíwọ̀kì", bullets: ["Virtual network: nẹ́tíwọ̀kì cloud àdáni rẹ", "VPN Gateway: ìsopọ̀ sí ọ́fíìsì rẹ", "ExpressRoute: ìsopọ̀ àdáni", "Azure DNS: láti orúkọ sí àdírẹ́sì"] },
            { title: "Ibi ìpamọ́ àti database", bullets: ["Storage account: Blob, Files, queue, table", "Tier: hot, cool, cold, archive", "Redundancy ń tọ́jú ẹ̀dà àfikún", "Azure SQL Database, Azure Cosmos DB"] }
          ],
          sources: [STUDY],
          tryIt: "Fún ibùdó àwùjọ inú Ẹ̀kọ́ 3, yan iṣẹ́ kan fún ohun kọ̀ọ̀kan tí ó nílò: ojú-òpó wẹ́ẹ̀bù gbogbo ènìyàn, ibi tí ó máa tọ́jú fọ́ọ̀mù ìforúkọsílẹ̀ tí a ti scan, àti fọ́tò àtijọ́ tí a kì í fi bẹ́ẹ̀ ṣí. Kọ iṣẹ́ wo, àti fún àwọn fọ́tò, storage tier wo.",
          youCanNow: "so àwọn ohun tí a sábà ń nílò pọ̀ mọ́ àwọn iṣẹ́ Azure fún compute, nẹ́tíwọ̀kì, ibi ìpamọ́ àti database.",
          quickCheck: [
            { objective: "O4", q: "Iṣẹ́ Azure wo ló ń ṣiṣẹ́ àwọn kóòdù kékeré nìkan nígbà tí nǹkan kan bá mú un ṣiṣẹ́?", options: ["Azure Virtual Machines", "Azure DNS", "Azure Functions", "ExpressRoute"], answer: 2, why: "Azure Functions jẹ́ serverless: kóòdù ń ṣiṣẹ́ nígbà tí a bá mú un ṣiṣẹ́, o sì ń sanwó fún ìlò kọ̀ọ̀kan." },
            { objective: "O4", q: "Ibùdó ọ̀dọ́ kan nílò fódà àjọlò tí gbogbo òṣìṣẹ́ rẹ̀ lè ṣí. Kí ni o máa dábàá?", options: ["Azure Files nínú storage account", "Azure Virtual Desktop", "VPN Gateway", "Azure SQL Database"], answer: 0, why: "Azure Files nínú storage account ń pèsè fódà àjọlò." }
          ]
        },
        {
          objectives: ["O5","O6"],
          title: "Ààbò, ìṣàkóso òfin àti ṣíṣàkóso owó",
          minutes: 6,
          goal: "Dárúkọ àwọn irinṣẹ́ Azure tí ń pa àkáǹtì mọ́, tí ń fi òfin múlẹ̀, tí ó sì ń dènà owó tí a kò retí.",
          text: [
            "Ìdánimọ̀: Microsoft Entra ID ni iṣẹ́ wíwọlé àti àkọsílẹ̀ orúkọ (directory) ti Azure. Tan multifactor authentication (MFA), tí ó ń béèrè ẹ̀rí kejì bí kóòdù nínú app kan, kí ọ̀rọ̀ aṣínà tí wọ́n jí nìkan má bàa tó. Single sign-on (SSO) ń jẹ́ kí ènìyàn lo àkáǹtì kan fún ọ̀pọ̀ app. Role-based access control (RBAC) ń fún ẹnì kọ̀ọ̀kan ní ààyè tí iṣẹ́ rẹ̀ nílò nìkan. Zero Trust túmọ̀ sí pé má ṣe rò láé pé ìbéèrè kan kò léwu; máa ṣàyẹ̀wò nígbà gbogbo.",
            "Ìṣàkóso òfin (governance): Azure Policy ń ṣe òfin, bí \"dá resource sí àwọn region wọ̀nyí nìkan\". Resource lock ń dènà kí a má pa àwọn resource pàtàkì rẹ́ tàbí yí wọn padà láìmọ̀ọ́mọ̀. Tag jẹ́ àmì bí department=youth tàbí project=website tí ó ń ràn ọ́ lọ́wọ́ láti tò wọ́n àti tọpa owó. Microsoft Defender for Cloud ń ṣàyẹ̀wò ìlò rẹ fún ìṣòro ààbò.",
            "Owó: ohun tí o máa san dá lórí iṣẹ́ náà, bí ó ti tóbi tó, region, bí ó ti pẹ́ tó tí ó ń ṣiṣẹ́, àti iye ìsọfúnni tí ó ń kúrò nínú Azure. Ẹ̀rọ ìṣirò iye owó Azure ọ̀fẹ́ ń ṣírò iye owó oṣù kan kí o tó kọ́ ohunkóhun. Cost Management ń jẹ́ kí o ṣe budget (ìwọ̀n owó) àti ìkìlọ̀. Òfin tó rọrùn: pa ohun tí o kò lò rẹ́."
          ],
          steps: ["Tan MFA fún gbogbo àkáǹtì.", "Fún àwọn ènìyàn ní ààyè tí iṣẹ́ wọn nílò nìkan (RBAC).", "Fi tag sí gbogbo resource.", "Lo Azure Policy àti resource lock fún àwọn òfin pàtàkì.", "Kọ́kọ́ ṣírò owó nínú ẹ̀rọ ìṣirò iye owó, lẹ́yìn náà ṣe ìkìlọ̀ budget."],
          words: [["Microsoft Entra ID", "iṣẹ́ wíwọlé àti àkọsílẹ̀ orúkọ ti Microsoft nínú cloud."], ["Multifactor authentication (MFA)", "wíwọlé pẹ̀lú ọ̀rọ̀ aṣínà àti ẹ̀rí kejì."], ["RBAC", "role-based access control: ààyè tí ó dá lórí iṣẹ́ ẹnì kan."], ["Zero Trust", "ọ̀nà ààbò: má ṣe gbẹ́kẹ̀lé láìṣàyẹ̀wò, máa ṣàyẹ̀wò nígbà gbogbo."], ["Azure Policy", "irinṣẹ́ tí ó ń fi òfin múlẹ̀ lórí ohun tí a lè dá."], ["Resource lock", "ó ń dènà kí a má pa resource rẹ́ tàbí yí i padà láìmọ̀ọ́mọ̀."], ["Tag", "àmì lórí resource tí a fi ń tò ó àti tọpa owó."]],
          slides: [
            { title: "Ìdánimọ̀ àti ààyè", bullets: ["Microsoft Entra ID fún wíwọlé", "MFA: ẹ̀rí kejì", "RBAC: ààyè tí iṣẹ́ kan nílò nìkan", "Zero Trust: máa ṣàyẹ̀wò nígbà gbogbo"] },
            { title: "Ìṣàkóso òfin", bullets: ["Azure Policy: fi òfin múlẹ̀", "Resource lock: dènà àṣìṣe", "Tag: tò wọ́n kí o sì tọpa owó", "Defender for Cloud: wá ibi tí kò lágbára"] },
            { title: "Ṣàkóso owó", bullets: ["Owó dá lórí iṣẹ́, ìtóbi, region àti àkókò", "Ẹ̀rọ ìṣirò iye owó: kọ́kọ́ ṣírò", "Budget àti ìkìlọ̀ nínú Cost Management", "Pa ohun tí o kò lò rẹ́"] }
          ],
          sources: [STUDY, CALC],
          tryIt: "Kọ òfin ààbò àti owó mẹ́ta fún ìlò Azure ti ibùdó àwùjọ náà, ọ̀kan fún wíwọlé, ọ̀kan fún ààyè, ọ̀kan fún ìnáwó. Àpẹẹrẹ: \"Gbogbo àkáǹtì olùyọ̀ǹda ń lo MFA.\" Lẹ́yìn náà, kọ tag méjì tí o máa fi sí gbogbo resource.",
          youCanNow: "ṣàlàyé bí Azure ṣe ń pa àkáǹtì mọ́, tí ó ń fi òfin múlẹ̀, tí ó sì ń ṣàkóso owó.",
          quickCheck: [
            { objective: "O5", q: "Kí ni Zero Trust túmọ̀ sí?", options: ["Gbẹ́kẹ̀lé gbogbo ìbéèrè láti inú ọ́fíìsì", "Máa ṣàyẹ̀wò nígbà gbogbo; má ṣe rò pé ìbéèrè kan kò léwu", "Pa ọ̀rọ̀ aṣínà", "Gbẹ́kẹ̀lé olùpèsè cloud nìkan"], answer: 1, why: "Zero Trust túmọ̀ sí pé a ń ṣàyẹ̀wò gbogbo ìbéèrè dípò kí a rò pé kò léwu." },
            { objective: "O5", q: "Wọ́n jí ọ̀rọ̀ aṣínà olùyọ̀ǹda kan, ṣùgbọ́n olè náà kò lè wọlé. Ètò wo ló ṣeé ṣe jù pé ó dá a dúró?", options: ["Tag lórí resource", "Storage tier tó tutù jù", "Resource group", "Multifactor authentication (MFA)"], answer: 3, why: "MFA ń béèrè ẹ̀rí kejì, nítorí náà ọ̀rọ̀ aṣínà tí wọ́n jí nìkan kò tó." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ṣíṣírò owó àti ṣíṣètò ọ̀nà AZ-900 rẹ",
          minutes: 6,
          goal: "Ṣírò iye owó oṣù kan nínú ẹ̀rọ ìṣirò iye owó, kí o sì ṣe ètò ìkẹ́kọ̀ọ́ fún AZ-900.",
          text: [
            "Ẹ̀rọ ìṣirò iye owó jẹ́ ọ̀fẹ́ lórí ojú-òpó wẹ́ẹ̀bù Microsoft. O fi àwọn iṣẹ́ tí o fẹ́ lò kún un, o yan region àti àwọn àṣàyàn bí ìtóbi àti wákàtí, ó sì fi iye owó oṣù kan tí a ṣírò hàn. Iye owó ń yí padà, ó sì dá lórí region, nítorí náà máa lo ẹ̀rọ ìṣirò náà nígbà gbogbo dípò nọ́mbà tí o kà níbìkan.",
            "Tí o bá fẹ́ dánra wò nínú Azure fúnra rẹ̀, Microsoft ń fún àwọn oníbàárà tuntun ní àkáǹtì ọ̀fẹ́ tí àwọn iṣẹ́ kan jẹ́ ọ̀fẹ́ fún oṣù 12, tí iṣẹ́ tó ju 65 lọ sì jẹ́ ọ̀fẹ́ lóṣooṣù títí dé iye kan. Ka àwọn òfin lọ́wọ́lọ́wọ́ lórí ojú-ìwé iṣẹ́ ọ̀fẹ́ Microsoft kí o tó forúkọ sílẹ̀, ṣe ìkìlọ̀ budget, kí o sì pa àwọn resource àṣeṣe rẹ́ nígbà tí o bá parí. Àwọn akẹ́kọ̀ọ́ ilé-ìwé lè yẹ fún ẹ̀bùn Azure for Students tí ó yàtọ̀, pẹ̀lú ímeèlì ilé-ìwé.",
            "Ìdánwò fún ìwé-ẹ̀rí Microsoft Certified: Azure Fundamentals ni AZ-900. Ìtọ́sọ́nà ìkẹ́kọ̀ọ́ Microsoft ṣàkọsílẹ̀ apá mẹ́ta: èrò cloud (25-30%), ìṣètò àti àwọn iṣẹ́ Azure (35-40%), àti ìṣàkóso àti òfin Azure (30-35%). O nílò máàkì 700 tàbí jù bẹ́ẹ̀ lọ láti yege. Ojú-ìwé ìdánwò náà sọ pé ìṣẹ́jú 45 ni ìdánwò náà, iye owó rẹ̀ sì dá lórí orílẹ̀-èdè tí o ti ń ṣe é, nítorí náà ṣàyẹ̀wò rẹ̀ níbẹ̀. Microsoft Learn ní ẹ̀kọ́ ọ̀fẹ́ àti ìdánwò àṣeṣe ọ̀fẹ́."
          ],
          steps: ["Ṣí ẹ̀rọ ìṣirò iye owó Azure.", "Fi àwọn iṣẹ́ inú ètò rẹ kún un, yan region àti ìtóbi rẹ.", "Kọ àpapọ̀ iye owó oṣù kan tí a ṣírò sílẹ̀.", "Ṣí ojú-ìwé AZ-900 lórí Microsoft Learn kí o sì ṣe ìdánwò àṣeṣe ọ̀fẹ́.", "Kọ apá méjì tí o kò tíì mọ̀ dáadáa àti àwọn module Microsoft Learn ọ̀fẹ́ fún wọn."],
          words: [["Pricing calculator", "ẹ̀rọ ìṣirò iye owó: irinṣẹ́ ọ̀fẹ́ Microsoft láti ṣírò owó Azure kí o tó kọ́ nǹkan."], ["AZ-900", "kóòdù ìdánwò fún Microsoft Certified: Azure Fundamentals."], ["Practice assessment", "ìdánwò àṣeṣe: àwọn ìbéèrè ọ̀fẹ́ lórí Microsoft Learn tí ó ń fi hàn bí o ṣe múra sílẹ̀ tó."], ["Microsoft Learn", "ojú-òpó wẹ́ẹ̀bù ẹ̀kọ́ àti ìwé-ẹ̀rí ọ̀fẹ́ ti Microsoft."]],
          slides: [
            { title: "Kọ́kọ́ ṣírò kí o tó kọ́ nǹkan", bullets: ["Ẹ̀rọ ìṣirò iye owó Azure ọ̀fẹ́", "Fi iṣẹ́, region àti ìtóbi kún un", "Iye owó ń yí padà: máa tún ṣàyẹ̀wò"] },
            { title: "Dídánra wò láìléwu", bullets: ["Kọ́kọ́ ka òfin àkáǹtì ọ̀fẹ́", "Ṣe ìkìlọ̀ budget", "Pa resource àṣeṣe rẹ́ nígbà tí o bá parí"] },
            { title: "Ìdánwò AZ-900", bullets: ["Èrò cloud: 25-30%", "Ìṣètò àti àwọn iṣẹ́: 35-40%", "Ìṣàkóso àti òfin: 30-35%", "Máàkì ìyege: 700; iye owó yàtọ̀ láti orílẹ̀-èdè sí orílẹ̀-èdè"] },
            { title: "Ìgbésẹ̀ rẹ tó kàn", bullets: ["Ìdánwò àṣeṣe ọ̀fẹ́ lórí Microsoft Learn", "Kọ́ apá méjì tí o kò tíì mọ̀ dáadáa"] }
          ],
          sources: [CALC, FREE, CERT, STUDY],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò Azure ojú-ìwé kan fún ojú-òpó wẹ́ẹ̀bù àti ibi ìpamọ́ fáìlì ti àjọ àwùjọ kan (àwọn iṣẹ́ àti irú wọn, region, resource group, wíwọlé láìléwu, tag àti budget), fi iye owó oṣù kan láti ẹ̀rọ ìṣirò iye owó kún un, lẹ́yìn náà ṣe ìdánwò àṣeṣe AZ-900 ọ̀fẹ́ kí o sì kọ apá méjì tí o kò tíì mọ̀ dáadáa.",
          youCanNow: "ṣètò ìlò Azure kékeré kan, ṣírò owó rẹ̀, kí o sì tẹ̀lé ọ̀nà tó yé sí ìwé-ẹ̀rí AZ-900.",
          quickCheck: [
            { objective: "O6", q: "Kí ló dé tí o fi máa lo ẹ̀rọ ìṣirò iye owó Azure dípò iye owó tí o kà lórí íńtánẹ́ẹ̀tì?", options: ["Iye owó ń yí padà ó sì dá lórí region, nítorí náà ẹ̀rọ ìṣirò náà ń fún ọ ní ìṣirò lọ́wọ́lọ́wọ́", "Ẹ̀rọ ìṣirò náà ń sọ Azure di ọ̀fẹ́", "Iye owó orí íńtánẹ́ẹ̀tì máa ń ga jù nígbà gbogbo", "Ẹ̀rọ ìṣirò náà ń forúkọ rẹ sílẹ̀ fúnra rẹ̀"], answer: 0, why: "Iye owó ń yí padà ó sì yàtọ̀ láti region sí region, nítorí náà ṣírò pẹ̀lú ẹ̀rọ ìṣirò fún àwọn àṣàyàn tìrẹ." },
            { objective: "O6", q: "O ti ṣe ìdánwò àṣeṣe AZ-900 ọ̀fẹ́. Kí ni ìgbésẹ̀ tó dára jù tó kàn?", options: ["Forúkọ sílẹ̀ fún ìdánwò lónìí láìkẹ́kọ̀ọ́", "Tún un ṣe títí o fi há àwọn ìdáhùn sórí", "Kọ apá méjì tí o kò tíì mọ̀ dáadáa kí o sì wá àwọn module Microsoft Learn ọ̀fẹ́ fún wọn", "Dáwọ́ dúró, nítorí máàkì àṣeṣe kò ṣe pàtàkì"], answer: 2, why: "Àwọn apá tí o kò tíì mọ̀ dáadáa ń fi ibi tí o máa kọ́ tẹ̀lé hàn, Microsoft Learn sì ní module ọ̀fẹ́ fún ọ̀kọ̀ọ̀kan." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Àwọn iṣẹ́ pàtàkì, owó àti ìwé-ẹ̀rí rẹ",
        questions: [
          { objective: "O4", q: "Iṣẹ́ Azure wo ló ń gbé ojú-òpó wẹ́ẹ̀bù láìsí pé o ń ṣàkóso server?", options: ["Azure Virtual Machines", "ExpressRoute", "Resource lock", "Azure App Service"], answer: 3, why: "App Service jẹ́ ìgbé ojú-òpó wẹ́ẹ̀bù PaaS." },
          { objective: "O4", q: "A kì í fi bẹ́ẹ̀ ṣí àwọn fọ́tò àtijọ́. Àṣàyàn ibi ìpamọ́ wo ló ń dín owó kù?", options: ["Tier tó tutù jù bí cool, cold tàbí archive", "Tier hot", "Virtual machine tó tóbi jù", "Subscription kejì"], answer: 0, why: "Tier tó tutù jù ń dín owó kù fún ìsọfúnni tí o kì í fi bẹ́ẹ̀ ṣí." },
          { objective: "O5", q: "Irinṣẹ́ wo ló ń dènà kí a má pa resource pàtàkì rẹ́ láìmọ̀ọ́mọ̀?", options: ["Tag", "Ẹ̀rọ ìṣirò iye owó", "Resource lock", "Region"], answer: 2, why: "Lock ń dènà píparẹ́ tàbí ìyípadà láìmọ̀ọ́mọ̀." },
          { objective: "O5", q: "Kí ni MFA ń fi kún wíwọlé?", options: ["Orúkọ olùlò tó gùn jù", "Subscription ọ̀fẹ́", "Region tuntun", "Ẹ̀rí kejì, bí kóòdù nínú app kan"], answer: 3, why: "MFA túmọ̀ sí pé ọ̀rọ̀ aṣínà tí wọ́n jí nìkan kò tó." },
          { objective: "O6", q: "Ibo ni o ti yẹ kí o rí iye owó ìdánwò AZ-900 lọ́wọ́lọ́wọ́?", options: ["Àmọ̀ràn ọ̀rẹ́ kan", "Àròkọ blog àtijọ́ kan", "Ojú-ìwé ìdánwò gidi ti Microsoft fún orílẹ̀-èdè rẹ", "Chatbot AI èyíkéyìí"], answer: 2, why: "Iye owó dá lórí orílẹ̀-èdè, ojú-ìwé gidi náà sì jẹ́ ti lọ́wọ́lọ́wọ́." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìpìlẹ̀ Microsoft Azure",
    questions: [
      { objective: "O1", q: "Cloud computing túmọ̀ sí:", options: ["Títọ́jú fáìlì sórí USB stick nìkan", "Yíyá agbára kọ̀mpútà àti iṣẹ́ lórí íńtánẹ́ẹ̀tì", "Àsọtẹ́lẹ̀ ojú ọjọ́", "Rírà laptop tuntun"], answer: 1, why: "Cloud túmọ̀ sí lílo kọ̀mpútà olùpèsè kan lórí íńtánẹ́ẹ̀tì." },
      { objective: "O1", q: "Sísan owó ńlá ní ìbẹ̀rẹ̀ láti ra server jẹ́:", options: ["CapEx", "OpEx", "SaaS", "Serverless"], answer: 0, why: "Capital expense jẹ́ rírà ní ìbẹ̀rẹ̀." },
      { objective: "O1", q: "Iṣẹ́ kan ń ṣiṣẹ́ lọ kódà nígbà tí ẹ̀rọ kan bá bàjẹ́. Èyí ni:", options: ["Tag", "Management group", "High availability", "CapEx"], answer: 2, why: "High availability ń jẹ́ kí iṣẹ́ máa ṣiṣẹ́ lọ nígbà ìbàjẹ́." },
      { objective: "O1", q: "Àjọ kan ń lo server tirẹ̀ àti Azure pọ̀. Ìyẹn ni:", options: ["Hybrid cloud", "Private cloud nìkan", "Public cloud nìkan", "SaaS"], answer: 0, why: "Hybrid ń da private àti public pọ̀." },
      { objective: "O2", q: "O yá virtual machine, o sì ń ṣàkóso operating system rẹ̀. Ìyẹn ni:", options: ["SaaS", "PaaS", "Region kan", "IaaS"], answer: 3, why: "Ṣíṣàkóso OS lórí ẹ̀rọ tí o yá jẹ́ IaaS." },
      { objective: "O2", q: "Kóòdù tí ń ṣiṣẹ́ nìkan nígbà tí a bá mú un ṣiṣẹ́, láìsí server láti ṣàkóso, ni a ń pè ní:", options: ["Resource lock", "Serverless", "Archive storage", "VPN"], answer: 1, why: "Serverless ń ṣiṣẹ́ nígbà tí a bá nílò rẹ̀; Azure Functions jẹ́ àpẹẹrẹ." },
      { objective: "O2", q: "Ta ló máa ń dáàbò bo datacenter gidi nígbà gbogbo?", options: ["Oníbàárà", "Olùpèsè cloud", "Báǹkì olùlò", "Kò sí ẹnìkan"], answer: 1, why: "Ààbò ilé gidi jẹ́ iṣẹ́ olùpèsè nígbà gbogbo." },
      { objective: "O3", q: "Region Azure jẹ́:", options: ["Àkáǹtì ìsanwó", "Irú database kan", "Òfin ọ̀rọ̀ aṣínà", "Agbègbè kan lórí ilẹ̀ ayé tí ó ní datacenter kan tàbí jù bẹ́ẹ̀ lọ"], answer: 3, why: "Region ni ibi tí àwọn datacenter Azure wà." },
      { objective: "O3", q: "Availability zone jẹ́:", options: ["Àwọn datacenter tó yàtọ̀ síra nínú region kan tí ó ní iná àti ẹ̀rọ ìtútù tiwọn", "Ìpele iye owó fún ibi ìpamọ́", "Ẹgbẹ́ olùlò", "Orílẹ̀-èdè"], answer: 0, why: "Zone ń dáàbò bò ọ́ tí datacenter kan bá bàjẹ́." },
      { objective: "O3", q: "Èwo ni àkáǹtì ìsanwó tí ó ní resource group nínú?", options: ["Tag", "Container", "Subscription", "Region"], answer: 2, why: "Subscription ni a ń gba owó lé lórí, ó sì ní resource group nínú." },
      { objective: "O3", q: "Níbo ni o ti ń ṣàkóso Azure nínú browser?", options: ["Ilé ìtajà app", "Storage tier", "ExpressRoute", "Azure portal"], answer: 3, why: "Azure portal ni ojú-òpó wẹ́ẹ̀bù ìṣàkóso." },
      { objective: "O4", q: "Iṣẹ́ wo ló ń fún ọ ní kọ̀mpútà kíkún nínú cloud?", options: ["Azure DNS", "Azure Policy", "Azure Virtual Machines", "Tag"], answer: 2, why: "Virtual Machines jẹ́ compute IaaS." },
      { objective: "O4", q: "Èwo ni ìsopọ̀ àdáni sí Azure tí kò lo íńtánẹ́ẹ̀tì gbogbo ènìyàn?", options: ["VPN Gateway", "ExpressRoute", "Azure DNS", "Blob storage"], answer: 1, why: "ExpressRoute jẹ́ ìsopọ̀ àdáni." },
      { objective: "O4", q: "Níbo ni o máa tọ́jú ẹ̀dà ìpamọ́ àti fídíò sí?", options: ["Blob storage nínú storage account", "Azure Policy", "Management group", "Microsoft Entra ID"], answer: 0, why: "Blob storage ń tọ́jú fáìlì ńlá." },
      { objective: "O5", q: "Èwo ni iṣẹ́ wíwọlé àti àkọsílẹ̀ orúkọ ti Azure?", options: ["Azure Advisor", "Azure Functions", "Microsoft Entra ID", "Archive tier"], answer: 2, why: "Entra ID ń ṣàkóso ìdánimọ̀ àti wíwọlé." },
      { objective: "O5", q: "Olùyọ̀ǹda kan nílò láti ka ìròyìn nìkan. Èrò wo ló ń dí i mọ́ ìyẹn?", options: ["Role-based access control (RBAC)", "Hybrid cloud", "Scalability", "Archive storage"], answer: 0, why: "RBAC ń fúnni ní ààyè tí ipa kan nílò nìkan." },
      { objective: "O5", q: "O fẹ́ dènà ẹnikẹ́ni láti dá resource sí ìta region rẹ. Irinṣẹ́ wo?", options: ["Tag", "Ẹ̀rọ ìṣirò iye owó", "Container", "Azure Policy"], answer: 3, why: "Azure Policy ń fi òfin múlẹ̀ bí àwọn region tí a gbà láàyè." },
      { objective: "O5", q: "Àwọn àmì bí project=website lórí resource ni a ń pè ní:", options: ["Lock", "Tag", "Zone", "Tier"], answer: 1, why: "Tag ń tò resource, ó sì ń ràn ọ́ lọ́wọ́ láti tọpa owó." },
      { objective: "O6", q: "Kí o tó kọ́ ohunkóhun, báwo ni o ṣe máa ṣírò iye owó oṣù kan?", options: ["Fojú díwọ̀n", "Lo ẹ̀rọ ìṣirò iye owó Azure", "Dúró de owó àkọ́kọ́", "Béèrè lọ́wọ́ àjèjì kan lórí íńtánẹ́ẹ̀tì"], answer: 1, why: "Ẹ̀rọ ìṣirò náà ń ṣírò owó kí o tó kọ́ nǹkan." },
      { objective: "O6", q: "Máàkì wo ni o nílò láti yege AZ-900, gẹ́gẹ́ bí ìtọ́sọ́nà ìkẹ́kọ̀ọ́ Microsoft ṣe sọ?", options: ["500", "600", "700 tàbí jù bẹ́ẹ̀ lọ", "900 tàbí jù bẹ́ẹ̀ lọ"], answer: 2, why: "Ìtọ́sọ́nà ìkẹ́kọ̀ọ́ Microsoft sọ pé a nílò máàkì 700 tàbí jù bẹ́ẹ̀ lọ." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      3,
      4,
      6,
      7,
      9,
      11,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Irú iṣẹ́ àti àwọn iṣẹ́",
        objective: "O4",
        notYet: "Ètò náà kò dárúkọ iṣẹ́ Azure kankan, tàbí wọn kò bá ojú-òpó wẹ́ẹ̀bù àti ibi ìpamọ́ fáìlì mu.",
        meets: "Ó dárúkọ irú iṣẹ́ náà (IaaS, PaaS tàbí SaaS) àti àwọn iṣẹ́ tó bá a mu, bí App Service àti storage account.",
        exceeds: "Ó sọ ìdí tí iṣẹ́ kọ̀ọ̀kan fi bá a mu ju àṣàyàn míì lọ."
      },
      {
        name: "Region àti ìṣètò",
        objective: "O3",
        notYet: "Kò dárúkọ region tàbí resource group kankan.",
        meets: "Ó dárúkọ region pẹ̀lú ìdí, ó sì fi àwọn resource sínú resource group kan.",
        exceeds: "Ó tún dárúkọ subscription tí ó ń sanwó àti bóyá a nílò availability zone."
      },
      {
        name: "Wíwọlé láìléwu àti àwọn òfin",
        objective: "O5",
        notYet: "Kò sọ bí àwọn ènìyàn ṣe máa wọlé tàbí ẹni tí ó lè ṣe kí ni.",
        meets: "Ó lo MFA, ó sì fún ẹnì kọ̀ọ̀kan ní ààyè tí ó nílò nìkan (RBAC).",
        exceeds: "Ó tún fi tag, policy tàbí resource lock kún un, ó sì sọ ohun tí ọ̀kọ̀ọ̀kan ń dáàbò bò."
      },
      {
        name: "Ìṣirò owó",
        objective: "O6",
        notYet: "Kò sí ìṣirò, tàbí nọ́mbà tí kò wá láti ẹ̀rọ ìṣirò iye owó.",
        meets: "Ó fún wa ní àpapọ̀ iye owó oṣù kan láti ẹ̀rọ ìṣirò iye owó àti ìkìlọ̀ budget.",
        exceeds: "Ó dárúkọ ìyípadà kan tí ó máa dín owó kù, bí storage tier tó tutù jù."
      },
      {
        name: "Ètò ìkẹ́kọ̀ọ́",
        objective: "O6",
        notYet: "Kò ṣe ìdánwò àṣeṣe náà.",
        meets: "Ó ṣe ìdánwò àṣeṣe ọ̀fẹ́ náà, ó sì kọ apá méjì tí kò tíì mọ̀ dáadáa.",
        exceeds: "Ó so apá kọ̀ọ̀kan tí kò tíì mọ̀ dáadáa pọ̀ mọ́ module Microsoft Learn ọ̀fẹ́ kan àti ọjọ́ tí yóò kọ́ ọ."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣe ìdánwò AZ-900 gidi láàárín ọjọ́ 90, àti iye àwọn tí wọ́n yege",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n béèrè fún tàbí bẹ̀rẹ̀ iṣẹ́ IT support, help desk tàbí cloud, tàbí ìkọ́ṣẹ́ (internship)",
      "Àwọn àjọ àwùjọ tí wọ́n lo ètò akẹ́kọ̀ọ́ kan láti gbé ojú-òpó wẹ́ẹ̀bù tàbí fáìlì lọ sí cloud"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tàbí tablet tí ó ní browser àti íńtánẹ́ẹ̀tì",
      "Ẹ̀rọ ìṣirò iye owó Azure ọ̀fẹ́ ti Microsoft àti àkáǹtì Microsoft Learn ọ̀fẹ́ fún ìdánwò àṣeṣe",
      "Àpẹẹrẹ ètò ojú-ìwé kan, tàbí ìwé àti gègé",
      "Nǹkan bí ìṣẹ́jú 60 fún àwọn ẹ̀kọ́, ìdánwò àti ètò náà, pẹ̀lú nǹkan bí ìṣẹ́jú 45 fún ìdánwò àṣeṣe"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ ṣe orí kan ní ìpàdé kọ̀ọ̀kan; ẹ jọ lo ẹ̀rọ ìṣirò iye owó lórí ojú-iboju tí gbogbo ènìyàn ń wò.",
      "Kò sí àkáǹtì Azure tí a nílò. Tí àwọn akẹ́kọ̀ọ́ bá yàn láti ṣí àkáǹtì ọ̀fẹ́, ní kí wọ́n ka òfin lọ́wọ́lọ́wọ́, ṣe ìkìlọ̀ budget, kí wọ́n sì pa resource àṣeṣe rẹ́ nígbà tí wọ́n bá parí.",
      "Lo àjọ gidi kan nítòsí, bí ilé ìpínoúnjẹ tàbí ibùdó ọ̀dọ́, gẹ́gẹ́ bí àpẹẹrẹ fún ètò ojú-ìwé kan náà.",
      "Rán àwọn akẹ́kọ̀ọ́ létí pé ìsọfúnni ìdánwò àti iye owó ń yí padà; darí wọn sí ojú-ìwé ìdánwò gidi ti Microsoft fún orílẹ̀-èdè wọn.",
      "Fi rubric ṣe àmì fún ètò náà, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};

"use strict";

// Koach Learn course (Yoruba translation of africa-life/afr-solar-home-systems.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const VERASOL = { name: "VeraSol: ètò òmìnira tó ń ṣàyẹ̀wò dídára ẹ̀rọ oòrùn tí kò so mọ́ iná ìjọba (arọ́pò Lighting Global Quality Assurance)", url: "https://verasol.org/" };
const VERASOL_DB = { name: "Àkójọ ọjà VeraSol: wá àwọn kit iná oòrùn tí a ti fọwọ́ sí", url: "https://data.verasol.org/" };
const NFPA = { name: "NFPA: Ààbò bátìrì lithium-ion (àwọn àmì ìkìlọ̀; má ṣe dà á sínú ààtàn, tún un lò)", url: "https://www.nfpa.org/education-and-research/home-fire-safety/lithium-ion-batteries" };
const GOGLA_CP = { name: "GOGLA: Ààbò oníbàárà nínú iná oòrùn tí kò so mọ́ iná ìjọba (títà tó tọ́, òtítọ́, ìwà tó dára, iṣẹ́ tó dára, dídára ọjà)", url: "https://www.gogla.org/what-we-do/business-environment-and-consumer-protection/consumer-protection/" };
const EPRA = { name: "Energy and Petroleum Regulatory Authority (EPRA), Kenya: agbára tí kì í tán àti ìwé àṣẹ", url: "https://www.epra.go.ke/" };
const WHO_EWASTE = { name: "Ìwé òtítọ́ WHO: Ìdọ̀tí ẹ̀rọ itanna (e-waste), pẹ̀lú ewu sísun àti dídà á nù", url: "https://www.who.int/news-room/fact-sheets/detail/electronic-waste-(e-waste)" };

module.exports = {
  id: "afr-solar-home-systems-yo",
  lang: "yo",
  translationOf: "afr-solar-home-systems",
  category: "Africa: Life and Work",
  name: "Iná Oòrùn fún Ilé: Ìgbéká, Títà àti Òwò Agbára Láìsí Iná Ìjọba",
  skills: "Dídárúkọ àwọn apá ẹ̀rọ iná oòrùn ilé àti ṣíṣàyẹ̀wò dídára rẹ̀, Ṣíṣírò ìwọ̀n ẹ̀rọ láti inú agbára tí ilé ń lò lójoojúmọ́, Gbígbé ẹ̀rọ DC kékeré kalẹ̀ láìléwu, Títọ́jú ẹ̀rọ àti wíwá ìṣòro rẹ̀, Títà pẹ̀lú òtítọ́ ní owó lẹ́ẹ̀kan tàbí PAYGo",
  outcome: "ran ilé kan lọ́wọ́ láti yan, gbé kalẹ̀ àti tọ́jú ẹ̀rọ iná oòrùn ilé kékeré: ṣàyẹ̀wò pé a ti fọwọ́ sí kit náà, ṣírò ìwọ̀n rẹ̀ láti inú agbára tí ilé náà ń lò lójoojúmọ́, gbé e kalẹ̀ láìléwu, mú kí ó máa ṣiṣẹ́, kí o sì tà á pẹ̀lú òtítọ́ pẹ̀lú iye owó àti àdéhùn tó yé.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn ọ̀dọ́, olùrànlọ́wọ́ oníná, àwọn onísọ̀ọ̀bù àti aṣojú títà káàkiri Áfíríkà tí wọ́n fẹ́ jèrè láti inú iná oòrùn kékeré: iná, gbígba agbára fóònù, rédíò, TV kékeré tàbí fáànù fún ilé àti ṣọ́ọ̀bù tí kò ní iná ìjọba tó dúró déédé, ní ìgbèríko Kenya, àríwá Nàìjíríà, Upper East ní Ghana, Casamance ní Senegal, tàbí Far North ní Cameroon.",
    "Orí 1 kọ́ni bí ẹ̀rọ iná oòrùn ilé ṣe ń ṣiṣẹ́: àwọn apá rẹ̀ àti bí a ṣe ń ṣàyẹ̀wò dídára, bí a ṣe ń ṣírò ìwọ̀n ẹ̀rọ láti inú ohun tí ìdílé ń lò lójoojúmọ́, àti bí a ṣe ń gbé ẹ̀rọ kékeré kalẹ̀ láìléwu. Orí 2 kọ́ni bí a ṣe ń mú kí ó máa ṣiṣẹ́ àti bí a ṣe ń ṣe òwò: ìtọ́jú àti wíwá ìṣòro, títà ní owó lẹ́ẹ̀kan tàbí PAYGo (sísan díẹ̀díẹ̀), àti kíkọ ìdíyelé tó jẹ́ òtítọ́.",
    "Ẹ̀kọ́ yìí wà fún ẹ̀rọ ilé kékeré nìkan. Kò kọ́ni iṣẹ́ lórí iná ìjọba, wáyà iná ilé (mains) tàbí ẹ̀rọ ńlá; àwọn wọ̀nyẹn nílò oníná tó ní ìwé àṣẹ. Àwọn orílẹ̀-èdè kan ń fún àwọn onímọ̀ iná oòrùn ní ìwé àṣẹ, nítorí náà béèrè lọ́wọ́ àjọ tó ń ṣàkóso agbára ní orílẹ̀-èdè rẹ. Gbogbo nọ́mbà ìwọ̀n àti iye owó jẹ́ àpẹẹrẹ. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ kan. Ìbéèrè kúkúrú wà lẹ́yìn ẹ̀kọ́ kọ̀ọ̀kan, ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Kọ ìdíyelé fún ilé gidi kan tàbí ilé àpẹẹrẹ (fún àpẹẹrẹ ìdílé ẹni márùn-ún ní Kitui, Kenya, tàbí ṣọ́ọ̀bù kékeré ní Kaolack, Senegal): tábìlì ohun tí wọ́n fẹ́ lò pẹ̀lú watt àti wákàtí lójúmọ́, àpapọ̀ agbára ojoojúmọ́, ìwọ̀n panẹ́ẹ̀lì àti bátìrì tí o yàn àti bí o ṣe ṣírò rẹ̀, kit tí a ti fọwọ́ sí láti inú àkójọ VeraSol tàbí kit tí ó ní ìdánilójú (warranty) tó yé, àkọsílẹ̀ ààbò ìgbéká, iye owó lẹ́ẹ̀kan àti àdéhùn PAYGo pẹ̀lú àpapọ̀ owó tí oníbàárà máa san, àti káàdì ìtọ́jú àti ìdánilójú fún oníbàárà.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn ọ̀dọ́, olùrànlọ́wọ́ oníná, onísọ̀ọ̀bù àti aṣojú títà iná oòrùn ní ìlú àti abúlé káàkiri Áfíríkà (Kenya, Nàìjíríà, Ghana, Senegal, Cameroon, Morocco àti àwọn míì) tí wọ́n ń tà, tí wọ́n ń gbé kalẹ̀, tàbí tí wọ́n fẹ́ bẹ̀rẹ̀ òwò iná oòrùn kékeré.",
    startingPoint: "Ọ̀pọ̀ ti rí àtùpà àti kit iná oòrùn, àwọn kan sì ń tà wọ́n. Díẹ̀ ló lè ṣírò ìwọ̀n ẹ̀rọ láti inú agbára tí ilé ń lò, ṣàyẹ̀wò bóyá a ti fọwọ́ sí kit kan, gbé ẹ̀rọ kékeré kalẹ̀ láìléwu, wá ìṣòro tó rọrùn, tàbí ṣàlàyé àdéhùn PAYGo pẹ̀lú òtítọ́.",
    gap: "Kit tí ó kéré jù tàbí ayédèrú máa ń bàjẹ́ kíákíá, àwọn oníbàárà sì ń pàdánù owó àti ìgbẹ́kẹ̀lé; ìgbéká tí kò dára ń fa iná bátìrì àti ìjáná; àdéhùn PAYGo tí kò yé ń kó ìdílé sínú gbèsè. Olùgbéká àti olùtà tí ó kọ́ṣẹ́, tí ó sì jẹ́ olóòótọ́ máa ń rí oníbàárà tí ó ń padà wá, ó sì ń ran ìdílé lọ́wọ́ láti ní iná àti agbára tó mọ́, tó sì dúró déédé.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; ìṣirò tó rọrùn (ìsọdipúpọ̀, àròpọ̀, pínpín), a ṣàlàyé gbogbo ọ̀rọ̀ ìmọ̀ ẹ̀rọ",
      "Ẹ̀rọ: fóònù lásán tí ó ní ẹ̀rọ ìṣirò; dátà wọ́n, nítorí náà àyẹ̀wò àkójọ máa ń kúrú",
      "Ààlà àti ààbò: ẹ̀rọ ilé kékeré nìkan; kò sí iná ìjọba, wáyà mains tàbí ẹ̀rọ ńlá; òfin ìwé àṣẹ yàtọ̀ láti orílẹ̀-èdè sí orílẹ̀-èdè, àwọn akẹ́kọ̀ọ́ sì ń béèrè lọ́wọ́ àjọ tó ń ṣàkóso agbára",
      "Owó: iye owó àti nọ́mbà ìwọ̀n jẹ́ àpẹẹrẹ; kò sí ìmọ̀ràn ìdókòwò; a ṣàlàyé àdéhùn PAYGo pẹ̀lú òtítọ́",
      "A tún ti túmọ̀ ẹ̀kọ́ yìí sí Faransé àti Lárúbáwá, nítorí náà àwọn àpẹẹrẹ ní oníbàárà láti àwọn orílẹ̀-èdè tí ń sọ Faransé àti àríwá Áfíríkà"
    ],
    prerequisites: "Ìṣirò ìpìlẹ̀. Kò nílò ẹ̀kọ́ iná mànàmáná láti bẹ̀rẹ̀; ìgbéká gidi gbọ́dọ̀ wáyé pẹ̀lú olùgbéká tí ó ní ìrírí."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní kit iná oòrùn ilé", action: "dárúkọ apá kọ̀ọ̀kan (panẹ́ẹ̀lì, charge controller, bátìrì, inverter, iná àti àwọn ẹ̀rọ) kí o sì ṣàyẹ̀wò bóyá a ti fọwọ́ sí kit náà nínú àkójọ VeraSol", standard: "kí o sì dárúkọ gbogbo apá tọ̀nà, kí o sì kọ èsì àyẹ̀wò náà sílẹ̀" },
    { id: "O2", condition: "Tí a bá fún ọ ní àkọsílẹ̀ ohun tí ilé kan fẹ́ lò", action: "ṣírò agbára tí wọ́n nílò lójoojúmọ́ ní watt-hour kí o sì yan ìwọ̀n panẹ́ẹ̀lì àti bátìrì", standard: "pẹ̀lú ìṣirò tó tọ̀nà àti àfikún fún agbára tí ó ń sọnù" },
    { id: "O3", condition: "Nígbà tí o bá ń gbé ẹ̀rọ iná oòrùn DC kékeré kalẹ̀", action: "tẹ̀lé àkọsílẹ̀ ààbò fún ibi tí panẹ́ẹ̀lì máa wà, wáyà, fiúsì àti ibi tí bátìrì máa wà", standard: "láìfo ìgbésẹ̀ kankan, láìsí iṣẹ́ kankan lórí iná ìjọba tàbí wáyà mains" },
    { id: "O4", condition: "Nígbà tí ẹ̀rọ kò bá ṣiṣẹ́ dáadáa", action: "ṣe ìtọ́jú déédé kí o sì wá àwọn ìṣòro tó rọrùn ní ìgbésẹ̀-ìgbésẹ̀", standard: "nípa ṣíṣàyẹ̀wò panẹ́ẹ̀lì, ìsopọ̀, controller àti bátìrì ní ìtẹ̀léra" },
    { id: "O5", condition: "Nígbà tí o bá ń ta ẹ̀rọ fún oníbàárà", action: "kọ ìdíyelé tó jẹ́ òtítọ́ pẹ̀lú iye owó lẹ́ẹ̀kan, àdéhùn PAYGo tí ó bá wà, àpapọ̀ owó àti ìdánilójú (warranty)", standard: "kí oníbàárà lè sọ àpapọ̀ owó tí òun máa san kí ó tó fọwọ́ sí i" }
  ],
  chapters: [
    {
      name: "Orí 1: Bí ẹ̀rọ iná oòrùn ilé ṣe ń ṣiṣẹ́",
      lessons: [
        {
          title: "Àwọn apá ẹ̀rọ iná oòrùn ilé, àti dídára rẹ̀",
          objectives: ["O1"],
          minutes: 5,
          goal: "Dárúkọ àwọn apá ẹ̀rọ iná oòrùn ilé kí o sì ṣàyẹ̀wò bóyá a ti fọwọ́ sí kit kan.",
          text: [
            "Ẹ̀rọ iná oòrùn ilé ń sọ ìtànṣán oòrùn di iná mànàmáná fún ilé tàbí ṣọ́ọ̀bù kékeré. Ó ní apá pàtàkì márùn-ún. Panẹ́ẹ̀lì oòrùn ń ṣe iná láti inú ìtànṣán oòrùn ní ọ̀sán. Charge controller ń darí iná yẹn sínú bátìrì láìléwu, ó sì ń dá a dúró kí ó má gba agbára jù tàbí kí ó má tán jù. Bátìrì ń tọ́jú agbára fún alẹ́. Iná àti àwọn ẹ̀rọ (loads) ń lo agbára náà. Àwọn ẹ̀rọ kan ní inverter, tí ó ń yí agbára DC bátìrì padà sí agbára AC fún sókẹ́ẹ̀tì lásán.",
            "Ọ̀pọ̀ kit kékeré máa ń wá bí àpótí kan tí controller àti bátìrì wà nínú rẹ̀, pẹ̀lú iná DC, ibi gbígba agbára fóònù, àti nígbà míì rédíò, TV tàbí fáànù DC. Àwọn ẹ̀rọ DC ń lo agbára díẹ̀ ju àwọn ẹ̀rọ AC tí ó ń lo inverter, nítorí náà wọ́n ń jẹ́ kí ẹ̀rọ kékeré ṣe púpọ̀ sí i.",
            "Kit ayédèrú àti èyí tí kò dára pọ̀ gan-an. Kí o tó tà tàbí gbé kit kan kalẹ̀, ṣàyẹ̀wò bóyá VeraSol ti fọwọ́ sí i. VeraSol jẹ́ ètò òmìnira tó ń ṣàyẹ̀wò dídára, tí ó jáde láti inú Lighting Global. Àkójọ rẹ̀ ọ̀fẹ́ lórí ayélujára (data.verasol.org) ní àwọn kit iná oòrùn tí a ti fọwọ́ sí. A ti dán kit tí a fọwọ́ sí wò fún bí ó ṣe ń ṣiṣẹ́ gan-an, bí ó ṣe ń pẹ́ tó, àti bóyá ohun tí wọ́n sọ nípa rẹ̀ jẹ́ òtítọ́. Tí kit kan kò bá sí nínú àkójọ náà, béèrè ìdánilójú (warranty) rẹ̀ ní kíkọ àti èsì àyẹ̀wò rẹ̀.",
            "Àpẹẹrẹ: Fatou ní Kaolack, Senegal, fi kit méjì tí ìwọ̀n wọn dọ́gba wé ara wọn. Ọ̀kan wà nínú àkójọ VeraSol pẹ̀lú ìdánilójú ní kíkọ; èkejì kò ní àmì kankan, kò sì ní ìdánilójú. Ó yan kit tí a ti fọwọ́ sí fún àwọn oníbàárà rẹ̀."
          ],
          words: [["Panẹ́ẹ̀lì oòrùn (solar panel)", "pátákó pẹrẹsẹ tí ó ń ṣe iná láti inú ìtànṣán oòrùn."], ["Charge controller", "àpótí kékeré tí ó ń gba agbára sínú bátìrì láìléwu, tí ó sì ń dáàbò bò ó."], ["Inverter", "ẹ̀rọ tí ó ń yí agbára DC bátìrì padà sí agbára AC fún sókẹ́ẹ̀tì lásán."], ["DC àti AC", "DC ni agbára tí ó dúró déédé láti bátìrì àti panẹ́ẹ̀lì; AC ni agbára iná ìjọba àti ti ọ̀pọ̀ sókẹ́ẹ̀tì lásán."]],
          slides: [
            { title: "Apá pàtàkì márùn-ún", bullets: ["Panẹ́ẹ̀lì: ń ṣe iná láti inú oòrùn", "Charge controller: ń gba agbára sínú bátìrì láìléwu", "Bátìrì: ń tọ́jú agbára fún alẹ́; àwọn ẹ̀rọ (loads) ń lò ó"] },
            { title: "Inverter àti àwọn ẹ̀rọ DC", bullets: ["Inverter: DC bátìrì sí AC fún sókẹ́ẹ̀tì lásán", "Iná, rédíò, TV, fáànù DC ń lo agbára díẹ̀", "Ọ̀pọ̀ kit máa ń wá bí àpótí kan"] },
            { title: "Ṣàyẹ̀wò dídára: VeraSol", bullets: ["Ètò òmìnira tó ń ṣàyẹ̀wò dídára (láti Lighting Global)", "Àkójọ ọ̀fẹ́: data.verasol.org", "Kò sí nínú rẹ̀? Béèrè ìdánilójú ní kíkọ àti èsì àyẹ̀wò"] }
          ],
          sources: [VERASOL, VERASOL_DB],
          tryIt: "Wo kit iná oòrùn kan (ní ṣọ́ọ̀bù, nílé, tàbí àwòrán lórí ayélujára) kí o sì kọ orúkọ apá kọ̀ọ̀kan. Tí o bá ní dátà, wá kit kan nínú àkójọ VeraSol kí o sì kọ bóyá ó wà níbẹ̀.",
          youCanNow: "dárúkọ apá kọ̀ọ̀kan ẹ̀rọ iná oòrùn ilé kí o sì ṣàyẹ̀wò bóyá a ti fọwọ́ sí kit kan.",
          quickCheck: [
            { objective: "O1", q: "Apá wo ló ń dá bátìrì dúró kí ó má gba agbára jù?", options: ["Gílóòbù iná", "Férémù panẹ́ẹ̀lì", "Charge controller", "Wáyà chaja fóònù"], answer: 2, why: "Charge controller ń gba agbára sínú bátìrì láìléwu, ó sì ń dáàbò bò ó kí ó má gba agbára jù tàbí tán jù." },
            { objective: "O1", q: "Níbo ni o ti lè ṣàyẹ̀wò bóyá a ti fọwọ́ sí kit iná oòrùn kan?", options: ["Àkójọ ọjà VeraSol", "Àwọ̀ àpótí rẹ̀", "Ọ̀rọ̀ olùtà nìkan", "Ìwúwo panẹ́ẹ̀lì"], answer: 0, why: "Àkójọ ọ̀fẹ́ VeraSol ní àwọn kit tí a ti dán wò láìṣègbè, tí a sì ti fọwọ́ sí." }
          ]
        },
        {
          title: "Ṣíṣírò ìwọ̀n ẹ̀rọ láti inú ohun tí ilé ń lò",
          objectives: ["O2"],
          minutes: 6,
          goal: "Ṣírò agbára tí ilé kan nílò lójoojúmọ́ kí o sì yan ìwọ̀n panẹ́ẹ̀lì àti bátìrì.",
          text: [
            "Ṣírò ìwọ̀n ẹ̀rọ láti inú ohun tí ìdílé fẹ́ lò gan-an. Fún nǹkan kọ̀ọ̀kan, fi agbára rẹ̀ ní watt (W) sọ wákàtí tí wọ́n ń lò ó lójúmọ́ di púpọ̀. Èyí ni watt-hour (Wh) lójúmọ́. Ro gbogbo wọn pọ̀.",
            "Àpẹẹrẹ (nọ́mbà jẹ́ àpẹẹrẹ nìkan): gílóòbù LED 3 ti 3 W fún wákàtí 5 = 45 Wh. Gbígba agbára fóònù 2, nǹkan bí 10 Wh ọ̀kọ̀ọ̀kan = 20 Wh. Rédíò, 5 W fún wákàtí 4 = 20 Wh. TV DC, 20 W fún wákàtí 3 = 60 Wh. Àpapọ̀: 145 Wh lójúmọ́. Fi nǹkan bí 30% kún un fún agbára tí ó ń sọnù nínú wáyà, controller àti bátìrì: nǹkan bí 190 Wh lójúmọ́.",
            "Panẹ́ẹ̀lì: pín agbára ojoojúmọ́ pẹ̀lú wákàtí oòrùn gangan (peak sun hours) níbi tí oníbàárà ń gbé (iye wákàtí oòrùn tó lágbára ní kíkún lójúmọ́). Tí wákàtí oòrùn gangan bá jẹ́ nǹkan bí 5: 190 / 5 = 38 W. Gbé e sókè sí ìwọ̀n panẹ́ẹ̀lì tó kàn, fún àpẹẹrẹ panẹ́ẹ̀lì 50 W. Wákàtí oòrùn gangan ń yí padà pẹ̀lú ibi àti àsìkò; ṣàyẹ̀wò ìsọfúnni agbègbè tàbí béèrè lọ́wọ́ olùgbéká tí ó ní ìrírí, kí o sì ṣírò fún àwọn oṣù tí ìkùukùu pọ̀ jù.",
            "Bátìrì: ó gbọ́dọ̀ gba ohun tí wọ́n nílò fún alẹ́ kan ó kéré tán. A kò gbọ́dọ̀ lo ọ̀pọ̀ bátìrì tán pátápátá. A sábà máa ń lo bátìrì lithium dé nǹkan bí 80%; lead-acid dé nǹkan bí 50% (ṣàyẹ̀wò nọ́mbà olùṣe rẹ̀). Fún 190 Wh pẹ̀lú lithium: 190 / 0.8 = nǹkan bí 238 Wh. Fún bátìrì 12 V, pín in pẹ̀lú 12: nǹkan bí 20 Ah. Fi kún un tí ìdílé bá fẹ́ agbára ní ọjọ́ tí ìkùukùu bá wà."
          ],
          steps: ["Kọ nǹkan kọ̀ọ̀kan, watt rẹ̀ àti wákàtí rẹ̀ lójúmọ́ sílẹ̀.", "Fi watt sọ wákàtí di púpọ̀ fún ọ̀kọ̀ọ̀kan, kí o sì ro wọ́n pọ̀: Wh lójúmọ́.", "Fi nǹkan bí 30% kún un fún agbára tí ó ń sọnù.", "Panẹ́ẹ̀lì: agbára ojoojúmọ́ / wákàtí oòrùn gangan, lẹ́yìn náà gbé e sókè.", "Bátìrì: agbára ojoojúmọ́ / ìpín tí a lè lò (fún àpẹẹrẹ 0.8), lẹ́yìn náà / 12 fún amp-hour ní 12 V."],
          words: [["Watt (W)", "iye agbára tí nǹkan kan ń lò ní àkókò kan."], ["Watt-hour (Wh)", "agbára tí a lò: watt tí a fi wákàtí sọ di púpọ̀."], ["Wákàtí oòrùn gangan (peak sun hours)", "iye wákàtí oòrùn tó lágbára ní kíkún lójúmọ́ ní ibì kan."], ["Amp-hour (Ah)", "iye agbára tí bátìrì lè gbà; Wh = Ah x volt."]],
          slides: [
            { title: "Agbára tí a nílò lójoojúmọ́", bullets: ["Watt x wákàtí = Wh fún nǹkan kọ̀ọ̀kan", "Ro gbogbo wọn pọ̀", "Àpẹẹrẹ: 145 Wh; +30% fún àdánù = nǹkan bí 190 Wh"] },
            { title: "Ìwọ̀n panẹ́ẹ̀lì", bullets: ["Wh ojoojúmọ́ / wákàtí oòrùn gangan", "Àpẹẹrẹ: 190 / 5 = 38 W: yan 50 W", "Ṣírò fún àwọn oṣù tí ìkùukùu pọ̀ jù"] },
            { title: "Ìwọ̀n bátìrì", bullets: ["Má ṣe lò ó tán pátápátá: lithium nǹkan bí 80%, lead-acid nǹkan bí 50%", "Àpẹẹrẹ: 190 / 0.8 = nǹkan bí 238 Wh", "Ní 12 V: 238 / 12 = nǹkan bí 20 Ah"] },
            { title: "Àpẹẹrẹ ni àwọn nọ́mbà", bullets: ["Ṣàyẹ̀wò watt ẹ̀rọ kọ̀ọ̀kan lórí àmì rẹ̀", "Ṣàyẹ̀wò wákàtí oòrùn agbègbè rẹ", "Ṣàyẹ̀wò nọ́mbà olùṣe bátìrì"] }
          ],
          tryIt: "Ṣe tábìlì agbára fún ilé rẹ tàbí ti aládùúgbò rẹ: nǹkan kọ̀ọ̀kan, watt, wákàtí, Wh. Ro àpapọ̀ rẹ̀, fi 30% kún un, kí o sì ṣírò ìwọ̀n panẹ́ẹ̀lì àti bátìrì pẹ̀lú àwọn ìgbésẹ̀ náà.",
          youCanNow: "ṣírò agbára tí ilé kan nílò lójoojúmọ́ kí o sì yan ìwọ̀n panẹ́ẹ̀lì àti bátìrì fún un.",
          quickCheck: [
            { objective: "O2", q: "Wọ́n ń lo gílóòbù 4 W fún wákàtí 6 lójúmọ́. Watt-hour mélòó nìyẹn?", options: ["10 Wh", "2 Wh", "46 Wh", "24 Wh"], answer: 3, why: "4 W x wákàtí 6 = 24 Wh." },
            { objective: "O2", q: "Ilé kan nílò 200 Wh lójúmọ́, wákàtí oòrùn gangan sì jẹ́ 5. Kí ni ìwọ̀n panẹ́ẹ̀lì tó kéré jù láti inú ìṣirò náà?", options: ["40 W", "1,000 W", "5 W", "200 W"], answer: 0, why: "200 / 5 = 40 W; lẹ́yìn náà gbé e sókè sí ìwọ̀n panẹ́ẹ̀lì tó kàn tí ó wà." }
          ]
        },
        {
          title: "Gbígbé ẹ̀rọ kékeré kalẹ̀ láìléwu",
          objectives: ["O3"],
          minutes: 6,
          goal: "Gbé ẹ̀rọ iná oòrùn DC kékeré kalẹ̀ nípa títẹ̀lé àkọsílẹ̀ ààbò.",
          text: [
            "Panẹ́ẹ̀lì: gbé e síbi tí oòrùn ti ń tàn sí i ní kíkún fún ọ̀pọ̀ jù lọ ọjọ́, láìsí òjìji igi, ògiri tàbí wáyà. Dojú rẹ̀ kọ ìlà agbede-ayé (equator): ní àwọn orílẹ̀-èdè tí ó wà ní àríwá equator, dojú rẹ̀ kọ gúúsù; ní gúúsù equator, dojú rẹ̀ kọ àríwá. Dà á sílẹ̀ díẹ̀ ó kéré tán, kí òjò lè fọ eruku kúrò. So ó mọ́lẹ̀ dáadáa kí afẹ́fẹ́ má lè gbé e. Lórí òrùlé, lo àkàbà tí kò léwu, jẹ́ kí olùrànlọ́wọ́ kan dì í mú, má sì ṣiṣẹ́ nígbà òjò tàbí afẹ́fẹ́ líle láéláé.",
            "Bátìrì: fi í sínú ilé, ní ibi tí ó gbẹ, tí òjìji wà, tí afẹ́fẹ́ sì ń wọlé, kúrò lórí ilẹ̀ àti ní ibi tí ọwọ́ ọmọdé kò tó, jìnnà sí iná ìdáná. Bátìrì lead-acid máa ń tú gáàsì tí ó lè gbiná jáde nígbà tí ó ń gba agbára, ásíìdì sì wà nínú rẹ̀: jẹ́ kí afẹ́fẹ́ máa wọlé, wọ gíláàsì ààbò ojú àti ìbọ̀wọ́, kí o sì pa iná mọ́ kúrò lọ́dọ̀ rẹ̀. Ìsopọ̀ kúkúrú (short circuit) láàárín àwọn orí bátìrì lè yọ́ wáyà, kí ó sì dá iná sílẹ̀.",
            "Wáyà: lo ìwọ̀n wáyà tí olùṣe kit náà sọ, so pupa mọ́ pọ́sítíìfù (+) àti dúdú mọ́ nẹ́gẹ́tíìfù (-), kí o sì fi fiúsì tàbí breaker tí olùṣe fún ọ sí ẹ̀gbẹ́ bátìrì. Fún ọ̀pọ̀ kit tí controller wọn dá wà, kọ́kọ́ so bátìrì mọ́ controller, lẹ́yìn náà panẹ́ẹ̀lì, lẹ́yìn náà àwọn ẹ̀rọ (loads); tẹ̀lé ìwé ìtọ́sọ́nà olùṣe tí ó bá sọ ọ̀nà míì. So àwọn wáyà mọ́lẹ̀ kí wọ́n má lè fà wọ́n tàbí jẹ wọ́n.",
            "Ààlà: ẹ̀kọ́ yìí kan ẹ̀rọ DC kékeré nìkan. Má ṣe so ẹ̀rọ iná oòrùn mọ́ iná ìjọba tàbí wáyà mains ilé láéláé, má sì ṣí inverter láéláé. Àwọn iṣẹ́ yẹn nílò oníná tó ní ìwé àṣẹ. Àwọn orílẹ̀-èdè kan ń fún àwọn onímọ̀ iná oòrùn ní ìwé àṣẹ; ní Kenya, béèrè lọ́wọ́ EPRA, ní ibòmíì, béèrè lọ́wọ́ àjọ tó ń ṣàkóso agbára ní orílẹ̀-èdè rẹ."
          ],
          steps: ["Yan ibi tí oòrùn wà, tí kò sí òjìji; dojú panẹ́ẹ̀lì kọ equator pẹ̀lú ìdàsílẹ̀ díẹ̀; so ó mọ́lẹ̀ dáadáa.", "Ṣiṣẹ́ lókè pẹ̀lú àkàbà tí kò léwu àti olùrànlọ́wọ́ nìkan; kò sí iṣẹ́ nígbà òjò tàbí afẹ́fẹ́ líle.", "Fi bátìrì sínú ilé: ibi tí ó gbẹ, tí òjìji wà, tí afẹ́fẹ́ ń wọlé, kúrò lórí ilẹ̀, jìnnà sí ọmọdé àti iná.", "Lo wáyà tó tọ́, pupa sí +, dúdú sí -, kí o sì fi fiúsì sí ẹ̀gbẹ́ bátìrì.", "Kọ́kọ́ so bátìrì mọ́ controller, lẹ́yìn náà panẹ́ẹ̀lì, lẹ́yìn náà àwọn ẹ̀rọ, àyàfi tí ìwé ìtọ́sọ́nà bá sọ ọ̀nà míì.", "Kò sí ìsopọ̀ mọ́ iná ìjọba tàbí mains; kò sí ṣíṣí inverter."],
          words: [["Polarity", "wáyà wo ni pọ́sítíìfù (+) àti èwo ni nẹ́gẹ́tíìfù (-). Àṣìṣe níbẹ̀ lè ba àwọn apá jẹ́."], ["Fiúsì (fuse)", "apá ààbò kékeré tí ó máa ń gé iná tí iná bá ń ṣàn jù."], ["Ibi tí afẹ́fẹ́ ń wọlé (ventilated)", "ibi tí afẹ́fẹ́ tútù ń gbà kọjá, kí gáàsì má lè kó jọ."]],
          slides: [
            { title: "Ibi tí panẹ́ẹ̀lì máa wà", bullets: ["Oòrùn ní kíkún, kò sí òjìji", "Dojú kọ equator: gúúsù tí o bá wà ní àríwá rẹ̀, àríwá tí o bá wà ní gúúsù rẹ̀", "Ìdàsílẹ̀ díẹ̀; so ó mọ́lẹ̀; àkàbà tí kò léwu àti olùrànlọ́wọ́"] },
            { title: "Ibi tí bátìrì máa wà", bullets: ["Nínú ilé: ibi gbígbẹ, òjìji, afẹ́fẹ́ ń wọlé, kúrò lórí ilẹ̀", "Jìnnà sí ọmọdé àti iná ìdáná", "Lead-acid: ásíìdì àti gáàsì; gíláàsì ààbò, ìbọ̀wọ́, kò sí iná"] },
            { title: "Wáyà", bullets: ["Wáyà tó tọ́; pupa +, dúdú -", "Fiúsì ní ẹ̀gbẹ́ bátìrì", "Bátìrì sí controller lákọ̀ọ́kọ́, lẹ́yìn náà panẹ́ẹ̀lì, lẹ́yìn náà ẹ̀rọ (tàbí bí ìwé ṣe sọ)"] },
            { title: "Ààlà rẹ", bullets: ["Ẹ̀rọ DC kékeré nìkan", "Kò sí iná ìjọba tàbí wáyà mains; má ṣí inverter láéláé", "Ìwé àṣẹ: EPRA ní Kenya; ní ibòmíì, àjọ agbára orílẹ̀-èdè rẹ"] }
          ],
          sources: [EPRA, NFPA],
          tryIt: "Kọ àkọsílẹ̀ ààbò ìgbéká rẹ pẹ̀lú ó kéré tán ìlà mẹ́jọ láti inú ẹ̀kọ́ yìí. Tí o bá lè ṣe é, rìn yí ilé kan ká kí o sì yan ibi tó dára jù fún panẹ́ẹ̀lì àti bátìrì, kí o sì kọ ìdí rẹ̀.",
          youCanNow: "gbé ẹ̀rọ iná oòrùn DC kékeré kalẹ̀ láìléwu nípa títẹ̀lé àkọsílẹ̀, kí o sì mọ àwọn iṣẹ́ tí o gbọ́dọ̀ fi sílẹ̀ fún oníná tó ní ìwé àṣẹ.",
          quickCheck: [
            { objective: "O3", q: "Ilé oníbàárà kan wà ní Nairobi, díẹ̀ sí gúúsù equator. Ọ̀nà wo ni panẹ́ẹ̀lì yẹ kí ó dojú kọ?", options: ["Gúúsù", "Ìsàlẹ̀ tààrà", "Àríwá, sí ọ̀nà equator", "Sínú òjìji"], answer: 2, why: "Panẹ́ẹ̀lì máa ń dojú kọ equator; ní gúúsù rẹ̀, ìyẹn túmọ̀ sí dídojú kọ àríwá." },
            { objective: "O3", q: "Oníbàárà kan ní kí o so kit iná oòrùn rẹ̀ mọ́ wáyà iná ìjọba nínú ilé rẹ̀. Kí ni o máa ṣe?", options: ["Ṣe é kíákíá", "Kọ̀: iṣẹ́ iná ìjọba àti mains nílò oníná tó ní ìwé àṣẹ", "Ṣe é ní alẹ́", "Kọ́kọ́ ṣí inverter"], answer: 1, why: "Ẹ̀kọ́ yìí kan ẹ̀rọ DC kékeré nìkan; iṣẹ́ iná ìjọba àti mains nílò oníná tó ní ìwé àṣẹ." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Bí ẹ̀rọ iná oòrùn ilé ṣe ń ṣiṣẹ́",
        questions: [
          { objective: "O1", q: "Kí ni inverter ń ṣe?", options: ["Ó ń tọ́jú agbára", "Ó ń ṣe iná láti inú oòrùn", "Ó ń wọn ìtànṣán oòrùn", "Ó ń yí agbára DC bátìrì padà sí AC fún sókẹ́ẹ̀tì lásán"], answer: 3, why: "Inverter ń sọ DC di AC." },
          { objective: "O1", q: "Kí ló dé tí o fi máa yan kit tí ó wà nínú àkójọ VeraSol?", options: ["A ti dán an wò láìṣègbè fún bí ó ṣe ń ṣiṣẹ́, bí ó ṣe ń pẹ́ àti òtítọ́ ohun tí wọ́n sọ", "Òun ló máa ń jẹ́ olówó pọ́ọ́kú jù nígbà gbogbo", "Kò nílò ìtọ́jú láéláé", "Ó ń ṣiṣẹ́ láìsí oòrùn"], answer: 0, why: "VeraSol ń fọwọ́ sí àwọn kit lẹ́yìn àyẹ̀wò òmìnira." },
          { objective: "O2", q: "Ilé kan nílò 120 Wh lójúmọ́ ṣáájú àdánù. Nǹkan bí mélòó ni pẹ̀lú 30% àfikún?", options: ["90 Wh", "150 Wh", "156 Wh", "360 Wh"], answer: 2, why: "120 x 1.3 = 156 Wh." },
          { objective: "O2", q: "Kí ló dé tí a kò fi gbọ́dọ̀ lo bátìrì lithium tán pátápátá lálẹ́ kọ̀ọ̀kan?", options: ["Ó ń mú kí iná mọ́lẹ̀ sí i", "Fún ọ̀sán nìkan ni", "Ó lòdì sí òfin", "Lílò ó tán pátápátá ń dín ẹ̀mí rẹ̀ kù, nítorí náà a ń ṣírò fún lílo nǹkan bí 80%"], answer: 3, why: "Fífi agbára díẹ̀ sílẹ̀ nínú bátìrì ń dáàbò bò ó, nítorí náà ìṣirò ìwọ̀n ń ka ìpín tí a lè lò." },
          { objective: "O3", q: "Níbo ni fiúsì yẹ kí ó wà?", options: ["Ní ẹ̀gbẹ́ bátìrì, bí olùṣe ṣe sọ", "Lórí òrùlé", "Nínú gílóòbù iná", "Níbikíbi, tàbí kò nílò rẹ̀"], answer: 0, why: "Fiúsì ní ẹ̀gbẹ́ bátìrì ń dáàbò bo wáyà lọ́wọ́ ìsopọ̀ kúkúrú ní bátìrì." }
        ]
      }
    },
    {
      name: "Orí 2: Mímú kí ó máa ṣiṣẹ́ àti ṣíṣe òwò iná oòrùn",
      lessons: [
        {
          title: "Ìtọ́jú àti wíwá àwọn ìṣòro tó rọrùn",
          objectives: ["O4"],
          minutes: 5,
          goal: "Ṣe ìtọ́jú déédé kí o sì wá àwọn ìṣòro tó rọrùn ní ìgbésẹ̀-ìgbésẹ̀.",
          text: [
            "Ẹ̀rọ tí a tọ́jú dáadáa máa ń pẹ́ fún ọ̀pọ̀ ọdún. Kọ́ oníbàárà pé: kí ó fi omi àti aṣọ rírọ̀ nu panẹ́ẹ̀lì nígbà tí eruku bá wà lórí rẹ̀, ní àárọ̀ kùtùkùtù tàbí ní ìrọ̀lẹ́ nígbà tí ó tutù (má ṣe lo ọṣẹ tí ó máa ń fi ìpele sílẹ̀ láéláé, má sì dúró lé e lórí láéláé). Gé àwọn ẹ̀ka igi tí ó ń ṣe òjìji tuntun. Jẹ́ kí bátìrì mọ́, kí ó sì gbẹ. Pa àwọn ẹ̀rọ tí a kò nílò.",
            "Nígbà tí oníbàárà bá sọ pé \"iná ń kú ní kùtùkùtù\", ṣàyẹ̀wò ní ìtẹ̀léra yìí: (1) Panẹ́ẹ̀lì: ṣé ó dọ̀tí tàbí òjìji wà lórí rẹ̀ báyìí? (2) Ìsopọ̀: ṣé wáyà tàbí pọ́ọ̀gù kan ti tú, ti já tàbí ti dípẹtà? (3) Controller: kí ni àwọn iná tàbí ojú-iboju rẹ̀ ń fi hàn? Ka ìwé ìtọ́sọ́nà fún ìtumọ̀ wọn. (4) Bátìrì: ṣé ó ti gbó, ṣé ó wú, ṣé ó gbóná tàbí ó ń jò? (5) Àwọn ẹ̀rọ: ṣé ìdílé ti fi TV tó tóbi jù tàbí gílóòbù púpọ̀ ju èyí tí a ṣírò ẹ̀rọ fún kún un?",
            "Ọ̀pọ̀ ìṣòro jẹ́ ìdọ̀tí, òjìji, pọ́ọ̀gù tí ó tú tàbí ẹ̀rọ àfikún. Bátìrì tí ó wú, tí ó gbóná gan-an tàbí tí ó ń jò gbọ́dọ̀ di pípààrọ̀; má ṣe gba agbára sínú rẹ̀ tàbí ṣí i láéláé. Bátìrì àtijọ́ jẹ́ ìdọ̀tí ẹ̀rọ itanna (e-waste): má ṣe sun wọ́n, sin wọ́n tàbí dà wọ́n nù láéláé, kí o sì fún olùkó-ìdọ̀tí tí a fọwọ́ sí tàbí ètò ìgbàpadà (take-back) ilé-iṣẹ́ kit náà.",
            "Àpẹẹrẹ: Chinedu ní Kano gba ìpè pé iná ń kú ní agogo 8 alẹ́. Ó rí ẹ̀ka igi tuntun tí ó ń ṣe òjìji sórí panẹ́ẹ̀lì àti TV kejì tí wọ́n fi kún un. Ó gé ẹ̀ka náà pẹ̀lú àṣẹ onílé, ó sì ṣàlàyé ìwọ̀n ẹ̀rọ náà; ìdílé náà pinnu láti fi panẹ́ẹ̀lì kejì kún un."
          ],
          steps: ["Ṣàyẹ̀wò panẹ́ẹ̀lì: ṣé ó mọ́, ṣé kò sí òjìji?", "Ṣàyẹ̀wò ìsopọ̀: ṣé ó tú, ó já tàbí ó dípẹtà?", "Fi àwọn iná tàbí ojú-iboju controller wé ìwé ìtọ́sọ́nà.", "Ṣàyẹ̀wò bátìrì: ṣé ó ti gbó, ó wú, ó gbóná tàbí ó ń jò?", "Ṣàyẹ̀wò àwọn ẹ̀rọ: ṣé wọ́n pọ̀ tàbí tóbi ju ohun tí a ṣètò lọ?"],
          words: [["Ìdípẹtà (corrosion)", "èèpo aláwọ̀ ewé tàbí funfun lórí ìsopọ̀ irin tí ó ń dí iná lọ́wọ́ láti ṣàn dáadáa."], ["Ètò ìgbàpadà (take-back scheme)", "ètò ilé-iṣẹ́ kan láti kó àwọn ọjà rẹ̀ àtijọ́ jọ fún àtúnlò láìléwu."]],
          slides: [
            { title: "Ìtọ́jú déédé", bullets: ["Fi omi àti aṣọ rírọ̀ nu panẹ́ẹ̀lì nígbà tí ó tutù", "Gé òjìji tuntun; jẹ́ kí bátìrì mọ́, kí ó sì gbẹ", "Pa ohun tí a kò nílò"] },
            { title: "Wíwá ìṣòro ní ìtẹ̀léra", bullets: ["1. Panẹ́ẹ̀lì: ó dọ̀tí tàbí òjìji wà?", "2. Ìsopọ̀: ó tú tàbí ó dípẹtà?", "3. Iná controller; 4. Bátìrì; 5. Ẹ̀rọ àfikún"] },
            { title: "Ìkìlọ̀ bátìrì", bullets: ["Ó wú, ó gbóná gan-an tàbí ó ń jò: pààrọ̀ rẹ̀", "Má ṣe gba agbára sínú bátìrì tí ó ti bàjẹ́ tàbí ṣí i láéláé", "Bátìrì àtijọ́: olùkó-ìdọ̀tí tí a fọwọ́ sí tàbí ètò ìgbàpadà"] }
          ],
          sources: [NFPA, WHO_EWASTE],
          tryIt: "Kọ káàdì ìtọ́jú fún oníbàárà (ìlà mẹ́rin ti ìtọ́jú déédé) àti àkọsílẹ̀ ìgbésẹ̀ márùn-ún fún wíwá ìṣòro tí o máa gbé lọ sí gbogbo ìpè iṣẹ́.",
          youCanNow: "kọ́ oníbàárà bí ó ṣe lè tọ́jú ẹ̀rọ rẹ̀, kí o sì wá àwọn ìṣòro tó rọrùn ní ìtẹ̀léra tó tọ́.",
          quickCheck: [
            { objective: "O4", q: "Iná ń kú ní kùtùkùtù. Kí ni ohun àkọ́kọ́ tí o máa ṣàyẹ̀wò?", options: ["Àwọ̀ bátìrì", "Bóyá panẹ́ẹ̀lì dọ̀tí tàbí òjìji wà lórí rẹ̀", "Fóònù oníbàárà", "Iye owó kit náà"], answer: 1, why: "Bẹ̀rẹ̀ pẹ̀lú panẹ́ẹ̀lì: ìdọ̀tí àti òjìji tuntun jẹ́ ohun tó wọ́pọ̀, tó sì rọrùn láti tún ṣe." },
            { objective: "O4", q: "O rí bátìrì kan tí ó wú, tí ó sì gbóná. Kí ni o máa ṣe?", options: ["Pààrọ̀ rẹ̀; má ṣe gba agbára sínú rẹ̀ tàbí ṣí i", "Gba agbára sínú rẹ̀ pẹ́ sí i", "Ṣí i láti wo inú rẹ̀", "Sun ún"], answer: 0, why: "Bátìrì tí ó wú, tí ó sì gbóná léwu, a sì gbọ́dọ̀ pààrọ̀ rẹ̀ láìléwu." }
          ]
        },
        {
          title: "Títà pẹ̀lú òtítọ́: owó lẹ́ẹ̀kan àti PAYGo",
          objectives: ["O5"],
          minutes: 5,
          goal: "Ṣàlàyé iye owó lẹ́ẹ̀kan àti àdéhùn PAYGo kí oníbàárà lè sọ àpapọ̀ owó tí òun máa san.",
          text: [
            "Ọ̀pọ̀ ìdílé kò lè san gbogbo owó lẹ́ẹ̀kan, nítorí náà ọ̀pọ̀ ilé-iṣẹ́ ń ta kit ní PAYGo (pay-as-you-go, sísan díẹ̀díẹ̀). Oníbàárà máa san owó ìbẹ̀rẹ̀ (deposit), lẹ́yìn náà owó kékeré, nígbà púpọ̀ lójoojúmọ́, lọ́sọ̀ọ̀sẹ̀ tàbí lóṣooṣù pẹ̀lú owó orí fóònù (mobile money). Tí sísan bá dúró, kit náà máa tì títí wọ́n á fi san án lẹ́ẹ̀kan sí i. Lẹ́yìn ìsanwó ìkẹyìn, oníbàárà ló ni ín.",
            "PAYGo ń ran ìdílé lọ́wọ́ láti ní iná oòrùn kíákíá, ṣùgbọ́n àpapọ̀ owó rẹ̀ sábà máa ń ju iye owó lẹ́ẹ̀kan lọ. Olùtà olóòótọ́ máa ń fi méjèèjì hàn. Àpẹẹrẹ (nọ́mbà jẹ́ àpẹẹrẹ nìkan): iye owó lẹ́ẹ̀kan KES 20,000. PAYGo: owó ìbẹ̀rẹ̀ KES 2,000, lẹ́yìn náà KES 1,500 lóṣooṣù fún oṣù 18: 2,000 + (1,500 x 18) = KES 29,000 lápapọ̀. Oníbàárà gbọ́dọ̀ lè sọ àpapọ̀ yẹn kí ó tó fọwọ́ sí i.",
            "GOGLA, ẹgbẹ́ àwọn ilé-iṣẹ́ iná oòrùn tí kò so mọ́ iná ìjọba, ní òfin ààbò oníbàárà tí a gbé ka títà àti iye owó tó tọ́ (má ṣe ta ju ohun tí ìdílé lè san lọ), òtítọ́ (ìsọfúnni tó yé, tó sì jẹ́ òtítọ́), ìwà tó tọ́ àti ọ̀wọ̀, iṣẹ́ tó dára àti dídára ọjà. Tẹ̀lé e, bóyá ilé-iṣẹ́ rẹ ti fọwọ́ sí i tàbí kò tíì fọwọ́ sí i.",
            "Má ṣe ṣèlérí ju ohun tí ẹ̀rọ náà lè ṣe lọ láéláé. Má ṣe béèrè PIN owó orí fóònù oníbàárà láéláé; ìsanwó máa ń lọ sí nọ́mbà tàbí till gidi ilé-iṣẹ́ náà, ilé-iṣẹ́ gidi kì í sì í béèrè PIN láéláé."
          ],
          steps: ["Fi iye owó lẹ́ẹ̀kan hàn.", "Fi owó ìbẹ̀rẹ̀ PAYGo, iye ìsanwó kọ̀ọ̀kan, bí ó ṣe máa ń wáyé tó àti fún ìgbà tí ó máa pẹ́ tó hàn.", "Ṣírò àpapọ̀ owó PAYGo pẹ̀lú oníbàárà.", "Ṣàlàyé ohun tí ó máa ṣẹlẹ̀ tí wọ́n bá fo ìsanwó kan, àti ìdánilójú (warranty).", "Ṣàyẹ̀wò pé oníbàárà lè san owó náà; má ṣe béèrè PIN láéláé."],
          words: [["PAYGo (pay-as-you-go)", "rírà kit pẹ̀lú owó ìbẹ̀rẹ̀ àti owó kékeré; ó máa tì tí sísan bá dúró, ó sì di tìrẹ lẹ́yìn ìsanwó ìkẹyìn."], ["Owó ìbẹ̀rẹ̀ (deposit)", "ìsanwó àkọ́kọ́ kí oníbàárà tó gba kit náà."], ["Ààbò oníbàárà", "òfin àti àṣà tí ó ń bá oníbàárà lò pẹ̀lú òdodo àti òtítọ́."]],
          slides: [
            { title: "Bí PAYGo ṣe ń ṣiṣẹ́", bullets: ["Owó ìbẹ̀rẹ̀, lẹ́yìn náà owó kékeré pẹ̀lú owó orí fóònù", "Kit máa tì tí sísan bá dúró", "Oníbàárà ló ni ín lẹ́yìn ìsanwó ìkẹyìn"] },
            { title: "Fi àpapọ̀ hàn", bullets: ["Àpapọ̀ owó PAYGo sábà máa ń ju owó lẹ́ẹ̀kan lọ", "Àpẹẹrẹ: 2,000 + 1,500 x 18 = KES 29,000 sí KES 20,000 lẹ́ẹ̀kan", "Oníbàárà lè sọ àpapọ̀ kí ó tó fọwọ́ sí i"] },
            { title: "Ta pẹ̀lú òdodo (òfin GOGLA)", bullets: ["Títà tó tọ́: ohun tí wọ́n lè san nìkan", "Òtítọ́; ìwà tó tọ́ àti ọ̀wọ̀", "Iṣẹ́ tó dára àti dídára ọjà"] },
            { title: "Láéláé", bullets: ["Má ṣèlérí ju ohun tí ẹ̀rọ lè ṣe lọ", "Má béèrè PIN owó orí fóònù"] }
          ],
          sources: [GOGLA_CP],
          tryIt: "Fún kit kan tí o mọ̀ (tàbí àpẹẹrẹ náà), kọ iye owó lẹ́ẹ̀kan àti àdéhùn PAYGo sí ẹ̀gbẹ́ ara wọn, kí o sì ṣírò àpapọ̀ owó PAYGo. Ṣe àṣeṣe ṣíṣàlàyé rẹ̀ sókè ní ìṣẹ́jú kan tàbí kí ó dín.",
          youCanNow: "ṣàlàyé iye owó lẹ́ẹ̀kan àti ti PAYGo pẹ̀lú òtítọ́ kí oníbàárà mọ àpapọ̀ owó kí ó tó fọwọ́ sí i.",
          quickCheck: [
            { objective: "O5", q: "Owó ìbẹ̀rẹ̀ PAYGo XOF 10,000, lẹ́yìn náà XOF 5,000 lóṣooṣù fún oṣù 12. Kí ni àpapọ̀?", options: ["XOF 15,000", "XOF 60,000", "XOF 50,000", "XOF 70,000"], answer: 3, why: "10,000 + (5,000 x 12) = 70,000." },
            { objective: "O5", q: "Èwo ni títà pẹ̀lú òtítọ́?", options: ["Fífi àpapọ̀ owó PAYGo pamọ́", "Ṣíṣèlérí pé kit náà máa ṣiṣẹ́ fíríìjì nígbà tí kò lè ṣe é", "Fífi iye owó lẹ́ẹ̀kan àti àpapọ̀ owó PAYGo hàn ní ẹ̀gbẹ́ ara wọn", "Títa ju ohun tí ìdílé lè san lọ fún wọn"], answer: 2, why: "Òtítọ́ túmọ̀ sí fífi iye owó méjèèjì hàn kedere." }
          ]
        },
        {
          title: "Kíkọ ìdíyelé àti ṣíṣe òwò iná oòrùn rẹ",
          objectives: ["O5", "O2"],
          minutes: 5,
          goal: "Kọ ìdíyelé tí ó pé, tí ó sì jẹ́ òtítọ́ fún ilé kan.",
          text: [
            "Ìdíyelé tó dára ń mú ìgbẹ́kẹ̀lé wá. Ó ń fi ohun tí oníbàárà fẹ́ lò hàn, tábìlì agbára, ẹ̀rọ tí o yàn àti ìdí rẹ̀, iye owó, àdéhùn ìsanwó àti ìdánilójú (warranty). Ó tún ní orúkọ rẹ àti nọ́mbà fóònù rẹ, àti ọjọ́.",
            "Iye owó tìrẹ fún ìgbéká gbọ́dọ̀ bo kit, wáyà àti àwọn ohun èlò, ìrìnnà sí ilé náà, àkókò rẹ, àti èrè. Àpẹẹrẹ (nọ́mbà jẹ́ àpẹẹrẹ nìkan): kit MAD 2,500, wáyà àti ohun èlò MAD 300, ìrìnnà MAD 150, owó iṣẹ́ MAD 400: ìnáwó MAD 3,350. Fi èrè MAD 400 kún un: MAD 3,750.",
            "Lẹ́yìn ìgbéká, fún oníbàárà ní káàdì kan: àwọn ìgbésẹ̀ ìtọ́jú, ìtumọ̀ àwọn iná controller, ìdánilójú, àti nọ́mbà rẹ fún ìṣòro. Padà wá lẹ́yìn oṣù kan láti ṣàyẹ̀wò. Oníbàárà tí inú rẹ̀ dùn máa ń rán àwọn aládùúgbò wá; bẹ́ẹ̀ ni òwò iná oòrùn ṣe ń dàgbà ní àwọn abúlé láti Kitui dé Kaolack.",
            "Kọ àkọsílẹ̀ tó rọrùn nípa iṣẹ́ kọ̀ọ̀kan: oníbàárà, kit àti nọ́mbà ìdánimọ̀ rẹ̀ (serial number), ọjọ́, iye owó àti ìpadàbọ̀ èyíkéyìí. Ó ń ràn ọ́ lọ́wọ́ láti mú ìlérí ìdánilójú ṣẹ, kí o sì rí àwọn kit tí ó ń bàjẹ́."
          ],
          steps: ["Kọ tábìlì agbára àti ìṣirò ìwọ̀n tí o ṣe.", "Dárúkọ kit náà, àti bóyá a ti fọwọ́ sí i tàbí ó ní ìdánilójú ní kíkọ.", "Fi àkọsílẹ̀ ààbò rẹ kún un.", "Fi iye owó lẹ́ẹ̀kan àti àdéhùn PAYGo hàn pẹ̀lú àpapọ̀.", "So káàdì ìtọ́jú àti ìdánilójú mọ́ ọn, pẹ̀lú orúkọ rẹ, nọ́mbà rẹ àti ọjọ́."],
          words: [["Ìdíyelé (quote)", "ìfilọ̀ ní kíkọ tí ó ń fi ohun tí o máa pèsè àti ṣe hàn, àti iye owó rẹ̀."], ["Nọ́mbà ìdánimọ̀ ọjà (serial number)", "nọ́mbà àdáni tí ó wà lórí ọjà, tí a ń lò fún ìdánilójú rẹ̀."], ["Ìpadàbọ̀ (call-back)", "ìbẹ̀wò padà láti tún ìṣòro ṣe lẹ́yìn ìgbéká."]],
          slides: [
            { title: "Ohun tí ìdíyelé ń fi hàn", bullets: ["Ohun tí wọ́n fẹ́ lò: tábìlì agbára", "Ẹ̀rọ àti ìdí rẹ̀; a ti fọwọ́ sí i tàbí ìdánilójú", "Iye owó, àdéhùn, ìdánilójú; orúkọ rẹ, nọ́mbà rẹ, ọjọ́"] },
            { title: "Iye owó ìgbéká rẹ", bullets: ["Kit + wáyà + ìrìnnà + owó iṣẹ́ + èrè", "Àpẹẹrẹ: ìnáwó MAD 3,350 + MAD 400 = MAD 3,750", "Àpẹẹrẹ nìkan ni àwọn nọ́mbà"] },
            { title: "Lẹ́yìn iṣẹ́ náà", bullets: ["Káàdì ìtọ́jú àti ìdánilójú", "Padà wá lẹ́yìn oṣù kan", "Àkọsílẹ̀: oníbàárà, kit, serial number, ọjọ́, iye owó"] }
          ],
          tryIt: "Kọ ìdíyelé rẹ ní kíkún fún ilé kan, bí a ṣe ṣàlàyé rẹ̀ nínú iṣẹ́ ìkẹyìn. Kà á fún ọ̀rẹ́ kan kí o sì ní kí ó sọ àpapọ̀ owó tí òun máa san fún ọ.",
          youCanNow: "kọ ìdíyelé tí ó pé, tí ó sì jẹ́ òtítọ́ fún ẹ̀rọ iná oòrùn ilé, kí o sì máa kọ àkọsílẹ̀ tó dára nípa gbogbo iṣẹ́.",
          quickCheck: [
            { objective: "O5", q: "Nǹkan wo ló yẹ kí ó wà lórí gbogbo ìdíyelé?", options: ["PIN owó orí fóònù oníbàárà", "Àpapọ̀ owó tí oníbàárà máa san, àti ìdánilójú", "Ìlérí iná ọ̀fẹ́ títí láé", "Iye owó àwọn olùdíje rẹ nìkan"], answer: 1, why: "Àpapọ̀ owó àti ìdánilójú ń jẹ́ kí oníbàárà pinnu pẹ̀lú òdodo." },
            { objective: "O2", q: "Kí ló dé tí a fi ń fi tábìlì agbára sórí ìdíyelé?", options: ["Ó ń fi hàn bí o ṣe ṣírò ìwọ̀n ẹ̀rọ fún ohun tí ìdílé ń lò gan-an", "Láti mú kí ìdíyelé gùn sí i", "Àwọn oníbàárà fẹ́ràn nọ́mbà", "Kò pọndandan"], answer: 0, why: "Tábìlì náà ń fi hàn pé ẹ̀rọ náà bá ohun tí ìdílé máa lò mu." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Mímú kí ó máa ṣiṣẹ́ àti títà",
        questions: [
          { objective: "O4", q: "Báwo ni oníbàárà ṣe yẹ kí ó nu panẹ́ẹ̀lì tí eruku wà lórí rẹ̀?", options: ["Pẹ̀lú ọṣẹ ní ọ̀sán gangan", "Nípa dídúró lé e lórí àti fífọ̀ ọ́", "Pẹ̀lú omi àti aṣọ rírọ̀ nígbà tí ó tutù", "Pẹ̀lú yanrìn"], answer: 2, why: "Omi àti aṣọ rírọ̀, nígbà tí ó tutù, ń nù ún láìbà á jẹ́." },
          { objective: "O4", q: "Iná ń kú ní kùtùkùtù, panẹ́ẹ̀lì sì mọ́, kò sì sí òjìji. Kí ni o máa ṣàyẹ̀wò tó kàn?", options: ["Ìkànnì TV oníbàárà", "Ìsopọ̀: wáyà tí ó tú, tí ó já tàbí tí ó dípẹtà", "Àsọtẹ́lẹ̀ ojú ọjọ́", "Kò sí nǹkan míì"], answer: 1, why: "Ìsopọ̀ ló kàn nínú ìtẹ̀léra wíwá ìṣòro." },
          { objective: "O4", q: "Kí ló yẹ kí ó ṣẹlẹ̀ sí bátìrì iná oòrùn àtijọ́?", options: ["Sun ún", "Sin ín", "Jù ú sínú odò", "Fún olùkó-ìdọ̀tí tí a fọwọ́ sí tàbí ètò ìgbàpadà"], answer: 3, why: "Bátìrì àtijọ́ jẹ́ e-waste, wọ́n sì nílò àtúnlò láìléwu." },
          { objective: "O5", q: "Kí ló máa ń ṣẹlẹ̀ nínú PAYGo tí sísan bá dúró?", options: ["Kit náà máa tì títí oníbàárà á fi san án lẹ́ẹ̀kan sí i", "Oníbàárà di olówó rẹ̀ lójú ẹsẹ̀", "Panẹ́ẹ̀lì máa fọ́", "Kò sí nǹkan kankan"], answer: 0, why: "Kit PAYGo máa ń tì tí sísan bá dúró, ó sì máa ń ṣí nígbà tí wọ́n bá san án." },
          { objective: "O5", q: "Oníbàárà kan lè san ìdajì ìsanwó oṣooṣù nìkan. Kí ni títà tó tọ́ túmọ̀ sí?", options: ["Ta kit ńlá fún un bẹ́ẹ̀ náà", "Fi iye ìsanwó pamọ́", "Fún un ní kit kékeré tàbí ètò tí ó lè san", "Béèrè PIN rẹ̀"], answer: 2, why: "Títà tó tọ́ túmọ̀ sí pé o kò ní ta ju ohun tí ìdílé lè san lọ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Iná Oòrùn fún Ilé: Ìgbéká, Títà àti Òwò Agbára Láìsí Iná Ìjọba",
    questions: [
      { objective: "O1", q: "Apá wo ló ń tọ́jú agbára fún alẹ́?", options: ["Panẹ́ẹ̀lì", "Bátìrì", "Fiúsì", "Iná"], answer: 1, why: "Bátìrì ń tọ́jú agbára fún ìgbà tí kò bá sí oòrùn." },
      { objective: "O1", q: "Kí ni VeraSol?", options: ["Orúkọ ọjà bátìrì kan", "Ilé-iṣẹ́ iná oòrùn tí ó ń tà ní PAYGo", "Ètò òmìnira tó ń ṣàyẹ̀wò dídára, tí ó ń fọwọ́ sí kit iná oòrùn tí kò so mọ́ iná ìjọba", "Owó orí ìjọba"], answer: 2, why: "VeraSol jẹ́ ètò òmìnira fún ìdánilójú dídára iná oòrùn tí kò so mọ́ iná ìjọba." },
      { objective: "O1", q: "Kit kan kò ní àmì, a kò fọwọ́ sí i, kò sì ní ìdánilójú. Kí ni o máa ṣe?", options: ["Béèrè ìdánilójú ní kíkọ àti èsì àyẹ̀wò, tàbí yan kit tí a ti fọwọ́ sí", "Tà á bí ẹni pé a ti fọwọ́ sí i", "Tà á ní owó tó ga jù", "Gbé e kalẹ̀ láìsọ fún ẹnikẹ́ni"], answer: 0, why: "Láìsí ẹ̀rí dídára, béèrè ìdánilójú àti èsì àyẹ̀wò, tàbí yan kit tí a ti fọwọ́ sí." },
      { objective: "O1", q: "Kí ló dé tí àwọn kit kékeré fi sábà máa ń lo ẹ̀rọ DC?", options: ["Ariwo wọn pọ̀ jù", "Wọ́n nílò iná ìjọba", "Ọ̀fẹ́ ni wọ́n nígbà gbogbo", "Wọ́n ń lo agbára díẹ̀ ju ẹ̀rọ AC pẹ̀lú inverter lọ"], answer: 3, why: "Ẹ̀rọ DC kò ní àdánù inverter, wọ́n sì ń lo agbára díẹ̀." },
      { objective: "O2", q: "Rédíò kan ń lo 5 W fún wákàtí 6 lójúmọ́. Wh mélòó?", options: ["11 Wh", "30 Wh", "56 Wh", "1 Wh"], answer: 1, why: "5 x 6 = 30 Wh." },
      { objective: "O2", q: "Kí ló dé tí a fi ń fi nǹkan bí 30% kún àpapọ̀ ojoojúmọ́?", options: ["Fún agbára tí ó ń sọnù nínú wáyà, controller àti bátìrì", "Fún èrè", "Fún owó orí", "Fún káàdì ìpè fóònù oníbàárà"], answer: 0, why: "Agbára máa ń sọnù lójú ọ̀nà, nítorí náà ẹ̀rọ gbọ́dọ̀ ṣe ju ohun tí àwọn ẹ̀rọ ń lò lọ." },
      { objective: "O2", q: "Agbára ojoojúmọ́ 300 Wh, wákàtí oòrùn gangan 5. Kí ni panẹ́ẹ̀lì tó kéré jù láti inú ìṣirò?", options: ["1,500 W", "30 W", "6 W", "60 W"], answer: 3, why: "300 / 5 = 60 W; lẹ́yìn náà gbé e sókè sí ìwọ̀n panẹ́ẹ̀lì tó kàn." },
      { objective: "O2", q: "Agbára ojoojúmọ́ 240 Wh, bátìrì lithium tí a ń lò dé 80%, 12 V. Nǹkan bí amp-hour mélòó?", options: ["Nǹkan bí 25 Ah", "Nǹkan bí 12 Ah", "Nǹkan bí 300 Ah", "Nǹkan bí 2 Ah"], answer: 0, why: "240 / 0.8 = 300 Wh; 300 / 12 = 25 Ah." },
      { objective: "O3", q: "Oníbàárà kan ń gbé ní àríwá Ghana, ní àríwá equator. Ọ̀nà wo ni panẹ́ẹ̀lì yẹ kí ó dojú kọ?", options: ["Àríwá", "Òkè tààrà láìsí ìdàsílẹ̀ rárá", "Gúúsù, sí ọ̀nà equator", "Ìlà-oòrùn nìkan"], answer: 2, why: "Ní àríwá equator, panẹ́ẹ̀lì máa ń dojú kọ gúúsù, sí ọ̀nà equator, pẹ̀lú ìdàsílẹ̀ díẹ̀." },
      { objective: "O3", q: "Níbo ni bátìrì yẹ kí ó wà?", options: ["Lórí òrùlé nínú oòrùn", "Ní ẹ̀gbẹ́ iná ìdáná", "Nínú ilé, ibi gbígbẹ, òjìji, afẹ́fẹ́ ń wọlé, kúrò lórí ilẹ̀, jìnnà sí ọmọdé", "Nínú àpótí títì tí kò ní afẹ́fẹ́"], answer: 2, why: "Ibi gbígbẹ, tí òjìji wà, tí afẹ́fẹ́ ń wọlé, jìnnà sí ọmọdé àti iná ni ibi tí kò léwu jù." },
      { objective: "O3", q: "Nínú ọ̀pọ̀ kit tí controller wọn dá wà, kí ni o máa kọ́kọ́ so?", options: ["Panẹ́ẹ̀lì mọ́ àwọn ẹ̀rọ", "Bátìrì mọ́ controller", "Àwọn ẹ̀rọ mọ́ iná ìjọba", "Panẹ́ẹ̀lì mọ́ bátìrì tààrà"], answer: 1, why: "Sísopọ̀ bátìrì mọ́ controller lákọ̀ọ́kọ́ ń jẹ́ kí controller ṣètò ara rẹ̀; lẹ́yìn náà panẹ́ẹ̀lì, lẹ́yìn náà àwọn ẹ̀rọ, àyàfi tí ìwé ìtọ́sọ́nà bá sọ ọ̀nà míì." },
      { objective: "O3", q: "Iṣẹ́ wo ló wà lẹ́yìn ẹ̀kọ́ yìí, tí ó sì nílò oníná tó ní ìwé àṣẹ?", options: ["Nínu panẹ́ẹ̀lì", "Gbígbé bátìrì síbi tó yẹ", "Fífi fiúsì olùṣe sí i", "Sísopọ̀ ẹ̀rọ mọ́ iná ìjọba tàbí wáyà mains"], answer: 3, why: "Iṣẹ́ iná ìjọba àti mains wà fún oníná tó ní ìwé àṣẹ nìkan." },
      { objective: "O3", q: "Kí ló dé tí a fi ń jẹ́ kí afẹ́fẹ́ máa wọ ibi tí bátìrì lead-acid wà, tí a sì ń pa iná mọ́ kúrò lọ́dọ̀ wọn?", options: ["Wọ́n máa ń tú gáàsì tí ó lè gbiná jáde nígbà tí wọ́n ń gba agbára", "Wọ́n máa ń tutù jù", "Wọ́n máa ń fa kòkòrò mọ́ra", "Wọ́n nílò ìtànṣán oòrùn"], answer: 0, why: "Bátìrì lead-acid máa ń tú gáàsì tí ó lè gbiná jáde nígbà tí ó ń gba agbára." },
      { objective: "O4", q: "Ìgbà wo ló dára jù láti nu panẹ́ẹ̀lì?", options: ["Ọ̀sán gangan nínú oòrùn kíkún", "Àárọ̀ kùtùkùtù tàbí ìrọ̀lẹ́, nígbà tí ó tutù", "Nígbà ìjì", "Láéláé"], answer: 1, why: "Panẹ́ẹ̀lì tí ó tutù kò léwu láti fọwọ́ kàn àti láti nù ju èyí tí ó gbóná nínú oòrùn kíkún." },
      { objective: "O4", q: "Kí ni ìtẹ̀léra tó tọ́ fún wíwá ìṣòro?", options: ["Bátìrì, lẹ́yìn náà méfò", "Àwọn ẹ̀rọ, lẹ́yìn náà ra kit tuntun", "Panẹ́ẹ̀lì, ìsopọ̀, controller, bátìrì, àwọn ẹ̀rọ", "Controller nìkan"], answer: 2, why: "Ṣíṣàyẹ̀wò ní ìtẹ̀léra yìí ń rí àwọn ìdí tó wọ́pọ̀, tó sì rọrùn lákọ̀ọ́kọ́." },
      { objective: "O4", q: "Ìdílé kan fi TV ńlá kún un, iná sì ń kú ní kùtùkùtù báyìí. Kí ló ṣeé ṣe kí ó jẹ́ ìdí rẹ̀?", options: ["Panẹ́ẹ̀lì dojú bolẹ̀", "Oòrùn ti dín agbára kù", "Fiúsì ti lágbára jù", "Àwọn ẹ̀rọ ti pọ̀ ju ohun tí a ṣírò ẹ̀rọ fún"], answer: 3, why: "Àwọn ẹ̀rọ àfikún ń lo agbára ju ohun tí ẹ̀rọ ń ṣe, tí ó sì ń tọ́jú lọ." },
      { objective: "O5", q: "Iye owó lẹ́ẹ̀kan NGN 150,000. PAYGo: owó ìbẹ̀rẹ̀ NGN 20,000, lẹ́yìn náà NGN 12,000 lóṣooṣù fún oṣù 12. Kí ni àpapọ̀ PAYGo?", options: ["NGN 164,000", "NGN 144,000", "NGN 32,000", "NGN 150,000"], answer: 0, why: "20,000 + (12,000 x 12) = 164,000." },
      { objective: "O5", q: "Ta ni yóò béèrè PIN owó orí fóònù lọ́wọ́ oníbàárà?", options: ["Ilé-iṣẹ́ iná oòrùn", "Ọ̀gá rẹ", "Kò sí ilé-iṣẹ́ gidi kankan: àwọn onjìbìtì nìkan", "Olùgbéká"], answer: 2, why: "Ilé-iṣẹ́ gidi kì í béèrè PIN láéláé." },
      { objective: "O5", q: "Èwo ló jẹ́ apá kan òfin ààbò oníbàárà GOGLA?", options: ["Títa kit tó tóbi jù fún gbogbo ènìyàn", "Òtítọ́: ìsọfúnni tó yé, tó sì jẹ́ òtítọ́", "Fífi àpapọ̀ owó pamọ́", "Kò sí iṣẹ́ lẹ́yìn títà"], answer: 1, why: "Òtítọ́ àti títà tó tọ́ jẹ́ àwọn ìlànà pàtàkì." },
      { objective: "O5", q: "Kit EGP 4,000, wáyà EGP 500, ìrìnnà EGP 300, owó iṣẹ́ EGP 700, èrè EGP 500. Kí ni iye owó rẹ?", options: ["EGP 5,500", "EGP 4,500", "EGP 5,000", "EGP 6,000"], answer: 3, why: "4,000 + 500 + 300 + 700 + 500 = 6,000." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 1, 4, 6, 8, 11, 14, 16, 18] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn nínú ìdíyelé rẹ ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "A ṣàyẹ̀wò dídára", objective: "O1", notYet: "A kò dárúkọ kit náà, tàbí a kò ṣàyẹ̀wò dídára rẹ̀.", meets: "A dárúkọ kit náà àti àwọn apá rẹ̀, ìdíyelé sì kọ bóyá ó wà nínú àkójọ VeraSol tàbí ó ní ìdánilójú ní kíkọ.", exceeds: "Ó tún ṣàlàyé fún oníbàárà ìdí tí kit tí a ti fọwọ́ sí fi ṣe pàtàkì." },
      { name: "Ìwọ̀n tó tọ́", objective: "O2", notYet: "Kò sí tábìlì agbára, tàbí ìṣirò kò tọ̀nà.", meets: "Tábìlì agbára, àfikún 30%, àti ìwọ̀n panẹ́ẹ̀lì àti bátìrì ni a ṣírò tọ̀nà.", exceeds: "Ó tún ṣírò fún ọjọ́ ìkùukùu tàbí àwọn oṣù tí ìkùukùu pọ̀ jù, ó sì sọ ibi tí nọ́mbà wákàtí oòrùn ti wá." },
      { name: "Ìgbéká láìléwu", objective: "O3", notYet: "Kò sí àkọsílẹ̀ ààbò, tàbí ó ní iṣẹ́ iná ìjọba tàbí mains nínú.", meets: "Àkọsílẹ̀ náà bo ibi tí panẹ́ẹ̀lì máa wà, ààbò àkàbà, ibi tí bátìrì máa wà, polarity, fiúsì àti ìtẹ̀léra ìsopọ̀, láìsí iṣẹ́ iná ìjọba.", exceeds: "Ó tún dárúkọ àjọ tó ń ṣàkóso agbára tí a máa béèrè lọ́wọ́ rẹ̀ nípa ìwé àṣẹ." },
      { name: "Ìtọ́jú àti ìṣòro", objective: "O4", notYet: "Kò sí káàdì ìtọ́jú, tàbí ìmọ̀ràn tí ó léwu wà nínú rẹ̀.", meets: "Káàdì náà fúnni ní ìtọ́jú déédé àti ìtẹ̀léra ìgbésẹ̀ márùn-ún fún ìṣòro, ó sì sọ bí a ṣe ń bójú tó bátìrì àtijọ́.", exceeds: "Ó tún ṣàlàyé àwọn iná controller fún kit yìí." },
      { name: "Iye owó àti àdéhùn tó jẹ́ òtítọ́", objective: "O5", notYet: "Àpapọ̀ owó PAYGo tàbí ìdánilójú kò sí, tàbí ìṣirò kò tọ̀nà.", meets: "Iye owó lẹ́ẹ̀kan, àdéhùn PAYGo tí ó bá wà àti àpapọ̀ tó tọ̀nà wà ní ẹ̀gbẹ́ ara wọn, pẹ̀lú ìdánilójú àti nọ́mbà olùgbéká.", exceeds: "Ó tún ṣàyẹ̀wò pé ìsanwó bá owó ìdílé náà mu, ó sì sọ ohun tí ó máa ṣẹlẹ̀ tí wọ́n bá fo ìsanwó kan." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn kọ ìdíyelé pẹ̀lú tábìlì agbára fún oníbàárà gidi láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn tà tàbí gbé kit tí a ti fọwọ́ sí kalẹ̀ láàárín ọjọ́ 90",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé kò sí iná bátìrì, ìjáná tàbí ẹ̀sùn oníbàárà nípa owó tí a fi pamọ́ láàárín ọjọ́ 90"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù lásán tí ó ní ẹ̀rọ ìṣirò; dátà fún wíwá kúkúrú nínú àkójọ VeraSol tí ó bá ṣeé ṣe",
      "Ìwé àti gègé fún tábìlì agbára, àkọsílẹ̀ ààbò, káàdì ìtọ́jú àti ìdíyelé",
      "Tí ó bá ṣeé ṣe, kit iná oòrùn kékeré tí a ti fọwọ́ sí láti wò àti láti dárúkọ àwọn apá rẹ̀",
      "Nǹkan bí ìṣẹ́jú 60 sí 75 lápapọ̀, ní àwọn ìpàdé kúkúrú"
    ],
    facilitatorNotes: [
      "Nínú ẹgbẹ́ ọ̀dọ́, ẹgbẹ́ iṣẹ́ ọwọ́ tàbí ẹgbẹ́ obìnrin: ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà orí kan ní ìpàdé kọ̀ọ̀kan, kí àwọn akẹ́kọ̀ọ́ sì ṣírò ìwọ̀n ẹ̀rọ fún ilé gidi kan tí wọ́n mọ̀.",
      "Ìgbéká gidi gbọ́dọ̀ wáyé lábẹ́ olùgbéká tí ó ní ìrírí nìkan, lórí kit DC kékeré; má ṣe jẹ́ kí àwọn akẹ́kọ̀ọ́ ṣiṣẹ́ lórí iná ìjọba, wáyà mains tàbí inverter láéláé.",
      "Kí ẹ̀kọ́ tó bẹ̀rẹ̀, wádìí bóyá orílẹ̀-èdè rẹ ń fún àwọn onímọ̀ iná oòrùn ní ìwé àṣẹ, àti àwọn olùkó e-waste tàbí ètò ìgbàpadà tí ó wà ní agbègbè rẹ.",
      "Má ṣe ní kí àwọn akẹ́kọ̀ọ́ pín PIN tàbí ọ̀rọ̀ aṣínà nínú kíláàsì láéláé.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};

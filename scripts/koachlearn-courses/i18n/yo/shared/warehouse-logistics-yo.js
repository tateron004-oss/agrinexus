"use strict";

// Koach Learn course (Yoruba translation of shared/warehouse-logistics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const BLS_MOVERS = { name: "U.S. Bureau of Labor Statistics: Hand laborers and material movers", url: "https://www.bls.gov/ooh/transportation-and-material-moving/hand-laborers-and-material-movers.htm" };
const BLS_CLERKS = { name: "U.S. Bureau of Labor Statistics: Material recording clerks", url: "https://www.bls.gov/ooh/office-and-administrative-support/material-recording-clerks.htm" };
const MSSC_CLT = { name: "MSSC: Certified Logistics Technician (CLT) and Certified Logistics Associate (CLA)", url: "https://www.msscusa.org/certified-logistics-technician-clt/" };
const OSHA_OUTREACH = { name: "OSHA Outreach Training Program (10-hour and 30-hour classes)", url: "https://www.osha.gov/training/outreach" };
const OSHA_WAREHOUSE = { name: "OSHA: Warehousing", url: "https://www.osha.gov/warehousing" };
const OSHA_WH_HAZARDS = { name: "OSHA: Warehousing hazards and solutions", url: "https://www.osha.gov/warehousing/hazards-solutions" };
const OSHA_HEAT = { name: "OSHA: Heat exposure", url: "https://www.osha.gov/heat-exposure" };
const OSHA_178 = { name: "OSHA 29 CFR 1910.178: Powered industrial trucks (trailer brakes and wheel chocks)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.178" };
const AJC = { name: "CareerOneStop: find an American Job Center near you", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" };

module.exports = {
  id: "warehouse-logistics-yo",
  lang: "yo",
  translationOf: "warehouse-logistics",
  category: "Workforce Development",
  name: "Iṣẹ́ Ilé Ìkẹ́rùsí àti Ìkó Ẹrù Lọ (Logistics)",
  skills: "Mímọ àwọn iṣẹ́ ilé ìkẹ́rùsí àti ìwé-ẹ̀rí wọn, Wíwá ọjà pẹ̀lú SKU àti kóòdù ibi rẹ̀, Gbígba ẹrù tí ó dé wọlé, Kíkó pallet tí kò léwu, Ṣíṣiṣẹ́ láìléwu pẹ̀lú ìyára",
  outcome: "dárúkọ àwọn iṣẹ́ pàtàkì ní ilé ìkẹ́rùsí àti àwọn ìwé-ẹ̀rí tí ó ń ràn ọ́ lọ́wọ́ láti rí wọn, tẹ̀lé ọjà láti ìgbà tí ó dé títí tí ó fi jáde, wá ọjà kan pẹ̀lú SKU àti kóòdù ibi rẹ̀, fi ẹrù tí ó dé wé ìwé rẹ̀ kí o sì kọ ìṣòro èyíkéyìí sílẹ̀, ṣètò ẹrù pallet tí kò léwu, kí o sì ṣe ètò láti rí iṣẹ́.",
  about: [
    "Àwọn ilé ìkẹ́rùsí (warehouse) àti ibùdó ìpínkiri (distribution center) ló ń gbé àwọn ọjà tí a ń rà lójoojúmọ́, wọ́n sì ń gba òṣìṣẹ́ ní gbogbo ọdún. Ẹ̀kọ́ yìí wà fún àwọn tí ń wá iṣẹ́, àwọn tí ń padà sílé láti ẹ̀wọ̀n, àwọn ológun àtijọ́ àti ẹnikẹ́ni tí ó fẹ́ iṣẹ́ àkọ́kọ́ tí ó dúró ṣinṣin nínú logistics, tí ó sì ní àyè láti dàgbà.",
    "O máa kọ́ àwọn iṣẹ́ inú ilé ìkẹ́rùsí, bí ọjà ṣe ń lọ láti ọkọ̀ akẹ́rù sí ṣẹ́ẹ̀fù sí oníbàárà, bí o ṣe lè ka kóòdù ibi, bí o ṣe lè gba ẹrù tí ó dé wọlé kí o sì ka ọjà dáadáa, bí o ṣe lè kó pallet tí kò léwu, àti bí o ṣe lè wà láìléwu nígbà tí o ń ṣiṣẹ́ kíákíá.",
    "Ẹ̀kọ́ yìí ń múra rẹ sílẹ̀. Kò fún ọ ní ìwé-ẹ̀rí. Tí o bá fẹ́ ọ̀kan, Manufacturing Skill Standards Council (MSSC) ń fúnni ní Certified Logistics Associate (CLA) àti Certified Logistics Technician (CLT). Wíwa forklift nílò ìdálẹ́kọ̀ọ́ láti ọ̀dọ̀ agbanisíṣẹ́; wo ẹ̀kọ́ wa \"Ìpìlẹ̀ Iṣẹ́ Awakọ̀ Forklift\".",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" tí o lè ṣe pẹ̀lú ìwé àti gègé. Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Ṣe àpò ìbẹ̀rẹ̀ iṣẹ́ ilé ìkẹ́rùsí: ìròyìn gbígba ẹrù fún ẹrù àṣeṣe kan (iye tí o kà tí o fi wé packing list, pẹ̀lú gbogbo àìtó, àṣejù àti ìbàjẹ́ tí o kọ sílẹ̀), pick list tí o tò ní ọ̀nà ìrìn pẹ̀lú kóòdù ibi, àwòrán ètò ẹrù pallet tí kò léwu pẹ̀lú ìwọ̀n àti ìpele, àti ètò ojú-ìwé kan láti rí iṣẹ́ pẹ̀lú agbanisíṣẹ́ tàbí ètò mẹ́ta, ìwé-ẹ̀rí tí o máa lépa, àti ìlà résumé méjì tí ó jẹ́ òtítọ́.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà tí ń wá iṣẹ́ àkọ́kọ́ ní ilé ìkẹ́rùsí, ibùdó ìpínkiri tàbí iṣẹ́ logistics: àwọn tí ń wá iṣẹ́, àwọn tí ń padà sílé láti ẹ̀wọ̀n, àwọn ológun àtijọ́ àti àwọn ológun tí wọ́n ti ṣiṣẹ́ ìpèsè ẹrù, àwọn ọ̀dọ́ àti àwọn tí ń yí iṣẹ́ padà.",
    startingPoint: "Wọ́n lè ka iye, ka nọ́mbà àti àmì orúkọ ọjà (label), wọ́n sì lè tẹ̀lé ìtọ́sọ́nà. Wọn kò ní ìrírí púpọ̀ nínú kóòdù ibi, ìwé gbígba ẹrù, kíka ọjà tàbí kíkó pallet. Àwọn kan ti ṣe iṣẹ́ agbára ṣùgbọ́n wọn kò kọ́ bí a ṣe ń gbé ẹrù sókè láìléwu.",
    gap: "Àwọn ilé ìkẹ́rùsí ń gba ọ̀pọ̀ ènìyàn síṣẹ́, ṣùgbọ́n òṣìṣẹ́ tuntun tí ó ń ṣe àṣìṣe nínú kíka, tí ó ń da ibi pọ̀ tàbí tí ó fara pa kì í pẹ́ níbẹ̀. Àwọn akẹ́kọ̀ọ́ nílò àṣà ìpìlẹ̀ ti ìṣọ́ra àti ààbò, àti ọ̀nà tó yé sí ìwé-ẹ̀rí àti ìgbéga, kí wọ́n lè rí iṣẹ́ kí wọ́n sì dúró níbẹ̀.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé gbogbo ọ̀rọ̀ pàtàkì",
      "Ìṣirò: nọ́mbà odidi, àròpọ̀ àti ìsọdipúpọ̀ tó rọrùn; nọ́mbà àṣeṣe jẹ́ èyí tí a hùmọ̀",
      "Kò nílò ẹ̀rọ kankan: ṣe àṣeṣe pẹ̀lú ìwé, nǹkan inú ilé tàbí páálí",
      "Kò sí lílo forklift tàbí ẹ̀rọ alágbára kankan nínú ẹ̀kọ́ yìí",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà ilé-ìkàwé fún ojú-òpó ìjọba àti wíwá iṣẹ́"
    ],
    prerequisites: "Kò sí. \"Ìpìlẹ̀ Ààbò Níbi Iṣẹ́ (OSHA)\" àti \"Ìpìlẹ̀ Iṣẹ́ Awakọ̀ Forklift\" jẹ́ ẹ̀kọ́ tó dára láti ṣe tẹ̀lé."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àkọsílẹ̀ ìpolówó iṣẹ́ ilé ìkẹ́rùsí", action: "dá àwọn iṣẹ́ mọ̀, ohun tí ọ̀kọ̀ọ̀kan ń ṣe àti àwọn ìwé-ẹ̀rí tí ó ń ràn ọ́ lọ́wọ́ láti rí iṣẹ́", standard: "kí o sì dárúkọ ó kéré tán iṣẹ́ mẹ́rin àti ìwé-ẹ̀rí gidi kan pẹ̀lú ẹni tí ó ń fún un" },
    { id: "O2", condition: "Tí a bá fún ọ ní pick list pẹ̀lú SKU àti kóòdù ibi", action: "wá ibi ọjà kọ̀ọ̀kan kí o sì to àwọn ọjà náà ní ọ̀nà ìrìn", standard: "kí o sì ka gbogbo kóòdù ibi tọ̀nà" },
    { id: "O3", condition: "Tí a bá fún ọ ní ẹrù àṣeṣe àti packing list rẹ̀", action: "gba ẹrù náà wọlé kí o sì kọ àìtó, àṣejù tàbí ìbàjẹ́ èyíkéyìí sílẹ̀", standard: "kí gbogbo iye àti àkọsílẹ̀ sì tọ̀nà" },
    { id: "O4", condition: "Tí a bá fún ọ ní páálí pẹ̀lú ìwọ̀n wọn", action: "ṣètò ẹrù pallet tí kò léwu, pẹ̀lú ẹrù wúwo ní ìsàlẹ̀ àti láàárín òdiwọ̀n ìwọ̀n", standard: "kí o sì tẹ̀lé gbogbo òfin inú àkọsílẹ̀ àyẹ̀wò pallet" },
    { id: "O5", condition: "Tí a bá fún ọ ní iṣẹ́ tàbí ewu kan ní ilé ìkẹ́rùsí", action: "yan ọ̀nà tí kò léwu láti gbé e sókè, gbé e lọ tàbí ròyìn rẹ̀ nígbà tí o ń bá ìyára iṣẹ́ lọ", standard: "kí o sì gba ó kéré tán 4 nínú ipò 5 tọ̀nà" }
  ],
  chapters: [
    {
      name: "Orí 1: Bí ilé ìkẹ́rùsí ṣe ń ṣiṣẹ́",
      lessons: [
        {
          title: "Àwọn iṣẹ́ ilé ìkẹ́rùsí àti ìwé-ẹ̀rí tí ó ń ṣèrànwọ́",
          objectives: ["O1"],
          minutes: 5,
          goal: "Dá àwọn iṣẹ́ pàtàkì ní ilé ìkẹ́rùsí mọ̀, àti ìwé-ẹ̀rí kan tí ó lè ràn ọ́ lọ́wọ́ láti rí iṣẹ́.",
          text: [
            "Àwọn iṣẹ́ ìbẹ̀rẹ̀ tí ó wọ́pọ̀: material handler tàbí warehouse associate (ẹni tí ń gbé ọjà), picker àti packer (ẹni tí ń kó ọjà fún oníbàárà àti ẹni tí ń dì í), stocker tàbí order filler, shipping and receiving clerk (ẹni tí ń ṣàyẹ̀wò ọjà tí ń wọlé àti tí ń jáde), inventory clerk (ẹni tí ń ka ọjà tí ó sì ń tún àkọsílẹ̀ ṣe) àti forklift operator. Pẹ̀lú ìrírí, o lè di lead, supervisor tàbí inventory tàbí logistics coordinator.",
            "Ọ̀pọ̀ iṣẹ́ ìbẹ̀rẹ̀ kò nílò dígírì. Àwọn ènìyàn sábà máa ń kọ́ ọ lẹ́nu iṣẹ́, nígbà púpọ̀ láàárín oṣù kan tàbí kí ó dín, wọ́n sì ń kọ́ àwọn òfin ààbò tí ó dá lórí ìlànà OSHA. Àwọn agbanisíṣẹ́ ń wá ẹni tí ó ń dé lásìkò, tí ó ń ka nǹkan pẹ̀lú ìṣọ́ra, tí ó sì ń ṣiṣẹ́ láìléwu.",
            "Ìwé-ẹ̀rí lè mú ọ yàtọ̀ sí àwọn yòókù. Manufacturing Skill Standards Council (MSSC) ń fúnni ní Certified Logistics Associate (CLA) àti Certified Logistics Technician (CLT); o gbọ́dọ̀ yege CLA kí o tó ṣe CLT. Kíláàsì Outreach wákàtí 10 ti OSHA ń fún ọ ní káàdì ìparí; kò pọn dandan, OSHA sì sọ pé kì í ṣe ìwé-ẹ̀rí (certification). Wíwa forklift máa ń nílò ìdálẹ́kọ̀ọ́ àti àyẹ̀wò ti agbanisíṣẹ́ fúnra rẹ̀ nígbà gbogbo.",
            "Owó oṣù àti iṣẹ́ tí ó wà yàtọ̀ láti ibì kan sí ibòmíràn. Wo Occupational Outlook Handbook ti ìjọba ní bls.gov fún owó oṣù àti ìrètí iṣẹ́, kí o sì wo àwọn ìpolówó iṣẹ́ gidi nítòsí rẹ."
          ],
          words: [["Logistics", "ṣíṣètò àti gbígbé ọjà láti ibi tí a ti ṣe é dé ibi tí a ti nílò rẹ̀."], ["Distribution center", "ilé ìkẹ́rùsí ńlá tí ó ń fi ọjà ránṣẹ́ sí àwọn ilé ìtajà tàbí oníbàárà."], ["Ìwé-ẹ̀rí (credential)", "sàtífíkéètì tàbí káàdì tí ó fi hàn pé o yege ìdánwò tàbí o parí ìdálẹ́kọ̀ọ́."], ["MSSC", "Manufacturing Skill Standards Council, àjọ orílẹ̀-èdè (US) tí ó ń fúnni ní ìwé-ẹ̀rí CLA àti CLT."]],
          slides: [
            { title: "Àwọn iṣẹ́ ìbẹ̀rẹ̀", bullets: ["Material handler, picker, packer, stocker", "Shipping and receiving clerk, inventory clerk", "Forklift operator (pẹ̀lú ìdálẹ́kọ̀ọ́ agbanisíṣẹ́)"] },
            { title: "Bí àwọn ènìyàn ṣe ń bẹ̀rẹ̀", bullets: ["Kò sábà nílò dígírì", "Kọ́ ọ lẹ́nu iṣẹ́, nígbà púpọ̀ láàárín oṣù kan tàbí kí ó dín", "Dé lásìkò, ka dáadáa, ṣiṣẹ́ láìléwu"] },
            { title: "Ìwé-ẹ̀rí tí ó ń ṣèrànwọ́", bullets: ["MSSC: CLA kọ́kọ́, lẹ́yìn náà CLT", "Káàdì OSHA wákàtí 10: kò pọn dandan, kì í ṣe ìwé-ẹ̀rí", "Forklift: ìdálẹ́kọ̀ọ́ àti àyẹ̀wò agbanisíṣẹ́"] },
            { title: "Ṣàyẹ̀wò òtítọ́", bullets: ["Owó oṣù àti ìrètí iṣẹ́: Occupational Outlook Handbook ní bls.gov", "Ìpolówó iṣẹ́ gidi nítòsí rẹ"] }
          ],
          sources: [BLS_MOVERS, BLS_CLERKS, MSSC_CLT, OSHA_OUTREACH],
          tryIt: "Wá ìpolówó iṣẹ́ ilé ìkẹ́rùsí mẹ́ta nítòsí rẹ. Fún ọ̀kọ̀ọ̀kan, kọ orúkọ iṣẹ́ náà, àkókò iṣẹ́ (shift), ohun tí iṣẹ́ náà ń ṣe ní ìlà kan, àti ìwé-ẹ̀rí tàbí ọgbọ́n èyíkéyìí tí ó béèrè. Lẹ́yìn náà ṣí ojú-ìwé MSSC CLT kí o sì kọ ẹni tí ó ń fúnni ní CLA àti CLT.",
          youCanNow: "dárúkọ àwọn iṣẹ́ pàtàkì ní ilé ìkẹ́rùsí, ohun tí ọ̀kọ̀ọ̀kan ń ṣe, àti àwọn ìwé-ẹ̀rí tí ó lè ràn ọ́ lọ́wọ́ láti rí iṣẹ́.",
          quickCheck: [
            { objective: "O1", q: "Iṣẹ́ wo ló ń fi ọjà tí ń wọlé àti tí ń jáde wé ìwé rẹ̀?", options: ["Shipping and receiving clerk", "Packer", "Mẹkáníìkì forklift", "Olùṣọ́ (security guard)"], answer: 0, why: "Shipping and receiving clerk ló ń tọpa ẹrù tí ń wọlé àti tí ń jáde, tí ó sì ń ṣàyẹ̀wò wọn." },
            { objective: "O1", q: "Ta ló ń fúnni ní ìwé-ẹ̀rí Certified Logistics Technician (CLT)?", options: ["OSHA", "IRS", "Manufacturing Skill Standards Council (MSSC)", "Ilé-iṣẹ́ agbaṣẹ́ṣe (staffing agency) èyíkéyìí"], answer: 2, why: "CLT, àti CLA tí ó ń ṣáájú rẹ̀, jẹ́ ìwé-ẹ̀rí MSSC." }
          ]
        },
        {
          title: "Ìrìn ọjà àti kóòdù ibi",
          objectives: ["O2"],
          minutes: 5,
          goal: "Wá ọjà kan pẹ̀lú SKU àti kóòdù ibi rẹ̀, kí o sì to àwọn ọjà tí o máa kó ní ọ̀nà ìrìn.",
          text: [
            "Ọjà máa ń lọ nínú ilé ìkẹ́rùsí ní ètò kan náà lójoojúmọ́. Receiving (gbígba): ọjà dé, a sì ṣàyẹ̀wò rẹ̀. Putaway (kíkó sí ààyè): a kó o sí ibi tí a yàn fún un. Storage (ìpamọ́). Picking (kíkó jáde): àwọn òṣìṣẹ́ ń mú ọjà fún àṣẹ (order) kan. Packing (dídì). Shipping (fífi ránṣẹ́): àwọn àṣẹ ń jáde lórí ọkọ̀ akẹ́rù.",
            "Ọjà kọ̀ọ̀kan ní SKU (stock keeping unit), kóòdù fún ọjà náà gan-an, fún àpẹẹrẹ ṣẹ́ẹ̀tì búlúù ní ìwọ̀n large. Ibi ìpamọ́ kọ̀ọ̀kan ní kóòdù ibi. Ọ̀pọ̀ ilé ìkẹ́rùsí ń lo zone, aisle (ọ̀nà), rack (tàbí bay) àti level (ìpele), nítorí náà A-12-03-B lè túmọ̀ sí zone A, aisle 12, rack 3, level B. Ilé ìkẹ́rùsí rẹ máa kọ́ ọ ní ètò tirẹ̀.",
            "Ọ̀pọ̀ ilé ìkẹ́rùsí ń lo scanner. O máa scan ibi náà àti ọjà náà kí ètò kọ̀mpútà (warehouse management system) lè mọ ohun tí ó gbé. Tí ọjà tí ó wà níbẹ̀ kò bá bá SKU mu, dúró kí o sì sọ fún lead rẹ; má ṣe mú nǹkan tí ó kàn jọ ọ́.",
            "Láti dín ìrìn kù, kó ọjà ní ọ̀nà ìrìn: to àkọsílẹ̀ rẹ ní aisle, lẹ́yìn náà ní rack, kí o lè rin aisle kọ̀ọ̀kan lẹ́ẹ̀kan ṣoṣo."
          ],
          steps: ["Ka SKU àti kóòdù ibi fún ìlà kọ̀ọ̀kan.", "Pín kóòdù ibi sí apá rẹ̀: zone, aisle, rack, level.", "To àkọsílẹ̀ náà ní zone, lẹ́yìn náà aisle, lẹ́yìn náà rack.", "Ní ibi kọ̀ọ̀kan, scan tàbí ṣàyẹ̀wò pé SKU bá a mu kí o tó kó o.", "Tí kò bá bá a mu tàbí ibi náà ṣófo, ròyìn rẹ̀."],
          words: [["SKU", "stock keeping unit: kóòdù fún ọjà kan pàtó."], ["Kóòdù ibi (location code)", "àdírẹ́sì ibi ìpamọ́ kan, bí zone, aisle, rack àti level."], ["Putaway", "gbígbé ọjà tí ó dé lọ sí ibi ìpamọ́ rẹ̀."], ["Picking", "mímú ọjà jáde láti ibi ìpamọ́ láti parí àṣẹ kan."], ["Warehouse management system (WMS)", "ètò kọ̀mpútà tí ó ń tọpa ibi tí ọjà kọ̀ọ̀kan wà."]],
          slides: [
            { title: "Ìrìn ọjà", bullets: ["Receiving, putaway, storage", "Picking, packing, shipping"] },
            { title: "Àwọn kóòdù tí o ń lò", bullets: ["SKU: ọjà náà gan-an", "Ibi: zone, aisle, rack, level", "Àpẹẹrẹ: A-12-03-B"] },
            { title: "Kó o tọ̀nà, kó o lọ́gbọ́n", bullets: ["Scan ibi náà àti ọjà náà", "Ọjà tí kò tọ́ tàbí ibi tí ó ṣófo? Ròyìn rẹ̀", "To ní aisle kí o lè rin aisle kọ̀ọ̀kan lẹ́ẹ̀kan"] }
          ],
          sources: [BLS_CLERKS],
          tryIt: "Àṣeṣe nìkan. To pick list yìí ní ọ̀nà ìrìn (zone, aisle, rack, level): B-04-02-A, A-12-03-B, A-03-01-C, B-01-05-A, A-12-01-A. Lẹ́yìn náà kọ ohun tí apá kọ̀ọ̀kan A-12-03-B túmọ̀ sí. Àyẹ̀wò: ètò náà bẹ̀rẹ̀ pẹ̀lú A-03-01-C, A-12-01-A, A-12-03-B.",
          youCanNow: "ka kóòdù ibi, wá ọjà pẹ̀lú SKU rẹ̀, kí o sì to pick list ní ọ̀nà ìrìn.",
          quickCheck: [
            { objective: "O2", q: "Kí ni SKU?", options: ["Irú forklift kan", "Kóòdù fún ọjà kan pàtó", "Ọkọ̀ akẹ́rù", "Òfin ààbò kan"], answer: 1, why: "Stock keeping unit jẹ́ kóòdù fún ọjà kan pàtó." },
            { objective: "O2", q: "O dé ibi kan, ọjà tí ó wà níbẹ̀ kò sì bá SKU inú àkọsílẹ̀ rẹ mu. Kí lo máa ṣe?", options: ["Mú nǹkan tí ó kàn jọ ọ́", "Fo ìlà náà kí o má sì sọ nǹkankan", "Mú méjì nínú nǹkan mìíràn", "Dúró kí o sì ròyìn rẹ̀ fún lead rẹ"], answer: 3, why: "A gbọ́dọ̀ ròyìn ohun tí kò bá mu kí àṣẹ náà àti àkọsílẹ̀ lè máa tọ̀nà." }
          ]
        },
        {
          title: "Gbígba ẹrù wọlé àti kíka ọjà",
          objectives: ["O3"],
          minutes: 6,
          goal: "Fi ẹrù tí ó dé wé packing list rẹ̀ kí o sì kọ ìṣòro èyíkéyìí sílẹ̀.",
          text: [
            "Nígbà tí ọkọ̀ akẹ́rù bá dé, àwọn òṣìṣẹ́ receiving máa ń ṣàyẹ̀wò pé ohun tí ó dé ni ohun tí a pàṣẹ. O máa fi ọjà náà wé packing list (àti purchase order, tí o bá ní in). Awakọ̀ náà tún máa fún ọ ní bill of lading, ìwé ẹrù tí o máa fọwọ́ sí.",
            "Ka gbogbo ìlà. Ṣàyẹ̀wò SKU, iye àti ipò rẹ̀. Tí páálí kan bá fọ́, tutù tàbí ṣí sílẹ̀, ya fọ́tò tí ibi iṣẹ́ rẹ bá gbà á láyè, kí o sì kọ ọ́ sílẹ̀. Tí ohun tí ó dé bá kéré sí ohun tí ó wà nínú àkọsílẹ̀, àìtó (shortage) ni; tí ó bá pọ̀ jù, àṣejù (overage) ni. Kọ gbogbo ìṣòro sórí ìwé náà kí o tó fọwọ́ sí i, bí ìlànà ibi iṣẹ́ rẹ ṣe sọ. Fífọwọ́ sí ìwé láìkọ ìṣòro kankan lè túmọ̀ sí pé o gbà pé gbogbo nǹkan dára.",
            "Kíka ọjà (inventory count) ń ṣiṣẹ́ ní ọ̀nà kan náà. Cycle count ni kíka ibi díẹ̀ lójoojúmọ́ dípò gbogbo ilé ìkẹ́rùsí lẹ́ẹ̀kan náà. Tí iye tí o kà kò bá bá ti ètò kọ̀mpútà mu, tún un kà, lẹ́yìn náà ròyìn rẹ̀. Ìṣọ́ra ṣe pàtàkì ju ìyára lọ níbí."
          ],
          steps: ["Mú packing list (àti purchase order tí o bá ní in).", "Ka ìlà kọ̀ọ̀kan: SKU tó tọ́, iye tó tọ́.", "Ṣàyẹ̀wò ipò páálí kọ̀ọ̀kan.", "Kọ àìtó, àṣejù tàbí ìbàjẹ́ kọ̀ọ̀kan sórí ìwé náà.", "Tẹ̀lé ìlànà ibi iṣẹ́ rẹ kí o tó fọwọ́ sí bill of lading.", "Ròyìn ìṣòro fún lead rẹ."],
          words: [["Packing list", "àkọsílẹ̀ ohun tí ó wà nínú ẹrù kan."], ["Purchase order (PO)", "àṣẹ olùrà tí ó fi ohun tí a rà àti iye rẹ̀ hàn."], ["Bill of lading (BOL)", "ìwé ẹrù tí ilé-iṣẹ́ akẹ́rù ń fúnni; fífọwọ́ sí i túmọ̀ sí pé o ti gba ọjà náà."], ["Àìtó (shortage)", "ọjà tí ó dé kéré sí ohun tí ìwé sọ."], ["Àṣejù (overage)", "ọjà tí ó dé pọ̀ ju ohun tí ìwé sọ."], ["Cycle count", "kíka ibi díẹ̀ lẹ́ẹ̀kan láti jẹ́ kí àkọsílẹ̀ máa tọ̀nà."]],
          slides: [
            { title: "Àyẹ̀wò gbígba ẹrù", bullets: ["SKU tó tọ́", "Iye tó tọ́", "Ipò tó dára"] },
            { title: "Ìṣòro tí o gbọ́dọ̀ kọ sílẹ̀", bullets: ["Àìtó: kò tó ohun tí a kọ", "Àṣejù: ó ju ohun tí a kọ", "Ìbàjẹ́: ó fọ́, ó tutù tàbí ó ṣí sílẹ̀"] },
            { title: "Kí o tó fọwọ́ sí i", bullets: ["Kọ gbogbo ìṣòro sílẹ̀", "Tẹ̀lé ìlànà ibi iṣẹ́ rẹ", "Ìfọwọ́sí láìsí àkọsílẹ̀ lè túmọ̀ sí pé gbogbo nǹkan dára"] },
            { title: "Kíka ọjà", bullets: ["Cycle count: ibi díẹ̀ lójoojúmọ́", "Kò bá a mu? Tún un kà, lẹ́yìn náà ròyìn rẹ̀", "Ìṣọ́ra ṣáájú ìyára"] }
          ],
          sources: [BLS_CLERKS],
          tryIt: "Àṣeṣe nìkan. Packing list sọ pé: SKU 1001, case 12; SKU 1002, case 8; SKU 1003, case 20. O kà 12 nínú 1001, 6 nínú 1002, àti 21 nínú 1003, case kan nínú 1003 sì fọ́. Kọ ìròyìn gbígba ẹrù: ìlà kọ̀ọ̀kan, ohun tí a retí, ohun tí ó dé, àti ìṣòro náà. Ìdáhùn: 1002 kò tó ní 2; 1003 jù ní 1, 1 sì bàjẹ́.",
          youCanNow: "fi ẹrù tí ó dé wé packing list rẹ̀ kí o sì kọ àìtó, àṣejù àti ìbàjẹ́ sílẹ̀.",
          quickCheck: [
            { objective: "O3", q: "Packing list sọ pé case 10, ṣùgbọ́n 8 ló dé. Kí ni a ń pe èyí?", options: ["Àṣejù (overage)", "Àìtó (shortage)", "Cycle count", "Putaway"], answer: 1, why: "Ọjà tí kò tó ohun tí ìwé kọ jẹ́ àìtó." },
            { objective: "O3", q: "Páálí kan nínú ẹrù tí ó dé tutù ó sì ya. Kí lo máa ṣe?", options: ["Kọ ìbàjẹ́ náà sórí ìwé kí o tó fọwọ́ sí i, bí ìlànà ibi iṣẹ́ rẹ ṣe sọ", "Fọwọ́ sí ìwé náà kí o má sì sọ nǹkankan", "Ju páálí náà nù", "Fi í pamọ́ sí ẹ̀yìn"], answer: 0, why: "A gbọ́dọ̀ kọ ìbàjẹ́ sílẹ̀ kí a lè béèrè owó rẹ̀, kí wọ́n má sì dá ilé ìkẹ́rùsí lẹ́bi." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Bí ilé ìkẹ́rùsí ṣe ń ṣiṣẹ́",
        questions: [
          { objective: "O1", q: "Kí lo nílò kí o tó wa forklift ní ilé ìkẹ́rùsí?", options: ["Káàdì orí ayélujára nìkan", "Kò sí nǹkankan", "Ìwé àṣẹ ìwakọ̀ mọ́tò", "Ìdálẹ́kọ̀ọ́ àti àyẹ̀wò ti agbanisíṣẹ́ fúnra rẹ̀"], answer: 3, why: "OSHA fi dandan lé e pé agbanisíṣẹ́ gbọ́dọ̀ kọ́ gbogbo awakọ̀ forklift kí ó sì ṣàyẹ̀wò wọn." },
          { objective: "O1", q: "Kí ni òtítọ́ nípa káàdì OSHA wákàtí 10?", options: ["Ìwé àṣẹ forklift ni", "Ìdálẹ́kọ̀ọ́ tí kò pọn dandan ni, kì í sì í ṣe ìwé-ẹ̀rí", "Òfin fi dandan lé e fún gbogbo iṣẹ́", "MSSC ló ń fúnni"], answer: 1, why: "OSHA sọ pé ìdálẹ́kọ̀ọ́ Outreach kò pọn dandan, kì í sì í ṣe ìwé-ẹ̀rí." },
          { objective: "O2", q: "Nínú kóòdù A-12-03-B, kí ni 12 ṣeé ṣe jù kí ó jẹ́?", options: ["Aisle", "Iye owó", "SKU", "Ìwọ̀n"], answer: 0, why: "Nínú ètò zone-aisle-rack-level, apá kejì ni aisle." },
          { objective: "O2", q: "Ìgbésẹ̀ wo ló ń tẹ̀lé receiving tààrà?", options: ["Shipping", "Packing", "Putaway", "Picking"], answer: 2, why: "Lẹ́yìn tí a bá ti gba ọjà wọlé, a máa kó o sí ibi ìpamọ́ rẹ̀." },
          { objective: "O3", q: "Cycle count rẹ fi 14 hàn, ṣùgbọ́n ètò kọ̀mpútà sọ pé 16. Kí lo máa kọ́kọ́ ṣe?", options: ["Yí ètò kọ̀mpútà padà sí 14", "Kọ 16 kí ó lè bá a mu", "Fojú fò ó", "Tún un kà, lẹ́yìn náà ròyìn rẹ̀ tí kò bá ṣì bá a mu"], answer: 3, why: "Kọ́kọ́ tún un kà; tí kò bá ṣì bá a mu, ròyìn rẹ̀ kí a lè ṣàyẹ̀wò rẹ̀." }
        ]
      }
    },
    {
      name: "Orí 2: Ṣíṣiṣẹ́ láìléwu àti rírí iṣẹ́",
      lessons: [
        {
          title: "Gbígbé ẹrù sókè láìléwu àti ewu ilé ìkẹ́rùsí",
          objectives: ["O5"],
          minutes: 5,
          goal: "Yan ọ̀nà tí kò léwu láti gbé ẹrù sókè, gbé e lọ, àti ròyìn ewu ní ilé ìkẹ́rùsí.",
          text: [
            "OSHA dárúkọ àwọn ewu pàtàkì ní ilé ìkẹ́rùsí: forklift àti àwọn ọkọ̀ alágbára míì, gbígbé ẹrù sókè àti ìpalára láti iṣẹ́ kan náà tí a ń tún ṣe, gbígbé ọjà, kẹ́míkà, yíyọ̀, kíkọsẹ̀ àti ṣíṣubú, àti robot àti conveyor (ìgbànú tí ń gbé ẹrù). Ìpalára tí ó wọ́pọ̀ jù ni iṣan tí ó fà láti gbígbé ẹrù sókè àti kí forklift kọlu ènìyàn.",
            "Gbé e sókè lọ́gbọ́n. Ṣètò bí o ṣe máa gbé e àti ọ̀nà tí o máa gbà. Sún mọ́ ẹrù náà, tẹ orúnkún rẹ, jẹ́ kí ẹ̀yìn rẹ tọ́, kí ẹrù náà sì súnmọ́ ara rẹ, má sì ṣe lọ́ ara rẹ: fi ẹsẹ̀ rẹ yípo. Lo kẹ̀kẹ́ ẹrù (cart), hand truck tàbí pallet jack nígbà tí o bá lè ṣe é. Fún ẹrù wúwo tàbí èyí tí ó ṣòro láti gbé, béèrè fún gbígbé pẹ̀lú ẹgbẹ́ (team lift).",
            "Ní àyíká ẹ̀rọ: dúró ní ọ̀nà ìrìn ẹsẹ̀, wo awakọ̀ forklift lójú, má sì rìn lábẹ́ forks tí wọ́n gbé sókè láéláé. Jẹ́ kí ọwọ́ rẹ jìnnà sí conveyor tí ń yí. Nígbà ooru, máa mu omi lọ́pọ̀ ìgbà, gba ìsinmi rẹ, kí o sì sọ fún ẹnìkan tí o bá ní òòyì tàbí ara rẹ kò yá.",
            "Ìyára ṣe pàtàkì, ṣùgbọ́n má ṣe gba ọ̀nà àbùjá tí ó léwu láéláé. Ròyìn ewu bí nǹkan tí ó dà sílẹ̀, rack tí ó bàjẹ́ tàbí ọ̀nà àbájáde tí a dí fún lead rẹ lẹ́sẹ̀kẹsẹ̀."
          ],
          steps: ["Ṣètò: báwo ló ṣe wúwo tó, ibo ló ń lọ, ṣé ọ̀nà náà mọ́?", "Sún mọ́ ọn, tẹ orúnkún rẹ, ẹ̀yìn tọ́.", "Fi ẹsẹ̀ rẹ gbé e, ẹrù súnmọ́ ara rẹ.", "Fi ẹsẹ̀ rẹ yípo; má ṣe lọ́ ara rẹ.", "Lo cart tàbí pallet jack, tàbí béèrè fún team lift, fún ẹrù wúwo.", "Ròyìn ewu lẹ́sẹ̀kẹsẹ̀."],
          words: [["Ergonomics", "mímú iṣẹ́ bá ara mu láti dènà ìrora àti ìpalára."], ["Pallet jack", "ẹ̀rọ tí a fi ọwọ́ tì tàbí tí ó ní agbára, tí ó ń gbé pallet sókè tí ó sì ń gbé e lọ fún ọ̀nà kúkúrú."], ["Team lift", "ènìyàn méjì tàbí jù bẹ́ẹ̀ lọ tí wọ́n jọ ń gbé ẹrù wúwo tàbí èyí tí ó ṣòro láti gbé."], ["Àìsàn ooru (heat illness)", "àìsàn láti ṣíṣiṣẹ́ nínú ooru, bí àárẹ̀ ooru (heat exhaustion) tàbí heat stroke."]],
          slides: [
            { title: "Àwọn ewu pàtàkì ní ilé ìkẹ́rùsí", bullets: ["Forklift àti ọkọ̀ alágbára", "Gbígbé ẹrù sókè àti iṣẹ́ kan náà léraléra", "Yíyọ̀, kíkọsẹ̀, ṣíṣubú, conveyor, ooru"] },
            { title: "Gbé e sókè lọ́gbọ́n", bullets: ["Ṣètò, sún mọ́ ọn, tẹ orúnkún rẹ", "Ẹrù súnmọ́ ara; fi ẹsẹ̀ yípo", "Cart, pallet jack tàbí team lift fún ẹrù wúwo"] },
            { title: "Ní àyíká ẹ̀rọ", bullets: ["Dúró ní ọ̀nà ìrìn; wo awakọ̀ lójú", "Má ṣe wà lábẹ́ forks tí a gbé sókè láéláé", "Ọwọ́ jìnnà sí conveyor tí ń yí"] },
            { title: "Ìyára tí kò léwu", bullets: ["Omi àti ìsinmi nígbà ooru", "Kò sí ọ̀nà àbùjá tí ó léwu", "Ròyìn ewu lẹ́sẹ̀kẹsẹ̀"] }
          ],
          sources: [OSHA_WAREHOUSE, OSHA_WH_HAZARDS, OSHA_HEAT],
          tryIt: "Ṣe àṣeṣe pẹ̀lú páálí tí ó ṣófo tàbí tí ó fúyẹ́ nílé. Gbé e sókè pẹ̀lú gbogbo ìgbésẹ̀, kí o sì sọ ìgbésẹ̀ kọ̀ọ̀kan sókè. Lẹ́yìn náà kọ ewu mẹ́ta tí o lè rí ní ilé ìkẹ́rùsí àti ohun tí o máa ṣe nípa ọ̀kọ̀ọ̀kan.",
          youCanNow: "gbé ọjà sókè kí o sì gbé e lọ láìléwu, kí o sì ròyìn ewu ilé ìkẹ́rùsí lọ́nà tó tọ́.",
          quickCheck: [
            { objective: "O5", q: "O nílò láti yípo nígbà tí o gbé páálí kan dání. Báwo lo ṣe máa ṣe é?", options: ["Lọ́ ìbàdí rẹ", "Fi ẹsẹ̀ rẹ yípo", "Ju páálí náà", "Kọ́kọ́ gbé e kọjá orí rẹ"], answer: 1, why: "Fífi ẹsẹ̀ yípo ń dáàbò bo ẹ̀yìn rẹ; lílọ́ ara nígbà tí o gbé ẹrù ń fa ìpalára." },
            { objective: "O5", q: "O rí forklift tí ń bọ̀ ní aisle rẹ. Kí ni kò léwu jù?", options: ["Rìn kíákíá lẹ́yìn rẹ̀", "Bọ́ sí abẹ́ forks tí a gbé sókè", "Dúró ní ọ̀nà ìrìn kí o sì wo awakọ̀ lójú", "Juwọ́ kí o sì máa rìn ní ọ̀nà rẹ̀"], answer: 2, why: "Ọ̀nà ìrìn àti wíwo ojú ń ràn awakọ̀ lọ́wọ́ láti rí ọ, ó sì ń pa ọ́ mọ́ kúrò ní ọ̀nà rẹ̀." }
          ]
        },
        {
          title: "Kíkó ẹrù pallet tí kò léwu",
          objectives: ["O4"],
          minutes: 6,
          goal: "Ṣètò ẹrù pallet pẹ̀lú ẹrù wúwo ní ìsàlẹ̀, ìpele tí ó dọ́gba, àti àpapọ̀ ìwọ̀n láàárín òdiwọ̀n.",
          text: [
            "Pallet tí ó dára máa ń dé ní odidi, ó sì ń pa àwọn ènìyàn mọ́. Kọ́kọ́ ṣàyẹ̀wò pallet náà fúnra rẹ̀: kò gbọdọ̀ ní pákó tí ó ṣẹ́ tàbí ìṣó tí ó yọ jáde.",
            "Páálí wúwo ní ìsàlẹ̀, àwọn tí ó fúyẹ́ lókè. Ṣe ìpele tí ó dọ́gba, tí ó tẹ́jú. Jẹ́ kí páálí wà nínú etí pallet náà (kí wọ́n má yọ síta). Yí ìpele kejì kọ̀ọ̀kan padà kí àwọn páálí lè kọjá ara wọn (èyí ni a ń pè ní interlocking); ó ń ràn ìtòjọ náà lọ́wọ́ láti dúró papọ̀. Má ṣe kọjá òdiwọ̀n gíga àti ìwọ̀n ibi iṣẹ́ rẹ.",
            "Ṣe àròpọ̀ ìwọ̀n. Àpẹẹrẹ (àṣeṣe nìkan): páálí 20 tí ọ̀kọ̀ọ̀kan jẹ́ 25 lb jẹ́ 500 lb, pẹ̀lú pallet tí ó tó nǹkan bí 40 lb ó di 540 lb. Ṣàyẹ̀wò pé ó wà lábẹ́ òdiwọ̀n pallet náà, rack náà àti ẹ̀rọ náà.",
            "Fi stretch wrap dì ẹrù náà, kí ó le dáadáa láti ìsàlẹ̀ dé òkè, kí o sì dì í mọ́ pallet náà. Jẹ́ kí àwọn label kọjú síta níbi tí a ti lè scan wọn. Kí a tó kó ẹrù sínú ọkọ̀ akẹ́rù, a máa ń de bíréèkì trailer náà, a sì ń fi chock dí táyà rẹ̀; a sì ń pín ẹrù dọ́gba nínú trailer náà."
          ],
          steps: ["Ṣàyẹ̀wò pallet: kò sí pákó tí ó ṣẹ́ tàbí ìṣó.", "Páálí tí ó wúwo jù ní ìpele ìsàlẹ̀.", "Ìpele tí ó dọ́gba, nínú etí, tí a ṣe interlock.", "Ṣe àròpọ̀ ìwọ̀n kí o sì ṣàyẹ̀wò òdiwọ̀n.", "Fi stretch wrap dì í dáadáa, láti ìsàlẹ̀ dé òkè, pẹ̀lú pallet náà.", "Label kọjú síta."],
          words: [["Pallet", "ìpìlẹ̀ pẹrẹsẹ onígi tàbí oníke tí a ń to ọjà lé lórí kí a lè gbé wọn papọ̀."], ["Interlocking", "yíyí ìpele páálí kọ̀ọ̀kan padà kí ó lè kọjá ìpele tí ó wà nísàlẹ̀ rẹ̀."], ["Overhang", "páálí tí ó yọ kọjá etí pallet."], ["Stretch wrap", "ọ̀rá ike tín-ínrín tí a fi ń dì ẹrù kí ó lè dúró papọ̀."]],
          slides: [
            { title: "Bẹ̀rẹ̀ dáadáa", bullets: ["Ṣàyẹ̀wò pallet fún pákó tí ó ṣẹ́ àti ìṣó", "Páálí tí ó wúwo jù ní ìsàlẹ̀"] },
            { title: "To o dáadáa", bullets: ["Ìpele tí ó dọ́gba, tí ó tẹ́jú", "Kò sí overhang", "Ṣe interlock àwọn ìpele"] },
            { title: "Ṣàyẹ̀wò ìwọ̀n", bullets: ["Páálí x ìwọ̀n, pẹ̀lú pallet", "Lábẹ́ òdiwọ̀n pallet, rack àti ẹ̀rọ"] },
            { title: "Parí rẹ̀ dáadáa", bullets: ["Dì í dáadáa, láti ìsàlẹ̀ dé òkè", "Label kọjú síta"] }
          ],
          sources: [OSHA_WH_HAZARDS, OSHA_178],
          tryIt: "Àṣeṣe nìkan. O ní páálí 8 tí ọ̀kọ̀ọ̀kan jẹ́ 50 lb, páálí 12 tí ọ̀kọ̀ọ̀kan jẹ́ 20 lb àti páálí 6 tí ọ̀kọ̀ọ̀kan jẹ́ 10 lb. Ya pallet náà láti ẹ̀gbẹ́: àwọn páálí wo ló ń lọ sí ìpele wo. Ṣe àròpọ̀ ìwọ̀n pẹ̀lú pallet 40 lb kí o sì ṣàyẹ̀wò pé ó wà lábẹ́ òdiwọ̀n 1,000 lb. Ìdáhùn: 400 + 240 + 60 + 40 = 740 lb.",
          youCanNow: "ṣètò ẹrù pallet tí kò léwu pẹ̀lú ẹrù wúwo ní ìsàlẹ̀, ìpele tí ó dọ́gba àti àpapọ̀ ìwọ̀n láàárín òdiwọ̀n.",
          quickCheck: [
            { objective: "O4", q: "Ibo ni páálí tí ó wúwo jù ń lọ lórí pallet?", options: ["Ní ìpele òkè", "Kí ó yọ kọjá etí", "Ní ìpele àárín nìkan", "Ní ìpele ìsàlẹ̀"], answer: 3, why: "Ẹrù wúwo ní ìsàlẹ̀ ń mú kí ẹrù náà dúró ṣinṣin, ó sì ń dáàbò bo àwọn páálí tí ó fúyẹ́." },
            { objective: "O4", q: "Àṣeṣe: páálí 30 tí ọ̀kọ̀ọ̀kan jẹ́ 20 lb lórí pallet 40 lb. Kí ni àpapọ̀ ìwọ̀n?", options: ["640 lb", "600 lb", "540 lb", "60 lb"], answer: 0, why: "30 x 20 = 600 lb, pẹ̀lú pallet 40 lb = 640 lb." }
          ]
        },
        {
          title: "Rírí iṣẹ́ àti gígòkè",
          objectives: ["O1", "O5"],
          minutes: 5,
          goal: "Kọ ètò láti rí iṣẹ́ pẹ̀lú àwọn agbanisíṣẹ́, ìwé-ẹ̀rí tí o fẹ́ lépa àti ìlà résumé tí ó jẹ́ òtítọ́.",
          text: [
            "Ibi tí o lè wò: ojú-òpó iṣẹ́ àwọn ilé ìtajà ńlá àti ilé-iṣẹ́ akẹ́rù, àwọn ojú-òpó iṣẹ́ àdúgbò, àwọn staffing agency àti American Job Center àdúgbò rẹ, tí ó tún lè ṣèrànwọ́ láti san owó ìdálẹ́kọ̀ọ́ àti ìwé-ẹ̀rí nígbà míì. Ọ̀pọ̀ ilé ìkẹ́rùsí ń gba àwọn tí ó ní àkọsílẹ̀ ẹ̀ṣẹ̀ síṣẹ́; béèrè lọ́wọ́ job center nípa àwọn agbanisíṣẹ́ second-chance.",
            "Ohun tí àwọn agbanisíṣẹ́ ń fẹ́: dídé lásìkò, kíka pẹ̀lú ìṣọ́ra, àṣà ààbò àti ìyára tí ó dúró ṣinṣin. Àwọn ilé ìkẹ́rùsí sábà máa ń wọn rate rẹ, bí iye ọjà tí o kó ní wákàtí kan (picks per hour). Dé ibẹ̀ nípa ṣíṣiṣẹ́ lọ́gbọ́n (ọ̀nà ìrìn, scan pẹ̀lú ìṣọ́ra), kì í ṣe nípa fífo ààbò láéláé.",
            "Jẹ́ kí résumé rẹ bá iṣẹ́ náà mu. Lo ọ̀rọ̀ ìṣe àti àpẹẹrẹ gidi: \"Counted and checked deliveries against packing lists\" tàbí \"Completed warehouse safety and logistics training (Koach Learn), 2026\". Àwọn ológun àtijọ́: iṣẹ́ ìpèsè ẹrù (supply), motor pool àti logistics ka, nítorí náà kọ wọ́n ní ọ̀rọ̀ ojoojúmọ́.",
            "Ṣètò ìdàgbàsókè rẹ. Ìwé-ẹ̀rí bí MSSC CLA, lẹ́yìn náà CLT, àti ìdálẹ́kọ̀ọ́ forklift ti agbanisíṣẹ́ lè mú ọ dé iṣẹ́ tí ó ń sanwó jù bí lead, inventory control tàbí logistics coordinator."
          ],
          steps: ["Kọ agbanisíṣẹ́ tàbí ètò mẹ́ta nítòsí rẹ, pẹ̀lú American Job Center rẹ.", "Yan ìwé-ẹ̀rí tí o fẹ́ lépa (fún àpẹẹrẹ MSSC CLA) àti ọjọ́ tí o fẹ́ parí rẹ̀.", "Kọ ìlà résumé méjì tí ó jẹ́ òtítọ́ láti inú ẹ̀kọ́ yìí tàbí iṣẹ́ àtẹ̀yìnwá.", "Ṣe àṣeṣe ìdáhùn ìṣẹ́jú-àáyá 30: \"Báwo lo ṣe ń ṣiṣẹ́ tọ̀nà láìléwu nígbà tí iṣẹ́ bá yára?\""],
          words: [["Rate", "iye iṣẹ́ tí o ṣe ní àkókò kan, bí iye ọjà tí o kó ní wákàtí kan."], ["American Job Center", "ọ́fíìsì ìjọba ọ̀fẹ́ (ní US) tí ó ń ran àwọn ènìyàn lọ́wọ́ láti rí iṣẹ́ àti ìdálẹ́kọ̀ọ́."], ["Agbanisíṣẹ́ second-chance", "ilé-iṣẹ́ tí ó ń gba àwọn tí ó ní àkọsílẹ̀ ẹ̀ṣẹ̀ síṣẹ́."]],
          slides: [
            { title: "Ibi tí o lè wò", bullets: ["Ojú-òpó iṣẹ́ ilé-iṣẹ́ àti job board", "Staffing agency", "American Job Center àdúgbò rẹ"] },
            { title: "Ohun tí àwọn agbanisíṣẹ́ ń fẹ́", bullets: ["Dé lásìkò, ṣiṣẹ́ tọ̀nà, láìléwu", "Dé rate náà nípa ṣíṣiṣẹ́ lọ́gbọ́n", "Má ṣe fo ààbò láéláé"] },
            { title: "Résumé rẹ", bullets: ["Ọ̀rọ̀ ìṣe àti àpẹẹrẹ gidi", "Òtítọ́ nípa ìdálẹ́kọ̀ọ́ àti ìwé-ẹ̀rí", "Ológun àtijọ́: ṣàlàyé iṣẹ́ supply àti logistics"] },
            { title: "Gòkè", bullets: ["MSSC CLA, lẹ́yìn náà CLT", "Ìdálẹ́kọ̀ọ́ forklift ti agbanisíṣẹ́", "Lead, inventory control, coordinator"] }
          ],
          sources: [AJC, MSSC_CLT, BLS_MOVERS],
          tryIt: "Kọ ètò rẹ láti rí iṣẹ́: agbanisíṣẹ́ tàbí ètò mẹ́ta nítòsí rẹ, ìwé-ẹ̀rí tí o fẹ́ lépa àti ọjọ́ rẹ̀, ìlà résumé méjì tí ó jẹ́ òtítọ́, àti ìdáhùn ìṣẹ́jú-àáyá 30 rẹ sí \"Báwo lo ṣe ń ṣiṣẹ́ tọ̀nà láìléwu nígbà tí iṣẹ́ bá yára?\" Ka ìdáhùn náà sókè.",
          youCanNow: "kọ ètò láti rí iṣẹ́ ní ilé ìkẹ́rùsí, pẹ̀lú ìwé-ẹ̀rí tí o fẹ́ lépa àti ìlà résumé tí ó jẹ́ òtítọ́.",
          quickCheck: [
            { objective: "O5", q: "O wà lẹ́yìn rate picks-per-hour rẹ. Kí ni ọ̀nà tó tọ́ láti bá a?", options: ["Fo scan kí o lè yára", "Sáré nínú aisle", "Kó ọjà ní ọ̀nà ìrìn kí o sì scan pẹ̀lú ìṣọ́ra", "Gun rack dípò lílo àkàbà"], answer: 2, why: "Ṣíṣiṣẹ́ lọ́gbọ́n ń fi àkókò pamọ́; ọ̀nà àbùjá tí ó léwu ń fa ìpalára àti àṣìṣe." },
            { objective: "O1", q: "Ìlà résumé wo ló jẹ́ òtítọ́ tí ó sì lágbára?", options: ["\"MSSC CLT certified\" (kí o tó yege rẹ̀)", "\"Hard worker\"", "\"Forklift certified\" (láìsí àyẹ̀wò agbanisíṣẹ́)", "\"Counted and checked deliveries against packing lists\""], answer: 3, why: "Ó lo ọ̀rọ̀ ìṣe àti iṣẹ́ gidi, kò sì sọ pé o ní nǹkan tí o kò ní." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ṣíṣiṣẹ́ láìléwu àti rírí iṣẹ́",
        questions: [
          { objective: "O5", q: "Páálí kan wúwo jù láti gbé ní ìwọ nìkan. Kí lo máa ṣe?", options: ["Gbé e kíákíá kí ó tó dùn ọ́", "Lo cart tàbí pallet jack, tàbí béèrè fún team lift", "Wọ́ ọ pẹ̀lú ẹ̀yìn tí ó tẹ̀", "Fi í sílẹ̀ nínú aisle"], answer: 1, why: "Lo ẹ̀rọ tàbí team lift fún ẹrù wúwo láti dènà ìpalára ẹ̀yìn." },
          { objective: "O5", q: "O rí nǹkan tí ó dà sílẹ̀ nínú aisle kan. Kí ni ohun tó tọ́ láti ṣe?", options: ["Rìn yí i ká kí o má sì sọ nǹkankan", "Dúró de ẹlòmíràn láti rí i", "Jẹ́ kí àwọn ènìyàn jìnnà sí i kí o sì ròyìn rẹ̀ lẹ́sẹ̀kẹsẹ̀", "Fi páálí bò ó"], answer: 2, why: "Ròyìn ewu lẹ́sẹ̀kẹsẹ̀ kí a lè nù ún kí ẹnìkan tó yọ̀." },
          { objective: "O4", q: "Kí ni interlocking àwọn ìpele lórí pallet ń ṣe?", options: ["Ó ń ran ìtòjọ náà lọ́wọ́ láti dúró papọ̀", "Ó ń mú un wúwo sí i", "Ó ń fi label pamọ́", "Ó ń jẹ́ kí páálí yọ kọjá etí"], answer: 0, why: "Ìpele tí ó kọjá ara wọn ń so ìtòjọ náà pọ̀ kí ó má bàa yapa." },
          { objective: "O4", q: "Pallet wo ló ṣetán láti gbé lọ?", options: ["Páálí tí ó yọ kọjá etí", "Páálí tí ó fúyẹ́ ní ìsàlẹ̀", "Ó dẹ̀, a kò dì í", "Páálí wúwo ní ìsàlẹ̀, ìpele dọ́gba, a dì í, label kọjú síta"], answer: 3, why: "Ó tẹ̀lé gbogbo òfin: wúwo ní ìsàlẹ̀, dọ́gba, a dì í, ó sì ní label." },
          { objective: "O1", q: "Ọ́fíìsì wo ló lè ràn ọ́ lọ́wọ́ láti rí iṣẹ́ ilé ìkẹ́rùsí àti ìdálẹ́kọ̀ọ́ lọ́fẹ̀ẹ́?", options: ["American Job Center àdúgbò rẹ", "Ọ́fíìsì títa tíkẹ́ẹ̀tì", "DMV (ọ́fíìsì ìwé àṣẹ ìwakọ̀)", "Báńkì kan"], answer: 0, why: "American Job Center jẹ́ ọ́fíìsì ìjọba ọ̀fẹ́ fún iṣẹ́ àti ìdálẹ́kọ̀ọ́." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Iṣẹ́ Ilé Ìkẹ́rùsí àti Ìkó Ẹrù Lọ (Logistics)",
    questions: [
      { objective: "O1", q: "Iṣẹ́ wo ló ń parí àṣẹ oníbàárà nípa mímú ọjà kúrò lórí ṣẹ́ẹ̀fù?", options: ["Receiving clerk", "Picker", "Mẹkáníìkì ọkọ̀ akẹ́rù", "Olùṣọ́ (security guard)"], answer: 1, why: "Picker ló ń mú ọjà jáde láti ibi ìpamọ́ láti parí àṣẹ." },
      { objective: "O1", q: "Ìwé-ẹ̀rí wo lo gbọ́dọ̀ yege kí o tó ṣe MSSC CLT?", options: ["CDL", "Káàdì OSHA wákàtí 30", "MSSC Certified Logistics Associate (CLA)", "Káàdì forklift"], answer: 2, why: "MSSC fi dandan lé CLA kí a tó ṣe ìdánwò CLT." },
      { objective: "O1", q: "Ibo ni o yẹ kí o ti ṣàyẹ̀wò owó oṣù àti ìrètí iṣẹ́ fún iṣẹ́ ilé ìkẹ́rùsí?", options: ["Occupational Outlook Handbook ní bls.gov", "Ọ̀rọ̀ kan lórí social media", "Ìfojúdíwọ̀n ọ̀rẹ́ kan", "Eré fídíò kan"], answer: 0, why: "Ìwé BLS ni orísun ìjọba fún owó oṣù àti ìrètí iṣẹ́." },
      { objective: "O2", q: "Kí ni ètò tó tọ́ fún ìrìn ọjà?", options: ["Shipping, picking, receiving", "Packing, receiving, putaway", "Picking, receiving, storage", "Receiving, putaway, storage, picking, packing, shipping"], answer: 3, why: "Ọjà ń wọlé, a ń pa á mọ́, lẹ́yìn náà a ń kó o, a ń dì í, a sì ń fi ránṣẹ́." },
      { objective: "O2", q: "Àṣeṣe: èwo ni ibi àkọ́kọ́ ní ọ̀nà ìrìn?", options: ["B-02-01-A", "A-07-04-C", "A-02-06-B", "B-01-01-A"], answer: 2, why: "To ní zone, lẹ́yìn náà aisle: zone A aisle 02 ṣáájú zone A aisle 07 àti gbogbo zone B." },
      { objective: "O2", q: "Kí ló dé tí o fi ń scan ibi náà àti ọjà náà nígbà tí o bá ń kó o?", options: ["Kí ètò kọ̀mpútà lè mọ ohun tí ó gbé gan-an", "Láti mú ọ lọ́ra", "Láti wo àkókò", "Fún eré nìkan ni"], answer: 0, why: "Scan ń jẹ́ kí àkọsílẹ̀ warehouse management system máa tọ̀nà." },
      { objective: "O2", q: "Ibi tí SKU rẹ wà ṣófo. Kí lo máa ṣe?", options: ["Mú ọjà èyíkéyìí tí ó wà nítòsí", "Ròyìn rẹ̀ fún lead rẹ", "Sàmì sí i pé àṣẹ náà ti parí", "Fi ìlà náà sílẹ̀ ní òfo kí o má sì sọ nǹkankan"], answer: 1, why: "A ń ròyìn ibi tí ó ṣófo kí a lè wá ọjà náà kí a sì tún àkọsílẹ̀ ṣe." },
      { objective: "O3", q: "Kí ni bill of lading?", options: ["Àkọsílẹ̀ ọjà tí a fẹ́ rà", "Àmì ààbò", "Ìwé owó oṣù (pay stub)", "Ìwé ẹrù tí o ń fọwọ́ sí fún ẹrù tí ó dé"], answer: 3, why: "Bill of lading ni ìwé ẹrù ti ilé-iṣẹ́ akẹ́rù." },
      { objective: "O3", q: "Àkọsílẹ̀ sọ pé case 15; 17 ló dé. Kí ni èyí?", options: ["Àṣejù (overage)", "Àìtó (shortage)", "Ìbàjẹ́", "Putaway"], answer: 0, why: "Ohun tí ó ju ohun tí ìwé kọ jẹ́ àṣejù." },
      { objective: "O3", q: "Nǹkan mẹ́ta wo lo máa ṣàyẹ̀wò ní ìlà kọ̀ọ̀kan nígbà receiving?", options: ["Àwọ̀, ìwọ̀n àti òórùn", "SKU tó tọ́, iye tó tọ́, ipò tó dára", "Iye owó, owó orí àti owó àfikún (tip)", "Orúkọ awakọ̀, àwọ̀ ọkọ̀, àkókò"], answer: 1, why: "Receiving ń ṣàyẹ̀wò ọjà náà, iye rẹ̀ àti ipò rẹ̀." },
      { objective: "O3", q: "Kí ni cycle count?", options: ["Kíka kẹ̀kẹ́", "Kíka gbogbo ilé ìkẹ́rùsí lẹ́ẹ̀kan lọ́dún nìkan", "Kíka ibi díẹ̀ lẹ́ẹ̀kan láti jẹ́ kí àkọsílẹ̀ máa tọ̀nà", "Kíka wákàtí iṣẹ́ rẹ"], answer: 2, why: "Cycle count ń ṣàyẹ̀wò ibi díẹ̀ lójoojúmọ́ kí àkọsílẹ̀ lè máa tọ̀nà." },
      { objective: "O4", q: "Kí lo máa kọ́kọ́ ṣàyẹ̀wò nígbà tí o bá ń kó pallet?", options: ["Àwọ̀ label", "Pé pallet náà kò ní pákó tí ó ṣẹ́ tàbí ìṣó tí ó yọ jáde", "Ojú ọjọ́", "Rédíò ọkọ̀ akẹ́rù"], answer: 1, why: "Pallet tí ó bàjẹ́ lè ṣẹ́ kí ẹrù náà sì já bọ́." },
      { objective: "O4", q: "Àṣeṣe: páálí 10 tí ọ̀kọ̀ọ̀kan jẹ́ 30 lb àti páálí 10 tí ọ̀kọ̀ọ̀kan jẹ́ 15 lb lórí pallet 40 lb. Àpapọ̀?", options: ["450 lb", "300 lb", "490 lb", "45 lb"], answer: 2, why: "300 + 150 + 40 = 490 lb." },
      { objective: "O4", q: "Kí ló dé tí páálí kò fi gbọdọ̀ yọ kọjá etí pallet?", options: ["Overhang ń fọ́ páálí, ó sì lè mú kí ẹrù náà má dúró ṣinṣin", "Kò kàn wù ojú, ìyẹn nìkan ni", "Ó ń mú ẹrù náà fúyẹ́", "Ó yá láti dì"], answer: 0, why: "Páálí tí ó yọ kọjá etí kò ní ìtìlẹ́yìn, ó máa ń fọ́, ó sì lè mú kí ẹrù náà ṣubú." },
      { objective: "O4", q: "Báwo ló ṣe yẹ kí a fi stretch wrap dì í?", options: ["Ní àyíká ìpele òkè nìkan", "Kí ó dẹ̀, kí ó lè tètè kúrò", "Lórí label kí a má lè kà wọ́n", "Kí ó le, láti ìsàlẹ̀ dé òkè, àti ní àyíká pallet pẹ̀lú"], answer: 3, why: "Dídì í dáadáa àti mọ́ pallet ń mú gbogbo ẹrù náà dúró papọ̀." },
      { objective: "O5", q: "Kí ni ìpalára tí ó wọ́pọ̀ jù ní ilé ìkẹ́rùsí, gẹ́gẹ́ bí OSHA ṣe sọ?", options: ["Ìwé tí ó gé ọwọ́", "Iṣan tí ó fà láti gbígbé ẹrù àti kí forklift kọlu ènìyàn", "Oòrùn tí ó jó awọ", "Ojú tí ó rẹ̀ láti ojú-iboju"], answer: 1, why: "OSHA dárúkọ iṣan tí ó fà láti gbígbé ẹrù àti kí ọkọ̀ alágbára kọlu ènìyàn gẹ́gẹ́ bí èyí tí ó wọ́pọ̀ jù." },
      { objective: "O5", q: "Báwo ló ṣe yẹ kí o gbé páálí sókè láti ilẹ̀?", options: ["Sún mọ́ ọn, tẹ orúnkún rẹ, jẹ́ kí ẹ̀yìn rẹ tọ́ kí ẹrù sì súnmọ́ ọ", "Tẹ̀ ní ìbàdí pẹ̀lú ẹsẹ̀ tí ó nà", "Lọ́ ara rẹ bí o ṣe ń gbé e", "Gbé e jìnnà sí ara rẹ"], answer: 0, why: "Lílo ẹsẹ̀ rẹ àti jíjẹ́ kí ẹrù súnmọ́ ọ ń dáàbò bo ẹ̀yìn rẹ." },
      { objective: "O5", q: "Ooru mú gan-an nínú ilé ìkẹ́rùsí, o sì ní òòyì. Kí lo máa ṣe?", options: ["Máa ṣiṣẹ́ lọ kí o lè dé rate rẹ", "Fo ìsinmi rẹ", "Sọ fún ẹnìkan, mu omi kí o sì sinmi níbi tí ó tutù", "Lọ sílé láìsọ fún ẹnikẹ́ni"], answer: 2, why: "Òòyì lè jẹ́ àìsàn ooru; sọ fún ẹnìkan, tutù ara rẹ kí o sì mu omi." },
      { objective: "O5", q: "Kí ni ọ̀nà tí kò léwu láti bá rate rẹ lọ?", options: ["Fo scan", "Gun pallet jack", "Gun rack láti dé ọjà", "Ṣiṣẹ́ lọ́gbọ́n: ọ̀nà ìrìn, scan pẹ̀lú ìṣọ́ra, kò sí ọ̀nà àbùjá tí ó léwu"], answer: 3, why: "Ọ̀nà ọlọ́gbọ́n ń fi àkókò pamọ́ láìfi ara wewu tàbí ṣe àṣìṣe." },
      { objective: "O1", q: "Kí ni òtítọ́ nípa káàdì OSHA Outreach wákàtí 10?", options: ["Ìdálẹ́kọ̀ọ́ tí kò pọn dandan ni, OSHA sì sọ pé kì í ṣe ìwé-ẹ̀rí", "Ó jẹ́ kí o lè wa forklift èyíkéyìí", "Ó jẹ́ ọ̀kan náà pẹ̀lú MSSC CLT", "Òfin ìjọba àpapọ̀ fi dandan lé e fún gbogbo iṣẹ́ ilé ìkẹ́rùsí"], answer: 0, why: "OSHA sọ pé kíláàsì Outreach kò pọn dandan, kò sì sí èyí tí ó jẹ́ ìwé-ẹ̀rí nínú wọn." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 4, 8, 9, 11, 12, 15, 16] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún ṣàyẹ̀wò rẹ̀.",
    criteria: [
      { name: "Ìròyìn gbígba ẹrù", objective: "O3", notYet: "Iye kan kò tọ́, tàbí àìtó, àṣejù tàbí ìbàjẹ́ kan kò sí níbẹ̀.", meets: "Ìlà kọ̀ọ̀kan fi ohun tí a retí àti ohun tí ó dé hàn, a sì kọ gbogbo ìṣòro sílẹ̀.", exceeds: "Ó tún kọ ohun tí a máa ṣe kí a tó fọwọ́ sí bill of lading àti ẹni tí a máa sọ fún." },
      { name: "Pick list ní ọ̀nà ìrìn", objective: "O2", notYet: "Àwọn ibi kò wà ní ètò, tàbí a ka kóòdù kan ní àìtọ́.", meets: "Gbogbo ọjà ni a tò ní zone, aisle, rack àti level, a sì ka kóòdù kọ̀ọ̀kan tọ̀nà.", exceeds: "Ó ṣàlàyé ohun tí a máa ṣe tí ọjà kò bá bá a mu tàbí tí ibi kan bá ṣófo." },
      { name: "Ètò ẹrù pallet", objective: "O4", notYet: "Páálí wúwo wà lókè, overhang wà, tàbí àpapọ̀ ìwọ̀n kò tọ́ tàbí ó kọjá òdiwọ̀n.", meets: "Páálí wúwo ní ìsàlẹ̀, ìpele dọ́gba tí a ṣe interlock, àpapọ̀ tó tọ́ lábẹ́ òdiwọ̀n, a dì í, ó sì ní label.", exceeds: "Ó fi àyẹ̀wò pallet àti àwọn ìgbésẹ̀ ààbò trailer kún un." },
      { name: "Ètò láti rí iṣẹ́", objective: "O1", notYet: "Kò sí agbanisíṣẹ́, kò sí ìwé-ẹ̀rí tí a lépa, tàbí ìlà résumé kan sọ ohun tí kì í ṣe òtítọ́.", meets: "Agbanisíṣẹ́ tàbí ètò mẹ́ta, ìwé-ẹ̀rí gidi pẹ̀lú ẹni tí ó ń fúnni àti ọjọ́ kan, ìlà résumé méjì tí ó jẹ́ òtítọ́.", exceeds: "Ó ní ìdáhùn ìṣẹ́jú-àáyá 30 tí a ti ṣe àṣeṣe rẹ̀ nípa ìṣọ́ra àti ààbò." },
      { name: "Iṣẹ́ tí kò léwu", objective: "O5", notYet: "Ètò náà dámọ̀ràn ọ̀nà àbùjá tí ó léwu láti dé rate.", meets: "Ìdáhùn ìṣẹ́jú-àáyá 30 àti ètò náà fi ààbò ṣáájú, pẹ̀lú gbígbé ẹrù láìléwu àti ríròyìn ewu.", exceeds: "Ó dárúkọ ewu kan pàtó láti ojú-ìwé warehousing ti OSHA àti bí a ṣe lè dènà rẹ̀." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà àti àpò ìbẹ̀rẹ̀ iṣẹ́ tí ó yege rubric",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n béèrè fún ó kéré tán iṣẹ́ ilé ìkẹ́rùsí mẹ́ta láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n rí iṣẹ́ ilé ìkẹ́rùsí tàbí logistics láàárín ọjọ́ 90 (ìròyìn alábàáṣiṣẹ́ àti àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n forúkọ sílẹ̀ fún MSSC CLA tàbí tí wọ́n bẹ̀rẹ̀ ìdálẹ́kọ̀ọ́ forklift ti agbanisíṣẹ́"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Ìwé, gègé àti ẹ̀rọ ìṣirò (ẹ̀rọ ìṣirò fóònù dára)",
      "Fóònù tàbí kọ̀mpútà pẹ̀lú íńtánẹ́ẹ̀tì fún wíwá iṣẹ́ àti ojú-òpó ìjọba",
      "Bí o bá fẹ́: páálí òfo díẹ̀ tàbí sticky note láti ṣe àṣeṣe ìpele pallet àti ọ̀nà kíkó ọjà",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀"
    ],
    facilitatorNotes: [
      "Ṣe ilé ìkẹ́rùsí kékeré pẹ̀lú ṣẹ́ẹ̀fù tí ó ní label (sticky note bí A-01-01-A) kí o sì ṣe ìdíje kíkó ọjà tí a ka àkókò rẹ̀, tí a fi ìṣọ́ra ṣáájú nínú máàkì.",
      "Lo packing list àṣeṣe tí a tẹ̀ jáde àti páálí kan pẹ̀lú onírúurú nǹkan fún iṣẹ́ receiving.",
      "Ṣe àṣeṣe gbígbé ẹrù sókè pẹ̀lú páálí òfo tàbí èyí tí ó fúyẹ́ nìkan.",
      "Pe supervisor ilé ìkẹ́rùsí àdúgbò kan tàbí òṣìṣẹ́ American Job Center láti sọ̀rọ̀ nípa gbígba òṣìṣẹ́, rate àti gbígba àwọn tí ó ní àkọsílẹ̀ ẹ̀ṣẹ̀ síṣẹ́ (second-chance).",
      "Fi rubric ṣe àmì fún àpò ìbẹ̀rẹ̀ iṣẹ́ náà kí o sì ṣàyẹ̀wò ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};

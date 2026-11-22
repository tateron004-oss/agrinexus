"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-drones-precision-climate.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_CSA = { name: "FAO: Climate-Smart Agriculture Sourcebook (ìwé ìtọ́kasí fún iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };
const FAO_ITU_DRONES = { name: "FAO àti ITU: E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const FAO_WHO_AERIAL = { name: "FAO àti WHO: Ìtọ́sọ́nà fún fífi ọkọ̀ òfuurufú fọ́n oògùn apakòkòrò (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };
const KCAA_UAS = { name: "Kenya Civil Aviation Authority (KCAA): Unmanned Aircraft Systems (drone)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const NCAA_P21 = { name: "Nigeria Civil Aviation Authority (NCAA): Nig.CARs 2023 Part 21, Remotely Piloted Aircraft Systems (drone)", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };

module.exports = {
  id: "agri-drones-precision-climate-yo",
  lang: "yo",
  translationOf: "agri-drones-precision-climate",
  category: "Agriculture (Africa)",
  name: "Drone fún Àbójútó Oko 4: Iṣẹ́ Àgbẹ̀ Aláìtàsé, Ojú-ọjọ́ àti Ẹran-ọ̀sìn",
  skills: "Pípín oko sí àwọn agbègbè ìṣàkóso, Fífi ohun èlò sí agbègbè kọ̀ọ̀kan bí ó ṣe yẹ, Kíka iye ohun ọ̀gbìn tó hù àti ṣíṣírò èso, Àbójútó ìparun ilẹ̀, omíyalé àti ọ̀gbẹlẹ̀, Àbójútó ẹran-ọ̀sìn àti pápá oko ẹran, Ṣíṣàyẹ̀wò àwọn ohun èlò ìkọ́lé oko",
  outcome: "lo àwòrán-ilẹ̀ drone láti ṣàkóso oko àdàlú ní agbègbè-agbègbè, kí o sì kọ ètò àbójútó fún gbogbo àsìkò ọ̀gbìn tí ó kan ohun ọ̀gbìn, ewu ojú-ọjọ́, ẹran-ọ̀sìn àti àwọn ohun èlò ìkọ́lé oko.",
  about: [
    "Èyí ni Ẹ̀kọ́ 4 nínú ọ̀wọ́ ẹ̀kọ́ àbójútó pẹ̀lú drone, fún àwọn àgbẹ̀, àwọn alákòóso oko, òṣìṣẹ́ ẹgbẹ́ àjùmọ̀ṣe àti òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ (extension), àti àwọn tí ń pèsè iṣẹ́ drone ní Kenya, Nigeria àti káàkiri Áfíríkà. O yẹ kí o ti lè ṣe àwòrán-ilẹ̀ drone kí o sì kà á (Ẹ̀kọ́ 2 àti 3).",
    "Orí 1 jẹ́ nípa iṣẹ́ àgbẹ̀ aláìtàsé (precision agriculture): bíbójútó apá kọ̀ọ̀kan oko gẹ́gẹ́ bí ohun tí ó nílò, dípò bíbójútó gbogbo oko lọ́nà kan náà. O máa pín oko sí agbègbè, o máa darí irúgbìn, ajílẹ̀ àti òṣìṣẹ́ sí ibi tí wọ́n yẹ, o sì máa lo iye ohun ọ̀gbìn láti ṣírò èso. Orí 2 ń wo gbogbo oko: ewu ojú-ọjọ́ àti àyíká bí ìparun ilẹ̀, omíyalé àti ọ̀gbẹlẹ̀, ẹran-ọ̀sìn àti pápá oko ẹran, àti àwọn ìsédò, adágún omi, ọgbà-ìsọ́, ojú-omi ìrigeson àti ilé ọ̀gbìn (greenhouse) tí ń jẹ́ kí oko máa ṣiṣẹ́.",
    "Àwọn àpẹẹrẹ ni àgbàdo àti ẹ̀wà ní Rift Valley, ẹ̀gẹ́ àti iṣu ní gúúsù-ìwọ̀-oòrùn Nigeria, tíì ní Kericho, àti oko àdàlú tí ó ní ohun ọ̀gbìn àti ẹran-ọ̀sìn. Ìdánwò ìmọ̀ kan wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́."
  ],
  finalTask: "Kọ ètò àbójútó pẹ̀lú drone fún gbogbo àsìkò ọ̀gbìn fún oko àdàlú kan (gidi tàbí àpẹẹrẹ, bí hẹ́kítà 10 tí ó ní àgbàdo, ẹ̀wà, pápá oko ẹran kan, màlúù 30, adágún omi kan àti ààlà tí a fi ọgbà-ìsọ́ yí ká): àwọn agbègbè inú oko ohun ọ̀gbìn pàtàkì àti ohun tí agbègbè kọ̀ọ̀kan máa gbà, àwọn ìrìn-àjò drone tí o máa ṣe àti ìgbà tí o máa ṣe wọ́n (ohun ọ̀gbìn, ewu ojú-ọjọ́, ẹran-ọ̀sìn, ohun èlò ìkọ́lé), ohun tí o máa wá nígbà kọ̀ọ̀kan, àti ìgbésẹ̀ tí ohun tí o bá rí lè mú wá.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀, àwọn alákòóso oko, òṣìṣẹ́ ẹgbẹ́ àjùmọ̀ṣe àti òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀, àti àwọn tí ń pèsè iṣẹ́ drone ní Kenya, Nigeria àti káàkiri Áfíríkà tí wọ́n ń ṣe Ẹ̀kọ́ 4 nínú ọ̀wọ́ ẹ̀kọ́ àbójútó pẹ̀lú drone, tí ọ̀pọ̀ wọn ní oko àdàlú ohun ọ̀gbìn àti ẹran-ọ̀sìn.",
    startingPoint: "Àwọn akẹ́kọ̀ọ́ lè ṣe àwòrán-ilẹ̀ drone kí wọ́n sì kà á (Ẹ̀kọ́ 2 àti 3). Ọ̀pọ̀ wọn ṣì ń bójútó gbogbo oko lọ́nà kan náà, wọ́n ń fi ẹsẹ̀ rìn láti wo ẹran-ọ̀sìn, pápá oko ẹran àti ohun èlò ìkọ́lé, wọ́n sì ń dáhùn sí ìparun ilẹ̀, omíyalé àti ọ̀gbẹlẹ̀ lẹ́yìn tí ìbàjẹ́ ti ṣẹlẹ̀. Díẹ̀ ni wọ́n ń ṣètò ìrìn-àjò drone fún gbogbo àsìkò ọ̀gbìn.",
    gap: "Oko tí kò dọ́gba máa ń fi ohun èlò ṣòfò níbi tí kò ti ní èrè, ìkìlọ̀ tó pẹ́ nípa ìparun ilẹ̀, ọ̀dá òjò, jíjẹ koríko jù tàbí ìsédò tí ń jò sì máa ń mú kí èso àti owó sọnù. Ètò àbójútó fún gbogbo àsìkò ọ̀gbìn pẹ̀lú àwọn agbègbè ń jẹ́ kí oko fi ohun èlò àti òṣìṣẹ́ sí ibi tí wọ́n ti ní èrè, kí wọ́n sì tètè gbé ìgbésẹ̀ lórí ewu ojú-ọjọ́, ẹran-ọ̀sìn àti ohun èlò ìkọ́lé.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn; a ṣàlàyé gbogbo ọ̀rọ̀ iṣẹ́ àgbẹ̀ aláìtàsé",
      "Ẹ̀rọ: àwòrán-ilẹ̀ drone láti oko gidi tàbí àpẹẹrẹ; fóònù tí ó ní GPS láti sàmì sí àwọn agbègbè",
      "Òfin: ìrìn-àjò drone nílò ìyọ̀ǹda orílẹ̀-èdè; fífi drone fọ́n oògùn tún nílò ìyọ̀ǹda fún oògùn apakòkòrò",
      "Ìtọ́jú ẹranko àti ìpamọ́ àṣírí: má ṣe dẹ́rù ba ẹranko tàbí lé wọn; má ṣe ya fídíò ènìyàn tàbí ilé láìgbàṣẹ",
      "Iye ìlò àti iye èso wá láti ìrírí àdúgbò tàbí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀, kì í ṣe láti inú ẹ̀kọ́ yìí"
    ],
    prerequisites: "\"Drone fún Àbójútó Oko 3: Ìlera Irè Oko, Kòkòrò àti Ṣíṣe Iṣẹ́ Dátà\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àwòrán-ilẹ̀ drone láti ọjọ́ tó ju ọ̀kan lọ àti ìmọ̀ àgbẹ̀ náà", action: "pín oko sí agbègbè ìṣàkóso méjì sí mẹ́rin kí o sì sàmì sí wọn lórí ilẹ̀", standard: "pẹ̀lú orúkọ agbègbè kọ̀ọ̀kan àti ìdí rẹ̀" },
    { id: "O2", condition: "Fún agbègbè ìṣàkóso kọ̀ọ̀kan", action: "pinnu ohun tí agbègbè náà máa gbà: irúgbìn, ajílẹ̀, òṣìṣẹ́ tàbí àtúnṣe", standard: "kí ìgbésẹ̀ bá ohun tó fa ìṣòro agbègbè náà mu, láìṣètò fífi drone fọ́n oògùn láìsí ìyọ̀ǹda láéláé" },
    { id: "O3", condition: "Tí a bá fún ọ ní àwòrán-ilẹ̀ drone àti iye tí a kà nínú àpẹẹrẹ", action: "ṣírò iye ohun ọ̀gbìn tó hù àti iye èso ní ìṣirò ìfojúdíwọ̀n", standard: "kí a fi iye tó hù wé àyè gbígbìn tí a fojú sí, kí iye èso sì jẹ́ láti iye kan dé òmíràn" },
    { id: "O4", condition: "Jákèjádò àsìkò ọ̀gbìn kan", action: "ṣètò ìrìn-àjò drone láti rí ewu ìparun ilẹ̀, omíyalé àti ọ̀gbẹlẹ̀, kí o sì tọpa àwọn ọ̀nà iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu", standard: "ní àwọn ọjọ́ tí a ti yàn kí a lè fi àwòrán-ilẹ̀ wé ara wọn" },
    { id: "O5", condition: "Fún ìrìn-àjò drone lórí ẹran-ọ̀sìn tàbí pápá oko ẹran", action: "ṣètò ìrìn-àjò tó dákẹ́ tí kò léwu láti ka ẹran, kí o sì wo pápá oko ẹran àti ibi omi", standard: "pẹ̀lú ìfohùnṣọ̀kan darandaran, láìdẹ́rù ba àwọn ẹranko" },
    { id: "O6", condition: "Fún ìsédò, ojú-omi ìrigeson, ọgbà-ìsọ́, ilé ọ̀gbìn (greenhouse) àti ilé ìkó-nǹkan-sí ti oko", action: "ṣàyẹ̀wò wọn láti òfuurufú kí o sì kọ àkọsílẹ̀ àtúnṣe", standard: "pẹ̀lú nǹkan náà, ibi tí ó wà, ìṣòro, bí ó ṣe yára tó, àti ẹni tí yóò tún un ṣe" }
  ],
  chapters: [
    {
      name: "Orí 1: Iṣẹ́ àgbẹ̀ aláìtàsé",
      lessons: [
        {
          objectives: ["O1"],
          title: "Agbègbè ìṣàkóso: oko kan, àìní tó yàtọ̀",
          minutes: 5,
          goal: "Pín oko sí agbègbè ìṣàkóso méjì sí mẹ́rin láti àwòrán-ilẹ̀ drone àti ìmọ̀ oko.",
          text: [
            "Ọ̀pọ̀ oko kò dọ́gba. Jíjìn ilẹ̀, ìtẹ̀sí ilẹ̀, ilé ikán àtijọ́, ìgbẹ́ ẹran tí a ti dà síbẹ̀ tẹ́lẹ̀, omi tí ń dúró àti òjìji ń jẹ́ kí àwọn apá kan dàgbà dáadáa ju àwọn míì lọ. Iṣẹ́ àgbẹ̀ aláìtàsé túmọ̀ sí bíbójútó apá kọ̀ọ̀kan gẹ́gẹ́ bí ohun tí ó nílò.",
            "Agbègbè ìṣàkóso jẹ́ apá kan oko tí ó máa ń ṣe bákan náà ní àsìkò dé àsìkò. Láti ya àwọn agbègbè, da ọ̀pọ̀ àwòrán-ilẹ̀ drone pọ̀ (NDVI tàbí àwọ̀, láti ọjọ́ tàbí àsìkò tó ju ọ̀kan lọ) pẹ̀lú ohun tí àgbẹ̀ mọ̀: ibi tí omi ń dúró sí, ibi tí ilẹ̀ kò ti jìn, ibi tí ohun ọ̀gbìn máa ń ṣe dáadáa nígbà gbogbo.",
            "Jẹ́ kí ó rọrùn. Agbègbè méjì sí mẹ́rin tó fún ọ̀pọ̀ oko kékeré àti oko àárín: fún àpẹẹrẹ agbègbè tó lágbára, agbègbè àárín, àti agbègbè aláìlágbára tí omi ń dúró sí. Fún wọn ní orúkọ kí o sì fi èèkàn tàbí àmì GPS sàmì sí wọn kí àwọn òṣìṣẹ́ lè rí wọn."
          ],
          steps: ["Kó àwòrán-ilẹ̀ oko náà láti ọjọ́ méjì tàbí jù bẹ́ẹ̀ lọ tí ó bá ṣeé ṣe.", "Béèrè lọ́wọ́ àgbẹ̀ ibi tí ohun ọ̀gbìn ti máa ń lágbára tàbí ṣe aláìlágbára nígbà gbogbo, àti ìdí rẹ̀.", "Ya agbègbè méjì sí mẹ́rin tí ó bá àwòrán-ilẹ̀ àti ìmọ̀ àgbẹ̀ mu.", "Fún agbègbè kọ̀ọ̀kan ní orúkọ kí o sì fi èèkàn tàbí àmì GPS sàmì sí i lórí ilẹ̀."],
          words: [["Iṣẹ́ àgbẹ̀ aláìtàsé (precision agriculture)", "bíbójútó apá kọ̀ọ̀kan oko gẹ́gẹ́ bí ohun tí ó nílò."], ["Agbègbè ìṣàkóso", "apá kan oko tí ó máa ń ṣe bákan náà ní àsìkò dé àsìkò, tí a sì ń bójútó bí ẹyọ kan."]],
          slides: [
            { title: "Oko kò dọ́gba", bullets: ["Ilẹ̀, ìtẹ̀sí, omi, òjìji, ìgbẹ́ ẹran àtijọ́", "Àwọn apá kan máa ń dàgbà dáadáa jù nígbà gbogbo"] },
            { title: "Yíya àwọn agbègbè", bullets: ["Àwòrán-ilẹ̀ láti ọjọ́ tó ju ọ̀kan lọ", "Pẹ̀lú ìmọ̀ àgbẹ̀", "Àwọn apá tí ó ń ṣe bákan náà ní àsìkò kọ̀ọ̀kan"] },
            { title: "Jẹ́ kí ó rọrùn", bullets: ["Agbègbè méjì sí mẹ́rin", "Èyí tó lágbára, àárín, aláìlágbára tàbí olómi", "Sàmì sí wọn lórí ilẹ̀"] }
          ],
          tryIt: "Ya àwòrán oko kan tí o mọ̀ (tàbí lo àwòrán-ilẹ̀ àpẹẹrẹ). Ya agbègbè méjì sí mẹ́rin, fún wọn ní orúkọ, kí o sì kọ ìdí tí agbègbè kọ̀ọ̀kan fi yàtọ̀.",
          youCanNow: "pín oko sí àwọn agbègbè ìṣàkóso tó rọrùn pẹ̀lú àwòrán-ilẹ̀ àti ìmọ̀ àgbẹ̀.",
          quickCheck: [
            { objective: "O1", q: "Èwo ni àwọn agbègbè ìṣàkóso tó bọ́gbọ́n mu fún oko kékeré?", options: ["Agbègbè tó lágbára, agbègbè àárín, àti agbègbè aláìlágbára tí omi ń dúró sí", "Agbègbè kan fún ohun ọ̀gbìn kọ̀ọ̀kan", "Agbègbè 20 tí wọ́n tóbi bákan náà", "Kò sí agbègbè rárá"], answer: 0, why: "Agbègbè méjì sí mẹ́rin tó rọrùn tó fún ọ̀pọ̀ oko kékeré àti oko àárín." },
            { objective: "O1", q: "Àgbẹ̀ sọ pé igun kan máa ń ṣe búburú nígbà gbogbo, ṣùgbọ́n àwòrán-ilẹ̀ kan ṣoṣo ti àsìkò yìí fi í hàn ní àwọ̀ ewé. Kí ni o máa ṣe?", options: ["Kọ ọ̀rọ̀ àgbẹ̀ sílẹ̀", "Ya agbègbè láti àwòrán-ilẹ̀ kan ṣoṣo yìí nìkan", "Wo àwòrán-ilẹ̀ láti ọjọ́ àti àsìkò míì kí o sì lo ìmọ̀ àgbẹ̀", "Jáwọ́ nínú àwọn agbègbè"], answer: 2, why: "A máa ń ya agbègbè láti ọ̀pọ̀ àwòrán-ilẹ̀ àti ọjọ́, pẹ̀lú ohun tí àgbẹ̀ mọ̀." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Fífi ohun èlò sí agbègbè kọ̀ọ̀kan bí ó ṣe yẹ",
          minutes: 6,
          goal: "Pinnu ohun tí agbègbè kọ̀ọ̀kan máa gbà: irúgbìn, ajílẹ̀, òṣìṣẹ́ tàbí àtúnṣe.",
          text: [
            "Nígbà tí o bá ti ní àwọn agbègbè, béèrè ohun tí ọ̀kọ̀ọ̀kan nílò. Agbègbè aláìlágbára lórí ilẹ̀ tí kò jìn lè má san ajílẹ̀ àfikún padà; agbègbè tí omi ń dúró sí lè nílò ọ̀nà omi, kì í ṣe ajílẹ̀; agbègbè àárín lè fúnni ní èrè tó dára jù lórí ohun èlò àfikún. Èyí ni ìṣàkóso oníye-yíyàtọ̀ (variable-rate): iye tó yàtọ̀ ní ibi tó yàtọ̀.",
            "Lórí oko ńlá, ẹ̀rọ lè fi iye tó yàtọ̀ síra sílẹ̀ láti inú àwòrán-ilẹ̀ ìlànà (prescription map). Lórí oko kékeré, èrò kan náà ń ṣiṣẹ́ pẹ̀lú ọwọ́: àwọn òṣìṣẹ́ máa ń fi ajílẹ̀ tàbí ìgbẹ́ ẹran tó pọ̀ tàbí tó kéré sí ihò gbingbin kọ̀ọ̀kan gẹ́gẹ́ bí agbègbè, wọ́n máa ń tún gbìn sí àlàfo níbi tí drone fi hàn nìkan, wọ́n sì máa ń kọ́kọ́ ro koríko tàbí wo àwọn agbègbè tí ìṣòro wà.",
            "Àwọn drone kan lè fọ́n oògùn tàbí fọ́n nǹkan ká. Fífi drone fọ́n oògùn apakòkòrò nílò ìyọ̀ǹda tirẹ̀ láti ọ̀dọ̀ àjọ ìrìn-àjò òfuurufú àti àjọ tí ń ṣàkóso oògùn apakòkòrò ní orílẹ̀-èdè rẹ, àwọn òṣìṣẹ́ tí a ti kọ́ tí wọ́n sì ní ìwé àṣẹ, àti ọ̀nà tí kò léwu bí èyí tí ó wà nínú ìtọ́sọ́nà FAO àti WHO (àjọ oúnjẹ àti àjọ ìlera àgbáyé) lórí fífọ́n oògùn láti òfuurufú. Má ṣe fọ́n oògùn, tàbí gba ẹnikẹ́ni nímọ̀ràn láti fọ́n ọ́n, láìsí wọn láéláé."
          ],
          steps: ["Fún agbègbè kọ̀ọ̀kan, kọ ìdí tí ó fi jẹ́ aláìlágbára tàbí alágbára.", "Yan ìgbésẹ̀ tí ó tún ohun tó fa á ṣe: ọ̀nà omi, títún gbìn, ajílẹ̀ tó pọ̀ tàbí tó kéré, ríro koríko.", "Kọ iye tàbí iṣẹ́ fún agbègbè kọ̀ọ̀kan kí àwọn òṣìṣẹ́ lè tẹ̀lé e.", "Fífi drone fọ́n oògùn: pẹ̀lú ìyọ̀ǹda ìrìn-àjò òfuurufú àti ti oògùn apakòkòrò tí a béèrè nìkan."],
          words: [["Oníye-yíyàtọ̀ (variable-rate)", "fífi iye irúgbìn, ajílẹ̀ tàbí omi tó yàtọ̀ síra sí àwọn apá tó yàtọ̀ nínú oko."], ["Àwòrán-ilẹ̀ ìlànà (prescription map)", "àwòrán-ilẹ̀ tí ó sọ fún ènìyàn tàbí ẹ̀rọ iye tí wọ́n máa fi sí agbègbè kọ̀ọ̀kan."]],
          slides: [
            { title: "Tún ohun tó fa á ṣe", bullets: ["Ilẹ̀ tí kò jìn: ajílẹ̀ àfikún lè má san padà", "Omi ń dúró: ọ̀nà omi, kì í ṣe ajílẹ̀", "Agbègbè àárín: ó sábà máa ń ní èrè tó dára jù"] },
            { title: "Iye tó yàtọ̀ pẹ̀lú ọwọ́", bullets: ["Púpọ̀ tàbí díẹ̀ sí ihò kọ̀ọ̀kan gẹ́gẹ́ bí agbègbè", "Tún gbìn sí àlàfo níbi tí ó yẹ nìkan", "Kọ́kọ́ ro koríko kí o sì wo àwọn agbègbè tí ìṣòro wà"] },
            { title: "Drone tí ń fọ́n oògùn", bullets: ["Nílò ìyọ̀ǹda ìrìn-àjò òfuurufú ÀTI ti oògùn apakòkòrò", "Òṣìṣẹ́ tí a ti kọ́, tí ó ní ìwé àṣẹ", "Tẹ̀lé ìtọ́sọ́nà FAO/WHO lórí fífọ́n oògùn láti òfuurufú"] }
          ],
          sources: [FAO_WHO_AERIAL, KCAA_UAS, NCAA_P21],
          tryIt: "Lo àwọn agbègbè rẹ láti Ẹ̀kọ́ 1, kí o sì kọ ìtọ́ni ìlà kan fún agbègbè kọ̀ọ̀kan tí òṣìṣẹ́ oko lè tẹ̀lé (fún àpẹẹrẹ: Agbègbè C, igun olómi: gbẹ́ ọ̀nà omi kí o tó fi ajílẹ̀ kún un; kò sí ajílẹ̀ àfikún).",
          youCanNow: "pinnu kí o sì kọ ohun tí agbègbè ìṣàkóso kọ̀ọ̀kan yẹ kí ó gbà, kí o sì mọ ìgbà tí fífọ́n oògùn nílò ìyọ̀ǹda pàtàkì.",
          quickCheck: [
            { objective: "O2", q: "Lórí oko ńlá, kí ni a fi àwòrán-ilẹ̀ ìlànà (prescription map) ṣe?", options: ["Kíka màlúù", "Ṣíṣàyẹ̀wò ọgbà-ìsọ́", "Kíkọ ìṣúná owó oko", "Sísọ fún ẹ̀rọ iye tí wọ́n máa fi sí ibi kọ̀ọ̀kan"], answer: 3, why: "Lórí oko ńlá, ẹ̀rọ lè fi iye tó yàtọ̀ síra sílẹ̀ láti inú àwòrán-ilẹ̀ ìlànà." },
            { objective: "O2", q: "Drone fi àlàfo hàn nínú agbègbè àárín nìkan. Kí ni o máa sọ fún àwọn òṣìṣẹ́?", options: ["Tún gbogbo oko gbìn", "Tún gbìn sí àlàfo níbi tí drone fi hàn nìkan", "Fi ajílẹ̀ sí àwọn àlàfo náà", "Fi àwọn àlàfo sílẹ̀"], answer: 1, why: "Lórí oko kékeré, àwọn òṣìṣẹ́ máa ń tún gbìn níbi tí drone fi àlàfo hàn nìkan." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kíka ohun ọ̀gbìn àti ìṣirò èso ní kùtùkùtù",
          minutes: 5,
          goal: "Ṣírò iye ohun ọ̀gbìn tó hù àti iye èso ní ìfojúdíwọ̀n láti àwòrán-ilẹ̀ drone àti kíka àpẹẹrẹ.",
          text: [
            "Iye ohun ọ̀gbìn tó hù (plant stand) ni iye ohun ọ̀gbìn tí ó hù jáde tí a fi wé iye tí a gbìn. Àwòrán-ilẹ̀ drone tí ó fi nǹkan hàn kínníkínní máa ń fi àlàfo hàn kedere. Àwọn sọ́fítíwọ̀ kan lè ka ohun ọ̀gbìn fúnra wọn; o tún lè fi ọwọ́ kà wọ́n nínú àwọn ìgun-mẹ́rin àpẹẹrẹ lórí àwòrán-ilẹ̀.",
            "Láti ṣírò iye tó hù: sàmì sí àwọn apá àpẹẹrẹ díẹ̀ tí a mọ ìtóbi wọn nínú agbègbè kọ̀ọ̀kan, ka ohun ọ̀gbìn, kí o sì fi wé àyè gbígbìn tí a fojú sí. Tí a bá gbin oko àgbàdo ní 75 cm sí 25 cm, iye tí a fojú sí jẹ́ nǹkan bí 53,000 ohun ọ̀gbìn lórí hẹ́kítà kan; tí o bá kà 40,000, iye tó hù jẹ́ nǹkan bí ìdá 75 nínú ọgọ́rùn-ún.",
            "Ìṣirò èso ní ìfojúdíwọ̀n máa ń fi iye ohun ọ̀gbìn lórí hẹ́kítà kan sọdipúpọ̀ pẹ̀lú iye èso tí a retí lórí ohun ọ̀gbìn kọ̀ọ̀kan láti ìrírí àdúgbò tàbí iye láti ọ̀dọ̀ òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀, ní agbègbè-agbègbè. Kà á sí iye láti ibì kan dé ibòmíì, kì í ṣe ìlérí: ojú-ọjọ́, kòkòrò àti àdánù nígbà ìkórè máa ń yí iye ìkẹyìn padà. Síbẹ̀ ó ń ṣèrànwọ́ láti tètè ṣètò ìkó-nǹkan-pamọ́, títà àti ìrìnnà."
          ],
          steps: ["Sàmì sí àwọn ìgun-mẹ́rin àpẹẹrẹ tí a mọ ìtóbi wọn nínú agbègbè kọ̀ọ̀kan lórí àwòrán-ilẹ̀.", "Ka ohun ọ̀gbìn nínú ìgun-mẹ́rin kọ̀ọ̀kan (pẹ̀lú ojú tàbí sọ́fítíwọ̀).", "Ṣírò iye ohun ọ̀gbìn lórí hẹ́kítà kan kí o sì fi wé iye tí a fojú sí.", "Fi sọdipúpọ̀ pẹ̀lú èso tí a retí lórí ohun ọ̀gbìn kọ̀ọ̀kan láti iye àdúgbò láti rí iye láti ibì kan dé ibòmíì.", "Kọ iye náà àti ohun tí ó lè yí i padà."],
          words: [["Iye ohun ọ̀gbìn tó hù (plant stand)", "iye ohun ọ̀gbìn tí ó hù jáde tí a fi wé iye tí a gbìn."], ["Ìṣirò èso (yield estimate)", "ìfojúdíwọ̀n ní kùtùkùtù nípa iye tí oko máa mú jáde."]],
          slides: [
            { title: "Iye ohun ọ̀gbìn tó hù", bullets: ["Ohun ọ̀gbìn tó hù àti ohun ọ̀gbìn tí a gbìn", "Àlàfo hàn kedere lórí àwòrán-ilẹ̀ kínníkínní"] },
            { title: "Kà á pẹ̀lú àpẹẹrẹ", bullets: ["Ìgun-mẹ́rin àpẹẹrẹ nínú agbègbè kọ̀ọ̀kan", "Ka ohun ọ̀gbìn, lẹ́yìn náà ṣírò fún hẹ́kítà kan", "Àgbàdo 75 cm x 25 cm: nǹkan bí 53,000 ohun ọ̀gbìn lórí ha"] },
            { title: "Ìṣirò èso ní kùtùkùtù", bullets: ["Ohun ọ̀gbìn lórí ha x èso tí a retí lórí ohun ọ̀gbìn kọ̀ọ̀kan", "Fúnni ní iye láti ibì kan dé ibòmíì, kì í ṣe ìlérí", "Ó ń ṣèrànwọ́ láti ṣètò ìkó-nǹkan-pamọ́, títà àti ìrìnnà"] }
          ],
          tryIt: "A gbin agbègbè àgbàdo hẹ́kítà 1 ní 75 cm sí 25 cm. Iye tí o kà nínú àpẹẹrẹ fi hàn pé ó tó 44,000 ohun ọ̀gbìn lórí hẹ́kítà kan. Ṣírò ìdá-nínú-ọgọ́rùn-ún iye tó hù, lẹ́yìn náà kọ ohun tí ó lè fa àwọn àlàfo náà àti ohun tí o máa ṣàyẹ̀wò.",
          youCanNow: "ṣírò iye ohun ọ̀gbìn tó hù àti iye èso ní ìfojúdíwọ̀n ní agbègbè-agbègbè láti àwòrán-ilẹ̀ drone àti kíka àpẹẹrẹ.",
          quickCheck: [
            { objective: "O3", q: "Kí ló dé tí a fi ń ka ohun ọ̀gbìn nínú àwọn apá àpẹẹrẹ tí a mọ ìtóbi wọn?", options: ["Láti wá ààlà oko", "Láti ṣírò iye ohun ọ̀gbìn lórí hẹ́kítà kan kí a sì fi wé iye tí a fojú sí", "Láti wọn òjò", "Láti wo bátìrì drone"], answer: 1, why: "Kíka nínú àwọn apá tí a mọ ìtóbi wọn ń fúnni ní iye ohun ọ̀gbìn lórí hẹ́kítà kan, tí a sì ń fi wé àyè gbígbìn tí a fojú sí." },
            { objective: "O3", q: "Olùrà kan béèrè iye ìkórè rẹ gan-an ní oṣù kan ṣáájú ìkórè. Kí ni o máa fún un?", options: ["Nọ́mbà kan pàtó bí ìlérí", "Kò sí nǹkan rárá", "Nọ́mbà ti ọdún tó kọjá", "Iye ìfojúdíwọ̀n láti ibì kan dé ibòmíì, pẹ̀lú àlàyé pé ojú-ọjọ́, kòkòrò àti àdánù lè yí i padà"], answer: 3, why: "Ìṣirò èso ní kùtùkùtù jẹ́ iye láti ibì kan dé ibòmíì, kì í ṣe ìlérí." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Iṣẹ́ àgbẹ̀ aláìtàsé",
        questions: [
          { objective: "O1", q: "Kí ni agbègbè ìṣàkóso?", options: ["Ìgun-mẹ́rin èyíkéyìí", "Apá kan oko tí ó máa ń ṣe bákan náà ní àsìkò dé àsìkò", "Ọ́fíìsì oko", "Ibi tí a kò gbọdọ̀ fò drone sí"], answer: 1, why: "Àwọn agbègbè ń kó àwọn apá tí ó ń hùwà bákan náà jọ, kí a lè bójútó wọn bákan náà." },
          { objective: "O1", q: "Èwo ni ọ̀nà tó dára jù láti ya àwọn agbègbè?", options: ["Lo àwòrán-ilẹ̀ kan ṣoṣo láti ọjọ́ kan nìkan", "Da agbègbè aládùúgbò kọ", "Da àwòrán-ilẹ̀ láti ọjọ́ tó ju ọ̀kan lọ pọ̀ pẹ̀lú ìmọ̀ àgbẹ̀", "Ya ìgun-mẹ́rin tó dọ́gba"], answer: 2, why: "Ọ̀pọ̀ àwòrán-ilẹ̀ pẹ̀lú ìmọ̀ àdúgbò ń fi àpẹẹrẹ tí kì í yí padà hàn." },
          { objective: "O2", q: "Agbègbè kan jẹ́ aláìlágbára nítorí omi ń dúró síbẹ̀ lẹ́yìn òjò. Ìgbésẹ̀ tó dára jù ni:", options: ["Mú ọ̀nà omi dára sí i", "Fi ajílẹ̀ ìlọ́po méjì kún un", "Fọ́n oògùn apakòkòrò", "Gbin irúgbìn púpọ̀ sí i"], answer: 0, why: "Tún ohun tó fa á ṣe; ajílẹ̀ kì í tún omi tí ń dúró ṣe." },
          { objective: "O2", q: "Iṣẹ́ drone kan fẹ́ fọ́n oògùn apakòkòrò sí oko àgbàdo oníbàárà kan. Kí ló gbọdọ̀ wà ní ipò?", options: ["Ìyọ̀ǹda àgbẹ̀ nìkan", "Kò sí nǹkan míì", "Kámẹ́rà tó dára", "Ìyọ̀ǹda ìrìn-àjò òfuurufú àti ti oògùn apakòkòrò, àti òṣìṣẹ́ tí ó ní ìwé àṣẹ"], answer: 3, why: "Fífi drone fọ́n oògùn jẹ́ iṣẹ́ tí òfin ń ṣàkóso, tí ewu rẹ̀ sì ga." },
          { objective: "O3", q: "Àgbàdo tí a gbìn ní 75 cm x 25 cm ní iye tí a fojú sí tó nǹkan bí:", options: ["5,300 ohun ọ̀gbìn lórí hẹ́kítà kan", "53,000 ohun ọ̀gbìn lórí hẹ́kítà kan", "530,000 ohun ọ̀gbìn lórí hẹ́kítà kan", "530 ohun ọ̀gbìn lórí hẹ́kítà kan"], answer: 1, why: "10,000 m2 pín sí 0.1875 m2 fún ohun ọ̀gbìn kọ̀ọ̀kan jẹ́ nǹkan bí 53,000." }
        ]
      }
    },
    {
      name: "Orí 2: Ojú-ọjọ́, ẹran-ọ̀sìn àti ohun èlò ìkọ́lé oko",
      lessons: [
        {
          objectives: ["O4"],
          title: "Àbójútó ewu ojú-ọjọ́ àti àyíká",
          minutes: 6,
          goal: "Lo ìrìn-àjò drone láti rí ewu ìparun ilẹ̀, omíyalé àti ọ̀gbẹlẹ̀, kí o sì tọpa àwọn ọ̀nà iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu.",
          text: [
            "Ìyípadà ojú-ọjọ́ ń mú òjò tó le jù, ọ̀dá òjò tó gùn jù àti ooru tó pọ̀ jù wá sí ọ̀pọ̀ agbègbè oko. FAO ṣàpèjúwe iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu (climate-smart agriculture) gẹ́gẹ́ bí iṣẹ́ àgbẹ̀ tí ó ń mú èso àti owó-wọlé pọ̀ sí i, tí ó ń ran oko lọ́wọ́ láti mú ara bá ìyípadà mu kí ó sì lágbára sí i, tí ó sì ń dín èéfín tí ń mú ayé gbóná kù tàbí mú un kúrò níbi tí ó bá ṣeé ṣe.",
            "Drone ń ṣèrànwọ́ ní apá mímú ara bá ìyípadà mu. Lẹ́yìn òjò ńlá, ìrìn-àjò drone kan ń fi àwọn kòtò-omi, ilẹ̀ onípele tí omi ti gbá lọ, ọ̀nà omi tí iyẹ̀pẹ̀ ti dí àti oko tí omi ti bò hàn; àwòrán gíga ilẹ̀ (elevation model) ń fi ibi tí omi máa ṣàn sí nígbà tó ń bọ̀ hàn. Nígbà ọ̀dá òjò, àwòrán-ilẹ̀ ooru (thermal) àti NDVI ń fi àwọn apá tí ó kọ́kọ́ gbẹ hàn. Ní àsìkò dé àsìkò, àwòrán-ilẹ̀ ń fi hàn bóyá ilẹ̀ onípele, ohun ọ̀gbìn ìbòlẹ̀, bíbo ilẹ̀ pẹ̀lú ewé gbígbẹ (mulch), gbígbin igi àti kíkó omi òjò jọ ń ṣiṣẹ́.",
            "Fò drone sórí apá kan náà ní àwọn ọjọ́ tí a ti yàn (fún àpẹẹrẹ ṣáájú òjò gígùn, lẹ́yìn ìjì líle àkọ́kọ́, ní àárín àsìkò, àti lẹ́yìn ìkórè) kí o sì fi wé ara wọn. Pín àwọn àwòrán-ilẹ̀ náà pẹ̀lú ẹgbẹ́ àgbẹ̀ tàbí àwọn òṣìṣẹ́ county tàbí ìpínlẹ̀: wọ́n ń fi ibi tí ó yẹ kí gbogbo àwùjọ kọ́kọ́ gbé ìgbésẹ̀ hàn."
          ],
          steps: ["Yan àwọn ọjọ́ ìrìn-àjò tí ó so mọ́ àwọn àsìkò.", "Lẹ́yìn òjò ńlá: ya àwòrán-ilẹ̀ àwọn kòtò-omi, ibi tí omi gbá lọ, ọ̀nà omi tí iyẹ̀pẹ̀ dí, oko tí omi bò.", "Nígbà ọ̀dá òjò: lo NDVI tàbí thermal láti ya àwòrán-ilẹ̀ àwọn apá tí ó kọ́kọ́ gbẹ.", "Ní àsìkò kọ̀ọ̀kan: wo ilẹ̀ onípele, ohun ọ̀gbìn ìbòlẹ̀, mulch, igi, kíkó omi òjò jọ.", "Fi àwòrán-ilẹ̀ wé ara wọn bí àkókò ti ń lọ kí o sì pín wọn."],
          words: [["Iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu (climate-smart agriculture, CSA)", "iṣẹ́ àgbẹ̀ tí ó ń mú èso pọ̀ sí i, tí ó ń ran oko lọ́wọ́ láti mú ara bá ìyípadà ojú-ọjọ́ mu, tí ó sì ń dín èéfín kù níbi tí ó bá ṣeé ṣe."], ["Ìparun ilẹ̀ (erosion)", "ilẹ̀ tí omi tàbí afẹ́fẹ́ gbá lọ."], ["Kòtò-omi (gully)", "ọ̀gbun jíjìn tí omi tí ń ṣàn gbẹ́ sínú ilẹ̀."]],
          slides: [
            { title: "Iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu", bullets: ["Mú èso àti owó-wọlé pọ̀ sí i", "Mú ara bá ìyípadà mu kí o sì lágbára sí i", "Dín èéfín kù níbi tí ó bá ṣeé ṣe"] },
            { title: "Ohun tí drone ń fi hàn", bullets: ["Lẹ́yìn òjò: kòtò-omi, ibi tí omi gbá lọ, oko tí omi bò", "Ọ̀dá òjò: àwọn apá tí ó kọ́kọ́ gbẹ", "Bóyá ilẹ̀ onípele, mulch àti igi ń ṣiṣẹ́"] },
            { title: "Fò ní àwọn ọjọ́ tí a ti yàn", bullets: ["Ṣáájú òjò, lẹ́yìn ìjì, àárín àsìkò, lẹ́yìn ìkórè", "Fi wé ara wọn bí àkókò ti ń lọ", "Pín pẹ̀lú ẹgbẹ́ àgbẹ̀ àti àwọn òṣìṣẹ́"] }
          ],
          sources: [FAO_CSA, FAO_ITU_DRONES],
          tryIt: "Kọ kàlẹ́ńdà ọdún kan ti ìrìn-àjò ojú-ọjọ́ mẹ́rin fún oko kan tí o mọ̀, tí ó so mọ́ àsìkò òjò àti ẹ̀ẹ̀rùn rẹ̀. Fún ìrìn-àjò kọ̀ọ̀kan, kọ nǹkan méjì tí o máa wá.",
          youCanNow: "ṣètò ìrìn-àjò drone tí ó ń tọpa ewu ìparun ilẹ̀, omíyalé àti ọ̀gbẹlẹ̀, kí o sì wò bóyá àwọn ọ̀nà iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu ń ṣiṣẹ́.",
          quickCheck: [
            { objective: "O4", q: "Lẹ́yìn òjò ńlá, kí ni àwòrán gíga ilẹ̀ (elevation model) ń ṣèrànwọ́ láti fi hàn?", options: ["Àwọn màlúù tí ń ṣàìsàn", "Iye owó àgbàdo", "Ibi tí omi máa ṣàn sí nígbà tó ń bọ̀", "Irúgbìn tí a fọwọ́ sí"], answer: 2, why: "Àwòrán gíga ilẹ̀ ń fi bí ilẹ̀ ṣe ga tó hàn, nítorí náà o lè rí ibi tí omi máa ṣàn sí nígbà tó ń bọ̀." },
            { objective: "O4", q: "Lẹ́yìn ìjì ńlá, àwòrán-ilẹ̀ rẹ fi àwọn kòtò-omi hàn lórí ọ̀pọ̀ oko nínú ẹgbẹ́. Kí ni o máa ṣe?", options: ["Pín àwọn àwòrán-ilẹ̀ náà pẹ̀lú ẹgbẹ́ àgbẹ̀ àti àwọn òṣìṣẹ́ county tàbí ìpínlẹ̀", "Pa àwọn àwòrán-ilẹ̀ mọ́ fún ara rẹ", "Pa wọ́n rẹ́ nítorí ìjì ti kọjá", "Fò sórí oko tìrẹ nìkan nígbà míì"], answer: 0, why: "Àwòrán-ilẹ̀ tí a pín ń fi ibi tí ó yẹ kí gbogbo àwùjọ kọ́kọ́ gbé ìgbésẹ̀ hàn." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Àbójútó ẹran-ọ̀sìn àti pápá oko ẹran",
          minutes: 5,
          goal: "Ṣètò ìrìn-àjò drone tó dákẹ́ tí kò léwu láti ka ẹran, kí o sì wo pápá oko ẹran àti ibi omi.",
          text: [
            "Lórí oko ẹran ńlá àti agbègbè ìdaran ńlá, drone lè ka màlúù, ewúrẹ́ tàbí ràkúnmí, wá ẹran tí ó sọnù tàbí tí ń ṣàìsàn, kí ó sì wò bóyá ibi omi àti ọpọ́n omi ẹran ń ṣiṣẹ́, èyí sì ń dín ọ̀pọ̀ wákàtí ìrìn tàbí wíwakọ̀ kù. Kámẹ́rà ooru (thermal) ń rí ẹran ní òwúrọ̀ kùtùkùtù tàbí nínú igbó dídí.",
            "Drone lè dẹ́rù ba ẹranko, pàápàá nígbà tí ó bá fò ní ìsàlẹ̀. Fò ga tó kí o má baà dẹ́rù bà wọ́n, sún mọ́ wọn díẹ̀díẹ̀ láti ẹ̀gbẹ́, má ṣe fi drone lé ẹran tàbí kó wọn jọ láéláé àyàfi tí a ti kọ́ ọ tí a sì gbà á láàyè, kí o sì dúró tí wọ́n bá bẹ̀rẹ̀ sí sá. Béèrè lọ́wọ́ darandaran kí o tó fò.",
            "Àwòrán-ilẹ̀ pápá oko ẹran (NDVI tàbí àwọ̀) ń fi ibi tí koríko ti lágbára, tí ẹran ti jẹ ẹ́ jù, tàbí tí ilẹ̀ ti hó hàn. Ní gbogbo àsìkò, wọ́n ń ṣèrànwọ́ láti ṣètò ìjẹko ìyípo, kí a sì rí ilẹ̀ tí ó nílò ìsinmi. Má ṣe ya fídíò ènìyàn tàbí ilé láìgbàṣẹ láéláé."
          ],
          steps: ["Béèrè lọ́wọ́ darandaran tàbí olówó ẹran; ẹ fohùnṣọ̀kan lórí àkókò àti ibi.", "Fò ga kí o sì sún mọ́ wọn díẹ̀díẹ̀ láti ẹ̀gbẹ́.", "Ka ẹran láti inú fọ́tò, kì í ṣe nípa yíyí ká ní ìsàlẹ̀.", "Wo ibi omi, ọpọ́n omi ẹran àti ọgbà-ìsọ́ bí o ṣe ń lọ.", "Ya àwòrán-ilẹ̀ pápá oko ẹran: lágbára, jíjẹ jù, ilẹ̀ hó.", "Dúró tí àwọn ẹran bá bẹ̀rẹ̀ sí sá."],
          words: [["Ìjẹko ìyípo (rotational grazing)", "kíkó ẹran láti pápá kan sí òmíràn kí koríko lè sinmi kí ó sì tún hù."], ["Jíjẹ koríko jù (overgrazing)", "nígbà tí ẹran bá ń jẹ koríko yára ju bí ó ṣe lè tún hù lọ, tí ilẹ̀ sì ń hó."]],
          slides: [
            { title: "Ohun tí drone ń ṣe lórí oko ẹran", bullets: ["Ka ẹran, wá èyí tó sọnù tàbí tí ń ṣàìsàn", "Wo ibi omi àti ọpọ́n omi ẹran", "Thermal ní òwúrọ̀ kùtùkùtù tàbí nínú igbó dídí"] },
            { title: "Ìtọ́jú ẹranko lákọ̀ọ́kọ́", bullets: ["Béèrè lọ́wọ́ darandaran", "Fò ga, sún mọ́ wọn díẹ̀díẹ̀ láti ẹ̀gbẹ́", "Má ṣe lé wọn láéláé; dúró tí ẹran bá sá"] },
            { title: "Àwòrán-ilẹ̀ pápá oko ẹran", bullets: ["Koríko tó lágbára, tí a jẹ jù tàbí ilẹ̀ tó hó", "Ṣètò ìjẹko ìyípo", "Rí ilẹ̀ tí ó nílò ìsinmi"] }
          ],
          tryIt: "Kọ ètò ìrìn-àjò kúkúrú fún kíka màlúù 60 nínú pápá ẹran hẹ́kítà 40: àkókò ọjọ́, gíga, bí o ṣe máa sún mọ́ wọn, ohun míì tí o máa wò, àti ìgbà tí o máa dúró.",
          youCanNow: "ṣètò ìrìn-àjò drone tó dákẹ́ tí kò léwu lórí ẹran-ọ̀sìn àti pápá oko ẹran, kí o sì lò ó láti ṣèrànwọ́ fún ìpinnu ìjẹko.",
          quickCheck: [
            { objective: "O5", q: "Kí ni drone lè ṣe lórí oko ẹran?", options: ["Ka ẹran kí ó sì wò bóyá ibi omi àti ọpọ́n omi ẹran ń ṣiṣẹ́", "Kó màlúù wọ inú gbàgede ẹran (boma)", "Tọ́jú ẹran tí ń ṣàìsàn", "Fún wàrà màlúù"], answer: 0, why: "Drone lè ka ẹran, wá èyí tó sọnù tàbí tí ń ṣàìsàn, kí ó sì wo ibi omi, èyí sì ń dín ìrìn tàbí wíwakọ̀ kù." },
            { objective: "O5", q: "Darandaran kan ń da ewúrẹ́ lọ nítòsí ibi tí o fẹ́ fò drone sí. Kí ni o máa ṣe?", options: ["Fò ní ìsàlẹ̀ láti ya fọ́tò tí ó sún mọ́", "Lé àwọn ewúrẹ́ jọ sí ibì kan", "Kọ́kọ́ béèrè lọ́wọ́ darandaran, fò ga kí o sì sún mọ́ wọn díẹ̀díẹ̀ láti ẹ̀gbẹ́", "Fò kọjá lórí wọn tààrà kíákíá"], answer: 2, why: "Béèrè lọ́wọ́ darandaran, kí o sì fò ga àti díẹ̀díẹ̀ láti ẹ̀gbẹ́ kí ẹran má baà bẹ̀rù." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ṣíṣàyẹ̀wò ohun èlò ìkọ́lé oko",
          minutes: 5,
          goal: "Ṣàyẹ̀wò ìsédò, ojú-omi ìrigeson, ọgbà-ìsọ́, ilé ọ̀gbìn àti ilé ìkó-nǹkan-sí láti òfuurufú kí o sì kọ àkọsílẹ̀ àtúnṣe.",
          text: [
            "Ohun èlò ìkọ́lé oko wọ́n, ó sì rọrùn láti gbàgbé wọn títí wọ́n fi bàjẹ́. Ìrìn-àjò drone kúkúrú lè wo ògiri adágún omi tàbí ìsédò kékeré fún sísán àti jíjò omi, ojú-omi ìrigeson àti páìpù fún jíjò tàbí ìdènà, ọgbà-ìsọ́ ààlà fún ibi tí ó ti já, òrùlé àti àwọ̀n ilé ọ̀gbìn (greenhouse) fún ibi tí ó ti ya, àti òrùlé ilé ìkó-nǹkan-sí fún ìbàjẹ́.",
            "Fò díẹ̀díẹ̀ lẹ́gbẹ̀ẹ́ ohun èlò náà pẹ̀lú kámẹ́rà tí a dorí rẹ̀ kọ ẹ̀gbẹ́, kì í ṣe sísàlẹ̀ tààrà nìkan. Jìnnà sí wáyà iná mànàmáná àti ilé dáadáa, kí o sì dúró láàárín ìyọ̀ǹda rẹ. Ya fọ́tò ní àwọn ibi kan náà nígbà kọ̀ọ̀kan kí o lè fi wé ara wọn.",
            "Yí àwọn fọ́tò padà sí àkọsílẹ̀ àtúnṣe: nǹkan náà, ibi tí ó wà, ìṣòro, bí ó ṣe yára tó, àti ẹni tí yóò tún un ṣe. Tún fò lẹ́yìn àtúnṣe, àti ṣáájú òjò nígbà tí ìbàjẹ́ máa pa lára jù."
          ],
          steps: ["Kọ àwọn ohun èlò tí o máa wò àti ibi tí wọ́n wà.", "Fò díẹ̀díẹ̀ lẹ́gbẹ̀ẹ́ ọ̀kọ̀ọ̀kan pẹ̀lú kámẹ́rà tí a dorí rẹ̀ kọ ẹ̀gbẹ́.", "Ya fọ́tò ní àwọn ibi kan náà nígbà kọ̀ọ̀kan.", "Kọ àkọsílẹ̀ àtúnṣe: nǹkan, ibi, ìṣòro, bí ó ṣe yára tó, ẹni tí yóò tún un ṣe.", "Tún fò lẹ́yìn àtúnṣe àti ṣáájú òjò."],
          words: [["Adágún omi (water pan)", "adágún tí a gbẹ́ tí ó ń kó omi òjò jọ fún ẹran tàbí ìrigeson."], ["Jíjò omi (seepage)", "omi tí ń jò díẹ̀díẹ̀ gba inú ògiri ìsédò tàbí bèbè ojú-omi kọjá."]],
          slides: [
            { title: "Ohun tí o máa wò", bullets: ["Adágún omi àti ògiri ìsédò kékeré", "Ojú-omi ìrigeson àti páìpù", "Ọgbà-ìsọ́, òrùlé ilé ọ̀gbìn, òrùlé ilé ìkó-nǹkan-sí"] },
            { title: "Bí o ṣe máa fò", bullets: ["Díẹ̀díẹ̀ lẹ́gbẹ̀ẹ́ ohun èlò náà", "Kámẹ́rà tí a dorí rẹ̀ kọ ẹ̀gbẹ́, kì í ṣe sísàlẹ̀ tààrà nìkan", "Ibi kan náà fún fọ́tò nígbà kọ̀ọ̀kan"] },
            { title: "Yí fọ́tò padà sí àtúnṣe", bullets: ["Nǹkan, ibi, ìṣòro, bí ó ṣe yára tó, ẹni tí yóò ṣe é", "Tún fò lẹ́yìn àtúnṣe àti ṣáájú òjò"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò àbójútó rẹ fún gbogbo àsìkò ọ̀gbìn fún oko àdàlú kan: àwọn agbègbè àti ohun tí ọ̀kọ̀ọ̀kan máa gbà, ìrìn-àjò fún ohun ọ̀gbìn, ìrìn-àjò ojú-ọjọ́, ìrìn-àjò ẹran-ọ̀sìn àti pápá oko ẹran, ìrìn-àjò ohun èlò ìkọ́lé, ohun tí o máa wá nígbà kọ̀ọ̀kan, àti ìgbésẹ̀ tí ohun tí o bá rí lè mú wá.",
          youCanNow: "ṣàyẹ̀wò ohun èlò ìkọ́lé oko pẹ̀lú drone kí o sì ṣètò àbójútó gbogbo oko jákèjádò àsìkò ọ̀gbìn.",
          quickCheck: [
            { objective: "O6", q: "Ìṣòro wo ni ìrìn-àjò drone lè rí lórí ilé ọ̀gbìn (greenhouse)?", options: ["Iye owó tí a máa ta ohun ọ̀gbìn", "pH ilẹ̀", "Orúkọ kòkòrò kan", "Ibi tí ọ̀rá òrùlé tàbí àwọ̀n ti ya"], answer: 3, why: "Ìrìn-àjò drone lè fi ibi tí òrùlé àti àwọ̀n ilé ọ̀gbìn ti ya hàn kí ó tó burú sí i." },
            { objective: "O6", q: "Òjò máa bẹ̀rẹ̀ ní ọ̀sẹ̀ mẹ́ta, a sì tún ògiri adágún omi ṣe ní ọ̀sẹ̀ tó kọjá. Kí ni o máa ṣe?", options: ["Dúró títí òjò yóò fi kọjá", "Tún fò láti wo àtúnṣe náà ṣáájú òjò", "Má ṣe wò ó mọ́ láéláé", "Fò sísàlẹ̀ tààrà nìkan, ní òkè gíga lórí rẹ̀"], answer: 1, why: "Tún fò lẹ́yìn àtúnṣe àti ṣáájú òjò, nígbà tí ìbàjẹ́ máa pa lára jù." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ojú-ọjọ́, ẹran-ọ̀sìn àti ohun èlò ìkọ́lé oko",
        questions: [
          { objective: "O4", q: "Iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu ti FAO ní èrò mẹ́ta. Èwo ló jẹ́ ọ̀kan nínú wọn?", options: ["Ríran oko lọ́wọ́ láti mú ara bá ìyípadà mu kí ó sì lágbára sí i", "Lílo ajílẹ̀ tó pọ̀ jù tí ó ṣeé ṣe", "Gígé gbogbo igi lulẹ̀", "Gbígbin irú ohun ọ̀gbìn kan ṣoṣo"], answer: 0, why: "CSA ń fojú sí èso púpọ̀, mímú ara bá ìyípadà mu àti agbára, àti èéfín tó dín kù." },
          { objective: "O4", q: "Ìgbà wo ló dára fún ìrìn-àjò ojú-ọjọ́ láti rí kòtò-omi àti ibi tí omi gbá lọ?", options: ["Ní ọ̀gànjọ́ òru nìkan", "Láéláé", "Lẹ́yìn ìjì líle àkọ́kọ́ ti àsìkò", "Nígbà ìfihàn drone"], answer: 2, why: "Ìbàjẹ́ tuntun máa ń hàn kedere ní kété lẹ́yìn òjò ńlá." },
          { objective: "O5", q: "Màlúù bẹ̀rẹ̀ sí sá nígbà tí drone wà lókè wọn. O yẹ kí o:", options: ["Fò sísàlẹ̀ láti mú wọn balẹ̀", "Lé wọn padà", "Máa yí ká", "Dúró kí o sì gbé drone kúrò níbẹ̀"], answer: 3, why: "Ìtọ́jú ẹranko àti ààbò ló ṣáájú." },
          { objective: "O5", q: "Àwòrán-ilẹ̀ pápá oko ẹran fi pápá kan hàn tí ilẹ̀ rẹ̀ ti hó púpọ̀. Èyí fi hàn pé:", options: ["Wọ́n ti jẹ koríko jù; pápá náà lè nílò ìsinmi", "Drone ti bàjẹ́", "Òjò tó pọ̀ jù nìkan ni", "Pápá oko ẹran náà pé pérépéré"], answer: 0, why: "Ilẹ̀ tí ó hó nínú pápá oko ẹran sábà máa ń túmọ̀ sí pé ẹran jẹ ẹ́ yára ju bí koríko ṣe tún hù lọ." },
          { objective: "O6", q: "Nígbà tí o bá ń ṣàyẹ̀wò ògiri adágún omi, o yẹ kí o:", options: ["Fò sísàlẹ̀ tààrà nìkan, kíákíá gan-an", "Fò díẹ̀díẹ̀ lẹ́gbẹ̀ẹ́ rẹ̀ pẹ̀lú kámẹ́rà tí a dorí rẹ̀ kọ ẹ̀gbẹ́", "Fò lórí àwọn ènìyàn tí ó wà nítòsí", "Fò ó sílẹ̀"], answer: 1, why: "Kámẹ́rà tí a dorí rẹ̀ kọ ẹ̀gbẹ́ ń fi sísán àti jíjò omi lára ògiri hàn." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Drone fún Àbójútó Oko 4: Iṣẹ́ Àgbẹ̀ Aláìtàsé, Ojú-ọjọ́ àti Ẹran-ọ̀sìn",
    questions: [
      { objective: "O1", q: "Iṣẹ́ àgbẹ̀ aláìtàsé túmọ̀ sí:", options: ["Bíbójútó gbogbo apá oko lọ́nà kan náà", "Bíbójútó apá kọ̀ọ̀kan oko gẹ́gẹ́ bí ohun tí ó nílò", "Lílo drone nìkan", "Ṣíṣe iṣẹ́ oko ní òru"], answer: 1, why: "Ó ń mú ohun èlò àti iṣẹ́ bá ohun tí apá kọ̀ọ̀kan nílò mu." },
      { objective: "O1", q: "Kí ló dé tí ọ̀pọ̀ oko kò fi dọ́gba?", options: ["Drone ló ń mú wọn yàtọ̀", "Wọ́n dọ́gba", "Ilẹ̀, ìtẹ̀sí, omi, òjìji àti ìlò àtijọ́ yàtọ̀ síra", "Irúgbìn máa ń burú nígbà gbogbo"], answer: 2, why: "Ẹ̀dá àti ìtàn iṣẹ́ oko ń jẹ́ kí àwọn apá kan dàgbà dáadáa jù." },
      { objective: "O1", q: "Agbègbè mélòó ló sábà máa ń tó lórí oko kékeré?", options: ["Méjì sí mẹ́rin", "Àádọ́ta", "Ọgọ́rùn-ún", "Kò sí"], answer: 0, why: "Agbègbè díẹ̀ tó rọrùn ló rọrùn láti bójútó àti láti sàmì sí." },
      { objective: "O1", q: "Kí ló dé tí a fi ń sàmì sí agbègbè lórí ilẹ̀?", options: ["Láti ṣe oko lọ́ṣọ̀ọ́", "Òfin ní kí a lo èèkàn", "Láti lé ẹyẹ", "Kí àwọn òṣìṣẹ́ lè rí agbègbè kọ̀ọ̀kan kí wọ́n sì bójútó o"], answer: 3, why: "Àwọn òṣìṣẹ́ nílò láti rí ibi tí agbègbè kọ̀ọ̀kan ti bẹ̀rẹ̀ àti ibi tí ó parí sí." },
      { objective: "O2", q: "Oníye-yíyàtọ̀ (variable-rate) túmọ̀ sí:", options: ["Iye tó yàtọ̀ ní ibi tó yàtọ̀", "Iye kan náà níbi gbogbo", "Yíyí ìyára drone padà", "Yíyí iye owó ohun ọ̀gbìn padà"], answer: 0, why: "Iye máa ń yí padà ní agbègbè-agbègbè gẹ́gẹ́ bí àìní." },
      { objective: "O2", q: "Lórí oko kékeré, a lè ṣe oníye-yíyàtọ̀ nípa:", options: ["Ẹ̀rọ ńlá nìkan", "Àwọn òṣìṣẹ́ tí ń lo ajílẹ̀ tó pọ̀ tàbí tó kéré sí ihò kọ̀ọ̀kan gẹ́gẹ́ bí agbègbè", "Sátẹ́láìtì", "Kò ṣeé ṣe rárá"], answer: 1, why: "Èrò náà ń ṣiṣẹ́ pẹ̀lú ọwọ́ tí ìtọ́ni agbègbè bá yé." },
      { objective: "O2", q: "Agbègbè aláìlágbára lórí ilẹ̀ tí kò jìn, tí ó kún fún òkúta lè:", options: ["Nílò ajílẹ̀ ìlọ́po méjì nígbà gbogbo", "Jẹ́ ibi tó dára jù fún irúgbìn púpọ̀ sí i", "Má san ajílẹ̀ àfikún padà", "Nílò fífọ́n oògùn"], answer: 2, why: "Ilẹ̀ ló ń dí ìdàgbàsókè lọ́wọ́; ohun èlò àfikún lè ṣòfò." },
      { objective: "O2", q: "Ta ló gbọdọ̀ fọwọ́ sí fífi drone fọ́n oògùn apakòkòrò?", options: ["Ẹni tí ó ta drone nìkan", "Àgbẹ̀ nìkan", "Aládùúgbò nìkan", "Àjọ ìrìn-àjò òfuurufú àti àjọ tí ń ṣàkóso oògùn apakòkòrò"], answer: 3, why: "Òfin ìrìn-àjò òfuurufú àti ti oògùn apakòkòrò kan drone tí ń fọ́n oògùn." },
      { objective: "O3", q: "Iye ohun ọ̀gbìn tó hù (plant stand) ni:", options: ["Ohun ọ̀gbìn tó hù tí a fi wé ohun ọ̀gbìn tí a gbìn", "Gíga drone", "Àmì orúkọ oko", "Iye owó irúgbìn"], answer: 0, why: "Ó ń fi bí ohun ọ̀gbìn ṣe fìdí múlẹ̀ dáadáa tó hàn." },
      { objective: "O3", q: "O kà 40,000 ohun ọ̀gbìn àgbàdo lórí hẹ́kítà kan, iye tí a fojú sí sì jẹ́ nǹkan bí 53,000. Iye tó hù jẹ́ nǹkan bí:", options: ["Ìdá 25 nínú ọgọ́rùn-ún", "Ìdá 50 nínú ọgọ́rùn-ún", "Ìdá 75 nínú ọgọ́rùn-ún", "Ìdá 100 nínú ọgọ́rùn-ún"], answer: 2, why: "40,000 pín sí 53,000 jẹ́ nǹkan bí 0.75." },
      { objective: "O3", q: "Ìṣirò èso ní kùtùkùtù yẹ kí ó jẹ́:", options: ["Ìlérí pàtó", "Àṣírí", "Iye láti ibì kan dé ibòmíì tí ó lè yí padà", "Iye owó ẹ̀yáwó"], answer: 2, why: "Ojú-ọjọ́, kòkòrò àti àdánù máa ń yí èso ìkẹyìn padà." },
      { objective: "O4", q: "Èwo ni ọ̀nà iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu tí drone lè ṣèrànwọ́ láti tọpa?", options: ["Sísun pàǹtí oko", "Títúlẹ̀ láti òkè dé ìsàlẹ̀ òkè", "Gígé gbogbo igi lulẹ̀", "Ilẹ̀ onípele, mulch àti gbígbin igi"], answer: 3, why: "Àwòrán-ilẹ̀ ń fi hàn bóyá àwọn ọ̀nà wọ̀nyí ń ṣiṣẹ́ bí àkókò ti ń lọ." },
      { objective: "O4", q: "Nígbà ọ̀dá òjò, àwòrán-ilẹ̀ wo ló ń fi àwọn apá tí ó kọ́kọ́ gbẹ hàn?", options: ["Àwòrán-ilẹ̀ NDVI tàbí thermal", "Àwòrán-ilẹ̀ ọ̀nà", "Àkọsílẹ̀ iye owó", "Pátákó ìpolówó òjò"], answer: 0, why: "NDVI àti thermal ń fi agbára ohun ọ̀gbìn àti ìnira ooru hàn." },
      { objective: "O4", q: "Kí ló dé tí a fi ń fò sórí apá kan náà ní àwọn ọjọ́ tí a ti yàn?", options: ["Láti lo bátìrì púpọ̀ sí i", "Láti fi àwọn ìyípadà wé ara wọn bí àkókò ti ń lọ", "Nítorí drone nílò àṣà", "Láti ya fídíò àwọn aládùúgbò"], answer: 1, why: "Àwòrán-ilẹ̀ tí a tún ṣe ń fi bí nǹkan ṣe ń lọ àti èsì àwọn ìgbésẹ̀ hàn." },
      { objective: "O5", q: "Kí o tó fò drone sórí ẹran-ọ̀sìn, o yẹ kí o:", options: ["Fò ní ìsàlẹ̀ lórí agbo ẹran", "Lé ẹran jọ sí ibì kan", "Béèrè lọ́wọ́ darandaran kí ẹ sì fohùnṣọ̀kan lórí àkókò àti ibi", "Fò ní ìyára tó ga jù"], answer: 2, why: "Ìyọ̀ǹda àti sísún mọ́ wọn pẹ̀lú ìdákẹ́jẹ́ ń dáàbò bo ẹranko àti ènìyàn." },
      { objective: "O5", q: "Kámẹ́rà ooru (thermal) lórí oko ẹran ń ṣèrànwọ́ láti:", options: ["Mú koríko hù", "Tún ọgbà-ìsọ́ ṣe", "Ka àmì etí ẹran", "Rí ẹran ní òwúrọ̀ kùtùkùtù tàbí nínú igbó dídí"], answer: 3, why: "Ẹran máa ń hàn bí ibi tí ó gbóná." },
      { objective: "O5", q: "Ìjẹko ìyípo (rotational grazing) túmọ̀ sí:", options: ["Kíkó ẹran láti pápá kan sí òmíràn kí koríko lè tún hù", "Fífi ẹran sí ibì kan ṣoṣo ní gbogbo ọdún", "Jíjẹko ní òru nìkan", "Fífún wọn ní koríko gbígbẹ nìkan"], answer: 0, why: "Fífi pápá sílẹ̀ kí ó sinmi ń jẹ́ kí koríko padà bọ̀ sípò." },
      { objective: "O6", q: "Jíjò omi (seepage) lára ògiri ìsédò túmọ̀ sí:", options: ["Ẹja kún inú ìsédò", "Omi ń jò díẹ̀díẹ̀ gbà á kọjá", "Ògiri náà jẹ́ tuntun", "Òjò ń rọ̀"], answer: 1, why: "Jíjò omi lè sọ ògiri di aláìlágbára, ó sì yẹ kí a tún un ṣe." },
      { objective: "O6", q: "Àkọsílẹ̀ àtúnṣe ohun èlò ìkọ́lé tó dára ní:", options: ["Fọ́tò nìkan", "Irú drone", "Nǹkan náà, ibi, ìṣòro, bí ó ṣe yára tó àti ẹni tí yóò tún un ṣe", "Iye owó ọjà"], answer: 2, why: "Àlàyé tó yé ń jẹ́ kí àtúnṣe di ṣíṣe." },
      { objective: "O6", q: "Ìgbà wo ni àyẹ̀wò ohun èlò ìkọ́lé wúlò jù?", options: ["Láéláé", "Lẹ́yìn tí nǹkan bá ti bàjẹ́ nìkan", "Nígbà ìjì", "Ṣáájú òjò àti lẹ́yìn àtúnṣe"], answer: 3, why: "Títún ìṣòro ṣe ṣáájú òjò ń dènà ìbàjẹ́." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      2,
      4,
      7,
      8,
      9,
      11,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn nínú ètò náà ṣe kí o sì tún un wò.",
    criteria: [
      {
        name: "Àwọn agbègbè ìṣàkóso",
        objective: "O1",
        notYet: "Kò sí agbègbè, tàbí a ya agbègbè láti àwòrán-ilẹ̀ kan ṣoṣo láìsí ìdí.",
        meets: "Agbègbè méjì sí mẹ́rin tí ó ní orúkọ nínú oko pàtàkì, láti àwòrán-ilẹ̀ àti ìmọ̀ àgbẹ̀, pẹ̀lú bí a ṣe sàmì sí wọn.",
        exceeds: "Ó lo àwòrán-ilẹ̀ láti ọjọ́ tàbí àsìkò tó ju ọ̀kan lọ."
      },
      {
        name: "Ohun tí agbègbè kọ̀ọ̀kan máa gbà",
        objective: "O2",
        notYet: "Gbogbo agbègbè ń gba ìtọ́jú kan náà, tàbí a ṣètò fífi drone fọ́n oògùn láìsí ìyọ̀ǹda.",
        meets: "Agbègbè kọ̀ọ̀kan ní ìgbésẹ̀ tí ó bá ohun tó fa á mu: irúgbìn, ajílẹ̀, òṣìṣẹ́ tàbí àtúnṣe.",
        exceeds: "Ó ní àyẹ̀wò iye ohun ọ̀gbìn tó hù àti iye èso ìfojúdíwọ̀n ní agbègbè-agbègbè."
      },
      {
        name: "Ìrìn-àjò ojú-ọjọ́",
        objective: "O4",
        notYet: "Kò sí ìrìn-àjò fún ojú-ọjọ́ tàbí àyíká.",
        meets: "Ìrìn-àjò ní àwọn ọjọ́ tí a ti yàn láti wo ìparun ilẹ̀, omíyalé àti ọ̀gbẹlẹ̀, àti ohun tí ohun tí a bá rí máa yọrí sí.",
        exceeds: "Ó tọpa ọ̀nà iṣẹ́ àgbẹ̀ tó bá ojú-ọjọ́ mu kan bí ilẹ̀ onípele tàbí mulch jákèjádò àsìkò."
      },
      {
        name: "Ẹran-ọ̀sìn àti pápá oko ẹran",
        objective: "O5",
        notYet: "Kò sí ìrìn-àjò fún ẹran-ọ̀sìn, tàbí ìrìn-àjò tí ó máa dẹ́rù ba ẹranko.",
        meets: "Ìrìn-àjò láti ka ẹran kí a sì wo pápá oko ẹran àti ibi omi, pẹ̀lú ìfohùnṣọ̀kan darandaran àti gíga tí kò léwu.",
        exceeds: "Ó so àwòrán-ilẹ̀ pápá oko ẹran mọ́ ètò ìjẹko ìyípo."
      },
      {
        name: "Ohun èlò ìkọ́lé oko",
        objective: "O6",
        notYet: "Ìsédò, ọgbà-ìsọ́ tàbí àwọn ohun èlò míì kò sí nínú rẹ̀.",
        meets: "Ìrìn-àjò láti ṣàyẹ̀wò adágún omi, ọgbà-ìsọ́ àti àwọn ohun èlò míì, pẹ̀lú ìlànà àkọsílẹ̀ àtúnṣe.",
        exceeds: "Ó ṣètò àkókò rẹ̀ ṣáájú òjò àti lẹ́yìn àtúnṣe, pẹ̀lú fọ́tò láti àwọn ibi kan náà."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric ètò àbójútó",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn ń ṣàkóso oko ní agbègbè-agbègbè tàbí ń tẹ̀lé ètò àbójútó àsìkò láàárín àsìkò ọ̀gbìn kan (ìwádìí àtẹ̀lé)",
      "Àwọn oko tàbí ẹgbẹ́ tí wọ́n ròyìn pé àwọn tètè gbé ìgbésẹ̀ lórí ìparun ilẹ̀, ọ̀gbẹlẹ̀, jíjẹ koríko jù tàbí ìbàjẹ́ ohun èlò ìkọ́lé",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n tẹ̀síwájú sí Ẹ̀kọ́ 5 nínú ọ̀wọ́ ẹ̀kọ́ drone"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Àwòrán-ilẹ̀ drone ti oko gidi, tàbí oko àdàlú àpẹẹrẹ ti ẹ̀kọ́ náà",
      "Fóònù tí ó ní GPS, àti èèkàn tàbí àsíá láti sàmì sí àwọn agbègbè",
      "Ìwé àkọsílẹ̀ tàbí spreadsheet fún tábìlì agbègbè àti ètò àsìkò",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú, pẹ̀lú àkókò láti kọ ètò àbójútó"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ ya àwọn agbègbè lórí àwòrán-ilẹ̀ àpẹẹrẹ kan gẹ́gẹ́ bí ẹgbẹ́ kí àwọn akẹ́kọ̀ọ́ tó ya tiwọn.",
      "Mú iye èso tí a retí ní àdúgbò àti ìmọ̀ràn ajílẹ̀ wá láti ọ̀dọ̀ òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀; má ṣe sọ iye ìlò fúnra rẹ.",
      "Má ṣe ṣètò tàbí ṣàfihàn fífi drone fọ́n oògùn láìsí ìyọ̀ǹda ìrìn-àjò òfuurufú àti ti oògùn apakòkòrò.",
      "Tí ẹ bá ń fò nítòsí ẹran-ọ̀sìn, kọ́kọ́ béèrè lọ́wọ́ darandaran, fò ga, kí o sì dúró tí ẹran bá bẹ̀rẹ̀ sí sá.",
      "Fi rubric ṣe àmì fún ètò àbójútó, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};

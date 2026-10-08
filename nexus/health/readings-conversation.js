"use strict";

// Health readings by voice or chat, as a short conversation with the person: they say a reading, Kyro reads back what it understood (the value, the unit and the date) and
// asks whether to save it, and only a yes saves it. The same conversation shows the saved readings (blood pressure and blood sugar apart), deletes or corrects the last one
// after asking, deletes all of a person's readings only after an explicit, counted confirmation, and answers honestly about who can see them and about sharing them.
//
// What this does NOT do: it never decides what a number means. The limits and the guidance wording stay in server/providers/bloodPressure.js and bloodGlucose.js, and the
// replies after a save are those same texts, unchanged. Anything impossible or unclear is asked about, never saved, and a reply never says "saved" unless the store holds it.
//
// Used by the voice tools (nexus_general_conversation, nexus_health_preparation) and by the older command route, all through healthReadingsTurn() below. Readings the AI planner saved live in the
// Postgres record store instead of db.profile; health/store-readings.js lays them over this conversation for one turn so they are shown, deleted and corrected by this same code.
// The Kiswahili here is a first draft and must be checked by a fluent speaker; the wording of anything new about medicines or sharing must be checked by a clinician.

const crypto = require("node:crypto");
const providers = require("../../server/providers/index.js");
const { scopeHealthDb } = require("../../server/providers/healthRecordScope.js");
const bpLib = require("../../server/providers/bloodPressure.js");
const glucoseLib = require("../../server/providers/bloodGlucose.js");
const { parseReading, parseHealthIntent, isYes, isNo, isDeleteConfirmed, isSwahili, prepare } = require("./vitals-speech.js");
const { DEFAULT_TIME_ZONE } = require("../brief/compose.js");

const PENDING_MS = 10 * 60 * 1000;
const CONTEXT_MS = 30 * 60 * 1000;
const STORE_KEY = "nexusHealthVoicePending";
const CHRONIC = "nexusChronicDiseaseReadings";
const RPM = "nexusRpmDeviceReadings";

// ---------------------------------------------------------------- words, in English and Kiswahili

const SW_MONTHS = { January: "Januari", February: "Februari", March: "Machi", April: "Aprili", May: "Mei", June: "Juni", July: "Julai", August: "Agosti", September: "Septemba", October: "Oktoba", November: "Novemba", December: "Desemba" };
const dateForLanguage = (dateText, lang) => (lang === "sw" ? String(dateText).replace(/[A-Z][a-z]+/, month => SW_MONTHS[month] || month) : dateText);

const LABEL = {
  en: { bp: "blood pressure", glucose: "blood sugar", weight: "weight", pulse: "pulse", temperature: "temperature", oxygen: "oxygen saturation" },
  sw: { bp: "shinikizo la damu", glucose: "sukari ya damu", weight: "uzito", pulse: "mapigo ya moyo", temperature: "joto la mwili", oxygen: "kiwango cha oksijeni" }
};
// A stored reading reads "150 over 95"; in Kiswahili it is said "150 juu ya 95".
const loc = (text, lang) => (lang === "sw" ? String(text).replace(" over ", " juu ya ") : text);
const label = (type, lang) => (LABEL[lang] || LABEL.en)[type] || "health";
const YOUR_SW = { bp: "shinikizo lako la damu", glucose: "sukari yako", weight: "uzito wako", pulse: "mapigo yako ya moyo", temperature: "joto lako la mwili", oxygen: "kiwango chako cha oksijeni" };
const GLUCOSE_UNIT_WORDS = { en: { "mmol/L": "millimoles per litre", "mg/dL": "milligrams per decilitre" }, sw: { "mmol/L": "mmol kwa lita", "mg/dL": "mg kwa dL" } };

const SAY = {
  en: {
    restricted: "This account type cannot use that action here. Sign in with a full account to continue.",
    askSave: "Shall I save it? Say yes to save it, or no if that is not right.",
    readBack: (what, date) => `I heard your ${what}, for ${date}.`,
    discarded: "Okay, I have not saved anything. Tell me the reading again whenever you are ready.",
    severalReadings: (names, example) => `You gave me ${names.length} readings (${names.join(" and ")}). I save one reading at a time so each is checked on its own, and nothing has been saved yet. Say, for example, "${example}", and then the next one.`,
    needBothNumbers: "I could not tell both numbers of that blood pressure, so I did not save anything. Please say it again, for example: my blood pressure is 120 over 80.",
    wholeNumbers: (s, d) => `I heard ${s} over ${d}, but a blood pressure is two whole numbers, so I did not save it. Please say it again, for example: my blood pressure is 120 over 80.`,
    twoNumbers: (type, said) => `I heard more than one number for your ${type} (${said}), so I did not save anything. Please say just the one reading, for example: ${type === "blood sugar" ? "my blood sugar is 7.2 mmol" : `my ${type} is ...`}.`,
    notRead: type => `I could not read that ${type} reading properly, so I did not save anything. Please say it again slowly.`,
    weightUnit: value => `I heard your weight as ${value}, but not whether that is in kilograms or pounds, so I did not save it. Please say it again with the unit, for example: my weight is 68 kg.`,
    weightImpossible: (value, unit) => `I heard ${value} ${unit}, but that does not sound like a real body weight, so I did not save it. Please check the scale and say it again, for example: my weight is 68 kg.`,
    pulseImpossible: value => `I heard a pulse of ${value}, but that does not sound like a real pulse, so I did not save it. Please check and say it again, for example: my pulse is 78.`,
    oxygenImpossible: value => `I heard an oxygen level of ${value}, but that does not sound like a real reading, so I did not save it. Please check the device and say it again, for example: my oxygen is 96.`,
    temperatureImpossible: (value, unit) => `I did not save this: ${value}${unit ? ` ${unit}` : ""} cannot be a real body temperature (about 30 to 45 in Celsius, or 70 to 115 in Fahrenheit). Please check the thermometer and tell me again, for example "my temperature is 37.5 C".`,
    saved: { other: (name, display) => `I saved the ${name} reading ${display} to your remote monitoring record for provider review. This is not a diagnosis, alert, or device connection. Seek urgent medical help now for severe symptoms.` },
    notSavedOther: (name, display) => `I noted the ${name} reading ${display}, but saving it to your monitoring record is unavailable right now.`,
    // reading history
    noneAny: "I don't have any saved health readings yet. Tell me a reading to start tracking your history, for example: my blood pressure is 120 over 80.",
    noneType: type => `I don't have any saved ${type} readings yet. Tell me a ${type} reading to start tracking your history.`,
    lastOne: (type, text, date) => `Your last ${type} reading was ${text}${date ? `, on ${date}` : ""}.`,
    historyIntro: (type, n, shown) => `You have ${n} saved ${type} reading${n === 1 ? "" : "s"}${shown < n ? `; the latest ${shown} are` : ""}:`,
    historyClose: "This is your saved history, not a diagnosis or trend interpretation -- discuss patterns with a qualified healthcare professional.",
    on: date => ` on ${date}`,
    // delete and correct
    nothingToDelete: "You have no saved health readings to delete.",
    nothingToDeleteType: type => `You have no saved ${type} readings to delete.`,
    askDeleteLast: (type, text, date) => `Your last ${type} reading was ${text}${date ? `, from ${date}` : ""}. Shall I delete it? Say yes to delete it, or no to keep it.`,
    deletedLast: (type, text, date) => `Done. I deleted your ${type} reading ${text}${date ? ` from ${date}` : ""}. Nothing else was changed.`,
    couldNotFind: "I could not find that reading any more, so nothing was deleted or changed.",
    keepIt: "Okay, I have not deleted anything. Your readings are as they were.",
    askDeleteAll: (n, parts, scope) => `Deleting ${scope} is permanent and cannot be undone. You have ${n} saved reading${n === 1 ? "" : "s"}${parts ? ` (${parts})` : ""}. I would delete only your own readings, nothing else, and nobody else's. To confirm, say "yes, delete all ${n}". Say no to keep them.`,
    deleteAllNeedsWords: n => `Because this cannot be undone, please say the full words: "yes, delete all ${n}". Or say no to keep your readings.`,
    deletedAll: (n, scope) => `Done. I deleted ${n} ${scope === "all" ? "health reading" : `${scope} reading`}${n === 1 ? "" : "s"} from your account. Nothing else was changed.`,
    nothingToDeleteAll: "You have no saved health readings to delete.",
    wrongAsk: "No problem. Do you want me to delete your last reading, or change it? Say \"delete my last reading\", or tell me the right numbers, for example \"it was 133 over 78\".",
    nothingToChange: (type, example) => `I don't have a saved ${type} reading to change. If you want to save it as a new reading, say, for example: ${example}.`,
    whichReading: "Which reading do you want to change? Say, for example, \"my blood pressure was actually 133 over 78\".",
    askChange: (type, oldText, newText, date) => `Your last ${type} reading was ${oldText}${date ? `, from ${date}` : ""}. Change it to ${newText}? Say yes to change it, or no to leave it as it is.`,
    changed: (type, oldText, newText) => `Done. I changed your ${type} reading from ${oldText} to ${newText}.`,
    leftAsIs: "Okay, I have left your reading as it was.",
    // privacy and sharing
    whoSees: "Your health readings are saved under your own account, and other people who sign in do not see them. I do not send them to anyone, and nobody has been contacted. The platform Admin and Provider Reviewer accounts can see health records held on the system as part of their work, so ask the platform admin if you want to know more about access. To remove your readings, say \"delete all my health records\".",
    share: "I can't send your readings to a nurse or a doctor from here, and I have not contacted anyone. What I can do is read them out so you can show or tell your nurse or doctor: say \"show my blood pressure readings\" or \"show my sugar readings\".",
    // medicines
    medicineMissed: "Thank you for telling me. I can't tell you whether to take it late or leave it: please ask your pharmacist or clinic, and don't double up the next dose unless they say so. I have not saved anything about this dose.",
    medicineRunningOut: "Thank you for telling me. Please contact your clinic or pharmacy about getting more before you run out. Continue any medication your provider has already given you, exactly as directed. I can't change or advise on doses.",
    medicineStopped: bpToo => `I can't advise on stopping a medicine. Please speak to your health worker or pharmacist, and make sure your clinician or pharmacist knows you are no longer taking it.${bpToo ? " High blood pressure often causes no symptoms, so regular monitoring matters even when you feel fine." : ""}`
  },
  sw: {
    restricted: "Aina hii ya akaunti haiwezi kutumia kitendo hicho hapa. Ingia kwa akaunti kamili ili uendelee.",
    askSave: "Nikihifadhi? Sema ndiyo nikihifadhi, au hapana kama si sahihi.",
    readBack: (what, date) => `Nimesikia ${what}, la tarehe ${date}.`,
    discarded: "Sawa, sijahifadhi chochote. Niambie kipimo tena ukiwa tayari.",
    severalReadings: (names, example) => `Umenipa vipimo ${names.length} (${names.join(" na ")}). Ninahifadhi kipimo kimoja kwa wakati mmoja ili kila kimoja kikaguliwe, na bado sijahifadhi chochote. Sema, kwa mfano, "${example}", kisha kinachofuata.`,
    needBothNumbers: "Sikuweza kupata namba zote mbili za shinikizo la damu, kwa hivyo sijahifadhi chochote. Tafadhali sema tena, kwa mfano: shinikizo langu la damu ni 120 juu ya 80.",
    wholeNumbers: (s, d) => `Nimesikia ${s} juu ya ${d}, lakini shinikizo la damu ni namba mbili kamili, kwa hivyo sijakihifadhi. Tafadhali sema tena, kwa mfano: shinikizo langu la damu ni 120 juu ya 80.`,
    twoNumbers: (type, said) => `Nimesikia namba zaidi ya moja kwa ${type} yako (${said}), kwa hivyo sijahifadhi chochote. Tafadhali sema kipimo kimoja tu, kwa mfano: ${type === "sukari ya damu" ? "sukari yangu ni 7.2 mmol" : `${type} yangu ni ...`}.`,
    notRead: type => `Sikuweza kusoma kipimo hicho cha ${type} vizuri, kwa hivyo sijahifadhi chochote. Tafadhali sema tena polepole.`,
    weightUnit: value => `Nimesikia uzito wako ni ${value}, lakini sijui kama ni kilo au pauni, kwa hivyo sijakihifadhi. Tafadhali sema tena pamoja na kipimo, kwa mfano: uzito wangu ni kilo 68.`,
    weightImpossible: (value, unit) => `Nimesikia ${value} ${unit}, lakini hiyo haionekani kuwa uzito halisi wa mwili, kwa hivyo sijakihifadhi. Tafadhali angalia mizani na useme tena, kwa mfano: uzito wangu ni kilo 68.`,
    pulseImpossible: value => `Nimesikia mapigo ya moyo ${value}, lakini hayaonekani kuwa halisi, kwa hivyo sijakihifadhi. Tafadhali angalia na useme tena, kwa mfano: mapigo yangu ni 78.`,
    oxygenImpossible: value => `Nimesikia kiwango cha oksijeni ${value}, lakini hakionekani kuwa kipimo halisi, kwa hivyo sijakihifadhi. Tafadhali angalia kifaa na useme tena, kwa mfano: oksijeni yangu ni 96.`,
    temperatureImpossible: (value, unit) => `Sijakihifadhi: ${value}${unit ? ` ${unit}` : ""} haiwezi kuwa joto halisi la mwili (takriban 30 hadi 45 kwa Selsiasi, au 70 hadi 115 kwa Fahrenheit). Tafadhali angalia kipima joto na uniambie tena, kwa mfano "joto langu ni 37.5 C".`,
    saved: { other: (name, display) => `Nimehifadhi kipimo cha ${name} ${display} kwenye rekodi yako ya ufuatiliaji ili mtoa huduma akikague. Hii si uchunguzi wa ugonjwa, tahadhari, wala muunganisho wa kifaa. Tafuta msaada wa dharura mara moja ukiwa na dalili kali.` },
    notSavedOther: (name, display) => `Nimeandika kipimo cha ${name} ${display}, lakini kukihifadhi kwenye rekodi yako ya ufuatiliaji hakupatikani kwa sasa.`,
    noneAny: "Sina vipimo vya afya vilivyohifadhiwa bado. Niambie kipimo ili uanze kufuatilia historia yako, kwa mfano: shinikizo langu la damu ni 120 juu ya 80.",
    noneType: type => `Sina vipimo vya ${type} vilivyohifadhiwa bado. Niambie kipimo cha ${type} ili uanze kufuatilia historia yako.`,
    lastOne: (type, text, date) => `Kipimo chako cha mwisho cha ${type} kilikuwa ${text}${date ? `, tarehe ${date}` : ""}.`,
    historyIntro: (type, n, shown) => `Una vipimo ${n} vya ${type} vilivyohifadhiwa${shown < n ? `; vya karibuni ${shown} ni` : ""}:`,
    historyClose: "Hii ni historia yako uliyohifadhi, si uchunguzi wa ugonjwa wala tafsiri ya mwenendo -- zungumza na mtaalamu wa afya kuhusu mwenendo wa vipimo.",
    on: date => ` tarehe ${date}`,
    nothingToDelete: "Huna vipimo vya afya vilivyohifadhiwa vya kufuta.",
    nothingToDeleteType: type => `Huna vipimo vya ${type} vilivyohifadhiwa vya kufuta.`,
    askDeleteLast: (type, text, date) => `Kipimo chako cha mwisho cha ${type} kilikuwa ${text}${date ? `, cha tarehe ${date}` : ""}. Nikifute? Sema ndiyo nikifute, au hapana nikiache.`,
    deletedLast: (type, text, date) => `Nimemaliza. Nimefuta kipimo chako cha ${type} ${text}${date ? ` cha tarehe ${date}` : ""}. Hakuna kingine kilichobadilishwa.`,
    couldNotFind: "Sikuweza kukipata kipimo hicho tena, kwa hivyo hakuna kilichofutwa wala kubadilishwa.",
    keepIt: "Sawa, sijafuta chochote. Vipimo vyako viko kama vilivyokuwa.",
    askDeleteAll: (n, parts, scope) => `Kufuta ${scope} ni kwa kudumu na hakuwezi kurudishwa. Una vipimo ${n} vilivyohifadhiwa${parts ? ` (${parts})` : ""}. Ningefuta vipimo vyako tu, hakuna kingine, wala vya mtu mwingine. Kuthibitisha, sema "ndiyo, futa zote ${n}". Sema hapana ukitaka kuviweka.`,
    deleteAllNeedsWords: n => `Kwa kuwa hili halirudishwi, tafadhali sema maneno kamili: "ndiyo, futa zote ${n}". Au sema hapana uviweke vipimo vyako.`,
    deletedAll: (n, scope) => `Nimemaliza. Nimefuta vipimo ${n}${scope === "all" ? " vya afya" : ` vya ${scope}`} kutoka akaunti yako. Hakuna kingine kilichobadilishwa.`,
    nothingToDeleteAll: "Huna vipimo vya afya vilivyohifadhiwa vya kufuta.",
    wrongAsk: "Hakuna shida. Unataka nifute kipimo chako cha mwisho, au nikibadilishe? Sema \"futa kipimo cha mwisho\", au niambie namba sahihi, kwa mfano \"ilikuwa 133 juu ya 78\".",
    nothingToChange: (type, example) => `Sina kipimo cha ${type} kilichohifadhiwa cha kubadilisha. Ukitaka kukihifadhi kama kipimo kipya, sema kwa mfano: ${example}.`,
    whichReading: "Ni kipimo kipi unataka kubadilisha? Sema kwa mfano \"shinikizo langu la damu lilikuwa 133 juu ya 78\".",
    askChange: (type, oldText, newText, date) => `Kipimo chako cha mwisho cha ${type} kilikuwa ${oldText}${date ? `, cha tarehe ${date}` : ""}. Nikibadilishe kiwe ${newText}? Sema ndiyo nikibadilishe, au hapana nikiache kama kilivyo.`,
    changed: (type, oldText, newText) => `Nimemaliza. Nimebadilisha kipimo chako cha ${type} kutoka ${oldText} kuwa ${newText}.`,
    leftAsIs: "Sawa, nimekiacha kipimo chako kama kilivyokuwa.",
    whoSees: "Vipimo vyako vya afya vimehifadhiwa kwenye akaunti yako mwenyewe, na watu wengine wanaoingia hawavioni. Sivitumi kwa mtu yeyote, na hakuna aliyewasiliwa. Akaunti za Msimamizi wa jukwaa na Mkaguzi wa Watoa Huduma zinaweza kuona rekodi za afya zilizo kwenye mfumo kama sehemu ya kazi yao, kwa hivyo muulize msimamizi wa jukwaa ukitaka kujua zaidi kuhusu ufikiaji. Kuondoa vipimo vyako, sema \"futa taarifa zangu zote za afya\".",
    share: "Siwezi kutuma vipimo vyako kwa nesi au daktari kutoka hapa, na sijawasiliana na mtu yeyote. Ninachoweza ni kuvisoma kwa sauti ili uvionyeshe au uvisome kwa nesi au daktari wako: sema \"nionyeshe vipimo vyangu vya presha\" au \"nionyeshe vipimo vyangu vya sukari\".",
    medicineMissed: "Asante kwa kuniambia. Siwezi kukuambia kama unywe dawa hiyo kwa kuchelewa au uiache: tafadhali muulize mfamasia au kliniki, na usiongeze dozi mara mbili inayofuata isipokuwa waseme. Sijahifadhi chochote kuhusu dozi hii.",
    medicineRunningOut: "Asante kwa kuniambia. Tafadhali wasiliana na kliniki au famasia yako upate dawa zaidi kabla hazijaisha. Endelea kutumia dawa ulizopewa na mtoa huduma wako kama ulivyoelekezwa. Siwezi kubadilisha wala kushauri kuhusu dozi.",
    medicineStopped: bpToo => `Siwezi kushauri kuhusu kuacha dawa. Tafadhali zungumza na mhudumu wa afya au mfamasia wako, na hakikisha daktari au mfamasia wako anajua kuwa umeacha kuitumia.${bpToo ? " Shinikizo la damu la juu mara nyingi halina dalili, kwa hivyo kupima mara kwa mara ni muhimu hata ukijisikia vizuri." : ""}`
  }
};
const say = lang => SAY[lang] || SAY.en;

// What is said after a reading is SAVED. English is the existing wording, unchanged (bloodPressure.js / bloodGlucose.js). The Kiswahili is a draft of the same guidance and must be
// checked by a fluent speaker and a clinician.
const SW_SAVED = {
  bp: (s, d) => `Nimehifadhi kipimo cha shinikizo la damu ${s} juu ya ${d} kwenye rekodi yako ya huduma ya magonjwa sugu ili wewe na mtoa huduma mfuatilie mwenendo. Kipimo kimoja hakithibitishi ugonjwa. Pumzika kimya na ufuate maelekezo ya kifaa, kisha zungumza na mtaalamu wa afya kama vipimo vya juu vinajirudia. Tafuta msaada wa dharura mara moja ukipata maumivu ya kifua, kupumua kwa shida, kuzimia, udhaifu mpya, kuchanganyikiwa, au maumivu makali ya ghafla ya kichwa.`,
  bpUrgent: (s, d, symptoms) => `Nimehifadhi kipimo ${s} juu ya ${d}. Hiki ni kipimo cha juu sana. ${symptoms ? "Kwa kuwa pia unataja dalili, tafuta msaada wa dharura sasa. Piga namba ya dharura ya nchi yako au nenda kliniki au hospitali iliyo karibu. Usisubiri." : "Ukipata maumivu ya kifua, shida ya kupumua, maumivu makali ya kichwa, udhaifu au ganzi, kuchanganyikiwa, shida ya kuongea, au mabadiliko ya macho, tafuta msaada wa dharura sasa: piga namba ya dharura ya nchi yako au nenda kliniki iliyo karibu."} Ukijisikia vizuri, kaa kimya kwa dakika tano kisha pima tena. Ikiwa bado ni juu hivi, wasiliana na kliniki au mhudumu wa afya leo. Siwezi kugundua ugonjwa; haya ni maelezo ya jumla ya usalama.`,
  bpLow: "Hicho ni chini kuliko kipimo cha kawaida cha watu wengi. Ukihisi kizunguzungu, kuzimia au huna raha, kaa au lala chini na utafute msaada wa kitabibu.",
  glucose: shown => `Nimehifadhi kipimo cha sukari ya damu ${shown} kwenye rekodi yako ya huduma ya magonjwa sugu ili wewe na mtoa huduma mfuatilie mwenendo. Kipimo kimoja hakithibitishi ugonjwa. Tafuta msaada wa dharura mara moja ukipata kuchanganyikiwa sana, kupoteza fahamu, au dalili za sukari ya chini au ya juu sana.`,
  glucoseVeryLow: shown => `Nimehifadhi kipimo ${shown}. Hii ni sukari ya chini sana. Ukihisi kutetemeka, kutokwa jasho, kuchanganyikiwa, usingizi mwingi au kuzimia, tafuta msaada wa dharura sasa: piga namba ya dharura ya nchi yako au nenda kliniki iliyo karibu, na usiwe peke yako. Fuata mpango ambao kliniki yako ilikupa. Siwezi kutoa ushauri wa matibabu wala kugundua ugonjwa; haya ni maelezo ya jumla ya usalama.`,
  glucoseLow: shown => `Nimehifadhi kipimo ${shown}. Hii ni chini kuliko kawaida. Ukihisi kutetemeka, kutokwa jasho, kuchanganyikiwa au kuzimia, tafuta msaada sasa na usiwe peke yako. Fuata mpango ambao kliniki yako ilikupa na wasiliana na kliniki yako leo. Siwezi kutoa ushauri wa matibabu wala kugundua ugonjwa.`,
  glucoseVeryHigh: (shown, symptoms) => `Nimehifadhi kipimo ${shown}. Hii ni sukari ya juu sana. ${symptoms ? "Kwa kuwa pia unataja dalili, tafuta msaada wa dharura sasa. Piga namba ya dharura ya nchi yako au nenda kliniki au hospitali iliyo karibu. Usisubiri." : "Ukipata kutapika, maumivu ya tumbo, kupumua haraka, kuchanganyikiwa, usingizi mwingi au kiu kali, tafuta msaada wa dharura sasa: piga namba ya dharura ya nchi yako au nenda kliniki iliyo karibu."} Ukijisikia vizuri, pima tena baada ya muda mfupi na wasiliana na kliniki yako leo. Siwezi kutoa ushauri wa matibabu wala kugundua ugonjwa; haya ni maelezo ya jumla ya usalama.`,
  notSavedBp: (s, d) => `Nimeandika kipimo cha shinikizo la damu ${s} juu ya ${d}, lakini kukihifadhi kwenye rekodi yako hakupatikani kwa sasa. Kipimo kimoja hakithibitishi ugonjwa. Zungumza na mtaalamu wa afya kama vipimo vya juu vinajirudia.`,
  notSavedGlucose: shown => `Nimeandika kipimo cha sukari ya damu ${shown}, lakini kukihifadhi kwenye rekodi yako hakupatikani kwa sasa.`,
  invalidBp: (s, d) => `Nimesikia ${s} juu ya ${d}, lakini hiyo haionekani kuwa kipimo halisi cha shinikizo la damu, kwa hivyo sijakihifadhi. Tafadhali angalia namba kwenye kifaa chako na uzitaje tena, kwa mfano: shinikizo langu la damu ni 120 juu ya 80.`,
  invalidGlucose: value => `Nimesikia ${value}, lakini hiyo haionekani kuwa kipimo halisi cha sukari, kwa hivyo sijakihifadhi. Tafadhali angalia kifaa chako na ukitaje tena pamoja na kipimo, kwa mfano: sukari yangu ni 7 mmol, au sukari yangu ni 130 mg kwa dL.`,
  ambiguousGlucose: value => `Nimesikia ${value}, lakini sina uhakika kama ni mmol kwa lita au mg kwa dL, kwa hivyo sijakihifadhi. Tafadhali kitaje tena pamoja na kipimo, kwa mfano: sukari yangu ni ${value} mmol, au sukari yangu ni ${value} mg kwa dL.`
};

// ---------------------------------------------------------------- state: what Kyro last asked, kept per person and only for a few minutes

const ownerOf = user => String(user?.id || user?.email || "anonymous");
const recordsOf = (healthDb, key) => (Array.isArray(healthDb.profile[key]) ? healthDb.profile[key] : []);

function readState(healthDb, now) {
  const record = recordsOf(healthDb, STORE_KEY)[0] || null;
  if (!record) return { pending: null, context: false, lastType: null };
  const at = Date.parse(record.at || "") || 0;
  const context = now.getTime() - at < CONTEXT_MS;
  const pending = record.kind && record.kind !== "context" && (Date.parse(record.expiresAt || "") || 0) > now.getTime() ? record : null;
  return { pending, context, lastType: context ? record.lastType || null : null };
}
function writeState(healthDb, now, { kind = "context", payload = null, lang = "en", lastType = null } = {}) {
  healthDb.profile[STORE_KEY] = [{ id: crypto.randomUUID(), kind, payload, lang, lastType, at: now.toISOString(), expiresAt: new Date(now.getTime() + PENDING_MS).toISOString() }];
}

// ---------------------------------------------------------------- the readings a person has saved, as one list

const isNum = value => typeof value === "number" && Number.isFinite(value);
function unitSuffix(unit) { return unit && unit !== "unknown" ? ` ${unit}` : ""; }

// What kind(s) of reading a stored record holds, with how it reads aloud: [{ type, text }]
function partsOfRecord(record, store) {
  const parts = [];
  if (store === CHRONIC) {
    if (isNum(record.systolic) && isNum(record.diastolic)) parts.push({ type: "bp", text: `${record.systolic} over ${record.diastolic}` });
    if (isNum(record.glucose)) parts.push({ type: "glucose", text: `${record.glucose}${unitSuffix(record.glucoseUnit)}` });
  } else {
    const value = String(record.value ?? "").trim();
    if (record.metric === "blood_pressure" && isNum(record.systolic) && isNum(record.diastolic)) parts.push({ type: "bp", text: `${record.systolic} over ${record.diastolic}` });
    else if (record.metric === "weight" && value) parts.push({ type: "weight", text: `${value}${record.unit ? ` ${record.unit}` : ""}` });
    else if (record.metric === "pulse" && value) parts.push({ type: "pulse", text: `${value} bpm` });
    else if (record.metric === "temperature" && value) parts.push({ type: "temperature", text: `${value}${record.unit ? ` ${record.unit}` : ""}` });
    else if (record.metric === "oxygen_saturation" && value) parts.push({ type: "oxygen", text: `${value}%` });
  }
  return parts;
}

function entriesOf(healthDb) {
  const out = [];
  for (const store of [CHRONIC, RPM]) {
    for (const record of recordsOf(healthDb, store)) {
      for (const part of partsOfRecord(record, store)) out.push({ type: part.type, store, id: record.id, createdAt: record.createdAt || "", text: part.text, dateText: record.dateTimeText && record.dateTimeText !== "not provided" ? String(record.dateTimeText) : "" });
    }
  }
  // newest first; the stores already hold the newest at the front, so ties keep that order
  return out.map((item, index) => ({ item, index })).sort((a, b) => (b.item.createdAt > a.item.createdAt ? 1 : b.item.createdAt < a.item.createdAt ? -1 : a.index - b.index)).map(({ item }) => item);
}

// The stored records a "delete all" would remove: every reading record of this person (type null), or only the records holding that kind of reading.
function recordsToDelete(healthDb, type) {
  const found = [];
  for (const store of [CHRONIC, RPM]) {
    for (const record of recordsOf(healthDb, store)) {
      const parts = partsOfRecord(record, store);
      if (!type || parts.some(part => part.type === type)) found.push({ store, record, parts });
    }
  }
  return found;
}

function removeOne(healthDb, target) {
  const list = recordsOf(healthDb, target.store);
  const index = list.findIndex(record => record.id === target.id && (record.createdAt || "") === target.createdAt);
  if (index < 0) return false;
  healthDb.profile[target.store] = list.filter((_, i) => i !== index);
  return recordsOf(healthDb, target.store).length === list.length - 1;
}
// Only this person's records can be in `healthDb` (it is the per-person view), so nothing of anyone else's can be removed here.
function removeMany(healthDb, type) {
  let removed = 0;
  for (const store of [CHRONIC, RPM]) {
    const list = recordsOf(healthDb, store);
    const doomed = new Set(recordsToDelete(healthDb, type).filter(item => item.store === store).map(item => item.record));
    healthDb.profile[store] = list.filter(record => !doomed.has(record));
    removed += list.length - recordsOf(healthDb, store).length;
  }
  return removed;
}

// ---------------------------------------------------------------- dates

function dateText(now, when = "today") {
  const day = new Date(now.getTime() - (when === "yesterday" ? 24 * 3600 * 1000 : 0));
  return day.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: DEFAULT_TIME_ZONE });
}

// ---------------------------------------------------------------- checking a reading before anything is said or saved

// -> { ok: true, reading } with unit and level filled in, or { ok: false, reply } (nothing is saved).
function check(reading, lang) {
  const S = say(lang);
  if (reading.vital === "bp") {
    if (!Number.isInteger(reading.systolic) || !Number.isInteger(reading.diastolic)) return { ok: false, reply: S.wholeNumbers(reading.systolic, reading.diastolic) };
    const assessment = bpLib.assessBloodPressure(reading.systolic, reading.diastolic);
    if (!assessment.valid) return { ok: false, reply: lang === "sw" ? SW_SAVED.invalidBp(reading.systolic, reading.diastolic) : bpLib.invalidReadingReply(reading.systolic, reading.diastolic) };
    return { ok: true, reading: { ...reading, level: assessment.level } };
  }
  if (reading.vital === "glucose") {
    const resolved = glucoseLib.resolveGlucose(reading.value, reading.unit || "");
    if (resolved.invalid) return { ok: false, reply: lang === "sw" ? SW_SAVED.invalidGlucose(reading.valueText) : glucoseLib.invalidGlucoseReply(reading.valueText) };
    if (resolved.ambiguous) return { ok: false, reply: lang === "sw" ? SW_SAVED.ambiguousGlucose(reading.valueText) : glucoseLib.ambiguousUnitReply(reading.valueText) };
    return { ok: true, reading: { ...reading, value: resolved.value, unit: resolved.unit, inferredUnit: Boolean(resolved.inferred), level: glucoseLib.glucoseLevel(resolved) } };
  }
  if (reading.vital === "weight") {
    if (!reading.unit) return { ok: false, reply: S.weightUnit(reading.valueText) };
    const kg = reading.unit === "lb" ? reading.value * 0.45359237 : reading.value;
    if (!(kg >= 2 && kg <= 400)) return { ok: false, reply: S.weightImpossible(reading.valueText, reading.unit) };
    return { ok: true, reading };
  }
  if (reading.vital === "pulse") {
    if (!(Number.isInteger(reading.value) && reading.value >= 20 && reading.value <= 250)) return { ok: false, reply: S.pulseImpossible(reading.valueText) };
    return { ok: true, reading };
  }
  if (reading.vital === "oxygen") {
    if (!(reading.value >= 50 && reading.value <= 100)) return { ok: false, reply: S.oxygenImpossible(reading.valueText) };
    return { ok: true, reading };
  }
  if (reading.vital === "temperature") {
    const value = reading.value; const said = reading.unit;
    const unit = said || (value >= 30 && value <= 45 ? "C" : value >= 70 && value <= 115 ? "F" : "");
    const real = (unit === "C" && value >= 30 && value <= 45) || (unit === "F" && value >= 70 && value <= 115);
    if (!real) return { ok: false, reply: S.temperatureImpossible(reading.valueText, said) };
    return { ok: true, reading: { ...reading, unit } };
  }
  return { ok: false, reply: S.notRead(label(reading.vital, lang)) };
}

function describe(reading, lang) {
  if (reading.vital === "bp") return lang === "sw" ? `${reading.systolic} juu ya ${reading.diastolic}` : `${reading.systolic} over ${reading.diastolic}`;
  if (reading.vital === "glucose") return `${reading.value} ${GLUCOSE_UNIT_WORDS[lang][reading.unit]}`;
  if (reading.vital === "weight") return `${reading.value} ${reading.unit === "lb" ? (lang === "sw" ? "pauni" : "pounds") : (lang === "sw" ? "kilo" : "kilograms")}`;
  if (reading.vital === "pulse") return `${reading.value} ${lang === "sw" ? "kwa dakika" : "beats per minute"}`;
  if (reading.vital === "oxygen") return `${reading.value}%`;
  if (reading.vital === "temperature") return `${reading.value} ${reading.unit === "F" ? "Fahrenheit" : (lang === "sw" ? "Selsiasi" : "Celsius")}`;
  return String(reading.value);
}
// what the history shows for a saved reading, e.g. "150 over 95", "7.2 mmol/L", "68 kg"
function shortText(reading) {
  if (reading.vital === "bp") return `${reading.systolic} over ${reading.diastolic}`;
  if (reading.vital === "glucose") return `${reading.value} ${reading.unit}`;
  if (reading.vital === "weight") return `${reading.value} ${reading.unit}`;
  if (reading.vital === "pulse") return `${reading.value} bpm`;
  if (reading.vital === "oxygen") return `${reading.value}%`;
  return `${reading.value} ${reading.unit}`;
}

// ---------------------------------------------------------------- reading it back, and saving it

const URGENT_WORDS = /\b(?:chest\s*pain|pain in (?:my )?chest|short(?:ness)? of breath|can'?t breathe|cannot breathe|trouble breathing|faint(?:ing|ed)?|unconscious|seizure|(?:had|having|a) fit|confus(?:ed|ion)|slurred|can'?t speak|weak on one side|numb(?:ness)?|shaking|sweating|dizzy|severe headache|bad headache|worst headache|vomiting|blurr?y)\b/i;

// "I saved the reading ..." becomes "I heard the reading ...", so the guidance can come first without saying anything was saved.
const asHeard = text => String(text).replace(/^I saved the reading/, "I heard the reading");

function urgentReadBack(reading, commandText, lang) {
  // A very high or very low reading: the safety wording is said before the question, whether or not it is saved. In English this is the existing wording with "saved" turned into "heard".
  if (reading.vital === "bp" && reading.level === "urgent") {
    const text = lang === "sw" ? SW_SAVED.bpUrgent(reading.systolic, reading.diastolic, URGENT_WORDS.test(commandText)).replace(/^Nimehifadhi kipimo/, "Nimesikia kipimo") : bpLib.urgentGuidance(reading.systolic, reading.diastolic, commandText).replace(/^I saved the reading (\d+) over (\d+)\./, "I heard $1 over $2.");
    return text;
  }
  if (reading.vital === "glucose" && ["very-low", "low", "very-high"].includes(reading.level)) {
    const resolved = { unit: reading.unit, value: reading.value };
    if (lang === "sw") {
      const shown = `${reading.value} ${GLUCOSE_UNIT_WORDS.sw[reading.unit]}`;
      const text = reading.level === "very-low" ? SW_SAVED.glucoseVeryLow(shown) : reading.level === "low" ? SW_SAVED.glucoseLow(shown) : SW_SAVED.glucoseVeryHigh(shown, URGENT_WORDS.test(commandText));
      return text.replace(/^Nimehifadhi kipimo/, "Nimesikia kipimo");
    }
    const text = reading.level === "very-low" ? glucoseLib.veryLowReply(resolved) : reading.level === "low" ? glucoseLib.lowReply(resolved) : glucoseLib.veryHighReply(resolved, commandText);
    return asHeard(text);
  }
  return "";
}

function readBack(reading, date, commandText, lang) {
  const S = say(lang);
  // When the unit was not said, the number is read back on its own and the unit it was taken to be is named, so a wrong guess is easy to hear and correct.
  const said = reading.inferredUnit ? String(reading.value) : describe(reading, lang);
  const what = lang === "sw"
    ? `${YOUR_SW[reading.vital]} ni ${said}${reading.inferredUnit ? ` (nimedhani ni ${GLUCOSE_UNIT_WORDS.sw[reading.unit]}; sema tena pamoja na kipimo kama si hivyo)` : ""}`
    : `${label(reading.vital, lang)} as ${said}${reading.inferredUnit ? `, which I took to be ${GLUCOSE_UNIT_WORDS.en[reading.unit]} (say it again with the unit if not)` : ""}`;
  const lead = S.readBack(what, dateForLanguage(date, lang));
  const urgent = urgentReadBack(reading, commandText, lang);
  return urgent ? `${urgent} ${S.askSave}` : `${lead} ${S.askSave}`;
}

function saveReading(healthDb, reading, date, commandText, lang) {
  const S = say(lang);
  if (reading.vital === "bp") {
    const result = providers.chronicDiseaseBridge.reading({ conditionFocus: "hypertension", systolic: reading.systolic, diastolic: reading.diastolic, readingContext: "voice-reported", dateTimeText: date, confirmed: true }, healthDb, process.env);
    const saved = Boolean(result?.body?.ok && result.body.status === "completed");
    if (result?.body?.data?.invalidReading) return { saved: false, response: lang === "sw" ? SW_SAVED.invalidBp(reading.systolic, reading.diastolic) : bpLib.invalidReadingReply(reading.systolic, reading.diastolic) };
    if (!saved) return { saved: false, attempted: true, response: lang === "sw" ? SW_SAVED.notSavedBp(reading.systolic, reading.diastolic) : bpLib.notSavedReply(reading.systolic, reading.diastolic) };
    let response;
    if (reading.level === "urgent") response = lang === "sw" ? SW_SAVED.bpUrgent(reading.systolic, reading.diastolic, URGENT_WORDS.test(commandText)) : bpLib.urgentGuidance(reading.systolic, reading.diastolic, commandText);
    else response = lang === "sw" ? SW_SAVED.bp(reading.systolic, reading.diastolic) : bpLib.savedReply(reading.systolic, reading.diastolic);
    if (reading.level === "low") response = `${response} ${lang === "sw" ? SW_SAVED.bpLow : bpLib.lowNote()}`;
    return { saved: true, attempted: true, response };
  }
  if (reading.vital === "glucose") {
    const shownEn = `${reading.value} ${GLUCOSE_UNIT_WORDS.en[reading.unit]}`; const shownSw = `${reading.value} ${GLUCOSE_UNIT_WORDS.sw[reading.unit]}`;
    const result = providers.chronicDiseaseBridge.reading({ conditionFocus: "diabetes", glucose: reading.value, glucoseUnit: reading.unit, readingContext: "voice-reported", dateTimeText: date, confirmed: true }, healthDb, process.env);
    const saved = Boolean(result?.body?.ok && result.body.status === "completed");
    if (!saved) return { saved: false, attempted: true, response: lang === "sw" ? SW_SAVED.notSavedGlucose(shownSw) : glucoseLib.notSavedReply(shownEn) };
    const resolved = { unit: reading.unit, value: reading.value };
    let response;
    if (lang === "sw") {
      response = reading.level === "very-low" ? SW_SAVED.glucoseVeryLow(shownSw) : reading.level === "very-high" ? SW_SAVED.glucoseVeryHigh(shownSw, URGENT_WORDS.test(commandText)) : reading.level === "low" ? SW_SAVED.glucoseLow(shownSw) : SW_SAVED.glucose(shownSw);
    } else {
      response = reading.level === "very-low" ? glucoseLib.veryLowReply(resolved) : reading.level === "very-high" ? glucoseLib.veryHighReply(resolved, commandText) : reading.level === "low" ? glucoseLib.lowReply(resolved) : glucoseLib.savedReply(shownEn);
    }
    return { saved: true, attempted: true, response };
  }
  const metric = { weight: "weight", pulse: "pulse", temperature: "temperature", oxygen: "oxygen_saturation" }[reading.vital];
  const unit = reading.vital === "weight" ? reading.unit : reading.vital === "pulse" ? "bpm" : reading.vital === "oxygen" ? "%" : reading.unit;
  const result = providers.rpmBridge.deviceReading({ metric, value: String(reading.value), unit, dataSource: "voice-reported", dateTimeText: date, confirmed: true }, healthDb, process.env);
  const saved = Boolean(result?.body?.ok && result.body.status === "completed");
  const name = label(reading.vital, lang); const display = `${reading.value}${unit === "%" ? "%" : unit ? ` ${unit}` : ""}`;
  if (!saved) return { saved: false, attempted: true, response: S.notSavedOther(name, display) };
  return { saved: true, attempted: true, response: S.saved.other(name, display) };
}

// ---------------------------------------------------------------- showing, deleting, correcting

function listText(entries, lang, limit = 5) {
  const S = say(lang);
  return entries.slice(0, limit).map(entry => `${loc(entry.text, lang)}${entry.dateText ? S.on(dateForLanguage(entry.dateText, lang)) : ""}`).join("; ");
}

function showReadings(healthDb, intent, now, lang) {
  const S = say(lang);
  let entries = entriesOf(healthDb);
  if (intent.type) entries = entries.filter(entry => entry.type === intent.type);
  if (intent.days) { const since = now.getTime() - intent.days * 24 * 3600 * 1000; entries = entries.filter(entry => (Date.parse(entry.createdAt) || 0) >= since); }
  if (!entries.length) return intent.type ? S.noneType(label(intent.type, lang)) : S.noneAny;
  if (intent.one && intent.type) return S.lastOne(label(intent.type, lang), loc(entries[0].text, lang), dateForLanguage(entries[0].dateText, lang) || "");
  const groups = intent.type ? [[intent.type, entries]] : ["bp", "glucose", "weight", "pulse", "temperature", "oxygen"].map(type => [type, entries.filter(entry => entry.type === type)]).filter(([, list]) => list.length);
  const body = groups.map(([type, list]) => `${S.historyIntro(label(type, lang), list.length, Math.min(5, list.length))} ${listText(list, lang)}.`).join(" ");
  return `${body} ${S.historyClose}`;
}

function countsText(entries, lang) {
  const parts = ["bp", "glucose", "weight", "pulse", "temperature", "oxygen"].map(type => [type, entries.filter(entry => entry.type === type).length]).filter(([, n]) => n);
  return parts.map(([type, n]) => `${n} ${label(type, lang)}`).join(", ");
}

// ---------------------------------------------------------------- the turn

// The language a sentence is in: Kiswahili when it has Kiswahili words, or when the caller says Kiswahili and the sentence has none of the English ones.
function sentenceLanguage(text, requested) {
  const hasEnglish = /\b(?:my|the|is|was|blood|sugar|pressure|delete|show|please|what|who|share|reading|readings|yes|no)\b/i.test(text);
  return isSwahili(text) ? "sw" : (requested === "sw" && !hasEnglish ? "sw" : "en");
}

// What Kyro is waiting for from this person right now, if anything: { kind, lang } or null. For callers that must know whether a yes or a no answers a readings question.
function peekPending(db, user, now = new Date()) {
  if (!db || !user) return null;
  const { pending } = readState(scopeHealthDb(db, ownerOf(user)), now instanceof Date ? now : new Date());
  return pending ? { kind: pending.kind, lang: pending.lang || "en" } : null;
}

/**
 * One turn of the health-readings conversation.
 * @param {object} options { db, user, text, language, confirmedByCaller, canWrite, now }
 *   confirmedByCaller: the caller says the person has already said yes (the voice tool's confirmation flag), so a reading is saved without asking again.
 *   canWrite: false for an account that may not write health records (a guest).
 * @returns {null | { response, status, saved, wrote, requiresConfirmation, kind }}  null = not about health readings, so the caller carries on as before.
 */
function healthReadingsTurn(options = {}) {
  const { db, user } = options;
  const text = String(options.text || "").trim();
  if (!db || !text) return null;
  const now = options.now instanceof Date ? options.now : new Date();
  // Questions left behind by people who never came back are dropped after a day.
  if (Array.isArray(db.profile?.[STORE_KEY]) && db.profile[STORE_KEY].some(record => now.getTime() - (Date.parse(record?.at || "") || 0) > 24 * 3600 * 1000)) {
    db.profile[STORE_KEY] = db.profile[STORE_KEY].filter(record => now.getTime() - (Date.parse(record?.at || "") || 0) <= 24 * 3600 * 1000);
  }
  const healthDb = scopeHealthDb(db, ownerOf(user));
  const state = readState(healthDb, now);
  // The language of the answer: the one the question was asked in when this is a yes or a no; otherwise the one the sentence is in.
  const isAnswer = Boolean(state.pending) && (isYes(text) || isNo(text) || isDeleteConfirmed(text));
  const lang = isAnswer ? (state.pending.lang || "en") : sentenceLanguage(text, options.language);
  const S = say(lang);
  const canWrite = options.canWrite !== false;
  const out = (response, extra = {}) => ({ response, status: "completed", saved: false, wrote: false, requiresConfirmation: false, lang, ...extra });
  const typeOfPending = pending => pending?.payload?.reading?.vital || pending?.payload?.target?.type || pending?.payload?.type || null;

  // ---- an answer to the question Kyro just asked
  if (state.pending) {
    const pending = state.pending;
    const SP = say(lang);
    if (isNo(text)) {
      writeState(healthDb, now, { lang, lastType: typeOfPending(pending) });
      return out(pending.kind === "save" ? SP.discarded : pending.kind === "correct" ? SP.leftAsIs : SP.keepIt, { kind: `${pending.kind}-declined` });
    }
    // Deleting everything is never done on a bare "yes", and never when the number said is not the number of readings there are.
    const saidNumber = /\b(\d+)\b/.exec(prepare(text));
    if (pending.kind === "delete-all" && (isYes(text) || isDeleteConfirmed(text)) && (!isDeleteConfirmed(text) || (saidNumber && Number(saidNumber[1]) !== pending.payload.count))) {
      return out(SP.deleteAllNeedsWords(pending.payload.count), { requiresConfirmation: true, status: "needs-confirmation", kind: "delete-all" });
    }
    if ((pending.kind === "delete-all" && isDeleteConfirmed(text)) || (pending.kind !== "delete-all" && isYes(text))) {
      if (!canWrite) return out(SP.restricted, { status: "restricted" });
      if (pending.kind === "save") {
        const { reading, date, commandText } = pending.payload;
        const result = saveReading(healthDb, reading, date, commandText, lang);
        writeState(healthDb, now, { lang, lastType: reading.vital });
        return out(result.response, { saved: result.saved, wrote: result.saved, attempted: result.attempted, kind: "save", reading });
      }
      if (pending.kind === "delete-last") {
        const target = pending.payload.target;
        const removed = removeOne(healthDb, target);
        writeState(healthDb, now, { lang, lastType: target.type });
        return out(removed ? SP.deletedLast(label(target.type, lang), loc(target.text, lang), dateForLanguage(target.dateText, lang)) : SP.couldNotFind, { wrote: removed, deleted: removed ? 1 : 0, kind: "delete-last" });
      }
      if (pending.kind === "delete-all") {
        const type = pending.payload.type || null;
        const removed = removeMany(healthDb, type);
        writeState(healthDb, now, { lang });
        return out(removed ? SP.deletedAll(removed, type ? label(type, lang) : "all") : SP.nothingToDeleteAll, { wrote: removed > 0, deleted: removed, kind: "delete-all" });
      }
      if (pending.kind === "correct") {
        const { target, reading, commandText } = pending.payload;
        const changed = changeOne(healthDb, target, reading);
        writeState(healthDb, now, { lang, lastType: reading.vital });
        if (!changed) return out(SP.couldNotFind, { kind: "correct" });
        return out(`${SP.changed(label(reading.vital, lang), loc(target.text, lang), loc(shortText(reading), lang))} ${saveGuidance(reading, commandText || "", lang)}`.trim(), { wrote: true, saved: true, changed: true, kind: "correct", reading });
      }
    }
    // Anything else: the question is dropped (nothing was saved) and the new sentence is dealt with below.
    writeState(healthDb, now, { lang, lastType: typeOfPending(pending) });
  }

  const after = readState(healthDb, now);
  const context = after.context;
  const lastType = after.lastType;
  let intent = parseHealthIntent(text, { context });
  const reading = parseReading(text, { context });
  // "I read my blood sugar reading as 8" is a reading, not a request to show them
  if (reading && !reading.ask && intent?.intent === "show") intent = null;

  // ---- medicines: no records and no advice of our own, just the pointers to the pharmacist and the clinic that already exist
  if (intent?.intent === "medicine-missed") return out(S.medicineMissed, { kind: "medicine-missed" });
  if (intent?.intent === "medicine-running-out") return out(S.medicineRunningOut, { kind: "medicine-running-out" });
  if (intent?.intent === "medicine-stopped") return out(S.medicineStopped(intent.bp), { kind: "medicine-stopped" });
  if (intent?.intent === "who-can-see") { writeState(healthDb, now, { lang, lastType }); return out(S.whoSees, { kind: "who-can-see" }); }
  if (intent?.intent === "share") { writeState(healthDb, now, { lang, lastType }); return out(S.share, { kind: "share" }); }

  // ---- "that was wrong" / "it was 133/78": only while health readings are being talked about. Otherwise a full reading is just a new reading, and the rest is not ours.
  if (intent?.intent === "wrong") return context ? out(S.wrongAsk, { kind: "wrong-ask" }) : null;
  if (intent?.intent === "correct" && context) {
    const given = intent.reading && intent.reading.vital ? intent.reading : intent.reading ? { ...intent.reading, vital: lastType } : null;
    if (!given || !given.vital) return out(S.whichReading, { kind: "correct-ask" });
    if (!canWrite) return out(S.restricted, { status: "restricted" });
    if (given.vital === "bp" && !Number.isFinite(given.systolic)) return out(S.needBothNumbers, { kind: "correct-ask" });
    const checked = check(given, lang);
    if (!checked.ok) return out(checked.reply, { kind: "correct-invalid" });
    const target = entriesOf(healthDb).find(entry => entry.type === given.vital);
    if (!target) {
      const example = given.vital === "bp" ? `my blood pressure is ${given.systolic} over ${given.diastolic}` : `my ${label(given.vital, "en")} is ${given.valueText}`;
      return out(S.nothingToChange(label(given.vital, lang), example), { kind: "correct-none" });
    }
    writeState(healthDb, now, { kind: "correct", payload: { target, reading: checked.reading, commandText: text }, lang, lastType: given.vital });
    return out(S.askChange(label(given.vital, lang), loc(target.text, lang), loc(shortText(checked.reading), lang), dateForLanguage(target.dateText, lang)), { requiresConfirmation: true, status: "needs-confirmation", kind: "correct" });
  }

  // "show my readings" / "delete my last reading" with no word that says they are health readings: only ours when the person has some, or has just been talking about them
  // (a farmer's rainfall or soil readings are not ours to answer for).
  if (intent && intent.weak && !context && !entriesOf(healthDb).length) return null;

  // ---- show
  if (intent?.intent === "show") {
    writeState(healthDb, now, { lang, lastType: intent.type || lastType });
    return out(showReadings(healthDb, intent, now, lang), { kind: "show" });
  }

  // ---- delete the last reading
  if (intent?.intent === "delete-last") {
    if (!canWrite) return out(S.restricted, { status: "restricted" });
    const type = intent.type || null;
    const target = entriesOf(healthDb).find(entry => !type || entry.type === type);
    if (!target) return out(type ? S.nothingToDeleteType(label(type, lang)) : S.nothingToDelete, { kind: "delete-none" });
    writeState(healthDb, now, { kind: "delete-last", payload: { target }, lang, lastType: target.type });
    return out(S.askDeleteLast(label(target.type, lang), loc(target.text, lang), dateForLanguage(target.dateText, lang)), { requiresConfirmation: true, status: "needs-confirmation", kind: "delete-last" });
  }

  // ---- delete all of them, only after the full words and with the count
  if (intent?.intent === "delete-all") {
    if (!canWrite) return out(S.restricted, { status: "restricted" });
    const type = intent.type || null;
    const doomed = recordsToDelete(healthDb, type);
    if (!doomed.length) return out(S.nothingToDeleteAll, { kind: "delete-none" });
    const parts = type ? "" : countsText(doomed.flatMap(item => item.parts), lang);
    const scope = type ? `${label(type, lang)}${lang === "sw" ? "" : " readings"}` : (lang === "sw" ? "vipimo vyako vyote vya afya" : "all your health readings");
    writeState(healthDb, now, { kind: "delete-all", payload: { type, count: doomed.length }, lang });
    return out(S.askDeleteAll(doomed.length, parts, scope), { requiresConfirmation: true, status: "needs-confirmation", kind: "delete-all" });
  }

  // ---- a reading
  if (reading) {
    if (!canWrite) return out(S.restricted, { status: "restricted" });
    if (reading.ask === "several") {
      const names = reading.vitals.map(vital => label(vital, lang));
      const example = reading.vitals[0] === "bp" ? (lang === "sw" ? "shinikizo langu la damu ni 140 juu ya 90" : "my blood pressure is 140 over 90") : (lang === "sw" ? "sukari yangu ni 7.2 mmol" : "my blood sugar is 7.2 mmol");
      return out(S.severalReadings(names, example), { kind: "several" });
    }
    if (reading.ask === "bp-not-whole") return out(S.wholeNumbers(reading.systolic, reading.diastolic), { kind: "invalid" });
    if (reading.ask) return out(S.twoNumbers(label(reading.vital, lang), reading.valueText), { kind: "ask" });
    const checked = check(reading, lang);
    if (!checked.ok) return out(checked.reply, { kind: "invalid" });
    const date = dateText(now, reading.when);
    // A reading said together with a worrying symptom word that is not itself a very high or very low reading belongs to the safety answers that already exist, not to a save-and-ask.
    const urgentLevel = (checked.reading.vital === "bp" && checked.reading.level === "urgent") || (checked.reading.vital === "glucose" && ["very-low", "very-high"].includes(checked.reading.level));
    if (!options.confirmedByCaller && !urgentLevel && URGENT_WORDS.test(text)) return null;
    if (options.confirmedByCaller) {
      // the caller says the person has already said yes, so there is nothing left to ask
      const result = saveReading(healthDb, checked.reading, date, text, lang);
      writeState(healthDb, now, { lang, lastType: checked.reading.vital });
      return out(result.response, { saved: result.saved, wrote: result.saved, attempted: result.attempted, kind: "save", reading: checked.reading });
    }
    writeState(healthDb, now, { kind: "save", payload: { reading: checked.reading, date, commandText: text }, lang, lastType: checked.reading.vital });
    return out(readBack(checked.reading, date, text, lang), { requiresConfirmation: true, status: "needs-confirmation", kind: "readback", reading: checked.reading });
  }
  return null;
}

// After a correction the new value gets the same guidance a freshly saved one gets.
function saveGuidance(reading, commandText, lang) {
  if (reading.vital === "bp") return reading.level === "urgent" ? (lang === "sw" ? SW_SAVED.bpUrgent(reading.systolic, reading.diastolic, URGENT_WORDS.test(commandText)) : bpLib.urgentGuidance(reading.systolic, reading.diastolic, commandText)) : (lang === "sw" ? SW_SAVED.bp(reading.systolic, reading.diastolic) : bpLib.savedReply(reading.systolic, reading.diastolic)) + (reading.level === "low" ? ` ${lang === "sw" ? SW_SAVED.bpLow : bpLib.lowNote()}` : "");
  if (reading.vital === "glucose") {
    const resolved = { unit: reading.unit, value: reading.value };
    const shownEn = `${reading.value} ${GLUCOSE_UNIT_WORDS.en[reading.unit]}`; const shownSw = `${reading.value} ${GLUCOSE_UNIT_WORDS.sw[reading.unit]}`;
    if (lang === "sw") return reading.level === "very-low" ? SW_SAVED.glucoseVeryLow(shownSw) : reading.level === "very-high" ? SW_SAVED.glucoseVeryHigh(shownSw, URGENT_WORDS.test(commandText)) : reading.level === "low" ? SW_SAVED.glucoseLow(shownSw) : SW_SAVED.glucose(shownSw);
    return reading.level === "very-low" ? glucoseLib.veryLowReply(resolved) : reading.level === "very-high" ? glucoseLib.veryHighReply(resolved, commandText) : reading.level === "low" ? glucoseLib.lowReply(resolved) : glucoseLib.savedReply(shownEn);
  }
  return "";
}

// Changes the stored reading in place (same record, same date) and notes that it was corrected. Returns true only when the stored value now is the new one.
function changeOne(healthDb, target, reading) {
  const list = recordsOf(healthDb, target.store);
  const index = list.findIndex(record => record.id === target.id && (record.createdAt || "") === target.createdAt);
  if (index < 0) return false;
  const next = list.map((record, i) => {
    if (i !== index) return record;
    const edited = { ...record, correctedAt: new Date().toISOString() };
    if (reading.vital === "bp") { edited.systolic = reading.systolic; edited.diastolic = reading.diastolic; }
    else if (reading.vital === "glucose") { edited.glucose = reading.value; edited.glucoseUnit = reading.unit; }
    else if (reading.vital === "weight") { edited.value = String(reading.value); edited.unit = reading.unit; }
    else if (reading.vital === "pulse") { edited.value = String(reading.value); edited.pulse = reading.value; }
    else if (reading.vital === "oxygen") { edited.value = String(reading.value); }
    else if (reading.vital === "temperature") { edited.value = String(reading.value); edited.unit = reading.unit; }
    return edited;
  });
  healthDb.profile[target.store] = next;
  const after = recordsOf(healthDb, target.store).find(record => record.id === target.id && (record.createdAt || "") === target.createdAt);
  if (!after) return false;
  if (reading.vital === "bp") return after.systolic === reading.systolic && after.diastolic === reading.diastolic;
  if (reading.vital === "glucose") return after.glucose === reading.value && after.glucoseUnit === reading.unit;
  return String(after.value) === String(reading.value);
}

module.exports = Object.freeze({ healthReadingsTurn, entriesOf, peekPending, sentenceLanguage, ownerOf, STORE_KEY, CHRONIC, RPM, PENDING_MS, CONTEXT_MS, check, readBack, dateText });

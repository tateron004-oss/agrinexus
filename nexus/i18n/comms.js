"use strict";

// Kyro's words for texting, calling and saving contacts on the older command route and the phone line (server.js: stageMessageIntent, stageBackendCallIntent,
// phoneContactMemoryCommandResponse, executePendingAgentAction). English is the exact wording Kyro has always said (a few lines now also read the number back in full);
// Kiswahili is new for the "yes" / "sent" / "not sent" / "cancelled" / "which one" replies, which used to come back in English even for a Kiswahili speaker.
//
// NEEDS REVIEW BY A FLUENT KISWAHILI SPEAKER before it is relied on: register (simple, polite), Kenyan and Tanzanian usage, and that the example commands
// ("tuma ujumbe kwa ...", "hifadhi namba ya ...") are ones Kyro really understands. Names, numbers and the person's own words are never translated.
//
// This catalog is merged into the shared one by index.js (t("sw", "comms.text.sent.sms", { label })). It is a separate file from en.js / sw.js on purpose: the example
// commands in quotes below are checked by a test that only knows the commands of the safety, circle and navigation readers.
const en = {
  // ---- a text or WhatsApp message ----
  "comms.text.numberInvalid": "I could not make out that number. Give me the whole number, like +254712345678 or 0712 345 678.",
  "comms.text.numberNeeded": "I don't have a number for {name}. Give me their number with the country code, like \"text +254712345678 saying I am on my way\", or say \"save {example}'s number as +254712345678\" first.",
  "comms.text.thatPerson": "that person",
  "comms.text.multiple": "I found more than one {name}. Which one? {options}",
  "comms.text.textNeeded.sms": "What should the text say? For example: \"text {to} saying I am on my way\".",
  "comms.text.textNeeded.whatsapp": "What should the WhatsApp message say? For example: \"text {to} saying I am on my way\".",
  "comms.text.tooLong": "That message is too long to send. Please make it shorter.",
  "comms.text.confirm.sms": "Send \"{message}\" to {label} as a text? Say yes to send it, or no to cancel.",
  "comms.text.confirm.whatsapp": "Send \"{message}\" to {label} as a WhatsApp message? Say yes to send it, or no to cancel.",
  "comms.text.sent.sms": "Sent your text to {label}.",
  "comms.text.sent.whatsapp": "Sent your WhatsApp message to {label}.",
  "comms.text.restricted.sms": "This account type cannot send real messages, so I did not send your text to {label}. Nothing was sent.",
  "comms.text.restricted.whatsapp": "This account type cannot send real messages, so I did not send your WhatsApp message to {label}. Nothing was sent.",
  "comms.text.sensitive": "I did not send it: messages about health records, payments or passwords are not sent from here. Nothing was sent to {label}.",
  "comms.text.notSent.sms": "I could not send your text to {label}: sending messages is not set up for this account yet, so nothing was sent. Your words were: \"{message}\".",
  "comms.text.notSent.whatsapp": "I could not send your WhatsApp message to {label}: sending messages is not set up for this account yet, so nothing was sent. Your words were: \"{message}\".",
  // ---- a phone call ----
  "comms.call.targetNeeded": "Who should I call? Tell me the person, organization, or full phone number with country code.",
  "comms.call.multiple": "I found more than one match for {name}. Which one should I call? {options}",
  "comms.call.numberNeeded": "I can help call {name}, but I do not have a phone number yet. Please give the number with country code, for example +254 or +1.",
  "comms.call.confirm.named": "I found {name} at {phone}. Before I call anyone, please confirm. Do you want me to call {name} now?",
  "comms.call.confirm.number": "Before I call anyone, please confirm. Do you want me to call {phone} now?",
  "comms.call.confirm.noNumber": "I found {name}. Before I call anyone, please confirm. Do you want me to call {name} now?",
  "comms.call.confirm.handoff": "I can prepare a {provider} call handoff for {name}, but I will not launch it without confirmation. Do you want me to continue?",
  "comms.call.placed": "Twilio call confirmed for {name}. Nexus started the configured outbound call.",
  "comms.call.notSetUp": "I could not place the call to {name}: calling is not set up yet, so nothing was done.",
  "comms.call.restricted": "This account type cannot place real calls, so I did not call {name}. Nothing was done.",
  "comms.call.sensitive": "I did not call {name}: calls about health records, payments or passwords are not placed from here. Nothing was done.",
  "comms.call.failed": "I could not place the call to {name}: the phone service did not accept it, so nothing was done.",
  // ---- saved contacts ----
  "comms.contact.callReady": "I found {name} at {phone}. Say yes and I will call {name}. Say no to cancel.",
  "comms.contact.savedCallReady": "I saved {name} as {phone}. Say yes and I will call {name}. Say no to save the number without calling now.",
  "comms.contact.saved": "Saved {name} as {phone}. If that number is not right, say it again. You can say, \"Nexus, call {name}\" any time.",
  "comms.contact.nameNeeded": "I have the phone number. What name should I save it under?",
  "comms.contact.countryCode": "I need the full phone number with country code before I save it. For Kenya use +254, for Nigeria use +234, for Ghana use +233, and for the United States use +1.",
  "comms.contact.numberNeeded": "I can call {name}, but I do not have {name}'s phone number yet. Please give me the number with country code, and I will remember it.",
  "comms.contact.lookup": "{name} is saved as {phone}.",
  // ---- answering a staged text or call ----
  "comms.cancelled": "Canceled. Tell me what you want to do next.",
  "comms.reask": "{prompt} Say yes, confirm, or do it to continue, or no to cancel."
};

const sw = {
  "comms.text.numberInvalid": "Sijaelewa namba hiyo. Nipe namba kamili, kwa mfano +254712345678 au 0712 345 678.",
  "comms.text.numberNeeded": "Sina namba ya {name}. Nipe namba yake yenye msimbo wa nchi, kwa mfano \"tuma ujumbe kwa +254712345678 niko njiani\", au sema \"hifadhi namba ya {example} kama +254712345678\" kwanza.",
  "comms.text.thatPerson": "mtu huyo",
  "comms.text.multiple": "Kuna zaidi ya mmoja anayeitwa {name}. Ni yupi? {options}",
  "comms.text.textNeeded.sms": "Ujumbe unasema nini? Sema kwa mfano \"tuma ujumbe kwa {to} niko njiani\".",
  "comms.text.textNeeded.whatsapp": "Ujumbe wa WhatsApp unasema nini? Sema kwa mfano \"tuma ujumbe kwa {to} niko njiani\".",
  "comms.text.tooLong": "Ujumbe ni mrefu sana. Ufupishe kidogo.",
  "comms.text.confirm.sms": "Nitume \"{message}\" kwa {label}? Sema ndiyo ili kutuma, au hapana kughairi.",
  "comms.text.confirm.whatsapp": "Nitume \"{message}\" kwa {label} kwa WhatsApp? Sema ndiyo ili kutuma, au hapana kughairi.",
  "comms.text.sent.sms": "Nimetuma ujumbe wako kwa {label}.",
  "comms.text.sent.whatsapp": "Nimetuma ujumbe wako wa WhatsApp kwa {label}.",
  "comms.text.restricted.sms": "Aina hii ya akaunti haiwezi kutuma ujumbe halisi, kwa hiyo sikutuma ujumbe wako kwa {label}. Hakuna kilichotumwa.",
  "comms.text.restricted.whatsapp": "Aina hii ya akaunti haiwezi kutuma ujumbe halisi, kwa hiyo sikutuma ujumbe wako wa WhatsApp kwa {label}. Hakuna kilichotumwa.",
  "comms.text.sensitive": "Sikutuma: ujumbe kuhusu rekodi za afya, malipo au nywila haitumwi kutoka hapa. Hakuna kilichotumwa kwa {label}.",
  "comms.text.notSent.sms": "Sikuweza kutuma ujumbe wako kwa {label}: kutuma ujumbe hakujawekwa kwenye akaunti hii bado, kwa hiyo hakuna kilichotumwa. Maneno yako yalikuwa: \"{message}\".",
  "comms.text.notSent.whatsapp": "Sikuweza kutuma ujumbe wako wa WhatsApp kwa {label}: kutuma ujumbe hakujawekwa kwenye akaunti hii bado, kwa hiyo hakuna kilichotumwa. Maneno yako yalikuwa: \"{message}\".",
  "comms.call.targetNeeded": "Nikupigie nani simu? Niambie mtu, shirika, au namba kamili ya simu yenye msimbo wa nchi.",
  "comms.call.multiple": "Nimepata zaidi ya mmoja anayelingana na {name}. Nimpigie yupi? {options}",
  "comms.call.numberNeeded": "Naweza kukusaidia kumpigia {name} simu, lakini sina namba yake bado. Tafadhali nipe namba yenye msimbo wa nchi, kwa mfano +254 au +1.",
  "comms.call.confirm.named": "Nimempata {name} kwenye namba {phone}. Kabla sijampigia mtu simu, tafadhali thibitisha. Nimpigie {name} simu sasa? Sema ndiyo au hapana.",
  "comms.call.confirm.number": "Kabla sijampigia mtu simu, tafadhali thibitisha. Nipige simu kwa {phone} sasa? Sema ndiyo au hapana.",
  "comms.call.confirm.noNumber": "Nimempata {name}. Kabla sijampigia mtu simu, tafadhali thibitisha. Nimpigie {name} simu sasa? Sema ndiyo au hapana.",
  "comms.call.confirm.handoff": "Naweza kuandaa simu ya {provider} kwa {name}, lakini sitaianzisha bila uthibitisho wako. Niendelee?",
  "comms.call.placed": "Nimempigia {name} simu.",
  "comms.call.notSetUp": "Sikuweza kumpigia {name} simu: kupiga simu hakujawekwa bado, kwa hiyo hakuna kilichofanyika.",
  "comms.call.restricted": "Aina hii ya akaunti haiwezi kupiga simu halisi, kwa hiyo sikumpigia {name} simu. Hakuna kilichofanyika.",
  "comms.call.sensitive": "Sikumpigia {name} simu: simu kuhusu rekodi za afya, malipo au nywila hazipigwi kutoka hapa. Hakuna kilichofanyika.",
  "comms.call.failed": "Sikuweza kumpigia {name} simu: huduma ya simu haikukubali, kwa hiyo hakuna kilichofanyika.",
  "comms.contact.callReady": "Nimempata {name} kwenye namba {phone}. Sema ndiyo nimpigie {name} simu, au hapana kughairi.",
  "comms.contact.savedCallReady": "Nimemhifadhi {name} kama {phone}. Sema ndiyo nimpigie {name} simu sasa, au hapana kuhifadhi namba bila kupiga simu.",
  "comms.contact.saved": "Nimemhifadhi {name} kama {phone}. Ikiwa namba si sahihi, isema tena. Unaweza kusema \"Nexus, mpigie {name}\" wakati wowote.",
  "comms.contact.nameNeeded": "Nimepata namba ya simu. Nimhifadhi kwa jina gani?",
  "comms.contact.countryCode": "Ninahitaji namba kamili ya simu yenye msimbo wa nchi kabla sijaihifadhi. Kwa Kenya tumia +254, kwa Nigeria +234, kwa Ghana +233, na kwa Marekani +1.",
  "comms.contact.numberNeeded": "Naweza kumpigia {name} simu, lakini sina namba yake bado. Tafadhali nipe namba yenye msimbo wa nchi, nami nitaikumbuka.",
  "comms.contact.lookup": "{name} amehifadhiwa kama {phone}.",
  "comms.cancelled": "Nimeghairi. Niambie unataka kufanya nini baadaye.",
  "comms.reask": "{prompt} Sema ndiyo, thibitisha, au fanya hivyo ili kuendelea, au hapana kughairi."
};

module.exports = Object.freeze({ en: Object.freeze(en), sw: Object.freeze(sw) });

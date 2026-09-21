"use strict";

// Kiswahili (standard Swahili). First draft, written for review.
//
// NEEDS REVIEW BY A FLUENT SPEAKER BEFORE IT IS RELIED ON. Above all the "safety.*" and "loc.*" messages (emergency alerts, the reply to someone who may
// harm themselves, the all-clear): they must be checked by a fluent Swahili speaker and, for the crisis wording, by a clinician or a crisis organisation
// (the same review the English wording needs). Please also check: register (formal, simple), Kenyan and Tanzanian usage, and that no sentence suggests
// a command Kyro cannot yet understand in Swahili.
//
// Written to avoid noun-class agreement problems where a placeholder can be one person or several ("{names}" is one name or a list), and never to
// guess a person's gender ("yuko", "ameomba", "naye" are neutral). Names, places and email addresses are never translated.
module.exports = Object.freeze({
  // ---- emergencies and crisis ----
  "safety.number": "Ikiwa uko hatarini, tafadhali piga simu kwa namba ya dharura ya nchi yako sasa hivi.",
  "safety.noCircle": "Bado sina mtu yeyote kwenye mzunguko wako, kwa hivyo sikuweza kutuma tahadhari kwa mtu. {number} Ukiwa salama, tunaweza kuongeza watu unaowaamini: \"ongeza jina@mfano.com kwenye mzunguko wangu\".",
  "safety.alertFailed": "Nilijaribu kutuma tahadhari kwa mzunguko wako lakini sikuweza kumfikia mtu yeyote sasa hivi. {number}",
  "safety.alerted": "Nimetuma tahadhari kwa {names}.{extra} {number} Niko hapa nawe.",
  "safety.locationSoon": " Nitatuma eneo lako kwa {names} mara tu simu yako itakaponiambia uko wapi.",
  "safety.askWithCircle": "Niko hapa. Ikiwa ni jambo la dharura, sema \"arifu mzunguko wangu\" nami nitatuma ujumbe kwa {names} mara moja. {number} Au niambie kinachoendelea.",
  "safety.askNoCircle": "Niko hapa. {number} Niambie kinachoendelea nami nitafanya niwezavyo.",
  "safety.selfHarm": "Pole sana kwa unavyojisikia, na nashukuru kwamba umeniambia. Wewe ni muhimu, na huhitaji kubeba haya peke yako. Ikiwa unaweza kujidhuru, au uko hatarini sasa hivi, tafadhali piga simu kwa namba ya dharura ya nchi yako au simu ya msaada ya nchi yako, au nenda kwa mtu anayeweza kukaa nawe. {circle}Niko hapa, na ninakusikiliza.",
  "safety.selfHarmCircle": "Naweza kutuma tahadhari kwa {names} sasa hivi — sema tu \"arifu mzunguko wangu\". ",
  "safety.pushTitle": "Tahadhari ya dharura",
  "safety.pushBody": "{name} ameomba msaada wa haraka kwa Kyro sasa hivi. Tafadhali wasiliana naye mara moja, au omba msaada ikiwa huwezi kumpata.",
  "safety.someone": "Mtu aliye kwenye mzunguko wako",
  "safety.clearTitle": "Dharura imeisha",
  "safety.clearBody": "{name} anasema yuko salama sasa. Eneo halitatumwa tena.",
  "safety.allClearTold": "Nafurahi kwamba uko salama. Nimetuma ujumbe kwa {names} kwamba uko sawa, na nimeacha kushiriki eneo lako.",
  "safety.allClearClosed": "Nafurahi kwamba uko salama. Nimefunga tahadhari.",

  // ---- the location that follows an alert ----
  "loc.title": "Dharura: eneo la {name}",
  "loc.first": "{name} ameomba msaada wa haraka kwa Kyro, na simu yake inaonyesha yuko {code} ({lat}, {lng}){acc}{age}. Gusa kufungua ramani. Ikiwa huwezi kumpata, omba msaada.",
  "loc.update": "Eneo la {name} limesasishwa: sasa yuko {code} ({lat}, {lng}){acc}{age}. Gusa kufungua ramani. Ikiwa huwezi kumpata, omba msaada.",
  "loc.acc": ", kwa usahihi wa takriban mita {m}",
  "loc.age": ", kutoka takriban dakika {n} zilizopita",

  // ---- the trusted circle ----
  "circle.which": "Ni yupi kati ya hawa: {names}?",
  "circle.needEmail": "Nahitaji barua pepe ya {who} ili kumwalika. Sema \"ongeza jina@mfano.com kwenye mzunguko wangu\".",
  "circle.noEmail": "Sina barua pepe ya {name}. Nipe barua pepe yake, kwa mfano: \"ongeza jina@mfano.com kwenye mzunguko wangu\".",
  "circle.invited": "Ikiwa {who} ana akaunti ya Kyro katika jamii yako, nimemtumia mwaliko wako. Yeye ndiye anayechagua kama atakubali, nawe utapata jibu hapa. Hakuna mtu kwenye mzunguko wako anayeambiwa chochote kukuhusu hadi useme hivyo.",
  "circle.self": "Huyo ni wewe. Mzunguko wako ni kwa watu wengine.",
  "circle.duplicate": "{name} yuko tayari kwenye mzunguko wako, au ana mwaliko unaosubiri.",
  "circle.full": "Mzunguko wako umejaa (watu wanane). Ondoa mtu kwanza ukitaka kuongeza mwingine.",
  "circle.someone": "Mtu",
  "circle.inviteTitle": "Mwaliko wa mzunguko",
  "circle.inviteBody": "{name} angependa uwe kwenye mzunguko wake wa watu anaowaamini{as}. Sema \"kubali mwaliko kutoka kwa {first}\" ndani ya Kyro, au \"kataa mwaliko kutoka kwa {first}\" ukipenda kutokubali.",
  "circle.inviteAs": " kama {relationship} wake",
  "circle.empty": "Mzunguko wako hauna mtu. Sema \"ongeza jina@mfano.com kwenye mzunguko wangu\" kumwalika mtu unayemwamini.",
  "circle.told.checkins": "ukikosa kujibu ujumbe wa kukuangalia hali",
  "circle.told.medications": "ikiwa dozi haijathibitishwa",
  "circle.told.location": "eneo lako ukiomba msaada wa haraka",
  "circle.or": " au ",
  "circle.state.waiting": "mwaliko unasubiri",
  "circle.state.told": "anaweza kuambiwa {items}",
  "circle.state.none": "haambiwi chochote isipokuwa dharura",
  "circle.list": "Mzunguko wako: {lines}.{hint}",
  "circle.hint": " Ikiwa unataka waweze kukupata wakati wa dharura, sema \"shiriki eneo langu wakati wa dharura\".",
  "circle.removeMissing": "Simwoni {who} kwenye mzunguko wako.",
  "circle.removeDone": "Sawa. {name} ameondolewa kwenye mzunguko wako na hataambiwa chochote tena.",
  "circle.updateTitle": "Taarifa ya mzunguko",
  "circle.removedBody": "{name} amekuondoa kwenye mzunguko wake wa watu anaowaamini.",
  "circle.notYet": "{who} bado hajakubali mwaliko wako.",
  "circle.locationNobody": "Bado hakuna mtu kwenye mzunguko wako aliyekubali mwaliko wako, kwa hivyo hakuna wa kushirikiwa eneo. Mtu akikubali, sema hivi tena.",
  "circle.locationOnAll": "Sawa. Ukiniomba msaada wa haraka, nitatuma pia eneo lako kwa {names}, mara tu simu yako itakaponiambia uko wapi, na nitaendelea kulisasisha kwa muda. Ni wakati huo tu, si vinginevyo. Sema \"acha kushiriki eneo langu wakati wa dharura\" wakati wowote.",
  "circle.locationOffAll": "Sawa. Eneo lako halitatumwa kwa {names} wakati wa dharura. Tahadhari bado zitawafikia wote kwenye mzunguko wako.",
  "circle.locationOn": "Sawa. Ukiniomba msaada wa haraka, nitatuma pia eneo lako kwa {name}, mara tu simu yako itakaponiambia uko wapi, na nitaendelea kulisasisha kwa muda. Ni wakati huo tu, si vinginevyo. Sema \"acha kushiriki eneo langu wakati wa dharura na {first}\" kulighairi.",
  "circle.locationOff": "Sawa. Eneo lako halitatumwa kwa {name} wakati wa dharura. Tahadhari bado zitawafikia wote kwenye mzunguko wako; sema \"ondoa {first} kwenye mzunguko wangu\" ikiwa hutaki hilo pia.",
  "circle.noInvitations": "Huna mialiko ya mzunguko inayosubiri.",
  "circle.waiting": "Wanaosubiri jibu lako: {items}. Sema \"kubali mwaliko kutoka kwa {first}\" au \"kataa mwaliko kutoka kwa {first}\".",
  "circle.waitingAs": " (wewe kama {relationship} wake)",
  "circle.noInvitationFrom": "Sioni mwaliko kutoka kwa {who}.",
  "circle.they": "Yeye",
  "circle.answerYes": "{name} amekubali na sasa yuko kwenye mzunguko wako wa watu unaowaamini.",
  "circle.answerNo": "{name} hawezi kujiunga na mzunguko wako kwa sasa.",
  "circle.acceptDone": "Asante. Sasa uko kwenye mzunguko wa {name}. Utasikia kutoka kwa Kyro kuhusu yeye tu wakati wa dharura, au akichagua kushiriki zaidi. Unaweza kuondoka wakati wowote: \"ondoka kwenye mzunguko wa {first}\".",
  "circle.declineDone": "Sawa. Nimemwambia {name} kuwa huwezi kwa sasa.",
  "circle.leaveMissing": "Huko kwenye mzunguko wa {who}.",
  "circle.leaveDone": "Sawa. Umeondoka kwenye mzunguko wa {name}.",
  "circle.leftBody": "{name} ameondoka kwenye mzunguko wako wa watu unaowaamini.",
  "circle.lookingOut": "Unawaangalia {names}.",
  "circle.lookingOutNone": "Huko kwenye mzunguko wa mtu yeyote kwa sasa."
});

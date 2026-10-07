"use strict";

// The words on the Team page (team.html) and the Businesses page (platform.html), in English and Kiswahili.
//
// It follows the app's own way of doing it (see public/kyro-navigation.js and the language switcher in public/app.js): the language is the signed-in person's language setting (user.language, "sw" or
// "sw-KE" meaning Kiswahili), a Kiswahili sentence is looked up by a key, and anything missing falls back to English. The Kiswahili here is machine-drafted and is listed in the pull request for a
// fluent speaker to check. Every key must exist in BOTH languages (a test checks it).
//
// The server's own English error messages are shown through serverError(): an exact message, or a message with numbers in it, is turned into its Kiswahili key; an unknown message is shown as it is.
(function (root) {
  const TEXT = {
    en: {
      // shared
      "back": "← Kyro Genesis",
      "checking": "Checking your sign-in…",
      "signInFirst": "Sign in to Kyro first (use the link at the top), then reload this page.",
      "didNotWork": "That did not work.",
      "secretTitle": "Temporary password",
      "secretClose": "I have passed it on. Close",
      "linkPhone": "Link phone",
      "remove": "Remove",
      "closed": "Closed",
      "newPasswordFor": "New password for {name}",
      "resetText": "Their old password and every phone or browser they were signed in on no longer work. They sign in at the usual page with {email} and this password:",
      "passwordMade": "A new password was made. It is shown once, at the top of the page.",
      "phoneLabel": "Phone, with country code",
      "phoneLabelLong": "Phone number, with country code",

      // team page
      "team.title": "My team · Kyro Genesis | AgriNexus",
      "team.eyebrow": "Business manager",
      "team.h1": "My team",
      "team.lede": "Add the people who work with you, give someone a new password, switch a person's account off when they leave, and link the phone they will use to talk to Kyro. You see only the people on **your** team, and nobody's private records.",
      "team.addTitle": "Add a person",
      "team.name": "Name",
      "team.email": "Email",
      "team.addButton": "Add to my team",
      "team.secretNote": "This is shown **once**. Give it to the person privately (in person or in a message only they can read). Close this box and it is gone; you can always set a new one.",
      "team.peopleTitle": "People on my team",
      "team.active": "Active",
      "team.off": "Switched off",
      "team.manager": "Business manager",
      "team.noPhone": "No phone linked yet. Without one, this person cannot talk to Kyro by phone.",
      "team.newPassword": "New password",
      "team.switchOff": "Switch off",
      "team.switchOn": "Switch on",
      "team.labelOptional": "Label (optional)",
      "team.labelExample": "e.g. Mary's mobile",
      "team.phoneRemoved": "That phone number was removed.",
      "team.switchedOff": "{name} is switched off. They cannot sign in, and their phone is no longer answered.",
      "team.switchedOn": "{name} is switched on again.",
      "team.phoneLinked": "That phone is linked. It can now call Kyro as this person.",
      "team.empty": "Nobody is on your team yet. Add the first person above.",
      "team.count": "{n} of {limit} people.",
      "team.added": "{name} has been added",
      "team.addedText": "They sign in at the usual page with {email} and this temporary password:",
      "team.addedNotice": "{name} was added to your team.",
      "team.signedInAs": "Signed in as {name}.",
      "team.notManager": "Only a business manager can open this page. Ask the owner to make your account a business manager.",

      // platform page
      "platform.title": "Businesses · Kyro Genesis | AgriNexus",
      "platform.eyebrow": "Platform owner",
      "platform.h1": "Businesses",
      "platform.lede": "Each business has its own private space: its own people, records and phone list. Create a business with its first Admin, link the phone number it will use, and give its Admin a new temporary password if they are locked out. You cannot read a business's records from here.",
      "platform.createTitle": "Create a business",
      "platform.businessName": "Business name",
      "platform.businessId": "Business id",
      "platform.idHint": "2 to 40 lowercase letters, digits or dashes",
      "platform.adminName": "First Admin's name",
      "platform.adminEmail": "First Admin's email",
      "platform.country": "Country (optional)",
      "platform.createButton": "Create business",
      "platform.createNote": "The id cannot be changed later. The Admin's email must not already be used anywhere in Kyro.",
      "platform.secretNote": "This is shown **once**. Give it to the person privately. Close this box and it is gone; you can always set a new one.",
      "platform.listTitle": "Your businesses",
      "platform.person": "person",
      "platform.people": "people",
      "platform.peopleLine": "{n} {unit} · Admin: {admins}",
      "platform.none": "none",
      "platform.noRecord": "This business's record could not be read.",
      "platform.lastActivity": "last activity {date}",
      "platform.noActivity": "no activity yet",
      "platform.useLine": "Use: {last} · {events} recent events · {orders} orders · {health} health intakes · {ai} AI runs (counts only, never the content)",
      "platform.noNumber": "No phone number linked yet. Calls to your own number never reach this business.",
      "platform.resetButton": "New password for the Admin",
      "platform.reopenButton": "Reopen this business",
      "platform.closeButton": "Close this business",
      "platform.reopened": "Reopened. Its people can sign in again.",
      "platform.closedNotice": "Closed. Nobody in it can sign in or phone Kyro until you reopen it. Nothing was deleted.",
      "platform.numberLinked": "That number now belongs to this business: calls to it reach only this business's people.",
      "platform.sendsAs": "Sends as (set by you; the business cannot change these)",
      "platform.fieldNow": "{label} (now {value})",
      "platform.fieldNotSet": "{label} (not set)",
      "platform.saveSender": "Save sender settings",
      "platform.typeOne": "Type a value in at least one field.",
      "platform.saved": "Saved. It applies to this business within about half a minute.",
      "platform.eraseNote": "Erase for good: removes the business's record, its people's uploaded files and queues the usual verified erasure of everyone's data. This cannot be undone.",
      "platform.eraseConfirm": "Type \"{id}\" to confirm",
      "platform.eraseButton": "Erase this business permanently",
      "platform.eraseTypeId": "Type the business id exactly to confirm.",
      "platform.erased": "{id} was erased: {people} people, {files} uploaded files removed, {queued} engine erasures queued.",
      "platform.empty": "No businesses yet. Create the first one above.",
      "platform.created": "{name} has been created",
      "platform.createdText": "Its first Admin signs in at the usual page with {email} and this temporary password:",
      "platform.createdNotice": "{name} was created.",
      "platform.signedIn": "Signed in as the platform owner.",
      "platform.notOwner": "Only the platform owner can open this page.",
      "sender.smsFrom": "SMS sender",
      "sender.whatsappFrom": "WhatsApp sender",
      "sender.emailFrom": "Email sender",
      "sender.paystackSubaccount": "Paystack payout account",
      "sender.flutterwaveSubaccount": "Flutterwave payout account",

      // platform activity
      "activity.title": "Activity",
      "activity.intro": "What the platform owner has done to businesses, newest first. It is kept here, outside every business, so erasing a business does not erase this record. Passwords are never recorded.",
      "activity.filter": "Show activity for",
      "activity.all": "All businesses",
      "activity.empty": "No activity yet.",
      "activity.failed": "The activity could not be loaded.",
      "activity.by": "by {who}",
      "activity.erasedBusiness": "(erased)",
      "activity.business.created": "Business created",
      "activity.business.settings_changed": "Sender settings changed",
      "activity.business.closed": "Business closed",
      "activity.business.reopened": "Business reopened",
      "activity.business.erased": "Business erased",
      "activity.business.erase_incomplete": "Erase stopped, nothing deleted",
      "activity.business.number_linked": "Phone number linked",
      "activity.business.admin_password_reset": "New password set for the Admin",
      "activity.fact.adminEmail": "First Admin: {value}",
      "activity.fact.phone": "Number: {value}",
      "activity.fact.fields": "Changed: {value}",
      "activity.fact.signInsEnded": "Sign-ins ended: {value}",
      "activity.fact.people": "People: {value}",
      "activity.fact.uploadsRemoved": "Files removed: {value}",
      "activity.fact.engineErasuresQueued": "Erasures queued: {value}",
      "activity.fact.engineErasuresFailed": "Could not be queued: {value}",

      // the server's own messages (see serverError)
      "err.signInFirst": "Sign in first.",
      "err.notFound": "Not found",
      "err.methodNotAllowed": "Method not allowed",
      "err.notOwner": "Only the platform owner can manage businesses.",
      "err.notManager": "Only a business manager can manage a team.",
      "err.tooMany": "Too many changes in a short time. Wait a few minutes, then try again.",
      "err.personName": "Enter the person's name.",
      "err.personEmail": "Enter a valid email for the person.",
      "err.emailExists": "That email already belongs to an existing account.",
      "err.emailOtherBusiness": "That email already belongs to another business.",
      "err.teamFull": "A team can have up to {n} people. Ask an Admin to raise it.",
      "err.passwordNotChanged": "The password could not be changed just now. Try again in a minute.",
      "err.sayOnOff": "Say whether the account should be on (active: true) or off (active: false).",
      "err.numberLinkedElsewhere": "That number is already linked to another account.",
      "err.threeNumbers": "A person can have up to 3 phone numbers. Remove one first.",
      "err.numberNotOnList": "That phone number is not on your team's list.",
      "err.enterEmailOfPerson": "Enter the email of the person.",
      "err.ownAccount": "That is your own account. Change your own password from the sign-in screen.",
      "err.nobodyOnTeam": "There is nobody with that email on your team.",
      "err.onlyAdminManager": "Only an Admin can change another business manager.",
      "err.numberFormat": "Enter the phone number with its country code, starting with +, for example +254712345678.",
      "err.numberAccountEmail": "Enter the email of the account this number belongs to.",
      "err.noAccount": "There is no account with that email. Create the account first, then add the number.",
      "err.guest": "A guest session is not a saved account, so a phone number cannot be linked to it.",
      "err.listFull": "This list is full ({n} numbers). Remove one first.",
      "err.notSaved": "That could not be saved just now. Try again in a minute.",
      "err.businessId": "The business id is 2 to 40 lowercase letters, digits or dashes (for example green-valley).",
      "err.businessName": "Enter the business name.",
      "err.firstAdminName": "Enter the name of the business's first Admin.",
      "err.firstAdminEmail": "Enter a valid email for the first Admin.",
      "err.idTaken": "That business id is already taken.",
      "err.noBusiness": "There is no business with that id.",
      "err.typeIdAgain": "Type the business id again to confirm. This cannot be undone.",
      "err.closeFirst": "Close the business first. Erasing is only allowed for a closed business.",
      "err.noAdmin": "That business has no Admin account.",
      "err.directoryDown": "The business directory is not available right now. Nothing was changed.",
      "err.businessExists": "That business already exists.",
      "err.numberOtherBusiness": "That phone number already belongs to another business.",
      "err.invalidSetting": "That is not a valid {label}.",
      "err.eraseStopped": "The erase was stopped and nothing was deleted: {failed} of {people} people's data could not be queued for erasure ({list}). The business is still closed. Try again in a minute."
    },
    sw: {
      "back": "← Kyro Genesis",
      "checking": "Inakagua kuingia kwako…",
      "signInFirst": "Ingia kwenye Kyro kwanza (tumia kiungo cha juu), kisha pakia ukurasa huu upya.",
      "didNotWork": "Hilo halikufanikiwa.",
      "secretTitle": "Nenosiri la muda",
      "secretClose": "Nimempa. Funga",
      "linkPhone": "Unganisha simu",
      "remove": "Ondoa",
      "closed": "Imefungwa",
      "newPasswordFor": "Nenosiri jipya la {name}",
      "resetText": "Nenosiri lao la zamani na simu au kivinjari chochote walichoingia navyo havifanyi kazi tena. Wanaingia kwenye ukurasa wa kawaida kwa {email} na nenosiri hili:",
      "passwordMade": "Nenosiri jipya limetengenezwa. Linaonyeshwa mara moja, juu ya ukurasa.",
      "phoneLabel": "Simu, pamoja na msimbo wa nchi",
      "phoneLabelLong": "Nambari ya simu, pamoja na msimbo wa nchi",

      "team.title": "Timu yangu · Kyro Genesis | AgriNexus",
      "team.eyebrow": "Meneja wa biashara",
      "team.h1": "Timu yangu",
      "team.lede": "Ongeza watu wanaofanya kazi nawe, mpe mtu nenosiri jipya, zima akaunti ya mtu anapoondoka, na uunganishe simu atakayotumia kuzungumza na Kyro. Unaona watu wa timu **yako** tu, na hakuna rekodi za faragha za mtu yeyote.",
      "team.addTitle": "Ongeza mtu",
      "team.name": "Jina",
      "team.email": "Barua pepe",
      "team.addButton": "Ongeza kwenye timu yangu",
      "team.secretNote": "Hii inaonyeshwa **mara moja tu**. Mpe mtu huyo kwa siri (ana kwa ana au kwa ujumbe anaoweza kusoma yeye tu). Ukifunga kisanduku hiki itatoweka; unaweza kuweka jipya wakati wowote.",
      "team.peopleTitle": "Watu wa timu yangu",
      "team.active": "Amewashwa",
      "team.off": "Amezimwa",
      "team.manager": "Meneja wa biashara",
      "team.noPhone": "Hakuna simu iliyounganishwa bado. Bila simu, mtu huyu hawezi kuzungumza na Kyro kwa simu.",
      "team.newPassword": "Nenosiri jipya",
      "team.switchOff": "Zima",
      "team.switchOn": "Washa",
      "team.labelOptional": "Lebo (si lazima)",
      "team.labelExample": "mf. Simu ya Mary",
      "team.phoneRemoved": "Nambari hiyo ya simu imeondolewa.",
      "team.switchedOff": "{name} amezimwa. Hawezi kuingia, na simu yake haipokelewi tena.",
      "team.switchedOn": "{name} amewashwa tena.",
      "team.phoneLinked": "Simu hiyo imeunganishwa. Sasa inaweza kupiga Kyro kama mtu huyu.",
      "team.empty": "Hakuna mtu kwenye timu yako bado. Ongeza mtu wa kwanza hapo juu.",
      "team.count": "Watu {n} kati ya {limit}.",
      "team.added": "{name} ameongezwa",
      "team.addedText": "Wanaingia kwenye ukurasa wa kawaida kwa {email} na nenosiri hili la muda:",
      "team.addedNotice": "{name} ameongezwa kwenye timu yako.",
      "team.signedInAs": "Umeingia kama {name}.",
      "team.notManager": "Ni meneja wa biashara tu anayeweza kufungua ukurasa huu. Mwombe mmiliki akufanye meneja wa biashara.",

      "platform.title": "Biashara · Kyro Genesis | AgriNexus",
      "platform.eyebrow": "Mmiliki wa jukwaa",
      "platform.h1": "Biashara",
      "platform.lede": "Kila biashara ina nafasi yake ya faragha: watu wake, rekodi zake na orodha yake ya simu. Tengeneza biashara pamoja na Msimamizi wake wa kwanza, unganisha nambari ya simu itakayotumia, na mpe Msimamizi wake nenosiri jipya la muda akikwama. Huwezi kusoma rekodi za biashara kutoka hapa.",
      "platform.createTitle": "Tengeneza biashara",
      "platform.businessName": "Jina la biashara",
      "platform.businessId": "Kitambulisho cha biashara",
      "platform.idHint": "Herufi ndogo, tarakimu au vistari 2 hadi 40",
      "platform.adminName": "Jina la Msimamizi wa kwanza",
      "platform.adminEmail": "Barua pepe ya Msimamizi wa kwanza",
      "platform.country": "Nchi (si lazima)",
      "platform.createButton": "Tengeneza biashara",
      "platform.createNote": "Kitambulisho hakiwezi kubadilishwa baadaye. Barua pepe ya Msimamizi isiwe tayari inatumika popote kwenye Kyro.",
      "platform.secretNote": "Hii inaonyeshwa **mara moja tu**. Mpe mtu huyo kwa siri. Ukifunga kisanduku hiki itatoweka; unaweza kuweka jipya wakati wowote.",
      "platform.listTitle": "Biashara zako",
      "platform.person": "mtu",
      "platform.people": "watu",
      "platform.peopleLine": "{unit} {n} · Msimamizi: {admins}",
      "platform.none": "hakuna",
      "platform.noRecord": "Rekodi ya biashara hii haikuweza kusomwa.",
      "platform.lastActivity": "shughuli ya mwisho {date}",
      "platform.noActivity": "hakuna shughuli bado",
      "platform.useLine": "Matumizi: {last} · matukio ya hivi karibuni {events} · oda {orders} · usajili wa afya {health} · matumizi ya AI {ai} (hesabu tu, si maudhui kamwe)",
      "platform.noNumber": "Hakuna nambari ya simu iliyounganishwa bado. Simu kwa nambari yako mwenyewe hazifiki kwa biashara hii.",
      "platform.resetButton": "Nenosiri jipya la Msimamizi",
      "platform.reopenButton": "Fungua biashara hii tena",
      "platform.closeButton": "Funga biashara hii",
      "platform.reopened": "Imefunguliwa tena. Watu wake wanaweza kuingia tena.",
      "platform.closedNotice": "Imefungwa. Hakuna anayeweza kuingia au kupiga Kyro hadi uifungue tena. Hakuna kilichofutwa.",
      "platform.numberLinked": "Nambari hiyo sasa ni ya biashara hii: simu zinazopigwa kwake zinafika kwa watu wa biashara hii tu.",
      "platform.sendsAs": "Hutuma kama (unaweka wewe; biashara haiwezi kubadilisha haya)",
      "platform.fieldNow": "{label} (sasa {value})",
      "platform.fieldNotSet": "{label} (haijawekwa)",
      "platform.saveSender": "Hifadhi mipangilio ya mtumaji",
      "platform.typeOne": "Andika thamani kwenye sehemu angalau moja.",
      "platform.saved": "Imehifadhiwa. Itaanza kufanya kazi kwa biashara hii ndani ya nusu dakika hivi.",
      "platform.eraseNote": "Futa kabisa: huondoa rekodi ya biashara, faili zilizopakiwa na watu wake, na kupanga ufutaji wa kawaida uliothibitishwa wa data ya kila mtu. Hili haliwezi kutenduliwa.",
      "platform.eraseConfirm": "Andika \"{id}\" ili kuthibitisha",
      "platform.eraseButton": "Futa biashara hii kabisa",
      "platform.eraseTypeId": "Andika kitambulisho cha biashara kama kilivyo ili kuthibitisha.",
      "platform.erased": "{id} imefutwa: watu {people}, faili {files} zilizopakiwa zimeondolewa, ufutaji {queued} wa data umepangwa.",
      "platform.empty": "Hakuna biashara bado. Tengeneza ya kwanza hapo juu.",
      "platform.created": "{name} imetengenezwa",
      "platform.createdText": "Msimamizi wake wa kwanza anaingia kwenye ukurasa wa kawaida kwa {email} na nenosiri hili la muda:",
      "platform.createdNotice": "{name} imetengenezwa.",
      "platform.signedIn": "Umeingia kama mmiliki wa jukwaa.",
      "platform.notOwner": "Mmiliki wa jukwaa tu anaweza kufungua ukurasa huu.",
      "sender.smsFrom": "Mtumaji wa SMS",
      "sender.whatsappFrom": "Mtumaji wa WhatsApp",
      "sender.emailFrom": "Mtumaji wa barua pepe",
      "sender.paystackSubaccount": "Akaunti ya malipo ya Paystack",
      "sender.flutterwaveSubaccount": "Akaunti ya malipo ya Flutterwave",

      "activity.title": "Shughuli",
      "activity.intro": "Mambo ambayo mmiliki wa jukwaa amefanya kwa biashara, ya hivi karibuni kwanza. Yanahifadhiwa hapa, nje ya kila biashara, kwa hivyo kufuta biashara hakufuti rekodi hii. Manenosiri hayarekodiwi kamwe.",
      "activity.filter": "Onyesha shughuli za",
      "activity.all": "Biashara zote",
      "activity.empty": "Hakuna shughuli bado.",
      "activity.failed": "Shughuli hazikuweza kupakiwa.",
      "activity.by": "na {who}",
      "activity.erasedBusiness": "(imefutwa)",
      "activity.business.created": "Biashara imetengenezwa",
      "activity.business.settings_changed": "Mipangilio ya mtumaji imebadilishwa",
      "activity.business.closed": "Biashara imefungwa",
      "activity.business.reopened": "Biashara imefunguliwa tena",
      "activity.business.erased": "Biashara imefutwa",
      "activity.business.erase_incomplete": "Ufutaji umesimamishwa, hakuna kilichofutwa",
      "activity.business.number_linked": "Nambari ya simu imeunganishwa",
      "activity.business.admin_password_reset": "Nenosiri jipya limewekwa kwa Msimamizi",
      "activity.fact.adminEmail": "Msimamizi wa kwanza: {value}",
      "activity.fact.phone": "Nambari: {value}",
      "activity.fact.fields": "Vilivyobadilishwa: {value}",
      "activity.fact.signInsEnded": "Kuingia kulikokomeshwa: {value}",
      "activity.fact.people": "Watu: {value}",
      "activity.fact.uploadsRemoved": "Faili zilizoondolewa: {value}",
      "activity.fact.engineErasuresQueued": "Ufutaji uliopangwa: {value}",
      "activity.fact.engineErasuresFailed": "Haukuweza kupangwa: {value}",

      "err.signInFirst": "Ingia kwanza.",
      "err.notFound": "Haipatikani.",
      "err.methodNotAllowed": "Njia hii hairuhusiwi.",
      "err.notOwner": "Mmiliki wa jukwaa tu anaweza kusimamia biashara.",
      "err.notManager": "Meneja wa biashara tu anaweza kusimamia timu.",
      "err.tooMany": "Mabadiliko mengi sana kwa muda mfupi. Subiri dakika chache, kisha ujaribu tena.",
      "err.personName": "Andika jina la mtu.",
      "err.personEmail": "Andika barua pepe sahihi ya mtu huyo.",
      "err.emailExists": "Barua pepe hiyo tayari ni ya akaunti iliyopo.",
      "err.emailOtherBusiness": "Barua pepe hiyo tayari ni ya biashara nyingine.",
      "err.teamFull": "Timu inaweza kuwa na hadi watu {n}. Mwombe Msimamizi aongeze.",
      "err.passwordNotChanged": "Nenosiri halikuweza kubadilishwa sasa hivi. Jaribu tena baada ya dakika moja.",
      "err.sayOnOff": "Sema kama akaunti iwe imewashwa au imezimwa.",
      "err.numberLinkedElsewhere": "Nambari hiyo tayari imeunganishwa na akaunti nyingine.",
      "err.threeNumbers": "Mtu anaweza kuwa na hadi nambari 3 za simu. Ondoa moja kwanza.",
      "err.numberNotOnList": "Nambari hiyo ya simu haipo kwenye orodha ya timu yako.",
      "err.enterEmailOfPerson": "Andika barua pepe ya mtu huyo.",
      "err.ownAccount": "Hiyo ni akaunti yako mwenyewe. Badilisha nenosiri lako kwenye skrini ya kuingia.",
      "err.nobodyOnTeam": "Hakuna mtu mwenye barua pepe hiyo kwenye timu yako.",
      "err.onlyAdminManager": "Msimamizi tu anaweza kubadilisha meneja mwingine wa biashara.",
      "err.numberFormat": "Andika nambari ya simu pamoja na msimbo wa nchi, ikianza na +, kwa mfano +254712345678.",
      "err.numberAccountEmail": "Andika barua pepe ya akaunti ambayo nambari hii ni yake.",
      "err.noAccount": "Hakuna akaunti yenye barua pepe hiyo. Tengeneza akaunti kwanza, kisha ongeza nambari.",
      "err.guest": "Kikao cha mgeni si akaunti iliyohifadhiwa, kwa hivyo nambari ya simu haiwezi kuunganishwa nacho.",
      "err.listFull": "Orodha hii imejaa (nambari {n}). Ondoa moja kwanza.",
      "err.notSaved": "Hilo halikuweza kuhifadhiwa sasa hivi. Jaribu tena baada ya dakika moja.",
      "err.businessId": "Kitambulisho cha biashara ni herufi ndogo, tarakimu au vistari 2 hadi 40 (kwa mfano green-valley).",
      "err.businessName": "Andika jina la biashara.",
      "err.firstAdminName": "Andika jina la Msimamizi wa kwanza wa biashara.",
      "err.firstAdminEmail": "Andika barua pepe sahihi ya Msimamizi wa kwanza.",
      "err.idTaken": "Kitambulisho hicho cha biashara tayari kinatumika.",
      "err.noBusiness": "Hakuna biashara yenye kitambulisho hicho.",
      "err.typeIdAgain": "Andika kitambulisho cha biashara tena ili kuthibitisha. Hili haliwezi kutenduliwa.",
      "err.closeFirst": "Funga biashara kwanza. Kufuta kunaruhusiwa kwa biashara iliyofungwa tu.",
      "err.noAdmin": "Biashara hiyo haina akaunti ya Msimamizi.",
      "err.directoryDown": "Orodha ya biashara haipatikani sasa hivi. Hakuna kilichobadilishwa.",
      "err.businessExists": "Biashara hiyo tayari ipo.",
      "err.numberOtherBusiness": "Nambari hiyo ya simu tayari ni ya biashara nyingine.",
      "err.invalidSetting": "Hiyo si {label} sahihi.",
      "err.eraseStopped": "Ufutaji umesimamishwa na hakuna kilichofutwa: data ya watu {failed} kati ya {people} haikuweza kupangwa kufutwa ({list}). Biashara bado imefungwa. Jaribu tena baada ya dakika moja."
    }
  };

  // An exact message the server sends -> its key. (The English is looked up in TEXT.en, so the two cannot drift apart.)
  const EXACT_ERRORS = [
    "err.signInFirst", "err.notFound", "err.methodNotAllowed", "err.notOwner", "err.notManager", "err.tooMany", "err.personName", "err.personEmail", "err.emailExists", "err.emailOtherBusiness",
    "err.passwordNotChanged", "err.sayOnOff", "err.numberLinkedElsewhere", "err.threeNumbers", "err.numberNotOnList", "err.enterEmailOfPerson", "err.ownAccount", "err.nobodyOnTeam", "err.onlyAdminManager",
    "err.numberFormat", "err.numberAccountEmail", "err.noAccount", "err.guest", "err.notSaved", "err.businessId", "err.businessName", "err.firstAdminName", "err.firstAdminEmail", "err.idTaken",
    "err.noBusiness", "err.typeIdAgain", "err.closeFirst", "err.noAdmin", "err.directoryDown", "err.businessExists", "err.numberOtherBusiness"
  ];
  const exactByEnglish = new Map(EXACT_ERRORS.map(key => [TEXT.en[key], key]));
  // A message with a number (or a list) in it.
  const PATTERNS = [
    { key: "err.teamFull", regex: /^A team can have up to (\d+) people\. Ask an Admin to raise it\.$/, names: ["n"] },
    { key: "err.listFull", regex: /^This list is full \((\d+) numbers\)\. Remove one first\.$/, names: ["n"] },
    { key: "err.invalidSetting", regex: /^That is not a valid (.+)\.$/, names: ["label"] },
    { key: "err.eraseStopped", regex: /^The erase was stopped and nothing was deleted: (\d+) of (\d+) people's data could not be queued for erasure \((.*)\)\. The business is still closed\. Try again in a minute\.$/, names: ["failed", "people", "list"] }
  ];
  const SENDER_KEYS = ["sender.smsFrom", "sender.whatsappFrom", "sender.emailFrom", "sender.paystackSubaccount", "sender.flutterwaveSubaccount"];

  // "sw" or "sw-KE" is Kiswahili; anything else (or nothing) is English. (The same rule public/kyro-navigation.js uses.)
  const languageOf = value => (/^sw(?:[-_]|$)/i.test(String(value || "")) ? "sw" : "en");
  const fill = (template, params) => String(template).replace(/\{(\w+)\}/g, (whole, name) => (params && params[name] !== undefined ? String(params[name]) : whole));
  const tx = (language, key, params) => fill(TEXT[language]?.[key] ?? TEXT.en[key] ?? key, params);

  // A message from the server, in the person's language. A message not known here is returned unchanged (English).
  function serverError(language, message) {
    const text = String(message ?? "");
    if (language !== "sw") return text;
    const exact = exactByEnglish.get(text);
    if (exact) return tx(language, exact);
    for (const pattern of PATTERNS) {
      const match = pattern.regex.exec(text);
      if (!match) continue;
      const params = Object.fromEntries(pattern.names.map((name, index) => [name, match[index + 1]]));
      if (pattern.key === "err.invalidSetting") {
        const senderKey = SENDER_KEYS.find(key => TEXT.en[key].toLowerCase() === String(params.label).toLowerCase());
        if (!senderKey) return text;
        params.label = tx(language, senderKey).toLowerCase();
      }
      return tx(language, pattern.key, params);
    }
    return text;
  }

  // The language to use before the server has said who is signed in: the one chosen on the sign-in screen.
  function savedLanguage() {
    try { return languageOf(root.localStorage?.getItem("agrinexusLoginLanguage")); } catch { return "en"; }
  }

  // Page helpers (browser only). Static words in the HTML carry data-i18n="key" (text), data-i18n-placeholder, data-i18n-title; **bold** in a text is shown in bold.
  function setRich(node, text) {
    const parts = String(text).split("**");
    node.replaceChildren(...parts.map((part, index) => {
      if (index % 2 === 0) return root.document.createTextNode(part);
      const strong = root.document.createElement("strong"); strong.textContent = part; return strong;
    }));
  }
  function applyStatic(language, scope) {
    const doc = root.document;
    const area = scope || doc;
    area.querySelectorAll("[data-i18n]").forEach(node => setRich(node, tx(language, node.dataset.i18n)));
    area.querySelectorAll("[data-i18n-placeholder]").forEach(node => node.setAttribute("placeholder", tx(language, node.dataset.i18nPlaceholder)));
    area.querySelectorAll("[data-i18n-title]").forEach(node => node.setAttribute("title", tx(language, node.dataset.i18nTitle)));
    if (!scope) {
      const titleKey = doc.documentElement.dataset.titleKey;
      if (titleKey) doc.title = tx(language, titleKey);
      doc.documentElement.setAttribute("lang", language);
    }
  }

  const api = { TEXT, languageOf, tx, serverError, savedLanguage, applyStatic, setRich, SENDER_KEYS };
  root.KyroPageText = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof globalThis !== "undefined" ? globalThis : this);

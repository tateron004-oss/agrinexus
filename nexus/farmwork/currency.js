"use strict";

// The money a person normally uses, taken ONCE from the country on their profile (Kenya: KSh, Nigeria: naira...). An amount said with no currency is stored with it, so it never has to be
// guessed later: a single "$20" must not change what the earlier amounts were. Names are the ones the rest of the toolkit stores ("KSh", "TSh", "UGX", "₦", "GHS", "$"...).
const BY_COUNTRY = [
  [/^(?:kenya|ke|kenyan)$/i, "KSh"], [/^(?:tanzania|tz|tanzanian)$/i, "TSh"], [/^(?:uganda|ug|ugandan)$/i, "UGX"], [/^(?:nigeria|ng|nigerian)$/i, "₦"], [/^(?:ghana|gh|ghanaian)$/i, "GHS"],
  [/^(?:ethiopia|et|ethiopian)$/i, "ETB"], [/^(?:rwanda|rw|rwandan)$/i, "RWF"], [/^(?:zambia|zm|zambian)$/i, "ZMW"], [/^(?:south africa|za|south african)$/i, "ZAR"]
];
const currencyForCountry = country => { const name = String(country || "").trim(); const hit = name ? BY_COUNTRY.find(([pattern]) => pattern.test(name)) : null; return hit ? hit[1] : ""; };

module.exports = Object.freeze({ currencyForCountry });

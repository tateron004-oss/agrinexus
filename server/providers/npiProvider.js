const { clean, envEnabled, providerResponse, disabledResponse, failedResponse, safeJson } = require("./providerUtils");

function status(env = process.env) {
  return {
    provider: "nppes-npi-registry",
    enabled: envEnabled("NEXUS_PROVIDER_SEARCH_ENABLED", env, true),
    readOnly: true,
    noHealthDataSharing: true
  };
}

function normalizeProvider(item = {}) {
  const basic = item.basic || {};
  const address = (item.addresses || []).find(entry => entry.address_purpose === "LOCATION") || (item.addresses || [])[0] || {};
  const taxonomy = (item.taxonomies || []).find(entry => entry.primary) || (item.taxonomies || [])[0] || {};
  const individualName = [basic.first_name, basic.middle_name, basic.last_name].filter(Boolean).join(" ");
  return {
    providerName: basic.organization_name || individualName || basic.name || "NPI provider",
    organizationName: basic.organization_name || "",
    providerType: taxonomy.desc || basic.credential || "",
    address: [address.address_1, address.city, address.state, address.postal_code].filter(Boolean).join(", "),
    phone: address.telephone_number || "",
    npi: item.number || "",
    source: "CMS NPPES NPI Registry",
    credentialingNote: "NPI lookup is public directory data and does not validate licensure or credentialing."
  };
}

async function search(query = {}, env = process.env) {
  const provider = "nppes-npi-registry";
  const action = "providers.search";
  if (!envEnabled("NEXUS_PROVIDER_SEARCH_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_PROVIDER_SEARCH_ENABLED");
  const params = new URLSearchParams({ version: "2.1", limit: String(Math.min(Number(query.limit || 10), 20)) });
  if (clean(query.name)) params.set("name", clean(query.name));
  if (clean(query.organization)) params.set("organization_name", clean(query.organization));
  if (clean(query.city)) params.set("city", clean(query.city));
  if (clean(query.state)) params.set("state", clean(query.state).toUpperCase());
  if (clean(query.postalCode)) params.set("postal_code", clean(query.postalCode));
  if (clean(query.taxonomy)) params.set("taxonomy_description", clean(query.taxonomy));
  if (![...params.keys()].some(key => !["version", "limit"].includes(key))) {
    return providerResponse({
      ok: false,
      provider,
      action,
      status: "blocked",
      message: "Enter a name, specialty, organization, city/state, or postal code. No health data is shared.",
      data: { lookupOnly: true }
    });
  }
  try {
    const response = await fetch(`https://npiregistry.cms.hhs.gov/api/?${params.toString()}`);
    const payload = await safeJson(response);
    if (!response.ok) throw new Error(payload.Errors?.[0]?.description || response.statusText);
    const cards = (payload.results || []).map(normalizeProvider);
    return providerResponse({
      provider,
      action,
      status: "completed",
      message: `Found ${cards.length} public provider record(s). Lookup only; no provider was contacted.`,
      data: { cards, source: "CMS NPPES NPI Registry", lookupOnly: true, noHealthDataShared: true }
    });
  } catch (error) {
    return failedResponse(provider, action, error);
  }
}

module.exports = { status, search };

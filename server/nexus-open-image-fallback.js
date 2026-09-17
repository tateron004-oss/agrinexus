"use strict";
// Adapted from da846585 content-action-service openverseLookup; no renderer or transport interception.
function clean(value, limit = 260) { return String(value || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().slice(0,limit); }
function publicUrl(value) {
  try { const url=new URL(value); if(url.protocol!=='https:'||url.username||url.password||!url.hostname.includes('.')||/^(localhost|127\.|10\.|192\.168\.|169\.254\.|172\.(1[6-9]|2\d|3[01])\.)/i.test(url.hostname)||url.hostname.startsWith('['))return ''; return url.href; } catch { return ''; }
}
async function searchOpenImages(query, {fetchFn=globalThis.fetch}={}) {
  const text=clean(query,180); if(!text) return [];
  const generic=new Set(['image','images','photo','photos','picture','pictures','with','from','disease','diseases','symptom','symptoms']);
  const words=text.toLowerCase().split(/[^a-z0-9]+/).filter(word=>word.length>=3&&!generic.has(word));
  if(words.includes('maize')) words.push('corn');
  if(!words.length)return [];
  const disease=/\b(disease|diseases|symptom|symptoms|infection|pest)\b/i.test(text);
  const pathology=/\b(disease|symptom|virus|viral|blight|rust|necrosis|wilt|smut|mildew|rot|streak|fung\w*|bacter\w*|pest|lesion)\b/i;
  const url=new URL('https://api.openverse.org/v1/images/');url.searchParams.set('q',text);url.searchParams.set('page_size','12');
  // Openverse (like Wikimedia) can throttle or reject requests with no
  // identifying User-Agent, especially from cloud/datacenter IP ranges --
  // every other outbound provider call in this codebase already sends one.
  const response=await fetchFn(url,{headers:{accept:'application/json','user-agent':'AgriNexus/1.0 rural-health-agritech-investor-platform'},redirect:'error',signal:AbortSignal.timeout(8000)});
  if(!response.ok)throw new Error('Openverse image retrieval unavailable');
  const payload=await response.json();const seen=new Set();
  return (Array.isArray(payload.results)?payload.results:[]).filter(item=>item&&typeof item==='object').map(item=>{
    const title=clean(item.title), lower=title.toLowerCase();
    if(!words.some(word=>lower.includes(word))||(disease&&!pathology.test(title)))return null;
    const imageUrl=publicUrl(item.thumbnail||item.url),sourceUrl=publicUrl(item.foreign_landing_url||item.detail_url);
    if(!imageUrl||!sourceUrl||seen.has(sourceUrl))return null;seen.add(sourceUrl);
    return {title,imageUrl,sourceUrl,creator:clean(item.creator,180),license:clean(item.license,120)||'See source',description:'Source-linked image result; review the source page for context and license.',sourceName:clean(item.source||item.provider,120)||'Openverse'};
  }).filter(Boolean).slice(0,6);
}
module.exports=Object.freeze({searchOpenImages,publicUrl});

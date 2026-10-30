// Pasted once into each Koach Learn dashboard tab. Adds the hidden file box that batch bundles are attached to, and a loop that runs the bundles
// (koachlearn-upload-stage.js) one after another: unpack the files, load the uploader the bundle carries, run its queue, keep the results.
// Every bundle attached to the box is read at once and put in line (window.klPending), so a tab can be handed several bundles while it is busy.
// Pasting it again into a tab that runs the earlier one-bundle loader takes over from it: the bundle running now finishes first.
(() => {
  let inp = document.getElementById("kl-files");
  if (!inp) {
    inp = document.createElement("input"); inp.type = "file"; inp.id = "kl-files";
    inp.setAttribute("aria-label", "Koach Learn upload files");
    inp.style.cssText = "position:fixed;left:0;bottom:0;width:120px;height:24px;opacity:0.01;z-index:2147483647";
    document.body.appendChild(inp);
  }
  window.klAllResults = window.klAllResults || [];
  window.klPending = window.klPending || [];
  // a bundle that already ran (or is running) is never put in line again
  window.klSeen = window.klSeen || new Set(window.klAllResults.map(r => r.batch).concat(window.klBatch ? [window.klBatch] : []));
  const take = f => {
    if (!f || window.klSeen.has(f.name)) return;
    window.klSeen.add(f.name);
    const item = { name: f.name, buf: null };
    window.klPending.push(item);
    f.arrayBuffer().then(b => { item.buf = b; }, e => { item.err = e.message; });
  };
  const run = async item => {
    const buf = item.buf;
    const n = new DataView(buf).getUint32(0, true);
    const h = JSON.parse(new TextDecoder().decode(new Uint8Array(buf, 4, n)));
    window.klFiles = {};
    for (const x of h.files) window.klFiles[x.name] = new File([buf.slice(4 + n + x.offset, 4 + n + x.offset + x.size)], x.name.replace(/^.*__/, ""), { type: x.type });
    new Function(h.uploader)();
    window.klBatch = item.name;
    const r = await window.klRunQueue(h.items);
    window.klAllResults.push(...r.map(x => ({ batch: item.name, key: x.key, state: x.state, course: x.course })));
  };
  // the earlier loader calls window.klLoad for a newly attached bundle; now that only puts it in line
  window.klLoad = async f => take(f);
  if (!window.klLineOn) {
    window.klLineOn = true;
    // a page that holds a lock is one Chrome is less ready to freeze or discard while it sits in the background
    try { navigator.locks.request(`kl-keep-${Math.random()}`, () => new Promise(() => {})); } catch (_) {}
    inp.addEventListener("change", () => take(inp.files[0]));
    (async () => {
      for (;;) {
        take(inp.files[0]);
        const next = window.klPending[0];
        if (next && (next.buf || next.err) && window.klQueueState !== "running") {
          window.klPending.shift();
          if (next.err) window.klAutoErr = `${next.name}: ${next.err}`;
          else try { await run(next); } catch (e) { window.klAutoErr = `${next.name}: ${e.message}`; window.klBatch = next.name; }
        }
        await new Promise(r => setTimeout(r, 3000));
      }
    })();
  }
  return "loader ready";
})();

// Pasted once into each Koach Learn dashboard tab. Adds the hidden file box that batch bundles are attached to, and a loop that runs each newly attached
// bundle (koachlearn-upload-stage.js) when the tab is free: unpack the files, load the uploader the bundle carries, run its queue, keep the results.
// So a tab can be handed its next bundle while it is still busy with the current one.
(() => {
  let inp = document.getElementById("kl-files");
  if (!inp) {
    inp = document.createElement("input"); inp.type = "file"; inp.id = "kl-files";
    inp.setAttribute("aria-label", "Koach Learn upload files");
    inp.style.cssText = "position:fixed;left:0;bottom:0;width:120px;height:24px;opacity:0.01;z-index:2147483647";
    document.body.appendChild(inp);
  }
  window.klAllResults = window.klAllResults || [];
  window.klLoad = async f => {
    const buf = await f.arrayBuffer();
    const n = new DataView(buf).getUint32(0, true);
    const h = JSON.parse(new TextDecoder().decode(new Uint8Array(buf, 4, n)));
    window.klFiles = {};
    for (const x of h.files) window.klFiles[x.name] = new File([buf.slice(4 + n + x.offset, 4 + n + x.offset + x.size)], x.name.replace(/^.*__/, ""), { type: x.type });
    new Function(h.uploader)();
    window.klBatch = f.name;
    const r = await window.klRunQueue(h.items);
    window.klAllResults.push(...r.map(x => ({ batch: f.name, key: x.key, state: x.state, course: x.course })));
  };
  if (!window.klAutoOn) {
    window.klAutoOn = true;
    (async () => {
      for (;;) {
        const f = inp.files[0];
        if (f && f.name !== window.klBatch && window.klQueueState !== "running") { try { await window.klLoad(f); } catch (e) { window.klAutoErr = e.message; window.klBatch = f.name; } }
        await new Promise(r => setTimeout(r, 5000));
      }
    })();
  }
  return "loader ready";
})();

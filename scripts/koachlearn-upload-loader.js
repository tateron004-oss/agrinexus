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
    // attaching scripts/koachlearn-uploader.js itself hands the tab a newer uploader for every bundle that starts after it
    if (f && /\.js$/.test(f.name)) { if (window.klUploaderFile !== f) { window.klUploaderFile = f; f.text().then(t => { new Function(t); window.klUploaderSrc = t; }, () => {}); } return; }
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
    // bundles packed before 13 Nov carry an uploader whose pauses can hang forever if its timer worker stops replying; give those the backup timer
    const oldSleep = "const sleep = ms => new Promise(r => { if (!worker) return setTimeout(r, ms); const id = ++seq; waiting[id] = r; worker.postMessage({ id, ms }); });";
    const newSleep = "const sleep = ms => new Promise(r => { let ended = false; const end = () => { if (!ended) { ended = true; r(); } }; setTimeout(end, ms + 3000); if (!worker) return; const id = ++seq; waiting[id] = end; worker.postMessage({ id, ms }); });";
    window.klPatched = h.uploader.includes(oldSleep) ? "patched" : (h.uploader.includes("let ended = false") ? "already fixed" : "not found");
    // window.klUploaderSrc: a newer scripts/koachlearn-uploader.js pasted into the tab wins over the copy packed into the bundle
    if (window.klUploaderSrc) window.klPatched = "newer uploader";
    new Function(window.klUploaderSrc || h.uploader.replace(oldSleep, newSleep))();
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
  // the uploader reads failed site requests from the timing record, so keep room for a long run
  try { performance.setResourceTimingBufferSize(5000); } catch (_) {}
  // stall marker: page address, log, question count, bundle and course all unchanged for 12 minutes while running puts the time and place in window.klStall
  if (!window.klWatch) {
    window.klWatch = true; let last = "", since = Date.now();
    setInterval(() => {
      const k = `${location.pathname}|${(window.klLog || []).length}|${window.klQuestions || 0}|${window.klBatch}|${window.klCurrent}`;
      if (k !== last) { last = k; since = Date.now(); window.klStall = null; }
      else if (window.klQueueState === "running" && Date.now() - since > 720000) window.klStall = window.klStall || `${new Date().toLocaleTimeString()} at ${k} log: ${(window.klLog || []).slice(-1)}`;
    }, 30000);
  }
  // the site's video uploader (tus) leaves a resume note in this site's local storage for every video and never removes it; on 15 Nov about
  // 17,000 of them (10 MB) filled the browser's storage, after which every video upload failed silently and all tabs sat on an open video dialog.
  // The notes only matter for resuming an unfinished upload, so they are cleared now and every 10 minutes.
  if (!window.klTusClean) {
    window.klTusClean = true;
    const clean = () => { try { for (const k of Object.keys(localStorage)) if (k.startsWith("tus::")) localStorage.removeItem(k); } catch (_) {} };
    clean(); setInterval(clean, 600000);
  }
  return "loader ready";
})();

// Kyro task stage: when Kyro opens a task (a map, a video, pictures, a result, a form, a card) the task is the only thing on the screen -- no orb layer, no banner, no workflow
// controls, no status lines -- and when the task is finished the orb comes back (see kyroReturnToOrb in app.js). One body class, `kyro-task-stage`, is the whole switch; the
// styles that hide everything else are in styles.css and are scoped to it.
//
// This file only decides WHEN the stage is on, from what is on the page:
//   isStaged(snapshot) -> boolean            (pure; the snapshot is what is open, see readSnapshot)
//   readSnapshot(document) -> snapshot       (looks at the page; nothing here changes it)
//   install(window, document) -> { sync, stop }   (keeps the class in step with the page, a frame after any change)
//
// What counts as a task: the full-screen map, a function window (its results, gallery, videos, forms), the weather / picture / pilot / provider cards and the rich-data overlay,
// a playing video or YouTube player, a guided intake and the classic workflow modal. What does NOT: the orb home itself, a song with no picture (its small bar stays), a card
// that has been parked out of sight (the live music card is kept playing off screen), and anything that is hidden.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroTaskStage = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const CLASS_NAME = "kyro-task-stage";
  const SHELL_SELECTOR = "[data-nexus-live-weather-shell], [data-nexus-visual-shell], [data-nexus-pilot-evidence-shell], [data-nexus-rural-provider-card-shell], #nexusRichDataOverlay, [data-kyro-answer-card]";

  function isStaged(snapshot) {
    const s = snapshot || {};
    return Boolean(s.mapOpen || s.functionWindow || s.shell || s.youtube || s.video || s.intake || s.workflowModal);
  }

  function shown(element) {
    if (!element) return false;
    if (element.hidden === true) return false;
    if (element.dataset && element.dataset.kyroParked === "true") return false;
    if (element.getAttribute && element.getAttribute("aria-hidden") === "true") return false;
    return true;
  }
  function anyShown(doc, selector) {
    const list = doc.querySelectorAll(selector);
    for (let i = 0; i < list.length; i += 1) if (shown(list[i])) return true;
    return false;
  }

  function readSnapshot(doc) {
    const body = doc.body;
    const has = name => Boolean(body && body.classList && body.classList.contains(name));
    return {
      mapOpen: has("user-map-full-open"),
      workflowModal: has("workflow-open"),
      functionWindow: anyShown(doc, '#nexus-workspace[data-nexus-workspace="true"]'),
      shell: anyShown(doc, SHELL_SELECTOR),
      youtube: anyShown(doc, ".nexus-youtube-player"),
      // a song with no picture keeps only its small bar; a video (or a YouTube embed) is the task
      video: anyShown(doc, ".kyro-mp:not([hidden]) video, .kyro-mp:not([hidden]) iframe"),
      intake: anyShown(doc, "#kyroVoiceIntakePanel")
    };
  }

  function install(win, doc) {
    if (!win || !doc || !doc.body || typeof win.MutationObserver !== "function") return { sync() { return false; }, stop() {} };
    let queued = false;
    function sync() {
      const snapshot = readSnapshot(doc);
      const staged = isStaged(snapshot);
      const changed = doc.body.classList.contains(CLASS_NAME) !== staged;
      if (changed) doc.body.classList.toggle(CLASS_NAME, staged);
      // the map is drawn inside the "More options" fold: keep it open while the map is the task, so the map (not a menu) is what is on screen
      if (staged && snapshot.mapOpen) {
        const folds = doc.querySelectorAll("#map details.user-module-more");
        for (let i = 0; i < folds.length; i += 1) if (!folds[i].open) folds[i].open = true;
      }
      // the map and the video change size when the rest of the page steps aside; tell them (maps redraw on a window resize)
      if (changed && typeof win.dispatchEvent === "function" && typeof win.Event === "function") { try { win.dispatchEvent(new win.Event("resize")); } catch (_) { /* optional */ } }
      return staged;
    }
    function schedule() {
      if (queued) return;
      queued = true;
      const run = () => { queued = false; try { sync(); } catch (_) { /* the page must never break because of this */ } };
      if (typeof win.requestAnimationFrame === "function") win.requestAnimationFrame(run); else win.setTimeout(run, 16);
    }
    const observer = new win.MutationObserver(schedule);
    // cards and players are added to and removed from the body; the function window is drawn inside the workspace; the body's classes and the player bar's `hidden` say the rest
    observer.observe(doc.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["class", "hidden", "data-kyro-parked", "aria-hidden"] });
    sync();
    return { sync, stop() { observer.disconnect(); } };
  }

  return Object.freeze({ CLASS_NAME, SHELL_SELECTOR, isStaged, readSnapshot, install });
});

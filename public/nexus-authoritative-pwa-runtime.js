(function (global) {
  "use strict";

  const DB_NAME = "nexus-authoritative-pwa";
  const STORE = "sync-operations";
  const DEVICE_KEY = "nexus.authoritative.deviceId";

  function deviceId() {
    let value = localStorage.getItem(DEVICE_KEY);
    if (!value) {
      value = `web_${global.crypto.randomUUID()}`;
      localStorage.setItem(DEVICE_KEY, value);
    }
    return value;
  }

  function openDatabase() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, 1);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE, { keyPath: "operationId" });
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async function storeOperation(operation) {
    const db = await openDatabase();
    await new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE, "readwrite");
      transaction.objectStore(STORE).put(operation);
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
    });
    await requestBackgroundSync();
    emit("queued", { operationId: operation.operationId });
    return operation;
  }

  async function pendingOperations() {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const request = db.transaction(STORE).objectStore(STORE).getAll();
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error);
    });
  }

  async function removeOperations(ids) {
    if (!ids.length) return;
    const db = await openDatabase();
    await new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE, "readwrite");
      ids.forEach(id => transaction.objectStore(STORE).delete(id));
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
    });
  }

  async function flush() {
    if (!navigator.onLine) return { synchronized: false, reason: "offline" };
    const operations = await pendingOperations();
    if (!operations.length) return { synchronized: true, count: 0 };
    const response = await fetch("/api/nexus/runtime/sync/push", {
      method: "POST",
      credentials: "same-origin",
      headers: { "content-type": "application/json", "x-request-id": global.crypto.randomUUID() },
      body: JSON.stringify({ deviceId: deviceId(), operations })
    });
    if (!response.ok) throw new Error(`Authoritative sync failed (${response.status}).`);
    const body = await response.json();
    const accepted = (body.results || []).filter(result => result.status !== "conflict").map(result => result.operationId || result.clientOperationId).filter(Boolean);
    await removeOperations(accepted.length ? accepted : operations.map(item => item.operationId));
    emit("synchronized", { count: accepted.length || operations.length, conflicts: (body.results || []).filter(result => result.status === "conflict") });
    return { synchronized: true, ...body };
  }

  async function requestBackgroundSync() {
    const registration = await navigator.serviceWorker?.ready;
    if (registration?.sync?.register) await registration.sync.register("nexus-authoritative-sync");
  }

  async function registerPush(applicationServerKey) {
    if (!applicationServerKey) throw new Error("Push is unavailable because no public application key is configured.");
    if (!("PushManager" in global)) throw new Error("Push notifications are not supported on this device.");
    const registration = await navigator.serviceWorker.ready;
    const permission = await Notification.requestPermission();
    if (permission !== "granted") throw new Error("Notification permission was not granted.");
    const subscription = await registration.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey });
    const response = await fetch("/api/nexus/runtime/devices", {
      method: "POST", credentials: "same-origin", headers: { "content-type": "application/json" },
      body: JSON.stringify({ deviceId: deviceId(), platform: "web", capabilities: ["offline-sync", "push"], pushEndpoint: subscription.endpoint, pushSubscription: subscription.toJSON() })
    });
    if (!response.ok) { await subscription.unsubscribe(); throw new Error(`Device registration failed (${response.status}).`); }
    emit("push-registered", { deviceId: deviceId() });
    return subscription;
  }

  function emit(state, detail) {
    global.dispatchEvent(new CustomEvent("nexus-authoritative-pwa", { detail: { state, ...detail } }));
  }

  global.addEventListener("online", () => flush().catch(error => emit("sync-failed", { message: error.message })));
  navigator.serviceWorker?.addEventListener("message", event => {
    if (event.data?.type === "NEXUS_FLUSH_AUTHORITATIVE_SYNC") flush().catch(error => emit("sync-failed", { message: error.message }));
  });

  global.NexusAuthoritativePwa = Object.freeze({ deviceId, queue: storeOperation, flush, registerPush });
})(window);

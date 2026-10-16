"use strict";
// A very small Chrome DevTools Protocol client (Node's built-in WebSocket, no dependency): send(method, params) -> result, on(event, handler), evaluate(expression) -> value.
class CdpClient {
  constructor(webSocketUrl, { WebSocketImpl = globalThis.WebSocket } = {}) {
    if (!WebSocketImpl) throw new Error("This needs Node 22 or newer (a built-in WebSocket).");
    this.url = webSocketUrl; this.WebSocketImpl = WebSocketImpl; this.nextId = 1; this.pending = new Map(); this.handlers = new Map(); this.closed = false;
  }

  open(timeoutMs = 15000) {
    return new Promise((resolve, reject) => {
      const socket = new this.WebSocketImpl(this.url);
      this.socket = socket;
      const timer = setTimeout(() => reject(new Error("Chrome did not accept the DevTools connection in time.")), timeoutMs);
      socket.addEventListener("open", () => { clearTimeout(timer); resolve(this); });
      socket.addEventListener("error", event => { clearTimeout(timer); reject(new Error("DevTools connection failed: " + (event?.message || "error"))); });
      socket.addEventListener("close", () => { this.closed = true; for (const { reject: fail } of this.pending.values()) fail(new Error("DevTools connection closed.")); this.pending.clear(); });
      socket.addEventListener("message", event => this.receive(String(event.data)));
    });
  }

  receive(text) {
    let message; try { message = JSON.parse(text); } catch { return; }
    if (message.id && this.pending.has(message.id)) {
      const { resolve, reject } = this.pending.get(message.id); this.pending.delete(message.id);
      if (message.error) reject(new Error(`${message.error.message || "DevTools error"} (${message.error.code})`)); else resolve(message.result || {});
      return;
    }
    if (message.method) for (const handler of this.handlers.get(message.method) || []) { try { handler(message.params || {}); } catch { /* a listener never breaks the connection */ } }
  }

  send(method, params = {}, timeoutMs = 60000) {
    if (this.closed) return Promise.reject(new Error("DevTools connection closed."));
    const id = this.nextId++;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => { this.pending.delete(id); reject(new Error(`${method} timed out after ${timeoutMs} ms.`)); }, timeoutMs);
      this.pending.set(id, { resolve: value => { clearTimeout(timer); resolve(value); }, reject: error => { clearTimeout(timer); reject(error); } });
      this.socket.send(JSON.stringify({ id, method, params }));
    });
  }

  on(method, handler) { if (!this.handlers.has(method)) this.handlers.set(method, []); this.handlers.get(method).push(handler); }

  // Runs an expression in the page (awaiting a promise) and returns its JSON-able value; throws with the page's own message when it throws.
  async evaluate(expression, timeoutMs = 60000) {
    const result = await this.send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true, userGesture: true }, timeoutMs);
    if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text || "The page threw an error.");
    return result.result ? result.result.value : undefined;
  }

  close() { try { this.socket?.close(); } catch { /* already closed */ } }
}

module.exports = { CdpClient };

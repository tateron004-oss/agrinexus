(() => {
  const postNative = payload => {
    const message = JSON.stringify({ type: "agrinexus.native.command", ...payload });
    if (window.AndroidAgriNexus?.postMessage) return window.AndroidAgriNexus.postMessage(message);
    if (window.webkit?.messageHandlers?.agrinexusNative?.postMessage) return window.webkit.messageHandlers.agrinexusNative.postMessage(payload);
    return false;
  };

  window.AgriNexusNativeVoice = {
    onNexusVoiceState(payload) {
      return postNative({ command: "voice.state", payload });
    },
    onVoiceState(payload) {
      return postNative({ command: "voice.state", payload });
    },
    postMessage(message) {
      const payload = typeof message === "string" ? JSON.parse(message) : message;
      return postNative({ command: "voice.state", payload });
    },
    requestPermissions() {
      return postNative({ command: "permissions.request" });
    },
    startWake() {
      return postNative({ command: "wake.start" });
    },
    stopWake() {
      return postNative({ command: "wake.stop" });
    },
    stopSpeech() {
      return postNative({ command: "voice.stop" });
    }
  };
})();


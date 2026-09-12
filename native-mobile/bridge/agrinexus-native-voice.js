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
    },
    startRealtime() {
      return postNative({ command: "voice.realtime.start" });
    },
    stopRealtime() {
      return postNative({ command: "voice.realtime.stop" });
    },
    requestLocation() {
      return postNative({ command: "route.track" });
    },
    stopLocation() {
      return postNative({ command: "route.stop" });
    },
    captureMedia() {
      return postNative({ command: "camera.capture" });
    },
    openFile() {
      return postNative({ command: "file.open" });
    },
    scheduleNotification(payload) {
      return postNative({ command: "notification.schedule", payload });
    },
    registerPush() {
      return postNative({ command: "push.register" });
    },
    flushLifecycleQueue() {
      return postNative({ command: "lifecycle.flush" });
    },
    launchCall(payload) {
      return postNative({ command: "call.launch", payload });
    }
  };
})();

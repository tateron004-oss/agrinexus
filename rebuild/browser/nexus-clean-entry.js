"use strict";

const { NexusConnectionMachine } = require("../nexus-core/connection-machine");
const { NexusMicrophoneController } = require("../nexus-core/microphone-controller");
const { NexusRealtimeConnector } = require("../nexus-core/realtime-connector");
const { NexusVoiceFoundation } = require("../nexus-core/voice-foundation");
const { NexusBrowserRuntime } = require("../nexus-core/browser-runtime");
const {
  DEFAULT_EXPERIENCE_PREFERENCES,
  normalizeExperiencePreferences
} = require("../nexus-core/experience-profile");

function createWorkspaceAdapter({ windowObject = window, timeoutMs = 8000 } = {}) {
  return ({ workspace, command }) => new Promise((resolve, reject) => {
    const requestId = crypto.randomUUID();
    const timer = setTimeout(() => {
      windowObject.removeEventListener("nexus.clean.workspace.acknowledged", onAcknowledged);
      reject(new Error(`Workspace ${workspace} did not become visible within ${timeoutMs}ms.`));
    }, timeoutMs);
    function onAcknowledged(event) {
      if (!event.detail || event.detail.requestId !== requestId) return;
      clearTimeout(timer);
      windowObject.removeEventListener("nexus.clean.workspace.acknowledged", onAcknowledged);
      resolve({
        visible: event.detail.visible === true,
        id: event.detail.acknowledgementId || requestId
      });
    }
    windowObject.addEventListener("nexus.clean.workspace.acknowledged", onAcknowledged);
    windowObject.dispatchEvent(new CustomEvent("nexus.clean.workspace.open", {
      detail: Object.freeze({ requestId, workspace, command })
    }));
  });
}

function statusFromReceipt(receipt) {
  const labels = {
    "microphone.requested": "Connecting microphone…",
    "microphone.acquired": "Listening",
    "runtime.ready": "Listening",
    "runtime.recovering": "Reconnecting…",
    "runtime.recovered": "Listening",
    "conversation.barge-in": "Listening",
    "conversation.processing": "Thinking…",
    "conversation.response-started": "Thinking…",
    "conversation.speaking": "Speaking…",
    "conversation.return-to-listening": "Listening",
    "realtime.error": "Voice response failed — tap to reconnect",
    "workspace.visible": "Listening",
    "runtime.recovery-failed": "Voice connection unavailable"
  };
  return labels[receipt.type] || null;
}

function createRemoteAudioUnlock({ windowObject = window, audioElement } = {}) {
  const AudioContextConstructor = windowObject.AudioContext || windowObject.webkitAudioContext;
  let context = null;
  let source = null;
  let gain = null;
  let volume = 1;

  return Object.freeze({
    unlock() {
      audioElement.autoplay = true;
      audioElement.muted = false;
      audioElement.volume = 1;
      audioElement.setAttribute("playsinline", "");
      if (!AudioContextConstructor) return null;
      if (!context) context = new AudioContextConstructor();
      if (!gain && typeof context.createGain === "function") {
        gain = context.createGain();
        gain.gain.value = volume;
        gain.connect(context.destination);
      }
      return context.state === "suspended" ? context.resume() : Promise.resolve();
    },
    attach(stream) {
      if (!stream || !context || typeof context.createMediaStreamSource !== "function") return false;
      if (source && typeof source.disconnect === "function") source.disconnect();
      source = context.createMediaStreamSource(stream);
      source.connect(gain || context.destination);
      audioElement.muted = true;
      return true;
    },
    setVolume(value) {
      volume = Math.min(1, Math.max(0, Number(value)));
      audioElement.volume = volume;
      if (gain) gain.gain.value = volume;
      return volume;
    },
    close() {
      if (source && typeof source.disconnect === "function") source.disconnect();
      source = null;
      if (context && typeof context.close === "function") context.close().catch(() => {});
      context = null;
      gain = null;
      audioElement.muted = false;
    }
  });
}

function boot() {
  const orb = document.getElementById("nexus-orb");
  const status = document.getElementById("nexus-status");
  const audio = document.getElementById("nexus-audio");
  const caption = document.getElementById("nexus-caption");
  const captionsControl = document.getElementById("nexus-captions");
  const slowSpeechControl = document.getElementById("nexus-slow-speech");
  const volumeControl = document.getElementById("nexus-volume");
  const replayControl = document.getElementById("nexus-replay");
  const config = window.NEXUS_CLEAN_CONFIG || {};
  const sessionToken = config.sessionToken || sessionStorage.getItem("nexus.clean.session");
  if (!sessionToken) {
    status.textContent = "Sign in to speak with Nexus";
    orb.disabled = true;
    return;
  }
  window.addEventListener("nexus.clean.workspace.open", (event) => {
    const detail = event.detail || {};
    const workspace = document.getElementById("nexus-workspace");
    const title = document.getElementById("nexus-workspace-title");
    const command = document.getElementById("nexus-workspace-command");
    if (!workspace || !title || !command || !detail.requestId || !detail.workspace) return;
    title.textContent = detail.workspace.replace(/(^|-)([a-z])/g, (_, separator, letter) =>
      `${separator ? " " : ""}${letter.toUpperCase()}`);
    command.textContent = detail.command || "";
    workspace.dataset.workspace = detail.workspace;
    workspace.hidden = false;
    requestAnimationFrame(() => {
      window.dispatchEvent(new CustomEvent("nexus.clean.workspace.acknowledged", {
        detail: Object.freeze({
          requestId: detail.requestId,
          acknowledgementId: `visible-${detail.requestId}`,
          workspace: detail.workspace,
          visible: !workspace.hidden
        })
      }));
    });
  });

  const receipts = [];
  let preferences = DEFAULT_EXPERIENCE_PREFERENCES;
  try {
    preferences = normalizeExperiencePreferences(JSON.parse(
      localStorage.getItem("nexus.genesis.preferences") || "{}"
    ));
  } catch {
    preferences = DEFAULT_EXPERIENCE_PREFERENCES;
  }
  captionsControl.checked = preferences.captions;
  slowSpeechControl.checked = preferences.pace === "slow";
  volumeControl.value = String(Math.round(preferences.volume * 100));
  const remoteAudio = createRemoteAudioUnlock({ audioElement: audio });
  remoteAudio.setVolume(preferences.volume);
  caption.hidden = !preferences.captions;
  const onReceipt = (receipt) => {
    receipts.push(receipt);
    if (receipt.type === "realtime.remote-track") {
      const attached = remoteAudio.attach(receipt.detail && receipt.detail.stream);
      if (attached) {
        receipts.push(Object.freeze({
          schema: "nexus.runtime.receipt.v1",
          type: "audio.web-audio-attached",
          detail: Object.freeze({}),
          at: new Date().toISOString()
        }));
      }
    }
    const label = statusFromReceipt(receipt);
    if (label) {
      status.textContent = label;
      status.dataset.state = label.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "");
    }
    if (receipt.type === "transcript.final") {
      caption.textContent = receipt.detail.transcript || "";
      caption.hidden = !preferences.captions;
    }
    if (receipt.type === "conversation.return-to-listening") replayControl.disabled = false;
    window.dispatchEvent(new CustomEvent("nexus.clean.receipt", { detail: receipt }));
  };
  const machine = new NexusConnectionMachine({ onReceipt });
  const microphone = new NexusMicrophoneController({
    mediaDevices: navigator.mediaDevices,
    onReceipt
  });
  const realtime = new NexusRealtimeConnector({
    createPeerConnection: () => new RTCPeerConnection(),
    fetchSession: async ({ sessionToken: token }) => {
      const response = await fetch("/api/voice/session", {
        method: "POST",
        headers: { authorization: `Bearer ${token}` }
      });
      if (!response.ok) throw new Error(`Nexus session request failed (${response.status}).`);
      return response.json();
    },
    exchangeSdp: async ({ clientSecret, offerSdp }) => {
      const response = await fetch("https://api.openai.com/v1/realtime/calls", {
        method: "POST",
        headers: {
          authorization: `Bearer ${clientSecret}`,
          "content-type": "application/sdp"
        },
        body: offerSdp
      });
      if (!response.ok) throw new Error(`Realtime SDP exchange failed (${response.status}).`);
      return response.text();
    },
    onEvent: onReceipt
  });
  const opaqueSession = {
    verify(token) {
      if (!token) throw new Error("A signed-in Nexus session is required.");
      return Object.freeze({ authenticated: true });
    }
  };
  const foundation = new NexusVoiceFoundation({
    sessionAuthority: opaqueSession,
    machine,
    microphone,
    realtime
  });
  const runtime = new NexusBrowserRuntime({
    foundation,
    realtime,
    audioElement: audio,
    openWorkspace: createWorkspaceAdapter(),
    onReceipt
  });
  runtime.updateExperiencePreferences(preferences);

  function savePreferences(change) {
    preferences = runtime.updateExperiencePreferences({ ...preferences, ...change });
    localStorage.setItem("nexus.genesis.preferences", JSON.stringify(preferences));
  }
  captionsControl.addEventListener("change", () => {
    savePreferences({ captions: captionsControl.checked });
    caption.hidden = !captionsControl.checked;
  });
  slowSpeechControl.addEventListener("change", () => {
    savePreferences({ pace: slowSpeechControl.checked ? "slow" : "natural" });
  });
  volumeControl.addEventListener("input", () => {
    const volume = Number(volumeControl.value) / 100;
    remoteAudio.setVolume(volume);
    savePreferences({ volume });
  });
  replayControl.addEventListener("click", () => {
    try {
      runtime.replayLastResponse();
    } catch (error) {
      status.textContent = error.message;
    }
  });

  orb.addEventListener("click", async () => {
    if (runtime.started) {
      runtime.stop("user-stop");
      remoteAudio.close();
      orb.setAttribute("aria-pressed", "false");
      status.textContent = "Speak";
      return;
    }
    orb.disabled = true;
    try {
      await remoteAudio.unlock();
      await runtime.start({ sessionToken, userGesture: true });
      orb.setAttribute("aria-pressed", "true");
    } catch (error) {
      status.textContent = "Voice connection unavailable";
      onReceipt({
        schema: "nexus.runtime.receipt.v1",
        type: "runtime.start-failed",
        detail: { name: error.name, message: error.message },
        at: new Date().toISOString()
      });
    } finally {
      orb.disabled = false;
    }
  });

  window.NexusCleanRuntime = Object.freeze({
    start: () => runtime.start({ sessionToken, userGesture: true }),
    stop: (reason) => runtime.stop(reason),
    route: (command) => runtime.route(command),
    certificationAudio: config.certification ? Object.freeze({
      begin() {
        const track = microphone.stream?.getAudioTracks?.()[0];
        if (!track || track.readyState !== "live") throw new Error("Physical microphone is not live.");
        track.enabled = false;
        realtime.send({
          type: "session.update",
          session: {
            type: "realtime",
            audio: { input: { turn_detection: null } }
          }
        });
      },
      send(chunks) {
        realtime.send({ type: "input_audio_buffer.clear" });
        for (const audio of chunks) {
          realtime.send({ type: "input_audio_buffer.append", audio });
        }
        realtime.send({ type: "input_audio_buffer.commit" });
        realtime.send({ type: "response.create" });
      },
      end() {
        const track = microphone.stream?.getAudioTracks?.()[0];
        if (track && track.readyState === "live") track.enabled = true;
        runtime.configureSession();
      }
    }) : null,
    snapshot: () => Object.freeze({ state: machine.snapshot(), receipts: [...receipts] })
  });
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
}

module.exports = { createWorkspaceAdapter, createRemoteAudioUnlock, statusFromReceipt };

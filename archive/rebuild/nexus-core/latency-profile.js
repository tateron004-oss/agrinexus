"use strict";

const NEXUS_VOICE_LATENCY_PROFILE = Object.freeze({
  turnDetection: Object.freeze({
    type: "server_vad",
    threshold: 0.5,
    prefix_padding_ms: 300,
    silence_duration_ms: 350,
    create_response: true,
    interrupt_response: true
  }),
  responseFallbackMs: 650
});

module.exports = { NEXUS_VOICE_LATENCY_PROFILE };

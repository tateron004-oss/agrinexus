# Voice stalls: analysis, mitigations, and how to read the evidence

Status: written 2026-10-07 from the code on `main` (after #960). Nothing here was observed on a real phone. "Confirmed from code" means the behaviour is
visible in the source or in the vendored SDK bundle and is pinned by a test. "Hypothesis" means it follows from the code plus how phones and networks
behave, and needs production evidence (the new stall summary, below) before anyone relies on it.

No stored stall reports, logs or fixtures exist in the repository (searched `docs/`, `test/`, `fixtures/`, `output/`), so there is no real-world
evidence in hand yet. The headless-browser message "Nexus voice connection unavailable - retry" is what a browser with no microphone/WebRTC produces; it is not
evidence of a stall.

## What a stall is, in the code

A session is a direct browser to OpenAI WebRTC connection (`RealtimeSession`, `OpenAIRealtimeWebRTC`, in `public/vendor/nexus-openai-realtime-agent.bundle.mjs`).
The server only issues the start key (`POST /api/voice/realtime/session`) and runs tools (`POST /api/voice/realtime/tool`). So the server restarting does not
drop a conversation; it can only drop an in-flight tool call. The model answers each finished turn by itself (`turn_detection.create_response: true`,
`semantic_vad`). A stall is one of: the connection is gone; the microphone is gone; the model was told not to answer; a tool never returned; the model
answered and the phone did not play it.

`public/kyro-stall-watchdog.js` (#879) already nudges a turn with no reply after 6 s (`response.create`), restarts the session after 14 s, and treats a
tool running 25 s as stuck, at most 2 restarts per session. It reports to `POST /api/voice/realtime/stall-report`.

## Ranked causes

| # | Cause | Status | Likelihood | Mitigated here |
|---|---|---|---|---|
| 1 | A restart cannot succeed: the SDK stops the page's microphone track every time a session closes, so every automatic restart is handed a dead stream | Confirmed from code | High, as the reason a stall becomes permanent | Yes |
| 2 | Tool calls: no server deadline on the tools the session really calls, no client timeout, and a refusal (429/401/5xx) was handed to the model as a success | Confirmed from code | Moderate to high for "silent while it looked something up" | Yes |
| 3 | The connection drops (network change, phone backgrounded, session time limit) and recovery is single-shot | Confirmed from code (recovery path); the triggers are hypothesis | High on phones, no field evidence yet | Partly |
| 4 | The automatic reply is left switched off after a guided form | Confirmed from code (several paths) | Low to moderate; only people who start the résumé form | Yes |
| 5 | Watchdog thresholds restart a session that was only slow | Hypothesis | Unknown | No (needs the data) |
| 6 | The phone does not play audio the model sent (suspended output, autoplay) | Hypothesis; cannot be detected from the page | Unknown, plausible on iOS | No (needs the vendor bundle rebuilt) |
| 7 | Per-address rate limits for signed-out visitors behind one carrier address | Confirmed from code; impact hypothesis | Low | Only the message |
| 8 | The start key expiring mid-conversation | Hypothesis | Low | Evidence fields added |
| 9 | Transcript de-duplication swallowing an utterance | Ruled out for model replies | Very low | n/a |
| 10 | interrupt() racing response.create | Confirmed from code, effect is cosmetic | Low | No |
| 11 | Render restarts, idempotency cache, static asset caching and the service worker | Ruled out as causes of a mid-conversation stall | Very low | n/a |

### 1. A restart cannot succeed (confirmed from code)

`OpenAIRealtimeWebRTC.close()` calls `sender.track?.stop()` for every sender (bundle line ~46710, same in `@openai/agents-realtime` 0.13.5), and
`RealtimeSession.close()` calls it. `stopRealtimeVoiceSession()` closes the session on every path, including a "preserve the microphone" restart, and the track it
stops is the one from the page's permanent microphone stream, which is then passed to the next session. `connectSessionWithMicrophoneProof()` refuses it
("Pre-acquired Nexus microphone stream is not live"), the start fails, and the orb shows "Nexus voice connection unavailable - retry". Both automatic recovery
paths were affected: the stall watchdog restart and `scheduleRealtimeRecovery`. The manager's own `recover` passes no stream at all.

How it presents: Kyro goes quiet, a toast says "I lost you for a moment. Reconnecting...", then nothing; the orb falls back to standby; tapping the orb
(a fresh microphone request) works again.
Evidence to confirm: a `kind: restart-failed` or `mic-lost` report straight after a `no-response` / `tool-stuck` / `disconnected` report from the same
`sessionId`'s device; or in a phone's console, the text above.
What is hypothesis: that this is what people are seeing. The code path is certain; how often a session reaches it depends on how often something else
fails first (causes 2 to 5).

### 2. Tool calls (confirmed from code)

- The 10 tools the session registers (`nexus_weather`, `nexus_live_knowledge`, ...) go through the native-tool branch of `/api/voice/realtime/tool`. The
  server deadline (`NEXUS_REALTIME_TOOL_DEADLINE_MS`) only covered the `nexus_capability_router` branch, which the browser session never calls.
  `executeNexusOpenAiNativeTool` can wait on the OpenAI Responses API (20 s limit) and live-knowledge providers (9 s each).
- The only timer on those calls was the SDK's own 15 s, which hands the model a generic "tool failed" string.
- `fetch` had no timeout, so a mobile connection that hangs left the call open until the SDK gave up.
- A 429 (90 calls/min/person), 401 or 5xx body such as `{"error":"Too many ..."}` went through `responseForModel()`, which treats a missing `ok` as success
  and a missing `response` as "Nexus completed the tool request." The model was told the tool had worked.

How it presents: silence of up to 15 s after "let me check", then a vague or wrong reply; sometimes a confident "done" that was not.
Evidence: `[voice-slow-tool]` lines in the server log (tool, ms, timedOut); stall reports with `phase: waiting-for-tool` and a `toolName`.

### 3. The connection drops (recovery confirmed from code; triggers hypothesis)

If ICE stays `disconnected` for 5 s (the SDK's grace) or goes `failed`, the SDK closes itself. `scheduleRealtimeRecovery` then makes one restart attempt
after 1.2 s (see cause 1). A new session has no memory of the earlier talk (only the page keeps `conversationIdentity`); that is a limitation, not fixed here. There was no
handling for coming back to the page after the phone suspended it, and `peerConnection` was never stored on the session, so reports always showed an empty
peer state. Realtime sessions also have a maximum length (60 minutes at the time of writing, unverified here); a long conversation ends the same way.
Evidence: `phase: disconnected`, `peerState/iceState/dataChannelState`, `hiddenForMs`, `sessionAgeMs` clustering near a limit.

### 4. The automatic reply left off (confirmed from code)

A guided form (`startKyroVoiceIntake`) sets `create_response: false` and restores it on finish, cancel, pause. Gaps found: (a) the 10-minute idle expiry was only
checked when the next transcript arrived, and that very turn was heard while the model was told not to answer, so it was never answered; (b) a restore that the
data channel could not carry (`sendKyroRealtimeEvent` returns false) was ignored and not retried; (c) `submitKyroResumeIntake` had no timeout, so a hung save held the
form, and the muted model, until the 10-minute expiry; (d) if rendering or speaking threw while finishing or cancelling, the restore after it was skipped.
Presents as: Kyro answers nothing at all after a résumé interview, until the page is reloaded. Evidence: `kind: auto-response-stuck`, `autoResponseOn: false`.

### 5 to 11, briefly

- 5. Nudge 6 s, restart 14 s, tool 25 s. A slow model turn (not a dead session) would cost a restart and the conversation's context. The report carries `waitedMs`;
  if most reports are `waiting-for-response` with a healthy connection and `waitedMs` near 14 s, raise the threshold. Not changed because nothing here can prove a better number.
- 6. The SDK creates a detached `<audio autoplay>` element and keeps no reference, so the page cannot see whether the phone is playing. A response that arrives
  and is not heard produces no report at all (the watchdog sees a response start). Signal to look for: people reporting silence while few or no reports arrive, and
  `lastEvents` ending in `output_audio_buffer.started`/`response.done`. Fixing it needs `nexus-openai-realtime-agent.js` to pass an audio element and the vendor bundle rebuilt, which was out of scope.
  The `audio-suspended` phase exists for that future signal and is not produced today.
- 7. Signed-out visitors share a per-address budget; behind one carrier address a crowd can exhaust 30 session starts/min or 90 tool calls/min. Signed-in people are limited per person.
  `AGRINEXUS_TRUST_PROXY` is set in `render.yaml`. The 429 now reaches the model as a clear sentence.
- 8. The ephemeral key (`ek_`) is used to authenticate the SDP offer when connecting. By OpenAI's documented behaviour (not verifiable here) an established connection does not need it again;
  every restart requests a new one. Reports now include `keyRemainingMs` (negative = already expired) so this is settled by data: if stalls show an expired key and healthy connections, revisit.
- 9. `lastHistoryTranscriptKey` and the browser action controller's duplicate check only decide whether the app routes a workspace action; the model answers from the audio on OpenAI's side.
- 10. `cancelActiveRealtimeResponse` sends `response.cancel` itself and also calls `interrupt()`; a cancel with nothing to cancel returns an error event, which flips the controller label to
  "reconnecting" until the next event. It does not silence the model.
- 11. A deploy drops in-flight tool calls only (now answered honestly). Tool calls get a fresh `correlationId` each time, so the 2-minute idempotency cache cannot return a stale result to a new
  question. `public/sw.js` never caches `/api/voice/realtime/*`; the content-hashed assets do not touch a live session.

## What changed

Page (`public/app.js`, `public/kyro-stall-watchdog.js`):
- The SDK is given a clone of the microphone stream; the page's own stream survives a session close. A restart (watchdog, lost connection, returning from the background)
  first checks the microphone is live, opens a new one if it can, and otherwise says "Voice stopped. Tap the orb to start again." and reports `mic-lost` / `restart-failed`.
- Returning to the page after it was hidden checks the connection and restarts it if dead.
- The automatic reply: state is tracked on the session (`autoResponseOn`); a restore that could not be sent is retried (1, 2, 4, 8 s); finishing/cancelling releases it first and in separate
  try blocks; a 30-second timer releases a form that finished, was cancelled, or was abandoned; when the person starts speaking and it is found off with no form running it is restored and reported; a turn heard during a form that has just timed out or been switched away from is handed to the stall watchdog so it still gets an answer; the résumé save gives up after 30 s.
- Tool calls: the request gives up at 13.5 s (before the SDK's 15 s) with "taking longer than I expected, and I cannot tell whether it finished"; a dropped connection says "cannot reach the server"; 429/401/403/5xx become `ok:false` with a true sentence. Never "done".
- A start that found the runtime was not Realtime left `realtimeVoiceStarting` set, which blocked every later start until reload. Fixed.

Server (`server.js`, `server/voice-stall-reports.js`):
- The native-tool branch has the same deadline as the router branch (default now 13 s, under the SDK's 15 s), with an honest line. The work is not cancelled; when it finishes it is saved.
- The 429 from the tool gateway carries `response` (a sentence the voice can say), `status: rate-limited` and `Retry-After`.
- Stall reports: more fields (`phase`, `iceState`, `dataChannelState`, `autoResponseOn`, `sessionAgeMs`, `keyRemainingMs`, `hiddenForMs`, and the last 10 event type names with ages). No transcripts, names or keys.
  Kinds added: `auto-response-stuck`, `mic-lost`, `disconnected`, `restart-failed`. Same auth, origin check and 12/min limit. Kept (newest 300) in `db.profile.voiceStallReports`.
- `GET /api/admin/voice/stall-summary[?hours=24&limit=10]` (platform owner only) and `node scripts/voice-stall-summary.js <server log>` count reports by phase, kind, tool, last event and connection state and read the biggest group out in words.

## Reading the summary

`readout` names the biggest phase and what it usually means. Then:
- `byPhase`: `waiting-for-tool` points at cause 2 (see `byTool` and `[voice-slow-tool]`); `disconnected`, `offline`, `backgrounded` at cause 3; `mic-lost` at causes 1/3; `auto-response-stuck` at cause 4; `waiting-for-response` with healthy connection at cause 5 or the model/network.
- `sessionAgeMs`: a cluster near 30 or 60 minutes means the session limit. `keyExpiredBeforeStall` greater than 0 across many reports re-opens cause 8.
- `afterBackground`, `offline`, `byTabVisible`: phone behaviour.
- `byLastEventInRing`: the last thing the session saw before it went quiet, e.g. `input_audio_buffer.committed` (heard, never answered) versus `function_call_arguments.done` (waiting on a tool).

## Not done, on purpose

Anything that could not be shown by a test without a device: forcing audio output resume (no handle on the SDK's audio element), restarting sessions on a timer (loses conversation context),
changing turn detection, the model, prompts, watchdog thresholds, or the vendor bundle. Each needs the production data above first.

# AgriNexus Native Mobile Runtime

This folder is the native shell for the final Jarvis/Siri/Alexa-style step.

The web platform already contains the Nexus brain, workflows, OpenAI voice path, translation, maps, and provider endpoints. The native runtime adds the device-level layer browsers cannot reliably provide:

- OS microphone permission
- native speech recognition
- wake-gated listening so background conversation is not treated as a Nexus command
- wake phrase handling for "Nexus", "Hey Nexus", "Agri", and "Hey AgriNexus"
- native text-to-speech fallback
- push/location/camera permission registration
- foreground voice service on Android
- iOS audio/speech session hooks
- OpenAI Realtime WebRTC status/transport contract for low-latency speech-to-speech
- provider-depth architecture endpoint for maps, clinics, pharmacy, learning, workforce, trade, drone, communications, and payment readiness
- native-to-web events through `window.AgriNexusNativeBridge.receive(...)`
- web-to-native state events through `window.AgriNexusNativeVoice`

## Current Production URL

`https://agrinexus-platform.onrender.com`

Change this value in:

- `android/app/src/main/java/com/agrinexus/mobile/MainActivity.kt`
- `ios/AgriNexus/NexusWebViewController.swift`

## Android Build Path

1. Open `native-mobile/android` in Android Studio.
2. Let Gradle sync.
3. Build and run on a real device.
4. Grant microphone permission.
5. Say "Nexus" or press the app mic control.

The Android shell starts a foreground voice service and sends final transcripts into the web platform as:

```js
window.AgriNexusNativeBridge.receive({
  type: "voice.final_transcript",
  transcript: "I need a doctor",
  language: "en",
  confidence: 0.9
})
```

The native service now uses a wake gate. It forwards speech only when the phrase includes `Nexus`, `Hey Nexus`, `Agri`, or `Hey AgriNexus`, or when the user is inside the short follow-up window after waking Nexus.

## iOS Build Path

1. Create/open an iOS app target in Xcode.
2. Add the files under `native-mobile/ios/AgriNexus`.
3. Enable microphone and speech recognition permissions in `Info.plist`.
4. Run on a real iPhone.

The iOS shell uses `SFSpeechRecognizer`, `AVAudioEngine`, and `WKWebView` to route speech into Nexus.

The shared architecture can be checked at:

```text
https://agrinexus-platform.onrender.com/api/native/voice-architecture
```

That response reports native permissions, always-on wake readiness, realtime streaming readiness, and deeper provider data readiness.

## Privacy Rule

Nexus must never hide listening. Native mode should show a visible listening indicator and provide a one-tap off switch. Sensitive actions such as provider calls, buyer messages, payments, health handoffs, and job applications still require confirmation through the AgriNexus workflow gates.

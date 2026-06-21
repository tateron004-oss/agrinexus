# Native Build Validation

This guide separates the native source-level QA that can run in the current Windows Codex workspace from native compile validation that requires Android or iOS build tooling.

The active AgriNexus runtime remains the Node/web app. These native files provide Android and iOS shell behavior for microphone, wake-gated voice, native bridge events, and confirmed call handoff. Do not treat the static QA below as a substitute for Android or iOS compilation.

## Static QA Available Today

Run these from the repository root:

```powershell
node scripts\native-mobile-runtime-qa.js
node scripts\native-voice-infrastructure-qa.js
node scripts\mobile-native-qa.js
node scripts\android-call-launch-qa.js
node scripts\ios-call-launch-qa.js
node scripts\native-call-bridge-dispatch-qa.js
node scripts\call-provider-drift-qa.js
```

The same static native suite can also be run through the grouped QA runner:

```powershell
npm run qa:native
node scripts\qa-suite.js native
```

These checks validate the native bridge contract, wake/runtime source expectations, Android and iOS voice hooks, Android call launch safety, iOS call launch safety, browser-to-native confirmed call dispatch, and call provider metadata drift.

They also protect the important call safety invariants:

- Android call launch uses user-visible `ACTION_DIAL`.
- Android does not request `CALL_PHONE`.
- iOS call launch uses a validated `tel:` Phone UI handoff.
- Confirmed call handoff requires backend confirmation metadata.
- Provider metadata and display labels stay aligned across backend and frontend code.

These checks do not compile Kotlin or Swift, run Gradle, run Xcode, validate app signing, install on devices, or prove runtime behavior inside Android/iOS OS permission surfaces.

## Android Build Validation

Android project path: `native-mobile/android`

Current source structure:

- Root Gradle project: `native-mobile/android/settings.gradle`
- App module: `:app`
- App build file: `native-mobile/android/app/build.gradle`
- Namespace/application ID: `com.agrinexus.mobile`
- Android Gradle Plugin: `8.5.2`
- Kotlin Android plugin: `1.9.24`
- `compileSdk = 35`
- `minSdk = 26`
- `targetSdk = 35`

Current limitation: the repo does not include `gradlew`, `gradlew.bat`, or Gradle wrapper files, and this Windows Codex workspace does not have `gradle` available on PATH. Android compile validation currently requires Android Studio or a machine with compatible Android Gradle tooling.

Manual validation today:

1. Open `native-mobile/android` in Android Studio.
2. Let Gradle sync with the configured Android Gradle Plugin and Kotlin plugin.
3. Build the `:app` module in Debug.
4. Run on a real Android device when validating microphone, foreground service, wake gate, WebView bridge, and dialer handoff behavior.
5. Confirm that native call handoff opens the dialer through `ACTION_DIAL` only.

Future command once an Android Gradle wrapper exists:

```powershell
cd native-mobile\android
.\gradlew.bat assembleDebug
```

macOS/Linux equivalent once the wrapper exists:

```bash
cd native-mobile/android
./gradlew assembleDebug
```

Do not add `CALL_PHONE`, and do not change the confirmed call handoff from `ACTION_DIAL` to `ACTION_CALL`. The dialer UI must remain visible to the user.

## iOS Build Validation

iOS source path: `native-mobile/ios/AgriNexus`

Current source structure:

- `NexusWebViewController.swift`
- `NexusVoiceRuntime.swift`
- `Info.plist`

Current limitation: the repo does not include an `.xcodeproj`, `.xcworkspace`, or `project.pbxproj`. No bundle ID, development team, or signing configuration is committed here. The current Windows Codex workspace does not provide `xcodebuild` or `swift`.

Manual validation today requires macOS and Xcode:

1. Create or open an iOS app target in Xcode.
2. Add the files under `native-mobile/ios/AgriNexus`.
3. Include the permission strings and background modes from `Info.plist`.
4. Configure the bundle ID, development team, signing, and deployment target in the host Xcode project.
5. Build and run on a real iPhone when validating microphone, speech recognition, WKWebView bridge, and Phone UI handoff behavior.
6. Confirm that native call handoff validates the `tel:` URL and opens the user-visible Phone UI.

Future command only after an Xcode project or workspace exists:

```bash
xcodebuild -scheme <SchemeName> -configuration Debug build
```

iOS call launch should remain a validated `tel:` Phone UI handoff. It should not become silent, background, or automatic call placement.

## Future Phases

- N2: add or restore the Android Gradle wrapper from a trusted Android Studio or Gradle environment.
- N3: add package scripts for Android assemble/check after the wrapper exists.
- N4: either commit a minimal iOS Xcode project/workspace or document the external host app target as the supported integration path.
- N5: add CI for Android compile validation, and optionally iOS validation on macOS runners once the iOS project/workspace strategy is settled.

## Do Not Do

- Do not add `CALL_PHONE`.
- Do not change Android `ACTION_DIAL` to `ACTION_CALL`.
- Do not add OS contacts access as part of build validation.
- Do not bypass Companion confirmation gates.
- Do not expose secrets, signing credentials, provider credentials, or tokens.
- Do not treat static QA as a replacement for native compile validation.
- Do not migrate the active runtime to `foundation/` as part of native validation.

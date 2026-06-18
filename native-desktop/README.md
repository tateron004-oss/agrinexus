# AgriNexus Native Desktop Companion

This folder adds the desktop layer for the Jarvis/Siri/Alexa-style behavior that a normal browser cannot provide.

The web app can only listen while the page is open, secure, and microphone permission is granted. The native desktop companion owns the operating-system microphone permission instead. That lets Nexus listen while Chrome is closed, open the AgriNexus platform when the wake phrase is heard, and send spoken commands into the same hosted AI workflow engine.

## What This Adds

- computer-level microphone permission
- visible always-on wake listener
- wake phrases: `Nexus`, `Hey Nexus`, `Agri`, `Hey AgriNexus`
- Chrome/page-independent command capture
- command handoff to `https://agrinexus-platform.onrender.com/api/agent/command`
- browser launch when the user says a wake phrase
- spoken acknowledgement through native Windows text-to-speech
- privacy guard: visible console, stop phrase, no hidden listening

## Windows Test Path

Fastest path: run the launcher:

```powershell
native-desktop/windows/Start-NexusDesktopVoice.cmd
```

Run PowerShell as the signed-in user:

```powershell
powershell -ExecutionPolicy Bypass -File native-desktop/windows/NexusWakeListener.ps1
```

For production handoff into AgriNexus, set the user login once in the same PowerShell window before launching the listener:

```powershell
$env:AGRINEXUS_EMAIL="user@agrinexus.org"
$env:AGRINEXUS_PASSWORD="User2026!"
$env:AGRINEXUS_USER_NAME="Ron"
powershell -ExecutionPolicy Bypass -File native-desktop/windows/NexusWakeListener.ps1 -UserName "Ron"
```

If you do not set credentials, the Windows listener uses the standard User demo login. You can also pass a session cookie or set `AGRINEXUS_SESSION_COOKIE`, but the email/password desktop login is the cleaner local-demo path:

```powershell
powershell -ExecutionPolicy Bypass -File native-desktop/windows/NexusWakeListener.ps1 -UserName "Ron" -SessionCookie "connect.sid=..."
```

Then try:

- `Nexus`
- `Good morning Nexus`
- `Nexus I need a doctor`
- `Nexus help me sell my crop`
- `Nexus open the map`
- `Nexus stop`

When the listener hears a wake phrase, it opens the hosted platform and replies by voice. When it hears a wake phrase plus a command, it sends the command to AgriNexus as native voice input.

If no desktop login or signed-in session cookie is provided and the hosted API requires sign-in, the listener still opens the platform so the user can log in. The production desktop app should replace demo credentials with a secure native auth token.

## Production Rule

This is a desktop companion, not hidden spyware. It must remain visible, easy to stop, and auditable. Health, buyer/seller messaging, payments, provider calls, job applications, and other sensitive actions still pass through AgriNexus confirmation gates.

## Native Runtime Relationship

- Web app: browser-safe voice while the app is open.
- Native mobile: Android/iOS foreground/background voice runtime.
- Native desktop: OS-level wake listener for Windows/macOS/Linux packaging.

The shared contract is `public/native-bridge.json`.

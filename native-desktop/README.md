# Kyro (AgriNexus) Native Desktop Companion

This folder adds the desktop layer for the Jarvis/Siri/Alexa-style behavior that a normal browser cannot provide.

The web app can only listen while the page is open, secure, and microphone permission is granted. The native desktop companion owns the operating-system microphone permission instead. That lets Kyro listen while Chrome is closed, open the AgriNexus platform when the wake phrase is heard, and send spoken commands into the same hosted AI workflow engine.

## What This Adds

- computer-level microphone permission
- visible always-on wake listener
- wake phrases: `Kyro`, `Hey Kyro`, `Nexus`, `Hey Nexus`, `Agri`, `Hey AgriNexus`
- Chrome/page-independent command capture
- command handoff to `https://agrinexus-platform.onrender.com/api/agent/command`
- browser launch when the user says a wake phrase
- spoken acknowledgement through native Windows text-to-speech
- privacy guard: visible console, stop phrase, no hidden listening
- optional one-time install to start automatically at Windows sign-in

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

- `Kyro`
- `Good morning Kyro`
- `Kyro I need a doctor`
- `Kyro help me sell my crop`
- `Kyro open the map`
- `Kyro stop`

(`Nexus` and its variants above still work too — both wake vocabularies are recognized at the same time.)

When the listener hears a wake phrase, it opens the hosted platform and replies by voice. When it hears a wake phrase plus a command, it sends the command to AgriNexus as native voice input.

If no desktop login or signed-in session cookie is provided and the hosted API requires sign-in, the listener still opens the platform so the user can log in. The production desktop app should replace demo credentials with a secure native auth token.

## Starting Automatically at Sign-In

Running the listener by hand every time you sit down defeats the point of a wake-word assistant. Install it once and it starts (visibly, minimized) whenever you sign in to Windows:

```powershell
powershell -ExecutionPolicy Bypass -File native-desktop/windows/Install-NexusStartup.ps1
```

Pass `-UserName` if you want the listener to greet someone other than the default:

```powershell
powershell -ExecutionPolicy Bypass -File native-desktop/windows/Install-NexusStartup.ps1 -UserName "Ron"
```

This registers a per-user Windows Scheduled Task ("AgriNexus Kyro Desktop Listener") that runs at your next sign-in — it does not need administrator rights and does not touch any other user account. The window starts minimized (out of the way, not hidden): it still appears in the taskbar and Task Manager as "Kyro desktop listener (AgriNexus)", so the production rule below still holds — say a stop phrase or close it to stop it for that session.

**Verify it's installed:**

```powershell
Get-ScheduledTask -TaskName "AgriNexus Kyro Desktop Listener"
```

**Remove it permanently** (stops it from starting at sign-in; does not affect a copy already running):

```powershell
powershell -ExecutionPolicy Bypass -File native-desktop/windows/Install-NexusStartup.ps1 -Uninstall
```

If your Windows edition doesn't have the Task Scheduler PowerShell module, the installer says so and exits cleanly — add a shortcut to `Start-NexusDesktopVoice.cmd` in your Startup folder (`Win+R`, then `shell:startup`) instead.

## Production Rule

This is a desktop companion, not hidden spyware. It must remain visible, easy to stop, and auditable. Health, buyer/seller messaging, payments, provider calls, job applications, and other sensitive actions still pass through AgriNexus confirmation gates.

## Native Runtime Relationship

- Web app: browser-safe voice while the app is open.
- Native mobile: Android/iOS foreground/background voice runtime.
- Native desktop: OS-level wake listener for Windows/macOS/Linux packaging.

The shared contract is `public/native-bridge.json`.

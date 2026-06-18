param(
  [string]$PlatformUrl = "https://agrinexus-platform.onrender.com",
  [string]$UserName = "Ron",
  [string]$Email = $env:AGRINEXUS_EMAIL,
  [string]$Password = $env:AGRINEXUS_PASSWORD,
  [string]$DesktopVoiceName = "",
  [string]$SessionCookie = $env:AGRINEXUS_SESSION_COOKIE,
  [switch]$NoOpenBrowser,
  [switch]$QuietDiagnostics
)

$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Speech

if ([string]::IsNullOrWhiteSpace($Email)) { $Email = "user@agrinexus.org" }
if ([string]::IsNullOrWhiteSpace($Password)) { $Password = "User2026!" }

$wakePhrases = @(
  "nexus",
  "hey nexus",
  "agri",
  "hey agrinexus",
  "good morning nexus",
  "good afternoon nexus",
  "good evening nexus"
)

$stopPhrases = @(
  "nexus stop",
  "stop listening",
  "be quiet",
  "pause nexus"
)

$script:WaitingForCommand = $false
$script:LastWakeAt = Get-Date
$script:LastCommand = ""
$script:LastCommandAt = (Get-Date).AddSeconds(-20)
$script:LastHypothesisAt = Get-Date
$script:LastSpeechDetectedAt = Get-Date
$script:NativeWebSession = $null
$script:SignedInUser = $null

function Write-NexusStatus {
  param([string]$Message)
  $stamp = Get-Date -Format "HH:mm:ss"
  Write-Host "[$stamp] $Message"
}

function Write-NexusDiagnostic {
  param([string]$Message)
  if ($QuietDiagnostics) { return }
  Write-NexusStatus $Message
}

function Speak-Nexus {
  param([string]$Message)
  try {
    $script:Synth.SpeakAsyncCancelAll()
    [void]$script:Synth.SpeakAsync($Message)
  } catch {
    Write-NexusStatus "Speech output failed: $($_.Exception.Message)"
  }
}

function Open-AgriNexus {
  if ($NoOpenBrowser) { return }
  try {
    Start-Process $PlatformUrl
  } catch {
    Write-NexusStatus "Could not open browser: $($_.Exception.Message)"
  }
}

function Ensure-NexusSession {
  if ($script:NativeWebSession -or ![string]::IsNullOrWhiteSpace($SessionCookie)) { return $true }
  if ([string]::IsNullOrWhiteSpace($Email) -or [string]::IsNullOrWhiteSpace($Password)) { return $false }

  $body = @{
    email = $Email
    password = $Password
  } | ConvertTo-Json -Depth 4

  try {
    $loginResponse = Invoke-WebRequest -Method Post -Uri "$PlatformUrl/api/login" -ContentType "application/json" -Body $body -SessionVariable loginSession -TimeoutSec 30
    $script:NativeWebSession = $loginSession
    $loginData = $loginResponse.Content | ConvertFrom-Json
    $script:SignedInUser = $loginData.user
    if ([string]::IsNullOrWhiteSpace($UserName) -and $script:SignedInUser.name) {
      $script:EffectiveUserName = $script:SignedInUser.name.Split(" ")[0]
    }
    Write-NexusStatus "Desktop session signed in as $($script:SignedInUser.email)."
    return $true
  } catch {
    Write-NexusStatus "Desktop sign-in failed: $($_.Exception.Message)"
    return $false
  }
}

function Send-NexusCommand {
  param([string]$Command)
  if ([string]::IsNullOrWhiteSpace($Command)) { return }
  $now = Get-Date
  $normalizedCommand = ($Command.ToLowerInvariant() -replace "[^\p{L}\p{N}\s]", " " -replace "\s+", " ").Trim()
  if ($normalizedCommand -eq $script:LastCommand -and (New-TimeSpan -Start $script:LastCommandAt -End $now).TotalSeconds -lt 2) {
    Write-NexusDiagnostic "Ignored duplicate command: $Command"
    return
  }
  $script:LastCommand = $normalizedCommand
  $script:LastCommandAt = $now

  [void](Ensure-NexusSession)
  $headers = @{}
  if (![string]::IsNullOrWhiteSpace($SessionCookie)) {
    $headers["Cookie"] = $SessionCookie
  }
  $body = @{
    command = $Command
    conversational = $true
    inputMode = "native"
    outputMode = "voice"
    nativeSource = "windows-desktop"
    mode = "User"
  } | ConvertTo-Json -Depth 5
  try {
    if ($script:NativeWebSession) {
      $response = Invoke-RestMethod -Method Post -Uri "$PlatformUrl/api/agent/command" -WebSession $script:NativeWebSession -ContentType "application/json" -Body $body -TimeoutSec 30
    } else {
      $response = Invoke-RestMethod -Method Post -Uri "$PlatformUrl/api/agent/command" -Headers $headers -ContentType "application/json" -Body $body -TimeoutSec 30
    }
    $intent = $response.commandResult.intent
    $reply = $response.commandResult.response
    Write-NexusStatus "Command sent: $Command"
    if ($intent) { Write-NexusStatus "Intent: $intent" }
    if ($reply) {
      $shortReply = ($reply -replace "\s+", " ").Trim()
      if ($shortReply.Length -gt 220) { $shortReply = $shortReply.Substring(0, 217) + "..." }
      Speak-Nexus $shortReply
    } else {
      Speak-Nexus "I sent that to AgriNexus."
    }
  } catch {
    Write-NexusStatus "Command handoff failed: $($_.Exception.Message)"
    if ([string]::IsNullOrWhiteSpace($SessionCookie) -and ([string]::IsNullOrWhiteSpace($Email) -or [string]::IsNullOrWhiteSpace($Password))) {
      Speak-Nexus "I can hear you through the computer microphone. To act inside AgriNexus, add AGRINEXUS_EMAIL and AGRINEXUS_PASSWORD before starting me."
    } else {
      Speak-Nexus "I could not reach AgriNexus yet. Check the internet, login, or platform server."
    }
  }
}

function Remove-WakePrefix {
  param([string]$Text)
  $clean = ($Text.ToLowerInvariant() -replace "[^\p{L}\p{N}\s]", " " -replace "\s+", " ").Trim()
  foreach ($phrase in ($wakePhrases | Sort-Object Length -Descending)) {
    if ($clean -eq $phrase) { return "" }
    if ($clean.StartsWith("$phrase ")) {
      return $clean.Substring($phrase.Length).Trim()
    }
  }
  return $null
}

$script:Synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$script:Synth.Rate = 1
$script:Synth.Volume = 100
$preferredDesktopVoices = @(
  $DesktopVoiceName,
  "Microsoft David Desktop",
  "Microsoft Mark",
  "Microsoft Guy",
  "Microsoft Ryan",
  "Microsoft George",
  "Microsoft Richard",
  "Microsoft James"
) | Where-Object { ![string]::IsNullOrWhiteSpace($_) }
foreach ($voiceName in $preferredDesktopVoices) {
  try {
    $script:Synth.SelectVoice($voiceName)
    Write-NexusStatus "Desktop voice selected: $voiceName"
    break
  } catch {
    # Try the next installed Windows voice.
  }
}
$script:EffectiveUserName = $UserName

try {
  $recognizer = New-Object System.Speech.Recognition.SpeechRecognitionEngine
  $recognizer.SetInputToDefaultAudioDevice()
} catch {
  Write-Host ""
  Write-Host "AgriNexus Desktop Wake Listener could not start voice recognition." -ForegroundColor Yellow
  Write-Host ""
  Write-Host "Windows reported:" -ForegroundColor Yellow
  Write-Host "  $($_.Exception.Message)"
  Write-Host ""
  Write-Host "What this means:"
  Write-Host "  The Nexus desktop listener is installed, but this Windows profile does not have"
  Write-Host "  a SAPI speech recognition engine available for PowerShell to use."
  Write-Host ""
  Write-Host "Fix:"
  Write-Host "  1. Open Windows Settings."
  Write-Host "  2. Go to Time & language > Language & region."
  Write-Host "  3. Make sure English (United States) is installed."
  Write-Host "  4. Open the language options and install Speech / Speech recognition."
  Write-Host "  5. Go to Settings > Privacy & security > Microphone and allow microphone access."
  Write-Host "  6. Restart PowerShell and run this listener again."
  Write-Host ""
  Write-Host "Browser voice still works while AgriNexus is open. This desktop listener is the"
  Write-Host "extra Windows layer needed for Chrome-closed wake behavior."
  Write-Host ""
  Read-Host "Press Enter to close"
  exit 1
}

$wakeChoices = New-Object System.Speech.Recognition.Choices
$wakeChoices.Add($wakePhrases)
$wakeGrammarBuilder = New-Object System.Speech.Recognition.GrammarBuilder
$wakeGrammarBuilder.Append($wakeChoices)
$wakeGrammar = New-Object System.Speech.Recognition.Grammar($wakeGrammarBuilder)
$wakeGrammar.Name = "AgriNexus wake phrases"

$dictationGrammar = New-Object System.Speech.Recognition.DictationGrammar
$dictationGrammar.Name = "AgriNexus native dictation"

$recognizer.LoadGrammar($wakeGrammar)
$recognizer.LoadGrammar($dictationGrammar)

Register-ObjectEvent -InputObject $recognizer -EventName SpeechDetected -SourceIdentifier AgriNexusSpeechDetected -Action {
  $script:LastSpeechDetectedAt = Get-Date
  Write-NexusDiagnostic "Speech detected. Listening for Nexus or a command..."
}

Register-ObjectEvent -InputObject $recognizer -EventName SpeechHypothesized -SourceIdentifier AgriNexusSpeechHypothesized -Action {
  $now = Get-Date
  if ((New-TimeSpan -Start $script:LastHypothesisAt -End $now).TotalMilliseconds -lt 1200) { return }
  $script:LastHypothesisAt = $now
  $text = ($EventArgs.Result.Text -replace "\s+", " ").Trim()
  if (![string]::IsNullOrWhiteSpace($text)) {
    Write-NexusDiagnostic "Trying to understand: $text"
  }
}

Register-ObjectEvent -InputObject $recognizer -EventName SpeechRecognitionRejected -SourceIdentifier AgriNexusSpeechRejected -Action {
  Write-NexusDiagnostic "Speech heard, but Windows did not recognize it as a clear Nexus command. Try saying: Nexus open the map."
}

Register-ObjectEvent -InputObject $recognizer -EventName AudioSignalProblemOccurred -SourceIdentifier AgriNexusAudioProblem -Action {
  Write-NexusDiagnostic "Audio problem: $($EventArgs.AudioSignalProblem). Check microphone input level and default microphone."
}

Register-ObjectEvent -InputObject $recognizer -EventName SpeechRecognized -SourceIdentifier AgriNexusSpeechRecognized -Action {
  $text = ($EventArgs.Result.Text -replace "\s+", " ").Trim()
  $confidence = [math]::Round($EventArgs.Result.Confidence, 2)
  if ([string]::IsNullOrWhiteSpace($text)) { return }
  Write-NexusStatus "Heard ($confidence): $text"

  $lower = $text.ToLowerInvariant()
  if ($stopPhrases | Where-Object { $lower -eq $_ -or $lower.Contains($_) }) {
    $script:WaitingForCommand = $false
    Speak-Nexus "Stopped. Say Nexus when you need me."
    return
  }

  $afterWake = Remove-WakePrefix $text
  if ($null -ne $afterWake) {
    $script:LastWakeAt = Get-Date
    Open-AgriNexus
    if ([string]::IsNullOrWhiteSpace($afterWake)) {
      $script:WaitingForCommand = $true
      Speak-Nexus "Yes $script:EffectiveUserName?"
      return
    }
    $script:WaitingForCommand = $false
    $script:LastCommand = $afterWake
    Send-NexusCommand $afterWake
    return
  }

  $wakeAge = (New-TimeSpan -Start $script:LastWakeAt -End (Get-Date)).TotalSeconds
  if ($script:WaitingForCommand -and $wakeAge -lt 12) {
    $script:WaitingForCommand = $false
    $script:LastCommand = $text
    Send-NexusCommand $text
    return
  }
}

Write-Host ""
Write-Host "AgriNexus Desktop Wake Listener"
Write-Host "Platform: $PlatformUrl"
Write-Host "Session handoff: $(if (![string]::IsNullOrWhiteSpace($SessionCookie)) { 'session cookie provided' } elseif (![string]::IsNullOrWhiteSpace($Email)) { 'desktop login will use AGRINEXUS_EMAIL / AGRINEXUS_PASSWORD' } else { 'not set; add AGRINEXUS_EMAIL and AGRINEXUS_PASSWORD for live command execution' })"
Write-Host "Wake phrases: $($wakePhrases -join ', ')"
Write-Host "Stop phrases: $($stopPhrases -join ', ')"
Write-Host "Privacy: visible listener. Close this PowerShell window to stop."
Write-Host "Diagnostics: say 'Nexus'. If the microphone works, this window should print Speech detected or Heard."
Write-Host "Tip: if nothing prints when you talk, set your Windows default input microphone and allow desktop apps to use it."
Write-Host ""

Speak-Nexus "AgriNexus desktop listener is ready. Say Nexus when you need me."
$recognizer.RecognizeAsync([System.Speech.Recognition.RecognizeMode]::Multiple)

try {
  while ($true) {
    Start-Sleep -Seconds 1
  }
} finally {
  $recognizer.RecognizeAsyncStop()
  $recognizer.Dispose()
  $script:Synth.Dispose()
}

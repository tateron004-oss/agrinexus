param(
  [string]$PlatformUrl = "https://agrinexus-platform.onrender.com",
  [string]$UserName = "Ron",
  [string]$SessionCookie = $env:AGRINEXUS_SESSION_COOKIE,
  [switch]$NoOpenBrowser
)

$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Speech

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

function Write-NexusStatus {
  param([string]$Message)
  $stamp = Get-Date -Format "HH:mm:ss"
  Write-Host "[$stamp] $Message"
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

function Send-NexusCommand {
  param([string]$Command)
  if ([string]::IsNullOrWhiteSpace($Command)) { return }
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
    $response = Invoke-RestMethod -Method Post -Uri "$PlatformUrl/api/agent/command" -Headers $headers -ContentType "application/json" -Body $body -TimeoutSec 30
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
    Speak-Nexus "I could not reach AgriNexus yet. Check the internet or platform server."
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
$script:Synth.Rate = 0
$script:Synth.Volume = 100

$recognizer = New-Object System.Speech.Recognition.SpeechRecognitionEngine
$recognizer.SetInputToDefaultAudioDevice()

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
      Speak-Nexus "Yes $UserName?"
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
Write-Host "Session handoff: $(if ([string]::IsNullOrWhiteSpace($SessionCookie)) { 'not set; platform may ask the browser session to sign in' } else { 'session cookie provided' })"
Write-Host "Wake phrases: $($wakePhrases -join ', ')"
Write-Host "Stop phrases: $($stopPhrases -join ', ')"
Write-Host "Privacy: visible listener. Close this PowerShell window to stop."
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

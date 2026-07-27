$ErrorActionPreference = "Stop"

if ($env:RUNNER_OS -ne "Windows") {
  throw "Real-device acceptance requires a Windows runner."
}

$session = (Get-Process -Id $PID).SessionId
if ($session -eq 0) {
  throw "The runner is in Windows Session 0. Start run.cmd interactively in the signed-in desktop session; do not install it as a service."
}

$chrome = @(
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
  "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe",
  "$env:LOCALAPPDATA\Google\Chrome\Application\chrome.exe"
) | Where-Object { $_ -and (Test-Path $_) } | Select-Object -First 1

if (-not $chrome) {
  throw "Google Chrome is not installed for the interactive Windows user."
}

$audioDevices = @()
if (Get-Command Get-PnpDevice -ErrorAction SilentlyContinue) {
  $audioDevices = @(Get-PnpDevice -PresentOnly |
    Where-Object {
      $_.Class -in @("AudioEndpoint", "MEDIA") -and
      $_.Status -eq "OK"
    } |
    Select-Object -ExpandProperty FriendlyName)
}

if ($audioDevices.Count -lt 2) {
  throw "Windows did not expose healthy microphone and speaker endpoints."
}

$virtualPattern = "virtual|vb-audio|cable input|cable output|stereo mix|voicemeeter|blackhole|loopback|fake"
$physicalCandidates = @($audioDevices | Where-Object { $_ -notmatch $virtualPattern })
if ($physicalCandidates.Count -lt 2) {
  throw "Only virtual or loopback audio endpoints were detected. Physical microphone and speaker endpoints are required."
}

$result = [ordered]@{
  passed = $true
  sessionId = $session
  interactiveUser = [Environment]::UserName
  chromePath = $chrome
  healthyAudioEndpointCount = $audioDevices.Count
  physicalCandidateCount = $physicalCandidates.Count
  checkedAt = (Get-Date).ToUniversalTime().ToString("o")
}

New-Item -ItemType Directory -Force -Path "output\nexus-windows-real-device" | Out-Null
$result | ConvertTo-Json | Set-Content -Encoding UTF8 "output\nexus-windows-real-device\windows-preflight.json"
$result | ConvertTo-Json

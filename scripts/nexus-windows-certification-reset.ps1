$ErrorActionPreference = "Stop"

$currentSession = (Get-Process -Id $PID).SessionId
$staleBrowsers = @(Get-Process chrome, msedge -ErrorAction SilentlyContinue |
  Where-Object { $_.SessionId -eq $currentSession })
foreach ($process in $staleBrowsers) {
  Stop-Process -Id $process.Id -Force -ErrorAction SilentlyContinue
}

$paths = @(
  "output\nexus-clean-windows-certification",
  "output\nexus-voice-form-certification",
  "output\nexus-release-certification",
  "test-results",
  "playwright-report"
)
foreach ($path in $paths) {
  if (Test-Path $path) {
    Remove-Item -Path $path -Recurse -Force
  }
}

$result = [ordered]@{
  schema = "nexus.windows-runner-reset.v1"
  passed = $true
  sessionId = $currentSession
  stoppedBrowserProcesses = $staleBrowsers.Count
  clearedPaths = $paths
  resetAt = (Get-Date).ToUniversalTime().ToString("o")
}
New-Item -ItemType Directory -Force -Path "output\nexus-windows-real-device" | Out-Null
$result | ConvertTo-Json | Set-Content -Encoding UTF8 "output\nexus-windows-real-device\runner-reset.json"
$result | ConvertTo-Json

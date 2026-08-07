[CmdletBinding()]
param(
  [Parameter(Mandatory = $true)]
  [string]$ReleaseSha,
  [switch]$SkipDeploy
)

$ErrorActionPreference = "Stop"
$stateRoot = if ($env:NEXUS_CERTIFICATION_STATE_ROOT) { $env:NEXUS_CERTIFICATION_STATE_ROOT } else { Join-Path $env:LOCALAPPDATA "NexusCertification" }
$watchdogRoot = Join-Path $stateRoot "watchdog"
$logPath = Join-Path $watchdogRoot "watchdog.log"
$statusPath = Join-Path $watchdogRoot "status.json"
New-Item -ItemType Directory -Force -Path $watchdogRoot | Out-Null

function Write-WatchdogStatus {
  param([string]$State, [string]$Message = "")
  $status = [ordered]@{
    state = $State
    releaseSha = $ReleaseSha
    updatedAt = (Get-Date).ToUniversalTime().ToString("o")
    message = $Message
    logPath = $logPath
  }
  $temporary = "$statusPath.$PID.tmp"
  $status | ConvertTo-Json | Set-Content -Encoding UTF8 $temporary
  Move-Item -Force $temporary $statusPath
}

try {
  Start-Transcript -Path $logPath -Append | Out-Null
  Write-WatchdogStatus -State "starting"

  if (-not $SkipDeploy -and -not $env:NEXUS_RENDER_DEPLOY_HOOK_URL) {
    $env:NEXUS_RENDER_DEPLOY_HOOK_URL = [Environment]::GetEnvironmentVariable("NEXUS_RENDER_DEPLOY_HOOK_URL", "User")
  }
  if (-not $SkipDeploy -and -not $env:NEXUS_RENDER_DEPLOY_HOOK_URL) {
    $env:NEXUS_RENDER_DEPLOY_HOOK_URL = [Environment]::GetEnvironmentVariable("NEXUS_RENDER_DEPLOY_HOOK_URL", "Machine")
  }
  if (-not $SkipDeploy -and -not $env:NEXUS_RENDER_DEPLOY_HOOK_URL) {
    throw "NEXUS_RENDER_DEPLOY_HOOK_URL is not available to the scheduled watchdog."
  }

  $appliance = Join-Path $PSScriptRoot "nexus-windows-certification-appliance.ps1"
  Write-WatchdogStatus -State "running"
  & $appliance -ReleaseSha $ReleaseSha -SkipDeploy:$SkipDeploy
  if ($LASTEXITCODE -ne 0) { throw "Certification appliance exited with code $LASTEXITCODE." }
  Write-WatchdogStatus -State "completed"
} catch {
  Write-WatchdogStatus -State "failed" -Message $_.Exception.Message
  Write-Error $_
  exit 1
} finally {
  try { Stop-Transcript | Out-Null } catch {}
}

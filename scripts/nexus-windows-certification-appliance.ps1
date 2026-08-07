[CmdletBinding()]
param(
  [string]$ReleaseSha,
  [string]$CanonicalHost = "https://nexus-genesis-certified.onrender.com",
  [int]$RequiredPasses = 3,
  [int]$InfrastructureRetries = 5,
  [switch]$SkipDeploy
)

$ErrorActionPreference = "Stop"
$ProgressPreference = "SilentlyContinue"

if (-not $IsWindows -and $env:OS -ne "Windows_NT") { throw "The certification appliance must run on the physical Windows machine." }
if ((Get-Process -Id $PID).SessionId -eq 0) { throw "The certification appliance requires the signed-in interactive Windows desktop session." }
if ($CanonicalHost -ne "https://nexus-genesis-certified.onrender.com") { throw "Refusing non-canonical production host: $CanonicalHost" }
if ($RequiredPasses -ne 3) { throw "Nexus certification requires exactly three consecutive physical passes." }

$repositoryRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
Set-Location $repositoryRoot
$headSha = (& git rev-parse HEAD).Trim().ToLowerInvariant()
if ($LASTEXITCODE -ne 0) { throw "Unable to resolve the repository HEAD." }
if (-not $ReleaseSha) { $ReleaseSha = $headSha }
$ReleaseSha = $ReleaseSha.Trim().ToLowerInvariant()
if ($ReleaseSha -ne $headSha) { throw "Frozen release $ReleaseSha does not match checked-out HEAD $headSha." }
if (& git status --porcelain) { throw "Certification requires a clean immutable checkout." }

$stateRoot = if ($env:NEXUS_CERTIFICATION_STATE_ROOT) { $env:NEXUS_CERTIFICATION_STATE_ROOT } else { Join-Path $env:LOCALAPPDATA "NexusCertification" }
$releaseRoot = Join-Path $stateRoot $ReleaseSha
$ledgerPath = Join-Path $releaseRoot "ledger.json"
$lockPath = Join-Path $stateRoot "appliance.lock"
$runRoot = Join-Path $releaseRoot "runs"
New-Item -ItemType Directory -Force -Path $runRoot | Out-Null

$lockStream = $null
try {
  if (Test-Path $lockPath) {
    try {
      $staleLock = [System.IO.File]::Open($lockPath, [System.IO.FileMode]::Open, [System.IO.FileAccess]::ReadWrite, [System.IO.FileShare]::None)
      $staleLock.Dispose()
      Remove-Item -Force $lockPath
    } catch [System.IO.IOException] {
      throw "CERTIFICATION_LOCKED: another Windows certification appliance owns $lockPath"
    }
  }
  try {
    $lockStream = [System.IO.File]::Open($lockPath, [System.IO.FileMode]::CreateNew, [System.IO.FileAccess]::Write, [System.IO.FileShare]::None)
    $lockBody = [Text.Encoding]::UTF8.GetBytes((@{ pid = $PID; releaseSha = $ReleaseSha; acquiredAt = (Get-Date).ToUniversalTime().ToString("o") } | ConvertTo-Json))
    $lockStream.Write($lockBody, 0, $lockBody.Length)
    $lockStream.Flush()
  } catch [System.IO.IOException] {
    throw "CERTIFICATION_LOCKED: another Windows certification appliance owns $lockPath"
  }

  & node scripts/nexus-certification-appliance-state.js init "file=$ledgerPath" "sha=$ReleaseSha" "host=$CanonicalHost" "passes=$RequiredPasses" | Out-Null
  if ($LASTEXITCODE -ne 0) { throw "Unable to initialize the durable certification ledger." }

  $env:NEXUS_CLEAN_BASE_URL = $CanonicalHost
  $env:NEXUS_EXPECTED_RELEASE_SHA = $ReleaseSha
  $env:NEXUS_EXPECTED_BUNDLE = "rebuild/browser/nexus-clean.bundle.js"
  $env:NEXUS_STABILITY_RUNS = "1"
  $env:NEXUS_CERTIFICATION_LANE = "windows-appliance"

  $branch = (& git branch --show-current).Trim()
  if (-not $branch) { throw "Certification requires a named release branch." }
  $remoteLine = (& git ls-remote origin "refs/heads/$branch").Trim()
  if ($LASTEXITCODE -ne 0 -or -not $remoteLine) { throw "Unable to verify the frozen release on origin/$branch." }
  $remoteSha = ($remoteLine -split "\s+")[0].ToLowerInvariant()
  if ($remoteSha -ne $ReleaseSha) { throw "Frozen release $ReleaseSha is not published at origin/$branch ($remoteSha)." }

  & node scripts/nexus-protected-foundation-guard.js
  if ($LASTEXITCODE -ne 0) { throw "Protected foundation failed before appliance execution." }

  if (-not $SkipDeploy) {
    if (-not $env:NEXUS_RENDER_DEPLOY_HOOK_URL) { throw "NEXUS_RENDER_DEPLOY_HOOK_URL is required to deploy the frozen SHA. Use -SkipDeploy only when that SHA is already live." }
    Invoke-WebRequest -Method Post -Uri $env:NEXUS_RENDER_DEPLOY_HOOK_URL -TimeoutSec 30 -UseBasicParsing | Out-Null
  }

  & npm install --no-save --no-package-lock @playwright/test@1.61.1 esbuild@0.28.1
  if ($LASTEXITCODE -ne 0) { throw "Certification driver installation failed." }

  $ledger = Get-Content -Raw $ledgerPath | ConvertFrom-Json
  while (-not $ledger.certified) {
    $sequence = $ledger.attempts.Count + 1
    $attemptId = "{0:D4}-{1}" -f $sequence, (Get-Date -Format "yyyyMMdd-HHmmss")
    $attemptRoot = Join-Path $runRoot $attemptId
    New-Item -ItemType Directory -Force -Path $attemptRoot | Out-Null
    $attempt = [ordered]@{
      attemptId = $attemptId
      releaseSha = $ReleaseSha
      host = $CanonicalHost
      startedAt = (Get-Date).ToUniversalTime().ToString("o")
      outcome = "failed"
      classification = "infrastructure"
      evidencePath = $attemptRoot
    }

    try {
      & .\scripts\nexus-windows-certification-reset.ps1
      & .\scripts\nexus-windows-real-device-preflight.ps1
      & node scripts/nexus-release-certification-controller.js verify-deployment
      if ($LASTEXITCODE -ne 0) { throw "DEPLOYMENT_NOT_READY: exact production identity verification failed." }

      & npx playwright test rebuild/tests/nexus-windows-physical-certification.spec.js --workers=1 --reporter=line
      if ($LASTEXITCODE -ne 0) { throw "NEXUS_TEST_FAILURE: physical voice and application journey failed." }
      & npx playwright test rebuild/tests/nexus-windows-voice-form-entry.spec.js --workers=1 --reporter=line
      if ($LASTEXITCODE -ne 0) { throw "NEXUS_TEST_FAILURE: guided entry journey failed." }
      & node scripts/nexus-protected-foundation-guard.js
      if ($LASTEXITCODE -ne 0) { throw "NEXUS_TEST_FAILURE: protected foundation changed during certification." }

      $attempt.outcome = "passed"
      $attempt.classification = "none"
    } catch {
      $attempt.error = $_.Exception.Message
      $classification = (& node scripts/nexus-certification-appliance-state.js classify "message=$($attempt.error)").Trim()
      $attempt.classification = $classification
    } finally {
      $attempt.finishedAt = (Get-Date).ToUniversalTime().ToString("o")
      foreach ($source in @("output", "test-results", "playwright-report")) {
        if (Test-Path $source) { Copy-Item $source (Join-Path $attemptRoot $source) -Recurse -Force }
      }
      $attemptPath = Join-Path $attemptRoot "attempt.json"
      $attempt | ConvertTo-Json -Depth 8 | Set-Content -Encoding UTF8 $attemptPath
      & node scripts/nexus-certification-appliance-state.js record "file=$ledgerPath" "attempt=$attemptPath" | Out-Null
      if ($LASTEXITCODE -ne 0) { throw "Unable to persist the certification attempt." }
    }

    $ledger = Get-Content -Raw $ledgerPath | ConvertFrom-Json
    if ($attempt.outcome -ne "passed") {
      if ($attempt.classification -eq "nexus") { throw "Nexus release rejected: $($attempt.error). Evidence: $attemptRoot" }
      $recentInfrastructureFailures = @($ledger.attempts | Select-Object -Last $InfrastructureRetries | Where-Object { $_.classification -ne "nexus" -and $_.outcome -ne "passed" })
      if ($recentInfrastructureFailures.Count -ge $InfrastructureRetries) { throw "Infrastructure/provider recovery exhausted after $InfrastructureRetries attempts. Evidence: $attemptRoot" }
      Start-Sleep -Seconds ([Math]::Min(60, 10 * $recentInfrastructureFailures.Count))
    }
  }

  & node scripts/nexus-protected-foundation-guard.js
  if ($LASTEXITCODE -ne 0) { throw "Protected foundation failed at certification closeout." }
  Write-Host "NEXUS 100% CERTIFIED: $ReleaseSha at $CanonicalHost passed physical 3/3. Ledger: $ledgerPath"
} finally {
  if ($lockStream) { $lockStream.Dispose() }
  if (Test-Path $lockPath) { Remove-Item -Force $lockPath -ErrorAction SilentlyContinue }
}

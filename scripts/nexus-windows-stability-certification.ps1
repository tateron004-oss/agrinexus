$ErrorActionPreference = "Stop"

$runs = if ($env:NEXUS_STABILITY_RUNS) { [int]$env:NEXUS_STABILITY_RUNS } else { 3 }
if ($runs -lt 1) {
  throw "NEXUS_STABILITY_RUNS must be at least 1."
}

$stabilityRoot = "output\nexus-stability-certification"
New-Item -ItemType Directory -Force -Path $stabilityRoot | Out-Null
$summary = [ordered]@{
  schema = "nexus.stability-certification.v1"
  requiredConsecutivePasses = $runs
  completedPasses = 0
  startedAt = (Get-Date).ToUniversalTime().ToString("o")
  attempts = @()
}

try {
  for ($attempt = 1; $attempt -le $runs; $attempt++) {
    & ".\scripts\nexus-windows-certification-reset.ps1"
    & node scripts/nexus-release-certification-controller.js verify-deployment
    if ($LASTEXITCODE -ne 0) {
      throw "Release identity failed before stability attempt $attempt."
    }

    & npx playwright test rebuild/tests/nexus-windows-physical-certification.spec.js --workers=1 --reporter=line
    if ($LASTEXITCODE -ne 0) {
      throw "Physical voice failed during stability attempt $attempt."
    }
    & npx playwright test rebuild/tests/nexus-windows-voice-form-entry.spec.js --workers=1 --reporter=line
    if ($LASTEXITCODE -ne 0) {
      throw "Guided Entry failed during stability attempt $attempt."
    }

    $attemptPath = Join-Path $stabilityRoot "attempt-$attempt"
    New-Item -ItemType Directory -Force -Path $attemptPath | Out-Null
    foreach ($source in @(
      "output\nexus-clean-windows-certification",
      "output\nexus-voice-form-certification",
      "output\nexus-release-certification",
      "output\nexus-windows-real-device"
    )) {
      if (Test-Path $source) {
        Copy-Item -Path $source -Destination $attemptPath -Recurse -Force
      }
    }
    $summary.completedPasses = $attempt
    $summary.attempts += [ordered]@{
      attempt = $attempt
      passed = $true
      finishedAt = (Get-Date).ToUniversalTime().ToString("o")
    }
    $summary | ConvertTo-Json -Depth 8 | Set-Content -Encoding UTF8 (Join-Path $stabilityRoot "summary.json")
  }
} catch {
  $summary.attempts += [ordered]@{
    attempt = $summary.completedPasses + 1
    passed = $false
    error = $_.Exception.Message
    finishedAt = (Get-Date).ToUniversalTime().ToString("o")
  }
  $summary.failure = $_.Exception.Message
  throw
} finally {
  $summary.finishedAt = (Get-Date).ToUniversalTime().ToString("o")
  $summary.passed = ($summary.completedPasses -eq $runs)
  $summary | ConvertTo-Json -Depth 8 | Set-Content -Encoding UTF8 (Join-Path $stabilityRoot "summary.json")
}

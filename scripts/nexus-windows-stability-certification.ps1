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
    $env:NEXUS_PROMPT_ROTATION_SEED = "$attempt"
    $summary.completedPasses = 0
    & ".\scripts\nexus-windows-certification-reset.ps1"
    & node scripts/nexus-release-certification-controller.js verify-deployment
    if ($LASTEXITCODE -ne 0) {
      throw "Release identity failed before stability attempt $attempt."
    }

    & npx playwright test rebuild/tests/nexus-windows-physical-certification.spec.js --workers=1 --reporter=line
    if ($LASTEXITCODE -ne 0) {
      throw "Physical voice failed during stability attempt $attempt."
    }
    & node rebuild/tests/nexus-provider-fetch.test.js
    if ($LASTEXITCODE -ne 0) {
      throw "Provider resilience and truthful failure checks failed during stability attempt $attempt. Streak reset to zero."
    }
    & node rebuild/tests/nexus-approved-source-evidence.test.js
    if ($LASTEXITCODE -ne 0) {
      throw "Source verification failed during stability attempt $attempt. Streak reset to zero."
    }
    & node rebuild/tests/nexus-complete-failure-injection-contract.test.js
    if ($LASTEXITCODE -ne 0) {
      throw "Complete failure-injection coverage failed during stability attempt $attempt. Streak reset to zero."
    }
    & npx playwright test rebuild/tests/nexus-general-questions-physical-voice.spec.js --workers=1 --reporter=line
    if ($LASTEXITCODE -ne 0) {
      throw "Unfamiliar general questions failed during stability attempt $attempt. Streak reset to zero."
    }
    $env:NEXUS_TRANSACTION_SESSION = "stability-$attempt"
    & npx playwright test rebuild/tests/nexus-production-transaction-windows.spec.js --workers=1 --reporter=line
    if ($LASTEXITCODE -ne 0) {
      throw "Rendered and audible production outcomes failed during stability attempt $attempt. Streak reset to zero."
    }
    & npx playwright test rebuild/tests/nexus-windows-voice-form-entry.spec.js --workers=1 --reporter=line
    if ($LASTEXITCODE -ne 0) {
      throw "Guided Entry failed during stability attempt $attempt."
    }
    & node rebuild/tests/nexus-capability-windows-physical.js
    if ($LASTEXITCODE -ne 0) {
      throw "Open-ended capability matrix failed during stability attempt $attempt. Streak reset to zero."
    }
    $env:NEXUS_PRODUCTION_SESSION_ID = "stability-$attempt"
    & node rebuild/tests/nexus-production-experience-windows-voice.js
    if ($LASTEXITCODE -ne 0) {
      throw "Cross-application production experience failed during stability attempt $attempt. Streak reset to zero."
    }
    & node scripts/nexus-protected-foundation-guard.js
    if ($LASTEXITCODE -ne 0) {
      throw "Protected foundation failed after stability attempt $attempt. Streak reset to zero."
    }

    $attemptPath = Join-Path $stabilityRoot "attempt-$attempt"
    New-Item -ItemType Directory -Force -Path $attemptPath | Out-Null
    foreach ($source in @(
      "output\nexus-clean-windows-certification",
      "output\nexus-voice-form-certification",
      "output\nexus-release-certification",
      "output\nexus-windows-real-device",
      "output\nexus-production-transactions",
      "output\nexus-general-questions-voice"
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
  $summary.completedPasses = 0
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

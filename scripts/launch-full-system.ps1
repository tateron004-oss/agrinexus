$Root = Split-Path -Parent $PSScriptRoot
$Node = "C:\Program Files\nodejs\node.exe"
if (-not (Test-Path $Node)) {
  $Node = "node"
}

$providerOut = Join-Path $Root "provider-engines.out.log"
$providerErr = Join-Path $Root "provider-engines.err.log"
$serverOut = Join-Path $Root "server.out.log"
$serverErr = Join-Path $Root "server.err.log"

Start-Process -FilePath $Node -ArgumentList "scripts\provider-engines.js" -WorkingDirectory $Root -RedirectStandardOutput $providerOut -RedirectStandardError $providerErr
Start-Sleep -Seconds 2
Start-Process -FilePath $Node -ArgumentList "server.js" -WorkingDirectory $Root -RedirectStandardOutput $serverOut -RedirectStandardError $serverErr

Write-Host "AgriNexus provider engines: http://localhost:4280"
Write-Host "AgriNexus app:              http://localhost:4173"
Write-Host "Logs:"
Write-Host "  $providerOut"
Write-Host "  $providerErr"
Write-Host "  $serverOut"
Write-Host "  $serverErr"

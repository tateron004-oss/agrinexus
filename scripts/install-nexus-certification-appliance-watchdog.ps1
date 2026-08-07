[CmdletBinding()]
param(
  [string]$ReleaseSha,
  [switch]$SkipDeploy
)

$ErrorActionPreference = "Stop"
if (-not $IsWindows -and $env:OS -ne "Windows_NT") { throw "The watchdog can only be installed on Windows." }
if (-not $ReleaseSha) { $ReleaseSha = (& git rev-parse HEAD).Trim() }
$script = (Resolve-Path ".\scripts\nexus-windows-certification-appliance.ps1").Path
$arguments = "-NoLogo -NoProfile -ExecutionPolicy Bypass -File `"$script`" -ReleaseSha $ReleaseSha"
if ($SkipDeploy) { $arguments += " -SkipDeploy" }
$action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument $arguments -WorkingDirectory (Get-Location).Path
$trigger = New-ScheduledTaskTrigger -AtLogOn -User $env:USERNAME
$settings = New-ScheduledTaskSettingsSet -RestartCount 100 -RestartInterval (New-TimeSpan -Minutes 1) -ExecutionTimeLimit (New-TimeSpan -Days 7) -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries
$principal = New-ScheduledTaskPrincipal -UserId "$env:USERDOMAIN\$env:USERNAME" -LogonType Interactive -RunLevel Highest
Register-ScheduledTask -TaskName "NexusCertificationAppliance" -Action $action -Trigger $trigger -Settings $settings -Principal $principal -Force | Out-Null
Start-ScheduledTask -TaskName "NexusCertificationAppliance"
Write-Host "Nexus certification appliance watchdog installed and started for $ReleaseSha."

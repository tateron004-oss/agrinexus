param(
  [string]$UserName = $(if ($env:AGRINEXUS_USER_NAME) { $env:AGRINEXUS_USER_NAME } else { "Ron" }),
  [switch]$Uninstall
)

$ErrorActionPreference = "Stop"
$TaskName = "AgriNexus Kyro Desktop Listener"
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ListenerPath = Join-Path $ScriptDir "NexusWakeListener.ps1"

if (-not (Get-Command Register-ScheduledTask -ErrorAction SilentlyContinue)) {
  Write-Host "This Windows edition does not have the ScheduledTasks PowerShell module." -ForegroundColor Yellow
  Write-Host "Auto-start at sign-in isn't available here; run Start-NexusDesktopVoice.cmd manually instead, or add a shortcut to it in your Startup folder (Win+R, then shell:startup)."
  exit 1
}

if ($Uninstall) {
  $existing = Get-ScheduledTask -TaskName $TaskName -ErrorAction SilentlyContinue
  if ($existing) {
    Unregister-ScheduledTask -TaskName $TaskName -Confirm:$false
    Write-Host "Removed the '$TaskName' sign-in task. Kyro's desktop listener will no longer start automatically."
  } else {
    Write-Host "No '$TaskName' sign-in task was found; nothing to remove."
  }
  exit 0
}

if (-not (Test-Path $ListenerPath)) {
  Write-Host "Could not find NexusWakeListener.ps1 next to this script ($ScriptDir). Nothing was installed." -ForegroundColor Yellow
  exit 1
}

# -WindowStyle Minimized keeps this out of the way at sign-in without hiding
# it: it still shows in the taskbar and Task Manager under the window title
# NexusWakeListener.ps1 sets ("Kyro desktop listener (AgriNexus)"), and a
# stop phrase or closing the window still stops it -- deliberately not a
# hidden/no-window launch, per this companion's own visible-listener rule
# (native-desktop/README.md's Production Rule).
$psArgs = "-ExecutionPolicy Bypass -NoProfile -WindowStyle Minimized -File `"$ListenerPath`" -UserName `"$UserName`""
$action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument $psArgs -WorkingDirectory $ScriptDir
$trigger = New-ScheduledTaskTrigger -AtLogOn
$settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -StartWhenAvailable -ExecutionTimeLimit ([TimeSpan]::Zero)

$existing = Get-ScheduledTask -TaskName $TaskName -ErrorAction SilentlyContinue
if ($existing) { Unregister-ScheduledTask -TaskName $TaskName -Confirm:$false }
Register-ScheduledTask -TaskName $TaskName -Action $action -Trigger $trigger -Settings $settings `
  -Description "Starts Kyro's AgriNexus desktop wake listener (visible, minimized window) when you sign in to Windows. To remove: powershell -ExecutionPolicy Bypass -File `"$($MyInvocation.MyCommand.Path)`" -Uninstall" `
  | Out-Null

Write-Host ""
Write-Host "Installed. Kyro's desktop listener will start automatically (minimized) the next time you sign in to Windows."
Write-Host "Start it right now without signing out:"
Write-Host "  powershell -ExecutionPolicy Bypass -File `"$ListenerPath`" -UserName `"$UserName`""
Write-Host "Remove this later:"
Write-Host "  powershell -ExecutionPolicy Bypass -File `"$($MyInvocation.MyCommand.Path)`" -Uninstall"
Write-Host ""

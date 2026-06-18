@echo off
setlocal
set "SCRIPT_DIR=%~dp0"
if "%AGRINEXUS_USER_NAME%"=="" set "AGRINEXUS_USER_NAME=Ron"
powershell.exe -ExecutionPolicy Bypass -NoProfile -File "%SCRIPT_DIR%NexusWakeListener.ps1" -UserName "%AGRINEXUS_USER_NAME%"
endlocal

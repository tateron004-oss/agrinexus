@echo off
setlocal
cd /d "%~dp0"
set "NODE_EXE=node"
where node >nul 2>nul
if not %errorlevel%==0 (
  if exist "C:\Program Files\nodejs\node.exe" set "NODE_EXE=C:\Program Files\nodejs\node.exe"
)

echo Starting AgriNexus provider engines at http://localhost:4280
echo Keep this window open while using the app.
echo.
"%NODE_EXE%" scripts\provider-engines.js
pause

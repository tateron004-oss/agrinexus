@echo off
setlocal
cd /d "%~dp0"
set "PORT=4182"
set "HOST=127.0.0.1"
echo Starting AgriNexus at:
echo http://127.0.0.1:%PORT%
echo http://localhost:%PORT%
echo.
echo Keep this window open while using AgriNexus.
echo.
where node >nul 2>nul
if %errorlevel%==0 (
  node server.js
) else if exist "%LOCALAPPDATA%\OpenAI\Codex\bin\node.exe" (
  "%LOCALAPPDATA%\OpenAI\Codex\bin\node.exe" server.js
) else (
  "C:\Program Files\WindowsApps\OpenAI.Codex_26.429.2026.0_x64__2p2nqsd0c76g0\app\resources\node.exe" server.js
)
pause

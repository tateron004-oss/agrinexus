@echo off
setlocal
cd /d "%~dp0"
set "PORT=4182"
set "HOST=127.0.0.1"
echo.
echo AgriNexus local server
echo ======================
echo.
echo 1. Leave this window open.
echo 2. Open this link in Chrome or Edge:
echo.
echo    http://127.0.0.1:%PORT%/
echo.
echo If that does not work, try:
echo.
echo    http://localhost:%PORT%/
echo.
echo Starting server now...
echo.
where node >nul 2>nul
if %errorlevel%==0 (
  node server.js
) else if exist "C:\Program Files\nodejs\node.exe" (
  "C:\Program Files\nodejs\node.exe" server.js
) else if exist "%LOCALAPPDATA%\OpenAI\Codex\bin\node.exe" (
  "%LOCALAPPDATA%\OpenAI\Codex\bin\node.exe" server.js
) else (
  echo Node.js was not found. Install Node.js or open this through Codex.
)
echo.
echo Server stopped. Press any key to close.
pause >nul

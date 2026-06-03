@echo off
setlocal
cd /d "%~dp0"
echo.
echo AgriNexus local environment check
echo =================================
echo.
if not exist ".env" (
  copy ".env.example" ".env" >nul
  echo Created .env from .env.example.
)
where node >nul 2>nul
if %errorlevel%==0 (
  node scripts\local-env-status.js
) else if exist "C:\Program Files\nodejs\node.exe" (
  "C:\Program Files\nodejs\node.exe" scripts\local-env-status.js
) else (
  echo Node.js was not found.
)
echo.
echo Opening .env so you can paste Render/OpenAI/Twilio values if needed...
start "" notepad ".env"
echo.
echo After saving .env, restart AgriNexus.
pause

@echo off
setlocal
cd /d "%~dp0"
set "NODE_EXE=node"
where node >nul 2>nul
if not %errorlevel%==0 (
  if exist "C:\Program Files\nodejs\node.exe" set "NODE_EXE=C:\Program Files\nodejs\node.exe"
)

echo Starting AgriNexus provider engines and app...
echo.
"%NODE_EXE%" scripts\start-full-system.js
echo.
echo Open this in your browser:
echo http://localhost:4173
echo.
pause

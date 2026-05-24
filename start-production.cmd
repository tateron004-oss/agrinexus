@echo off
setlocal
cd /d "%~dp0"
set "NODE_EXE=node"
where node >nul 2>nul
if not %errorlevel%==0 (
  if exist "C:\Program Files\nodejs\node.exe" set "NODE_EXE=C:\Program Files\nodejs\node.exe"
)

echo Running AgriNexus production preflight...
"%NODE_EXE%" scripts\production-preflight.js
if errorlevel 1 (
  echo.
  echo Preflight found remaining production gaps. Review the output above.
  echo Starting anyway for local production validation.
)

echo.
echo Starting AgriNexus at http://localhost:4173
"%NODE_EXE%" server.js
pause

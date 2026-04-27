@echo off
setlocal

set "SOURCE_DIR=%~dp0"
if "%SOURCE_DIR:~-1%"=="\" set "SOURCE_DIR=%SOURCE_DIR:~0,-1%"

set "RUN_DIR=%TEMP%\interior360-local-site"
set "LOG_DIR=%RUN_DIR%"

echo Syncing project to:
echo %RUN_DIR%

robocopy "%SOURCE_DIR%" "%RUN_DIR%" /MIR /XD .git .astro /NFL /NDL /NJH /NJS /NP >nul
if errorlevel 8 (
  echo Failed to copy project to ASCII temp path.
  pause
  exit /b 1
)

cd /d "%RUN_DIR%"
call npm.cmd run dev -- --host 127.0.0.1 --port 4321

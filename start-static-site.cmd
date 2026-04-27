@echo off
setlocal

cd /d "%~dp0"
call npm.cmd run build
if errorlevel 1 (
  echo Build failed.
  pause
  exit /b 1
)

echo Starting static server at http://127.0.0.1:4321/
python -m http.server 4321 --directory dist

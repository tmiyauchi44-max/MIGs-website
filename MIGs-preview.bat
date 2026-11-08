@echo off
setlocal
cd /d "%~dp0"
if not exist "pronunciation.html" (
  echo ERROR: pronunciation.html was not found.
  echo Place this file inside the MIGs-website folder.
  pause
  exit /b 1
)
start "MIGs Local Server" cmd /k "python -m http.server 8001 --bind 127.0.0.1"
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:8001/pronunciation.html"
endlocal

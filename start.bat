@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem ---------------------------------------------------------------
rem  arcade launcher - no admin, no install, no registry writes
rem  serves the folder on loopback, opens default browser
rem  if python is missing, falls back to opening index.html directly
rem ---------------------------------------------------------------

set "ROOT=%~dp0"
cd /d "%ROOT%"

rem ---- find a free port in range 8877-8890 ------------------------
set "PORT="
for /l %%P in (8877,1,8890) do (
    if not defined PORT (
        netstat -ano | findstr ":%%P " >nul 2>&1
        if errorlevel 1 set "PORT=%%P"
    )
)
if not defined PORT (
    echo [arcade] no free port in 8877-8890
    goto :fallback
)
echo [arcade] port !PORT! free

rem ---- find a working python interpreter --------------------------
set "PY="
for %%C in ("py -3" "python" "python3") do (
    if not defined PY (
        %%~C -c "import sys" >nul 2>&1
        if not errorlevel 1 set "PY=%%~C"
    )
)

if not defined PY (
    echo [arcade] no python on this machine - file fallback
    goto :fallback
)

echo [arcade] using !PY!
echo [arcade] serving %ROOT% on http://127.0.0.1:!PORT!

rem ---- start server in detached minimized window ----------------
rem  loopback bind only; server dies when that window closes
start "arcade-server" /MIN cmd /c "%PY% -m http.server !PORT! --bind 127.0.0.1"

rem ---- give the server a beat, then open browser ------------------
timeout /t 1 /nobreak >nul
start "" "http://127.0.0.1:!PORT!/index.html"
echo [arcade] opened browser - close the minimized server window to stop
timeout /t 2 /nobreak >nul
exit /b 0

:fallback
echo [arcade] opening index.html directly via file://
start "" "%ROOT%index.html"
exit /b 0
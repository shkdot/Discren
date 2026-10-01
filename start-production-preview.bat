@echo off
title DISCREN - Production Local Server
echo ========================================================
echo   Building DISCREN Production Bundle...
echo ========================================================
call npm run build
echo.
echo ========================================================
echo   Starting Production Server...
echo ========================================================
echo   Local Address:   http://localhost:4173
echo   Press Ctrl+C at any time to stop the server.
echo.
npm run preview
pause

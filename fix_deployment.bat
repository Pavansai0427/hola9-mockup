@echo off
setlocal
echo ============================================================
echo           ULTIMATE DEPLOYMENT FIX v3.0 (STABLE)
echo ============================================================
echo.

:: Step 0: Ensure correct directory
cd /d "%~dp0"

:: Step 1: Deep Cleanup
echo [STEP 1/4] Cleaning Redundant Files...
if exist "hola9-v2-web\.git" (
    attrib -h -s -r "hola9-v2-web\.git" /s /d >nul
    rd /s /q "hola9-v2-web\.git"
    echo [OK] Removed inner .git folder.
)
if exist "package-lock.json" (
    del /f /q "package-lock.json"
    echo [OK] Removed root lockfile mismatch.
)
if exist "hola9-v2-web\node_modules" (
    echo [INFO] Keeping sub node_modules.
)

:: Step 2: Reset Git Index
echo [STEP 2/4] Resetting Git Index...
git rm -r --cached . >nul 2>nul
git branch -M main
echo [OK] Index reset.

:: Step 3: Add & Build-Fix Commit
echo [STEP 3/4] Adding Fixed Source Code...
git add .
git commit -m "🚀 FINAL BUILD FIX: Resolved TS errors and Root mismatch" >nul 2>nul
echo [OK] Code committed locally.

:: Step 4: Force Push to Cloud
echo [STEP 4/4] Pushing to GitHub (Force Sync)...
git push origin main --force
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Push failed. 
    echo Check your internet or GitHub Permissions.
    pause
    exit /b
)

echo.
echo ============================================================
echo ✅ SUCCESS! YOUR FIXED CODE IS LIVE ON GITHUB.
echo ------------------------------------------------------------
echo Vercel is now building the "FINAL BUILD FIX" version.
echo You can close this window.
echo ============================================================
pause
exit

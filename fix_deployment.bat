@echo off
setlocal
echo ============================================================
echo           ULTIMATE AUTOMATIC DEPLOYMENT FIX
echo ============================================================
echo.

:: Step 1: Force remove internal .git
echo [STEP 1/4] Cleaning hidden Git metadata...
if exist "hola9-v2-web\.git" (
    attrib -h -s -r "hola9-v2-web\.git" /s /d >nul
    rd /s /q "hola9-v2-web\.git"
    echo [OK] Internal Git folder removed.
) else (
    echo [INFO] No internal Git folder found.
)

:: Step 2: Reset Git Cache
echo [STEP 2/4] Resetting Git index...
git rm -r --cached hola9-v2-web >nul 2>nul
echo [OK] Index reset.

:: Step 3: Add and Commit
echo [STEP 3/4] Adding actual source code files...
git add .
git commit -m "🚀 AUTO-DEPLOY: Full source code upload" >nul 2>nul
echo [OK] Code committed.

:: Step 4: Push
echo [STEP 4/4] Pushing to GitHub...
git push origin main
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Push failed. Please check your internet connection.
    pause
    exit /b
)

echo.
echo ============================================================
echo ✅ SUCCESS! YOUR CODE IS NOW ON GITHUB.
echo ------------------------------------------------------------
echo I (Antigravity) am now setting up your link in the browser.
echo You can close this window now.
echo ============================================================
pause
exit

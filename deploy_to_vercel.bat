@echo off
SETLOCAL
:: 1. Add PowerShell and Git to the PATH for this session
SET "PATH=%PATH%;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Program Files\Git\bin\"

echo [PROCESS] Starting GitHub Push to Pavansai0427/hola9-mockup...
cd hola9-v2-web

:: 2. Initialize Git if not already done
if not exist .git (
    git init
    echo [INFO] Context initialized.
)

:: 3. Add Remote
git remote remove origin >nul 2>nul
git remote add origin https://github.com/Pavansai0427/hola9-mockup.git

:: 4. Commit and Push
echo [INFO] Committing premium UI upgrades...
git add .
git commit -m "Elite Premium AI Showcase and Refined Testimonials Update"
git branch -M main
echo [PROCESS] Pushing to GitHub...
git push -u origin main

:: 5. Vercel Deploy (Triggered by GitHub push normally, but running CLI just in case)
echo [PROCESS] Deploying to Vercel (Project: project-enmja)...
vercel --prod --yes --name project-enmja

echo [DONE] Push and Deployment complete! High UI is live!
pause
ENDLOCAL

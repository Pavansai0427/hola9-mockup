@echo off
echo Step 1: Removing internal git reference...
rd /s /q "hola9-v2-web\.git"

echo Step 2: Clearing git cache for the subdirectory...
git rm -r --cached hola9-v2-web

echo Step 3: Adding actual source code...
git add .

echo Step 4: Committing full project...
git commit -m "Fix: Upload actual source code (removed submodule link)"

echo Step 5: Pushing to GitHub...
git push origin main

echo Done! Now check Vercel for the new build.
pause

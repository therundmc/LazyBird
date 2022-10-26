@echo off
cd ..

copy .\index.html .\dist
copy .\style.css .\dist
copy .\jsconfig.json .\dist

mkdir .\dist\libraries
copy .\libraries .\dist\libraries

mkdir .\dist\assets
copy .\assets .\dist\assets
mkdir .\dist\assets\sound
copy .\assets\sound .\dist\assets\sound
mkdir .\dist\assets\img
copy .\assets\img .\dist\assets\img

mkdir .\dist\src
copy .\src .\dist\src
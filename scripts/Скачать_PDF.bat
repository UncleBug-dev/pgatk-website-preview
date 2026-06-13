@echo off
chcp 65001 >nul
echo ========================================================
echo Downloading PDF documents from pgatkk.by...
echo Please MAKE SURE YOUR VPN IS TURNED OFF before continuing!
echo ========================================================
pause
python download_pdfs.py
echo.
echo Download finished! Check the public/downloads/policy/ folder.
pause

import os
import urllib.request
import urllib.error

# Base URL of the old site
BASE_URL = "http://pgatkk.by"

# List of files to download
files = [
    "/images/Metodicheskiy/UchGod2425/InstruktinoMetodicheskoe20242024.pdf",
    "/images/Metodicheskiy/UchGod2425/ProfStandart.pdf",
    "/images/Metodicheskiy/UchGod2324/Pismo2023_2024.pdf",
    "/images/Metodicheskiy/UchGod2324/IMSFk23.pdf",
    "/images/Metodicheskiy/UchGod2324/UPD_OSO_SSO_2023_2024.pdf",
    "/images/Metodicheskiy/UchGod2324/DeystvuyshiePUChPlaniGosKompSso23_24.pdf",
    "/images/Metodicheskiy/UchGod2324/DeystvuyshiePUChPlaniSso23_24.pdf",
    "/images/Metodicheskiy/UchGod2324/PoloshenieUMK.pdf",
    "/images/Metodicheskiy/UchGod2324/OperechneItogovieIsp.pdf",
    "/images/Metodicheskiy/UchGod2324/MSCHPPrimerniePlaniiProgr.pdf",
    "/images/Metodicheskiy/UchGod2324/MSCHPTipovie.pdf",
    "/images/Metodicheskiy/UchGod2324/SSOUchSheurnali.pdf",
    "/images/Metodicheskiy/UchGod2324/SSOShurnaliPrakrika.pdf",
    "/images/Metodicheskiy/UchGod2223/PismoNachaloUchGoda/KNachaku22-23.pdf",
    "/images/Metodicheskiy/UchGod2223/TipovieObr.pdf",
    "/images/Metodicheskiy/UchGod2223/TipovieProf.pdf",
    "/images/Metodicheskiy/UchGod2223/MetodichkaUPDSSO31082021.rar",
    "/images/Metodicheskiy/UchGod2223/metodkontrotsenki2022.pdf",
    "/images/Metodicheskiy/UchGod2223/UcebnieZanutiy.pdf",
    "/images/Metodicheskiy/UchGod2223/Praktika.pdf",
    "/images/Metodicheskiy/UchGod2122/IMP-2021-2022.pdf",
    "/images/Metodicheskiy/UchGod2122/PismoPTOiSSO2021-2022.pdf",
    "/images/Metodicheskiy/UchGod2122/PerechenDTUP21-22.pdf",
    "/images/Metodicheskiy/UchGod2122/PerechenUPD_obsheobr.pdf",
    "/images/Metodicheskiy/UchGod2122/PerechenUPDMSXProd2021-2022.pdf",
    "/images/Metodicheskiy/UchGod2122/PerDUP21-22.pdf",
    "/images/Metodicheskiy/UchGod2122/zapolnenie_shurnalov.zip",
    "/images/Metodicheskiy/UchGod2122/RazrabotkaUPD2021.pptx",
    "/images/Metodicheskiy/UChGod2021/MZ_RB_20202021.pdf",
    "/images/Metodicheskiy/UChGod2021/PismoKnachaku20202021.pdf",
    "/images/Metodicheskiy/UChGod2021/IMS2020_2021.pdf",
    "/images/Metodicheskiy/UchGod2223/PerechenUPD_Obsheobr.pdf"
]

out_dir = r"d:\Workspace\Web\PGATK Website\public\downloads\methodical"
os.makedirs(out_dir, exist_ok=True)

for path in files:
    url = BASE_URL + path
    # Extract filename
    filename = os.path.basename(path)
    out_path = os.path.join(out_dir, filename)
    
    if os.path.exists(out_path):
        print(f"Already exists: {filename}")
        continue
        
    print(f"Downloading {url} to {out_path}...")
    try:
        urllib.request.urlretrieve(url, out_path)
        print(f"Success: {filename}")
    except Exception as e:
        print(f"Failed to download {url}: {e}")

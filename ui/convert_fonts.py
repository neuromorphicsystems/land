import pathlib

import fontTools.ttLib

dirname = pathlib.Path(__file__).resolve().parent

for path in (dirname / "fonts").iterdir():
    if path.suffix == ".ttf":
        font = fontTools.ttLib.TTFont(path)
        font.flavor = "woff2"
        font.save(path.parent / f"{path.stem}.woff2")

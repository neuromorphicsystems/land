# Neuromorphic Datasets Repository

This repository contains the entries for each tracked neuromorphic dataset. The entries are stored in a mixture of `json` for metadata and `markdown` for additional content.

The `json` metadata is validated using a schema, the definitions of which can be found in the /schemas/ directory.

The datasets themselves are stored in the /datasets/ directory, with a separate file for each dataset.

# Local development

```sh
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python check.py # validate the structure of dataset files

cd ui
npm install
npm run watch # build the UI once and rebuild it automatically when files change
npm run build # build the UI once
```

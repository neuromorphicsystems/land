---
{
    "name": "END",
    "aliases": [
        "D-END",
        "N-END"
    ],
    "year": 2023,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Filtering and De-noising",
    "tags": [
        "De-noising"
    ],
    "description": "Event data de-noising",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "Dataset has two download links for the night time and day time recordings",
        "dataset_links": [],
        "size_gb": 22.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "E-MLB -  Multilevel Benchmark for Event-Based Camera Denoising",
        "doi": "10.1109/TMM.2023.3260638",
        "authors": [
            "Saizhe Ding",
            "Jinze Chen",
            "Yang Wang",
            "Yu Kang",
            "Weiguo Song",
            "Jie Cheng",
            "Yang Cao"
        ],
        "abstract": "Event cameras, such as dynamic vision sensors (DVS), are biologically inspired vision sensors that have advanced over conventional cameras in high dynamic range, low latency and low power consumption, showing great application potential in many fields. Event cameras are more sensitive to junction leakage current and photocurrent as they output differential signals, losing the smoothing function of the integral imaging process in the RGB camera. The logarithmic conversion further amplifies noise, especially in low-contrast conditions. Recently, researchers proposed a series of datasets and evaluation metrics but limitations remain: 1) the existing datasets are small in scale and insufficient in noise diversity, which cannot reflect the authentic working environments of event cameras; and 2) the existing denoising evaluation metrics are mostly referenced evaluation metrics, relying on APS information or manual annotation. To address the above issues, we construct a large-scale event denoising dataset (multilevel benchmark for event denoising, E-MLB) for the first time, which consists of 100 scenes, each with four noise levels, that is 12 times larger than the largest existing denoising dataset. We also propose the first nonreference event denoising metric, the event structural ratio (ESR), which measures the structural intensity of given events. ESR is inspired by the contrast metric, but is independent of the number of events and projection direction. Based on the proposed benchmark and ESR, we evaluate the most representative denoising algorithms, including classic and SOTA, and provide denoising baselines under various scenes and noise levels. The corresponding results and codes are available at https://github.com/KugaMaxx/cuke-emlb.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 3,
            "updated": "2024-10-26 12:53:54.336227"
        },
        {
            "source": "scholar",
            "count": 40,
            "updated": "2025-07-08T07:28:36.442949"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2303.11997"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10078400"
        },
        {
            "type": "github_page",
            "url": "https://github.com/KugaMaxx/cuke-emlb"
        }
    ],
    "full_name": "Event Noisy Dataset (END)",
    "additional_metadata": {
        "num_recordings": "1200",
        "num_classes": "100",
        "num_categories": "2"
    },
    "bibtex": {
        "pages": "65--76",
        "year": 2024,
        "author": "Ding, Saizhe and Chen, Jinze and Wang, Yang and Kang, Yu and Song, Weiguo and Cheng, Jie and Cao, Yang",
        "journal": "IEEE Transactions on Multimedia",
        "urldate": "2024-05-15",
        "language": "en",
        "doi": "10.1109/TMM.2023.3260638",
        "url": "https://ieeexplore.ieee.org/document/10078400/",
        "shorttitle": "E-{MLB}",
        "issn": "1520-9210, 1941-0077",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "26",
        "title": "E-{MLB}: {Multilevel} {Benchmark} for {Event}-{Based} {Camera} {Denoising}",
        "type": "article",
        "key": "ding_e-mlb_2024"
    }
}
---

### Dataset Structure

- Dataset contains [1200] recordings
- Dataset contains [100] different scenes
- Dataset is divided into 2 difference scenarios:
  - D-END: Daytime recordings: - 12 Gb in size.
    - [D-END.zip - Google Drive](https://drive.google.com/file/d/1ZatTSewmb-j6RsrJxMWEQIE3Sm1yraK-/view)
  - N-END: Nighttime recordings: 10 Gb in size
    - [N-END.zip - Google Drive](https://drive.google.com/file/d/17ZDhuYdtHui9nqJAfiYYX27omPY7Rpl9/view)

The above datasets have the following folder structure:

```
./data/
├── D-END
│   ├── nd00
│   │   ├── Architecture-ND00-1.aedat4
│   │   ├── Architecture-ND00-2.aedat4
│   │   ├── Architecture-ND00-3.aedat4
│   │   ├── Bicycle-ND00-1.aedat4
│   │   ├── Bicycle-ND00-2.aedat4
│   │   ├── ...
│   ├── nd04
│   │   ├── Architecture-ND04-1.aedat4
│   │   ├── Architecture-ND04-2.aedat4
│   │   ├── ...
│   ├── ...
├── N-END
│   ├── nd00
│   │   ├── ...
│   ├── ...
├── ...
```

Source: https://github.com/KugaMaxx/cuke-emlb

### Comparison Table

| Datasets         | Camera    | Resolution | APS  | IMU | Scenes | Sequences | Capture/s | DoF  |
| ---------------- | --------- | ---------- | ---- | --- | ------ | --------- | --------- | ---- |
| \[[DVSNOISE20]\] | DAVIS 346 | 346 × 260  | Gray | Y   | 16     | 48        | 807       | Cam. |
| \[[RGB-DAVIS]\]  | DAVIS 240 | 190 × 180  | RGB  |     | 20     | 20        | 122       | All. |
| \[[EventNFS]\]   | DAVIS 346 | 224 × 125  |      |     | 1      | 100       | 4238      | Obj. |
| \[[DND21]\]      | DAVIS 346 | 346 × 260  |      |     |        | 8         |           | All. |
| \[[END]\]        | DAVIS 346 | 346 x 260  | Gray | Y   | 100    | 1200      | 7300      | All. |

^749332

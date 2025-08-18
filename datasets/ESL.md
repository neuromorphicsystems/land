---
{
    "name": "ESL",
    "aliases": [],
    "year": 2022,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen3"
    ],
    "other_sensors": [],
    "category": "Domain Specific Application",
    "subcategory": [
        "Structured Light",
        "Depth Estimation"
    ],
    "task": "Event-based Structured Light (depth estimation)",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": true,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://rpg.ifi.uzh.ch/esl.html",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 4.9,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "ESL: Event-based Structured Light",
        "doi": "10.1109/3DV53792.2021.00124",
        "authors": [
            "Manasi Muglikar",
            "Guillermo Gallego",
            "Davide Scaramuzza"
        ],
        "abstract": "Event cameras are bio-inspired sensors providing signi\ufb01cant advantages over standard cameras such as low latency, high temporal resolution, and high dynamic range. We propose a novel structured-light system using an event camera to tackle the problem of accurate and high-speed depth sensing. Our setup consists of an event camera and a laser-point projector that uniformly illuminates the scene in a raster scanning pattern during 16 ms. Previous methods match events independently of each other, and so they deliver noisy depth estimates at high scanning speeds in the presence of signal latency and jitter. In contrast, we optimize an energy function designed to exploit event correlations, called spatio-temporal consistency. The resulting method is robust to event jitter and therefore performs better at higher scanning speeds. Experiments demonstrate that our method can deal with high-speed motion and outperform state-of-the-art 3D reconstruction methods based on event cameras, reducing the RMSE by 83\\% on average, for the same acquisition time. Code and dataset are available at http:// rpg.i\ufb01.uzh.ch/ esl/ .",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 23,
            "updated": "2025-06-24T06:34:02.200022"
        },
        {
            "source": "scholar",
            "count": 55,
            "updated": "2025-06-24T06:34:01.284083"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2111.15510"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9665929"
        },
        {
            "type": "project_page",
            "url": "https://rpg.ifi.uzh.ch/esl.html"
        },
        {
            "type": "github_page",
            "url": "https://github.com/uzh-rpg/ESL"
        }
    ],
    "full_name": "Event-based Structured Light (ESL)",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "1165--1174",
        "year": 2021,
        "month": "dec",
        "author": "Muglikar, Manasi and Gallego, Guillermo and Scaramuzza, Davide",
        "publisher": "IEEE",
        "booktitle": "2021 {International} {Conference} on {3D} {Vision} ({3DV})",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1109/3DV53792.2021.00124",
        "url": "https://ieeexplore.ieee.org/document/9665929/",
        "shorttitle": "{ESL}",
        "isbn": "978-1-66542-688-6",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "title": "{ESL}: {Event}-based {Structured} {Light}",
        "address": "London, United Kingdom",
        "type": "inproceedings",
        "key": "muglikar_esl_2021"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/IROS.2013.6696514",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2021.3062252",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2018.00442",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2007.1166",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DIMPVT.2012.77",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2010.2085952",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2014.2346153",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2013.2273537",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.28.26",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2017.7989517",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2645143",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2017.2769655",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2018.2858287",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCPHOT.2015.7168370",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2018.8351411",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01246-5_15",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2013.00275",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-017-1050-6",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01256",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2793357",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LSP.2020.3016251",
            "source": "crossref"
        },
        {
            "title": "A spiking neural network model of 3D perception for event-based neuromorphic stereo vision systems",
            "source": "crossref"
        },
        {
            "title": "Event-based camera pose tracking using a generative event model",
            "source": "crossref"
        },
        {
            "title": "A 1280x960 Dynamic Vision Sensor with a 4.95-?m pixel pitch and motion artifact minimization",
            "source": "crossref"
        },
        {
            "title": "A 1280x720 back-illuminated stacked temporal contrast event-based vision sensor with 4.86?m pixels, 1.066geps readout, programmable eventrate controller and compressive data-formatting pipeline",
            "source": "crossref"
        },
        {
            "title": "High speed and high dynamic range video with an event camera",
            "source": "crossref"
        },
        {
            "title": "Event-based structured light for depth reconstruction using frequency tagged light patterns",
            "source": "crossref"
        },
        {
            "title": "Approaches for astrometry using event-based sensors",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

| File URL                                                       |           |
| -------------------------------------------------------------- | --------- |
| https://rpg.ifi.uzh.ch/data/esl/dynamic/ballon/data.raw        | 352.17 MB |
| https://rpg.ifi.uzh.ch/data/esl/dynamic/coin/data.raw          | 236.08 MB |
| https://rpg.ifi.uzh.ch/data/esl/dynamic/fan/data.raw           | 329.49 MB |
| https://rpg.ifi.uzh.ch/data/esl/dynamic/multi-object/data.raw  | 769.01 MB |
| https://rpg.ifi.uzh.ch/data/esl/dynamic/origami_fan/data.raw   | 738.21 MB |
| https://rpg.ifi.uzh.ch/data/esl/dynamic/table_tennis/data.raw  | 574.08 MB |
| https://rpg.ifi.uzh.ch/data/esl/dynamic/tape_spin/data.raw     | 257.87 MB |
| https://rpg.ifi.uzh.ch/data/esl/dynamic/waterballoon/data.raw  | 550.45 MB |
| https://rpg.ifi.uzh.ch/data/esl/static/book_duck/data.raw      | 135.26 MB |
| https://rpg.ifi.uzh.ch/data/esl/static/chair/data.raw          | 134.85 MB |
| https://rpg.ifi.uzh.ch/data/esl/static/city_of_lights/data.raw | 161.79 MB |
| https://rpg.ifi.uzh.ch/data/esl/static/cycle/data.raw          | 110.93 MB |
| https://rpg.ifi.uzh.ch/data/esl/static/david/data.raw          | 134.13 MB |
| https://rpg.ifi.uzh.ch/data/esl/static/desk/data.raw           | 84.97 MB  |
| https://rpg.ifi.uzh.ch/data/esl/static/heart/data.raw          | 111.22 MB |
| https://rpg.ifi.uzh.ch/data/esl/static/plant/data.raw          | 106.70 MB |
| https://rpg.ifi.uzh.ch/data/esl/static/room/data.raw           | 108.37 MB |

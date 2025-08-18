---
{
    "name": "Event Penguins",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Domain Specific Application",
    "subcategory": [
        "Wildlife Monitoring",
        "Surveillance"
    ],
    "task": "Penguin Tracking",
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
            "HDF5"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/folders/1VoKEg6CSITmPH27R19tGzyzbUIrmhRDV",
                "format": "HDF5",
                "available": true
            }
        ],
        "size_gb": 0.969,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "Low-power, Continuous Remote Behavioral Localization with Event Cameras",
        "doi": "10.1109/CVPR52733.2024.01761",
        "authors": [
            "Friedhelm Hamann",
            "Suman Ghosh",
            "Ignacio Ju\u00e1rez Mart\u00ednez",
            "Tom Hart",
            "Alex Kacelnik",
            "Guillermo Gallego"
        ],
        "abstract": "Researchers in natural science need reliable methods for quantifying animal behavior. Recently numerous computer vision methods emerged to automate the process. However observing wild species at remote locations remains a challenging task due to difficult lighting conditions and constraints on power supply and data storage. Event cameras offer unique advantages for battery-dependent remote monitoring due to their low power consumption and high dynamic range capabilities. We use this novel sensor to quantify a behavior in Chinstrap penguins called ecstatic display. We formulate the problem as a temporal action detection task determining the start and end times of the behavior. For this purpose we recorded a colony of breeding penguins in Antarctica for several weeks and labeled event data on 16 nests. The developed method consists of a generator of candidate time intervals (proposals) and a classifier of the actions within them. The experiments show that the event cameras' natural response to motion is effective for continuous behavior monitoring and detection reaching a mean average precision (mAP) of 58% (which increases to 63% in good weather conditions). The results also demonstrate the robustness against various lighting conditions contained in the challenging dataset. The low-power capabilities of the event camera allow it to record significantly longer than with a conventional camera. This work pioneers the use of event cameras for remote wildlife observation opening new interdisciplinary opportunities. https:// tub-rip.github.io/ eventpenguins/",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 7,
            "updated": "2025-07-11T08:28:04.955321"
        },
        {
            "source": "scholar",
            "count": 13,
            "updated": "2025-07-11T08:28:04.740269"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2312.03799"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10658483"
        },
        {
            "type": "github_page",
            "url": "https://github.com/tub-rip/event_penguins"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "total_duration": "238 hours",
        "num_recordings": "24",
        "recording_duration": "10 minutes"
    },
    "bibtex": {
        "pages": "18612--18621",
        "year": 2024,
        "month": "jun",
        "author": "Hamann, Friedhelm and Ghosh, Suman and Mart\u00ednez, Ignacio Ju\u00e1rez and Hart, Tom and Kacelnik, Alex and Gallego, Guillermo",
        "publisher": "IEEE",
        "booktitle": "2024 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2024-12-01",
        "language": "en",
        "doi": "10.1109/CVPR52733.2024.01761",
        "url": "https://ieeexplore.ieee.org/document/10658483/",
        "isbn": "9798350353006",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "Low-power, {Continuous} {Remote} {Behavioral} {Localization} with {Event} {Cameras}",
        "address": "Seattle, WA, USA",
        "type": "inproceedings",
        "key": "hamann_low-power_2024-1"
    },
    "referenced_papers": [
        {
            "doi": "10.1163/000579509X12512863752751",
            "source": "crossref"
        },
        {
            "doi": "10.1002/rse2.48",
            "source": "crossref"
        },
        {
            "doi": "10.1038/s41593-020-00734-z",
            "source": "crossref"
        },
        {
            "doi": "10.1093/beheco/arr038",
            "source": "crossref"
        },
        {
            "doi": "10.1017/s0962728600014317",
            "source": "crossref"
        },
        {
            "doi": "10.1126/science.abe6514",
            "source": "crossref"
        },
        {
            "doi": "10.1111/1365-2656.12780",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20074-8_17",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSII.2018.2824899",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00437",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.781",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10044-021-01011-w",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnbot.2019.00038",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00186",
            "source": "crossref"
        },
        {
            "doi": "10.1111/aje.12557",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46478-7_30",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2014.259",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2006.42",
            "source": "crossref"
        },
        {
            "doi": "10.1038/sdata.2015.26",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV45572.2020.9093284",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01270-0_28",
            "source": "crossref"
        },
        {
            "doi": "10.3354/esr00186",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3394171.3413569",
            "source": "crossref"
        },
        {
            "doi": "10.1080/08839514.2017.1378162",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00227-020-03811-w",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.342",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00333",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3123266.3123343",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00043",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.01017",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-019-01211-2",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01225-0_1",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00399",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2022.3195321",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19772-7_29",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19830-4_29",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7298698",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.biosystemseng.2020.04.007",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCYB.2022.3164882",
            "source": "crossref"
        },
        {
            "doi": "10.3233/FI-2000-411207",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46484-8_2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/cvpr.2018.00568",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2009.5206848",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.119",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00675",
            "source": "crossref"
        },
        {
            "title": "Why penguins com-municate: the evolution of visual and vocal signals",
            "source": "crossref"
        },
        {
            "title": "A large scale event-based detection dataset for automotive",
            "source": "crossref"
        },
        {
            "title": "Learning to detect objects with a 1 megapixel event camera",
            "source": "crossref"
        },
        {
            "title": "The iWildCam 2018 challenge dataset,",
            "source": "crossref"
        },
        {
            "title": "Snap-shot serengeti, high-frequency annotated camera trap images of 40 mammalian species in an african savanna",
            "source": "crossref"
        },
        {
            "title": "Animal population censusing at scale with citizen science and photographic identification,",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure 
- Contains 238 hours of recordings
- A total of 24 recordings of 10 minutes were selected.
- Data was filtered using a Hot Pixel Filter
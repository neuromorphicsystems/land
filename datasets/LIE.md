---
{
    "name": "LIE",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [
        "HKVision MV-CA013-A0UC",
        "Livox Avia LiDAR"
    ],
    "category": "Visual Navigation",
    "tags": [
        "Visual Odometry"
    ],
    "description": "Moncular Visual Odometry",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "Dataset will be released upon publication",
        "dataset_links": []
    },
    "paper": {
        "title": "FAST-LIEO: Fast and Real-Time LiDAR-Inertial-Event-Visual Odometry",
        "doi": "10.1109/LRA.2024.3522843",
        "authors": [
            "Zirui Wang",
            "Yangtao Ge",
            "Kewei Dong",
            "I-Ming Chen",
            "Jing Wu"
        ],
        "abstract": "Unlike a standard camera that relies on exposure to obtain output frame by frame, an event camera only outputs an event when the change of brightness intensity in a pixel exceeds a threshold, and the outputs of different pixels are independent to each other. Benefited from its bio-inspired design, event camera has the advantages of low latency and high dynamic range. The researches on multi-sensor fusion with event camera are few so far. In this paper, we propose FAST-LIEO, a framework for fast and real-time LiDAR-inertial-event odometry. The framework tightly fuses LiDAR and event camera measurements without any feature extraction or matching. Besides, our system supports both LIEO and LIEVO (extended with RGB camera fusion). We design a novel EIO subsystem for LiDAR-event fusion. The EIO subsystem maintains a semi-dense event map and estimates the state by aligning the event representation to map. The semi-dense event map is built from LiDAR points by utilizing the edge information and temporal information provided by event representations. Besides testing our method on public benchmark dataset, we also collected real-world data by utilizing our sensor suite and conducted experiments on our self-captured dataset. The experiment results show the high robustness and accuracy of our method in challenging conditions with high real-time ability. To the best of our knowledge, our FAST-LIEO is the first system that can tightly fuse LiDAR, IMU, event camera and standard camera measurements in simultaneously localization and mapping. The source code of FAST-LIEO and our dataset are available at: https://github.com/wsjpla/FAST-LIEO.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 1,
            "updated": "2025-06-21T13:00:18.395408"
        },
        {
            "source": "scholar",
            "count": 1,
            "updated": "2025-06-21T13:00:17.551970"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/abstract/document/10816457"
        },
        {
            "type": "project_page",
            "url": "https://wsjpla.github.io/"
        },
        {
            "type": "github_page",
            "url": "https://github.com/wsjpla/FAST-LIEO"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "6",
        "stereo": false
    },
    "bibtex": {
        "pages": "1--8",
        "year": 2024,
        "author": "Wang, Zirui and Ge, Yangtao and Dong, Kewei and Chen, I-Ming and Wu, Jing",
        "journal": "IEEE Robotics and Automation Letters",
        "urldate": "2024-12-30",
        "language": "en",
        "doi": "10.1109/LRA.2024.3522843",
        "url": "https://ieeexplore.ieee.org/document/10816457/",
        "shorttitle": "{FAST}-{LIEO}",
        "issn": "2377-3766, 2377-3774",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "title": "{FAST}-{LIEO}: {Fast} and {Real}-{Time} {LiDAR}-{Inertial}-{Event}-{Visual} {Odometry}",
        "type": "article",
        "key": "wang_fast-lieo_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2645143",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA46639.2022.9811805",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2021.3062252",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2793357",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2023.3269950",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.616",
            "source": "crossref"
        },
        {
            "doi": "10.1109/icra46639.2022.9811935",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS47612.2022.9981107",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA48506.2021.9561996",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2022.3141876",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS45743.2020.9341176",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2014.X.007",
            "source": "crossref"
        },
        {
            "doi": "10.1002/rob.21809",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS40897.2019.8967746",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS45743.2020.9340704",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2018.2853729",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3095515",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3064227",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.inffus.2011.08.003",
            "source": "crossref"
        },
        {
            "doi": "10.1109/9.250476",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIV.2023.3339144",
            "source": "crossref"
        },
        {
            "title": "Monocular event visual inertial odometry based on event-corner using sliding windows graph-based optimization",
            "source": "crossref"
        },
        {
            "title": "Pl-EVIO: Robust monocular event-based visual inertial odometry with point and line features",
            "source": "crossref"
        },
        {
            "title": "IKD-tree: An incremental K-D tree for robotic applications",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- ## Contains 6 sequences

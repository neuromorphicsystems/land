---
{
    "name": "ECMD",
    "aliases": [],
    "year": 2023,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346",
        "DVXplorer"
    ],
    "other_sensors": [
        "Velodyne HDL-32E",
        "Lslidar C16",
        "Velodyne VLP-16",
        "Xsens-MTI-30 IMU"
    ],
    "category": "Robotic and Moving Vehicle Datasets",
    "subcategory": [
        "Autonomous Driving",
        "SLAM"
    ],
    "task": "Driving Task",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "SharePoint"
        ],
        "file_formats": [
            "ROSbag"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "SharePoint",
                "url": "https://arclab-hku.github.io/ecmd/download/",
                "format": "ROSbag",
                "available": true
            }
        ],
        "size_gb": 2261.2,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "ECMD: An Event-Centric Multisensory Driving Dataset for SLAM",
        "doi": "10.1109/TIV.2023.3339144",
        "authors": [
            "Peiyu Chen",
            "Weipeng Guan",
            "Feng Huang",
            "Yihan Zhong",
            "Weisong Wen",
            "Li-Ta Hsu",
            "Peng Lu"
        ],
        "abstract": "Leveraging multiple sensors enhances complex environmental perception and increases resilience to varying luminance conditions and high-speed motion patterns, achieving precise localization and mapping. This paper proposes, ECMD, an event-centric multisensory dataset containing 81 sequences and covering over 200 km of various challenging driving scenarios including high-speed motion, repetitive scenarios, dynamic objects, etc. ECMD provides data from two sets of stereo event cameras with different resolutions (640\u00d7480, 346\u00d7260), stereo industrial cameras, an infrared camera, a top-installed mechanical LiDAR with two slanted LiDARs, two consumer-level GNSS receivers, and an onboard IMU. Meanwhile, the ground-truth of the vehicle was obtained using a centimeter-level high-accuracy GNSS-RTK/INS navigation system. All sensors are well-calibrated and temporally synchronized at the hardware level, with recording data simultaneously. We additionally evaluate several state-of-the-art SLAM algorithms for benchmarking visual and LiDAR SLAM and identifying their limitations.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 20,
            "updated": "2025-06-04T16:14:54.719438"
        },
        {
            "source": "crossref",
            "count": 10,
            "updated": "2025-06-04T16:14:55.662482"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2311.02327"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10342726"
        },
        {
            "type": "project_page",
            "url": "https://arclab-hku.github.io/ecmd/"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "81",
        "total_distance": "200 km",
        "num_classes": "6",
        "stereo": true
    },
    "bibtex": {
        "pages": "407--416",
        "year": 2024,
        "month": "jan",
        "author": "Chen, Peiyu and Guan, Weipeng and Huang, Feng and Zhong, Yihan and Wen, Weisong and Hsu, Li-Ta and Lu, Peng",
        "journal": "IEEE Transactions on Intelligent Vehicles",
        "urldate": "2024-11-26",
        "number": "1",
        "language": "en",
        "doi": "10.1109/TIV.2023.3339144",
        "url": "https://ieeexplore.ieee.org/document/10342726/",
        "shorttitle": "{ECMD}",
        "issn": "2379-8904, 2379-8858",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "9",
        "title": "{ECMD}: {An} {Event}-{Centric} {Multisensory} {Driving} {Dataset} for {SLAM}",
        "type": "article",
        "key": "Chen2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/tiv.2023.3323648",
            "source": "crossref"
        },
        {
            "doi": "10.1109/tiv.2023.3323378",
            "source": "crossref"
        },
        {
            "doi": "10.1109/tiv.2023.3273185",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/tase.2023.3324365",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3068942",
            "source": "crossref"
        },
        {
            "doi": "10.1109/tits.2023.3312355",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ECMR59166.2023.10256407",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS51168.2021.9636728",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3186770",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3138527",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS47612.2022.9982119",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2019.8793887",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3056348",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ITSC45102.2020.9294515",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00186",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00215",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2020.3025505",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364913491297",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW59228.2023.00419",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3168335",
            "source": "crossref"
        },
        {
            "doi": "10.33012/navi.602",
            "source": "crossref"
        },
        {
            "doi": "10.1109/PLANS.2006.1650612",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LANMAN.2005.1541513",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2013.6696514",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00155",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS47612.2022.9982225",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2018.2853729",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2021.3075644",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2023.3269950",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS45743.2020.9341176",
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
            "doi": "10.1002/aisy.202370029",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2014.X.007",
            "source": "crossref"
        },
        {
            "title": "DDD17: End-to-end DAVIS driving dataset",
            "source": "crossref"
        },
        {
            "title": "A large scale event-based detection dataset for automotive",
            "source": "crossref"
        },
        {
            "title": "NMEA 0183: A GPS receiver",
            "source": "crossref"
        },
        {
            "title": "EVO: Python package for the evaluation of odometry and SLAM",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Contains 81 recordings over 200 km arranged in 6 classes.
- Data sizes for each class:
  - Dense Street: 959 Gb
  - Urban Road: 407 Gb
  - Tunnel: 97.2 Gb
  - Highway: 391 Gb
  - Bridge: 139 Gb
  - Suburban Road: 268 Gb

### Comparison Table

| **Dataset**              | **Terrain**           | **Event** | **Infrared<br> (Resolution [MP])** | **Image** | **LIDAR**                    | **GNSS** | **IMU** | **GT Pose**         |     |
| ------------------------ | --------------------- | --------- | ---------------------------------- | --------- | ---------------------------- | -------- | ------- | ------------------- | --- |
| \[[DDD17]\]              | Urban                 | 0.09 x 1  |                                    | 0.09 x 1  |                              | Yes      |         |                     |     |
| \[[N-CARS ]\]            | Urban                 | 0.07 x 1  |                                    | 0.07 x 1  |                              |          |         |                     |     |
| \[[MVSEC]\]              | Suburban              | 0.09 x 2  |                                    | 0.36 x 2  | VLP-16                       | Yes      | Yes     | GNSS/LiDAR-SLAM     |     |
| \[[CED]\]                | Urban                 | 0.09 x 1  |                                    | 0.09 x 1  |                              |          |         |                     |     |
| \[[Rebecq2019]\]         | Urban                 | 0.31 X 1  |                                    | N/A       |                              |          |         |                     |     |
| \[[DDD20]\]              | Urban                 | 0.09 x 1  |                                    | 0.09 x 1  |                              | Yes      |         |                     |     |
| \[[Brisbane-Event-VPR]\] | 22\]                  | Suburban  | 0.31 x 1                           |           | 0.31 x 1                     |          |         |                     |     |
| \[[ADD]\]                | Suburban, Urban       | 0.31 x 1  |                                    | 0.31 x 1  |                              |          |         |                     |     |
| \[[DSEC]\]               | Suburban              | 0.31 x 2  |                                    | 1.56 x 2  | VLP-16                       | Yes      | Yes     | GNSS-RTK            |     |
| \[[ViViD++]\]            | Urban                 | 0.31 X 1  | 0.33 x 1                           | 2.46 x 1  | OSI-64                       | Yes      | Yes     | GNSS-RTK            |     |
| \[[M3ED]\]               | Forest, Urban         | 0.92 x 2  |                                    | 1.02 x 3  | OSI-64                       |          | Yes     | LiDAR-SLAM/GNSS-RTK |     |
| \[[MA-VIED ]\]           | Urban,                | 0.31 × 1  |                                    | 2.30 x 1  |                              | Yes      | Yes     | GNSS-RTK            |     |
|                          | Race track-like loops | 0.31 × 1  |                                    | 2.30 x 1  |                              | Yes      | Yes     | GNSS-RTK            |     |
| \[[Hadviger2023]\]       | Urban, Indoor         | 0.31 x 2  |                                    | 3.14 x 2  | OSI-128                      | Yes      | Yes     | GNSS-RTK/INS        |     |
| \[[ECMD]\]               | Suburban, Urban,      | 0.09 x 2  | 0.33 x 1                           | 2.30 x 2  | VLP-16, Lslidar C16, HDL-32E | Yes      | Yes     | GNSS-RTK/INS        |     |
|                          | Dense City            | 0.31 x 2  | 0.33 x 1                           | 2.30 x 2  | VLP-16, Lslidar C16, HDL-32E | Yes      | Yes     | GNSS-RTK/INS        |     |

^5c0dda

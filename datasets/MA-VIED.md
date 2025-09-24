---
{
    "name": "MA-VIED",
    "aliases": [],
    "year": 2023,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen3"
    ],
    "other_sensors": [],
    "category": "Robotic and Moving Vehicle Datasets",
    "tags": [
        "Driving",
        "SLAM",
        "Visual Odometry"
    ],
    "full_name": "A Multisensor Automotive Visual Inertial Event Dataset (MA-VIED)",
    "description": "Visual Intertial Odometry and SLAM (driving dataset)",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": true,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "ROSbag"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "http://sira.diei.unipg.it/supplementary/public/Datasets/MA-VIED/Data/",
                "format": "ROSbag",
                "available": true
            }
        ],
        "size_gb": 254.7,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "MA-VIED: A Multisensor Automotive Visual Inertial Event Dataset",
        "doi": "10.1109/TITS.2023.3312355",
        "authors": [
            "Giuseppe Mollica",
            "Simone Felicioni",
            "Marco Legittimo",
            "Leonardo Meli",
            "Gabriele Costante",
            "Paolo Valigi"
        ],
        "abstract": "Visual Inertial Odometry (VIO) and Simultaneous Localization and Mapping (SLAM) have experienced increasing interest in both the consumer and racing automotive sectors in recent decades. With the introduction of novel neuromorphic vision sensors, it is now possible to accurately localize a vehicle even under complex environmental conditions, leading to an improved and safer driving experience. In this paper, we propose MA-VIED, a large-scale driving dataset that collects race tracklike loops, maneuvers, and standard driving scenarios, all bundled in a rich sensory dataset. MA-VIED provides highly accurate IMU data, standard and event camera streams, and RTK position data from a dual GPS antenna, both of which are hardwaresynchronized with all cameras and IMU data. In addition, we collect accurate wheel odometry data and other data from the vehicle\u2019s CAN bus. The dataset contains 13 sequences collected in urban, suburban, and racetrack-like environments with varying lighting conditions and driving dynamics. We provide groundtruth RTK data for algorithms evaluation and the calibration sequences for both IMU and cameras. We then present three tests to demonstrate how MA-VIED can be suitable for monocular VIO applications, using state-of-the-art VIO algorithms and an EKF-based sensor fusion solution. The experimental results show that MA-VIED can support the development and prototyping of novel automotive-oriented frame and event-based monocular VIO algorithms.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 5,
            "updated": "2025-07-11T08:13:51.938593"
        },
        {
            "source": "scholar",
            "count": 9,
            "updated": "2025-07-11T08:13:51.578670"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10254473"
        },
        {
            "type": "github_page",
            "url": "https://github.com/isarlab-department-engineering/MA-VIED"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "13",
        "stereo": false
    },
    "bibtex": {
        "pages": "214--224",
        "year": 2024,
        "month": "jan",
        "author": "Mollica, Giuseppe and Felicioni, Simone and Legittimo, Marco and Meli, Leonardo and Costante, Gabriele and Valigi, Paolo",
        "journal": "IEEE Transactions on Intelligent Transportation Systems",
        "urldate": "2024-04-13",
        "number": "1",
        "language": "en",
        "doi": "10.1109/TITS.2023.3312355",
        "url": "https://ieeexplore.ieee.org/document/10254473/",
        "shorttitle": "{MA}-{VIED}",
        "issn": "1524-9050, 1558-0016",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "25",
        "title": "{MA}-{VIED}: {A} {Multisensor} {Automotive} {Visual} {Inertial} {Event} {Dataset}",
        "type": "article",
        "key": "mollica_ma-vied_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.5244/C.31.16",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.616",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3068942",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2014.6906882",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00049",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00176",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.2986748",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2019.8794255",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3168335",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00144",
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
            "doi": "10.1109/IROS51168.2021.9636728",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00155",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593941",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2017.2658577",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA40945.2020.9196524",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2021.3075644",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2015.7353389",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2018.2853729",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.102",
            "source": "crossref"
        },
        {
            "title": "Event-based vision: A survey",
            "source": "crossref"
        },
        {
            "title": "ESIM: An open event camera simulator",
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
            "title": "A general optimization-based framework for local odometry estimation with multiple sensors",
            "source": "crossref"
        },
        {
            "title": "Adaptive time-slice block-matching optical flow algorithm for dynamic vision sensors",
            "source": "crossref"
        },
        {
            "title": "Frame-free dynamic digital vision",
            "source": "crossref"
        }
    ]
}
---

### Dataset Description

MA-VIED was collected using a Kia Soul electric vehicle equipped with diverse heterogeneous sensors, capturing crucial information for vehicle localization and tracking. The dataset comprises sequences recorded during 13 experimental sessions in varied driving environments (highway, country road, city, racetrack-like) and styles (smooth and rapid maneuvers). These sessions took place in December 2021, as the electric vehicle navigated for several kilometers through different streets in Passignano sul Trasimeno (PG, Umbria, Italy).

### Dataset Structure

The dataset contain 13 sequences of different environment such as urban, suburban and race-track like environments with varying light conditions.

The dataset also contains event camera biases - ratio of ON and OFF is approx 0.6 for our sensor

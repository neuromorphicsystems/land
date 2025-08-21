---
{
    "name": "EDS",
    "aliases": [],
    "year": 2022,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [
        "Flir BFS-U3-1226-C Blackfly"
    ],
    "category": "Visual Navigation",
    "tags": [
        "Visual Odometry",
        "Beamsplitters"
    ],
    "description": "Moncular Visual Odometry",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
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
                "url": "https://rpg.ifi.uzh.ch/eds.html",
                "format": "ROSbag",
                "available": true
            }
        ],
        "size_gb": 193.5,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Event-aided Direct Sparse Odometry",
        "doi": "10.1109/CVPR52688.2022.00569",
        "authors": [
            "Javier Hidalgo-Carrio",
            "Guillermo Gallego",
            "Davide Scaramuzza"
        ],
        "abstract": "We introduce EDS, a direct monocular visual odometry using events and frames. Our algorithm leverages the event generation model to track the camera motion in the blind time between frames. The method formulates a direct probabilistic approach of observed brightness increments. Per-pixel brightness increments are predicted using a sparse number of selected 3D points and are compared to the events via the brightness increment error to estimate camera motion. The method recovers a semi-dense 3D map using photometric bundle adjustment. EDS is the first method to perform 6-DOF VO using events and frames with a direct approach. By design it overcomes the problem of changing appearance in indirect methods. Our results outperform all previous event-based odometry solutions. We also show that, for a target error performance, EDS can work at lower frame rates than state-of-the-art frame-based VO solutions. This opens the door to low-power motiontracking applications where frames are sparingly triggered \u201con demand\u201d and our method tracks the motion in between. We release code and datasets to the public.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 67,
            "updated": "2025-06-22T12:55:38.394298"
        },
        {
            "source": "scholar",
            "count": 116,
            "updated": "2025-06-22T12:55:37.522642"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2204.07640"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9879881"
        },
        {
            "type": "project_page",
            "url": "https://rpg.ifi.uzh.ch/eds.html"
        },
        {
            "type": "github_page",
            "url": "https://github.com/uzh-rpg/eds-buildconf#rpg-beamsplitter-design"
        }
    ],
    "full_name": "Event-aided Direct Sparse (EDS) Odometry Dataset",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "5771--5780",
        "year": 2022,
        "month": "jun",
        "author": "Hidalgo-Carrio, Javier and Gallego, Guillermo and Scaramuzza, Davide",
        "publisher": "IEEE",
        "booktitle": "2022 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1109/CVPR52688.2022.00569",
        "url": "https://ieeexplore.ieee.org/document/9879881/",
        "isbn": "978-1-66546-946-3",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "Event-aided {Direct} {Sparse} {Odometry}",
        "address": "New Orleans, LA, USA",
        "type": "inproceedings",
        "key": "hidalgo-carrio_event-aided_2022"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/TRO.2012.2198930",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2017.2705103",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2019.8794255",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2015.XI.036",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ROBIO.2012.6491077",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCPHOT.2017.7951488",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2647639",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00153",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7759610",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2849882",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.31.33",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-642-39402-7_14",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2016.2624754",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3088793",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN.2011.6033299",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2021.3062252",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2012.6385773",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2016.2597321",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364914554813",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-017-1050-6",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593941",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2014.6906931",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.28.26",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3060707",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2014.6942940",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46466-4_21",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7758089",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.616",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2017.2769655",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2645143",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2793357",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00407",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2015.2463671",
            "source": "crossref"
        },
        {
            "doi": "10.1126/scirobotics.abg5810",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2016.2623335",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2017.2658577",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISSCC.2010.5433973",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2833152",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2014.2346153",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3036667",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSII.2018.2824899",
            "source": "crossref"
        },
        {
            "title": "Asynchronous event-based visual shape tracking for stable haptic feedback in microrobotics",
            "source": "crossref"
        },
        {
            "title": "Continuous-time intensity estimation using event cameras",
            "source": "crossref"
        },
        {
            "title": "ORB-SLAM2: An open-source SLAM system for monocular, stereo, and RGB-D cameras",
            "source": "crossref"
        },
        {
            "title": "FutureMapping: The computational structure of spatial AI systems",
            "source": "crossref"
        },
        {
            "title": "High-speed event camera tracking",
            "source": "crossref"
        },
        {
            "title": "Event-based vision: A survey",
            "source": "crossref"
        },
        {
            "title": "EKLT: Asynchronous photometric feature tracking using events and frames",
            "source": "crossref"
        },
        {
            "title": "Semi-dense 3D re-construction with a stereo event camera",
            "source": "crossref"
        },
        {
            "title": "ESIM: an open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "High speed and high dynamic range video with an event camera",
            "source": "crossref"
        },
        {
            "title": "Machine learning for high-speed corner detection",
            "source": "crossref"
        },
        {
            "title": "ORB-SLAM: a versatile and accurate monocular SLAM system",
            "source": "crossref"
        },
        {
            "title": "Robotics, Vision and Control: Fundamental Algorithms in MATLAB",
            "source": "crossref"
        },
        {
            "title": "Towards robust monocular depth estimation: Mixing datasets for zero-shot cross-dataset transfer",
            "source": "crossref"
        },
        {
            "title": "TimeLens: Event-based video frame interpolation",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

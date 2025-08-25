---
{
    "name": "ESVO",
    "aliases": [],
    "year": 2021,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346",
        "DAVIS240C"
    ],
    "other_sensors": [],
    "category": "Visual Navigation",
    "tags": [
        "Visual Odometry",
        "SLAM"
    ],
    "description": "Visual Odometry (SLAM)",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "ROSbag"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://github.com/HKUST-Aerial-Robotics/ESVO",
                "format": "ROSbag",
                "available": false
            }
        ]
    },
    "paper": {
        "title": "Event-Based Stereo Visual Odometry",
        "doi": "10.1109/TRO.2021.3062252",
        "authors": [
            "Yi Zhou",
            "Guillermo Gallego",
            "Shaojie Shen"
        ],
        "abstract": "Event-based cameras are bio-inspired vision sensors whose pixels work independently from each other and respond asynchronously to brightness changes, with microsecond resolution. Their advantages make it possible to tackle challenging scenarios in robotics, such as high-speed and high dynamic range scenes. We present a solution to the problem of visual odometry from the data acquired by a stereo event-based camera rig. Our system follows a parallel tracking-and-mapping approach, where novel solutions to each subproblem (3D reconstruction and camera pose estimation) are developed with two objectives in mind: being principled and ef\ufb01cient, for real-time operation with commodity hardware. To this end, we seek to maximize the spatio-temporal consistency of stereo event-based data while using a simple and ef\ufb01cient representation. Speci\ufb01cally, the mapping module builds a semi-dense 3D map of the scene by fusing depth estimates from multiple viewpoints (obtained by spatio-temporal consistency) in a probabilistic fashion. The tracking module recovers the pose of the stereo rig by solving a registration problem that naturally arises due to the chosen map and event data representation. Experiments on publicly available datasets and on our own recordings demonstrate the versatility of the proposed method in natural scenes with general 6-DoF motion. The system successfully leverages the advantages of event-based cameras to perform visual odometry in challenging illumination conditions, such as low-light and high dynamic range, while running in real-time on a standard CPU. We release the software and dataset under an open source licence to foster research in the emerging topic of event-based SLAM.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 153,
            "updated": "2025-06-12T09:35:52.360131"
        },
        {
            "source": "scholar",
            "count": 235,
            "updated": "2025-06-12T09:35:52.201858"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/pdf/2007.15548"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9386209"
        },
        {
            "type": "project_page",
            "url": "https://sites.google.com/view/esvo-project-page/home"
        },
        {
            "type": "github_page",
            "url": "https://github.com/HKUST-Aerial-Robotics/ESVO"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": true
    },
    "bibtex": {
        "pages": "1433--1450",
        "keywords": "Computer Science - Computer Vision and Pattern Recognition, Computer Science - Robotics",
        "note": "arXiv:2007.15548 [cs]",
        "year": 2021,
        "month": "oct",
        "author": "Zhou, Yi and Gallego, Guillermo and Shen, Shaojie",
        "journal": "IEEE Transactions on Robotics",
        "urldate": "2023-09-26",
        "number": "5",
        "language": "en",
        "doi": "10.1109/TRO.2021.3062252",
        "url": "http://arxiv.org/abs/2007.15548",
        "issn": "1552-3098, 1941-0468",
        "volume": "37",
        "title": "Event-based {Stereo} {Visual} {Odometry}",
        "type": "article",
        "key": "zhou_event-based_2021"
    },
    "referenced_papers": [
        {
            "doi": "10.1007/978-3-642-39402-7_14",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ROBIO.2012.6491077",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-017-1050-6",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnbot.2019.00028",
            "source": "crossref"
        },
        {
            "doi": "10.1126/science.968482",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCPHOT.2017.7951488",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.28.26",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN.2011.6033299",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00407",
            "source": "crossref"
        },
        {
            "doi": "10.1023/B:VISI.0000011205.11775.fd",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2017.51",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01231-1_27",
            "source": "crossref"
        },
        {
            "doi": "10.1088/0957-0233/25/5/055108",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2013.00275",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2010.2085952",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2012.6385773",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2017.2705103",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11063-015-9434-5",
            "source": "crossref"
        },
        {
            "doi": "10.1109/34.121791",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISMAR.2007.4538852",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-642-24028-7_62",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01246-5_15",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2011.2180025",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2018.00442",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2018.XIV.062",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2013.6631104",
            "source": "crossref"
        },
        {
            "doi": "10.1017/CBO9780511550683",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2011.6126513",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNN.2011.2167239",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2018.2875382",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2009.5117867",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2013.00223",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2014.6942940",
            "source": "crossref"
        },
        {
            "doi": "10.1126/scirobotics.aaz9712",
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
            "doi": "10.1109/TRO.2018.2858287",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2014.6906882",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2014.6906931",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7758089",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2017.7989517",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2014.2352401",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2015.XI.036",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-019-01209-w",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2647639",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2017.2769655",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2013.2273537",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2019.8794255",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.conb.2010.03.007",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2007.1166",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01256",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "title": "ESIM: An open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "A spiking neural network model of 3D perception for event-based neuromorphic stereo vision systems",
            "source": "crossref"
        },
        {
            "title": "About the algebraic structure of the orthogonal group and the other classical groups in a field of characteristic zero or a prime characteristic",
            "source": "crossref"
        },
        {
            "title": "A $640\\times 480$ dynamic vision sensor with a 9 $\\mu$m pixel and 300Meps address-event representation",
            "source": "crossref"
        },
        {
            "title": "Adaptive time-slice block-matching optical flow algorithm for dynamic vision sensors",
            "source": "crossref"
        },
        {
            "title": "On the use of orientation filters for 3D reconstruction in event-driven stereo vision",
            "source": "crossref"
        },
        {
            "title": "LSD-SLAM: Large-scale direct monocular SLAM",
            "source": "crossref"
        },
        {
            "title": "Robust bayesian filtering and smoothing using student's t distribution",
            "source": "crossref"
        },
        {
            "title": "Real-time 3D reconstruction and 6-DoF tracking with an event camera",
            "source": "crossref"
        },
        {
            "title": "Frame-free dynamic digital vision",
            "source": "crossref"
        },
        {
            "title": "Sensing the world with event-based cameras",
            "source": "crossref"
        },
        {
            "title": "ROS: An open-source robot operating system",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

---
{
    "name": "TOPSPIN",
    "aliases": [],
    "year": 2024,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [],
    "category": "Depth, Stereo, and 3D Reconstruction",
    "tags": [
        "3D Reconstruction"
    ],
    "description": "Event-base Structure from Orbit",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Zenodo"
        ],
        "file_formats": [
            "CSV"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Zenodo",
                "url": "https://zenodo.org/records/10884694",
                "format": "CSV",
                "available": true
            }
        ],
        "size_gb": 10.1,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Event-based Structure-from-Orbit",
        "doi": "10.1109/CVPR52733.2024.01848",
        "authors": [
            "Ethan Elms",
            "Yasir Latif",
            "Tae Ha Park",
            "Tat-Jun Chin"
        ],
        "abstract": "Event sensors offer high temporal resolution visual sensing which makes them ideal for perceiving fast visual phenomena without suffering from motion blur. Certain applications in robotics and vision-based navigation require 3D perception of an object undergoing circular or spinning motion in front of a static camera such as recovering the angular velocity and shape of the object. The setting is equivalent to observing a static object with an orbiting camera. In this paper we propose event-based structure-from-orbit (eSfO) where the aim is to simultaneously reconstruct the 3D structure of a fast spinning object observed from a static event camera and recover the equivalent orbital motion of the camera. Our contributions are threefold: since state-of-the-art event feature trackers cannot handle periodic self-occlusion due to the spinning motion we develop a novel event feature tracker based on spatio-temporal clustering and data association that can better track the helical trajectories of valid features in the event data. The feature tracks are then fed to our novel factor graph-based structure-from-orbit back-end that calculates the orbital motion parameters (e.g. spin rate relative rotational axis) that minimize the reprojection error. For evaluation we produce a new event dataset of objects under spinning motion. Comparisons against ground truth indicate the efficacy of eSfO.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 5,
            "updated": "2025-06-23T12:04:18.050822"
        },
        {
            "source": "scholar",
            "count": 6,
            "updated": "2025-06-23T12:04:17.121124"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2405.06216"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10658521"
        },
        {
            "type": "project_page",
            "url": "https://zenodo.org/records/10884694"
        }
    ],
    "full_name": "daTaset Of sPinning objectS with neuromorPhic vIsioN (TOPSPIN)",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "19541--19550",
        "year": 2024,
        "month": "jun",
        "author": "Elms, Ethan and Latif, Yasir and Park, Tae Ha and Chin, Tat-Jun",
        "publisher": "IEEE",
        "booktitle": "2024 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2024-11-30",
        "language": "en",
        "doi": "10.1109/CVPR52733.2024.01848",
        "url": "https://ieeexplore.ieee.org/document/10658521/",
        "isbn": "9798350353006",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "Event-based {Structure}-from-{Orbit}",
        "address": "Seattle, WA, USA",
        "type": "inproceedings",
        "key": "elms_event-based_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1016/s0262-8856(98)00116-4",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSEN.2020.3009687",
            "source": "crossref"
        },
        {
            "doi": "10.1109/AERO.2019.8741753",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.102",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICVR57957.2023.10169359",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00208",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s40295-018-00140-5",
            "source": "crossref"
        },
        {
            "doi": "10.1561/9781680833270",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TAES.2023.3245997",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00235",
            "source": "crossref"
        },
        {
            "doi": "10.1109/76.825726",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCIS.2004.1460775",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01258-8_46",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-019-01209-w",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00569",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS47612.2022.9981451",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2003.1233910",
            "source": "crossref"
        },
        {
            "doi": "10.2514/1.A35015",
            "source": "crossref"
        },
        {
            "doi": "10.2514/6.2010-8863",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7758089",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS40897.2019.8968491",
            "source": "crossref"
        },
        {
            "doi": "10.21105/joss.00205",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.31.33",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1017/S096249291700006X",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00174",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00138-004-0165-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/AERO53065.2022.9843439",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2645143",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.31.16",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.445",
            "source": "crossref"
        },
        {
            "doi": "10.1002/rob.21548",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2793357",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2021.3062252",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2018.XIV.062",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "title": "Haste: multi-hypothesis asynchronous speeded-up tracking of events",
            "source": "crossref"
        },
        {
            "title": "Ac-cidental turntables: Learning 3d pose by watching objects turn",
            "source": "crossref"
        },
        {
            "title": "Automatic 3d model construction for turn-table sequences",
            "source": "crossref"
        },
        {
            "title": "Asynchronous kalman filter for event-based star tracking",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

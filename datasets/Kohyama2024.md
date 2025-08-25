---
{
    "name": "Kohyama2024",
    "aliases": [],
    "year": 2024,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "ESIM"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Human Pose Recognition"
    ],
    "description": "Human pose estimation",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "",
        "dataset_links": []
    },
    "paper": {
        "title": "3D Human Scan With A Moving Event Camera",
        "doi": "10.1109/CVPRW63382.2024.00568",
        "authors": [
            "Kai Kohyama",
            "Shintaro Shiba",
            "Yoshimitsu Aoki"
        ],
        "abstract": "Capturing the 3D human body is one of the important tasks in computer vision with a wide range of applications such as virtual reality and sports analysis. However, conventional frame cameras are limited by their temporal resolution and dynamic range, which imposes constraints in real-world application setups. Event cameras have the advantages of high temporal resolution and high dynamic range (HDR), but the development of event-based methods is necessary to handle data with different characteristics. This paper proposes a novel event-based method for 3D pose estimation and human mesh recovery. Prior work on event-based human mesh recovery require frames (images) as well as event data. The proposed method solely relies on events; it carves 3D voxels by moving the event camera around a stationary body, reconstructs the human pose and mesh by attenuated rays, and fit statistical body models, preserving high-frequency details. The experimental results show that the proposed method outperforms conventional frame-based methods in the estimation accuracy of both pose and body mesh. We also demonstrate results in challenging situations where other frame-based methods suffer from motion blur. This is the first-of-its-kind to demonstrate event-only human mesh recovery, and we hope that it is the first step toward achieving robust and accurate 3D human body scanning from vision sensors.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-06-11T13:52:09.956575"
        },
        {
            "source": "scholar",
            "count": 1,
            "updated": "2025-06-11T13:52:00.347929"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2404.08504"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10678345"
        },
        {
            "type": "project_page",
            "url": "https://florpeng.github.io/event-based-human-scan/"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "sensor_resolution": "640 x 480",
        "num_recordings": "27",
        "num_classes": "3",
        "stereo": false
    },
    "bibtex": {
        "pages": "5586--5596",
        "year": 2024,
        "month": "jun",
        "author": "Kohyama, Kai and Shiba, Shintaro and Aoki, Yoshimitsu",
        "publisher": "IEEE",
        "booktitle": "2024 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} {Workshops} ({CVPRW})",
        "urldate": "2024-12-01",
        "language": "en",
        "doi": "10.1109/CVPRW63382.2024.00568",
        "url": "https://ieeexplore.ieee.org/document/10678345/",
        "isbn": "9798350365474",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "{3D} {Human} {Scan} {With} {A} {Moving} {Event} {Camera}",
        "address": "Seattle, WA, USA",
        "type": "inproceedings",
        "key": "kohyama_3d_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/TVCG.2021.3067784",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2011.11.001",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00217",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.610",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV57658.2022.00023",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00798",
            "source": "crossref"
        },
        {
            "doi": "10.1109/isscc19947.2020.9063149",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00407",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7759345",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2024.3378443",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52733.2024.02356",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00744",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3618381",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3592433",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.28.26",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46466-4_21",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00530",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "doi": "10.1109/34.273735",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01012",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.326",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58598-3_41",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2816795.2818013",
            "source": "crossref"
        },
        {
            "doi": "10.1145/280811.281026",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00650",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3503250",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593805",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00533",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.31.33",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV53792.2021.00124",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-49409-8_15",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.139",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01123",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00150",
            "source": "crossref"
        },
        {
            "doi": "10.1002/aisy.202200251",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19797-0_36",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LSP.2023.3234800",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2023.3328188",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3528233.3530704",
            "source": "crossref"
        },
        {
            "doi": "10.1109/iscas45731.2020.9180436",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.284",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01249-6_48",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2892452",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58526-6_3",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20071-7_17",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00502",
            "source": "crossref"
        },
        {
            "doi": "10.1109/cvpr.2018.00761",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01125",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2023.3271691",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01081",
            "source": "crossref"
        },
        {
            "title": "Easymocap - make human motion capture easier",
            "source": "crossref"
        },
        {
            "title": "Adam: A method for stochastic optimization",
            "source": "crossref"
        },
        {
            "title": "ESIM: an open event camera simulator",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Simulated data with a resolution of 640 x 480 pixels
- Dataset contains 27 sequences under 3 different conditions

### Comparison Table (from paper)

| Dataset           | Scene   | Camera  | Data            | Motion Blur |
| ----------------- | ------- | ------- | --------------- | ----------- |
| \[[EventCap]\]    | Dynamic | Static  | Images + Events | No          |
| \[[EventHPE]\]    | Dynamic | Static  | Images + Events | No          |
| \[[Kohyama2024]\] | Static  | Dynamic | Events          | No          |

---
{
    "name": "EvRGBHand",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346",
        "Prophesee Gen4",
        "V2E"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "subcategory": [
        "Hand Pose Detection"
    ],
    "task": "Hand Mesh Reconstruction",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Dropbox"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Dropbox",
                "url": "https://www.dropbox.com/scl/fi/x3bmfw2tfmqaghagb6alx/EvRealHands.zip?rlkey=gvukp6yv86ypmio7dnce20w2y&e=1&st=mg1z06o7&dl=0",
                "format": "aedat",
                "available": true
            }
        ],
        "size_gb": 52.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Complementing Event Streams and RGB Frames for Hand Mesh Reconstruction",
        "doi": "10.1109/CVPR52733.2024.02356",
        "authors": [
            "Jianping Jiang",
            "Xinyu Zhou",
            "Bingxuan Wang",
            "Xiaoming Deng",
            "Chao Xu",
            "Boxin Shi"
        ],
        "abstract": "Reliable hand mesh reconstruction (HMR) from commonly-used color and depth sensors is challenging especially under scenarios with varied illuminations and fast motions. Event camera is a highly promising alternative for its high dynamic range and dense temporal resolution properties, but it lacks salient texture appearance for hand mesh reconstruction. In this paper, we propose EvRGBHand \u2013 the first approach for 3D hand mesh reconstruction with an event camera and an RGB camera compensating for each other. By fusing two modalities of data across time, space, and information dimensions, EvRGBHand can tackle overexposure and motion blur issues in RGB-based HMR and foreground scarcity as well as background overflow issues in event-based HMR. We further propose EvRGBDegrader, which allows our model to generalize effectively in challenging scenes, even when trained solely on standard scenes, thus reducing data acquisition costs. Experiments on real-world data demonstrate that EvRGBHand can effectively solve the challenging issues when using either type of camera alone via retaining the merits of both, and shows the potential of generalization to outdoor scenes and another type of event camera. For code, models, and dataset, please refer tohttps://alanjiang98.github.io/evrgbhand.github.io/.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 2,
            "updated": "2025-06-08T13:08:35.327501"
        },
        {
            "source": "scholar",
            "count": 9,
            "updated": "2025-06-08T13:08:34.499253"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2403.07346"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10658326"
        },
        {
            "type": "project_page",
            "url": "https://alanjiang98.github.io/evrgbhand.github.io/"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_categories": "2",
        "source_dataset": "INTERHAND2.6M"
    },
    "bibtex": {
        "pages": "24944--24954",
        "year": 2024,
        "month": "jun",
        "author": "Jiang, Jianping and Zhou, Xinyu and Wang, Bingxuan and Deng, Xiaoming and Xu, Chao and Shi, Boxin",
        "publisher": "IEEE",
        "booktitle": "2024 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2024-12-15",
        "language": "en",
        "doi": "10.1109/CVPR52733.2024.02356",
        "url": "https://ieeexplore.ieee.org/document/10658326/",
        "isbn": "9798350353006",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "Complementing {Event} {Streams} and {RGB} {Frames} for {Hand} {Mesh} {Reconstruction}",
        "address": "Seattle, WA, USA",
        "type": "inproceedings",
        "key": "Jiang2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR.2019.01110",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01231-1_41",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01989",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01031",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.89",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2020.3037479",
            "source": "crossref"
        },
        {
            "doi": "10.1007/3-540-45103-X_50",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISSCC19947.2020.9063149",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01258-8_46",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00484",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3386569.3392452",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00780",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00144",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58595-2_2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00504",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00278",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01270",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00199",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00156",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3122874",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW56347.2022.00070",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00546",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593805",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00143",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3130800.3130883",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01216",
            "source": "crossref"
        },
        {
            "doi": "10.18653/v1/N18-2074",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.494",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01519",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19797-0_24",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA46639.2022.9812059",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01723",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3414685.3417852",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.2983686",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00168",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01234-2_9",
            "source": "crossref"
        },
        {
            "doi": "10.48550/ARXIV.1807.06521",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00502",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58610-2_8",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00493",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.02022",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01338",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20071-7_5",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00943",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00244",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00539",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00216",
            "source": "crossref"
        },
        {
            "doi": "10.1109/iccv.2019.00090",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01081",
            "source": "crossref"
        },
        {
            "title": "VATT: Transformers for multimodal self-supervised learning from raw video, audio and text",
            "source": "crossref"
        },
        {
            "title": "Cross-attention of disentangled modalities for 3D human mesh re-covery with transformers",
            "source": "crossref"
        },
        {
            "title": "3D hand gesture recognition using a depth and skeletal dataset: Shrec\u2019 17 track",
            "source": "crossref"
        },
        {
            "title": "JGR-P20: Joint graph reasoning based pixel-to-offset prediction network for 3D hand pose estimation from a single depth image",
            "source": "crossref"
        },
        {
            "title": "Multi-view video-based 3D hand pose estimation",
            "source": "crossref"
        },
        {
            "title": "Semi-supervised classification with graph convolutional networks",
            "source": "crossref"
        },
        {
            "title": "Parameter efficient multimodal transformers for video representation learning",
            "source": "crossref"
        },
        {
            "title": "A 128\u00d7128 120 dB 15 \u00b5s latency asynchronous temporal contrast vision sensor",
            "source": "crossref"
        },
        {
            "title": "Mo-bilehand: Real-time 3D hand shape and pose estimation from color image",
            "source": "crossref"
        },
        {
            "title": "A mixed classification-regression framework for 3D pose estimation from 2D images",
            "source": "crossref"
        },
        {
            "title": "Handvoxnet++:3D hand shape and pose estimation using voxel-based neural networks",
            "source": "crossref"
        },
        {
            "title": "Interhand2. 6M: A dataset and baseline for 3D interacting hand pose estimation from a single RGB image",
            "source": "crossref"
        },
        {
            "title": "Convolutional lstm network: A machine learning approach for precipitation now-casting",
            "source": "crossref"
        },
        {
            "title": "Attention is all you need",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Contains both real and simulated data.
- Real data is divided into 2 categories:
  - Indoor scenes contain 4,452 seconds of data from 10 subjects and performs 15 hand poses
  - Outdoor scenes contained six recordings from 3 subjects, with 3 from a Prophesee Gen4 and 3 from a DAVIS 346
- Synthetic data converted from the INTERHAND2.6M dataset
  - Contains 9 camera views from 4 subjects

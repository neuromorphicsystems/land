---
{
    "name": "EvDiG",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [
        "HIKVISION MV-CA050-12UC"
    ],
    "category": "Depth, Stereo, and 3D Reconstruction",
    "subcategory": [
        "Beamsplitters",
        "Monitor Conversion",
        "Scene Segmentation"
    ],
    "task": "Direct and Global Components Separation",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "",
        "dataset_links": []
    },
    "paper": {
        "title": "EvDiG: Event-guided Direct and Global Components Separation",
        "doi": "10.1109/CVPR52733.2024.00918",
        "authors": [
            "Xinyu Zhou",
            "Peiqi Duan",
            "Boyu Li",
            "Chu Zhou",
            "Chao Xu",
            "Boxin Shi"
        ],
        "abstract": "Separating the direct and global components of a scene aids in shape recovery and basic material understanding. Conventional methods capture multiple frames under high frequency illumination patterns or shadows, requiring the scene to keep stationary during the image acquisition process. Single-frame methods simplify the capture procedure but yield lower-quality separation results. In this paper, we leverage the event camera to facilitate the separation of direct and global components, enabling video-rate separation of high quality. In detail, we adopt an event camera to record rapid illumination changes caused by the shadow of a line occluder sweeping over the scene, and reconstruct the coarse separation results through event accumulation. We then design a network to resolve the noise in the coarse separation results and restore color information. A real-world dataset is collected using a hybrid camera system for network training and evaluation. Experimental results show superior performance over state-of-the-art methods.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-07-11T08:37:26.675416"
        },
        {
            "source": "scholar",
            "count": 2,
            "updated": "2025-07-11T08:37:26.291174"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://openaccess.thecvf.com/content/CVPR2024/papers/Zhou_EvDiG_Event-guided_Direct_and_Global_Components_Separation_CVPR_2024_paper.pdf"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10656909"
        }
    ],
    "full_name": "Event cameras for effective and efficient Direct and Global components separation (EvDiG)",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "9612--9621",
        "year": 2024,
        "month": "jun",
        "author": "Zhou, Xinyu and Duan, Peiqi and Li, Boyu and Zhou, Chu and Xu, Chao and Shi, Boxin",
        "publisher": "IEEE",
        "booktitle": "2024 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2024-12-21",
        "language": "en",
        "doi": "10.1109/CVPR52733.2024.00918",
        "url": "https://ieeexplore.ieee.org/document/10656909/",
        "shorttitle": "{EvDiG}",
        "isbn": "9798350353006",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "{EvDiG}: {Event}-guided {Direct} and {Global} {Components} {Separation}",
        "address": "Seattle, WA, USA",
        "type": "inproceedings",
        "key": "zhou_evdig_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/ICCV.2013.187",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-642-15552-9_22",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSEN.2020.2990752",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01452",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.1995.466772",
            "source": "crossref"
        },
        {
            "doi": "10.1111/cgf.14159",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2766928",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2011.6126305",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2735702",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01975",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2022.3231334",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2461912.2461925",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00144",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.visinf.2017.01.008",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2508363.2508428",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCPHOT.2018.8368466",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCPHOT.2015.7168370",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV53792.2021.00124",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00155",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-540-88693-8_61",
            "source": "crossref"
        },
        {
            "doi": "10.1145/1141911.1141977",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-20876-9_9",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00183",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2185520.2185535",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2766897",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.246",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-015-0816-y",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2023.08.009",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2461912.2461928",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01234-2_1",
            "source": "crossref"
        },
        {
            "doi": "10.1117/12.7972479",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-013-0668-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01728",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01338",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00564",
            "source": "crossref"
        },
        {
            "title": "A software plat-form for manipulating the camera imaging pipeline",
            "source": "crossref"
        },
        {
            "title": "Decoupled weight de-cay regularization",
            "source": "crossref"
        },
        {
            "title": "A data-driven approach for direct and global component separation from a single image",
            "source": "crossref"
        },
        {
            "title": "Very deep con-volutional networks for large-scale image recognition",
            "source": "crossref"
        },
        {
            "title": "Direct and global component sep-aration from a single image using basis representation",
            "source": "crossref"
        },
        {
            "title": "Event-based bispectral pho-tometry using temporally modulated illumination",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

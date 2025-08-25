---
{
    "name": "FusionPortable",
    "aliases": [],
    "year": 2022,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [
        "Ouster LiDAR",
        "FLIR BFS-U3-31S4C",
        "STIM300 IMU",
        "3DM-GQ7-GNSS/INS"
    ],
    "category": "Robotic and Moving Vehicle Datasets",
    "tags": [
        "Stereo",
        "SLAM"
    ],
    "description": "Indoor Localisation and Mapping",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive",
            "Baidu"
        ],
        "file_formats": [
            "ROSbag"
        ],
        "availability_comment": "Data is compressed using the 7z format",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/folders/1PYhnf3PlY5r0hbyzWDGTUTPxRMl6SYa-?usp=sharing",
                "format": "ROSbag",
                "available": true
            },
            {
                "name": "Baidu",
                "url": "https://pan.baidu.com/s/1lZwK-TNrCyoyC9oWEs8jUg?pwd=byj8",
                "format": "ROSbag",
                "available": true
            }
        ],
        "size_gb": 266.1,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "FusionPortable: A Multi-Sensor Campus-Scene Dataset for Evaluation of Localization and Mapping Accuracy on Diverse Platforms",
        "doi": "10.1109/IROS47612.2022.9982119",
        "authors": [
            "Jianhao Jiao",
            "Hexiang Wei",
            "Tianshuai Hu",
            "Xiangcheng Hu",
            "Yilong Zhu",
            "Zhijian He",
            "Jin Wu",
            "Jingwen Yu",
            "Xupeng Xie",
            "Huaiyang Huang",
            "Ruoyu Geng",
            "Lujia Wang",
            "Ming Liu"
        ],
        "abstract": "Combining multiple sensors enables a robot to maximize its perceptual awareness of environments and enhance its robustness to external disturbance, crucial to robotic navigation. This paper proposes the FusionPortable benchmark, a complete multi-sensor dataset with a diverse set of sequences for mobile robots. This paper presents three contributions. We first advance a portable and versatile multi-sensor suite that offers rich sensory measurements: 10Hz LiDAR point clouds, 20Hz stereo frame images, high-rate and asynchronous events from stereo event cameras, 200Hz inertial readings from an IMU, and 10Hz GPS signal. Sensors are already temporally synchronized in hardware. This device is lightweight, self-contained, and has plug-and-play support for mobile robots. Second, we construct a dataset by collecting 17 sequences that cover a variety of environments on the campus by exploiting multiple robot platforms for data collection. Some sequences are challenging to existing SLAM algorithms. Third, we provide ground truth for the decouple localization and mapping performance evaluation. We additionally evaluate state-of-the-art SLAM approaches and identify their limitations. The dataset, consisting of raw sensor measurements, ground truth, calibration data, and evaluated algorithms, will be released.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 30,
            "updated": "2025-06-12T13:51:44.095167"
        },
        {
            "source": "scholar",
            "count": 41,
            "updated": "2025-06-12T13:51:43.932303"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2208.11865"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/abstract/document/9982119"
        },
        {
            "type": "project_page",
            "url": "https://fusionportable.github.io/dataset/fusionportable_v2/"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": true
    },
    "bibtex": {
        "pages": "3851--3856",
        "year": 2022,
        "month": "oct",
        "author": "Jiao, Jianhao and Wei, Hexiang and Hu, Tianshuai and Hu, Xiangcheng and Zhu, Yilong and He, Zhijian and Wu, Jin and Yu, Jingwen and Xie, Xupeng and Huang, Huaiyang and Geng, Ruoyu and Wang, Lujia and Liu, Ming",
        "publisher": "IEEE",
        "booktitle": "2022 {IEEE}/{RSJ} {International} {Conference} on {Intelligent} {Robots} and {Systems} ({IROS})",
        "urldate": "2024-10-17",
        "language": "en",
        "doi": "10.1109/IROS47612.2022.9982119",
        "url": "https://ieeexplore.ieee.org/document/9982119/",
        "shorttitle": "{FusionPortable}",
        "isbn": "978-1-66547-927-1",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "{FusionPortable}: {A} {Multi}-{Sensor} {Campus}-{Scene} {Dataset} for {Evaluation} of {Localization} and {Mapping} {Accuracy} on {Diverse} {Platforms}",
        "address": "Kyoto, Japan",
        "type": "inproceedings",
        "key": "jiao_fusionportable_2022"
    },
    "referenced_papers": [
        {
            "doi": "10.1177/0278364912458814",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS45743.2020.9341801",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364915620033",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593419",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364910384295",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364913491297",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364916679498",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA40945.2020.9196526",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS45743.2020.9340849",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364915614638",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3138527",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2014.6907054",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA40945.2020.9196884",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2013.6696514",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593660",
            "source": "crossref"
        },
        {
            "doi": "10.1177/1729881419841532",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS45743.2020.9341176",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2021.3062252",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2014.X.007",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2019.8793511",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2022.3141876",
            "source": "crossref"
        },
        {
            "title": "A general optimization-based framework for global pose estimation with multiple sensors",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

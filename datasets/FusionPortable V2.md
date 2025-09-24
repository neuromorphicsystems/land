---
{
    "name": "FusionPortable V2",
    "aliases": [],
    "year": 2024,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [
        "FLIR BFS-U3-31S4C",
        "Ouster LiDAR",
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
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive",
            "Baidu"
        ],
        "file_formats": [
            "ROSbag"
        ],
        "availability_comment": "Datasets compressed using 7zip. ",
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
        "size_gb": 276.48,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "FusionPortableV2: A unified multi-sensor dataset for generalized SLAM across diverse platforms and scalable environments",
        "doi": "10.1177/02783649241303525",
        "authors": [
            "Hexiang Wei",
            "Jianhao Jiao",
            "Xiangcheng Hu",
            "Jingwen Yu",
            "Xupeng Xie",
            "Jin Wu",
            "Yilong Zhu",
            "Yuxuan Liu",
            "Lujia Wang",
            "Ming Liu"
        ],
        "abstract": "Simultaneous Localization and Mapping (SLAM) has been widely applied in various robotic missions, from rescue operations to autonomous driving. However, the generalization of SLAM algorithms remains a significant challenge, as current datasets often lack scalability in terms of platforms and environments. To address this limitation, we present FusionPortableV2, a multi-sensor SLAM dataset featuring sensor diversity, varied motion patterns, and a wide range of environmental scenarios. Our dataset comprises 27 sequences, spanning over 2.5 hours and collected from four distinct platforms: a handheld suite, a legged robot, an unmanned ground vehicle (UGV), and a vehicle. These sequences cover diverse settings, including buildings, campuses, and urban areas, with a total length of 38.7 km. Additionally, the dataset includes ground truth (GT) trajectories and RGB point cloud maps covering approximately 0.3 km2. To validate the utility of our dataset in advancing SLAM research, we assess several state-of-the-art (SOTA) SLAM algorithms. Furthermore, we demonstrate the dataset\u2019s broad application beyond traditional SLAM tasks by investigating its potential for monocular depth estimation. The complete dataset, including sensor data, GT, and calibration details, is accessible at https://fusionportable.github.io/dataset/fusionportable_v2.",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 14,
            "updated": "2025-09-13T12:45:56.328004"
        },
        {
            "source": "scholar",
            "count": 27,
            "updated": "2025-09-13T12:45:56.972522"
        }
    ],
    "links": [
        {
            "type": "project_page",
            "url": "https://fusionportable.github.io/dataset/fusionportable_v2"
        },
        {
            "type": "paper",
            "url": "https://journals.sagepub.com/doi/full/10.1177/02783649241303525"
        }
    ],
    "full_name": "",
    "additional_metadata": {},
    "referenced_papers": [
        {
            "doi": "10.1177/0278364920961451",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA40945.2020.9196884",
            "source": "crossref"
        },
        {
            "doi": "10.1177/02783649231160195",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364915620033",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364915614638",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW59228.2023.00419",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2019.8793887",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2013.6696514",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-67361-5_10",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TITS.2024.3424984",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3186770",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3068942",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364913491297",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TMECH.2024.3362902",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364910384295",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364919843996",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA48506.2021.9561251",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS47612.2022.9982119",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TMECH.2023.3259444",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3592433",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA48891.2023.10160432",
            "source": "crossref"
        },
        {
            "doi": "10.1177/02783649241227968",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA46639.2022.9811935",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MRA.2020.3045040",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TASE.2023.3290348",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA57147.2024.10610983",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364916679498",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917702237",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52733.2024.01708",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00459",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917751842",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1177/02783649211052312",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2024.3422055",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2017.7989443",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364919841437",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2018.2853729",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS45743.2020.9340849",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2016.7487628",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2016.2529645",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3181357",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593419",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA48891.2023.10161227",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.01967",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS55552.2023.10342377",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS45743.2020.9341801",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2022.3193788",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TMECH.2021.3103995",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2022.3141876",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA48891.2023.10160486",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3138527",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2025.3550771",
            "source": "crossref"
        },
        {
            "doi": "10.1109/34.888718",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3226077",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2023.3234802",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364920938439",
            "source": "crossref"
        },
        {
            "title": "Depth map prediction from a single image using a multi-scale deep network",
            "source": "crossref"
        },
        {
            "title": "Helipr: heterogeneous lidar dataset for inter-lidar place recognition under spatiotemporal variations",
            "source": "crossref"
        },
        {
            "title": "Droid-slam: deep visual slam for monocular, stereo, and rgb-d cameras",
            "source": "crossref"
        },
        {
            "title": "Uncertainty-aware hand\u2013eye calibration",
            "source": "crossref"
        }
    ]
}
---

# Dataset Description

| File Name                     | Size    |
|------------------------------|---------|
| handheld_escalator00.7z      | 8.02 GB |
| handheld_escalator01.7z      | 7.96 GB |
| handheld_grass00.7z          | 4.12 GB |
| handheld_room00.7z           | 4.94 GB |
| handheld_room01.7z           | 3.84 GB |
| handheld_underground.7z      | 12.86 GB|
| legged_grass00.7z            | 9.45 GB |
| legged_grass01.7z            | 3.37 GB |
| legged_room00.7z             | 5.91 GB |
| legged_transition00.7z       | 7.60 GB |
| legged_underground00.7z      | 8.22 GB |
| ugv_campus00.7z              | 9.36 GB |
| ugv_campus01.7z              | 5.22 GB |
| ugv_parking00.7z             | 3.78 GB |
| ugv_parking01.7z             | 7.34 GB |
| ugv_parking02.7z             | 1.83 GB |
| ugv_parking03.7z             | 1.90 GB |
| ugv_transition00.7z          | 13.76 GB|
| ugv_transition01.7z          | 10.67 GB|
| vehicle_campus00.7z.001      | 14.65 GB|
| vehicle_campus00.7z.002      | 5.78 GB |
| vehicle_campus01.7z          | 13.45 GB|
| vehicle_downhill00.7z        | 17.95 GB|
| vehicle_highway00.7z         | 18.55 GB|
| vehicle_highway01.7z         | 10.56 GB|
| vehicle_multilayer00.7z      | 18.94 GB|
| vehicle_street00.7z          | 17.88 GB|
| vehicle_tunnel00.7z          | 18.61 GB|
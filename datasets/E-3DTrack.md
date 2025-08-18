---
{
    "name": "E-3DTrack",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [
        "Optitrack"
    ],
    "category": "Visual Navigation",
    "subcategory": [
        "3D Tracking",
        "Object Tracking",
        "Stereo Datasets"
    ],
    "task": "3D feature tracking",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/file/d/1gOlNqq7FaRbA9MK8YYUBozxf9a3cYG-S/view?usp=sharing",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 3.3,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "3D Feature Tracking via Event Camera",
        "doi": "10.1109/CVPR52733.2024.01795",
        "authors": [
            "Siqi Li",
            "Zhikuan Zhou",
            "Zhou Xue",
            "Yipeng Li",
            "Shaoyi Du",
            "Yue Gao"
        ],
        "abstract": "This paper presents the first 3D feature tracking method with the corresponding dataset. Our proposed method takes event streams from stereo event cameras as input to pre-dict 3D trajectories of the target features with high-speed motion. To achieve this, our method leverages a joint framework to predict the 2D feature motion offsets and the 3D feature spatial position simultaneously. A motion compensation module is leveraged to overcome the feature deformation. A patch matching module based on bi-polarity hypergraph modeling is proposed to robustly es-timate the feature spatial position. Meanwhile, we collect the first 3D feature tracking dataset with high-speed moving objects and ground truth 3D feature trajectories at 250 FPS, named E-3DTrack, which can be used as the first high-speed 3D feature tracking benchmark. Our code and dataset could be found at: https://github.com/lisiqi19971013/E-3DTrack.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 1,
            "updated": "2025-07-14T08:05:23.597884"
        },
        {
            "source": "scholar",
            "count": 5,
            "updated": "2025-07-14T08:05:23.157031"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://openaccess.thecvf.com/content/CVPR2024/papers/Li_3D_Feature_Tracking_via_Event_Camera_CVPR_2024_paper.pdf"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10655706"
        },
        {
            "type": "github_page",
            "url": "https://github.com/lisiqi19971013/E-3DTrack"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": true
    },
    "bibtex": {
        "year": 2024,
        "booktitle": "Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition",
        "author": "Li, Siqi and Zhou, Zhikuan and Xue Zhou and Li, Yipeng and Du, Shaoyi and Gao, Yue",
        "title": "3D Feature Tracking via Event Camera",
        "type": "inproceedings",
        "key": "e3dtrack"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/TPAMI.2020.3010468",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV.2018.00080",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.102",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.cviu.2007.09.014",
            "source": "crossref"
        },
        {
            "doi": "10.1109/34.121791",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00407",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2022.3182052",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-019-01209-w",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3060707",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV53792.2021.00030",
            "source": "crossref"
        },
        {
            "doi": "10.1109/tpami.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV50981.2020.00063",
            "source": "crossref"
        },
        {
            "doi": "10.1109/cvpr52688.2022.00569",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS47612.2022.9981451",
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
            "doi": "10.1109/CVPR.2017.106",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00638",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00668",
            "source": "crossref"
        },
        {
            "doi": "10.1023/b:visi.0000029664.99615.94",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00546",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00602",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00174",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2903179",
            "source": "crossref"
        },
        {
            "doi": "10.5555/3454287.3455008",
            "source": "crossref"
        },
        {
            "doi": "10.1109/jssc.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/cvpr.1994.323794",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01280",
            "source": "crossref"
        },
        {
            "doi": "10.1109/cvpr52688.2022.00860",
            "source": "crossref"
        },
        {
            "doi": "10.1109/icra.2017.7989517",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.616",
            "source": "crossref"
        },
        {
            "title": "HASTE: Multi-Hypothesis Asynchronous Speeded-up Tracking of Events",
            "source": "crossref"
        },
        {
            "title": "SGDR: Stochastic Gradient Descent with Warm Restarts",
            "source": "crossref"
        },
        {
            "title": "Decoupled Weight Decay Regularization",
            "source": "crossref"
        },
        {
            "title": "An Iterative Image Reg-istration Technique with an Application to Stereo Vision",
            "source": "crossref"
        },
        {
            "title": "Convolutional LSTM Network: A Machine Learning Approach for Precipitation Nowcasting",
            "source": "crossref"
        },
        {
            "title": "Detection and Tracking of Point",
            "source": "crossref"
        },
        {
            "title": "Real-time Time Synchronized Event-Based Stereo",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure
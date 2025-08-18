---
{
    "name": "SHEF",
    "aliases": [],
    "year": 2021,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen3"
    ],
    "other_sensors": [
        "FLIR Chameleon 3"
    ],
    "category": "Depth, Stereo, and 3D Reconstruction",
    "subcategory": [
        "Stereo Datasets",
        "Depth Estimation",
        "Event Frame Fusion"
    ],
    "task": "Disparity Estimation (Stereo Matching)",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "SharePoint"
        ],
        "file_formats": [
            "Binary"
        ],
        "availability_comment": "Dataset link no longer works",
        "dataset_links": [
            {
                "name": "SharePoint",
                "url": "https://anu365-my.sharepoint.com/:f:/g/personal/u6456661_anu_edu_au/EuotzBGRLk1AhfOe9LlZuSQBVtis9MH86vz1DQgt8hzQPA?e=jhRg1h",
                "format": "Binary",
                "available": false
            }
        ]
    },
    "paper": {
        "title": "Stereo Hybrid Event-Frame (SHEF) Cameras for 3D Perception",
        "doi": "10.1109/IROS51168.2021.9636312",
        "authors": [
            "Ziwei Wang",
            "Liyuan Pan",
            "Yonhon Ng",
            "Zheyu Zhuang",
            "Robert Mahony"
        ],
        "abstract": "Stereo camera systems play an important role in robotics applications to perceive the 3D world. However, conventional cameras have drawbacks such as low dynamic range, motion blur and latency due to the underlying frame-based mechanism. Event cameras address these limitations as they report the brightness changes of each pixel independently with a \ufb01ne temporal resolution, but they are unable to acquire absolute intensity information directly. Although integrated hybrid event-frame sensors (e.g., DAVIS) are available, the quality of data is compromised by coupling at the pixel level in the circuit fabrication of such cameras. This paper proposes a stereo hybrid event-frame (SHEF) camera system that offers a sensor modality with separate high-quality pure event and pure frame cameras, overcoming the limitations of each separate sensor and allowing for stereo depth estimation. We provide a SHEF dataset targeted at evaluating disparity estimation algorithms and introduce a stereo disparity estimation algorithm that uses edge information extracted from the event stream correlated with the edge detected in the frame data. Our disparity estimation outperforms the state-of-the-art stereo matching algorithm on the SHEF dataset.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 18,
            "updated": "2025-07-03T09:39:25.932785"
        },
        {
            "source": "scholar",
            "count": 30,
            "updated": "2025-07-03T09:39:25.575125"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2110.04988"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9636312"
        },
        {
            "type": "github_page",
            "url": "https://github.com/ziweiWWANG/SHEF"
        }
    ],
    "full_name": " Stereo Hybrid Event-Frame (SHEF) dataset",
    "additional_metadata": {
        "stereo": true
    },
    "bibtex": {
        "pages": "9758--9764",
        "keywords": "Computer Science - Computer Vision and Pattern Recognition",
        "note": "arXiv:2110.04988 [cs]",
        "year": 2021,
        "month": "sep",
        "author": "Wang, Ziwei and Pan, Liyuan and Ng, Yonhon and Zhuang, Zheyu and Mahony, Robert",
        "booktitle": "2021 {IEEE}/{RSJ} {International} {Conference} on {Intelligent} {Robots} and {Systems} ({IROS})",
        "urldate": "2023-09-26",
        "language": "en",
        "doi": "10.1109/IROS51168.2021.9636312",
        "url": "http://arxiv.org/abs/2110.04988",
        "title": "Stereo {Hybrid} {Event}-{Frame} ({SHEF}) {Cameras} for {3D} {Perception}",
        "type": "inproceedings",
        "key": "wang_stereo_2021"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR.2015.7298925",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.699",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS40897.2019.8968520",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00407",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58583-9_32",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00203",
            "source": "crossref"
        },
        {
            "doi": "10.1631/jzus.A0820318",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00190",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3036667",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00338",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00698",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00168",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01246-5_15",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00161",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2645143",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00174",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00144",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2016.7539103",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-017-1050-6",
            "source": "crossref"
        },
        {
            "doi": "10.1109/EBCCSP.2016.7605086",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2014.6865228",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3068942",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00206",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01589",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2017.2759326",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00432",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2017.00535",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-11752-2_3",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11063-015-9434-5",
            "source": "crossref"
        },
        {
            "title": "Matlab stereo camera calibrator app",
            "source": "crossref"
        },
        {
            "title": "Universal robots - ur5 technical specifications",
            "source": "crossref"
        },
        {
            "title": "3dflow zephyr - the complete photogrammetry solution",
            "source": "crossref"
        },
        {
            "title": "Event camera calibration of per-pixel biased contrast threshold",
            "source": "crossref"
        },
        {
            "title": "An asynchronous kalman filter for hybrid event cameras",
            "source": "crossref"
        },
        {
            "title": "Stereo dense depth tracking based on optical flow using frames and events",
            "source": "crossref"
        },
        {
            "title": "A spiking neural network model of 3D perception for event-based neuromorphic stereo vision systems",
            "source": "crossref"
        },
        {
            "title": "EKLT: Asynchronous photometric feature tracking using events and frames",
            "source": "crossref"
        },
        {
            "title": "Continuous-time intensity estimation using event cameras",
            "source": "crossref"
        },
        {
            "title": "Fast r-cnn",
            "source": "crossref"
        },
        {
            "title": "Robust dense depth map estimation from sparse dvs stereos",
            "source": "crossref"
        },
        {
            "title": "Adam: A method for stochastic optimization",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

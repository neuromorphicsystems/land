---
{
    "name": "NeuroIV",
    "aliases": [],
    "year": 2020,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [
        "RealSense D435i"
    ],
    "category": "Human-centric Recordings",
    "subcategory": [
        "Driver Monitoring",
        "Hand Pose Detection",
        "Gaze Tracking",
        "Eye Tracking",
        "Gesture Recognition"
    ],
    "task": "Driver Monitoring Systems",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Baidu"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "Download link provided requires signing into a Baidu account. Download link: https://pan.baidu.com/s/10AQ-0tMoPW2XnL0LpDlVUQ and the code: 42uj.",
        "dataset_links": [
            {
                "name": "Baidu",
                "url": "https://pan.baidu.com/s/10AQ-0tMoPW2XnL0LpDlVUQ",
                "format": "aedat",
                "available": true
            }
        ],
        "size_gb": 574.0,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "NeuroIV: Neuromorphic Vision Meets Intelligent Vehicle Towards Safe Driving With a New Database and Baseline Evaluations",
        "doi": "10.1109/TITS.2020.3022921",
        "authors": [
            "Guang Chen",
            "Fa Wang",
            "Weijun Li",
            "Lin Hong",
            "Jorg Conradt",
            "Jieneng Chen",
            "Zhenyan Zhang",
            "Yiwen Lu",
            "Alois Knoll"
        ],
        "abstract": "Neuromorphic vision sensors such as the Dynamic and Active-pixel Vision Sensor (DAVIS) using silicon retina are inspired by biological vision, they generate streams of asynchronous events to indicate local log-intensity brightness changes. Their properties of high temporal resolution, low-bandwidth, lightweight computation, and low-latency make them a good fit for many applications of motion perception in the intelligent vehicle. However, as a younger and smaller research field compared to classical computer vision, neuromorphic vision is rarely connected with the intelligent vehicle. For this purpose, we present three novel datasets recorded with DAVIS sensors and depth sensor for the distracted driving research and focus on driver drowsiness detection, driver gaze-zone recognition, and driver hand-gesture recognition. To facilitate the comparison with classical computer vision, we record the RGB, depth and infrared data with a depth sensor simultaneously. The total volume of this dataset has 27360 samples. To unlock the potential of neuromorphic vision on the intelligent vehicle, we utilize three popular event-encoding methods to convert asynchronous event slices to event-frames and adapt state-of-the-art convolutional architectures to extensively evaluate their performances on this dataset. Together with qualitative and quantitative results, this work provides a new database and baseline evaluations named NeuroIV in cross-cutting areas of neuromorphic vision and intelligent vehicle.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 37,
            "updated": "2025-06-13T11:30:46.994202"
        },
        {
            "source": "scholar",
            "count": 52,
            "updated": "2025-06-13T11:30:46.735428"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9234108"
        },
        {
            "type": "github_page",
            "url": "https://github.com/ispc-lab/NeuroIV"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "6840",
        "num_subjects": "30",
        "num_males": "27",
        "num_females": "3",
        "time_of_day": "daytime"
    },
    "bibtex": {
        "pages": "1171--1183",
        "year": 2022,
        "month": "feb",
        "author": "Chen, Guang and Wang, Fa and Li, Weijun and Hong, Lin and Conradt, Jorg and Chen, Jieneng and Zhang, Zhenyan and Lu, Yiwen and Knoll, Alois",
        "journal": "IEEE Transactions on Intelligent Transportation Systems",
        "urldate": "2024-08-18",
        "number": "2",
        "language": "en",
        "doi": "10.1109/TITS.2020.3022921",
        "url": "https://ieeexplore.ieee.org/document/9234108/",
        "shorttitle": "{NeuroIV}",
        "issn": "1524-9050, 1558-0016",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "23",
        "title": "{NeuroIV}: {Neuromorphic} {Vision} {Meets} {Intelligent} {Vehicle} {Towards} {Safe} {Driving} {With} a {New} {Database} and {Baseline} {Evaluations}",
        "type": "article",
        "key": "chen_neuroiv_2022"
    },
    "referenced_papers": [
        {
            "doi": "10.1049/iet-its.2016.0026",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCDS.2018.2875052",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TITS.2017.2749965",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TSMC.2020.3005231",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2012.6248074",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.350",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2009.5206848",
            "source": "crossref"
        },
        {
            "doi": "10.1007/BF01212361",
            "source": "crossref"
        },
        {
            "doi": "10.1002/rob.20255",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MSP.2020.2985815",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSEN.2020.2990752",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSEN.2020.2973049",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.781",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2019.00073",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00186",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00568",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.amepre.2018.11.024",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neucom.2019.02.014",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNSRE.2015.2415520",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TITS.2017.2754467",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TITS.2010.2092770",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2012.6238898",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2012.6238892",
            "source": "crossref"
        },
        {
            "doi": "10.1155/2018/4815383",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ITSC.2006.1706816",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2011.2180025",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7298644",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCPHOT.2015.7168370",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7758089",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2793357",
            "source": "crossref"
        },
        {
            "doi": "10.1109/DSPWS.2006.265448",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01231-1_27",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2019.2914373",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TITS.2016.2582900",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TITS.2013.2262098",
            "source": "crossref"
        },
        {
            "doi": "10.1109/SSCI.2017.8285343",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-54526-4_9",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TITS.2010.2091503",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2018.00281",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.23",
            "source": "crossref"
        },
        {
            "doi": "10.5220/0006104501940201",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-012-0549-0",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2012.6247980",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IVS.2017.7995922",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TITS.2013.2247759",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIV.2018.2843120",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neucom.2016.12.088",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00050",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW.2017.370",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2014.2308551",
            "source": "crossref"
        },
        {
            "doi": "10.5244/c.31.33",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00422-006-0068-6",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnbot.2019.00010",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7298714",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCE.2017.014971",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.308",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2016.2582924",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7298878",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.510",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00054",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2014.131",
            "source": "crossref"
        },
        {
            "title": "DDD17: End-to-end DAVIS driving dataset",
            "source": "crossref"
        },
        {
            "title": "Long-term multi-granularity deep framework for driver drowsiness detection",
            "source": "crossref"
        },
        {
            "title": "Pseudo-labels for supervised learning on dynamic vision sensor data, applied to object detection under ego-motion",
            "source": "crossref"
        },
        {
            "title": "A torch library for action recognition and detection using CNNs and LSTMs",
            "source": "crossref"
        },
        {
            "title": "Very deep convolutional networks for large-scale image recognition",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Contains 6840 recordings from 30 subjects ([27] males and 3 females).
- The dataset was recorded during daytime.

The dataset consists of three sub-datasets:

1. Driver Drowsiness Dataset
2. Driver Gaze-Zone Dataset
3. Driver Hand-Gesture Dataset

The dataset contains 540 DVS samples from the Driver Drowsiness Dataset, 1500 samples from the Driver Gaze-Zone dataset, and 4800 samples from the Driver Hand-Gesture dataset.

The RealSense D435i has a resolution of 640 x 360 pixels.

Download link: [https://pan.baidu.com/s/10AQ-0tMoPW2XnL0LpDlVUQ](https://pan.baidu.com/s/10AQ-0tMoPW2XnL0LpDlVUQ) and the code: 42uj.

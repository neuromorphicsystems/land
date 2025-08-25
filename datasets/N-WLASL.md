---
{
    "name": "N-WLASL",
    "aliases": [],
    "year": 2023,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Sign Language",
        "Hand Pose Detection",
        "Monitor Conversion"
    ],
    "description": "Sign Language Interpretation",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "IEEE Dataport"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "Code to generate the dataset is provided on IEEE DataPort",
        "dataset_links": [
            {
                "name": "IEEE Dataport",
                "url": "https://ieee-dataport.org/documents/n-wlasl",
                "format": "aedat",
                "available": true,
                "doi": "10.21227/x23b-d084"
            }
        ]
    },
    "paper": {
        "title": "QISampling: An Effective Sampling Strategy for Event-Based Sign Language Recognition",
        "doi": "10.1109/LSP.2023.3289111",
        "authors": [
            "Qi Shi",
            "Zhongfu Ye",
            "Jin Wang",
            "Yueyi Zhang"
        ],
        "abstract": "N-WLASL dataset is a synthetic event-based dataset comprising 21,093 samples across 2,000 glosses. The dataset was collected using an event camera to shoot toward an LCD monitor. The monitor plays video frames from WLASL, the largest public word-level American Sign Language dataset. We use the event camera DAVIS346 with a resolution of 346x260 to record the display. The video resolution of WLASL is 256x256 and the frame rate is 25Hz. To ensure accurate recording of the display, we have implemented three video pre-processing procedures using the python-opencv and dv packages in Python.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 6,
            "updated": "2025-06-14T14:41:22.351872"
        },
        {
            "source": "scholar",
            "count": 8,
            "updated": "2025-06-14T14:41:21.848973"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10160125"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "dataset_source": "WLASL",
        "num_recordings": "21093",
        "num_classes": "2000",
        "stereo": false
    },
    "bibtex": {
        "pages": "768--772",
        "year": 2023,
        "author": "Shi, Qi and Ye, Zhongfu and Wang, Jin and Zhang, Yueyi",
        "journal": "IEEE Signal Processing Letters",
        "urldate": "2024-12-14",
        "language": "en",
        "doi": "10.1109/LSP.2023.3289111",
        "url": "https://ieeexplore.ieee.org/document/10160125/",
        "shorttitle": "{QISampling}",
        "issn": "1070-9908, 1558-2361",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "30",
        "title": "{QISampling}: {An} {Effective} {Sampling} {Strategy} for {Event}-{Based} {Sign} {Language} {Recognition}",
        "type": "article",
        "key": "shi_qisampling_2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1007/s10044-021-01011-w",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2020.00424",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2018.00331",
            "source": "crossref"
        },
        {
            "doi": "10.1016/S0893-6080(98)00116-6",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.502",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.781",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV50981.2020.00063",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV48630.2021.00347",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TMM.2019.2915032",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2009.5206523",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46484-8_2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW56347.2022.00301",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV45572.2020.9093512",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LSP.2018.2797228",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3093870",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58583-9_32",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00405",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01946",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01931",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01345",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV.2019.00199",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3060707",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2018.2870740",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICME.2015.7177428",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v35i2.16247",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3436754",
            "source": "crossref"
        },
        {
            "title": "SLAYER: Spike layer error reassignment in time",
            "source": "crossref"
        },
        {
            "title": "TSM: Temporal shift module for efficient and scalable video understanding on edge devices",
            "source": "crossref"
        },
        {
            "title": "UniFormer: Unified transformer for efficient spatial-temporal representation learning",
            "source": "crossref"
        },
        {
            "title": "Event-stream representation for human gaits identification using deep neural networks",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

N-WLASL dataset is a synthetic event-based dataset comprising 21,093 samples across 2,000 glosses. The dataset was collected using an event camera to shoot toward an LCD monitor. The monitor plays video frames from WLASL, the largest public word-level American Sign Language dataset. We use the event camera DAVIS346 with a resolution of 346x260 to record the display. The video resolution of WLASL is 256x256 and the frame rate is 25Hz. To ensure accurate recording of the display, we have implemented three video pre-processing procedures using the python-opencv and dv packages in Python. These procedures are as follows:

Add black paddings and red borders around video frames to increase their size to 346x260.

Center the video frames on the monitor display after scaling them to 1428x1080 in the original aspect ratio.

Display all videos sequentially at the original frame rate of 25Hz and pause the first frame of each video for 500ms to prevent event bursts brought on by swapping videos.

- Converted from the WLASL dataset[^1]
- Contains 21093 recordings
- Contains 2000 classes

\[^1\]: Li, D., Rodriguez, C., Yu, X. and Li, H., 2020. Word-level deep sign language recognition from video: A new large-scale dataset and methods comparison. In _Proceedings of the IEEE/CVF winter conference on applications of computer vision_ (pp. 1459-1469).

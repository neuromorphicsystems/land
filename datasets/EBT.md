---
{
    "name": "EBT",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "ESIM",
        "DAVIS346 Colour"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "subcategory": [
        "Event Frame Fusion",
        "De-blurring"
    ],
    "task": "Video Binarization",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "Matlab"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://datahub.hku.hk/articles/dataset/The_event_bimodal_target_dataset/25427659/1",
                "format": "Matlab",
                "available": true
            }
        ],
        "size_gb": 24.04,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Neuromorphic Synergy for Video Binarization",
        "doi": "10.1109/TIP.2024.3364529",
        "authors": [
            "Shijie Lin",
            "Xiang Zhang",
            "Lei Yang",
            "Lei Yu",
            "Bin Zhou",
            "Xiaowei Luo",
            "Wenping Wang",
            "Jia Pan"
        ],
        "abstract": "Bimodal objects, such as the checkerboard pattern used in camera calibration, markers for object tracking, and text on road signs, to name a few, are prevalent in our daily lives and serve as a visual form to embed information that can be easily recognized by vision systems. While binarization from intensity images is crucial for extracting the embedded information in the bimodal objects, few previous works consider the task of binarization of blurry images due to the relative motion between the vision sensor and the environment. The blurry images can result in a loss in the binarization quality and thus degrade the downstream applications where the vision system is in motion. Recently, neuromorphic cameras offer new capabilities for alleviating motion blur, but it is non-trivial to first deblur and then binarize the images in a real-time manner. In this work, we propose an event-based binary reconstruction method that leverages the prior knowledge of the bimodal target\u2019s properties to perform inference independently in both event space and image space and merge the results from both domains to generate a sharp binary image. We also develop an efficient integration method to propagate this binary image to high frame rate binary video. Finally, we develop a novel method to naturally fuse events and images for unsupervised threshold identification. The proposed method is evaluated in publicly available and our collected data sequence, and shows the proposed method can outperform the SOTA methods to generate high frame rate binary video in real-time on CPU-only devices.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 1,
            "updated": "2025-07-02T08:20:01.380535"
        },
        {
            "source": "scholar",
            "count": 2,
            "updated": "2025-07-02T08:20:00.958625"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2402.12644"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10438401"
        },
        {
            "type": "github_page",
            "url": "https://github.com/eleboss/EBR?tab=readme-ov-file"
        }
    ],
    "full_name": "Event-based Bimodal Target dataset (EBT)",
    "bibtex": {
        "pages": "1403--1418",
        "year": 2024,
        "author": "Lin, Shijie and Zhang, Xiang and Yang, Lei and Yu, Lei and Zhou, Bin and Luo, Xiaowei and Wang, Wenping and Pan, Jia",
        "journal": "IEEE Transactions on Image Processing",
        "urldate": "2024-12-15",
        "language": "en",
        "doi": "10.1109/TIP.2024.3364529",
        "url": "https://ieeexplore.ieee.org/document/10438401/",
        "issn": "1057-7149, 1941-0042",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "33",
        "title": "Neuromorphic {Synergy} for {Video} {Binarization}",
        "type": "article",
        "key": "lin_neuromorphic_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/IROS.2016.7759617",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2008.4650703",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s21093028",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patcog.2018.08.011",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2012.2231089",
            "source": "crossref"
        },
        {
            "doi": "10.1088/1742-6596/1019/1/012022",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2011.5979561",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01586",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2022.3228168",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2022.3162962",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2022.3220938",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2023.3240397",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00338",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3036667",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2021.3052070",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00050",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TMM.2022.3199556",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00258",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-642-15549-9_12",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00146",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2007.378616",
            "source": "crossref"
        },
        {
            "doi": "10.1117/12.2679683",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2021.3058423",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV45572.2020.9093493",
            "source": "crossref"
        },
        {
            "doi": "10.1117/12.805827",
            "source": "crossref"
        },
        {
            "doi": "10.1080/2151237X.2007.10129236",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10044-003-0197-7",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TSMC.1979.4310076",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10032-012-0192-x",
            "source": "crossref"
        },
        {
            "doi": "10.23919/MVA.2017.7986876",
            "source": "crossref"
        },
        {
            "doi": "10.3390/jimaging5040048",
            "source": "crossref"
        },
        {
            "doi": "10.1145/1179352.1141956",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2013.147",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2017.2753804",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7298677",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.35",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00699",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58598-3_41",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-642-33715-4_38",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neucom.2017.01.080",
            "source": "crossref"
        },
        {
            "doi": "10.1117/1.JEI.27.3.033043",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2015.2432675",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2927311",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.ijleo.2020.164902",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patcog.2009.12.024",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.heliyon.2019.e02613",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58601-0_10",
            "source": "crossref"
        },
        {
            "doi": "10.3837/tiis.2021.05.011",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-019-01209-w",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58583-9_32",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19797-0_24",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00663",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2014.371",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01724",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TED.2017.2717848",
            "source": "crossref"
        },
        {
            "doi": "10.1186/s12864-019-6413-7",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICPR.2010.579",
            "source": "crossref"
        },
        {
            "doi": "10.1109/34.888718",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2015.2481420",
            "source": "crossref"
        },
        {
            "title": "TagSLAM: Robust SLAM with fiducial markers",
            "source": "crossref"
        },
        {
            "title": "Learning to deblur and generate high frame rate video with an event camera",
            "source": "crossref"
        },
        {
            "title": "Event camera calibration of per-pixel biased contrast threshold",
            "source": "crossref"
        },
        {
            "title": "ESIM: An open event camera simulator",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure
- Contains 23 simulated sequences and 26 real sequences
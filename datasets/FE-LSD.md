---
{
    "name": "FE-LSD",
    "aliases": [
        "FE-BlurFrame",
        "FE-Wireframe"
    ],
    "year": 2023,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346",
        "ESIM"
    ],
    "other_sensors": [],
    "category": "Depth, Stereo, and 3D Reconstruction",
    "tags": [
        "Line Segmentation"
    ],
    "description": "Line Segmentation",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Baidu"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "Dataset files are compressed using the rar format.",
        "dataset_links": [
            {
                "name": "Baidu",
                "url": "https://pan.baidu.com/s/19nWYeWQMn9qbvLErHsOyYw?pwd=spth",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 22.46,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Detecting Line Segments in Motion-Blurred Images With Events",
        "doi": "10.1109/TPAMI.2023.3334877",
        "authors": [
            "Huai Yu",
            "Hao Li",
            "Wen Yang",
            "Lei Yu",
            "Gui-Song Xia"
        ],
        "abstract": "Making line segment detectors more reliable under motion blurs is one of the most important challenges for practical applications, such as visual SLAM and 3D line mapping. Existing line segment detection methods face severe performance degradation for accurately detecting and locating line segments when motion blur occurs. While event data shows strong complementary characteristics to images for minimal blur and edge awareness at high-temporal resolution, potentially beneficial for reliable line segment recognition. To robustly detect line segments over motion blurs, we propose to leverage the complementary information of images and events. Specifically, we first design a general frame-event feature fusion network to extract and fuse the detailed image textures and low-latency event edges, which consists of a channel-attention-based shallow fusion module and a self-attention-based dual hourglass module. We then utilize the state-of-the-art wireframe parsing networks to detect line segments on the fused feature map. Moreover, due to the lack of line segment detection datasets with pairwise motion-blurred images and events, we contribute two datasets, i.e., synthetic FE-Wireframe and realistic FE-Blurframe, for network training and evaluation. Extensive analyses on the component configurations demonstrate the design effectiveness of our fusion network. When compared to the state-of-the-arts, the proposed approach achieves the highest detection accuracy while maintaining comparable real-time performance. In addition to being robust to motion blur, our method also exhibits superior performance for line detection under high dynamic range scenes.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 6,
            "updated": "2025-06-03T12:37:16.439129"
        },
        {
            "source": "scholar",
            "count": 12,
            "updated": "2025-06-03T12:37:15.063859"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2211.07365"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10323537"
        },
        {
            "type": "github_page",
            "url": "https://levenberg.github.io/FE-LSD/"
        }
    ],
    "full_name": "",
    "bibtex": {
        "pages": "2866--2881",
        "year": 2024,
        "month": "may",
        "author": "Yu, Huai and Li, Hao and Yang, Wen and Yu, Lei and Xia, Gui-Song",
        "journal": "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        "urldate": "2024-09-23",
        "number": "5",
        "language": "en",
        "doi": "10.1109/TPAMI.2023.3334877",
        "url": "https://ieeexplore.ieee.org/document/10323537/",
        "issn": "0162-8828, 2160-9292, 1939-3539",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "46",
        "title": "Detecting {Line} {Segments} in {Motion}-{Blurred} {Images} {With} {Events}",
        "type": "article",
        "key": "Yu2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR.2018.00663",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.02054",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2019.2899783",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2020.3039675",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TITS.2021.3102479",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2008.300",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-30645-8_15",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00424",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00286",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.isprsjprs.2021.06.004",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV.2011.5711498",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00699",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.cag.2005.10.007",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patcog.2006.10.005",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00105",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01589",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01263",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.30.94",
            "source": "crossref"
        },
        {
            "doi": "10.1109/EBCCSP.2016.7605244",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2014.2387020",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.620",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patrec.2011.06.001",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2017.2703841",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00072",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2958642",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00727",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3394171.3413784",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58542-6_20",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01121",
            "source": "crossref"
        },
        {
            "doi": "10.1016/S1571-0653(04)00500-1",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-642-10210-3_14",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2018.2807983",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3061404",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnbot.2018.00004",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00210",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS51168.2021.9636824",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00568",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2013.2273537",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "doi": "10.48550/ARXIV.1807.06521",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00745",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46484-8_29",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01186",
            "source": "crossref"
        },
        {
            "doi": "10.48550/ARXIV.1706.03762",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00168",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00938",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00258",
            "source": "crossref"
        },
        {
            "title": "ESIM: An open event camera simulator",
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

- Consists of a real-world and simulated dataset:
  - Real-world dataset: FE-Blurframe
    - The size of the real-world dataset is 1.13 Gb
    - Contains 800 recordings
  - Simulated dataset: FE-Wireframe
    - The size of the simulated dataset is 21.33 Gb
